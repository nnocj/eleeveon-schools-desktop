'use strict';
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const FORMAT = 'eleeveon-indexeddb-snapshot-v1';
const MAX_BYTES = 50 * 1024 * 1024;
const FILE_NAME = 'EleeveonDB.snapshot.eleeveon';
const sha256 = buf => crypto.createHash('sha256').update(buf).digest('hex');
function assertAccount(accountId) {
  if (typeof accountId !== 'string' || !/^[\w.:-]{1,160}$/.test(accountId)) throw Error('Invalid account identity');
}
function validateRequest(input) {
  if (!input || typeof input !== 'object') throw Error('Missing snapshot input');
  assertAccount(input.accountId);
  if (input.database !== 'EleeveonDB') throw Error('Unrecognized database');
  if (typeof input.snapshot !== 'string' || !input.snapshot.length || Buffer.byteLength(input.snapshot) > MAX_BYTES) throw Error('Invalid or oversized snapshot');
  let snapshot; try { snapshot = JSON.parse(input.snapshot); } catch { throw Error('Malformed snapshot'); }
  if (snapshot.format !== 'eleeveon-independent-snapshot' || snapshot.version !== 1 || snapshot.database !== input.database || snapshot.accountId !== input.accountId || !Number.isInteger(snapshot.indexedDBVersion) || snapshot.indexedDBVersion < 1 || !Array.isArray(snapshot.tables) || !snapshot.tables.length) throw Error('Snapshot identity or format is invalid');
  const names = new Set();
  for (const table of snapshot.tables) {
    if (!table || typeof table.name !== 'string' || !table.name || names.has(table.name) || !Array.isArray(table.rows)) throw Error('Invalid snapshot table');
    if (!(table.keyPath === null || typeof table.keyPath === 'string' || (Array.isArray(table.keyPath) && table.keyPath.every(x => typeof x === 'string')))) throw Error('Invalid primary key schema');
    if (typeof table.autoIncrement !== 'boolean') throw Error('Invalid table schema');
    for (const row of table.rows) if (!row || typeof row !== 'object' || !Object.hasOwn(row, 'key') || !Object.hasOwn(row, 'value')) throw Error('Invalid snapshot row');
    names.add(table.name);
  }
  return snapshot;
}
function assertVault(vault, accountId) {
  if (!vault?.key || vault.key.length !== 32 || !vault.folder) throw Error('Unlock the school vault first');
  assertAccount(accountId);
}
function verifyRecord(record, key, accountId) {
  if (!record || record.format !== FORMAT || record.accountId !== accountId || record.database !== 'EleeveonDB') throw Error('Encrypted snapshot belongs to a different school or uses an unknown format');
  const iv = Buffer.from(record.iv || '', 'base64'), tag = Buffer.from(record.tag || '', 'base64');
  if (iv.length !== 12 || tag.length !== 16) throw Error('Encrypted snapshot header is damaged');
  const aad = Buffer.from(`${FORMAT}:${accountId}:EleeveonDB`);
  const cipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  cipher.setAAD(aad); cipher.setAuthTag(tag);
  const raw = Buffer.from(record.ciphertext || '', 'base64');
  if (raw.length > MAX_BYTES + 16) throw Error('Snapshot exceeds safe size');
  const plaintext = Buffer.concat([cipher.update(raw), cipher.final()]);
  if (plaintext.length > MAX_BYTES) throw Error('Snapshot exceeds safe size');
  const snapshot = validateRequest({accountId, database:'EleeveonDB', snapshot:plaintext.toString('utf8')});
  return { snapshot, encoded:plaintext.toString('utf8'), sha256:sha256(plaintext), bytes:plaintext.length };
}
async function readEncryptedSnapshot({vault, licensedAccountId, usePrevious = false}) {
  assertVault(vault, licensedAccountId);
  const file = path.join(vault.folder, FILE_NAME + (usePrevious ? '.previous' : ''));
  const stat = await fs.promises.stat(file);
  if (stat.size > MAX_BYTES * 2) throw Error('Encrypted snapshot is too large');
  const record = JSON.parse(await fs.promises.readFile(file, 'utf8'));
  const output = verifyRecord(record, vault.key, licensedAccountId);
  return { ...output, previous:usePrevious, createdAt:output.snapshot.createdAt, indexedDBVersion:output.snapshot.indexedDBVersion, stores:output.snapshot.tables.length, records:output.snapshot.tables.reduce((sum,t)=>sum+t.rows.length,0) };
}
// Serialize same-vault calls so adjacent snapshots cannot rotate each other's temporary files.
const pending = new Map();
function withFolderLock(folder, cb) {
  const previous = pending.get(folder) || Promise.resolve();
  const current = previous.catch(()=>{}).then(cb);
  pending.set(folder,current);
  void current.finally(()=>{if (pending.get(folder) === current) pending.delete(folder);}).catch(()=>{});
  return current;
}
async function persistEncryptedSnapshot({vault, licensedAccountId, input}) {
  assertVault(vault, licensedAccountId);
  if (licensedAccountId !== input?.accountId) throw Error('Account is not authorized for this installation');
  validateRequest(input);
  return withFolderLock(vault.folder, async () => {
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv('aes-256-gcm', vault.key, iv);
    cipher.setAAD(Buffer.from(`${FORMAT}:${input.accountId}:${input.database}`));
    const ciphertext = Buffer.concat([cipher.update(input.snapshot, 'utf8'),cipher.final()]);
    const record = {format:FORMAT, accountId:input.accountId, database:input.database, iv:iv.toString('base64'),tag:cipher.getAuthTag().toString('base64'),ciphertext:ciphertext.toString('base64')};
    const file = path.join(vault.folder, FILE_NAME);
    const previous = file + '.previous';
    const tmp = file + '.' + crypto.randomBytes(8).toString('hex') + '.tmp';
    try {
      await fs.promises.writeFile(tmp, JSON.stringify(record),{flag:'wx',mode:0o600});
      const checked = verifyRecord(JSON.parse(await fs.promises.readFile(tmp,'utf8')),vault.key,licensedAccountId);
      if (checked.sha256 !== sha256(Buffer.from(input.snapshot))) throw Error('Snapshot read-back verification failed');
      // Fail closed if the previous primary exists but cannot be decrypted/validated.
      // Do not rotate a corrupt primary over the last good recovery copy.
      try {
        await fs.promises.stat(file);
        const prior = JSON.parse(await fs.promises.readFile(file,'utf8'));
        verifyRecord(prior,vault.key,licensedAccountId);
        await fs.promises.copyFile(file,previous);
      } catch (e) {if (e?.code !== 'ENOENT') throw e;}
      await fs.promises.rename(tmp,file);
      return {saved:true,accountId:input.accountId,database:input.database,sha256:checked.sha256,bytes:checked.bytes};
    } finally {await fs.promises.rm(tmp,{force:true}).catch(()=>{});}
  });
}
module.exports = {persistEncryptedSnapshot,readEncryptedSnapshot,validateRequest,FORMAT,FILE_NAME};

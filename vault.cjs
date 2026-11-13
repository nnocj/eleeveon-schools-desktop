'use strict';
// Offline, atomic, AES-256-GCM local vault. All school data remains in selected folder.
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const {promisify}=require('node:util');
const scrypt=promisify(crypto.scrypt);
const FORMAT='eleeveon-local-vault-v1';
const PASS_LENGTH=12;
function validDir(dir){if(typeof dir!=='string'||!path.isAbsolute(dir))throw Error('Absolute folder path required');return path.resolve(dir);}
function makeEmpty(){return {version:1,schoolName:'',createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),students:[],classes:[],notes:[]};}
async function derive(password,salt){if(typeof password!=='string'||password.length<PASS_LENGTH)throw Error('Password must have at least 12 characters');return scrypt(password,salt,32,{N:16384,r:8,p:1,maxmem:64*1024*1024});}
function encrypt(data,key){const iv=crypto.randomBytes(12);const c=crypto.createCipheriv('aes-256-gcm',key,iv);c.setAAD(Buffer.from(FORMAT));const bytes=Buffer.concat([c.update(Buffer.from(JSON.stringify(data))),c.final()]);return {format:FORMAT,iv:iv.toString('base64'),tag:c.getAuthTag().toString('base64'),data:bytes.toString('base64')};}
function decrypt(record,key){if(record?.format!==FORMAT)throw Error('Not an Eleeveon local vault');const d=crypto.createDecipheriv('aes-256-gcm',key,Buffer.from(record.iv,'base64'));d.setAAD(Buffer.from(FORMAT));d.setAuthTag(Buffer.from(record.tag,'base64'));const output=JSON.parse(Buffer.concat([d.update(Buffer.from(record.data,'base64')),d.final()]).toString());validateData(output);return output;}
function validateData(v){if(!v||v.version!==1||typeof v.schoolName!=='string'||!Array.isArray(v.students)||!Array.isArray(v.classes)||!Array.isArray(v.notes))throw Error('Invalid vault structure');if(v.students.length>1_000_000)throw Error('Suspicious vault size');}
async function atomicWrite(file,data){await fs.promises.mkdir(path.dirname(file),{recursive:true});const temp=file+'.'+crypto.randomBytes(8).toString('hex')+'.tmp';try{await fs.promises.writeFile(temp,JSON.stringify(data),{flag:'wx',mode:0o600});await fs.promises.rename(temp,file);}finally{await fs.promises.rm(temp,{force:true}).catch(()=>{});}}
async function newVault(folder,schoolName,password){folder=validDir(folder);if(typeof schoolName!=='string'||!schoolName.trim())throw Error('School name required');const file=path.join(folder,'school.eleeveon');if(fs.existsSync(file))throw Error('Folder already contains a school vault; open instead of overwriting');const salt=crypto.randomBytes(16);const key=await derive(password,salt);const data=makeEmpty();data.schoolName=schoolName.trim();await atomicWrite(file,{salt:salt.toString('base64'),...encrypt(data,key)});return {folder,key,data};}
async function openVault(folder,password){folder=validDir(folder);const record=JSON.parse(await fs.promises.readFile(path.join(folder,'school.eleeveon'),'utf8'));const key=await derive(password,Buffer.from(record.salt,'base64'));const data=decrypt(record,key);return {folder,key,data};}
async function saveVault(vault){validateData(vault.data);vault.data.updatedAt=new Date().toISOString();const file=path.join(vault.folder,'school.eleeveon');const old=JSON.parse(await fs.promises.readFile(file,'utf8'));await atomicWrite(file,{salt:old.salt,...encrypt(vault.data,vault.key)});}
async function changePassword(vault,currentPassword,newPassword){
  if(!vault||!vault.folder||!vault.key)throw Error('Unlock the school first');
  if(typeof newPassword!=='string'||newPassword.length<PASS_LENGTH)throw Error('New password must have at least 12 characters');
  if(currentPassword===newPassword)throw Error('Choose a different new password');
  const file=path.join(vault.folder,'school.eleeveon');
  // Read the persisted vault and authenticate the current password BEFORE changing anything.
  const existing=JSON.parse(await fs.promises.readFile(file,'utf8'));
  const oldKey=await derive(currentPassword,Buffer.from(existing.salt,'base64'));
  const persisted=decrypt(existing,oldKey);
  // Do not silently re-encrypt data that differs from the open in-memory state.
  // All writes from this app are serialized by the main process.
  if(JSON.stringify(persisted.students)!==JSON.stringify(vault.data.students)||
     JSON.stringify(persisted.classes)!==JSON.stringify(vault.data.classes)||
     JSON.stringify(persisted.notes)!==JSON.stringify(vault.data.notes)){
    throw Error('Vault was modified since it was unlocked. Lock and reopen before changing its password');
  }
  const salt=crypto.randomBytes(16);
  const newKey=await derive(newPassword,salt);
  await atomicWrite(file,{salt:salt.toString('base64'),...encrypt(persisted,newKey)});
  vault.key=newKey;
  vault.data=persisted;
  return {changed:true,olderBackupsRequireOldPassword:true};
}
function isNestedFolder(a,b){const rel=path.relative(a,b);return rel===''||(!rel.startsWith('..')&&!path.isAbsolute(rel));}
async function backupVault(vault,backupFolder){backupFolder=validDir(backupFolder);if(isNestedFolder(vault.folder,backupFolder)||isNestedFolder(backupFolder,vault.folder))throw Error('Backup folder must be separate from live school data folder');const date=new Date().toISOString().replace(/[:.]/g,'-');const filename='Eleeveon-'+date+'-'+crypto.randomBytes(4).toString('hex')+'.eleeveonbak';await fs.promises.mkdir(backupFolder,{recursive:true});const input=await fs.promises.readFile(path.join(vault.folder,'school.eleeveon'));const file=path.join(backupFolder,filename);await fs.promises.writeFile(file,input,{flag:'wx',mode:0o600});return {file,sha256:crypto.createHash('sha256').update(input).digest('hex'),bytes:input.length};}
/** Read and authenticate an archived vault without changing the live installation.
 * Older backups may require a password different from the currently unlocked vault.
 */
async function inspectBackup(vault,backupFile,backupPassword){
  if(!vault?.key) throw Error('Unlock the school first');
  if(typeof backupFile!=='string'||!path.isAbsolute(backupFile)||path.extname(backupFile).toLowerCase()!=='.eleeveonbak')throw Error('Select an Eleeveon backup file');
  const bytes=await fs.promises.readFile(backupFile);
  if(bytes.length>250*1024*1024)throw Error('Backup exceeds the supported inspection limit');
  const rec=JSON.parse(bytes.toString('utf8'));
  const key=backupPassword ? await derive(backupPassword,Buffer.from(rec.salt,'base64')) : vault.key;
  const recovered=decrypt(rec,key);
  if(recovered.schoolName!==vault.data.schoolName)throw Error('Backup belongs to a different school');
  return {recovered,sha256:crypto.createHash('sha256').update(bytes).digest('hex'),bytes:bytes.length,students:recovered.students.length,classes:recovered.classes.length,createdAt:recovered.createdAt,updatedAt:recovered.updatedAt};
}
async function restoreVault(vault,backupFile,backupPassword){
  const inspected=await inspectBackup(vault,backupFile,backupPassword);
  // Always preserve current live state first, and never overwrite the vault with
  // the older backup's encryption key (it may differ after a password change).
  const safety=await backupVault(vault,path.join(path.dirname(vault.folder),'Eleeveon-Safety-Backups'));
  const prior=vault.data;
  vault.data=inspected.recovered;
  try {await saveVault(vault);} catch(e) {vault.data=prior;throw e;}
  return {safetyBackup:safety.file,sha256:inspected.sha256};
}
module.exports={FORMAT,newVault,openVault,saveVault,backupVault,restoreVault,inspectBackup,changePassword,validateData,encrypt,decrypt,derive};

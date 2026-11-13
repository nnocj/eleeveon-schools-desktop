'use strict';
const test=require('node:test');const assert=require('node:assert/strict');const os=require('node:os');const fs=require('node:fs');const path=require('node:path');
const vault=require('../vault.cjs');
test('backup created before password rotation can be inspected and restored with original password',async()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'eleeveon-rotate-'));
 try{
  const original='Old-secret-1234567',updated='New-secret-9876543';
  const v=await vault.newVault(path.join(root,'live'),'Example Test School',original);
  v.data.students.push({id:'id-1',name:'Initial',admission:'EX-001'});await vault.saveVault(v);
  const backup=await vault.backupVault(v,path.join(root,'backups'));
  await vault.changePassword(v,original,updated);
  v.data.students.push({id:'id-2',name:'Later',admission:'EX-002'});await vault.saveVault(v);
  await assert.rejects(()=>vault.inspectBackup(v,backup.file),/auth|authenticate|Unsupported|unable|state/i);
  const details=await vault.inspectBackup(v,backup.file,original);
  assert.equal(details.students,1);
  await assert.rejects(()=>vault.restoreVault(v,backup.file,'wrong-password-123'),/auth|authenticate|unable|state/i);
  assert.equal((await vault.openVault(v.folder,updated)).data.students.length,2);
  const restored=await vault.restoreVault(v,backup.file,original);
  assert.ok(fs.existsSync(restored.safetyBackup));
  assert.equal((await vault.openVault(v.folder,updated)).data.students.length,1);
  await assert.rejects(()=>vault.openVault(v.folder,original));
 }finally{fs.rmSync(root,{recursive:true,force:true});}
});
test('cross-school backup is refused without mutation',async()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'eleeveon-scope-'));
 try{
  const key='Test-password-1234';
  const a=await vault.newVault(path.join(root,'a'),'School A',key);
  const b=await vault.newVault(path.join(root,'b'),'School B',key);
  const bak=await vault.backupVault(a,path.join(root,'bak'));
  await assert.rejects(()=>vault.restoreVault(b,bak.file,key),/different school/);
  assert.equal((await vault.openVault(b.folder,key)).data.schoolName,'School B');
 }finally{fs.rmSync(root,{recursive:true,force:true});}
});

'use strict';const test=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const os=require('node:os');const path=require('node:path');const vault=require('../vault.cjs');
test('new, persisted, encrypted, backed up, restored; bad password rejected',async()=>{const root=await fs.promises.mkdtemp(path.join(os.tmpdir(),'eleeveon-test-'));try{const data=path.join(root,'live');const backup=path.join(root,'drive');const password='independent-test-passphrase-123';const school=await vault.newVault(data,'Demo School',password);school.data.students.push({id:'a',name:'Learner A',admission:'D-001'});await vault.saveVault(school);const raw=await fs.promises.readFile(path.join(data,'school.eleeveon'),'utf8');assert.equal(raw.includes('Learner A'),false);await assert.rejects(()=>vault.openVault(data,'incorrect-password'));const saved=await vault.backupVault(school,backup);assert.ok(fs.existsSync(saved.file));school.data.students.push({id:'b',name:'Learner B',admission:'D-002'});await vault.saveVault(school);const restored=await vault.restoreVault(school,saved.file);assert.equal(school.data.students.length,1);assert.ok(fs.existsSync(restored.safetyBackup));const reopened=await vault.openVault(data,password);assert.equal(reopened.data.students[0].admission,'D-001');}finally{await fs.promises.rm(root,{recursive:true,force:true});}});
test('prevent backup into live data',async()=>{const root=await fs.promises.mkdtemp(path.join(os.tmpdir(),'eleeveon-test-'));try{const v=await vault.newVault(path.join(root,'live'),'Demo','long-test-password');await assert.rejects(()=>vault.backupVault(v,path.join(root,'live','backups')));}finally{await fs.promises.rm(root,{recursive:true,force:true});}});

test('password change re-encrypts disk, rejects old password, retains records',async()=>{
 const root=await fs.promises.mkdtemp(path.join(os.tmpdir(),'eleeveon-rotate-'));
 try{
  const dir=path.join(root,'school');const old='old-very-strong-password';const fresh='new-even-stronger-password';
  const v=await vault.newVault(dir,'Demo',old);v.data.students.push({id:'a',name:'Learner A',admission:'001'});await vault.saveVault(v);
  const before=await fs.promises.readFile(path.join(dir,'school.eleeveon'),'utf8');
  await assert.rejects(()=>vault.changePassword(v,'wrong-current-password',fresh));
  assert.equal(await fs.promises.readFile(path.join(dir,'school.eleeveon'),'utf8'),before);
  await vault.changePassword(v,old,fresh);
  await assert.rejects(()=>vault.openVault(dir,old));
  const reopened=await vault.openVault(dir,fresh);
  assert.equal(reopened.data.students[0].name,'Learner A');
  v.data.students.push({id:'b',name:'Learner B',admission:'002'});await vault.saveVault(v);
  assert.equal((await vault.openVault(dir,fresh)).data.students.length,2);
 }finally{await fs.promises.rm(root,{recursive:true,force:true});}
});

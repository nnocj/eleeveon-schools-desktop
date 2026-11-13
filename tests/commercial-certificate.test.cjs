'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const fs=require('node:fs');
const os=require('node:os');
const path=require('node:path');
const {createLicenseStore}=require('../offline-license.cjs');
const {privateKey,publicKey}=crypto.generateKeyPairSync('ec',{namedCurve:'prime256v1',privateKeyEncoding:{format:'pem',type:'pkcs8'},publicKeyEncoding:{format:'pem',type:'spki'}});
const accountId=crypto.randomUUID();
function setup(edition='independent_essentials',major=1){
 const directory=fs.mkdtempSync(path.join(os.tmpdir(),'eleeveon-lic-'));
 const publicKeyFile=path.join(directory,'keys.json');
 fs.writeFileSync(publicKeyFile,JSON.stringify({'commercial-test':publicKey}));
 // Test-only stand-in. Real Windows uses Electron safeStorage / DPAPI.
 const safeStorage={isEncryptionAvailable:()=>true,encryptString:s=>Buffer.from(s),decryptString:b=>b.toString()};
 const store=createLicenseStore({userData:directory,safeStorage,publicKeyFile,expectedEdition:edition,expectedMajorVersion:major});
 const id=store.installationId();
 const now=Math.floor(Date.now()/1000);
 const claims={v:1,licenseId:crypto.randomUUID(),accountId,installationId:id,edition,issuedAt:now,notBefore:now-10,expiresAt:null,entitledMajorVersion:1,limits:{schools:1,branches:1,users:5,students:200,teachers:10,devices:1}};
 const envelope=()=>{const payload=JSON.stringify(claims);return {alg:'ES256',kid:'commercial-test',payload,signature:crypto.sign('sha256',Buffer.from(payload),{key:privateKey,dsaEncoding:'ieee-p1363'}).toString('base64url')};};
 return {directory,store,claims,envelope};
}
test('commercial certificate imports and validates offline',t=>{
 const x=setup();t.after(()=>fs.rmSync(x.directory,{recursive:true,force:true}));
 assert.equal(x.store.inspect().licensed,false);
 const result=x.store.importCertificate(x.envelope());
 assert.equal(result.accountId,accountId);
 assert.equal(x.store.inspect().licensed,true);
 assert.equal(x.store.load().kid,'commercial-test');
});
test('different edition is rejected by native store',t=>{
 const x=setup('independent_multi_device');t.after(()=>fs.rmSync(x.directory,{recursive:true,force:true}));
 x.claims.edition='independent_essentials';
 assert.throws(()=>x.store.importCertificate(x.envelope()),/different Independent edition/);
});
test('certificate for an older app version is refused',t=>{
 const x=setup('independent_essentials',2);t.after(()=>fs.rmSync(x.directory,{recursive:true,force:true}));
 assert.throws(()=>x.store.importCertificate(x.envelope()),/does not entitle/);
});
test('certificate for a different installation is rejected',t=>{
 const x=setup();t.after(()=>fs.rmSync(x.directory,{recursive:true,force:true}));
 x.claims.installationId=crypto.randomUUID();
 assert.throws(()=>x.store.importCertificate(x.envelope()),/installation/);
});
test('altered signed payload is rejected',t=>{
 const x=setup();t.after(()=>fs.rmSync(x.directory,{recursive:true,force:true}));
 const e=x.envelope();e.payload=e.payload.replace('independent_essentials','independent_multi_device');
 assert.throws(()=>x.store.importCertificate(e),/signature/);
});

'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const {issueDevelopmentCertificate}=require('../scripts/create-development-license.cjs');
const {verifyEnvelope}=require('../offline-license.cjs');
const {privateKey,publicKey}=crypto.generateKeyPairSync('ec',{namedCurve:'prime256v1',privateKeyEncoding:{format:'pem',type:'pkcs8'},publicKeyEncoding:{format:'pem',type:'spki'}});
const kid='eleeveon-dev-test';const id='f91f04c1-0185-4a97-bd4a-f4ee82721b99';const acct='1fb95f6c-dfe9-4f49-a955-10e209ab6fd1';const now=1794564000;
const keys={[kid]:publicKey};
function cert(){return issueDevelopmentCertificate({installationId:id,accountId:acct,keyId:kid,privateKeyPem:privateKey,now});}
test('real dev certificate signature verifies only when developer mode is enabled',()=>{
 const signed=cert();assert.equal(verifyEnvelope(signed,keys,id,now,true).accountId,acct);
 assert.throws(()=>verifyEnvelope(signed,keys,id,now,false),/forbidden/);
});
test('wrong installation cannot use development certificate',()=>{
 assert.throws(()=>verifyEnvelope(cert(),keys,'00000000-0000-4000-8000-000000000000',now,true),/installation/);
});
test('tampering is rejected',()=>{
 const env=cert();env.payload=env.payload.replace('independent_essentials','independent_multi_device');
 assert.throws(()=>verifyEnvelope(env,keys,id,now,true),/signature/);
});
test('expired dev license is rejected',()=>{
 assert.throws(()=>verifyEnvelope(cert(),keys,id,now+8*24*60*60,true),/expire within seven days|expired/);
});
test('dev issuer cannot issue permanent certificate',()=>{
 const env=cert();const c=JSON.parse(env.payload);c.expiresAt=null;env.payload=JSON.stringify(c);
 env.signature=crypto.sign('sha256',Buffer.from(env.payload),{key:privateKey,dsaEncoding:'ieee-p1363'}).toString('base64url');
 assert.throws(()=>verifyEnvelope(env,keys,id,now,true),/expire within seven days/);
});
test('dev issuer cannot issue a paid-looking certificate',()=>{
 const env=cert();const c=JSON.parse(env.payload);delete c.purpose;env.payload=JSON.stringify(c);
 env.signature=crypto.sign('sha256',Buffer.from(env.payload),{key:privateKey,dsaEncoding:'ieee-p1363'}).toString('base64url');
 assert.throws(()=>verifyEnvelope(env,keys,id,now,true),/forbidden/);
});

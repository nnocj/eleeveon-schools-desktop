'use strict';
/** Windows native certificate store. Requires Electron safeStorage. No private issuer keys are used here. */
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const EDITIONS=new Set(['independent_essentials','independent_multi_device']);
const LIMITS=['schools','branches','users','students','teachers','devices'];
function readJSON(file){return JSON.parse(fs.readFileSync(file,'utf8'));}
function trustedKeys(file){
 const obj=readJSON(file);
 if(!obj||typeof obj!=='object'||Array.isArray(obj)||!Object.keys(obj).length)throw Error('No trusted issuer public keys were packaged');
 for(const [id,key] of Object.entries(obj)){
  if(!/^[\w.-]{1,64}$/.test(id)||typeof key!=='string'||!key.includes('BEGIN PUBLIC KEY'))throw Error('Invalid issuer key bundle');
  const pub=crypto.createPublicKey(key);if(pub.asymmetricKeyType!=='ec'||pub.asymmetricKeyDetails?.namedCurve!=='prime256v1')throw Error('Issuer key must be P-256');
 }
 return obj;
}
function decodeB64url(s){if(typeof s!=='string'||!s||!/^[A-Za-z0-9_-]+$/.test(s))throw Error('Invalid base64url value');return Buffer.from(s,'base64url');}
function verifyEnvelope(envelope,keys,expectedInstallationId,now=Math.floor(Date.now()/1000)){
 if(!envelope||envelope.alg!=='ES256'||typeof envelope.kid!=='string'||!Object.hasOwn(keys,envelope.kid)||typeof envelope.payload!=='string'||envelope.payload.length>16000)throw Error('License issuer not trusted');
 const signature=decodeB64url(envelope.signature);if(signature.length!==64)throw Error('Invalid ECDSA signature length');
 if(!crypto.verify('sha256',Buffer.from(envelope.payload),{key:keys[envelope.kid],dsaEncoding:'ieee-p1363'},signature))throw Error('License signature invalid');
 let c;try{c=JSON.parse(envelope.payload);}catch{throw Error('Invalid license payload');}
 if(c.v!==1||!c.licenseId||!c.accountId||!c.installationId||c.installationId!==expectedInstallationId||!EDITIONS.has(c.edition))throw Error('License not valid for this installation');
 if(!Number.isSafeInteger(c.issuedAt)||!Number.isSafeInteger(c.notBefore)||c.issuedAt>now+300||c.notBefore>now+300)throw Error('License not yet valid');
 if(c.expiresAt!==null&&(!Number.isSafeInteger(c.expiresAt)||c.expiresAt<=now))throw Error('License has expired');
 if(!Number.isSafeInteger(c.entitledMajorVersion)||c.entitledMajorVersion<1)throw Error('Application version not entitled');
 if(!c.limits||LIMITS.some(k=>!(c.limits[k]===null||(Number.isSafeInteger(c.limits[k])&&c.limits[k]>=0))))throw Error('Invalid license limits');
 return c;
}
function atomicWrite(file,data){fs.mkdirSync(path.dirname(file),{recursive:true});const tmp=file+'.'+crypto.randomUUID()+'.tmp';fs.writeFileSync(tmp,data,{mode:0o600,flag:'wx'});try{fs.renameSync(tmp,file);}catch(e){try{fs.unlinkSync(tmp);}catch{}throw e;}}
function createLicenseStore({userData,safeStorage,publicKeyFile}){
 const pathId=path.join(userData,'independent-installation.bin');
 const pathLicense=path.join(userData,'independent-license.bin');
 function requireSecure(){if(!safeStorage.isEncryptionAvailable())throw Error('OS protected storage is unavailable. Activate only on a supported configured device.');}
 function encrypt(raw){requireSecure();return safeStorage.encryptString(raw);}
 function decrypt(file){requireSecure();return safeStorage.decryptString(fs.readFileSync(file));}
 function installationId(){requireSecure();if(fs.existsSync(pathId))return decrypt(pathId);const id=crypto.randomUUID();atomicWrite(pathId,encrypt(id));return id;}
 function keys(){return trustedKeys(publicKeyFile);}
 function load(){const id=installationId();if(!fs.existsSync(pathLicense))return null;const env=JSON.parse(decrypt(pathLicense));verifyEnvelope(env,keys(),id);return env;}
 function inspect(){const id=installationId();const e=load();return {installationId:id,licensed:Boolean(e),claims:e?verifyEnvelope(e,keys(),id):null};}
 function importCertificate(envelope){const id=installationId();const c=verifyEnvelope(envelope,keys(),id);const current=load();if(current){const old=verifyEnvelope(current,keys(),id);if(old.accountId!==c.accountId)throw Error('Cannot replace this school license with another account license');}
  atomicWrite(pathLicense,encrypt(JSON.stringify(envelope)));return {licenseId:c.licenseId,accountId:c.accountId,edition:c.edition};
 }
 return {installationId,keys,load,inspect,importCertificate};
}
module.exports={verifyEnvelope,createLicenseStore,trustedKeys};

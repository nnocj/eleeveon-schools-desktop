'use strict';
// Developer-only, local issuance for an explicitly selected Windows installation.
// Never uses the production private issuer key or creates a server payment record.
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const crypto = require('node:crypto');
const {sign} = crypto;
const PREFIX = 'eleeveon-dev-';
function issueDevelopmentCertificate({installationId, accountId, keyId, privateKeyPem, now=Math.floor(Date.now()/1000)}) {
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(installationId)) throw Error('Installation ID must be a UUID');
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(accountId)) throw Error('Account ID must be a UUID');
  if (!keyId.startsWith(PREFIX)) throw Error('Use a development issuer ID');
  const claims = {
    v:1, purpose:'internal-development',
    licenseId:`dev:${installationId}`, accountId, installationId,
    edition:'independent_essentials',
    issuedAt:now, notBefore:now-10, expiresAt:now+7*24*60*60,
    entitledMajorVersion:1,
    limits:{schools:2,branches:5,users:30,students:80,teachers:30,devices:1},
  };
  const payload=JSON.stringify(claims);
  const signature=sign('sha256',Buffer.from(payload),{key:crypto.createPrivateKey(privateKeyPem),dsaEncoding:'ieee-p1363'}).toString('base64url');
  return {alg:'ES256',kid:keyId,payload,signature};
}
function ensureDevelopmentKeys(keyFile,publicFile){
  const keyId='eleeveon-dev-local-2026';
  if (!fs.existsSync(keyFile)) {
    if (fs.existsSync(publicFile) && Object.keys(JSON.parse(fs.readFileSync(publicFile,'utf8'))).length) throw Error('Development public key exists, but private key is missing: refusing to rotate silently');
    const pair=crypto.generateKeyPairSync('ec',{namedCurve:'prime256v1',privateKeyEncoding:{format:'pem',type:'pkcs8'},publicKeyEncoding:{format:'pem',type:'spki'}});
    fs.mkdirSync(path.dirname(keyFile),{recursive:true});
    fs.writeFileSync(keyFile,pair.privateKey,{mode:0o600,flag:'wx'});
    fs.mkdirSync(path.dirname(publicFile),{recursive:true});
    fs.writeFileSync(publicFile,JSON.stringify({[keyId]:pair.publicKey},null,2));
  }
  const keys=JSON.parse(fs.readFileSync(publicFile,'utf8'));
  const pub=keys[keyId];
  if (!pub) throw Error('Development issuer key ID not present');
  const priv=fs.readFileSync(keyFile,'utf8');
  const derived=crypto.createPublicKey(priv).export({format:'pem',type:'spki'});
  if (derived!==pub)throw Error('Private and public development issuer keys do not match');
  return {keyId,privateKeyPem:priv};
}
function main(){
  const installationId=process.argv[2];
  if(!installationId)throw Error('Usage: node scripts/create-development-license.cjs <installation-uuid> [account-uuid]');
  const accountId=process.argv[3]||crypto.randomUUID();
  const home=path.join(os.homedir(),'.eleeveon-dev-signing');
  const publicFile=path.resolve(__dirname,'..','resources','development-issuer-public-keys.json');
  const {keyId,privateKeyPem}=ensureDevelopmentKeys(path.join(home,'dev-issuer-private.pem'),publicFile);
  const envelope=issueDevelopmentCertificate({installationId,accountId,keyId,privateKeyPem});
  const output=path.join(home,`independent-${installationId}.eleeveonlicense`);
  fs.writeFileSync(output,JSON.stringify(envelope,null,2),{mode:0o600});
  process.stdout.write(`Development certificate: ${output}\nDev issuer public key: ${publicFile}\nAccount ID: ${accountId}\nValid for: 7 days\n`);
}
if(require.main===module){try{main();}catch(e){console.error(e.message);process.exitCode=1;}}
module.exports={issueDevelopmentCertificate,ensureDevelopmentKeys};

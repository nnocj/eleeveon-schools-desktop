'use strict';
const test=require('node:test');const assert=require('node:assert/strict');
const fs=require('node:fs');const path=require('node:path');const os=require('node:os');
const {assertLocalUrl,startBundledPortal,resolveServerExecutable}=require('../native-web-runtime.cjs');
test('accepts only the exact loopback origin and port',()=>{
 assert.equal(assertLocalUrl('http://127.0.0.1:4567/independent/desktop',4567),true);
 for(const u of ['https://127.0.0.1:4567/independent/desktop','http://localhost:4567/independent/desktop','http://127.0.0.1:4568/independent/desktop','http://127.0.0.1.evil.test:4567/','https://example.com','file:///tmp/test','http://127.0.0.1:4567@evil.test/'])assert.equal(assertLocalUrl(u,4567),false,u);
});
test('rejects missing or unbuilt bundles',async()=>{
 await assert.rejects(startBundledPortal({folder:'/unlikely/eleeveon/no/such/folder',executable:process.execPath}),/missing/i);
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'eleeveon-unbuilt-'));
 try{fs.writeFileSync(path.join(dir,'server.js'),'');await assert.rejects(startBundledPortal({folder:dir,executable:process.execPath}),/static assets/i);}finally{fs.rmSync(dir,{recursive:true,force:true});}
});
test('starts and stops a staged local standalone server in Node test mode',async()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'eleeveon-standalone-'));
 fs.mkdirSync(path.join(dir,'.next','static'),{recursive:true});
 fs.writeFileSync(path.join(dir,'eleeveon-independent-build.json'),JSON.stringify({edition:'independent_essentials',kind:'next-standalone',format:1}));
 fs.writeFileSync(path.join(dir,'.next','static','sentinel'),'ok');
 fs.writeFileSync(path.join(dir,'server.js'),"require('node:http').createServer((q,r)=>{r.statusCode=q.url==='/independent/desktop'?200:404;r.end('ready')}).listen(Number(process.env.PORT),process.env.HOSTNAME)");
 let portal;
 try{
   portal=await startBundledPortal({folder:dir,executable:process.execPath,maxAttempts:30,delayMs:50});
   assert.match(portal.url,/^http:\/\/127\.0\.0\.1:\d+\/independent\/desktop$/);
   assert.equal(assertLocalUrl(portal.url,portal.port),true);
   await portal.stop();
   await portal.stop(); // repeated shutdown is safe
 }finally{
   // Windows denies removing a folder while its child Node process is running.
   // Wait for the actual process close, not just the kill signal request.
   try { if (portal) await portal.stop(); }
   finally { fs.rmSync(dir,{recursive:true,force:true,maxRetries:12,retryDelay:150}); }
 }
});
test('refuses cloud runtime',async()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'eleeveon-cloud-'));
 fs.mkdirSync(path.join(dir,'.next','static'),{recursive:true});fs.writeFileSync(path.join(dir,'server.js'),'');
 try{await assert.rejects(startBundledPortal({folder:dir,runtime:'cloud'}),/Cloud builds/);}finally{fs.rmSync(dir,{recursive:true,force:true});}
});

test('rejects a staged edition mismatch',async()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'eleeveon-edition-'));
 fs.mkdirSync(path.join(dir,'.next','static'),{recursive:true});fs.writeFileSync(path.join(dir,'server.js'),'');
 fs.writeFileSync(path.join(dir,'eleeveon-independent-build.json'),JSON.stringify({edition:'independent_multi_device',kind:'next-standalone',format:1}));
 try{await assert.rejects(startBundledPortal({folder:dir,runtime:'independent_essentials'}),/edition does not match/);}finally{fs.rmSync(dir,{recursive:true,force:true});}
});

test('exposes server startup errors instead of a generic timeout',async()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'eleeveon-bad-server-'));
 fs.mkdirSync(path.join(dir,'.next','static'),{recursive:true});
 fs.writeFileSync(path.join(dir,'eleeveon-independent-build.json'),JSON.stringify({edition:'independent_essentials',kind:'next-standalone',format:1}));
 fs.writeFileSync(path.join(dir,'server.js'),"console.error('SENTINEL_DEPENDENCY_FAILURE');process.exit(3)");
 try{await assert.rejects(startBundledPortal({folder:dir,executable:process.execPath,maxAttempts:25,delayMs:30}),/SENTINEL_DEPENDENCY_FAILURE/);}
 finally{fs.rmSync(dir,{recursive:true,force:true,maxRetries:12,retryDelay:150});}
});
test('shows the status code if the Independent desktop route is not served',async()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'eleeveon-bad-route-'));
 fs.mkdirSync(path.join(dir,'.next','static'),{recursive:true});
 fs.writeFileSync(path.join(dir,'eleeveon-independent-build.json'),JSON.stringify({edition:'independent_essentials',kind:'next-standalone',format:1}));
 fs.writeFileSync(path.join(dir,'server.js'),"require('node:http').createServer((q,r)=>{r.statusCode=404;r.end('missing')}).listen(Number(process.env.PORT),process.env.HOSTNAME)");
 try{await assert.rejects(startBundledPortal({folder:dir,executable:process.execPath,maxAttempts:30,delayMs:30}),/HTTP 404/);}
 finally{fs.rmSync(dir,{recursive:true,force:true,maxRetries:12,retryDelay:150});}
});

test('explicit Node runtime is used for a staged standalone server',async()=>{assert.equal(resolveServerExecutable({executable:process.execPath}),process.execPath);});

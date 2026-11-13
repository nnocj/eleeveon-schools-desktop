'use strict';
// Next.js standalone launcher. No Cloud fallback; never reports ready on a 404/500.
const fs = require('node:fs');
const path = require('node:path');
const net = require('node:net');
const http = require('node:http');
const {spawn} = require('node:child_process');
const {once} = require('node:events');

function assertLocalUrl(value, port) {
  try { const u = new URL(value); return u.protocol === 'http:' && u.hostname === '127.0.0.1' && u.port === String(port) && !u.username && !u.password; }
  catch { return false; }
}
function freePort() {
  return new Promise((resolve,reject)=>{
    const s=net.createServer();s.once('error',reject);
    s.listen(0,'127.0.0.1',()=>{const a=s.address();s.close(err=>err?reject(err):resolve(a.port));});
  });
}
function sleep(ms){return new Promise(r=>setTimeout(r,ms));}
function probeDetail(port,pathname='/independent/desktop') {
  return new Promise(resolve=>{
    const request=http.get({hostname:'127.0.0.1',port,path:pathname,timeout:1800,headers:{Accept:'text/html'}},response=>{
      const status=response.statusCode||0;
      response.resume();
      resolve({reachable:true,status,ok:status>=200&&status<400});
    });
    request.once('timeout',()=>request.destroy(new Error('probe timed out')));
    request.once('error',error=>resolve({reachable:false,status:0,ok:false,reason:error.code||error.message}));
  });
}
async function probe(port,pathname='/independent/desktop'){return (await probeDetail(port,pathname)).ok;}
function latest(text, max=5500){return String(text||'').slice(-max).replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g,'');}
function readyDiagnostic({folder,port,lastProbe,logs,exited,exitCode,signal,executable}){
  const notes=[];
  if(exited) notes.push(`Server process exited (code ${exitCode ?? 'unknown'}, signal ${signal ?? 'none'}).`);
  if(lastProbe?.reachable) notes.push(`Server responded HTTP ${lastProbe.status} to /independent/desktop (requires 2xx or 3xx).`);
  else notes.push(`Cannot reach 127.0.0.1:${port} (${lastProbe?.reason||'connection not ready'}).`);
  notes.push(`Bundle: ${folder}`);
  notes.push(`Server executable: ${executable || 'unknown'}`);
  if(logs.trim())notes.push(`Server output (last ${Math.min(logs.length,5500)} characters):\n${latest(logs)}`);
  else notes.push('Server produced no output. Verify Node standalone bundle and runtime dependencies.');
  return notes.join('\n');
}
function resolveServerExecutable(options={}) {
  if(options.executable) return options.executable;
  if(process.versions.electron && (process.defaultApp || process.env.npm_node_execpath)) {
    const npmNode=process.env.npm_node_execpath;
    return npmNode && fs.existsSync(npmNode) ? npmNode : 'node';
  }
  return process.execPath;
}
async function startBundledPortal(options={}) {
  const folder=path.resolve(String(options.folder||''));
  const serverFile=path.join(folder,'server.js');
  if(!fs.existsSync(serverFile)||!fs.statSync(serverFile).isFile())throw Error('Independent Next.js standalone server is missing. Build and stage the Independent frontend.');
  if(!fs.existsSync(path.join(folder,'.next','static')))throw Error('Independent Next.js static assets are missing. Re-run the staging script.');
  const runtime=options.runtime||'independent_essentials';
  if(!['independent_essentials','independent_multi_device'].includes(runtime))throw Error('Cloud builds cannot be launched as Independent');
  let metadata;
  try{metadata=JSON.parse(fs.readFileSync(path.join(folder,'eleeveon-independent-build.json'),'utf8'));}
  catch{throw Error('Independent build marker missing or invalid: refusing to start an unknown or Cloud build');}
  if(metadata?.format!==1||metadata?.kind!=='next-standalone'||metadata?.edition!==runtime)throw Error('Independent build edition does not match the installed desktop edition');
  const port=await freePort();
  // `process.execPath` inside Electron points to electron.exe, not node.exe.
  // `npm start` exposes the actual Node executable through npm_node_execpath.
  // For an unpackaged development Electron process, fall back to Node on PATH.
  // In a packaged installation Electron's run-as-node capability must be enabled
  // (or a separately bundled Node runtime must be supplied).
  const executable=resolveServerExecutable(options);
  const usingElectronNode=executable===process.execPath && Boolean(process.versions.electron);

  const child=spawn(executable,[serverFile],{
    cwd:folder,
    env:{...process.env,...(usingElectronNode?{ELECTRON_RUN_AS_NODE:'1'}:{ELECTRON_RUN_AS_NODE:undefined}),NODE_ENV:'production',HOSTNAME:'127.0.0.1',PORT:String(port),ELEEVEON_INDEPENDENT_NATIVE:'1',NEXT_PUBLIC_ELEEVEON_RUNTIME:runtime},
    stdio:['ignore','pipe','pipe'],windowsHide:true
  });
  let logs='';
  const append=chunk=>{logs=latest(logs+chunk.toString('utf8'),12000);};
  child.stdout.on('data',append);child.stderr.on('data',append);
  let exited=false,exitCode=null,exitSignal=null,spawnError=null;
  child.on('exit',(code,signal)=>{exited=true;exitCode=code;exitSignal=signal;});
  child.on('error',error=>{spawnError=error;exited=true;append(error.message);});
  let stopping=null;
  async function stop(){
    if(stopping)return stopping;
    stopping=(async()=>{
      if(child.exitCode!==null||child.signalCode!==null||!child.pid)return;
      const closed=once(child,'close').then(()=>true).catch(()=>false);
      try{child.kill();}catch{}
      if(await Promise.race([closed,sleep(4500).then(()=>false)]))return;
      try{child.kill('SIGKILL');}catch{}
      if(!await Promise.race([closed,sleep(2000).then(()=>false)]))throw Error('Independent portal child did not exit after stop request');
    })();
    return stopping;
  }
  const maxAttempts=options.maxAttempts??180;
  const delayMs=options.delayMs??250;
  let lastProbe;
  for(let i=0;i<maxAttempts;i++){
    if(exited||spawnError)break;
    lastProbe=await probeDetail(port,options.healthPath||'/independent/desktop');
    if(lastProbe.ok){return {child,port,url:`http://127.0.0.1:${port}/independent/desktop`,stop};}
    // Server can be healthy but the Independent desktop route broken. Don't loop for 20 seconds on a permanent HTTP 404/500.
    if(lastProbe.reachable && lastProbe.status>=400){
      await sleep(250); // let Next flush its error stack
      break;
    }
    await sleep(delayMs);
  }
  const diagnosis=readyDiagnostic({folder,port,lastProbe,logs,exited,exitCode,signal:exitSignal,executable});
  try{await stop();}catch{}
  throw Error('Independent portal server did not become ready.\n'+diagnosis);
}
module.exports={assertLocalUrl,freePort,probe,probeDetail,startBundledPortal,resolveServerExecutable};

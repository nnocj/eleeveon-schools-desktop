'use strict';
const {app,BrowserWindow,ipcMain,dialog,session,safeStorage,shell,Menu,clipboard}=require('electron');
const path=require('node:path');const fs=require('node:fs');const crypto=require('node:crypto');
const vaultLib=require('./vault.cjs');
const {createLicenseStore}=require('./offline-license.cjs');
const {persistEncryptedSnapshot,readEncryptedSnapshot}=require('./snapshot-store.cjs');
const {startBundledPortal,assertLocalUrl}=require('./native-web-runtime.cjs');
const {businessOrigins,isAllowedServiceRequest,servicePageUrl}=require('./service-network-policy.cjs');
let win=null;let activationWindow=null;let nativeLicenseStore=null;let vault=null;let selectedBackup=null;let timer=null;let localPortal=null;let onlineServicesEnabled=false;
const serviceOrigins=businessOrigins();
const configPath=()=>path.join(app.getPath('userData'),'independent-settings.json');
function config(){try{return JSON.parse(fs.readFileSync(configPath(),'utf8'));}catch{return {};}}
function saveConfig(patch){const next={...config(),...patch};fs.mkdirSync(path.dirname(configPath()),{recursive:true});fs.writeFileSync(configPath(),JSON.stringify(next,null,2),{mode:0o600});}
function requireLicensed(){if(!nativeLicenseStore?.inspect().claims)throw Error('A valid, signed Independent licence is required');}
function requireOpen(){requireLicensed();if(!vault)throw Error('Unlock the school before continuing');return vault;}
const publicState=()=>({opened:!!vault,schoolName:vault?.data.schoolName||null,students:vault?.data.students||[],classes:vault?.data.classes||[],dataFolder:vault?.folder||config().dataFolder||null,backupFolder:selectedBackup||config().backupFolder||null,autoUnlockAvailable:safeStorage.isEncryptionAvailable(),isTrialWorkspace:false});
async function guardIPC(handler){try{return {ok:true,value:await handler()};}catch(e){return {ok:false,error:e instanceof Error?e.message:'Unknown error'};}}
function route(name,fn){ipcMain.handle(name,()=>guardIPC(fn));}
function routeArg(name,fn){ipcMain.handle(name,(_e,arg)=>guardIPC(()=>fn(arg)));}
app.whenReady().then(async()=>{
 const nativeLicense=createLicenseStore({
  userData:app.getPath('userData'),safeStorage,
  publicKeyFile:path.join(__dirname,'resources','license-issuer-public-keys.json'),
  development: !app.isPackaged && process.env.ELEEVEON_ENABLE_DEV_LICENSE==='1',
  developmentKeyFile:path.join(__dirname,'resources','development-issuer-public-keys.json'),
  expectedEdition:process.env.ELEEVEON_DESKTOP_EDITION==='multi_device'?'independent_multi_device':'independent_essentials',
  expectedMajorVersion:1,
});
 nativeLicenseStore=nativeLicense;
 function showActivation(){
   if(activationWindow && !activationWindow.isDestroyed()){activationWindow.focus();return;}
   activationWindow=new BrowserWindow({width:670,height:740,minWidth:520,minHeight:580,
     webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true,preload:path.join(__dirname,'preload.cjs'),webSecurity:true}});
   activationWindow.setMenuBarVisibility(false);
   activationWindow.webContents.setWindowOpenHandler(()=>({action:'deny'}));
   activationWindow.webContents.on('will-navigate',e=>e.preventDefault());
   activationWindow.loadFile(path.join(__dirname,'activation','index.html'));
   activationWindow.on('closed',()=>{activationWindow=null;});
 }
 const appMenu=Menu.buildFromTemplate([{label:'Eleeveon',submenu:[
   {label:'Activate or inspect licence',click:showActivation},
   {label:'Exit',role:'quit'}
 ]},{label:'View',submenu:[{role:'reload'},{role:'toggleDevTools'}]}]);
 Menu.setApplicationMenu(appMenu);
 route('independent:activation-details',()=>{
   // Identity retrieval must work even when an existing certificate is invalid.
   // NEVER treat a failed licence check as a valid activation.
   const installationId=nativeLicense.installationId();
   let licensed=false,claims=null,verificationError=null;
   try {
     const checked=nativeLicense.inspect();
     licensed=checked.licensed===true;
     claims=checked.claims||null;
   } catch (error) {
     verificationError=error instanceof Error?error.message:'Licence verification failed';
   }
   return {
     installationId,licensed,claims,verificationError,
     edition:process.env.ELEEVEON_DESKTOP_EDITION==='multi_device'?'independent_multi_device':'independent_essentials',
     machineFingerprint:'eleeveon-install-v1:'+crypto.createHash('sha256').update(installationId).digest('hex')
   };
 });
 routeArg('independent:copy-activation-field',arg=>{
   const key=String(arg?.field||'');
   const details={installationId:nativeLicense.installationId(),machineFingerprint:'eleeveon-install-v1:'+crypto.createHash('sha256').update(nativeLicense.installationId()).digest('hex')};
   if(!Object.hasOwn(details,key))throw Error('Invalid copy field');
   clipboard.writeText(details[key]);return {copied:true};
 });
 route('independent:open-licence-purchase',async()=>{
   await shell.openExternal(servicePageUrl('/owner/subscription',serviceOrigins.website));return {opened:true};
 });
 route('independent:open-activation-window',()=>{showActivation();return {opened:true};});
 routeArg('independent:online-services-access',async input=>{
   // Independent is local by default. Network is enabled only after a deliberate click.
   if(!nativeLicense.inspect().claims?.accountId)throw Error('Verified Independent license required');
   if(typeof input?.enabled!=='boolean')throw Error('Invalid online-services setting');
   onlineServicesEnabled=input.enabled;
   return {enabled:onlineServicesEnabled,backendOrigin:serviceOrigins.backend};
 });
 routeArg('independent:open-service-page',async input=>{
   if(!nativeLicense.inspect().claims?.accountId)throw Error('Verified Independent license required');
   const url=servicePageUrl(input?.page,serviceOrigins.website);
   await shell.openExternal(url);
   return {opened:true};
 });
 route('independent:installation-id',()=>nativeLicense.installationId());
 route('independent:license-status',()=>nativeLicense.inspect());
 route('independent:issuer-public-keys',()=>nativeLicense.keys());
 route('independent:license-envelope',()=>nativeLicense.load());
 route('independent:licensed-account',()=>nativeLicense.inspect().claims?.accountId||'');
 route('independent:license-import',async()=>{const r=await dialog.showOpenDialog(win,{title:'Import Eleeveon signed offline license',properties:['openFile'],filters:[{name:'Eleeveon offline license',extensions:['eleeveonlicense','json']}]});if(r.canceled)return null;const stat=fs.statSync(r.filePaths[0]);if(stat.size>20000)throw Error('License file is too large');const imported=nativeLicense.importCertificate(JSON.parse(fs.readFileSync(r.filePaths[0],'utf8')));if(win && !win.isDestroyed())win.show();return imported;});
 await session.defaultSession.setPermissionRequestHandler((_contents,_permission,reply)=>reply(false));
 // Explicitly forbid all external requests: no Render, Vercel, Supabase or telemetry.
 // Network isolation is installed after the local server port is known, below.
 routeArg('independent:save-db-snapshot',async input=>{
   // Re-check the signed OS-protected certificate on EACH write.
   // Never trust the accountId passed by the renderer as authorization.
   const verified = nativeLicense.inspect().claims;
   if(!verified) throw Error('A verified Independent license is required');
   return persistEncryptedSnapshot({vault:requireOpen(),licensedAccountId:verified.accountId,input});
 });
 routeArg('independent:read-db-snapshot',async arg=>{
   const claims=nativeLicense.inspect().claims;
   if(!claims?.accountId) throw Error('Verified Independent license is required');
   const result=await readEncryptedSnapshot({vault:requireOpen(),licensedAccountId:claims.accountId,usePrevious:arg?.previous===true});
   // Explicit user-triggered inspection only; NEVER auto-restore the renderer database.
   return {accountId:claims.accountId,database:'EleeveonDB',sha256:result.sha256,bytes:result.bytes,createdAt:result.createdAt,indexedDBVersion:result.indexedDBVersion,stores:result.stores,records:result.records,previous:result.previous};
 });
 route('independent:state',()=>publicState());
 route('independent:pick-data',async()=>{const r=await dialog.showOpenDialog(win,{properties:['openDirectory','createDirectory'],title:'Select local school data folder'});return r.canceled?null:r.filePaths[0];});
 route('independent:pick-backup',async()=>{const r=await dialog.showOpenDialog(win,{properties:['openDirectory','createDirectory'],title:'Select encrypted backup folder (Google Drive folder supported)'});if(r.canceled)return null;selectedBackup=r.filePaths[0];saveConfig({backupFolder:selectedBackup});return selectedBackup;});
 routeArg('independent:create',async a=>{requireLicensed();if(vault)throw Error('School already unlocked');vault=await vaultLib.newVault(a.folder,a.schoolName,a.password);saveConfig({dataFolder:vault.folder});return publicState();});
 routeArg('independent:unlock',async a=>{requireLicensed();if(vault)throw Error('School already unlocked');vault=await vaultLib.openVault(a.folder||config().dataFolder,a.password);saveConfig({dataFolder:vault.folder});return publicState();});
 route('independent:lock',()=>{vault=null;return publicState();});
 routeArg('independent:change-password',async a=>{const result=await vaultLib.changePassword(requireOpen(),a?.currentPassword,a?.newPassword);return result;});
 routeArg('independent:add-student',async a=>{const v=requireOpen();const name=String(a?.name||'').trim();if(!name||name.length>180)throw Error('Enter valid student name');const admission=String(a.admission||'').trim();if(!admission||admission.length>90)throw Error('Admission number required');if(v.data.students.some(s=>s.admission===admission))throw Error('Admission number already exists');const record={id:crypto.randomUUID(),name,admission,createdAt:new Date().toISOString()};v.data.students.push(record);await vaultLib.saveVault(v);return publicState();});
 route('independent:backup',async()=>{const v=requireOpen();const folder=selectedBackup||config().backupFolder;if(!folder)throw Error('Choose backup folder first');return vaultLib.backupVault(v,folder);});
 route('independent:restore',async()=>{const v=requireOpen();const r=await dialog.showOpenDialog(win,{title:'Select Eleeveon backup to restore',properties:['openFile'],filters:[{name:'Eleeveon backups',extensions:['eleeveonbak']}]});if(r.canceled)return null;const result=await vaultLib.restoreVault(v,r.filePaths[0]);return {...result,state:publicState()};});
 routeArg('independent:backup-schedule',async arg=>{const minutes=Number(arg?.minutes);if(![0,15,30,60,180,720,1440].includes(minutes))throw Error('Invalid backup interval');if(timer)clearInterval(timer);timer=null;if(minutes>0){timer=setInterval(async()=>{if(vault&&(selectedBackup||config().backupFolder)){try{await vaultLib.backupVault(vault,selectedBackup||config().backupFolder);}catch(e){console.error('Encrypted backup failed:',e.message);}}},minutes*60_000);timer.unref?.();}saveConfig({backupMinutes:minutes});return minutes;});
 win=new BrowserWindow({width:1180,height:820,minWidth:760,minHeight:600,webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true,preload:path.join(__dirname,'preload.cjs'),webSecurity:true}});
 win.webContents.setWindowOpenHandler(()=>({action:'deny'}));
 // Prefer the real locally bundled Next.js school application, not renderer/index.html.
 // Installation identity and license authorization still belong to the native bridge.
 const bundledFolder=app.isPackaged
   ? path.join(process.resourcesPath,'independent-web')
   : path.join(__dirname,'independent-web');
 try {
   localPortal=await startBundledPortal({folder:bundledFolder,runtime:process.env.ELEEVEON_DESKTOP_EDITION==='multi_device'?'independent_multi_device':'independent_essentials'});
   const port=localPortal.port;
   const isInternal=(url)=>assertLocalUrl(url,port);
   win.webContents.on('will-navigate',(event,url)=>{if(!isInternal(url))event.preventDefault();});
   win.webContents.on('will-redirect',(event,url)=>{if(!isInternal(url))event.preventDefault();});
   // Local-school traffic remains local. Explicit online business services are narrowly permitted on consent.
   // Note: this prevents use of remote APIs, it does not implement local
   // adapters for every Cloud-only portal operation.
   session.defaultSession.webRequest.onBeforeRequest((details,callback)=>{
     if(/^https?:|^wss?:/i.test(details.url)&&!isInternal(details.url)&&!isAllowedServiceRequest(details.url,onlineServicesEnabled,serviceOrigins.backend))return callback({cancel:true});
     callback({});
   });
   await win.loadURL(localPortal.url);
   // Show the activation workflow on first launch, or if the certificate is no longer valid.
   try{if(!nativeLicense.inspect().licensed){win.hide();showActivation();}}
   catch(error){console.error('License verification:',error.message);win.hide();showActivation();}
 } catch(error) {
   console.error('Independent portal could not start:',error);
    // The licence activation UI is native and does not require the Next.js portal.
    // Never launch a demonstration workspace or bypass licence checks.
    // Allow installation identity, certificate import, and diagnostics even if
    // the bundled school portal cannot start.
    win.hide();
    showActivation();
    await dialog.showMessageBox(activationWindow || win,{
      type:'warning',title:'School portal unavailable',
      message:'The local school portal could not start. Licence activation remains available.',
      detail:String(error.message||error)
    });
    return;
 }
 const c=config();selectedBackup=c.backupFolder||null;if(c.backupMinutes>0){const m=c.backupMinutes;timer=setInterval(async()=>{if(vault&&selectedBackup){try{await vaultLib.backupVault(vault,selectedBackup);}catch(e){console.error('Backup error:',e.message);}}},m*60_000);timer.unref?.();}
});
app.on('before-quit',()=>{try{localPortal?.stop();}catch{}});
app.on('window-all-closed',()=>app.quit());

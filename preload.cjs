'use strict';const {contextBridge,ipcRenderer}=require('electron');
const allowed=['state','pick-data','pick-backup','create','unlock','lock','add-student','backup','restore','backup-schedule','change-password','installation-id','license-status','issuer-public-keys','license-envelope','licensed-account','license-import','save-db-snapshot','read-db-snapshot'];
const api={};for(const k of allowed){api[k]=(a)=>ipcRenderer.invoke('independent:'+k,a);}
contextBridge.exposeInMainWorld('eleeveonNative',Object.freeze(api));

// Only bind to native IPC handlers. Do not inject any private signing material.
function unwrap(action){return async()=>{const r=await ipcRenderer.invoke('independent:'+action);if(!r.ok)throw Error(r.error);return r.value;};}
contextBridge.exposeInMainWorld('EleeveonIndependentNative',Object.freeze({
 getInstallationId:unwrap('installation-id'),
 loadOfflineLicense:unwrap('license-envelope'),
 loadPinnedIssuerPublicKeys:unwrap('issuer-public-keys'),
 getLicensedAccountId:unwrap('licensed-account'),
 loadEncryptedDatabaseSnapshot:async ({previous=false}={})=>{const r=await ipcRenderer.invoke('independent:read-db-snapshot',{previous});if(!r.ok)throw Error(r.error);return r.value;},
 storeEncryptedDatabaseSnapshot:async input=>{const r=await ipcRenderer.invoke('independent:save-db-snapshot',input);if(!r.ok)throw Error(r.error);return r.value;},
}));

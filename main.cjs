// Development-only Electron wrapper. No cloud URL fallback; no production packaging.
// Start the Next frontend separately with `npm run dev` then run `npm start` here.
const {app,BrowserWindow,session} = require('electron');
const {URL} = require('node:url');
const DEV_ORIGIN='http://127.0.0.1:3000';
if (app.isPackaged) {
  console.error('Refusing packaged startup: independent native backend and authenticated portals have not been implemented.');
  app.exit(1);
} else {
  app.whenReady().then(async()=>{
    const win = new BrowserWindow({
      width:1280,height:830,minWidth:720,minHeight:500,
      webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true,
        webSecurity:true,allowRunningInsecureContent:false}
    });
    win.webContents.setWindowOpenHandler(()=>({action:'deny'}));
    win.webContents.on('will-navigate',(event,target)=>{
      try { const u=new URL(target);if(u.origin!==DEV_ORIGIN)event.preventDefault(); }
      catch {event.preventDefault();}
    });
    await session.defaultSession.setPermissionRequestHandler((_contents,_permission,callback)=>callback(false));
    await win.loadURL(DEV_ORIGIN);
  });
  app.on('window-all-closed',()=>app.quit());
}

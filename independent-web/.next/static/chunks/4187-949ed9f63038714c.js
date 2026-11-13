(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4187],{17258:(e,r,t)=>{"use strict";t.d(r,{PY:()=>n,Rh:()=>i,pq:()=>o});let a=["eleeveon_open_workspace","activeMembership","activeMembershipId","activeRole","activeSchoolId","activeBranchId","activeTeacherId","activeStudentId","activeParentId"];function n(){let e={};for(let r of a)try{e[r]=window.localStorage.getItem(r)??window.sessionStorage.getItem(r)}catch{e[r]=null}return e}function i(e){for(let r of a)try{null==e[r]?(window.localStorage.removeItem(r),window.sessionStorage.removeItem(r)):(window.localStorage.setItem(r,e[r]),window.sessionStorage.setItem(r,e[r]))}catch{}}async function o(e){if(!e.startsWith("/")||e.startsWith("//"))throw Error("Invalid workspace destination.");if(navigator.onLine)return;if(!("caches"in window))throw Error("Offline role switching is unavailable in this browser. Keep your current workspace open.");let r=new URL(e,window.location.origin).href;try{let t=await window.caches.match(r,{ignoreSearch:!0})||await window.caches.match(e,{ignoreSearch:!0});if(!t||!t.ok||!(t.headers.get("content-type")||"").includes("text/html"))throw Error("This role's portal has not been prepared for offline opening. Open it once while online, then try switching offline.")}catch(e){if(e instanceof Error)throw e;throw Error("Could not verify the offline destination. Your current role is unchanged.")}}},22055:()=>{},34187:(e,r,t)=>{"use strict";let a;t.d(r,{A:()=>t8});var n=t(95155),i=t(12115),o=t(49742);function s({state:e,onRetry:r,onCancel:t}){return e.active||e.error?(0,n.jsx)(o.A,{progress:{stage:e.stage.bootstrapStage,percent:e.stage.percent,title:e.stage.title,detail:e.stage.detail,tableName:e.stage.tableName,current:e.stage.current,total:e.stage.total},error:e.error,onRetry:r,onCancel:t}):null}let l={preparing:{key:"preparing",bootstrapStage:"checking-cache",percent:8,title:"Preparing workspace…",detail:"Securing the next workspace transition."},access:{key:"access",bootstrapStage:"checking-cache",percent:14,title:"Updating access…",detail:"Validating the selected role and workspace permissions."},membership:{key:"membership",bootstrapStage:"checking-cache",percent:20,title:"Opening selected role…",detail:"Activating the selected membership and profile context."},institution:{key:"institution",bootstrapStage:"applying",percent:78,title:"Resolving school and branch…",detail:"Loading the permitted institution context for this role."},settings:{key:"settings",bootstrapStage:"applying",percent:84,title:"Loading workspace settings…",detail:"Refreshing the settings permitted for this workspace."},branding:{key:"branding",bootstrapStage:"applying",percent:88,title:"Applying branding…",detail:"Preparing the correct school, branch, or account identity."},appearance:{key:"appearance",bootstrapStage:"applying",percent:92,title:"Applying appearance…",detail:"Loading the correct colours, theme, typography, and display preferences."},data:{key:"data",bootstrapStage:"requesting",percent:24,title:"Downloading permitted workspace data…",detail:"Downloading and validating all permitted tables for this role."},dashboard:{key:"dashboard",bootstrapStage:"applying",percent:97,title:"Preparing dashboard…",detail:"Finalizing the selected workspace before opening it."},complete:{key:"complete",bootstrapStage:"ready",percent:100,title:"Workspace ready",detail:"Opening the selected workspace."}};function c(e,r){return{...l[e],...r,key:e}}let d={active:!1,request:null,stage:c("preparing"),error:null},p=(0,i.createContext)(null);function u(){return new Promise(e=>{window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>e()))})}function h({children:e}){let[r,t]=(0,i.useState)(d),a=(0,i.useRef)(!1),o=(0,i.useCallback)((e,r)=>{t(t=>({...t,active:!0,error:null,stage:c(e,r)}))},[]),l=(0,i.useCallback)(e=>{t(r=>({...r,active:!0,error:null,stage:{...r.stage,key:"data",bootstrapStage:e.stage,percent:e.percent,title:e.title,detail:e.detail,tableName:e.tableName,current:e.current,total:e.total}}))},[]),m=(0,i.useCallback)(e=>{a.current=!1,t(r=>({...r,active:!0,error:e}))},[]),g=(0,i.useCallback)(()=>{a.current=!1,t(d)},[]),b=(0,i.useCallback)(async(e,r)=>{if(a.current)throw Error("A workspace transition is already running.");a.current=!0,t({active:!0,request:e,stage:c("preparing",{title:e.title,detail:e.detail}),error:null}),await u();try{let e=await r({setStage:o,setBootstrapProgress:l});return o("complete"),await u(),e}catch(e){throw m(e instanceof Error?e.message:"The workspace transition could not be completed."),e}finally{a.current=!1}},[m,l,o]),x=(0,i.useMemo)(()=>({state:r,busy:r.active&&!r.error,runTransition:b,setStage:o,setBootstrapProgress:l,failTransition:m,cancelTransition:g}),[r,b,o,l,m,g]);return(0,n.jsxs)(p.Provider,{value:x,children:[e,(0,n.jsx)(s,{state:r,onCancel:r.error?g:void 0})]})}var m=t(73321),g=t(1573),b=t(19035),x=t(6243),f=t(8856),v=t(52975),y=t(58123),w=t(63139),k=t(78139),j=t(42563),S=t(17933),N=t(86214),C=t(39307);function E(e){return String(e??"").trim()}function I(e,r){return`eleeveon:last-module:v1:${encodeURIComponent(e)}:${encodeURIComponent(r)}`}function A({availability:e,moduleLabel:r,missingCount:t,totalCount:a,online:i,preparing:o=!1,progress:s,onRetry:l}){if("complete"===e||"not_required"===e)return null;let c=i&&(o||"downloading"===e),d=c?"Preparing this page's offline records":i?"failed"===e?"The last data download was interrupted":"Records may be incomplete":"Limited offline records",p=c?`Loading records needed by ${r}. You can use locally saved records while this continues.`:i?`Some records for ${r} have not been confirmed as completely downloaded. An empty table may not mean that no records exist.`:`Offline preparation for ${r} is incomplete. Only locally saved records are available.`,u=Math.max(0,Number(s?.done||0)),h=Math.max(0,Number(s?.total||0)),m=h?Math.max(0,Math.min(100,Math.round(u/h*100))):null;return(0,n.jsxs)("section",{role:"status","aria-live":"polite",style:{margin:"0 0 10px",padding:"11px 12px",borderRadius:13,background:"color-mix(in srgb, var(--primary-color, #2563eb) 7%, var(--surface, #fff))",border:"1px solid color-mix(in srgb, var(--primary-color, #2563eb) 20%, transparent)",color:"var(--text, #0f172a)",display:"flex",flexWrap:"wrap",alignItems:"center",gap:9},children:[(0,n.jsx)("span",{"aria-hidden":"true",style:{fontSize:18},children:c?"↻":"ⓘ"}),(0,n.jsxs)("div",{style:{flex:"1 1 220px",minWidth:0},children:[(0,n.jsx)("strong",{style:{display:"block",fontSize:12},children:d}),(0,n.jsx)("p",{style:{margin:"3px 0 0",fontSize:11,lineHeight:1.5,opacity:.82},children:p}),c&&null!==m&&(0,n.jsxs)("div",{style:{marginTop:8},children:[(0,n.jsx)("div",{role:"progressbar","aria-label":`${r} data download`,"aria-valuenow":m,"aria-valuemin":0,"aria-valuemax":100,style:{height:5,borderRadius:10,background:"rgba(120,120,120,.15)",overflow:"hidden"},children:(0,n.jsx)("div",{style:{height:"100%",width:`${m}%`,borderRadius:"inherit",background:"var(--primary-color, #2563eb)"}})}),(0,n.jsxs)("small",{style:{fontSize:10,opacity:.75},children:[u.toLocaleString()," of ",h.toLocaleString()," records processed"]})]})]}),(0,n.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,n.jsxs)("small",{style:{fontSize:10,opacity:.75},children:[Math.max(0,a-t),"/",a," groups verified"]}),i&&!c&&l&&(0,n.jsx)("button",{type:"button",onClick:l,style:{minHeight:34,padding:"5px 11px",borderRadius:10,cursor:"pointer",fontSize:11,fontWeight:800,border:"1px solid color-mix(in srgb, var(--primary-color, #2563eb) 30%, transparent)",background:"var(--surface, #fff)",color:"var(--text, #0f172a)"},children:"Retry this page"})]})]})}var z=t(17258),M=t(69097),R=t(35748);function $(e){let r=Number(e);return Number.isFinite(r)?r:0}async function T(e){try{let r=await t.e(2685).then(t.bind(t,22685));if("function"!=typeof r.getSyncDiagnostics)return null;return await r.getSyncDiagnostics(e?{accountId:e}:void 0)}catch{return null}}async function L(e){try{let r=(await Promise.resolve().then(t.bind(t,53196))).db;if(!r?.tables)return[];let a=[];for(let t of r.tables){let r=await t.toArray(),n=0,i=0,o=0,s=0;for(let t of r){if(e&&t.accountId&&t.accountId!==e)continue;s+=1;let r=String(t.syncStatus??t.synced??"").toLowerCase();("pending"===r||"0"===r||0===t.synced)&&(n+=1),("failed"===r||"error"===r||"2"===r||2===t.synced||t.syncError)&&(i+=1),("conflict"===r||t.conflictId)&&(o+=1)}(n||i||o)&&a.push({tableName:t.name,pending:n,failed:i,conflicts:o,total:s})}return a.sort((e,r)=>r.failed-e.failed||r.pending-e.pending||e.tableName.localeCompare(r.tableName))}catch{return[]}}async function D(e,r){let t=new Blob([JSON.stringify(r,null,2)],{type:"application/json"}),a=URL.createObjectURL(t);try{let r=document.createElement("a");r.href=a,r.download=e,document.body.appendChild(r),r.click(),r.remove()}finally{URL.revokeObjectURL(a)}}async function P(){try{let e=await t.e(2685).then(t.bind(t,22685));if("function"!=typeof e.getSyncDiagnostics)return null;return await e.getSyncDiagnostics()}catch{return null}}function O(){var e;let{status:r,pushed:t,pulled:a,errors:o,lastSyncedAt:s,autoSyncEnabled:l,setAutoSyncEnabled:c}=(0,f.j)(),[d,p]=(0,i.useState)(null);(0,i.useEffect)(()=>{let e=!1,r=async()=>{let r=await P();e||p(r)};r();let t=window.setInterval(r,3e4);return()=>{e=!0,window.clearInterval(t)}},[r,t,a,s]);let u=d?.conflicts||0,h=d?.pending||0,m=d?.errors||0,g=u>0?"purple":"success"===r?"green":"failed"===r||m>0?"red":"offline"===r?"orange":"syncing"===r||"checking"===r?"blue":"gray",b=u>0?"Sync conflicts need review":"syncing"===r||"checking"===r?"Syncing account data...":"success"===r?"Account data synced":"failed"===r?"Sync needs attention":"offline"===r?"Offline mode":"Sync ready",x=o[0]||d?.lastSyncError||"";return(0,n.jsxs)("section",{className:"sync-strip","aria-live":"polite",children:[(0,n.jsx)("style",{children:U}),(0,n.jsx)("div",{className:`sync-dot ${g}`}),(0,n.jsxs)("div",{className:"sync-copy",children:[(0,n.jsx)("strong",{children:b}),(0,n.jsxs)("span",{children:["Pushed ",t," \xb7 Pulled ",a," \xb7 Pending ",h," \xb7 Conflicts ",u," \xb7 Last sync: ",(e=s||d?.lastSyncOkAt||d?.lastSyncAt)?new Date(e).toLocaleString("en-GH",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"Never"]}),!!x&&(0,n.jsx)("small",{children:x})]}),(0,n.jsxs)("label",{className:"sync-toggle",title:"Enable or disable automatic background sync",children:[(0,n.jsx)("input",{type:"checkbox",checked:l,onChange:e=>c(e.target.checked)}),(0,n.jsx)("span",{children:"Auto"})]})]})}let U=`
.sync-strip {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148, 163, 184, .2);
  box-shadow: 0 10px 24px rgba(15, 23, 42, .045);
  overflow: hidden;
}

.sync-dot {
  width: 12px;
  height: 12px;
  flex: 0 0 auto;
  border-radius: 999px;
}

.sync-dot.green { background: #16a34a; }
.sync-dot.red { background: #dc2626; }
.sync-dot.orange { background: #f59e0b; }
.sync-dot.blue { background: #2563eb; }
.sync-dot.gray { background: #64748b; }
.sync-dot.purple { background: #7c3aed; }

.sync-copy {
  min-width: 0;
  flex: 1;
}

.sync-copy strong,
.sync-copy span,
.sync-copy small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sync-copy strong {
  font-size: 12px;
  font-weight: 950;
}

.sync-copy span,
.sync-copy small {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 750;
}

.sync-copy small {
  color: #dc2626;
}

.sync-toggle {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 950;
  color: var(--text, #0f172a);
}

.sync-toggle input {
  width: 16px;
  height: 16px;
}

@media (max-width: 520px) {
  .sync-strip {
    align-items: flex-start;
  }

  .sync-copy strong,
  .sync-copy span,
  .sync-copy small {
    white-space: normal;
  }
}
`;function B(e){return e?new Date(e).toLocaleString("en-GH",{dateStyle:"medium",timeStyle:"short"}):"Never"}function F({label:e,value:r,tone:t="neutral"}){return(0,n.jsxs)("div",{className:"system-status-row",children:[(0,n.jsx)("span",{children:e}),(0,n.jsx)("strong",{"data-tone":t,children:r})]})}function H(){let[e,r]=(0,i.useState)(null),{statusSheetOpen:a,closeStatusSheet:o}=(0,M.g)(),{status:s,actionState:l,actions:c}=function(){let{accountId:e,account:r}=(0,g.F)(),{activeSchool:a,activeBranch:n,activeBranchId:o}=(0,x.c)(),s=(0,k.tm)(),l=(0,y.x)(),c=(0,f.j)(),{statusRevision:d,refreshSystemStatus:p}=(0,M.g)(),[u,h]=(0,i.useState)("u"<typeof navigator||navigator.onLine),[m,b]=(0,i.useState)(null),[v,w]=(0,i.useState)([]),[j,S]=(0,i.useState)(null),[N,C]=(0,i.useState)({activeAction:null,actionError:null,actionMessage:null}),E=(0,i.useMemo)(()=>(0,R.Yd)(),[]),I=(0,i.useCallback)(async()=>{let[r,t,a]=await Promise.all([T(e),navigator.onLine?(0,R.yM)().catch(()=>null):Promise.resolve(null),L(e)]);b(r),w(a),t&&S(t)},[e]);(0,i.useEffect)(()=>{let e=()=>{h(navigator.onLine)};return window.addEventListener("online",e),window.addEventListener("offline",e),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)}},[]),(0,i.useEffect)(()=>{let e=()=>{I()};return window.addEventListener("eleeveon:sync-success-timestamps-updated",e),()=>{window.removeEventListener("eleeveon:sync-success-timestamps-updated",e)}},[I]),(0,i.useEffect)(()=>{I();let e=window.setInterval(()=>{I()},3e4);return()=>{window.clearInterval(e)}},[I,d,c.status,c.pushed,c.pulled]);let A=(0,i.useCallback)(async(e,r)=>{C({activeAction:e,actionError:null,actionMessage:null});try{let e=await r();C({activeAction:null,actionError:null,actionMessage:e||"Completed successfully."}),p(),await I()}catch(e){C({activeAction:null,actionError:e?.message||String(e),actionMessage:null})}},[I,p]),z=(0,i.useCallback)(()=>A("refresh-data",async()=>{let e=await Promise.resolve().then(t.bind(t,32708));if("function"==typeof e.triggerManualSync)e.triggerManualSync();else if("function"==typeof e.runSync)await e.runSync({trigger:"manual",includePlatformCache:!0});else throw Error("Manual synchronization is unavailable.");return"Data refresh started."}),[A]),P=(0,i.useCallback)(()=>A("retry-failed",async()=>{let r=(await Promise.resolve().then(t.bind(t,53196))).db;if(!r)throw Error("Local database is unavailable.");let a=0;for(let t of r.tables)if(!["migrationJournal","databaseRecoveryBackups"].includes(t.name))for(let r of(await t.toArray()).filter(r=>(!e||r.accountId===e)&&("error"===r.synced||"error"===r.syncStatus||!!r.syncError)))await t.update(r.id,{synced:"pending",syncStatus:"pending",syncError:void 0,updatedAt:Date.now()}),a+=1;let n=await Promise.resolve().then(t.bind(t,32708));return a>0&&"function"==typeof n.triggerManualSync&&n.triggerManualSync(),a?`${a} failed record(s) queued again.`:"No failed records were found."}),[e,A]),O=(0,i.useCallback)(()=>A("reconnect-live",async()=>(l.reconnect(),"Reconnecting live updates.")),[l,A]),U=(0,i.useCallback)(()=>A("check-update",async()=>{let e=await (0,R.yM)();return S(e),window.dispatchEvent(new CustomEvent("eleeveon:app-version-changed",{detail:{metadata:e}})),(0,R._5)(e,E).updateAvailable?"A newer application build was detected.":"The application is up to date."}),[E,A]),B=(0,i.useCallback)(()=>A("export-backup",async()=>{let r,a=await Promise.resolve().then(t.bind(t,53196)),n=[a.createExternalDatabaseBackup,a.exportDatabaseBackup,a.createDatabaseBackup,a.createPreUpgradeBackup].find(e=>"function"==typeof e);if(n)r=await n({accountId:e,reason:"manual-system-status-export"});else if(a.db){let t={};for(let r of a.db.tables){let a=await r.toArray();t[r.name]=e?a.filter(r=>!r.accountId||r.accountId===e):a}r={accountId:e,databaseVersion:s.currentVersion,exportedAt:Date.now(),tables:t}}else throw Error("Offline backup export is unavailable.");return await D(`eleeveon-offline-backup-${Date.now()}.json`,r),"Offline backup exported."}),[e,s.currentVersion,A]),F=(0,i.useCallback)(()=>A("repair-media",async()=>{if(!e)throw Error("No active account is available.");let r=await t.e(9190).then(t.bind(t,19190)),a=r.repairMediaIntegrity||r.repairMediaRecords;if("function"!=typeof a)throw Error("Media repair is unavailable.");let n=await a(e),i=$(n?.repaired||n?.updated||n?.fixed);return i?`${i} media record(s) repaired.`:"Media inspection completed."}),[e,A]),H=(0,i.useCallback)(()=>{window.dispatchEvent(new CustomEvent("eleeveon:open-offline-data-removal"))},[]),K=!!j&&(0,R._5)(j,E).updateAvailable;return{status:{online:u,realtimeStatus:l.status.status,realtimeConnected:l.connected,lastSuccessfulPush:m?.lastPushAt??m?.lastSuccessfulPush??(c.pushed>0?c.lastSyncedAt:null),lastSuccessfulPull:m?.lastPullAt??m?.lastSuccessfulPull??(c.pulled>0?c.lastSyncedAt:null),pendingChanges:$(m?.pending),failedChanges:$(m?.errors??m?.failed),conflicts:$(m?.conflicts??c.conflicts),databaseVersion:s.currentVersion,targetDatabaseVersion:s.targetVersion,applicationVersion:E,remoteApplicationVersion:j,updateAvailable:K,currentAccountId:e,currentAccountName:r?.name||null,currentBranchId:o,currentBranchName:n?.name||null,currentSchoolName:a?.name||null,lastSyncError:m?.lastSyncError||c.errors?.[0]||null,tableBreakdown:v},actionState:N,refresh:I,actions:{refreshData:z,retryFailedRecords:P,reconnectRealtime:O,checkForAppUpdate:U,exportOfflineBackup:B,repairMediaRecords:F,openOfflineRemoval:H}}}();if(!a)return null;let d=!!l.activeAction,p=[{key:"refresh-data",label:"Refresh data",note:"Push and pull now",action:c.refreshData},{key:"refresh-app",label:"Refresh application",note:"Reload this page and restart Eleeveon",action:async()=>{if(o(),await new Promise(e=>{window.setTimeout(e,150)}),"serviceWorker"in navigator)try{let e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(e=>e.update()))}catch(e){console.warn("[system status] service-worker refresh check failed",e)}window.location.reload()}},{key:"retry-failed",label:"Retry failed records",note:`${s.failedChanges} currently failed`,action:c.retryFailedRecords},{key:"reconnect-live",label:"Reconnect live updates",note:s.realtimeStatus,action:c.reconnectRealtime},{key:"check-update",label:"Check for app update",note:s.updateAvailable?"Update detected":s.applicationVersion.appVersion,action:c.checkForAppUpdate},{key:"export-backup",label:"Export offline backup",note:"Save local account data",action:c.exportOfflineBackup},{key:"repair-media",label:"Repair media records",note:"Check mixed or orphaned media",action:c.repairMediaRecords},{key:"remove-offline",label:"Remove offline account data",note:"Separate from logout",action:()=>{o(),c.openOfflineRemoval()},danger:!0}];return(0,n.jsxs)("div",{className:"system-status-overlay",role:"presentation",onMouseDown:e=>{e.target===e.currentTarget&&o()},children:[(0,n.jsx)("style",{children:K}),(0,n.jsxs)("aside",{className:"system-status-sheet",role:"dialog","aria-modal":"true","aria-labelledby":"system-status-title",children:[(0,n.jsxs)("header",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"System status"}),(0,n.jsx)("h2",{id:"system-status-title",children:"Data, connection and device"})]}),(0,n.jsx)("button",{type:"button",className:"system-close",onClick:o,"aria-label":"Close system status",children:"✕"})]}),(0,n.jsx)("section",{className:"system-status-summary",children:(0,n.jsx)(O,{})}),(0,n.jsxs)("section",{className:"system-status-grid",children:[(0,n.jsx)(F,{label:"Connection",value:s.online?"Online":"Offline",tone:s.online?"good":"warning"}),(0,n.jsx)(F,{label:"Live updates",value:s.realtimeConnected?"Connected":s.realtimeStatus,tone:s.realtimeConnected?"good":"warning"}),(0,n.jsx)(F,{label:"Last successful push",value:B(s.lastSuccessfulPush)}),(0,n.jsx)(F,{label:"Last successful pull",value:B(s.lastSuccessfulPull)}),(0,n.jsxs)("button",{type:"button",className:"system-status-click-row",onClick:()=>r("pending"===e?null:"pending"),children:[(0,n.jsx)(F,{label:"Pending changes",value:s.pendingChanges,tone:s.pendingChanges?"warning":"good"}),(0,n.jsx)("span",{children:"pending"===e?"−":"›"})]}),(0,n.jsxs)("button",{type:"button",className:"system-status-click-row",onClick:()=>r("failed"===e?null:"failed"),children:[(0,n.jsx)(F,{label:"Failed changes",value:s.failedChanges,tone:s.failedChanges?"danger":"good"}),(0,n.jsx)("span",{children:"failed"===e?"−":"›"})]}),(0,n.jsx)(F,{label:"Database version",value:`${s.databaseVersion??"—"} / ${s.targetDatabaseVersion}`,tone:s.databaseVersion===s.targetDatabaseVersion?"good":"warning"}),(0,n.jsx)(F,{label:"Application version",value:s.applicationVersion.appVersion}),(0,n.jsx)(F,{label:"Application update",value:s.updateAvailable?"Available":"Up to date",tone:s.updateAvailable?"warning":"good"}),(0,n.jsx)(F,{label:"Current account",value:s.currentAccountName||s.currentAccountId||"None"}),(0,n.jsx)(F,{label:"Current branch",value:s.currentBranchName||"None"})]}),e?(0,n.jsxs)("section",{className:"system-table-breakdown",children:[(0,n.jsxs)("header",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"pending"===e?"Pending records":"Failed records"}),(0,n.jsx)("strong",{children:"Table breakdown"})]}),(0,n.jsx)("button",{type:"button",onClick:()=>r(null),children:"Close"})]}),(0,n.jsxs)("div",{children:[s.tableBreakdown.filter(r=>"pending"===e?r.pending>0:r.failed>0).map(r=>(0,n.jsxs)("article",{children:[(0,n.jsx)("strong",{children:r.tableName}),(0,n.jsx)("span",{children:"pending"===e?`${r.pending} pending`:`${r.failed} failed`}),(0,n.jsxs)("small",{children:[r.total," local record",1===r.total?"":"s"]})]},r.tableName)),s.tableBreakdown.some(r=>"pending"===e?r.pending>0:r.failed>0)?null:(0,n.jsx)("p",{children:"No matching table records were found."})]})]}):null,s.lastSyncError&&(0,n.jsxs)("div",{className:"system-error",children:[(0,n.jsx)("strong",{children:"Sync needs attention"}),(0,n.jsx)("span",{children:s.lastSyncError})]}),l.actionError&&(0,n.jsx)("div",{className:"system-error",children:l.actionError}),l.actionMessage&&(0,n.jsx)("div",{className:"system-success",children:l.actionMessage}),(0,n.jsxs)("section",{className:"system-actions",children:[(0,n.jsx)("div",{className:"system-section-title",children:"Actions"}),p.map(e=>(0,n.jsxs)("button",{type:"button",className:e.danger?"danger":"",disabled:d&&l.activeAction!==e.key,onClick:()=>{e.action()},children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("strong",{children:l.activeAction===e.key?"Working…":e.label}),(0,n.jsx)("small",{children:e.note})]}),(0,n.jsx)("b",{children:"›"})]},e.key))]})]})]})}let K=`
.system-status-overlay {
  position: fixed;
  inset: 0;
  z-index: 9000;
  display: flex;
  justify-content: flex-end;
  background: rgba(15,23,42,.48);
  backdrop-filter: blur(4px);
}

.system-status-sheet {
  width: min(430px, 100%);
  height: 100%;
  overflow: auto;
  padding: 18px;
  background: var(--surface, #fff);
  color: var(--text, #111827);
  box-shadow: -18px 0 55px rgba(15,23,42,.18);
}

.system-status-sheet header {
  position: sticky;
  top: -18px;
  z-index: 2;
  margin: -18px -18px 16px;
  padding: 18px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid var(--border, rgba(0,0,0,.09));
  background: var(--surface, #fff);
}

.system-status-sheet header span,
.system-section-title {
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 950;
  letter-spacing: .06em;
  text-transform: uppercase;
}

.system-status-sheet h2 {
  margin: 4px 0 0;
  font-size: 19px;
}

.system-close {
  width: 38px;
  height: 38px;
  border: 1px solid var(--border, rgba(0,0,0,.10));
  border-radius: 12px;
  background: var(--surface, #fff);
  color: inherit;
  cursor: pointer;
}

.system-status-summary {
  margin-bottom: 14px;
}

.system-status-summary .sync-strip {
  box-shadow: none;
  background: var(--bg, #f8fafc);
}

.system-status-grid {
  display: grid;
  gap: 6px;
}


.system-status-click-row {
  width: 100%;
  min-width: 0;
  display: grid;
  grid-template-columns:
    minmax(0, 1fr) auto;
  align-items: center;
  gap: 8px;
  border: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.system-status-click-row >
.system-status-row {
  width: 100%;
}

.system-status-click-row >
span {
  color:
    var(--muted, #64748b);
  font-size: 20px;
  font-weight: 900;
}

.system-table-breakdown {
  margin-top: 12px;
  border: 1px solid
    var(--border, rgba(0,0,0,.1));
  border-radius: 18px;
  padding: 11px;
  background:
    color-mix(
      in srgb,
      var(--muted, #64748b)
      5%,
      var(--surface, #fff)
    );
}

.system-table-breakdown > header {
  display: flex;
  align-items: center;
  justify-content:
    space-between;
  gap: 10px;
  padding: 0 0 9px;
}

.system-table-breakdown > header span,
.system-table-breakdown > header strong {
  display: block;
}

.system-table-breakdown > header span {
  color:
    var(
      --primary-color,
      #2563eb
    );
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .07em;
}

.system-table-breakdown > header button {
  border: 1px solid
    var(--border, rgba(0,0,0,.1));
  border-radius: 10px;
  background: transparent;
  color: inherit;
  padding: 7px 9px;
}

.system-table-breakdown > div {
  display: grid;
  gap: 6px;
}

.system-table-breakdown article {
  display: grid;
  grid-template-columns:
    minmax(0, 1fr) auto;
  gap: 3px 10px;
  padding: 9px;
  border-radius: 12px;
  background:
    var(--surface, #fff);
}

.system-table-breakdown article strong {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.system-table-breakdown article span {
  font-weight: 900;
}

.system-table-breakdown article small {
  grid-column: 1 / -1;
  color:
    var(--muted, #64748b);
}

.system-status-row {
  min-height: 42px;
  padding: 9px 11px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  border-radius: 13px;
  background: var(--bg, #f8fafc);
}

.system-status-row span {
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 800;
}

.system-status-row strong {
  max-width: 58%;
  text-align: right;
  font-size: 12px;
  overflow-wrap: anywhere;
}

.system-status-row strong[data-tone="good"] {
  color: #15803d;
}

.system-status-row strong[data-tone="warning"] {
  color: #b45309;
}

.system-status-row strong[data-tone="danger"] {
  color: #dc2626;
}

.system-error,
.system-success {
  margin-top: 12px;
  padding: 11px 12px;
  display: grid;
  gap: 3px;
  border-radius: 13px;
  font-size: 12px;
  line-height: 1.45;
}

.system-error {
  color: #b91c1c;
  background: rgba(220,38,38,.08);
}

.system-success {
  color: #166534;
  background: rgba(22,163,74,.08);
}

.system-actions {
  margin-top: 18px;
  display: grid;
  gap: 7px;
}

.system-section-title {
  margin-bottom: 2px;
}

.system-actions button {
  width: 100%;
  min-height: 54px;
  border: 1px solid var(--border, rgba(0,0,0,.09));
  border-radius: 15px;
  padding: 9px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  text-align: left;
  background: var(--surface, #fff);
  color: inherit;
  cursor: pointer;
}

.system-actions button:hover {
  background: var(--bg, #f8fafc);
}

.system-actions button.danger {
  color: #dc2626;
  border-color: rgba(220,38,38,.24);
  background: rgba(220,38,38,.04);
}

.system-actions button:disabled {
  opacity: .55;
  cursor: not-allowed;
}

.system-actions button span {
  min-width: 0;
  display: grid;
  gap: 3px;
}

.system-actions button strong {
  font-size: 13px;
}

.system-actions button small {
  color: var(--muted, #64748b);
  font-size: 11px;
}

.system-actions button > b {
  font-size: 20px;
  color: var(--muted, #64748b);
}
`;var _=t(47650),W=t(837);function V(){if("u"<typeof navigator)return{calling:!1,screen:!1,secure:!1};let e=window.isSecureContext;return{secure:e,calling:e&&"u">typeof RTCPeerConnection&&"function"==typeof navigator.mediaDevices?.getUserMedia,screen:e&&"function"==typeof navigator.mediaDevices?.getDisplayMedia}}function q(e,r){return e instanceof Error?"NotAllowedError"===e.name||"PermissionDeniedError"===e.name?"Permission was declined or blocked. Check your browser's camera, microphone or screen-sharing permissions.":"NotFoundError"===e.name?"No suitable camera, microphone or screen source was found on this device.":"InvalidStateError"===e.name?"Start screen sharing directly from this call window while it is active and focused.":e.message||r:r}function J({conversationId:e,open:r,onClose:t}){let[a,o]=(0,i.useState)("idle"),[s,l]=(0,i.useState)(""),[c,d]=(0,i.useState)(null),[p,u]=(0,i.useState)(!1),[h,m]=(0,i.useState)(!1),[g,b]=(0,i.useState)(!1),[x,f]=(0,i.useState)({calling:!1,screen:!1,secure:!1}),[v,y]=(0,i.useState)(!1),w=(0,i.useRef)(null),k=(0,i.useRef)(null),j=(0,i.useRef)(null),S=(0,i.useRef)(null),N=(0,i.useRef)(null),C=(0,i.useRef)(null),E=(0,i.useRef)(""),I=(0,i.useRef)(new Set),A=(0,i.useRef)(Date.now()-2500),z=(0,i.useRef)([]),M=(0,i.useRef)("idle");M.current=a,(0,i.useEffect)(()=>{f(V())},[]);let R=()=>{N.current&&(N.current.srcObject=k.current)},$=()=>{C.current&&(C.current.srcObject=S.current)};(0,i.useEffect)(()=>{R(),$()},[a,g,v]);let T=(0,i.useCallback)(()=>{j.current?.getTracks().forEach(e=>e.stop()),j.current=null,k.current?.getTracks().forEach(e=>e.stop()),k.current=null,w.current?.close(),w.current=null,S.current?.getTracks().forEach(e=>e.stop()),S.current=null,z.current=[],E.current="",N.current&&(N.current.srcObject=null),C.current&&(C.current.srcObject=null),u(!1),m(!1),b(!1),y(!1),o("idle"),d(null)},[]);(0,i.useEffect)(()=>{T(),I.current.clear(),A.current=Date.now()-2500},[e,T]),(0,i.useEffect)(()=>()=>{T()},[T]);let L=(0,i.useCallback)(async(r,t={})=>{E.current&&await W.k.sendSignal(e,r,E.current,t)},[e]);async function D(e){let r=V();if(!r.calling)throw Error(r.secure?"This browser cannot start a WebRTC call. Try Chrome, Edge or Firefox on a desktop computer.":"Calls need HTTPS or localhost. Open Eleeveon Schools over its secure website.");let t=await W.k.callConfig();if(!t.iceServers.length)throw Error("Live calling is not configured yet. Check the Eleeveon call settings on Render.");let a=await navigator.mediaDevices.getUserMedia({audio:!0,video:e});k.current=a,b(e);let n=new RTCPeerConnection({iceServers:t.iceServers});return w.current=n,a.getTracks().forEach(e=>n.addTrack(e,a)),e||n.addTransceiver("video",{direction:"sendrecv"}),n.onicecandidate=e=>{e.candidate&&L("ice",e.candidate.toJSON()).catch(()=>l("The network is having trouble connecting this call."))},n.ontrack=e=>{S.current||(S.current=new MediaStream),S.current.addTrack(e.track),"video"===e.track.kind&&y(!0),$()},n.onconnectionstatechange=()=>{"connected"===n.connectionState&&o("connected"),("failed"===n.connectionState||"disconnected"===n.connectionState)&&l("The connection was interrupted. Try calling again or check your network.")},R(),n}async function P(e){l(""),E.current=crypto.randomUUID();try{let r=await D(e);await r.setLocalDescription(await r.createOffer()),await L("offer",{sdp:r.localDescription?.sdp,type:"offer",video:e}),o("calling")}catch(r){let e=q(r,"The call could not start.");T(),l(e)}}async function O(){if(c){l(""),E.current=c.sessionId;try{let e=await D(!!c.payload?.video);for(let r of(await e.setRemoteDescription({type:"offer",sdp:String(c.payload?.sdp||"")}),z.current.splice(0)))await e.addIceCandidate(r);await e.setLocalDescription(await e.createAnswer()),await L("answer",{sdp:e.localDescription?.sdp,type:"answer"}),d(null),o("calling")}catch(r){let e=q(r,"The call could not be answered.");T(),l(e)}}}async function U(e){if(!I.current.has(e.id)){if(I.current.add(e.id),"offer"===e.kind&&"idle"===M.current){if(Date.now()-new Date(e.createdAt).getTime()>3e4)return;d(e),o("incoming");return}if(e.sessionId===E.current)if("answer"===e.kind&&w.current&&!w.current.remoteDescription)for(let r of(await w.current.setRemoteDescription({type:"answer",sdp:String(e.payload?.sdp||"")}),z.current.splice(0)))await w.current.addIceCandidate(r);else if("ice"===e.kind){let r=e.payload;w.current?.remoteDescription?await w.current.addIceCandidate(r):z.current.push(r)}else("end"===e.kind||"decline"===e.kind)&&(T(),l("decline"===e.kind?"The call was declined.":"The call has ended."))}}async function B(){try{await L("end")}catch{}T(),t()}async function F(){if(c)try{await W.k.sendSignal(e,"decline",c.sessionId,{})}catch{}T(),t()}async function H(){if(!w.current||"connected"!==M.current)return void l("Connect a voice or video call before sharing your screen.");let e=navigator.mediaDevices;if(!window.isSecureContext||"function"!=typeof e?.getDisplayMedia)return void l("Screen sharing isn't available in this browser or app. Open Eleeveon Schools in desktop Chrome or Edge over HTTPS, or send a screenshot using +.");l("");let r=null;try{let t=(r=await e.getDisplayMedia({video:!0,audio:!1})).getVideoTracks()[0],a=w.current.getSenders().find(e=>e.track?.kind==="video")??w.current.getTransceivers().find(e=>"video"===e.receiver.track.kind)?.sender;if(!t||!a)throw Error("This connection can't accept screen video. Please restart the call and try again.");await a.replaceTrack(t),j.current=r,u(!0),t.onended=()=>{K()}}catch(e){r?.getTracks().forEach(e=>e.stop()),l(q(e,"Screen sharing could not start."))}}async function K(){let e=w.current?.getSenders().find(e=>e.track?.kind==="video")??w.current?.getTransceivers().find(e=>"video"===e.receiver.track.kind)?.sender,r=k.current?.getVideoTracks()[0]??null;try{e&&await e.replaceTrack(r)}catch{l("Could not restore your camera after sharing.")}j.current?.getTracks().forEach(e=>e.stop()),j.current=null,u(!1)}return(0,i.useEffect)(()=>{let r=!0,t=!1,a=async()=>{if(r&&!t&&!document.hidden){t=!0;try{for(let t of(await W.k.signals(e,A.current)).signals){if(!r)break;await U(t)}A.current=Date.now()-3500}catch{}finally{t=!1}}};a();let n=window.setInterval(()=>void a(),2e3);return()=>{r=!1,clearInterval(n)}},[e]),(0,n.jsxs)("div",{className:`els ${r||"incoming"===a?"els-open":""}`,"aria-label":"Live Eleeveon assistance",children:[(0,n.jsx)("style",{children:`
      .els{font-size:13px}.els button{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:42px;padding:10px 14px;border:1px solid var(--border,#d4e1e2);border-radius:13px;background:var(--surface,#fff);color:inherit;font-weight:650}.els button:focus-visible{outline:2px solid var(--dashboard-primary,#147c78);outline-offset:2px}.els button.primary{background:var(--dashboard-primary,#147c78);color:#fff;border-color:transparent}.els button.end{color:#fff;background:#b7354e;border-color:transparent}.els button:disabled{opacity:.5;cursor:not-allowed}
      .els-open::before{content:"";position:fixed;inset:0;z-index:2147480000;background:rgba(15,31,42,.44);backdrop-filter:blur(3px)}.els-modal{position:fixed;z-index:2147480001;top:50%;left:50%;transform:translate(-50%,-50%);width:min(700px,calc(100vw - 24px));max-height:min(88dvh,720px);overflow-y:auto;border:1px solid var(--border,#d4e1e2);border-radius:21px;background:var(--surface,#fff);padding:clamp(13px,2vw,20px);box-shadow:0 24px 60px #102e3240}.els-head{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px}.els-head strong{font-size:15px}.els-head button{width:35px;height:35px;min-height:35px;padding:0}.els-actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:13px}.els-video{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:15px 0}.els-video>div{position:relative;min-width:0;border-radius:16px;overflow:hidden;background:#142c3c}.els-video video{height:clamp(135px,22dvh,240px);width:100%;object-fit:contain;display:block}.els-video label{position:absolute;bottom:8px;left:9px;color:#fff;background:#0c2237aa;border-radius:7px;padding:4px 7px;font-size:10px}.els-status{font-size:12px;line-height:1.55;color:var(--muted,#667b89);margin:6px 0}.els-error{color:#b32642;background:color-mix(in srgb,#f4b8c2 20%,var(--surface,#fff));border:1px solid #df9daf55;padding:10px;border-radius:10px;line-height:1.5}.els-supported{font-size:11px;margin-top:12px;padding:10px;border-radius:11px;background:color-mix(in srgb,var(--dashboard-primary,#147c78) 7%,var(--surface,#fff));color:var(--text,#364b55)}
      @media(max-width:560px){.els-modal{width:calc(100vw - 14px);max-height:89dvh}.els-video{grid-template-columns:1fr}.els-video video{height:125px}.els-actions button{flex:1}}
    `}),(r||"incoming"===a)&&(0,n.jsxs)("div",{className:"els-modal",role:"dialog","aria-modal":"false","aria-label":"Live assistance call",children:[(0,n.jsxs)("header",{className:"els-head",children:[(0,n.jsx)("strong",{children:"Live assistance"}),(0,n.jsx)("button",{type:"button","aria-label":"Close call panel",onClick:()=>{t(),"idle"===a&&d(null)},children:"✕"})]}),(0,n.jsx)("p",{className:"els-status",children:"incoming"===a?"Incoming call \xb7 choose whether to join":"calling"===a?"Connecting your call…":"connected"===a?"Connected \xb7 you can speak and share your screen":"Talk or share your screen with Eleeveon Support."}),!!s&&(0,n.jsx)("p",{className:"els-error",role:"alert",children:s}),("connected"===a||"calling"===a)&&(0,n.jsxs)("div",{className:"els-video",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("video",{ref:C,autoPlay:!0,playsInline:!0}),(0,n.jsx)("label",{children:v?"Other participant":"Other participant \xb7 audio"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("video",{ref:N,autoPlay:!0,muted:!0,playsInline:!0}),(0,n.jsx)("label",{children:g?"You":"You \xb7 audio"})]})]}),"incoming"===a?(0,n.jsxs)("div",{className:"els-actions",children:[(0,n.jsx)("button",{className:"primary",onClick:()=>void O(),disabled:!x.calling,children:"Accept call"}),(0,n.jsx)("button",{onClick:()=>void F(),children:"Decline"})]}):"idle"===a?(0,n.jsxs)("div",{className:"els-actions",children:[(0,n.jsx)("button",{className:"primary",disabled:!x.calling,onClick:()=>void P(!1),children:"☎ Voice call"}),(0,n.jsx)("button",{disabled:!x.calling,onClick:()=>void P(!0),children:"▣ Video call"})]}):(0,n.jsxs)("div",{className:"els-actions",children:[(0,n.jsx)("button",{onClick:()=>{k.current?.getAudioTracks().forEach(e=>e.enabled=h),m(e=>!e)},children:h?"Unmute":"Mute"}),(0,n.jsx)("button",{disabled:!p&&("connected"!==a||!x.screen),onClick:()=>void(p?K():H()),children:p?"■ Stop sharing":"▣ Share screen"}),(0,n.jsx)("button",{className:"end",onClick:()=>void B(),children:"End call"})]}),!x.calling&&(0,n.jsx)("p",{className:"els-supported",children:"Calls need a supported browser, a secure HTTPS connection and microphone access."}),!x.screen&&(0,n.jsx)("p",{className:"els-supported",children:"Screen sharing is not supported here. Open the web app in desktop Chrome or Edge, or attach a screenshot using +. Voice and video may still work."}),x.screen&&"connected"===a&&!p&&(0,n.jsx)("p",{className:"els-status",style:{marginTop:12},children:"You choose which tab, window or screen to share. Sharing stops when you select Stop or end the call."})]})]})}let Y="ELEEVEON_E2EE_V1:",G=new TextEncoder,X=new TextDecoder,Q="deviceKeys";function Z(){if("u"<typeof crypto||!crypto.subtle||"u"<typeof indexedDB)throw Error("Encrypted chat needs WebCrypto and IndexedDB on a secure HTTPS connection.")}function ee(e){return e instanceof Uint8Array?e:new Uint8Array(e)}function er(e){let r=ee(e),t="";for(let e=0;e<r.length;e+=4096)t+=String.fromCharCode(...r.subarray(e,e+4096));return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"")}function et(e){let r=atob(e.replace(/-/g,"+").replace(/_/g,"/")+"=".repeat((4-e.length%4)%4));return Uint8Array.from(r,e=>e.charCodeAt(0))}function ea(e){return G.encode(e)}function en(e){return crypto.getRandomValues(new Uint8Array(e))}function ei(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)}function eo(){return Z(),new Promise((e,r)=>{let t=indexedDB.open("eleeveon-support-keys-v1",1);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(Q)||t.result.createObjectStore(Q,{keyPath:"id"})},t.onerror=()=>r(t.error||Error("Private key storage failed")),t.onsuccess=()=>e(t.result)})}async function es(e){let r=await eo();try{return await new Promise((t,a)=>{let n=r.transaction(Q,"readonly").objectStore(Q).get(e);n.onsuccess=()=>t(n.result),n.onerror=()=>a(n.error)})}finally{r.close()}}async function el(e){let r=await eo();try{await new Promise((t,a)=>{let n=r.transaction(Q,"readwrite");n.objectStore(Q).put(e),n.oncomplete=()=>t(),n.onerror=()=>a(n.error)})}finally{r.close()}}async function ec(e,r){Z();let t=`${e.x}.${e.y}|${r.x}.${r.y}`;return Array.from(ee(await crypto.subtle.digest("SHA-256",ea(t))).slice(0,16),e=>e.toString(16).padStart(2,"0")).join("").match(/.{1,4}/g).join(" ").toUpperCase()}let ed=new Map;async function ep(e,r){if(Z(),!e||!r)throw Error("Sign in before enabling encrypted support.");let t=`${e}:${r}`,a=ed.get(t);if(a)return a;let n=(async()=>{let t=`eleeveon-support-device:${e}:${r}`,a=localStorage.getItem(t);if(a){let t=await es(a);if(t?.accountId===e&&t.userId===r)return t;throw Error("Your local encryption keys are missing. Chat history on this device cannot be recovered. Use a previously enrolled device or explicitly reset your device enrollment.")}let n=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!1,["deriveBits"]),i=await crypto.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},!1,["sign","verify"]),o={id:a=crypto.randomUUID(),accountId:e,userId:r,encryptionKey:n,signingKey:i};return await el(o),localStorage.setItem(t,a),o})();ed.set(t,n);try{return await n}finally{ed.delete(t)}}async function eu(e,r){let t=await ep(e,r),[a,n]=await Promise.all([crypto.subtle.exportKey("jwk",t.encryptionKey.publicKey),crypto.subtle.exportKey("jwk",t.signingKey.publicKey)]);return{id:t.id,encryptionPublicJwk:a,signingPublicJwk:n,fingerprint:await ec(a,n)}}async function eh(e,r,t,a){let n=await crypto.subtle.deriveBits({name:"ECDH",public:r},e,256),i=await crypto.subtle.importKey("raw",n,"HKDF",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"HKDF",hash:"SHA-256",salt:ei(t),info:ea(`eleeveon-support-v1|${a}`)},i,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function em(e,r,t,a,n,i){let o=await ep(e,r),s=[...new Map(i.map(e=>[e.id,e])).values()];if(!s.some(e=>e.id===o.id))throw Error("Your device is missing from the recipient key directory. Reload encryption keys.");if(!s.some(e=>e.userId!==r))throw Error("No other participant has enrolled an encryption key yet. Ask Eleeveon support to enable encrypted chat.");let l=en(32),c=await crypto.subtle.importKey("raw",ei(l),"AES-GCM",!1,["encrypt"]),d=en(12),p=await crypto.subtle.encrypt({name:"AES-GCM",iv:ei(d),additionalData:ea(`${t}|${a}`),tagLength:128},c,ea(JSON.stringify(n))),u=[];for(let e of s){let r=await crypto.subtle.importKey("jwk",e.encryptionPublicJwk,{name:"ECDH",namedCurve:"P-256"},!1,[]),n=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveBits"]),i=en(32),o=en(12),s=await eh(n.privateKey,r,i,`${t}|${a}|${e.id}`),c=await crypto.subtle.encrypt({name:"AES-GCM",iv:ei(o),tagLength:128},s,ei(l));u.push({deviceId:e.id,publicKey:await crypto.subtle.exportKey("jwk",n.publicKey),salt:er(i),iv:er(o),ciphertext:er(c)})}let h={v:1,conversationId:t,messageId:a,fromDeviceId:o.id,iv:er(d),ciphertext:er(p),keys:u},m=await crypto.subtle.sign({name:"ECDSA",hash:"SHA-256"},o.signingKey.privateKey,ea(JSON.stringify(h)));return Y+er(ea(JSON.stringify({...h,signature:er(m)})))}function eg(e){return e.startsWith(Y)}function eb(e){let r;if(!eg(e))throw Error("This message is not end-to-end encrypted.");try{r=JSON.parse(X.decode(et(e.slice(Y.length))))}catch{throw Error("Invalid encrypted message format.")}if(1!==r.v||!Array.isArray(r.keys)||!r.signature||!r.fromDeviceId)throw Error("Unsupported or damaged encrypted message.");return r}async function ex(e,r,t,a,n,i,o){let s,l=await ep(e,r),c=eb(n);if(c.conversationId!==t||c.messageId!==a)throw Error("Encrypted message identity does not match.");let d=i.find(e=>e.id===c.fromDeviceId);if(!d)throw Error("The sender's device key is unknown or was removed. Verify the sender before viewing this message.");let p=await crypto.subtle.importKey("jwk",d.signingPublicJwk,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),{signature:u,...h}=c;if(!await crypto.subtle.verify({name:"ECDSA",hash:"SHA-256"},p,ei(et(u)),ea(JSON.stringify(h))))throw Error("Sender signature verification failed. The message may have been tampered with.");let m=c.keys.find(e=>e.deviceId===l.id);if(m){let e=await crypto.subtle.importKey("jwk",m.publicKey,{name:"ECDH",namedCurve:"P-256"},!1,[]),r=await eh(l.encryptionKey.privateKey,e,et(m.salt),`${t}|${a}|${l.id}`);s=await crypto.subtle.decrypt({name:"AES-GCM",iv:ei(et(m.iv)),tagLength:128},r,ei(et(m.ciphertext)))}else if(o)s=await eI(e,r,t,a,o,i);else throw Error("This historical message needs key transfer from your original device.");let g=await crypto.subtle.importKey("raw",s,"AES-GCM",!1,["decrypt"]),b=await crypto.subtle.decrypt({name:"AES-GCM",iv:ei(et(c.iv)),additionalData:ea(`${t}|${a}`),tagLength:128},g,ei(et(c.ciphertext)));return JSON.parse(X.decode(b))}async function ef(e,r,t){Z();let a=en(32),n=en(12),i=await crypto.subtle.importKey("raw",ei(a),"AES-GCM",!1,["encrypt"]),o=await crypto.subtle.encrypt({name:"AES-GCM",iv:ei(n),additionalData:ea(`${e}|${r}|attachment`)},i,await t.arrayBuffer()),s=t.type||"application/octet-stream",l=s.startsWith("image/")?"image":s.startsWith("video/")?"video":s.startsWith("audio/")?"audio":"document";return{file:new File([o],"encrypted.bin",{type:"application/octet-stream"}),manifest:{name:t.name,mimeType:s,kind:l,sizeBytes:t.size,key:er(a),iv:er(n)}}}async function ev(e,r,t,a){let n,i;try{n=await fetch(t,{cache:"no-store"})}catch{throw Error("Encrypted file download failed (network, expired URL or blocked cross-origin request). Retry the file link.")}if(!n.ok)throw Error(`Encrypted file download failed (HTTP ${n.status}). The file URL may be expired or missing.`);let o=await n.arrayBuffer();if(o.byteLength>0x6500000)throw Error("This encrypted file exceeds the 100 MB demonstration limit. Download a smaller video.");let s=await crypto.subtle.importKey("raw",ei(et(a.key)),"AES-GCM",!1,["decrypt"]);try{i=await crypto.subtle.decrypt({name:"AES-GCM",iv:ei(et(a.iv)),additionalData:ea(`${e}|${r}|attachment`)},s,o)}catch{throw Error("Encrypted file authentication failed. The downloaded bytes do not match the message's attachment key. Check the backend file reference.")}return URL.createObjectURL(new Blob([i],{type:"document"===a.kind?"application/octet-stream":a.mimeType}))}function ey(e,r){if("u"<typeof localStorage)return{};try{return JSON.parse(localStorage.getItem(`eleeveon-support-trust:${e}:${r}`)||"{}")}catch{return{}}}function ew(e,r,t){if("u"<typeof localStorage)throw Error("Cannot store trusted fingerprints on this device.");let a=ey(e,r);for(let e of t)a[e.id]=e.fingerprint;localStorage.setItem(`eleeveon-support-trust:${e}:${r}`,JSON.stringify(a))}let ek=(e,r,t)=>`eleeveon-hub-history-v1|${e}|${r}|${t}`;async function ej(e,r,t,a,n){let i=await crypto.subtle.deriveBits({name:"ECDH",public:r},e,256),o=await crypto.subtle.importKey("raw",i,"HKDF",!1,["deriveKey"]),s=await crypto.subtle.digest("SHA-256",ea(ek(t,a,n)));return crypto.subtle.deriveKey({name:"HKDF",hash:"SHA-256",salt:s,info:ea("eleeveon-hub-history-content-key-v1")},o,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function eS(e,r,t,a){let n=eb(e);if(n.conversationId!==r||n.messageId!==t)throw Error("Encrypted message identity mismatch.");let i=a.find(e=>e.id===n.fromDeviceId);if(!i)throw Error("The message signer is not available in the device directory.");let o=await crypto.subtle.importKey("jwk",i.signingPublicJwk,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),{signature:s,...l}=n;if(!await crypto.subtle.verify({name:"ECDSA",hash:"SHA-256"},o,ei(et(s)),ea(JSON.stringify(l))))throw Error("Original message signature is invalid.");return n}async function eN(e,r,t,a,n){let i=await ep(e,r),o=n.keys.find(e=>e.deviceId===i.id);if(!o)throw Error("This trusted device cannot decrypt the historical message key.");let s=await crypto.subtle.importKey("jwk",o.publicKey,{name:"ECDH",namedCurve:"P-256"},!1,[]),l=await eh(i.encryptionKey.privateKey,s,et(o.salt),`${t}|${a}|${i.id}`);return crypto.subtle.decrypt({name:"AES-GCM",iv:ei(et(o.iv)),tagLength:128},l,ei(et(o.ciphertext)))}async function eC(e,r,t){let a=await ep(e,r);return er(await crypto.subtle.sign({name:"ECDSA",hash:"SHA-256"},a.signingKey.privateKey,ea(t)))}async function eE(e,r,t,a,n,i,o,s){let l=await ep(e,r);if(l.id===s.id||s.userId!==r||s.accountId!==e)throw Error("The target is not another device for this signed-in user.");let c=eb(i).fromDeviceId,d=o.find(e=>e.id===c);if(!d||ey(e,r)[c]!==d.fingerprint)throw Error("The original sender fingerprint has not been verified.");let p=await eS(i,a,n,o),u=await eN(e,r,a,n,p),h=await crypto.subtle.importKey("jwk",s.encryptionPublicJwk,{name:"ECDH",namedCurve:"P-256"},!1,[]),m=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveBits"]),g=await ej(m.privateKey,h,a,n,s.id),b=en(12),x=await crypto.subtle.encrypt({name:"AES-GCM",iv:ei(b),additionalData:ea(ek(a,n,s.id)),tagLength:128},g,u),f={v:1,algorithm:"ECDH-P256-AES-GCM",ephemeralPublicJwk:await crypto.subtle.exportKey("jwk",m.publicKey),iv:er(b),ciphertext:er(x)},v=JSON.stringify({v:1,linkId:t,sourceDeviceId:l.id,targetDeviceId:s.id,conversationId:a,messageId:n,wrappedKey:f});return{conversationId:a,messageId:n,wrappedKey:f,signature:await eC(e,r,v)}}async function eI(e,r,t,a,n,i){let o=await ep(e,r),s=i.find(e=>e.id===n.sourceDeviceId);if(!s||ey(e,r)[s.id]!==s.fingerprint)throw Error("Verify your original device fingerprint in Hub Settings to unlock this message.");if(n.messageId!==a||1!==n.wrappedKey.v||"ECDH-P256-AES-GCM"!==n.wrappedKey.algorithm)throw Error("Invalid historical key record.");let l=JSON.stringify({v:1,linkId:n.linkId,sourceDeviceId:n.sourceDeviceId,targetDeviceId:o.id,conversationId:t,messageId:a,wrappedKey:n.wrappedKey}),c=await crypto.subtle.importKey("jwk",s.signingPublicJwk,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]);if(!await crypto.subtle.verify({name:"ECDSA",hash:"SHA-256"},c,ei(et(n.signature)),ea(l)))throw Error("Historical key signature verification failed.");let d=await crypto.subtle.importKey("jwk",n.wrappedKey.ephemeralPublicJwk,{name:"ECDH",namedCurve:"P-256"},!1,[]),p=await ej(o.encryptionKey.privateKey,d,t,a,o.id);return crypto.subtle.decrypt({name:"AES-GCM",iv:ei(et(n.wrappedKey.iv)),additionalData:ea(ek(t,a,o.id)),tagLength:128},p,ei(et(n.wrappedKey.ciphertext)))}var eA=t(45571);class ez extends eA.Ay{constructor(){super("Eleeveon_Hub_Encrypted_Cache_v1"),this.version(1).stores({inboxes:"&scope",threads:"&key, scope, conversationId, savedAt"})}}function eM(){return a??=new ez}function eR(e){return e.metadata?.e2ee===!0}function e$(e){return{...e,metadata:{e2ee:!0,..."string"==typeof e.metadata?.origin?{origin:e.metadata.origin}:{},...e.metadata?.pendingRecipientKeys===!0?{pendingRecipientKeys:!0}:{}},description:e.description?.startsWith("ELEEVEON_E2EE_V1:")?e.description:"",lastMessage:e.lastMessage&&e.lastMessage.body?.startsWith("ELEEVEON_E2EE_V1:")?e.lastMessage:null}}async function eT(e){try{return(await eM().inboxes.get(e))?.conversations??null}catch{return null}}async function eL(e,r){try{let t=eM(),a=r.filter(eR).slice(0,300).map(e$);await t.inboxes.put({scope:e,savedAt:Date.now(),conversations:a});let n=new Set(a.map(e=>e.id)),i=(await t.threads.where("scope").equals(e).toArray()).filter(e=>!n.has(e.conversationId));i.length&&await t.threads.bulkDelete(i.map(e=>e.key))}catch{}}async function eD(e,r){try{return await eM().threads.get(JSON.stringify([e,r]))??null}catch{return null}}async function eP(e,r,t,a){if(eR(r))try{let i=eM(),o=JSON.stringify([e,r.id]),s=await i.threads.get(o),l=[],c=0;for(let e=t.length-1;e>=0&&l.length<350;e--){var n;let r=(n=t[e]).deletedForEveryone||n.body?.startsWith("ELEEVEON_E2EE_V1:")?{...n,attachments:(n.attachments||[]).map(e=>({...e,url:null}))}:null;if(!r)continue;let a=2*r.body.length+512;if(l.length&&c+a>4194304)break;c+=a,l.push(r)}l.reverse();let d=e$(r),p=a??s?.devices??[];if(s&&s.messages.length===l.length&&s.conversation.updatedAt===d.updatedAt&&s.conversation.displayTitle===d.displayTitle&&s.conversation.status===d.status&&JSON.stringify(s.devices)===JSON.stringify(p)&&s.messages.every((e,r)=>e.id===l[r].id&&e.body===l[r].body&&e.deletedForEveryone===l[r].deletedForEveryone&&e.attachments?.length===l[r].attachments?.length))return;let u={key:o,scope:e,conversationId:r.id,savedAt:Date.now(),conversation:d,messages:l,devices:p};await i.threads.put(u);let h=await i.threads.where("scope").equals(e).sortBy("savedAt");h.length>25&&await i.threads.bulkDelete(h.slice(0,h.length-25).map(e=>e.key))}catch{}}async function eO(e,r,t){let a=await eD(e,r);if(!a)return;let n=[...a.messages.filter(e=>e.id!==t.id),t];await eP(e,a.conversation,n,a.devices)}async function eU(e,r){try{let t=eM(),a=await t.inboxes.get(e);a&&await t.inboxes.put({...a,conversations:a.conversations.filter(e=>e.id!==r)}),await t.threads.delete(JSON.stringify([e,r]))}catch{}}let eB="\x1eELEEVEON_HUB_V1:";function eF(e){return eB+JSON.stringify(e)}let eH=[["support_request","Support"],["bug","Bug report"],["billing_question","Billing"],["feature_request","Feature request"],["suggestion","Suggestion"],["complaint","Complaint"],["general_feedback","General feedback"]],eK=["submitted","acknowledged","under_review","in_progress","planned","resolved","closed"];function e_(e,r){let t=new Map(e.map(e=>[e.id,e]));for(let e of r)t.set(e.id,e);let a=[...t.values()].sort((e,r)=>new Date(r.lastMessage?.createdAt||r.updatedAt).getTime()-new Date(e.lastMessage?.createdAt||e.updatedAt).getTime());return e.length===a.length&&e.every((e,r)=>e.id===a[r].id&&e.updatedAt===a[r].updatedAt&&e.unreadCount===a[r].unreadCount&&e.displayTitle===a[r].displayTitle)?e:a}function eW(e,r){let t=new Map(e.map(e=>[e.id,e]));for(let e of r){let r=t.get(e.id),a=r?.attachments?.some(e=>!!e.url),n=e.attachments?.some(e=>!!e.url);r&&r.body===e.body&&!e.deletedForEveryone&&a&&!n?t.set(e.id,{...e,attachments:r.attachments}):t.set(e.id,e)}let a=[...t.values()].sort((e,r)=>new Date(e.createdAt).getTime()-new Date(r.createdAt).getTime()||e.id.localeCompare(r.id));return e.length===a.length&&e.every((e,r)=>e.id===a[r].id&&e.body===a[r].body&&e.deletedForEveryone===a[r].deletedForEveryone&&JSON.stringify(e.attachments)===JSON.stringify(a[r].attachments))?e:a}function eV(e){return e.replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function eq(e){if(!e)return"";let r=new Date(e);return isNaN(r.getTime())?"":r.toLocaleDateString("en-GH",{day:"numeric",month:"short",year:"numeric"})}function eJ(e){return e>=1048576?`${(e/1048576).toFixed(1)} MB`:`${Math.ceil(e/1024)} KB`}function eY(e){return e?.metadata?.e2ee===!0}function eG({attachment:e,onRetry:r}){let[t,a]=(0,i.useState)(e.url),[o,s]=(0,i.useState)(!1),[l,c]=(0,i.useState)(e.unavailableReason||""),[d,p]=(0,i.useState)(!1),u=(0,i.useRef)(null),h=(0,i.useRef)(null),m=(0,i.useRef)(!0),g=(0,i.useRef)(!1),b=(0,i.useRef)(""),x=(0,i.useRef)(0),f=`${e.conversationId||""}:${e.messageId||""}:${e.manifest?.iv||""}:${e.manifest?.key||""}`,v=(0,i.useRef)(f),y=`${f}:${e.encryptedSourceUrl||"missing"}`;(0,i.useEffect)(()=>(m.current=!0,()=>{m.current=!1,x.current+=1,b.current="",g.current=!1,h.current&&(URL.revokeObjectURL(h.current),h.current=null)}),[]),(0,i.useEffect)(()=>{v.current!==f?(v.current=f,x.current+=1,g.current=!1,b.current="",h.current&&URL.revokeObjectURL(h.current),h.current=null,a(e.url||null),c(e.unavailableReason||"")):e.url&&(a(r=>r||e.url),c(""))},[f,e.url,e.unavailableReason]),(0,i.useEffect)(()=>{if(t||!e.encrypted)return;let r=u.current;if(!r||"u"<typeof IntersectionObserver)return void p(!0);let a=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&p(!0)},{rootMargin:"320px 0px"});return a.observe(r),()=>a.disconnect()},[t,e.encrypted]);let w=async(t=!1)=>{if(g.current)return;g.current=!0;let n=x.current;s(!0),c("");try{if(e.encryptedSourceUrl&&e.manifest&&e.conversationId&&e.messageId){let r=await ev(e.conversationId,e.messageId,e.encryptedSourceUrl,e.manifest);if(!m.current||n!==x.current)return void URL.revokeObjectURL(r);h.current&&h.current!==r&&URL.revokeObjectURL(h.current),h.current=r,a(r)}else{if(!r)throw Error("The encrypted file link is missing. Reopen the conversation and try again.");await r()}}catch(a){if(m.current&&n===x.current&&(c(a instanceof Error?a.message:"The encrypted attachment could not be prepared."),!t&&r&&e.encryptedSourceUrl&&navigator.onLine))try{await r()}catch{}}finally{n===x.current&&(g.current=!1,m.current&&s(!1))}};return((0,i.useEffect)(()=>{d&&!t&&e.encrypted&&b.current!==y&&(b.current=y,w())},[d,t,y,e.encrypted]),t||e.encrypted)?t?"image"===e.kind?(0,n.jsx)("a",{href:t,download:e.name,title:e.name,children:(0,n.jsx)("img",{className:"esc-media",src:t,alt:e.name})}):"video"===e.kind?(0,n.jsx)("video",{className:"esc-media",src:t,controls:!0,playsInline:!0,preload:"metadata","aria-label":e.name}):"audio"===e.kind?(0,n.jsxs)("div",{className:"esc-audio",children:[(0,n.jsx)("span",{className:"esc-audio-icon","aria-hidden":"true",children:"♫"}),(0,n.jsxs)("div",{className:"esc-audio-player",children:[(0,n.jsx)("strong",{children:"Voice message"}),(0,n.jsx)("audio",{controls:!0,preload:"metadata",src:t,"aria-label":`Voice message: ${e.name}`})]})]}):(0,n.jsxs)("a",{className:"esc-attachment",href:t,download:e.name,children:["\uD83D\uDCCE ",(0,n.jsxs)("span",{children:[e.name,(0,n.jsx)("small",{children:eJ(e.sizeBytes)})]})," ↓"]}):(0,n.jsxs)("div",{className:"esc-attachment",ref:u,role:"group","aria-label":`Encrypted attachment: ${e.name}`,children:[(0,n.jsxs)("span",{children:["\uD83D\uDD12 ",e.name,(0,n.jsxs)("small",{children:[eJ(e.sizeBytes)," \xb7 ",o?"opening securely…":"encrypted"]}),!!l&&(0,n.jsx)("small",{role:"alert",children:l})]}),o?(0,n.jsx)("span",{"aria-live":"polite",children:"Preparing…"}):l?(0,n.jsx)("button",{type:"button",onClick:()=>{b.current="",w(!0)},children:"Retry"}):(0,n.jsx)("span",{"aria-live":"polite",children:"Preparing automatically"})]}):(0,n.jsxs)("div",{className:"esc-unavailable",role:"status",children:["\uD83D\uDCCE ",e.name,": attachment link unavailable.",r&&(0,n.jsx)("button",{type:"button",disabled:o,onClick:()=>void w(!0),children:"Retry"}),l&&(0,n.jsx)("small",{role:"alert",children:l})]})}function eX({isDeveloper:e,accountId:r,userId:t,role:a,schoolId:o,branchId:s,membershipId:l,schoolName:c,navigation:d,mobileNavigation:p,onOpenHubSettings:u}){let h=t||"",m=JSON.stringify([r,h,e?"platform_developer":a||"school",o||"",s||""]),g=(0,i.useRef)(m);g.current=m;let[b,x]=(0,i.useState)(!1),[f,v]=(0,i.useState)(""),[y,w]=(0,i.useState)([]),[k,j]=(0,i.useState)(0),[S,N]=(0,i.useState)(0),[C,E]=(0,i.useState)([]),[I,A]=(0,i.useState)(null),[z,M]=(0,i.useState)(!1),[R,$]=(0,i.useState)(!1),T=(0,i.useRef)(!1),[L,D]=(0,i.useState)(""),[P,O]=(0,i.useState)(null),[U,B]=(0,i.useState)([]),[F,H]=(0,i.useState)({}),[K,V]=(0,i.useState)(null),[q,Y]=(0,i.useState)(!1),[G,X]=(0,i.useState)(!1),Q=(0,i.useRef)(null),Z=(0,i.useRef)(!1),ee=(0,i.useCallback)((e,r)=>{(e.length||r)&&H(t=>{let a={...t},n=!1;for(let t of[...e,...r?[r]:[]])a[t.messageId]&&a[t.messageId].signature===t.signature||(a[t.messageId]=t,n=!0);return n?a:t})},[]),[er,et]=(0,i.useState)([]),[ea,en]=(0,i.useState)({}),[ei,eo]=(0,i.useState)(!1),[es,el]=(0,i.useState)(!1),[ec,ed]=(0,i.useState)({accounts:[],users:[],memberships:[]}),[eh,ek]=(0,i.useState)(""),[ej,eS]=(0,i.useState)("account"),[eN,eC]=(0,i.useState)(""),[eE,eI]=(0,i.useState)(""),[eA,ez]=(0,i.useState)(""),[eM,eR]=(0,i.useState)(""),[e$,eQ]=(0,i.useState)(""),[eZ,e0]=(0,i.useState)("support_request"),[e1,e2]=(0,i.useState)(""),[e5,e4]=(0,i.useState)(""),[e3,e8]=(0,i.useState)("all"),[e7,e6]=(0,i.useState)(""),[e9,re]=(0,i.useState)(""),[rr,rt]=(0,i.useState)(null),[ra,rn]=(0,i.useState)(null),ri=(0,i.useRef)(""),[ro,rs]=(0,i.useState)(""),[rl,rc]=(0,i.useState)(()=>Array.from({length:22},()=>5)),rd=(0,i.useRef)(null),rp=(0,i.useRef)(null),ru=(0,i.useRef)(0),[rh,rm]=(0,i.useState)([]),[rg,rb]=(0,i.useState)(!1),[rx,rf]=(0,i.useState)(!1),[rv,ry]=(0,i.useState)(""),rw=(0,i.useRef)(0),rk=(0,i.useRef)(""),[rj,rS]=(0,i.useState)(!1),[rN,rC]=(0,i.useState)(!1),[rE,rI]=(0,i.useState)(!1),[rA,rz]=(0,i.useState)("Not in chat"),rM=(0,i.useRef)(0),rR=(0,i.useRef)(null),r$=(0,i.useRef)(null),rT=(0,i.useRef)(null),rL=(0,i.useRef)(null),[rD,rP]=(0,i.useState)(null),[rO,rU]=(0,i.useState)(null),rB=(0,i.useRef)(null),rF=(0,i.useRef)(null),rH=(0,i.useRef)(null),[rK,r_]=(0,i.useState)(!1),[rW,rV]=(0,i.useState)(!1),[rq,rJ]=(0,i.useState)(!0),[rY,rG]=(0,i.useState)(null),rX=(0,i.useRef)(null),rQ=(0,i.useRef)(null),rZ=(0,i.useRef)(null),r0=(0,i.useRef)(null),r1=(0,i.useRef)(null),r2=(0,i.useRef)(!1),[r5,r4]=(0,i.useState)(""),[r3,r8]=(0,i.useState)(!1),[,r7]=(0,i.useState)(""),[r6,r9]=(0,i.useState)(!0),[te,tr]=(0,i.useState)(""),[tt,ta]=(0,i.useState)(""),[tn,ti]=(0,i.useState)(""),[to,ts]=(0,i.useState)(""),[tl,tc]=(0,i.useState)(!1);async function td(){let e=to.trim();if(tn&&e&&!tl){tc(!0);try{let r=await W.k.renameConversation(tn,e);E(e=>e.map(e=>e.id===tn?{...e,displayTitle:r.displayTitle}:e)),eL(m,C.map(e=>e.id===tn?{...e,displayTitle:r.displayTitle}:e)),P?.id===tn&&O(e=>e?{...e,displayTitle:r.displayTitle}:e),ti(""),ta("")}catch(e){r4(e instanceof Error?e.message:"Could not rename conversation.")}finally{tc(!1)}}}async function tp(e){if(!tl&&window.confirm("Remove this conversation from your inbox on all your devices? Other participants will keep their copies.")){tc(!0);try{await W.k.removeConversation(e),E(r=>r.filter(r=>r.id!==e)),eU(m,e),tm.current===e&&(tm.current="",D(""),O(null),B([]),et([]),eo(!1)),ta(""),window.dispatchEvent(new Event("eleeveon:support-unread-refresh"))}catch(e){r4(e instanceof Error?e.message:"Could not remove conversation.")}finally{tc(!1)}}}async function tu(e,r){if(L&&!te&&window.confirm("everyone"===r?"Delete this message for everyone? Its encrypted content will be removed from the service.":"Delete this message for you on every signed-in device?")){tr(e);try{await W.k.deleteMessage(L,e,r);let t=await W.k.open(L);O(t.conversation),B(t.messages||[]),eP(m,t.conversation,t.messages||[]),"everyone"===r&&tk.current.clear(),window.dispatchEvent(new Event("eleeveon:support-unread-refresh"))}catch(e){r4(e instanceof Error?e.message:"Could not delete message.")}finally{tr("")}}}let th=(0,i.useCallback)(async e=>{if("u"<typeof document||!document.hidden)try{await W.k.markRead(e),window.dispatchEvent(new Event("eleeveon:support-unread-refresh"))}catch{}},[]),tm=(0,i.useRef)(""),tg=(0,i.useRef)(!1),tb=(0,i.useRef)(0),tx=(0,i.useRef)(null),tf=(0,i.useRef)(null),tv=(0,i.useRef)(null),ty=(0,i.useRef)(null),tw=(0,i.useRef)(new Map),tk=(0,i.useRef)(new Map),tj=async(e,r)=>{if(!navigator.onLine)throw Error("Connect to the internet to fetch this attachment.");let[t,a]=await Promise.allSettled([W.k.open(e),W.k.messagePage(e,void 0,100,f||void 0)]);if("rejected"===t.status&&"rejected"===a.status)throw Error("Could not refresh the attachment record. Try again when connected.");let n=new Map;for(let e of[..."fulfilled"===t.status?t.value.messages:[],..."fulfilled"===a.status?a.value.messages:[]]){let r=n.get(e.id),t=e=>!!e.attachments?.some(e=>!!e.url);(!r?.deletedForEveryone||e.deletedForEveryone)&&(!(r&&r.body===e.body&&t(r))||t(e)||e.deletedForEveryone)&&n.set(e.id,e)}let i=[...n.values()],o=n.get(r);for(let t of(tm.current===e&&i.length&&B(e=>eW(e,i)),tk.current.keys()))t.startsWith(`${e}:${r}:`)&&tk.current.delete(t);if(N(e=>e+1),!o?.attachments?.some(e=>!!e.url))throw Error("The message was saved, but its encrypted file link is not available from the server yet. The backend upload/storage record may need repair.")},tS=(0,i.useRef)(new Set),[,tN]=(0,i.useState)(0),tC=y.filter(e=>!e.revoked).filter(e=>e.id!==f&&ey(r,h)[e.id]!==e.fingerprint);(0,i.useEffect)(()=>{rw.current+=1,rk.current="",ry(""),tb.current=0,tm.current="",D(""),O(null),B([]),et([]),H({}),V(null),Y(!1),Z.current=!1,E([]),A(null),M(!1),T.current=!1,rt(null),rn(null),rs(""),w([]),v(""),x(!1),en({}),tk.current.clear(),tw.current.clear(),tS.current.forEach(e=>URL.revokeObjectURL(e)),tS.current.clear()},[m]),(0,i.useEffect)(()=>{if(!h||!r)return;let e=!1;return eT(m).then(r=>{!e&&g.current===m&&r&&E(r)}),()=>{e=!0}},[m,r,h]),(0,i.useEffect)(()=>{r9("u">typeof navigator&&navigator.onLine)},[]),(0,i.useEffect)(()=>{if(!e)return;let r=!0;return W.k.directory(eh||void 0).then(e=>{r&&ed(e)}).catch(e=>{r&&r4(e instanceof Error?e.message:"Cannot load recipients")}),()=>{r=!1}},[e,eh]);let tE=(0,i.useCallback)(async e=>{let r=(await W.k.keys(e)).devices||[];return w(e=>e.length===r.length&&e.every((e,t)=>e.id===r[t].id&&e.fingerprint===r[t].fingerprint&&!!e.revoked==!!r[t].revoked)?e:r),r},[]),tI=(0,i.useCallback)(async()=>{if(h&&r)try{let e=await ep(r,h),t=await eu(r,h);if(ew(r,h,[{id:t.id,accountId:r,userId:h,encryptionPublicJwk:t.encryptionPublicJwk,signingPublicJwk:t.signingPublicJwk,fingerprint:t.fingerprint}]),v(e.id),x(!0),navigator.onLine)try{await W.k.registerKey({id:e.id,encryptionPublicJwk:t.encryptionPublicJwk,signingPublicJwk:t.signingPublicJwk}),await tE(tm.current||void 0)}catch(e){r4(e instanceof Error?e.message:"Could not update encryption device registration.")}}catch(e){x(!1),r4(e instanceof Error?e.message:"Could not initialize encryption keys.")}},[r,h,tE]);(0,i.useEffect)(()=>{tI()},[tI]);let tA=(0,i.useCallback)(async(e=!1)=>{if(!tg.current&&navigator.onLine){tg.current=!0,e||rf(!0);try{let r=tm.current,[t,a]=await Promise.all([W.k.list(),r?Promise.allSettled([W.k.open(r),W.k.messagePage(r,void 0,100,f||void 0)]).then(([e,r])=>"fulfilled"===e.status?{detail:e.value,page:"fulfilled"===r.status?r.value:null}:{error:e.reason}):Promise.resolve(null)]);if(g.current!==m)return;let n=t.conversations||[];T.current||(A(n.length?n[n.length-1].id:null),M(!!n.length)),E(e=>e_(e,n)),eL(m,n);let i=a&&"detail"in a?a.detail:void 0;if(r&&r===tm.current&&!rk.current&&i){let e;O(e=>e?.id===i.conversation.id&&e.updatedAt===i.conversation.updatedAt&&e.status===i.conversation.status&&e.displayTitle===i.conversation.displayTitle?e:i.conversation);let t=a&&"page"in a?a.page:null;t&&(ee(t.historyKeys||[],t.openingHistoryKey),Z.current||(Y(t.hasMore),V(t.nextCursor)));let n=t?eW(i.messages||[],t.messages||[]):i.messages||[];if(B(e=>eW(e,n)),Date.now()-tb.current>6e4)try{e=await tE(r),tb.current=Date.now()}catch{}eP(m,i.conversation,n,e),document.hidden||th(r)}e||r4("")}catch(r){e||g.current!==m||r4(r instanceof Error?r.message:"Cannot refresh support. Showing saved conversations if available.")}finally{tg.current=!1,e||rf(!1)}}},[m,tE,th,f,ee]);(0,i.useEffect)(()=>{b&&tA()},[b,tA]),(0,i.useEffect)(()=>{let e=()=>{j(e=>e+1),tE(tm.current||void 0).catch(()=>void 0)};return window.addEventListener("eleeveon:hub:keys-reviewed",e),()=>window.removeEventListener("eleeveon:hub:keys-reviewed",e)},[tE]),(0,i.useEffect)(()=>{let e=window.setInterval(()=>{document.hidden||!navigator.onLine||rg||tA(!0)},9e3),r=()=>{navigator.onLine&&b&&tA(!0)},t=()=>{r9(!0),tA(!0)},a=()=>r9(!1);return window.addEventListener("focus",r),window.addEventListener("online",t),window.addEventListener("offline",a),()=>{clearInterval(e),window.removeEventListener("focus",r),window.removeEventListener("online",t),window.removeEventListener("offline",a)}},[tA,b,rg]),(0,i.useEffect)(()=>()=>{r2.current=!0,rX.current?.state==="recording"&&rX.current.stop(),rQ.current?.getTracks().forEach(e=>e.stop()),rZ.current?.getTracks().forEach(e=>e.stop()),r0.current?.getTracks().forEach(e=>e.stop()),r1.current?.close(),tv.current?.state==="recording"&&tv.current.stop(),ty.current?.getTracks().forEach(e=>e.stop()),cancelAnimationFrame(ru.current),rp.current?.close(),tS.current.forEach(e=>URL.revokeObjectURL(e))},[]),(0,i.useEffect)(()=>{let e=tf.current;if(e){if(Q.current){let r=Q.current;Q.current=null,e.scrollTop=Math.max(0,e.scrollHeight-r.height+r.top);return}(e.scrollHeight-e.scrollTop-e.clientHeight<250||L!==tm.current)&&(e.scrollTop=e.scrollHeight)}},[er.length,L]),(0,i.useEffect)(()=>{if(!ro)return;let e=e=>{"Escape"===e.key&&rs("")};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[ro]),(0,i.useEffect)(()=>{if(!L||!P)return void rz("Not in chat");let e=!0,r=async()=>{if(document.hidden||!navigator.onLine)return;let r=rK?"recording":Date.now()-rM.current<3e3?"typing":"online";try{await W.k.heartbeat(L,r);let t=await W.k.presence(L);if(e){let e=t.people.map(e=>e.activity);rz(e.includes("recording")?"Recording audio…":e.includes("typing")?"Typing…":t.online?"Online in chat":"Not in chat")}}catch{e&&rz("Unavailable")}};r();let t=window.setInterval(()=>void r(),3500);return()=>{e=!1,clearInterval(t)}},[L,P?.id,rK]),(0,i.useEffect)(()=>{if(!rj)return;let e=e=>{let r=e.target;rR.current?.contains(r)||r$.current?.contains(r)||rS(!1)},r=e=>{"Escape"===e.key&&rS(!1)},t=e=>{"scroll"===e.type&&r$.current?.contains(e.target)||rS(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",r),window.addEventListener("resize",t),window.addEventListener("scroll",t,!0),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",r),window.removeEventListener("resize",t),window.removeEventListener("scroll",t,!0)}},[rj]),(0,i.useEffect)(()=>{let e=()=>{if(!window.matchMedia("(max-width: 680px)").matches)return void rU(null);let e=rT.current?.getBoundingClientRect();if(!e)return;let r=window.visualViewport,t=(r?.offsetTop||0)+(r?.height||window.innerHeight);rU(Math.max(290,Math.min(rT.current?.parentElement?.clientHeight||900,Math.floor(t-e.top-10))))};return e(),window.visualViewport?.addEventListener("resize",e),window.visualViewport?.addEventListener("scroll",e),window.addEventListener("resize",e),()=>{window.visualViewport?.removeEventListener("resize",e),window.visualViewport?.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[ei,es]),(0,i.useEffect)(()=>{let e=rL.current;e&&(e.style.height="44px",e.style.height=`${Math.min(116,Math.max(44,e.scrollHeight))}px`)},[e7]),(0,i.useEffect)(()=>{if(!P||!h||!b)return void et([]);let e=!1,t=P.id,a={id:`${t}-opening`,feedbackId:t,authorType:"school",body:P.description,createdAt:P.createdAt,authorUserId:P.submittedByUserId||null,internal:!1,attachments:[]},n=[...P.description?[a]:[],...U],i=async a=>{if(a.deletedForEveryone)return{...a,displayBody:"Message deleted",displayAttachments:[],decrypted:!0};if(eg(a.body))try{let e=eb(a.body).fromDeviceId,t=y.find(r=>r.id===e);if(!t||a.authorUserId&&a.authorUserId!==t.userId||ey(r,h)[e]!==t.fingerprint)return{...a,displayBody:"\uD83D\uDD12 Verify this sender's device key to read the message.",displayAttachments:[],decrypted:!1,error:"Device fingerprint not trusted on this browser."}}catch{return{...a,displayBody:"\uD83D\uDD12 Invalid encrypted message.",displayAttachments:[],decrypted:!1}}let n=`${t}:${a.id}:${a.body}:${JSON.stringify(a.attachments||[])}`,i=tk.current.get(n);if(i)return i;if(!eg(a.body))return{...a,displayBody:a.body,displayAttachments:a.attachments||[],decrypted:!1};try{let i=eb(a.body).fromDeviceId,o=y.find(e=>e.id===i),s=ey(r,h)[i];if(!o||a.authorUserId&&o.userId!==a.authorUserId||!s||s!==o.fingerprint)throw Error("Verify this sender's device fingerprint before reading the message.");let l=await ex(r,h,t,a.id,a.body,y,F[a.id]),c=[];if(l.attachment){let e=a.attachments?.[0],r=e?.url||null,n=null,i=r?"":"The encrypted message was saved, but the server has not supplied a file link.",o="video"===l.attachment.kind||l.attachment.sizeBytes>8388608;if(r&&!o)try{n=await ev(t,a.id,r,l.attachment),tS.current.add(n)}catch(e){i=e instanceof Error?e.message:"Encrypted attachment could not be opened."}c.push({name:l.attachment.name,mimeType:l.attachment.mimeType,sizeBytes:l.attachment.sizeBytes,kind:l.attachment.kind,url:n,encrypted:!0,encryptedSourceUrl:r,manifest:l.attachment,conversationId:t,messageId:a.id,unavailableReason:i})}let d=function(e){if(!e.startsWith(eB))return null;try{let r=JSON.parse(e.slice(eB.length));if(!r||"object"!=typeof r||Array.isArray(r)||1!==r.v||"string"!=typeof r.body||r.body.length>1e5)return null;if("edit"===r.kind&&"string"==typeof r.targetId&&r.targetId.length<128)return{v:1,kind:"edit",body:r.body,targetId:r.targetId};if("message"===r.kind){let e={v:1,kind:"message",body:r.body},t=r.replyTo;return t&&"object"==typeof t&&!Array.isArray(t)&&"string"==typeof t.id&&t.id.length<128&&"string"==typeof t.preview&&"string"==typeof t.name&&(e.replyTo={id:t.id,preview:t.preview.slice(0,150),name:t.name.slice(0,70)}),e}}catch{}return null}(l.body),p={...a,displayBody:d?.body??l.body,displayAttachments:c,decrypted:!0,...d?.kind==="message"&&d.replyTo?{replyTo:d.replyTo}:{},...d?.kind==="edit"?{editTargetId:d.targetId,isEditEvent:!0}:{}};return tk.current.set(n,p),l.subject&&!e&&en(e=>e[t]===l.subject?e:{...e,[t]:l.subject}),p}catch(e){return{...a,displayBody:"\uD83D\uDD12 Unable to decrypt this message on this device.",displayAttachments:[],decrypted:!1,error:e instanceof Error?e.message:"The encryption keys are unavailable."}}};return et(e=>{let r=new Map(e.map(e=>[e.id,e])),t=n.map(e=>{let t=r.get(e.id);return t&&t.body===e.body&&t.deletedForEveryone===e.deletedForEveryone?JSON.stringify(t.attachments||[])===JSON.stringify(e.attachments||[])?t:{...t,...e,displayAttachments:t.displayAttachments}:{...e,displayBody:e.deletedForEveryone?"Message deleted":eg(e.body)?"\uD83D\uDD12 Decrypting saved message…":e.body,displayAttachments:[],decrypted:!!e.deletedForEveryone}});return e.length===t.length&&e.every((e,r)=>e===t[r])?e:t}),(async()=>{let r=n.map((e,r)=>r).reverse();for(let t=0;t<r.length&&!e;t+=18){let a=r.slice(t,t+18),o=await Promise.all(a.map(e=>i(n[e])));if(e)return;et(e=>{if(e.length!==n.length)return e;let r=[...e],t=!1;return a.forEach((e,a)=>{let n=o[a],i=r[e];(i?.id!==n.id||i?.body!==n.body||i?.displayBody!==n.displayBody||i?.decrypted!==n.decrypted||i?.displayAttachments?.length!==n.displayAttachments?.length||JSON.stringify(i?.displayAttachments)!==JSON.stringify(n.displayAttachments))&&(r[e]=n,t=!0)}),t?r:e})}})(),()=>{e=!0}},[P,U,y,r,h,b,k,F,S]);let tz=(0,i.useMemo)(()=>{let e=new Map(er.map(e=>[e.id,e])),r=new Map;for(let t of er){if(!t.isEditEvent||!t.decrypted||!t.editTargetId)continue;let a=e.get(t.editTargetId);if(!a||a.deletedForEveryone||!a.authorUserId||t.authorUserId!==a.authorUserId||new Date(t.createdAt).getTime()<new Date(a.createdAt).getTime())continue;let n=r.get(a.id);(!n||new Date(t.createdAt).getTime()>=new Date(n.editedAt).getTime())&&r.set(a.id,{body:t.displayBody,editedAt:t.createdAt})}return er.filter(e=>!e.isEditEvent).map(e=>{let t=r.get(e.id);return t?{...e,displayBody:t.body,edited:!0}:e})},[er]),tM=(0,i.useMemo)(()=>C.filter(e=>{if("open"===e3&&["resolved","closed"].includes(e.status)||"open"!==e3&&"all"!==e3&&e.status!==e3)return!1;let r=e5.toLowerCase().trim();return!r||`${ea[e.id]||""} ${e.subject} ${e.organizationName||""} ${e.type}`.toLowerCase().includes(r)}).sort((e,r)=>new Date(r.lastMessage?.createdAt||r.updatedAt)-new Date(e.lastMessage?.createdAt||e.updatedAt)),[C,e3,e5,ea]);async function tR(){if(!R&&z&&I&&navigator.onLine){$(!0),r4("");try{let e=await W.k.conversationPage(I,50);T.current=!0,E(r=>e_(r,e.conversations)),M(e.hasMore),A(e.nextCursor)}catch(e){r4(e instanceof Error?e.message:"Cannot load earlier conversations.")}finally{$(!1)}}}async function t$(e){if(!e||e===tm.current&&P&&!rv)return;let r=++rw.current;tm.current=e,D(e),O(null),B([]),H({}),V(null),Y(!1),Z.current=!1,et([]),el(!1),eo(!0),rk.current=e,ry(e),r4("");let t=!1;try{let a=await eD(m,e);if(r!==rw.current||g.current!==m)return;if(a&&(t=!0,tm.current=e,D(e),O(a.conversation),B(a.messages),w(a.devices),el(!1),eo(!0),e6(tw.current.get(e)||""),rm([]),rt(null),rn(null),rs(""),rS(!1),rC(!1)),!navigator.onLine){if(!t)throw Error("No saved conversation on this device. Reconnect to load it.");return}let[n,i,o]=await Promise.allSettled([W.k.open(e),W.k.keys(e),W.k.messagePage(e,void 0,100,f||void 0)]);if("rejected"===n.status)throw n.reason;if(r!==rw.current||g.current!==m)return;let s=n.value,l="fulfilled"===i.status?i.value.devices||[]:a?.devices||[],c="fulfilled"===o.status?o.value:null;tb.current=Date.now(),w(l),tm.current=e,D(e),O(s.conversation),c&&(ee(c.historyKeys||[],c.openingHistoryKey),Y(c.hasMore),V(c.nextCursor));let d=c?.messages||s.messages||[];if(B(d),el(!1),eo(!0),e6(tw.current.get(e)||""),rm([]),rt(null),rn(null),rs(""),rS(!1),rC(!1),eP(m,s.conversation,d,l),th(e),"rejected"===o.status){let e=o.reason;r4("Showing conversation messages. Older history is temporarily unavailable: "+(e instanceof Error?e.message:"history request failed"))}}catch(e){r===rw.current&&r4(t?"Showing saved conversation. "+(e instanceof Error?e.message:"Online refresh failed."):e instanceof Error?e.message:"Could not open this conversation.")}finally{r===rw.current&&(rk.current="",ry(""))}}async function tT(){let e=tm.current;if(!e||!q||!K||G||!navigator.onLine)return;X(!0),r4("");let r=tf.current;r&&(Q.current={top:r.scrollTop,height:r.scrollHeight});try{let r=await W.k.messagePage(e,K,100,f||void 0);if(e!==tm.current)return;Z.current=!0,ee(r.historyKeys||[],r.openingHistoryKey),B(e=>eW(e,r.messages)),Y(r.hasMore),V(r.nextCursor)}catch(e){r4(e instanceof Error?e.message:"Could not load older messages."),Q.current=null}finally{X(!1)}}async function tL(){if(e&&eh&&!rg){rb(!0),r4("");try{let e=await W.k.invite({accountId:eh,scope:ej,..."user"===ej?{userId:eN}:{},..."role"===ej?{role:eE,schoolId:eA||void 0,branchId:eM||void 0}:{}});el(!1),E(r=>[e.conversation,...r.filter(r=>r.id!==e.conversation.id)]),eL(m,[e.conversation,...C.filter(r=>r.id!==e.conversation.id)]),await t$(e.conversation.id),tA(!0),r7("")}catch(e){r4(e instanceof Error?e.message:"Could not create conversation")}finally{rb(!1)}}}async function tD(e){if(!b)throw Error("Encryption keys have not finished initializing.");let t=await tE(e),a=(await W.k.devices()).devices.find(e=>e.id===f);if(!a||"linked"!==a.status)throw r8(!0),Error(a?.status==="pending"?"This browser is awaiting trusted-device approval. Your message has not been sent.":"This browser is not linked. Approve it from an existing trusted device before sending.");let n=t.filter(e=>!e.revoked);if(!n.some(e=>e.id===f))throw Error("Your linked device is missing from this conversation's encryption directory. Refresh the conversation.");if(!n.filter(e=>e.accountId!==r).length)throw r8(!0),Error("The other participant has no linked encryption device yet. They need to open Eleeveon Hub and register their device.");let i=ey(r,h),o=n.filter(e=>e.id===f||i[e.id]===e.fingerprint);if(!o.some(e=>e.accountId!==r))throw r8(!0),Error("No encryption device belonging to the other participant has been verified on this browser. Review and verify a recipient fingerprint before sending.");let s=n.length-o.length;return re(s?`${s} unverified device${1===s?" is":"s are"} excluded from this encrypted message. Those devices will need secure history-key sharing to read it later.`:""),o}async function tP(){if(!e$.trim()&&!e1.trim()||rg||!r6||!b)return;rb(!0),r4(""),r8(!1),re("");let e=e$.trim(),t=e1.trim(),a=crypto.randomUUID();try{let{conversation:n}=await W.k.create({conversationId:a,encrypted:!0,pending:!0,subject:"Secure support conversation",body:"",type:eZ,schoolId:o||void 0,branchId:s||void 0,membershipId:l||void 0,name:c||void 0});E(e=>[n,...e.filter(e=>e.id!==n.id)]),eL(m,[n,...C.filter(e=>e.id!==n.id)]);let i=!t&&!e,d="";if(!i)try{let a=await tD(n.id),o=crypto.randomUUID(),s=await em(r,h,n.id,o,{subject:e||void 0,body:t},a);await W.k.send(n.id,s,void 0,o,!0),i=!0}catch(e){d=e instanceof Error?e.message:"The recipient is not ready for encrypted messages."}if(await tA(!0),await t$(n.id),i)tw.current.delete(n.id),e6(""),r4("");else{let r=t||(e?`Subject: ${e}`:"");tw.current.set(n.id,r),e6(r),r4(`Conversation saved. Initial message not sent: ${d}`)}e&&en(r=>({...r,[n.id]:e})),el(!1),eQ(""),e2(""),r7("Saved")}catch(e){r4(e instanceof Error?e.message:"Could not create conversation. Nothing was saved.")}finally{rb(!1)}}function tO(e){let r=Array.from(e),t=r.find(e=>e.size>0x63fff9c);t?r4(`${t.name} is too large. Maximum 100 MB including encryption overhead. Larger demonstrations should be compressed before sending.`):ra?r4("Finish or cancel editing before attaching files."):(rm(e=>[...e,...r].slice(0,6)),r4(""))}async function tU(){if(!L||!e7.trim()&&!rh.length||rg||!r6)return;if(ra&&(!e7.trim()||rh.length))return void r4("Edited messages must contain text only. Send attachments separately.");rb(!0),r4(""),r8(!1),re("");let e=e7.trim(),t=[...rh],a=0;try{let n=await tD(L);for(let i of t.length?t:[null]){let t,o,s,l=crypto.randomUUID();if(i){let e=await ef(L,l,i);t=e.file,s=e.manifest}let c=0===a?ra?eF({v:1,kind:"edit",body:e,targetId:ra.id}):rr?eF({v:1,kind:"message",body:e,replyTo:rr}):e:"",d=await em(r,h,L,l,{body:c,...s?{attachment:s}:{}},n);if(t&&t.size>0xa00000){let e=await W.k.beginDirectUpload(L,l,t.size),r=await fetch(e.signedUrl,{method:"PUT",headers:{"Content-Type":"application/octet-stream"},body:t});if(!r.ok)throw Error(`Encrypted video upload failed (${r.status}). Retry the file.`);o=e.uploadId,t=void 0}let p=await W.k.send(L,d,t,l,!0,o);tm.current===L&&B(e=>e.some(e=>e.id===p.message.id)?e:[...e,p.message]),eO(m,L,p.message),a+=1}rm([]),ra?(e6(ri.current),ri.current?tw.current.set(L,ri.current):tw.current.delete(L)):(tw.current.delete(L),e6("")),rn(null),rt(null),r7("Saved"),await tA()}catch(e){a>0?(rm(t.slice(a)),e6(""),r4(`${a} attachment(s) sent. Remaining items were not sent. ${e instanceof Error?e.message:"Retry the remainder."}`)):r4(e instanceof Error?e.message:"Encrypted message not sent. Try again.")}finally{rb(!1)}}function tB(){rX.current?.state==="recording"?rX.current.stop():rQ.current?.getTracks().forEach(e=>e.stop())}async function tF(){if(!L||rg||rK||rW||rY)return;r4("");let e=navigator.mediaDevices;if(!e?.getDisplayMedia||"u"<typeof MediaRecorder)return void r4("Screen recording isn't supported in this browser. On a computer, use an up-to-date Chrome or Edge browser, or attach a recording made with your device.");let r=null,t=null,a=null;try{rQ.current=r=await e.getDisplayMedia({video:{frameRate:15},audio:!0});let n=r.getVideoTracks()[0];if(!n)throw Error("No screen was selected.");if(rq)try{t=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0}})}catch{r4("Microphone was unavailable. Recording will continue with any screen audio shared by the browser.")}rZ.current=t;let i=new MediaStream([n]),o=[...r.getAudioTracks(),...t?.getAudioTracks()||[]];if(1===o.length)i.addTrack(o[0]);else if(o.length>1){r1.current=a=new AudioContext;let e=a.createMediaStreamDestination();for(let r of o)a.createMediaStreamSource(new MediaStream([r])).connect(e);e.stream.getAudioTracks().forEach(e=>i.addTrack(e))}r0.current=i;let s=["video/webm;codecs=vp8,opus","video/webm","video/mp4"].find(e=>MediaRecorder.isTypeSupported(e));if(!s)throw Error("This browser cannot encode screen recordings. Please use Chrome or Edge on a computer.");let l=[],c=new MediaRecorder(i,{mimeType:s,videoBitsPerSecond:12e5});rX.current=c,r2.current=!1,c.ondataavailable=e=>{e.data.size&&l.push(e.data)},c.onerror=()=>{r4("Screen recording failed. Please try again.")},c.onstop=()=>{if(rQ.current?.getTracks().forEach(e=>e.stop()),rZ.current?.getTracks().forEach(e=>e.stop()),r0.current?.getTracks().forEach(e=>e.stop()),r1.current?.close(),rQ.current=null,rZ.current=null,r0.current=null,r1.current=null,rX.current=null,rV(!1),r2.current||!l.length)return;let e=c.mimeType.split(";")[0]||"video/webm",r=new Blob(l,{type:e});if(!r.size)return;if(r.size>0x63fff9c)return void r4(`Recording is ${eJ(r.size)}. The current encrypted attachment limit is 100 MB. Please make a shorter recording.`);let t="video/mp4"===e?"mp4":"webm",a=new File([r],`screen-recording-${Date.now()}.${t}`,{type:e,lastModified:Date.now()});rG({file:a,url:URL.createObjectURL(r)})},n.addEventListener("ended",tB,{once:!0}),c.start(1e3),rV(!0)}catch(e){r?.getTracks().forEach(e=>e.stop()),t?.getTracks().forEach(e=>e.stop()),a?.close(),rQ.current=null,rZ.current=null,r0.current=null,r1.current=null,rV(!1),e?.name!=="NotAllowedError"&&r4(e instanceof Error?e.message:"Unable to start screen recording.")}}function tH(e){rY&&(e&&tO([rY.file]),URL.revokeObjectURL(rY.url),rG(null))}function tK(){cancelAnimationFrame(ru.current),ru.current=0,rd.current=null;let e=rp.current;rp.current=null,e&&e.close().catch(()=>void 0),rc(Array.from({length:22},()=>5))}async function t_(){try{if(!navigator.mediaDevices?.getUserMedia||"u"<typeof MediaRecorder)throw Error("Voice recording isn't supported in this browser.");let e=await navigator.mediaDevices.getUserMedia({audio:!0});ty.current=e,function(e){if("u">typeof AudioContext)try{let r=new AudioContext,t=r.createMediaStreamSource(e),a=r.createAnalyser();a.fftSize=256,a.smoothingTimeConstant=.75,t.connect(a),rp.current=r,rd.current=a;let n=new Uint8Array(a.frequencyBinCount),i=0,o=e=>{if(rd.current){if(e-i>85){a.getByteFrequencyData(n);let r=Array.from({length:22},(e,r)=>{let t=Math.floor(r/22*55),a=0;for(let e=t;e<t+4;e++)a+=n[e]||0;return Math.max(4,Math.min(34,a/4/255*40))});rc(r),i=e}ru.current=requestAnimationFrame(o)}};ru.current=requestAnimationFrame(o)}catch{}}(e);let r=["audio/webm;codecs=opus","audio/mp4","audio/webm","audio/ogg"].find(e=>MediaRecorder.isTypeSupported(e)),t=new MediaRecorder(e,r?{mimeType:r}:void 0),a=[];t.ondataavailable=e=>{e.data.size&&a.push(e.data)},t.onstop=()=>{let r=t.mimeType.split(";")[0]||"audio/webm",n=r.includes("mp4")?"m4a":r.includes("ogg")?"ogg":"webm",i=new File(a,`voice-${Date.now()}.${n}`,{type:r});i.size&&tO([i]),e.getTracks().forEach(e=>e.stop()),ty.current=null,r_(!1),tK()},t.start(),tv.current=t,r_(!0)}catch(e){ty.current?.getTracks().forEach(e=>e.stop()),tK(),r4(e instanceof Error?e.message:"Microphone access denied.")}}async function tW(r){if(L&&e){rb(!0);try{await W.k.status(L,r),await tA()}catch(e){r4(e instanceof Error?e.message:"Status update failed.")}finally{rb(!1)}}}let tV=P?.displayTitle||P&&ea[P.id]||P?.subject||"Eleeveon Support";return(0,n.jsxs)("section",{className:"esc","aria-label":"Eleeveon encrypted support",children:[(0,n.jsx)("style",{children:`
      .esc {--esc-primary:var(--dashboard-primary,var(--ba-primary,#137d79));--esc-line:var(--border,rgba(110,131,145,.22));--esc-surface:var(--surface,var(--card-bg,#fff));--esc-text:var(--text,#1f3040);--esc-mute:color-mix(in srgb,var(--esc-surface) 89%,var(--esc-primary));color:var(--esc-text);font-size:13px;min-height:0;height:100%;isolation:isolate}
      .esc * {box-sizing:border-box}.esc button,.esc input,.esc textarea,.esc select{font:inherit;color:inherit}.esc button{cursor:pointer;transition:background .15s ease,border-color .15s ease,transform .15s ease}.esc button:focus-visible,.esc textarea:focus-visible,.esc input:focus-visible,.esc select:focus-visible{outline:2px solid var(--esc-primary);outline-offset:2px}.esc button:disabled{opacity:.5;cursor:not-allowed}
      .esc-layout{display:grid;grid-template-columns:minmax(220px,29%) minmax(0,1fr);height:100%;min-height:0;min-width:0;border:1px solid var(--esc-line);border-radius:19px;overflow:hidden;background:var(--esc-surface);box-shadow:0 12px 36px rgba(15,50,60,.075)}
      .esc-side{min-width:0;min-height:0;display:flex;flex-direction:column;border-right:1px solid var(--esc-line);background:var(--esc-surface)}
      .esc-side-title{display:flex;align-items:center;justify-content:space-between;padding:13px 13px 11px;gap:9px;min-width:0}.esc-side-title.has-center-tabs{display:block;min-height:49px;padding:7px 9px 5px}.esc-side-title strong{font-size:13px;letter-spacing:-.2px}.esc-actions{display:flex;align-items:center;gap:5px;flex:0 0 auto}.esc-actions button.primary{min-height:37px;padding:9px 8px;font-size:11px}.esc-search-row{display:flex;align-items:center;gap:5px;padding:0 8px 7px;min-width:0}.esc-search-row .esc-search{min-width:0;flex:1;width:auto;margin:0;padding:10px 9px;height:38px}.esc-mobile-nav-in-chat{display:none}
      .esc button.primary,.esc button.secondary,.esc button.icon{border-radius:12px;padding:9px 10px;border:1px solid var(--esc-line);background:var(--esc-surface);display:inline-flex;align-items:center;justify-content:center;gap:5px;line-height:1.1;white-space:nowrap}
      .esc button.primary{color:#fff;background:var(--esc-primary);border-color:transparent;font-weight:720;box-shadow:0 3px 10px color-mix(in srgb,var(--esc-primary) 20%,transparent)}.esc button.primary:hover{filter:brightness(1.08)}.esc button.icon{width:39px;height:39px;padding:0;border-radius:13px;background:var(--esc-mute);flex:0 0 auto;font-size:18px}.esc button.icon:hover{background:color-mix(in srgb,var(--esc-primary) 13%,var(--esc-surface))}
      .esc-search,.esc-filter{margin:0 11px 8px;padding:10px 12px;border:1px solid var(--esc-line);border-radius:11px;background:var(--esc-surface);width:calc(100% - 22px)}.esc-search{margin-top:2px}.esc-filter{margin-bottom:7px}
      .esc-inbox{flex:1;overflow:auto;min-height:0;padding:0 6px 8px;scrollbar-gutter:stable}
      .esc-thread-btn{display:flex;gap:10px;padding:11px 9px;width:100%;text-align:left;background:transparent;border:0;border-radius:12px;margin:2px 0;align-items:center}.esc-thread-btn.current{background:color-mix(in srgb,var(--esc-primary) 12%,var(--esc-surface))}.esc-thread-btn:hover{background:var(--esc-mute)}

      .esc-thread-card{position:relative;border-radius:12px;margin:2px 0}
      .esc-thread-card.current{background:color-mix(in srgb,var(--esc-primary) 12%,var(--esc-surface))}
      .esc-thread-card .esc-thread-btn{margin:0;padding-right:37px}
      .esc-card-menu-trigger{position:absolute;right:6px;top:10px;width:28px;height:30px;border:0;background:transparent;color:var(--esc-text);font-size:22px;border-radius:9px;cursor:pointer;display:grid;place-items:center}
      .esc-card-menu-trigger:hover,.esc-card-menu-trigger[aria-expanded=true]{background:var(--esc-mute)}
      .esc-card-menu{position:absolute;z-index:30;right:5px;top:40px;min-width:175px;padding:5px;background:var(--esc-surface);border:1px solid var(--esc-line);border-radius:12px;box-shadow:0 12px 30px #0002}
      .esc-card-menu button{display:block;width:100%;text-align:left;border:0;background:transparent;padding:11px 12px;border-radius:8px;font-size:12px;color:var(--esc-text);cursor:pointer}
      .esc-card-menu button:hover{background:var(--esc-mute)}
      .esc-card-menu button.esc-card-danger{color:#b32643}
      .esc-card-unread{float:right;border-radius:999px;background:var(--esc-primary);color:#fff;padding:2px 6px;font-size:10px;margin-left:6px}
      .esc-card-edit-backdrop{position:fixed;inset:0;background:#07182b88;z-index:2147481000;display:grid;place-items:center;padding:16px}
      .esc-card-edit-dialog{width:min(420px,100%);background:var(--esc-surface);color:var(--esc-text);border:1px solid var(--esc-line);border-radius:18px;padding:21px;display:grid;gap:13px;box-shadow:0 20px 60px #0004}
      .esc-card-edit-dialog input{width:100%;padding:12px;border:1px solid var(--esc-line);border-radius:10px;background:var(--esc-surface);color:var(--esc-text)}
      .esc-card-edit-dialog footer{display:flex;justify-content:flex-end;gap:9px}.esc-screen-preview-dialog{width:min(650px,100%)}.eleeveon-attach-popover .esc-screen-audio-option{display:flex;align-items:center;gap:10px;padding:8px 12px;font-size:12px}.eleeveon-attach-popover .esc-screen-audio-option input{width:16px;height:16px;margin:0}
      .esc-avatar{width:40px;height:40px;border-radius:15px;display:grid;place-items:center;flex-shrink:0;background:linear-gradient(145deg,color-mix(in srgb,var(--esc-primary) 16%,var(--esc-surface)),color-mix(in srgb,var(--esc-primary) 7%,var(--esc-surface)));font-weight:800;color:var(--esc-primary);border:1px solid color-mix(in srgb,var(--esc-primary) 15%,transparent)}
      .esc-thread-main{min-width:0;flex:1}.esc-thread-main strong,.esc-thread-main small,.esc-thread-main em{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.esc-thread-main strong{font-size:12px}.esc-thread-main small{opacity:.65;margin-top:4px;font-size:11px}.esc-thread-main em{font-style:normal;font-size:10px;opacity:.6;margin-top:4px}
      .esc-chat{display:flex;flex-direction:column;min-width:0;min-height:0;height:100%;position:relative;isolation:isolate;background-color:color-mix(in srgb,var(--esc-surface) 91%,var(--esc-primary));background-image:radial-gradient(ellipse 55% 48% at 1% 4%,color-mix(in srgb,var(--esc-primary) 13%,transparent),transparent 82%),radial-gradient(ellipse 55% 48% at 100% 98%,color-mix(in srgb,#8db9cc 15%,transparent),transparent 81%),radial-gradient(circle at 9px 9px,color-mix(in srgb,var(--esc-primary) 10%,transparent) 1.3px,transparent 1.4px),radial-gradient(circle at 39px 39px,color-mix(in srgb,var(--esc-primary) 6%,transparent) 1.1px,transparent 1.3px);background-size:auto,auto,58px 58px,58px 58px}
      .esc-opening{position:absolute;top:65px;right:12px;z-index:12;background:var(--esc-surface);padding:9px 13px;border:1px solid var(--esc-line);box-shadow:0 6px 24px #0002;border-radius:12px;font-size:11px}
      .esc-chat-head{background:color-mix(in srgb,var(--esc-surface) 94%,var(--esc-primary));padding:10px 13px;display:flex;align-items:center;gap:9px;min-height:65px;flex:0 0 auto;border-bottom:1px solid var(--esc-line);z-index:2}
      .esc-chat-info{flex:1;min-width:0}.esc-chat-info strong,.esc-chat-info small{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.esc-chat-info strong{font-size:13px;font-weight:780}.esc-chat-info small{font-size:10.5px;opacity:.7;margin-top:4px}.esc-chat-head select{max-width:119px;font-size:11px;border:1px solid var(--esc-line);background:var(--esc-surface);border-radius:10px;padding:8px}
      .esc-body{overflow:auto;overscroll-behavior:contain;flex:1 1 auto;min-height:0;padding:16px clamp(11px,2vw,26px) 22px;scrollbar-gutter:stable}.esc-date{text-align:center;font-size:10px;width:max-content;margin:15px auto;padding:6px 12px;background:color-mix(in srgb,var(--esc-surface) 85%,transparent);border-radius:999px;border:1px solid var(--esc-line);color:var(--esc-text);opacity:.8}
      .esc-row{display:flex;justify-content:flex-start;margin:10px 0}.esc-row.mine{justify-content:flex-end}.esc-bubble{background:var(--esc-surface);padding:11px 14px;border:1px solid var(--esc-line);border-radius:18px 18px 18px 6px;box-shadow:0 3px 12px rgba(30,60,75,.055);max-width:min(85%,520px);white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.53}
      .esc-row.mine .esc-bubble{background:color-mix(in srgb,var(--esc-primary) 13%,var(--esc-surface));border-color:color-mix(in srgb,var(--esc-primary) 17%,var(--esc-line));border-radius:18px 18px 6px 18px}.esc-bubble small{display:block;opacity:.6;margin-top:7px;font-size:10px;text-align:right;white-space:nowrap}.esc-label{font-size:10px;font-weight:800;color:var(--esc-primary);margin-bottom:5px;letter-spacing:.15px}
      .esc-media{max-width:100%;max-height:330px;object-fit:contain;border-radius:13px;margin-top:8px;display:block;background:color-mix(in srgb,var(--esc-text) 5%,transparent)}.esc-audio{display:flex;align-items:center;gap:11px;margin-top:9px;padding:10px;background:color-mix(in srgb,var(--esc-primary) 8%,var(--esc-surface));border:1px solid var(--esc-line);border-radius:15px;max-width:100%}.esc-audio-icon{display:grid;place-items:center;font-size:22px;font-weight:700;color:var(--esc-primary);background:var(--esc-surface);width:41px;height:41px;border-radius:14px;flex-shrink:0}.esc-audio-player{display:grid;gap:5px;flex:1;min-width:0}.esc-audio-player strong{font-size:10px;opacity:.75}.esc-audio audio{width:min(290px,100%);height:36px;display:block;max-width:100%;accent-color:var(--esc-primary)}
      .esc-attachment{display:flex;gap:11px;align-items:center;padding:11px;border:1px solid var(--esc-line);border-radius:13px;color:inherit;text-decoration:none;margin-top:8px;background:color-mix(in srgb,var(--esc-primary) 5%,var(--esc-surface))}.esc-attachment:hover{background:color-mix(in srgb,var(--esc-primary) 11%,var(--esc-surface))}.esc-attachment span{flex:1;overflow:hidden;overflow-wrap:anywhere}.esc-attachment small{display:block;margin-top:3px;opacity:.6}.esc-unavailable{font-size:11px;opacity:.65;margin-top:8px}.esc-error-text{font-size:11px;color:#b62343;margin-top:5px}
      .esc-attach-wrap{position:relative;flex:0 0 auto}.eleeveon-attach-popover{position:fixed;z-index:2147480000;display:grid;gap:3px;max-height:calc(100dvh - 24px);overflow-y:auto;padding:10px;border-radius:18px;background:var(--surface,var(--card-bg,#fff));color:var(--text,#233241);font-size:13px;border:1px solid var(--border,rgba(120,140,155,.24));box-shadow:0 18px 52px rgba(16,41,54,.23)}.eleeveon-attach-popover strong{font-size:11px;padding:7px 9px;color:var(--text,#233241);opacity:.7}.eleeveon-attach-popover button{display:flex;align-items:center;gap:12px;min-height:44px;width:100%;padding:10px 12px;text-align:left;border:0;border-radius:12px;background:transparent;cursor:pointer;color:inherit;font:inherit}.eleeveon-attach-popover button:hover,.eleeveon-attach-popover button:focus-visible{background:color-mix(in srgb,var(--dashboard-primary,#137d79) 10%,var(--surface,#fff))}.eleeveon-attach-popover .icon-mark{width:30px;height:30px;display:grid;place-items:center;border-radius:10px;font-size:17px;background:color-mix(in srgb,var(--dashboard-primary,#137d79) 11%,var(--surface,#fff))}
      .esc-composer-area{flex:0 0 auto;z-index:3;position:relative;margin-top:auto;background:var(--esc-surface);box-shadow:0 -8px 24px rgba(25,70,75,.05)}.esc-composer{display:flex;align-items:flex-end;gap:7px;padding:11px max(12px,2%);min-height:66px;border-top:1px solid var(--esc-line)}.esc-composer textarea{flex:1;min-width:0;height:44px;min-height:44px;resize:none;max-height:116px;overflow-y:auto;background:color-mix(in srgb,var(--esc-surface) 96%,var(--esc-primary));border-radius:15px;border:1px solid var(--esc-line);padding:12px 13px;line-height:1.45}.esc-composer textarea:focus{outline:2px solid color-mix(in srgb,var(--esc-primary) 36%,transparent);outline-offset:0}.esc-files{display:flex;gap:7px;flex-wrap:wrap;padding:8px 13px 2px;max-height:90px;overflow:auto}.esc-files button{border:1px solid var(--esc-line);border-radius:999px;padding:7px 10px;background:var(--esc-mute);max-width:100%;text-overflow:ellipsis;overflow:hidden}.esc-recording{padding:8px 16px;display:flex;align-items:center;gap:8px;color:var(--esc-primary);font-size:11px;font-weight:700}.esc-recording-dot{width:9px;height:9px;background:#e64e65;border-radius:50%;animation:esc-pulse 1s infinite alternate}@keyframes esc-pulse{to{opacity:.3}}
      .esc-banner{font-size:11px;padding:9px 12px;background:var(--esc-surface);border-bottom:1px solid var(--esc-line)}.esc-banner.warn{background:color-mix(in srgb,#e7b650 10%,var(--esc-surface))}.esc-banner.error{color:#b91c1c}.esc-banner.success{color:var(--esc-primary)}.esc-banner button{margin-left:9px;text-decoration:underline;border:0;background:transparent}.esc-form{padding:clamp(14px,2vw,24px);display:grid;gap:13px;overflow:auto}.esc-form label{display:grid;gap:6px;font-weight:600}.esc-form p{line-height:1.5;opacity:.74;margin:0}.esc-form input,.esc-form textarea,.esc-form select{border:1px solid var(--esc-line);background:var(--esc-surface);border-radius:12px;padding:11px;width:100%}.esc-empty{margin:auto;padding:23px;text-align:center;display:grid;gap:11px;justify-items:center;max-width:380px}.esc-empty strong{font-size:15px}.esc-empty p,.esc-empty small{opacity:.7;line-height:1.6}.esc-back{display:none}
      .esc-key-panel{background:var(--esc-surface);padding:15px;overflow:auto;max-height:52%;border-bottom:2px solid var(--esc-primary)}.esc-key-item{margin:9px 0;padding:10px;background:var(--esc-mute);border-radius:9px}
      .esc-pending-status{display:flex;gap:8px;align-items:center;flex-wrap:wrap;padding:7px 12px;font-size:11px;background:color-mix(in srgb,var(--esc-primary) 7%,var(--esc-surface));color:var(--esc-text);border-top:1px solid var(--esc-line)}
      .esc-pending-status span{flex:1;min-width:150px}
      .esc-pending-status button{padding:5px 8px;border:1px solid var(--esc-line);border-radius:8px;background:var(--esc-surface);font-size:11px;cursor:pointer}.esc-fingerprint{word-break:break-word;letter-spacing:.7px;font-family:monospace;font-size:11px}.esc-key-buttons{display:flex;gap:7px;flex-wrap:wrap;margin-top:9px}
      .esc-chat-head{position:relative}.esc-more-trigger{font-size:23px!important}.esc-header-more{position:absolute;right:9px;top:calc(100% - 3px);z-index:30;width:min(240px,calc(100vw - 24px));padding:8px;display:grid;gap:4px;border:1px solid var(--esc-line);border-radius:14px;background:var(--esc-surface);box-shadow:0 12px 38px #0003}.esc-header-more button,.esc-header-more label{border:0;border-radius:9px;padding:10px;text-align:left;background:var(--esc-mute);font-size:12px}.esc-header-more label{display:grid;gap:6px}.esc-header-more select{max-width:none;width:100%}.esc-message-delete{display:block;margin:5px 0 0 auto;background:transparent;border:0;text-decoration:underline;text-underline-offset:2px;font-size:10px;opacity:.6;padding:4px}.esc-message-delete:hover{opacity:1}

      /* A room of its own: scenic wallpaper plus unobtrusive, high-contrast glass. */
      .esc{--esc-primary:#11685f;--esc-text:#18342f;--esc-surface:rgba(255,255,254,.94);--esc-line:rgba(24,64,61,.17);--esc-mute:rgba(217,235,227,.69);background:linear-gradient(130deg,#b7d8da,#dfe4d3 50%,#92c2bb);padding:4px;border-radius:22px;position:relative;overflow:hidden}



      .esc-layout{border-radius:21px;border:1px solid rgba(255,255,255,.55);background:transparent;box-shadow:0 15px 42px rgba(2,35,34,.19)}
      .esc-side{background:rgba(247,250,244,.9);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-right:1px solid rgba(255,255,255,.55)}
      .esc-chat{background:linear-gradient(180deg,rgba(9,37,43,.18),rgba(7,37,30,.05) 45%,rgba(11,45,45,.25)),var(--hub-scene);background-size:cover;background-position:center;}

      .esc-chat-head,.esc-composer-area{background:rgba(248,253,250,.88);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-color:rgba(255,255,255,.7)}
      .esc-chat-head{min-height:62px}
      .esc-loading-thread{display:grid;align-content:center;justify-content:center;gap:7px;text-align:center;min-height:200px;flex:1;color:#47605c}.esc-loading-thread strong{font-size:13px}.esc-loading-thread span{font-size:11px}.esc-chat-settings-button{display:none!important}
      .esc-body{padding:14px clamp(11px,2.4vw,33px) 22px}
      .esc-thread-card{border:1px solid transparent;transition:background .2s ease,border-color .2s ease}
      .esc-thread-card.current{background:rgba(36,119,108,.13);border-color:rgba(36,119,108,.13)}
      .esc-thread-card:hover{background:rgba(255,255,255,.45)}
      .esc-avatar{background:linear-gradient(145deg,#d9f1e9,#add7cc);color:#145b56;border-radius:14px}
      .esc-bubble{position:relative;max-width:min(79%,510px);padding:8px 10px 7px;background:rgba(255,255,255,.95);border-color:rgba(255,255,255,.74);border-radius:14px 14px 14px 5px;box-shadow:0 4px 17px rgba(8,38,35,.16);line-height:1.42;font-size:12.5px}
      .esc-row{margin:5px 0}
      .esc-row.mine .esc-bubble{background:rgba(215,246,231,.96);border-color:rgba(198,230,214,.95);border-radius:14px 14px 5px 14px}
      .esc-message-top{display:flex;justify-content:space-between;align-items:center;gap:12px;min-height:17px;margin-bottom:2px}
      .esc-label{margin:0;font-size:9.5px;letter-spacing:.12px}
      .esc-message-text{white-space:pre-wrap;overflow-wrap:anywhere}
      .esc-message-meta{font-size:9px!important;margin:4px 0 0!important;line-height:1.2!important}
      .esc-bubble-action-wrap{position:relative;flex-shrink:0}
      .esc-bubble-more{display:grid;place-items:center;width:24px;height:22px;border:0;border-radius:8px;background:transparent;font-size:20px;color:#526c68;line-height:1}
      .esc-bubble-more:hover,.esc-bubble-more[aria-expanded=true]{background:rgba(21,105,92,.13)}
      .esc-bubble-menu{position:absolute;right:0;top:calc(100% + 4px);z-index:20;min-width:167px;background:rgba(255,255,255,.99);border:1px solid rgba(35,81,74,.18);border-radius:12px;box-shadow:0 10px 35px rgba(0,20,18,.2);padding:5px}
      .esc-bubble-menu button{display:block;width:100%;text-align:left;padding:9px 10px;border:0;border-radius:8px;background:none;color:#223d38;font-size:11px;white-space:nowrap}
      .esc-bubble-menu button:hover{background:#e5f2eb}
      .esc-row:last-child .esc-bubble-menu{top:auto;bottom:calc(100% + 4px)}
      .esc-reply-quote{display:grid;gap:3px;text-align:left;width:100%;max-width:100%;border:0;border-left:3px solid #358f82;background:rgba(4,79,73,.075);border-radius:3px 8px 8px 3px;padding:6px 9px;margin:4px 0 6px;line-height:1.3}
      .esc-reply-quote strong{font-size:10px;color:#116e63}.esc-reply-quote span{font-size:10px;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
      .esc-compose-reference{display:flex;align-items:center;justify-content:space-between;gap:9px;padding:7px 13px 5px;background:rgba(235,250,244,.82);border-left:3px solid #1d8d7c}
      .esc-compose-reference div{min-width:0;display:grid;gap:2px}.esc-compose-reference strong{font-size:10px;color:#116f64}.esc-compose-reference span{font-size:10px;opacity:.75;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .esc-compose-reference button{width:29px;height:29px;border:0;border-radius:50%;background:#d5e9e2;font-size:19px;flex-shrink:0}
      .esc-waveform{display:flex;align-items:center;justify-content:center;gap:2px;height:35px;flex:1;min-width:55px;max-width:220px}
      .esc-waveform i{display:block;width:3px;min-height:4px;flex:1;border-radius:6px;background:#188c7a;transition:height .085s linear}
      .esc-recording{background:rgba(239,251,246,.88);gap:9px}.esc-recording>button{border:1px solid rgba(21,106,90,.2);border-radius:8px;background:white;padding:5px 8px;font-size:10px}
      .esc-date{opacity:1;background:rgba(245,255,249,.8);border:1px solid rgba(255,255,255,.62);color:#24433d}
      .esc-empty{padding:20px;border-radius:18px;background:rgba(250,255,250,.77);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 5px 26px rgba(4,40,35,.08)}
      .esc .esc-card-menu{background:#fff;color:#24413b}
      .esc button:focus-visible{outline-color:#1b847a}
      @media(max-width:680px){.esc{padding:0;border-radius:14px}.esc-layout{border-radius:14px}.esc-row{margin:5px 0}.esc-bubble{max-width:89%;font-size:12px;padding:7px 9px}.esc-chat-head{min-height:57px}.esc-body{padding:12px 10px 18px}.esc-waveform{gap:1px}.esc-waveform i{width:2px}}

      @media(max-width:980px) and (min-width:681px){.esc-layout{grid-template-columns:minmax(190px,34%) minmax(0,1fr)}.esc-chat-head{gap:5px;padding:8px}.esc-chat-head select{max-width:92px}.esc-bubble{max-width:94%}}
      @media(max-width:680px){.esc-chat-settings-button{display:grid!important}.esc{height:100%;min-height:0}.esc-layout{display:block;height:100%;min-height:0;border-radius:14px}.esc-side{height:100%;border:0}.esc-chat{height:100%;display:none}.esc-layout.mobile-chat .esc-side{display:none}.esc-layout.mobile-chat .esc-chat{display:flex}.esc-back{display:inline-flex}.esc-mobile-nav-in-chat{display:flex;align-items:center;flex:0 0 auto;max-width:77px}.esc-mobile-nav-in-chat select{width:100%;max-width:77px;min-width:52px;padding:7px 3px;font-size:11px}.esc-bubble{max-width:94%}.esc-body{padding:11px 10px 16px}.esc-chat-head{min-height:56px;padding:7px;gap:5px}.esc-chat-head select{max-width:90px}.esc-chat-head .esc-avatar{display:none}.esc-mobile-nav-in-chat{display:none}.esc-chat-head .esc-call-action{display:none}.esc-chat-head .esc-chat-info{min-width:0}.esc-chat-info strong{font-size:11px}.esc-chat-info small{font-size:9px}.esc-composer{padding:9px 8px;gap:5px;min-height:59px}.esc button.icon{height:36px;width:36px}.esc-composer textarea{font-size:16px}.esc-date{margin:10px auto}}
      @media(prefers-reduced-motion:reduce){.esc *, .esc *::before, .esc *::after{animation:none!important;transition:none!important}}
    `}),(0,n.jsxs)("div",{ref:rT,className:`esc-layout ${ei?"mobile-chat":""}`,style:rO?{height:`${rO}px`}:void 0,children:[(0,n.jsxs)("aside",{className:"esc-side",children:[(0,n.jsx)("div",{className:`esc-side-title ${d?"has-center-tabs":""}`,children:d??(0,n.jsx)("strong",{children:e?"Schools \xb7 Support":"Eleeveon Support"})}),(0,n.jsxs)("div",{className:"esc-search-row",children:[(0,n.jsx)("input",{className:"esc-search","aria-label":"Search conversations",placeholder:"Search conversations",value:e5,onChange:e=>e4(e.target.value)}),(0,n.jsxs)("div",{className:"esc-actions",children:[(0,n.jsx)("button",{className:"icon",title:"Refresh conversations","aria-label":"Refresh conversations",onClick:()=>void tA(),disabled:rx,children:"↻"}),(0,n.jsx)("button",{className:"primary",onClick:()=>{el(!0),eo(!0)},children:"+ New"})]})]}),(0,n.jsxs)("select",{className:"esc-filter",value:e3,"aria-label":"Filter conversations",onChange:e=>e8(e.target.value),children:[(0,n.jsx)("option",{value:"all",children:"All conversations"}),(0,n.jsx)("option",{value:"open",children:"Open"}),eK.map(e=>(0,n.jsx)("option",{value:e,children:eV(e)},e))]}),!r6&&(0,n.jsx)("small",{role:"status",style:{padding:"3px 12px",color:"var(--muted,#667085)"},children:"Offline \xb7 showing encrypted messages saved on this device"}),(0,n.jsxs)("div",{className:"esc-inbox",children:[tM.map(r=>(0,n.jsxs)("div",{className:`esc-thread-card ${L===r.id?"current":""}`,children:[(0,n.jsxs)("button",{type:"button",className:`esc-thread-btn ${L===r.id?"current":""}`,"aria-busy":rv===r.id,onClick:()=>{ta(""),t$(r.id)},children:[(0,n.jsx)("div",{className:"esc-avatar",children:(r.displayTitle||(e?r.organizationName:ea[r.id]||r.subject)||"S").slice(0,1).toUpperCase()}),(0,n.jsxs)("div",{className:"esc-thread-main",children:[(0,n.jsxs)("strong",{children:[r.displayTitle||(e?r.organizationName||"School":ea[r.id]||r.subject||"Support conversation"),Number(r.unreadCount||0)>0&&(0,n.jsx)("span",{"aria-label":`${r.unreadCount} unread messages`,className:"esc-card-unread",children:r.unreadCount>99?"99+":r.unreadCount})]}),(0,n.jsx)("small",{children:eY(r)?"Private conversation":"Earlier support conversation"}),(0,n.jsx)("em",{children:rv===r.id?"◌ Opening conversation…":`${eV(r.status)} \xb7 ${eq(r.lastMessage?.createdAt||r.updatedAt)}`})]})]}),(0,n.jsx)("button",{type:"button",className:"esc-card-menu-trigger","aria-label":"More actions for this conversation","aria-expanded":tt===r.id,onClick:()=>ta(e=>e===r.id?"":r.id),children:"⋮"}),tt===r.id&&(0,n.jsxs)("div",{className:"esc-card-menu",role:"group","aria-label":"Conversation actions",children:[(0,n.jsx)("button",{type:"button",onClick:()=>{ts(r.displayTitle||ea[r.id]||r.subject||""),ti(r.id),ta("")},children:"Edit title"}),(0,n.jsx)("button",{type:"button",className:"esc-card-danger",disabled:tl,onClick:()=>void tp(r.id),children:"Delete conversation"})]})]},r.id)),!tM.length&&(0,n.jsx)("div",{className:"esc-empty",children:rx?"Loading conversations…":C.length?"No conversations match these filters.":"No conversations yet."}),z&&(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"10px"},children:(0,n.jsx)("button",{type:"button",className:"secondary",disabled:R||!r6,onClick:()=>void tR(),children:R?"Loading…":"Load earlier conversations"})})]})]}),(0,n.jsxs)("div",{className:"esc-chat",children:[rv&&L&&(0,n.jsx)("div",{className:"esc-opening",role:"status","aria-live":"polite",children:"Preparing conversation…"}),rv&&L&&!P&&!es&&(0,n.jsxs)("div",{className:"esc-loading-thread",role:"status",children:[(0,n.jsx)("strong",{children:"Opening conversation…"}),(0,n.jsx)("span",{children:"Loading saved messages and encryption keys"})]}),es?(0,n.jsxs)(n.Fragment,{children:[r5&&(0,n.jsxs)("div",{className:"esc-banner error",role:"alert",children:[r5,r3&&u&&(0,n.jsx)("button",{type:"button",onClick:()=>u(),children:"Review devices"})]}),(0,n.jsxs)("div",{className:"esc-chat-head",children:[(0,n.jsx)("button",{className:"icon esc-back",onClick:()=>{el(!1),eo(!1)},children:"←"}),p&&(0,n.jsx)("div",{className:"esc-mobile-nav-in-chat",children:p}),(0,n.jsxs)("div",{className:"esc-chat-info",children:[(0,n.jsx)("strong",{children:"New conversation"}),(0,n.jsx)("small",{children:"Private messaging"})]}),(0,n.jsx)("button",{className:"secondary",onClick:()=>u?.(),children:"⚙ Settings"})]}),e?(0,n.jsxs)("div",{className:"esc-form",children:[(0,n.jsx)("strong",{children:"Start a conversation"}),(0,n.jsx)("p",{children:"Choose an account, app user, or school role to begin a private conversation."}),(0,n.jsxs)("label",{children:["Account",(0,n.jsxs)("select",{value:eh,onChange:e=>{ek(e.target.value),eC(""),eI("")},children:[(0,n.jsx)("option",{value:"",children:"Choose account…"}),ec.accounts.map(e=>(0,n.jsxs)("option",{value:e.id,children:[e.name," \xb7 ",e.email||e.id]},e.id))]})]}),(0,n.jsxs)("label",{children:["Recipients",(0,n.jsxs)("select",{value:ej,onChange:e=>eS(e.target.value),children:[(0,n.jsx)("option",{value:"account",children:"All active account users"}),(0,n.jsx)("option",{value:"user",children:"Specific app user"}),(0,n.jsx)("option",{value:"role",children:"Role in a school or branch"})]})]}),"user"===ej&&(0,n.jsxs)("label",{children:["App user",(0,n.jsxs)("select",{value:eN,onChange:e=>eC(e.target.value),children:[(0,n.jsx)("option",{value:"",children:"Choose user…"}),ec.users.map(e=>(0,n.jsxs)("option",{value:e.id,children:[e.fullName," \xb7 ",e.email]},e.id))]})]}),"role"===ej&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("label",{children:["Role",(0,n.jsxs)("select",{value:eE,onChange:e=>eI(e.target.value),children:[(0,n.jsx)("option",{value:"",children:"Choose role…"}),[...new Set(ec.memberships.map(e=>e.role))].map(e=>(0,n.jsx)("option",{value:e,children:eV(e)},e))]})]}),(0,n.jsxs)("label",{children:["School ID (optional)",(0,n.jsxs)("select",{value:eA,onChange:e=>ez(e.target.value),children:[(0,n.jsx)("option",{value:"",children:"All schools"}),[...new Set(ec.memberships.map(e=>e.schoolId).filter(e=>!!e))].map(e=>(0,n.jsx)("option",{value:e,children:e},e))]})]}),(0,n.jsxs)("label",{children:["Branch ID (optional)",(0,n.jsxs)("select",{value:eM,onChange:e=>eR(e.target.value),children:[(0,n.jsx)("option",{value:"",children:"All branches"}),[...new Set(ec.memberships.filter(e=>!eA||e.schoolId===eA).map(e=>e.branchId).filter(e=>!!e))].map(e=>(0,n.jsx)("option",{value:e,children:e},e))]})]})]}),(0,n.jsx)("button",{className:"primary",disabled:!eh||rg||"user"===ej&&!eN||"role"===ej&&!eE,onClick:()=>void tL(),children:rg?"Creating…":"Open secure conversation"})]}):(0,n.jsxs)("div",{className:"esc-form",children:[(0,n.jsxs)("label",{children:["Category",(0,n.jsx)("select",{value:eZ,onChange:e=>e0(e.target.value),children:eH.map(([e,r])=>(0,n.jsx)("option",{value:e,children:r},e))})]}),(0,n.jsxs)("label",{children:["Subject",(0,n.jsx)("input",{maxLength:180,value:e$,onChange:e=>eQ(e.target.value),placeholder:"What would you like to discuss?"})]}),(0,n.jsxs)("label",{children:["Message",(0,n.jsx)("textarea",{rows:6,value:e1,onChange:e=>e2(e.target.value),placeholder:"Explain your issue privately…"})]}),(0,n.jsxs)("div",{className:"esc-key-buttons",children:[(0,n.jsx)("button",{className:"secondary",onClick:()=>el(!1),children:"Cancel"}),(0,n.jsx)("button",{className:"primary",disabled:!b||!e$.trim()&&!e1.trim()||rg||!r6,onClick:()=>void tP(),children:rg?"Creating…":"Start conversation"})]})]})]}):L&&P?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"esc-chat-head",children:[(0,n.jsx)("button",{className:"icon esc-back","aria-label":"Back to conversations",onClick:()=>eo(!1),children:"←"}),p&&(0,n.jsx)("div",{className:"esc-mobile-nav-in-chat",children:p}),(0,n.jsx)("div",{className:"esc-avatar",children:eY(P)?"\uD83D\uDD12":"\uD83D\uDCAC"}),(0,n.jsxs)("div",{className:"esc-chat-info",children:[(0,n.jsx)("strong",{children:tV}),(0,n.jsxs)("small",{children:[(0,n.jsxs)("span",{style:{color:"Online in chat"===rA?"#169e67":void 0},children:["● ",rA]})," \xb7 ",eV(P.status)]})]}),(0,n.jsx)("button",{className:"icon esc-chat-settings-button",type:"button","aria-label":"Hub settings",onClick:()=>u?.(L),children:"⚙"}),(0,n.jsx)("button",{className:"icon esc-call-action",title:"Start voice or video call","aria-label":"Start voice or video call",onClick:()=>rC(!0),children:"☎"}),(0,n.jsx)("button",{className:"icon esc-more-trigger","aria-label":"More conversation actions","aria-expanded":rE,onClick:()=>rI(e=>!e),children:"⋮"}),rE&&(0,n.jsxs)("div",{className:"esc-header-more",role:"group","aria-label":"Conversation actions",children:[(0,n.jsxs)("button",{type:"button",onClick:()=>{u?.(L),rI(!1)},children:["\uD83D\uDD10 Device security",tC.length?" • Review keys":""]}),(0,n.jsx)("button",{type:"button",onClick:()=>{rC(!0),rI(!1)},children:"☎ Live call"}),e&&(0,n.jsxs)("label",{children:["Conversation status",(0,n.jsx)("select",{value:P.status,disabled:rg,onChange:e=>{tW(e.target.value),rI(!1)},children:eK.map(e=>(0,n.jsx)("option",{value:e,children:eV(e)},e))})]})]})]}),(0,n.jsxs)("div",{ref:tf,className:"esc-body",onClick:e=>{ro&&!e.target.closest(".esc-bubble-action-wrap")&&rs("")},children:[q&&(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"3px 0 15px"},children:(0,n.jsx)("button",{type:"button",className:"secondary",disabled:G,onClick:()=>void tT(),children:G?"Loading…":"↑ Load earlier messages"})}),!tz.length&&(0,n.jsxs)("div",{className:"esc-empty",role:"status",children:[(0,n.jsx)("strong",{children:"Conversation ready"}),(0,n.jsx)("small",{children:"No messages yet. Start the conversation when participant encryption keys are available."})]}),tz.map((r,t)=>{let a=r.authorUserId?r.authorUserId===h:e?"platform"===r.authorType:"platform"!==r.authorType,o=tz[t-1],s=r.id!==`${L}-opening`,l=s&&r.authorUserId===h&&r.decrypted&&!r.deletedForEveryone&&!!r.displayBody.trim();return(0,n.jsxs)(i.Fragment,{children:[(!o||eq(o.createdAt)!==eq(r.createdAt))&&(0,n.jsx)("div",{className:"esc-date",children:eq(r.createdAt)}),(0,n.jsx)("div",{className:`esc-row ${a?"mine":""}`,"data-hub-message-id":r.id,children:(0,n.jsxs)("div",{className:"esc-bubble",children:[(0,n.jsxs)("div",{className:"esc-message-top",children:[(0,n.jsx)("span",{className:"esc-label",children:a?"You":"platform"===r.authorType?"Eleeveon":P.organizationName||"School"}),s&&(0,n.jsxs)("div",{className:"esc-bubble-action-wrap",children:[(0,n.jsx)("button",{type:"button",className:"esc-bubble-more","aria-label":"More actions for this message","aria-expanded":ro===r.id,onClick:()=>rs(e=>e===r.id?"":r.id),children:"⋮"}),ro===r.id&&(0,n.jsxs)("div",{className:"esc-bubble-menu",role:"group","aria-label":"Message actions",children:[(0,n.jsx)("button",{type:"button",onClick:()=>(function(e){if(!e.decrypted&&eg(e.body))return void r4("Verify and decrypt this message before replying to it.");let r=e.authorUserId===h?"You":"platform"===e.authorType?"Eleeveon":P?.organizationName||"School";rn(null),rt({id:e.id,preview:(e.displayBody||"Attachment").slice(0,150),name:r}),rs(""),rL.current?.focus()})(r),children:"↪ Reply"}),l&&(0,n.jsx)("button",{type:"button",onClick:()=>{r.authorUserId===h&&r.decrypted&&!r.deletedForEveryone&&r.displayBody.trim()&&r.id!==`${L}-opening`&&(rt(null),ra||(ri.current=e7),rn({id:r.id,body:r.displayBody}),e6(r.displayBody),rs(""),rL.current?.focus())},children:"✎ Edit message"}),(0,n.jsx)("button",{type:"button",disabled:te===r.id,onClick:()=>{rs(""),tu(r.id,"me")},children:"Delete for me"}),r.authorUserId===h&&!r.deletedForEveryone&&(0,n.jsx)("button",{type:"button",disabled:te===r.id,onClick:()=>{rs(""),tu(r.id,"everyone")},children:"Delete for everyone"})]})]})]}),r.replyTo&&(0,n.jsxs)("button",{type:"button",className:"esc-reply-quote",onClick:()=>{var e;let t;return e=r.replyTo.id,t=[...tf.current?.querySelectorAll("[data-hub-message-id]")||[]].find(r=>r.dataset.hubMessageId===e),void(t?.scrollIntoView({behavior:"smooth",block:"center"}),!t&&r4("The original message is outside the locally loaded history."))},title:"Go to replied message",children:[(0,n.jsxs)("strong",{children:["↪ ",r.replyTo.name]}),(0,n.jsx)("span",{children:r.replyTo.preview||"Attachment"})]}),r.displayBody?(0,n.jsx)("div",{className:"esc-message-text",children:r.displayBody}):null,r.displayAttachments.map((e,t)=>(0,n.jsx)(eG,{attachment:e,onRetry:()=>tj(L,r.id)},`${r.id}:${t}`)),r.error&&(0,n.jsx)("div",{className:"esc-error-text",children:r.error}),(0,n.jsxs)("small",{className:"esc-message-meta",children:[r.edited?"Edited \xb7 ":"",function(e){if(!e)return"";let r=new Date(e);return isNaN(r.getTime())?"":r.toLocaleTimeString("en-GH",{hour:"2-digit",minute:"2-digit"})}(r.createdAt)," \xb7 ",r.decrypted||!eg(r.body)?"Saved":"Unavailable"]})]})})]},r.id)})]}),(0,n.jsxs)("div",{className:"esc-composer-area",children:[r5&&(0,n.jsxs)("div",{className:"esc-banner error",role:"alert",style:{borderRadius:10,margin:"6px 10px"},children:[r5,r3&&u&&(0,n.jsx)("button",{type:"button",onClick:()=>u(L),children:"Review devices"})]}),e9&&(0,n.jsx)("div",{className:"esc-banner warn",role:"status",style:{borderRadius:10,margin:"6px 10px"},children:e9}),P?.metadata?.pendingRecipientKeys===!0&&(0,n.jsxs)("div",{className:"esc-pending-status",role:"status",children:[(0,n.jsx)("span",{children:"Conversation saved. The first encrypted message is still pending."}),(0,n.jsx)("button",{type:"button",onClick:()=>void tE(L),children:"Refresh devices"}),(0,n.jsx)("button",{type:"button",onClick:()=>u?.(L),children:"Check keys"})]}),rh.length>0&&(0,n.jsx)("div",{className:"esc-files",children:rh.map((e,r)=>(0,n.jsxs)("button",{disabled:rg,onClick:()=>rm(e=>e.filter((e,t)=>t!==r)),children:["\uD83D\uDCCE ",e.name," (",eJ(e.size),") \xd7"]},`${e.name}:${r}`))}),(rr||ra)&&(0,n.jsxs)("div",{className:"esc-compose-reference",role:"status",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("strong",{children:ra?"✎ Editing your message":`↪ Replying to ${rr?.name}`}),(0,n.jsx)("span",{children:(ra?.body||rr?.preview||"").slice(0,135)})]}),(0,n.jsx)("button",{type:"button","aria-label":"Cancel reply or edit",onClick:function(){ra&&e6(ri.current),rn(null),rt(null)},children:"\xd7"})]}),rK&&(0,n.jsxs)("div",{className:"esc-recording",role:"status",children:[(0,n.jsx)("span",{className:"esc-recording-dot"}),(0,n.jsx)("strong",{children:"Recording voice note"}),(0,n.jsx)("div",{className:"esc-waveform",role:"img","aria-label":"Live microphone audio levels",children:rl.map((e,r)=>(0,n.jsx)("i",{style:{height:`${e}px`}},r))}),(0,n.jsx)("button",{type:"button",onClick:()=>tv.current?.stop(),children:"■ Stop"})]}),rW&&(0,n.jsxs)("div",{className:"esc-recording",role:"status",children:[(0,n.jsx)("span",{className:"esc-recording-dot"})," Recording screen and available audio ",(0,n.jsx)("button",{type:"button",onClick:tB,children:"■ Stop and preview"})]}),(0,n.jsx)(J,{conversationId:L,open:rN,onClose:()=>rC(!1)},L),(0,n.jsxs)("div",{className:"esc-composer",children:[(0,n.jsx)("input",{ref:tx,type:"file",hidden:!0,multiple:!0,accept:"image/*,audio/*,video/*,.pdf,.txt,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip",onChange:e=>{e.target.files&&tO(e.target.files),e.target.value=""}}),(0,n.jsx)("input",{ref:rB,type:"file",hidden:!0,accept:"image/*",capture:"environment",onChange:e=>{e.target.files&&tO(e.target.files),e.target.value=""}}),(0,n.jsx)("input",{ref:rF,type:"file",hidden:!0,accept:"image/*",multiple:!0,onChange:e=>{e.target.files&&tO(e.target.files),e.target.value=""}}),(0,n.jsx)("input",{ref:rH,type:"file",hidden:!0,accept:"video/*",onChange:e=>{e.target.files&&tO(e.target.files),e.target.value=""}}),(0,n.jsx)("div",{ref:rR,className:"esc-attach-wrap",children:(0,n.jsx)("button",{className:"icon","aria-expanded":rj,"aria-haspopup":"menu","aria-label":"Attachment options",title:"Add an attachment",disabled:rg||rK||rW,onClick:function(){if(rj)return void rS(!1);let e=rR.current?.getBoundingClientRect();if(!e)return;let r=Math.min(300,Math.max(220,window.innerWidth-24)),t=Math.min(354,window.innerHeight-24);rP({top:Math.max(12,e.top>=t+18?Math.max(12,e.top-t-10):Math.min(e.bottom+10,window.innerHeight-t-12)),left:Math.max(12,Math.min(e.left,window.innerWidth-r-12)),width:r}),rS(!0)},children:"＋"})}),(0,n.jsx)("button",{className:"icon",title:rK?"Stop recording":"Record voice note",disabled:rg||rW,onClick:()=>rK?tv.current?.stop():void t_(),children:rK?"■":"\uD83C\uDF99"}),(0,n.jsx)("textarea",{ref:rL,rows:1,"aria-label":"Message",placeholder:b?ra?"Edit your message…":rr?"Write a reply…":r6?"Type a message…":"Offline":"Preparing chat…",value:e7,disabled:rg||!b,onChange:e=>{e6(e.target.value),tm.current&&tw.current.set(tm.current,e.target.value),rM.current=Date.now()},onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),tU())}}),(0,n.jsx)("button",{type:"button",className:"primary","aria-label":"Send encrypted message",disabled:rg||!r6||!b||rK||rW||!e7.trim()&&!rh.length,onClick:()=>void tU(),children:rg?"…":"➤"})]})]})]}):L&&!P?(0,n.jsxs)("div",{className:"esc-empty",role:"status",children:[(0,n.jsx)("strong",{children:rv?"Opening conversation…":"Conversation unavailable"}),(0,n.jsx)("p",{children:rv?"Preparing locally saved messages and device keys.":r5||"Reconnect and try opening this conversation again."}),!rv&&(0,n.jsx)("button",{className:"primary",type:"button",onClick:()=>void t$(L),children:"Try again"})]}):(0,n.jsxs)("div",{className:"esc-empty",children:[(0,n.jsx)("strong",{children:"Need a hand?"}),(0,n.jsx)("p",{children:"Open a conversation to get help, share a file or speak with Eleeveon Support."}),(0,n.jsx)("button",{className:"primary",onClick:()=>{el(!0),eo(!0)},children:"New conversation"}),!b&&(0,n.jsx)("small",{children:"Setting up your device encryption…"})]})]})]}),rj&&rD&&"u">typeof document&&(0,_.createPortal)((0,n.jsxs)("div",{ref:r$,className:"eleeveon-attach-popover",role:"menu","aria-label":"Add to conversation",style:{top:rD.top,left:rD.left,width:rD.width},children:[(0,n.jsx)("strong",{children:"ADD TO CONVERSATION"}),(0,n.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{rB.current?.click(),rS(!1)},children:[(0,n.jsx)("span",{className:"icon-mark",children:"\uD83D\uDCF7"})," Camera"]}),(0,n.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{rF.current?.click(),rS(!1)},children:[(0,n.jsx)("span",{className:"icon-mark",children:"▧"})," Photos"]}),(0,n.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{rH.current?.click(),rS(!1)},children:[(0,n.jsx)("span",{className:"icon-mark",children:"▶"})," Video / demonstration"]}),(0,n.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{tx.current?.click(),rS(!1)},children:[(0,n.jsx)("span",{className:"icon-mark",children:"▤"})," File / document"]}),(0,n.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{rS(!1),t_()},children:[(0,n.jsx)("span",{className:"icon-mark",children:"♫"})," Record voice note"]}),(0,n.jsxs)("label",{className:"esc-screen-audio-option",children:[(0,n.jsx)("input",{type:"checkbox",checked:rq,onChange:e=>rJ(e.target.checked)})," Include microphone commentary"]}),(0,n.jsxs)("button",{type:"button",role:"menuitem",disabled:rW||rK||!!rY,onClick:()=>{rS(!1),tF()},children:[(0,n.jsx)("span",{className:"icon-mark",children:"▣"})," Record screen + audio"]}),(0,n.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{rS(!1),rC(!0)},children:[(0,n.jsx)("span",{className:"icon-mark",children:"▣"})," Live assistance"]})]}),document.body),rY&&(0,n.jsx)("div",{className:"esc-card-edit-backdrop",role:"presentation",onMouseDown:e=>{e.target===e.currentTarget&&tH(!1)},children:(0,n.jsxs)("div",{className:"esc-card-edit-dialog esc-screen-preview-dialog",role:"dialog","aria-modal":"true","aria-label":"Preview screen recording",children:[(0,n.jsx)("strong",{children:"Preview screen recording"}),(0,n.jsx)("video",{src:rY.url,controls:!0,playsInline:!0,preload:"metadata",style:{width:"100%",maxHeight:"48dvh",background:"#101820",borderRadius:12}}),(0,n.jsxs)("small",{children:[eJ(rY.file.size)," \xb7 Review it before attaching. Your recording is not uploaded until you press Send."]}),(0,n.jsxs)("footer",{children:[(0,n.jsx)("button",{type:"button",onClick:()=>tH(!1),children:"Discard"}),(0,n.jsx)("button",{type:"button",className:"primary",onClick:()=>tH(!0),children:"Attach to message"})]})]})}),tn&&(0,n.jsx)("div",{className:"esc-card-edit-backdrop",role:"presentation",onMouseDown:e=>{e.target!==e.currentTarget||tl||ti("")},children:(0,n.jsxs)("div",{className:"esc-card-edit-dialog",role:"dialog","aria-modal":"true","aria-label":"Edit conversation title",children:[(0,n.jsx)("strong",{children:"Edit conversation title"}),(0,n.jsx)("input",{autoFocus:!0,maxLength:100,"aria-label":"Conversation title",value:to,onChange:e=>ts(e.target.value),onKeyDown:e=>{"Enter"===e.key&&td(),"Escape"===e.key&&ti("")}}),(0,n.jsx)("small",{children:"This title is saved privately for your account. The encrypted messages stay unchanged."}),(0,n.jsxs)("footer",{children:[(0,n.jsx)("button",{type:"button",disabled:tl,onClick:()=>ti(""),children:"Cancel"}),(0,n.jsx)("button",{type:"button",className:"primary",disabled:tl||!to.trim(),onClick:()=>void td(),children:tl?"Saving…":"Save title"})]})]})}),r5&&(0,n.jsxs)("div",{className:"esc-banner error",role:"alert",children:[r5,r3&&u&&(0,n.jsx)("button",{type:"button",onClick:()=>u(L||void 0),children:"Review devices"}),(0,n.jsx)("button",{type:"button",onClick:()=>{r4(""),r8(!1)},children:"Dismiss"})]})]})}var eQ=t(11439);async function eZ(e,r,t,a,n,i=()=>!1){let o,s=await ep(e,r);if(s.id===a.id)throw Error("A device cannot transfer history to itself.");let l={conversations:0,processed:0,transferred:0,skipped:0,done:!1},c=e=>{n({...l={...l,...e}})},d=new Set;for(;;){if(i())throw Error("History transfer cancelled; already transferred keys remain usable.");let n=await W.k.conversationPage(o,50);for(let o of n.conversations){let n;if(d.has(o.id))continue;if(d.add(o.id),i())throw Error("History transfer cancelled.");let p=await W.k.keys(o.id).then(e=>e.devices),u=p.find(e=>e.id===a.id);if(!u||u.fingerprint!==a.fingerprint)throw Error("The newly linked device key changed. Restart verification.");let h=[],m=async()=>{if(!h.length)return;let e=h.splice(0,h.length),r=await W.k.linkHistory(t,s.id,e);c({transferred:l.transferred+r.accepted+r.duplicates})},g=async(a,n)=>{if(eg(n)){c({processed:l.processed+1});try{let i=await eE(e,r,t,o.id,a,n,p,u);h.push(i),h.length>=70&&await m()}catch{c({skipped:l.skipped+1})}}};o.description&&await g(`${o.id}-opening`,o.description);let b=new Set;for(;;){if(i())throw Error("History transfer cancelled.");let e=await W.k.messagePage(o.id,n,100);for(let r of e.messages)!b.has(r.id)&&(b.add(r.id),r.deletedForEveryone||await g(r.id,r.body));if(!e.hasMore||!e.nextCursor)break;if(e.nextCursor===n)throw Error("History pagination did not advance.");n=e.nextCursor}await m(),c({conversations:l.conversations+1})}if(!n.hasMore||!n.nextCursor)break;if(n.nextCursor===o)throw Error("Conversation pagination did not advance.");o=n.nextCursor}return c({done:!0}),l}let e0="ELEEVEON_HUB_PAIR_V1";function e1(e){let[r,t]=(0,i.useState)("backgrounds"),[a,o]=(0,i.useState)([]),[s,l]=(0,i.useState)(null),[c,d]=(0,i.useState)(null),[p,u]=(0,i.useState)([]),[h,m]=(0,i.useState)(null),[g,b]=(0,i.useState)(null),[x,f]=(0,i.useState)(null),[v,y]=(0,i.useState)(null),[w,k]=(0,i.useState)(""),[j,S]=(0,i.useState)(""),[N,C]=(0,i.useState)(""),[E,I]=(0,i.useState)(""),[A,z]=(0,i.useState)(""),[M,R]=(0,i.useState)(null),[$,T]=(0,i.useState)(!1),[L,D]=(0,i.useState)(""),P=(0,i.useRef)(!1),O=(0,i.useRef)(null),[U,B]=(0,i.useState)(!1),[F,H]=(0,i.useState)(!1),K=a.find(e=>e.id===h?.id),V=K?.status,q=r=>{if(r===e.userId&&e.currentUserName?.trim())return e.currentUserName.trim();let t=s?.users.find(e=>e.id===r);if(t?.fullName?.trim())return t.fullName.trim();let a=p.find(e=>e.userId===r),n=a?.userName?.trim()||a?.displayName?.trim();return n?n:c?.submittedByUserId===r&&c.organizationName?.trim()?c.organizationName.trim():r===e.userId?"You":`Participant ${r?`${r.slice(0,8)}…`:"Unknown"}`},J=r=>r===e.accountId&&e.currentAccountName?.trim()?e.currentAccountName.trim():s?.accounts.find(e=>e.id===r)?.name||p.find(e=>e.accountId===r)?.accountName||"",Y=p.filter(r=>r.userId!==e.userId),G=new Map;for(let e of Y){let r=G.get(e.userId)||[];r.some(r=>r.id===e.id)||r.push(e),G.set(e.userId,r)}let X=()=>{O.current?.getTracks().forEach(e=>e.stop()),O.current=null,B(!1)};(0,i.useEffect)(()=>(H(!0),()=>{P.current=!0,X(),H(!1)}),[]),(0,i.useEffect)(()=>{let r=`eleeveon:hub:approved-link:${e.accountId}:${e.userId}`;try{let e=sessionStorage.getItem(r);if(!e)return;let t=JSON.parse(e);t?.id&&t?.targetDeviceId&&t?.challenge&&(y(t),f(t))}catch{}},[e.accountId,e.userId]),(0,i.useEffect)(()=>{let r=r=>{"Escape"===r.key&&e.onClose()};document.addEventListener("keydown",r);let t=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",r),document.body.style.overflow=t}},[e.onClose]);let Q=async()=>{if(!e.accountId||!e.userId)return;let r=await eu(e.accountId,e.userId);ew(e.accountId,e.userId,[{...r,accountId:e.accountId,userId:e.userId}]),await W.k.registerKey({id:r.id,encryptionPublicJwk:r.encryptionPublicJwk,signingPublicJwk:r.signingPublicJwk});let[t,a]=await Promise.all([W.k.devices(),W.k.keys(e.conversationId||void 0)]);m({...r,accountId:e.accountId,userId:e.userId}),o(t.devices),u(a.devices)};(0,i.useEffect)(()=>{"devices"===r&&Q().catch(e=>D(e instanceof Error?e.message:"Could not load devices."))},[r,e.accountId,e.userId,e.conversationId]),(0,i.useEffect)(()=>{if("devices"!==r)return;let t=!0;return W.k.directory().then(e=>{t&&l(e)}).catch(()=>{}),e.conversationId?W.k.open(e.conversationId).then(e=>{t&&d(e.conversation)}).catch(()=>{}):d(null),()=>{t=!1}},[r,e.conversationId,e.accountId,e.userId]),(0,i.useEffect)(()=>{if(!g)return;let e=!0,r=async()=>{try{let r=await W.k.linkStatus(g.id);if(!e)return;("approved"===r.status||"completed"===r.status)&&(z("Your device has been approved. Verify the original device fingerprint below, then open a conversation."),Q()),("expired"===r.status||"cancelled"===r.status)&&(z("This pairing request expired. Create another."),b(null))}catch{}};r();let t=window.setInterval(()=>void r(),4e3);return()=>{e=!1,clearInterval(t)}},[g?.id]);let Z=async e=>{T(!0),D("");try{await e()}catch(e){D(e instanceof Error?e.message:"Unable to complete this action.")}finally{T(!1)}},ee=async r=>{let t=r.target.files?.[0];r.target.value="",t&&await Z(async()=>{await e.addUpload(t),z("Background uploaded and synchronized.")})},er=async r=>Z(async()=>{await e.select(r),z("Background saved across your Hub.")}),et=async()=>Z(async()=>{h||await Q();let r=await eu(e.accountId,e.userId);b(await W.k.linkStart(r.id)),z("Open Hub Settings on an existing trusted device. Scan this QR or enter the 10-digit code there.")}),ea=async e=>Z(async()=>{let r=(e||w).replace(/\s/g,"");if(!/^\d{10}$/.test(r))throw Error("Enter the ten-digit code shown on the new device.");let t=await W.k.linkLookup(r);k(r),f(t),y(null),S(""),z("Compare the full fingerprint displayed on the new device before approving.")}),en=async()=>Z(async()=>{if(!h||!x)throw Error("Open a valid pairing request first.");if(v?.id!==x.id){if(j.replace(/\s/g,"").toUpperCase()!==x.targetFingerprint.replace(/\s/g,"").toUpperCase())throw Error("Fingerprint mismatch. Compare it directly with the NEW device before approval.");let r=`${e0}|${x.id}|${x.targetDeviceId}|${x.challenge}|${w}`,t=await eC(e.accountId,e.userId,r);await W.k.linkApprove(x.id,{code:w,sourceDeviceId:h.id,signature:t}),y(x);try{sessionStorage.setItem(`eleeveon:hub:approved-link:${e.accountId}:${e.userId}`,JSON.stringify(x))}catch{}}await Q();let r=(await W.k.keys()).devices.find(e=>e.id===x.targetDeviceId);if(!r||r.fingerprint!==x.targetFingerprint)throw Error("Target encryption key changed. History transfer was stopped.");z("Device approved. Transferring available historical encryption keys…"),P.current=!1;let t=await eZ(e.accountId,e.userId,x.id,r,R,()=>P.current),a=`${e0}|complete|${x.id}|${r.id}|${x.challenge}`,n=await eC(e.accountId,e.userId,a);await W.k.linkComplete(x.id,h.id,n),z(`Linked. ${t.transferred} historical keys delivered; ${t.skipped} unavailable to this source device. You can open the new device.`),y(x)}),ei=async r=>Z(async()=>{if(E.replace(/\s/g,"").toUpperCase()!==r.fingerprint.replace(/\s/g,"").toUpperCase())throw Error("Fingerprint does not match. Confirm it directly with your trusted device.");ew(e.accountId,e.userId,[r]),I(""),C(""),z("Device identity verified on this browser."),window.dispatchEvent(new Event("eleeveon:hub:keys-reviewed"))}),eo=async r=>Z(async()=>{if(!h||h.id===r)throw Error("Current device cannot revoke itself here.");if(!window.confirm("Revoke this device? It will stop receiving NEW encrypted messages. Previously decrypted content cannot be erased remotely."))return;let t=await eC(e.accountId,e.userId,`${e0}|revoke|${r}|${h.id}`);await W.k.revokeDevice(r,h.id,t),await Q(),z("Device revoked.")}),es=e=>{let r=/^eleeveon-hub-link:v1:[0-9a-f-]{36}:(\d{10})$/i.exec(e.trim());return r?.[1]||(/^\d{10}$/.test(e.trim())?e.trim():null)},el=async()=>Z(async()=>{let e=window.BarcodeDetector;if(!e)throw Error("QR scanning is not supported by this browser. Enter the 10-digit code instead.");let r=new e({formats:["qr_code"]}),t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});O.current=t,B(!0);let a=document.createElement("video");a.srcObject=t,a.playsInline=!0,await a.play();let n=Date.now();(async()=>{for(;O.current===t&&Date.now()-n<45e3;){let e=(await r.detect(a).catch(()=>[])).map(e=>es(String(e.rawValue||""))).find(Boolean);if(e){k(e),X(),ea(e);break}await new Promise(e=>setTimeout(e,200))}X()})()}),ec=(0,n.jsx)("div",{className:"hub-settings-backdrop",onMouseDown:r=>{r.target===r.currentTarget&&e.onClose()},children:(0,n.jsxs)("section",{role:"dialog","aria-modal":"true","aria-label":"Hub Settings",className:"hub-settings-dialog",children:[(0,n.jsx)("style",{children:`
    .hub-settings-backdrop{position:fixed;inset:0;z-index:2147480000;display:grid;place-items:center;padding:12px;background:#091d29b8;backdrop-filter:blur(7px)}
    .hub-settings-dialog{width:min(940px,100%);height:min(840px,calc(100dvh - 24px));min-height:0;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--border,#dce4e9);border-radius:19px;background:var(--surface,#fff);color:var(--text,#223340);box-shadow:0 28px 90px #0004;font:inherit;font-size:13px}
    .hub-settings-dialog *{box-sizing:border-box}.hub-settings-head{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid var(--border,#dce4e9)}.hub-settings-head strong{font-size:15px}
    .hub-settings-dialog button,.hub-settings-dialog input{font:inherit;color:inherit}.hub-settings-dialog button{cursor:pointer}.hub-settings-dialog button:disabled{opacity:.45;cursor:not-allowed}.hub-settings-close{border:1px solid var(--border,#ddd);background:var(--surface,#fff);border-radius:9px;width:36px;height:36px;font-size:20px}
    .hub-settings-tabs{display:flex;gap:8px;padding:10px 14px 0}.hub-settings-tabs button{border:0;background:transparent;border-radius:10px;padding:9px 12px;font-weight:700}.hub-settings-tabs .active{background:color-mix(in srgb,var(--dashboard-primary,#128578) 13%,var(--surface,#fff))}
    .hub-settings-body{overflow-y:auto;flex:1;min-height:0;padding:15px}.hub-settings-body p{color:var(--muted,#65737d);line-height:1.6;font-size:12px}.hub-settings-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:12px 0}.hub-settings-actions button,.hub-settings-actions label,.hub-device-card button{border:1px solid var(--border,#dae3e7);background:var(--surface,#fff);padding:9px 12px;border-radius:10px;font-size:12px;font-weight:650}
    .hub-settings-gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(125px,1fr));gap:10px}.hub-background-choice{min-width:0;position:relative;border:1px solid var(--border,#ddd);border-radius:12px;overflow:hidden;background:var(--surface,#fff)}.hub-background-choice.selected{border:2px solid var(--dashboard-primary,#127f74)}.hub-background-choice>button{width:100%;border:0;background:none;text-align:left;padding:0}.hub-background-choice .preview{height:95px;width:100%;display:block;object-fit:cover;background:linear-gradient(120deg,#d3e9e2,#d8d4be)}.hub-background-choice span{display:block;padding:8px 9px;font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.hub-background-choice .remove{position:absolute;right:3px;top:3px;border:0;background:#fff;color:#9d1935;border-radius:8px;padding:4px 8px}
     .hub-person-group{margin:16px 0 12px}.hub-person-group>h3{margin:0 0 5px;font-size:14px;line-height:1.3}.hub-person-group>small{display:block;color:var(--muted,#687880);font-size:12px}.hub-device-owner{font-size:12px;font-weight:650}.hub-device-fingerprint{letter-spacing:.02em}.hub-device-header{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.hub-device-header strong{margin:0}.hub-device-count{font-size:11px;color:var(--muted,#687880)}
    .hub-device-card{border:1px solid var(--border,#dce4e9);border-radius:13px;padding:13px;margin:11px 0;background:var(--surface,#fff)}.hub-device-card strong{display:block;margin-bottom:8px}.hub-device-card small{display:block;color:var(--muted,#687880);margin:5px 0}.hub-device-card code{display:block;word-break:break-all;line-height:1.7;font-size:11px;background:var(--surface-secondary,#f3f6f6);padding:8px;border-radius:8px}.hub-device-card input{width:100%;max-width:480px;margin:8px 0;padding:10px;border:1px solid var(--border,#ddd);border-radius:9px;background:var(--surface,#fff)}.hub-device-card button{margin:5px 6px 0 0}.hub-settings-status{background:color-mix(in srgb,var(--dashboard-primary,#128578) 7%,var(--surface,#fff));border-radius:10px;padding:11px;margin:9px 0;font-size:12px}.hub-settings-error{color:#a52341;border:1px solid #d98293;padding:10px;border-radius:10px;margin:9px 0}.hub-qr{display:inline-grid;padding:14px;border-radius:13px;background:#fff;color:#121212;margin:10px 0}.hub-big-code{font:700 27px ui-monospace,monospace;letter-spacing:3px;word-break:break-word}.hub-settings-warning{padding:10px;border-left:3px solid #b68822;background:color-mix(in srgb,#ffd374 13%,var(--surface,#fff));font-size:12px;margin:10px 0;line-height:1.6}
    @media(max-width:600px){.hub-settings-backdrop{padding:0}.hub-settings-dialog{width:100%;height:100dvh;border-radius:0}.hub-settings-gallery{grid-template-columns:repeat(2,minmax(0,1fr))}}
   `}),(0,n.jsxs)("header",{className:"hub-settings-head",children:[(0,n.jsx)("strong",{children:"Hub settings"}),(0,n.jsx)("button",{className:"hub-settings-close",type:"button",onClick:e.onClose,"aria-label":"Close Hub settings",children:"\xd7"})]}),(0,n.jsxs)("nav",{className:"hub-settings-tabs","aria-label":"Settings categories",children:[(0,n.jsx)("button",{type:"button",className:"backgrounds"===r?"active":"",onClick:()=>t("backgrounds"),children:"Backgrounds"}),(0,n.jsx)("button",{type:"button",className:"devices"===r?"active":"",onClick:()=>t("devices"),children:"Linked devices & keys"})]}),(0,n.jsxs)("div",{className:"hub-settings-body",children:["backgrounds"===r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Choose one background for Chat, Updates, Surveys, Access, and the entire Hub. Public images are discovered automatically at deployment; your private uploads are synchronized across your signed-in devices."}),(0,n.jsxs)("div",{className:"hub-settings-actions",children:[(0,n.jsx)("label",{htmlFor:"hub-upload-background",children:"＋ Upload background"}),(0,n.jsx)("input",{id:"hub-upload-background",type:"file",accept:"image/jpeg,image/png,image/webp,image/gif,image/avif",onChange:ee,style:{display:"none"}}),(0,n.jsx)("button",{type:"button",onClick:()=>void Z(e.reload),disabled:$,children:"↻ Refresh gallery"})]}),(0,n.jsx)("div",{className:"hub-settings-gallery",children:e.images.map(r=>(0,n.jsxs)("div",{className:`hub-background-choice ${r.id===e.selectedId?"selected":""}`,children:[(0,n.jsxs)("button",{type:"button","aria-pressed":r.id===e.selectedId,onClick:()=>void er(r.id),children:[r.url?(0,n.jsx)("img",{src:r.url,className:"preview",loading:"lazy",alt:r.name}):(0,n.jsx)("div",{className:"preview"}),(0,n.jsxs)("span",{children:[r.id===e.selectedId?"✓ ":"",r.name]})]}),"uploaded"===r.source&&(0,n.jsx)("button",{type:"button",className:"remove","aria-label":`Delete ${r.name}`,onClick:()=>void Z(()=>e.removeUpload(r.id)),children:"\xd7"})]},r.id))})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Link a second browser or phone using a temporary QR or numeric code. An existing trusted device must approve it and transfer historical encryption keys before the new device can read older messages."}),(0,n.jsx)("div",{className:"hub-settings-actions",children:(0,n.jsx)("button",{type:"button",disabled:$,onClick:()=>void Z(Q),children:"↻ Refresh devices"})}),h&&(0,n.jsxs)("div",{className:"hub-device-card",children:[(0,n.jsxs)("strong",{children:[K?.deviceName||"This device"," \xb7 ",V||"Checking"]}),(0,n.jsxs)("small",{className:"hub-device-owner",children:[q(e.userId),J(e.accountId)?` \xb7 ${J(e.accountId)}`:""]}),(0,n.jsxs)("small",{children:["This device \xb7 ",h.id]}),(0,n.jsx)("code",{className:"hub-device-fingerprint",children:h.fingerprint})]}),"pending"===V&&(0,n.jsxs)("div",{className:"hub-device-card",children:[(0,n.jsx)("strong",{children:"Get a linking code (new device)"}),(0,n.jsx)("p",{children:"Leave this screen open, then use your original trusted device to approve."}),g?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"hub-qr",children:(0,n.jsx)(eQ.h,{value:g.qrPayload,size:168})}),(0,n.jsx)("div",{className:"hub-big-code",children:g.code}),(0,n.jsxs)("small",{children:["Expires ",new Date(g.expiresAt).toLocaleTimeString()]}),(0,n.jsx)("code",{children:g.targetFingerprint}),(0,n.jsx)("button",{type:"button",onClick:()=>void Z(async()=>{await W.k.linkCancel(g.id),b(null)}),children:"Cancel pairing"})]}):(0,n.jsx)("button",{type:"button",disabled:$,onClick:()=>void et(),children:"Generate QR and numeric code"})]}),"linked"===V&&(0,n.jsxs)("div",{className:"hub-device-card",children:[(0,n.jsx)("strong",{children:"Link another device (original trusted device)"}),(0,n.jsx)("p",{children:"Enter the code shown on your new device. You must verify its full fingerprint before approval."}),(0,n.jsx)("input",{value:w,onChange:e=>k(e.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-digit code",inputMode:"numeric",maxLength:10,"aria-label":"Link code"}),(0,n.jsx)("button",{type:"button",disabled:$||10!==w.length,onClick:()=>void ea(),children:"Find device"}),(0,n.jsx)("button",{type:"button",disabled:$||U,onClick:()=>void el(),children:U?"Scanning…":"Scan QR"}),U&&(0,n.jsx)("button",{type:"button",onClick:X,children:"Stop scan"}),x&&(0,n.jsxs)("div",{className:"hub-device-card",children:[(0,n.jsxs)("strong",{children:["Approve ",x.deviceName]}),(0,n.jsxs)("small",{children:["New device: ",x.targetDeviceId]}),(0,n.jsx)("code",{children:x.targetFingerprint}),(0,n.jsx)("p",{children:"Enter the exact fingerprint shown on the new device. This prevents silently trusting a substituted key."}),v?.id!==x.id&&(0,n.jsx)("input",{"aria-label":"New device fingerprint",value:j,onChange:e=>S(e.target.value),placeholder:"Full fingerprint from the new device"}),(0,n.jsx)("button",{type:"button",disabled:$,onClick:()=>void en(),children:v?.id===x.id?"Retry historical key transfer":"Approve and transfer previous conversations"}),v?.id===x.id&&(0,n.jsx)("button",{type:"button",onClick:()=>{y(null),f(null);try{sessionStorage.removeItem(`eleeveon:hub:approved-link:${e.accountId}:${e.userId}`)}catch{}},children:"Hide completed link"}),M&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("small",{children:[M.conversations," conversations \xb7 ",M.processed," examined \xb7 ",M.transferred," keys delivered \xb7 ",M.skipped," unavailable"]}),$&&!M.done&&(0,n.jsx)("button",{type:"button",onClick:()=>{P.current=!0,z("Stopping history transfer after the current request…")},children:"Stop transfer"})]})]})]}),(0,n.jsx)("div",{className:"hub-settings-warning",children:"Historical access requires an existing device capable of reading those messages. If it has lost its keys, those messages cannot be recovered through the server. Revocation cannot remotely erase messages previously decrypted on another device."}),e.conversationId&&[...G.entries()].map(([r,t])=>(0,n.jsxs)("section",{className:"hub-person-group","aria-label":`Identity keys for ${q(r)}`,children:[(0,n.jsx)("h3",{children:q(r)}),(0,n.jsxs)("small",{children:[J(t[0].accountId)?`${J(t[0].accountId)} \xb7 `:"",t.length," encryption ",1===t.length?"key":"keys"," \xb7 Account user ID: ",r]}),t.map((a,i)=>{let o=ey(e.accountId,e.userId)[a.id]===a.fingerprint;return(0,n.jsxs)("div",{className:"hub-device-card",children:[(0,n.jsxs)("div",{className:"hub-device-header",children:[(0,n.jsx)("strong",{children:a.deviceName?.trim()||`Encryption device ${i+1}`}),(0,n.jsxs)("span",{className:"hub-device-count",children:[i+1," of ",t.length]})]}),(0,n.jsxs)("small",{children:["Device ID: ",a.id]}),(0,n.jsx)("code",{className:"hub-device-fingerprint",children:a.fingerprint}),(0,n.jsx)("small",{children:o?"✓ Verified on this browser":"Not verified here — compare using a separate trusted channel."}),N===a.id?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{value:E,onChange:e=>I(e.target.value),placeholder:"Enter matching fingerprint from other device","aria-label":`Fingerprint for ${q(r)}`}),(0,n.jsx)("button",{type:"button",disabled:$,onClick:()=>void ei(a),children:"Confirm matching fingerprint"}),(0,n.jsx)("button",{type:"button",onClick:()=>{C(""),I("")},children:"Cancel"})]}):(0,n.jsx)("button",{type:"button",onClick:()=>{C(a.id),I("")},children:o?"Reverify key":"Verify participant key"})]},a.id)})]},r)),a.filter(e=>"revoked"!==e.status&&e.id!==h?.id).map(r=>{let t=p.find(e=>e.id===r.id),a=t&&ey(e.accountId,e.userId)[t.id]===t.fingerprint;return(0,n.jsxs)("div",{className:"hub-device-card",children:[(0,n.jsxs)("strong",{children:[r.deviceName||"Additional device"," \xb7 ",r.status]}),(0,n.jsxs)("small",{className:"hub-device-owner",children:[q(e.userId),J(e.accountId)?` \xb7 ${J(e.accountId)}`:""]}),(0,n.jsxs)("small",{children:["Device ID: ",r.id]}),(0,n.jsx)("code",{className:"hub-device-fingerprint",children:r.fingerprint}),t&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("small",{children:a?"✓ Verified here":"Fingerprint not verified on this browser"}),N===r.id?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{value:E,onChange:e=>I(e.target.value),"aria-label":"Full fingerprint to verify",placeholder:"Compare and enter the full fingerprint"}),(0,n.jsx)("button",{type:"button",disabled:$,onClick:()=>void ei(t),children:"Confirm fingerprint"}),(0,n.jsx)("button",{type:"button",onClick:()=>{C(""),I("")},children:"Cancel"})]}):(0,n.jsx)("button",{type:"button",onClick:()=>{C(r.id),I("")},children:a?"Reverify key":"Verify key"}),"linked"===r.status&&"linked"===V&&(0,n.jsx)("button",{type:"button",disabled:$,onClick:()=>void eo(r.id),children:"Revoke device"})]})]},r.id)})]}),A&&(0,n.jsx)("div",{className:"hub-settings-status",role:"status",children:A}),(L||e.error)&&(0,n.jsx)("div",{className:"hub-settings-error",role:"alert",children:L||e.error})]})]})});return F?(0,_.createPortal)(ec,document.body):null}let e2=new Set(["image/png","image/jpeg","image/webp","image/avif","image/gif"]),e5=(e,r)=>`eleeveon:hub:selected-background:${JSON.stringify([e,r])}`;function e4(){let[e,r]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let e=!0,t=t=>{let a=Number(t.detail?.total);e&&Number.isFinite(a)&&r(Math.max(0,Math.floor(a)))},a=async()=>{try{let t=await W.k.unread();e&&r(Math.max(0,Number(t.total)||0))}catch{}};return window.addEventListener("eleeveon:support-unread",t),a(),()=>{e=!1,window.removeEventListener("eleeveon:support-unread",t)}},[]),e}let e3=[{value:"text",label:"Short answer"},{value:"long_text",label:"Long answer"},{value:"single",label:"Choose one"},{value:"multiple",label:"Choose multiple"},{value:"yes_no",label:"Yes / No"},{value:"rating",label:"Rating (1–5)"}],e8=()=>({id:crypto.randomUUID(),label:"",type:"text",required:!0,options:[]});function e7({isDeveloper:e}){let[r,t]=(0,i.useState)([]),[a,o]=(0,i.useState)(null),[s,l]=(0,i.useState)(!1),[c,d]=(0,i.useState)(""),[p,u]=(0,i.useState)(""),[h,m]=(0,i.useState)([{id:"q1",label:"",type:"text",required:!0,options:[]}]),[g,b]=(0,i.useState)(""),[x,f]=(0,i.useState)(""),[v,y]=(0,i.useState)(""),[w,k]=(0,i.useState)(""),[j,S]=(0,i.useState)(""),[N,C]=(0,i.useState)({}),[E,I]=(0,i.useState)(null),[A,z]=(0,i.useState)(!1),[M,R]=(0,i.useState)(""),[$,T]=(0,i.useState)(""),L=(0,i.useCallback)(async()=>{t((await W.k.surveys()).surveys)},[]);(0,i.useEffect)(()=>{L().catch(e=>R(String(e)))},[L]);let D=(e,r)=>m(t=>t.map(t=>t.id===e?{...t,...r}:t));async function P(e){z(!0),R("");try{await W.k.createSurvey({title:c,description:p,questions:h.map(e=>({...e,options:["single","multiple"].includes(e.type)?e.options:void 0})),status:e,targeting:{accounts:g.split(/[,\n]/).map(e=>e.trim()).filter(Boolean),roles:x.split(/[,\n]/).map(e=>e.trim()).filter(Boolean),schoolIds:v.split(/[,\n]/).map(e=>e.trim()).filter(Boolean),branchIds:w.split(/[,\n]/).map(e=>e.trim()).filter(Boolean)},closesAt:j?new Date(j).toISOString():null}),l(!1),d(""),u(""),m([e8()]),T("published"===e?"Survey published":"Draft saved"),await L()}catch(e){R(e instanceof Error?e.message:"Could not save survey")}finally{z(!1)}}async function O(){if(a){z(!0),R("");try{await W.k.submitSurvey(a.id,N),T("Survey submitted"),o(null),C({}),await L()}catch(e){R(e instanceof Error?e.message:"Could not submit survey")}finally{z(!1)}}}async function U(e){z(!0),R("");try{let r=await W.k.surveyResults(e.id);o(e),I({count:r.count,responses:r.responses})}catch(e){R(e instanceof Error?e.message:"Could not load results")}finally{z(!1)}}async function B(e,r){z(!0),R("");try{await W.k.surveyStatus(e.id,r),await L(),T("Survey updated")}catch(e){R(e instanceof Error?e.message:"Could not update survey")}finally{z(!1)}}return(0,n.jsxs)("section",{className:"esv",children:[(0,n.jsx)("style",{children:".esv{color:var(--text,#1e293b);--b:var(--border,#d8e1e5);--surface:var(--surface,#fff);font-size:13px;min-width:0}.esv *{box-sizing:border-box}.esv button,.esv input,.esv textarea,.esv select{font:inherit}.esv button{border:1px solid var(--b);border-radius:10px;padding:10px 12px;background:var(--surface);cursor:pointer;color:inherit}.esv button.primary{background:var(--dashboard-primary,#0d847e);color:white;border-color:transparent}.esv button:disabled{opacity:.5}.esv h3{margin:0;font-size:16px}.esv-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:12px}.esv-grid{display:grid;gap:10px}.esv-card{background:var(--surface);border:1px solid var(--b);padding:14px;border-radius:15px}.esv-card p{font-size:12px;opacity:.75}.esv-actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}.esv-form{display:grid;gap:11px}.esv label{display:grid;gap:6px;font-weight:600}.esv input,.esv textarea,.esv select{padding:11px;border:1px solid var(--b);border-radius:9px;color:inherit;background:var(--surface);max-width:100%}.esv-question{border:1px solid var(--b);border-radius:13px;padding:12px;display:grid;gap:10px}.esv-option{display:flex!important;align-items:center;gap:8px;font-weight:400!important}.esv-option input{width:auto}.esv-msg{padding:12px;border-radius:10px;margin-bottom:10px;background:#e8f2ef;color:#165f52}.esv-error{background:#fff0f1;color:#af2234}.esv-badge{font-size:11px;opacity:.65}.esv-results{overflow-x:auto}.esv-results table{border-collapse:collapse;width:100%}.esv-results td,.esv-results th{border-bottom:1px solid var(--b);padding:8px;text-align:left}@media(max-width:600px){.esv-head{align-items:start}.esv-actions button{flex:1}}"}),M&&(0,n.jsxs)("div",{className:"esv-msg esv-error",role:"alert",children:[M,(0,n.jsx)("button",{onClick:()=>R(""),children:"\xd7"})]}),$&&(0,n.jsxs)("div",{className:"esv-msg",role:"status",children:[$,(0,n.jsx)("button",{onClick:()=>T(""),children:"\xd7"})]}),(0,n.jsxs)("div",{className:"esv-head",children:[(0,n.jsx)("h3",{children:e?"Survey manager":"Surveys"}),e&&!s&&!a&&(0,n.jsx)("button",{className:"primary",onClick:()=>l(!0),children:"+ Create survey"}),(s||a)&&(0,n.jsx)("button",{onClick:()=>{l(!1),o(null),I(null)},children:"← Surveys"})]}),s&&e?(0,n.jsxs)("div",{className:"esv-form esv-card",children:[(0,n.jsxs)("label",{children:["Survey title",(0,n.jsx)("input",{value:c,onChange:e=>d(e.target.value),maxLength:180})]}),(0,n.jsxs)("label",{children:["Description",(0,n.jsx)("textarea",{value:p,onChange:e=>u(e.target.value),rows:2})]}),(0,n.jsx)("div",{className:"esv-grid",children:h.map((e,r)=>(0,n.jsxs)("div",{className:"esv-question",children:[(0,n.jsxs)("div",{className:"esv-head",children:[(0,n.jsxs)("b",{children:["Question ",r+1]}),(0,n.jsx)("button",{disabled:1===h.length,onClick:()=>m(r=>r.filter(r=>r.id!==e.id)),children:"Remove"})]}),(0,n.jsxs)("label",{children:["Question",(0,n.jsx)("input",{value:e.label,onChange:r=>D(e.id,{label:r.target.value})})]}),(0,n.jsxs)("label",{children:["Answer type",(0,n.jsx)("select",{value:e.type,onChange:r=>D(e.id,{type:r.target.value}),children:e3.map(e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value))})]}),["single","multiple"].includes(e.type)&&(0,n.jsxs)("label",{children:["Options (one per line)",(0,n.jsx)("textarea",{rows:4,value:(e.options||[]).join("\n"),onChange:r=>D(e.id,{options:r.target.value.split("\n")})})]}),(0,n.jsxs)("label",{className:"esv-option",children:[(0,n.jsx)("input",{type:"checkbox",checked:e.required,onChange:r=>D(e.id,{required:r.target.checked})}),"Required"]})]},e.id))}),(0,n.jsx)("button",{onClick:()=>m(e=>[...e,e8()]),children:"+ Add question"}),(0,n.jsxs)("label",{children:["Target account UUIDs (optional, comma or newline separated)",(0,n.jsx)("textarea",{rows:2,value:g,onChange:e=>b(e.target.value),placeholder:"Blank = all accounts"})]}),(0,n.jsxs)("label",{children:["Target roles (optional, comma-separated)",(0,n.jsx)("input",{value:x,onChange:e=>f(e.target.value),placeholder:"e.g. super_admin,branch_admin,teacher"})]}),(0,n.jsxs)("label",{children:["Target school IDs (optional)",(0,n.jsx)("textarea",{rows:2,value:v,onChange:e=>y(e.target.value),placeholder:"Blank = any school"})]}),(0,n.jsxs)("label",{children:["Target branch IDs (optional)",(0,n.jsx)("textarea",{rows:2,value:w,onChange:e=>k(e.target.value),placeholder:"Blank = any branch"})]}),(0,n.jsxs)("label",{children:["Closing date (optional)",(0,n.jsx)("input",{type:"datetime-local",value:j,onChange:e=>S(e.target.value)})]}),(0,n.jsxs)("div",{className:"esv-actions",children:[(0,n.jsx)("button",{disabled:A||!c.trim()||h.some(e=>!e.label.trim()),onClick:()=>void P("draft"),children:"Save draft"}),(0,n.jsx)("button",{className:"primary",disabled:A||!c.trim()||h.some(e=>!e.label.trim()),onClick:()=>void P("published"),children:"Publish survey"})]})]}):null,a&&!e?(0,n.jsxs)("div",{className:"esv-form esv-card",children:[(0,n.jsx)("h3",{children:a.title}),(0,n.jsx)("p",{children:a.description}),(a.questions||[]).map(e=>(0,n.jsxs)("div",{className:"esv-question",children:[(0,n.jsxs)("label",{children:[e.label,e.required?" *":""]}),"text"===e.type||"long_text"===e.type?(0,n.jsx)("textarea",{rows:"long_text"===e.type?4:2,value:String(N[e.id]||""),onChange:r=>C(t=>({...t,[e.id]:r.target.value}))}):"multiple"===e.type?(0,n.jsx)(n.Fragment,{children:(e.options||[]).map(r=>(0,n.jsxs)("label",{className:"esv-option",children:[(0,n.jsx)("input",{type:"checkbox",checked:Array.isArray(N[e.id])&&N[e.id].includes(r),onChange:t=>C(a=>({...a,[e.id]:t.target.checked?[...a[e.id]||[],r]:(a[e.id]||[]).filter(e=>e!==r)}))}),r]},r))}):(0,n.jsx)("div",{className:"esv-grid",children:("single"===e.type?e.options||[]:"yes_no"===e.type?["yes","no"]:["1","2","3","4","5"]).map(r=>(0,n.jsxs)("label",{className:"esv-option",children:[(0,n.jsx)("input",{type:"radio",name:e.id,checked:N[e.id]===r,onChange:()=>C(t=>({...t,[e.id]:r}))}),r]},r))})]},e.id)),(0,n.jsx)("button",{className:"primary",disabled:A,onClick:()=>void O(),children:"Submit survey"})]}):null,a&&e&&E?(0,n.jsxs)("div",{className:"esv-card esv-results",children:[(0,n.jsx)("h3",{children:a.title}),(0,n.jsxs)("p",{children:[E.count," response(s)"]}),(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Account"}),a.questions.map(e=>(0,n.jsx)("th",{children:e.label},e.id))]})}),(0,n.jsx)("tbody",{children:E.responses.map((e,r)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:e.accountId}),a.questions.map(r=>(0,n.jsx)("td",{children:Array.isArray(e.answers[r.id])?e.answers[r.id].join(", "):String(e.answers[r.id]??"—")},r.id))]},r))})]})]}):null,a||s?null:(0,n.jsxs)("div",{className:"esv-grid",children:[r.map(r=>(0,n.jsxs)("div",{className:"esv-card",children:[(0,n.jsxs)("div",{className:"esv-head",children:[(0,n.jsx)("b",{children:r.title}),(0,n.jsx)("span",{className:"esv-badge",children:r.completedAt?"Completed":r.status})]}),(0,n.jsx)("p",{children:r.description}),(0,n.jsx)("div",{className:"esv-actions",children:e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{onClick:()=>void U(r),children:"View responses"}),(0,n.jsx)("button",{onClick:()=>void B(r,"published"===r.status?"closed":"published"),children:"published"===r.status?"Close":"Publish"})]}):(0,n.jsx)("button",{disabled:!!r.completedAt||A,className:"primary",onClick:()=>{o(r),C({})},children:r.completedAt?"Completed":"Take survey"})})]},r.id)),!r.length&&(0,n.jsx)("div",{className:"esv-card",children:"No surveys available."})]})]})}var e6=t(59816),e9=t(93983);let re=["low","normal","high","urgent"],rr=["owner","super_admin","admin","branch_admin","teacher","student","accountant","parent"],rt=["update","maintenance","security","billing","general"],ra=["stable","preview","security"];function rn(e){if(!e.trim())return null;let r=new Date(e);return Number.isNaN(r.getTime())?null:r.toISOString()}function ri(e){return null==e?"":String(e).trim()}function ro(){return"u">typeof crypto&&"function"==typeof crypto.randomUUID?crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function rs(e){if(!e)return"Recently";let r=new Date(e);return Number.isNaN(r.getTime())?"Recently":r.toLocaleString("en-GH",{dateStyle:"medium",timeStyle:"short"})}function rl(e){return ri(e).replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function rc(e,r){let t=e?.[r];return null==t||""===String(t).trim()?"":String(t)}function rd({navigate:e}){let{accountId:r,account:t,user:a}=(0,g.F)(),{activeMembership:o}=(0,v.A)(),{activeSchoolId:s,activeBranchId:l,activeSchool:c,activeBranch:d}=(0,x.c)(),p=(0,e9.ss)(),u=ri(a?.id),h=function(e,r){let[t,a]=(0,i.useState)([]),[n,o]=(0,i.useState)([]),[s,l]=(0,i.useState)("gradient"),[c,d]=(0,i.useState)(""),p=(0,i.useRef)(0),u=`${e}|${r}`,h=(0,i.useCallback)(async()=>{let t=++p.current;try{let e=await fetch("/api/hub/backgrounds",{cache:"no-store"});if(!e.ok)throw Error("Cannot load the bundled Hub backgrounds.");let r=await e.json(),n=(Array.isArray(r.images)?r.images:[]).filter(e=>"string"==typeof e.id&&"string"==typeof e.name&&"string"==typeof e.url&&e.url.startsWith("/chat-backgroundimages/")).map(e=>({id:e.id,name:e.name,url:e.url,source:"bundled"}));t===p.current&&a(n)}catch(e){t===p.current&&d(e instanceof Error?e.message:"Cannot load public backgrounds.")}if(e&&r)try{let a=await W.k.backgrounds();if(t!==p.current)return;o(a.uploads.filter(e=>!!e.url).map(e=>({id:`personal:${e.id}`,name:e.name,url:e.url,source:"uploaded"})));let n="default"===a.selected.kind?"gradient":"builtin"===a.selected.kind?`public:${a.selected.key}`:`personal:${a.selected.key}`;l(n);try{localStorage.setItem(e5(e,r),n)}catch{}d("")}catch(e){t===p.current&&d(e instanceof Error?e.message:"Unable to synchronize Hub appearance.")}},[e,r]);(0,i.useEffect)(()=>{let t="gradient";try{t=localStorage.getItem(e5(e,r))||"gradient"}catch{}l(t),h()},[u,h]),(0,i.useEffect)(()=>{let e=()=>{"visible"===document.visibilityState&&navigator.onLine&&h()};document.addEventListener("visibilitychange",e),window.addEventListener("focus",e);let r=window.setInterval(e,48e4);return()=>{document.removeEventListener("visibilitychange",e),window.removeEventListener("focus",e),clearInterval(r)}},[h]);let m=(0,i.useCallback)(async t=>{if(!e||!r)throw Error("Sign in before saving your Hub background.");let a="default",n="";if(t.startsWith("public:"))a="builtin",n=t.slice(7);else if(t.startsWith("personal:"))a="personal",n=t.slice(9);else if("gradient"!==t)throw Error("Unknown Hub background.");await W.k.backgroundSelect(a,n),l(t);try{localStorage.setItem(e5(e,r),t)}catch{}},[e,r]),g=(0,i.useCallback)(async e=>{if(!e2.has(e.type)||!e.size||e.size>6291456)throw Error("Choose a PNG, JPEG, WebP, AVIF or GIF under 6 MB.");let r=await W.k.backgroundUpload(e);await W.k.backgroundSelect("personal",r.background.id),await h()},[h]),b=(0,i.useCallback)(async e=>{e.startsWith("personal:")&&(await W.k.backgroundRemove(e.slice(9)),await h())},[h]),x=(0,i.useMemo)(()=>[{id:"gradient",name:"Soft colour",url:"",source:"bundled"},...t,...n],[t,n]),f=x.find(e=>e.id===s)||x[0],v=f.url?`url(${JSON.stringify(f.url)})`:"linear-gradient(125deg,#c0e7e4,#b5c7de 45%,#e6c9b3)";return{images:x,selectedId:f.id,imageCss:v,select:m,addUpload:g,removeUpload:b,reload:h,error:c,setError:d}}(ri(r),u),[m,b]=(0,i.useState)(!1),[f,y]=(0,i.useState)(""),w=e=>{y(e||""),b(!0)},k=ri(o?.id),S=o?.role??t?.role??a?.role??null,N="developer"===S||"platform_team"===S,[C,E]=(0,i.useState)(N?"inbox":"support"),[I,A]=(0,i.useState)([]),[z,M]=(0,i.useState)([]),[R,$]=(0,i.useState)([]),[T,L]=(0,i.useState)("general"),[D,P]=(0,i.useState)("normal"),[O,U]=(0,i.useState)(""),[B,F]=(0,i.useState)(""),[H,K]=(0,i.useState)(""),[_,V]=(0,i.useState)(""),[q,J]=(0,i.useState)([]),[Y,G]=(0,i.useState)(""),[X,Q]=(0,i.useState)(""),[Z,ee]=(0,i.useState)(!1),[er,et]=(0,i.useState)(!0),[ea,en]=(0,i.useState)(""),[ei,eo]=(0,i.useState)(""),[es,el]=(0,i.useState)(""),[ec,ed]=(0,i.useState)("stable"),[ep,eu]=(0,i.useState)(""),[eh,em]=(0,i.useState)(""),[eg,eb]=(0,i.useState)(""),[ex,ef]=(0,i.useState)([]),[ev,ey]=(0,i.useState)([]),[ew,ek]=(0,i.useState)([]),[ej,eS]=(0,i.useState)(""),[eN,eC]=(0,i.useState)("open"),[eE,eI]=(0,i.useState)(""),[eA,ez]=(0,i.useState)(""),[eM,eR]=(0,i.useState)("suggestion"),[e$,eT]=(0,i.useState)(""),[eL,eD]=(0,i.useState)(""),[eP,eO]=(0,i.useState)(!1),[eU,eB]=(0,i.useState)(null);(0,i.useEffect)(()=>{E(N?"inbox":"support")},[N]);let eF=async()=>{if(!r&&!N)return;let[e,t,a,n,i,o]=await Promise.all([j.db.platformAnnouncements.toArray(),j.db.platformReleases.toArray(),j.db.platformReleaseNotes.toArray(),N?j.db.platformAnnouncementReceipts.toArray():j.db.platformAnnouncementReceipts.where("accountId").equals(r).toArray(),N?j.db.platformFeedback.toArray():j.db.platformFeedback.where("accountId").equals(r).toArray(),N?j.db.platformFeedbackMessages.toArray():j.db.platformFeedbackMessages.where("accountId").equals(r).toArray()]),s=e.sort((e,r)=>new Date(r.publishAt??r.updatedAt??r.createdAt??0).getTime()-new Date(e.publishAt??e.updatedAt??e.createdAt??0).getTime());A(N?s:s.filter(e=>(function(e,r){if("published"!==e.status)return!1;let t=Date.now();return!(e.publishAt&&new Date(e.publishAt).getTime()>t||e.expiresAt&&new Date(e.expiresAt).getTime()<t||e.targetRoles?.length&&r&&!e.targetRoles.includes(r))})(e,S))),M(t.sort((e,r)=>new Date(r.publishedAt??r.updatedAt??r.createdAt??0).getTime()-new Date(e.publishedAt??e.updatedAt??e.createdAt??0).getTime())),$(a.sort((e,r)=>Number(e.displayOrder??0)-Number(r.displayOrder??0))),ef(n);let l=i.sort((e,r)=>Number(r.lastServerMessageAt??r.submittedAt)-Number(e.lastServerMessageAt??e.submittedAt));ey(l),ek(o.sort((e,r)=>new Date(e.createdAt).getTime()-new Date(r.createdAt).getTime())),N&&l.length&&eS(e=>e&&l.some(r=>r.id===e)?e:l[0].id)};(0,i.useEffect)(()=>{eF()},[r,S,N]);let eH=(0,i.useMemo)(()=>new Map(ex.map(e=>[e.announcementId,e])),[ex]),eK=I.filter(e=>!eH.get(e.id)?.readAt).length,e_=(0,i.useMemo)(()=>{let e=new Map;return R.forEach(r=>{let t=e.get(r.releaseId)??[];t.push(r),e.set(r.releaseId,t)}),e},[R]),eW=(0,i.useMemo)(()=>z.filter(e=>N||"published"===e.status),[N,z]),eV=(0,i.useMemo)(()=>ev.find(e=>e.id===ej),[ev,ej]);(0,i.useMemo)(()=>ew.filter(e=>e.feedbackId===ej),[ew,ej]),(0,i.useMemo)(()=>{let e=eE.trim().toLowerCase();return ev.filter(r=>{if(!("all"===eN||("open"===eN?!["resolved","closed"].includes(r.status):r.status===eN)))return!1;if(!e)return!0;let t=r.metadata;return[r.subject,r.message,r.type,r.status,r.priority,r.accountId,r.schoolId,r.branchId,r.userId,rc(t,"schoolName"),rc(t,"branchName"),rc(t,"role")].filter(Boolean).join(" ").toLowerCase().includes(e)})},[eN,eE,ev]),(0,i.useMemo)(()=>{let e=ev.filter(e=>!["resolved","closed"].includes(e.status)).length,r=ev.filter(e=>"submitted"===e.status).length;return{open:e,newCount:r,urgent:ev.filter(e=>"urgent"===e.priority||"high"===e.priority).length,resolved:ev.filter(e=>"resolved"===e.status).length}},[ev]);let eq=async e=>{if(!r)return;let t=eH.get(e.id),a={accountId:r,announcementId:e.id,userId:u||null,membershipId:k||null,deliveredAt:t?.deliveredAt??new Date().toISOString(),readAt:new Date().toISOString(),acknowledgedAt:t?.acknowledgedAt??null,dismissedAt:t?.dismissedAt??null};if(t)await (0,e6.Po)("platformAnnouncementReceipts",t.id,a);else{let e={id:ro(),...a};await (0,e6.oJ)("platformAnnouncementReceipts",e)}await eF()},eJ=async e=>{if(!N||!O.trim()||!B.trim())return void eB("Add an announcement title and message.");try{eO(!0),eB(null);let r=new Date().toISOString(),t="published"===e?r:rn(Y),a={id:ro(),key:`portal-${Date.now().toString(36)}`,type:T,priority:D,title:O.trim(),body:B.trim(),actionLabel:H.trim()||null,actionUrl:_.trim()||null,locale:"en-GH",targetRoles:q.length?q:null,targetCountries:null,targetPlanIds:null,targetDeploymentModes:null,minimumAppVersion:null,maximumAppVersion:null,requiresAcknowledgement:Z,dismissible:er,status:e,publishAt:t,expiresAt:rn(X),createdAt:r,updatedAt:r};await j.db.platformAnnouncements.put(a),U(""),F(""),K(""),V(""),J([]),G(""),Q(""),ee(!1),et(!0),eB("published"===e?"Announcement published in the local platform cache.":"scheduled"===e?"Announcement scheduled in the local platform cache.":"Announcement saved as a draft."),await eF()}catch(e){eB(e instanceof Error?e.message:"Could not save the announcement.")}finally{eO(!1)}},eY=async(e,r)=>{if(!N)return;let t=new Date().toISOString();await j.db.platformAnnouncements.put({...e,status:r,publishAt:"published"===r?e.publishAt??t:e.publishAt,updatedAt:t}),await eF()},eG=async e=>{if(!N||!ea.trim()||!ei.trim()||!eg.trim())return void eB("Add a version, release title and release notes.");try{eO(!0),eB(null);let r=new Date().toISOString(),t=ro(),a=Number.parseInt(ea.trim().replace(/^v/i,"").split(".")[0]||"0",10),n={id:t,version:ea.trim(),majorVersion:Number.isFinite(a)?a:0,channel:ec,title:ei.trim(),summary:es.trim()||null,status:e,minimumSupportedVersion:ep.trim()||null,publishedAt:"published"===e?r:null,metadata:{createdFrom:"eleeveon_center",createdByRole:S,createdByUserId:u||null},createdAt:r,updatedAt:r},i={id:ro(),releaseId:t,locale:"en-GH",title:eh.trim()||ei.trim(),body:eg.trim(),displayOrder:0,createdAt:r,updatedAt:r};await j.db.transaction("rw",j.db.platformReleases,j.db.platformReleaseNotes,async()=>{await j.db.platformReleases.put(n),await j.db.platformReleaseNotes.put(i)}),en(""),eo(""),el(""),eu(""),em(""),eb(""),eB("published"===e?"Release published in the local platform cache.":"Release saved as a draft."),await eF()}catch(e){eB(e instanceof Error?e.message:"Could not save the release.")}finally{eO(!1)}},eQ=async(e,r)=>{if(!N)return;let t=new Date().toISOString();await j.db.platformReleases.put({...e,status:r,publishedAt:"published"===r?e.publishedAt??t:e.publishedAt,updatedAt:t}),await eF()};eV?.metadata,eV?.deviceInfo;let eZ=e4(),e0=N?"inbox":"support",e3=(0,n.jsxs)("div",{className:"hub-nav-with-settings",children:[(0,n.jsxs)("nav",{className:"center-inline-tabs","aria-label":"Eleeveon Center sections",children:[(0,n.jsxs)("button",{type:"button",className:C===e0?"active":"","aria-current":C===e0?"page":void 0,onClick:()=>E(e0),children:["Chat",eZ>0?` \xb7 ${eZ>99?"99+":eZ}`:""]}),(0,n.jsx)("button",{type:"button",className:"feedback"===C?"active":"","aria-current":"feedback"===C?"page":void 0,onClick:()=>E("feedback"),children:"Surveys"}),(0,n.jsxs)("button",{type:"button",className:"updates"===C?"active":"","aria-current":"updates"===C?"page":void 0,onClick:()=>E("updates"),children:["Updates",eK>0?` \xb7 ${eK}`:""]}),(0,n.jsx)("button",{type:"button",className:"access"===C?"active":"","aria-current":"access"===C?"page":void 0,onClick:()=>E("access"),children:"Access"}),N&&(0,n.jsxs)("select",{className:"center-inline-more","aria-label":"More platform sections",value:"communications"===C||"releases"===C?C:"",onChange:e=>{e.target.value&&E(e.target.value)},children:[(0,n.jsx)("option",{value:"",children:"More ▾"}),(0,n.jsx)("option",{value:"communications",children:"Communications"}),(0,n.jsx)("option",{value:"releases",children:"Releases"})]})]}),(0,n.jsx)("button",{type:"button",className:"hub-settings-gear",title:"Hub settings","aria-label":"Hub settings",onClick:()=>w(),children:"⚙"})]}),e8=(0,n.jsxs)("select",{className:"center-mobile-chat-switch","aria-label":"Eleeveon Center section",value:C,onChange:e=>E(e.target.value),children:[(0,n.jsxs)("option",{value:e0,children:["Chat",eZ>0?` (${eZ})`:""]}),(0,n.jsx)("option",{value:"feedback",children:"Surveys"}),(0,n.jsx)("option",{value:"updates",children:"Updates"}),(0,n.jsx)("option",{value:"access",children:"Access"}),N&&(0,n.jsx)("option",{value:"communications",children:"Communications"}),N&&(0,n.jsx)("option",{value:"releases",children:"Releases"})]});return(0,n.jsxs)("main",{className:"center-module hub-module",style:{"--hub-scene":h.imageCss},children:[(0,n.jsx)("style",{children:rp}),m&&(0,n.jsx)(e1,{onClose:()=>b(!1),conversationId:f,accountId:ri(r),userId:u,currentUserName:ri(a?.fullName||a?.name||[a?.firstName,a?.lastName].filter(Boolean).join(" ")),currentAccountName:ri(t?.name||t?.displayName),images:h.images,selectedId:h.selectedId,select:h.select,addUpload:h.addUpload,removeUpload:h.removeUpload,reload:h.reload,error:h.error}),(0,n.jsx)("div",{className:"center-shell",children:(0,n.jsxs)("div",{className:"center-work-area",children:[C!==e0&&(0,n.jsx)("header",{className:"center-section-header",children:e3}),"inbox"===C&&N?(0,n.jsx)(eX,{navigation:e3,onOpenHubSettings:w,mobileNavigation:e8,isDeveloper:!0,accountId:ri(r),schoolId:s,branchId:l,userId:u,membershipId:k,role:S,schoolName:c?.name,branchName:d?.name}):null,"communications"===C&&N?(0,n.jsxs)("section",{className:"center-publisher-layout",children:[(0,n.jsxs)("article",{className:"center-card",children:[(0,n.jsx)("span",{className:"kicker",children:"Outbound communication"}),(0,n.jsx)("h3",{children:"Create platform announcement"}),(0,n.jsx)("p",{children:"Publish notices, maintenance messages, security alerts, billing messages or general platform communication to selected portal roles."}),(0,n.jsxs)("div",{className:"center-form-grid",children:[(0,n.jsxs)("label",{children:["Type",(0,n.jsx)("select",{value:T,onChange:e=>L(e.target.value),children:rt.map(e=>(0,n.jsx)("option",{value:e,children:rl(e)},e))})]}),(0,n.jsxs)("label",{children:["Priority",(0,n.jsx)("select",{value:D,onChange:e=>P(e.target.value),children:re.map(e=>(0,n.jsx)("option",{value:e,children:rl(e)},e))})]})]}),(0,n.jsxs)("label",{children:["Title",(0,n.jsx)("input",{value:O,onChange:e=>U(e.target.value),placeholder:"Short announcement title"})]}),(0,n.jsxs)("label",{children:["Message",(0,n.jsx)("textarea",{rows:6,value:B,onChange:e=>F(e.target.value),placeholder:"Write the message users should receive."})]}),(0,n.jsxs)("div",{className:"center-form-grid",children:[(0,n.jsxs)("label",{children:["Action label",(0,n.jsx)("input",{value:H,onChange:e=>K(e.target.value),placeholder:"Open reports"})]}),(0,n.jsxs)("label",{children:["Action route / URL",(0,n.jsx)("input",{value:_,onChange:e=>V(e.target.value),placeholder:"#reports or URL"})]})]}),(0,n.jsxs)("div",{className:"center-audience",children:[(0,n.jsx)("span",{children:"Audience"}),(0,n.jsx)("small",{children:"Leave every role unchecked to target all user roles."}),(0,n.jsx)("div",{className:"center-role-options",children:rr.map(e=>(0,n.jsxs)("label",{className:"center-check",children:[(0,n.jsx)("input",{type:"checkbox",checked:q.includes(e),onChange:()=>{J(r=>r.includes(e)?r.filter(r=>r!==e):[...r,e])}}),(0,n.jsx)("span",{children:rl(e)})]},e))})]}),(0,n.jsxs)("div",{className:"center-form-grid",children:[(0,n.jsxs)("label",{children:["Schedule for",(0,n.jsx)("input",{type:"datetime-local",value:Y,onChange:e=>G(e.target.value)})]}),(0,n.jsxs)("label",{children:["Expires",(0,n.jsx)("input",{type:"datetime-local",value:X,onChange:e=>Q(e.target.value)})]})]}),(0,n.jsxs)("div",{className:"center-inline-checks",children:[(0,n.jsxs)("label",{className:"center-check",children:[(0,n.jsx)("input",{type:"checkbox",checked:Z,onChange:e=>ee(e.target.checked)}),(0,n.jsx)("span",{children:"Require acknowledgement"})]}),(0,n.jsxs)("label",{className:"center-check",children:[(0,n.jsx)("input",{type:"checkbox",checked:er,onChange:e=>et(e.target.checked)}),(0,n.jsx)("span",{children:"Allow dismiss"})]})]}),(0,n.jsxs)("div",{className:"center-publish-actions",children:[(0,n.jsx)("button",{type:"button",disabled:eP,onClick:()=>void eJ("draft"),children:"Save draft"}),(0,n.jsx)("button",{type:"button",disabled:eP||!Y,onClick:()=>void eJ("scheduled"),children:"Schedule"}),(0,n.jsx)("button",{type:"button",className:"primary",disabled:eP,onClick:()=>void eJ("published"),children:"Publish now"})]}),eU?(0,n.jsx)("div",{className:"notice",children:eU}):null]}),(0,n.jsxs)("article",{className:"center-card",children:[(0,n.jsx)("span",{className:"kicker",children:"Announcement manager"}),(0,n.jsx)("h3",{children:"Platform communications"}),(0,n.jsx)("div",{className:"center-manager-list",children:I.length?I.map(e=>(0,n.jsxs)("div",{className:"center-manager-item",children:[(0,n.jsxs)("div",{className:"center-manager-heading",children:[(0,n.jsx)("strong",{children:e.title}),(0,n.jsx)("span",{className:"center-badge",children:rl(e.status)})]}),(0,n.jsx)("p",{children:e.body}),(0,n.jsxs)("small",{children:[rl(e.type)," \xb7 ",rl(e.priority)," \xb7 ",e.targetRoles?.length?e.targetRoles.map(rl).join(", "):"All roles"]}),(0,n.jsxs)("div",{className:"center-manager-actions",children:["published"!==e.status?(0,n.jsx)("button",{type:"button",onClick:()=>void eY(e,"published"),children:"Publish"}):null,"published"===e.status?(0,n.jsx)("button",{type:"button",onClick:()=>void eY(e,"withdrawn"),children:"Withdraw"}):null,"withdrawn"===e.status?(0,n.jsx)("button",{type:"button",onClick:()=>void eY(e,"draft"),children:"Restore draft"}):null]})]},e.id)):(0,n.jsx)("p",{children:"No platform communications yet."})})]})]}):null,"releases"===C&&N?(0,n.jsxs)("section",{className:"center-publisher-layout",children:[(0,n.jsxs)("article",{className:"center-card",children:[(0,n.jsx)("span",{className:"kicker",children:"Product release"}),(0,n.jsx)("h3",{children:"Publish an Eleeveon update"}),(0,n.jsx)("p",{children:"Create version information and user-facing release notes for the platform update."}),(0,n.jsxs)("div",{className:"center-form-grid",children:[(0,n.jsxs)("label",{children:["Version",(0,n.jsx)("input",{value:ea,onChange:e=>en(e.target.value),placeholder:"1.3.0"})]}),(0,n.jsxs)("label",{children:["Channel",(0,n.jsx)("select",{value:ec,onChange:e=>ed(e.target.value),children:ra.map(e=>(0,n.jsx)("option",{value:e,children:rl(e)},e))})]})]}),(0,n.jsxs)("label",{children:["Release title",(0,n.jsx)("input",{value:ei,onChange:e=>eo(e.target.value),placeholder:"Reports and assessment improvements"})]}),(0,n.jsxs)("label",{children:["Summary",(0,n.jsx)("textarea",{rows:3,value:es,onChange:e=>el(e.target.value),placeholder:"A concise overview of this release."})]}),(0,n.jsxs)("div",{className:"center-form-grid",children:[(0,n.jsxs)("label",{children:["Minimum supported version",(0,n.jsx)("input",{value:ep,onChange:e=>eu(e.target.value),placeholder:"1.1.0"})]}),(0,n.jsxs)("label",{children:["Release-note title",(0,n.jsx)("input",{value:eh,onChange:e=>em(e.target.value),placeholder:"What changed"})]})]}),(0,n.jsxs)("label",{children:["Release notes",(0,n.jsx)("textarea",{rows:8,value:eg,onChange:e=>eb(e.target.value),placeholder:"• Improved reports\n• Fixed offline behavior\n• Added new settings"})]}),(0,n.jsxs)("div",{className:"center-publish-actions",children:[(0,n.jsx)("button",{type:"button",disabled:eP,onClick:()=>void eG("draft"),children:"Save draft"}),(0,n.jsx)("button",{type:"button",className:"primary",disabled:eP,onClick:()=>void eG("published"),children:"Publish release"})]}),eU?(0,n.jsx)("div",{className:"notice",children:eU}):null]}),(0,n.jsxs)("article",{className:"center-card",children:[(0,n.jsx)("span",{className:"kicker",children:"Release manager"}),(0,n.jsx)("h3",{children:"Versions and release notes"}),(0,n.jsx)("div",{className:"center-manager-list",children:z.length?z.map(e=>{let r=e_.get(e.id)??[];return(0,n.jsxs)("div",{className:"center-manager-item",children:[(0,n.jsxs)("div",{className:"center-manager-heading",children:[(0,n.jsxs)("strong",{children:[e.version," \xb7 ",e.title]}),(0,n.jsx)("span",{className:"center-badge",children:rl(e.status)})]}),e.summary?(0,n.jsx)("p",{children:e.summary}):null,(0,n.jsxs)("small",{children:[rl(e.channel),e.minimumSupportedVersion?` \xb7 Minimum ${e.minimumSupportedVersion}`:"",e.publishedAt?` \xb7 ${rs(e.publishedAt)}`:""]}),r.map(e=>(0,n.jsxs)("div",{className:"center-release-note",children:[(0,n.jsx)("strong",{children:e.title}),(0,n.jsx)("p",{children:e.body})]},e.id)),(0,n.jsxs)("div",{className:"center-manager-actions",children:["published"!==e.status?(0,n.jsx)("button",{type:"button",onClick:()=>void eQ(e,"published"),children:"Publish"}):null,"published"===e.status?(0,n.jsx)("button",{type:"button",onClick:()=>void eQ(e,"withdrawn"),children:"Withdraw"}):null,"withdrawn"===e.status?(0,n.jsx)("button",{type:"button",onClick:()=>void eQ(e,"draft"),children:"Restore draft"}):null]})]},e.id)}):(0,n.jsx)("p",{children:"No releases created yet."})})]})]}):null,"updates"===C?(0,n.jsxs)("section",{className:"center-list",children:[!N&&eW.length?eW.map(e=>{let r=e_.get(e.id)??[];return(0,n.jsxs)("article",{className:"center-card center-release-card",children:[(0,n.jsxs)("header",{children:[(0,n.jsx)("span",{children:"Product update"}),(0,n.jsx)("small",{children:rs(e.publishedAt??e.updatedAt??e.createdAt)})]}),(0,n.jsxs)("h3",{children:[e.version," \xb7 ",e.title]}),e.summary?(0,n.jsx)("p",{children:e.summary}):null,r.length?(0,n.jsx)("div",{className:"center-user-release-notes",children:r.map(e=>(0,n.jsxs)("div",{children:[(0,n.jsx)("strong",{children:e.title}),(0,n.jsx)("p",{children:e.body})]},e.id))}):null]},`release-${e.id}`)}):null,I.length?I.map(r=>{let t=eH.get(r.id);return(0,n.jsxs)("article",{className:"center-card",children:[(0,n.jsxs)("header",{children:[(0,n.jsx)("span",{children:r.type}),(0,n.jsx)("small",{children:rs(r.publishAt??r.createdAt)})]}),(0,n.jsx)("h3",{children:r.title}),(0,n.jsx)("p",{children:r.body}),(0,n.jsxs)("footer",{children:[N?null:t?.readAt?(0,n.jsx)("span",{className:"read-state",children:"Read"}):(0,n.jsx)("button",{type:"button",onClick:()=>void eq(r),children:"Mark as read"}),r.actionUrl?(0,n.jsx)("button",{type:"button",className:"primary",onClick:()=>{r.actionUrl?.startsWith("#")&&e(r.actionUrl.slice(1))},children:r.actionLabel??"Open"}):null]})]},r.id)}):(0,n.jsx)("div",{className:"center-empty",children:"No current announcements."})]}):null,null,"feedback"===C?(0,n.jsx)(e7,{isDeveloper:N}):null,"support"!==C||N?null:(0,n.jsx)(eX,{navigation:e3,onOpenHubSettings:w,mobileNavigation:e8,isDeveloper:!1,accountId:ri(r),schoolId:s,branchId:l,userId:u,membershipId:k,role:S,schoolName:c?.name,branchName:d?.name}),"access"===C?(0,n.jsxs)("section",{className:"center-grid",children:[(0,n.jsxs)("article",{className:"center-card",children:[(0,n.jsx)("span",{className:"kicker",children:N?"Current platform context":"Current access"}),(0,n.jsx)("h3",{children:N?rl(S):p?.snapshot?.source??"Workspace access"}),(0,n.jsxs)("div",{className:"facts",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"Status"}),(0,n.jsx)("strong",{children:p?.status??(N?"Platform role":"Unknown")})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"Deployment"}),(0,n.jsx)("strong",{children:p?.deploymentMode??"Not resolved"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"Sync policy"}),(0,n.jsx)("strong",{children:p?.syncPolicy??"Not resolved"})]})]})]}),N?(0,n.jsxs)("article",{className:"center-card",children:[(0,n.jsx)("span",{className:"kicker",children:"Support cache"}),(0,n.jsx)("h3",{children:"Local platform records"}),(0,n.jsx)("p",{children:"This developer view reads all feedback and feedback messages currently available in the local platform cache. Server visibility still depends on what your sync/bootstrap layer provides to the developer account."}),(0,n.jsxs)("div",{className:"facts",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"Feedback"}),(0,n.jsx)("strong",{children:ev.length})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"Messages"}),(0,n.jsx)("strong",{children:ew.length})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"Announcements"}),(0,n.jsx)("strong",{children:I.length})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"Releases"}),(0,n.jsx)("strong",{children:z.length})]})]})]}):(0,n.jsxs)("article",{className:"center-card",children:[(0,n.jsx)("span",{className:"kicker",children:"Upgrade"}),(0,n.jsx)("h3",{children:"Add capacity or features"}),(0,n.jsx)("p",{children:"Upgrade controls will use the subscription module available to the account owner. Other roles can send a billing question from Feedback."}),(0,n.jsx)("button",{type:"button",onClick:()=>{eR("billing_question"),E("feedback")},children:"Ask about access"})]})]}):null]})})]})}let rp=`

/* Shared scenic background for every Hub section; no chat-only overrides. */
.hub-module .center-work-area{background-image:var(--hub-scene);background-size:cover;background-position:center;background-attachment:local}
.hub-module .center-card{background:color-mix(in srgb,var(--surface,#fff) 94%,transparent)}
.hub-nav-with-settings{display:flex;align-items:center;width:100%;min-width:0;gap:5px}
.hub-nav-with-settings .center-inline-tabs{flex:1;width:auto;min-width:0}
.hub-settings-gear{flex:0 0 auto;display:grid;place-items:center;width:34px;height:34px;border:1px solid var(--border,#dce6e8);border-radius:10px;background:var(--surface,#fff);color:var(--text,#30414f);font-size:19px;cursor:pointer}
.hub-settings-gear:hover{background:color-mix(in srgb,var(--dashboard-primary,#147d79) 9%,var(--surface,#fff))}
/* Inline navigation occupies the existing conversation-list header.
   There is no separate Center rail or phone selector row. */
.center-shell{display:block;width:100%;height:clamp(400px,calc(100dvh - 143px),1100px);min-height:0;overflow:hidden}
.center-work-area{width:100%;height:100%;min-width:0;min-height:0;overflow:hidden}
.center-work-area:has(.center-section-header){overflow-y:auto;overscroll-behavior:contain}
.center-section-header{display:flex;align-items:center;min-height:48px;margin-bottom:8px;padding:5px 9px;border:1px solid var(--border,#dce6e8);border-radius:14px;background:var(--surface,#fff)}
.center-inline-tabs{display:flex;align-items:center;min-width:0;width:100%;gap:3px;white-space:nowrap;overflow-x:auto;scrollbar-width:none;overscroll-behavior-x:contain;-webkit-overflow-scrolling:touch}
.center-inline-tabs::-webkit-scrollbar{display:none}
.center-inline-tabs button,.center-inline-tabs select{flex:0 0 auto;min-height:32px;padding:7px 9px;background:transparent;border:1px solid transparent;border-radius:10px;color:var(--text,#30414f);font-size:11px;font-weight:690;line-height:1.25;cursor:pointer}
.center-inline-tabs button:hover,.center-inline-tabs select:hover{background:color-mix(in srgb,var(--dashboard-primary,#147d79) 7%,var(--surface,#fff))}
.center-inline-tabs button.active{color:var(--dashboard-primary,#117e77);background:color-mix(in srgb,var(--dashboard-primary,#147d79) 12%,var(--surface,#fff));border-color:color-mix(in srgb,var(--dashboard-primary,#147d79) 18%,var(--border,#dde9e9))}
.center-inline-tabs select{max-width:68px;appearance:auto;padding-right:4px}
.center-mobile-chat-switch{max-width:78px;min-width:60px;font-size:11px;padding:7px 3px;border:1px solid var(--border,#dce6e8);border-radius:9px;background:var(--surface,#fff);color:var(--text,#30414f)}
@media(max-width:680px){
 .center-shell{height:clamp(340px,calc(100dvh - 120px),1040px)}
 .center-section-header{min-height:44px;padding:4px 7px}
 .center-inline-tabs button,.center-inline-tabs select{font-size:11px;min-height:32px;padding:7px 8px}
}
.center-module {
  width: 100%;
  min-height: 100%;
  color:
    var(--text, #111111);
}

.center-module * {
  box-sizing: border-box;
}

.center-intro {
  display: flex;
  align-items: flex-start;
  justify-content:
    space-between;
  gap: 14px;
  padding: 16px;
  border: 1px solid
    var(
      --border,
      rgba(0,0,0,.08)
    );
  border-radius: 20px;
  background:
    var(--surface, #ffffff);
}

.center-intro > div:first-child {
  min-width: 0;
}

.center-intro > div:first-child >
span,
.kicker {
  color:
    var(
      --dashboard-primary,
      var(--primary-color, #2563eb)
    );
  font-size: 10px;
  font-weight: 950;
  letter-spacing: .07em;
  text-transform: uppercase;
}

.center-intro h2 {
  margin: 4px 0;
  font-size:
    clamp(21px, 4vw, 30px);
  letter-spacing: -.04em;
}

.center-intro p,
.center-card p {
  margin: 0;
  color:
    var(--muted, #64748b);
  line-height: 1.55;
}

.center-workspace {
  flex: 0 0 auto;
  max-width: 240px;
  padding: 9px 11px;
  border-radius: 14px;
  background:
    var(
      --shell-section-bg,
      #f7f8fb
    );
  text-align: right;
}

.center-workspace strong,
.center-workspace span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.center-workspace strong {
  font-size: 12px;
}

.center-workspace span {
  margin-top: 2px;
  color:
    var(--muted, #64748b);
  font-size: 10px;
}

.center-tabs {
  display: flex;
  gap: 6px;
  margin: 12px 0;
  overflow-x: auto;
}

.center-tabs button {
  min-height: 38px;
  white-space: nowrap;
  border: 1px solid
    var(
      --border,
      rgba(0,0,0,.08)
    );
  border-radius: 12px;
  padding: 8px 12px;
  background:
    var(--surface, #ffffff);
  color: inherit;
  font-weight: 850;
  cursor: pointer;
}

.center-tabs button.active {
  border-color:
    var(
      --dashboard-primary,
      var(--primary-color, #2563eb)
    );
  color:
    var(
      --dashboard-primary,
      var(--primary-color, #2563eb)
    );
  background:
    color-mix(
      in srgb,
      var(
        --dashboard-primary,
        var(--primary-color, #2563eb)
      ) 8%,
      var(--surface, #ffffff)
    );
}

.center-tabs b {
  margin-left: 6px;
  padding: 1px 5px;
  border-radius: 999px;
  background:
    var(
      --dashboard-primary,
      var(--primary-color, #2563eb)
    );
  color: #fff;
  font-size: 9px;
}

.center-list {
  display: grid;
  gap: 9px;
}

.center-grid {
  display: grid;
  grid-template-columns:
    repeat(
      2,
      minmax(0, 1fr)
    );
  gap: 10px;
}

.center-card,
.center-empty {
  padding: 15px;
  border: 1px solid
    var(
      --border,
      rgba(0,0,0,.08)
    );
  border-radius: 18px;
  background:
    var(--surface, #ffffff);
}

.center-card header,
.center-card footer {
  display: flex;
  align-items: center;
  justify-content:
    space-between;
  gap: 8px;
}

.center-card header > span {
  color:
    var(
      --dashboard-primary,
      var(--primary-color, #2563eb)
    );
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
}

.center-card header small {
  color:
    var(--muted, #64748b);
}

.center-card h3 {
  margin: 7px 0;
  font-size: 18px;
}

.center-card footer {
  justify-content: flex-end;
  margin-top: 12px;
}

.center-card button {
  min-height: 38px;
  border: 1px solid
    var(
      --border,
      rgba(0,0,0,.08)
    );
  border-radius: 11px;
  padding: 8px 11px;
  background: transparent;
  color: inherit;
  font-weight: 850;
  cursor: pointer;
}

.center-card button.primary {
  border-color: transparent;
  background:
    var(
      --dashboard-primary,
      var(--primary-color, #2563eb)
    );
  color: #fff;
}

.center-card button.submit {
  width: 100%;
  margin-top: 12px;
}

.center-card label {
  display: grid;
  gap: 5px;
  margin-top: 11px;
  font-size: 12px;
  font-weight: 800;
}

.center-card input,
.center-card select,
.center-card textarea {
  width: 100%;
  border: 1px solid
    var(
      --border,
      rgba(0,0,0,.08)
    );
  border-radius: 11px;
  padding: 10px;
  background: transparent;
  color: inherit;
  font: inherit;
}

.notice {
  margin-top: 11px;
  padding: 9px;
  border-radius: 11px;
  background:
    color-mix(
      in srgb,
      var(
        --dashboard-primary,
        var(--primary-color, #2563eb)
      ) 8%,
      transparent
    );
  font-size: 12px;
}

.history {
  display: grid;
  gap: 7px;
  margin-top: 10px;
}

.history > div {
  display: grid;
  gap: 2px;
  padding: 9px;
  border-radius: 12px;
  background:
    var(
      --shell-section-bg,
      #f7f8fb
    );
}

.history span,
.history small,
.read-state {
  color:
    var(--muted, #64748b);
}

.facts {
  display: grid;
  gap: 6px;
  margin-top: 12px;
}

.facts > div {
  display: flex;
  justify-content:
    space-between;
  gap: 8px;
  padding: 9px;
  border-radius: 11px;
  background:
    var(
      --shell-section-bg,
      #f7f8fb
    );
}

.facts span {
  color:
    var(--muted, #64748b);
}

.center-empty {
  min-height: 150px;
  display: grid;
  place-items: center;
  text-align: center;
  color:
    var(--muted, #64748b);
}

@media (max-width: 720px) {
  .center-intro {
    display: grid;
  }

  .center-workspace {
    max-width: none;
    text-align: left;
  }

  .center-grid {
    grid-template-columns: 1fr;
  }
}

/* Eleeveon Hub visual hierarchy --------------------------------------- */
.hub-module {
  display: grid;
  gap: 12px;
}

.hub-overview {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(
      135deg,
      var(--eds-surface),
      color-mix(in srgb, var(--eds-primary) 6%, var(--eds-surface))
    );
  box-shadow: var(--eds-shadow-soft);
}

.hub-overview::after {
  content: "";
  position: absolute;
  right: -60px;
  top: -90px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--eds-primary) 10%, transparent);
  pointer-events: none;
}

.hub-tabs {
  position: sticky;
  top: 0;
  z-index: 4;
  padding: 6px;
  border: 1px solid var(--eds-border);
  border-radius: var(--eds-radius-card);
  background: color-mix(in srgb, var(--eds-surface) 94%, transparent);
  backdrop-filter: blur(14px);
}

.center-card {
  background: var(--eds-card) !important;
  border-color: var(--eds-border) !important;
  box-shadow: var(--eds-shadow-soft);
}

.center-card:hover {
  border-color: var(--eds-border-strong) !important;
}


/* --------------------------------------------------------------------------
 * Developer / platform-team support workspace
 * -------------------------------------------------------------------------- */

.center-developer-summary {
  display: grid;
  grid-template-columns:
    repeat(4, minmax(0, 1fr));
  gap: 8px;
  margin-bottom: 10px;
}

.center-stat {
  padding: 12px;
  border: 1px solid
    var(--border, rgba(0,0,0,.08));
  border-radius: 15px;
  background:
    var(--surface, #ffffff);
}

.center-stat span {
  display: block;
  color:
    var(--muted, #64748b);
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
}

.center-stat strong {
  display: block;
  margin-top: 3px;
  font-size: 21px;
  line-height: 1;
}

.center-ticket-layout {
  display: grid;
  grid-template-columns:
    minmax(280px, .9fr)
    minmax(0, 1.35fr);
  gap: 10px;
  align-items: start;
}

.center-ticket-list,
.center-ticket-thread {
  min-width: 0;
}

.center-ticket-list {
  display: grid;
  gap: 7px;
}

.center-ticket {
  width: 100%;
  padding: 11px 12px;
  border: 1px solid
    var(--border, rgba(0,0,0,.08));
  border-radius: 14px;
  background:
    var(--surface, #ffffff);
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.center-ticket.active {
  border-color:
    var(
      --dashboard-primary,
      var(--primary-color, #2563eb)
    );
  background:
    color-mix(
      in srgb,
      var(
        --dashboard-primary,
        var(--primary-color, #2563eb)
      ) 7%,
      var(--surface, #ffffff)
    );
}

.center-ticket-top,
.center-ticket-meta,
.center-thread-heading,
.center-support-controls,
.center-message-meta {
  display: flex;
  align-items: center;
  gap: 7px;
}

.center-ticket-top,
.center-thread-heading {
  justify-content: space-between;
}

.center-ticket strong,
.center-ticket span,
.center-ticket small {
  display: block;
}

.center-ticket strong {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
}

.center-ticket p {
  display: -webkit-box;
  margin: 5px 0 7px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color:
    var(--muted, #64748b);
  font-size: 11px;
  line-height: 1.4;
}

.center-ticket-meta {
  flex-wrap: wrap;
  color:
    var(--muted, #64748b);
  font-size: 10px;
}

.center-badge {
  display: inline-flex !important;
  align-items: center;
  width: fit-content;
  padding: 3px 6px;
  border-radius: 999px;
  background:
    var(--shell-section-bg, #f7f8fb);
  font-size: 9px !important;
  font-weight: 900;
  text-transform: uppercase;
}

.center-badge.priority-high,
.center-badge.priority-urgent {
  background:
    color-mix(
      in srgb,
      #dc2626 10%,
      var(--surface, #ffffff)
    );
}

.center-ticket-thread {
  padding: 15px;
  border: 1px solid
    var(--border, rgba(0,0,0,.08));
  border-radius: 18px;
  background:
    var(--surface, #ffffff);
}

.center-thread-heading h3 {
  min-width: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 18px;
}

.center-thread-copy {
  margin: 10px 0 0;
  padding: 12px;
  border-radius: 13px;
  background:
    var(--shell-section-bg, #f7f8fb);
  white-space: pre-wrap;
}

.center-support-context {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));
  gap: 7px;
  margin-top: 10px;
}

.center-support-context > div {
  min-width: 0;
  padding: 9px;
  border-radius: 11px;
  background:
    var(--shell-section-bg, #f7f8fb);
}

.center-support-context span,
.center-support-context strong {
  display: block;
}

.center-support-context span {
  color:
    var(--muted, #64748b);
  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
}

.center-support-context strong {
  margin-top: 2px;
  overflow-wrap: anywhere;
  font-size: 11px;
}

.center-support-controls {
  flex-wrap: wrap;
  margin-top: 11px;
}

.center-support-controls label {
  flex: 1 1 150px;
  margin: 0;
}

.center-thread-messages {
  display: grid;
  gap: 7px;
  margin-top: 12px;
}

.center-message {
  max-width: 88%;
  padding: 9px 10px;
  border-radius: 13px;
  background:
    var(--shell-section-bg, #f7f8fb);
}

.center-message.platform {
  margin-left: auto;
  background:
    color-mix(
      in srgb,
      var(
        --dashboard-primary,
        var(--primary-color, #2563eb)
      ) 9%,
      var(--surface, #ffffff)
    );
}

.center-message p {
  margin: 0;
  white-space: pre-wrap;
  color: inherit;
  font-size: 12px;
}

.center-message-meta {
  justify-content: space-between;
  margin-top: 5px;
  color:
    var(--muted, #64748b);
  font-size: 9px;
}

.center-reply-box {
  margin-top: 12px;
}

.center-reply-box textarea {
  min-height: 96px;
  resize: vertical;
}

.center-developer-empty {
  padding: 24px 14px;
  border: 1px dashed
    var(--border, rgba(0,0,0,.12));
  border-radius: 16px;
  color:
    var(--muted, #64748b);
  text-align: center;
}

@media (max-width: 920px) {
  .center-developer-summary {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  .center-ticket-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .center-developer-summary {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  .center-support-context {
    grid-template-columns: 1fr;
  }

  .center-message {
    max-width: 95%;
  }
}



/* --------------------------------------------------------------------------
 * Developer / Platform Team outbound publishing
 * -------------------------------------------------------------------------- */

.center-publisher-layout {
  display: grid;
  grid-template-columns:
    minmax(0, 1.05fr)
    minmax(300px, .95fr);
  gap: 10px;
  align-items: start;
}

.center-form-grid {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.center-audience {
  margin-top: 12px;
  padding: 11px;
  border-radius: 13px;
  background:
    var(--shell-section-bg, #f7f8fb);
}

.center-audience > span {
  display: block;
  font-size: 12px;
  font-weight: 900;
}

.center-audience > small {
  display: block;
  margin-top: 2px;
  color:
    var(--muted, #64748b);
}

.center-role-options {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 9px;
}

.center-check {
  display: inline-flex !important;
  align-items: center;
  gap: 6px !important;
  margin: 0 !important;
  padding: 7px 9px;
  border: 1px solid
    var(--border, rgba(0,0,0,.08));
  border-radius: 999px;
  background:
    var(--surface, #ffffff);
  cursor: pointer;
  font-size: 10px !important;
}

.center-check input {
  width: auto !important;
  margin: 0;
  padding: 0 !important;
}

.center-inline-checks {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 11px;
}

.center-publish-actions,
.center-manager-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 7px;
  margin-top: 12px;
}

.center-manager-list {
  display: grid;
  gap: 8px;
  margin-top: 10px;
}

.center-manager-item {
  padding: 11px;
  border: 1px solid
    var(--border, rgba(0,0,0,.08));
  border-radius: 14px;
  background:
    var(--shell-section-bg, #f7f8fb);
}

.center-manager-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.center-manager-heading strong {
  min-width: 0;
  font-size: 13px;
}

.center-manager-item > p {
  margin-top: 6px;
  white-space: pre-wrap;
  font-size: 11px;
}

.center-manager-item > small {
  display: block;
  margin-top: 7px;
  color:
    var(--muted, #64748b);
  font-size: 9px;
}

.center-release-note {
  margin-top: 8px;
  padding: 9px;
  border-radius: 11px;
  background:
    var(--surface, #ffffff);
}

.center-release-note strong {
  font-size: 11px;
}

.center-release-note p {
  margin-top: 4px;
  white-space: pre-wrap;
  font-size: 10px;
}

.center-release-card {
  border-color:
    color-mix(
      in srgb,
      var(
        --dashboard-primary,
        var(--primary-color, #2563eb)
      ) 22%,
      var(--border, rgba(0,0,0,.08))
    );
}

.center-user-release-notes {
  display: grid;
  gap: 7px;
  margin-top: 10px;
}

.center-user-release-notes > div {
  padding: 9px 10px;
  border-radius: 11px;
  background:
    var(--shell-section-bg, #f7f8fb);
}

.center-user-release-notes strong {
  font-size: 11px;
}

.center-user-release-notes p {
  margin-top: 3px;
  white-space: pre-wrap;
  font-size: 11px;
}

/* Shared Hub atmosphere: every Hub section should feel like its own place. */
.hub-module {
  position:relative;
  overflow:hidden;
  padding:5px;
  border-radius:21px;
  background:linear-gradient(115deg,rgba(5,37,43,.25),rgba(6,43,39,.08)),url('/hub-pier.png') center / cover no-repeat,#b9dcd6;
  color:#23413d;
}
.hub-module .center-shell {border-radius:16px}
.hub-module .center-work-area:has(.center-section-header){padding:10px 11px 15px}
.hub-module .center-section-header{
  background:rgba(251,255,252,.87);
  border:1px solid rgba(255,255,255,.75);
  backdrop-filter:blur(14px);
  -webkit-backdrop-filter:blur(14px);
  box-shadow:0 6px 24px rgba(8,52,46,.10);
}
.hub-module .center-inline-tabs button,.hub-module .center-inline-tabs select{color:#28514b}
.hub-module .center-inline-tabs button.active{
  color:#0d685c;
  background:rgba(181,229,215,.53);
  border-color:rgba(30,118,103,.16);
}
.hub-module .center-card,.hub-module .center-empty,.hub-module .center-stat{
  background:rgba(249,254,250,.94)!important;
  border-color:rgba(255,255,255,.80)!important;
  box-shadow:0 5px 24px rgba(0,43,39,.12);
  backdrop-filter:blur(13px);
  -webkit-backdrop-filter:blur(13px);
}
@media(max-width:680px){.hub-module{padding:0;border-radius:14px}.hub-module .center-work-area:has(.center-section-header){padding:7px}}

@media (max-width: 900px) {
  .center-publisher-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .center-form-grid {
    grid-template-columns: 1fr;
  }

  .center-publish-actions,
  .center-manager-actions {
    justify-content: stretch;
  }

  .center-publish-actions button,
  .center-manager-actions button {
    flex: 1 1 auto;
  }
}

`,ru={"top-left":{top:"-30%",left:"-20%"},"top-right":{top:"-30%",right:"-20%"},"bottom-left":{bottom:"-30%",left:"-20%"},"bottom-right":{bottom:"-30%",right:"-20%"},center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}};function rh({placement:e="top-left",size:r="24rem",opacity:t=.18,blur:a="24px",color:i="var(--eds-primary)",decorative:o=!0,style:s,...l}){return(0,n.jsx)("div",{"aria-hidden":!!o||void 0,style:{position:"absolute",zIndex:0,width:r,height:r,borderRadius:"50%",pointerEvents:"none",background:`radial-gradient(circle, ${i} 0%, transparent 68%)`,filter:`blur(${a})`,opacity:Math.min(1,Math.max(0,t)),...ru[e],...s},...l})}function rm(e,r,t){return Math.min(t,Math.max(r,e))}function rg({variant:e="network",opacity:r=.08,density:t=1,absolute:a=!0,decorative:i=!0,className:o,style:s,...l}){let c={position:a?"absolute":void 0,inset:a?0:void 0,pointerEvents:i?"none":void 0,backgroundImage:function(e){switch(e){case"grid":return"var(--eds-texture-grid)";case"dots":return"var(--eds-texture-dots)";case"network":return"var(--eds-texture-network)";case"rings":return"radial-gradient(circle at 20% 50%, transparent 0 18px, color-mix(in srgb, var(--eds-primary) 18%, transparent) 19px 20px, transparent 21px),radial-gradient(circle at 82% 30%, transparent 0 28px, color-mix(in srgb, var(--eds-primary) 12%, transparent) 29px 30px, transparent 31px)";case"academic":return"linear-gradient(color-mix(in srgb, var(--eds-primary) 8%, transparent) 1px, transparent 1px),linear-gradient(90deg, color-mix(in srgb, var(--eds-primary) 8%, transparent) 1px, transparent 1px),radial-gradient(circle, color-mix(in srgb, var(--eds-primary) 20%, transparent) 1px, transparent 1.5px)"}}(e),backgroundSize:function(e,r){let t=rm(r,.5,2);switch(e){case"dots":return`${10/t}px ${10/t}px`;case"grid":case"academic":return`${24/t}px ${24/t}px`;case"network":return`${96/t}px ${96/t}px`;case"rings":return`${140/t}px ${140/t}px`}}(e,t),opacity:rm(r,0,1),...s};return(0,n.jsx)("div",{className:function(...e){return e.filter(Boolean).join(" ")}("eds-brand-pattern",`eds-brand-pattern-${e}`,o),style:c,"aria-hidden":!!i||void 0,...l})}function rb({texture:e="grain",intensity:r=1,children:t,decorative:a=!1,className:i,style:o,...s}){let l={"--eds-texture-intensity":String(Math.min(2,Math.max(0,r))),...o};return(0,n.jsx)("div",{className:function(...e){return e.filter(Boolean).join(" ")}("eds-texture",`eds-texture-${e}`,i),style:l,"aria-hidden":!!a||void 0,...s,children:t})}let rx={dashboard:{rects:[{x:3,y:3,width:7,height:7,rx:1.5},{x:14,y:3,width:7,height:4,rx:1.5},{x:14,y:11,width:7,height:10,rx:1.5},{x:3,y:14,width:7,height:7,rx:1.5}]},student:{circles:[{cx:12,cy:8,r:3}],paths:["M5.5 20c.5-4 2.8-6 6.5-6s6 2 6.5 6","M3 6l9-4 9 4-9 4-9-4Z","M19 7v5"]},teacher:{circles:[{cx:9,cy:8,r:3}],paths:["M3.5 20c.4-4 2.4-6 5.5-6 1.8 0 3.2.7 4.2 2","M15 5h6v10h-6","M15 9h6","M13 14l3 3"]},parent:{circles:[{cx:8,cy:8,r:2.5},{cx:16,cy:9,r:2.5}],paths:["M2.5 20c.4-3.6 2.2-5.5 5.5-5.5S13.1 16.4 13.5 20","M11 20c.3-2.9 1.9-4.5 5-4.5 3 0 4.8 1.6 5.2 4.5"]},attendance:{rects:[{x:3,y:4,width:18,height:17,rx:2}],lines:[{x1:7,y1:2,x2:7,y2:6},{x1:17,y1:2,x2:17,y2:6},{x1:3,y1:9,x2:21,y2:9}],paths:["m8 15 2.2 2.2L16 12"]},assessment:{rects:[{x:4,y:3,width:16,height:18,rx:2}],lines:[{x1:8,y1:8,x2:16,y2:8},{x1:8,y1:12,x2:13,y2:12},{x1:8,y1:16,x2:11,y2:16}],paths:["m14 16 1.5 1.5L19 14"]},reports:{paths:["M4 20V10","M10 20V4","M16 20v-7","M22 20V7","M2 20h22"]},calendar:{rects:[{x:3,y:4,width:18,height:17,rx:2}],lines:[{x1:7,y1:2,x2:7,y2:6},{x1:17,y1:2,x2:17,y2:6},{x1:3,y1:9,x2:21,y2:9}],circles:[{cx:8,cy:13,r:.5},{cx:12,cy:13,r:.5},{cx:16,cy:13,r:.5},{cx:8,cy:17,r:.5},{cx:12,cy:17,r:.5}]},timetable:{circles:[{cx:12,cy:12,r:9}],paths:["M12 7v5l3 2","M7 3.5 5 2","M17 3.5 19 2"]},finance:{circles:[{cx:12,cy:12,r:9}],paths:["M15.5 8.5c-.7-1-1.8-1.5-3.5-1.5-2 0-3.5 1-3.5 2.5S10 12 12 12s3.5 1 3.5 2.5S14 17 12 17c-1.7 0-2.9-.5-3.7-1.6","M12 5v14"]},communication:{paths:["M4 4h16v12H8l-4 4V4Z","M8 8h8","M8 12h5"]},workspace:{rects:[{x:3,y:3,width:18,height:18,rx:2}],lines:[{x1:8,y1:3,x2:8,y2:21},{x1:8,y1:9,x2:21,y2:9}]},notification:{paths:["M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9","M10 21h4"]},settings:{circles:[{cx:12,cy:12,r:3}],paths:["M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21h-4v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H3v-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V3h4v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9A1.7 1.7 0 0 0 21 10h.1v4H21a1.7 1.7 0 0 0-1.6 1Z"]},sync:{paths:["M20 7h-5V2","M4 17h5v5","M18.4 9A7 7 0 0 0 6.2 5.8L4 8","M5.6 15A7 7 0 0 0 17.8 18.2L20 16"]},offline:{paths:["M2 2l20 20","M8.5 8.5A6 6 0 0 1 18 13","M5 13a4 4 0 0 0 4 4h8","M3.5 8.5A8 8 0 0 1 7 5.5"]},device:{rects:[{x:5,y:2,width:14,height:20,rx:2}],lines:[{x1:10,y1:18,x2:14,y2:18}]},school:{paths:["M3 10 12 4l9 6","M5 9v10h14V9","M9 19v-5h6v5","M8 9h8"]},branch:{circles:[{cx:6,cy:5,r:2},{cx:18,cy:5,r:2},{cx:12,cy:19,r:2}],paths:["M6 7v3c0 2 1 3 3 3h3","M18 7v3c0 2-1 3-3 3h-3","M12 13v4"]}},rf=(0,i.createContext)({size:"md",tone:"current",strokeWidth:1.8}),rv={xs:12,sm:16,md:18,lg:20,xl:24},ry={current:"currentColor",primary:"var(--eds-primary)",muted:"var(--eds-text-muted)",success:"var(--eds-success)",warning:"var(--eds-warning)",danger:"var(--eds-danger)",info:"var(--eds-info)"},rw=(0,i.forwardRef)(function({name:e,size:r,tone:t,label:a,decorative:o,strokeWidth:s,title:l,className:c,style:d,...p},u){var h;let m=(0,i.useContext)(rf),g=(0,i.useId)(),b="number"==typeof(h=r??m.size)?h:rv[h],x=t??m.tone,f=o??(!a&&!l),v=rx[e];return v?(0,n.jsxs)("svg",{ref:u,viewBox:"0 0 24 24",width:b,height:b,fill:"none",stroke:ry[x],strokeWidth:s??m.strokeWidth,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!!f||void 0,"aria-label":f?void 0:a,role:f?void 0:"img","aria-labelledby":!f&&l?g:void 0,className:["eds-icon",`eds-icon-${e}`,c].filter(Boolean).join(" "),style:{display:"inline-block",flex:"0 0 auto",verticalAlign:"middle",...d},...p,children:[l?(0,n.jsx)("title",{id:g,children:l}):null,v.paths?.map((e,r)=>(0,n.jsx)("path",{d:e},`p-${r}`)),v.circles?.map((e,r)=>(0,n.jsx)("circle",{cx:e.cx,cy:e.cy,r:e.r},`c-${r}`)),v.rects?.map((e,r)=>(0,n.jsx)("rect",{x:e.x,y:e.y,width:e.width,height:e.height,rx:e.rx},`r-${r}`)),v.polylines?.map((e,r)=>(0,n.jsx)("polyline",{points:e},`pl-${r}`)),v.lines?.map((e,r)=>(0,n.jsx)("line",{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2},`l-${r}`))]}):(0,n.jsxs)("svg",{ref:u,viewBox:"0 0 24 24",width:b,height:b,fill:"none",stroke:ry[x],strokeWidth:s??m.strokeWidth,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!!f||void 0,"aria-label":f?void 0:a??"Unknown icon",role:f?void 0:"img",className:["eds-icon","eds-icon-fallback",c].filter(Boolean).join(" "),style:{display:"inline-block",flex:"0 0 auto",verticalAlign:"middle",...d},...p,children:[(0,n.jsx)("circle",{cx:"12",cy:"12",r:"8"}),(0,n.jsx)("path",{d:"M9.5 9.5a2.7 2.7 0 0 1 5.2.9c0 2-2.7 2.2-2.7 4"}),(0,n.jsx)("circle",{cx:"12",cy:"17.5",r:".5",fill:"currentColor",stroke:"none"})]})});function rk(e){return(0,n.jsx)(rw,{name:"communication",...e})}function rj(e){return(0,n.jsx)(rw,{name:"workspace",...e})}function rS(e){return(0,n.jsx)(rw,{name:"school",...e})}function rN({title:e,open:r,activeKey:t,items:a,onToggle:i,onNavigate:o}){return(0,n.jsxs)("section",{className:"shell-nav-group","data-open":r,"data-navigation-group":e,children:[(0,n.jsxs)("button",{type:"button",className:"shell-nav-group-title",onClick:i,"aria-expanded":r,children:[(0,n.jsx)("span",{children:e}),(0,n.jsx)("b",{"aria-hidden":"true",children:r?"⌃":"⌄"})]}),r?(0,n.jsx)("div",{className:"shell-nav-items",children:a.map(e=>{var r;let a=t===e.key;return(0,n.jsxs)("button",{type:"button",className:["shell-nav-item",a&&"active"].filter(Boolean).join(" "),onClick:()=>o(e.key),"data-active":a?"true":"false","aria-current":a?"page":void 0,children:[(0,n.jsx)("span",{className:"shell-nav-icon",children:"string"==typeof(r=e.icon)?(0,n.jsx)(rw,{name:r,size:"md"}):r}),(0,n.jsx)("strong",{children:e.label}),(0,n.jsx)("span",{className:"shell-nav-active-marker","aria-hidden":"true"})]},e.key)})}):null]})}function rC({count:e=0,attention:r=!1,label:t}){return e>0?(0,n.jsx)("span",{className:"shell-indicator shell-indicator-count","aria-label":t||`${e} unread items`,children:e>99?"99+":e}):r?(0,n.jsx)("span",{className:"shell-indicator shell-indicator-dot","aria-label":t||"Needs attention"}):null}function rE({unreadCount:e=0,attention:r=!1,active:t=!1,onOpen:a}){return(0,n.jsxs)("button",{type:"button",className:["shell-hub-card",t&&"active"].filter(Boolean).join(" "),onClick:a,"aria-current":t?"page":void 0,"aria-label":e?`Open Eleeveon Hub. ${e} unread item${1===e?"":"s"}.`:r?"Open Eleeveon Hub. New activity needs attention.":"Open Eleeveon Hub.",children:[(0,n.jsx)("span",{className:"shell-hub-icon",children:(0,n.jsx)(rk,{size:"sm",tone:"primary"})}),(0,n.jsx)("strong",{className:"shell-hub-title",children:"Eleeveon Hub"}),(0,n.jsx)("span",{className:"shell-hub-indicator",children:(0,n.jsx)(rC,{count:e,attention:r,label:e?`${e} unread Hub item${1===e?"":"s"}`:"Hub needs attention"})}),(0,n.jsx)("span",{className:"shell-hub-chevron","aria-hidden":"true",children:"›"}),(0,n.jsx)("small",{className:"shell-hub-description",children:"Messages, notices and support"})]})}function rI(e){return(0,n.jsx)(rE,{...e})}function rA(){return new URL(window.location.href)}function rz(){let e=rA(),r=e?.searchParams.get("surface");return"explore"===r||"screens"===r||"module"===r?r:"home"}function rM(){let e=rA();return e?.searchParams.get("category")||null}function rR(e,r,t){let a=`${e.pathname}${e.search}${e.hash}`;"replace"===t?window.history.replaceState(r,"",a):window.history.pushState(r,"",a)}function r$(e){let r=rA();r&&("home"===e.surface?(r.searchParams.delete("screen"),r.searchParams.delete("surface"),r.searchParams.delete("category")):(r.searchParams.set("surface",e.surface),"explore"!==e.surface&&r.searchParams.delete("category")),rR(r,{eleeveonPortal:!0,screen:r.searchParams.get("screen"),surface:e.surface,category:r.searchParams.get("category")},e.mode||"push"))}function rT(e){let r=rA();r&&(r.searchParams.set("surface","explore"),e.category?r.searchParams.set("category",e.category):r.searchParams.delete("category"),rR(r,{eleeveonPortal:!0,screen:r.searchParams.get("screen"),surface:"explore",category:e.category},e.mode||"push"))}let rL={administration:{label:"People",description:"Students, teachers and parents",glyph:"\uD83D\uDC65"},people:{label:"People",description:"Students, teachers and parents",glyph:"\uD83D\uDC65"},setup:{label:"Setup",description:"Academic structures and learning setup",glyph:"\uD83E\uDDE9"},"academic records":{label:"Records",description:"Assessment, reports and learner progress",glyph:"\uD83D\uDCCA"},"identity & safety":{label:"Identity & Safety",description:"Identity, access, visitors and safety",glyph:"\uD83E\uDEAA"},attendance:{label:"Attendance",description:"Student and staff attendance",glyph:"✅"},communication:{label:"Communication",description:"Announcements and messages",glyph:"\uD83D\uDCAC"},"calendar & timetable":{label:"Schedule",description:"Calendars, classes, exams and resources",glyph:"\uD83D\uDCC5"},finance:{label:"Finance",description:"Fees, income, expenses and payouts",glyph:"\uD83D\uDCB3"},"branch control":{label:"Branch",description:"Settings, access and local controls",glyph:"⚙️"},"school control":{label:"School",description:"School settings, users and controls",glyph:"\uD83C\uDFEB"}};function rD(e){return String(e||"").trim().toLowerCase()}function rP(e){return e.key||rD(e.title).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"section"}function rO(e){let r=rL[rD(e.title)];return r?{label:e.exploreLabel||r.label,description:e.exploreDescription||r.description,glyph:e.items?.[0]?.icon||r.glyph}:{label:e.exploreLabel||e.title,description:e.exploreDescription||`${e.items?.length||0} tools`,glyph:e.items?.[0]?.icon||"◫"}}function rU(e){return e.exploreLabel||e.label}function rB({image:e,glyph:r,alt:t}){let[a,o]=(0,i.useState)(!1);return(0,n.jsx)("div",{className:"portal-explore-cover","aria-hidden":"true",children:e&&!a?(0,n.jsx)("img",{src:e,alt:"",onError:()=>o(!0)}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"portal-explore-cover-glow"}),(0,n.jsx)("span",{title:t,className:"portal-explore-glyph",children:r})]})})}function rF({sections:e,homeKey:r,activeKey:t,onNavigate:a}){let o=(0,i.useMemo)(()=>e.map(e=>({...e,items:(e.items||[]).filter(e=>e.key!==r)})).filter(e=>e.items.length>0),[e,r]),[s,l]=(0,i.useState)(()=>"explore"!==rz()?null:rM()||null),c=(0,i.useMemo)(()=>o.find(e=>rP(e)===s)||null,[o,s]);if((0,i.useEffect)(()=>{let e=()=>{if("explore"!==rz())return;let e=rM();l(e&&o.some(r=>rP(r)===e)?e:null)};return window.addEventListener("popstate",e),()=>{window.removeEventListener("popstate",e)}},[o]),(0,i.useEffect)(()=>{!s||o.some(e=>rP(e)===s)||(l(null),rT({category:null,mode:"replace"}))},[o,s]),c){let e=rO(c);return(0,n.jsxs)("main",{className:"portal-explore-page",children:[(0,n.jsxs)("header",{className:"portal-explore-page-head",children:[(0,n.jsx)("button",{type:"button",className:"portal-explore-back",onClick:()=>{window.history.back()},"aria-label":"Back to Explore",children:"‹"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Explore"}),(0,n.jsx)("h1",{children:e.label}),(0,n.jsx)("span",{children:e.description})]})]}),(0,n.jsx)("section",{className:"portal-explore-grid portal-explore-item-grid","aria-label":`${e.label} tools`,children:c.items.map(e=>(0,n.jsxs)("button",{type:"button",className:["portal-explore-card",e.key===t&&"active"].filter(Boolean).join(" "),onClick:()=>a(e.key),children:[(0,n.jsx)(rB,{image:e.exploreImage,glyph:e.icon||"◫",alt:rU(e)}),(0,n.jsx)("span",{className:"portal-explore-card-copy",children:(0,n.jsx)("strong",{children:rU(e)})})]},e.key))}),(0,n.jsx)("style",{children:rH})]})}return(0,n.jsxs)("main",{className:"portal-explore-page portal-explore-root",children:[(0,n.jsx)("section",{className:"portal-explore-grid","aria-label":"Explore categories",children:o.map(e=>{let r=rO(e),t=rP(e);return(0,n.jsxs)("button",{type:"button",className:"portal-explore-card",onClick:()=>{s!==t&&(l(t),rT({category:t}))},children:[(0,n.jsx)(rB,{image:e.exploreImage,glyph:r.glyph,alt:r.label}),(0,n.jsx)("span",{className:"portal-explore-card-copy",children:(0,n.jsx)("strong",{children:r.label})})]},t)})}),(0,n.jsx)("style",{children:rH})]})}let rH=`
.portal-explore-page {
  width:
    min(
      860px,
      100%
    );

  margin:
    0 auto;

  padding:
    12px 8px
    24px;

  color:
    var(
      --eds-text,
      var(
        --text,
        #111827
      )
    );
}

.portal-explore-root {
  padding-top:
    8px;
}

.portal-explore-page-head {
  display:
    grid;

  grid-template-columns:
    38px
    minmax(
      0,
      1fr
    );

  align-items:
    start;

  gap:
    9px;

  margin-bottom:
    12px;
}

.portal-explore-page-head p {
  margin:
    0;

  color:
    var(
      --eds-primary,
      var(
        --primary-color,
        #2563eb
      )
    );

  font-size:
    9px;

  font-weight:
    900;

  letter-spacing:
    .08em;

  text-transform:
    uppercase;
}

.portal-explore-page-head h1 {
  margin:
    2px 0 0;

  color:
    var(
      --eds-text-strong,
      var(
        --text,
        #111827
      )
    );

  font-size:
    clamp(
      24px,
      6vw,
      36px
    );

  line-height:
    .98;

  letter-spacing:
    -.045em;
}

.portal-explore-page-head span {
  display:
    block;

  margin-top:
    5px;

  color:
    var(
      --eds-text-muted,
      var(
        --muted,
        #64748b
      )
    );

  font-size:
    11px;

  line-height:
    1.45;

  font-weight:
    650;
}

.portal-explore-back {
  width:
    36px;

  height:
    36px;

  border:
    1px solid
    var(
      --eds-border,
      var(
        --border,
        rgba(
          0,
          0,
          0,
          .10
        )
      )
    );

  border-radius:
    12px;

  background:
    var(
      --eds-surface,
      var(
        --surface,
        #ffffff
      )
    );

  color:
    var(
      --eds-text-strong,
      var(
        --text,
        #111827
      )
    );

  font-size:
    27px;

  line-height:
    1;

  cursor:
    pointer;
}

.portal-explore-grid {
  display:
    grid;

  grid-template-columns:
    repeat(
      3,
      minmax(
        0,
        1fr
      )
    );

  gap:
    10px 8px;
}

.portal-explore-card {
  min-width:
    0;

  display:
    grid;

  align-content:
    start;

  gap:
    6px;

  border:
    0;

  padding:
    0;

  background:
    transparent;

  color:
    inherit;

  text-align:
    left;

  cursor:
    pointer;
}

.portal-explore-cover {
  position:
    relative;

  width:
    100%;

  aspect-ratio:
    1 / 1.03;

  display:
    grid;

  place-items:
    center;

  overflow:
    hidden;

  border-radius:
    14px;

  border:
    1px solid
    var(
      --eds-border,
      var(
        --border,
        rgba(
          0,
          0,
          0,
          .08
        )
      )
    );

  background:
    linear-gradient(
      145deg,

      color-mix(
        in srgb,
        var(
          --eds-primary,
          var(
            --primary-color,
            #2563eb
          )
        ) 13%,
        var(
          --eds-surface,
          var(
            --surface,
            #ffffff
          )
        )
      ),

      color-mix(
        in srgb,
        var(
          --eds-bg,
          var(
            --bg,
            #f7f8fb
          )
        ) 84%,
        var(
          --eds-surface,
          var(
            --surface,
            #ffffff
          )
        )
      )
    );

  box-shadow:
    0 5px 15px
    rgba(
      15,
      23,
      42,
      .065
    );
}

.portal-explore-cover img {
  width:
    100%;

  height:
    100%;

  display:
    block;

  object-fit:
    cover;
}

.portal-explore-cover-glow {
  position:
    absolute;

  width:
    72%;

  height:
    72%;

  border-radius:
    50%;

  background:
    color-mix(
      in srgb,
      var(
        --eds-primary,
        var(
          --primary-color,
          #2563eb
        )
      ) 18%,
      transparent
    );

  filter:
    blur(
      18px
    );
}

.portal-explore-glyph {
  position:
    relative;

  z-index:
    1;

  font-size:
    clamp(
      30px,
      11vw,
      64px
    );

  filter:
    drop-shadow(
      0 7px 10px
      rgba(
        15,
        23,
        42,
        .10
      )
    );
}

.portal-explore-card-copy {
  min-width:
    0;

  display:
    block;

  padding:
    0 2px;
}

.portal-explore-card-copy strong {
  display:
    block;

  overflow:
    hidden;

  text-overflow:
    ellipsis;

  color:
    var(
      --eds-text-strong,
      var(
        --text,
        #111827
      )
    );

  font-size:
    12px;

  font-weight:
    800;

  line-height:
    1.2;
}

.portal-explore-card.active
.portal-explore-cover {
  border-color:
    color-mix(
      in srgb,
      var(
        --eds-primary,
        var(
          --primary-color,
          #2563eb
        )
      ) 55%,
      var(
        --eds-border,
        transparent
      )
    );

  box-shadow:
    0 0 0 2px
    color-mix(
      in srgb,
      var(
        --eds-primary,
        var(
          --primary-color,
          #2563eb
        )
      ) 14%,
      transparent
    );
}

@media (
  min-width:
    520px
) {
  .portal-explore-grid {
    grid-template-columns:
      repeat(
        4,
        minmax(
          0,
          1fr
        )
      );

    gap:
      12px 10px;
  }

  .portal-explore-card-copy strong {
    font-size:
      13px;
  }
}

@media (
  min-width:
    760px
) {
  .portal-explore-grid {
    grid-template-columns:
      repeat(
        5,
        minmax(
          0,
          1fr
        )
      );
  }
}
`;function rK({screens:e,activeKey:r,onOpenScreen:t,onRemoveScreen:a,onClearScreens:i,onAddScreen:o}){return(0,n.jsxs)("main",{className:"portal-screens-page",children:[(0,n.jsxs)("header",{className:"portal-screens-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Workspace"}),(0,n.jsx)("h1",{children:"Screens"}),(0,n.jsx)("span",{children:"Return to the places you have been working in."})]}),e.length>0?(0,n.jsx)("button",{type:"button",onClick:i,children:"Clear"}):null]}),e.length?(0,n.jsx)("section",{className:"portal-screens-list",children:e.map(e=>(0,n.jsxs)("article",{className:["portal-screen-card",e.routeKey===r&&"active"].filter(Boolean).join(" "),children:[(0,n.jsxs)("button",{type:"button",className:"portal-screen-open",onClick:()=>t(e.routeKey),children:[(0,n.jsx)("span",{className:"portal-screen-icon",children:"▣"}),(0,n.jsxs)("span",{className:"portal-screen-copy",children:[(0,n.jsx)("strong",{children:e.label}),(0,n.jsxs)("small",{children:[e.group," \xb7 ",function(e){if(!e)return"";let r=Date.now()-e;return r<6e4?"Just now":r<36e5?`${Math.max(1,Math.floor(r/6e4))}m ago`:r<864e5?`${Math.max(1,Math.floor(r/36e5))}h ago`:new Date(e).toLocaleDateString()}(e.lastVisitedAt)]})]}),(0,n.jsx)("span",{className:"portal-screen-arrow",children:"›"})]}),(0,n.jsx)("button",{type:"button",className:"portal-screen-close",onClick:()=>a(e.routeKey),"aria-label":`Close ${e.label}`,children:"\xd7"})]},e.routeKey))}):(0,n.jsxs)("section",{className:"portal-screens-empty",children:[(0,n.jsx)("div",{children:"▣"}),(0,n.jsx)("h2",{children:"No screens yet"}),(0,n.jsx)("p",{children:"Open something from the Library and it will appear here for quick access."})]}),(0,n.jsxs)("button",{type:"button",className:"portal-screens-add",onClick:o,children:[(0,n.jsx)("span",{children:"＋"}),"Add another screen"]}),(0,n.jsx)("style",{children:r_})]})}let r_=`
.portal-screens-page {
  width: min(720px, 100%);
  margin: 0 auto;
  padding: 14px 12px 26px;
  color:
    var(
      --eds-text,
      var(--text, #111827)
    );
}

.portal-screens-head {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.portal-screens-head p {
  margin: 0;
  color:
    var(
      --eds-primary,
      var(--primary-color, #2563eb)
    );
  font-size: 10px;
  font-weight: 900;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.portal-screens-head h1 {
  margin: 2px 0 0;
  color:
    var(
      --eds-text-strong,
      var(--text, #111827)
    );
  font-size: clamp(26px, 7vw, 38px);
  line-height: .96;
  letter-spacing: -.045em;
}

.portal-screens-head span {
  display: block;
  margin-top: 7px;
  color:
    var(
      --eds-text-muted,
      var(--muted, #64748b)
    );
  font-size: 12px;
  line-height: 1.5;
  font-weight: 650;
}

.portal-screens-head > button {
  border: 0;
  border-radius: 999px;
  padding: 8px 11px;
  background:
    color-mix(
      in srgb,
      var(
        --eds-primary,
        var(--primary-color, #2563eb)
      ) 9%,
      transparent
    );
  color:
    var(
      --eds-primary,
      var(--primary-color, #2563eb)
    );
  font-size: 10px;
  font-weight: 850;
}

.portal-screens-list {
  display: grid;
  gap: 9px;
}

.portal-screen-card {
  position: relative;
  display: grid;
  grid-template-columns:
    minmax(0, 1fr) 38px;
  align-items: stretch;
  overflow: hidden;
  border:
    1px solid
    var(
      --eds-border,
      var(--border, rgba(0,0,0,.09))
    );
  border-radius: 17px;
  background:
    var(
      --eds-surface,
      var(--surface, #ffffff)
    );
  box-shadow:
    0 7px 18px
    rgba(15,23,42,.055);
}

.portal-screen-card.active {
  border-color:
    color-mix(
      in srgb,
      var(
        --eds-primary,
        var(--primary-color, #2563eb)
      ) 38%,
      var(
        --eds-border,
        transparent
      )
    );
}

.portal-screen-open {
  min-width: 0;
  min-height: 66px;
  display: grid;
  grid-template-columns:
    40px minmax(0, 1fr) auto;
  align-items: center;
  gap: 9px;
  border: 0;
  padding: 8px 8px 8px 10px;
  background: transparent;
  color: inherit;
  text-align: left;
}

.portal-screen-icon {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background:
    color-mix(
      in srgb,
      var(
        --eds-primary,
        var(--primary-color, #2563eb)
      ) 10%,
      var(
        --eds-surface,
        var(--surface, #ffffff)
      )
    );
  color:
    var(
      --eds-primary,
      var(--primary-color, #2563eb)
    );
  font-size: 19px;
}

.portal-screen-copy {
  min-width: 0;
}

.portal-screen-copy strong,
.portal-screen-copy small {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.portal-screen-copy strong {
  color:
    var(
      --eds-text-strong,
      var(--text, #111827)
    );
  font-size: 13px;
  font-weight: 850;
}

.portal-screen-copy small {
  margin-top: 3px;
  color:
    var(
      --eds-text-muted,
      var(--muted, #64748b)
    );
  font-size: 9px;
  font-weight: 650;
}

.portal-screen-arrow {
  color:
    var(
      --eds-text-muted,
      var(--muted, #64748b)
    );
  font-size: 22px;
}

.portal-screen-close {
  width: 38px;
  border: 0;
  border-left:
    1px solid
    var(
      --eds-divider,
      var(--border, rgba(0,0,0,.08))
    );
  background: transparent;
  color:
    var(
      --eds-text-muted,
      var(--muted, #64748b)
    );
  font-size: 22px;
}

.portal-screens-empty {
  display: grid;
  place-items: center;
  padding: 42px 18px;
  text-align: center;
  border:
    1px dashed
    var(
      --eds-border,
      var(--border, rgba(0,0,0,.12))
    );
  border-radius: 22px;
  background:
    color-mix(
      in srgb,
      var(
        --eds-surface,
        var(--surface, #ffffff)
      ) 82%,
      transparent
    );
}

.portal-screens-empty > div {
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  border-radius: 20px;
  background:
    color-mix(
      in srgb,
      var(
        --eds-primary,
        var(--primary-color, #2563eb)
      ) 10%,
      transparent
    );
  color:
    var(
      --eds-primary,
      var(--primary-color, #2563eb)
    );
  font-size: 27px;
}

.portal-screens-empty h2 {
  margin: 13px 0 0;
  font-size: 18px;
}

.portal-screens-empty p {
  max-width: 330px;
  margin: 7px 0 0;
  color:
    var(
      --eds-text-muted,
      var(--muted, #64748b)
    );
  font-size: 11px;
  line-height: 1.55;
}

.portal-screens-add {
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
  border:
    1px solid
    color-mix(
      in srgb,
      var(
        --eds-primary,
        var(--primary-color, #2563eb)
      ) 25%,
      var(
        --eds-border,
        var(--border, rgba(0,0,0,.09))
      )
    );
  border-radius: 16px;
  background:
    color-mix(
      in srgb,
      var(
        --eds-primary,
        var(--primary-color, #2563eb)
      ) 7%,
      var(
        --eds-surface,
        var(--surface, #ffffff)
      )
    );
  color:
    var(
      --eds-primary,
      var(--primary-color, #2563eb)
    );
  font-size: 12px;
  font-weight: 850;
}

.portal-screens-add span {
  font-size: 19px;
}
`;function rW(){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M3.5 10.5 12 3l8.5 7.5"}),(0,n.jsx)("path",{d:"M5.5 9.5V21h13V9.5"}),(0,n.jsx)("path",{d:"M9.5 21v-6h5v6"})]})}function rV(){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,n.jsx)("circle",{cx:"12",cy:"12",r:"8.5"}),(0,n.jsx)("path",{d:"m14.9 9.1-2 4-4 2 2-4 4-2Z"})]})}function rq(){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,n.jsx)("rect",{x:"4",y:"5",width:"13",height:"14",rx:"2"}),(0,n.jsx)("path",{d:"M8 2h10a2 2 0 0 1 2 2v11"})]})}function rJ({active:e,onHome:r,onExplore:t,onScreens:a}){return(0,n.jsxs)("nav",{className:"portal-mobile-bottom-nav","aria-label":"Portal navigation","data-portal-mobile-navigation":"true",children:[(0,n.jsxs)("button",{type:"button",className:"home"===e?"active":"",onClick:r,"aria-current":"home"===e?"page":void 0,children:[(0,n.jsx)("span",{className:"portal-mobile-nav-icon",children:(0,n.jsx)(rW,{})}),(0,n.jsx)("span",{className:"portal-mobile-nav-label",children:"Home"})]}),(0,n.jsxs)("button",{type:"button",className:"explore"===e?"active":"",onClick:t,"aria-current":"explore"===e?"page":void 0,children:[(0,n.jsx)("span",{className:"portal-mobile-nav-icon",children:(0,n.jsx)(rV,{})}),(0,n.jsx)("span",{className:"portal-mobile-nav-label",children:"Explore"})]}),(0,n.jsxs)("button",{type:"button",className:"screens"===e?"active":"",onClick:a,"aria-current":"screens"===e?"page":void 0,children:[(0,n.jsx)("span",{className:"portal-mobile-nav-icon",children:(0,n.jsx)(rq,{})}),(0,n.jsx)("span",{className:"portal-mobile-nav-label",children:"Screens"})]}),(0,n.jsx)("style",{children:rY})]})}let rY=`
.portal-mobile-bottom-nav {
  display: none;
}

@media (max-width: 979px) {
  .portal-mobile-bottom-nav {
    position: fixed !important;

    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;

    z-index: 60;

    width: 100%;

    height: calc(
      var(--portal-mobile-nav-height, 64px) +
      env(safe-area-inset-bottom, 0px)
    );

    display: grid;

    grid-template-columns:
      repeat(3, minmax(0, 1fr));

    align-items: start;

    padding:
      5px
      8px
      env(safe-area-inset-bottom, 0px);

    border-top: 1px solid
      var(
        --eds-border,
        var(--border, rgba(15,23,42,.09))
      );

    background: color-mix(
      in srgb,
      var(
        --eds-surface,
        var(--surface, #ffffff)
      ) 95%,
      transparent
    );

    box-shadow:
      0 -8px 28px rgba(15,23,42,.07);

    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }

  .portal-mobile-bottom-nav > button {
    position: relative;

    min-width: 0;
    height: 54px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 2px;
    padding: 2px 4px;

    border: 0;
    border-radius: 16px;

    background: transparent;

    color: var(
      --eds-text-muted,
      var(--muted, #64748b)
    );

    font: inherit;
    cursor: pointer;

    -webkit-tap-highlight-color: transparent;
  }

  .portal-mobile-nav-icon {
    width: 40px;
    height: 28px;

    display: grid;
    place-items: center;

    border-radius: 999px;

    transition:
      background .16s ease,
      color .16s ease,
      transform .16s ease;
  }

  .portal-mobile-nav-icon svg {
    width: 21px;
    height: 21px;

    fill: none;
    stroke: currentColor;
    stroke-width: 1.9;

    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .portal-mobile-nav-label {
    max-width: 100%;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 10px;
    line-height: 1.1;
    font-weight: 800;
  }

  .portal-mobile-bottom-nav > button.active {
    color: var(
      --eds-primary,
      var(--primary-color, #2563eb)
    );
  }

  .portal-mobile-bottom-nav
  > button.active
  .portal-mobile-nav-icon {
    background: color-mix(
      in srgb,
      var(
        --eds-primary,
        var(--primary-color, #2563eb)
      ) 13%,
      transparent
    );
  }

  .portal-mobile-bottom-nav
  > button:active
  .portal-mobile-nav-icon {
    transform: scale(.94);
  }
}

@media (prefers-reduced-motion: reduce) {
  .portal-mobile-nav-icon {
    transition: none;
  }
}
`;function rG({portalTitle:e,activeInstitutionName:r,activeBranchName:t,activeTab:a,homeKey:o,hubKey:s,sections:l,hubUnreadCount:c=0,hubHasAttention:d=!1,onNavigate:p,onOpenHub:u}){let[h,m]=(0,i.useState)(()=>{let e;return"screens"===(e=rz())?"screens":"explore"===e||a!==o?"explore":"home"}),[g,b]=(0,i.useState)(()=>{let e;return"explore"===(e=rz())?"explore":"screens"===e?"screens":null}),x=null!==g,f=(0,i.useMemo)(()=>{let e={};return l.forEach(r=>r.items.forEach(r=>{e[r.key]=r.label})),e[s]="Eleeveon Hub",e},[l,s]),v=(0,i.useMemo)(()=>{let e={};return l.forEach(r=>r.items.forEach(t=>{e[t.key]=r.title})),e[s]="Messages, notices and support",e},[l,s]),{screens:y,touchScreen:w,removeScreen:k,clearScreens:j}=function(e){let r=(0,i.useMemo)(()=>["eleeveon_portal_screens",encodeURIComponent(e||"default")].join(":"),[e]),[t,a]=(0,i.useState)([]),[n,o]=(0,i.useState)(!1);(0,i.useEffect)(()=>{o(!1);try{a(function(e){if(!e)return[];try{let r=JSON.parse(e);if(!Array.isArray(r))return[];return r.filter(e=>e&&"string"==typeof e.routeKey).map(e=>({routeKey:String(e.routeKey),label:String(e.label||e.routeKey),group:String(e.group||"Workspace"),openedAt:Number(e.openedAt||Date.now()),lastVisitedAt:Number(e.lastVisitedAt||e.openedAt||Date.now())})).slice(0,12)}catch{return[]}}(window.sessionStorage.getItem(r)))}catch{a([])}o(!0)},[r]),(0,i.useEffect)(()=>{if(n)try{window.sessionStorage.setItem(r,JSON.stringify(t))}catch{}},[n,r,t]);let s=(0,i.useCallback)((e,r,t)=>{let n=String(e||"").trim();if(!n)return;let i=Date.now();a(e=>{let a=e.find(e=>e.routeKey===n);return[{routeKey:n,label:String(r||n),group:String(t||"Workspace"),openedAt:a?.openedAt||i,lastVisitedAt:i},...e.filter(e=>e.routeKey!==n)].slice(0,12)})},[]);return{screens:t,touchScreen:s,removeScreen:(0,i.useCallback)(e=>{a(r=>r.filter(r=>r.routeKey!==e))},[]),clearScreens:(0,i.useCallback)(()=>{a([])},[])}}((0,i.useMemo)(()=>[e,r||"institution",t||"workspace"].join("|"),[e,r,t]));(0,i.useEffect)(()=>{if(!x||"u"<typeof document)return;let e=document.documentElement,r=document.body,t=e.style.overflow,a=e.style.overflowY,n=r.style.overflow,i=r.style.overflowY,o=r.style.touchAction;return e.style.overflow="hidden",e.style.overflowY="hidden",r.style.overflow="hidden",r.style.overflowY="hidden",r.style.touchAction="none",()=>{e.style.overflow=t,e.style.overflowY=a,r.style.overflow=n,r.style.overflowY=i,r.style.touchAction=o}},[x]),(0,i.useEffect)(()=>{let e=()=>{let e=rz();if("explore"===e){m("explore"),b("explore");return}if("screens"===e){m("screens"),b("screens");return}b(null),m("home"===e&&a===o?"home":"explore")};return window.addEventListener("popstate",e),()=>{window.removeEventListener("popstate",e)}},[a,o]),(0,i.useEffect)(()=>{if(a===o){g||m("home");return}"home"!==h||g||m("explore");let e=f[a];e&&w(a,e,v[a]||"Workspace")},[a,o,f,v,g,h,w]),(0,i.useEffect)(()=>{let e=()=>{b(null),m("explore"),u()};return window.addEventListener("eleeveon:open-hub",e),()=>{window.removeEventListener("eleeveon:open-hub",e)}},[u]);let S=()=>{"explore"!==g&&(m("explore"),b("explore"),r$({surface:"explore"}))};return(0,n.jsxs)("div",{className:"portal-mobile-navigation",children:["explore"===g?(0,n.jsx)("section",{className:"portal-mobile-overlay portal-mobile-explore-overlay","aria-label":"Explore",children:(0,n.jsx)(rF,{sections:l,homeKey:o,activeKey:a,hubUnreadCount:c,hubHasAttention:d,onNavigate:e=>{m("explore"),b(null),p(e)}})}):null,"screens"===g?(0,n.jsx)("section",{className:"portal-mobile-overlay portal-mobile-screens-overlay","aria-label":"Screens",children:(0,n.jsx)(rK,{screens:y,activeKey:a,onOpenScreen:e=>{if(b(null),e===s){m("explore"),u();return}m("screens"),p(e)},onRemoveScreen:k,onClearScreens:j,onAddScreen:S})}):null,(0,n.jsx)(rJ,{active:h,onHome:()=>{(b(null),m("home"),a!==o)?p(o):r$({surface:"home"})},onExplore:S,onScreens:()=>{"screens"!==g&&(m("screens"),b("screens"),r$({surface:"screens"}))}}),(0,n.jsx)("style",{children:rX})]})}let rX=`
.portal-mobile-navigation {
  display:
    none;
}

@media (
  max-width:
    979px
) {
  /*
   * The desktop sidebar is removed on mobile.
   * Explore replaces it.
   */
  .app-sidebar {
    display:
      none !important;
  }

  .portal-mobile-navigation {
    display:
      block;
  }

  /*
   * Explore and Screens occupy the usable area between
   * the portal header and bottom navigation.
   */
  .portal-mobile-overlay {
    position:
      fixed;

    top:
      calc(
        var(
          --eds-shell-top-offset,
          0px
        )
        +
        var(
          --portal-header-height,
          48px
        )
      );

    left:
      0;

    right:
      0;

    bottom:
      calc(
        64px +
        env(
          safe-area-inset-bottom,
          0px
        )
      );

    z-index:
      55;

    width:
      100%;

    min-width:
      0;

    overflow-x:
      hidden;

    overflow-y:
      auto;

    overscroll-behavior:
      contain;

    -webkit-overflow-scrolling:
      touch;

    touch-action:
      pan-y;

    background:
      var(
        --eds-shell-bg,
        var(
          --bg,
          #f7f8fb
        )
      );

    color:
      var(
        --eds-text,
        var(
          --text,
          #111827
        )
      );
  }

  .portal-mobile-explore-overlay,
  .portal-mobile-screens-overlay {
    height:
      auto;
  }

  /*
   * Leave enough room below ordinary module pages for the
   * fixed Home / Explore / Screens navigation.
   */
  .app-content {
    padding-bottom:
      calc(
        82px +
        env(
          safe-area-inset-bottom,
          0px
        )
      ) !important;
  }

  .background-refresh-indicator {
    bottom:
      calc(
        78px +
        env(
          safe-area-inset-bottom,
          0px
        )
      ) !important;
  }
}
`,rQ={dashboard:"dashboard",home:"dashboard",students:"student",student:"student",teachers:"teacher",teacher:"teacher",parents:"parent",parent:"parent",attendance:"attendance",assessment:"assessment",assessments:"assessment",reports:"reports",report:"reports",calendar:"calendar",timetable:"timetable",finance:"finance",communication:"communication",communications:"communication",messages:"communication",message:"communication",announcements:"communication",announcement:"communication",workspace:"workspace",settings:"settings",setting:"settings",sync:"sync",devices:"device",device:"device",school:"school",schools:"school",branches:"branch",branch:"branch"};function rZ({open:e,hidden:r,portalTitle:t,portalSubtitle:a,activeInstitutionName:i,activeBranchName:o,hubUnreadCount:s=0,hubHasAttention:l=!1,hubKey:c,activeTab:d,homeKey:p,sections:u,openSections:h,footer:m,onNavigate:g,onOpenHub:b,onToggleSection:x,onResizeStart:f}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("aside",{"data-surface":"role-sidebar",className:["app-sidebar","shell-sidebar","eds-sidebar-surface",e&&"open",r&&"hidden"].filter(Boolean).join(" "),children:[(0,n.jsx)(rh,{}),(0,n.jsx)(rg,{}),(0,n.jsx)(rb,{}),(0,n.jsxs)("div",{className:"shell-sidebar-inner",children:[(0,n.jsxs)("header",{className:"sidebar-head shell-sidebar-head shell-hub-head",children:[(0,n.jsx)(rI,{unreadCount:s,attention:l,active:d===c,onOpen:b}),(0,n.jsxs)("button",{type:"button",onClick:b,"aria-label":"Open Eleeveon Hub","aria-current":d===c?"page":void 0,className:"shell-hub-direct-link",style:{position:"relative",zIndex:3,display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",cursor:"pointer",border:"1px solid var(--border, rgba(148,163,184,.3))",borderRadius:9,padding:"8px 10px",marginTop:6,background:d===c?"var(--surface-tertiary, rgba(148,163,184,.16))":"var(--surface, rgba(148,163,184,.07))",color:"inherit",fontSize:12,fontWeight:600},children:[(0,n.jsx)("span",{children:"✉ Eleeveon Hub"}),s>0&&(0,n.jsx)("span",{"aria-label":`${s} unread`,children:s})]})]}),(0,n.jsx)("nav",{className:"nav-list shell-nav-list","aria-label":`${t} navigation`,children:u.map(e=>(0,n.jsx)(rN,{title:e.title,open:!1!==h[e.title],activeKey:d,items:e.items.map(e=>({key:e.key,label:e.label,icon:function(e,r,t){let a=[e,r].join(" ").toLowerCase();for(let[e,r]of Object.entries(rQ))if(a.includes(e))return r;return null!=t&&!1!==t?(0,n.jsx)("span",{className:"shell-nav-legacy-icon","aria-hidden":"true",children:t}):(0,n.jsx)("span",{className:"shell-nav-legacy-icon","aria-hidden":"true",children:"•"})}(e.key,e.label,e.icon)})),onToggle:()=>x(e.title),onNavigate:g},e.title))}),m?(0,n.jsx)("footer",{className:"shell-sidebar-footer",children:m}):null]}),(0,n.jsx)("button",{type:"button",className:"sidebar-resize-handle","aria-label":"Resize sidebar",onMouseDown:f})]}),(0,n.jsx)(rG,{portalTitle:t,activeInstitutionName:i,activeBranchName:o,activeTab:d,homeKey:p,hubKey:c,sections:u,hubUnreadCount:s,hubHasAttention:l,onNavigate:g,onOpenHub:b})]})}function r0(){let e=e4();return e<=0?null:(0,n.jsx)("span",{"aria-label":`${e} unread ${1===e?"message":"messages"}`,title:`${e} unread ${1===e?"message":"messages"}`,style:{position:"absolute",top:-7,right:-7,minWidth:18,height:18,padding:"0 5px",borderRadius:999,background:"#e11d48",color:"#fff",border:"2px solid var(--surface, #fff)",fontSize:10,fontWeight:800,lineHeight:"14px",textAlign:"center",whiteSpace:"nowrap",zIndex:2,pointerEvents:"none"},children:e>99?"99+":e})}var r1=t(39908),r2=t(49779);let r5="__eleeveon_center__",r4=[{key:"add",label:"Add"},{key:"filter",label:"Filter"},{key:"print",label:"Print"},{key:"more",label:"More"}];function r3({name:e}){let r={width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0};return"add"===e?(0,n.jsx)("svg",{...r,children:(0,n.jsx)("path",{d:"M12 5v14M5 12h14"})}):"filter"===e?(0,n.jsxs)("svg",{...r,children:[(0,n.jsx)("path",{d:"M4 7h16M7 12h10m-7 5h4"}),(0,n.jsx)("circle",{cx:"8",cy:"7",r:"2",fill:"currentColor",stroke:"none"}),(0,n.jsx)("circle",{cx:"15",cy:"12",r:"2",fill:"currentColor",stroke:"none"})]}):"print"===e?(0,n.jsxs)("svg",{...r,children:[(0,n.jsx)("path",{d:"M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1-2-2h-2"}),(0,n.jsx)("path",{d:"M6 14h12v7H6z"})]}):(0,n.jsxs)("svg",{...r,children:[(0,n.jsx)("circle",{cx:"5",cy:"12",r:"1",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"12",cy:"12",r:"1",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"19",cy:"12",r:"1",fill:"currentColor"})]})}function r8({items:e,activeKey:r,onNavigate:t,branchName:a,online:o,memberImage:s,memberName:l,onOpenStatus:c,onOpenAccount:d}){let p,u=(p=new Set(e.map(e=>e.key))).has("saasWorkspace")?{title:"Developer Portal",icon:"\uD83D\uDEE0️",pinKey:"eleeveon_developer_pin_cards"}:p.has("ownerDashboard")||p.has("institutionWorkspace")?{title:"Owner Portal",icon:"\uD83D\uDC51",pinKey:"eleeveon_owner_pin_cards"}:1===p.size&&p.has("financeWorkspace")?{title:"Accountant Portal",icon:"\uD83D\uDCBC",pinKey:"eleeveon_accountant_pin_cards"}:{title:"Branch Admin Portal",icon:"\uD83C\uDF93",pinKey:"eleeveon_branch_admin_pin_cards"},h=(0,r2.gr)(),m=h?.handlers[r],g=r===r5?"Eleeveon Hub":e.find(e=>e.key===r)?.label||"Workspace",[b,x]=(0,i.useState)(!1),[f,v]=(0,i.useState)(!1),[y,w]=(0,i.useState)(""),[k,j]=(0,i.useState)(!1),S=(0,i.useRef)(null);(0,i.useEffect)(()=>{try{v("1"===localStorage.getItem(u.pinKey))}catch{}},[u.pinKey]),(0,i.useEffect)(()=>{w(""),x(!1)},[r]),(0,i.useEffect)(()=>j(!1),[s]),(0,i.useEffect)(()=>{if(!b)return;let e=e=>{S.current?.contains(e.target)||x(!1)},r=e=>{"Escape"===e.key&&x(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",r),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",r)}},[b]);let N=e=>{v(e),x(!1);try{localStorage.setItem(u.pinKey,e?"1":"0")}catch{}},C=e=>{x(!1),e!==r&&t(e)},E=(0,n.jsx)("div",{className:"ba-v7-tools",role:"toolbar","aria-label":`${g} actions`,children:r4.map(({key:e,label:t})=>(0,n.jsx)("button",{type:"button",className:"ba-v7-tool",onClick:()=>(e=>{x(!1),w("");let t=m?.[e];if(t)return void t();let a=new Set(["reportsWorkspace","studentReports","broadsheets","reportRemarks","studentAttendance"]);if("print"===e&&!a.has(r)){if((0,r1.Yi)(g))return;w("No table is visible to print in this section.");return}(0,r2.Io)(e)||w(`${e.charAt(0).toUpperCase()+e.slice(1)} isn't available in ${g} yet.`)})(e),"aria-label":`${t} in ${g}`,title:`${t} in ${g}`,children:(0,n.jsx)(r3,{name:e})},e))}),I=(0,n.jsx)("div",{className:"ba-v7-card-grid",role:"group","aria-label":`${u.title} workspaces`,children:e.map(e=>(0,n.jsxs)("button",{type:"button",className:`ba-v7-card ${r===e.key?"is-active":""}`,"aria-current":r===e.key?"page":void 0,onClick:()=>C(e.key),children:[(0,n.jsx)("span",{className:"ba-v7-card-icon","aria-hidden":"true",children:e.icon}),(0,n.jsx)("span",{className:"ba-v7-card-name",children:e.label})]},e.key))});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"ba-v7-nav",ref:S,id:"ba-workspace-navigation",children:[(0,n.jsx)("style",{children:r7}),(0,n.jsxs)("header",{className:"ba-v7-header",children:[(0,n.jsxs)("div",{className:"ba-v7-brand",children:[(0,n.jsx)("span",{className:"ba-v7-brand-mark","aria-hidden":"true",children:u.icon}),(0,n.jsxs)("div",{className:"ba-v7-brand-copy",children:[(0,n.jsx)("strong",{children:"Eleeveon Schools"}),(0,n.jsx)("small",{title:"Branch Admin Portal"===u.title?a:u.title,children:"Branch Admin Portal"===u.title?a||"Branch Administration":u.title})]})]}),(0,n.jsxs)("div",{className:"ba-v7-header-actions",children:[(0,n.jsxs)("button",{type:"button",className:"ba-v7-status",onClick:c,"aria-label":`Open sync status — ${o?"online":"offline"}`,title:`Sync ${o?"online":"offline"}`,children:[(0,n.jsx)("span",{className:`ba-v7-dot ${o?"is-online":"is-offline"}`,"aria-hidden":"true"}),(0,n.jsx)("span",{className:"ba-v7-status-name",children:o?"Online":"Offline"})]}),(0,n.jsxs)("button",{type:"button",className:"ba-v7-status ba-v12-hub",onClick:()=>C(r5),"aria-label":"Open Eleeveon Hub",title:"Eleeveon Hub","aria-current":r===r5?"page":void 0,children:[(0,n.jsx)("span",{"aria-hidden":"true",children:"✉"}),(0,n.jsx)("span",{className:"ba-v7-status-name",children:"Hub"}),(0,n.jsx)(r0,{})]}),(0,n.jsx)("button",{type:"button",className:"ba-v7-avatar",onClick:d,"aria-label":"Open account and workspace",children:s&&!k?(0,n.jsx)("img",{src:s,alt:"",onError:()=>j(!0)}):(0,n.jsx)("span",{"aria-hidden":"true",children:l?.trim().slice(0,1).toUpperCase()||"\uD83D\uDC64"})})]})]}),(0,n.jsxs)("div",{className:"ba-v7-nav-body",children:[(0,n.jsxs)("div",{className:"ba-v7-desktop-row",children:[(0,n.jsx)("nav",{className:"ba-v7-tabs","aria-label":`${u.title} workspaces`,children:e.map(e=>(0,n.jsxs)("button",{type:"button",onClick:()=>C(e.key),className:`ba-v7-tab ${r===e.key?"is-active":""}`,"aria-current":r===e.key?"page":void 0,children:[(0,n.jsx)("span",{"aria-hidden":"true",children:e.icon}),e.label]},e.key))}),E]}),(0,n.jsxs)("div",{className:"ba-v7-mobile-row",children:[(0,n.jsxs)("button",{type:"button",className:"ba-v7-selector","aria-expanded":b||f,"aria-controls":"ba-v7-card-panel",onClick:()=>x(e=>!e),title:"Switch workspace",children:[(0,n.jsx)("span",{children:g}),(0,n.jsx)("span",{"aria-hidden":"true",children:b?"⌃":"⌄"})]}),E]}),b&&(0,n.jsxs)("div",{id:"ba-v7-card-panel",className:"ba-v7-panel is-floating",children:[(0,n.jsxs)("div",{className:"ba-v7-panel-head",children:[(0,n.jsx)("span",{children:"Workspaces"}),(0,n.jsxs)("button",{type:"button",className:f?"is-pinned":"",onClick:()=>N(!f),"aria-pressed":f,title:f?"Unpin navigation cards":"Keep navigation cards visible",children:[(0,n.jsx)("span",{"aria-hidden":"true",children:"\uD83D\uDCCC"})," ",f?"Unpin cards":"Pin cards"]})]}),I]}),y&&(0,n.jsxs)("div",{className:"ba-v7-feedback",role:"status",children:[y,(0,n.jsx)("button",{type:"button","aria-label":"Dismiss notice",onClick:()=>w(""),children:"✕"})]})]})]}),f&&!b&&(0,n.jsxs)("div",{className:"ba-v7-pinned-cards ba-v7-panel is-pinned",children:[(0,n.jsxs)("div",{className:"ba-v7-panel-head",children:[(0,n.jsx)("span",{children:"Workspaces"}),(0,n.jsx)("button",{type:"button",onClick:()=>N(!1),"aria-label":"Unpin navigation cards",children:"\uD83D\uDCCC Unpin cards"})]}),I]})]})}let r7=`
.ba-v7-nav { position:sticky; top:var(--eds-shell-top-offset,0px); z-index:35; width:100%; min-width:0; color:var(--text,#172033); }
.ba-v7-nav *,.ba-v7-nav *::before,.ba-v7-nav *::after { box-sizing:border-box; }
.ba-v7-nav button { font:inherit; cursor:pointer; -webkit-tap-highlight-color:transparent; }
.ba-v7-header { display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:8px; width:100%;height:54px;min-height:54px;padding:6px 14px;background:var(--eds-header-bg,var(--surface,#fff));border-bottom:1px solid var(--border,rgba(0,0,0,.1)); }
.ba-v7-brand { display:flex;align-items:center;gap:9px;min-width:0;overflow:hidden; }
.ba-v7-brand-mark {flex:0 0 34px;width:34px;height:34px;display:grid;place-items:center;border-radius:9px;background:color-mix(in srgb,var(--primary-color,#2563eb) 10%,var(--surface,#fff));font-size:18px;}
.ba-v7-brand-copy {display:grid;gap:2px;min-width:0;overflow:hidden;}
.ba-v7-brand-copy strong,.ba-v7-brand-copy small {overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.ba-v7-brand-copy strong{font-size:13px;line-height:17px;font-weight:800;}
.ba-v7-brand-copy small{font-size:11px;line-height:14px;color:var(--muted,#64748b);}
.ba-v7-header-actions{display:flex;align-items:center;justify-content:flex-end;flex:0 0 140px;width:140px;min-width:140px;height:42px;gap:8px;}
.ba-v7-nav .ba-v7-status{flex:0 0 90px;width:90px;min-width:90px;max-width:90px;height:36px;min-height:36px;max-height:36px;display:flex;align-items:center;justify-content:center;gap:6px;padding:0 7px;border:1px solid var(--border,#d4dae3);background:var(--surface,#fff);border-radius:10px;color:var(--text,#172033);font-size:11px;font-weight:700;white-space:nowrap;}
.ba-v7-nav .ba-v12-hub{position:relative;overflow:visible;}
.ba-v7-dot{flex:0 0 8px;width:8px;height:8px;border-radius:50%;}.ba-v7-dot.is-online{background:#16a34a}.ba-v7-dot.is-offline{background:#d97706}
.ba-v7-nav .ba-v7-avatar{flex:0 0 38px;width:38px;min-width:38px;max-width:38px;height:38px;min-height:38px;max-height:38px;display:grid;place-items:center;padding:0;border:1px solid var(--border,#d4dae3);border-radius:50%;background:var(--surface,#fff);overflow:hidden;color:var(--text,#172033);}
.ba-v7-avatar img{width:100%;height:100%;object-fit:cover}.ba-v7-avatar span{font-size:15px;line-height:1}
.ba-v7-nav-body{position:relative;background:var(--eds-header-bg,var(--surface,#fff));border-bottom:1px solid var(--border,rgba(0,0,0,.1));}
.ba-v7-desktop-row{display:flex;align-items:center;gap:8px;min-width:0;padding:6px 12px;}
.ba-v7-tabs{display:flex;flex:1 1 0;align-items:center;gap:3px;min-width:0;overflow-x:auto;white-space:nowrap;scrollbar-width:thin;}
.ba-v7-nav .ba-v7-tab{display:inline-flex;flex:0 0 auto;align-items:center;gap:6px;min-height:37px;padding:7px 11px;border:1px solid transparent;border-radius:9px;background:transparent;color:var(--text,#172033);font-size:12px;font-weight:700;white-space:nowrap;}
.ba-v7-tab.is-active{background:color-mix(in srgb,var(--primary-color,#2563eb) 10%,var(--surface,#fff));border-color:color-mix(in srgb,var(--primary-color,#2563eb) 25%,var(--border,#d4dae3));}
.ba-v7-tools{display:flex;align-items:center;flex:0 0 auto;gap:3px;}
.ba-v7-nav .ba-v7-tool{width:34px;min-width:34px;max-width:34px;height:34px;min-height:34px;max-height:34px;display:grid;place-items:center;padding:0;background:transparent;border:1px solid transparent;border-radius:9px;color:var(--text,#172033);}
.ba-v7-tool:hover{background:color-mix(in srgb,var(--primary-color,#2563eb) 9%,var(--surface,#fff));}
.ba-v7-mobile-row{display:none;}
.ba-v7-feedback{display:flex;justify-content:space-between;gap:8px;padding:7px 12px;font-size:12px;background:color-mix(in srgb,var(--primary-color,#2563eb) 6%,var(--surface,#fff));}
.ba-v7-feedback button{border:0;background:transparent;color:inherit}
.ba-v7-panel{padding:7px;background:var(--eds-header-bg,var(--surface,#fff));border:1px solid var(--border,#d4dae3);border-radius:11px;box-shadow:0 14px 34px rgba(15,23,42,.11);}
.ba-v7-panel-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 2px 6px;color:var(--muted,#64748b);font-size:11px;font-weight:700;}
.ba-v7-panel-head button{padding:5px 8px;border:1px solid var(--border,#d4dae3);border-radius:8px;color:var(--text,#172033);background:var(--surface,#fff);font-size:11px;}
.ba-v7-panel-head button.is-pinned{background:color-mix(in srgb,var(--primary-color,#2563eb) 9%,var(--surface,#fff));}
.ba-v7-card-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px;}
.ba-v7-nav .ba-v7-card,.ba-v7-pinned-cards .ba-v7-card{display:grid;place-content:center;justify-items:center;gap:3px;min-width:0;min-height:49px;padding:5px 2px;border:1px solid var(--border,#d4dae3);border-radius:9px;background:color-mix(in srgb,var(--surface,#fff) 94%,var(--text,#172033) 6%);color:var(--text,#172033);}
.ba-v7-nav .ba-v7-card.is-active,.ba-v7-pinned-cards .ba-v7-card.is-active{border-color:var(--primary-color,#2563eb);background:color-mix(in srgb,var(--primary-color,#2563eb) 9%,var(--surface,#fff));}
.ba-v7-card-icon{font-size:16px;line-height:17px}.ba-v7-card-name{max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:10px;font-weight:700;}
.ba-v7-nav button:focus-visible{outline:2px solid var(--primary-color,#2563eb);outline-offset:2px;}
@media(max-width:760px){
.ba-v7-header{height:47px;min-height:47px;padding:4px 9px}.ba-v7-brand-mark{flex-basis:29px;width:29px;height:29px;font-size:15px}
.ba-v7-brand-copy strong{font-size:12px;line-height:16px}.ba-v7-brand-copy small{font-size:10px;line-height:12px}
.ba-v7-header-actions{flex:0 0 83px;width:83px;min-width:83px;height:34px;gap:5px}
.ba-v7-nav .ba-v7-status{flex:0 0 33px;width:33px;min-width:33px;max-width:33px;height:32px;min-height:32px;max-height:32px;padding:0}
.ba-v7-status-name{display:none}.ba-v7-nav .ba-v7-avatar{flex-basis:34px;width:34px;min-width:34px;max-width:34px;height:34px;min-height:34px;max-height:34px}
.ba-v7-desktop-row{display:none}.ba-v7-mobile-row{display:flex;align-items:center;gap:4px;min-width:0;padding:5px 8px;}
.ba-v7-nav .ba-v7-selector{display:flex;align-items:center;justify-content:space-between;gap:5px;flex:1 1 0;min-width:0;height:36px;min-height:36px;padding:0 9px;border:1px solid var(--border,#d4dae3);border-radius:9px;background:color-mix(in srgb,var(--surface,#fff) 94%,var(--text,#172033) 6%);color:var(--text,#172033);font-size:12px;font-weight:750;}
.ba-v7-selector span:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ba-v7-mobile-row .ba-v7-tool{width:33px;min-width:33px;height:34px;min-height:34px;}
.ba-v7-panel.is-floating{position:absolute;z-index:95;top:100%;left:8px;right:8px;max-height:min(60dvh,320px);overflow-y:auto;}
.ba-v7-panel.is-pinned{position:relative;z-index:auto;margin:0 8px 6px;box-shadow:none;}
.ba-v7-pinned-cards button {font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;}
}
@media(min-width:761px){.ba-v7-panel{display:none}}
@media(max-width:330px){.ba-v7-mobile-row{gap:2px;padding-left:5px;padding-right:5px}.ba-v7-nav .ba-v7-tool{width:30px;min-width:30px}.ba-v7-card-name{font-size:9px}}
@media print{.ba-v7-nav{display:none!important}}
`;function r6({image:e,name:r}){let[t,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{a(!1)},[e]),(0,n.jsx)("span",{className:"header-account-avatar",children:e&&!t?(0,n.jsx)("img",{src:e,alt:"",onError:()=>a(!0)}):r.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]??"").join("").toUpperCase()})}function r9(){return(0,n.jsxs)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,n.jsx)("circle",{cx:"10.8",cy:"10.8",r:"6.2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,n.jsx)("path",{d:"m15.5 15.5 4.4 4.4",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}function te({activeLabel:e,workspaceLabel:r,memberName:t,memberRole:a,memberImage:o,memberMeta:s,online:l,realtimeConnected:c,initialSyncDone:d,realtimeStatus:p,onToggleSidebar:u,onOpenStatus:h,onOpenAccount:m,onOpenHub:g}){let b=e4(),{overlayVisible:x}=(0,C.C)(),[f,v]=(0,i.useState)(!1),[y,w]=(0,i.useState)(""),[k,j]=(0,i.useState)([]),S=(0,i.useRef)(null);if((0,i.useEffect)(()=>{let e=e=>{j(Array.isArray(e.detail?.results)?e.detail.results:[])};return window.addEventListener("eleeveon:portal-search-results",e),()=>{window.removeEventListener("eleeveon:portal-search-results",e)}},[]),(0,i.useEffect)(()=>{f&&window.dispatchEvent(new CustomEvent("eleeveon:portal-search-query",{detail:{query:y}}))},[y,f]),(0,i.useEffect)(()=>{if(!f)return;let e=window.setTimeout(()=>S.current?.focus(),0);return()=>window.clearTimeout(e)},[f]),x)return null;let N=l?c?"Live updates connected":d?`Synced — realtime ${p}`:"Sync needs attention":"Offline — using local data",E=()=>{v(!1),w(""),j([])},I=e=>{window.dispatchEvent(new CustomEvent("eleeveon:portal-search-open",{detail:{key:e}})),E()};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("header",{className:"app-header eds-header-surface eds-glass-subtle portal-fixed-header","data-window-overlay":"fallback",children:[f?null:(0,n.jsx)("button",{className:"icon-btn primary portal-header-sidebar-toggle",onClick:u,type:"button","aria-label":"Toggle sidebar",children:"☰"}),f?(0,n.jsxs)("div",{className:"portal-header-search-box",children:[(0,n.jsx)("span",{className:"portal-header-search-leading",children:(0,n.jsx)(r9,{})}),(0,n.jsx)("input",{ref:S,value:y,onChange:e=>w(e.target.value),placeholder:"Search this portal","aria-label":"Search this portal",onKeyDown:e=>{"Escape"===e.key?E():"Enter"===e.key&&k[0]&&I(k[0].key)}}),(0,n.jsx)("button",{type:"button",className:"portal-search-close",onClick:E,"aria-label":"Close search",children:"\xd7"})]}):(0,n.jsxs)("div",{className:"header-title",children:[(0,n.jsx)("strong",{children:e}),(0,n.jsx)("span",{children:r})]}),f?null:(0,n.jsx)("button",{type:"button",className:"icon-btn portal-header-search-button",onClick:()=>{v(!0)},"aria-label":"Search portal",title:"Search",children:(0,n.jsx)(r9,{})}),g?(0,n.jsxs)("button",{type:"button",className:"icon-btn portal-header-hub-button",onClick:()=>{E(),g()},"aria-label":`Open Eleeveon Hub${b>0?`, ${b} unread messages`:""}`,title:"Eleeveon Hub",children:[(0,n.jsxs)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M20 11.5a7.5 7.5 0 0 1-7.5 7.5 8 8 0 0 1-3.3-.7L4 20l1.7-5.2a8 8 0 0 1-.7-3.3 7.5 7.5 0 0 1 7.5-7.5A7.5 7.5 0 0 1 20 11.5Z"}),(0,n.jsx)("path",{d:"M9 11.5h7"})]}),b>0&&(0,n.jsx)("span",{className:"portal-header-hub-unread","aria-hidden":"true",children:b>99?"99+":b})]}):null,(0,n.jsx)("button",{type:"button",className:`sync-dot-btn header-status ${l?c?"live":d?"ok":"warn":"warn"}`,onClick:()=>{E(),h()},"aria-label":"Open system status",title:N,children:(0,n.jsx)("span",{})}),(0,n.jsxs)("button",{type:"button",className:"header-account-button",onClick:()=>{E(),m()},"aria-label":"Open account and workspace menu",title:s,children:[(0,n.jsx)(r6,{image:o,name:t}),(0,n.jsxs)("span",{className:"header-account-copy",children:[(0,n.jsx)("strong",{children:t}),(0,n.jsx)("small",{children:a})]})]})]}),f&&y.trim()?(0,n.jsx)("section",{className:"portal-header-search-results","aria-label":"Search results",children:k.length?k.map(e=>(0,n.jsxs)("button",{type:"button",onClick:()=>I(e.key),children:[(0,n.jsx)("span",{className:"portal-search-result-icon",children:e.icon||"⌕"}),(0,n.jsxs)("span",{className:"portal-search-result-copy",children:[(0,n.jsx)("strong",{children:e.label}),(0,n.jsx)("small",{children:e.group})]}),(0,n.jsx)("b",{"aria-hidden":"true",children:"›"})]},e.key)):(0,n.jsx)("div",{className:"portal-search-empty",children:"No matching portal item."})}):null,(0,n.jsx)("style",{children:tr})]})}let tr=`
.portal-header-hub-button { position: relative; flex-shrink: 0; display: inline-grid; place-items: center; }
.portal-header-hub-unread { position: absolute; top: -4px; right: -5px; display: grid; place-items: center; min-width: 17px; height: 17px; border-radius: 99px; padding: 0 4px; background: #dc2626; color: #fff; font: 700 10px/1 system-ui,sans-serif; box-shadow: 0 0 0 2px var(--eds-surface, var(--surface, #fff)); }

/* =====================================================
 * FIXED PORTAL HEADER
 * ===================================================== */

.portal-fixed-header {
  position:
    fixed !important;

  top:
    var(
      --eds-shell-top-offset,
      0px
    ) !important;

  left:
    var(
      --portal-content-left,
      0px
    );

  right:
    0;

  width:
    auto !important;

  min-height:
    var(
      --portal-header-height,
      48px
    );

  z-index:
    70 !important;
}

/*
 * Fixed header is removed from normal document flow.
 * Reserve its height before page content begins.
 */
.app-main {
  padding-top:
    var(
      --portal-header-height,
      48px
    );
}

/* =====================================================
 * SEARCH BUTTON
 * ===================================================== */

.portal-header-search-button svg,
.portal-header-search-box svg {
  width:
    19px;

  height:
    19px;
}

.portal-header-search-box {
  flex:
    1;

  min-width:
    0;

  height:
    38px;

  display:
    grid;

  grid-template-columns:
    26px
    minmax(0, 1fr)
    30px;

  align-items:
    center;

  gap:
    3px;

  padding:
    0 4px
    0 9px;

  border:
    1px solid
    var(
      --eds-border,
      var(--border, rgba(0,0,0,.10))
    );

  border-radius:
    14px;

  background:
    var(
      --eds-surface,
      var(--surface, #ffffff)
    );

  box-shadow:
    inset 0 1px 0
    rgba(255,255,255,.04);
}

.portal-header-search-leading {
  display:
    grid;

  place-items:
    center;

  color:
    var(
      --eds-text-muted,
      var(--muted, #64748b)
    );
}

.portal-header-search-box input {
  width:
    100%;

  min-width:
    0;

  border:
    0;

  outline:
    0;

  background:
    transparent;

  color:
    var(
      --eds-text-strong,
      var(--text, #111827)
    );

  font:
    inherit;

  font-size:
    12px;
}

.portal-header-search-box input::placeholder {
  color:
    var(
      --eds-text-muted,
      var(--muted, #64748b)
    );
}

.portal-search-close {
  width:
    30px;

  height:
    30px;

  display:
    grid;

  place-items:
    center;

  border:
    0;

  border-radius:
    10px;

  background:
    transparent;

  color:
    var(
      --eds-text-muted,
      var(--muted, #64748b)
    );

  font-size:
    20px;

  cursor:
    pointer;
}

/* =====================================================
 * SEARCH RESULTS
 * ===================================================== */

.portal-header-search-results {
  position:
    fixed;

  top:
    calc(
      var(
        --eds-shell-top-offset,
        0px
      )
      +
      var(
        --portal-header-height,
        48px
      )
      +
      6px
    );

  right:
    8px;

  width:
    min(
      430px,
      calc(
        100vw -
        var(
          --portal-content-left,
          0px
        )
        -
        16px
      )
    );

  max-height:
    min(
      62dvh,
      520px
    );

  overflow-y:
    auto;

  z-index:
    90;

  padding:
    6px;

  border:
    1px solid
    var(
      --eds-border,
      var(--border, rgba(0,0,0,.10))
    );

  border-radius:
    17px;

  background:
    var(
      --eds-surface,
      var(--surface, #ffffff)
    );

  box-shadow:
    0 20px 50px
    rgba(15,23,42,.18);
}

.portal-header-search-results
> button {
  width:
    100%;

  min-height:
    54px;

  display:
    grid;

  grid-template-columns:
    36px
    minmax(0, 1fr)
    auto;

  align-items:
    center;

  gap:
    8px;

  border:
    0;

  border-radius:
    12px;

  padding:
    7px;

  background:
    transparent;

  color:
    inherit;

  text-align:
    left;

  cursor:
    pointer;
}

.portal-header-search-results
> button:hover {
  background:
    var(
      --eds-primary-softer,
      color-mix(
        in srgb,
        var(
          --primary-color,
          #2563eb
        ) 7%,
        transparent
      )
    );
}

.portal-search-result-icon {
  width:
    36px;

  height:
    36px;

  display:
    grid;

  place-items:
    center;

  border-radius:
    11px;

  background:
    color-mix(
      in srgb,
      var(
        --primary-color,
        #2563eb
      ) 10%,
      transparent
    );

  font-size:
    17px;
}

.portal-search-result-copy {
  min-width:
    0;
}

.portal-search-result-copy
strong,
.portal-search-result-copy
small {
  display:
    block;

  overflow:
    hidden;

  white-space:
    nowrap;

  text-overflow:
    ellipsis;
}

.portal-search-result-copy
strong {
  color:
    var(
      --eds-text-strong,
      var(--text, #111827)
    );

  font-size:
    12px;

  font-weight:
    850;
}

.portal-search-result-copy
small {
  margin-top:
    2px;

  color:
    var(
      --eds-text-muted,
      var(--muted, #64748b)
    );

  font-size:
    9px;
}

.portal-header-search-results
> button
> b {
  color:
    var(
      --eds-text-muted,
      var(--muted, #64748b)
    );

  font-size:
    20px;
}

.portal-search-empty {
  padding:
    18px;

  color:
    var(
      --eds-text-muted,
      var(--muted, #64748b)
    );

  text-align:
    center;

  font-size:
    11px;
}

/* =====================================================
 * MOBILE
 * ===================================================== */

@media (
  max-width: 979px
) {
  .portal-fixed-header {
    left:
      0 !important;

    right:
      0 !important;

    width:
      100% !important;
  }

  .portal-header-sidebar-toggle {
    display:
      none !important;
  }

  .app-header {
    gap:
      6px;
  }

  .app-header
  .header-title {
    min-width:
      0;
  }

  .portal-header-search-results {
    left:
      8px;

    right:
      8px;

    width:
      auto;
  }
}

/* =====================================================
 * VERY SMALL PHONE
 * ===================================================== */

@media (
  max-width: 420px
) {
  .portal-header-search-button {
    width:
      34px !important;

    height:
      34px !important;

    border-radius:
      13px !important;
  }

  .portal-header-search-box {
    height:
      36px;
  }
}
`;function tt({children:e,pattern:r="dots",glow:t=!0,fixed:a=!1,style:i,...o}){return(0,n.jsxs)("div",{style:{position:a?"fixed":"relative",inset:a?0:void 0,minHeight:a?void 0:"100%",isolation:"isolate",background:"var(--eds-gradient-page-glow), var(--eds-bg)",...i},...o,children:[t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(rh,{placement:"top-left",size:"30rem",opacity:.1}),(0,n.jsx)(rh,{placement:"bottom-right",size:"24rem",opacity:.07})]}):null,"none"!==r?(0,n.jsx)(rg,{variant:r,opacity:.035}):null,(0,n.jsx)("div",{style:{position:"relative",zIndex:1},children:e})]})}function ta({opacity:e=.04,blendMode:r="soft-light",absolute:t=!0,style:a,...i}){let o={position:t?"absolute":void 0,inset:t?0:void 0,pointerEvents:"none",backgroundImage:"var(--eds-texture-grain)",backgroundSize:"var(--eds-texture-grain-size, 140px 140px)",opacity:Math.min(1,Math.max(0,e)),mixBlendMode:r,...a};return(0,n.jsx)("div",{"aria-hidden":"true",style:o,...i})}function tn({children:e,className:r}){return(0,n.jsx)("section",{className:["app-content","shell-portal-content",r].filter(Boolean).join(" "),"data-portal-content":"true",children:(0,n.jsxs)(tt,{pattern:"dots",glow:!0,className:"shell-content-background",children:[(0,n.jsx)(ta,{opacity:.018}),(0,n.jsx)("div",{className:"app-content-inner","data-portal-module-boundary":"true",children:e})]})})}function ti({activeRoute:e}){let r=(0,i.useRef)(null),t=(0,i.useRef)(null),[a,o]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=r.current,a=t.current;if(!e||!a)return;let n=null,i=null,s=0,l=!1,c=!1,d=()=>{n&&n.removeEventListener("scroll",p),i?.disconnect(),i=null,n=null},p=()=>{n&&!l&&(c=!0,e.scrollLeft=n.scrollLeft,c=!1)},u=()=>{n&&!c&&(l=!0,n.scrollLeft=e.scrollLeft,l=!1)},h=()=>{let r=Array.from(document.querySelectorAll('[data-workspace-hscroll="true"], .ba-table-scroll')).find(e=>(e=>{if(!e.isConnected||e.clientWidth<=0||0===e.getClientRects().length)return!1;let r=e;for(;r;){let e=window.getComputedStyle(r);if("none"===e.display||"hidden"===e.visibility||"collapse"===e.visibility)return!1;r=r.parentElement}return!0})(e)&&e.scrollWidth>e.clientWidth+2&&null===e.closest('[aria-hidden="true"]'))||null;r!==n&&(d(),(n=r)&&(n.addEventListener("scroll",p,{passive:!0}),(i=new ResizeObserver(m)).observe(n),n.firstElementChild instanceof HTMLElement&&i.observe(n.firstElementChild)));let t=e.clientWidth,s=!!(n&&n.scrollWidth>n.clientWidth+2&&t>0);o(s),n&&s?(a.style.width=`${t+n.scrollWidth-n.clientWidth}px`,e.scrollLeft=n.scrollLeft):(a.style.width=`${Math.max(t,1)}px`,e.scrollLeft=0)};function m(){cancelAnimationFrame(s),s=requestAnimationFrame(h)}let g=new MutationObserver(m);g.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class","style","hidden","aria-hidden"]});let b=new ResizeObserver(m);return b.observe(e),e.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",m),m(),()=>{cancelAnimationFrame(s),d(),g.disconnect(),b.disconnect(),e.removeEventListener("scroll",u),window.removeEventListener("resize",m)}},[e]),(0,n.jsxs)("div",{className:"eds-portal-hscroll-slot","aria-label":"Table horizontal scrolling",children:[(0,n.jsx)("div",{ref:r,className:`eds-portal-hscroll${a?" is-needed":""}`,role:"region","aria-label":"Scroll the current table horizontally",tabIndex:a?0:-1,children:(0,n.jsx)("div",{ref:t,className:"eds-portal-hscroll-spacer"})}),(0,n.jsx)("style",{children:`
        .eds-portal-hscroll-slot {
          display: block !important;
          flex: 0 0 auto;
          width: 100%;
          min-width: 0;
          box-sizing: border-box;
          padding: 0 12px;
          background: var(--surface, #f8fafc);
          position: relative;
          z-index: 5;
        }
        .eds-portal-hscroll {
          display: block;
          width: 100%;
          height: 16px;
          min-height: 16px;
          box-sizing: border-box;
          overflow-x: auto;
          overflow-y: hidden;
          overscroll-behavior-x: contain;
          scrollbar-width: auto;
          scrollbar-color: #64748b #dbe3ee;
          border-radius: 999px;
        }
        .eds-portal-hscroll-spacer { height: 1px; min-height: 1px; }
        .eds-portal-hscroll::-webkit-scrollbar { height: 12px; }
        .eds-portal-hscroll::-webkit-scrollbar-track { background: #dbe3ee; border-radius: 999px; }
        .eds-portal-hscroll::-webkit-scrollbar-thumb { background: #64748b; border: 2px solid #dbe3ee; border-radius: 999px; }
        .eds-portal-hscroll:focus-visible { outline: 2px solid #2563eb; outline-offset: -2px; }
        .eds-workspace-table-scroll {
          width: 100%; max-width: 100%; min-width: 0;
          overflow-x: auto; overscroll-behavior-x: contain;
          scrollbar-width: none;
        }
        .eds-workspace-table-scroll::-webkit-scrollbar { height: 0 !important; display: none !important; }
      `})]})}t(22055);var to=t(89070),ts=t(73481);let tl=(0,i.forwardRef)(function({variant:e="primary",size:r="md",loading:t=!1,leadingIcon:a,trailingIcon:i,fullWidth:o=!1,disabled:s,className:l,children:c,...d},p){return(0,n.jsxs)("button",{ref:p,type:"button",className:["eds-button",`eds-button-${e}`,`eds-button-${r}`,o&&"eds-button-full",t&&"eds-button-loading",l].filter(Boolean).join(" "),disabled:s||t,"aria-busy":t,...d,children:[t?(0,n.jsx)("span",{className:"eds-button-spinner","aria-hidden":"true"}):a?(0,n.jsx)("span",{className:"eds-button-icon",children:a}):null,(0,n.jsx)("span",{className:"eds-button-label",children:c}),!t&&i?(0,n.jsx)("span",{className:"eds-button-icon",children:i}):null]})});function tc({title:e,meta:r,children:t,className:a}){return(0,n.jsxs)("section",{className:["shell-control-section",a].filter(Boolean).join(" "),children:[e||r?(0,n.jsxs)("header",{className:"shell-control-section-head",children:[e?(0,n.jsx)("span",{children:e}):(0,n.jsx)("span",{}),r?(0,n.jsx)("small",{children:r}):null]}):null,t]})}function td(e){return(0,n.jsx)(tc,{...e,className:["account-control-section",e.className].filter(Boolean).join(" ")})}var tp=t(61127),tu=t(41181);function th({image:e,label:r,fallback:t,active:a}){let[o,s]=(0,i.useState)(!1);(0,i.useEffect)(()=>{s(!1)},[e]);let l=!!e&&!o;return(0,n.jsxs)("span",{className:["workspace-avatar","workspace-thumbnail",a&&"active"].filter(Boolean).join(" "),"aria-label":`${r} image`,children:[l?(0,n.jsx)("img",{src:e||"",alt:"",onError:()=>s(!0)}):(0,n.jsx)("span",{className:"workspace-thumbnail-fallback","aria-hidden":"true",children:t}),(0,n.jsx)("span",{className:["workspace-thumbnail-status",a?"current":"available"].join(" "),"aria-hidden":"true"})]})}function tm({memberships:e,selectedMembership:r,identities:t,switchingMembershipId:a,membershipKey:i,sameMembership:o,roleIcon:s,onSwitchMembership:l}){return(0,n.jsx)("div",{className:"workspace-list shell-workspace-switcher compact-workspace-switcher",children:e.map(e=>{let c=i(e),d=o(e,r),p=a===c,u=(0,tu.YT)(e,t),h=(0,tu.sX)(e,t),m=(0,tu.dV)(e,t),g=(0,tp.R)(e.role);return(0,n.jsxs)("button",{type:"button",className:d?"active":"",onClick:()=>l(e),disabled:!!a,children:[(0,n.jsx)(th,{image:u,label:g,fallback:s(e.role),active:d}),(0,n.jsxs)("span",{className:"workspace-switch-copy",children:[(0,n.jsx)("strong",{children:g}),(0,n.jsxs)("small",{title:`${h} \xb7 ${m}`,children:[h,m&&"Workspace access"!==m?` \xb7 ${m}`:""]})]}),(0,n.jsx)("b",{children:p?"...":d?"Current":"Open"})]},c)})})}function tg({src:e,name:r}){let[t,a]=(0,i.useState)(!1);(0,i.useEffect)(()=>{a(!1)},[e]);let o=!!e&&!t;return(0,n.jsx)("span",{className:"drawer-account-photo","aria-label":`${r} profile image`,children:o?(0,n.jsx)("img",{src:e||"",alt:"",onError:()=>a(!0)}):(0,n.jsx)("span",{className:"drawer-account-photo-fallback",children:r.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]??"").join("").toUpperCase()})})}function tb({open:e,memberName:r,memberRole:t,memberImage:a,selectedMembership:o,memberships:s,identities:l,switchingMembershipId:c,schoolId:d,branchId:p,schools:u=[],branches:h=[],lockedContext:x=!1,online:f,realtimeConnected:v,membershipKey:y,sameMembership:w,roleLabel:k,roleIcon:S,onClose:N,onSwitchMembership:C,onSchoolChange:E,onBranchChange:I,onOpenStatus:A,onSelectRole:z,onLogout:M}){let R=(0,m.useRouter)(),[$,T]=(0,i.useState)(!1),L=(0,to.t)(),D=(0,g.F)(),P=(0,b.t)(),[O,U]=(0,i.useState)(!1),[B,F]=(0,i.useState)("");(0,i.useEffect)(()=>{e||(T(!1),F(""))},[e]);let H=async e=>{if(O)return;F("");let r=String(D.user?.id??"").trim();if(!r)return void F("Your profile is still loading. Please try again.");let t=P.effectiveSettings,a=String(t?.appearanceMode||t?.theme||t?.mode||"light"),n=String(t?.primaryColor||("u">typeof document?getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim():"")||"#2f6fed");(0,ts.O5)(L.storageKey,{...L.settings,appearanceMode:e},{sharedDefaultMode:a,sharedPrimaryColor:n,sharedFontSize:t?.fontSize}),U(!0);try{await j.db.appUsers.get(r)&&await j.db.appUsers.update(r,{preferredTheme:e})}catch{F("Appearance changed, but the user preference could not be saved to the local user record.")}finally{U(!1)}};return(0,i.useEffect)(()=>{if(!e||"u"<typeof document)return;let r=document.documentElement,t=document.body,a={htmlOverflow:r.style.overflow,htmlOverflowY:r.style.overflowY,bodyOverflow:t.style.overflow,bodyOverflowY:t.style.overflowY,htmlOverscroll:r.style.overscrollBehavior,bodyOverscroll:t.style.overscrollBehavior};return r.style.overflow="hidden",r.style.overflowY="hidden",r.style.overscrollBehavior="none",t.style.overflow="hidden",t.style.overflowY="hidden",t.style.overscrollBehavior="none",()=>{r.style.overflow=a.htmlOverflow,r.style.overflowY=a.htmlOverflowY,r.style.overscrollBehavior=a.htmlOverscroll,t.style.overflow=a.bodyOverflow,t.style.overflowY=a.bodyOverflowY,t.style.overscrollBehavior=a.bodyOverscroll}},[e]),(0,n.jsxs)("aside",{className:["context-drawer","account-drawer","shell-account-drawer","compact-account-drawer","eds-account-drawer-surface",e&&"open"].filter(Boolean).join(" "),"aria-hidden":!e,children:[(0,n.jsx)(rh,{placement:"top-right",size:"14rem",opacity:.035}),(0,n.jsx)(rg,{variant:"network",opacity:.008}),(0,n.jsx)(rb,{texture:"grain",intensity:.18,decorative:!0,className:"shell-drawer-texture"}),(0,n.jsxs)("div",{className:"compact-drawer-inner",children:[(0,n.jsxs)("header",{className:"compact-drawer-head",children:[(0,n.jsxs)("button",{type:"button",className:"compact-drawer-identity drawer-identity-profile-link",onClick:()=>{N(),R.push("/profile")},"aria-label":"Open my profile",children:[(0,n.jsx)(tg,{src:a,name:r}),(0,n.jsxs)("span",{className:"compact-drawer-member-copy",children:[(0,n.jsx)("strong",{children:r}),(0,n.jsx)("small",{children:t})]})]}),(0,n.jsx)("button",{className:"compact-drawer-close",onClick:N,type:"button","aria-label":"Close account menu",children:"✕"})]}),s.length>1?(0,n.jsxs)(td,{title:"Workspaces",meta:`${s.length}`,className:"compact-workspaces-section",children:[(0,n.jsxs)("button",{type:"button",className:"drawer-compact-switch-trigger","aria-expanded":$,onClick:()=>T(e=>!e),children:[(0,n.jsx)("span",{className:"drawer-compact-switch-icon","aria-hidden":"true",children:"⇄"}),(0,n.jsxs)("span",{className:"drawer-compact-switch-copy",children:[(0,n.jsx)("strong",{children:$?"Choose a workspace":"Switch workspace"}),(0,n.jsx)("small",{children:$?"Select another available role or school":`${t} \xb7 ${s.length} available`})]}),(0,n.jsx)("span",{className:"drawer-compact-switch-chevron","aria-hidden":"true",children:$?"⌃":"⌄"})]}),$&&(0,n.jsx)("div",{className:"drawer-compact-switch-panel",children:(0,n.jsx)(tm,{memberships:s,selectedMembership:o,identities:l,switchingMembershipId:c,membershipKey:y,sameMembership:w,roleLabel:k,roleIcon:S,onSwitchMembership:e=>{T(!1),C(e)}})})]}):null,(0,n.jsxs)(td,{title:"Appearance",className:"compact-appearance-section",children:[(0,n.jsx)("div",{className:"drawer-appearance-choices",role:"group","aria-label":"Personal appearance",children:[{value:"light",label:"Light",icon:"☀"},{value:"dark",label:"Dark",icon:"☾"},{value:"system",label:"Default",icon:"◐"}].map(e=>(0,n.jsxs)("button",{type:"button",className:`drawer-appearance-choice ${L.settings.appearanceMode===e.value?"is-selected":""}`,"aria-pressed":L.settings.appearanceMode===e.value,disabled:O,onClick:()=>void H(e.value),children:[(0,n.jsx)("span",{"aria-hidden":"true",children:e.icon}),(0,n.jsx)("small",{children:e.label})]},e.value))}),B&&(0,n.jsx)("p",{className:"drawer-appearance-error",role:"status",children:B})]}),x?null:(0,n.jsx)(td,{title:"School context",className:"compact-context-section",children:(0,n.jsxs)("div",{className:"compact-context-grid",children:[(0,n.jsxs)("label",{className:"account-context-field",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)(rS,{size:"sm"}),"School"]}),(0,n.jsxs)("select",{value:d??"",onChange:e=>E(e.target.value||null),disabled:!u.length,children:[(0,n.jsx)("option",{value:"",children:u.length?"Select school":"No school found"}),u.map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,n.jsxs)("label",{className:"account-context-field",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)(rj,{size:"sm"}),"Branch"]}),(0,n.jsxs)("select",{value:p??"",onChange:e=>I(e.target.value||null),disabled:!d||!h.length,children:[(0,n.jsx)("option",{value:"",children:d?h.length?"Select branch":"No branch found":"Select school first"}),h.map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},e.id))]})]})]})}),(0,n.jsx)(tl,{variant:"danger",fullWidth:!0,onClick:M,className:"compact-account-logout",children:"Logout"})]}),(0,n.jsx)("style",{children:tx})]})}let tx=`
.drawer-identity-profile-link{border:0;padding:0;background:transparent;color:inherit;text-align:left;cursor:pointer;max-width:100%;border-radius:12px;}
.drawer-identity-profile-link:hover .compact-drawer-member-copy strong{text-decoration:underline;text-underline-offset:3px;}
.drawer-identity-profile-link:focus-visible{outline:3px solid var(--primary-color,#2563eb);outline-offset:3px;}

.drawer-open-profile{display:grid;grid-template-columns:32px minmax(0,1fr) 14px;align-items:center;gap:10px;width:100%;padding:12px;border:1px solid var(--eds-border,var(--border,#d9dee8));border-radius:14px;background:var(--eds-surface,var(--surface,#fff));color:var(--eds-text,var(--text,#172033));text-align:left;cursor:pointer}.drawer-open-profile strong,.drawer-open-profile small{display:block}.drawer-open-profile small{font-size:11px;color:var(--eds-text-muted,var(--muted,#64748b));margin-top:2px}.drawer-open-profile:focus-visible{outline:3px solid var(--primary-color,#2563eb);outline-offset:2px}

.drawer-compact-switch-trigger { width:100%; display:flex; align-items:center; gap:11px; padding:12px; border:1px solid var(--eds-border,var(--border,#d9dee8)); border-radius:16px; background:var(--eds-surface,var(--surface,#fff)); color:var(--eds-text,var(--text,#172033)); text-align:left; cursor:pointer; }
.drawer-compact-switch-icon {display:grid;place-items:center;width:36px;height:36px;flex-shrink:0;border-radius:11px;background:color-mix(in srgb,var(--primary-color,#2563eb) 10%,var(--eds-surface,#fff));color:var(--primary-color,#2563eb);font-size:22px;}
.drawer-compact-switch-copy {flex:1;min-width:0;display:grid;gap:3px;}
.drawer-compact-switch-copy strong {font-size:13px;font-weight:800;}
.drawer-compact-switch-copy small {font-size:11px;color:var(--eds-text-muted,var(--muted,#64748b));}
.drawer-compact-switch-chevron {font-size:20px;color:var(--eds-text-muted,var(--muted,#64748b));}
.drawer-compact-switch-panel {padding-top:10px;max-height:min(42vh,360px);overflow-y:auto;overscroll-behavior:contain;}
.drawer-appearance-choices {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;}
.drawer-appearance-choice {min-height:58px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;border:1px solid var(--eds-border,var(--border,#d9dee8));border-radius:14px;background:var(--eds-surface,var(--surface,#fff));color:var(--eds-text,var(--text,#172033));cursor:pointer;}
.drawer-appearance-choice > span {font-size:21px;line-height:1;}
.drawer-appearance-choice small {font-size:11px;font-weight:750;}
.drawer-appearance-choice.is-selected {border-color:var(--primary-color,#2563eb);box-shadow:inset 0 0 0 1px var(--primary-color,#2563eb);background:color-mix(in srgb,var(--primary-color,#2563eb) 8%,var(--eds-surface,#fff));}
.drawer-appearance-choice:focus-visible,.drawer-compact-switch-trigger:focus-visible {outline:3px solid var(--primary-color,#2563eb);outline-offset:2px;}
.drawer-appearance-error {font-size:11px;color:#b45309;margin:7px 0 0;}

/*
 * =====================================================
 * DRAWER POSITION
 * =====================================================
 *
 * PortalHeader remains visible.
 *
 * Drawer begins immediately underneath it.
 */

.context-drawer.compact-account-drawer {
  top:
    calc(
      var(
        --eds-shell-top-offset,
        0px
      )
      +
      var(
        --portal-header-height,
        48px
      )
    ) !important;

  right:
    0 !important;

  bottom:
    0 !important;

  height:
    auto !important;

  max-height:
    none !important;

  /*
   * Similar visual foundation to SyncStatusSheet:
   * neutral application background + clear cards.
   */
  background:
    var(
      --eds-bg,
      var(
        --bg,
        #f5f7fb
      )
    ) !important;

  color:
    var(
      --eds-text,
      var(
        --text,
        #273449
      )
    ) !important;

  border-left:
    1px solid
    var(
      --eds-divider,
      var(
        --border,
        rgba(15,23,42,.08)
      )
    ) !important;

  box-shadow:
    -16px 0 40px
    rgba(15,23,42,.14) !important;

  overflow-x:
    hidden !important;

  overflow-y:
    auto !important;

  overscroll-behavior:
    contain !important;

  -webkit-overflow-scrolling:
    touch;

  z-index:
    65 !important;
}

/*
 * Fixed header remains visually above drawer.
 */

.portal-fixed-header {
  z-index:
    70 !important;
}

/*
 * Mobile:
 *
 * stop the drawer above Home / Library / Screens.
 */

@media (
  max-width: 979px
) {
  .context-drawer.compact-account-drawer {
    bottom:
      calc(
        64px +
        env(
          safe-area-inset-bottom,
          0px
        )
      ) !important;
  }
}

/*
 * Desktop installed window overlay does not render
 * PortalHeader, therefore remove the local 48px reservation.
 */

@media (
  display-mode:
    window-controls-overlay
) {
  .context-drawer.compact-account-drawer {
    top:
      var(
        --eds-shell-top-offset,
        0px
      ) !important;
  }
}

/*
 * =====================================================
 * DRAWER INNER
 * =====================================================
 */

.compact-drawer-inner {
  position:
    relative;

  z-index:
    2;

  min-height:
    100%;

  display:
    flex;

  flex-direction:
    column;

  gap:
    14px;

  padding:
    14px;

  padding-bottom:
    max(
      18px,
      env(
        safe-area-inset-bottom,
        0px
      )
    );
}

/*
 * =====================================================
 * PROFILE HEADER
 * =====================================================
 */

.compact-drawer-head {
  position:
    relative !important;

  top:
    auto !important;

  width:
    100%;

  display:
    flex;

  align-items:
    center;

  justify-content:
    space-between;

  gap:
    12px;

  margin:
    0;

  padding:
    2px 0
    14px;

  background:
    transparent !important;

  border-bottom:
    1px solid
    var(
      --eds-divider,
      var(
        --border,
        rgba(15,23,42,.08)
      )
    );
}

.compact-drawer-identity {
  min-width:
    0;

  display:
    grid;

  grid-template-columns:
    56px
    minmax(0, 1fr);

  align-items:
    center;

  gap:
    12px;
}

.drawer-account-photo {
  width:
    56px;

  height:
    56px;

  display:
    grid;

  place-items:
    center;

  overflow:
    hidden;

  border:
    1px solid
    color-mix(
      in srgb,
      var(
        --eds-primary,
        #2563eb
      ) 25%,
      var(
        --eds-border,
        rgba(15,23,42,.09)
      )
    );

  border-radius:
    18px;

  background:
    color-mix(
      in srgb,
      var(
        --eds-primary,
        #2563eb
      ) 8%,
      var(
        --eds-surface,
        #ffffff
      )
    );

  box-shadow:
    0 5px 16px
    rgba(15,23,42,.08);
}

.drawer-account-photo
img {
  width:
    100%;

  height:
    100%;

  display:
    block;

  object-fit:
    cover;

  object-position:
    center;

  max-width:
    none !important;
}

.drawer-account-photo-fallback {
  width:
    100%;

  height:
    100%;

  display:
    grid;

  place-items:
    center;

  color:
    var(
      --eds-primary,
      #2563eb
    );

  font-size:
    17px;

  font-weight:
    850;
}

.compact-drawer-member-copy {
  min-width:
    0;
}

.compact-drawer-member-copy
strong,
.compact-drawer-member-copy
small {
  display:
    block;

  overflow:
    hidden;

  text-overflow:
    ellipsis;

  white-space:
    nowrap;
}

.compact-drawer-member-copy
strong {
  color:
    var(
      --eds-text-strong,
      var(
        --text,
        #273449
      )
    );

  font-size:
    16px;

  font-weight:
    900;
}

.compact-drawer-member-copy
small {
  margin-top:
    4px;

  color:
    var(
      --eds-text-muted,
      var(
        --muted,
        #66728a
      )
    );

  font-size:
    11px;

  font-weight:
    650;
}

.compact-drawer-close {
  width:
    44px;

  height:
    44px;

  flex:
    0 0 44px;

  display:
    grid;

  place-items:
    center;

  border:
    1px solid
    var(
      --eds-border,
      rgba(15,23,42,.09)
    );

  border-radius:
    15px;

  background:
    var(
      --eds-surface,
      var(
        --surface,
        #ffffff
      )
    );

  color:
    var(
      --eds-text-strong,
      #273449
    );

  font-size:
    22px;

  cursor:
    pointer;

  box-shadow:
    0 3px 12px
    rgba(15,23,42,.04);
}

/*
 * =====================================================
 * ACCOUNT SECTION HEADING
 * =====================================================
 */

.compact-account-drawer
.account-drawer-section {
  gap:
    9px;
}

.compact-account-drawer
.account-drawer-section
> header {
  min-height:
    28px;

  padding:
    0 3px;
}

.compact-account-drawer
.account-drawer-section
> header
span {
  color:
    var(
      --eds-text-muted,
      #66728a
    );

  font-size:
    9px;

  font-weight:
    900;

  letter-spacing:
    .06em;

  text-transform:
    uppercase;
}

/*
 * =====================================================
 * WORKSPACE CARDS
 * =====================================================
 *
 * Neutral styling mirrors System Status:
 *
 * light background
 * dark text
 * muted secondary text
 * subtle border
 * brand colour only for state/accent
 */

.compact-account-drawer
.workspace-list {
  display:
    grid;

  gap:
    9px;
}

.compact-account-drawer
.workspace-list
button {
  width:
    100%;

  min-width:
    0;

  min-height:
    72px;

  display:
    grid;

  grid-template-columns:
    46px
    minmax(0, 1fr)
    auto;

  grid-template-rows:
    auto auto;

  align-items:
    center;

  column-gap:
    11px;

  border:
    1px solid
    var(
      --eds-border,
      rgba(15,23,42,.09)
    ) !important;

  border-radius:
    20px !important;

  padding:
    10px !important;

  background:
    var(
      --eds-surface,
      var(
        --surface,
        #ffffff
      )
    ) !important;

  color:
    var(
      --eds-text,
      #273449
    ) !important;

  box-shadow:
    0 4px 14px
    rgba(15,23,42,.045) !important;
}

.compact-account-drawer
.workspace-list
button:hover {
  background:
    color-mix(
      in srgb,
      var(
        --eds-primary,
        #2563eb
      ) 3%,
      var(
        --eds-surface,
        #ffffff
      )
    ) !important;
}

.compact-account-drawer
.workspace-list
button.active {
  border-color:
    color-mix(
      in srgb,
      var(
        --eds-primary,
        #2563eb
      ) 48%,
      var(
        --eds-border,
        rgba(15,23,42,.09)
      )
    ) !important;

  background:
    color-mix(
      in srgb,
      var(
        --eds-primary,
        #2563eb
      ) 7%,
      var(
        --eds-surface,
        #ffffff
      )
    ) !important;

  box-shadow:
    0 4px 16px
    color-mix(
      in srgb,
      var(
        --eds-primary,
        #2563eb
      ) 7%,
      transparent
    ) !important;
}

/*
 * Workspace image/icon.
 */

.compact-account-drawer
.workspace-avatar {
  grid-row:
    span 2;

  width:
    46px !important;

  height:
    46px !important;

  display:
    grid;

  place-items:
    center;

  overflow:
    hidden;

  border-radius:
    14px !important;

  background:
    color-mix(
      in srgb,
      var(
        --eds-primary,
        #2563eb
      ) 8%,
      var(
        --eds-surface,
        #ffffff
      )
    ) !important;
}

.compact-account-drawer
.workspace-avatar
img {
  width:
    100% !important;

  height:
    100% !important;

  max-width:
    none !important;

  display:
    block;

  object-fit:
    cover !important;

  object-position:
    center;
}

.compact-account-drawer
.workspace-list
strong {
  color:
    var(
      --eds-text-strong,
      #273449
    ) !important;

  font-size:
    12px !important;

  font-weight:
    850 !important;
}

.compact-account-drawer
.workspace-list
small {
  color:
    var(
      --eds-text-muted,
      #66728a
    ) !important;

  font-size:
    9px !important;

  font-weight:
    650 !important;
}

.compact-account-drawer
.workspace-list
b {
  grid-row:
    span 2;

  min-width:
    72px;

  min-height:
    34px;

  display:
    grid;

  place-items:
    center;

  border-radius:
    999px !important;

  padding:
    0 12px !important;

  background:
    color-mix(
      in srgb,
      var(
        --eds-primary,
        #2563eb
      ) 8%,
      var(
        --eds-surface,
        #ffffff
      )
    ) !important;

  color:
    var(
      --eds-primary,
      #2563eb
    ) !important;

  font-size:
    9px !important;

  font-weight:
    850 !important;
}

/*
 * =====================================================
 * OPTIONAL CONTEXT
 * =====================================================
 */

.compact-context-grid {
  display:
    grid;

  gap:
    8px;
}

.compact-account-drawer
.account-context-field {
  color:
    var(
      --eds-text-muted,
      #66728a
    );
}

.compact-account-drawer
.account-context-field
select {
  background:
    var(
      --eds-surface,
      #ffffff
    );

  color:
    var(
      --eds-text-strong,
      #273449
    );

  border-color:
    var(
      --eds-border,
      rgba(15,23,42,.09)
    );
}

/*
 * =====================================================
 * LOGOUT
 * =====================================================
 */

.compact-account-logout {
  margin-top:
    auto !important;

  min-height:
    48px;

  border-radius:
    17px !important;

  background:
    color-mix(
      in srgb,
      #ef4444 8%,
      var(
        --eds-surface,
        #ffffff
      )
    ) !important;

  color:
    #dc2626 !important;

  border:
    1px solid
    rgba(239,68,68,.12) !important;

  box-shadow:
    none !important;
}
`;var tf=t(53280),tv=t(31685),ty=t(73728);let tw="eleeveon_user_memberships",tk="__eleeveon_center__",tj="eleeveon_open_workspace";function tS(e){try{return window.localStorage.getItem(e)||window.sessionStorage.getItem(e)}catch{return null}}function tN(e){let r=tS(e);if(!r)return null;try{return JSON.parse(r)}catch{return null}}function tC(e,r){try{window.localStorage.setItem(e,r)}catch{}try{window.sessionStorage.setItem(e,r)}catch{}}function tE(e){try{window.localStorage.removeItem(e)}catch{}try{window.sessionStorage.removeItem(e)}catch{}}function tI(e){return null==e?null:String(e).trim()||null}function tA(...e){for(let r of e){let e=tI(r);if(e)return e}return null}function tz(e){if(!e)return null;let r=tA(e.schoolId,e.school?.id,e.activeSchoolId,e.contextSchoolId),t=tA(e.branchId,e.schoolBranchId,e.branch?.id,e.activeBranchId,e.contextBranchId),a=tA(e.teacherId,e.teacher?.id),n=tA(e.studentId,e.student?.id),i=tA(e.parentId,e.parent?.id);return{...e,schoolId:r,branchId:t,schoolBranchId:t,teacherId:a,studentId:n,parentId:i,active:!1!==e.active}}function tM(e,r="membership"){return e?String(e.id??`${e.role}-${e.schoolId??"account"}-${e.branchId??"root"}-${e.teacherId??e.studentId??e.parentId??"portal"}`):r}function tR(e,r){return!!e&&!!r&&tM(e)===tM(r)}function t$(e){return!!e&&!1!==e.active&&!1!==e.isActive&&!0!==e.disabled&&!0!==e.isDeleted&&!["inactive","disabled","deleted","blocked","suspended"].includes(String(e.status||"").trim().toLowerCase())}function tT(e){let r=tz(e);return!!r&&("student"===r.role?!!r.studentId:"teacher"===r.role?!!r.teacherId:"parent"!==r.role||!!r.parentId)}function tL(e,r){return!!e&&r.map(String).includes(String(e))}function tD(e){let r=tz(e);if(!r)return null;let t=tM(r);tC("activeMembership",JSON.stringify(r)),tC("activeMembershipId",t),tC("activeRole",r.role||"");let a=tI(r.schoolId),n=tI(r.branchId),i=tI(r.teacherId),o=tI(r.studentId),s=tI(r.parentId);return a?tC("activeSchoolId",String(a)):tE("activeSchoolId"),n?tC("activeBranchId",String(n)):tE("activeBranchId"),i?tC("activeTeacherId",String(i)):tE("activeTeacherId"),o?tC("activeStudentId",String(o)):tE("activeStudentId"),s?tC("activeParentId",String(s)):tE("activeParentId"),tC(tj,JSON.stringify({membership:r,membershipId:t,role:r.role,schoolId:a,branchId:n,teacherId:i,studentId:o,parentId:s,openedAt:Date.now()})),r}function tP(...e){for(let r of e){let e=tI(tS(r));if(e)return e}return null}let tO=new Map,tU=Promise.resolve();function tB(e){return String(e??"").trim()}function tF(e,r){return[e,tM(r),tB(r.role),tB(r.schoolId),tB(r.branchId)].join("|")}function tH(e,r){if((0,tv.PU)()!==e)return!1;let t=tN(tj);if(!t?.membership)return!1;let a=tB(t.membership.accountId);return(!a||a===e)&&tF(e,t.membership)===tF(e,r)}function tK(){return"u">typeof navigator&&navigator.onLine}var t_=t(47007),tW=t(86263);function tV(e){return"developer"===e?"\uD83D\uDEE0️":"platform_team"===e?"\uD83E\uDDE9":"owner"===e||"super_admin"===e?"\uD83D\uDC51":"branch_admin"===e?"\uD83C\uDFDB️":"admin"===e?"\uD83C\uDFEB":"accountant"===e?"\uD83D\uDCB0":"teacher"===e?"\uD83D\uDC68‍\uD83C\uDFEB":"student"===e?"\uD83E\uDDD1‍\uD83C\uDF93":"parent"===e?"\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67":"\uD83D\uDC64"}let tq=["schools","branches","academicPeriods","classes"],tJ=["students","studentEnrollments","studentParents","parents","teachers"],tY=["gradingSystems","gradeRules","assessmentStructures","assessmentStructureItems","assessmentApplicabilities","assessmentComponents","assessmentEntries","computedResults","classes","classSubjects","subjects","students","studentEnrollments","academicPeriods"],tG=["attendance","studentAttendanceSummaries","teacherAttendance","attendanceSessions","students","teachers","classes","studentEnrollments","academicPeriods"],tX=["reportCards","reportCardItems","reportCardTemplates","reportCardTemplateSettings","reportCardTemplateAssignments","studentReportSnapshots","computedResults","assessmentEntries","assessmentStructures","assessmentStructureItems","assessmentApplicabilities","gradingStructures","gradeRules","academicStructures","academicPeriods","schools","branches","schoolBranchSettings","classes","classSubjects","classTeachers","subjects","students","studentEnrollments"],tQ=["scheduleTimetables","scheduleSessions","scheduleResources","scheduleConflicts","classes","subjects","teachers","classTeachers"],tZ=["feeStructures","payments","incomes","expenses","studentFeeInvoices","studentFeeInvoiceItems","studentFeePayments","currencies","schoolCurrencySettings"],t0=["announcements","announcementRecipients","messageThreads","messages","communicationLogs"],t1=["schoolBranchSettings","schools","branches"];function t2(e){let r=String(e||"").toLowerCase().trim().replace(/-/g,"_");return"owner"===r||"school_owner"===r?"super_admin":r}function t5({title:e,text:r,spin:t}){return(0,n.jsxs)("main",{className:"center-page",children:[(0,n.jsx)(H,{}),(0,n.jsx)("style",{children:t3}),(0,n.jsxs)("section",{className:"loading-card",children:[t&&(0,n.jsx)("div",{className:"loading-spinner"}),(0,n.jsx)("h2",{children:e}),(0,n.jsx)("p",{children:r})]})]})}let t4=function({portalTitle:e,portalSubtitle:r,homeKey:t,allowedRoles:a,navSections:s,routes:l,lockedContext:c=!0,requireSchool:d=!0,requireBranch:u=!0,navigationMode:h="sidebar"}){let R="branch-workspace"===h,$=(0,m.useRouter)(),{runTransition:T}=function(){let e=(0,i.useContext)(p);if(!e)throw Error("useWorkspaceTransition must be used inside WorkspaceTransitionProvider");return e}(),L=(0,g.F)(),D=(0,v.A)(),P=(0,x.c)(),O=(0,b.t)(),U=(0,w.D)(),B=(0,k.tm)(),F=(0,f.j)(),K=(0,M.g)(),_=(0,y.x)(),W=(0,t_.O)(),{setIdentity:V,clearIdentity:q}=(0,C.C)(),{initialSyncDone:J,applyingChanges:Y}=F,{openStatusSheet:G}=K,{connected:X,status:Q}=(0,y.x)(),{accountId:Z,user:ee,account:er,subscription:et,logout:ea,refreshAccount:en,loading:ei,restoring:eo,verifying:es,sessionVerified:el,authenticated:ec,offline:ed}=L,{activeMembership:ep,activeRole:eu,activeTeacherId:eh,activeStudentId:em,activeParentId:eg,restored:eb,setActiveMembership:ex,beginMembershipTransition:ef,completeMembershipTransition:ev,failMembershipTransition:ey}=D,{settings:ew,refreshSettings:ek}=O,ej=U.fontFamily||ew?.fontFamily||"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",eS=U.fontSize||Number(ew?.fontSize)||16,{activeSchoolId:eN,activeSchool:eC,schools:eE,setActiveSchoolId:eI,activeBranchId:eA,activeBranch:ez,branches:eM,allBranches:eR,setActiveBranchId:e$,loading:eT,refreshInstitution:eL}=P,eD=(0,i.useMemo)(()=>tN(tj),[]),eP=(0,i.useMemo)(()=>tz(eD?.membership)||tz(tN("activeMembership")),[eD]),eO=(0,i.useMemo)(()=>{let e,r=[...(0,tW.TQ)(er),...(0,tW.TQ)(ee),...Array.isArray(e=tN(tw))?e.map(tz).filter(Boolean):[],...eP?[eP]:[]],t=new Map;r.map(tz).filter(Boolean).filter(t$).forEach(e=>{t.set(tM(e),e)});let a=[...t.values()];return a.length&&tC(tw,JSON.stringify(a)),a},[er,ee,eP]),eU=(0,i.useMemo)(()=>a.some(e=>["student","teacher","parent"].includes(String(e))),[a]),eB=(0,i.useMemo)(()=>eO.filter(e=>!!tL(e.role,a)&&!!t$(e)&&(!eU||!!tT(e))),[eO,a,eU]),eF=(0,i.useMemo)(()=>{var e;let r=tz(ep)||eP;return r&&tL(r.role,a)&&t$(r)&&(!eU||tT(r))?r:eU?1===eB.length?eB[0]:null:(e={memberships:eO,allowedRoles:a,activeSchoolId:eN,activeBranchId:eA}).memberships.find(r=>{if(!tL(r.role,e.allowedRoles)||!t$(r))return!1;let t=!e.activeSchoolId||!r.schoolId||String(r.schoolId)===String(e.activeSchoolId),a=!e.activeBranchId||!r.branchId||String(r.branchId)===String(e.activeBranchId);return t&&a})||e.memberships.find(r=>tL(r.role,e.allowedRoles)&&t$(r))||null},[ep,eP,eO,a,eN,eA,eU,eB]),eH=(0,i.useMemo)(()=>tI(eN)||tI(eF?.schoolId)||tI(eD?.schoolId)||tP("activeSchoolId"),[eN,eF?.schoolId,eD]),eK=(0,i.useMemo)(()=>tI(eA)||tI(eF?.branchId)||tI(eD?.branchId)||tP("activeBranchId"),[eA,eF?.branchId,eD]),e_=(0,i.useMemo)(()=>{let e=eu||eF?.role||null;return e?(0,tf.uu)({role:e,accountId:Z,schoolId:eH,branchId:eK}):null},[eu,eF?.role,Z,eH,eK]),eW=(0,i.useMemo)(()=>(0,tf.yG)(eu||eF?.role||""),[eu,eF?.role]),eV=(0,i.useRef)(null),eq=!!(e_&&U.ready&&W.firstEntryReady&&U.effectiveScope===eW&&(0,tf.Ic)(U.appliedFor,e_)&&(0,tf.Ic)(W.appliedFor,e_)),eJ=!!(e_&&O.loadedFor&&O.effectiveScope===eW&&O.loadedFor.key===e_.key&&String(O.loadedFor.accountId||"")===String(Z||"")&&String(O.loadedFor.schoolId||"")===String(e_.schoolId||"")&&String(O.loadedFor.branchId||"")===String(e_.branchId||"")),eY="branch"===eW&&eJ?String(ew?.primaryColor||O.branchSettings?.primaryColor||"").trim():"",eG=U.ready&&e_&&(0,tf.Ic)(U.appliedFor,e_)?String(U.appliedFor?.primaryColor||"").trim():"",eX=eY||(eJ?String(ew?.primaryColor||"").trim():"")||eG||"#2f6fed",eQ=(()=>{let e=eX.trim(),r=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(e)?e.slice(1):"",t=3===r.length?r.split("").map(e=>e+e).join(""):r;if(!t)return"#ffffff";let a=Number.parseInt(t,16);return((a>>16&255)*299+(a>>8&255)*587+(255&a)*114)/1e3>155?"#111827":"#ffffff"})();(0,i.useEffect)(()=>{if("u"<typeof document||!eq)return;let e=document.documentElement;for(let[r,t]of Object.entries({"--primary-color":eX,"--dashboard-primary":eX,"--branch-primary":eX,"--accent-color":eX,"--ba-primary":eX,"--ba-primary-text":eQ,"--eds-primary":eX,"--eds-brand-primary":eX,"--eds-primary-text":eQ,"--eds-primary-soft":`color-mix(in srgb, ${eX} 15%, transparent)`,"--eds-primary-softer":`color-mix(in srgb, ${eX} 8%, transparent)`}))e.style.setProperty(r,t,"important");e.style.setProperty("--font-family",ej),e.style.setProperty("--font-size",`${eS}px`)},[eq,eX,eQ,ej,eS]),e_&&(eV.current,e_.key),(0,i.useEffect)(()=>{eq&&e_&&(eV.current=e_.key)},[eq,e_]),(0,i.useEffect)(()=>{if(!ec||!Z||!eF||ep&&tR(tz(ep),eF))return;let e=tD(eF);e&&ex(e).catch(e=>{console.error("Failed to persist selected workspace:",e)})},[ec,Z,eF,ep,ex]);let eZ=(0,i.useMemo)(()=>eO.filter(e=>!1!==e.active),[eO]),e0=(0,i.useMemo)(()=>{if(eU)return!!eF&&!!tL(eF.role,a)&&!!t$(eF)&&tT(eF);return!!(eF&&tL(eF.role,a))||(0,tW.ro)({role:er?.role||ee?.role,memberships:eO,selectedMembership:eF,allowedRoles:a,schoolId:eH,branchId:eK})},[er,ee,eO,eF,a,eH,eK,eU]);(0,i.useEffect)(()=>{if(!eo&&!ei&&eb&&!eT){if(el&&(!ec||!Z))return void $.replace("/login");if(el&&ec&&!e0)return void $.replace("/select-role");el&&ec&&(d&&!eH||u&&!eK)&&$.replace("/select-role")}},[eo,ei,eb,eT,el,ec,Z,e0,d,u,eH,eK,$]);let e1=(0,i.useMemo)(()=>s.flatMap(e=>e.items),[s]),e2=(0,i.useMemo)(()=>{let e={};return s.forEach(r=>r.items.forEach(r=>{e[r.key]=r.label})),e},[s]),e5=(0,i.useMemo)(()=>{let e={};return s.forEach(r=>r.items.forEach(t=>{e[t.key]=r.title})),e},[s]),[e4,e3]=(0,i.useState)(t),e8=eF?tM(eF):null,e7=s.flatMap(e=>e.items.map(e=>e.key)).join("\x1f");(0,i.useEffect)(()=>{if(!ec||!Z||!e0||!e8)return void e3(t);let e=function(e,r){let t=E(e),a=E(r);if(!t||!a)return null;try{let e=window.localStorage.getItem(I(t,a));if(!e)return null;let r=JSON.parse(e);if(r.accountId!==t||r.membershipId!==a||"string"!=typeof r.moduleKey)return null;return E(r.moduleKey)||null}catch{return null}}(Z,e8);e3((e===tk||e&&Object.prototype.hasOwnProperty.call(l,e)&&e7.split("\x1f").includes(e))&&e?e:t)},[Z,ec,e0,e8,t,e7]),(0,i.useEffect)(()=>{let e=document.querySelector(".role-shell.workspace-locked-scroll .app-content");e&&(e.scrollTop=0)},[e4]);let[e6,e9]=(0,i.useState)(!1),[re,rr]=(0,i.useState)(!1),[rt,ra]=(0,i.useState)(300),[rn,ri]=(0,i.useState)(!1),[ro,rs]=(0,i.useState)(null);(0,i.useEffect)(()=>{if(!ec||!el||!Z||!eb||!e0||!eF||!eq||!B.ready||"teacher"===t2(eF.role)||ro)return;let e=!1,r=()=>{e||function(e){let r=(0,tf.yG)(e.role);if("school"!==r&&"branch"!==r)return Promise.resolve();let t=(0,tv.PU)();if(!t||e.accountId&&tB(e.accountId)!==t)return Promise.resolve();let a=tF(t,e);if(tO.get(a))return;let n=tU.catch(()=>void 0).then(async()=>{if(!tK()||!tH(t,e))return;let r=(0,ty.fW)();r&&await r.catch(()=>void 0),tK()&&tH(t,e)&&await (0,S.$N)(e,{allowCached:!0,force:!1})}).catch(e=>{console.warn("[Eleeveon] Background workspace download:",e instanceof Error?e.message:String(e))}).finally(()=>{tO.delete(a)});tO.set(a,n),tU=n.then(()=>void 0,()=>void 0)}(eF)},t=window.setTimeout(r,900);return window.addEventListener("online",r),()=>{e=!0,window.clearTimeout(t),window.removeEventListener("online",r)}},[ec,el,Z,eb,e0,eF,eq,B.ready,ro]);let[rl,rc]=(0,i.useState)(!0),[rp,ru]=(0,i.useState)(null),[rh,rm]=(0,i.useState)(null),[rg,rb]=(0,i.useState)(0),[rx,rf]=(0,i.useState)(null),rv=(0,i.useRef)(new Map),ry=e2[e4]||e4,rw="teacher"===t2(eF?.role),rk=(0,i.useMemo)(()=>{if(!rw){let e,r=e4.toLowerCase().replace(/[^a-z0-9]/g,""),t=String(ry||"").toLowerCase(),a=`${r} ${t}`;if(!r||"__eleeveon_center__"===r||/dashboard|^home$|hub|localsettings|syncstatus/.test(r))return[];if(/assessment|broadsheet|grade|grading|computedresult/.test(a))e=tY;else if(/attendance|rollcall/.test(a))e=tG;else if(/studentreport|teacherreport|report|transcript|result|promotion|cumulative|progress|performance/.test(a))e=tX;else if(/fee|finance|invoice|payment|income|expense|payroll|salary/.test(a))e=tZ;else if(/message|notice|announcement|communicat/.test(a))e=t0;else if(/setting|appearance|branchprofile|schoolprofile|teacherprofile|studentprofile|parentprofile/.test(a))e=t1;else if(/schedule|timetable|calendar/.test(a))e=tQ;else if(/subject|class|curriculum|academicstructure|academicperiod|course|assignment/.test(a))e=[...tq,"subjects","classSubjects","classTeachers","studentEnrollments","academicStructures","programs","curriculums","assignments"];else if(/student|enrollment|enrolment|learner|admission/.test(a))e=tJ;else if(/teacher|staff|personnel|parent/.test(a))e=tJ;else{if(!(0,N.k)(e4))return[];e=[e4]}return[...new Set(e)].filter(N.k)}let e=["classes","classSubjects","classTeachers","subjects","academicPeriods","students","studentEnrollments"],r=["academicStructures","assessmentStructures","assessmentStructureItems","assessmentApplicabilities","assessmentEntries","gradingStructures","gradeRules"];return"assessmentEntry"===e4?[...new Set([...e,...r])].filter(N.k):"reportsWorkspace"===e4?[...new Set([...e,...r,"computedResults","attendance","studentAttendanceSummaries","schoolBranchSettings","reportCardTemplates","reportCardTemplateSettings","reportCardTemplateAssignments"])].filter(N.k):"teacherStudents"===e4?["students","studentEnrollments","classes","classSubjects","academicPeriods"].filter(N.k):[]},[e4,ry,rw]),rj=function(e,r,t=!1){let[a,n]=(0,i.useState)(0),[o,s]=(0,i.useState)(!0),l=r.join("|");return(0,i.useEffect)(()=>{let e=()=>{s(navigator.onLine),n(e=>e+1)};return e(),window.addEventListener("online",e),window.addEventListener("offline",e),window.addEventListener(S.br,e),window.addEventListener("eleeveon:local-data-changed",e),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e),window.removeEventListener(S.br,e),window.removeEventListener("eleeveon:local-data-changed",e)}},[]),(0,i.useMemo)(()=>{let r=[...new Set(l.split("|").filter(Boolean))];if(!r.length)return{status:"not_required",missingCount:0,totalCount:0,online:o};if(!e)return{status:"not_downloaded",missingCount:r.length,totalCount:r.length,online:o};if((0,S.F4)(e,r))return{status:"complete",missingCount:0,totalCount:r.length,online:o};let a=r.map(r=>(0,S.zO)(e,r)),n=a.filter(e=>"complete"!==e).length;if(!n)return{status:"complete",missingCount:0,totalCount:r.length,online:o};let i=(0,S.$n)(e);return{status:t||i?.status==="downloading"?"downloading":a.some(e=>"partial"===e)||a.some(e=>"complete"===e)||i?.status==="partial"?"partial":i?.status==="failed"?"failed":"not_downloaded",missingCount:n,totalCount:r.length,online:o}},[e,l,a,o,t])}(eF,rk,null!==rp),rS=eF?[Z||"",tM(eF),eH||"",eK||"",t2(eF.role)].join("|"):"";(0,i.useEffect)(()=>{if(!ec||!el||!Z||!eb||!e0||!eq||!B.ready||!rl||ro||!rS||0===rk.length)return void ru(null);let e=!1,r=[rS,e4,rk.join(",")].join("|"),t=rv.current.get(r)||0;if(Date.now()-t<3e4&&0===rg)return;let a=window.setTimeout(()=>{if(e||!navigator.onLine||!eF||(0,S.F4)(eF,rk))return;let t=tN(tj);t?.membershipId&&t.membershipId!==tM(eF)||(rv.current.set(r,Date.now()),ru(ry),rf(null),rm(null),(0,S.xd)(eF,rk,{onProgress:(r,t)=>{e||rm({done:r,total:t})}}).catch(t=>{e||(rv.current.delete(r),rf(t instanceof Error?t.message:String(t)),console.warn("[portal] Active-module priority sync failed:",t))}).finally(()=>{e||(ru(null),rm(null))}))},60);return()=>{e=!0,window.clearTimeout(a),ru(null)}},[ec,el,Z,eb,e0,eq,B.ready,rl,ro,eF?.role,rS,e4,ry,rk,rg]);let rN=(0,i.useCallback)(()=>{navigator.onLine&&eF&&rk.length&&(rv.current.clear(),rf(null),rb(e=>e+1))},[eF,rk,rw,rS]),[rC,rE]=(0,i.useState)(0),[rI,rA]=(0,i.useState)(!1),[rz,rM]=(0,i.useState)(()=>s.reduce((e,r)=>(e[r.title]=!0===r.defaultOpen,e),{}));(0,i.useEffect)(()=>{rM(e=>s.reduce((r,t)=>(r[t.title]=e[t.title]??!0===t.defaultOpen,r),{}))},[s]),(0,i.useEffect)(()=>{let e=()=>{rc(navigator.onLine)};return e(),window.addEventListener("online",e),window.addEventListener("offline",e),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)}},[]),(0,i.useEffect)(()=>{let e=!1,r=async()=>{if(!Z){e||(rE(0),rA(!1));return}try{let[r,t,a]=await Promise.all([j.db.platformAnnouncements.toArray(),j.db.platformAnnouncementReceipts.where("accountId").equals(Z).toArray(),j.db.platformFeedback.where("accountId").equals(Z).toArray()]),n=new Set(t.filter(e=>!!e.readAt).map(e=>String(e.announcementId))),i=Date.now(),o=String(eF?.role||eu||""),s=r.filter(e=>!("published"!==e.status||e.publishAt&&new Date(e.publishAt).getTime()>i||e.expiresAt&&new Date(e.expiresAt).getTime()<i||Array.isArray(e.targetRoles)&&e.targetRoles.length&&o&&!e.targetRoles.includes(o))&&!n.has(String(e.id))).length,l=a.some(e=>["responded","action_required","waiting_for_user"].includes(String(e.status||"").toLowerCase()));e||(rE(s),rA(l))}catch(e){console.warn("Could not load Eleeveon Hub indicator:",e)}};r();let t=()=>{r()};return window.addEventListener("eleeveon:hub-refresh",t),window.addEventListener("eleeveon:local-data-changed",t),()=>{e=!0,window.removeEventListener("eleeveon:hub-refresh",t),window.removeEventListener("eleeveon:local-data-changed",t)}},[Z,eu,eF?.role,e4]);let rR=(0,tu.ns)(eO,ee??null),r$=(0,i.useMemo)(()=>{var e;let r,t;return r=(e={openedWorkspace:eD,selectedMembership:eF,user:ee,account:er}).openedWorkspace||{},t=e.selectedMembership||{},String(r.memberName||r.fullName||r.userName||r.name||t.fullName||t.memberName||t.userName||e.user?.fullName||e.user?.name||e.user?.email||e.account?.name||"Signed-in member").trim()},[eD,eF,ee,er]),rT=(0,i.useMemo)(()=>(function(e){var r,t,a;let n=e.selectedMembership;return n?["developer"===(r=n.role)?"Developer":"platform_team"===r?"Platform Team":"owner"===r?"Owner":"super_admin"===r?"Owner / Super Admin":"branch_admin"===r?"Branch Admin":"admin"===r?"School Admin":"accountant"===r?"Accountant":"teacher"===r?"Teacher":"student"===r?"Student":"parent"===r?"Parent":String(r||"User").replaceAll("_"," "),(t=e.identities,(0,tu.sX)(n,t)),(a=e.identities,(0,tu.dV)(n,a))].join(" \xb7 "):"Signed-in workspace"})({selectedMembership:eF,identities:rR}),[eF,rR]),rL=(0,i.useMemo)(()=>{let e=(0,tu.YT)(eF,rR),r=String(ee?.photo??ee?.profilePhoto??ee?.avatar??ee?.image??"").trim();return e||r||null},[eF,rR,ee]),rD=(0,i.useMemo)(()=>e4===tk?rd:l[e4]??l[t],[l,e4,t]),rP=e4===tk?"Eleeveon Hub":e2[e4]??e,rO=e4===tk?"Messages, notices and support":e5[e4]??r,rU=(0,tp.R)(eF?.role||er?.role||ee?.role||"Member"),rB=ez?.name||eC?.name||rO||"Workspace";(0,i.useEffect)(()=>(V({title:rP,workspace:rB,memberName:r$,memberRole:rU,memberImage:rL,memberMeta:rT,online:rl,realtimeConnected:X,initialSyncDone:J,realtimeStatus:Q.status,sidebarHidden:R||re,onToggleSidebar:()=>{if(R)return void document.getElementById("ba-workspace-navigation")?.scrollIntoView({behavior:"smooth",block:"start"});if(re){rr(!1),e9(!0);return}rr(!0)},onOpenStatus:G,onOpenAccount:()=>{ri(!0)}}),()=>{q()}),[rP,q,J,rl,G,X,Q.status,rU,rB,V,re,R,rL,rT,r$]);let rF=eF&&Z?[Z,tM(eF),eH||"",eK||""].join("|"):"",rH=(0,i.useMemo)(()=>{if(!eF)return[];let e=(0,tf.yG)(eF.role||"");return"branch"===e?["schools","branches","schoolBranchSettings"]:"school"===e?["schools"]:[]},[eF?.role]),[rK,r_]=(0,i.useState)({key:"",state:"checking"}),[rW,rV]=(0,i.useState)(null),[rq,rJ]=(0,i.useState)(0),rY=(0,i.useCallback)(async(e,r,t=3e4)=>{let a;try{return await Promise.race([e,new Promise((e,n)=>{a=setTimeout(()=>n(Error(`${r} took too long. Check the connection and retry.`)),t)})])}finally{a&&clearTimeout(a)}},[]);(0,i.useEffect)(()=>{if(!rF||!eF||!ec||!el||!eb||!e0||eo||ei||!B.ready||ro)return;let e=!1;return r_({key:rF,state:"checking"}),rV({stage:"checking-cache",title:"Preparing school identity…",detail:"Checking school, branch and appearance records for this workspace.",percent:5}),(async()=>{try{let r=0===rH.length||(0,S.F4)(eF,rH);if(!r){if(!navigator.onLine)throw Error("Connect to the internet to initialize this workspace for the first time.");rV({stage:"requesting",title:"Downloading school appearance…",detail:"Getting the selected school, branch and settings before entry.",percent:20}),await rY((0,S.xd)(eF,rH,{onProgress:(r,t)=>{e||rV({stage:"applying",title:"Saving workspace identity…",detail:"Preparing the correct school and branch appearance.",percent:t>0?Math.min(90,20+Math.round(70*r/t)):75,current:r,total:t})}}),"Workspace identity download")}if(e)return;if(rH.length&&!(0,S.F4)(eF,rH))throw Error("School appearance download did not finish. Retry to complete setup.");if(!r){if(await rY(Promise.resolve(eL()),"School and branch refresh"),e||(await rY(Promise.resolve(ek()),"School settings refresh"),e))return;if(!await rY(W.refresh(),"School branding application"))throw Error("The selected workspace appearance could not be applied. Retry workspace setup.")}e||(r_({key:rF,state:"ready"}),rV(null))}catch(r){e||r_({key:rF,state:"failed",error:r instanceof Error?r.message:String(r)})}})(),()=>{e=!0}},[rF,rq,ec,el,eb,e0,eo,ei,B.ready,ro,rY]);let rG=!!(rF&&rK.key===rF&&"ready"===rK.state),rX=!!(rF&&rK.key===rF&&"failed"===rK.state);(0,i.useEffect)(()=>{if(!rF||!ec||rG||rX)return;let e=window.setTimeout(()=>{r_(e=>"ready"===e.state||"failed"===e.state?e:{key:rF,state:"failed",error:"Workspace startup did not complete. The session, local database or school identity may not have initialized. Retry or return to role selection."})},5e4);return()=>window.clearTimeout(e)},[rF,ec,rG,rX]);let rQ=!!(eF&&e0),r0=(eo||ei||!eb||eT||!B.ready)&&!rQ,r1=!!(rQ&&e_&&!eq),r2=r0||r1,r5=(0,i.useMemo)(()=>({accountId:Z,user:ee,account:er,subscription:et,authenticated:ec,offline:ed||!rl,restoring:eo,verifying:es,sessionVerified:el,membership:eF,memberships:eZ,activeRole:eu||eF?.role||null,teacherId:eh||tI(eF?.teacherId),studentId:em||tI(eF?.studentId),parentId:eg||tI(eF?.parentId),schoolId:eH,school:eC,schools:eE,branchId:eK,branch:ez,branches:eM,allBranches:eR,settings:ew,theme:U,database:B,sync:F,syncPanel:K,realtime:_,appearance:W,refreshAccount:en,refreshInstitution:eL,refreshSettings:ek,refreshTheme:U.refreshTheme,setActiveMembership:ex,setActiveSchoolId:eI,setActiveBranchId:e$}),[Z,ee,er,et,ec,ed,rl,eo,es,el,eF,eZ,eu,eh,em,eg,eH,eC,eE,eK,ez,eM,eR,ew,U,B,F,K,_,W,en,eL,ek,ex,eI,e$]),r4=e=>{if(e!==tk&&!Object.prototype.hasOwnProperty.call(l,e))return;e3(e),ec&&e0&&Z&&e8&&function(e,r,t){let a=E(e),n=E(r),i=E(t);if(!a||!n||!i)return;let o={accountId:a,membershipId:n,moduleKey:i,openedAt:Date.now()};try{window.localStorage.setItem(I(a,n),JSON.stringify(o))}catch{}}(Z,e8,e),e9(!1),ri(!1);let r=e5[e];r&&rM(s.reduce((e,t)=>(e[t.title]=t.title===r,e),{})),window.scrollTo({top:0,behavior:"smooth"})},r3=(0,i.useCallback)(async()=>{ri(!1),e9(!1),await ea()},[ea]),r7=async e=>{if(ro)return;let r=tz(e)||e,t=tM(r),a=eZ.find(e=>tM(e)===t&&e.role===r.role&&String(e.schoolId||"")===String(r.schoolId||"")&&String(e.branchId||"")===String(r.branchId||"")&&String(e.teacherId||"")===String(r.teacherId||"")&&String(e.studentId||"")===String(r.studentId||"")&&String(e.parentId||"")===String(r.parentId||""));if(!a||!t$(a))return void console.warn("Refused role switch: membership not available in the current account.");let n=(0,z.PY)(),i=!1;try{rs(t),await (0,z.pq)((0,tW.b8)(r.role)),await T({mode:"role-switch",membership:r,title:"Switching workspace…",detail:"Activating your selected role and workspace."},async({setStage:e})=>{e("access",{detail:"Validating access for the selected role and workspace."});let t=tD(r)||r;ef(t),e("membership",{detail:`Activating ${(0,tp.R)(t.role)} and its profile context.`}),await ex(t),e("appearance",{detail:"Applying your role's appearance and branding."});let a=await U.applyForMembership(t),n=(0,tf.uu)({role:t.role,accountId:t.accountId,schoolId:t.schoolId,branchId:t.branchId});if(!a||!(0,tf.Ic)(a,n))throw Error("The selected workspace appearance could not be applied.");ev(),ri(!1),e9(!1),e("dashboard",{detail:`Opening the ${(0,tp.R)(t.role)} workspace.`}),i=!0,window.location.replace((0,tW.b8)(t.role))})}catch(e){if(!i){(0,z.Rh)(n);let e=n.activeMembership;if(e)try{let r=JSON.parse(e);await ex(r),await U.applyForMembership(r)}catch(e){console.warn("Previous workspace restoration needs a reload:",e)}}ey(e instanceof Error?e.message:"Failed to open the selected workspace."),console.error("Failed to switch role/workspace:",e),rs(null)}},r6=(0,i.useCallback)(e=>{e.preventDefault();let r=e.clientX,t=e=>{ra(Math.min(380,Math.max(240,rt+e.clientX-r)))},a=()=>{window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",a)};window.addEventListener("mousemove",t),window.addEventListener("mouseup",a)},[rt]),r9="complete"===rj.status;return rQ&&rF&&!rG?(0,n.jsx)(o.A,{progress:rW||{stage:"checking-cache",title:"Checking selected workspace…",detail:"Verifying account access and local records before downloading school identity.",percent:5},error:rX?rK.error||"Workspace preparation failed.":null,onRetry:()=>rJ(e=>e+1),onCancel:()=>$.push("/select-role")}):r2&&W.error&&r1?(0,n.jsx)(o.A,{error:W.error,onRetry:()=>{Promise.all([Promise.resolve(eL()),Promise.resolve(ek()),Promise.resolve(U.refreshTheme())]).then(()=>rJ(e=>e+1))},onCancel:()=>$.push("/select-role")}):r2?(0,n.jsx)(t5,{title:r1?"Preparing your workspace":`Opening ${e}...`,text:r1?W.error||"Applying the correct role, school, branch, colour, branding, and display settings.":"Checking your account and selected workspace.",spin:!W.error}):ec&&Z?e0?d&&!eH||u&&!eK?(0,n.jsx)(t5,{title:"Workspace context required",text:"This role needs a school or branch context. Return to Select Role and open the workspace again."}):(0,n.jsxs)("main",{className:["role-shell","workspace-locked-scroll",R&&"branch-workspace-layout",re&&"portal-sidebar-hidden"].filter(Boolean).join(" "),"data-appearance-scope":U.effectiveScope,"data-appearance-key":U.appliedFor?.key||void 0,"data-window-chrome":"integrated",style:{"--sidebar-width":`${rt}px`,"--portal-header-height":"48px","--portal-content-left":R||re?"0px":`${rt}px`,"--primary-color":eX,"--dashboard-primary":eX,"--branch-primary":eX,"--accent-color":eX,"--ba-primary":eX,"--ba-primary-text":eQ,"--eds-primary-text":eQ,"--eds-primary":eX,"--eds-brand-primary":eX,"--eds-primary-soft":`color-mix(in srgb, ${eX} 15%, transparent)`,"--eds-primary-softer":`color-mix(in srgb, ${eX} 8%, transparent)`,"--font-family":ej,"--font-size":`${eS}px`},children:[(0,n.jsx)("style",{children:t3}),(0,n.jsx)("style",{children:`
        .role-module-first-download{min-height:min(52vh,480px);display:grid;place-items:center;padding:20px}
        .role-module-first-download-card{width:min(420px,100%);padding:28px 22px;text-align:center;display:grid;justify-items:center;gap:13px;border:1px solid var(--border,#d8dee8);border-radius:22px;background:var(--surface,#fff);color:var(--text,#182436)}
        .role-module-first-download-card strong{font-size:17px}
        .role-module-first-download-card p{margin:0;font-size:13px;line-height:1.6;color:var(--muted,#65748a)}
        .role-module-first-download-card small{font-size:12px;color:var(--muted,#65748a)}
        .role-module-first-download-card button{border:0;border-radius:12px;background:var(--primary-color,#2563eb);color:#fff;padding:11px 20px;font:inherit;font-weight:700;cursor:pointer}
        .role-module-first-download-card button:disabled{opacity:.45;cursor:not-allowed}
        .role-module-first-spinner{width:38px;height:38px;border-radius:50%;border:4px solid var(--border,#d8dee8);border-top-color:var(--primary-color,#2563eb);animation:role-first-spin .8s linear infinite}
        @keyframes role-first-spin{to{transform:rotate(360deg)}}
      `}),(0,n.jsx)(H,{}),(0,n.jsx)("span",{hidden:!0,"aria-hidden":"true",style:{display:"none"},children:Y?"Applying new data":""}),e6||rn?(0,n.jsx)("button",{"aria-label":"Close drawer",className:"app-overlay",onClick:()=>{e9(!1),ri(!1)}}):null,!R&&(0,n.jsx)(rZ,{open:e6,hidden:re,portalTitle:e,portalSubtitle:r,activeInstitutionName:eC?.name||ez?.name||null,activeBranchName:ez?.name||null,hubUnreadCount:rC,hubHasAttention:rI,hubKey:tk,activeTab:e4,homeKey:t,sections:s,openSections:rz,onNavigate:r4,onOpenHub:()=>r4(tk),onToggleSection:e=>{rM(r=>{let t=!r[e];return s.reduce((r,a)=>(r[a.title]=t&&a.title===e,r),{})})},onResizeStart:r6}),(0,n.jsx)(tb,{open:rn,memberName:r$,memberRole:(0,tp.R)(eF?.role||er?.role||ee?.role||"Member"),memberImage:rL,selectedMembership:eF,memberships:eZ,identities:rR,switchingMembershipId:ro,schoolId:eN||eH,branchId:eA||eK,schools:(eE||[]).map(e=>({id:e.id,name:e.name})),branches:(eM||[]).map(e=>({id:e.id,name:e.name})),lockedContext:c,online:rl,realtimeConnected:X,membershipKey:tM,sameMembership:tR,roleLabel:tp.R,roleIcon:tV,onClose:()=>ri(!1),onSwitchMembership:r7,onSchoolChange:e=>eI?.(e),onBranchChange:e=>e$?.(e),onOpenStatus:()=>{G(),ri(!1)},onSelectRole:()=>$.push("/select-role"),onLogout:r3}),(0,n.jsxs)("section",{className:`app-main ${R||re?"full":""}`,children:[R?(0,n.jsx)(r8,{items:e1,activeKey:e4,onNavigate:r4,branchName:rB,online:rl,memberImage:rL,memberName:r$,onOpenStatus:G,onOpenAccount:()=>ri(!0)}):(0,n.jsx)(te,{activeLabel:rP,workspaceLabel:rB,memberName:r$,memberRole:rU,memberImage:rL,memberMeta:rT,online:rl,realtimeConnected:X,initialSyncDone:J,realtimeStatus:Q.status,sidebarHidden:re,onToggleSidebar:()=>{re?(rr(!1),e9(!0)):rr(!0)},onOpenStatus:G,onOpenAccount:()=>ri(!0)}),(0,n.jsx)(ti,{activeRoute:e4}),(0,n.jsxs)(tn,{children:[(0,n.jsxs)("div",{hidden:!0,"aria-hidden":"true",style:{display:"none"},children:[(0,n.jsx)(A,{availability:rj.status,moduleLabel:ry,missingCount:rj.missingCount,totalCount:rj.totalCount,online:rj.online,preparing:null!==rp,progress:rh,onRetry:rN}),rp&&(0,n.jsxs)("div",{className:"role-priority-sync-note",role:"status","aria-live":"polite",children:[(0,n.jsx)("span",{className:"role-priority-sync-dot","aria-hidden":"true"}),"Updating ",rp," for offline use…"]})]}),rk.length>0&&!r9?(0,n.jsx)("section",{className:"role-module-first-download",role:"status","aria-live":"polite",children:(0,n.jsxs)("div",{className:"role-module-first-download-card",children:[!rx&&rj.online?(0,n.jsx)("span",{className:"role-module-first-spinner","aria-hidden":"true"}):null,(0,n.jsx)("strong",{children:rx?"Unable to prepare this module":rj.online?`Preparing ${ry}…`:"Module not available offline yet"}),(0,n.jsx)("p",{children:rx||(rj.online?"Downloading the records required by this module. Existing school records are not being treated as empty.":"This module has not been downloaded on this device. Reconnect and retry.")}),rh?.total?(0,n.jsxs)("small",{children:[rh.done.toLocaleString()," / ",rh.total.toLocaleString()," records"]}):null,(rx||!rj.online||"failed"===rj.status)&&(0,n.jsx)("button",{type:"button",onClick:rN,disabled:!rj.online,children:"Retry download"})]})}):(0,n.jsx)(rD,{navigate:r4,context:r5})]})]})]}):(0,n.jsx)(t5,{title:"Choose workspace",text:"This portal needs an opened role/workspace session. Return to Select Role and open the role again."}):(0,n.jsx)(t5,{title:"Redirecting to login...",text:"You must sign in to continue."})},t3=`
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.role-priority-sync-note {
  display: flex;
  align-items: center;
  gap: 7px;
  width: fit-content;
  max-width: 100%;
  margin: 0 0 10px;
  padding: 6px 10px;
  border: 1px solid var(--border, rgba(100,116,139,.18));
  border-radius: 999px;
  color: var(--muted, #64748b);
  background: var(--surface, #ffffff);
  font-size: 11px;
  font-weight: 600;
  line-height: 1.35;
}

.role-priority-sync-dot {
  display: block;
  flex: 0 0 auto;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--primary-color, #2f6fed);
  animation: rolePriorityPulse 1.2s ease-in-out infinite;
}

@keyframes rolePriorityPulse {
  0%, 100% { opacity: .45; }
  50% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .role-priority-sync-dot { animation: none; }
}

.background-refresh-indicator {
  position: fixed;
  right: 12px;
  bottom: max(12px, env(safe-area-inset-bottom));
  z-index: 5000;
  padding: 7px 11px;
  border-radius: 999px;
  background: var(--surface, #fff);
  color: var(--text, #111827);
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 10px 28px rgba(15,23,42,.14);
  font-size: 11px;
  font-weight: 850;
  pointer-events: none;
}

.role-shell,
.center-page {
  --shell-sidebar-bg:
    var(--eds-sidebar-bg, var(--surface, #ffffff));

  --shell-header-bg:
    color-mix(
      in srgb,
      var(--eds-header-bg, var(--surface, #ffffff)) 94%,
      transparent
    );

  --shell-menu-bg:
    var(--eds-drawer-bg, var(--surface, #ffffff));

  --shell-section-bg:
    color-mix(
      in srgb,
      var(--bg, #f7f8fb) 76%,
      var(--surface, #ffffff)
    );

  --shell-hover-bg:
    color-mix(
      in srgb,
      var(--primary-color, #2f6fed) 9%,
      var(--surface, #ffffff)
    );

  --shell-active-bg:
    color-mix(
      in srgb,
      var(--primary-color, #2f6fed) 14%,
      var(--surface, #ffffff)
    );

  --shell-soft-border:
    color-mix(
      in srgb,
      var(--border, rgba(0,0,0,.10)) 82%,
      transparent
    );

  --dashboard-primary:
    var(--primary-color, #2f6fed);
}

html,
body {
  max-width: 100%;
  overflow-x: hidden;

  background:
    var(--eds-shell-bg, var(--bg, #f7f8fb));

  color:
    var(--eds-text, var(--text, #111111));

  font-family:
    var(--font-family, system-ui);

  font-size:
    var(--font-size, 16px);
}

* {
  box-sizing: border-box;
}

.role-shell,
.center-page {
  min-height:
    calc(
      100dvh -
      var(--eds-shell-top-offset, 0px)
    );

  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;

  background:
    var(--eds-shell-bg, var(--bg, #f7f8fb));

  color:
    var(--eds-text, var(--text, #111111));

  font-family:
    var(--font-family, system-ui);

  font-size:
    var(--font-size, 16px);
}

.center-page {
  display: grid;
  place-items: center;
  padding: 18px;
}

.loading-card {
  width: min(430px, 100%);
  border-radius: 26px;
  padding: 24px;

  background:
    var(--card-bg, var(--surface, #ffffff));

  border:
    1px solid var(--border, rgba(0,0,0,.10));

  box-shadow:
    var(
      --shell-shadow,
      0 24px 60px rgba(15,23,42,.10)
    );

  text-align: center;
  overflow: hidden;
}

.loading-card h2 {
  margin: 12px 0 6px;
  font-size: 20px;
  font-weight: 950;
}

.loading-card p {
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 14px;
  line-height: 1.6;
}

.loading-spinner {
  width: 36px;
  height: 36px;
  margin: 0 auto;
  border-radius: 50%;

  border:
    4px solid
    color-mix(
      in srgb,
      var(
        --dashboard-primary,
        var(--primary-color, #2563eb)
      ) 18%,
      transparent
    );

  border-top-color:
    var(
      --dashboard-primary,
      var(--primary-color, #2563eb)
    );

  animation: spin .8s linear infinite;
}

.app-overlay {
  position: fixed;
  inset: 0;
  z-index: 40;
  border: 0;
  background: rgba(15,23,42,.5);
}

.app-sidebar,
.context-drawer {
  position: fixed;

  top: var(--eds-shell-top-offset, 0px);
  bottom: 0;

  z-index: 50;

  height:
    calc(
      100dvh -
      var(--eds-shell-top-offset, 0px)
    );

  max-width: 100vw;

  background:
    var(
      --shell-sidebar-bg,
      var(--surface, #ffffff)
    );

  color: var(--text, #111111);

  overflow-y: hidden;
  overflow-x: hidden;
  overscroll-behavior: contain;

  box-shadow:
    var(
      --shell-shadow,
      0 24px 70px rgba(15,23,42,.22)
    );

  transition:
    transform .22s ease,
    width .22s ease;
}

.app-sidebar {
  left: 0;
  width: min(88vw, 330px);
  transform: translateX(-105%);
  padding: 12px;

  display: flex;
  flex-direction: column;
}

.app-sidebar.open {
  transform: translateX(0);
}

.context-drawer {
  right: 0;
  width: min(90vw, 370px);
  transform: translateX(105%);
  padding: 16px;

  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-gutter: stable;
}

.context-drawer.open {
  transform: translateX(0);
}

.sidebar-head,
.drawer-head,
.app-header {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  max-width: 100%;
}

.sidebar-head {
  position: sticky;
  top: 0;
  z-index: 3;

  background:
    var(--shell-sidebar-bg, var(--surface, #ffffff));

  padding: 4px 0 10px;
}

.school-home {
  min-width: 0;
  max-width: 100%;
  flex: 1;
  border: 0;
  background: transparent;
  color: inherit;
  padding: 0;

  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
  cursor: pointer;
}

.school-home:hover .sidebar-title strong {
  color:
    var(
      --dashboard-primary,
      var(--primary-color, #2563eb)
    );
}

.avatar {
  width: 38px;
  height: 38px;
  border-radius: 15px;

  background:
    var(
      --eds-sidebar-active,
      var(--shell-active-bg)
    );

  color:
    var(
      --eds-sidebar-active-text,
      var(--dashboard-primary, #2563eb)
    );

  display: grid;
  place-items: center;
  font-weight: 950;
  flex: 0 0 auto;
}

.sidebar-title,
.header-title {
  min-width: 0;
  flex: 1;
}

.sidebar-title strong,
.sidebar-title span,
.header-title strong,
.header-title span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.sidebar-title strong,
.header-title strong {
  color: var(--text, #111111);
  font-size: 14px;
  font-weight: 950;
  line-height: 1.1;
}

.sidebar-title span,
.header-title span {
  margin-top: 1px;
  font-size: 11px;
  color: var(--muted, #64748b);
  line-height: 1.1;
}

.icon-btn {
  width: 36px;
  height: 36px;

  border:
    1px solid var(--border, rgba(0,0,0,.10));

  border-radius: 14px;
  background: var(--surface, #ffffff);
  color: var(--text, #111111);

  font-size: 19px;
  font-weight: 950;
  cursor: pointer;

  display: grid;
  place-items: center;
  flex: 0 0 auto;
}

.icon-btn.primary {
  background:
    var(
      --eds-sidebar-active,
      var(--shell-active-bg)
    );

  color:
    var(
      --eds-sidebar-active-text,
      var(--dashboard-primary, #2563eb)
    );

  border-color: transparent;
}

.nav-list {
  min-height: 0;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding-bottom: 12px;
  max-width: 100%;

  overflow-y: auto;
  overflow-x: hidden;
}

.nav-section {
  border-radius: 20px;
  background: var(--shell-section-bg, #f7f8fb);

  border:
    1px solid var(--border, rgba(0,0,0,.08));

  overflow: hidden;
  max-width: 100%;
}

.nav-section-title {
  width: 100%;
  min-height: 40px;
  border: 0;
  background: transparent;
  padding: 0 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  color: var(--muted, #334155);
  font-size: 11px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: .06em;
  cursor: pointer;
}

.nav-section-title span {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nav-items {
  display: grid;
  gap: 4px;
  padding: 5px;
  max-width: 100%;
}

.nav-item {
  width: 100%;
  min-width: 0;
  min-height: 44px;
  border: 0;
  border-radius: 16px;
  background: transparent;
  padding: 9px;

  display: flex;
  align-items: center;
  gap: 9px;

  color: var(--text, #111111);
  text-align: left;
  cursor: pointer;
}

.nav-item:hover {
  background: var(--shell-hover-bg, #f1f5f9);
}

.nav-item.active {
  background:
    var(
      --eds-sidebar-active,
      var(--shell-active-bg)
    );

  color:
    var(
      --eds-sidebar-active-text,
      var(--dashboard-primary, #2563eb)
    );
}

.nav-item.active strong,
.nav-item.active span {
  color: #fff;
}

.nav-item span {
  width: 24px;
  flex: 0 0 auto;
  font-size: 17px;
  text-align: center;
}

.nav-item strong {
  min-width: 0;
  color: inherit;
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.sidebar-resize-handle {
  display: none;
}

.app-main {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  min-width: 0;

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: visible;

  transition:
    margin-left .22s ease,
    width .22s ease;
}

.app-header {
  position: sticky;
  top: 0;
  z-index: 30;
  min-height: 48px;
  max-width: 100%;
  padding: 5px 14px;

  background:
    var(
      --shell-header-bg,
      var(--surface, #ffffff)
    );

  border-bottom:
    1px solid var(--border, rgba(0,0,0,.08));

  backdrop-filter: blur(14px);
  overflow: visible;
}

.member-access {
  min-width: 0;
  max-width: min(430px, 48vw);

  display: grid;
  grid-template-columns: minmax(0, 1fr) 38px;
  align-items: center;
  gap: 6px;
}

.member-pill {
  min-width: 0;
  min-height: 42px;

  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  align-items: center;
  gap: 9px;

  border: 0;
  border-radius: 14px;
  padding: 4px 7px;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.member-pill:hover {
  background: var(--shell-hover-bg, #f1f5f9);
}

.member-avatar {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 50%;

  background:
    color-mix(
      in srgb,
      var(
        --dashboard-primary,
        var(--primary-color, #2563eb)
      ) 16%,
      var(--surface, #ffffff)
    );

  color:
    var(
      --dashboard-primary,
      var(--primary-color, #2563eb)
    );

  font-size: 11px;
  font-weight: 1000;
}

.member-avatar img,
.workspace-avatar img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.member-copy {
  min-width: 0;
  display: block;
}

.member-copy b,
.member-copy > span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.member-copy b {
  color: var(--text, #111111);
  font-size: 12px;
  font-weight: 950;
}

.member-copy > span {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 10px;
  font-weight: 750;
}

.member-center-action {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;

  border:
    1px solid var(--border, rgba(0,0,0,.08));

  border-radius: 12px;
  background: transparent;

  color:
    var(
      --dashboard-primary,
      var(--primary-color, #2563eb)
    );

  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.member-center-action:hover,
.member-center-action.active {
  border-color:
    var(
      --dashboard-primary,
      var(--primary-color, #2563eb)
    );

  background:
    color-mix(
      in srgb,
      var(
        --dashboard-primary,
        var(--primary-color, #2563eb)
      ) 9%,
      transparent
    );
}

.sync-dot-wrap {
  position: relative;
  flex: 0 0 auto;
}

.sync-dot-btn {
  width: 36px;
  height: 36px;

  border:
    1px solid var(--border, rgba(0,0,0,.10));

  border-radius: 999px;
  background: var(--surface, #ffffff);

  display: grid;
  place-items: center;
  cursor: pointer;
  flex: 0 0 auto;
}

.sync-dot-btn span {
  width: 11px;
  height: 11px;
  display: block;
  border-radius: 999px;
  background: #ef4444;

  box-shadow:
    0 0 0 5px rgba(239,68,68,.12);
}

.sync-dot-btn.ok span {
  background: #22c55e;

  box-shadow:
    0 0 0 5px rgba(34,197,94,.13);
}

.sync-dot-btn.live span {
  background: #0ea5e9;

  box-shadow:
    0 0 0 5px rgba(14,165,233,.14);
}

.sync-dot-btn.warn span {
  background: #ef4444;

  box-shadow:
    0 0 0 5px rgba(239,68,68,.12);
}

.sync-popover {
  position: fixed;
  top: 56px;
  right: 12px;

  width: min(560px, calc(100vw - 24px));
  max-height: min(78dvh, 760px);

  border-radius: 18px;
  padding: 8px;

  background:
    var(
      --shell-menu-bg,
      var(--surface, #ffffff)
    );

  border:
    1px solid var(--border, rgba(0,0,0,.10));

  box-shadow:
    var(
      --shell-shadow,
      0 24px 60px rgba(15,23,42,.18)
    );

  z-index: 90;
  overflow: auto;
}

.sync-popover > * {
  margin: 0 !important;
}

.app-content {
  min-width: 0;
  width: 100%;
  max-width: 100%;
  flex: 1 1 auto;

  padding: 8px;

  padding-bottom:
    max(
      28px,
      env(safe-area-inset-bottom)
    );

  overflow-x: hidden;
  overflow-y: visible;
}

.app-content-inner {
  width: 100%;
  max-width: 100%;
  min-width: 0;

  overflow-x: hidden;
  overflow-y: visible;
}

.app-content *,
.app-content *::before,
.app-content *::after {
  max-width: 100%;
  box-sizing: border-box;
}

.app-content button,
.app-content input,
.app-content select,
.app-content textarea {
  font: inherit;
  max-width: 100%;
}

.app-content img,
.app-content svg,
.app-content canvas,
.app-content video {
  max-width: 100%;
  height: auto;
}

.app-content table {
  max-width: 100%;
}

.drawer-head {
  justify-content: space-between;
  margin-bottom: 16px;
}

.drawer-head div {
  min-width: 0;
}

.drawer-head p {
  margin: 0;

  color:
    var(
      --dashboard-primary,
      var(--primary-color, #2563eb)
    );

  font-size: 12px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.drawer-head h2 {
  margin: 2px 0 0;
  color: var(--text, #111111);
  font-size: 22px;
  letter-spacing: -.04em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.drawer-card {
  border-radius: 22px;
  padding: 14px;
  background: var(--shell-section-bg, #f7f8fb);

  border:
    1px solid var(--border, rgba(0,0,0,.10));

  margin-bottom: 12px;
  max-width: 100%;
  overflow: hidden;
}

.drawer-card label {
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  color: var(--muted, #64748b);
  font-weight: 900;
}

.drawer-card select {
  width: 100%;
  min-width: 0;
  min-height: 44px;

  border:
    1px solid
    var(
      --input-border,
      var(--border, rgba(0,0,0,.10))
    );

  border-radius: 15px;
  padding: 0 12px;

  background:
    var(
      --input-bg,
      var(--surface, #ffffff)
    );

  color:
    var(
      --input-text,
      var(--text, #111111)
    );

  outline: none;
}

.drawer-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 14px 0;
  max-width: 100%;
}

.drawer-info div {
  min-width: 0;
  border-radius: 20px;
  padding: 14px;
  background: var(--shell-section-bg, #f7f8fb);

  border:
    1px solid var(--border, rgba(0,0,0,.08));

  overflow: hidden;
}

.drawer-info strong,
.drawer-info span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.drawer-info strong {
  color: var(--text, #111111);
  font-size: 18px;
  font-weight: 950;
}

.drawer-info span {
  margin-top: 4px;
  font-size: 12px;
  color: var(--muted, #64748b);
}

.drawer-action,
.drawer-danger {
  width: 100%;
  min-height: 46px;
  border: 0;
  border-radius: 999px;
  font-weight: 950;
  cursor: pointer;
  margin-top: 8px;
}

.drawer-action {
  background:
    var(
      --eds-sidebar-active,
      var(--shell-active-bg)
    );

  color:
    var(
      --eds-sidebar-active-text,
      var(--dashboard-primary, #2563eb)
    );
}

.drawer-danger {
  background: rgba(239,68,68,.1);
  color: #dc2626;
}

.workspace-list {
  display: grid;
  gap: 8px;
}

.workspace-list button {
  width: 100%;
  min-height: 64px;

  border:
    1px solid var(--border, rgba(0,0,0,.10));

  border-radius: 18px;
  padding: 9px;

  background:
    var(
      --shell-menu-bg,
      var(--surface, #ffffff)
    );

  color: var(--text, #111111);

  display: grid;
  grid-template-columns:
    42px minmax(0, 1fr) auto;
  grid-template-rows: auto auto;

  column-gap: 10px;
  align-items: center;
  text-align: left;
  cursor: pointer;
}

.workspace-list button:hover {
  background: var(--shell-hover-bg, #f1f5f9);
}

.workspace-list button.active {
  border-color:
    color-mix(
      in srgb,
      var(--dashboard-primary, #2563eb) 42%,
      var(--border, rgba(0,0,0,.10))
    );

  background:
    color-mix(
      in srgb,
      var(--dashboard-primary, #2563eb) 8%,
      var(--surface, #ffffff)
    );
}

.workspace-list button:disabled {
  opacity: .7;
  cursor: not-allowed;
}

.workspace-list button > .workspace-avatar {
  grid-row: span 2;
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;
  border-radius: 15px;

  background:
    color-mix(
      in srgb,
      var(--dashboard-primary, #2563eb) 10%,
      transparent
    );

  font-size: 19px;
}

.workspace-list strong,
.workspace-list small {
  min-width: 0;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.workspace-list strong {
  color: var(--text, #111111);
  font-size: 13px;
  font-weight: 950;
}

.workspace-list small {
  margin-top: 3px;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 750;
}

.workspace-list b {
  grid-row: span 2;
  min-width: 58px;
  justify-self: end;
  border-radius: 999px;
  padding: 6px 9px;

  background:
    color-mix(
      in srgb,
      var(--dashboard-primary, #2563eb) 10%,
      transparent
    );

  color: var(--dashboard-primary, #2563eb);

  font-size: 10px;
  font-weight: 950;
  text-align: center;
}

.workspace-list.compact button {
  min-height: 58px;
}

@media (min-width: 980px) {
  .role-shell {
    display: grid;

    grid-template-columns:
      minmax(
        240px,
        var(--sidebar-width, 300px)
      )
      minmax(0, 1fr);

    grid-template-rows:
      minmax(0, 1fr);

    align-items: stretch;
    width: 100%;
    max-width: 100vw;

    min-height:
      calc(
        100dvh -
        var(--eds-shell-top-offset, 0px)
      );

    overflow: hidden;

    transition:
      grid-template-columns .22s ease;
  }

  .role-shell.portal-sidebar-hidden {
    grid-template-columns:
      0 minmax(0, 1fr);
  }

  .app-overlay {
    display: none;
  }

  .app-sidebar {
    position: sticky;
    grid-column: 1;
    grid-row: 1;

    top: var(--eds-shell-top-offset, 0px);
    left: auto;
    bottom: auto;

    z-index: 35;
    width: 100%;
    min-width: 0;
    max-width: none;

    height:
      calc(
        100dvh -
        var(--eds-shell-top-offset, 0px)
      );

    transform: none;
    box-shadow: none;

    border-right:
      1px solid var(--border, rgba(0,0,0,.08));

    overflow: hidden;
  }

  .app-sidebar.hidden,
  .app-sidebar.hidden.open {
    width: 0;
    min-width: 0;

    padding-left: 0;
    padding-right: 0;
    border-right: 0;

    transform: none;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    overflow: hidden;
  }

  .app-main,
  .app-main.full {
    position: relative;
    grid-column: 2;
    grid-row: 1;

    min-width: 0;
    width: 100%;
    max-width: 100%;

    margin-left: 0;
    overflow-x: hidden;
  }

  .app-header,
  .app-content,
  .app-content-inner {
    min-width: 0;
    width: 100%;
    max-width: 100%;
  }

  .app-content {
    padding: 12px;
  }

  .app-content-inner > *,
  .app-content main,
  .app-content section,
  .app-content article,
  .app-content form,
  .app-content div {
    min-width: 0;
  }

  .app-content table {
    width: max-content;
    min-width: 100%;
  }

  .app-content :is(
    .table-wrap,
    .table-wrapper,
    .data-table-wrap,
    .responsive-table,
    [class*="table-container"],
    [class*="table-wrapper"]
  ) {
    min-width: 0;
    max-width: 100%;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
  }

  .sidebar-resize-handle {
    display: block;
    position: absolute;

    top: 0;
    right: 0;
    width: 8px;
    height: 100%;

    border: 0;
    padding: 0;
    background: transparent;

    cursor: col-resize;
    z-index: 4;
  }

  .sidebar-resize-handle:hover {
    background:
      color-mix(
        in srgb,
        var(--dashboard-primary, #2563eb) 18%,
        transparent
      );
  }
}

@media (max-width: 420px) {
  .app-content {
    padding: 6px;
  }

  .app-header {
    min-height: 46px;
    padding: 5px 6px;
  }

  .icon-btn,
  .sync-dot-btn {
    width: 34px;
    height: 34px;
    border-radius: 13px;
    font-size: 18px;
  }

  .header-title strong {
    font-size: 13px;
  }

  .header-title span {
    font-size: 10px;
  }

  .member-access {
    max-width: min(240px, 54vw);

    grid-template-columns:
      minmax(0, 1fr) 36px;
  }

  .member-pill {
    min-height: 38px;

    grid-template-columns:
      30px minmax(0, 1fr);

    gap: 7px;
    padding: 3px 5px;
  }

  .member-avatar {
    width: 30px;
    height: 30px;
  }

  .member-copy > span {
    display: none;
  }

  .member-center-action {
    width: 36px;
    height: 36px;
  }

  .app-sidebar {
    width: min(92vw, 320px);
  }

  .context-drawer {
    width: min(94vw, 370px);
    padding: 12px;
  }

  .sync-popover {
    position: absolute;
    top: 42px;
    right: 0;

    width:
      min(
        360px,
        calc(100vw - 18px)
      );

    max-height:
      min(72dvh, 620px);
  }

  .drawer-info {
    grid-template-columns: 1fr;
  }

  .nav-item {
    min-height: 43px;
  }
}

/* Refactored shell controls */

.app-sidebar {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.nav-list {
  min-height: 0;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 2px;

  padding: 4px 2px 14px;

  overflow-y: auto;
  overflow-x: hidden;
}

.nav-section {
  border: 0;
  border-radius: 0;
  background: transparent;
  overflow: visible;
}

.nav-section-title {
  min-height: 36px;
  border-radius: 11px;
  padding: 7px 9px;

  display: grid;
  grid-template-columns:
    minmax(0, 1fr) 22px;

  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 850;
  letter-spacing: 0;
  text-transform: none;
}

.nav-section-title:hover {
  background:
    color-mix(
      in srgb,
      var(--muted, #64748b) 7%,
      transparent
    );

  color: var(--text, #111111);
}

.nav-items {
  gap: 2px;
  padding: 2px 0 5px;
}

.nav-item {
  min-height: 40px;
  border-radius: 11px;
  padding: 7px 9px;

  display: grid;
  grid-template-columns:
    26px minmax(0, 1fr);

  gap: 8px;
}

.nav-item.active {
  background:
    var(
      --eds-sidebar-active,
      var(--shell-active-bg)
    );

  color:
    var(
      --eds-sidebar-active-text,
      var(--dashboard-primary, #2563eb)
    );
}

.header-status {
  flex: 0 0 auto;
}

.header-account-button {
  min-width: 0;
  max-width: min(230px, 32vw);
  min-height: 40px;

  display: grid;
  grid-template-columns:
    32px minmax(0, 1fr);

  align-items: center;
  gap: 8px;

  border: 0;
  border-radius: 13px;
  padding: 4px 7px;

  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.header-account-button:hover {
  background: var(--shell-hover-bg, #f1f5f9);
}

.header-account-avatar,
.account-drawer-avatar {
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 50%;

  background:
    color-mix(
      in srgb,
      var(
        --dashboard-primary,
        var(--primary-color, #2563eb)
      ) 16%,
      var(--surface, #ffffff)
    );

  color:
    var(
      --dashboard-primary,
      var(--primary-color, #2563eb)
    );

  font-weight: 1000;
}

.header-account-avatar {
  width: 32px;
  height: 32px;
  font-size: 10px;
}

.header-account-avatar img,
.account-drawer-avatar img,
.workspace-avatar img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.header-account-copy {
  min-width: 0;
}

.header-account-copy strong,
.header-account-copy small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.header-account-copy strong {
  font-size: 11px;
  font-weight: 900;
}

.header-account-copy small {
  margin-top: 1px;
  color: var(--muted, #64748b);
  font-size: 9px;
}

.account-drawer {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.account-drawer-head {
  justify-content: space-between;
  padding-bottom: 12px;

  border-bottom:
    1px solid var(--border, rgba(0,0,0,.08));
}

.account-drawer-identity {
  min-width: 0;

  display: grid;
  grid-template-columns:
    44px minmax(0, 1fr);

  align-items: center;
  gap: 10px;
}

.account-drawer-avatar {
  width: 44px;
  height: 44px;
  font-size: 12px;
}

.account-drawer-identity strong,
.account-drawer-identity small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.account-drawer-identity strong {
  font-size: 15px;
  font-weight: 950;
}

.account-drawer-identity small {
  margin-top: 3px;
  color: var(--muted, #64748b);
  font-size: 11px;
  text-transform: capitalize;
}

.account-current-workspace {
  display: grid;
  gap: 3px;
  padding: 12px;
  border-radius: 16px;

  background:
    var(--shell-section-bg, #f7f8fb);
}

.account-current-workspace > span,
.account-drawer-section > header span {
  color: var(--muted, #64748b);
  font-size: 10px;
  font-weight: 900;
  letter-spacing: .04em;
  text-transform: uppercase;
}

.account-current-workspace strong,
.account-current-workspace small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.account-current-workspace strong {
  margin-top: 3px;
  font-size: 13px;
  font-weight: 900;
}

.account-current-workspace small {
  color: var(--muted, #64748b);
  font-size: 10px;
}

.account-primary-link {
  width: 100%;

  display: grid;
  grid-template-columns:
    38px minmax(0, 1fr) auto;

  align-items: center;
  gap: 10px;

  border:
    1px solid
    color-mix(
      in srgb,
      var(
        --dashboard-primary,
        var(--primary-color, #2563eb)
      ) 20%,
      var(--border, rgba(0,0,0,.08))
    );

  border-radius: 16px;
  padding: 10px;

  background:
    color-mix(
      in srgb,
      var(
        --dashboard-primary,
        var(--primary-color, #2563eb)
      ) 7%,
      var(--surface, #ffffff)
    );

  color: inherit;
  text-align: left;
  cursor: pointer;
}

.account-link-icon {
  width: 38px;
  height: 38px;

  display: grid;
  place-items: center;

  border-radius: 13px;

  background:
    var(
      --eds-sidebar-active,
      var(--shell-active-bg)
    );

  color:
    var(
      --eds-sidebar-active-text,
      var(--dashboard-primary, #2563eb)
    );

  font-weight: 1000;
}

.account-primary-link strong,
.account-primary-link small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.account-primary-link small {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 10px;
}

.account-drawer-section {
  display: grid;
  gap: 8px;
}

.account-drawer-section > header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.account-context-field {
  display: grid;
  gap: 5px;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 800;
}

.account-context-field select {
  width: 100%;
  min-height: 42px;

  border:
    1px solid var(--border, rgba(0,0,0,.1));

  border-radius: 13px;
  padding: 0 10px;
  background: var(--surface, #ffffff);
  color: var(--text, #111111);
}

.account-quick-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.account-quick-actions button {
  min-width: 0;

  display: grid;
  grid-template-columns:
    auto minmax(0, 1fr);

  grid-template-rows:
    auto auto;

  gap: 1px 8px;
  align-items: center;

  border:
    1px solid var(--border, rgba(0,0,0,.08));

  border-radius: 14px;
  padding: 10px;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.account-quick-actions button > span {
  grid-row: span 2;
}

.account-quick-actions strong,
.account-quick-actions small {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.account-quick-actions small {
  color: var(--muted, #64748b);
  font-size: 9px;
}

.account-logout {
  width: 100%;
  min-height: 42px;
  margin-top: auto;
  border: 0;
  border-radius: 14px;
  background: rgba(239,68,68,.1);
  color: #dc2626;
  font-weight: 900;
  cursor: pointer;
}

@media (max-width: 760px) {
  .header-title span {
    display: none;
  }

  .header-account-button {
    width: 38px;
    max-width: 38px;
    grid-template-columns: 30px;
    padding: 4px;
  }

  .header-account-copy {
    display: none;
  }

  .header-account-avatar {
    width: 30px;
    height: 30px;
  }

  .account-quick-actions {
    grid-template-columns: 1fr;
  }
}

/* Phase 6 — role portal shell design language */

.role-shell {
  background:
    var(--eds-gradient-page-glow),
    var(--eds-bg);
}

.shell-sidebar {
  isolation: isolate;

  background:
    var(--eds-gradient-sidebar),
    var(--eds-surface);

  border-right:
    1px solid var(--eds-divider);

  box-shadow:
    var(--eds-inset-highlight);
}

.shell-sidebar-inner,
.shell-drawer-inner {
  position: relative;
  z-index: 2;
  min-height: 100%;

  display: flex;
  flex-direction: column;
}

.shell-sidebar-texture,
.shell-drawer-texture {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.shell-sidebar-head {
  background:
    color-mix(
      in srgb,
      var(--eds-surface) 82%,
      transparent
    );

  backdrop-filter: blur(16px);

  border-bottom:
    1px solid var(--eds-divider);
}

.shell-sidebar-logo {
  width: 100%;
  min-width: 0;

  display: grid;
  grid-template-columns:
    38px minmax(0, 1fr);

  align-items: center;
  gap: 10px;
  border: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.shell-sidebar-logo-copy {
  min-width: 0;
}

.shell-sidebar-logo-copy strong,
.shell-sidebar-logo-copy small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.shell-sidebar-logo-copy strong {
  color: var(--eds-text-strong);
  font-size: 13px;
  font-weight: 900;
  letter-spacing: -.02em;
}

.shell-sidebar-logo-copy small {
  margin-top: 2px;
  color: var(--eds-text-muted);
  font-size: 9px;
  font-weight: 650;
}

.shell-workspace-card {
  display: grid;
  grid-template-columns:
    34px minmax(0, 1fr);

  align-items: center;
  gap: 9px;
  margin: 8px 2px 10px;
  padding: 9px;

  border:
    1px solid
    color-mix(
      in srgb,
      var(--eds-primary) 17%,
      var(--eds-border)
    );

  border-radius:
    var(--eds-radius-card);

  background:
    var(--eds-gradient-brand-soft),
    var(--eds-surface);

  box-shadow:
    var(--eds-shadow-soft);
}

.shell-workspace-icon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;

  border-radius:
    var(--eds-radius-control);

  background:
    var(--eds-primary-soft);
}

.shell-workspace-copy {
  min-width: 0;
}

.shell-workspace-copy small,
.shell-workspace-copy strong,
.shell-workspace-copy span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.shell-workspace-copy small {
  color: var(--eds-text-muted);
  font-size: 8px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .06em;
}

.shell-workspace-copy strong {
  margin-top: 2px;
  color: var(--eds-text-strong);
  font-size: 11px;
  font-weight: 850;
}

.shell-workspace-copy span {
  margin-top: 1px;
  color: var(--eds-text-muted);
  font-size: 9px;
}

.shell-nav-list {
  gap: 5px;
}

.shell-nav-group {
  position: relative;
}

.shell-nav-group-title {
  width: 100%;
  min-height: 32px;

  display: grid;
  grid-template-columns:
    minmax(0, 1fr) auto;

  align-items: center;
  gap: 8px;
  border: 0;

  border-radius:
    var(--eds-radius-sm);

  padding: 5px 8px;
  background: transparent;
  color: var(--eds-text-muted);
  text-align: left;
  cursor: pointer;
}

.shell-nav-group-title:hover {
  background: var(--eds-primary-softer);
  color: var(--eds-text-strong);
}

.shell-nav-group-title span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 9px;
  font-weight: 850;
  letter-spacing: .055em;
  text-transform: uppercase;
}

.shell-nav-items {
  display: grid;
  gap: 2px;
  margin-top: 2px;
}

.shell-nav-item {
  position: relative;
  width: 100%;
  min-height: 39px;

  display: grid;
  grid-template-columns:
    28px minmax(0, 1fr) 3px;

  align-items: center;
  gap: 7px;

  border: 1px solid transparent;

  border-radius:
    var(--eds-radius-control);

  padding: 6px 8px;
  background: transparent;
  color: var(--eds-text);
  text-align: left;
  cursor: pointer;

  transition:
    var(--eds-transition-color),
    var(--eds-transition-transform);
}

.shell-nav-item:hover {
  background: var(--eds-primary-softer);
  transform: translateX(1px);
}

.shell-nav-item.active {
  border-color:
    color-mix(
      in srgb,
      var(--eds-primary) 22%,
      var(--eds-border)
    );

  background:
    linear-gradient(
      90deg,
      var(--eds-primary-soft),
      var(--eds-primary-softer)
    );

  color: var(--eds-primary);

  box-shadow:
    var(--eds-shadow-soft);
}

.shell-nav-icon {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  color: inherit;
}

.shell-nav-item.active .shell-nav-icon {
  background:
    color-mix(
      in srgb,
      var(--eds-primary) 12%,
      transparent
    );
}

.shell-nav-item strong {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  font-weight: 750;
}

.shell-nav-active-marker {
  width: 3px;
  height: 18px;
  border-radius: 999px;
  background: transparent;
}

.shell-nav-item.active .shell-nav-active-marker {
  background: var(--eds-primary);
}

.shell-sidebar-footer {
  margin-top: auto;
  padding-top: 8px;

  border-top:
    1px solid var(--eds-divider);
}

.shell-sidebar-profile {
  width: 100%;

  display: grid;
  grid-template-columns:
    auto minmax(0, 1fr) auto;

  align-items: center;
  gap: 8px;
  border: 0;

  border-radius:
    var(--eds-radius-card);

  padding: 7px;
  background: var(--eds-primary-softer);
  color: inherit;
  text-align: left;
}

.shell-sidebar-profile-copy {
  min-width: 0;
}

.shell-sidebar-profile-copy strong,
.shell-sidebar-profile-copy small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.shell-sidebar-profile-copy strong {
  font-size: 10px;
}

.shell-sidebar-profile-copy small {
  color: var(--eds-text-muted);
  font-size: 8px;
}

.app-header {
  background:
    color-mix(
      in srgb,
      var(--eds-glass-medium-bg) 94%,
      transparent
    );

  border-bottom:
    1px solid var(--eds-divider);

  box-shadow:
    0 8px 24px rgba(15,23,42,.035);
}

.app-header::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      color-mix(
        in srgb,
        var(--eds-primary) 20%,
        transparent
      ),
      transparent
    );

  pointer-events: none;
}

.shell-portal-content {
  position: relative;
  padding: 0;
}

.shell-content-background {
  min-height: 100%;
  padding: 8px;
}

.shell-account-drawer {
  isolation: isolate;

  background:
    var(--eds-gradient-sidebar),
    var(--eds-surface);

  border-left:
    1px solid var(--eds-divider);
}

.shell-account-drawer .account-drawer-head {
  position: sticky;
  top: 0;
  z-index: 4;

  background:
    color-mix(
      in srgb,
      var(--eds-surface) 84%,
      transparent
    );

  backdrop-filter: blur(16px);
}

.shell-current-workspace {
  position: relative;
  overflow: hidden;

  background:
    var(--eds-gradient-brand-soft),
    var(--eds-surface);

  border:
    1px solid
    color-mix(
      in srgb,
      var(--eds-primary) 20%,
      var(--eds-border)
    );

  box-shadow:
    var(--eds-shadow-soft);
}

.shell-current-workspace .eds-status-indicator {
  margin-top: 6px;
}

.shell-context-selector .account-context-field > span {
  display: flex;
  align-items: center;
  gap: 5px;
}

.workspace-list button {
  box-shadow:
    var(--eds-shadow-soft);
}

.workspace-list button.active {
  box-shadow:
    0 10px 28px
    color-mix(
      in srgb,
      var(--eds-primary) 9%,
      transparent
    );
}

.background-refresh-indicator {
  background:
    var(--eds-glass-strong-bg);

  backdrop-filter:
    var(--eds-glass-strong-filter);

  border-color:
    var(--eds-border);

  box-shadow:
    var(--eds-shadow-raised);
}

@media (min-width: 980px) {
  .shell-content-background {
    padding: 12px;
  }
}

@media (max-width: 760px) {
  .shell-content-background {
    padding: 6px;
  }

  .shell-workspace-card {
    margin-bottom: 7px;
  }
}

/* ---------------------------------------------------------
 * Portal header theme and single-page-scroll correction
 * --------------------------------------------------------- */

.app-header {
  isolation: isolate;

  background:
    color-mix(
      in srgb,
      var(
        --eds-header-bg,
        var(--surface, #ffffff)
      ) 96%,
      transparent
    ) !important;

  color:
    var(
      --eds-text,
      var(--text, #111827)
    ) !important;

  border-bottom:
    1px solid
    var(
      --eds-divider,
      var(
        --border,
        rgba(15,23,42,.09)
      )
    ) !important;
}

.app-header .header-title strong {
  color:
    var(
      --eds-text-strong,
      var(--text, #111827)
    ) !important;
}

.app-header .header-title span {
  color:
    var(
      --eds-text-muted,
      var(--muted, #667085)
    ) !important;
}

.app-header .header-account-button {
  color:
    var(
      --eds-text,
      var(--text, #111827)
    ) !important;
}

.app-header .header-account-button:hover {
  background:
    var(
      --eds-primary-softer,
      var(--shell-hover-bg)
    ) !important;
}

.app-header .header-account-copy strong {
  color:
    var(
      --eds-text-strong,
      var(--text, #111827)
    ) !important;
}

.app-header .header-account-copy small {
  color:
    var(
      --eds-text-muted,
      var(--muted, #667085)
    ) !important;
}

.app-header .header-account-avatar {
  background:
    var(
      --eds-primary-soft,
      color-mix(
        in srgb,
        var(
          --primary-color,
          #2563eb
        ) 15%,
        transparent
      )
    ) !important;

  color:
    var(
      --eds-primary,
      var(--primary-color, #2563eb)
    ) !important;

  border:
    1px solid
    color-mix(
      in srgb,
      var(
        --eds-primary,
        var(--primary-color, #2563eb)
      ) 20%,
      var(--eds-border, transparent)
    );
}

.app-header .icon-btn {
  background:
    var(
      --eds-surface,
      var(--surface, #ffffff)
    ) !important;

  color:
    var(
      --eds-text-strong,
      var(--text, #111827)
    ) !important;

  border-color:
    var(
      --eds-border,
      var(
        --border,
        rgba(15,23,42,.09)
      )
    ) !important;
}

.app-header .icon-btn.primary {
  background:
    var(
      --eds-primary,
      var(--primary-color, #2563eb)
    ) !important;

  color:
    var(
      --eds-primary-text,
      #ffffff
    ) !important;

  border-color:
    transparent !important;
}

/*
 * Normal pages continue to use the document/window
 * as their main vertical scrolling surface.
 *
 * The shared PortalOverlayBoundaries.css stylesheet
 * independently constrains supported dialogs.
 */

html {
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-gutter: stable;
}

body {
  overflow-x: hidden;
  overflow-y: visible;
}

.role-shell,
.app-main,
.app-content,
.app-content-inner,
.shell-portal-content,
.shell-content-background {
  overflow-y: visible !important;
}

.role-shell,
.app-main {
  height: auto !important;
  max-height: none !important;
}

.app-content,
.app-content-inner,
.shell-portal-content {
  min-height: 0;
}

.app-sidebar {
  overflow: hidden !important;
}

.app-sidebar .nav-list {
  min-height: 0;

  overflow-x: hidden !important;
  overflow-y: auto !important;

  overscroll-behavior: contain;
  scrollbar-gutter: stable;
}

.context-drawer {
  overflow-x: hidden !important;
  overflow-y: auto !important;

  overscroll-behavior: contain;
  scrollbar-gutter: stable;
}

/*
 * END OF SHELL STYLES
 *
 * Former .portal-contained-modal rules removed.
 * PortalOverlayBoundaries.css now owns the shared
 * overlay viewport and mobile navigation boundaries.
 */

/* BRANCH ADMIN: optional flat navigation — other roles remain unchanged. */
.role-shell.branch-workspace-layout {
  --portal-content-left: 0px !important;
  width: 100%;
  max-width: 100%;
  /* clip is not a scroll container; keep compact mobile navigation sticky. */
  overflow-x: clip !important;
  overflow-y: visible !important;
}
.role-shell.branch-workspace-layout .app-main,
.role-shell.branch-workspace-layout .app-main.full {
  min-width: 0;
  width: 100%;
  max-width: 100%;
  margin-left: 0;
  overflow-x: clip !important;
  overflow-y: visible !important;
}
.role-shell.branch-workspace-layout .app-content,
.role-shell.branch-workspace-layout .app-content-inner {
  min-width: 0;
  width: 100%;
  max-width: 100%;
}
@media (min-width: 980px) {
  .role-shell.branch-workspace-layout {
    display: block !important;
    grid-template-columns: none !important;
    overflow: visible !important;
  }
  .role-shell.branch-workspace-layout .app-main,
  .role-shell.branch-workspace-layout .app-main.full {
    display: flex;
    grid-column: auto;
    grid-row: auto;
  }
}

/* ===============================================================
 * V19: SHARED STICKY WORKSPACES — based on the live 15 Oct source.
 *
 * The existing general-purpose shell allows window scrolling; these
 * later rules intentionally switch portal pages to one module scroller.
 * Keep module tables/reports free to scroll horizontally inside it.
 * =============================================================== */
.role-shell.workspace-locked-scroll {
  width: 100%;
  max-width: 100%;
  height: calc(100vh - var(--eds-shell-top-offset, 0px)) !important;
  height: calc(100dvh - var(--eds-shell-top-offset, 0px)) !important;
  min-height: 0 !important;
  max-height: none !important;
  overflow: hidden !important;
}
.role-shell.workspace-locked-scroll .app-main,
.role-shell.workspace-locked-scroll .app-main.full {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100% !important;
  min-height: 0 !important;
  max-height: 100% !important;
  min-width: 0;
  overflow: hidden !important;
}
/* The actual BranchWorkspaceNavigation component uses .ba-v7-nav.
 * Also reserve room for pinned cards and legacy .ba-v2-nav if present. */
.role-shell.workspace-locked-scroll .app-main > .app-header,
.role-shell.workspace-locked-scroll .app-main > .ba-v7-nav,
.role-shell.workspace-locked-scroll .app-main > .ba-v2-nav,
.role-shell.workspace-locked-scroll .app-main > .ba-v7-pinned-cards {
  flex: 0 0 auto;
}
.role-shell.workspace-locked-scroll .app-content {
  flex: 1 1 0;
  min-height: 0 !important;
  height: auto !important;
  max-height: none !important;
  min-width: 0;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior-y: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: var(--primary-color, #2563eb)
    color-mix(in srgb, var(--primary-color, #2563eb) 9%, transparent);
}
/* Prevent a wrapper from becoming a second scrolling ancestor: sticky
 * Report Cards subtabs must attach to the .app-content scroller. */
.role-shell.workspace-locked-scroll .app-content-inner,
.role-shell.workspace-locked-scroll .shell-portal-content .app-content-inner,
.role-shell.workspace-locked-scroll .shell-content-background {
  min-height: 0;
  overflow-x: visible !important;
  overflow-y: visible !important;
}
.role-shell.workspace-locked-scroll .app-content::-webkit-scrollbar {
  width: 9px;
}
.role-shell.workspace-locked-scroll .app-content::-webkit-scrollbar-track {
  background: color-mix(in srgb, var(--primary-color, #2563eb) 9%, transparent);
}
.role-shell.workspace-locked-scroll .app-content::-webkit-scrollbar-thumb {
  background: color-mix(in srgb, var(--primary-color, #2563eb) 70%, #64748b);
  border: 2px solid transparent;
  background-clip: padding-box;
  border-radius: 999px;
}
@media (max-width: 979px) {
  /* Non-Branch roles use a separate mobile navigation footer. */
  .role-shell.workspace-locked-scroll:not(.branch-workspace-layout) .app-content {
    padding-bottom: max(88px, calc(68px + env(safe-area-inset-bottom)));
  }
}
@media print {
  /* Existing report and table printers retain unrestricted pagination. */
  .role-shell.workspace-locked-scroll,
  .role-shell.workspace-locked-scroll .app-main,
  .role-shell.workspace-locked-scroll .app-content,
  .role-shell.workspace-locked-scroll .app-content-inner,
  .role-shell.workspace-locked-scroll .shell-content-background {
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    overflow: visible !important;
  }
}
`;function t8(e){return(0,n.jsx)(h,{children:"branch-workspace"===e.navigationMode?(0,n.jsx)(r2.kp,{children:(0,n.jsx)(t4,{...e})}):(0,n.jsx)(t4,{...e})})}},39908:(e,r,t)=>{"use strict";t.d(r,{Ej:()=>s,Yi:()=>l});let a=e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),n=e=>e&&"object"==typeof e?String(e.text??""):"boolean"==typeof e?e?"Yes":"No":String(e??""),i=e=>{let r=String(e||"").trim();return/^(https?:\/\/|blob:|data:image\/(png|jpeg|webp|gif);base64,)/i.test(r)?r:""};async function o(e){let r=Array.from(e.images);r.length&&(await Promise.all(r.map(e=>new Promise(r=>{if(e.complete)return void r();let t=()=>{clearTimeout(a),r()},a=setTimeout(t,1e4);e.addEventListener("load",t,{once:!0}),e.addEventListener("error",t,{once:!0})}))),await Promise.all(r.map(e=>e.complete&&e.naturalWidth&&e.decode?e.decode().catch(()=>void 0):Promise.resolve())))}function s(e){if("u"<typeof document||!e.columns.length)return!1;let r=function(e){let r=e.columns.filter(e=>e.key&&!/^actions?$|^controls?$/i.test(e.label.trim())&&!/^actions?$|^controls?$/i.test(e.key.trim()));if(!r.length)return"";let t=function(e,r){let t=r.map(r=>{var t;let a,o,s,l,c,d,p,u;return o=(a=(t=e.rows).slice(0,120).map(e=>n(e[r.key]).trim()).filter(Boolean).filter(e=>"—"!==e)).map(e=>Math.max(...e.split(/\s+/).map(e=>e.length),0)).sort((e,r)=>e-r),s=a.map(e=>e.length).sort((e,r)=>e-r),l=o[Math.floor((o.length-1)*.85)]||0,c=s[Math.floor((s.length-1)*.72)]||0,d=r.label.length,p=t.some(e=>{let t=e[r.key];return!!(t&&"object"==typeof t&&i(t.image))}),u=Math.max(d>14?Math.ceil(d/2):d,l,Math.min(28,.66*c)),Math.max(p?32:a.every(e=>/^[-+\d.,%/ ]+$/.test(e))&&a.length?11:12,Math.min(p?50:44,5.8+1.22*u))}),a=t.reduce((e,r)=>e+r,0),o="landscape"===e.orientation,s="portrait"===e.orientation,l=o||!s&&a>208.32000000000002,c=l?273:186,d=Math.min(1,c/Math.max(1,a));if(d>=.77){let e=t.map(e=>e*d),a=Math.max(7.7,(l?8.8:9.1)*d);return{landscape:l,widthMm:c,groups:[{columns:r,widthsMm:e,totalWidthMm:e.reduce((e,r)=>e+r,0)}],fontPt:a}}let p=[],u=r[0],h=Math.min(t[0]||35,47),m=[u],g=[h],b=h;for(let e=1;e<r.length;e++){let a=r[e],n=t[e];b+n>c&&m.length>1&&(p.push({columns:m,widthsMm:g,totalWidthMm:b}),m=[u],g=[h],b=h);let i=Math.min(n,c-Math.min(b,h));m.push(a),g.push(i),b+=i}return p.push({columns:m,widthsMm:g,totalWidthMm:b}),{landscape:l,widthMm:c,groups:p,fontPt:l?8.6:9}}(e,r),{landscape:o,groups:s,fontPt:l}=t,c=new Intl.DateTimeFormat("en-GH",{dateStyle:"medium",timeStyle:"short"}).format(new Date),d=s.map((r,o)=>{let l=function(e){let r=e.reduce((e,r)=>e+r,0);if(!r)return e.map(()=>100/e.length);let t=0;return e.map((a,n)=>{if(n===e.length-1)return Math.max(0,100-t);let i=Math.round(a/r*1e5)/1e3;return t+=i,i})}(function(e,r,t){if(!e.length)return[];let a=e.reduce((e,r)=>e+Math.max(0,r),0);if(!a)return e.map(()=>t/e.length);if(a>=t-.001){let r=t/a;return e.map(e=>Math.max(0,e)*r)}let n=t-a,i=e.map((e,t)=>{let a=r[t]?.label||"",n=e<=19||/^(id|no\.?|#|age|sex|gender|level|class code|status|count|total|grade|score|%|position|capacity)$/i.test(a.trim());return Math.pow(Math.max(8,e),1.15)*(n?.52:1)}),o=i.reduce((e,r)=>e+r,0);return e.map((e,r)=>e+n*i[r]/o)}(r.widthsMm,r.columns,t.widthMm)),d=r.columns.map(e=>`<th scope="col">${a(e.label)}</th>`).join(""),p=e.rows.map(e=>`<tr>${r.columns.map(r=>{var t;let o,s,l,c,d;return`<td>${o=(t=e[r.key])&&"object"==typeof t?t:{text:t},s=a(n(t).trim()||"—"),l="detail"in o&&o.detail?`<small>${a(o.detail)}</small>`:"",d=(c="image"in o?i(o.image):"")?`<img src="${a(c)}" alt="" />`:"",`<span class="cell-content">${d}<span>${s}${l}</span></span>`}</td>`}).join("")}</tr>`).join("");return`<section class="print-section ${o?"continued":""}">
      <header><div><h1>${a(e.title)}${s.length>1?` \xb7 Part ${o+1}/${s.length}`:""}</h1>
      ${e.subtitle?`<p>${a(e.subtitle)}</p>`:""}</div>
      <div class="meta">${e.rows.length} record${1===e.rows.length?"":"s"}<br>${a(c)}</div></header>
      <table><colgroup>${l.map(e=>`<col style="width:${e.toFixed(3)}%" />`).join("")}</colgroup>
      <thead><tr>${d}</tr></thead><tbody>${p||`<tr><td colspan="${r.columns.length}" class="no-data">No matching records</td></tr>`}</tbody></table>
      ${s.length>1?`<p class="section-note">Column section ${o+1}/${s.length} \xb7 Identity column repeated</p>`:""}
    </section>`});return`<!doctype html><html lang="en"><head><meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${a(e.title)} — Eleeveon Schools</title>
  <style>
    /* Reliable white-paper border on all four sides, including long tables. */
    @page { size:A4 ${o?"landscape":"portrait"}; margin:12mm; }
    *,*::before,*::after{box-sizing:border-box}
    html,body{margin:0;padding:0;background:#fff;color:#1f2937;font-family:Arial,Helvetica,sans-serif;-webkit-print-color-adjust:exact;print-color-adjust:exact}
    body{font-size:${l.toFixed(2)}pt;line-height:1.22}
    .screen-actions{display:flex;position:sticky;top:0;z-index:2;gap:12px;align-items:center;justify-content:space-between;padding:12px 16px;background:#152237;color:#fff}
    .screen-actions p{margin:0;font-size:12px}.screen-actions button{background:#fff;color:#152237;border:0;padding:9px 17px;border-radius:7px;font-weight:700;cursor:pointer}
    main{padding:12px;max-width:1400px;margin:auto}
    .print-section{width:100%;break-before:auto;page-break-before:auto}
    .print-section.continued{break-before:page;page-break-before:always}
    header{display:flex;justify-content:space-between;align-items:flex-end;gap:15px;border-bottom:1px solid #334155;padding-bottom:3mm;margin-bottom:3mm}
    h1{font-size:12pt;letter-spacing:-.2px;margin:0;font-weight:700;color:#172333}
    header p{font-size:8pt;color:#475569;margin:2px 0 0}
    .meta{text-align:right;font-size:7pt;color:#475569;line-height:1.35;white-space:nowrap}
    table{width:100%;min-width:100%;border-collapse:collapse;table-layout:fixed;border:1px solid #cbd5e1;max-width:100%;margin:0}
    thead{display:table-header-group}
    tbody tr{break-inside:avoid;page-break-inside:avoid}
    th,td{overflow-wrap:anywhere;word-break:normal;vertical-align:top;text-align:left;border-bottom:1px solid #d3dae4;border-right:1px solid #e2e8f0;padding:1.15mm 1.6mm}
    th{background:#e9eef4;color:#172333;font-size:${Math.max(7.4,l-.2).toFixed(2)}pt;font-weight:700;line-height:1.23}
    tbody tr:nth-child(even) td{background:#f6f8fb}
    .cell-content{display:flex;gap:4px;align-items:flex-start}
    .cell-content img{width:23px;height:23px;object-fit:cover;border-radius:3px;flex:0 0 23px;print-color-adjust:exact;-webkit-print-color-adjust:exact}
    .cell-content span{min-width:0;overflow-wrap:anywhere}
    .cell-content small{display:block;color:#64748b;font-size:7pt;margin-top:1px}
    .no-data{text-align:center;padding:18px;color:#64748b}
    .section-note{font-size:7pt;color:#64748b;margin:5px 0 0}
    @media screen{body{background:#eef1f5}main{background:#fff;box-shadow:0 10px 40px #0001;min-height:80vh;margin:24px auto;padding:24px}.print-section.continued{margin-top:25px;padding-top:12px;border-top:2px dashed #cbd5e1}}
    @media print{.screen-actions{display:none!important}html,body,main{width:100%!important;max-width:none!important}main{padding:0!important;margin:0!important;box-shadow:none}.print-section.continued{margin-top:0;padding:0;border:0}a{text-decoration:none;color:inherit}}
  </style></head><body>
  <div class="screen-actions"><p>A4 ${o?"landscape":"portrait"} \xb7 12mm page margins \xb7 full-width columns \xb7 ${e.rows.length} rows \xb7 ${s.length} column group${1===s.length?"":"s"} \xb7 Photos included when available</p>
  <div><button type="button" onclick="window.print()">Print / Save as PDF</button> <button type="button" onclick="window.close()">Close</button></div></div>
  <main>${d.join("")}</main></body></html>`}(e),t=window.open("","_blank");if(t){t.document.open(),t.document.write(r),t.document.close(),t.focus();let e=()=>{o(t.document).then(()=>{t.closed||(t.focus(),t.print())})};return"complete"===t.document.readyState?e():t.addEventListener("load",e,{once:!0}),!0}let s=document.createElement("iframe");s.title=`${e.title} A4 print`,s.style.cssText="position:fixed;right:0;bottom:0;width:0;height:0;border:0;opacity:0;pointer-events:none",document.body.appendChild(s);let l=s.contentDocument;if(!l)return s.remove(),!1;let c=()=>{s.isConnected&&s.remove()};return s.onload=()=>{let e=s.contentWindow;e?(e.onafterprint=c,o(l).then(()=>{s.isConnected&&(e.focus(),e.print(),window.setTimeout(c,6e4))})):c()},l.open(),l.write(r),l.close(),!0}function l(e){if("u"<typeof document)return!1;let r=Array.from((document.querySelector(".role-shell.branch-workspace-layout .app-content")||document.querySelector(".ba-workspace-wrapper")||document.body).querySelectorAll("table")).find(e=>e.getClientRects().length>0&&!e.closest('[role="dialog"],.ba-modal,.ba-sheet,.excel-import-overlay,.excel-export-overlay,[data-print-exclude]'));if(!r)return!1;let t=Array.from(r.querySelectorAll("thead tr:first-child th"));if(!t.length)return!1;let a=t.map((e,r)=>({node:e,i:r})).filter(({node:e})=>!/^\s*(actions?|controls?)\s*$/i.test(e.textContent||"")&&!e.hasAttribute("data-print-exclude"));if(!a.length)return!1;let n=e=>{let r=e.cloneNode(!0),t=Array.from(e.querySelectorAll("input,select,textarea"));return Array.from(r.querySelectorAll("input,select,textarea")).forEach((e,r)=>{let a=t[r],n=document.createElement("span");n.textContent=a?.type==="checkbox"?a.checked?"Yes":"No":a?.value||"—",e.replaceWith(n)}),r.querySelectorAll("button,svg,[data-print-exclude]").forEach(e=>e.remove()),(r.innerText||r.textContent||"").replace(/\s+/g," ").trim()};return s({title:e,columns:a.map(({node:e,i:r})=>({key:`c${r}`,label:n(e)||`Column ${r+1}`})),rows:Array.from(r.querySelectorAll("tbody tr")).filter(e=>!e.hasAttribute("data-print-exclude")).map(e=>{let r=Array.from(e.children).filter(e=>"TD"===e.tagName||"TH"===e.tagName),t={};return a.forEach(({i:e})=>{let a=r[e];if(!a){t[`c${e}`]="";return}let o=n(a),s=a.querySelector("img"),l=s?.currentSrc||s?.getAttribute("src")||"";t[`c${e}`]=i(l)?{text:o,image:l}:o}),t})})}},41181:(e,r,t)=>{"use strict";t.d(r,{YT:()=>x,dV:()=>b,ns:()=>m,sX:()=>g});var a=t(12115),n=t(42563),i=t(58365),o=t(66925);function s(e){return null==e?"":String(e).trim()}function l(...e){for(let r of e)if("string"==typeof r&&r.trim())return r.trim();return null}function c(e){return!!e&&(e.startsWith("blob:")||e.startsWith("data:image/")||e.startsWith("https://")||e.startsWith("http://")||e.startsWith("/"))}function d(e){return e?String(e.id??[e.role,e.schoolId??e.school?.id??"account",e.branchId??e.schoolBranchId??e.branch?.id??"root",e.teacherId??e.studentId??e.parentId??e.userId??e.appUserId??"portal"].join(":")):""}function p(e){return e?l(e.resolvedProfileImageUrl,e.resolvedPhotoUrl,e.photoUrl,e.profilePhotoUrl,e.avatarUrl,e.imageUrl,e.pictureUrl,e.photo,e.profilePhoto,e.avatar,e.image,e.picture):null}function u(e){return e?s(e.photoMediaId??e.profilePhotoMediaId??e.avatarMediaId??e.imageMediaId??e.pictureMediaId):""}async function h(e,r){let{row:t,ownerTable:a,ownerId:n}=e;if(!t||!n)return null;let o=p(t);if(o&&c(o))return o;try{let e=await (0,i.cg)({accountId:s(t.accountId)||void 0,ownerTable:a,ownerId:n,fieldKey:"photo"});if(e?.id&&!0!==e.isDeleted&&!1!==e.active){let t=await (0,i.fW)(String(e.id));if(t)return t.startsWith("blob:")&&r.push(t),t}}catch(e){console.warn("[workspace identity] owner photo resolution failed",e)}let l=u(t)||(o&&!c(o)?o:"");if(!l)return null;try{let e=await (0,i.fW)(l);return e?.startsWith("blob:")&&r.push(e),e||null}catch(e){return console.warn("[workspace identity] media-id photo resolution failed",e),null}}function m(e,r){let t=(0,o.p)(),c=(0,a.useMemo)(()=>[...e.map(e=>[d(e),e.schoolId??e.school?.id??"",e.branchId??e.schoolBranchId??e.branch?.id??"",e.teacherId??"",e.studentId??"",e.parentId??"",e.userId??e.appUserId??""].join("|")).sort(),[s(r?.id),s(r?.updatedAt),u(r),p(r)??"",String(t)].join("|")].join("::"),[e,r,t]),[m,g]=(0,a.useState)(new Map);return(0,a.useEffect)(()=>{let t=!1,a=[];return(async()=>{let i=new Set,o=new Set,c=new Set,p=new Set,u=new Set,m=new Set;for(let r of e){let e=s(r.schoolId??r.school?.id),t=s(r.branchId??r.schoolBranchId??r.branch?.id),a=s(r.teacherId),n=s(r.studentId),l=s(r.parentId),d=s(r.userId??r.appUserId??r.user?.id??r.appUser?.id);e&&i.add(e),t&&o.add(t),a&&c.add(a),n&&p.add(n),l&&u.add(l),d&&m.add(d)}let b=s(r?.id);b&&m.add(b);let[x,f,v,y,w,k]=await Promise.all([n.db.schools.bulkGet([...i]),n.db.branches.bulkGet([...o]),n.db.teachers.bulkGet([...c]),n.db.students.bulkGet([...p]),n.db.parents.bulkGet([...u]),n.db.appUsers?.bulkGet?.([...m])??[]]),j=e=>new Map(e.filter(Boolean).map(e=>[s(e.id),e])),S=j(x),N=j(f),C=j(v),E=j(y),I=j(w),A=j(k),z=new Map;for(let n of e){let e,i=s(n.schoolId??n.school?.id),o=s(n.branchId??n.schoolBranchId??n.branch?.id),c=s(n.teacherId),p=s(n.studentId),u=s(n.parentId),m=s(n.userId??n.appUserId??n.user?.id??n.appUser?.id??r?.id);if(c)e={row:C.get(c)??n.teacher??null,ownerTable:"teachers",ownerId:c};else if(p)e={row:E.get(p)??n.student??null,ownerTable:"students",ownerId:p};else if(u)e={row:I.get(u)??n.parent??null,ownerTable:"parents",ownerId:u};else{let t=A.get(m)??n.user??n.appUser??r??null;e={row:t,ownerTable:"appUsers",ownerId:m||s(t?.id)}}let g=await h(e,a);if(t)return;z.set(d(n),{schoolName:l(n.school?.name,S.get(i)?.name),branchName:l(n.branch?.name,N.get(o)?.name),profileName:function(e){if(!e)return null;let r=l(e.fullName,e.displayName,e.memberName,e.userName,e.name);return r||[e.firstName,e.middleName,e.lastName,e.surname].filter(e=>"string"==typeof e&&e.trim()).join(" ").trim()||null}(e.row),profileImage:g})}t||g(z)})(),()=>{for(let e of(t=!0,a))(0,i.hZ)(e)}},[c,e,r]),m}function g(e,r){let t=r.get(d(e));return e.schoolId||e.branchId?t?.schoolName&&t?.branchName?`${t.schoolName} \xb7 ${t.branchName}`:t?.branchName?t.branchName:t?.schoolName?t.schoolName:e.schoolId&&e.branchId?"School branch workspace":e.schoolId?"School workspace":"Branch workspace":"Account level"}function b(e,r){let t=r.get(d(e));if(t?.profileName){if(e.teacherId)return`Teacher \xb7 ${t.profileName}`;if(e.studentId)return`Student \xb7 ${t.profileName}`;if(e.parentId)return`Parent \xb7 ${t.profileName}`}return e.teacherId?"Teacher workspace":e.studentId?"Student workspace":e.parentId?"Parent workspace":"Workspace access"}function x(e,r){return e?r.get(d(e))?.profileImage??null:null}},49779:(e,r,t)=>{"use strict";t.d(r,{Io:()=>c,TV:()=>l,gr:()=>s,kp:()=>o});var a=t(95155),n=t(12115);let i=(0,n.createContext)(null);function o({children:e}){let[r,t]=(0,n.useState)({}),s=(0,n.useCallback)((e,r)=>(t(t=>({...t,[e]:r})),()=>{t(t=>{if(t[e]!==r)return t;let a={...t};return delete a[e],a})}),[]);return(0,a.jsx)(i.Provider,{value:{handlers:r,register:s},children:e})}function s(){return(0,n.useContext)(i)}function l(e,r){let t=s(),a=t?.register,i=(0,n.useRef)(r);i.current=r,(0,n.useEffect)(()=>{if(!a)return;let r=i.current;return a(e,{...r.add?{add:()=>i.current.add?.()}:{},...r.search?{search:e=>i.current.search?.(e)}:{},...r.filter?{filter:()=>i.current.filter?.()}:{},...r.print?{print:()=>i.current.print?.()}:{},...r.more?{more:()=>i.current.more?.()}:{}})},[a,e])}function c(e){if("u"<typeof document)return!1;let r=document.querySelector(".role-shell.branch-workspace-layout .app-content");if(!r)return!1;let t=Array.from(r.querySelectorAll('button:not([disabled]), [role="button"][aria-label], [role="button"][title]')),a=t.filter(r=>r.getAttribute("data-branch-action")?.toLowerCase()===e),n=t.filter(r=>{let t;return t=[r.getAttribute("aria-label")||"",r.getAttribute("title")||""].join(" ").trim().toLowerCase(),({add:/\b(add|create|new|enroll)\b/,search:/\b(search|find)\b/,filter:/\b(filter|refine)\b/,print:/\b(print|printing)\b/,more:/\b(more|additional actions|options)\b/})[e].test(t)}),i=t.filter(r=>r.textContent?.trim().toLowerCase()===e),o=1===a.length?a[0]:1===n.length?n[0]:1===i.length?i[0]:null;if(o instanceof HTMLElement)return o.click(),!0;if("search"===e){let e=r.querySelector('input[type="search"], input[aria-label*="Search" i], input[placeholder*="Search" i]');if(e)return e.focus(),!0}return!1}},61127:(e,r,t)=>{"use strict";function a(e){let r=String(e||"").trim().toLowerCase().replace(/[\s-]+/g,"_");return"super_admin"===r||"owner"===r||"school_owner"===r?"Owner":"school_admin"===r||"admin"===r?"Multi-Branch Admin":"branch_admin"===r?"Branch Admin":"platform_team"===r?"Platform Team":"developer"===r?"Developer":"accountant"===r?"Accountant":"teacher"===r?"Teacher":"student"===r?"Student":"parent"===r?"Parent":String(e||"Member").replace(/_/g," ")}t.d(r,{R:()=>a})},66925:(e,r,t)=>{"use strict";t.d(r,{p:()=>i});var a=t(12115),n=t(25255);function i(e,r){let t=(0,a.useMemo)(()=>{var t,a;return t=e,a=r,Array.isArray(t)?{tables:t,accountId:a}:{tables:t?.tables,accountId:t?.accountId??a}},[e,r]),i=(0,a.useCallback)(()=>(0,n.eZ)(t),[t]);return(0,a.useSyncExternalStore)(n.X2,i,n.jB)}}}]);
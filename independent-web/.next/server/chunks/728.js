exports.id=728,exports.ids=[728],exports.modules={30728:(a,b,c)=>{"use strict";let d;c.d(b,{A:()=>cK});var e=c(48249),f=c(67484),g=c.n(f),h=c(10974);function i({state:a,onRetry:b,onCancel:c}){return a.active||a.error?(0,e.jsx)(h.A,{progress:{stage:a.stage.bootstrapStage,percent:a.stage.percent,title:a.stage.title,detail:a.stage.detail,tableName:a.stage.tableName,current:a.stage.current,total:a.stage.total},error:a.error,onRetry:b,onCancel:c}):null}let j={preparing:{key:"preparing",bootstrapStage:"checking-cache",percent:8,title:"Preparing workspace…",detail:"Securing the next workspace transition."},access:{key:"access",bootstrapStage:"checking-cache",percent:14,title:"Updating access…",detail:"Validating the selected role and workspace permissions."},membership:{key:"membership",bootstrapStage:"checking-cache",percent:20,title:"Opening selected role…",detail:"Activating the selected membership and profile context."},institution:{key:"institution",bootstrapStage:"applying",percent:78,title:"Resolving school and branch…",detail:"Loading the permitted institution context for this role."},settings:{key:"settings",bootstrapStage:"applying",percent:84,title:"Loading workspace settings…",detail:"Refreshing the settings permitted for this workspace."},branding:{key:"branding",bootstrapStage:"applying",percent:88,title:"Applying branding…",detail:"Preparing the correct school, branch, or account identity."},appearance:{key:"appearance",bootstrapStage:"applying",percent:92,title:"Applying appearance…",detail:"Loading the correct colours, theme, typography, and display preferences."},data:{key:"data",bootstrapStage:"requesting",percent:24,title:"Downloading permitted workspace data…",detail:"Downloading and validating all permitted tables for this role."},dashboard:{key:"dashboard",bootstrapStage:"applying",percent:97,title:"Preparing dashboard…",detail:"Finalizing the selected workspace before opening it."},complete:{key:"complete",bootstrapStage:"ready",percent:100,title:"Workspace ready",detail:"Opening the selected workspace."}};function k(a,b){return{...j[a],...b,key:a}}let l={active:!1,request:null,stage:k("preparing"),error:null},m=(0,f.createContext)(null);function n(){return new Promise(a=>{a()})}function o({children:a}){let[b,c]=(0,f.useState)(l),d=(0,f.useRef)(!1),g=(0,f.useCallback)((a,b)=>{c(c=>({...c,active:!0,error:null,stage:k(a,b)}))},[]),h=(0,f.useCallback)(a=>{c(b=>({...b,active:!0,error:null,stage:{...b.stage,key:"data",bootstrapStage:a.stage,percent:a.percent,title:a.title,detail:a.detail,tableName:a.tableName,current:a.current,total:a.total}}))},[]),j=(0,f.useCallback)(a=>{d.current=!1,c(b=>({...b,active:!0,error:a}))},[]),p=(0,f.useCallback)(()=>{d.current=!1,c(l)},[]),q=(0,f.useCallback)(async(a,b)=>{if(d.current)throw Error("A workspace transition is already running.");d.current=!0,c({active:!0,request:a,stage:k("preparing",{title:a.title,detail:a.detail}),error:null}),await n();try{let a=await b({setStage:g,setBootstrapProgress:h});return g("complete"),await n(),a}catch(a){throw j(a instanceof Error?a.message:"The workspace transition could not be completed."),a}finally{d.current=!1}},[j,h,g]),r=(0,f.useMemo)(()=>({state:b,busy:b.active&&!b.error,runTransition:q,setStage:g,setBootstrapProgress:h,failTransition:j,cancelTransition:p}),[b,q,g,h,j,p]);return(0,e.jsxs)(m.Provider,{value:r,children:[a,(0,e.jsx)(i,{state:b,onCancel:b.error?p:void 0})]})}var p=c(19099),q=c(4121),r=c(16453),s=c(18423),t=c(81734),u=c(41259),v=c(91961),w=c(39091),x=c(3445),y=c(47984),z=c(30623),A=c(61932),B=c(22267);function C({availability:a,moduleLabel:b,missingCount:c,totalCount:d,online:f,preparing:g=!1,progress:h,onRetry:i}){if("complete"===a||"not_required"===a)return null;let j=f&&(g||"downloading"===a),k=j?"Preparing this page's offline records":f?"failed"===a?"The last data download was interrupted":"Records may be incomplete":"Limited offline records",l=j?`Loading records needed by ${b}. You can use locally saved records while this continues.`:f?`Some records for ${b} have not been confirmed as completely downloaded. An empty table may not mean that no records exist.`:`Offline preparation for ${b} is incomplete. Only locally saved records are available.`,m=Math.max(0,Number(h?.done||0)),n=Math.max(0,Number(h?.total||0)),o=n?Math.max(0,Math.min(100,Math.round(m/n*100))):null;return(0,e.jsxs)("section",{role:"status","aria-live":"polite",style:{margin:"0 0 10px",padding:"11px 12px",borderRadius:13,background:"color-mix(in srgb, var(--primary-color, #2563eb) 7%, var(--surface, #fff))",border:"1px solid color-mix(in srgb, var(--primary-color, #2563eb) 20%, transparent)",color:"var(--text, #0f172a)",display:"flex",flexWrap:"wrap",alignItems:"center",gap:9},children:[(0,e.jsx)("span",{"aria-hidden":"true",style:{fontSize:18},children:j?"↻":"ⓘ"}),(0,e.jsxs)("div",{style:{flex:"1 1 220px",minWidth:0},children:[(0,e.jsx)("strong",{style:{display:"block",fontSize:12},children:k}),(0,e.jsx)("p",{style:{margin:"3px 0 0",fontSize:11,lineHeight:1.5,opacity:.82},children:l}),j&&null!==o&&(0,e.jsxs)("div",{style:{marginTop:8},children:[(0,e.jsx)("div",{role:"progressbar","aria-label":`${b} data download`,"aria-valuenow":o,"aria-valuemin":0,"aria-valuemax":100,style:{height:5,borderRadius:10,background:"rgba(120,120,120,.15)",overflow:"hidden"},children:(0,e.jsx)("div",{style:{height:"100%",width:`${o}%`,borderRadius:"inherit",background:"var(--primary-color, #2563eb)"}})}),(0,e.jsxs)("small",{style:{fontSize:10,opacity:.75},children:[m.toLocaleString()," of ",n.toLocaleString()," records processed"]})]})]}),(0,e.jsxs)("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[(0,e.jsxs)("small",{style:{fontSize:10,opacity:.75},children:[Math.max(0,d-c),"/",d," groups verified"]}),f&&!j&&i&&(0,e.jsx)("button",{type:"button",onClick:i,style:{minHeight:34,padding:"5px 11px",borderRadius:10,cursor:"pointer",fontSize:11,fontWeight:800,border:"1px solid color-mix(in srgb, var(--primary-color, #2563eb) 30%, transparent)",background:"var(--surface, #fff)",color:"var(--text, #0f172a)"},children:"Retry this page"})]})]})}var D=c(51912),E=c(1307),F=c(75752);function G(a){let b=Number(a);return Number.isFinite(b)?b:0}async function H(a){try{let b=await c.e(5069).then(c.bind(c,85069));if("function"!=typeof b.getSyncDiagnostics)return null;return await b.getSyncDiagnostics(a?{accountId:a}:void 0)}catch{return null}}async function I(a){try{let b=(await Promise.resolve().then(c.bind(c,79143))).db;if(!b?.tables)return[];let d=[];for(let c of b.tables){let b=await c.toArray(),e=0,f=0,g=0,h=0;for(let c of b){if(a&&c.accountId&&c.accountId!==a)continue;h+=1;let b=String(c.syncStatus??c.synced??"").toLowerCase();("pending"===b||"0"===b||0===c.synced)&&(e+=1),("failed"===b||"error"===b||"2"===b||2===c.synced||c.syncError)&&(f+=1),("conflict"===b||c.conflictId)&&(g+=1)}(e||f||g)&&d.push({tableName:c.name,pending:e,failed:f,conflicts:g,total:h})}return d.sort((a,b)=>b.failed-a.failed||b.pending-a.pending||a.tableName.localeCompare(b.tableName))}catch{return[]}}async function J(a,b){let c=new Blob([JSON.stringify(b,null,2)],{type:"application/json"}),d=URL.createObjectURL(c);try{let b=document.createElement("a");b.href=d,b.download=a,document.body.appendChild(b),b.click(),b.remove()}finally{URL.revokeObjectURL(d)}}function K(){var a;let{status:b,pushed:c,pulled:d,errors:g,lastSyncedAt:h,autoSyncEnabled:i,setAutoSyncEnabled:j}=(0,t.j)(),[k,l]=(0,f.useState)(null),m=k?.conflicts||0,n=k?.pending||0,o=k?.errors||0,p=m>0?"purple":"success"===b?"green":"failed"===b||o>0?"red":"offline"===b?"orange":"syncing"===b||"checking"===b?"blue":"gray",q=m>0?"Sync conflicts need review":"syncing"===b||"checking"===b?"Syncing account data...":"success"===b?"Account data synced":"failed"===b?"Sync needs attention":"offline"===b?"Offline mode":"Sync ready",r=g[0]||k?.lastSyncError||"";return(0,e.jsxs)("section",{className:"sync-strip","aria-live":"polite",children:[(0,e.jsx)("style",{children:L}),(0,e.jsx)("div",{className:`sync-dot ${p}`}),(0,e.jsxs)("div",{className:"sync-copy",children:[(0,e.jsx)("strong",{children:q}),(0,e.jsxs)("span",{children:["Pushed ",c," \xb7 Pulled ",d," \xb7 Pending ",n," \xb7 Conflicts ",m," \xb7 Last sync: ",(a=h||k?.lastSyncOkAt||k?.lastSyncAt)?new Date(a).toLocaleString("en-GH",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"Never"]}),!!r&&(0,e.jsx)("small",{children:r})]}),(0,e.jsxs)("label",{className:"sync-toggle",title:"Enable or disable automatic background sync",children:[(0,e.jsx)("input",{type:"checkbox",checked:i,onChange:a=>j(a.target.checked)}),(0,e.jsx)("span",{children:"Auto"})]})]})}let L=`
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
`;function M(a){return a?new Date(a).toLocaleString("en-GH",{dateStyle:"medium",timeStyle:"short"}):"Never"}function N({label:a,value:b,tone:c="neutral"}){return(0,e.jsxs)("div",{className:"system-status-row",children:[(0,e.jsx)("span",{children:a}),(0,e.jsx)("strong",{"data-tone":c,children:b})]})}function O(){let[a,b]=(0,f.useState)(null),{statusSheetOpen:d,closeStatusSheet:g}=(0,E.g)(),{status:h,actionState:i,actions:j}=function(){let{accountId:a,account:b}=(0,q.F)(),{activeSchool:d,activeBranch:e,activeBranchId:g}=(0,s.c)(),h=(0,x.tm)(),i=(0,v.x)(),j=(0,t.j)(),{statusRevision:k,refreshSystemStatus:l}=(0,E.g)(),[m,n]=(0,f.useState)("u"<typeof navigator||navigator.onLine),[o,p]=(0,f.useState)(null),[r,u]=(0,f.useState)([]),[w,y]=(0,f.useState)(null),[z,A]=(0,f.useState)({activeAction:null,actionError:null,actionMessage:null}),B=(0,f.useMemo)(()=>(0,F.Yd)(),[]),C=(0,f.useCallback)(async()=>{let[b,c,d]=await Promise.all([H(a),navigator.onLine?(0,F.yM)().catch(()=>null):Promise.resolve(null),I(a)]);p(b),u(d),c&&y(c)},[a]),D=(0,f.useCallback)(async(a,b)=>{A({activeAction:a,actionError:null,actionMessage:null});try{let a=await b();A({activeAction:null,actionError:null,actionMessage:a||"Completed successfully."}),l(),await C()}catch(a){A({activeAction:null,actionError:a?.message||String(a),actionMessage:null})}},[C,l]),K=(0,f.useCallback)(()=>D("refresh-data",async()=>{let a=await Promise.resolve().then(c.bind(c,84168));if("function"==typeof a.triggerManualSync)a.triggerManualSync();else if("function"==typeof a.runSync)await a.runSync({trigger:"manual",includePlatformCache:!0});else throw Error("Manual synchronization is unavailable.");return"Data refresh started."}),[D]),L=(0,f.useCallback)(()=>D("retry-failed",async()=>{let b=(await Promise.resolve().then(c.bind(c,79143))).db;if(!b)throw Error("Local database is unavailable.");let d=0;for(let c of b.tables)if(!["migrationJournal","databaseRecoveryBackups"].includes(c.name))for(let b of(await c.toArray()).filter(b=>(!a||b.accountId===a)&&("error"===b.synced||"error"===b.syncStatus||!!b.syncError)))await c.update(b.id,{synced:"pending",syncStatus:"pending",syncError:void 0,updatedAt:Date.now()}),d+=1;let e=await Promise.resolve().then(c.bind(c,84168));return d>0&&"function"==typeof e.triggerManualSync&&e.triggerManualSync(),d?`${d} failed record(s) queued again.`:"No failed records were found."}),[a,D]),M=(0,f.useCallback)(()=>D("reconnect-live",async()=>(i.reconnect(),"Reconnecting live updates.")),[i,D]),N=(0,f.useCallback)(()=>D("check-update",async()=>{let a=await (0,F.yM)();return y(a),window.dispatchEvent(new CustomEvent("eleeveon:app-version-changed",{detail:{metadata:a}})),(0,F._5)(a,B).updateAvailable?"A newer application build was detected.":"The application is up to date."}),[B,D]),O=(0,f.useCallback)(()=>D("export-backup",async()=>{let b,d=await Promise.resolve().then(c.bind(c,79143)),e=[d.createExternalDatabaseBackup,d.exportDatabaseBackup,d.createDatabaseBackup,d.createPreUpgradeBackup].find(a=>"function"==typeof a);if(e)b=await e({accountId:a,reason:"manual-system-status-export"});else if(d.db){let c={};for(let b of d.db.tables){let d=await b.toArray();c[b.name]=a?d.filter(b=>!b.accountId||b.accountId===a):d}b={accountId:a,databaseVersion:h.currentVersion,exportedAt:Date.now(),tables:c}}else throw Error("Offline backup export is unavailable.");return await J(`eleeveon-offline-backup-${Date.now()}.json`,b),"Offline backup exported."}),[a,h.currentVersion,D]),P=(0,f.useCallback)(()=>D("repair-media",async()=>{if(!a)throw Error("No active account is available.");let b=await c.e(3404).then(c.bind(c,63404)),d=b.repairMediaIntegrity||b.repairMediaRecords;if("function"!=typeof d)throw Error("Media repair is unavailable.");let e=await d(a),f=G(e?.repaired||e?.updated||e?.fixed);return f?`${f} media record(s) repaired.`:"Media inspection completed."}),[a,D]),Q=(0,f.useCallback)(()=>{window.dispatchEvent(new CustomEvent("eleeveon:open-offline-data-removal"))},[]),R=!!w&&(0,F._5)(w,B).updateAvailable;return{status:{online:m,realtimeStatus:i.status.status,realtimeConnected:i.connected,lastSuccessfulPush:o?.lastPushAt??o?.lastSuccessfulPush??(j.pushed>0?j.lastSyncedAt:null),lastSuccessfulPull:o?.lastPullAt??o?.lastSuccessfulPull??(j.pulled>0?j.lastSyncedAt:null),pendingChanges:G(o?.pending),failedChanges:G(o?.errors??o?.failed),conflicts:G(o?.conflicts??j.conflicts),databaseVersion:h.currentVersion,targetDatabaseVersion:h.targetVersion,applicationVersion:B,remoteApplicationVersion:w,updateAvailable:R,currentAccountId:a,currentAccountName:b?.name||null,currentBranchId:g,currentBranchName:e?.name||null,currentSchoolName:d?.name||null,lastSyncError:o?.lastSyncError||j.errors?.[0]||null,tableBreakdown:r},actionState:z,refresh:C,actions:{refreshData:K,retryFailedRecords:L,reconnectRealtime:M,checkForAppUpdate:N,exportOfflineBackup:O,repairMediaRecords:P,openOfflineRemoval:Q}}}();if(!d)return null;let k=!!i.activeAction,l=[{key:"refresh-data",label:"Refresh data",note:"Push and pull now",action:j.refreshData},{key:"refresh-app",label:"Refresh application",note:"Reload this page and restart Eleeveon",action:async()=>{if(g(),await new Promise(a=>{window.setTimeout(a,150)}),"serviceWorker"in navigator)try{let a=await navigator.serviceWorker.getRegistrations();await Promise.all(a.map(a=>a.update()))}catch(a){console.warn("[system status] service-worker refresh check failed",a)}window.location.reload()}},{key:"retry-failed",label:"Retry failed records",note:`${h.failedChanges} currently failed`,action:j.retryFailedRecords},{key:"reconnect-live",label:"Reconnect live updates",note:h.realtimeStatus,action:j.reconnectRealtime},{key:"check-update",label:"Check for app update",note:h.updateAvailable?"Update detected":h.applicationVersion.appVersion,action:j.checkForAppUpdate},{key:"export-backup",label:"Export offline backup",note:"Save local account data",action:j.exportOfflineBackup},{key:"repair-media",label:"Repair media records",note:"Check mixed or orphaned media",action:j.repairMediaRecords},{key:"remove-offline",label:"Remove offline account data",note:"Separate from logout",action:()=>{g(),j.openOfflineRemoval()},danger:!0}];return(0,e.jsxs)("div",{className:"system-status-overlay",role:"presentation",onMouseDown:a=>{a.target===a.currentTarget&&g()},children:[(0,e.jsx)("style",{children:P}),(0,e.jsxs)("aside",{className:"system-status-sheet",role:"dialog","aria-modal":"true","aria-labelledby":"system-status-title",children:[(0,e.jsxs)("header",{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"System status"}),(0,e.jsx)("h2",{id:"system-status-title",children:"Data, connection and device"})]}),(0,e.jsx)("button",{type:"button",className:"system-close",onClick:g,"aria-label":"Close system status",children:"✕"})]}),(0,e.jsx)("section",{className:"system-status-summary",children:(0,e.jsx)(K,{})}),(0,e.jsxs)("section",{className:"system-status-grid",children:[(0,e.jsx)(N,{label:"Connection",value:h.online?"Online":"Offline",tone:h.online?"good":"warning"}),(0,e.jsx)(N,{label:"Live updates",value:h.realtimeConnected?"Connected":h.realtimeStatus,tone:h.realtimeConnected?"good":"warning"}),(0,e.jsx)(N,{label:"Last successful push",value:M(h.lastSuccessfulPush)}),(0,e.jsx)(N,{label:"Last successful pull",value:M(h.lastSuccessfulPull)}),(0,e.jsxs)("button",{type:"button",className:"system-status-click-row",onClick:()=>b("pending"===a?null:"pending"),children:[(0,e.jsx)(N,{label:"Pending changes",value:h.pendingChanges,tone:h.pendingChanges?"warning":"good"}),(0,e.jsx)("span",{children:"pending"===a?"−":"›"})]}),(0,e.jsxs)("button",{type:"button",className:"system-status-click-row",onClick:()=>b("failed"===a?null:"failed"),children:[(0,e.jsx)(N,{label:"Failed changes",value:h.failedChanges,tone:h.failedChanges?"danger":"good"}),(0,e.jsx)("span",{children:"failed"===a?"−":"›"})]}),(0,e.jsx)(N,{label:"Database version",value:`${h.databaseVersion??"—"} / ${h.targetDatabaseVersion}`,tone:h.databaseVersion===h.targetDatabaseVersion?"good":"warning"}),(0,e.jsx)(N,{label:"Application version",value:h.applicationVersion.appVersion}),(0,e.jsx)(N,{label:"Application update",value:h.updateAvailable?"Available":"Up to date",tone:h.updateAvailable?"warning":"good"}),(0,e.jsx)(N,{label:"Current account",value:h.currentAccountName||h.currentAccountId||"None"}),(0,e.jsx)(N,{label:"Current branch",value:h.currentBranchName||"None"})]}),a?(0,e.jsxs)("section",{className:"system-table-breakdown",children:[(0,e.jsxs)("header",{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"pending"===a?"Pending records":"Failed records"}),(0,e.jsx)("strong",{children:"Table breakdown"})]}),(0,e.jsx)("button",{type:"button",onClick:()=>b(null),children:"Close"})]}),(0,e.jsxs)("div",{children:[h.tableBreakdown.filter(b=>"pending"===a?b.pending>0:b.failed>0).map(b=>(0,e.jsxs)("article",{children:[(0,e.jsx)("strong",{children:b.tableName}),(0,e.jsx)("span",{children:"pending"===a?`${b.pending} pending`:`${b.failed} failed`}),(0,e.jsxs)("small",{children:[b.total," local record",1===b.total?"":"s"]})]},b.tableName)),h.tableBreakdown.some(b=>"pending"===a?b.pending>0:b.failed>0)?null:(0,e.jsx)("p",{children:"No matching table records were found."})]})]}):null,h.lastSyncError&&(0,e.jsxs)("div",{className:"system-error",children:[(0,e.jsx)("strong",{children:"Sync needs attention"}),(0,e.jsx)("span",{children:h.lastSyncError})]}),i.actionError&&(0,e.jsx)("div",{className:"system-error",children:i.actionError}),i.actionMessage&&(0,e.jsx)("div",{className:"system-success",children:i.actionMessage}),(0,e.jsxs)("section",{className:"system-actions",children:[(0,e.jsx)("div",{className:"system-section-title",children:"Actions"}),l.map(a=>(0,e.jsxs)("button",{type:"button",className:a.danger?"danger":"",disabled:k&&i.activeAction!==a.key,onClick:()=>{a.action()},children:[(0,e.jsxs)("span",{children:[(0,e.jsx)("strong",{children:i.activeAction===a.key?"Working…":a.label}),(0,e.jsx)("small",{children:a.note})]}),(0,e.jsx)("b",{children:"›"})]},a.key))]})]})]})}let P=`
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
`;var Q=c(74429),R=c(89313);function S(a,b){return a instanceof Error?"NotAllowedError"===a.name||"PermissionDeniedError"===a.name?"Permission was declined or blocked. Check your browser's camera, microphone or screen-sharing permissions.":"NotFoundError"===a.name?"No suitable camera, microphone or screen source was found on this device.":"InvalidStateError"===a.name?"Start screen sharing directly from this call window while it is active and focused.":a.message||b:b}function T({conversationId:a,open:b,onClose:c}){let[d,g]=(0,f.useState)("idle"),[h,i]=(0,f.useState)(""),[j,k]=(0,f.useState)(null),[l,m]=(0,f.useState)(!1),[n,o]=(0,f.useState)(!1),[p,q]=(0,f.useState)(!1),[r,s]=(0,f.useState)({calling:!1,screen:!1,secure:!1}),[t,u]=(0,f.useState)(!1),v=(0,f.useRef)(null),w=(0,f.useRef)(null),x=(0,f.useRef)(null),y=(0,f.useRef)(null),z=(0,f.useRef)(null),A=(0,f.useRef)(null),B=(0,f.useRef)("");(0,f.useRef)(new Set),(0,f.useRef)(Date.now()-2500);let C=(0,f.useRef)([]),D=(0,f.useRef)("idle");D.current=d;let E=(0,f.useCallback)(()=>{x.current?.getTracks().forEach(a=>a.stop()),x.current=null,w.current?.getTracks().forEach(a=>a.stop()),w.current=null,v.current?.close(),v.current=null,y.current?.getTracks().forEach(a=>a.stop()),y.current=null,C.current=[],B.current="",z.current&&(z.current.srcObject=null),A.current&&(A.current.srcObject=null),m(!1),o(!1),q(!1),u(!1),g("idle"),k(null)},[]),F=(0,f.useCallback)(async(b,c={})=>{B.current&&await R.k.sendSignal(a,b,B.current,c)},[a]);async function G(a){1;throw Error("Calls need HTTPS or localhost. Open Eleeveon Schools over its secure website.")}async function H(a){i(""),B.current=crypto.randomUUID();try{let b=await G(a);await b.setLocalDescription(await b.createOffer()),await F("offer",{sdp:b.localDescription?.sdp,type:"offer",video:a}),g("calling")}catch(b){let a=S(b,"The call could not start.");E(),i(a)}}async function I(){if(j){i(""),B.current=j.sessionId;try{let a=await G(!!j.payload?.video);for(let b of(await a.setRemoteDescription({type:"offer",sdp:String(j.payload?.sdp||"")}),C.current.splice(0)))await a.addIceCandidate(b);await a.setLocalDescription(await a.createAnswer()),await F("answer",{sdp:a.localDescription?.sdp,type:"answer"}),k(null),g("calling")}catch(b){let a=S(b,"The call could not be answered.");E(),i(a)}}}async function J(){try{await F("end")}catch{}E(),c()}async function K(){if(j)try{await R.k.sendSignal(a,"decline",j.sessionId,{})}catch{}E(),c()}async function L(){if(!v.current||"connected"!==D.current)return void i("Connect a voice or video call before sharing your screen.");let a=navigator.mediaDevices;if(!window.isSecureContext||"function"!=typeof a?.getDisplayMedia)return void i("Screen sharing isn't available in this browser or app. Open Eleeveon Schools in desktop Chrome or Edge over HTTPS, or send a screenshot using +.");i("");let b=null;try{let c=(b=await a.getDisplayMedia({video:!0,audio:!1})).getVideoTracks()[0],d=v.current.getSenders().find(a=>a.track?.kind==="video")??v.current.getTransceivers().find(a=>"video"===a.receiver.track.kind)?.sender;if(!c||!d)throw Error("This connection can't accept screen video. Please restart the call and try again.");await d.replaceTrack(c),x.current=b,m(!0),c.onended=()=>{M()}}catch(a){b?.getTracks().forEach(a=>a.stop()),i(S(a,"Screen sharing could not start."))}}async function M(){let a=v.current?.getSenders().find(a=>a.track?.kind==="video")??v.current?.getTransceivers().find(a=>"video"===a.receiver.track.kind)?.sender,b=w.current?.getVideoTracks()[0]??null;try{a&&await a.replaceTrack(b)}catch{i("Could not restore your camera after sharing.")}x.current?.getTracks().forEach(a=>a.stop()),x.current=null,m(!1)}return(0,e.jsxs)("div",{className:`els ${b||"incoming"===d?"els-open":""}`,"aria-label":"Live Eleeveon assistance",children:[(0,e.jsx)("style",{children:`
      .els{font-size:13px}.els button{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:42px;padding:10px 14px;border:1px solid var(--border,#d4e1e2);border-radius:13px;background:var(--surface,#fff);color:inherit;font-weight:650}.els button:focus-visible{outline:2px solid var(--dashboard-primary,#147c78);outline-offset:2px}.els button.primary{background:var(--dashboard-primary,#147c78);color:#fff;border-color:transparent}.els button.end{color:#fff;background:#b7354e;border-color:transparent}.els button:disabled{opacity:.5;cursor:not-allowed}
      .els-open::before{content:"";position:fixed;inset:0;z-index:2147480000;background:rgba(15,31,42,.44);backdrop-filter:blur(3px)}.els-modal{position:fixed;z-index:2147480001;top:50%;left:50%;transform:translate(-50%,-50%);width:min(700px,calc(100vw - 24px));max-height:min(88dvh,720px);overflow-y:auto;border:1px solid var(--border,#d4e1e2);border-radius:21px;background:var(--surface,#fff);padding:clamp(13px,2vw,20px);box-shadow:0 24px 60px #102e3240}.els-head{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px}.els-head strong{font-size:15px}.els-head button{width:35px;height:35px;min-height:35px;padding:0}.els-actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:13px}.els-video{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:15px 0}.els-video>div{position:relative;min-width:0;border-radius:16px;overflow:hidden;background:#142c3c}.els-video video{height:clamp(135px,22dvh,240px);width:100%;object-fit:contain;display:block}.els-video label{position:absolute;bottom:8px;left:9px;color:#fff;background:#0c2237aa;border-radius:7px;padding:4px 7px;font-size:10px}.els-status{font-size:12px;line-height:1.55;color:var(--muted,#667b89);margin:6px 0}.els-error{color:#b32642;background:color-mix(in srgb,#f4b8c2 20%,var(--surface,#fff));border:1px solid #df9daf55;padding:10px;border-radius:10px;line-height:1.5}.els-supported{font-size:11px;margin-top:12px;padding:10px;border-radius:11px;background:color-mix(in srgb,var(--dashboard-primary,#147c78) 7%,var(--surface,#fff));color:var(--text,#364b55)}
      @media(max-width:560px){.els-modal{width:calc(100vw - 14px);max-height:89dvh}.els-video{grid-template-columns:1fr}.els-video video{height:125px}.els-actions button{flex:1}}
    `}),(b||"incoming"===d)&&(0,e.jsxs)("div",{className:"els-modal",role:"dialog","aria-modal":"false","aria-label":"Live assistance call",children:[(0,e.jsxs)("header",{className:"els-head",children:[(0,e.jsx)("strong",{children:"Live assistance"}),(0,e.jsx)("button",{type:"button","aria-label":"Close call panel",onClick:()=>{c(),"idle"===d&&k(null)},children:"✕"})]}),(0,e.jsx)("p",{className:"els-status",children:"incoming"===d?"Incoming call \xb7 choose whether to join":"calling"===d?"Connecting your call…":"connected"===d?"Connected \xb7 you can speak and share your screen":"Talk or share your screen with Eleeveon Support."}),!!h&&(0,e.jsx)("p",{className:"els-error",role:"alert",children:h}),("connected"===d||"calling"===d)&&(0,e.jsxs)("div",{className:"els-video",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("video",{ref:A,autoPlay:!0,playsInline:!0}),(0,e.jsx)("label",{children:t?"Other participant":"Other participant \xb7 audio"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("video",{ref:z,autoPlay:!0,muted:!0,playsInline:!0}),(0,e.jsx)("label",{children:p?"You":"You \xb7 audio"})]})]}),"incoming"===d?(0,e.jsxs)("div",{className:"els-actions",children:[(0,e.jsx)("button",{className:"primary",onClick:()=>void I(),disabled:!r.calling,children:"Accept call"}),(0,e.jsx)("button",{onClick:()=>void K(),children:"Decline"})]}):"idle"===d?(0,e.jsxs)("div",{className:"els-actions",children:[(0,e.jsx)("button",{className:"primary",disabled:!r.calling,onClick:()=>void H(!1),children:"☎ Voice call"}),(0,e.jsx)("button",{disabled:!r.calling,onClick:()=>void H(!0),children:"▣ Video call"})]}):(0,e.jsxs)("div",{className:"els-actions",children:[(0,e.jsx)("button",{onClick:()=>{w.current?.getAudioTracks().forEach(a=>a.enabled=n),o(a=>!a)},children:n?"Unmute":"Mute"}),(0,e.jsx)("button",{disabled:!l&&("connected"!==d||!r.screen),onClick:()=>void(l?M():L()),children:l?"■ Stop sharing":"▣ Share screen"}),(0,e.jsx)("button",{className:"end",onClick:()=>void J(),children:"End call"})]}),!r.calling&&(0,e.jsx)("p",{className:"els-supported",children:"Calls need a supported browser, a secure HTTPS connection and microphone access."}),!r.screen&&(0,e.jsx)("p",{className:"els-supported",children:"Screen sharing is not supported here. Open the web app in desktop Chrome or Edge, or attach a screenshot using +. Voice and video may still work."}),r.screen&&"connected"===d&&!l&&(0,e.jsx)("p",{className:"els-status",style:{marginTop:12},children:"You choose which tab, window or screen to share. Sharing stops when you select Stop or end the call."})]})]})}let U="ELEEVEON_E2EE_V1:",V=new TextEncoder,W=new TextDecoder,X="deviceKeys";function Y(){if("u"<typeof crypto||!crypto.subtle||"u"<typeof indexedDB)throw Error("Encrypted chat needs WebCrypto and IndexedDB on a secure HTTPS connection.")}function Z(a){return a instanceof Uint8Array?a:new Uint8Array(a)}function $(a){let b=Z(a),c="";for(let a=0;a<b.length;a+=4096)c+=String.fromCharCode(...b.subarray(a,a+4096));return btoa(c).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"")}function _(a){let b=atob(a.replace(/-/g,"+").replace(/_/g,"/")+"=".repeat((4-a.length%4)%4));return Uint8Array.from(b,a=>a.charCodeAt(0))}function aa(a){return V.encode(a)}function ab(a){return crypto.getRandomValues(new Uint8Array(a))}function ac(a){return a.buffer.slice(a.byteOffset,a.byteOffset+a.byteLength)}function ad(){return Y(),new Promise((a,b)=>{let c=indexedDB.open("eleeveon-support-keys-v1",1);c.onupgradeneeded=()=>{c.result.objectStoreNames.contains(X)||c.result.createObjectStore(X,{keyPath:"id"})},c.onerror=()=>b(c.error||Error("Private key storage failed")),c.onsuccess=()=>a(c.result)})}async function ae(a){let b=await ad();try{return await new Promise((c,d)=>{let e=b.transaction(X,"readonly").objectStore(X).get(a);e.onsuccess=()=>c(e.result),e.onerror=()=>d(e.error)})}finally{b.close()}}async function af(a){let b=await ad();try{await new Promise((c,d)=>{let e=b.transaction(X,"readwrite");e.objectStore(X).put(a),e.oncomplete=()=>c(),e.onerror=()=>d(e.error)})}finally{b.close()}}async function ag(a,b){Y();let c=`${a.x}.${a.y}|${b.x}.${b.y}`;return Array.from(Z(await crypto.subtle.digest("SHA-256",aa(c))).slice(0,16),a=>a.toString(16).padStart(2,"0")).join("").match(/.{1,4}/g).join(" ").toUpperCase()}let ah=new Map;async function ai(a,b){if(Y(),!a||!b)throw Error("Sign in before enabling encrypted support.");let c=`${a}:${b}`,d=ah.get(c);if(d)return d;let e=(async()=>{let c=`eleeveon-support-device:${a}:${b}`,d=localStorage.getItem(c);if(d){let c=await ae(d);if(c?.accountId===a&&c.userId===b)return c;throw Error("Your local encryption keys are missing. Chat history on this device cannot be recovered. Use a previously enrolled device or explicitly reset your device enrollment.")}let e=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!1,["deriveBits"]),f=await crypto.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},!1,["sign","verify"]),g={id:d=crypto.randomUUID(),accountId:a,userId:b,encryptionKey:e,signingKey:f};return await af(g),localStorage.setItem(c,d),g})();ah.set(c,e);try{return await e}finally{ah.delete(c)}}async function aj(a,b){let c=await ai(a,b),[d,e]=await Promise.all([crypto.subtle.exportKey("jwk",c.encryptionKey.publicKey),crypto.subtle.exportKey("jwk",c.signingKey.publicKey)]);return{id:c.id,encryptionPublicJwk:d,signingPublicJwk:e,fingerprint:await ag(d,e)}}async function ak(a,b,c,d){let e=await crypto.subtle.deriveBits({name:"ECDH",public:b},a,256),f=await crypto.subtle.importKey("raw",e,"HKDF",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"HKDF",hash:"SHA-256",salt:ac(c),info:aa(`eleeveon-support-v1|${d}`)},f,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function al(a,b,c,d,e,f){let g=await ai(a,b),h=[...new Map(f.map(a=>[a.id,a])).values()];if(!h.some(a=>a.id===g.id))throw Error("Your device is missing from the recipient key directory. Reload encryption keys.");if(!h.some(a=>a.userId!==b))throw Error("No other participant has enrolled an encryption key yet. Ask Eleeveon support to enable encrypted chat.");let i=ab(32),j=await crypto.subtle.importKey("raw",ac(i),"AES-GCM",!1,["encrypt"]),k=ab(12),l=await crypto.subtle.encrypt({name:"AES-GCM",iv:ac(k),additionalData:aa(`${c}|${d}`),tagLength:128},j,aa(JSON.stringify(e))),m=[];for(let a of h){let b=await crypto.subtle.importKey("jwk",a.encryptionPublicJwk,{name:"ECDH",namedCurve:"P-256"},!1,[]),e=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveBits"]),f=ab(32),g=ab(12),h=await ak(e.privateKey,b,f,`${c}|${d}|${a.id}`),j=await crypto.subtle.encrypt({name:"AES-GCM",iv:ac(g),tagLength:128},h,ac(i));m.push({deviceId:a.id,publicKey:await crypto.subtle.exportKey("jwk",e.publicKey),salt:$(f),iv:$(g),ciphertext:$(j)})}let n={v:1,conversationId:c,messageId:d,fromDeviceId:g.id,iv:$(k),ciphertext:$(l),keys:m},o=await crypto.subtle.sign({name:"ECDSA",hash:"SHA-256"},g.signingKey.privateKey,aa(JSON.stringify(n)));return U+$(aa(JSON.stringify({...n,signature:$(o)})))}function am(a){return a.startsWith(U)}function an(a){let b;if(!am(a))throw Error("This message is not end-to-end encrypted.");try{b=JSON.parse(W.decode(_(a.slice(U.length))))}catch{throw Error("Invalid encrypted message format.")}if(1!==b.v||!Array.isArray(b.keys)||!b.signature||!b.fromDeviceId)throw Error("Unsupported or damaged encrypted message.");return b}async function ao(a,b,c){Y();let d=ab(32),e=ab(12),f=await crypto.subtle.importKey("raw",ac(d),"AES-GCM",!1,["encrypt"]),g=await crypto.subtle.encrypt({name:"AES-GCM",iv:ac(e),additionalData:aa(`${a}|${b}|attachment`)},f,await c.arrayBuffer()),h=c.type||"application/octet-stream",i=h.startsWith("image/")?"image":h.startsWith("video/")?"video":h.startsWith("audio/")?"audio":"document";return{file:new File([g],"encrypted.bin",{type:"application/octet-stream"}),manifest:{name:c.name,mimeType:h,kind:i,sizeBytes:c.size,key:$(d),iv:$(e)}}}async function ap(a,b,c,d){let e,f;try{e=await fetch(c,{cache:"no-store"})}catch{throw Error("Encrypted file download failed (network, expired URL or blocked cross-origin request). Retry the file link.")}if(!e.ok)throw Error(`Encrypted file download failed (HTTP ${e.status}). The file URL may be expired or missing.`);let g=await e.arrayBuffer();if(g.byteLength>0x6500000)throw Error("This encrypted file exceeds the 100 MB demonstration limit. Download a smaller video.");let h=await crypto.subtle.importKey("raw",ac(_(d.key)),"AES-GCM",!1,["decrypt"]);try{f=await crypto.subtle.decrypt({name:"AES-GCM",iv:ac(_(d.iv)),additionalData:aa(`${a}|${b}|attachment`)},h,g)}catch{throw Error("Encrypted file authentication failed. The downloaded bytes do not match the message's attachment key. Check the backend file reference.")}return URL.createObjectURL(new Blob([f],{type:"document"===d.kind?"application/octet-stream":d.mimeType}))}function aq(a,b){if("u"<typeof localStorage)return{};try{return JSON.parse(localStorage.getItem(`eleeveon-support-trust:${a}:${b}`)||"{}")}catch{return{}}}function ar(a,b,c){if("u"<typeof localStorage)throw Error("Cannot store trusted fingerprints on this device.");let d=aq(a,b);for(let a of c)d[a.id]=a.fingerprint;localStorage.setItem(`eleeveon-support-trust:${a}:${b}`,JSON.stringify(d))}let as=(a,b,c)=>`eleeveon-hub-history-v1|${a}|${b}|${c}`;async function at(a,b,c,d,e){let f=await crypto.subtle.deriveBits({name:"ECDH",public:b},a,256),g=await crypto.subtle.importKey("raw",f,"HKDF",!1,["deriveKey"]),h=await crypto.subtle.digest("SHA-256",aa(as(c,d,e)));return crypto.subtle.deriveKey({name:"HKDF",hash:"SHA-256",salt:h,info:aa("eleeveon-hub-history-content-key-v1")},g,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function au(a,b,c,d){let e=an(a);if(e.conversationId!==b||e.messageId!==c)throw Error("Encrypted message identity mismatch.");let f=d.find(a=>a.id===e.fromDeviceId);if(!f)throw Error("The message signer is not available in the device directory.");let g=await crypto.subtle.importKey("jwk",f.signingPublicJwk,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),{signature:h,...i}=e;if(!await crypto.subtle.verify({name:"ECDSA",hash:"SHA-256"},g,ac(_(h)),aa(JSON.stringify(i))))throw Error("Original message signature is invalid.");return e}async function av(a,b,c,d,e){let f=await ai(a,b),g=e.keys.find(a=>a.deviceId===f.id);if(!g)throw Error("This trusted device cannot decrypt the historical message key.");let h=await crypto.subtle.importKey("jwk",g.publicKey,{name:"ECDH",namedCurve:"P-256"},!1,[]),i=await ak(f.encryptionKey.privateKey,h,_(g.salt),`${c}|${d}|${f.id}`);return crypto.subtle.decrypt({name:"AES-GCM",iv:ac(_(g.iv)),tagLength:128},i,ac(_(g.ciphertext)))}async function aw(a,b,c){let d=await ai(a,b);return $(await crypto.subtle.sign({name:"ECDSA",hash:"SHA-256"},d.signingKey.privateKey,aa(c)))}async function ax(a,b,c,d,e,f,g,h){let i=await ai(a,b);if(i.id===h.id||h.userId!==b||h.accountId!==a)throw Error("The target is not another device for this signed-in user.");let j=an(f).fromDeviceId,k=g.find(a=>a.id===j);if(!k||aq(a,b)[j]!==k.fingerprint)throw Error("The original sender fingerprint has not been verified.");let l=await au(f,d,e,g),m=await av(a,b,d,e,l),n=await crypto.subtle.importKey("jwk",h.encryptionPublicJwk,{name:"ECDH",namedCurve:"P-256"},!1,[]),o=await crypto.subtle.generateKey({name:"ECDH",namedCurve:"P-256"},!0,["deriveBits"]),p=await at(o.privateKey,n,d,e,h.id),q=ab(12),r=await crypto.subtle.encrypt({name:"AES-GCM",iv:ac(q),additionalData:aa(as(d,e,h.id)),tagLength:128},p,m),s={v:1,algorithm:"ECDH-P256-AES-GCM",ephemeralPublicJwk:await crypto.subtle.exportKey("jwk",o.publicKey),iv:$(q),ciphertext:$(r)},t=JSON.stringify({v:1,linkId:c,sourceDeviceId:i.id,targetDeviceId:h.id,conversationId:d,messageId:e,wrappedKey:s});return{conversationId:d,messageId:e,wrappedKey:s,signature:await aw(a,b,t)}}var ay=c(89137);class az extends ay.Ay{constructor(){super("Eleeveon_Hub_Encrypted_Cache_v1"),this.version(1).stores({inboxes:"&scope",threads:"&key, scope, conversationId, savedAt"})}}function aA(){return d??=new az}function aB(a){return a.metadata?.e2ee===!0}function aC(a){return{...a,metadata:{e2ee:!0,..."string"==typeof a.metadata?.origin?{origin:a.metadata.origin}:{},...a.metadata?.pendingRecipientKeys===!0?{pendingRecipientKeys:!0}:{}},description:a.description?.startsWith("ELEEVEON_E2EE_V1:")?a.description:"",lastMessage:a.lastMessage&&a.lastMessage.body?.startsWith("ELEEVEON_E2EE_V1:")?a.lastMessage:null}}async function aD(a,b){try{let c=aA(),d=b.filter(aB).slice(0,300).map(aC);await c.inboxes.put({scope:a,savedAt:Date.now(),conversations:d});let e=new Set(d.map(a=>a.id)),f=(await c.threads.where("scope").equals(a).toArray()).filter(a=>!e.has(a.conversationId));f.length&&await c.threads.bulkDelete(f.map(a=>a.key))}catch{}}async function aE(a,b){try{return await aA().threads.get(JSON.stringify([a,b]))??null}catch{return null}}async function aF(a,b,c,d){if(aB(b))try{let f=aA(),g=JSON.stringify([a,b.id]),h=await f.threads.get(g),i=[],j=0;for(let a=c.length-1;a>=0&&i.length<350;a--){var e;let b=(e=c[a]).deletedForEveryone||e.body?.startsWith("ELEEVEON_E2EE_V1:")?{...e,attachments:(e.attachments||[]).map(a=>({...a,url:null}))}:null;if(!b)continue;let d=2*b.body.length+512;if(i.length&&j+d>4194304)break;j+=d,i.push(b)}i.reverse();let k=aC(b),l=d??h?.devices??[];if(h&&h.messages.length===i.length&&h.conversation.updatedAt===k.updatedAt&&h.conversation.displayTitle===k.displayTitle&&h.conversation.status===k.status&&JSON.stringify(h.devices)===JSON.stringify(l)&&h.messages.every((a,b)=>a.id===i[b].id&&a.body===i[b].body&&a.deletedForEveryone===i[b].deletedForEveryone&&a.attachments?.length===i[b].attachments?.length))return;let m={key:g,scope:a,conversationId:b.id,savedAt:Date.now(),conversation:k,messages:i,devices:l};await f.threads.put(m);let n=await f.threads.where("scope").equals(a).sortBy("savedAt");n.length>25&&await f.threads.bulkDelete(n.slice(0,n.length-25).map(a=>a.key))}catch{}}async function aG(a,b,c){let d=await aE(a,b);if(!d)return;let e=[...d.messages.filter(a=>a.id!==c.id),c];await aF(a,d.conversation,e,d.devices)}async function aH(a,b){try{let c=aA(),d=await c.inboxes.get(a);d&&await c.inboxes.put({...d,conversations:d.conversations.filter(a=>a.id!==b)}),await c.threads.delete(JSON.stringify([a,b]))}catch{}}function aI(a){return"\x1eELEEVEON_HUB_V1:"+JSON.stringify(a)}let aJ=[["support_request","Support"],["bug","Bug report"],["billing_question","Billing"],["feature_request","Feature request"],["suggestion","Suggestion"],["complaint","Complaint"],["general_feedback","General feedback"]],aK=["submitted","acknowledged","under_review","in_progress","planned","resolved","closed"];function aL(a,b){let c=new Map(a.map(a=>[a.id,a]));for(let a of b)c.set(a.id,a);let d=[...c.values()].sort((a,b)=>new Date(b.lastMessage?.createdAt||b.updatedAt).getTime()-new Date(a.lastMessage?.createdAt||a.updatedAt).getTime());return a.length===d.length&&a.every((a,b)=>a.id===d[b].id&&a.updatedAt===d[b].updatedAt&&a.unreadCount===d[b].unreadCount&&a.displayTitle===d[b].displayTitle)?a:d}function aM(a,b){let c=new Map(a.map(a=>[a.id,a]));for(let a of b){let b=c.get(a.id),d=b?.attachments?.some(a=>!!a.url),e=a.attachments?.some(a=>!!a.url);b&&b.body===a.body&&!a.deletedForEveryone&&d&&!e?c.set(a.id,{...a,attachments:b.attachments}):c.set(a.id,a)}let d=[...c.values()].sort((a,b)=>new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime()||a.id.localeCompare(b.id));return a.length===d.length&&a.every((a,b)=>a.id===d[b].id&&a.body===d[b].body&&a.deletedForEveryone===d[b].deletedForEveryone&&JSON.stringify(a.attachments)===JSON.stringify(d[b].attachments))?a:d}function aN(a){return a.replaceAll("_"," ").replace(/\b\w/g,a=>a.toUpperCase())}function aO(a){if(!a)return"";let b=new Date(a);return isNaN(b.getTime())?"":b.toLocaleDateString("en-GH",{day:"numeric",month:"short",year:"numeric"})}function aP(a){return a>=1048576?`${(a/1048576).toFixed(1)} MB`:`${Math.ceil(a/1024)} KB`}function aQ(a){return a?.metadata?.e2ee===!0}function aR({attachment:a,onRetry:b}){let[c,d]=(0,f.useState)(a.url),[g,h]=(0,f.useState)(!1),[i,j]=(0,f.useState)(a.unavailableReason||""),[k,l]=(0,f.useState)(!1),m=(0,f.useRef)(null),n=(0,f.useRef)(null),o=(0,f.useRef)(!0),p=(0,f.useRef)(!1),q=(0,f.useRef)(""),r=(0,f.useRef)(0),s=`${a.conversationId||""}:${a.messageId||""}:${a.manifest?.iv||""}:${a.manifest?.key||""}`;(0,f.useRef)(s),a.encryptedSourceUrl;let t=async(c=!1)=>{if(p.current)return;p.current=!0;let e=r.current;h(!0),j("");try{if(a.encryptedSourceUrl&&a.manifest&&a.conversationId&&a.messageId){let b=await ap(a.conversationId,a.messageId,a.encryptedSourceUrl,a.manifest);if(!o.current||e!==r.current)return void URL.revokeObjectURL(b);n.current&&n.current!==b&&URL.revokeObjectURL(n.current),n.current=b,d(b)}else{if(!b)throw Error("The encrypted file link is missing. Reopen the conversation and try again.");await b()}}catch(d){if(o.current&&e===r.current&&(j(d instanceof Error?d.message:"The encrypted attachment could not be prepared."),!c&&b&&a.encryptedSourceUrl&&navigator.onLine))try{await b()}catch{}}finally{e===r.current&&(p.current=!1,o.current&&h(!1))}};return c||a.encrypted?c?"image"===a.kind?(0,e.jsx)("a",{href:c,download:a.name,title:a.name,children:(0,e.jsx)("img",{className:"esc-media",src:c,alt:a.name})}):"video"===a.kind?(0,e.jsx)("video",{className:"esc-media",src:c,controls:!0,playsInline:!0,preload:"metadata","aria-label":a.name}):"audio"===a.kind?(0,e.jsxs)("div",{className:"esc-audio",children:[(0,e.jsx)("span",{className:"esc-audio-icon","aria-hidden":"true",children:"♫"}),(0,e.jsxs)("div",{className:"esc-audio-player",children:[(0,e.jsx)("strong",{children:"Voice message"}),(0,e.jsx)("audio",{controls:!0,preload:"metadata",src:c,"aria-label":`Voice message: ${a.name}`})]})]}):(0,e.jsxs)("a",{className:"esc-attachment",href:c,download:a.name,children:["\uD83D\uDCCE ",(0,e.jsxs)("span",{children:[a.name,(0,e.jsx)("small",{children:aP(a.sizeBytes)})]})," ↓"]}):(0,e.jsxs)("div",{className:"esc-attachment",ref:m,role:"group","aria-label":`Encrypted attachment: ${a.name}`,children:[(0,e.jsxs)("span",{children:["\uD83D\uDD12 ",a.name,(0,e.jsxs)("small",{children:[aP(a.sizeBytes)," \xb7 ",g?"opening securely…":"encrypted"]}),!!i&&(0,e.jsx)("small",{role:"alert",children:i})]}),g?(0,e.jsx)("span",{"aria-live":"polite",children:"Preparing…"}):i?(0,e.jsx)("button",{type:"button",onClick:()=>{q.current="",t(!0)},children:"Retry"}):(0,e.jsx)("span",{"aria-live":"polite",children:"Preparing automatically"})]}):(0,e.jsxs)("div",{className:"esc-unavailable",role:"status",children:["\uD83D\uDCCE ",a.name,": attachment link unavailable.",b&&(0,e.jsx)("button",{type:"button",disabled:g,onClick:()=>void t(!0),children:"Retry"}),i&&(0,e.jsx)("small",{role:"alert",children:i})]})}function aS({isDeveloper:a,accountId:b,userId:c,role:d,schoolId:h,branchId:i,membershipId:j,schoolName:k,navigation:l,mobileNavigation:m,onOpenHubSettings:n}){let o=c||"",p=JSON.stringify([b,o,a?"platform_developer":d||"school",h||"",i||""]),q=(0,f.useRef)(p);q.current=p;let[r,s]=(0,f.useState)(!1),[t,u]=(0,f.useState)(""),[v,w]=(0,f.useState)([]),[x,y]=(0,f.useState)(0),[z,A]=(0,f.useState)(0),[B,C]=(0,f.useState)([]),[D,E]=(0,f.useState)(null),[F,G]=(0,f.useState)(!1),[H,I]=(0,f.useState)(!1),J=(0,f.useRef)(!1),[K,L]=(0,f.useState)(""),[M,N]=(0,f.useState)(null),[O,P]=(0,f.useState)([]),[S,U]=(0,f.useState)({}),[V,W]=(0,f.useState)(null),[X,Y]=(0,f.useState)(!1),[Z,$]=(0,f.useState)(!1),_=(0,f.useRef)(null),aa=(0,f.useRef)(!1),ab=(0,f.useCallback)((a,b)=>{(a.length||b)&&U(c=>{let d={...c},e=!1;for(let c of[...a,...b?[b]:[]])d[c.messageId]&&d[c.messageId].signature===c.signature||(d[c.messageId]=c,e=!0);return e?d:c})},[]),[ac,ad]=(0,f.useState)([]),[ae,af]=(0,f.useState)({}),[ag,ah]=(0,f.useState)(!1),[ak,an]=(0,f.useState)(!1),[ap,as]=(0,f.useState)({accounts:[],users:[],memberships:[]}),[at,au]=(0,f.useState)(""),[av,aw]=(0,f.useState)("account"),[ax,ay]=(0,f.useState)(""),[az,aA]=(0,f.useState)(""),[aB,aC]=(0,f.useState)(""),[aT,aU]=(0,f.useState)(""),[aV,aW]=(0,f.useState)(""),[aX,aY]=(0,f.useState)("support_request"),[aZ,a$]=(0,f.useState)(""),[a_,a0]=(0,f.useState)(""),[a1,a2]=(0,f.useState)("all"),[a3,a4]=(0,f.useState)(""),[a5,a6]=(0,f.useState)(""),[a7,a8]=(0,f.useState)(null),[a9,ba]=(0,f.useState)(null),bb=(0,f.useRef)(""),[bc,bd]=(0,f.useState)(""),[be,bf]=(0,f.useState)(()=>Array.from({length:22},()=>5)),bg=(0,f.useRef)(null),bh=(0,f.useRef)(null),bi=(0,f.useRef)(0),[bj,bk]=(0,f.useState)([]),[bl,bm]=(0,f.useState)(!1),[bn,bo]=(0,f.useState)(!1),[bp,bq]=(0,f.useState)(""),br=(0,f.useRef)(0),bs=(0,f.useRef)(""),[bt,bu]=(0,f.useState)(!1),[bv,bw]=(0,f.useState)(!1),[bx,by]=(0,f.useState)(!1),[bz,bA]=(0,f.useState)("Not in chat"),bB=(0,f.useRef)(0),bC=(0,f.useRef)(null),bD=(0,f.useRef)(null),bE=(0,f.useRef)(null),bF=(0,f.useRef)(null),[bG,bH]=(0,f.useState)(null),[bI,bJ]=(0,f.useState)(null),bK=(0,f.useRef)(null),bL=(0,f.useRef)(null),bM=(0,f.useRef)(null),[bN,bO]=(0,f.useState)(!1),[bP,bQ]=(0,f.useState)(!1),[bR,bS]=(0,f.useState)(!0),[bT,bU]=(0,f.useState)(null),bV=(0,f.useRef)(null),bW=(0,f.useRef)(null),bX=(0,f.useRef)(null),bY=(0,f.useRef)(null),bZ=(0,f.useRef)(null),b$=(0,f.useRef)(!1),[b_,b0]=(0,f.useState)(""),[b1,b2]=(0,f.useState)(!1),[,b3]=(0,f.useState)(""),[b4,b5]=(0,f.useState)(!0),[b6,b7]=(0,f.useState)(""),[b8,b9]=(0,f.useState)(""),[ca,cb]=(0,f.useState)(""),[cc,cd]=(0,f.useState)(""),[ce,cf]=(0,f.useState)(!1);async function cg(){let a=cc.trim();if(ca&&a&&!ce){cf(!0);try{let b=await R.k.renameConversation(ca,a);C(a=>a.map(a=>a.id===ca?{...a,displayTitle:b.displayTitle}:a)),aD(p,B.map(a=>a.id===ca?{...a,displayTitle:b.displayTitle}:a)),M?.id===ca&&N(a=>a?{...a,displayTitle:b.displayTitle}:a),cb(""),b9("")}catch(a){b0(a instanceof Error?a.message:"Could not rename conversation.")}finally{cf(!1)}}}async function ch(a){if(!ce&&window.confirm("Remove this conversation from your inbox on all your devices? Other participants will keep their copies.")){cf(!0);try{await R.k.removeConversation(a),C(b=>b.filter(b=>b.id!==a)),aH(p,a),ck.current===a&&(ck.current="",L(""),N(null),P([]),ad([]),ah(!1)),b9(""),window.dispatchEvent(new Event("eleeveon:support-unread-refresh"))}catch(a){b0(a instanceof Error?a.message:"Could not remove conversation.")}finally{cf(!1)}}}async function ci(a,b){if(K&&!b6&&window.confirm("everyone"===b?"Delete this message for everyone? Its encrypted content will be removed from the service.":"Delete this message for you on every signed-in device?")){b7(a);try{await R.k.deleteMessage(K,a,b);let c=await R.k.open(K);N(c.conversation),P(c.messages||[]),aF(p,c.conversation,c.messages||[]),"everyone"===b&&cs.current.clear(),window.dispatchEvent(new Event("eleeveon:support-unread-refresh"))}catch(a){b0(a instanceof Error?a.message:"Could not delete message.")}finally{b7("")}}}let cj=(0,f.useCallback)(async a=>{if("u"<typeof document||!document.hidden)try{await R.k.markRead(a),window.dispatchEvent(new Event("eleeveon:support-unread-refresh"))}catch{}},[]),ck=(0,f.useRef)(""),cl=(0,f.useRef)(!1),cm=(0,f.useRef)(0),cn=(0,f.useRef)(null),co=(0,f.useRef)(null),cp=(0,f.useRef)(null),cq=(0,f.useRef)(null),cr=(0,f.useRef)(new Map),cs=(0,f.useRef)(new Map),ct=async(a,b)=>{if(!navigator.onLine)throw Error("Connect to the internet to fetch this attachment.");let[c,d]=await Promise.allSettled([R.k.open(a),R.k.messagePage(a,void 0,100,t||void 0)]);if("rejected"===c.status&&"rejected"===d.status)throw Error("Could not refresh the attachment record. Try again when connected.");let e=new Map;for(let a of[..."fulfilled"===c.status?c.value.messages:[],..."fulfilled"===d.status?d.value.messages:[]]){let b=e.get(a.id),c=a=>!!a.attachments?.some(a=>!!a.url);(!b?.deletedForEveryone||a.deletedForEveryone)&&(!(b&&b.body===a.body&&c(b))||c(a)||a.deletedForEveryone)&&e.set(a.id,a)}let f=[...e.values()],g=e.get(b);for(let c of(ck.current===a&&f.length&&P(a=>aM(a,f)),cs.current.keys()))c.startsWith(`${a}:${b}:`)&&cs.current.delete(c);if(A(a=>a+1),!g?.attachments?.some(a=>!!a.url))throw Error("The message was saved, but its encrypted file link is not available from the server yet. The backend upload/storage record may need repair.")};(0,f.useRef)(new Set);let[,cu]=(0,f.useState)(0),cv=v.filter(a=>!a.revoked).filter(a=>a.id!==t&&aq(b,o)[a.id]!==a.fingerprint),cw=(0,f.useCallback)(async a=>{let b=(await R.k.keys(a)).devices||[];return w(a=>a.length===b.length&&a.every((a,c)=>a.id===b[c].id&&a.fingerprint===b[c].fingerprint&&!!a.revoked==!!b[c].revoked)?a:b),b},[]);(0,f.useCallback)(async()=>{if(o&&b)try{let a=await ai(b,o),c=await aj(b,o);if(ar(b,o,[{id:c.id,accountId:b,userId:o,encryptionPublicJwk:c.encryptionPublicJwk,signingPublicJwk:c.signingPublicJwk,fingerprint:c.fingerprint}]),u(a.id),s(!0),navigator.onLine)try{await R.k.registerKey({id:a.id,encryptionPublicJwk:c.encryptionPublicJwk,signingPublicJwk:c.signingPublicJwk}),await cw(ck.current||void 0)}catch(a){b0(a instanceof Error?a.message:"Could not update encryption device registration.")}}catch(a){s(!1),b0(a instanceof Error?a.message:"Could not initialize encryption keys.")}},[b,o,cw]);let cx=(0,f.useCallback)(async(a=!1)=>{if(!cl.current&&navigator.onLine){cl.current=!0,a||bo(!0);try{let b=ck.current,[c,d]=await Promise.all([R.k.list(),b?Promise.allSettled([R.k.open(b),R.k.messagePage(b,void 0,100,t||void 0)]).then(([a,b])=>"fulfilled"===a.status?{detail:a.value,page:"fulfilled"===b.status?b.value:null}:{error:a.reason}):Promise.resolve(null)]);if(q.current!==p)return;let e=c.conversations||[];J.current||(E(e.length?e[e.length-1].id:null),G(!!e.length)),C(a=>aL(a,e)),aD(p,e);let f=d&&"detail"in d?d.detail:void 0;if(b&&b===ck.current&&!bs.current&&f){let a;N(a=>a?.id===f.conversation.id&&a.updatedAt===f.conversation.updatedAt&&a.status===f.conversation.status&&a.displayTitle===f.conversation.displayTitle?a:f.conversation);let c=d&&"page"in d?d.page:null;c&&(ab(c.historyKeys||[],c.openingHistoryKey),aa.current||(Y(c.hasMore),W(c.nextCursor)));let e=c?aM(f.messages||[],c.messages||[]):f.messages||[];if(P(a=>aM(a,e)),Date.now()-cm.current>6e4)try{a=await cw(b),cm.current=Date.now()}catch{}aF(p,f.conversation,e,a),document.hidden||cj(b)}a||b0("")}catch(b){a||q.current!==p||b0(b instanceof Error?b.message:"Cannot refresh support. Showing saved conversations if available.")}finally{cl.current=!1,a||bo(!1)}}},[p,cw,cj,t,ab]),cy=(0,f.useMemo)(()=>{let a=new Map(ac.map(a=>[a.id,a])),b=new Map;for(let c of ac){if(!c.isEditEvent||!c.decrypted||!c.editTargetId)continue;let d=a.get(c.editTargetId);if(!d||d.deletedForEveryone||!d.authorUserId||c.authorUserId!==d.authorUserId||new Date(c.createdAt).getTime()<new Date(d.createdAt).getTime())continue;let e=b.get(d.id);(!e||new Date(c.createdAt).getTime()>=new Date(e.editedAt).getTime())&&b.set(d.id,{body:c.displayBody,editedAt:c.createdAt})}return ac.filter(a=>!a.isEditEvent).map(a=>{let c=b.get(a.id);return c?{...a,displayBody:c.body,edited:!0}:a})},[ac]),cz=(0,f.useMemo)(()=>B.filter(a=>{if("open"===a1&&["resolved","closed"].includes(a.status)||"open"!==a1&&"all"!==a1&&a.status!==a1)return!1;let b=a_.toLowerCase().trim();return!b||`${ae[a.id]||""} ${a.subject} ${a.organizationName||""} ${a.type}`.toLowerCase().includes(b)}).sort((a,b)=>new Date(b.lastMessage?.createdAt||b.updatedAt)-new Date(a.lastMessage?.createdAt||a.updatedAt)),[B,a1,a_,ae]);async function cA(){if(!H&&F&&D&&navigator.onLine){I(!0),b0("");try{let a=await R.k.conversationPage(D,50);J.current=!0,C(b=>aL(b,a.conversations)),G(a.hasMore),E(a.nextCursor)}catch(a){b0(a instanceof Error?a.message:"Cannot load earlier conversations.")}finally{I(!1)}}}async function cB(a){if(!a||a===ck.current&&M&&!bp)return;let b=++br.current;ck.current=a,L(a),N(null),P([]),U({}),W(null),Y(!1),aa.current=!1,ad([]),an(!1),ah(!0),bs.current=a,bq(a),b0("");let c=!1;try{let d=await aE(p,a);if(b!==br.current||q.current!==p)return;if(d&&(c=!0,ck.current=a,L(a),N(d.conversation),P(d.messages),w(d.devices),an(!1),ah(!0),a4(cr.current.get(a)||""),bk([]),a8(null),ba(null),bd(""),bu(!1),bw(!1)),!navigator.onLine){if(!c)throw Error("No saved conversation on this device. Reconnect to load it.");return}let[e,f,g]=await Promise.allSettled([R.k.open(a),R.k.keys(a),R.k.messagePage(a,void 0,100,t||void 0)]);if("rejected"===e.status)throw e.reason;if(b!==br.current||q.current!==p)return;let h=e.value,i="fulfilled"===f.status?f.value.devices||[]:d?.devices||[],j="fulfilled"===g.status?g.value:null;cm.current=Date.now(),w(i),ck.current=a,L(a),N(h.conversation),j&&(ab(j.historyKeys||[],j.openingHistoryKey),Y(j.hasMore),W(j.nextCursor));let k=j?.messages||h.messages||[];if(P(k),an(!1),ah(!0),a4(cr.current.get(a)||""),bk([]),a8(null),ba(null),bd(""),bu(!1),bw(!1),aF(p,h.conversation,k,i),cj(a),"rejected"===g.status){let a=g.reason;b0("Showing conversation messages. Older history is temporarily unavailable: "+(a instanceof Error?a.message:"history request failed"))}}catch(a){b===br.current&&b0(c?"Showing saved conversation. "+(a instanceof Error?a.message:"Online refresh failed."):a instanceof Error?a.message:"Could not open this conversation.")}finally{b===br.current&&(bs.current="",bq(""))}}async function cC(){let a=ck.current;if(!a||!X||!V||Z||!navigator.onLine)return;$(!0),b0("");let b=co.current;b&&(_.current={top:b.scrollTop,height:b.scrollHeight});try{let b=await R.k.messagePage(a,V,100,t||void 0);if(a!==ck.current)return;aa.current=!0,ab(b.historyKeys||[],b.openingHistoryKey),P(a=>aM(a,b.messages)),Y(b.hasMore),W(b.nextCursor)}catch(a){b0(a instanceof Error?a.message:"Could not load older messages."),_.current=null}finally{$(!1)}}async function cD(){if(a&&at&&!bl){bm(!0),b0("");try{let a=await R.k.invite({accountId:at,scope:av,..."user"===av?{userId:ax}:{},..."role"===av?{role:az,schoolId:aB||void 0,branchId:aT||void 0}:{}});an(!1),C(b=>[a.conversation,...b.filter(b=>b.id!==a.conversation.id)]),aD(p,[a.conversation,...B.filter(b=>b.id!==a.conversation.id)]),await cB(a.conversation.id),cx(!0),b3("")}catch(a){b0(a instanceof Error?a.message:"Could not create conversation")}finally{bm(!1)}}}async function cE(a){if(!r)throw Error("Encryption keys have not finished initializing.");let c=await cw(a),d=(await R.k.devices()).devices.find(a=>a.id===t);if(!d||"linked"!==d.status)throw b2(!0),Error(d?.status==="pending"?"This browser is awaiting trusted-device approval. Your message has not been sent.":"This browser is not linked. Approve it from an existing trusted device before sending.");let e=c.filter(a=>!a.revoked);if(!e.some(a=>a.id===t))throw Error("Your linked device is missing from this conversation's encryption directory. Refresh the conversation.");if(!e.filter(a=>a.accountId!==b).length)throw b2(!0),Error("The other participant has no linked encryption device yet. They need to open Eleeveon Hub and register their device.");let f=aq(b,o),g=e.filter(a=>a.id===t||f[a.id]===a.fingerprint);if(!g.some(a=>a.accountId!==b))throw b2(!0),Error("No encryption device belonging to the other participant has been verified on this browser. Review and verify a recipient fingerprint before sending.");let h=e.length-g.length;return a6(h?`${h} unverified device${1===h?" is":"s are"} excluded from this encrypted message. Those devices will need secure history-key sharing to read it later.`:""),g}async function cF(){if(!aV.trim()&&!aZ.trim()||bl||!b4||!r)return;bm(!0),b0(""),b2(!1),a6("");let a=aV.trim(),c=aZ.trim(),d=crypto.randomUUID();try{let{conversation:e}=await R.k.create({conversationId:d,encrypted:!0,pending:!0,subject:"Secure support conversation",body:"",type:aX,schoolId:h||void 0,branchId:i||void 0,membershipId:j||void 0,name:k||void 0});C(a=>[e,...a.filter(a=>a.id!==e.id)]),aD(p,[e,...B.filter(a=>a.id!==e.id)]);let f=!c&&!a,g="";if(!f)try{let d=await cE(e.id),g=crypto.randomUUID(),h=await al(b,o,e.id,g,{subject:a||void 0,body:c},d);await R.k.send(e.id,h,void 0,g,!0),f=!0}catch(a){g=a instanceof Error?a.message:"The recipient is not ready for encrypted messages."}if(await cx(!0),await cB(e.id),f)cr.current.delete(e.id),a4(""),b0("");else{let b=c||(a?`Subject: ${a}`:"");cr.current.set(e.id,b),a4(b),b0(`Conversation saved. Initial message not sent: ${g}`)}a&&af(b=>({...b,[e.id]:a})),an(!1),aW(""),a$(""),b3("Saved")}catch(a){b0(a instanceof Error?a.message:"Could not create conversation. Nothing was saved.")}finally{bm(!1)}}function cG(a){let b=Array.from(a),c=b.find(a=>a.size>0x63fff9c);c?b0(`${c.name} is too large. Maximum 100 MB including encryption overhead. Larger demonstrations should be compressed before sending.`):a9?b0("Finish or cancel editing before attaching files."):(bk(a=>[...a,...b].slice(0,6)),b0(""))}async function cH(){if(!K||!a3.trim()&&!bj.length||bl||!b4)return;if(a9&&(!a3.trim()||bj.length))return void b0("Edited messages must contain text only. Send attachments separately.");bm(!0),b0(""),b2(!1),a6("");let a=a3.trim(),c=[...bj],d=0;try{let e=await cE(K);for(let f of c.length?c:[null]){let c,g,h,i=crypto.randomUUID();if(f){let a=await ao(K,i,f);c=a.file,h=a.manifest}let j=0===d?a9?aI({v:1,kind:"edit",body:a,targetId:a9.id}):a7?aI({v:1,kind:"message",body:a,replyTo:a7}):a:"",k=await al(b,o,K,i,{body:j,...h?{attachment:h}:{}},e);if(c&&c.size>0xa00000){let a=await R.k.beginDirectUpload(K,i,c.size),b=await fetch(a.signedUrl,{method:"PUT",headers:{"Content-Type":"application/octet-stream"},body:c});if(!b.ok)throw Error(`Encrypted video upload failed (${b.status}). Retry the file.`);g=a.uploadId,c=void 0}let l=await R.k.send(K,k,c,i,!0,g);ck.current===K&&P(a=>a.some(a=>a.id===l.message.id)?a:[...a,l.message]),aG(p,K,l.message),d+=1}bk([]),a9?(a4(bb.current),bb.current?cr.current.set(K,bb.current):cr.current.delete(K)):(cr.current.delete(K),a4("")),ba(null),a8(null),b3("Saved"),await cx()}catch(a){d>0?(bk(c.slice(d)),a4(""),b0(`${d} attachment(s) sent. Remaining items were not sent. ${a instanceof Error?a.message:"Retry the remainder."}`)):b0(a instanceof Error?a.message:"Encrypted message not sent. Try again.")}finally{bm(!1)}}function cI(){bV.current?.state==="recording"?bV.current.stop():bW.current?.getTracks().forEach(a=>a.stop())}async function cJ(){if(!K||bl||bN||bP||bT)return;b0("");let a=navigator.mediaDevices;if(!a?.getDisplayMedia||"u"<typeof MediaRecorder)return void b0("Screen recording isn't supported in this browser. On a computer, use an up-to-date Chrome or Edge browser, or attach a recording made with your device.");let b=null,c=null,d=null;try{bW.current=b=await a.getDisplayMedia({video:{frameRate:15},audio:!0});let e=b.getVideoTracks()[0];if(!e)throw Error("No screen was selected.");if(bR)try{c=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0}})}catch{b0("Microphone was unavailable. Recording will continue with any screen audio shared by the browser.")}bX.current=c;let f=new MediaStream([e]),g=[...b.getAudioTracks(),...c?.getAudioTracks()||[]];if(1===g.length)f.addTrack(g[0]);else if(g.length>1){bZ.current=d=new AudioContext;let a=d.createMediaStreamDestination();for(let b of g)d.createMediaStreamSource(new MediaStream([b])).connect(a);a.stream.getAudioTracks().forEach(a=>f.addTrack(a))}bY.current=f;let h=["video/webm;codecs=vp8,opus","video/webm","video/mp4"].find(a=>MediaRecorder.isTypeSupported(a));if(!h)throw Error("This browser cannot encode screen recordings. Please use Chrome or Edge on a computer.");let i=[],j=new MediaRecorder(f,{mimeType:h,videoBitsPerSecond:12e5});bV.current=j,b$.current=!1,j.ondataavailable=a=>{a.data.size&&i.push(a.data)},j.onerror=()=>{b0("Screen recording failed. Please try again.")},j.onstop=()=>{if(bW.current?.getTracks().forEach(a=>a.stop()),bX.current?.getTracks().forEach(a=>a.stop()),bY.current?.getTracks().forEach(a=>a.stop()),bZ.current?.close(),bW.current=null,bX.current=null,bY.current=null,bZ.current=null,bV.current=null,bQ(!1),b$.current||!i.length)return;let a=j.mimeType.split(";")[0]||"video/webm",b=new Blob(i,{type:a});if(!b.size)return;if(b.size>0x63fff9c)return void b0(`Recording is ${aP(b.size)}. The current encrypted attachment limit is 100 MB. Please make a shorter recording.`);let c="video/mp4"===a?"mp4":"webm",d=new File([b],`screen-recording-${Date.now()}.${c}`,{type:a,lastModified:Date.now()});bU({file:d,url:URL.createObjectURL(b)})},e.addEventListener("ended",cI,{once:!0}),j.start(1e3),bQ(!0)}catch(a){b?.getTracks().forEach(a=>a.stop()),c?.getTracks().forEach(a=>a.stop()),d?.close(),bW.current=null,bX.current=null,bY.current=null,bZ.current=null,bQ(!1),a?.name!=="NotAllowedError"&&b0(a instanceof Error?a.message:"Unable to start screen recording.")}}function cK(a){bT&&(a&&cG([bT.file]),URL.revokeObjectURL(bT.url),bU(null))}function cL(){cancelAnimationFrame(bi.current),bi.current=0,bg.current=null;let a=bh.current;bh.current=null,a&&a.close().catch(()=>void 0),bf(Array.from({length:22},()=>5))}async function cM(){try{if(!navigator.mediaDevices?.getUserMedia||"u"<typeof MediaRecorder)throw Error("Voice recording isn't supported in this browser.");let a=await navigator.mediaDevices.getUserMedia({audio:!0});cq.current=a,function(a){if("u">typeof AudioContext)try{let b=new AudioContext,c=b.createMediaStreamSource(a),d=b.createAnalyser();d.fftSize=256,d.smoothingTimeConstant=.75,c.connect(d),bh.current=b,bg.current=d;let e=new Uint8Array(d.frequencyBinCount),f=0,g=a=>{if(bg.current){if(a-f>85){d.getByteFrequencyData(e);let b=Array.from({length:22},(a,b)=>{let c=Math.floor(b/22*55),d=0;for(let a=c;a<c+4;a++)d+=e[a]||0;return Math.max(4,Math.min(34,d/4/255*40))});bf(b),f=a}bi.current=requestAnimationFrame(g)}};bi.current=requestAnimationFrame(g)}catch{}}(a);let b=["audio/webm;codecs=opus","audio/mp4","audio/webm","audio/ogg"].find(a=>MediaRecorder.isTypeSupported(a)),c=new MediaRecorder(a,b?{mimeType:b}:void 0),d=[];c.ondataavailable=a=>{a.data.size&&d.push(a.data)},c.onstop=()=>{let b=c.mimeType.split(";")[0]||"audio/webm",e=b.includes("mp4")?"m4a":b.includes("ogg")?"ogg":"webm",f=new File(d,`voice-${Date.now()}.${e}`,{type:b});f.size&&cG([f]),a.getTracks().forEach(a=>a.stop()),cq.current=null,bO(!1),cL()},c.start(),cp.current=c,bO(!0)}catch(a){cq.current?.getTracks().forEach(a=>a.stop()),cL(),b0(a instanceof Error?a.message:"Microphone access denied.")}}async function cN(b){if(K&&a){bm(!0);try{await R.k.status(K,b),await cx()}catch(a){b0(a instanceof Error?a.message:"Status update failed.")}finally{bm(!1)}}}let cO=M?.displayTitle||M&&ae[M.id]||M?.subject||"Eleeveon Support";return(0,e.jsxs)("section",{className:"esc","aria-label":"Eleeveon encrypted support",children:[(0,e.jsx)("style",{children:`
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
    `}),(0,e.jsxs)("div",{ref:bE,className:`esc-layout ${ag?"mobile-chat":""}`,style:bI?{height:`${bI}px`}:void 0,children:[(0,e.jsxs)("aside",{className:"esc-side",children:[(0,e.jsx)("div",{className:`esc-side-title ${l?"has-center-tabs":""}`,children:l??(0,e.jsx)("strong",{children:a?"Schools \xb7 Support":"Eleeveon Support"})}),(0,e.jsxs)("div",{className:"esc-search-row",children:[(0,e.jsx)("input",{className:"esc-search","aria-label":"Search conversations",placeholder:"Search conversations",value:a_,onChange:a=>a0(a.target.value)}),(0,e.jsxs)("div",{className:"esc-actions",children:[(0,e.jsx)("button",{className:"icon",title:"Refresh conversations","aria-label":"Refresh conversations",onClick:()=>void cx(),disabled:bn,children:"↻"}),(0,e.jsx)("button",{className:"primary",onClick:()=>{an(!0),ah(!0)},children:"+ New"})]})]}),(0,e.jsxs)("select",{className:"esc-filter",value:a1,"aria-label":"Filter conversations",onChange:a=>a2(a.target.value),children:[(0,e.jsx)("option",{value:"all",children:"All conversations"}),(0,e.jsx)("option",{value:"open",children:"Open"}),aK.map(a=>(0,e.jsx)("option",{value:a,children:aN(a)},a))]}),!b4&&(0,e.jsx)("small",{role:"status",style:{padding:"3px 12px",color:"var(--muted,#667085)"},children:"Offline \xb7 showing encrypted messages saved on this device"}),(0,e.jsxs)("div",{className:"esc-inbox",children:[cz.map(b=>(0,e.jsxs)("div",{className:`esc-thread-card ${K===b.id?"current":""}`,children:[(0,e.jsxs)("button",{type:"button",className:`esc-thread-btn ${K===b.id?"current":""}`,"aria-busy":bp===b.id,onClick:()=>{b9(""),cB(b.id)},children:[(0,e.jsx)("div",{className:"esc-avatar",children:(b.displayTitle||(a?b.organizationName:ae[b.id]||b.subject)||"S").slice(0,1).toUpperCase()}),(0,e.jsxs)("div",{className:"esc-thread-main",children:[(0,e.jsxs)("strong",{children:[b.displayTitle||(a?b.organizationName||"School":ae[b.id]||b.subject||"Support conversation"),Number(b.unreadCount||0)>0&&(0,e.jsx)("span",{"aria-label":`${b.unreadCount} unread messages`,className:"esc-card-unread",children:b.unreadCount>99?"99+":b.unreadCount})]}),(0,e.jsx)("small",{children:aQ(b)?"Private conversation":"Earlier support conversation"}),(0,e.jsx)("em",{children:bp===b.id?"◌ Opening conversation…":`${aN(b.status)} \xb7 ${aO(b.lastMessage?.createdAt||b.updatedAt)}`})]})]}),(0,e.jsx)("button",{type:"button",className:"esc-card-menu-trigger","aria-label":"More actions for this conversation","aria-expanded":b8===b.id,onClick:()=>b9(a=>a===b.id?"":b.id),children:"⋮"}),b8===b.id&&(0,e.jsxs)("div",{className:"esc-card-menu",role:"group","aria-label":"Conversation actions",children:[(0,e.jsx)("button",{type:"button",onClick:()=>{cd(b.displayTitle||ae[b.id]||b.subject||""),cb(b.id),b9("")},children:"Edit title"}),(0,e.jsx)("button",{type:"button",className:"esc-card-danger",disabled:ce,onClick:()=>void ch(b.id),children:"Delete conversation"})]})]},b.id)),!cz.length&&(0,e.jsx)("div",{className:"esc-empty",children:bn?"Loading conversations…":B.length?"No conversations match these filters.":"No conversations yet."}),F&&(0,e.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"10px"},children:(0,e.jsx)("button",{type:"button",className:"secondary",disabled:H||!b4,onClick:()=>void cA(),children:H?"Loading…":"Load earlier conversations"})})]})]}),(0,e.jsxs)("div",{className:"esc-chat",children:[bp&&K&&(0,e.jsx)("div",{className:"esc-opening",role:"status","aria-live":"polite",children:"Preparing conversation…"}),bp&&K&&!M&&!ak&&(0,e.jsxs)("div",{className:"esc-loading-thread",role:"status",children:[(0,e.jsx)("strong",{children:"Opening conversation…"}),(0,e.jsx)("span",{children:"Loading saved messages and encryption keys"})]}),ak?(0,e.jsxs)(e.Fragment,{children:[b_&&(0,e.jsxs)("div",{className:"esc-banner error",role:"alert",children:[b_,b1&&n&&(0,e.jsx)("button",{type:"button",onClick:()=>n(),children:"Review devices"})]}),(0,e.jsxs)("div",{className:"esc-chat-head",children:[(0,e.jsx)("button",{className:"icon esc-back",onClick:()=>{an(!1),ah(!1)},children:"←"}),m&&(0,e.jsx)("div",{className:"esc-mobile-nav-in-chat",children:m}),(0,e.jsxs)("div",{className:"esc-chat-info",children:[(0,e.jsx)("strong",{children:"New conversation"}),(0,e.jsx)("small",{children:"Private messaging"})]}),(0,e.jsx)("button",{className:"secondary",onClick:()=>n?.(),children:"⚙ Settings"})]}),a?(0,e.jsxs)("div",{className:"esc-form",children:[(0,e.jsx)("strong",{children:"Start a conversation"}),(0,e.jsx)("p",{children:"Choose an account, app user, or school role to begin a private conversation."}),(0,e.jsxs)("label",{children:["Account",(0,e.jsxs)("select",{value:at,onChange:a=>{au(a.target.value),ay(""),aA("")},children:[(0,e.jsx)("option",{value:"",children:"Choose account…"}),ap.accounts.map(a=>(0,e.jsxs)("option",{value:a.id,children:[a.name," \xb7 ",a.email||a.id]},a.id))]})]}),(0,e.jsxs)("label",{children:["Recipients",(0,e.jsxs)("select",{value:av,onChange:a=>aw(a.target.value),children:[(0,e.jsx)("option",{value:"account",children:"All active account users"}),(0,e.jsx)("option",{value:"user",children:"Specific app user"}),(0,e.jsx)("option",{value:"role",children:"Role in a school or branch"})]})]}),"user"===av&&(0,e.jsxs)("label",{children:["App user",(0,e.jsxs)("select",{value:ax,onChange:a=>ay(a.target.value),children:[(0,e.jsx)("option",{value:"",children:"Choose user…"}),ap.users.map(a=>(0,e.jsxs)("option",{value:a.id,children:[a.fullName," \xb7 ",a.email]},a.id))]})]}),"role"===av&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("label",{children:["Role",(0,e.jsxs)("select",{value:az,onChange:a=>aA(a.target.value),children:[(0,e.jsx)("option",{value:"",children:"Choose role…"}),[...new Set(ap.memberships.map(a=>a.role))].map(a=>(0,e.jsx)("option",{value:a,children:aN(a)},a))]})]}),(0,e.jsxs)("label",{children:["School ID (optional)",(0,e.jsxs)("select",{value:aB,onChange:a=>aC(a.target.value),children:[(0,e.jsx)("option",{value:"",children:"All schools"}),[...new Set(ap.memberships.map(a=>a.schoolId).filter(a=>!!a))].map(a=>(0,e.jsx)("option",{value:a,children:a},a))]})]}),(0,e.jsxs)("label",{children:["Branch ID (optional)",(0,e.jsxs)("select",{value:aT,onChange:a=>aU(a.target.value),children:[(0,e.jsx)("option",{value:"",children:"All branches"}),[...new Set(ap.memberships.filter(a=>!aB||a.schoolId===aB).map(a=>a.branchId).filter(a=>!!a))].map(a=>(0,e.jsx)("option",{value:a,children:a},a))]})]})]}),(0,e.jsx)("button",{className:"primary",disabled:!at||bl||"user"===av&&!ax||"role"===av&&!az,onClick:()=>void cD(),children:bl?"Creating…":"Open secure conversation"})]}):(0,e.jsxs)("div",{className:"esc-form",children:[(0,e.jsxs)("label",{children:["Category",(0,e.jsx)("select",{value:aX,onChange:a=>aY(a.target.value),children:aJ.map(([a,b])=>(0,e.jsx)("option",{value:a,children:b},a))})]}),(0,e.jsxs)("label",{children:["Subject",(0,e.jsx)("input",{maxLength:180,value:aV,onChange:a=>aW(a.target.value),placeholder:"What would you like to discuss?"})]}),(0,e.jsxs)("label",{children:["Message",(0,e.jsx)("textarea",{rows:6,value:aZ,onChange:a=>a$(a.target.value),placeholder:"Explain your issue privately…"})]}),(0,e.jsxs)("div",{className:"esc-key-buttons",children:[(0,e.jsx)("button",{className:"secondary",onClick:()=>an(!1),children:"Cancel"}),(0,e.jsx)("button",{className:"primary",disabled:!r||!aV.trim()&&!aZ.trim()||bl||!b4,onClick:()=>void cF(),children:bl?"Creating…":"Start conversation"})]})]})]}):K&&M?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"esc-chat-head",children:[(0,e.jsx)("button",{className:"icon esc-back","aria-label":"Back to conversations",onClick:()=>ah(!1),children:"←"}),m&&(0,e.jsx)("div",{className:"esc-mobile-nav-in-chat",children:m}),(0,e.jsx)("div",{className:"esc-avatar",children:aQ(M)?"\uD83D\uDD12":"\uD83D\uDCAC"}),(0,e.jsxs)("div",{className:"esc-chat-info",children:[(0,e.jsx)("strong",{children:cO}),(0,e.jsxs)("small",{children:[(0,e.jsxs)("span",{style:{color:"Online in chat"===bz?"#169e67":void 0},children:["● ",bz]})," \xb7 ",aN(M.status)]})]}),(0,e.jsx)("button",{className:"icon esc-chat-settings-button",type:"button","aria-label":"Hub settings",onClick:()=>n?.(K),children:"⚙"}),(0,e.jsx)("button",{className:"icon esc-call-action",title:"Start voice or video call","aria-label":"Start voice or video call",onClick:()=>bw(!0),children:"☎"}),(0,e.jsx)("button",{className:"icon esc-more-trigger","aria-label":"More conversation actions","aria-expanded":bx,onClick:()=>by(a=>!a),children:"⋮"}),bx&&(0,e.jsxs)("div",{className:"esc-header-more",role:"group","aria-label":"Conversation actions",children:[(0,e.jsxs)("button",{type:"button",onClick:()=>{n?.(K),by(!1)},children:["\uD83D\uDD10 Device security",cv.length?" • Review keys":""]}),(0,e.jsx)("button",{type:"button",onClick:()=>{bw(!0),by(!1)},children:"☎ Live call"}),a&&(0,e.jsxs)("label",{children:["Conversation status",(0,e.jsx)("select",{value:M.status,disabled:bl,onChange:a=>{cN(a.target.value),by(!1)},children:aK.map(a=>(0,e.jsx)("option",{value:a,children:aN(a)},a))})]})]})]}),(0,e.jsxs)("div",{ref:co,className:"esc-body",onClick:a=>{bc&&!a.target.closest(".esc-bubble-action-wrap")&&bd("")},children:[X&&(0,e.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"3px 0 15px"},children:(0,e.jsx)("button",{type:"button",className:"secondary",disabled:Z,onClick:()=>void cC(),children:Z?"Loading…":"↑ Load earlier messages"})}),!cy.length&&(0,e.jsxs)("div",{className:"esc-empty",role:"status",children:[(0,e.jsx)("strong",{children:"Conversation ready"}),(0,e.jsx)("small",{children:"No messages yet. Start the conversation when participant encryption keys are available."})]}),cy.map((b,c)=>{let d=b.authorUserId?b.authorUserId===o:a?"platform"===b.authorType:"platform"!==b.authorType,f=cy[c-1],h=b.id!==`${K}-opening`,i=h&&b.authorUserId===o&&b.decrypted&&!b.deletedForEveryone&&!!b.displayBody.trim();return(0,e.jsxs)(g().Fragment,{children:[(!f||aO(f.createdAt)!==aO(b.createdAt))&&(0,e.jsx)("div",{className:"esc-date",children:aO(b.createdAt)}),(0,e.jsx)("div",{className:`esc-row ${d?"mine":""}`,"data-hub-message-id":b.id,children:(0,e.jsxs)("div",{className:"esc-bubble",children:[(0,e.jsxs)("div",{className:"esc-message-top",children:[(0,e.jsx)("span",{className:"esc-label",children:d?"You":"platform"===b.authorType?"Eleeveon":M.organizationName||"School"}),h&&(0,e.jsxs)("div",{className:"esc-bubble-action-wrap",children:[(0,e.jsx)("button",{type:"button",className:"esc-bubble-more","aria-label":"More actions for this message","aria-expanded":bc===b.id,onClick:()=>bd(a=>a===b.id?"":b.id),children:"⋮"}),bc===b.id&&(0,e.jsxs)("div",{className:"esc-bubble-menu",role:"group","aria-label":"Message actions",children:[(0,e.jsx)("button",{type:"button",onClick:()=>(function(a){if(!a.decrypted&&am(a.body))return void b0("Verify and decrypt this message before replying to it.");let b=a.authorUserId===o?"You":"platform"===a.authorType?"Eleeveon":M?.organizationName||"School";ba(null),a8({id:a.id,preview:(a.displayBody||"Attachment").slice(0,150),name:b}),bd(""),bF.current?.focus()})(b),children:"↪ Reply"}),i&&(0,e.jsx)("button",{type:"button",onClick:()=>{b.authorUserId===o&&b.decrypted&&!b.deletedForEveryone&&b.displayBody.trim()&&b.id!==`${K}-opening`&&(a8(null),a9||(bb.current=a3),ba({id:b.id,body:b.displayBody}),a4(b.displayBody),bd(""),bF.current?.focus())},children:"✎ Edit message"}),(0,e.jsx)("button",{type:"button",disabled:b6===b.id,onClick:()=>{bd(""),ci(b.id,"me")},children:"Delete for me"}),b.authorUserId===o&&!b.deletedForEveryone&&(0,e.jsx)("button",{type:"button",disabled:b6===b.id,onClick:()=>{bd(""),ci(b.id,"everyone")},children:"Delete for everyone"})]})]})]}),b.replyTo&&(0,e.jsxs)("button",{type:"button",className:"esc-reply-quote",onClick:()=>{var a;let c;return a=b.replyTo.id,c=[...co.current?.querySelectorAll("[data-hub-message-id]")||[]].find(b=>b.dataset.hubMessageId===a),void(c?.scrollIntoView({behavior:"smooth",block:"center"}),!c&&b0("The original message is outside the locally loaded history."))},title:"Go to replied message",children:[(0,e.jsxs)("strong",{children:["↪ ",b.replyTo.name]}),(0,e.jsx)("span",{children:b.replyTo.preview||"Attachment"})]}),b.displayBody?(0,e.jsx)("div",{className:"esc-message-text",children:b.displayBody}):null,b.displayAttachments.map((a,c)=>(0,e.jsx)(aR,{attachment:a,onRetry:()=>ct(K,b.id)},`${b.id}:${c}`)),b.error&&(0,e.jsx)("div",{className:"esc-error-text",children:b.error}),(0,e.jsxs)("small",{className:"esc-message-meta",children:[b.edited?"Edited \xb7 ":"",function(a){if(!a)return"";let b=new Date(a);return isNaN(b.getTime())?"":b.toLocaleTimeString("en-GH",{hour:"2-digit",minute:"2-digit"})}(b.createdAt)," \xb7 ",b.decrypted||!am(b.body)?"Saved":"Unavailable"]})]})})]},b.id)})]}),(0,e.jsxs)("div",{className:"esc-composer-area",children:[b_&&(0,e.jsxs)("div",{className:"esc-banner error",role:"alert",style:{borderRadius:10,margin:"6px 10px"},children:[b_,b1&&n&&(0,e.jsx)("button",{type:"button",onClick:()=>n(K),children:"Review devices"})]}),a5&&(0,e.jsx)("div",{className:"esc-banner warn",role:"status",style:{borderRadius:10,margin:"6px 10px"},children:a5}),M?.metadata?.pendingRecipientKeys===!0&&(0,e.jsxs)("div",{className:"esc-pending-status",role:"status",children:[(0,e.jsx)("span",{children:"Conversation saved. The first encrypted message is still pending."}),(0,e.jsx)("button",{type:"button",onClick:()=>void cw(K),children:"Refresh devices"}),(0,e.jsx)("button",{type:"button",onClick:()=>n?.(K),children:"Check keys"})]}),bj.length>0&&(0,e.jsx)("div",{className:"esc-files",children:bj.map((a,b)=>(0,e.jsxs)("button",{disabled:bl,onClick:()=>bk(a=>a.filter((a,c)=>c!==b)),children:["\uD83D\uDCCE ",a.name," (",aP(a.size),") \xd7"]},`${a.name}:${b}`))}),(a7||a9)&&(0,e.jsxs)("div",{className:"esc-compose-reference",role:"status",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("strong",{children:a9?"✎ Editing your message":`↪ Replying to ${a7?.name}`}),(0,e.jsx)("span",{children:(a9?.body||a7?.preview||"").slice(0,135)})]}),(0,e.jsx)("button",{type:"button","aria-label":"Cancel reply or edit",onClick:function(){a9&&a4(bb.current),ba(null),a8(null)},children:"\xd7"})]}),bN&&(0,e.jsxs)("div",{className:"esc-recording",role:"status",children:[(0,e.jsx)("span",{className:"esc-recording-dot"}),(0,e.jsx)("strong",{children:"Recording voice note"}),(0,e.jsx)("div",{className:"esc-waveform",role:"img","aria-label":"Live microphone audio levels",children:be.map((a,b)=>(0,e.jsx)("i",{style:{height:`${a}px`}},b))}),(0,e.jsx)("button",{type:"button",onClick:()=>cp.current?.stop(),children:"■ Stop"})]}),bP&&(0,e.jsxs)("div",{className:"esc-recording",role:"status",children:[(0,e.jsx)("span",{className:"esc-recording-dot"})," Recording screen and available audio ",(0,e.jsx)("button",{type:"button",onClick:cI,children:"■ Stop and preview"})]}),(0,e.jsx)(T,{conversationId:K,open:bv,onClose:()=>bw(!1)},K),(0,e.jsxs)("div",{className:"esc-composer",children:[(0,e.jsx)("input",{ref:cn,type:"file",hidden:!0,multiple:!0,accept:"image/*,audio/*,video/*,.pdf,.txt,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip",onChange:a=>{a.target.files&&cG(a.target.files),a.target.value=""}}),(0,e.jsx)("input",{ref:bK,type:"file",hidden:!0,accept:"image/*",capture:"environment",onChange:a=>{a.target.files&&cG(a.target.files),a.target.value=""}}),(0,e.jsx)("input",{ref:bL,type:"file",hidden:!0,accept:"image/*",multiple:!0,onChange:a=>{a.target.files&&cG(a.target.files),a.target.value=""}}),(0,e.jsx)("input",{ref:bM,type:"file",hidden:!0,accept:"video/*",onChange:a=>{a.target.files&&cG(a.target.files),a.target.value=""}}),(0,e.jsx)("div",{ref:bC,className:"esc-attach-wrap",children:(0,e.jsx)("button",{className:"icon","aria-expanded":bt,"aria-haspopup":"menu","aria-label":"Attachment options",title:"Add an attachment",disabled:bl||bN||bP,onClick:function(){bt?bu(!1):bC.current?.getBoundingClientRect()},children:"＋"})}),(0,e.jsx)("button",{className:"icon",title:bN?"Stop recording":"Record voice note",disabled:bl||bP,onClick:()=>bN?cp.current?.stop():void cM(),children:bN?"■":"\uD83C\uDF99"}),(0,e.jsx)("textarea",{ref:bF,rows:1,"aria-label":"Message",placeholder:r?a9?"Edit your message…":a7?"Write a reply…":b4?"Type a message…":"Offline":"Preparing chat…",value:a3,disabled:bl||!r,onChange:a=>{a4(a.target.value),ck.current&&cr.current.set(ck.current,a.target.value),bB.current=Date.now()},onKeyDown:a=>{"Enter"!==a.key||a.shiftKey||(a.preventDefault(),cH())}}),(0,e.jsx)("button",{type:"button",className:"primary","aria-label":"Send encrypted message",disabled:bl||!b4||!r||bN||bP||!a3.trim()&&!bj.length,onClick:()=>void cH(),children:bl?"…":"➤"})]})]})]}):K&&!M?(0,e.jsxs)("div",{className:"esc-empty",role:"status",children:[(0,e.jsx)("strong",{children:bp?"Opening conversation…":"Conversation unavailable"}),(0,e.jsx)("p",{children:bp?"Preparing locally saved messages and device keys.":b_||"Reconnect and try opening this conversation again."}),!bp&&(0,e.jsx)("button",{className:"primary",type:"button",onClick:()=>void cB(K),children:"Try again"})]}):(0,e.jsxs)("div",{className:"esc-empty",children:[(0,e.jsx)("strong",{children:"Need a hand?"}),(0,e.jsx)("p",{children:"Open a conversation to get help, share a file or speak with Eleeveon Support."}),(0,e.jsx)("button",{className:"primary",onClick:()=>{an(!0),ah(!0)},children:"New conversation"}),!r&&(0,e.jsx)("small",{children:"Setting up your device encryption…"})]})]})]}),bt&&bG&&"u">typeof document&&(0,Q.createPortal)((0,e.jsxs)("div",{ref:bD,className:"eleeveon-attach-popover",role:"menu","aria-label":"Add to conversation",style:{top:bG.top,left:bG.left,width:bG.width},children:[(0,e.jsx)("strong",{children:"ADD TO CONVERSATION"}),(0,e.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{bK.current?.click(),bu(!1)},children:[(0,e.jsx)("span",{className:"icon-mark",children:"\uD83D\uDCF7"})," Camera"]}),(0,e.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{bL.current?.click(),bu(!1)},children:[(0,e.jsx)("span",{className:"icon-mark",children:"▧"})," Photos"]}),(0,e.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{bM.current?.click(),bu(!1)},children:[(0,e.jsx)("span",{className:"icon-mark",children:"▶"})," Video / demonstration"]}),(0,e.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{cn.current?.click(),bu(!1)},children:[(0,e.jsx)("span",{className:"icon-mark",children:"▤"})," File / document"]}),(0,e.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{bu(!1),cM()},children:[(0,e.jsx)("span",{className:"icon-mark",children:"♫"})," Record voice note"]}),(0,e.jsxs)("label",{className:"esc-screen-audio-option",children:[(0,e.jsx)("input",{type:"checkbox",checked:bR,onChange:a=>bS(a.target.checked)})," Include microphone commentary"]}),(0,e.jsxs)("button",{type:"button",role:"menuitem",disabled:bP||bN||!!bT,onClick:()=>{bu(!1),cJ()},children:[(0,e.jsx)("span",{className:"icon-mark",children:"▣"})," Record screen + audio"]}),(0,e.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{bu(!1),bw(!0)},children:[(0,e.jsx)("span",{className:"icon-mark",children:"▣"})," Live assistance"]})]}),document.body),bT&&(0,e.jsx)("div",{className:"esc-card-edit-backdrop",role:"presentation",onMouseDown:a=>{a.target===a.currentTarget&&cK(!1)},children:(0,e.jsxs)("div",{className:"esc-card-edit-dialog esc-screen-preview-dialog",role:"dialog","aria-modal":"true","aria-label":"Preview screen recording",children:[(0,e.jsx)("strong",{children:"Preview screen recording"}),(0,e.jsx)("video",{src:bT.url,controls:!0,playsInline:!0,preload:"metadata",style:{width:"100%",maxHeight:"48dvh",background:"#101820",borderRadius:12}}),(0,e.jsxs)("small",{children:[aP(bT.file.size)," \xb7 Review it before attaching. Your recording is not uploaded until you press Send."]}),(0,e.jsxs)("footer",{children:[(0,e.jsx)("button",{type:"button",onClick:()=>cK(!1),children:"Discard"}),(0,e.jsx)("button",{type:"button",className:"primary",onClick:()=>cK(!0),children:"Attach to message"})]})]})}),ca&&(0,e.jsx)("div",{className:"esc-card-edit-backdrop",role:"presentation",onMouseDown:a=>{a.target!==a.currentTarget||ce||cb("")},children:(0,e.jsxs)("div",{className:"esc-card-edit-dialog",role:"dialog","aria-modal":"true","aria-label":"Edit conversation title",children:[(0,e.jsx)("strong",{children:"Edit conversation title"}),(0,e.jsx)("input",{autoFocus:!0,maxLength:100,"aria-label":"Conversation title",value:cc,onChange:a=>cd(a.target.value),onKeyDown:a=>{"Enter"===a.key&&cg(),"Escape"===a.key&&cb("")}}),(0,e.jsx)("small",{children:"This title is saved privately for your account. The encrypted messages stay unchanged."}),(0,e.jsxs)("footer",{children:[(0,e.jsx)("button",{type:"button",disabled:ce,onClick:()=>cb(""),children:"Cancel"}),(0,e.jsx)("button",{type:"button",className:"primary",disabled:ce||!cc.trim(),onClick:()=>void cg(),children:ce?"Saving…":"Save title"})]})]})}),b_&&(0,e.jsxs)("div",{className:"esc-banner error",role:"alert",children:[b_,b1&&n&&(0,e.jsx)("button",{type:"button",onClick:()=>n(K||void 0),children:"Review devices"}),(0,e.jsx)("button",{type:"button",onClick:()=>{b0(""),b2(!1)},children:"Dismiss"})]})]})}var aT=c(87533);async function aU(a,b,c,d,e,f=()=>!1){let g,h=await ai(a,b);if(h.id===d.id)throw Error("A device cannot transfer history to itself.");let i={conversations:0,processed:0,transferred:0,skipped:0,done:!1},j=a=>{e({...i={...i,...a}})},k=new Set;for(;;){if(f())throw Error("History transfer cancelled; already transferred keys remain usable.");let e=await R.k.conversationPage(g,50);for(let g of e.conversations){let e;if(k.has(g.id))continue;if(k.add(g.id),f())throw Error("History transfer cancelled.");let l=await R.k.keys(g.id).then(a=>a.devices),m=l.find(a=>a.id===d.id);if(!m||m.fingerprint!==d.fingerprint)throw Error("The newly linked device key changed. Restart verification.");let n=[],o=async()=>{if(!n.length)return;let a=n.splice(0,n.length),b=await R.k.linkHistory(c,h.id,a);j({transferred:i.transferred+b.accepted+b.duplicates})},p=async(d,e)=>{if(am(e)){j({processed:i.processed+1});try{let f=await ax(a,b,c,g.id,d,e,l,m);n.push(f),n.length>=70&&await o()}catch{j({skipped:i.skipped+1})}}};g.description&&await p(`${g.id}-opening`,g.description);let q=new Set;for(;;){if(f())throw Error("History transfer cancelled.");let a=await R.k.messagePage(g.id,e,100);for(let b of a.messages)!q.has(b.id)&&(q.add(b.id),b.deletedForEveryone||await p(b.id,b.body));if(!a.hasMore||!a.nextCursor)break;if(a.nextCursor===e)throw Error("History pagination did not advance.");e=a.nextCursor}await o(),j({conversations:i.conversations+1})}if(!e.hasMore||!e.nextCursor)break;if(e.nextCursor===g)throw Error("Conversation pagination did not advance.");g=e.nextCursor}return j({done:!0}),i}let aV="ELEEVEON_HUB_PAIR_V1";function aW(a){let[b,c]=(0,f.useState)("backgrounds"),[d,g]=(0,f.useState)([]),[h,i]=(0,f.useState)(null),[j,k]=(0,f.useState)(null),[l,m]=(0,f.useState)([]),[n,o]=(0,f.useState)(null),[p,q]=(0,f.useState)(null),[r,s]=(0,f.useState)(null),[t,u]=(0,f.useState)(null),[v,w]=(0,f.useState)(""),[x,y]=(0,f.useState)(""),[z,A]=(0,f.useState)(""),[B,C]=(0,f.useState)(""),[D,E]=(0,f.useState)(""),[F,G]=(0,f.useState)(null),[H,I]=(0,f.useState)(!1),[J,K]=(0,f.useState)(""),L=(0,f.useRef)(!1),M=(0,f.useRef)(null),[N,O]=(0,f.useState)(!1),[P,S]=(0,f.useState)(!1),T=d.find(a=>a.id===n?.id),U=T?.status,V=b=>{if(b===a.userId&&a.currentUserName?.trim())return a.currentUserName.trim();let c=h?.users.find(a=>a.id===b);if(c?.fullName?.trim())return c.fullName.trim();let d=l.find(a=>a.userId===b),e=d?.userName?.trim()||d?.displayName?.trim();return e?e:j?.submittedByUserId===b&&j.organizationName?.trim()?j.organizationName.trim():b===a.userId?"You":`Participant ${b?`${b.slice(0,8)}…`:"Unknown"}`},W=b=>b===a.accountId&&a.currentAccountName?.trim()?a.currentAccountName.trim():h?.accounts.find(a=>a.id===b)?.name||l.find(a=>a.accountId===b)?.accountName||"",X=l.filter(b=>b.userId!==a.userId),Y=new Map;for(let a of X){let b=Y.get(a.userId)||[];b.some(b=>b.id===a.id)||b.push(a),Y.set(a.userId,b)}let Z=()=>{M.current?.getTracks().forEach(a=>a.stop()),M.current=null,O(!1)},$=async()=>{if(!a.accountId||!a.userId)return;let b=await aj(a.accountId,a.userId);ar(a.accountId,a.userId,[{...b,accountId:a.accountId,userId:a.userId}]),await R.k.registerKey({id:b.id,encryptionPublicJwk:b.encryptionPublicJwk,signingPublicJwk:b.signingPublicJwk});let[c,d]=await Promise.all([R.k.devices(),R.k.keys(a.conversationId||void 0)]);o({...b,accountId:a.accountId,userId:a.userId}),g(c.devices),m(d.devices)},_=async a=>{I(!0),K("");try{await a()}catch(a){K(a instanceof Error?a.message:"Unable to complete this action.")}finally{I(!1)}},aa=async b=>{let c=b.target.files?.[0];b.target.value="",c&&await _(async()=>{await a.addUpload(c),E("Background uploaded and synchronized.")})},ab=async b=>_(async()=>{await a.select(b),E("Background saved across your Hub.")}),ac=async()=>_(async()=>{n||await $();let b=await aj(a.accountId,a.userId);q(await R.k.linkStart(b.id)),E("Open Hub Settings on an existing trusted device. Scan this QR or enter the 10-digit code there.")}),ad=async a=>_(async()=>{let b=(a||v).replace(/\s/g,"");if(!/^\d{10}$/.test(b))throw Error("Enter the ten-digit code shown on the new device.");let c=await R.k.linkLookup(b);w(b),s(c),u(null),y(""),E("Compare the full fingerprint displayed on the new device before approving.")}),ae=async()=>_(async()=>{if(!n||!r)throw Error("Open a valid pairing request first.");if(t?.id!==r.id){if(x.replace(/\s/g,"").toUpperCase()!==r.targetFingerprint.replace(/\s/g,"").toUpperCase())throw Error("Fingerprint mismatch. Compare it directly with the NEW device before approval.");let b=`${aV}|${r.id}|${r.targetDeviceId}|${r.challenge}|${v}`,c=await aw(a.accountId,a.userId,b);await R.k.linkApprove(r.id,{code:v,sourceDeviceId:n.id,signature:c}),u(r);try{sessionStorage.setItem(`eleeveon:hub:approved-link:${a.accountId}:${a.userId}`,JSON.stringify(r))}catch{}}await $();let b=(await R.k.keys()).devices.find(a=>a.id===r.targetDeviceId);if(!b||b.fingerprint!==r.targetFingerprint)throw Error("Target encryption key changed. History transfer was stopped.");E("Device approved. Transferring available historical encryption keys…"),L.current=!1;let c=await aU(a.accountId,a.userId,r.id,b,G,()=>L.current),d=`${aV}|complete|${r.id}|${b.id}|${r.challenge}`,e=await aw(a.accountId,a.userId,d);await R.k.linkComplete(r.id,n.id,e),E(`Linked. ${c.transferred} historical keys delivered; ${c.skipped} unavailable to this source device. You can open the new device.`),u(r)}),af=async b=>_(async()=>{if(B.replace(/\s/g,"").toUpperCase()!==b.fingerprint.replace(/\s/g,"").toUpperCase())throw Error("Fingerprint does not match. Confirm it directly with your trusted device.");ar(a.accountId,a.userId,[b]),C(""),A(""),E("Device identity verified on this browser."),window.dispatchEvent(new Event("eleeveon:hub:keys-reviewed"))}),ag=async b=>_(async()=>{if(!n||n.id===b)throw Error("Current device cannot revoke itself here.");if(!window.confirm("Revoke this device? It will stop receiving NEW encrypted messages. Previously decrypted content cannot be erased remotely."))return;let c=await aw(a.accountId,a.userId,`${aV}|revoke|${b}|${n.id}`);await R.k.revokeDevice(b,n.id,c),await $(),E("Device revoked.")}),ah=a=>{let b=/^eleeveon-hub-link:v1:[0-9a-f-]{36}:(\d{10})$/i.exec(a.trim());return b?.[1]||(/^\d{10}$/.test(a.trim())?a.trim():null)},ai=async()=>_(async()=>{let a=window.BarcodeDetector;if(!a)throw Error("QR scanning is not supported by this browser. Enter the 10-digit code instead.");let b=new a({formats:["qr_code"]}),c=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});M.current=c,O(!0);let d=document.createElement("video");d.srcObject=c,d.playsInline=!0,await d.play();let e=Date.now();(async()=>{for(;M.current===c&&Date.now()-e<45e3;){let a=(await b.detect(d).catch(()=>[])).map(a=>ah(String(a.rawValue||""))).find(Boolean);if(a){w(a),Z(),ad(a);break}await new Promise(a=>setTimeout(a,200))}Z()})()}),ak=(0,e.jsx)("div",{className:"hub-settings-backdrop",onMouseDown:b=>{b.target===b.currentTarget&&a.onClose()},children:(0,e.jsxs)("section",{role:"dialog","aria-modal":"true","aria-label":"Hub Settings",className:"hub-settings-dialog",children:[(0,e.jsx)("style",{children:`
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
   `}),(0,e.jsxs)("header",{className:"hub-settings-head",children:[(0,e.jsx)("strong",{children:"Hub settings"}),(0,e.jsx)("button",{className:"hub-settings-close",type:"button",onClick:a.onClose,"aria-label":"Close Hub settings",children:"\xd7"})]}),(0,e.jsxs)("nav",{className:"hub-settings-tabs","aria-label":"Settings categories",children:[(0,e.jsx)("button",{type:"button",className:"backgrounds"===b?"active":"",onClick:()=>c("backgrounds"),children:"Backgrounds"}),(0,e.jsx)("button",{type:"button",className:"devices"===b?"active":"",onClick:()=>c("devices"),children:"Linked devices & keys"})]}),(0,e.jsxs)("div",{className:"hub-settings-body",children:["backgrounds"===b?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{children:"Choose one background for Chat, Updates, Surveys, Access, and the entire Hub. Public images are discovered automatically at deployment; your private uploads are synchronized across your signed-in devices."}),(0,e.jsxs)("div",{className:"hub-settings-actions",children:[(0,e.jsx)("label",{htmlFor:"hub-upload-background",children:"＋ Upload background"}),(0,e.jsx)("input",{id:"hub-upload-background",type:"file",accept:"image/jpeg,image/png,image/webp,image/gif,image/avif",onChange:aa,style:{display:"none"}}),(0,e.jsx)("button",{type:"button",onClick:()=>void _(a.reload),disabled:H,children:"↻ Refresh gallery"})]}),(0,e.jsx)("div",{className:"hub-settings-gallery",children:a.images.map(b=>(0,e.jsxs)("div",{className:`hub-background-choice ${b.id===a.selectedId?"selected":""}`,children:[(0,e.jsxs)("button",{type:"button","aria-pressed":b.id===a.selectedId,onClick:()=>void ab(b.id),children:[b.url?(0,e.jsx)("img",{src:b.url,className:"preview",loading:"lazy",alt:b.name}):(0,e.jsx)("div",{className:"preview"}),(0,e.jsxs)("span",{children:[b.id===a.selectedId?"✓ ":"",b.name]})]}),"uploaded"===b.source&&(0,e.jsx)("button",{type:"button",className:"remove","aria-label":`Delete ${b.name}`,onClick:()=>void _(()=>a.removeUpload(b.id)),children:"\xd7"})]},b.id))})]}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{children:"Link a second browser or phone using a temporary QR or numeric code. An existing trusted device must approve it and transfer historical encryption keys before the new device can read older messages."}),(0,e.jsx)("div",{className:"hub-settings-actions",children:(0,e.jsx)("button",{type:"button",disabled:H,onClick:()=>void _($),children:"↻ Refresh devices"})}),n&&(0,e.jsxs)("div",{className:"hub-device-card",children:[(0,e.jsxs)("strong",{children:[T?.deviceName||"This device"," \xb7 ",U||"Checking"]}),(0,e.jsxs)("small",{className:"hub-device-owner",children:[V(a.userId),W(a.accountId)?` \xb7 ${W(a.accountId)}`:""]}),(0,e.jsxs)("small",{children:["This device \xb7 ",n.id]}),(0,e.jsx)("code",{className:"hub-device-fingerprint",children:n.fingerprint})]}),"pending"===U&&(0,e.jsxs)("div",{className:"hub-device-card",children:[(0,e.jsx)("strong",{children:"Get a linking code (new device)"}),(0,e.jsx)("p",{children:"Leave this screen open, then use your original trusted device to approve."}),p?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"hub-qr",children:(0,e.jsx)(aT.h,{value:p.qrPayload,size:168})}),(0,e.jsx)("div",{className:"hub-big-code",children:p.code}),(0,e.jsxs)("small",{children:["Expires ",new Date(p.expiresAt).toLocaleTimeString()]}),(0,e.jsx)("code",{children:p.targetFingerprint}),(0,e.jsx)("button",{type:"button",onClick:()=>void _(async()=>{await R.k.linkCancel(p.id),q(null)}),children:"Cancel pairing"})]}):(0,e.jsx)("button",{type:"button",disabled:H,onClick:()=>void ac(),children:"Generate QR and numeric code"})]}),"linked"===U&&(0,e.jsxs)("div",{className:"hub-device-card",children:[(0,e.jsx)("strong",{children:"Link another device (original trusted device)"}),(0,e.jsx)("p",{children:"Enter the code shown on your new device. You must verify its full fingerprint before approval."}),(0,e.jsx)("input",{value:v,onChange:a=>w(a.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-digit code",inputMode:"numeric",maxLength:10,"aria-label":"Link code"}),(0,e.jsx)("button",{type:"button",disabled:H||10!==v.length,onClick:()=>void ad(),children:"Find device"}),(0,e.jsx)("button",{type:"button",disabled:H||N,onClick:()=>void ai(),children:N?"Scanning…":"Scan QR"}),N&&(0,e.jsx)("button",{type:"button",onClick:Z,children:"Stop scan"}),r&&(0,e.jsxs)("div",{className:"hub-device-card",children:[(0,e.jsxs)("strong",{children:["Approve ",r.deviceName]}),(0,e.jsxs)("small",{children:["New device: ",r.targetDeviceId]}),(0,e.jsx)("code",{children:r.targetFingerprint}),(0,e.jsx)("p",{children:"Enter the exact fingerprint shown on the new device. This prevents silently trusting a substituted key."}),t?.id!==r.id&&(0,e.jsx)("input",{"aria-label":"New device fingerprint",value:x,onChange:a=>y(a.target.value),placeholder:"Full fingerprint from the new device"}),(0,e.jsx)("button",{type:"button",disabled:H,onClick:()=>void ae(),children:t?.id===r.id?"Retry historical key transfer":"Approve and transfer previous conversations"}),t?.id===r.id&&(0,e.jsx)("button",{type:"button",onClick:()=>{u(null),s(null);try{sessionStorage.removeItem(`eleeveon:hub:approved-link:${a.accountId}:${a.userId}`)}catch{}},children:"Hide completed link"}),F&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("small",{children:[F.conversations," conversations \xb7 ",F.processed," examined \xb7 ",F.transferred," keys delivered \xb7 ",F.skipped," unavailable"]}),H&&!F.done&&(0,e.jsx)("button",{type:"button",onClick:()=>{L.current=!0,E("Stopping history transfer after the current request…")},children:"Stop transfer"})]})]})]}),(0,e.jsx)("div",{className:"hub-settings-warning",children:"Historical access requires an existing device capable of reading those messages. If it has lost its keys, those messages cannot be recovered through the server. Revocation cannot remotely erase messages previously decrypted on another device."}),a.conversationId&&[...Y.entries()].map(([b,c])=>(0,e.jsxs)("section",{className:"hub-person-group","aria-label":`Identity keys for ${V(b)}`,children:[(0,e.jsx)("h3",{children:V(b)}),(0,e.jsxs)("small",{children:[W(c[0].accountId)?`${W(c[0].accountId)} \xb7 `:"",c.length," encryption ",1===c.length?"key":"keys"," \xb7 Account user ID: ",b]}),c.map((d,f)=>{let g=aq(a.accountId,a.userId)[d.id]===d.fingerprint;return(0,e.jsxs)("div",{className:"hub-device-card",children:[(0,e.jsxs)("div",{className:"hub-device-header",children:[(0,e.jsx)("strong",{children:d.deviceName?.trim()||`Encryption device ${f+1}`}),(0,e.jsxs)("span",{className:"hub-device-count",children:[f+1," of ",c.length]})]}),(0,e.jsxs)("small",{children:["Device ID: ",d.id]}),(0,e.jsx)("code",{className:"hub-device-fingerprint",children:d.fingerprint}),(0,e.jsx)("small",{children:g?"✓ Verified on this browser":"Not verified here — compare using a separate trusted channel."}),z===d.id?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("input",{value:B,onChange:a=>C(a.target.value),placeholder:"Enter matching fingerprint from other device","aria-label":`Fingerprint for ${V(b)}`}),(0,e.jsx)("button",{type:"button",disabled:H,onClick:()=>void af(d),children:"Confirm matching fingerprint"}),(0,e.jsx)("button",{type:"button",onClick:()=>{A(""),C("")},children:"Cancel"})]}):(0,e.jsx)("button",{type:"button",onClick:()=>{A(d.id),C("")},children:g?"Reverify key":"Verify participant key"})]},d.id)})]},b)),d.filter(a=>"revoked"!==a.status&&a.id!==n?.id).map(b=>{let c=l.find(a=>a.id===b.id),d=c&&aq(a.accountId,a.userId)[c.id]===c.fingerprint;return(0,e.jsxs)("div",{className:"hub-device-card",children:[(0,e.jsxs)("strong",{children:[b.deviceName||"Additional device"," \xb7 ",b.status]}),(0,e.jsxs)("small",{className:"hub-device-owner",children:[V(a.userId),W(a.accountId)?` \xb7 ${W(a.accountId)}`:""]}),(0,e.jsxs)("small",{children:["Device ID: ",b.id]}),(0,e.jsx)("code",{className:"hub-device-fingerprint",children:b.fingerprint}),c&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("small",{children:d?"✓ Verified here":"Fingerprint not verified on this browser"}),z===b.id?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("input",{value:B,onChange:a=>C(a.target.value),"aria-label":"Full fingerprint to verify",placeholder:"Compare and enter the full fingerprint"}),(0,e.jsx)("button",{type:"button",disabled:H,onClick:()=>void af(c),children:"Confirm fingerprint"}),(0,e.jsx)("button",{type:"button",onClick:()=>{A(""),C("")},children:"Cancel"})]}):(0,e.jsx)("button",{type:"button",onClick:()=>{A(b.id),C("")},children:d?"Reverify key":"Verify key"}),"linked"===b.status&&"linked"===U&&(0,e.jsx)("button",{type:"button",disabled:H,onClick:()=>void ag(b.id),children:"Revoke device"})]})]},b.id)})]}),D&&(0,e.jsx)("div",{className:"hub-settings-status",role:"status",children:D}),(J||a.error)&&(0,e.jsx)("div",{className:"hub-settings-error",role:"alert",children:J||a.error})]})]})});return P?(0,Q.createPortal)(ak,document.body):null}let aX=new Set(["image/png","image/jpeg","image/webp","image/avif","image/gif"]),aY=(a,b)=>`eleeveon:hub:selected-background:${JSON.stringify([a,b])}`;function aZ(){let[a,b]=(0,f.useState)(0);return a}let a$=[{value:"text",label:"Short answer"},{value:"long_text",label:"Long answer"},{value:"single",label:"Choose one"},{value:"multiple",label:"Choose multiple"},{value:"yes_no",label:"Yes / No"},{value:"rating",label:"Rating (1–5)"}],a_=()=>({id:crypto.randomUUID(),label:"",type:"text",required:!0,options:[]});function a0({isDeveloper:a}){let[b,c]=(0,f.useState)([]),[d,g]=(0,f.useState)(null),[h,i]=(0,f.useState)(!1),[j,k]=(0,f.useState)(""),[l,m]=(0,f.useState)(""),[n,o]=(0,f.useState)([{id:"q1",label:"",type:"text",required:!0,options:[]}]),[p,q]=(0,f.useState)(""),[r,s]=(0,f.useState)(""),[t,u]=(0,f.useState)(""),[v,w]=(0,f.useState)(""),[x,y]=(0,f.useState)(""),[z,A]=(0,f.useState)({}),[B,C]=(0,f.useState)(null),[D,E]=(0,f.useState)(!1),[F,G]=(0,f.useState)(""),[H,I]=(0,f.useState)(""),J=(0,f.useCallback)(async()=>{c((await R.k.surveys()).surveys)},[]),K=(a,b)=>o(c=>c.map(c=>c.id===a?{...c,...b}:c));async function L(a){E(!0),G("");try{await R.k.createSurvey({title:j,description:l,questions:n.map(a=>({...a,options:["single","multiple"].includes(a.type)?a.options:void 0})),status:a,targeting:{accounts:p.split(/[,\n]/).map(a=>a.trim()).filter(Boolean),roles:r.split(/[,\n]/).map(a=>a.trim()).filter(Boolean),schoolIds:t.split(/[,\n]/).map(a=>a.trim()).filter(Boolean),branchIds:v.split(/[,\n]/).map(a=>a.trim()).filter(Boolean)},closesAt:x?new Date(x).toISOString():null}),i(!1),k(""),m(""),o([a_()]),I("published"===a?"Survey published":"Draft saved"),await J()}catch(a){G(a instanceof Error?a.message:"Could not save survey")}finally{E(!1)}}async function M(){if(d){E(!0),G("");try{await R.k.submitSurvey(d.id,z),I("Survey submitted"),g(null),A({}),await J()}catch(a){G(a instanceof Error?a.message:"Could not submit survey")}finally{E(!1)}}}async function N(a){E(!0),G("");try{let b=await R.k.surveyResults(a.id);g(a),C({count:b.count,responses:b.responses})}catch(a){G(a instanceof Error?a.message:"Could not load results")}finally{E(!1)}}async function O(a,b){E(!0),G("");try{await R.k.surveyStatus(a.id,b),await J(),I("Survey updated")}catch(a){G(a instanceof Error?a.message:"Could not update survey")}finally{E(!1)}}return(0,e.jsxs)("section",{className:"esv",children:[(0,e.jsx)("style",{children:".esv{color:var(--text,#1e293b);--b:var(--border,#d8e1e5);--surface:var(--surface,#fff);font-size:13px;min-width:0}.esv *{box-sizing:border-box}.esv button,.esv input,.esv textarea,.esv select{font:inherit}.esv button{border:1px solid var(--b);border-radius:10px;padding:10px 12px;background:var(--surface);cursor:pointer;color:inherit}.esv button.primary{background:var(--dashboard-primary,#0d847e);color:white;border-color:transparent}.esv button:disabled{opacity:.5}.esv h3{margin:0;font-size:16px}.esv-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:12px}.esv-grid{display:grid;gap:10px}.esv-card{background:var(--surface);border:1px solid var(--b);padding:14px;border-radius:15px}.esv-card p{font-size:12px;opacity:.75}.esv-actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}.esv-form{display:grid;gap:11px}.esv label{display:grid;gap:6px;font-weight:600}.esv input,.esv textarea,.esv select{padding:11px;border:1px solid var(--b);border-radius:9px;color:inherit;background:var(--surface);max-width:100%}.esv-question{border:1px solid var(--b);border-radius:13px;padding:12px;display:grid;gap:10px}.esv-option{display:flex!important;align-items:center;gap:8px;font-weight:400!important}.esv-option input{width:auto}.esv-msg{padding:12px;border-radius:10px;margin-bottom:10px;background:#e8f2ef;color:#165f52}.esv-error{background:#fff0f1;color:#af2234}.esv-badge{font-size:11px;opacity:.65}.esv-results{overflow-x:auto}.esv-results table{border-collapse:collapse;width:100%}.esv-results td,.esv-results th{border-bottom:1px solid var(--b);padding:8px;text-align:left}@media(max-width:600px){.esv-head{align-items:start}.esv-actions button{flex:1}}"}),F&&(0,e.jsxs)("div",{className:"esv-msg esv-error",role:"alert",children:[F,(0,e.jsx)("button",{onClick:()=>G(""),children:"\xd7"})]}),H&&(0,e.jsxs)("div",{className:"esv-msg",role:"status",children:[H,(0,e.jsx)("button",{onClick:()=>I(""),children:"\xd7"})]}),(0,e.jsxs)("div",{className:"esv-head",children:[(0,e.jsx)("h3",{children:a?"Survey manager":"Surveys"}),a&&!h&&!d&&(0,e.jsx)("button",{className:"primary",onClick:()=>i(!0),children:"+ Create survey"}),(h||d)&&(0,e.jsx)("button",{onClick:()=>{i(!1),g(null),C(null)},children:"← Surveys"})]}),h&&a?(0,e.jsxs)("div",{className:"esv-form esv-card",children:[(0,e.jsxs)("label",{children:["Survey title",(0,e.jsx)("input",{value:j,onChange:a=>k(a.target.value),maxLength:180})]}),(0,e.jsxs)("label",{children:["Description",(0,e.jsx)("textarea",{value:l,onChange:a=>m(a.target.value),rows:2})]}),(0,e.jsx)("div",{className:"esv-grid",children:n.map((a,b)=>(0,e.jsxs)("div",{className:"esv-question",children:[(0,e.jsxs)("div",{className:"esv-head",children:[(0,e.jsxs)("b",{children:["Question ",b+1]}),(0,e.jsx)("button",{disabled:1===n.length,onClick:()=>o(b=>b.filter(b=>b.id!==a.id)),children:"Remove"})]}),(0,e.jsxs)("label",{children:["Question",(0,e.jsx)("input",{value:a.label,onChange:b=>K(a.id,{label:b.target.value})})]}),(0,e.jsxs)("label",{children:["Answer type",(0,e.jsx)("select",{value:a.type,onChange:b=>K(a.id,{type:b.target.value}),children:a$.map(a=>(0,e.jsx)("option",{value:a.value,children:a.label},a.value))})]}),["single","multiple"].includes(a.type)&&(0,e.jsxs)("label",{children:["Options (one per line)",(0,e.jsx)("textarea",{rows:4,value:(a.options||[]).join("\n"),onChange:b=>K(a.id,{options:b.target.value.split("\n")})})]}),(0,e.jsxs)("label",{className:"esv-option",children:[(0,e.jsx)("input",{type:"checkbox",checked:a.required,onChange:b=>K(a.id,{required:b.target.checked})}),"Required"]})]},a.id))}),(0,e.jsx)("button",{onClick:()=>o(a=>[...a,a_()]),children:"+ Add question"}),(0,e.jsxs)("label",{children:["Target account UUIDs (optional, comma or newline separated)",(0,e.jsx)("textarea",{rows:2,value:p,onChange:a=>q(a.target.value),placeholder:"Blank = all accounts"})]}),(0,e.jsxs)("label",{children:["Target roles (optional, comma-separated)",(0,e.jsx)("input",{value:r,onChange:a=>s(a.target.value),placeholder:"e.g. super_admin,branch_admin,teacher"})]}),(0,e.jsxs)("label",{children:["Target school IDs (optional)",(0,e.jsx)("textarea",{rows:2,value:t,onChange:a=>u(a.target.value),placeholder:"Blank = any school"})]}),(0,e.jsxs)("label",{children:["Target branch IDs (optional)",(0,e.jsx)("textarea",{rows:2,value:v,onChange:a=>w(a.target.value),placeholder:"Blank = any branch"})]}),(0,e.jsxs)("label",{children:["Closing date (optional)",(0,e.jsx)("input",{type:"datetime-local",value:x,onChange:a=>y(a.target.value)})]}),(0,e.jsxs)("div",{className:"esv-actions",children:[(0,e.jsx)("button",{disabled:D||!j.trim()||n.some(a=>!a.label.trim()),onClick:()=>void L("draft"),children:"Save draft"}),(0,e.jsx)("button",{className:"primary",disabled:D||!j.trim()||n.some(a=>!a.label.trim()),onClick:()=>void L("published"),children:"Publish survey"})]})]}):null,d&&!a?(0,e.jsxs)("div",{className:"esv-form esv-card",children:[(0,e.jsx)("h3",{children:d.title}),(0,e.jsx)("p",{children:d.description}),(d.questions||[]).map(a=>(0,e.jsxs)("div",{className:"esv-question",children:[(0,e.jsxs)("label",{children:[a.label,a.required?" *":""]}),"text"===a.type||"long_text"===a.type?(0,e.jsx)("textarea",{rows:"long_text"===a.type?4:2,value:String(z[a.id]||""),onChange:b=>A(c=>({...c,[a.id]:b.target.value}))}):"multiple"===a.type?(0,e.jsx)(e.Fragment,{children:(a.options||[]).map(b=>(0,e.jsxs)("label",{className:"esv-option",children:[(0,e.jsx)("input",{type:"checkbox",checked:Array.isArray(z[a.id])&&z[a.id].includes(b),onChange:c=>A(d=>({...d,[a.id]:c.target.checked?[...d[a.id]||[],b]:(d[a.id]||[]).filter(a=>a!==b)}))}),b]},b))}):(0,e.jsx)("div",{className:"esv-grid",children:("single"===a.type?a.options||[]:"yes_no"===a.type?["yes","no"]:["1","2","3","4","5"]).map(b=>(0,e.jsxs)("label",{className:"esv-option",children:[(0,e.jsx)("input",{type:"radio",name:a.id,checked:z[a.id]===b,onChange:()=>A(c=>({...c,[a.id]:b}))}),b]},b))})]},a.id)),(0,e.jsx)("button",{className:"primary",disabled:D,onClick:()=>void M(),children:"Submit survey"})]}):null,d&&a&&B?(0,e.jsxs)("div",{className:"esv-card esv-results",children:[(0,e.jsx)("h3",{children:d.title}),(0,e.jsxs)("p",{children:[B.count," response(s)"]}),(0,e.jsxs)("table",{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"Account"}),d.questions.map(a=>(0,e.jsx)("th",{children:a.label},a.id))]})}),(0,e.jsx)("tbody",{children:B.responses.map((a,b)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:a.accountId}),d.questions.map(b=>(0,e.jsx)("td",{children:Array.isArray(a.answers[b.id])?a.answers[b.id].join(", "):String(a.answers[b.id]??"—")},b.id))]},b))})]})]}):null,d||h?null:(0,e.jsxs)("div",{className:"esv-grid",children:[b.map(b=>(0,e.jsxs)("div",{className:"esv-card",children:[(0,e.jsxs)("div",{className:"esv-head",children:[(0,e.jsx)("b",{children:b.title}),(0,e.jsx)("span",{className:"esv-badge",children:b.completedAt?"Completed":b.status})]}),(0,e.jsx)("p",{children:b.description}),(0,e.jsx)("div",{className:"esv-actions",children:a?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("button",{onClick:()=>void N(b),children:"View responses"}),(0,e.jsx)("button",{onClick:()=>void O(b,"published"===b.status?"closed":"published"),children:"published"===b.status?"Close":"Publish"})]}):(0,e.jsx)("button",{disabled:!!b.completedAt||D,className:"primary",onClick:()=>{g(b),A({})},children:b.completedAt?"Completed":"Take survey"})})]},b.id)),!b.length&&(0,e.jsx)("div",{className:"esv-card",children:"No surveys available."})]})]})}var a1=c(84884),a2=c(30417);let a3=["low","normal","high","urgent"],a4=["owner","super_admin","admin","branch_admin","teacher","student","accountant","parent"],a5=["update","maintenance","security","billing","general"],a6=["stable","preview","security"];function a7(a){if(!a.trim())return null;let b=new Date(a);return Number.isNaN(b.getTime())?null:b.toISOString()}function a8(a){return null==a?"":String(a).trim()}function a9(){return"u">typeof crypto&&"function"==typeof crypto.randomUUID?crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`}function ba(a){if(!a)return"Recently";let b=new Date(a);return Number.isNaN(b.getTime())?"Recently":b.toLocaleString("en-GH",{dateStyle:"medium",timeStyle:"short"})}function bb(a){return a8(a).replaceAll("_"," ").replace(/\b\w/g,a=>a.toUpperCase())}function bc(a,b){let c=a?.[b];return null==c||""===String(c).trim()?"":String(c)}function bd({navigate:a}){let{accountId:b,account:c,user:d}=(0,q.F)(),{activeMembership:g}=(0,u.A)(),{activeSchoolId:h,activeBranchId:i,activeSchool:j,activeBranch:k}=(0,s.c)(),l=(0,a2.ss)(),m=a8(d?.id),n=function(a,b){let[c,d]=(0,f.useState)([]),[e,g]=(0,f.useState)([]),[h,i]=(0,f.useState)("gradient"),[j,k]=(0,f.useState)(""),l=(0,f.useRef)(0),m=(0,f.useCallback)(async()=>{let c=++l.current;try{let a=await fetch("/api/hub/backgrounds",{cache:"no-store"});if(!a.ok)throw Error("Cannot load the bundled Hub backgrounds.");let b=await a.json(),e=(Array.isArray(b.images)?b.images:[]).filter(a=>"string"==typeof a.id&&"string"==typeof a.name&&"string"==typeof a.url&&a.url.startsWith("/chat-backgroundimages/")).map(a=>({id:a.id,name:a.name,url:a.url,source:"bundled"}));c===l.current&&d(e)}catch(a){c===l.current&&k(a instanceof Error?a.message:"Cannot load public backgrounds.")}if(a&&b)try{let d=await R.k.backgrounds();if(c!==l.current)return;g(d.uploads.filter(a=>!!a.url).map(a=>({id:`personal:${a.id}`,name:a.name,url:a.url,source:"uploaded"})));let e="default"===d.selected.kind?"gradient":"builtin"===d.selected.kind?`public:${d.selected.key}`:`personal:${d.selected.key}`;i(e);try{localStorage.setItem(aY(a,b),e)}catch{}k("")}catch(a){c===l.current&&k(a instanceof Error?a.message:"Unable to synchronize Hub appearance.")}},[a,b]),n=(0,f.useCallback)(async c=>{if(!a||!b)throw Error("Sign in before saving your Hub background.");let d="default",e="";if(c.startsWith("public:"))d="builtin",e=c.slice(7);else if(c.startsWith("personal:"))d="personal",e=c.slice(9);else if("gradient"!==c)throw Error("Unknown Hub background.");await R.k.backgroundSelect(d,e),i(c);try{localStorage.setItem(aY(a,b),c)}catch{}},[a,b]),o=(0,f.useCallback)(async a=>{if(!aX.has(a.type)||!a.size||a.size>6291456)throw Error("Choose a PNG, JPEG, WebP, AVIF or GIF under 6 MB.");let b=await R.k.backgroundUpload(a);await R.k.backgroundSelect("personal",b.background.id),await m()},[m]),p=(0,f.useCallback)(async a=>{a.startsWith("personal:")&&(await R.k.backgroundRemove(a.slice(9)),await m())},[m]),q=(0,f.useMemo)(()=>[{id:"gradient",name:"Soft colour",url:"",source:"bundled"},...c,...e],[c,e]),r=q.find(a=>a.id===h)||q[0],s=r.url?`url(${JSON.stringify(r.url)})`:"linear-gradient(125deg,#c0e7e4,#b5c7de 45%,#e6c9b3)";return{images:q,selectedId:r.id,imageCss:s,select:n,addUpload:o,removeUpload:p,reload:m,error:j,setError:k}}(a8(b),m),[o,p]=(0,f.useState)(!1),[r,t]=(0,f.useState)(""),v=a=>{t(a||""),p(!0)},w=a8(g?.id),x=g?.role??c?.role??d?.role??null,z="developer"===x||"platform_team"===x,[A,B]=(0,f.useState)(z?"inbox":"support"),[C,D]=(0,f.useState)([]),[E,F]=(0,f.useState)([]),[G,H]=(0,f.useState)([]),[I,J]=(0,f.useState)("general"),[K,L]=(0,f.useState)("normal"),[M,N]=(0,f.useState)(""),[O,P]=(0,f.useState)(""),[Q,S]=(0,f.useState)(""),[T,U]=(0,f.useState)(""),[V,W]=(0,f.useState)([]),[X,Y]=(0,f.useState)(""),[Z,$]=(0,f.useState)(""),[_,aa]=(0,f.useState)(!1),[ab,ac]=(0,f.useState)(!0),[ad,ae]=(0,f.useState)(""),[af,ag]=(0,f.useState)(""),[ah,ai]=(0,f.useState)(""),[aj,ak]=(0,f.useState)("stable"),[al,am]=(0,f.useState)(""),[an,ao]=(0,f.useState)(""),[ap,aq]=(0,f.useState)(""),[ar,as]=(0,f.useState)([]),[at,au]=(0,f.useState)([]),[av,aw]=(0,f.useState)([]),[ax,ay]=(0,f.useState)(""),[az,aA]=(0,f.useState)("open"),[aB,aC]=(0,f.useState)(""),[aD,aE]=(0,f.useState)(""),[aF,aG]=(0,f.useState)("suggestion"),[aH,aI]=(0,f.useState)(""),[aJ,aK]=(0,f.useState)(""),[aL,aM]=(0,f.useState)(!1),[aN,aO]=(0,f.useState)(null),aP=async()=>{if(!b&&!z)return;let[a,c,d,e,f,g]=await Promise.all([y.db.platformAnnouncements.toArray(),y.db.platformReleases.toArray(),y.db.platformReleaseNotes.toArray(),z?y.db.platformAnnouncementReceipts.toArray():y.db.platformAnnouncementReceipts.where("accountId").equals(b).toArray(),z?y.db.platformFeedback.toArray():y.db.platformFeedback.where("accountId").equals(b).toArray(),z?y.db.platformFeedbackMessages.toArray():y.db.platformFeedbackMessages.where("accountId").equals(b).toArray()]),h=a.sort((a,b)=>new Date(b.publishAt??b.updatedAt??b.createdAt??0).getTime()-new Date(a.publishAt??a.updatedAt??a.createdAt??0).getTime());D(z?h:h.filter(a=>(function(a,b){if("published"!==a.status)return!1;let c=Date.now();return!(a.publishAt&&new Date(a.publishAt).getTime()>c||a.expiresAt&&new Date(a.expiresAt).getTime()<c||a.targetRoles?.length&&b&&!a.targetRoles.includes(b))})(a,x))),F(c.sort((a,b)=>new Date(b.publishedAt??b.updatedAt??b.createdAt??0).getTime()-new Date(a.publishedAt??a.updatedAt??a.createdAt??0).getTime())),H(d.sort((a,b)=>Number(a.displayOrder??0)-Number(b.displayOrder??0))),as(e);let i=f.sort((a,b)=>Number(b.lastServerMessageAt??b.submittedAt)-Number(a.lastServerMessageAt??a.submittedAt));au(i),aw(g.sort((a,b)=>new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime())),z&&i.length&&ay(a=>a&&i.some(b=>b.id===a)?a:i[0].id)},aQ=(0,f.useMemo)(()=>new Map(ar.map(a=>[a.announcementId,a])),[ar]),aR=C.filter(a=>!aQ.get(a.id)?.readAt).length,aT=(0,f.useMemo)(()=>{let a=new Map;return G.forEach(b=>{let c=a.get(b.releaseId)??[];c.push(b),a.set(b.releaseId,c)}),a},[G]),aU=(0,f.useMemo)(()=>E.filter(a=>z||"published"===a.status),[z,E]),aV=(0,f.useMemo)(()=>at.find(a=>a.id===ax),[at,ax]);(0,f.useMemo)(()=>av.filter(a=>a.feedbackId===ax),[av,ax]),(0,f.useMemo)(()=>{let a=aB.trim().toLowerCase();return at.filter(b=>{if(!("all"===az||("open"===az?!["resolved","closed"].includes(b.status):b.status===az)))return!1;if(!a)return!0;let c=b.metadata;return[b.subject,b.message,b.type,b.status,b.priority,b.accountId,b.schoolId,b.branchId,b.userId,bc(c,"schoolName"),bc(c,"branchName"),bc(c,"role")].filter(Boolean).join(" ").toLowerCase().includes(a)})},[az,aB,at]),(0,f.useMemo)(()=>{let a=at.filter(a=>!["resolved","closed"].includes(a.status)).length,b=at.filter(a=>"submitted"===a.status).length;return{open:a,newCount:b,urgent:at.filter(a=>"urgent"===a.priority||"high"===a.priority).length,resolved:at.filter(a=>"resolved"===a.status).length}},[at]);let a$=async a=>{if(!b)return;let c=aQ.get(a.id),d={accountId:b,announcementId:a.id,userId:m||null,membershipId:w||null,deliveredAt:c?.deliveredAt??new Date().toISOString(),readAt:new Date().toISOString(),acknowledgedAt:c?.acknowledgedAt??null,dismissedAt:c?.dismissedAt??null};if(c)await (0,a1.Po)("platformAnnouncementReceipts",c.id,d);else{let a={id:a9(),...d};await (0,a1.oJ)("platformAnnouncementReceipts",a)}await aP()},a_=async a=>{if(!z||!M.trim()||!O.trim())return void aO("Add an announcement title and message.");try{aM(!0),aO(null);let b=new Date().toISOString(),c="published"===a?b:a7(X),d={id:a9(),key:`portal-${Date.now().toString(36)}`,type:I,priority:K,title:M.trim(),body:O.trim(),actionLabel:Q.trim()||null,actionUrl:T.trim()||null,locale:"en-GH",targetRoles:V.length?V:null,targetCountries:null,targetPlanIds:null,targetDeploymentModes:null,minimumAppVersion:null,maximumAppVersion:null,requiresAcknowledgement:_,dismissible:ab,status:a,publishAt:c,expiresAt:a7(Z),createdAt:b,updatedAt:b};await y.db.platformAnnouncements.put(d),N(""),P(""),S(""),U(""),W([]),Y(""),$(""),aa(!1),ac(!0),aO("published"===a?"Announcement published in the local platform cache.":"scheduled"===a?"Announcement scheduled in the local platform cache.":"Announcement saved as a draft."),await aP()}catch(a){aO(a instanceof Error?a.message:"Could not save the announcement.")}finally{aM(!1)}},bf=async(a,b)=>{if(!z)return;let c=new Date().toISOString();await y.db.platformAnnouncements.put({...a,status:b,publishAt:"published"===b?a.publishAt??c:a.publishAt,updatedAt:c}),await aP()},bg=async a=>{if(!z||!ad.trim()||!af.trim()||!ap.trim())return void aO("Add a version, release title and release notes.");try{aM(!0),aO(null);let b=new Date().toISOString(),c=a9(),d=Number.parseInt(ad.trim().replace(/^v/i,"").split(".")[0]||"0",10),e={id:c,version:ad.trim(),majorVersion:Number.isFinite(d)?d:0,channel:aj,title:af.trim(),summary:ah.trim()||null,status:a,minimumSupportedVersion:al.trim()||null,publishedAt:"published"===a?b:null,metadata:{createdFrom:"eleeveon_center",createdByRole:x,createdByUserId:m||null},createdAt:b,updatedAt:b},f={id:a9(),releaseId:c,locale:"en-GH",title:an.trim()||af.trim(),body:ap.trim(),displayOrder:0,createdAt:b,updatedAt:b};await y.db.transaction("rw",y.db.platformReleases,y.db.platformReleaseNotes,async()=>{await y.db.platformReleases.put(e),await y.db.platformReleaseNotes.put(f)}),ae(""),ag(""),ai(""),am(""),ao(""),aq(""),aO("published"===a?"Release published in the local platform cache.":"Release saved as a draft."),await aP()}catch(a){aO(a instanceof Error?a.message:"Could not save the release.")}finally{aM(!1)}},bh=async(a,b)=>{if(!z)return;let c=new Date().toISOString();await y.db.platformReleases.put({...a,status:b,publishedAt:"published"===b?a.publishedAt??c:a.publishedAt,updatedAt:c}),await aP()};aV?.metadata,aV?.deviceInfo;let bi=aZ(),bj=z?"inbox":"support",bk=(0,e.jsxs)("div",{className:"hub-nav-with-settings",children:[(0,e.jsxs)("nav",{className:"center-inline-tabs","aria-label":"Eleeveon Center sections",children:[(0,e.jsxs)("button",{type:"button",className:A===bj?"active":"","aria-current":A===bj?"page":void 0,onClick:()=>B(bj),children:["Chat",bi>0?` \xb7 ${bi>99?"99+":bi}`:""]}),(0,e.jsx)("button",{type:"button",className:"feedback"===A?"active":"","aria-current":"feedback"===A?"page":void 0,onClick:()=>B("feedback"),children:"Surveys"}),(0,e.jsxs)("button",{type:"button",className:"updates"===A?"active":"","aria-current":"updates"===A?"page":void 0,onClick:()=>B("updates"),children:["Updates",aR>0?` \xb7 ${aR}`:""]}),(0,e.jsx)("button",{type:"button",className:"access"===A?"active":"","aria-current":"access"===A?"page":void 0,onClick:()=>B("access"),children:"Access"}),z&&(0,e.jsxs)("select",{className:"center-inline-more","aria-label":"More platform sections",value:"communications"===A||"releases"===A?A:"",onChange:a=>{a.target.value&&B(a.target.value)},children:[(0,e.jsx)("option",{value:"",children:"More ▾"}),(0,e.jsx)("option",{value:"communications",children:"Communications"}),(0,e.jsx)("option",{value:"releases",children:"Releases"})]})]}),(0,e.jsx)("button",{type:"button",className:"hub-settings-gear",title:"Hub settings","aria-label":"Hub settings",onClick:()=>v(),children:"⚙"})]}),bl=(0,e.jsxs)("select",{className:"center-mobile-chat-switch","aria-label":"Eleeveon Center section",value:A,onChange:a=>B(a.target.value),children:[(0,e.jsxs)("option",{value:bj,children:["Chat",bi>0?` (${bi})`:""]}),(0,e.jsx)("option",{value:"feedback",children:"Surveys"}),(0,e.jsx)("option",{value:"updates",children:"Updates"}),(0,e.jsx)("option",{value:"access",children:"Access"}),z&&(0,e.jsx)("option",{value:"communications",children:"Communications"}),z&&(0,e.jsx)("option",{value:"releases",children:"Releases"})]});return(0,e.jsxs)("main",{className:"center-module hub-module",style:{"--hub-scene":n.imageCss},children:[(0,e.jsx)("style",{children:be}),o&&(0,e.jsx)(aW,{onClose:()=>p(!1),conversationId:r,accountId:a8(b),userId:m,currentUserName:a8(d?.fullName||d?.name||[d?.firstName,d?.lastName].filter(Boolean).join(" ")),currentAccountName:a8(c?.name||c?.displayName),images:n.images,selectedId:n.selectedId,select:n.select,addUpload:n.addUpload,removeUpload:n.removeUpload,reload:n.reload,error:n.error}),(0,e.jsx)("div",{className:"center-shell",children:(0,e.jsxs)("div",{className:"center-work-area",children:[A!==bj&&(0,e.jsx)("header",{className:"center-section-header",children:bk}),"inbox"===A&&z?(0,e.jsx)(aS,{navigation:bk,onOpenHubSettings:v,mobileNavigation:bl,isDeveloper:!0,accountId:a8(b),schoolId:h,branchId:i,userId:m,membershipId:w,role:x,schoolName:j?.name,branchName:k?.name}):null,"communications"===A&&z?(0,e.jsxs)("section",{className:"center-publisher-layout",children:[(0,e.jsxs)("article",{className:"center-card",children:[(0,e.jsx)("span",{className:"kicker",children:"Outbound communication"}),(0,e.jsx)("h3",{children:"Create platform announcement"}),(0,e.jsx)("p",{children:"Publish notices, maintenance messages, security alerts, billing messages or general platform communication to selected portal roles."}),(0,e.jsxs)("div",{className:"center-form-grid",children:[(0,e.jsxs)("label",{children:["Type",(0,e.jsx)("select",{value:I,onChange:a=>J(a.target.value),children:a5.map(a=>(0,e.jsx)("option",{value:a,children:bb(a)},a))})]}),(0,e.jsxs)("label",{children:["Priority",(0,e.jsx)("select",{value:K,onChange:a=>L(a.target.value),children:a3.map(a=>(0,e.jsx)("option",{value:a,children:bb(a)},a))})]})]}),(0,e.jsxs)("label",{children:["Title",(0,e.jsx)("input",{value:M,onChange:a=>N(a.target.value),placeholder:"Short announcement title"})]}),(0,e.jsxs)("label",{children:["Message",(0,e.jsx)("textarea",{rows:6,value:O,onChange:a=>P(a.target.value),placeholder:"Write the message users should receive."})]}),(0,e.jsxs)("div",{className:"center-form-grid",children:[(0,e.jsxs)("label",{children:["Action label",(0,e.jsx)("input",{value:Q,onChange:a=>S(a.target.value),placeholder:"Open reports"})]}),(0,e.jsxs)("label",{children:["Action route / URL",(0,e.jsx)("input",{value:T,onChange:a=>U(a.target.value),placeholder:"#reports or URL"})]})]}),(0,e.jsxs)("div",{className:"center-audience",children:[(0,e.jsx)("span",{children:"Audience"}),(0,e.jsx)("small",{children:"Leave every role unchecked to target all user roles."}),(0,e.jsx)("div",{className:"center-role-options",children:a4.map(a=>(0,e.jsxs)("label",{className:"center-check",children:[(0,e.jsx)("input",{type:"checkbox",checked:V.includes(a),onChange:()=>{W(b=>b.includes(a)?b.filter(b=>b!==a):[...b,a])}}),(0,e.jsx)("span",{children:bb(a)})]},a))})]}),(0,e.jsxs)("div",{className:"center-form-grid",children:[(0,e.jsxs)("label",{children:["Schedule for",(0,e.jsx)("input",{type:"datetime-local",value:X,onChange:a=>Y(a.target.value)})]}),(0,e.jsxs)("label",{children:["Expires",(0,e.jsx)("input",{type:"datetime-local",value:Z,onChange:a=>$(a.target.value)})]})]}),(0,e.jsxs)("div",{className:"center-inline-checks",children:[(0,e.jsxs)("label",{className:"center-check",children:[(0,e.jsx)("input",{type:"checkbox",checked:_,onChange:a=>aa(a.target.checked)}),(0,e.jsx)("span",{children:"Require acknowledgement"})]}),(0,e.jsxs)("label",{className:"center-check",children:[(0,e.jsx)("input",{type:"checkbox",checked:ab,onChange:a=>ac(a.target.checked)}),(0,e.jsx)("span",{children:"Allow dismiss"})]})]}),(0,e.jsxs)("div",{className:"center-publish-actions",children:[(0,e.jsx)("button",{type:"button",disabled:aL,onClick:()=>void a_("draft"),children:"Save draft"}),(0,e.jsx)("button",{type:"button",disabled:aL||!X,onClick:()=>void a_("scheduled"),children:"Schedule"}),(0,e.jsx)("button",{type:"button",className:"primary",disabled:aL,onClick:()=>void a_("published"),children:"Publish now"})]}),aN?(0,e.jsx)("div",{className:"notice",children:aN}):null]}),(0,e.jsxs)("article",{className:"center-card",children:[(0,e.jsx)("span",{className:"kicker",children:"Announcement manager"}),(0,e.jsx)("h3",{children:"Platform communications"}),(0,e.jsx)("div",{className:"center-manager-list",children:C.length?C.map(a=>(0,e.jsxs)("div",{className:"center-manager-item",children:[(0,e.jsxs)("div",{className:"center-manager-heading",children:[(0,e.jsx)("strong",{children:a.title}),(0,e.jsx)("span",{className:"center-badge",children:bb(a.status)})]}),(0,e.jsx)("p",{children:a.body}),(0,e.jsxs)("small",{children:[bb(a.type)," \xb7 ",bb(a.priority)," \xb7 ",a.targetRoles?.length?a.targetRoles.map(bb).join(", "):"All roles"]}),(0,e.jsxs)("div",{className:"center-manager-actions",children:["published"!==a.status?(0,e.jsx)("button",{type:"button",onClick:()=>void bf(a,"published"),children:"Publish"}):null,"published"===a.status?(0,e.jsx)("button",{type:"button",onClick:()=>void bf(a,"withdrawn"),children:"Withdraw"}):null,"withdrawn"===a.status?(0,e.jsx)("button",{type:"button",onClick:()=>void bf(a,"draft"),children:"Restore draft"}):null]})]},a.id)):(0,e.jsx)("p",{children:"No platform communications yet."})})]})]}):null,"releases"===A&&z?(0,e.jsxs)("section",{className:"center-publisher-layout",children:[(0,e.jsxs)("article",{className:"center-card",children:[(0,e.jsx)("span",{className:"kicker",children:"Product release"}),(0,e.jsx)("h3",{children:"Publish an Eleeveon update"}),(0,e.jsx)("p",{children:"Create version information and user-facing release notes for the platform update."}),(0,e.jsxs)("div",{className:"center-form-grid",children:[(0,e.jsxs)("label",{children:["Version",(0,e.jsx)("input",{value:ad,onChange:a=>ae(a.target.value),placeholder:"1.3.0"})]}),(0,e.jsxs)("label",{children:["Channel",(0,e.jsx)("select",{value:aj,onChange:a=>ak(a.target.value),children:a6.map(a=>(0,e.jsx)("option",{value:a,children:bb(a)},a))})]})]}),(0,e.jsxs)("label",{children:["Release title",(0,e.jsx)("input",{value:af,onChange:a=>ag(a.target.value),placeholder:"Reports and assessment improvements"})]}),(0,e.jsxs)("label",{children:["Summary",(0,e.jsx)("textarea",{rows:3,value:ah,onChange:a=>ai(a.target.value),placeholder:"A concise overview of this release."})]}),(0,e.jsxs)("div",{className:"center-form-grid",children:[(0,e.jsxs)("label",{children:["Minimum supported version",(0,e.jsx)("input",{value:al,onChange:a=>am(a.target.value),placeholder:"1.1.0"})]}),(0,e.jsxs)("label",{children:["Release-note title",(0,e.jsx)("input",{value:an,onChange:a=>ao(a.target.value),placeholder:"What changed"})]})]}),(0,e.jsxs)("label",{children:["Release notes",(0,e.jsx)("textarea",{rows:8,value:ap,onChange:a=>aq(a.target.value),placeholder:"• Improved reports\n• Fixed offline behavior\n• Added new settings"})]}),(0,e.jsxs)("div",{className:"center-publish-actions",children:[(0,e.jsx)("button",{type:"button",disabled:aL,onClick:()=>void bg("draft"),children:"Save draft"}),(0,e.jsx)("button",{type:"button",className:"primary",disabled:aL,onClick:()=>void bg("published"),children:"Publish release"})]}),aN?(0,e.jsx)("div",{className:"notice",children:aN}):null]}),(0,e.jsxs)("article",{className:"center-card",children:[(0,e.jsx)("span",{className:"kicker",children:"Release manager"}),(0,e.jsx)("h3",{children:"Versions and release notes"}),(0,e.jsx)("div",{className:"center-manager-list",children:E.length?E.map(a=>{let b=aT.get(a.id)??[];return(0,e.jsxs)("div",{className:"center-manager-item",children:[(0,e.jsxs)("div",{className:"center-manager-heading",children:[(0,e.jsxs)("strong",{children:[a.version," \xb7 ",a.title]}),(0,e.jsx)("span",{className:"center-badge",children:bb(a.status)})]}),a.summary?(0,e.jsx)("p",{children:a.summary}):null,(0,e.jsxs)("small",{children:[bb(a.channel),a.minimumSupportedVersion?` \xb7 Minimum ${a.minimumSupportedVersion}`:"",a.publishedAt?` \xb7 ${ba(a.publishedAt)}`:""]}),b.map(a=>(0,e.jsxs)("div",{className:"center-release-note",children:[(0,e.jsx)("strong",{children:a.title}),(0,e.jsx)("p",{children:a.body})]},a.id)),(0,e.jsxs)("div",{className:"center-manager-actions",children:["published"!==a.status?(0,e.jsx)("button",{type:"button",onClick:()=>void bh(a,"published"),children:"Publish"}):null,"published"===a.status?(0,e.jsx)("button",{type:"button",onClick:()=>void bh(a,"withdrawn"),children:"Withdraw"}):null,"withdrawn"===a.status?(0,e.jsx)("button",{type:"button",onClick:()=>void bh(a,"draft"),children:"Restore draft"}):null]})]},a.id)}):(0,e.jsx)("p",{children:"No releases created yet."})})]})]}):null,"updates"===A?(0,e.jsxs)("section",{className:"center-list",children:[!z&&aU.length?aU.map(a=>{let b=aT.get(a.id)??[];return(0,e.jsxs)("article",{className:"center-card center-release-card",children:[(0,e.jsxs)("header",{children:[(0,e.jsx)("span",{children:"Product update"}),(0,e.jsx)("small",{children:ba(a.publishedAt??a.updatedAt??a.createdAt)})]}),(0,e.jsxs)("h3",{children:[a.version," \xb7 ",a.title]}),a.summary?(0,e.jsx)("p",{children:a.summary}):null,b.length?(0,e.jsx)("div",{className:"center-user-release-notes",children:b.map(a=>(0,e.jsxs)("div",{children:[(0,e.jsx)("strong",{children:a.title}),(0,e.jsx)("p",{children:a.body})]},a.id))}):null]},`release-${a.id}`)}):null,C.length?C.map(b=>{let c=aQ.get(b.id);return(0,e.jsxs)("article",{className:"center-card",children:[(0,e.jsxs)("header",{children:[(0,e.jsx)("span",{children:b.type}),(0,e.jsx)("small",{children:ba(b.publishAt??b.createdAt)})]}),(0,e.jsx)("h3",{children:b.title}),(0,e.jsx)("p",{children:b.body}),(0,e.jsxs)("footer",{children:[z?null:c?.readAt?(0,e.jsx)("span",{className:"read-state",children:"Read"}):(0,e.jsx)("button",{type:"button",onClick:()=>void a$(b),children:"Mark as read"}),b.actionUrl?(0,e.jsx)("button",{type:"button",className:"primary",onClick:()=>{b.actionUrl?.startsWith("#")&&a(b.actionUrl.slice(1))},children:b.actionLabel??"Open"}):null]})]},b.id)}):(0,e.jsx)("div",{className:"center-empty",children:"No current announcements."})]}):null,null,"feedback"===A?(0,e.jsx)(a0,{isDeveloper:z}):null,"support"!==A||z?null:(0,e.jsx)(aS,{navigation:bk,onOpenHubSettings:v,mobileNavigation:bl,isDeveloper:!1,accountId:a8(b),schoolId:h,branchId:i,userId:m,membershipId:w,role:x,schoolName:j?.name,branchName:k?.name}),"access"===A?(0,e.jsxs)("section",{className:"center-grid",children:[(0,e.jsxs)("article",{className:"center-card",children:[(0,e.jsx)("span",{className:"kicker",children:z?"Current platform context":"Current access"}),(0,e.jsx)("h3",{children:z?bb(x):l?.snapshot?.source??"Workspace access"}),(0,e.jsxs)("div",{className:"facts",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"Status"}),(0,e.jsx)("strong",{children:l?.status??(z?"Platform role":"Unknown")})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"Deployment"}),(0,e.jsx)("strong",{children:l?.deploymentMode??"Not resolved"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"Sync policy"}),(0,e.jsx)("strong",{children:l?.syncPolicy??"Not resolved"})]})]})]}),z?(0,e.jsxs)("article",{className:"center-card",children:[(0,e.jsx)("span",{className:"kicker",children:"Support cache"}),(0,e.jsx)("h3",{children:"Local platform records"}),(0,e.jsx)("p",{children:"This developer view reads all feedback and feedback messages currently available in the local platform cache. Server visibility still depends on what your sync/bootstrap layer provides to the developer account."}),(0,e.jsxs)("div",{className:"facts",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"Feedback"}),(0,e.jsx)("strong",{children:at.length})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"Messages"}),(0,e.jsx)("strong",{children:av.length})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"Announcements"}),(0,e.jsx)("strong",{children:C.length})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"Releases"}),(0,e.jsx)("strong",{children:E.length})]})]})]}):(0,e.jsxs)("article",{className:"center-card",children:[(0,e.jsx)("span",{className:"kicker",children:"Upgrade"}),(0,e.jsx)("h3",{children:"Add capacity or features"}),(0,e.jsx)("p",{children:"Upgrade controls will use the subscription module available to the account owner. Other roles can send a billing question from Feedback."}),(0,e.jsx)("button",{type:"button",onClick:()=>{aG("billing_question"),B("feedback")},children:"Ask about access"})]})]}):null]})})]})}let be=`

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

`,bf={"top-left":{top:"-30%",left:"-20%"},"top-right":{top:"-30%",right:"-20%"},"bottom-left":{bottom:"-30%",left:"-20%"},"bottom-right":{bottom:"-30%",right:"-20%"},center:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"}};function bg({placement:a="top-left",size:b="24rem",opacity:c=.18,blur:d="24px",color:f="var(--eds-primary)",decorative:g=!0,style:h,...i}){return(0,e.jsx)("div",{"aria-hidden":!!g||void 0,style:{position:"absolute",zIndex:0,width:b,height:b,borderRadius:"50%",pointerEvents:"none",background:`radial-gradient(circle, ${f} 0%, transparent 68%)`,filter:`blur(${d})`,opacity:Math.min(1,Math.max(0,c)),...bf[a],...h},...i})}function bh(a,b,c){return Math.min(c,Math.max(b,a))}function bi({variant:a="network",opacity:b=.08,density:c=1,absolute:d=!0,decorative:f=!0,className:g,style:h,...i}){let j={position:d?"absolute":void 0,inset:d?0:void 0,pointerEvents:f?"none":void 0,backgroundImage:function(a){switch(a){case"grid":return"var(--eds-texture-grid)";case"dots":return"var(--eds-texture-dots)";case"network":return"var(--eds-texture-network)";case"rings":return"radial-gradient(circle at 20% 50%, transparent 0 18px, color-mix(in srgb, var(--eds-primary) 18%, transparent) 19px 20px, transparent 21px),radial-gradient(circle at 82% 30%, transparent 0 28px, color-mix(in srgb, var(--eds-primary) 12%, transparent) 29px 30px, transparent 31px)";case"academic":return"linear-gradient(color-mix(in srgb, var(--eds-primary) 8%, transparent) 1px, transparent 1px),linear-gradient(90deg, color-mix(in srgb, var(--eds-primary) 8%, transparent) 1px, transparent 1px),radial-gradient(circle, color-mix(in srgb, var(--eds-primary) 20%, transparent) 1px, transparent 1.5px)"}}(a),backgroundSize:function(a,b){let c=bh(b,.5,2);switch(a){case"dots":return`${10/c}px ${10/c}px`;case"grid":case"academic":return`${24/c}px ${24/c}px`;case"network":return`${96/c}px ${96/c}px`;case"rings":return`${140/c}px ${140/c}px`}}(a,c),opacity:bh(b,0,1),...h};return(0,e.jsx)("div",{className:function(...a){return a.filter(Boolean).join(" ")}("eds-brand-pattern",`eds-brand-pattern-${a}`,g),style:j,"aria-hidden":!!f||void 0,...i})}function bj({texture:a="grain",intensity:b=1,children:c,decorative:d=!1,className:f,style:g,...h}){let i={"--eds-texture-intensity":String(Math.min(2,Math.max(0,b))),...g};return(0,e.jsx)("div",{className:function(...a){return a.filter(Boolean).join(" ")}("eds-texture",`eds-texture-${a}`,f),style:i,"aria-hidden":!!d||void 0,...h,children:c})}let bk={dashboard:{rects:[{x:3,y:3,width:7,height:7,rx:1.5},{x:14,y:3,width:7,height:4,rx:1.5},{x:14,y:11,width:7,height:10,rx:1.5},{x:3,y:14,width:7,height:7,rx:1.5}]},student:{circles:[{cx:12,cy:8,r:3}],paths:["M5.5 20c.5-4 2.8-6 6.5-6s6 2 6.5 6","M3 6l9-4 9 4-9 4-9-4Z","M19 7v5"]},teacher:{circles:[{cx:9,cy:8,r:3}],paths:["M3.5 20c.4-4 2.4-6 5.5-6 1.8 0 3.2.7 4.2 2","M15 5h6v10h-6","M15 9h6","M13 14l3 3"]},parent:{circles:[{cx:8,cy:8,r:2.5},{cx:16,cy:9,r:2.5}],paths:["M2.5 20c.4-3.6 2.2-5.5 5.5-5.5S13.1 16.4 13.5 20","M11 20c.3-2.9 1.9-4.5 5-4.5 3 0 4.8 1.6 5.2 4.5"]},attendance:{rects:[{x:3,y:4,width:18,height:17,rx:2}],lines:[{x1:7,y1:2,x2:7,y2:6},{x1:17,y1:2,x2:17,y2:6},{x1:3,y1:9,x2:21,y2:9}],paths:["m8 15 2.2 2.2L16 12"]},assessment:{rects:[{x:4,y:3,width:16,height:18,rx:2}],lines:[{x1:8,y1:8,x2:16,y2:8},{x1:8,y1:12,x2:13,y2:12},{x1:8,y1:16,x2:11,y2:16}],paths:["m14 16 1.5 1.5L19 14"]},reports:{paths:["M4 20V10","M10 20V4","M16 20v-7","M22 20V7","M2 20h22"]},calendar:{rects:[{x:3,y:4,width:18,height:17,rx:2}],lines:[{x1:7,y1:2,x2:7,y2:6},{x1:17,y1:2,x2:17,y2:6},{x1:3,y1:9,x2:21,y2:9}],circles:[{cx:8,cy:13,r:.5},{cx:12,cy:13,r:.5},{cx:16,cy:13,r:.5},{cx:8,cy:17,r:.5},{cx:12,cy:17,r:.5}]},timetable:{circles:[{cx:12,cy:12,r:9}],paths:["M12 7v5l3 2","M7 3.5 5 2","M17 3.5 19 2"]},finance:{circles:[{cx:12,cy:12,r:9}],paths:["M15.5 8.5c-.7-1-1.8-1.5-3.5-1.5-2 0-3.5 1-3.5 2.5S10 12 12 12s3.5 1 3.5 2.5S14 17 12 17c-1.7 0-2.9-.5-3.7-1.6","M12 5v14"]},communication:{paths:["M4 4h16v12H8l-4 4V4Z","M8 8h8","M8 12h5"]},workspace:{rects:[{x:3,y:3,width:18,height:18,rx:2}],lines:[{x1:8,y1:3,x2:8,y2:21},{x1:8,y1:9,x2:21,y2:9}]},notification:{paths:["M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9","M10 21h4"]},settings:{circles:[{cx:12,cy:12,r:3}],paths:["M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21h-4v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H3v-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V3h4v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9A1.7 1.7 0 0 0 21 10h.1v4H21a1.7 1.7 0 0 0-1.6 1Z"]},sync:{paths:["M20 7h-5V2","M4 17h5v5","M18.4 9A7 7 0 0 0 6.2 5.8L4 8","M5.6 15A7 7 0 0 0 17.8 18.2L20 16"]},offline:{paths:["M2 2l20 20","M8.5 8.5A6 6 0 0 1 18 13","M5 13a4 4 0 0 0 4 4h8","M3.5 8.5A8 8 0 0 1 7 5.5"]},device:{rects:[{x:5,y:2,width:14,height:20,rx:2}],lines:[{x1:10,y1:18,x2:14,y2:18}]},school:{paths:["M3 10 12 4l9 6","M5 9v10h14V9","M9 19v-5h6v5","M8 9h8"]},branch:{circles:[{cx:6,cy:5,r:2},{cx:18,cy:5,r:2},{cx:12,cy:19,r:2}],paths:["M6 7v3c0 2 1 3 3 3h3","M18 7v3c0 2-1 3-3 3h-3","M12 13v4"]}},bl=(0,f.createContext)({size:"md",tone:"current",strokeWidth:1.8}),bm={xs:12,sm:16,md:18,lg:20,xl:24},bn={current:"currentColor",primary:"var(--eds-primary)",muted:"var(--eds-text-muted)",success:"var(--eds-success)",warning:"var(--eds-warning)",danger:"var(--eds-danger)",info:"var(--eds-info)"},bo=(0,f.forwardRef)(function({name:a,size:b,tone:c,label:d,decorative:g,strokeWidth:h,title:i,className:j,style:k,...l},m){var n;let o=(0,f.useContext)(bl),p=(0,f.useId)(),q="number"==typeof(n=b??o.size)?n:bm[n],r=c??o.tone,s=g??(!d&&!i),t=bk[a];return t?(0,e.jsxs)("svg",{ref:m,viewBox:"0 0 24 24",width:q,height:q,fill:"none",stroke:bn[r],strokeWidth:h??o.strokeWidth,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!!s||void 0,"aria-label":s?void 0:d,role:s?void 0:"img","aria-labelledby":!s&&i?p:void 0,className:["eds-icon",`eds-icon-${a}`,j].filter(Boolean).join(" "),style:{display:"inline-block",flex:"0 0 auto",verticalAlign:"middle",...k},...l,children:[i?(0,e.jsx)("title",{id:p,children:i}):null,t.paths?.map((a,b)=>(0,e.jsx)("path",{d:a},`p-${b}`)),t.circles?.map((a,b)=>(0,e.jsx)("circle",{cx:a.cx,cy:a.cy,r:a.r},`c-${b}`)),t.rects?.map((a,b)=>(0,e.jsx)("rect",{x:a.x,y:a.y,width:a.width,height:a.height,rx:a.rx},`r-${b}`)),t.polylines?.map((a,b)=>(0,e.jsx)("polyline",{points:a},`pl-${b}`)),t.lines?.map((a,b)=>(0,e.jsx)("line",{x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2},`l-${b}`))]}):(0,e.jsxs)("svg",{ref:m,viewBox:"0 0 24 24",width:q,height:q,fill:"none",stroke:bn[r],strokeWidth:h??o.strokeWidth,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!!s||void 0,"aria-label":s?void 0:d??"Unknown icon",role:s?void 0:"img",className:["eds-icon","eds-icon-fallback",j].filter(Boolean).join(" "),style:{display:"inline-block",flex:"0 0 auto",verticalAlign:"middle",...k},...l,children:[(0,e.jsx)("circle",{cx:"12",cy:"12",r:"8"}),(0,e.jsx)("path",{d:"M9.5 9.5a2.7 2.7 0 0 1 5.2.9c0 2-2.7 2.2-2.7 4"}),(0,e.jsx)("circle",{cx:"12",cy:"17.5",r:".5",fill:"currentColor",stroke:"none"})]})});function bp(a){return(0,e.jsx)(bo,{name:"communication",...a})}function bq(a){return(0,e.jsx)(bo,{name:"workspace",...a})}function br(a){return(0,e.jsx)(bo,{name:"school",...a})}function bs({title:a,open:b,activeKey:c,items:d,onToggle:f,onNavigate:g}){return(0,e.jsxs)("section",{className:"shell-nav-group","data-open":b,"data-navigation-group":a,children:[(0,e.jsxs)("button",{type:"button",className:"shell-nav-group-title",onClick:f,"aria-expanded":b,children:[(0,e.jsx)("span",{children:a}),(0,e.jsx)("b",{"aria-hidden":"true",children:b?"⌃":"⌄"})]}),b?(0,e.jsx)("div",{className:"shell-nav-items",children:d.map(a=>{var b;let d=c===a.key;return(0,e.jsxs)("button",{type:"button",className:["shell-nav-item",d&&"active"].filter(Boolean).join(" "),onClick:()=>g(a.key),"data-active":d?"true":"false","aria-current":d?"page":void 0,children:[(0,e.jsx)("span",{className:"shell-nav-icon",children:"string"==typeof(b=a.icon)?(0,e.jsx)(bo,{name:b,size:"md"}):b}),(0,e.jsx)("strong",{children:a.label}),(0,e.jsx)("span",{className:"shell-nav-active-marker","aria-hidden":"true"})]},a.key)})}):null]})}function bt({count:a=0,attention:b=!1,label:c}){return a>0?(0,e.jsx)("span",{className:"shell-indicator shell-indicator-count","aria-label":c||`${a} unread items`,children:a>99?"99+":a}):b?(0,e.jsx)("span",{className:"shell-indicator shell-indicator-dot","aria-label":c||"Needs attention"}):null}function bu({unreadCount:a=0,attention:b=!1,active:c=!1,onOpen:d}){return(0,e.jsxs)("button",{type:"button",className:["shell-hub-card",c&&"active"].filter(Boolean).join(" "),onClick:d,"aria-current":c?"page":void 0,"aria-label":a?`Open Eleeveon Hub. ${a} unread item${1===a?"":"s"}.`:b?"Open Eleeveon Hub. New activity needs attention.":"Open Eleeveon Hub.",children:[(0,e.jsx)("span",{className:"shell-hub-icon",children:(0,e.jsx)(bp,{size:"sm",tone:"primary"})}),(0,e.jsx)("strong",{className:"shell-hub-title",children:"Eleeveon Hub"}),(0,e.jsx)("span",{className:"shell-hub-indicator",children:(0,e.jsx)(bt,{count:a,attention:b,label:a?`${a} unread Hub item${1===a?"":"s"}`:"Hub needs attention"})}),(0,e.jsx)("span",{className:"shell-hub-chevron","aria-hidden":"true",children:"›"}),(0,e.jsx)("small",{className:"shell-hub-description",children:"Messages, notices and support"})]})}function bv(a){return(0,e.jsx)(bu,{...a})}let bw={administration:{label:"People",description:"Students, teachers and parents",glyph:"\uD83D\uDC65"},people:{label:"People",description:"Students, teachers and parents",glyph:"\uD83D\uDC65"},setup:{label:"Setup",description:"Academic structures and learning setup",glyph:"\uD83E\uDDE9"},"academic records":{label:"Records",description:"Assessment, reports and learner progress",glyph:"\uD83D\uDCCA"},"identity & safety":{label:"Identity & Safety",description:"Identity, access, visitors and safety",glyph:"\uD83E\uDEAA"},attendance:{label:"Attendance",description:"Student and staff attendance",glyph:"✅"},communication:{label:"Communication",description:"Announcements and messages",glyph:"\uD83D\uDCAC"},"calendar & timetable":{label:"Schedule",description:"Calendars, classes, exams and resources",glyph:"\uD83D\uDCC5"},finance:{label:"Finance",description:"Fees, income, expenses and payouts",glyph:"\uD83D\uDCB3"},"branch control":{label:"Branch",description:"Settings, access and local controls",glyph:"⚙️"},"school control":{label:"School",description:"School settings, users and controls",glyph:"\uD83C\uDFEB"}};function bx(a){return String(a||"").trim().toLowerCase()}function by(a){return a.key||bx(a.title).replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"section"}function bz(a){let b=bw[bx(a.title)];return b?{label:a.exploreLabel||b.label,description:a.exploreDescription||b.description,glyph:a.items?.[0]?.icon||b.glyph}:{label:a.exploreLabel||a.title,description:a.exploreDescription||`${a.items?.length||0} tools`,glyph:a.items?.[0]?.icon||"◫"}}function bA(a){return a.exploreLabel||a.label}function bB({image:a,glyph:b,alt:c}){let[d,g]=(0,f.useState)(!1);return(0,e.jsx)("div",{className:"portal-explore-cover","aria-hidden":"true",children:a&&!d?(0,e.jsx)("img",{src:a,alt:"",onError:()=>g(!0)}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"portal-explore-cover-glow"}),(0,e.jsx)("span",{title:c,className:"portal-explore-glyph",children:b})]})})}function bC({sections:a,homeKey:b,activeKey:c,onNavigate:d}){let g=(0,f.useMemo)(()=>a.map(a=>({...a,items:(a.items||[]).filter(a=>a.key!==b)})).filter(a=>a.items.length>0),[a,b]),[h,i]=(0,f.useState)(()=>null),j=(0,f.useMemo)(()=>g.find(a=>by(a)===h)||null,[g,h]);if(j){let a=bz(j);return(0,e.jsxs)("main",{className:"portal-explore-page",children:[(0,e.jsxs)("header",{className:"portal-explore-page-head",children:[(0,e.jsx)("button",{type:"button",className:"portal-explore-back",onClick:()=>{i(null)},"aria-label":"Back to Explore",children:"‹"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"Explore"}),(0,e.jsx)("h1",{children:a.label}),(0,e.jsx)("span",{children:a.description})]})]}),(0,e.jsx)("section",{className:"portal-explore-grid portal-explore-item-grid","aria-label":`${a.label} tools`,children:j.items.map(a=>(0,e.jsxs)("button",{type:"button",className:["portal-explore-card",a.key===c&&"active"].filter(Boolean).join(" "),onClick:()=>d(a.key),children:[(0,e.jsx)(bB,{image:a.exploreImage,glyph:a.icon||"◫",alt:bA(a)}),(0,e.jsx)("span",{className:"portal-explore-card-copy",children:(0,e.jsx)("strong",{children:bA(a)})})]},a.key))}),(0,e.jsx)("style",{children:bD})]})}return(0,e.jsxs)("main",{className:"portal-explore-page portal-explore-root",children:[(0,e.jsx)("section",{className:"portal-explore-grid","aria-label":"Explore categories",children:g.map(a=>{let b=bz(a),c=by(a);return(0,e.jsxs)("button",{type:"button",className:"portal-explore-card",onClick:()=>(a=>{h!==a&&i(a)})(c),children:[(0,e.jsx)(bB,{image:a.exploreImage,glyph:b.glyph,alt:b.label}),(0,e.jsx)("span",{className:"portal-explore-card-copy",children:(0,e.jsx)("strong",{children:b.label})})]},c)})}),(0,e.jsx)("style",{children:bD})]})}let bD=`
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
`;function bE({screens:a,activeKey:b,onOpenScreen:c,onRemoveScreen:d,onClearScreens:f,onAddScreen:g}){return(0,e.jsxs)("main",{className:"portal-screens-page",children:[(0,e.jsxs)("header",{className:"portal-screens-head",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"Workspace"}),(0,e.jsx)("h1",{children:"Screens"}),(0,e.jsx)("span",{children:"Return to the places you have been working in."})]}),a.length>0?(0,e.jsx)("button",{type:"button",onClick:f,children:"Clear"}):null]}),a.length?(0,e.jsx)("section",{className:"portal-screens-list",children:a.map(a=>(0,e.jsxs)("article",{className:["portal-screen-card",a.routeKey===b&&"active"].filter(Boolean).join(" "),children:[(0,e.jsxs)("button",{type:"button",className:"portal-screen-open",onClick:()=>c(a.routeKey),children:[(0,e.jsx)("span",{className:"portal-screen-icon",children:"▣"}),(0,e.jsxs)("span",{className:"portal-screen-copy",children:[(0,e.jsx)("strong",{children:a.label}),(0,e.jsxs)("small",{children:[a.group," \xb7 ",function(a){if(!a)return"";let b=Date.now()-a;return b<6e4?"Just now":b<36e5?`${Math.max(1,Math.floor(b/6e4))}m ago`:b<864e5?`${Math.max(1,Math.floor(b/36e5))}h ago`:new Date(a).toLocaleDateString()}(a.lastVisitedAt)]})]}),(0,e.jsx)("span",{className:"portal-screen-arrow",children:"›"})]}),(0,e.jsx)("button",{type:"button",className:"portal-screen-close",onClick:()=>d(a.routeKey),"aria-label":`Close ${a.label}`,children:"\xd7"})]},a.routeKey))}):(0,e.jsxs)("section",{className:"portal-screens-empty",children:[(0,e.jsx)("div",{children:"▣"}),(0,e.jsx)("h2",{children:"No screens yet"}),(0,e.jsx)("p",{children:"Open something from the Library and it will appear here for quick access."})]}),(0,e.jsxs)("button",{type:"button",className:"portal-screens-add",onClick:g,children:[(0,e.jsx)("span",{children:"＋"}),"Add another screen"]}),(0,e.jsx)("style",{children:bF})]})}let bF=`
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
`;function bG(){return(0,e.jsxs)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,e.jsx)("path",{d:"M3.5 10.5 12 3l8.5 7.5"}),(0,e.jsx)("path",{d:"M5.5 9.5V21h13V9.5"}),(0,e.jsx)("path",{d:"M9.5 21v-6h5v6"})]})}function bH(){return(0,e.jsxs)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,e.jsx)("circle",{cx:"12",cy:"12",r:"8.5"}),(0,e.jsx)("path",{d:"m14.9 9.1-2 4-4 2 2-4 4-2Z"})]})}function bI(){return(0,e.jsxs)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,e.jsx)("rect",{x:"4",y:"5",width:"13",height:"14",rx:"2"}),(0,e.jsx)("path",{d:"M8 2h10a2 2 0 0 1 2 2v11"})]})}function bJ({active:a,onHome:b,onExplore:c,onScreens:d}){return(0,e.jsxs)("nav",{className:"portal-mobile-bottom-nav","aria-label":"Portal navigation","data-portal-mobile-navigation":"true",children:[(0,e.jsxs)("button",{type:"button",className:"home"===a?"active":"",onClick:b,"aria-current":"home"===a?"page":void 0,children:[(0,e.jsx)("span",{className:"portal-mobile-nav-icon",children:(0,e.jsx)(bG,{})}),(0,e.jsx)("span",{className:"portal-mobile-nav-label",children:"Home"})]}),(0,e.jsxs)("button",{type:"button",className:"explore"===a?"active":"",onClick:c,"aria-current":"explore"===a?"page":void 0,children:[(0,e.jsx)("span",{className:"portal-mobile-nav-icon",children:(0,e.jsx)(bH,{})}),(0,e.jsx)("span",{className:"portal-mobile-nav-label",children:"Explore"})]}),(0,e.jsxs)("button",{type:"button",className:"screens"===a?"active":"",onClick:d,"aria-current":"screens"===a?"page":void 0,children:[(0,e.jsx)("span",{className:"portal-mobile-nav-icon",children:(0,e.jsx)(bI,{})}),(0,e.jsx)("span",{className:"portal-mobile-nav-label",children:"Screens"})]}),(0,e.jsx)("style",{children:bK})]})}let bK=`
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
`;function bL({portalTitle:a,activeInstitutionName:b,activeBranchName:c,activeTab:d,homeKey:g,hubKey:h,sections:i,hubUnreadCount:j=0,hubHasAttention:k=!1,onNavigate:l,onOpenHub:m}){let[n,o]=(0,f.useState)(()=>d===g?"home":"explore"),[p,q]=(0,f.useState)(()=>null);(0,f.useMemo)(()=>{let a={};return i.forEach(b=>b.items.forEach(b=>{a[b.key]=b.label})),a[h]="Eleeveon Hub",a},[i,h]),(0,f.useMemo)(()=>{let a={};return i.forEach(b=>b.items.forEach(c=>{a[c.key]=b.title})),a[h]="Messages, notices and support",a},[i,h]);let{screens:r,touchScreen:s,removeScreen:t,clearScreens:u}=function(a){(0,f.useMemo)(()=>["eleeveon_portal_screens",encodeURIComponent(a||"default")].join(":"),[a]);let[b,c]=(0,f.useState)([]),[d,e]=(0,f.useState)(!1),g=(0,f.useCallback)((a,b,d)=>{let e=String(a||"").trim();if(!e)return;let f=Date.now();c(a=>{let c=a.find(a=>a.routeKey===e);return[{routeKey:e,label:String(b||e),group:String(d||"Workspace"),openedAt:c?.openedAt||f,lastVisitedAt:f},...a.filter(a=>a.routeKey!==e)].slice(0,12)})},[]);return{screens:b,touchScreen:g,removeScreen:(0,f.useCallback)(a=>{c(b=>b.filter(b=>b.routeKey!==a))},[]),clearScreens:(0,f.useCallback)(()=>{c([])},[])}}((0,f.useMemo)(()=>[a,b||"institution",c||"workspace"].join("|"),[a,b,c])),v=()=>{"explore"!==p&&(o("explore"),q("explore"))};return(0,e.jsxs)("div",{className:"portal-mobile-navigation",children:["explore"===p?(0,e.jsx)("section",{className:"portal-mobile-overlay portal-mobile-explore-overlay","aria-label":"Explore",children:(0,e.jsx)(bC,{sections:i,homeKey:g,activeKey:d,hubUnreadCount:j,hubHasAttention:k,onNavigate:a=>{o("explore"),q(null),l(a)}})}):null,"screens"===p?(0,e.jsx)("section",{className:"portal-mobile-overlay portal-mobile-screens-overlay","aria-label":"Screens",children:(0,e.jsx)(bE,{screens:r,activeKey:d,onOpenScreen:a=>{if(q(null),a===h){o("explore"),m();return}o("screens"),l(a)},onRemoveScreen:t,onClearScreens:u,onAddScreen:v})}):null,(0,e.jsx)(bJ,{active:n,onHome:()=>{(q(null),o("home"),d!==g)&&l(g)},onExplore:v,onScreens:()=>{"screens"!==p&&(o("screens"),q("screens"))}}),(0,e.jsx)("style",{children:bM})]})}let bM=`
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
`,bN={dashboard:"dashboard",home:"dashboard",students:"student",student:"student",teachers:"teacher",teacher:"teacher",parents:"parent",parent:"parent",attendance:"attendance",assessment:"assessment",assessments:"assessment",reports:"reports",report:"reports",calendar:"calendar",timetable:"timetable",finance:"finance",communication:"communication",communications:"communication",messages:"communication",message:"communication",announcements:"communication",announcement:"communication",workspace:"workspace",settings:"settings",setting:"settings",sync:"sync",devices:"device",device:"device",school:"school",schools:"school",branches:"branch",branch:"branch"};function bO({open:a,hidden:b,portalTitle:c,portalSubtitle:d,activeInstitutionName:f,activeBranchName:g,hubUnreadCount:h=0,hubHasAttention:i=!1,hubKey:j,activeTab:k,homeKey:l,sections:m,openSections:n,footer:o,onNavigate:p,onOpenHub:q,onToggleSection:r,onResizeStart:s}){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("aside",{"data-surface":"role-sidebar",className:["app-sidebar","shell-sidebar","eds-sidebar-surface",a&&"open",b&&"hidden"].filter(Boolean).join(" "),children:[(0,e.jsx)(bg,{}),(0,e.jsx)(bi,{}),(0,e.jsx)(bj,{}),(0,e.jsxs)("div",{className:"shell-sidebar-inner",children:[(0,e.jsxs)("header",{className:"sidebar-head shell-sidebar-head shell-hub-head",children:[(0,e.jsx)(bv,{unreadCount:h,attention:i,active:k===j,onOpen:q}),(0,e.jsxs)("button",{type:"button",onClick:q,"aria-label":"Open Eleeveon Hub","aria-current":k===j?"page":void 0,className:"shell-hub-direct-link",style:{position:"relative",zIndex:3,display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",cursor:"pointer",border:"1px solid var(--border, rgba(148,163,184,.3))",borderRadius:9,padding:"8px 10px",marginTop:6,background:k===j?"var(--surface-tertiary, rgba(148,163,184,.16))":"var(--surface, rgba(148,163,184,.07))",color:"inherit",fontSize:12,fontWeight:600},children:[(0,e.jsx)("span",{children:"✉ Eleeveon Hub"}),h>0&&(0,e.jsx)("span",{"aria-label":`${h} unread`,children:h})]})]}),(0,e.jsx)("nav",{className:"nav-list shell-nav-list","aria-label":`${c} navigation`,children:m.map(a=>(0,e.jsx)(bs,{title:a.title,open:!1!==n[a.title],activeKey:k,items:a.items.map(a=>({key:a.key,label:a.label,icon:function(a,b,c){let d=[a,b].join(" ").toLowerCase();for(let[a,b]of Object.entries(bN))if(d.includes(a))return b;return null!=c&&!1!==c?(0,e.jsx)("span",{className:"shell-nav-legacy-icon","aria-hidden":"true",children:c}):(0,e.jsx)("span",{className:"shell-nav-legacy-icon","aria-hidden":"true",children:"•"})}(a.key,a.label,a.icon)})),onToggle:()=>r(a.title),onNavigate:p},a.title))}),o?(0,e.jsx)("footer",{className:"shell-sidebar-footer",children:o}):null]}),(0,e.jsx)("button",{type:"button",className:"sidebar-resize-handle","aria-label":"Resize sidebar",onMouseDown:s})]}),(0,e.jsx)(bL,{portalTitle:c,activeInstitutionName:f,activeBranchName:g,activeTab:k,homeKey:l,hubKey:j,sections:m,hubUnreadCount:h,hubHasAttention:i,onNavigate:p,onOpenHub:q})]})}function bP(){let a=aZ();return a<=0?null:(0,e.jsx)("span",{"aria-label":`${a} unread ${1===a?"message":"messages"}`,title:`${a} unread ${1===a?"message":"messages"}`,style:{position:"absolute",top:-7,right:-7,minWidth:18,height:18,padding:"0 5px",borderRadius:999,background:"#e11d48",color:"#fff",border:"2px solid var(--surface, #fff)",fontSize:10,fontWeight:800,lineHeight:"14px",textAlign:"center",whiteSpace:"nowrap",zIndex:2,pointerEvents:"none"},children:a>99?"99+":a})}var bQ=c(94452),bR=c(97301);let bS="__eleeveon_center__",bT=[{key:"add",label:"Add"},{key:"filter",label:"Filter"},{key:"print",label:"Print"},{key:"more",label:"More"}];function bU({name:a}){let b={width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.9,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0};return"add"===a?(0,e.jsx)("svg",{...b,children:(0,e.jsx)("path",{d:"M12 5v14M5 12h14"})}):"filter"===a?(0,e.jsxs)("svg",{...b,children:[(0,e.jsx)("path",{d:"M4 7h16M7 12h10m-7 5h4"}),(0,e.jsx)("circle",{cx:"8",cy:"7",r:"2",fill:"currentColor",stroke:"none"}),(0,e.jsx)("circle",{cx:"15",cy:"12",r:"2",fill:"currentColor",stroke:"none"})]}):"print"===a?(0,e.jsxs)("svg",{...b,children:[(0,e.jsx)("path",{d:"M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1-2-2h-2"}),(0,e.jsx)("path",{d:"M6 14h12v7H6z"})]}):(0,e.jsxs)("svg",{...b,children:[(0,e.jsx)("circle",{cx:"5",cy:"12",r:"1",fill:"currentColor"}),(0,e.jsx)("circle",{cx:"12",cy:"12",r:"1",fill:"currentColor"}),(0,e.jsx)("circle",{cx:"19",cy:"12",r:"1",fill:"currentColor"})]})}function bV({items:a,activeKey:b,onNavigate:c,branchName:d,online:g,memberImage:h,memberName:i,onOpenStatus:j,onOpenAccount:k}){let l,m=(l=new Set(a.map(a=>a.key))).has("saasWorkspace")?{title:"Developer Portal",icon:"\uD83D\uDEE0️",pinKey:"eleeveon_developer_pin_cards"}:l.has("ownerDashboard")||l.has("institutionWorkspace")?{title:"Owner Portal",icon:"\uD83D\uDC51",pinKey:"eleeveon_owner_pin_cards"}:1===l.size&&l.has("financeWorkspace")?{title:"Accountant Portal",icon:"\uD83D\uDCBC",pinKey:"eleeveon_accountant_pin_cards"}:{title:"Branch Admin Portal",icon:"\uD83C\uDF93",pinKey:"eleeveon_branch_admin_pin_cards"},n=(0,bR.gr)(),o=n?.handlers[b],p=b===bS?"Eleeveon Hub":a.find(a=>a.key===b)?.label||"Workspace",[q,r]=(0,f.useState)(!1),[s,t]=(0,f.useState)(!1),[u,v]=(0,f.useState)(""),[w,x]=(0,f.useState)(!1),y=(0,f.useRef)(null),z=a=>{t(a),r(!1);try{localStorage.setItem(m.pinKey,a?"1":"0")}catch{}},A=a=>{r(!1),a!==b&&c(a)},B=(0,e.jsx)("div",{className:"ba-v7-tools",role:"toolbar","aria-label":`${p} actions`,children:bT.map(({key:a,label:c})=>(0,e.jsx)("button",{type:"button",className:"ba-v7-tool",onClick:()=>(a=>{r(!1),v("");let c=o?.[a];if(c)return void c();let d=new Set(["reportsWorkspace","studentReports","broadsheets","reportRemarks","studentAttendance"]);if("print"===a&&!d.has(b)){if((0,bQ.Yi)(p))return;v("No table is visible to print in this section.");return}(0,bR.Io)(a)||v(`${a.charAt(0).toUpperCase()+a.slice(1)} isn't available in ${p} yet.`)})(a),"aria-label":`${c} in ${p}`,title:`${c} in ${p}`,children:(0,e.jsx)(bU,{name:a})},a))}),C=(0,e.jsx)("div",{className:"ba-v7-card-grid",role:"group","aria-label":`${m.title} workspaces`,children:a.map(a=>(0,e.jsxs)("button",{type:"button",className:`ba-v7-card ${b===a.key?"is-active":""}`,"aria-current":b===a.key?"page":void 0,onClick:()=>A(a.key),children:[(0,e.jsx)("span",{className:"ba-v7-card-icon","aria-hidden":"true",children:a.icon}),(0,e.jsx)("span",{className:"ba-v7-card-name",children:a.label})]},a.key))});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"ba-v7-nav",ref:y,id:"ba-workspace-navigation",children:[(0,e.jsx)("style",{children:bW}),(0,e.jsxs)("header",{className:"ba-v7-header",children:[(0,e.jsxs)("div",{className:"ba-v7-brand",children:[(0,e.jsx)("span",{className:"ba-v7-brand-mark","aria-hidden":"true",children:m.icon}),(0,e.jsxs)("div",{className:"ba-v7-brand-copy",children:[(0,e.jsx)("strong",{children:"Eleeveon Schools"}),(0,e.jsx)("small",{title:"Branch Admin Portal"===m.title?d:m.title,children:"Branch Admin Portal"===m.title?d||"Branch Administration":m.title})]})]}),(0,e.jsxs)("div",{className:"ba-v7-header-actions",children:[(0,e.jsxs)("button",{type:"button",className:"ba-v7-status",onClick:j,"aria-label":`Open sync status — ${g?"online":"offline"}`,title:`Sync ${g?"online":"offline"}`,children:[(0,e.jsx)("span",{className:`ba-v7-dot ${g?"is-online":"is-offline"}`,"aria-hidden":"true"}),(0,e.jsx)("span",{className:"ba-v7-status-name",children:g?"Online":"Offline"})]}),(0,e.jsxs)("button",{type:"button",className:"ba-v7-status ba-v12-hub",onClick:()=>A(bS),"aria-label":"Open Eleeveon Hub",title:"Eleeveon Hub","aria-current":b===bS?"page":void 0,children:[(0,e.jsx)("span",{"aria-hidden":"true",children:"✉"}),(0,e.jsx)("span",{className:"ba-v7-status-name",children:"Hub"}),(0,e.jsx)(bP,{})]}),(0,e.jsx)("button",{type:"button",className:"ba-v7-avatar",onClick:k,"aria-label":"Open account and workspace",children:h&&!w?(0,e.jsx)("img",{src:h,alt:"",onError:()=>x(!0)}):(0,e.jsx)("span",{"aria-hidden":"true",children:i?.trim().slice(0,1).toUpperCase()||"\uD83D\uDC64"})})]})]}),(0,e.jsxs)("div",{className:"ba-v7-nav-body",children:[(0,e.jsxs)("div",{className:"ba-v7-desktop-row",children:[(0,e.jsx)("nav",{className:"ba-v7-tabs","aria-label":`${m.title} workspaces`,children:a.map(a=>(0,e.jsxs)("button",{type:"button",onClick:()=>A(a.key),className:`ba-v7-tab ${b===a.key?"is-active":""}`,"aria-current":b===a.key?"page":void 0,children:[(0,e.jsx)("span",{"aria-hidden":"true",children:a.icon}),a.label]},a.key))}),B]}),(0,e.jsxs)("div",{className:"ba-v7-mobile-row",children:[(0,e.jsxs)("button",{type:"button",className:"ba-v7-selector","aria-expanded":q||s,"aria-controls":"ba-v7-card-panel",onClick:()=>r(a=>!a),title:"Switch workspace",children:[(0,e.jsx)("span",{children:p}),(0,e.jsx)("span",{"aria-hidden":"true",children:q?"⌃":"⌄"})]}),B]}),q&&(0,e.jsxs)("div",{id:"ba-v7-card-panel",className:"ba-v7-panel is-floating",children:[(0,e.jsxs)("div",{className:"ba-v7-panel-head",children:[(0,e.jsx)("span",{children:"Workspaces"}),(0,e.jsxs)("button",{type:"button",className:s?"is-pinned":"",onClick:()=>z(!s),"aria-pressed":s,title:s?"Unpin navigation cards":"Keep navigation cards visible",children:[(0,e.jsx)("span",{"aria-hidden":"true",children:"\uD83D\uDCCC"})," ",s?"Unpin cards":"Pin cards"]})]}),C]}),u&&(0,e.jsxs)("div",{className:"ba-v7-feedback",role:"status",children:[u,(0,e.jsx)("button",{type:"button","aria-label":"Dismiss notice",onClick:()=>v(""),children:"✕"})]})]})]}),s&&!q&&(0,e.jsxs)("div",{className:"ba-v7-pinned-cards ba-v7-panel is-pinned",children:[(0,e.jsxs)("div",{className:"ba-v7-panel-head",children:[(0,e.jsx)("span",{children:"Workspaces"}),(0,e.jsx)("button",{type:"button",onClick:()=>z(!1),"aria-label":"Unpin navigation cards",children:"\uD83D\uDCCC Unpin cards"})]}),C]})]})}let bW=`
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
`;function bX({image:a,name:b}){let[c,d]=(0,f.useState)(!1);return(0,e.jsx)("span",{className:"header-account-avatar",children:a&&!c?(0,e.jsx)("img",{src:a,alt:"",onError:()=>d(!0)}):b.split(/\s+/).filter(Boolean).slice(0,2).map(a=>a[0]??"").join("").toUpperCase()})}function bY(){return(0,e.jsxs)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,e.jsx)("circle",{cx:"10.8",cy:"10.8",r:"6.2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),(0,e.jsx)("path",{d:"m15.5 15.5 4.4 4.4",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}function bZ({activeLabel:a,workspaceLabel:b,memberName:c,memberRole:d,memberImage:g,memberMeta:h,online:i,realtimeConnected:j,initialSyncDone:k,realtimeStatus:l,onToggleSidebar:m,onOpenStatus:n,onOpenAccount:o,onOpenHub:p}){let q=aZ(),{overlayVisible:r}=(0,B.C)(),[s,t]=(0,f.useState)(!1),[u,v]=(0,f.useState)(""),[w,x]=(0,f.useState)([]),y=(0,f.useRef)(null);if(r)return null;let z=i?j?"Live updates connected":k?`Synced — realtime ${l}`:"Sync needs attention":"Offline — using local data",A=()=>{t(!1),v(""),x([])},C=a=>{window.dispatchEvent(new CustomEvent("eleeveon:portal-search-open",{detail:{key:a}})),A()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("header",{className:"app-header eds-header-surface eds-glass-subtle portal-fixed-header","data-window-overlay":"fallback",children:[s?null:(0,e.jsx)("button",{className:"icon-btn primary portal-header-sidebar-toggle",onClick:m,type:"button","aria-label":"Toggle sidebar",children:"☰"}),s?(0,e.jsxs)("div",{className:"portal-header-search-box",children:[(0,e.jsx)("span",{className:"portal-header-search-leading",children:(0,e.jsx)(bY,{})}),(0,e.jsx)("input",{ref:y,value:u,onChange:a=>v(a.target.value),placeholder:"Search this portal","aria-label":"Search this portal",onKeyDown:a=>{"Escape"===a.key?A():"Enter"===a.key&&w[0]&&C(w[0].key)}}),(0,e.jsx)("button",{type:"button",className:"portal-search-close",onClick:A,"aria-label":"Close search",children:"\xd7"})]}):(0,e.jsxs)("div",{className:"header-title",children:[(0,e.jsx)("strong",{children:a}),(0,e.jsx)("span",{children:b})]}),s?null:(0,e.jsx)("button",{type:"button",className:"icon-btn portal-header-search-button",onClick:()=>{t(!0)},"aria-label":"Search portal",title:"Search",children:(0,e.jsx)(bY,{})}),p?(0,e.jsxs)("button",{type:"button",className:"icon-btn portal-header-hub-button",onClick:()=>{A(),p()},"aria-label":`Open Eleeveon Hub${q>0?`, ${q} unread messages`:""}`,title:"Eleeveon Hub",children:[(0,e.jsxs)("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,e.jsx)("path",{d:"M20 11.5a7.5 7.5 0 0 1-7.5 7.5 8 8 0 0 1-3.3-.7L4 20l1.7-5.2a8 8 0 0 1-.7-3.3 7.5 7.5 0 0 1 7.5-7.5A7.5 7.5 0 0 1 20 11.5Z"}),(0,e.jsx)("path",{d:"M9 11.5h7"})]}),q>0&&(0,e.jsx)("span",{className:"portal-header-hub-unread","aria-hidden":"true",children:q>99?"99+":q})]}):null,(0,e.jsx)("button",{type:"button",className:`sync-dot-btn header-status ${i?j?"live":k?"ok":"warn":"warn"}`,onClick:()=>{A(),n()},"aria-label":"Open system status",title:z,children:(0,e.jsx)("span",{})}),(0,e.jsxs)("button",{type:"button",className:"header-account-button",onClick:()=>{A(),o()},"aria-label":"Open account and workspace menu",title:h,children:[(0,e.jsx)(bX,{image:g,name:c}),(0,e.jsxs)("span",{className:"header-account-copy",children:[(0,e.jsx)("strong",{children:c}),(0,e.jsx)("small",{children:d})]})]})]}),s&&u.trim()?(0,e.jsx)("section",{className:"portal-header-search-results","aria-label":"Search results",children:w.length?w.map(a=>(0,e.jsxs)("button",{type:"button",onClick:()=>C(a.key),children:[(0,e.jsx)("span",{className:"portal-search-result-icon",children:a.icon||"⌕"}),(0,e.jsxs)("span",{className:"portal-search-result-copy",children:[(0,e.jsx)("strong",{children:a.label}),(0,e.jsx)("small",{children:a.group})]}),(0,e.jsx)("b",{"aria-hidden":"true",children:"›"})]},a.key)):(0,e.jsx)("div",{className:"portal-search-empty",children:"No matching portal item."})}):null,(0,e.jsx)("style",{children:b$})]})}let b$=`
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
`;function b_({children:a,pattern:b="dots",glow:c=!0,fixed:d=!1,style:f,...g}){return(0,e.jsxs)("div",{style:{position:d?"fixed":"relative",inset:d?0:void 0,minHeight:d?void 0:"100%",isolation:"isolate",background:"var(--eds-gradient-page-glow), var(--eds-bg)",...f},...g,children:[c?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(bg,{placement:"top-left",size:"30rem",opacity:.1}),(0,e.jsx)(bg,{placement:"bottom-right",size:"24rem",opacity:.07})]}):null,"none"!==b?(0,e.jsx)(bi,{variant:b,opacity:.035}):null,(0,e.jsx)("div",{style:{position:"relative",zIndex:1},children:a})]})}function b0({opacity:a=.04,blendMode:b="soft-light",absolute:c=!0,style:d,...f}){let g={position:c?"absolute":void 0,inset:c?0:void 0,pointerEvents:"none",backgroundImage:"var(--eds-texture-grain)",backgroundSize:"var(--eds-texture-grain-size, 140px 140px)",opacity:Math.min(1,Math.max(0,a)),mixBlendMode:b,...d};return(0,e.jsx)("div",{"aria-hidden":"true",style:g,...f})}function b1({children:a,className:b}){return(0,e.jsx)("section",{className:["app-content","shell-portal-content",b].filter(Boolean).join(" "),"data-portal-content":"true",children:(0,e.jsxs)(b_,{pattern:"dots",glow:!0,className:"shell-content-background",children:[(0,e.jsx)(b0,{opacity:.018}),(0,e.jsx)("div",{className:"app-content-inner","data-portal-module-boundary":"true",children:a})]})})}function b2({activeRoute:a}){let b=(0,f.useRef)(null),c=(0,f.useRef)(null),[d,g]=(0,f.useState)(!1);return(0,e.jsxs)("div",{className:"eds-portal-hscroll-slot","aria-label":"Table horizontal scrolling",children:[(0,e.jsx)("div",{ref:b,className:`eds-portal-hscroll${d?" is-needed":""}`,role:"region","aria-label":"Scroll the current table horizontally",tabIndex:d?0:-1,children:(0,e.jsx)("div",{ref:c,className:"eds-portal-hscroll-spacer"})}),(0,e.jsx)("style",{children:`
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
      `})]})}c(85435);var b3=c(57072),b4=c(17731);let b5=(0,f.forwardRef)(function({variant:a="primary",size:b="md",loading:c=!1,leadingIcon:d,trailingIcon:f,fullWidth:g=!1,disabled:h,className:i,children:j,...k},l){return(0,e.jsxs)("button",{ref:l,type:"button",className:["eds-button",`eds-button-${a}`,`eds-button-${b}`,g&&"eds-button-full",c&&"eds-button-loading",i].filter(Boolean).join(" "),disabled:h||c,"aria-busy":c,...k,children:[c?(0,e.jsx)("span",{className:"eds-button-spinner","aria-hidden":"true"}):d?(0,e.jsx)("span",{className:"eds-button-icon",children:d}):null,(0,e.jsx)("span",{className:"eds-button-label",children:j}),!c&&f?(0,e.jsx)("span",{className:"eds-button-icon",children:f}):null]})});function b6({title:a,meta:b,children:c,className:d}){return(0,e.jsxs)("section",{className:["shell-control-section",d].filter(Boolean).join(" "),children:[a||b?(0,e.jsxs)("header",{className:"shell-control-section-head",children:[a?(0,e.jsx)("span",{children:a}):(0,e.jsx)("span",{}),b?(0,e.jsx)("small",{children:b}):null]}):null,c]})}function b7(a){return(0,e.jsx)(b6,{...a,className:["account-control-section",a.className].filter(Boolean).join(" ")})}var b8=c(47811),b9=c(78527);function ca({image:a,label:b,fallback:c,active:d}){let[g,h]=(0,f.useState)(!1),i=!!a&&!g;return(0,e.jsxs)("span",{className:["workspace-avatar","workspace-thumbnail",d&&"active"].filter(Boolean).join(" "),"aria-label":`${b} image`,children:[i?(0,e.jsx)("img",{src:a||"",alt:"",onError:()=>h(!0)}):(0,e.jsx)("span",{className:"workspace-thumbnail-fallback","aria-hidden":"true",children:c}),(0,e.jsx)("span",{className:["workspace-thumbnail-status",d?"current":"available"].join(" "),"aria-hidden":"true"})]})}function cb({memberships:a,selectedMembership:b,identities:c,switchingMembershipId:d,membershipKey:f,sameMembership:g,roleIcon:h,onSwitchMembership:i}){return(0,e.jsx)("div",{className:"workspace-list shell-workspace-switcher compact-workspace-switcher",children:a.map(a=>{let j=f(a),k=g(a,b),l=d===j,m=(0,b9.YT)(a,c),n=(0,b9.sX)(a,c),o=(0,b9.dV)(a,c),p=(0,b8.R)(a.role);return(0,e.jsxs)("button",{type:"button",className:k?"active":"",onClick:()=>i(a),disabled:!!d,children:[(0,e.jsx)(ca,{image:m,label:p,fallback:h(a.role),active:k}),(0,e.jsxs)("span",{className:"workspace-switch-copy",children:[(0,e.jsx)("strong",{children:p}),(0,e.jsxs)("small",{title:`${n} \xb7 ${o}`,children:[n,o&&"Workspace access"!==o?` \xb7 ${o}`:""]})]}),(0,e.jsx)("b",{children:l?"...":k?"Current":"Open"})]},j)})})}function cc({src:a,name:b}){let[c,d]=(0,f.useState)(!1),g=!!a&&!c;return(0,e.jsx)("span",{className:"drawer-account-photo","aria-label":`${b} profile image`,children:g?(0,e.jsx)("img",{src:a||"",alt:"",onError:()=>d(!0)}):(0,e.jsx)("span",{className:"drawer-account-photo-fallback",children:b.split(/\s+/).filter(Boolean).slice(0,2).map(a=>a[0]??"").join("").toUpperCase()})})}function cd({open:a,memberName:b,memberRole:c,memberImage:d,selectedMembership:g,memberships:h,identities:i,switchingMembershipId:j,schoolId:k,branchId:l,schools:m=[],branches:n=[],lockedContext:o=!1,online:s,realtimeConnected:t,membershipKey:u,sameMembership:v,roleLabel:w,roleIcon:x,onClose:z,onSwitchMembership:A,onSchoolChange:B,onBranchChange:C,onOpenStatus:D,onSelectRole:E,onLogout:F}){let G=(0,p.useRouter)(),[H,I]=(0,f.useState)(!1),J=(0,b3.t)(),K=(0,q.F)(),L=(0,r.t)(),[M,N]=(0,f.useState)(!1),[O,P]=(0,f.useState)(""),Q=async a=>{if(M)return;P("");let b=String(K.user?.id??"").trim();if(!b)return void P("Your profile is still loading. Please try again.");let c=L.effectiveSettings,d=String(c?.appearanceMode||c?.theme||c?.mode||"light"),e=String(c?.primaryColor||("u">typeof document?getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim():"")||"#2f6fed");(0,b4.O5)(J.storageKey,{...J.settings,appearanceMode:a},{sharedDefaultMode:d,sharedPrimaryColor:e,sharedFontSize:c?.fontSize}),N(!0);try{await y.db.appUsers.get(b)&&await y.db.appUsers.update(b,{preferredTheme:a})}catch{P("Appearance changed, but the user preference could not be saved to the local user record.")}finally{N(!1)}};return(0,e.jsxs)("aside",{className:["context-drawer","account-drawer","shell-account-drawer","compact-account-drawer","eds-account-drawer-surface",a&&"open"].filter(Boolean).join(" "),"aria-hidden":!a,children:[(0,e.jsx)(bg,{placement:"top-right",size:"14rem",opacity:.035}),(0,e.jsx)(bi,{variant:"network",opacity:.008}),(0,e.jsx)(bj,{texture:"grain",intensity:.18,decorative:!0,className:"shell-drawer-texture"}),(0,e.jsxs)("div",{className:"compact-drawer-inner",children:[(0,e.jsxs)("header",{className:"compact-drawer-head",children:[(0,e.jsxs)("button",{type:"button",className:"compact-drawer-identity drawer-identity-profile-link",onClick:()=>{z(),G.push("/profile")},"aria-label":"Open my profile",children:[(0,e.jsx)(cc,{src:d,name:b}),(0,e.jsxs)("span",{className:"compact-drawer-member-copy",children:[(0,e.jsx)("strong",{children:b}),(0,e.jsx)("small",{children:c})]})]}),(0,e.jsx)("button",{className:"compact-drawer-close",onClick:z,type:"button","aria-label":"Close account menu",children:"✕"})]}),h.length>1?(0,e.jsxs)(b7,{title:"Workspaces",meta:`${h.length}`,className:"compact-workspaces-section",children:[(0,e.jsxs)("button",{type:"button",className:"drawer-compact-switch-trigger","aria-expanded":H,onClick:()=>I(a=>!a),children:[(0,e.jsx)("span",{className:"drawer-compact-switch-icon","aria-hidden":"true",children:"⇄"}),(0,e.jsxs)("span",{className:"drawer-compact-switch-copy",children:[(0,e.jsx)("strong",{children:H?"Choose a workspace":"Switch workspace"}),(0,e.jsx)("small",{children:H?"Select another available role or school":`${c} \xb7 ${h.length} available`})]}),(0,e.jsx)("span",{className:"drawer-compact-switch-chevron","aria-hidden":"true",children:H?"⌃":"⌄"})]}),H&&(0,e.jsx)("div",{className:"drawer-compact-switch-panel",children:(0,e.jsx)(cb,{memberships:h,selectedMembership:g,identities:i,switchingMembershipId:j,membershipKey:u,sameMembership:v,roleLabel:w,roleIcon:x,onSwitchMembership:a=>{I(!1),A(a)}})})]}):null,(0,e.jsxs)(b7,{title:"Appearance",className:"compact-appearance-section",children:[(0,e.jsx)("div",{className:"drawer-appearance-choices",role:"group","aria-label":"Personal appearance",children:[{value:"light",label:"Light",icon:"☀"},{value:"dark",label:"Dark",icon:"☾"},{value:"system",label:"Default",icon:"◐"}].map(a=>(0,e.jsxs)("button",{type:"button",className:`drawer-appearance-choice ${J.settings.appearanceMode===a.value?"is-selected":""}`,"aria-pressed":J.settings.appearanceMode===a.value,disabled:M,onClick:()=>void Q(a.value),children:[(0,e.jsx)("span",{"aria-hidden":"true",children:a.icon}),(0,e.jsx)("small",{children:a.label})]},a.value))}),O&&(0,e.jsx)("p",{className:"drawer-appearance-error",role:"status",children:O})]}),o?null:(0,e.jsx)(b7,{title:"School context",className:"compact-context-section",children:(0,e.jsxs)("div",{className:"compact-context-grid",children:[(0,e.jsxs)("label",{className:"account-context-field",children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(br,{size:"sm"}),"School"]}),(0,e.jsxs)("select",{value:k??"",onChange:a=>B(a.target.value||null),disabled:!m.length,children:[(0,e.jsx)("option",{value:"",children:m.length?"Select school":"No school found"}),m.map(a=>(0,e.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,e.jsxs)("label",{className:"account-context-field",children:[(0,e.jsxs)("span",{children:[(0,e.jsx)(bq,{size:"sm"}),"Branch"]}),(0,e.jsxs)("select",{value:l??"",onChange:a=>C(a.target.value||null),disabled:!k||!n.length,children:[(0,e.jsx)("option",{value:"",children:k?n.length?"Select branch":"No branch found":"Select school first"}),n.map(a=>(0,e.jsx)("option",{value:a.id,children:a.name},a.id))]})]})]})}),(0,e.jsx)(b5,{variant:"danger",fullWidth:!0,onClick:F,className:"compact-account-logout",children:"Logout"})]}),(0,e.jsx)("style",{children:ce})]})}let ce=`
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
`;var cf=c(4070);c(31435),c(27575);let cg="eleeveon_user_memberships",ch="__eleeveon_center__",ci="eleeveon_open_workspace";function cj(a,b){}function ck(a){}function cl(a){return null==a?null:String(a).trim()||null}function cm(...a){for(let b of a){let a=cl(b);if(a)return a}return null}function cn(a){if(!a)return null;let b=cm(a.schoolId,a.school?.id,a.activeSchoolId,a.contextSchoolId),c=cm(a.branchId,a.schoolBranchId,a.branch?.id,a.activeBranchId,a.contextBranchId),d=cm(a.teacherId,a.teacher?.id),e=cm(a.studentId,a.student?.id),f=cm(a.parentId,a.parent?.id);return{...a,schoolId:b,branchId:c,schoolBranchId:c,teacherId:d,studentId:e,parentId:f,active:!1!==a.active}}function co(a,b="membership"){return a?String(a.id??`${a.role}-${a.schoolId??"account"}-${a.branchId??"root"}-${a.teacherId??a.studentId??a.parentId??"portal"}`):b}function cp(a,b){return!!a&&!!b&&co(a)===co(b)}function cq(a){return!!a&&!1!==a.active&&!1!==a.isActive&&!0!==a.disabled&&!0!==a.isDeleted&&!["inactive","disabled","deleted","blocked","suspended"].includes(String(a.status||"").trim().toLowerCase())}function cr(a){let b=cn(a);return!!b&&("student"===b.role?!!b.studentId:"teacher"===b.role?!!b.teacherId:"parent"!==b.role||!!b.parentId)}function cs(a,b){return!!a&&b.map(String).includes(String(a))}function ct(...a){for(let b of a){let a=cl(null);if(a)return a}return null}Promise.resolve();var cu=c(78997),cv=c(23553);function cw(a){return"developer"===a?"\uD83D\uDEE0️":"platform_team"===a?"\uD83E\uDDE9":"owner"===a||"super_admin"===a?"\uD83D\uDC51":"branch_admin"===a?"\uD83C\uDFDB️":"admin"===a?"\uD83C\uDFEB":"accountant"===a?"\uD83D\uDCB0":"teacher"===a?"\uD83D\uDC68‍\uD83C\uDFEB":"student"===a?"\uD83E\uDDD1‍\uD83C\uDF93":"parent"===a?"\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67":"\uD83D\uDC64"}let cx=["schools","branches","academicPeriods","classes"],cy=["students","studentEnrollments","studentParents","parents","teachers"],cz=["gradingSystems","gradeRules","assessmentStructures","assessmentStructureItems","assessmentApplicabilities","assessmentComponents","assessmentEntries","computedResults","classes","classSubjects","subjects","students","studentEnrollments","academicPeriods"],cA=["attendance","studentAttendanceSummaries","teacherAttendance","attendanceSessions","students","teachers","classes","studentEnrollments","academicPeriods"],cB=["reportCards","reportCardItems","reportCardTemplates","reportCardTemplateSettings","reportCardTemplateAssignments","studentReportSnapshots","computedResults","assessmentEntries","assessmentStructures","assessmentStructureItems","assessmentApplicabilities","gradingStructures","gradeRules","academicStructures","academicPeriods","schools","branches","schoolBranchSettings","classes","classSubjects","classTeachers","subjects","students","studentEnrollments"],cC=["scheduleTimetables","scheduleSessions","scheduleResources","scheduleConflicts","classes","subjects","teachers","classTeachers"],cD=["feeStructures","payments","incomes","expenses","studentFeeInvoices","studentFeeInvoiceItems","studentFeePayments","currencies","schoolCurrencySettings"],cE=["announcements","announcementRecipients","messageThreads","messages","communicationLogs"],cF=["schoolBranchSettings","schools","branches"];function cG(a){let b=String(a||"").toLowerCase().trim().replace(/-/g,"_");return"owner"===b||"school_owner"===b?"super_admin":b}function cH({title:a,text:b,spin:c}){return(0,e.jsxs)("main",{className:"center-page",children:[(0,e.jsx)(O,{}),(0,e.jsx)("style",{children:cJ}),(0,e.jsxs)("section",{className:"loading-card",children:[c&&(0,e.jsx)("div",{className:"loading-spinner"}),(0,e.jsx)("h2",{children:a}),(0,e.jsx)("p",{children:b})]})]})}let cI=function({portalTitle:a,portalSubtitle:b,homeKey:c,allowedRoles:d,navSections:g,routes:i,lockedContext:j=!0,requireSchool:k=!0,requireBranch:l=!0,navigationMode:n="sidebar"}){let o="branch-workspace"===n,y=(0,p.useRouter)(),{runTransition:F}=function(){let a=(0,f.useContext)(m);if(!a)throw Error("useWorkspaceTransition must be used inside WorkspaceTransitionProvider");return a}(),G=(0,q.F)(),H=(0,u.A)(),I=(0,s.c)(),J=(0,r.t)(),K=(0,w.D)(),L=(0,x.tm)(),M=(0,t.j)(),N=(0,E.g)(),P=(0,v.x)(),Q=(0,cu.O)(),{setIdentity:R,clearIdentity:S}=(0,B.C)(),{initialSyncDone:T,applyingChanges:U}=M,{openStatusSheet:V}=N,{connected:W,status:X}=(0,v.x)(),{accountId:Y,user:Z,account:$,subscription:_,logout:aa,refreshAccount:ab,loading:ac,restoring:ad,verifying:ae,sessionVerified:af,authenticated:ag,offline:ah}=G,{activeMembership:ai,activeRole:aj,activeTeacherId:ak,activeStudentId:al,activeParentId:am,restored:an,setActiveMembership:ao,beginMembershipTransition:ap,completeMembershipTransition:aq,failMembershipTransition:ar}=H,{settings:as,refreshSettings:at}=J,au=K.fontFamily||as?.fontFamily||"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",av=K.fontSize||Number(as?.fontSize)||16,{activeSchoolId:aw,activeSchool:ax,schools:ay,setActiveSchoolId:az,activeBranchId:aA,activeBranch:aB,branches:aC,allBranches:aD,setActiveBranchId:aE,loading:aF,refreshInstitution:aG}=I,aH=(0,f.useMemo)(()=>null,[]),aI=(0,f.useMemo)(()=>cn(aH?.membership)||cn(null),[aH]),aJ=(0,f.useMemo)(()=>{let a=[...(0,cv.TQ)($),...(0,cv.TQ)(Z),...Array.isArray(null)?null.map(cn).filter(Boolean):[],...aI?[aI]:[]],b=new Map;a.map(cn).filter(Boolean).filter(cq).forEach(a=>{b.set(co(a),a)});let c=[...b.values()];return c.length&&cj(cg,JSON.stringify(c)),c},[$,Z,aI]),aK=(0,f.useMemo)(()=>d.some(a=>["student","teacher","parent"].includes(String(a))),[d]),aL=(0,f.useMemo)(()=>aJ.filter(a=>!!cs(a.role,d)&&!!cq(a)&&(!aK||!!cr(a))),[aJ,d,aK]),aM=(0,f.useMemo)(()=>{var a;let b=cn(ai)||aI;return b&&cs(b.role,d)&&cq(b)&&(!aK||cr(b))?b:aK?1===aL.length?aL[0]:null:(a={memberships:aJ,allowedRoles:d,activeSchoolId:aw,activeBranchId:aA}).memberships.find(b=>{if(!cs(b.role,a.allowedRoles)||!cq(b))return!1;let c=!a.activeSchoolId||!b.schoolId||String(b.schoolId)===String(a.activeSchoolId),d=!a.activeBranchId||!b.branchId||String(b.branchId)===String(a.activeBranchId);return c&&d})||a.memberships.find(b=>cs(b.role,a.allowedRoles)&&cq(b))||null},[ai,aI,aJ,d,aw,aA,aK,aL]),aN=(0,f.useMemo)(()=>cl(aw)||cl(aM?.schoolId)||cl(aH?.schoolId)||ct("activeSchoolId"),[aw,aM?.schoolId,aH]),aO=(0,f.useMemo)(()=>cl(aA)||cl(aM?.branchId)||cl(aH?.branchId)||ct("activeBranchId"),[aA,aM?.branchId,aH]),aP=(0,f.useMemo)(()=>{let a=aj||aM?.role||null;return a?(0,cf.uu)({role:a,accountId:Y,schoolId:aN,branchId:aO}):null},[aj,aM?.role,Y,aN,aO]),aQ=(0,f.useMemo)(()=>(0,cf.yG)(aj||aM?.role||""),[aj,aM?.role]),aR=(0,f.useRef)(null),aS=!!(aP&&K.ready&&Q.firstEntryReady&&K.effectiveScope===aQ&&(0,cf.Ic)(K.appliedFor,aP)&&(0,cf.Ic)(Q.appliedFor,aP)),aT=!!(aP&&J.loadedFor&&J.effectiveScope===aQ&&J.loadedFor.key===aP.key&&String(J.loadedFor.accountId||"")===String(Y||"")&&String(J.loadedFor.schoolId||"")===String(aP.schoolId||"")&&String(J.loadedFor.branchId||"")===String(aP.branchId||"")),aU="branch"===aQ&&aT?String(as?.primaryColor||J.branchSettings?.primaryColor||"").trim():"",aV=K.ready&&aP&&(0,cf.Ic)(K.appliedFor,aP)?String(K.appliedFor?.primaryColor||"").trim():"",aW=aU||(aT?String(as?.primaryColor||"").trim():"")||aV||"#2f6fed",aX=(()=>{let a=aW.trim(),b=/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(a)?a.slice(1):"",c=3===b.length?b.split("").map(a=>a+a).join(""):b;if(!c)return"#ffffff";let d=Number.parseInt(c,16);return((d>>16&255)*299+(d>>8&255)*587+(255&d)*114)/1e3>155?"#111827":"#ffffff"})();aP&&(aR.current,aP.key);let aY=(0,f.useMemo)(()=>aJ.filter(a=>!1!==a.active),[aJ]),aZ=(0,f.useMemo)(()=>{if(aK)return!!aM&&!!cs(aM.role,d)&&!!cq(aM)&&cr(aM);return!!(aM&&cs(aM.role,d))||(0,cv.ro)({role:$?.role||Z?.role,memberships:aJ,selectedMembership:aM,allowedRoles:d,schoolId:aN,branchId:aO})},[$,Z,aJ,aM,d,aN,aO,aK]),a$=(0,f.useMemo)(()=>g.flatMap(a=>a.items),[g]),a_=(0,f.useMemo)(()=>{let a={};return g.forEach(b=>b.items.forEach(b=>{a[b.key]=b.label})),a},[g]),a0=(0,f.useMemo)(()=>{let a={};return g.forEach(b=>b.items.forEach(c=>{a[c.key]=b.title})),a},[g]),[a1,a2]=(0,f.useState)(c);aM&&co(aM),g.flatMap(a=>a.items.map(a=>a.key)).join("\x1f");let[a3,a4]=(0,f.useState)(!1),[a5,a6]=(0,f.useState)(!1),[a7,a8]=(0,f.useState)(300),[a9,ba]=(0,f.useState)(!1),[bb,bc]=(0,f.useState)(null),[be,bf]=(0,f.useState)(!0),[bg,bh]=(0,f.useState)(null),[bi,bj]=(0,f.useState)(null),[bk,bl]=(0,f.useState)(0),[bm,bn]=(0,f.useState)(null),bo=(0,f.useRef)(new Map),bp=a_[a1]||a1,bq="teacher"===cG(aM?.role),br=(0,f.useMemo)(()=>{if(!bq){let a,b=a1.toLowerCase().replace(/[^a-z0-9]/g,""),c=String(bp||"").toLowerCase(),d=`${b} ${c}`;if(!b||"__eleeveon_center__"===b||/dashboard|^home$|hub|localsettings|syncstatus/.test(b))return[];if(/assessment|broadsheet|grade|grading|computedresult/.test(d))a=cz;else if(/attendance|rollcall/.test(d))a=cA;else if(/studentreport|teacherreport|report|transcript|result|promotion|cumulative|progress|performance/.test(d))a=cB;else if(/fee|finance|invoice|payment|income|expense|payroll|salary/.test(d))a=cD;else if(/message|notice|announcement|communicat/.test(d))a=cE;else if(/setting|appearance|branchprofile|schoolprofile|teacherprofile|studentprofile|parentprofile/.test(d))a=cF;else if(/schedule|timetable|calendar/.test(d))a=cC;else if(/subject|class|curriculum|academicstructure|academicperiod|course|assignment/.test(d))a=[...cx,"subjects","classSubjects","classTeachers","studentEnrollments","academicStructures","programs","curriculums","assignments"];else if(/student|enrollment|enrolment|learner|admission/.test(d))a=cy;else if(/teacher|staff|personnel|parent/.test(d))a=cy;else{if(!(0,A.k)(a1))return[];a=[a1]}return[...new Set(a)].filter(A.k)}let a=["classes","classSubjects","classTeachers","subjects","academicPeriods","students","studentEnrollments"],b=["academicStructures","assessmentStructures","assessmentStructureItems","assessmentApplicabilities","assessmentEntries","gradingStructures","gradeRules"];return"assessmentEntry"===a1?[...new Set([...a,...b])].filter(A.k):"reportsWorkspace"===a1?[...new Set([...a,...b,"computedResults","attendance","studentAttendanceSummaries","schoolBranchSettings","reportCardTemplates","reportCardTemplateSettings","reportCardTemplateAssignments"])].filter(A.k):"teacherStudents"===a1?["students","studentEnrollments","classes","classSubjects","academicPeriods"].filter(A.k):[]},[a1,bp,bq]),bs=function(a,b,c=!1){let[d,e]=(0,f.useState)(0),[g,h]=(0,f.useState)(!0),i=b.join("|");return(0,f.useMemo)(()=>{let b=[...new Set(i.split("|").filter(Boolean))];if(!b.length)return{status:"not_required",missingCount:0,totalCount:0,online:g};if(!a)return{status:"not_downloaded",missingCount:b.length,totalCount:b.length,online:g};if((0,z.F4)(a,b))return{status:"complete",missingCount:0,totalCount:b.length,online:g};let d=b.map(b=>(0,z.zO)(a,b)),e=d.filter(a=>"complete"!==a).length;if(!e)return{status:"complete",missingCount:0,totalCount:b.length,online:g};let f=(0,z.$n)(a);return{status:c||f?.status==="downloading"?"downloading":d.some(a=>"partial"===a)||d.some(a=>"complete"===a)||f?.status==="partial"?"partial":f?.status==="failed"?"failed":"not_downloaded",missingCount:e,totalCount:b.length,online:g}},[a,i,d,g,c])}(aM,br,null!==bg),bt=aM?[Y||"",co(aM),aN||"",aO||"",cG(aM.role)].join("|"):"",bu=(0,f.useCallback)(()=>{navigator.onLine&&aM&&br.length&&(bo.current.clear(),bn(null),bl(a=>a+1))},[aM,br,bq,bt]),[bv,bw]=(0,f.useState)(0),[bx,by]=(0,f.useState)(!1),[bz,bA]=(0,f.useState)(()=>g.reduce((a,b)=>(a[b.title]=!0===b.defaultOpen,a),{})),bB=(0,b9.ns)(aJ,Z??null),bC=(0,f.useMemo)(()=>{var a;let b,c;return b=(a={openedWorkspace:aH,selectedMembership:aM,user:Z,account:$}).openedWorkspace||{},c=a.selectedMembership||{},String(b.memberName||b.fullName||b.userName||b.name||c.fullName||c.memberName||c.userName||a.user?.fullName||a.user?.name||a.user?.email||a.account?.name||"Signed-in member").trim()},[aH,aM,Z,$]),bD=(0,f.useMemo)(()=>(function(a){var b,c,d;let e=a.selectedMembership;return e?["developer"===(b=e.role)?"Developer":"platform_team"===b?"Platform Team":"owner"===b?"Owner":"super_admin"===b?"Owner / Super Admin":"branch_admin"===b?"Branch Admin":"admin"===b?"School Admin":"accountant"===b?"Accountant":"teacher"===b?"Teacher":"student"===b?"Student":"parent"===b?"Parent":String(b||"User").replaceAll("_"," "),(c=a.identities,(0,b9.sX)(e,c)),(d=a.identities,(0,b9.dV)(e,d))].join(" \xb7 "):"Signed-in workspace"})({selectedMembership:aM,identities:bB}),[aM,bB]),bE=(0,f.useMemo)(()=>{let a=(0,b9.YT)(aM,bB),b=String(Z?.photo??Z?.profilePhoto??Z?.avatar??Z?.image??"").trim();return a||b||null},[aM,bB,Z]),bF=(0,f.useMemo)(()=>a1===ch?bd:i[a1]??i[c],[i,a1,c]),bG=a1===ch?"Eleeveon Hub":a_[a1]??a,bH=a1===ch?"Messages, notices and support":a0[a1]??b,bI=(0,b8.R)(aM?.role||$?.role||Z?.role||"Member"),bJ=aB?.name||ax?.name||bH||"Workspace",bK=aM&&Y?[Y,co(aM),aN||"",aO||""].join("|"):"";(0,f.useMemo)(()=>{if(!aM)return[];let a=(0,cf.yG)(aM.role||"");return"branch"===a?["schools","branches","schoolBranchSettings"]:"school"===a?["schools"]:[]},[aM?.role]);let[bL,bM]=(0,f.useState)({key:"",state:"checking"}),[bN,bP]=(0,f.useState)(null),[bQ,bR]=(0,f.useState)(0);(0,f.useCallback)(async(a,b,c=3e4)=>{let d;try{return await Promise.race([a,new Promise((a,e)=>{d=setTimeout(()=>e(Error(`${b} took too long. Check the connection and retry.`)),c)})])}finally{d&&clearTimeout(d)}},[]);let bS=!!(bK&&bL.key===bK&&"ready"===bL.state),bT=!!(bK&&bL.key===bK&&"failed"===bL.state),bU=!!(aM&&aZ),bW=(ad||ac||!an||aF||!L.ready)&&!bU,bX=!!(bU&&aP&&!aS),bY=bW||bX,b$=(0,f.useMemo)(()=>({accountId:Y,user:Z,account:$,subscription:_,authenticated:ag,offline:ah||!be,restoring:ad,verifying:ae,sessionVerified:af,membership:aM,memberships:aY,activeRole:aj||aM?.role||null,teacherId:ak||cl(aM?.teacherId),studentId:al||cl(aM?.studentId),parentId:am||cl(aM?.parentId),schoolId:aN,school:ax,schools:ay,branchId:aO,branch:aB,branches:aC,allBranches:aD,settings:as,theme:K,database:L,sync:M,syncPanel:N,realtime:P,appearance:Q,refreshAccount:ab,refreshInstitution:aG,refreshSettings:at,refreshTheme:K.refreshTheme,setActiveMembership:ao,setActiveSchoolId:az,setActiveBranchId:aE}),[Y,Z,$,_,ag,ah,be,ad,ae,af,aM,aY,aj,ak,al,am,aN,ax,ay,aO,aB,aC,aD,as,K,L,M,N,P,Q,ab,aG,at,ao,az,aE]),b_=a=>{if(a!==ch&&!Object.prototype.hasOwnProperty.call(i,a))return;a2(a),a4(!1),ba(!1);let b=a0[a];b&&bA(g.reduce((a,c)=>(a[c.title]=c.title===b,a),{}))},b0=(0,f.useCallback)(async()=>{ba(!1),a4(!1),await aa()},[aa]),b3=async a=>{if(bb)return;let b=cn(a)||a,c=co(b),d=aY.find(a=>co(a)===c&&a.role===b.role&&String(a.schoolId||"")===String(b.schoolId||"")&&String(a.branchId||"")===String(b.branchId||"")&&String(a.teacherId||"")===String(b.teacherId||"")&&String(a.studentId||"")===String(b.studentId||"")&&String(a.parentId||"")===String(b.parentId||""));if(!d||!cq(d))return void console.warn("Refused role switch: membership not available in the current account.");let e=(0,D.PY)(),f=!1;try{bc(c),await (0,D.pq)((0,cv.b8)(b.role)),await F({mode:"role-switch",membership:b,title:"Switching workspace…",detail:"Activating your selected role and workspace."},async({setStage:a})=>{a("access",{detail:"Validating access for the selected role and workspace."});let c=function(a){let b=cn(a);if(!b)return null;let c=co(b);JSON.stringify(b),b.role;let d=cl(b.schoolId),e=cl(b.branchId),f=cl(b.teacherId),g=cl(b.studentId),h=cl(b.parentId);return d?cj("activeSchoolId",String(d)):ck("activeSchoolId"),e?cj("activeBranchId",String(e)):ck("activeBranchId"),f?cj("activeTeacherId",String(f)):ck("activeTeacherId"),g?cj("activeStudentId",String(g)):ck("activeStudentId"),h?cj("activeParentId",String(h)):ck("activeParentId"),cj(ci,JSON.stringify({membership:b,membershipId:c,role:b.role,schoolId:d,branchId:e,teacherId:f,studentId:g,parentId:h,openedAt:Date.now()})),b}(b)||b;ap(c),a("membership",{detail:`Activating ${(0,b8.R)(c.role)} and its profile context.`}),await ao(c),a("appearance",{detail:"Applying your role's appearance and branding."});let d=await K.applyForMembership(c),e=(0,cf.uu)({role:c.role,accountId:c.accountId,schoolId:c.schoolId,branchId:c.branchId});if(!d||!(0,cf.Ic)(d,e))throw Error("The selected workspace appearance could not be applied.");aq(),ba(!1),a4(!1),a("dashboard",{detail:`Opening the ${(0,b8.R)(c.role)} workspace.`}),f=!0,window.location.replace((0,cv.b8)(c.role))})}catch(a){if(!f){(0,D.Rh)(e);let a=e.activeMembership;if(a)try{let b=JSON.parse(a);await ao(b),await K.applyForMembership(b)}catch(a){console.warn("Previous workspace restoration needs a reload:",a)}}ar(a instanceof Error?a.message:"Failed to open the selected workspace."),console.error("Failed to switch role/workspace:",a),bc(null)}},b4=(0,f.useCallback)(a=>{a.preventDefault();let b=a.clientX,c=a=>{a8(Math.min(380,Math.max(240,a7+a.clientX-b)))},d=()=>{window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",d)};window.addEventListener("mousemove",c),window.addEventListener("mouseup",d)},[a7]),b5="complete"===bs.status;return bU&&bK&&!bS?(0,e.jsx)(h.A,{progress:bN||{stage:"checking-cache",title:"Checking selected workspace…",detail:"Verifying account access and local records before downloading school identity.",percent:5},error:bT?bL.error||"Workspace preparation failed.":null,onRetry:()=>bR(a=>a+1),onCancel:()=>y.push("/select-role")}):bY&&Q.error&&bX?(0,e.jsx)(h.A,{error:Q.error,onRetry:()=>{Promise.all([Promise.resolve(aG()),Promise.resolve(at()),Promise.resolve(K.refreshTheme())]).then(()=>bR(a=>a+1))},onCancel:()=>y.push("/select-role")}):bY?(0,e.jsx)(cH,{title:bX?"Preparing your workspace":`Opening ${a}...`,text:bX?Q.error||"Applying the correct role, school, branch, colour, branding, and display settings.":"Checking your account and selected workspace.",spin:!Q.error}):ag&&Y?aZ?k&&!aN||l&&!aO?(0,e.jsx)(cH,{title:"Workspace context required",text:"This role needs a school or branch context. Return to Select Role and open the workspace again."}):(0,e.jsxs)("main",{className:["role-shell","workspace-locked-scroll",o&&"branch-workspace-layout",a5&&"portal-sidebar-hidden"].filter(Boolean).join(" "),"data-appearance-scope":K.effectiveScope,"data-appearance-key":K.appliedFor?.key||void 0,"data-window-chrome":"integrated",style:{"--sidebar-width":`${a7}px`,"--portal-header-height":"48px","--portal-content-left":o||a5?"0px":`${a7}px`,"--primary-color":aW,"--dashboard-primary":aW,"--branch-primary":aW,"--accent-color":aW,"--ba-primary":aW,"--ba-primary-text":aX,"--eds-primary-text":aX,"--eds-primary":aW,"--eds-brand-primary":aW,"--eds-primary-soft":`color-mix(in srgb, ${aW} 15%, transparent)`,"--eds-primary-softer":`color-mix(in srgb, ${aW} 8%, transparent)`,"--font-family":au,"--font-size":`${av}px`},children:[(0,e.jsx)("style",{children:cJ}),(0,e.jsx)("style",{children:`
        .role-module-first-download{min-height:min(52vh,480px);display:grid;place-items:center;padding:20px}
        .role-module-first-download-card{width:min(420px,100%);padding:28px 22px;text-align:center;display:grid;justify-items:center;gap:13px;border:1px solid var(--border,#d8dee8);border-radius:22px;background:var(--surface,#fff);color:var(--text,#182436)}
        .role-module-first-download-card strong{font-size:17px}
        .role-module-first-download-card p{margin:0;font-size:13px;line-height:1.6;color:var(--muted,#65748a)}
        .role-module-first-download-card small{font-size:12px;color:var(--muted,#65748a)}
        .role-module-first-download-card button{border:0;border-radius:12px;background:var(--primary-color,#2563eb);color:#fff;padding:11px 20px;font:inherit;font-weight:700;cursor:pointer}
        .role-module-first-download-card button:disabled{opacity:.45;cursor:not-allowed}
        .role-module-first-spinner{width:38px;height:38px;border-radius:50%;border:4px solid var(--border,#d8dee8);border-top-color:var(--primary-color,#2563eb);animation:role-first-spin .8s linear infinite}
        @keyframes role-first-spin{to{transform:rotate(360deg)}}
      `}),(0,e.jsx)(O,{}),(0,e.jsx)("span",{hidden:!0,"aria-hidden":"true",style:{display:"none"},children:U?"Applying new data":""}),a3||a9?(0,e.jsx)("button",{"aria-label":"Close drawer",className:"app-overlay",onClick:()=>{a4(!1),ba(!1)}}):null,!o&&(0,e.jsx)(bO,{open:a3,hidden:a5,portalTitle:a,portalSubtitle:b,activeInstitutionName:ax?.name||aB?.name||null,activeBranchName:aB?.name||null,hubUnreadCount:bv,hubHasAttention:bx,hubKey:ch,activeTab:a1,homeKey:c,sections:g,openSections:bz,onNavigate:b_,onOpenHub:()=>b_(ch),onToggleSection:a=>{bA(b=>{let c=!b[a];return g.reduce((b,d)=>(b[d.title]=c&&d.title===a,b),{})})},onResizeStart:b4}),(0,e.jsx)(cd,{open:a9,memberName:bC,memberRole:(0,b8.R)(aM?.role||$?.role||Z?.role||"Member"),memberImage:bE,selectedMembership:aM,memberships:aY,identities:bB,switchingMembershipId:bb,schoolId:aw||aN,branchId:aA||aO,schools:(ay||[]).map(a=>({id:a.id,name:a.name})),branches:(aC||[]).map(a=>({id:a.id,name:a.name})),lockedContext:j,online:be,realtimeConnected:W,membershipKey:co,sameMembership:cp,roleLabel:b8.R,roleIcon:cw,onClose:()=>ba(!1),onSwitchMembership:b3,onSchoolChange:a=>az?.(a),onBranchChange:a=>aE?.(a),onOpenStatus:()=>{V(),ba(!1)},onSelectRole:()=>y.push("/select-role"),onLogout:b0}),(0,e.jsxs)("section",{className:`app-main ${o||a5?"full":""}`,children:[o?(0,e.jsx)(bV,{items:a$,activeKey:a1,onNavigate:b_,branchName:bJ,online:be,memberImage:bE,memberName:bC,onOpenStatus:V,onOpenAccount:()=>ba(!0)}):(0,e.jsx)(bZ,{activeLabel:bG,workspaceLabel:bJ,memberName:bC,memberRole:bI,memberImage:bE,memberMeta:bD,online:be,realtimeConnected:W,initialSyncDone:T,realtimeStatus:X.status,sidebarHidden:a5,onToggleSidebar:()=>{a5?(a6(!1),a4(!0)):a6(!0)},onOpenStatus:V,onOpenAccount:()=>ba(!0)}),(0,e.jsx)(b2,{activeRoute:a1}),(0,e.jsxs)(b1,{children:[(0,e.jsxs)("div",{hidden:!0,"aria-hidden":"true",style:{display:"none"},children:[(0,e.jsx)(C,{availability:bs.status,moduleLabel:bp,missingCount:bs.missingCount,totalCount:bs.totalCount,online:bs.online,preparing:null!==bg,progress:bi,onRetry:bu}),bg&&(0,e.jsxs)("div",{className:"role-priority-sync-note",role:"status","aria-live":"polite",children:[(0,e.jsx)("span",{className:"role-priority-sync-dot","aria-hidden":"true"}),"Updating ",bg," for offline use…"]})]}),br.length>0&&!b5?(0,e.jsx)("section",{className:"role-module-first-download",role:"status","aria-live":"polite",children:(0,e.jsxs)("div",{className:"role-module-first-download-card",children:[!bm&&bs.online?(0,e.jsx)("span",{className:"role-module-first-spinner","aria-hidden":"true"}):null,(0,e.jsx)("strong",{children:bm?"Unable to prepare this module":bs.online?`Preparing ${bp}…`:"Module not available offline yet"}),(0,e.jsx)("p",{children:bm||(bs.online?"Downloading the records required by this module. Existing school records are not being treated as empty.":"This module has not been downloaded on this device. Reconnect and retry.")}),bi?.total?(0,e.jsxs)("small",{children:[bi.done.toLocaleString()," / ",bi.total.toLocaleString()," records"]}):null,(bm||!bs.online||"failed"===bs.status)&&(0,e.jsx)("button",{type:"button",onClick:bu,disabled:!bs.online,children:"Retry download"})]})}):(0,e.jsx)(bF,{navigate:b_,context:b$})]})]})]}):(0,e.jsx)(cH,{title:"Choose workspace",text:"This portal needs an opened role/workspace session. Return to Select Role and open the role again."}):(0,e.jsx)(cH,{title:"Redirecting to login...",text:"You must sign in to continue."})},cJ=`
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
`;function cK(a){return(0,e.jsx)(o,{children:"branch-workspace"===a.navigationMode?(0,e.jsx)(bR.kp,{children:(0,e.jsx)(cI,{...a})}):(0,e.jsx)(cI,{...a})})}},47811:(a,b,c)=>{"use strict";function d(a){let b=String(a||"").trim().toLowerCase().replace(/[\s-]+/g,"_");return"super_admin"===b||"owner"===b||"school_owner"===b?"Owner":"school_admin"===b||"admin"===b?"Multi-Branch Admin":"branch_admin"===b?"Branch Admin":"platform_team"===b?"Platform Team":"developer"===b?"Developer":"accountant"===b?"Accountant":"teacher"===b?"Teacher":"student"===b?"Student":"parent"===b?"Parent":String(a||"Member").replace(/_/g," ")}c.d(b,{R:()=>d})},47911:(a,b,c)=>{"use strict";c.d(b,{p:()=>f});var d=c(67484),e=c(87745);function f(a,b){let c=(0,d.useMemo)(()=>{var c,d;return c=a,d=b,Array.isArray(c)?{tables:c,accountId:d}:{tables:c?.tables,accountId:c?.accountId??d}},[a,b]),f=(0,d.useCallback)(()=>(0,e.eZ)(c),[c]);return(0,d.useSyncExternalStore)(e.X2,f,e.jB)}},51912:(a,b,c)=>{"use strict";c.d(b,{PY:()=>e,Rh:()=>f,pq:()=>g});let d=["eleeveon_open_workspace","activeMembership","activeMembershipId","activeRole","activeSchoolId","activeBranchId","activeTeacherId","activeStudentId","activeParentId"];function e(){let a={};for(let b of d)try{a[b]=null}catch{a[b]=null}return a}function f(a){}async function g(a){}},78527:(a,b,c)=>{"use strict";c.d(b,{YT:()=>k,dV:()=>j,ns:()=>h,sX:()=>i});var d=c(67484);c(47984),c(28505);var e=c(47911);function f(a){return null==a?"":String(a).trim()}function g(a){return a?String(a.id??[a.role,a.schoolId??a.school?.id??"account",a.branchId??a.schoolBranchId??a.branch?.id??"root",a.teacherId??a.studentId??a.parentId??a.userId??a.appUserId??"portal"].join(":")):""}function h(a,b){let c=(0,e.p)();(0,d.useMemo)(()=>[...a.map(a=>[g(a),a.schoolId??a.school?.id??"",a.branchId??a.schoolBranchId??a.branch?.id??"",a.teacherId??"",a.studentId??"",a.parentId??"",a.userId??a.appUserId??""].join("|")).sort(),[f(b?.id),f(b?.updatedAt),!b?"":f(b.photoMediaId??b.profilePhotoMediaId??b.avatarMediaId??b.imageMediaId??b.pictureMediaId),(!b?null:function(...a){for(let b of a)if("string"==typeof b&&b.trim())return b.trim();return null}(b.resolvedProfileImageUrl,b.resolvedPhotoUrl,b.photoUrl,b.profilePhotoUrl,b.avatarUrl,b.imageUrl,b.pictureUrl,b.photo,b.profilePhoto,b.avatar,b.image,b.picture))??"",String(c)].join("|")].join("::"),[a,b,c]);let[h,i]=(0,d.useState)(new Map);return h}function i(a,b){let c=b.get(g(a));return a.schoolId||a.branchId?c?.schoolName&&c?.branchName?`${c.schoolName} \xb7 ${c.branchName}`:c?.branchName?c.branchName:c?.schoolName?c.schoolName:a.schoolId&&a.branchId?"School branch workspace":a.schoolId?"School workspace":"Branch workspace":"Account level"}function j(a,b){let c=b.get(g(a));if(c?.profileName){if(a.teacherId)return`Teacher \xb7 ${c.profileName}`;if(a.studentId)return`Student \xb7 ${c.profileName}`;if(a.parentId)return`Parent \xb7 ${c.profileName}`}return a.teacherId?"Teacher workspace":a.studentId?"Student workspace":a.parentId?"Parent workspace":"Workspace access"}function k(a,b){return a?b.get(g(a))?.profileImage??null:null}},85435:()=>{},94452:(a,b,c)=>{"use strict";c.d(b,{Ej:()=>d,Yi:()=>e});function d(a){return!1}function e(a){if("u"<typeof document)return!1;let b=Array.from((document.querySelector(".role-shell.branch-workspace-layout .app-content")||document.querySelector(".ba-workspace-wrapper")||document.body).querySelectorAll("table")).find(a=>a.getClientRects().length>0&&!a.closest('[role="dialog"],.ba-modal,.ba-sheet,.excel-import-overlay,.excel-export-overlay,[data-print-exclude]'));if(!b)return!1;let c=Array.from(b.querySelectorAll("thead tr:first-child th"));if(!c.length)return!1;let d=c.map((a,b)=>({node:a,i:b})).filter(({node:a})=>!/^\s*(actions?|controls?)\s*$/i.test(a.textContent||"")&&!a.hasAttribute("data-print-exclude"));if(!d.length)return!1;let e=a=>{let b=a.cloneNode(!0),c=Array.from(a.querySelectorAll("input,select,textarea"));return Array.from(b.querySelectorAll("input,select,textarea")).forEach((a,b)=>{let d=c[b],e=document.createElement("span");e.textContent=d?.type==="checkbox"?d.checked?"Yes":"No":d?.value||"—",a.replaceWith(e)}),b.querySelectorAll("button,svg,[data-print-exclude]").forEach(a=>a.remove()),(b.innerText||b.textContent||"").replace(/\s+/g," ").trim()};return d.map(({node:a,i:b})=>({key:`c${b}`,label:e(a)||`Column ${b+1}`})),Array.from(b.querySelectorAll("tbody tr")).filter(a=>!a.hasAttribute("data-print-exclude")).map(a=>{let b=Array.from(a.children).filter(a=>"TD"===a.tagName||"TH"===a.tagName),c={};return d.forEach(({i:a})=>{let d,f=b[a];if(!f){c[`c${a}`]="";return}let g=e(f),h=f.querySelector("img"),i=h?.currentSrc||h?.getAttribute("src")||"";d=String(i||"").trim(),c[`c${a}`]=(/^(https?:\/\/|blob:|data:image\/(png|jpeg|webp|gif);base64,)/i.test(d)?d:"")?{text:g,image:i}:g}),c}),!1}},97301:(a,b,c)=>{"use strict";c.d(b,{Io:()=>j,TV:()=>i,gr:()=>h,kp:()=>g});var d=c(48249),e=c(67484);let f=(0,e.createContext)(null);function g({children:a}){let[b,c]=(0,e.useState)({}),h=(0,e.useCallback)((a,b)=>(c(c=>({...c,[a]:b})),()=>{c(c=>{if(c[a]!==b)return c;let d={...c};return delete d[a],d})}),[]);return(0,d.jsx)(f.Provider,{value:{handlers:b,register:h},children:a})}function h(){return(0,e.useContext)(f)}function i(a,b){let c=h();c?.register,(0,e.useRef)(b).current=b}function j(a){if("u"<typeof document)return!1;let b=document.querySelector(".role-shell.branch-workspace-layout .app-content");if(!b)return!1;let c=Array.from(b.querySelectorAll('button:not([disabled]), [role="button"][aria-label], [role="button"][title]')),d=c.filter(b=>b.getAttribute("data-branch-action")?.toLowerCase()===a),e=c.filter(b=>{let c;return c=[b.getAttribute("aria-label")||"",b.getAttribute("title")||""].join(" ").trim().toLowerCase(),({add:/\b(add|create|new|enroll)\b/,search:/\b(search|find)\b/,filter:/\b(filter|refine)\b/,print:/\b(print|printing)\b/,more:/\b(more|additional actions|options)\b/})[a].test(c)}),f=c.filter(b=>b.textContent?.trim().toLowerCase()===a),g=1===d.length?d[0]:1===e.length?e[0]:1===f.length?f[0]:null;if(g instanceof HTMLElement)return g.click(),!0;if("search"===a){let a=b.querySelector('input[type="search"], input[aria-label*="Search" i], input[placeholder*="Search" i]');if(a)return a.focus(),!0}return!1}}};
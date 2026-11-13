"use strict";exports.id=3080,exports.ids=[3080],exports.modules={10974:(a,b,c)=>{c.d(b,{A:()=>e});var d=c(48249);function e({progress:a,error:b,onRetry:c,onCancel:g}){let h=b?"Workspace needs attention":a?.title||"Preparing workspace…",i=b||a?.detail||"Loading the essential data required for this workspace.";return(0,d.jsxs)("div",{className:"workspace-bootstrap-overlay",role:"dialog","aria-modal":"true","aria-live":"polite","aria-label":h,children:[(0,d.jsx)("style",{children:f}),(0,d.jsxs)("section",{className:"workspace-bootstrap-card",children:[(0,d.jsx)("div",{className:b?"workspace-bootstrap-icon error":"workspace-bootstrap-spinner",children:b?"!":""}),(0,d.jsx)("span",{children:"Secure workspace startup"}),(0,d.jsx)("h2",{children:h}),(0,d.jsx)("p",{children:i}),!b&&a?.tableName&&(0,d.jsxs)("div",{className:"workspace-bootstrap-table",children:["Processing: ",(0,d.jsx)("strong",{children:a.tableName})]}),!b&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"workspace-bootstrap-percent",children:[(0,d.jsxs)("strong",{children:[Math.max(0,Math.min(100,a?.percent??0)),"%"]}),a?.total?(0,d.jsxs)("span",{children:[(a.current??0).toLocaleString()," / ",a.total.toLocaleString()," records"]}):(0,d.jsx)("span",{children:"Downloading and validating all permitted tables"})]}),(0,d.jsx)("div",{className:"workspace-bootstrap-track",children:(0,d.jsx)("i",{style:{width:`${Math.max(2,Math.min(100,a?.percent??2))}%`}})})]}),b&&(0,d.jsxs)("div",{className:"workspace-bootstrap-actions",children:[g&&(0,d.jsx)("button",{type:"button",className:"ghost",onClick:g,children:"Back"}),c&&(0,d.jsx)("button",{type:"button",onClick:c,children:"Retry"})]}),(0,d.jsx)("small",{children:"Offline records are preserved."})]})]})}let f=`
.workspace-bootstrap-overlay {
  position: fixed;
  inset: 0;
  z-index: 12000;
  display: grid;
  place-items: center;
  padding: 18px;
  background:
    color-mix(in srgb, var(--bg, #f8fafc) 88%, transparent);
  backdrop-filter: blur(14px);
}

.workspace-bootstrap-card {
  width: min(430px, 100%);
  padding: 24px;
  display: grid;
  justify-items: center;
  text-align: center;
  border-radius: 26px;
  border: 1px solid
    color-mix(in srgb, var(--primary-color, #2563eb) 18%, transparent);
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
  box-shadow: 0 28px 80px rgba(15, 23, 42, .16);
}

.workspace-bootstrap-card > span {
  margin-top: 16px;
  color: var(--primary-color, #2563eb);
  font-size: 11px;
  font-weight: 950;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.workspace-bootstrap-card h2 {
  margin: 6px 0;
  font-size: 23px;
  letter-spacing: -.035em;
}

.workspace-bootstrap-card p {
  max-width: 330px;
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.55;
}

.workspace-bootstrap-spinner,
.workspace-bootstrap-icon {
  width: 54px;
  height: 54px;
  border-radius: 19px;
}

.workspace-bootstrap-spinner {
  border: 5px solid
    color-mix(in srgb, var(--primary-color, #2563eb) 17%, transparent);
  border-top-color: var(--primary-color, #2563eb);
  animation: workspace-spin .8s linear infinite;
}

.workspace-bootstrap-icon {
  display: grid;
  place-items: center;
  background: rgba(220, 38, 38, .1);
  color: #dc2626;
  font-size: 25px;
  font-weight: 1000;
}

.workspace-bootstrap-table {
  max-width: 100%;
  margin-top: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--primary-color, #2563eb) 8%, transparent);
  color: var(--muted, #64748b);
  font-size: 10px;
  font-weight: 800;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.workspace-bootstrap-table strong {
  color: var(--text, #0f172a);
}

.workspace-bootstrap-track {
  width: min(250px, 80%);
  height: 5px;
  margin: 19px 0 4px;
  overflow: hidden;
  border-radius: 999px;
  background:
    color-mix(in srgb, var(--primary-color, #2563eb) 12%, transparent);
}

.workspace-bootstrap-track i {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--primary-color, #2563eb);
  transition: width .28s ease;
}

.workspace-bootstrap-percent {
  width: min(250px, 80%);
  margin-top: 18px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
}

.workspace-bootstrap-percent strong {
  color: var(--primary-color, #2563eb);
  font-size: 25px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.workspace-bootstrap-percent span {
  color: var(--muted, #64748b);
  font-size: 10px;
  font-weight: 850;
  text-align: right;
}

.workspace-bootstrap-actions {
  width: 100%;
  margin-top: 18px;
  display: flex;
  justify-content: center;
  gap: 9px;
}

.workspace-bootstrap-actions button {
  min-height: 42px;
  padding: 0 17px;
  border: 0;
  border-radius: 13px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font: inherit;
  font-size: 13px;
  font-weight: 900;
  cursor: pointer;
}

.workspace-bootstrap-actions button.ghost {
  border: 1px solid rgba(148, 163, 184, .28);
  background: transparent;
  color: inherit;
}

.workspace-bootstrap-card small {
  margin-top: 14px;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 750;
}

@keyframes workspace-spin {
  to { transform: rotate(360deg); }
}

@keyframes workspace-progress {
  from { transform: translateX(-115%); }
  to { transform: translateX(340%); }
}
`},30623:(a,b,c)=>{c.d(b,{$N:()=>J,$n:()=>x,F4:()=>N,br:()=>k,xd:()=>O,zO:()=>y});var d=c(79143),e=c(31435),f=c(15585),g=c(61932),h=c(61586),i=c(19056),j=c(4070);let k="eleeveon:workspace-bootstrap-status",l="/sync/workspace-bootstrap",m=new Map;function n(a){return String(a??"").trim()||void 0}function o(a){return n(a)??null}function p(a){let b=String(a||"").trim().toLowerCase().replace(/-/g,"_");return"owner"===b?"super_admin":b}function q(a){return n(a.id)||[p(a.role),o(a.schoolId)||"account",o(a.branchId)||"root",o(a.teacherId)||o(a.studentId)||o(a.parentId)||"profile"].join(":")}function r(a,b){return[a,q(b),p(b.role),o(b.schoolId)||"school-none",o(b.branchId)||"branch-none",o(b.teacherId)||"teacher-none",o(b.studentId)||"student-none",o(b.parentId)||"parent-none"].join(":")}function s(a,b){return["eleeveon_workspace_bootstrap",a,q(b),o(b.schoolId)||"school-none",o(b.branchId)||"branch-none"].join(":")}function t(a,b){return`eleeveon_workspace_bootstrap_status:${r(a,b)}`}function u(a,b){return["eleeveon_cached_settings",a,o(b.schoolId)||"school-none",o(b.branchId)||"branch-none"].join(":")}function v(a,b){}function w(a,b){let c=(s(a,b),null);return c?.completedAt&&3===c.bootstrapSchemaVersion?c:null}function x(a){let b=(0,e.PU)();if(!b)return null;let c=(t(b,a),null),d=w(b,a);return c?.schemaVersion===3?c:d?{status:"complete",accountId:b,membershipId:q(a),schemaVersion:3,updatedAt:d.completedAt,completedAt:d.completedAt,processed:0,includedTables:d.includedTables,tablesWithRecords:d.tablesWithRecords,tableCounts:d.tableCounts,bootstrapRevision:d.bootstrapRevision}:null}function y(a,b){let c=(0,e.PU)();if(!c)return"not_downloaded";let d=w(c,a);if(d?.includedTables?.includes(b))return"complete";let f=x(a);return f&&"complete"!==f.status?f.status:"not_downloaded"}function z(a,b){if((0,e.PU)()!==a)throw Error("The active account changed during workspace download.");if(b.accountId&&n(b.accountId)!==a)throw Error("Workspace membership does not belong to this account.")}async function A(a,b){if(!b)return null;try{let c=await a.get(b);if(c)return c}catch{}try{return await a.where("id").equals(b).first()||null}catch{return(await a.toArray()).find(a=>String(a.id||"")===b)||null}}async function B(a,b,c){let d=n(c.localId||c.entityId||c.payload?.id||c.id),e=await A(b,d);if(e)return e;let f=n(c.cloudId||c.payload?.cloudId);if(f)try{let a=await b.where("cloudId").equals(f).first();if(a)return a}catch{let a=(await b.toArray()).find(a=>String(a.cloudId||"")===f);if(a)return a}if("mediaAssets"===a){let a=n(c.payload?.ownerIdentityKey);if(a)try{let d=await b.where("ownerIdentityKey").equals(a).first();if(d&&d.accountId===c.accountId)return d}catch{let d=(await b.toArray()).find(b=>b.accountId===c.accountId&&b.ownerIdentityKey===a);if(d)return d}}return null}async function C(a,b,c){let f=d.db[a.tableName];if(!f)return!1;let g=await B(a.tableName,f,a),h=n(g?.id||a.localId||a.entityId||a.payload?.id||a.id);if(g?.accountId&&String(g.accountId)!==b)throw Error("A matching local record belongs to another account.");if(!h)throw Error(`Workspace record for "${a.tableName}" has no permanent ID.`);if(g?.synced===e.d9.PENDING||g?.synced===e.d9.ERROR||g?.synced===e.d9.CONFLICT)return!1;let i={...function(a,b){let c={...a.payload||{}};for(let a of["blob","file","originalFile","optimizedFile","localBlob","localBlobData","previewUrl","objectUrl","localObjectUrl","dataUrl","base64"])delete c[a];return c.id=b,c}(a,h),id:h,cloudId:n(a.cloudId||a.payload?.cloudId)??void 0,accountId:b,deviceId:a.deviceId||a.payload?.deviceId||c,version:Number(a.version??a.payload?.version??1),updatedAt:Number(a.updatedAt??a.payload?.updatedAt??Date.now()),isDeleted:!!(a.isDeleted||a.payload?.isDeleted),synced:e.d9.SYNCED,syncError:void 0},j=Number(g?.version||0),k=Number(g?.updatedAt||0);return(!g||!(j>i.version)&&(j!==i.version||!(k>i.updatedAt)))&&(await f.put(i),!0)}async function D(a,b){if(!a?.tableName||!(0,g.Vy)(a.tableName))return!1;let c=d.db[a.tableName];if(!c)return!1;if(a.accountId&&String(a.accountId)!==b)throw Error("A platform cache record belongs to a different account.");let e={...a.payload||{}};if(e.accountId&&String(e.accountId)!==b&&"subscriptionPlans"!==a.tableName&&"commercialPlans"!==a.tableName)throw Error("A platform cache payload belongs to a different account.");let f=n(a.id||e.id||("accounts"===a.tableName?b:null));return!!f&&((e.id=f,e.accountId||"subscriptionPlans"===a.tableName||(e.accountId=b),a.isDeleted)?await c.delete(f):await c.put(e),!0)}async function E(a,b){let c=(0,j.yG)(p(b.role));if("platform"===c||"account"===c)return!0;let e=o(b.schoolId),f=o(b.branchId);if(!e)return!1;let g=(await d.db.schools?.toArray?.()||[]).some(b=>b.accountId===a&&!b.isDeleted&&String(b.id||b.entityId||"")===e);if("school"===c)return g;if(!g||!f)return!1;let h=d.db.branches,i=d.db.schoolBranchSettings;if(!h||!i)return!1;let[k,l]=await Promise.all([h.toArray(),i.toArray()]);return k.some(b=>b.accountId===a&&!b.isDeleted&&String(b.id||b.entityId||"")===f&&String(b.schoolId||"")===e)&&l.some(b=>b.accountId===a&&!b.isDeleted&&String(b.schoolId||"")===e&&String(b.branchId||"")===f)}async function F(a,b){let c=p(b.role),e=(0,j.yG)(c),f=o(b.schoolId),g=o(b.branchId),[h,i,k]=await Promise.all([d.db.schools?.toArray?.()||[],d.db.branches?.toArray?.()||[],d.db.schoolBranchSettings?.toArray?.()||[]]),l=f&&h.find(b=>b.accountId===a&&!b.isDeleted&&String(b.id||b.entityId||"")===f)||null,m=g&&i.find(b=>b.accountId===a&&!b.isDeleted&&String(b.id||b.entityId||"")===g&&(!f||String(b.schoolId||"")===f))||null,n="branch"===e&&f&&g&&k.filter(b=>b.accountId===a&&!b.isDeleted&&String(b.schoolId||"")===f&&String(b.branchId||"")===g).sort((a,b)=>Number(b.updatedAt||0)-Number(a.updatedAt||0))[0]||null,q=(u(a,b),null),r=n||(q&&q.appearanceScope===e?q.settings:null);return{appearanceScope:e,school:l,branch:m,settings:r,workspace:{appearanceScope:e,school:l,branch:m,settings:r,academicPeriod:null}}}function G(a){return["super_admin","admin","school_admin","branch_admin","accountant"].includes(a)}async function H(a){let b=(0,e.vM)(),c=w(b,a);if(!c)return!1;if(G(p(a.role))){let a=new Set(c.includedTables||[]);if(!g.vG.every(b=>a.has(b)))return!1}return E(b,a)}async function I(a,b,c){let e=new Set,f=d.db.syncQuarantine;for(let b of(f&&e.add(f),a)){if("quarantine"===b.kind)continue;let a=b.value.tableName;("record"===b.kind?(0,g.k)(a):(0,g.Vy)(a))&&d.db[a]&&e.add(d.db[a])}let i=0,j=0,k=0,l=new Set;return e.size&&await d.db.transaction("rw",[...e],async()=>{for(let d of a)if("quarantine"===d.kind){let a=d.value;await (0,h.RP)({source:"pull",accountId:b,tableName:a.record?.tableName,entityId:a.record?.entityId,id:a.record?.id,reason:a.reason||"Backend quarantined a malformed record.",payload:a.record||a}),k++}else if("record"===d.kind){let a=d.value,e=(0,h.vL)(a,b);if(!e.ok){await (0,h.RP)({source:"pull",accountId:b,tableName:a.tableName,entityId:a.entityId,id:a.id,reason:(0,h.q4)(e.issues),payload:a}),k++;continue}(0,g.k)(a.tableName)&&await C(a,b,c)&&(i++,l.add(a.tableName))}else"cache"===d.kind&&await D(d.value,b)&&(j++,l.add(d.value.tableName))}),{applied:i,cacheApplied:j,quarantined:k,changedTables:l}}function J(a,b){let c=(0,e.vM)(),d=r(c,a),f=m.get(d);if(f)return f;let g=K(c,a,b);return m.set(d,g),g.finally(()=>{m.get(d)===g&&m.delete(d)}).catch(()=>void 0),g}async function K(a,b,c){let d=(0,e.IP)(),h=p(b.role);if(z(a,b),c?.onProgress?.({stage:"checking-cache",title:"Checking saved workspace…",detail:"Checking complete offline records and any interrupted download.",percent:8}),c?.allowCached!==!1&&!c?.force&&await H(b)){let d=await F(a,b),e=w(a,b);return c?.onProgress?.({stage:"ready",title:"Workspace ready",detail:"Using the previously completed offline workspace.",percent:100}),{ready:!0,fromCache:!0,applied:0,cacheApplied:0,quarantined:0,changedTables:[],completedAt:e?.completedAt||Date.now(),bootstrapRevision:e?.bootstrapRevision,...d}}if("u">typeof navigator&&!navigator.onLine)throw Error("The workspace download is incomplete and the device is offline.");let k=Date.now(),m=(c?.force||t(a,b),null),r=!!(m&&3===m.schemaVersion&&m.accountId===a&&m.membershipId===q(b)&&150===m.pageSize&&m.nextCursor&&m.bootstrapRevision&&Number.isSafeInteger(m.nextOffset)&&(m.nextOffset??0)>0&&"complete"!==m.status),x=r&&m?.nextCursor||null,y=r?m?.bootstrapRevision:void 0,A=r&&m?.processed||0,B=r&&m?.total||0,C=r&&m?.applied||0,D=r&&m?.cacheApplied||0,J=r&&m?.quarantined||0,K=r&&m?.pagesCommitted||0,L=r&&m?.nextOffset||0,M=r&&m?.includedTables||[],N=r?{...m?.tableCounts||{}}:{},O=new Set(r&&m?.tablesWithRecords||[]),P=new Set(r&&m?.changedTables||[]),Q=0,R=null,S=(c,d)=>{var e;e={status:c,accountId:a,membershipId:q(b),schemaVersion:3,startedAt:r&&m?.startedAt||k,updatedAt:Date.now(),processed:A,total:B||void 0,nextCursor:x,bootstrapRevision:y,pageSize:150,nextOffset:L,pagesCommitted:K,applied:C,cacheApplied:D,quarantined:J,includedTables:M,tablesWithRecords:[...O],tableCounts:N,changedTables:[...P],...d?{error:d}:{}},t(a,b)},T=()=>{x=null,y=void 0,A=0,B=0,C=0,D=0,J=0,K=0,L=0,M=[],N={},O=new Set,P.clear(),R=null,S("downloading")};try{S("downloading");for(let e=0;e<1e5;){let k;if(z(a,b),"u">typeof navigator&&!navigator.onLine)throw Error("Internet connection was lost. Committed pages are saved for later resume.");c?.onProgress?.({stage:"requesting",title:"Downloading workspace records…",detail:`Requesting page ${K+1} of your authorized workspace.`,percent:Math.min(95,B?Math.round(18+75*A/B):18),current:A,total:B||void 0});try{k=await (0,f.I)(l,{method:"POST",body:{accountId:a,deviceId:d,membershipId:n(b.id),role:h,schoolId:o(b.schoolId),branchId:o(b.branchId),teacherId:o(b.teacherId),studentId:o(b.studentId),parentId:o(b.parentId),pageSize:150,...x?{cursor:x}:{}}})}catch(a){if(x&&(a instanceof Error?a.message:String(a)).includes("WORKSPACE_SNAPSHOT_CHANGED")&&Q<2){Q+=1,T();continue}throw a}if(z(a,b),!k?.ok||k.accountId!==a)throw Error("The server returned data for a different account.");if(p(k.role)!==h)throw Error("The server returned a different workspace role.");if(k.truncated||3!==k.bootstrapSchemaVersion)throw Error("The server returned an incomplete or incompatible workspace bundle.");if(k.membershipId&&n(b.id)&&k.membershipId!==n(b.id))throw Error("The server returned a different membership.");for(let a of["schoolId","branchId","teacherId","studentId","parentId"])if(o(k[a])&&o(b[a])&&o(k[a])!==o(b[a]))throw Error(`The server response does not match ${a}.`);let m=k.bootstrapRevision||k.revision;if(!m)throw Error("Workspace response has no snapshot revision.");if(y&&m!==y){if(Q<2){Q+=1,T();continue}throw Error("WORKSPACE_SNAPSHOT_CHANGED: Workspace changed during download.")}let r=k.includedTables||k.requiredTables||[];if(!Array.isArray(r)||!r.length)throw Error("Workspace response contains no table coverage information.");if(!1===k.allRoleTablesRequested)throw Error("A filtered table response cannot complete a full offline workspace.");if(M.length&&(M.length!==r.length||M.some(a=>!r.includes(a))))throw Error("Workspace table coverage changed between pages.");if(G(h)){let a=new Set(r),b=g.vG.filter(b=>!a.has(b));if(b.length)throw Error(`Workspace response omitted required tables: ${b.join(", ")}.`)}if(void 0!==k.pageOffset&&k.pageOffset!==L)throw Error("Workspace page offset does not match the committed checkpoint.");let t=!0===k.hasMore,w=void 0!==k.hasMore;if(t&&(!k.nextCursor||!0===k.completed))throw Error("The workspace page did not provide a valid continuation cursor.");if(w&&!t&&(!1===k.completed||k.nextCursor))throw Error("The final workspace page contains inconsistent completion metadata.");if(!w&&!1===k.completed)throw Error("The server returned an incomplete legacy workspace bundle.");if(t&&!(k.records?.length||k.quarantineRecords?.length))throw Error("Server returned a non-final empty page; download cannot advance.");let H=Number(k.totalRecords);0===K&&Number.isSafeInteger(H)&&H>=0&&(B=H),y=m,M=[...r],R={...k.workspace||{},appearanceScope:k.workspace?.appearanceScope||(0,j.yG)(h),school:k.school??k.workspace?.school??null,branch:k.branch??k.workspace?.branch??null,settings:k.schoolBranchSettings??k.workspace?.settings??null};let U=[...(k.quarantineRecords||[]).map(a=>({kind:"quarantine",value:a})),...(k.records||[]).map(a=>({kind:"record",value:a})),...(k.cacheRecords||[]).map(a=>({kind:"cache",value:a}))],V=0,W=0,X=0,Y=0,Z=new Set;for(let e=0;e<U.length;e+=150){z(a,b);let f=U.slice(e,e+150),g=await I(f,a,d);for(let a of(Y+=f.length,V+=g.applied,W+=g.cacheApplied,X+=g.quarantined,g.changedTables))Z.add(a);g.changedTables.size&&(0,i.P5)({accountId:a,changedTables:[...g.changedTables]}),c?.onProgress?.({stage:"applying",title:"Saving offline records…",detail:`Saved ${A+Y} of ${Math.max(B,A+Y)} items`,current:A+Y,total:B||void 0,percent:Math.min(96,Math.round(20+76*(A+Y)/Math.max(1,B))),tableName:f.reduce((a,b)=>a||("quarantine"===b.kind?void 0:b.value.tableName),void 0)}),e+150<U.length&&await new Promise(a=>setTimeout(a,0))}for(let c of(z(a,b),A+=Y,C+=V,D+=W,J+=X+Math.max(0,Number(k.quarantinedCount||0)-(k.quarantineRecords||[]).length),Z))P.add(c);for(let[a,b]of Object.entries(k.tableCounts||{}))N[a]=(N[a]||0)+Number(b||0);for(let a of k.tablesWithRecords||[])O.add(a);for(let a of Object.keys(k.tableCounts||{}))Number(k.tableCounts?.[a]||0)>0&&O.add(a);if(K+=1,L+=(k.records||[]).length+(k.quarantineRecords||[]).length,x=t&&k.nextCursor||null,S(t?"partial":"downloading"),e+=1,!t){if(B&&A!==B)throw Error(`Workspace transfer incomplete: received ${A} of ${B} records.`);if(J>0)throw Error(`${J} invalid records were quarantined; workspace not marked complete.`);if(z(a,b),!await E(a,b))throw Error("The downloaded workspace lacks required school, branch, or settings data.");let d=await F(a,b),e=Date.now();z(a,b),s(a,b),q(b),o(b.schoolId),o(b.branchId),[...O],[...P];let f={accountId:a,schoolId:o(b.schoolId),branchId:o(b.branchId),role:h,appearanceScope:d.appearanceScope,settings:d.settings,cachedAt:e,bootstrapRevision:y};return v(u(a,b),f),v("eleeveon_current_workspace_settings",f),S("complete"),c?.onProgress?.({stage:"ready",title:"Workspace ready",detail:"All permitted workspace pages are saved for offline use.",percent:100,current:A,total:B||A}),{ready:!0,fromCache:!1,applied:C,cacheApplied:D,quarantined:J,changedTables:[...P],bootstrapRevision:y,completedAt:e,appearanceScope:d.appearanceScope,school:d.school,branch:d.branch,settings:d.settings,workspace:{...R||{},...d.workspace,academicPeriod:R?.academicPeriod||null}}}await new Promise(a=>setTimeout(a,0))}throw Error("Workspace download exceeded its maximum page count.")}catch(a){throw S("failed",a instanceof Error?a.message:String(a)),a}}let L=new Map;function M(a,b,c){return`eleeveon_workspace_priority_v1:${encodeURIComponent(r(a,b))}:${c.join(",")}`}function N(a,b){let c=(0,e.PU)();if(!c)return!1;let d=[...new Set(b)].filter(g.k).sort();if(!d.length)return!0;let f=w(c,a);if(d.every(a=>f?.includedTables?.includes(a)))return!0;let h=(M(c,a,d),null);return!!(h&&h.accountId===c&&h.identity===r(c,a)&&3===h.schemaVersion&&d.every(a=>h.tables.includes(a))&&h.completedAt)}function O(a,b,c={}){let d=(0,e.vM)(),h=[...new Set(b)].filter(g.k).sort();if(!h.length)return Promise.resolve();let j=M(d,a,h),k=L.get(j);if(k)return k;let m=(async()=>{if(z(d,a),N(a,h)||"u">typeof navigator&&!navigator.onLine)return;let b=(0,e.IP)(),g=null,j=null,k=0,m=null,q=0;for(let e=0;e<1e5;e++){if(z(d,a),"u">typeof navigator&&!navigator.onLine)return;let s=await (0,f.I)(l,{method:"POST",body:{accountId:d,deviceId:b,membershipId:n(a.id),role:p(a.role),schoolId:o(a.schoolId),branchId:o(a.branchId),teacherId:o(a.teacherId),studentId:o(a.studentId),parentId:o(a.parentId),tableNames:h,pageSize:150,...g?{cursor:g}:{}}});if(z(d,a),!s?.ok||s.accountId!==d||p(s.role)!==p(a.role)||3!==s.bootstrapSchemaVersion||s.truncated)throw Error("Priority bootstrap identity or schema validation failed.");if(n(a.id)&&s.membershipId!==n(a.id))throw Error("Priority bootstrap returned another membership.");for(let b of["schoolId","branchId","teacherId","studentId","parentId"])if(o(s[b])&&o(a[b])&&o(s[b])!==o(a[b]))throw Error(`Priority bootstrap scope mismatch: ${b}.`);let t=s.includedTables||s.requiredTables||[],u=new Set(h),v=new Set(t);if(h.some(a=>!v.has(a))||t.some(a=>!u.has(a)))throw Error("Priority bootstrap returned unexpected table coverage.");let w=s.bootstrapRevision||s.revision;if(!w||j&&j!==w)throw Error("WORKSPACE_SNAPSHOT_CHANGED: Retry active-module download.");if(j=w,void 0!==s.pageOffset&&s.pageOffset!==k)throw Error("Priority bootstrap page offset mismatch.");0===e&&Number.isSafeInteger(s.totalRecords)&&Number(s.totalRecords)>=0&&(m=Number(s.totalRecords));let x=[...(s.quarantineRecords||[]).map(a=>({kind:"quarantine",value:a})),...(s.records||[]).map(a=>({kind:"record",value:a})),...(s.cacheRecords||[]).map(a=>({kind:"cache",value:a}))];for(let c=0;c<x.length;c+=150){z(d,a);let e=await I(x.slice(c,c+150),d,b);q+=e.quarantined,e.changedTables.size&&(0,i.P5)({accountId:d,changedTables:[...e.changedTables]})}if(q+=Math.max(0,Number(s.quarantinedCount||0)-(s.quarantineRecords||[]).length),k+=(s.records||[]).length+(s.quarantineRecords||[]).length,c.onProgress?.(k,m??k),!s.hasMore){if(!1===s.completed||s.nextCursor||q>0||null!==m&&k+(s.cacheRecords||[]).length<m&&0===e)throw Error("Priority bootstrap did not complete safely.");z(d,a),r(d,a),Date.now();return}if(!s.nextCursor||!x.length)throw Error("Priority bootstrap paging stopped prematurely.");g=s.nextCursor,await new Promise(a=>setTimeout(a,0))}throw Error("Priority bootstrap exceeded maximum pages.")})();return L.set(j,m),m.finally(()=>{L.get(j)===m&&L.delete(j)}).catch(()=>void 0),m}}};
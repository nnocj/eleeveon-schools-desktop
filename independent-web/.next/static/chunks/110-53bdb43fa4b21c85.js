"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[110],{17933:(e,t,r)=>{r.d(t,{$N:()=>O,$n:()=>S,F4:()=>$,br:()=>l,xd:()=>V,zO:()=>N});var o=r(53196),a=r(31685),n=r(16311),i=r(86214),s=r(9686),c=r(45531),d=r(53280);let l="eleeveon:workspace-bootstrap-status",p="/sync/workspace-bootstrap",u=new Map;function h(e){return String(e??"").trim()||void 0}function b(e){return h(e)??null}function f(e){let t=String(e||"").trim().toLowerCase().replace(/-/g,"_");return"owner"===t?"super_admin":t}function m(e){return h(e.id)||[f(e.role),b(e.schoolId)||"account",b(e.branchId)||"root",b(e.teacherId)||b(e.studentId)||b(e.parentId)||"profile"].join(":")}function w(e,t){return[e,m(t),f(t.role),b(t.schoolId)||"school-none",b(t.branchId)||"branch-none",b(t.teacherId)||"teacher-none",b(t.studentId)||"student-none",b(t.parentId)||"parent-none"].join(":")}function g(e,t){return["eleeveon_workspace_bootstrap",e,m(t),b(t.schoolId)||"school-none",b(t.branchId)||"branch-none"].join(":")}function I(e,t){return`eleeveon_workspace_bootstrap_status:${w(e,t)}`}function y(e,t){return["eleeveon_cached_settings",e,b(t.schoolId)||"school-none",b(t.branchId)||"branch-none"].join(":")}function v(e){try{let t=window.localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}}function k(e,t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}}function x(e,t){let r=v(g(e,t));return r?.completedAt&&3===r.bootstrapSchemaVersion?r:null}function S(e){let t=(0,a.PU)();if(!t)return null;let r=v(I(t,e)),o=x(t,e);return r?.schemaVersion===3?r:o?{status:"complete",accountId:t,membershipId:m(e),schemaVersion:3,updatedAt:o.completedAt,completedAt:o.completedAt,processed:0,includedTables:o.includedTables,tablesWithRecords:o.tablesWithRecords,tableCounts:o.tableCounts,bootstrapRevision:o.bootstrapRevision}:null}function N(e,t){let r=(0,a.PU)();if(!r)return"not_downloaded";let o=x(r,e);if(o?.includedTables?.includes(t))return"complete";let n=S(e);return n&&"complete"!==n.status?n.status:"not_downloaded"}function E(e,t){if((0,a.PU)()!==e)throw Error("The active account changed during workspace download.");if(t.accountId&&h(t.accountId)!==e)throw Error("Workspace membership does not belong to this account.");let r=v("eleeveon_open_workspace");if(r&&w(e,r.membership||{id:r.membershipId,role:r.role,schoolId:r.schoolId,branchId:r.branchId,teacherId:r.teacherId,studentId:r.studentId,parentId:r.parentId})!==w(e,t))throw Error("The selected role or workspace changed during download.")}async function A(e,t){if(!t)return null;try{let r=await e.get(t);if(r)return r}catch{}try{return await e.where("id").equals(t).first()||null}catch{return(await e.toArray()).find(e=>String(e.id||"")===t)||null}}async function P(e,t,r){let o=h(r.localId||r.entityId||r.payload?.id||r.id),a=await A(t,o);if(a)return a;let n=h(r.cloudId||r.payload?.cloudId);if(n)try{let e=await t.where("cloudId").equals(n).first();if(e)return e}catch{let e=(await t.toArray()).find(e=>String(e.cloudId||"")===n);if(e)return e}if("mediaAssets"===e){let e=h(r.payload?.ownerIdentityKey);if(e)try{let o=await t.where("ownerIdentityKey").equals(e).first();if(o&&o.accountId===r.accountId)return o}catch{let o=(await t.toArray()).find(t=>t.accountId===r.accountId&&t.ownerIdentityKey===e);if(o)return o}}return null}async function R(e,t,r){let n=o.db[e.tableName];if(!n)return!1;let i=await P(e.tableName,n,e),s=h(i?.id||e.localId||e.entityId||e.payload?.id||e.id);if(i?.accountId&&String(i.accountId)!==t)throw Error("A matching local record belongs to another account.");if(!s)throw Error(`Workspace record for "${e.tableName}" has no permanent ID.`);if(i?.synced===a.d9.PENDING||i?.synced===a.d9.ERROR||i?.synced===a.d9.CONFLICT)return!1;let c={...function(e,t){let r={...e.payload||{}};for(let e of["blob","file","originalFile","optimizedFile","localBlob","localBlobData","previewUrl","objectUrl","localObjectUrl","dataUrl","base64"])delete r[e];return r.id=t,r}(e,s),id:s,cloudId:h(e.cloudId||e.payload?.cloudId)??void 0,accountId:t,deviceId:e.deviceId||e.payload?.deviceId||r,version:Number(e.version??e.payload?.version??1),updatedAt:Number(e.updatedAt??e.payload?.updatedAt??Date.now()),isDeleted:!!(e.isDeleted||e.payload?.isDeleted),synced:a.d9.SYNCED,syncError:void 0},d=Number(i?.version||0),l=Number(i?.updatedAt||0);return(!i||!(d>c.version)&&(d!==c.version||!(l>c.updatedAt)))&&(await n.put(c),!0)}async function T(e,t){if(!e?.tableName||!(0,i.Vy)(e.tableName))return!1;let r=o.db[e.tableName];if(!r)return!1;if(e.accountId&&String(e.accountId)!==t)throw Error("A platform cache record belongs to a different account.");let a={...e.payload||{}};if(a.accountId&&String(a.accountId)!==t&&"subscriptionPlans"!==e.tableName&&"commercialPlans"!==e.tableName)throw Error("A platform cache payload belongs to a different account.");let n=h(e.id||a.id||("accounts"===e.tableName?t:null));return!!n&&((a.id=n,a.accountId||"subscriptionPlans"===e.tableName||(a.accountId=t),e.isDeleted)?await r.delete(n):await r.put(a),!0)}async function C(e,t){let r=(0,d.yG)(f(t.role));if("platform"===r||"account"===r)return!0;let a=b(t.schoolId),n=b(t.branchId);if(!a)return!1;let i=(await o.db.schools?.toArray?.()||[]).some(t=>t.accountId===e&&!t.isDeleted&&String(t.id||t.entityId||"")===a);if("school"===r)return i;if(!i||!n)return!1;let s=o.db.branches,c=o.db.schoolBranchSettings;if(!s||!c)return!1;let[l,p]=await Promise.all([s.toArray(),c.toArray()]);return l.some(t=>t.accountId===e&&!t.isDeleted&&String(t.id||t.entityId||"")===n&&String(t.schoolId||"")===a)&&p.some(t=>t.accountId===e&&!t.isDeleted&&String(t.schoolId||"")===a&&String(t.branchId||"")===n)}async function j(e,t){let r=f(t.role),a=(0,d.yG)(r),n=b(t.schoolId),i=b(t.branchId),[s,c,l]=await Promise.all([o.db.schools?.toArray?.()||[],o.db.branches?.toArray?.()||[],o.db.schoolBranchSettings?.toArray?.()||[]]),p=n&&s.find(t=>t.accountId===e&&!t.isDeleted&&String(t.id||t.entityId||"")===n)||null,u=i&&c.find(t=>t.accountId===e&&!t.isDeleted&&String(t.id||t.entityId||"")===i&&(!n||String(t.schoolId||"")===n))||null,h="branch"===a&&n&&i&&l.filter(t=>t.accountId===e&&!t.isDeleted&&String(t.schoolId||"")===n&&String(t.branchId||"")===i).sort((e,t)=>Number(t.updatedAt||0)-Number(e.updatedAt||0))[0]||null,m=v(y(e,t)),w=h||(m&&m.appearanceScope===a?m.settings:null);return{appearanceScope:a,school:p,branch:u,settings:w,workspace:{appearanceScope:a,school:p,branch:u,settings:w,academicPeriod:null}}}function q(e){return["super_admin","admin","school_admin","branch_admin","accountant"].includes(e)}async function _(e){let t=(0,a.vM)(),r=x(t,e);if(!r)return!1;if(q(f(e.role))){let e=new Set(r.includedTables||[]);if(!i.vG.every(t=>e.has(t)))return!1}return C(t,e)}async function D(e,t,r){let a=new Set,n=o.db.syncQuarantine;for(let t of(n&&a.add(n),e)){if("quarantine"===t.kind)continue;let e=t.value.tableName;("record"===t.kind?(0,i.k)(e):(0,i.Vy)(e))&&o.db[e]&&a.add(o.db[e])}let c=0,d=0,l=0,p=new Set;return a.size&&await o.db.transaction("rw",[...a],async()=>{for(let o of e)if("quarantine"===o.kind){let e=o.value;await (0,s.RP)({source:"pull",accountId:t,tableName:e.record?.tableName,entityId:e.record?.entityId,id:e.record?.id,reason:e.reason||"Backend quarantined a malformed record.",payload:e.record||e}),l++}else if("record"===o.kind){let e=o.value,a=(0,s.vL)(e,t);if(!a.ok){await (0,s.RP)({source:"pull",accountId:t,tableName:e.tableName,entityId:e.entityId,id:e.id,reason:(0,s.q4)(a.issues),payload:e}),l++;continue}(0,i.k)(e.tableName)&&await R(e,t,r)&&(c++,p.add(e.tableName))}else"cache"===o.kind&&await T(o.value,t)&&(d++,p.add(o.value.tableName))}),{applied:c,cacheApplied:d,quarantined:l,changedTables:p}}function O(e,t){let r=(0,a.vM)(),o=w(r,e),n=u.get(o);if(n)return n;let i=W(r,e,t);return u.set(o,i),i.finally(()=>{u.get(o)===i&&u.delete(o)}).catch(()=>void 0),i}async function W(e,t,r){let o=(0,a.IP)(),s=f(t.role);if(E(e,t),r?.onProgress?.({stage:"checking-cache",title:"Checking saved workspace…",detail:"Checking complete offline records and any interrupted download.",percent:8}),r?.allowCached!==!1&&!r?.force&&await _(t)){let o=await j(e,t),a=x(e,t);return r?.onProgress?.({stage:"ready",title:"Workspace ready",detail:"Using the previously completed offline workspace.",percent:100}),{ready:!0,fromCache:!0,applied:0,cacheApplied:0,quarantined:0,changedTables:[],completedAt:a?.completedAt||Date.now(),bootstrapRevision:a?.bootstrapRevision,...o}}if("u">typeof navigator&&!navigator.onLine)throw Error("The workspace download is incomplete and the device is offline.");let u=Date.now(),w=r?.force?null:v(I(e,t)),S=!!(w&&3===w.schemaVersion&&w.accountId===e&&w.membershipId===m(t)&&150===w.pageSize&&w.nextCursor&&w.bootstrapRevision&&Number.isSafeInteger(w.nextOffset)&&(w.nextOffset??0)>0&&"complete"!==w.status),N=S&&w?.nextCursor||null,A=S?w?.bootstrapRevision:void 0,P=S&&w?.processed||0,R=S&&w?.total||0,T=S&&w?.applied||0,O=S&&w?.cacheApplied||0,W=S&&w?.quarantined||0,z=S&&w?.pagesCommitted||0,M=S&&w?.nextOffset||0,$=S&&w?.includedTables||[],V=S?{...w?.tableCounts||{}}:{},L=new Set(S&&w?.tablesWithRecords||[]),U=new Set(S&&w?.changedTables||[]),G=0,B=null,H=(r,o)=>{var a;a={status:r,accountId:e,membershipId:m(t),schemaVersion:3,startedAt:S&&w?.startedAt||u,updatedAt:Date.now(),processed:P,total:R||void 0,nextCursor:N,bootstrapRevision:A,pageSize:150,nextOffset:M,pagesCommitted:z,applied:T,cacheApplied:O,quarantined:W,includedTables:$,tablesWithRecords:[...L],tableCounts:V,changedTables:[...U],...o?{error:o}:{}},k(I(e,t),a),window.dispatchEvent(new CustomEvent(l,{detail:{accountId:e,membershipId:m(t),status:a.status,processed:a.processed,total:a.total}}))},K=()=>{N=null,A=void 0,P=0,R=0,T=0,O=0,W=0,z=0,M=0,$=[],V={},L=new Set,U.clear(),B=null,H("downloading")};try{H("downloading");for(let a=0;a<1e5;){let l;if(E(e,t),"u">typeof navigator&&!navigator.onLine)throw Error("Internet connection was lost. Committed pages are saved for later resume.");r?.onProgress?.({stage:"requesting",title:"Downloading workspace records…",detail:`Requesting page ${z+1} of your authorized workspace.`,percent:Math.min(95,R?Math.round(18+75*P/R):18),current:P,total:R||void 0});try{l=await (0,n.I)(p,{method:"POST",body:{accountId:e,deviceId:o,membershipId:h(t.id),role:s,schoolId:b(t.schoolId),branchId:b(t.branchId),teacherId:b(t.teacherId),studentId:b(t.studentId),parentId:b(t.parentId),pageSize:150,...N?{cursor:N}:{}}})}catch(e){if(N&&(e instanceof Error?e.message:String(e)).includes("WORKSPACE_SNAPSHOT_CHANGED")&&G<2){G+=1,K();continue}throw e}if(E(e,t),!l?.ok||l.accountId!==e)throw Error("The server returned data for a different account.");if(f(l.role)!==s)throw Error("The server returned a different workspace role.");if(l.truncated||3!==l.bootstrapSchemaVersion)throw Error("The server returned an incomplete or incompatible workspace bundle.");if(l.membershipId&&h(t.id)&&l.membershipId!==h(t.id))throw Error("The server returned a different membership.");for(let e of["schoolId","branchId","teacherId","studentId","parentId"])if(b(l[e])&&b(t[e])&&b(l[e])!==b(t[e]))throw Error(`The server response does not match ${e}.`);let u=l.bootstrapRevision||l.revision;if(!u)throw Error("Workspace response has no snapshot revision.");if(A&&u!==A){if(G<2){G+=1,K();continue}throw Error("WORKSPACE_SNAPSHOT_CHANGED: Workspace changed during download.")}let w=l.includedTables||l.requiredTables||[];if(!Array.isArray(w)||!w.length)throw Error("Workspace response contains no table coverage information.");if(!1===l.allRoleTablesRequested)throw Error("A filtered table response cannot complete a full offline workspace.");if($.length&&($.length!==w.length||$.some(e=>!w.includes(e))))throw Error("Workspace table coverage changed between pages.");if(q(s)){let e=new Set(w),t=i.vG.filter(t=>!e.has(t));if(t.length)throw Error(`Workspace response omitted required tables: ${t.join(", ")}.`)}if(void 0!==l.pageOffset&&l.pageOffset!==M)throw Error("Workspace page offset does not match the committed checkpoint.");let I=!0===l.hasMore,v=void 0!==l.hasMore;if(I&&(!l.nextCursor||!0===l.completed))throw Error("The workspace page did not provide a valid continuation cursor.");if(v&&!I&&(!1===l.completed||l.nextCursor))throw Error("The final workspace page contains inconsistent completion metadata.");if(!v&&!1===l.completed)throw Error("The server returned an incomplete legacy workspace bundle.");if(I&&!(l.records?.length||l.quarantineRecords?.length))throw Error("Server returned a non-final empty page; download cannot advance.");let x=Number(l.totalRecords);0===z&&Number.isSafeInteger(x)&&x>=0&&(R=x),A=u,$=[...w],B={...l.workspace||{},appearanceScope:l.workspace?.appearanceScope||(0,d.yG)(s),school:l.school??l.workspace?.school??null,branch:l.branch??l.workspace?.branch??null,settings:l.schoolBranchSettings??l.workspace?.settings??null};let S=[...(l.quarantineRecords||[]).map(e=>({kind:"quarantine",value:e})),...(l.records||[]).map(e=>({kind:"record",value:e})),...(l.cacheRecords||[]).map(e=>({kind:"cache",value:e}))],_=0,F=0,J=0,X=0,Q=new Set;for(let a=0;a<S.length;a+=150){E(e,t);let n=S.slice(a,a+150),i=await D(n,e,o);for(let e of(X+=n.length,_+=i.applied,F+=i.cacheApplied,J+=i.quarantined,i.changedTables))Q.add(e);i.changedTables.size&&(0,c.P5)({accountId:e,changedTables:[...i.changedTables]}),r?.onProgress?.({stage:"applying",title:"Saving offline records…",detail:`Saved ${P+X} of ${Math.max(R,P+X)} items`,current:P+X,total:R||void 0,percent:Math.min(96,Math.round(20+76*(P+X)/Math.max(1,R))),tableName:n.reduce((e,t)=>e||("quarantine"===t.kind?void 0:t.value.tableName),void 0)}),a+150<S.length&&await new Promise(e=>setTimeout(e,0))}for(let r of(E(e,t),P+=X,T+=_,O+=F,W+=J+Math.max(0,Number(l.quarantinedCount||0)-(l.quarantineRecords||[]).length),Q))U.add(r);for(let[e,t]of Object.entries(l.tableCounts||{}))V[e]=(V[e]||0)+Number(t||0);for(let e of l.tablesWithRecords||[])L.add(e);for(let e of Object.keys(l.tableCounts||{}))Number(l.tableCounts?.[e]||0)>0&&L.add(e);if(z+=1,M+=(l.records||[]).length+(l.quarantineRecords||[]).length,N=I&&l.nextCursor||null,H(I?"partial":"downloading"),a+=1,!I){if(R&&P!==R)throw Error(`Workspace transfer incomplete: received ${P} of ${R} records.`);if(W>0)throw Error(`${W} invalid records were quarantined; workspace not marked complete.`);if(E(e,t),!await C(e,t))throw Error("The downloaded workspace lacks required school, branch, or settings data.");let o=await j(e,t),a=Date.now();E(e,t),k(g(e,t),{accountId:e,membershipId:m(t),schoolId:b(t.schoolId),branchId:b(t.branchId),bootstrapSchemaVersion:3,includedTables:$,tablesWithRecords:[...L],tableCounts:V,bootstrapRevision:A,changedTables:[...U],completedAt:a});let n={accountId:e,schoolId:b(t.schoolId),branchId:b(t.branchId),role:s,appearanceScope:o.appearanceScope,settings:o.settings,cachedAt:a,bootstrapRevision:A};return k(y(e,t),n),k("eleeveon_current_workspace_settings",n),H("complete"),r?.onProgress?.({stage:"ready",title:"Workspace ready",detail:"All permitted workspace pages are saved for offline use.",percent:100,current:P,total:R||P}),{ready:!0,fromCache:!1,applied:T,cacheApplied:O,quarantined:W,changedTables:[...U],bootstrapRevision:A,completedAt:a,appearanceScope:o.appearanceScope,school:o.school,branch:o.branch,settings:o.settings,workspace:{...B||{},...o.workspace,academicPeriod:B?.academicPeriod||null}}}await new Promise(e=>setTimeout(e,0))}throw Error("Workspace download exceeded its maximum page count.")}catch(e){throw H("failed",e instanceof Error?e.message:String(e)),e}}let z=new Map;function M(e,t,r){return`eleeveon_workspace_priority_v1:${encodeURIComponent(w(e,t))}:${r.join(",")}`}function $(e,t){let r=(0,a.PU)();if(!r)return!1;let o=[...new Set(t)].filter(i.k).sort();if(!o.length)return!0;let n=x(r,e);if(o.every(e=>n?.includedTables?.includes(e)))return!0;let s=v(M(r,e,o));return!!(s&&s.accountId===r&&s.identity===w(r,e)&&3===s.schemaVersion&&o.every(e=>s.tables.includes(e))&&s.completedAt)}function V(e,t,r={}){let o=(0,a.vM)(),s=[...new Set(t)].filter(i.k).sort();if(!s.length)return Promise.resolve();let d=M(o,e,s),u=z.get(d);if(u)return u;let g=(async()=>{if(E(o,e),$(e,s)||"u">typeof navigator&&!navigator.onLine)return;let t=(0,a.IP)(),i=null,u=null,g=0,I=null,y=0;for(let a=0;a<1e5;a++){if(E(o,e),"u">typeof navigator&&!navigator.onLine)return;let v=await (0,n.I)(p,{method:"POST",body:{accountId:o,deviceId:t,membershipId:h(e.id),role:f(e.role),schoolId:b(e.schoolId),branchId:b(e.branchId),teacherId:b(e.teacherId),studentId:b(e.studentId),parentId:b(e.parentId),tableNames:s,pageSize:150,...i?{cursor:i}:{}}});if(E(o,e),!v?.ok||v.accountId!==o||f(v.role)!==f(e.role)||3!==v.bootstrapSchemaVersion||v.truncated)throw Error("Priority bootstrap identity or schema validation failed.");if(h(e.id)&&v.membershipId!==h(e.id))throw Error("Priority bootstrap returned another membership.");for(let t of["schoolId","branchId","teacherId","studentId","parentId"])if(b(v[t])&&b(e[t])&&b(v[t])!==b(e[t]))throw Error(`Priority bootstrap scope mismatch: ${t}.`);let x=v.includedTables||v.requiredTables||[],S=new Set(s),N=new Set(x);if(s.some(e=>!N.has(e))||x.some(e=>!S.has(e)))throw Error("Priority bootstrap returned unexpected table coverage.");let A=v.bootstrapRevision||v.revision;if(!A||u&&u!==A)throw Error("WORKSPACE_SNAPSHOT_CHANGED: Retry active-module download.");if(u=A,void 0!==v.pageOffset&&v.pageOffset!==g)throw Error("Priority bootstrap page offset mismatch.");0===a&&Number.isSafeInteger(v.totalRecords)&&Number(v.totalRecords)>=0&&(I=Number(v.totalRecords));let P=[...(v.quarantineRecords||[]).map(e=>({kind:"quarantine",value:e})),...(v.records||[]).map(e=>({kind:"record",value:e})),...(v.cacheRecords||[]).map(e=>({kind:"cache",value:e}))];for(let r=0;r<P.length;r+=150){E(o,e);let a=await D(P.slice(r,r+150),o,t);y+=a.quarantined,a.changedTables.size&&(0,c.P5)({accountId:o,changedTables:[...a.changedTables]})}if(y+=Math.max(0,Number(v.quarantinedCount||0)-(v.quarantineRecords||[]).length),g+=(v.records||[]).length+(v.quarantineRecords||[]).length,r.onProgress?.(g,I??g),!v.hasMore){if(!1===v.completed||v.nextCursor||y>0||null!==I&&g+(v.cacheRecords||[]).length<I&&0===a)throw Error("Priority bootstrap did not complete safely.");E(o,e),k(d,{accountId:o,identity:w(o,e),tables:s,schemaVersion:3,completedAt:Date.now(),revision:u}),window.dispatchEvent(new CustomEvent(l,{detail:{accountId:o,membershipId:m(e),status:"priority-complete",tables:s}}));return}if(!v.nextCursor||!P.length)throw Error("Priority bootstrap paging stopped prematurely.");i=v.nextCursor,await new Promise(e=>setTimeout(e,0))}throw Error("Priority bootstrap exceeded maximum pages.")})();return z.set(d,g),g.finally(()=>{z.get(d)===g&&z.delete(d)}).catch(()=>void 0),g}},49742:(e,t,r)=>{r.d(t,{A:()=>a});var o=r(95155);function a({progress:e,error:t,onRetry:r,onCancel:i}){let s=t?"Workspace needs attention":e?.title||"Preparing workspace…",c=t||e?.detail||"Loading the essential data required for this workspace.";return(0,o.jsxs)("div",{className:"workspace-bootstrap-overlay",role:"dialog","aria-modal":"true","aria-live":"polite","aria-label":s,children:[(0,o.jsx)("style",{children:n}),(0,o.jsxs)("section",{className:"workspace-bootstrap-card",children:[(0,o.jsx)("div",{className:t?"workspace-bootstrap-icon error":"workspace-bootstrap-spinner",children:t?"!":""}),(0,o.jsx)("span",{children:"Secure workspace startup"}),(0,o.jsx)("h2",{children:s}),(0,o.jsx)("p",{children:c}),!t&&e?.tableName&&(0,o.jsxs)("div",{className:"workspace-bootstrap-table",children:["Processing: ",(0,o.jsx)("strong",{children:e.tableName})]}),!t&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"workspace-bootstrap-percent",children:[(0,o.jsxs)("strong",{children:[Math.max(0,Math.min(100,e?.percent??0)),"%"]}),e?.total?(0,o.jsxs)("span",{children:[(e.current??0).toLocaleString()," / ",e.total.toLocaleString()," records"]}):(0,o.jsx)("span",{children:"Downloading and validating all permitted tables"})]}),(0,o.jsx)("div",{className:"workspace-bootstrap-track",children:(0,o.jsx)("i",{style:{width:`${Math.max(2,Math.min(100,e?.percent??2))}%`}})})]}),t&&(0,o.jsxs)("div",{className:"workspace-bootstrap-actions",children:[i&&(0,o.jsx)("button",{type:"button",className:"ghost",onClick:i,children:"Back"}),r&&(0,o.jsx)("button",{type:"button",onClick:r,children:"Retry"})]}),(0,o.jsx)("small",{children:"Offline records are preserved."})]})]})}let n=`
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
`}}]);
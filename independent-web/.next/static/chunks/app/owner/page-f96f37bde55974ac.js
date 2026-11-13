(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6154],{24379:(e,a,r)=>{Promise.resolve().then(r.bind(r,89866))},40973:(e,a,r)=>{"use strict";r.d(a,{A:()=>i});var t=r(95155);function i({value:e,onChange:a,tabs:r,ariaLabel:s,secondary:o=!1}){return(0,t.jsxs)("div",{className:`eds-workspace-subtabs ${o?"eds-subtabs-secondary":""}`,children:[(0,t.jsx)("style",{children:n}),(0,t.jsx)("div",{className:"eds-workspace-subtabs-row",role:"group","aria-label":s,children:r.map(({key:r,label:i})=>(0,t.jsx)("button",{type:"button","aria-pressed":e===r,className:e===r?"is-active":"",onClick:()=>{if(e===r)return;a(r);let t=document.querySelector(".role-shell.workspace-locked-scroll .app-content");t&&(t.scrollTop=0)},children:i},r))})]})}r(12115);let n=`
.eds-workspace-subtabs { position:sticky;top:0;z-index:22;display:flex;align-items:center;width:100%;min-width:0;margin:0 0 8px;padding:4px 0 5px;background:var(--eds-shell-bg,var(--bg,var(--surface,#fff)));border-bottom:1px solid var(--border,rgba(15,23,42,.10));backdrop-filter:blur(12px); }
.eds-workspace-subtabs-row { display:flex;align-items:center;gap:4px;min-width:0;max-width:100%;overflow-x:auto;white-space:nowrap;scrollbar-width:thin;overscroll-behavior-x:contain; }
.eds-workspace-subtabs-row button { flex:0 0 auto;min-height:31px;padding:5px 11px;font:inherit;font-size:11px;font-weight:750;color:var(--text,#172033);border-radius:7px;border:1px solid transparent;background:transparent;cursor:pointer; }
.eds-workspace-subtabs-row button:hover { background:color-mix(in srgb,var(--primary-color,#2563eb) 6%,var(--surface,#fff)); }
.eds-workspace-subtabs-row button.is-active { border-color:color-mix(in srgb,var(--primary-color,#2563eb) 26%,var(--border,#d4dae3));background:color-mix(in srgb,var(--primary-color,#2563eb) 10%,var(--surface,#fff)); }
.eds-workspace-subtabs-row button:focus-visible {outline:2px solid var(--primary-color,#2563eb);outline-offset:1px;}
.eds-subtabs-secondary {position:relative;z-index:1;margin:2px 0 9px;backdrop-filter:none;}
.eds-subtabs-secondary .eds-workspace-subtabs-row button {min-height:30px;border:1px solid var(--border,rgba(15,23,42,.1));border-radius:8px;background:var(--surface,#fff);}
.eds-subtabs-secondary .eds-workspace-subtabs-row button.is-active {border-color:var(--primary-color,#2563eb);background:color-mix(in srgb,var(--primary-color,#2563eb) 12%,var(--surface,#fff));}
@media print { .eds-workspace-subtabs {display:none!important;} }
`},89866:(e,a,r)=>{"use strict";let t,i;r.r(a),r.d(a,{NAV_SECTIONS:()=>i3,default:()=>ne});var n=r(95155),s=r(12115),o=r(34187),l=r(40973),c=r(73321),d=r(1573),p=r(19035),b=r(52975),u=r(42563),m=r(59816),h=r(58365);function x(e){try{return window.localStorage.getItem(e)||window.sessionStorage.getItem(e)}catch{return null}}let g={name:"",motto:"",phone:"",email:"",address:"",website:"",logo:"",logoMediaId:void 0,photo:"",photoMediaId:void 0,bannerImage:"",bannerImageMediaId:void 0,active:!0},f=e=>null==e?"":String(e).trim(),v=(e,a)=>String(e??"")===String(a??""),y=e=>u.db[e],w=e=>String(e||"").trim(),j=e=>w(e?.name)||"Unnamed school",k=e=>!1===e?"Inactive":"Active";function N(e){return!1===e?"red":"green"}let S=e=>{if(!e)return"Not set";let a="number"==typeof e?e:new Date(e).getTime();if(!Number.isFinite(a))return"Not set";try{return new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",year:"numeric"}).format(new Date(a))}catch{return"Not set"}},C=(e,a)=>`schools:${e}:${a}`,I=e=>{let a=String(e||"");if(!(!a||a.startsWith("blob:"))&&!a.startsWith("data:image/"))return a},A=h.$S.SCHOOLS||h.$S.SCHOOL||"schools",z={logo:h.Vq.LOGO||"logo",photo:h.Vq.PHOTO||"photo",bannerImage:h.Vq.BANNER_IMAGE||h.Vq.COVER_PHOTO||"bannerImage"},M=()=>(0,h.It)(A);function $({children:e,tone:a="gray"}){return(0,n.jsx)("span",{className:`ba-chip ${a}`,children:e})}function P({name:e,photo:a,primary:r}){return(0,n.jsx)("div",{className:"ba-avatar",style:{background:a?`url(${a}) center/cover`:`linear-gradient(135deg, ${r}, rgba(15,23,42,.9))`},children:!a&&String(e||"S").slice(0,1).toUpperCase()})}function F({icon:e,title:a,text:r}){return(0,n.jsxs)("section",{className:"ba-empty",children:[(0,n.jsx)("div",{className:"ba-empty-icon",children:e}),(0,n.jsx)("h3",{children:a}),(0,n.jsx)("p",{children:r})]})}function T(){var e;let a=(0,c.useRouter)(),{accountId:r,authenticated:t,loading:i}=(0,d.F)(),{settings:o,loading:l}=(0,p.t)(),{activeMembership:u}=(0,b.A)(),N=o?.primaryColor||"var(--primary-color, #2563eb)",S=(0,s.useMemo)(()=>(function(){let e=x("eleeveon_open_workspace");if(!e)return null;try{return JSON.parse(e)}catch{return null}})(),[]),$=(0,s.useMemo)(()=>w(S?.accountId)||w(S?.membership?.accountId)||w(u?.accountId)||w(r)||w(o?.accountId)||w(x("accountId"))||w(x("eleeveon_account_id")),[r,u?.accountId,S?.accountId,S?.membership?.accountId,o?.accountId]),[P,T]=(0,s.useState)(!0),[H,V]=(0,s.useState)(!1),[W,J]=(0,s.useState)([]),[Z,Q]=(0,s.useState)([]),[X,ee]=(0,s.useState)({}),[ea,er]=(0,s.useState)("cards"),[et,ei]=(0,s.useState)(""),[en,es]=(0,s.useState)("all"),[eo,el]=(0,s.useState)(!1),[ec,ed]=(0,s.useState)(!1),[ep,eb]=(0,s.useState)(null),[eu,em]=(0,s.useState)(!1),[eh,ex]=(0,s.useState)(g),[eg,ef]=(0,s.useState)(null),ev=(0,s.useRef)(M()),ey=(0,s.useRef)(null),ew=(0,s.useRef)(null),[ej,ek]=(0,s.useState)(!1),[eN,eS]=(0,s.useState)("logo"),[eC,eI]=(0,s.useState)("environment"),[eA,ez]=(0,s.useState)(!1),[eM,e$]=(0,s.useState)(!1);(0,s.useEffect)(()=>{!i&&(t&&$||a.replace("/login"))},[i,t,$,a]);let eP=e=>(!e.accountId||e.accountId===$)&&!e.isDeleted,eF=(e,a)=>{ef({tone:e,message:a}),window.setTimeout(()=>ef(e=>e?.message===a?null:e),4200)},eT=()=>{(0,h.IK)(ew.current),ew.current=null,ey.current&&(ey.current.srcObject=null)},eR=()=>!!t&&!!$||(eF("error","Sign in before managing owner schools."),!1),eD=()=>{eT(),ek(!1),e$(!1),ez(!1)},eE=async()=>{if(!ey.current)return void eF("error","Camera preview is not ready yet.");try{e$(!0);let e=await (0,h.ln)(ey.current,{fileName:`${eN}-${Date.now()}.jpg`,mimeType:"image/jpeg",quality:.88,maxWidth:"logo"===eN?900:1440,maxHeight:900});await eJ(eN,e),eD()}catch(e){console.error("Failed to capture school image:",e),eF("error",e?.message||"Failed to capture photo.")}finally{e$(!1)}},eL=()=>{Object.values(X).forEach(h.hZ),J([]),Q([]),ee({})},eB=async e=>{let a={};await Promise.all(e.map(async e=>{let r=f(e.id);if(!r)return;let t=async(a,t)=>{let i=await (0,h.cg)({accountId:$||void 0,ownerTable:A,ownerId:String(e.cloudId||e.id||r),fieldKey:z[a]});if(i?.id){let e=await (0,h.fW)(String(i.id));if(e)return e}let n=f(t);if(!n)return"";let s=await y("mediaAssets")?.get?.(n);return s&&!s.isDeleted&&!1!==s.active&&s.accountId===$&&s.ownerTable===A&&s.fieldKey===z[a]&&v(s.ownerLocalId,r)?(0,h.fW)(String(n)):""};try{let i=await t("logo",e.logoMediaId);i&&(a[C(r,"logo")]=i);let n=await t("photo",e.photoMediaId);n&&(a[C(r,"photo")]=n);let s=await t("bannerImage",e.bannerImageMediaId);s&&(a[C(r,"bannerImage")]=s)}catch(e){console.error("Failed to resolve school media:",r,e)}})),ee(e=>(Object.values(e).forEach(e=>{Object.values(a).includes(e)||(0,h.hZ)(e)}),a))},eU=async()=>{if(!t||!$){eL(),T(!1);return}try{T(!0);let[e,a]=await Promise.all([y("schools")?.toArray?.()||[],(0,m.uJ)("branches",{accountId:$})]),r=e.filter(e=>eP(e)).sort((e,a)=>j(e).localeCompare(j(a))),t=new Set(r.map(e=>f(e.id)).filter(e=>!!e)),i=a.filter(e=>eP(e)&&t.has(f(e.schoolId)));J(r),Q(i),await eB(r)}catch(e){console.error(e),eL(),eF("error","Failed to load owner schools.")}finally{T(!1)}};(0,s.useEffect)(()=>{i||l||eU()},[t,$,i,l,u?.role,u?.accountId,S?.openedAt,S?.membershipId]),(0,s.useEffect)(()=>()=>{Object.values(X).forEach(h.hZ)},[X]),(0,s.useEffect)(()=>{if(!ej)return;let e=!1;return(async()=>{try{ez(!0),eT();let a=await (0,h.Ik)({facingMode:eC,width:1280,height:720});if(e)return void(0,h.IK)(a);ew.current=a,ey.current&&await (0,h.Pr)(ey.current,a)}catch(e){console.error("Failed to open school camera:",e),eF("error",e?.message||(0,h.f5)()),ek(!1)}finally{e||ez(!1)}})(),()=>{e=!0,eT()}},[ej,eC]);let eO=(0,s.useMemo)(()=>{let e=new Map;return Z.forEach(a=>{let r=f(a.schoolId);r&&e.set(r,(e.get(r)||0)+1)}),e},[Z]),e_=(0,s.useMemo)(()=>W.map(e=>{let a,r=f(e.id);return{id:r,row:e,branchCount:eO.get(r)||0,logoUrl:X[C(r,"logo")]||I(e.logo),photoUrl:X[C(r,"photo")]||I(e.photo),bannerImageUrl:X[C(r,"bannerImage")]||I(e.bannerImage),active:(a=e,!a?.isDeleted&&a?.active!==!1&&!["deleted","archived","inactive"].includes(String(a?.status||"").toLowerCase().trim()))}}),[eO,X,W]),eH=(0,s.useMemo)(()=>{let e=et.trim().toLowerCase();return e_.filter(a=>{let r=a.row;return("active"!==en||!1!==r.active)&&("inactive"!==en||!1===r.active)&&("no_contact"!==en||!r.phone&&!r.email)&&("no_branch"!==en||!(a.branchCount>0))&&(!e||`${r.name||""} ${r.motto||""} ${r.phone||""} ${r.email||""} ${r.address||""} ${r.website||""}`.toLowerCase().includes(e))}).sort((e,a)=>j(e.row).localeCompare(j(a.row)))},[en,et,e_]),eK=(0,s.useMemo)(()=>({total:W.length,branches:Z.length,active:W.filter(e=>!1!==e.active&&!e.isDeleted).length,inactive:W.filter(e=>!1===e.active&&!e.isDeleted).length,noContact:W.filter(e=>!e.phone&&!e.email).length,noBranch:e_.filter(e=>!e.branchCount).length,showing:eH.length}),[Z.length,eH.length,W,e_]),eq=(0,s.useMemo)(()=>+("all"!==en),[en]),eG=(0,s.useMemo)(()=>q(e_,e=>k(e.row.active)),[e_]),eY=(0,s.useMemo)(()=>q(e_,e=>e.branchCount?"Has branches":"No branch"),[e_]),eV=(0,s.useMemo)(()=>q(e_,e=>e.row.phone||e.row.email?"Contact ready":"No contact"),[e_]),eW=e=>ex(a=>({...a,...e})),eJ=async(e,a)=>{if(a&&eR())try{let r=eh.id?void 0:ev.current,t=await (0,h.fA)(a,{accountId:$,schoolId:eh.id||void 0,branchId:void 0,ownerTable:A,ownerId:eh.id?String(eh.id):void 0,ownerTempKey:r,fieldKey:z[e],variant:"logo"===e?"avatar":"bannerImage"===e?"cover":"image",replaceExisting:!0});eW({[e]:t.previewUrl,[`${e}MediaId`]:t.assetId});let i="logo"===e?"School logo":"photo"===e?"School photo":"School banner";eF("success",`${i} optimized.`)}catch(e){console.error("Failed to process school image:",e),eF("error",e?.message||"Failed to process image.")}},eZ=e=>{let a=f(e.id);ev.current=M(),eb(null),ex({id:a,name:e.name||"",motto:e.motto||"",phone:e.phone||"",email:e.email||"",address:e.address||"",website:e.website||"",logo:X[C(a,"logo")]||I(e.logo)||"",logoMediaId:e.logoMediaId?String(e.logoMediaId):void 0,photo:X[C(a,"photo")]||I(e.photo)||"",photoMediaId:e.photoMediaId?String(e.photoMediaId):void 0,bannerImage:X[C(a,"bannerImage")]||I(e.bannerImage)||"",bannerImageMediaId:e.bannerImageMediaId?String(e.bannerImageMediaId):void 0,active:!1!==e.active}),em(!0)},eQ=async e=>{e?.preventDefault();let a=t&&$?eh.name.trim()?W.find(e=>!(eh.id&&v(e.id,eh.id))&&w(e.name).toLowerCase()===w(eh.name).toLowerCase()&&!e.isDeleted)?"A school with this name already exists on this account.":eh.email.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eh.email.trim())?"Enter a valid school email.":!eh.website.trim()||/^https?:\/\/.+/i.test(eh.website.trim())||/^www\..+/i.test(eh.website.trim())?"":"Website should begin with https://, http://, or www.":"Enter school name.":"Sign in first.";if(a)return void eF("error",a);if(t&&$)try{V(!0);let e=eh.id?W.find(e=>v(e.id,eh.id)):void 0,a={accountId:$,name:eh.name.trim(),motto:eh.motto.trim()||void 0,phone:eh.phone.trim()||void 0,email:eh.email.trim()||void 0,address:eh.address.trim()||void 0,website:eh.website.trim()||void 0,logo:I(eh.logo),logoMediaId:eh.logoMediaId||void 0,photo:I(eh.photo),photoMediaId:eh.photoMediaId||void 0,bannerImage:I(eh.bannerImage),bannerImageMediaId:eh.bannerImageMediaId||void 0,active:eh.active,isDeleted:!1},r=eh.id&&e?await (0,m.Po)("schools",eh.id,a):await (0,m.oJ)("schools",a),t=f(r?.id||eh.id);if(!t)throw Error("The school record was written without a valid permanent ID.");let i=await y("schools")?.get?.(t);if(!i||i.isDeleted)throw Error("The school could not be verified in local storage after saving.");if(w(i.accountId)!==$)throw Error("The school was saved under the wrong account workspace.");await Promise.all([{id:eh.logoMediaId,field:"logo"},{id:eh.photoMediaId,field:"photo"},{id:eh.bannerImageMediaId,field:"bannerImage"}].filter(e=>!!e.id).map(e=>(0,h.yy)({assetId:String(e.id),ownerTable:A,ownerId:t,ownerTempKey:ev.current,fieldKey:z[e.field]}))),ev.current=M(),em(!1),await eU(),eF("success",eh.id?"School changes saved.":"School created and saved locally.")}catch(e){console.error("Failed to save school:",e),eF("error",e?.message||"Failed to save school.")}finally{V(!1)}},eX=async e=>{let a=f(e.row.id);!a||window.confirm(e.branchCount?`"${j(e.row)}" has ${e.branchCount} branch record(s). Delete anyway?`:`Delete "${j(e.row)}"?`)&&(await (0,m.R8)("schools",String(a)),eb(null),eF("success","School deleted."),await eU())},e0=async(e,a)=>{let r=f(e.row.id);r&&(await (0,m.Po)("schools",String(r),{active:a,isDeleted:!1}),eb(null),eF("success",a?"School activated.":"School deactivated."),await eU())};return i||l||P?(0,n.jsx)(R,{primary:N,title:"Opening Schools...",text:"Checking owner account, local school records, branch coverage, and media assets."}):t&&$?(0,n.jsxs)("main",{className:"ba-page",style:{"--ba-primary":N},children:[(0,n.jsx)("style",{children:Y}),eg&&(0,n.jsxs)("section",{className:`ba-toast ${eg.tone}`,children:[eg.message,(0,n.jsx)("button",{type:"button",onClick:()=>ef(null),"aria-label":"Close notification",children:"✕"})]}),(0,n.jsxs)("section",{className:"ba-search-card","aria-label":"School search and actions",children:[(0,n.jsxs)("label",{className:"ba-search",children:[(0,n.jsx)("span",{children:"⌕"}),(0,n.jsx)("input",{value:et,onChange:e=>ei(e.target.value),placeholder:"Search schools...","aria-label":"Search schools"})]}),(0,n.jsx)("button",{type:"button",className:"ba-add-inline",onClick:()=>{eR()&&(ev.current=M(),eb(null),ex({...g,active:"inactive"!==en}),em(!0))},"aria-label":"Add school",children:"+"}),(0,n.jsxs)("button",{type:"button",className:`ba-filter-button ${eq?"active":""}`,onClick:()=>el(!0),"aria-label":"Open filters",title:"Filters",children:[(0,n.jsx)(E,{}),eq?(0,n.jsx)("b",{children:eq}):null]}),(0,n.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>ed(!0),"aria-label":"More options",children:"⋯"})]}),eq>0&&(0,n.jsx)("section",{className:"ba-filter-chips","aria-label":"Active filters",children:(0,n.jsxs)("button",{type:"button",onClick:()=>es("all"),children:["Filter: ","active"===(e=en)?"Active only":"inactive"===e?"Inactive only":"no_contact"===e?"Missing contact":"no_branch"===e?"No branch":"All schools"," \xd7"]})}),"summary"===ea&&(0,n.jsxs)("section",{className:"ba-analysis-grid",children:[(0,n.jsx)(G,{title:"Schools by Status",rows:eG,total:eK.total}),(0,n.jsx)(G,{title:"Branch Coverage",rows:eY,total:eK.total}),(0,n.jsx)(G,{title:"Contact Readiness",rows:eV,total:eK.total}),(0,n.jsxs)("article",{className:"ba-analysis ba-current-filter",children:[(0,n.jsx)("span",{children:"Current Filter"}),(0,n.jsx)("strong",{children:eK.showing}),(0,n.jsxs)("p",{children:[eK.branches," branch record(s) connected across ",eK.total," owner school(s)."]})]})]}),"table"===ea&&(0,n.jsx)(O,{rows:eH,openEdit:eZ,remove:eX,setActive:e0}),"cards"===ea&&(0,n.jsxs)("section",{className:"ba-list",children:[eH.map(e=>(0,n.jsx)(D,{item:e,primary:N,onOpen:()=>eb(e)},String(e.id))),!eH.length&&(0,n.jsx)(F,{icon:"\uD83C\uDFEB",title:"No schools found",text:"Add owner school records, connect logo and banner images, then create branches under each school."})]}),eo&&(0,n.jsx)(L,{filterStatus:en,setFilterStatus:es,clearFilters:()=>es("all"),onClose:()=>el(!1)}),ec&&(0,n.jsx)(B,{viewMode:ea,setViewMode:e=>{er(e),ed(!1)},onRefresh:async()=>{ed(!1),await eU()},onClose:()=>ed(!1)}),ep&&(0,n.jsx)(U,{item:ep,openEdit:eZ,remove:eX,setActive:e0,onClose:()=>eb(null)}),eu&&(0,n.jsx)(_,{form:eh,saving:H,setModalOpen:em,updateForm:eW,handleImageUpload:eJ,openCameraForField:e=>{if(eR()){if(!(0,h.fP)())return void eF("error",(0,h.f5)());eS(e),ek(!0)}},save:eQ}),ej&&(0,n.jsx)(K,{field:eN,videoRef:ey,starting:eA,capturing:eM,facing:eC,setFacing:eI,capture:eE,close:eD,entityLabel:"School"})]}):(0,n.jsx)(R,{primary:N,title:"Redirecting to login...",text:"You must sign in before managing owner schools."})}function R({primary:e,title:a,text:r}){return(0,n.jsxs)("main",{className:"ba-page",style:{"--ba-primary":e},children:[(0,n.jsx)("style",{children:Y}),(0,n.jsxs)("section",{className:"ba-state",children:[(0,n.jsx)("div",{className:"ba-spinner"}),(0,n.jsx)("h2",{children:a}),(0,n.jsx)("p",{children:r})]})]})}function D({item:e,primary:a,onOpen:r}){let t=e.row,i=e.logoUrl||e.photoUrl;return(0,n.jsxs)("button",{type:"button",className:"student-row",onClick:r,children:[(0,n.jsx)(P,{name:j(t),photo:i,primary:a}),(0,n.jsxs)("span",{className:"student-main",children:[(0,n.jsx)("strong",{children:j(t)}),(0,n.jsxs)("small",{children:[e.branchCount," branch",1===e.branchCount?"":"es",t.motto?` \xb7 ${t.motto}`:""]}),(0,n.jsx)("em",{children:t.phone||t.email||t.address||"No contact details yet"})]}),(0,n.jsxs)("span",{className:"student-side",children:[(0,n.jsx)("span",{className:`status-dot-mini ${N(t.active)}`,title:k(t.active),"aria-label":k(t.active)}),(0,n.jsx)("i",{children:"⋯"})]})]})}function E(){return(0,n.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M4 7h9"}),(0,n.jsx)("path",{d:"M17 7h3"}),(0,n.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,n.jsx)("path",{d:"M4 17h3"}),(0,n.jsx)("path",{d:"M11 17h9"}),(0,n.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function L({filterStatus:e,setFilterStatus:a,clearFilters:r,onClose:t}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Filters"}),(0,n.jsx)("p",{children:"Keep the owner school register compact and focused."})]}),(0,n.jsx)("button",{type:"button",onClick:t,"aria-label":"Close filters",children:"✕"})]}),(0,n.jsx)("div",{className:"ba-menu-list",children:[{value:"all",label:"All schools",note:"Show every owner school record"},{value:"active",label:"Active only",note:"Schools currently enabled"},{value:"inactive",label:"Inactive only",note:"Schools disabled for daily use"},{value:"no_contact",label:"Missing contact",note:"Schools without phone or email"},{value:"no_branch",label:"No branch",note:"Schools that still need branch setup"}].map(r=>(0,n.jsxs)("button",{type:"button",className:e===r.value?"active":"",onClick:()=>a(r.value),children:[(0,n.jsx)("span",{children:e===r.value?"✓":"⌁"}),(0,n.jsx)("b",{children:r.label}),(0,n.jsx)("small",{children:r.note})]},r.value))}),(0,n.jsxs)("div",{className:"ba-sheet-actions",children:[(0,n.jsx)("button",{type:"button",onClick:r,children:"Clear"}),(0,n.jsx)("button",{type:"button",className:"primary",onClick:t,children:"Apply"})]})]})})}function B({viewMode:e,setViewMode:a,onRefresh:r,onClose:t}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"More"}),(0,n.jsx)("p",{children:"Switch views or reload the local owner school register."})]}),(0,n.jsx)("button",{type:"button",onClick:t,"aria-label":"Close more options",children:"✕"})]}),(0,n.jsxs)("div",{className:"ba-menu-list",children:[(0,n.jsxs)("button",{type:"button",className:"cards"===e?"active":"",onClick:()=>a("cards"),children:[(0,n.jsx)("span",{children:"▦"}),(0,n.jsx)("b",{children:"Cards"}),(0,n.jsx)("small",{children:"Compact school register"})]}),(0,n.jsxs)("button",{type:"button",className:"table"===e?"active":"",onClick:()=>a("table"),children:[(0,n.jsx)("span",{children:"☷"}),(0,n.jsx)("b",{children:"Table view"}),(0,n.jsx)("small",{children:"Dense laptop-friendly owner records"})]}),(0,n.jsxs)("button",{type:"button",className:"summary"===e?"active":"",onClick:()=>a("summary"),children:[(0,n.jsx)("span",{children:"◔"}),(0,n.jsx)("b",{children:"Analytics"}),(0,n.jsx)("small",{children:"Status, contact and branch coverage"})]}),(0,n.jsxs)("button",{type:"button",onClick:r,children:[(0,n.jsx)("span",{children:"↻"}),(0,n.jsx)("b",{children:"Refresh"}),(0,n.jsx)("small",{children:"Reload local schools and branches"})]})]})]})})}function U({item:e,openEdit:a,remove:r,setActive:t,onClose:i}){let s=e.row;return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-profile",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:j(s)}),(0,n.jsxs)("p",{children:[e.branchCount," branch",1===e.branchCount?"":"es"," \xb7 ",k(s.active)]})]}),(0,n.jsx)("button",{type:"button",onClick:i,"aria-label":"Close school actions",children:"✕"})]}),(0,n.jsxs)("div",{className:"student-detail-strip",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Contact"}),s.phone||s.email||"Not set"]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Website"}),s.website||"Not set"]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Updated"}),S(s.updatedAt||s.createdAt)]})]}),(0,n.jsxs)("div",{className:"ba-menu-list",children:[(0,n.jsxs)("button",{type:"button",onClick:()=>a(e.row),children:[(0,n.jsx)("span",{children:"✎"}),(0,n.jsx)("b",{children:"Edit school"}),(0,n.jsx)("small",{children:"Update profile, contact, logo and banner"})]}),!1===s.active?(0,n.jsxs)("button",{type:"button",onClick:()=>t(e,!0),children:[(0,n.jsx)("span",{children:"✓"}),(0,n.jsx)("b",{children:"Activate"}),(0,n.jsx)("small",{children:"Enable this school for account operations"})]}):(0,n.jsxs)("button",{type:"button",onClick:()=>t(e,!1),children:[(0,n.jsx)("span",{children:"⏸"}),(0,n.jsx)("b",{children:"Deactivate"}),(0,n.jsx)("small",{children:"Keep the record but disable daily use"})]}),(0,n.jsxs)("button",{type:"button",className:"danger",onClick:()=>r(e),children:[(0,n.jsx)("span",{children:"⌫"}),(0,n.jsx)("b",{children:"Delete"}),(0,n.jsx)("small",{children:"Soft delete this school locally"})]})]})]})})}function O({rows:e,openEdit:a,remove:r,setActive:t}){return(0,n.jsx)("section",{className:"ba-table-card",children:(0,n.jsxs)("div",{className:"ba-table-scroll",children:[(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsxs)("th",{children:["Schools (",e.length,")"]}),(0,n.jsx)("th",{children:"Contact"}),(0,n.jsx)("th",{children:"Website"}),(0,n.jsx)("th",{children:"Branches"}),(0,n.jsx)("th",{children:"Status"}),(0,n.jsx)("th",{children:"Updated"}),(0,n.jsx)("th",{children:"Actions"})]})}),(0,n.jsx)("tbody",{children:e.map(e=>{let i=e.row;return(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{children:[(0,n.jsx)("strong",{children:j(i)}),(0,n.jsx)("span",{children:i.motto||i.address||"No motto/address"})]}),(0,n.jsx)("td",{children:i.phone||i.email||"—"}),(0,n.jsx)("td",{children:i.website||"—"}),(0,n.jsx)("td",{children:(0,n.jsx)($,{tone:e.branchCount?"green":"orange",children:e.branchCount})}),(0,n.jsx)("td",{children:(0,n.jsx)($,{tone:N(i.active),children:k(i.active)})}),(0,n.jsx)("td",{children:S(i.updatedAt||i.createdAt)}),(0,n.jsx)("td",{children:(0,n.jsxs)("div",{className:"ba-table-actions",children:[(0,n.jsx)("button",{type:"button",onClick:()=>a(e.row),children:"Edit"}),(0,n.jsxs)("button",{type:"button",onClick:()=>t(e,!1===i.active),children:[" ",!1===i.active?"Activate":"Deactivate"]}),(0,n.jsx)("button",{type:"button",className:"ba-delete",onClick:()=>r(e),children:"Delete"})]})})]},String(e.id))})})]}),!e.length&&(0,n.jsx)("div",{className:"ba-empty-table",children:"No school matches your filters."})]})})}function _({form:e,saving:a,setModalOpen:r,updateForm:t,handleImageUpload:i,openCameraForField:s,save:o}){return(0,n.jsx)("div",{className:"ba-modal-backdrop",children:(0,n.jsxs)("form",{className:"ba-modal",onSubmit:o,children:[(0,n.jsxs)("div",{className:"ba-modal-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:e.id?"Edit School":"Add School"}),(0,n.jsx)("p",{children:"School is saved locally first and syncs through your normal sync pipeline."})]}),(0,n.jsx)("button",{type:"button",onClick:()=>r(!1),"aria-label":"Close school form",children:"✕"})]}),(0,n.jsxs)("section",{className:"ba-form-section",children:[(0,n.jsx)("h3",{children:"School Profile"}),(0,n.jsxs)("div",{className:"ba-form",children:[(0,n.jsxs)("label",{className:"wide",children:[(0,n.jsx)("span",{children:"School Name"}),(0,n.jsx)("input",{value:e.name,onChange:e=>t({name:e.target.value}),placeholder:"School name"})]}),(0,n.jsxs)("label",{className:"wide",children:[(0,n.jsx)("span",{children:"Motto"}),(0,n.jsx)("input",{value:e.motto,onChange:e=>t({motto:e.target.value}),placeholder:"School motto"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Phone"}),(0,n.jsx)("input",{value:e.phone,onChange:e=>t({phone:e.target.value}),placeholder:"Phone"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Email"}),(0,n.jsx)("input",{value:e.email,onChange:e=>t({email:e.target.value}),placeholder:"Email"})]}),(0,n.jsxs)("label",{className:"wide",children:[(0,n.jsx)("span",{children:"Website"}),(0,n.jsx)("input",{value:e.website,onChange:e=>t({website:e.target.value}),placeholder:"https://example.com"})]}),(0,n.jsxs)("label",{className:"wide",children:[(0,n.jsx)("span",{children:"Address"}),(0,n.jsx)("textarea",{value:e.address,onChange:e=>t({address:e.target.value}),placeholder:"School address"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Status"}),(0,n.jsxs)("select",{value:e.active?"active":"inactive",onChange:e=>t({active:"active"===e.target.value}),children:[(0,n.jsx)("option",{value:"active",children:"Active"}),(0,n.jsx)("option",{value:"inactive",children:"Inactive"})]})]})]})]}),(0,n.jsxs)("section",{className:"ba-form-section",children:[(0,n.jsx)("h3",{children:"Images"}),(0,n.jsxs)("div",{className:"ba-form",children:[(0,n.jsx)(H,{title:"Logo",field:"logo",preview:e.logo,handleImageUpload:i,openCameraForField:s}),(0,n.jsx)(H,{title:"School Photo",field:"photo",preview:e.photo,handleImageUpload:i,openCameraForField:s}),(0,n.jsx)(H,{title:"Banner Image",field:"bannerImage",preview:e.bannerImage,banner:!0,handleImageUpload:i,openCameraForField:s})]})]}),(0,n.jsxs)("div",{className:"ba-modal-actions",children:[(0,n.jsx)("button",{type:"button",onClick:()=>r(!1),children:"Cancel"}),(0,n.jsx)("button",{type:"submit",disabled:a,children:a?"Saving...":e.id?"Save Changes":"Add School"})]})]})})}function H({title:e,field:a,preview:r,banner:t=!1,handleImageUpload:i,openCameraForField:s}){return(0,n.jsxs)("label",{className:t?"wide":void 0,children:[(0,n.jsx)("span",{children:e}),(0,n.jsxs)("div",{className:"ba-media-actions",children:[(0,n.jsxs)("label",{className:"ba-media-button",children:["Upload",(0,n.jsx)("input",{type:"file",accept:"image/*",onChange:e=>i(a,e.target.files?.[0]),hidden:!0})]}),(0,n.jsx)("button",{type:"button",className:"ba-media-button secondary",onClick:()=>s(a),children:"Take Photo"})]}),(0,n.jsx)("small",{className:"ba-media-hint",children:"Upload from files or take a camera photo. It is optimized and saved as a media asset."}),r&&(0,n.jsx)("img",{src:r,alt:`${e} preview`,className:t?"ba-preview-banner":"ba-preview-photo"})]})}function K({field:e,videoRef:a,starting:r,capturing:t,facing:i,setFacing:s,capture:o,close:l,entityLabel:c}){let d="logo"===e?`Take ${c} Logo`:"bannerImage"===e?`Take ${c} Banner`:`Take ${c} Photo`;return(0,n.jsx)("div",{className:"ba-modal-backdrop camera-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-camera-modal",children:[(0,n.jsxs)("div",{className:"ba-modal-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:d}),(0,n.jsx)("p",{children:"Use the live camera preview, then capture. The image will be compressed and saved as a media asset."})]}),(0,n.jsx)("button",{type:"button",onClick:l,"aria-label":"Close camera",children:"✕"})]}),(0,n.jsxs)("div",{className:"ba-camera-preview",children:[(0,n.jsx)("video",{ref:a,autoPlay:!0,muted:!0,playsInline:!0}),r&&(0,n.jsx)("span",{className:"ba-camera-loading",children:"Opening camera..."})]}),(0,n.jsxs)("div",{className:"ba-camera-actions",children:[(0,n.jsx)("button",{type:"button",className:"ba-camera-secondary",onClick:()=>s("environment"===i?"user":"environment"),disabled:r||t,children:"Switch Camera"}),(0,n.jsx)("button",{type:"button",className:"ba-camera-secondary",onClick:l,disabled:t,children:"Cancel"}),(0,n.jsx)("button",{type:"button",className:"ba-camera-primary",onClick:o,disabled:r||t,children:t?"Capturing...":"Capture Photo"})]})]})})}function q(e,a){let r=new Map;return e.forEach(e=>{let t=a(e)||"Unknown";r.set(t,(r.get(t)||0)+1)}),Array.from(r.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value||e.label.localeCompare(a.label))}function G({title:e,rows:a,total:r}){return(0,n.jsxs)("article",{className:"ba-analysis",children:[(0,n.jsx)("span",{children:e}),(0,n.jsx)("strong",{children:r}),(0,n.jsx)("div",{className:"ba-analysis-list",children:a.map(e=>{let a=r?Math.round(e.value/r*100):0;return(0,n.jsxs)("section",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("b",{children:e.label}),(0,n.jsx)("small",{children:e.value})]}),(0,n.jsx)("div",{className:"ba-progress",children:(0,n.jsx)("i",{style:{width:`${a}%`}})})]},e.label)})})]})}let Y=`
@keyframes spin { to { transform: rotate(360deg); } }

.ba-page {
  --ease: cubic-bezier(.2,.8,.2,1);
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: calc(8px * var(--local-density-scale, 1));
  padding-bottom: max(40px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--ba-primary) 9%, transparent), transparent 30rem),
    var(--bg, #f7f8fb);
  color: var(--text, #111827);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--font-size, 14px);
  overflow-x: hidden;
}

.ba-page *, .ba-page *::before, .ba-page *::after { box-sizing: border-box; min-width: 0; }
.ba-page button, .ba-page input, .ba-page select, .ba-page textarea { font: inherit; max-width: 100%; }
.ba-page button { -webkit-tap-highlight-color: transparent; }
.ba-page input, .ba-page select, .ba-page textarea {
  width: 100%; min-height: 44px; border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10)));
  border-radius: 16px; padding: 0 12px; background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #111827)); outline: none; font-weight: 750;
}
.ba-page input:focus, .ba-page select:focus, .ba-page textarea:focus {
  border-color: color-mix(in srgb, var(--ba-primary) 52%, var(--border, rgba(0,0,0,.10)));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--ba-primary) 12%, transparent);
}
.ba-state, .ba-search-card, .ba-card, .ba-table-card, .ba-analysis, .ba-empty, .ba-sheet, .ba-modal, .student-row {
  background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); box-shadow: 0 12px 28px rgba(15,23,42,.045);
}
.ba-state { min-height: min(420px, calc(100dvh - 32px)); width: min(520px, 100%); margin: 0 auto; display: grid; place-items: center; align-content: center; gap: 10px; padding: 22px; border-radius: 28px; text-align: center; }
.ba-spinner { width: 38px; height: 38px; border-radius: 999px; border: 4px solid color-mix(in srgb, var(--ba-primary) 18%, transparent); border-top-color: var(--ba-primary); animation: spin .8s linear infinite; }
.ba-state h2 { margin: 0; font-size: 22px; font-weight: 1000; letter-spacing: -.04em; }
.ba-state p { max-width: 34rem; margin: 0; color: var(--muted, #64748b); font-size: 13px; line-height: 1.6; }
.ba-toast { position: sticky; top: 8px; z-index: 40; display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; padding: 12px 14px; border-radius: 18px; font-size: 13px; font-weight: 850; box-shadow: 0 18px 40px rgba(15,23,42,.12); }
.ba-toast.success { background: rgba(34,197,94,.14); color: #166534; } .ba-toast.error { background: rgba(239,68,68,.12); color: #991b1b; } .ba-toast.info { background: rgba(59,130,246,.13); color: #1d4ed8; }
.ba-toast button { border: 0; background: transparent; color: currentColor; font-weight: 1000; cursor: pointer; }
.ba-icon-button, .ba-filter-button, .ba-add-inline { width: 42px; height: 42px; border: 1px solid var(--border, rgba(0,0,0,.10)); border-radius: 999px; display: grid; place-items: center; background: var(--card-bg, var(--surface,#fff)); color: var(--text,#111827); font-size: 18px; font-weight: 1000; cursor: pointer; box-shadow: 0 10px 22px rgba(15,23,42,.045); }
.ba-add-inline { flex: 0 0 42px; border-color: var(--ba-primary); background: var(--ba-primary); color: #fff; font-size: 25px; line-height: 1; box-shadow: 0 12px 28px color-mix(in srgb, var(--ba-primary) 22%, transparent); }
.ba-search-card { display: grid; grid-template-columns: minmax(0, 1fr) auto auto auto; gap: 8px; align-items: center; margin-top: 2px; padding: 8px; border-radius: 24px; }
.ba-search { min-width: 0; display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 8px; min-height: 44px; padding: 0 11px; border-radius: 18px; background: color-mix(in srgb, var(--muted,#64748b) 7%, transparent); }
.ba-search span { color: var(--muted,#64748b); font-size: 17px; font-weight: 1000; }
.ba-search input { min-height: 42px; border: 0; padding: 0; border-radius: 0; background: transparent; box-shadow: none; font-size: 14px; }
.ba-slider-icon { width: 21px; height: 21px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
.ba-filter-button { position: relative; background: color-mix(in srgb, var(--ba-primary) 8%, var(--card-bg,#fff)); color: var(--ba-primary); }
.ba-filter-button.active { background: var(--ba-primary); color: #fff; border-color: var(--ba-primary); }
.ba-filter-button b { position: absolute; top: -4px; right: -4px; min-width: 19px; height: 19px; display: grid; place-items: center; border-radius: 999px; background: #ef4444; color: #fff; font-size: 10px; border: 2px solid var(--card-bg,#fff); }
.ba-filter-chips { display: flex; gap: 7px; overflow-x: auto; padding: 8px 1px 0; scrollbar-width: none; -ms-overflow-style: none; }
.ba-filter-chips::-webkit-scrollbar { display: none; }
.ba-filter-chips button { flex: 0 0 auto; min-height: 31px; border: 0; border-radius: 999px; padding: 0 10px; background: color-mix(in srgb, var(--ba-primary) 11%, transparent); color: var(--ba-primary); font-size: 11px; font-weight: 950; white-space: nowrap; cursor: pointer; }
.ba-list { display: grid; gap: 7px; margin-top: 10px; }
.student-row { width: 100%; display: grid; grid-template-columns: auto minmax(0,1fr) auto; align-items: center; gap: 10px; padding: 10px; border-radius: 22px; text-align: left; cursor: pointer; transition: transform .16s var(--ease), box-shadow .16s var(--ease), border-color .16s var(--ease); }
.student-row:hover { transform: translateY(-1px); border-color: color-mix(in srgb, var(--ba-primary) 24%, var(--border, rgba(0,0,0,.10))); box-shadow: 0 16px 34px rgba(15,23,42,.07); }
.ba-avatar { width: 48px; height: 48px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 18px; color: #fff; font-size: 17px; font-weight: 1000; box-shadow: 0 12px 24px rgba(15,23,42,.12); }
.student-main, .student-main strong, .student-main small, .student-main em { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.student-main strong { color: var(--text,#111827); font-size: 14px; font-weight: 1000; letter-spacing: -.02em; }
.student-main small { margin-top: 3px; color: var(--muted,#64748b); font-size: 12px; font-weight: 850; font-style: normal; }
.student-main em { margin-top: 3px; color: color-mix(in srgb, var(--muted,#64748b) 86%, var(--text,#111827)); font-size: 11px; font-weight: 750; font-style: normal; }
.student-side { display: grid; justify-items: end; gap: 6px; flex: 0 0 auto; }
.student-side i { color: var(--muted,#64748b); font-style: normal; font-size: 18px; font-weight: 1000; line-height: 1; }
.ba-chip { max-width: 100%; display: inline-flex; align-items: center; min-height: 24px; padding: 3px 8px; border-radius: 999px; font-size: 10px; font-weight: 950; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize; }
.ba-chip.green { background: rgba(34,197,94,.12); color: #16a34a; } .ba-chip.red { background: rgba(239,68,68,.12); color: #dc2626; } .ba-chip.blue { background: rgba(59,130,246,.12); color: #2563eb; } .ba-chip.gray { background: color-mix(in srgb,var(--muted,#64748b) 14%,transparent); color: var(--muted,#64748b); } .ba-chip.orange { background: rgba(245,158,11,.14); color: #b45309; } .ba-chip.purple { background: rgba(147,51,234,.12); color: #7e22ce; }
.status-dot-mini { width: 10px; height: 10px; display: inline-block; border-radius: 999px; background: var(--muted,#64748b); box-shadow: 0 0 0 4px color-mix(in srgb, currentColor 10%, transparent); }
.status-dot-mini.green { background: #22c55e; } .status-dot-mini.red { background: #ef4444; } .status-dot-mini.blue { background: #3b82f6; } .status-dot-mini.orange { background: #f59e0b; } .status-dot-mini.gray { background: var(--muted,#64748b); }
.ba-sheet-backdrop, .ba-modal-backdrop { position: fixed; inset: 0; z-index: 80; display: grid; place-items: end center; padding: 10px; background: rgba(15,23,42,.50); backdrop-filter: blur(12px); }
.ba-sheet { width: min(760px, 100%); max-height: min(88dvh, 760px); overflow-y: auto; padding: 14px; border-radius: 28px 28px 22px 22px; box-shadow: 0 30px 90px rgba(15,23,42,.32); animation: sheetIn .18s var(--ease); }
.ba-sheet.small { width: min(520px, 100%); }
@keyframes sheetIn { from { transform: translateY(16px); opacity: .7; } to { transform: translateY(0); opacity: 1; } }
.ba-sheet-head, .ba-sheet-profile, .ba-modal-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding-bottom: 12px; }
.ba-sheet-head h2, .ba-sheet-profile h2, .ba-modal-head h2 { margin: 0; color: var(--text,#111827); font-size: 21px; font-weight: 1000; letter-spacing: -.05em; }
.ba-sheet-head p, .ba-sheet-profile p, .ba-modal-head p { margin: 5px 0 0; color: var(--muted,#64748b); font-size: 12px; line-height: 1.5; font-weight: 750; }
.ba-sheet-head button, .ba-sheet-profile button, .ba-modal-head button { width: 38px; height: 38px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; background: var(--surface,#fff); color: var(--text,#111827); font-weight: 1000; cursor: pointer; flex: 0 0 auto; }
.ba-sheet-actions, .ba-modal-actions { position: sticky; bottom: -14px; display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 8px; margin-top: 14px; padding: 12px 0 2px; background: linear-gradient(to top, var(--card-bg,var(--surface,#fff)) 70%, transparent); }
.ba-sheet-actions button, .ba-modal-actions button { min-height: 42px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; padding: 0 16px; background: color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff)); color: var(--text,#111827); font-size: 12px; font-weight: 950; cursor: pointer; }
.ba-sheet-actions button.primary, .ba-modal-actions button:last-child { border-color: var(--ba-primary); background: var(--ba-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent); }
.ba-modal-actions button:disabled { opacity: .65; cursor: not-allowed; }
.ba-menu-list { display: grid; gap: 8px; }
.ba-menu-list button { width: 100%; display: grid; grid-template-columns: 42px minmax(0,1fr); column-gap: 10px; align-items: center; min-height: 58px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 18px; padding: 9px; background: var(--surface,#fff); color: var(--text,#111827); text-align: left; cursor: pointer; }
.ba-menu-list button span { grid-row: span 2; width: 42px; height: 42px; display: grid; place-items: center; border-radius: 16px; background: color-mix(in srgb, var(--ba-primary) 10%, transparent); color: var(--ba-primary); font-weight: 1000; }
.ba-menu-list button b, .ba-menu-list button small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ba-menu-list button b { font-size: 13px; font-weight: 1000; } .ba-menu-list button small { margin-top: 2px; color: var(--muted,#64748b); font-size: 11px; font-weight: 750; }
.ba-menu-list button.active { border-color: color-mix(in srgb, var(--ba-primary) 34%, var(--border,rgba(0,0,0,.10))); background: color-mix(in srgb, var(--ba-primary) 8%, var(--surface,#fff)); }
.ba-menu-list button.danger span { background: color-mix(in srgb, #dc2626 10%, transparent); color: #dc2626; } .ba-menu-list button.danger b { color: #991b1b; }
.student-detail-strip { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 7px; margin-bottom: 10px; }
.student-detail-strip span { display: block; padding: 9px; border-radius: 16px; background: color-mix(in srgb, var(--muted,#64748b) 8%, transparent); color: var(--muted,#64748b); font-size: 11px; font-weight: 850; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.student-detail-strip b { display: block; margin-bottom: 3px; color: var(--text,#111827); font-size: 10px; text-transform: uppercase; letter-spacing: .05em; }
.ba-form { display: grid; grid-template-columns: minmax(0, 1fr); gap: 10px; } .ba-form.two { grid-template-columns: minmax(0,1fr); } .ba-form.compact { gap: 9px; }
.ba-form label { display: grid; gap: 6px; min-width: 0; } .ba-form span { color: var(--muted,#64748b); font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: .06em; }
.ba-media-hint { color: var(--muted,#64748b); font-size: 11px; font-weight: 750; line-height: 1.4; }
.ba-form .wide { grid-column: 1 / -1; }
.ba-form-section { padding: 12px 0; border-top: 1px solid var(--border,rgba(0,0,0,.08)); } .ba-form-section:first-of-type { border-top: 0; padding-top: 0; }
.ba-form-section h3 { margin: 0 0 10px; color: var(--text,#111827); font-size: 14px; font-weight: 1000; letter-spacing: -.03em; }
.ba-page textarea { min-height: 92px; padding: 12px; resize: vertical; line-height: 1.55; }
.ba-media-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
.ba-media-button { min-height: 40px; border: 1px solid var(--ba-primary); border-radius: 999px; padding: 0 14px; display: inline-flex; align-items: center; justify-content: center; background: var(--ba-primary); color: #fff !important; font-size: 12px; font-weight: 950; letter-spacing: 0 !important; text-transform: none !important; cursor: pointer; text-align: center; box-shadow: 0 12px 26px color-mix(in srgb, var(--ba-primary) 18%, transparent); }
.ba-media-button.secondary { background: var(--surface, #fff); color: var(--ba-primary) !important; box-shadow: none; }
.ba-media-button input { display: none; }
.ba-preview-photo { width: 96px; height: 96px; object-fit: cover; border-radius: 22px; border: 1px solid var(--border,rgba(0,0,0,.10)); }
.ba-preview-banner { width: 100%; height: 130px; object-fit: cover; border-radius: 22px; border: 1px solid var(--border,rgba(0,0,0,.10)); }
.ba-modal { width: min(980px, 100%); max-height: min(92dvh, 900px); overflow-y: auto; padding: 14px; border-radius: 28px; box-shadow: 0 30px 90px rgba(15,23,42,.35); }
.ba-analysis-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 10px; margin-top: 10px; }
.ba-analysis, .ba-table-card, .ba-empty { padding: 13px; border-radius: 24px; }
.ba-analysis span { color: var(--muted,#64748b); font-size: 11px; font-weight: 950; text-transform: uppercase; letter-spacing: .08em; }
.ba-analysis strong { display: block; margin-top: 8px; font-size: clamp(22px,7vw,30px); line-height: 1; font-weight: 1000; letter-spacing: -.06em; overflow-wrap: anywhere; }
.ba-analysis p { margin: 8px 0 0; color: var(--muted,#64748b); font-size: 12px; line-height: 1.5; }
.ba-analysis-list { display: grid; gap: 10px; margin-top: 12px; }
.ba-analysis-list section { display: grid; gap: 6px; padding: 10px; border-radius: 16px; background: color-mix(in srgb,var(--muted,#64748b) 8%,transparent); }
.ba-analysis-list section > div:first-child { display: flex; justify-content: space-between; gap: 10px; }
.ba-analysis-list b, .ba-analysis-list small { font-size: 12px; } .ba-analysis-list small { color: var(--muted,#64748b); font-weight: 850; }
.ba-progress { height: 8px; border-radius: 999px; background: color-mix(in srgb,var(--muted,#64748b) 18%,transparent); overflow: hidden; } .ba-progress i { display: block; height: 100%; border-radius: inherit; background: var(--ba-primary); }
.ba-empty { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 220px; text-align: center; border-style: dashed; }
.ba-empty-icon { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 22px; background: color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff)); font-size: 28px; }
.ba-empty h3 { margin: 0; font-size: 18px; font-weight: 1000; } .ba-empty p { margin: 0; color: var(--muted,#64748b); font-size: 13px; line-height: 1.6; }
.ba-table-card { margin-top: 10px; } .ba-table-scroll { width: 100%; max-width: 100%; overflow-x: auto; border-radius: 18px; border: 1px solid var(--border,rgba(0,0,0,.08)); }
.ba-table-scroll table { width: 100%; min-width: 920px; border-collapse: collapse; background: var(--card-bg, var(--surface, var(--bg, transparent))); }
.ba-table-scroll th, .ba-table-scroll td { padding: 10px; border-bottom: 1px solid var(--border,rgba(0,0,0,.08)); vertical-align: top; text-align: left; font-size: 13px; }
.ba-table-scroll th { background: var(--table-header-bg, color-mix(in srgb, var(--ba-primary) 6%, var(--card-bg, var(--surface, var(--bg, transparent))))); color: var(--table-header-text, var(--muted, var(--text))); font-size: 11px; font-weight: 1000; text-transform: uppercase; letter-spacing: .07em; }
.ba-table-scroll td strong, .ba-table-scroll td span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .ba-table-scroll td span { margin-top: 3px; color: var(--muted,#64748b); font-size: 11px; }
.ba-table-actions { display: flex; flex-wrap: nowrap; gap: 7px; width: 100%; max-width: 100%; overflow-x: auto; scrollbar-width: none; -ms-overflow-style: none; } .ba-table-actions::-webkit-scrollbar { display: none; }
.ba-table-actions button { flex: 0 0 auto; min-height: 34px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; padding: 0 10px; background: var(--surface,#fff); color: var(--text,#111827); font-size: 11px; font-weight: 950; cursor: pointer; white-space: nowrap; }
.ba-table-actions button:first-child { background: var(--ba-primary); color: #fff; border-color: var(--ba-primary); }
.ba-delete, .ba-table-actions button.ba-delete { color: #991b1b; background: color-mix(in srgb,#dc2626 7%,var(--surface,#fff)); border-color: color-mix(in srgb,#dc2626 24%,var(--border,rgba(0,0,0,.10))); }
.ba-empty-table { padding: 22px; text-align: center; color: var(--muted,#64748b); font-weight: 850; }
.camera-backdrop { z-index: 100; place-items: center; }
.ba-camera-modal { width: min(720px, 100%); max-height: min(92dvh, 880px); overflow-y: auto; padding: 14px; border-radius: 28px; background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); box-shadow: 0 30px 90px rgba(15,23,42,.35); }
.ba-camera-preview { position: relative; width: 100%; aspect-ratio: 4 / 3; overflow: hidden; border-radius: 24px; background: #020617; border: 1px solid var(--border, rgba(0,0,0,.10)); }
.ba-camera-preview video { width: 100%; height: 100%; display: block; object-fit: cover; background: #020617; }
.ba-camera-loading { position: absolute; inset: 0; display: grid; place-items: center; background: rgba(2,6,23,.72); color: #fff; font-size: 13px; font-weight: 950; }
.ba-camera-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px; margin-top: 12px; }
.ba-camera-actions button { min-height: 42px; border-radius: 999px; padding: 0 14px; font-size: 12px; font-weight: 950; cursor: pointer; }
.ba-camera-secondary { border: 1px solid var(--border, rgba(0,0,0,.10)); background: color-mix(in srgb, var(--muted, #64748b) 8%, var(--surface, #fff)); color: var(--text, #111827); }
.ba-camera-primary { border: 1px solid var(--ba-primary); background: var(--ba-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent); }
.ba-camera-actions button:disabled { opacity: .62; cursor: not-allowed; }
@media (min-width: 680px) { .ba-page { padding: calc(12px * var(--local-density-scale,1)); padding-bottom: 44px; } .ba-search-card { grid-template-columns: minmax(0,1fr) 48px 48px 48px; } .ba-list { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; } .student-row { border-radius: 24px; padding: 12px; } .ba-analysis-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } .ba-form { grid-template-columns: repeat(2, minmax(0,1fr)); } .ba-modal-backdrop, .ba-sheet-backdrop { place-items: center; padding: 18px; } .ba-sheet { border-radius: 28px; padding: 18px; } .ba-modal { padding: 18px; } }
@media (min-width: 1040px) { .ba-page { padding: calc(16px * var(--local-density-scale,1)); padding-bottom: 48px; } .ba-search-card, .ba-list, .ba-analysis-grid, .ba-table-card, .ba-filter-chips { max-width: 1180px; margin-left: auto; margin-right: auto; } .ba-list { grid-template-columns: repeat(3, minmax(0, 1fr)); } .ba-analysis-grid { grid-template-columns: repeat(4, minmax(0,1fr)); } .ba-current-filter { grid-column: span 2; } .ba-form { grid-template-columns: repeat(3, minmax(0,1fr)); } }
@media (max-width: 520px) { .ba-page { padding: calc(7px * var(--local-density-scale,1)); padding-bottom: max(38px, env(safe-area-inset-bottom)); } .ba-icon-button, .ba-filter-button, .ba-add-inline { width: 40px; height: 40px; } .student-detail-strip { grid-template-columns: minmax(0,1fr); } .ba-sheet, .ba-modal { border-radius: 24px 24px 18px 18px; padding: 12px; } .ba-sheet-actions, .ba-modal-actions { display: grid; grid-template-columns: minmax(0,1fr); } .ba-sheet-actions button, .ba-modal-actions button { width: 100%; } .ba-media-actions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); } .ba-media-button, .ba-camera-actions button { width: 100%; } .ba-camera-actions { display: grid; grid-template-columns: minmax(0, 1fr); } .ba-camera-modal { border-radius: 22px; padding: 11px; } }
`;var V=r(53196);let W=[{id:"pathways-to-possibility",type:"image",src:"/pathways-to-possibility.png",durationSeconds:7},{id:"building-the-future",type:"image",src:"/building-the-future.png",durationSeconds:7},{id:"knowledge-in-motion",type:"image",src:"/knowledge-in-motion.png",durationSeconds:7}],J=["schools","branches","appUsers","users","accountUsers","userMemberships","memberships","announcements","messageThreads","invoices","appPayments","payments","accountSubscriptions","subscriptionPlans","syncConflicts","portalHighlights","mediaAssets"];function Z(e,a=""){return String(e??"").trim()||a}function Q(e){return null==e?"":String(e).trim()}function X(e,a){let r=Q(e),t=Q(a);return!!(r&&t&&r===t)}function ee(e){let a=Number(e??0);return Number.isFinite(a)?a:0}function ea(e){return e?.id??e?.localId??e?.cloudId??e?.payload?.id}function er(e){return!!e&&!0!==e.isDeleted&&!1!==e.active&&!["deleted","archived","inactive","disabled","blocked","suspended"].includes(Z(e.status).toLowerCase())}async function et(e){let a=V.db[e];return a?.toArray?a.toArray():[]}function ei(e,a="GHS"){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:a,maximumFractionDigits:0}).format(ee(e))}catch{return`${a} ${ee(e).toLocaleString()}`}}function en(e,a){let r=e.find(e=>X(ea(e),a));return Z(r?.publicUrl||r?.remoteUrl||r?.previewDataUrl||r?.thumbnailDataUrl||r?.localObjectUrl)}function es({slides:e}){let[a,r]=(0,s.useState)(0),t=e[a%Math.max(1,e.length)];return((0,s.useEffect)(()=>{if(!t||e.length<=1||"video"===t.type)return;let a=window.setTimeout(()=>r(a=>(a+1)%e.length),1e3*t.durationSeconds);return()=>clearTimeout(a)},[t,e.length]),t)?(0,n.jsxs)("section",{className:"od-hero",children:["video"===t.type?(0,n.jsx)("video",{src:t.src,poster:t.poster,autoPlay:!0,muted:!0,playsInline:!0,onEnded:()=>r(a=>(a+1)%e.length)}):(0,n.jsx)("img",{src:t.src,alt:""}),e.length>1?(0,n.jsx)("div",{className:"od-dots",children:e.map((e,t)=>(0,n.jsx)("button",{type:"button",className:t===a?"active":"",onClick:()=>r(t)},e.id))}):null]}):null}function eo({navigate:e,navSections:a}){let r=(0,c.useRouter)(),{accountId:t,authenticated:i,loading:o}=(0,d.F)(),{settings:l,loading:b}=(0,p.t)(),u=l?.primaryColor||"var(--primary-color,#2563eb)",[m,h]=(0,s.useState)(!0),[x,g]=(0,s.useState)({});async function f(){if(!i||!t)return void h(!1);h(!0);try{let e=await Promise.all(J.map(async e=>{let a=await et(e);return[e,a.filter(e=>!e.accountId||X(e.accountId,t))]}));g(Object.fromEntries(e))}finally{h(!1)}}(0,s.useEffect)(()=>{o||i&&t||r.replace("/login")},[o,i,t,r]),(0,s.useEffect)(()=>{o||b||f()},[i,t,o,b]);let v=(0,s.useMemo)(()=>{let e=(x.schools||[]).filter(er),a=(x.branches||[]).filter(er),r=(x.appUsers||x.users||x.accountUsers||[]).filter(er),t=(x.userMemberships||x.memberships||[]).filter(er),i=new Set([...r.map(e=>Q(e.id||e.userId||e.email)),...t.map(e=>Q(e.userId||e.appUserId||e.email))].filter(Boolean)).size,n=(x.invoices||[]).filter(er),s=[...x.appPayments||[],...x.payments||[]].filter(er),o=(x.accountSubscriptions||[]).filter(er),l=(x.subscriptionPlans||[]).filter(er),c=o.slice().sort((e,a)=>ee(a.updatedAt||a.createdAt)-ee(e.updatedAt||e.createdAt))[0],d=l.find(e=>X(ea(e),c?.planId)),p=s.filter(e=>["paid","success","succeeded","completed"].includes(Z(e.status).toLowerCase())).reduce((e,a)=>e+ee(a.amount||a.total),0),b=(x.syncConflicts||[]).filter(e=>!["resolved","closed","ignored"].includes(Z(e.status,"open").toLowerCase())).length;return{schools:e.length,branches:a.length,users:i,invoices:n.length,payments:s.length,totalPaid:p,conflicts:b,planName:Z(d?.name||c?.planName,"No plan"),subscriptionStatus:Z(c?.status,"Not set"),currency:Z(d?.currency||c?.currency||s[0]?.currency,"GHS")}},[x]),y=(0,s.useMemo)(()=>(x.schools||[]).filter(er).slice(0,3),[x.schools]),w=(0,s.useMemo)(()=>[...(x.announcements||[]).map(e=>({...e,_kind:"Announcement",_icon:"\uD83D\uDCE3",_title:Z(e.title,"Announcement"),_date:e.sentAt||e.updatedAt||e.createdAt})),...(x.payments||[]).map(e=>({...e,_kind:"Payment",_icon:"\uD83D\uDCB3",_title:ei(e.amount||e.total,e.currency||v.currency),_date:e.paidAt||e.updatedAt||e.createdAt}))].filter(er).sort((e,a)=>new Date(a._date||0).getTime()-new Date(e._date||0).getTime()).slice(0,3),[x,v.currency]),j=(0,s.useMemo)(()=>{var e,a;let r;return e=x.portalHighlights||[],a=(x.mediaAssets||[]).filter(er),(r=e.filter(er).filter(e=>(Array.isArray(e.audiences)?e.audiences.map(e=>Z(e).toLowerCase()):[Z(e.audience||e.portal||e.role||"all").toLowerCase()]).some(e=>["all","owner","super_admin","super-admin"].includes(e))).sort((e,a)=>ee(e.displayOrder||e.order)-ee(a.displayOrder||a.order)).map((e,r)=>{let t="video"===Z(e.mediaType).toLowerCase()?"video":"image",i=en(a,e.mediaAssetId)||("image"===t?Z(e.fallbackImageUrl):"");return i?{id:Q(ea(e))||`owner-highlight-${r}`,type:t,src:i,poster:en(a,e.posterMediaAssetId)||void 0,durationSeconds:Math.max(3,ee(e.durationSeconds||7))}:null}).filter(e=>!!e)).length?r:W},[x.portalHighlights,x.mediaAssets]);function k(a){if(e)return void e(a);try{window.dispatchEvent(new CustomEvent("eleeveon:portal-route",{detail:{key:a}}))}catch{}}return m||o||b?(0,n.jsx)(ec,{primary:u}):(0,n.jsxs)("main",{className:"od-page",style:{"--od-primary":u},children:[(0,n.jsx)("style",{children:ed}),(0,n.jsx)(es,{slides:j}),(0,n.jsxs)("section",{className:"od-metrics",children:[(0,n.jsxs)("button",{type:"button",onClick:()=>k("schools"),children:[(0,n.jsx)("span",{children:"Schools"}),(0,n.jsx)("strong",{children:v.schools}),(0,n.jsxs)("small",{children:[v.branches," ","branches"]})]}),(0,n.jsxs)("button",{type:"button",onClick:()=>k("users"),children:[(0,n.jsx)("span",{children:"Users"}),(0,n.jsx)("strong",{children:v.users}),(0,n.jsx)("small",{children:"account-wide"})]})]}),(0,n.jsxs)("section",{className:"od-grid",children:[(0,n.jsxs)("article",{className:"od-card",children:[(0,n.jsxs)("header",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"Institution"}),(0,n.jsx)("h2",{children:"Schools"})]}),(0,n.jsx)("button",{onClick:()=>k("schools"),children:"Manage"})]}),(0,n.jsxs)("div",{className:"od-list",children:[y.map((e,a)=>{let r=ea(e),t=(x.branches||[]).filter(e=>er(e)&&X(e.schoolId,r)).length;return(0,n.jsxs)("button",{type:"button",className:"od-row",onClick:()=>k("schools"),children:[(0,n.jsx)("span",{children:"\uD83C\uDFEB"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("strong",{children:Z(e?.name||e?.fullName||e?.title||e?.email,"Unnamed")}),(0,n.jsxs)("small",{children:[t," ","branch(es)"]})]})]},Q(r)||a)}),y.length?null:(0,n.jsx)(el,{text:"No schools yet."})]})]}),(0,n.jsxs)("article",{className:"od-card",children:[(0,n.jsxs)("header",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"Subscription"}),(0,n.jsx)("h2",{children:"Account plan"})]}),(0,n.jsx)("button",{onClick:()=>k("subscription"),children:"Open"})]}),(0,n.jsx)("strong",{className:"od-big",children:v.planName}),(0,n.jsx)("p",{children:v.subscriptionStatus}),(0,n.jsxs)("div",{className:"od-inline",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:v.invoices}),"Invoices"]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:ei(v.totalPaid,v.currency)}),"Paid"]})]})]}),(0,n.jsxs)("article",{className:"od-card",children:[(0,n.jsxs)("header",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"System"}),(0,n.jsx)("h2",{children:"Sync health"})]}),(0,n.jsx)("button",{onClick:()=>k("sync"),children:"Inspect"})]}),(0,n.jsx)("strong",{className:"od-big",children:v.conflicts?"Attention":"Healthy"}),(0,n.jsx)("p",{children:v.conflicts?`${v.conflicts} unresolved conflict(s)`:"No unresolved sync conflicts"})]}),(0,n.jsxs)("article",{className:"od-card",children:[(0,n.jsx)("header",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:"Recent"}),(0,n.jsx)("h2",{children:"Account activity"})]})}),(0,n.jsxs)("div",{className:"od-list",children:[w.map((e,a)=>(0,n.jsxs)("button",{type:"button",className:"od-row",onClick:()=>k("Payment"===e._kind?"payments":"ownerAnnouncements"),children:[(0,n.jsx)("span",{children:e._icon}),(0,n.jsxs)("div",{children:[(0,n.jsx)("strong",{children:e._title}),(0,n.jsxs)("small",{children:[e._kind," ","\xb7"," ",function(e){if(!e)return"Not set";let a=new Date(e);return Number.isFinite(a.getTime())?new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric"}).format(a):"Not set"}(e._date)]})]})]},Q(ea(e))||a)),w.length?null:(0,n.jsx)(el,{text:"No recent account activity."})]})]})]})]})}function el({text:e}){return(0,n.jsx)("div",{className:"od-empty",children:e})}function ec({primary:e}){return(0,n.jsxs)("main",{className:"od-page",style:{"--od-primary":e},children:[(0,n.jsx)("style",{children:ed}),(0,n.jsxs)("section",{className:"od-state",children:[(0,n.jsx)("div",{className:"od-spinner"}),(0,n.jsx)("h2",{children:"Opening owner home..."})]})]})}let ed=`
@keyframes odSpin {
  to { transform: rotate(360deg); }
}

.od-page {
  width: 100%;
  height: auto !important;
  min-height: 0 !important;
  overflow: visible !important;
  padding: 8px 8px calc(76px + env(safe-area-inset-bottom,0px));
  background: var(--bg,#f7f8fb);
  color: var(--text,#111827);
}

.od-page,
.od-page * {
  box-sizing: border-box;
  min-width: 0;
}

.od-page button {
  font: inherit;
  cursor: pointer;
}

.od-hero {
  position: relative;
  height: clamp(290px,47vw,390px);
  overflow: hidden;
  border-radius: 25px;
  background: #0f172a;
  box-shadow: 0 14px 34px rgba(15,23,42,.08);
}

.od-hero img,
.od-hero video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.od-dots {
  position: absolute;
  left: 50%;
  bottom: 11px;
  display: flex;
  gap: 6px;
  transform: translateX(-50%);
}

.od-dots button {
  width: 7px;
  height: 7px;
  padding: 0;
  border: 0;
  border-radius: 99px;
  background: rgba(255,255,255,.5);
}

.od-dots button.active {
  width: 20px;
  background: #fff;
}

.od-metrics,
.od-grid {
  display: grid;
  gap: 9px;
  margin-top: 9px;
}

.od-metrics {
  grid-template-columns: repeat(2,minmax(0,1fr));
}

.od-metrics button,
.od-card {
  border: 1px solid var(--border,rgba(15,23,42,.09));
  background: var(--card-bg,var(--surface,#fff));
  color: inherit;
  box-shadow: 0 8px 22px rgba(15,23,42,.045);
}

.od-metrics button {
  min-height: 92px;
  padding: 12px;
  border-radius: 20px;
  text-align: left;
}

.od-metrics span,
.od-metrics strong,
.od-metrics small {
  display: block;
}

.od-metrics span {
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
}

.od-metrics strong {
  margin-top: 5px;
  font-size: 28px;
  line-height: 1;
}

.od-metrics small {
  margin-top: 5px;
  color: var(--muted,#64748b);
  font-size: 10px;
}

.od-card {
  padding: 13px;
  border-radius: 22px;
}

.od-card header {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}

.od-card header span {
  color: var(--muted,#64748b);
  font-size: 9px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .09em;
}

.od-card h2 {
  margin: 2px 0 0;
  font-size: 16px;
}

.od-card header button {
  border: 0;
  border-radius: 999px;
  padding: 6px 9px;
  background: color-mix(in srgb,var(--od-primary) 9%,transparent);
  color: var(--od-primary);
  font-size: 10px;
  font-weight: 900;
}

.od-list {
  display: grid;
  gap: 6px;
}

.od-row {
  width: 100%;
  display: grid;
  grid-template-columns: 36px minmax(0,1fr);
  gap: 9px;
  align-items: center;
  border: 0;
  border-radius: 15px;
  padding: 8px;
  background: color-mix(in srgb,var(--muted,#64748b) 5%,transparent);
  color: inherit;
  text-align: left;
}

.od-row > span {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background: color-mix(in srgb,var(--od-primary) 10%,transparent);
}

.od-row strong,
.od-row small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.od-row strong {
  font-size: 12px;
}

.od-row small {
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 10px;
}

.od-big {
  display: block;
  overflow-wrap: anywhere;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -.05em;
}

.od-card > p {
  margin: 6px 0 0;
  color: var(--muted,#64748b);
  font-size: 10px;
}

.od-inline {
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 7px;
  margin-top: 13px;
}

.od-inline span {
  padding: 9px;
  border-radius: 14px;
  background: color-mix(in srgb,var(--muted,#64748b) 6%,transparent);
  color: var(--muted,#64748b);
  font-size: 9px;
}

.od-inline b {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
  color: var(--text,#111827);
  font-size: 14px;
}

.od-empty {
  padding: 18px 8px;
  text-align: center;
  color: var(--muted,#64748b);
  font-size: 11px;
}

.od-state {
  min-height: 280px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
}

.od-spinner {
  width: 36px;
  height: 36px;
  border: 4px solid color-mix(in srgb,var(--od-primary) 16%,transparent);
  border-top-color: var(--od-primary);
  border-radius: 999px;
  animation: odSpin .8s linear infinite;
}

.od-state h2 {
  margin: 0;
  font-size: 17px;
}

.od-page,
.app-content,
.app-content-inner,
.shell-portal-content,
.shell-content-background {
  height: auto !important;
  max-height: none !important;
  min-height: 0 !important;
  overflow-y: visible !important;
}

html {
  overflow-y: auto !important;
}

body {
  overflow-y: visible !important;
}

@media (min-width:720px) {
  .od-page {
    padding: 12px 12px 24px;
  }

  .od-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }

  .od-hero {
    height: 370px;
  }
}

@media (min-width:1100px) {
  .od-page {
    max-width: 1180px;
    margin: 0 auto;
  }
}
`,ep=[{key:"term-1",name:"Term 1",type:"Term 1",order:1},{key:"term-2",name:"Term 2",type:"Term 2",order:2},{key:"term-3",name:"Term 3",type:"Term 3",order:3}],eb=[{key:"a",minScore:80,maxScore:100,grade:"A",remark:"Excellent",order:1},{key:"b",minScore:70,maxScore:79.99,grade:"B",remark:"Very Good",order:2},{key:"c",minScore:60,maxScore:69.99,grade:"C",remark:"Good",order:3},{key:"d",minScore:50,maxScore:59.99,grade:"D",remark:"Credit",order:4},{key:"e",minScore:40,maxScore:49.99,grade:"E",remark:"Pass",order:5},{key:"f",minScore:0,maxScore:39.99,grade:"F",remark:"Fail",order:6}],eu=[{key:"continuous-assessment",name:"Continuous Assessment",weight:30,maxScore:30,order:1,compulsory:!0},{key:"examination",name:"Examination",weight:70,maxScore:70,order:2,compulsory:!0}],em={literacy:["literacy","Language and Literacy","LIT"],numeracy:["numeracy","Numeracy","NUM"],owop:["owop","Our World and Our People","OWOP"],"creative-arts":["creative-arts","Creative Arts","CA"],english:["english","English Language","ENG"],mathematics:["mathematics","Mathematics","MATH"],science:["science","Science","SCI"],history:["history","History","HIST"],"ghanaian-language":["ghanaian-language","Ghanaian Language","GHL"],french:["french","French Language","FRE"],computing:["computing","Computing","COMP"],rme:["rme","Religious and Moral Education","RME"],pe:["pe","Physical Education","PE"],"social-studies":["social-studies","Social Studies","SOC"],"career-technology":["career-technology","Career Technology","CT"],"creative-arts-design":["creative-arts-design","Creative Arts and Design","CAD"],"pe-health":["pe-health","Physical Education and Health","PEH"],arabic:["arabic","Arabic","ARA"],"core-mathematics":["core-mathematics","Core Mathematics","CMATH"],"integrated-science":["integrated-science","Integrated Science","ISCI"]},eh=["literacy","numeracy","creative-arts","owop"],ex=["english","mathematics","science","history","ghanaian-language","creative-arts","rme","pe"],eg=[...ex,"french","computing"],ef=["english","mathematics","science","social-studies","ghanaian-language","french","computing","career-technology","creative-arts-design","rme","pe-health","arabic"],ev=["english","core-mathematics","integrated-science","social-studies"],ey={nursery:[1,2].map(e=>({key:`nursery-${e}`,name:`Nursery ${e}`,code:`N${e}`,level:"nursery",subjects:eh})),kg:[1,2].map(e=>({key:`kg-${e}`,name:`KG ${e}`,code:`KG${e}`,level:"nursery",subjects:eh})),primary:[1,2,3,4,5,6].map(e=>({key:`basic-${e}`,name:`Basic ${e}`,code:`B${e}`,level:"primary",subjects:e<=3?ex:eg})),jhs:[1,2,3].map(e=>({key:`jhs-${e}`,name:`JHS ${e}`,code:`JHS${e}`,level:"junior_high",subjects:ef.filter(e=>"arabic"!==e)})),shs:[1,2,3].map(e=>({key:`shs-${e}`,name:`SHS ${e}`,code:`SHS${e}`,level:"senior_high",subjects:ev}))},ew={nursery:"Nursery",kg:"Kindergarten",primary:"Primary",jhs:"Junior High",shs:"Senior High"},ej={"ghana-early-childhood-v1":["nursery","kg"],"ghana-kg-v2":["kg"],"ghana-primary-v1":["primary"],"ghana-kg-primary-v2":["kg","primary"],"ghana-jhs-v1":["jhs"],"ghana-basic-school-v1":["primary","jhs"],"ghana-kg-primary-jhs-v2":["kg","primary","jhs"],"ghana-shs-v1":["shs"],"ghana-jhs-shs-v2":["jhs","shs"],"ghana-full-school-v1":["kg","primary","jhs","shs"]},ek=Object.fromEntries(Object.keys(ej).map(e=>[e,function(e){let a=ej[e],r=a.flatMap(e=>ey[e]),t=[...new Set(r.flatMap(e=>e.subjects))].map(e=>{let[a,r,t]=em[e];return{key:a,name:r,code:t,category:"core"}}),i=[],n=[],s=[],o=[],l=[],c=[],d=[],p=[];for(let e of a){l.push({key:`${e}-department`,name:`${ew[e]} Department`,type:"department"}),s.push({key:e,name:`Ghana ${ew[e]} Curriculum`,code:`GH-${e.toUpperCase()}`,academicStructureKey:"academic-year",curriculumVersion:"NaCCA-2024-2026"}),o.push({key:`${e}-general`,name:"General",code:"GEN",curriculumKey:e}),[...new Set(ey[e].flatMap(e=>e.subjects))].forEach((a,r)=>i.push({key:`${e}:${a}`,subjectKey:a,curriculumKey:e,type:"core",orderIndex:r+1}));let a=`${e}-standard`;for(let r of(c.push({key:a,name:`${ew[e]} Standard Assessment`,totalScore:100,academicStructureKey:"academic-year"}),eu.forEach(r=>d.push({...r,key:`${e}:${r.key}`,assessmentStructureKey:a})),ey[e]))for(let[t,i]of r.subjects.entries()){let s=`${r.key}:${i}`;n.push({key:s,classKey:r.key,subjectKey:i,curriculumSubjectKey:`${e}:${i}`,academicStructureKey:"academic-year",orderIndex:t+1}),p.push({key:s,classSubjectKey:s,assessmentStructureKey:a,gradingSystemKey:"percentage"})}}return{code:e,version:2,name:a.map(e=>ew[e]).join(" + "),organizations:l,academicStructures:[{key:"academic-year",name:"Academic Year",level:r[0]?.level??"primary"}],academicPeriods:ep.map(e=>({...e,academicStructureKey:"academic-year"})),classes:r.map(({subjects:e,...a})=>a),subjects:t,curriculums:s,curriculumPathways:o,curriculumSubjects:i,subjectPrerequisites:[],classSubjects:n,gradingSystems:[{key:"percentage",name:"Percentage Grading",type:"percentage",default:!0}],gradeRules:eb.map(e=>({...e,gradingSystemKey:"percentage"})),assessmentStructures:c,assessmentStructureItems:d,assessmentApplicabilities:p}}(e)])),eN=["organizations","academicStructures","academicPeriods","classes","subjects","curriculums","curriculumPathways","curriculumSubjects","subjectPrerequisites","classSubjects","gradingStructures","gradeRules","assessmentStructures","assessmentStructureItems","assessmentApplicabilities"],eS={academicStructures:["name"],academicPeriods:["academicStructureId","name"],classes:["code"],subjects:["code"],organizations:["name"],curriculums:["code"],curriculumPathways:["curriculumId","code"],curriculumSubjects:["curriculumId","subjectId"],classSubjects:["classId","subjectId"],gradingStructures:["name"],gradeRules:["gradingStructureId","grade"],assessmentStructures:["name"],assessmentStructureItems:["assessmentStructureId","name"],assessmentApplicabilities:["classSubjectId"],subjectPrerequisites:["curriculumSubjectId","prerequisiteSubjectId"]};async function eC(e,a,r,t){let i={accountId:e.accountId,schoolId:e.schoolId,branchId:e.branchId},n=`${a}:${r.key}`,s=await e.store.findOne(a,{...i,setupSeedKey:n});if(s&&!s.isDeleted)return s;let o=eS[a]||[];if(o.length&&o.every(e=>void 0!==t[e]&&null!==t[e]&&""!==t[e])){let r=await e.store.findOne(a,{...i,...Object.fromEntries(o.map(e=>[e,t[e]]))});if(r&&!r.isDeleted)return r}}async function eI(e,a,r,t){let i,n=await eC(e,a,r,t);if(n){e.ids[a][r.key]=String(n.id),e.counts[a].reused++;let i=Object.fromEntries(Object.entries(t).filter(([e,a])=>void 0!==a&&void 0===n[e]));return Object.keys(i).length&&e.store.update&&await e.store.update(a,String(n.id),i),String(n.id)}let s=await e.store.create(a,{accountId:e.accountId,schoolId:e.schoolId,branchId:e.branchId,...t,...(i=r.key,{setupSource:"seeded",setupTemplateCode:e.templateCode,setupTemplateVersion:e.templateVersion,setupSeedKey:`${a}:${i}`}),active:t.active??!0});return e.ids[a][r.key]=String(s.id),e.counts[a].created++,String(s.id)}function eA(e,a,r){if("string"!=typeof r)throw Error(`Missing reference key for ${a}`);let t=e.ids[a][r];if(!t)throw Error(`Unresolved ${a} seed key: ${r}`);return t}async function ez(e,a){for(let r of a)await eI(e,"organizations",r,{...r,key:void 0})}async function eM(e,a){for(let r of a)await eI(e,"academicStructures",r,{...r,key:void 0,name:e.academicYearName,startDate:r.startDate??e.academicYearStart,endDate:r.endDate??e.academicYearEnd})}let e$=e=>e.toISOString().slice(0,10);async function eP(e,a){let r=new Date(`${e.academicYearStart}T12:00:00Z`),t=Math.floor((new Date(`${e.academicYearEnd}T12:00:00Z`).getTime()-r.getTime())/864e5)+1;for(let i of a){let a=Math.max(0,Math.min(2,Number(i.order??1)-1)),n=new Date(r.getTime()+864e5*Math.floor(t*a/3)),s=new Date(r.getTime()+(Math.floor(t*(a+1)/3)-1)*864e5);await eI(e,"academicPeriods",i,{...i,key:void 0,academicStructureId:eA(e,"academicStructures",i.academicStructureKey),startDate:i.startDate??e$(n),endDate:i.endDate??e$(s)})}}async function eF(e,a){for(let r of a)await eI(e,"classes",r,{...r,key:void 0})}async function eT(e,a){for(let r of a)await eI(e,"subjects",r,{...r,key:void 0})}async function eR(e,a){for(let r of a)await eI(e,"curriculums",r,{...r,key:void 0,academicStructureId:eA(e,"academicStructures",r.academicStructureKey),effectiveFrom:r.effectiveFrom??e.academicYearStart,effectiveTo:r.effectiveTo??e.academicYearEnd})}async function eD(e,a){for(let r of a)await eI(e,"curriculumPathways",r,{...r,key:void 0,curriculumId:eA(e,"curriculums",r.curriculumKey)})}async function eE(e,a){for(let r of a)await eI(e,"curriculumSubjects",r,{...r,key:void 0,curriculumId:eA(e,"curriculums",r.curriculumKey),subjectId:eA(e,"subjects",r.subjectKey),pathwayId:r.pathwayKey?eA(e,"curriculumPathways",r.pathwayKey):void 0})}async function eL(e,a){for(let r of a)await eI(e,"subjectPrerequisites",r,{...r,key:void 0,curriculumSubjectId:eA(e,"curriculumSubjects",r.curriculumSubjectKey),prerequisiteSubjectId:eA(e,"subjects",r.prerequisiteSubjectKey)})}async function eB(e,a){for(let r of a)await eI(e,"classSubjects",r,{...r,key:void 0,classId:eA(e,"classes",r.classKey),subjectId:eA(e,"subjects",r.subjectKey),curriculumSubjectId:eA(e,"curriculumSubjects",r.curriculumSubjectKey),academicStructureId:eA(e,"academicStructures",r.academicStructureKey),orderIndex:r.orderIndex??0,active:!0})}async function eU(e,a){for(let r of a)await eI(e,"gradingStructures",r,{...r,key:void 0})}async function eO(e,a){for(let r of a)await eI(e,"gradeRules",r,{...r,key:void 0,gradingStructureId:eA(e,"gradingStructures",r.gradingSystemKey)})}async function e_(e,a){for(let r of a)await eI(e,"assessmentStructures",r,{...r,key:void 0,academicStructureId:eA(e,"academicStructures",r.academicStructureKey)})}async function eH(e,a){for(let r of a)await eI(e,"assessmentStructureItems",r,{...r,key:void 0,assessmentStructureId:eA(e,"assessmentStructures",r.assessmentStructureKey)})}async function eK(e,a){for(let r of a)await eI(e,"assessmentApplicabilities",r,{...r,key:void 0,classSubjectId:eA(e,"classSubjects",r.classSubjectKey),assessmentStructureId:eA(e,"assessmentStructures",r.assessmentStructureKey),gradingStructureId:r.gradingSystemKey?eA(e,"gradingStructures",r.gradingSystemKey):void 0,active:!0})}async function eq(e){let a=function(e){let a=ek[e];if(!a)throw Error(`Unknown setup template: ${e}`);return a}(e.templateCode),r=e=>new Set(a[e].map(e=>e.key));for(let[e,t,i]of[["academicPeriods","academicStructures","academicStructureKey"],["curriculums","academicStructures","academicStructureKey"],["curriculumPathways","curriculums","curriculumKey"],["curriculumSubjects","curriculums","curriculumKey"],["curriculumSubjects","subjects","subjectKey"],["classSubjects","classes","classKey"],["classSubjects","subjects","subjectKey"],["classSubjects","curriculumSubjects","curriculumSubjectKey"],["classSubjects","academicStructures","academicStructureKey"],["gradeRules","gradingSystems","gradingSystemKey"],["assessmentStructures","academicStructures","academicStructureKey"],["assessmentStructureItems","assessmentStructures","assessmentStructureKey"],["assessmentApplicabilities","classSubjects","classSubjectKey"],["assessmentApplicabilities","assessmentStructures","assessmentStructureKey"]]){let n=r(t);for(let r of a[e])if(!n.has(String(r[i])))throw Error(`Invalid ${a.code}: ${e}.${r.key} missing ${t}.${String(r[i])}`)}for(let e of["academicStructures","academicPeriods","classes","subjects","curriculums","curriculumSubjects","classSubjects","gradingSystems","gradeRules","assessmentStructures","assessmentStructureItems","assessmentApplicabilities"]){let r=a[e];if(new Set(r.map(e=>e.key)).size!==r.length)throw Error(`Duplicate ${e} template keys`)}if(1!==a.academicStructures.length||3!==a.academicPeriods.length)throw Error("Setup must contain exactly one academic year and three terms");let t=function(e,a){let r={},t={};for(let e of eN)r[e]={},t[e]={created:0,reused:0};return{...e,templateVersion:a,ids:r,counts:t}}(e,a.version);return await ez(t,a.organizations),await eM(t,a.academicStructures),await eP(t,a.academicPeriods),await eF(t,a.classes),await eT(t,a.subjects),await eR(t,a.curriculums),await eD(t,a.curriculumPathways),await eE(t,a.curriculumSubjects),await eL(t,a.subjectPrerequisites),await eB(t,a.classSubjects),await eU(t,a.gradingSystems),await eO(t,a.gradeRules),await e_(t,a.assessmentStructures),await eH(t,a.assessmentStructureItems),await eK(t,a.assessmentApplicabilities),{templateCode:t.templateCode,templateVersion:t.templateVersion,counts:t.counts,ids:t.ids}}var eG=r(8003),eY=r(17074);let eV=[{value:"none",label:"No automatic setup",note:"Create only the branch."},{value:"ghana-kg-v2",label:"KG",note:"KG 1–2"},{value:"ghana-primary-v1",label:"Primary",note:"Basic 1–6"},{value:"ghana-jhs-v1",label:"JHS",note:"JHS 1–3"},{value:"ghana-shs-v1",label:"SHS",note:"SHS 1–3"},{value:"ghana-kg-primary-v2",label:"KG + Primary",note:"KG 1–2 and Basic 1–6"},{value:"ghana-basic-school-v1",label:"Primary + JHS",note:"Basic 1–6 and JHS 1–3"},{value:"ghana-kg-primary-jhs-v2",label:"KG + Primary + JHS",note:"KG 1–2, Basic 1–6 and JHS 1–3"},{value:"ghana-jhs-shs-v2",label:"JHS + SHS",note:"JHS 1–3 and SHS 1–3"},{value:"ghana-full-school-v1",label:"KG + Primary + JHS + SHS",note:"KG 1–2, Basic 1–6, JHS 1–3 and SHS 1–3"},{value:"ghana-early-childhood-v1",label:"Nursery + KG",note:"Nursery 1–2 and KG 1–2"}],eW=(i=(t=new Date).getMonth()>=7?t.getFullYear():t.getFullYear()-1,{name:`${i}/${i+1} Academic Year`,start:`${i}-09-01`,end:`${i+1}-08-31`});function eJ(e){try{return window.localStorage.getItem(e)||window.sessionStorage.getItem(e)}catch{return null}}let eZ={schoolId:"",name:"",code:"",phone:"",email:"",address:"",city:"",latitude:"",longitude:"",accuracyMeters:"",locationLabel:"",formattedAddress:"",locationType:"school",locationSource:"manual",locationPrecision:"exact",locationCapturedAt:void 0,mapVisible:!0,locationRestricted:!1,logo:"",logoMediaId:void 0,photo:"",photoMediaId:void 0,bannerImage:"",bannerImageMediaId:void 0,active:!0,setupMode:"ghana-kg-primary-jhs-v2",academicYearName:eW.name,academicYearStart:eW.start,academicYearEnd:eW.end},eQ=e=>null==e||""===e?"":String(e).trim(),eX=(e,a)=>String(e??"")===String(a??""),e0=e=>String(e||"").toLowerCase().trim(),e1=e=>u.db[e],e2={create:async(e,a)=>await (0,m.oJ)(e,a),update:async(e,a,r)=>(0,m.Po)(e,a,r),findOne:async(e,a)=>(await e1(e)?.toArray?.()||[]).find(e=>!e?.isDeleted&&Object.entries(a).every(([a,r])=>e?.[a]===r))},e4=e=>String(e||"").trim(),e8=e=>e4(e?.name)||"Unnamed branch",e9=e=>e4(e?.name)||"Unnamed school",e7=e=>!1===e?"Inactive":"Active";function e6(e){return!1===e?"red":"green"}let e3=e=>{if(!e)return"Not set";let a="number"==typeof e?e:new Date(e).getTime();if(!Number.isFinite(a))return"Not set";try{return new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",year:"numeric"}).format(new Date(a))}catch{return"Not set"}},e5=(e,a)=>`branches:${e}:${a}`,ae=e=>{let a=String(e||"");if(!(!a||a.startsWith("blob:"))&&!a.startsWith("data:image/"))return a},aa=h.$S.BRANCHES||h.$S.BRANCH||"branches",ar={logo:h.Vq.LOGO||"logo",photo:h.Vq.PHOTO||"photo",bannerImage:h.Vq.BANNER_IMAGE||h.Vq.COVER_PHOTO||"bannerImage"},at=()=>(0,h.It)(aa);function ai({children:e,tone:a="gray"}){return(0,n.jsx)("span",{className:`ba-chip ${a}`,children:e})}function an({name:e,photo:a,primary:r}){return(0,n.jsx)("div",{className:"ba-avatar",style:{background:a?`url(${a}) center/cover`:`linear-gradient(135deg, ${r}, rgba(15,23,42,.9))`},children:!a&&String(e||"S").slice(0,1).toUpperCase()})}function as({icon:e,title:a,text:r}){return(0,n.jsxs)("section",{className:"ba-empty",children:[(0,n.jsx)("div",{className:"ba-empty-icon",children:e}),(0,n.jsx)("h3",{children:a}),(0,n.jsx)("p",{children:r})]})}function ao(){var e;let a=(0,c.useRouter)(),{accountId:r,authenticated:t,loading:i}=(0,d.F)(),{settings:o,loading:l}=(0,p.t)(),{activeMembership:u}=(0,b.A)(),x=o?.primaryColor||"var(--primary-color, #2563eb)",g=(0,s.useMemo)(()=>(function(){let e=eJ("eleeveon_open_workspace");if(!e)return null;try{return JSON.parse(e)}catch{return null}})(),[]),f=(0,s.useMemo)(()=>e4(g?.accountId)||e4(g?.membership?.accountId)||e4(u?.accountId)||e4(r)||e4(o?.accountId)||e4(eJ("accountId"))||e4(eJ("eleeveon_account_id")),[r,u?.accountId,g?.accountId,g?.membership?.accountId,o?.accountId]),[v,y]=(0,s.useState)(!0),[w,j]=(0,s.useState)(!1),[k,N]=(0,s.useState)([]),[S,C]=(0,s.useState)([]),[I,A]=(0,s.useState)([]),[z,M]=(0,s.useState)([]),[$,P]=(0,s.useState)([]),[F,T]=(0,s.useState)({}),[R,D]=(0,s.useState)("cards"),[E,L]=(0,s.useState)(""),[B,U]=(0,s.useState)("all"),[O,_]=(0,s.useState)(!0),[H,K]=(0,s.useState)({students:!0,teachers:!0,parents:!0}),[q,G]=(0,s.useState)(!1),[Y,V]=(0,s.useState)(!1),[W,J]=(0,s.useState)(null),[Z,Q]=(0,s.useState)(!1),[X,ee]=(0,s.useState)(eZ),[ea,er]=(0,s.useState)(null),et=(0,s.useRef)(at()),ei=(0,s.useRef)(null),en=(0,s.useRef)(null),[es,eo]=(0,s.useState)(!1),[el,ec]=(0,s.useState)("logo"),[ed,ep]=(0,s.useState)("environment"),[eb,eu]=(0,s.useState)(!1),[em,eh]=(0,s.useState)(!1);(0,s.useEffect)(()=>{!i&&(t&&f||a.replace("/login"))},[i,t,f,a]);let ex=e=>(!e.accountId||e4(e.accountId)===f)&&!e.isDeleted,eg=(e,a)=>{er({tone:e,message:a}),window.setTimeout(()=>er(e=>e?.message===a?null:e),4200)},ef=()=>{(0,h.IK)(en.current),en.current=null,ei.current&&(ei.current.srcObject=null)},ev=()=>!!t&&!!f||(eg("error","Sign in before managing owner branches."),!1),ey=()=>{ef(),eo(!1),eh(!1),eu(!1)},ew=async()=>{if(!ei.current)return void eg("error","Camera preview is not ready yet.");try{eh(!0);let e=await (0,h.ln)(ei.current,{fileName:`${el}-${Date.now()}.jpg`,mimeType:"image/jpeg",quality:.88,maxWidth:"logo"===el?900:1440,maxHeight:900});await eE(el,e),ey()}catch(e){console.error("Failed to capture branch image:",e),eg("error",e?.message||"Failed to capture photo.")}finally{eh(!1)}},ej=()=>{Object.values(F).forEach(h.hZ),N([]),C([]),A([]),M([]),P([]),T({})},ek=async e=>{let a={};await Promise.all(e.map(async e=>{let r=eQ(e.id);if(!r)return;let t=async(e,a)=>{let t=await (0,h.cg)({accountId:f||void 0,ownerTable:aa,ownerId:r,fieldKey:ar[e]});if(t?.id){let e=await (0,h.fW)(String(t.id));if(e)return e}let i=eQ(a);if(!i)return"";let n=await e1("mediaAssets")?.get?.(i);return n&&!n.isDeleted&&!1!==n.active&&n.accountId===f&&n.ownerTable===aa&&n.fieldKey===ar[e]&&eX(n.ownerId,r)?(0,h.fW)(String(i)):""};try{let i=await t("logo",e.logoMediaId);i&&(a[e5(r,"logo")]=i);let n=await t("photo",e.photoMediaId);n&&(a[e5(r,"photo")]=n);let s=await t("bannerImage",e.bannerImageMediaId);s&&(a[e5(r,"bannerImage")]=s)}catch(e){console.error("Failed to resolve branch media:",r,e)}})),T(e=>(Object.values(e).forEach(e=>{Object.values(a).includes(e)||(0,h.hZ)(e)}),a))},eN=async()=>{if(!t||!f){ej(),y(!1);return}try{y(!0);let[e,a,r,t,i]=await Promise.all([e1("branches")?.toArray?.()||[],e1("schools")?.toArray?.()||[],e1("students")?.toArray?.()||[],e1("teachers")?.toArray?.()||[],e1("parents")?.toArray?.()||[]]),n=a.filter(e=>ex(e)&&!1!==e.active).sort((e,a)=>e9(e).localeCompare(e9(a))),s=new Set(n.map(e=>eQ(e.id)).filter(Boolean)),o=e.filter(e=>ex(e)&&(!e.schoolId||s.has(eQ(e.schoolId)))).sort((e,a)=>e8(e).localeCompare(e8(a)));C(n),N(o),A(r.filter(e=>ex(e)&&!1!==e.active&&!["withdrawn","deleted","archived","inactive"].includes(e0(e.status)))),M(t.filter(e=>ex(e)&&!1!==e.active&&!["deleted","archived","inactive"].includes(e0(e.status)))),P(i.filter(e=>ex(e)&&!1!==e.active&&!["deleted","archived","inactive"].includes(e0(e.status)))),await ek(o)}catch(e){console.error(e),ej(),eg("error","Failed to load owner branches.")}finally{y(!1)}};(0,s.useEffect)(()=>{i||l||eN()},[t,f,i,l,u?.role,u?.accountId,g?.openedAt,g?.membershipId]),(0,s.useEffect)(()=>()=>{Object.values(F).forEach(h.hZ)},[F]),(0,s.useEffect)(()=>{if(!es)return;let e=!1;return(async()=>{try{eu(!0),ef();let a=await (0,h.Ik)({facingMode:ed,width:1280,height:720});if(e)return void(0,h.IK)(a);en.current=a,ei.current&&await (0,h.Pr)(ei.current,a)}catch(e){console.error("Failed to open branch camera:",e),eg("error",e?.message||(0,h.f5)()),eo(!1)}finally{e||eu(!1)}})(),()=>{e=!0,ef()}},[es,ed]);let eS=(0,s.useMemo)(()=>new Map(S.map(e=>[eQ(e.id),e])),[S]),eC=(0,s.useMemo)(()=>k.map(e=>{let a=eQ(e.id),r=eS.get(eQ(e.schoolId));return{id:a,row:e,school:r,schoolName:e9(r),logoUrl:F[e5(a,"logo")]||ae(e.logo),photoUrl:F[e5(a,"photo")]||ae(e.photo),bannerImageUrl:F[e5(a,"bannerImage")]||ae(e.bannerImage),active:!e?.isDeleted&&e?.active!==!1&&!["deleted","archived","inactive"].includes(e0(e?.status))}}),[F,k,eS]),eI=(0,s.useMemo)(()=>{let e=E.trim().toLowerCase();return eC.filter(a=>{let r=a.row;return("active"!==B||!1!==r.active)&&("inactive"!==B||!1===r.active)&&("no_contact"!==B||!r.phone&&!r.email)&&("no_school"!==B||!r.schoolId)&&(!e||`${r.name||""} ${r.code||""} ${r.phone||""} ${r.email||""} ${r.address||""} ${r.city||""} ${a.schoolName||""}`.toLowerCase().includes(e))}).sort((e,a)=>e8(e.row).localeCompare(e8(a.row)))},[B,E,eC]),eA=(0,s.useMemo)(()=>O?eI.reduce((e,a)=>{let r=a.row,t=(0,eY.c2)({...r,id:a.id,photo:a.logoUrl||a.photoUrl||r.logo||r.photo},{entityType:"branch",layerId:"branches",icon:"school",imageUrl:a.logoUrl||a.photoUrl,subtitle:[a.schoolName,r.city,r.address].filter(Boolean).join(" \xb7 "),privacy:{allowRestricted:!0,requireConsent:!1}});return t&&e.push({...t,description:r.phone||r.email||"School branch building",metadata:{...t.metadata||{},branchId:a.id,markerRole:"branch-building",markerColor:"#7c3aed",schoolName:a.schoolName}}),e},[]):[],[O,eI]),ez=(0,s.useMemo)(()=>{let e=[],a=(a,r,t,i,n)=>{H[t]&&a.forEach(a=>{if(!1===a.mapVisible)return;let s=(0,eY.c2)(a,{entityType:r,layerId:t,icon:i,imageUrl:ae(a.photo),subtitle:[a.locationLabel||a.formattedAddress||a.address,e8(k.find(e=>eX(e.id,a.branchId)))].filter(Boolean).join(" \xb7 "),privacy:{allowRestricted:!0,requireConsent:!1}});s&&e.push({...s,metadata:{...s.metadata||{},[`${r}Id`]:eQ(a.id),branchId:eQ(a.branchId),markerRole:r,markerColor:n}})})};return a(I,"student","students","student","#2563eb"),a(z,"teacher","teachers","teacher","#16a34a"),a($,"parent","parents","parent","#ea580c"),e},[$,k,I,z,H]),eM=(0,s.useMemo)(()=>[...eA,...ez],[eA,ez]),e$=(0,s.useMemo)(()=>({total:k.length,schools:S.length,active:k.filter(e=>!1!==e.active&&!e.isDeleted).length,inactive:k.filter(e=>!1===e.active&&!e.isDeleted).length,noContact:k.filter(e=>!e.phone&&!e.email).length,noSchool:k.filter(e=>!e.schoolId).length,showing:eI.length}),[S.length,eI.length,k]),eP=(0,s.useMemo)(()=>+("all"!==B),[B]),eF=(0,s.useMemo)(()=>av(eC,e=>e7(e.row.active)),[eC]),eT=(0,s.useMemo)(()=>av(eC,e=>e.schoolName||"No school"),[eC]),eR=(0,s.useMemo)(()=>av(eC,e=>e.row.phone||e.row.email?"Contact ready":"No contact"),[eC]),eD=e=>ee(a=>({...a,...e})),eE=async(e,a)=>{if(a&&ev())try{let r=X.id?void 0:et.current,t=await (0,h.fA)(a,{accountId:f,schoolId:X.schoolId||void 0,branchId:X.id||void 0,ownerTable:aa,ownerId:X.id||void 0,ownerTempKey:r,fieldKey:ar[e],variant:"logo"===e?"avatar":"bannerImage"===e?"cover":"image",replaceExisting:!0});eD({[e]:t.previewUrl,[`${e}MediaId`]:t.assetId});let i="logo"===e?"Branch logo":"photo"===e?"Branch photo":"Branch banner";eg("success",`${i} optimized.`)}catch(e){console.error("Failed to process branch image:",e),eg("error",e?.message||"Failed to process image.")}},eL=async e=>{if(!t||!f)throw Error("Sign in before updating map locations.");let a=String(e.marker.entityType||""),r=e.marker.metadata||{},i="branch"===a?"branches":"student"===a?"students":"teacher"===a?"teachers":"parent"===a?"parents":"",n=eQ("branch"===a?r.branchId||e.marker.id:"student"===a?r.studentId||e.marker.id:"teacher"===a?r.teacherId||e.marker.id:r.parentId||e.marker.id);if(!i||!n)throw Error("The selected map item could not be identified.");await (0,m.Po)(i,n,{latitude:e.coordinate.latitude,longitude:e.coordinate.longitude,locationSource:"manual",locationCapturedAt:Date.now(),mapVisible:!0,isDeleted:!1}),eg("success",`${"branch"===a?"Branch":a.charAt(0).toUpperCase()+a.slice(1)} location updated.`),await eN()},eB=e=>{let a=eQ(e.id);et.current=at(),J(null),ee({id:a,name:e.name||"",schoolId:e.schoolId?String(e.schoolId):"",code:e.code||"",phone:e.phone||"",email:e.email||"",address:e.address||"",city:e.city||"",latitude:null==e.latitude?"":String(e.latitude),longitude:null==e.longitude?"":String(e.longitude),accuracyMeters:null==e.accuracyMeters?"":String(e.accuracyMeters),locationLabel:e.locationLabel||"",formattedAddress:e.formattedAddress||"",locationType:e.locationType||"school",locationSource:e.locationSource||"manual",locationPrecision:e.locationPrecision||"exact",locationCapturedAt:e.locationCapturedAt||void 0,mapVisible:!1!==e.mapVisible,locationRestricted:!!e.locationRestricted,logo:F[e5(a,"logo")]||ae(e.logo)||"",logoMediaId:e.logoMediaId?String(e.logoMediaId):void 0,photo:F[e5(a,"photo")]||ae(e.photo)||"",photoMediaId:e.photoMediaId?String(e.photoMediaId):void 0,bannerImage:F[e5(a,"bannerImage")]||ae(e.bannerImage)||"",bannerImageMediaId:e.bannerImageMediaId?String(e.bannerImageMediaId):void 0,active:!1!==e.active,setupMode:"none",academicYearName:eW.name,academicYearStart:eW.start,academicYearEnd:eW.end}),Q(!0)},eU=async e=>{e?.preventDefault();let a=(()=>{if(!t||!f)return"Sign in first.";if(!X.schoolId)return"Select the school this branch belongs to.";if(!S.some(e=>eX(e.id,X.schoolId)))return"Selected school does not belong to this owner account.";if(!X.name.trim())return"Enter branch name.";if(!X.id&&"none"!==X.setupMode){if(!X.academicYearName.trim())return"Enter the academic year name for automatic setup.";if(!X.academicYearStart)return"Select the academic year start date.";if(!X.academicYearEnd)return"Select the academic year end date.";if(new Date(X.academicYearEnd).getTime()<=new Date(X.academicYearStart).getTime())return"Academic year end date must be after its start date."}let e=""!==X.latitude.trim(),a=""!==X.longitude.trim();if(e!==a)return"Enter both latitude and longitude, or leave both empty.";if(e&&a){let e=Number(X.latitude),a=Number(X.longitude);if(!Number.isFinite(e)||e<-90||e>90)return"Latitude must be between -90 and 90.";if(!Number.isFinite(a)||a<-180||a>180)return"Longitude must be between -180 and 180."}return k.find(e=>!(X.id&&eX(e.id,X.id))&&eX(e.schoolId,X.schoolId)&&e4(e.name).toLowerCase()===e4(X.name).toLowerCase()&&!e.isDeleted)?"A branch with this name already exists for the selected school.":X.email.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(X.email.trim())?"Enter a valid branch email.":""})();if(a)return void eg("error",a);if(t&&f)try{j(!0);let e=X.id?k.find(e=>eX(e.id,X.id)):void 0,a={accountId:f,name:X.name.trim(),schoolId:X.schoolId,code:X.code.trim()||void 0,phone:X.phone.trim()||void 0,email:X.email.trim()||void 0,address:X.address.trim()||void 0,city:X.city.trim()||void 0,latitude:""===X.latitude.trim()?void 0:Number(X.latitude),longitude:""===X.longitude.trim()?void 0:Number(X.longitude),accuracyMeters:""===X.accuracyMeters.trim()?void 0:Number(X.accuracyMeters),locationLabel:X.locationLabel.trim()||void 0,formattedAddress:X.formattedAddress.trim()||void 0,locationType:X.locationType,locationSource:X.locationSource,locationPrecision:X.locationPrecision,locationCapturedAt:X.latitude.trim()&&X.longitude.trim()?X.locationCapturedAt||Date.now():void 0,mapVisible:X.mapVisible,locationRestricted:X.locationRestricted,logo:ae(X.logo),logoMediaId:X.logoMediaId||void 0,photo:ae(X.photo),photoMediaId:X.photoMediaId||void 0,bannerImage:ae(X.bannerImage),bannerImageMediaId:X.bannerImageMediaId||void 0,active:X.active,isDeleted:!1},r=X.id&&e?await (0,m.Po)("branches",X.id,a):await (0,m.oJ)("branches",a),t=eQ(r?.id||X.id);if(!t)throw Error("The branch record was written without a valid permanent ID.");let i=await e1("branches")?.get?.(t);if(!i||i.isDeleted)throw Error("The branch could not be verified in local storage after saving.");if(e4(i.accountId)!==f)throw Error("The branch was saved under the wrong account workspace.");if(!eX(i.schoolId,X.schoolId))throw Error("The branch was not linked to the selected school.");let n=await e1("schools")?.get?.(X.schoolId);if(!n||n.isDeleted||e4(n.accountId)!==f)throw Error("The selected school is unavailable in this owner account.");await Promise.all([{id:X.logoMediaId,field:"logo"},{id:X.photoMediaId,field:"photo"},{id:X.bannerImageMediaId,field:"bannerImage"}].filter(e=>!!e.id).map(e=>(0,h.yy)({assetId:String(e.id),ownerTable:aa,ownerId:t,ownerTempKey:et.current,fieldKey:ar[e.field],schoolId:X.schoolId,branchId:t})));let s="";if(!X.id&&"none"!==X.setupMode){let e=await eq({store:e2,accountId:f,schoolId:X.schoolId,branchId:t,templateCode:X.setupMode,academicYearName:X.academicYearName.trim(),academicYearStart:X.academicYearStart,academicYearEnd:X.academicYearEnd}),a=Object.values(e.counts).reduce((e,a)=>e+a.created,0),r=Object.values(e.counts).reduce((e,a)=>e+a.reused,0);s=` Academic foundation ready: ${a} created${r?`, ${r} reused`:""}.`}et.current=at(),Q(!1),await eN(),eg("success",X.id?"Branch changes saved.":`Branch created and saved locally.${s}`)}catch(e){console.error("Failed to save branch:",e),eg("error",e?.message||"Failed to save branch.")}finally{j(!1)}},eO=async e=>{let a=eQ(e.row.id);!a||window.confirm(`Delete "${e8(e.row)}"?`)&&(await (0,m.R8)("branches",a),J(null),eg("success","Branch deleted."),await eN())},e_=async(e,a)=>{let r=eQ(e.row.id);r&&(await (0,m.Po)("branches",r,{active:a,isDeleted:!1}),J(null),eg("success",a?"Branch activated.":"Branch deactivated."),await eN())};return i||l||v?(0,n.jsx)(al,{primary:x,title:"Opening Branches...",text:"Checking owner account, local branch records, school assignment, and media assets."}):t&&f?(0,n.jsxs)("main",{className:"ba-page",style:{"--ba-primary":x},children:[(0,n.jsx)("style",{children:aw}),ea&&(0,n.jsxs)("section",{className:`ba-toast ${ea.tone}`,children:[ea.message,(0,n.jsx)("button",{type:"button",onClick:()=>er(null),"aria-label":"Close notification",children:"✕"})]}),(0,n.jsxs)("section",{className:"ba-search-card","aria-label":"Branch search and actions",children:[(0,n.jsxs)("label",{className:"ba-search",children:[(0,n.jsx)("span",{children:"⌕"}),(0,n.jsx)("input",{value:E,onChange:e=>L(e.target.value),placeholder:"Search branches...","aria-label":"Search branches"})]}),(0,n.jsx)("button",{type:"button",className:"ba-add-inline",onClick:()=>(()=>{if(!ev())return;et.current=at(),J(null);let e=Number.isFinite(void 0)&&Number.isFinite(void 0);ee({...eZ,schoolId:eQ(S[0]?.id),active:"inactive"!==B,latitude:e?String(void 0):"",longitude:e?String(void 0):"",locationSource:"manual",locationCapturedAt:e?Date.now():void 0,mapVisible:!0}),Q(!0)})(),"aria-label":"Add branch",children:"+"}),(0,n.jsxs)("button",{type:"button",className:`ba-filter-button ${eP?"active":""}`,onClick:()=>G(!0),"aria-label":"Open filters",title:"Filters",children:[(0,n.jsx)(ap,{}),eP?(0,n.jsx)("b",{children:eP}):null]}),(0,n.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>V(!0),"aria-label":"More options",children:"⋯"})]}),eP>0&&(0,n.jsx)("section",{className:"ba-filter-chips","aria-label":"Active filters",children:(0,n.jsxs)("button",{type:"button",onClick:()=>U("all"),children:["Filter: ","active"===(e=B)?"Active only":"inactive"===e?"Inactive only":"no_contact"===e?"Missing contact":"no_school"===e?"No school":"All branches"," \xd7"]})}),"summary"===R&&(0,n.jsxs)("section",{className:"ba-analysis-grid",children:[(0,n.jsx)(ay,{title:"Branches by Status",rows:eF,total:e$.total}),(0,n.jsx)(ay,{title:"School Assignment",rows:eT,total:e$.total}),(0,n.jsx)(ay,{title:"Contact Readiness",rows:eR,total:e$.total}),(0,n.jsxs)("article",{className:"ba-analysis ba-current-filter",children:[(0,n.jsx)("span",{children:"Current Filter"}),(0,n.jsx)("strong",{children:e$.showing}),(0,n.jsxs)("p",{children:[e$.schools," active school(s) available for ",e$.total," owner branch record(s)."]})]})]}),"map"===R&&(0,n.jsxs)("section",{className:"branches-map-shell",children:[(0,n.jsxs)("div",{className:"branches-map-toolbar","aria-label":"Map layers",children:[(0,n.jsx)(ad,{label:"Branch",tone:"branch",checked:O,onChange:_}),(0,n.jsx)(ad,{label:"Student",tone:"student",checked:H.students,onChange:e=>K(a=>({...a,students:e}))}),(0,n.jsx)(ad,{label:"Teacher",tone:"teacher",checked:H.teachers,onChange:e=>K(a=>({...a,teachers:e}))}),(0,n.jsx)(ad,{label:"Parent",tone:"parent",checked:H.parents,onChange:e=>K(a=>({...a,parents:e}))})]}),(0,n.jsx)(eG.V,{markers:eM,height:"min(72vh, 760px)",searchable:!1,filterable:!1,showLegend:!1,cluster:!0,fitMarkers:!0,allowLocationEditing:!0,onLocationUpdate:eL,emptyView:(0,n.jsxs)("div",{className:"branches-map-empty",children:[(0,n.jsx)("span",{"aria-hidden":"true",children:"⌖"}),(0,n.jsx)("strong",{children:"No mapped branches or people"}),(0,n.jsx)("small",{children:"Save branch coordinates in the branch form, or save coordinates on student, teacher and parent records."})]})})]}),"table"===R&&(0,n.jsx)(ah,{rows:eI,openEdit:eB,remove:eO,setActive:e_}),"cards"===R&&(0,n.jsxs)("section",{className:"ba-list",children:[eI.map(e=>(0,n.jsx)(ac,{item:e,primary:x,onOpen:()=>J(e)},String(e.id))),!eI.length&&(0,n.jsx)(as,{icon:"\uD83C\uDFDB️",title:"No branches found",text:"Add owner branch records, connect logo and banner images, and assign each branch to a school."})]}),q&&(0,n.jsx)(ab,{filterStatus:B,setFilterStatus:U,clearFilters:()=>U("all"),onClose:()=>G(!1)}),Y&&(0,n.jsx)(au,{viewMode:R,setViewMode:e=>{D(e),V(!1)},onRefresh:async()=>{V(!1),await eN()},onClose:()=>V(!1)}),W&&(0,n.jsx)(am,{item:W,openEdit:eB,remove:eO,setActive:e_,onClose:()=>J(null)}),Z&&(0,n.jsx)(ax,{form:X,saving:w,schools:S,setModalOpen:Q,updateForm:eD,handleImageUpload:eE,openCameraForField:e=>{if(ev()){if(!(0,h.fP)())return void eg("error",(0,h.f5)());ec(e),eo(!0)}},save:eU}),es&&(0,n.jsx)(af,{field:el,videoRef:ei,starting:eb,capturing:em,facing:ed,setFacing:ep,capture:ew,close:ey,entityLabel:"Branch"})]}):(0,n.jsx)(al,{primary:x,title:"Redirecting to login...",text:"You must sign in before managing owner branches."})}function al({primary:e,title:a,text:r}){return(0,n.jsxs)("main",{className:"ba-page",style:{"--ba-primary":e},children:[(0,n.jsx)("style",{children:aw}),(0,n.jsxs)("section",{className:"ba-state",children:[(0,n.jsx)("div",{className:"ba-spinner"}),(0,n.jsx)("h2",{children:a}),(0,n.jsx)("p",{children:r})]})]})}function ac({item:e,primary:a,onOpen:r}){let t=e.row,i=e.logoUrl||e.photoUrl;return(0,n.jsxs)("button",{type:"button",className:"student-row",onClick:r,children:[(0,n.jsx)(an,{name:e8(t),photo:i,primary:a}),(0,n.jsxs)("span",{className:"student-main",children:[(0,n.jsx)("strong",{children:e8(t)}),(0,n.jsxs)("small",{children:[e.schoolName,t.code?` \xb7 ${t.code}`:""]}),(0,n.jsx)("em",{children:t.phone||t.email||t.address||"No contact details yet"})]}),(0,n.jsxs)("span",{className:"student-side",children:[(0,n.jsx)("span",{className:`status-dot-mini ${e6(t.active)}`,title:e7(t.active),"aria-label":e7(t.active)}),(0,n.jsx)("i",{children:"⋯"})]})]})}function ad({label:e,tone:a,checked:r,onChange:t}){return(0,n.jsxs)("button",{type:"button",className:`branches-map-toggle ${a} ${r?"active":""}`,"aria-pressed":r,"aria-label":`${r?"Hide":"Show"} ${e.toLowerCase()} locations`,onClick:()=>t(!r),children:[(0,n.jsx)("i",{"aria-hidden":"true"}),(0,n.jsx)("span",{children:e})]})}function ap(){return(0,n.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M4 7h9"}),(0,n.jsx)("path",{d:"M17 7h3"}),(0,n.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,n.jsx)("path",{d:"M4 17h3"}),(0,n.jsx)("path",{d:"M11 17h9"}),(0,n.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function ab({filterStatus:e,setFilterStatus:a,clearFilters:r,onClose:t}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Filters"}),(0,n.jsx)("p",{children:"Keep the owner branch register compact and focused."})]}),(0,n.jsx)("button",{type:"button",onClick:t,"aria-label":"Close filters",children:"✕"})]}),(0,n.jsx)("div",{className:"ba-menu-list",children:[{value:"all",label:"All branches",note:"Show every owner branch record"},{value:"active",label:"Active only",note:"Branches currently enabled"},{value:"inactive",label:"Inactive only",note:"Branches disabled for daily use"},{value:"no_contact",label:"Missing contact",note:"Branches without phone or email"},{value:"no_school",label:"No school",note:"Branches not assigned to a school"}].map(r=>(0,n.jsxs)("button",{type:"button",className:e===r.value?"active":"",onClick:()=>a(r.value),children:[(0,n.jsx)("span",{children:e===r.value?"✓":"⌁"}),(0,n.jsx)("b",{children:r.label}),(0,n.jsx)("small",{children:r.note})]},r.value))}),(0,n.jsxs)("div",{className:"ba-sheet-actions",children:[(0,n.jsx)("button",{type:"button",onClick:r,children:"Clear"}),(0,n.jsx)("button",{type:"button",className:"primary",onClick:t,children:"Apply"})]})]})})}function au({viewMode:e,setViewMode:a,onRefresh:r,onClose:t}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"More"}),(0,n.jsx)("p",{children:"Switch views or reload the local owner branch register."})]}),(0,n.jsx)("button",{type:"button",onClick:t,"aria-label":"Close more options",children:"✕"})]}),(0,n.jsxs)("div",{className:"ba-menu-list",children:[(0,n.jsxs)("button",{type:"button",className:"cards"===e?"active":"",onClick:()=>a("cards"),children:[(0,n.jsx)("span",{children:"▦"}),(0,n.jsx)("b",{children:"Cards"}),(0,n.jsx)("small",{children:"Compact branch register"})]}),(0,n.jsxs)("button",{type:"button",className:"table"===e?"active":"",onClick:()=>a("table"),children:[(0,n.jsx)("span",{children:"☷"}),(0,n.jsx)("b",{children:"Table view"}),(0,n.jsx)("small",{children:"Dense laptop-friendly owner records"})]}),(0,n.jsxs)("button",{type:"button",className:"map"===e?"active":"",onClick:()=>a("map"),children:[(0,n.jsx)("span",{children:"⌖"}),(0,n.jsx)("b",{children:"Proximity map"}),(0,n.jsx)("small",{children:"Branches, students, teachers and parents"})]}),(0,n.jsxs)("button",{type:"button",className:"summary"===e?"active":"",onClick:()=>a("summary"),children:[(0,n.jsx)("span",{children:"◔"}),(0,n.jsx)("b",{children:"Analytics"}),(0,n.jsx)("small",{children:"Status, contact and school assignment"})]}),(0,n.jsxs)("button",{type:"button",onClick:r,children:[(0,n.jsx)("span",{children:"↻"}),(0,n.jsx)("b",{children:"Refresh"}),(0,n.jsx)("small",{children:"Reload local branches and schools"})]})]})]})})}function am({item:e,openEdit:a,remove:r,setActive:t,onClose:i}){let s=e.row;return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-profile",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:e8(s)}),(0,n.jsxs)("p",{children:[e.schoolName," \xb7 ",e7(s.active)]})]}),(0,n.jsx)("button",{type:"button",onClick:i,"aria-label":"Close branch actions",children:"✕"})]}),(0,n.jsxs)("div",{className:"student-detail-strip",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Contact"}),s.phone||s.email||"Not set"]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"School"}),e.schoolName||"Not set"]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Updated"}),e3(s.updatedAt||s.createdAt)]})]}),(0,n.jsxs)("div",{className:"ba-menu-list",children:[(0,n.jsxs)("button",{type:"button",onClick:()=>a(e.row),children:[(0,n.jsx)("span",{children:"✎"}),(0,n.jsx)("b",{children:"Edit branch"}),(0,n.jsx)("small",{children:"Update profile, contact, logo and banner"})]}),!1===s.active?(0,n.jsxs)("button",{type:"button",onClick:()=>t(e,!0),children:[(0,n.jsx)("span",{children:"✓"}),(0,n.jsx)("b",{children:"Activate"}),(0,n.jsx)("small",{children:"Enable this branch for account operations"})]}):(0,n.jsxs)("button",{type:"button",onClick:()=>t(e,!1),children:[(0,n.jsx)("span",{children:"⏸"}),(0,n.jsx)("b",{children:"Deactivate"}),(0,n.jsx)("small",{children:"Keep the record but disable daily use"})]}),(0,n.jsxs)("button",{type:"button",className:"danger",onClick:()=>r(e),children:[(0,n.jsx)("span",{children:"⌫"}),(0,n.jsx)("b",{children:"Delete"}),(0,n.jsx)("small",{children:"Soft delete this branch locally"})]})]})]})})}function ah({rows:e,openEdit:a,remove:r,setActive:t}){return(0,n.jsx)("section",{className:"ba-table-card",children:(0,n.jsxs)("div",{className:"ba-table-scroll",children:[(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsxs)("th",{children:["Branches (",e.length,")"]}),(0,n.jsx)("th",{children:"Contact"}),(0,n.jsx)("th",{children:"School"}),(0,n.jsx)("th",{children:"City"}),(0,n.jsx)("th",{children:"Status"}),(0,n.jsx)("th",{children:"Updated"}),(0,n.jsx)("th",{children:"Actions"})]})}),(0,n.jsx)("tbody",{children:e.map(e=>{let i=e.row;return(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{children:[(0,n.jsx)("strong",{children:e8(i)}),(0,n.jsx)("span",{children:i.code||i.address||"No code/address"})]}),(0,n.jsx)("td",{children:i.phone||i.email||"—"}),(0,n.jsx)("td",{children:e.schoolName||"—"}),(0,n.jsx)("td",{children:i.city||"—"}),(0,n.jsx)("td",{children:(0,n.jsx)(ai,{tone:e6(i.active),children:e7(i.active)})}),(0,n.jsx)("td",{children:e3(i.updatedAt||i.createdAt)}),(0,n.jsx)("td",{children:(0,n.jsxs)("div",{className:"ba-table-actions",children:[(0,n.jsx)("button",{type:"button",onClick:()=>a(e.row),children:"Edit"}),(0,n.jsxs)("button",{type:"button",onClick:()=>t(e,!1===i.active),children:[" ",!1===i.active?"Activate":"Deactivate"]}),(0,n.jsx)("button",{type:"button",className:"ba-delete",onClick:()=>r(e),children:"Delete"})]})})]},String(e.id))})})]}),!e.length&&(0,n.jsx)("div",{className:"ba-empty-table",children:"No branch matches your filters."})]})})}function ax({form:e,saving:a,schools:r,setModalOpen:t,updateForm:i,handleImageUpload:s,openCameraForField:o,save:l}){return(0,n.jsx)("div",{className:"ba-modal-backdrop",children:(0,n.jsxs)("form",{className:"ba-modal",onSubmit:l,children:[(0,n.jsxs)("div",{className:"ba-modal-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:e.id?"Edit Branch":"Add Branch"}),(0,n.jsx)("p",{children:"Branch is saved locally first and syncs through your normal sync pipeline."})]}),(0,n.jsx)("button",{type:"button",onClick:()=>t(!1),"aria-label":"Close branch form",children:"✕"})]}),(0,n.jsxs)("section",{className:"ba-form-section",children:[(0,n.jsx)("h3",{children:"Branch Profile"}),(0,n.jsxs)("div",{className:"ba-form",children:[(0,n.jsxs)("label",{className:"wide",children:[(0,n.jsx)("span",{children:"School"}),(0,n.jsxs)("select",{value:e.schoolId,onChange:e=>i({schoolId:e.target.value}),children:[(0,n.jsx)("option",{value:"",children:"Select school"}),r.map(e=>(0,n.jsx)("option",{value:String(e.id),children:e9(e)},String(e.id)))]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Branch Name"}),(0,n.jsx)("input",{value:e.name,onChange:e=>i({name:e.target.value}),placeholder:"Branch name"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Branch Code"}),(0,n.jsx)("input",{value:e.code,onChange:e=>i({code:e.target.value}),placeholder:"Code"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Phone"}),(0,n.jsx)("input",{value:e.phone,onChange:e=>i({phone:e.target.value}),placeholder:"Phone"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Email"}),(0,n.jsx)("input",{value:e.email,onChange:e=>i({email:e.target.value}),placeholder:"Email"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"City"}),(0,n.jsx)("input",{value:e.city,onChange:e=>i({city:e.target.value}),placeholder:"City"})]}),(0,n.jsxs)("label",{className:"wide",children:[(0,n.jsx)("span",{children:"Address"}),(0,n.jsx)("textarea",{value:e.address,onChange:e=>i({address:e.target.value}),placeholder:"Branch address"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Status"}),(0,n.jsxs)("select",{value:e.active?"active":"inactive",onChange:e=>i({active:"active"===e.target.value}),children:[(0,n.jsx)("option",{value:"active",children:"Active"}),(0,n.jsx)("option",{value:"inactive",children:"Inactive"})]})]})]})]}),!e.id&&(0,n.jsxs)("section",{className:"ba-form-section",children:[(0,n.jsx)("h3",{children:"Foundational Setup"}),(0,n.jsx)("p",{className:"ba-section-note",children:"Choose the kind of school operated by this branch. Eleeveon will create the foundational academic records after the branch receives its permanent ID."}),(0,n.jsxs)("div",{className:"ba-form",children:[(0,n.jsxs)("label",{className:"wide",children:[(0,n.jsx)("span",{children:"School Setup Template"}),(0,n.jsx)("select",{value:e.setupMode,onChange:e=>i({setupMode:e.target.value}),children:eV.map(e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value))}),(0,n.jsx)("small",{className:"ba-media-hint",children:eV.find(a=>a.value===e.setupMode)?.note})]}),"none"!==e.setupMode&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Academic Year"}),(0,n.jsx)("input",{value:e.academicYearName,onChange:e=>i({academicYearName:e.target.value}),placeholder:"2026/2027"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Year Starts"}),(0,n.jsx)("input",{type:"date",value:e.academicYearStart,onChange:e=>i({academicYearStart:e.target.value})})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Year Ends"}),(0,n.jsx)("input",{type:"date",value:e.academicYearEnd,onChange:e=>i({academicYearEnd:e.target.value})})]}),(0,n.jsxs)("div",{className:"wide ba-setup-preview",children:[(0,n.jsx)("strong",{children:"Records created automatically"}),(0,n.jsx)("span",{children:"Organizations \xb7 Academic structures \xb7 Academic periods \xb7 Curriculum \xb7 Pathways \xb7 Subjects \xb7 Curriculum subjects \xb7 Classes \xb7 Class subjects \xb7 Prerequisites \xb7 Assessment structures and items \xb7 Grading systems and rules \xb7 Assessment applicability"})]})]})]})]}),(0,n.jsxs)("section",{className:"ba-form-section",children:[(0,n.jsx)("h3",{children:"Branch Location"}),(0,n.jsxs)("div",{className:"ba-form",children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Location Label"}),(0,n.jsx)("input",{value:e.locationLabel,onChange:e=>i({locationLabel:e.target.value}),placeholder:"Main campus building"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Location Type"}),(0,n.jsxs)("select",{value:e.locationType,onChange:e=>i({locationType:e.target.value}),children:[(0,n.jsx)("option",{value:"school",children:"School building"}),(0,n.jsx)("option",{value:"campus",children:"Campus"}),(0,n.jsx)("option",{value:"office",children:"Office"}),(0,n.jsx)("option",{value:"other",children:"Other"})]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Latitude"}),(0,n.jsx)("input",{inputMode:"decimal",value:e.latitude,onChange:e=>i({latitude:e.target.value}),placeholder:"5.6037"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Longitude"}),(0,n.jsx)("input",{inputMode:"decimal",value:e.longitude,onChange:e=>i({longitude:e.target.value}),placeholder:"-0.1870"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Accuracy (metres)"}),(0,n.jsx)("input",{inputMode:"decimal",value:e.accuracyMeters,onChange:e=>i({accuracyMeters:e.target.value}),placeholder:"Optional"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Precision"}),(0,n.jsxs)("select",{value:e.locationPrecision,onChange:e=>i({locationPrecision:e.target.value}),children:[(0,n.jsx)("option",{value:"exact",children:"Exact"}),(0,n.jsx)("option",{value:"approximate",children:"Approximate"}),(0,n.jsx)("option",{value:"area_only",children:"Area only"})]})]}),(0,n.jsxs)("label",{className:"wide",children:[(0,n.jsx)("span",{children:"Formatted Address"}),(0,n.jsx)("textarea",{value:e.formattedAddress,onChange:e=>i({formattedAddress:e.target.value}),placeholder:"Map or standardized address"})]}),(0,n.jsxs)("label",{className:"ba-check",children:[(0,n.jsx)("input",{type:"checkbox",checked:e.mapVisible,onChange:e=>i({mapVisible:e.target.checked})}),(0,n.jsx)("span",{children:"Show branch building on maps"})]}),(0,n.jsxs)("label",{className:"ba-check",children:[(0,n.jsx)("input",{type:"checkbox",checked:e.locationRestricted,onChange:e=>i({locationRestricted:e.target.checked})}),(0,n.jsx)("span",{children:"Restrict exact branch location"})]})]})]}),(0,n.jsxs)("section",{className:"ba-form-section",children:[(0,n.jsx)("h3",{children:"Images"}),(0,n.jsxs)("div",{className:"ba-form",children:[(0,n.jsx)(ag,{title:"Logo",field:"logo",preview:e.logo,handleImageUpload:s,openCameraForField:o}),(0,n.jsx)(ag,{title:"Branch Photo",field:"photo",preview:e.photo,handleImageUpload:s,openCameraForField:o}),(0,n.jsx)(ag,{title:"Banner Image",field:"bannerImage",preview:e.bannerImage,banner:!0,handleImageUpload:s,openCameraForField:o})]})]}),(0,n.jsxs)("div",{className:"ba-modal-actions",children:[(0,n.jsx)("button",{type:"button",onClick:()=>t(!1),children:"Cancel"}),(0,n.jsx)("button",{type:"submit",disabled:a,children:a?e.id?"Saving...":"none"===e.setupMode?"Creating...":"Creating & Setting Up...":e.id?"Save Changes":"none"===e.setupMode?"Add Branch":"Create & Set Up Branch"})]})]})})}function ag({title:e,field:a,preview:r,banner:t=!1,handleImageUpload:i,openCameraForField:s}){return(0,n.jsxs)("label",{className:t?"wide":void 0,children:[(0,n.jsx)("span",{children:e}),(0,n.jsxs)("div",{className:"ba-media-actions",children:[(0,n.jsxs)("label",{className:"ba-media-button",children:["Upload",(0,n.jsx)("input",{type:"file",accept:"image/*",onChange:e=>i(a,e.target.files?.[0]),hidden:!0})]}),(0,n.jsx)("button",{type:"button",className:"ba-media-button secondary",onClick:()=>s(a),children:"Take Photo"})]}),(0,n.jsx)("small",{className:"ba-media-hint",children:"Upload from files or take a camera photo. It is optimized and saved as a media asset."}),r&&(0,n.jsx)("img",{src:r,alt:`${e} preview`,className:t?"ba-preview-banner":"ba-preview-photo"})]})}function af({field:e,videoRef:a,starting:r,capturing:t,facing:i,setFacing:s,capture:o,close:l,entityLabel:c}){let d="logo"===e?`Take ${c} Logo`:"bannerImage"===e?`Take ${c} Banner`:`Take ${c} Photo`;return(0,n.jsx)("div",{className:"ba-modal-backdrop camera-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-camera-modal",children:[(0,n.jsxs)("div",{className:"ba-modal-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:d}),(0,n.jsx)("p",{children:"Use the live camera preview, then capture. The image will be compressed and saved as a media asset."})]}),(0,n.jsx)("button",{type:"button",onClick:l,"aria-label":"Close camera",children:"✕"})]}),(0,n.jsxs)("div",{className:"ba-camera-preview",children:[(0,n.jsx)("video",{ref:a,autoPlay:!0,muted:!0,playsInline:!0}),r&&(0,n.jsx)("span",{className:"ba-camera-loading",children:"Opening camera..."})]}),(0,n.jsxs)("div",{className:"ba-camera-actions",children:[(0,n.jsx)("button",{type:"button",className:"ba-camera-secondary",onClick:()=>s("environment"===i?"user":"environment"),disabled:r||t,children:"Switch Camera"}),(0,n.jsx)("button",{type:"button",className:"ba-camera-secondary",onClick:l,disabled:t,children:"Cancel"}),(0,n.jsx)("button",{type:"button",className:"ba-camera-primary",onClick:o,disabled:r||t,children:t?"Capturing...":"Capture Photo"})]})]})})}function av(e,a){let r=new Map;return e.forEach(e=>{let t=a(e)||"Unknown";r.set(t,(r.get(t)||0)+1)}),Array.from(r.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value||e.label.localeCompare(a.label))}function ay({title:e,rows:a,total:r}){return(0,n.jsxs)("article",{className:"ba-analysis",children:[(0,n.jsx)("span",{children:e}),(0,n.jsx)("strong",{children:r}),(0,n.jsx)("div",{className:"ba-analysis-list",children:a.map(e=>{let a=r?Math.round(e.value/r*100):0;return(0,n.jsxs)("section",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("b",{children:e.label}),(0,n.jsx)("small",{children:e.value})]}),(0,n.jsx)("div",{className:"ba-progress",children:(0,n.jsx)("i",{style:{width:`${a}%`}})})]},e.label)})})]})}let aw=`
@keyframes spin { to { transform: rotate(360deg); } }

.ba-page {
  --ease: cubic-bezier(.2,.8,.2,1);
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: calc(8px * var(--local-density-scale, 1));
  padding-bottom: max(40px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--ba-primary) 9%, transparent), transparent 30rem),
    var(--bg, #f7f8fb);
  color: var(--text, #111827);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--font-size, 14px);
  overflow-x: hidden;
}

.ba-page *, .ba-page *::before, .ba-page *::after { box-sizing: border-box; min-width: 0; }
.ba-page button, .ba-page input, .ba-page select, .ba-page textarea { font: inherit; max-width: 100%; }
.ba-page button { -webkit-tap-highlight-color: transparent; }
.ba-page input, .ba-page select, .ba-page textarea {
  width: 100%; min-height: 44px; border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10)));
  border-radius: 16px; padding: 0 12px; background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #111827)); outline: none; font-weight: 750;
}
.ba-page input:focus, .ba-page select:focus, .ba-page textarea:focus {
  border-color: color-mix(in srgb, var(--ba-primary) 52%, var(--border, rgba(0,0,0,.10)));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--ba-primary) 12%, transparent);
}
.ba-state, .ba-search-card, .ba-card, .ba-table-card, .ba-analysis, .ba-empty, .ba-sheet, .ba-modal, .student-row {
  background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); box-shadow: 0 12px 28px rgba(15,23,42,.045);
}
.ba-state { min-height: min(420px, calc(100dvh - 32px)); width: min(520px, 100%); margin: 0 auto; display: grid; place-items: center; align-content: center; gap: 10px; padding: 22px; border-radius: 28px; text-align: center; }
.ba-spinner { width: 38px; height: 38px; border-radius: 999px; border: 4px solid color-mix(in srgb, var(--ba-primary) 18%, transparent); border-top-color: var(--ba-primary); animation: spin .8s linear infinite; }
.ba-state h2 { margin: 0; font-size: 22px; font-weight: 1000; letter-spacing: -.04em; }
.ba-state p { max-width: 34rem; margin: 0; color: var(--muted, #64748b); font-size: 13px; line-height: 1.6; }
.ba-toast { position: sticky; top: 8px; z-index: 40; display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; padding: 12px 14px; border-radius: 18px; font-size: 13px; font-weight: 850; box-shadow: 0 18px 40px rgba(15,23,42,.12); }
.ba-toast.success { background: rgba(34,197,94,.14); color: #166534; } .ba-toast.error { background: rgba(239,68,68,.12); color: #991b1b; } .ba-toast.info { background: rgba(59,130,246,.13); color: #1d4ed8; }
.ba-toast button { border: 0; background: transparent; color: currentColor; font-weight: 1000; cursor: pointer; }
.ba-icon-button, .ba-filter-button, .ba-add-inline { width: 42px; height: 42px; border: 1px solid var(--border, rgba(0,0,0,.10)); border-radius: 999px; display: grid; place-items: center; background: var(--card-bg, var(--surface,#fff)); color: var(--text,#111827); font-size: 18px; font-weight: 1000; cursor: pointer; box-shadow: 0 10px 22px rgba(15,23,42,.045); }
.ba-add-inline { flex: 0 0 42px; border-color: var(--ba-primary); background: var(--ba-primary); color: #fff; font-size: 25px; line-height: 1; box-shadow: 0 12px 28px color-mix(in srgb, var(--ba-primary) 22%, transparent); }
.ba-search-card { display: grid; grid-template-columns: minmax(0, 1fr) auto auto auto; gap: 8px; align-items: center; margin-top: 2px; padding: 8px; border-radius: 24px; }
.ba-search { min-width: 0; display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 8px; min-height: 44px; padding: 0 11px; border-radius: 18px; background: color-mix(in srgb, var(--muted,#64748b) 7%, transparent); }
.ba-search span { color: var(--muted,#64748b); font-size: 17px; font-weight: 1000; }
.ba-search input { min-height: 42px; border: 0; padding: 0; border-radius: 0; background: transparent; box-shadow: none; font-size: 14px; }
.ba-slider-icon { width: 21px; height: 21px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
.ba-filter-button { position: relative; background: color-mix(in srgb, var(--ba-primary) 8%, var(--card-bg,#fff)); color: var(--ba-primary); }
.ba-filter-button.active { background: var(--ba-primary); color: #fff; border-color: var(--ba-primary); }
.ba-filter-button b { position: absolute; top: -4px; right: -4px; min-width: 19px; height: 19px; display: grid; place-items: center; border-radius: 999px; background: #ef4444; color: #fff; font-size: 10px; border: 2px solid var(--card-bg,#fff); }
.ba-filter-chips { display: flex; gap: 7px; overflow-x: auto; padding: 8px 1px 0; scrollbar-width: none; -ms-overflow-style: none; }
.ba-filter-chips::-webkit-scrollbar { display: none; }
.ba-filter-chips button { flex: 0 0 auto; min-height: 31px; border: 0; border-radius: 999px; padding: 0 10px; background: color-mix(in srgb, var(--ba-primary) 11%, transparent); color: var(--ba-primary); font-size: 11px; font-weight: 950; white-space: nowrap; cursor: pointer; }
.ba-list { display: grid; gap: 7px; margin-top: 10px; }
.student-row { width: 100%; display: grid; grid-template-columns: auto minmax(0,1fr) auto; align-items: center; gap: 10px; padding: 10px; border-radius: 22px; text-align: left; cursor: pointer; transition: transform .16s var(--ease), box-shadow .16s var(--ease), border-color .16s var(--ease); }
.student-row:hover { transform: translateY(-1px); border-color: color-mix(in srgb, var(--ba-primary) 24%, var(--border, rgba(0,0,0,.10))); box-shadow: 0 16px 34px rgba(15,23,42,.07); }
.ba-avatar { width: 48px; height: 48px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 18px; color: #fff; font-size: 17px; font-weight: 1000; box-shadow: 0 12px 24px rgba(15,23,42,.12); }
.student-main, .student-main strong, .student-main small, .student-main em { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.student-main strong { color: var(--text,#111827); font-size: 14px; font-weight: 1000; letter-spacing: -.02em; }
.student-main small { margin-top: 3px; color: var(--muted,#64748b); font-size: 12px; font-weight: 850; font-style: normal; }
.student-main em { margin-top: 3px; color: color-mix(in srgb, var(--muted,#64748b) 86%, var(--text,#111827)); font-size: 11px; font-weight: 750; font-style: normal; }
.student-side { display: grid; justify-items: end; gap: 6px; flex: 0 0 auto; }
.student-side i { color: var(--muted,#64748b); font-style: normal; font-size: 18px; font-weight: 1000; line-height: 1; }
.ba-chip { max-width: 100%; display: inline-flex; align-items: center; min-height: 24px; padding: 3px 8px; border-radius: 999px; font-size: 10px; font-weight: 950; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize; }
.ba-chip.green { background: rgba(34,197,94,.12); color: #16a34a; } .ba-chip.red { background: rgba(239,68,68,.12); color: #dc2626; } .ba-chip.blue { background: rgba(59,130,246,.12); color: #2563eb; } .ba-chip.gray { background: color-mix(in srgb,var(--muted,#64748b) 14%,transparent); color: var(--muted,#64748b); } .ba-chip.orange { background: rgba(245,158,11,.14); color: #b45309; } .ba-chip.purple { background: rgba(147,51,234,.12); color: #7e22ce; }
.status-dot-mini { width: 10px; height: 10px; display: inline-block; border-radius: 999px; background: var(--muted,#64748b); box-shadow: 0 0 0 4px color-mix(in srgb, currentColor 10%, transparent); }
.status-dot-mini.green { background: #22c55e; } .status-dot-mini.red { background: #ef4444; } .status-dot-mini.blue { background: #3b82f6; } .status-dot-mini.orange { background: #f59e0b; } .status-dot-mini.gray { background: var(--muted,#64748b); }
.ba-sheet-backdrop, .ba-modal-backdrop { position: fixed; inset: 0; z-index: 80; display: grid; place-items: end center; padding: 10px; background: rgba(15,23,42,.50); backdrop-filter: blur(12px); }
.ba-sheet { width: min(760px, 100%); max-height: min(88dvh, 760px); overflow-y: auto; padding: 14px; border-radius: 28px 28px 22px 22px; box-shadow: 0 30px 90px rgba(15,23,42,.32); animation: sheetIn .18s var(--ease); }
.ba-sheet.small { width: min(520px, 100%); }
@keyframes sheetIn { from { transform: translateY(16px); opacity: .7; } to { transform: translateY(0); opacity: 1; } }
.ba-sheet-head, .ba-sheet-profile, .ba-modal-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding-bottom: 12px; }
.ba-sheet-head h2, .ba-sheet-profile h2, .ba-modal-head h2 { margin: 0; color: var(--text,#111827); font-size: 21px; font-weight: 1000; letter-spacing: -.05em; }
.ba-sheet-head p, .ba-sheet-profile p, .ba-modal-head p { margin: 5px 0 0; color: var(--muted,#64748b); font-size: 12px; line-height: 1.5; font-weight: 750; }
.ba-sheet-head button, .ba-sheet-profile button, .ba-modal-head button { width: 38px; height: 38px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; background: var(--surface,#fff); color: var(--text,#111827); font-weight: 1000; cursor: pointer; flex: 0 0 auto; }
.ba-sheet-actions, .ba-modal-actions { position: sticky; bottom: -14px; display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 8px; margin-top: 14px; padding: 12px 0 2px; background: linear-gradient(to top, var(--card-bg,var(--surface,#fff)) 70%, transparent); }
.ba-sheet-actions button, .ba-modal-actions button { min-height: 42px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; padding: 0 16px; background: color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff)); color: var(--text,#111827); font-size: 12px; font-weight: 950; cursor: pointer; }
.ba-sheet-actions button.primary, .ba-modal-actions button:last-child { border-color: var(--ba-primary); background: var(--ba-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent); }
.ba-modal-actions button:disabled { opacity: .65; cursor: not-allowed; }
.ba-menu-list { display: grid; gap: 8px; }
.ba-menu-list button { width: 100%; display: grid; grid-template-columns: 42px minmax(0,1fr); column-gap: 10px; align-items: center; min-height: 58px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 18px; padding: 9px; background: var(--surface,#fff); color: var(--text,#111827); text-align: left; cursor: pointer; }
.ba-menu-list button span { grid-row: span 2; width: 42px; height: 42px; display: grid; place-items: center; border-radius: 16px; background: color-mix(in srgb, var(--ba-primary) 10%, transparent); color: var(--ba-primary); font-weight: 1000; }
.ba-menu-list button b, .ba-menu-list button small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ba-menu-list button b { font-size: 13px; font-weight: 1000; } .ba-menu-list button small { margin-top: 2px; color: var(--muted,#64748b); font-size: 11px; font-weight: 750; }
.ba-menu-list button.active { border-color: color-mix(in srgb, var(--ba-primary) 34%, var(--border,rgba(0,0,0,.10))); background: color-mix(in srgb, var(--ba-primary) 8%, var(--surface,#fff)); }
.ba-menu-list button.danger span { background: color-mix(in srgb, #dc2626 10%, transparent); color: #dc2626; } .ba-menu-list button.danger b { color: #991b1b; }
.student-detail-strip { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 7px; margin-bottom: 10px; }
.student-detail-strip span { display: block; padding: 9px; border-radius: 16px; background: color-mix(in srgb, var(--muted,#64748b) 8%, transparent); color: var(--muted,#64748b); font-size: 11px; font-weight: 850; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.student-detail-strip b { display: block; margin-bottom: 3px; color: var(--text,#111827); font-size: 10px; text-transform: uppercase; letter-spacing: .05em; }
.ba-form { display: grid; grid-template-columns: minmax(0, 1fr); gap: 10px; } .ba-form.two { grid-template-columns: minmax(0,1fr); } .ba-form.compact { gap: 9px; }
.ba-form label { display: grid; gap: 6px; min-width: 0; } .ba-form span { color: var(--muted,#64748b); font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: .06em; }
.ba-media-hint { color: var(--muted,#64748b); font-size: 11px; font-weight: 750; line-height: 1.4; }
.ba-form .wide { grid-column: 1 / -1; }
.ba-form-section { padding: 12px 0; border-top: 1px solid var(--border,rgba(0,0,0,.08)); } .ba-form-section:first-of-type { border-top: 0; padding-top: 0; }
.ba-section-note { margin: -4px 0 12px; color: var(--ba-muted); font-size: .82rem; line-height: 1.45; }
.ba-setup-preview { padding: 12px; border: 1px dashed color-mix(in srgb, var(--ba-primary) 38%, var(--ba-border)); border-radius: 14px; background: color-mix(in srgb, var(--ba-primary) 6%, var(--ba-card)); display: grid; gap: 5px; }
.ba-setup-preview strong { font-size: .82rem; color: var(--ba-text); }
.ba-setup-preview span { color: var(--ba-muted); font-size: .76rem; line-height: 1.45; }
.ba-form-section h3 { margin: 0 0 10px; color: var(--text,#111827); font-size: 14px; font-weight: 1000; letter-spacing: -.03em; }
.ba-page textarea { min-height: 92px; padding: 12px; resize: vertical; line-height: 1.55; }
.ba-media-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
.ba-media-button { min-height: 40px; border: 1px solid var(--ba-primary); border-radius: 999px; padding: 0 14px; display: inline-flex; align-items: center; justify-content: center; background: var(--ba-primary); color: #fff !important; font-size: 12px; font-weight: 950; letter-spacing: 0 !important; text-transform: none !important; cursor: pointer; text-align: center; box-shadow: 0 12px 26px color-mix(in srgb, var(--ba-primary) 18%, transparent); }
.ba-media-button.secondary { background: var(--surface, #fff); color: var(--ba-primary) !important; box-shadow: none; }
.ba-media-button input { display: none; }
.ba-preview-photo { width: 96px; height: 96px; object-fit: cover; border-radius: 22px; border: 1px solid var(--border,rgba(0,0,0,.10)); }
.ba-preview-banner { width: 100%; height: 130px; object-fit: cover; border-radius: 22px; border: 1px solid var(--border,rgba(0,0,0,.10)); }
.ba-modal { width: min(980px, 100%); max-height: min(92dvh, 900px); overflow-y: auto; padding: 14px; border-radius: 28px; box-shadow: 0 30px 90px rgba(15,23,42,.35); }
.ba-analysis-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 10px; margin-top: 10px; }
.ba-analysis, .ba-table-card, .ba-empty { padding: 13px; border-radius: 24px; }
.ba-analysis span { color: var(--muted,#64748b); font-size: 11px; font-weight: 950; text-transform: uppercase; letter-spacing: .08em; }
.ba-analysis strong { display: block; margin-top: 8px; font-size: clamp(22px,7vw,30px); line-height: 1; font-weight: 1000; letter-spacing: -.06em; overflow-wrap: anywhere; }
.ba-analysis p { margin: 8px 0 0; color: var(--muted,#64748b); font-size: 12px; line-height: 1.5; }
.ba-analysis-list { display: grid; gap: 10px; margin-top: 12px; }
.ba-analysis-list section { display: grid; gap: 6px; padding: 10px; border-radius: 16px; background: color-mix(in srgb,var(--muted,#64748b) 8%,transparent); }
.ba-analysis-list section > div:first-child { display: flex; justify-content: space-between; gap: 10px; }
.ba-analysis-list b, .ba-analysis-list small { font-size: 12px; } .ba-analysis-list small { color: var(--muted,#64748b); font-weight: 850; }
.ba-progress { height: 8px; border-radius: 999px; background: color-mix(in srgb,var(--muted,#64748b) 18%,transparent); overflow: hidden; } .ba-progress i { display: block; height: 100%; border-radius: inherit; background: var(--ba-primary); }
.ba-empty { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 220px; text-align: center; border-style: dashed; }
.ba-empty-icon { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 22px; background: color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff)); font-size: 28px; }
.ba-empty h3 { margin: 0; font-size: 18px; font-weight: 1000; } .ba-empty p { margin: 0; color: var(--muted,#64748b); font-size: 13px; line-height: 1.6; }
.ba-table-card { margin-top: 10px; } .ba-table-scroll { width: 100%; max-width: 100%; overflow-x: auto; border-radius: 18px; border: 1px solid var(--border,rgba(0,0,0,.08)); }
.ba-table-scroll table { width: 100%; min-width: 920px; border-collapse: collapse; background: var(--card-bg, var(--surface, var(--bg, transparent))); }
.ba-table-scroll th, .ba-table-scroll td { padding: 10px; border-bottom: 1px solid var(--border,rgba(0,0,0,.08)); vertical-align: top; text-align: left; font-size: 13px; }
.ba-table-scroll th { background: var(--table-header-bg, color-mix(in srgb, var(--ba-primary) 6%, var(--card-bg, var(--surface, var(--bg, transparent))))); color: var(--table-header-text, var(--muted, var(--text))); font-size: 11px; font-weight: 1000; text-transform: uppercase; letter-spacing: .07em; }
.ba-table-scroll td strong, .ba-table-scroll td span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .ba-table-scroll td span { margin-top: 3px; color: var(--muted,#64748b); font-size: 11px; }
.ba-table-actions { display: flex; flex-wrap: nowrap; gap: 7px; width: 100%; max-width: 100%; overflow-x: auto; scrollbar-width: none; -ms-overflow-style: none; } .ba-table-actions::-webkit-scrollbar { display: none; }
.ba-table-actions button { flex: 0 0 auto; min-height: 34px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; padding: 0 10px; background: var(--surface,#fff); color: var(--text,#111827); font-size: 11px; font-weight: 950; cursor: pointer; white-space: nowrap; }
.ba-table-actions button:first-child { background: var(--ba-primary); color: #fff; border-color: var(--ba-primary); }
.ba-delete, .ba-table-actions button.ba-delete { color: #991b1b; background: color-mix(in srgb,#dc2626 7%,var(--surface,#fff)); border-color: color-mix(in srgb,#dc2626 24%,var(--border,rgba(0,0,0,.10))); }
.ba-empty-table { padding: 22px; text-align: center; color: var(--muted,#64748b); font-weight: 850; }
.camera-backdrop { z-index: 100; place-items: center; }
.ba-camera-modal { width: min(720px, 100%); max-height: min(92dvh, 880px); overflow-y: auto; padding: 14px; border-radius: 28px; background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); box-shadow: 0 30px 90px rgba(15,23,42,.35); }
.ba-camera-preview { position: relative; width: 100%; aspect-ratio: 4 / 3; overflow: hidden; border-radius: 24px; background: #020617; border: 1px solid var(--border, rgba(0,0,0,.10)); }
.ba-camera-preview video { width: 100%; height: 100%; display: block; object-fit: cover; background: #020617; }
.ba-camera-loading { position: absolute; inset: 0; display: grid; place-items: center; background: rgba(2,6,23,.72); color: #fff; font-size: 13px; font-weight: 950; }
.ba-camera-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px; margin-top: 12px; }
.ba-camera-actions button { min-height: 42px; border-radius: 999px; padding: 0 14px; font-size: 12px; font-weight: 950; cursor: pointer; }
.ba-camera-secondary { border: 1px solid var(--border, rgba(0,0,0,.10)); background: color-mix(in srgb, var(--muted, #64748b) 8%, var(--surface, #fff)); color: var(--text, #111827); }
.ba-camera-primary { border: 1px solid var(--ba-primary); background: var(--ba-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent); }
.ba-camera-actions button:disabled { opacity: .62; cursor: not-allowed; }
@media (min-width: 680px) { .ba-page { padding: calc(12px * var(--local-density-scale,1)); padding-bottom: 44px; } .ba-search-card { grid-template-columns: minmax(0,1fr) 48px 48px 48px; } .ba-list { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; } .student-row { border-radius: 24px; padding: 12px; } .ba-analysis-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } .ba-form { grid-template-columns: repeat(2, minmax(0,1fr)); } .ba-modal-backdrop, .ba-sheet-backdrop { place-items: center; padding: 18px; } .ba-sheet { border-radius: 28px; padding: 18px; } .ba-modal { padding: 18px; } }
@media (min-width: 1040px) { .ba-page { padding: calc(16px * var(--local-density-scale,1)); padding-bottom: 48px; } .ba-search-card, .ba-list, .ba-analysis-grid, .ba-table-card, .ba-filter-chips { max-width: 1180px; margin-left: auto; margin-right: auto; } .ba-list { grid-template-columns: repeat(3, minmax(0, 1fr)); } .ba-analysis-grid { grid-template-columns: repeat(4, minmax(0,1fr)); } .ba-current-filter { grid-column: span 2; } .ba-form { grid-template-columns: repeat(3, minmax(0,1fr)); } }
@media (max-width: 520px) { .ba-page { padding: calc(7px * var(--local-density-scale,1)); padding-bottom: max(38px, env(safe-area-inset-bottom)); } .ba-icon-button, .ba-filter-button, .ba-add-inline { width: 40px; height: 40px; } .student-detail-strip { grid-template-columns: minmax(0,1fr); } .ba-sheet, .ba-modal { border-radius: 24px 24px 18px 18px; padding: 12px; } .ba-sheet-actions, .ba-modal-actions { display: grid; grid-template-columns: minmax(0,1fr); } .ba-sheet-actions button, .ba-modal-actions button { width: 100%; } .ba-media-actions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); } .ba-media-button, .ba-camera-actions button { width: 100%; } .ba-camera-actions { display: grid; grid-template-columns: minmax(0, 1fr); } .ba-camera-modal { border-radius: 22px; padding: 11px; } }

.branches-map-shell {
  display: grid;
  gap: 10px;
}


.branches-map-legend span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  border-radius: 999px;
  background: color-mix(in srgb, currentColor 10%, transparent);
  font-size: 11px;
  font-weight: 850;
}

.branches-map-legend .branch { color: #7c3aed; }
.branches-map-legend .student { color: #2563eb; }
.branches-map-legend .teacher { color: #16a34a; }
.branches-map-legend .parent { color: #ea580c; }


.branches-map-toolbar {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 7px;
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.branches-map-toolbar::-webkit-scrollbar { display: none; }

.branches-map-toggle {
  --layer-color: #64748b;
  flex: 0 0 auto;
  min-height: 30px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid color-mix(in srgb, var(--layer-color) 24%, var(--border, rgba(0,0,0,.10)));
  border-radius: 999px;
  padding: 5px 9px;
  background: var(--card-bg, var(--surface, #fff));
  color: var(--muted-text, var(--muted-foreground, #64748b));
  cursor: pointer;
  font-size: 11px;
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;
  transition: border-color .16s ease, background .16s ease, color .16s ease, opacity .16s ease;
}
.branches-map-toggle i {
  width: 8px;
  height: 8px;
  flex: 0 0 auto;
  border-radius: 999px;
  background: var(--layer-color);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--layer-color) 12%, transparent);
}
.branches-map-toggle.active {
  border-color: color-mix(in srgb, var(--layer-color) 45%, var(--border, rgba(0,0,0,.10)));
  background: color-mix(in srgb, var(--layer-color) 9%, var(--card-bg, var(--surface, #fff)));
  color: var(--text, #111827);
}
.branches-map-toggle:not(.active) {
  opacity: .52;
}
.branches-map-toggle.branch { --layer-color: #7c3aed; }
.branches-map-toggle.student { --layer-color: #2563eb; }
.branches-map-toggle.teacher { --layer-color: #16a34a; }
.branches-map-toggle.parent { --layer-color: #ea580c; }

.branches-map-empty {
  min-height: 280px;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 7px;
  padding: 24px;
  text-align: center;
  color: var(--muted, #64748b);
}

.branches-map-empty > span {
  font-size: 38px;
  color: var(--ba-primary);
}

.branches-map-empty strong {
  color: var(--text, #111827);
  font-size: 16px;
}

.branches-map-empty small {
  max-width: 390px;
  line-height: 1.5;
}

@media (max-width: 680px) {
  .branches-layer-controls {
    grid-template-columns: 1fr;
  }
}
`;var aj=r(19137);let ak=[{value:"school_admin",label:"School Admin",icon:"\uD83C\uDFEB",helper:"School-level administrator across selected school operations.",branchRequired:!1},{value:"branch_admin",label:"Branch Admin",icon:"\uD83C\uDFE2",helper:"Branch-level administrator for one selected campus.",branchRequired:!0},{value:"accountant",label:"Accountant",icon:"\uD83D\uDCB0",helper:"Finance access for a selected school branch.",branchRequired:!0}],aN=["","Mr.","Mrs.","Miss","Ms.","Dr.","Prof.","Rev.","Pastor","Imam","Alhaji","Hajia","Nana"],aS={userId:"",title:"",fullName:"",email:"",phone:"",role:"school_admin",schoolId:"",branchId:"",active:!0,temporaryPassword:""};function aC(e){try{return window.localStorage.getItem(e)||window.sessionStorage.getItem(e)}catch{return null}}function aI(e){let a=aC(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}}function aA(e){return null==e?"":String(e).trim()}function az(e){return aA(e)||void 0}function aM(e){return String(e||"").trim().toLowerCase()}function a$(e){return String(e||"").trim().replace(/\s+/g," ")}function aP(e){let a=aM(e).split("@")[0].replace(/[^a-zA-Z0-9._-]/g,"");return`${a||"user"}@123`}function aF(e,a){return!!e&&!e.isDeleted&&(!e.accountId||e.accountId===a)}function aT(e){return ak.find(a=>a.value===e)?.label||String(e||"No role").replaceAll("_"," ")}function aR(e){return ak.find(a=>a.value===e)?.icon||"\uD83D\uDC64"}function aD(e){return String(e||"User").split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]?.toUpperCase()).join("")||"U"}function aE(e){return e?.id||e?.localId}function aL(e){return String(e?.userLocalId||e?.userId||e?.accountUserId||"")}function aB(e){return e?.id??e?.localId}function aU(...e){let a=u.db;for(let r of e)if(a[r])return a[r];return null}async function aO(...e){let a=aU(...e);return a?.toArray?a.toArray():[]}function a_(e){let a=e?.schema?.primKey;return a?.keyPath==="id"&&a?.auto===!1}function aH(e){let a=String(e||"auth").replace(/[^a-zA-Z0-9_-]/g,""),r="u">typeof crypto&&"function"==typeof crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`;return`${a}_${r}`}function aK(e){return a_(e)?new Date().toISOString():Date.now()}async function aq(e,a){try{return await (0,aj.AT)(e,{method:a.method,body:void 0===a.body?void 0:JSON.stringify(a.body)})}catch(t){let r=String(t?.message||t||"Request failed");throw Error(`${a.method} ${e} failed: ${r}`)}}function aG(e){return String(e?.message||e?.statusText||e||"")}function aY(e){let a=aG(e).toLowerCase();return e?.status===404||e?.statusCode===404||a.includes("404")||a.includes("not found")||a.includes("cannot ")||a.includes("no route")}async function aV(e){let a=null;for(let r of e)try{return await aq(r.endpoint,{method:r.method,body:r.body})}catch(e){if(a=e,!aY(e))break}throw a||Error("No auth endpoint accepted the request.")}function aW(e){return Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.items)?e.items:Array.isArray(e?.rows)?e.rows:Array.isArray(e?.results)?e.results:[]}function aJ(e){return[String(e.accountId||""),String(e.schoolId||""),String(e.branchId||""),String(e.role||""),String(e.userId||e.userLocalId||e.accountUserId||""),`email:${aM(e.email)}`].join("|")}function aZ(e){let a=new Map,r=[];e.filter(Boolean).forEach(e=>{let t=String(aB(e)||"").trim();t&&!t.startsWith("membership_")?a.set(t,{...a.get(t)||{},...e}):r.push(e)});let t=new Map;[...a.values(),...r].forEach(e=>{let a=String(aB(e)||"").trim(),r=a&&!a.startsWith("membership_")?`id:${a}`:`logical:${aJ(e)}`,i=t.get(r);if(!i)return void t.set(r,e);let n=String(aB(i)||""),s=a&&!a.startsWith("membership_"),o=n&&!n.startsWith("membership_");s&&!o?t.set(r,e):(!1!==e.active&&!1===i.active||Number(e.updatedAt||0)>=Number(i.updatedAt||0))&&t.set(r,{...i,...e})});let i=new Map;return[...t.values()].forEach(e=>{let a=aJ(e),r=i.get(a);if(!r)return void i.set(a,e);let t=String(aB(e)||""),n=String(aB(r)||""),s=t&&!t.startsWith("membership_"),o=n&&!n.startsWith("membership_");s&&!o?i.set(a,e):(!o||Number(e.updatedAt||0)>=Number(r.updatedAt||0))&&i.set(a,{...r,...e})}),[...i.values()]}function aQ(e,a,r){return!(!e||e.role!==a.role||String(aL(e)||e.userId||"")!==String(r)||aA(e.schoolId)!==aA(a.schoolId)||ak.find(e=>e.value===a.role)?.branchRequired&&aA(e.branchId)!==aA(a.branchId))&&(aM(e.email)===aM(a.email)||!!r)}function aX(e){let a=[e?.users,e?.appUsers,e?.accountUsers,e?.data?.users,e?.data?.appUsers,e?.data?.accountUsers,e?.data,e?.items,e?.rows,e?.results,e].flatMap(aW).filter(Boolean),r=[e?.memberships,e?.userMemberships,e?.data?.memberships,e?.data?.userMemberships].flatMap(aW).filter(Boolean),t=a.flatMap(e=>[e?.memberships,e?.userMemberships,e?.membership?[e.membership]:[],e?.userMembership?[e.userMembership]:[]].flatMap(aW).map(a=>({...a,userId:a?.userId||aE(e),title:a?.title||e?.title,fullName:a?.fullName||e?.fullName||e?.name,email:a?.email||e?.email,accountId:a?.accountId||e?.accountId,schoolId:a?.schoolId??e?.schoolId,branchId:a?.branchId??e?.branchId,active:a?.active??e?.active,status:a?.status||e?.status,mustChangePassword:a?.mustChangePassword??e?.mustChangePassword}))),i=a.filter(e=>{let a=String(e?.role||"").toLowerCase(),r=t.some(r=>String(r.userId||"")===String(aE(e)||"")&&String(r.role||"")===a);return ak.some(e=>e.value===a)&&!r}).map(e=>({id:e?.membershipId||e?.userMembershipId||`membership_${aE(e)||e.email||Math.random()}`,accountId:e?.accountId,schoolId:e?.schoolId,branchId:e?.branchId,userId:aE(e),title:e?.title,fullName:e?.fullName||e?.name,email:e?.email,role:e?.role,active:e?.active!==!1&&e?.status!=="inactive",status:e?.active===!1||e?.status==="inactive"?"inactive":"active",mustChangePassword:!!e?.mustChangePassword,isDeleted:!!e?.isDeleted}));return{users:a,memberships:aZ([...r,...t,...i])}}async function a0(e){let a=new URLSearchParams;e.schoolId&&a.set("schoolId",String(e.schoolId)),e.branchId&&a.set("branchId",String(e.branchId));let r=a.toString()?`?${a.toString()}`:"";return aV([{endpoint:`/accounts/me/users${r}`,method:"GET"},{endpoint:`/accounts/users${r}`,method:"GET"},{endpoint:`/owner/users${r}`,method:"GET"}])}function a1(e){return{fullName:e.fullName.trim(),email:aM(e.email),phone:a$(e.phone)||void 0,password:e.temporaryPassword.trim(),role:e.role,schoolId:e.schoolId,branchId:e.branchId||void 0}}function a2(e){return{fullName:e.fullName.trim(),phone:a$(e.phone)||void 0,role:e.role}}function a4(e,a){return{userId:a,role:e.role,schoolId:e.schoolId,branchId:e.branchId||null,active:e.active}}async function a8(e){let a,r=aM(e.form.email),t=(e.form.userId?e.users.find(a=>String(aE(a)||"")===String(e.form.userId)):void 0)||e.users.find(e=>aM(e.email)===r),i=[];if(t&&aE(t))i=aX(t=await aV([{endpoint:`/accounts/users/${encodeURIComponent(String(aE(t)))}`,method:"PATCH",body:a2(e.form)},{endpoint:`/accounts/me/users/${encodeURIComponent(String(aE(t)))}`,method:"PATCH",body:a2(e.form)}])).memberships;else try{t=await aV([{endpoint:"/accounts/me/users",method:"POST",body:a1(e.form)},{endpoint:"/accounts/users",method:"POST",body:a1(e.form)},{endpoint:"/owner/users",method:"POST",body:a1(e.form)}]),i=aX(t).memberships}catch(s){let a=aG(s).toLowerCase();if(!a.includes("already registered")&&!a.includes("already exists"))throw s;let n=aX(await a0({schoolId:az(e.form.schoolId),branchId:az(e.form.branchId)}));if(t=n.users.find(e=>aM(e.email)===r),i=n.memberships,!t)throw s}let n=String(aE(t)||"");if(!n)throw Error("The backend did not return a valid user id.");let s=aZ([...e.memberships,...i,...aX(t).memberships]),o=(e.form.membershipId?s.find(a=>String(aB(a)||"")===String(e.form.membershipId)):void 0)||s.find(a=>aQ(a,e.form,n));return a=o?.id||o?.localId?await aV([{endpoint:`/memberships/${encodeURIComponent(String(aB(o)))}`,method:"PATCH",body:a4(e.form,n)},{endpoint:`/user-memberships/${encodeURIComponent(String(aB(o)))}`,method:"PATCH",body:a4(e.form,n)}]):await aV([{endpoint:"/memberships",method:"POST",body:a4(e.form,n)},{endpoint:"/user-memberships",method:"POST",body:a4(e.form,n)}]),!1===e.form.active&&a?.id&&(a=await aV([{endpoint:`/memberships/${encodeURIComponent(String(a.id))}`,method:"PATCH",body:{active:!1,status:"inactive"}},{endpoint:`/user-memberships/${encodeURIComponent(String(a.id))}`,method:"PATCH",body:{active:!1,status:"inactive"}}])),{user:t,membership:a}}async function a9(e){let a=aU("appUsers","accountUsers","users");if(!a)return;let r=aE(e.user)||aH("user"),t=aK(a),i={...e.user,id:r,accountId:e.accountId,schoolId:e.form.schoolId,branchId:e.form.branchId||null,title:e.form.title.trim()||e.user.title,fullName:e.form.fullName.trim(),name:e.form.fullName.trim(),email:aM(e.form.email),phone:a$(e.form.phone)||void 0,role:e.form.role,active:e.form.active,status:e.form.active?"active":"inactive",temporaryPassword:e.form.temporaryPassword.trim(),password:e.form.temporaryPassword.trim(),mustChangePassword:!0,isDeleted:!1,updatedAt:t},n=await a.get(r).catch(()=>void 0)||await a.where?.("email")?.equals?.(i.email)?.first?.().catch(()=>void 0);n?.id||n?.localId?await a.update(aB(n),{...i,version:Number(n.version||0)+1}):await a.add({...a_(a)?{id:r}:{},...i,createdAt:t,version:1})}async function a7(e){let a=aU("userMemberships","memberships");if(!a)return;let r=aB(e.membership)||e.form.membershipId||aH("membership"),t=String(aE(e.user)||e.membership.userId||""),i=aK(a),n={...e.membership,id:r,accountId:e.accountId,schoolId:e.form.schoolId,branchId:e.form.branchId||null,userId:t,userLocalId:null,accountUserId:null,title:e.form.title.trim()||void 0,fullName:e.form.fullName.trim(),email:aM(e.form.email),role:e.form.role,active:e.form.active,status:e.form.active?"active":"inactive",mustChangePassword:!0,isDeleted:!1,updatedAt:i},s=a?.toArray?await a.toArray().catch(()=>[]):[],o=await a.get(r).catch(()=>void 0)||s.find(a=>aQ(a,e.form,t));o?.id||o?.localId?await a.update(aB(o),{...n,id:aB(o),version:Number(o.version||0)+1}):await a.add({...a_(a)?{id:r}:{},...n,createdAt:i,version:1})}async function a6(e){let a=String(aB(e.membership)||"").trim();if(!a)throw Error("Missing membership id for this access role.");let r=encodeURIComponent(a);try{return await aV([{endpoint:`/memberships/${r}`,method:"DELETE"},{endpoint:`/user-memberships/${r}`,method:"DELETE"},{endpoint:`/accounts/memberships/${r}`,method:"DELETE"},{endpoint:`/accounts/user-memberships/${r}`,method:"DELETE"}])}catch(e){if(!aY(e))throw e;return aV([{endpoint:`/memberships/${r}`,method:"PATCH",body:{active:!1,status:"inactive",isDeleted:!0}},{endpoint:`/user-memberships/${r}`,method:"PATCH",body:{active:!1,status:"inactive",isDeleted:!0}},{endpoint:`/accounts/memberships/${r}`,method:"PATCH",body:{active:!1,status:"inactive",isDeleted:!0}},{endpoint:`/accounts/user-memberships/${r}`,method:"PATCH",body:{active:!1,status:"inactive",isDeleted:!0}}])}}async function a3(e){let a=aU("userMemberships","memberships"),r=aU("appUsers","accountUsers","users"),t=aB(e.membership),i=aE(e.user)||aL(e.membership);a&&t&&await a.delete(t).catch(e=>console.warn("Failed to remove local membership cache:",e)),r&&i&&a?.toArray&&((await a.toArray()).some(e=>{let a=String(aL(e))===String(i),r=String(aB(e)||"")===String(t||"");return a&&!r&&!0!==e.isDeleted})||await r.delete(i).catch(e=>console.warn("Failed to remove local user cache:",e)))}function a5({primary:e,title:a,text:r}){return(0,n.jsxs)("main",{className:"ba-page ownerusers-page",style:{"--ba-primary":e},children:[(0,n.jsx)("style",{children:rs}),(0,n.jsxs)("section",{className:"ba-state",children:[(0,n.jsx)("div",{className:"ba-spinner"}),(0,n.jsx)("h2",{children:a}),(0,n.jsx)("p",{children:r})]})]})}function re(){return(0,n.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M4 7h9"}),(0,n.jsx)("path",{d:"M17 7h3"}),(0,n.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,n.jsx)("path",{d:"M4 17h3"}),(0,n.jsx)("path",{d:"M11 17h9"}),(0,n.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function ra({children:e,tone:a="gray"}){return(0,n.jsx)("span",{className:`ba-chip ${a}`,children:e})}function rr({icon:e,title:a,text:r}){return(0,n.jsxs)("section",{className:"ba-empty",children:[(0,n.jsx)("div",{className:"ba-empty-icon",children:e}),(0,n.jsx)("h3",{children:a}),(0,n.jsx)("p",{children:r})]})}function rt({schools:e,branches:a,roleFilter:r,accessFilter:t,schoolFilter:i,branchFilter:s,setRoleFilter:o,setAccessFilter:l,setSchoolFilter:c,setBranchFilter:d,onClose:p}){let b="all"===i?a:a.filter(e=>aA(e.schoolId)===aA(i));return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Filters"}),(0,n.jsx)("p",{children:"Filter owner-created access by role, access state, school and branch."})]}),(0,n.jsx)("button",{type:"button",onClick:p,"aria-label":"Close filters",children:"✕"})]}),(0,n.jsxs)("div",{className:"ba-form compact",children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Role"}),(0,n.jsxs)("select",{value:r,onChange:e=>o(e.target.value),children:[(0,n.jsx)("option",{value:"all",children:"All Roles"}),ak.map(e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value))]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Access"}),(0,n.jsxs)("select",{value:t,onChange:e=>l(e.target.value),children:[(0,n.jsx)("option",{value:"all",children:"All Access"}),(0,n.jsx)("option",{value:"enabled",children:"Access Enabled"}),(0,n.jsx)("option",{value:"inactive",children:"Inactive"})]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"School"}),(0,n.jsxs)("select",{value:i,onChange:e=>c(e.target.value),children:[(0,n.jsx)("option",{value:"all",children:"All Schools"}),e.map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Branch"}),(0,n.jsxs)("select",{value:s,onChange:e=>d(e.target.value),children:[(0,n.jsx)("option",{value:"all",children:"All Branches"}),b.map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},e.id))]})]})]}),(0,n.jsxs)("div",{className:"ba-sheet-actions",children:[(0,n.jsx)("button",{type:"button",onClick:()=>{o("all"),l("all"),c("all"),d("all")},children:"Clear"}),(0,n.jsx)("button",{type:"button",className:"primary",onClick:p,children:"Apply"})]})]})})}function ri({viewMode:e,setViewMode:a,onAdd:r,onRefresh:t,summary:i,onClose:s}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"More"}),(0,n.jsxs)("p",{children:[i.total," administrative access record(s)."]})]}),(0,n.jsx)("button",{type:"button",onClick:s,"aria-label":"Close more options",children:"✕"})]}),(0,n.jsxs)("div",{className:"ba-menu-list",children:[(0,n.jsxs)("button",{type:"button",className:"cards"===e?"active":"",onClick:()=>a("cards"),children:[(0,n.jsx)("span",{children:"☰"}),(0,n.jsx)("b",{children:"Cards"}),(0,n.jsx)("small",{children:"Compact mobile-first list"})]}),(0,n.jsxs)("button",{type:"button",className:"table"===e?"active":"",onClick:()=>a("table"),children:[(0,n.jsx)("span",{children:"▦"}),(0,n.jsx)("b",{children:"Table"}),(0,n.jsx)("small",{children:"Compare users, roles and branches"})]}),(0,n.jsxs)("button",{type:"button",onClick:r,children:[(0,n.jsx)("span",{children:"＋"}),(0,n.jsx)("b",{children:"Add Access"}),(0,n.jsx)("small",{children:"Create school or branch admin access"})]}),(0,n.jsxs)("button",{type:"button",onClick:t,children:[(0,n.jsx)("span",{children:"↻"}),(0,n.jsx)("b",{children:"Refresh"}),(0,n.jsx)("small",{children:"Reload backend and local cache"})]})]})]})})}function rn({candidate:e,openCandidate:a,toggleAccess:r,deleteAccess:t,onClose:i}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:e.fullName}),(0,n.jsxs)("p",{children:[e.email||"No email"," \xb7 ",e.subLabel]})]}),(0,n.jsx)("button",{type:"button",onClick:i,"aria-label":"Close user details",children:"✕"})]}),(0,n.jsxs)("div",{className:"ownerusers-profile",children:[(0,n.jsx)("span",{className:"ownerusers-avatar large",children:aD(e.fullName)}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("strong",{children:[aR(e.role)," ",aT(e.role)]}),(0,n.jsx)("small",{children:e.enabled?"Access enabled":e.inactive?"Inactive access":"Not enabled"})]})]}),(0,n.jsxs)("div",{className:"ba-menu-list",children:[(0,n.jsxs)("button",{type:"button",onClick:()=>{a(e),i()},children:[(0,n.jsx)("span",{children:"✎"}),(0,n.jsx)("b",{children:"Edit access"}),(0,n.jsx)("small",{children:"Change school, branch, role or contact details"})]}),(0,n.jsxs)("button",{type:"button",onClick:()=>{r(e),i()},children:[(0,n.jsx)("span",{children:e.enabled?"⏸":"▶"}),(0,n.jsx)("b",{children:e.enabled?"Deactivate":"Activate"}),(0,n.jsx)("small",{children:"Toggle this role membership"})]}),(0,n.jsxs)("button",{type:"button",className:"danger",onClick:()=>{t(e),i()},children:[(0,n.jsx)("span",{children:"⌫"}),(0,n.jsx)("b",{children:"Delete access"}),(0,n.jsx)("small",{children:"Remove this role membership from backend"})]})]})]})})}let rs=`
@keyframes baSpin{to{transform:rotate(360deg)}}
.ba-page{min-height:100dvh;width:100%;max-width:100%;min-width:0;padding:calc(8px * var(--local-density-scale,1));padding-bottom:max(40px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--ba-primary) 9%,transparent),transparent 30rem),var(--bg,#f7f8fb);color:var(--text,#111827);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);font-size:var(--font-size,14px);overflow-x:hidden}
.ba-page *,.ba-page *::before,.ba-page *::after{box-sizing:border-box;min-width:0}
.ba-page button,.ba-page input,.ba-page select{font:inherit;max-width:100%}
.ba-page input,.ba-page select{width:100%;min-height:44px;border:1px solid var(--input-border,var(--border,rgba(0,0,0,.10)));border-radius:16px;padding:0 12px;background:var(--input-bg,var(--surface,#fff));color:var(--input-text,var(--text,#111827));outline:none;font-weight:750}
.ba-page input:focus,.ba-page select:focus{border-color:color-mix(in srgb,var(--ba-primary) 52%,var(--border,rgba(0,0,0,.10)));box-shadow:0 0 0 4px color-mix(in srgb,var(--ba-primary) 12%,transparent)}
.ba-state,.ba-search-card,.student-row,.ba-table-card,.ba-empty,.ba-sheet{background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.10));box-shadow:0 12px 28px rgba(15,23,42,.045)}
.ba-state{min-height:min(420px,calc(100dvh - 32px));width:min(520px,100%);margin:0 auto;display:grid;place-items:center;align-content:center;gap:10px;padding:22px;border-radius:28px;text-align:center}
.ba-state h2{margin:0;font-size:22px;font-weight:1000;letter-spacing:-.04em}.ba-state p{max-width:34rem;margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.ba-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--ba-primary) 18%,transparent);border-top-color:var(--ba-primary);animation:baSpin .8s linear infinite}
.ba-search-card{display:grid;grid-template-columns:minmax(0,1fr) 42px 42px 42px;gap:8px;align-items:center;margin-top:2px;padding:8px;border-radius:24px}
.ba-search{min-width:0;display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:8px;min-height:44px;padding:0 11px;border-radius:18px;background:color-mix(in srgb,var(--muted,#64748b) 7%,transparent)}.ba-search span{color:var(--muted,#64748b);font-size:17px;font-weight:1000}.ba-search input{min-height:42px;border:0;padding:0;border-radius:0;background:transparent;box-shadow:none;font-size:14px}
.ba-icon-button,.ba-filter-button,.ba-add-inline{width:42px;height:42px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;display:grid;place-items:center;background:var(--card-bg,var(--surface,#fff));color:var(--text,#111827);font-size:18px;font-weight:1000;cursor:pointer;box-shadow:0 10px 22px rgba(15,23,42,.045)}
.ba-add-inline{border-color:var(--ba-primary);background:var(--ba-primary);color:#fff;font-size:20px;box-shadow:0 12px 28px color-mix(in srgb,var(--ba-primary) 22%,transparent)}.ba-filter-button{position:relative;background:color-mix(in srgb,var(--ba-primary) 8%,var(--card-bg,#fff));color:var(--ba-primary)}.ba-filter-button.active{background:var(--ba-primary);color:#fff;border-color:var(--ba-primary)}.ba-filter-button b{position:absolute;top:-4px;right:-4px;min-width:19px;height:19px;display:grid;place-items:center;border-radius:999px;background:#ef4444;color:#fff;font-size:10px;border:2px solid var(--card-bg,#fff)}.ba-slider-icon{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.ba-filter-chips{display:flex;gap:7px;overflow-x:auto;padding:8px 1px 0;scrollbar-width:none}.ba-filter-chips::-webkit-scrollbar{display:none}.ba-filter-chips button{flex:0 0 auto;min-height:31px;border:0;border-radius:999px;padding:0 10px;background:color-mix(in srgb,var(--ba-primary) 11%,transparent);color:var(--ba-primary);font-size:11px;font-weight:950;white-space:nowrap;cursor:pointer}
.ba-list{display:grid;gap:8px;margin-top:10px}.student-row{width:100%;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:10px;padding:10px;border-radius:22px;text-align:left;cursor:pointer;color:var(--text,#111827)}.student-row:hover{border-color:color-mix(in srgb,var(--ba-primary) 24%,var(--border,rgba(0,0,0,.10)));box-shadow:0 16px 34px rgba(15,23,42,.07)}
.ownerusers-avatar{width:48px;height:48px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--ba-primary),color-mix(in srgb,var(--ba-primary) 35%,#fff));color:#fff;font-size:15px;font-weight:1000;box-shadow:0 12px 24px rgba(15,23,42,.12)}.ownerusers-avatar.large{width:58px;height:58px;border-radius:21px;font-size:18px}
.student-main,.student-main strong,.student-main small,.student-main em{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.student-main strong{color:var(--text,#111827);font-size:14px;font-weight:1000;letter-spacing:-.02em}.student-main small{margin-top:3px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.student-main em{margin-top:3px;color:color-mix(in srgb,var(--muted,#64748b) 86%,var(--text,#111827));font-size:11px;font-weight:750;font-style:normal}.student-side{display:grid;justify-items:end;gap:5px}.student-side i{font-style:normal;font-weight:1000;color:var(--muted,#64748b)}
.status-dot-mini{width:10px;height:10px;border-radius:999px}.status-dot-mini.green{background:#22c55e}.status-dot-mini.red{background:#ef4444}.status-dot-mini.orange{background:#f59e0b}
.ba-chip{max-width:100%;display:inline-flex;align-items:center;min-height:24px;padding:3px 8px;border-radius:999px;font-size:10px;font-weight:950;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:capitalize}.ba-chip.green{background:rgba(34,197,94,.12);color:#16a34a}.ba-chip.red{background:rgba(239,68,68,.12);color:#dc2626}.ba-chip.blue{background:rgba(59,130,246,.12);color:#2563eb}.ba-chip.gray{background:color-mix(in srgb,var(--muted,#64748b) 14%,transparent);color:var(--muted,#64748b)}.ba-chip.orange{background:rgba(245,158,11,.14);color:#b45309}.ba-chip.purple{background:rgba(147,51,234,.12);color:#7e22ce}
.ba-table-card{margin-top:10px;border-radius:24px;overflow:hidden}.ba-table-scroll{width:100%;overflow:auto}table{width:100%;border-collapse:separate;border-spacing:0;min-width:840px}th,td{padding:12px;text-align:left;border-bottom:1px solid var(--border,rgba(0,0,0,.08));vertical-align:middle}th{position:sticky;top:0;z-index:1;background:var(--table-header-bg,color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff)));color:var(--table-header-text,var(--text,#111827));font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.07em}td{font-size:13px;color:var(--text,#111827)}td strong,td span{display:block}.ba-table-actions{display:flex;align-items:center;gap:6px;white-space:nowrap}.ba-table-actions button{min-height:32px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;padding:0 10px;background:var(--surface,#fff);color:var(--text,#111827);font-size:11px;font-weight:900;cursor:pointer}.ba-table-actions .ba-delete{border-color:rgba(239,68,68,.25);background:rgba(239,68,68,.08);color:#dc2626}.ba-empty-table{padding:18px;text-align:center;color:var(--muted,#64748b);font-size:13px;font-weight:800}
.ba-empty{display:grid;place-items:center;align-content:center;gap:8px;min-height:210px;margin-top:10px;padding:22px;border-radius:24px;border-style:dashed;text-align:center}.ba-empty-icon{width:56px;height:56px;display:grid;place-items:center;border-radius:22px;background:color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));font-size:28px}.ba-empty h3{margin:0;font-size:18px;font-weight:1000}.ba-empty p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}
.ba-sheet-backdrop{position:fixed;inset:0;z-index:80;display:grid;place-items:end center;padding:10px;background:rgba(15,23,42,.50);backdrop-filter:blur(12px)}.ba-sheet{width:min(760px,100%);max-height:min(88dvh,760px);overflow-y:auto;padding:14px;border-radius:28px 28px 22px 22px;box-shadow:0 30px 90px rgba(15,23,42,.32)}.ba-sheet.small{width:min(520px,100%)}.ba-sheet-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding-bottom:12px}.ba-sheet-head h2{margin:0;color:var(--text,#111827);font-size:21px;font-weight:1000;letter-spacing:-.05em}.ba-sheet-head p{margin:5px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5;font-weight:750}.ba-sheet-head button{width:38px;height:38px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;background:var(--surface,#fff);color:var(--text,#111827);font-weight:1000;cursor:pointer;flex:0 0 auto}
.ba-form.compact{display:grid;grid-template-columns:minmax(0,1fr);gap:9px}.ba-form label{display:grid;gap:6px}.ba-form span{color:var(--muted,#64748b);font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.06em}.ba-warning{margin-bottom:10px;padding:10px 12px;border-radius:18px;background:rgba(245,158,11,.12);color:#92400e;border:1px solid rgba(245,158,11,.22);font-size:12px;font-weight:800;line-height:1.5}.ownerusers-note{display:grid;gap:3px;margin-bottom:10px;padding:10px 12px;border-radius:18px;background:color-mix(in srgb,var(--ba-primary) 9%,transparent);border:1px solid color-mix(in srgb,var(--ba-primary) 16%,transparent)}.ownerusers-note strong{font-size:12px;font-weight:1000}.ownerusers-note span{color:var(--muted,#64748b);font-size:11px;font-weight:750;line-height:1.5}.ownerusers-switch-row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:10px;padding:10px 12px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:18px}.ownerusers-switch-row strong,.ownerusers-switch-row span{display:block}.ownerusers-switch-row span{margin-top:3px;color:var(--muted,#64748b);font-size:11px;font-weight:750}.ownerusers-switch{width:54px;height:30px;border:0;border-radius:999px;background:color-mix(in srgb,var(--muted,#64748b) 28%,transparent);padding:3px;cursor:pointer;transition:.18s}.ownerusers-switch span{width:24px;height:24px;display:block;border-radius:999px;background:#fff;transition:.18s;box-shadow:0 5px 14px rgba(15,23,42,.20)}.ownerusers-switch.on{background:var(--ba-primary)}.ownerusers-switch.on span{transform:translateX(24px)}
.ba-sheet-actions{position:sticky;bottom:-14px;display:flex;justify-content:flex-end;flex-wrap:wrap;gap:8px;margin-top:14px;padding:12px 0 2px;background:linear-gradient(to top,var(--card-bg,var(--surface,#fff)) 70%,transparent)}.ba-sheet-actions button{min-height:42px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;padding:0 16px;background:color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff));color:var(--text,#111827);font-size:12px;font-weight:950;cursor:pointer}.ba-sheet-actions button.primary{border-color:var(--ba-primary);background:var(--ba-primary);color:#fff;box-shadow:0 14px 32px color-mix(in srgb,var(--ba-primary) 25%,transparent)}.ba-sheet-actions button:disabled{opacity:.65;cursor:not-allowed}
.ba-menu-list{display:grid;gap:8px}.ba-menu-list button{width:100%;display:grid;grid-template-columns:42px minmax(0,1fr);column-gap:10px;align-items:center;min-height:58px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:18px;padding:9px;background:var(--surface,#fff);color:var(--text,#111827);text-align:left;cursor:pointer}.ba-menu-list button span{grid-row:span 2;width:42px;height:42px;display:grid;place-items:center;border-radius:16px;background:color-mix(in srgb,var(--ba-primary) 10%,transparent);color:var(--ba-primary);font-weight:1000}.ba-menu-list button b,.ba-menu-list button small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ba-menu-list button b{font-size:13px;font-weight:1000}.ba-menu-list button small{margin-top:2px;color:var(--muted,#64748b);font-size:11px;font-weight:750}.ba-menu-list button.active{border-color:color-mix(in srgb,var(--ba-primary) 34%,var(--border,rgba(0,0,0,.10)));background:color-mix(in srgb,var(--ba-primary) 8%,var(--surface,#fff))}.ba-menu-list button.danger span{background:rgba(239,68,68,.10);color:#dc2626}.ba-menu-list button.danger b{color:#dc2626}
.ownerusers-profile{display:flex;align-items:center;gap:12px;margin-bottom:12px;padding:10px;border-radius:20px;background:color-mix(in srgb,var(--muted,#64748b) 8%,transparent)}.ownerusers-profile strong,.ownerusers-profile small{display:block}.ownerusers-profile strong{font-size:14px;font-weight:1000}.ownerusers-profile small{margin-top:3px;color:var(--muted,#64748b);font-size:12px;font-weight:800}
@media (min-width:680px){.ba-page{padding:calc(12px * var(--local-density-scale,1));padding-bottom:44px}.ba-search-card{grid-template-columns:minmax(0,1fr) 48px 48px 48px}.ba-list{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.ba-sheet-backdrop{place-items:center;padding:18px}.ba-sheet{border-radius:28px;padding:18px}.ba-form.compact{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (min-width:1040px){.ba-page{padding:calc(16px * var(--local-density-scale,1));padding-bottom:48px}.ba-search-card,.ba-list,.ba-table-card,.ba-filter-chips{max-width:1180px;margin-left:auto;margin-right:auto}.ba-list{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:520px){.ba-page{padding:calc(7px * var(--local-density-scale,1));padding-bottom:max(38px,env(safe-area-inset-bottom))}.ba-search-card{grid-template-columns:minmax(0,1fr) 40px 40px 40px;gap:6px;padding:6px;border-radius:22px}.ba-icon-button,.ba-filter-button,.ba-add-inline{width:40px;height:40px}.ba-sheet-actions{display:grid;grid-template-columns:minmax(0,1fr)}.ba-sheet-actions button{width:100%}}
`;var ro=r(41660),rl=r(4032);function rc(e,a){let r=String(e?.licenseModel||"").toLowerCase(),t=String(e?.deploymentMode||"").toLowerCase();return"trial"===r||"trial"===a?"Free trial":"complimentary"===r||String(e?.code||"").startsWith("pilot_")?"Complimentary access":e?.metadata?.visibility==="private"||e?.code==="sp005"?"Private / pilot arrangement":"perpetual"===r||t.startsWith("independent")?"Independent licence":t.includes("private")||t.includes("hosted")?"Private deployment":"subscription"===r||"connected"===t||"eleeveon_cloud"===t?"Cloud subscription":"Commercial package"}function rd(e){if(!e)return"Pricing not available";let a=rc(e);if("Free trial"===a)return`${Number(e.metadata?.trialDays||14)}-day free trial`;if("Complimentary access"===a||"Private / pilot arrangement"===a)return"Privately arranged access";if("Independent licence"===a)return null==e.priceOneTime?"Contact Eleeveon for pricing":`${rb(Number(e.priceOneTime),e.currency||"GHS")} once`;let r=e.metadata?.pricing;return r?.mode==="per_student"?`${rb(Number(r.perStudentRate||0),e.currency||"GHS")} per student / ${r.billingPeriod||"term"}`:r?.mode==="tiered"?`Student-based tiers / ${r.billingPeriod||"term"}`:Number(e.priceTermly)>0?`${rb(Number(e.priceTermly),e.currency||"GHS")} / term`:Number(e.priceMonthly)>0?`${rb(Number(e.priceMonthly),e.currency||"GHS")} / month`:Number(e.priceYearly)>0?`${rb(Number(e.priceYearly),e.currency||"GHS")} / year`:"Pricing available on request"}function rp(e){let a=String(e.metadata?.visibility||"public").toLowerCase(),r=String(e.licenseModel||"").toLowerCase(),t=e.availableAcquisitionModes||[];return!1!==e.active&&"public"===a&&e.metadata?.publicVisible!==!1&&!["complimentary","private"].includes(r)&&!String(e.code||"").startsWith("pilot_")&&!t.includes("private_offer")}function rb(e,a="GHS"){return new Intl.NumberFormat("en-GH",{style:"currency",currency:a,maximumFractionDigits:0}).format(Number(e||0))}function ru(e){if(!e)return"Not set";let a=new Date(e);return Number.isNaN(a.getTime())?"Not set":a.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}function rm(e){return Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.items)?e.items:Array.isArray(e?.rows)?e.rows:Array.isArray(e?.results)?e.results:[]}async function rh(...e){let a=function(...e){let a=u.db;for(let r of e)if(a[r])return a[r];return null}(...e);return a?.toArray?a.toArray():[]}function rx(e){let a=String(e||"").toLowerCase();return["active","paid","completed","success","succeeded"].includes(a)?"green":["failed","cancelled","void","expired","suspended"].includes(a)?"red":["trial","pending","processing","issued","part_paid","past_due","overdue"].includes(a)?"orange":["draft"].includes(a)?"gray":"blue"}function rg(e,a="not set"){let r=String(e||"").trim();return r?r.replace(/_/g," "):a}function rf(){let e=(0,c.useRouter)(),{accountId:a,authenticated:r,loading:t}=(0,d.F)(),{settings:i,loading:o}=(0,p.t)(),l=i?.primaryColor||"var(--primary-color, #2563eb)",[b,u]=(0,s.useState)(!0),[m,h]=(0,s.useState)(""),[x,g]=(0,s.useState)(null),[f,v]=(0,s.useState)([]),[y,w]=(0,s.useState)([]),[j,k]=(0,s.useState)("overview"),[N,S]=(0,s.useState)(""),[C,I]=(0,s.useState)(!1),[A,z]=(0,s.useState)([]),[M,$]=(0,s.useState)(""),[P,F]=(0,s.useState)(200);async function T(){if(!r||!a)return void u(!1);try{u(!0),h("");try{let e=await (0,aj.AT)("/billing/plans");z((function(e){if(Array.isArray(e))return e;if(e&&"object"==typeof e){for(let a of["plans","data","items","results"])if(Array.isArray(e[a]))return e[a]}return[]})(e).filter(rp)),$("")}catch{$("The current package catalogue is unavailable. Your account history is still accessible.")}try{let e=await (0,aj.AT)("/accounts/me");g(e),v(rm(e?.invoices)),w(rm(e?.payments))}catch{let[e,r,t,i]=await Promise.all([rh("accountSubscriptions"),rh("invoices"),rh("appPayments","payments"),rh("subscriptionPlans")]),n=e.find(e=>e.accountId===a)||null,s=i.find(e=>e.id===n?.planId)||n?.plan||null;g({id:a,name:"Owner Account",subscription:n?{...n,plan:s}:null}),v(r.filter(e=>!e.accountId||e.accountId===a)),w(t.filter(e=>!e.accountId||e.accountId===a)),h("Live billing server was not available. Showing latest billing data saved on this device.")}}finally{u(!1)}}(0,s.useEffect)(()=>{!t&&(r&&a||e.replace("/login"))},[t,r,a,e]),(0,s.useEffect)(()=>{T()},[r,a]);let R=x?.subscription?.plan?.currency||f[0]?.currency||y[0]?.currency||"GHS",D=x?.subscription?.plan,E=A.find(e=>e.id===x?.subscription?.planId||e.code===D?.code),L=D?{...E,...D,metadata:D.metadata||E?.metadata}:E,B=x?.subscription,U=(0,s.useMemo)(()=>{let e=f.reduce((e,a)=>e+Number(a.total||0),0);return{totalInvoiced:e,totalPaid:y.filter(e=>"paid"===String(e.status||"").toLowerCase()).reduce((e,a)=>e+Number(a.amount||0),0),outstanding:f.reduce((e,a)=>e+Number(a.balance??Math.max(Number(a.total||0)-Number(a.amountPaid||0),0)),0),invoices:f.length,payments:y.length,unpaidInvoices:f.filter(e=>!["paid","void","cancelled"].includes(String(e.status||"").toLowerCase())).length}},[f,y]),O=(0,s.useMemo)(()=>{let e=N.toLowerCase().trim();return f.filter(a=>!e||`${a.invoiceNumber} ${a.status} ${a.total} ${a.balance}`.toLowerCase().includes(e))},[f,N]),_=(0,s.useMemo)(()=>{let e=N.toLowerCase().trim();return y.filter(a=>!e||`${a.receiptNumber} ${a.providerReference} ${a.status} ${a.method} ${a.provider}`.toLowerCase().includes(e))},[y,N]),H=[["Offline Sync",L?.offlineSync??L?.metadata?.featureFlags?.offlineSync],["Cloud Backup",L?.cloudBackup],["Reports",L?.reports],["Finance",L?.finance],["Teacher Portal",L?.teacherPortal],["Student Portal",L?.studentPortal],["Parent Portal",L?.parentPortal],["Advanced Analytics",L?.advancedAnalytics],["API Access",L?.apiAccess]],K="packages"===j?A.length:"invoices"===j?O.length:"payments"===j?_.length:"features"===j?H.length:4,q=rc(L,B?.status),G=A.filter(e=>{let a=e.metadata?.pricing;return a?.mode==="per_student"||a?.mode==="tiered"});return t||o||b?(0,n.jsxs)("main",{className:"ba-page billing-page",style:{"--ba-primary":l},children:[(0,n.jsx)("style",{children:rS}),(0,n.jsxs)("section",{className:"ba-state",children:[(0,n.jsx)("div",{className:"ba-spinner"}),(0,n.jsx)("h2",{children:"Opening billing overview..."}),(0,n.jsx)("p",{children:"Loading subscription, invoices and payment history."})]})]}):(0,n.jsxs)("main",{className:"ba-page billing-page",style:{"--ba-primary":l},children:[(0,n.jsx)("style",{children:rS}),(0,n.jsxs)("section",{className:"ba-search-card","aria-label":"Billing search and actions",children:[(0,n.jsxs)("label",{className:"ba-search",children:[(0,n.jsx)("span",{children:"⌕"}),(0,n.jsx)("input",{placeholder:"invoices"===j?"Search invoices...":"payments"===j?"Search payments...":"Search billing...",value:N,onChange:e=>S(e.target.value),"aria-label":"Search billing records"})]}),(0,n.jsx)("button",{type:"button",className:"ba-add-inline",onClick:T,"aria-label":"Refresh billing",children:"↻"}),(0,n.jsx)("button",{type:"button",className:"ba-filter-button",onClick:()=>I(!0),"aria-label":"Open billing views",title:"Views",children:K}),(0,n.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>I(!0),"aria-label":"More options",children:"⋯"})]}),m?(0,n.jsxs)("section",{className:"ba-slim-notice",children:[(0,n.jsx)("span",{className:"status-dot-mini orange"}),(0,n.jsx)("p",{children:m})]}):null,(0,n.jsx)(ro.A,{onExplorePackages:()=>e.push("/owner/subscription")}),(0,n.jsxs)("section",{className:"ba-filter-chips","aria-label":"Billing views",children:[(0,n.jsx)("button",{type:"button",className:"overview"===j?"active":"",onClick:()=>k("overview"),children:"Overview"}),(0,n.jsxs)("button",{type:"button",className:"packages"===j?"active":"",onClick:()=>k("packages"),children:["Packages (",A.length,")"]}),(0,n.jsxs)("button",{type:"button",className:"invoices"===j?"active":"",onClick:()=>k("invoices"),children:["Invoices (",U.invoices,")"]}),(0,n.jsxs)("button",{type:"button",className:"payments"===j?"active":"",onClick:()=>k("payments"),children:["Payments (",U.payments,")"]}),(0,n.jsx)("button",{type:"button",className:"features"===j?"active":"",onClick:()=>k("features"),children:"Features"})]}),"overview"===j&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("section",{className:"ba-list",children:[(0,n.jsxs)("article",{className:"billing-row",children:[(0,n.jsx)("span",{className:"billing-row-icon",children:"\uD83D\uDCE6"}),(0,n.jsxs)("span",{className:"billing-row-main",children:[(0,n.jsx)("strong",{children:L?.name||"No package assigned"}),(0,n.jsxs)("small",{children:[q," \xb7 ",rg(B?.status,"No arrangement")]}),(0,n.jsx)("em",{children:B?.status==="trial"?`Trial ends: ${ru(B.trialEndsAt||B.currentPeriodEnd)}`:B?.nextBillingDate?`Next billing: ${ru(B.nextBillingDate)}`:"No automatic billing date shown"})]}),(0,n.jsx)("span",{className:"billing-row-side",children:(0,n.jsx)("span",{className:`status-dot-mini ${rx(B?.status)}`})})]}),(0,n.jsxs)("article",{className:"billing-row",children:[(0,n.jsx)("span",{className:"billing-row-icon",children:"\uD83D\uDCB0"}),(0,n.jsxs)("span",{className:"billing-row-main",children:[(0,n.jsx)("strong",{children:"Package pricing"}),(0,n.jsx)("small",{children:rd(L)}),(0,n.jsxs)("em",{children:[L?.maxStudents==null?"No configured student cap":`Up to ${L.maxStudents} students`," \xb7 Quote is not an invoice"]})]})]}),(0,n.jsx)(rv,{icon:"\uD83E\uDDFE",title:"Total invoiced",subtitle:rb(U.totalInvoiced,R),note:`${U.invoices} invoice(s)`,tone:"blue"}),(0,n.jsx)(rv,{icon:"✅",title:"Payments received",subtitle:rb(U.totalPaid,R),note:"Recorded paid transactions",tone:"green"}),(0,n.jsx)(rv,{icon:"⚠️",title:"Outstanding invoices",subtitle:rb(U.outstanding,R),note:`${U.unpaidInvoices} unpaid invoice(s)`,tone:U.outstanding>0?"orange":"green"})]}),(0,n.jsxs)("section",{className:"billing-quote-panel","aria-label":"Instant student quotation",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("strong",{children:"Estimate a package"}),(0,n.jsx)("p",{children:"Enter your school's student count to compare published student-based plans. This does not change your current package."})]}),(0,n.jsxs)("label",{className:"billing-count-input",children:["Students",(0,n.jsx)("input",{type:"number",min:"1",max:"1000000",value:P,onChange:e=>F(Math.max(1,Math.min(1e6,Math.floor(Number(e.target.value)||1))))})]}),(0,n.jsx)("div",{className:"billing-quote-results",children:G.length?G.map(e=>{let a=e.metadata?.pricing,r=a?(0,rl.B)(a,P):null;return(0,n.jsxs)("div",{className:"billing-quote-result",children:[(0,n.jsxs)("span",{children:[e.name,(0,n.jsxs)("small",{children:["Estimated / ",a?.billingPeriod||"term"]})]}),(0,n.jsx)("strong",{children:null==r?"Quote unavailable":rb(r,e.currency||"GHS")})]},e.id||e.code)}):(0,n.jsx)("small",{children:M||"No published student-based plan is available for an instant estimate."})}),(0,n.jsx)("small",{children:"Indicative quote only. The verified invoice or private offer determines what is payable."})]})]}),"packages"===j&&(0,n.jsxs)("section",{className:"ba-list","aria-label":"Published packages",children:[M?(0,n.jsx)("section",{className:"ba-slim-notice",children:(0,n.jsx)("p",{children:M})}):null,A.map(a=>{let r=a.metadata?.pricing,t=r?.mode==="tiered"||r?.mode==="per_student",i=t&&r?(0,rl.B)(r,P):null;return(0,n.jsxs)("article",{className:"billing-row",children:[(0,n.jsx)("span",{className:"billing-row-icon",children:"Free trial"===rc(a)?"\uD83C\uDF81":"Independent licence"===rc(a)?"\uD83D\uDCBB":"☁️"}),(0,n.jsxs)("span",{className:"billing-row-main",children:[(0,n.jsx)("strong",{children:a.name}),(0,n.jsxs)("small",{children:[rc(a)," \xb7 ",t&&null!=i?`${rb(i,a.currency||"GHS")} / ${r?.billingPeriod||"term"} estimated`:rd(a)]}),(0,n.jsx)("em",{children:a.description||"Explore this package's included capabilities and limits."})]}),(0,n.jsx)("span",{className:"billing-row-side",children:(0,n.jsx)("button",{type:"button",className:"billing-package-action",onClick:()=>e.push(`/owner/subscription?planId=${encodeURIComponent(a.id||"")}`),children:"View"})})]},a.id||a.code)}),A.length||M?null:(0,n.jsx)(rN,{text:"No published packages are available."}),(0,n.jsx)("p",{className:"billing-small-note",children:"Private offers, complimentary pilots and unpublished packages do not appear in this catalogue. Viewing a package does not purchase or activate it."})]}),"invoices"===j&&(0,n.jsxs)("section",{className:"ba-list",children:[O.map(e=>(0,n.jsx)(ry,{invoice:e,currency:R},e.id||e.invoiceNumber)),!O.length&&(0,n.jsx)(rN,{text:"No invoices match your search."})]}),"payments"===j&&(0,n.jsxs)("section",{className:"ba-list",children:[_.map(e=>(0,n.jsx)(rw,{payment:e,currency:R},e.id||e.providerReference||e.receiptNumber)),!_.length&&(0,n.jsx)(rN,{text:"No payments match your search."})]}),"features"===j&&(0,n.jsx)("section",{className:"feature-grid",children:H.map(([e,a])=>(0,n.jsxs)("article",{className:"feature-row",children:[(0,n.jsx)("span",{className:!0===a?"on":"off",children:!0===a?"✓":!1===a?"\xd7":"\xb7"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("strong",{children:e}),(0,n.jsx)("small",{children:!0===a?"Included":!1===a?"Not included":"Not specified in package details"})]})]},String(e)))}),C&&(0,n.jsx)(rj,{viewMode:j,setViewMode:e=>{k(e),I(!1)},summary:U,currency:R,planName:L?.name||"No active plan",subscriptionStatus:rg(B?.status,"not set"),billingCycle:q,nextBillingDate:B?.status==="trial"?ru(B?.trialEndsAt):ru(B?.nextBillingDate),onRefresh:async()=>{I(!1),await T()},onClose:()=>I(!1)})]})}function rv({icon:e,title:a,subtitle:r,note:t,tone:i}){return(0,n.jsxs)("article",{className:"billing-row",children:[(0,n.jsx)("span",{className:"billing-row-icon",children:e}),(0,n.jsxs)("span",{className:"billing-row-main",children:[(0,n.jsx)("strong",{children:a}),(0,n.jsx)("small",{children:r}),(0,n.jsx)("em",{children:t})]}),(0,n.jsx)("span",{className:"billing-row-side",children:(0,n.jsx)("span",{className:`status-dot-mini ${i}`})})]})}function ry({invoice:e,currency:a}){return(0,n.jsxs)("article",{className:"billing-row",children:[(0,n.jsx)("span",{className:"billing-row-icon",children:"\uD83E\uDDFE"}),(0,n.jsxs)("span",{className:"billing-row-main",children:[(0,n.jsx)("strong",{children:e.invoiceNumber||"Invoice"}),(0,n.jsxs)("small",{children:[rb(e.total,e.currency||a)," \xb7 ",rg(e.status,"draft")]}),(0,n.jsxs)("em",{children:["Issued ",ru(e.issueDate||e.createdAt)," \xb7 Due ",ru(e.dueDate)]})]}),(0,n.jsxs)("span",{className:"billing-row-side",children:[(0,n.jsx)("span",{className:`status-dot-mini ${rx(e.status)}`}),(0,n.jsx)("i",{children:rb(e.balance??0,e.currency||a)})]})]})}function rw({payment:e,currency:a}){return(0,n.jsxs)("article",{className:"billing-row",children:[(0,n.jsx)("span",{className:"billing-row-icon",children:"\uD83D\uDCB0"}),(0,n.jsxs)("span",{className:"billing-row-main",children:[(0,n.jsx)("strong",{children:e.receiptNumber||e.providerReference||"Payment"}),(0,n.jsxs)("small",{children:[rb(e.amount,e.currency||a)," \xb7 ",rg(e.status,"pending")]}),(0,n.jsxs)("em",{children:[e.provider||"manual"," \xb7 ",e.method||"method not set"," \xb7 ",ru(e.paidAt||e.createdAt)]})]}),(0,n.jsx)("span",{className:"billing-row-side",children:(0,n.jsx)("span",{className:`status-dot-mini ${rx(e.status)}`})})]})}function rj({viewMode:e,setViewMode:a,summary:r,currency:t,planName:i,subscriptionStatus:s,billingCycle:o,nextBillingDate:l,onRefresh:c,onClose:d}){let p=[{key:"overview",icon:"◔",label:"Overview",note:"Package, quotes, invoices and balances"},{key:"packages",icon:"\uD83D\uDCE6",label:"Packages",note:"Compare published arrangements"},{key:"invoices",icon:"\uD83E\uDDFE",label:"Invoices",note:`${r.invoices} invoice record(s)`},{key:"payments",icon:"\uD83D\uDCB0",label:"Payments",note:`${r.payments} payment record(s)`},{key:"features",icon:"✓",label:"Features",note:"Enabled plan modules"}];return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Billing"}),(0,n.jsx)("p",{children:"Compact billing summary and view switcher."})]}),(0,n.jsx)("button",{type:"button",onClick:d,"aria-label":"Close billing menu",children:"✕"})]}),(0,n.jsxs)("div",{className:"billing-info-list",children:[(0,n.jsx)(rk,{label:"Plan",value:i}),(0,n.jsx)(rk,{label:"Status",value:s}),(0,n.jsx)(rk,{label:"Arrangement",value:o}),(0,n.jsx)(rk,{label:"Next billing / trial expiry",value:l}),(0,n.jsx)(rk,{label:"Invoiced",value:rb(r.totalInvoiced,t)}),(0,n.jsx)(rk,{label:"Paid",value:rb(r.totalPaid,t)}),(0,n.jsx)(rk,{label:"Outstanding",value:rb(r.outstanding,t)})]}),(0,n.jsxs)("div",{className:"ba-menu-list",children:[p.map(r=>(0,n.jsxs)("button",{type:"button",className:e===r.key?"active":"",onClick:()=>a(r.key),children:[(0,n.jsx)("span",{children:r.icon}),(0,n.jsx)("b",{children:r.label}),(0,n.jsx)("small",{children:r.note})]},r.key)),(0,n.jsxs)("button",{type:"button",onClick:c,children:[(0,n.jsx)("span",{children:"↻"}),(0,n.jsx)("b",{children:"Refresh"}),(0,n.jsx)("small",{children:"Reload subscription, invoices and payments"})]})]})]})})}function rk({label:e,value:a}){return(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{children:e}),(0,n.jsx)("strong",{children:a})]})}function rN({text:e}){return(0,n.jsxs)("section",{className:"ba-empty",children:[(0,n.jsx)("div",{className:"ba-empty-icon",children:"\uD83D\uDCB3"}),(0,n.jsx)("h3",{children:"No records found"}),(0,n.jsx)("p",{children:e})]})}let rS=`
@keyframes spin { to { transform: rotate(360deg); } }

.ba-page {
  --ease: cubic-bezier(.2,.8,.2,1);
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: calc(8px * var(--local-density-scale, 1));
  padding-bottom: max(40px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--ba-primary) 9%, transparent), transparent 30rem),
    var(--bg, #f7f8fb);
  color: var(--text, #111827);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--font-size, 14px);
  overflow-x: hidden;
}

.ba-page *,
.ba-page *::before,
.ba-page *::after {
  box-sizing: border-box;
  min-width: 0;
}

.ba-page button,
.ba-page input,
.ba-page select,
.ba-page textarea {
  font: inherit;
  max-width: 100%;
}

.ba-page button {
  -webkit-tap-highlight-color: transparent;
}

.ba-state,
.ba-search-card,
.ba-slim-notice,
.billing-row,
.feature-row,
.ba-empty,
.ba-sheet {
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 12px 28px rgba(15,23,42,.045);
}

.ba-state {
  min-height: min(420px, calc(100dvh - 32px));
  width: min(520px, 100%);
  margin: 0 auto;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  padding: 22px;
  border-radius: 28px;
  text-align: center;
}

.ba-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--ba-primary) 18%, transparent);
  border-top-color: var(--ba-primary);
  animation: spin .8s linear infinite;
}

.ba-state h2 {
  margin: 0;
  font-size: 22px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.ba-state p {
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.6;
}

.ba-search-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto auto;
  gap: 8px;
  align-items: center;
  padding: 8px;
  border-radius: 24px;
}

.ba-search {
  min-width: 0;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 11px;
  border-radius: 18px;
  background: color-mix(in srgb, var(--muted,#64748b) 7%, transparent);
}

.ba-search span {
  color: var(--muted,#64748b);
  font-size: 17px;
  font-weight: 1000;
}

.ba-search input {
  width: 100%;
  min-height: 42px;
  border: 0;
  padding: 0;
  border-radius: 0;
  background: transparent;
  color: var(--text,#111827);
  outline: none;
  box-shadow: none;
  font-size: 14px;
  font-weight: 750;
}

.ba-add-inline,
.ba-filter-button,
.ba-icon-button {
  min-width: 42px;
  height: 42px;
  border: 1px solid var(--border, rgba(0,0,0,.10));
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: var(--card-bg, var(--surface,#fff));
  color: var(--text,#111827);
  font-size: 14px;
  font-weight: 1000;
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(15,23,42,.045);
}

.ba-add-inline {
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
  font-size: 18px;
}

.ba-filter-button {
  color: var(--ba-primary);
  background: color-mix(in srgb, var(--ba-primary) 8%, var(--card-bg,#fff));
}

.ba-icon-button {
  width: 42px;
  font-size: 18px;
}

.ba-slim-notice {
  display: grid;
  grid-template-columns: auto minmax(0,1fr);
  align-items: center;
  gap: 9px;
  margin-top: 8px;
  border-radius: 17px;
  padding: 8px 10px;
  color: #92400e;
  background: rgba(245,158,11,.1);
  border-color: rgba(245,158,11,.24);
}

.ba-slim-notice p {
  margin: 0;
  font-size: 11px;
  line-height: 1.35;
  font-weight: 850;
}

.ba-filter-chips {
  display: flex;
  gap: 7px;
  overflow-x: auto;
  padding: 8px 1px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.ba-filter-chips::-webkit-scrollbar {
  display: none;
}

.ba-filter-chips button {
  flex: 0 0 auto;
  min-height: 31px;
  border: 0;
  border-radius: 999px;
  padding: 0 10px;
  background: color-mix(in srgb, var(--ba-primary) 11%, transparent);
  color: var(--ba-primary);
  font-size: 11px;
  font-weight: 950;
  white-space: nowrap;
  cursor: pointer;
}

.ba-filter-chips button.active {
  background: var(--ba-primary);
  color: #fff;
}

.billing-compact-grid,
.ba-list,
.feature-grid {
  display: grid;
  gap: 7px;
  margin-top: 10px;
}

.billing-row {
  width: 100%;
  display: grid;
  grid-template-columns: auto minmax(0,1fr) auto;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 18px;
  color: var(--text,#111827);
}

.billing-row-icon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--ba-primary), rgba(15,23,42,.9));
  color: #fff;
  font-size: 13px;
  font-weight: 1000;
  box-shadow: 0 8px 18px rgba(15,23,42,.10);
}

.billing-row-main {
  display: grid;
  gap: 1px;
  min-width: 0;
}

.billing-row-main strong,
.billing-row-main small,
.billing-row-main em {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.billing-row-main strong {
  font-size: 13px;
  font-weight: 1000;
  color: var(--text,#111827);
  line-height: 1.15;
}

.billing-row-main small,
.billing-row-main em {
  color: var(--muted,#64748b);
  font-size: 10.5px;
  font-style: normal;
  font-weight: 800;
  line-height: 1.22;
}

.billing-row-side {
  display: flex;
  align-items: center;
  gap: 6px;
}

.billing-row-side i {
  color: var(--muted,#64748b);
  font-style: normal;
  font-size: 10px;
  font-weight: 950;
  max-width: 76px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.status-dot-mini {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--muted,#64748b);
  box-shadow: 0 0 0 3px color-mix(in srgb,var(--muted,#64748b) 12%,transparent);
}

.status-dot-mini.green{background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.13)}
.status-dot-mini.red{background:#ef4444;box-shadow:0 0 0 3px rgba(239,68,68,.13)}
.status-dot-mini.orange{background:#f59e0b;box-shadow:0 0 0 3px rgba(245,158,11,.15)}
.status-dot-mini.blue{background:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.13)}
.status-dot-mini.gray{background:var(--muted,#64748b)}

.feature-grid {
  grid-template-columns: repeat(2, minmax(0,1fr));
}

.feature-row {
  display: grid;
  grid-template-columns: auto minmax(0,1fr);
  align-items: center;
  gap: 8px;
  padding: 9px;
  border-radius: 18px;
}

.feature-row > span {
  width: 30px;
  height: 30px;
  border-radius: 13px;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 1000;
}

.feature-row > span.on {
  background: rgba(34,197,94,.12);
  color: #16a34a;
}

.feature-row > span.off {
  background: rgba(100,116,139,.12);
  color: var(--muted,#64748b);
}

.feature-row strong,
.feature-row small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.feature-row strong {
  font-size: 12px;
  font-weight: 1000;
}

.feature-row small {
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 800;
}

.ba-empty {
  display: grid;
  place-items: center;
  align-content: center;
  gap: 8px;
  min-height: 180px;
  padding: 18px;
  border-radius: 24px;
  text-align: center;
  border-style: dashed;
}

.ba-empty-icon {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 20px;
  background: color-mix(in srgb, var(--ba-primary) 12%, var(--surface,#fff));
  font-size: 24px;
}

.ba-empty h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
}

.ba-empty p {
  margin: 0;
  color: var(--muted,#64748b);
  font-size: 12px;
  line-height: 1.5;
}

.ba-sheet-backdrop {
  position: fixed;
  inset: 0;
  z-index: 80;
  background: rgba(2,6,23,.46);
  display: grid;
  align-items: end;
  padding: 10px;
}

.ba-sheet {
  width: min(540px, 100%);
  margin: 0 auto;
  border-radius: 28px 28px 20px 20px;
  padding: 14px;
  background: var(--card-bg, var(--surface,#fff));
  color: var(--text,#111827);
}

.ba-sheet.small {
  width: min(440px, 100%);
}

.ba-sheet-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}

.ba-sheet-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.ba-sheet-head p {
  margin: 3px 0 0;
  color: var(--muted,#64748b);
  font-size: 12px;
  font-weight: 750;
  line-height: 1.45;
}

.ba-sheet-head button {
  width: 38px;
  height: 38px;
  border: 1px solid var(--border, rgba(0,0,0,.10));
  border-radius: 999px;
  background: var(--card-bg, var(--surface,#fff));
  color: var(--text,#111827);
  font-weight: 1000;
  cursor: pointer;
}

.billing-info-list {
  display: grid;
  gap: 7px;
  margin-bottom: 10px;
}

.billing-info-list div {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid var(--border, rgba(0,0,0,.10));
  border-radius: 15px;
  padding: 9px 10px;
  background: color-mix(in srgb, var(--muted,#64748b) 5%, transparent);
}

.billing-info-list span {
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 900;
}

.billing-info-list strong {
  color: var(--text,#111827);
  font-size: 11px;
  font-weight: 1000;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ba-menu-list {
  display: grid;
  gap: 8px;
  margin-top: 10px;
}

.ba-menu-list button {
  width: 100%;
  display: grid;
  grid-template-columns: auto minmax(0,1fr);
  grid-template-rows: auto auto;
  column-gap: 10px;
  text-align: left;
  border: 1px solid var(--border, rgba(0,0,0,.10));
  border-radius: 18px;
  padding: 10px;
  background: color-mix(in srgb, var(--muted,#64748b) 5%, transparent);
  color: var(--text,#111827);
  cursor: pointer;
}

.ba-menu-list button.active {
  border-color: var(--ba-primary);
  background: color-mix(in srgb, var(--ba-primary) 11%, transparent);
}

.ba-menu-list span {
  grid-row: 1 / span 2;
  width: 32px;
  height: 32px;
  border-radius: 13px;
  display: grid;
  place-items: center;
  background: color-mix(in srgb, var(--ba-primary) 12%, transparent);
  color: var(--ba-primary);
  font-weight: 1000;
}

.ba-menu-list b {
  font-size: 13px;
  font-weight: 1000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ba-menu-list small {
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 800;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (min-width: 680px) {
  .ba-page {
    padding: calc(12px * var(--local-density-scale, 1));
  }

  .billing-compact-grid,
  .feature-grid {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }

  .billing-row {
    min-height: 68px;
  }
}

@media (min-width: 1040px) {
  .billing-compact-grid {
    grid-template-columns: repeat(3, minmax(0,1fr));
  }

  .feature-grid {
    grid-template-columns: repeat(3, minmax(0,1fr));
  }
}

@media (min-width: 1280px) {
  .billing-compact-grid,
  .feature-grid {
    grid-template-columns: repeat(4, minmax(0,1fr));
  }

  .billing-row {
    min-height: 64px;
  }
}

@media (max-width: 520px) {
  .ba-search-card {
    gap: 6px;
    padding: 7px;
    border-radius: 22px;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .billing-row-side i {
    display: none;
  }
}

.billing-quote-panel { margin-top:12px; background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.1));border-radius:20px;padding:16px;display:grid;grid-template-columns:minmax(0,1fr) minmax(130px,190px);gap:12px;align-items:center;}
.billing-quote-panel p { margin:5px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5; }
.billing-quote-panel > small { grid-column:1 / -1;color:var(--muted,#64748b);font-size:11px; }
.billing-count-input {display:grid;gap:5px;font-size:12px;font-weight:700;}
.billing-count-input input {width:100%;background:var(--bg,#f7f8fb);border:1px solid var(--border,#ddd);padding:11px;border-radius:12px;color:var(--text,#111827);}
.billing-quote-results {grid-column:1 / -1;display:grid;gap:8px;}
.billing-quote-result {display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px;border-radius:12px;background:color-mix(in srgb,var(--ba-primary) 6%,transparent);}
.billing-quote-result span {font-weight:750;font-size:13px;}
.billing-quote-result small {display:block;font-weight:400;color:var(--muted,#64748b);margin-top:2px;}
.billing-quote-result strong {font-size:20px;white-space:nowrap;}
.billing-package-action {border-radius:10px;border:1px solid var(--border,#ddd);padding:8px 12px;background:var(--card-bg,#fff);font-weight:700;cursor:pointer;}
.billing-small-note {font-size:12px;color:var(--muted,#64748b);padding:8px;line-height:1.5;}
@media(max-width:450px){.billing-quote-panel{grid-template-columns:minmax(0,1fr) 120px;padding:12px;}.billing-quote-result strong{font-size:17px;}}
`;var rC=r(97831);let rI={invoiceNumber:"",currency:"GHS",subtotal:"",discount:"0",tax:"0",total:"",status:"draft",dueDate:"",note:""};function rA(e,a="GHS"){return new Intl.NumberFormat("en-GH",{style:"currency",currency:a||"GHS",maximumFractionDigits:0}).format(Number(e||0))}function rz(e){if(!e)return"Not set";let a=new Date(e);return Number.isNaN(a.getTime())?"Not set":a.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"2-digit"})}function rM(e){return String(e||"draft").toLowerCase()}function r$(e){let a=rM(e);return"paid"===a?"green":["void","cancelled"].includes(a)?"red":["overdue","part_paid"].includes(a)?"orange":"issued"===a?"blue":"draft"===a?"gray":"purple"}function rP(e){return e.balance??Math.max(Number(e.total||0)-Number(e.amountPaid||0),0)}function rF(...e){let a=u.db;for(let r of e)if(a[r])return a[r];return null}async function rT(...e){let a=rF(...e);return a?.toArray?a.toArray():[]}async function rR(e){let a=rF("invoices");if(a?.put){for(let r of e)if(r?.id)try{await a.put(r)}catch{}}}function rD(){let e=(0,c.useRouter)(),{accountId:a,authenticated:r,loading:t}=(0,d.F)(),{settings:i,loading:o}=(0,p.t)(),l=i?.primaryColor||"var(--primary-color, #2563eb)",[b,u]=(0,s.useState)(!0),[m,h]=(0,s.useState)(!1),[x,g]=(0,s.useState)([]),[f,v]=(0,s.useState)("cards"),[y,w]=(0,s.useState)("all"),[j,k]=(0,s.useState)(""),[N,S]=(0,s.useState)(!1),[C,I]=(0,s.useState)(rI),[A,z]=(0,s.useState)(""),[M,$]=(0,s.useState)(""),[P,F]=(0,s.useState)(!1),[T,R]=(0,s.useState)(!1);async function D(){if(!r||!a){g([]),u(!1);return}try{u(!0),$("");try{var e;let a=(e=await (0,aj.AT)("/billing/invoices"),Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.items)?e.items:Array.isArray(e?.invoices)?e.invoices:Array.isArray(e?.rows)?e.rows:Array.isArray(e?.results)?e.results:[]);g(a),await rR(a)}catch{let e=await rT("invoices");g(e.filter(e=>!e.accountId||e.accountId===a)),$("Live billing server was not available, so this page is showing the latest invoice data saved on this device.")}}finally{u(!1)}}(0,s.useEffect)(()=>{!t&&(r&&a||e.replace("/login"))},[t,r,a,e]),(0,s.useEffect)(()=>{D()},[r,a]);let E=(0,s.useMemo)(()=>{let e=j.trim().toLowerCase();return x.filter(a=>{let r=rM(a.status);return("all"===y||r===y)&&(!e||`${a.invoiceNumber||""} ${a.status||""} ${a.currency||""} ${a.total||""} ${a.note||""}`.toLowerCase().includes(e))})},[x,j,y]),L=(0,s.useMemo)(()=>{let e=x.reduce((e,a)=>e+Number(a.total||0),0),a=x.reduce((e,a)=>e+Number(a.amountPaid||0),0),r=x.reduce((e,a)=>e+rP(a),0),t=x[0]?.currency||"GHS";return{invoices:x.length,total:e,paid:a,balance:r,currency:t,paidCount:x.filter(e=>"paid"===rM(e.status)).length,unpaidCount:x.filter(e=>!["paid","void","cancelled"].includes(rM(e.status))).length,overdueCount:x.filter(e=>"overdue"===rM(e.status)).length}},[x]),B=(0,s.useMemo)(()=>{let e=new Map;for(let a of x){let r=rM(a.status);e.set(r,(e.get(r)||0)+1)}return Array.from(e.entries()).map(([e,a])=>({name:e,count:a})).sort((e,a)=>a.count-e.count)},[x]),U=+("all"!==y);function O(){I({...rI,invoiceNumber:`INV-${Date.now()}`}),z(""),S(!0)}function _(e){let a="paid"===rM(e.status);I({id:e.id,invoiceNumber:e.invoiceNumber||"",currency:e.currency||"GHS",subtotal:String(e.subtotal||0),discount:String(e.discount||0),tax:String(e.tax||0),total:String(e.total||0),status:a?"issued":rM(e.status)||"draft",dueDate:e.dueDate?String(e.dueDate).slice(0,10):"",note:e.note||""}),z(a?"This invoice is already paid. You can review it, but do not manually change paid status here.":""),S(!0)}async function H(){let e=C.invoiceNumber.trim()?C.subtotal.trim()?C.total.trim()?0>Number(C.total)?"Total cannot be negative.":"":"Total is required.":"Subtotal is required.":"Invoice number is required.";if(e)return void z(e);try{let e,a,r,t;h(!0);let i=(e=Number(C.subtotal||0),a=Number(C.discount||0),r=Number(C.tax||0),t=Number(C.total||e-a+r),{invoiceNumber:C.invoiceNumber.trim(),currency:C.currency.trim()||"GHS",subtotal:e,discount:a,tax:r,total:t,status:C.status,dueDate:C.dueDate||void 0,note:C.note.trim()||void 0}),n=C.id?await (0,aj.AT)(`/billing/invoices/${encodeURIComponent(C.id)}`,{method:"PATCH",body:JSON.stringify(i)}):await (0,aj.AT)("/billing/invoices",{method:"POST",body:JSON.stringify(i)});await rR([n]),S(!1),await D()}catch(e){z(e?.message||"Invoice could not be saved.")}finally{h(!1)}}return t||o||b?(0,n.jsxs)("main",{className:"ba-page invoices-page",style:{"--ba-primary":l},children:[(0,n.jsx)("style",{children:rH}),(0,n.jsxs)("section",{className:"ba-state",children:[(0,n.jsx)("div",{className:"ba-spinner"}),(0,n.jsx)("h2",{children:"Opening invoices..."}),(0,n.jsx)("p",{children:"Loading owner invoices and billing balances."})]})]}):(0,n.jsxs)("main",{className:"ba-page invoices-page",style:{"--ba-primary":l},children:[(0,n.jsx)("style",{children:rH}),(0,n.jsxs)("section",{className:"ba-search-card","aria-label":"Invoices search and actions",children:[(0,n.jsxs)("label",{className:"ba-search",children:[(0,n.jsx)("span",{children:"⌕"}),(0,n.jsx)("input",{placeholder:"Search invoices...",value:j,onChange:e=>k(e.target.value),"aria-label":"Search invoices"})]}),(0,n.jsx)("button",{type:"button",className:"ba-add-inline",onClick:O,"aria-label":"Create invoice",title:"New invoice",children:"+"}),(0,n.jsxs)("button",{type:"button",className:`ba-filter-button ${U?"active":""}`,onClick:()=>F(!0),"aria-label":"Open invoice filters",title:"Filters",children:["☷",U?(0,n.jsx)("b",{children:U}):null]}),(0,n.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>R(!0),"aria-label":"More options",children:"⋯"})]}),M?(0,n.jsxs)("section",{className:"ba-slim-notice",children:[(0,n.jsx)("span",{className:"status-dot-mini orange"}),(0,n.jsx)("p",{children:M})]}):null,U>0&&(0,n.jsx)("section",{className:"ba-filter-chips","aria-label":"Active invoice filters",children:(0,n.jsxs)("button",{type:"button",onClick:()=>w("all"),children:["Status: ",y," \xd7"]})}),"analytics"===f&&(0,n.jsx)("section",{className:"analytics-grid",children:(0,n.jsx)(r_,{title:"Invoice Status Breakdown",items:B,total:L.invoices})}),"table"===f&&(0,n.jsx)("section",{className:"ba-table-card",children:(0,n.jsxs)("div",{className:"ba-table-scroll",children:[(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsxs)("th",{children:["Invoices (",E.length,")"]}),(0,n.jsx)("th",{children:"Total"}),(0,n.jsx)("th",{children:"Paid"}),(0,n.jsx)("th",{children:"Balance"}),(0,n.jsx)("th",{children:"Status"}),(0,n.jsx)("th",{children:"Due"}),(0,n.jsx)("th",{children:"Action"})]})}),(0,n.jsx)("tbody",{children:E.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{children:[(0,n.jsx)("strong",{children:e.invoiceNumber||"Invoice"}),(0,n.jsx)("span",{children:e.note||"No note"})]}),(0,n.jsx)("td",{children:rA(e.total,e.currency)}),(0,n.jsx)("td",{children:rA(e.amountPaid,e.currency)}),(0,n.jsx)("td",{children:rA(rP(e),e.currency)}),(0,n.jsx)("td",{children:(0,n.jsx)(rU,{tone:r$(e.status),children:e.status||"draft"})}),(0,n.jsx)("td",{children:rz(e.dueDate)}),(0,n.jsx)("td",{children:(0,n.jsx)("button",{className:"table-action",onClick:()=>_(e),children:"Review"})})]},e.id||e.invoiceNumber))})]}),!E.length&&(0,n.jsx)("div",{className:"ba-empty-table",children:"No invoice matches the selected filters."})]})}),"cards"===f&&(0,n.jsxs)("section",{className:"ba-list",children:[E.map(e=>{let a=rP(e);return(0,n.jsxs)("button",{type:"button",className:"invoice-row",onClick:()=>_(e),children:[(0,n.jsx)("span",{className:"invoice-avatar",children:"\uD83E\uDDFE"}),(0,n.jsxs)("span",{className:"invoice-main",children:[(0,n.jsx)("strong",{children:e.invoiceNumber||"Invoice"}),(0,n.jsxs)("small",{children:[rA(e.total,e.currency)," \xb7 Paid ",rA(e.amountPaid,e.currency)]}),(0,n.jsxs)("em",{children:["Balance ",rA(a,e.currency)," \xb7 Due ",rz(e.dueDate)]})]}),(0,n.jsxs)("span",{className:"invoice-side",children:[(0,n.jsx)("span",{className:`status-dot-mini ${r$(e.status)}`}),(0,n.jsx)("i",{children:"⋯"})]})]},e.id||e.invoiceNumber)}),!E.length&&(0,n.jsx)(rO,{text:"No invoice matches the selected filters."})]}),P&&(0,n.jsx)(rE,{statusFilter:y,setStatusFilter:w,clearFilters:()=>w("all"),onClose:()=>F(!1)}),T&&(0,n.jsx)(rL,{viewMode:f,setViewMode:e=>{v(e),R(!1)},summary:L,filteredCount:E.length,onRefresh:async()=>{R(!1),await D()},onCreate:()=>{R(!1),O()},onClose:()=>R(!1)}),N&&(0,n.jsx)(rB,{form:C,message:A,saving:m,updateForm:function(e,a){I(r=>{let t={...r,[e]:a};if(["subtotal","discount","tax"].includes(String(e))){let r=Number("subtotal"===e?a:t.subtotal||0),i=Number("discount"===e?a:t.discount||0),n=Number("tax"===e?a:t.tax||0);t.total=String(Math.max(r-i+n,0))}return t}),z("")},saveInvoice:H,onClose:()=>S(!1)})]})}function rE({statusFilter:e,setStatusFilter:a,clearFilters:r,onClose:t}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Filters"}),(0,n.jsx)("p",{children:"Filter invoices by current billing status."})]}),(0,n.jsx)("button",{type:"button",onClick:t,"aria-label":"Close filters",children:"✕"})]}),(0,n.jsx)("div",{className:"ba-form compact",children:(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Status"}),(0,n.jsxs)("select",{value:e,onChange:e=>a(e.target.value),children:[(0,n.jsx)("option",{value:"all",children:"All invoices"}),(0,n.jsx)("option",{value:"draft",children:"Draft"}),(0,n.jsx)("option",{value:"issued",children:"Issued"}),(0,n.jsx)("option",{value:"part_paid",children:"Part paid"}),(0,n.jsx)("option",{value:"paid",children:"Paid"}),(0,n.jsx)("option",{value:"overdue",children:"Overdue"}),(0,n.jsx)("option",{value:"void",children:"Void"})]})]})}),(0,n.jsxs)("div",{className:"ba-sheet-actions",children:[(0,n.jsx)("button",{type:"button",onClick:r,children:"Clear"}),(0,n.jsx)("button",{type:"button",className:"primary",onClick:t,children:"Apply"})]})]})})}function rL({viewMode:e,setViewMode:a,summary:r,filteredCount:t,onRefresh:i,onCreate:s,onClose:o}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Invoices"}),(0,n.jsxs)("p",{children:[t," of ",r.invoices," invoice record(s) shown."]})]}),(0,n.jsx)("button",{type:"button",onClick:o,"aria-label":"Close menu",children:"✕"})]}),(0,n.jsxs)("div",{className:"invoice-insights",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:rA(r.total,r.currency)}),"Total"]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:rA(r.paid,r.currency)}),"Paid"]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:rA(r.balance,r.currency)}),"Balance"]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:r.overdueCount}),"Overdue"]})]}),(0,n.jsxs)("div",{className:"ba-menu-list",children:[(0,n.jsxs)("button",{type:"button",className:"cards"===e?"active":"",onClick:()=>a("cards"),children:[(0,n.jsx)("span",{children:"☰"}),(0,n.jsx)("b",{children:"List view"}),(0,n.jsx)("small",{children:"Compact invoice rows"})]}),(0,n.jsxs)("button",{type:"button",className:"table"===e?"active":"",onClick:()=>a("table"),children:[(0,n.jsx)("span",{children:"☷"}),(0,n.jsx)("b",{children:"Table view"}),(0,n.jsx)("small",{children:"Dense laptop invoice records"})]}),(0,n.jsxs)("button",{type:"button",className:"analytics"===e?"active":"",onClick:()=>a("analytics"),children:[(0,n.jsx)("span",{children:"◔"}),(0,n.jsx)("b",{children:"Analytics"}),(0,n.jsx)("small",{children:"Status breakdown"})]}),(0,n.jsxs)("button",{type:"button",onClick:s,children:[(0,n.jsx)("span",{children:"+"}),(0,n.jsx)("b",{children:"New invoice"}),(0,n.jsx)("small",{children:"Create a billing-owned invoice record"})]}),(0,n.jsxs)("button",{type:"button",onClick:i,children:[(0,n.jsx)("span",{children:"↻"}),(0,n.jsx)("b",{children:"Refresh"}),(0,n.jsx)("small",{children:"Reload invoice data"})]})]})]})})}function rB({form:e,message:a,saving:r,updateForm:t,saveInvoice:i,onClose:s}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop detail-layer",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet detail-sheet",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:e.id?"Review Invoice":"New Invoice"}),(0,n.jsx)("p",{children:"Billing-owned invoice record."})]}),(0,n.jsx)("button",{type:"button",onClick:s,"aria-label":"Close invoice editor",children:"✕"})]}),a?(0,n.jsxs)("section",{className:"ba-slim-notice error",children:[(0,n.jsx)("span",{className:"status-dot-mini red"}),(0,n.jsx)("p",{children:a})]}):null,(0,n.jsxs)("section",{className:"safety-note",children:[(0,n.jsx)("strong",{children:"Important payment rule"}),(0,n.jsx)("span",{children:"Do not manually mark an invoice as paid here. Paid status should come from confirmed payment records."})]}),(0,n.jsxs)("div",{className:"ba-form compact",children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Invoice Number"}),(0,n.jsx)("input",{value:e.invoiceNumber,onChange:e=>t("invoiceNumber",e.target.value)})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Currency"}),(0,n.jsx)("input",{value:e.currency,onChange:e=>t("currency",e.target.value)})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Subtotal"}),(0,n.jsx)("input",{type:"number",value:e.subtotal,onChange:e=>t("subtotal",e.target.value)})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Discount"}),(0,n.jsx)("input",{type:"number",value:e.discount,onChange:e=>t("discount",e.target.value)})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Tax"}),(0,n.jsx)("input",{type:"number",value:e.tax,onChange:e=>t("tax",e.target.value)})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Total"}),(0,n.jsx)("input",{type:"number",value:e.total,onChange:e=>t("total",e.target.value)})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Status"}),(0,n.jsxs)("select",{value:e.status,onChange:e=>t("status",e.target.value),children:[(0,n.jsx)("option",{value:"draft",children:"Draft"}),(0,n.jsx)("option",{value:"issued",children:"Issued"}),(0,n.jsx)("option",{value:"overdue",children:"Overdue"}),(0,n.jsx)("option",{value:"void",children:"Void"})]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Due Date"}),(0,n.jsx)("input",{type:"date",value:e.dueDate,onChange:e=>t("dueDate",e.target.value)})]}),(0,n.jsxs)("label",{className:"wide",children:[(0,n.jsx)("span",{children:"Note"}),(0,n.jsx)("textarea",{value:e.note,onChange:e=>t("note",e.target.value)})]})]}),(0,n.jsxs)("div",{className:"ba-sheet-actions sticky",children:[(0,n.jsx)("button",{type:"button",onClick:s,children:"Cancel"}),(0,n.jsx)("button",{type:"button",className:"primary",disabled:r,onClick:i,children:r?"Saving...":"Save Invoice"})]})]})})}function rU({children:e,tone:a="gray"}){return(0,n.jsx)("span",{className:`ba-chip ${a}`,children:e})}function rO({text:e}){return(0,n.jsxs)("section",{className:"ba-empty",children:[(0,n.jsx)("div",{className:"ba-empty-icon",children:"\uD83E\uDDFE"}),(0,n.jsx)("h3",{children:"No records found"}),(0,n.jsx)("p",{children:e})]})}function r_({title:e,items:a,total:r}){return(0,n.jsxs)("section",{className:"analytics-card",children:[(0,n.jsxs)("div",{className:"section-mini-head",children:[(0,n.jsx)("strong",{children:e}),(0,n.jsxs)("small",{children:[a.length," group(s)"]})]}),(0,n.jsxs)("div",{className:"breakdown-list",children:[a.map(e=>(0,n.jsxs)("article",{className:"breakdown-row",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("strong",{children:e.name}),(0,n.jsxs)("small",{children:[e.count," invoice(s)"]})]}),(0,n.jsx)("span",{children:e.count}),(0,n.jsx)("div",{className:"bar-track",children:(0,n.jsx)("i",{style:{width:`${r?Math.round(e.count/r*100):0}%`}})})]},e.name)),!a.length&&(0,n.jsx)(rO,{text:`No ${e.toLowerCase()} available.`})]})]})}let rH=`
@keyframes spin{to{transform:rotate(360deg)}}

.ba-page{
  --ease:cubic-bezier(.2,.8,.2,1);
  min-height:100dvh;
  width:100%;
  max-width:100%;
  min-width:0;
  padding:calc(8px * var(--local-density-scale,1));
  padding-bottom:max(40px,env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left,color-mix(in srgb,var(--ba-primary) 9%,transparent),transparent 30rem),
    var(--bg,#f7f8fb);
  color:var(--text,#111827);
  font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);
  font-size:var(--font-size,14px);
  overflow-x:hidden;
}

.ba-page *,
.ba-page *::before,
.ba-page *::after{
  box-sizing:border-box;
  min-width:0;
}

.ba-page button,
.ba-page input,
.ba-page select,
.ba-page textarea{
  font:inherit;
  max-width:100%;
}

.ba-page button{
  -webkit-tap-highlight-color:transparent;
}

.ba-page input,
.ba-page select,
.ba-page textarea{
  width:100%;
  min-height:44px;
  border:1px solid var(--input-border,var(--border,rgba(0,0,0,.10)));
  border-radius:16px;
  padding:0 12px;
  background:var(--input-bg,var(--surface,#fff));
  color:var(--input-text,var(--text,#111827));
  outline:none;
  font-weight:750;
}

.ba-page textarea{
  min-height:86px;
  resize:vertical;
  padding-top:10px;
}

.ba-state,
.ba-search-card,
.ba-slim-notice,
.invoice-row,
.ba-table-card,
.analytics-card,
.breakdown-row,
.ba-empty,
.ba-sheet,
.safety-note{
  background:var(--card-bg,var(--surface,#fff));
  border:1px solid var(--border,rgba(0,0,0,.10));
  box-shadow:0 12px 28px rgba(15,23,42,.045);
}

.ba-state{
  min-height:min(420px,calc(100dvh - 32px));
  width:min(520px,100%);
  margin:0 auto;
  display:grid;
  place-items:center;
  align-content:center;
  gap:10px;
  padding:22px;
  border-radius:28px;
  text-align:center;
}

.ba-spinner{
  width:38px;
  height:38px;
  border-radius:999px;
  border:4px solid color-mix(in srgb,var(--ba-primary) 18%,transparent);
  border-top-color:var(--ba-primary);
  animation:spin .8s linear infinite;
}

.ba-state h2{
  margin:0;
  font-size:22px;
  font-weight:1000;
  letter-spacing:-.04em;
}

.ba-state p{
  margin:0;
  color:var(--muted,#64748b);
  font-size:13px;
  line-height:1.6;
}

.ba-search-card{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto auto auto;
  gap:8px;
  align-items:center;
  padding:8px;
  border-radius:24px;
}

.ba-search{
  min-width:0;
  display:grid;
  grid-template-columns:auto minmax(0,1fr);
  align-items:center;
  gap:8px;
  min-height:44px;
  padding:0 11px;
  border-radius:18px;
  background:color-mix(in srgb,var(--muted,#64748b) 7%,transparent);
}

.ba-search span{
  color:var(--muted,#64748b);
  font-size:17px;
  font-weight:1000;
}

.ba-search input{
  min-height:42px;
  border:0;
  padding:0;
  border-radius:0;
  background:transparent;
  box-shadow:none;
  font-size:14px;
}

.ba-add-inline,
.ba-filter-button,
.ba-icon-button{
  min-width:42px;
  height:42px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  display:grid;
  place-items:center;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-size:15px;
  font-weight:1000;
  cursor:pointer;
  box-shadow:0 10px 22px rgba(15,23,42,.045);
}

.ba-add-inline{
  border-color:var(--ba-primary);
  background:var(--ba-primary);
  color:#fff;
  font-size:18px;
}

.ba-filter-button{
  position:relative;
  color:var(--ba-primary);
  background:color-mix(in srgb,var(--ba-primary) 8%,var(--card-bg,#fff));
}

.ba-filter-button.active{
  background:var(--ba-primary);
  color:#fff;
  border-color:var(--ba-primary);
}

.ba-filter-button b{
  position:absolute;
  top:-4px;
  right:-4px;
  min-width:19px;
  height:19px;
  display:grid;
  place-items:center;
  border-radius:999px;
  background:#ef4444;
  color:#fff;
  font-size:10px;
  border:2px solid var(--card-bg,#fff);
}

.ba-icon-button{
  width:42px;
  font-size:18px;
}

.ba-slim-notice{
  display:grid;
  grid-template-columns:auto minmax(0,1fr);
  align-items:center;
  gap:9px;
  margin-top:8px;
  border-radius:17px;
  padding:8px 10px;
  color:color-mix(in srgb,var(--text,#111827) 76%,#b45309 24%);
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 88%,#f59e0b 12%);
  border-color:color-mix(in srgb,var(--border,rgba(0,0,0,.10)) 72%,#f59e0b 28%);
}

.ba-slim-notice.error{
  color:color-mix(in srgb,var(--text,#111827) 76%,#ef4444 24%);
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 88%,#ef4444 12%);
  border-color:color-mix(in srgb,var(--border,rgba(0,0,0,.10)) 72%,#ef4444 28%);
}

.ba-slim-notice p{
  margin:0;
  font-size:11px;
  line-height:1.35;
  font-weight:850;
}

.ba-filter-chips{
  display:flex;
  gap:7px;
  overflow-x:auto;
  padding:8px 1px 0;
  scrollbar-width:none;
  -ms-overflow-style:none;
}

.ba-filter-chips::-webkit-scrollbar{display:none}

.ba-filter-chips button{
  flex:0 0 auto;
  min-height:31px;
  border:0;
  border-radius:999px;
  padding:0 10px;
  background:color-mix(in srgb,var(--ba-primary) 11%,transparent);
  color:var(--ba-primary);
  font-size:11px;
  font-weight:950;
  white-space:nowrap;
  cursor:pointer;
}

.ba-list,
.analytics-grid,
.breakdown-list{
  display:grid;
  gap:7px;
  margin-top:10px;
}

.invoice-row{
  width:100%;
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto;
  align-items:center;
  gap:8px;
  padding:8px;
  border-radius:18px;
  color:var(--text,#111827);
  text-align:left;
  cursor:pointer;
}

.invoice-avatar{
  width:34px;
  height:34px;
  display:grid;
  place-items:center;
  border-radius:14px;
  background:linear-gradient(135deg,var(--ba-primary),rgba(15,23,42,.9));
  color:#fff;
  font-size:15px;
  box-shadow:0 8px 18px rgba(15,23,42,.10);
}

.invoice-main{
  display:grid;
  gap:1px;
  min-width:0;
}

.invoice-main strong,
.invoice-main small,
.invoice-main em{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.invoice-main strong{
  font-size:13px;
  font-weight:1000;
  line-height:1.15;
}

.invoice-main small,
.invoice-main em{
  color:var(--muted,#64748b);
  font-size:10.5px;
  font-style:normal;
  font-weight:800;
  line-height:1.22;
}

.invoice-side{
  display:flex;
  align-items:center;
  gap:6px;
}

.invoice-side i{
  color:var(--muted,#64748b);
  font-style:normal;
  font-size:17px;
  font-weight:1000;
}

.status-dot-mini{
  width:8px;
  height:8px;
  border-radius:999px;
  background:var(--muted,#64748b);
  box-shadow:0 0 0 3px color-mix(in srgb,var(--muted,#64748b) 12%,transparent);
}

.status-dot-mini.green{background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.13)}
.status-dot-mini.red{background:#ef4444;box-shadow:0 0 0 3px rgba(239,68,68,.13)}
.status-dot-mini.orange{background:#f59e0b;box-shadow:0 0 0 3px rgba(245,158,11,.15)}
.status-dot-mini.blue{background:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.13)}
.status-dot-mini.purple{background:#9333ea;box-shadow:0 0 0 3px rgba(147,51,234,.13)}
.status-dot-mini.gray{background:var(--muted,#64748b)}

.ba-chip{
  display:inline-flex;
  align-items:center;
  min-height:24px;
  padding:0 9px;
  border-radius:999px;
  font-size:11px;
  font-weight:950;
  text-transform:capitalize;
}

.ba-chip.green{background:rgba(34,197,94,.11);color:#15803d}
.ba-chip.red{background:rgba(239,68,68,.1);color:#dc2626}
.ba-chip.blue{background:rgba(37,99,235,.1);color:#1d4ed8}
.ba-chip.orange{background:rgba(245,158,11,.12);color:#b45309}
.ba-chip.purple{background:rgba(124,58,237,.1);color:#6d28d9}
.ba-chip.gray{background:rgba(100,116,139,.1);color:#64748b}

.ba-table-card{
  margin-top:10px;
  padding:10px;
  border-radius:24px;
}

.ba-table-scroll{
  overflow-x:auto;
  border-radius:18px;
  border:1px solid var(--border,rgba(0,0,0,.08));
}

.ba-table-scroll table{
  width:100%;
  min-width:780px;
  border-collapse:collapse;
}

.ba-table-scroll th,
.ba-table-scroll td{
  padding:10px;
  text-align:left;
  border-bottom:1px solid var(--border,rgba(0,0,0,.08));
  vertical-align:top;
  font-size:12px;
}

.ba-table-scroll th{
  color:var(--muted,#64748b);
  font-size:11px;
  font-weight:950;
  text-transform:uppercase;
  letter-spacing:.06em;
  background:color-mix(in srgb,var(--ba-primary) 5%,var(--card-bg,var(--surface,#fff)));
}

.ba-table-scroll td strong,
.ba-table-scroll td span{
  display:block;
}

.ba-table-scroll td span{
  margin-top:3px;
  color:var(--muted,#64748b);
  font-size:11px;
}

.table-action{
  min-height:32px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  padding:0 10px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-size:11px;
  font-weight:950;
  cursor:pointer;
}

.ba-empty-table{
  padding:22px;
  text-align:center;
  color:var(--muted,#64748b);
  font-weight:850;
}

.analytics-grid{
  grid-template-columns:1fr;
}

.analytics-card{
  padding:10px;
  border-radius:22px;
}

.section-mini-head{
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:10px;
  margin-bottom:8px;
}

.section-mini-head strong{
  font-size:13px;
  font-weight:1000;
}

.section-mini-head small{
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:850;
}

.breakdown-row{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto;
  gap:8px;
  padding:9px;
  border-radius:17px;
}

.breakdown-row strong,
.breakdown-row small{
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.breakdown-row strong{
  font-size:12px;
  font-weight:1000;
  text-transform:capitalize;
}

.breakdown-row small{
  margin-top:2px;
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:850;
}

.breakdown-row > span{
  font-size:12px;
  font-weight:1000;
}

.bar-track{
  grid-column:1/-1;
  height:8px;
  border-radius:999px;
  background:color-mix(in srgb,var(--muted,#64748b) 16%,transparent);
  overflow:hidden;
}

.bar-track i{
  display:block;
  height:100%;
  border-radius:inherit;
  background:var(--ba-primary);
}

.ba-empty{
  display:grid;
  place-items:center;
  align-content:center;
  gap:8px;
  min-height:180px;
  padding:18px;
  border-radius:24px;
  text-align:center;
  border-style:dashed;
}

.ba-empty-icon{
  width:50px;
  height:50px;
  display:grid;
  place-items:center;
  border-radius:20px;
  background:color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));
  font-size:24px;
}

.ba-empty h3{
  margin:0;
  font-size:17px;
  font-weight:1000;
}

.ba-empty p{
  margin:0;
  color:var(--muted,#64748b);
  font-size:12px;
  line-height:1.5;
}

.ba-sheet-backdrop{
  position:fixed;
  inset:0;
  z-index:80;
  background:rgba(2,6,23,.46);
  display:grid;
  align-items:end;
  padding:10px;
}

.ba-sheet{
  width:min(540px,100%);
  max-height:92dvh;
  overflow-y:auto;
  margin:0 auto;
  border-radius:28px 28px 20px 20px;
  padding:14px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
}

.ba-sheet.small{
  width:min(440px,100%);
}

.detail-sheet{
  width:min(720px,100%);
}

.ba-sheet-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:12px;
  margin-bottom:12px;
}

.ba-sheet-head h2{
  margin:0;
  font-size:20px;
  font-weight:1000;
  letter-spacing:-.04em;
  overflow-wrap:anywhere;
}

.ba-sheet-head p{
  margin:3px 0 0;
  color:var(--muted,#64748b);
  font-size:12px;
  font-weight:750;
  line-height:1.45;
}

.ba-sheet-head button{
  width:38px;
  height:38px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-weight:1000;
  cursor:pointer;
}

.ba-form{
  display:grid;
  grid-template-columns:1fr;
  gap:9px;
}

.ba-form label{
  display:grid;
  gap:5px;
  min-width:0;
}

.ba-form label.wide{
  grid-column:1/-1;
}

.ba-form span{
  color:var(--muted,#64748b);
  font-size:11px;
  font-weight:950;
}

.ba-sheet-actions{
  display:flex;
  justify-content:flex-end;
  flex-wrap:wrap;
  gap:8px;
  margin-top:12px;
}

.ba-sheet-actions.sticky{
  position:sticky;
  bottom:-14px;
  padding-top:10px;
  background:linear-gradient(to top,var(--card-bg,var(--surface,#fff)) 76%,transparent);
}

.ba-sheet-actions button{
  min-height:40px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  padding:0 14px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-size:12px;
  font-weight:950;
  cursor:pointer;
}

.ba-sheet-actions button.primary{
  border-color:var(--ba-primary);
  background:var(--ba-primary);
  color:#fff;
}

.invoice-insights{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:7px;
  margin-bottom:10px;
}

.invoice-insights span{
  display:grid;
  gap:2px;
  padding:9px;
  border-radius:16px;
  background:color-mix(in srgb,var(--muted,#64748b) 7%,transparent);
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:850;
}

.invoice-insights b{
  color:var(--text,#111827);
  font-size:12px;
  font-weight:1000;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ba-menu-list{
  display:grid;
  gap:8px;
  margin-top:10px;
}

.ba-menu-list button{
  width:100%;
  display:grid;
  grid-template-columns:auto minmax(0,1fr);
  grid-template-rows:auto auto;
  column-gap:10px;
  text-align:left;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:18px;
  padding:10px;
  background:color-mix(in srgb,var(--muted,#64748b) 5%,transparent);
  color:var(--text,#111827);
  cursor:pointer;
}

.ba-menu-list button.active{
  border-color:var(--ba-primary);
  background:color-mix(in srgb,var(--ba-primary) 11%,transparent);
}

.ba-menu-list span{
  grid-row:1 / span 2;
  width:32px;
  height:32px;
  border-radius:13px;
  display:grid;
  place-items:center;
  background:color-mix(in srgb,var(--ba-primary) 12%,transparent);
  color:var(--ba-primary);
  font-weight:1000;
}

.ba-menu-list b{
  font-size:13px;
  font-weight:1000;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ba-menu-list small{
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:800;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.safety-note{
  display:grid;
  gap:3px;
  margin-bottom:10px;
  padding:10px;
  border-radius:18px;
  background:color-mix(
    in srgb,
    var(--card-bg,var(--surface,#fff)) 88%,
    var(--ba-primary) 12%
  );
  border:1px solid var(--border,rgba(0,0,0,.10));
  color:var(--text,#111827);
  box-shadow:0 12px 28px rgba(15,23,42,.045);
}

.safety-note strong{
  color:var(--text,#111827);
  font-size:12px;
  font-weight:1000;
}

.safety-note span{
  color:color-mix(in srgb,var(--text,#111827) 74%,var(--muted,#64748b) 26%);
  font-size:11px;
  line-height:1.45;
  font-weight:800;
}

:global(html[data-theme="dark"]) .safety-note,
:global(html.dark) .safety-note{
  background:color-mix(
    in srgb,
    var(--card-bg,var(--surface,#111827)) 84%,
    var(--ba-primary) 16%
  );
  border-color:var(--border,rgba(255,255,255,.16));
  color:var(--text,#fff);
}

:global(html[data-theme="dark"]) .safety-note strong,
:global(html.dark) .safety-note strong{
  color:var(--text,#fff);
}

:global(html[data-theme="dark"]) .safety-note span,
:global(html.dark) .safety-note span{
  color:color-mix(in srgb,var(--text,#fff) 82%,var(--muted,rgba(255,255,255,.72)) 18%);
}

@media(min-width:680px){
  .ba-page{
    padding:calc(12px * var(--local-density-scale,1));
  }

  .ba-list{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .invoice-row{
    min-height:68px;
  }

  .analytics-grid{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .ba-form.compact{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
}

@media(min-width:1040px){
  .ba-list{
    grid-template-columns:repeat(3,minmax(0,1fr));
  }
}

@media(min-width:1280px){
  .ba-list{
    grid-template-columns:repeat(4,minmax(0,1fr));
  }

  .invoice-row{
    min-height:64px;
  }
}

@media(max-width:520px){
  .ba-search-card{
    gap:6px;
    padding:7px;
    border-radius:22px;
  }

  .invoice-insights{
    grid-template-columns:1fr;
  }
}
`,rK={paymentId:"",receiptNumber:"",paidAt:"",note:""};function rq(e,a="GHS"){return new Intl.NumberFormat("en-GH",{style:"currency",currency:a||"GHS",maximumFractionDigits:0}).format(Number(e||0))}function rG(e){if(!e)return"Not set";let a=new Date(e);return Number.isNaN(a.getTime())?"Not set":a.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"2-digit"})}function rY(e){if(!e)return"Not set";let a=new Date(e);return Number.isNaN(a.getTime())?"Not set":a.toLocaleString("en-GB",{day:"2-digit",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"})}function rV(e){return String(e||"pending").toLowerCase()}function rW(e){return String(e||"manual").toLowerCase()}function rJ(e){let a=rV(e);return"paid"===a?"green":["failed","cancelled"].includes(a)?"red":["pending","processing"].includes(a)?"orange":"refunded"===a?"purple":"gray"}function rZ(e){let a=rW(e);return"momo"===a?"\uD83D\uDCF1":"card"===a?"\uD83D\uDCB3":"bank"===a?"\uD83C\uDFE6":"cash"===a?"\uD83D\uDCB5":"\uD83E\uDDFE"}function rQ(e){return e.receiptNumber||e.providerReference||e.invoice?.invoiceNumber||`Payment ${e.id?.slice(0,8)||""}`}function rX(e){let a=rV(e.status),r=rW(e.method),t=String(e.provider||"").toLowerCase();return["pending","processing"].includes(a)&&["cash","bank","manual"].includes(r)&&(!t||"manual"===t||"cash"===t||"bank"===t)}function r0(...e){let a=u.db;for(let r of e)if(a[r])return a[r];return null}async function r1(...e){let a=r0(...e);return a?.toArray?a.toArray():[]}async function r2(e){let a=r0("appPayments","payments");if(a?.put){for(let r of e)if(r?.id)try{await a.put(r)}catch{}}}function r4(){let e=(0,c.useRouter)(),{accountId:a,authenticated:r,loading:t}=(0,d.F)(),{settings:i,loading:o}=(0,p.t)(),l=i?.primaryColor||"var(--primary-color, #2563eb)",[b,u]=(0,s.useState)(!0),[m,h]=(0,s.useState)(!1),[x,g]=(0,s.useState)([]),[f,v]=(0,s.useState)("cards"),[y,w]=(0,s.useState)("all"),[j,k]=(0,s.useState)("all"),[N,S]=(0,s.useState)(""),[C,I]=(0,s.useState)(null),[A,z]=(0,s.useState)(rK),[M,$]=(0,s.useState)(""),[P,F]=(0,s.useState)(""),[T,R]=(0,s.useState)(!1),[D,E]=(0,s.useState)(!1);async function L(){if(!r||!a){g([]),u(!1);return}try{u(!0),$(""),F("");try{var e;let a=(e=await (0,aj.AT)("/billing/payments"),Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.items)?e.items:Array.isArray(e?.payments)?e.payments:Array.isArray(e?.rows)?e.rows:Array.isArray(e?.results)?e.results:[]);g(a),await r2(a)}catch{let e=await r1("appPayments","payments");g(e.filter(e=>!e.accountId||e.accountId===a)),$("Live billing server was not available, so this page is showing the latest payment data saved on this device.")}}finally{u(!1)}}(0,s.useEffect)(()=>{!t&&(r&&a||e.replace("/login"))},[t,r,a,e]),(0,s.useEffect)(()=>{L()},[r,a]);let B=(0,s.useMemo)(()=>{let e=N.trim().toLowerCase();return x.filter(a=>{let r=rV(a.status),t=rW(a.method);return("all"===y||r===y)&&("all"===j||t===j)&&(!e||`${a.receiptNumber||""} ${a.providerReference||""} ${a.payerName||""} ${a.payerPhone||""} ${a.payerEmail||""} ${a.status||""} ${a.method||""} ${a.provider||""} ${a.invoice?.invoiceNumber||""}`.toLowerCase().includes(e))})},[j,x,N,y]),U=x[0]?.currency||"GHS",O=(0,s.useMemo)(()=>{let e=x.filter(e=>"paid"===rV(e.status)),a=x.filter(e=>["pending","processing"].includes(rV(e.status))),r=x.filter(e=>["failed","cancelled"].includes(rV(e.status))),t=x.filter(e=>"refunded"===rV(e.status));return{payments:x.length,collected:e.reduce((e,a)=>e+Number(a.amount||0),0),pending:a.reduce((e,a)=>e+Number(a.amount||0),0),failed:r.length,refunded:t.reduce((e,a)=>e+Number(a.amount||0),0),manualConfirmable:x.filter(rX).length}},[x]),_=(0,s.useMemo)(()=>{let e=new Map;for(let a of x){let r=rV(a.status),t=e.get(r)||{count:0,amount:0};t.count+=1,t.amount+=Number(a.amount||0),e.set(r,t)}return Array.from(e.entries()).map(([e,a])=>({name:e,...a})).sort((e,a)=>a.count-e.count)},[x]),H=(0,s.useMemo)(()=>{let e=new Map;for(let a of x){let r=rW(a.method),t=e.get(r)||{count:0,amount:0};t.count+=1,t.amount+=Number(a.amount||0),e.set(r,t)}return Array.from(e.entries()).map(([e,a])=>({name:e,...a})).sort((e,a)=>a.amount-e.amount)},[x]),K=(0,s.useMemo)(()=>["all"!==y?y:"","all"!==j?j:""].filter(Boolean).length,[j,y]);function q(e){I(e),z({paymentId:e.id||"",receiptNumber:e.receiptNumber||`RCPT-${Date.now()}`,paidAt:new Date().toISOString().slice(0,10),note:e.note||""}),F("")}async function G(){if(!C?.id)return void F("Missing payment ID.");if(!rX(C))return void F("Only pending manual, cash, or bank payments can be confirmed from this page.");if(window.confirm(`Confirm this payment as paid?

${rQ(C)}
${rq(C.amount,C.currency)}

This should only be done after money has truly been received.`))try{h(!0),F("");let e={receiptNumber:A.receiptNumber.trim()||void 0,paidAt:A.paidAt?new Date(A.paidAt).toISOString():void 0,note:A.note.trim()||void 0},a=await (0,aj.AT)(`/billing/payments/${encodeURIComponent(C.id)}/confirm`,{method:"PATCH",body:JSON.stringify(e)});await r2([a]),I(null),$("Payment confirmed. The backend should now reconcile the invoice and activate the subscription where applicable."),await L()}catch(e){F(e?.message||"Payment could not be confirmed.")}finally{h(!1)}}return t||o||b?(0,n.jsxs)("main",{className:"ba-page payments-page",style:{"--ba-primary":l},children:[(0,n.jsx)("style",{children:ta}),(0,n.jsxs)("section",{className:"ba-state",children:[(0,n.jsx)("div",{className:"ba-spinner"}),(0,n.jsx)("h2",{children:"Opening payments..."}),(0,n.jsx)("p",{children:"Loading payment records, receipts and confirmation status."})]})]}):(0,n.jsxs)("main",{className:"ba-page payments-page",style:{"--ba-primary":l},children:[(0,n.jsx)("style",{children:ta}),(0,n.jsxs)("section",{className:"ba-search-card","aria-label":"Payments search and actions",children:[(0,n.jsxs)("label",{className:"ba-search",children:[(0,n.jsx)("span",{children:"⌕"}),(0,n.jsx)("input",{placeholder:"Search payments...",value:N,onChange:e=>S(e.target.value),"aria-label":"Search payments"})]}),(0,n.jsx)("button",{type:"button",className:"ba-add-inline",onClick:L,"aria-label":"Refresh payments",title:"Refresh",children:"↻"}),(0,n.jsxs)("button",{type:"button",className:`ba-filter-button ${K?"active":""}`,onClick:()=>R(!0),"aria-label":"Open payment filters",title:"Filters",children:["☷",K?(0,n.jsx)("b",{children:K}):null]}),(0,n.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>E(!0),"aria-label":"More options",children:"⋯"})]}),M?(0,n.jsxs)("section",{className:"ba-slim-notice",children:[(0,n.jsx)("span",{className:"status-dot-mini orange"}),(0,n.jsx)("p",{children:M})]}):null,K>0&&(0,n.jsxs)("section",{className:"ba-filter-chips","aria-label":"Active payment filters",children:["all"!==y&&(0,n.jsxs)("button",{type:"button",onClick:()=>w("all"),children:["Status: ",y," \xd7"]}),"all"!==j&&(0,n.jsxs)("button",{type:"button",onClick:()=>k("all"),children:["Method: ",j," \xd7"]})]}),"analytics"===f&&(0,n.jsxs)("section",{className:"analytics-grid",children:[(0,n.jsx)(te,{title:"Status Breakdown",items:_,total:x.length,currency:U}),(0,n.jsx)(te,{title:"Method Breakdown",items:H,total:x.length,currency:U})]}),"table"===f&&(0,n.jsx)("section",{className:"ba-table-card",children:(0,n.jsxs)("div",{className:"ba-table-scroll",children:[(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsxs)("th",{children:["Payments (",B.length,")"]}),(0,n.jsx)("th",{children:"Amount"}),(0,n.jsx)("th",{children:"Method"}),(0,n.jsx)("th",{children:"Payer"}),(0,n.jsx)("th",{children:"Invoice"}),(0,n.jsx)("th",{children:"Status"}),(0,n.jsx)("th",{children:"Paid At"}),(0,n.jsx)("th",{children:"Action"})]})}),(0,n.jsx)("tbody",{children:B.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{children:[(0,n.jsx)("strong",{children:rQ(e)}),(0,n.jsx)("span",{children:e.providerReference||e.id||"No reference"})]}),(0,n.jsx)("td",{children:rq(e.amount,e.currency)}),(0,n.jsxs)("td",{children:[rZ(e.method)," ",e.method||"manual"]}),(0,n.jsx)("td",{children:e.payerName||e.payerEmail||e.payerPhone||"Not set"}),(0,n.jsx)("td",{children:e.invoice?.invoiceNumber||e.invoiceId||"Not linked"}),(0,n.jsx)("td",{children:(0,n.jsx)(r6,{tone:rJ(e.status),children:e.status||"pending"})}),(0,n.jsx)("td",{children:rG(e.paidAt||e.createdAt)}),(0,n.jsx)("td",{children:(0,n.jsx)("button",{className:"table-action",type:"button",onClick:()=>q(e),children:"Details"})})]},e.id||e.providerReference||e.receiptNumber))})]}),!B.length&&(0,n.jsx)("div",{className:"ba-empty-table",children:"No payment matches the selected filters."})]})}),"cards"===f&&(0,n.jsxs)("section",{className:"ba-list",children:[B.map(e=>(0,n.jsxs)("button",{type:"button",className:"payment-row",onClick:()=>q(e),children:[(0,n.jsx)("span",{className:"payment-avatar",children:rZ(e.method)}),(0,n.jsxs)("span",{className:"payment-main",children:[(0,n.jsx)("strong",{children:rQ(e)}),(0,n.jsxs)("small",{children:[rq(e.amount,e.currency)," \xb7 ",e.method||"manual"," \xb7 ",e.provider||"recorded"]}),(0,n.jsxs)("em",{children:[e.payerName||e.payerEmail||e.payerPhone||"No payer"," \xb7 ",rG(e.paidAt||e.createdAt)]})]}),(0,n.jsxs)("span",{className:"payment-side",children:[(0,n.jsx)("span",{className:`status-dot-mini ${rJ(e.status)}`}),(0,n.jsx)("i",{children:"⋯"})]})]},e.id||e.providerReference||e.receiptNumber)),!B.length&&(0,n.jsx)(r5,{text:"No payment matches the selected filters."})]}),T&&(0,n.jsx)(r8,{statusFilter:y,methodFilter:j,setStatusFilter:w,setMethodFilter:k,clearFilters:function(){w("all"),k("all")},onClose:()=>R(!1)}),D&&(0,n.jsx)(r9,{viewMode:f,setViewMode:e=>{v(e),E(!1)},summary:O,currency:U,filteredCount:B.length,onRefresh:async()=>{E(!1),await L()},onClose:()=>E(!1)}),C&&(0,n.jsx)(r7,{payment:C,message:P,saving:m,confirmForm:A,setConfirmForm:z,confirmManualPayment:G,printReceipt:function(e){let a=`
      <html>
        <head>
          <title>${rQ(e)}</title>
          <style>
            body{font-family:Arial,sans-serif;padding:24px;color:#111827}
            .receipt{max-width:520px;margin:auto;border:1px solid #e5e7eb;border-radius:18px;padding:22px}
            h1{margin:0 0 4px;font-size:24px}
            p{margin:4px 0;color:#4b5563}
            table{width:100%;border-collapse:collapse;margin-top:18px}
            td{padding:10px 0;border-bottom:1px solid #e5e7eb}
            td:last-child{text-align:right;font-weight:700;color:#111827}
            .status{display:inline-block;margin-top:12px;padding:7px 12px;border-radius:999px;background:#dcfce7;color:#166534;font-weight:800}
          </style>
        </head>
        <body>
          <div class="receipt">
            <h1>Eleeveon Schools Receipt</h1>
            <p>Owner account payment record</p>
            <span class="status">${e.status||"pending"}</span>
            <table>
              <tr><td>Receipt</td><td>${e.receiptNumber||"Not set"}</td></tr>
              <tr><td>Reference</td><td>${e.providerReference||"Not set"}</td></tr>
              <tr><td>Amount</td><td>${rq(e.amount,e.currency)}</td></tr>
              <tr><td>Method</td><td>${e.method||"Not set"}</td></tr>
              <tr><td>Provider</td><td>${e.provider||"manual"}</td></tr>
              <tr><td>Payer</td><td>${e.payerName||e.payerEmail||e.payerPhone||"Not set"}</td></tr>
              <tr><td>Invoice</td><td>${e.invoice?.invoiceNumber||e.invoiceId||"Not linked"}</td></tr>
              <tr><td>Paid At</td><td>${rY(e.paidAt||e.createdAt)}</td></tr>
            </table>
          </div>
          <script>window.print();</script>
        </body>
      </html>
    `,r=window.open("","_blank","width=720,height=800");r&&(r.document.write(a),r.document.close())},onClose:()=>I(null)})]})}function r8({statusFilter:e,methodFilter:a,setStatusFilter:r,setMethodFilter:t,clearFilters:i,onClose:s}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Filters"}),(0,n.jsx)("p",{children:"Filter payments by status and method."})]}),(0,n.jsx)("button",{type:"button",onClick:s,"aria-label":"Close filters",children:"✕"})]}),(0,n.jsxs)("div",{className:"ba-form compact",children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Status"}),(0,n.jsxs)("select",{value:e,onChange:e=>r(e.target.value),children:[(0,n.jsx)("option",{value:"all",children:"All statuses"}),(0,n.jsx)("option",{value:"pending",children:"Pending"}),(0,n.jsx)("option",{value:"processing",children:"Processing"}),(0,n.jsx)("option",{value:"paid",children:"Paid"}),(0,n.jsx)("option",{value:"failed",children:"Failed"}),(0,n.jsx)("option",{value:"refunded",children:"Refunded"}),(0,n.jsx)("option",{value:"cancelled",children:"Cancelled"})]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Method"}),(0,n.jsxs)("select",{value:a,onChange:e=>t(e.target.value),children:[(0,n.jsx)("option",{value:"all",children:"All methods"}),(0,n.jsx)("option",{value:"momo",children:"Momo"}),(0,n.jsx)("option",{value:"card",children:"Card"}),(0,n.jsx)("option",{value:"bank",children:"Bank"}),(0,n.jsx)("option",{value:"cash",children:"Cash"}),(0,n.jsx)("option",{value:"manual",children:"Manual"})]})]})]}),(0,n.jsxs)("div",{className:"ba-sheet-actions",children:[(0,n.jsx)("button",{type:"button",onClick:i,children:"Clear"}),(0,n.jsx)("button",{type:"button",className:"primary",onClick:s,children:"Apply"})]})]})})}function r9({viewMode:e,setViewMode:a,summary:r,currency:t,filteredCount:i,onRefresh:s,onClose:o}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Payments"}),(0,n.jsxs)("p",{children:[i," of ",r.payments," payment record(s) shown."]})]}),(0,n.jsx)("button",{type:"button",onClick:o,"aria-label":"Close menu",children:"✕"})]}),(0,n.jsxs)("div",{className:"payment-insights",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:rq(r.collected,t)}),"Collected"]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:rq(r.pending,t)}),"Pending"]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:r.failed}),"Failed"]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:r.manualConfirmable}),"Manual review"]})]}),(0,n.jsxs)("div",{className:"ba-menu-list",children:[(0,n.jsxs)("button",{type:"button",className:"cards"===e?"active":"",onClick:()=>a("cards"),children:[(0,n.jsx)("span",{children:"☰"}),(0,n.jsx)("b",{children:"List view"}),(0,n.jsx)("small",{children:"Compact payment rows"})]}),(0,n.jsxs)("button",{type:"button",className:"table"===e?"active":"",onClick:()=>a("table"),children:[(0,n.jsx)("span",{children:"☷"}),(0,n.jsx)("b",{children:"Table view"}),(0,n.jsx)("small",{children:"Dense laptop payment records"})]}),(0,n.jsxs)("button",{type:"button",className:"analytics"===e?"active":"",onClick:()=>a("analytics"),children:[(0,n.jsx)("span",{children:"◔"}),(0,n.jsx)("b",{children:"Analytics"}),(0,n.jsx)("small",{children:"Status and method breakdown"})]}),(0,n.jsxs)("button",{type:"button",onClick:s,children:[(0,n.jsx)("span",{children:"↻"}),(0,n.jsx)("b",{children:"Refresh"}),(0,n.jsx)("small",{children:"Reload payment data"})]})]})]})})}function r7({payment:e,message:a,saving:r,confirmForm:t,setConfirmForm:i,confirmManualPayment:s,printReceipt:o,onClose:l}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop detail-layer",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet detail-sheet",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:rQ(e)}),(0,n.jsxs)("p",{children:[rq(e.amount,e.currency)," \xb7 ",e.status||"pending"]})]}),(0,n.jsx)("button",{type:"button",onClick:l,"aria-label":"Close payment details",children:"✕"})]}),a?(0,n.jsxs)("section",{className:"ba-slim-notice error",children:[(0,n.jsx)("span",{className:"status-dot-mini red"}),(0,n.jsx)("p",{children:a})]}):null,(0,n.jsxs)("section",{className:"safety-note",children:[(0,n.jsx)("strong",{children:"Financial safety rule"}),(0,n.jsx)("span",{children:"Gateway records should not be edited manually. Only pending manual, cash or bank payments can be confirmed here."})]}),(0,n.jsxs)("div",{className:"detail-grid",children:[(0,n.jsx)(r3,{label:"Amount",value:rq(e.amount,e.currency)}),(0,n.jsx)(r3,{label:"Status",value:e.status||"pending"}),(0,n.jsx)(r3,{label:"Method",value:e.method||"manual"}),(0,n.jsx)(r3,{label:"Provider",value:e.provider||"manual"}),(0,n.jsx)(r3,{label:"Reference",value:e.providerReference||"Not set"}),(0,n.jsx)(r3,{label:"Receipt",value:e.receiptNumber||"Not set"}),(0,n.jsx)(r3,{label:"Payer",value:e.payerName||e.payerEmail||e.payerPhone||"Not set"}),(0,n.jsx)(r3,{label:"Invoice",value:e.invoice?.invoiceNumber||e.invoiceId||"Not linked"}),(0,n.jsx)(r3,{label:"Subscription",value:e.subscription?.plan?.name||e.subscriptionId||"Not linked"}),(0,n.jsx)(r3,{label:"Created",value:rY(e.createdAt)}),(0,n.jsx)(r3,{label:"Paid At",value:rY(e.paidAt)}),(0,n.jsx)(r3,{label:"Note",value:e.note||"No note",wide:!0})]}),rX(e)&&(0,n.jsxs)("section",{className:"confirm-box",children:[(0,n.jsxs)("div",{className:"section-mini-head",children:[(0,n.jsx)("strong",{children:"Manual confirmation"}),(0,n.jsx)("small",{children:"Confirm only after receiving the money."})]}),(0,n.jsxs)("div",{className:"ba-form compact",children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Receipt Number"}),(0,n.jsx)("input",{value:t.receiptNumber,onChange:e=>i(a=>({...a,receiptNumber:e.target.value}))})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Paid At"}),(0,n.jsx)("input",{type:"date",value:t.paidAt,onChange:e=>i(a=>({...a,paidAt:e.target.value}))})]}),(0,n.jsxs)("label",{className:"wide",children:[(0,n.jsx)("span",{children:"Confirmation Note"}),(0,n.jsx)("textarea",{value:t.note,onChange:e=>i(a=>({...a,note:e.target.value}))})]})]})]}),(0,n.jsxs)("div",{className:"ba-sheet-actions sticky",children:[(0,n.jsx)("button",{type:"button",onClick:()=>o(e),children:"Print Receipt"}),rX(e)&&(0,n.jsx)("button",{type:"button",className:"primary",disabled:r,onClick:s,children:r?"Confirming...":"Confirm Payment"})]})]})})}function r6({children:e,tone:a="gray"}){return(0,n.jsx)("span",{className:`ba-chip ${a}`,children:e})}function r3({label:e,value:a,wide:r}){return(0,n.jsxs)("div",{className:`detail-item ${r?"wide":""}`,children:[(0,n.jsx)("span",{children:e}),(0,n.jsx)("strong",{children:a})]})}function r5({text:e}){return(0,n.jsxs)("section",{className:"ba-empty",children:[(0,n.jsx)("div",{className:"ba-empty-icon",children:"\uD83D\uDCB3"}),(0,n.jsx)("h3",{children:"No records found"}),(0,n.jsx)("p",{children:e})]})}function te({title:e,items:a,total:r,currency:t}){return(0,n.jsxs)("section",{className:"analytics-card",children:[(0,n.jsxs)("div",{className:"section-mini-head",children:[(0,n.jsx)("strong",{children:e}),(0,n.jsxs)("small",{children:[a.length," group(s)"]})]}),(0,n.jsxs)("div",{className:"breakdown-list",children:[a.map(e=>(0,n.jsxs)("article",{className:"breakdown-row",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("strong",{children:e.name}),(0,n.jsx)("small",{children:rq(e.amount,t)})]}),(0,n.jsx)("span",{children:e.count}),(0,n.jsx)("div",{className:"bar-track",children:(0,n.jsx)("i",{style:{width:`${r?Math.round(e.count/r*100):0}%`}})})]},e.name)),!a.length&&(0,n.jsx)(r5,{text:`No ${e.toLowerCase()} available.`})]})]})}let ta=`
@keyframes spin{to{transform:rotate(360deg)}}

.ba-page{
  --ease:cubic-bezier(.2,.8,.2,1);
  min-height:100dvh;
  width:100%;
  max-width:100%;
  min-width:0;
  padding:calc(8px * var(--local-density-scale,1));
  padding-bottom:max(40px,env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left,color-mix(in srgb,var(--ba-primary) 9%,transparent),transparent 30rem),
    var(--bg,#f7f8fb);
  color:var(--text,#111827);
  font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);
  font-size:var(--font-size,14px);
  overflow-x:hidden;
}

.ba-page *,
.ba-page *::before,
.ba-page *::after{
  box-sizing:border-box;
  min-width:0;
}

.ba-page button,
.ba-page input,
.ba-page select,
.ba-page textarea{
  font:inherit;
  max-width:100%;
}

.ba-page button{
  -webkit-tap-highlight-color:transparent;
}

.ba-page input,
.ba-page select,
.ba-page textarea{
  width:100%;
  min-height:44px;
  border:1px solid var(--input-border,var(--border,rgba(0,0,0,.10)));
  border-radius:16px;
  padding:0 12px;
  background:var(--input-bg,var(--surface,#fff));
  color:var(--input-text,var(--text,#111827));
  outline:none;
  font-weight:750;
}

.ba-page textarea{
  min-height:86px;
  resize:vertical;
  padding-top:10px;
}

.ba-state,
.ba-search-card,
.ba-slim-notice,
.payment-row,
.ba-table-card,
.analytics-card,
.breakdown-row,
.ba-empty,
.ba-sheet,
.safety-note,
.confirm-box,
.detail-item{
  background:var(--card-bg,var(--surface,#fff));
  border:1px solid var(--border,rgba(0,0,0,.10));
  box-shadow:0 12px 28px rgba(15,23,42,.045);
}

.ba-state{
  min-height:min(420px,calc(100dvh - 32px));
  width:min(520px,100%);
  margin:0 auto;
  display:grid;
  place-items:center;
  align-content:center;
  gap:10px;
  padding:22px;
  border-radius:28px;
  text-align:center;
}

.ba-spinner{
  width:38px;
  height:38px;
  border-radius:999px;
  border:4px solid color-mix(in srgb,var(--ba-primary) 18%,transparent);
  border-top-color:var(--ba-primary);
  animation:spin .8s linear infinite;
}

.ba-state h2{
  margin:0;
  font-size:22px;
  font-weight:1000;
  letter-spacing:-.04em;
}

.ba-state p{
  margin:0;
  color:var(--muted,#64748b);
  font-size:13px;
  line-height:1.6;
}

.ba-search-card{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto auto auto;
  gap:8px;
  align-items:center;
  padding:8px;
  border-radius:24px;
}

.ba-search{
  min-width:0;
  display:grid;
  grid-template-columns:auto minmax(0,1fr);
  align-items:center;
  gap:8px;
  min-height:44px;
  padding:0 11px;
  border-radius:18px;
  background:color-mix(in srgb,var(--muted,#64748b) 7%,transparent);
}

.ba-search span{
  color:var(--muted,#64748b);
  font-size:17px;
  font-weight:1000;
}

.ba-search input{
  min-height:42px;
  border:0;
  padding:0;
  border-radius:0;
  background:transparent;
  box-shadow:none;
  font-size:14px;
}

.ba-add-inline,
.ba-filter-button,
.ba-icon-button{
  min-width:42px;
  height:42px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  display:grid;
  place-items:center;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-size:15px;
  font-weight:1000;
  cursor:pointer;
  box-shadow:0 10px 22px rgba(15,23,42,.045);
}

.ba-add-inline{
  border-color:var(--ba-primary);
  background:var(--ba-primary);
  color:#fff;
  font-size:18px;
}

.ba-filter-button{
  position:relative;
  color:var(--ba-primary);
  background:color-mix(in srgb,var(--ba-primary) 8%,var(--card-bg,#fff));
}

.ba-filter-button.active{
  background:var(--ba-primary);
  color:#fff;
  border-color:var(--ba-primary);
}

.ba-filter-button b{
  position:absolute;
  top:-4px;
  right:-4px;
  min-width:19px;
  height:19px;
  display:grid;
  place-items:center;
  border-radius:999px;
  background:#ef4444;
  color:#fff;
  font-size:10px;
  border:2px solid var(--card-bg,#fff);
}

.ba-icon-button{
  width:42px;
  font-size:18px;
}

.ba-slim-notice{
  display:grid;
  grid-template-columns:auto minmax(0,1fr);
  align-items:center;
  gap:9px;
  margin-top:8px;
  border-radius:17px;
  padding:8px 10px;
  color:#92400e;
  background:rgba(245,158,11,.1);
  border-color:rgba(245,158,11,.24);
}

.ba-slim-notice.error{
  color:#991b1b;
  background:rgba(239,68,68,.10);
  border-color:rgba(239,68,68,.20);
}

.ba-slim-notice p{
  margin:0;
  font-size:11px;
  line-height:1.35;
  font-weight:850;
}

.ba-filter-chips{
  display:flex;
  gap:7px;
  overflow-x:auto;
  padding:8px 1px 0;
  scrollbar-width:none;
  -ms-overflow-style:none;
}

.ba-filter-chips::-webkit-scrollbar{display:none}

.ba-filter-chips button{
  flex:0 0 auto;
  min-height:31px;
  border:0;
  border-radius:999px;
  padding:0 10px;
  background:color-mix(in srgb,var(--ba-primary) 11%,transparent);
  color:var(--ba-primary);
  font-size:11px;
  font-weight:950;
  white-space:nowrap;
  cursor:pointer;
}

.ba-list,
.analytics-grid,
.breakdown-list{
  display:grid;
  gap:7px;
  margin-top:10px;
}

.payment-row{
  width:100%;
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto;
  align-items:center;
  gap:8px;
  padding:8px;
  border-radius:18px;
  color:var(--text,#111827);
  text-align:left;
  cursor:pointer;
}

.payment-avatar{
  width:34px;
  height:34px;
  display:grid;
  place-items:center;
  border-radius:14px;
  background:linear-gradient(135deg,var(--ba-primary),rgba(15,23,42,.9));
  color:#fff;
  font-size:15px;
  box-shadow:0 8px 18px rgba(15,23,42,.10);
}

.payment-main{
  display:grid;
  gap:1px;
  min-width:0;
}

.payment-main strong,
.payment-main small,
.payment-main em{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.payment-main strong{
  font-size:13px;
  font-weight:1000;
  line-height:1.15;
}

.payment-main small,
.payment-main em{
  color:var(--muted,#64748b);
  font-size:10.5px;
  font-style:normal;
  font-weight:800;
  line-height:1.22;
}

.payment-side{
  display:flex;
  align-items:center;
  gap:6px;
}

.payment-side i{
  color:var(--muted,#64748b);
  font-style:normal;
  font-size:17px;
  font-weight:1000;
}

.status-dot-mini{
  width:8px;
  height:8px;
  border-radius:999px;
  background:var(--muted,#64748b);
  box-shadow:0 0 0 3px color-mix(in srgb,var(--muted,#64748b) 12%,transparent);
}

.status-dot-mini.green{background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.13)}
.status-dot-mini.red{background:#ef4444;box-shadow:0 0 0 3px rgba(239,68,68,.13)}
.status-dot-mini.orange{background:#f59e0b;box-shadow:0 0 0 3px rgba(245,158,11,.15)}
.status-dot-mini.blue{background:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.13)}
.status-dot-mini.purple{background:#9333ea;box-shadow:0 0 0 3px rgba(147,51,234,.13)}
.status-dot-mini.gray{background:var(--muted,#64748b)}

.ba-chip{
  display:inline-flex;
  align-items:center;
  min-height:24px;
  padding:0 9px;
  border-radius:999px;
  font-size:11px;
  font-weight:950;
  text-transform:capitalize;
}

.ba-chip.green{background:rgba(34,197,94,.11);color:#15803d}
.ba-chip.red{background:rgba(239,68,68,.1);color:#dc2626}
.ba-chip.blue{background:rgba(37,99,235,.1);color:#1d4ed8}
.ba-chip.orange{background:rgba(245,158,11,.12);color:#b45309}
.ba-chip.purple{background:rgba(124,58,237,.1);color:#6d28d9}
.ba-chip.gray{background:rgba(100,116,139,.1);color:#64748b}

.ba-table-card{
  margin-top:10px;
  padding:10px;
  border-radius:24px;
}

.ba-table-scroll{
  overflow-x:auto;
  border-radius:18px;
  border:1px solid var(--border,rgba(0,0,0,.08));
}

.ba-table-scroll table{
  width:100%;
  min-width:940px;
  border-collapse:collapse;
}

.ba-table-scroll th,
.ba-table-scroll td{
  padding:10px;
  text-align:left;
  border-bottom:1px solid var(--border,rgba(0,0,0,.08));
  vertical-align:top;
  font-size:12px;
}

.ba-table-scroll th{
  color:var(--muted,#64748b);
  font-size:11px;
  font-weight:950;
  text-transform:uppercase;
  letter-spacing:.06em;
  background:color-mix(in srgb,var(--ba-primary) 5%,transparent);
}

.ba-table-scroll td strong,
.ba-table-scroll td span{
  display:block;
}

.ba-table-scroll td span{
  margin-top:3px;
  color:var(--muted,#64748b);
  font-size:11px;
}

.table-action{
  min-height:32px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  padding:0 10px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-size:11px;
  font-weight:950;
  cursor:pointer;
}

.ba-empty-table{
  padding:22px;
  text-align:center;
  color:var(--muted,#64748b);
  font-weight:850;
}

.analytics-grid{
  grid-template-columns:1fr;
}

.analytics-card{
  padding:10px;
  border-radius:22px;
}

.section-mini-head{
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:10px;
  margin-bottom:8px;
}

.section-mini-head strong{
  font-size:13px;
  font-weight:1000;
}

.section-mini-head small{
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:850;
}

.breakdown-row{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto;
  gap:8px;
  padding:9px;
  border-radius:17px;
}

.breakdown-row strong,
.breakdown-row small{
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.breakdown-row strong{
  font-size:12px;
  font-weight:1000;
  text-transform:capitalize;
}

.breakdown-row small{
  margin-top:2px;
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:850;
}

.breakdown-row > span{
  font-size:12px;
  font-weight:1000;
}

.bar-track{
  grid-column:1/-1;
  height:8px;
  border-radius:999px;
  background:color-mix(in srgb,var(--muted,#64748b) 16%,transparent);
  overflow:hidden;
}

.bar-track i{
  display:block;
  height:100%;
  border-radius:inherit;
  background:var(--ba-primary);
}

.ba-empty{
  display:grid;
  place-items:center;
  align-content:center;
  gap:8px;
  min-height:180px;
  padding:18px;
  border-radius:24px;
  text-align:center;
  border-style:dashed;
}

.ba-empty-icon{
  width:50px;
  height:50px;
  display:grid;
  place-items:center;
  border-radius:20px;
  background:color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));
  font-size:24px;
}

.ba-empty h3{
  margin:0;
  font-size:17px;
  font-weight:1000;
}

.ba-empty p{
  margin:0;
  color:var(--muted,#64748b);
  font-size:12px;
  line-height:1.5;
}

.ba-sheet-backdrop{
  position:fixed;
  inset:0;
  z-index:80;
  background:rgba(2,6,23,.46);
  display:grid;
  align-items:end;
  padding:10px;
}

.ba-sheet{
  width:min(540px,100%);
  max-height:92dvh;
  overflow-y:auto;
  margin:0 auto;
  border-radius:28px 28px 20px 20px;
  padding:14px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
}

.ba-sheet.small{
  width:min(440px,100%);
}

.detail-sheet{
  width:min(720px,100%);
}

.ba-sheet-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:12px;
  margin-bottom:12px;
}

.ba-sheet-head h2{
  margin:0;
  font-size:20px;
  font-weight:1000;
  letter-spacing:-.04em;
  overflow-wrap:anywhere;
}

.ba-sheet-head p{
  margin:3px 0 0;
  color:var(--muted,#64748b);
  font-size:12px;
  font-weight:750;
  line-height:1.45;
}

.ba-sheet-head button{
  width:38px;
  height:38px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-weight:1000;
  cursor:pointer;
}

.ba-form{
  display:grid;
  grid-template-columns:1fr;
  gap:9px;
}

.ba-form label{
  display:grid;
  gap:5px;
  min-width:0;
}

.ba-form label.wide{
  grid-column:1/-1;
}

.ba-form span{
  color:var(--muted,#64748b);
  font-size:11px;
  font-weight:950;
}

.ba-sheet-actions{
  display:flex;
  justify-content:flex-end;
  flex-wrap:wrap;
  gap:8px;
  margin-top:12px;
}

.ba-sheet-actions.sticky{
  position:sticky;
  bottom:-14px;
  padding-top:10px;
  background:linear-gradient(to top,var(--card-bg,var(--surface,#fff)) 76%,transparent);
}

.ba-sheet-actions button{
  min-height:40px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  padding:0 14px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-size:12px;
  font-weight:950;
  cursor:pointer;
}

.ba-sheet-actions button.primary{
  border-color:var(--ba-primary);
  background:var(--ba-primary);
  color:#fff;
}

.payment-insights{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:7px;
  margin-bottom:10px;
}

.payment-insights span{
  display:grid;
  gap:2px;
  padding:9px;
  border-radius:16px;
  background:color-mix(in srgb,var(--muted,#64748b) 7%,transparent);
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:850;
}

.payment-insights b{
  color:var(--text,#111827);
  font-size:12px;
  font-weight:1000;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ba-menu-list{
  display:grid;
  gap:8px;
  margin-top:10px;
}

.ba-menu-list button{
  width:100%;
  display:grid;
  grid-template-columns:auto minmax(0,1fr);
  grid-template-rows:auto auto;
  column-gap:10px;
  text-align:left;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:18px;
  padding:10px;
  background:color-mix(in srgb,var(--muted,#64748b) 5%,transparent);
  color:var(--text,#111827);
  cursor:pointer;
}

.ba-menu-list button.active{
  border-color:var(--ba-primary);
  background:color-mix(in srgb,var(--ba-primary) 11%,transparent);
}

.ba-menu-list span{
  grid-row:1 / span 2;
  width:32px;
  height:32px;
  border-radius:13px;
  display:grid;
  place-items:center;
  background:color-mix(in srgb,var(--ba-primary) 12%,transparent);
  color:var(--ba-primary);
  font-weight:1000;
}

.ba-menu-list b{
  font-size:13px;
  font-weight:1000;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ba-menu-list small{
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:800;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.safety-note{
  display:grid;
  gap:3px;
  margin-bottom:10px;
  padding:10px;
  border-radius:18px;
  background:color-mix(in srgb,var(--ba-primary) 8%,var(--card-bg,#fff));
}

.safety-note strong{
  font-size:12px;
  font-weight:1000;
}

.safety-note span{
  color:var(--muted,#64748b);
  font-size:11px;
  line-height:1.45;
  font-weight:800;
}

.detail-grid{
  display:grid;
  grid-template-columns:1fr;
  gap:8px;
}

.detail-item{
  min-width:0;
  padding:9px;
  border-radius:17px;
  background:color-mix(in srgb,var(--muted,#64748b) 5%,transparent);
}

.detail-item span{
  display:block;
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:950;
  text-transform:uppercase;
  letter-spacing:.05em;
}

.detail-item strong{
  display:block;
  margin-top:3px;
  font-size:12px;
  font-weight:1000;
  overflow-wrap:anywhere;
}

.confirm-box{
  display:grid;
  gap:8px;
  margin-top:10px;
  padding:10px;
  border-radius:20px;
}

@media(min-width:680px){
  .ba-page{
    padding:calc(12px * var(--local-density-scale,1));
  }

  .ba-list{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .payment-row{
    min-height:68px;
  }

  .analytics-grid{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .detail-grid,
  .ba-form.compact{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .detail-item.wide{
    grid-column:1/-1;
  }
}

@media(min-width:1040px){
  .ba-list{
    grid-template-columns:repeat(3,minmax(0,1fr));
  }
}

@media(min-width:1280px){
  .ba-list{
    grid-template-columns:repeat(4,minmax(0,1fr));
  }

  .payment-row{
    min-height:64px;
  }
}

@media(max-width:520px){
  .ba-search-card{
    gap:6px;
    padding:7px;
    border-radius:22px;
  }

  .payment-insights{
    grid-template-columns:1fr;
  }
}
`;var tr=r(58642);let tt=["schools","branches","academicStructures","academicPeriods","organizations","students","teachers","parents","studentParents","classes","subjects","programs","curriculums","curriculumPathways","curriculumSubjects","classSubjects","subjectPrerequisites","studentCurriculums","subjectOfferings","assignments","classTeachers","studentEnrollments","assessmentApplicabilities","gradingSystems","gradeRules","assessmentStructures","assessmentStructureItems","assessmentComponents","assessmentEntries","computedResults","attendance","teacherAttendance","reportCards","reportCardItems","studentReportSnapshots","studentPromotions","feeStructures","payments","income","expenses","currencies","schoolCurrencySettings","paymentIntents","paymentTransactions","paymentProviderEvents","paymentRefunds","studentFeeInvoices","studentFeeInvoiceItems","studentFeePayments","staffPayrollProfiles","payrollRuns","payrollItems","staffPaymentRecords","announcements","announcementRecipients","messageThreads","messages","communicationLogs","notificationTemplates","schoolBranchSettings","calendarEvents","calendarEventParticipants","calendarEventReminders","calendarEventResponses","scheduleTimetables","scheduleSessions","scheduleResources","scheduleConflicts"],ti=["users","appUsers","accountUsers","userMemberships","memberships","permissionRules","accounts","accountSubscriptions","subscriptionPlans","invoices","appPayments","billingEvents","syncDevices","syncConflicts","apiClients","apiKeys","webhooks","webhookLogs","integrationMappings","auditLogs","backgroundJobs","storageUsage","accountFeatureFlags","accountSystemSettings","notificationDeliveryLogs"],tn=e=>String(e||"").trim(),ts=e=>Array.from(new Set(e)).filter(Boolean),to=e=>u.db[e]||null;async function tl(e){let a=to(e);return a?.toArray?a.toArray():[]}function tc(e,a){return!!e&&!0!==e.isDeleted&&(!e.accountId||e.accountId===a)}function td(e){return String(e?.syncStatus??e?.synced??e?.status??"").toLowerCase()}function tp(e){return["pending","local","dirty","queued","unsynced"].includes(td(e))||e?.synced===!1}function tb(e){return["synced","success","clean","done"].includes(td(e))||e?.synced===!0}function tu(e){if(!e)return 0;if("number"==typeof e)return e;if("bigint"==typeof e)return Number(e);let a=new Date(e).getTime();return Number.isFinite(a)?a:0}function tm(e){return tn(e.deviceName||e.userAgent||e.ua||e.deviceId||e.id)}function th(e){let a=e||"",r=a.toLowerCase(),t=a.match(/(Chrome|CriOS|Edg|Firefox|FxiOS|Safari|OPR)\/?\s*(\d+)?/i),i=t?.[1]?t[1].replace("CriOS","Chrome").replace("FxiOS","Firefox").replace("Edg","Edge").replace("OPR","Opera"):"Browser",n=t?.[2]||"",s="Unknown",o="\uD83D\uDCF1",l="Device";if(r.includes("windows nt"))s="Windows",o="\uD83D\uDCBB",l="Windows PC";else if(r.includes("android")){let e=a.match(/Android[^;)]*;\s*([^;)]+?)(?:\s+Build|\)|;)/i)?.[1]?.trim();s="Android",o="\uD83D\uDCF1",l=e?`Android \xb7 ${e}`:"Android Phone"}else r.includes("iphone")?(s="iOS",o="\uD83D\uDCF1",l="iPhone"):r.includes("ipad")?(s="iPadOS",o="\uD83D\uDCF1",l="iPad"):r.includes("mac os")||r.includes("macintosh")?(s="macOS",o="\uD83D\uDCBB",l="Mac"):r.includes("linux")&&(s="Linux",o="\uD83D\uDCBB",l="Linux Device");return{icon:o,os:s,label:l,browser:`${i}${n?` ${n}`:""}`,browserKey:`${i.toLowerCase()}:${n||"x"}`}}function tx(e){let a=th(tm(e)),r=tn(e.deviceName),t=/^mozilla\//i.test(r)||r.length>80,i=r&&!t?r:a.label,n=tn(e.platform),s=tn(e.appVersion),o=Number(e.__userCount||+!!e.userId);return{...a,name:i,subtitle:`${a.browser}${n?` \xb7 ${n}`:""}${s?` \xb7 App ${s}`:""}${o>1?` \xb7 ${o} users`:""}`,userLabel:o>1?`${o} linked users`:e.userId?`User ${e.userId}`:"No linked user"}}function tg(e){let a=tm(e).toLowerCase().replace(/\s+/g," ").trim(),r=th(a),t=tn(e.platform).toLowerCase();if(a.includes("mozilla/")||a.includes("chrome")||a.includes("android")||a.includes("windows nt"))return`ua:${r.os.toLowerCase()}:${r.browserKey}:${t||"platform"}:${r.label.toLowerCase()}`;let i=tn(e.deviceId);if(i)return`device:${i.toLowerCase()}`;let n=tn(e.deviceName).toLowerCase();return`fallback:${n||"unknown"}:${t||"unknown"}`}function tf(e){let a=tu(e);if(!a)return"Not set";try{return new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(a))}catch{return"Not set"}}function tv(e,a){return a>0?"red":e>0?"orange":"green"}function ty(e){try{return new Intl.NumberFormat("en-GH").format(e)}catch{return String(e)}}function tw({children:e,tone:a="gray"}){return(0,n.jsx)("span",{className:`ba-chip ${a}`,children:e})}function tj(){var e;let a=(0,c.useRouter)(),{accountId:r,authenticated:t,loading:i}=(0,d.F)(),{settings:o,loading:l}=(0,p.t)(),b=o?.primaryColor||"var(--primary-color, #2563eb)",[u,m]=(0,s.useState)(!0),[h,x]=(0,s.useState)(!1),[g,f]=(0,s.useState)(!1),[v,y]=(0,s.useState)("cards"),[w,j]=(0,s.useState)("all"),[k,N]=(0,s.useState)("school"),[S,C]=(0,s.useState)(""),[I,A]=(0,s.useState)(!1),[z,M]=(0,s.useState)(!1),[$,P]=(0,s.useState)(null),[F,T]=(0,s.useState)(null),[R,D]=(0,s.useState)(null),[E,L]=(0,s.useState)([]),[B,U]=(0,s.useState)([]),[O,_]=(0,s.useState)([]);(0,s.useEffect)(()=>{!i&&(t&&r||a.replace("/login"))},[i,t,r,a]);let H=(e,a)=>{D({tone:e,message:a}),window.setTimeout(()=>D(e=>e?.message===a?null:e),4200)};async function K(){if(!t||!r)return void m(!1);try{var e;let a;m(!0);let t=(await tl("syncConflicts")).filter(e=>!e.accountId||e.accountId===r),i=new Map;t.forEach(e=>{let a,r,t=tn(e.tableName);t&&(e.status&&"open"!==(a=e.status,tn(a).toLowerCase())&&"pending"!==(r=e.status,tn(r).toLowerCase())||i.set(t,(i.get(t)||0)+1))});let n=[],s=async(e,a)=>{let t=to(e);if(!t?.toArray)return;let s=(await t.toArray()).filter(e=>tc(e,r));n.push({tableName:e,category:a,total:s.length,pending:s.filter(tp).length,synced:s.filter(tb).length,deleted:s.filter(e=>!0===e.isDeleted).length,conflicts:i.get(e)||0,latestUpdatedAt:s.reduce((e,a)=>Math.max(e,tu(a.updatedAt||a.createdAt)),0)})};for(let e of ts(tt))await s(e,"school");for(let e of ts(ti))await s(e,"platform");L(n.sort((e,a)=>a.pending-e.pending||a.conflicts-e.conflicts||a.total-e.total||e.tableName.localeCompare(a.tableName))),U((e=(await tl("syncDevices")).filter(e=>!e.accountId||e.accountId===r),a=new Map,e.forEach(e=>{let r,t,i=tg(e),n=a.get(i);a.set(i,n?(r=new Set,[n.userId,e.userId,...n.__users||[],...e.__users||[]].forEach(e=>{let a=tn(e);a&&r.add(a)}),t=tu(e.lastSeenAt||e.updatedAt||e.createdAt)>=tu(n.lastSeenAt||n.updatedAt||n.createdAt)?e:n,{...n,...t,active:!1!==n.active||!1!==e.active,__users:Array.from(r),__userCount:r.size}):{...e,__users:e.userId?[e.userId]:[],__userCount:+!!e.userId})}),Array.from(a.values()).sort((e,a)=>{let r=tu(a.lastSeenAt||a.updatedAt||a.createdAt),t=tu(e.lastSeenAt||e.updatedAt||e.createdAt),i=tx(e).name,n=tx(a).name;return r-t||i.localeCompare(n)}))),_(t.sort((e,a)=>tu(a.updatedAt||a.createdAt)-tu(e.updatedAt||e.createdAt)))}catch(e){H("error",e?.message||"Unable to read local sync and backup data.")}finally{m(!1)}}(0,s.useEffect)(()=>{i||l||K()},[t,r,i,l]);let q=(0,s.useMemo)(()=>{let e=E.reduce((e,a)=>e+a.total,0),a=E.reduce((e,a)=>e+a.pending,0),r=E.reduce((e,a)=>e+a.synced,0),t=E.reduce((e,a)=>e+a.deleted,0),i=E.reduce((e,a)=>Math.max(e,a.latestUpdatedAt||0),0),n=O.filter(e=>!e.status||["open","pending"].includes(tn(e.status).toLowerCase())).length;return{tables:E.length,schoolTables:E.filter(e=>"school"===e.category).length,platformTables:E.filter(e=>"platform"===e.category).length,totalRecords:e,pending:a,synced:r,deleted:t,devices:B.length,openConflicts:n,latest:i,healthTone:tv(a,n),healthLabel:n?"Conflicts":a?"Pending":"Healthy"}},[O,B.length,E]),G=(0,s.useMemo)(()=>+("all"!==w),[w]),Y=(0,s.useMemo)(()=>{let e=S.trim().toLowerCase();return E.filter(a=>("pending"!==w||!(a.pending<=0))&&("synced"!==w||!(a.synced<=0))&&("deleted"!==w||!(a.deleted<=0))&&("conflicts"!==w||!(a.conflicts<=0))&&("empty"!==w||!(a.total>0))&&(!e||`${a.tableName} ${a.category}`.toLowerCase().includes(e)))},[w,S,E]),V=(0,s.useMemo)(()=>{let e=S.trim().toLowerCase();return O.filter(a=>!e||`${a.tableName||""} ${a.status||""} ${a.deviceId||""} ${a.cloudId||""} ${a.localId||""}`.toLowerCase().includes(e))},[O,S]),W=(0,s.useMemo)(()=>[{label:"School tables",value:q.schoolTables},{label:"Platform cache",value:q.platformTables},{label:"Pending records",value:q.pending},{label:"Synced records",value:q.synced},{label:"Deleted records",value:q.deleted},{label:"Open conflicts",value:q.openConflicts}],[q]);async function J(){if(!t||!r)return void H("error","Sign in before running sync.");try{x(!0),H("info","Sync request started.");try{await (0,aj.AT)("/sync/push",{method:"POST",body:JSON.stringify({accountId:r})}),H("success","Sync request completed. Local health refreshed.")}catch(e){H("error",e?.message||"Live sync endpoint was unavailable. Local records remain safe.")}await K()}finally{x(!1)}}async function Z(e=k){if(!r)return void H("error","Sign in before exporting a backup.");try{var a,t;let i,n,s;f(!0);let o="school"===e?tt:"platform"===e?ti:[...tt,...ti],l={};for(let e of ts(o)){let a=to(e);a?.toArray&&(l[e]=(await a.toArray()).filter(e=>tc(e,r)))}a=`eleeveon-${e}-backup-${Date.now()}.json`,t={accountId:r,scope:e,exportedAt:new Date().toISOString(),source:"Eleeveon Schools PWA local IndexedDB",tableCount:Object.keys(l).length,recordCount:Object.values(l).reduce((e,a)=>e+a.length,0),tables:l},i=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=URL.createObjectURL(i),(s=document.createElement("a")).href=n,s.download=a,s.click(),URL.revokeObjectURL(n),H("success",`${"full"===e?"Full":"platform"===e?"Platform":"School"} backup exported.`)}catch(e){H("error",e?.message||"Backup export failed.")}finally{f(!1)}}async function Q(e){let a=to("syncConflicts"),r=e.id;if(!a||null==r)return void H("error","This conflict cannot be updated locally because it has no saved id.");try{let t={status:"reviewed",resolution:e.resolution||"Reviewed locally",updatedAt:new Date().toISOString()};a.update?await a.update(r,t):a.put&&await a.put({...e,...t}),T(null),H("success","Conflict marked reviewed locally."),await K()}catch(e){H("error",e?.message||"Unable to update conflict locally.")}}return i||l||u?(0,n.jsx)(tk,{primary:b,title:"Opening Sync & Backup...",text:"Reading local database health, sync queues, devices and conflicts."}):t&&r?(0,n.jsxs)("main",{className:"ba-page",style:{"--ba-primary":b},children:[(0,n.jsx)("style",{children:tR}),R&&(0,n.jsxs)("section",{className:`ba-toast ${R.tone}`,children:[R.message,(0,n.jsx)("button",{type:"button",onClick:()=>D(null),"aria-label":"Close notification",children:"✕"})]}),(0,n.jsxs)("section",{className:"ba-search-card","aria-label":"Sync and backup actions",children:[(0,n.jsxs)("label",{className:"ba-search",children:[(0,n.jsx)("span",{children:"⌕"}),(0,n.jsx)("input",{value:S,onChange:e=>C(e.target.value),placeholder:"Search sync tables...","aria-label":"Search sync tables"})]}),(0,n.jsx)("button",{type:"button",className:"ba-add-inline",onClick:J,disabled:h,"aria-label":"Run sync",title:"Run sync",children:h?"…":"↻"}),(0,n.jsxs)("button",{type:"button",className:`ba-filter-button ${G?"active":""}`,onClick:()=>A(!0),"aria-label":"Open filters",title:"Filters",children:[(0,n.jsx)(tN,{}),G?(0,n.jsx)("b",{children:G}):null]}),(0,n.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>M(!0),"aria-label":"More options",title:"More options",children:"⋯"})]}),G>0&&(0,n.jsx)("section",{className:"ba-filter-chips","aria-label":"Active filters",children:(0,n.jsxs)("button",{type:"button",onClick:()=>j("all"),children:["Filter: ","pending"===(e=w)?"Pending only":"synced"===e?"Synced only":"deleted"===e?"Deleted only":"conflicts"===e?"Conflicts only":"empty"===e?"Empty tables":"All tables"," \xd7"]})}),"cards"===v&&(0,n.jsxs)("section",{className:"ba-list",children:[Y.map(e=>(0,n.jsx)(tS,{row:e,onOpen:()=>P(e)},e.tableName)),!Y.length&&(0,n.jsx)(tT,{icon:"☁️",title:"No sync tables found",text:"Try clearing filters or refreshing the local sync scan."})]}),"table"===v&&(0,n.jsx)(tC,{rows:Y,conflicts:O,onOpen:P}),"devices"===v&&(0,n.jsx)(tI,{devices:B}),"conflicts"===v&&(0,n.jsx)(tA,{rows:V,onOpen:T}),"analytics"===v&&(0,n.jsx)(tz,{rows:W,total:Math.max(q.totalRecords,1)}),I&&(0,n.jsx)(tM,{filter:w,setFilter:j,onClose:()=>A(!1)}),z&&(0,n.jsx)(t$,{viewMode:v,setViewMode:e=>{y(e),M(!1)},backupScope:k,setBackupScope:N,onRefresh:async()=>{M(!1),await K()},onRunSync:async()=>{M(!1),await J()},onExport:async e=>{M(!1),await Z(e)},syncing:h,backingUp:g,onClose:()=>M(!1)}),$&&(0,n.jsx)(tP,{row:$,conflicts:O.filter(e=>e.tableName===$.tableName),onClose:()=>P(null)}),F&&(0,n.jsx)(tF,{conflict:F,onReviewed:Q,onClose:()=>T(null)})]}):(0,n.jsx)(tk,{primary:b,title:"Redirecting to login...",text:"You must sign in before viewing sync and backup tools."})}function tk({primary:e,title:a,text:r}){return(0,n.jsxs)("main",{className:"ba-page",style:{"--ba-primary":e},children:[(0,n.jsx)("style",{children:tR}),(0,n.jsxs)("section",{className:"ba-state",children:[(0,n.jsx)("div",{className:"ba-spinner"}),(0,n.jsx)("h2",{children:a}),(0,n.jsx)("p",{children:r})]})]})}function tN(){return(0,n.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M4 7h9"}),(0,n.jsx)("path",{d:"M17 7h3"}),(0,n.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,n.jsx)("path",{d:"M4 17h3"}),(0,n.jsx)("path",{d:"M11 17h9"}),(0,n.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function tS({row:e,onOpen:a}){let r=tv(e.pending,e.conflicts);return(0,n.jsxs)("button",{type:"button",className:"student-row",onClick:a,children:[(0,n.jsx)("span",{className:`ba-sync-avatar ${r}`,children:"school"===e.category?"\uD83C\uDFEB":"⚙️"}),(0,n.jsxs)("span",{className:"student-main",children:[(0,n.jsx)("strong",{children:e.tableName}),(0,n.jsxs)("small",{children:[e.category," \xb7 ",ty(e.total)," record(s) \xb7 ",tf(e.latestUpdatedAt)]}),(0,n.jsxs)("em",{children:[e.pending," pending \xb7 ",e.synced," synced \xb7 ",e.conflicts," conflict(s)"]})]}),(0,n.jsxs)("span",{className:"student-side",children:[(0,n.jsx)("span",{className:`status-dot-mini ${r}`,title:r,"aria-label":r}),(0,n.jsx)("i",{children:"⋯"})]})]})}function tC({rows:e,conflicts:a,onOpen:r}){return(0,n.jsx)("section",{className:"ba-table-card",children:(0,n.jsxs)("div",{className:"ba-table-scroll",children:[(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsxs)("th",{children:["Tables (",e.length,")"]}),(0,n.jsx)("th",{children:"Category"}),(0,n.jsx)("th",{children:"Total"}),(0,n.jsx)("th",{children:"Pending"}),(0,n.jsx)("th",{children:"Synced"}),(0,n.jsx)("th",{children:"Deleted"}),(0,n.jsx)("th",{children:"Conflicts"}),(0,n.jsx)("th",{children:"Latest"}),(0,n.jsx)("th",{children:"Actions"})]})}),(0,n.jsx)("tbody",{children:e.map(e=>{let t=a.filter(a=>a.tableName===e.tableName).length;return(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{children:[(0,n.jsx)("strong",{children:e.tableName}),(0,n.jsxs)("span",{children:[e.category," table"]})]}),(0,n.jsx)("td",{children:(0,n.jsx)(tw,{tone:"school"===e.category?"blue":"purple",children:e.category})}),(0,n.jsx)("td",{children:e.total}),(0,n.jsx)("td",{children:(0,n.jsx)(tw,{tone:e.pending?"orange":"gray",children:e.pending})}),(0,n.jsx)("td",{children:(0,n.jsx)(tw,{tone:e.synced?"green":"gray",children:e.synced})}),(0,n.jsx)("td",{children:(0,n.jsx)(tw,{tone:e.deleted?"red":"gray",children:e.deleted})}),(0,n.jsx)("td",{children:(0,n.jsx)(tw,{tone:t?"red":"gray",children:t})}),(0,n.jsx)("td",{children:tf(e.latestUpdatedAt)}),(0,n.jsx)("td",{children:(0,n.jsx)("div",{className:"ba-table-actions",children:(0,n.jsx)("button",{type:"button",onClick:()=>r(e),children:"Open"})})})]},e.tableName)})})]}),!e.length&&(0,n.jsx)("div",{className:"ba-empty-table",children:"No table matches your filters."})]})})}function tI({devices:e}){return(0,n.jsxs)("section",{className:"ba-list",children:[e.map((e,a)=>{let r=tx(e),t=tf(e.lastSeenAt||e.updatedAt||e.createdAt);return(0,n.jsx)("article",{className:"ba-device-card compact",children:(0,n.jsxs)("div",{className:"ba-device-head",children:[(0,n.jsx)("span",{className:"ba-sync-avatar blue",children:r.icon}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:r.name}),(0,n.jsx)("p",{children:r.subtitle}),(0,n.jsxs)("em",{children:[r.userLabel," \xb7 Last seen ",t]})]}),(0,n.jsx)(tw,{tone:!1===e.active?"red":"green",children:!1===e.active?"Inactive":"Active"})]})},String(tg(e)||a))}),!e.length&&(0,n.jsx)(tT,{icon:"\uD83D\uDCF1",title:"No devices found",text:"No sync devices have been cached locally yet."})]})}function tA({rows:e,onOpen:a}){return(0,n.jsxs)("section",{className:"ba-list",children:[e.map((e,r)=>{let t=!e.status||["open","pending"].includes(tn(e.status).toLowerCase());return(0,n.jsxs)("button",{type:"button",className:"student-row",onClick:()=>a(e),children:[(0,n.jsx)("span",{className:`ba-sync-avatar ${t?"red":"green"}`,children:"!"}),(0,n.jsxs)("span",{className:"student-main",children:[(0,n.jsx)("strong",{children:e.tableName||"Unknown table"}),(0,n.jsxs)("small",{children:["Local #",e.localId||"—"," \xb7 Cloud ",e.cloudId||"not linked"]}),(0,n.jsxs)("em",{children:[e.deviceId||"No device"," \xb7 ",tf(e.createdAt)]})]}),(0,n.jsxs)("span",{className:"student-side",children:[(0,n.jsx)("span",{className:`status-dot-mini ${t?"red":"green"}`}),(0,n.jsx)("i",{children:"⋯"})]})]},String(e.id||`${e.tableName}-${e.localId}-${r}`))}),!e.length&&(0,n.jsx)(tT,{icon:"✅",title:"No conflicts found",text:"No sync conflicts match your search."})]})}function tz({rows:e,total:a}){return(0,n.jsx)("section",{className:"ba-analysis-grid",children:e.map(e=>{let r=a?Math.min(100,Math.round(e.value/a*100)):0;return(0,n.jsxs)("article",{className:"ba-analysis",children:[(0,n.jsx)("span",{children:e.label}),(0,n.jsx)("strong",{children:ty(e.value)}),(0,n.jsx)("div",{className:"ba-progress",children:(0,n.jsx)("i",{style:{width:`${r}%`}})})]},e.label)})})}function tM({filter:e,setFilter:a,onClose:r}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Filters"}),(0,n.jsx)("p",{children:"Keep the sync register focused."})]}),(0,n.jsx)("button",{type:"button",onClick:r,"aria-label":"Close filters",children:"✕"})]}),(0,n.jsx)("div",{className:"ba-menu-list",children:[{value:"all",label:"All tables",note:"Show every readable local table"},{value:"pending",label:"Pending only",note:"Tables with local changes waiting for sync"},{value:"synced",label:"Synced only",note:"Tables with synced records"},{value:"deleted",label:"Deleted only",note:"Tables containing soft-deleted rows"},{value:"conflicts",label:"Conflicts only",note:"Tables needing conflict review"},{value:"empty",label:"Empty tables",note:"Readable tables without account records"}].map(r=>(0,n.jsxs)("button",{type:"button",className:e===r.value?"active":"",onClick:()=>a(r.value),children:[(0,n.jsx)("span",{children:e===r.value?"✓":"⌁"}),(0,n.jsx)("b",{children:r.label}),(0,n.jsx)("small",{children:r.note})]},r.value))}),(0,n.jsxs)("div",{className:"ba-sheet-actions",children:[(0,n.jsx)("button",{type:"button",onClick:()=>a("all"),children:"Clear"}),(0,n.jsx)("button",{type:"button",className:"primary",onClick:r,children:"Apply"})]})]})})}function t$({viewMode:e,setViewMode:a,backupScope:r,setBackupScope:t,onRefresh:i,onRunSync:s,onExport:o,syncing:l,backingUp:c,onClose:d}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"More"}),(0,n.jsx)("p",{children:"Switch views, run sync, refresh or export a safe local backup."})]}),(0,n.jsx)("button",{type:"button",onClick:d,"aria-label":"Close more options",children:"✕"})]}),(0,n.jsxs)("div",{className:"ba-menu-list",children:[[{value:"cards",label:"Cards",note:"Compact table health register",icon:"▦"},{value:"table",label:"Table view",note:"Dense laptop-friendly records",icon:"☷"},{value:"devices",label:"Devices",note:"Cached sync devices",icon:"\uD83D\uDCF1"},{value:"conflicts",label:"Conflicts",note:"Rows needing review",icon:"!"},{value:"analytics",label:"Analytics",note:"Health distribution",icon:"◔"}].map(r=>(0,n.jsxs)("button",{type:"button",className:e===r.value?"active":"",onClick:()=>a(r.value),children:[(0,n.jsx)("span",{children:r.icon}),(0,n.jsx)("b",{children:r.label}),(0,n.jsx)("small",{children:r.note})]},r.value)),(0,n.jsxs)("button",{type:"button",onClick:s,disabled:l,children:[(0,n.jsx)("span",{children:"↻"}),(0,n.jsx)("b",{children:l?"Syncing":"Run sync"}),(0,n.jsx)("small",{children:"Ask backend to process local pending records"})]}),(0,n.jsxs)("button",{type:"button",onClick:i,children:[(0,n.jsx)("span",{children:"⟳"}),(0,n.jsx)("b",{children:"Refresh scan"}),(0,n.jsx)("small",{children:"Reload local tables, devices and conflicts"})]})]}),(0,n.jsxs)("section",{className:"ba-backup-picker",children:[(0,n.jsx)("span",{children:"Backup scope"}),(0,n.jsx)("div",{children:["school","platform","full"].map(e=>(0,n.jsx)("button",{type:"button",className:r===e?"active":"",onClick:()=>t(e),children:e},e))}),(0,n.jsx)("button",{type:"button",className:"ba-export-button",disabled:c,onClick:()=>o(r),children:c?"Preparing...":"Export backup"})]})]})})}function tP({row:e,conflicts:a,onClose:r}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-profile",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:e.tableName}),(0,n.jsxs)("p",{children:[e.category," table \xb7 latest ",tf(e.latestUpdatedAt)]})]}),(0,n.jsx)("button",{type:"button",onClick:r,"aria-label":"Close table details",children:"✕"})]}),(0,n.jsxs)("div",{className:"student-detail-strip",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Total"}),e.total]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Pending"}),e.pending]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Synced"}),e.synced]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Deleted"}),e.deleted]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Conflicts"}),a.length]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Status"}),tv(e.pending,a.length)]})]}),(0,n.jsx)("p",{className:"ba-sheet-note",children:"This screen summarizes IndexedDB records only. Use backup export before clearing local data or changing devices."})]})})}function tF({conflict:e,onReviewed:a,onClose:r}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-profile",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:e.tableName||"Unknown table"}),(0,n.jsxs)("p",{children:["Local #",e.localId||"—"," \xb7 Cloud ",e.cloudId||"not linked"]})]}),(0,n.jsx)("button",{type:"button",onClick:r,"aria-label":"Close conflict actions",children:"✕"})]}),(0,n.jsxs)("div",{className:"student-detail-strip",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Status"}),e.status||"open"]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Device"}),e.deviceId||"Not set"]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{children:"Created"}),tf(e.createdAt)]})]}),(0,n.jsx)("div",{className:"ba-menu-list",children:(0,n.jsxs)("button",{type:"button",onClick:()=>a(e),children:[(0,n.jsx)("span",{children:"✓"}),(0,n.jsx)("b",{children:"Mark reviewed locally"}),(0,n.jsx)("small",{children:"This does not resolve server truth; it only updates the local cache."})]})})]})})}function tT({icon:e,title:a,text:r}){return(0,n.jsxs)("section",{className:"ba-empty",children:[(0,n.jsx)("div",{className:"ba-empty-icon",children:e}),(0,n.jsx)("h3",{children:a}),(0,n.jsx)("p",{children:r})]})}let tR=`
@keyframes spin { to { transform: rotate(360deg); } }
.ba-page { --ease: cubic-bezier(.2,.8,.2,1); min-height: 100dvh; width: 100%; max-width: 100%; min-width: 0; padding: calc(8px * var(--local-density-scale, 1)); padding-bottom: max(40px, env(safe-area-inset-bottom)); background: radial-gradient(circle at top left, color-mix(in srgb, var(--ba-primary) 9%, transparent), transparent 30rem), var(--bg, #f7f8fb); color: var(--text, #111827); font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif); font-size: var(--font-size, 14px); overflow-x: hidden; }
.ba-page *, .ba-page *::before, .ba-page *::after { box-sizing: border-box; min-width: 0; }
.ba-page button, .ba-page input, .ba-page select { font: inherit; max-width: 100%; }
.ba-page button { -webkit-tap-highlight-color: transparent; }
.ba-page input, .ba-page select { width: 100%; min-height: 44px; border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10))); border-radius: 16px; padding: 0 12px; background: var(--input-bg, var(--surface, #fff)); color: var(--input-text, var(--text, #111827)); outline: none; font-weight: 750; }
.ba-page input:focus, .ba-page select:focus { border-color: color-mix(in srgb, var(--ba-primary) 52%, var(--border, rgba(0,0,0,.10))); box-shadow: 0 0 0 4px color-mix(in srgb, var(--ba-primary) 12%, transparent); }
.ba-state, .ba-search-card, .ba-table-card, .ba-analysis, .ba-empty, .ba-sheet, .student-row, .ba-device-card { background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); box-shadow: 0 12px 28px rgba(15,23,42,.045); }
.ba-state { min-height: min(420px, calc(100dvh - 32px)); width: min(520px, 100%); margin: 0 auto; display: grid; place-items: center; align-content: center; gap: 10px; padding: 22px; border-radius: 28px; text-align: center; }
.ba-spinner { width: 38px; height: 38px; border-radius: 999px; border: 4px solid color-mix(in srgb, var(--ba-primary) 18%, transparent); border-top-color: var(--ba-primary); animation: spin .8s linear infinite; }
.ba-state h2 { margin: 0; font-size: 22px; font-weight: 1000; letter-spacing: -.04em; }
.ba-state p { max-width: 34rem; margin: 0; color: var(--muted, #64748b); font-size: 13px; line-height: 1.6; }
.ba-toast { position: sticky; top: 8px; z-index: 40; display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; padding: 12px 14px; border-radius: 18px; font-size: 13px; font-weight: 850; box-shadow: 0 18px 40px rgba(15,23,42,.12); }
.ba-toast.success { background: rgba(34,197,94,.14); color: #166534; } .ba-toast.error { background: rgba(239,68,68,.12); color: #991b1b; } .ba-toast.info { background: rgba(59,130,246,.13); color: #1d4ed8; }
.ba-toast button { border: 0; background: transparent; color: currentColor; font-weight: 1000; cursor: pointer; }
.ba-icon-button, .ba-filter-button, .ba-add-inline { width: 42px; height: 42px; border: 1px solid var(--border, rgba(0,0,0,.10)); border-radius: 999px; display: grid; place-items: center; background: var(--card-bg, var(--surface,#fff)); color: var(--text,#111827); font-size: 18px; font-weight: 1000; cursor: pointer; box-shadow: 0 10px 22px rgba(15,23,42,.045); }
.ba-add-inline { flex: 0 0 42px; border-color: var(--ba-primary); background: var(--ba-primary); color: #fff; font-size: 20px; line-height: 1; box-shadow: 0 12px 28px color-mix(in srgb, var(--ba-primary) 22%, transparent); }
.ba-add-inline:disabled { opacity: .72; cursor: not-allowed; }
.ba-search-card { display: grid; grid-template-columns: minmax(0, 1fr) auto auto auto; gap: 8px; align-items: center; margin-top: 2px; padding: 8px; border-radius: 24px; }
.ba-search { min-width: 0; display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 8px; min-height: 44px; padding: 0 11px; border-radius: 18px; background: color-mix(in srgb, var(--muted,#64748b) 7%, transparent); }
.ba-search span { color: var(--muted,#64748b); font-size: 17px; font-weight: 1000; }
.ba-search input { min-height: 42px; border: 0; padding: 0; border-radius: 0; background: transparent; box-shadow: none; font-size: 14px; }
.ba-slider-icon { width: 21px; height: 21px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
.ba-filter-button { position: relative; background: color-mix(in srgb, var(--ba-primary) 8%, var(--card-bg,#fff)); color: var(--ba-primary); }
.ba-filter-button.active { background: var(--ba-primary); color: #fff; border-color: var(--ba-primary); }
.ba-filter-button b { position: absolute; top: -4px; right: -4px; min-width: 19px; height: 19px; display: grid; place-items: center; border-radius: 999px; background: #ef4444; color: #fff; font-size: 10px; border: 2px solid var(--card-bg,#fff); }
.ba-filter-chips { display: flex; gap: 7px; overflow-x: auto; padding: 8px 1px 0; scrollbar-width: none; }
.ba-filter-chips button { flex: 0 0 auto; min-height: 31px; border: 0; border-radius: 999px; padding: 0 10px; background: color-mix(in srgb, var(--ba-primary) 11%, transparent); color: var(--ba-primary); font-size: 11px; font-weight: 950; white-space: nowrap; cursor: pointer; }
.ba-list { display: grid; gap: 7px; margin-top: 10px; }
.student-row { width: 100%; display: grid; grid-template-columns: auto minmax(0,1fr) auto; align-items: center; gap: 10px; padding: 10px; border-radius: 22px; text-align: left; cursor: pointer; transition: transform .16s var(--ease), box-shadow .16s var(--ease), border-color .16s var(--ease); }
.student-row:hover { transform: translateY(-1px); border-color: color-mix(in srgb, var(--ba-primary) 24%, var(--border, rgba(0,0,0,.10))); box-shadow: 0 16px 34px rgba(15,23,42,.07); }
.ba-sync-avatar { width: 48px; height: 48px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 18px; color: #fff; font-size: 17px; font-weight: 1000; box-shadow: 0 12px 24px rgba(15,23,42,.12); background: var(--ba-primary); }
.ba-sync-avatar.green { background: #22c55e; } .ba-sync-avatar.red { background: #ef4444; } .ba-sync-avatar.orange { background: #f59e0b; } .ba-sync-avatar.blue { background: #3b82f6; } .ba-sync-avatar.gray { background: var(--muted,#64748b); } .ba-sync-avatar.purple { background: #8b5cf6; }
.student-main, .student-main strong, .student-main small, .student-main em { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.student-main strong { color: var(--text,#111827); font-size: 14px; font-weight: 1000; letter-spacing: -.02em; }
.student-main small { margin-top: 3px; color: var(--muted,#64748b); font-size: 12px; font-weight: 850; font-style: normal; }
.student-main em { margin-top: 3px; color: color-mix(in srgb, var(--muted,#64748b) 86%, var(--text,#111827)); font-size: 11px; font-weight: 750; font-style: normal; }
.student-side { display: grid; justify-items: end; gap: 6px; flex: 0 0 auto; }
.student-side i { color: var(--muted,#64748b); font-style: normal; font-size: 18px; font-weight: 1000; line-height: 1; }
.ba-chip { max-width: 100%; display: inline-flex; align-items: center; min-height: 24px; padding: 3px 8px; border-radius: 999px; font-size: 10px; font-weight: 950; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize; }
.ba-chip.green { background: rgba(34,197,94,.12); color: #16a34a; } .ba-chip.red { background: rgba(239,68,68,.12); color: #dc2626; } .ba-chip.blue { background: rgba(59,130,246,.12); color: #2563eb; } .ba-chip.gray { background: color-mix(in srgb,var(--muted,#64748b) 14%,transparent); color: var(--muted,#64748b); } .ba-chip.orange { background: rgba(245,158,11,.14); color: #b45309; } .ba-chip.purple { background: rgba(147,51,234,.12); color: #7e22ce; }
.status-dot-mini { width: 10px; height: 10px; display: inline-block; border-radius: 999px; background: var(--muted,#64748b); box-shadow: 0 0 0 4px color-mix(in srgb, currentColor 10%, transparent); }
.status-dot-mini.green { background: #22c55e; } .status-dot-mini.red { background: #ef4444; } .status-dot-mini.blue { background: #3b82f6; } .status-dot-mini.orange { background: #f59e0b; } .status-dot-mini.gray { background: var(--muted,#64748b); }
.ba-sheet-backdrop { position: fixed; inset: 0; z-index: 80; display: grid; place-items: end center; padding: 10px; background: rgba(15,23,42,.50); backdrop-filter: blur(12px); }
.ba-sheet { width: min(760px, 100%); max-height: min(88dvh, 760px); overflow-y: auto; padding: 14px; border-radius: 28px 28px 22px 22px; background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); box-shadow: 0 30px 90px rgba(15,23,42,.32); animation: sheetIn .18s var(--ease); }
.ba-sheet.small { width: min(520px, 100%); }
@keyframes sheetIn { from { transform: translateY(16px); opacity: .7; } to { transform: translateY(0); opacity: 1; } }
.ba-sheet-head, .ba-sheet-profile { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding-bottom: 12px; }
.ba-sheet-head h2, .ba-sheet-profile h2 { margin: 0; color: var(--text,#111827); font-size: 21px; font-weight: 1000; letter-spacing: -.05em; }
.ba-sheet-head p, .ba-sheet-profile p, .ba-sheet-note { margin: 5px 0 0; color: var(--muted,#64748b); font-size: 12px; line-height: 1.5; font-weight: 750; }
.ba-sheet-head button, .ba-sheet-profile button { width: 38px; height: 38px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; background: var(--surface,#fff); color: var(--text,#111827); font-weight: 1000; cursor: pointer; flex: 0 0 auto; }
.ba-sheet-actions { position: sticky; bottom: -14px; display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 8px; margin-top: 14px; padding: 12px 0 2px; background: linear-gradient(to top, var(--card-bg,var(--surface,#fff)) 70%, transparent); }
.ba-sheet-actions button, .ba-export-button { min-height: 42px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; padding: 0 16px; background: color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff)); color: var(--text,#111827); font-size: 12px; font-weight: 950; cursor: pointer; }
.ba-sheet-actions button.primary, .ba-export-button { border-color: var(--ba-primary); background: var(--ba-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent); }
.ba-menu-list { display: grid; gap: 8px; }
.ba-menu-list button { width: 100%; display: grid; grid-template-columns: 42px minmax(0,1fr); column-gap: 10px; align-items: center; min-height: 58px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 18px; padding: 9px; background: var(--surface,#fff); color: var(--text,#111827); text-align: left; cursor: pointer; }
.ba-menu-list button:disabled { opacity: .6; cursor: not-allowed; }
.ba-menu-list button span { grid-row: span 2; width: 42px; height: 42px; display: grid; place-items: center; border-radius: 16px; background: color-mix(in srgb, var(--ba-primary) 10%, transparent); color: var(--ba-primary); font-weight: 1000; }
.ba-menu-list button b, .ba-menu-list button small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ba-menu-list button b { font-size: 13px; font-weight: 1000; } .ba-menu-list button small { margin-top: 2px; color: var(--muted,#64748b); font-size: 11px; font-weight: 750; }
.ba-menu-list button.active { border-color: color-mix(in srgb, var(--ba-primary) 34%, var(--border,rgba(0,0,0,.10))); background: color-mix(in srgb, var(--ba-primary) 8%, var(--surface,#fff)); }
.ba-backup-picker { display: grid; gap: 8px; margin-top: 12px; padding: 12px; border-radius: 20px; background: color-mix(in srgb, var(--muted,#64748b) 7%, transparent); }
.ba-backup-picker > span { color: var(--muted,#64748b); font-size: 10px; font-weight: 1000; text-transform: uppercase; letter-spacing: .08em; }
.ba-backup-picker div { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 6px; }
.ba-backup-picker div button { min-height: 36px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; background: var(--surface,#fff); color: var(--text,#111827); font-size: 11px; font-weight: 950; text-transform: capitalize; cursor: pointer; }
.ba-backup-picker div button.active { background: var(--ba-primary); border-color: var(--ba-primary); color: #fff; }
.student-detail-strip { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 7px; margin-bottom: 10px; }
.student-detail-strip span { display: block; padding: 9px; border-radius: 16px; background: color-mix(in srgb, var(--muted,#64748b) 8%, transparent); color: var(--muted,#64748b); font-size: 11px; font-weight: 850; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.student-detail-strip b { display: block; margin-bottom: 3px; color: var(--text,#111827); font-size: 10px; text-transform: uppercase; letter-spacing: .05em; }
.ba-table-card, .ba-empty, .ba-analysis, .ba-device-card { padding: 13px; border-radius: 24px; }
.ba-table-card { margin-top: 10px; }
.ba-table-scroll { width: 100%; max-width: 100%; overflow-x: auto; border-radius: 18px; border: 1px solid var(--border,rgba(0,0,0,.08)); }
.ba-table-scroll table { width: 100%; min-width: 980px; border-collapse: collapse; background: var(--card-bg, var(--surface, var(--bg, transparent))); }
.ba-table-scroll th, .ba-table-scroll td { padding: 10px; border-bottom: 1px solid var(--border,rgba(0,0,0,.08)); vertical-align: top; text-align: left; font-size: 13px; }
.ba-table-scroll th { background: var(--table-header-bg, color-mix(in srgb, var(--ba-primary) 6%, var(--card-bg, var(--surface, var(--bg, transparent))))); color: var(--table-header-text, var(--muted, var(--text))); font-size: 11px; font-weight: 1000; text-transform: uppercase; letter-spacing: .07em; }
.ba-table-scroll td strong, .ba-table-scroll td span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .ba-table-scroll td span { margin-top: 3px; color: var(--muted,#64748b); font-size: 11px; }
.ba-table-actions { display: flex; flex-wrap: nowrap; gap: 7px; width: 100%; max-width: 100%; overflow-x: auto; scrollbar-width: none; }
.ba-table-actions button { flex: 0 0 auto; min-height: 34px; border: 1px solid var(--ba-primary); border-radius: 999px; padding: 0 10px; background: var(--ba-primary); color: #fff; font-size: 11px; font-weight: 950; cursor: pointer; white-space: nowrap; }
.ba-empty-table { padding: 22px; text-align: center; color: var(--muted,#64748b); font-weight: 850; }
.ba-device-head { display: grid; grid-template-columns: auto minmax(0,1fr) auto; align-items: start; gap: 10px; margin-bottom: 10px; }
.ba-device-head h3 { margin: 0; font-size: 15px; font-weight: 1000; letter-spacing: -.03em; }
.ba-device-head p { margin: 3px 0 0; color: var(--muted,#64748b); font-size: 12px; font-weight: 750; }
.ba-analysis-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 10px; margin-top: 10px; }
.ba-analysis span { color: var(--muted,#64748b); font-size: 11px; font-weight: 950; text-transform: uppercase; letter-spacing: .08em; }
.ba-analysis strong { display: block; margin-top: 8px; font-size: clamp(22px,7vw,30px); line-height: 1; font-weight: 1000; letter-spacing: -.06em; }
.ba-progress { height: 8px; margin-top: 12px; border-radius: 999px; background: color-mix(in srgb,var(--muted,#64748b) 18%,transparent); overflow: hidden; } .ba-progress i { display: block; height: 100%; border-radius: inherit; background: var(--ba-primary); }
.ba-empty { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 220px; text-align: center; border-style: dashed; }
.ba-empty-icon { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 22px; background: color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff)); font-size: 28px; }
.ba-empty h3 { margin: 0; font-size: 18px; font-weight: 1000; } .ba-empty p { margin: 0; color: var(--muted,#64748b); font-size: 13px; line-height: 1.6; }
@media (min-width: 680px) { .ba-page { padding: calc(12px * var(--local-density-scale,1)); padding-bottom: 44px; } .ba-search-card { grid-template-columns: minmax(0,1fr) 48px 48px 48px; } .ba-list { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; } .student-row { border-radius: 24px; padding: 12px; } .ba-analysis-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } .ba-sheet-backdrop { place-items: center; padding: 18px; } .ba-sheet { border-radius: 28px; padding: 18px; } }
@media (min-width: 1040px) { .ba-page { padding: calc(16px * var(--local-density-scale,1)); padding-bottom: 48px; } .ba-search-card, .ba-list, .ba-analysis-grid, .ba-table-card, .ba-filter-chips { max-width: 1180px; margin-left: auto; margin-right: auto; } .ba-list { grid-template-columns: repeat(3, minmax(0, 1fr)); } .ba-analysis-grid { grid-template-columns: repeat(3, minmax(0,1fr)); } }
@media (max-width: 520px) { .ba-page { padding: calc(7px * var(--local-density-scale,1)); padding-bottom: max(38px, env(safe-area-inset-bottom)); } .ba-icon-button, .ba-filter-button, .ba-add-inline { width: 40px; height: 40px; } .student-detail-strip { grid-template-columns: minmax(0,1fr); } .ba-sheet { border-radius: 24px 24px 18px 18px; padding: 12px; } .ba-sheet-actions { display: grid; grid-template-columns: minmax(0,1fr); } .ba-sheet-actions button { width: 100%; } .ba-device-head { grid-template-columns: auto minmax(0,1fr); } .ba-device-head .ba-chip { grid-column: 1 / -1; width: fit-content; } }
`;var tD=r(21092),tE=r(94862);function tL(e){let a=Number(e||0);return Number.isFinite(a)?a:0}function tB(e){if(!e)return"Not set";let a="number"==typeof e?e:new Date(e).getTime();if(!Number.isFinite(a))return"Not set";try{return new Intl.DateTimeFormat(void 0,{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(a))}catch{return"Not set"}}async function tU(e){let a=u.db[e];return a?.toArray?a.toArray():[]}function tO(e,a){return!e?.isDeleted&&(!e?.accountId||e.accountId===a)}async function t_(e){let[a,r]=await Promise.all([tU("userMemberships").then(async e=>e.length?e:tU("memberships")),tU("users").then(async e=>e.length?e:tU("accountUsers"))]),t=String(localStorage.getItem("email")||localStorage.getItem("userEmail")||"").toLowerCase(),i=a.find(a=>["owner","admin","super_admin"].includes(String(a.role))&&tO(a,e)),n=r.find(e=>String(e?.id||e?.localId||"")===String(i?.userLocalId||i?.userId||i?.accountUserId||"")||!!(t&&String(e.email||"").toLowerCase()===t)||!!(i?.email&&String(e.email||"").toLowerCase()===String(i.email).toLowerCase()));return{owner:{...i||{},...n||{},role:i?.role||"owner"},user:n,membership:i}}function tH({children:e,tone:a="gray"}){return(0,n.jsx)("span",{className:`op-chip ${a}`,children:e})}function tK({label:e,value:a,icon:r,positive:t,warning:i}){return(0,n.jsxs)("article",{className:`op-summary ${t?"positive":""} ${i?"warning":""}`,children:[(0,n.jsx)("div",{children:r}),(0,n.jsxs)("section",{children:[(0,n.jsx)("strong",{children:a}),(0,n.jsx)("span",{children:e})]})]})}function tq({label:e,value:a}){return(0,n.jsxs)("div",{className:"op-mini",children:[(0,n.jsx)("strong",{children:a}),(0,n.jsx)("span",{children:e})]})}function tG({title:e="No records",text:a}){return(0,n.jsxs)("section",{className:"op-empty",children:[(0,n.jsx)("div",{children:"\uD83D\uDCCC"}),(0,n.jsx)("h3",{children:e}),(0,n.jsx)("p",{children:a})]})}function tY({view:e,setView:a,count:r}){return(0,n.jsxs)("section",{className:"op-toolbar",children:[(0,n.jsxs)("div",{className:"op-tabs",children:[(0,n.jsx)("button",{type:"button",className:"cards"===e?"active":"",onClick:()=>a("cards"),children:"Cards"}),(0,n.jsx)("button",{type:"button",className:"table"===e?"active":"",onClick:()=>a("table"),children:"Table"}),(0,n.jsx)("button",{type:"button",className:"analytics"===e?"active":"",onClick:()=>a("analytics"),children:"Analytics"})]}),(0,n.jsxs)(tH,{children:[r," shown"]})]})}let tV=`
.op-page{min-height:100dvh;width:100%;min-width:0;padding:calc(8px * var(--local-density-scale,1));padding-bottom:max(32px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--op-primary) 10%,transparent),transparent 34rem),var(--bg,#f7f8fb);color:var(--text,#111);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);font-size:var(--font-size,14px);overflow-x:hidden}.op-page *{box-sizing:border-box}.op-page button,.op-page input,.op-page select,.op-page textarea{font:inherit;max-width:100%}.op-page input,.op-page select,.op-page textarea{width:100%;min-height:44px;border:1px solid var(--input-border,var(--border,rgba(0,0,0,.10)));border-radius:16px;padding:0 12px;background:var(--input-bg,var(--surface,#fff));color:var(--input-text,var(--text,#111));outline:none;font-weight:750}.op-page textarea{min-height:120px;padding:12px;resize:vertical;line-height:1.55}.op-state{min-height:min(420px,calc(100dvh - 32px));width:min(480px,100%);margin:0 auto;display:grid;place-items:center;align-content:center;gap:10px;padding:22px;border-radius:28px;background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.10));box-shadow:var(--shell-shadow,0 24px 60px rgba(15,23,42,.08));text-align:center}.op-state h2{margin:0;font-size:22px;letter-spacing:-.04em;font-weight:1000}.op-state p{margin:0;color:var(--muted,#64748b);line-height:1.6}.op-hero{display:flex;align-items:stretch;justify-content:space-between;gap:10px;padding:12px;border-radius:28px;background:radial-gradient(circle at 18% 8%,color-mix(in srgb,var(--op-primary) 16%,transparent),transparent 20rem),linear-gradient(135deg,var(--card-bg,var(--surface,#fff)),color-mix(in srgb,var(--op-primary) 7%,var(--card-bg,#fff)) 72%);border:1px solid var(--border,rgba(0,0,0,.10));box-shadow:0 18px 46px rgba(15,23,42,.07);overflow:hidden}.op-hero-left{min-width:0;display:flex;align-items:center;gap:10px;flex:1}.op-icon{width:48px;height:48px;flex:0 0 auto;display:grid;place-items:center;border-radius:18px;background:var(--op-primary);color:#fff;font-size:22px;box-shadow:0 12px 26px color-mix(in srgb,var(--op-primary) 28%,transparent)}.op-title{min-width:0}.op-title p,.op-title h2,.op-title span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.op-title p{margin:0 0 2px;color:var(--op-primary);font-size:10px;font-weight:950;letter-spacing:.08em;text-transform:uppercase}.op-title h2{margin:0;color:var(--text,#111);font-size:clamp(20px,5vw,30px);font-weight:1000;letter-spacing:-.06em;line-height:1}.op-title span{margin-top:3px;color:var(--muted,#64748b);font-size:12px;font-weight:750}.op-actions{display:flex;align-items:center;justify-content:flex-end;gap:8px}.op-btn,.op-primary{min-height:42px;border-radius:999px;padding:0 14px;font-weight:950;cursor:pointer}.op-btn{border:1px solid var(--border,rgba(0,0,0,.10));background:var(--surface,#fff);color:var(--text,#111)}.op-primary{border:0;background:var(--op-primary);color:#fff;box-shadow:0 14px 32px color-mix(in srgb,var(--op-primary) 25%,transparent)}.op-summary-grid,.op-list,.op-mini-grid,.op-breakdown-grid{display:grid;gap:8px}.op-summary-grid{margin-top:10px;grid-template-columns:repeat(2,minmax(0,1fr))}.op-summary,.op-card,.op-panel,.op-toolbar,.op-filter,.op-empty,.op-breakdown{background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.10));box-shadow:0 12px 28px rgba(15,23,42,.045)}.op-summary{min-width:0;display:flex;align-items:center;gap:10px;padding:12px;border-radius:22px;overflow:hidden}.op-summary.positive{background:linear-gradient(135deg,rgba(34,197,94,.10),var(--card-bg,var(--surface,#fff)))}.op-summary.warning{background:linear-gradient(135deg,rgba(245,158,11,.10),var(--card-bg,var(--surface,#fff)))}.op-summary>div:first-child{width:36px;height:36px;flex:0 0 auto;display:grid;place-items:center;border-radius:15px;background:color-mix(in srgb,var(--op-primary) 12%,var(--surface,#fff))}.op-summary section{min-width:0}.op-summary strong,.op-summary span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.op-summary strong{font-size:18px;font-weight:1000;letter-spacing:-.05em;color:var(--text,#111)}.op-summary span{margin-top:2px;color:var(--muted,#64748b);font-size:11px;font-weight:850}.op-toolbar,.op-filter,.op-panel{margin-top:10px;padding:10px;border-radius:24px}.op-toolbar{display:flex;align-items:center;justify-content:space-between;gap:8px}.op-tabs{display:inline-grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:4px;width:min(390px,100%);padding:4px;border-radius:999px;background:var(--shell-section-bg,color-mix(in srgb,var(--op-primary) 7%,var(--surface,#fff)));border:1px solid var(--border,rgba(0,0,0,.08))}.op-tabs button{min-width:0;min-height:35px;border:0;border-radius:999px;padding:0 9px;background:transparent;color:var(--muted,#64748b);font-size:12px;font-weight:950;cursor:pointer}.op-tabs button.active{background:var(--op-primary);color:#fff}.op-filter{display:grid;grid-template-columns:minmax(0,1fr);gap:8px}.op-section{margin-top:16px}.op-list{margin-top:10px}.op-card,.op-breakdown,.op-empty{min-width:0;border-radius:24px;padding:13px;overflow:hidden}.op-card-top{display:flex;align-items:flex-start;gap:10px}.op-avatar{width:56px;height:56px;flex:0 0 auto;display:grid;place-items:center;border-radius:19px;background:var(--op-primary);color:#fff;font-size:22px;box-shadow:0 12px 24px rgba(15,23,42,.12)}.op-card-main{min-width:0;flex:1}.op-card-main h3{margin:0;color:var(--text,#111);font-size:18px;font-weight:1000;letter-spacing:-.04em}.op-card-main p{margin:4px 0 0;color:var(--muted,#64748b);font-size:12px;font-weight:750;line-height:1.4}.op-chip-row{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-top:10px}.op-chip{max-width:100%;display:inline-flex;align-items:center;min-height:25px;padding:4px 9px;border-radius:999px;font-size:11px;font-weight:950;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:capitalize}.op-chip.green{background:rgba(34,197,94,.14);color:#22c55e}.op-chip.red{background:rgba(239,68,68,.14);color:#ef4444}.op-chip.blue{background:rgba(59,130,246,.15);color:#60a5fa}.op-chip.gray{background:color-mix(in srgb,var(--muted,#64748b) 14%,transparent);color:var(--muted,#64748b)}.op-chip.orange{background:rgba(245,158,11,.16);color:#f59e0b}.op-chip.purple{background:rgba(147,51,234,.15);color:#a855f7}.op-mini-grid{grid-template-columns:repeat(2,minmax(0,1fr));margin-top:10px}.op-mini{min-width:0;padding:9px;border-radius:17px;background:color-mix(in srgb,var(--muted,#64748b) 9%,transparent);border:1px solid var(--border,rgba(0,0,0,.08));overflow:hidden}.op-mini strong,.op-mini span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.op-mini strong{color:var(--text,#111);font-size:13px;font-weight:1000}.op-mini span{margin-top:2px;color:var(--muted,#64748b);font-size:10px;font-weight:850}.op-table-wrap{width:100%;overflow-x:auto;border-radius:18px;border:1px solid var(--border,rgba(0,0,0,.08))}.op-table{width:100%;min-width:980px;border-collapse:collapse;background:var(--card-bg,var(--surface,#fff))}.op-table th,.op-table td{padding:10px;border-bottom:1px solid var(--border,rgba(0,0,0,.08));text-align:left;vertical-align:top;color:var(--text,#111);font-size:13px}.op-table th{color:var(--muted,#64748b);font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.07em;background:color-mix(in srgb,var(--op-primary) 6%,var(--card-bg,#fff))}.op-empty{display:grid;place-items:center;align-content:center;gap:8px;min-height:190px;text-align:center;border-style:dashed}.op-empty div{width:56px;height:56px;display:grid;place-items:center;border-radius:22px;background:color-mix(in srgb,var(--op-primary) 12%,var(--surface,#fff));font-size:28px}.op-empty h3{margin:0;color:var(--text,#111);font-size:18px;font-weight:1000}.op-empty p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.op-message{margin:10px 0;padding:12px;border-radius:18px;background:rgba(245,158,11,.14);color:#f59e0b;font-size:13px;font-weight:900}.op-drawer-layer{position:fixed;inset:0;z-index:80}.op-drawer-overlay{position:absolute;inset:0;border:0;background:rgba(15,23,42,.52)}.op-drawer{position:absolute;right:0;top:0;bottom:0;width:min(94vw,720px);max-width:100vw;overflow-y:auto;overflow-x:hidden;background:var(--bg,#f7f8fb);color:var(--text,#111);padding:14px;box-shadow:var(--shell-shadow,-24px 0 70px rgba(15,23,42,.22))}.op-drawer-head{position:sticky;top:0;z-index:2;display:flex;align-items:flex-start;justify-content:space-between;gap:10px;padding:6px 0 12px;background:var(--bg,#f7f8fb)}.op-drawer-head p{margin:0;color:var(--op-primary);font-size:11px;font-weight:950;letter-spacing:.08em;text-transform:uppercase}.op-drawer-head h2{margin:2px 0 0;color:var(--text,#111);font-size:22px;font-weight:1000;letter-spacing:-.05em}.op-drawer-head span{margin-top:3px;display:block;color:var(--muted,#64748b);font-size:12px;font-weight:750}.op-drawer-head button{width:38px;height:38px;flex:0 0 auto;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:15px;background:var(--surface,#fff);color:var(--text,#111);font-weight:1000;cursor:pointer}.op-form-card{margin-top:10px;padding:12px;border-radius:22px;background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.10))}.op-form-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:9px}.op-form-grid label{min-width:0;display:grid;gap:6px}.op-form-grid label span{color:var(--muted,#64748b);font-size:11px;font-weight:950;letter-spacing:.06em;text-transform:uppercase}.op-form-grid .wide{grid-column:1/-1}.op-drawer-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:12px}.op-bar{height:8px;margin-top:12px;border-radius:999px;background:color-mix(in srgb,var(--muted,#64748b) 14%,transparent);overflow:hidden}.op-bar div{height:100%;background:var(--op-primary);border-radius:inherit}@media (min-width:680px){.op-page{padding:calc(12px * var(--local-density-scale,1))}.op-summary-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.op-filter{grid-template-columns:minmax(0,1fr) 190px 190px 150px}.op-mini-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.op-form-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:1040px){.op-page{padding:calc(16px * var(--local-density-scale,1))}.op-summary-grid{grid-template-columns:repeat(6,minmax(0,1fr))}.op-list,.op-breakdown-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (max-width:520px){.op-page{padding:calc(6px * var(--local-density-scale,1))}.op-hero{flex-direction:column;border-radius:22px;padding:10px}.op-actions{display:grid;grid-template-columns:minmax(0,1fr)}.op-btn,.op-primary{width:100%}.op-summary-grid{gap:6px}.op-summary{padding:10px;border-radius:19px}.op-toolbar{align-items:stretch;flex-direction:column;border-radius:20px}.op-tabs{width:100%}.op-card,.op-empty,.op-breakdown{border-radius:20px;padding:11px}.op-avatar{width:52px;height:52px;flex-basis:52px}.op-mini-grid{grid-template-columns:repeat(1,minmax(0,1fr))}.op-drawer-actions{grid-template-columns:minmax(0,1fr)}.op-drawer{width:min(96vw,720px);padding:12px}}
`;function tW(){var e;let a=(0,c.useRouter)(),{accountId:r,authenticated:t,loading:i}=(0,d.F)(),{settings:o,loading:l}=(0,p.t)(),b=o?.primaryColor||"var(--primary-color, #2563eb)",[u,m]=(0,s.useState)(!0),[h,x]=(0,s.useState)(null),[g,f]=(0,s.useState)([]),[v,y]=(0,s.useState)([]),[w,j]=(0,s.useState)([]),[k,N]=(0,s.useState)([]),[S,C]=(0,s.useState)("cards"),[I,A]=(0,s.useState)(""),[z,M]=(0,s.useState)("all"),[$,P]=(0,s.useState)("all"),[F,T]=(0,s.useState)("all");(0,s.useEffect)(()=>{!i&&(t&&r||a.replace("/login"))},[i,t,r,a]);let R=async()=>{if(!r)return void m(!1);m(!0);try{let e=await t_(r);x(e.owner);let[a,t]=await Promise.all([tU("schools"),tU("branches")]),i=a.filter(e=>tO(e,r)),n=new Set(i.map(e=>Number(e.id))),s=t.filter(e=>tO(e,r)&&n.has(Number(e.schoolId)));f(i),y(s);let o=[],l=[];for(let e of s)try{let a=await (0,tD.ok)({accountId:r,schoolId:String(e.schoolId),branchId:String(e.id)});o.push(...a);let t=await (0,tE.nu)({accountId:r,schoolId:String(e.schoolId),branchId:String(e.id)});l.push(...t)}catch(a){console.warn("Failed to load owner branch overview",e,a)}j(o.filter(e=>!e.isDeleted&&"cancelled"!==e.status)),N(l.filter(e=>!e.isDeleted&&"resolved"!==String(e.status||"open")))}finally{m(!1)}};(0,s.useEffect)(()=>{R()},[r]);let D=(0,s.useMemo)(()=>"all"===z?v:v.filter(e=>Number(e.schoolId)===Number(z)),[v,z]),E=(0,s.useMemo)(()=>{let e=I.toLowerCase().trim();return w.filter(a=>("all"===z||String(a.schoolId)===z)&&("all"===$||String(a.branchId)===$)&&("all"===F||String(a.eventType)===F)&&(!e||`${a.title} ${a.description} ${a.location} ${a.eventType}`.toLowerCase().includes(e))).sort((e,a)=>tL(e.startAt)-tL(a.startAt))},[w,I,z,$,F]),L=(0,s.useMemo)(()=>{let e=new Date;e.setHours(0,0,0,0);let a=new Date;return a.setHours(23,59,59,999),{schools:g.length,branches:v.length,events:w.length,upcoming:w.filter(e=>tL(e.startAt)>=Date.now()).length,today:w.filter(r=>tL(r.startAt)>=e.getTime()&&tL(r.startAt)<=a.getTime()).length,conflicts:k.length}},[g,v,w,k]);return u||i||l?(0,n.jsxs)("main",{className:"op-page",style:{"--op-primary":b},children:[(0,n.jsx)("style",{children:tV}),(0,n.jsxs)("section",{className:"op-state",children:[(0,n.jsx)("h2",{children:"Opening owner calendar..."}),(0,n.jsx)("p",{children:"Loading events across your schools."})]})]}):(0,n.jsxs)("main",{className:"op-page",style:{"--op-primary":b},children:[(0,n.jsx)("style",{children:tV}),(0,n.jsxs)("section",{className:"op-hero",children:[(0,n.jsxs)("div",{className:"op-hero-left",children:[(0,n.jsx)("div",{className:"op-icon",children:"\uD83D\uDCC5"}),(0,n.jsxs)("div",{className:"op-title",children:[(0,n.jsx)("p",{children:"Owner Oversight"}),(0,n.jsx)("h2",{children:"Calendar Overview"}),(0,n.jsxs)("span",{children:[(e=h||{},function(e,a=""){return String(e||"").trim()||a}(e?.fullName||e?.name||e?.title||e?.label||e?.email,"Unnamed"))," \xb7 View only across owned schools"]})]})]}),(0,n.jsx)("div",{className:"op-actions",children:(0,n.jsx)("button",{className:"op-btn",onClick:R,children:"Refresh"})})]}),(0,n.jsxs)("section",{className:"op-summary-grid",children:[(0,n.jsx)(tK,{label:"Schools",value:L.schools,icon:"\uD83C\uDFEB"}),(0,n.jsx)(tK,{label:"Branches",value:L.branches,icon:"\uD83C\uDFDB️"}),(0,n.jsx)(tK,{label:"Events",value:L.events,icon:"\uD83D\uDCCC"}),(0,n.jsx)(tK,{label:"Upcoming",value:L.upcoming,icon:"⏭️",positive:!0}),(0,n.jsx)(tK,{label:"Today",value:L.today,icon:"\uD83D\uDCCD"}),(0,n.jsx)(tK,{label:"Open Conflicts",value:L.conflicts,icon:"⚠️",warning:L.conflicts>0})]}),(0,n.jsx)(tY,{view:S,setView:C,count:E.length}),(0,n.jsxs)("section",{className:"op-filter",children:[(0,n.jsx)("input",{value:I,onChange:e=>A(e.target.value),placeholder:"Search events..."}),(0,n.jsxs)("select",{value:z,onChange:e=>{M(e.target.value),P("all")},children:[(0,n.jsx)("option",{value:"all",children:"All Schools"}),g.map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},e.id))]}),(0,n.jsxs)("select",{value:$,onChange:e=>P(e.target.value),children:[(0,n.jsx)("option",{value:"all",children:"All Branches"}),D.map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},e.id))]}),(0,n.jsxs)("select",{value:F,onChange:e=>T(e.target.value),children:[(0,n.jsx)("option",{value:"all",children:"All Types"}),(0,n.jsx)("option",{value:"school_event",children:"School Event"}),(0,n.jsx)("option",{value:"branch_event",children:"Branch Event"}),(0,n.jsx)("option",{value:"meeting",children:"Meeting"}),(0,n.jsx)("option",{value:"exam",children:"Exam"}),(0,n.jsx)("option",{value:"assessment",children:"Assessment"}),(0,n.jsx)("option",{value:"fee_deadline",children:"Fee Deadline"}),(0,n.jsx)("option",{value:"payroll_date",children:"Payroll Date"}),(0,n.jsx)("option",{value:"holiday",children:"Holiday"})]})]}),k.length>0&&(0,n.jsx)("section",{className:"op-section",children:(0,n.jsx)("div",{className:"op-list",children:k.slice(0,4).map(e=>(0,n.jsx)("article",{className:"op-card",children:(0,n.jsxs)("div",{className:"op-card-top",children:[(0,n.jsx)("div",{className:"op-avatar",children:"⚠️"}),(0,n.jsxs)("div",{className:"op-card-main",children:[(0,n.jsx)("h3",{children:e.title||"Schedule conflict"}),(0,n.jsx)("p",{children:e.description||"Conflict detected in one of your branches."}),(0,n.jsxs)("div",{className:"op-chip-row",children:[(0,n.jsx)(tH,{tone:"red",children:e.severity||"conflict"}),(0,n.jsx)(tH,{tone:"orange",children:e.conflictType||"schedule"}),(0,n.jsx)(tH,{children:v.find(a=>Number(a.id)===Number(e.branchId))?.name||"Branch"})]})]})]})},e.id))})}),"analytics"===S&&(0,n.jsxs)("section",{className:"op-section op-breakdown-grid",children:[g.map(e=>{let a=E.filter(a=>Number(a.schoolId)===Number(e.id)).length,r=E.length?Math.round(a/E.length*100):0;return(0,n.jsxs)("article",{className:"op-breakdown",children:[(0,n.jsx)("strong",{children:e.name}),(0,n.jsx)("div",{className:"op-bar",children:(0,n.jsx)("div",{style:{width:`${r}%`}})}),(0,n.jsxs)("div",{className:"op-chip-row",children:[(0,n.jsx)(tH,{tone:"blue",children:a}),(0,n.jsxs)(tH,{children:[r,"%"]})]})]},e.id)}),["exam","assessment","meeting","fee_deadline","holiday"].map(e=>{let a=E.filter(a=>a.eventType===e).length,r=E.length?Math.round(a/E.length*100):0;return(0,n.jsxs)("article",{className:"op-breakdown",children:[(0,n.jsx)("strong",{children:e.replaceAll("_"," ")}),(0,n.jsx)("div",{className:"op-bar",children:(0,n.jsx)("div",{style:{width:`${r}%`}})}),(0,n.jsxs)("div",{className:"op-chip-row",children:[(0,n.jsx)(tH,{tone:"purple",children:a}),(0,n.jsxs)(tH,{children:[r,"%"]})]})]},e)})]}),"table"===S&&(0,n.jsx)("section",{className:"op-panel",children:(0,n.jsx)("div",{className:"op-table-wrap",children:(0,n.jsxs)("table",{className:"op-table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"School"}),(0,n.jsx)("th",{children:"Branch"}),(0,n.jsx)("th",{children:"Event"}),(0,n.jsx)("th",{children:"Type"}),(0,n.jsx)("th",{children:"Starts"}),(0,n.jsx)("th",{children:"Ends"}),(0,n.jsx)("th",{children:"Status"})]})}),(0,n.jsxs)("tbody",{children:[E.map(e=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:g.find(a=>Number(a.id)===Number(e.schoolId))?.name||"-"}),(0,n.jsx)("td",{children:v.find(a=>Number(a.id)===Number(e.branchId))?.name||"-"}),(0,n.jsxs)("td",{children:[(0,n.jsx)("strong",{children:e.title}),(0,n.jsx)("br",{}),(0,n.jsx)("span",{children:e.description||"-"})]}),(0,n.jsx)("td",{children:e.eventType}),(0,n.jsx)("td",{children:tB(e.startAt)}),(0,n.jsx)("td",{children:tB(e.endAt)}),(0,n.jsx)("td",{children:(0,n.jsx)(tH,{tone:"green",children:e.status||"scheduled"})})]},e.id)),!E.length&&(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colSpan:7,children:(0,n.jsx)(tG,{text:"No calendar events found across your schools."})})})]})]})})}),"cards"===S&&(0,n.jsx)("section",{className:"op-section",children:(0,n.jsxs)("div",{className:"op-list",children:[E.map(e=>(0,n.jsxs)("article",{className:"op-card",children:[(0,n.jsxs)("div",{className:"op-card-top",children:[(0,n.jsx)("div",{className:"op-avatar",children:"\uD83D\uDCC5"}),(0,n.jsxs)("div",{className:"op-card-main",children:[(0,n.jsx)("h3",{children:e.title}),(0,n.jsxs)("p",{children:[g.find(a=>Number(a.id)===Number(e.schoolId))?.name||"School"," \xb7 ",v.find(a=>Number(a.id)===Number(e.branchId))?.name||"Branch"," \xb7 ",tB(e.startAt)]}),(0,n.jsxs)("div",{className:"op-chip-row",children:[(0,n.jsx)(tH,{tone:"blue",children:e.eventType}),(0,n.jsx)(tH,{tone:"urgent"===e.priority?"red":"high"===e.priority?"orange":"gray",children:e.priority||"normal"}),(0,n.jsx)(tH,{tone:"green",children:e.status||"scheduled"})]})]})]}),(0,n.jsxs)("div",{className:"op-mini-grid",children:[(0,n.jsx)(tq,{label:"Starts",value:tB(e.startAt)}),(0,n.jsx)(tq,{label:"Ends",value:tB(e.endAt)}),(0,n.jsx)(tq,{label:"Location",value:e.location||"-"})]}),e.description&&(0,n.jsx)("p",{className:"op-message",children:e.description})]},e.id)),!E.length&&(0,n.jsx)(tG,{text:"No calendar events found across your schools."})]})})]})}let tJ=["admin","school_admin","branch_admin","accountant"],tZ=[{value:"all",label:"All authority contacts"},{value:"school_admin",label:"School admins"},{value:"branch_admin",label:"Branch admins"},{value:"accountant",label:"Accountants"}],tQ={subject:"",body:"",recipientUserId:"",roleFilter:"all",schoolFilter:"all",branchFilter:"all"};function tX(e){let a=Number(e||0);return Number.isFinite(a)?a:0}function t0(e){return t1(e?.id??e?.localId??e?.cloudId)}function t1(e){return null==e?"":String(e).trim()}function t2(e,a=""){return String(e||"").trim()||a}function t4(e,a){return String(e??"")===String(a??"")}function t8(e){return e?.id??e?.localId??e?.userId??e?.accountUserId}function t9(e){return e?.userLocalId??e?.userId??e?.accountUserId??e?.accountUserLocalId}function t7(e,a){return e&&!0!==e.isDeleted&&(!e.accountId||!a||e.accountId===a)}function t6(e){return t1(e?.schoolId??e?.schoolLocalId??e?.payload?.schoolId)}function t3(e){return t1(e?.branchId??e?.branchLocalId??e?.payload?.branchId)}function t5(e,a="Unnamed"){return t2(e?.fullName||e?.displayName||e?.name||[e?.firstName,e?.middleName,e?.lastName].filter(Boolean).join(" ")||e?.title||e?.label||e?.email||e?.phone,a)}function ie(e){return String(e?.email||e?.user?.email||e?.appUser?.email||e?.accountUser?.email||"").trim()}function ia(e){return String(e?.phone||e?.user?.phone||e?.appUser?.phone||e?.accountUser?.phone||"").trim()}function ir(e){return e?.user||e?.appUser||e?.accountUser||e?.profile||e?.payload?.user||null}function it(e){let a=String(e||"").toLowerCase();return"admin"===a||"school_admin"===a?"school_admin":"branch_admin"===a?"branch_admin":"accountant"===a?"accountant":"other"}function ii(e){let a=it(e);return"school_admin"===a?"School admin":"branch_admin"===a?"Branch admin":"accountant"===a?"Accountant":t2(e,"user").replaceAll("_"," ")}function is(e,a){return"all"===a||it(e)===a}function io(e){if(!e)return"Not set";let a="number"==typeof e?e:new Date(e).getTime();if(!Number.isFinite(a))return"Not set";try{return new Intl.DateTimeFormat(void 0,{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(a))}catch{return"Not set"}}async function il(e){let a=u.db[e];return a?.toArray?a.toArray():[]}async function ic(e){for(let r of e)try{var a;let e=(a=await (0,aj.AT)(r),Array.isArray(a)?a:Array.isArray(a?.data)?a.data:Array.isArray(a?.items)?a.items:Array.isArray(a?.records)?a.records:Array.isArray(a?.users)?a.users:Array.isArray(a?.memberships)?a.memberships:Array.isArray(a?.data?.users)?a.data.users:Array.isArray(a?.data?.memberships)?a.data.memberships:Array.isArray(a?.data?.items)?a.data.items:[]);if(e.length)return e}catch{}return[]}function id(e,a){let r=new Map;for(let t of e){let e=a(t);if(!e)continue;let i=r.get(e);r.set(e,{...i||{},...t})}return Array.from(r.values())}async function ip(e){let[a,r]=await Promise.all([il("userMemberships").then(async e=>e.length?e:il("memberships")),il("users").then(async e=>e.length?e:il("accountUsers"))]),t=String(localStorage.getItem("email")||localStorage.getItem("userEmail")||"").toLowerCase(),i=a.find(a=>["owner","admin","super_admin"].includes(String(a.role||"").toLowerCase())&&t7(a,e)),n=r.find(e=>t4(t8(e),t9(i))||!!(t&&String(e.email||"").toLowerCase()===t)||!!(i?.email&&String(e.email||"").toLowerCase()===String(i.email).toLowerCase()));return{owner:{...i||{},...n||{},role:i?.role||"owner"},user:n,membership:i}}function ib(e){return t2(e.subject||e.title,"No subject")}function iu(e){let a=String(e.folder||"inbox").toLowerCase();return["inbox","sent","archived"].includes(a)?a:"inbox"}function im(e){return tX(e.lastMessageAt||e.updatedAt||e.createdAt)}function ih(e){return t2(e,"No message preview.")}function ix(e){return"sent"===e?"green":"archived"===e?"orange":"inbox"===e?"blue":"gray"}function ig({children:e,tone:a="gray"}){return(0,n.jsx)("span",{className:`ba-chip ${a}`,children:e})}function iv({title:e="No messages",text:a}){return(0,n.jsxs)("section",{className:"ba-empty",children:[(0,n.jsx)("div",{children:"\uD83D\uDCAC"}),(0,n.jsx)("h3",{children:e}),(0,n.jsx)("p",{children:a})]})}function iy(){return(0,n.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M4 7h9"}),(0,n.jsx)("path",{d:"M17 7h3"}),(0,n.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,n.jsx)("path",{d:"M4 17h3"}),(0,n.jsx)("path",{d:"M11 17h9"}),(0,n.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function iw(){let e=(0,c.useRouter)(),{accountId:a,authenticated:r,loading:t}=(0,d.F)(),{settings:i,loading:o}=(0,p.t)(),l=i?.primaryColor||"var(--primary-color,#2563eb)",[b,u]=(0,s.useState)(!0),[h,x]=(0,s.useState)(!1),[g,f]=(0,s.useState)("cards"),[v,y]=(0,s.useState)(null),[w,j]=(0,s.useState)([]),[k,N]=(0,s.useState)([]),[S,C]=(0,s.useState)([]),[I,A]=(0,s.useState)([]),[z,M]=(0,s.useState)([]),[$,P]=(0,s.useState)([]),[F,T]=(0,s.useState)(""),[R,D]=(0,s.useState)("inbox"),[E,L]=(0,s.useState)("all"),[B,U]=(0,s.useState)("all"),[O,_]=(0,s.useState)("all"),[H,K]=(0,s.useState)(!1),[q,G]=(0,s.useState)(!1),[Y,V]=(0,s.useState)(!1),[W,J]=(0,s.useState)(null),[Z,Q]=(0,s.useState)(null),[X,ee]=(0,s.useState)(""),[ea,er]=(0,s.useState)(null),[et,ei]=(0,s.useState)(tQ);function en(e,a){er({tone:e,message:a}),window.setTimeout(()=>er(e=>e?.message===a?null:e),4200)}async function es(){if(!a){C([]),A([]),u(!1);return}u(!0);try{let e=await ip(a),r=t8(e.user||e.owner),[t,i,n,s,o,l,c,d]=await Promise.all([il("schools"),il("branches"),il("messageThreads"),il("messages"),il("users").then(async e=>e.length?e:il("accountUsers")),il("userMemberships").then(async e=>e.length?e:il("memberships")),ic(["/accounts/users","/account/users","/users","/owner/users"]),ic(["/accounts/memberships","/account/memberships","/memberships","/owner/memberships"])]),p=id([...o,...c],e=>String(t8(e)||ie(e)).toLowerCase()),b=id([...l,...d],e=>String(e.id||e.localId||`${t9(e)}-${e.role}-${e.schoolId||0}-${e.branchId||0}`)),u=t.filter(e=>t7(e,a)),m=new Set(u.map(e=>t0(e)).filter(Boolean)),h=i.filter(e=>t7(e,a)&&(!m.size||m.has(t1(e.schoolId))));y(e.owner),j(u),N(h),C(n.filter(e=>(function(e,a,r){if(!t7(e,a))return!1;let t=Array.isArray(e.participantRoles)?e.participantRoles.join(" "):String(e.participantRoles||""),i=Array.isArray(e.participantUserIds)?e.participantUserIds.map(String):String(e.participantUserIds||"").split(",");return t.toLowerCase().includes("owner")||"owner"===String(e.createdByRole||"").toLowerCase()||t4(e.ownerUserId,r)||i.includes(String(r||""))})(e,a,r)).filter(e=>!0!==e.isDeleted)),A(s.filter(e=>t7(e,a))),M(p),P(b.filter(e=>t7(e,a)))}catch(e){console.error("Failed to load owner messages:",e),en("error","Failed to load owner messages.")}finally{u(!1)}}(0,s.useEffect)(()=>{!t&&(r&&a||e.replace("/login"))},[t,r,a,e]),(0,s.useEffect)(()=>{t||o||es()},[a,t,o]);let eo=(0,s.useMemo)(()=>{let e=new Map(w.map(e=>[t0(e),t5(e)])),a=new Map(k.map(e=>[t0(e),t5(e)])),r=$.filter(e=>tJ.includes(String(e.role||"").toLowerCase())).map(r=>{let t,i,n=ir(r),s=ie(r)||ie(n),o=z.find(e=>t4(t8(e),t9(r)))||z.find(e=>!!(s&&ie(e).toLowerCase()===s.toLowerCase()))||n||void 0,l=t1(t8(o)||t9(r)||s),c=t6(r),d=t3(r),p=String(r.role||o?.role||"user").toLowerCase(),b=it(p);return{key:`${l||r.email||p}-${b}-${c||0}-${d||0}`,id:l,name:(t=ir(r),i=ii(p),t2(t5(o,"")||t5(t,"")||t5(r,"")||ie(o)||ie(t)||ie(r),i)),role:p,roleGroup:"other"===b?"school_admin":b,email:ie(o)||ie(r),phone:ia(o)||ia(r),schoolId:c,branchId:d,schoolName:e.get(c),branchName:a.get(d)}}).filter(e=>e.id),t=new Set;return r.filter(e=>{let a=e.key;return!t.has(a)&&(t.add(a),!0)})},[k,$,w,z]),el=(0,s.useMemo)(()=>eo.filter(e=>!!is(e.roleGroup,et.roleFilter)&&("all"===et.schoolFilter||String(e.schoolId||0)===String(et.schoolFilter))&&("all"===et.branchFilter||String(e.branchId||0)===String(et.branchFilter))),[eo,et.branchFilter,et.roleFilter,et.schoolFilter]),ec=(0,s.useMemo)(()=>"all"===et.schoolFilter?k:k.filter(e=>String(e.schoolId||0)===String(et.schoolFilter)),[k,et.schoolFilter]),ed=(0,s.useMemo)(()=>{let e=F.toLowerCase().trim();return[...S].filter(e=>"all"===R||iu(e)===R).filter(e=>"all"===E||(Array.isArray(e.participantRoles)?e.participantRoles:String(e.participantRoles||"").split(/[\s,]+/)).some(e=>is(e,E))).filter(e=>"all"===B||String(t6(e)||0)===String(B)).filter(e=>"all"===O||String(t3(e)||0)===String(O)).filter(a=>!e||[a.subject,a.title,a.lastMessage,a.status,a.folder,a.participantRoles].join(" ").toLowerCase().includes(e)).sort((e,a)=>im(a)-im(e))},[O,R,F,E,B,S]),ep=(0,s.useMemo)(()=>Z?.id?I.filter(e=>t1(e.threadId)===t1(Z.id)).sort((e,a)=>tX(e.createdAt||e.sentAt)-tX(a.createdAt||a.sentAt)):[],[Z,I]),eb=(0,s.useMemo)(()=>({threads:S.length,inbox:S.filter(e=>"inbox"===iu(e)).length,sent:S.filter(e=>"sent"===iu(e)).length,unread:I.filter(e=>!e.readAt&&"inbound"===String(e.direction||"").toLowerCase()).length,archived:S.filter(e=>"archived"===iu(e)).length,contacts:eo.length,showing:ed.length,schools:w.length,branches:k.length}),[k.length,eo.length,I,w.length,ed.length,S]),eu=(0,s.useMemo)(()=>["inbox"!==R,"all"!==E,"all"!==B,"all"!==O].filter(Boolean).length,[O,R,E,B]);async function em(){if(!a)return en("error","Account context is required.");if(!et.subject.trim()||!et.body.trim()||!et.recipientUserId)return en("error","Subject, message and recipient are required.");let e=eo.find(e=>e.key===et.recipientUserId);if(!e)return en("error","Select a valid recipient.");x(!0);try{let r=await (0,m.oJ)("messageThreads",{accountId:String(a),schoolId:e.schoolId||null,branchId:e.branchId||null,subject:et.subject.trim(),participantUserIds:[String(t8(v||{})),String(e.id)].filter(Boolean),participantRoles:["owner",e.roleGroup],ownerUserId:t8(v||{}),folder:"sent",status:"open",lastMessage:et.body.trim(),lastMessageAt:Date.now(),createdByRole:"owner",active:!0,isDeleted:!1}),t=t1(r?.id);if(!t)throw Error("Could not create message thread.");await (0,m.oJ)("messages",{accountId:String(a),schoolId:Number(e.schoolId||0),branchId:Number(e.branchId||0),threadId:t,senderRole:"owner",ownerUserId:t8(v||{}),recipientUserId:String(e.id),recipientRole:e.roleGroup,body:et.body.trim(),direction:"outbound",status:"sent",sentAt:Date.now(),active:!0,isDeleted:!1}),K(!1),ei(tQ),await es(),en("success","Message sent successfully.")}catch(e){console.error("Failed to send owner message:",e),en("error",e?.message||"Failed to send message.")}finally{x(!1)}}async function eh(){if(!a)return en("error","Account context is required.");if(!Z?.id||!X.trim())return;let e=t1(Z.id);if(!e)return;let r=X.trim();x(!0);try{await (0,m.oJ)("messages",{accountId:String(a),schoolId:t1(Z.schoolId)||null,branchId:t1(Z.branchId)||null,threadId:e,senderRole:"owner",ownerUserId:t8(v||{}),body:r,direction:"outbound",status:"sent",sentAt:Date.now(),active:!0,isDeleted:!1});let t=await (0,m.Po)("messageThreads",e,{lastMessage:r,lastMessageAt:Date.now(),folder:"sent"});ee(""),await es(),t?.id?Q(t):Q(e=>e?{...e,lastMessage:r,lastMessageAt:Date.now(),folder:"sent"}:e),en("success","Reply sent.")}catch(e){console.error("Failed to reply:",e),en("error",e?.message||"Failed to send reply.")}finally{x(!1)}}async function ex(e){let a=t1(e.id||e.localId);if(a)try{await (0,m.Po)("messageThreads",a,{folder:"archived"}),J(null),await es(),en("success","Thread archived.")}catch(e){en("error",e?.message||"Failed to archive thread.")}}async function eg(e){let a=t1(e.id||e.localId);if(a)try{await (0,m.Po)("messageThreads",a,{folder:"inbox"}),J(null),await es(),en("success","Thread restored.")}catch(e){en("error",e?.message||"Failed to restore thread.")}}async function ef(e){let a=t1(e.id||e.localId);if(a&&window.confirm(`Delete "${ib(e)}"? This will sync as a soft delete.`))try{for(let e of(await (0,m.R8)("messageThreads",a),I.filter(e=>t1(e.threadId)===a))){let a=t1(e.id||e.localId);a&&await (0,m.R8)("messages",a)}Z&&t1(Z.id)===a&&Q(null),J(null),await es(),en("success","Thread deleted.")}catch(e){en("error",e?.message||"Failed to delete thread.")}}return b||t||o?(0,n.jsxs)("main",{className:"ba-page",style:{"--ba-primary":l},children:[(0,n.jsx)("style",{children:iM}),(0,n.jsxs)("section",{className:"ba-state",children:[(0,n.jsx)("div",{className:"ba-spinner"}),(0,n.jsx)("h2",{children:"Opening owner messages..."}),(0,n.jsx)("p",{children:"Loading account conversations, schools, branches and owner contacts."})]})]}):r&&a?(0,n.jsxs)("main",{className:"ba-page",style:{"--ba-primary":l},children:[(0,n.jsx)("style",{children:iM}),ea?(0,n.jsxs)("section",{className:`ba-toast ${ea.tone}`,children:[ea.message,(0,n.jsx)("button",{type:"button",onClick:()=>er(null),"aria-label":"Close notification",children:"✕"})]}):null,(0,n.jsxs)("section",{className:"ba-search-card","aria-label":"Owner messages search and actions",children:[(0,n.jsx)("span",{className:`status-dot-mini ${eb.unread?"orange":eb.threads?"green":"gray"}`,title:`${eb.threads} thread(s)`}),(0,n.jsxs)("label",{className:"ba-search",children:[(0,n.jsx)("span",{children:"⌕"}),(0,n.jsx)("input",{value:F,onChange:e=>T(e.target.value),placeholder:"Search owner messages...","aria-label":"Search messages"})]}),(0,n.jsx)("button",{type:"button",className:"ba-add-inline",onClick:function(){ei(tQ),K(!0)},"aria-label":"Compose message",children:"+"}),(0,n.jsxs)("button",{type:"button",className:`ba-filter-button ${eu?"active":""}`,onClick:()=>G(!0),"aria-label":"Open filters",title:"Filters",children:[(0,n.jsx)(iy,{}),eu?(0,n.jsx)("b",{children:eu}):null]}),(0,n.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>V(!0),"aria-label":"More options",children:"⋯"})]}),("inbox"!==R||"all"!==E||"all"!==B||"all"!==O||F.trim())&&(0,n.jsxs)("section",{className:"ba-filter-chips","aria-label":"Active filters",children:["inbox"!==R&&(0,n.jsxs)("button",{type:"button",onClick:()=>D("inbox"),children:["Folder: ",R," \xd7"]}),"all"!==E&&(0,n.jsxs)("button",{type:"button",onClick:()=>L("all"),children:["Role: ",ii(E)," \xd7"]}),"all"!==B&&(0,n.jsx)("button",{type:"button",onClick:()=>U("all"),children:"School \xd7"}),"all"!==O&&(0,n.jsx)("button",{type:"button",onClick:()=>_("all"),children:"Branch \xd7"}),F.trim()&&(0,n.jsxs)("button",{type:"button",onClick:()=>T(""),children:["Search: ",F.trim()," \xd7"]})]}),"analytics"===g?(0,n.jsx)(iI,{summary:eb,threads:S,contacts:eo}):null,"table"===g?(0,n.jsx)(iC,{rows:ed,openThread:Q,selectThread:J,archiveThread:ex,restoreThread:eg,deleteThread:ef}):null,"cards"===g?(0,n.jsxs)("section",{className:"ba-list",children:[ed.map(e=>(0,n.jsx)(ij,{thread:e,onOpen:()=>J(e)},String(t0(e)))),ed.length?null:(0,n.jsx)(iv,{text:"No owner message threads found."})]}):null,q?(0,n.jsx)(ik,{folder:R,roleFilter:E,schoolFilter:B,branchFilter:O,schools:w,branches:k,setFolder:D,setRoleFilter:L,setSchoolFilter:e=>{U(e),_("all")},setBranchFilter:_,onClose:()=>G(!1)}):null,Y?(0,n.jsx)(iN,{view:g,setView:e=>{f(e),V(!1)},summary:eb,onRefresh:async()=>{V(!1),await es()},onClose:()=>V(!1)}):null,W?(0,n.jsx)(iS,{thread:W,openThread:e=>{Q(e),J(null)},archiveThread:ex,restoreThread:eg,deleteThread:ef,onClose:()=>J(null)}):null,Z?(0,n.jsx)(iA,{thread:Z,threadMessages:ep,messageText:X,setMessageText:ee,saving:h,reply:eh,close:()=>Q(null)}):null,H?(0,n.jsx)(iz,{contacts:eo,visibleContacts:el,schools:w,composeBranches:ec,form:et,setForm:ei,saving:h,sendNew:em,close:()=>K(!1)}):null]}):(0,n.jsxs)("main",{className:"ba-page",style:{"--ba-primary":l},children:[(0,n.jsx)("style",{children:iM}),(0,n.jsxs)("section",{className:"ba-state",children:[(0,n.jsx)("div",{className:"ba-spinner"}),(0,n.jsx)("h2",{children:"Redirecting to login..."}),(0,n.jsx)("p",{children:"You must sign in before managing owner messages."})]})]})}function ij({thread:e,onOpen:a}){let r,t,i=iu(e);return(0,n.jsxs)("button",{type:"button",className:"thread-row",onClick:a,children:[(0,n.jsx)("span",{className:"thread-avatar",children:"\uD83D\uDCAC"}),(0,n.jsxs)("span",{className:"thread-main",children:[(0,n.jsx)("strong",{children:ib(e)}),(0,n.jsx)("small",{children:(r=Array.from(new Set((Array.isArray(e.participantRoles)?e.participantRoles.map(ii).filter(Boolean):String(e.participantRoles||"").split(/[\s,]+/).filter(Boolean).map(ii)).filter(e=>"owner"!==e.toLowerCase()))),t=[t6(e)?`School ${t6(e)}`:"",t3(e)?`Branch ${t3(e)}`:""].filter(Boolean).join(" \xb7 "),[r.join(", "),t].filter(Boolean).join(" \xb7 ")||"Authority contact")}),(0,n.jsxs)("em",{children:[ih(e.lastMessage)," \xb7 ",io(e.lastMessageAt||e.updatedAt||e.createdAt)]})]}),(0,n.jsxs)("span",{className:"thread-side",children:[(0,n.jsx)(ig,{tone:ix(i),children:i}),(0,n.jsx)("i",{children:"⋯"})]})]})}function ik({folder:e,roleFilter:a,schoolFilter:r,branchFilter:t,schools:i,branches:s,setFolder:o,setRoleFilter:l,setSchoolFilter:c,setBranchFilter:d,onClose:p}){return"all"===r||s.filter(e=>String(e.schoolId||0)===String(r)),(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Filters"}),(0,n.jsx)("p",{children:"Choose message folder and contact role."})]}),(0,n.jsx)("button",{type:"button",onClick:p,"aria-label":"Close filters",children:"✕"})]}),(0,n.jsxs)("div",{className:"ba-form compact",children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Folder"}),(0,n.jsxs)("select",{value:e,onChange:e=>o(e.target.value),children:[(0,n.jsx)("option",{value:"inbox",children:"Inbox"}),(0,n.jsx)("option",{value:"sent",children:"Sent"}),(0,n.jsx)("option",{value:"archived",children:"Archived"}),(0,n.jsx)("option",{value:"all",children:"All"})]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Role"}),(0,n.jsx)("select",{value:a,onChange:e=>l(e.target.value),children:tZ.map(e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value))})]})]}),(0,n.jsxs)("div",{className:"ba-sheet-actions",children:[(0,n.jsx)("button",{type:"button",onClick:()=>{o("inbox"),l("all"),c("all"),d("all")},children:"Reset"}),(0,n.jsx)("button",{type:"button",className:"primary",onClick:p,children:"Apply"})]})]})})}function iN({view:e,setView:a,summary:r,onRefresh:t,onClose:i}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"More"}),(0,n.jsx)("p",{children:"Advanced views stay here so the owner inbox remains compact."})]}),(0,n.jsx)("button",{type:"button",onClick:i,"aria-label":"Close menu",children:"✕"})]}),(0,n.jsxs)("div",{className:"ba-menu-list",children:[(0,n.jsxs)("button",{type:"button",className:"cards"===e?"active":"",onClick:()=>a("cards"),children:[(0,n.jsx)("span",{children:"☰"}),(0,n.jsx)("b",{children:"List view"}),(0,n.jsx)("small",{children:"Compact owner message threads"})]}),(0,n.jsxs)("button",{type:"button",className:"table"===e?"active":"",onClick:()=>a("table"),children:[(0,n.jsx)("span",{children:"☷"}),(0,n.jsx)("b",{children:"Table view"}),(0,n.jsx)("small",{children:"Dense laptop-friendly thread list"})]}),(0,n.jsxs)("button",{type:"button",className:"analytics"===e?"active":"",onClick:()=>a("analytics"),children:[(0,n.jsx)("span",{children:"◔"}),(0,n.jsx)("b",{children:"Analytics"}),(0,n.jsxs)("small",{children:[r.threads," thread(s), ",r.contacts," contacts"]})]}),(0,n.jsxs)("button",{type:"button",onClick:t,children:[(0,n.jsx)("span",{children:"↻"}),(0,n.jsx)("b",{children:"Refresh"}),(0,n.jsx)("small",{children:"Reload local owner messages"})]})]})]})})}function iS({thread:e,openThread:a,archiveThread:r,restoreThread:t,deleteThread:i,onClose:s}){let o=iu(e);return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-profile",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:ib(e)}),(0,n.jsxs)("p",{children:[io(e.lastMessageAt||e.updatedAt||e.createdAt)," \xb7 ",o]})]}),(0,n.jsx)("button",{type:"button",onClick:s,"aria-label":"Close thread actions",children:"✕"})]}),(0,n.jsx)("p",{className:"thread-preview",children:ih(e.lastMessage)}),(0,n.jsxs)("div",{className:"ba-menu-list",children:[(0,n.jsxs)("button",{type:"button",onClick:()=>a(e),children:[(0,n.jsx)("span",{children:"↗"}),(0,n.jsx)("b",{children:"Open conversation"}),(0,n.jsx)("small",{children:"Read messages and reply"})]}),"archived"===o?(0,n.jsxs)("button",{type:"button",onClick:()=>t(e),children:[(0,n.jsx)("span",{children:"↩"}),(0,n.jsx)("b",{children:"Restore"}),(0,n.jsx)("small",{children:"Move this thread back to inbox"})]}):(0,n.jsxs)("button",{type:"button",onClick:()=>r(e),children:[(0,n.jsx)("span",{children:"\uD83D\uDDC4"}),(0,n.jsx)("b",{children:"Archive"}),(0,n.jsx)("small",{children:"Move this thread out of inbox"})]}),(0,n.jsxs)("button",{type:"button",className:"danger",onClick:()=>i(e),children:[(0,n.jsx)("span",{children:"⌫"}),(0,n.jsx)("b",{children:"Delete"}),(0,n.jsx)("small",{children:"Soft delete this thread and messages"})]})]})]})})}function iC({rows:e,openThread:a,selectThread:r,archiveThread:t,restoreThread:i,deleteThread:s}){return(0,n.jsx)("section",{className:"ba-table-card",children:(0,n.jsxs)("div",{className:"ba-table-scroll",children:[(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsxs)("th",{children:["Messages (",e.length,")"]}),(0,n.jsx)("th",{children:"Updated"}),(0,n.jsx)("th",{children:"Folder"}),(0,n.jsx)("th",{children:"Status"}),(0,n.jsx)("th",{children:"Last Message"}),(0,n.jsx)("th",{children:"Actions"})]})}),(0,n.jsx)("tbody",{children:e.map(e=>{let o=iu(e);return(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{children:[(0,n.jsx)("strong",{children:ib(e)}),(0,n.jsx)("span",{children:ih(e.lastMessage).slice(0,70)})]}),(0,n.jsx)("td",{children:io(e.lastMessageAt||e.updatedAt||e.createdAt)}),(0,n.jsx)("td",{children:(0,n.jsx)(ig,{tone:ix(o),children:o})}),(0,n.jsx)("td",{children:(0,n.jsx)(ig,{children:e.status||"open"})}),(0,n.jsx)("td",{children:ih(e.lastMessage).slice(0,120)}),(0,n.jsx)("td",{children:(0,n.jsxs)("div",{className:"ba-table-actions",children:[(0,n.jsx)("button",{type:"button",onClick:()=>a(e),children:"Open"}),(0,n.jsx)("button",{type:"button",onClick:()=>r(e),children:"More"}),"archived"===o?(0,n.jsx)("button",{type:"button",onClick:()=>i(e),children:"Restore"}):(0,n.jsx)("button",{type:"button",onClick:()=>t(e),children:"Archive"}),(0,n.jsx)("button",{type:"button",className:"ba-delete",onClick:()=>s(e),children:"Delete"})]})})]},String(t0(e)))})})]}),e.length?null:(0,n.jsx)("div",{className:"ba-empty-table",children:"No owner message thread matches your search/filter."})]})})}function iI({summary:e,threads:a,contacts:r}){return(0,n.jsxs)("section",{className:"ba-analysis-grid",children:[(0,n.jsxs)("article",{className:"ba-analysis",children:[(0,n.jsx)("span",{children:"Threads"}),(0,n.jsx)("strong",{children:e.threads}),(0,n.jsx)("p",{children:"Total owner-visible message thread(s)."})]}),(0,n.jsxs)("article",{className:"ba-analysis",children:[(0,n.jsx)("span",{children:"Unread"}),(0,n.jsx)("strong",{children:e.unread}),(0,n.jsx)("p",{children:"Inbound message(s) not marked as read."})]}),(0,n.jsxs)("article",{className:"ba-analysis",children:[(0,n.jsx)("span",{children:"Contacts"}),(0,n.jsx)("strong",{children:e.contacts}),(0,n.jsx)("p",{children:"School, branch and finance users the owner can message."})]}),(0,n.jsxs)("article",{className:"ba-analysis",children:[(0,n.jsx)("span",{children:"Scope"}),(0,n.jsx)("strong",{children:e.schools}),(0,n.jsxs)("p",{children:[e.branches," branch(es) under this owner account."]})]}),["inbox","sent","archived"].map(e=>{let r=a.filter(a=>iu(a)===e).length,t=a.length?Math.round(r/a.length*100):0;return(0,n.jsxs)("article",{className:"ba-analysis",children:[(0,n.jsx)("span",{children:e}),(0,n.jsx)("strong",{children:r}),(0,n.jsx)("div",{className:"ba-progress",children:(0,n.jsx)("i",{style:{width:`${Math.max(4,t)}%`}})}),(0,n.jsxs)("p",{children:[t,"% of all owner message threads."]})]},e)}),["admin","school_admin","branch_admin","accountant"].map(e=>{let a=r.filter(a=>a.role===e).length,t=r.length?Math.round(a/r.length*100):0;return(0,n.jsxs)("article",{className:"ba-analysis",children:[(0,n.jsx)("span",{children:ii(e)}),(0,n.jsx)("strong",{children:a}),(0,n.jsx)("div",{className:"ba-progress",children:(0,n.jsx)("i",{style:{width:`${Math.max(4,t)}%`}})}),(0,n.jsxs)("p",{children:[t,"% of available owner contacts."]})]},e)})]})}function iA({thread:e,threadMessages:a,messageText:r,setMessageText:t,saving:i,reply:s,close:o}){return(0,n.jsxs)("div",{className:"ba-drawer-layer",children:[(0,n.jsx)("button",{className:"ba-drawer-overlay",type:"button",onClick:o,"aria-label":"Close conversation"}),(0,n.jsxs)("aside",{className:"ba-drawer",children:[(0,n.jsxs)("div",{className:"ba-drawer-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Conversation"}),(0,n.jsx)("h2",{children:ib(e)}),(0,n.jsxs)("span",{children:[a.length," message(s)"]})]}),(0,n.jsx)("button",{type:"button",onClick:o,children:"✕"})]}),(0,n.jsxs)("section",{className:"ba-list",children:[a.map(e=>(0,n.jsxs)("article",{className:`message-bubble ${"outbound"===e.direction?"outbound":"inbound"}`,children:[(0,n.jsxs)("div",{className:"ba-chip-row",children:[(0,n.jsx)(ig,{tone:"outbound"===e.direction?"green":"blue",children:e.direction||"message"}),(0,n.jsx)(ig,{children:io(e.sentAt||e.createdAt)})]}),(0,n.jsx)("p",{children:e.body})]},String(t0(e)))),a.length?null:(0,n.jsx)(iv,{text:"No messages in this thread."})]}),(0,n.jsxs)("section",{className:"ba-form-card",children:[(0,n.jsx)("textarea",{value:r,onChange:e=>t(e.target.value),placeholder:"Write a reply..."}),(0,n.jsxs)("div",{className:"ba-drawer-actions",children:[(0,n.jsx)("button",{className:"ba-btn",type:"button",onClick:o,children:"Close"}),(0,n.jsx)("button",{className:"ba-primary",type:"button",disabled:i||!r.trim(),onClick:s,children:i?"Sending...":"Send Reply"})]})]})]})]})}function iz({contacts:e,visibleContacts:a,schools:r,composeBranches:t,form:i,setForm:s,saving:o,sendNew:l,close:c}){return(0,n.jsxs)("div",{className:"ba-drawer-layer",children:[(0,n.jsx)("button",{className:"ba-drawer-overlay",type:"button",onClick:c,"aria-label":"Close compose"}),(0,n.jsxs)("aside",{className:"ba-drawer",children:[(0,n.jsxs)("div",{className:"ba-drawer-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Compose"}),(0,n.jsx)("h2",{children:"New Owner Message"}),(0,n.jsxs)("span",{children:[e.length," available owner contact(s)"]})]}),(0,n.jsx)("button",{type:"button",onClick:c,children:"✕"})]}),(0,n.jsxs)("section",{className:"ba-form-card",children:[(0,n.jsxs)("div",{className:"ba-form-grid",children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Role Filter"}),(0,n.jsx)("select",{value:i.roleFilter,onChange:e=>s({...i,roleFilter:e.target.value,recipientUserId:""}),children:tZ.map(e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"School Filter"}),(0,n.jsxs)("select",{value:i.schoolFilter,onChange:e=>s({...i,schoolFilter:e.target.value,branchFilter:"all",recipientUserId:""}),children:[(0,n.jsx)("option",{value:"all",children:"All schools"}),r.map(e=>(0,n.jsx)("option",{value:String(t0(e)),children:t5(e)},String(t0(e))))]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Branch Filter"}),(0,n.jsxs)("select",{value:i.branchFilter,onChange:e=>s({...i,branchFilter:e.target.value,recipientUserId:""}),children:[(0,n.jsx)("option",{value:"all",children:"All branches"}),t.map(e=>(0,n.jsx)("option",{value:String(t0(e)),children:t5(e)},String(t0(e))))]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Recipient"}),(0,n.jsxs)("select",{value:i.recipientUserId,onChange:e=>s({...i,recipientUserId:e.target.value}),children:[(0,n.jsx)("option",{value:"",children:"Select recipient"}),a.map(e=>(0,n.jsxs)("option",{value:e.key,children:[t2(e.name,ii(e.roleGroup))," \xb7 ",ii(e.roleGroup),e.schoolName?` \xb7 ${e.schoolName}`:"",e.branchName?` \xb7 ${e.branchName}`:""]},e.key))]})]}),(0,n.jsxs)("label",{className:"wide",children:[(0,n.jsx)("span",{children:"Subject"}),(0,n.jsx)("input",{value:i.subject,onChange:e=>s({...i,subject:e.target.value}),placeholder:"Message subject"})]}),(0,n.jsxs)("label",{className:"wide",children:[(0,n.jsx)("span",{children:"Message"}),(0,n.jsx)("textarea",{value:i.body,onChange:e=>s({...i,body:e.target.value}),placeholder:"Write your message..."})]})]}),(0,n.jsxs)("p",{className:"ba-hint",children:[a.length," contact(s) match these authority filters."]})]}),(0,n.jsxs)("div",{className:"ba-drawer-actions",children:[(0,n.jsx)("button",{className:"ba-btn",type:"button",onClick:c,children:"Cancel"}),(0,n.jsx)("button",{className:"ba-primary",type:"button",disabled:o,onClick:l,children:o?"Sending...":"Send"})]})]})]})}let iM=`
@keyframes spin { to { transform: rotate(360deg); } }
.ba-page{--ease:cubic-bezier(.2,.8,.2,1);min-height:100dvh;width:100%;max-width:100%;min-width:0;padding:calc(8px * var(--local-density-scale,1));padding-bottom:max(40px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--ba-primary) 9%,transparent),transparent 30rem),var(--bg,#f7f8fb);color:var(--text,#111827);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);font-size:var(--font-size,14px);overflow-x:hidden}.ba-page *,.ba-page *::before,.ba-page *::after{box-sizing:border-box;min-width:0}.ba-page button,.ba-page input,.ba-page select,.ba-page textarea{font:inherit;max-width:100%}.ba-page button{-webkit-tap-highlight-color:transparent}.ba-page input,.ba-page select,.ba-page textarea{width:100%;min-height:44px;border:1px solid var(--input-border,var(--border,rgba(0,0,0,.10)));border-radius:16px;padding:0 12px;background:var(--input-bg,var(--surface,#fff));color:var(--input-text,var(--text,#111827));outline:none;font-weight:750}.ba-page textarea{min-height:130px;padding:12px;resize:vertical;line-height:1.55}.ba-page input:focus,.ba-page select:focus,.ba-page textarea:focus{border-color:color-mix(in srgb,var(--ba-primary) 52%,var(--border,rgba(0,0,0,.10)));box-shadow:0 0 0 4px color-mix(in srgb,var(--ba-primary) 12%,transparent)}.ba-state,.ba-search-card,.thread-row,.ba-table-card,.ba-analysis,.ba-empty,.ba-sheet,.ba-form-card{background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.10));box-shadow:0 12px 28px rgba(15,23,42,.045)}.ba-state{min-height:min(420px,calc(100dvh - 32px));width:min(520px,100%);margin:0 auto;display:grid;place-items:center;align-content:center;gap:10px;padding:22px;border-radius:28px;text-align:center}.ba-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--ba-primary) 18%,transparent);border-top-color:var(--ba-primary);animation:spin .8s linear infinite}.ba-state h2{margin:0;font-size:22px;font-weight:1000;letter-spacing:-.04em}.ba-state p{max-width:34rem;margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.ba-toast{position:sticky;top:8px;z-index:40;display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;padding:12px 14px;border-radius:18px;font-size:13px;font-weight:850;box-shadow:0 18px 40px rgba(15,23,42,.12)}.ba-toast.success{background:rgba(34,197,94,.14);color:#166534}.ba-toast.error{background:rgba(239,68,68,.12);color:#991b1b}.ba-toast.info{background:rgba(59,130,246,.13);color:#1d4ed8}.ba-toast button{border:0;background:transparent;color:currentColor;font-weight:1000;cursor:pointer}.ba-search-card{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto auto;gap:8px;align-items:center;margin-top:2px;padding:8px;border-radius:24px}.ba-search{min-width:0;display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:8px;min-height:44px;padding:0 11px;border-radius:18px;background:color-mix(in srgb,var(--muted,#64748b) 7%,transparent)}.ba-search span{color:var(--muted,#64748b);font-size:17px;font-weight:1000}.ba-search input{min-height:42px;border:0;padding:0;border-radius:0;background:transparent;box-shadow:none;font-size:14px}.ba-icon-button,.ba-filter-button,.ba-add-inline{width:42px;height:42px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;display:grid;place-items:center;background:var(--card-bg,var(--surface,#fff));color:var(--text,#111827);font-size:18px;font-weight:1000;cursor:pointer;box-shadow:0 10px 22px rgba(15,23,42,.045)}.ba-add-inline{border-color:var(--ba-primary);background:var(--ba-primary);color:#fff;font-size:25px;line-height:1;box-shadow:0 12px 28px color-mix(in srgb,var(--ba-primary) 22%,transparent)}.ba-slider-icon{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.ba-filter-button{position:relative;background:color-mix(in srgb,var(--ba-primary) 8%,var(--card-bg,#fff));color:var(--ba-primary)}.ba-filter-button.active{background:var(--ba-primary);color:#fff;border-color:var(--ba-primary)}.ba-filter-button b{position:absolute;top:-4px;right:-4px;min-width:19px;height:19px;display:grid;place-items:center;border-radius:999px;background:#ef4444;color:#fff;font-size:10px;border:2px solid var(--card-bg,#fff)}.status-dot-mini{width:10px;height:10px;border-radius:999px;display:inline-flex;box-shadow:0 0 0 4px color-mix(in srgb,var(--muted,#64748b) 10%,transparent)}.status-dot-mini.green{background:#22c55e}.status-dot-mini.orange{background:#f59e0b}.status-dot-mini.gray{background:var(--muted,#64748b)}.ba-filter-chips{display:flex;gap:7px;overflow-x:auto;padding:8px 1px 0;scrollbar-width:none}.ba-filter-chips::-webkit-scrollbar{display:none}.ba-filter-chips button{flex:0 0 auto;min-height:31px;border:0;border-radius:999px;padding:0 10px;background:color-mix(in srgb,var(--ba-primary) 11%,transparent);color:var(--ba-primary);font-size:11px;font-weight:950;white-space:nowrap;cursor:pointer}.ba-list{display:grid;gap:7px;margin-top:10px}.thread-row{width:100%;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:10px;padding:10px;border-radius:22px;text-align:left;cursor:pointer;color:var(--text,#111827);transition:transform .16s var(--ease),box-shadow .16s var(--ease),border-color .16s var(--ease)}.thread-row:hover{transform:translateY(-1px);border-color:color-mix(in srgb,var(--ba-primary) 28%,var(--border,rgba(0,0,0,.10)));box-shadow:0 15px 34px rgba(15,23,42,.07)}.thread-avatar{width:42px;height:42px;display:grid;place-items:center;border-radius:16px;background:var(--ba-primary);color:#fff;font-size:19px;box-shadow:0 10px 22px color-mix(in srgb,var(--ba-primary) 21%,transparent)}.thread-main{display:grid;gap:2px}.thread-main strong,.thread-main small,.thread-main em{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.thread-main strong{font-size:14px;font-weight:1000;letter-spacing:-.02em;color:var(--text,#111827)}.thread-main small{color:var(--muted,#64748b);font-size:12px;font-weight:800}.thread-main em{color:var(--muted,#64748b);font-size:11px;font-style:normal;font-weight:750}.thread-side{display:grid;justify-items:end;gap:5px}.thread-side i{font-style:normal;color:var(--muted,#64748b);font-weight:1000}.ba-chip{max-width:100%;display:inline-flex;align-items:center;min-height:25px;padding:4px 9px;border-radius:999px;font-size:11px;font-weight:950;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:capitalize}.ba-chip.green{background:rgba(34,197,94,.12);color:#16a34a}.ba-chip.red{background:rgba(239,68,68,.12);color:#dc2626}.ba-chip.blue{background:rgba(59,130,246,.12);color:#2563eb}.ba-chip.gray{background:color-mix(in srgb,var(--muted,#64748b) 14%,transparent);color:var(--muted,#64748b)}.ba-chip.orange{background:rgba(245,158,11,.14);color:#b45309}.ba-chip.purple{background:rgba(147,51,234,.12);color:#7e22ce}.ba-table-card{margin-top:10px;padding:10px;border-radius:24px;overflow:hidden}.ba-table-scroll{width:100%;max-width:100%;overflow-x:auto;border-radius:18px;border:1px solid var(--border,rgba(0,0,0,.08))}.ba-table-scroll table{width:100%;min-width:980px;border-collapse:collapse;background:var(--card-bg,var(--surface,#fff));color:var(--text,#111827)}.ba-table-scroll th,.ba-table-scroll td{padding:10px;border-bottom:1px solid var(--border,rgba(0,0,0,.08));vertical-align:top;text-align:left;font-size:13px;color:var(--text,#111827)}.ba-table-scroll th{background:color-mix(in srgb,var(--ba-primary) 6%,var(--card-bg,var(--surface,#fff)));color:var(--muted,#64748b);font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.07em}.ba-table-scroll td strong,.ba-table-scroll td span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ba-table-scroll td span{margin-top:3px;color:var(--muted,#64748b);font-size:11px}.ba-table-actions{display:flex;flex-wrap:wrap;gap:7px}.ba-table-actions button,.ba-btn,.ba-primary,.ba-delete{min-height:34px;border-radius:999px;padding:0 10px;font-size:11px;font-weight:950;cursor:pointer}.ba-btn,.ba-table-actions button{border:1px solid var(--border,rgba(0,0,0,.10));background:var(--surface,#fff);color:var(--text,#111827)}.ba-primary,.ba-table-actions button:first-child{border:0;background:var(--ba-primary);color:#fff}.ba-primary:disabled{opacity:.6;cursor:not-allowed}.ba-delete,.ba-table-actions .ba-delete{color:var(--muted,#64748b);background:color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff));border:1px solid color-mix(in srgb,var(--muted,#64748b) 24%,var(--border,rgba(0,0,0,.10)))}.ba-empty-table{padding:22px;text-align:center;color:var(--muted,#64748b);font-weight:850}.ba-analysis-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;margin-top:10px}.ba-analysis,.ba-empty{padding:13px;border-radius:24px}.ba-analysis span{color:var(--muted,#64748b);font-size:11px;font-weight:950;text-transform:uppercase;letter-spacing:.08em}.ba-analysis strong{display:block;margin-top:8px;font-size:clamp(22px,7vw,30px);line-height:1;font-weight:1000;letter-spacing:-.06em;overflow-wrap:anywhere}.ba-analysis p{margin:8px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.ba-progress{height:8px;margin-top:12px;border-radius:999px;background:color-mix(in srgb,var(--muted,#64748b) 18%,transparent);overflow:hidden}.ba-progress i{display:block;height:100%;border-radius:inherit;background:var(--ba-primary)}.ba-empty{display:grid;place-items:center;align-content:center;gap:8px;min-height:220px;text-align:center;border-style:dashed}.ba-empty div{width:56px;height:56px;display:grid;place-items:center;border-radius:22px;background:color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));font-size:28px}.ba-empty h3{margin:0;font-size:18px;font-weight:1000}.ba-empty p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.ba-sheet-backdrop{position:fixed;inset:0;z-index:80;display:grid;place-items:end center;padding:10px;background:rgba(15,23,42,.58);backdrop-filter:blur(12px)}.ba-sheet{width:min(760px,100%);max-height:min(92dvh,820px);overflow-y:auto;border-radius:28px;padding:14px}.ba-sheet.small{width:min(520px,100%)}.ba-sheet-head,.ba-sheet-profile{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;padding:2px 2px 14px}.ba-sheet-head h2,.ba-sheet-profile h2{margin:0;font-size:20px;font-weight:1000;letter-spacing:-.05em}.ba-sheet-head p,.ba-sheet-profile p{margin:4px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.ba-sheet-head button,.ba-sheet-profile button{width:38px;height:38px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;background:var(--surface,#fff);color:var(--text,#111827);font-weight:1000;cursor:pointer}.ba-form{display:grid;gap:10px}.ba-form label{display:grid;gap:6px}.ba-form span,.ba-form-grid label span{color:var(--muted,#64748b);font-size:11px;font-weight:950;letter-spacing:.06em;text-transform:uppercase}.ba-sheet-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:14px}.ba-sheet-actions button{min-height:38px;border-radius:999px;border:1px solid var(--border,rgba(0,0,0,.10));background:var(--surface,#fff);color:var(--text,#111827);font-weight:950;padding:0 14px}.ba-sheet-actions button.primary{background:var(--ba-primary);color:#fff;border-color:var(--ba-primary)}.ba-menu-list{display:grid;gap:8px}.ba-menu-list button{width:100%;display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:10px;row-gap:2px;align-items:center;text-align:left;padding:11px;border-radius:18px;border:1px solid var(--border,rgba(0,0,0,.10));background:var(--surface,#fff);color:var(--text,#111827);cursor:pointer}.ba-menu-list button.active{border-color:color-mix(in srgb,var(--ba-primary) 35%,var(--border,rgba(0,0,0,.10)));background:color-mix(in srgb,var(--ba-primary) 9%,var(--surface,#fff))}.ba-menu-list button.danger{background:color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff));color:var(--text,#111827)}.ba-menu-list span{grid-row:1/3;width:34px;height:34px;display:grid;place-items:center;border-radius:13px;background:color-mix(in srgb,var(--ba-primary) 10%,transparent);color:var(--ba-primary);font-weight:1000}.ba-menu-list b{font-size:13px;font-weight:1000}.ba-menu-list small{color:var(--muted,#64748b);font-size:11px;font-weight:750}.thread-preview{margin:0 0 10px;padding:12px;border-radius:18px;background:color-mix(in srgb,var(--muted,#64748b) 8%,transparent);color:var(--text,#111827);font-size:13px;line-height:1.55}.ba-drawer-layer{position:fixed;inset:0;z-index:80}.ba-drawer-overlay{position:absolute;inset:0;border:0;background:rgba(15,23,42,.52)}.ba-drawer{position:absolute;right:0;top:0;bottom:0;width:min(94vw,720px);max-width:100vw;overflow-y:auto;overflow-x:hidden;background:var(--bg,#f7f8fb);color:var(--text,#111827);padding:14px;box-shadow:var(--shell-shadow,-24px 0 70px rgba(15,23,42,.22))}.ba-drawer-head{position:sticky;top:0;z-index:2;display:flex;align-items:flex-start;justify-content:space-between;gap:10px;padding:6px 0 12px;background:var(--bg,#f7f8fb)}.ba-drawer-head p{margin:0;color:var(--ba-primary);font-size:11px;font-weight:950;letter-spacing:.08em;text-transform:uppercase}.ba-drawer-head h2{margin:2px 0 0;font-size:22px;font-weight:1000;letter-spacing:-.05em}.ba-drawer-head span{margin-top:3px;display:block;color:var(--muted,#64748b);font-size:12px;font-weight:750}.ba-drawer-head button{width:38px;height:38px;flex:0 0 auto;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:15px;background:var(--surface,#fff);color:var(--text,#111827);font-weight:1000;cursor:pointer}.ba-form-card{margin-top:10px;padding:12px;border-radius:22px}.ba-form-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:9px}.ba-form-grid label{display:grid;gap:6px}.ba-form-grid .wide{grid-column:1/-1}.ba-drawer-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:12px}.message-bubble{max-width:min(560px,100%);padding:12px;border-radius:22px;background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.10));box-shadow:0 12px 28px rgba(15,23,42,.045)}.message-bubble.outbound{margin-left:auto;background:color-mix(in srgb,var(--ba-primary) 9%,var(--card-bg,var(--surface,#fff)))}.message-bubble p{margin:8px 0 0;color:var(--text,#111827);font-size:13px;line-height:1.55;white-space:pre-wrap}.ba-chip-row{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-top:0}@media(min-width:680px){.ba-page{padding:calc(12px * var(--local-density-scale,1))}.ba-analysis-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ba-form-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ba-sheet-backdrop{place-items:center;padding:18px}}@media(min-width:1040px){.ba-page{padding:calc(16px * var(--local-density-scale,1))}.ba-list{grid-template-columns:repeat(2,minmax(0,1fr))}.ba-analysis-grid{grid-template-columns:repeat(4,minmax(0,1fr));max-width:1180px;margin-left:auto;margin-right:auto}.ba-list,.ba-table-card{max-width:1180px;margin-left:auto;margin-right:auto}}@media(max-width:520px){.ba-page{padding:calc(6px * var(--local-density-scale,1))}.ba-search-card{grid-template-columns:auto minmax(0,1fr) auto auto auto;gap:6px;padding:7px;border-radius:22px}.ba-add-inline,.ba-icon-button,.ba-filter-button{width:39px;height:39px}.thread-row{border-radius:20px;padding:9px}.thread-avatar{width:39px;height:39px}.thread-main strong{font-size:13px}.thread-main small,.thread-main em{font-size:11px}.ba-table-card,.ba-analysis,.ba-empty{border-radius:20px;padding:11px}.ba-drawer-actions{grid-template-columns:minmax(0,1fr)}.ba-drawer{width:min(96vw,720px);padding:12px}.ba-sheet-actions{display:grid;grid-template-columns:minmax(0,1fr)}}
`,i$=[{value:"school_admins",label:"School Admins",note:"School-level admins only"},{value:"branch_admins",label:"Branch Admins",note:"Branch administrators only"}],iP=["in_app","email","sms","whatsapp"],iF={id:"",title:"",body:"",audience:"school_admins",schoolId:"all",branchId:"all",priority:"normal",status:"sent",publishAt:"",channels:["in_app"]};function iT(e){let a=Number(e||0);return Number.isFinite(a)?a:0}function iR(e,a=""){return String(e||"").trim()||a}function iD(e){return iE(e?.id??e?.localId??e?.cloudId??e?.payload?.id??e?.payload?.localId)}function iE(e){return null==e?"":String(e).trim()}function iL(e){if(!e)return"Not set";let a="number"==typeof e?e:new Date(e).getTime();if(!Number.isFinite(a))return"Not set";try{return new Intl.DateTimeFormat(void 0,{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(a))}catch{return"Not set"}}function iB(e,a){return e&&!0!==e.isDeleted&&(!e.accountId||!a||e.accountId===a)}function iU(e){return iR(e?.fullName||e?.name||e?.title||e?.label||e?.email,"Unnamed")}function iO(e){let a=String(e||"school_admins").toLowerCase();return i$.some(e=>e.value===a)?a:"school_admins"}function i_(e){let a=(Array.isArray(e)?e:String(e||"in_app").split(",").map(e=>e.trim())).filter(e=>iP.includes(e));return a.length?a:["in_app"]}function iH(e){let a=iO(e);return i$.find(e=>e.value===a)?.label||a.replaceAll("_"," ")}function iK(e){let a=String(e||"sent").toLowerCase();return"draft"===a?"gray":"scheduled"===a?"orange":"failed"===a?"red":"green"}function iq(e){return"school_admins"===e?["admin","school_admin"]:"branch_admins"===e?["branch_admin"]:[]}let iG=new Set(["school_admins","branch_admins"]),iY=new Set(["admin","school_admin","branch_admin"]);function iV(e){return String(e||"").trim().toLowerCase()}async function iW(e){let a=u.db[e];return a?.toArray?a.toArray():[]}function iJ({children:e,tone:a="gray"}){return(0,n.jsx)("span",{className:`ba-chip ${a}`,children:e})}function iZ({icon:e,title:a,text:r}){return(0,n.jsxs)("section",{className:"ba-empty",children:[(0,n.jsx)("div",{className:"ba-empty-icon",children:e}),(0,n.jsx)("h3",{children:a}),(0,n.jsx)("p",{children:r})]})}function iQ(){return(0,n.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,n.jsx)("path",{d:"M4 7h9"}),(0,n.jsx)("path",{d:"M17 7h3"}),(0,n.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,n.jsx)("path",{d:"M4 17h3"}),(0,n.jsx)("path",{d:"M11 17h9"}),(0,n.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function iX(){let e=(0,c.useRouter)(),{accountId:a,authenticated:r,loading:t}=(0,d.F)(),{settings:i,loading:o}=(0,p.t)(),l=i?.primaryColor||"var(--primary-color,#2563eb)",[b,u]=(0,s.useState)(!0),[h,x]=(0,s.useState)("cards"),[g,f]=(0,s.useState)([]),[v,y]=(0,s.useState)([]),[w,j]=(0,s.useState)([]),[k,N]=(0,s.useState)([]),[S,C]=(0,s.useState)([]),[I,A]=(0,s.useState)([]),[z,M]=(0,s.useState)(""),[$,P]=(0,s.useState)("all"),[F,T]=(0,s.useState)("all"),[R,D]=(0,s.useState)("all"),[E,L]=(0,s.useState)(!1),[B,U]=(0,s.useState)(!1),[O,_]=(0,s.useState)(!1),[H,K]=(0,s.useState)("create"),[q,G]=(0,s.useState)(!1),[Y,V]=(0,s.useState)(null),[W,J]=(0,s.useState)(""),[Z,Q]=(0,s.useState)(iF);(0,s.useEffect)(()=>{!t&&(r&&a||e.replace("/login"))},[t,r,a,e]);let X=(e,a)=>{V({tone:e,message:a}),window.setTimeout(()=>V(e=>e?.message===a?null:e),4200)};async function ee(){if(!r||!a)return void u(!1);u(!0),J("");try{let[e,r,t,i,n,s,o,l]=await Promise.all([iW("schools"),iW("branches"),iW("userMemberships"),iW("memberships"),iW("users"),iW("accountUsers"),iW("announcements"),iW("announcementRecipients")]),c=e.filter(e=>iB(e,a)),d=new Set(c.map(e=>iD(e)).filter(Boolean)),p=r.filter(e=>iB(e,a)).filter(e=>!d.size||d.has(iE(e.schoolId))),b=t.length?t:i,u=n.length?n:s,m=o.filter(e=>(function(e,a){if(!iB(e,a)||"owner"!==iV(e?.createdByRole||e?.createdBy||e?.senderRole||e?.authorRole)||e?.accountWide===!0)return!1;let r=String(e?.audience||"").toLowerCase(),t=String(e?.targetRole||"").toLowerCase();if(iG.has(r)||"school_admins"===t||"branch_admins"===t)return!0;let i=(Array.isArray(e?.targetRoles)?e.targetRoles:String(e?.targetRoles||e?.targetRole||e?.role||"").split(",").map(e=>e.trim()).filter(Boolean)).map(iV).filter(Boolean);return i.length>0&&i.every(e=>iY.has(e))})(e,a)).sort((e,a)=>iT(a.sentAt||a.publishAt||a.createdAt)-iT(e.sentAt||e.publishAt||e.createdAt)),h=new Set(m.map(e=>iE(e.id||e.localId)).filter(Boolean));f(c),y(p),j(b.filter(e=>iB(e,a))),N(u.filter(e=>iB(e,a))),C(m),A(l.filter(e=>(function(e,a,r){if(!iB(e,r))return!1;let t=iE(e?.announcementId||e?.announcementLocalId||e?.announcementCloudId);if(t&&a.size&&!a.has(t))return!1;let i=iV(e?.role||e?.recipientRole||e?.targetRole),n=iO(e?.audience||e?.targetRole);return iY.has(i)||iG.has(n)})(e,h,a)))}catch(e){console.error("Failed to load owner announcements:",e),X("error","Failed to load owner announcements.")}finally{u(!1)}}(0,s.useEffect)(()=>{t||o||ee()},[r,a,t,o]);let ea=(0,s.useMemo)(()=>"all"===Z.schoolId?g:g.filter(e=>String(iD(e))===String(Z.schoolId)),[Z.schoolId,g]),er=(0,s.useMemo)(()=>{let e=new Set(ea.map(e=>iD(e)).filter(Boolean));return v.filter(a=>("all"===Z.schoolId||!!e.has(iE(a.schoolId)))&&("all"===Z.branchId||String(iD(a))===String(Z.branchId)))},[v,Z.branchId,Z.schoolId,ea]),et=(0,s.useMemo)(()=>{let e=iq(Z.audience).map(e=>e.toLowerCase()),a=new Set(ea.map(e=>iD(e)).filter(Boolean)),r=new Set(er.map(e=>iD(e)).filter(Boolean)),t=w.filter(t=>{let i=String(t.role||t.roleName||"").toLowerCase();return!!e.includes(i)&&("all"===Z.schoolId||!!a.has(iE(t.schoolId)))&&("all"===Z.branchId||!!r.has(iE(t.branchId)))}),i=new Set;return t.filter(e=>{let a=String(e.userId||e.userLocalId||e.accountUserId||e.email||`${e.role}-${e.schoolId}-${e.branchId}`);return!(!a||i.has(a))&&(i.add(a),!0)})},[Z.audience,Z.branchId,Z.schoolId,w,er,ea]).length,ei=(0,s.useMemo)(()=>{let e=z.toLowerCase().trim();return S.filter(e=>"all"===$||String(e.status||"sent")===$).filter(e=>"all"===F||iO(e.audience||e.targetRole)===F).filter(e=>"all"===R||String(e.priority||"normal")===R).filter(a=>!e||[a.title,a.body,a.message,a.audience,a.status,a.priority,i_(a.channels||a.channel).join(" ")].join(" ").toLowerCase().includes(e)).sort((e,a)=>iT(a.sentAt||a.publishAt||a.createdAt)-iT(e.sentAt||e.publishAt||e.createdAt))},[S,F,R,z,$]),en=(0,s.useMemo)(()=>({total:S.length,shown:ei.length,sent:S.filter(e=>"sent"===String(e.status||"sent")).length,draft:S.filter(e=>"draft"===String(e.status||"")).length,scheduled:S.filter(e=>"scheduled"===String(e.status||"")).length,urgent:S.filter(e=>["urgent","high"].includes(String(e.priority||""))).length,recipients:I.length,schools:g.length,branches:v.length}),[S,v.length,ei.length,I.length,g.length]),es=(0,s.useMemo)(()=>i$.map(e=>({label:e.label,value:S.filter(a=>iO(a.audience||a.targetRole)===e.value).length})),[S]),eo=(0,s.useMemo)(()=>[{label:"Sent",value:en.sent},{label:"Draft",value:en.draft},{label:"Scheduled",value:en.scheduled},{label:"High/Urgent",value:en.urgent}],[en]),el=(0,s.useMemo)(()=>[$,F,R].filter(e=>"all"!==e).length,[F,R,$]);function ec(e){K("edit"),Q({id:iE(e.id||e.localId),title:String(e.title||""),body:String(e.body||e.message||""),audience:iO(e.audience||e.targetRole),schoolId:e.targetSchoolIds?.length===1?String(e.targetSchoolIds[0]):e.schoolId?String(e.schoolId):"all",branchId:e.targetBranchIds?.length===1?String(e.targetBranchIds[0]):e.branchId?String(e.branchId):"all",priority:String(e.priority||"normal"),status:String(e.status||"sent"),publishAt:"scheduled"===e.status&&e.publishAt?function(e){if(!e)return"";let a=new Date(e);if(Number.isNaN(a.getTime()))return"";let r=a.getTimezoneOffset();return new Date(a.getTime()-6e4*r).toISOString().slice(0,16)}(e.publishAt):"",channels:i_(e.channels||e.channel)}),J(""),_(!0)}function ed(e){K("duplicate"),Q({id:"",title:`${String(e.title||"Announcement")} Copy`,body:String(e.body||e.message||""),audience:iO(e.audience||e.targetRole),schoolId:e.targetSchoolIds?.length===1?String(e.targetSchoolIds[0]):"all",branchId:e.targetBranchIds?.length===1?String(e.targetBranchIds[0]):"all",priority:String(e.priority||"normal"),status:"draft",publishAt:"",channels:i_(e.channels||e.channel)}),J(""),_(!0)}async function ep(e,r,t,i,n){for(let a of I.filter(a=>iE(a.announcementId)===e)){let e=iE(a.id||a.localId);e&&await (0,m.R8)("announcementRecipients",e)}let s=i.length?i:["all"],o=r.length?r:[""],l=t.length?t:[""];for(let r of o)for(let t of l)for(let i of s)await (0,m.oJ)("announcementRecipients",{accountId:String(a),schoolId:r,branchId:t,announcementId:e,role:i,audience:Z.audience,channels:Z.channels,channel:Z.channels.join(","),status:"sent"===Z.status?"delivered":Z.status,deliveredAt:"sent"===Z.status?n:void 0,isDeleted:!1})}async function eb(){let e=a?Z.title.trim()?Z.body.trim()?"scheduled"!==Z.status||Z.publishAt?et?"":"No matching school admin or branch admin recipients found for this audience and scope.":"Choose a publish date and time for scheduled announcements.":"Announcement message is required.":"Announcement title is required.":"Sign in before creating announcements.";if(e)return void J(e);G(!0);try{let e=iq(Z.audience),r="all"===Z.schoolId?g.map(e=>iD(e)).filter(Boolean):[iE(Z.schoolId)].filter(Boolean),t="all"===Z.branchId?er.map(e=>iD(e)).filter(Boolean):[iE(Z.branchId)].filter(Boolean),i=Date.now(),n="scheduled"===Z.status&&Z.publishAt?new Date(Z.publishAt).getTime():i,s={accountId:String(a),schoolId:r[0]||null,branchId:t[0]||null,title:Z.title.trim(),body:Z.body.trim(),message:Z.body.trim(),audience:Z.audience,accountWide:!1,targetRole:e[0]||"all",targetRoles:e,targetSchoolIds:r,targetBranchIds:t,channels:Z.channels,channel:Z.channels.join(","),priority:Z.priority,status:Z.status,publishAt:n,sentAt:"sent"===Z.status?i:void 0,createdBy:"owner",createdByRole:"owner",active:!0,isDeleted:!1},o=iE(Z.id);if("edit"===H&&o)await (0,m.Po)("announcements",o,s);else{let e=await (0,m.oJ)("announcements",s);o="object"==typeof e&&e?iE(e.id||e.localId):iE(e)}o&&await ep(o,r,t,e,i),_(!1),Q(iF),X("success","edit"===H?"Announcement updated.":"duplicate"===H?"Announcement duplicated.":"Announcement saved."),await ee()}catch(e){console.error("Failed to save owner announcement:",e),X("error",e?.message||"Failed to save announcement.")}finally{G(!1)}}async function eu(e){let a=iE(e.id||e.localId);if(a&&window.confirm(`Delete "${e.title||"announcement"}"?`))try{for(let e of(await (0,m.R8)("announcements",a),I.filter(e=>iE(e.announcementId)===a))){let a=iE(e.id||e.localId);a&&await (0,m.R8)("announcementRecipients",a)}X("success","Announcement deleted."),await ee()}catch(e){console.error("Failed to delete owner announcement:",e),X("error",e?.message||"Failed to delete announcement.")}}return b||t||o?(0,n.jsx)(i0,{primary:l,title:"Opening owner announcements...",text:"Loading account-wide communication records."}):r&&a?(0,n.jsxs)("main",{className:"ba-page",style:{"--ba-primary":l},children:[(0,n.jsx)("style",{children:i6}),Y&&(0,n.jsxs)("section",{className:`ba-toast ${Y.tone}`,children:[Y.message,(0,n.jsx)("button",{type:"button",onClick:()=>V(null),"aria-label":"Close notification",children:"✕"})]}),(0,n.jsxs)("section",{className:"ba-search-card","aria-label":"Owner announcements search and actions",children:[(0,n.jsxs)("label",{className:"ba-search",children:[(0,n.jsx)("span",{children:"⌕"}),(0,n.jsx)("input",{value:z,onChange:e=>M(e.target.value),placeholder:"Search announcements...","aria-label":"Search announcements"})]}),(0,n.jsx)("button",{type:"button",className:"ba-add-inline",onClick:function(){K("create"),Q(iF),J(""),_(!0)},"aria-label":"New owner announcement",children:"+"}),(0,n.jsxs)("button",{type:"button",className:`ba-filter-button ${el?"active":""}`,onClick:()=>L(!0),"aria-label":"Open filters",title:"Filters",children:[(0,n.jsx)(iQ,{}),el?(0,n.jsx)("b",{children:el}):null]}),(0,n.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>U(!0),"aria-label":"More options",children:"⋯"})]}),el>0&&(0,n.jsxs)("section",{className:"ba-filter-chips","aria-label":"Active filters",children:["all"!==$&&(0,n.jsxs)("button",{type:"button",onClick:()=>P("all"),children:["Status: ",$," \xd7"]}),"all"!==F&&(0,n.jsxs)("button",{type:"button",onClick:()=>T("all"),children:["Audience: ",iH(F)," \xd7"]}),"all"!==R&&(0,n.jsxs)("button",{type:"button",onClick:()=>D("all"),children:["Priority: ",R," \xd7"]})]}),"analytics"===h&&(0,n.jsxs)("section",{className:"ba-analysis-grid",children:[(0,n.jsx)(i7,{title:"Announcements by Audience",rows:es,total:Math.max(1,en.total)}),(0,n.jsx)(i7,{title:"Status Overview",rows:eo,total:Math.max(1,en.total)}),(0,n.jsxs)("article",{className:"ba-analysis",children:[(0,n.jsx)("span",{children:"Account Scope"}),(0,n.jsx)("strong",{children:en.schools}),(0,n.jsxs)("p",{children:[en.branches," branch record(s) available for owner targeting."]})]}),(0,n.jsxs)("article",{className:"ba-analysis",children:[(0,n.jsx)("span",{children:"Recipients"}),(0,n.jsx)("strong",{children:en.recipients}),(0,n.jsx)("p",{children:"Recipient rows generated from account-wide announcements."})]})]}),"table"===h&&(0,n.jsx)(i2,{rows:ei,openEdit:ec,duplicateAnnouncement:ed,deleteAnnouncement:eu}),"cards"===h&&(0,n.jsxs)("section",{className:"ba-list",children:[ei.map(e=>(0,n.jsx)(i1,{announcement:e,openEdit:ec,duplicateAnnouncement:ed,deleteAnnouncement:eu},String(iD(e)))),!ei.length&&(0,n.jsx)(iZ,{icon:"\uD83D\uDCE3",title:"No announcements found",text:"Create owner-level announcements for school admins or branch admins only."})]}),E&&(0,n.jsx)(i4,{status:$,audienceFilter:F,priorityFilter:R,setStatus:P,setAudienceFilter:T,setPriorityFilter:D,clearFilters:()=>{P("all"),T("all"),D("all")},onClose:()=>L(!1)}),B&&(0,n.jsx)(i8,{view:h,summary:en,setView:e=>{x(e),U(!1)},onRefresh:async()=>{U(!1),await ee()},onClose:()=>U(!1)}),O&&(0,n.jsx)(i9,{mode:H,form:Z,setForm:Q,schools:g,targetBranches:er,estimatedRecipients:et,targetSchoolsCount:ea.length,targetBranchesCount:er.length,saving:q,message:W,toggleChannel:function(e){Q(a=>{let r=a.channels.includes(e)?a.channels.filter(a=>a!==e):[...a.channels,e];return{...a,channels:r.length?r:["in_app"]}})},save:eb,onClose:()=>_(!1)})]}):(0,n.jsx)(i0,{primary:l,title:"Redirecting to login...",text:"You must sign in before managing owner announcements."})}function i0({primary:e,title:a,text:r}){return(0,n.jsxs)("main",{className:"ba-page",style:{"--ba-primary":e},children:[(0,n.jsx)("style",{children:i6}),(0,n.jsxs)("section",{className:"ba-state",children:[(0,n.jsx)("div",{className:"ba-spinner"}),(0,n.jsx)("h2",{children:a}),(0,n.jsx)("p",{children:r})]})]})}function i1({announcement:e,openEdit:a,duplicateAnnouncement:r,deleteAnnouncement:t}){return(0,n.jsxs)("article",{className:"announcement-row",children:[(0,n.jsx)("div",{className:"announcement-avatar",children:"\uD83D\uDCE3"}),(0,n.jsxs)("span",{className:"announcement-main",children:[(0,n.jsx)("strong",{children:e.title||"Untitled announcement"}),(0,n.jsxs)("small",{children:[iL(e.sentAt||e.publishAt||e.createdAt)," \xb7 ",iH(e.audience||e.targetRole)]}),(0,n.jsx)("em",{children:iR(e.body||e.message,"No message").slice(0,118)})]}),(0,n.jsxs)("span",{className:"announcement-side",children:[(0,n.jsx)("span",{className:`status-dot-mini ${iK(e.status)}`,title:String(e.status||"sent")}),(0,n.jsx)("button",{type:"button",onClick:()=>a(e),"aria-label":"Edit announcement",children:"✎"}),(0,n.jsx)("button",{type:"button",onClick:()=>r(e),"aria-label":"Duplicate announcement",children:"⧉"}),(0,n.jsx)("button",{type:"button",className:"danger",onClick:()=>t(e),"aria-label":"Delete announcement",children:"⌫"})]})]})}function i2({rows:e,openEdit:a,duplicateAnnouncement:r,deleteAnnouncement:t}){return(0,n.jsx)("section",{className:"ba-table-card",children:(0,n.jsxs)("div",{className:"ba-table-scroll",children:[(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsxs)("th",{children:["Announcements (",e.length,")"]}),(0,n.jsx)("th",{children:"Date"}),(0,n.jsx)("th",{children:"Audience"}),(0,n.jsx)("th",{children:"Priority"}),(0,n.jsx)("th",{children:"Status"}),(0,n.jsx)("th",{children:"Scope"}),(0,n.jsx)("th",{children:"Message"}),(0,n.jsx)("th",{children:"Actions"})]})}),(0,n.jsx)("tbody",{children:e.map(e=>{var i;let s,o,l;return(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{children:[(0,n.jsx)("strong",{children:e.title||"Untitled"}),(0,n.jsx)("span",{children:e.createdByRole||"owner"})]}),(0,n.jsx)("td",{children:iL(e.sentAt||e.publishAt||e.createdAt)}),(0,n.jsx)("td",{children:iH(e.audience||e.targetRole)}),(0,n.jsx)("td",{children:(0,n.jsx)(iJ,{tone:"urgent"===(s=String(e.priority||"normal").toLowerCase())?"red":"high"===s?"orange":"low"===s?"gray":"blue",children:e.priority||"normal"})}),(0,n.jsx)("td",{children:(0,n.jsx)(iJ,{tone:iK(e.status),children:e.status||"sent"})}),(0,n.jsx)("td",{children:(o=Array.isArray((i=e).targetSchoolIds)?i.targetSchoolIds.length:+!!i.schoolId,l=Array.isArray(i.targetBranchIds)?i.targetBranchIds.length:+!!i.branchId,i.accountWide?"Account-wide":o&&l?`${o} school(s), ${l} branch(es)`:o?`${o} school(s)`:l?`${l} branch(es)`:"Account scope")}),(0,n.jsx)("td",{children:iR(e.body||e.message).slice(0,120)}),(0,n.jsx)("td",{children:(0,n.jsxs)("div",{className:"ba-table-actions",children:[(0,n.jsx)("button",{type:"button",onClick:()=>a(e),children:"Edit"}),(0,n.jsx)("button",{type:"button",onClick:()=>r(e),children:"Copy"}),(0,n.jsx)("button",{type:"button",className:"ba-delete",onClick:()=>t(e),children:"Delete"})]})})]},String(iD(e)))})})]}),!e.length&&(0,n.jsx)("div",{className:"ba-empty-table",children:"No announcement matches your filters."})]})})}function i4({status:e,audienceFilter:a,priorityFilter:r,setStatus:t,setAudienceFilter:i,setPriorityFilter:s,clearFilters:o,onClose:l}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Filters"}),(0,n.jsx)("p",{children:"Choose announcement status, admin audience, and priority."})]}),(0,n.jsx)("button",{type:"button",onClick:l,"aria-label":"Close filters",children:"✕"})]}),(0,n.jsxs)("div",{className:"ba-form compact",children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Status"}),(0,n.jsxs)("select",{value:e,onChange:e=>t(e.target.value),children:[(0,n.jsx)("option",{value:"all",children:"All statuses"}),(0,n.jsx)("option",{value:"sent",children:"Sent"}),(0,n.jsx)("option",{value:"draft",children:"Draft"}),(0,n.jsx)("option",{value:"scheduled",children:"Scheduled"}),(0,n.jsx)("option",{value:"failed",children:"Failed"})]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Audience"}),(0,n.jsxs)("select",{value:a,onChange:e=>i(e.target.value),children:[(0,n.jsx)("option",{value:"all",children:"All audiences"}),i$.map(e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value))]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Priority"}),(0,n.jsxs)("select",{value:r,onChange:e=>s(e.target.value),children:[(0,n.jsx)("option",{value:"all",children:"All priorities"}),(0,n.jsx)("option",{value:"normal",children:"Normal"}),(0,n.jsx)("option",{value:"high",children:"High"}),(0,n.jsx)("option",{value:"urgent",children:"Urgent"}),(0,n.jsx)("option",{value:"low",children:"Low"})]})]})]}),(0,n.jsxs)("div",{className:"ba-sheet-actions",children:[(0,n.jsx)("button",{type:"button",onClick:o,children:"Clear"}),(0,n.jsx)("button",{type:"button",className:"primary",onClick:l,children:"Apply"})]})]})})}function i8({view:e,summary:a,setView:r,onRefresh:t,onClose:i}){return(0,n.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("section",{className:"ba-sheet small",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"More"}),(0,n.jsx)("p",{children:"Views and refresh actions are here to keep the page compact."})]}),(0,n.jsx)("button",{type:"button",onClick:i,"aria-label":"Close menu",children:"✕"})]}),(0,n.jsxs)("div",{className:"ba-menu-list",children:[(0,n.jsxs)("button",{type:"button",className:"cards"===e?"active":"",onClick:()=>r("cards"),children:[(0,n.jsx)("span",{children:"☰"}),(0,n.jsx)("b",{children:"List view"}),(0,n.jsxs)("small",{children:[a.shown,"/",a.total," announcements shown"]})]}),(0,n.jsxs)("button",{type:"button",className:"table"===e?"active":"",onClick:()=>r("table"),children:[(0,n.jsx)("span",{children:"☷"}),(0,n.jsx)("b",{children:"Table view"}),(0,n.jsx)("small",{children:"Dense laptop-friendly owner records"})]}),(0,n.jsxs)("button",{type:"button",className:"analytics"===e?"active":"",onClick:()=>r("analytics"),children:[(0,n.jsx)("span",{children:"◔"}),(0,n.jsx)("b",{children:"Analytics"}),(0,n.jsxs)("small",{children:[a.schools," schools \xb7 ",a.branches," branches \xb7 ",a.recipients," recipients"]})]}),(0,n.jsxs)("button",{type:"button",onClick:t,children:[(0,n.jsx)("span",{children:"↻"}),(0,n.jsx)("b",{children:"Refresh"}),(0,n.jsx)("small",{children:"Reload local owner announcements"})]})]})]})})}function i9({mode:e,form:a,setForm:r,schools:t,targetBranches:i,estimatedRecipients:s,targetSchoolsCount:o,targetBranchesCount:l,saving:c,message:d,toggleChannel:p,save:b,onClose:u}){return(0,n.jsxs)("div",{className:"ba-drawer-layer",role:"dialog","aria-modal":"true",children:[(0,n.jsx)("button",{className:"ba-drawer-overlay",type:"button",onClick:u,"aria-label":"Close drawer"}),(0,n.jsxs)("aside",{className:"ba-drawer",children:[(0,n.jsxs)("div",{className:"ba-drawer-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"edit"===e?"Edit Owner Announcement":"duplicate"===e?"Duplicate Announcement":"New Owner Announcement"}),(0,n.jsx)("h2",{children:"Authority Broadcast"}),(0,n.jsxs)("span",{children:[s," estimated recipient(s)"]})]}),(0,n.jsx)("button",{type:"button",onClick:u,"aria-label":"Close announcement form",children:"✕"})]}),d&&(0,n.jsx)("section",{className:"ba-inline-error",children:d}),(0,n.jsxs)("section",{className:"ba-form-card",children:[(0,n.jsxs)("div",{className:"ba-form-grid",children:[(0,n.jsxs)("label",{className:"wide",children:[(0,n.jsx)("span",{children:"Title"}),(0,n.jsx)("input",{value:a.title,onChange:e=>r({...a,title:e.target.value}),placeholder:"Announcement title"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Audience"}),(0,n.jsx)("select",{value:a.audience,onChange:e=>r({...a,audience:e.target.value}),children:i$.map(e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"School Scope"}),(0,n.jsxs)("select",{value:a.schoolId,onChange:e=>r({...a,schoolId:e.target.value,branchId:"all"}),children:[(0,n.jsx)("option",{value:"all",children:"All Schools"}),t.map(e=>(0,n.jsx)("option",{value:String(iD(e)),children:iU(e)},String(iD(e))))]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Branch Scope"}),(0,n.jsxs)("select",{value:a.branchId,onChange:e=>r({...a,branchId:e.target.value}),children:[(0,n.jsx)("option",{value:"all",children:"All Branches"}),i.map(e=>(0,n.jsx)("option",{value:String(iD(e)),children:iU(e)},String(iD(e))))]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Priority"}),(0,n.jsxs)("select",{value:a.priority,onChange:e=>r({...a,priority:e.target.value}),children:[(0,n.jsx)("option",{value:"normal",children:"Normal"}),(0,n.jsx)("option",{value:"high",children:"High"}),(0,n.jsx)("option",{value:"urgent",children:"Urgent"}),(0,n.jsx)("option",{value:"low",children:"Low"})]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Status"}),(0,n.jsxs)("select",{value:a.status,onChange:e=>r({...a,status:e.target.value}),children:[(0,n.jsx)("option",{value:"sent",children:"Send now"}),(0,n.jsx)("option",{value:"draft",children:"Draft"}),(0,n.jsx)("option",{value:"scheduled",children:"Scheduled"})]})]}),"scheduled"===a.status&&(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Publish At"}),(0,n.jsx)("input",{type:"datetime-local",value:a.publishAt,onChange:e=>r({...a,publishAt:e.target.value})})]}),(0,n.jsxs)("label",{className:"wide",children:[(0,n.jsx)("span",{children:"Message"}),(0,n.jsx)("textarea",{value:a.body,onChange:e=>r({...a,body:e.target.value}),placeholder:"Write the message..."})]})]}),(0,n.jsx)("div",{className:"ba-channel-row",children:iP.map(e=>(0,n.jsx)("button",{type:"button",className:a.channels.includes(e)?"active":"",onClick:()=>p(e),children:e.replaceAll("_"," ")},e))}),(0,n.jsxs)("p",{className:"ba-hint",children:["Audience: ",iH(a.audience)," \xb7 Schools: ","all"===a.schoolId?o:1," \xb7 Branches: ","all"===a.branchId?l:1," \xb7 Recipients: ",s]})]}),(0,n.jsxs)("div",{className:"ba-drawer-actions",children:[(0,n.jsx)("button",{type:"button",onClick:u,children:"Cancel"}),(0,n.jsx)("button",{type:"button",className:"primary",disabled:c,onClick:b,children:c?"Saving...":"edit"===e?"Update":"sent"===a.status?"Send":"Save"})]})]})]})}function i7({title:e,rows:a,total:r}){return(0,n.jsxs)("article",{className:"ba-analysis",children:[(0,n.jsx)("span",{children:e}),(0,n.jsx)("strong",{children:a.reduce((e,a)=>e+a.value,0)}),(0,n.jsxs)("div",{className:"ba-analysis-list",children:[a.map(e=>{let a=r?Math.round(e.value/r*100):0;return(0,n.jsxs)("section",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("b",{children:e.label}),(0,n.jsxs)("small",{children:[e.value," \xb7 ",a,"%"]})]}),(0,n.jsx)("div",{className:"ba-progress",children:(0,n.jsx)("i",{style:{width:`${Math.max(4,a)}%`}})})]},e.label)}),!a.length&&(0,n.jsx)("p",{children:"No data available."})]})]})}let i6=`
@keyframes spin { to { transform: rotate(360deg); } }
.ba-page{--ease:cubic-bezier(.2,.8,.2,1);min-height:100dvh;width:100%;max-width:100%;min-width:0;padding:calc(8px * var(--local-density-scale,1));padding-bottom:max(40px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--ba-primary) 9%,transparent),transparent 30rem),var(--bg,#f7f8fb);color:var(--text,#111827);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);font-size:var(--font-size,14px);overflow-x:hidden}.ba-page *,.ba-page *::before,.ba-page *::after{box-sizing:border-box;min-width:0}.ba-page button,.ba-page input,.ba-page select,.ba-page textarea{font:inherit;max-width:100%}.ba-page button{-webkit-tap-highlight-color:transparent}.ba-page input,.ba-page select,.ba-page textarea{width:100%;min-height:44px;border:1px solid var(--input-border,var(--border,rgba(0,0,0,.10)));border-radius:16px;padding:0 12px;background:var(--input-bg,var(--surface,#fff));color:var(--input-text,var(--text,#111827));outline:none;font-weight:750}.ba-page textarea{min-height:130px;padding:12px;resize:vertical;line-height:1.55}.ba-page input:focus,.ba-page select:focus,.ba-page textarea:focus{border-color:color-mix(in srgb,var(--ba-primary) 52%,var(--border,rgba(0,0,0,.10)));box-shadow:0 0 0 4px color-mix(in srgb,var(--ba-primary) 12%,transparent)}.ba-state,.ba-search-card,.announcement-row,.ba-table-card,.ba-analysis,.ba-empty,.ba-sheet,.ba-modal,.ba-form-card{background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.10));box-shadow:0 12px 28px rgba(15,23,42,.045)}.ba-state{min-height:min(420px,calc(100dvh - 32px));width:min(520px,100%);margin:0 auto;display:grid;place-items:center;align-content:center;gap:10px;padding:22px;border-radius:28px;text-align:center}.ba-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--ba-primary) 18%,transparent);border-top-color:var(--ba-primary);animation:spin .8s linear infinite}.ba-state h2{margin:0;font-size:22px;font-weight:1000;letter-spacing:-.04em}.ba-state p{max-width:34rem;margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.ba-toast{position:sticky;top:8px;z-index:40;display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;padding:12px 14px;border-radius:18px;font-size:13px;font-weight:850;box-shadow:0 18px 40px rgba(15,23,42,.12)}.ba-toast.success{background:rgba(34,197,94,.14);color:#166534}.ba-toast.error,.ba-inline-error{background:rgba(239,68,68,.12);color:#991b1b}.ba-toast.info{background:rgba(59,130,246,.13);color:#1d4ed8}.ba-toast button{border:0;background:transparent;color:currentColor;font-weight:1000;cursor:pointer}.ba-inline-error{padding:10px 12px;border-radius:18px;font-size:12px;font-weight:850;margin-bottom:10px}.ba-search-card{display:grid;grid-template-columns:minmax(0,1fr) auto auto auto;gap:8px;align-items:center;margin-top:2px;padding:8px;border-radius:24px}.ba-search{min-width:0;display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:8px;min-height:44px;padding:0 11px;border-radius:18px;background:color-mix(in srgb,var(--muted,#64748b) 7%,transparent)}.ba-search span{color:var(--muted,#64748b);font-size:17px;font-weight:1000}.ba-search input{min-height:42px;border:0;padding:0;border-radius:0;background:transparent;box-shadow:none;font-size:14px}.ba-icon-button,.ba-filter-button,.ba-add-inline{width:42px;height:42px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;display:grid;place-items:center;background:var(--card-bg,var(--surface,#fff));color:var(--text,#111827);font-size:18px;font-weight:1000;cursor:pointer;box-shadow:0 10px 22px rgba(15,23,42,.045)}.ba-add-inline{flex:0 0 42px;border-color:var(--ba-primary);background:var(--ba-primary);color:#fff;font-size:25px;line-height:1;box-shadow:0 12px 28px color-mix(in srgb,var(--ba-primary) 22%,transparent)}.ba-slider-icon{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.ba-filter-button{position:relative;background:color-mix(in srgb,var(--ba-primary) 8%,var(--card-bg,#fff));color:var(--ba-primary)}.ba-filter-button.active{background:var(--ba-primary);color:#fff;border-color:var(--ba-primary)}.ba-filter-button b{position:absolute;top:-4px;right:-4px;min-width:19px;height:19px;display:grid;place-items:center;border-radius:999px;background:#ef4444;color:#fff;font-size:10px;border:2px solid var(--card-bg,#fff)}.ba-filter-chips{display:flex;gap:7px;overflow-x:auto;padding:8px 1px 0;scrollbar-width:none}.ba-filter-chips::-webkit-scrollbar{display:none}.ba-filter-chips button{flex:0 0 auto;min-height:31px;border:0;border-radius:999px;padding:0 10px;background:color-mix(in srgb,var(--ba-primary) 11%,transparent);color:var(--ba-primary);font-size:11px;font-weight:950;white-space:nowrap;cursor:pointer}.ba-list{display:grid;gap:7px;margin-top:10px}.announcement-row{width:100%;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:10px;padding:10px;border-radius:22px;text-align:left}.announcement-avatar{width:48px;height:48px;display:grid;place-items:center;border-radius:18px;background:color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));font-size:22px}.announcement-main,.announcement-main strong,.announcement-main small,.announcement-main em{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.announcement-main strong{color:var(--text,#111827);font-size:14px;font-weight:1000;letter-spacing:-.02em}.announcement-main small{margin-top:3px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.announcement-main em{margin-top:3px;color:color-mix(in srgb,var(--muted,#64748b) 86%,var(--text,#111827));font-size:11px;font-weight:750;font-style:normal}.announcement-side{display:flex;align-items:center;gap:5px}.announcement-side button{width:31px;height:31px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;background:var(--surface,#fff);color:var(--text,#111827);font-size:12px;font-weight:1000;cursor:pointer}.announcement-side button.danger{color:#991b1b;background:color-mix(in srgb,#dc2626 7%,var(--surface,#fff));border-color:color-mix(in srgb,#dc2626 24%,var(--border,rgba(0,0,0,.10)))}.status-dot-mini{width:10px;height:10px;display:inline-block;border-radius:999px;background:var(--muted,#64748b);box-shadow:0 0 0 4px color-mix(in srgb,currentColor 10%,transparent)}.status-dot-mini.green{background:#22c55e}.status-dot-mini.red{background:#ef4444}.status-dot-mini.blue{background:#3b82f6}.status-dot-mini.orange{background:#f59e0b}.status-dot-mini.gray{background:var(--muted,#64748b)}.ba-chip{max-width:100%;display:inline-flex;align-items:center;min-height:24px;padding:3px 8px;border-radius:999px;font-size:10px;font-weight:950;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:capitalize}.ba-chip.green{background:rgba(34,197,94,.12);color:#16a34a}.ba-chip.red{background:rgba(239,68,68,.12);color:#dc2626}.ba-chip.blue{background:rgba(59,130,246,.12);color:#2563eb}.ba-chip.gray{background:color-mix(in srgb,var(--muted,#64748b) 14%,transparent);color:var(--muted,#64748b)}.ba-chip.orange{background:rgba(245,158,11,.14);color:#b45309}.ba-chip.purple{background:rgba(147,51,234,.12);color:#7e22ce}.ba-sheet-backdrop,.ba-drawer-layer{position:fixed;inset:0;z-index:80;display:grid;place-items:end center;padding:10px;background:rgba(15,23,42,.50);backdrop-filter:blur(12px)}.ba-sheet{width:min(760px,100%);max-height:min(88dvh,760px);overflow-y:auto;padding:14px;border-radius:28px 28px 22px 22px;box-shadow:0 30px 90px rgba(15,23,42,.32);animation:sheetIn .18s var(--ease)}.ba-sheet.small{width:min(520px,100%)}@keyframes sheetIn{from{transform:translateY(16px);opacity:.7}to{transform:translateY(0);opacity:1}}.ba-sheet-head,.ba-drawer-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding-bottom:12px}.ba-sheet-head h2,.ba-drawer-head h2{margin:0;color:var(--text,#111827);font-size:21px;font-weight:1000;letter-spacing:-.05em}.ba-sheet-head p,.ba-drawer-head p,.ba-drawer-head span{margin:5px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5;font-weight:750}.ba-sheet-head button,.ba-drawer-head button{width:38px;height:38px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;background:var(--surface,#fff);color:var(--text,#111827);font-weight:1000;cursor:pointer;flex:0 0 auto}.ba-menu-list{display:grid;gap:8px}.ba-menu-list button{width:100%;display:grid;grid-template-columns:42px minmax(0,1fr);column-gap:10px;align-items:center;min-height:58px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:18px;padding:9px;background:var(--surface,#fff);color:var(--text,#111827);text-align:left;cursor:pointer}.ba-menu-list button span{grid-row:span 2;width:42px;height:42px;display:grid;place-items:center;border-radius:16px;background:color-mix(in srgb,var(--ba-primary) 10%,transparent);color:var(--ba-primary);font-weight:1000}.ba-menu-list button b,.ba-menu-list button small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ba-menu-list button b{font-size:13px;font-weight:1000}.ba-menu-list button small{margin-top:2px;color:var(--muted,#64748b);font-size:11px;font-weight:750}.ba-menu-list button.active{border-color:color-mix(in srgb,var(--ba-primary) 34%,var(--border,rgba(0,0,0,.10)));background:color-mix(in srgb,var(--ba-primary) 8%,var(--surface,#fff))}.ba-sheet-actions,.ba-drawer-actions{position:sticky;bottom:-14px;display:flex;justify-content:flex-end;flex-wrap:wrap;gap:8px;margin-top:14px;padding:12px 0 2px;background:linear-gradient(to top,var(--card-bg,var(--surface,#fff)) 70%,transparent)}.ba-sheet-actions button,.ba-drawer-actions button{min-height:42px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;padding:0 16px;background:color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff));color:var(--text,#111827);font-size:12px;font-weight:950;cursor:pointer}.ba-sheet-actions button.primary,.ba-drawer-actions button.primary{border-color:var(--ba-primary);background:var(--ba-primary);color:#fff;box-shadow:0 14px 32px color-mix(in srgb,var(--ba-primary) 25%,transparent)}.ba-drawer-layer{place-items:stretch end;padding:0}.ba-drawer-overlay{position:absolute;inset:0;border:0;background:transparent}.ba-drawer{position:relative;z-index:1;width:min(720px,100%);height:100dvh;overflow-y:auto;background:var(--card-bg,var(--surface,#fff));border-left:1px solid var(--border,rgba(0,0,0,.10));padding:14px;box-shadow:-28px 0 80px rgba(15,23,42,.28)}.ba-form-card{padding:12px;border-radius:24px}.ba-form,.ba-form-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:10px}.ba-form label,.ba-form-grid label{display:grid;gap:6px;min-width:0}.ba-form span,.ba-form-grid span{color:var(--muted,#64748b);font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.06em}.ba-form .wide,.ba-form-grid .wide{grid-column:1/-1}.ba-channel-row{display:flex;gap:7px;overflow-x:auto;margin-top:10px;scrollbar-width:none}.ba-channel-row button{flex:0 0 auto;min-height:34px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;padding:0 11px;background:var(--surface,#fff);color:var(--text,#111827);font-size:11px;font-weight:950;cursor:pointer;text-transform:capitalize}.ba-channel-row button.active{border-color:var(--ba-primary);background:var(--ba-primary);color:#fff}.ba-hint{margin:9px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5;font-weight:800}.ba-analysis-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;margin-top:10px}.ba-analysis,.ba-table-card,.ba-empty{padding:13px;border-radius:24px}.ba-analysis span{color:var(--muted,#64748b);font-size:11px;font-weight:950;text-transform:uppercase;letter-spacing:.08em}.ba-analysis strong{display:block;margin-top:8px;font-size:clamp(22px,7vw,30px);line-height:1;font-weight:1000;letter-spacing:-.06em;overflow-wrap:anywhere}.ba-analysis p{margin:8px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.ba-analysis-list{display:grid;gap:10px;margin-top:12px}.ba-analysis-list section{display:grid;gap:6px;padding:10px;border-radius:16px;background:color-mix(in srgb,var(--muted,#64748b) 8%,transparent)}.ba-analysis-list section>div:first-child{display:flex;justify-content:space-between;gap:10px}.ba-analysis-list b,.ba-analysis-list small{font-size:12px}.ba-analysis-list small{color:var(--muted,#64748b);font-weight:850}.ba-progress{height:8px;border-radius:999px;background:color-mix(in srgb,var(--muted,#64748b) 18%,transparent);overflow:hidden}.ba-progress i{display:block;height:100%;border-radius:inherit;background:var(--ba-primary)}.ba-empty{display:grid;place-items:center;align-content:center;gap:8px;min-height:220px;text-align:center;border-style:dashed}.ba-empty-icon{width:56px;height:56px;display:grid;place-items:center;border-radius:22px;background:color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));font-size:28px}.ba-empty h3{margin:0;font-size:18px;font-weight:1000}.ba-empty p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.ba-table-card{margin-top:10px}.ba-table-scroll{width:100%;max-width:100%;overflow-x:auto;border-radius:18px;border:1px solid var(--border,rgba(0,0,0,.08))}.ba-table-scroll table{width:100%;min-width:980px;border-collapse:collapse;background:var(--card-bg,var(--surface,var(--bg,transparent)))}.ba-table-scroll th,.ba-table-scroll td{padding:10px;border-bottom:1px solid var(--border,rgba(0,0,0,.08));vertical-align:top;text-align:left;font-size:13px}.ba-table-scroll th{background:var(--table-header-bg,color-mix(in srgb,var(--ba-primary) 6%,var(--card-bg,var(--surface,var(--bg,transparent)))));color:var(--table-header-text,var(--muted,var(--text)));font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.07em}.ba-table-scroll td strong,.ba-table-scroll td span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ba-table-scroll td span{margin-top:3px;color:var(--muted,#64748b);font-size:11px}.ba-table-actions{display:flex;flex-wrap:nowrap;gap:7px;width:100%;overflow-x:auto;scrollbar-width:none}.ba-table-actions::-webkit-scrollbar{display:none}.ba-table-actions button{flex:0 0 auto;min-height:34px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;padding:0 10px;background:var(--surface,#fff);color:var(--text,#111827);font-size:11px;font-weight:950;cursor:pointer;white-space:nowrap}.ba-table-actions button:first-child{background:var(--ba-primary);color:#fff;border-color:var(--ba-primary)}.ba-delete,.ba-table-actions button.ba-delete{color:#991b1b;background:color-mix(in srgb,#dc2626 7%,var(--surface,#fff));border-color:color-mix(in srgb,#dc2626 24%,var(--border,rgba(0,0,0,.10)))}.ba-empty-table{padding:22px;text-align:center;color:var(--muted,#64748b);font-weight:850}@media (min-width:680px){.ba-page{padding:calc(12px * var(--local-density-scale,1));padding-bottom:44px}.ba-search-card{grid-template-columns:minmax(0,1fr) 48px 48px 48px}.ba-list{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.announcement-row{border-radius:24px;padding:12px}.ba-analysis-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ba-form,.ba-form-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ba-sheet-backdrop{place-items:center;padding:18px}.ba-sheet{border-radius:28px;padding:18px}.ba-drawer{padding:18px}}@media (min-width:1040px){.ba-page{padding:calc(16px * var(--local-density-scale,1));padding-bottom:48px}.ba-search-card,.ba-list,.ba-analysis-grid,.ba-table-card,.ba-filter-chips{max-width:1180px;margin-left:auto;margin-right:auto}.ba-list{grid-template-columns:repeat(3,minmax(0,1fr))}.ba-analysis-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.ba-form-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (max-width:520px){.ba-page{padding:calc(7px * var(--local-density-scale,1));padding-bottom:max(38px,env(safe-area-inset-bottom))}.ba-icon-button,.ba-filter-button,.ba-add-inline{width:40px;height:40px}.announcement-row{grid-template-columns:auto minmax(0,1fr);align-items:start}.announcement-side{grid-column:1/-1;justify-content:flex-end}.ba-sheet{border-radius:24px 24px 18px 18px;padding:12px}.ba-sheet-actions,.ba-drawer-actions{display:grid;grid-template-columns:minmax(0,1fr)}.ba-sheet-actions button,.ba-drawer-actions button{width:100%}.ba-drawer{width:100%;padding:12px}.ba-channel-row{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.ba-channel-row button{width:100%}}
`,i3=[{title:"Workspaces",defaultOpen:!0,items:[{key:"ownerDashboard",label:"Overview",icon:"\uD83D\uDC51"},{key:"institutionWorkspace",label:"Institutions",icon:"\uD83C\uDFEB"},{key:"users",label:"User Roles",icon:"\uD83D\uDC65"},{key:"ownerBillingWorkspace",label:"Billing",icon:"\uD83D\uDCB3"},{key:"ownerSystemWorkspace",label:"System",icon:"⚙️"},{key:"ownerCommsWorkspace",label:"Communication",icon:"\uD83D\uDCE2"}]}],i5={ownerDashboard:function(e){return(0,n.jsx)(eo,{...e,navSections:i3})},institutionWorkspace:function(e){let[a,r]=s.useState("schools");return(0,n.jsxs)("div",{className:"eds-owner-workspace",children:[(0,n.jsx)(l.A,{value:a,onChange:r,ariaLabel:"Institution views",tabs:[{key:"schools",label:"Schools"},{key:"branches",label:"Branches"}]}),(0,n.jsx)("branches"===a?ao:T,{...e})]})},users:function(){var e;let a,r,t=(0,c.useRouter)(),{accountId:i,authenticated:o,loading:l}=(0,d.F)(),{settings:m,loading:h}=(0,p.t)(),{activeMembership:x}=(0,b.A)(),g=(0,s.useMemo)(()=>aI("eleeveon_open_workspace"),[]),f=(e={openWorkspace:g,activeMembership:x,accountId:i,settings:m},a=aI("activeMembership"),r=e.openWorkspace?.membership||e.activeMembership||a||null,function(...e){for(let a of e){let e=String(a||"").trim();if(e)return e}return""}(e.openWorkspace?.accountId,r?.accountId,e.accountId,e.settings?.accountId,aC("accountId"),aC("eleeveon_account_id"))),v=m?.primaryColor||"var(--primary-color, #2563eb)",[y,w]=(0,s.useState)(!0),[j,k]=(0,s.useState)(!1),[N,S]=(0,s.useState)("cards"),[C,I]=(0,s.useState)(""),[A,z]=(0,s.useState)("all"),[M,$]=(0,s.useState)("all"),[P,F]=(0,s.useState)("all"),[T,R]=(0,s.useState)("all"),[D,E]=(0,s.useState)(!1),[L,B]=(0,s.useState)(!1),[U,O]=(0,s.useState)(null),[_,H]=(0,s.useState)([]),[K,q]=(0,s.useState)([]),[G,Y]=(0,s.useState)([]),[V,W]=(0,s.useState)([]),[J,Z]=(0,s.useState)(!1),[Q,X]=(0,s.useState)(aS),[ee,ea]=(0,s.useState)("");(0,s.useEffect)(()=>{!l&&(o&&f||t.replace("/login"))},[l,o,f,t]);let er=(0,s.useMemo)(()=>new Map(_.map(e=>[aA(e.id),e])),[_]),et=(0,s.useMemo)(()=>new Map(K.map(e=>[aA(e.id),e])),[K]),ei=(0,s.useMemo)(()=>{let e=aA(Q.schoolId);return e?K.filter(a=>aA(a.schoolId)===e):[]},[K,Q.schoolId]),en=()=>{H([]),q([]),Y([]),W([])},es=async()=>{if(!o||!f){en(),w(!1);return}try{w(!0);let[e,a]=await Promise.all([u.db.schools.toArray(),u.db.branches.toArray()]),r=e.filter(e=>aF(e,f)&&!1!==e.active&&!0!==e.isDeleted).sort((e,a)=>String(e.name||"").localeCompare(String(a.name||""))),t=a.filter(e=>aF(e,f)&&!1!==e.active&&!0!==e.isDeleted).sort((e,a)=>String(e.name||"").localeCompare(String(a.name||""))),i=[],n=[];try{let e=await a0({}),a=aX(e);for(let e of(i=a.users,n=aZ(a.memberships))){if(!ak.some(a=>a.value===e.role)||!aF(e,f))continue;let a=i.find(a=>String(aE(a)||"")===String(e.userId||""))||i.find(a=>!!(a.email&&e.email&&aM(a.email)===aM(e.email)));if(!a)continue;let r={membershipId:aB(e),userId:String(aE(a)||""),title:e.title||a.title||"",fullName:e.fullName||a.fullName||a.name||e.email||"Portal User",email:aM(e.email||a.email),phone:a$(a.phone),role:e.role,schoolId:e.schoolId?String(e.schoolId):"",branchId:e.branchId?String(e.branchId):"",active:!1!==e.active&&"inactive"!==e.status&&!1!==a.active&&"inactive"!==a.status,temporaryPassword:a.temporaryPassword||aP(e.email||a.email||"")};await a9({user:a,form:r,accountId:f}),await a7({membership:e,user:a,form:r,accountId:f})}}catch(e){console.warn("Owner backend auth user load failed; using local auth cache fallback:",e),[i,n]=await Promise.all([aO("appUsers","accountUsers","users"),aO("userMemberships","memberships")])}let s=aZ(n).map(e=>{let a=i.find(a=>String(aE(a)||"")===aL(e))||i.find(a=>!!(a.email&&e.email&&aM(a.email)===aM(e.email)));return{...e,accountId:e.accountId||a?.accountId||f,schoolId:e.schoolId??a?.schoolId,branchId:e.branchId??a?.branchId,email:e.email||a?.email,fullName:e.fullName||a?.fullName||a?.name,active:e.active??a?.active,status:e.status||a?.status,mustChangePassword:e.mustChangePassword??a?.mustChangePassword}}).filter(e=>aF(e,f)&&ak.some(a=>a.value===e.role)),o=i.filter(e=>!e.isDeleted&&(!e.accountId||e.accountId===f)&&s.some(a=>String(aE(e)||"")===aL(a)||!!(e.email&&a.email&&aM(e.email)===aM(a.email))));H(r),q(t),Y(o),W(s)}catch(e){console.error("Failed to load owner users and roles:",e),alert("Failed to load owner users and roles."),en()}finally{w(!1)}};(0,s.useEffect)(()=>{es()},[o,f,x?.role,x?.accountId,g?.openedAt,g?.membershipId]);let eo=(0,s.useMemo)(()=>{let e=[];return V.forEach(a=>{let r,t,i,n,s;if(!ak.some(e=>e.value===a.role))return;let o=G.find(e=>String(aE(e)||"")===aL(a))||G.find(e=>!!(e.email&&a.email&&aM(e.email)===aM(a.email))),l=a.schoolId?er.get(aA(a.schoolId)):void 0,c=a.branchId?et.get(aA(a.branchId)):void 0,d=aM(o?.email||a.email),p=function(e){let a=String(e.title||"").trim(),r=String(e.fullName||e.name||e.email||"User").trim();if(!a)return r;let t=a.replace(/\.$/,"").toLowerCase(),i=r.toLowerCase();return i.startsWith(`${t} `)||i.startsWith(`${t}. `)?r:`${a} ${r}`}({title:o?.title||a.title,fullName:o?.fullName||o?.name||a.fullName,email:d}),b=(r=!!(o?.id||o?.localId||o?.email),t=!!(a?.id||a?.localId||a?.role),i=o?.active===!1||o?.status==="inactive",n=a?.active===!1||a?.status==="inactive",s=r&&i||t&&n,{hasLogin:r,hasMembership:t,inactive:s,enabled:r&&t&&!s,mustChangePassword:!!(o?.mustChangePassword||a?.mustChangePassword)});e.push({key:`${a.role}-${aB(a)||d||p}`,role:a.role,user:o,membership:a,school:l,branch:c,title:o?.title||a.title,fullName:p,email:d,phone:a$(o?.phone),subLabel:`${l?.name||"No school"}${c?.name?` \xb7 ${c.name}`:""}`,...b})}),e.sort((e,a)=>{let r={school_admin:1,branch_admin:2,accountant:3};return r[e.role]-r[a.role]||e.fullName.localeCompare(a.fullName)})},[et,V,er,G]),el=(0,s.useMemo)(()=>{let e=C.trim().toLowerCase();return eo.filter(a=>("all"===A||a.role===A)&&("enabled"!==M||!!a.enabled)&&("inactive"!==M||!!a.inactive)&&("all"===P||aA(a.membership?.schoolId)===aA(P))&&("all"===T||aA(a.membership?.branchId)===aA(T))&&(!e||`${a.fullName} ${a.email} ${a.phone} ${a.role} ${a.subLabel}`.toLowerCase().includes(e)))},[M,T,eo,A,P,C]),ec=(0,s.useMemo)(()=>({total:eo.length,schoolAdmins:eo.filter(e=>"school_admin"===e.role).length,branchAdmins:eo.filter(e=>"branch_admin"===e.role).length,accountants:eo.filter(e=>"accountant"===e.role).length,enabled:eo.filter(e=>e.enabled).length,inactive:eo.filter(e=>e.inactive).length,temporary:eo.filter(e=>e.mustChangePassword).length}),[eo]),ed=(0,s.useMemo)(()=>["all"!==A?A:void 0,"all"!==M?M:void 0,"all"!==P?P:void 0,"all"!==T?T:void 0].filter(Boolean).length,[M,T,A,P]),ep=(e,a)=>{X(r=>{let t={...r,[e]:a};if("email"===e){let e=aM(String(a));t.email=e,r.temporaryPassword&&r.temporaryPassword!==aP(r.email)||(t.temporaryPassword=aP(e))}if("schoolId"===e&&(K.some(e=>aA(e.id)===aA(r.branchId)&&aA(e.schoolId)===aA(a))||(t.branchId="")),"role"===e){let e=String(a);ak.find(a=>a.value===e)?.branchRequired||(t.branchId="")}return t}),ea("")},eb=()=>{let e=_[0];X({...aS,schoolId:e?.id?String(e.id):"",branchId:"",temporaryPassword:""}),ea(""),Z(!0)},eu=e=>{X({membershipId:aB(e.membership),userId:String(aE(e.user)||aL(e.membership)||""),title:e.title||e.user?.title||"",fullName:e.user?.fullName||e.user?.name||e.fullName,email:e.email,phone:e.user?.phone||e.phone,role:e.role,schoolId:e.membership?.schoolId?String(e.membership.schoolId):"",branchId:e.membership?.branchId?String(e.membership.branchId):"",active:!e.inactive,temporaryPassword:e.user?.temporaryPassword||aP(e.email)}),ea(""),Z(!0)},em=async()=>{let e=f?Q.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Q.email.trim())?Q.fullName.trim()?ak.some(e=>e.value===Q.role)?Q.schoolId?ak.find(e=>e.value===Q.role)?.branchRequired&&!Q.branchId?`${aT(Q.role)} role must be assigned to a branch.`:Q.temporaryPassword.trim()?"":"Temporary password is required.":"Select the school this user belongs to.":"Owner can assign only school admin, branch admin, or accountant roles.":"Full name is required.":"Please enter a valid email address.":"Email is required because portal users sign in with email and password.":"Sign in first.";if(e)return void ea(e);try{k(!0);let e=await a8({form:Q,users:G,memberships:V});await a9({user:e.user,form:Q,accountId:f}),await a7({membership:e.membership,user:e.user,form:Q,accountId:f}),Z(!1),await es()}catch(e){console.error("Failed to save owner access through backend auth:",e),ea(e?.message||"Failed to save access. Make sure the backend user and membership routes are running.")}finally{k(!1)}},eh=async e=>{if(!e.membership?.id&&!e.membership?.localId){eu(e),ea("Create portal access first.");return}let a=!e.enabled;try{k(!0);let r=String(aB(e.membership)),t=await aV([{endpoint:`/memberships/${encodeURIComponent(r)}`,method:"PATCH",body:{active:a,status:a?"active":"inactive"}},{endpoint:`/user-memberships/${encodeURIComponent(r)}`,method:"PATCH",body:{active:a,status:a?"active":"inactive"}}]),i={membershipId:aB(e.membership),userId:String(aE(e.user)||aL(e.membership)||""),title:e.title||e.user?.title||"",fullName:e.user?.fullName||e.user?.name||e.fullName,email:e.email,phone:e.user?.phone||e.phone,role:e.role,schoolId:String(e.membership?.schoolId||e.school?.id||""),branchId:String(e.membership?.branchId||e.branch?.id||""),active:a,temporaryPassword:e.user?.temporaryPassword||aP(e.email)};e.user&&await a9({user:e.user,form:i,accountId:f}),await a7({membership:t,user:e.user||{id:t.userId,email:e.email},form:i,accountId:f}),await es()}catch(e){console.error("Failed to toggle owner access through backend auth:",e),alert(e?.message||"Failed to update access.")}finally{k(!1)}},ex=async e=>{if(!e.membership?.id&&!e.membership?.localId)return void alert("No membership exists for this access record yet.");if(window.confirm(`Delete ${aT(e.role)} access for ${e.fullName}?

This removes the role/membership from the backend database.`))try{k(!0),await a6(e),await a3(e),await es()}catch(e){console.error("Failed to delete owner access through backend auth:",e),alert(e?.message||"Failed to delete this access role.")}finally{k(!1)}};return l||h||y?(0,n.jsx)(a5,{primary:v,title:"Opening Owner Users...",text:"Loading schools, branches and administrative access."}):o&&f?(0,n.jsxs)("main",{className:"ba-page ownerusers-page",style:{"--ba-primary":v},children:[(0,n.jsx)("style",{children:rs}),(0,n.jsxs)("section",{className:"ba-search-card","aria-label":"Owner users search and actions",children:[(0,n.jsxs)("label",{className:"ba-search",children:[(0,n.jsx)("span",{children:"⌕"}),(0,n.jsx)("input",{placeholder:"Search owner users...",value:C,onChange:e=>I(e.target.value),"aria-label":"Search owner users"})]}),(0,n.jsx)("button",{type:"button",className:"ba-add-inline",onClick:eb,"aria-label":"Add owner user",title:"Add user",children:"+"}),(0,n.jsxs)("button",{type:"button",className:`ba-filter-button ${ed?"active":""}`,onClick:()=>E(!0),"aria-label":"Open filters",title:"Filters",children:[(0,n.jsx)(re,{}),ed?(0,n.jsx)("b",{children:ed}):null]}),(0,n.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>B(!0),"aria-label":"More options",children:"⋯"})]}),ed>0&&(0,n.jsxs)("section",{className:"ba-filter-chips","aria-label":"Active owner user filters",children:["all"!==A&&(0,n.jsxs)("button",{type:"button",onClick:()=>z("all"),children:["Role: ",aT(A)," \xd7"]}),"all"!==M&&(0,n.jsxs)("button",{type:"button",onClick:()=>$("all"),children:["Access: ",M," \xd7"]}),"all"!==P&&(0,n.jsxs)("button",{type:"button",onClick:()=>F("all"),children:["School: ",er.get(aA(P))?.name||P," \xd7"]}),"all"!==T&&(0,n.jsxs)("button",{type:"button",onClick:()=>R("all"),children:["Branch: ",et.get(aA(T))?.name||T," \xd7"]})]}),"table"===N&&(0,n.jsx)("section",{className:"ba-table-card ownerusers-table-card",children:(0,n.jsxs)("div",{className:"ba-table-scroll",children:[(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsxs)("th",{children:["Users (",el.length,")"]}),(0,n.jsx)("th",{children:"Role"}),(0,n.jsx)("th",{children:"School"}),(0,n.jsx)("th",{children:"Branch"}),(0,n.jsx)("th",{children:"Email"}),(0,n.jsx)("th",{children:"Access"}),(0,n.jsx)("th",{children:"Actions"})]})}),(0,n.jsx)("tbody",{children:el.map(e=>{var a;return(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{children:[(0,n.jsx)("strong",{children:e.fullName}),(0,n.jsx)("span",{children:e.phone||e.subLabel})]}),(0,n.jsx)("td",{children:(0,n.jsxs)(ra,{tone:"school_admin"===(a=e.role)?"blue":"branch_admin"===a?"purple":"accountant"===a?"green":"gray",children:[aR(e.role)," ",aT(e.role)]})}),(0,n.jsx)("td",{children:e.school?.name||"No school"}),(0,n.jsx)("td",{children:e.branch?.name||("school_admin"===e.role?"All/School":"No branch")}),(0,n.jsx)("td",{children:e.email||(0,n.jsx)("span",{className:"ownerusers-warn",children:"Email needed"})}),(0,n.jsx)("td",{children:(0,n.jsx)(ra,{tone:e.enabled?"green":e.inactive?"red":"orange",children:e.enabled?"Enabled":e.inactive?"Inactive":"Not Enabled"})}),(0,n.jsx)("td",{children:(0,n.jsxs)("div",{className:"ba-table-actions",children:[(0,n.jsx)("button",{type:"button",onClick:()=>eu(e),children:"Edit"}),(0,n.jsx)("button",{type:"button",onClick:()=>eh(e),children:e.enabled?"Deactivate":"Activate"}),(0,n.jsx)("button",{type:"button",className:"ba-delete",onClick:()=>ex(e),children:"Delete"})]})})]},e.key)})})]}),!el.length&&(0,n.jsx)("div",{className:"ba-empty-table",children:"No owner users match the selected filters."})]})}),"cards"===N&&(0,n.jsxs)("section",{className:"ba-list ownerusers-list",children:[el.map(e=>(0,n.jsxs)("button",{type:"button",className:"student-row ownerusers-row",onClick:()=>O(e),children:[(0,n.jsx)("span",{className:"ownerusers-avatar",children:aD(e.fullName)}),(0,n.jsxs)("span",{className:"student-main",children:[(0,n.jsx)("strong",{children:e.fullName}),(0,n.jsxs)("small",{children:[aR(e.role)," ",aT(e.role)," \xb7 ",e.email||"Email needed"]}),(0,n.jsx)("em",{children:e.subLabel})]}),(0,n.jsxs)("span",{className:"student-side",children:[(0,n.jsx)("span",{className:`status-dot-mini ${e.enabled?"green":e.inactive?"red":"orange"}`}),(0,n.jsx)("i",{children:"⋯"})]})]},e.key)),!el.length&&(0,n.jsx)(rr,{icon:"\uD83D\uDD10",title:"No users found",text:"No school admin, branch admin or accountant records match the selected filters."})]}),D&&(0,n.jsx)(rt,{schools:_,branches:K,roleFilter:A,accessFilter:M,schoolFilter:P,branchFilter:T,setRoleFilter:z,setAccessFilter:$,setSchoolFilter:e=>{F(e),R("all")},setBranchFilter:R,onClose:()=>E(!1)}),L&&(0,n.jsx)(ri,{viewMode:N,setViewMode:e=>{S(e),B(!1)},onAdd:()=>{B(!1),eb()},onRefresh:async()=>{B(!1),await es()},summary:ec,onClose:()=>B(!1)}),U&&(0,n.jsx)(rn,{candidate:U,openCandidate:eu,toggleAccess:eh,deleteAccess:ex,onClose:()=>O(null)}),J&&(0,n.jsx)("div",{className:"ba-sheet-backdrop ownerusers-drawer-layer",role:"dialog","aria-modal":"true",children:(0,n.jsxs)("aside",{className:"ba-sheet ownerusers-drawer",children:[(0,n.jsxs)("div",{className:"ba-sheet-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:Q.membershipId?"Edit Access":"Create Access"}),(0,n.jsxs)("p",{children:[aT(Q.role)," \xb7 ",Q.schoolId?er.get(aA(Q.schoolId))?.name||"Selected school":"Select school"]})]}),(0,n.jsx)("button",{type:"button",onClick:()=>Z(!1),"aria-label":"Close access form",children:"✕"})]}),ee&&(0,n.jsx)("section",{className:"ba-warning ownerusers-message",children:ee}),(0,n.jsxs)("section",{className:"ownerusers-note",children:[(0,n.jsx)("strong",{children:"Owner assignment"}),(0,n.jsx)("span",{children:"Select the school and, when required, the branch where this admin role should operate."})]}),(0,n.jsxs)("div",{className:"ba-form compact",children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Title"}),(0,n.jsx)("select",{value:Q.title,onChange:e=>ep("title",e.target.value),children:aN.map(e=>(0,n.jsx)("option",{value:e,children:e||"No title"},e||"none"))})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Role"}),(0,n.jsx)("select",{value:Q.role,onChange:e=>ep("role",e.target.value),children:ak.map(e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"School"}),(0,n.jsxs)("select",{value:Q.schoolId,onChange:e=>ep("schoolId",e.target.value),children:[(0,n.jsx)("option",{value:"",children:"Select school"}),_.map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Branch"}),(0,n.jsxs)("select",{value:Q.branchId,disabled:!ak.find(e=>e.value===Q.role)?.branchRequired,onChange:e=>ep("branchId",e.target.value),children:[(0,n.jsx)("option",{value:"",children:ak.find(e=>e.value===Q.role)?.branchRequired?"Select branch":"Not required"}),ei.map(e=>(0,n.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Full Name"}),(0,n.jsx)("input",{value:Q.fullName,onChange:e=>ep("fullName",e.target.value)})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Email"}),(0,n.jsx)("input",{value:Q.email,onChange:e=>ep("email",e.target.value),placeholder:"user@example.com"})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Phone"}),(0,n.jsx)("input",{value:Q.phone,onChange:e=>ep("phone",e.target.value)})]}),(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:"Temporary Password"}),(0,n.jsx)("input",{value:Q.temporaryPassword,onChange:e=>ep("temporaryPassword",e.target.value)})]})]}),(0,n.jsxs)("label",{className:"ownerusers-switch-row",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("strong",{children:"Active access"}),(0,n.jsx)("span",{children:"Inactive users remain recorded but cannot use this selected role."})]}),(0,n.jsx)("button",{type:"button",className:`ownerusers-switch ${Q.active?"on":""}`,onClick:()=>ep("active",!Q.active),"aria-pressed":Q.active,children:(0,n.jsx)("span",{})})]}),(0,n.jsxs)("div",{className:"ba-sheet-actions",children:[(0,n.jsx)("button",{type:"button",onClick:()=>Z(!1),children:"Cancel"}),(0,n.jsx)("button",{type:"button",className:"primary",disabled:j,onClick:em,children:j?"Saving...":"Save Access"})]})]})})]}):(0,n.jsx)(a5,{primary:v,title:"Redirecting to login...",text:"You must sign in before managing owner users."})},ownerBillingWorkspace:function(e){let[a,r]=s.useState("billing"),t="subscription"===a?rC.A:"invoices"===a?rD:"payments"===a?r4:rf;return(0,n.jsxs)("div",{className:"eds-owner-workspace",children:[(0,n.jsx)(l.A,{value:a,onChange:r,ariaLabel:"Owner billing",tabs:[{key:"billing",label:"Billing Overview"},{key:"subscription",label:"My Subscription"},{key:"invoices",label:"Invoices"},{key:"payments",label:"Payments"}]}),(0,n.jsx)(t,{...e})]})},ownerSystemWorkspace:function(e){let[a,r]=s.useState("profile"),t="sync"===a?tj:"calendarOverview"===a?tW:tr.A;return(0,n.jsxs)("div",{className:"eds-owner-workspace",children:[(0,n.jsx)(l.A,{value:a,onChange:r,ariaLabel:"Owner system",tabs:[{key:"profile",label:"Account Profile"},{key:"sync",label:"Sync & Backup"},{key:"calendarOverview",label:"Calendar"}]}),(0,n.jsx)(t,{...e})]})},ownerCommsWorkspace:function(e){let[a,r]=s.useState("ownerAnnouncements");return(0,n.jsxs)("div",{className:"eds-owner-workspace",children:[(0,n.jsx)(l.A,{value:a,onChange:r,ariaLabel:"Owner communication",tabs:[{key:"ownerAnnouncements",label:"Announcements"},{key:"messages",label:"Messages"}]}),(0,n.jsx)("messages"===a?iw:iX,{...e})]})},schools:T,branches:ao,billing:rf,subscription:rC.A,invoices:rD,payments:r4,profile:tr.A,sync:tj,calendarOverview:tW,messages:iw,ownerAnnouncements:iX};function ne(){return(0,n.jsx)(o.A,{portalTitle:"Owner Portal",portalSubtitle:"Institutions, user access, billing and account management",homeKey:"ownerDashboard",allowedRoles:["owner","super_admin"],navSections:i3,navigationMode:"branch-workspace",routes:i5,lockedContext:!1,requireSchool:!1,requireBranch:!1})}}},e=>{e.O(0,[8206,6648,1761,3019,69,1439,5125,9540,4967,2975,8365,6228,110,4187,8003,4059,7831,8642,8441,3794,7358],()=>e(e.s=24379)),_N_E=e.O()}]);
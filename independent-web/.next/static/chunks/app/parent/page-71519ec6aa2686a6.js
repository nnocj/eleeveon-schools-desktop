(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7531],{14618:(e,a,r)=>{Promise.resolve().then(r.bind(r,85087))},85087:(e,a,r)=>{"use strict";r.r(a),r.d(a,{NAV_SECTIONS:()=>rK,default:()=>rH});var t=r(95155),i=r(34187),s=r(86263),n=r(84100),o=r(1573),d=r(19035),l=r(6243),p=r(12115),c=r(73321),m=r(52975),h=r(42563);let u=[{id:"pathways-to-possibility",type:"image",src:"/pathways-to-possibility.png",durationSeconds:7},{id:"building-the-future",type:"image",src:"/building-the-future.png",durationSeconds:7},{id:"knowledge-in-motion",type:"image",src:"/knowledge-in-motion.png",durationSeconds:7}],x=["schools","branches","appUsers","parents","students","studentParents","studentEnrollments","classes","attendance","computedResults","reportCards","studentFeeInvoices","studentFeePayments","payments","announcements","calendarEvents","scheduleSessions","portalHighlights","mediaAssets"];function g(e){try{return window.localStorage.getItem(e)||window.sessionStorage.getItem(e)}catch{return null}}function b(e){let a=g(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}}function f(e){return null==e?"":String(e).trim()}function v(e,a){let r=f(e),t=f(a);return!!(r&&t&&r===t)}function j(e,a=""){return String(e??"").trim()||a}function y(e){let a=Number(e??0);return Number.isFinite(a)?a:0}function w(e){return e?.id??e?.localId??e?.cloudId??e?.payload?.id??e?.payload?.localId}function N(e){return!!e&&!0!==e.isDeleted&&!1!==e.active&&!["deleted","archived","inactive","disabled","withdrawn"].includes(j(e.status).toLowerCase())}function k(...e){for(let a of e){let e=f(a);if(e)return e}return""}async function _(e){let a=h.db[e];return a?.toArray?a.toArray():[]}function I(e){return e.filter(N).length}function S(e,a){let r=f(a);if(!r)return"";let t=e.find(e=>v(w(e),r));return j(t?.publicUrl||t?.remoteUrl||t?.previewDataUrl||t?.thumbnailDataUrl||t?.localObjectUrl)}function C({slides:e}){let[a,r]=(0,p.useState)(0),i=e[a%Math.max(e.length,1)];return((0,p.useEffect)(()=>{if(!i||e.length<=1||"video"===i.type)return;let a=window.setTimeout(()=>r(a=>(a+1)%e.length),1e3*i.durationSeconds);return()=>window.clearTimeout(a)},[i,e.length]),i)?(0,t.jsxs)("section",{className:"pd-hero",children:["video"===i.type?(0,t.jsx)("video",{src:i.src,poster:i.poster,autoPlay:!0,muted:!0,playsInline:!0,onEnded:()=>r(a=>(a+1)%e.length)},i.id):(0,t.jsx)("img",{src:i.src,alt:""},i.id),e.length>1?(0,t.jsx)("div",{className:"pd-hero-dots",children:e.map((e,i)=>(0,t.jsx)("button",{type:"button",className:i===a?"active":"","aria-label":`Show slide ${i+1}`,onClick:()=>r(i)},e.id))}):null]}):null}function $({navigate:e,navSections:a}){let r=(0,c.useRouter)(),{accountId:i,authenticated:s,loading:n}=(0,o.F)(),{settings:h,loading:M}=(0,d.t)(),{activeSchoolId:T,activeBranchId:L,activeSchool:D,activeBranch:R}=(0,l.c)(),{activeParentId:B,activeMembership:E}=(0,m.A)(),O=h?.primaryColor||"var(--primary-color,#2563eb)",F=(0,p.useMemo)(()=>b("eleeveon_open_workspace"),[]),U=F?.membership||E||b("activeMembership")||null,V=k(F?.schoolId,U?.schoolId,T,D?.id,h?.schoolId,g("activeSchoolId")),W=k(F?.branchId,U?.branchId,U?.schoolBranchId,L,R?.id,h?.branchId,g("activeBranchId")),K=k(F?.parentLocalId,U?.parentLocalId,U?.parentId,B,g("activeParentId")),[G,H]=(0,p.useState)(!0),[Y,J]=(0,p.useState)({});async function q(){if(!s||!i){J({}),H(!1);return}H(!0);try{let e=await Promise.all(x.map(async e=>{let a=await _(e);return[e,a.filter(e=>(function(e,a,r,t){if(!0===e.isDeleted||e.accountId&&a&&!v(e.accountId,a))return!1;let i=e.schoolId??e.schoolLocalId??e.payload?.schoolId,s=e.branchId??e.branchLocalId??e.payload?.branchId;return(!r||!i||!!v(i,r))&&(!t||!s||!!v(s,t))})(e,i,V,W))]}));J(Object.fromEntries(e))}finally{H(!1)}}(0,p.useEffect)(()=>{!n&&(s&&i||r.replace("/login"))},[n,s,i,r]),(0,p.useEffect)(()=>{n||M||q()},[s,i,V,W,K,n,M]);let Z=(0,p.useMemo)(()=>(Y.parents||[]).find(e=>K&&v(w(e),K))||null,[Y.parents,K]),X=(0,p.useMemo)(()=>(Y.studentParents||[]).filter(e=>K&&v(e.parentId||e.parentLocalId,K)),[Y.studentParents,K]),Q=(0,p.useMemo)(()=>{let e=(Y.students||[]).filter(N),a=new Set(X.map(e=>f(e.studentId||e.studentLocalId)).filter(Boolean));if(a.size)return e.filter(e=>a.has(f(w(e))));let r=Z?.email||U?.parentEmail,t=Z?.phone||U?.parentPhone;return e.filter(e=>!!(r&&v(e.parentEmail,r)||t&&v(e.parentPhone,t)))},[Y.students,X,Z,U]),ee=(0,p.useMemo)(()=>new Set(Q.map(e=>f(w(e))).filter(Boolean)),[Q]),ea=(0,p.useMemo)(()=>{let e=(Y.attendance||[]).filter(e=>ee.has(f(e.studentId))),a=new Date().toISOString().slice(0,10),r=e.filter(e=>j(e.date||e.createdAt).startsWith(a)),t=r.filter(e=>"present"===j(e.status).toLowerCase()).length,i=r.length?Math.round(t/r.length*100):0,s=(Y.computedResults||[]).filter(e=>ee.has(f(e.studentId))),n=s.length?Math.round(s.reduce((e,a)=>e+y(a.percentage||a.average||a.score||a.totalScore),0)/s.length):0,o=(Y.studentFeeInvoices||[]).filter(e=>ee.has(f(e.studentId))),d=[...Y.studentFeePayments||[],...Y.payments||[]].filter(e=>!e.studentId||ee.has(f(e.studentId))),l=o.reduce((e,a)=>e+y(a.total||a.amount||a.netAmount),0),p=d.reduce((e,a)=>e+y(a.amount||a.total),0);return{children:Q.length,attendancePercent:i,present:t,attendanceRecorded:r.length,results:s.length,averageScore:n,invoices:I(o),payments:I(d),paidTotal:p,feeBalance:Math.max(0,l-p),currency:j(o[0]?.currencyCode||d[0]?.currencyCode,"GHS")}},[Y,ee,Q.length]),er=(0,p.useMemo)(()=>(Y.announcements||[]).filter(N).sort((e,a)=>y(a.publishAt||a.sentAt||a.updatedAt||a.createdAt)-y(e.publishAt||e.sentAt||e.updatedAt||e.createdAt)).slice(0,2),[Y.announcements]),et=(0,p.useMemo)(()=>(Y.calendarEvents||[]).filter(N).sort((e,a)=>new Date(e.startAt||e.startDate||e.date||0).getTime()-new Date(a.startAt||a.startDate||a.date||0).getTime()).slice(0,2),[Y.calendarEvents]),ei=(0,p.useMemo)(()=>{var e,a;let r,t;return e=Y.portalHighlights||[],a=(Y.mediaAssets||[]).filter(N),r=Date.now(),(t=e.filter(N).filter(e=>e?.metadata?.placement!=="gallery").filter(e=>{if(!(Array.isArray(e.audiences)?e.audiences.map(e=>j(e).toLowerCase()):[j(e.audience||e.portal||e.role||"all").toLowerCase()]).some(e=>["all","parent","parents"].includes(e))||!["published","scheduled","active"].includes(j(e.status,"published").toLowerCase()))return!1;let a=y(e.startAt),t=y(e.endAt);return(!a||!(a>r))&&(!t||!(t<r))}).sort((e,a)=>y(e.displayOrder??e.order)-y(a.displayOrder??a.order)).map((e,r)=>{let t="video"===j(e.mediaType).toLowerCase()?"video":"image",i=S(a,e.mediaAssetId)||("image"===t?j(e.fallbackImageUrl):"");return i?{id:f(w(e))||`parent-highlight-${r}`,type:t,src:i,poster:S(a,e.posterMediaAssetId)||j(e.fallbackImageUrl)||void 0,durationSeconds:Math.max(3,Math.min(30,y(e.durationSeconds||7)))}:null}).filter(e=>!!e)).length?t:u},[Y.portalHighlights,Y.mediaAssets]);function es(a){if(e)return void e(a);try{window.dispatchEvent(new CustomEvent("eleeveon:portal-route",{detail:{key:a}}))}catch{}}return G||n||M?(0,t.jsx)(A,{primary:O,title:"Opening parent home..."}):(0,t.jsxs)("main",{className:"pd-page",style:{"--pd-primary":O},children:[(0,t.jsx)("style",{children:P}),(0,t.jsx)(C,{slides:ei}),(0,t.jsxs)("section",{className:"pd-metric-grid",children:[(0,t.jsxs)("button",{type:"button",className:"pd-metric",onClick:()=>es("childAttendance"),children:[(0,t.jsx)("span",{children:"Attendance"}),(0,t.jsxs)("strong",{children:[ea.attendancePercent,"%"]}),(0,t.jsxs)("small",{children:[ea.present," ","present today"]})]}),(0,t.jsxs)("button",{type:"button",className:"pd-metric",onClick:()=>es("childResults"),children:[(0,t.jsx)("span",{children:"Results"}),(0,t.jsxs)("strong",{children:[ea.averageScore||"—",ea.averageScore?"%":""]}),(0,t.jsxs)("small",{children:[ea.results," ","result record(s)"]})]})]}),(0,t.jsxs)("section",{className:"pd-grid",children:[(0,t.jsxs)("article",{className:"pd-card",children:[(0,t.jsxs)("header",{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"Family"}),(0,t.jsx)("h2",{children:"My children"})]}),(0,t.jsx)("button",{type:"button",onClick:()=>es("children"),children:"View all"})]}),(0,t.jsxs)("div",{className:"pd-list",children:[Q.slice(0,3).map((e,a)=>(0,t.jsxs)("button",{type:"button",className:"pd-row",onClick:()=>es("children"),children:[(0,t.jsx)("span",{className:"pd-avatar",children:j(e.fullName||e.name,"C").slice(0,1).toUpperCase()}),(0,t.jsxs)("span",{children:[(0,t.jsx)("strong",{children:j(e.fullName||e.name,"Student")}),(0,t.jsx)("small",{children:j(e.className,"Open student profile")})]}),(0,t.jsx)("i",{children:"›"})]},f(w(e))||a)),Q.length?null:(0,t.jsx)(z,{text:"No linked children found."})]})]}),(0,t.jsxs)("article",{className:"pd-card pd-fees",children:[(0,t.jsxs)("header",{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"Account"}),(0,t.jsx)("h2",{children:"Fees"})]}),(0,t.jsx)("button",{type:"button",onClick:()=>es("childFees"),children:"Open"})]}),(0,t.jsx)("strong",{className:"pd-big-number",children:function(e,a="GHS"){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:a,maximumFractionDigits:0}).format(y(e))}catch{return`${a} ${y(e).toLocaleString()}`}}(ea.feeBalance,ea.currency)}),(0,t.jsx)("p",{children:ea.feeBalance?"Outstanding balance":"Account currently clear"}),(0,t.jsxs)("div",{className:"pd-inline-stats",children:[(0,t.jsxs)("span",{children:[(0,t.jsx)("b",{children:ea.invoices}),"Invoices"]}),(0,t.jsxs)("span",{children:[(0,t.jsx)("b",{children:ea.payments}),"Payments"]})]})]}),(0,t.jsxs)("article",{className:"pd-card",children:[(0,t.jsxs)("header",{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"Notice board"}),(0,t.jsx)("h2",{children:"Announcements"})]}),(0,t.jsx)("button",{type:"button",onClick:()=>es("announcements"),children:"View all"})]}),(0,t.jsxs)("div",{className:"pd-list",children:[er.map((e,a)=>(0,t.jsxs)("button",{type:"button",className:"pd-row compact",onClick:()=>es("announcements"),children:[(0,t.jsx)("span",{className:"pd-icon",children:"\uD83D\uDCE3"}),(0,t.jsxs)("span",{children:[(0,t.jsx)("strong",{children:j(e.title,"Announcement")}),(0,t.jsx)("small",{children:j(e.message||e.body||e.content,"Open to read")})]}),(0,t.jsx)("i",{children:"›"})]},f(w(e))||a)),er.length?null:(0,t.jsx)(z,{text:"No announcements yet."})]})]}),(0,t.jsxs)("article",{className:"pd-card",children:[(0,t.jsxs)("header",{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"School day"}),(0,t.jsx)("h2",{children:"Upcoming"})]}),(0,t.jsx)("button",{type:"button",onClick:()=>es("calendar"),children:"Calendar"})]}),(0,t.jsxs)("div",{className:"pd-list",children:[et.map((e,a)=>(0,t.jsxs)("button",{type:"button",className:"pd-row compact",onClick:()=>es("calendar"),children:[(0,t.jsx)("span",{className:"pd-icon",children:"\uD83D\uDDD3️"}),(0,t.jsxs)("span",{children:[(0,t.jsx)("strong",{children:j(e.title||e.name,"School event")}),(0,t.jsx)("small",{children:function(e){if(!e)return"Not set";let a=new Date(e);return Number.isFinite(a.getTime())?new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric"}).format(a):"Not set"}(e.startAt||e.startDate||e.date)})]}),(0,t.jsx)("i",{children:"›"})]},f(w(e))||a)),et.length?null:(0,t.jsx)(z,{text:"No upcoming events."})]})]})]})]})}function z({text:e}){return(0,t.jsx)("div",{className:"pd-empty",children:e})}function A({primary:e,title:a}){return(0,t.jsxs)("main",{className:"pd-page",style:{"--pd-primary":e},children:[(0,t.jsx)("style",{children:P}),(0,t.jsxs)("section",{className:"pd-state",children:[(0,t.jsx)("div",{className:"pd-spinner"}),(0,t.jsx)("h2",{children:a})]})]})}let P=`
@keyframes pdSpin {
  to {
    transform: rotate(360deg);
  }
}

.pd-page {
  width: 100%;
  height: auto !important;
  min-height: 0 !important;
  overflow: visible !important;
  padding: 8px 8px calc(76px + env(safe-area-inset-bottom, 0px));
  color: var(--text, #111827);
  background: var(--bg, #f7f8fb);
}

.pd-page,
.pd-page * {
  box-sizing: border-box;
  min-width: 0;
}

.pd-page button {
  font: inherit;
  cursor: pointer;
}

.pd-hero {
  position: relative;
  width: 100%;
  height: clamp(290px, 47vw, 390px);
  overflow: hidden;
  border-radius: 25px;
  background:
    color-mix(
      in srgb,
      var(--pd-primary) 12%,
      #0f172a
    );
  box-shadow: 0 14px 34px rgba(15,23,42,.08);
}

.pd-hero img,
.pd-hero video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.pd-hero-dots {
  position: absolute;
  left: 50%;
  bottom: 11px;
  z-index: 3;
  display: flex;
  gap: 6px;
  transform: translateX(-50%);
}

.pd-hero-dots button {
  width: 7px;
  height: 7px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: rgba(255,255,255,.52);
}

.pd-hero-dots button.active {
  width: 20px;
  background: #fff;
}

.pd-metric-grid,
.pd-grid {
  display: grid;
  gap: 9px;
  margin-top: 9px;
}

.pd-metric-grid {
  grid-template-columns: repeat(2, minmax(0,1fr));
}

.pd-metric,
.pd-card {
  border:
    1px solid
    var(--border, rgba(15,23,42,.09));
  background:
    var(--card-bg, var(--surface,#fff));
  color: inherit;
  box-shadow:
    0 8px 22px rgba(15,23,42,.045);
}

.pd-metric {
  min-height: 92px;
  padding: 12px;
  border-radius: 20px;
  text-align: left;
}

.pd-metric > span,
.pd-metric > strong,
.pd-metric > small {
  display: block;
}

.pd-metric > span {
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
}

.pd-metric > strong {
  margin-top: 5px;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -.05em;
}

.pd-metric > small {
  margin-top: 5px;
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 750;
}

.pd-card {
  padding: 13px;
  border-radius: 22px;
}

.pd-card header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 9px;
}

.pd-card header span {
  display: block;
  color: var(--muted,#64748b);
  font-size: 9px;
  font-weight: 900;
  letter-spacing: .09em;
  text-transform: uppercase;
}

.pd-card h2 {
  margin: 2px 0 0;
  font-size: 16px;
  letter-spacing: -.03em;
}

.pd-card header button {
  border: 0;
  border-radius: 999px;
  padding: 6px 9px;
  background:
    color-mix(
      in srgb,
      var(--pd-primary) 9%,
      transparent
    );
  color: var(--pd-primary);
  font-size: 10px;
  font-weight: 900;
}

.pd-list {
  display: grid;
  gap: 6px;
}

.pd-row {
  width: 100%;
  display: grid;
  grid-template-columns: auto minmax(0,1fr) auto;
  align-items: center;
  gap: 9px;
  padding: 8px;
  border: 0;
  border-radius: 15px;
  background:
    color-mix(
      in srgb,
      var(--muted,#64748b) 5%,
      transparent
    );
  color: inherit;
  text-align: left;
}

.pd-avatar,
.pd-icon {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background:
    color-mix(
      in srgb,
      var(--pd-primary) 10%,
      transparent
    );
}

.pd-avatar {
  color: var(--pd-primary);
  font-weight: 1000;
}

.pd-row strong,
.pd-row small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pd-row strong {
  font-size: 12px;
}

.pd-row small {
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 10px;
}

.pd-row i {
  color: var(--muted,#64748b);
  font-style: normal;
  font-size: 18px;
}

.pd-big-number {
  display: block;
  font-size: 27px;
  line-height: 1;
  letter-spacing: -.05em;
}

.pd-fees p {
  margin: 5px 0 0;
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 750;
}

.pd-inline-stats {
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 7px;
  margin-top: 12px;
}

.pd-inline-stats span {
  padding: 9px;
  border-radius: 14px;
  background:
    color-mix(
      in srgb,
      var(--muted,#64748b) 6%,
      transparent
    );
  color: var(--muted,#64748b);
  font-size: 9px;
  font-weight: 800;
}

.pd-inline-stats b {
  display: block;
  margin-bottom: 2px;
  color: var(--text,#111827);
  font-size: 15px;
}

.pd-empty {
  padding: 18px 8px;
  text-align: center;
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 750;
}

.pd-state {
  min-height: 280px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
}

.pd-spinner {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border:
    4px solid
    color-mix(
      in srgb,
      var(--pd-primary) 16%,
      transparent
    );
  border-top-color: var(--pd-primary);
  animation: pdSpin .8s linear infinite;
}

.pd-state h2 {
  margin: 0;
  font-size: 17px;
}

/*
 * Single document scroll ownership.
 */
.pd-page,
.app-content,
.app-content-inner,
.shell-portal-content,
.shell-content-background {
  height: auto !important;
  max-height: none !important;
  min-height: 0 !important;
  overflow-y: visible !important;
  overscroll-behavior-y: auto !important;
}

html {
  overflow-y: auto !important;
}

body {
  overflow-y: visible !important;
}

@media (min-width: 720px) {
  .pd-page {
    padding: 12px 12px 24px;
  }

  .pd-grid {
    grid-template-columns:
      repeat(2,minmax(0,1fr));
  }

  .pd-hero {
    height: 370px;
  }
}

@media (min-width: 1100px) {
  .pd-page {
    max-width: 1180px;
    margin: 0 auto;
  }
}
`;var M=r(62511),T=r(23585);let L=e=>null==e?"":String(e).trim(),D=(e,a)=>L(e)===L(a),R=e=>String(e??"").trim().toLowerCase(),B=e=>{let a=String(e||"active").replaceAll("_"," ");return a.charAt(0).toUpperCase()+a.slice(1)},E=e=>e&&"active"!==e?"graduated"===e?"blue":"transferred"===e?"orange":"withdrawn"===e?"red":"gray":"green",O=e=>{let a=String(e||"").trim();if(!a.startsWith("#"))return"#ffffff";let r=a.slice(1);if(3===r.length&&(r=r.split("").map(e=>e+e).join("")),!/^[0-9a-fA-F]{6}$/.test(r))return"#ffffff";let t=Number.parseInt(r,16);return(299*(t>>16&255)+587*(t>>8&255)+114*(255&t))/1e3>155?"#111827":"#ffffff"},F=e=>{if("number"==typeof e.age&&Number.isFinite(e.age))return e.age;if(!e.dateOfBirth)return null;let a=new Date(e.dateOfBirth);if(!Number.isFinite(a.getTime()))return null;let r=new Date,t=r.getFullYear()-a.getFullYear(),i=r.getMonth()-a.getMonth();return(i<0||0===i&&r.getDate()<a.getDate())&&(t-=1),t>=0?t:null};function U(e,a){let r=new Map;return e.forEach(e=>{let t=a(e)||"Not set";r.set(t,(r.get(t)||0)+1)}),Array.from(r.entries()).map(([e,a])=>({name:e,count:a})).sort((e,a)=>a.count-e.count||e.name.localeCompare(a.name))}function V({name:e,photo:a,primary:r,size:i="normal"}){return(0,t.jsx)("div",{className:`pp-avatar ${"large"===i?"large":""}`,style:{background:a?`url("${a}") center/cover`:r,color:a?"#ffffff":O(r),borderColor:a?"transparent":`color-mix(in srgb, ${r} 70%, transparent)`},"aria-label":`${e} photo`,children:!a&&String(e||"S").slice(0,1).toUpperCase()})}function W({children:e,tone:a="gray"}){return(0,t.jsx)("span",{className:`pp-chip ${a}`,children:e})}function K({icon:e,title:a,text:r}){return(0,t.jsxs)("section",{className:"pp-empty",children:[(0,t.jsx)("div",{className:"pp-empty-icon",children:e}),(0,t.jsx)("h3",{children:a}),(0,t.jsx)("p",{children:r})]})}function G({title:e,subtitle:a,items:r}){let i=r.reduce((e,a)=>e+a.count,0);return(0,t.jsxs)("section",{className:"pp-summary-section",children:[(0,t.jsxs)("div",{className:"pp-section-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:a}),(0,t.jsx)("h3",{children:e})]}),(0,t.jsxs)(W,{children:[r.length," group(s)"]})]}),(0,t.jsxs)("div",{className:"pp-summary-list",children:[r.map(e=>{let a=i?Math.round(e.count/i*100):0;return(0,t.jsxs)("article",{className:"pp-summary-row",children:[(0,t.jsxs)("div",{className:"pp-summary-row-top",children:[(0,t.jsx)("strong",{children:e.name}),(0,t.jsx)("span",{children:e.count})]}),(0,t.jsx)("div",{className:"pp-progress-track",children:(0,t.jsx)("div",{style:{width:`${a}%`}})}),(0,t.jsxs)("small",{children:[a,"% of linked children"]})]},e.name)}),!r.length&&(0,t.jsx)(K,{icon:"\uD83D\uDCCA",title:"No summary data",text:"There is no information available for this summary."})]})]})}let H=`
@keyframes ppSpin {
  to { transform: rotate(360deg); }
}

.pp-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 8px;
  padding-bottom: max(32px, env(safe-area-inset-bottom));
  overflow-x: hidden;
  background: var(--bg, #f8fafc);
  color: var(--text, #0f172a);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--font-size, 16px);
}

.pp-page *,
.pp-page *::before,
.pp-page *::after {
  box-sizing: border-box;
}

.pp-page button,
.pp-page input,
.pp-page select {
  font: inherit;
}

.pp-state-card {
  width: min(460px, 100%);
  min-height: min(420px, calc(100dvh - 32px));
  margin: 0 auto;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  padding: 24px;
  border: 1px solid var(--border, rgba(148, 163, 184, .22));
  border-radius: 28px;
  background: var(--card, var(--surface, #fff));
  box-shadow: var(--shell-shadow, 0 24px 60px rgba(15, 23, 42, .08));
  text-align: center;
}

.pp-state-card h2,
.pp-state-card p {
  margin: 0;
}

.pp-state-card h2 {
  font-size: 22px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.pp-state-card p {
  max-width: 34rem;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.6;
}

.pp-spinner {
  width: 38px;
  height: 38px;
  border: 4px solid color-mix(in srgb, var(--pp-primary) 18%, transparent);
  border-top-color: var(--pp-primary);
  border-radius: 999px;
  animation: ppSpin .8s linear infinite;
}

.pp-action-strip {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 44px 44px;
  gap: 7px;
  width: 100%;
  padding: 7px;
  border: 1px solid var(--border, rgba(148, 163, 184, .20));
  border-radius: 20px;
  background: var(--card, var(--surface, #fff));
  box-shadow: 0 10px 26px rgba(15, 23, 42, .055);
}

.pp-search-box {
  min-width: 0;
  min-height: 44px;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 10px;
  border: 1px solid var(--input-border, var(--border, rgba(148, 163, 184, .24)));
  border-radius: 14px;
  background: var(--input-bg, var(--surface, #fff));
  color: var(--muted, #64748b);
}

.pp-search-box:focus-within {
  border-color: var(--pp-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--pp-primary) 12%, transparent);
}

.pp-search-box > span {
  flex: 0 0 auto;
  font-size: 21px;
  line-height: 1;
}

.pp-search-box input {
  min-width: 0;
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--text, #0f172a);
  font-weight: 760;
}

.pp-search-box input::placeholder {
  color: var(--muted, #94a3b8);
}

.pp-search-clear {
  width: 26px;
  height: 26px;
  flex: 0 0 auto;
  border: 0;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 12%, transparent);
  color: var(--muted, #64748b);
  cursor: pointer;
}

.pp-filter-button,
.pp-more-button {
  position: relative;
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 1000;
}

.pp-filter-button {
  border: 1px solid color-mix(in srgb, var(--pp-primary) 18%, var(--border, transparent));
  background: color-mix(in srgb, var(--pp-primary) 9%, var(--card, #fff));
  color: var(--pp-primary);
}

.pp-filter-button.active {
  border-color: var(--pp-primary);
  background: var(--pp-primary);
  color: var(--pp-primary-text);
  box-shadow: 0 8px 18px color-mix(in srgb, var(--pp-primary) 24%, transparent);
}

.pp-more-button {
  border: 1px solid var(--border, rgba(148, 163, 184, .24));
  background: var(--card, var(--surface, #fff));
  color: var(--text, #0f172a);
  box-shadow: 0 6px 16px rgba(15, 23, 42, .05);
}

.pp-action-count {
  position: absolute;
  top: -5px;
  right: -5px;
  min-width: 19px;
  height: 19px;
  display: grid;
  place-items: center;
  padding: 0 5px;
  border: 2px solid var(--card, #fff);
  border-radius: 999px;
  background: #ef4444;
  color: #fff;
  font-size: 10px;
  line-height: 1;
}

.pp-active-filters {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.pp-active-filters button {
  min-height: 29px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 4px 9px;
  border: 1px solid color-mix(in srgb, var(--pp-primary) 18%, var(--border, transparent));
  border-radius: 999px;
  background: color-mix(in srgb, var(--pp-primary) 8%, var(--card, #fff));
  color: var(--pp-primary);
  font-size: 11px;
  font-weight: 900;
  cursor: pointer;
}

.pp-active-filters button span {
  font-size: 15px;
  line-height: 1;
}

.pp-content-section {
  margin-top: 10px;
}

.pp-card-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 8px;
}

.pp-child-card {
  min-width: 0;
  padding: 10px;
  border: 1px solid var(--border, rgba(148, 163, 184, .20));
  border-radius: 19px;
  background: var(--card, var(--surface, #fff));
  box-shadow: 0 9px 22px rgba(15, 23, 42, .045);
  cursor: pointer;
  overflow: hidden;
  transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
}

.pp-child-card:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--pp-primary) 34%, var(--border, transparent));
  box-shadow: 0 13px 28px rgba(15, 23, 42, .07);
}

.pp-child-main {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 9px;
}

.pp-avatar {
  width: 46px;
  height: 46px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border: 1px solid transparent;
  border-radius: 15px;
  overflow: hidden;
  font-size: 18px;
  font-weight: 1000;
  box-shadow: 0 7px 18px rgba(15, 23, 42, .10);
}

.pp-avatar.large {
  width: 76px;
  height: 76px;
  border-radius: 24px;
  font-size: 28px;
}

.pp-child-copy {
  min-width: 0;
  flex: 1;
}

.pp-name-line {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 7px;
}

.pp-name-line h3 {
  min-width: 0;
  margin: 0;
  overflow: hidden;
  color: var(--text, #0f172a);
  font-size: 14px;
  font-weight: 1000;
  letter-spacing: -.025em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pp-status-dot {
  width: 8px;
  height: 8px;
  flex: 0 0 auto;
  border-radius: 999px;
  box-shadow: 0 0 0 3px color-mix(in srgb, currentColor 12%, transparent);
}

.pp-status-dot.green { color: #22c55e; background: #22c55e; }
.pp-status-dot.red { color: #ef4444; background: #ef4444; }
.pp-status-dot.blue { color: #3b82f6; background: #3b82f6; }
.pp-status-dot.orange { color: #f59e0b; background: #f59e0b; }
.pp-status-dot.gray { color: #94a3b8; background: #94a3b8; }

.pp-child-copy > p {
  min-width: 0;
  margin: 3px 0 0;
  overflow: hidden;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 740;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pp-card-meta {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 5px;
}

.pp-card-meta span {
  min-height: 21px;
  display: inline-flex;
  align-items: center;
  padding: 3px 7px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 9%, transparent);
  color: var(--muted, #64748b);
  font-size: 9px;
  font-weight: 850;
  text-transform: capitalize;
}

.pp-row-more {
  width: 31px;
  height: 31px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border: 1px solid var(--border, rgba(148, 163, 184, .18));
  border-radius: 999px;
  background: color-mix(in srgb, var(--pp-primary) 7%, var(--card, #fff));
  color: var(--pp-primary);
  font-size: 20px;
  font-weight: 1000;
  cursor: pointer;
}

.pp-card-footer {
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;
  padding-top: 7px;
  border-top: 1px solid var(--border, rgba(148, 163, 184, .13));
}

.pp-card-footer span,
.pp-card-footer strong {
  min-width: 0;
  overflow: hidden;
  font-size: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pp-card-footer span {
  color: var(--muted, #64748b);
  font-weight: 760;
}

.pp-card-footer strong {
  color: var(--pp-primary);
  font-weight: 950;
}

.pp-chip {
  max-width: 100%;
  min-height: 24px;
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 999px;
  overflow: hidden;
  font-size: 10px;
  font-weight: 950;
  line-height: 1.1;
  text-overflow: ellipsis;
  text-transform: capitalize;
  white-space: nowrap;
}

.pp-chip.green { background: rgba(34, 197, 94, .13); color: #16a34a; }
.pp-chip.red { background: rgba(239, 68, 68, .13); color: #dc2626; }
.pp-chip.blue { background: rgba(59, 130, 246, .13); color: #2563eb; }
.pp-chip.orange { background: rgba(245, 158, 11, .14); color: #d97706; }
.pp-chip.purple { background: rgba(147, 51, 234, .13); color: #9333ea; }
.pp-chip.gray {
  background: color-mix(in srgb, var(--muted, #64748b) 12%, transparent);
  color: var(--muted, #64748b);
}

.pp-empty {
  min-height: 180px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 7px;
  padding: 18px;
  border: 1px dashed var(--border, rgba(148, 163, 184, .30));
  border-radius: 21px;
  background: var(--card, var(--surface, #fff));
  text-align: center;
}

.pp-empty-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: color-mix(in srgb, var(--pp-primary) 10%, var(--card, #fff));
  font-size: 24px;
}

.pp-empty h3,
.pp-empty p {
  margin: 0;
}

.pp-empty h3 {
  color: var(--text, #0f172a);
  font-size: 16px;
  font-weight: 1000;
  letter-spacing: -.03em;
}

.pp-empty p {
  max-width: 34rem;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.55;
}

.pp-table-card,
.pp-summary-section {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid var(--border, rgba(148, 163, 184, .20));
  border-radius: 21px;
  background: var(--card, var(--surface, #fff));
  box-shadow: 0 10px 25px rgba(15, 23, 42, .045);
}

.pp-section-head {
  min-width: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 9px;
  margin-bottom: 9px;
}

.pp-section-head p,
.pp-section-head h3 {
  margin: 0;
}

.pp-section-head p {
  color: var(--pp-primary);
  font-size: 9px;
  font-weight: 950;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.pp-section-head h3 {
  margin-top: 2px;
  color: var(--text, #0f172a);
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.035em;
}

.pp-table-scroll {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--border, rgba(148, 163, 184, .16));
  border-radius: 16px;
}

.pp-table-scroll table {
  width: 100%;
  min-width: 800px;
  border-collapse: collapse;
  background: var(--card, var(--surface, #fff));
}

.pp-table-scroll th,
.pp-table-scroll td {
  padding: 9px;
  border-bottom: 1px solid var(--border, rgba(148, 163, 184, .14));
  color: var(--text, #0f172a);
  text-align: left;
  vertical-align: middle;
  font-size: 12px;
}

.pp-table-scroll th {
  background: color-mix(in srgb, var(--pp-primary) 5%, var(--card, #fff));
  color: var(--muted, #64748b);
  font-size: 9px;
  font-weight: 1000;
  letter-spacing: .07em;
  text-transform: uppercase;
}

.pp-table-scroll td > strong,
.pp-table-scroll td > small {
  display: block;
}

.pp-table-scroll td > small {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 10px;
}

.pp-table-student {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.pp-table-student .pp-avatar {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  font-size: 15px;
}

.pp-table-student > span {
  min-width: 0;
}

.pp-table-student strong,
.pp-table-student small {
  display: block;
  max-width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pp-table-student strong {
  font-weight: 950;
}

.pp-table-student small {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 10px;
}

.pp-table-action {
  min-height: 31px;
  padding: 0 10px;
  border: 1px solid color-mix(in srgb, var(--pp-primary) 22%, var(--border, transparent));
  border-radius: 999px;
  background: color-mix(in srgb, var(--pp-primary) 8%, var(--card, #fff));
  color: var(--pp-primary);
  font-size: 10px;
  font-weight: 950;
  cursor: pointer;
}

.pp-summary-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0;
}

.pp-summary-list {
  display: grid;
  gap: 7px;
}

.pp-summary-row {
  padding: 10px;
  border: 1px solid var(--border, rgba(148, 163, 184, .16));
  border-radius: 15px;
  background: color-mix(in srgb, var(--muted, #64748b) 4%, var(--card, #fff));
}

.pp-summary-row-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.pp-summary-row-top strong {
  min-width: 0;
  overflow: hidden;
  color: var(--text, #0f172a);
  font-size: 12px;
  font-weight: 950;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pp-summary-row-top span {
  flex: 0 0 auto;
  color: var(--pp-primary);
  font-size: 12px;
  font-weight: 1000;
}

.pp-progress-track {
  height: 6px;
  margin-top: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 12%, transparent);
}

.pp-progress-track div {
  height: 100%;
  border-radius: inherit;
  background: var(--pp-primary);
}

.pp-summary-row small {
  display: block;
  margin-top: 5px;
  color: var(--muted, #64748b);
  font-size: 9px;
  font-weight: 750;
}

.pp-layer,
.pp-drawer-layer {
  position: fixed;
  inset: 0;
  z-index: 90;
}

.pp-overlay,
.pp-drawer-overlay {
  position: absolute;
  inset: 0;
  border: 0;
  background: rgba(15, 23, 42, .54);
  backdrop-filter: blur(2px);
}

.pp-sheet {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: min(86dvh, 720px);
  overflow-y: auto;
  padding: 9px 12px max(14px, env(safe-area-inset-bottom));
  border-radius: 25px 25px 0 0;
  background: var(--card, var(--surface, #fff));
  color: var(--text, #0f172a);
  box-shadow: 0 -22px 64px rgba(15, 23, 42, .22);
}

.pp-sheet.compact {
  max-height: min(78dvh, 580px);
}

.pp-sheet-handle {
  width: 42px;
  height: 4px;
  margin: 0 auto 9px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 36%, transparent);
}

.pp-sheet-head,
.pp-drawer-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

.pp-sheet-head {
  padding-bottom: 10px;
}

.pp-sheet-head p,
.pp-sheet-head h2,
.pp-drawer-head p,
.pp-drawer-head h2 {
  margin: 0;
}

.pp-sheet-head p,
.pp-drawer-head p {
  color: var(--pp-primary);
  font-size: 9px;
  font-weight: 950;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.pp-sheet-head h2,
.pp-drawer-head h2 {
  margin-top: 2px;
  color: var(--text, #0f172a);
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.045em;
}

.pp-sheet-head > button,
.pp-drawer-head > button {
  width: 35px;
  height: 35px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border: 1px solid var(--border, rgba(148, 163, 184, .20));
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 7%, var(--card, #fff));
  color: var(--text, #0f172a);
  font-size: 20px;
  cursor: pointer;
}

.pp-form-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 8px;
}

.pp-form-grid label {
  display: grid;
  gap: 5px;
}

.pp-form-grid label > span {
  color: var(--muted, #64748b);
  font-size: 10px;
  font-weight: 900;
}

.pp-form-grid select {
  width: 100%;
  min-height: 43px;
  padding: 0 11px;
  border: 1px solid var(--input-border, var(--border, rgba(148, 163, 184, .24)));
  border-radius: 13px;
  outline: 0;
  background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #0f172a));
  font-weight: 800;
}

.pp-form-grid select:focus {
  border-color: var(--pp-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--pp-primary) 11%, transparent);
}

.pp-sheet-actions {
  position: sticky;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
  margin-top: 12px;
  padding-top: 9px;
  background: var(--card, var(--surface, #fff));
}

.pp-sheet-actions button {
  min-height: 43px;
  border-radius: 13px;
  font-weight: 950;
  cursor: pointer;
}

.pp-sheet-actions .secondary {
  border: 1px solid var(--border, rgba(148, 163, 184, .24));
  background: var(--card, var(--surface, #fff));
  color: var(--text, #0f172a);
}

.pp-sheet-actions .primary {
  border: 1px solid var(--pp-primary);
  background: var(--pp-primary);
  color: var(--pp-primary-text);
  box-shadow: 0 8px 18px color-mix(in srgb, var(--pp-primary) 25%, transparent);
}

.pp-menu-list {
  display: grid;
  gap: 7px;
}

.pp-menu-list > button {
  min-width: 0;
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr) 18px;
  align-items: center;
  gap: 9px;
  min-height: 61px;
  padding: 8px;
  border: 1px solid var(--border, rgba(148, 163, 184, .18));
  border-radius: 16px;
  background: var(--card, var(--surface, #fff));
  color: var(--text, #0f172a);
  text-align: left;
  cursor: pointer;
}

.pp-menu-list > button.active {
  border-color: color-mix(in srgb, var(--pp-primary) 45%, var(--border, transparent));
  background: color-mix(in srgb, var(--pp-primary) 8%, var(--card, #fff));
}

.pp-menu-list > button > span {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: color-mix(in srgb, var(--pp-primary) 10%, var(--card, #fff));
  color: var(--pp-primary);
  font-size: 18px;
}

.pp-menu-list > button div {
  min-width: 0;
}

.pp-menu-list > button strong,
.pp-menu-list > button small {
  display: block;
}

.pp-menu-list > button strong {
  color: var(--text, #0f172a);
  font-size: 12px;
  font-weight: 950;
}

.pp-menu-list > button small {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 10px;
  line-height: 1.4;
}

.pp-menu-list > button > b {
  color: var(--muted, #64748b);
  font-size: 17px;
}

.pp-drawer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(94vw, 620px);
  max-width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 12px;
  background: var(--card, var(--surface, #fff));
  color: var(--text, #0f172a);
  box-shadow: -24px 0 70px rgba(15, 23, 42, .22);
}

.pp-drawer-head {
  position: sticky;
  top: 0;
  z-index: 3;
  padding: 3px 0 10px;
  background: var(--card, var(--surface, #fff));
}

.pp-profile-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--border, rgba(148, 163, 184, .18));
  border-radius: 21px;
  background:
    linear-gradient(
      135deg,
      color-mix(in srgb, var(--pp-primary) 10%, var(--card, #fff)),
      var(--card, #fff) 70%
    );
}

.pp-profile-card > div:last-child {
  min-width: 0;
}

.pp-profile-card h3,
.pp-profile-card p {
  margin: 0;
}

.pp-profile-card h3 {
  overflow: hidden;
  color: var(--text, #0f172a);
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.045em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pp-profile-card p {
  margin-top: 3px;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 760;
}

.pp-chip-row {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.pp-detail-section {
  margin-top: 14px;
}

.pp-detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.pp-detail-grid article {
  min-width: 0;
  padding: 10px;
  border: 1px solid var(--border, rgba(148, 163, 184, .15));
  border-radius: 15px;
  background: color-mix(in srgb, var(--muted, #64748b) 5%, var(--card, #fff));
}

.pp-detail-grid span,
.pp-detail-grid strong {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pp-detail-grid span {
  color: var(--muted, #64748b);
  font-size: 9px;
  font-weight: 850;
  text-transform: uppercase;
}

.pp-detail-grid strong {
  margin-top: 4px;
  color: var(--text, #0f172a);
  font-size: 12px;
  font-weight: 950;
}

.pp-detail-list {
  overflow: hidden;
  border: 1px solid var(--border, rgba(148, 163, 184, .16));
  border-radius: 17px;
}

.pp-detail-list > div {
  min-width: 0;
  display: grid;
  grid-template-columns: minmax(110px, .65fr) minmax(0, 1fr);
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid var(--border, rgba(148, 163, 184, .13));
}

.pp-detail-list > div:last-child {
  border-bottom: 0;
}

.pp-detail-list span {
  color: var(--muted, #64748b);
  font-size: 10px;
  font-weight: 800;
}

.pp-detail-list strong {
  min-width: 0;
  overflow-wrap: anywhere;
  color: var(--text, #0f172a);
  font-size: 11px;
  font-weight: 950;
  text-align: right;
}

.pp-readonly-note {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  margin-top: 14px;
  padding: 11px;
  border: 1px solid color-mix(in srgb, var(--pp-primary) 18%, var(--border, transparent));
  border-radius: 16px;
  background: color-mix(in srgb, var(--pp-primary) 7%, var(--card, #fff));
}

.pp-readonly-note > span {
  flex: 0 0 auto;
  font-size: 18px;
}

.pp-readonly-note strong,
.pp-readonly-note p {
  display: block;
  margin: 0;
}

.pp-readonly-note strong {
  color: var(--text, #0f172a);
  font-size: 11px;
  font-weight: 950;
}

.pp-readonly-note p {
  margin-top: 3px;
  color: var(--muted, #64748b);
  font-size: 10px;
  line-height: 1.5;
}

.pp-toast {
  position: fixed;
  z-index: 120;
  right: 12px;
  bottom: max(14px, env(safe-area-inset-bottom));
  width: min(360px, calc(100vw - 24px));
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px;
  border: 1px solid var(--border, rgba(148, 163, 184, .20));
  border-radius: 15px;
  background: var(--card, var(--surface, #fff));
  box-shadow: 0 18px 48px rgba(15, 23, 42, .18);
}

.pp-toast > span {
  width: 29px;
  height: 29px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 10px;
  font-weight: 1000;
}

.pp-toast.success > span {
  background: rgba(34, 197, 94, .14);
  color: #16a34a;
}

.pp-toast.error > span {
  background: rgba(239, 68, 68, .14);
  color: #dc2626;
}

.pp-toast.info > span {
  background: rgba(59, 130, 246, .14);
  color: #2563eb;
}

.pp-toast p {
  margin: 0;
  color: var(--text, #0f172a);
  font-size: 11px;
  font-weight: 850;
  line-height: 1.4;
}

@media (min-width: 620px) {
  .pp-page {
    padding: 10px;
  }

  .pp-card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .pp-form-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .pp-summary-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .pp-summary-section {
    margin-top: 10px;
  }
}

@media (min-width: 980px) {
  .pp-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .pp-summary-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .pp-sheet {
    right: 12px;
    bottom: 12px;
    left: auto;
    width: min(520px, calc(100vw - 24px));
    max-height: min(86dvh, 720px);
    border-radius: 24px;
  }
}

@media (max-width: 420px) {
  .pp-page {
    padding: 6px;
  }

  .pp-action-strip {
    grid-template-columns: minmax(0, 1fr) 41px 41px;
    gap: 5px;
    padding: 5px;
    border-radius: 17px;
  }

  .pp-filter-button,
  .pp-more-button {
    width: 41px;
    height: 41px;
    border-radius: 13px;
  }

  .pp-search-box {
    min-height: 41px;
    padding: 0 8px;
    border-radius: 13px;
  }

  .pp-child-card {
    padding: 8px;
    border-radius: 17px;
  }

  .pp-avatar {
    width: 43px;
    height: 43px;
    border-radius: 14px;
  }

  .pp-detail-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pp-page *,
  .pp-page *::before,
  .pp-page *::after {
    scroll-behavior: auto !important;
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
`;var Y=r(39092),J=r.n(Y),q=r(66925),Z=r(10903);let X=e=>null==e?"":String(e).trim(),Q=(e,a)=>X(e)===X(a),ee=e=>h.db[e];function ea(e){try{return window.localStorage.getItem(e)||window.sessionStorage.getItem(e)}catch{return null}}function er(e){let a=ea(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}}function et(...e){for(let a of e){let e=X(a);if(e&&"0"!==e)return e}return""}function ei(e){let a=String(e.status||"").toLowerCase();return!e.isDeleted&&!1!==e.active&&!["inactive","deleted","archived","suspended"].includes(a)}function es(e){let a=new Date(`${e}T00:00:00`);return Number.isNaN(a.getTime())?null:a}function en(e,a){let r=es(e);return r?new Intl.DateTimeFormat("en",{day:"2-digit",month:"short",year:"numeric",...a}).format(r):e||"—"}function eo(e){return String(e||"").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function ed(e){return"present"===e?"positive":"absent"===e||"suspended"===e?"negative":"late"===e?"warning":["excused","medical","sports","trip","remote"].includes(e)?"info":"neutral"}function el(e){if(e?.startDate||e?.endDate)return{from:e.startDate||"",to:e.endDate||""};let a=new Date;return{from:new Date(a.getFullYear(),a.getMonth()-2,1).toISOString().slice(0,10),to:a.toISOString().slice(0,10)}}let ep=`
  .attendance-page{--surface:var(--card-background,#fff);--border:var(--border-color,#e5e7eb);--text:var(--text-color,#111827);--muted:var(--muted-color,#6b7280);--soft:var(--soft-background,#f8fafc);min-height:100%;color:var(--text);padding:10px 12px 34px;background:var(--page-background,transparent)}
  .loading-page,.empty-page{display:grid;place-items:center;align-content:center;gap:10px;min-height:55vh;text-align:center}.spinner{width:28px;height:28px;border:3px solid var(--border);border-top-color:var(--primary);border-radius:50%;animation:spin .8s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}
  .toolbar{display:grid;grid-template-columns:minmax(0,1fr) 40px 40px;gap:7px;position:sticky;top:0;z-index:15;padding:4px 0 10px;background:var(--page-background,var(--surface))}.search-box{height:40px;display:flex;align-items:center;gap:8px;padding:0 10px;border:1px solid var(--border);border-radius:12px;background:var(--surface)}.search-box input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:13px}.search-icon{font-size:21px;color:var(--muted)}.clear-search{border:0;background:transparent;color:var(--muted);font-size:20px}.icon-button{position:relative;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font-size:21px;cursor:pointer}.icon-button.active{border-color:var(--primary);color:var(--primary)}.button-badge{position:absolute;right:-4px;top:-5px;min-width:17px;height:17px;padding:0 4px;display:grid;place-items:center;border-radius:10px;background:var(--primary);color:#fff;font-size:9px;font-weight:800}
  .child-strip{display:flex;gap:7px;overflow:auto;padding:1px 0 9px;scrollbar-width:none}.child-strip::-webkit-scrollbar{display:none}.child-chip{flex:0 0 auto;display:flex;align-items:center;gap:7px;padding:6px 9px 6px 6px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);text-align:left}.child-chip.selected{border-color:var(--primary);box-shadow:0 0 0 1px color-mix(in srgb,var(--primary) 25%,transparent)}.child-chip strong,.child-chip small{display:block}.child-chip strong{font-size:11px}.child-chip small{font-size:9px;color:var(--muted);margin-top:1px}.mini-avatar{width:28px;height:28px;border-radius:9px;display:grid;place-items:center;overflow:hidden;background:color-mix(in srgb,var(--primary) 13%,var(--soft));color:var(--primary);font-size:12px;font-weight:800}.mini-avatar img,.child-avatar img{width:100%;height:100%;object-fit:cover}
  .child-header{display:grid;grid-template-columns:52px minmax(0,1fr) auto;align-items:center;gap:10px;padding:12px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}.child-avatar{width:52px;height:52px;border-radius:15px;display:grid;place-items:center;overflow:hidden;background:color-mix(in srgb,var(--primary) 14%,var(--soft));color:var(--primary);font-size:20px;font-weight:900}.child-copy{min-width:0}.child-name-row{display:flex;align-items:center;gap:7px}.child-copy h1{margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:15px}.child-copy p{margin:3px 0 0;color:var(--muted);font-size:10px}.context-line{display:flex;align-items:center;gap:5px;margin-top:5px;color:var(--muted);font-size:9px}.context-line i{font-style:normal}.sync-dot{width:8px;height:8px;padding:0;border:0;border-radius:50%;background:#22c55e;box-shadow:0 0 0 3px color-mix(in srgb,#22c55e 15%,transparent)}.rate-ring{width:60px;height:60px;border-radius:50%;display:grid;place-content:center;text-align:center;border:5px solid #d1d5db;background:var(--surface)}.rate-ring.good{border-color:#22c55e}.rate-ring.fair{border-color:#f59e0b}.rate-ring.low{border-color:#ef4444}.rate-ring strong{font-size:14px}.rate-ring small{font-size:7px;color:var(--muted)}
  .summary-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px;margin:8px 0}.summary-card{display:flex;align-items:center;gap:7px;min-width:0;padding:9px;border:1px solid var(--border);border-radius:13px;background:var(--surface)}.summary-mark{width:26px;height:26px;flex:0 0 auto;display:grid;place-items:center;border-radius:8px;font-weight:900}.positive{background:color-mix(in srgb,#22c55e 13%,var(--surface));color:#15803d}.negative{background:color-mix(in srgb,#ef4444 13%,var(--surface));color:#dc2626}.warning{background:color-mix(in srgb,#f59e0b 15%,var(--surface));color:#b45309}.info{background:color-mix(in srgb,#3b82f6 13%,var(--surface));color:#2563eb}.neutral{background:var(--soft);color:var(--muted)}.summary-card strong,.summary-card small{display:block}.summary-card strong{font-size:14px}.summary-card small{font-size:8px;color:var(--muted);white-space:nowrap}
  .attendance-list{display:grid;gap:7px}.attendance-card{display:flex;gap:9px;padding:10px;border:1px solid var(--border);border-radius:14px;background:var(--surface)}.status-symbol{width:34px;height:34px;flex:0 0 auto;display:grid;place-items:center;border-radius:10px;font-size:16px;font-weight:900}.attendance-main{flex:1;min-width:0}.attendance-topline{display:flex;justify-content:space-between;align-items:center;gap:8px}.attendance-topline strong{font-size:12px}.status-pill{display:inline-flex;align-items:center;justify-content:center;padding:3px 7px;border-radius:999px;font-size:8px;font-weight:800;white-space:nowrap}.attendance-main p{margin:4px 0 0;font-size:9px;color:var(--muted)}.attendance-note{display:block;margin-top:6px;padding-top:6px;border-top:1px dashed var(--border);font-size:9px;color:var(--text)}
  .table-shell{overflow:hidden;border:1px solid var(--border);border-radius:14px;background:var(--surface)}.table-title{padding:10px 12px;border-bottom:1px solid var(--border);font-size:11px}.table-scroll{overflow:auto}table{width:100%;border-collapse:collapse;min-width:570px}th,td{padding:9px 11px;border-bottom:1px solid var(--border);text-align:left;font-size:10px}th{position:sticky;top:0;background:var(--soft);color:var(--muted);font-size:9px;text-transform:uppercase;letter-spacing:.04em}tbody tr:last-child td{border-bottom:0}
  .analytics-view{display:grid;gap:8px}.analytics-card{padding:12px;border:1px solid var(--border);border-radius:15px;background:var(--surface)}.overview-card{display:flex;align-items:center;justify-content:space-between}.overview-card span,.overview-card strong,.overview-card small{display:block}.overview-card span{font-size:10px;color:var(--muted)}.overview-card strong{margin-top:2px;font-size:25px}.overview-card small{font-size:9px;color:var(--muted)}.donut{width:76px;height:76px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--primary) var(--value),var(--border) 0);position:relative}.donut:after{content:"";position:absolute;inset:8px;border-radius:50%;background:var(--surface)}.donut span{position:relative;z-index:1;font-size:12px;font-weight:900}.section-heading strong,.section-heading small{display:block}.section-heading strong{font-size:12px}.section-heading small{margin-top:2px;font-size:9px;color:var(--muted)}.month-list{display:grid;gap:11px;margin-top:13px}.month-row{display:grid;grid-template-columns:105px minmax(80px,1fr) 34px;align-items:center;gap:9px}.month-row strong,.month-row small{display:block}.month-row strong{font-size:10px}.month-row small{font-size:8px;color:var(--muted);margin-top:2px}.month-progress{height:6px;border-radius:10px;background:var(--border);overflow:hidden}.month-progress span{display:block;height:100%;border-radius:inherit;background:var(--primary)}.month-row b{font-size:10px;text-align:right}.note-card strong{font-size:11px}.note-card p{margin:6px 0 0;font-size:10px;line-height:1.55;color:var(--muted)}.muted-empty{margin:13px 0 0;color:var(--muted);font-size:10px}
  .empty-state{display:grid;justify-items:center;text-align:center;padding:44px 18px;border:1px dashed var(--border);border-radius:16px;background:var(--surface)}.compact-empty{margin-top:8px}.empty-icon{width:42px;height:42px;display:grid;place-items:center;border-radius:13px;background:color-mix(in srgb,var(--primary) 11%,var(--soft));color:var(--primary);font-size:20px;font-weight:900}.empty-state h2,.empty-page h2{margin:10px 0 3px;font-size:14px}.empty-state p,.empty-page p{max-width:380px;margin:0;color:var(--muted);font-size:10px;line-height:1.55}
  .sheet-layer{position:fixed;inset:0;z-index:1000;display:flex;justify-content:flex-end;background:rgba(15,23,42,.38);backdrop-filter:blur(2px)}.sheet{width:min(410px,94vw);height:100%;display:flex;flex-direction:column;background:var(--surface);box-shadow:-16px 0 40px rgba(0,0,0,.16)}.short-sheet{height:auto;max-height:78vh;align-self:flex-end;border-radius:20px 0 0 0}.sheet-head{display:flex;align-items:center;justify-content:space-between;padding:15px;border-bottom:1px solid var(--border)}.sheet-head strong,.sheet-head small{display:block}.sheet-head strong{font-size:13px}.sheet-head small{margin-top:2px;font-size:9px;color:var(--muted)}.sheet-head button{width:32px;height:32px;border:1px solid var(--border);border-radius:10px;background:var(--soft);color:var(--text);font-size:19px}.sheet-body{flex:1;overflow:auto;display:grid;align-content:start;gap:12px;padding:15px}.sheet-body label>span{display:block;margin-bottom:5px;color:var(--muted);font-size:9px;font-weight:700}.sheet-body input,.sheet-body select{width:100%;height:40px;padding:0 10px;border:1px solid var(--border);border-radius:11px;outline:0;background:var(--surface);color:var(--text);font:inherit;font-size:11px}.sheet-body input:focus,.sheet-body select:focus{border-color:var(--primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 12%,transparent)}.two-column{display:grid;grid-template-columns:1fr 1fr;gap:9px}.sheet-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:12px 15px;border-top:1px solid var(--border)}.primary-button,.secondary-button{height:39px;border-radius:11px;font-weight:800;font-size:10px}.primary-button{border:1px solid var(--primary);background:var(--primary);color:#fff}.secondary-button{border:1px solid var(--border);background:var(--surface);color:var(--text)}.empty-state .primary-button{margin-top:12px;padding:0 16px}
  .view-options{display:grid;gap:7px;padding:12px}.view-options button{display:grid;grid-template-columns:34px minmax(0,1fr) 20px;align-items:center;gap:9px;padding:10px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);text-align:left}.view-options button.selected{border-color:var(--primary);background:color-mix(in srgb,var(--primary) 6%,var(--surface))}.view-options button>span{width:34px;height:34px;display:grid;place-items:center;border-radius:10px;background:var(--soft);font-size:17px}.view-options strong,.view-options small{display:block}.view-options strong{font-size:11px}.view-options small{margin-top:2px;font-size:9px;color:var(--muted)}.view-options b{color:var(--primary)}.status-panel{display:flex;gap:11px;padding:16px}.large-dot{width:14px;height:14px;flex:0 0 auto;margin-top:2px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 5px color-mix(in srgb,#22c55e 14%,transparent)}.status-panel strong{font-size:11px}.status-panel p{margin:5px 0 0;color:var(--muted);font-size:9px;line-height:1.55}
  @media(max-width:700px){.summary-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.short-sheet{width:100%;border-radius:20px 20px 0 0}.sheet-layer{align-items:flex-end}.child-header{grid-template-columns:48px minmax(0,1fr) auto}.child-avatar{width:48px;height:48px}.rate-ring{width:54px;height:54px}.attendance-page{padding-inline:9px}.month-row{grid-template-columns:90px minmax(70px,1fr) 32px}}
  @media(min-width:900px){.attendance-page{max-width:1120px;margin:0 auto;padding-top:14px}.attendance-list{grid-template-columns:repeat(2,minmax(0,1fr))}.summary-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.analytics-view{grid-template-columns:1fr 1fr}.overview-card,.note-card{grid-column:span 1}.sheet{width:430px}.short-sheet{height:100%;max-height:none;align-self:stretch;border-radius:0}}
`;var ec=r(58365),em=r(44253),eh=r(73837),eu=r(5779),ex=r(15982);let eg=em.A;function eb(e){return e?.reportType==="student_report"||!e?.reportType}function ef(e){return e.map(e=>eS(e.id)).find(Boolean)||void 0}let ev="student-report-print-zone",ej=String(ec.$S.STUDENTS||"students"),ey=String(ec.$S.SCHOOLS||"schools"),ew=String(ec.$S.BRANCHES||"branches"),eN=String(ec.$S.SCHOOL_BRANCH_SETTINGS||ec.$S.SCHOOL_BRANCHES_SETTINGS||"schoolBranchSettings"),ek=String(ec.Vq.PHOTO||"photo"),e_=String(ec.Vq.LOGO||"logo");function eI(e,a,r){let t;return!e||r&&e&&Object.prototype.hasOwnProperty.call(e,r)&&!eS(e[r])?"":!(t=String(e[a]||""))||t.startsWith("blob:")||t.startsWith("data:image/")?"":t}function eS(e){if(null==e)return"";let a=String(e).trim();return a&&"0"!==a&&"undefined"!==a&&"null"!==a?a:""}String(ec.Vq.BANNER||"bannerImage");function eC(e){try{return window.localStorage.getItem(e)||window.sessionStorage.getItem(e)}catch{return null}}function e$(e){let a=eC(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}}function ez(){return e$("activeMembership")}function eA(...e){for(let a of e){let e=eS(a);if(e)return e}return""}function eP(e,a){let r=eS(a);return r?e.find(e=>eS(e.id)===r)?.name||"Not found":"Not selected"}function eM({primary:e,title:a,text:r}){return(0,t.jsxs)("main",{className:"ba-page",style:{"--ba-primary":e,"--primary-color":e},children:[(0,t.jsx)("style",{children:eB}),(0,t.jsxs)("section",{className:"ba-state",children:[(0,t.jsx)("div",{className:"ba-spinner"}),(0,t.jsx)("h2",{children:a}),(0,t.jsx)("p",{children:r})]})]})}function eT({icon:e,title:a,text:r}){return(0,t.jsxs)("section",{className:"ba-empty",children:[(0,t.jsx)("div",{className:"ba-empty-icon",children:e}),(0,t.jsx)("h3",{children:a}),(0,t.jsx)("p",{children:r})]})}function eL(){return(0,t.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4 7h9"}),(0,t.jsx)("path",{d:"M17 7h3"}),(0,t.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,t.jsx)("path",{d:"M4 17h3"}),(0,t.jsx)("path",{d:"M11 17h9"}),(0,t.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function eD({mode:e,filters:a,academicStructures:r,academicPeriods:i,filteredClasses:s,filteredClassSubjects:n,filteredStudents:o,setMode:d,setFilters:l,onClose:p}){return(0,t.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,t.jsxs)("section",{className:"ba-sheet",children:[(0,t.jsxs)("div",{className:"ba-sheet-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:"Filters"}),(0,t.jsx)("p",{children:"Choose the report scope. Branch stays locked to the assigned branch."})]}),(0,t.jsx)("button",{type:"button",onClick:p,"aria-label":"Close filters",children:"✕"})]}),(0,t.jsxs)("div",{className:"ba-form compact",children:[(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Report Mode"}),(0,t.jsxs)("select",{value:e,onChange:e=>d(e.target.value),children:[(0,t.jsx)("option",{value:"student-report",children:"Single Student Report"}),(0,t.jsx)("option",{value:"class-reports",children:"All Children Reports"})]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Academic Structure"}),(0,t.jsxs)("select",{value:a.academicStructureId||"",onChange:e=>l(a=>({...a,academicStructureId:eS(e.target.value)||void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,t.jsx)("option",{value:"",children:"Select structure"}),r.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Academic Period"}),(0,t.jsxs)("select",{value:a.academicPeriodId||"",onChange:e=>l(a=>({...a,academicPeriodId:eS(e.target.value)||void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,t.jsx)("option",{value:"",children:"Select period"}),i.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Class"}),(0,t.jsxs)("select",{value:a.classId||"",onChange:e=>l(a=>({...a,classId:eS(e.target.value)||void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,t.jsx)("option",{value:"",children:"Select class"}),s.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Class Subject"}),(0,t.jsxs)("select",{value:a.classSubjectId||"",onChange:e=>l(a=>({...a,classSubjectId:eS(e.target.value)||void 0})),children:[(0,t.jsx)("option",{value:"",children:"All subjects"}),n.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name||`Subject ${e.subjectId||""}`},e.id))]})]}),"student-report"===e&&(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Student"}),(0,t.jsxs)("select",{value:a.studentId||"",onChange:e=>l(a=>({...a,studentId:eS(e.target.value)||void 0})),children:[(0,t.jsx)("option",{value:"",children:"Select student"}),o.map(e=>(0,t.jsx)("option",{value:e.id,children:e.fullName||e.name},e.id))]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Sort Mode"}),(0,t.jsxs)("select",{value:a.sortMode||"position",onChange:e=>l(a=>({...a,sortMode:e.target.value})),children:[(0,t.jsx)("option",{value:"position",children:"Position"}),(0,t.jsx)("option",{value:"name",children:"Name"}),(0,t.jsx)("option",{value:"score",children:"Score"})]})]})]}),(0,t.jsxs)("div",{className:"ba-sheet-actions",children:[(0,t.jsx)("button",{type:"button",onClick:()=>l(e=>({...e,academicStructureId:void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"})),children:"Clear"}),(0,t.jsx)("button",{type:"button",className:"primary",onClick:p,children:"Apply"})]})]})})}function eR({onRefresh:e,onPrint:a,onClose:r}){return(0,t.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,t.jsxs)("section",{className:"ba-sheet small",children:[(0,t.jsxs)("div",{className:"ba-sheet-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:"More"}),(0,t.jsx)("p",{children:"Quick report actions only."})]}),(0,t.jsx)("button",{type:"button",onClick:r,"aria-label":"Close menu",children:"✕"})]}),(0,t.jsxs)("div",{className:"ba-menu-list",children:[(0,t.jsxs)("button",{type:"button",onClick:a,children:[(0,t.jsx)("span",{children:"⎙"}),(0,t.jsx)("b",{children:"Print report"}),(0,t.jsx)("small",{children:"Print the current preview output"})]}),(0,t.jsxs)("button",{type:"button",onClick:e,children:[(0,t.jsx)("span",{children:"↻"}),(0,t.jsx)("b",{children:"Refresh"}),(0,t.jsx)("small",{children:"Reload local branch report records"})]})]})]})})}let eB=`
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

.ba-page input,
.ba-page select,
.ba-page textarea {
  width: 100%;
  min-height: 44px;
  border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10)));
  border-radius: 16px;
  padding: 0 12px;
  background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #111827));
  outline: none;
  font-weight: 750;
}

.ba-page input:focus,
.ba-page select:focus,
.ba-page textarea:focus {
  border-color: color-mix(in srgb, var(--ba-primary) 52%, var(--border, rgba(0,0,0,.10)));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--ba-primary) 12%, transparent);
}

.ba-state,
.ba-search-card,
.ba-summary-line,
.ba-card,
.ba-table-card,
.ba-analysis,
.ba-empty,
.ba-sheet,
.ba-modal,
.student-row {
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
  max-width: 34rem;
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.6;
}

.ba-state-button {
  min-height: 42px;
  border: 0;
  border-radius: 999px;
  padding: 0 16px;
  background: var(--ba-primary);
  color: #fff;
  font-weight: 950;
  cursor: pointer;
}

.ba-toast {
  position: sticky;
  top: 8px;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
  padding: 12px 14px;
  border-radius: 18px;
  font-size: 13px;
  font-weight: 850;
  box-shadow: 0 18px 40px rgba(15,23,42,.12);
}

.ba-toast.success { background: rgba(34,197,94,.14); color: #166534; }
.ba-toast.error { background: rgba(239,68,68,.12); color: #991b1b; }
.ba-toast.info { background: rgba(59,130,246,.13); color: #1d4ed8; }

.ba-toast button {
  border: 0;
  background: transparent;
  color: currentColor;
  font-weight: 1000;
  cursor: pointer;
}

/* Compact search/action strip. The page intentionally has no duplicate title header. */
.ba-topbar,
.ba-title,
.ba-topbar-actions {
  display: none;
}

.ba-icon-button,
.ba-filter-button,
.ba-add-inline {
  width: 42px;
  height: 42px;
  border: 1px solid var(--border, rgba(0,0,0,.10));
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: var(--card-bg, var(--surface,#fff));
  color: var(--text,#111827);
  font-size: 18px;
  font-weight: 1000;
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(15,23,42,.045);
}


.ba-add-inline {
  flex: 0 0 42px;
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
  font-size: 25px;
  line-height: 1;
  box-shadow: 0 12px 28px color-mix(in srgb, var(--ba-primary) 22%, transparent);
}

.ba-add-inline:disabled {
  opacity: .45;
  cursor: not-allowed;
  box-shadow: none;
}

.ba-search-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) repeat(3, 42px);
  gap: 8px;
  align-items: center;
  margin-top: 2px;
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
  min-height: 42px;
  border: 0;
  padding: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  font-size: 14px;
}

.ba-slider-icon {
  width: 21px;
  height: 21px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ba-filter-button {
  position: relative;
  background: color-mix(in srgb, var(--ba-primary) 8%, var(--card-bg,#fff));
  color: var(--ba-primary);
}

.ba-filter-button.active {
  background: var(--ba-primary);
  color: #fff;
  border-color: var(--ba-primary);
}

.ba-filter-button b {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 19px;
  height: 19px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: #ef4444;
  color: #fff;
  font-size: 10px;
  border: 2px solid var(--card-bg,#fff);
}

.ba-summary-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
  padding: 10px 12px;
  border-radius: 20px;
}

.ba-summary-line div {
  display: flex;
  align-items: baseline;
  gap: 6px;
  min-width: 0;
}

.ba-summary-line strong {
  font-size: 21px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.ba-summary-line span,
.ba-summary-line p {
  color: var(--muted,#64748b);
  font-size: 12px;
  font-weight: 850;
}

.ba-summary-line p {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

.ba-list {
  display: grid;
  gap: 7px;
  margin-top: 10px;
}

.student-row {
  width: 100%;
  display: grid;
  grid-template-columns: auto minmax(0,1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 22px;
  text-align: left;
  cursor: pointer;
  transition: transform .16s var(--ease), box-shadow .16s var(--ease), border-color .16s var(--ease);
}

.student-row:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--ba-primary) 24%, var(--border, rgba(0,0,0,.10)));
  box-shadow: 0 16px 34px rgba(15,23,42,.07);
}

.ba-avatar {
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 18px;
  color: #fff;
  font-size: 17px;
  font-weight: 1000;
  box-shadow: 0 12px 24px rgba(15,23,42,.12);
}

.student-main,
.student-main strong,
.student-main small,
.student-main em {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.student-main strong {
  color: var(--text,#111827);
  font-size: 14px;
  font-weight: 1000;
  letter-spacing: -.02em;
}

.student-main small {
  margin-top: 3px;
  color: var(--muted,#64748b);
  font-size: 12px;
  font-weight: 850;
  font-style: normal;
}

.student-main em {
  margin-top: 3px;
  color: color-mix(in srgb, var(--muted,#64748b) 86%, var(--text,#111827));
  font-size: 11px;
  font-weight: 750;
  font-style: normal;
}

.student-side {
  display: grid;
  justify-items: end;
  gap: 6px;
  flex: 0 0 auto;
}

.student-side i {
  color: var(--muted,#64748b);
  font-style: normal;
  font-size: 18px;
  font-weight: 1000;
  line-height: 1;
}

.ba-chip {
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 950;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
}

.ba-chip.green { background: rgba(34,197,94,.12); color: #16a34a; }
.ba-chip.red { background: rgba(239,68,68,.12); color: #dc2626; }
.ba-chip.blue { background: rgba(59,130,246,.12); color: #2563eb; }
.ba-chip.gray { background: color-mix(in srgb,var(--muted,#64748b) 14%,transparent); color: var(--muted,#64748b); }
.ba-chip.orange { background: rgba(245,158,11,.14); color: #b45309; }
.ba-chip.purple { background: rgba(147,51,234,.12); color: #7e22ce; }

.status-dot-mini {
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 999px;
  background: var(--muted,#64748b);
  box-shadow: 0 0 0 4px color-mix(in srgb, currentColor 10%, transparent);
}

.status-dot-mini.green { background: #22c55e; }
.status-dot-mini.red { background: #ef4444; }
.status-dot-mini.blue { background: #3b82f6; }
.status-dot-mini.orange { background: #f59e0b; }
.status-dot-mini.gray { background: var(--muted,#64748b); }

.status-sheet-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap: 8px;
}

.status-sheet-grid span {
  display: grid;
  gap: 5px;
  padding: 11px;
  border: 1px solid var(--border,rgba(0,0,0,.08));
  border-radius: 18px;
  background: color-mix(in srgb, var(--muted,#64748b) 7%, transparent);
}

.status-sheet-grid b {
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.status-sheet-grid em {
  display: flex;
  align-items: center;
  gap: 7px;
  color: var(--text,#111827);
  font-size: 12px;
  font-style: normal;
  font-weight: 900;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


.ba-sheet-backdrop,
.ba-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15,23,42,.50);
  backdrop-filter: blur(12px);
}

.ba-sheet {
  width: min(760px, 100%);
  max-height: min(88dvh, 760px);
  overflow-y: auto;
  padding: 14px;
  border-radius: 28px 28px 22px 22px;
  box-shadow: 0 30px 90px rgba(15,23,42,.32);
  animation: sheetIn .18s var(--ease);
}

.ba-sheet.small {
  width: min(520px, 100%);
}

@keyframes sheetIn {
  from { transform: translateY(16px); opacity: .7; }
  to { transform: translateY(0); opacity: 1; }
}

.ba-sheet-head,
.ba-sheet-profile {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 12px;
}

.ba-sheet-head h2,
.ba-sheet-profile h2,
.ba-modal-head h2 {
  margin: 0;
  color: var(--text,#111827);
  font-size: 21px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.ba-sheet-head p,
.ba-sheet-profile p,
.ba-modal-head p {
  margin: 5px 0 0;
  color: var(--muted,#64748b);
  font-size: 12px;
  line-height: 1.5;
  font-weight: 750;
}

.ba-sheet-head button,
.ba-sheet-profile button,
.ba-modal-head button {
  width: 38px;
  height: 38px;
  border: 1px solid var(--border,rgba(0,0,0,.10));
  border-radius: 999px;
  background: var(--surface,#fff);
  color: var(--text,#111827);
  font-weight: 1000;
  cursor: pointer;
  flex: 0 0 auto;
}

.ba-sheet-actions,
.ba-modal-actions {
  position: sticky;
  bottom: -14px;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
  padding: 12px 0 2px;
  background: linear-gradient(to top, var(--card-bg,var(--surface,#fff)) 70%, transparent);
}

.ba-sheet-actions button,
.ba-modal-actions button {
  min-height: 42px;
  border: 1px solid var(--border,rgba(0,0,0,.10));
  border-radius: 999px;
  padding: 0 16px;
  background: color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff));
  color: var(--text,#111827);
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.ba-sheet-actions button.primary,
.ba-modal-actions button:last-child {
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
  box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent);
}

.ba-modal-actions button:disabled {
  opacity: .65;
  cursor: not-allowed;
}

.ba-menu-list {
  display: grid;
  gap: 8px;
}

.ba-menu-list button {
  width: 100%;
  display: grid;
  grid-template-columns: 42px minmax(0,1fr);
  column-gap: 10px;
  align-items: center;
  min-height: 58px;
  border: 1px solid var(--border,rgba(0,0,0,.10));
  border-radius: 18px;
  padding: 9px;
  background: var(--surface,#fff);
  color: var(--text,#111827);
  text-align: left;
  cursor: pointer;
}

.ba-menu-list button span {
  grid-row: span 2;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: color-mix(in srgb, var(--ba-primary) 10%, transparent);
  color: var(--ba-primary);
  font-weight: 1000;
}

.ba-menu-list button b,
.ba-menu-list button small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ba-menu-list button b {
  font-size: 13px;
  font-weight: 1000;
}

.ba-menu-list button small {
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 750;
}

.ba-menu-list button.active {
  border-color: color-mix(in srgb, var(--ba-primary) 34%, var(--border,rgba(0,0,0,.10)));
  background: color-mix(in srgb, var(--ba-primary) 8%, var(--surface,#fff));
}

.ba-menu-list button.danger span {
  background: color-mix(in srgb, #dc2626 10%, transparent);
  color: #dc2626;
}

.ba-menu-list button.danger b {
  color: #991b1b;
}

.student-detail-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 7px;
  margin-bottom: 10px;
}

.student-detail-strip span {
  display: block;
  padding: 9px;
  border-radius: 16px;
  background: color-mix(in srgb, var(--muted,#64748b) 8%, transparent);
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 850;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.student-detail-strip b {
  display: block;
  margin-bottom: 3px;
  color: var(--text,#111827);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .05em;
}

.ba-form {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 10px;
}

.ba-form.two {
  grid-template-columns: minmax(0,1fr);
}

.ba-form.compact {
  gap: 9px;
}

.ba-form label {
  display: grid;
  gap: 6px;
  min-width: 0;
}

.ba-form span {
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .06em;
}

.ba-media-hint {
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 750;
  line-height: 1.4;
}

.ba-form .wide {
  grid-column: 1 / -1;
}

.ba-form-section {
  padding: 12px 0;
  border-top: 1px solid var(--border,rgba(0,0,0,.08));
}

.ba-form-section:first-of-type {
  border-top: 0;
  padding-top: 0;
}

.ba-form-section h3 {
  margin: 0 0 10px;
  color: var(--text,#111827);
  font-size: 14px;
  font-weight: 1000;
  letter-spacing: -.03em;
}

.ba-page input[type="file"] {
  padding: 10px;
  font-size: 12px;
}

.ba-page textarea {
  min-height: 92px;
  padding: 12px;
  resize: vertical;
  line-height: 1.55;
}


.ba-media-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2px;
}

.ba-media-button {
  width: auto;
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--ba-primary);
  border-radius: 999px;
  padding: 0 14px;
  background: var(--ba-primary);
  color: #fff !important;
  font-size: 12px;
  font-weight: 950;
  letter-spacing: 0 !important;
  text-transform: none !important;
  cursor: pointer;
  box-shadow: 0 10px 22px color-mix(in srgb, var(--ba-primary) 18%, transparent);
}

.ba-media-button.secondary {
  background: var(--surface, #fff);
  color: var(--ba-primary) !important;
  box-shadow: none;
}

.ba-media-button input {
  display: none;
}

.ba-preview-photo {
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid var(--border,rgba(0,0,0,.10));
}

.ba-preview-banner {
  width: 100%;
  height: 130px;
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid var(--border,rgba(0,0,0,.10));
}

.ba-modal {
  width: min(980px, 100%);
  max-height: min(92dvh, 900px);
  overflow-y: auto;
  padding: 14px;
  border-radius: 28px;
  box-shadow: 0 30px 90px rgba(15,23,42,.35);
}

.ba-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 4px 2px 14px;
}

.ba-analysis-grid {
  display: grid;
  grid-template-columns: minmax(0,1fr);
  gap: 10px;
  margin-top: 10px;
}

.ba-analysis,
.ba-table-card,
.ba-empty {
  padding: 13px;
  border-radius: 24px;
}

.ba-analysis span {
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.ba-analysis strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(22px,7vw,30px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
  overflow-wrap: anywhere;
}

.ba-analysis p {
  margin: 8px 0 0;
  color: var(--muted,#64748b);
  font-size: 12px;
  line-height: 1.5;
}

.ba-analysis-list {
  display: grid;
  gap: 10px;
  margin-top: 12px;
}

.ba-analysis-list section {
  display: grid;
  gap: 6px;
  padding: 10px;
  border-radius: 16px;
  background: color-mix(in srgb,var(--muted,#64748b) 8%,transparent);
}

.ba-analysis-list section > div:first-child {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.ba-analysis-list b,
.ba-analysis-list small {
  font-size: 12px;
}

.ba-analysis-list small {
  color: var(--muted,#64748b);
  font-weight: 850;
}

.ba-progress {
  height: 8px;
  border-radius: 999px;
  background: color-mix(in srgb,var(--muted,#64748b) 18%,transparent);
  overflow: hidden;
}

.ba-progress i {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--ba-primary);
}

.ba-empty {
  display: grid;
  place-items: center;
  align-content: center;
  gap: 8px;
  min-height: 220px;
  text-align: center;
  border-style: dashed;
}

.ba-empty-icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));
  font-size: 28px;
}

.ba-empty h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 1000;
}

.ba-empty p {
  margin: 0;
  color: var(--muted,#64748b);
  font-size: 13px;
  line-height: 1.6;
}

.ba-table-card {
  margin-top: 10px;
}

.ba-table-scroll {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  border-radius: 18px;
  border: 1px solid var(--border,rgba(0,0,0,.08));
}

.ba-table-scroll table {
  width: 100%;
  min-width: 1120px;
  border-collapse: collapse;
  background: var(--card-bg, var(--surface, var(--bg, transparent)));
}

.ba-table-scroll th,
.ba-table-scroll td {
  padding: 10px;
  border-bottom: 1px solid var(--border,rgba(0,0,0,.08));
  vertical-align: top;
  text-align: left;
  font-size: 13px;
}

.ba-table-scroll th {
  background: var(--table-header-bg, color-mix(in srgb, var(--ba-primary) 6%, var(--card-bg, var(--surface, var(--bg, transparent)))));
  color: var(--table-header-text, var(--muted, var(--text)));
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .07em;
}

.ba-table-scroll td strong,
.ba-table-scroll td span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ba-table-scroll td span {
  margin-top: 3px;
  color: var(--muted,#64748b);
  font-size: 11px;
}

.ba-table-actions {
  display: flex;
  flex-wrap: nowrap;
  gap: 7px;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.ba-table-actions::-webkit-scrollbar {
  display: none;
}

.ba-table-actions button {
  flex: 0 0 auto;
  min-height: 34px;
  border: 1px solid var(--border,rgba(0,0,0,.10));
  border-radius: 999px;
  padding: 0 10px;
  background: var(--surface,#fff);
  color: var(--text,#111827);
  font-size: 11px;
  font-weight: 950;
  cursor: pointer;
  white-space: nowrap;
}

.ba-table-actions button:first-child {
  background: var(--ba-primary);
  color: #fff;
  border-color: var(--ba-primary);
}

.ba-delete,
.ba-table-actions button.ba-delete {
  color: #991b1b;
  background: color-mix(in srgb,#dc2626 7%,var(--surface,#fff));
  border-color: color-mix(in srgb,#dc2626 24%,var(--border,rgba(0,0,0,.10)));
}

.ba-empty-table {
  padding: 22px;
  text-align: center;
  color: var(--muted,#64748b);
  font-weight: 850;
}

@media (min-width: 680px) {
  .ba-page {
    padding: calc(12px * var(--local-density-scale,1));
    padding-bottom: 44px;
  }

  .ba-search-card {
    grid-template-columns: minmax(0,1fr) repeat(3, 42px);
  }

  .ba-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .student-row {
    border-radius: 24px;
    padding: 12px;
  }

  .ba-analysis-grid {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }

  .ba-form {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }

  .ba-form.two {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }

  .ba-modal-backdrop,
  .ba-sheet-backdrop {
    place-items: center;
    padding: 18px;
  }

  .ba-sheet {
    border-radius: 28px;
    padding: 18px;
  }

  .ba-modal {
    padding: 18px;
  }

}

@media (min-width: 1040px) {
  .ba-page {
    padding: calc(16px * var(--local-density-scale,1));
    padding-bottom: 48px;
  }

  .ba-search-card,
  .ba-summary-line,
  .ba-list,
  .ba-analysis-grid,
  .ba-table-card,
  .ba-filter-chips {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  .ba-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .ba-analysis-grid {
    grid-template-columns: repeat(4, minmax(0,1fr));
  }

  .ba-current-filter {
    grid-column: span 2;
  }

  .ba-form {
    grid-template-columns: repeat(3, minmax(0,1fr));
  }

  .ba-form.two {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }

}

@media (max-width: 520px) {
  .ba-page {
    padding: calc(7px * var(--local-density-scale,1));
    padding-bottom: max(38px, env(safe-area-inset-bottom));
  }

  .ba-title h1 {
    font-size: 28px;
  }

  .ba-icon-button,
  .ba-filter-button,
  .ba-add-inline {
    width: 40px;
    height: 40px;
  }

  .ba-summary-line {
    align-items: flex-start;
    flex-direction: column;
    gap: 2px;
  }

  .student-detail-strip {
    grid-template-columns: minmax(0,1fr);
  }

  .ba-sheet,
  .ba-modal {
    border-radius: 24px 24px 18px 18px;
    padding: 12px;
  }

  .ba-sheet-actions,
  .ba-modal-actions {
    display: grid;
    grid-template-columns: minmax(0,1fr);
  }

  .ba-sheet-actions button,
  .ba-modal-actions button {
    width: 100%;
  }
}


.ba-media-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

.ba-media-button {
  min-height: 40px;
  border: 1px solid var(--ba-primary);
  border-radius: 999px;
  padding: 0 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--ba-primary);
  color: #fff;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 12px 26px color-mix(in srgb, var(--ba-primary) 18%, transparent);
}

.ba-media-button.secondary {
  background: var(--surface, #fff);
  color: var(--ba-primary);
  box-shadow: none;
}

.ba-media-hint {
  display: block;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 750;
  line-height: 1.45;
}

.camera-backdrop {
  z-index: 100;
  place-items: center;
}

.ba-camera-modal {
  width: min(720px, 100%);
  max-height: min(92dvh, 880px);
  overflow-y: auto;
  padding: 14px;
  border-radius: 28px;
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 30px 90px rgba(15,23,42,.35);
}

.ba-camera-preview {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 24px;
  background: #020617;
  border: 1px solid var(--border, rgba(0,0,0,.10));
}

.ba-camera-preview video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  background: #020617;
}

.ba-camera-loading {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(2,6,23,.72);
  color: #fff;
  font-size: 13px;
  font-weight: 950;
}

.ba-camera-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
}

.ba-camera-actions button {
  min-height: 42px;
  border-radius: 999px;
  padding: 0 14px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.ba-camera-secondary {
  border: 1px solid var(--border, rgba(0,0,0,.10));
  background: color-mix(in srgb, var(--muted, #64748b) 8%, var(--surface, #fff));
  color: var(--text, #111827);
}

.ba-camera-primary {
  border: 1px solid var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
  box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent);
}

.ba-camera-actions button:disabled {
  opacity: .62;
  cursor: not-allowed;
}

@media (max-width: 520px) {
  .ba-media-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ba-media-button,
  .ba-camera-actions button {
    width: 100%;
  }

  .ba-camera-actions {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
  }

  .ba-camera-modal {
    border-radius: 22px;
    padding: 11px;
  }
}

/* My Child Reports golden additions */

/* Extra compact report-only layout */
.student-reports-page .ba-print-card{margin-top:8px;border-radius:22px}
.student-reports-page .ba-print-head{padding:8px 10px}
.student-reports-page .ba-print-head strong{font-size:14px}
.student-reports-page .ba-print-head p{font-size:11px;margin-top:2px}
.student-reports-page .ba-print-zone{padding:8px}


.student-reports-page .ba-list {
  grid-template-columns: minmax(0, 1fr);
}

.ba-report-icon {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: color-mix(in srgb, var(--ba-primary) 11%, transparent);
  font-size: 18px;
  color: var(--ba-primary);
}

.ba-print-card {
  margin-top: 10px;
  background: var(--card-bg, var(--surface,#fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  border-radius: 24px;
  box-shadow: 0 12px 28px rgba(15,23,42,.045);
  overflow: hidden;
}

.ba-print-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid var(--border, rgba(0,0,0,.08));
  background: color-mix(in srgb, var(--muted,#64748b) 6%, transparent);
}

.ba-print-head span {
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.ba-print-head strong {
  display: block;
  margin-top: 3px;
  color: var(--text,#111827);
  font-size: 15px;
  font-weight: 1000;
  letter-spacing: -.03em;
}

.ba-print-head p {
  margin: 3px 0 0;
  color: var(--muted,#64748b);
  font-size: 11px;
  line-height: 1.4;
}

.ba-print-zone {
  padding: 10px;
  background: var(--card-bg, var(--surface,#fff));
}

.ba-report-toolbar {
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
}

.ba-report-toolbar button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 10px;
  background: color-mix(in srgb, var(--ba-primary) 10%, var(--card-bg,#fff));
  color: var(--ba-primary);
  font-size: 11px;
  font-weight: 950;
  cursor: pointer;
  white-space: nowrap;
}

.ba-report-toolbar button.primary {
  background: var(--ba-primary);
  color: #fff;
}

.report-analytics-card {
  grid-column: 1 / -1;
}

.report-analytics-card > div {
  margin-top: 10px;
}

@media (min-width: 680px) {
  .student-reports-page .ba-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1040px) {
  .student-reports-page .ba-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1320px) {
  .student-reports-page .ba-list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media print {
  .report-no-print,
  .ba-search-card,
  .ba-filter-chips,
  .ba-sheet-backdrop,
  .ba-modal-backdrop,
  .ba-toast,
  .ba-print-head,
  .ba-report-toolbar {
    display: none !important;
  }

  .ba-page,
  .ba-print-card,
  .ba-print-zone {
    padding: 0 !important;
    margin: 0 !important;
    background: #fff !important;
    box-shadow: none !important;
    border: 0 !important;
    border-radius: 0 !important;
    overflow: visible !important;
  }
}


/* StudentReports final golden fixes: one-row action strip, theme-safe buttons/tables, clean preview */
.student-reports-page .ba-search-card {
  grid-template-columns: minmax(0, 1fr) repeat(4, 42px) !important;
  gap: 7px;
  align-items: center;
  overflow: hidden;
}

.student-reports-page .ba-search {
  min-width: 0;
  overflow: hidden;
}

.student-reports-page .ba-icon-button,
.student-reports-page .ba-filter-button,
.student-reports-page .ba-view-button,
.student-reports-page .ba-add-inline {
  width: 42px;
  height: 42px;
  min-width: 42px;
  min-height: 42px;
  flex: 0 0 42px;
  border-color: var(--border, rgba(0,0,0,.10));
  background: var(--card-bg, var(--surface,#fff));
  color: var(--text,#111827);
}

.student-reports-page .ba-add-inline {
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
}

.student-reports-page .ba-filter-button {
  background: color-mix(in srgb, var(--ba-primary) 8%, var(--card-bg,#fff));
  color: var(--ba-primary);
}

.student-reports-page .ba-filter-button.active {
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
}

.student-reports-page .ba-view-button {
  background: color-mix(in srgb, var(--muted,#64748b) 8%, var(--card-bg,#fff));
  color: var(--text,#111827);
}

.student-reports-page .ba-icon-button:hover,
.student-reports-page .ba-view-button:hover {
  border-color: color-mix(in srgb, var(--ba-primary) 28%, var(--border,rgba(0,0,0,.10)));
  color: var(--ba-primary);
}

.student-reports-page .ba-table-scroll th {
  background: var(--table-header-bg, color-mix(in srgb, var(--ba-primary) 6%, var(--card-bg, var(--surface,#fff))));
  color: var(--table-header-text, var(--muted, var(--text,#111827)));
}

.student-reports-page .ba-table-scroll table,
.student-reports-page .ba-table-scroll td {
  background: var(--card-bg, var(--surface,#fff));
  color: var(--text,#111827);
}

.student-reports-page .ba-print-head {
  align-items: center;
}

@media (max-width: 520px) {
  .student-reports-page .ba-search-card {
    grid-template-columns: minmax(0, 1fr) repeat(4, 38px) !important;
    gap: 5px;
    padding: 6px;
  }

  .student-reports-page .ba-icon-button,
  .student-reports-page .ba-filter-button,
  .student-reports-page .ba-view-button,
  .student-reports-page .ba-add-inline {
    width: 38px;
    height: 38px;
    min-width: 38px;
    min-height: 38px;
    flex-basis: 38px;
  }

  .student-reports-page .ba-search {
    min-height: 38px;
    padding: 0 8px;
  }

  .student-reports-page .ba-search input {
    min-height: 38px;
    font-size: 13px;
  }
}

`;var eE=r(6581),eO=r(13460),eF=r(94075),eU=r(19892),eV=r(45116),eW=r(78793),eK=r(87239),eG=r(3721),eH=r(55753);function eY(e,a,r){let t=String(e.code||e.templateCode||e.layoutKey||e.key||"").trim();return{name:e.name||e.templateName||("cumulative_transcript"===r?"Cumulative Transcript Classic":"Classic Formal"),code:t||("cumulative_transcript"===r?"cumulative_transcript_classic":"classic_formal"),templateCode:t||("cumulative_transcript"===r?"cumulative_transcript_classic":"classic_formal"),layoutKey:e.layoutKey||t||("cumulative_transcript"===r?"cumulative_transcript_classic":"classic_formal"),templateKey:e.templateKey||e.layoutKey||t,reportType:r,orientation:e.orientation||"portrait",paperSize:e.paperSize||"A4",density:e.density||"compact",description:e.description||"Built-in report template.",active:!1!==e.active,isDefault:!0===e.isDefault||0===a}}function eJ(e){let a=String(e.reportType||"student_report").trim(),r=String(e.code||e.templateCode||e.layoutKey||e.templateKey||e.name||e.id||"").trim();return`${a}:${r}`}let eq=String(ec.$S.SCHOOLS||"schools"),eZ=String(ec.$S.BRANCHES||"branches"),eX=String(ec.$S.SCHOOL_BRANCH_SETTINGS||ec.$S.SCHOOL_BRANCHES_SETTINGS||"schoolBranchSettings"),eQ=String(ec.$S.STUDENTS||"students"),e0=String(ec.Vq.LOGO||"logo"),e1=String(ec.Vq.PHOTO||"photo");function e2(e,a,r){let t;return!e||r&&e&&Object.prototype.hasOwnProperty.call(e,r)&&!e6(e[r])?"":!(t=String(e[a]||""))||t.startsWith("blob:")||t.startsWith("data:image/")?"":t}function e4(...e){for(let a of e){let e=String(a||"").trim();if(e)return e}return""}let e8=(e,a=1)=>null==e||Number.isNaN(e)?"0":Number(e).toFixed(a),e5=e=>"up"===e?"Improving":"down"===e?"Declining":"stable"===e?"Stable":"-",e9={"student-transcript":"Cumulative Transcript","cumulative-book":"Cumulative Report Book","multi-period-report":"Multi-Period Report","annual-broadsheet":"Annual Broadsheet","subject-history":"Subject History","promotion-summary":"Promotion Summary","progression-timeline":"Progression Timeline"};function e3(e,a){if(!a)return"Not selected";let r=e.find(e=>e.id===a);return r?.name||r?.fullName||"Not found"}function e6(e){return null==e?"":String(e).trim()}function e7(e,a){let r=e6(e),t=e6(a);return!!r&&!!t&&r===t}function ae(e){try{return window.localStorage.getItem(e)||window.sessionStorage.getItem(e)}catch{return null}}function aa(e){let a=ae(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}}function ar(){return aa("activeMembership")}function at(...e){for(let a of e){let e=e6(a);if(e)return e}return""}function ai(e,a){return!a||!e||e===a}function as(e){return!e.isDeleted&&!1!==e.active&&"withdrawn"!==e.status}function an(e){return String(e?.code||e?.templateCode||e?.layoutKey||e?.templateKey||"").trim()}function ao(e){return String(e?.reportType||"student_report").trim()}function ad(e){return!e.isDeleted&&!1!==e.active}function al(e,a,r,t){return ai(e.accountId,a)&&(!e.schoolId||e7(e.schoolId,r))&&(!e.branchId||e7(e.branchId,t))&&!e.isDeleted}function ap(e,a){let r=e.filter(e=>ad(e)&&ao(e)===a);return r.find(e=>e.isDefault)||r[0]}function ac(e,a,r){let t=e.filter(e=>!!ad(e)&&ao(e)===a&&(!e.scopeType||"branch"===e.scopeType)&&(!e.scopeId||!r||!!e7(e.scopeId,r)));return t.find(e=>e.isDefault)||t[0]}function am(e,a){if(!a)return;let r=e6(a.templateId),t=an(a);return e.find(e=>r&&e6(e.id)===r&&ad(e))||e.find(e=>t&&an(e)===t&&ad(e))}function ah(e,a,r,t){let i=e6(a?.templateSettingsId),s=e6(r?.id||a?.templateId),n=an(r)||an(a);return e.find(e=>i&&e6(e.id)===i&&ad(e))||e.find(e=>s&&e6(e.templateId)===s&&ad(e))||e.find(e=>n&&an(e)===n&&(!t||ao(e)===t)&&ad(e))}function au({primary:e,title:a,text:r}){return(0,t.jsxs)("main",{className:"ba-page cumulative-page",style:{"--ba-primary":e},children:[(0,t.jsx)("style",{children:av}),(0,t.jsxs)("section",{className:"ba-state",children:[(0,t.jsx)("div",{className:"ba-spinner"}),(0,t.jsx)("h2",{children:a}),(0,t.jsx)("p",{children:r})]})]})}function ax(){return(0,t.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4 7h9"}),(0,t.jsx)("path",{d:"M17 7h3"}),(0,t.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,t.jsx)("path",{d:"M4 17h3"}),(0,t.jsx)("path",{d:"M11 17h9"}),(0,t.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function ag({filters:e,setBranchLockedFilters:a,academicStructures:r,academicPeriods:i,classes:s,students:n,subjects:o,onClose:d}){let l=i.filter(a=>!e.academicStructureId||a.academicStructureId===e.academicStructureId),p=n.filter(a=>!e.classId||a.currentClassId===e.classId);return(0,t.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,t.jsxs)("section",{className:"ba-sheet",children:[(0,t.jsxs)("div",{className:"ba-sheet-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:"Filters"}),(0,t.jsx)("p",{children:"Choose a linked child, historical period, subject, or record type. School and branch stay locked."})]}),(0,t.jsx)("button",{type:"button",onClick:d,"aria-label":"Close filters",children:"✕"})]}),(0,t.jsxs)("div",{className:"ba-form compact",children:[(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Academic Structure"}),(0,t.jsxs)("select",{value:e.academicStructureId||"",onChange:e=>a(a=>({...a,academicStructureId:e6(e.target.value)||void 0,academicPeriodId:void 0,fromAcademicPeriodId:void 0,toAcademicPeriodId:void 0,classId:void 0,studentId:void 0,subjectId:void 0})),children:[(0,t.jsx)("option",{value:"",children:"All structures"}),r.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Academic Period"}),(0,t.jsxs)("select",{value:e.academicPeriodId||"",onChange:e=>a(a=>({...a,academicPeriodId:e6(e.target.value)||void 0,classId:void 0,studentId:void 0})),children:[(0,t.jsx)("option",{value:"",children:"All periods"}),l.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"From Period"}),(0,t.jsxs)("select",{value:e.fromAcademicPeriodId||"",onChange:e=>a(a=>({...a,fromAcademicPeriodId:e6(e.target.value)||void 0})),children:[(0,t.jsx)("option",{value:"",children:"No start period"}),l.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"To Period"}),(0,t.jsxs)("select",{value:e.toAcademicPeriodId||"",onChange:e=>a(a=>({...a,toAcademicPeriodId:e6(e.target.value)||void 0})),children:[(0,t.jsx)("option",{value:"",children:"No end period"}),l.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Class"}),(0,t.jsxs)("select",{value:e.classId||"",onChange:e=>a(a=>({...a,classId:e6(e.target.value)||void 0,studentId:void 0})),children:[(0,t.jsx)("option",{value:"",children:"All classes"}),s.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Student"}),(0,t.jsxs)("select",{value:e.studentId||"",onChange:e=>a(a=>({...a,studentId:e6(e.target.value)||void 0})),children:[(0,t.jsx)("option",{value:"",children:"Select student"}),p.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.fullName,e.admissionNumber?` (${e.admissionNumber})`:""]},e.id))]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Subject"}),(0,t.jsxs)("select",{value:e.subjectId||"",onChange:e=>a(a=>({...a,subjectId:e6(e.target.value)||void 0})),children:[(0,t.jsx)("option",{value:"",children:"Select subject"}),o.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.name,e.code?` (${e.code})`:""]},e.id))]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Snapshot Type"}),(0,t.jsxs)("select",{value:e.snapshotType,onChange:e=>a(a=>({...a,snapshotType:e.target.value})),children:[(0,t.jsx)("option",{value:"all",children:"All snapshots"}),(0,t.jsx)("option",{value:"terminal",children:"Terminal snapshots"}),(0,t.jsx)("option",{value:"promotion",children:"Promotion snapshots"}),(0,t.jsx)("option",{value:"manual",children:"Manual snapshots"})]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Decision"}),(0,t.jsxs)("select",{value:e.decision||"all",onChange:e=>a(a=>({...a,decision:e.target.value})),children:[(0,t.jsx)("option",{value:"all",children:"All decisions"}),(0,t.jsx)("option",{value:"promote",children:"Promote"}),(0,t.jsx)("option",{value:"repeat",children:"Repeat"}),(0,t.jsx)("option",{value:"graduate",children:"Graduate"})]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Sort Mode"}),(0,t.jsxs)("select",{value:e.sortMode,onChange:e=>a(a=>({...a,sortMode:e.target.value})),children:[(0,t.jsx)("option",{value:"position",children:"Sort by position"}),(0,t.jsx)("option",{value:"alphabetical",children:"Sort alphabetically"}),(0,t.jsx)("option",{value:"average",children:"Sort by average"}),(0,t.jsx)("option",{value:"admission-number",children:"Sort by admission no."})]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Grouping"}),(0,t.jsxs)("select",{value:e.groupingMode,onChange:e=>a(a=>({...a,groupingMode:e.target.value})),children:[(0,t.jsx)("option",{value:"academic-structure",children:"Academic structure"}),(0,t.jsx)("option",{value:"class",children:"Class"}),(0,t.jsx)("option",{value:"period",children:"Period"})]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Subject Aggregation"}),(0,t.jsxs)("select",{value:e.subjectAggregationMode,onChange:e=>a(a=>({...a,subjectAggregationMode:e.target.value})),children:[(0,t.jsx)("option",{value:"average",children:"Average"}),(0,t.jsx)("option",{value:"latest",children:"Latest score"}),(0,t.jsx)("option",{value:"best",children:"Best score"}),(0,t.jsx)("option",{value:"weighted-average",children:"Weighted average"})]})]})]}),(0,t.jsxs)("div",{className:"cumulative-toggle-grid",children:[(0,t.jsxs)("button",{type:"button",className:e.includeTerminalSnapshots?"active":"",onClick:()=>a(e=>({...e,includeTerminalSnapshots:!e.includeTerminalSnapshots})),children:["Terminal: ",e.includeTerminalSnapshots?"On":"Off"]}),(0,t.jsxs)("button",{type:"button",className:e.includePromotionRecords?"active":"",onClick:()=>a(e=>({...e,includePromotionRecords:!e.includePromotionRecords})),children:["Promotions: ",e.includePromotionRecords?"On":"Off"]}),(0,t.jsxs)("button",{type:"button",className:e.includeManualSnapshots?"active":"",onClick:()=>a(e=>({...e,includeManualSnapshots:!e.includeManualSnapshots})),children:["Manual: ",e.includeManualSnapshots?"On":"Off"]}),(0,t.jsxs)("button",{type:"button",className:e.includeDeletedSnapshots?"active":"",onClick:()=>a(e=>({...e,includeDeletedSnapshots:!e.includeDeletedSnapshots})),children:["Deleted: ",e.includeDeletedSnapshots?"On":"Off"]})]}),(0,t.jsxs)("div",{className:"ba-sheet-actions",children:[(0,t.jsx)("button",{type:"button",onClick:()=>a(e=>({...e,academicStructureId:void 0,academicPeriodId:void 0,fromAcademicPeriodId:void 0,toAcademicPeriodId:void 0,classId:void 0,studentId:void 0,subjectId:void 0,snapshotType:"all",decision:"all",sortMode:"position",groupingMode:"academic-structure",subjectAggregationMode:"average",includePromotionRecords:!0,includeManualSnapshots:!0,includeTerminalSnapshots:!0,includeDeletedSnapshots:!1})),children:"Clear"}),(0,t.jsx)("button",{type:"button",className:"primary",onClick:d,children:"Apply"})]})]})})}function ab({mode:e,setMode:a,onRefresh:r,onPrint:i,onClose:s}){return(0,t.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,t.jsxs)("section",{className:"ba-sheet small",children:[(0,t.jsxs)("div",{className:"ba-sheet-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{children:"More"}),(0,t.jsx)("p",{children:"Choose output mode or run quick actions."})]}),(0,t.jsx)("button",{type:"button",onClick:s,"aria-label":"Close menu",children:"✕"})]}),(0,t.jsxs)("div",{className:"ba-menu-list",children:[[{mode:"student-transcript",icon:"\uD83D\uDCC4",label:"Cumulative Transcript",note:"Template-based academic transcript"},{mode:"cumulative-book",icon:"\uD83D\uDCD8",label:"Cumulative Report Book",note:"Covers plus period report cards"},{mode:"multi-period-report",icon:"\uD83D\uDCDA",label:"Multi-Period Report",note:"Student performance across periods"},{mode:"annual-broadsheet",icon:"☷",label:"Annual Broadsheet",note:"Class or school annual broadsheet"},{mode:"subject-history",icon:"\uD83D\uDCC8",label:"Subject History",note:"Longitudinal subject analytics"},{mode:"promotion-summary",icon:"\uD83C\uDF93",label:"Promotion Summary",note:"Promotion decision summary"},{mode:"progression-timeline",icon:"⏱",label:"Progression Timeline",note:"Student academic timeline"}].map(r=>(0,t.jsxs)("button",{type:"button",className:e===r.mode?"active":"",onClick:()=>a(r.mode),children:[(0,t.jsx)("span",{children:r.icon}),(0,t.jsx)("b",{children:r.label}),(0,t.jsx)("small",{children:r.note})]},r.mode)),(0,t.jsxs)("button",{type:"button",onClick:i,children:[(0,t.jsx)("span",{children:"⎙"}),(0,t.jsx)("b",{children:"Print current view"}),(0,t.jsx)("small",{children:"Print the selected cumulative output"})]}),(0,t.jsxs)("button",{type:"button",onClick:r,children:[(0,t.jsx)("span",{children:"↻"}),(0,t.jsx)("b",{children:"Refresh"}),(0,t.jsx)("small",{children:"Reload my child's cumulative records"})]})]})]})})}function af({primary:e,schoolName:a,label:r}){return(0,t.jsxs)("div",{style:{marginTop:10,borderTop:`2px solid ${e}`,paddingTop:5,display:"flex",justifyContent:"space-between",fontSize:8.5,color:"#555"},children:[(0,t.jsxs)("span",{children:[r," generated for ",a]}),(0,t.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})}let av=`
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

.ba-page input,
.ba-page select,
.ba-page textarea {
  width: 100%;
  min-height: 44px;
  border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10)));
  border-radius: 16px;
  padding: 0 12px;
  background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #111827));
  outline: none;
  font-weight: 750;
}

.ba-page input:focus,
.ba-page select:focus,
.ba-page textarea:focus {
  border-color: color-mix(in srgb, var(--ba-primary) 52%, var(--border, rgba(0,0,0,.10)));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--ba-primary) 12%, transparent);
}

.ba-state,
.ba-search-card,
.ba-summary-line,
.ba-card,
.ba-table-card,
.ba-analysis,
.ba-empty,
.ba-sheet,
.ba-modal,
.student-row {
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
  max-width: 34rem;
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.6;
}

.ba-state-button {
  min-height: 42px;
  border: 0;
  border-radius: 999px;
  padding: 0 16px;
  background: var(--ba-primary);
  color: #fff;
  font-weight: 950;
  cursor: pointer;
}

.ba-toast {
  position: sticky;
  top: 8px;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 8px;
  padding: 12px 14px;
  border-radius: 18px;
  font-size: 13px;
  font-weight: 850;
  box-shadow: 0 18px 40px rgba(15,23,42,.12);
}

.ba-toast.success { background: rgba(34,197,94,.14); color: #166534; }
.ba-toast.error { background: rgba(239,68,68,.12); color: #991b1b; }
.ba-toast.info { background: rgba(59,130,246,.13); color: #1d4ed8; }

.ba-toast button {
  border: 0;
  background: transparent;
  color: currentColor;
  font-weight: 1000;
  cursor: pointer;
}

/* Compact search/action strip. The page intentionally has no duplicate title header. */
.ba-topbar,
.ba-title,
.ba-topbar-actions {
  display: none;
}

.ba-icon-button,
.ba-filter-button,
.ba-add-inline {
  width: 42px;
  height: 42px;
  border: 1px solid var(--border, rgba(0,0,0,.10));
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: var(--card-bg, var(--surface,#fff));
  color: var(--text,#111827);
  font-size: 18px;
  font-weight: 1000;
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(15,23,42,.045);
}


.ba-add-inline {
  flex: 0 0 42px;
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
  font-size: 25px;
  line-height: 1;
  box-shadow: 0 12px 28px color-mix(in srgb, var(--ba-primary) 22%, transparent);
}

.ba-search-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) repeat(3, 42px);
  gap: 8px;
  align-items: center;
  margin-top: 2px;
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
  min-height: 42px;
  border: 0;
  padding: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  font-size: 14px;
}

.ba-slider-icon {
  width: 21px;
  height: 21px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ba-filter-button {
  position: relative;
  background: color-mix(in srgb, var(--ba-primary) 8%, var(--card-bg,#fff));
  color: var(--ba-primary);
}

.ba-filter-button.active {
  background: var(--ba-primary);
  color: #fff;
  border-color: var(--ba-primary);
}

.ba-filter-button b {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 19px;
  height: 19px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: #ef4444;
  color: #fff;
  font-size: 10px;
  border: 2px solid var(--card-bg,#fff);
}

.ba-summary-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
  padding: 10px 12px;
  border-radius: 20px;
}

.ba-summary-line div {
  display: flex;
  align-items: baseline;
  gap: 6px;
  min-width: 0;
}

.ba-summary-line strong {
  font-size: 21px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.ba-summary-line span,
.ba-summary-line p {
  color: var(--muted,#64748b);
  font-size: 12px;
  font-weight: 850;
}

.ba-summary-line p {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

.ba-list {
  display: grid;
  gap: 7px;
  margin-top: 10px;
}

.student-row {
  width: 100%;
  display: grid;
  grid-template-columns: auto minmax(0,1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 22px;
  text-align: left;
  cursor: pointer;
  transition: transform .16s var(--ease), box-shadow .16s var(--ease), border-color .16s var(--ease);
}

.student-row:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--ba-primary) 24%, var(--border, rgba(0,0,0,.10)));
  box-shadow: 0 16px 34px rgba(15,23,42,.07);
}

.ba-avatar {
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 18px;
  color: #fff;
  font-size: 17px;
  font-weight: 1000;
  box-shadow: 0 12px 24px rgba(15,23,42,.12);
}

.student-main,
.student-main strong,
.student-main small,
.student-main em {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.student-main strong {
  color: var(--text,#111827);
  font-size: 14px;
  font-weight: 1000;
  letter-spacing: -.02em;
}

.student-main small {
  margin-top: 3px;
  color: var(--muted,#64748b);
  font-size: 12px;
  font-weight: 850;
  font-style: normal;
}

.student-main em {
  margin-top: 3px;
  color: color-mix(in srgb, var(--muted,#64748b) 86%, var(--text,#111827));
  font-size: 11px;
  font-weight: 750;
  font-style: normal;
}

.student-side {
  display: grid;
  justify-items: end;
  gap: 6px;
  flex: 0 0 auto;
}

.student-side i {
  color: var(--muted,#64748b);
  font-style: normal;
  font-size: 18px;
  font-weight: 1000;
  line-height: 1;
}

.ba-chip {
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 3px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 950;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
}

.ba-chip.green { background: rgba(34,197,94,.12); color: #16a34a; }
.ba-chip.red { background: rgba(239,68,68,.12); color: #dc2626; }
.ba-chip.blue { background: rgba(59,130,246,.12); color: #2563eb; }
.ba-chip.gray { background: color-mix(in srgb,var(--muted,#64748b) 14%,transparent); color: var(--muted,#64748b); }
.ba-chip.orange { background: rgba(245,158,11,.14); color: #b45309; }
.ba-chip.purple { background: rgba(147,51,234,.12); color: #7e22ce; }

.status-dot-mini {
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 999px;
  background: var(--muted,#64748b);
  box-shadow: 0 0 0 4px color-mix(in srgb, currentColor 10%, transparent);
}

.status-dot-mini.green { background: #22c55e; }
.status-dot-mini.red { background: #ef4444; }
.status-dot-mini.blue { background: #3b82f6; }
.status-dot-mini.orange { background: #f59e0b; }
.status-dot-mini.gray { background: var(--muted,#64748b); }

.status-sheet-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap: 8px;
}

.status-sheet-grid span {
  display: grid;
  gap: 5px;
  padding: 11px;
  border: 1px solid var(--border,rgba(0,0,0,.08));
  border-radius: 18px;
  background: color-mix(in srgb, var(--muted,#64748b) 7%, transparent);
}

.status-sheet-grid b {
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.status-sheet-grid em {
  display: flex;
  align-items: center;
  gap: 7px;
  color: var(--text,#111827);
  font-size: 12px;
  font-style: normal;
  font-weight: 900;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


.ba-sheet-backdrop,
.ba-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15,23,42,.50);
  backdrop-filter: blur(12px);
}

.ba-sheet {
  width: min(760px, 100%);
  max-height: min(88dvh, 760px);
  overflow-y: auto;
  padding: 14px;
  border-radius: 28px 28px 22px 22px;
  box-shadow: 0 30px 90px rgba(15,23,42,.32);
  animation: sheetIn .18s var(--ease);
}

.ba-sheet.small {
  width: min(520px, 100%);
}

@keyframes sheetIn {
  from { transform: translateY(16px); opacity: .7; }
  to { transform: translateY(0); opacity: 1; }
}

.ba-sheet-head,
.ba-sheet-profile {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 12px;
}

.ba-sheet-head h2,
.ba-sheet-profile h2,
.ba-modal-head h2 {
  margin: 0;
  color: var(--text,#111827);
  font-size: 21px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.ba-sheet-head p,
.ba-sheet-profile p,
.ba-modal-head p {
  margin: 5px 0 0;
  color: var(--muted,#64748b);
  font-size: 12px;
  line-height: 1.5;
  font-weight: 750;
}

.ba-sheet-head button,
.ba-sheet-profile button,
.ba-modal-head button {
  width: 38px;
  height: 38px;
  border: 1px solid var(--border,rgba(0,0,0,.10));
  border-radius: 999px;
  background: var(--surface,#fff);
  color: var(--text,#111827);
  font-weight: 1000;
  cursor: pointer;
  flex: 0 0 auto;
}

.ba-sheet-actions,
.ba-modal-actions {
  position: sticky;
  bottom: -14px;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
  padding: 12px 0 2px;
  background: linear-gradient(to top, var(--card-bg,var(--surface,#fff)) 70%, transparent);
}

.ba-sheet-actions button,
.ba-modal-actions button {
  min-height: 42px;
  border: 1px solid var(--border,rgba(0,0,0,.10));
  border-radius: 999px;
  padding: 0 16px;
  background: color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff));
  color: var(--text,#111827);
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.ba-sheet-actions button.primary,
.ba-modal-actions button:last-child {
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
  box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent);
}

.ba-modal-actions button:disabled {
  opacity: .65;
  cursor: not-allowed;
}

.ba-menu-list {
  display: grid;
  gap: 8px;
}

.ba-menu-list button {
  width: 100%;
  display: grid;
  grid-template-columns: 42px minmax(0,1fr);
  column-gap: 10px;
  align-items: center;
  min-height: 58px;
  border: 1px solid var(--border,rgba(0,0,0,.10));
  border-radius: 18px;
  padding: 9px;
  background: var(--surface,#fff);
  color: var(--text,#111827);
  text-align: left;
  cursor: pointer;
}

.ba-menu-list button span {
  grid-row: span 2;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: color-mix(in srgb, var(--ba-primary) 10%, transparent);
  color: var(--ba-primary);
  font-weight: 1000;
}

.ba-menu-list button b,
.ba-menu-list button small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ba-menu-list button b {
  font-size: 13px;
  font-weight: 1000;
}

.ba-menu-list button small {
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 750;
}

.ba-menu-list button.active {
  border-color: color-mix(in srgb, var(--ba-primary) 34%, var(--border,rgba(0,0,0,.10)));
  background: color-mix(in srgb, var(--ba-primary) 8%, var(--surface,#fff));
}

.ba-menu-list button.danger span {
  background: color-mix(in srgb, #dc2626 10%, transparent);
  color: #dc2626;
}

.ba-menu-list button.danger b {
  color: #991b1b;
}

.student-detail-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 7px;
  margin-bottom: 10px;
}

.student-detail-strip span {
  display: block;
  padding: 9px;
  border-radius: 16px;
  background: color-mix(in srgb, var(--muted,#64748b) 8%, transparent);
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 850;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.student-detail-strip b {
  display: block;
  margin-bottom: 3px;
  color: var(--text,#111827);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .05em;
}

.ba-form {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 10px;
}

.ba-form.two {
  grid-template-columns: minmax(0,1fr);
}

.ba-form.compact {
  gap: 9px;
}

.ba-form label {
  display: grid;
  gap: 6px;
  min-width: 0;
}

.ba-form span {
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .06em;
}

.ba-media-hint {
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 750;
  line-height: 1.4;
}

.ba-form .wide {
  grid-column: 1 / -1;
}

.ba-form-section {
  padding: 12px 0;
  border-top: 1px solid var(--border,rgba(0,0,0,.08));
}

.ba-form-section:first-of-type {
  border-top: 0;
  padding-top: 0;
}

.ba-form-section h3 {
  margin: 0 0 10px;
  color: var(--text,#111827);
  font-size: 14px;
  font-weight: 1000;
  letter-spacing: -.03em;
}

.ba-page input[type="file"] {
  padding: 10px;
  font-size: 12px;
}

.ba-page textarea {
  min-height: 92px;
  padding: 12px;
  resize: vertical;
  line-height: 1.55;
}


.ba-media-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2px;
}

.ba-media-button {
  width: auto;
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--ba-primary);
  border-radius: 999px;
  padding: 0 14px;
  background: var(--ba-primary);
  color: #fff !important;
  font-size: 12px;
  font-weight: 950;
  letter-spacing: 0 !important;
  text-transform: none !important;
  cursor: pointer;
  box-shadow: 0 10px 22px color-mix(in srgb, var(--ba-primary) 18%, transparent);
}

.ba-media-button.secondary {
  background: var(--surface, #fff);
  color: var(--ba-primary) !important;
  box-shadow: none;
}

.ba-media-button input {
  display: none;
}

.ba-preview-photo {
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid var(--border,rgba(0,0,0,.10));
}

.ba-preview-banner {
  width: 100%;
  height: 130px;
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid var(--border,rgba(0,0,0,.10));
}

.ba-modal {
  width: min(980px, 100%);
  max-height: min(92dvh, 900px);
  overflow-y: auto;
  padding: 14px;
  border-radius: 28px;
  box-shadow: 0 30px 90px rgba(15,23,42,.35);
}

.ba-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 4px 2px 14px;
}

.ba-analysis-grid {
  display: grid;
  grid-template-columns: minmax(0,1fr);
  gap: 10px;
  margin-top: 10px;
}

.ba-analysis,
.ba-table-card,
.ba-empty {
  padding: 13px;
  border-radius: 24px;
}

.ba-analysis span {
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.ba-analysis strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(22px,7vw,30px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
  overflow-wrap: anywhere;
}

.ba-analysis p {
  margin: 8px 0 0;
  color: var(--muted,#64748b);
  font-size: 12px;
  line-height: 1.5;
}

.ba-analysis-list {
  display: grid;
  gap: 10px;
  margin-top: 12px;
}

.ba-analysis-list section {
  display: grid;
  gap: 6px;
  padding: 10px;
  border-radius: 16px;
  background: color-mix(in srgb,var(--muted,#64748b) 8%,transparent);
}

.ba-analysis-list section > div:first-child {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.ba-analysis-list b,
.ba-analysis-list small {
  font-size: 12px;
}

.ba-analysis-list small {
  color: var(--muted,#64748b);
  font-weight: 850;
}

.ba-progress {
  height: 8px;
  border-radius: 999px;
  background: color-mix(in srgb,var(--muted,#64748b) 18%,transparent);
  overflow: hidden;
}

.ba-progress i {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--ba-primary);
}

.ba-empty {
  display: grid;
  place-items: center;
  align-content: center;
  gap: 8px;
  min-height: 220px;
  text-align: center;
  border-style: dashed;
}

.ba-empty-icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));
  font-size: 28px;
}

.ba-empty h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 1000;
}

.ba-empty p {
  margin: 0;
  color: var(--muted,#64748b);
  font-size: 13px;
  line-height: 1.6;
}

.ba-table-card {
  margin-top: 10px;
}

.ba-table-scroll {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  border-radius: 18px;
  border: 1px solid var(--border,rgba(0,0,0,.08));
}

.ba-table-scroll table {
  width: 100%;
  min-width: 1120px;
  border-collapse: collapse;
  background: var(--card-bg, var(--surface, var(--bg, transparent)));
}

.ba-table-scroll th,
.ba-table-scroll td {
  padding: 10px;
  border-bottom: 1px solid var(--border,rgba(0,0,0,.08));
  vertical-align: top;
  text-align: left;
  font-size: 13px;
}

.ba-table-scroll th {
  background: var(--table-header-bg, color-mix(in srgb, var(--ba-primary) 6%, var(--card-bg, var(--surface, var(--bg, transparent)))));
  color: var(--table-header-text, var(--muted, var(--text)));
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .07em;
}

.ba-table-scroll td strong,
.ba-table-scroll td span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ba-table-scroll td span {
  margin-top: 3px;
  color: var(--muted,#64748b);
  font-size: 11px;
}

.ba-table-actions {
  display: flex;
  flex-wrap: nowrap;
  gap: 7px;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.ba-table-actions::-webkit-scrollbar {
  display: none;
}

.ba-table-actions button {
  flex: 0 0 auto;
  min-height: 34px;
  border: 1px solid var(--border,rgba(0,0,0,.10));
  border-radius: 999px;
  padding: 0 10px;
  background: var(--surface,#fff);
  color: var(--text,#111827);
  font-size: 11px;
  font-weight: 950;
  cursor: pointer;
  white-space: nowrap;
}

.ba-table-actions button:first-child {
  background: var(--ba-primary);
  color: #fff;
  border-color: var(--ba-primary);
}

.ba-delete,
.ba-table-actions button.ba-delete {
  color: #991b1b;
  background: color-mix(in srgb,#dc2626 7%,var(--surface,#fff));
  border-color: color-mix(in srgb,#dc2626 24%,var(--border,rgba(0,0,0,.10)));
}

.ba-empty-table {
  padding: 22px;
  text-align: center;
  color: var(--muted,#64748b);
  font-weight: 850;
}

@media (min-width: 680px) {
  .ba-page {
    padding: calc(12px * var(--local-density-scale,1));
    padding-bottom: 44px;
  }

  .ba-search-card {
    grid-template-columns: minmax(0,1fr) repeat(3, 42px);
  }

  .ba-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .student-row {
    border-radius: 24px;
    padding: 12px;
  }

  .ba-analysis-grid {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }

  .ba-form {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }

  .ba-form.two {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }

  .ba-modal-backdrop,
  .ba-sheet-backdrop {
    place-items: center;
    padding: 18px;
  }

  .ba-sheet {
    border-radius: 28px;
    padding: 18px;
  }

  .ba-modal {
    padding: 18px;
  }

}

@media (min-width: 1040px) {
  .ba-page {
    padding: calc(16px * var(--local-density-scale,1));
    padding-bottom: 48px;
  }

  .ba-search-card,
  .ba-summary-line,
  .ba-list,
  .ba-analysis-grid,
  .ba-table-card,
  .ba-filter-chips {
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }

  .ba-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .ba-analysis-grid {
    grid-template-columns: repeat(4, minmax(0,1fr));
  }

  .ba-current-filter {
    grid-column: span 2;
  }

  .ba-form {
    grid-template-columns: repeat(3, minmax(0,1fr));
  }

  .ba-form.two {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }

}

@media (max-width: 520px) {
  .ba-page {
    padding: calc(7px * var(--local-density-scale,1));
    padding-bottom: max(38px, env(safe-area-inset-bottom));
  }

  .ba-title h1 {
    font-size: 28px;
  }

  .ba-icon-button,
  .ba-filter-button,
  .ba-add-inline {
    width: 40px;
    height: 40px;
  }

  .ba-summary-line {
    align-items: flex-start;
    flex-direction: column;
    gap: 2px;
  }

  .student-detail-strip {
    grid-template-columns: minmax(0,1fr);
  }

  .ba-sheet,
  .ba-modal {
    border-radius: 24px 24px 18px 18px;
    padding: 12px;
  }

  .ba-sheet-actions,
  .ba-modal-actions {
    display: grid;
    grid-template-columns: minmax(0,1fr);
  }

  .ba-sheet-actions button,
  .ba-modal-actions button {
    width: 100%;
  }
}


.ba-media-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}

.ba-media-button {
  min-height: 40px;
  border: 1px solid var(--ba-primary);
  border-radius: 999px;
  padding: 0 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--ba-primary);
  color: #fff;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 12px 26px color-mix(in srgb, var(--ba-primary) 18%, transparent);
}

.ba-media-button.secondary {
  background: var(--surface, #fff);
  color: var(--ba-primary);
  box-shadow: none;
}

.ba-media-hint {
  display: block;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 750;
  line-height: 1.45;
}

.camera-backdrop {
  z-index: 100;
  place-items: center;
}

.ba-camera-modal {
  width: min(720px, 100%);
  max-height: min(92dvh, 880px);
  overflow-y: auto;
  padding: 14px;
  border-radius: 28px;
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 30px 90px rgba(15,23,42,.35);
}

.ba-camera-preview {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 24px;
  background: #020617;
  border: 1px solid var(--border, rgba(0,0,0,.10));
}

.ba-camera-preview video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  background: #020617;
}

.ba-camera-loading {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(2,6,23,.72);
  color: #fff;
  font-size: 13px;
  font-weight: 950;
}

.ba-camera-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
}

.ba-camera-actions button {
  min-height: 42px;
  border-radius: 999px;
  padding: 0 14px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.ba-camera-secondary {
  border: 1px solid var(--border, rgba(0,0,0,.10));
  background: color-mix(in srgb, var(--muted, #64748b) 8%, var(--surface, #fff));
  color: var(--text, #111827);
}

.ba-camera-primary {
  border: 1px solid var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
  box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent);
}

.ba-camera-actions button:disabled {
  opacity: .62;
  cursor: not-allowed;
}

@media (max-width: 520px) {
  .ba-media-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ba-media-button,
  .ba-camera-actions button {
    width: 100%;
  }

  .ba-camera-actions {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
  }

  .ba-camera-modal {
    border-radius: 22px;
    padding: 11px;
  }
}

/* Student Reports golden additions */

/* Extra compact report-only layout */
.student-reports-page .ba-print-card{margin-top:8px;border-radius:22px}
.student-reports-page .ba-print-head{padding:8px 10px}
.student-reports-page .ba-print-head strong{font-size:14px}
.student-reports-page .ba-print-head p{font-size:11px;margin-top:2px}
.student-reports-page .ba-print-zone{padding:8px}


.student-reports-page .ba-list {
  grid-template-columns: minmax(0, 1fr);
}

.ba-report-icon {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: color-mix(in srgb, var(--ba-primary) 11%, transparent);
  font-size: 18px;
  color: var(--ba-primary);
}

.ba-print-card {
  margin-top: 10px;
  background: var(--card-bg, var(--surface,#fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  border-radius: 24px;
  box-shadow: 0 12px 28px rgba(15,23,42,.045);
  overflow: hidden;
}

.ba-print-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid var(--border, rgba(0,0,0,.08));
  background: color-mix(in srgb, var(--muted,#64748b) 6%, transparent);
}

.ba-print-head span {
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.ba-print-head strong {
  display: block;
  margin-top: 3px;
  color: var(--text,#111827);
  font-size: 15px;
  font-weight: 1000;
  letter-spacing: -.03em;
}

.ba-print-head p {
  margin: 3px 0 0;
  color: var(--muted,#64748b);
  font-size: 11px;
  line-height: 1.4;
}

.ba-print-zone {
  padding: 10px;
  background: var(--card-bg, var(--surface,#fff));
}

.ba-report-toolbar {
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
}

.ba-report-toolbar button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 10px;
  background: color-mix(in srgb, var(--ba-primary) 10%, var(--card-bg,#fff));
  color: var(--ba-primary);
  font-size: 11px;
  font-weight: 950;
  cursor: pointer;
  white-space: nowrap;
}

.ba-report-toolbar button.primary {
  background: var(--ba-primary);
  color: #fff;
}

.ba-output-switch {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px;
  border-radius: 999px;
  background: var(--card-bg, #fff);
  border: 1px solid color-mix(in srgb, var(--ba-primary) 32%, rgba(148, 163, 184, .28));
  box-shadow: inset 0 1px 0 rgba(255,255,255,.35), 0 6px 16px rgba(15,23,42,.06);
}

.ba-output-switch button {
  min-height: 30px;
  padding: 0 12px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--ba-primary) 9%, var(--card-bg, #fff));
  color: var(--ba-primary);
  border: 1px solid color-mix(in srgb, var(--ba-primary) 22%, transparent);
  box-shadow: none;
  opacity: 1;
}

.ba-output-switch button:not(.active):hover {
  background: color-mix(in srgb, var(--ba-primary) 14%, var(--card-bg, #fff));
}

.ba-output-switch button.active {
  background: var(--ba-primary);
  color: #fff;
  border-color: var(--ba-primary);
  box-shadow: 0 6px 14px rgba(15,23,42,.14);
}

.report-analytics-card {
  grid-column: 1 / -1;
}

.report-analytics-card > div {
  margin-top: 10px;
}

@media (min-width: 680px) {
  .student-reports-page .ba-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1040px) {
  .student-reports-page .ba-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1320px) {
  .student-reports-page .ba-list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media print {
  .report-no-print,
  .ba-search-card,
  .ba-filter-chips,
  .ba-sheet-backdrop,
  .ba-modal-backdrop,
  .ba-toast,
  .ba-print-head,
  .ba-report-toolbar {
    display: none !important;
  }

  .ba-page,
  .ba-print-card,
  .ba-print-zone {
    padding: 0 !important;
    margin: 0 !important;
    background: #fff !important;
    box-shadow: none !important;
    border: 0 !important;
    border-radius: 0 !important;
    overflow: visible !important;
  }
}


/* StudentReports final golden fixes: one-row action strip, theme-safe buttons/tables, clean preview */
.student-reports-page .ba-search-card {
  grid-template-columns: minmax(0, 1fr) repeat(4, 42px) !important;
  gap: 7px;
  align-items: center;
  overflow: hidden;
}

.student-reports-page .ba-search {
  min-width: 0;
  overflow: hidden;
}

.student-reports-page .ba-icon-button,
.student-reports-page .ba-filter-button,
.student-reports-page .ba-view-button,
.student-reports-page .ba-add-inline {
  width: 42px;
  height: 42px;
  min-width: 42px;
  min-height: 42px;
  flex: 0 0 42px;
  border-color: var(--border, rgba(0,0,0,.10));
  background: var(--card-bg, var(--surface,#fff));
  color: var(--text,#111827);
}

.student-reports-page .ba-add-inline {
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
}

.student-reports-page .ba-filter-button {
  background: color-mix(in srgb, var(--ba-primary) 8%, var(--card-bg,#fff));
  color: var(--ba-primary);
}

.student-reports-page .ba-filter-button.active {
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
}

.student-reports-page .ba-view-button {
  background: color-mix(in srgb, var(--muted,#64748b) 8%, var(--card-bg,#fff));
  color: var(--text,#111827);
}

.student-reports-page .ba-icon-button:hover,
.student-reports-page .ba-view-button:hover {
  border-color: color-mix(in srgb, var(--ba-primary) 28%, var(--border,rgba(0,0,0,.10)));
  color: var(--ba-primary);
}

.student-reports-page .ba-table-scroll th {
  background: var(--table-header-bg, color-mix(in srgb, var(--ba-primary) 6%, var(--card-bg, var(--surface,#fff))));
  color: var(--table-header-text, var(--muted, var(--text,#111827)));
}

.student-reports-page .ba-table-scroll table,
.student-reports-page .ba-table-scroll td {
  background: var(--card-bg, var(--surface,#fff));
  color: var(--text,#111827);
}

.student-reports-page .ba-print-head {
  align-items: center;
}

@media (max-width: 520px) {
  .student-reports-page .ba-search-card {
    grid-template-columns: minmax(0, 1fr) repeat(4, 38px) !important;
    gap: 5px;
    padding: 6px;
  }

  .student-reports-page .ba-icon-button,
  .student-reports-page .ba-filter-button,
  .student-reports-page .ba-view-button,
  .student-reports-page .ba-add-inline {
    width: 38px;
    height: 38px;
    min-width: 38px;
    min-height: 38px;
    flex-basis: 38px;
  }

  .student-reports-page .ba-search {
    min-height: 38px;
    padding: 0 8px;
  }

  .student-reports-page .ba-search input {
    min-height: 38px;
    font-size: 13px;
  }
}



/* Cumulative Records golden compact additions */
.cumulative-page .ba-print-card{margin-top:8px;border-radius:22px}
.cumulative-page .ba-print-head{padding:8px 10px}
.cumulative-page .ba-print-head strong{font-size:14px}
.cumulative-page .ba-print-head p{font-size:11px;margin-top:2px}
.cumulative-page .ba-print-zone{padding:8px;width:100%;max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}
#cumulative-report-print-zone{width:max-content;min-width:100%}
.cumulative-toggle-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:12px}
.cumulative-toggle-grid button{min-height:36px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;padding:0 10px;background:color-mix(in srgb,var(--muted,#64748b) 8%,var(--card-bg,#fff));color:var(--text,#111827);font-size:11px;font-weight:950;cursor:pointer}
.cumulative-toggle-grid button.active{background:color-mix(in srgb,var(--ba-primary) 10%,var(--card-bg,#fff));border-color:color-mix(in srgb,var(--ba-primary) 34%,var(--border,rgba(0,0,0,.10)));color:var(--ba-primary)}
.cr-print-empty{padding:20px;border:1px dashed #bbb;border-radius:12px;text-align:center;font-weight:700}
.cr-print-summary-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-bottom:10px;font-size:10px}
.cr-print-summary-grid.six{grid-template-columns:repeat(6,minmax(0,1fr))}
.cr-print-summary-grid div{border:1px solid #ccc;padding:7px}
@media(max-width:520px){.cumulative-toggle-grid{grid-template-columns:minmax(0,1fr)}.ba-output-switch{width:100%;justify-content:center}.ba-output-switch button{flex:1}.cumulative-page .ba-report-toolbar{width:100%;justify-content:stretch}}
@media print{.report-no-print,.ba-search-card,.ba-filter-chips,.ba-sheet-backdrop,.ba-modal-backdrop,.ba-print-head,.ba-report-toolbar{display:none!important}.ba-page,.ba-print-card,.ba-print-zone,.report-screen-scroll,#cumulative-report-print-zone{padding:0!important;margin:0!important;background:#fff!important;box-shadow:none!important;border:0!important;border-radius:0!important;overflow:visible!important}}

`;var aj=r(59816);function ay(e){try{return localStorage.getItem(e)||sessionStorage.getItem(e)}catch{return null}}function aw(e){let a=ay(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}}function aN(e){return null==e?"":"object"==typeof e?String(e.id??e.localId??e.cloudId??"").trim():String(e).trim()}function ak(...e){for(let a of e){let e=aN(a);if(e&&"0"!==e)return e}return""}function a_(e,a){let r=aN(e),t=aN(a);return!!(r&&t&&r===t)}function aI(e){let a=Number(e||0);return Number.isFinite(a)?a:0}function aS(e,a=""){return String(e||"").trim()||a}function aC(e){return aS(e?.fullName||e?.name||e?.title,"Unnamed")}function a$(e,a="GHS"){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:a||"GHS",maximumFractionDigits:2}).format(aI(e))}catch{return`${a||"GHS"} ${aI(e).toLocaleString()}`}}function az(e){if(!e)return"Not set";let a=new Date(e);return Number.isNaN(a.getTime())?"Not set":new Intl.DateTimeFormat(void 0,{day:"2-digit",month:"short",year:"numeric"}).format(a)}function aA(e){return aS(e,"issued").replaceAll("_"," ").replace(/\b\w/g,e=>e.toUpperCase())}function aP(e){let a=String(e||"").toLowerCase();return["paid","success","succeeded"].includes(a)?"green":["overdue","failed","cancelled","reversed"].includes(a)?"red":["part_paid","pending","processing"].includes(a)?"orange":["issued","draft"].includes(a)?"blue":"gray"}function aM({children:e,tone:a="gray"}){return(0,t.jsx)("span",{className:`cf-chip ${a}`,children:e})}function aT(){return(0,t.jsxs)("svg",{className:"cf-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M4 7h9"}),(0,t.jsx)("path",{d:"M17 7h3"}),(0,t.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,t.jsx)("path",{d:"M4 17h3"}),(0,t.jsx)("path",{d:"M11 17h9"}),(0,t.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function aL({title:e,body:a}){return(0,t.jsxs)("section",{className:"cf-empty",children:[(0,t.jsx)("div",{children:"₵"}),(0,t.jsx)("h3",{children:e}),(0,t.jsx)("p",{children:a})]})}let aD=`
  .cf-page{--surface:var(--card-background,#fff);--border:var(--border-color,#e5e7eb);--text:var(--text-color,#111827);--muted:var(--muted-color,#6b7280);--soft:var(--soft-background,#f8fafc);min-height:100%;padding:10px 12px 34px;color:var(--text);background:var(--page-background,transparent)}
  .cf-loading,.cf-state{min-height:55vh;display:grid;place-items:center;align-content:center;gap:10px;text-align:center}.cf-spinner{width:28px;height:28px;border:3px solid var(--border);border-top-color:var(--primary);border-radius:50%;animation:cf-spin .8s linear infinite}@keyframes cf-spin{to{transform:rotate(360deg)}}.cf-state-icon{width:44px;height:44px;display:grid;place-items:center;border-radius:14px;background:color-mix(in srgb,var(--primary) 12%,var(--soft));color:var(--primary);font-weight:900;font-size:20px}.cf-state h2{margin:5px 0 0;font-size:15px}.cf-state p{margin:0;color:var(--muted);font-size:10px}
  .cf-toolbar{position:sticky;top:0;z-index:20;display:grid;grid-template-columns:minmax(0,1fr) 40px 40px;gap:7px;padding:4px 0 10px;background:var(--page-background,var(--surface))}.cf-search{height:40px;display:flex;align-items:center;gap:8px;padding:0 10px;border:1px solid var(--border);border-radius:12px;background:var(--surface)}.cf-search>span{font-size:21px;color:var(--muted)}.cf-search input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:12px}.cf-search button{border:0;background:transparent;color:var(--muted);font-size:19px}.cf-icon-btn{position:relative;display:grid;place-items:center;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font-size:21px}.cf-icon-btn.active{border-color:var(--primary);color:var(--primary)}.cf-slider-icon{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.8}.cf-badge{position:absolute;right:-4px;top:-5px;min-width:17px;height:17px;padding:0 4px;display:grid;place-items:center;border-radius:10px;background:var(--primary);color:#fff;font-size:9px;font-weight:800}
  .cf-child-strip{display:flex;gap:7px;overflow:auto;padding:1px 0 9px;scrollbar-width:none}.cf-child-strip::-webkit-scrollbar{display:none}.cf-child-strip>button{flex:0 0 auto;display:flex;align-items:center;gap:7px;padding:6px 9px 6px 6px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);text-align:left}.cf-child-strip>button.selected{border-color:var(--primary);box-shadow:0 0 0 1px color-mix(in srgb,var(--primary) 24%,transparent)}.cf-child-strip strong,.cf-child-strip small{display:block}.cf-child-strip strong{font-size:11px}.cf-child-strip small{font-size:9px;color:var(--muted);margin-top:1px}.cf-mini-avatar{width:28px;height:28px;display:grid;place-items:center;overflow:hidden;border-radius:9px;background:color-mix(in srgb,var(--primary) 13%,var(--soft));color:var(--primary);font-size:12px;font-weight:800}.cf-mini-avatar img,.cf-avatar img{width:100%;height:100%;object-fit:cover}
  .cf-child-card{display:grid;grid-template-columns:52px minmax(0,1fr) auto;align-items:center;gap:10px;padding:12px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}.cf-avatar{width:52px;height:52px;display:grid;place-items:center;overflow:hidden;border-radius:15px;background:color-mix(in srgb,var(--primary) 14%,var(--soft));color:var(--primary);font-size:20px;font-weight:900}.cf-child-copy{min-width:0}.cf-child-copy>div{display:flex;align-items:center;gap:7px}.cf-child-copy h1{margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:15px}.cf-child-copy p{margin:4px 0 0;color:var(--muted);font-size:9px}.cf-sync-dot{width:8px;height:8px;padding:0;border:0;border-radius:50%;background:#22c55e;box-shadow:0 0 0 3px color-mix(in srgb,#22c55e 15%,transparent)}.cf-balance-block{text-align:right}.cf-balance-block small,.cf-balance-block strong{display:block}.cf-balance-block small{font-size:8px;color:var(--muted)}.cf-balance-block strong{margin-top:3px;font-size:15px;color:#dc2626}
  .cf-summary-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px;margin:8px 0}.cf-summary-grid article{display:flex;align-items:center;gap:7px;min-width:0;padding:9px;border:1px solid var(--border);border-radius:13px;background:var(--surface)}.cf-summary-grid article>span{width:27px;height:27px;flex:0 0 auto;display:grid;place-items:center;border-radius:8px;font-weight:900}.cf-summary-grid strong,.cf-summary-grid small{display:block}.cf-summary-grid strong{overflow:hidden;text-overflow:ellipsis;font-size:11px}.cf-summary-grid small{margin-top:2px;color:var(--muted);font-size:8px;white-space:nowrap}.green{background:color-mix(in srgb,#22c55e 13%,var(--surface));color:#15803d}.red{background:color-mix(in srgb,#ef4444 13%,var(--surface));color:#dc2626}.orange{background:color-mix(in srgb,#f59e0b 15%,var(--surface));color:#b45309}.blue{background:color-mix(in srgb,#3b82f6 13%,var(--surface));color:#2563eb}
  .cf-tabs{display:flex;gap:4px;margin:0 0 8px;padding:3px;border:1px solid var(--border);border-radius:12px;background:var(--soft)}.cf-tabs button{flex:1;height:32px;border:0;border-radius:9px;background:transparent;color:var(--muted);font-size:10px;font-weight:800}.cf-tabs button.active{background:var(--surface);color:var(--text);box-shadow:0 1px 4px rgba(15,23,42,.08)}.cf-tabs span{display:inline-grid;place-items:center;min-width:18px;height:18px;margin-left:4px;padding:0 5px;border-radius:9px;background:var(--border);font-size:8px}
  .cf-card-grid{display:grid;gap:7px}.cf-invoice-card,.cf-payment-card{border:1px solid var(--border);border-radius:14px;background:var(--surface);cursor:pointer}.cf-invoice-card{padding:11px}.cf-card-top{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}.cf-card-top strong,.cf-card-top small{display:block}.cf-card-top strong{font-size:12px}.cf-card-top small{margin-top:3px;color:var(--muted);font-size:8px}.cf-chip{display:inline-flex;align-items:center;justify-content:center;padding:3px 7px;border-radius:999px;font-size:8px;font-weight:800;white-space:nowrap}.cf-chip.green{background:color-mix(in srgb,#22c55e 13%,var(--surface));color:#15803d}.cf-chip.red{background:color-mix(in srgb,#ef4444 13%,var(--surface));color:#dc2626}.cf-chip.orange{background:color-mix(in srgb,#f59e0b 15%,var(--surface));color:#b45309}.cf-chip.blue{background:color-mix(in srgb,#3b82f6 13%,var(--surface));color:#2563eb}.cf-chip.gray{background:var(--soft);color:var(--muted)}.cf-money-row{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:11px;padding:9px;border-radius:11px;background:var(--soft)}.cf-money-row small,.cf-money-row strong{display:block}.cf-money-row small{font-size:8px;color:var(--muted)}.cf-money-row strong{margin-top:3px;font-size:10px}.cf-money-row strong.danger{color:#dc2626}.cf-card-foot{display:flex;justify-content:space-between;gap:8px;margin-top:9px;color:var(--muted);font-size:8px}.cf-payment-card{display:flex;align-items:center;gap:10px;padding:10px}.cf-payment-icon{width:36px;height:36px;flex:0 0 auto;display:grid;place-items:center;border-radius:11px;background:color-mix(in srgb,#22c55e 13%,var(--surface));color:#15803d;font-weight:900}.cf-payment-main{flex:1;min-width:0}.cf-payment-main>div{display:flex;justify-content:space-between;align-items:center;gap:8px}.cf-payment-main>div>strong{font-size:12px}.cf-payment-main p,.cf-payment-main small{display:block;margin:0;color:var(--muted);font-size:8px}.cf-payment-main p{margin-top:4px}.cf-payment-main small{margin-top:3px}
  .cf-table-shell{overflow:hidden;border:1px solid var(--border);border-radius:14px;background:var(--surface)}.cf-table-title{padding:10px 12px;border-bottom:1px solid var(--border);font-size:11px;font-weight:800}.cf-table-scroll{overflow:auto}.cf-table-shell table{width:100%;min-width:690px;border-collapse:collapse}.cf-table-shell th,.cf-table-shell td{padding:9px 11px;border-bottom:1px solid var(--border);text-align:left;font-size:9px}.cf-table-shell th{position:sticky;top:0;background:var(--soft);color:var(--muted);font-size:8px;text-transform:uppercase;letter-spacing:.04em}.cf-table-shell tr{cursor:pointer}.cf-table-shell tbody tr:last-child td{border-bottom:0}.cf-table-shell td strong,.cf-table-shell td small{display:block}.cf-table-shell td small{margin-top:2px;color:var(--muted);font-size:8px}
  .cf-analytics{display:grid;gap:8px}.cf-analytics-card{padding:12px;border:1px solid var(--border);border-radius:15px;background:var(--surface)}.cf-overview{display:flex;align-items:center;justify-content:space-between}.cf-overview>div:first-child span,.cf-overview>div:first-child strong,.cf-overview>div:first-child small{display:block}.cf-overview>div:first-child span{font-size:9px;color:var(--muted)}.cf-overview>div:first-child strong{margin-top:2px;font-size:25px}.cf-overview>div:first-child small{font-size:8px;color:var(--muted)}.cf-donut{position:relative;width:76px;height:76px;display:grid;place-items:center;border-radius:50%;background:conic-gradient(var(--primary) var(--value),var(--border) 0)}.cf-donut:after{content:"";position:absolute;inset:8px;border-radius:50%;background:var(--surface)}.cf-donut span{position:relative;z-index:1;font-size:11px;font-weight:900}.cf-analytics-title strong,.cf-analytics-title small{display:block}.cf-analytics-title strong{font-size:12px}.cf-analytics-title small{margin-top:2px;color:var(--muted);font-size:8px}.cf-metric-list{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-top:12px}.cf-metric-list div{padding:10px;border:1px solid var(--border);border-radius:11px;background:var(--soft)}.cf-metric-list span,.cf-metric-list strong{display:block}.cf-metric-list span{font-size:8px;color:var(--muted)}.cf-metric-list strong{margin-top:3px;font-size:16px}
  .cf-empty{display:grid;justify-items:center;text-align:center;padding:44px 18px;border:1px dashed var(--border);border-radius:16px;background:var(--surface)}.cf-empty>div{width:44px;height:44px;display:grid;place-items:center;border-radius:14px;background:color-mix(in srgb,var(--primary) 12%,var(--soft));color:var(--primary);font-size:18px;font-weight:900}.cf-empty h3{margin:10px 0 3px;font-size:14px}.cf-empty p{max-width:380px;margin:0;color:var(--muted);font-size:9px;line-height:1.55}
  .cf-sheet-layer{position:fixed;inset:0;z-index:1000;display:flex;justify-content:flex-end;background:rgba(15,23,42,.38);backdrop-filter:blur(2px)}.cf-sheet{width:min(430px,94vw);height:100%;display:flex;flex-direction:column;background:var(--surface);box-shadow:-16px 0 40px rgba(0,0,0,.16)}.cf-short-sheet{height:auto;max-height:78vh;align-self:flex-end;border-radius:20px 0 0 0}.cf-sheet-head{display:flex;align-items:center;justify-content:space-between;padding:15px;border-bottom:1px solid var(--border)}.cf-sheet-head strong,.cf-sheet-head small{display:block}.cf-sheet-head strong{font-size:13px}.cf-sheet-head small{margin-top:2px;color:var(--muted);font-size:9px}.cf-sheet-head button{width:32px;height:32px;border:1px solid var(--border);border-radius:10px;background:var(--soft);color:var(--text);font-size:19px}.cf-sheet-body{flex:1;overflow:auto;display:grid;align-content:start;gap:12px;padding:15px}.cf-sheet-body label>span{display:block;margin-bottom:5px;color:var(--muted);font-size:9px;font-weight:700}.cf-sheet-body select{width:100%;height:40px;padding:0 10px;border:1px solid var(--border);border-radius:11px;outline:0;background:var(--surface);color:var(--text);font:inherit;font-size:10px}.cf-sheet-body select:focus{border-color:var(--primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 12%,transparent)}.cf-sheet-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:12px 15px;border-top:1px solid var(--border)}.cf-sheet-actions.single{grid-template-columns:1fr;margin-top:auto}.cf-sheet-actions button{height:39px;border-radius:11px;font-size:10px;font-weight:800}.cf-sheet-actions .primary{border:1px solid var(--primary);background:var(--primary);color:#fff}.cf-sheet-actions .secondary{border:1px solid var(--border);background:var(--surface);color:var(--text)}
  .cf-view-options{display:grid;gap:7px;padding:12px}.cf-view-options button{display:grid;grid-template-columns:34px minmax(0,1fr) 20px;align-items:center;gap:9px;padding:10px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);text-align:left}.cf-view-options button.selected{border-color:var(--primary);background:color-mix(in srgb,var(--primary) 6%,var(--surface))}.cf-view-options button>span{width:34px;height:34px;display:grid;place-items:center;border-radius:10px;background:var(--soft);font-size:17px}.cf-view-options strong,.cf-view-options small{display:block}.cf-view-options strong{font-size:11px}.cf-view-options small{margin-top:2px;color:var(--muted);font-size:8px}.cf-view-options b{color:var(--primary)}
  .cf-detail-summary{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;padding:15px}.cf-detail-summary div{padding:10px;border:1px solid var(--border);border-radius:11px;background:var(--soft)}.cf-detail-summary small,.cf-detail-summary strong{display:block}.cf-detail-summary small{font-size:8px;color:var(--muted)}.cf-detail-summary strong{margin-top:3px;font-size:11px}.cf-detail-list{display:grid;gap:0;padding:0 15px}.cf-detail-list>div{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)}.cf-detail-list strong,.cf-detail-list small{display:block}.cf-detail-list strong{font-size:10px}.cf-detail-list small{margin-top:2px;color:var(--muted);font-size:8px}.cf-detail-list b{font-size:10px}.cf-meta-list{display:grid;padding:10px 15px}.cf-meta-list>div{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)}.cf-meta-list>div:last-child{border-bottom:0}.cf-meta-list span{font-size:9px;color:var(--muted)}.cf-meta-list strong{font-size:10px;text-align:right}.cf-payment-detail{padding-top:15px}.cf-muted{color:var(--muted);font-size:9px}.cf-status-panel{display:flex;gap:11px;padding:16px}.cf-status-panel>span{width:14px;height:14px;flex:0 0 auto;margin-top:2px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 5px color-mix(in srgb,#22c55e 14%,transparent)}.cf-status-panel strong{font-size:11px}.cf-status-panel p{margin:5px 0 0;color:var(--muted);font-size:9px;line-height:1.55}.cf-toast{position:fixed;left:50%;bottom:20px;z-index:1200;transform:translateX(-50%);max-width:min(420px,90vw);padding:10px 13px;border-radius:11px;background:#111827;color:#fff;font-size:10px;box-shadow:0 12px 30px rgba(0,0,0,.22)}
  @media(max-width:700px){.cf-page{padding-inline:9px}.cf-summary-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.cf-child-card{grid-template-columns:48px minmax(0,1fr)}.cf-avatar{width:48px;height:48px}.cf-balance-block{grid-column:1/-1;display:flex;justify-content:space-between;align-items:center;padding-top:8px;border-top:1px solid var(--border);text-align:left}.cf-metric-list{grid-template-columns:repeat(2,1fr)}.cf-short-sheet{width:100%;border-radius:20px 20px 0 0}.cf-sheet-layer{align-items:flex-end}}
  @media(min-width:900px){.cf-page{max-width:1120px;margin:0 auto;padding-top:14px}.cf-card-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.cf-analytics{grid-template-columns:1fr 1fr}.cf-short-sheet{height:100%;max-height:none;align-self:stretch;border-radius:0}}
`;function aR(e){let a=Number(e||0);return Number.isFinite(a)?a:0}function aB(){return Date.now()}function aE(e,a=""){return String(e||"").trim()||a}function aO(e){if(!e)return"Not set";let a="number"==typeof e?e:new Date(e).getTime();if(!Number.isFinite(a))return"Not set";try{return new Intl.DateTimeFormat(void 0,{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(a))}catch{return"Not set"}}function aF(e,a,r,t){return!!e&&!e.isDeleted&&(!e.accountId||e.accountId===a)&&Number(e.schoolId)===Number(r)&&Number(e.branchId)===Number(t)}async function aU(e){let a=h.db[e];return a?.toArray?a.toArray():[]}function aV({children:e,tone:a="gray"}){return(0,t.jsx)("span",{className:`pp-chip ${a}`,children:e})}function aW({label:e,value:a,icon:r,positive:i,warning:s}){return(0,t.jsxs)("article",{className:`pp-summary ${i?"positive":""} ${s?"warning":""}`,children:[(0,t.jsx)("div",{children:r}),(0,t.jsxs)("section",{children:[(0,t.jsx)("strong",{children:a}),(0,t.jsx)("span",{children:e})]})]})}function aK({title:e="No records",text:a}){return(0,t.jsxs)("section",{className:"pp-empty",children:[(0,t.jsx)("div",{children:"\uD83D\uDCCC"}),(0,t.jsx)("h3",{children:e}),(0,t.jsx)("p",{children:a})]})}function aG({view:e,setView:a,count:r}){return(0,t.jsxs)("section",{className:"pp-toolbar",children:[(0,t.jsxs)("div",{className:"pp-tabs",children:[(0,t.jsx)("button",{type:"button",className:"cards"===e?"active":"",onClick:()=>a("cards"),children:"Cards"}),(0,t.jsx)("button",{type:"button",className:"table"===e?"active":"",onClick:()=>a("table"),children:"Table"}),(0,t.jsx)("button",{type:"button",className:"analytics"===e?"active":"",onClick:()=>a("analytics"),children:"Analytics"})]}),(0,t.jsxs)(aV,{children:[r," shown"]})]})}let aH=`
.pp-page {
  min-height: 100dvh;
  width: 100%;
  min-width: 0;
  padding: calc(8px * var(--local-density-scale, 1));
  padding-bottom: max(32px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--pp-primary) 10%, transparent), transparent 34rem),
    var(--bg, #f7f8fb);
  color: var(--text, #111);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--font-size, 14px);
  overflow-x: hidden;
}
.pp-page * { box-sizing: border-box; }
.pp-page button, .pp-page input, .pp-page select, .pp-page textarea { font: inherit; max-width: 100%; }
.pp-page input, .pp-page select, .pp-page textarea {
  width: 100%;
  min-height: 44px;
  border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10)));
  border-radius: 16px;
  padding: 0 12px;
  background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #111));
  outline: none;
  font-weight: 750;
}
.pp-page textarea { min-height: 120px; padding: 12px; resize: vertical; line-height: 1.55; }
.pp-state {
  min-height: min(420px, calc(100dvh - 32px));
  width: min(480px, 100%);
  margin: 0 auto;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  padding: 22px;
  border-radius: 28px;
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: var(--shell-shadow, 0 24px 60px rgba(15,23,42,.08));
  text-align: center;
}
.pp-state h2 { margin: 0; font-size: 22px; letter-spacing: -.04em; font-weight: 1000; }
.pp-state p { margin: 0; color: var(--muted, #64748b); line-height: 1.6; }
.pp-hero {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 10px;
  padding: 12px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 18% 8%, color-mix(in srgb, var(--pp-primary) 16%, transparent), transparent 20rem),
    linear-gradient(135deg, var(--card-bg, var(--surface, #fff)), color-mix(in srgb, var(--pp-primary) 7%, var(--card-bg, #fff)) 72%);
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 18px 46px rgba(15,23,42,.07);
  overflow: hidden;
}
.pp-hero-left { min-width: 0; display: flex; align-items: center; gap: 10px; flex: 1; }
.pp-icon {
  width: 48px; height: 48px; flex: 0 0 auto; display: grid; place-items: center;
  border-radius: 18px; background: var(--pp-primary); color: #fff; font-size: 22px;
  box-shadow: 0 12px 26px color-mix(in srgb, var(--pp-primary) 28%, transparent);
}
.pp-title { min-width: 0; }
.pp-title p, .pp-title h2, .pp-title span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-title p { margin: 0 0 2px; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-title h2 { margin: 0; color: var(--text, #111); font-size: clamp(20px, 5vw, 30px); font-weight: 1000; letter-spacing: -.06em; line-height: 1; }
.pp-title span { margin-top: 3px; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; }
.pp-btn, .pp-primary {
  min-height: 42px; border-radius: 999px; padding: 0 14px; font-weight: 950; cursor: pointer;
}
.pp-btn { border: 1px solid var(--border, rgba(0,0,0,.10)); background: var(--surface, #fff); color: var(--text, #111); }
.pp-primary { border: 0; background: var(--pp-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--pp-primary) 25%, transparent); }
.pp-summary-grid, .pp-list, .pp-mini-grid, .pp-breakdown-grid { display: grid; gap: 8px; }
.pp-summary-grid { margin-top: 10px; grid-template-columns: repeat(2, minmax(0,1fr)); }
.pp-summary, .pp-card, .pp-panel, .pp-toolbar, .pp-filter, .pp-empty, .pp-breakdown {
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 12px 28px rgba(15,23,42,.045);
}
.pp-summary { min-width: 0; display: flex; align-items: center; gap: 10px; padding: 12px; border-radius: 22px; overflow: hidden; }
.pp-summary.positive { background: linear-gradient(135deg, rgba(34,197,94,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary.warning { background: linear-gradient(135deg, rgba(245,158,11,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary > div:first-child {
  width: 36px; height: 36px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 15px;
  background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff));
}
.pp-summary section { min-width: 0; }
.pp-summary strong, .pp-summary span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-summary strong { font-size: 18px; font-weight: 1000; letter-spacing: -.05em; color: var(--text, #111); }
.pp-summary span { margin-top: 2px; color: var(--muted, #64748b); font-size: 11px; font-weight: 850; }
.pp-toolbar, .pp-filter, .pp-panel { margin-top: 10px; padding: 10px; border-radius: 24px; }
.pp-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.pp-tabs {
  display: inline-grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 4px; width: min(390px, 100%);
  padding: 4px; border-radius: 999px; background: var(--shell-section-bg, color-mix(in srgb, var(--pp-primary) 7%, var(--surface, #fff)));
  border: 1px solid var(--border, rgba(0,0,0,.08));
}
.pp-tabs button { min-width: 0; min-height: 35px; border: 0; border-radius: 999px; padding: 0 9px; background: transparent; color: var(--muted, #64748b); font-size: 12px; font-weight: 950; cursor: pointer; }
.pp-tabs button.active { background: var(--pp-primary); color: #fff; }
.pp-filter { display: grid; grid-template-columns: minmax(0,1fr); gap: 8px; }
.pp-section { margin-top: 16px; }
.pp-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 10px; }
.pp-head p { margin: 0; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-head h3 { margin: 2px 0 0; color: var(--text, #111); font-size: 19px; font-weight: 1000; letter-spacing: -.04em; }
.pp-list { margin-top: 10px; }
.pp-card, .pp-breakdown, .pp-empty { min-width: 0; border-radius: 24px; padding: 13px; overflow: hidden; }
.pp-card-top { display: flex; align-items: flex-start; gap: 10px; }
.pp-avatar {
  width: 56px; height: 56px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 19px;
  background: var(--pp-primary); color: #fff; font-size: 22px; box-shadow: 0 12px 24px rgba(15,23,42,.12);
}
.pp-card-main { min-width: 0; flex: 1; }
.pp-card-main h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; letter-spacing: -.04em; }
.pp-card-main p { margin: 4px 0 0; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; line-height: 1.4; }
.pp-chip-row { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; margin-top: 10px; }
.pp-chip {
  max-width: 100%; display: inline-flex; align-items: center; min-height: 25px; padding: 4px 9px; border-radius: 999px;
  font-size: 11px; font-weight: 950; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize;
}
.pp-chip.green { background: rgba(34,197,94,.14); color: #22c55e; }
.pp-chip.red { background: rgba(239,68,68,.14); color: #ef4444; }
.pp-chip.blue { background: rgba(59,130,246,.15); color: #60a5fa; }
.pp-chip.gray { background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); color: var(--muted, #64748b); }
.pp-chip.orange { background: rgba(245,158,11,.16); color: #f59e0b; }
.pp-chip.purple { background: rgba(147,51,234,.15); color: #a855f7; }
.pp-mini-grid { grid-template-columns: repeat(2, minmax(0,1fr)); margin-top: 10px; }
.pp-mini {
  min-width: 0; padding: 9px; border-radius: 17px; background: color-mix(in srgb, var(--muted, #64748b) 9%, transparent);
  border: 1px solid var(--border, rgba(0,0,0,.08)); overflow: hidden;
}
.pp-mini strong, .pp-mini span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-mini strong { color: var(--text, #111); font-size: 13px; font-weight: 1000; }
.pp-mini span { margin-top: 2px; color: var(--muted, #64748b); font-size: 10px; font-weight: 850; }
.pp-table-wrap { width: 100%; overflow-x: auto; border-radius: 18px; border: 1px solid var(--border, rgba(0,0,0,.08)); }
.pp-table { width: 100%; min-width: 980px; border-collapse: collapse; background: var(--card-bg, var(--surface, #fff)); }
.pp-table th, .pp-table td { padding: 10px; border-bottom: 1px solid var(--border, rgba(0,0,0,.08)); text-align: left; vertical-align: top; color: var(--text, #111); font-size: 13px; }
.pp-table th { color: var(--muted, #64748b); font-size: 11px; font-weight: 1000; text-transform: uppercase; letter-spacing: .07em; background: color-mix(in srgb, var(--pp-primary) 6%, var(--card-bg, #fff)); }
.pp-empty { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 190px; text-align: center; border-style: dashed; }
.pp-empty div { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 22px; background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff)); font-size: 28px; }
.pp-empty h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; }
.pp-empty p { margin: 0; color: var(--muted, #64748b); font-size: 13px; line-height: 1.6; }
.pp-message { margin: 10px 0; padding: 12px; border-radius: 18px; background: rgba(245,158,11,.14); color: #f59e0b; font-size: 13px; font-weight: 900; }
.pp-drawer-layer { position: fixed; inset: 0; z-index: 80; }
.pp-drawer-overlay { position: absolute; inset: 0; border: 0; background: rgba(15,23,42,.52); }
.pp-drawer {
  position: absolute; right: 0; top: 0; bottom: 0; width: min(94vw, 720px); max-width: 100vw; overflow-y: auto; overflow-x: hidden;
  background: var(--bg, #f7f8fb); color: var(--text, #111); padding: 14px; box-shadow: var(--shell-shadow, -24px 0 70px rgba(15,23,42,.22));
}
.pp-drawer-head { position: sticky; top: 0; z-index: 2; display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; padding: 6px 0 12px; background: var(--bg, #f7f8fb); }
.pp-drawer-head p { margin: 0; color: var(--pp-primary); font-size: 11px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-drawer-head h2 { margin: 2px 0 0; color: var(--text, #111); font-size: 22px; font-weight: 1000; letter-spacing: -.05em; }
.pp-drawer-head span { margin-top: 3px; display: block; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-drawer-head button { width: 38px; height: 38px; flex: 0 0 auto; border: 1px solid var(--border, rgba(0,0,0,.10)); border-radius: 15px; background: var(--surface, #fff); color: var(--text, #111); font-weight: 1000; cursor: pointer; }
.pp-form-card { margin-top: 10px; padding: 12px; border-radius: 22px; background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); }
.pp-form-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 9px; }
.pp-form-grid label { min-width: 0; display: grid; gap: 6px; }
.pp-form-grid label span { color: var(--muted, #64748b); font-size: 11px; font-weight: 950; letter-spacing: .06em; text-transform: uppercase; }
.pp-form-grid .wide { grid-column: 1 / -1; }
.pp-drawer-actions { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px; margin-top: 12px; }
.pp-bar { height: 8px; margin-top: 12px; border-radius: 999px; background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); overflow: hidden; }
.pp-bar div { height: 100%; background: var(--pp-primary); border-radius: inherit; }
@media (min-width: 680px) {
  .pp-page { padding: calc(12px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-filter { grid-template-columns: minmax(0,1fr) 190px 150px; }
  .pp-mini-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-form-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (min-width: 1040px) {
  .pp-page { padding: calc(16px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(6, minmax(0,1fr)); }
  .pp-list, .pp-breakdown-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (max-width: 520px) {
  .pp-page { padding: calc(6px * var(--local-density-scale, 1)); }
  .pp-hero { flex-direction: column; border-radius: 22px; padding: 10px; }
  .pp-actions { display: grid; grid-template-columns: minmax(0,1fr); }
  .pp-btn, .pp-primary { width: 100%; }
  .pp-summary-grid { gap: 6px; }
  .pp-summary { padding: 10px; border-radius: 19px; }
  .pp-toolbar { align-items: stretch; flex-direction: column; border-radius: 20px; }
  .pp-tabs { width: 100%; }
  .pp-card, .pp-empty, .pp-breakdown { border-radius: 20px; padding: 11px; }
  .pp-avatar { width: 52px; height: 52px; flex-basis: 52px; }
  .pp-mini-grid { grid-template-columns: repeat(1, minmax(0,1fr)); }
  .pp-drawer-actions { grid-template-columns: minmax(0,1fr); }
  .pp-drawer { width: min(96vw, 720px); padding: 12px; }
}
`;async function aY(e,a,r){let[t,i,s,n,o]=await Promise.all([aU("parents"),aU("students"),aU("studentParents"),aU("userMemberships").then(async e=>e.length?e:aU("memberships")),aU("users").then(async e=>e.length?e:aU("accountUsers"))]),d=String(localStorage.getItem("email")||localStorage.getItem("userEmail")||"").toLowerCase(),l=n.find(t=>"parent"===t.role&&aF(t,e,Number(a),Number(r))),p=o.find(e=>String(e?.id||e?.localId||"")===String(l?.userLocalId||l?.userId||l?.accountUserId||"")||!!(d&&String(e.email||"").toLowerCase()===d)),c=t.find(t=>aF(t,e,Number(a),Number(r))&&(Number(t.id)===Number(l?.parentLocalId)||!!(p?.email&&t.email&&String(t.email).toLowerCase()===String(p.email).toLowerCase())||!!(d&&t.email&&String(t.email).toLowerCase()===d)))||null,m=new Set;s.forEach(e=>{c?.id&&Number(e.parentId||e.parentLocalId)===Number(c.id)&&m.add(Number(e.studentId||e.studentLocalId))}),l?.studentLocalId&&m.add(Number(l.studentLocalId));let h=i.filter(t=>aF(t,e,Number(a),Number(r))&&(m.has(Number(t.id))||!!(c?.email&&String(t.parentEmail||"").toLowerCase()===String(c.email).toLowerCase())||!!(c?.phone&&String(t.parentPhone||"")===String(c.phone))));return{parent:c,children:h,user:p}}var aJ=r(21092);function aq(e){let a=Number(e||0);return Number.isFinite(a)?a:0}function aZ(e){if(!e)return"Not set";let a="number"==typeof e?e:new Date(e).getTime();if(!Number.isFinite(a))return"Not set";try{return new Intl.DateTimeFormat(void 0,{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(a))}catch{return"Not set"}}function aX(e,a,r,t){return!!e&&!e.isDeleted&&(!e.accountId||e.accountId===a)&&Number(e.schoolId)===Number(r)&&Number(e.branchId)===Number(t)}function aQ(e){return function(e,a=""){return String(e||"").trim()||a}(e?.fullName||e?.name||e?.title||e?.label||e?.email,"Unnamed")}async function a0(e){let a=h.db[e];return a?.toArray?a.toArray():[]}function a1({children:e,tone:a="gray"}){return(0,t.jsx)("span",{className:`pp-chip ${a}`,children:e})}function a2({label:e,value:a,icon:r,positive:i,warning:s}){return(0,t.jsxs)("article",{className:`pp-summary ${i?"positive":""} ${s?"warning":""}`,children:[(0,t.jsx)("div",{children:r}),(0,t.jsxs)("section",{children:[(0,t.jsx)("strong",{children:a}),(0,t.jsx)("span",{children:e})]})]})}function a4({title:e="No records",text:a}){return(0,t.jsxs)("section",{className:"pp-empty",children:[(0,t.jsx)("div",{children:"\uD83D\uDCCC"}),(0,t.jsx)("h3",{children:e}),(0,t.jsx)("p",{children:a})]})}function a8({view:e,setView:a,count:r}){return(0,t.jsxs)("section",{className:"pp-toolbar",children:[(0,t.jsxs)("div",{className:"pp-tabs",children:[(0,t.jsx)("button",{type:"button",className:"cards"===e?"active":"",onClick:()=>a("cards"),children:"Cards"}),(0,t.jsx)("button",{type:"button",className:"table"===e?"active":"",onClick:()=>a("table"),children:"Table"}),(0,t.jsx)("button",{type:"button",className:"analytics"===e?"active":"",onClick:()=>a("analytics"),children:"Analytics"})]}),(0,t.jsxs)(a1,{children:[r," shown"]})]})}let a5=`
.pp-page {
  min-height: 100dvh;
  width: 100%;
  min-width: 0;
  padding: calc(8px * var(--local-density-scale, 1));
  padding-bottom: max(32px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--pp-primary) 10%, transparent), transparent 34rem),
    var(--bg, #f7f8fb);
  color: var(--text, #111);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--font-size, 14px);
  overflow-x: hidden;
}
.pp-page * { box-sizing: border-box; }
.pp-page button, .pp-page input, .pp-page select, .pp-page textarea { font: inherit; max-width: 100%; }
.pp-page input, .pp-page select, .pp-page textarea {
  width: 100%;
  min-height: 44px;
  border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10)));
  border-radius: 16px;
  padding: 0 12px;
  background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #111));
  outline: none;
  font-weight: 750;
}
.pp-page textarea { min-height: 120px; padding: 12px; resize: vertical; line-height: 1.55; }
.pp-state {
  min-height: min(420px, calc(100dvh - 32px));
  width: min(480px, 100%);
  margin: 0 auto;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  padding: 22px;
  border-radius: 28px;
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: var(--shell-shadow, 0 24px 60px rgba(15,23,42,.08));
  text-align: center;
}
.pp-state h2 { margin: 0; font-size: 22px; letter-spacing: -.04em; font-weight: 1000; }
.pp-state p { margin: 0; color: var(--muted, #64748b); line-height: 1.6; }
.pp-hero {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 10px;
  padding: 12px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 18% 8%, color-mix(in srgb, var(--pp-primary) 16%, transparent), transparent 20rem),
    linear-gradient(135deg, var(--card-bg, var(--surface, #fff)), color-mix(in srgb, var(--pp-primary) 7%, var(--card-bg, #fff)) 72%);
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 18px 46px rgba(15,23,42,.07);
  overflow: hidden;
}
.pp-hero-left { min-width: 0; display: flex; align-items: center; gap: 10px; flex: 1; }
.pp-icon {
  width: 48px; height: 48px; flex: 0 0 auto; display: grid; place-items: center;
  border-radius: 18px; background: var(--pp-primary); color: #fff; font-size: 22px;
  box-shadow: 0 12px 26px color-mix(in srgb, var(--pp-primary) 28%, transparent);
}
.pp-title { min-width: 0; }
.pp-title p, .pp-title h2, .pp-title span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-title p { margin: 0 0 2px; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-title h2 { margin: 0; color: var(--text, #111); font-size: clamp(20px, 5vw, 30px); font-weight: 1000; letter-spacing: -.06em; line-height: 1; }
.pp-title span { margin-top: 3px; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; }
.pp-btn, .pp-primary {
  min-height: 42px; border-radius: 999px; padding: 0 14px; font-weight: 950; cursor: pointer;
}
.pp-btn { border: 1px solid var(--border, rgba(0,0,0,.10)); background: var(--surface, #fff); color: var(--text, #111); }
.pp-primary { border: 0; background: var(--pp-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--pp-primary) 25%, transparent); }
.pp-summary-grid, .pp-list, .pp-mini-grid, .pp-breakdown-grid { display: grid; gap: 8px; }
.pp-summary-grid { margin-top: 10px; grid-template-columns: repeat(2, minmax(0,1fr)); }
.pp-summary, .pp-card, .pp-panel, .pp-toolbar, .pp-filter, .pp-empty, .pp-breakdown {
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 12px 28px rgba(15,23,42,.045);
}
.pp-summary { min-width: 0; display: flex; align-items: center; gap: 10px; padding: 12px; border-radius: 22px; overflow: hidden; }
.pp-summary.positive { background: linear-gradient(135deg, rgba(34,197,94,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary.warning { background: linear-gradient(135deg, rgba(245,158,11,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary > div:first-child {
  width: 36px; height: 36px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 15px;
  background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff));
}
.pp-summary section { min-width: 0; }
.pp-summary strong, .pp-summary span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-summary strong { font-size: 18px; font-weight: 1000; letter-spacing: -.05em; color: var(--text, #111); }
.pp-summary span { margin-top: 2px; color: var(--muted, #64748b); font-size: 11px; font-weight: 850; }
.pp-toolbar, .pp-filter, .pp-panel { margin-top: 10px; padding: 10px; border-radius: 24px; }
.pp-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.pp-tabs {
  display: inline-grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 4px; width: min(390px, 100%);
  padding: 4px; border-radius: 999px; background: var(--shell-section-bg, color-mix(in srgb, var(--pp-primary) 7%, var(--surface, #fff)));
  border: 1px solid var(--border, rgba(0,0,0,.08));
}
.pp-tabs button { min-width: 0; min-height: 35px; border: 0; border-radius: 999px; padding: 0 9px; background: transparent; color: var(--muted, #64748b); font-size: 12px; font-weight: 950; cursor: pointer; }
.pp-tabs button.active { background: var(--pp-primary); color: #fff; }
.pp-filter { display: grid; grid-template-columns: minmax(0,1fr); gap: 8px; }
.pp-section { margin-top: 16px; }
.pp-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 10px; }
.pp-head p { margin: 0; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-head h3 { margin: 2px 0 0; color: var(--text, #111); font-size: 19px; font-weight: 1000; letter-spacing: -.04em; }
.pp-list { margin-top: 10px; }
.pp-card, .pp-breakdown, .pp-empty { min-width: 0; border-radius: 24px; padding: 13px; overflow: hidden; }
.pp-card-top { display: flex; align-items: flex-start; gap: 10px; }
.pp-avatar {
  width: 56px; height: 56px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 19px;
  background: var(--pp-primary); color: #fff; font-size: 22px; box-shadow: 0 12px 24px rgba(15,23,42,.12);
}
.pp-card-main { min-width: 0; flex: 1; }
.pp-card-main h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; letter-spacing: -.04em; }
.pp-card-main p { margin: 4px 0 0; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; line-height: 1.4; }
.pp-chip-row { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; margin-top: 10px; }
.pp-chip {
  max-width: 100%; display: inline-flex; align-items: center; min-height: 25px; padding: 4px 9px; border-radius: 999px;
  font-size: 11px; font-weight: 950; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize;
}
.pp-chip.green { background: rgba(34,197,94,.14); color: #22c55e; }
.pp-chip.red { background: rgba(239,68,68,.14); color: #ef4444; }
.pp-chip.blue { background: rgba(59,130,246,.15); color: #60a5fa; }
.pp-chip.gray { background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); color: var(--muted, #64748b); }
.pp-chip.orange { background: rgba(245,158,11,.16); color: #f59e0b; }
.pp-chip.purple { background: rgba(147,51,234,.15); color: #a855f7; }
.pp-mini-grid { grid-template-columns: repeat(2, minmax(0,1fr)); margin-top: 10px; }
.pp-mini {
  min-width: 0; padding: 9px; border-radius: 17px; background: color-mix(in srgb, var(--muted, #64748b) 9%, transparent);
  border: 1px solid var(--border, rgba(0,0,0,.08)); overflow: hidden;
}
.pp-mini strong, .pp-mini span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-mini strong { color: var(--text, #111); font-size: 13px; font-weight: 1000; }
.pp-mini span { margin-top: 2px; color: var(--muted, #64748b); font-size: 10px; font-weight: 850; }
.pp-table-wrap { width: 100%; overflow-x: auto; border-radius: 18px; border: 1px solid var(--border, rgba(0,0,0,.08)); }
.pp-table { width: 100%; min-width: 980px; border-collapse: collapse; background: var(--card-bg, var(--surface, #fff)); }
.pp-table th, .pp-table td { padding: 10px; border-bottom: 1px solid var(--border, rgba(0,0,0,.08)); text-align: left; vertical-align: top; color: var(--text, #111); font-size: 13px; }
.pp-table th { color: var(--muted, #64748b); font-size: 11px; font-weight: 1000; text-transform: uppercase; letter-spacing: .07em; background: color-mix(in srgb, var(--pp-primary) 6%, var(--card-bg, #fff)); }
.pp-empty { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 190px; text-align: center; border-style: dashed; }
.pp-empty div { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 22px; background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff)); font-size: 28px; }
.pp-empty h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; }
.pp-empty p { margin: 0; color: var(--muted, #64748b); font-size: 13px; line-height: 1.6; }
.pp-message { margin: 10px 0; padding: 12px; border-radius: 18px; background: rgba(245,158,11,.14); color: #f59e0b; font-size: 13px; font-weight: 900; }
.pp-drawer-layer { position: fixed; inset: 0; z-index: 80; }
.pp-drawer-overlay { position: absolute; inset: 0; border: 0; background: rgba(15,23,42,.52); }
.pp-drawer {
  position: absolute; right: 0; top: 0; bottom: 0; width: min(94vw, 720px); max-width: 100vw; overflow-y: auto; overflow-x: hidden;
  background: var(--bg, #f7f8fb); color: var(--text, #111); padding: 14px; box-shadow: var(--shell-shadow, -24px 0 70px rgba(15,23,42,.22));
}
.pp-drawer-head { position: sticky; top: 0; z-index: 2; display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; padding: 6px 0 12px; background: var(--bg, #f7f8fb); }
.pp-drawer-head p { margin: 0; color: var(--pp-primary); font-size: 11px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-drawer-head h2 { margin: 2px 0 0; color: var(--text, #111); font-size: 22px; font-weight: 1000; letter-spacing: -.05em; }
.pp-drawer-head span { margin-top: 3px; display: block; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-drawer-head button { width: 38px; height: 38px; flex: 0 0 auto; border: 1px solid var(--border, rgba(0,0,0,.10)); border-radius: 15px; background: var(--surface, #fff); color: var(--text, #111); font-weight: 1000; cursor: pointer; }
.pp-form-card { margin-top: 10px; padding: 12px; border-radius: 22px; background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); }
.pp-form-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 9px; }
.pp-form-grid label { min-width: 0; display: grid; gap: 6px; }
.pp-form-grid label span { color: var(--muted, #64748b); font-size: 11px; font-weight: 950; letter-spacing: .06em; text-transform: uppercase; }
.pp-form-grid .wide { grid-column: 1 / -1; }
.pp-drawer-actions { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px; margin-top: 12px; }
.pp-bar { height: 8px; margin-top: 12px; border-radius: 999px; background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); overflow: hidden; }
.pp-bar div { height: 100%; background: var(--pp-primary); border-radius: inherit; }
@media (min-width: 680px) {
  .pp-page { padding: calc(12px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-filter { grid-template-columns: minmax(0,1fr) 190px 150px; }
  .pp-mini-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-form-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (min-width: 1040px) {
  .pp-page { padding: calc(16px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(6, minmax(0,1fr)); }
  .pp-list, .pp-breakdown-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (max-width: 520px) {
  .pp-page { padding: calc(6px * var(--local-density-scale, 1)); }
  .pp-hero { flex-direction: column; border-radius: 22px; padding: 10px; }
  .pp-actions { display: grid; grid-template-columns: minmax(0,1fr); }
  .pp-btn, .pp-primary { width: 100%; }
  .pp-summary-grid { gap: 6px; }
  .pp-summary { padding: 10px; border-radius: 19px; }
  .pp-toolbar { align-items: stretch; flex-direction: column; border-radius: 20px; }
  .pp-tabs { width: 100%; }
  .pp-card, .pp-empty, .pp-breakdown { border-radius: 20px; padding: 11px; }
  .pp-avatar { width: 52px; height: 52px; flex-basis: 52px; }
  .pp-mini-grid { grid-template-columns: repeat(1, minmax(0,1fr)); }
  .pp-drawer-actions { grid-template-columns: minmax(0,1fr); }
  .pp-drawer { width: min(96vw, 720px); padding: 12px; }
}
`;async function a9(e,a,r){let[t,i,s,n,o]=await Promise.all([a0("parents"),a0("students"),a0("studentParents"),a0("userMemberships").then(async e=>e.length?e:a0("memberships")),a0("users").then(async e=>e.length?e:a0("accountUsers"))]),d=String(localStorage.getItem("email")||localStorage.getItem("userEmail")||"").toLowerCase(),l=n.find(t=>"parent"===t.role&&aX(t,e,Number(a),Number(r))),p=o.find(e=>String(e?.id||e?.localId||"")===String(l?.userLocalId||l?.userId||l?.accountUserId||"")||!!(d&&String(e.email||"").toLowerCase()===d)),c=t.find(t=>aX(t,e,Number(a),Number(r))&&(Number(t.id)===Number(l?.parentLocalId)||!!(p?.email&&t.email&&String(t.email).toLowerCase()===String(p.email).toLowerCase())||!!(d&&t.email&&String(t.email).toLowerCase()===d)))||null,m=new Set;s.forEach(e=>{c?.id&&Number(e.parentId||e.parentLocalId)===Number(c.id)&&m.add(Number(e.studentId||e.studentLocalId))}),l?.studentLocalId&&m.add(Number(l.studentLocalId));let h=i.filter(t=>aX(t,e,Number(a),Number(r))&&(m.has(Number(t.id))||!!(c?.email&&String(t.parentEmail||"").toLowerCase()===String(c.email).toLowerCase())||!!(c?.phone&&String(t.parentPhone||"")===String(c.phone))));return{parent:c,children:h,user:p}}var a3=r(94862);function a6(e){let a=Number(e||0);return Number.isFinite(a)?a:0}function a7(e,a,r,t){return!!e&&!e.isDeleted&&(!e.accountId||e.accountId===a)&&String(e.schoolId)===String(r)&&String(e.branchId)===String(t)}function re(e){return function(e,a=""){return String(e||"").trim()||a}(e?.fullName||e?.name||e?.title||e?.label||e?.email,"Unnamed")}async function ra(e){let a=h.db[e];return a?.toArray?a.toArray():[]}function rr({children:e,tone:a="gray"}){return(0,t.jsx)("span",{className:`pp-chip ${a}`,children:e})}function rt({label:e,value:a,icon:r,positive:i,warning:s}){return(0,t.jsxs)("article",{className:`pp-summary ${i?"positive":""} ${s?"warning":""}`,children:[(0,t.jsx)("div",{children:r}),(0,t.jsxs)("section",{children:[(0,t.jsx)("strong",{children:a}),(0,t.jsx)("span",{children:e})]})]})}function ri({label:e,value:a}){return(0,t.jsxs)("div",{className:"pp-mini",children:[(0,t.jsx)("strong",{children:a}),(0,t.jsx)("span",{children:e})]})}function rs({title:e="No records",text:a}){return(0,t.jsxs)("section",{className:"pp-empty",children:[(0,t.jsx)("div",{children:"\uD83D\uDCCC"}),(0,t.jsx)("h3",{children:e}),(0,t.jsx)("p",{children:a})]})}function rn({view:e,setView:a,count:r}){return(0,t.jsxs)("section",{className:"pp-toolbar",children:[(0,t.jsxs)("div",{className:"pp-tabs",children:[(0,t.jsx)("button",{type:"button",className:"cards"===e?"active":"",onClick:()=>a("cards"),children:"Cards"}),(0,t.jsx)("button",{type:"button",className:"table"===e?"active":"",onClick:()=>a("table"),children:"Table"}),(0,t.jsx)("button",{type:"button",className:"analytics"===e?"active":"",onClick:()=>a("analytics"),children:"Analytics"})]}),(0,t.jsxs)(rr,{children:[r," shown"]})]})}let ro=`
.pp-page {
  min-height: 100dvh;
  width: 100%;
  min-width: 0;
  padding: calc(8px * var(--local-density-scale, 1));
  padding-bottom: max(32px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--pp-primary) 10%, transparent), transparent 34rem),
    var(--bg, #f7f8fb);
  color: var(--text, #111);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--font-size, 14px);
  overflow-x: hidden;
}
.pp-page * { box-sizing: border-box; }
.pp-page button, .pp-page input, .pp-page select, .pp-page textarea { font: inherit; max-width: 100%; }
.pp-page input, .pp-page select, .pp-page textarea {
  width: 100%;
  min-height: 44px;
  border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10)));
  border-radius: 16px;
  padding: 0 12px;
  background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #111));
  outline: none;
  font-weight: 750;
}
.pp-page textarea { min-height: 120px; padding: 12px; resize: vertical; line-height: 1.55; }
.pp-state {
  min-height: min(420px, calc(100dvh - 32px));
  width: min(480px, 100%);
  margin: 0 auto;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  padding: 22px;
  border-radius: 28px;
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: var(--shell-shadow, 0 24px 60px rgba(15,23,42,.08));
  text-align: center;
}
.pp-state h2 { margin: 0; font-size: 22px; letter-spacing: -.04em; font-weight: 1000; }
.pp-state p { margin: 0; color: var(--muted, #64748b); line-height: 1.6; }
.pp-hero {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 10px;
  padding: 12px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 18% 8%, color-mix(in srgb, var(--pp-primary) 16%, transparent), transparent 20rem),
    linear-gradient(135deg, var(--card-bg, var(--surface, #fff)), color-mix(in srgb, var(--pp-primary) 7%, var(--card-bg, #fff)) 72%);
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 18px 46px rgba(15,23,42,.07);
  overflow: hidden;
}
.pp-hero-left { min-width: 0; display: flex; align-items: center; gap: 10px; flex: 1; }
.pp-icon {
  width: 48px; height: 48px; flex: 0 0 auto; display: grid; place-items: center;
  border-radius: 18px; background: var(--pp-primary); color: #fff; font-size: 22px;
  box-shadow: 0 12px 26px color-mix(in srgb, var(--pp-primary) 28%, transparent);
}
.pp-title { min-width: 0; }
.pp-title p, .pp-title h2, .pp-title span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-title p { margin: 0 0 2px; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-title h2 { margin: 0; color: var(--text, #111); font-size: clamp(20px, 5vw, 30px); font-weight: 1000; letter-spacing: -.06em; line-height: 1; }
.pp-title span { margin-top: 3px; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; }
.pp-btn, .pp-primary {
  min-height: 42px; border-radius: 999px; padding: 0 14px; font-weight: 950; cursor: pointer;
}
.pp-btn { border: 1px solid var(--border, rgba(0,0,0,.10)); background: var(--surface, #fff); color: var(--text, #111); }
.pp-primary { border: 0; background: var(--pp-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--pp-primary) 25%, transparent); }
.pp-summary-grid, .pp-list, .pp-mini-grid, .pp-breakdown-grid { display: grid; gap: 8px; }
.pp-summary-grid { margin-top: 10px; grid-template-columns: repeat(2, minmax(0,1fr)); }
.pp-summary, .pp-card, .pp-panel, .pp-toolbar, .pp-filter, .pp-empty, .pp-breakdown {
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 12px 28px rgba(15,23,42,.045);
}
.pp-summary { min-width: 0; display: flex; align-items: center; gap: 10px; padding: 12px; border-radius: 22px; overflow: hidden; }
.pp-summary.positive { background: linear-gradient(135deg, rgba(34,197,94,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary.warning { background: linear-gradient(135deg, rgba(245,158,11,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary > div:first-child {
  width: 36px; height: 36px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 15px;
  background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff));
}
.pp-summary section { min-width: 0; }
.pp-summary strong, .pp-summary span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-summary strong { font-size: 18px; font-weight: 1000; letter-spacing: -.05em; color: var(--text, #111); }
.pp-summary span { margin-top: 2px; color: var(--muted, #64748b); font-size: 11px; font-weight: 850; }
.pp-toolbar, .pp-filter, .pp-panel { margin-top: 10px; padding: 10px; border-radius: 24px; }
.pp-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.pp-tabs {
  display: inline-grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 4px; width: min(390px, 100%);
  padding: 4px; border-radius: 999px; background: var(--shell-section-bg, color-mix(in srgb, var(--pp-primary) 7%, var(--surface, #fff)));
  border: 1px solid var(--border, rgba(0,0,0,.08));
}
.pp-tabs button { min-width: 0; min-height: 35px; border: 0; border-radius: 999px; padding: 0 9px; background: transparent; color: var(--muted, #64748b); font-size: 12px; font-weight: 950; cursor: pointer; }
.pp-tabs button.active { background: var(--pp-primary); color: #fff; }
.pp-filter { display: grid; grid-template-columns: minmax(0,1fr); gap: 8px; }
.pp-section { margin-top: 16px; }
.pp-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 10px; }
.pp-head p { margin: 0; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-head h3 { margin: 2px 0 0; color: var(--text, #111); font-size: 19px; font-weight: 1000; letter-spacing: -.04em; }
.pp-list { margin-top: 10px; }
.pp-card, .pp-breakdown, .pp-empty { min-width: 0; border-radius: 24px; padding: 13px; overflow: hidden; }
.pp-card-top { display: flex; align-items: flex-start; gap: 10px; }
.pp-avatar {
  width: 56px; height: 56px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 19px;
  background: var(--pp-primary); color: #fff; font-size: 22px; box-shadow: 0 12px 24px rgba(15,23,42,.12);
}
.pp-card-main { min-width: 0; flex: 1; }
.pp-card-main h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; letter-spacing: -.04em; }
.pp-card-main p { margin: 4px 0 0; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; line-height: 1.4; }
.pp-chip-row { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; margin-top: 10px; }
.pp-chip {
  max-width: 100%; display: inline-flex; align-items: center; min-height: 25px; padding: 4px 9px; border-radius: 999px;
  font-size: 11px; font-weight: 950; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize;
}
.pp-chip.green { background: rgba(34,197,94,.14); color: #22c55e; }
.pp-chip.red { background: rgba(239,68,68,.14); color: #ef4444; }
.pp-chip.blue { background: rgba(59,130,246,.15); color: #60a5fa; }
.pp-chip.gray { background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); color: var(--muted, #64748b); }
.pp-chip.orange { background: rgba(245,158,11,.16); color: #f59e0b; }
.pp-chip.purple { background: rgba(147,51,234,.15); color: #a855f7; }
.pp-mini-grid { grid-template-columns: repeat(2, minmax(0,1fr)); margin-top: 10px; }
.pp-mini {
  min-width: 0; padding: 9px; border-radius: 17px; background: color-mix(in srgb, var(--muted, #64748b) 9%, transparent);
  border: 1px solid var(--border, rgba(0,0,0,.08)); overflow: hidden;
}
.pp-mini strong, .pp-mini span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-mini strong { color: var(--text, #111); font-size: 13px; font-weight: 1000; }
.pp-mini span { margin-top: 2px; color: var(--muted, #64748b); font-size: 10px; font-weight: 850; }
.pp-table-wrap { width: 100%; overflow-x: auto; border-radius: 18px; border: 1px solid var(--border, rgba(0,0,0,.08)); }
.pp-table { width: 100%; min-width: 980px; border-collapse: collapse; background: var(--card-bg, var(--surface, #fff)); }
.pp-table th, .pp-table td { padding: 10px; border-bottom: 1px solid var(--border, rgba(0,0,0,.08)); text-align: left; vertical-align: top; color: var(--text, #111); font-size: 13px; }
.pp-table th { color: var(--muted, #64748b); font-size: 11px; font-weight: 1000; text-transform: uppercase; letter-spacing: .07em; background: color-mix(in srgb, var(--pp-primary) 6%, var(--card-bg, #fff)); }
.pp-empty { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 190px; text-align: center; border-style: dashed; }
.pp-empty div { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 22px; background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff)); font-size: 28px; }
.pp-empty h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; }
.pp-empty p { margin: 0; color: var(--muted, #64748b); font-size: 13px; line-height: 1.6; }
.pp-message { margin: 10px 0; padding: 12px; border-radius: 18px; background: rgba(245,158,11,.14); color: #f59e0b; font-size: 13px; font-weight: 900; }
.pp-drawer-layer { position: fixed; inset: 0; z-index: 80; }
.pp-drawer-overlay { position: absolute; inset: 0; border: 0; background: rgba(15,23,42,.52); }
.pp-drawer {
  position: absolute; right: 0; top: 0; bottom: 0; width: min(94vw, 720px); max-width: 100vw; overflow-y: auto; overflow-x: hidden;
  background: var(--bg, #f7f8fb); color: var(--text, #111); padding: 14px; box-shadow: var(--shell-shadow, -24px 0 70px rgba(15,23,42,.22));
}
.pp-drawer-head { position: sticky; top: 0; z-index: 2; display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; padding: 6px 0 12px; background: var(--bg, #f7f8fb); }
.pp-drawer-head p { margin: 0; color: var(--pp-primary); font-size: 11px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-drawer-head h2 { margin: 2px 0 0; color: var(--text, #111); font-size: 22px; font-weight: 1000; letter-spacing: -.05em; }
.pp-drawer-head span { margin-top: 3px; display: block; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-drawer-head button { width: 38px; height: 38px; flex: 0 0 auto; border: 1px solid var(--border, rgba(0,0,0,.10)); border-radius: 15px; background: var(--surface, #fff); color: var(--text, #111); font-weight: 1000; cursor: pointer; }
.pp-form-card { margin-top: 10px; padding: 12px; border-radius: 22px; background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); }
.pp-form-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 9px; }
.pp-form-grid label { min-width: 0; display: grid; gap: 6px; }
.pp-form-grid label span { color: var(--muted, #64748b); font-size: 11px; font-weight: 950; letter-spacing: .06em; text-transform: uppercase; }
.pp-form-grid .wide { grid-column: 1 / -1; }
.pp-drawer-actions { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px; margin-top: 12px; }
.pp-bar { height: 8px; margin-top: 12px; border-radius: 999px; background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); overflow: hidden; }
.pp-bar div { height: 100%; background: var(--pp-primary); border-radius: inherit; }
@media (min-width: 680px) {
  .pp-page { padding: calc(12px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-filter { grid-template-columns: minmax(0,1fr) 190px 150px; }
  .pp-mini-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-form-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (min-width: 1040px) {
  .pp-page { padding: calc(16px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(6, minmax(0,1fr)); }
  .pp-list, .pp-breakdown-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (max-width: 520px) {
  .pp-page { padding: calc(6px * var(--local-density-scale, 1)); }
  .pp-hero { flex-direction: column; border-radius: 22px; padding: 10px; }
  .pp-actions { display: grid; grid-template-columns: minmax(0,1fr); }
  .pp-btn, .pp-primary { width: 100%; }
  .pp-summary-grid { gap: 6px; }
  .pp-summary { padding: 10px; border-radius: 19px; }
  .pp-toolbar { align-items: stretch; flex-direction: column; border-radius: 20px; }
  .pp-tabs { width: 100%; }
  .pp-card, .pp-empty, .pp-breakdown { border-radius: 20px; padding: 11px; }
  .pp-avatar { width: 52px; height: 52px; flex-basis: 52px; }
  .pp-mini-grid { grid-template-columns: repeat(1, minmax(0,1fr)); }
  .pp-drawer-actions { grid-template-columns: minmax(0,1fr); }
  .pp-drawer { width: min(96vw, 720px); padding: 12px; }
}
`;async function rd(e,a,r){let[t,i,s,n,o]=await Promise.all([ra("parents"),ra("students"),ra("studentParents"),ra("userMemberships").then(async e=>e.length?e:ra("memberships")),ra("users").then(async e=>e.length?e:ra("accountUsers"))]),d=String(localStorage.getItem("email")||localStorage.getItem("userEmail")||"").toLowerCase(),l=n.find(t=>"parent"===t.role&&a7(t,e,String(a),String(r))),p=o.find(e=>String(e?.id||e?.localId||"")===String(l?.userLocalId||l?.userId||l?.accountUserId||"")||!!(d&&String(e.email||"").toLowerCase()===d)),c=t.find(t=>a7(t,e,String(a),String(r))&&(String(t.id)===String(l?.parentLocalId)||!!(p?.email&&t.email&&String(t.email).toLowerCase()===String(p.email).toLowerCase())||!!(d&&t.email&&String(t.email).toLowerCase()===d)))||null,m=new Set;s.forEach(e=>{c?.id&&Number(e.parentId||e.parentLocalId)===Number(c.id)&&m.add(Number(e.studentId||e.studentLocalId))}),l?.studentLocalId&&m.add(Number(l.studentLocalId));let h=i.filter(t=>a7(t,e,String(a),String(r))&&(m.has(Number(t.id))||!!(c?.email&&String(t.parentEmail||"").toLowerCase()===String(c.email).toLowerCase())||!!(c?.phone&&String(t.parentPhone||"")===String(c.phone))));return{parent:c,children:h,user:p}}function rl(e){let a=Number(e||0);return Number.isFinite(a)?a:0}function rp(){return Date.now()}function rc(e,a=""){return String(e||"").trim()||a}function rm(e){if(!e)return"Not set";let a="number"==typeof e?e:new Date(e).getTime();if(!Number.isFinite(a))return"Not set";try{return new Intl.DateTimeFormat(void 0,{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(a))}catch{return"Not set"}}function rh(e,a,r,t){return!!e&&!e.isDeleted&&(!e.accountId||e.accountId===a)&&Number(e.schoolId)===Number(r)&&Number(e.branchId)===Number(t)}function ru(e){return rc(e?.fullName||e?.name||e?.title||e?.label||e?.email,"Unnamed")}async function rx(e){let a=h.db[e];return a?.toArray?a.toArray():[]}function rg(e){return e?.id||e?.localId}function rb(e){return String(e?.userLocalId||e?.userId||e?.accountUserId||"")}function rf({children:e,tone:a="gray"}){return(0,t.jsx)("span",{className:`pp-chip ${a}`,children:e})}function rv({label:e,value:a,icon:r,positive:i,warning:s}){return(0,t.jsxs)("article",{className:`pp-summary ${i?"positive":""} ${s?"warning":""}`,children:[(0,t.jsx)("div",{children:r}),(0,t.jsxs)("section",{children:[(0,t.jsx)("strong",{children:a}),(0,t.jsx)("span",{children:e})]})]})}function rj({title:e="No records",text:a}){return(0,t.jsxs)("section",{className:"pp-empty",children:[(0,t.jsx)("div",{children:"\uD83D\uDCCC"}),(0,t.jsx)("h3",{children:e}),(0,t.jsx)("p",{children:a})]})}function ry({view:e,setView:a,count:r}){return(0,t.jsxs)("section",{className:"pp-toolbar",children:[(0,t.jsxs)("div",{className:"pp-tabs",children:[(0,t.jsx)("button",{type:"button",className:"cards"===e?"active":"",onClick:()=>a("cards"),children:"Cards"}),(0,t.jsx)("button",{type:"button",className:"table"===e?"active":"",onClick:()=>a("table"),children:"Table"}),(0,t.jsx)("button",{type:"button",className:"analytics"===e?"active":"",onClick:()=>a("analytics"),children:"Analytics"})]}),(0,t.jsxs)(rf,{children:[r," shown"]})]})}let rw=`
.pp-page {
  min-height: 100dvh;
  width: 100%;
  min-width: 0;
  padding: calc(8px * var(--local-density-scale, 1));
  padding-bottom: max(32px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--pp-primary) 10%, transparent), transparent 34rem),
    var(--bg, #f7f8fb);
  color: var(--text, #111);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--font-size, 14px);
  overflow-x: hidden;
}
.pp-page * { box-sizing: border-box; }
.pp-page button, .pp-page input, .pp-page select, .pp-page textarea { font: inherit; max-width: 100%; }
.pp-page input, .pp-page select, .pp-page textarea {
  width: 100%;
  min-height: 44px;
  border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10)));
  border-radius: 16px;
  padding: 0 12px;
  background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #111));
  outline: none;
  font-weight: 750;
}
.pp-page textarea { min-height: 120px; padding: 12px; resize: vertical; line-height: 1.55; }
.pp-state {
  min-height: min(420px, calc(100dvh - 32px));
  width: min(480px, 100%);
  margin: 0 auto;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  padding: 22px;
  border-radius: 28px;
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: var(--shell-shadow, 0 24px 60px rgba(15,23,42,.08));
  text-align: center;
}
.pp-state h2 { margin: 0; font-size: 22px; letter-spacing: -.04em; font-weight: 1000; }
.pp-state p { margin: 0; color: var(--muted, #64748b); line-height: 1.6; }
.pp-hero {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 10px;
  padding: 12px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 18% 8%, color-mix(in srgb, var(--pp-primary) 16%, transparent), transparent 20rem),
    linear-gradient(135deg, var(--card-bg, var(--surface, #fff)), color-mix(in srgb, var(--pp-primary) 7%, var(--card-bg, #fff)) 72%);
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 18px 46px rgba(15,23,42,.07);
  overflow: hidden;
}
.pp-hero-left { min-width: 0; display: flex; align-items: center; gap: 10px; flex: 1; }
.pp-icon {
  width: 48px; height: 48px; flex: 0 0 auto; display: grid; place-items: center;
  border-radius: 18px; background: var(--pp-primary); color: #fff; font-size: 22px;
  box-shadow: 0 12px 26px color-mix(in srgb, var(--pp-primary) 28%, transparent);
}
.pp-title { min-width: 0; }
.pp-title p, .pp-title h2, .pp-title span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-title p { margin: 0 0 2px; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-title h2 { margin: 0; color: var(--text, #111); font-size: clamp(20px, 5vw, 30px); font-weight: 1000; letter-spacing: -.06em; line-height: 1; }
.pp-title span { margin-top: 3px; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; }
.pp-btn, .pp-primary {
  min-height: 42px; border-radius: 999px; padding: 0 14px; font-weight: 950; cursor: pointer;
}
.pp-btn { border: 1px solid var(--border, rgba(0,0,0,.10)); background: var(--surface, #fff); color: var(--text, #111); }
.pp-primary { border: 0; background: var(--pp-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--pp-primary) 25%, transparent); }
.pp-summary-grid, .pp-list, .pp-mini-grid, .pp-breakdown-grid { display: grid; gap: 8px; }
.pp-summary-grid { margin-top: 10px; grid-template-columns: repeat(2, minmax(0,1fr)); }
.pp-summary, .pp-card, .pp-panel, .pp-toolbar, .pp-filter, .pp-empty, .pp-breakdown {
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 12px 28px rgba(15,23,42,.045);
}
.pp-summary { min-width: 0; display: flex; align-items: center; gap: 10px; padding: 12px; border-radius: 22px; overflow: hidden; }
.pp-summary.positive { background: linear-gradient(135deg, rgba(34,197,94,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary.warning { background: linear-gradient(135deg, rgba(245,158,11,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary > div:first-child {
  width: 36px; height: 36px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 15px;
  background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff));
}
.pp-summary section { min-width: 0; }
.pp-summary strong, .pp-summary span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-summary strong { font-size: 18px; font-weight: 1000; letter-spacing: -.05em; color: var(--text, #111); }
.pp-summary span { margin-top: 2px; color: var(--muted, #64748b); font-size: 11px; font-weight: 850; }
.pp-toolbar, .pp-filter, .pp-panel { margin-top: 10px; padding: 10px; border-radius: 24px; }
.pp-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.pp-tabs {
  display: inline-grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 4px; width: min(390px, 100%);
  padding: 4px; border-radius: 999px; background: var(--shell-section-bg, color-mix(in srgb, var(--pp-primary) 7%, var(--surface, #fff)));
  border: 1px solid var(--border, rgba(0,0,0,.08));
}
.pp-tabs button { min-width: 0; min-height: 35px; border: 0; border-radius: 999px; padding: 0 9px; background: transparent; color: var(--muted, #64748b); font-size: 12px; font-weight: 950; cursor: pointer; }
.pp-tabs button.active { background: var(--pp-primary); color: #fff; }
.pp-filter { display: grid; grid-template-columns: minmax(0,1fr); gap: 8px; }
.pp-section { margin-top: 16px; }
.pp-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 10px; }
.pp-head p { margin: 0; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-head h3 { margin: 2px 0 0; color: var(--text, #111); font-size: 19px; font-weight: 1000; letter-spacing: -.04em; }
.pp-list { margin-top: 10px; }
.pp-card, .pp-breakdown, .pp-empty { min-width: 0; border-radius: 24px; padding: 13px; overflow: hidden; }
.pp-card-top { display: flex; align-items: flex-start; gap: 10px; }
.pp-avatar {
  width: 56px; height: 56px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 19px;
  background: var(--pp-primary); color: #fff; font-size: 22px; box-shadow: 0 12px 24px rgba(15,23,42,.12);
}
.pp-card-main { min-width: 0; flex: 1; }
.pp-card-main h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; letter-spacing: -.04em; }
.pp-card-main p { margin: 4px 0 0; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; line-height: 1.4; }
.pp-chip-row { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; margin-top: 10px; }
.pp-chip {
  max-width: 100%; display: inline-flex; align-items: center; min-height: 25px; padding: 4px 9px; border-radius: 999px;
  font-size: 11px; font-weight: 950; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize;
}
.pp-chip.green { background: rgba(34,197,94,.14); color: #22c55e; }
.pp-chip.red { background: rgba(239,68,68,.14); color: #ef4444; }
.pp-chip.blue { background: rgba(59,130,246,.15); color: #60a5fa; }
.pp-chip.gray { background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); color: var(--muted, #64748b); }
.pp-chip.orange { background: rgba(245,158,11,.16); color: #f59e0b; }
.pp-chip.purple { background: rgba(147,51,234,.15); color: #a855f7; }
.pp-mini-grid { grid-template-columns: repeat(2, minmax(0,1fr)); margin-top: 10px; }
.pp-mini {
  min-width: 0; padding: 9px; border-radius: 17px; background: color-mix(in srgb, var(--muted, #64748b) 9%, transparent);
  border: 1px solid var(--border, rgba(0,0,0,.08)); overflow: hidden;
}
.pp-mini strong, .pp-mini span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-mini strong { color: var(--text, #111); font-size: 13px; font-weight: 1000; }
.pp-mini span { margin-top: 2px; color: var(--muted, #64748b); font-size: 10px; font-weight: 850; }
.pp-table-wrap { width: 100%; overflow-x: auto; border-radius: 18px; border: 1px solid var(--border, rgba(0,0,0,.08)); }
.pp-table { width: 100%; min-width: 980px; border-collapse: collapse; background: var(--card-bg, var(--surface, #fff)); }
.pp-table th, .pp-table td { padding: 10px; border-bottom: 1px solid var(--border, rgba(0,0,0,.08)); text-align: left; vertical-align: top; color: var(--text, #111); font-size: 13px; }
.pp-table th { color: var(--muted, #64748b); font-size: 11px; font-weight: 1000; text-transform: uppercase; letter-spacing: .07em; background: color-mix(in srgb, var(--pp-primary) 6%, var(--card-bg, #fff)); }
.pp-empty { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 190px; text-align: center; border-style: dashed; }
.pp-empty div { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 22px; background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff)); font-size: 28px; }
.pp-empty h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; }
.pp-empty p { margin: 0; color: var(--muted, #64748b); font-size: 13px; line-height: 1.6; }
.pp-message { margin: 10px 0; padding: 12px; border-radius: 18px; background: rgba(245,158,11,.14); color: #f59e0b; font-size: 13px; font-weight: 900; }
.pp-drawer-layer { position: fixed; inset: 0; z-index: 80; }
.pp-drawer-overlay { position: absolute; inset: 0; border: 0; background: rgba(15,23,42,.52); }
.pp-drawer {
  position: absolute; right: 0; top: 0; bottom: 0; width: min(94vw, 720px); max-width: 100vw; overflow-y: auto; overflow-x: hidden;
  background: var(--bg, #f7f8fb); color: var(--text, #111); padding: 14px; box-shadow: var(--shell-shadow, -24px 0 70px rgba(15,23,42,.22));
}
.pp-drawer-head { position: sticky; top: 0; z-index: 2; display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; padding: 6px 0 12px; background: var(--bg, #f7f8fb); }
.pp-drawer-head p { margin: 0; color: var(--pp-primary); font-size: 11px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-drawer-head h2 { margin: 2px 0 0; color: var(--text, #111); font-size: 22px; font-weight: 1000; letter-spacing: -.05em; }
.pp-drawer-head span { margin-top: 3px; display: block; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-drawer-head button { width: 38px; height: 38px; flex: 0 0 auto; border: 1px solid var(--border, rgba(0,0,0,.10)); border-radius: 15px; background: var(--surface, #fff); color: var(--text, #111); font-weight: 1000; cursor: pointer; }
.pp-form-card { margin-top: 10px; padding: 12px; border-radius: 22px; background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); }
.pp-form-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 9px; }
.pp-form-grid label { min-width: 0; display: grid; gap: 6px; }
.pp-form-grid label span { color: var(--muted, #64748b); font-size: 11px; font-weight: 950; letter-spacing: .06em; text-transform: uppercase; }
.pp-form-grid .wide { grid-column: 1 / -1; }
.pp-drawer-actions { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px; margin-top: 12px; }
.pp-bar { height: 8px; margin-top: 12px; border-radius: 999px; background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); overflow: hidden; }
.pp-bar div { height: 100%; background: var(--pp-primary); border-radius: inherit; }
@media (min-width: 680px) {
  .pp-page { padding: calc(12px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-filter { grid-template-columns: minmax(0,1fr) 190px 150px; }
  .pp-mini-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-form-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (min-width: 1040px) {
  .pp-page { padding: calc(16px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(6, minmax(0,1fr)); }
  .pp-list, .pp-breakdown-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (max-width: 520px) {
  .pp-page { padding: calc(6px * var(--local-density-scale, 1)); }
  .pp-hero { flex-direction: column; border-radius: 22px; padding: 10px; }
  .pp-actions { display: grid; grid-template-columns: minmax(0,1fr); }
  .pp-btn, .pp-primary { width: 100%; }
  .pp-summary-grid { gap: 6px; }
  .pp-summary { padding: 10px; border-radius: 19px; }
  .pp-toolbar { align-items: stretch; flex-direction: column; border-radius: 20px; }
  .pp-tabs { width: 100%; }
  .pp-card, .pp-empty, .pp-breakdown { border-radius: 20px; padding: 11px; }
  .pp-avatar { width: 52px; height: 52px; flex-basis: 52px; }
  .pp-mini-grid { grid-template-columns: repeat(1, minmax(0,1fr)); }
  .pp-drawer-actions { grid-template-columns: minmax(0,1fr); }
  .pp-drawer { width: min(96vw, 720px); padding: 12px; }
}
`;async function rN(e,a,r){let[t,i,s,n,o]=await Promise.all([rx("parents"),rx("students"),rx("studentParents"),rx("userMemberships").then(async e=>e.length?e:rx("memberships")),rx("users").then(async e=>e.length?e:rx("accountUsers"))]),d=String(localStorage.getItem("email")||localStorage.getItem("userEmail")||"").toLowerCase(),l=n.find(t=>"parent"===t.role&&rh(t,e,Number(a),Number(r))),p=o.find(e=>String(rg(e)||"")===rb(l)||!!(d&&String(e.email||"").toLowerCase()===d)),c=t.find(t=>rh(t,e,Number(a),Number(r))&&(Number(t.id)===Number(l?.parentLocalId)||!!(p?.email&&t.email&&String(t.email).toLowerCase()===String(p.email).toLowerCase())||!!(d&&t.email&&String(t.email).toLowerCase()===d)))||null,m=new Set;s.forEach(e=>{c?.id&&Number(e.parentId||e.parentLocalId)===Number(c.id)&&m.add(Number(e.studentId||e.studentLocalId))}),l?.studentLocalId&&m.add(Number(l.studentLocalId));let h=i.filter(t=>rh(t,e,Number(a),Number(r))&&(m.has(Number(t.id))||!!(c?.email&&String(t.parentEmail||"").toLowerCase()===String(c.email).toLowerCase())||!!(c?.phone&&String(t.parentPhone||"")===String(c.phone))));return{parent:c,children:h,user:p}}let rk=ec.$S.PARENTS,r_={fullName:"",title:"",phone:"",email:"",occupation:"",emergencyContact:"",relationship:"guardian",address:"",addressLine1:"",addressLine2:"",locality:"",city:"",district:"",region:"",postalCode:"",country:"Ghana",locationLabel:"",formattedAddress:"",latitude:"",longitude:"",accuracyMeters:"",locationType:"home",locationSource:"manual",locationPrecision:"approximate",locationCapturedAt:void 0,mapVisible:!1,locationConsentGiven:!1,locationConsentAt:void 0,locationRestricted:!0,photo:"",photoMediaId:void 0,coverPhoto:"",coverPhotoMediaId:void 0},rI=e=>{let a=null==e?"":String(e).trim();return a&&"0"!==a?a:""},rS=(e,a)=>rI(e)===rI(a);function rC(...e){for(let a of e){let e=rI(a);if(e)return e}return""}function r$(e){try{return window.localStorage.getItem(e)||window.sessionStorage.getItem(e)}catch{return null}}function rz(e){let a=r$(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}}function rA(e){let a=String(e||"").trim();if(!(!a||a.startsWith("blob:"))&&!a.startsWith("data:image/"))return a}function rP(e){let a=String(e||"").trim();if(!a.startsWith("#"))return"#ffffff";let r=a.slice(1);if(3===r.length&&(r=r.split("").map(e=>e+e).join("")),!/^[0-9a-fA-F]{6}$/.test(r))return"#ffffff";let t=Number.parseInt(r,16);return(299*(t>>16&255)+587*(t>>8&255)+114*(255&t))/1e3>155?"#111827":"#ffffff"}function rM({name:e,photo:a,primary:r}){return(0,t.jsx)("div",{className:"pp-avatar",style:{background:a?`url("${a}") center/cover`:r,color:a?"#ffffff":rP(r)},children:a?null:String(e||"P").slice(0,1).toUpperCase()})}function rT({children:e,tone:a="gray"}){return(0,t.jsx)("span",{className:`pp-chip ${a}`,children:e})}function rL({label:e,value:a,wide:r=!1}){return(0,t.jsxs)("article",{className:`pp-detail ${r?"wide":""}`,children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)("strong",{children:a})]})}function rD({label:e,children:a,required:r=!1,wide:i=!1}){return(0,t.jsxs)("label",{className:i?"wide":"",children:[(0,t.jsxs)("span",{children:[e,r?" *":""]}),a]})}function rR({label:e,text:a,checked:r,onChange:i}){return(0,t.jsxs)("label",{className:"pp-toggle",children:[(0,t.jsxs)("span",{children:[(0,t.jsx)("strong",{children:e}),(0,t.jsx)("small",{children:a})]}),(0,t.jsx)("input",{type:"checkbox",checked:r,onChange:e=>i(e.target.checked)}),(0,t.jsx)("i",{})]})}function rB({primary:e,title:a,text:r}){return(0,t.jsxs)("main",{className:"pp-page",style:{"--pp-primary":e,"--pp-primary-text":rP(e)},children:[(0,t.jsx)("style",{children:rE}),(0,t.jsxs)("section",{className:"pp-state",children:[(0,t.jsx)("div",{className:"pp-spinner"}),(0,t.jsx)("h2",{children:a}),(0,t.jsx)("p",{children:r})]})]})}let rE=`
@keyframes ppSpin{to{transform:rotate(360deg)}}
.pp-page{
  min-height:100dvh;
  width:100%;
  min-width:0;
  display:grid;
  align-content:start;
  gap:8px;
  padding:8px;
  padding-bottom:max(40px,env(safe-area-inset-bottom));
  background:var(--bg,#f7f8fb);
  color:var(--text,#111827);
  font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);
  font-size:var(--font-size,14px);
}
.pp-page *,.pp-page *::before,.pp-page *::after{box-sizing:border-box;min-width:0}
.pp-page button,.pp-page input,.pp-page select{font:inherit;max-width:100%}
.pp-toolbar,.pp-profile-card,.pp-detail,.pp-form-section,.pp-protected-note,.pp-state{
  background:var(--card-bg,var(--surface,#fff));
  border:1px solid var(--border,rgba(0,0,0,.10));
}
.pp-toolbar{
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto;
  align-items:center;
  gap:8px;
  padding:8px;
  border-radius:15px;
}
.pp-status-dot{
  width:9px;height:9px;border-radius:999px;
  box-shadow:0 0 0 3px color-mix(in srgb,currentColor 11%,transparent);
}
.pp-status-dot.green{background:#22c55e}
.pp-status-dot.orange{background:#f59e0b}
.pp-toolbar-copy{display:grid;gap:1px}
.pp-toolbar-copy strong{font-size:11px;font-weight:1000}
.pp-toolbar-copy small{color:var(--muted,#64748b);font-size:8.5px}
.pp-primary-button,.pp-secondary-button,.pp-icon-button{
  min-height:36px;
  border-radius:10px;
  padding:0 12px;
  font-size:9px;
  font-weight:950;
  cursor:pointer;
}
.pp-primary-button{
  border:1px solid var(--pp-primary);
  background:var(--pp-primary);
  color:var(--pp-primary-text);
}
.pp-secondary-button{
  border:1px solid var(--border,rgba(0,0,0,.10));
  background:var(--surface,#fff);
  color:var(--text,#111827);
}
.pp-icon-button{
  width:36px;padding:0;
  border:1px solid var(--border,rgba(0,0,0,.10));
  background:var(--surface,#fff);
  color:var(--text,#111827);
  font-size:17px;
}
.pp-profile-card{
  overflow:hidden;
  border-radius:17px;
}
.pp-cover{
  position:relative;
  min-height:130px;
}
.pp-cover-actions{
  position:absolute;
  right:8px;
  bottom:8px;
  display:flex;
  gap:5px;
}
.pp-cover-actions label,.pp-cover-actions button{
  min-height:31px;
  display:inline-flex;
  align-items:center;
  border:1px solid rgba(255,255,255,.34);
  border-radius:9px;
  padding:0 9px;
  background:rgba(15,23,42,.64);
  color:#fff;
  font-size:8px;
  font-weight:900;
  cursor:pointer;
  backdrop-filter:blur(8px);
}
.pp-cover-actions input,.pp-photo-actions input{display:none}
.pp-profile-main{
  display:flex;
  align-items:flex-end;
  gap:10px;
  padding:0 10px 11px;
}
.pp-photo-wrap{
  position:relative;
  flex:0 0 auto;
  margin-top:-31px;
}
.pp-avatar{
  width:68px;height:68px;
  display:grid;place-items:center;
  border:4px solid var(--card-bg,var(--surface,#fff));
  border-radius:20px;
  font-size:23px;font-weight:1000;
  overflow:hidden;
  box-shadow:0 10px 24px rgba(15,23,42,.15);
}
.pp-photo-actions{
  position:absolute;
  right:-5px;
  bottom:-5px;
  display:flex;
  gap:3px;
}
.pp-photo-actions label,.pp-photo-actions button{
  width:26px;height:26px;
  display:grid;place-items:center;
  border:2px solid var(--card-bg,var(--surface,#fff));
  border-radius:999px;
  background:var(--pp-primary);
  color:var(--pp-primary-text);
  font-size:11px;
  font-weight:1000;
  cursor:pointer;
}
.pp-profile-copy{padding-top:8px}
.pp-profile-copy h1{
  margin:0;
  font-size:17px;
  font-weight:1000;
  letter-spacing:-.04em;
}
.pp-profile-copy p{
  margin:3px 0 0;
  color:var(--muted,#64748b);
  font-size:9px;
}
.pp-chips{
  display:flex;
  flex-wrap:wrap;
  gap:5px;
  margin-top:6px;
}
.pp-chip{
  min-height:23px;
  display:inline-flex;
  align-items:center;
  padding:3px 7px;
  border-radius:999px;
  font-size:8px;
  font-weight:950;
}
.pp-chip.green{background:rgba(34,197,94,.12);color:#15803d}
.pp-chip.blue{background:rgba(59,130,246,.12);color:#1d4ed8}
.pp-chip.orange{background:rgba(245,158,11,.14);color:#b45309}
.pp-chip.gray{background:color-mix(in srgb,var(--muted,#64748b) 12%,transparent);color:var(--muted,#64748b)}
.pp-details-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:7px;
}
.pp-detail{
  display:grid;
  gap:4px;
  min-height:65px;
  align-content:center;
  padding:9px;
  border-radius:12px;
}
.pp-detail.wide{grid-column:1/-1}
.pp-detail span{
  color:var(--muted,#64748b);
  font-size:8px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.04em;
}
.pp-detail strong{
  overflow-wrap:anywhere;
  font-size:10px;
  line-height:1.45;
}
.pp-form{display:grid;gap:8px}
.pp-form-section{
  padding:10px;
  border-radius:14px;
}
.pp-section-head{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:8px;
  padding-bottom:9px;
  border-bottom:1px solid var(--border,rgba(0,0,0,.08));
}
.pp-section-head strong,.pp-section-head small{display:block}
.pp-section-head strong{font-size:11px;font-weight:1000}
.pp-section-head small{
  margin-top:2px;
  color:var(--muted,#64748b);
  font-size:8px;
  line-height:1.45;
}
.pp-form-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:8px;
  padding-top:9px;
}
.pp-form-grid label{
  display:grid;
  gap:4px;
}
.pp-form-grid label.wide{grid-column:1/-1}
.pp-form-grid label>span{
  color:var(--muted,#64748b);
  font-size:8px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.04em;
}
.pp-form-grid input,.pp-form-grid select{
  width:100%;
  min-height:39px;
  border:1px solid var(--input-border,var(--border,rgba(0,0,0,.10)));
  border-radius:10px;
  padding:0 10px;
  background:var(--input-bg,var(--surface,#fff));
  color:var(--input-text,var(--text,#111827));
  outline:none;
  font-size:9px;
  font-weight:760;
}
.pp-form-grid input:focus,.pp-form-grid select:focus{
  border-color:var(--pp-primary);
  box-shadow:0 0 0 3px color-mix(in srgb,var(--pp-primary) 10%,transparent);
}
.pp-toggle-list{
  display:grid;
  gap:6px;
  padding-top:9px;
}
.pp-toggle{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto;
  align-items:center;
  gap:8px;
  padding:8px;
  border:1px solid var(--border,rgba(0,0,0,.08));
  border-radius:11px;
}
.pp-toggle strong,.pp-toggle small{display:block}
.pp-toggle strong{font-size:9px}
.pp-toggle small{
  margin-top:2px;
  color:var(--muted,#64748b);
  font-size:7.5px;
  line-height:1.4;
}
.pp-toggle input{position:absolute;opacity:0;pointer-events:none}
.pp-toggle i{
  position:relative;
  width:34px;height:20px;
  border-radius:999px;
  background:color-mix(in srgb,var(--muted,#64748b) 22%,transparent);
  transition:.18s ease;
}
.pp-toggle i::after{
  content:"";
  position:absolute;
  top:3px;left:3px;
  width:14px;height:14px;
  border-radius:999px;
  background:#fff;
  box-shadow:0 2px 5px rgba(15,23,42,.2);
  transition:.18s ease;
}
.pp-toggle input:checked+i{background:var(--pp-primary)}
.pp-toggle input:checked+i::after{transform:translateX(14px)}
.pp-protected-note{
  display:flex;
  align-items:flex-start;
  gap:8px;
  padding:9px;
  border-radius:12px;
  background:color-mix(in srgb,var(--pp-primary) 5%,var(--surface,#fff));
}
.pp-protected-note strong,.pp-protected-note p{display:block;margin:0}
.pp-protected-note strong{font-size:9px}
.pp-protected-note p{
  margin-top:2px;
  color:var(--muted,#64748b);
  font-size:7.5px;
  line-height:1.5;
}
.pp-form-actions{
  position:sticky;
  bottom:6px;
  display:flex;
  justify-content:flex-end;
  gap:6px;
  padding:8px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:12px;
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 94%,transparent);
  backdrop-filter:blur(12px);
}
.pp-toast{
  position:sticky;
  top:8px;
  z-index:60;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
  padding:8px 10px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:11px;
  background:var(--surface,#fff);
  font-size:9px;
  font-weight:850;
}
.pp-toast.success{border-color:rgba(34,197,94,.35)}
.pp-toast.error{border-color:rgba(239,68,68,.35)}
.pp-toast.info{border-color:rgba(59,130,246,.35)}
.pp-toast button{
  border:0;background:transparent;color:inherit;font-size:16px;cursor:pointer;
}
.pp-camera-layer{
  position:fixed;
  inset:0;
  z-index:100;
  display:grid;
  place-items:center;
  padding:10px;
  background:rgba(15,23,42,.62);
  backdrop-filter:blur(8px);
}
.pp-camera{
  width:min(580px,100%);
  overflow:hidden;
  border-radius:16px;
  background:var(--surface,#fff);
  color:var(--text,#111827);
}
.pp-camera-head{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:8px;
  padding:10px;
}
.pp-camera-head strong,.pp-camera-head small{display:block}
.pp-camera-head strong{font-size:11px}
.pp-camera-head small{margin-top:2px;color:var(--muted,#64748b);font-size:8px}
.pp-camera-head button{
  width:31px;height:31px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:9px;
  background:transparent;
  color:inherit;
  font-size:18px;
}
.pp-camera-preview{
  position:relative;
  min-height:300px;
  background:#020617;
}
.pp-camera-preview video{
  display:block;
  width:100%;
  min-height:300px;
  object-fit:cover;
}
.pp-camera-loading{
  position:absolute;
  inset:0;
  display:grid;
  place-items:center;
  color:#fff;
  font-size:10px;
}
.pp-camera-actions{
  display:flex;
  justify-content:flex-end;
  gap:7px;
  padding:10px;
}
.pp-state{
  min-height:min(420px,calc(100dvh - 32px));
  width:min(520px,100%);
  margin:0 auto;
  display:grid;
  place-items:center;
  align-content:center;
  gap:8px;
  padding:22px;
  border-radius:18px;
  text-align:center;
}
.pp-spinner{
  width:34px;height:34px;
  border:4px solid color-mix(in srgb,var(--pp-primary) 18%,transparent);
  border-top-color:var(--pp-primary);
  border-radius:999px;
  animation:ppSpin .8s linear infinite;
}
.pp-state h2,.pp-state p{margin:0}
.pp-state h2{font-size:17px}
.pp-state p{color:var(--muted,#64748b);font-size:9px;line-height:1.55}
@media(min-width:720px){
  .pp-page{padding:12px;gap:10px}
  .pp-toolbar,.pp-profile-card,.pp-details-grid,.pp-form{width:min(920px,100%);margin-left:auto;margin-right:auto}
  .pp-cover{min-height:180px}
  .pp-avatar{width:78px;height:78px;border-radius:23px}
  .pp-details-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
  .pp-detail.wide{grid-column:span 2}
}
@media(max-width:560px){
  .pp-page{padding:7px}
  .pp-cover{min-height:110px}
  .pp-profile-main{align-items:center}
  .pp-avatar{width:62px;height:62px}
  .pp-profile-copy h1{font-size:15px}
  .pp-details-grid,.pp-form-grid{grid-template-columns:1fr}
  .pp-detail.wide,.pp-form-grid label.wide{grid-column:auto}
  .pp-section-head{display:grid}
  .pp-section-head .pp-secondary-button{justify-self:start}
  .pp-form-actions{display:grid;grid-template-columns:1fr 1fr}
}
`;function rO(e){try{return window.localStorage.getItem(e)||window.sessionStorage.getItem(e)}catch{return null}}function rF(e){let a=rO(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}}function rU(...e){for(let a of e){let e=function(e){if(null==e||""===e)return null;let a=Number(e);return Number.isFinite(a)&&a>0?a:null}(a);if(e)return e}return null}function rV(){return rF("eleeveon_open_workspace")}function rW(){return rF("activeMembership")}let rK=[{title:"My Children",defaultOpen:!0,items:[{key:"parentDashboard",label:"Dashboard",icon:"\uD83C\uDFE0"},{key:"children",label:"Children",icon:"\uD83E\uDDD2"},{key:"childAttendance",label:"Attendance",icon:"\uD83D\uDCC5"},{key:"myChildReport",label:"Reports",icon:"\uD83D\uDCCA"},{key:"myChildCumulativeRecord",label:"Cumulative Records",icon:"\uD83D\uDCD1"}]},{title:"Fees & Payments",defaultOpen:!0,items:[{key:"childFees",label:"Fee Statements",icon:"\uD83D\uDCB3"}]},{title:"Communication",defaultOpen:!1,items:[{key:"announcements",label:"Announcements",icon:"\uD83D\uDCE3"},{key:"messages",label:"Messages",icon:"✉️"}]},{title:"Timetable",defaultOpen:!1,items:[{key:"calendar",label:"Calendar",icon:"\uD83D\uDCC6"},{key:"childTimetable",label:"My Child's Timetable",icon:"\uD83D\uDCDA"}]},{title:"Preferences",defaultOpen:!1,items:[{key:"localSettings",label:"Local Settings",icon:"⚙️"},{key:"parentProfile",label:"Profile",icon:"\uD83D\uDC64"}]}],rG={parentDashboard:function(e){return(0,t.jsx)($,{...e,navSections:rK})},children:function(){let e=(0,c.useRouter)(),a=(0,T.f)(["parents","studentParents","students","classes","organizations","studentEnrollments","mediaAssets","mediaBlobs"]),{accountId:r,authenticated:i,loading:s}=(0,o.F)(),{settings:n,loading:u}=(0,d.t)(),{activeSchool:x,activeSchoolId:g,activeBranch:b,activeBranchId:f,loading:v}=(0,l.c)(),j=(0,m.A)(),y=j?.activeMembership,w=L(j?.activeParentId||y?.parentLocalId||y?.parentId),N=L(g||x?.id||n?.schoolId),k=L(f||b?.id||n?.branchId),_=n?.primaryColor||"var(--primary-color, #2563eb)",I=O(_),[S,C]=(0,p.useState)(!0),[$,z]=(0,p.useState)([]),[A,P]=(0,p.useState)([]),[Y,J]=(0,p.useState)([]),[q,Z]=(0,p.useState)([]),[X,Q]=(0,p.useState)([]),[ee,ea]=(0,p.useState)([]),[er,et]=(0,p.useState)(""),[ei,es]=(0,p.useState)("cards"),[en,eo]=(0,p.useState)("all"),[ed,el]=(0,p.useState)("all"),[ep,ec]=(0,p.useState)("all"),[em,eh]=(0,p.useState)(!1),[eu,ex]=(0,p.useState)(!1),[eg,eb]=(0,p.useState)(null),[ef,ev]=(0,p.useState)(null),ej=(0,M.D)({accountId:r,ownerTable:"students",rows:Y,fields:[{fieldKey:"photo",mediaIdKey:"photoMediaId"}]}),ey=(e,a)=>{ev({tone:e,message:a}),window.setTimeout(()=>ev(e=>e?.message===a?null:e),3800)};(0,p.useEffect)(()=>{if(!s&&!v){if(!i||!r)return void e.replace("/login");N&&k||e.replace("/account")}},[s,v,i,r,N,k,e]);let ew=e=>(!e.accountId||D(e.accountId,r))&&(!e.schoolId||D(e.schoolId,N))&&(!e.branchId||D(e.branchId,k))&&!e.isDeleted,eN=()=>{z([]),P([]),J([]),Z([]),Q([]),ea([])},ek=async()=>{if(!i||!r||!N||!k){eN(),C(!1);return}try{C(!0);let[e,a,r,t,i,s]=await Promise.all([h.db.parents.toArray(),h.db.studentParents.toArray(),h.db.students.toArray(),h.db.classes.toArray(),h.db.organizations.toArray(),h.db.studentEnrollments.toArray()]),n=e.filter(e=>ew(e)),o=a.filter(e=>ew(e)),d=r.filter(e=>ew(e)),l=new Set;w&&l.add(w);let p=R(y?.email||y?.user?.email||j?.activeUser?.email);p&&n.filter(e=>R(e.email)===p).forEach(e=>l.add(L(e.id)));let c=n.filter(e=>l.has(L(e.id))),m=l.size?o.filter(e=>l.has(L(e.parentId))):[],u=new Set(m.map(e=>L(e.studentId)).filter(Boolean)),x=d.filter(e=>u.has(L(e.id))).sort((e,a)=>String(e.fullName||"").localeCompare(String(a.fullName||"")));z(c),P(m),J(x),Z(t.filter(e=>ew(e)&&!1!==e.active&&!e.isDeleted).sort((e,a)=>e.name.localeCompare(a.name))),Q(i.filter(e=>ew(e)&&!1!==e.active&&!e.isDeleted).sort((e,a)=>e.name.localeCompare(a.name))),ea(s.filter(e=>ew(e)&&u.has(L(e.studentId))))}catch(e){console.error("Failed to load linked children:",e),eN(),ey("error","Failed to load your linked children.")}finally{C(!1)}};(0,p.useEffect)(()=>{s||v||u||ek()},[i,r,N,k,w,s,v,u,a]);let e_=(0,p.useMemo)(()=>new Map(q.map(e=>[L(e.id),e])),[q]),eI=(0,p.useMemo)(()=>new Map(X.map(e=>[L(e.id),e])),[X]),eS=(0,p.useMemo)(()=>{let e=new Map;return ee.slice().sort((e,a)=>Number(a.updatedAt||0)-Number(e.updatedAt||0)).forEach(a=>{let r=L(a.studentId);!r||e.has(r)||"active"===a.status&&e.set(r,a)}),e},[ee]),eC=(0,p.useMemo)(()=>{let e=new Map;return A.forEach(a=>{let r=L(a.studentId);r&&(!e.get(r)||a.isPrimary)&&e.set(r,a)}),e},[A]),e$=(0,p.useMemo)(()=>Y.map(e=>{let a,r=L(e.id),t=eS.get(r),i=L(t?.classId||e.currentClassId),s=e_.get(i),n=eI.get(L(e.organizationId)),o=eC.get(r),d=e.status||"active";return{id:r,student:e,photoUrl:ej[r]?.photo||(e=>{let a=String(e||"").trim();if(!(!a||a.startsWith("blob:"))&&!a.startsWith("data:image/"))return a})(e.photo),className:s?.name||"No class assigned",organizationName:n?.name||"No organization",relationship:(a=String(o?.relationship||"guardian").replaceAll("_"," ")).charAt(0).toUpperCase()+a.slice(1),isPrimary:!!o?.isPrimary,enrollment:t,status:d,active:!e.isDeleted&&!1!==e.active&&!["withdrawn","deleted","archived","inactive"].includes(R(e.status))}}),[Y,eS,e_,eI,eC,ej]),ez=(0,p.useMemo)(()=>{let e=er.trim().toLowerCase();return e$.filter(a=>{let r=a.student;return("all"===en||!!D(a.enrollment?.classId||r.currentClassId,en))&&("all"===ed||a.status===ed)&&("all"===ep||R(a.relationship)===R(ep))&&(!e||`
          ${r.fullName||""}
          ${r.admissionNumber||""}
          ${r.gender||""}
          ${r.email||""}
          ${a.className}
          ${a.organizationName}
          ${a.relationship}
          ${a.status}
        `.toLowerCase().includes(e))}).sort((e,a)=>e.student.fullName.localeCompare(a.student.fullName))},[e$,er,en,ed,ep]),eA=(0,p.useMemo)(()=>[en,ed,ep].filter(e=>"all"!==e).length,[en,ed,ep]),eP=(0,p.useMemo)(()=>Array.from(new Set(e$.map(e=>e.relationship).filter(Boolean))).sort(),[e$]),eM=(0,p.useMemo)(()=>U(e$,e=>B(e.status)),[e$]),eT=(0,p.useMemo)(()=>U(e$,e=>e.className),[e$]),eL=(0,p.useMemo)(()=>U(e$,e=>e.relationship),[e$]),eD=e=>{eb(e)};return s||v||u||S?(0,t.jsxs)("main",{className:"pp-page",style:{"--pp-primary":_,"--pp-primary-text":I},children:[(0,t.jsx)("style",{children:H}),(0,t.jsxs)("section",{className:"pp-state-card",children:[(0,t.jsx)("div",{className:"pp-spinner"}),(0,t.jsx)("h2",{children:"Opening your children..."}),(0,t.jsx)("p",{children:"Checking your parent profile, linked students, classes, and photos."})]})]}):i&&r?N&&k?(0,t.jsxs)("main",{className:"pp-page",style:{"--pp-primary":_,"--pp-primary-text":I},children:[(0,t.jsx)("style",{children:H}),(0,t.jsxs)("section",{className:"pp-action-strip",children:[(0,t.jsxs)("label",{className:"pp-search-box",children:[(0,t.jsx)("span",{"aria-hidden":"true",children:"⌕"}),(0,t.jsx)("input",{value:er,onChange:e=>et(e.target.value),placeholder:"Search your children...","aria-label":"Search your children"}),er&&(0,t.jsx)("button",{type:"button",className:"pp-search-clear",onClick:()=>et(""),"aria-label":"Clear search",children:"\xd7"})]}),(0,t.jsxs)("button",{type:"button",className:`pp-filter-button ${eA>0?"active":""}`,onClick:()=>eh(!0),"aria-label":"Open filters",title:"Filter",children:[(0,t.jsx)("span",{"aria-hidden":"true",children:"☷"}),eA>0&&(0,t.jsx)("b",{className:"pp-action-count",children:eA})]}),(0,t.jsx)("button",{type:"button",className:"pp-more-button",onClick:()=>ex(!0),"aria-label":"More options",title:"More",children:"⋯"})]}),(eA>0||er)&&(0,t.jsxs)("section",{className:"pp-active-filters",children:[er&&(0,t.jsxs)("button",{type:"button",onClick:()=>et(""),children:["Search: ",er," ",(0,t.jsx)("span",{children:"\xd7"})]}),"all"!==en&&(0,t.jsxs)("button",{type:"button",onClick:()=>eo("all"),children:[e_.get(en)?.name||"Class"," ",(0,t.jsx)("span",{children:"\xd7"})]}),"all"!==ed&&(0,t.jsxs)("button",{type:"button",onClick:()=>el("all"),children:[B(ed)," ",(0,t.jsx)("span",{children:"\xd7"})]}),"all"!==ep&&(0,t.jsxs)("button",{type:"button",onClick:()=>ec("all"),children:[ep," ",(0,t.jsx)("span",{children:"\xd7"})]})]}),"cards"===ei&&(0,t.jsxs)("section",{className:"pp-content-section",children:[(0,t.jsx)("div",{className:"pp-card-grid",children:ez.map(e=>{let a=F(e.student);return(0,t.jsxs)("article",{className:"pp-child-card",onClick:()=>eD(e),children:[(0,t.jsxs)("div",{className:"pp-child-main",children:[(0,t.jsx)(V,{name:e.student.fullName,photo:e.photoUrl,primary:_}),(0,t.jsxs)("div",{className:"pp-child-copy",children:[(0,t.jsxs)("div",{className:"pp-name-line",children:[(0,t.jsx)("h3",{children:e.student.fullName}),(0,t.jsx)("span",{className:`pp-status-dot ${E(e.status)}`,title:B(e.status)})]}),(0,t.jsxs)("p",{children:[e.className,e.student.admissionNumber?` \xb7 ${e.student.admissionNumber}`:""]}),(0,t.jsxs)("div",{className:"pp-card-meta",children:[(0,t.jsx)("span",{children:e.relationship}),null!==a&&(0,t.jsxs)("span",{children:[a," years"]}),e.student.gender&&(0,t.jsx)("span",{children:e.student.gender})]})]}),(0,t.jsx)("button",{type:"button",className:"pp-row-more",onClick:a=>{a.stopPropagation(),eD(e)},"aria-label":`View ${e.student.fullName}`,children:"›"})]}),(0,t.jsxs)("div",{className:"pp-card-footer",children:[(0,t.jsx)("span",{children:e.organizationName}),(0,t.jsx)("strong",{children:B(e.status)})]})]},e.id)})}),!ez.length&&(0,t.jsx)(K,{icon:"\uD83E\uDDD2",title:e$.length?"No children match your filters":"No linked children found",text:e$.length?"Clear or adjust the current search and filters.":w||$.length?"The school has not linked a student to this parent profile yet.":"Your login is not connected to a permanent parent profile in this branch."})]}),"table"===ei&&(0,t.jsxs)("section",{className:"pp-table-card",children:[(0,t.jsxs)("div",{className:"pp-section-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Parent directory"}),(0,t.jsxs)("h3",{children:["Children (",ez.length,")"]})]}),(0,t.jsx)(W,{tone:"blue",children:"Read only"})]}),(0,t.jsx)("div",{className:"pp-table-scroll",children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Student"}),(0,t.jsx)("th",{children:"Class"}),(0,t.jsx)("th",{children:"Relationship"}),(0,t.jsx)("th",{children:"Gender"}),(0,t.jsx)("th",{children:"Age"}),(0,t.jsx)("th",{children:"Status"}),(0,t.jsx)("th",{"aria-label":"Action"})]})}),(0,t.jsxs)("tbody",{children:[ez.map(e=>{let a=F(e.student);return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsxs)("button",{type:"button",className:"pp-table-student",onClick:()=>eD(e),children:[(0,t.jsx)(V,{name:e.student.fullName,photo:e.photoUrl,primary:_}),(0,t.jsxs)("span",{children:[(0,t.jsx)("strong",{children:e.student.fullName}),(0,t.jsx)("small",{children:e.student.admissionNumber||"No admission number"})]})]})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("strong",{children:e.className}),(0,t.jsx)("small",{children:e.organizationName})]}),(0,t.jsx)("td",{children:e.relationship}),(0,t.jsx)("td",{children:e.student.gender||"Not set"}),(0,t.jsx)("td",{children:null===a?"Not set":a}),(0,t.jsx)("td",{children:(0,t.jsx)(W,{tone:E(e.status),children:B(e.status)})}),(0,t.jsx)("td",{children:(0,t.jsx)("button",{type:"button",className:"pp-table-action",onClick:()=>eD(e),children:"View"})})]},e.id)}),!ez.length&&(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:7,children:(0,t.jsx)(K,{icon:"\uD83E\uDDD2",title:"No children found",text:"No linked children match the current filters."})})})]})]})})]}),"summary"===ei&&(0,t.jsxs)("section",{className:"pp-summary-grid",children:[(0,t.jsx)(G,{title:"Children by Class",subtitle:"Class distribution",items:eT}),(0,t.jsx)(G,{title:"Relationship",subtitle:"Parent relationship",items:eL}),(0,t.jsx)(G,{title:"Student Status",subtitle:"Current standing",items:eM})]}),em&&(0,t.jsxs)("div",{className:"pp-layer",children:[(0,t.jsx)("button",{type:"button",className:"pp-overlay","aria-label":"Close filters",onClick:()=>eh(!1)}),(0,t.jsxs)("section",{className:"pp-sheet",children:[(0,t.jsx)("div",{className:"pp-sheet-handle"}),(0,t.jsxs)("div",{className:"pp-sheet-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"My Children"}),(0,t.jsx)("h2",{children:"Filter children"})]}),(0,t.jsx)("button",{type:"button",onClick:()=>eh(!1),"aria-label":"Close filters",children:"\xd7"})]}),(0,t.jsxs)("div",{className:"pp-form-grid",children:[(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Class"}),(0,t.jsxs)("select",{value:en,onChange:e=>eo(e.target.value),children:[(0,t.jsx)("option",{value:"all",children:"All classes"}),q.map(e=>(0,t.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Status"}),(0,t.jsxs)("select",{value:ed,onChange:e=>el(e.target.value),children:[(0,t.jsx)("option",{value:"all",children:"All statuses"}),(0,t.jsx)("option",{value:"active",children:"Active"}),(0,t.jsx)("option",{value:"graduated",children:"Graduated"}),(0,t.jsx)("option",{value:"transferred",children:"Transferred"}),(0,t.jsx)("option",{value:"withdrawn",children:"Withdrawn"})]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Relationship"}),(0,t.jsxs)("select",{value:ep,onChange:e=>ec(e.target.value),children:[(0,t.jsx)("option",{value:"all",children:"All relationships"}),eP.map(e=>(0,t.jsx)("option",{value:e,children:e},e))]})]})]}),(0,t.jsxs)("div",{className:"pp-sheet-actions",children:[(0,t.jsx)("button",{type:"button",className:"secondary",onClick:()=>{eo("all"),el("all"),ec("all")},children:"Clear"}),(0,t.jsx)("button",{type:"button",className:"primary",onClick:()=>eh(!1),children:"Apply"})]})]})]}),eu&&(0,t.jsxs)("div",{className:"pp-layer",children:[(0,t.jsx)("button",{type:"button",className:"pp-overlay","aria-label":"Close more options",onClick:()=>ex(!1)}),(0,t.jsxs)("section",{className:"pp-sheet compact",children:[(0,t.jsx)("div",{className:"pp-sheet-handle"}),(0,t.jsxs)("div",{className:"pp-sheet-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"View options"}),(0,t.jsx)("h2",{children:"More"})]}),(0,t.jsx)("button",{type:"button",onClick:()=>ex(!1),"aria-label":"Close more options",children:"\xd7"})]}),(0,t.jsxs)("div",{className:"pp-menu-list",children:[(0,t.jsxs)("button",{type:"button",className:"cards"===ei?"active":"",onClick:()=>{es("cards"),ex(!1)},children:[(0,t.jsx)("span",{children:"▦"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Cards"}),(0,t.jsx)("small",{children:"Compact mobile-friendly child list"})]}),(0,t.jsx)("b",{children:"›"})]}),(0,t.jsxs)("button",{type:"button",className:"table"===ei?"active":"",onClick:()=>{es("table"),ex(!1)},children:[(0,t.jsx)("span",{children:"☷"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Table"}),(0,t.jsx)("small",{children:"Detailed desktop and tablet view"})]}),(0,t.jsx)("b",{children:"›"})]}),(0,t.jsxs)("button",{type:"button",className:"summary"===ei?"active":"",onClick:()=>{es("summary"),ex(!1)},children:[(0,t.jsx)("span",{children:"◫"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Summary"}),(0,t.jsx)("small",{children:"Class, relationship, and status breakdowns"})]}),(0,t.jsx)("b",{children:"›"})]}),(0,t.jsxs)("button",{type:"button",onClick:async()=>{ex(!1),await ek(),ey("success","Children refreshed.")},children:[(0,t.jsx)("span",{children:"↻"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Refresh"}),(0,t.jsx)("small",{children:"Reload linked children and their details"})]}),(0,t.jsx)("b",{children:"›"})]})]})]})]}),eg&&(0,t.jsxs)("div",{className:"pp-drawer-layer",children:[(0,t.jsx)("button",{type:"button",className:"pp-drawer-overlay","aria-label":"Close child details",onClick:()=>eb(null)}),(0,t.jsxs)("aside",{className:"pp-drawer",children:[(0,t.jsxs)("div",{className:"pp-drawer-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"My Child"}),(0,t.jsx)("h2",{children:"Student details"})]}),(0,t.jsx)("button",{type:"button",onClick:()=>eb(null),"aria-label":"Close child details",children:"\xd7"})]}),(0,t.jsxs)("section",{className:"pp-profile-card",children:[(0,t.jsx)(V,{name:eg.student.fullName,photo:eg.photoUrl,primary:_,size:"large"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:eg.student.fullName}),(0,t.jsxs)("p",{children:[eg.className,eg.student.admissionNumber?` \xb7 ${eg.student.admissionNumber}`:""]}),(0,t.jsxs)("div",{className:"pp-chip-row",children:[(0,t.jsx)(W,{tone:E(eg.status),children:B(eg.status)}),(0,t.jsx)(W,{tone:"blue",children:eg.relationship}),eg.isPrimary&&(0,t.jsx)(W,{tone:"purple",children:"Primary link"})]})]})]}),(0,t.jsxs)("section",{className:"pp-detail-section",children:[(0,t.jsx)("div",{className:"pp-section-head",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"School information"}),(0,t.jsx)("h3",{children:"Academic profile"})]})}),(0,t.jsxs)("div",{className:"pp-detail-grid",children:[(0,t.jsxs)("article",{children:[(0,t.jsx)("span",{children:"Class"}),(0,t.jsx)("strong",{children:eg.className})]}),(0,t.jsxs)("article",{children:[(0,t.jsx)("span",{children:"Organization"}),(0,t.jsx)("strong",{children:eg.organizationName})]}),(0,t.jsxs)("article",{children:[(0,t.jsx)("span",{children:"Admission number"}),(0,t.jsx)("strong",{children:eg.student.admissionNumber||"Not set"})]}),(0,t.jsxs)("article",{children:[(0,t.jsx)("span",{children:"Enrollment"}),(0,t.jsx)("strong",{children:eg.enrollment?B(eg.enrollment.status):"No active enrollment"})]})]})]}),(0,t.jsxs)("section",{className:"pp-detail-section",children:[(0,t.jsx)("div",{className:"pp-section-head",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Personal information"}),(0,t.jsx)("h3",{children:"Student profile"})]})}),(0,t.jsxs)("div",{className:"pp-detail-list",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"Gender"}),(0,t.jsx)("strong",{children:eg.student.gender||"Not set"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"Age"}),(0,t.jsx)("strong",{children:F(eg.student)??"Not set"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"Date of birth"}),(0,t.jsx)("strong",{children:(e=>{if(!e)return"Not set";let a=new Date(e);return Number.isFinite(a.getTime())?new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(a):e})(eg.student.dateOfBirth)})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"Email"}),(0,t.jsx)("strong",{children:eg.student.email||"Not set"})]})]})]}),(0,t.jsxs)("section",{className:"pp-readonly-note",children:[(0,t.jsx)("span",{children:"\uD83D\uDD12"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"School-managed information"}),(0,t.jsx)("p",{children:"This page is read-only. Contact the school if any student detail needs to be corrected."})]})]})]})]}),ef&&(0,t.jsxs)("div",{className:`pp-toast ${ef.tone}`,children:[(0,t.jsx)("span",{children:"success"===ef.tone?"✓":"error"===ef.tone?"!":"i"}),(0,t.jsx)("p",{children:ef.message})]})]}):(0,t.jsxs)("main",{className:"pp-page",style:{"--pp-primary":_,"--pp-primary-text":I},children:[(0,t.jsx)("style",{children:H}),(0,t.jsxs)("section",{className:"pp-state-card",children:[(0,t.jsx)("h2",{children:"Assigned school branch required"}),(0,t.jsx)("p",{children:"Your parent membership must be connected to a school branch before linked children can be shown."})]})]}):(0,t.jsxs)("main",{className:"pp-page",style:{"--pp-primary":_,"--pp-primary-text":I},children:[(0,t.jsx)("style",{children:H}),(0,t.jsxs)("section",{className:"pp-state-card",children:[(0,t.jsx)("h2",{children:"Redirecting to login..."}),(0,t.jsx)("p",{children:"You must sign in before viewing your children."})]})]})},childAttendance:function(){let e=(0,c.useRouter)(),a=(0,q.p)(),{loading:r,setLoading:i}=(0,Z.J)(),{accountId:s,authenticated:n,loading:h}=(0,o.F)(),{settings:u,loading:x}=(0,d.t)(),{activeSchool:g,activeSchoolId:b,activeBranch:f,activeBranchId:v,loading:j}=(0,l.c)(),{activeMembership:y}=(0,m.A)(),w=(0,p.useMemo)(()=>er("eleeveon_open_workspace"),[]),N=(0,p.useMemo)(()=>er("activeMembership"),[]),k=w?.membership||y||N||{},_=et(w?.schoolId,k.schoolId,k.school?.id,b,g?.id,u?.schoolId,ea("activeSchoolId")),I=et(w?.branchId,k.branchId,k.schoolBranchId,k.branch?.id,v,f?.id,u?.branchId,ea("activeBranchId")),S=et(k.parentId,k.parentLocalId,k.parent?.id,ea("activeParentId")),C=String(k.role||"").toLowerCase(),$=(0,p.useMemo)(()=>{let e=k.permissions;return Array.isArray(e)?e.map(String):e&&"object"==typeof e?Object.entries(e).filter(([,e])=>!!e).map(([e])=>e):[]},[k.permissions]),z="parent"===C||$.some(e=>["attendance.view","attendance.read","child_attendance.view","parent.attendance.view"].includes(e)),A=u?.primaryColor||"var(--primary-color, #2563eb)",[P,T]=(0,p.useState)([]),[L,D]=(0,p.useState)([]),[R,B]=(0,p.useState)([]),[E,O]=(0,p.useState)([]),[F,U]=(0,p.useState)([]),[V,W]=(0,p.useState)([]),[K,G]=(0,p.useState)([]),[H,Y]=(0,p.useState)([]),[ec,em]=(0,p.useState)([]),[eh,eu]=(0,p.useState)(""),[ex,eg]=(0,p.useState)(String(u?.currentAcademicStructureId||"")),[eb,ef]=(0,p.useState)(String(u?.currentAcademicPeriodId||"")),[ev,ej]=(0,p.useState)("all"),[ey,ew]=(0,p.useState)(""),[eN,ek]=(0,p.useState)(""),[e_,eI]=(0,p.useState)(""),[eS,eC]=(0,p.useState)("cards"),[e$,ez]=(0,p.useState)(!1),[eA,eP]=(0,p.useState)(!1),[eM,eT]=(0,p.useState)(!1),eL=(0,M.D)({accountId:s,ownerTable:"students",rows:L,fields:[{fieldKey:"photo",mediaIdKey:"photoMediaId"},{fieldKey:"coverPhoto",mediaIdKey:"coverPhotoMediaId"}]}),eD=e=>(!e.accountId||e.accountId===s)&&(!e.schoolId||Q(e.schoolId,_))&&(!e.branchId||Q(e.branchId,I))&&!e.isDeleted,eR=()=>{T([]),D([]),B([]),O([]),U([]),W([]),G([]),Y([]),em([])},eB=async()=>{if(!n||!s||!_||!I||!z){eR(),i(!1);return}try{i(!0);let[e,a,r,t,s,n,o,d,l]=await Promise.all([ee("parents")?.toArray?.()||[],ee("students")?.toArray?.()||[],ee("studentParents")?.toArray?.()||[],ee("classes")?.toArray?.()||[],ee("academicStructures")?.toArray?.()||[],ee("academicPeriods")?.toArray?.()||[],ee("studentEnrollments")?.toArray?.()||[],ee("attendance")?.toArray?.()||[],ee("studentAttendanceSummaries")?.toArray?.()||[]]);T(e.filter(e=>eD(e))),D(a.filter(e=>eD(e)&&!["withdrawn","graduated"].includes(String(e.status||"").toLowerCase())).sort((e,a)=>e.fullName.localeCompare(a.fullName))),B(r.filter(e=>eD(e))),O(t.filter(e=>eD(e)&&ei(e)).sort((e,a)=>e.name.localeCompare(a.name))),U(s.filter(e=>eD(e)&&ei(e)).sort((e,a)=>a.startDate.localeCompare(e.startDate))),W(n.filter(e=>eD(e)&&ei(e)).sort((e,a)=>Number(e.order||0)-Number(a.order||0))),G(o.filter(e=>eD(e))),Y(d.filter(e=>eD(e))),em(l.filter(e=>eD(e)))}catch(e){console.error("Failed to load child attendance:",e),eR()}finally{i(!1)}};(0,p.useEffect)(()=>{!h&&!j&&(n&&s?_&&I||e.replace("/account"):e.replace("/login"))},[h,j,n,s,_,I,e]),(0,p.useEffect)(()=>{h||x||j||eB()},[n,s,_,I,h,x,j,a,z]);let eE=(0,p.useMemo)(()=>new Map(E.map(e=>[X(e.id),e])),[E]),eO=(0,p.useMemo)(()=>new Map(F.map(e=>[X(e.id),e])),[F]),eF=(0,p.useMemo)(()=>new Map(V.map(e=>[X(e.id),e])),[V]),eU=(0,p.useMemo)(()=>{if(S)return S;let e=String(k.email||k.user?.email||"").toLowerCase(),a=String(k.phone||k.user?.phone||"").replace(/\s+/g,""),r=P.find(r=>{let t=String(r.email||"").toLowerCase(),i=String(r.phone||"").replace(/\s+/g,"");return e&&t===e||a&&i===a});return X(r?.id)},[S,k,P]),eV=(0,p.useMemo)(()=>{if(!eU)return[];let e=new Set(R.filter(e=>Q(e.parentId,eU)).map(e=>X(e.studentId)));return L.filter(a=>e.has(X(a.id))).map(e=>{let a,r=X(e.id),t=K.find(e=>Q(e.studentId,r)&&"active"===e.status),i=X(t?.classId)||X(e.currentClassId);return{student:e,id:r,name:e.fullName||"Unnamed child",admissionNumber:e.admissionNumber||"No admission number",className:eE.get(i)?.name||"Class not assigned",photo:eL[r]?.photo||(!(a=String(e.photo||""))||a.startsWith("blob:")?void 0:a)}}).sort((e,a)=>e.name.localeCompare(a.name))},[eU,R,L,K,eE,eL]);(0,p.useEffect)(()=>{!eh&&eV.length&&eu(eV[0].id),eh&&!eV.some(e=>e.id===eh)&&eu(eV[0]?.id||"")},[eV,eh]),(0,p.useEffect)(()=>{!ex&&u?.currentAcademicStructureId&&eg(String(u.currentAcademicStructureId)),!eb&&u?.currentAcademicPeriodId&&ef(String(u.currentAcademicPeriodId))},[ex,eb,u?.currentAcademicStructureId,u?.currentAcademicPeriodId]);let eW=(0,p.useMemo)(()=>ex?V.filter(e=>Q(e.academicStructureId,ex)):V,[V,ex]);(0,p.useEffect)(()=>{eb&&!eW.some(e=>Q(e.id,eb))&&ef(eW[0]?X(eW[0].id):"")},[eW,eb]),(0,p.useEffect)(()=>{let e=el(eF.get(eb));ek(e.from),eI(e.to)},[eb,eF]);let eK=eV.find(e=>e.id===eh),eG=eO.get(ex),eH=eF.get(eb),eY=(0,p.useMemo)(()=>{if(!eh)return[];let e=ey.trim().toLowerCase();return H.filter(a=>!a.isDeleted&&!!Q(a.studentId,eh)&&(!ex||!!Q(a.academicStructureId,ex))&&(!eb||!!Q(a.academicPeriodId,eb))&&(!eN||!(a.date<eN))&&(!e_||!(a.date>e_))&&("all"===ev||a.status===ev)&&(!e||`${a.date} ${eo(a.status)} ${a.note||""}`.toLowerCase().includes(e))).map(e=>({id:X(e.id),date:e.date,status:e.status,note:e.note,className:eE.get(X(e.classId))?.name||"Class",periodName:eF.get(X(e.academicPeriodId))?.name||"Period"})).sort((e,a)=>a.date.localeCompare(e.date))},[eh,H,ex,eb,eN,e_,ev,ey,eE,eF]),eJ=(0,p.useMemo)(()=>{let e=ec.filter(e=>!e.isDeleted&&Q(e.studentId,eh)&&(!ex||Q(e.academicStructureId,ex))&&(!eb||Q(e.academicPeriodId,eb)));if(!e.length)return null;let a=e.reduce((e,a)=>e+Number(a.daysOpened||0),0),r=e.reduce((e,a)=>e+Number(a.daysPresent||0),0);return{opened:a,present:r,absent:e.reduce((e,a)=>e+Number(a.daysAbsent||0),0),late:e.reduce((e,a)=>e+Number(a.timesLate||0),0),percent:a?Math.round(r/a*100):0,note:e.find(e=>e.note)?.note}},[ec,eh,ex,eb]),eq=(0,p.useMemo)(()=>{let e=e=>eY.filter(a=>a.status===e).length,a=e("present"),r=e("absent"),t=e("late"),i=eY.filter(e=>["excused","medical","sports","trip"].includes(e.status)).length,s=a+t+e("remote"),n=eY.filter(e=>"holiday"!==e.status).length;return{total:eY.length,present:a,absent:r,late:t,excused:i,rate:n?Math.round(s/n*100):0}},[eY]),eZ=(0,p.useMemo)(()=>{let e=new Map;return eY.forEach(a=>{let r=a.date.slice(0,7),t=e.get(r)||{month:r,total:0,attended:0,absent:0,late:0};"holiday"!==a.status&&(t.total+=1),["present","late","remote"].includes(a.status)&&(t.attended+=1),"absent"===a.status&&(t.absent+=1),"late"===a.status&&(t.late+=1),e.set(r,t)}),Array.from(e.values()).sort((e,a)=>a.month.localeCompare(e.month))},[eY]),eX=[eh,ex,eb,eN,e_,"all"!==ev?ev:""].filter(Boolean).length,eQ=()=>{eg(String(u?.currentAcademicStructureId||"")),ef(String(u?.currentAcademicPeriodId||"")),ej("all"),ew("");let e=el(eF.get(eb));ek(e.from),eI(e.to)};return h||x||j||r?(0,t.jsxs)("div",{className:`jsx-${ep.__hash} attendance-page loading-page`,children:[(0,t.jsx)("div",{className:`jsx-${ep.__hash} spinner`}),(0,t.jsx)("span",{className:`jsx-${ep.__hash}`,children:"Loading attendance…"}),(0,t.jsx)(J(),{id:ep.__hash,children:ep})]}):z?(0,t.jsxs)("div",{style:{"--primary":A},className:`jsx-${ep.__hash} attendance-page`,children:[(0,t.jsxs)("div",{className:`jsx-${ep.__hash} toolbar`,children:[(0,t.jsxs)("div",{className:`jsx-${ep.__hash} search-box`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash} search-icon`,children:"⌕"}),(0,t.jsx)("input",{value:ey,onChange:e=>ew(e.target.value),placeholder:"Search dates, status or notes…","aria-label":"Search attendance",className:`jsx-${ep.__hash}`}),ey?(0,t.jsx)("button",{onClick:()=>ew(""),"aria-label":"Clear search",className:`jsx-${ep.__hash} clear-search`,children:"\xd7"}):null]}),(0,t.jsxs)("button",{onClick:()=>ez(!0),"aria-label":"Attendance filters",className:`jsx-${ep.__hash} icon-button ${e$?"active":""}`,children:["☷",eX?(0,t.jsx)("span",{className:`jsx-${ep.__hash} button-badge`,children:eX}):null]}),(0,t.jsx)("button",{onClick:()=>eP(!0),"aria-label":"More options",className:`jsx-${ep.__hash} icon-button`,children:"⋯"})]}),eV.length>1?(0,t.jsx)("div",{"aria-label":"Choose child",className:`jsx-${ep.__hash} child-strip`,children:eV.map(e=>(0,t.jsxs)("button",{onClick:()=>eu(e.id),className:`jsx-${ep.__hash} child-chip ${e.id===eh?"selected":""}`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash} mini-avatar`,children:e.photo?(0,t.jsx)("img",{src:e.photo,alt:"",className:`jsx-${ep.__hash}`}):e.name.charAt(0).toUpperCase()}),(0,t.jsxs)("span",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${ep.__hash}`,children:e.name}),(0,t.jsx)("small",{className:`jsx-${ep.__hash}`,children:e.className})]})]},e.id))}):null,eK?(0,t.jsxs)("section",{className:`jsx-${ep.__hash} child-header`,children:[(0,t.jsx)("div",{className:`jsx-${ep.__hash} child-avatar`,children:eK.photo?(0,t.jsx)("img",{src:eK.photo,alt:eK.name,className:`jsx-${ep.__hash}`}):eK.name.charAt(0).toUpperCase()}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash} child-copy`,children:[(0,t.jsxs)("div",{className:`jsx-${ep.__hash} child-name-row`,children:[(0,t.jsx)("h1",{className:`jsx-${ep.__hash}`,children:eK.name}),(0,t.jsx)("button",{onClick:()=>eT(!0),"aria-label":"Data status",className:`jsx-${ep.__hash} sync-dot`})]}),(0,t.jsxs)("p",{className:`jsx-${ep.__hash}`,children:[eK.admissionNumber," \xb7 ",eK.className]}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash} context-line`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash}`,children:eG?.name||"Academic year"}),(0,t.jsx)("i",{className:`jsx-${ep.__hash}`,children:"•"}),(0,t.jsx)("span",{className:`jsx-${ep.__hash}`,children:eH?.name||"All periods"})]})]}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash} rate-ring ${eq.rate>=75?"good":eq.rate>=50?"fair":"low"}`,children:[(0,t.jsxs)("strong",{className:`jsx-${ep.__hash}`,children:[eJ?.percent??eq.rate,"%"]}),(0,t.jsx)("small",{className:`jsx-${ep.__hash}`,children:"attendance"})]})]}):null,eK?(0,t.jsxs)("div",{className:`jsx-${ep.__hash} summary-grid`,children:[(0,t.jsxs)("article",{className:`jsx-${ep.__hash} summary-card`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash} summary-mark positive`,children:"✓"}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${ep.__hash}`,children:eJ?.present??eq.present}),(0,t.jsx)("small",{className:`jsx-${ep.__hash}`,children:"Present"})]})]}),(0,t.jsxs)("article",{className:`jsx-${ep.__hash} summary-card`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash} summary-mark negative`,children:"\xd7"}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${ep.__hash}`,children:eJ?.absent??eq.absent}),(0,t.jsx)("small",{className:`jsx-${ep.__hash}`,children:"Absent"})]})]}),(0,t.jsxs)("article",{className:`jsx-${ep.__hash} summary-card`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash} summary-mark warning`,children:"◷"}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${ep.__hash}`,children:eJ?.late??eq.late}),(0,t.jsx)("small",{className:`jsx-${ep.__hash}`,children:"Late"})]})]}),(0,t.jsxs)("article",{className:`jsx-${ep.__hash} summary-card`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash} summary-mark info`,children:"+"}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${ep.__hash}`,children:eq.excused}),(0,t.jsx)("small",{className:`jsx-${ep.__hash}`,children:"Excused"})]})]})]}):null,eU?eV.length?"analytics"===eS?(0,t.jsxs)("section",{className:`jsx-${ep.__hash} analytics-view`,children:[(0,t.jsxs)("div",{className:`jsx-${ep.__hash} analytics-card overview-card`,children:[(0,t.jsxs)("div",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash}`,children:"Attendance rate"}),(0,t.jsxs)("strong",{className:`jsx-${ep.__hash}`,children:[eJ?.percent??eq.rate,"%"]}),(0,t.jsxs)("small",{className:`jsx-${ep.__hash}`,children:[eJ?.opened??eq.total," recorded school days"]})]}),(0,t.jsx)("div",{style:{"--value":`${eJ?.percent??eq.rate}%`},className:`jsx-${ep.__hash} donut`,children:(0,t.jsxs)("span",{className:`jsx-${ep.__hash}`,children:[eJ?.percent??eq.rate,"%"]})})]}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash} analytics-card`,children:[(0,t.jsx)("div",{className:`jsx-${ep.__hash} section-heading`,children:(0,t.jsxs)("div",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${ep.__hash}`,children:"Monthly pattern"}),(0,t.jsx)("small",{className:`jsx-${ep.__hash}`,children:"Based on the selected range"})]})}),eZ.length?(0,t.jsx)("div",{className:`jsx-${ep.__hash} month-list`,children:eZ.map(e=>{var a;let r,i=e.total?Math.round(e.attended/e.total*100):0;return(0,t.jsxs)("div",{className:`jsx-${ep.__hash} month-row`,children:[(0,t.jsxs)("div",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${ep.__hash}`,children:(a=e.month,(r=es(`${a}-01`))?new Intl.DateTimeFormat("en",{month:"short",year:"numeric"}).format(r):a)}),(0,t.jsxs)("small",{className:`jsx-${ep.__hash}`,children:[e.absent," absent \xb7 ",e.late," late"]})]}),(0,t.jsx)("div",{className:`jsx-${ep.__hash} month-progress`,children:(0,t.jsx)("span",{style:{width:`${i}%`},className:`jsx-${ep.__hash}`})}),(0,t.jsxs)("b",{className:`jsx-${ep.__hash}`,children:[i,"%"]})]},e.month)})}):(0,t.jsx)("p",{className:`jsx-${ep.__hash} muted-empty`,children:"No monthly attendance records match the filters."})]}),eJ?.note?(0,t.jsxs)("div",{className:`jsx-${ep.__hash} analytics-card note-card`,children:[(0,t.jsx)("strong",{className:`jsx-${ep.__hash}`,children:"School note"}),(0,t.jsx)("p",{className:`jsx-${ep.__hash}`,children:eJ.note})]}):null]}):eY.length?"table"===eS?(0,t.jsxs)("div",{className:`jsx-${ep.__hash} table-shell`,children:[(0,t.jsx)("div",{className:`jsx-${ep.__hash} table-title`,children:(0,t.jsxs)("strong",{className:`jsx-${ep.__hash}`,children:["Attendance history (",eY.length,")"]})}),(0,t.jsx)("div",{className:`jsx-${ep.__hash} table-scroll`,children:(0,t.jsxs)("table",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("thead",{className:`jsx-${ep.__hash}`,children:(0,t.jsxs)("tr",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("th",{className:`jsx-${ep.__hash}`,children:"Date"}),(0,t.jsx)("th",{className:`jsx-${ep.__hash}`,children:"Status"}),(0,t.jsx)("th",{className:`jsx-${ep.__hash}`,children:"Class"}),(0,t.jsx)("th",{className:`jsx-${ep.__hash}`,children:"Note"})]})}),(0,t.jsx)("tbody",{className:`jsx-${ep.__hash}`,children:eY.map(e=>(0,t.jsxs)("tr",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("td",{className:`jsx-${ep.__hash}`,children:en(e.date)}),(0,t.jsx)("td",{className:`jsx-${ep.__hash}`,children:(0,t.jsx)("span",{className:`jsx-${ep.__hash} status-pill ${ed(e.status)}`,children:eo(e.status)})}),(0,t.jsx)("td",{className:`jsx-${ep.__hash}`,children:e.className}),(0,t.jsx)("td",{className:`jsx-${ep.__hash}`,children:e.note||"—"})]},e.id||`${e.date}-${e.status}`))})]})})]}):(0,t.jsx)("div",{className:`jsx-${ep.__hash} attendance-list`,children:eY.map(e=>{var a;return(0,t.jsxs)("article",{className:`jsx-${ep.__hash} attendance-card`,children:[(0,t.jsx)("div",{className:`jsx-${ep.__hash} status-symbol ${ed(e.status)}`,children:"present"===(a=e.status)?"✓":"late"===a?"◷":"absent"===a?"\xd7":["excused","medical"].includes(a)?"+":["trip","sports","remote"].includes(a)?"↗":"holiday"===a?"—":"•"}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash} attendance-main`,children:[(0,t.jsxs)("div",{className:`jsx-${ep.__hash} attendance-topline`,children:[(0,t.jsx)("strong",{className:`jsx-${ep.__hash}`,children:en(e.date,{weekday:"short",day:"2-digit",month:"short"})}),(0,t.jsx)("span",{className:`jsx-${ep.__hash} status-pill ${ed(e.status)}`,children:eo(e.status)})]}),(0,t.jsxs)("p",{className:`jsx-${ep.__hash}`,children:[e.className," \xb7 ",e.periodName]}),e.note?(0,t.jsx)("small",{className:`jsx-${ep.__hash} attendance-note`,children:e.note}):null]})]},e.id||`${e.date}-${e.status}`)})}):eK?(0,t.jsxs)("div",{className:`jsx-${ep.__hash} empty-state compact-empty`,children:[(0,t.jsx)("div",{className:`jsx-${ep.__hash} empty-icon`,children:"○"}),(0,t.jsx)("h2",{className:`jsx-${ep.__hash}`,children:"No attendance records"}),(0,t.jsx)("p",{className:`jsx-${ep.__hash}`,children:"Try another period, date range or attendance status."}),(0,t.jsx)("button",{onClick:eQ,className:`jsx-${ep.__hash} primary-button`,children:"Reset filters"})]}):null:(0,t.jsxs)("div",{className:`jsx-${ep.__hash} empty-state`,children:[(0,t.jsx)("div",{className:`jsx-${ep.__hash} empty-icon`,children:"♧"}),(0,t.jsx)("h2",{className:`jsx-${ep.__hash}`,children:"No linked children"}),(0,t.jsx)("p",{className:`jsx-${ep.__hash}`,children:"No active student-parent relationship was found for this parent profile."})]}):(0,t.jsxs)("div",{className:`jsx-${ep.__hash} empty-state`,children:[(0,t.jsx)("div",{className:`jsx-${ep.__hash} empty-icon`,children:"⌁"}),(0,t.jsx)("h2",{className:`jsx-${ep.__hash}`,children:"Parent profile not linked"}),(0,t.jsx)("p",{className:`jsx-${ep.__hash}`,children:"This login needs a parentId or parentLocalId on its active membership."})]}),e$?(0,t.jsx)("div",{role:"presentation",onMouseDown:()=>ez(!1),className:`jsx-${ep.__hash} sheet-layer`,children:(0,t.jsxs)("aside",{role:"dialog","aria-modal":"true",onMouseDown:e=>e.stopPropagation(),className:`jsx-${ep.__hash} sheet`,children:[(0,t.jsxs)("div",{className:`jsx-${ep.__hash} sheet-head`,children:[(0,t.jsxs)("div",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${ep.__hash}`,children:"Attendance filters"}),(0,t.jsx)("small",{className:`jsx-${ep.__hash}`,children:"Choose the child and reporting period"})]}),(0,t.jsx)("button",{onClick:()=>ez(!1),className:`jsx-${ep.__hash}`,children:"\xd7"})]}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash} sheet-body`,children:[(0,t.jsxs)("label",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash}`,children:"Child"}),(0,t.jsx)("select",{value:eh,onChange:e=>eu(e.target.value),className:`jsx-${ep.__hash}`,children:eV.map(e=>(0,t.jsx)("option",{value:e.id,className:`jsx-${ep.__hash}`,children:e.name},e.id))})]}),(0,t.jsxs)("label",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash}`,children:"Academic structure"}),(0,t.jsxs)("select",{value:ex,onChange:e=>{eg(e.target.value),ef("")},className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("option",{value:"",className:`jsx-${ep.__hash}`,children:"All structures"}),F.map(e=>(0,t.jsx)("option",{value:X(e.id),className:`jsx-${ep.__hash}`,children:e.name},X(e.id)))]})]}),(0,t.jsxs)("label",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash}`,children:"Academic period"}),(0,t.jsxs)("select",{value:eb,onChange:e=>ef(e.target.value),className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("option",{value:"",className:`jsx-${ep.__hash}`,children:"All periods"}),eW.map(e=>(0,t.jsx)("option",{value:X(e.id),className:`jsx-${ep.__hash}`,children:e.name},X(e.id)))]})]}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash} two-column`,children:[(0,t.jsxs)("label",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash}`,children:"From"}),(0,t.jsx)("input",{type:"date",value:eN,onChange:e=>ek(e.target.value),className:`jsx-${ep.__hash}`})]}),(0,t.jsxs)("label",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash}`,children:"To"}),(0,t.jsx)("input",{type:"date",value:e_,onChange:e=>eI(e.target.value),className:`jsx-${ep.__hash}`})]})]}),(0,t.jsxs)("label",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash}`,children:"Status"}),(0,t.jsxs)("select",{value:ev,onChange:e=>ej(e.target.value),className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("option",{value:"all",className:`jsx-${ep.__hash}`,children:"All statuses"}),["present","absent","late","excused","medical","sports","trip","holiday","remote","suspended"].map(e=>(0,t.jsx)("option",{value:e,className:`jsx-${ep.__hash}`,children:eo(e)},e))]})]})]}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash} sheet-actions`,children:[(0,t.jsx)("button",{onClick:eQ,className:`jsx-${ep.__hash} secondary-button`,children:"Reset"}),(0,t.jsx)("button",{onClick:()=>ez(!1),className:`jsx-${ep.__hash} primary-button`,children:"Apply"})]})]})}):null,eA?(0,t.jsx)("div",{role:"presentation",onMouseDown:()=>eP(!1),className:`jsx-${ep.__hash} sheet-layer`,children:(0,t.jsxs)("aside",{role:"dialog","aria-modal":"true",onMouseDown:e=>e.stopPropagation(),className:`jsx-${ep.__hash} sheet short-sheet`,children:[(0,t.jsxs)("div",{className:`jsx-${ep.__hash} sheet-head`,children:[(0,t.jsxs)("div",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${ep.__hash}`,children:"View options"}),(0,t.jsx)("small",{className:`jsx-${ep.__hash}`,children:"Change how attendance is displayed"})]}),(0,t.jsx)("button",{onClick:()=>eP(!1),className:`jsx-${ep.__hash}`,children:"\xd7"})]}),(0,t.jsx)("div",{className:`jsx-${ep.__hash} view-options`,children:["cards","table","analytics"].map(e=>(0,t.jsxs)("button",{onClick:()=>{eC(e),eP(!1)},className:`jsx-${ep.__hash} `+((eS===e?"selected":"")||""),children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash}`,children:"cards"===e?"▤":"table"===e?"▦":"⌁"}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${ep.__hash}`,children:e.charAt(0).toUpperCase()+e.slice(1)}),(0,t.jsx)("small",{className:`jsx-${ep.__hash}`,children:"cards"===e?"Mobile-friendly history":"table"===e?"Compact detailed rows":"Rates and monthly pattern"})]}),eS===e?(0,t.jsx)("b",{className:`jsx-${ep.__hash}`,children:"✓"}):null]},e))})]})}):null,eM?(0,t.jsx)("div",{role:"presentation",onMouseDown:()=>eT(!1),className:`jsx-${ep.__hash} sheet-layer`,children:(0,t.jsxs)("aside",{role:"dialog","aria-modal":"true",onMouseDown:e=>e.stopPropagation(),className:`jsx-${ep.__hash} sheet short-sheet`,children:[(0,t.jsxs)("div",{className:`jsx-${ep.__hash} sheet-head`,children:[(0,t.jsxs)("div",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${ep.__hash}`,children:"Attendance data"}),(0,t.jsx)("small",{className:`jsx-${ep.__hash}`,children:"Offline-first parent view"})]}),(0,t.jsx)("button",{onClick:()=>eT(!1),className:`jsx-${ep.__hash}`,children:"\xd7"})]}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash} status-panel`,children:[(0,t.jsx)("span",{className:`jsx-${ep.__hash} large-dot`}),(0,t.jsxs)("div",{className:`jsx-${ep.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${ep.__hash}`,children:"Available on this device"}),(0,t.jsx)("p",{className:`jsx-${ep.__hash}`,children:"Attendance is read from the latest local school data. New records appear after synchronization."})]})]})]})}):null,(0,t.jsx)(J(),{id:ep.__hash,children:ep})]}):(0,t.jsxs)("div",{style:{"--primary":A},className:`jsx-${ep.__hash} attendance-page empty-page`,children:[(0,t.jsx)("div",{className:`jsx-${ep.__hash} empty-icon`,children:"!"}),(0,t.jsx)("h2",{className:`jsx-${ep.__hash}`,children:"Attendance unavailable"}),(0,t.jsx)("p",{className:`jsx-${ep.__hash}`,children:"Your parent account does not currently have access to attendance."}),(0,t.jsx)(J(),{id:ep.__hash,children:ep})]})},myChildReport:function(){var e,a;let r,i,s,n,u=(0,q.p)(),x=(0,c.useRouter)(),{accountId:g,loading:b,authenticated:f}=(0,o.F)(),{settings:v,loading:j}=(0,d.t)(),{activeSchool:y,activeSchoolId:w,activeBranch:N,activeBranchId:k,loading:_}=(0,l.c)(),{activeMembership:I}=(0,m.A)(),S=(0,p.useMemo)(()=>e$("eleeveon_open_workspace"),[]),C=(0,p.useMemo)(()=>S?.membership||I||ez()||{},[I,S?.membership]),$=eA(C?.parentId,C?.parentLocalId,C?.parent?.id,S?.parentId,eC("activeParentId")),z="parent"===String(C?.role||S?.role||"").toLowerCase(),A=(e={openWorkspace:S,activeMembership:I,activeSchoolId:w,activeSchool:y,settings:v},r=ez(),i=e.openWorkspace?.membership||e.activeMembership||r||null,eA(e.openWorkspace?.schoolId,i?.schoolId,i?.school?.id,e.activeSchoolId,e.activeSchool?.id,e.settings?.schoolId,eC("activeSchoolId"))),P=(a={openWorkspace:S,activeMembership:I,activeBranchId:k,activeBranch:N,settings:v},s=ez(),n=a.openWorkspace?.membership||a.activeMembership||s||null,eA(a.openWorkspace?.branchId,n?.branchId,n?.schoolBranchId,n?.branch?.id,a.activeBranchId,a.activeBranch?.id,a.settings?.branchId,eC("activeBranchId"))),M=v?.primaryColor||"var(--primary-color, #2563eb)",T=eS(v?.currentAcademicStructureId)||void 0,L=eS(v?.currentAcademicPeriodId)||void 0,{loading:D,setLoading:R}=(0,Z.J)(),[B,E]=(0,p.useState)("student-report"),[O,F]=(0,p.useState)(""),[U,V]=(0,p.useState)(!1),[W,K]=(0,p.useState)(!1),[G,H]=(0,p.useState)({branchId:P||void 0,academicStructureId:T,academicPeriodId:L,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"}),[Y,J]=(0,p.useState)([]),[X,Q]=(0,p.useState)([]),[ee,ea]=(0,p.useState)([]),[er,et]=(0,p.useState)([]),[ei,es]=(0,p.useState)([]),[en,eo]=(0,p.useState)([]),[ed,el]=(0,p.useState)([]),[ep,em]=(0,p.useState)([]),[eE,eO]=(0,p.useState)([]),[eF,eU]=(0,p.useState)([]),[eV,eW]=(0,p.useState)([]),[eK,eG]=(0,p.useState)([]),[eH,eY]=(0,p.useState)([]),[eJ,eq]=(0,p.useState)([]),[eZ,eX]=(0,p.useState)([]),[eQ,e0]=(0,p.useState)([]),[e1,e2]=(0,p.useState)([]),[e4,e8]=(0,p.useState)([]),[e5,e9]=(0,p.useState)([]),[e3,e6]=(0,p.useState)([]),[e7,ae]=(0,p.useState)([]),[aa,ar]=(0,p.useState)([]),[at,ai]=(0,p.useState)([]),[as,an]=(0,p.useState)([]),[ao,ad]=(0,p.useState)([]),[al,ap]=(0,p.useState)([]),[ac,am]=(0,p.useState)([]),[ah,au]=(0,p.useState)([]),[ax,ag]=(0,p.useState)([]);(0,p.useEffect)(()=>{if(!b&&!_&&(!f||!g))return void x.replace("/login")},[b,_,f,g,A,P,x]),(0,p.useEffect)(()=>()=>{ax.forEach(ec.hZ)},[ax]);let ab=()=>{ax.forEach(ec.hZ),ag([]),J([]),Q([]),ea([]),et([]),es([]),eo([]),el([]),em([]),eO([]),eU([]),eW([]),eG([]),eY([]),eq([]),eX([]),e0([]),e2([]),e8([]),e9([]),e6([]),ae([]),ar([]),ai([]),an([]),ad([]),ap([]),am([]),au([])},af=async({ownerTable:e,ownerId:a,fieldKey:r,fallbackMediaId:t,nextUrls:i})=>{let s=eS(a);if(s){let a=await (0,ec.cg)({accountId:g||void 0,ownerTable:e,ownerId:s,fieldKey:r});if(a?.id&&!a.isDeleted&&!1!==a.active){let e=await (0,ec.fW)(String(a.id));if(e)return i.push(e),e}}let n=eS(t);if(!n)return"";let o=await h.db.mediaAssets?.get?.(n);if(!(o&&!o.isDeleted&&!1!==o.active&&(!g||o.accountId===g)&&o.ownerTable===e&&o.fieldKey===r&&(!s||String(o.ownerId||"")===String(s))))return"";let d=await (0,ec.fW)(n);return d&&i.push(d),d||""},av=async()=>{if(!f||!g||!A||!P||!z){ab(),R(!1);return}try{R(!0);let[e,a,r,t,i,s,n,o,d,l,p,c,m,u,x,b,f,v,j,w,k,_,I,S,z,M,T,L]=await Promise.all([h.db.schools.toArray(),h.db.branches.toArray(),h.db.schoolBranchSettings.toArray(),h.db.academicStructures.toArray(),h.db.academicPeriods.toArray(),h.db.students.toArray(),h.db.parents.toArray(),h.db.teachers.toArray(),h.db.classes.toArray(),h.db.subjects.toArray(),h.db.classSubjects.toArray(),h.db.classTeachers.toArray(),h.db.studentEnrollments.toArray(),h.db.studentParents.toArray(),h.db.assessmentApplicabilities.toArray(),h.db.assessmentStructures.toArray(),h.db.assessmentStructureItems.toArray(),h.db.assessmentEntries.toArray(),h.db.gradingStructures.toArray(),h.db.gradeRules.toArray(),h.db.attendance.toArray(),h.db.studentAttendanceSummaries?.toArray?.()||[],h.db.computedResults.toArray(),h.db.reportCards.toArray(),h.db.reportCardItems.toArray(),h.db.reportCardTemplates?.toArray?.()||[],h.db.reportCardTemplateSettings?.toArray?.()||[],h.db.reportCardTemplateAssignments?.toArray?.()||[]]),D=e=>eS(e.accountId)===eS(g)&&eS(e.schoolId)===A&&eS(e.branchId)===P&&!e.isDeleted,B=e.find(e=>eS(e.accountId)===eS(g)&&eS(e.id)===A&&!e.isDeleted)||(eS(y?.accountId)===eS(g)&&eS(y?.id)===A?y:void 0),E=a.find(e=>eS(e.accountId)===eS(g)&&eS(e.schoolId)===A&&eS(e.id)===P&&!e.isDeleted)||(eS(N?.accountId)===eS(g)&&eS(N?.schoolId)===A&&eS(N?.id)===P?N:void 0),O=i.filter(D),F=S.filter(D),U=r.filter(D);U[0];let V=M.filter(e=>!e.isDeleted&&!1!==e.active&&!!eb(e)&&(!e.accountId||e.accountId===g)&&(!e.schoolId||String(e.schoolId??"")===String(A??""))&&(!e.branchId||String(e.branchId??"")===String(P??""))).sort((e,a)=>e.isDefault&&!a.isDefault?-1:!e.isDefault&&a.isDefault?1:String(e.name||"").localeCompare(String(a.name||""))),W=T.filter(e=>!e.isDeleted&&!1!==e.active&&!!eb(e)&&(!e.accountId||e.accountId===g)&&(!e.schoolId||String(e.schoolId??"")===String(A??""))&&(!e.branchId||String(e.branchId??"")===String(P??""))),K=L.filter(e=>!e.isDeleted&&!1!==e.active&&!!eb(e)&&(!e.accountId||e.accountId===g)&&(!e.schoolId||String(e.schoolId??"")===String(A??""))&&(!e.branchId||String(e.branchId??"")===String(P??""))),G=[],H=B?{...B,logo:await af({ownerTable:ey,ownerId:B.id,fieldKey:e_,fallbackMediaId:B.logoMediaId,nextUrls:G})||eI(B,"logo","logoMediaId")}:void 0,Y=E?{...E,logo:await af({ownerTable:ew,ownerId:E.id,fieldKey:e_,fallbackMediaId:E.logoMediaId,nextUrls:G})||eI(E,"logo","logoMediaId")}:void 0,q=await Promise.all(U.map(async e=>({...e,logo:await af({ownerTable:eN,ownerId:e.id,fieldKey:e_,fallbackMediaId:e.logoMediaId,nextUrls:G})||eI(e,"logo","logoMediaId"),reportCardBackgroundImage:await af({ownerTable:eN,ownerId:e.id,fieldKey:"reportCardBackgroundImage",fallbackMediaId:e.reportCardBackgroundImageMediaId,nextUrls:G})||eI(e,"reportCardBackgroundImage","reportCardBackgroundImageMediaId"),reportCardWatermark:await af({ownerTable:eN,ownerId:e.id,fieldKey:"reportCardWatermark",fallbackMediaId:e.reportCardWatermarkMediaId,nextUrls:G})||eI(e,"reportCardWatermark","reportCardWatermarkMediaId"),reportCardSignatureImage:await af({ownerTable:eN,ownerId:e.id,fieldKey:"reportCardSignatureImage",fallbackMediaId:e.reportCardSignatureImageMediaId,nextUrls:G})||eI(e,"reportCardSignatureImage","reportCardSignatureImageMediaId")}))),Z=await Promise.all(s.filter(D).map(async e=>({...e,photo:await af({ownerTable:ej,ownerId:e.id,fieldKey:ek,fallbackMediaId:e.photoMediaId,nextUrls:G})||eI(e,"photo","photoMediaId")}))),X=new Set(O.map(e=>eS(e.id)).filter(Boolean));ax.forEach(e=>{G.includes(e)||(0,ec.hZ)(e)}),ag(G);let ee=n.filter(D),er=u.filter(D),ei=String(C?.email||C?.user?.email||"").trim().toLowerCase(),en=String(C?.phone||C?.user?.phone||"").replace(/\s+/g,""),ed=ee.find(e=>$&&eS(e.id)===$)||ee.find(e=>{let a=String(e.email||"").trim().toLowerCase(),r=String(e.phone||"").replace(/\s+/g,"");return ei&&a===ei||en&&r===en}),ep=eA($,ed?.id),eh=new Set(er.filter(e=>ep&&eS(e.parentId)===ep).map(e=>eS(e.studentId)).filter(Boolean)),eu=new Set(F.filter(e=>eh.has(eS(e.studentId))).map(e=>eS(e.id)).filter(Boolean)),ex=Z.filter(e=>eh.has(eS(e.id))),eg=e=>eh.has(eS(e.studentId));J(H?[H]:[]),Q(Y?[Y]:[]),ea(q),et(t.filter(D)),es(O),eo(ex),em(ed?[ed]:[]),el(o.filter(D)),eU(d.filter(e=>D(e)&&!1!==e.active)),eW(l.filter(e=>D(e)&&!1!==e.active)),eG(p.filter(e=>D(e)&&!1!==e.active)),eq(er.filter(e=>eh.has(eS(e.studentId)))),eY(m.filter(e=>D(e)&&eg(e))),eO(c.filter(D)),eX(x.filter(e=>D(e)&&!1!==e.active)),e0(b.filter(e=>D(e)&&!1!==e.active)),e2(f.filter(e=>D(e)&&!1!==e.active)),e8(v.filter(e=>D(e)&&eg(e))),e9(j.filter(e=>D(e)&&!1!==e.active)),e6(w.filter(e=>D(e)&&!1!==e.active)),ae(k.filter(e=>D(e)&&eg(e))),ar(_.filter(e=>D(e)&&eg(e))),ai(I.filter(e=>D(e)&&eg(e))),an(F.filter(eg)),ad(z.filter(e=>!!D(e)&&(!e.reportCardId||!!eu.has(eS(e.reportCardId)))&&(!e.academicPeriodId||!!X.has(eS(e.academicPeriodId))))),ap(V),am(W),au(K)}catch(e){console.error("Failed to load report data:",e),ab()}finally{R(!1)}};(0,p.useEffect)(()=>{av()},[f,g,A,P,u,z]),(0,p.useEffect)(()=>{H(e=>{let a=P||void 0,r=e.branchId!==a;return{...e,branchId:a,academicStructureId:r?T:e.academicStructureId||T,academicPeriodId:r?L:e.academicPeriodId||L,classId:r?void 0:e.classId,classSubjectId:r?void 0:e.classSubjectId,studentId:r?void 0:e.studentId}})},[P,T,L]),(0,p.useEffect)(()=>{if(!G.academicStructureId){let e=T||ef(er);e&&H(a=>({...a,academicStructureId:e}))}},[G.academicStructureId,T,er]),(0,p.useEffect)(()=>{if(!G.academicPeriodId){let e=L||ef(ei);e&&H(a=>({...a,academicPeriodId:e}))}},[G.academicPeriodId,L,ei]);let aj=(0,p.useMemo)(()=>N&&eS(N.id)===P?[N]:X,[N,P,X]),ay=(0,p.useMemo)(()=>{let e=new Set;return(eH.forEach(a=>{"active"!==a.status||G.academicStructureId&&a.academicStructureId!==G.academicStructureId||G.academicPeriodId&&a.academicPeriodId!==G.academicPeriodId||e.add(eS(a.classId))}),eK.forEach(a=>{!1===a.active||G.academicStructureId&&a.academicStructureId!==G.academicStructureId||G.academicPeriodId&&a.academicPeriodId&&a.academicPeriodId!==G.academicPeriodId||e.add(eS(a.classId))}),G.academicStructureId||G.academicPeriodId)?eF.filter(a=>!!eS(a.id)&&e.has(eS(a.id))):eF},[eF,eH,eK,G.academicStructureId,G.academicPeriodId]),aw=(0,p.useMemo)(()=>eK.filter(e=>(!G.classId||e.classId===G.classId)&&(!G.academicStructureId||e.academicStructureId===G.academicStructureId)&&(!G.academicPeriodId||!e.academicPeriodId||e.academicPeriodId===G.academicPeriodId)),[eK,G.classId,G.academicStructureId,G.academicPeriodId]),aN=(0,p.useMemo)(()=>{if(!G.classId&&!G.academicPeriodId)return en;let e=new Set(eH.filter(e=>"active"===e.status&&(!G.classId||e.classId===G.classId)&&(!G.academicStructureId||e.academicStructureId===G.academicStructureId)&&(!G.academicPeriodId||e.academicPeriodId===G.academicPeriodId)).map(e=>eS(e.studentId)).filter(Boolean));return en.filter(a=>!!eS(a.id)&&e.has(eS(a.id)))},[en,eH,G.classId,G.academicStructureId,G.academicPeriodId]);(0,p.useEffect)(()=>{G.studentId||0===aN.length||H(e=>({...e,studentId:eS(aN[0]?.id)||void 0,classId:e.classId||eS(eH.find(e=>eS(e.studentId)===eS(aN[0]?.id)&&["active","promoted"].includes(String(e.status||"").toLowerCase()))?.classId)||void 0}))},[aN,G.studentId,eH]);let ak=(0,p.useMemo)(()=>({schools:Y,branches:aj,schoolBranchSettings:ee,academicStructures:er,academicPeriods:ei,students:en,parents:ep,studentParents:eJ,teachers:ed,classes:eF,subjects:eV,classSubjects:eK,studentEnrollments:eH,classTeachers:eE,assessmentApplicabilities:eZ,assessmentStructures:eQ,assessmentStructureItems:e1,assessmentEntries:e4,gradingStructures:e5,gradeRules:e3,attendance:e7,studentAttendanceSummaries:aa,computedResults:at,reportCards:as,reportCardItems:ao}),[Y,aj,ee,er,ei,en,ep,eJ,ed,eF,eV,eK,eH,eE,eZ,eQ,e1,e4,e5,e3,e7,aa,at,as,ao]),a_=(0,p.useMemo)(()=>(0,eu.EI)(ak,G),[ak,G]),aI=!!(er.length&&ei.length&&eF.length&&en.length),aS=(0,p.useMemo)(()=>X.find(e=>eS(e.id)===P)||aj.find(e=>eS(e.id)===P)||N||X[0]||aj[0],[N,P,X,aj]);y?.name||Y[0]?.name,aS?.name||N?.name||X[0]?.name;let aC=eP(eF,G.classId),a$=eP(ei,G.academicPeriodId),az=eP(er,G.academicStructureId),aA=O.trim().toLowerCase(),aP=(0,p.useMemo)(()=>aA?aN.filter(e=>`${e.fullName||e.name||""} ${e.admissionNumber||""} ${e.gender||""}`.toLowerCase().includes(aA)):aN,[aN,aA]),aM=(0,p.useMemo)(()=>aA?ay.filter(e=>`${e.name||""} ${e.code||""}`.toLowerCase().includes(aA)):ay,[ay,aA]),aT=(0,p.useMemo)(()=>[G.academicStructureId,G.academicPeriodId,G.classId,G.classSubjectId,G.studentId,G.sortMode&&"position"!==G.sortMode?G.sortMode:void 0,"student-report"!==B?B:void 0].filter(Boolean).length,[G.academicStructureId,G.academicPeriodId,G.classId,G.classSubjectId,G.studentId,G.sortMode,B]),aL=eP(en,G.studentId);eP(aw.map(e=>{var a;let r;return{id:e.id,name:(a=e,r=eV.find(e=>e.id===a.subjectId),a.name||r?.name||`Subject ${a.subjectId||""}`)}}),G.classSubjectId),"class-reports"===B?a_.classReports.length:a_.studentReport,a_.warnings.length;let aD=aI&&("class-reports"===B?a_.classReports.length>0:!!a_.studentReport),aR=()=>{aD&&(0,eh.f)({targetId:ev,mode:"class-reports"===B?"whole-class-reports":"single-student",orientation:"portrait",pageSize:"A4"})},aB=(0,p.useMemo)(()=>{let e=ah.filter(e=>!1!==e.active&&eb(e));return e.find(e=>!0===e.isDefault&&(!e.scopeType||"branch"===e.scopeType)&&(!e.scopeId||String(e.scopeId??"")===String(P??"")))||e.find(e=>(!e.scopeType||"branch"===e.scopeType)&&(!e.scopeId||String(e.scopeId??"")===String(P??"")))||e.find(e=>!0===e.isDefault)||e[0]||null},[ah,P]),aE=(0,p.useMemo)(()=>{let e=eS(aB?.templateId);return al.find(a=>e&&eS(a.id)===e)||al.find(e=>e.isDefault)||al.find(e=>"classic_formal"===String(e.code||""))||al[0]||(0,ex.ed)(null)},[aB,al]),aO=(0,p.useMemo)(()=>{let e=eS(aB?.templateSettingsId),a=eS(aE?.id);return ac.find(a=>e&&eS(a.id)===e)||ac.find(e=>a&&eS(e.templateId)===a)||ac.find(e=>!1!==e.active)||null},[aB,aE,ac]),aF=(0,p.useMemo)(()=>(0,ex.tH)({...ex.gv,...aO||{}},aE||null,aB||null),[aE,aB,aO]);function aU(e){let a=eS(e?.report?.studentId||e?.studentId);if(a)return en.find(e=>eS(e.id)===a)}function aV(e,a){let r;if(!e)return e;let t=a?.name||a?.branchName||a?.campusName||e.branchName||e.branchLabel||e.branch?.name||"",i=aU(e),s=(r=aU(e),r?.resolvedStudentPhotoUrl||r?.photo||e?.report?.resolvedStudentPhotoUrl||e?.report?.studentPhoto||"");return{...e,student:i||e.student,branch:a,branchId:a?.id||e.branchId,branchName:t,branchLabel:t,template:aE,templateSettings:aF,reportCardTemplate:aE,reportCardTemplateSettings:aF,reportCardTemplateAssignment:aB,header:{...e.header,branch:a,branchId:a?.id||e.header?.branchId,branchName:t,branchLabel:t,template:aE,templateSettings:aF,reportCardTemplate:aE,reportCardTemplateSettings:aF,reportCardTemplateAssignment:aB,branding:{...e.header?.branding||{},primaryColor:(e.header?.branding||{}).primaryColor||"var(--ba-primary, var(--primary-color, #2563eb))",branchName:(e.header?.branding||{}).branchName||t,logo:(e.header?.branding||{}).logo||e.header?.schoolBranchSetting?.logo||e.header?.branch?.logo||e.header?.school?.logo,reportCardBackgroundImage:(e.header?.branding||{}).reportCardBackgroundImage||e.header?.schoolBranchSetting?.reportCardBackgroundImage,reportCardWatermark:(e.header?.branding||{}).reportCardWatermark||e.header?.schoolBranchSetting?.reportCardWatermark,reportCardSignatureImage:(e.header?.branding||{}).reportCardSignatureImage||e.header?.schoolBranchSetting?.reportCardSignatureImage}},report:{...e.report,studentPhoto:s||e.report?.studentPhoto,resolvedStudentPhotoUrl:s||e.report?.resolvedStudentPhotoUrl,branch:a,branchId:a?.id||e.report?.branchId,branchName:t,branchLabel:t,template:aE,templateSettings:aF,reportCardTemplate:aE,reportCardTemplateSettings:aF,reportCardTemplateAssignment:aB}}}return b||_||j||D?(0,t.jsx)(eM,{primary:M,title:"Opening My Child Reports...",text:"Checking your linked children, academic records, report templates and attendance."}):f&&g?z?$||0!==ep.length||D?A&&P?(0,t.jsxs)("main",{className:"ba-page student-reports-page",style:{"--ba-primary":M,"--primary-color":M},children:[(0,t.jsx)("style",{children:eB}),(0,t.jsxs)("section",{className:"ba-search-card report-no-print","aria-label":"Child report search and actions",children:[(0,t.jsxs)("label",{className:"ba-search",children:[(0,t.jsx)("span",{children:"⌕"}),(0,t.jsx)("input",{value:O,onChange:e=>F(e.target.value),placeholder:"Search child reports...","aria-label":"Search child reports"})]}),(0,t.jsx)("button",{type:"button",className:"ba-add-inline",onClick:aR,"aria-label":"Print report",title:"Print",disabled:!aD,children:"⎙"}),(0,t.jsxs)("button",{type:"button",className:`ba-filter-button ${aT?"active":""}`,onClick:()=>V(!0),"aria-label":"Open report filters",title:"Filters",children:[(0,t.jsx)(eL,{}),aT?(0,t.jsx)("b",{children:aT}):null]}),(0,t.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>K(!0),"aria-label":"More options",children:"⋯"})]}),aT>0&&(0,t.jsxs)("section",{className:"ba-filter-chips report-no-print","aria-label":"Active report filters",children:[G.academicStructureId&&(0,t.jsxs)("button",{type:"button",onClick:()=>H(e=>({...e,academicStructureId:void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:["Structure: ",az," \xd7"]}),G.academicPeriodId&&(0,t.jsxs)("button",{type:"button",onClick:()=>H(e=>({...e,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:["Period: ",a$," \xd7"]}),G.classId&&(0,t.jsxs)("button",{type:"button",onClick:()=>H(e=>({...e,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:["Class: ",aC," \xd7"]}),G.studentId&&(0,t.jsxs)("button",{type:"button",onClick:()=>H(e=>({...e,studentId:void 0})),children:["Student: ",aL," \xd7"]}),"student-report"!==B&&(0,t.jsx)("button",{type:"button",onClick:()=>E("student-report"),children:"Mode: All Children \xd7"})]}),(0,t.jsx)("section",{className:"ba-print-card",children:(0,t.jsx)("div",{id:ev,className:"ba-print-zone",children:aI?"class-reports"===B?a_.classReports.length?a_.classReports.map((e,a)=>(0,t.jsx)(eg,{dataset:aV(e,aS),template:aE,settings:aF,compact:!0,pageBreakAfter:a<a_.classReports.length-1},e.report?.studentId||a)):(0,t.jsx)(eg,{dataset:void 0,template:aE,settings:aF}):(0,t.jsx)(eg,{dataset:aV(a_.studentReport,aS),template:aE,settings:aF,pageBreakAfter:!1}):(0,t.jsx)(eT,{icon:"\uD83D\uDCC4",title:"No child report is available yet",text:"Your school has not published enough academic data to build this child report yet."})})}),U&&(0,t.jsx)(eD,{mode:B,filters:G,academicStructures:er,academicPeriods:ei,filteredClasses:aM,filteredClassSubjects:aw,filteredStudents:aP,setMode:E,setFilters:H,onClose:()=>V(!1)}),W&&(0,t.jsx)(eR,{onRefresh:async()=>{K(!1),await av()},onPrint:()=>{K(!1),aR()},onClose:()=>K(!1)})]}):(0,t.jsxs)("main",{className:"ba-page",style:{"--ba-primary":M,"--primary-color":M},children:[(0,t.jsx)("style",{children:eB}),(0,t.jsxs)("section",{className:"ba-state",children:[(0,t.jsx)("h2",{children:"Branch workspace required"}),(0,t.jsx)("p",{children:"Child reports are generated inside the selected branch-admin workspace. Use Select Role again if the wrong branch is active."}),(0,t.jsx)("button",{type:"button",className:"ba-state-button",onClick:()=>x.push("/select-role"),children:"Go to Select Role"})]})]}):(0,t.jsx)(eM,{primary:M,title:"Parent profile not linked",text:"The active parent membership needs a parentId, parentLocalId, or matching parent contact."}):(0,t.jsx)(eM,{primary:M,title:"Parent access required",text:"Open this page from an active parent-role workspace."}):(0,t.jsx)(eM,{primary:M,title:"Redirecting to login...",text:"You must sign in before opening child reports."})},myChildCumulativeRecord:function(){var e,a;let r,i,s,n,u=(0,q.p)(),x=(0,c.useRouter)(),{accountId:g,authenticated:b,loading:f}=(0,o.F)(),{settings:v,loading:j}=(0,d.t)(),{activeSchool:y,activeSchoolId:w,activeBranch:N,activeBranchId:k,loading:_}=(0,l.c)(),{activeMembership:I}=(0,m.A)(),S=(0,p.useMemo)(()=>aa("eleeveon_open_workspace"),[]),C=(0,p.useMemo)(()=>S?.membership||I||ar()||{},[I,S?.membership]),$=at(C?.parentId,C?.parentLocalId,C?.parent?.id,S?.parentId,ae("activeParentId")),z="parent"===String(C?.role||S?.role||"").toLowerCase(),A=v?.primaryColor||"var(--primary-color, #2563eb)",P=e6(v?.currentAcademicStructureId)||void 0,M=(e={openWorkspace:S,activeMembership:I,activeSchoolId:w,activeSchool:y,settings:v},r=ar(),i=e.openWorkspace?.membership||e.activeMembership||r||null,at(e.openWorkspace?.schoolId,i?.schoolId,i?.school?.id,e.activeSchoolId,e.activeSchool?.id,e.settings?.schoolId,ae("activeSchoolId"))),T=(a={openWorkspace:S,activeMembership:I,activeBranchId:k,activeBranch:N,settings:v},s=ar(),n=a.openWorkspace?.membership||a.activeMembership||s||null,at(a.openWorkspace?.branchId,n?.branchId,n?.schoolBranchId,n?.branch?.id,a.activeBranchId,a.activeBranch?.id,a.settings?.branchId,ae("activeBranchId"))),{loading:L,setLoading:D}=(0,Z.J)(),[R,B]=(0,p.useState)(""),[E,O]=(0,p.useState)(!1),[F,U]=(0,p.useState)(!1),[V,W]=(0,p.useState)({branchId:T||"",academicStructureId:P,academicPeriodId:void 0,fromAcademicPeriodId:void 0,toAcademicPeriodId:void 0,classId:void 0,studentId:void 0,subjectId:void 0,snapshotType:"all",decision:"all",mode:"student-transcript",sortMode:"position",groupingMode:"academic-structure",subjectAggregationMode:"average",includePromotionRecords:!0,includeManualSnapshots:!0,includeTerminalSnapshots:!0,includeDeletedSnapshots:!1}),[K,G]=(0,p.useState)([]),[H,Y]=(0,p.useState)([]),[J,X]=(0,p.useState)([]),[Q,ee]=(0,p.useState)([]),[ea,er]=(0,p.useState)([]),[et,ei]=(0,p.useState)([]),[es,en]=(0,p.useState)([]),[eo,ed]=(0,p.useState)([]),[el,ep]=(0,p.useState)([]),[em,eh]=(0,p.useState)([]),[eu,ex]=(0,p.useState)([]),[eg,eb]=(0,p.useState)([]),[ef,ev]=(0,p.useState)([]),[ej,ey]=(0,p.useState)([]),[ew,eN]=(0,p.useState)([]),[ek,e_]=(0,p.useState)([]),[eI,eS]=(0,p.useState)([]);(0,p.useEffect)(()=>{if(!f&&!_&&(!b||!g))return void x.replace("/login")},[f,_,b,g,w,k,x]),(0,p.useEffect)(()=>()=>{eI.forEach(ec.hZ)},[eI]);let eC=e=>ai(e.accountId,g)&&e7(e.schoolId,M)&&e7(e.branchId,T)&&!e.isDeleted,e$=e=>ai(e.accountId,g)&&(e7(e.schoolId,M)||e7(e.id,M))&&!e.isDeleted,ez=e=>ai(e.accountId,g)&&e7(e.schoolId,M)&&e7(e.id,T)&&!e.isDeleted,eA=e=>ai(e.accountId,g)&&(!e.schoolId||e7(e.schoolId,M))&&(!e.branchId||e7(e.branchId,T))&&!e.isDeleted,eP=()=>{eI.forEach(ec.hZ),eS([]),G([]),Y([]),X([]),ee([]),er([]),ei([]),en([]),ed([]),ep([]),eh([]),ex([]),eb([]),ev([]),ey([]),eN([]),e_([])},eM=async({ownerTable:e,ownerId:a,fieldKey:r,fallbackMediaId:t,nextUrls:i})=>{let s=e6(a);if(s){let a=await (0,ec.cg)({accountId:g||void 0,ownerTable:e,ownerId:s,fieldKey:r});if(a?.id&&!a.isDeleted&&!1!==a.active){let e=await (0,ec.fW)(String(a.id));if(e)return i.push(e),e}}let n=e6(t);if(!n)return"";let o=await h.db.mediaAssets?.get?.(n);if(!(o&&!o.isDeleted&&!1!==o.active&&(!g||o.accountId===g)&&o.ownerTable===e&&o.fieldKey===r&&(!s||String(o.ownerId||"")===String(s))))return"";let d=await (0,ec.fW)(n);return d&&i.push(d),d||""},eT=async()=>{if(!b||!g||!M||!T||!z){eP(),D(!1);return}try{D(!0);let[e,a,r,t,i,s,n,o,d,l,p,c,m,u,x,b]=await Promise.all([h.db.schools.toArray(),h.db.branches.toArray(),h.db.schoolBranchSettings.toArray(),h.db.academicStructures.toArray(),h.db.academicPeriods.toArray(),h.db.students.toArray(),h.db.parents.toArray(),h.db.studentParents.toArray(),h.db.teachers.toArray(),h.db.classes.toArray(),h.db.subjects.toArray(),h.db.studentReportSnapshots.toArray(),h.db.studentPromotions.toArray(),h.db.reportCardTemplates?.toArray?.()||Promise.resolve([]),h.db.reportCardTemplateSettings?.toArray?.()||Promise.resolve([]),h.db.reportCardTemplateAssignments?.toArray?.()||Promise.resolve([])]),f=e.filter(e$),v=a.filter(ez),j=r.filter(e=>eC(e)||eA(e)),y=[],w=await Promise.all(f.map(async e=>({...e,logo:await eM({ownerTable:eq,ownerId:e.id,fieldKey:e0,fallbackMediaId:e.logoMediaId,nextUrls:y})||e2(e,"logo","logoMediaId")}))),N=await Promise.all(v.map(async e=>({...e,logo:await eM({ownerTable:eZ,ownerId:e.id,fieldKey:e0,fallbackMediaId:e.logoMediaId,nextUrls:y})||e2(e,"logo","logoMediaId")}))),k=await Promise.all(j.map(async e=>({...e,logo:await eM({ownerTable:eX,ownerId:e.id,fieldKey:e0,fallbackMediaId:e.logoMediaId,nextUrls:y})||e2(e,"logo","logoMediaId")})));eI.forEach(e=>{y.includes(e)||(0,ec.hZ)(e)}),eS(y);let _=await Promise.all(s.filter(e=>eA(e)&&as(e)).sort((e,a)=>e.fullName.localeCompare(a.fullName)).map(async e=>{let a=await eM({ownerTable:eQ,ownerId:e.id,fieldKey:e1,fallbackMediaId:e.photoMediaId,nextUrls:y})||e2(e,"photo","photoMediaId");return{...e,photo:a,studentPhoto:a,resolvedStudentPhotoUrl:a}})),I=n.filter(e=>eC(e)||eA(e)),S=o.filter(e=>eC(e)||eA(e)),z=String(C?.email||C?.user?.email||"").trim().toLowerCase(),A=String(C?.phone||C?.user?.phone||"").replace(/\s+/g,""),P=I.find(e=>$&&e7(e.id,$))||I.find(e=>{let a=String(e.email||"").trim().toLowerCase(),r=String(e.phone||"").replace(/\s+/g,"");return z&&a===z||A&&r===A}),L=at($,P?.id),R=new Set(S.filter(e=>L&&e7(e.parentId,L)).map(e=>e6(e.studentId)).filter(Boolean)),B=_.filter(e=>R.has(e6(e.id))),E=S.filter(e=>R.has(e6(e.studentId))),O=P?[P]:[];G(w),Y(N),X(k),ee(t.filter(e=>eA(e)&&as(e)).sort((e,a)=>e.name.localeCompare(a.name))),er(i.filter(e=>eA(e)&&as(e)).sort((e,a)=>Number(e.order||0)-Number(a.order||0))),ei(B),en(O),ed(E),ep(d.filter(e=>eC(e)||eA(e))),eh(l.filter(e=>eA(e)&&as(e)).sort((e,a)=>e.name.localeCompare(a.name))),ex(p.filter(e=>eA(e)&&as(e)).sort((e,a)=>e.name.localeCompare(a.name))),eb(c.filter(e=>!!R.has(e6(e.studentId))&&(!!V.includeDeletedSnapshots||!e.isDeleted)&&!!ai(e.accountId,g)&&!!e7(e.schoolId,M)&&!!e7(e.branchId,T))),ev(m.filter(e=>!!R.has(e6(e.studentId))&&!e.isDeleted&&!!ai(e.accountId,g)&&(!e.schoolId||!!e7(e.schoolId,M))&&(!e.branchId||!!e7(e.branchId,T)))),W(e=>{let a=!!e.studentId&&R.has(e6(e.studentId));return{...e,studentId:a?e.studentId:e6(B[0]?.id)||void 0}});let F=new Map;[...eF.yo.map((e,a)=>eY(e,a,"student_report")),...eU.wW.map((e,a)=>eY(e,a,"cumulative_transcript"))].forEach(e=>{let a=eJ(e);a&&F.set(a,e)}),u.filter(e=>al(e,g,M,T)&&ad(e)).forEach(e=>{let a={...e,reportType:e.reportType||"student_report",templateCode:e.templateCode||e.code||e.layoutKey,templateKey:e.templateKey||e.layoutKey||e.code},r=eJ(a);r&&F.set(r,{...F.get(r)||{},...a})}),ey(Array.from(F.values()).sort((e,a)=>e.reportType!==a.reportType?String(e.reportType||"").localeCompare(String(a.reportType||"")):e.isDefault&&!a.isDefault?-1:!e.isDefault&&a.isDefault?1:String(e.name||"").localeCompare(String(a.name||"")))),eN(x.filter(e=>al(e,g,M,T)&&ad(e))),e_(b.filter(e=>al(e,g,M,T)&&ad(e)))}catch(e){console.error("Failed to load cumulative records:",e),eP(),alert("Failed to load cumulative records")}finally{D(!1)}};(0,p.useEffect)(()=>{eT()},[b,g,M,T,u]),(0,p.useEffect)(()=>{W(e=>{let a=e.branchId!==(T||"");return{...e,branchId:T||"",academicStructureId:a?P:e.academicStructureId||P,academicPeriodId:a?void 0:e.academicPeriodId,classId:a?void 0:e.classId,studentId:a?void 0:e.studentId,subjectId:a?void 0:e.subjectId}})},[T,P]),(0,p.useEffect)(()=>{!V.academicStructureId&&Q[0]?.id&&W(e=>({...e,academicStructureId:Q[0].id}))},[V.academicStructureId,Q]);let eL=(0,p.useMemo)(()=>{let e=H.find(e=>e7(e.id,T));return e?[e]:N?[N]:H},[N,H,T]);(0,p.useMemo)(()=>eg.filter(e=>(!!V.includeDeletedSnapshots||!e.isDeleted)&&(!T||!!e7(e.branchId,T))&&(!M||!!e7(e.schoolId,M))&&(!g||e.accountId===g)),[eg,T,M,g,V.includeDeletedSnapshots]);let eD=(0,p.useMemo)(()=>({schools:K.length?K:y?[y]:[],branches:eL,schoolBranchSettings:J,academicStructures:Q,academicPeriods:ea,students:et,parents:es,studentParents:eo,teachers:el,classes:em,subjects:eu,studentReportSnapshots:eg,studentPromotions:ef}),[K,y,eL,J,Q,ea,et,es,eo,el,em,eu,eg,ef]),eR=(0,p.useMemo)(()=>(0,eH.DB)(eD,V),[eD,V]),eB=(0,p.useMemo)(()=>H.find(e=>e6(e.id)===e6(T))||eL.find(e=>e6(e.id)===e6(T))||(N&&e6(N.id)===e6(T)?N:void 0)||N||H[0]||eL[0]||eR.header.branch,[N,T,H,eL,eR.header.branch]),an=(0,p.useMemo)(()=>(function(e,a){if(!e)return e;let r=e.header||{},t=r.branding||{},i=a?.name||a?.branchName||a?.campusName||r.branchName||r.branchLabel||r.branch?.name||t.branchName||"",s=a?.address||a?.branchAddress||r.branchAddress||t.branchAddress||"";return{...e,header:{...r,branch:a||r.branch,branchId:a?.id||r.branchId,branchName:i,branchLabel:i,campusName:i,branchAddress:s,branding:{...t,branchName:t.branchName||i,branchLabel:t.branchLabel||i,campusName:t.campusName||i,branchAddress:t.branchAddress||s,resolvedLogoUrl:t.resolvedLogoUrl||t.logo||r.schoolBranchSetting?.logo||r.branch?.logo||r.school?.logo||"",logo:t.logo||t.resolvedLogoUrl||r.schoolBranchSetting?.logo||r.branch?.logo||r.school?.logo||"",primaryColor:t.primaryColor||"var(--ba-primary, var(--primary-color, #2563eb))"}}}})(eR,eB),[eR,eB]),ao=(0,p.useMemo)(()=>et.find(e=>e7(e.id,V.studentId)),[et,V.studentId]),aj={width:"297mm",minHeight:"210mm",margin:"0 auto 20px",padding:"10mm",boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:an.header.branding.fontFamily||"Arial, sans-serif",border:"1px solid #e5e5e5"},ay={width:"100%",borderCollapse:"collapse",fontSize:9},aw={border:"1px solid #222",padding:5,background:A,color:"#fff",textAlign:"center",fontWeight:800},aN={border:"1px solid #222",padding:5,verticalAlign:"middle"},ak=(0,p.useMemo)(()=>{let e=ac(ek,"cumulative_book",T),a=ac(ek,"student_report",T);return am(ej,e)||am(ej,a)||ap(ej,"student_report")||{name:"Classic Formal",code:"classic_formal",layoutKey:"classic_formal",templateKey:"classic_formal",reportType:"student_report",paperSize:"A4",orientation:"portrait",density:"compact",active:!0,isDefault:!0}},[ek,ej,T]),a_=(0,p.useMemo)(()=>{var e;let a=ac(ek,"cumulative_book",T),r=ac(ek,"student_report",T),t=ah(ew,a,ak,"cumulative_book"),i=ah(ew,r,ak,"student_report");return{...(e=t||i)||{},reportType:"cumulative_book",showBookFrontCover:e?.showBookFrontCover??!0,showBookStudentProfilePage:e?.showBookStudentProfilePage??!0,showBookAcademicJourneyPage:e?.showBookAcademicJourneyPage??!0,showBookSummaryPage:e?.showBookSummaryPage??!0,showBookBackCover:e?.showBookBackCover??!0,bookTitleLabel:e?.bookTitleLabel||"Cumulative Academic Report Book",bookSubtitleLabel:e?.bookSubtitleLabel||"Complete Academic Journey",showGeneratedDate:e?.showGeneratedDate??!0,generatedDateLabel:e?.generatedDateLabel||"Generated"}},[ek,ew,ak,T]),aI=(0,p.useMemo)(()=>am(ej,ac(ek,"cumulative_transcript",T))||ap(ej,"cumulative_transcript")||{name:"Cumulative Transcript Classic",code:"cumulative_transcript_classic",layoutKey:"cumulative_transcript_classic",templateKey:"cumulative_transcript_classic",reportType:"cumulative_transcript",paperSize:"A4",orientation:"portrait",density:"compact",active:!0,isDefault:!0},[ek,ej,T]),aS=(0,p.useMemo)(()=>ah(ew,ac(ek,"cumulative_transcript",T),aI,"cumulative_transcript")||{templateCode:"cumulative_transcript_classic",layoutKey:"cumulative_transcript_classic",templateKey:"cumulative_transcript_classic",templateName:"Cumulative Transcript Classic",reportType:"cumulative_transcript",paperSize:"A4",orientation:"portrait",density:"compact",showAdmissionNumber:!0,showGender:!0,showClass:!0,showAcademicStructure:!0,showAcademicPeriod:!0,showBranch:!0,showTranscriptTermBreakdown:!0,showTranscriptYearAverage:!0,showTranscriptCumulativeAverage:!0,showTranscriptCumulativePosition:!0,showTranscriptGPAProgression:!0,showTranscriptFinalRecommendation:!0,showGeneratedDate:!0,studentNameLabel:"Student",admissionNumberLabel:"Student ID",classLabel:"Programme / Class",academicPeriodLabel:"Academic Period",subjectLabel:"Course / Subject",averageLabel:"Average",gradeLabel:"Grade",gpaLabel:"GPA",generatedDateLabel:"Date Generated",footerText:"Official cumulative academic transcript generated by Eleeveon Schools."},[ek,ew,aI,T]),aC=(0,p.useMemo)(()=>an.studentTranscript?an.studentTranscript:V.studentId?(0,eH.Wy)(eD,{...V,mode:"student-transcript"},V.studentId):void 0,[eD,V,an.studentTranscript]),a$=(0,p.useMemo)(()=>{let e=an.cumulativeTranscriptDataset;return e?.transcript&&e?.student?e:{...e||{},header:an.header,transcript:aC,generatedAt:e?.generatedAt||new Date().toISOString(),student:aC?{studentId:aC.studentId,studentName:aC.studentName,admissionNumber:aC.admissionNumber,gender:aC.gender,currentClassName:aC.currentClassName,studentPhoto:aC.studentPhoto,parentName:aC.parentName,guardianName:aC.guardianName}:void 0,summary:aC?{totalPeriods:aC.totalPeriods,totalSubjects:aC.totalSubjects,cumulativeTotal:aC.cumulativeTotal,cumulativeAverage:aC.cumulativeAverage,cumulativeGPA:aC.cumulativeGPA,cumulativePosition:aC.latestPosition,highestAverage:aC.highestAverage,lowestAverage:aC.lowestAverage,latestAverage:aC.latestAverage,latestPosition:aC.latestPosition,latestDecision:aC.latestDecision,overallTrend:aC.overallTrend}:void 0}},[an,aC]),az=(0,p.useMemo)(()=>{let e=eg.filter(e=>(!!V.includeDeletedSnapshots||!e.isDeleted)&&(!M||!!e7(e.schoolId,M))&&(!T||!!e7(e.branchId,T))&&(!V.academicStructureId||!!e7(e.academicStructureId,V.academicStructureId))&&(!V.academicPeriodId||!!e7(e.academicPeriodId,V.academicPeriodId))&&(!V.classId||!!e7(e.classId,V.classId))&&(!V.studentId||!!e7(e.studentId,V.studentId))&&("all"===V.snapshotType||e.snapshotType===V.snapshotType)&&("manual"!==e.snapshotType||!1!==V.includeManualSnapshots)&&("terminal"!==e.snapshotType||!1!==V.includeTerminalSnapshots)&&("promotion"!==e.snapshotType||!1!==V.includePromotionRecords)&&!0).sort((e,a)=>{let r=String(e.academicYear||"").localeCompare(String(a.academicYear||""));return 0!==r?r:String(e.academicPeriodId||"").localeCompare(String(a.academicPeriodId||""))}).map(e=>{var a;let r,t,i,s,n,o,d,l,p,c,m,h,u=ea.find(a=>e7(a.id,e.academicPeriodId)),x=et.find(a=>e7(a.id,e.studentId)),g=(a=an.header,t=(r=e.reportData||{}).dataset||r.reportCardDataset||r.studentReportDataset||r,i=t?.report||t||{},s=t?.header||{},n=a||{},o=s?.branding||{},l=e4((d=n?.branding||{}).logo,d.resolvedLogoUrl,n.schoolBranchSetting?.logo,n.branch?.logo,n.school?.logo,o.logo,o.resolvedLogoUrl,s.schoolBranchSetting?.logo,s.branch?.logo,s.school?.logo),p=e4(d.reportCardBackgroundImage,n.schoolBranchSetting?.reportCardBackgroundImage,o.reportCardBackgroundImage,s.schoolBranchSetting?.reportCardBackgroundImage),c=e4(d.reportCardWatermark,n.schoolBranchSetting?.reportCardWatermark,o.reportCardWatermark,s.schoolBranchSetting?.reportCardWatermark,l),m=e4(d.reportCardSignatureImage,n.schoolBranchSetting?.reportCardSignatureImage,o.reportCardSignatureImage,s.schoolBranchSetting?.reportCardSignatureImage),h=e4(x?.resolvedStudentPhotoUrl,x?.photo,x?.studentPhoto,t?.studentInfo?.studentPhoto,t?.studentInfo?.photo,t?.student?.resolvedStudentPhotoUrl,t?.student?.studentPhoto,t?.student?.photo,i?.resolvedStudentPhotoUrl,i?.studentPhoto),{...t,generatedAt:t?.generatedAt||e.createdAt||new Date().toISOString(),header:{...n,...s,school:n.school||s.school,branch:n.branch||s.branch,schoolBranchSetting:n.schoolBranchSetting||s.schoolBranchSetting,branding:{...o,...d,logo:l,resolvedLogoUrl:l,reportCardBackgroundImage:p,reportCardWatermark:c,reportCardSignatureImage:m}},branding:{...t?.branding||{},...d,logo:l,resolvedLogoUrl:l,reportCardBackgroundImage:p,reportCardWatermark:c,reportCardSignatureImage:m},report:{...i,studentId:i?.studentId||e.studentId,studentPhoto:h,resolvedStudentPhotoUrl:h},student:{...x||{},...t?.student||{},id:t?.student?.id||x?.id||e.studentId,name:t?.student?.name||t?.student?.fullName||x?.fullName||i?.studentName,fullName:t?.student?.fullName||t?.student?.name||x?.fullName||i?.studentName,admissionNumber:t?.student?.admissionNumber||x?.admissionNumber||i?.admissionNumber,gender:t?.student?.gender||x?.gender||i?.gender,photo:h,studentPhoto:h,resolvedStudentPhotoUrl:h},studentInfo:{...t?.studentInfo||{},studentPhoto:h,photo:h}}),b=g?.report||{};return{id:e.id,academicPeriodId:e.academicPeriodId,academicPeriodName:u?.name||e.term||g?.header?.academicPeriod?.name||"Academic Period",academicYear:e.academicYear,term:e.term,startDate:u?.startDate,endDate:u?.endDate,dataset:g,total:e.total??b.total,average:e.average??b.average,position:e.position??b.overallPosition??b.position,gpa:b.overallGPA??b.gpa,recommendation:e.recommendation}});return{generatedAt:new Date().toISOString(),title:a_.bookTitleLabel||"Cumulative Academic Report Book",subtitle:a_.bookSubtitleLabel||"Complete Academic Journey",header:an.header,branding:an.header.branding,student:{id:aC?.studentId||ao?.id,fullName:aC?.studentName||ao?.fullName,name:aC?.studentName||ao?.fullName,admissionNumber:aC?.admissionNumber||ao?.admissionNumber,gender:aC?.gender||ao?.gender,className:aC?.currentClassName,currentClassName:aC?.currentClassName,photo:aC?.studentPhoto||ao?.resolvedStudentPhotoUrl||ao?.photo||e[0]?.dataset?.studentInfo?.studentPhoto||e[0]?.dataset?.report?.studentPhoto,studentPhoto:aC?.studentPhoto||ao?.resolvedStudentPhotoUrl||ao?.photo||e[0]?.dataset?.studentInfo?.studentPhoto||e[0]?.dataset?.report?.studentPhoto,parentName:aC?.parentName||ao?.parentName,address:ao?.address,parentPhone:ao?.parentPhone,parentEmail:ao?.parentEmail},periods:e,summary:{totalPeriods:aC?.totalPeriods||e.length,cumulativeAverage:aC?.cumulativeAverage,cumulativeGPA:aC?.cumulativeGPA,bestAverage:aC?.highestAverage,latestAverage:aC?.latestAverage,latestPosition:aC?.latestPosition,finalRecommendation:aC?.latestDecision,trend:aC?.overallTrend},notes:an.warnings}},[ea,T,V,an.header,an.warnings,M,ao,a_,eg,aC]),aA=e=>{"function"==typeof e?W(a=>({...e(a),branchId:T||""})):W({...e,branchId:T||""})},aP=(0,p.useMemo)(()=>[V.academicStructureId,V.academicPeriodId,V.fromAcademicPeriodId,V.toAcademicPeriodId,V.classId,V.studentId,V.subjectId,"all"!==V.snapshotType?V.snapshotType:void 0,"all"!==V.decision?V.decision:void 0,"student-transcript"!==String(V.mode)?V.mode:void 0,"position"!==V.sortMode?V.sortMode:void 0,"academic-structure"!==V.groupingMode?V.groupingMode:void 0,"average"!==V.subjectAggregationMode?V.subjectAggregationMode:void 0,!V.includePromotionRecords?"promotion-off":void 0,!V.includeManualSnapshots?"manual-off":void 0,!V.includeTerminalSnapshots?"terminal-off":void 0,V.includeDeletedSnapshots?"deleted-on":void 0].filter(Boolean).length,[V]),aM=R.trim().toLowerCase(),aT=(0,p.useMemo)(()=>aM?et.filter(e=>`${e.fullName||""} ${e.admissionNumber||""}`.toLowerCase().includes(aM)):et,[et,aM]),aL=(0,p.useMemo)(()=>{let e=new Set(eg.map(e=>e6(e.academicStructureId)).filter(Boolean)),a=Q.filter(a=>!a.isDeleted&&(!1!==a.active||e.has(e6(a.id))));return a.length?a:Array.from(e).map(e=>({id:e,name:`Academic Structure ${e}`,schoolId:M,branchId:T,accountId:g||void 0,active:!0}))},[Q,eg,M,T,g]),aD=(0,p.useMemo)(()=>{let e=new Set(eg.filter(e=>!V.academicStructureId||e7(e.academicStructureId,V.academicStructureId)).map(e=>e6(e.academicPeriodId)).filter(Boolean)),a=ea.filter(a=>!a.isDeleted&&(!V.academicStructureId||!!e7(a.academicStructureId,V.academicStructureId))&&(!1!==a.active||e.has(e6(a.id)))).sort((e,a)=>Number(e.order||0)-Number(a.order||0));return a.length?a:Array.from(e).map((e,a)=>({id:e,name:`Academic Period ${e}`,schoolId:M,branchId:T,accountId:g||void 0,academicStructureId:V.academicStructureId||0,order:a+1,active:!0}))},[ea,eg,V.academicStructureId,M,T,g]),aR=(0,p.useMemo)(()=>{let e=new Set(eg.filter(e=>(!V.academicStructureId||!!e7(e.academicStructureId,V.academicStructureId))&&(!V.academicPeriodId||!!e7(e.academicPeriodId,V.academicPeriodId))).map(e=>e6(e.classId)).filter(Boolean)),a=em.filter(a=>!a.isDeleted&&(!1!==a.active||e.has(e6(a.id))));return a.length?a:Array.from(e).map(e=>({id:e,name:`Class ${e}`,schoolId:M,branchId:T,accountId:g||void 0,active:!0}))},[em,eg,V.academicStructureId,V.academicPeriodId,M,T,g]),aB=(0,p.useMemo)(()=>{let e=new Set(eg.filter(e=>(!V.academicStructureId||!!e7(e.academicStructureId,V.academicStructureId))&&(!V.academicPeriodId||!!e7(e.academicPeriodId,V.academicPeriodId))&&(!V.classId||!!e7(e.classId,V.classId))).map(e=>e6(e.studentId)).filter(Boolean)),a=aT.filter(a=>!a.isDeleted&&("withdrawn"!==a.status||e.has(e6(a.id))));return a.length?a:Array.from(e).map(e=>({id:e,fullName:`Student ${e}`,schoolId:M,branchId:T,accountId:g||void 0,status:"active"}))},[aT,eg,V.academicStructureId,V.academicPeriodId,V.classId,M,T,g]),aE=(0,p.useMemo)(()=>{if(eu.length)return eu;let e=new Map;return eg.forEach(a=>{let r=a.reportData||{},t=r.report||r.studentReport||r.computedReport||r.computedStudentReport||r,i=t.subjectResults||t.subjects||t.reportItems||r.subjectResults||r.subjects||r.reportItems||[];Array.isArray(i)&&i.forEach(a=>{let r=e6(a.subjectId||a.id);!r||e.has(r)||e.set(r,{id:r,name:a.subjectName||a.name||a.title||a.shortName||`Subject ${r}`,code:a.subjectCode||a.code,schoolId:M,branchId:T,accountId:g||void 0,active:!0})})}),Array.from(e.values()).sort((e,a)=>e.name.localeCompare(a.name))},[eu,eg,M,T,g]),aO=e3(aL,V.academicStructureId),aF=e3(aD,V.academicPeriodId),aU=e3(aB,V.studentId),aV=e3(aR,V.classId),aW=e3(aE,V.subjectId),aK=e9[V.mode]||V.mode.replaceAll("-"," "),aG=()=>{var e,a;let r,t,i;e="cumulative-report-print-zone",a="annual-broadsheet"===(r=V.mode)||"subject-history"===r||"promotion-summary"===r?"landscape":"portrait",(t=document.getElementById("cumulative-report-print-style"))&&t.remove(),(i=document.createElement("style")).id="cumulative-report-print-style",i.innerHTML=`
    @page {
      size: A4 ${a};
      margin: 10mm;
    }

    @media print {
      body {
        background: #ffffff !important;
      }

      body * {
        visibility: hidden !important;
      }

      #${e},
      #${e} * {
        visibility: visible !important;
      }

      #${e} {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background: #fff;
        overflow: visible !important;
      }

      .report-no-print {
        display: none !important;
      }

      .report-screen-scroll {
        overflow: visible !important;
      }

      .report-page-break {
        page-break-after: always;
      }

      .report-page-break:last-child {
        page-break-after: auto;
      }

      tr,
      td,
      th {
        page-break-inside: avoid !important;
      }
    }
  `,document.head.appendChild(i),setTimeout(()=>window.print(),120)};return f||_||j||L?(0,t.jsx)(au,{primary:A,title:"Opening My Child's Cumulative Record...",text:"Checking your linked children's historical reports, promotions and academic progression."}):b&&g?z?$||0!==es.length?M&&T?(0,t.jsxs)("main",{className:"ba-page cumulative-page",style:{"--ba-primary":A},children:[(0,t.jsx)("style",{children:av}),(0,t.jsxs)("section",{className:"ba-search-card report-no-print","aria-label":"My child's cumulative record search and actions",children:[(0,t.jsxs)("label",{className:"ba-search",children:[(0,t.jsx)("span",{children:"⌕"}),(0,t.jsx)("input",{value:R,onChange:e=>B(e.target.value),placeholder:"Search my child's cumulative record...","aria-label":"Search my child's cumulative record"})]}),(0,t.jsx)("button",{type:"button",className:"ba-add-inline",onClick:aG,"aria-label":"Print cumulative record",title:"Print",children:"⎙"}),(0,t.jsxs)("button",{type:"button",className:`ba-filter-button ${aP?"active":""}`,onClick:()=>O(!0),"aria-label":"Open cumulative filters",title:"Filters",children:[(0,t.jsx)(ax,{}),aP?(0,t.jsx)("b",{children:aP}):null]}),(0,t.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>U(!0),"aria-label":"More options",children:"⋯"})]}),aP>0&&(0,t.jsxs)("section",{className:"ba-filter-chips report-no-print","aria-label":"Active cumulative filters",children:["student-transcript"!==String(V.mode)&&(0,t.jsxs)("button",{type:"button",onClick:()=>aA(e=>({...e,mode:"student-transcript"})),children:["Mode: ",aK," \xd7"]}),V.academicStructureId&&(0,t.jsxs)("button",{type:"button",onClick:()=>aA(e=>({...e,academicStructureId:void 0})),children:["Structure: ",aO," \xd7"]}),V.academicPeriodId&&(0,t.jsxs)("button",{type:"button",onClick:()=>aA(e=>({...e,academicPeriodId:void 0})),children:["Period: ",aF," \xd7"]}),V.classId&&(0,t.jsxs)("button",{type:"button",onClick:()=>aA(e=>({...e,classId:void 0,studentId:void 0})),children:["Class: ",aV," \xd7"]}),V.studentId&&(0,t.jsxs)("button",{type:"button",onClick:()=>aA(e=>({...e,studentId:void 0})),children:["Student: ",aU," \xd7"]}),V.subjectId&&(0,t.jsxs)("button",{type:"button",onClick:()=>aA(e=>({...e,subjectId:void 0})),children:["Subject: ",aW," \xd7"]})]}),(0,t.jsxs)("section",{className:"ba-print-card",children:[(0,t.jsxs)("div",{className:"ba-print-head report-no-print",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:aK}),(0,t.jsxs)("p",{children:[aO," \xb7 ",aF,V.studentId?` \xb7 ${aU}`:""]})]}),(0,t.jsxs)("div",{className:"ba-report-toolbar",children:[(0,t.jsxs)("div",{className:"ba-output-switch",role:"group","aria-label":"Choose cumulative record output",children:[(0,t.jsx)("button",{type:"button",className:"student-transcript"===V.mode?"active":"",onClick:()=>aA(e=>({...e,mode:"student-transcript"})),title:"View cumulative transcript",children:"Transcript"}),(0,t.jsx)("button",{type:"button",className:"cumulative-book"===String(V.mode)?"active":"",onClick:()=>aA(e=>({...e,mode:"cumulative-book"})),title:"View cumulative report book",children:"Book"})]}),(0,t.jsx)("button",{type:"button",className:"primary",onClick:aG,children:"Print"})]})]}),(0,t.jsx)("div",{className:"report-screen-scroll ba-print-zone",children:(0,t.jsx)("div",{id:"cumulative-report-print-zone",children:(()=>{if("cumulative-book"===String(V.mode))return(0,t.jsx)(eE.A,{dataset:az,template:ak,settings:a_,compact:!0,pageBreakAfter:!1,mobilePreview:!0});if("student-transcript"===V.mode)return(0,t.jsx)(eO.A,{dataset:a$,template:aI,settings:aS,compact:!0,pageBreakAfter:!1,mobilePreview:!0});if("multi-period-report"===V.mode){let e;return e=an.multiPeriodReport,(0,t.jsxs)("section",{className:"print-page report-page-break cumulative-multi-period-page",style:{width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:"11mm",boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:an.header.branding.fontFamily||"Arial, sans-serif",border:"1px solid #e5e5e5"},children:[(0,t.jsx)(eG.A,{header:an.header,title:"Multi-Period Academic Report",subtitle:e?`${e.studentName} • ${e.periods.length} Periods`:void 0,orientation:"portrait"}),e?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"cr-print-summary-grid",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Student:"})," ",e.studentName]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Class:"})," ",e.className||"-"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Average:"})," ",e8(e.average,1),"%"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"GPA:"})," ",null!=e.gpa?e8(e.gpa,2):"-"]})]}),(0,t.jsxs)("table",{style:ay,children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{style:{...aw,textAlign:"left"},children:"Subject"}),e.periods.map(e=>(0,t.jsx)("th",{style:aw,children:e.academicPeriodName},e.academicPeriodId)),(0,t.jsx)("th",{style:aw,children:"Average"}),(0,t.jsx)("th",{style:aw,children:"Best"}),(0,t.jsx)("th",{style:aw,children:"Latest"}),(0,t.jsx)("th",{style:aw,children:"Trend"}),(0,t.jsx)("th",{style:aw,children:"Final Grade"})]})}),(0,t.jsxs)("tbody",{children:[e.subjects.map(a=>(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{style:{...aN,fontWeight:800},children:[a.subjectName,a.subjectCode&&(0,t.jsx)("div",{style:{fontSize:8,opacity:.7},children:a.subjectCode})]}),e.periods.map(e=>{let r=a.periodScores.find(a=>a.academicPeriodId===e.academicPeriodId);return(0,t.jsx)("td",{style:{...aN,textAlign:"center"},children:r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("strong",{children:[e8(r.percentage,1),"%"]}),(0,t.jsx)("div",{style:{fontSize:8,opacity:.7},children:r.grade||"-"})]}):"-"},`${a.subjectName}-${e.academicPeriodId}`)}),(0,t.jsxs)("td",{style:{...aN,textAlign:"center",fontWeight:800},children:[e8(a.average,1),"%"]}),(0,t.jsxs)("td",{style:{...aN,textAlign:"center"},children:[e8(a.bestScore,1),"%"]}),(0,t.jsxs)("td",{style:{...aN,textAlign:"center"},children:[e8(a.latestScore,1),"%"]}),(0,t.jsx)("td",{style:{...aN,textAlign:"center"},children:e5(a.trend)}),(0,t.jsx)("td",{style:{...aN,textAlign:"center",fontWeight:800},children:a.finalGrade||"-"})]},a.subjectId||a.subjectName)),!e.subjects.length&&(0,t.jsx)("tr",{children:(0,t.jsx)("td",{style:{...aN,textAlign:"center",padding:16},colSpan:e.periods.length+6,children:"No multi-period subject records found."})})]})]}),(0,t.jsx)(af,{primary:A,schoolName:an.header.branding.schoolName,label:"Official multi-period academic report"})]}):(0,t.jsx)("div",{className:"cr-print-empty",children:"Select a student with multiple historical snapshots to generate a multi-period report."})]})}if("annual-broadsheet"===V.mode)return(0,t.jsx)(eV.A,{header:an.header,broadsheet:an.annualBroadsheet,pageBreakAfter:!1});if("subject-history"===V.mode){let e;return e=an.subjectHistory,(0,t.jsxs)("section",{className:"print-page report-page-break cumulative-subject-history-page",style:aj,children:[(0,t.jsx)(eG.A,{header:an.header,title:"Subject Longitudinal Analytics",subtitle:e?`${e.subjectName} • ${e.totalStudents} Students • ${e.totalPeriods} Periods`:void 0,orientation:"landscape"}),e?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"cr-print-summary-grid six",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Subject:"})," ",e.subjectName]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Students:"})," ",e.totalStudents]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Periods:"})," ",e.totalPeriods]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Average:"})," ",e8(e.subjectAverage,1),"%"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Improving:"})," ",e.improvingCount]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Declining:"})," ",e.decliningCount]})]}),(0,t.jsxs)("table",{style:ay,children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{style:aw,children:"#"}),(0,t.jsx)("th",{style:{...aw,textAlign:"left",minWidth:180},children:"Student"}),(0,t.jsx)("th",{style:aw,children:"Class"}),(0,t.jsx)("th",{style:aw,children:"Periods"}),(0,t.jsx)("th",{style:aw,children:"Average"}),(0,t.jsx)("th",{style:aw,children:"Highest"}),(0,t.jsx)("th",{style:aw,children:"Lowest"}),(0,t.jsx)("th",{style:aw,children:"Latest"}),(0,t.jsx)("th",{style:aw,children:"Trend"})]})}),(0,t.jsxs)("tbody",{children:[e.students.map((e,a)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{style:{...aN,textAlign:"center"},children:a+1}),(0,t.jsxs)("td",{style:{...aN,fontWeight:800},children:[e.studentName,e.admissionNumber&&(0,t.jsx)("div",{style:{fontSize:8,opacity:.7},children:e.admissionNumber})]}),(0,t.jsx)("td",{style:{...aN,textAlign:"center"},children:e.className||"-"}),(0,t.jsx)("td",{style:{...aN,textAlign:"center"},children:e.periods.length}),(0,t.jsxs)("td",{style:{...aN,textAlign:"center",fontWeight:800},children:[e8(e.average,1),"%"]}),(0,t.jsxs)("td",{style:{...aN,textAlign:"center"},children:[e8(e.highest,1),"%"]}),(0,t.jsxs)("td",{style:{...aN,textAlign:"center"},children:[e8(e.lowest,1),"%"]}),(0,t.jsx)("td",{style:{...aN,textAlign:"center"},children:null!=e.latest?`${e8(e.latest,1)}%`:"-"}),(0,t.jsx)("td",{style:{...aN,textAlign:"center",fontWeight:800},children:e5(e.trend)})]},e.studentId)),!e.students.length&&(0,t.jsx)("tr",{children:(0,t.jsx)("td",{style:{...aN,textAlign:"center",padding:16},colSpan:9,children:"No subject history records found."})})]})]}),(0,t.jsx)(af,{primary:A,schoolName:an.header.branding.schoolName,label:"Official subject history"})]}):(0,t.jsx)("div",{className:"cr-print-empty",children:"Select a subject to generate longitudinal subject analytics."})]})}return"promotion-summary"===V.mode?(0,t.jsx)(eW.A,{header:an.header,summary:an.promotionSummary,pageBreakAfter:!1}):(0,t.jsx)(eK.A,{header:an.header,steps:an.progressionTimeline,studentName:ao?.fullName||an.studentTranscript?.studentName,pageBreakAfter:!1})})()})})]}),E&&(0,t.jsx)(ag,{filters:V,setBranchLockedFilters:aA,academicStructures:aL,academicPeriods:aD,classes:aR,students:aB,subjects:aE,onClose:()=>O(!1)}),F&&(0,t.jsx)(ab,{mode:V.mode,setMode:e=>{aA(a=>({...a,mode:e})),U(!1)},onRefresh:async()=>{U(!1),await eT()},onPrint:()=>{U(!1),aG()},onClose:()=>U(!1)})]}):(0,t.jsxs)("main",{className:"ba-page cumulative-page",style:{"--ba-primary":A},children:[(0,t.jsx)("style",{children:av}),(0,t.jsxs)("section",{className:"ba-state",children:[(0,t.jsx)("h2",{children:"Parent workspace unavailable"}),(0,t.jsx)("p",{children:"Your child's cumulative record requires an active school and branch workspace."}),(0,t.jsx)("button",{type:"button",className:"ba-state-button",onClick:()=>x.push("/parent"),children:"Return to Parent Home"})]})]}):(0,t.jsx)(au,{primary:A,title:"Parent profile not linked",text:"The active parent membership needs a parentId, parentLocalId, or matching parent contact."}):(0,t.jsx)(au,{primary:A,title:"Parent access required",text:"Open this page from an active parent-role workspace."}):(0,t.jsx)(au,{primary:A,title:"Redirecting to login...",text:"You must sign in before viewing your child's cumulative record."})},childFees:function(){let e=(0,c.useRouter)(),a=(0,q.p)(),{loading:r,setLoading:i}=(0,Z.J)(),{accountId:s,authenticated:n,loading:h}=(0,o.F)(),{settings:u,loading:x}=(0,d.t)(),{activeMembership:g}=(0,m.A)(),{activeSchool:b,activeSchoolId:f,activeBranch:v,activeBranchId:j}=(0,l.c)(),y=(0,p.useMemo)(()=>aw("eleeveon_open_workspace"),[]),w=(0,p.useMemo)(()=>aw("activeMembership"),[]),N=(0,p.useMemo)(()=>y?.membership||g||w||{},[g,y,w]),k=(0,p.useMemo)(()=>aS(s)||aS(N.accountId)||aS(u?.accountId),[N.accountId,s,u?.accountId]),_=(0,p.useMemo)(()=>ak(y?.schoolId,N.schoolId,N.school?.id,f,b?.id,u?.schoolId,ay("activeSchoolId")),[b?.id,f,N.school?.id,N.schoolId,y?.schoolId,u?.schoolId]),I=(0,p.useMemo)(()=>ak(y?.branchId,N.branchId,N.schoolBranchId,N.branch?.id,j,v?.id,u?.branchId,ay("activeBranchId")),[v?.id,j,N.branch?.id,N.branchId,N.schoolBranchId,y?.branchId,u?.branchId]),S=ak(N.parentId,N.parentLocalId,N.parent?.id,ay("activeParentId")),C="parent"===String(N.role||"").toLowerCase(),$=u?.primaryColor||"var(--primary-color,#2563eb)",[z,A]=(0,p.useState)([]),[P,T]=(0,p.useState)([]),[L,D]=(0,p.useState)([]),[R,B]=(0,p.useState)([]),[E,O]=(0,p.useState)([]),[F,U]=(0,p.useState)([]),[V,W]=(0,p.useState)([]),[K,G]=(0,p.useState)([]),[H,Y]=(0,p.useState)([]),[X,Q]=(0,p.useState)([]),[ee,ea]=(0,p.useState)([]),[er,et]=(0,p.useState)([]),[ei,es]=(0,p.useState)("invoices"),[en,eo]=(0,p.useState)("cards"),[ed,el]=(0,p.useState)(""),[ep,ec]=(0,p.useState)(""),[em,eh]=(0,p.useState)("all"),[eu,ex]=(0,p.useState)(""),[eg,eb]=(0,p.useState)(""),[ef,ev]=(0,p.useState)(!1),[ej,ey]=(0,p.useState)(!1),[ew,eN]=(0,p.useState)(!1),[ek,e_]=(0,p.useState)(null),[eI,eS]=(0,p.useState)(""),eC=(0,M.D)({accountId:k,ownerTable:"students",rows:P,fields:[{fieldKey:"photo",mediaIdKey:"photoMediaId"}]});async function e$(){if(!n||!k||!_||!I||!C)return void i(!1);i(!0);try{let[e,a,r,t,i,s,n,o,d,l,p,c]=await Promise.all([(0,aj.uJ)("parents"),(0,aj.uJ)("students"),(0,aj.uJ)("studentParents"),(0,aj.uJ)("studentEnrollments"),(0,aj.uJ)("classes"),(0,aj.uJ)("academicStructures"),(0,aj.uJ)("academicPeriods"),(0,aj.uJ)("schoolCurrencySettings"),(0,aj.uJ)("feeStructures"),(0,aj.uJ)("studentFeeInvoices"),(0,aj.uJ)("studentFeeInvoiceItems"),(0,aj.uJ)("studentFeePayments")]),m=e=>e.filter(e=>!!e&&!0!==e.isDeleted&&(!k||!e.accountId||e.accountId===k)&&(!_||!e.schoolId||!!a_(e.schoolId,_))&&(!I||!e.branchId||!!a_(e.branchId,I)));A(m(e)),T(m(a).sort((e,a)=>aC(e).localeCompare(aC(a)))),D(m(r)),B(m(t)),O(m(i)),U(m(s)),W(m(n)),G(m(o)),Y(m(d)),Q(m(l)),ea(m(p)),et(m(c))}catch(e){console.error("Failed to load child fees:",e),eS("Unable to load child fees.")}finally{i(!1)}}(0,p.useEffect)(()=>{!h&&(n&&k||e.replace("/login"))},[k,h,n,e]),(0,p.useEffect)(()=>{h||x||e$()},[n,k,_,I,h,x,a,C]);let ez=(0,p.useMemo)(()=>{if(S)return S;let e=aS(N.email||N.user?.email).toLowerCase(),a=aS(N.phone||N.user?.phone).replace(/\s+/g,"");return aN(z.find(r=>{let t=aS(r.email).toLowerCase(),i=aS(r.phone).replace(/\s+/g,"");return e&&e===t||a&&a===i}))},[N,S,z]),eA=(0,p.useMemo)(()=>new Map(E.map(e=>[aN(e),aC(e)])),[E]),eP=(0,p.useMemo)(()=>new Map(F.map(e=>[aN(e),aC(e)])),[F]),eM=(0,p.useMemo)(()=>new Map(V.map(e=>[aN(e),aC(e)])),[V]),eT=(0,p.useMemo)(()=>new Map(P.map(e=>[aN(e),e])),[P]),eL=(0,p.useMemo)(()=>new Map(X.map(e=>[aN(e),e])),[X]),eD=(0,p.useMemo)(()=>{if(!ez)return[];let e=new Set(L.filter(e=>a_(e.parentId,ez)).map(e=>aN(e.studentId)));return P.filter(a=>e.has(aN(a))).map(e=>{let a=aN(e),r=R.find(e=>a_(e.studentId,a)&&["active","promoted"].includes(String(e.status||"").toLowerCase()))||R.find(e=>a_(e.studentId,a)&&"completed"===String(e.status||"").toLowerCase()),t=ak(r?.classId,e.currentClassId);return{id:a,name:aC(e),admissionNumber:aS(e.admissionNumber,"No admission number"),className:eA.get(t)||"Class not assigned",photo:eC[a]?.photo||(String(e.photo||"").startsWith("blob:")?void 0:e.photo)}})},[eA,R,eC,ez,L,P]);(0,p.useEffect)(()=>{!ed&&eD.length&&el(eD[0].id),ed&&!eD.some(e=>e.id===ed)&&el(eD[0]?.id||"")},[ed,eD]);let eR=(0,p.useMemo)(()=>new Set(eD.map(e=>e.id)),[eD]),eB=(0,p.useMemo)(()=>{let e=K.find(e=>e.defaultForFees)||K.find(e=>!1!==e.active)||K[0];return{code:aS(e?.currencyCode||X[0]?.currencyCode,"GHS"),symbol:aS(e?.currencySymbol,"₵")}},[K,X]),eE=(0,p.useMemo)(()=>er.filter(e=>["paid","success","succeeded"].includes(String(e.status||"paid").toLowerCase())),[er]),eO=(0,p.useMemo)(()=>{let e=ep.trim().toLowerCase();return X.filter(e=>eR.has(aN(e.studentId))).filter(e=>!ed||a_(e.studentId,ed)).filter(e=>!eu||a_(e.academicStructureId,eu)).filter(e=>!eg||a_(e.academicPeriodId,eg)).map(e=>{var a,r;let t=eE.filter(a=>a_(a.invoiceId,aN(e))).reduce((e,a)=>e+aI(a.amount),0),i=Math.max(aI(e.amountPaid),t),s=Math.max(0,aI(e.total)-i),n=(a=aI(e.total),r=e.dueDate,a>0&&i>=a?"paid":i>0?"part_paid":r&&new Date(r).getTime()<Date.now()?"overdue":"issued"),o=eT.get(aN(e.studentId));return{...e,amountPaidValue:i,balanceValue:s,statusValue:n,studentName:aC(o),className:eA.get(aN(e.classId))||"Class"}}).filter(e=>"all"===em||e.statusValue===em).filter(a=>!e||[a.invoiceNumber,a.studentName,a.className,a.statusValue,a.note,eP.get(aN(a.academicStructureId)),eM.get(aN(a.academicPeriodId))].join(" ").toLowerCase().includes(e)).sort((e,a)=>new Date(a.issueDate||a.createdAt||0).getTime()-new Date(e.issueDate||e.createdAt||0).getTime())},[ed,eR,eA,X,eg,eM,ep,em,eu,eP,eT,eE]),eF=(0,p.useMemo)(()=>{let e=ep.trim().toLowerCase();return er.filter(e=>eR.has(aN(e.studentId))).filter(e=>!ed||a_(e.studentId,ed)).filter(e=>{let a=eL.get(aN(e.invoiceId));return(!eu||!!a_(a?.academicStructureId,eu))&&(!eg||!!a_(a?.academicPeriodId,eg))}).filter(a=>{if(!e)return!0;let r=eL.get(aN(a.invoiceId));return[a.receiptNumber,a.referenceNumber,a.providerReference,a.method,a.status,a.payerName,aC(eT.get(aN(a.studentId))),r?.invoiceNumber].join(" ").toLowerCase().includes(e)}).sort((e,a)=>new Date(a.paidAt||a.date||a.createdAt||0).getTime()-new Date(e.paidAt||e.date||e.createdAt||0).getTime())},[ed,eR,eL,er,eg,ep,eu,eT]),eU=(0,p.useMemo)(()=>{let e=eO.reduce((e,a)=>e+aI(a.total),0);return{total:e,paid:eO.reduce((e,a)=>e+a.amountPaidValue,0),balance:eO.reduce((e,a)=>e+a.balanceValue,0),invoices:eO.length,paidInvoices:eO.filter(e=>"paid"===e.statusValue).length,overdue:eO.filter(e=>"overdue"===e.statusValue).length,partPaid:eO.filter(e=>"part_paid"===e.statusValue).length,payments:eF.length}},[eO,eF.length]),eV=eD.find(e=>e.id===ed),eW=eu?V.filter(e=>a_(e.academicStructureId,eu)):V,eK=[ed,eu,eg,"all"!==em?em:""].filter(Boolean).length,eG=e=>ee.filter(a=>a_(a.invoiceId,e)).sort((e,a)=>aI(e.order)-aI(a.order));return h||x||r?(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-page cf-loading`,children:[(0,t.jsx)("div",{className:`jsx-${aD.__hash} cf-spinner`}),(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Loading child fees…"}),(0,t.jsx)(J(),{id:aD.__hash,children:aD})]}):C?(0,t.jsxs)("div",{style:{"--primary":$},className:`jsx-${aD.__hash} cf-page`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-toolbar`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-search`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"⌕"}),(0,t.jsx)("input",{value:ep,onChange:e=>ec(e.target.value),placeholder:"Search invoices or receipts…","aria-label":"Search child fees",className:`jsx-${aD.__hash}`}),ep?(0,t.jsx)("button",{onClick:()=>ec(""),"aria-label":"Clear search",className:`jsx-${aD.__hash}`,children:"\xd7"}):null]}),(0,t.jsxs)("button",{onClick:()=>ev(!0),"aria-label":"Fee filters",className:`jsx-${aD.__hash} cf-icon-btn ${ef?"active":""}`,children:[(0,t.jsx)(aT,{}),eK?(0,t.jsx)("span",{className:`jsx-${aD.__hash} cf-badge`,children:eK}):null]}),(0,t.jsx)("button",{onClick:()=>ey(!0),"aria-label":"More options",className:`jsx-${aD.__hash} cf-icon-btn`,children:"⋯"})]}),eD.length>1?(0,t.jsx)("div",{className:`jsx-${aD.__hash} cf-child-strip`,children:eD.map(e=>(0,t.jsxs)("button",{onClick:()=>el(e.id),className:`jsx-${aD.__hash} `+((e.id===ed?"selected":"")||""),children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash} cf-mini-avatar`,children:e.photo?(0,t.jsx)("img",{src:e.photo,alt:"",className:`jsx-${aD.__hash}`}):e.name.charAt(0).toUpperCase()}),(0,t.jsxs)("span",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:e.name}),(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:e.className})]})]},e.id))}):null,eV?(0,t.jsxs)("section",{className:`jsx-${aD.__hash} cf-child-card`,children:[(0,t.jsx)("div",{className:`jsx-${aD.__hash} cf-avatar`,children:eV.photo?(0,t.jsx)("img",{src:eV.photo,alt:eV.name,className:`jsx-${aD.__hash}`}):eV.name.charAt(0).toUpperCase()}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-child-copy`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("h1",{className:`jsx-${aD.__hash}`,children:eV.name}),(0,t.jsx)("button",{onClick:()=>eN(!0),"aria-label":"Data status",className:`jsx-${aD.__hash} cf-sync-dot`})]}),(0,t.jsxs)("p",{className:`jsx-${aD.__hash}`,children:[eV.admissionNumber," \xb7 ",eV.className]})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-balance-block`,children:[(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Outstanding"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:a$(eU.balance,eB.code)})]})]}):null,(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-summary-grid`,children:[(0,t.jsxs)("article",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash} blue`,children:"Σ"}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:a$(eU.total,eB.code)}),(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Total billed"})]})]}),(0,t.jsxs)("article",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash} green`,children:"✓"}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:a$(eU.paid,eB.code)}),(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Paid"})]})]}),(0,t.jsxs)("article",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash} red`,children:"!"}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:a$(eU.balance,eB.code)}),(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Balance"})]})]}),(0,t.jsxs)("article",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash} orange`,children:"▤"}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:eU.invoices}),(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Invoices"})]})]})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-tabs`,children:[(0,t.jsxs)("button",{onClick:()=>es("invoices"),className:`jsx-${aD.__hash} `+(("invoices"===ei?"active":"")||""),children:["Invoices ",(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:eO.length})]}),(0,t.jsxs)("button",{onClick:()=>es("payments"),className:`jsx-${aD.__hash} `+(("payments"===ei?"active":"")||""),children:["Payments ",(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:eF.length})]})]}),ez?eD.length?"analytics"===en?(0,t.jsxs)("section",{className:`jsx-${aD.__hash} cf-analytics`,children:[(0,t.jsxs)("article",{className:`jsx-${aD.__hash} cf-analytics-card cf-overview`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Payment progress"}),(0,t.jsxs)("strong",{className:`jsx-${aD.__hash}`,children:[eU.total?Math.round(eU.paid/eU.total*100):0,"%"]}),(0,t.jsxs)("small",{className:`jsx-${aD.__hash}`,children:[eU.paidInvoices," of ",eU.invoices," invoices fully paid"]})]}),(0,t.jsx)("div",{style:{"--value":`${eU.total?Math.round(eU.paid/eU.total*100):0}%`},className:`jsx-${aD.__hash} cf-donut`,children:(0,t.jsxs)("span",{className:`jsx-${aD.__hash}`,children:[eU.total?Math.round(eU.paid/eU.total*100):0,"%"]})})]}),(0,t.jsxs)("article",{className:`jsx-${aD.__hash} cf-analytics-card`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-analytics-title`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:"Invoice health"}),(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Current filtered child and period"})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-metric-list`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Paid"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:eU.paidInvoices})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Part paid"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:eU.partPaid})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Overdue"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:eU.overdue})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Payments"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:eU.payments})]})]})]})]}):"invoices"===ei?eO.length?"table"===en?(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-table-shell`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-table-title`,children:["Invoices (",eO.length,")"]}),(0,t.jsx)("div",{className:`jsx-${aD.__hash} cf-table-scroll`,children:(0,t.jsxs)("table",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("thead",{className:`jsx-${aD.__hash}`,children:(0,t.jsxs)("tr",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("th",{className:`jsx-${aD.__hash}`,children:"Invoice"}),(0,t.jsx)("th",{className:`jsx-${aD.__hash}`,children:"Status"}),(0,t.jsx)("th",{className:`jsx-${aD.__hash}`,children:"Total"}),(0,t.jsx)("th",{className:`jsx-${aD.__hash}`,children:"Paid"}),(0,t.jsx)("th",{className:`jsx-${aD.__hash}`,children:"Balance"}),(0,t.jsx)("th",{className:`jsx-${aD.__hash}`,children:"Due"})]})}),(0,t.jsx)("tbody",{className:`jsx-${aD.__hash}`,children:eO.map(e=>(0,t.jsxs)("tr",{onClick:()=>e_({kind:"invoice",row:e}),className:`jsx-${aD.__hash}`,children:[(0,t.jsxs)("td",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:aS(e.invoiceNumber,"Invoice")}),(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:e.className})]}),(0,t.jsx)("td",{className:`jsx-${aD.__hash}`,children:(0,t.jsx)(aM,{tone:aP(e.statusValue),children:aA(e.statusValue)})}),(0,t.jsx)("td",{className:`jsx-${aD.__hash}`,children:a$(e.total,e.currencyCode||eB.code)}),(0,t.jsx)("td",{className:`jsx-${aD.__hash}`,children:a$(e.amountPaidValue,e.currencyCode||eB.code)}),(0,t.jsx)("td",{className:`jsx-${aD.__hash}`,children:a$(e.balanceValue,e.currencyCode||eB.code)}),(0,t.jsx)("td",{className:`jsx-${aD.__hash}`,children:az(e.dueDate)})]},aN(e)))})]})})]}):(0,t.jsx)("div",{className:`jsx-${aD.__hash} cf-card-grid`,children:eO.map(e=>(0,t.jsxs)("article",{onClick:()=>e_({kind:"invoice",row:e}),className:`jsx-${aD.__hash} cf-invoice-card`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-card-top`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:aS(e.invoiceNumber,"Invoice")}),(0,t.jsxs)("small",{className:`jsx-${aD.__hash}`,children:[eP.get(aN(e.academicStructureId))||"Academic year"," ","\xb7"," ",eM.get(aN(e.academicPeriodId))||"Period"]})]}),(0,t.jsx)(aM,{tone:aP(e.statusValue),children:aA(e.statusValue)})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-money-row`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Total"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:a$(e.total,e.currencyCode||eB.code)})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Paid"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:a$(e.amountPaidValue,e.currencyCode||eB.code)})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Balance"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash} `+((e.balanceValue?"danger":"")||""),children:a$(e.balanceValue,e.currencyCode||eB.code)})]})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-card-foot`,children:[(0,t.jsxs)("span",{className:`jsx-${aD.__hash}`,children:["Issued ",az(e.issueDate)]}),(0,t.jsxs)("span",{className:`jsx-${aD.__hash}`,children:["Due ",az(e.dueDate)]})]})]},aN(e)))}):(0,t.jsx)(aL,{title:"No invoices found",body:"Try another child, period or invoice status."}):eF.length?"table"===en?(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-table-shell`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-table-title`,children:["Payments (",eF.length,")"]}),(0,t.jsx)("div",{className:`jsx-${aD.__hash} cf-table-scroll`,children:(0,t.jsxs)("table",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("thead",{className:`jsx-${aD.__hash}`,children:(0,t.jsxs)("tr",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("th",{className:`jsx-${aD.__hash}`,children:"Receipt"}),(0,t.jsx)("th",{className:`jsx-${aD.__hash}`,children:"Status"}),(0,t.jsx)("th",{className:`jsx-${aD.__hash}`,children:"Method"}),(0,t.jsx)("th",{className:`jsx-${aD.__hash}`,children:"Amount"}),(0,t.jsx)("th",{className:`jsx-${aD.__hash}`,children:"Date"})]})}),(0,t.jsx)("tbody",{className:`jsx-${aD.__hash}`,children:eF.map(e=>(0,t.jsxs)("tr",{onClick:()=>e_({kind:"payment",row:e}),className:`jsx-${aD.__hash}`,children:[(0,t.jsxs)("td",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:aS(e.receiptNumber,"No receipt")}),(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:aS(e.referenceNumber,"No reference")})]}),(0,t.jsx)("td",{className:`jsx-${aD.__hash}`,children:(0,t.jsx)(aM,{tone:aP(e.status),children:aA(e.status)})}),(0,t.jsx)("td",{className:`jsx-${aD.__hash}`,children:aA(e.method)}),(0,t.jsx)("td",{className:`jsx-${aD.__hash}`,children:a$(e.amount,e.currencyCode||eB.code)}),(0,t.jsx)("td",{className:`jsx-${aD.__hash}`,children:az(e.paidAt||e.date)})]},aN(e)))})]})})]}):(0,t.jsx)("div",{className:`jsx-${aD.__hash} cf-card-grid`,children:eF.map(e=>{let a=eL.get(aN(e.invoiceId));return(0,t.jsxs)("article",{onClick:()=>e_({kind:"payment",row:e}),className:`jsx-${aD.__hash} cf-payment-card`,children:[(0,t.jsx)("div",{className:`jsx-${aD.__hash} cf-payment-icon`,children:"✓"}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-payment-main`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:a$(e.amount,e.currencyCode||eB.code)}),(0,t.jsx)(aM,{tone:aP(e.status),children:aA(e.status)})]}),(0,t.jsxs)("p",{className:`jsx-${aD.__hash}`,children:[aA(e.method)," \xb7"," ",aS(a?.invoiceNumber,"General payment")]}),(0,t.jsxs)("small",{className:`jsx-${aD.__hash}`,children:[az(e.paidAt||e.date)," \xb7"," ",aS(e.receiptNumber,"No receipt number")]})]})]},aN(e))})}):(0,t.jsx)(aL,{title:"No payment history",body:"Successful and pending payments will appear here."}):(0,t.jsx)(aL,{title:"No linked children",body:"No active student-parent relationship was found for this parent."}):(0,t.jsx)(aL,{title:"Parent profile not linked",body:"The active membership needs a parentId or parentLocalId."}),ef?(0,t.jsx)("div",{onMouseDown:()=>ev(!1),className:`jsx-${aD.__hash} cf-sheet-layer`,children:(0,t.jsxs)("aside",{onMouseDown:e=>e.stopPropagation(),className:`jsx-${aD.__hash} cf-sheet`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-sheet-head`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:"Fee filters"}),(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Choose a child, period and status"})]}),(0,t.jsx)("button",{onClick:()=>ev(!1),className:`jsx-${aD.__hash}`,children:"\xd7"})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-sheet-body`,children:[(0,t.jsxs)("label",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Child"}),(0,t.jsx)("select",{value:ed,onChange:e=>el(e.target.value),className:`jsx-${aD.__hash}`,children:eD.map(e=>(0,t.jsx)("option",{value:e.id,className:`jsx-${aD.__hash}`,children:e.name},e.id))})]}),(0,t.jsxs)("label",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Academic structure"}),(0,t.jsxs)("select",{value:eu,onChange:e=>{ex(e.target.value),eb("")},className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("option",{value:"",className:`jsx-${aD.__hash}`,children:"All structures"}),F.map(e=>(0,t.jsx)("option",{value:aN(e),className:`jsx-${aD.__hash}`,children:aC(e)},aN(e)))]})]}),(0,t.jsxs)("label",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Academic period"}),(0,t.jsxs)("select",{value:eg,onChange:e=>eb(e.target.value),className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("option",{value:"",className:`jsx-${aD.__hash}`,children:"All periods"}),eW.map(e=>(0,t.jsx)("option",{value:aN(e),className:`jsx-${aD.__hash}`,children:aC(e)},aN(e)))]})]}),(0,t.jsxs)("label",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Invoice status"}),(0,t.jsxs)("select",{value:em,onChange:e=>eh(e.target.value),className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("option",{value:"all",className:`jsx-${aD.__hash}`,children:"All statuses"}),(0,t.jsx)("option",{value:"issued",className:`jsx-${aD.__hash}`,children:"Issued"}),(0,t.jsx)("option",{value:"part_paid",className:`jsx-${aD.__hash}`,children:"Part paid"}),(0,t.jsx)("option",{value:"paid",className:`jsx-${aD.__hash}`,children:"Paid"}),(0,t.jsx)("option",{value:"overdue",className:`jsx-${aD.__hash}`,children:"Overdue"}),(0,t.jsx)("option",{value:"cancelled",className:`jsx-${aD.__hash}`,children:"Cancelled"})]})]})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-sheet-actions`,children:[(0,t.jsx)("button",{onClick:()=>{eh("all"),ex(""),eb(""),ec("")},className:`jsx-${aD.__hash} secondary`,children:"Reset"}),(0,t.jsx)("button",{onClick:()=>ev(!1),className:`jsx-${aD.__hash} primary`,children:"Apply"})]})]})}):null,ej?(0,t.jsx)("div",{onMouseDown:()=>ey(!1),className:`jsx-${aD.__hash} cf-sheet-layer`,children:(0,t.jsxs)("aside",{onMouseDown:e=>e.stopPropagation(),className:`jsx-${aD.__hash} cf-sheet cf-short-sheet`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-sheet-head`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:"View options"}),(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Change how child fees are displayed"})]}),(0,t.jsx)("button",{onClick:()=>ey(!1),className:`jsx-${aD.__hash}`,children:"\xd7"})]}),(0,t.jsx)("div",{className:`jsx-${aD.__hash} cf-view-options`,children:["cards","table","analytics"].map(e=>(0,t.jsxs)("button",{onClick:()=>{eo(e),ey(!1)},className:`jsx-${aD.__hash} `+((en===e?"selected":"")||""),children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"cards"===e?"▤":"table"===e?"▦":"⌁"}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:e.charAt(0).toUpperCase()+e.slice(1)}),(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"cards"===e?"Mobile-friendly finance cards":"table"===e?"Compact detailed rows":"Balances and payment progress"})]}),en===e?(0,t.jsx)("b",{className:`jsx-${aD.__hash}`,children:"✓"}):null]},e))})]})}):null,ek?(0,t.jsx)("div",{onMouseDown:()=>e_(null),className:`jsx-${aD.__hash} cf-sheet-layer`,children:(0,t.jsxs)("aside",{onMouseDown:e=>e.stopPropagation(),className:`jsx-${aD.__hash} cf-sheet`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-sheet-head`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:"invoice"===ek.kind?aS(ek.row.invoiceNumber,"Invoice details"):aS(ek.row.receiptNumber,"Payment details")}),(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"invoice"===ek.kind?"Invoice items and balance":"Payment and receipt information"})]}),(0,t.jsx)("button",{onClick:()=>e_(null),className:`jsx-${aD.__hash}`,children:"\xd7"})]}),"invoice"===ek.kind?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-detail-summary`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Total"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:a$(ek.row.total,ek.row.currencyCode||eB.code)})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Paid"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:a$(ek.row.amountPaidValue,ek.row.currencyCode||eB.code)})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Balance"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:a$(ek.row.balanceValue,ek.row.currencyCode||eB.code)})]})]}),(0,t.jsx)("div",{className:`jsx-${aD.__hash} cf-detail-list`,children:eG(aN(ek.row)).length?eG(aN(ek.row)).map(e=>(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsxs)("span",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:aS(e.name,"Fee item")}),(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:aS(e.description)})]}),(0,t.jsx)("b",{className:`jsx-${aD.__hash}`,children:a$(e.amount,e.currencyCode||ek.row.currencyCode||eB.code)})]},aN(e))):(0,t.jsx)("p",{className:`jsx-${aD.__hash} cf-muted`,children:"No separate invoice items were stored for this invoice."})}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-meta-list`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Status"}),(0,t.jsx)(aM,{tone:aP(ek.row.statusValue),children:aA(ek.row.statusValue)})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Issued"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:az(ek.row.issueDate)})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Due"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:az(ek.row.dueDate)})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Class"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:ek.row.className})]})]}),ek.row.balanceValue>0?(0,t.jsx)("div",{className:`jsx-${aD.__hash} cf-sheet-actions single`,children:(0,t.jsx)("button",{onClick:()=>{eS("Online checkout will open here after Paystack is connected."),window.setTimeout(()=>eS(""),3800)},className:`jsx-${aD.__hash} primary`,children:"Pay outstanding balance"})}):null]}):(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-meta-list cf-payment-detail`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Amount"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:a$(ek.row.amount,ek.row.currencyCode||eB.code)})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Status"}),(0,t.jsx)(aM,{tone:aP(ek.row.status),children:aA(ek.row.status)})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Method"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:aA(ek.row.method)})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Date"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:az(ek.row.paidAt||ek.row.date)})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Receipt"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:aS(ek.row.receiptNumber,"Not issued")})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`,children:"Reference"}),(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:aS(ek.row.providerReference||ek.row.referenceNumber,"Not available")})]})]})]})}):null,ew?(0,t.jsx)("div",{onMouseDown:()=>eN(!1),className:`jsx-${aD.__hash} cf-sheet-layer`,children:(0,t.jsxs)("aside",{onMouseDown:e=>e.stopPropagation(),className:`jsx-${aD.__hash} cf-sheet cf-short-sheet`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-sheet-head`,children:[(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:"Fee data status"}),(0,t.jsx)("small",{className:`jsx-${aD.__hash}`,children:"Offline-first parent view"})]}),(0,t.jsx)("button",{onClick:()=>eN(!1),className:`jsx-${aD.__hash}`,children:"\xd7"})]}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-status-panel`,children:[(0,t.jsx)("span",{className:`jsx-${aD.__hash}`}),(0,t.jsxs)("div",{className:`jsx-${aD.__hash}`,children:[(0,t.jsx)("strong",{className:`jsx-${aD.__hash}`,children:"Available on this device"}),(0,t.jsx)("p",{className:`jsx-${aD.__hash}`,children:"Invoices and payment history are read from the latest synchronized local school data."})]})]})]})}):null,eI?(0,t.jsx)("div",{className:`jsx-${aD.__hash} cf-toast`,children:eI}):null,(0,t.jsx)(J(),{id:aD.__hash,children:aD})]}):(0,t.jsxs)("div",{className:`jsx-${aD.__hash} cf-page cf-state`,children:[(0,t.jsx)("div",{className:`jsx-${aD.__hash} cf-state-icon`,children:"!"}),(0,t.jsx)("h2",{className:`jsx-${aD.__hash}`,children:"Fees unavailable"}),(0,t.jsx)("p",{className:`jsx-${aD.__hash}`,children:"This page is available to an active parent membership."}),(0,t.jsx)(J(),{id:aD.__hash,children:aD})]})},announcements:function(){var e;let a=(0,c.useRouter)(),{accountId:r,authenticated:i,loading:s}=(0,o.F)(),{settings:n,loading:m}=(0,d.t)(),{activeSchool:u,activeSchoolId:x,activeBranch:g,activeBranchId:b,loading:f}=(0,l.c)(),v=x||u?.id||n?.schoolId,j=b||g?.id||n?.branchId,y=n?.primaryColor||"var(--primary-color, #2563eb)",[w,N]=(0,p.useState)(!0),[k,_]=(0,p.useState)(null),[I,S]=(0,p.useState)([]),[C,$]=(0,p.useState)("cards"),[z,A]=(0,p.useState)([]),[P,M]=(0,p.useState)([]),[T,L]=(0,p.useState)(""),[D,R]=(0,p.useState)("all");(0,p.useEffect)(()=>{!s&&!f&&(i&&r||a.replace("/login"))},[s,f,i,r,a]);let B=async()=>{if(!r||!v||!j)return void N(!1);try{N(!0);let e=await aY(r,Number(v),Number(j));_(e.parent),S(e.children);let[a,t]=await Promise.all([aU("announcements"),aU("announcementRecipients")]),i=new Set(e.children.map(e=>Number(e.classId||e.currentClassId)).filter(Boolean)),s=a.filter(e=>{if(e.isDeleted||e.accountId&&e.accountId!==r||Number(e.schoolId)!==Number(v))return!1;let a=e.targetRoles||[],t=e.targetBranchIds||[],s=String(e.audience||e.targetRole||"").toLowerCase();return Number(e.branchId)===Number(j)||t.includes(Number(j))||s.includes("parent")||s.includes("guardian")||a.includes("parent")||"whole_branch"===s||i.has(Number(e.classId||e.scopeId))});A(s),M(t.filter(e=>aF(e,r,Number(v),Number(j))))}finally{N(!1)}};(0,p.useEffect)(()=>{B()},[r,v,j]);let E=(0,p.useMemo)(()=>{let e=T.toLowerCase().trim();return z.filter(a=>("all"===D||String(a.status||"sent")===D)&&(!e||`${a.title} ${a.body} ${a.message} ${a.audience} ${a.priority}`.toLowerCase().includes(e))).sort((e,a)=>aR(a.sentAt||a.publishAt||a.createdAt)-aR(e.sentAt||e.publishAt||e.createdAt))},[z,T,D]),O=(0,p.useMemo)(()=>({total:z.length,unread:z.filter(e=>!P.some(a=>a.announcementId===e.id&&(a.readAt||a.acknowledgedAt))).length,urgent:z.filter(e=>"urgent"===e.priority||"high"===e.priority).length,sent:z.filter(e=>"sent"===String(e.status||"sent")).length,acknowledged:P.filter(e=>e.acknowledgedAt).length,children:I.length}),[z,P,I]),F=async e=>{let a=h.db.announcementRecipients;if(!a)return;let t=P.find(a=>a.announcementId===e.id&&("parent"===a.role||a.email===k?.email));t?.id?await a.update(t.id,{status:"acknowledged",readAt:t.readAt||aB(),acknowledgedAt:aB(),updatedAt:aB(),version:aR(t.version)+1,synced:"pending"}):await a.add({accountId:r,schoolId:Number(v),branchId:Number(j),announcementId:e.id,role:"parent",email:k?.email,phone:k?.phone,status:"acknowledged",deliveredAt:aB(),readAt:aB(),acknowledgedAt:aB(),isDeleted:!1,createdAt:aB(),updatedAt:aB(),version:1,synced:"pending"}),await B()};return w||s||m||f?(0,t.jsxs)("main",{className:"pp-page",style:{"--pp-primary":y},children:[(0,t.jsx)("style",{children:aH}),(0,t.jsxs)("section",{className:"pp-state",children:[(0,t.jsx)("h2",{children:"Opening announcements..."}),(0,t.jsx)("p",{children:"Loading parent notices."})]})]}):(0,t.jsxs)("main",{className:"pp-page",style:{"--pp-primary":y},children:[(0,t.jsx)("style",{children:aH}),(0,t.jsxs)("section",{className:"pp-hero",children:[(0,t.jsxs)("div",{className:"pp-hero-left",children:[(0,t.jsx)("div",{className:"pp-icon",children:"\uD83D\uDCE3"}),(0,t.jsxs)("div",{className:"pp-title",children:[(0,t.jsx)("p",{children:"Parent Communication"}),(0,t.jsx)("h2",{children:"Announcements"}),(0,t.jsxs)("span",{children:[(e=k||{},aE(e?.fullName||e?.name||e?.title||e?.label||e?.email,"Unnamed"))," \xb7 Receive only"]})]})]}),(0,t.jsx)("div",{className:"pp-actions",children:(0,t.jsx)("button",{className:"pp-btn",onClick:B,children:"Refresh"})})]}),(0,t.jsxs)("section",{className:"pp-summary-grid",children:[(0,t.jsx)(aW,{label:"Announcements",value:O.total,icon:"\uD83D\uDCE3"}),(0,t.jsx)(aW,{label:"Unread",value:O.unread,icon:"\uD83D\uDD34",warning:O.unread>0}),(0,t.jsx)(aW,{label:"Urgent/High",value:O.urgent,icon:"⚠️",warning:O.urgent>0}),(0,t.jsx)(aW,{label:"Sent",value:O.sent,icon:"✅",positive:!0}),(0,t.jsx)(aW,{label:"Acknowledged",value:O.acknowledged,icon:"\uD83D\uDC4D",positive:!0}),(0,t.jsx)(aW,{label:"Children",value:O.children,icon:"\uD83E\uDDD2"})]}),(0,t.jsx)(aG,{view:C,setView:$,count:E.length}),(0,t.jsxs)("section",{className:"pp-filter",children:[(0,t.jsx)("input",{value:T,onChange:e=>L(e.target.value),placeholder:"Search announcements..."}),(0,t.jsxs)("select",{value:D,onChange:e=>R(e.target.value),children:[(0,t.jsx)("option",{value:"all",children:"All"}),(0,t.jsx)("option",{value:"sent",children:"Sent"}),(0,t.jsx)("option",{value:"draft",children:"Draft"}),(0,t.jsx)("option",{value:"scheduled",children:"Scheduled"})]}),(0,t.jsx)("button",{className:"pp-btn",onClick:B,children:"Reload"})]}),"analytics"===C&&(0,t.jsx)("section",{className:"pp-section pp-breakdown-grid",children:["parents","whole_branch","all_guardians","students","teachers"].map(e=>{let a=z.filter(a=>String(a.audience||a.targetRole).includes(e)).length,r=z.length?Math.round(a/z.length*100):0;return(0,t.jsxs)("article",{className:"pp-breakdown",children:[(0,t.jsx)("strong",{children:e.replaceAll("_"," ")}),(0,t.jsx)("div",{className:"pp-bar",children:(0,t.jsx)("div",{style:{width:`${r}%`}})}),(0,t.jsxs)("div",{className:"pp-chip-row",children:[(0,t.jsx)(aV,{tone:"blue",children:a}),(0,t.jsxs)(aV,{children:[r,"%"]})]})]},e)})}),"table"===C&&(0,t.jsx)("section",{className:"pp-panel",children:(0,t.jsx)("div",{className:"pp-table-wrap",children:(0,t.jsxs)("table",{className:"pp-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Date"}),(0,t.jsx)("th",{children:"Title"}),(0,t.jsx)("th",{children:"Audience"}),(0,t.jsx)("th",{children:"Priority"}),(0,t.jsx)("th",{children:"Status"}),(0,t.jsx)("th",{children:"Action"})]})}),(0,t.jsxs)("tbody",{children:[E.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:aO(e.sentAt||e.publishAt||e.createdAt)}),(0,t.jsxs)("td",{children:[(0,t.jsx)("strong",{children:e.title}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{children:aE(e.body||e.message).slice(0,80)})]}),(0,t.jsx)("td",{children:e.audience||e.targetRole||"branch"}),(0,t.jsx)("td",{children:(0,t.jsx)(aV,{tone:"urgent"===e.priority?"red":"high"===e.priority?"orange":"blue",children:e.priority||"normal"})}),(0,t.jsx)("td",{children:(0,t.jsx)(aV,{tone:"draft"===e.status?"gray":"green",children:e.status||"sent"})}),(0,t.jsx)("td",{children:(0,t.jsx)("button",{className:"pp-btn",onClick:()=>F(e),children:"Acknowledge"})})]},e.id)),!E.length&&(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:6,children:(0,t.jsx)(aK,{text:"No announcements found."})})})]})]})})}),"cards"===C&&(0,t.jsx)("section",{className:"pp-section",children:(0,t.jsxs)("div",{className:"pp-list",children:[E.map(e=>(0,t.jsxs)("article",{className:"pp-card",children:[(0,t.jsxs)("div",{className:"pp-card-top",children:[(0,t.jsx)("div",{className:"pp-avatar",children:"\uD83D\uDCE3"}),(0,t.jsxs)("div",{className:"pp-card-main",children:[(0,t.jsx)("h3",{children:e.title}),(0,t.jsxs)("p",{children:[aO(e.sentAt||e.publishAt||e.createdAt)," \xb7 ",e.audience||e.targetRole||"branch"]}),(0,t.jsxs)("div",{className:"pp-chip-row",children:[(0,t.jsx)(aV,{tone:"urgent"===e.priority?"red":"high"===e.priority?"orange":"blue",children:e.priority||"normal"}),(0,t.jsx)(aV,{tone:"draft"===e.status?"gray":"green",children:e.status||"sent"}),(0,t.jsx)("button",{className:"pp-btn",onClick:()=>F(e),children:"Acknowledge"})]})]})]}),(0,t.jsx)("p",{className:"pp-message",children:e.body||e.message})]},e.id)),!E.length&&(0,t.jsx)(aK,{text:"No announcements found."})]})})]})},messages:function(){let e=(0,c.useRouter)(),{accountId:a,authenticated:r,loading:i}=(0,o.F)(),{settings:s,loading:n}=(0,d.t)(),{activeSchool:m,activeSchoolId:u,activeBranch:x,activeBranchId:g,loading:b}=(0,l.c)(),f=u||m?.id||s?.schoolId,v=g||x?.id||s?.branchId,j=s?.primaryColor||"var(--primary-color, #2563eb)",[y,w]=(0,p.useState)(!0),[N,k]=(0,p.useState)(null),[_,I]=(0,p.useState)("cards"),[S,C]=(0,p.useState)([]),[$,z]=(0,p.useState)([]),[A,P]=(0,p.useState)([]),[M,T]=(0,p.useState)([]),[L,D]=(0,p.useState)(""),[R,B]=(0,p.useState)("inbox"),[E,O]=(0,p.useState)(!1),[F,U]=(0,p.useState)(null),[V,W]=(0,p.useState)(!1),[K,G]=(0,p.useState)(""),[H,Y]=(0,p.useState)({subject:"",body:"",recipientUserId:""});(0,p.useEffect)(()=>{!i&&!b&&(r&&a||e.replace("/login"))},[i,b,r,a,e]);let J=async()=>{if(!a||!f||!v)return void w(!1);try{w(!0);let e=await rN(a,Number(f),Number(v));k(e.parent);let[r,t,i,s]=await Promise.all([rx("messageThreads"),rx("messages"),rx("users").then(async e=>e.length?e:rx("accountUsers")),rx("userMemberships").then(async e=>e.length?e:rx("memberships"))]);C(r.filter(r=>rh(r,a,Number(f),Number(v))&&(String(r.participantRoles||"").includes("parent")||String(r.parentLocalId||"")===String(e.parent?.id||"")||"parent"===String(r.createdByRole||"")))),z(t.filter(e=>rh(e,a,Number(f),Number(v)))),P(i),T(s.filter(e=>rh(e,a,Number(f),Number(v))))}finally{w(!1)}};(0,p.useEffect)(()=>{J()},[a,f,v]);let q=(0,p.useMemo)(()=>M.filter(e=>["branch_admin","teacher","accountant"].includes(String(e.role))).map(e=>{let a=A.find(a=>String(rg(a)||"")===rb(e)||!!(a.email&&e.email&&a.email.toLowerCase()===e.email.toLowerCase()));return{id:rg(a)||e.userId||e.userLocalId,name:ru(a||e),role:e.role,email:a?.email||e.email}}).filter(e=>e.id),[M,A]),Z=(0,p.useMemo)(()=>{let e=L.toLowerCase().trim();return S.filter(a=>("all"===R||String(a.folder||"inbox")===R)&&(!e||`${a.subject} ${a.lastMessage} ${a.status}`.toLowerCase().includes(e))).sort((e,a)=>rl(a.lastMessageAt||a.updatedAt||a.createdAt)-rl(e.lastMessageAt||e.updatedAt||e.createdAt))},[S,L,R]),X=(0,p.useMemo)(()=>F?.id?$.filter(e=>Number(e.threadId)===Number(F.id)).sort((e,a)=>rl(e.createdAt)-rl(a.createdAt)):[],[$,F]),Q=(0,p.useMemo)(()=>({threads:S.length,inbox:S.filter(e=>"inbox"===String(e.folder||"inbox")).length,sent:S.filter(e=>"sent"===e.folder).length,unread:$.filter(e=>!e.readAt&&"inbound"===e.direction).length,archived:S.filter(e=>"archived"===e.folder).length,contacts:q.length}),[S,$,q]),ee=async()=>{let e=h.db.messageThreads,r=h.db.messages;if(!e||!r)return void alert("messageThreads/messages tables are missing in db.ts.");if(!H.subject.trim()||!H.body.trim()||!H.recipientUserId)return void alert("Subject, message and recipient are required.");W(!0);try{let t=q.find(e=>String(e.id)===String(H.recipientUserId)),i=await e.add({accountId:a,schoolId:Number(f),branchId:Number(v),subject:H.subject.trim(),participantUserIds:[H.recipientUserId],participantRoles:["parent",t?.role],parentLocalId:N?.id,folder:"sent",status:"open",lastMessage:H.body.trim(),lastMessageAt:rp(),createdByRole:"parent",isDeleted:!1,createdAt:rp(),updatedAt:rp(),version:1,synced:"pending"});await r.add({accountId:a,schoolId:Number(f),branchId:Number(v),threadId:Number(i),senderRole:"parent",parentLocalId:N?.id,recipientUserId:H.recipientUserId,recipientRole:t?.role,body:H.body.trim(),direction:"outbound",status:"sent",sentAt:rp(),isDeleted:!1,createdAt:rp(),updatedAt:rp(),version:1,synced:"pending"}),O(!1),Y({subject:"",body:"",recipientUserId:""}),await J()}finally{W(!1)}},ea=async()=>{if(!F?.id||!K.trim())return;let e=h.db.messages;await e.add({accountId:a,schoolId:Number(f),branchId:Number(v),threadId:Number(F.id),senderRole:"parent",parentLocalId:N?.id,body:K.trim(),direction:"outbound",status:"sent",sentAt:rp(),isDeleted:!1,createdAt:rp(),updatedAt:rp(),version:1,synced:"pending"}),await h.db.messageThreads.update(F.id,{lastMessage:K.trim(),lastMessageAt:rp(),updatedAt:rp(),version:rl(F.version)+1,synced:"pending"}),G(""),await J()};return y||i||n||b?(0,t.jsxs)("main",{className:"pp-page",style:{"--pp-primary":j},children:[(0,t.jsx)("style",{children:rw}),(0,t.jsxs)("section",{className:"pp-state",children:[(0,t.jsx)("h2",{children:"Opening messages..."}),(0,t.jsx)("p",{children:"Loading parent conversations."})]})]}):(0,t.jsxs)("main",{className:"pp-page",style:{"--pp-primary":j},children:[(0,t.jsx)("style",{children:rw}),(0,t.jsxs)("section",{className:"pp-hero",children:[(0,t.jsxs)("div",{className:"pp-hero-left",children:[(0,t.jsx)("div",{className:"pp-icon",children:"\uD83D\uDCAC"}),(0,t.jsxs)("div",{className:"pp-title",children:[(0,t.jsx)("p",{children:"Parent Communication"}),(0,t.jsx)("h2",{children:"Messages"}),(0,t.jsxs)("span",{children:[ru(N||{})," \xb7 Teachers, admin and finance"]})]})]}),(0,t.jsxs)("div",{className:"pp-actions",children:[(0,t.jsx)("button",{className:"pp-btn",onClick:J,children:"Refresh"}),(0,t.jsx)("button",{className:"pp-primary",onClick:()=>O(!0),children:"Compose"})]})]}),(0,t.jsxs)("section",{className:"pp-summary-grid",children:[(0,t.jsx)(rv,{label:"Threads",value:Q.threads,icon:"\uD83D\uDCAC"}),(0,t.jsx)(rv,{label:"Inbox",value:Q.inbox,icon:"\uD83D\uDCE5"}),(0,t.jsx)(rv,{label:"Sent",value:Q.sent,icon:"\uD83D\uDCE4",positive:!0}),(0,t.jsx)(rv,{label:"Unread",value:Q.unread,icon:"\uD83D\uDD34",warning:Q.unread>0}),(0,t.jsx)(rv,{label:"Archived",value:Q.archived,icon:"\uD83D\uDDC4️"}),(0,t.jsx)(rv,{label:"Contacts",value:Q.contacts,icon:"\uD83D\uDC65"})]}),(0,t.jsx)(ry,{view:_,setView:I,count:Z.length}),(0,t.jsxs)("section",{className:"pp-filter",children:[(0,t.jsx)("input",{value:L,onChange:e=>D(e.target.value),placeholder:"Search messages..."}),(0,t.jsxs)("select",{value:R,onChange:e=>B(e.target.value),children:[(0,t.jsx)("option",{value:"inbox",children:"Inbox"}),(0,t.jsx)("option",{value:"sent",children:"Sent"}),(0,t.jsx)("option",{value:"archived",children:"Archived"}),(0,t.jsx)("option",{value:"all",children:"All"})]}),(0,t.jsx)("button",{className:"pp-primary",onClick:()=>O(!0),children:"Compose"})]}),"analytics"===_&&(0,t.jsx)("section",{className:"pp-section pp-breakdown-grid",children:["inbox","sent","archived"].map(e=>{let a=S.filter(a=>String(a.folder||"inbox")===e).length,r=S.length?Math.round(a/S.length*100):0;return(0,t.jsxs)("article",{className:"pp-breakdown",children:[(0,t.jsx)("strong",{children:e}),(0,t.jsx)("div",{className:"pp-bar",children:(0,t.jsx)("div",{style:{width:`${r}%`}})}),(0,t.jsxs)("div",{className:"pp-chip-row",children:[(0,t.jsx)(rf,{tone:"blue",children:a}),(0,t.jsxs)(rf,{children:[r,"%"]})]})]},e)})}),"table"===_&&(0,t.jsx)("section",{className:"pp-panel",children:(0,t.jsx)("div",{className:"pp-table-wrap",children:(0,t.jsxs)("table",{className:"pp-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Updated"}),(0,t.jsx)("th",{children:"Subject"}),(0,t.jsx)("th",{children:"Folder"}),(0,t.jsx)("th",{children:"Status"}),(0,t.jsx)("th",{children:"Last Message"}),(0,t.jsx)("th",{children:"Action"})]})}),(0,t.jsxs)("tbody",{children:[Z.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:rm(e.lastMessageAt||e.updatedAt)}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:e.subject||"No subject"})}),(0,t.jsx)("td",{children:e.folder||"inbox"}),(0,t.jsx)("td",{children:(0,t.jsx)(rf,{children:e.status||"open"})}),(0,t.jsx)("td",{children:rc(e.lastMessage).slice(0,100)}),(0,t.jsx)("td",{children:(0,t.jsx)("button",{className:"pp-btn",onClick:()=>U(e),children:"Open"})})]},e.id)),!Z.length&&(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:6,children:(0,t.jsx)(rj,{text:"No message threads found."})})})]})]})})}),"cards"===_&&(0,t.jsx)("section",{className:"pp-section",children:(0,t.jsxs)("div",{className:"pp-list",children:[Z.map(e=>(0,t.jsxs)("article",{className:"pp-card",children:[(0,t.jsxs)("div",{className:"pp-card-top",children:[(0,t.jsx)("div",{className:"pp-avatar",children:"\uD83D\uDCAC"}),(0,t.jsxs)("div",{className:"pp-card-main",children:[(0,t.jsx)("h3",{children:e.subject||"No subject"}),(0,t.jsxs)("p",{children:[rm(e.lastMessageAt||e.updatedAt)," \xb7 ",e.folder||"inbox"]}),(0,t.jsxs)("div",{className:"pp-chip-row",children:[(0,t.jsx)(rf,{tone:"blue",children:e.status||"open"}),(0,t.jsx)(rf,{children:e.folder||"inbox"}),(0,t.jsx)("button",{className:"pp-btn",onClick:()=>U(e),children:"Open"})]})]})]}),(0,t.jsx)("p",{className:"pp-message",children:e.lastMessage||"No message preview."})]},e.id)),!Z.length&&(0,t.jsx)(rj,{text:"No message threads found."})]})}),F&&(0,t.jsxs)("div",{className:"pp-drawer-layer",children:[(0,t.jsx)("button",{className:"pp-drawer-overlay",onClick:()=>U(null)}),(0,t.jsxs)("aside",{className:"pp-drawer",children:[(0,t.jsxs)("div",{className:"pp-drawer-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Conversation"}),(0,t.jsx)("h2",{children:F.subject||"Message Thread"}),(0,t.jsxs)("span",{children:[X.length," message(s)"]})]}),(0,t.jsx)("button",{onClick:()=>U(null),children:"✕"})]}),(0,t.jsxs)("section",{className:"pp-list",children:[X.map(e=>(0,t.jsxs)("article",{className:"pp-card",children:[(0,t.jsxs)("div",{className:"pp-chip-row",children:[(0,t.jsx)(rf,{tone:"outbound"===e.direction?"green":"blue",children:e.direction||"message"}),(0,t.jsx)(rf,{children:rm(e.sentAt||e.createdAt)})]}),(0,t.jsx)("p",{className:"pp-message",children:e.body})]},e.id)),!X.length&&(0,t.jsx)(rj,{text:"No messages in this thread."})]}),(0,t.jsxs)("section",{className:"pp-form-card",children:[(0,t.jsx)("textarea",{value:K,onChange:e=>G(e.target.value),placeholder:"Write a reply..."}),(0,t.jsxs)("div",{className:"pp-drawer-actions",children:[(0,t.jsx)("button",{className:"pp-btn",onClick:()=>U(null),children:"Close"}),(0,t.jsx)("button",{className:"pp-primary",onClick:ea,children:"Send Reply"})]})]})]})]}),E&&(0,t.jsxs)("div",{className:"pp-drawer-layer",children:[(0,t.jsx)("button",{className:"pp-drawer-overlay",onClick:()=>O(!1)}),(0,t.jsxs)("aside",{className:"pp-drawer",children:[(0,t.jsxs)("div",{className:"pp-drawer-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Compose"}),(0,t.jsx)("h2",{children:"New Message"}),(0,t.jsx)("span",{children:x?.name||"Assigned branch"})]}),(0,t.jsx)("button",{onClick:()=>O(!1),children:"✕"})]}),(0,t.jsx)("section",{className:"pp-form-card",children:(0,t.jsxs)("div",{className:"pp-form-grid",children:[(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Recipient"}),(0,t.jsxs)("select",{value:H.recipientUserId,onChange:e=>Y({...H,recipientUserId:e.target.value}),children:[(0,t.jsx)("option",{value:"",children:"Select recipient"}),q.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.name," \xb7 ",e.role]},`${e.role}-${e.id}`))]})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Subject"}),(0,t.jsx)("input",{value:H.subject,onChange:e=>Y({...H,subject:e.target.value})})]}),(0,t.jsxs)("label",{className:"wide",children:[(0,t.jsx)("span",{children:"Message"}),(0,t.jsx)("textarea",{value:H.body,onChange:e=>Y({...H,body:e.target.value})})]})]})}),(0,t.jsxs)("div",{className:"pp-drawer-actions",children:[(0,t.jsx)("button",{className:"pp-btn",onClick:()=>O(!1),children:"Cancel"}),(0,t.jsx)("button",{className:"pp-primary",disabled:V,onClick:ee,children:V?"Sending...":"Send"})]})]})]})]})},calendar:function(){let e=(0,c.useRouter)(),{accountId:a,authenticated:r,loading:i}=(0,o.F)(),{settings:s,loading:n}=(0,d.t)(),{activeSchool:m,activeSchoolId:h,activeBranch:u,activeBranchId:x,loading:g}=(0,l.c)(),b=h||m?.id||s?.schoolId,f=x||u?.id||s?.branchId,v=s?.primaryColor||"var(--primary-color, #2563eb)",[j,y]=(0,p.useState)(!0),[w,N]=(0,p.useState)(null),[k,_]=(0,p.useState)([]),[I,S]=(0,p.useState)([]),[C,$]=(0,p.useState)("cards"),[z,A]=(0,p.useState)(""),[P,M]=(0,p.useState)("all");(0,p.useEffect)(()=>{!i&&!g&&(r&&a||e.replace("/login"))},[i,g,r,a,e]);let T=async()=>{if(!a||!b||!f)return void y(!1);try{y(!0);let e=await a9(a,Number(b),Number(f));N(e.parent),_(e.children);let r=await (0,aJ.ok)({accountId:a,schoolId:String(b),branchId:String(f)}),t=new Set(e.children.map(e=>Number(e.id)));S(r.filter(a=>!a.isDeleted&&"cancelled"!==a.status&&("branch"===a.visibility||"school"===a.visibility||"branch"===a.scopeType||"school"===a.scopeType||"fee_deadline"===a.eventType||"parent_teacher_meeting"===a.eventType||t.has(Number(a.studentLocalId))||t.has(Number(a.scopeId))||e.children.some(e=>Number(e.classId||e.currentClassId)===Number(a.classId)))))}finally{y(!1)}};(0,p.useEffect)(()=>{T()},[a,b,f]);let L=(0,p.useMemo)(()=>{let e=z.toLowerCase().trim();return I.filter(a=>{if("all"!==P){let e=k.find(e=>String(e.id)===P);if(Number(a.studentLocalId)!==Number(e?.id)&&Number(a.classId)!==Number(e?.classId||e?.currentClassId)&&Number(a.scopeId)!==Number(e?.id))return!1}return!e||`${a.title} ${a.description} ${a.location} ${a.eventType}`.toLowerCase().includes(e)}).sort((e,a)=>aq(e.startAt)-aq(a.startAt))},[I,z,P,k]),D=(0,p.useMemo)(()=>{let e=new Date;e.setHours(0,0,0,0);let a=new Date;return a.setHours(23,59,59,999),{total:I.length,upcoming:I.filter(e=>aq(e.startAt)>=Date.now()).length,today:I.filter(r=>aq(r.startAt)>=e.getTime()&&aq(r.startAt)<=a.getTime()).length,meetings:I.filter(e=>"parent_teacher_meeting"===e.eventType||"meeting"===e.eventType).length,feeDeadlines:I.filter(e=>"fee_deadline"===e.eventType).length,children:k.length}},[I,k]);return j||i||n||g?(0,t.jsxs)("main",{className:"pp-page",style:{"--pp-primary":v},children:[(0,t.jsx)("style",{children:a5}),(0,t.jsxs)("section",{className:"pp-state",children:[(0,t.jsx)("h2",{children:"Opening calendar..."}),(0,t.jsx)("p",{children:"Loading child events, meetings and deadlines."})]})]}):(0,t.jsxs)("main",{className:"pp-page",style:{"--pp-primary":v},children:[(0,t.jsx)("style",{children:a5}),(0,t.jsxs)("section",{className:"pp-hero",children:[(0,t.jsxs)("div",{className:"pp-hero-left",children:[(0,t.jsx)("div",{className:"pp-icon",children:"\uD83D\uDCC5"}),(0,t.jsxs)("div",{className:"pp-title",children:[(0,t.jsx)("p",{children:"Parent Calendar"}),(0,t.jsx)("h2",{children:"Calendar"}),(0,t.jsxs)("span",{children:[aQ(w||{})," \xb7 ",u?.name||"Assigned branch"]})]})]}),(0,t.jsx)("div",{className:"pp-actions",children:(0,t.jsx)("button",{className:"pp-btn",onClick:T,children:"Refresh"})})]}),(0,t.jsxs)("section",{className:"pp-summary-grid",children:[(0,t.jsx)(a2,{label:"Events",value:D.total,icon:"\uD83D\uDCCC"}),(0,t.jsx)(a2,{label:"Upcoming",value:D.upcoming,icon:"⏭️",positive:!0}),(0,t.jsx)(a2,{label:"Today",value:D.today,icon:"\uD83D\uDCCD"}),(0,t.jsx)(a2,{label:"Meetings",value:D.meetings,icon:"\uD83E\uDD1D"}),(0,t.jsx)(a2,{label:"Fee Deadlines",value:D.feeDeadlines,icon:"\uD83D\uDCB3",warning:D.feeDeadlines>0}),(0,t.jsx)(a2,{label:"Children",value:D.children,icon:"\uD83E\uDDD2"})]}),(0,t.jsx)(a8,{view:C,setView:$,count:L.length}),(0,t.jsxs)("section",{className:"pp-filter",children:[(0,t.jsx)("input",{value:z,onChange:e=>A(e.target.value),placeholder:"Search events..."}),(0,t.jsxs)("select",{value:P,onChange:e=>M(e.target.value),children:[(0,t.jsx)("option",{value:"all",children:"All Children"}),k.map(e=>(0,t.jsx)("option",{value:e.id,children:aQ(e)},e.id))]}),(0,t.jsx)("button",{className:"pp-btn",onClick:T,children:"Reload"})]}),"analytics"===C&&(0,t.jsx)("section",{className:"pp-section pp-breakdown-grid",children:["meeting","parent_teacher_meeting","fee_deadline","exam","assessment","holiday"].map(e=>{let a=I.filter(a=>a.eventType===e).length,r=I.length?Math.round(a/I.length*100):0;return(0,t.jsxs)("article",{className:"pp-breakdown",children:[(0,t.jsx)("strong",{children:e.replaceAll("_"," ")}),(0,t.jsx)("div",{className:"pp-bar",children:(0,t.jsx)("div",{style:{width:`${r}%`}})}),(0,t.jsxs)("div",{className:"pp-chip-row",children:[(0,t.jsx)(a1,{tone:"blue",children:a}),(0,t.jsxs)(a1,{children:[r,"%"]})]})]},e)})}),"table"===C&&(0,t.jsx)("section",{className:"pp-panel",children:(0,t.jsx)("div",{className:"pp-table-wrap",children:(0,t.jsxs)("table",{className:"pp-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Event"}),(0,t.jsx)("th",{children:"Type"}),(0,t.jsx)("th",{children:"Starts"}),(0,t.jsx)("th",{children:"Ends"}),(0,t.jsx)("th",{children:"Location"}),(0,t.jsx)("th",{children:"Status"})]})}),(0,t.jsxs)("tbody",{children:[L.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("strong",{children:e.title}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{children:e.description||"-"})]}),(0,t.jsx)("td",{children:e.eventType}),(0,t.jsx)("td",{children:aZ(e.startAt)}),(0,t.jsx)("td",{children:aZ(e.endAt)}),(0,t.jsx)("td",{children:e.location||"-"}),(0,t.jsx)("td",{children:(0,t.jsx)(a1,{tone:"green",children:e.status||"scheduled"})})]},e.id)),!L.length&&(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:6,children:(0,t.jsx)(a4,{text:"No calendar events found."})})})]})]})})}),"cards"===C&&(0,t.jsx)("section",{className:"pp-section",children:(0,t.jsxs)("div",{className:"pp-list",children:[L.map(e=>(0,t.jsxs)("article",{className:"pp-card",children:[(0,t.jsxs)("div",{className:"pp-card-top",children:[(0,t.jsx)("div",{className:"pp-avatar",children:"\uD83D\uDCC5"}),(0,t.jsxs)("div",{className:"pp-card-main",children:[(0,t.jsx)("h3",{children:e.title}),(0,t.jsxs)("p",{children:[aZ(e.startAt)," \xb7 ",e.location||"No location"]}),(0,t.jsxs)("div",{className:"pp-chip-row",children:[(0,t.jsx)(a1,{tone:"blue",children:e.eventType}),(0,t.jsx)(a1,{tone:"urgent"===e.priority?"red":"high"===e.priority?"orange":"gray",children:e.priority||"normal"})]})]})]}),e.description&&(0,t.jsx)("p",{className:"pp-message",children:e.description})]},e.id)),!L.length&&(0,t.jsx)(a4,{text:"No calendar events found."})]})})]})},childTimetable:function(){let e=(0,c.useRouter)(),{accountId:a,authenticated:r,loading:i}=(0,o.F)(),{settings:s,loading:n}=(0,d.t)(),{activeSchool:m,activeSchoolId:h,activeBranch:u,activeBranchId:x,loading:g}=(0,l.c)(),b=h||m?.id||s?.schoolId,f=x||u?.id||s?.branchId,v=s?.primaryColor||"var(--primary-color, #2563eb)",[j,y]=(0,p.useState)(!0),[w,N]=(0,p.useState)(null),[k,_]=(0,p.useState)([]),[I,S]=(0,p.useState)([]),[C,$]=(0,p.useState)([]),[z,A]=(0,p.useState)([]),[P,M]=(0,p.useState)([]),[T,L]=(0,p.useState)([]),[D,R]=(0,p.useState)("cards"),[B,E]=(0,p.useState)(""),[O,F]=(0,p.useState)("all");(0,p.useEffect)(()=>{!i&&!g&&(r&&a||e.replace("/login"))},[i,g,r,a,e]);let U=async()=>{if(!a||!b||!f)return void y(!1);try{y(!0);let e=await rd(a,String(b),String(f));N(e.parent),_(e.children);let[r,t,i,s,n]=await Promise.all([(0,a3.th)({accountId:a,schoolId:String(b),branchId:String(f)}),ra("subjects"),ra("teachers"),(0,a3.py)({accountId:a,schoolId:String(b),branchId:String(f)}),(0,a3.vd)({accountId:a,schoolId:String(b),branchId:String(f)})]),o=new Set(e.children.map(e=>String(e.classId||e.currentClassId)).filter(Boolean));S(r.filter(e=>o.has(String(e.classId)))),$(t.filter(e=>!e.isDeleted&&(!e.accountId||e.accountId===a))),A(i.filter(e=>a7(e,a,String(b),String(f))||!e.branchId&&String(e.schoolId)===String(b))),M(s),L(n)}finally{y(!1)}};(0,p.useEffect)(()=>{U()},[a,b,f]);let V=(0,p.useMemo)(()=>{let e=I;if("all"!==O){let a=k.find(e=>String(e.id)===O);e=e.filter(e=>String(e.classId)===String(a?.classId||a?.currentClassId))}let a=B.toLowerCase().trim();return a&&(e=e.filter(e=>`${e.title} ${e.dayOfWeek} ${e.sessionType} ${e.roomName}`.toLowerCase().includes(a))),e.sort((e,a)=>String(e.dayOfWeek).localeCompare(String(a.dayOfWeek))||a6(e.startMinute)-a6(a.startMinute))},[I,O,k,B]),W=(0,p.useMemo)(()=>({sessions:V.length,children:k.length,classes:new Set(V.map(e=>e.classId).filter(Boolean)).size,subjects:new Set(V.map(e=>e.subjectId).filter(Boolean)).size,teachers:new Set(V.map(e=>e.teacherLocalId).filter(Boolean)).size,weeklyMinutes:V.reduce((e,a)=>e+Math.max(0,a6(a.endMinute)-a6(a.startMinute)),0)}),[V,k]);return j||i||n||g?(0,t.jsxs)("main",{className:"pp-page",style:{"--pp-primary":v},children:[(0,t.jsx)("style",{children:ro}),(0,t.jsxs)("section",{className:"pp-state",children:[(0,t.jsx)("h2",{children:"Opening child timetable..."}),(0,t.jsx)("p",{children:"Loading your child’s class timetable."})]})]}):(0,t.jsxs)("main",{className:"pp-page",style:{"--pp-primary":v},children:[(0,t.jsx)("style",{children:ro}),(0,t.jsxs)("section",{className:"pp-hero",children:[(0,t.jsxs)("div",{className:"pp-hero-left",children:[(0,t.jsx)("div",{className:"pp-icon",children:"\uD83D\uDCDA"}),(0,t.jsxs)("div",{className:"pp-title",children:[(0,t.jsx)("p",{children:"Parent Timetable"}),(0,t.jsx)("h2",{children:"Child Timetable"}),(0,t.jsxs)("span",{children:[re(w||{})," \xb7 ",k.length," linked child(ren)"]})]})]}),(0,t.jsx)("div",{className:"pp-actions",children:(0,t.jsx)("button",{className:"pp-btn",onClick:U,children:"Refresh"})})]}),(0,t.jsxs)("section",{className:"pp-summary-grid",children:[(0,t.jsx)(rt,{label:"Sessions",value:W.sessions,icon:"\uD83D\uDCDA",positive:!0}),(0,t.jsx)(rt,{label:"Children",value:W.children,icon:"\uD83E\uDDD2"}),(0,t.jsx)(rt,{label:"Classes",value:W.classes,icon:"\uD83C\uDFEB"}),(0,t.jsx)(rt,{label:"Subjects",value:W.subjects,icon:"\uD83D\uDCD6"}),(0,t.jsx)(rt,{label:"Teachers",value:W.teachers,icon:"\uD83D\uDC68‍\uD83C\uDFEB"}),(0,t.jsx)(rt,{label:"Weekly Hours",value:`${Math.round(W.weeklyMinutes/60)}h`,icon:"⏱️"})]}),(0,t.jsx)(rn,{view:D,setView:R,count:V.length}),(0,t.jsxs)("section",{className:"pp-filter",children:[(0,t.jsx)("input",{value:B,onChange:e=>E(e.target.value),placeholder:"Search timetable..."}),(0,t.jsxs)("select",{value:O,onChange:e=>F(e.target.value),children:[(0,t.jsx)("option",{value:"all",children:"All Children"}),k.map(e=>(0,t.jsx)("option",{value:e.id,children:re(e)},e.id))]}),(0,t.jsx)("button",{className:"pp-btn",onClick:U,children:"Reload"})]}),"analytics"===D&&(0,t.jsx)("section",{className:"pp-section pp-breakdown-grid",children:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].map(e=>{let a=V.filter(a=>a.dayOfWeek===e).length,r=V.length?Math.round(a/V.length*100):0;return(0,t.jsxs)("article",{className:"pp-breakdown",children:[(0,t.jsx)("strong",{children:e}),(0,t.jsx)("div",{className:"pp-bar",children:(0,t.jsx)("div",{style:{width:`${r}%`}})}),(0,t.jsxs)("div",{className:"pp-chip-row",children:[(0,t.jsx)(rr,{tone:"blue",children:a}),(0,t.jsxs)(rr,{children:[r,"%"]})]})]},e)})}),"table"===D&&(0,t.jsx)("section",{className:"pp-panel",children:(0,t.jsx)("div",{className:"pp-table-wrap",children:(0,t.jsxs)("table",{className:"pp-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Day"}),(0,t.jsx)("th",{children:"Time"}),(0,t.jsx)("th",{children:"Session"}),(0,t.jsx)("th",{children:"Subject"}),(0,t.jsx)("th",{children:"Teacher"}),(0,t.jsx)("th",{children:"Room"}),(0,t.jsx)("th",{children:"Timetable"})]})}),(0,t.jsxs)("tbody",{children:[V.map(e=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.dayOfWeek}),(0,t.jsx)("td",{children:(0,a3.Zz)(a6(e.startMinute),a6(e.endMinute))}),(0,t.jsxs)("td",{children:[(0,t.jsx)("strong",{children:e.title||e.sessionType}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{children:e.sessionType})]}),(0,t.jsx)("td",{children:C.find(a=>Number(a.id)===Number(e.subjectId))?.name||"-"}),(0,t.jsx)("td",{children:re(z.find(a=>Number(a.id)===Number(e.teacherLocalId))||{})||"-"}),(0,t.jsx)("td",{children:P.find(a=>Number(a.id)===Number(e.resourceId))?.name||e.roomName||"-"}),(0,t.jsx)("td",{children:T.find(a=>Number(a.id)===Number(e.timetableId))?.name||"-"})]},e.id)),!V.length&&(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:7,children:(0,t.jsx)(rs,{text:"No timetable sessions found."})})})]})]})})}),"cards"===D&&(0,t.jsx)("section",{className:"pp-section",children:(0,t.jsxs)("div",{className:"pp-list",children:[V.map(e=>(0,t.jsxs)("article",{className:"pp-card",children:[(0,t.jsxs)("div",{className:"pp-card-top",children:[(0,t.jsx)("div",{className:"pp-avatar",children:"\uD83D\uDCDA"}),(0,t.jsxs)("div",{className:"pp-card-main",children:[(0,t.jsx)("h3",{children:e.title||e.sessionType}),(0,t.jsxs)("p",{children:[e.dayOfWeek," \xb7 ",(0,a3.Zz)(a6(e.startMinute),a6(e.endMinute))]}),(0,t.jsxs)("div",{className:"pp-chip-row",children:[(0,t.jsx)(rr,{tone:"blue",children:e.sessionType}),(0,t.jsx)(rr,{tone:"purple",children:C.find(a=>Number(a.id)===Number(e.subjectId))?.name||"No subject"})]})]})]}),(0,t.jsxs)("div",{className:"pp-mini-grid",children:[(0,t.jsx)(ri,{label:"Teacher",value:re(z.find(a=>Number(a.id)===Number(e.teacherLocalId))||{})||"-"}),(0,t.jsx)(ri,{label:"Room",value:P.find(a=>Number(a.id)===Number(e.resourceId))?.name||e.roomName||"-"}),(0,t.jsx)(ri,{label:"Duration",value:`${a6(e.endMinute)-a6(e.startMinute)} min`})]})]},e.id)),!V.length&&(0,t.jsx)(rs,{text:"No timetable sessions found for your linked child or children."})]})})]})},localSettings:function(){var e,a;let r,i,s,p,{accountId:c}=(0,o.F)(),{settings:m}=(0,d.t)(),{activeSchoolId:h,activeBranchId:u,activeSchool:x,activeBranch:g}=(0,l.c)();return(0,t.jsx)(n.Ay,{portalName:"Parent Portal",roleKey:"parent",accountId:c,schoolId:(e={activeSchoolId:h,activeSchool:x,settings:m},r=rV(),i=r?.membership||rW(),rU(r?.schoolId,i?.schoolId,i?.school?.id,e.activeSchoolId,e.activeSchool?.id,e.settings?.schoolId,rO("activeSchoolId"))),branchId:(a={activeBranchId:u,activeBranch:g,settings:m},s=rV(),p=s?.membership||rW(),rU(s?.branchId,p?.branchId,p?.schoolBranchId,p?.branch?.id,a.activeBranchId,a.activeBranch?.id,a.settings?.branchId,rO("activeBranchId"))),primaryColor:m?.primaryColor||"var(--primary-color, #2563eb)",inline:!0})},parentProfile:function(){var e;let a=(0,c.useRouter)(),r=(0,T.f)(["parents","mediaAssets","mediaBlobs"]),{loading:i,setLoading:s}=(0,Z.J)(),{accountId:n,authenticated:u,loading:x}=(0,o.F)(),{settings:g,loading:b}=(0,d.t)(),{activeSchool:f,activeSchoolId:v,activeBranch:j,activeBranchId:y,loading:w}=(0,l.c)(),N=(0,m.A)(),k=N?.activeMembership,_=(0,p.useMemo)(()=>rz("eleeveon_open_workspace"),[]),I=(0,p.useMemo)(()=>rz("activeMembership"),[]),S=_?.membership||k||I||{},C=rC(_?.schoolId,S.schoolId,S.school?.id,v,f?.id,g?.schoolId,r$("activeSchoolId")),$=rC(_?.branchId,S.branchId,S.schoolBranchId,S.branch?.id,y,j?.id,g?.branchId,r$("activeBranchId")),z=rC(_?.parentLocalId,_?.parentId,S.parentLocalId,S.localParentId,S.parentId,S.parent?.id,N?.activeParentId,r$("activeParentId")),A=g?.primaryColor||"var(--primary-color, #2563eb)",P=rP(A),[M,L]=(0,p.useState)(null),[D,R]=(0,p.useState)(r_),[B,E]=(0,p.useState)(!1),[O,F]=(0,p.useState)(!1),[U,V]=(0,p.useState)(),[W,K]=(0,p.useState)(),[G,H]=(0,p.useState)(null),Y=(0,p.useRef)((0,ec.It)(rk)),J=(0,p.useRef)({}),q=(0,p.useRef)(null),X=(0,p.useRef)(null),[Q,ee]=(0,p.useState)(!1),[ea,er]=(0,p.useState)("photo"),[et,ei]=(0,p.useState)("user"),[es,en]=(0,p.useState)(!1),[eo,ed]=(0,p.useState)(!1),el=(e,a)=>{H({tone:e,message:a}),window.setTimeout(()=>{H(e=>e?.message===a?null:e)},4200)},ep=e=>R(a=>({...a,...e})),em=()=>{(0,ec.IK)(X.current),X.current=null,q.current&&(q.current.srcObject=null)},eh=async e=>{if(!e||!n){V(void 0),K(void 0);return}let a=rI(e.id);if(!a)return;let[r,t]=await Promise.all([(0,ec.Rh)({accountId:n,ownerTable:rk,ownerId:a,fieldKey:ec.Vq.PHOTO,fallbackAssetId:e.photoMediaId}),(0,ec.Rh)({accountId:n,ownerTable:rk,ownerId:a,fieldKey:ec.Vq.COVER_PHOTO,fallbackAssetId:e.coverPhotoMediaId})]);V(r||rA(e.photo)),K(t||rA(e.coverPhoto))},eu=e=>{e?R({id:rI(e.id),fullName:String(e.fullName||""),title:String(e.title||""),phone:String(e.phone||""),email:String(e.email||""),occupation:String(e.occupation||""),emergencyContact:String(e.emergencyContact||""),relationship:e.relationship||"guardian",address:String(e.address||""),addressLine1:String(e.addressLine1||""),addressLine2:String(e.addressLine2||""),locality:String(e.locality||""),city:String(e.city||""),district:String(e.district||""),region:String(e.region||""),postalCode:String(e.postalCode||""),country:String(e.country||"Ghana"),locationLabel:String(e.locationLabel||""),formattedAddress:String(e.formattedAddress||""),latitude:void 0===e.latitude||null===e.latitude?"":String(e.latitude),longitude:void 0===e.longitude||null===e.longitude?"":String(e.longitude),accuracyMeters:void 0===e.accuracyMeters||null===e.accuracyMeters?"":String(e.accuracyMeters),locationType:e.locationType||"home",locationSource:e.locationSource||"manual",locationPrecision:e.locationPrecision||"approximate",locationCapturedAt:e.locationCapturedAt,mapVisible:!!e.mapVisible,locationConsentGiven:!!e.locationConsentGiven,locationConsentAt:e.locationConsentAt,locationRestricted:void 0===e.locationRestricted||!!e.locationRestricted,photo:U||String(e.photo||""),photoMediaId:e.photoMediaId,coverPhoto:W||String(e.coverPhoto||""),coverPhotoMediaId:e.coverPhotoMediaId}):R({...r_,fullName:String(S.fullName||_?.memberName||_?.fullName||_?.userName||"").trim(),email:String(S.email||S.parentEmail||"").trim(),phone:String(S.phone||S.parentPhone||"").trim()})},ex=async()=>{if(!u||!n||!C||!$){L(null),s(!1);return}try{s(!0);let e=(await h.db.parents.toArray()).filter(e=>(!e.accountId||e.accountId===n)&&(!e.schoolId||rS(e.schoolId,C))&&(!e.branchId||rS(e.branchId,$))&&!e.isDeleted),a=String(S.email||S.parentEmail||"").trim().toLowerCase(),r=e.find(e=>!!z&&rS(e.id,z))||e.find(e=>a&&String(e.email||"").trim().toLowerCase()===a)||null;L(r),await eh(r)}catch(e){console.error("Failed to load parent profile:",e),L(null),el("error","Failed to load your parent profile.")}finally{s(!1)}};(0,p.useEffect)(()=>{!x&&!w&&(u&&n?C&&$||a.replace("/account"):a.replace("/login"))},[x,w,u,n,C,$,a]),(0,p.useEffect)(()=>{x||w||b||ex()},[u,n,C,$,z,x,w,b,r]),(0,p.useEffect)(()=>{B&&eu(M)},[B,M,U,W]),(0,p.useEffect)(()=>{if(!Q)return;let e=!1;return(async()=>{try{en(!0),em();let a=await (0,ec.Ik)({facingMode:et,width:1280,height:720});if(e)return void(0,ec.IK)(a);X.current=a,q.current&&await (0,ec.Pr)(q.current,a)}catch(e){console.error("Failed to open parent camera:",e),el("error",e?.message||(0,ec.f5)()),ee(!1)}finally{e||en(!1)}})(),()=>{e=!0,em()}},[Q,et]),(0,p.useEffect)(()=>()=>{em(),D.photo.startsWith("blob:")&&(0,ec.hZ)(D.photo),D.coverPhoto.startsWith("blob:")&&(0,ec.hZ)(D.coverPhoto)},[]);let eg=e=>{(0,ec.fP)()?(er(e),ei("photo"===e?"user":"environment"),ee(!0)):el("error",(0,ec.f5)())},eb=()=>{em(),ee(!1),en(!1),ed(!1)},ef=async(e,a)=>{if(a&&n&&C&&$)try{let r=await (0,ec.fA)(a,{accountId:n,schoolId:C,branchId:$,ownerTable:rk,ownerId:void 0,ownerTempKey:Y.current,fieldKey:"photo"===e?ec.Vq.PHOTO:ec.Vq.COVER_PHOTO,variant:"photo"===e?"avatar":"cover",replaceExisting:!0}),t=rI(r.assetId);if(!t)throw Error("No media asset ID was created.");J.current={...J.current,[e]:t},ep({[e]:r.previewUrl,[`${e}MediaId`]:t}),el("success","photo"===e?"Profile photo optimized.":"Cover photo optimized.")}catch(e){console.error("Failed to process parent image:",e),el("error",e?.message||"Failed to process image.")}},ev=async()=>{if(!q.current)return void el("error","Camera preview is not ready.");try{ed(!0);let e=await (0,ec.ln)(q.current,{fileName:`${ea}-${Date.now()}.jpg`,mimeType:"image/jpeg",quality:.88,maxWidth:"photo"===ea?900:1440,maxHeight:900});await ef(ea,e),eb()}catch(e){console.error("Failed to capture parent image:",e),el("error",e?.message||"Failed to capture photo.")}finally{ed(!1)}},ej=async e=>{e?.preventDefault();let a=D.fullName.trim()?D.phone.trim()||D.email.trim()?D.latitude.trim()&&!Number.isFinite(Number(D.latitude))?"Latitude must be a valid number.":D.longitude.trim()&&!Number.isFinite(Number(D.longitude))?"Longitude must be a valid number.":"":"Enter at least a phone number or email address.":"Enter your full name.";if(a)return void el("error",a);if(!u||!n||!C||!$)return void el("error","Your parent workspace is not ready.");try{var r,t;F(!0);let e={accountId:n,schoolId:C,branchId:$,fullName:D.fullName.trim(),title:D.title.trim(),phone:D.phone.trim(),email:D.email.trim()||void 0,occupation:D.occupation.trim()||void 0,emergencyContact:D.emergencyContact.trim()||void 0,relationship:D.relationship,address:D.address.trim()||void 0,addressLine1:D.addressLine1.trim()||void 0,addressLine2:D.addressLine2.trim()||void 0,locality:D.locality.trim()||void 0,city:D.city.trim()||void 0,district:D.district.trim()||void 0,region:D.region.trim()||void 0,postalCode:D.postalCode.trim()||void 0,country:D.country.trim()||void 0,locationLabel:D.locationLabel.trim()||void 0,formattedAddress:D.formattedAddress.trim()||void 0,latitude:""===D.latitude.trim()?void 0:Number(D.latitude),longitude:""===D.longitude.trim()?void 0:Number(D.longitude),accuracyMeters:""===D.accuracyMeters.trim()?void 0:Number(D.accuracyMeters),locationType:D.locationType,locationSource:D.locationSource,locationPrecision:D.locationPrecision,locationCapturedAt:D.latitude.trim()&&D.longitude.trim()?D.locationCapturedAt||Date.now():void 0,mapVisible:D.mapVisible,locationConsentGiven:D.locationConsentGiven,locationConsentAt:D.locationConsentGiven?D.locationConsentAt||Date.now():void 0,locationRestricted:D.locationRestricted,photo:rA(M?.photo),photoMediaId:D.photoMediaId||M?.photoMediaId||void 0,coverPhoto:rA(M?.coverPhoto),coverPhotoMediaId:D.coverPhotoMediaId||M?.coverPhotoMediaId||void 0,active:M?.active??!0,isDeleted:!1},a=(r=M?.id?await (0,aj.Po)("parents",rI(M.id),e):await (0,aj.oJ)("parents",e),t=M?.id||z,"string"==typeof r||"number"==typeof r?rI(r):r&&"object"==typeof r?rC(r.id,r.localId,r.parentId,t):rI(t));if(!a)throw Error("Profile saved, but its permanent parent ID was not resolved.");let i=await (0,ec.$e)({accountId:n,ownerTable:rk,ownerId:a,ownerTempKey:Y.current,assets:[{assetId:rI(J.current.photo)||void 0,fieldKey:ec.Vq.PHOTO},{assetId:rI(J.current.coverPhoto)||void 0,fieldKey:ec.Vq.COVER_PHOTO}]}),s=i.find(e=>e.fieldKey===ec.Vq.PHOTO)?.assetId,o=i.find(e=>e.fieldKey===ec.Vq.COVER_PHOTO)?.assetId;(s||o)&&await (0,aj.Po)("parents",a,{photoMediaId:s||D.photoMediaId||M?.photoMediaId||void 0,coverPhotoMediaId:o||D.coverPhotoMediaId||M?.coverPhotoMediaId||void 0,photo:rA(M?.photo),coverPhoto:rA(M?.coverPhoto)}),Y.current=(0,ec.It)(rk),J.current={},E(!1),el("success","Your profile was updated."),await ex()}catch(e){console.error("Failed to save parent profile:",e),el("error",e?.message||"Failed to update your profile.")}finally{F(!1)}},ey=()=>{eu(M),J.current={},Y.current=(0,ec.It)(rk),E(!1)};if(x||w||b||i)return(0,t.jsx)(rB,{primary:A,title:"Opening Parent Profile...",text:"Loading your parent record and media."});if(!u||!n)return(0,t.jsx)(rB,{primary:A,title:"Redirecting to login...",text:"You must sign in before viewing your profile."});if(!C||!$)return(0,t.jsx)(rB,{primary:A,title:"No parent workspace selected",text:"Open your parent membership again and return to Profile."});let ew=M?.fullName||D.fullName||_?.memberName||_?.fullName||"Parent",eN=B&&D.photo?D.photo:U,ek=B&&D.coverPhoto?D.coverPhoto:W;return(0,t.jsxs)("main",{className:"pp-page",style:{"--pp-primary":A,"--pp-primary-text":P},children:[(0,t.jsx)("style",{children:rE}),G?(0,t.jsxs)("section",{className:`pp-toast ${G.tone}`,children:[(0,t.jsx)("span",{children:G.message}),(0,t.jsx)("button",{type:"button",onClick:()=>H(null),"aria-label":"Close notification",children:"\xd7"})]}):null,(0,t.jsxs)("section",{className:"pp-toolbar",children:[(0,t.jsx)("span",{className:`pp-status-dot ${M?"green":"orange"}`,title:M?"Profile connected":"Profile not yet created"}),(0,t.jsxs)("div",{className:"pp-toolbar-copy",children:[(0,t.jsx)("strong",{children:"Parent Profile"}),(0,t.jsx)("small",{children:M?"Your personal information":"Complete your parent profile"})]}),B?(0,t.jsx)("button",{type:"button",className:"pp-icon-button",onClick:ey,"aria-label":"Cancel editing",children:"\xd7"}):(0,t.jsx)("button",{type:"button",className:"pp-primary-button",onClick:()=>E(!0),children:"Edit"})]}),(0,t.jsxs)("section",{className:"pp-profile-card",children:[(0,t.jsx)("div",{className:"pp-cover",style:{background:ek?`url("${ek}") center/cover`:`linear-gradient(135deg, ${A}, color-mix(in srgb, ${A} 42%, #111827))`},children:B?(0,t.jsxs)("div",{className:"pp-cover-actions",children:[(0,t.jsxs)("label",{children:["Upload cover",(0,t.jsx)("input",{type:"file",accept:"image/*",onChange:e=>void ef("coverPhoto",e.target.files?.[0])})]}),(0,t.jsx)("button",{type:"button",onClick:()=>eg("coverPhoto"),children:"Take photo"})]}):null}),(0,t.jsxs)("div",{className:"pp-profile-main",children:[(0,t.jsxs)("div",{className:"pp-photo-wrap",children:[(0,t.jsx)(rM,{name:ew,photo:eN,primary:A}),B?(0,t.jsxs)("div",{className:"pp-photo-actions",children:[(0,t.jsxs)("label",{title:"Upload profile photo",children:["+",(0,t.jsx)("input",{type:"file",accept:"image/*",onChange:e=>void ef("photo",e.target.files?.[0])})]}),(0,t.jsx)("button",{type:"button",onClick:()=>eg("photo"),title:"Take profile photo",children:"◉"})]}):null]}),(0,t.jsxs)("div",{className:"pp-profile-copy",children:[(0,t.jsx)("h1",{children:ew}),(0,t.jsxs)("p",{children:[M?.email||D.email||"No email",M?.phone||D.phone?` \xb7 ${M?.phone||D.phone}`:""]}),(0,t.jsxs)("div",{className:"pp-chips",children:[(0,t.jsx)(rT,{tone:"blue",children:(e=M?.relationship||D.relationship)?e.charAt(0).toUpperCase()+e.slice(1):"Guardian"}),(0,t.jsx)(rT,{tone:M?"green":"orange",children:M?"Connected profile":"Profile setup"})]})]})]})]}),B?(0,t.jsxs)("form",{className:"pp-form",onSubmit:ej,children:[(0,t.jsxs)("section",{className:"pp-form-section",children:[(0,t.jsx)("div",{className:"pp-section-head",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Personal Information"}),(0,t.jsx)("small",{children:"Information used by the school to contact you."})]})}),(0,t.jsxs)("div",{className:"pp-form-grid",children:[(0,t.jsx)(rD,{label:"Full Name",required:!0,children:(0,t.jsx)("input",{value:D.fullName,onChange:e=>ep({fullName:e.target.value}),placeholder:"Your full name"})}),(0,t.jsx)(rD,{label:"Title",children:(0,t.jsxs)("select",{value:D.title,onChange:e=>ep({title:e.target.value}),children:[(0,t.jsx)("option",{value:"",children:"No title"}),(0,t.jsx)("option",{value:"Mr",children:"Mr"}),(0,t.jsx)("option",{value:"Mrs",children:"Mrs"}),(0,t.jsx)("option",{value:"Ms",children:"Ms"}),(0,t.jsx)("option",{value:"Dr",children:"Dr"}),(0,t.jsx)("option",{value:"Prof",children:"Prof"}),(0,t.jsx)("option",{value:"Rev",children:"Rev"})]})}),(0,t.jsx)(rD,{label:"Phone",children:(0,t.jsx)("input",{value:D.phone,onChange:e=>ep({phone:e.target.value}),placeholder:"+233...",inputMode:"tel"})}),(0,t.jsx)(rD,{label:"Email",children:(0,t.jsx)("input",{type:"email",value:D.email,onChange:e=>ep({email:e.target.value}),placeholder:"name@example.com"})}),(0,t.jsx)(rD,{label:"Occupation",children:(0,t.jsx)("input",{value:D.occupation,onChange:e=>ep({occupation:e.target.value}),placeholder:"Occupation"})}),(0,t.jsx)(rD,{label:"Emergency Contact",children:(0,t.jsx)("input",{value:D.emergencyContact,onChange:e=>ep({emergencyContact:e.target.value}),placeholder:"Emergency phone or contact"})}),(0,t.jsx)(rD,{label:"Relationship",children:(0,t.jsxs)("select",{value:D.relationship,onChange:e=>ep({relationship:e.target.value}),children:[(0,t.jsx)("option",{value:"father",children:"Father"}),(0,t.jsx)("option",{value:"mother",children:"Mother"}),(0,t.jsx)("option",{value:"guardian",children:"Guardian"})]})})]})]}),(0,t.jsxs)("section",{className:"pp-form-section",children:[(0,t.jsx)("div",{className:"pp-section-head",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Address"}),(0,t.jsx)("small",{children:"Your residential or contact address."})]})}),(0,t.jsxs)("div",{className:"pp-form-grid",children:[(0,t.jsx)(rD,{label:"Address",wide:!0,children:(0,t.jsx)("input",{value:D.address,onChange:e=>ep({address:e.target.value}),placeholder:"Main address"})}),(0,t.jsx)(rD,{label:"Address Line 1",children:(0,t.jsx)("input",{value:D.addressLine1,onChange:e=>ep({addressLine1:e.target.value})})}),(0,t.jsx)(rD,{label:"Address Line 2",children:(0,t.jsx)("input",{value:D.addressLine2,onChange:e=>ep({addressLine2:e.target.value})})}),(0,t.jsx)(rD,{label:"Locality",children:(0,t.jsx)("input",{value:D.locality,onChange:e=>ep({locality:e.target.value})})}),(0,t.jsx)(rD,{label:"City",children:(0,t.jsx)("input",{value:D.city,onChange:e=>ep({city:e.target.value})})}),(0,t.jsx)(rD,{label:"District",children:(0,t.jsx)("input",{value:D.district,onChange:e=>ep({district:e.target.value})})}),(0,t.jsx)(rD,{label:"Region",children:(0,t.jsx)("input",{value:D.region,onChange:e=>ep({region:e.target.value})})}),(0,t.jsx)(rD,{label:"Postal Code",children:(0,t.jsx)("input",{value:D.postalCode,onChange:e=>ep({postalCode:e.target.value})})}),(0,t.jsx)(rD,{label:"Country",children:(0,t.jsx)("input",{value:D.country,onChange:e=>ep({country:e.target.value})})})]})]}),(0,t.jsxs)("section",{className:"pp-form-section",children:[(0,t.jsxs)("div",{className:"pp-section-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Location & Privacy"}),(0,t.jsx)("small",{children:"Optional location information for authorized school use."})]}),(0,t.jsx)("button",{type:"button",className:"pp-secondary-button",onClick:()=>{"u"<typeof navigator||!navigator.geolocation?el("error","Location is unavailable on this device."):navigator.geolocation.getCurrentPosition(e=>{ep({latitude:String(e.coords.latitude),longitude:String(e.coords.longitude),accuracyMeters:String(Math.round(e.coords.accuracy)),locationSource:"device_gps",locationCapturedAt:Date.now(),locationConsentGiven:!0,locationConsentAt:Date.now()}),el("success","Current location added.")},e=>{el("error",e.message||"Unable to get your location.")},{enableHighAccuracy:!0,timeout:12e3,maximumAge:3e4})},children:"Use current location"})]}),(0,t.jsxs)("div",{className:"pp-form-grid",children:[(0,t.jsx)(rD,{label:"Location Label",children:(0,t.jsx)("input",{value:D.locationLabel,onChange:e=>ep({locationLabel:e.target.value}),placeholder:"Home, workplace, pickup point"})}),(0,t.jsx)(rD,{label:"Formatted Address",children:(0,t.jsx)("input",{value:D.formattedAddress,onChange:e=>ep({formattedAddress:e.target.value})})}),(0,t.jsx)(rD,{label:"Latitude",children:(0,t.jsx)("input",{value:D.latitude,onChange:e=>ep({latitude:e.target.value}),inputMode:"decimal"})}),(0,t.jsx)(rD,{label:"Longitude",children:(0,t.jsx)("input",{value:D.longitude,onChange:e=>ep({longitude:e.target.value}),inputMode:"decimal"})}),(0,t.jsx)(rD,{label:"Location Type",children:(0,t.jsxs)("select",{value:D.locationType,onChange:e=>ep({locationType:e.target.value}),children:[(0,t.jsx)("option",{value:"home",children:"Home"}),(0,t.jsx)("option",{value:"workplace",children:"Workplace"}),(0,t.jsx)("option",{value:"pickup_point",children:"Pickup Point"}),(0,t.jsx)("option",{value:"dropoff_point",children:"Drop-off Point"}),(0,t.jsx)("option",{value:"other",children:"Other"})]})}),(0,t.jsx)(rD,{label:"Precision",children:(0,t.jsxs)("select",{value:D.locationPrecision,onChange:e=>ep({locationPrecision:e.target.value}),children:[(0,t.jsx)("option",{value:"exact",children:"Exact"}),(0,t.jsx)("option",{value:"approximate",children:"Approximate"}),(0,t.jsx)("option",{value:"area_only",children:"Area Only"})]})})]}),(0,t.jsxs)("div",{className:"pp-toggle-list",children:[(0,t.jsx)(rR,{label:"I consent to storing this location",text:"The location will only be available to authorized school users.",checked:D.locationConsentGiven,onChange:e=>ep({locationConsentGiven:e,locationConsentAt:e?D.locationConsentAt||Date.now():void 0})}),(0,t.jsx)(rR,{label:"Allow location on authorized school maps",text:"Turn this off to keep the location hidden from map views.",checked:D.mapVisible,onChange:e=>ep({mapVisible:e})}),(0,t.jsx)(rR,{label:"Restrict location access",text:"Recommended for personal residential addresses.",checked:D.locationRestricted,onChange:e=>ep({locationRestricted:e})})]})]}),(0,t.jsxs)("section",{className:"pp-protected-note",children:[(0,t.jsx)("span",{children:"\uD83D\uDD12"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"School-controlled information is protected"}),(0,t.jsx)("p",{children:"Your role, school, branch, account membership and linked children cannot be changed from this page."})]})]}),(0,t.jsxs)("div",{className:"pp-form-actions",children:[(0,t.jsx)("button",{type:"button",className:"pp-secondary-button",onClick:ey,disabled:O,children:"Cancel"}),(0,t.jsx)("button",{type:"submit",className:"pp-primary-button",disabled:O,children:O?"Saving...":"Save Profile"})]})]}):(0,t.jsxs)("section",{className:"pp-details-grid",children:[(0,t.jsx)(rL,{label:"Full Name",value:M?.fullName||"Not set"}),(0,t.jsx)(rL,{label:"Title",value:M?.title||"Not set"}),(0,t.jsx)(rL,{label:"Phone",value:M?.phone||"Not set"}),(0,t.jsx)(rL,{label:"Email",value:M?.email||"Not set"}),(0,t.jsx)(rL,{label:"Occupation",value:M?.occupation||"Not set"}),(0,t.jsx)(rL,{label:"Emergency Contact",value:M?.emergencyContact||"Not set"}),(0,t.jsx)(rL,{label:"Address",value:M?.formattedAddress||M?.address||"Not set",wide:!0}),(0,t.jsx)(rL,{label:"Location Privacy",value:M?.locationRestricted?"Restricted":M?.mapVisible?"Visible to authorized school staff":"Hidden"})]}),Q?(0,t.jsx)("div",{className:"pp-camera-layer",children:(0,t.jsxs)("section",{className:"pp-camera",children:[(0,t.jsxs)("div",{className:"pp-camera-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"photo"===ea?"Take Profile Photo":"Take Cover Photo"}),(0,t.jsx)("small",{children:"Use a clear, well-lit image."})]}),(0,t.jsx)("button",{type:"button",onClick:eb,children:"\xd7"})]}),(0,t.jsxs)("div",{className:"pp-camera-preview",children:[(0,t.jsx)("video",{ref:q,autoPlay:!0,muted:!0,playsInline:!0}),es?(0,t.jsx)("div",{className:"pp-camera-loading",children:"Starting camera..."}):null]}),(0,t.jsxs)("div",{className:"pp-camera-actions",children:[(0,t.jsx)("button",{type:"button",className:"pp-secondary-button",onClick:()=>ei(e=>"user"===e?"environment":"user"),disabled:es||eo,children:"Flip Camera"}),(0,t.jsx)("button",{type:"button",className:"pp-primary-button",onClick:()=>void ev(),disabled:es||eo,children:eo?"Capturing...":"Capture"})]})]})}):null]})}};function rH(){return(0,t.jsx)(i.A,{portalTitle:"Parent Portal",portalSubtitle:"Child monitoring and payments workspace",homeKey:"parentDashboard",allowedRoles:s.RV,navSections:rK,routes:rG,lockedContext:!0,requireSchool:!0,requireBranch:!0})}}},e=>{e.O(0,[8206,3019,69,1439,5125,9540,4967,2975,8365,6228,110,4187,7050,2566,2280,4059,4100,7567,8441,3794,7358],()=>e(e.s=14618)),_N_E=e.O()}]);
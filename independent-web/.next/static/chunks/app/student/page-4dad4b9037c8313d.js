(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7454],{31495:(e,t,a)=>{Promise.resolve().then(a.bind(a,52884))},52884:(e,t,a)=>{"use strict";a.r(t),a.d(t,{NAV_SECTIONS:()=>eX,default:()=>e1});var r=a(95155),i=a(34187),o=a(86263),n=a(12115),s=a(73321),d=a(1573),l=a(19035),c=a(6243),p=a(52975),u=a(42563);let m=[{id:"pathways-to-possibility",type:"image",src:"/pathways-to-possibility.png",durationSeconds:7},{id:"building-the-future",type:"image",src:"/building-the-future.png",durationSeconds:7},{id:"knowledge-in-motion",type:"image",src:"/knowledge-in-motion.png",durationSeconds:7}],b=["students","studentEnrollments","classes","subjects","classSubjects","assignments","attendance","computedResults","reportCards","announcements","calendarEvents","scheduleSessions","studentFeeInvoices","studentFeePayments","payments","portalHighlights","mediaAssets"];function g(e){try{return localStorage.getItem(e)||sessionStorage.getItem(e)}catch{return null}}function h(e){let t=g(e);if(!t)return null;try{return JSON.parse(t)}catch{return null}}function x(e){return null==e?"":String(e).trim()}function f(e,t){let a=x(e),r=x(t);return!!(a&&r&&a===r)}function v(e,t=""){return String(e??"").trim()||t}function y(e){let t=Number(e??0);return Number.isFinite(t)?t:0}function w(e){return e?.id??e?.localId??e?.cloudId??e?.payload?.id}function j(e){return!!e&&!0!==e.isDeleted&&!1!==e.active&&!["deleted","archived","inactive","disabled","withdrawn"].includes(v(e.status).toLowerCase())}async function I(e){let t=u.db[e];return t?.toArray?t.toArray():[]}function S(...e){for(let t of e){let e=x(t);if(e)return e}return""}function k(e){return e.filter(j).length}function C(e,t){let a=e.find(e=>f(w(e),t));return v(a?.publicUrl||a?.remoteUrl||a?.previewDataUrl||a?.thumbnailDataUrl||a?.localObjectUrl)}function A({slides:e}){let[t,a]=(0,n.useState)(0),i=e[t%Math.max(1,e.length)];return((0,n.useEffect)(()=>{if(!i||e.length<=1||"video"===i.type)return;let t=window.setTimeout(()=>a(t=>(t+1)%e.length),1e3*i.durationSeconds);return()=>clearTimeout(t)},[i,e.length]),i)?(0,r.jsxs)("section",{className:"sd-hero",children:["video"===i.type?(0,r.jsx)("video",{src:i.src,poster:i.poster,autoPlay:!0,muted:!0,playsInline:!0,onEnded:()=>a(t=>(t+1)%e.length)}):(0,r.jsx)("img",{src:i.src,alt:""}),e.length>1?(0,r.jsx)("div",{className:"sd-dots",children:e.map((e,i)=>(0,r.jsx)("button",{type:"button",className:i===t?"active":"",onClick:()=>a(i),"aria-label":`Show slide ${i+1}`},e.id))}):null]}):null}function P({navigate:e,navSections:t}){let a=(0,s.useRouter)(),{accountId:i,authenticated:o,loading:u}=(0,d.F)(),{settings:T,loading:B}=(0,l.t)(),{activeSchoolId:D,activeBranchId:R,activeSchool:L,activeBranch:_}=(0,c.c)(),{activeStudentId:E,activeMembership:O}=(0,p.A)(),$=T?.primaryColor||"var(--primary-color,#2563eb)",U=(0,n.useMemo)(()=>h("eleeveon_open_workspace"),[]),F=U?.membership||O||h("activeMembership"),W=S(U?.schoolId,F?.schoolId,D,L?.id,T?.schoolId),K=S(U?.branchId,F?.branchId,R,_?.id,T?.branchId),G=S(U?.studentLocalId,F?.studentLocalId,F?.studentId,E,g("activeStudentId")),[H,Y]=(0,n.useState)(!0),[q,J]=(0,n.useState)({});async function V(){if(!o||!i)return void Y(!1);Y(!0);try{let e=await Promise.all(b.map(async e=>{let t=await I(e);return[e,t.filter(e=>(!e.accountId||!!f(e.accountId,i))&&(!W||!e.schoolId||!!f(e.schoolId,W))&&(!K||!e.branchId||!!f(e.branchId,K)))]}));J(Object.fromEntries(e))}finally{Y(!1)}}(0,n.useEffect)(()=>{u||o&&i||a.replace("/login")},[u,o,i,a]),(0,n.useEffect)(()=>{u||B||V()},[o,i,W,K,G,u,B]);let Z=(0,n.useMemo)(()=>(q.students||[]).find(e=>G&&f(w(e),G))||null,[q.students,G]),Q=(0,n.useMemo)(()=>{let e=G||x(w(Z)),t=(q.studentEnrollments||[]).filter(t=>!e||f(t.studentId,e)),a=t.find(e=>"active"===v(e.status,"active").toLowerCase())||t[0],r=x(a?.classId||Z?.currentClassId||Z?.classId),i=new Set((q.classSubjects||[]).filter(e=>!r||f(e.classId,r)).map(e=>x(e.subjectId)).filter(Boolean)),o=(q.subjects||[]).filter(e=>!i.size||i.has(x(w(e)))),n=(q.assignments||[]).filter(t=>(!t.studentId||f(t.studentId,e))&&(!t.classId||f(t.classId,r))),s=(q.attendance||[]).filter(t=>!e||f(t.studentId,e)),d=s.filter(e=>"present"===v(e.status).toLowerCase()).length,l=s.length?Math.round(d/s.length*100):0,c=(q.computedResults||[]).filter(t=>!e||f(t.studentId,e)),p=c.length?Math.round(c.reduce((e,t)=>e+y(t.percentage||t.average||t.score||t.totalScore),0)/c.length):0,u=(q.studentFeeInvoices||[]).filter(t=>!e||f(t.studentId,e)),m=[...q.studentFeePayments||[],...q.payments||[]].filter(t=>!t.studentId||f(t.studentId,e)),b=u.reduce((e,t)=>e+y(t.total||t.amount||t.netAmount),0),g=m.reduce((e,t)=>e+y(t.amount||t.total),0);return{subjects:o.length||i.size,assignments:k(n),pendingAssignments:n.filter(e=>!["submitted","completed","graded"].includes(v(e.status).toLowerCase())).length,attendancePercent:l,present:d,attendance:k(s),results:k(c),averageScore:p,reportCards:(q.reportCards||[]).filter(t=>!e||f(t.studentId,e)).length,feeBalance:Math.max(0,b-g),currency:v(u[0]?.currencyCode||m[0]?.currencyCode,"GHS")}},[q,Z,G]),X=(0,n.useMemo)(()=>{var e,t;let a,r;return e=q.portalHighlights||[],t=(q.mediaAssets||[]).filter(j),a=Date.now(),(r=e.filter(j).filter(e=>!(!(Array.isArray(e.audiences)?e.audiences.map(e=>v(e).toLowerCase()):[v(e.audience||e.portal||e.role||"all").toLowerCase()]).some(e=>["all","student","students"].includes(e))||!["published","scheduled","active"].includes(v(e.status,"published").toLowerCase())||y(e.startAt)>a||y(e.endAt)&&y(e.endAt)<a)).sort((e,t)=>y(e.displayOrder||e.order)-y(t.displayOrder||t.order)).map((e,a)=>{let r="video"===v(e.mediaType).toLowerCase()?"video":"image",i=C(t,e.mediaAssetId)||("image"===r?v(e.fallbackImageUrl):"");return i?{id:x(w(e))||`student-highlight-${a}`,type:r,src:i,poster:C(t,e.posterMediaAssetId)||v(e.fallbackImageUrl)||void 0,durationSeconds:Math.max(3,Math.min(30,y(e.durationSeconds||7)))}:null}).filter(e=>!!e)).length?r:m},[q.portalHighlights,q.mediaAssets]),ee=(0,n.useMemo)(()=>(q.announcements||[]).filter(j).slice(0,2),[q.announcements]),et=(0,n.useMemo)(()=>(q.calendarEvents||[]).filter(j).sort((e,t)=>new Date(e.startAt||e.date||0).getTime()-new Date(t.startAt||t.date||0).getTime()).slice(0,2),[q.calendarEvents]);function ea(t){if(e)return void e(t);try{window.dispatchEvent(new CustomEvent("eleeveon:portal-route",{detail:{key:t}}))}catch{}}return H||u||B?(0,r.jsx)(z,{primary:$,title:"Opening student home..."}):(0,r.jsxs)("main",{className:"sd-page",style:{"--sd-primary":$},children:[(0,r.jsx)("style",{children:M}),(0,r.jsx)(A,{slides:X}),(0,r.jsxs)("section",{className:"sd-metrics",children:[(0,r.jsxs)("button",{type:"button",onClick:()=>ea("myAttendance"),children:[(0,r.jsx)("span",{children:"Attendance"}),(0,r.jsxs)("strong",{children:[Q.attendancePercent,"%"]}),(0,r.jsxs)("small",{children:[Q.present," ","present record(s)"]})]}),(0,r.jsxs)("button",{type:"button",onClick:()=>ea("myResults"),children:[(0,r.jsx)("span",{children:"Results"}),(0,r.jsxs)("strong",{children:[Q.averageScore||"—",Q.averageScore?"%":""]}),(0,r.jsxs)("small",{children:[Q.results," ","result record(s)"]})]})]}),(0,r.jsxs)("section",{className:"sd-grid",children:[(0,r.jsxs)("article",{className:"sd-card",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"Learning"}),(0,r.jsx)("h2",{children:"My work"})]})}),(0,r.jsxs)("div",{className:"sd-work-grid",children:[(0,r.jsxs)("button",{type:"button",onClick:()=>ea("mySubjects"),children:[(0,r.jsx)("strong",{children:Q.subjects}),(0,r.jsx)("span",{children:"Subjects"})]}),(0,r.jsxs)("button",{type:"button",onClick:()=>ea("myAssignments"),children:[(0,r.jsx)("strong",{children:Q.pendingAssignments}),(0,r.jsx)("span",{children:"Pending"})]}),(0,r.jsxs)("button",{type:"button",onClick:()=>ea("myReportCards"),children:[(0,r.jsx)("strong",{children:Q.reportCards}),(0,r.jsx)("span",{children:"Reports"})]})]})]}),(0,r.jsxs)("article",{className:"sd-card",children:[(0,r.jsxs)("header",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"Account"}),(0,r.jsx)("h2",{children:"Fees"})]}),(0,r.jsx)("button",{type:"button",onClick:()=>ea("studentPayments"),children:"Open"})]}),(0,r.jsx)("strong",{className:"sd-balance",children:function(e,t="GHS"){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:t,maximumFractionDigits:0}).format(y(e))}catch{return`${t} ${y(e).toLocaleString()}`}}(Q.feeBalance,Q.currency)}),(0,r.jsx)("p",{className:"sd-muted",children:Q.feeBalance?"Outstanding balance":"No outstanding balance"})]}),(0,r.jsxs)("article",{className:"sd-card",children:[(0,r.jsxs)("header",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"School updates"}),(0,r.jsx)("h2",{children:"Announcements"})]}),(0,r.jsx)("button",{type:"button",onClick:()=>ea("announcements"),children:"View all"})]}),(0,r.jsxs)("div",{className:"sd-list",children:[ee.map((e,t)=>(0,r.jsxs)("button",{type:"button",className:"sd-row",onClick:()=>ea("announcements"),children:[(0,r.jsx)("span",{children:"\uD83D\uDCE3"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:v(e.title,"Announcement")}),(0,r.jsx)("small",{children:v(e.body||e.message||e.content,"Open to read")})]})]},x(w(e))||t)),ee.length?null:(0,r.jsx)(N,{text:"No announcements yet."})]})]}),(0,r.jsxs)("article",{className:"sd-card",children:[(0,r.jsxs)("header",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"Schedule"}),(0,r.jsx)("h2",{children:"Upcoming"})]}),(0,r.jsx)("button",{type:"button",onClick:()=>ea("calendar"),children:"Calendar"})]}),(0,r.jsxs)("div",{className:"sd-list",children:[et.map((e,t)=>(0,r.jsxs)("button",{type:"button",className:"sd-row",onClick:()=>ea("calendar"),children:[(0,r.jsx)("span",{children:"\uD83D\uDDD3️"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:v(e.title||e.name,"School event")}),(0,r.jsx)("small",{children:function(e){if(!e)return"Not set";let t=new Date(e);return Number.isFinite(t.getTime())?new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric"}).format(t):"Not set"}(e.startAt||e.date)})]})]},x(w(e))||t)),et.length?null:(0,r.jsx)(N,{text:"Nothing upcoming."})]})]})]})]})}function N({text:e}){return(0,r.jsx)("div",{className:"sd-empty",children:e})}function z({primary:e,title:t}){return(0,r.jsxs)("main",{className:"sd-page",style:{"--sd-primary":e},children:[(0,r.jsx)("style",{children:M}),(0,r.jsxs)("section",{className:"sd-state",children:[(0,r.jsx)("div",{className:"sd-spinner"}),(0,r.jsx)("h2",{children:t})]})]})}let M=`
@keyframes sdSpin {
  to { transform: rotate(360deg); }
}

.sd-page {
  width: 100%;
  height: auto !important;
  min-height: 0 !important;
  overflow: visible !important;
  padding: 8px 8px calc(76px + env(safe-area-inset-bottom,0px));
  background: var(--bg,#f7f8fb);
  color: var(--text,#111827);
}

.sd-page,
.sd-page * {
  box-sizing: border-box;
  min-width: 0;
}

.sd-page button {
  font: inherit;
  cursor: pointer;
}

.sd-hero {
  position: relative;
  height: clamp(290px,47vw,390px);
  overflow: hidden;
  border-radius: 25px;
  background: #0f172a;
  box-shadow: 0 14px 34px rgba(15,23,42,.08);
}

.sd-hero img,
.sd-hero video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.sd-dots {
  position: absolute;
  left: 50%;
  bottom: 11px;
  display: flex;
  gap: 6px;
  transform: translateX(-50%);
}

.sd-dots button {
  width: 7px;
  height: 7px;
  padding: 0;
  border: 0;
  border-radius: 99px;
  background: rgba(255,255,255,.5);
}

.sd-dots button.active {
  width: 20px;
  background: #fff;
}

.sd-metrics,
.sd-grid {
  display: grid;
  gap: 9px;
  margin-top: 9px;
}

.sd-metrics {
  grid-template-columns: repeat(2,minmax(0,1fr));
}

.sd-metrics button,
.sd-card {
  border: 1px solid var(--border,rgba(15,23,42,.09));
  background: var(--card-bg,var(--surface,#fff));
  color: inherit;
  box-shadow: 0 8px 22px rgba(15,23,42,.045);
}

.sd-metrics button {
  min-height: 92px;
  padding: 12px;
  border-radius: 20px;
  text-align: left;
}

.sd-metrics span,
.sd-metrics strong,
.sd-metrics small {
  display: block;
}

.sd-metrics span {
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
}

.sd-metrics strong {
  margin-top: 5px;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -.05em;
}

.sd-metrics small {
  margin-top: 5px;
  color: var(--muted,#64748b);
  font-size: 10px;
}

.sd-card {
  padding: 13px;
  border-radius: 22px;
}

.sd-card header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}

.sd-card header span {
  color: var(--muted,#64748b);
  font-size: 9px;
  font-weight: 900;
  letter-spacing: .09em;
  text-transform: uppercase;
}

.sd-card h2 {
  margin: 2px 0 0;
  font-size: 16px;
}

.sd-card header button {
  border: 0;
  border-radius: 999px;
  padding: 6px 9px;
  background: color-mix(in srgb,var(--sd-primary) 9%,transparent);
  color: var(--sd-primary);
  font-size: 10px;
  font-weight: 900;
}

.sd-work-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 7px;
}

.sd-work-grid button {
  min-height: 74px;
  border: 0;
  border-radius: 16px;
  background: color-mix(in srgb,var(--muted,#64748b) 6%,transparent);
  color: inherit;
}

.sd-work-grid strong,
.sd-work-grid span {
  display: block;
}

.sd-work-grid strong {
  font-size: 22px;
}

.sd-work-grid span {
  margin-top: 3px;
  color: var(--muted,#64748b);
  font-size: 9px;
  font-weight: 850;
}

.sd-balance {
  display: block;
  font-size: 28px;
  letter-spacing: -.05em;
}

.sd-muted {
  margin: 5px 0 0;
  color: var(--muted,#64748b);
  font-size: 10px;
}

.sd-list {
  display: grid;
  gap: 6px;
}

.sd-row {
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

.sd-row > span {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background: color-mix(in srgb,var(--sd-primary) 10%,transparent);
}

.sd-row strong,
.sd-row small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sd-row strong {
  font-size: 12px;
}

.sd-row small {
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 10px;
}

.sd-empty {
  padding: 18px 8px;
  text-align: center;
  color: var(--muted,#64748b);
  font-size: 11px;
}

.sd-state {
  min-height: 280px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
}

.sd-spinner {
  width: 36px;
  height: 36px;
  border: 4px solid color-mix(in srgb,var(--sd-primary) 16%,transparent);
  border-top-color: var(--sd-primary);
  border-radius: 999px;
  animation: sdSpin .8s linear infinite;
}

.sd-state h2 {
  margin: 0;
  font-size: 17px;
}

.sd-page,
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
  .sd-page {
    padding: 12px 12px 24px;
  }

  .sd-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }

  .sd-hero {
    height: 370px;
  }
}

@media (min-width:1100px) {
  .sd-page {
    max-width: 1180px;
    margin: 0 auto;
  }
}
`;var T=a(58365),B=a(44253),D=a(73837),R=a(5779),L=a(15982),_=a(66925),E=a(10903);let O=B.A;function $(e){return e?.reportType==="student_report"||!e?.reportType}function U(e){return e.map(e=>V(e.id)).find(Boolean)||void 0}let F="student-report-print-zone",W=String(T.$S.STUDENTS||"students"),K=String(T.$S.SCHOOLS||"schools"),G=String(T.$S.BRANCHES||"branches"),H=String(T.$S.SCHOOL_BRANCH_SETTINGS||T.$S.SCHOOL_BRANCHES_SETTINGS||"schoolBranchSettings"),Y=String(T.Vq.PHOTO||"photo"),q=String(T.Vq.LOGO||"logo");function J(e,t,a){let r;return!e||a&&e&&Object.prototype.hasOwnProperty.call(e,a)&&!V(e[a])?"":!(r=String(e[t]||""))||r.startsWith("blob:")||r.startsWith("data:image/")?"":r}function V(e){if(null==e)return"";let t=String(e).trim();return t&&"0"!==t&&"undefined"!==t&&"null"!==t?t:""}String(T.Vq.BANNER||"bannerImage");function Z(e){try{return window.localStorage.getItem(e)||window.sessionStorage.getItem(e)}catch{return null}}function Q(e){let t=Z(e);if(!t)return null;try{return JSON.parse(t)}catch{return null}}function X(){return Q("activeMembership")}function ee(...e){for(let t of e){let e=V(t);if(e)return e}return""}function et(e,t){let a=V(t);return a?e.find(e=>V(e.id)===a)?.name||"Not found":"Not selected"}function ea({primary:e,title:t,text:a}){return(0,r.jsxs)("main",{className:"ba-page",style:{"--ba-primary":e,"--primary-color":e},children:[(0,r.jsx)("style",{children:es}),(0,r.jsxs)("section",{className:"ba-state",children:[(0,r.jsx)("div",{className:"ba-spinner"}),(0,r.jsx)("h2",{children:t}),(0,r.jsx)("p",{children:a})]})]})}function er({icon:e,title:t,text:a}){return(0,r.jsxs)("section",{className:"ba-empty",children:[(0,r.jsx)("div",{className:"ba-empty-icon",children:e}),(0,r.jsx)("h3",{children:t}),(0,r.jsx)("p",{children:a})]})}function ei(){return(0,r.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,r.jsx)("path",{d:"M4 7h9"}),(0,r.jsx)("path",{d:"M17 7h3"}),(0,r.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,r.jsx)("path",{d:"M4 17h3"}),(0,r.jsx)("path",{d:"M11 17h9"}),(0,r.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function eo({mode:e,filters:t,academicStructures:a,academicPeriods:i,filteredClasses:o,filteredClassSubjects:n,filteredStudents:s,setMode:d,setFilters:l,onClose:c}){return(0,r.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"ba-sheet",children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Filters"}),(0,r.jsx)("p",{children:"Choose the academic period or subject. Your student profile stays locked to the assigned branch."})]}),(0,r.jsx)("button",{type:"button",onClick:c,"aria-label":"Close filters",children:"✕"})]}),(0,r.jsxs)("div",{className:"ba-form compact",children:[(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Report Mode"}),(0,r.jsx)("select",{value:e,onChange:e=>d(e.target.value),children:(0,r.jsx)("option",{value:"student-report",children:"My Report"})})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Academic Structure"}),(0,r.jsxs)("select",{value:t.academicStructureId||"",onChange:e=>l(t=>({...t,academicStructureId:V(e.target.value)||void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"Select structure"}),a.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Academic Period"}),(0,r.jsxs)("select",{value:t.academicPeriodId||"",onChange:e=>l(t=>({...t,academicPeriodId:V(e.target.value)||void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"Select period"}),i.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Class"}),(0,r.jsxs)("select",{value:t.classId||"",onChange:e=>l(t=>({...t,classId:V(e.target.value)||void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"Select class"}),o.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Class Subject"}),(0,r.jsxs)("select",{value:t.classSubjectId||"",onChange:e=>l(t=>({...t,classSubjectId:V(e.target.value)||void 0})),children:[(0,r.jsx)("option",{value:"",children:"All subjects"}),n.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name||`Subject ${e.subjectId||""}`},e.id))]})]}),"student-report"===e&&(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Student"}),(0,r.jsx)("select",{value:t.studentId||"",disabled:!0,children:s.map(e=>(0,r.jsx)("option",{value:e.id,children:e.fullName||e.name||"Student"},e.id))})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Sort Mode"}),(0,r.jsxs)("select",{value:t.sortMode||"position",onChange:e=>l(t=>({...t,sortMode:e.target.value})),children:[(0,r.jsx)("option",{value:"position",children:"Position"}),(0,r.jsx)("option",{value:"name",children:"Name"}),(0,r.jsx)("option",{value:"score",children:"Score"})]})]})]}),(0,r.jsxs)("div",{className:"ba-sheet-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>l(e=>({...e,academicStructureId:void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"})),children:"Clear"}),(0,r.jsx)("button",{type:"button",className:"primary",onClick:c,children:"Apply"})]})]})})}function en({onRefresh:e,onPrint:t,onClose:a}){return(0,r.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"ba-sheet small",children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"More"}),(0,r.jsx)("p",{children:"Quick report actions only."})]}),(0,r.jsx)("button",{type:"button",onClick:a,"aria-label":"Close menu",children:"✕"})]}),(0,r.jsxs)("div",{className:"ba-menu-list",children:[(0,r.jsxs)("button",{type:"button",onClick:t,children:[(0,r.jsx)("span",{children:"⎙"}),(0,r.jsx)("b",{children:"Print report"}),(0,r.jsx)("small",{children:"Print the current preview output"})]}),(0,r.jsxs)("button",{type:"button",onClick:e,children:[(0,r.jsx)("span",{children:"↻"}),(0,r.jsx)("b",{children:"Refresh"}),(0,r.jsx)("small",{children:"Reload local branch report records"})]})]})]})})}let es=`
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

/* Student My Report golden additions */

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

`;var ed=a(6581),el=a(13460),ec=a(94075),ep=a(19892),eu=a(45116),em=a(78793),eb=a(87239),eg=a(3721),eh=a(55753);function ex(e,t,a){let r=String(e.code||e.templateCode||e.layoutKey||e.key||"").trim();return{name:e.name||e.templateName||("cumulative_transcript"===a?"Cumulative Transcript Classic":"Classic Formal"),code:r||("cumulative_transcript"===a?"cumulative_transcript_classic":"classic_formal"),templateCode:r||("cumulative_transcript"===a?"cumulative_transcript_classic":"classic_formal"),layoutKey:e.layoutKey||r||("cumulative_transcript"===a?"cumulative_transcript_classic":"classic_formal"),templateKey:e.templateKey||e.layoutKey||r,reportType:a,orientation:e.orientation||"portrait",paperSize:e.paperSize||"A4",density:e.density||"compact",description:e.description||"Built-in report template.",active:!1!==e.active,isDefault:!0===e.isDefault||0===t}}function ef(e){let t=String(e.reportType||"student_report").trim(),a=String(e.code||e.templateCode||e.layoutKey||e.templateKey||e.name||e.id||"").trim();return`${t}:${a}`}let ev=String(T.$S.SCHOOLS||"schools"),ey=String(T.$S.BRANCHES||"branches"),ew=String(T.$S.SCHOOL_BRANCH_SETTINGS||T.$S.SCHOOL_BRANCHES_SETTINGS||"schoolBranchSettings"),ej=String(T.$S.STUDENTS||"students"),eI=String(T.Vq.LOGO||"logo"),eS=String(T.Vq.PHOTO||"photo");function ek(e,t,a){let r;return!e||a&&e&&Object.prototype.hasOwnProperty.call(e,a)&&!eM(e[a])?"":!(r=String(e[t]||""))||r.startsWith("blob:")||r.startsWith("data:image/")?"":r}function eC(...e){for(let t of e){let e=String(t||"").trim();if(e)return e}return""}let eA=(e,t=1)=>null==e||Number.isNaN(e)?"0":Number(e).toFixed(t),eP=e=>"up"===e?"Improving":"down"===e?"Declining":"stable"===e?"Stable":"-",eN={"student-transcript":"Cumulative Transcript","cumulative-book":"Cumulative Report Book","multi-period-report":"Multi-Period Report","annual-broadsheet":"Annual Broadsheet","subject-history":"Subject History","promotion-summary":"Promotion Summary","progression-timeline":"Progression Timeline"};function ez(e,t){if(!t)return"Not selected";let a=e.find(e=>e.id===t);return a?.name||a?.fullName||"Not found"}function eM(e){return null==e?"":String(e).trim()}function eT(e,t){let a=eM(e),r=eM(t);return!!a&&!!r&&a===r}function eB(e){try{return window.localStorage.getItem(e)||window.sessionStorage.getItem(e)}catch{return null}}function eD(e){let t=eB(e);if(!t)return null;try{return JSON.parse(t)}catch{return null}}function eR(){return eD("activeMembership")}function eL(...e){for(let t of e){let e=eM(t);if(e)return e}return""}function e_(e,t){return!t||!e||e===t}function eE(e){return!e.isDeleted&&!1!==e.active&&"withdrawn"!==e.status}function eO(e){return String(e?.code||e?.templateCode||e?.layoutKey||e?.templateKey||"").trim()}function e$(e){return String(e?.reportType||"student_report").trim()}function eU(e){return!e.isDeleted&&!1!==e.active}function eF(e,t,a,r){return e_(e.accountId,t)&&(!e.schoolId||eT(e.schoolId,a))&&(!e.branchId||eT(e.branchId,r))&&!e.isDeleted}function eW(e,t){let a=e.filter(e=>eU(e)&&e$(e)===t);return a.find(e=>e.isDefault)||a[0]}function eK(e,t,a){let r=e.filter(e=>!!eU(e)&&e$(e)===t&&(!e.scopeType||"branch"===e.scopeType)&&(!e.scopeId||!a||!!eT(e.scopeId,a)));return r.find(e=>e.isDefault)||r[0]}function eG(e,t){if(!t)return;let a=eM(t.templateId),r=eO(t);return e.find(e=>a&&eM(e.id)===a&&eU(e))||e.find(e=>r&&eO(e)===r&&eU(e))}function eH(e,t,a,r){let i=eM(t?.templateSettingsId),o=eM(a?.id||t?.templateId),n=eO(a)||eO(t);return e.find(e=>i&&eM(e.id)===i&&eU(e))||e.find(e=>o&&eM(e.templateId)===o&&eU(e))||e.find(e=>n&&eO(e)===n&&(!r||e$(e)===r)&&eU(e))}function eY({primary:e,title:t,text:a}){return(0,r.jsxs)("main",{className:"ba-page cumulative-page",style:{"--ba-primary":e},children:[(0,r.jsx)("style",{children:eQ}),(0,r.jsxs)("section",{className:"ba-state",children:[(0,r.jsx)("div",{className:"ba-spinner"}),(0,r.jsx)("h2",{children:t}),(0,r.jsx)("p",{children:a})]})]})}function eq(){return(0,r.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,r.jsx)("path",{d:"M4 7h9"}),(0,r.jsx)("path",{d:"M17 7h3"}),(0,r.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,r.jsx)("path",{d:"M4 17h3"}),(0,r.jsx)("path",{d:"M11 17h9"}),(0,r.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function eJ({filters:e,setBranchLockedFilters:t,academicStructures:a,academicPeriods:i,classes:o,students:n,subjects:s,onClose:d}){let l=i.filter(t=>!e.academicStructureId||t.academicStructureId===e.academicStructureId),c=n.filter(t=>!e.classId||t.currentClassId===e.classId);return(0,r.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"ba-sheet",children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Filters"}),(0,r.jsx)("p",{children:"Choose the historical period, subject, or record type. Your student profile stays locked."})]}),(0,r.jsx)("button",{type:"button",onClick:d,"aria-label":"Close filters",children:"✕"})]}),(0,r.jsxs)("div",{className:"ba-form compact",children:[(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Academic Structure"}),(0,r.jsxs)("select",{value:e.academicStructureId||"",onChange:e=>t(t=>({...t,academicStructureId:eM(e.target.value)||void 0,academicPeriodId:void 0,fromAcademicPeriodId:void 0,toAcademicPeriodId:void 0,classId:void 0,subjectId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"All structures"}),a.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Academic Period"}),(0,r.jsxs)("select",{value:e.academicPeriodId||"",onChange:e=>t(t=>({...t,academicPeriodId:eM(e.target.value)||void 0,classId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"All periods"}),l.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"From Period"}),(0,r.jsxs)("select",{value:e.fromAcademicPeriodId||"",onChange:e=>t(t=>({...t,fromAcademicPeriodId:eM(e.target.value)||void 0})),children:[(0,r.jsx)("option",{value:"",children:"No start period"}),l.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"To Period"}),(0,r.jsxs)("select",{value:e.toAcademicPeriodId||"",onChange:e=>t(t=>({...t,toAcademicPeriodId:eM(e.target.value)||void 0})),children:[(0,r.jsx)("option",{value:"",children:"No end period"}),l.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Class"}),(0,r.jsxs)("select",{value:e.classId||"",onChange:e=>t(t=>({...t,classId:eM(e.target.value)||void 0,studentId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"All classes"}),o.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Student"}),(0,r.jsx)("select",{value:e.studentId||"",disabled:!0,children:c.map(e=>(0,r.jsxs)("option",{value:e.id,children:[e.fullName,e.admissionNumber?` (${e.admissionNumber})`:""]},e.id))})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Subject"}),(0,r.jsxs)("select",{value:e.subjectId||"",onChange:e=>t(t=>({...t,subjectId:eM(e.target.value)||void 0})),children:[(0,r.jsx)("option",{value:"",children:"Select subject"}),s.map(e=>(0,r.jsxs)("option",{value:e.id,children:[e.name,e.code?` (${e.code})`:""]},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Snapshot Type"}),(0,r.jsxs)("select",{value:e.snapshotType,onChange:e=>t(t=>({...t,snapshotType:e.target.value})),children:[(0,r.jsx)("option",{value:"all",children:"All snapshots"}),(0,r.jsx)("option",{value:"terminal",children:"Terminal snapshots"}),(0,r.jsx)("option",{value:"promotion",children:"Promotion snapshots"}),(0,r.jsx)("option",{value:"manual",children:"Manual snapshots"})]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Decision"}),(0,r.jsxs)("select",{value:e.decision||"all",onChange:e=>t(t=>({...t,decision:e.target.value})),children:[(0,r.jsx)("option",{value:"all",children:"All decisions"}),(0,r.jsx)("option",{value:"promote",children:"Promote"}),(0,r.jsx)("option",{value:"repeat",children:"Repeat"}),(0,r.jsx)("option",{value:"graduate",children:"Graduate"})]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Sort Mode"}),(0,r.jsxs)("select",{value:e.sortMode,onChange:e=>t(t=>({...t,sortMode:e.target.value})),children:[(0,r.jsx)("option",{value:"position",children:"Sort by position"}),(0,r.jsx)("option",{value:"alphabetical",children:"Sort alphabetically"}),(0,r.jsx)("option",{value:"average",children:"Sort by average"}),(0,r.jsx)("option",{value:"admission-number",children:"Sort by admission no."})]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Grouping"}),(0,r.jsxs)("select",{value:e.groupingMode,onChange:e=>t(t=>({...t,groupingMode:e.target.value})),children:[(0,r.jsx)("option",{value:"academic-structure",children:"Academic structure"}),(0,r.jsx)("option",{value:"class",children:"Class"}),(0,r.jsx)("option",{value:"period",children:"Period"})]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Subject Aggregation"}),(0,r.jsxs)("select",{value:e.subjectAggregationMode,onChange:e=>t(t=>({...t,subjectAggregationMode:e.target.value})),children:[(0,r.jsx)("option",{value:"average",children:"Average"}),(0,r.jsx)("option",{value:"latest",children:"Latest score"}),(0,r.jsx)("option",{value:"best",children:"Best score"}),(0,r.jsx)("option",{value:"weighted-average",children:"Weighted average"})]})]})]}),(0,r.jsxs)("div",{className:"cumulative-toggle-grid",children:[(0,r.jsxs)("button",{type:"button",className:e.includeTerminalSnapshots?"active":"",onClick:()=>t(e=>({...e,includeTerminalSnapshots:!e.includeTerminalSnapshots})),children:["Terminal: ",e.includeTerminalSnapshots?"On":"Off"]}),(0,r.jsxs)("button",{type:"button",className:e.includePromotionRecords?"active":"",onClick:()=>t(e=>({...e,includePromotionRecords:!e.includePromotionRecords})),children:["Promotions: ",e.includePromotionRecords?"On":"Off"]}),(0,r.jsxs)("button",{type:"button",className:e.includeManualSnapshots?"active":"",onClick:()=>t(e=>({...e,includeManualSnapshots:!e.includeManualSnapshots})),children:["Manual: ",e.includeManualSnapshots?"On":"Off"]}),(0,r.jsxs)("button",{type:"button",className:e.includeDeletedSnapshots?"active":"",onClick:()=>t(e=>({...e,includeDeletedSnapshots:!e.includeDeletedSnapshots})),children:["Deleted: ",e.includeDeletedSnapshots?"On":"Off"]})]}),(0,r.jsxs)("div",{className:"ba-sheet-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>t(t=>({...t,academicStructureId:void 0,academicPeriodId:void 0,fromAcademicPeriodId:void 0,toAcademicPeriodId:void 0,classId:void 0,studentId:e.studentId,subjectId:void 0,snapshotType:"all",decision:"all",sortMode:"position",groupingMode:"academic-structure",subjectAggregationMode:"average",includePromotionRecords:!0,includeManualSnapshots:!0,includeTerminalSnapshots:!0,includeDeletedSnapshots:!1})),children:"Clear"}),(0,r.jsx)("button",{type:"button",className:"primary",onClick:d,children:"Apply"})]})]})})}function eV({mode:e,setMode:t,onRefresh:a,onPrint:i,onClose:o}){return(0,r.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"ba-sheet small",children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"More"}),(0,r.jsx)("p",{children:"Choose output mode or run quick actions."})]}),(0,r.jsx)("button",{type:"button",onClick:o,"aria-label":"Close menu",children:"✕"})]}),(0,r.jsxs)("div",{className:"ba-menu-list",children:[[{mode:"student-transcript",icon:"\uD83D\uDCC4",label:"Cumulative Transcript",note:"Template-based academic transcript"},{mode:"cumulative-book",icon:"\uD83D\uDCD8",label:"Cumulative Report Book",note:"Covers plus period report cards"},{mode:"multi-period-report",icon:"\uD83D\uDCDA",label:"Multi-Period Report",note:"Student performance across periods"},{mode:"annual-broadsheet",icon:"☷",label:"Annual Broadsheet",note:"Class or school annual broadsheet"},{mode:"subject-history",icon:"\uD83D\uDCC8",label:"Subject History",note:"Longitudinal subject analytics"},{mode:"promotion-summary",icon:"\uD83C\uDF93",label:"Promotion Summary",note:"Promotion decision summary"},{mode:"progression-timeline",icon:"⏱",label:"Progression Timeline",note:"Student academic timeline"}].map(a=>(0,r.jsxs)("button",{type:"button",className:e===a.mode?"active":"",onClick:()=>t(a.mode),children:[(0,r.jsx)("span",{children:a.icon}),(0,r.jsx)("b",{children:a.label}),(0,r.jsx)("small",{children:a.note})]},a.mode)),(0,r.jsxs)("button",{type:"button",onClick:i,children:[(0,r.jsx)("span",{children:"⎙"}),(0,r.jsx)("b",{children:"Print current view"}),(0,r.jsx)("small",{children:"Print the selected cumulative output"})]}),(0,r.jsxs)("button",{type:"button",onClick:a,children:[(0,r.jsx)("span",{children:"↻"}),(0,r.jsx)("b",{children:"Refresh"}),(0,r.jsx)("small",{children:"Reload my cumulative records"})]})]})]})})}function eZ({primary:e,schoolName:t,label:a}){return(0,r.jsxs)("div",{style:{marginTop:10,borderTop:`2px solid ${e}`,paddingTop:5,display:"flex",justifyContent:"space-between",fontSize:8.5,color:"#555"},children:[(0,r.jsxs)("span",{children:[a," generated for ",t]}),(0,r.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})}let eQ=`
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

`,eX=[{title:"My Learning",defaultOpen:!0,items:[{key:"studentDashboard",label:"Dashboard",icon:"\uD83C\uDFE0"},{key:"myAttendance",label:"Attendance",icon:"\uD83D\uDCC5"}]},{title:"My Records",defaultOpen:!1,items:[{key:"myReport",label:"Report Card",icon:"\uD83D\uDCCA"},{key:"myCumulativeRecords",label:"Cumulative Records",icon:"\uD83D\uDCD1"}]},{title:"My Finances",defaultOpen:!1,items:[{key:"studentPayments",label:"Fee Payments",icon:"\uD83D\uDCB3"}]}],e0={studentDashboard:function({navigate:e}){return(0,r.jsx)(P,{navigate:e,navSections:eX})},myCumulativeRecords:function(){var e,t;let a,i,o,m,b=(0,_.p)(),g=(0,s.useRouter)(),{accountId:h,authenticated:x,loading:f}=(0,d.F)(),{settings:v,loading:y}=(0,l.t)(),{activeSchool:w,activeSchoolId:j,activeBranch:I,activeBranchId:S,loading:k}=(0,c.c)(),{activeMembership:C}=(0,p.A)(),A=(0,n.useMemo)(()=>eD("eleeveon_open_workspace"),[]),P=(0,n.useMemo)(()=>A?.membership||C||eR()||{},[C,A?.membership]),N=eL(P?.studentId,P?.studentLocalId,P?.student?.id,A?.studentId,eB("activeStudentId")),z="student"===String(P?.role||A?.role||"").toLowerCase(),M=v?.primaryColor||"var(--primary-color, #2563eb)",B=eM(v?.currentAcademicStructureId)||void 0,D=(e={openWorkspace:A,activeMembership:C,activeSchoolId:j,activeSchool:w,settings:v},a=eR(),i=e.openWorkspace?.membership||e.activeMembership||a||null,eL(e.openWorkspace?.schoolId,i?.schoolId,i?.school?.id,e.activeSchoolId,e.activeSchool?.id,e.settings?.schoolId,eB("activeSchoolId"))),R=(t={openWorkspace:A,activeMembership:C,activeBranchId:S,activeBranch:I,settings:v},o=eR(),m=t.openWorkspace?.membership||t.activeMembership||o||null,eL(t.openWorkspace?.branchId,m?.branchId,m?.schoolBranchId,m?.branch?.id,t.activeBranchId,t.activeBranch?.id,t.settings?.branchId,eB("activeBranchId"))),{loading:L,setLoading:O}=(0,E.J)(),[$,U]=(0,n.useState)(""),[F,W]=(0,n.useState)(!1),[K,G]=(0,n.useState)(!1),[H,Y]=(0,n.useState)({branchId:R||"",academicStructureId:B,academicPeriodId:void 0,fromAcademicPeriodId:void 0,toAcademicPeriodId:void 0,classId:void 0,studentId:void 0,subjectId:void 0,snapshotType:"all",decision:"all",mode:"student-transcript",sortMode:"position",groupingMode:"academic-structure",subjectAggregationMode:"average",includePromotionRecords:!0,includeManualSnapshots:!0,includeTerminalSnapshots:!0,includeDeletedSnapshots:!1}),[q,J]=(0,n.useState)([]),[V,Z]=(0,n.useState)([]),[Q,X]=(0,n.useState)([]),[ee,et]=(0,n.useState)([]),[ea,er]=(0,n.useState)([]),[ei,eo]=(0,n.useState)([]),[en,es]=(0,n.useState)([]),[eO,e$]=(0,n.useState)([]),[eX,e0]=(0,n.useState)([]),[e1,e2]=(0,n.useState)([]),[e4,e8]=(0,n.useState)([]),[e9,e6]=(0,n.useState)([]),[e7,e5]=(0,n.useState)([]),[e3,te]=(0,n.useState)([]),[tt,ta]=(0,n.useState)([]),[tr,ti]=(0,n.useState)([]),[to,tn]=(0,n.useState)([]);(0,n.useEffect)(()=>{if(!f&&!k&&(!x||!h))return void g.replace("/login")},[f,k,x,h,j,S,g]),(0,n.useEffect)(()=>()=>{to.forEach(T.hZ)},[to]);let ts=e=>e_(e.accountId,h)&&eT(e.schoolId,D)&&eT(e.branchId,R)&&!e.isDeleted,td=e=>e_(e.accountId,h)&&(eT(e.schoolId,D)||eT(e.id,D))&&!e.isDeleted,tl=e=>e_(e.accountId,h)&&eT(e.schoolId,D)&&eT(e.id,R)&&!e.isDeleted,tc=e=>e_(e.accountId,h)&&(!e.schoolId||eT(e.schoolId,D))&&(!e.branchId||eT(e.branchId,R))&&!e.isDeleted,tp=()=>{to.forEach(T.hZ),tn([]),J([]),Z([]),X([]),et([]),er([]),eo([]),es([]),e$([]),e0([]),e2([]),e8([]),e6([]),e5([]),te([]),ta([]),ti([])},tu=async({ownerTable:e,ownerId:t,fieldKey:a,fallbackMediaId:r,nextUrls:i})=>{let o=eM(t);if(o){let t=await (0,T.cg)({accountId:h||void 0,ownerTable:e,ownerId:o,fieldKey:a});if(t?.id&&!t.isDeleted&&!1!==t.active){let e=await (0,T.fW)(String(t.id));if(e)return i.push(e),e}}let n=eM(r);if(!n)return"";let s=await u.db.mediaAssets?.get?.(n);if(!(s&&!s.isDeleted&&!1!==s.active&&(!h||s.accountId===h)&&s.ownerTable===e&&s.fieldKey===a&&(!o||String(s.ownerId||"")===String(o))))return"";let d=await (0,T.fW)(n);return d&&i.push(d),d||""},tm=async()=>{if(!x||!h||!D||!R||!z){tp(),O(!1);return}try{O(!0);let[e,t,a,r,i,o,n,s,d,l,c,p,m,b,g,x]=await Promise.all([u.db.schools.toArray(),u.db.branches.toArray(),u.db.schoolBranchSettings.toArray(),u.db.academicStructures.toArray(),u.db.academicPeriods.toArray(),u.db.students.toArray(),u.db.parents.toArray(),u.db.studentParents.toArray(),u.db.teachers.toArray(),u.db.classes.toArray(),u.db.subjects.toArray(),u.db.studentReportSnapshots.toArray(),u.db.studentPromotions.toArray(),u.db.reportCardTemplates?.toArray?.()||Promise.resolve([]),u.db.reportCardTemplateSettings?.toArray?.()||Promise.resolve([]),u.db.reportCardTemplateAssignments?.toArray?.()||Promise.resolve([])]),f=e.filter(td),v=t.filter(tl),y=a.filter(e=>ts(e)||tc(e)),w=[],j=await Promise.all(f.map(async e=>({...e,logo:await tu({ownerTable:ev,ownerId:e.id,fieldKey:eI,fallbackMediaId:e.logoMediaId,nextUrls:w})||ek(e,"logo","logoMediaId")}))),I=await Promise.all(v.map(async e=>({...e,logo:await tu({ownerTable:ey,ownerId:e.id,fieldKey:eI,fallbackMediaId:e.logoMediaId,nextUrls:w})||ek(e,"logo","logoMediaId")}))),S=await Promise.all(y.map(async e=>({...e,logo:await tu({ownerTable:ew,ownerId:e.id,fieldKey:eI,fallbackMediaId:e.logoMediaId,nextUrls:w})||ek(e,"logo","logoMediaId")})));to.forEach(e=>{w.includes(e)||(0,T.hZ)(e)}),tn(w);let k=await Promise.all(o.filter(e=>tc(e)&&eE(e)).sort((e,t)=>e.fullName.localeCompare(t.fullName)).map(async e=>{let t=await tu({ownerTable:ej,ownerId:e.id,fieldKey:eS,fallbackMediaId:e.photoMediaId,nextUrls:w})||ek(e,"photo","photoMediaId");return{...e,photo:t,studentPhoto:t,resolvedStudentPhotoUrl:t}})),C=n.filter(e=>ts(e)||tc(e)),A=s.filter(e=>ts(e)||tc(e)),z=String(P?.email||P?.user?.email||"").trim().toLowerCase(),M=String(P?.phone||P?.user?.phone||"").replace(/\s+/g,""),B=k.find(e=>N&&eT(e.id,N))||k.find(e=>{let t=String(e.email||"").trim().toLowerCase(),a=String(e.phone||"").replace(/\s+/g,"");return z&&t===z||M&&a===M}),L=eL(N,B?.id),_=new Set(L?[L]:[]),E=k.filter(e=>_.has(eM(e.id))),$=A.filter(e=>_.has(eM(e.studentId))),U=new Set($.map(e=>eM(e.parentId)).filter(Boolean)),F=C.filter(e=>U.has(eM(e.id)));J(j),Z(I),X(S),et(r.filter(e=>tc(e)&&eE(e)).sort((e,t)=>e.name.localeCompare(t.name))),er(i.filter(e=>tc(e)&&eE(e)).sort((e,t)=>Number(e.order||0)-Number(t.order||0))),eo(E),es(F),e$($),e0(d.filter(e=>ts(e)||tc(e))),e2(l.filter(e=>tc(e)&&eE(e)).sort((e,t)=>e.name.localeCompare(t.name))),e8(c.filter(e=>tc(e)&&eE(e)).sort((e,t)=>e.name.localeCompare(t.name))),e6(p.filter(e=>!!_.has(eM(e.studentId))&&(!!H.includeDeletedSnapshots||!e.isDeleted)&&!!e_(e.accountId,h)&&!!eT(e.schoolId,D)&&!!eT(e.branchId,R))),e5(m.filter(e=>!!_.has(eM(e.studentId))&&!e.isDeleted&&!!e_(e.accountId,h)&&(!e.schoolId||!!eT(e.schoolId,D))&&(!e.branchId||!!eT(e.branchId,R)))),Y(e=>({...e,studentId:L||void 0}));let W=new Map;[...ec.yo.map((e,t)=>ex(e,t,"student_report")),...ep.wW.map((e,t)=>ex(e,t,"cumulative_transcript"))].forEach(e=>{let t=ef(e);t&&W.set(t,e)}),b.filter(e=>eF(e,h,D,R)&&eU(e)).forEach(e=>{let t={...e,reportType:e.reportType||"student_report",templateCode:e.templateCode||e.code||e.layoutKey,templateKey:e.templateKey||e.layoutKey||e.code},a=ef(t);a&&W.set(a,{...W.get(a)||{},...t})}),te(Array.from(W.values()).sort((e,t)=>e.reportType!==t.reportType?String(e.reportType||"").localeCompare(String(t.reportType||"")):e.isDefault&&!t.isDefault?-1:!e.isDefault&&t.isDefault?1:String(e.name||"").localeCompare(String(t.name||"")))),ta(g.filter(e=>eF(e,h,D,R)&&eU(e))),ti(x.filter(e=>eF(e,h,D,R)&&eU(e)))}catch(e){console.error("Failed to load cumulative records:",e),tp(),alert("Failed to load cumulative records")}finally{O(!1)}};(0,n.useEffect)(()=>{tm()},[x,h,D,R,b]),(0,n.useEffect)(()=>{Y(e=>{let t=e.branchId!==(R||"");return{...e,branchId:R||"",academicStructureId:t?B:e.academicStructureId||B,academicPeriodId:t?void 0:e.academicPeriodId,classId:t?void 0:e.classId,studentId:N||e.studentId,subjectId:t?void 0:e.subjectId}})},[R,B,N]),(0,n.useEffect)(()=>{!H.academicStructureId&&ee[0]?.id&&Y(e=>({...e,academicStructureId:ee[0].id}))},[H.academicStructureId,ee]);let tb=(0,n.useMemo)(()=>{let e=V.find(e=>eT(e.id,R));return e?[e]:I?[I]:V},[I,V,R]);(0,n.useMemo)(()=>e9.filter(e=>(!!H.includeDeletedSnapshots||!e.isDeleted)&&(!R||!!eT(e.branchId,R))&&(!D||!!eT(e.schoolId,D))&&(!h||e.accountId===h)),[e9,R,D,h,H.includeDeletedSnapshots]);let tg=(0,n.useMemo)(()=>({schools:q.length?q:w?[w]:[],branches:tb,schoolBranchSettings:Q,academicStructures:ee,academicPeriods:ea,students:ei,parents:en,studentParents:eO,teachers:eX,classes:e1,subjects:e4,studentReportSnapshots:e9,studentPromotions:e7}),[q,w,tb,Q,ee,ea,ei,en,eO,eX,e1,e4,e9,e7]),th=(0,n.useMemo)(()=>(0,eh.DB)(tg,H),[tg,H]),tx=(0,n.useMemo)(()=>V.find(e=>eM(e.id)===eM(R))||tb.find(e=>eM(e.id)===eM(R))||(I&&eM(I.id)===eM(R)?I:void 0)||I||V[0]||tb[0]||th.header.branch,[I,R,V,tb,th.header.branch]),tf=(0,n.useMemo)(()=>(function(e,t){if(!e)return e;let a=e.header||{},r=a.branding||{},i=t?.name||t?.branchName||t?.campusName||a.branchName||a.branchLabel||a.branch?.name||r.branchName||"",o=t?.address||t?.branchAddress||a.branchAddress||r.branchAddress||"";return{...e,header:{...a,branch:t||a.branch,branchId:t?.id||a.branchId,branchName:i,branchLabel:i,campusName:i,branchAddress:o,branding:{...r,branchName:r.branchName||i,branchLabel:r.branchLabel||i,campusName:r.campusName||i,branchAddress:r.branchAddress||o,resolvedLogoUrl:r.resolvedLogoUrl||r.logo||a.schoolBranchSetting?.logo||a.branch?.logo||a.school?.logo||"",logo:r.logo||r.resolvedLogoUrl||a.schoolBranchSetting?.logo||a.branch?.logo||a.school?.logo||"",primaryColor:r.primaryColor||"var(--ba-primary, var(--primary-color, #2563eb))"}}}})(th,tx),[th,tx]),tv=(0,n.useMemo)(()=>ei.find(e=>eT(e.id,H.studentId)),[ei,H.studentId]),ty={width:"297mm",minHeight:"210mm",margin:"0 auto 20px",padding:"10mm",boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:tf.header.branding.fontFamily||"Arial, sans-serif",border:"1px solid #e5e5e5"},tw={width:"100%",borderCollapse:"collapse",fontSize:9},tj={border:"1px solid #222",padding:5,background:M,color:"#fff",textAlign:"center",fontWeight:800},tI={border:"1px solid #222",padding:5,verticalAlign:"middle"},tS=(0,n.useMemo)(()=>{let e=eK(tr,"cumulative_book",R),t=eK(tr,"student_report",R);return eG(e3,e)||eG(e3,t)||eW(e3,"student_report")||{name:"Classic Formal",code:"classic_formal",layoutKey:"classic_formal",templateKey:"classic_formal",reportType:"student_report",paperSize:"A4",orientation:"portrait",density:"compact",active:!0,isDefault:!0}},[tr,e3,R]),tk=(0,n.useMemo)(()=>{var e;let t=eK(tr,"cumulative_book",R),a=eK(tr,"student_report",R),r=eH(tt,t,tS,"cumulative_book"),i=eH(tt,a,tS,"student_report");return{...(e=r||i)||{},reportType:"cumulative_book",showBookFrontCover:e?.showBookFrontCover??!0,showBookStudentProfilePage:e?.showBookStudentProfilePage??!0,showBookAcademicJourneyPage:e?.showBookAcademicJourneyPage??!0,showBookSummaryPage:e?.showBookSummaryPage??!0,showBookBackCover:e?.showBookBackCover??!0,bookTitleLabel:e?.bookTitleLabel||"Cumulative Academic Report Book",bookSubtitleLabel:e?.bookSubtitleLabel||"Complete Academic Journey",showGeneratedDate:e?.showGeneratedDate??!0,generatedDateLabel:e?.generatedDateLabel||"Generated"}},[tr,tt,tS,R]),tC=(0,n.useMemo)(()=>eG(e3,eK(tr,"cumulative_transcript",R))||eW(e3,"cumulative_transcript")||{name:"Cumulative Transcript Classic",code:"cumulative_transcript_classic",layoutKey:"cumulative_transcript_classic",templateKey:"cumulative_transcript_classic",reportType:"cumulative_transcript",paperSize:"A4",orientation:"portrait",density:"compact",active:!0,isDefault:!0},[tr,e3,R]),tA=(0,n.useMemo)(()=>eH(tt,eK(tr,"cumulative_transcript",R),tC,"cumulative_transcript")||{templateCode:"cumulative_transcript_classic",layoutKey:"cumulative_transcript_classic",templateKey:"cumulative_transcript_classic",templateName:"Cumulative Transcript Classic",reportType:"cumulative_transcript",paperSize:"A4",orientation:"portrait",density:"compact",showAdmissionNumber:!0,showGender:!0,showClass:!0,showAcademicStructure:!0,showAcademicPeriod:!0,showBranch:!0,showTranscriptTermBreakdown:!0,showTranscriptYearAverage:!0,showTranscriptCumulativeAverage:!0,showTranscriptCumulativePosition:!0,showTranscriptGPAProgression:!0,showTranscriptFinalRecommendation:!0,showGeneratedDate:!0,studentNameLabel:"Student",admissionNumberLabel:"Student ID",classLabel:"Programme / Class",academicPeriodLabel:"Academic Period",subjectLabel:"Course / Subject",averageLabel:"Average",gradeLabel:"Grade",gpaLabel:"GPA",generatedDateLabel:"Date Generated",footerText:"Official cumulative academic transcript generated by Eleeveon Schools."},[tr,tt,tC,R]),tP=(0,n.useMemo)(()=>tf.studentTranscript?tf.studentTranscript:H.studentId?(0,eh.Wy)(tg,{...H,mode:"student-transcript"},H.studentId):void 0,[tg,H,tf.studentTranscript]),tN=(0,n.useMemo)(()=>{let e=tf.cumulativeTranscriptDataset;return e?.transcript&&e?.student?e:{...e||{},header:tf.header,transcript:tP,generatedAt:e?.generatedAt||new Date().toISOString(),student:tP?{studentId:tP.studentId,studentName:tP.studentName,admissionNumber:tP.admissionNumber,gender:tP.gender,currentClassName:tP.currentClassName,studentPhoto:tP.studentPhoto,parentName:tP.parentName,guardianName:tP.guardianName}:void 0,summary:tP?{totalPeriods:tP.totalPeriods,totalSubjects:tP.totalSubjects,cumulativeTotal:tP.cumulativeTotal,cumulativeAverage:tP.cumulativeAverage,cumulativeGPA:tP.cumulativeGPA,cumulativePosition:tP.latestPosition,highestAverage:tP.highestAverage,lowestAverage:tP.lowestAverage,latestAverage:tP.latestAverage,latestPosition:tP.latestPosition,latestDecision:tP.latestDecision,overallTrend:tP.overallTrend}:void 0}},[tf,tP]),tz=(0,n.useMemo)(()=>{let e=e9.filter(e=>(!!H.includeDeletedSnapshots||!e.isDeleted)&&(!D||!!eT(e.schoolId,D))&&(!R||!!eT(e.branchId,R))&&(!H.academicStructureId||!!eT(e.academicStructureId,H.academicStructureId))&&(!H.academicPeriodId||!!eT(e.academicPeriodId,H.academicPeriodId))&&(!H.classId||!!eT(e.classId,H.classId))&&(!H.studentId||!!eT(e.studentId,H.studentId))&&("all"===H.snapshotType||e.snapshotType===H.snapshotType)&&("manual"!==e.snapshotType||!1!==H.includeManualSnapshots)&&("terminal"!==e.snapshotType||!1!==H.includeTerminalSnapshots)&&("promotion"!==e.snapshotType||!1!==H.includePromotionRecords)&&!0).sort((e,t)=>{let a=String(e.academicYear||"").localeCompare(String(t.academicYear||""));return 0!==a?a:String(e.academicPeriodId||"").localeCompare(String(t.academicPeriodId||""))}).map(e=>{var t;let a,r,i,o,n,s,d,l,c,p,u,m,b=ea.find(t=>eT(t.id,e.academicPeriodId)),g=ei.find(t=>eT(t.id,e.studentId)),h=(t=tf.header,r=(a=e.reportData||{}).dataset||a.reportCardDataset||a.studentReportDataset||a,i=r?.report||r||{},o=r?.header||{},n=t||{},s=o?.branding||{},l=eC((d=n?.branding||{}).logo,d.resolvedLogoUrl,n.schoolBranchSetting?.logo,n.branch?.logo,n.school?.logo,s.logo,s.resolvedLogoUrl,o.schoolBranchSetting?.logo,o.branch?.logo,o.school?.logo),c=eC(d.reportCardBackgroundImage,n.schoolBranchSetting?.reportCardBackgroundImage,s.reportCardBackgroundImage,o.schoolBranchSetting?.reportCardBackgroundImage),p=eC(d.reportCardWatermark,n.schoolBranchSetting?.reportCardWatermark,s.reportCardWatermark,o.schoolBranchSetting?.reportCardWatermark,l),u=eC(d.reportCardSignatureImage,n.schoolBranchSetting?.reportCardSignatureImage,s.reportCardSignatureImage,o.schoolBranchSetting?.reportCardSignatureImage),m=eC(g?.resolvedStudentPhotoUrl,g?.photo,g?.studentPhoto,r?.studentInfo?.studentPhoto,r?.studentInfo?.photo,r?.student?.resolvedStudentPhotoUrl,r?.student?.studentPhoto,r?.student?.photo,i?.resolvedStudentPhotoUrl,i?.studentPhoto),{...r,generatedAt:r?.generatedAt||e.createdAt||new Date().toISOString(),header:{...n,...o,school:n.school||o.school,branch:n.branch||o.branch,schoolBranchSetting:n.schoolBranchSetting||o.schoolBranchSetting,branding:{...s,...d,logo:l,resolvedLogoUrl:l,reportCardBackgroundImage:c,reportCardWatermark:p,reportCardSignatureImage:u}},branding:{...r?.branding||{},...d,logo:l,resolvedLogoUrl:l,reportCardBackgroundImage:c,reportCardWatermark:p,reportCardSignatureImage:u},report:{...i,studentId:i?.studentId||e.studentId,studentPhoto:m,resolvedStudentPhotoUrl:m},student:{...g||{},...r?.student||{},id:r?.student?.id||g?.id||e.studentId,name:r?.student?.name||r?.student?.fullName||g?.fullName||i?.studentName,fullName:r?.student?.fullName||r?.student?.name||g?.fullName||i?.studentName,admissionNumber:r?.student?.admissionNumber||g?.admissionNumber||i?.admissionNumber,gender:r?.student?.gender||g?.gender||i?.gender,photo:m,studentPhoto:m,resolvedStudentPhotoUrl:m},studentInfo:{...r?.studentInfo||{},studentPhoto:m,photo:m}}),x=h?.report||{};return{id:e.id,academicPeriodId:e.academicPeriodId,academicPeriodName:b?.name||e.term||h?.header?.academicPeriod?.name||"Academic Period",academicYear:e.academicYear,term:e.term,startDate:b?.startDate,endDate:b?.endDate,dataset:h,total:e.total??x.total,average:e.average??x.average,position:e.position??x.overallPosition??x.position,gpa:x.overallGPA??x.gpa,recommendation:e.recommendation}});return{generatedAt:new Date().toISOString(),title:tk.bookTitleLabel||"Cumulative Academic Report Book",subtitle:tk.bookSubtitleLabel||"Complete Academic Journey",header:tf.header,branding:tf.header.branding,student:{id:tP?.studentId||tv?.id,fullName:tP?.studentName||tv?.fullName,name:tP?.studentName||tv?.fullName,admissionNumber:tP?.admissionNumber||tv?.admissionNumber,gender:tP?.gender||tv?.gender,className:tP?.currentClassName,currentClassName:tP?.currentClassName,photo:tP?.studentPhoto||tv?.resolvedStudentPhotoUrl||tv?.photo||e[0]?.dataset?.studentInfo?.studentPhoto||e[0]?.dataset?.report?.studentPhoto,studentPhoto:tP?.studentPhoto||tv?.resolvedStudentPhotoUrl||tv?.photo||e[0]?.dataset?.studentInfo?.studentPhoto||e[0]?.dataset?.report?.studentPhoto,parentName:tP?.parentName||tv?.parentName,address:tv?.address,parentPhone:tv?.parentPhone,parentEmail:tv?.parentEmail},periods:e,summary:{totalPeriods:tP?.totalPeriods||e.length,cumulativeAverage:tP?.cumulativeAverage,cumulativeGPA:tP?.cumulativeGPA,bestAverage:tP?.highestAverage,latestAverage:tP?.latestAverage,latestPosition:tP?.latestPosition,finalRecommendation:tP?.latestDecision,trend:tP?.overallTrend},notes:tf.warnings}},[ea,R,H,tf.header,tf.warnings,D,tv,tk,e9,tP]),tM=e=>{"function"==typeof e?Y(t=>({...e(t),branchId:R||""})):Y({...e,branchId:R||""})},tT=(0,n.useMemo)(()=>[H.academicStructureId,H.academicPeriodId,H.fromAcademicPeriodId,H.toAcademicPeriodId,H.classId,H.studentId,H.subjectId,"all"!==H.snapshotType?H.snapshotType:void 0,"all"!==H.decision?H.decision:void 0,"student-transcript"!==String(H.mode)?H.mode:void 0,"position"!==H.sortMode?H.sortMode:void 0,"academic-structure"!==H.groupingMode?H.groupingMode:void 0,"average"!==H.subjectAggregationMode?H.subjectAggregationMode:void 0,!H.includePromotionRecords?"promotion-off":void 0,!H.includeManualSnapshots?"manual-off":void 0,!H.includeTerminalSnapshots?"terminal-off":void 0,H.includeDeletedSnapshots?"deleted-on":void 0].filter(Boolean).length,[H]),tB=$.trim().toLowerCase(),tD=(0,n.useMemo)(()=>tB?ei.filter(e=>`${e.fullName||""} ${e.admissionNumber||""}`.toLowerCase().includes(tB)):ei,[ei,tB]),tR=(0,n.useMemo)(()=>{let e=new Set(e9.map(e=>eM(e.academicStructureId)).filter(Boolean)),t=ee.filter(t=>!t.isDeleted&&(!1!==t.active||e.has(eM(t.id))));return t.length?t:Array.from(e).map(e=>({id:e,name:`Academic Structure ${e}`,schoolId:D,branchId:R,accountId:h||void 0,active:!0}))},[ee,e9,D,R,h]),tL=(0,n.useMemo)(()=>{let e=new Set(e9.filter(e=>!H.academicStructureId||eT(e.academicStructureId,H.academicStructureId)).map(e=>eM(e.academicPeriodId)).filter(Boolean)),t=ea.filter(t=>!t.isDeleted&&(!H.academicStructureId||!!eT(t.academicStructureId,H.academicStructureId))&&(!1!==t.active||e.has(eM(t.id)))).sort((e,t)=>Number(e.order||0)-Number(t.order||0));return t.length?t:Array.from(e).map((e,t)=>({id:e,name:`Academic Period ${e}`,schoolId:D,branchId:R,accountId:h||void 0,academicStructureId:H.academicStructureId||0,order:t+1,active:!0}))},[ea,e9,H.academicStructureId,D,R,h]),t_=(0,n.useMemo)(()=>{let e=new Set(e9.filter(e=>(!H.academicStructureId||!!eT(e.academicStructureId,H.academicStructureId))&&(!H.academicPeriodId||!!eT(e.academicPeriodId,H.academicPeriodId))).map(e=>eM(e.classId)).filter(Boolean)),t=e1.filter(t=>!t.isDeleted&&(!1!==t.active||e.has(eM(t.id))));return t.length?t:Array.from(e).map(e=>({id:e,name:`Class ${e}`,schoolId:D,branchId:R,accountId:h||void 0,active:!0}))},[e1,e9,H.academicStructureId,H.academicPeriodId,D,R,h]),tE=(0,n.useMemo)(()=>{let e=new Set(e9.filter(e=>(!H.academicStructureId||!!eT(e.academicStructureId,H.academicStructureId))&&(!H.academicPeriodId||!!eT(e.academicPeriodId,H.academicPeriodId))&&(!H.classId||!!eT(e.classId,H.classId))).map(e=>eM(e.studentId)).filter(Boolean)),t=tD.filter(t=>!t.isDeleted&&("withdrawn"!==t.status||e.has(eM(t.id))));return t.length?t:Array.from(e).map(e=>({id:e,fullName:`Student ${e}`,schoolId:D,branchId:R,accountId:h||void 0,status:"active"}))},[tD,e9,H.academicStructureId,H.academicPeriodId,H.classId,D,R,h]),tO=(0,n.useMemo)(()=>{if(e4.length)return e4;let e=new Map;return e9.forEach(t=>{let a=t.reportData||{},r=a.report||a.studentReport||a.computedReport||a.computedStudentReport||a,i=r.subjectResults||r.subjects||r.reportItems||a.subjectResults||a.subjects||a.reportItems||[];Array.isArray(i)&&i.forEach(t=>{let a=eM(t.subjectId||t.id);!a||e.has(a)||e.set(a,{id:a,name:t.subjectName||t.name||t.title||t.shortName||`Subject ${a}`,code:t.subjectCode||t.code,schoolId:D,branchId:R,accountId:h||void 0,active:!0})})}),Array.from(e.values()).sort((e,t)=>e.name.localeCompare(t.name))},[e4,e9,D,R,h]),t$=ez(tR,H.academicStructureId),tU=ez(tL,H.academicPeriodId),tF=ez(tE,H.studentId),tW=ez(t_,H.classId),tK=ez(tO,H.subjectId),tG=eN[H.mode]||H.mode.replaceAll("-"," "),tH=()=>{var e,t;let a,r,i;e="cumulative-report-print-zone",t="annual-broadsheet"===(a=H.mode)||"subject-history"===a||"promotion-summary"===a?"landscape":"portrait",(r=document.getElementById("cumulative-report-print-style"))&&r.remove(),(i=document.createElement("style")).id="cumulative-report-print-style",i.innerHTML=`
    @page {
      size: A4 ${t};
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
  `,document.head.appendChild(i),setTimeout(()=>window.print(),120)};return f||k||y||L?(0,r.jsx)(eY,{primary:M,title:"Opening My Cumulative Records...",text:"Checking your historical reports, promotions and academic progression."}):x&&h?z?N||0!==ei.length?D&&R?(0,r.jsxs)("main",{className:"ba-page cumulative-page",style:{"--ba-primary":M},children:[(0,r.jsx)("style",{children:eQ}),(0,r.jsxs)("section",{className:"ba-search-card report-no-print","aria-label":"My cumulative records search and actions",children:[(0,r.jsxs)("label",{className:"ba-search",children:[(0,r.jsx)("span",{children:"⌕"}),(0,r.jsx)("input",{value:$,onChange:e=>U(e.target.value),placeholder:"Search my cumulative records...","aria-label":"Search my cumulative records"})]}),(0,r.jsx)("button",{type:"button",className:"ba-add-inline",onClick:tH,"aria-label":"Print cumulative record",title:"Print",children:"⎙"}),(0,r.jsxs)("button",{type:"button",className:`ba-filter-button ${tT?"active":""}`,onClick:()=>W(!0),"aria-label":"Open cumulative filters",title:"Filters",children:[(0,r.jsx)(eq,{}),tT?(0,r.jsx)("b",{children:tT}):null]}),(0,r.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>G(!0),"aria-label":"More options",children:"⋯"})]}),tT>0&&(0,r.jsxs)("section",{className:"ba-filter-chips report-no-print","aria-label":"Active cumulative filters",children:["student-transcript"!==String(H.mode)&&(0,r.jsxs)("button",{type:"button",onClick:()=>tM(e=>({...e,mode:"student-transcript"})),children:["Mode: ",tG," \xd7"]}),H.academicStructureId&&(0,r.jsxs)("button",{type:"button",onClick:()=>tM(e=>({...e,academicStructureId:void 0})),children:["Structure: ",t$," \xd7"]}),H.academicPeriodId&&(0,r.jsxs)("button",{type:"button",onClick:()=>tM(e=>({...e,academicPeriodId:void 0})),children:["Period: ",tU," \xd7"]}),H.classId&&(0,r.jsxs)("button",{type:"button",onClick:()=>tM(e=>({...e,classId:void 0})),children:["Class: ",tW," \xd7"]}),H.subjectId&&(0,r.jsxs)("button",{type:"button",onClick:()=>tM(e=>({...e,subjectId:void 0})),children:["Subject: ",tK," \xd7"]})]}),(0,r.jsxs)("section",{className:"ba-print-card",children:[(0,r.jsxs)("div",{className:"ba-print-head report-no-print",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:tG}),(0,r.jsxs)("p",{children:[t$," \xb7 ",tU,H.studentId?` \xb7 ${tF}`:""]})]}),(0,r.jsxs)("div",{className:"ba-report-toolbar",children:[(0,r.jsxs)("div",{className:"ba-output-switch",role:"group","aria-label":"Choose cumulative record output",children:[(0,r.jsx)("button",{type:"button",className:"student-transcript"===H.mode?"active":"",onClick:()=>tM(e=>({...e,mode:"student-transcript"})),title:"View cumulative transcript",children:"Transcript"}),(0,r.jsx)("button",{type:"button",className:"cumulative-book"===String(H.mode)?"active":"",onClick:()=>tM(e=>({...e,mode:"cumulative-book"})),title:"View cumulative report book",children:"Book"})]}),(0,r.jsx)("button",{type:"button",className:"primary",onClick:tH,children:"Print"})]})]}),(0,r.jsx)("div",{className:"report-screen-scroll ba-print-zone",children:(0,r.jsx)("div",{id:"cumulative-report-print-zone",children:(()=>{if("cumulative-book"===String(H.mode))return(0,r.jsx)(ed.A,{dataset:tz,template:tS,settings:tk,compact:!0,pageBreakAfter:!1,mobilePreview:!0});if("student-transcript"===H.mode)return(0,r.jsx)(el.A,{dataset:tN,template:tC,settings:tA,compact:!0,pageBreakAfter:!1,mobilePreview:!0});if("multi-period-report"===H.mode){let e;return e=tf.multiPeriodReport,(0,r.jsxs)("section",{className:"print-page report-page-break cumulative-multi-period-page",style:{width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:"11mm",boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:tf.header.branding.fontFamily||"Arial, sans-serif",border:"1px solid #e5e5e5"},children:[(0,r.jsx)(eg.A,{header:tf.header,title:"Multi-Period Academic Report",subtitle:e?`${e.studentName} • ${e.periods.length} Periods`:void 0,orientation:"portrait"}),e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"cr-print-summary-grid",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Student:"})," ",e.studentName]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Class:"})," ",e.className||"-"]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Average:"})," ",eA(e.average,1),"%"]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"GPA:"})," ",null!=e.gpa?eA(e.gpa,2):"-"]})]}),(0,r.jsxs)("table",{style:tw,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{style:{...tj,textAlign:"left"},children:"Subject"}),e.periods.map(e=>(0,r.jsx)("th",{style:tj,children:e.academicPeriodName},e.academicPeriodId)),(0,r.jsx)("th",{style:tj,children:"Average"}),(0,r.jsx)("th",{style:tj,children:"Best"}),(0,r.jsx)("th",{style:tj,children:"Latest"}),(0,r.jsx)("th",{style:tj,children:"Trend"}),(0,r.jsx)("th",{style:tj,children:"Final Grade"})]})}),(0,r.jsxs)("tbody",{children:[e.subjects.map(t=>(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{style:{...tI,fontWeight:800},children:[t.subjectName,t.subjectCode&&(0,r.jsx)("div",{style:{fontSize:8,opacity:.7},children:t.subjectCode})]}),e.periods.map(e=>{let a=t.periodScores.find(t=>t.academicPeriodId===e.academicPeriodId);return(0,r.jsx)("td",{style:{...tI,textAlign:"center"},children:a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("strong",{children:[eA(a.percentage,1),"%"]}),(0,r.jsx)("div",{style:{fontSize:8,opacity:.7},children:a.grade||"-"})]}):"-"},`${t.subjectName}-${e.academicPeriodId}`)}),(0,r.jsxs)("td",{style:{...tI,textAlign:"center",fontWeight:800},children:[eA(t.average,1),"%"]}),(0,r.jsxs)("td",{style:{...tI,textAlign:"center"},children:[eA(t.bestScore,1),"%"]}),(0,r.jsxs)("td",{style:{...tI,textAlign:"center"},children:[eA(t.latestScore,1),"%"]}),(0,r.jsx)("td",{style:{...tI,textAlign:"center"},children:eP(t.trend)}),(0,r.jsx)("td",{style:{...tI,textAlign:"center",fontWeight:800},children:t.finalGrade||"-"})]},t.subjectId||t.subjectName)),!e.subjects.length&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{style:{...tI,textAlign:"center",padding:16},colSpan:e.periods.length+6,children:"No multi-period subject records found."})})]})]}),(0,r.jsx)(eZ,{primary:M,schoolName:tf.header.branding.schoolName,label:"Official multi-period academic report"})]}):(0,r.jsx)("div",{className:"cr-print-empty",children:"Select a student with multiple historical snapshots to generate a multi-period report."})]})}if("annual-broadsheet"===H.mode)return(0,r.jsx)(eu.A,{header:tf.header,broadsheet:tf.annualBroadsheet,pageBreakAfter:!1});if("subject-history"===H.mode){let e;return e=tf.subjectHistory,(0,r.jsxs)("section",{className:"print-page report-page-break cumulative-subject-history-page",style:ty,children:[(0,r.jsx)(eg.A,{header:tf.header,title:"Subject Longitudinal Analytics",subtitle:e?`${e.subjectName} • ${e.totalStudents} Students • ${e.totalPeriods} Periods`:void 0,orientation:"landscape"}),e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"cr-print-summary-grid six",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Subject:"})," ",e.subjectName]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Students:"})," ",e.totalStudents]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Periods:"})," ",e.totalPeriods]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Average:"})," ",eA(e.subjectAverage,1),"%"]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Improving:"})," ",e.improvingCount]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Declining:"})," ",e.decliningCount]})]}),(0,r.jsxs)("table",{style:tw,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{style:tj,children:"#"}),(0,r.jsx)("th",{style:{...tj,textAlign:"left",minWidth:180},children:"Student"}),(0,r.jsx)("th",{style:tj,children:"Class"}),(0,r.jsx)("th",{style:tj,children:"Periods"}),(0,r.jsx)("th",{style:tj,children:"Average"}),(0,r.jsx)("th",{style:tj,children:"Highest"}),(0,r.jsx)("th",{style:tj,children:"Lowest"}),(0,r.jsx)("th",{style:tj,children:"Latest"}),(0,r.jsx)("th",{style:tj,children:"Trend"})]})}),(0,r.jsxs)("tbody",{children:[e.students.map((e,t)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{style:{...tI,textAlign:"center"},children:t+1}),(0,r.jsxs)("td",{style:{...tI,fontWeight:800},children:[e.studentName,e.admissionNumber&&(0,r.jsx)("div",{style:{fontSize:8,opacity:.7},children:e.admissionNumber})]}),(0,r.jsx)("td",{style:{...tI,textAlign:"center"},children:e.className||"-"}),(0,r.jsx)("td",{style:{...tI,textAlign:"center"},children:e.periods.length}),(0,r.jsxs)("td",{style:{...tI,textAlign:"center",fontWeight:800},children:[eA(e.average,1),"%"]}),(0,r.jsxs)("td",{style:{...tI,textAlign:"center"},children:[eA(e.highest,1),"%"]}),(0,r.jsxs)("td",{style:{...tI,textAlign:"center"},children:[eA(e.lowest,1),"%"]}),(0,r.jsx)("td",{style:{...tI,textAlign:"center"},children:null!=e.latest?`${eA(e.latest,1)}%`:"-"}),(0,r.jsx)("td",{style:{...tI,textAlign:"center",fontWeight:800},children:eP(e.trend)})]},e.studentId)),!e.students.length&&(0,r.jsx)("tr",{children:(0,r.jsx)("td",{style:{...tI,textAlign:"center",padding:16},colSpan:9,children:"No subject history records found."})})]})]}),(0,r.jsx)(eZ,{primary:M,schoolName:tf.header.branding.schoolName,label:"Official subject history"})]}):(0,r.jsx)("div",{className:"cr-print-empty",children:"Select a subject to generate longitudinal subject analytics."})]})}return"promotion-summary"===H.mode?(0,r.jsx)(em.A,{header:tf.header,summary:tf.promotionSummary,pageBreakAfter:!1}):(0,r.jsx)(eb.A,{header:tf.header,steps:tf.progressionTimeline,studentName:tv?.fullName||tf.studentTranscript?.studentName,pageBreakAfter:!1})})()})})]}),F&&(0,r.jsx)(eJ,{filters:H,setBranchLockedFilters:tM,academicStructures:tR,academicPeriods:tL,classes:t_,students:tE,subjects:tO,onClose:()=>W(!1)}),K&&(0,r.jsx)(eV,{mode:H.mode,setMode:e=>{tM(t=>({...t,mode:e})),G(!1)},onRefresh:async()=>{G(!1),await tm()},onPrint:()=>{G(!1),tH()},onClose:()=>G(!1)})]}):(0,r.jsxs)("main",{className:"ba-page cumulative-page",style:{"--ba-primary":M},children:[(0,r.jsx)("style",{children:eQ}),(0,r.jsxs)("section",{className:"ba-state",children:[(0,r.jsx)("h2",{children:"Student workspace unavailable"}),(0,r.jsx)("p",{children:"Your cumulative records require an active school and branch workspace."}),(0,r.jsx)("button",{type:"button",className:"ba-state-button",onClick:()=>g.push("/student"),children:"Return to Student Home"})]})]}):(0,r.jsx)(eY,{primary:M,title:"Student profile not linked",text:"The active student membership needs a studentId, studentLocalId, or matching student contact."}):(0,r.jsx)(eY,{primary:M,title:"Student access required",text:"Open this page from an active student-role workspace."}):(0,r.jsx)(eY,{primary:M,title:"Redirecting to login...",text:"You must sign in before viewing your cumulative records."})},myReport:function(){var e,t;let a,i,o,m,b=(0,_.p)(),g=(0,s.useRouter)(),{accountId:h,loading:x,authenticated:f}=(0,d.F)(),{settings:v,loading:y}=(0,l.t)(),{activeSchool:w,activeSchoolId:j,activeBranch:I,activeBranchId:S,loading:k}=(0,c.c)(),{activeMembership:C}=(0,p.A)(),A=(0,n.useMemo)(()=>Q("eleeveon_open_workspace"),[]),P=(0,n.useMemo)(()=>A?.membership||C||X()||{},[C,A?.membership]),N=ee(P?.studentId,P?.studentLocalId,P?.student?.id,A?.studentId,Z("activeStudentId")),z="student"===String(P?.role||A?.role||"").toLowerCase(),M=(e={openWorkspace:A,activeMembership:C,activeSchoolId:j,activeSchool:w,settings:v},a=X(),i=e.openWorkspace?.membership||e.activeMembership||a||null,ee(e.openWorkspace?.schoolId,i?.schoolId,i?.school?.id,e.activeSchoolId,e.activeSchool?.id,e.settings?.schoolId,Z("activeSchoolId"))),B=(t={openWorkspace:A,activeMembership:C,activeBranchId:S,activeBranch:I,settings:v},o=X(),m=t.openWorkspace?.membership||t.activeMembership||o||null,ee(t.openWorkspace?.branchId,m?.branchId,m?.schoolBranchId,m?.branch?.id,t.activeBranchId,t.activeBranch?.id,t.settings?.branchId,Z("activeBranchId"))),ed=v?.primaryColor||"var(--primary-color, #2563eb)",el=V(v?.currentAcademicStructureId)||void 0,ec=V(v?.currentAcademicPeriodId)||void 0,{loading:ep,setLoading:eu}=(0,E.J)(),[em,eb]=(0,n.useState)("student-report"),[eg,eh]=(0,n.useState)(""),[ex,ef]=(0,n.useState)(!1),[ev,ey]=(0,n.useState)(!1),[ew,ej]=(0,n.useState)({branchId:B||void 0,academicStructureId:el,academicPeriodId:ec,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"}),[eI,eS]=(0,n.useState)([]),[ek,eC]=(0,n.useState)([]),[eA,eP]=(0,n.useState)([]),[eN,ez]=(0,n.useState)([]),[eM,eT]=(0,n.useState)([]),[eB,eD]=(0,n.useState)([]),[eR,eL]=(0,n.useState)([]),[e_,eE]=(0,n.useState)([]),[eO,e$]=(0,n.useState)([]),[eU,eF]=(0,n.useState)([]),[eW,eK]=(0,n.useState)([]),[eG,eH]=(0,n.useState)([]),[eY,eq]=(0,n.useState)([]),[eJ,eV]=(0,n.useState)([]),[eZ,eQ]=(0,n.useState)([]),[eX,e0]=(0,n.useState)([]),[e1,e2]=(0,n.useState)([]),[e4,e8]=(0,n.useState)([]),[e9,e6]=(0,n.useState)([]),[e7,e5]=(0,n.useState)([]),[e3,te]=(0,n.useState)([]),[tt,ta]=(0,n.useState)([]),[tr,ti]=(0,n.useState)([]),[to,tn]=(0,n.useState)([]),[ts,td]=(0,n.useState)([]),[tl,tc]=(0,n.useState)([]),[tp,tu]=(0,n.useState)([]),[tm,tb]=(0,n.useState)([]),[tg,th]=(0,n.useState)([]);(0,n.useEffect)(()=>{if(!x&&!k&&(!f||!h))return void g.replace("/login")},[x,k,f,h,M,B,g]),(0,n.useEffect)(()=>()=>{tg.forEach(T.hZ)},[tg]);let tx=()=>{tg.forEach(T.hZ),th([]),eS([]),eC([]),eP([]),ez([]),eT([]),eD([]),eL([]),eE([]),e$([]),eF([]),eK([]),eH([]),eq([]),eV([]),eQ([]),e0([]),e2([]),e8([]),e6([]),e5([]),te([]),ta([]),ti([]),tn([]),td([]),tc([]),tu([]),tb([])},tf=async({ownerTable:e,ownerId:t,fieldKey:a,fallbackMediaId:r,nextUrls:i})=>{let o=V(t);if(o){let t=await (0,T.cg)({accountId:h||void 0,ownerTable:e,ownerId:o,fieldKey:a});if(t?.id&&!t.isDeleted&&!1!==t.active){let e=await (0,T.fW)(String(t.id));if(e)return i.push(e),e}}let n=V(r);if(!n)return"";let s=await u.db.mediaAssets?.get?.(n);if(!(s&&!s.isDeleted&&!1!==s.active&&(!h||s.accountId===h)&&s.ownerTable===e&&s.fieldKey===a&&(!o||String(s.ownerId||"")===String(o))))return"";let d=await (0,T.fW)(n);return d&&i.push(d),d||""},tv=async()=>{if(!f||!h||!M||!B||!z){tx(),eu(!1);return}try{eu(!0);let[e,t,a,r,i,o,n,s,d,l,c,p,m,b,g,x,f,v,y,j,S,k,C,A,z,D,R,L]=await Promise.all([u.db.schools.toArray(),u.db.branches.toArray(),u.db.schoolBranchSettings.toArray(),u.db.academicStructures.toArray(),u.db.academicPeriods.toArray(),u.db.students.toArray(),u.db.parents.toArray(),u.db.teachers.toArray(),u.db.classes.toArray(),u.db.subjects.toArray(),u.db.classSubjects.toArray(),u.db.classTeachers.toArray(),u.db.studentEnrollments.toArray(),u.db.studentParents.toArray(),u.db.assessmentApplicabilities.toArray(),u.db.assessmentStructures.toArray(),u.db.assessmentStructureItems.toArray(),u.db.assessmentEntries.toArray(),u.db.gradingStructures.toArray(),u.db.gradeRules.toArray(),u.db.attendance.toArray(),u.db.studentAttendanceSummaries?.toArray?.()||[],u.db.computedResults.toArray(),u.db.reportCards.toArray(),u.db.reportCardItems.toArray(),u.db.reportCardTemplates?.toArray?.()||[],u.db.reportCardTemplateSettings?.toArray?.()||[],u.db.reportCardTemplateAssignments?.toArray?.()||[]]),_=e=>V(e.accountId)===V(h)&&V(e.schoolId)===M&&V(e.branchId)===B&&!e.isDeleted,E=e.find(e=>V(e.accountId)===V(h)&&V(e.id)===M&&!e.isDeleted)||(V(w?.accountId)===V(h)&&V(w?.id)===M?w:void 0),O=t.find(e=>V(e.accountId)===V(h)&&V(e.schoolId)===M&&V(e.id)===B&&!e.isDeleted)||(V(I?.accountId)===V(h)&&V(I?.schoolId)===M&&V(I?.id)===B?I:void 0),U=i.filter(_),F=A.filter(_),Z=a.filter(_);Z[0];let Q=D.filter(e=>!e.isDeleted&&!1!==e.active&&!!$(e)&&(!e.accountId||e.accountId===h)&&(!e.schoolId||String(e.schoolId??"")===String(M??""))&&(!e.branchId||String(e.branchId??"")===String(B??""))).sort((e,t)=>e.isDefault&&!t.isDefault?-1:!e.isDefault&&t.isDefault?1:String(e.name||"").localeCompare(String(t.name||""))),X=R.filter(e=>!e.isDeleted&&!1!==e.active&&!!$(e)&&(!e.accountId||e.accountId===h)&&(!e.schoolId||String(e.schoolId??"")===String(M??""))&&(!e.branchId||String(e.branchId??"")===String(B??""))),et=L.filter(e=>!e.isDeleted&&!1!==e.active&&!!$(e)&&(!e.accountId||e.accountId===h)&&(!e.schoolId||String(e.schoolId??"")===String(M??""))&&(!e.branchId||String(e.branchId??"")===String(B??""))),ea=[],er=E?{...E,logo:await tf({ownerTable:K,ownerId:E.id,fieldKey:q,fallbackMediaId:E.logoMediaId,nextUrls:ea})||J(E,"logo","logoMediaId")}:void 0,ei=O?{...O,logo:await tf({ownerTable:G,ownerId:O.id,fieldKey:q,fallbackMediaId:O.logoMediaId,nextUrls:ea})||J(O,"logo","logoMediaId")}:void 0,eo=await Promise.all(Z.map(async e=>({...e,logo:await tf({ownerTable:H,ownerId:e.id,fieldKey:q,fallbackMediaId:e.logoMediaId,nextUrls:ea})||J(e,"logo","logoMediaId"),reportCardBackgroundImage:await tf({ownerTable:H,ownerId:e.id,fieldKey:"reportCardBackgroundImage",fallbackMediaId:e.reportCardBackgroundImageMediaId,nextUrls:ea})||J(e,"reportCardBackgroundImage","reportCardBackgroundImageMediaId"),reportCardWatermark:await tf({ownerTable:H,ownerId:e.id,fieldKey:"reportCardWatermark",fallbackMediaId:e.reportCardWatermarkMediaId,nextUrls:ea})||J(e,"reportCardWatermark","reportCardWatermarkMediaId"),reportCardSignatureImage:await tf({ownerTable:H,ownerId:e.id,fieldKey:"reportCardSignatureImage",fallbackMediaId:e.reportCardSignatureImageMediaId,nextUrls:ea})||J(e,"reportCardSignatureImage","reportCardSignatureImageMediaId")}))),en=await Promise.all(o.filter(_).map(async e=>({...e,photo:await tf({ownerTable:W,ownerId:e.id,fieldKey:Y,fallbackMediaId:e.photoMediaId,nextUrls:ea})||J(e,"photo","photoMediaId")}))),es=new Set(U.map(e=>V(e.id)).filter(Boolean));tg.forEach(e=>{ea.includes(e)||(0,T.hZ)(e)}),th(ea);let ed=n.filter(_),el=b.filter(_),ec=String(P?.email||P?.user?.email||"").trim().toLowerCase(),ep=String(P?.phone||P?.user?.phone||"").replace(/\s+/g,""),em=en.find(e=>N&&V(e.id)===N)||en.find(e=>{let t=String(e.email||"").trim().toLowerCase(),a=String(e.phone||"").replace(/\s+/g,"");return ec&&t===ec||ep&&a===ep}),eb=ee(N,em?.id),eg=new Set(eb?[eb]:[]),eh=new Set(F.filter(e=>eg.has(V(e.studentId))).map(e=>V(e.id)).filter(Boolean)),ex=en.filter(e=>eg.has(V(e.id))),ef=e=>eg.has(V(e.studentId)),ev=el.filter(e=>eg.has(V(e.studentId))),ey=new Set(ev.map(e=>V(e.parentId)).filter(Boolean)),ew=ed.filter(e=>ey.has(V(e.id)));eS(er?[er]:[]),eC(ei?[ei]:[]),eP(eo),ez(r.filter(_)),eT(U),eD(ex),ej(e=>({...e,studentId:eb||void 0})),eE(ew),eL(s.filter(_)),eF(d.filter(e=>_(e)&&!1!==e.active)),eK(l.filter(e=>_(e)&&!1!==e.active)),eH(c.filter(e=>_(e)&&!1!==e.active)),eV(ev),eq(m.filter(e=>_(e)&&ef(e))),e$(p.filter(_)),eQ(g.filter(e=>_(e)&&!1!==e.active)),e0(x.filter(e=>_(e)&&!1!==e.active)),e2(f.filter(e=>_(e)&&!1!==e.active)),e8(v.filter(e=>_(e)&&ef(e))),e6(y.filter(e=>_(e)&&!1!==e.active)),e5(j.filter(e=>_(e)&&!1!==e.active)),te(S.filter(e=>_(e)&&ef(e))),ta(k.filter(e=>_(e)&&ef(e))),ti(C.filter(e=>_(e)&&ef(e))),tn(F.filter(ef)),td(z.filter(e=>!!_(e)&&(!e.reportCardId||!!eh.has(V(e.reportCardId)))&&(!e.academicPeriodId||!!es.has(V(e.academicPeriodId))))),tc(Q),tu(X),tb(et)}catch(e){console.error("Failed to load report data:",e),tx()}finally{eu(!1)}};(0,n.useEffect)(()=>{tv()},[f,h,M,B,b,z]),(0,n.useEffect)(()=>{ej(e=>{let t=B||void 0,a=e.branchId!==t;return{...e,branchId:t,academicStructureId:a?el:e.academicStructureId||el,academicPeriodId:a?ec:e.academicPeriodId||ec,classId:a?void 0:e.classId,classSubjectId:a?void 0:e.classSubjectId,studentId:a?void 0:e.studentId}})},[B,el,ec]),(0,n.useEffect)(()=>{if(!ew.academicStructureId){let e=el||U(eN);e&&ej(t=>({...t,academicStructureId:e}))}},[ew.academicStructureId,el,eN]),(0,n.useEffect)(()=>{if(!ew.academicPeriodId){let e=ec||U(eM);e&&ej(t=>({...t,academicPeriodId:e}))}},[ew.academicPeriodId,ec,eM]);let ty=(0,n.useMemo)(()=>I&&V(I.id)===B?[I]:ek,[I,B,ek]),tw=(0,n.useMemo)(()=>{let e=new Set;return(eY.forEach(t=>{"active"!==t.status||ew.academicStructureId&&t.academicStructureId!==ew.academicStructureId||ew.academicPeriodId&&t.academicPeriodId!==ew.academicPeriodId||e.add(V(t.classId))}),eG.forEach(t=>{!1===t.active||ew.academicStructureId&&t.academicStructureId!==ew.academicStructureId||ew.academicPeriodId&&t.academicPeriodId&&t.academicPeriodId!==ew.academicPeriodId||e.add(V(t.classId))}),ew.academicStructureId||ew.academicPeriodId)?eU.filter(t=>!!V(t.id)&&e.has(V(t.id))):eU},[eU,eY,eG,ew.academicStructureId,ew.academicPeriodId]),tj=(0,n.useMemo)(()=>eG.filter(e=>(!ew.classId||e.classId===ew.classId)&&(!ew.academicStructureId||e.academicStructureId===ew.academicStructureId)&&(!ew.academicPeriodId||!e.academicPeriodId||e.academicPeriodId===ew.academicPeriodId)),[eG,ew.classId,ew.academicStructureId,ew.academicPeriodId]),tI=(0,n.useMemo)(()=>{if(!ew.classId&&!ew.academicPeriodId)return eB;let e=new Set(eY.filter(e=>"active"===e.status&&(!ew.classId||e.classId===ew.classId)&&(!ew.academicStructureId||e.academicStructureId===ew.academicStructureId)&&(!ew.academicPeriodId||e.academicPeriodId===ew.academicPeriodId)).map(e=>V(e.studentId)).filter(Boolean));return eB.filter(t=>!!V(t.id)&&e.has(V(t.id)))},[eB,eY,ew.classId,ew.academicStructureId,ew.academicPeriodId]);(0,n.useEffect)(()=>{ew.studentId||0===tI.length||ej(e=>({...e,studentId:V(tI[0]?.id)||void 0,classId:e.classId||V(eY.find(e=>V(e.studentId)===V(tI[0]?.id)&&["active","promoted"].includes(String(e.status||"").toLowerCase()))?.classId)||void 0}))},[tI,ew.studentId,eY]);let tS=(0,n.useMemo)(()=>({schools:eI,branches:ty,schoolBranchSettings:eA,academicStructures:eN,academicPeriods:eM,students:eB,parents:e_,studentParents:eJ,teachers:eR,classes:eU,subjects:eW,classSubjects:eG,studentEnrollments:eY,classTeachers:eO,assessmentApplicabilities:eZ,assessmentStructures:eX,assessmentStructureItems:e1,assessmentEntries:e4,gradingStructures:e9,gradeRules:e7,attendance:e3,studentAttendanceSummaries:tt,computedResults:tr,reportCards:to,reportCardItems:ts}),[eI,ty,eA,eN,eM,eB,e_,eJ,eR,eU,eW,eG,eY,eO,eZ,eX,e1,e4,e9,e7,e3,tt,tr,to,ts]),tk=(0,n.useMemo)(()=>(0,R.EI)(tS,ew),[tS,ew]),tC=!!(eN.length&&eM.length&&eU.length&&eB.length),tA=(0,n.useMemo)(()=>ek.find(e=>V(e.id)===B)||ty.find(e=>V(e.id)===B)||I||ek[0]||ty[0],[I,B,ek,ty]);w?.name||eI[0]?.name,tA?.name||I?.name||ek[0]?.name;let tP=et(eU,ew.classId),tN=et(eM,ew.academicPeriodId),tz=et(eN,ew.academicStructureId),tM=eg.trim().toLowerCase(),tT=(0,n.useMemo)(()=>tM?tI.filter(e=>`${e.fullName||e.name||""} ${e.admissionNumber||""} ${e.gender||""}`.toLowerCase().includes(tM)):tI,[tI,tM]),tB=(0,n.useMemo)(()=>tM?tw.filter(e=>`${e.name||""} ${e.code||""}`.toLowerCase().includes(tM)):tw,[tw,tM]),tD=(0,n.useMemo)(()=>[ew.academicStructureId,ew.academicPeriodId,ew.classId,ew.classSubjectId,ew.studentId,ew.sortMode&&"position"!==ew.sortMode?ew.sortMode:void 0,"student-report"!==em?em:void 0].filter(Boolean).length,[ew.academicStructureId,ew.academicPeriodId,ew.classId,ew.classSubjectId,ew.studentId,ew.sortMode,em]);et(eB,ew.studentId),et(tj.map(e=>{var t;let a;return{id:e.id,name:(t=e,a=eW.find(e=>e.id===t.subjectId),t.name||a?.name||`Subject ${t.subjectId||""}`)}}),ew.classSubjectId),"class-reports"===em?tk.classReports.length:tk.studentReport,tk.warnings.length;let tR=tC&&("class-reports"===em?tk.classReports.length>0:!!tk.studentReport),tL=()=>{tR&&(0,D.f)({targetId:F,mode:"class-reports"===em?"whole-class-reports":"single-student",orientation:"portrait",pageSize:"A4"})},t_=(0,n.useMemo)(()=>{let e=tm.filter(e=>!1!==e.active&&$(e));return e.find(e=>!0===e.isDefault&&(!e.scopeType||"branch"===e.scopeType)&&(!e.scopeId||String(e.scopeId??"")===String(B??"")))||e.find(e=>(!e.scopeType||"branch"===e.scopeType)&&(!e.scopeId||String(e.scopeId??"")===String(B??"")))||e.find(e=>!0===e.isDefault)||e[0]||null},[tm,B]),tE=(0,n.useMemo)(()=>{let e=V(t_?.templateId);return tl.find(t=>e&&V(t.id)===e)||tl.find(e=>e.isDefault)||tl.find(e=>"classic_formal"===String(e.code||""))||tl[0]||(0,L.ed)(null)},[t_,tl]),tO=(0,n.useMemo)(()=>{let e=V(t_?.templateSettingsId),t=V(tE?.id);return tp.find(t=>e&&V(t.id)===e)||tp.find(e=>t&&V(e.templateId)===t)||tp.find(e=>!1!==e.active)||null},[t_,tE,tp]),t$=(0,n.useMemo)(()=>(0,L.tH)({...L.gv,...tO||{}},tE||null,t_||null),[tE,t_,tO]);function tU(e){let t=V(e?.report?.studentId||e?.studentId);if(t)return eB.find(e=>V(e.id)===t)}function tF(e,t){let a;if(!e)return e;let r=t?.name||t?.branchName||t?.campusName||e.branchName||e.branchLabel||e.branch?.name||"",i=tU(e),o=(a=tU(e),a?.resolvedStudentPhotoUrl||a?.photo||e?.report?.resolvedStudentPhotoUrl||e?.report?.studentPhoto||"");return{...e,student:i||e.student,branch:t,branchId:t?.id||e.branchId,branchName:r,branchLabel:r,template:tE,templateSettings:t$,reportCardTemplate:tE,reportCardTemplateSettings:t$,reportCardTemplateAssignment:t_,header:{...e.header,branch:t,branchId:t?.id||e.header?.branchId,branchName:r,branchLabel:r,template:tE,templateSettings:t$,reportCardTemplate:tE,reportCardTemplateSettings:t$,reportCardTemplateAssignment:t_,branding:{...e.header?.branding||{},primaryColor:(e.header?.branding||{}).primaryColor||"var(--ba-primary, var(--primary-color, #2563eb))",branchName:(e.header?.branding||{}).branchName||r,logo:(e.header?.branding||{}).logo||e.header?.schoolBranchSetting?.logo||e.header?.branch?.logo||e.header?.school?.logo,reportCardBackgroundImage:(e.header?.branding||{}).reportCardBackgroundImage||e.header?.schoolBranchSetting?.reportCardBackgroundImage,reportCardWatermark:(e.header?.branding||{}).reportCardWatermark||e.header?.schoolBranchSetting?.reportCardWatermark,reportCardSignatureImage:(e.header?.branding||{}).reportCardSignatureImage||e.header?.schoolBranchSetting?.reportCardSignatureImage}},report:{...e.report,studentPhoto:o||e.report?.studentPhoto,resolvedStudentPhotoUrl:o||e.report?.resolvedStudentPhotoUrl,branch:t,branchId:t?.id||e.report?.branchId,branchName:r,branchLabel:r,template:tE,templateSettings:t$,reportCardTemplate:tE,reportCardTemplateSettings:t$,reportCardTemplateAssignment:t_}}}return x||k||y||ep?(0,r.jsx)(ea,{primary:ed,title:"Opening My Report...",text:"Checking your academic records, report template and attendance."}):f&&h?z?N||0!==eB.length||ep?M&&B?(0,r.jsxs)("main",{className:"ba-page student-reports-page",style:{"--ba-primary":ed,"--primary-color":ed},children:[(0,r.jsx)("style",{children:es}),(0,r.jsxs)("section",{className:"ba-search-card report-no-print","aria-label":"My report search and actions",children:[(0,r.jsxs)("label",{className:"ba-search",children:[(0,r.jsx)("span",{children:"⌕"}),(0,r.jsx)("input",{value:eg,onChange:e=>eh(e.target.value),placeholder:"Search my report...","aria-label":"Search my report"})]}),(0,r.jsx)("button",{type:"button",className:"ba-add-inline",onClick:tL,"aria-label":"Print report",title:"Print",disabled:!tR,children:"⎙"}),(0,r.jsxs)("button",{type:"button",className:`ba-filter-button ${tD?"active":""}`,onClick:()=>ef(!0),"aria-label":"Open report filters",title:"Filters",children:[(0,r.jsx)(ei,{}),tD?(0,r.jsx)("b",{children:tD}):null]}),(0,r.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>ey(!0),"aria-label":"More options",children:"⋯"})]}),tD>0&&(0,r.jsxs)("section",{className:"ba-filter-chips report-no-print","aria-label":"Active report filters",children:[ew.academicStructureId&&(0,r.jsxs)("button",{type:"button",onClick:()=>ej(e=>({...e,academicStructureId:void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:["Structure: ",tz," \xd7"]}),ew.academicPeriodId&&(0,r.jsxs)("button",{type:"button",onClick:()=>ej(e=>({...e,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:["Period: ",tN," \xd7"]}),ew.classId&&(0,r.jsxs)("button",{type:"button",onClick:()=>ej(e=>({...e,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:["Class: ",tP," \xd7"]}),"student-report"!==em&&(0,r.jsx)("button",{type:"button",onClick:()=>eb("student-report"),children:"Mode: My Report \xd7"})]}),(0,r.jsx)("section",{className:"ba-print-card",children:(0,r.jsx)("div",{id:F,className:"ba-print-zone",children:tC?"class-reports"===em?tk.classReports.length?tk.classReports.map((e,t)=>(0,r.jsx)(O,{dataset:tF(e,tA),template:tE,settings:t$,compact:!0,pageBreakAfter:t<tk.classReports.length-1},e.report?.studentId||t)):(0,r.jsx)(O,{dataset:void 0,template:tE,settings:t$}):(0,r.jsx)(O,{dataset:tF(tk.studentReport,tA),template:tE,settings:t$,pageBreakAfter:!1}):(0,r.jsx)(er,{icon:"\uD83D\uDCC4",title:"Your report is not available yet",text:"Your school has not published enough academic data to build your report yet."})})}),ex&&(0,r.jsx)(eo,{mode:em,filters:ew,academicStructures:eN,academicPeriods:eM,filteredClasses:tB,filteredClassSubjects:tj,filteredStudents:tT,setMode:eb,setFilters:ej,onClose:()=>ef(!1)}),ev&&(0,r.jsx)(en,{onRefresh:async()=>{ey(!1),await tv()},onPrint:()=>{ey(!1),tL()},onClose:()=>ey(!1)})]}):(0,r.jsxs)("main",{className:"ba-page",style:{"--ba-primary":ed,"--primary-color":ed},children:[(0,r.jsx)("style",{children:es}),(0,r.jsxs)("section",{className:"ba-state",children:[(0,r.jsx)("h2",{children:"Branch workspace required"}),(0,r.jsx)("p",{children:"Your report is generated inside the selected student workspace. Use Select Role again if the wrong branch is active."}),(0,r.jsx)("button",{type:"button",className:"ba-state-button",onClick:()=>g.push("/select-role"),children:"Go to Select Role"})]})]}):(0,r.jsx)(ea,{primary:ed,title:"Student profile not linked",text:"The active student membership needs a studentId, studentLocalId, or matching student contact."}):(0,r.jsx)(ea,{primary:ed,title:"Student access required",text:"Open this page from an active student-role workspace."}):(0,r.jsx)(ea,{primary:ed,title:"Redirecting to login...",text:"You must sign in before opening your report."})}};function e1(){return(0,r.jsx)(i.A,{portalTitle:"Student Portal",portalSubtitle:"Learner workspace",homeKey:"studentDashboard",allowedRoles:o.un,navSections:eX,routes:e0,lockedContext:!0,requireSchool:!0,requireBranch:!0})}}},e=>{e.O(0,[8206,3019,69,1439,5125,9540,4967,2975,8365,6228,110,4187,7050,2280,7567,8441,3794,7358],()=>e(e.s=31495)),_N_E=e.O()}]);
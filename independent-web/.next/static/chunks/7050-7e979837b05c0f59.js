"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7050],{723:(e,t,r)=>{r.d(t,{A:()=>l});var i=r(95155),a=r(12115),o=r(69792);let n=[30,40,50,60,70,80,90,100,125,150];function s(e){return"class"===e?"Class Broadsheet":"annual"===e?"Annual Broadsheet":"Subject Broadsheet"}function l({kind:e,dataset:t,header:r,template:m,settings:h,compact:u=!1,showWatermark:g=!0,pageBreakAfter:b=!0,mobilePreview:x=!0,generatedAt:f,pageNumber:w,totalPages:v,className:y,emptyMessage:j}){let S=(0,a.useRef)(null),k=(0,a.useRef)(null),I=(0,a.useRef)(null),[N,C]=(0,a.useState)(!1),[z,A]=(0,a.useState)(1),[T,P]=(0,a.useState)(1),[W,R]=(0,a.useState)(!1),B=N?T:z,L=Math.round(100*B),M=(0,a.useMemo)(()=>(0,o.J9)({kind:e,template:m,settings:h}),[e,m,h]),$=(0,o.ou)(m?.code,m?.templateCode,m?.layoutKey,m?.templateKey,M?.templateCode,M?.layoutKey,"broadsheet_classic"),H=(0,a.useMemo)(()=>(0,o.nE)($),[$]),D=(0,a.useMemo)(()=>(0,o.Tn)($),[$]),F=(0,a.useMemo)(()=>(0,o.BV)(r),[r]),E=(0,a.useMemo)(()=>(0,o.Xc)(e,t),[e,t]),G=!!t&&("subject"===e||"class"===e||"annual"===e)&&Array.isArray(t.students)&&t.students.length>0,O=(0,a.useCallback)(()=>{null!=k.current&&(window.clearTimeout(k.current),k.current=null),null!=I.current&&(window.clearInterval(I.current),I.current=null)},[]),_=(0,a.useCallback)(e=>{P(t=>{let r=N?t:z;return Math.min(2.5,Math.max(.2,Number(("in"===e?1.01*r:r/1.01).toFixed(4))))}),C(!0)},[N,z]),Y=(0,a.useCallback)(e=>{O(),_(e),k.current=window.setTimeout(()=>{I.current=window.setInterval(()=>{_(e)},55)},260)},[_,O]),V=(0,a.useCallback)(()=>{O(),C(!1),P(1),R(!1)},[O]),U=(0,a.useCallback)(()=>{O(),C(!0),P(1),R(!1)},[O]),Z=(0,a.useCallback)(e=>{O(),C(!0),P(Number((e/100).toFixed(4))),R(!1)},[O]);(0,a.useEffect)(()=>{if(!x)return;let e=()=>{let e=S.current;if(!e)return;let t=e.getBoundingClientRect();A(Number(Math.min(1,Math.max(160,t.width-8)/1122.5197,Math.max(180,window.innerHeight-t.top-8)/793.7008).toFixed(4)))};e();let t=new ResizeObserver(e);return S.current&&t.observe(S.current),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{t.disconnect(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[x]),(0,a.useEffect)(()=>()=>O(),[O]);let K=G?D?(0,i.jsx)(D,{kind:e,dataset:t,header:r,template:m||H,settings:M,compact:u,showWatermark:g,pageBreakAfter:b,generatedAt:f,pageNumber:w,totalPages:v,className:y}):(0,i.jsx)(c,{kind:e,header:r,templateDefinition:H,settings:M,summary:E,pageBreakAfter:b,compact:u}):(0,i.jsx)(d,{kind:e,header:r,settings:M,message:j||(0,o.JQ)(e),pageBreakAfter:b,compact:u});return x?(0,i.jsxs)("div",{className:`bs-viewer-shell ${N?"expanded":""}`,children:[(0,i.jsx)("style",{children:p}),(0,i.jsxs)("div",{className:"bs-viewer-toolbar report-no-print",children:[(0,i.jsxs)("div",{className:"bs-viewer-toolbar-copy",children:[(0,i.jsx)("strong",{children:M.broadsheetTitleLabel||s(e)}),(0,i.jsxs)("span",{children:[F.schoolName,F.branchName?` \xb7 ${F.branchName}`:"",D?` \xb7 ${H.name}`:` \xb7 ${H.name} fallback`]})]}),(0,i.jsxs)("div",{className:"bs-viewer-controls","aria-label":"Broadsheet zoom controls",children:[(0,i.jsx)("button",{type:"button",className:"bs-viewer-icon-button",onClick:()=>_("out"),onPointerDown:()=>Y("out"),onPointerUp:O,onPointerCancel:O,onPointerLeave:O,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,i.jsx)("button",{type:"button",className:"bs-viewer-fit-button",onClick:V,"aria-label":"Fit broadsheet to screen",title:"Fit to screen",children:"Fit"}),(0,i.jsxs)("div",{className:"bs-viewer-menu-wrap",children:[(0,i.jsxs)("button",{type:"button",className:"bs-viewer-percent-button",onClick:()=>R(e=>!e),"aria-label":"Choose zoom percentage","aria-expanded":W,children:[(0,i.jsxs)("span",{children:[L,"%"]}),(0,i.jsx)("span",{className:"bs-viewer-caret",children:"▾"})]}),W&&(0,i.jsxs)("div",{className:"bs-viewer-menu",role:"menu",children:[(0,i.jsx)("button",{type:"button",className:"bs-viewer-menu-item",onClick:U,role:"menuitem",children:"Actual size"}),n.map(e=>(0,i.jsxs)("button",{type:"button",className:`bs-viewer-menu-item ${L===e?"active":""}`,onClick:()=>Z(e),role:"menuitem",children:[e,"%"]},e))]})]}),(0,i.jsx)("button",{type:"button",className:"bs-viewer-icon-button",onClick:()=>_("in"),onPointerDown:()=>Y("in"),onPointerUp:O,onPointerCancel:O,onPointerLeave:O,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,i.jsx)("div",{ref:S,className:"bs-viewer-scroll report-screen-scroll",style:{"--broadsheet-preview-scale":B},children:(0,i.jsx)("div",{className:"bs-viewer-center",children:(0,i.jsx)("div",{className:"bs-viewer-scale",children:K})})})]}):K}function d({kind:e,header:t,settings:r,message:a,pageBreakAfter:n,compact:l}){let c=(0,o.BV)(t);return(0,i.jsxs)("section",{className:"print-page report-page-break bs-router-page bs-empty-page",style:{width:"297mm",minHeight:"210mm",margin:"0 auto 18px",padding:l?"8mm":"10mm",boxSizing:"border-box",background:"#fff",color:"#111827",fontFamily:c.fontFamily,border:"1px solid #d1d5db",pageBreakAfter:n?"always":"auto",breakAfter:n?"page":"auto"},children:[(0,i.jsx)(m,{title:r.broadsheetTitleLabel||s(e),branding:c}),(0,i.jsxs)("div",{className:"bs-empty-card",children:[(0,i.jsx)("div",{className:"bs-empty-icon",children:"▦"}),(0,i.jsx)("h3",{children:"No broadsheet data"}),(0,i.jsx)("p",{children:a})]})]})}function c({kind:e,header:t,templateDefinition:r,settings:a,summary:n,pageBreakAfter:l,compact:d}){let p=(0,o.BV)(t);return(0,i.jsxs)("section",{className:"print-page report-page-break bs-router-page bs-fallback-page",style:{width:"297mm",minHeight:"210mm",margin:"0 auto 18px",padding:d?"8mm":"10mm",boxSizing:"border-box",background:"#fff",color:"#111827",fontFamily:p.fontFamily,border:"1px solid #d1d5db",pageBreakAfter:l?"always":"auto",breakAfter:l?"page":"auto"},children:[(0,i.jsx)(m,{title:a.broadsheetTitleLabel||s(e),branding:p}),n.length>0&&(0,i.jsx)("div",{className:"bs-fallback-summary",children:n.map(e=>(0,i.jsxs)("div",{className:"bs-fallback-stat",children:[(0,i.jsx)("span",{children:e.label}),(0,i.jsx)("strong",{children:e.value})]},e.key))}),(0,i.jsxs)("div",{className:"bs-fallback-notice",children:[(0,i.jsx)("strong",{children:r.name}),(0,i.jsx)("span",{children:"The dataset is ready, but this visual template has not been registered yet. The router has safely fallen back instead of failing. Register the Classic template in Phase 4 and it will render here automatically."})]})]})}function m({title:e,branding:t}){return(0,i.jsxs)("header",{className:"bs-fallback-header",children:[(0,i.jsx)("div",{className:"bs-fallback-logo",children:t.logo?(0,i.jsx)("img",{src:t.logo,alt:"School logo"}):(0,i.jsx)("span",{children:"LOGO"})}),(0,i.jsxs)("div",{className:"bs-fallback-identity",children:[(0,i.jsx)("strong",{children:t.schoolName}),(0,i.jsx)("span",{children:[t.branchName,t.address,t.phone].filter(Boolean).join(" \xb7 ")})]}),(0,i.jsx)("div",{className:"bs-fallback-title",style:{borderColor:t.primaryColor,color:t.primaryColor},children:e})]})}let p=`
.bs-viewer-shell {
  --a4-landscape-width-px: 1122.5197;
  --a4-landscape-height-px: 793.7008;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 22px;
}

.bs-viewer-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 8px;
  padding: 10px;
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.24);
  box-shadow: 0 10px 24px rgba(15,23,42,.06);
}

.bs-viewer-toolbar-copy {
  min-width: 0;
  flex: 1 1 auto;
}

.bs-viewer-toolbar-copy strong,
.bs-viewer-toolbar-copy span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.bs-viewer-toolbar-copy strong {
  color: var(--text, #0f172a);
  font-size: 13px;
  font-weight: 950;
}

.bs-viewer-toolbar-copy span {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 750;
}

.bs-viewer-controls {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 10%, transparent);
  border: 1px solid rgba(148,163,184,.18);
}

.bs-viewer-controls button {
  appearance: none;
  -webkit-appearance: none;
  border: 0;
  cursor: pointer;
  font-family: inherit;
}

.bs-viewer-icon-button,
.bs-viewer-fit-button,
.bs-viewer-percent-button {
  height: 32px;
  min-height: 32px;
  border-radius: 999px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-weight: 950;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 14px rgba(15,23,42,.12);
}

.bs-viewer-icon-button {
  width: 32px;
  min-width: 32px;
  padding: 0;
  font-size: 18px;
}

.bs-viewer-fit-button {
  min-width: 42px;
  padding: 0 12px;
  font-size: 12px;
}

.bs-viewer-menu-wrap {
  position: relative;
  display: inline-flex;
}

.bs-viewer-percent-button {
  min-width: 72px;
  padding: 0 10px;
  gap: 5px;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}

.bs-viewer-caret {
  font-size: 9px;
  opacity: .9;
}

.bs-viewer-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 80;
  width: 128px;
  max-height: 280px;
  overflow-y: auto;
  display: grid;
  gap: 4px;
  padding: 7px;
  border-radius: 16px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.34);
  box-shadow: 0 20px 46px rgba(15,23,42,.20);
}

.bs-viewer-menu-item {
  width: 100%;
  min-height: 32px;
  padding: 0 9px;
  border-radius: 10px;
  background: transparent;
  color: var(--text, #0f172a);
  font-size: 11px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bs-viewer-menu-item:hover {
  background: color-mix(in srgb, var(--primary-color, #2563eb) 10%, transparent);
}

.bs-viewer-menu-item.active {
  background: var(--primary-color, #2563eb);
  color: #fff;
}

.bs-viewer-scroll {
  --broadsheet-preview-scale: 1;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
  border-radius: 20px;
  background: rgba(148,163,184,.10);
  border: 1px solid rgba(148,163,184,.18);
  box-sizing: border-box;
}

.bs-viewer-center {
  width: 100%;
  height: calc(210mm * var(--broadsheet-preview-scale));
  min-height: calc(210mm * var(--broadsheet-preview-scale));
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
}

.bs-viewer-scale {
  width: 297mm;
  height: 210mm;
  min-width: 297mm;
  min-height: 210mm;
  transform: scale(var(--broadsheet-preview-scale));
  transform-origin: top center;
  flex: 0 0 auto;
}

.bs-viewer-shell:not(.expanded) .bs-viewer-scroll {
  overflow: hidden;
}

.bs-viewer-shell.expanded .bs-viewer-scroll {
  overflow: auto;
}

.bs-viewer-shell.expanded .bs-viewer-center {
  width: max(100%, calc(297mm * var(--broadsheet-preview-scale)));
  height: calc(210mm * var(--broadsheet-preview-scale));
  min-height: calc(210mm * var(--broadsheet-preview-scale));
  overflow: visible;
}

.bs-router-page {
  width: 297mm !important;
  min-width: 297mm !important;
  max-width: 297mm !important;
  min-height: 210mm !important;
}

.bs-fallback-header {
  display: grid;
  grid-template-columns: 50px minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding-bottom: 9px;
  border-bottom: 2px solid #111827;
}

.bs-fallback-logo {
  width: 50px;
  height: 50px;
  border: 1px solid #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #fff;
}

.bs-fallback-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
  box-sizing: border-box;
}

.bs-fallback-logo span {
  font-size: 7px;
  font-weight: 900;
  color: #6b7280;
}

.bs-fallback-identity {
  min-width: 0;
}

.bs-fallback-identity strong,
.bs-fallback-identity span {
  display: block;
}

.bs-fallback-identity strong {
  font-size: 17px;
  font-weight: 950;
  text-transform: uppercase;
}

.bs-fallback-identity span {
  margin-top: 3px;
  font-size: 8px;
  color: #4b5563;
  font-weight: 700;
}

.bs-fallback-title {
  border: 1px solid currentColor;
  padding: 7px 11px;
  border-radius: 4px;
  font-size: 9px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: .3px;
}

.bs-fallback-summary {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 7px;
}

.bs-fallback-stat {
  border: 1px solid #d1d5db;
  padding: 8px;
  background: #f8fafc;
}

.bs-fallback-stat span,
.bs-fallback-stat strong {
  display: block;
}

.bs-fallback-stat span {
  font-size: 7px;
  font-weight: 900;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: .25px;
}

.bs-fallback-stat strong {
  margin-top: 3px;
  font-size: 13px;
  font-weight: 950;
}

.bs-fallback-notice,
.bs-empty-card {
  margin: 28px auto 0;
  max-width: 620px;
  border: 1px dashed #94a3b8;
  background: #f8fafc;
  padding: 20px;
  text-align: center;
}

.bs-fallback-notice strong,
.bs-fallback-notice span {
  display: block;
}

.bs-fallback-notice strong {
  font-size: 14px;
  font-weight: 950;
}

.bs-fallback-notice span,
.bs-empty-card p {
  margin-top: 7px;
  font-size: 10px;
  line-height: 1.5;
  color: #475569;
  font-weight: 650;
}

.bs-empty-card {
  margin-top: 42px;
}

.bs-empty-icon {
  font-size: 28px;
  line-height: 1;
}

.bs-empty-card h3 {
  margin: 10px 0 0;
  font-size: 15px;
  font-weight: 950;
}

.bs-empty-card p {
  margin-bottom: 0;
}

@media screen and (max-width: 560px) {
  .bs-viewer-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .bs-viewer-controls {
    width: 100%;
    justify-content: center;
  }
}

@media print {
  @page {
    size: A4 landscape;
    margin: 0;
  }

  .bs-viewer-shell,
  .bs-viewer-scroll,
  .bs-viewer-center,
  .bs-viewer-scale {
    display: contents !important;
    transform: none !important;
    width: auto !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    overflow: visible !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .bs-viewer-toolbar,
  .report-no-print {
    display: none !important;
    visibility: hidden !important;
  }

  .bs-router-page,
  .broadsheet-template-page,
  .broadsheet-page {
    width: 297mm !important;
    min-width: 297mm !important;
    max-width: 297mm !important;
    min-height: 210mm !important;
    margin: 0 auto !important;
    transform: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
  }

  table,
  tr,
  td,
  th {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
}
`},5779:(e,t,r)=>{r.d(t,{Eh:()=>f,EI:()=>w});var i=r(42328);function a(e){let t=Number(e);return Number.isFinite(t)?t:0}function o(e,t=2){return Number(e.toFixed(t))}function n(e){return e.length?e.reduce((e,t)=>e+t,0)/e.length:0}function s(e){return!e.isDeleted&&!1!==e.active}function l(e,t){return e.studentName.localeCompare(t.studentName)}function d(e,t){return(e.admissionNumber||"").localeCompare(t.admissionNumber||"")}function c(e){return{schoolMap:new Map(e.schools.map(e=>[e.id,e])),branchMap:new Map(e.branches.map(e=>[e.id,e])),schoolBranchSettingsMap:new Map((e.schoolBranchSettings||[]).map(e=>[e.branchId,e])),academicStructureMap:new Map(e.academicStructures.map(e=>[e.id,e])),academicPeriodMap:new Map(e.academicPeriods.map(e=>[e.id,e])),studentMap:new Map(e.students.map(e=>[e.id,e])),teacherMap:new Map(e.teachers.map(e=>[e.id,e])),classMap:new Map(e.classes.map(e=>[e.id,e])),subjectMap:new Map(e.subjects.map(e=>[e.id,e])),classSubjectMap:new Map(e.classSubjects.map(e=>[e.id,e])),gradingStructureMap:new Map(e.gradingStructures.map(e=>[e.id,e])),assessmentStructureMap:new Map(e.assessmentStructures.map(e=>[e.id,e]))}}function m(e){if(!e)return"";if("string"==typeof e&&/^\d{4}-\d{2}-\d{2}$/.test(e))return e;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?new Date(t).toISOString().slice(0,10):""}function p(e){let t=m(e);if(!t)return"";try{return new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",year:"numeric"}).format(new Date(`${t}T00:00:00`))}catch{return t}}function h(e,t){let r=e.academicPeriods.find(e=>e.id===t.academicPeriodId&&!e.isDeleted);if(!r)return;let i=m(r.startDate),o=m(r.endDate),n=p(i),s=p(o);return{id:null!=r.id?String(r.id):void 0,academicStructureId:r.academicStructureId,name:r.name,type:r.type,startDate:i,endDate:o,order:a(r.order),formattedStartDate:n,formattedEndDate:s,label:s?`This Academic Period Ends: ${s}`:"This Academic Period Ends: Not set",period:r}}function u(e,t){let r=function(e,t){let r=e.academicPeriods.find(e=>e.id===t.academicPeriodId&&!e.isDeleted);if(!r)return;let i=t.academicStructureId||r.academicStructureId,o=e.academicStructures.find(e=>e.id===i&&!e.isDeleted),n=a(r.order),l=m(r.startDate),d=m(r.endDate),c=e=>!!s(e)&&e.id!==r.id&&(!t.branchId||e.branchId===t.branchId)&&(!r.schoolId||e.schoolId===r.schoolId),p=(e,t)=>{let r=a(e.order)-a(t.order);if(0!==r)return r;let i=m(e.startDate).localeCompare(m(t.startDate));return 0!==i?i:String(e.name||"").localeCompare(String(t.name||""))},h=e.academicPeriods.filter(e=>{if(!c(e)||i&&e.academicStructureId!==i)return!1;let t=a(e.order),r=m(e.startDate);return!!n&&!!(t>n)||!!d&&!!r&&!!(r>d)||!!l&&!!r&&!!(r>l)}).sort(p);if(h[0])return h[0];let u=m(o?.endDate),g=m(o?.startDate);for(let a of e.academicStructures.filter(e=>{if(!s(e)||e.id===i||t.branchId&&e.branchId!==t.branchId||r.schoolId&&e.schoolId!==r.schoolId)return!1;let a=m(e.startDate),o=m(e.endDate);return!!u&&!!a&&a>u||!!g&&!!a&&a>g||!!d&&!!a&&a>d||!!l&&!!a&&a>l||!!u&&!!o&&o>u||!1}).sort((e,t)=>{let r=m(e.startDate).localeCompare(m(t.startDate));if(0!==r)return r;let i=m(e.endDate).localeCompare(m(t.endDate));return 0!==i?i:String(e.name||"").localeCompare(String(t.name||""))})){let t=e.academicPeriods.filter(e=>c(e)&&e.academicStructureId===a.id).sort(p)[0];if(t)return t}return e.academicPeriods.filter(e=>{if(!c(e))return!1;let t=m(e.startDate);return!!d&&!!t&&!!(t>d)||!!l&&!!t&&!!(t>l)}).sort((t,r)=>{let i=m(t.startDate).localeCompare(m(r.startDate));if(0!==i)return i;let a=e.academicStructures.find(e=>e.id===t.academicStructureId),o=e.academicStructures.find(e=>e.id===r.academicStructureId),n=m(a?.startDate).localeCompare(m(o?.startDate));return 0!==n?n:p(t,r)})[0]}(e,t);if(!r)return;let i=m(r.startDate),o=p(i);return{id:null!=r.id?String(r.id):void 0,academicStructureId:r.academicStructureId,name:r.name,type:r.type,startDate:i,endDate:m(r.endDate),order:a(r.order),formattedStartDate:o,label:o?`Next Academic Period Begins: ${o}`:"Next Academic Period Begins: Not set",period:r}}function g(e,t){return e.classSubjects.filter(e=>!!s(e)&&(!t.branchId||e.branchId===t.branchId)&&(!t.classId||e.classId===t.classId)&&(!t.academicStructureId||e.academicStructureId===t.academicStructureId)&&(!t.academicPeriodId||e.academicPeriodId===t.academicPeriodId)&&(!t.classSubjectId||e.id===t.classSubjectId)&&!0).sort((t,r)=>{let i=Number(t.orderIndex),a=Number(r.orderIndex),o=Number.isFinite(i),n=Number.isFinite(a);if(o&&n&&i!==a)return i-a;if(o!==n)return o?-1:1;let s=e.subjects.find(e=>String(e.id)===String(t.subjectId)),l=e.subjects.find(e=>String(e.id)===String(r.subjectId));return String(t.name||s?.name||"").localeCompare(String(r.name||l?.name||""))||String(t.subjectId).localeCompare(String(r.subjectId))})}function b(e,t){if(t)return e.assessmentApplicabilities.find(e=>e.classSubjectId===t&&s(e))}function x(e){let t=e?.gradingStructureId??e?.gradingSystemId;return null==t||""===String(t).trim()?void 0:String(t)}function f(e,t,r){let m,p,f,w,v={...t,studentId:void 0,classSubjectId:void 0},y=(m=new Set(e.studentEnrollments.filter(e=>!e.isDeleted&&"active"===e.status&&(!v.branchId||e.branchId===v.branchId)&&(!v.classId||e.classId===v.classId)&&(!v.academicStructureId||e.academicStructureId===v.academicStructureId)&&(!v.academicPeriodId||e.academicPeriodId===v.academicPeriodId)).map(e=>e.studentId)),e.students.filter(e=>!e.isDeleted&&(!v.branchId||e.branchId===v.branchId)&&(!v.studentId||e.id===v.studentId)&&!!e.id&&m.has(e.id))),j=g(e,v),S=y.map(t=>{var l,d,m,p,g;let f,w,y,S,k,I,N,C,z,A,T;return f=c(e),y=(w=j.map(n=>{let l,d,m,p,h,u,g,f,w,y,j,S,k,I;return d=(l=c(e)).subjectMap.get(n.subjectId),m=n.teacherId?l.teacherMap.get(n.teacherId):void 0,p=b(e,null!=n.id?String(n.id):void 0),h=String(n.id??""),g=(u=function(e,t){var r,a,o;let n=t.applicability??b(e,t.classSubjectId);if(!n?.assessmentStructureId)return;let l=e.assessmentStructures.find(e=>String(e.id??"")===String(n.assessmentStructureId)&&s(e));if(!l)return;let d=e.assessmentStructureItems.filter(e=>String(e.assessmentStructureId)===String(l.id)&&s(e)),c=(r=t.studentId,a=t.classSubjectId,o=t.academicPeriodId,e.assessmentEntries.filter(e=>!e.isDeleted&&e.studentId===r&&(!a||e.classSubjectId===a)&&(!o||e.academicPeriodId===o))),m=x(n),p=e.gradeRules.filter(e=>(!m||x(e)===m)&&s(e));return(0,i.Am)({structure:l,items:d,entries:c,gradeRules:p,reportSettings:{...i.kz,...t.settings||{}}}).reportProjection}(e,{studentId:String(t.id??""),classSubjectId:h,academicPeriodId:v.academicPeriodId||n.academicPeriodId,applicability:p,settings:r}))?u.rows.map(e=>({assessmentStructureItemId:e.itemId,parentItemId:e.parentItemId,name:e.name,shortLabel:e.shortLabel,pathLabels:[...e.pathLabels],depth:e.depth,order:e.order,itemType:e.itemType,aggregationMode:e.aggregationMode,weight:e.effectiveWeight,effectiveWeight:e.effectiveWeight,maxScore:e.maxScore,isParent:e.isParent,isLeaf:e.isLeaf,calculatedFromChildren:e.calculatedFromChildren,complete:e.complete,score:e.rawScore,rawScore:e.rawScore,weightedScore:e.weightedScore,normalizedPercentage:e.normalizedPercentage,enteredDirectly:e.enteredDirectly})):[],f=u?u.columns.map(e=>({assessmentStructureItemId:e.itemId,parentItemId:e.parentItemId,name:e.name,shortLabel:e.shortLabel,pathLabels:[...e.pathLabels],depth:e.depth,order:e.order,itemType:e.itemType,aggregationMode:e.aggregationMode,weight:e.effectiveWeight,effectiveWeight:e.effectiveWeight,maxScore:e.maxScore,isParent:e.isParent,isLeaf:e.isLeaf,calculatedFromChildren:e.calculatedFromChildren,complete:e.complete,groupId:e.groupId,groupLabel:e.groupLabel,groupDepth:e.groupDepth,columnSpan:e.columnSpan})):[],w=u?u.roots.reduce((e,t)=>e+a(t.rawScore),0):g.reduce((e,t)=>e+a(t.rawScore),0),y=u?u.roots.reduce((e,t)=>e+a(t.maxScore),0):g.reduce((e,t)=>e+a(t.maxScore),0),j=u?u.roots.reduce((e,t)=>e+a(t.weightedScore),0):g.reduce((e,t)=>e+a(t.weightedScore),0),I=function(e,t,r){if(!r)return{grade:"N/A",remark:"No grading system"};let i=e.gradeRules.filter(e=>x(e)===r&&s(e)).sort((e,t)=>t.minScore-e.minScore).find(e=>t>=e.minScore&&t<=e.maxScore);return{grade:i?.grade||"N/A",remark:i?.remark||"No remark defined",gpa:i?.gpa,color:i?.color}}(e,k=(S=u?u.roots.reduce((e,t)=>e+a(t.effectiveWeight),0):f.reduce((e,t)=>e+a(t.effectiveWeight),0))>0?j/S*100:0,x(p)),{classSubjectId:h,subjectId:n.subjectId,subjectName:n.name||d?.name||"Unknown Subject",subjectCode:n.code||d?.code,shortName:n.code||d?.code||d?.name?.slice(0,4),teacherId:m?.id,teacherName:m?.fullName,assessmentStructureId:p?.assessmentStructureId,gradingStructureId:x(p),breakdown:g,assessmentProjection:u,assessmentReportSettings:u?.settings,rawTotal:o(w,2),rawMaxTotal:o(y,2),weightedTotal:o(j,2),totalWeight:o(S,2),percentage:o(k,2),grade:I.grade,remark:I.remark,gpa:I.gpa,color:I.color,subjectPosition:void 0}})).map(e=>e.percentage),S=w.map(e=>e.gpa).filter(e=>null!=e),k=String(v.classId??t.currentClassId??""),l={studentEnrollments:e.studentEnrollments||[],branchId:v.branchId,classId:k,academicStructureId:v.academicStructureId,academicPeriodId:v.academicPeriodId},I=(e,t)=>String(e??"")===String(t??""),N=new Set,l.studentEnrollments.filter(e=>!(e?.isDeleted||e?.active===!1||["withdrawn","transferred"].includes(String(e?.status||"active").toLowerCase()))&&(!l.branchId||!!I(e.branchId,l.branchId))&&(!l.classId||!!I(e.classId,l.classId))&&(!l.academicStructureId||!!I(e.academicStructureId,l.academicStructureId))&&(!l.academicPeriodId||!!I(e.academicPeriodId,l.academicPeriodId))).forEach(e=>{let t=String(e?.studentId??"").trim();t&&N.add(t)}),C=N.size,{studentId:String(t.id??""),studentName:t.fullName,admissionNumber:t.admissionNumber,gender:t.gender,studentPhoto:t.photo,classId:k,className:f.classMap.get(k)?.name||"Class",academicStructureId:v.academicStructureId,academicPeriodId:v.academicPeriodId,currentAcademicPeriod:h(e,v),nextAcademicPeriod:u(e,v),numberOnRoll:C,classSize:C,subjectResults:w,total:o(y.reduce((e,t)=>e+t,0),2),average:o(n(y),2),overallGPA:S.length?o(n(S),2):void 0,overallPosition:void 0,attendance:(d=e,m=String(t.id??""),(T=function(e,t,r){let i=(e.studentAttendanceSummaries||[]).find(e=>!e.isDeleted&&String(e.studentId)===String(t)&&(!r.classId||String(e.classId)===String(r.classId))&&(!r.academicStructureId||String(e.academicStructureId)===String(r.academicStructureId))&&(!r.academicPeriodId||String(e.academicPeriodId)===String(r.academicPeriodId)));if(i)return{totalDays:a(i.daysOpened),presentDays:a(i.daysPresent),absentDays:a(i.daysAbsent),lateDays:a(i.timesLate),attendancePercent:a(i.attendancePercent)}}(d,m,p=v))?T:(z=(g=d.attendance.filter(e=>!e.isDeleted&&e.studentId===m&&(!p.classId||e.classId===p.classId)&&(!p.academicStructureId||e.academicStructureId===p.academicStructureId)&&(!p.academicPeriodId||e.academicPeriodId===p.academicPeriodId))).length,A=g.filter(e=>"present"===e.status).length,{totalDays:z,presentDays:A,absentDays:g.filter(e=>"absent"===e.status).length,lateDays:g.filter(e=>"late"===e.status).length,attendancePercent:z?o(A/z*100,1):0})),classTeacherRemark:"",headTeacherRemark:"",promoted:void 0}});p=[...S].sort((e,t)=>t.total-e.total||t.average-e.average||(t.overallGPA||0)-(e.overallGPA||0)||e.studentName.localeCompare(t.studentName)),f="",w=0,p.forEach((e,t)=>{let r=[e.total,e.average,e.overallGPA||0].join("|"),i=r===f?w:t+1;e.overallPosition=i,f=r,w=i}),j.forEach(e=>{let t=String(e.id??"");if(!t)return;let r=S.map(e=>e.subjectResults.find(e=>String(e.classSubjectId??"")===t)).filter(e=>!!e).sort((e,t)=>t.percentage-e.percentage||t.weightedTotal-e.weightedTotal||t.rawTotal-e.rawTotal),i="",a=0;r.forEach((e,t)=>{let r=[e.percentage,e.weightedTotal,e.rawTotal].join("|"),o=r===i?a:t+1;e.subjectPosition=o,i=r,a=o})});let k=[...S];switch(t.sortMode){case"alphabetical":return k.sort(l);case"admission-number":return k.sort(d);default:return k.sort((e,t)=>(e.overallPosition||9999)-(t.overallPosition||9999))}}function w(e,t,r){let i,l,d,m,p,x,w,v,y,j,S,k,I,N,C,z,A,T=(i=e.schools.find(e=>!e.isDeleted),l=e.branches.find(e=>e.id===t.branchId&&!e.isDeleted),d=(e.schoolBranchSettings||[]).find(e=>e.branchId===t.branchId&&!e.isDeleted),m=e.academicStructures.find(e=>e.id===t.academicStructureId&&!e.isDeleted),p=e.academicPeriods.find(e=>e.id===t.academicPeriodId&&!e.isDeleted),x=e.classes.find(e=>e.id===t.classId&&!e.isDeleted),w=h(e,t),v=u(e,t),y={schoolName:i?.name||l?.name||"School Name",motto:i?.motto,logo:d?.logo||l?.logo||i?.logo,address:l?.address??i?.address??void 0,phone:l?.phone||i?.phone,email:l?.email||i?.email,website:i?.website,branchName:l?.name,branchAddress:l?.address??void 0,primaryColor:d?.primaryColor||"var(--primary-color)",fontFamily:d?.fontFamily,reportCardBackgroundImage:d?.reportCardBackgroundImage,reportCardWatermark:d?.reportCardWatermark,reportCardSignatureImage:d?.reportCardSignatureImage},{school:i,branch:l,academicStructure:m,academicPeriod:p,classData:x,schoolBranchSetting:d,branchId:l?.id||t.branchId,branchName:l?.name,branchAddress:l?.address??void 0,primaryColor:y.primaryColor,currentAcademicPeriod:w,nextAcademicPeriod:v,branding:y}),P=new Date().toISOString(),W=[];t.branchId||W.push("No branch selected."),t.academicPeriodId||W.push("No academic period selected."),t.classId||W.push("No class selected.");let R=g(e,{...t,classSubjectId:void 0});!R.length&&t.classId&&W.push("No class subjects found for the selected class and period.");let B=f(e,t,r),L=t.studentId?B.find(e=>e.studentId===t.studentId):B[0],M=(j=e.teachers.find(e=>e.branchId===t.branchId&&"head_teacher"===e.role&&!e.isDeleted),j?.fullName),$=(S=e.teachers.find(e=>e.branchId===t.branchId&&"principal"===e.role&&!e.isDeleted),S?.fullName),H=r=>{let i=e.students.find(e=>e.id===r.studentId),a=(r=>{if(!r)return;let i=e.classTeachers.find(e=>e.classId===r&&e.branchId===t.branchId&&!e.isDeleted),a=i?e.teachers.find(e=>e.id===i.teacherId&&e.branchId===t.branchId&&!e.isDeleted):void 0;return a?.fullName})(r.classId),o=(r=>{if(!r)return;let i=e.studentParents.find(e=>e.studentId===r&&e.branchId===t.branchId&&!e.isDeleted),a=i?e.parents.find(e=>e.id===i.parentId&&e.branchId===t.branchId&&!e.isDeleted):void 0;return a?.fullName})(r.studentId),n=e.reportCards.find(e=>e.branchId===t.branchId&&e.studentId===r.studentId&&e.classId===r.classId&&e.academicStructureId===r.academicStructureId&&e.academicPeriodId===r.academicPeriodId&&!e.isDeleted);return{header:T,student:i,report:{...r,classTeacherRemark:n?.classTeacherRemark||r.classTeacherRemark,headTeacherRemark:n?.headTeacherRemark||r.headTeacherRemark,classTeacherName:a,headTeacherName:M,principalName:$,parentName:o,guardianName:o},generatedAt:P,classTeacherName:a,headTeacherName:M,principalName:$,parentName:o,guardianName:o,currentAcademicPeriod:T.currentAcademicPeriod,nextAcademicPeriod:T.nextAcademicPeriod}},D=L?H(L):void 0,F=t.classSubjectId?function(e,t,r){let i=c(e),l=t.classSubjectId?i.classSubjectMap.get(t.classSubjectId):void 0;if(!l)return;let d=i.subjectMap.get(l.subjectId),m=l.teacherId?i.teacherMap.get(l.teacherId):void 0,p=r.reduce((e,t)=>{let r=t.subjectResults.find(e=>e.classSubjectId===l.id);return r&&e.push({studentId:t.studentId,studentName:t.studentName,admissionNumber:t.admissionNumber,breakdown:r.breakdown,weightedTotal:r.weightedTotal,percentage:r.percentage,grade:r.grade,remark:r.remark,gpa:r.gpa,position:r.subjectPosition}),e},[]).sort((e,t)=>(e.position||9999)-(t.position||9999)),h=p.map(e=>e.percentage),u=b(e,null!=l.id?String(l.id):void 0);return{classSubjectId:String(l.id??""),classId:l.classId,className:i.classMap.get(l.classId)?.name||"Class",subjectId:l.subjectId,subjectName:l.name||d?.name||"Subject",subjectCode:l.code||d?.code,teacherName:m?.fullName,assessmentColumns:function(e,t){if(!t?.assessmentStructureId)return[];let r=e.assessmentStructureItems.filter(e=>e.assessmentStructureId===t.assessmentStructureId&&s(e)).sort((e,t)=>a(e.level)-a(t.level)||a(e.order)-a(t.order)),i=new Map(r.map(e=>[String(e.id??""),e])),o=new Map;for(let e of r){let t=e.parentItemId?String(e.parentItemId):"";t&&o.set(t,(o.get(t)??0)+1)}return r.map(e=>{let t=String(e.id??""),r=(o.get(t)??0)>0,n=a(e.level),s=e.parentItemId?a(e.contributionWeight??e.weight):a(e.weight);return{assessmentStructureItemId:t,parentItemId:e.parentItemId?String(e.parentItemId):null,name:e.name,shortLabel:e.name,pathLabels:(e=>{let t=[e.name],r=new Set,a=e.parentItemId?String(e.parentItemId):"";for(;a&&!r.has(a);){r.add(a);let e=i.get(a);if(!e)break;t.unshift(e.name),a=e.parentItemId?String(e.parentItemId):""}return t})(e),depth:n,order:a(e.order),itemType:e.itemType,aggregationMode:e.aggregationMode,maxScore:a(e.maxScore),weight:s,effectiveWeight:s,isParent:r,isLeaf:!r,calculatedFromChildren:"from_children"===e.entryMode||"computed_total"===e.itemType,complete:!1,groupId:e.parentItemId?`assessment-group:${String(e.parentItemId)}`:void 0,groupLabel:e.parentItemId?i.get(String(e.parentItemId))?.name:void 0,groupDepth:e.parentItemId?a(i.get(String(e.parentItemId))?.level):void 0}})}(e,u),students:p,highestScore:o(h.length?Math.max(...h):0,2),lowestScore:o(h.length?Math.min(...h):0,2),classAverage:o(n(h),2)}}(e,t,B):void 0,E=(k=c(e),I=g(e,{...t,classSubjectId:void 0}).map(e=>{let t=k.subjectMap.get(e.subjectId);return{classSubjectId:String(e.id??""),subjectId:e.subjectId,subjectName:e.name||t?.name||"Subject",subjectCode:e.code||t?.code,shortName:e.code||t?.code||t?.name?.slice(0,4)}}),C=(N=B.map(e=>{let t=e.subjectResults.map(e=>({classSubjectId:e.classSubjectId,subjectId:e.subjectId,subjectName:e.subjectName,subjectCode:e.subjectCode,shortName:e.shortName,percentage:e.percentage,weightedTotal:e.weightedTotal,grade:e.grade,remark:e.remark,position:e.subjectPosition}));return{studentId:e.studentId,studentName:e.studentName,admissionNumber:e.admissionNumber,subjects:t,total:e.total,average:e.average,gpa:e.overallGPA,position:e.overallPosition,attendancePercent:e.attendance.attendancePercent}})).map(e=>e.average),{classId:String(t.classId??""),className:t.classId&&k.classMap.get(t.classId)?.name||"Class",subjectColumns:I,students:N,highestAverage:o(C.length?Math.max(...C):0,2),lowestAverage:o(C.length?Math.min(...C):0,2),classAverage:o(n(C),2)}),G=(z=B.map(e=>e.average),A=B.flatMap(e=>e.subjectResults.flatMap(e=>e.breakdown)),{totalStudents:B.length,totalSubjects:R.length,totalAssessmentItems:A.length,highestAverage:o(z.length?Math.max(...z):0,2),lowestAverage:o(z.length?Math.min(...z):0,2),classAverage:o(n(z),2)});return{header:T,studentReport:D,classReports:B.map(e=>H(e)),subjectBroadsheet:F,classBroadsheet:E,analytics:G,warnings:W}}},10903:(e,t,r)=>{r.d(t,{J:()=>a});var i=r(12115);function a(e=!0){let t=(0,i.useRef)(!1),r=(0,i.useRef)(e),[o,n]=(0,i.useState)(e),[s,l]=(0,i.useState)(!1),[d,c]=(0,i.useState)(!1),m=(0,i.useCallback)(e=>{let i="function"==typeof e?e(r.current):e;(r.current=i,i)?t.current?l(!0):n(!0):(t.current=!0,c(!0),n(!1),l(!1))},[]),p=(0,i.useCallback)(async e=>{m(!0);try{return await e()}finally{m(!1)}},[m]);return{loading:o,initialLoading:o,refreshing:s,hasLoaded:d,setLoading:m,run:p,reset:(0,i.useCallback)(()=>{t.current=!1,r.current=e,c(!1),n(e),l(!1)},[e])}}},15982:(e,t,r)=>{r.d(t,{BF:()=>c,ed:()=>d,gv:()=>a,tH:()=>l,tU:()=>s,u_:()=>i});let i="classic_formal",a={templateCode:"classic_formal",layoutKey:"classic_formal",templateName:"Classic Formal",orientation:"portrait",paperSize:"A4",density:"compact",showSubjectPosition:!0,showClassPosition:!0,showNumberOnRoll:!1,showAttendance:!0,showAttendancePercent:!0,showStudentPhoto:!0,showTeacherNames:!0,showCurrentAcademicPeriodEnd:!0,showNextAcademicPeriod:!0,showPromotionStatus:!1,showGPA:!0,showAverage:!0,showTotal:!0,showGrade:!0,showSubjectRemarks:!0,showWatermark:!0,showParentSignature:!0,showGeneratedDate:!1,showAssessmentBreakdown:!0,assessmentHierarchyDisplay:"item_rules",showAssessmentParentItems:!0,showAssessmentChildItems:!0,showCalculatedAssessmentItems:!0,indentAssessmentChildren:!0,showAssessmentGroupHeaders:!0,flattenSingleChildAssessmentGroups:!1,assessmentMaximumVisibleDepth:null,showAssessmentMaximumScores:!0,showAssessmentWeights:!1,showAssessmentRawScores:!0,showAssessmentWeightedScores:!0,showAssessmentHierarchyPath:!1,broadsheetAssessmentHierarchyDisplay:"parents_only",broadsheetShowAssessmentGroupHeaders:!0,broadsheetMaximumAssessmentDepth:null,classTeacherLabel:"Class Teacher",headTeacherLabel:"Headteacher / Principal",parentLabel:"Parent / Guardian",principalLabel:"Principal",currentAcademicPeriodEndLabel:"This Academic Period Ends",nextAcademicPeriodLabel:"Next Academic Period Begins",numberOnRollLabel:"Number On Roll",classPositionLabel:"Class Position",subjectPositionLabel:"Position",generatedDateLabel:"Generated On",active:!0},o=[{code:"classic_formal",name:"Classic Formal",layoutKey:"classic_formal",description:"Formal Ghana/private-school report style with strong official structure.",orientation:"portrait",paperSize:"A4",density:"compact",isDefault:!0,active:!0},{code:"modern_clean",name:"Modern Clean",layoutKey:"modern_clean",description:"Premium clean layout with softer spacing and modern arrangement.",orientation:"portrait",paperSize:"A4",density:"comfortable",active:!0},{code:"compact_print",name:"Compact Print",layoutKey:"compact_print",description:"Space-saving layout for efficient printing while keeping report quality.",orientation:"portrait",paperSize:"A4",density:"compact",active:!0},{code:"bordered_traditional",name:"Bordered Traditional",layoutKey:"bordered_traditional",description:"Boxed and table-heavy traditional school report arrangement.",orientation:"portrait",paperSize:"A4",density:"compact",active:!0},{code:"letterhead_premium",name:"Letterhead Premium",layoutKey:"letterhead_premium",description:"Institutional letterhead-style report with elegant branding emphasis.",orientation:"portrait",paperSize:"A4",density:"comfortable",active:!0},{code:"side_profile",name:"Side Profile",layoutKey:"side_profile",description:"Modern report layout with student identity/profile emphasis.",orientation:"portrait",paperSize:"A4",density:"comfortable",active:!0},{code:"cambridge",name:"Cambridge",layoutKey:"cambridge",description:"International-style academic report arrangement inspired by Cambridge-style school reporting.",orientation:"portrait",paperSize:"A4",density:"comfortable",active:!0},{code:"ib",name:"IB",layoutKey:"ib",description:"International Baccalaureate-style report arrangement with clean academic structure.",orientation:"portrait",paperSize:"A4",density:"comfortable",active:!0},{code:"kindergarten",name:"Kindergarten",layoutKey:"kindergarten",description:"Early-years report card style while still receiving the same Eleeveon report dataset.",orientation:"portrait",paperSize:"A4",density:"comfortable",active:!0},{code:"montessori",name:"Montessori",layoutKey:"montessori",description:"Montessori-inspired report design focused on calm presentation and development-friendly structure.",orientation:"portrait",paperSize:"A4",density:"spacious",active:!0},{code:"university_transcript",name:"University Transcript",layoutKey:"university_transcript",description:"Transcript-style academic report layout for higher academic or cumulative presentation.",orientation:"portrait",paperSize:"A4",density:"compact",active:!0}];function n(e){if(null==e)return;let t=String(e).trim();if(t&&"0"!==t&&"undefined"!==t&&"null"!==t)return t}function s(e){return String(e||"").trim().toLowerCase().replace(/\s+/g,"_").replace(/-/g,"_")}function l(e,t,r){let o={...a,...e||{}},s=t?.code||e?.templateCode||o.templateCode||i,l=t?.layoutKey||e?.layoutKey||o.layoutKey||s||"classic_formal",d=c(s),m=t?.name||e?.templateName||d.name||o.templateName||"Classic Formal";return{...o,templateId:n(t?.id||e?.templateId||o.templateId),templateSettingsId:n(e?.id||e?.templateSettingsId||o.templateSettingsId),assignmentId:n(r?.id||o.assignmentId),templateCode:s,layoutKey:l,templateName:m,orientation:e?.orientation||t?.orientation||o.orientation||d.orientation||"portrait",paperSize:e?.paperSize||t?.paperSize||o.paperSize||d.paperSize||"A4",density:e?.density||t?.density||o.density||d.density||"compact",active:e?.active!==!1&&t?.active!==!1}}function d(e){let t=e?.code||i,r=c(t);return{id:e?.id?String(e.id):void 0,code:t,name:e?.name||r.name,layoutKey:e?.layoutKey||r.layoutKey,description:e?.description||r.description,orientation:e?.orientation||r.orientation,paperSize:e?.paperSize||r.paperSize,density:e?.density||r.density,isDefault:e?.isDefault??r.isDefault,active:e?.active!==!1}}function c(e){let t=s(e||i);return o.find(e=>s(e.code)===t||s(e.layoutKey)===t)||o[0]}},32242:(e,t,r)=>{r.d(t,{Ak:()=>u,B_:()=>h,IE:()=>d,J7:()=>x,R8:()=>y,Tu:()=>f,ZV:()=>s,h5:()=>S,j1:()=>j,kn:()=>p,l9:()=>l,ou:()=>c,p6:()=>k,qr:()=>v,wX:()=>b,zI:()=>w});var i=r(15982),a=r(42328);function o(e){if(null==e)return;let t=String(e).trim();if(t&&"0"!==t&&"undefined"!==t&&"null"!==t)return t}function n(e,t=0){let r=Number(e);return Number.isFinite(r)?r:t}function s(e,t=1,r="-"){return null==e||Number.isNaN(Number(e))?r:Number(e).toFixed(t)}function l(e,t=1,r="-"){return null==e||Number.isNaN(Number(e))?r:`${Number(e).toFixed(t)}%`}function d(e){let t=Number(e);if(!Number.isFinite(t)||t<=0)return"-";let r=["th","st","nd","rd"],i=t%100;return`${t}${r[(i-20)%10]||r[i]||r[0]}`}function c(...e){for(let t of e)if("string"==typeof t&&t.trim())return t.trim();return""}function m(e){if(!e)return"";if("string"==typeof e&&/^\d{4}-\d{2}-\d{2}$/.test(e))return e;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?new Date(t).toISOString().slice(0,10):""}function p(e){let t=m(e);if(!t)return"";try{return new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",year:"numeric"}).format(new Date(`${t}T00:00:00`))}catch{return t}}function h(e){let t=String(e||"#ffffff").replace("#","").trim();if(t.startsWith("rgb"))return"#fff";3===t.length&&(t=t.split("").map(e=>e+e).join(""));let r=parseInt(t,16);return Number.isFinite(r)&&(299*(r>>16&255)+587*(r>>8&255)+114*(255&r))/1e3>140?"#111":"#fff"}function u(e,t="var(--primary-color)"){return e?.primaryColor||e?.branding?.primaryColor||e?.schoolBranchSetting?.primaryColor||t}function g(e){switch(e){case"spacious":return{pagePadding:"13mm",gap:10,cellPadding:6,fontSize:11,smallFontSize:9.5};case"comfortable":return{pagePadding:"11mm",gap:8,cellPadding:5,fontSize:10.5,smallFontSize:9};default:return{pagePadding:"9mm",gap:6,cellPadding:4,fontSize:9.5,smallFontSize:8.5}}}function b(e){let t=e?.branding||{};return{schoolName:t.schoolName||e?.school?.name||e?.branch?.name||"School Name",motto:t.motto||e?.school?.motto||"",logo:t.resolvedLogoUrl||t.logo||e?.schoolBranchSetting?.logo||e?.branch?.logo||e?.school?.logo||"",address:t.address||e?.branch?.address||e?.school?.address||"",phone:t.phone||e?.branch?.phone||e?.school?.phone||"",email:t.email||e?.branch?.email||e?.school?.email||"",website:t.website||e?.school?.website||"",branchName:t.branchName||e?.branch?.name||e?.branchName||"",branchAddress:t.branchAddress||e?.branchAddress||e?.branch?.address||"",primaryColor:t.primaryColor||e?.primaryColor||"var(--primary-color)",fontFamily:t.fontFamily||e?.schoolBranchSetting?.fontFamily||"Arial, sans-serif",reportCardBackgroundImage:t.resolvedReportCardBackgroundImageUrl||t.reportCardBackgroundImage||e?.schoolBranchSetting?.reportCardBackgroundImage||"",reportCardWatermark:t.resolvedReportCardWatermarkUrl||t.reportCardWatermark||e?.schoolBranchSetting?.reportCardWatermark||"",reportCardSignatureImage:t.resolvedReportCardSignatureImageUrl||t.reportCardSignatureImage||e?.schoolBranchSetting?.reportCardSignatureImage||""}}function x(e){var t;let r,s,l,d,h,u,g,x,{dataset:f}=e;if(!f?.header||!f?.report)return;let w=(0,i.ed)(e.template||null),v=(t={template:e.template||w,settings:e.settings||null,assignment:e.assignment||null},(0,i.tH)({...i.gv,...t?.fallback||{},...t?.settings||{}},t?.template||null,t?.assignment||null)),y=f.report,j=y.subjectResults||[];return{header:f.header,report:y,student:f.student,branding:b(f.header),studentInfo:(r=f?.report,s=f?.student,{studentId:String(r?.studentId||s?.id||""),studentName:c(r?.studentName,s?.fullName,"Student Name"),admissionNumber:c(r?.admissionNumber,s?.admissionNumber),gender:c(r?.gender,s?.gender),studentPhoto:c(r?.resolvedStudentPhotoUrl,r?.studentPhoto,s?.resolvedStudentPhotoUrl,s?.photo),className:c(r?.className,f?.className,"Class"),numberOnRoll:function(e){let t=e?.report||{},r=e?.header||{};for(let i of[t.numberOnRoll,t.classSize,t.totalStudentsInClass,t.studentsInClass,t.rollCount,e?.numberOnRoll,e?.classSize,e?.totalStudentsInClass,r?.numberOnRoll,r?.classSize,r?.classData?.numberOnRoll,r?.classData?.classSize,r?.classData?.capacity]){let e=Number(i);if(Number.isFinite(e)&&e>0)return e}}(f),overallPosition:n(r?.overallPosition,0)||void 0,promoted:"boolean"==typeof r?.promoted?r.promoted:void 0}),subjectResults:j,assessmentProjections:j.map(e=>e.assessmentProjection).filter(e=>!!e),assessmentReportSettings:(0,a._J)(v),attendance:y.attendance,summary:{total:y?.total,average:y?.average,overallGPA:y?.overallGPA,overallPosition:y?.overallPosition,numberOnRoll:y?.numberOnRoll||y?.classSize},currentAcademicPeriod:function(e){let t=e?.report,r=e?.header,i=e?.currentAcademicPeriod||t?.currentAcademicPeriod||r?.currentAcademicPeriod||r?.academicPeriod;if(!i)return;let a=m(i.endDate),s=i.formattedEndDate||p(a);return{id:o(i.id),academicStructureId:o(i.academicStructureId),name:i.name,type:i.type,startDate:m(i.startDate),endDate:a,order:n(i.order,0)||void 0,formattedEndDate:s,label:i.label||(s?`This Academic Period Ends: ${s}`:"")}}(f),nextAcademicPeriod:function(e){let t=e?.report,r=e?.header,i=e?.nextAcademicPeriod||t?.nextAcademicPeriod||r?.nextAcademicPeriod;if(!i)return;let a=m(i.startDate),s=i.formattedStartDate||p(a);return{id:o(i.id),academicStructureId:o(i.academicStructureId),name:i.name,type:i.type,startDate:a,endDate:m(i.endDate),order:n(i.order,0)||void 0,formattedStartDate:s,label:i.label||(s?`Next Academic Period Begins: ${s}`:"")}}(f),signatures:(l=f?.report,d=f?.header,h=b(f?.header),u=c(l?.classTeacherName,l?.classTeacher?.fullName,l?.classTeacher?.name,f?.classTeacherName,f?.classTeacher?.fullName,f?.classTeacher?.name,d?.classTeacherName,d?.classTeacher?.fullName,d?.classTeacher?.name),g=c(l?.headTeacherName,l?.principalName,l?.headTeacher?.fullName,l?.headTeacher?.name,l?.principal?.fullName,l?.principal?.name,f?.headTeacherName,f?.principalName,f?.headTeacher?.fullName,f?.headTeacher?.name,f?.principal?.fullName,f?.principal?.name,d?.headTeacherName,d?.principalName,d?.headTeacher?.fullName,d?.headTeacher?.name,d?.principal?.fullName,d?.principal?.name),x=c(l?.parentName,l?.guardianName,l?.parent?.fullName,l?.parent?.name,l?.guardian?.fullName,l?.guardian?.name,f?.parentName,f?.guardianName,f?.parent?.fullName,f?.parent?.name,f?.guardian?.fullName,f?.guardian?.name,f?.student?.parentName,f?.student?.guardianName),{classTeacherName:u,headTeacherName:g,principalName:c(l?.principalName,f?.principalName),parentName:x,guardianName:x,officialSignatureImage:h.reportCardSignatureImage}),settings:v}}function f(e){return(0,a._J)(e)}function w(e){return(0,a.XR)(e)}function v(e,t){if(!t.showCurrentAcademicPeriodEnd||!e)return"";let r=t.currentAcademicPeriodEndLabel||"This Academic Period Ends",i=e.formattedEndDate||p(e.endDate);return i?`${r}: ${i}`:""}function y(e,t){if(!t.showNextAcademicPeriod||!e)return"";let r=t.nextAcademicPeriodLabel||"Next Academic Period Begins",i=e.formattedStartDate||p(e.startDate);return i?`${r}: ${i}`:""}function j(e){let t=g(e.compact?"compact":e.settings.density);return{...function(e,t="portrait"){return"Letter"===(e||"A4")?"landscape"===t?{width:"279.4mm",minHeight:"215.9mm"}:{width:"215.9mm",minHeight:"279.4mm"}:"landscape"===t?{width:"297mm",minHeight:"210mm"}:{width:"210mm",minHeight:"297mm"}}(e.settings.paperSize,e.settings.orientation),margin:"0 auto 20px",padding:t.pagePadding,boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:e.fontFamily||"Arial, sans-serif",border:"1px solid #e5e5e5",position:"relative",overflow:"hidden",pageBreakAfter:!1===e.pageBreakAfter?"auto":"always"}}function S(e){let t=g(e.compact?"compact":e.settings.density),r=e.primaryColor||"var(--primary-color)",i=h(r);return{table:{width:"100%",borderCollapse:"collapse",fontSize:t.fontSize},th:{border:"1px solid #222",padding:t.cellPadding,background:r,color:i,textAlign:"center",fontWeight:800,lineHeight:1.2},td:{border:"1px solid #222",padding:t.cellPadding,verticalAlign:"middle",lineHeight:1.25},label:{fontSize:t.smallFontSize,opacity:.72,textTransform:"uppercase",letterSpacing:.3,fontWeight:700},value:{marginTop:2,fontSize:t.fontSize+1,fontWeight:800}}}function k(e){return e?e.header?e.report?"Report data is not ready.":"Student report data is missing.":"Report header data is missing.":"Select a student, class and academic period to generate a report card."}},34205:(e,t,r)=>{r.d(t,{CZ:()=>l,Jk:()=>m,SF:()=>d,ZR:()=>c,pE:()=>p});var i=r(86106);function a(e){return null==e?"":String(e).trim()}function o(e,t=0){let r=Number(e);return Number.isFinite(r)?r:t}function n(e){return!0!==e.isDeleted&&!1!==e.active}function s(e,t,r,i="error"){return{code:e,severity:i,itemId:a(r?.id)||void 0,parentItemId:a(r?.parentItemId)||void 0,assessmentStructureId:a(r?.assessmentStructureId)||void 0,message:t}}function l(e,t,r){let o=[],n=r.find(t=>a(t.id)===e);if(!n)return[{code:"ITEM_NOT_FOUND",severity:"error",itemId:e,message:"Assessment item could not be found."}];let l=a(t);if(!l)return o;if(e===l)return o.push(s("SELF_PARENT","Assessment item cannot be its own parent.",n)),o;let d=r.find(e=>a(e.id)===l);if(!d||d.isDeleted)return o.push(s("PARENT_NOT_FOUND","Selected parent does not exist or has been deleted.",n)),o;if(a(d.assessmentStructureId)!==a(n.assessmentStructureId))return o.push(s("CROSS_STRUCTURE_PARENT","Selected parent belongs to another assessment structure.",n)),o;let c=(0,i.f5)(r);return(0,i.p_)(e,c).map(e=>a(e.item.id)).includes(l)&&o.push(s("CIRCULAR_PARENT_REFERENCE","An assessment item cannot be moved beneath one of its descendants.",n)),o}function d(e,t=!1){let r=[],i=e.entryMode??(t?"from_children":"direct"),a=e.itemType??(t?"group":"scored_item");return"computed_total"===a&&"direct"===i&&!0!==e.allowManualOverride&&r.push(s("COMPUTED_ITEM_DIRECT_ENTRY","A computed-total item should receive scores from children unless manual override is enabled.",e)),"group"===a&&"direct"===i&&!0!==e.allowChildEntry&&r.push(s("GROUP_DIRECT_ENTRY","A group item should not use direct entry unless direct parent entry is explicitly enabled.",e,"warning")),t||"from_children"!==i||r.push(s("LEAF_FROM_CHILDREN","A leaf item cannot calculate from children because it has no active children.",e)),r}function c(e,t=!1){let r=[],i=e.aggregationMode??"sum";return"best_n"===i&&(!Number.isInteger(e.bestNCount)||1>o(e.bestNCount))&&r.push(s("BEST_N_COUNT_REQUIRED","Best-N aggregation requires bestNCount of at least 1.",e)),"best_n"!==i||t||r.push(s("BEST_N_WITHOUT_CHILDREN","Best-N aggregation requires child assessment items.",e)),"custom"!==i||e.metadata||r.push(s("CUSTOM_AGGREGATION_NOT_CONFIGURED","Custom aggregation has no safe calculation configuration.",e,"warning")),null!=e.minimumRequiredChildren&&0>o(e.minimumRequiredChildren)&&r.push(s("INVALID_MINIMUM_REQUIRED_CHILDREN","Minimum required children cannot be negative.",e)),r}function m(e){let t=[],r=e.reportVisibility??"show";return["show","hide","inherit"].includes(r)||t.push(s("INVALID_REPORT_VISIBILITY",`Unsupported report visibility "${String(r)}".`,e)),"hide"===r&&!0===e.showParentOnReport&&t.push(s("CONFLICTING_REPORT_VISIBILITY","The item is hidden but showParentOnReport is enabled.",e,"warning")),t}function p(e,t){var r;let l,p=(0,i.f5)(e),h=[...p.issues],u=e.filter(n),g=new Set([null]);for(let e of u)g.add(a(e.parentItemId)||null);for(let e of g)h.push(...function(e,t){let r=t.filter(t=>n(t)&&(a(t.parentItemId)||null)===(a(e)||null));if(!r.length)return[];let i=e?t.find(t=>a(t.id)===a(e)):void 0,s=i?.aggregationMode??"weighted_sum";if(e&&"weighted_sum"!==s)return[];let l=r.reduce((e,t)=>e+o(t.contributionWeight??t.weight),0),d=e?o(i?.contributionWeight??i?.weight,100):100;return l>d+1e-4?[{code:e?"CHILD_WEIGHT_TOTAL_EXCEEDED":"ROOT_WEIGHT_TOTAL_EXCEEDED",severity:"error",parentItemId:e||void 0,assessmentStructureId:a(r[0]?.assessmentStructureId)||void 0,message:e?`Weighted children total ${l}, exceeding parent contribution ${d}.`:`Root assessment weights total ${l}, exceeding 100.`}]:Math.abs(l-d)>1e-4?[{code:e?"CHILD_WEIGHT_TOTAL_INCOMPLETE":"ROOT_WEIGHT_TOTAL_INCOMPLETE",severity:"warning",parentItemId:e||void 0,assessmentStructureId:a(r[0]?.assessmentStructureId)||void 0,message:e?`Weighted children total ${l}; expected parent contribution ${d}.`:`Root assessment weights total ${l}; the traditional flat structure expects 100.`}]:[]}(e,u)),h.push(...function(e,t){if(!e)return[];let r=t.find(t=>a(t.id)===a(e));if(!r||"sum"!==(r.aggregationMode??"sum"))return[];let i=t.filter(t=>n(t)&&a(t.parentItemId)===a(e)),l=i.reduce((e,t)=>e+o(t.maxScore),0),d=o(r.maxScore);return i.length&&Math.abs(l-d)>1e-4?[s("SUM_MAXIMUM_MISMATCH",`Child maximum scores total ${l}, while parent maximum is ${d}.`,r,"warning")]:[]}(e,u));for(let e of p.nodes)h.push(...d(e.item,e.children.length>0),...c(e.item,e.children.length>0),...m(e.item)),e.depth>5&&h.push(s("EXCESSIVE_TREE_DEPTH",`Assessment item is at depth ${e.depth}; the recommended UI maximum is 5.`,e.item,"warning")),0>=o(e.item.maxScore)&&h.push(s("INVALID_MAX_SCORE","Maximum score must be greater than zero.",e.item));if(t){let e=p.roots.reduce((e,t)=>e+o(t.item.contributionWeight??t.item.weight),0),r=o(t.totalScore,100);Math.abs(e-r)>1e-4&&h.push({code:e>r?"STRUCTURE_ROOT_WEIGHT_EXCEEDED":"STRUCTURE_ROOT_WEIGHT_INCOMPLETE",severity:e>r?"error":"warning",assessmentStructureId:a(t.id)||void 0,message:`Root assessment weight is ${e}; structure total is ${r}.`})}return r=h,l=new Set,r.filter(e=>{let t=[e.code,e.itemId??"",e.parentItemId??"",e.message].join("|");return!l.has(t)&&(l.add(t),!0)})}},42328:(e,t,r)=>{r.d(t,{kz:()=>h,f5:()=>i.f5,Am:()=>k,lj:()=>s,_J:()=>w,XR:()=>v,ZR:()=>a.ZR,pE:()=>a.pE,SF:()=>a.SF,Jk:()=>a.Jk});var i=r(86106),a=r(34205);function o(e){return null==e?"":String(e).trim()}function n(e,t=0){let r=Number(e);return Number.isFinite(r)?r:t}function s(e){let t=e.items.filter(t=>o(t.assessmentStructureId)===o(e.structureId)),r=(0,i.f5)(t),a=(0,i.DS)(r),s=[],l=[];for(let e of a){let t=o(e.item.id),a=e.children.length>0;if(!(0,i.km)(e.item,a)){l.push(t);continue}s.push({itemId:t,name:e.item.name,parentItemId:o(e.item.parentItemId)||null,pathLabels:[...e.path.slice(0,-1).map(e=>r.nodeById.get(e)?.item.name??e),e.item.name],maxScore:n(e.item.maxScore,100),contributionWeight:n(e.item.contributionWeight??e.item.weight),order:n(e.item.order),depth:e.depth,compulsory:!1!==e.item.compulsory})}let d=function(e,t){let r=new Map;for(let i of e){let e=i.parentItemId;if(!e)continue;let a=t.nodeById.get(e);if(!a)continue;let o=r.get(e);if(o){o.columnItemIds.push(i.itemId);continue}r.set(e,{itemId:e,name:a.item.name,depth:a.depth,pathLabels:a.path.map(e=>t.nodeById.get(e)?.item.name??e),columnItemIds:[i.itemId]})}return[...r.values()].sort((e,t)=>e.depth-t.depth||e.name.localeCompare(t.name))}(s,r);return{structureId:e.structureId,columns:s,groups:d,hiddenCalculatedNodes:l,warnings:r.issues}}function l(e){return Array.isArray(e)?e.map(l):e&&"object"==typeof e?Object.fromEntries(Object.entries(e).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>[e,l(t)])):e}function d(e){return l({id:e.id,assessmentStructureId:e.assessmentStructureId,parentItemId:e.parentItemId??null,level:e.level??0,path:e.path??null,name:e.name,itemType:e.itemType??"scored_item",aggregationMode:e.aggregationMode??"sum",entryMode:e.entryMode??"direct",weight:e.weight,contributionWeight:e.contributionWeight??null,maxScore:e.maxScore,bestNCount:e.bestNCount??null,minimumRequiredChildren:e.minimumRequiredChildren??null,calculationPrecision:e.calculationPrecision??2,normalizeChildrenToParentWeight:e.normalizeChildrenToParentWeight??!0,allowManualOverride:e.allowManualOverride??!1,compulsory:!1!==e.compulsory,active:!1!==e.active,isDeleted:!0===e.isDeleted,order:e.order})}function c(e){return null==e?"":String(e).trim()}function m(e,t=0){let r=Number(e);return Number.isFinite(r)?r:t}function p(e,t){let r=10**Math.max(0,t);return Math.round((e+Number.EPSILON)*r)/r}let h=Object.freeze({enabled:!0,displayMode:"item_rules",showParentItems:!0,showChildItems:!0,showCalculatedItems:!0,showGroupHeaders:!0,indentChildren:!0,flattenSingleChildGroups:!1,inheritItemVisibility:!0,includeHiddenCalculationItems:!1,maximumVisibleDepth:null,showMaximumScores:!0,showWeights:!1,showRawScores:!0,showWeightedScores:!0,showHierarchyPath:!1}),u=Object.freeze({...h,displayMode:"parents_only",showParentItems:!0,showChildItems:!1,showGroupHeaders:!0,indentChildren:!1,showWeights:!0});function g(e,t){return"boolean"==typeof e?e:t}function b(e,t){if(null===e)return null;let r=Number(e);return Number.isFinite(r)?Math.max(0,Math.floor(r)):t}function x(e,t="item_rules"){switch(e){case"item_rules":case"parents_only":case"children_only":case"parents_and_children":case"compact":return e;default:return t}}function f(e,t){let r=e?.metadata?.[t];return"boolean"==typeof r?r:void 0}function w(e,t){return{...{enabled:g(e?.showAssessmentBreakdown,h.enabled),displayMode:x(e?.assessmentHierarchyDisplay??e?.metadata?.assessmentDisplayMode,h.displayMode),showParentItems:g(e?.showAssessmentParentItems,h.showParentItems),showChildItems:g(e?.showAssessmentChildItems,h.showChildItems),showCalculatedItems:g(e?.showCalculatedAssessmentItems,h.showCalculatedItems),showGroupHeaders:g(e?.showAssessmentGroupHeaders,h.showGroupHeaders),indentChildren:g(e?.indentAssessmentChildren,h.indentChildren),flattenSingleChildGroups:g(e?.flattenSingleChildAssessmentGroups,h.flattenSingleChildGroups),inheritItemVisibility:g(f(e,"inheritAssessmentItemVisibility"),h.inheritItemVisibility),includeHiddenCalculationItems:g(f(e,"includeHiddenAssessmentCalculationItems"),h.includeHiddenCalculationItems),maximumVisibleDepth:b(e?.assessmentMaximumVisibleDepth,h.maximumVisibleDepth),showMaximumScores:g(e?.showAssessmentMaximumScores??f(e,"showAssessmentMaximumScores"),h.showMaximumScores),showWeights:g(e?.showAssessmentWeights??f(e,"showAssessmentWeights"),h.showWeights),showRawScores:g(e?.showAssessmentRawScores??f(e,"showAssessmentRawScores"),h.showRawScores),showWeightedScores:g(e?.showAssessmentWeightedScores??f(e,"showAssessmentWeightedScores"),h.showWeightedScores),showHierarchyPath:g(e?.showAssessmentHierarchyPath??f(e,"showAssessmentHierarchyPath"),h.showHierarchyPath)},...t}}function v(e,t){return w(e,{displayMode:x(e?.broadsheetAssessmentHierarchyDisplay,u.displayMode),showParentItems:!0,showChildItems:"parents_only"!==x(e?.broadsheetAssessmentHierarchyDisplay,u.displayMode),showGroupHeaders:g(e?.broadsheetShowAssessmentGroupHeaders,u.showGroupHeaders),maximumVisibleDepth:b(e?.broadsheetMaximumAssessmentDepth,u.maximumVisibleDepth),indentChildren:!1,...t})}function y(e){return null==e?"":String(e).trim()}function j(e,t=0){let r=Number(e);return Number.isFinite(r)?r:t}function S(e){return!0!==e.isDeleted&&!1!==e.active}function k(e){var t,r,o;let n,s,u,g,b,x,f,w,v,k,I,N,C,z=(t=(n=function(e){var t;let r=e.options?.precision??2,o=c(e.structure.id),n=e.items.filter(t=>c(t.assessmentStructureId)===o&&(e.options?.includeInactiveItems||!1!==t.active&&!0!==t.isDeleted)),s=(0,i.f5)(n),h=function(e){let t=new Map;for(let r of e){if(!0===r.isDeleted)continue;let e=c(r.assessmentStructureItemId);if(!e)continue;let i=t.get(e),a=m(r.updatedAt),o=m(i?.updatedAt);(!i||a>=o)&&t.set(e,r)}return t}(e.entries),u=[...(0,a.pE)(n,e.structure)],g=new Map,b=e=>{let t=e.item,i=c(t.id),a=e.children.map(b),o=t.itemType??(a.length?"group":"scored_item"),n=t.aggregationMode??"sum",l=t.entryMode??(a.length?"from_children":"direct"),d=Math.max(0,m(t.maxScore,100)),u=Math.max(0,e.parent?m(t.contributionWeight??t.weight):m(t.weight)),x=h.get(i),f=x?m(x.rawScore??x.score):null,w=null!==f&&("direct"===l||"direct_or_children"===l||!0===t.allowManualOverride),v=0,y=0,j=!1,S=!1,k=a,I=[],N=a.filter(e=>e.complete);if("best_n"===n&&a.length){let e=Math.max(1,Math.floor(m(t.bestNCount,1))),r=new Set((k=[...N].sort((e,t)=>t.normalizedPercentage-e.normalizedPercentage).slice(0,e)).map(e=>e.itemId));for(let e of a)e.selectedForBestN=r.has(e.itemId)}let C=null==t.minimumRequiredChildren?null:Math.max(0,Math.floor(m(t.minimumRequiredChildren))),z=null===C||N.length>=C;if(x?.entrySource==="override"&&!0===t.allowManualOverride&&null!==f)v=f,y=d>0?v/d*100:0,S=!0;else if(a.length&&"direct"!==l){switch(j=!0,n){case"sum":v=a.reduce((e,t)=>e+t.rawScore,0),y=d>0?v/d*100:0;break;case"weighted_sum":{let e=!1===t.normalizeChildrenToParentWeight?a.reduce((e,t)=>e+t.effectiveWeight,0):u||100,r=a.reduce((e,t)=>e+t.normalizedPercentage/100*t.effectiveWeight,0);v=(y=e>0?r/e*100:0)/100*d;break}case"average":{let e=N.length?N:a;v=(y=e.length?e.reduce((e,t)=>e+t.normalizedPercentage,0)/e.length:0)/100*d;break}case"best_n":v=(y=k.length?k.reduce((e,t)=>e+t.normalizedPercentage,0)/k.length:0)/100*d,k.length<Math.max(1,m(t.bestNCount,1))&&I.push("Not enough completed children are available for Best-N aggregation.");break;case"custom":I.push("CUSTOM_AGGREGATION_NOT_CONFIGURED"),v=0,y=0}"direct_or_children"===l&&!N.length&&w&&(v=f,y=d>0?v/d*100:0,j=!1,S=!0)}else w&&(v=f,y=d>0?v/d*100:0,S=!0);let A=!1===t.compulsory||S||(a.length?a.every(e=>!!e.complete):null!==f),T=z&&A&&(S||j||!1===t.compulsory);z||I.push(`Requires at least ${C} completed child items.`),null!==f&&f>d&&I.push(`Entered score ${f} exceeds maximum score ${d}.`);let P=y/100*u,W={itemId:i,parentItemId:c(t.parentItemId)||null,name:t.name,depth:e.depth,order:m(t.order,0),pathItemIds:[...e.path],pathLabels:[...e.parent?e.parent.path.map(e=>s.nodeById.get(e)?.item.name??e):[],t.name],itemType:o,aggregationMode:n,entryMode:l,reportVisibility:t.reportVisibility??"show",showParentOnReport:!1!==t.showParentOnReport,showChildrenOnReport:!0===t.showChildrenOnReport,rawScore:p(v,t.calculationPrecision??r),maxScore:p(d,r),normalizedPercentage:p(y,t.calculationPrecision??r),weightedScore:p(P,t.calculationPrecision??r),effectiveWeight:p(u,r),enteredDirectly:S,calculatedFromChildren:j,complete:T,warnings:I,children:a};return g.set(i,W),W},x=s.roots.map(b),f=(0,i.DS)(s).map(e=>g.get(c(e.item.id))).filter(e=>!!e),w=x.reduce((e,t)=>e+t.rawScore,0),v=x.reduce((e,t)=>e+t.maxScore,0),y=x.reduce((e,t)=>e+t.weightedScore,0),j=x.reduce((e,t)=>e+t.effectiveWeight,0);for(let e of f)for(let t of e.warnings)u.push({code:"CUSTOM_AGGREGATION_NOT_CONFIGURED"===t?t:"ASSESSMENT_CALCULATION_WARNING",severity:"warning",itemId:e.itemId,assessmentStructureId:o,message:t});return{structureId:o,roots:x,nodes:f,nodeByItemId:g,rawTotal:p(w,r),rawMaxTotal:p(v,r),weightedTotal:p(y,r),totalWeight:p(j,r),percentage:p(j>0?y/j*100:v>0?w/v*100:0,r),complete:x.every(e=>e.complete),warnings:u,treeHash:(t=e.structure,function(e){let t=0x811c9dc5;for(let r=0;r<e.length;r+=1)t^=e.charCodeAt(r),t=Math.imul(t,0x1000193);return(t>>>0).toString(16).padStart(8,"0")}(JSON.stringify(l({structure:{id:t.id,totalScore:t.totalScore??100,active:!1!==t.active,locked:!0===t.locked},items:[...n].sort((e,t)=>String(e.id).localeCompare(String(t.id))).map(d)}))))}}(e)).percentage,s=[...e.gradeRules??[]].filter(S).sort((e,t)=>Number(e.order??0)-Number(t.order??0)).find(e=>t>=Number(e.minScore)&&t<=Number(e.maxScore)),{...n,grade:s?.grade,remark:s?.remark,gpa:s?.gpa,gradeRule:s});return{...z,reportProjection:(o=(r={computation:z,items:e.items,settings:e.reportSettings}).settings,u={...h,...o},g=r.computation.structureId,b=new Map(r.items.filter(e=>!0!==e.isDeleted&&!1!==e.active&&y(e.assessmentStructureId)===g).map(e=>[y(e.id),e])),x=new Map,f=[],w=[],v=(e,t,r,i)=>{var a;let o,n=b.get(e.itemId);if(!n)return null;let s=e.children.length>0,l=!s,d=[...t,e.name],c="hide"!==(o=(a={item:n,depth:r,isParent:s,parentAllowsChildren:i,settings:u}).item.reportVisibility??"show")||a.settings.includeHiddenCalculationItems?a.depth>0&&!a.parentAllowsChildren&&"item_rules"===a.settings.displayMode?{visible:!1,source:"parent"}:a.isParent&&!1===a.item.showParentOnReport||a.depth>0&&!a.isParent&&"inherit"===a.item.reportVisibility&&!a.settings.inheritItemVisibility?{visible:!1,source:"item"}:{visible:!0,source:"inherit"===o?"parent":"show"===o?"item":"default"}:{visible:!1,source:"item"},m=u.enabled&&c.visible,p=c.source;!function(e){switch(e.mode){case"parents_only":return 0===e.depth;case"children_only":return e.isLeaf;case"parents_and_children":case"item_rules":default:return!0;case"compact":return 0===e.depth||e.isLeaf}}({mode:u.displayMode,depth:r,isParent:s,isLeaf:l})&&(m=!1,p="template"),s&&!u.showParentItems&&(m=!1,p="template"),r>0&&l&&!u.showChildItems&&(m=!1,p="template"),e.calculatedFromChildren&&!u.showCalculatedItems&&(m=!1,p="template"),null!==u.maximumVisibleDepth&&r>u.maximumVisibleDepth&&(m=!1,p="template");let h="item_rules"!==u.displayMode||!0===n.showChildrenOnReport||null==n.showChildrenOnReport&&i,g=e.children.map(e=>v(e,d,r+1,h)).filter(e=>!!e).sort((e,t)=>e.order-t.order),y={key:`${e.itemId}:${r}`,itemId:e.itemId,parentItemId:e.parentItemId,name:e.name,shortLabel:function(e,t=18){return e.length<=t?e:`${e.slice(0,Math.max(1,t-1))}…`}(e.name),pathLabels:d,depth:r,order:j(n?.order,0),itemType:e.itemType,aggregationMode:e.aggregationMode,rawScore:j(e.rawScore),maxScore:j(e.maxScore),normalizedPercentage:j(e.normalizedPercentage),weightedScore:j(e.weightedScore),effectiveWeight:j(e.effectiveWeight),enteredDirectly:e.enteredDirectly,calculatedFromChildren:e.calculatedFromChildren,complete:e.complete,isParent:s,isLeaf:l,indent:u.indentChildren&&r>0,visible:m,visibilitySource:p,children:g};return x.set(y.itemId,y),(m?f:w).push(y.itemId),y},N=(I=function(e){let t=[],r=e=>{for(let i of(e.visible&&t.push(e),e.children))r(i)};for(let t of e)r(t);return t}(k=r.computation.roots.map(e=>v(e,[],0,!0)).filter(e=>!!e).sort((e,t)=>e.order-t.order))).map(({children:e,...t})=>({...t,groupId:t.parentItemId?`assessment-group:${t.parentItemId}`:void 0,groupLabel:t.parentItemId?x.get(t.parentItemId)?.name:void 0,groupDepth:t.parentItemId?x.get(t.parentItemId)?.depth:void 0})),u.flattenSingleChildGroups&&(N=function(e){let t=new Map;for(let r of e){let e=y(r.parentItemId);e&&t.set(e,(t.get(e)??0)+1)}return e.map(e=>{let r=y(e.parentItemId);return r&&1===t.get(r)?{...e,groupId:void 0,groupLabel:void 0,groupDepth:void 0}:e})}(N)),C=function(e,t,r){if(!r.showGroupHeaders)return[];let i=new Map;for(let e of t){let t=y(e.parentItemId);if(!t)continue;let r=i.get(t)??[];r.push(e),i.set(t,r)}return e.filter(e=>e.isParent).map(e=>{let r=t.filter(t=>t.pathLabels.slice(0,-1).includes(e.name)),a=i.get(e.itemId)??[],o=r.length?r:a;return{id:`assessment-group:${e.itemId}`,itemId:e.itemId,parentItemId:e.parentItemId,label:e.name,pathLabels:e.pathLabels,depth:e.depth,order:e.order,columnItemIds:o.map(e=>e.itemId),columnSpan:o.length}}).filter(e=>e.columnSpan>0).sort((e,t)=>e.order-t.order)}(I,N,u),{structureId:g,settings:u,roots:k,rows:I,columns:N,groups:C,nodeByItemId:x,visibleItemIds:f,hiddenItemIds:w,warnings:r.computation.warnings})}}r(54486)},44253:(e,t,r)=>{r.d(t,{A:()=>l});var i=r(95155),a=r(12115),o=r(15982),n=r(94075),s=r(32242);function l({dataset:e,template:t,templateSettings:r,templateAssignment:c,settings:m,compact:p=!1,showWatermark:h=!0,pageBreakAfter:u=!0,mobilePreview:g=!0}){let b=(0,a.useMemo)(()=>{var i;let a,l=e?.template||e?.reportTemplate||e?.reportCardTemplate||e?.selectedTemplate||e?.header?.template||e?.header?.reportTemplate||e?.header?.reportCardTemplate||null,d=e?.templateSettings||e?.reportTemplateSettings||e?.reportCardTemplateSettings||e?.selectedTemplateSettings||e?.header?.templateSettings||e?.header?.reportTemplateSettings||e?.header?.reportCardTemplateSettings||null,p=e?.templateAssignment||e?.reportTemplateAssignment||e?.reportCardTemplateAssignment||e?.selectedTemplateAssignment||e?.header?.templateAssignment||e?.header?.reportTemplateAssignment||e?.header?.reportCardTemplateAssignment||null,h=t||l||null,u=m||r||d||null,g=(a=(i={dataset:e,template:h,settings:u}).dataset,i.settings?.templateCode||i.template?.code||a?.templateCode||a?.template?.code||a?.reportTemplate?.code||a?.reportCardTemplate?.code||a?.templateSettings?.templateCode||a?.reportTemplateSettings?.templateCode||a?.reportCardTemplateSettings?.templateCode||a?.header?.templateCode||a?.header?.template?.code||a?.header?.reportTemplate?.code||a?.header?.reportCardTemplate?.code||o.u_),b=(0,n.nO)(g),x=h?(0,o.ed)(h):b,f=(0,o.tH)(u,x,c||p||null),w=(0,n.FW)(f.templateCode||x.code||g),v=(0,s.Tu)(f);return{template:x,settings:f,assessmentReportSettings:v,TemplateComponent:w}},[e,t,r,c,m]);if(!e?.header||!e?.report)return(0,i.jsxs)("div",{className:"src-empty-card report-template-router-empty",children:[(0,i.jsx)("style",{children:d}),(0,s.p6)(e)]});let x=b.TemplateComponent,f={...e,assessmentReportSettings:b.assessmentReportSettings,header:{...e.header,assessmentReportSettings:b.assessmentReportSettings}};return(0,i.jsx)(x,{dataset:f,template:b.template,settings:b.settings,compact:p,showWatermark:h,pageBreakAfter:u,mobilePreview:g})}let d=`
.src-empty-card {
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 16px;
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
  font-weight: 750;
}
`},45116:(e,t,r)=>{r.d(t,{A:()=>o});var i=r(95155);r(12115);var a=r(723);function o({broadsheet:e,header:t,template:r,settings:n,compact:s=!1,showWatermark:l=!0,pageBreakAfter:d=!0,mobilePreview:c=!0,generatedAt:m,pageNumber:p,totalPages:h,className:u,emptyMessage:g}){return(0,i.jsx)(a.A,{kind:"annual",dataset:e,header:t,template:r,settings:n,compact:s,showWatermark:l,pageBreakAfter:d,mobilePreview:c,generatedAt:m,pageNumber:p,totalPages:h,className:u,emptyMessage:g})}},54486:(e,t,r)=>{r.d(t,{DI:()=>x,GJ:()=>g,NK:()=>v,aw:()=>w,ci:()=>h,d8:()=>y,ez:()=>p,l2:()=>j,uu:()=>b});var i=r(42563),a=r(59816),o=r(86106),n=r(34205);function s(e){return null==e?"":String(e).trim()}function l(e){return!0!==e.isDeleted&&!1!==e.active}async function d(e){return(await i.db.assessmentStructureItems.where("assessmentStructureId").equals(e).toArray()).filter(l)}function c(e,t){let r=s(t)||null,i=e.filter(e=>(s(e.parentItemId)||null)===r).map(e=>Number(e.order||0));return i.length?Math.max(...i)+1:1}async function m(e){let t=(0,o.f5)(e),r=(0,o._6)(t),n=i.db.assessmentStructureItems;return await i.db.transaction("rw",n,async()=>{for(let t of r){let r=e.find(e=>s(e.id)===t.itemId);if(!r)continue;let i={...r,parentItemId:t.parentItemId,level:t.level,path:t.path,order:t.order};await n.put((0,a.zk)(i,r))}}),r}async function p(e){return u({...e,parentItemId:null})}async function h(e,t){return u({...t,parentItemId:e})}async function u(e){let t=await d(e.assessmentStructureId);if(e.parentItemId&&!t.find(t=>s(t.id)===s(e.parentItemId)))throw Error("Selected parent assessment item was not found.");let r=(0,a.zk)({accountId:e.accountId,schoolId:e.schoolId,branchId:e.branchId,assessmentStructureId:e.assessmentStructureId,name:e.name.trim(),parentItemId:s(e.parentItemId)||null,level:0,path:null,itemType:e.itemType??(e.parentItemId,"scored_item"),entryMode:e.entryMode??"direct",aggregationMode:e.aggregationMode??"sum",maxScore:e.maxScore??100,weight:e.weight??0,contributionWeight:e.contributionWeight??e.weight??0,bestNCount:e.bestNCount??null,calculationPrecision:Math.min(6,Math.max(0,e.calculationPrecision??2)),normalizeChildrenToParentWeight:!1!==e.normalizeChildrenToParentWeight,minimumRequiredChildren:e.minimumRequiredChildren??null,order:c(t,e.parentItemId),compulsory:!1!==e.compulsory,allowChildEntry:!0===e.allowChildEntry,allowManualOverride:!0===e.allowManualOverride,showParentOnReport:!1!==e.showParentOnReport,showChildrenOnReport:!0===e.showChildrenOnReport,reportVisibility:e.reportVisibility??"show",active:!1!==e.active,isDeleted:!1});return await i.db.assessmentStructureItems.put(r),await m([...t,r]),r}async function g(e,t){let r=await i.db.assessmentStructureItems.get(e);if(!r)throw Error("Assessment item was not found.");let a=await d(r.assessmentStructureId),o=(0,n.CZ)(e,t,a).find(e=>"error"===e.severity);if(o)throw Error(o.message);let l=c(a.filter(t=>s(t.id)!==e),t),p=a.map(r=>s(r.id)===e?{...r,parentItemId:s(t)||null,order:l}:r);await m(p)}async function b(e,t){return f(e,t,"before")}async function x(e,t){return f(e,t,"after")}async function f(e,t,r){if(e===t)return;let a=await i.db.assessmentStructureItems.get(e),o=await i.db.assessmentStructureItems.get(t);if(!a||!o)throw Error("Assessment item or movement target was not found.");if(a.assessmentStructureId!==o.assessmentStructureId)throw Error("Items from different assessment structures cannot be reordered together.");let l=await d(a.assessmentStructureId),c=s(o.parentItemId)||null,p=(0,n.CZ)(e,c,l).find(e=>"error"===e.severity);if(p)throw Error(p.message);let h=l.filter(t=>s(t.id)!==e&&(s(t.parentItemId)||null)===c).sort((e,t)=>Number(e.order||0)-Number(t.order||0)),u=h.findIndex(e=>s(e.id)===t);h.splice(Math.max(0,"before"===r?u:u+1),0,{...a,parentItemId:c});let g=new Map(h.map((e,t)=>[s(e.id),t+1])),b=l.map(t=>{let r=g.get(s(t.id));return void 0===r?t:{...t,parentItemId:s(t.id)===e?c:t.parentItemId,order:r}});await m(b)}async function w(e){let t=await i.db.assessmentStructureItems.get(e);if(!t)throw Error("Assessment item was not found.");let r=(await d(t.assessmentStructureId)).filter(e=>(s(e.parentItemId)||null)===(s(t.parentItemId)||null)).sort((e,t)=>Number(e.order||0)-Number(t.order||0)),a=r.findIndex(t=>s(t.id)===e);if(a<=0)throw Error("The first sibling cannot be indented.");await g(e,s(r[a-1].id))}async function v(e){let t=await i.db.assessmentStructureItems.get(e);if(!t)throw Error("Assessment item was not found.");let r=s(t.parentItemId);if(!r)throw Error("Root assessment items cannot be outdented.");if(!await i.db.assessmentStructureItems.get(r))throw Error("Parent assessment item was not found.");await x(e,r)}async function y(e){let t=await i.db.assessmentStructureItems.get(e);if(!t)return;let r=await d(t.assessmentStructureId),n=(0,o.f5)(r),l=[t,...(0,o.p_)(e,n).map(e=>e.item)];await i.db.transaction("rw",i.db.assessmentStructureItems,async()=>{for(let e of l)await i.db.assessmentStructureItems.put((0,a.T8)(e))});let c=r.filter(e=>!l.some(t=>s(t.id)===s(e.id)));c.length&&await m(c)}async function j(e){let t=await i.db.assessmentStructures.get(e);if(!t)throw Error("Assessment structure was not found.");let[r,o]=await Promise.all([i.db.assessmentStructureItems.where("assessmentStructureId").equals(e).toArray(),i.db.assessmentEntries.where("assessmentStructureId").equals(e).count()]);if(o>0)throw Error("This assessment system has score entries and cannot be deleted.");await i.db.transaction("rw",i.db.assessmentStructures,i.db.assessmentStructureItems,async()=>{for(let e of r)await i.db.assessmentStructureItems.put((0,a.T8)(e));await i.db.assessmentStructures.put((0,a.T8)(t))})}},55753:(e,t,r)=>{function i(e){let t=Number(e);return Number.isFinite(t)?t:0}function a(e,t=2){return Number(e.toFixed(t))}function o(e){let t=e.filter(e=>Number.isFinite(e));return t.length?t.reduce((e,t)=>e+t,0)/t.length:0}function n(...e){for(let t of e)if("string"==typeof t&&t.trim())return t.trim();return""}function s(e){return null==e?"":String(e)}function l(...e){for(let t of e){if(null==t)continue;let e=String(t).trim();if(e)return e}}function d(e){return Array.from(new Set(e.filter(e=>"string"==typeof e&&e.trim().length>0)))}function c(...e){for(let t of e){let e=Number(t);if(Number.isFinite(e))return e}}function m(e){let t=e.filter(e=>Number.isFinite(e));if(t.length<2)return"none";let r=t[0],i=t[t.length-1]-r;return 1>Math.abs(i)?"stable":i>0?"up":"down"}function p(e,t){switch(t){case"alphabetical":return[...e].sort((e,t)=>e.studentName.localeCompare(t.studentName));case"admission-number":return[...e].sort((e,t)=>(e.admissionNumber||"").localeCompare(t.admissionNumber||""));case"average":return[...e].sort((e,t)=>i(t.average)-i(e.average));default:return[...e].sort((e,t)=>{let r=e.position||999999,a=t.position||999999;return r!==a?r-a:i(t.average)-i(e.average)})}}function h(e){return{schoolMap:new Map(e.schools.map(e=>[e.id,e])),branchMap:new Map(e.branches.map(e=>[e.id,e])),schoolBranchSettingMap:new Map(e.schoolBranchSettings.map(e=>[e.branchId,e])),academicStructureMap:new Map(e.academicStructures.map(e=>[e.id,e])),academicPeriodMap:new Map(e.academicPeriods.map(e=>[e.id,e])),studentMap:new Map(e.students.map(e=>[e.id,e])),classMap:new Map(e.classes.map(e=>[e.id,e])),subjectMap:new Map(e.subjects.map(e=>[e.id,e])),teacherMap:new Map(e.teachers.map(e=>[e.id,e])),parentMap:new Map(e.parents.map(e=>[e.id,e]))}}function u(e){return!!(e&&!e.isDeleted&&!1!==e.active)}function g(e,t){if(!t)return 0;let r=e.academicPeriods.find(e=>e.id===t);return i(r?.order)}function b(e,t){if(t)return e.find(e=>e.id===t&&u(e))}function x(e){return e.reportData||{}}function f(e){let t=x(e);return t.report||t.studentReport||t.computedReport||t.computedStudentReport||t}function w(e){let t,r,o,d=f(e),m=c(e.total,d.total,d.cumulativeTotal)||0,p=c(e.average,d.average,d.cumulativeAverage)||0,h=(t=f(e),r=x(e),Array.isArray(o=t.subjectResults||t.subjects||t.reportItems||r.subjectResults||r.subjects||r.reportItems||[])?o:[]).map(e=>{let t;return t=c(e.percentage,e.average,e.totalPercentage,e.score,e.weightedTotal)||0,{subjectId:l(e.subjectId),classSubjectId:l(e.classSubjectId),subjectName:n(e.subjectName,e.name,e.title,e.shortName)||"Subject",subjectCode:n(e.subjectCode,e.code),teacherName:n(e.teacherName,e.teacher?.fullName),total:c(e.total,e.rawTotal),average:c(e.average),weightedTotal:c(e.weightedTotal),percentage:a(t,2),grade:n(e.grade),remark:n(e.remark),gpa:c(e.gpa),position:c(e.position,e.subjectPosition),raw:e}});return{snapshotId:s(e.id),schoolId:e.schoolId,branchId:e.branchId,studentId:e.studentId,classId:e.classId,academicStructureId:e.academicStructureId,academicPeriodId:e.academicPeriodId,academicYear:e.academicYear,term:e.term,snapshotType:e.snapshotType,total:a(m,2),average:a(p,2),position:c(e.position,d.overallPosition,d.position),gpa:c(d.overallGPA,d.gpa),recommendation:function(e){if("promote"===e||"repeat"===e||"graduate"===e)return e}(e.recommendation),promotedToClassId:e.promotedToClassId,attendance:function(e){let t=f(e).attendance||x(e).attendance;if(t)return{totalDays:i(t.totalDays),presentDays:i(t.presentDays),absentDays:i(t.absentDays),lateDays:i(t.lateDays),attendancePercent:i(t.attendancePercent)}}(e),subjectResults:h,reportData:d,rawSnapshot:e}}function v(e,t){return e.studentReportSnapshots.filter(e=>(!!t.includeDeletedSnapshots||!e.isDeleted)&&(!t.branchId||e.branchId===t.branchId)&&(!t.academicStructureId||e.academicStructureId===t.academicStructureId)&&(!t.academicPeriodId||e.academicPeriodId===t.academicPeriodId)&&(!t.classId||e.classId===t.classId)&&(!t.studentId||e.studentId===t.studentId)&&("all"===t.snapshotType||e.snapshotType===t.snapshotType)&&("manual"!==e.snapshotType||!1!==t.includeManualSnapshots)&&("terminal"!==e.snapshotType||!1!==t.includeTerminalSnapshots)&&("promotion"!==e.snapshotType||!1!==t.includePromotionRecords)&&(!t.academicYear||e.academicYear===t.academicYear)&&(!t.fromAcademicYear||!e.academicYear||!(e.academicYear<t.fromAcademicYear))&&(!t.toAcademicYear||!e.academicYear||!(e.academicYear>t.toAcademicYear))&&(!t.decision||"all"===t.decision||e.recommendation===t.decision)&&!0).sort((e,t)=>{let r=(e.academicYear||"").localeCompare(t.academicYear||"");return 0!==r?r:s(e.academicPeriodId).localeCompare(s(t.academicPeriodId))})}function y(e,t){return t.includePromotionRecords?e.studentPromotions.filter(e=>!e.isDeleted&&(!t.branchId||e.branchId===t.branchId)&&(!t.studentId||e.studentId===t.studentId)&&(!t.classId||e.fromClassId===t.classId||e.toClassId===t.classId)&&(!t.academicStructureId||e.fromAcademicStructureId===t.academicStructureId||e.toAcademicStructureId===t.academicStructureId)&&(!t.academicPeriodId||e.fromAcademicPeriodId===t.academicPeriodId||e.toAcademicPeriodId===t.academicPeriodId)&&(!t.decision||"all"===t.decision||e.finalDecision===t.decision)&&!0):[]}function j(e,t){let r=h(e),i=r.academicStructureMap.get(t.academicStructureId),a=r.academicPeriodMap.get(t.academicPeriodId),o=r.classMap.get(t.classId),n=t.promotedToClassId?r.classMap.get(t.promotedToClassId):void 0;return{academicStructureId:t.academicStructureId,academicStructureName:i?.name,academicPeriodId:t.academicPeriodId,academicPeriodName:a?.name||t.term||"Academic Period",academicPeriodOrder:a?.order,academicYear:t.academicYear,term:t.term,classId:t.classId,className:o?.name||"Class",snapshotId:t.snapshotId,snapshotType:t.snapshotType,total:t.total,average:t.average,gpa:t.gpa,position:t.position,recommendation:t.recommendation,promotedToClassId:t.promotedToClassId,promotedToClassName:n?.name,attendance:t.attendance,subjectResults:t.subjectResults}}function S(e){let t=new Map;return e.forEach(e=>{e.subjectResults.forEach(r=>{let i=r.subjectId?`subject-${r.subjectId}`:`name-${r.subjectName.toLowerCase().trim()}`;t.has(i)||t.set(i,{subjectId:r.subjectId,subjectName:r.subjectName,subjectCode:r.subjectCode,periods:[],average:0,highest:0,lowest:0,latest:void 0,trend:"none"}),t.get(i).periods.push({academicYear:e.academicYear,academicPeriodId:e.academicPeriodId,academicPeriodName:e.academicPeriodName,classId:e.classId,className:e.className,percentage:r.percentage,grade:r.grade,remark:r.remark,gpa:r.gpa,position:r.position})})}),Array.from(t.values()).map(e=>{let t=e.periods.map(e=>e.percentage);return{...e,average:a(o(t),2),highest:a(t.length?Math.max(...t):0,2),lowest:a(t.length?Math.min(...t):0,2),latest:t[t.length-1],trend:m(t)}}).sort((e,t)=>e.subjectName.localeCompare(t.subjectName))}function k(e,t,r){let i=h(e);return y(e,{...r,studentId:t}).map(e=>{let t=i.classMap.get(e.fromClassId),r=e.toClassId?i.classMap.get(e.toClassId):void 0,a=i.academicStructureMap.get(e.fromAcademicStructureId),o=e.toAcademicStructureId?i.academicStructureMap.get(e.toAcademicStructureId):void 0,n=i.academicPeriodMap.get(e.fromAcademicPeriodId),s=e.toAcademicPeriodId?i.academicPeriodMap.get(e.toAcademicPeriodId):void 0;return{id:`promotion-${e.id||`${e.studentId}-${e.fromClassId}`}`,studentId:e.studentId,fromClassId:e.fromClassId,fromClassName:t?.name,toClassId:e.toClassId,toClassName:r?.name,fromAcademicStructureId:e.fromAcademicStructureId,fromAcademicStructureName:a?.name,toAcademicStructureId:e.toAcademicStructureId,toAcademicStructureName:o?.name,fromAcademicPeriodId:e.fromAcademicPeriodId,fromAcademicPeriodName:n?.name,toAcademicPeriodId:e.toAcademicPeriodId,toAcademicPeriodName:s?.name,average:e.average,recommendation:e.recommendation,finalDecision:e.finalDecision,snapshotId:e.snapshotId,note:e.note,dateLabel:n?.name||a?.name,rawPromotion:e}}).sort((e,t)=>s(e.fromAcademicPeriodId).localeCompare(s(t.fromAcademicPeriodId)))}function I(e,t,r){if(!e?.id)return e?.parentName;let i=r.find(t=>!t.isDeleted&&t.studentId===e.id&&!0===t.isPrimary)||r.find(t=>!t.isDeleted&&t.studentId===e.id),a=i?t.find(e=>e.id===i.parentId&&!e.isDeleted):void 0;return a?.fullName||e.parentName}function N(e,t,r){let n,l=h(e),c=l.studentMap.get(r);if(!c||c.isDeleted)return;let p=v(e,{...t,studentId:r}).map(e=>w(e)).map(t=>j(e,t)),u=(n=new Map,p.forEach(e=>{let t=e.academicYear||"Unspecified Year";n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n.entries()).map(([e,t])=>{let r=[...t].sort((e,t)=>i(e.academicPeriodOrder)-i(t.academicPeriodOrder)),n=r.map(e=>e.average),s=r.map(e=>e.gpa).filter(e=>null!=e),l=r[r.length-1];return{academicYear:e,periods:r,totalPeriods:r.length,totalSubjects:d(r.flatMap(e=>e.subjectResults.map(e=>e.subjectId))).length,total:a(r.reduce((e,t)=>e+t.total,0),2),average:a(o(n),2),gpa:s.length?a(o(s),2):void 0,highestAverage:a(n.length?Math.max(...n):0,2),lowestAverage:a(n.length?Math.min(...n):0,2),trend:m(n),finalDecision:l?.recommendation,recommendation:l?.recommendation}})),g=S(p),b=k(e,r,t),x=p.map(e=>e.average),f=p.map(e=>e.gpa).filter(e=>null!=e),y=p[p.length-1],N=c.currentClassId?l.classMap.get(c.currentClassId):y?.classId?l.classMap.get(y.classId):void 0;return{studentId:s(c.id),studentName:c.fullName,admissionNumber:c.admissionNumber,gender:c.gender,studentPhoto:c.photo,currentClassId:N?.id,currentClassName:N?.name,parentName:I(c,e.parents,e.studentParents),guardianName:I(c,e.parents,e.studentParents),periods:p,academicYears:u,subjectHistories:g,progression:b,totalPeriods:p.length,totalSubjects:g.length,cumulativeTotal:a(p.reduce((e,t)=>e+t.total,0),2),cumulativeAverage:a(o(x),2),cumulativeGPA:f.length?a(o(f),2):void 0,highestAverage:a(x.length?Math.max(...x):0,2),lowestAverage:a(x.length?Math.min(...x):0,2),latestAverage:y?.average,latestPosition:y?.position,latestDecision:y?.recommendation,overallTrend:m(x)}}function C(e,t){let r=h(e),i=p(y(e,t).map(e=>{let t=r.studentMap.get(e.studentId),i=r.classMap.get(e.fromClassId),a=e.toClassId?r.classMap.get(e.toClassId):void 0;return{studentId:e.studentId,studentName:t?.fullName||"Unknown Student",admissionNumber:t?.admissionNumber,fromClassId:e.fromClassId,fromClassName:i?.name,toClassId:e.toClassId,toClassName:a?.name,average:e.average,recommendation:e.recommendation,finalDecision:e.finalDecision,snapshotId:e.snapshotId,note:e.note}}),t.sortMode),n=i.map(e=>e.average).filter(e=>null!=e),s=i.filter(e=>"promote"===e.finalDecision).length,l=i.filter(e=>"repeat"===e.finalDecision).length,d=i.filter(e=>"graduate"===e.finalDecision).length;return{rows:i,totalStudents:i.length,promoteCount:s,repeatCount:l,graduateCount:d,promotionRate:i.length?a(s/i.length*100,1):0,repeatRate:i.length?a(l/i.length*100,1):0,graduationRate:i.length?a(d/i.length*100,1):0,averageScore:a(o(n),2)}}function z(e,t){var r,i,n,c;let x,f,I,z,A,T,P,W,R,B,L,M,$,H,D,F,E,G,O,_,Y,V,U,Z,K,X,q,J,Q,ee,et,er,ei,ea,eo,en,es,el,ed,ec,em,ep=(M=e.studentReportSnapshots.filter(e=>(!!t.includeDeletedSnapshots||!e.isDeleted)&&(!t.branchId||e.branchId===t.branchId)&&(!t.academicStructureId||e.academicStructureId===t.academicStructureId)&&(!t.academicPeriodId||e.academicPeriodId===t.academicPeriodId)&&(!t.classId||e.classId===t.classId)&&(!t.studentId||e.studentId===t.studentId)&&(!t.academicYear||e.academicYear===t.academicYear)&&!0),$=[...M].sort((t,r)=>{let i=(t.academicYear||"").localeCompare(r.academicYear||"");if(0!==i)return i;let a=g(e,t.academicPeriodId)-g(e,r.academicPeriodId);return 0!==a?a:s(t.id).localeCompare(s(r.id))}).at(-1),H=e.studentPromotions.find(e=>!e.isDeleted&&(!t.branchId||e.branchId===t.branchId)&&(!t.studentId||e.studentId===t.studentId)),D=l(t.branchId,$?.branchId,H?.branchId,1===e.branches.length?e.branches[0]?.id:void 0),F=b(e.branches,D)||e.branches.find(e=>u(e)),E=l(F?.schoolId,$?.schoolId,1===e.schools.length?e.schools[0]?.id:void 0),G=b(e.schools,E)||e.schools.find(e=>u(e)),O=l(t.academicStructureId,$?.academicStructureId,H?.toAcademicStructureId,H?.fromAcademicStructureId),_=b(e.academicStructures,O)||e.academicStructures.find(e=>!(!u(e)||F?.id&&e.branchId&&e.branchId!==F.id)),Y=l(t.academicPeriodId,$?.academicPeriodId,H?.toAcademicPeriodId,H?.fromAcademicPeriodId),V=b(e.academicPeriods,Y)||e.academicPeriods.find(e=>!(!u(e)||F?.id&&e.branchId&&e.branchId!==F.id||_?.id&&e.academicStructureId!==_.id)),U=l(t.classId,$?.classId,H?.toClassId,H?.fromClassId),Z=b(e.classes,U)||e.classes.find(e=>!(!u(e)||F?.id&&e.branchId&&e.branchId!==F.id)),K=e.schoolBranchSettings.find(e=>F?.id&&e.branchId===F.id&&!e.isDeleted)||e.schoolBranchSettings.find(e=>D&&e.branchId===D&&!e.isDeleted)||(1===e.schoolBranchSettings.length?e.schoolBranchSettings.find(e=>!e.isDeleted):void 0),X={schoolName:G?.name||F?.name||"School Name",motto:G?.motto,logo:K?.logo||F?.logo||G?.logo,address:F?.address??G?.address??void 0,phone:F?.phone||G?.phone,email:F?.email||G?.email,website:G?.website,branchName:F?.name,branchAddress:F?.address??void 0,primaryColor:K?.primaryColor||"var(--primary-color)",fontFamily:K?.fontFamily,reportCardBackgroundImage:K?.reportCardBackgroundImage,reportCardWatermark:K?.reportCardWatermark,reportCardSignatureImage:K?.reportCardSignatureImage},{school:G,branch:F,academicStructure:_,academicPeriod:V,classData:Z,schoolBranchSetting:K,branding:X}),eh=v(e,t).map(e=>w(e)),eu=t.studentId&&"student-transcript"===t.mode?N(e,t,t.studentId):void 0,eg="multi-period-report"===t.mode?function(e,t,r){if(!t.studentId)return;let i=N(e,t,t.studentId);if(!i)return;let a=i.periods[i.periods.length-1];return{header:r,studentId:i.studentId,studentName:i.studentName,admissionNumber:i.admissionNumber,gender:i.gender,studentPhoto:i.studentPhoto,classId:a?.classId||i.currentClassId,className:a?.className||i.currentClassName,periods:i.periods,subjects:S(i.periods).map(e=>{let t=e.periods.map(e=>e.percentage),r=e.periods[e.periods.length-1];return{subjectId:e.subjectId,subjectName:e.subjectName,subjectCode:e.subjectCode,periodScores:e.periods.map(e=>({academicPeriodId:e.academicPeriodId,academicPeriodName:e.academicPeriodName,academicYear:e.academicYear,percentage:e.percentage,grade:e.grade,remark:e.remark,position:e.position})),average:e.average,bestScore:e.highest,latestScore:e.latest||0,finalGrade:r?.grade,finalRemark:r?.remark,trend:m(t)}}),total:i.cumulativeTotal,average:i.cumulativeAverage,gpa:i.cumulativeGPA,position:a?.position,attendance:a?.attendance,recommendation:i.latestDecision}}(e,t,ep):void 0,eb="annual-broadsheet"===t.mode?(n=e,c=t,z=h(n),f=[...T=d((A=v(n,c).map(e=>w(e))).map(e=>e.studentId)).map(e=>{let t=z.studentMap.get(e),r=A.filter(t=>t.studentId===e).map(e=>j(n,e)),i=r.map(e=>e.average),s=r.map(e=>e.gpa).filter(e=>null!=e),l=r[r.length-1],d=y(n,{...c,studentId:e})[0];return{studentId:e,studentName:t?.fullName||"Unknown Student",admissionNumber:t?.admissionNumber,classId:l?.classId||t?.currentClassId,className:l?.className||(t?.currentClassId?z.classMap.get(t.currentClassId)?.name:void 0),subjects:S(r).map(e=>{let t=e.periods[e.periods.length-1];return{subjectId:e.subjectId,subjectName:e.subjectName,periodScores:e.periods.map(e=>({academicPeriodId:e.academicPeriodId,academicPeriodName:e.academicPeriodName,percentage:e.percentage,grade:e.grade})),average:e.average,grade:t?.grade,remark:t?.remark}}),total:a(r.reduce((e,t)=>e+t.total,0),2),average:a(o(i),2),gpa:s.length?a(o(s),2):void 0,position:void 0,periodsCount:r.length,subjectsCount:S(r).length,recommendation:l?.recommendation||d?.recommendation,finalDecision:d?.finalDecision}}).filter(e=>!c.classId||e.classId===c.classId)].sort((e,t)=>t.average-e.average),I=0,f.forEach((e,t)=>{let r=x===e.average?I:t+1;e.position=r,x=e.average,I=r}),W=(P=p(T,c.sortMode)).map(e=>e.average),R=new Map,P.forEach(e=>{e.subjects.forEach(e=>{let t=e.subjectId?`subject-${e.subjectId}`:`name-${e.subjectName.toLowerCase()}`;if(!R.has(t)){let r=e.subjectId?z.subjectMap.get(e.subjectId):void 0;R.set(t,{subjectId:e.subjectId,subjectName:e.subjectName,subjectCode:r?.code,shortName:r?.code||e.subjectName.slice(0,4).toUpperCase()})}})}),B=c.classId?z.classMap.get(c.classId):void 0,L=c.academicStructureId?z.academicStructureMap.get(c.academicStructureId):void 0,{classId:c.classId,className:B?.name,academicYear:c.academicYear,academicStructureId:c.academicStructureId,academicStructureName:L?.name,periodIds:d(A.map(e=>e.academicPeriodId)),periodNames:Array.from(new Set(A.map(e=>z.academicPeriodMap.get(e.academicPeriodId)?.name||e.term||"Period"))),subjectColumns:Array.from(R.values()).sort((e,t)=>e.subjectName.localeCompare(t.subjectName)),students:P,totalStudents:P.length,totalSubjects:R.size,totalPeriods:d(A.map(e=>e.academicPeriodId)).length,highestAverage:a(W.length?Math.max(...W):0,2),lowestAverage:a(W.length?Math.min(...W):0,2),classAverage:a(o(W),2),promotionCount:P.filter(e=>"promote"===e.finalDecision).length,repeatCount:P.filter(e=>"repeat"===e.finalDecision).length,graduateCount:P.filter(e=>"graduate"===e.finalDecision).length}):void 0,ex="subject-history"===t.mode?function(e,t){if(!t.subjectId)return;let r=h(e),i=r.subjectMap.get(t.subjectId),n=v(e,t).map(e=>w(e)),s=[];d(n.map(e=>e.studentId)).forEach(i=>{let l=r.studentMap.get(i),d=[];if(n.filter(e=>e.studentId===i).forEach(r=>{let i=j(e,r),a=i.subjectResults.find(e=>e.subjectId===t.subjectId);a&&d.push({academicYear:i.academicYear,academicPeriodId:i.academicPeriodId,academicPeriodName:i.academicPeriodName,percentage:a.percentage,grade:a.grade,position:a.position})}),!d.length)return;let c=d.map(e=>e.percentage),p=d[d.length-1];s.push({studentId:i,studentName:l?.fullName||"Unknown Student",admissionNumber:l?.admissionNumber,classId:l?.currentClassId,className:l?.currentClassId?r.classMap.get(l.currentClassId)?.name:void 0,periods:d,average:a(o(c),2),highest:a(c.length?Math.max(...c):0,2),lowest:a(c.length?Math.min(...c):0,2),latest:p?.percentage,trend:m(c)})});let l=p(s,t.sortMode),c=l.map(e=>e.average),u=t.classId?r.classMap.get(t.classId):void 0;return{subjectId:i?.id||t.subjectId,subjectName:i?.name||"Subject",subjectCode:i?.code,classId:t.classId,className:u?.name,academicYear:t.academicYear,students:l,totalStudents:l.length,totalPeriods:d(l.flatMap(e=>e.periods.map(e=>e.academicPeriodId))).length,highestAverage:a(c.length?Math.max(...c):0,2),lowestAverage:a(c.length?Math.min(...c):0,2),subjectAverage:a(o(c),2),improvingCount:l.filter(e=>"up"===e.trend).length,decliningCount:l.filter(e=>"down"===e.trend).length,stableCount:l.filter(e=>"stable"===e.trend).length}}(e,t):void 0,ef="promotion-summary"===t.mode?C(e,t):C(e,{...t,decision:"all"}),ew="progression-timeline"===t.mode&&t.studentId?k(e,t.studentId,t):void 0,ev=(r={studentTranscript:eu,annualBroadsheet:eb,subjectHistory:ex,promotionSummary:ef},q=eh.map(e=>e.average),J=r.promotionSummary,Q=r.annualBroadsheet?.totalStudents||r.subjectHistory?.totalStudents||+!!r.studentTranscript,ee=r.annualBroadsheet?.totalPeriods||r.studentTranscript?.totalPeriods||r.subjectHistory?.totalPeriods||d(eh.map(e=>e.academicPeriodId)).length,et=r.annualBroadsheet?.totalSubjects||r.studentTranscript?.totalSubjects||d(eh.flatMap(e=>e.subjectResults.map(e=>e.subjectId))).length,er=J?.promoteCount||r.annualBroadsheet?.promotionCount||0,ei=J?.repeatCount||r.annualBroadsheet?.repeatCount||0,eo=er+ei+(ea=J?.graduateCount||r.annualBroadsheet?.graduateCount||0),{totalStudents:Q,totalSnapshots:eh.length,totalPeriods:ee,totalSubjects:et,cumulativeAverage:r.studentTranscript?.cumulativeAverage||r.annualBroadsheet?.classAverage||r.subjectHistory?.subjectAverage||a(o(q),2),highestAverage:r.studentTranscript?.highestAverage||r.annualBroadsheet?.highestAverage||r.subjectHistory?.highestAverage||a(q.length?Math.max(...q):0,2),lowestAverage:r.studentTranscript?.lowestAverage||r.annualBroadsheet?.lowestAverage||r.subjectHistory?.lowestAverage||a(q.length?Math.min(...q):0,2),promotionCount:er,repeatCount:ei,graduateCount:ea,promotionRate:eo?a(er/eo*100,1):0,repeatRate:eo?a(ei/eo*100,1):0,graduationRate:eo?a(ea/eo*100,1):0,improvingCount:r.subjectHistory?.improvingCount||r.studentTranscript?.subjectHistories.filter(e=>"up"===e.trend).length||0,decliningCount:r.subjectHistory?.decliningCount||r.studentTranscript?.subjectHistories.filter(e=>"down"===e.trend).length||0,stableCount:r.subjectHistory?.stableCount||r.studentTranscript?.subjectHistories.filter(e=>"stable"===e.trend).length||0}),ey=(en=[],t.branchId||en.push("No active branch is selected."),eh.length||en.push("No student report snapshots were found for the selected filters."),"student-transcript"!==t.mode||t.studentId||en.push("Select a student to generate a cumulative transcript."),"multi-period-report"!==t.mode||t.studentId||en.push("Select a student to generate a multi-period report."),"annual-broadsheet"!==t.mode||t.classId||en.push("Select a class to generate an annual cumulative broadsheet."),"subject-history"!==t.mode||t.subjectId||en.push("Select a subject to generate longitudinal subject analytics."),(es=eh.filter(e=>!e.subjectResults.length)).length&&en.push(`${es.length} snapshot(s) do not contain subject result details.`),el=y(e,t),t.includePromotionRecords&&!el.length&&("promotion-summary"===t.mode||"progression-timeline"===t.mode)&&en.push("No promotion records were found for the selected filters."),en),ej=(ec=Number.isNaN((ed=(i={header:ep,transcript:eu}).generatedAt?new Date(i.generatedAt):new Date).getTime())?new Date().toISOString():ed.toISOString(),em=i.transcript,{header:i.header,transcript:em,generatedAt:ec,student:em?{studentId:em.studentId,studentName:em.studentName,admissionNumber:em.admissionNumber,gender:em.gender,currentClassName:em.currentClassName,studentPhoto:em.studentPhoto,parentName:em.parentName,guardianName:em.guardianName}:void 0,summary:em?{totalPeriods:em.totalPeriods,totalSubjects:em.totalSubjects,cumulativeTotal:em.cumulativeTotal,cumulativeAverage:em.cumulativeAverage,cumulativeGPA:em.cumulativeGPA,cumulativePosition:em.latestPosition,highestAverage:em.highestAverage,lowestAverage:em.lowestAverage,latestAverage:em.latestAverage,latestPosition:em.latestPosition,latestDecision:em.latestDecision,overallTrend:em.overallTrend}:void 0});return{header:ep,studentTranscript:eu,cumulativeTranscriptDataset:ej,multiPeriodReport:eg,annualBroadsheet:eb,subjectHistory:ex,promotionSummary:ef,progressionTimeline:ew,analytics:ev,warnings:ey}}r.d(t,{DB:()=>z,Wy:()=>N})},69792:(e,t,r)=>{r.d(t,{Tj:()=>eh,Xc:()=>f,JQ:()=>v,ou:()=>l,Tn:()=>eb,nE:()=>eu,av:()=>eg,BV:()=>b,J9:()=>g});var i=r(95155),a=r(12115),o=r(42328);let n="broadsheet_classic",s={reportType:"subject_broadsheet",templateCode:n,layoutKey:n,templateName:"Classic Broadsheet",paperSize:"A4",orientation:"landscape",density:"compact",showBroadsheetLogo:!0,showBroadsheetWatermark:!1,showBroadsheetGeneratedDate:!0,showBroadsheetPageNumber:!0,showBroadsheetSignatures:!1,showBroadsheetSummary:!0,showBroadsheetStatistics:!0,showBroadsheetStudentPhoto:!1,showBroadsheetAssessmentBreakdown:!0,broadsheetAssessmentHierarchyDisplay:"parents_only",broadsheetShowAssessmentGroupHeaders:!0,broadsheetMaximumAssessmentDepth:null,showAssessmentParentItems:!0,showAssessmentChildItems:!1,showCalculatedAssessmentItems:!0,indentAssessmentChildren:!0,showAssessmentMaximumScores:!0,showAssessmentWeights:!1,showAssessmentRawScores:!0,showAssessmentWeightedScores:!0,showAssessmentHierarchyPath:!1,showBroadsheetWeightedTotal:!0,showBroadsheetPercentage:!0,showBroadsheetGrade:!0,showBroadsheetRemark:!0,showBroadsheetGPA:!0,showBroadsheetPosition:!0,showBroadsheetHighestScore:!0,showBroadsheetLowestScore:!0,showBroadsheetClassAverage:!0,showBroadsheetSubjectScores:!0,showBroadsheetSubjectGrades:!1,showBroadsheetTotal:!0,showBroadsheetAverage:!0,showBroadsheetClassPosition:!0,showBroadsheetAttendance:!0,showBroadsheetClassHighestAverage:!0,showBroadsheetClassLowestAverage:!0,showBroadsheetPeriodScores:!0,showBroadsheetAnnualAverage:!0,showBroadsheetAnnualGPA:!0,showBroadsheetAnnualPosition:!0,showBroadsheetTrend:!0,showBroadsheetPromotionDecision:!0,showBroadsheetBestPeriod:!0,showBroadsheetLatestPeriod:!0,broadsheetTitleLabel:"Broadsheet",broadsheetGeneratedDateLabel:"Generated",broadsheetFooterText:"Official academic broadsheet generated by Eleeveon Schools.",studentColumnLabel:"Student",admissionNumberColumnLabel:"Admission No.",positionColumnLabel:"Position",gradeColumnLabel:"Grade",remarkColumnLabel:"Remark"};function l(...e){for(let t of e){if(null==t)continue;let e=String(t).trim();if(e)return e}return""}function d(e,t=1,r="-"){let i=Number(e);return Number.isFinite(i)?i.toFixed(t):r}function c(e,t=1,r="-"){let i=d(e,t,r);return i===r?r:`${i}%`}function m(e){if(!e||!Number.isFinite(e))return"-";let t=e%100;if(t>=11&&t<=13)return`${e}th`;let r=e%10;return 1===r?`${e}st`:2===r?`${e}nd`:3===r?`${e}rd`:`${e}th`}function p(e){if(null==e||""===e)return"";let t=e instanceof Date?e:new Date(e);return Number.isNaN(t.getTime())?String(e):new Intl.DateTimeFormat("en",{year:"numeric",month:"short",day:"2-digit"}).format(t)}function h(e){return String(e||"").trim().toLowerCase().replace(/[\s-]+/g,"_").replace(/[^a-z0-9_]/g,"")}function u(e){return"class"===e?"Class Broadsheet":"annual"===e?"Annual Broadsheet":"Subject Broadsheet"}function g(e){let{kind:t,settings:r,template:i}=e,a=l(i?.code,i?.templateCode,i?.layoutKey,i?.templateKey,r?.templateCode,r?.layoutKey,r?.templateKey,n)||n,d=(0,o.XR)(r);return{...s,...r||{},broadsheetAssessmentHierarchyDisplay:d.displayMode,broadsheetShowAssessmentGroupHeaders:d.showGroupHeaders,broadsheetMaximumAssessmentDepth:d.maximumVisibleDepth,showAssessmentParentItems:d.showParentItems,showAssessmentChildItems:d.showChildItems,showCalculatedAssessmentItems:d.showCalculatedItems,indentAssessmentChildren:d.indentChildren,showAssessmentMaximumScores:d.showMaximumScores,showAssessmentWeights:d.showWeights,showAssessmentRawScores:d.showRawScores,showAssessmentWeightedScores:d.showWeightedScores,showAssessmentHierarchyPath:d.showHierarchyPath,reportType:"class"===t?"class_broadsheet":"annual"===t?"annual_broadsheet":"subject_broadsheet",templateCode:a,layoutKey:l(r?.layoutKey,i?.layoutKey,a)||a,templateName:l(r?.templateName,i?.name,i?.name,"Classic Broadsheet")||"Classic Broadsheet",paperSize:l(r?.paperSize,i?.paperSize,"A4")||"A4",orientation:l(r?.orientation,i?.orientation,"landscape")||"landscape",density:l(r?.density,i?.density,"compact")||"compact",broadsheetTitleLabel:l(r?.broadsheetTitleLabel,u(t))||u(t),broadsheetGeneratedDateLabel:l(r?.broadsheetGeneratedDateLabel,"Generated")||"Generated",broadsheetFooterText:l(r?.broadsheetFooterText,r?.footerText,s.broadsheetFooterText)||s.broadsheetFooterText,studentColumnLabel:l(r?.studentColumnLabel,"Student")||"Student",admissionNumberColumnLabel:l(r?.admissionNumberColumnLabel,"Admission No.")||"Admission No.",positionColumnLabel:l(r?.positionColumnLabel,"Position")||"Position",gradeColumnLabel:l(r?.gradeColumnLabel,"Grade")||"Grade",remarkColumnLabel:l(r?.remarkColumnLabel,"Remark")||"Remark"}}function b(e){let t=e||{},r=t.branding||{},i=t.schoolBranchSetting||{},a=t.school||{},o=t.branch||{},n=l(t.resolvedLogoUrl,r.resolvedLogoUrl,r.logo,i.logo,o.logo,a.logo);return{schoolName:l(r.schoolName,a.name,"School Name"),branchName:l(r.branchName,t.branchName,t.branchLabel,t.campusName,o.name),branchAddress:l(r.branchAddress,t.branchAddress,o.address),motto:l(r.motto,a.motto),address:l(r.address,a.address),phone:l(r.phone,o.phone,a.phone),email:l(r.email,o.email,a.email),website:l(r.website,o.website,a.website),logo:n,watermark:l(t.resolvedReportCardWatermarkUrl,r.resolvedReportCardWatermarkUrl,r.reportCardWatermark,i.reportCardWatermark,n),backgroundImage:l(t.resolvedReportCardBackgroundImageUrl,r.resolvedReportCardBackgroundImageUrl,r.reportCardBackgroundImage,i.reportCardBackgroundImage),signatureImage:l(t.resolvedReportCardSignatureImageUrl,r.resolvedReportCardSignatureImageUrl,r.reportCardSignatureImage,i.reportCardSignatureImage),primaryColor:l(r.primaryColor,t.reportPrimaryColor,t.primaryColor,i.primaryColor,"#2563eb")||"#2563eb",fontFamily:l(r.fontFamily,i.fontFamily,"Arial, sans-serif")||"Arial, sans-serif"}}function x(e){return l(e?.resolvedStudentPhotoUrl,e?.studentPhoto,e?.photo)}function f(e,t){var r,i,a;return t?"subject"===e&&(r=t)&&"assessmentColumns"in r&&"subjectName"in r?[{key:"students",label:"Students",value:t.students.length},{key:"highest",label:"Highest Score",value:c(t.highestScore,1),rawValue:t.highestScore},{key:"lowest",label:"Lowest Score",value:c(t.lowestScore,1),rawValue:t.lowestScore},{key:"average",label:"Class Average",value:c(t.classAverage,1),rawValue:t.classAverage}]:"class"===e&&(i=t)&&"subjectColumns"in i&&"students"in i&&!("periodNames"in i)?[{key:"students",label:"Students",value:t.students.length},{key:"subjects",label:"Subjects",value:t.subjectColumns.length},{key:"highest",label:"Highest Average",value:c(t.highestAverage,1),rawValue:t.highestAverage},{key:"average",label:"Class Average",value:c(t.classAverage,1),rawValue:t.classAverage}]:"annual"===e&&(a=t)&&"periodNames"in a&&"promotionCount"in a?[{key:"students",label:"Students",value:t.totalStudents},{key:"subjects",label:"Subjects",value:t.totalSubjects},{key:"periods",label:"Periods",value:t.totalPeriods},{key:"average",label:"Class Average",value:c(t.classAverage,1),rawValue:t.classAverage},{key:"promoted",label:"Promoted",value:t.promotionCount},{key:"repeated",label:"Repeated",value:t.repeatCount}]:[]:[]}function w(e){let{branding:t,settings:r}=e,i=e.tone||"classic";return{width:"portrait"===r.orientation?"210mm":"297mm",minHeight:"portrait"===r.orientation?"297mm":"210mm",margin:"0 auto 18px",padding:e.compact?"8mm":"10mm",boxSizing:"border-box",position:"relative",overflow:"hidden",background:"#fff",color:"#111827",fontFamily:t.fontFamily,border:"minimal"===i?"0":"1px solid #d1d5db",borderRadius:"modern"===i||"analytics"===i?16:4,boxShadow:"0 18px 48px rgba(15,23,42,.10)",pageBreakAfter:e.pageBreakAfter?"always":"auto",breakAfter:e.pageBreakAfter?"page":"auto"}}function v(e){return"class"===e?"No class broadsheet records are available for the selected filters.":"annual"===e?"No annual broadsheet records are available for the selected filters.":"No subject broadsheet records are available for the selected filters."}function y(e){let{dataset:t,settings:r}=e;if(!t)return[];let i=t.assessmentProjection;return(i?.columns?.length?i.columns.map(e=>({assessmentStructureItemId:e.itemId,parentItemId:e.parentItemId,name:e.name,shortLabel:e.shortLabel,pathLabels:[...e.pathLabels],depth:e.depth,order:e.order,itemType:e.itemType,aggregationMode:e.aggregationMode,weight:e.effectiveWeight,effectiveWeight:e.effectiveWeight,maxScore:e.maxScore,isParent:e.isParent,isLeaf:e.isLeaf,calculatedFromChildren:e.calculatedFromChildren,complete:e.complete,groupId:e.groupId,groupLabel:e.groupLabel,groupDepth:e.groupDepth,columnSpan:e.columnSpan})):t.assessmentColumns??[]).filter(e=>{let t=e.depth??0;return(null===r.broadsheetMaximumAssessmentDepth||void 0===r.broadsheetMaximumAssessmentDepth||!(t>r.broadsheetMaximumAssessmentDepth))&&(!!r.showAssessmentParentItems||!e.isParent)&&(!!r.showAssessmentChildItems||!(t>0))&&(!!r.showCalculatedAssessmentItems||!e.calculatedFromChildren)}).sort((e,t)=>(e.order??0)-(t.order??0)||(e.depth??0)-(t.depth??0)||e.name.localeCompare(t.name))}function j(e,t){if(t.showAssessmentHierarchyPath&&e.pathLabels?.length)return e.pathLabels.join(" \xb7 ");let r=e.shortLabel||e.name;return t.indentAssessmentChildren&&(e.depth??0)>0?`${"› ".repeat(Math.min(e.depth??0,3))}${r}`:r}function S(e){let{item:t,settings:r,decimals:i=0}=e;if(!t)return"-";let a=t.rawScore??t.score??0;return r.showAssessmentRawScores&&r.showAssessmentMaximumScores?`${d(a,i)}/${d(t.maxScore,i)}`:r.showAssessmentRawScores?d(a,i):r.showAssessmentWeightedScores?d(t.weightedScore,1):c(t.normalizedPercentage,0)}function k({kind:e,branding:t,settings:r,title:a,subtitle:o,academicStructureName:n,academicPeriodName:s,className:d,subjectName:c,teacherName:m,academicYear:h,generatedAt:u,compact:g=!1}){let b=l(a,r.broadsheetTitleLabel,"class"===e?"Class Broadsheet":"annual"===e?"Annual Cumulative Broadsheet":"Subject Broadsheet"),x=[n?{label:"Academic Structure",value:n}:null,s?{label:"Academic Period",value:s}:null,h?{label:"Academic Year",value:h}:null,d?{label:"Class",value:d}:null,c?{label:"Subject",value:c}:null,m?{label:"Teacher",value:m}:null].filter(Boolean),f=[t.address,t.phone?`Tel: ${t.phone}`:"",t.email,t.website].filter(Boolean).join("  •  ");return(0,i.jsxs)("header",{style:{color:"#111",fontFamily:t.fontFamily||"Arial, sans-serif",marginBottom:g?7:9},children:[(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:r.showBroadsheetLogo&&t.logo?`${g?45:54}px minmax(0,1fr) auto`:"minmax(0,1fr) auto",alignItems:"center",gap:g?8:11,padding:g?"4px 7px":"6px 9px",borderTop:"3px double #111",borderBottom:"3px double #111",background:"#fff"},children:[r.showBroadsheetLogo&&t.logo&&(0,i.jsx)("div",{style:{width:g?45:54,height:g?45:54,border:"1px solid #111",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",background:"#fff"},children:(0,i.jsx)("img",{src:t.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:3,boxSizing:"border-box"}})}),(0,i.jsxs)("div",{style:{minWidth:0,textAlign:"center"},children:[(0,i.jsx)("div",{style:{fontSize:g?14:17,lineHeight:1.06,fontWeight:950,textTransform:"uppercase",letterSpacing:.35,overflowWrap:"anywhere"},children:t.schoolName}),(t.motto||t.branchName)&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:g?9.1:9.9,fontWeight:750,lineHeight:1.06},children:[t.motto,t.branchName].filter(Boolean).join("  •  ")}),f&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:g?9.2:10,lineHeight:1.06,color:"#333",overflowWrap:"anywhere"},children:f})]}),(0,i.jsxs)("div",{style:{minWidth:g?170:205,maxWidth:g?215:250,border:"1px solid #111",padding:g?"5px 8px":"6px 10px",textAlign:"center",background:"#f5f5f5"},children:[(0,i.jsx)("div",{style:{fontSize:g?9.5:11,fontWeight:950,textTransform:"uppercase",letterSpacing:.35,lineHeight:1.15},children:b}),o&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:g?8.5:9.2,lineHeight:1.06,fontWeight:750},children:o})]})]}),x.length>0&&(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(x.length,6)}, minmax(0,1fr))`,borderLeft:"1px solid #111",borderBottom:"1px solid #111",background:"#fff"},children:x.map(e=>(0,i.jsxs)("div",{style:{minWidth:0,padding:g?"1px 5px":"1px 6px",borderRight:"1px solid #111"},children:[(0,i.jsx)("div",{style:{fontSize:g?7.8:8.5,fontWeight:900,textTransform:"uppercase",letterSpacing:.08,color:"#444"},children:e.label}),(0,i.jsx)("div",{style:{marginTop:0,fontSize:g?9:9.7,fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.value})]},`${e.label}-${e.value}`))}),r.showBroadsheetGeneratedDate&&(0,i.jsxs)("div",{style:{marginTop:2,textAlign:"right",fontSize:g?8.2:8.9,fontWeight:750},children:[r.broadsheetGeneratedDateLabel||"Generated",":"," ",p(u||new Date)]})]})}function I(e){return{table:{width:"100%",borderCollapse:"collapse",tableLayout:"auto",fontSize:e?8.5:9.5,lineHeight:1.15,color:"#111"},th:{border:"1px solid #111",padding:e?"2.5px 2px":"3px 2.5px",background:"#e9e9e9",color:"#111",textAlign:"center",verticalAlign:"middle",fontWeight:900,whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.15},td:{border:"1px solid #111",padding:e?"1.5px 2px":"2px 2.5px",verticalAlign:"middle",whiteSpace:"nowrap"}}}function N({items:e,compact:t}){let r=e.filter(e=>!1!==e.show);return r.length?(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(r.length,8)}, minmax(0,1fr))`,borderTop:"1px solid #111",borderLeft:"1px solid #111",marginBottom:t?5:7},children:r.map(e=>(0,i.jsxs)("div",{style:{minWidth:0,padding:t?"2.5px 4px":"3px 5px",borderRight:"1px solid #111",borderBottom:"1px solid #111",background:"#fff"},children:[(0,i.jsx)("div",{style:{fontSize:t?8.2:9,fontWeight:900,textTransform:"uppercase",letterSpacing:0,color:"#444"},children:e.label}),(0,i.jsx)("div",{style:{marginTop:1,fontSize:t?10:11,fontWeight:900,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.value})]},e.label))}):null}function C({student:e,settings:t,compact:r}){let a=x(e);return(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:t.showBroadsheetStudentPhoto&&a?`${r?21:25}px minmax(0,1fr)`:"minmax(0,1fr)",gap:r?4:5,alignItems:"center",minWidth:r?132:155},children:[t.showBroadsheetStudentPhoto&&a&&(0,i.jsx)("img",{src:a,alt:"Student",style:{width:r?21:25,height:r?21:25,objectFit:"cover",border:"1px solid #777"}}),(0,i.jsxs)("div",{style:{minWidth:0},children:[(0,i.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.studentName||"-"}),e.admissionNumber&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#444"},children:e.admissionNumber})]})]})}function z({settings:e,schoolName:t,pageNumber:r,totalPages:a,compact:o}){return(0,i.jsxs)("footer",{style:{marginTop:o?5:7,paddingTop:o?2:3,borderTop:"1px solid #111",display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,fontSize:o?8.5:9.5,color:"#333"},children:[(0,i.jsx)("span",{children:e.broadsheetFooterText||`Official academic broadsheet generated for ${t}.`}),e.showBroadsheetPageNumber&&(0,i.jsxs)("span",{style:{whiteSpace:"nowrap",fontWeight:800},children:["Page ",r||1,a?` of ${a}`:""]})]})}function A({kind:e,dataset:t,header:r,template:a,settings:o,compact:n=!1,pageBreakAfter:s=!0,showWatermark:d=!0,generatedAt:c,pageNumber:m,totalPages:p,className:h,style:u}){var x,f;let v,y=g({kind:e,template:a,settings:o}),j=b(r),S=(v=r||{},{academicStructureName:l(v.academicStructure?.name,v.academicStructureName),academicPeriodName:l(v.academicPeriod?.name,v.academicPeriodName)});j.primaryColor;let I={...w({branding:j,settings:y,compact:n,pageBreakAfter:s,tone:"classic"}),...u,background:"#fff",color:"#111",border:"1px solid #111",borderRadius:0,boxShadow:"0 16px 40px rgba(15,23,42,.10)"};if(!t)return null;let N=(x=e,f=t,"subject"===x?{subtitle:`${f.className||"Class"} • ${f.students?.length||0} Students`,className:f.className,subjectName:f.subjectName,teacherName:f.teacherName,academicStructureName:"",academicYear:""}:"class"===x?{subtitle:`${f.className||"Class"} • ${f.students?.length||0} Students • ${f.subjectColumns?.length||0} Subjects`,className:f.className,subjectName:"",teacherName:"",academicStructureName:"",academicYear:""}:{subtitle:`${f.className||"Class"} • ${f.academicYear||"Academic Year"} • ${f.totalStudents||0} Students`,className:f.className,subjectName:"",teacherName:"",academicStructureName:f.academicStructureName,academicYear:f.academicYear});return(0,i.jsxs)("section",{className:`print-page report-page-break broadsheet-template-page broadsheet-classic-page ${h||""}`,style:I,children:[j.backgroundImage&&(0,i.jsx)("img",{src:j.backgroundImage,alt:"","aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,pointerEvents:"none",zIndex:0}}),d&&y.showBroadsheetWatermark&&j.watermark&&(0,i.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.035,pointerEvents:"none",zIndex:0},children:(0,i.jsx)("img",{src:j.watermark,alt:"",style:{width:"42%",maxHeight:"58%",objectFit:"contain"}})}),(0,i.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,i.jsx)(k,{kind:e,branding:j,settings:y,title:"class"===e?"Class Broadsheet":"annual"===e?"Annual Cumulative Broadsheet":"Subject Broadsheet",subtitle:N.subtitle,academicStructureName:N.academicStructureName||S.academicStructureName,academicPeriodName:S.academicPeriodName,academicYear:N.academicYear,className:N.className,subjectName:N.subjectName,teacherName:N.teacherName,generatedAt:c,compact:n}),"subject"===e&&(0,i.jsx)(T,{dataset:t,settings:y,compact:n}),"class"===e&&(0,i.jsx)(P,{dataset:t,settings:y,compact:n}),"annual"===e&&(0,i.jsx)(W,{dataset:t,settings:y,compact:n}),y.showBroadsheetSignatures&&(0,i.jsx)("div",{style:{marginTop:n?8:12,display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:n?18:28},children:["Prepared By","Checked By","Headteacher / Principal"].map(e=>(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)("div",{style:{height:n?12:17}}),(0,i.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:3,fontSize:n?8.5:9.5,fontWeight:850},children:e})]},e))}),(0,i.jsx)(z,{settings:y,schoolName:j.schoolName,pageNumber:m,totalPages:p,compact:n})]})]})}function T({dataset:e,settings:t,compact:r}){let o=I(r),n=(0,a.useMemo)(()=>y({dataset:e,settings:t}),[e,t]);return(0,i.jsxs)(i.Fragment,{children:[t.showBroadsheetSummary&&(0,i.jsx)(N,{compact:r,items:[{label:"Students",value:e.students.length},{label:"Highest Score",value:`${d(e.highestScore,1)}%`,show:!1!==t.showBroadsheetHighestScore},{label:"Lowest Score",value:`${d(e.lowestScore,1)}%`,show:!1!==t.showBroadsheetLowestScore},{label:"Class Average",value:`${d(e.classAverage,1)}%`,show:!1!==t.showBroadsheetClassAverage}]}),(0,i.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,i.jsxs)("table",{style:o.table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...o.th,width:26},children:"#"}),(0,i.jsx)("th",{style:{...o.th,textAlign:"left",minWidth:145},children:t.studentColumnLabel||"Student"}),!1!==t.showBroadsheetAssessmentBreakdown&&n.map(e=>(0,i.jsxs)("th",{style:o.th,children:[t.broadsheetShowAssessmentGroupHeaders&&e.groupLabel&&(0,i.jsx)("div",{style:{marginBottom:1,fontSize:"0.92em",opacity:.92,textTransform:"uppercase"},children:e.groupLabel}),(0,i.jsx)("div",{children:j(e,t)}),(t.showAssessmentWeights||t.showAssessmentMaximumScores)&&(0,i.jsxs)("div",{style:{marginTop:1,fontSize:"0.96em"},children:[t.showAssessmentWeights?`W:${d(e.effectiveWeight??e.weight,0)}`:"",t.showAssessmentWeights&&t.showAssessmentMaximumScores?" \xb7 ":"",t.showAssessmentMaximumScores?`M:${d(e.maxScore,0)}`:""]})]},e.assessmentStructureItemId)),!1!==t.showBroadsheetWeightedTotal&&(0,i.jsx)("th",{style:o.th,children:"Weighted"}),!1!==t.showBroadsheetPercentage&&(0,i.jsx)("th",{style:o.th,children:"%"}),!1!==t.showBroadsheetGrade&&(0,i.jsx)("th",{style:o.th,children:t.gradeColumnLabel||"Grade"}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("th",{style:o.th,children:"GPA"}),!1!==t.showBroadsheetPosition&&(0,i.jsx)("th",{style:o.th,children:t.positionColumnLabel||"Position"}),!1!==t.showBroadsheetRemark&&(0,i.jsx)("th",{style:{...o.th,minWidth:80},children:t.remarkColumnLabel||"Remark"})]})}),(0,i.jsx)("tbody",{children:e.students.map((e,a)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:a+1}),(0,i.jsx)("td",{style:o.td,children:(0,i.jsx)(C,{student:e,settings:t,compact:r})}),!1!==t.showBroadsheetAssessmentBreakdown&&n.map(r=>{let a=e.breakdown.find(e=>e.assessmentStructureItemId===r.assessmentStructureItemId);return(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:S({item:a,settings:t})},r.assessmentStructureItemId)}),!1!==t.showBroadsheetWeightedTotal&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:850},children:d(e.weightedTotal,1)}),!1!==t.showBroadsheetPercentage&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:850},children:c(e.percentage,1)}),!1!==t.showBroadsheetGrade&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:900},children:e.grade||"-"}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:null!=e.gpa?d(e.gpa,2):"-"}),!1!==t.showBroadsheetPosition&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:m(e.position)}),!1!==t.showBroadsheetRemark&&(0,i.jsx)("td",{style:{...o.td,whiteSpace:"normal",minWidth:80},children:e.remark||"-"})]},e.studentId))})]})})]})}function P({dataset:e,settings:t,compact:r}){let a=I(r);return(0,i.jsxs)(i.Fragment,{children:[t.showBroadsheetSummary&&(0,i.jsx)(N,{compact:r,items:[{label:"Students",value:e.students.length},{label:"Subjects",value:e.subjectColumns.length},{label:"Highest Average",value:`${d(e.highestAverage,1)}%`,show:!1!==t.showBroadsheetClassHighestAverage},{label:"Lowest Average",value:`${d(e.lowestAverage,1)}%`,show:!1!==t.showBroadsheetClassLowestAverage},{label:"Class Average",value:`${d(e.classAverage,1)}%`}]}),(0,i.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,i.jsxs)("table",{style:a.table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...a.th,width:26},children:"#"}),(0,i.jsx)("th",{style:{...a.th,textAlign:"left",minWidth:145},children:t.studentColumnLabel||"Student"}),!1!==t.showBroadsheetSubjectScores&&e.subjectColumns.map(e=>(0,i.jsxs)("th",{style:a.th,children:[e.shortName||e.subjectCode||e.subjectName,(0,i.jsx)("div",{style:{marginTop:1,maxWidth:65,whiteSpace:"normal",fontSize:"0.94em"},children:e.subjectName})]},e.classSubjectId)),!1!==t.showBroadsheetTotal&&(0,i.jsx)("th",{style:a.th,children:"Total"}),!1!==t.showBroadsheetAverage&&(0,i.jsx)("th",{style:a.th,children:"Average"}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("th",{style:a.th,children:"GPA"}),!1!==t.showBroadsheetClassPosition&&(0,i.jsx)("th",{style:a.th,children:t.positionColumnLabel||"Position"}),!1!==t.showBroadsheetAttendance&&(0,i.jsx)("th",{style:a.th,children:"Attendance"})]})}),(0,i.jsx)("tbody",{children:e.students.map((o,n)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{style:{...a.td,textAlign:"center"},children:n+1}),(0,i.jsx)("td",{style:a.td,children:(0,i.jsx)(C,{student:o,settings:t,compact:r})}),!1!==t.showBroadsheetSubjectScores&&e.subjectColumns.map(e=>{let r=o.subjects.find(t=>t.classSubjectId===e.classSubjectId);return(0,i.jsx)("td",{style:{...a.td,textAlign:"center"},children:r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:d(r.percentage,1)}),t.showBroadsheetSubjectGrades&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.96em"},children:r.grade||"-"})]}):"-"},e.classSubjectId)}),!1!==t.showBroadsheetTotal&&(0,i.jsx)("td",{style:{...a.td,textAlign:"center",fontWeight:850},children:d(o.total,1)}),!1!==t.showBroadsheetAverage&&(0,i.jsx)("td",{style:{...a.td,textAlign:"center",fontWeight:900},children:c(o.average,1)}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("td",{style:{...a.td,textAlign:"center"},children:null!=o.gpa?d(o.gpa,2):"-"}),!1!==t.showBroadsheetClassPosition&&(0,i.jsx)("td",{style:{...a.td,textAlign:"center"},children:m(o.position)}),!1!==t.showBroadsheetAttendance&&(0,i.jsx)("td",{style:{...a.td,textAlign:"center"},children:c(o.attendancePercent,1)})]},o.studentId))})]})})]})}function W({dataset:e,settings:t,compact:r}){let a=I(r);return(0,i.jsxs)(i.Fragment,{children:[t.showBroadsheetSummary&&(0,i.jsx)(N,{compact:r,items:[{label:"Students",value:e.totalStudents},{label:"Subjects",value:e.totalSubjects},{label:"Periods",value:e.totalPeriods},{label:"Highest Average",value:`${d(e.highestAverage,1)}%`},{label:"Lowest Average",value:`${d(e.lowestAverage,1)}%`},{label:"Class Average",value:`${d(e.classAverage,1)}%`},{label:"Promote",value:e.promotionCount,show:!1!==t.showBroadsheetPromotionDecision},{label:"Repeat",value:e.repeatCount,show:!1!==t.showBroadsheetPromotionDecision}]}),t.showBroadsheetStatistics&&e.periodNames.length>0&&(0,i.jsxs)("div",{style:{marginBottom:r?5:7,fontSize:r?8.5:9.5,fontWeight:800},children:["Periods: ",e.periodNames.join("  •  ")]}),(0,i.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,i.jsxs)("table",{style:a.table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...a.th,width:26},children:"#"}),(0,i.jsx)("th",{style:{...a.th,textAlign:"left",minWidth:145},children:t.studentColumnLabel||"Student"}),e.subjectColumns.map(e=>(0,i.jsxs)("th",{style:a.th,children:[e.shortName||e.subjectCode||e.subjectName,(0,i.jsx)("div",{style:{marginTop:1,maxWidth:62,whiteSpace:"normal",fontSize:"0.94em"},children:e.subjectName})]},`${e.subjectId||e.subjectName}`)),!1!==t.showBroadsheetAnnualAverage&&(0,i.jsx)("th",{style:a.th,children:"Annual Avg."}),!1!==t.showBroadsheetAnnualGPA&&(0,i.jsx)("th",{style:a.th,children:"GPA"}),!1!==t.showBroadsheetAnnualPosition&&(0,i.jsx)("th",{style:a.th,children:t.positionColumnLabel||"Position"}),!1!==t.showBroadsheetPromotionDecision&&(0,i.jsx)("th",{style:a.th,children:"Decision"})]})}),(0,i.jsx)("tbody",{children:e.students.map((o,n)=>{var s;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{style:{...a.td,textAlign:"center"},children:n+1}),(0,i.jsx)("td",{style:a.td,children:(0,i.jsx)(R,{student:o,settings:t,compact:r})}),e.subjectColumns.map(e=>{let r=o.subjects.find(t=>e.subjectId&&t.subjectId===e.subjectId||t.subjectName===e.subjectName);return(0,i.jsx)("td",{style:{...a.td,textAlign:"center"},children:r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:d(r.average,1)}),t.showBroadsheetPeriodScores&&r.periodScores.length>0&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.92em",whiteSpace:"normal",lineHeight:1.15},children:r.periodScores.map(e=>`${e.academicPeriodName}: ${d(e.percentage,0)}`).join(" \xb7 ")})]}):"-"},`${e.subjectId||e.subjectName}`)}),!1!==t.showBroadsheetAnnualAverage&&(0,i.jsx)("td",{style:{...a.td,textAlign:"center",fontWeight:900},children:c(o.average,1)}),!1!==t.showBroadsheetAnnualGPA&&(0,i.jsx)("td",{style:{...a.td,textAlign:"center"},children:null!=o.gpa?d(o.gpa,2):"-"}),!1!==t.showBroadsheetAnnualPosition&&(0,i.jsx)("td",{style:{...a.td,textAlign:"center"},children:m(o.position)}),!1!==t.showBroadsheetPromotionDecision&&(0,i.jsx)("td",{style:{...a.td,textAlign:"center",fontWeight:850},children:(s=o.finalDecision||o.recommendation)?s.charAt(0).toUpperCase()+s.slice(1):"-"})]},o.studentId)})})]})})]})}function R({student:e,settings:t,compact:r}){return(0,i.jsxs)("div",{style:{minWidth:r?132:155},children:[(0,i.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.studentName||"-"}),e.admissionNumber&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#444"},children:e.admissionNumber})]})}function B({kind:e,branding:t,settings:r,title:a,subtitle:o,academicStructureName:n,academicPeriodName:s,className:d,subjectName:c,teacherName:m,academicYear:h,generatedAt:u,compact:g=!1}){let b=t.primaryColor||"#2563eb",x=l(a,r.broadsheetTitleLabel,"class"===e?"Class Broadsheet":"annual"===e?"Annual Cumulative Broadsheet":"Subject Broadsheet"),f=r.showBroadsheetGeneratedDate&&u?p(u):"",w=[n?{label:"Structure",value:n}:null,s?{label:"Period",value:s}:null,h?{label:"Year",value:h}:null,d?{label:"Class",value:d}:null,c?{label:"Subject",value:c}:null,m?{label:"Teacher",value:m}:null].filter(Boolean),v=[t.address,t.phone?`Tel: ${t.phone}`:"",t.email,t.website].filter(Boolean).join("  •  ");return(0,i.jsxs)("header",{className:"broadsheet-modern-header",style:{position:"relative",overflow:"hidden",marginBottom:g?7:9,padding:g?6:7,border:"1px solid #dbe3ee",borderRadius:g?13:16,background:"#ffffff",color:"#172033",fontFamily:t.fontFamily||"Arial, sans-serif",boxShadow:"0 8px 24px rgba(15,23,42,.055)"},children:[(0,i.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",insetInlineStart:0,top:0,bottom:0,width:g?5:6,background:b}}),(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:r.showBroadsheetLogo&&t.logo?`${g?42:50}px minmax(0,1fr) ${g?175:210}px`:`minmax(0,1fr) ${g?175:210}px`,gap:g?8:11,alignItems:"center",paddingInlineStart:g?3:5},children:[r.showBroadsheetLogo&&t.logo&&(0,i.jsx)("div",{style:{width:g?42:50,height:g?42:50,border:"1px solid #dbe3ee",borderRadius:g?11:14,overflow:"hidden",background:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:(0,i.jsx)("img",{src:t.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:g?4:5,boxSizing:"border-box"}})}),(0,i.jsxs)("div",{style:{minWidth:0},children:[(0,i.jsx)("div",{style:{fontSize:g?14.5:17.5,lineHeight:1.05,fontWeight:950,textTransform:"uppercase",letterSpacing:.2,color:"#172033",overflowWrap:"anywhere"},children:t.schoolName}),(t.motto||t.branchName)&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:g?9.1:9.9,lineHeight:1.08,fontWeight:760,color:"#475569",overflowWrap:"anywhere"},children:[t.motto,t.branchName].filter(Boolean).join("  •  ")}),v&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:g?9.2:10,lineHeight:1.08,fontWeight:650,color:"#475569",overflowWrap:"anywhere"},children:v})]}),(0,i.jsxs)("div",{"data-report-color-block":"true",style:{minWidth:0,borderRadius:g?12:14,padding:g?"5px 9px":"6px 11px",background:`linear-gradient(135deg, ${b}, ${b}dd)`,color:"#fff",textAlign:"left",boxShadow:"0 8px 18px rgba(15,23,42,.12)"},children:[(0,i.jsx)("div",{style:{fontSize:g?9.2:10,fontWeight:950,lineHeight:1.12,textTransform:"uppercase",letterSpacing:.24,overflowWrap:"anywhere"},children:x}),o&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:g?8.5:9.3,fontWeight:720,lineHeight:1.08,opacity:.92,overflowWrap:"anywhere"},children:o}),f&&(0,i.jsxs)("div",{style:{marginTop:2,paddingTop:2,borderTop:"1px solid rgba(255,255,255,.28)",fontSize:g?7.8:8.5,fontWeight:800,lineHeight:1.15,opacity:.95},children:[r.broadsheetGeneratedDateLabel||"Generated",":"," ",f]})]})]}),w.length>0&&(0,i.jsx)("div",{style:{marginTop:5,display:"grid",gridTemplateColumns:`repeat(${Math.min(w.length,6)}, minmax(0,1fr))`,gap:g?4:6,paddingInlineStart:g?3:5},children:w.map(e=>(0,i.jsxs)("div",{style:{minWidth:0,border:"1px solid #e2e8f0",borderRadius:g?9:11,background:"#f8fafc",padding:g?"2px 6px":"3px 7px"},children:[(0,i.jsx)("div",{style:{fontSize:g?7.8:8.5,fontWeight:900,textTransform:"uppercase",letterSpacing:.22,color:"#475569"},children:e.label}),(0,i.jsx)("div",{style:{marginTop:1,fontSize:g?8.9:9.6,fontWeight:880,color:"#172033",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.value})]},`${e.label}-${e.value}`))}),(0,i.jsx)("style",{children:`
        @media print {
          .broadsheet-modern-header {
            box-shadow: none !important;
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }

          .broadsheet-modern-header [data-report-color-block="true"] {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
        }
      `})]})}function L(e,t){return{table:{width:"100%",borderCollapse:"separate",borderSpacing:0,tableLayout:"auto",fontSize:e?8.5:9.5,lineHeight:1.18,color:"#172033",border:"1px solid #dbe3ee",borderRadius:12,overflow:"hidden",background:"#fff"},th:{border:"0",borderRight:"1px solid rgba(255,255,255,.22)",borderBottom:"1px solid #dbe3ee",padding:e?"2.5px 2px":"3px 2.5px",background:t,color:"#fff",textAlign:"center",verticalAlign:"middle",fontWeight:900,whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.15},td:{border:"0",borderRight:"1px solid #e7edf5",borderBottom:"1px solid #e7edf5",padding:e?"1.5px 2px":"2px 2.5px",verticalAlign:"middle",whiteSpace:"nowrap",background:"#fff"}}}function M({items:e,compact:t}){let r=e.filter(e=>!1!==e.show);return r.length?(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(r.length,8)}, minmax(0,1fr))`,gap:t?5:7,marginBottom:t?7:9},children:r.map(e=>(0,i.jsxs)("div",{style:{minWidth:0,padding:t?"2.5px 4px":"3px 5px",border:"1px solid #dbe3ee",borderRadius:10,background:"#f8fafc",boxShadow:"0 4px 12px rgba(15,23,42,.035)"},children:[(0,i.jsx)("div",{style:{fontSize:t?8.2:9,fontWeight:900,textTransform:"uppercase",letterSpacing:0,color:"#475569"},children:e.label}),(0,i.jsx)("div",{style:{marginTop:1,fontSize:t?10:11,fontWeight:900,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.value})]},e.label))}):null}function $({student:e,settings:t,compact:r}){let a=x(e);return(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:t.showBroadsheetStudentPhoto&&a?`${r?21:25}px minmax(0,1fr)`:"minmax(0,1fr)",gap:r?4:5,alignItems:"center",minWidth:r?132:155},children:[t.showBroadsheetStudentPhoto&&a&&(0,i.jsx)("img",{src:a,alt:"Student",style:{width:r?21:25,height:r?21:25,objectFit:"cover",border:"2px solid #e2e8f0",borderRadius:8}}),(0,i.jsxs)("div",{style:{minWidth:0},children:[(0,i.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.studentName||"-"}),e.admissionNumber&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#475569"},children:e.admissionNumber})]})]})}function H({settings:e,schoolName:t,pageNumber:r,totalPages:a,compact:o}){return(0,i.jsxs)("footer",{style:{marginTop:o?5:7,paddingTop:o?2:3,borderTop:"1px solid #dbe3ee",display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,fontSize:o?8.5:9.5,color:"#333"},children:[(0,i.jsx)("span",{children:e.broadsheetFooterText||`Official academic broadsheet generated for ${t}.`}),e.showBroadsheetPageNumber&&(0,i.jsxs)("span",{style:{whiteSpace:"nowrap",fontWeight:800},children:["Page ",r||1,a?` of ${a}`:""]})]})}function D({kind:e,dataset:t,header:r,template:a,settings:o,compact:n=!1,pageBreakAfter:s=!0,showWatermark:d=!0,generatedAt:c,pageNumber:m,totalPages:p,className:h,style:u}){var x,f;let v,y=g({kind:e,template:a,settings:o}),j=b(r),S=(v=r||{},{academicStructureName:l(v.academicStructure?.name,v.academicStructureName),academicPeriodName:l(v.academicPeriod?.name,v.academicPeriodName)}),k=j.primaryColor||"#111",I={...w({branding:j,settings:y,compact:n,pageBreakAfter:s,tone:"classic"}),...u,background:"#fff",color:"#172033",border:"1px solid #dbe3ee",borderRadius:18,boxShadow:"0 20px 52px rgba(15,23,42,.10)"};if(!t)return null;let N=(x=e,f=t,"subject"===x?{subtitle:`${f.className||"Class"} • ${f.students?.length||0} Students`,className:f.className,subjectName:f.subjectName,teacherName:f.teacherName,academicStructureName:"",academicYear:""}:"class"===x?{subtitle:`${f.className||"Class"} • ${f.students?.length||0} Students • ${f.subjectColumns?.length||0} Subjects`,className:f.className,subjectName:"",teacherName:"",academicStructureName:"",academicYear:""}:{subtitle:`${f.className||"Class"} • ${f.academicYear||"Academic Year"} • ${f.totalStudents||0} Students`,className:f.className,subjectName:"",teacherName:"",academicStructureName:f.academicStructureName,academicYear:f.academicYear});return(0,i.jsxs)("section",{className:`print-page report-page-break broadsheet-template-page broadsheet-modern-page ${h||""}`,style:I,children:[j.backgroundImage&&(0,i.jsx)("img",{src:j.backgroundImage,alt:"","aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,pointerEvents:"none",zIndex:0}}),d&&y.showBroadsheetWatermark&&j.watermark&&(0,i.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.035,pointerEvents:"none",zIndex:0},children:(0,i.jsx)("img",{src:j.watermark,alt:"",style:{width:"42%",maxHeight:"58%",objectFit:"contain"}})}),(0,i.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,i.jsx)("div",{style:{borderRadius:16,overflow:"hidden",boxShadow:"0 8px 24px rgba(15,23,42,.06)",marginBottom:n?7:9},children:(0,i.jsx)(B,{kind:e,branding:j,settings:y,title:"class"===e?"Class Broadsheet":"annual"===e?"Annual Cumulative Broadsheet":"Subject Broadsheet",subtitle:N.subtitle,academicStructureName:N.academicStructureName||S.academicStructureName,academicPeriodName:S.academicPeriodName,academicYear:N.academicYear,className:N.className,subjectName:N.subjectName,teacherName:N.teacherName,generatedAt:c,compact:n})}),"subject"===e&&(0,i.jsx)(F,{dataset:t,settings:y,compact:n,primary:k}),"class"===e&&(0,i.jsx)(E,{dataset:t,settings:y,compact:n,primary:k}),"annual"===e&&(0,i.jsx)(G,{dataset:t,settings:y,compact:n,primary:k}),y.showBroadsheetSignatures&&(0,i.jsx)("div",{style:{marginTop:n?8:12,display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:n?18:28},children:["Prepared By","Checked By","Headteacher / Principal"].map(e=>(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)("div",{style:{height:n?12:17}}),(0,i.jsx)("div",{style:{borderTop:"1px solid #dbe3ee",paddingTop:3,fontSize:n?8.5:9.5,fontWeight:850},children:e})]},e))}),(0,i.jsx)(H,{settings:y,schoolName:j.schoolName,pageNumber:m,totalPages:p,compact:n})]})]})}function F({dataset:e,settings:t,compact:r,primary:o}){let n=L(r,o),s=(0,a.useMemo)(()=>y({dataset:e,settings:t}),[e,t]);return(0,i.jsxs)(i.Fragment,{children:[t.showBroadsheetSummary&&(0,i.jsx)(M,{compact:r,items:[{label:"Students",value:e.students.length},{label:"Highest Score",value:`${d(e.highestScore,1)}%`,show:!1!==t.showBroadsheetHighestScore},{label:"Lowest Score",value:`${d(e.lowestScore,1)}%`,show:!1!==t.showBroadsheetLowestScore},{label:"Class Average",value:`${d(e.classAverage,1)}%`,show:!1!==t.showBroadsheetClassAverage}]}),(0,i.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,i.jsxs)("table",{style:n.table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...n.th,width:26},children:"#"}),(0,i.jsx)("th",{style:{...n.th,textAlign:"left",minWidth:145},children:t.studentColumnLabel||"Student"}),!1!==t.showBroadsheetAssessmentBreakdown&&s.map(e=>(0,i.jsxs)("th",{style:n.th,children:[t.broadsheetShowAssessmentGroupHeaders&&e.groupLabel&&(0,i.jsx)("div",{style:{marginBottom:1,fontSize:"0.92em",opacity:.92,textTransform:"uppercase"},children:e.groupLabel}),(0,i.jsx)("div",{children:j(e,t)}),(t.showAssessmentWeights||t.showAssessmentMaximumScores)&&(0,i.jsxs)("div",{style:{marginTop:1,fontSize:"0.96em"},children:[t.showAssessmentWeights?`W:${d(e.effectiveWeight??e.weight,0)}`:"",t.showAssessmentWeights&&t.showAssessmentMaximumScores?" \xb7 ":"",t.showAssessmentMaximumScores?`M:${d(e.maxScore,0)}`:""]})]},e.assessmentStructureItemId)),!1!==t.showBroadsheetWeightedTotal&&(0,i.jsx)("th",{style:n.th,children:"Weighted"}),!1!==t.showBroadsheetPercentage&&(0,i.jsx)("th",{style:n.th,children:"%"}),!1!==t.showBroadsheetGrade&&(0,i.jsx)("th",{style:n.th,children:t.gradeColumnLabel||"Grade"}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("th",{style:n.th,children:"GPA"}),!1!==t.showBroadsheetPosition&&(0,i.jsx)("th",{style:n.th,children:t.positionColumnLabel||"Position"}),!1!==t.showBroadsheetRemark&&(0,i.jsx)("th",{style:{...n.th,minWidth:80},children:t.remarkColumnLabel||"Remark"})]})}),(0,i.jsx)("tbody",{children:e.students.map((e,a)=>(0,i.jsxs)("tr",{style:{background:a%2==0?"#ffffff":"#f8fafc"},children:[(0,i.jsx)("td",{style:{...n.td,textAlign:"center"},children:a+1}),(0,i.jsx)("td",{style:n.td,children:(0,i.jsx)($,{student:e,settings:t,compact:r})}),!1!==t.showBroadsheetAssessmentBreakdown&&s.map(r=>{let a=e.breakdown.find(e=>e.assessmentStructureItemId===r.assessmentStructureItemId);return(0,i.jsx)("td",{style:{...n.td,textAlign:"center"},children:S({item:a,settings:t})},r.assessmentStructureItemId)}),!1!==t.showBroadsheetWeightedTotal&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center",fontWeight:850},children:d(e.weightedTotal,1)}),!1!==t.showBroadsheetPercentage&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center",fontWeight:850},children:c(e.percentage,1)}),!1!==t.showBroadsheetGrade&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center",fontWeight:900},children:e.grade||"-"}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center"},children:null!=e.gpa?d(e.gpa,2):"-"}),!1!==t.showBroadsheetPosition&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center"},children:m(e.position)}),!1!==t.showBroadsheetRemark&&(0,i.jsx)("td",{style:{...n.td,whiteSpace:"normal",minWidth:80},children:e.remark||"-"})]},e.studentId))})]})})]})}function E({dataset:e,settings:t,compact:r,primary:a}){let o=L(r,a);return(0,i.jsxs)(i.Fragment,{children:[t.showBroadsheetSummary&&(0,i.jsx)(M,{compact:r,items:[{label:"Students",value:e.students.length},{label:"Subjects",value:e.subjectColumns.length},{label:"Highest Average",value:`${d(e.highestAverage,1)}%`,show:!1!==t.showBroadsheetClassHighestAverage},{label:"Lowest Average",value:`${d(e.lowestAverage,1)}%`,show:!1!==t.showBroadsheetClassLowestAverage},{label:"Class Average",value:`${d(e.classAverage,1)}%`}]}),(0,i.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,i.jsxs)("table",{style:o.table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...o.th,width:26},children:"#"}),(0,i.jsx)("th",{style:{...o.th,textAlign:"left",minWidth:145},children:t.studentColumnLabel||"Student"}),!1!==t.showBroadsheetSubjectScores&&e.subjectColumns.map(e=>(0,i.jsxs)("th",{style:o.th,children:[e.shortName||e.subjectCode||e.subjectName,(0,i.jsx)("div",{style:{marginTop:1,maxWidth:65,whiteSpace:"normal",fontSize:"0.94em"},children:e.subjectName})]},e.classSubjectId)),!1!==t.showBroadsheetTotal&&(0,i.jsx)("th",{style:o.th,children:"Total"}),!1!==t.showBroadsheetAverage&&(0,i.jsx)("th",{style:o.th,children:"Average"}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("th",{style:o.th,children:"GPA"}),!1!==t.showBroadsheetClassPosition&&(0,i.jsx)("th",{style:o.th,children:t.positionColumnLabel||"Position"}),!1!==t.showBroadsheetAttendance&&(0,i.jsx)("th",{style:o.th,children:"Attendance"})]})}),(0,i.jsx)("tbody",{children:e.students.map((a,n)=>(0,i.jsxs)("tr",{style:{background:n%2==0?"#ffffff":"#f8fafc"},children:[(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:n+1}),(0,i.jsx)("td",{style:o.td,children:(0,i.jsx)($,{student:a,settings:t,compact:r})}),!1!==t.showBroadsheetSubjectScores&&e.subjectColumns.map(e=>{let r=a.subjects.find(t=>t.classSubjectId===e.classSubjectId);return(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:d(r.percentage,1)}),t.showBroadsheetSubjectGrades&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.96em"},children:r.grade||"-"})]}):"-"},e.classSubjectId)}),!1!==t.showBroadsheetTotal&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:850},children:d(a.total,1)}),!1!==t.showBroadsheetAverage&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:900},children:c(a.average,1)}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:null!=a.gpa?d(a.gpa,2):"-"}),!1!==t.showBroadsheetClassPosition&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:m(a.position)}),!1!==t.showBroadsheetAttendance&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:c(a.attendancePercent,1)})]},a.studentId))})]})})]})}function G({dataset:e,settings:t,compact:r,primary:a}){let o=L(r,a);return(0,i.jsxs)(i.Fragment,{children:[t.showBroadsheetSummary&&(0,i.jsx)(M,{compact:r,items:[{label:"Students",value:e.totalStudents},{label:"Subjects",value:e.totalSubjects},{label:"Periods",value:e.totalPeriods},{label:"Highest Average",value:`${d(e.highestAverage,1)}%`},{label:"Lowest Average",value:`${d(e.lowestAverage,1)}%`},{label:"Class Average",value:`${d(e.classAverage,1)}%`},{label:"Promote",value:e.promotionCount,show:!1!==t.showBroadsheetPromotionDecision},{label:"Repeat",value:e.repeatCount,show:!1!==t.showBroadsheetPromotionDecision}]}),t.showBroadsheetStatistics&&e.periodNames.length>0&&(0,i.jsxs)("div",{style:{marginBottom:r?5:7,fontSize:r?8.5:9.5,fontWeight:800},children:["Periods: ",e.periodNames.join("  •  ")]}),(0,i.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,i.jsxs)("table",{style:o.table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...o.th,width:26},children:"#"}),(0,i.jsx)("th",{style:{...o.th,textAlign:"left",minWidth:145},children:t.studentColumnLabel||"Student"}),e.subjectColumns.map(e=>(0,i.jsxs)("th",{style:o.th,children:[e.shortName||e.subjectCode||e.subjectName,(0,i.jsx)("div",{style:{marginTop:1,maxWidth:62,whiteSpace:"normal",fontSize:"0.94em"},children:e.subjectName})]},`${e.subjectId||e.subjectName}`)),!1!==t.showBroadsheetAnnualAverage&&(0,i.jsx)("th",{style:o.th,children:"Annual Avg."}),!1!==t.showBroadsheetAnnualGPA&&(0,i.jsx)("th",{style:o.th,children:"GPA"}),!1!==t.showBroadsheetAnnualPosition&&(0,i.jsx)("th",{style:o.th,children:t.positionColumnLabel||"Position"}),!1!==t.showBroadsheetPromotionDecision&&(0,i.jsx)("th",{style:o.th,children:"Decision"})]})}),(0,i.jsx)("tbody",{children:e.students.map((a,n)=>{var s;return(0,i.jsxs)("tr",{style:{background:n%2==0?"#ffffff":"#f8fafc"},children:[(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:n+1}),(0,i.jsx)("td",{style:o.td,children:(0,i.jsx)(O,{student:a,settings:t,compact:r})}),e.subjectColumns.map(e=>{let r=a.subjects.find(t=>e.subjectId&&t.subjectId===e.subjectId||t.subjectName===e.subjectName);return(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:d(r.average,1)}),t.showBroadsheetPeriodScores&&r.periodScores.length>0&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.92em",whiteSpace:"normal",lineHeight:1.15},children:r.periodScores.map(e=>`${e.academicPeriodName}: ${d(e.percentage,0)}`).join(" \xb7 ")})]}):"-"},`${e.subjectId||e.subjectName}`)}),!1!==t.showBroadsheetAnnualAverage&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:900},children:c(a.average,1)}),!1!==t.showBroadsheetAnnualGPA&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:null!=a.gpa?d(a.gpa,2):"-"}),!1!==t.showBroadsheetAnnualPosition&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:m(a.position)}),!1!==t.showBroadsheetPromotionDecision&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:850},children:(s=a.finalDecision||a.recommendation)?s.charAt(0).toUpperCase()+s.slice(1):"-"})]},a.studentId)})})]})})]})}function O({student:e,settings:t,compact:r}){return(0,i.jsxs)("div",{style:{minWidth:r?132:155},children:[(0,i.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.studentName||"-"}),e.admissionNumber&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#475569"},children:e.admissionNumber})]})}function _({kind:e,branding:t,settings:r,title:a,subtitle:o,academicStructureName:n,academicPeriodName:s,className:d,subjectName:c,teacherName:m,academicYear:h,generatedAt:u,compact:g=!1}){let b=t.primaryColor||"#2563eb",x=l(a,r.broadsheetTitleLabel,"class"===e?"Class Broadsheet":"annual"===e?"Annual Cumulative Broadsheet":"Subject Broadsheet"),f=[n,s,h,d,c,m].filter(Boolean),w=r.showBroadsheetGeneratedDate&&u?p(u):"";return(0,i.jsxs)("header",{className:"broadsheet-compact-header",style:{display:"grid",gridTemplateColumns:r.showBroadsheetLogo&&t.logo?`${g?30:34}px minmax(0,1fr) auto`:"minmax(0,1fr) auto",alignItems:"center",gap:g?6:8,marginBottom:g?4:5,padding:g?"4px 7px":"5px 8px",border:"1px solid #cbd5e1",borderLeft:`4px solid ${b}`,borderRadius:6,background:"#fff",color:"#111827",fontFamily:t.fontFamily||"Arial, sans-serif"},children:[r.showBroadsheetLogo&&t.logo&&(0,i.jsx)("img",{src:t.logo,alt:"School logo",style:{width:g?30:34,height:g?30:34,objectFit:"contain"}}),(0,i.jsxs)("div",{style:{minWidth:0},children:[(0,i.jsx)("div",{style:{fontSize:g?11.2:12.6,fontWeight:950,lineHeight:1.02,textTransform:"uppercase",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t.schoolName}),(0,i.jsx)("div",{style:{marginTop:0,fontSize:g?8.1:8.8,fontWeight:760,color:"#475569",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[t.branchName,...f].filter(Boolean).join(" • ")})]}),(0,i.jsxs)("div",{style:{textAlign:"right",minWidth:0},children:[(0,i.jsx)("div",{style:{fontSize:g?9.2:10,fontWeight:950,textTransform:"uppercase",color:b,whiteSpace:"nowrap"},children:x}),o&&(0,i.jsx)("div",{style:{marginTop:0,fontSize:g?8.1:8.8,fontWeight:700,color:"#475569",whiteSpace:"nowrap"},children:o}),w&&(0,i.jsxs)("div",{style:{marginTop:0,fontSize:g?7.8:8.4,fontWeight:760,color:"#475569",whiteSpace:"nowrap"},children:[r.broadsheetGeneratedDateLabel||"Generated",": ",w]})]}),(0,i.jsx)("style",{children:`
        @media print {
          .broadsheet-compact-header {
            box-shadow: none !important;
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
        }
      `})]})}function Y(e,t){return{table:{width:"100%",borderCollapse:"separate",borderSpacing:0,tableLayout:"auto",fontSize:e?8.5:9.5,lineHeight:1.08,color:"#172033",border:"1px solid #dbe3ee",borderRadius:6,overflow:"hidden",background:"#fff"},th:{border:"0",borderRight:"1px solid rgba(255,255,255,.22)",borderBottom:"1px solid #dbe3ee",padding:e?"2.5px 2px":"3px 2.5px",background:t,color:"#fff",textAlign:"center",verticalAlign:"middle",fontWeight:900,whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.15},td:{border:"0",borderRight:"1px solid #e7edf5",borderBottom:"1px solid #e7edf5",padding:e?"1.5px 2px":"2px 2.5px",verticalAlign:"middle",whiteSpace:"nowrap",background:"#fff"}}}function V({items:e,compact:t}){let r=e.filter(e=>!1!==e.show);return r.length?(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(r.length,8)}, minmax(0,1fr))`,gap:t?3:4,marginBottom:t?4:5},children:r.map(e=>(0,i.jsxs)("div",{style:{minWidth:0,padding:t?"2px 3px":"2.5px 4px",border:"1px solid #dbe3ee",borderRadius:5,background:"#f8fafc",boxShadow:"none"},children:[(0,i.jsx)("div",{style:{fontSize:t?8.2:9,fontWeight:900,textTransform:"uppercase",letterSpacing:0,color:"#475569"},children:e.label}),(0,i.jsx)("div",{style:{marginTop:1,fontSize:t?10:11,fontWeight:900,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.value})]},e.label))}):null}function U({student:e,settings:t,compact:r}){let a=x(e);return(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:t.showBroadsheetStudentPhoto&&a?`${r?17:20}px minmax(0,1fr)`:"minmax(0,1fr)",gap:r?4:5,alignItems:"center",minWidth:r?112:128},children:[t.showBroadsheetStudentPhoto&&a&&(0,i.jsx)("img",{src:a,alt:"Student",style:{width:r?17:20,height:r?17:20,objectFit:"cover",border:"2px solid #e2e8f0",borderRadius:4}}),(0,i.jsxs)("div",{style:{minWidth:0},children:[(0,i.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.studentName||"-"}),e.admissionNumber&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#475569"},children:e.admissionNumber})]})]})}function Z({settings:e,schoolName:t,pageNumber:r,totalPages:a,compact:o}){return(0,i.jsxs)("footer",{style:{marginTop:o?4:5,paddingTop:o?2:3,borderTop:"1px solid #dbe3ee",display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,fontSize:o?8.5:9.5,color:"#333"},children:[(0,i.jsx)("span",{children:e.broadsheetFooterText||`Official academic broadsheet generated for ${t}.`}),e.showBroadsheetPageNumber&&(0,i.jsxs)("span",{style:{whiteSpace:"nowrap",fontWeight:800},children:["Page ",r||1,a?` of ${a}`:""]})]})}function K({kind:e,dataset:t,header:r,template:a,settings:o,compact:n=!1,pageBreakAfter:s=!0,showWatermark:d=!0,generatedAt:c,pageNumber:m,totalPages:p,className:h,style:u}){var x,f;let v,y=g({kind:e,template:a,settings:o}),j=b(r),S=(v=r||{},{academicStructureName:l(v.academicStructure?.name,v.academicStructureName),academicPeriodName:l(v.academicPeriod?.name,v.academicPeriodName)}),k=j.primaryColor||"#111",I={...w({branding:j,settings:y,compact:n,pageBreakAfter:s,tone:"classic"}),...u,background:"#fff",color:"#172033",border:"1px solid #cbd5e1",borderRadius:8,boxShadow:"0 10px 28px rgba(15,23,42,.08)"};if(!t)return null;let N=(x=e,f=t,"subject"===x?{subtitle:`${f.className||"Class"} • ${f.students?.length||0} Students`,className:f.className,subjectName:f.subjectName,teacherName:f.teacherName,academicStructureName:"",academicYear:""}:"class"===x?{subtitle:`${f.className||"Class"} • ${f.students?.length||0} Students • ${f.subjectColumns?.length||0} Subjects`,className:f.className,subjectName:"",teacherName:"",academicStructureName:"",academicYear:""}:{subtitle:`${f.className||"Class"} • ${f.academicYear||"Academic Year"} • ${f.totalStudents||0} Students`,className:f.className,subjectName:"",teacherName:"",academicStructureName:f.academicStructureName,academicYear:f.academicYear});return(0,i.jsxs)("section",{className:`print-page report-page-break broadsheet-template-page broadsheet-compact-page ${h||""}`,style:I,children:[j.backgroundImage&&(0,i.jsx)("img",{src:j.backgroundImage,alt:"","aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,pointerEvents:"none",zIndex:0}}),d&&y.showBroadsheetWatermark&&j.watermark&&(0,i.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.035,pointerEvents:"none",zIndex:0},children:(0,i.jsx)("img",{src:j.watermark,alt:"",style:{width:"42%",maxHeight:"58%",objectFit:"contain"}})}),(0,i.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,i.jsx)("div",{style:{borderRadius:8,overflow:"hidden",boxShadow:"none",marginBottom:n?4:5},children:(0,i.jsx)(_,{kind:e,branding:j,settings:y,title:"class"===e?"Class Broadsheet":"annual"===e?"Annual Cumulative Broadsheet":"Subject Broadsheet",subtitle:N.subtitle,academicStructureName:N.academicStructureName||S.academicStructureName,academicPeriodName:S.academicPeriodName,academicYear:N.academicYear,className:N.className,subjectName:N.subjectName,teacherName:N.teacherName,generatedAt:c,compact:n})}),"subject"===e&&(0,i.jsx)(X,{dataset:t,settings:y,compact:n,primary:k}),"class"===e&&(0,i.jsx)(q,{dataset:t,settings:y,compact:n,primary:k}),"annual"===e&&(0,i.jsx)(J,{dataset:t,settings:y,compact:n,primary:k}),y.showBroadsheetSignatures&&(0,i.jsx)("div",{style:{marginTop:n?5:7,display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:n?18:28},children:["Prepared By","Checked By","Headteacher / Principal"].map(e=>(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)("div",{style:{height:n?12:17}}),(0,i.jsx)("div",{style:{borderTop:"1px solid #dbe3ee",paddingTop:3,fontSize:n?8.5:9.5,fontWeight:850},children:e})]},e))}),(0,i.jsx)(Z,{settings:y,schoolName:j.schoolName,pageNumber:m,totalPages:p,compact:n})]})]})}function X({dataset:e,settings:t,compact:r,primary:o}){let n=Y(r,o),s=(0,a.useMemo)(()=>y({dataset:e,settings:t}),[e,t]);return(0,i.jsxs)(i.Fragment,{children:[t.showBroadsheetSummary&&(0,i.jsx)(V,{compact:r,items:[{label:"Students",value:e.students.length},{label:"Highest Score",value:`${d(e.highestScore,1)}%`,show:!1!==t.showBroadsheetHighestScore},{label:"Lowest Score",value:`${d(e.lowestScore,1)}%`,show:!1!==t.showBroadsheetLowestScore},{label:"Class Average",value:`${d(e.classAverage,1)}%`,show:!1!==t.showBroadsheetClassAverage}]}),(0,i.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,i.jsxs)("table",{style:n.table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...n.th,width:26},children:"#"}),(0,i.jsx)("th",{style:{...n.th,textAlign:"left",minWidth:145},children:t.studentColumnLabel||"Student"}),!1!==t.showBroadsheetAssessmentBreakdown&&s.map(e=>(0,i.jsxs)("th",{style:n.th,children:[t.broadsheetShowAssessmentGroupHeaders&&e.groupLabel&&(0,i.jsx)("div",{style:{marginBottom:1,fontSize:"0.92em",opacity:.92,textTransform:"uppercase"},children:e.groupLabel}),(0,i.jsx)("div",{children:j(e,t)}),(t.showAssessmentWeights||t.showAssessmentMaximumScores)&&(0,i.jsxs)("div",{style:{marginTop:1,fontSize:"0.96em"},children:[t.showAssessmentWeights?`W:${d(e.effectiveWeight??e.weight,0)}`:"",t.showAssessmentWeights&&t.showAssessmentMaximumScores?" \xb7 ":"",t.showAssessmentMaximumScores?`M:${d(e.maxScore,0)}`:""]})]},e.assessmentStructureItemId)),!1!==t.showBroadsheetWeightedTotal&&(0,i.jsx)("th",{style:n.th,children:"Weighted"}),!1!==t.showBroadsheetPercentage&&(0,i.jsx)("th",{style:n.th,children:"%"}),!1!==t.showBroadsheetGrade&&(0,i.jsx)("th",{style:n.th,children:t.gradeColumnLabel||"Grade"}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("th",{style:n.th,children:"GPA"}),!1!==t.showBroadsheetPosition&&(0,i.jsx)("th",{style:n.th,children:t.positionColumnLabel||"Position"}),!1!==t.showBroadsheetRemark&&(0,i.jsx)("th",{style:{...n.th,minWidth:80},children:t.remarkColumnLabel||"Remark"})]})}),(0,i.jsx)("tbody",{children:e.students.map((e,a)=>(0,i.jsxs)("tr",{style:{background:a%2==0?"#ffffff":"#f8fafc"},children:[(0,i.jsx)("td",{style:{...n.td,textAlign:"center"},children:a+1}),(0,i.jsx)("td",{style:n.td,children:(0,i.jsx)(U,{student:e,settings:t,compact:r})}),!1!==t.showBroadsheetAssessmentBreakdown&&s.map(r=>{let a=e.breakdown.find(e=>e.assessmentStructureItemId===r.assessmentStructureItemId);return(0,i.jsx)("td",{style:{...n.td,textAlign:"center"},children:S({item:a,settings:t})},r.assessmentStructureItemId)}),!1!==t.showBroadsheetWeightedTotal&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center",fontWeight:850},children:d(e.weightedTotal,1)}),!1!==t.showBroadsheetPercentage&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center",fontWeight:850},children:c(e.percentage,1)}),!1!==t.showBroadsheetGrade&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center",fontWeight:900},children:e.grade||"-"}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center"},children:null!=e.gpa?d(e.gpa,2):"-"}),!1!==t.showBroadsheetPosition&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center"},children:m(e.position)}),!1!==t.showBroadsheetRemark&&(0,i.jsx)("td",{style:{...n.td,whiteSpace:"normal",minWidth:80},children:e.remark||"-"})]},e.studentId))})]})})]})}function q({dataset:e,settings:t,compact:r,primary:a}){let o=Y(r,a);return(0,i.jsxs)(i.Fragment,{children:[t.showBroadsheetSummary&&(0,i.jsx)(V,{compact:r,items:[{label:"Students",value:e.students.length},{label:"Subjects",value:e.subjectColumns.length},{label:"Highest Average",value:`${d(e.highestAverage,1)}%`,show:!1!==t.showBroadsheetClassHighestAverage},{label:"Lowest Average",value:`${d(e.lowestAverage,1)}%`,show:!1!==t.showBroadsheetClassLowestAverage},{label:"Class Average",value:`${d(e.classAverage,1)}%`}]}),(0,i.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,i.jsxs)("table",{style:o.table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...o.th,width:26},children:"#"}),(0,i.jsx)("th",{style:{...o.th,textAlign:"left",minWidth:145},children:t.studentColumnLabel||"Student"}),!1!==t.showBroadsheetSubjectScores&&e.subjectColumns.map(e=>(0,i.jsxs)("th",{style:o.th,children:[e.shortName||e.subjectCode||e.subjectName,(0,i.jsx)("div",{style:{marginTop:1,maxWidth:65,whiteSpace:"normal",fontSize:"0.94em"},children:e.subjectName})]},e.classSubjectId)),!1!==t.showBroadsheetTotal&&(0,i.jsx)("th",{style:o.th,children:"Total"}),!1!==t.showBroadsheetAverage&&(0,i.jsx)("th",{style:o.th,children:"Average"}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("th",{style:o.th,children:"GPA"}),!1!==t.showBroadsheetClassPosition&&(0,i.jsx)("th",{style:o.th,children:t.positionColumnLabel||"Position"}),!1!==t.showBroadsheetAttendance&&(0,i.jsx)("th",{style:o.th,children:"Attendance"})]})}),(0,i.jsx)("tbody",{children:e.students.map((a,n)=>(0,i.jsxs)("tr",{style:{background:n%2==0?"#ffffff":"#f8fafc"},children:[(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:n+1}),(0,i.jsx)("td",{style:o.td,children:(0,i.jsx)(U,{student:a,settings:t,compact:r})}),!1!==t.showBroadsheetSubjectScores&&e.subjectColumns.map(e=>{let r=a.subjects.find(t=>t.classSubjectId===e.classSubjectId);return(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:d(r.percentage,1)}),t.showBroadsheetSubjectGrades&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.96em"},children:r.grade||"-"})]}):"-"},e.classSubjectId)}),!1!==t.showBroadsheetTotal&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:850},children:d(a.total,1)}),!1!==t.showBroadsheetAverage&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:900},children:c(a.average,1)}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:null!=a.gpa?d(a.gpa,2):"-"}),!1!==t.showBroadsheetClassPosition&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:m(a.position)}),!1!==t.showBroadsheetAttendance&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:c(a.attendancePercent,1)})]},a.studentId))})]})})]})}function J({dataset:e,settings:t,compact:r,primary:a}){let o=Y(r,a);return(0,i.jsxs)(i.Fragment,{children:[t.showBroadsheetSummary&&(0,i.jsx)(V,{compact:r,items:[{label:"Students",value:e.totalStudents},{label:"Subjects",value:e.totalSubjects},{label:"Periods",value:e.totalPeriods},{label:"Highest Average",value:`${d(e.highestAverage,1)}%`},{label:"Lowest Average",value:`${d(e.lowestAverage,1)}%`},{label:"Class Average",value:`${d(e.classAverage,1)}%`},{label:"Promote",value:e.promotionCount,show:!1!==t.showBroadsheetPromotionDecision},{label:"Repeat",value:e.repeatCount,show:!1!==t.showBroadsheetPromotionDecision}]}),t.showBroadsheetStatistics&&e.periodNames.length>0&&(0,i.jsxs)("div",{style:{marginBottom:r?5:7,fontSize:r?8.5:9.5,fontWeight:800},children:["Periods: ",e.periodNames.join("  •  ")]}),(0,i.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,i.jsxs)("table",{style:o.table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...o.th,width:26},children:"#"}),(0,i.jsx)("th",{style:{...o.th,textAlign:"left",minWidth:145},children:t.studentColumnLabel||"Student"}),e.subjectColumns.map(e=>(0,i.jsxs)("th",{style:o.th,children:[e.shortName||e.subjectCode||e.subjectName,(0,i.jsx)("div",{style:{marginTop:1,maxWidth:62,whiteSpace:"normal",fontSize:"0.94em"},children:e.subjectName})]},`${e.subjectId||e.subjectName}`)),!1!==t.showBroadsheetAnnualAverage&&(0,i.jsx)("th",{style:o.th,children:"Annual Avg."}),!1!==t.showBroadsheetAnnualGPA&&(0,i.jsx)("th",{style:o.th,children:"GPA"}),!1!==t.showBroadsheetAnnualPosition&&(0,i.jsx)("th",{style:o.th,children:t.positionColumnLabel||"Position"}),!1!==t.showBroadsheetPromotionDecision&&(0,i.jsx)("th",{style:o.th,children:"Decision"})]})}),(0,i.jsx)("tbody",{children:e.students.map((a,n)=>{var s;return(0,i.jsxs)("tr",{style:{background:n%2==0?"#ffffff":"#f8fafc"},children:[(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:n+1}),(0,i.jsx)("td",{style:o.td,children:(0,i.jsx)(Q,{student:a,settings:t,compact:r})}),e.subjectColumns.map(e=>{let r=a.subjects.find(t=>e.subjectId&&t.subjectId===e.subjectId||t.subjectName===e.subjectName);return(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:d(r.average,1)}),t.showBroadsheetPeriodScores&&r.periodScores.length>0&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.92em",whiteSpace:"normal",lineHeight:1.15},children:r.periodScores.map(e=>`${e.academicPeriodName}: ${d(e.percentage,0)}`).join(" \xb7 ")})]}):"-"},`${e.subjectId||e.subjectName}`)}),!1!==t.showBroadsheetAnnualAverage&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:900},children:c(a.average,1)}),!1!==t.showBroadsheetAnnualGPA&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:null!=a.gpa?d(a.gpa,2):"-"}),!1!==t.showBroadsheetAnnualPosition&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:m(a.position)}),!1!==t.showBroadsheetPromotionDecision&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:850},children:(s=a.finalDecision||a.recommendation)?s.charAt(0).toUpperCase()+s.slice(1):"-"})]},a.studentId)})})]})})]})}function Q({student:e,settings:t,compact:r}){return(0,i.jsxs)("div",{style:{minWidth:r?132:155},children:[(0,i.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.studentName||"-"}),e.admissionNumber&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#475569"},children:e.admissionNumber})]})}function ee({kind:e,branding:t,settings:r,title:a,subtitle:o,academicStructureName:n,academicPeriodName:s,className:d,subjectName:c,teacherName:m,academicYear:h,generatedAt:u,compact:g=!1}){let b=t.primaryColor||"#1e293b",x=l(a,r.broadsheetTitleLabel,"class"===e?"Class Performance Broadsheet":"annual"===e?"Annual Performance Review":"Subject Performance Broadsheet"),f=r.showBroadsheetGeneratedDate&&u?p(u):"",w=[n?{label:"Structure",value:n}:null,s?{label:"Period",value:s}:null,h?{label:"Year",value:h}:null,d?{label:"Class",value:d}:null,c?{label:"Subject",value:c}:null,m?{label:"Teacher",value:m}:null].filter(Boolean);return(0,i.jsxs)("header",{className:"broadsheet-executive-header",style:{position:"relative",marginBottom:g?8:10,border:"1px solid #cbd5e1",borderRadius:14,overflow:"hidden",background:"#fff",fontFamily:t.fontFamily||"Arial, sans-serif",boxShadow:"0 12px 30px rgba(15,23,42,.08)"},children:[(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:r.showBroadsheetLogo&&t.logo?`${g?44:52}px minmax(0,1fr) ${g?195:230}px`:`minmax(0,1fr) ${g?195:230}px`,gap:g?10:13,alignItems:"center",padding:g?"5px 11px":"9px 14px",background:"#ffffff"},children:[r.showBroadsheetLogo&&t.logo&&(0,i.jsx)("div",{style:{width:g?44:52,height:g?44:52,borderRadius:12,border:"1px solid #cbd5e1",background:"#f8fafc",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)("img",{src:t.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:5,boxSizing:"border-box"}})}),(0,i.jsxs)("div",{style:{minWidth:0},children:[(0,i.jsx)("div",{style:{fontSize:g?15.5:18.5,fontWeight:950,lineHeight:1.03,textTransform:"uppercase",letterSpacing:.25,color:"#0f172a",overflowWrap:"anywhere"},children:t.schoolName}),(t.motto||t.branchName)&&(0,i.jsx)("div",{style:{marginTop:2,fontSize:g?9.2:10,fontWeight:760,color:"#475569"},children:[t.motto,t.branchName].filter(Boolean).join("  •  ")}),(0,i.jsx)("div",{style:{marginTop:4,fontSize:g?9.2:10,fontWeight:650,color:"#475569"},children:[t.address,t.phone,t.email].filter(Boolean).join("  •  ")})]}),(0,i.jsxs)("div",{"data-report-color-block":"true",style:{minWidth:0,padding:g?"7px 11px":"9px 13px",borderRadius:12,background:`linear-gradient(135deg, ${b}, #0f172a)`,color:"#fff",boxShadow:"0 10px 24px rgba(15,23,42,.16)"},children:[(0,i.jsx)("div",{style:{fontSize:g?9.5:10.4,fontWeight:950,lineHeight:1.07,textTransform:"uppercase",letterSpacing:.28},children:x}),o&&(0,i.jsx)("div",{style:{marginTop:2,fontSize:g?8.5:9.3,fontWeight:720,opacity:.92,lineHeight:1.08},children:o}),f&&(0,i.jsxs)("div",{style:{marginTop:5,paddingTop:3,borderTop:"1px solid rgba(255,255,255,.25)",fontSize:g?8:8.7,fontWeight:760},children:[r.broadsheetGeneratedDateLabel||"Generated",":"," ",f]})]})]}),w.length>0&&(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(w.length,6)}, minmax(0,1fr))`,borderTop:"1px solid #e2e8f0",background:"#f8fafc"},children:w.map((e,t)=>(0,i.jsxs)("div",{style:{minWidth:0,padding:g?"2px 8px":"4px 9px",borderLeft:0===t?"0":"1px solid #e2e8f0"},children:[(0,i.jsx)("div",{style:{fontSize:g?7.8:8.5,fontWeight:900,textTransform:"uppercase",letterSpacing:.25,color:"#475569"},children:e.label}),(0,i.jsx)("div",{style:{marginTop:1,fontSize:g?9:9.7,fontWeight:900,color:"#0f172a",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.value})]},`${e.label}-${e.value}`))}),(0,i.jsx)("div",{"aria-hidden":"true",style:{height:4,background:`linear-gradient(90deg, ${b}, #0f172a, ${b})`}}),(0,i.jsx)("style",{children:`
        @media print {
          .broadsheet-executive-header {
            box-shadow: none !important;
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }

          .broadsheet-executive-header [data-report-color-block="true"] {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
        }
      `})]})}function et(e,t){return{table:{width:"100%",borderCollapse:"separate",borderSpacing:0,tableLayout:"auto",fontSize:e?8.5:9.5,lineHeight:1.15,color:"#172033",border:"1px solid #cbd5e1",borderRadius:10,overflow:"hidden",background:"#fff",boxShadow:"0 8px 18px rgba(15,23,42,.045)"},th:{border:"0",borderRight:"1px solid rgba(255,255,255,.22)",borderBottom:"1px solid #dbe3ee",padding:e?"2.5px 2px":"3px 2.5px",background:`linear-gradient(180deg, ${t}, ${t}e8)`,color:"#fff",textAlign:"center",verticalAlign:"middle",fontWeight:900,whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.15},td:{border:"0",borderRight:"1px solid #e7edf5",borderBottom:"1px solid #e7edf5",padding:e?"1.5px 2px":"2px 2.5px",verticalAlign:"middle",whiteSpace:"nowrap",background:"#fff"}}}function er({items:e,compact:t}){let r=e.filter(e=>!1!==e.show);return r.length?(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(r.length,8)}, minmax(0,1fr))`,gap:t?5:7,marginBottom:t?7:9},children:r.map(e=>(0,i.jsxs)("div",{style:{minWidth:0,padding:t?"2.5px 4px":"3px 5px",border:"1px solid #dbe3ee",borderTop:"3px solid #334155",borderRadius:10,background:"#ffffff",boxShadow:"0 8px 18px rgba(15,23,42,.055)"},children:[(0,i.jsx)("div",{style:{fontSize:t?8.2:9,fontWeight:900,textTransform:"uppercase",letterSpacing:0,color:"#475569"},children:e.label}),(0,i.jsx)("div",{style:{marginTop:1,fontSize:t?10:11,fontWeight:900,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.value})]},e.label))}):null}function ei({student:e,settings:t,compact:r}){let a=x(e);return(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:t.showBroadsheetStudentPhoto&&a?`${r?21:25}px minmax(0,1fr)`:"minmax(0,1fr)",gap:r?4:5,alignItems:"center",minWidth:r?132:155},children:[t.showBroadsheetStudentPhoto&&a&&(0,i.jsx)("img",{src:a,alt:"Student",style:{width:r?21:25,height:r?21:25,objectFit:"cover",border:"2px solid #e2e8f0",borderRadius:8}}),(0,i.jsxs)("div",{style:{minWidth:0},children:[(0,i.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.studentName||"-"}),e.admissionNumber&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#475569"},children:e.admissionNumber})]})]})}function ea({settings:e,schoolName:t,pageNumber:r,totalPages:a,compact:o}){return(0,i.jsxs)("footer",{style:{marginTop:o?5:7,paddingTop:o?2:3,borderTop:"2px solid #cbd5e1",display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,fontSize:o?8.5:9.5,color:"#333"},children:[(0,i.jsx)("span",{children:e.broadsheetFooterText||`Official academic broadsheet generated for ${t}.`}),e.showBroadsheetPageNumber&&(0,i.jsxs)("span",{style:{whiteSpace:"nowrap",fontWeight:800},children:["Page ",r||1,a?` of ${a}`:""]})]})}function eo({kind:e,dataset:t,header:r,template:a,settings:o,compact:n=!1,pageBreakAfter:s=!0,showWatermark:d=!0,generatedAt:c,pageNumber:m,totalPages:p,className:h,style:u}){var x,f;let v,y=g({kind:e,template:a,settings:o}),j=b(r),S=(v=r||{},{academicStructureName:l(v.academicStructure?.name,v.academicStructureName),academicPeriodName:l(v.academicPeriod?.name,v.academicPeriodName)}),k=j.primaryColor||"#111",I={...w({branding:j,settings:y,compact:n,pageBreakAfter:s,tone:"classic"}),...u,background:"#fff",color:"#172033",border:"1px solid #cbd5e1",borderRadius:14,boxShadow:"0 24px 60px rgba(15,23,42,.12)"};if(!t)return null;let N=(x=e,f=t,"subject"===x?{subtitle:`${f.className||"Class"} • ${f.students?.length||0} Students`,className:f.className,subjectName:f.subjectName,teacherName:f.teacherName,academicStructureName:"",academicYear:""}:"class"===x?{subtitle:`${f.className||"Class"} • ${f.students?.length||0} Students • ${f.subjectColumns?.length||0} Subjects`,className:f.className,subjectName:"",teacherName:"",academicStructureName:"",academicYear:""}:{subtitle:`${f.className||"Class"} • ${f.academicYear||"Academic Year"} • ${f.totalStudents||0} Students`,className:f.className,subjectName:"",teacherName:"",academicStructureName:f.academicStructureName,academicYear:f.academicYear});return(0,i.jsxs)("section",{className:`print-page report-page-break broadsheet-template-page broadsheet-executive-page ${h||""}`,style:I,children:[j.backgroundImage&&(0,i.jsx)("img",{src:j.backgroundImage,alt:"","aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,pointerEvents:"none",zIndex:0}}),d&&y.showBroadsheetWatermark&&j.watermark&&(0,i.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.035,pointerEvents:"none",zIndex:0},children:(0,i.jsx)("img",{src:j.watermark,alt:"",style:{width:"42%",maxHeight:"58%",objectFit:"contain"}})}),(0,i.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,i.jsx)("div",{style:{borderRadius:14,overflow:"hidden",boxShadow:"0 10px 28px rgba(15,23,42,.08)",marginBottom:n?8:10},children:(0,i.jsx)(ee,{kind:e,branding:j,settings:y,title:"class"===e?"Class Broadsheet":"annual"===e?"Annual Cumulative Broadsheet":"Subject Broadsheet",subtitle:N.subtitle,academicStructureName:N.academicStructureName||S.academicStructureName,academicPeriodName:S.academicPeriodName,academicYear:N.academicYear,className:N.className,subjectName:N.subjectName,teacherName:N.teacherName,generatedAt:c,compact:n})}),"subject"===e&&(0,i.jsx)(en,{dataset:t,settings:y,compact:n,primary:k}),"class"===e&&(0,i.jsx)(es,{dataset:t,settings:y,compact:n,primary:k}),"annual"===e&&(0,i.jsx)(el,{dataset:t,settings:y,compact:n,primary:k}),y.showBroadsheetSignatures&&(0,i.jsx)("div",{style:{marginTop:n?8:12,display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:n?18:28},children:["Prepared By","Checked By","Headteacher / Principal"].map(e=>(0,i.jsxs)("div",{style:{textAlign:"center"},children:[(0,i.jsx)("div",{style:{height:n?12:17}}),(0,i.jsx)("div",{style:{borderTop:"1px solid #dbe3ee",paddingTop:3,fontSize:n?8.5:9.5,fontWeight:850},children:e})]},e))}),(0,i.jsx)(ea,{settings:y,schoolName:j.schoolName,pageNumber:m,totalPages:p,compact:n})]})]})}function en({dataset:e,settings:t,compact:r,primary:o}){let n=et(r,o),s=(0,a.useMemo)(()=>y({dataset:e,settings:t}),[e,t]);return(0,i.jsxs)(i.Fragment,{children:[t.showBroadsheetSummary&&(0,i.jsx)(er,{compact:r,items:[{label:"Students",value:e.students.length},{label:"Highest Score",value:`${d(e.highestScore,1)}%`,show:!1!==t.showBroadsheetHighestScore},{label:"Lowest Score",value:`${d(e.lowestScore,1)}%`,show:!1!==t.showBroadsheetLowestScore},{label:"Class Average",value:`${d(e.classAverage,1)}%`,show:!1!==t.showBroadsheetClassAverage}]}),(0,i.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,i.jsxs)("table",{style:n.table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...n.th,width:26},children:"#"}),(0,i.jsx)("th",{style:{...n.th,textAlign:"left",minWidth:145},children:t.studentColumnLabel||"Student"}),!1!==t.showBroadsheetAssessmentBreakdown&&s.map(e=>(0,i.jsxs)("th",{style:n.th,children:[t.broadsheetShowAssessmentGroupHeaders&&e.groupLabel&&(0,i.jsx)("div",{style:{marginBottom:1,fontSize:"0.92em",opacity:.92,textTransform:"uppercase"},children:e.groupLabel}),(0,i.jsx)("div",{children:j(e,t)}),(t.showAssessmentWeights||t.showAssessmentMaximumScores)&&(0,i.jsxs)("div",{style:{marginTop:1,fontSize:"0.96em"},children:[t.showAssessmentWeights?`W:${d(e.effectiveWeight??e.weight,0)}`:"",t.showAssessmentWeights&&t.showAssessmentMaximumScores?" \xb7 ":"",t.showAssessmentMaximumScores?`M:${d(e.maxScore,0)}`:""]})]},e.assessmentStructureItemId)),!1!==t.showBroadsheetWeightedTotal&&(0,i.jsx)("th",{style:n.th,children:"Weighted"}),!1!==t.showBroadsheetPercentage&&(0,i.jsx)("th",{style:n.th,children:"%"}),!1!==t.showBroadsheetGrade&&(0,i.jsx)("th",{style:n.th,children:t.gradeColumnLabel||"Grade"}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("th",{style:n.th,children:"GPA"}),!1!==t.showBroadsheetPosition&&(0,i.jsx)("th",{style:n.th,children:t.positionColumnLabel||"Position"}),!1!==t.showBroadsheetRemark&&(0,i.jsx)("th",{style:{...n.th,minWidth:80},children:t.remarkColumnLabel||"Remark"})]})}),(0,i.jsx)("tbody",{children:e.students.map((e,a)=>(0,i.jsxs)("tr",{style:{background:a%2==0?"#ffffff":"#f8fafc"},children:[(0,i.jsx)("td",{style:{...n.td,textAlign:"center"},children:a+1}),(0,i.jsx)("td",{style:n.td,children:(0,i.jsx)(ei,{student:e,settings:t,compact:r})}),!1!==t.showBroadsheetAssessmentBreakdown&&s.map(r=>{let a=e.breakdown.find(e=>e.assessmentStructureItemId===r.assessmentStructureItemId);return(0,i.jsx)("td",{style:{...n.td,textAlign:"center"},children:S({item:a,settings:t})},r.assessmentStructureItemId)}),!1!==t.showBroadsheetWeightedTotal&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center",fontWeight:850},children:d(e.weightedTotal,1)}),!1!==t.showBroadsheetPercentage&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center",fontWeight:850},children:c(e.percentage,1)}),!1!==t.showBroadsheetGrade&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center",fontWeight:900},children:e.grade||"-"}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center"},children:null!=e.gpa?d(e.gpa,2):"-"}),!1!==t.showBroadsheetPosition&&(0,i.jsx)("td",{style:{...n.td,textAlign:"center"},children:m(e.position)}),!1!==t.showBroadsheetRemark&&(0,i.jsx)("td",{style:{...n.td,whiteSpace:"normal",minWidth:80},children:e.remark||"-"})]},e.studentId))})]})})]})}function es({dataset:e,settings:t,compact:r,primary:a}){let o=et(r,a);return(0,i.jsxs)(i.Fragment,{children:[t.showBroadsheetSummary&&(0,i.jsx)(er,{compact:r,items:[{label:"Students",value:e.students.length},{label:"Subjects",value:e.subjectColumns.length},{label:"Highest Average",value:`${d(e.highestAverage,1)}%`,show:!1!==t.showBroadsheetClassHighestAverage},{label:"Lowest Average",value:`${d(e.lowestAverage,1)}%`,show:!1!==t.showBroadsheetClassLowestAverage},{label:"Class Average",value:`${d(e.classAverage,1)}%`}]}),(0,i.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,i.jsxs)("table",{style:o.table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...o.th,width:26},children:"#"}),(0,i.jsx)("th",{style:{...o.th,textAlign:"left",minWidth:145},children:t.studentColumnLabel||"Student"}),!1!==t.showBroadsheetSubjectScores&&e.subjectColumns.map(e=>(0,i.jsxs)("th",{style:o.th,children:[e.shortName||e.subjectCode||e.subjectName,(0,i.jsx)("div",{style:{marginTop:1,maxWidth:65,whiteSpace:"normal",fontSize:"0.94em"},children:e.subjectName})]},e.classSubjectId)),!1!==t.showBroadsheetTotal&&(0,i.jsx)("th",{style:o.th,children:"Total"}),!1!==t.showBroadsheetAverage&&(0,i.jsx)("th",{style:o.th,children:"Average"}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("th",{style:o.th,children:"GPA"}),!1!==t.showBroadsheetClassPosition&&(0,i.jsx)("th",{style:o.th,children:t.positionColumnLabel||"Position"}),!1!==t.showBroadsheetAttendance&&(0,i.jsx)("th",{style:o.th,children:"Attendance"})]})}),(0,i.jsx)("tbody",{children:e.students.map((a,n)=>(0,i.jsxs)("tr",{style:{background:n%2==0?"#ffffff":"#f8fafc"},children:[(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:n+1}),(0,i.jsx)("td",{style:o.td,children:(0,i.jsx)(ei,{student:a,settings:t,compact:r})}),!1!==t.showBroadsheetSubjectScores&&e.subjectColumns.map(e=>{let r=a.subjects.find(t=>t.classSubjectId===e.classSubjectId);return(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:d(r.percentage,1)}),t.showBroadsheetSubjectGrades&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.96em"},children:r.grade||"-"})]}):"-"},e.classSubjectId)}),!1!==t.showBroadsheetTotal&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:850},children:d(a.total,1)}),!1!==t.showBroadsheetAverage&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:900},children:c(a.average,1)}),!1!==t.showBroadsheetGPA&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:null!=a.gpa?d(a.gpa,2):"-"}),!1!==t.showBroadsheetClassPosition&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:m(a.position)}),!1!==t.showBroadsheetAttendance&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:c(a.attendancePercent,1)})]},a.studentId))})]})})]})}function el({dataset:e,settings:t,compact:r,primary:a}){let o=et(r,a);return(0,i.jsxs)(i.Fragment,{children:[t.showBroadsheetSummary&&(0,i.jsx)(er,{compact:r,items:[{label:"Students",value:e.totalStudents},{label:"Subjects",value:e.totalSubjects},{label:"Periods",value:e.totalPeriods},{label:"Highest Average",value:`${d(e.highestAverage,1)}%`},{label:"Lowest Average",value:`${d(e.lowestAverage,1)}%`},{label:"Class Average",value:`${d(e.classAverage,1)}%`},{label:"Promote",value:e.promotionCount,show:!1!==t.showBroadsheetPromotionDecision},{label:"Repeat",value:e.repeatCount,show:!1!==t.showBroadsheetPromotionDecision}]}),t.showBroadsheetStatistics&&e.periodNames.length>0&&(0,i.jsxs)("div",{style:{marginBottom:r?5:7,fontSize:r?8.5:9.5,fontWeight:800},children:["Periods: ",e.periodNames.join("  •  ")]}),(0,i.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,i.jsxs)("table",{style:o.table,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...o.th,width:26},children:"#"}),(0,i.jsx)("th",{style:{...o.th,textAlign:"left",minWidth:145},children:t.studentColumnLabel||"Student"}),e.subjectColumns.map(e=>(0,i.jsxs)("th",{style:o.th,children:[e.shortName||e.subjectCode||e.subjectName,(0,i.jsx)("div",{style:{marginTop:1,maxWidth:62,whiteSpace:"normal",fontSize:"0.94em"},children:e.subjectName})]},`${e.subjectId||e.subjectName}`)),!1!==t.showBroadsheetAnnualAverage&&(0,i.jsx)("th",{style:o.th,children:"Annual Avg."}),!1!==t.showBroadsheetAnnualGPA&&(0,i.jsx)("th",{style:o.th,children:"GPA"}),!1!==t.showBroadsheetAnnualPosition&&(0,i.jsx)("th",{style:o.th,children:t.positionColumnLabel||"Position"}),!1!==t.showBroadsheetPromotionDecision&&(0,i.jsx)("th",{style:o.th,children:"Decision"})]})}),(0,i.jsx)("tbody",{children:e.students.map((a,n)=>{var s;return(0,i.jsxs)("tr",{style:{background:n%2==0?"#ffffff":"#f8fafc"},children:[(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:n+1}),(0,i.jsx)("td",{style:o.td,children:(0,i.jsx)(ed,{student:a,settings:t,compact:r})}),e.subjectColumns.map(e=>{let r=a.subjects.find(t=>e.subjectId&&t.subjectId===e.subjectId||t.subjectName===e.subjectName);return(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:d(r.average,1)}),t.showBroadsheetPeriodScores&&r.periodScores.length>0&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.92em",whiteSpace:"normal",lineHeight:1.15},children:r.periodScores.map(e=>`${e.academicPeriodName}: ${d(e.percentage,0)}`).join(" \xb7 ")})]}):"-"},`${e.subjectId||e.subjectName}`)}),!1!==t.showBroadsheetAnnualAverage&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:900},children:c(a.average,1)}),!1!==t.showBroadsheetAnnualGPA&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:null!=a.gpa?d(a.gpa,2):"-"}),!1!==t.showBroadsheetAnnualPosition&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center"},children:m(a.position)}),!1!==t.showBroadsheetPromotionDecision&&(0,i.jsx)("td",{style:{...o.td,textAlign:"center",fontWeight:850},children:(s=a.finalDecision||a.recommendation)?s.charAt(0).toUpperCase()+s.slice(1):"-"})]},a.studentId)})})]})})]})}function ed({student:e,settings:t,compact:r}){return(0,i.jsxs)("div",{style:{minWidth:r?132:155},children:[(0,i.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:e.studentName||"-"}),e.admissionNumber&&(0,i.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#475569"},children:e.admissionNumber})]})}let ec=["subject","class","annual"],em=[{code:"broadsheet_classic",layoutKey:"broadsheet_classic",name:"Classic Broadsheet",description:"Formal bordered academic table with strong print readability.",tone:"classic",supportedKinds:ec,orientation:"landscape",paperSize:"A4",density:"compact",aliases:["classic","default","formal","traditional"],fileName:"ClassicBroadsheetTemplate.tsx",isDefault:!0,active:!0,component:A},{code:"broadsheet_modern",layoutKey:"broadsheet_modern",name:"Modern Broadsheet",description:"Clean contemporary layout with soft summary cards and refined tables.",tone:"modern",supportedKinds:ec,orientation:"landscape",paperSize:"A4",density:"comfortable",aliases:["modern","clean","modern_clean"],fileName:"ModernBroadsheetTemplate.tsx",active:!0,component:D},{code:"broadsheet_compact",layoutKey:"broadsheet_compact",name:"Compact Broadsheet",description:"Dense paper-efficient layout for large classes and many subjects.",tone:"compact",supportedKinds:ec,orientation:"landscape",paperSize:"A4",density:"compact",aliases:["compact","print","space_saving","dense"],fileName:"CompactBroadsheetTemplate.tsx",active:!0,component:K},{code:"broadsheet_executive",layoutKey:"broadsheet_executive",name:"Executive Broadsheet",description:"Premium leadership-focused presentation with prominent academic summaries.",tone:"executive",supportedKinds:ec,orientation:"landscape",paperSize:"A4",density:"comfortable",aliases:["executive","premium","leadership","management"],fileName:"ExecutiveBroadsheetTemplate.tsx",active:!0,component:eo},{code:"broadsheet_minimal",layoutKey:"broadsheet_minimal",name:"Minimal Broadsheet",description:"Low-ink understated design with only essential lines and fields.",tone:"minimal",supportedKinds:ec,orientation:"landscape",paperSize:"A4",density:"compact",aliases:["minimal","simple","low_ink","plain"],fileName:"MinimalBroadsheetTemplate.tsx",active:!0},{code:"broadsheet_cambridge",layoutKey:"broadsheet_cambridge",name:"Cambridge Broadsheet",description:"International examination-board inspired structure for clear candidate results.",tone:"cambridge",supportedKinds:ec,orientation:"landscape",paperSize:"A4",density:"compact",aliases:["cambridge","international","candidate","exam_board"],fileName:"CambridgeBroadsheetTemplate.tsx",active:!0},{code:"broadsheet_university",layoutKey:"broadsheet_university",name:"University Broadsheet",description:"Registrar-style academic record suitable for tertiary and credit-based programmes.",tone:"university",supportedKinds:ec,orientation:"landscape",paperSize:"A4",density:"compact",aliases:["university","tertiary","registrar","credits"],fileName:"UniversityBroadsheetTemplate.tsx",active:!0},{code:"broadsheet_analytics",layoutKey:"broadsheet_analytics",name:"Analytics Broadsheet",description:"Insight-led design emphasizing performance, trends and decision statistics.",tone:"analytics",supportedKinds:ec,orientation:"landscape",paperSize:"A4",density:"comfortable",aliases:["analytics","insights","trends","dashboard"],fileName:"AnalyticsBroadsheetTemplate.tsx",active:!0}],ep=new Map([["broadsheet_classic",A],["broadsheet_modern",D],["broadsheet_compact",K],["broadsheet_executive",eo]]),eh=em.map(e=>({...e,get component(){return ep.get(h(e.code))}}));function eu(e){let t=h(e||n);return em.find(e=>[e.code,e.layoutKey,...e.aliases||[]].map(h).includes(t))||em[0]}function eg(e){let t=eu(e);return{...t,component:ep.get(h(t.code))}}function eb(e){let t=eu(e);return ep.get(h(t.code))}},73837:(e,t,r)=>{function i(e){let t=(e.ownerDocument||document).createTreeWalker(e,NodeFilter.SHOW_TEXT),r=[];for(;t.nextNode();){let e=t.currentNode,i=e.nodeValue||"";/^(\\n|\s)+$/.test(i)&&r.push(e)}r.forEach(e=>e.remove())}async function a(e){let t=e.contentDocument||e.contentWindow?.document;if(!t)return;let r=Array.from(t.images).map(e=>e.complete?Promise.resolve():new Promise(t=>{e.onload=()=>t(),e.onerror=()=>t()})),i=t.fonts?.ready?t.fonts.ready.catch(()=>void 0):Promise.resolve();await Promise.race([Promise.all([...r,i]),new Promise(e=>window.setTimeout(e,900))])}async function o({targetId:e,mode:t="single-student",orientation:r,pageSize:n="A4",title:s,onBeforePrint:l,onAfterPrint:d}){if("u"<typeof document)return;let c=document.getElementById(e);if(!c){console.error(`[Eleeveon Reports] Print target not found: ${e}`),alert("Report print area was not found. Please refresh and try again.");return}if(!(c.querySelector(".student-report-card-page, .classic-formal-template-page, .src-a4-page, .print-page, [data-report-page='true']")||c.textContent?.trim())){console.error(`[Eleeveon Reports] Print target is empty: ${e}`),alert("No report is available to print yet. Please select a report and try again.");return}l?.(),"u">typeof document&&document.querySelectorAll("iframe[data-eleeveon-report-print-frame='true']").forEach(e=>e.remove());let m=document.createElement("iframe");m.setAttribute("data-eleeveon-report-print-frame","true"),m.setAttribute("aria-hidden","true"),m.style.position="fixed",m.style.right="0",m.style.bottom="0",m.style.width="1px",m.style.height="1px",m.style.border="0",m.style.opacity="0",m.style.pointerEvents="none",m.style.zIndex="-1",document.body.appendChild(m);try{!function(e){var t;let r,a=e.iframe.contentDocument||e.iframe.contentWindow?.document;if(!a)throw Error("Unable to open report print frame.");let o=function(e){let t=["--ba-primary","--primary-color","--bg","--surface","--card-bg","--text","--muted","--border","--font-family","--font-size","--local-density-scale"],r=new Map;for(let i of[document.documentElement,document.body,...Array.from(document.querySelectorAll(".student-reports-page, .ba-page")),e].filter(Boolean)){let e=window.getComputedStyle(i);for(let i of t){let t=e.getPropertyValue(i).trim();t&&r.set(i,t)}}return Array.from(r.entries()).map(([e,t])=>`${e}: ${t};`).join(" ")}(e.target),n=function(){if("u"<typeof document)return"";let e=[];return document.querySelectorAll("style, link[rel='stylesheet']").forEach(t=>{"style"===t.tagName.toLowerCase()?e.push(t.outerHTML):t.href&&e.push(`<link rel="stylesheet" href="${t.href}">`)}),e.join("\n")}(),s=function(e){let{width:t,height:r}="landscape"===e.orientation?{width:"297mm",height:"210mm"}:{width:"210mm",height:"297mm"};return`
    @page {
      size: ${e.pageSize} ${e.orientation};
      margin: 0;
    }

    html,
    body {
      width: 100%;
      min-height: 100%;
      margin: 0 !important;
      padding: 0 !important;
      background: #ffffff !important;
      overflow: visible !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      display: block !important;
      font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      color: var(--text, #111827);
    }

    #eleeveon-report-print-root {
      width: 100% !important;
      min-height: auto !important;
      margin: 0 !important;
      padding: 0 !important;
      background: #ffffff !important;
      overflow: visible !important;
    }

    /*
     * Hide preview controls only. We are not hiding the whole document because
     * this iframe already contains only the report target.
     */
    .report-no-print,
    .report-no-print *,
    .src-mobile-toolbar,
    .src-mobile-toolbar *,
    .src-zoom-controls,
    .src-zoom-controls *,
    .src-zoom-menu,
    .src-zoom-menu *,
    .ba-print-head,
    .ba-report-toolbar {
      display: none !important;
      visibility: hidden !important;
    }

    /*
     * Reset PDF preview wrappers. They exist for screen preview only.
     */
    .src-preview-shell,
    .src-preview-scroll,
    .src-preview-center,
    .src-preview-scale,
    .report-screen-scroll,
    .report-preview-shell,
    .report-preview-scroll,
    .report-preview-center,
    .report-preview-scale {
      display: block !important;
      position: static !important;
      width: auto !important;
      height: auto !important;
      min-width: 0 !important;
      min-height: 0 !important;
      max-width: none !important;
      max-height: none !important;
      margin: 0 !important;
      padding: 0 !important;
      border: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
      box-shadow: none !important;
      overflow: visible !important;
      transform: none !important;
      transform-origin: top left !important;
      scale: 1 !important;
      zoom: 1 !important;
      opacity: 1 !important;
    }

    /*
     * Lock the actual selected report template page to real A4.
     * This ignores whether the preview was 20%, 30%, 100%, 200%, etc.
     */
    .student-report-card-page,
    .classic-formal-template-page,
    .classic-formal-template,
    .src-a4-page,
    .print-page,
    [data-report-page="true"] {
      display: block !important;
      position: relative !important;
      visibility: visible !important;
      width: ${t} !important;
      min-width: ${t} !important;
      max-width: ${t} !important;
      min-height: ${r} !important;
      margin: 0 auto !important;
      transform: none !important;
      transform-origin: top left !important;
      scale: 1 !important;
      zoom: 1 !important;
      box-shadow: none !important;
      overflow: hidden !important;
      background: #ffffff !important;
      page-break-inside: avoid !important;
      break-inside: avoid !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    .report-page-break {
      page-break-after: always !important;
      break-after: page !important;
    }

    .report-page-break:last-child {
      page-break-after: auto !important;
      break-after: auto !important;
    }

    table {
      width: 100% !important;
      border-collapse: collapse !important;
    }

    thead {
      display: table-header-group !important;
    }

    tfoot {
      display: table-footer-group !important;
    }

    tr,
    td,
    th {
      page-break-inside: avoid !important;
      break-inside: avoid !important;
    }

    img {
      max-width: 100% !important;
      print-color-adjust: exact !important;
      -webkit-print-color-adjust: exact !important;
    }

    @media print {
      html,
      body,
      #eleeveon-report-print-root {
        background: #ffffff !important;
      }
    }
  `}({orientation:e.orientation,pageSize:e.pageSize}),l=(r=Array.from((t=e.target).querySelectorAll(".student-report-card-page, .classic-formal-template-page, .src-a4-page, .print-page, [data-report-page='true']")).filter(e=>(e.textContent||"").replace(/\\n/g,"").trim().length>0||e.querySelector("img, table, svg"))).length?r.map(e=>e.cloneNode(!0)):[t.cloneNode(!0)];a.open(),a.write(`<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${e.title}</title>
  ${n}
  <style data-eleeveon-report-print-lock="true">${s}</style>
</head>
<body style="${o}">
  <div id="eleeveon-report-print-root" style="${o}"></div>
</body>
</html>`),a.close();let d=a.getElementById("eleeveon-report-print-root");if(!d)throw Error("Report print frame root was not created.");l.forEach((e,t)=>{i(e),l.length>1&&t<l.length-1&&e.classList.add("report-page-break"),d.appendChild(e)}),i(d)}({iframe:m,title:s||"Eleeveon Report",target:c,orientation:r||("single-student"===t||"whole-class-reports"===t?"portrait":"landscape"),pageSize:n}),await a(m);let e=m.contentWindow;if(!e)throw Error("Report print window was not available.");e.focus(),window.setTimeout(()=>{e.print(),window.setTimeout(()=>{m.remove(),d?.()},1500)},80)}catch(e){console.error("[Eleeveon Reports] Failed to print report:",e),m.remove(),alert("Unable to prepare the report for printing. Please refresh and try again.")}}r.d(t,{f:()=>o})},86106:(e,t,r)=>{r.d(t,{DS:()=>d,_6:()=>m,f5:()=>l,km:()=>p,p_:()=>c});let i="__root__";function a(e){return"string"==typeof e?e.trim():null==e?"":String(e).trim()}function o(e){return!0!==e.isDeleted&&!1!==e.active}function n(e){let t=Number(e.order);return Number.isFinite(t)?t:0}function s(e,t,r,i="error",o){return{code:e,severity:i,itemId:a(r?.id)||void 0,parentItemId:a(r?.parentItemId)||void 0,assessmentStructureId:a(r?.assessmentStructureId)||void 0,message:t,details:o}}function l(e){let t=[],r=e.filter(o),l=new Map;for(let e of r){let r=a(e.id);if(!r){t.push(s("MISSING_ITEM_ID","Assessment item is missing a permanent id.",e));continue}if(l.has(r)){t.push(s("DUPLICATE_ITEM_ID",`Assessment item id ${r} appears more than once.`,e));continue}l.set(r,e)}let d=new Map;for(let[r,i]of l){let o=a(i.parentItemId)||null;if(!o){d.set(r,null);continue}if(o===r){t.push(s("SELF_PARENT","Assessment item cannot be its own parent.",i)),d.set(r,null);continue}let n=l.get(o);if(!n){let n=e.find(e=>a(e.id)===o);t.push(s(n?.isDeleted?"DELETED_PARENT_WITH_ACTIVE_CHILD":"MISSING_PARENT",n?.isDeleted?`Active item points to deleted parent ${o}.`:`Assessment item points to missing parent ${o}.`,i,"error")),d.set(r,null);continue}if(a(n.assessmentStructureId)!==a(i.assessmentStructureId)){t.push(s("CROSS_STRUCTURE_PARENT","Assessment item and parent belong to different assessment structures.",i,"error",{parentStructureId:n.assessmentStructureId})),d.set(r,null);continue}d.set(r,o)}let c=new Set;for(let e of l.keys()){let r=[],i=new Map,o=e;for(;o;){if(i.has(o)){let n=i.get(o)??0,s=r.slice(n);for(let e of s)c.add(e);t.push({code:"CIRCULAR_PARENT_REFERENCE",severity:"error",itemId:e,assessmentStructureId:a(l.get(e)?.assessmentStructureId)||void 0,message:`Circular assessment hierarchy detected: ${[...s,o].join(" → ")}.`,details:{members:s}});break}i.set(o,r.length),r.push(o),o=d.get(o)??null}}for(let e of c)d.set(e,null);let m=new Map;for(let e of l.keys()){let t=d.get(e)??i,r=m.get(t)??[];r.push(e),m.set(t,r)}for(let e of m.values())e.sort((e,t)=>(function(e,t){let r=n(e)-n(t);if(0!==r)return r;let i=String(e.name??"").localeCompare(String(t.name??""));return 0!==i?i:a(e.id).localeCompare(a(t.id))})(l.get(e),l.get(t)));let p=new Map,h=[],u=(e,t,r)=>{let i=l.get(e),a=[...r,e],o={item:i,children:[],parent:t,depth:t?t.depth+1:0,path:a};return p.set(e,o),h.push(o),o.children=(m.get(e)??[]).map(e=>u(e,o,a)),o},g=(m.get(i)??[]).map(e=>u(e,null,[])),b=new Map;for(let e of(b.set(null,g),h))b.set(a(e.item.id),e.children);let x=new Map;for(let e of h){let r=String(e.item.path??"").trim();if(r){let i=x.get(r);i&&i!==a(e.item.id)?t.push(s("DUPLICATE_STORED_PATH",`Stored hierarchy path "${r}" is used by multiple assessment items.`,e.item,"warning",{otherItemId:i})):x.set(r,a(e.item.id))}let i=Number(e.item.level??0);Number.isFinite(i)&&i!==e.depth&&t.push(s("INVALID_STORED_LEVEL",`Stored level ${i} does not match calculated level ${e.depth}.`,e.item,"warning"))}return{roots:g,nodes:h,nodeById:p,childrenByParentId:b,issues:t}}function d(e){let t=Array.isArray(e)?e:e.roots,r=[],i=e=>{r.push(e),e.children.forEach(i)};return t.forEach(i),r}function c(e,t){let r=t.nodeById.get(e);if(!r)return[];let i=[],a=e=>{for(let t of e.children)i.push(t),a(t)};return a(r),i}function m(e){let t=Array.isArray(e)?e:e.roots,r=[],i=(e,t,o,n)=>{let s=a(e.item.id),l=[...o,s];r.push({itemId:s,parentItemId:t,level:o.length,path:l.join("/"),order:n}),e.children.forEach((e,t)=>i(e,s,l,t+1))};return t.forEach((e,t)=>i(e,null,[],t+1)),r}function p(e,t=!1){if(!o(e))return!1;let r=e.entryMode??(t?"from_children":"direct");return"from_children"!==r&&(!t||"direct_or_children"===r||!0===e.allowChildEntry)}},94075:(e,t,r)=>{r.d(t,{yo:()=>Y,FW:()=>Z,nO:()=>K,Ew:()=>U});var i=r(12115),a=r(15982),o=r(95155),n=r(32242);function s({header:e,dataset:t,title:r="Terminal / Periodic Academic Report",primaryColor:i,fontFamily:a,compact:l=!1,studentPhoto:d,showStudentPhoto:c=!0}){let m=e||t?.header,p=(0,n.wX)(m),h=i||(0,n.Ak)(m,p.primaryColor),u=(0,n.B_)(h),g=[p.address,p.phone?`Tel: ${p.phone}`:"",p.email,p.website].filter(Boolean).join("  |  "),b=[p.branchName,p.branchAddress].filter(Boolean).join(" \xb7 "),x=l?76:92;return(0,o.jsxs)("header",{className:"classic-formal-report-header",style:{fontFamily:a||p.fontFamily||"Arial, sans-serif",color:"#111",background:"#fff",borderBottom:`2px solid ${h}`,paddingBottom:l?3:5},children:[(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`${x}px 1fr ${x}px`,alignItems:"center",gap:l?7:9},children:[(0,o.jsx)("div",{style:{width:x,height:x,borderRadius:9,border:"1.4px solid #111",overflow:"hidden",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:p.logo?(0,o.jsx)("img",{src:p.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4,boxSizing:"border-box"}}):(0,o.jsxs)("span",{style:{fontSize:l?8.5:9.2,fontWeight:950,color:"#555",textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,o.jsx)("br",{}),"Logo"]})}),(0,o.jsxs)("div",{style:{textAlign:"center",minWidth:0},children:[(0,o.jsx)("div",{style:{fontSize:l?18:22,lineHeight:1.05,fontWeight:950,textTransform:"uppercase",letterSpacing:.42,color:h,overflowWrap:"anywhere"},children:p.schoolName}),p.motto&&(0,o.jsx)("div",{style:{marginTop:1,fontSize:l?9.8:10.6,fontWeight:800,fontStyle:"italic",color:"#333",lineHeight:1.1},children:p.motto}),g&&(0,o.jsx)("div",{style:{marginTop:1,fontSize:l?10:10.7,lineHeight:1.1,fontWeight:700,color:"#444",overflowWrap:"anywhere"},children:g}),b&&(0,o.jsx)("div",{style:{marginTop:1,fontSize:l?9.9:10.7,lineHeight:1.1,fontWeight:850,color:"#111",overflowWrap:"anywhere"},children:b})]}),c?(0,o.jsx)("div",{style:{width:x,height:x,borderRadius:9,border:"1.4px solid #111",background:"#fafafa",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:d?(0,o.jsx)("img",{src:d,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,o.jsx)("span",{style:{fontSize:l?10:11,fontWeight:900,color:"#666",textAlign:"center"},children:"PHOTO"})}):(0,o.jsx)("div",{"aria-hidden":"true",style:{width:x,height:x}})]}),(0,o.jsxs)("div",{style:{marginTop:l?3:5,display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",gap:l?5:7},children:[(0,o.jsx)("div",{style:{height:1,background:"#111",opacity:.42}}),(0,o.jsx)("div",{"data-report-color-block":"true",style:{border:"1.2px solid #111",background:h,color:u,borderRadius:999,padding:l?"3.5px 12px":"4.5px 16px",fontSize:l?9.5:10.5,fontWeight:950,textTransform:"uppercase",letterSpacing:.3,whiteSpace:"nowrap",textAlign:"center"},children:r}),(0,o.jsx)("div",{style:{height:1,background:"#111",opacity:.42}})]})]})}function l(e){return(0,n.Tu)(e)}function d(e,t){if(!e?.length)return[];let r=l(t),i=new Map;for(let t of e){let e=t.assessmentProjection?.columns;if(e?.length){for(let t of e)i.has(t.itemId)||i.set(t.itemId,{assessmentStructureItemId:t.itemId,parentItemId:t.parentItemId,name:t.name,shortLabel:t.shortLabel,pathLabels:[...t.pathLabels],depth:t.depth,order:t.order,itemType:t.itemType,aggregationMode:t.aggregationMode,weight:t.effectiveWeight,effectiveWeight:t.effectiveWeight,maxScore:t.maxScore,isParent:t.isParent,isLeaf:t.isLeaf,calculatedFromChildren:t.calculatedFromChildren,complete:t.complete,groupId:t.groupId,groupLabel:t.groupLabel,groupDepth:t.groupDepth,columnSpan:t.columnSpan});continue}for(let e of t.breakdown??[])i.has(e.assessmentStructureItemId)||i.set(e.assessmentStructureItemId,{...e,pathLabels:e.pathLabels?.length?[...e.pathLabels]:[e.name],depth:e.depth??0,effectiveWeight:e.effectiveWeight??e.weight,isParent:e.isParent??!1,isLeaf:e.isLeaf??!0,calculatedFromChildren:e.calculatedFromChildren??!1,complete:e.complete??!1})}return[...i.values()].filter(e=>(null===r.maximumVisibleDepth||!(e.depth>r.maximumVisibleDepth))&&(!!r.showParentItems||!e.isParent)&&(!!r.showChildItems||!(e.depth>0))&&(!!r.showCalculatedItems||!e.calculatedFromChildren)).sort((e,t)=>e.order-t.order||e.depth-t.depth||e.name.localeCompare(t.name))}function c(e,t){let r=l(t);if(r.showHierarchyPath&&e.pathLabels?.length)return e.pathLabels.join(" \xb7 ");let i=e.shortLabel||e.name;return r.indentChildren&&e.depth>0?`${"› ".repeat(Math.min(e.depth,3))}${i}`:i}function m(e,t,r=(e,t=0)=>Number(e||0).toFixed(t)){if(!e)return"-";let i=l(t);return i.showRawScores&&i.showMaximumScores?`${r(e.rawScore??e.score,0)}/${r(e.maxScore,0)}`:i.showRawScores?r(e.rawScore??e.score,0):i.showWeightedScores?r(e.weightedScore,1):r(e.normalizedPercentage,0)}function p(e){return String(e??"").trim().replace(/\s+/g," ").toLocaleLowerCase("en").replace(/(^|[\s\-\u2019'])(\p{L})/gu,(e,t,r)=>t+r.toLocaleUpperCase("en"))}let h=`
/*
 * IMPORTANT DESIGN RULE
 * ---------------------------------------------------------
 * This report is NOT responsive like normal app UI.
 * It is a fixed A4/PDF sheet.
 *
 * The report page remains 210mm \xd7 297mm at all times.
 * The preview frame measures its real available width AND height,
 * then scales the whole A4 sheet like a PDF viewer.
 *
 * Fit mode should not need horizontal or vertical scrolling.
 */

.src-empty-card {
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 16px;
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
  font-weight: 750;
}

.src-preview-shell {
  --a4-width-px: 793.7008;
  --a4-height-px: 1122.5197;

  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 24px;
}

/*
 * Toolbar is app control UI, not part of the PDF/A4 sheet.
 */
.src-mobile-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 8px;
  padding: 10px;
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.22);
  box-shadow: 0 10px 24px rgba(15,23,42,.06);
}

.src-mobile-toolbar div {
  min-width: 0;
}

.src-mobile-toolbar strong,
.src-mobile-toolbar span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.src-mobile-toolbar strong {
  font-size: 14px;
  font-weight: 950;
  color: var(--text, #0f172a);
}

.src-mobile-toolbar span {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 750;
}

.src-zoom-controls {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 10%, transparent);
  border: 1px solid rgba(148,163,184,.18);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.22);
}

.src-zoom-controls button {
  appearance: none;
  -webkit-appearance: none;
  border: 0;
  cursor: pointer;
  font-family: inherit;
}

.src-zoom-icon-button {
  width: 32px;
  min-width: 32px;
  height: 32px;
  min-height: 32px;
  padding: 0;
  border-radius: 999px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-size: 18px;
  font-weight: 950;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 14px rgba(15,23,42,.12);
}

.src-zoom-fit-button {
  height: 32px;
  min-height: 32px;
  min-width: 42px;
  padding: 0 12px;
  border-radius: 999px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-size: 12px;
  font-weight: 950;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 0 6px 14px rgba(15,23,42,.12);
}

.src-zoom-menu-wrap {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
}

.src-zoom-percent-button {
  height: 32px;
  min-height: 32px;
  min-width: 68px;
  padding: 0 10px;
  border-radius: 999px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-size: 12px;
  font-weight: 950;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  box-shadow: 0 6px 14px rgba(15,23,42,.12);
}

.src-zoom-caret {
  font-size: 9px;
  line-height: 1;
  opacity: .9;
  transform: translateY(1px);
}

.src-zoom-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 40;
  width: 114px;
  max-height: 252px;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  padding: 7px;
  border-radius: 16px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.34);
  box-shadow: 0 20px 46px rgba(15,23,42,.20);
  box-sizing: border-box;
}

.src-zoom-menu::before {
  content: "";
  position: absolute;
  top: -5px;
  right: 24px;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  background: var(--surface, #fff);
  border-left: 1px solid rgba(148,163,184,.34);
  border-top: 1px solid rgba(148,163,184,.34);
}

.src-zoom-menu-item {
  width: 100%;
  min-width: 0;
  height: 32px;
  min-height: 32px;
  padding: 0 10px;
  border-radius: 11px;
  background: transparent;
  color: var(--text, #0f172a); 
  box-shadow: none;
  font-size: 12px;
  font-weight: 900;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  display: flex !important;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-sizing: border-box;
}

.src-zoom-menu-item:hover {
  background: color-mix(in srgb, var(--primary-color, #2563eb) 10%, transparent);
}

.src-zoom-menu-item.active {
  background: var(--primary-color, #2563eb);
  color: #fff;
}

/*
 * Preview area is the PDF viewer frame.
 */
.src-preview-scroll {
  --report-preview-scale: 1;

  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
  border-radius: 22px;
  background: rgba(148,163,184,.10);
  border: 1px solid rgba(148,163,184,.18);
  box-sizing: border-box;
}

/*
 * Center holder reserves the scaled A4 dimensions.
 * This is what makes the report stay centered without overflow.
 */
.src-preview-center {
  width: 100%;
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}

/*
 * This inner holder is the only thing that scales.
 */
.src-preview-scale {
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
  transform: scale(var(--report-preview-scale));
  transform-origin: top center;
  flex: 0 0 auto;
}

.classic-formal-template-page,
.student-report-card-page,
.src-a4-page {
  width: 210mm !important;
  min-width: 210mm !important;
  max-width: 210mm !important;
  min-height: 297mm !important;
  box-sizing: border-box !important;
}

/*
 * FIT MODE
 * ---------------------------------------------------------
 * No scroll. Whole A4 page fits inside the current view.
 */
.src-preview-shell:not(.expanded) .src-preview-scroll {
  overflow: hidden;
}

.src-preview-shell:not(.expanded) .src-preview-scale {
  transform: scale(var(--report-preview-scale));
}

/*
 * EXPANDED MODE
 * ---------------------------------------------------------
 * Show true A4 size and allow scrolling only when the user asks for it.
 */
.src-preview-shell.expanded .src-preview-scroll {
  overflow: auto;
  max-height: none;
}

.src-preview-shell.expanded .src-preview-center {
  width: max(100%, calc(210mm * var(--report-preview-scale)));
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: visible;
  margin: 0 auto;
}

.src-preview-shell.expanded .src-preview-scale {
  transform: scale(var(--report-preview-scale));
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
}

/*
 * PRINT MODE
 * ---------------------------------------------------------
 * Printing uses the real A4 page. The preview frame disappears.
 */
@media screen and (max-width: 380px) {
  .src-mobile-toolbar {
    gap: 6px;
    padding: 8px;
  }

  .src-mobile-toolbar strong {
    font-size: 13px;
  }

  .src-mobile-toolbar span {
    font-size: 11px;
  }

  .src-zoom-controls {
    gap: 3px;
    padding: 3px;
  }

  .src-zoom-icon-button {
    width: 29px;
    min-width: 29px;
    height: 29px;
    min-height: 29px;
    font-size: 16px;
  }

  .src-zoom-fit-button {
    min-width: 36px;
    height: 29px;
    min-height: 29px;
    padding: 0 8px;
    font-size: 10px;
  }

  .src-zoom-percent-button {
    min-width: 62px;
    height: 29px;
    min-height: 29px;
    padding: 0 8px;
    font-size: 10px;
    gap: 4px;
  }

  .src-zoom-menu {
    width: 106px;
    max-height: 210px;
    padding: 6px;
  }

  .src-zoom-menu-item {
    height: 30px;
    min-height: 30px;
    font-size: 11px;
  }
}

@media print {
  .src-preview-shell,
  .src-preview-scroll,
  .src-preview-center,
  .src-preview-scale {
    display: contents !important;
    transform: none !important;
    width: auto !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    overflow: visible !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .src-mobile-toolbar,
  .report-no-print {
    display: none !important;
    visibility: hidden !important;
  }

  .student-report-card-page,
  .classic-formal-template-page,
  .src-a4-page {
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    min-height: 297mm !important;
    transform: none !important;
    margin: 0 auto !important;
    box-shadow: none !important;
    border-color: #111 !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  .classic-formal-template-page [data-report-color-block="true"] {
    print-color-adjust: exact !important;
    -webkit-print-color-adjust: exact !important;
  }

  table,
  tr,
  td,
  th {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
}
`;function u({header:e,dataset:t,title:r="Official Academic Report",primaryColor:i,fontFamily:a,compact:s=!1}){let l=e||t?.header,d=(0,n.wX)(l),c=i||(0,n.Ak)(l,d.primaryColor),m=[d.address,d.phone?`Tel: ${d.phone}`:"",d.email,d.website].filter(Boolean).join("  •  "),p=[d.branchName,d.branchAddress].filter(Boolean).join(" \xb7 "),h=s?68:80,g={height:0,borderTop:`1px solid ${c}`,borderBottom:"1px solid #111827"};return(0,o.jsxs)("header",{className:"bordered-traditional-report-header",style:{fontFamily:a||d.fontFamily||"Georgia, 'Times New Roman', serif",color:"#111827",background:"#fffdf7",border:"2px double #111827",padding:s?6:9,position:"relative",overflow:"hidden"},children:[(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:5,border:`1px solid ${c}`,pointerEvents:"none",opacity:.75}}),(0,o.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",gap:s?8:10},children:[(0,o.jsx)("div",{style:g}),(0,o.jsx)("div",{style:{width:h,height:h,border:`2px double ${c}`,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",padding:4,boxSizing:"border-box"},children:d.logo?(0,o.jsx)("img",{src:d.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain"}}):(0,o.jsxs)("span",{style:{fontSize:s?8.1:8.8,fontWeight:950,color:c,textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,o.jsx)("br",{}),"Crest"]})}),(0,o.jsx)("div",{style:g})]}),(0,o.jsxs)("div",{style:{marginTop:s?4:5,textAlign:"center"},children:[(0,o.jsx)("div",{style:{fontSize:s?19:23,lineHeight:1.02,fontWeight:950,textTransform:"uppercase",letterSpacing:.55,color:"#111827",overflowWrap:"anywhere"},children:d.schoolName}),d.motto&&(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?10.2:10.9,fontWeight:760,fontStyle:"italic",color:"#334155",lineHeight:1.1},children:["“",d.motto,"”"]}),m&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?10.5:11.1,fontWeight:700,color:"#475569",lineHeight:1.1,overflowWrap:"anywhere"},children:m}),p&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?10.4:11,fontWeight:900,color:c,lineHeight:1.1,overflowWrap:"anywhere"},children:p})]}),(0,o.jsx)("div",{"data-report-color-block":"true",style:{margin:s?"6px auto 0":"8px auto 0",width:"fit-content",maxWidth:"82%",border:`2px double ${c}`,background:"#f3efe4",padding:s?"4px 18px":"5px 22px",textAlign:"center",fontSize:s?9.8:11,fontWeight:950,color:"#111827",lineHeight:1.1,textTransform:"uppercase",letterSpacing:.42},children:r})]})]})}function g(e){return String(e??"").trim().replace(/\s+/g," ").toLocaleLowerCase("en").replace(/(^|[\s\-\u2019'])(\p{L})/gu,(e,t,r)=>t+r.toLocaleUpperCase("en"))}let b=`
.src-empty-card {
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 16px;
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
  font-weight: 750;
}

.src-preview-shell {
  --a4-width-px: 793.7008;
  --a4-height-px: 1122.5197;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 24px;
}

.src-mobile-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 8px;
  padding: 10px;
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.22);
  box-shadow: 0 10px 24px rgba(15,23,42,.06);
}

.src-mobile-toolbar div { min-width: 0; }
.src-mobile-toolbar strong,
.src-mobile-toolbar span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.src-mobile-toolbar strong { font-size: 13px; font-weight: 950; color: var(--text, #0f172a); }
.src-mobile-toolbar span { margin-top: 2px; color: var(--muted, #64748b); font-size: 11px; font-weight: 750; }

.src-zoom-controls {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 10%, transparent);
  border: 1px solid rgba(148,163,184,.18);
}
.src-zoom-controls button { appearance: none; -webkit-appearance: none; border: 0; cursor: pointer; font-family: inherit; }
.src-zoom-icon-button,
.src-zoom-fit-button,
.src-zoom-percent-button {
  height: 32px;
  min-height: 32px;
  border-radius: 999px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-weight: 950;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 0 6px 14px rgba(15,23,42,.12);
}
.src-zoom-icon-button { width: 32px; min-width: 32px; padding: 0; font-size: 18px; }
.src-zoom-fit-button { min-width: 42px; padding: 0 12px; font-size: 12px; }
.src-zoom-percent-button { min-width: 68px; padding: 0 10px; font-size: 12px; gap: 5px; font-variant-numeric: tabular-nums; }
.src-zoom-caret { font-size: 9px; line-height: 1; opacity: .9; transform: translateY(1px); }
.src-zoom-menu-wrap { position: relative; display: inline-flex; flex: 0 0 auto; }
.src-zoom-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 40;
  width: 114px;
  max-height: 252px;
  overflow-y: auto;
  display: grid;
  gap: 4px;
  padding: 7px;
  border-radius: 16px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.34);
  box-shadow: 0 20px 46px rgba(15,23,42,.20);
  box-sizing: border-box;
}
.src-zoom-menu-item {
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 11px;
  background: transparent;
  color: var(--text, #0f172a);
  font-size: 12px;
  font-weight: 900;
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.src-zoom-menu-item:hover { background: color-mix(in srgb, var(--primary-color, #2563eb) 10%, transparent); }
.src-zoom-menu-item.active { background: var(--primary-color, #2563eb); color: #fff; }

.src-preview-scroll {
  --report-preview-scale: 1;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
  border-radius: 22px;
  background: rgba(148,163,184,.10);
  border: 1px solid rgba(148,163,184,.18);
  box-sizing: border-box;
}
.src-preview-center {
  width: 100%;
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}
.src-preview-scale {
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
  transform: scale(var(--report-preview-scale));
  transform-origin: top center;
  flex: 0 0 auto;
}
.bordered-traditional-template-page,
.student-report-card-page,
.src-a4-page {
  width: 210mm !important;
  min-width: 210mm !important;
  max-width: 210mm !important;
  min-height: 297mm !important;
  box-sizing: border-box !important;
}
.src-preview-shell:not(.expanded) .src-preview-scroll { overflow: hidden; }
.src-preview-shell.expanded .src-preview-scroll { overflow: auto; max-height: none; }
.src-preview-shell.expanded .src-preview-center {
  width: max(100%, calc(210mm * var(--report-preview-scale)));
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  overflow: visible;
  margin: 0 auto;
}

.traditional-frame-line {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  border-radius: 18px;
}
.traditional-frame-outer { inset: 4.5mm; border: 1.5px solid; opacity: .65; }
.traditional-frame-inner { inset: 6.5mm; border: 1px solid #e5e7eb; }
.traditional-corner {
  position: absolute;
  z-index: 0;
  width: 17mm;
  height: 17mm;
  pointer-events: none;
  opacity: .85;
}
.traditional-corner-tl { left: 4.5mm; top: 4.5mm; border-left: 3px solid; border-top: 3px solid; border-top-left-radius: 18px; }
.traditional-corner-tr { right: 4.5mm; top: 4.5mm; border-right: 3px solid; border-top: 3px solid; border-top-right-radius: 18px; }
.traditional-corner-bl { left: 4.5mm; bottom: 4.5mm; border-left: 3px solid; border-bottom: 3px solid; border-bottom-left-radius: 18px; }
.traditional-corner-br { right: 4.5mm; bottom: 4.5mm; border-right: 3px solid; border-bottom: 3px solid; border-bottom-right-radius: 18px; }
.traditional-grade-seal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  border: 1px solid;
  border-radius: 999px;
  padding: 2px 6px;
  font-weight: 950;
  background: #fff;
}
.traditional-timeline-seal {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: 3px solid;
  display: inline-block;
  position: relative;
}
.traditional-timeline-seal::before,
.traditional-timeline-seal::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 16px;
  height: 1px;
  background: #cbd5e1;
}
.traditional-timeline-seal::before { right: 100%; }
.traditional-timeline-seal::after { left: 100%; }

@media screen and (max-width: 380px) {
  .src-mobile-toolbar { gap: 6px; padding: 8px; }
  .src-mobile-toolbar strong { font-size: 12px; }
  .src-mobile-toolbar span { font-size: 10px; }
  .src-zoom-controls { gap: 3px; padding: 3px; }
  .src-zoom-icon-button { width: 29px; min-width: 29px; height: 29px; min-height: 29px; font-size: 16px; }
  .src-zoom-fit-button { min-width: 36px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; }
  .src-zoom-percent-button { min-width: 62px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; gap: 4px; }
  .src-zoom-menu { width: 106px; max-height: 210px; padding: 6px; }
  .src-zoom-menu-item { height: 30px; min-height: 30px; font-size: 11px; }
}

@media print {
  .src-preview-shell,
  .src-preview-scroll,
  .src-preview-center,
  .src-preview-scale {
    display: contents !important;
    transform: none !important;
    width: auto !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    overflow: visible !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .src-mobile-toolbar,
  .report-no-print {
    display: none !important;
    visibility: hidden !important;
  }

  .student-report-card-page,
  .bordered-traditional-template-page,
  .src-a4-page {
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    min-height: 297mm !important;
    transform: none !important;
    margin: 0 auto !important;
    box-shadow: none !important;
    border-color: #111 !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  .bordered-traditional-template-page [data-report-color-block="true"] {
    print-color-adjust: exact !important;
    -webkit-print-color-adjust: exact !important;
  }

  table,
  tr,
  td,
  th {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
}
`;function x({header:e,dataset:t,title:r="Terminal / Periodic Academic Report",settings:i,primaryColor:a,fontFamily:s,compact:l=!0,studentPhoto:d,showStudentPhoto:c=!1}){let m=e||t?.header,p=(0,n.wX)(m),h=a||(0,n.Ak)(m,p.primaryColor),u=(0,n.B_)(h),g=[p.address,p.phone?`Tel: ${p.phone}`:"",p.email,p.website].filter(Boolean).join("  |  "),b=[p.branchName,p.branchAddress].filter(Boolean).join(" \xb7 "),f=l?56:62;return(0,o.jsx)("header",{className:"compact-print-report-header",style:{fontFamily:s||p.fontFamily||"Arial, sans-serif",color:"#111",border:"1.5px solid #111827",borderTop:`5px solid ${h}`,padding:"5px 7px",background:"rgba(255,255,255,.98)"},children:(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:c?`${f}px minmax(0,1fr) auto 72px`:`${f}px minmax(0,1fr) auto`,alignItems:"center",gap:8},children:[(0,o.jsx)("div",{style:{width:f,height:f,border:"1px solid #cfcfcf",borderRadius:6,overflow:"hidden",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center"},children:p.logo?(0,o.jsx)("img",{src:p.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:3,boxSizing:"border-box"}}):(0,o.jsx)("span",{style:{fontSize:9,fontWeight:900,color:"#777",textAlign:"center",lineHeight:1.05},children:"LOGO"})}),(0,o.jsxs)("div",{style:{minWidth:0},children:[(0,o.jsx)("div",{style:{fontSize:l?17.2:18.2,lineHeight:1.05,fontWeight:950,textTransform:"uppercase",letterSpacing:.3,color:h,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:p.schoolName}),p.motto&&(0,o.jsx)("div",{style:{marginTop:1,fontSize:10.2,fontWeight:750,fontStyle:"italic",color:"#444",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:p.motto}),g&&(0,o.jsx)("div",{style:{marginTop:1,fontSize:10.5,lineHeight:1.08,fontWeight:650,color:"#555",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:g}),b&&(0,o.jsx)("div",{style:{marginTop:1,fontSize:10.3,lineHeight:1.08,fontWeight:800,color:"#333",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:b})]}),(0,o.jsx)("div",{style:{background:h,color:u,borderRadius:6,padding:"6px 9px",maxWidth:160,textAlign:"center",fontSize:10.5,fontWeight:950,lineHeight:1.1,textTransform:"uppercase",letterSpacing:.25},children:r}),c&&(0,o.jsx)("div",{style:{width:72,height:78,border:"1.5px solid #111",overflow:"hidden",background:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center"},children:d?(0,o.jsx)("img",{src:d,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,o.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]})})}function f(e){return String(e??"").trim().replace(/\s+/g," ").toLocaleLowerCase("en").replace(/(^|[\s\-\u2019'])(\p{L})/gu,(e,t,r)=>t+r.toLocaleUpperCase("en"))}function w({name:e,label:t,inline:r=!1}){return r?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:{minHeight:13,marginBottom:2,fontSize:10.5,fontWeight:900,color:"#111827"},children:e||""}),(0,o.jsx)("div",{style:{borderTop:"1px solid #111827",paddingTop:3,fontSize:10.2,fontWeight:900,color:"#111827"},children:t})]}):(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)("div",{style:{minHeight:13,marginBottom:2,fontSize:8.2,fontWeight:900,color:"#111827"},children:e||""}),(0,o.jsx)("div",{style:{borderTop:"1px solid #111827",paddingTop:3,fontSize:8.1,fontWeight:900,color:"#111827"},children:t})]})}let v=`
.src-empty-card {
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 16px;
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
  font-weight: 750;
}

.src-preview-shell {
  --a4-width-px: 793.7008;
  --a4-height-px: 1122.5197;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 24px;
}

.src-mobile-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 8px;
  padding: 10px;
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.22);
  box-shadow: 0 10px 24px rgba(15,23,42,.06);
}

.src-mobile-toolbar div { min-width: 0; }

.src-mobile-toolbar strong,
.src-mobile-toolbar span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.src-mobile-toolbar strong {
  font-size: 13px;
  font-weight: 950;
  color: var(--text, #0f172a);
}

.src-mobile-toolbar span {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 750;
}

.src-zoom-controls {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 10%, transparent);
  border: 1px solid rgba(148,163,184,.18);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.22);
}

.src-zoom-controls button {
  appearance: none;
  -webkit-appearance: none;
  border: 0;
  cursor: pointer;
  font-family: inherit;
}

.src-zoom-icon-button,
.src-zoom-fit-button,
.src-zoom-percent-button {
  height: 32px;
  min-height: 32px;
  border-radius: 999px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-weight: 950;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 14px rgba(15,23,42,.12);
  white-space: nowrap;
}

.src-zoom-icon-button {
  width: 32px;
  min-width: 32px;
  padding: 0;
  font-size: 18px;
}

.src-zoom-fit-button {
  min-width: 42px;
  padding: 0 12px;
  font-size: 12px;
}

.src-zoom-menu-wrap {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
}

.src-zoom-percent-button {
  min-width: 68px;
  padding: 0 10px;
  font-size: 12px;
  gap: 5px;
  font-variant-numeric: tabular-nums;
}

.src-zoom-caret {
  font-size: 9px;
  line-height: 1;
  opacity: .9;
  transform: translateY(1px);
}

.src-zoom-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 40;
  width: 114px;
  max-height: 252px;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  padding: 7px;
  border-radius: 16px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.34);
  box-shadow: 0 20px 46px rgba(15,23,42,.20);
  box-sizing: border-box;
}

.src-zoom-menu::before {
  content: "";
  position: absolute;
  top: -5px;
  right: 24px;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  background: var(--surface, #fff);
  border-left: 1px solid rgba(148,163,184,.34);
  border-top: 1px solid rgba(148,163,184,.34);
}

.src-zoom-menu-item {
  width: 100%;
  min-width: 0;
  height: 32px;
  min-height: 32px;
  padding: 0 10px;
  border-radius: 11px;
  background: transparent;
  color: var(--text, #0f172a);
  box-shadow: none;
  font-size: 12px;
  font-weight: 900;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  display: flex !important;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-sizing: border-box;
}

.src-zoom-menu-item:hover {
  background: color-mix(in srgb, var(--primary-color, #2563eb) 10%, transparent);
}

.src-zoom-menu-item.active {
  background: var(--primary-color, #2563eb);
  color: #fff;
}

.src-preview-scroll {
  --report-preview-scale: 1;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
  border-radius: 22px;
  background: rgba(148,163,184,.10);
  border: 1px solid rgba(148,163,184,.18);
  box-sizing: border-box;
}

.src-preview-center {
  width: 100%;
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}

.src-preview-scale {
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
  transform: scale(var(--report-preview-scale));
  transform-origin: top center;
  flex: 0 0 auto;
}

.compact-print-template-page,
.student-report-card-page,
.src-a4-page {
  width: 210mm !important;
  min-width: 210mm !important;
  max-width: 210mm !important;
  min-height: 297mm !important;
  box-sizing: border-box !important;
}

.src-preview-shell:not(.expanded) .src-preview-scroll { overflow: hidden; }
.src-preview-shell:not(.expanded) .src-preview-scale { transform: scale(var(--report-preview-scale)); }

.src-preview-shell.expanded .src-preview-scroll {
  overflow: auto;
  max-height: none;
}

.src-preview-shell.expanded .src-preview-center {
  width: max(100%, calc(210mm * var(--report-preview-scale)));
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: visible;
  margin: 0 auto;
}

.src-preview-shell.expanded .src-preview-scale {
  transform: scale(var(--report-preview-scale));
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
}

@media screen and (max-width: 380px) {
  .src-mobile-toolbar { gap: 6px; padding: 8px; }
  .src-mobile-toolbar strong { font-size: 12px; }
  .src-mobile-toolbar span { font-size: 10px; }
  .src-zoom-controls { gap: 3px; padding: 3px; }
  .src-zoom-icon-button { width: 29px; min-width: 29px; height: 29px; min-height: 29px; font-size: 16px; }
  .src-zoom-fit-button { min-width: 36px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; }
  .src-zoom-percent-button { min-width: 62px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; gap: 4px; }
  .src-zoom-menu { width: 106px; max-height: 210px; padding: 6px; }
  .src-zoom-menu-item { height: 30px; min-height: 30px; font-size: 11px; }
}

@media print {
  .src-preview-shell,
  .src-preview-scroll,
  .src-preview-center,
  .src-preview-scale {
    display: contents !important;
    transform: none !important;
    width: auto !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    overflow: visible !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .src-mobile-toolbar,
  .report-no-print {
    display: none !important;
    visibility: hidden !important;
  }

  .student-report-card-page,
  .compact-print-template-page,
  .src-a4-page {
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    min-height: 297mm !important;
    transform: none !important;
    margin: 0 auto !important;
    box-shadow: none !important;
    border-color: #111 !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  .compact-print-template-page [data-report-color-block="true"] {
    print-color-adjust: exact !important;
    -webkit-print-color-adjust: exact !important;
  }

  table,
  tr,
  td,
  th {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
}
`;function y({header:e,dataset:t,title:r="Terminal / Periodic Academic Report",primaryColor:i,fontFamily:a,compact:s=!1}){let l=e||t?.header,d=(0,n.wX)(l),c=i||(0,n.Ak)(l,d.primaryColor),m=(0,n.B_)(c),p=[d.address,d.phone?`Tel: ${d.phone}`:"",d.email,d.website].filter(Boolean).join("  •  "),h=[d.branchName,d.branchAddress].filter(Boolean).join(" \xb7 "),u=s?54:64;return(0,o.jsxs)("header",{className:"modern-framed-report-header",style:{fontFamily:a||d.fontFamily||"Arial, sans-serif",color:"#111827",position:"relative",borderRadius:20,overflow:"hidden",background:"#ffffff",border:"1px solid #d9dee8",boxShadow:"0 10px 24px rgba(15,23,42,.06)"},children:[(0,o.jsx)("div",{"aria-hidden":"true","data-report-color-block":"true",style:{height:s?7:8,background:`linear-gradient(90deg, ${c}, ${c} 42%, rgba(15,23,42,.82))`}}),(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`${u+14}px minmax(0, 1fr) ${s?138:154}px`,gap:s?8:10,alignItems:"stretch",padding:s?6:8},children:[(0,o.jsx)("div",{"data-report-color-block":"true",style:{borderRadius:18,background:c,color:m,minHeight:u+12,display:"flex",alignItems:"center",justifyContent:"center",padding:7,boxSizing:"border-box",boxShadow:"inset 0 0 0 1px rgba(255,255,255,.22)"},children:(0,o.jsx)("div",{style:{width:u,height:u,borderRadius:16,overflow:"hidden",background:"rgba(255,255,255,.96)",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",border:"1px solid rgba(255,255,255,.75)"},children:d.logo?(0,o.jsx)("img",{src:d.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:5,boxSizing:"border-box"}}):(0,o.jsxs)("span",{style:{fontSize:s?9.2:9.7,fontWeight:950,color:c,textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,o.jsx)("br",{}),"Logo"]})})}),(0,o.jsxs)("div",{style:{minWidth:0,display:"flex",flexDirection:"column",justifyContent:"center",padding:"2px 0"},children:[(0,o.jsx)("div",{style:{fontSize:s?18.5:22,lineHeight:1.02,fontWeight:950,textTransform:"uppercase",letterSpacing:.18,color:"#0f172a",overflowWrap:"anywhere"},children:d.schoolName}),d.motto&&(0,o.jsx)("div",{style:{marginTop:3,fontSize:s?9.9:10.6,fontWeight:760,fontStyle:"italic",color:"#475569",lineHeight:1.1},children:d.motto}),p&&(0,o.jsx)("div",{style:{marginTop:3,fontSize:s?9.9:10.3,lineHeight:1.09,fontWeight:680,color:"#475569",overflowWrap:"anywhere"},children:p}),h&&(0,o.jsx)("div",{style:{marginTop:2,display:"inline-flex",width:"fit-content",maxWidth:"100%",borderRadius:999,padding:s?"2px 8px":"3px 10px",background:"#f8fafc",border:"1px solid #e5e7eb",fontSize:s?9.6:10,lineHeight:1.15,fontWeight:900,color:c,overflowWrap:"anywhere"},children:h})]}),(0,o.jsx)("aside",{style:{display:"grid",gridTemplateRows:"1fr auto",gap:7,minWidth:0},children:(0,o.jsxs)("div",{"data-report-color-block":"true",style:{borderRadius:18,background:"#0f172a",color:"#ffffff",padding:s?"9px 10px":"11px 12px",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",boxShadow:"inset 0 0 0 1px rgba(255,255,255,.08)"},children:[(0,o.jsx)("div",{style:{fontSize:s?9.2:9.7,fontWeight:950,letterSpacing:.35,textTransform:"uppercase",opacity:.82},children:"Report Card"}),(0,o.jsx)("div",{style:{marginTop:4,fontSize:s?10:11.4,lineHeight:1.12,fontWeight:950,textTransform:"uppercase"},children:r})]})})]})]})}function j(e){return String(e??"").toLocaleLowerCase("en-GH").replace(/(^|[\s\-'])\p{L}/gu,e=>e.toLocaleUpperCase("en-GH"))}let S=`
.src-empty-card {
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 16px;
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
  font-weight: 750;
}

.src-preview-shell {
  --a4-width-px: 793.7008;
  --a4-height-px: 1122.5197;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 24px;
}

.src-mobile-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 8px;
  padding: 10px;
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.22);
  box-shadow: 0 10px 24px rgba(15,23,42,.06);
}

.src-mobile-toolbar div { min-width: 0; }
.src-mobile-toolbar strong,
.src-mobile-toolbar span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.src-mobile-toolbar strong { font-size: 13px; font-weight: 950; color: var(--text, #0f172a); }
.src-mobile-toolbar span { margin-top: 2px; color: var(--muted, #64748b); font-size: 11px; font-weight: 750; }

.src-zoom-controls {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 10%, transparent);
  border: 1px solid rgba(148,163,184,.18);
}
.src-zoom-controls button { appearance: none; -webkit-appearance: none; border: 0; cursor: pointer; font-family: inherit; }
.src-zoom-icon-button,
.src-zoom-fit-button,
.src-zoom-percent-button {
  height: 32px;
  min-height: 32px;
  border-radius: 999px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-weight: 950;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 0 6px 14px rgba(15,23,42,.12);
}
.src-zoom-icon-button { width: 32px; min-width: 32px; padding: 0; font-size: 18px; }
.src-zoom-fit-button { min-width: 42px; padding: 0 12px; font-size: 12px; }
.src-zoom-percent-button { min-width: 68px; padding: 0 10px; font-size: 12px; gap: 5px; font-variant-numeric: tabular-nums; }
.src-zoom-caret { font-size: 9px; line-height: 1; opacity: .9; transform: translateY(1px); }
.src-zoom-menu-wrap { position: relative; display: inline-flex; flex: 0 0 auto; }
.src-zoom-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 40;
  width: 114px;
  max-height: 252px;
  overflow-y: auto;
  display: grid;
  gap: 4px;
  padding: 7px;
  border-radius: 16px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.34);
  box-shadow: 0 20px 46px rgba(15,23,42,.20);
  box-sizing: border-box;
}
.src-zoom-menu-item {
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 11px;
  background: transparent;
  color: var(--text, #0f172a);
  font-size: 12px;
  font-weight: 900;
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.src-zoom-menu-item:hover { background: color-mix(in srgb, var(--primary-color, #2563eb) 10%, transparent); }
.src-zoom-menu-item.active { background: var(--primary-color, #2563eb); color: #fff; }

.src-preview-scroll {
  --report-preview-scale: 1;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
  border-radius: 22px;
  background: rgba(148,163,184,.10);
  border: 1px solid rgba(148,163,184,.18);
  box-sizing: border-box;
}
.src-preview-center {
  width: 100%;
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}
.src-preview-scale {
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
  transform: scale(var(--report-preview-scale));
  transform-origin: top center;
  flex: 0 0 auto;
}
.modern-clean-template-page,
.student-report-card-page,
.src-a4-page {
  width: 210mm !important;
  min-width: 210mm !important;
  max-width: 210mm !important;
  min-height: 297mm !important;
  box-sizing: border-box !important;
}
.src-preview-shell:not(.expanded) .src-preview-scroll { overflow: hidden; }
.src-preview-shell.expanded .src-preview-scroll { overflow: auto; max-height: none; }
.src-preview-shell.expanded .src-preview-center {
  width: max(100%, calc(210mm * var(--report-preview-scale)));
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  overflow: visible;
  margin: 0 auto;
}

.modern-frame-line {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  border-radius: 18px;
}
.modern-frame-outer { inset: 4.5mm; border: 1.5px solid; opacity: .65; }
.modern-frame-inner { inset: 6.5mm; border: 1px solid #e5e7eb; }
.modern-corner {
  position: absolute;
  z-index: 0;
  width: 17mm;
  height: 17mm;
  pointer-events: none;
  opacity: .85;
}
.modern-corner-tl { left: 4.5mm; top: 4.5mm; border-left: 3px solid; border-top: 3px solid; border-top-left-radius: 18px; }
.modern-corner-tr { right: 4.5mm; top: 4.5mm; border-right: 3px solid; border-top: 3px solid; border-top-right-radius: 18px; }
.modern-corner-bl { left: 4.5mm; bottom: 4.5mm; border-left: 3px solid; border-bottom: 3px solid; border-bottom-left-radius: 18px; }
.modern-corner-br { right: 4.5mm; bottom: 4.5mm; border-right: 3px solid; border-bottom: 3px solid; border-bottom-right-radius: 18px; }
.modern-grade-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  border: 1px solid;
  border-radius: 999px;
  padding: 2px 6px;
  font-weight: 950;
  background: #fff;
}
.modern-timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: 3px solid;
  display: inline-block;
  position: relative;
}
.modern-timeline-dot::before,
.modern-timeline-dot::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 16px;
  height: 1px;
  background: #cbd5e1;
}
.modern-timeline-dot::before { right: 100%; }
.modern-timeline-dot::after { left: 100%; }

@media screen and (max-width: 380px) {
  .src-mobile-toolbar { gap: 6px; padding: 8px; }
  .src-mobile-toolbar strong { font-size: 12px; }
  .src-mobile-toolbar span { font-size: 10px; }
  .src-zoom-controls { gap: 3px; padding: 3px; }
  .src-zoom-icon-button { width: 29px; min-width: 29px; height: 29px; min-height: 29px; font-size: 16px; }
  .src-zoom-fit-button { min-width: 36px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; }
  .src-zoom-percent-button { min-width: 62px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; gap: 4px; }
  .src-zoom-menu { width: 106px; max-height: 210px; padding: 6px; }
  .src-zoom-menu-item { height: 30px; min-height: 30px; font-size: 11px; }
}

@media print {
  .src-preview-shell,
  .src-preview-scroll,
  .src-preview-center,
  .src-preview-scale {
    display: contents !important;
    transform: none !important;
    width: auto !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    overflow: visible !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .src-mobile-toolbar,
  .report-no-print {
    display: none !important;
    visibility: hidden !important;
  }

  .student-report-card-page,
  .modern-clean-template-page,
  .src-a4-page {
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    min-height: 297mm !important;
    transform: none !important;
    margin: 0 auto !important;
    box-shadow: none !important;
    border-color: #111 !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  .modern-clean-template-page [data-report-color-block="true"] {
    print-color-adjust: exact !important;
    -webkit-print-color-adjust: exact !important;
  }

  table,
  tr,
  td,
  th {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
}
`;function k({header:e,dataset:t,title:r="Terminal / Periodic Academic Report",primaryColor:i,fontFamily:a,compact:s=!1}){let l=e||t?.header,d=(0,n.wX)(l),c=i||(0,n.Ak)(l,d.primaryColor),m=(0,n.B_)(c),p=[d.address,d.phone?`Tel: ${d.phone}`:"",d.email,d.website].filter(Boolean).join("  •  "),h=[d.branchName,d.branchAddress].filter(Boolean).join(" \xb7 ");return(0,o.jsx)("header",{className:"side-profile-report-header",style:{fontFamily:a||d.fontFamily||"Arial, sans-serif",color:"#0f172a",background:"#ffffff",border:"1px solid #dbe3ef",borderRadius:16,overflow:"hidden",boxShadow:"0 8px 22px rgba(15,23,42,.055)"},children:(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) auto",gap:8,alignItems:"center",padding:s?"5px 10px":"5px 12px",borderBottom:"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #f8fafc)"},children:[(0,o.jsxs)("div",{style:{minWidth:0},children:[(0,o.jsx)("div",{style:{fontSize:s?14.5:16.5,lineHeight:1.05,fontWeight:950,letterSpacing:.16,textTransform:"uppercase",color:"#0f172a",overflowWrap:"anywhere"},children:d.schoolName}),(d.motto||p||h)&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?10.3:10.6,lineHeight:1.12,fontWeight:720,color:"#475569",overflowWrap:"anywhere"},children:[d.motto,p,h].filter(Boolean).join("  •  ")})]}),(0,o.jsx)("div",{"data-report-color-block":"true",style:{background:c,color:m,borderRadius:999,padding:s?"5px 10px":"5px 12px",maxWidth:152,textAlign:"center",fontSize:s?9.2:10,fontWeight:950,lineHeight:1.12,textTransform:"uppercase",letterSpacing:.22,boxShadow:"0 8px 16px rgba(15,23,42,.13)"},children:r})]})})}function I(e){return String(e??"").toLocaleLowerCase("en-GH").replace(/(^|[\s\-'])\p{L}/gu,e=>e.toLocaleUpperCase("en-GH"))}let N=`
.src-empty-card {
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 16px;
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
  font-weight: 750;
}

.src-preview-shell {
  --a4-width-px: 793.7008;
  --a4-height-px: 1122.5197;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 24px;
}

.src-mobile-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 8px;
  padding: 10px;
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.22);
  box-shadow: 0 10px 24px rgba(15,23,42,.06);
}

.src-mobile-toolbar div { min-width: 0; }
.src-mobile-toolbar strong,
.src-mobile-toolbar span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.src-mobile-toolbar strong { font-size: 13px; font-weight: 950; color: var(--text, #0f172a); }
.src-mobile-toolbar span { margin-top: 2px; color: var(--muted, #64748b); font-size: 11px; font-weight: 750; }

.src-zoom-controls {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 10%, transparent);
  border: 1px solid rgba(148,163,184,.18);
}
.src-zoom-controls button { appearance: none; -webkit-appearance: none; border: 0; cursor: pointer; font-family: inherit; }
.src-zoom-icon-button,
.src-zoom-fit-button,
.src-zoom-percent-button {
  height: 32px;
  min-height: 32px;
  border-radius: 999px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-weight: 950;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 0 6px 14px rgba(15,23,42,.12);
}
.src-zoom-icon-button { width: 32px; min-width: 32px; padding: 0; font-size: 18px; }
.src-zoom-fit-button { min-width: 42px; padding: 0 12px; font-size: 12px; }
.src-zoom-percent-button { min-width: 68px; padding: 0 10px; font-size: 12px; gap: 5px; font-variant-numeric: tabular-nums; }
.src-zoom-caret { font-size: 9px; line-height: 1; opacity: .9; transform: translateY(1px); }
.src-zoom-menu-wrap { position: relative; display: inline-flex; flex: 0 0 auto; }
.src-zoom-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 40;
  width: 114px;
  max-height: 252px;
  overflow-y: auto;
  display: grid;
  gap: 4px;
  padding: 7px;
  border-radius: 16px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.34);
  box-shadow: 0 20px 46px rgba(15,23,42,.20);
  box-sizing: border-box;
}
.src-zoom-menu-item {
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 11px;
  background: transparent;
  color: var(--text, #0f172a);
  font-size: 12px;
  font-weight: 900;
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.src-zoom-menu-item:hover { background: color-mix(in srgb, var(--primary-color, #2563eb) 10%, transparent); }
.src-zoom-menu-item.active { background: var(--primary-color, #2563eb); color: #fff; }

.src-preview-scroll {
  --report-preview-scale: 1;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
  border-radius: 22px;
  background: rgba(148,163,184,.10);
  border: 1px solid rgba(148,163,184,.18);
  box-sizing: border-box;
}
.src-preview-center {
  width: 100%;
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}
.src-preview-scale {
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
  transform: scale(var(--report-preview-scale));
  transform-origin: top center;
  flex: 0 0 auto;
}
.side-profile-template-page,
.student-report-card-page,
.src-a4-page {
  width: 210mm !important;
  min-width: 210mm !important;
  max-width: 210mm !important;
  min-height: 297mm !important;
  box-sizing: border-box !important;
}
.src-preview-shell:not(.expanded) .src-preview-scroll { overflow: hidden; }
.src-preview-shell.expanded .src-preview-scroll { overflow: auto; max-height: none; }
.src-preview-shell.expanded .src-preview-center {
  width: max(100%, calc(210mm * var(--report-preview-scale)));
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  overflow: visible;
  margin: 0 auto;
}

.side-profile-frame-line {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  border-radius: 18px;
}
.side-profile-frame-outer { inset: 4.5mm; border: 1.5px solid; opacity: .55; }
.side-profile-frame-inner { inset: 6.6mm; border: 1px solid #e5e7eb; }
.side-profile-grade-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  border: 1px solid;
  border-radius: 999px;
  padding: 2px 6px;
  font-weight: 950;
  background: #fff;
}
.side-profile-timeline-dot {
  width: 11px;
  height: 11px;
  border-radius: 999px;
  border: 3px solid;
  display: inline-block;
  position: relative;
}
.side-profile-timeline-dot::before,
.side-profile-timeline-dot::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 13px;
  height: 1px;
  background: #cbd5e1;
}
.side-profile-timeline-dot::before { right: 100%; }
.side-profile-timeline-dot::after { left: 100%; }

@media screen and (max-width: 380px) {
  .src-mobile-toolbar { gap: 6px; padding: 8px; }
  .src-mobile-toolbar strong { font-size: 12px; }
  .src-mobile-toolbar span { font-size: 10px; }
  .src-zoom-controls { gap: 3px; padding: 3px; }
  .src-zoom-icon-button { width: 29px; min-width: 29px; height: 29px; min-height: 29px; font-size: 16px; }
  .src-zoom-fit-button { min-width: 36px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; }
  .src-zoom-percent-button { min-width: 62px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; gap: 4px; }
  .src-zoom-menu { width: 106px; max-height: 210px; padding: 6px; }
  .src-zoom-menu-item { height: 30px; min-height: 30px; font-size: 11px; }
}

@media print {
  .src-preview-shell,
  .src-preview-scroll,
  .src-preview-center,
  .src-preview-scale {
    display: contents !important;
    transform: none !important;
    width: auto !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    overflow: visible !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .src-mobile-toolbar,
  .report-no-print {
    display: none !important;
    visibility: hidden !important;
  }

  .student-report-card-page,
  .side-profile-template-page,
  .src-a4-page {
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    min-height: 297mm !important;
    transform: none !important;
    margin: 0 auto !important;
    box-shadow: none !important;
    border-color: #111 !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  .side-profile-template-page [data-report-color-block="true"] {
    print-color-adjust: exact !important;
    -webkit-print-color-adjust: exact !important;
  }

  table,
  tr,
  td,
  th {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
}
`;function C({header:e,dataset:t,title:r="Terminal / Periodic Academic Report",primaryColor:i,fontFamily:a,compact:s=!1}){let l=e||t?.header,d=(0,n.wX)(l),c=i||(0,n.Ak)(l,d.primaryColor),m=(0,n.B_)(c),p=[d.address,d.phone?`Tel: ${d.phone}`:"",d.email,d.website].filter(Boolean).join("  •  "),h=[d.branchName,d.branchAddress].filter(Boolean).join(" \xb7 "),u=s?46:52;return(0,o.jsxs)("header",{className:"letterhead-premium-report-header",style:{fontFamily:a||d.fontFamily||"Georgia, 'Times New Roman', serif",color:"#111827",position:"relative",overflow:"hidden",border:"1px double #b7a981",borderRadius:8,background:"linear-gradient(180deg, #fffdf8, #ffffff)",boxShadow:"0 6px 18px rgba(15,23,42,.045)"},children:[(0,o.jsx)("div",{"aria-hidden":"true","data-report-color-block":"true",style:{height:s?5:6,background:`linear-gradient(90deg, ${c}, #111827 50%, ${c})`}}),(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`${u+7}px minmax(0, 1fr) ${s?126:150}px`,gap:s?8:10,alignItems:"center",padding:s?"0px 9px 1px":"5px 11px 5px"},children:[(0,o.jsxs)("div",{style:{width:u,height:u,border:`1px double ${c}`,borderRadius:6,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",position:"relative",overflow:"hidden"},children:[(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:4,border:"1px solid #eadfbe",borderRadius:4}}),d.logo?(0,o.jsx)("img",{src:d.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:6,boxSizing:"border-box",position:"relative",zIndex:1}}):(0,o.jsxs)("span",{style:{fontSize:s?8:8.7,fontWeight:950,color:c,textAlign:"center",lineHeight:1.05,textTransform:"uppercase",position:"relative",zIndex:1},children:["School",(0,o.jsx)("br",{}),"Crest"]})]}),(0,o.jsxs)("div",{style:{minWidth:0},children:[(0,o.jsx)("div",{style:{fontSize:s?17:19.5,lineHeight:1.02,fontWeight:950,textTransform:"uppercase",letterSpacing:.35,color:"#111827",overflowWrap:"anywhere"},children:d.schoolName}),d.motto&&(0,o.jsxs)("div",{style:{marginTop:1,fontSize:s?9.5:10.3,fontWeight:760,fontStyle:"italic",color:"#5f5642",lineHeight:1.08},children:["“",d.motto,"”"]}),p&&(0,o.jsx)("div",{style:{marginTop:1,fontSize:s?9.4:10.2,lineHeight:1.08,fontWeight:700,color:"#475569",overflowWrap:"anywhere"},children:p}),h&&(0,o.jsx)("div",{style:{marginTop:1,fontSize:s?9.4:10.2,lineHeight:1.08,fontWeight:900,color:c,overflowWrap:"anywhere"},children:h})]}),(0,o.jsxs)("div",{"data-report-color-block":"true",style:{alignSelf:"stretch",borderRadius:6,background:c,color:m,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:s?"6px 8px":"7px 10px",boxShadow:"inset 0 0 0 1px rgba(255,255,255,.24)",minHeight:u},children:[(0,o.jsx)("div",{style:{fontSize:s?9:9.7,fontWeight:950,textTransform:"uppercase",letterSpacing:.45,lineHeight:1.12},children:r}),(0,o.jsx)("div",{"aria-hidden":"true",style:{width:"74%",height:1,margin:"3px 0 2px",background:"rgba(255,255,255,.72)"}}),(0,o.jsx)("div",{style:{fontSize:s?8:8.7,fontWeight:850,letterSpacing:.25,opacity:.95},children:"Official Academic Record"})]})]}),(0,o.jsxs)("div",{"aria-hidden":"true",style:{display:"flex",alignItems:"center",gap:7,padding:"0 11px",color:c,fontWeight:950,lineHeight:1},children:[(0,o.jsx)("span",{style:{flex:1,height:1,background:"#e7ddbf"}}),(0,o.jsx)("span",{style:{fontSize:s?8:9},children:"◆"}),(0,o.jsx)("span",{style:{flex:1,height:1,background:"#e7ddbf"}})]})]})}function z(e){return String(e??"").toLocaleLowerCase("en-GH").replace(/(^|[\s\-'])\p{L}/gu,e=>e.toLocaleUpperCase("en-GH"))}let A=`
.src-empty-card {
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 16px;
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
  font-weight: 750;
}

.src-preview-shell {
  --a4-width-px: 793.7008;
  --a4-height-px: 1122.5197;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 24px;
}

.src-mobile-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 8px;
  padding: 10px;
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.22);
  box-shadow: 0 10px 24px rgba(15,23,42,.06);
}

.src-mobile-toolbar div { min-width: 0; }
.src-mobile-toolbar strong,
.src-mobile-toolbar span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.src-mobile-toolbar strong { font-size: 13px; font-weight: 950; color: var(--text, #0f172a); }
.src-mobile-toolbar span { margin-top: 2px; color: var(--muted, #64748b); font-size: 11px; font-weight: 750; }

.src-zoom-controls {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 10%, transparent);
  border: 1px solid rgba(148,163,184,.18);
}
.src-zoom-controls button { appearance: none; -webkit-appearance: none; border: 0; cursor: pointer; font-family: inherit; }
.src-zoom-icon-button,
.src-zoom-fit-button,
.src-zoom-percent-button {
  height: 32px;
  min-height: 32px;
  border-radius: 999px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-weight: 950;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 0 6px 14px rgba(15,23,42,.12);
}
.src-zoom-icon-button { width: 32px; min-width: 32px; padding: 0; font-size: 18px; }
.src-zoom-fit-button { min-width: 42px; padding: 0 12px; font-size: 12px; }
.src-zoom-percent-button { min-width: 68px; padding: 0 10px; font-size: 12px; gap: 5px; font-variant-numeric: tabular-nums; }
.src-zoom-caret { font-size: 9px; line-height: 1; opacity: .9; transform: translateY(1px); }
.src-zoom-menu-wrap { position: relative; display: inline-flex; flex: 0 0 auto; }
.src-zoom-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 40;
  width: 114px;
  max-height: 252px;
  overflow-y: auto;
  display: grid;
  gap: 4px;
  padding: 7px;
  border-radius: 16px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.34);
  box-shadow: 0 20px 46px rgba(15,23,42,.20);
  box-sizing: border-box;
}
.src-zoom-menu-item {
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 11px;
  background: transparent;
  color: var(--text, #0f172a);
  font-size: 12px;
  font-weight: 900;
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.src-zoom-menu-item:hover { background: color-mix(in srgb, var(--primary-color, #2563eb) 10%, transparent); }
.src-zoom-menu-item.active { background: var(--primary-color, #2563eb); color: #fff; }

.src-preview-scroll {
  --report-preview-scale: 1;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
  border-radius: 22px;
  background: rgba(148,163,184,.10);
  border: 1px solid rgba(148,163,184,.18);
  box-sizing: border-box;
}
.src-preview-center {
  width: 100%;
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}
.src-preview-scale {
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
  transform: scale(var(--report-preview-scale));
  transform-origin: top center;
  flex: 0 0 auto;
}
.letterhead-premium-template-page,
.student-report-card-page,
.src-a4-page {
  width: 210mm !important;
  min-width: 210mm !important;
  max-width: 210mm !important;
  min-height: 297mm !important;
  box-sizing: border-box !important;
}
.src-preview-shell:not(.expanded) .src-preview-scroll { overflow: hidden; }
.src-preview-shell.expanded .src-preview-scroll { overflow: auto; max-height: none; }
.src-preview-shell.expanded .src-preview-center {
  width: max(100%, calc(210mm * var(--report-preview-scale)));
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  overflow: visible;
  margin: 0 auto;
}

.letterhead-frame-line {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  border-radius: 8px;
}
.letterhead-frame-outer { inset: 4.5mm; border: 1.8px double; opacity: .75; }
.letterhead-frame-inner { inset: 7mm; border: 1px solid #e7ddbf; }
.letterhead-corner {
  position: absolute;
  z-index: 0;
  width: 18mm;
  height: 18mm;
  pointer-events: none;
  opacity: .85;
}
.letterhead-corner-tl { left: 4.5mm; top: 4.5mm; border-left: 3px double; border-top: 3px double; border-top-left-radius: 8px; }
.letterhead-corner-tr { right: 4.5mm; top: 4.5mm; border-right: 3px double; border-top: 3px double; border-top-right-radius: 8px; }
.letterhead-corner-bl { left: 4.5mm; bottom: 4.5mm; border-left: 3px double; border-bottom: 3px double; border-bottom-left-radius: 8px; }
.letterhead-corner-br { right: 4.5mm; bottom: 4.5mm; border-right: 3px double; border-bottom: 3px double; border-bottom-right-radius: 8px; }
.letterhead-grade-seal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  border: 1px solid;
  border-radius: 4px;
  padding: 2px 6px;
  font-weight: 950;
  background: #fff;
}
.letterhead-timeline-medallion {
  width: 13px;
  height: 13px;
  border-radius: 2px;
  transform: rotate(45deg);
  border: 3px solid;
  display: inline-block;
  position: relative;
}
.letterhead-timeline-medallion::before,
.letterhead-timeline-medallion::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 16px;
  height: 1px;
  background: #cbd5e1;
}
.letterhead-timeline-medallion::before { right: 100%; }
.letterhead-timeline-medallion::after { left: 100%; }

@media screen and (max-width: 380px) {
  .src-mobile-toolbar { gap: 6px; padding: 8px; }
  .src-mobile-toolbar strong { font-size: 12px; }
  .src-mobile-toolbar span { font-size: 10px; }
  .src-zoom-controls { gap: 3px; padding: 3px; }
  .src-zoom-icon-button { width: 29px; min-width: 29px; height: 29px; min-height: 29px; font-size: 16px; }
  .src-zoom-fit-button { min-width: 36px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; }
  .src-zoom-percent-button { min-width: 62px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; gap: 4px; }
  .src-zoom-menu { width: 106px; max-height: 210px; padding: 6px; }
  .src-zoom-menu-item { height: 30px; min-height: 30px; font-size: 11px; }
}

@media print {
  .src-preview-shell,
  .src-preview-scroll,
  .src-preview-center,
  .src-preview-scale {
    display: contents !important;
    transform: none !important;
    width: auto !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    overflow: visible !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .src-mobile-toolbar,
  .report-no-print {
    display: none !important;
    visibility: hidden !important;
  }

  .student-report-card-page,
  .letterhead-premium-template-page,
  .src-a4-page {
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    min-height: 297mm !important;
    transform: none !important;
    margin: 0 auto !important;
    box-shadow: none !important;
    border-color: #111 !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  .letterhead-premium-template-page [data-report-color-block="true"] {
    print-color-adjust: exact !important;
    -webkit-print-color-adjust: exact !important;
  }

  table,
  tr,
  td,
  th {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
}
`;function T({header:e,dataset:t,title:r="International Academic Progress Report",primaryColor:i,fontFamily:a,compact:s=!1}){let l=e||t?.header,d=(0,n.wX)(l),c=i||(0,n.Ak)(l,d.primaryColor),m=[d.address,d.phone?`Tel: ${d.phone}`:"",d.email,d.website].filter(Boolean).join("  •  "),p=[d.branchName,d.branchAddress].filter(Boolean).join(" \xb7 "),h=s?58:68;return(0,o.jsxs)("header",{className:"cambridge-report-header",style:{fontFamily:a||d.fontFamily||"Arial, sans-serif",color:"#0f172a",background:"#ffffff",border:"1px solid #9fb3d1",borderRadius:10,overflow:"hidden",boxShadow:"0 8px 22px rgba(15,23,42,.055)"},children:[(0,o.jsx)("div",{"data-report-color-block":"true",style:{height:6,background:"#0f2f5f"}}),(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`minmax(0, 1fr) ${s?172:198}px ${h}px`,gap:s?8:10,alignItems:"center",padding:s?"5px 10px":"8px 12px",background:"linear-gradient(180deg, #ffffff, #f3f8ff)",borderBottom:"1px solid #c9d7eb"},children:[(0,o.jsxs)("div",{style:{minWidth:0},children:[(0,o.jsx)("div",{style:{fontSize:s?15:17.5,lineHeight:1.05,fontWeight:950,letterSpacing:.18,textTransform:"uppercase",color:"#0f2f5f",overflowWrap:"anywhere"},children:d.schoolName}),(d.motto||m||p)&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?10.3:11.1,lineHeight:1.12,fontWeight:720,color:"#475569",overflowWrap:"anywhere"},children:[d.motto,m,p].filter(Boolean).join("  •  ")})]}),(0,o.jsxs)("div",{"data-report-color-block":"true",style:{border:`1px solid ${c}`,borderLeft:"5px solid #0f2f5f",background:"#ffffff",color:"#0f2f5f",borderRadius:4,padding:s?"5px 8px":"6px 10px",textAlign:"left",fontSize:s?10:11.1,fontWeight:950,lineHeight:1.15,textTransform:"uppercase",letterSpacing:.22},children:[r,(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?9.6:10.1,color:"#64748b",fontWeight:850},children:"Cambridge-style progress record"})]}),(0,o.jsx)("div",{style:{width:h,height:h,borderRadius:6,border:"1px solid #9fb3d1",overflow:"hidden",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:d.logo?(0,o.jsx)("img",{src:d.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4,boxSizing:"border-box"}}):(0,o.jsxs)("span",{style:{fontSize:s?7.6:8.1,fontWeight:950,color:"#64748b",textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,o.jsx)("br",{}),"Logo"]})})]})]})}function P(e){return String(e??"").trim().replace(/\s+/g," ").toLocaleLowerCase("en").replace(/(^|[\s\-\u2019'])(\p{L})/gu,(e,t,r)=>t+r.toLocaleUpperCase("en"))}let W=`
.src-empty-card {
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 16px;
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
  font-weight: 750;
}

.src-preview-shell {
  --a4-width-px: 793.7008;
  --a4-height-px: 1122.5197;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 24px;
}

.src-mobile-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 8px;
  padding: 10px;
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.22);
  box-shadow: 0 10px 24px rgba(15,23,42,.06);
}

.src-mobile-toolbar div { min-width: 0; }
.src-mobile-toolbar strong,
.src-mobile-toolbar span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.src-mobile-toolbar strong { font-size: 13px; font-weight: 950; color: var(--text, #0f172a); }
.src-mobile-toolbar span { margin-top: 2px; color: var(--muted, #64748b); font-size: 11px; font-weight: 750; }

.src-zoom-controls {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 10%, transparent);
  border: 1px solid rgba(148,163,184,.18);
}
.src-zoom-controls button { appearance: none; -webkit-appearance: none; border: 0; cursor: pointer; font-family: inherit; }
.src-zoom-icon-button,
.src-zoom-fit-button,
.src-zoom-percent-button {
  height: 32px;
  min-height: 32px;
  border-radius: 999px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-weight: 950;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 0 6px 14px rgba(15,23,42,.12);
}
.src-zoom-icon-button { width: 32px; min-width: 32px; padding: 0; font-size: 18px; }
.src-zoom-fit-button { min-width: 42px; padding: 0 12px; font-size: 12px; }
.src-zoom-percent-button { min-width: 68px; padding: 0 10px; font-size: 12px; gap: 5px; font-variant-numeric: tabular-nums; }
.src-zoom-caret { font-size: 9px; line-height: 1; opacity: .9; transform: translateY(1px); }
.src-zoom-menu-wrap { position: relative; display: inline-flex; flex: 0 0 auto; }
.src-zoom-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 40;
  width: 114px;
  max-height: 252px;
  overflow-y: auto;
  display: grid;
  gap: 4px;
  padding: 7px;
  border-radius: 16px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.34);
  box-shadow: 0 20px 46px rgba(15,23,42,.20);
  box-sizing: border-box;
}
.src-zoom-menu-item {
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 11px;
  background: transparent;
  color: var(--text, #0f172a);
  font-size: 12px;
  font-weight: 900;
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.src-zoom-menu-item:hover { background: color-mix(in srgb, var(--primary-color, #2563eb) 10%, transparent); }
.src-zoom-menu-item.active { background: var(--primary-color, #2563eb); color: #fff; }

.src-preview-scroll {
  --report-preview-scale: 1;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
  border-radius: 22px;
  background: rgba(148,163,184,.10);
  border: 1px solid rgba(148,163,184,.18);
  box-sizing: border-box;
}
.src-preview-center {
  width: 100%;
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}
.src-preview-scale {
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
  transform: scale(var(--report-preview-scale));
  transform-origin: top center;
  flex: 0 0 auto;
}
.cambridge-template-page,
.student-report-card-page,
.src-a4-page {
  width: 210mm !important;
  min-width: 210mm !important;
  max-width: 210mm !important;
  min-height: 297mm !important;
  box-sizing: border-box !important;
}
.src-preview-shell:not(.expanded) .src-preview-scroll { overflow: hidden; }
.src-preview-shell.expanded .src-preview-scroll { overflow: auto; max-height: none; }
.src-preview-shell.expanded .src-preview-center {
  width: max(100%, calc(210mm * var(--report-preview-scale)));
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  overflow: visible;
  margin: 0 auto;
}

.cambridge-frame-line {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  border-radius: 18px;
}
.cambridge-frame-outer { inset: 4.5mm; border: 1.5px solid; opacity: .65; }
.cambridge-frame-inner { inset: 6.5mm; border: 1px solid #e5e7eb; }
.cambridge-corner {
  position: absolute;
  z-index: 0;
  width: 17mm;
  height: 17mm;
  pointer-events: none;
  opacity: .85;
}
.cambridge-corner-tl { left: 4.5mm; top: 4.5mm; border-left: 3px solid; border-top: 3px solid; border-top-left-radius: 18px; }
.cambridge-corner-tr { right: 4.5mm; top: 4.5mm; border-right: 3px solid; border-top: 3px solid; border-top-right-radius: 18px; }
.cambridge-corner-bl { left: 4.5mm; bottom: 4.5mm; border-left: 3px solid; border-bottom: 3px solid; border-bottom-left-radius: 18px; }
.cambridge-corner-br { right: 4.5mm; bottom: 4.5mm; border-right: 3px solid; border-bottom: 3px solid; border-bottom-right-radius: 18px; }
.cambridge-grade-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  border: 1px solid;
  border-radius: 999px;
  padding: 2px 6px;
  font-weight: 950;
  background: #fff;
}
.cambridge-timeline-marker {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: 3px solid;
  display: inline-block;
  position: relative;
}
.cambridge-timeline-marker::before,
.cambridge-timeline-marker::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 16px;
  height: 1px;
  background: #cbd5e1;
}
.cambridge-timeline-marker::before { right: 100%; }
.cambridge-timeline-marker::after { left: 100%; }

@media screen and (max-width: 380px) {
  .src-mobile-toolbar { gap: 6px; padding: 8px; }
  .src-mobile-toolbar strong { font-size: 12px; }
  .src-mobile-toolbar span { font-size: 10px; }
  .src-zoom-controls { gap: 3px; padding: 3px; }
  .src-zoom-icon-button { width: 29px; min-width: 29px; height: 29px; min-height: 29px; font-size: 16px; }
  .src-zoom-fit-button { min-width: 36px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; }
  .src-zoom-percent-button { min-width: 62px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; gap: 4px; }
  .src-zoom-menu { width: 106px; max-height: 210px; padding: 6px; }
  .src-zoom-menu-item { height: 30px; min-height: 30px; font-size: 11px; }
}

@media print {
  .src-preview-shell,
  .src-preview-scroll,
  .src-preview-center,
  .src-preview-scale {
    display: contents !important;
    transform: none !important;
    width: auto !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    overflow: visible !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .src-mobile-toolbar,
  .report-no-print {
    display: none !important;
    visibility: hidden !important;
  }

  .student-report-card-page,
  .cambridge-template-page,
  .src-a4-page {
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    min-height: 297mm !important;
    transform: none !important;
    margin: 0 auto !important;
    box-shadow: none !important;
    border-color: #111 !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  .cambridge-template-page [data-report-color-block="true"] {
    print-color-adjust: exact !important;
    -webkit-print-color-adjust: exact !important;
  }

  table,
  tr,
  td,
  th {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
}
`;function R({header:e,dataset:t,title:r="International Learner Progress Report",primaryColor:i,fontFamily:a,compact:s=!1}){let l=e||t?.header,d=(0,n.wX)(l),c=i||(0,n.Ak)(l,d.primaryColor),m=[d.address,d.phone?`Tel: ${d.phone}`:"",d.email,d.website].filter(Boolean).join("  •  "),p=[d.branchName,d.branchAddress].filter(Boolean).join(" \xb7 "),h=s?42:48;return(0,o.jsxs)("header",{className:"ib-report-header",style:{fontFamily:a||d.fontFamily||"Arial, sans-serif",color:"#0f172a",background:"#ffffff",border:"1px solid #99d5cb",borderRadius:10,overflow:"hidden",boxShadow:"0 8px 22px rgba(15,23,42,.055)"},children:[(0,o.jsx)("div",{"data-report-color-block":"true",style:{height:6,background:"#0f766e"}}),(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`minmax(0, 1fr) ${s?164:182}px ${h}px`,gap:s?7:9,alignItems:"center",padding:s?"1px 10px":"7px 12px",background:"linear-gradient(180deg, #ffffff, #f6fffb)",borderBottom:"1px solid #c7ebe4"},children:[(0,o.jsxs)("div",{style:{minWidth:0},children:[(0,o.jsx)("div",{style:{fontSize:s?15:17.5,lineHeight:1.05,fontWeight:950,letterSpacing:.18,textTransform:"uppercase",color:"#0f766e",overflowWrap:"anywhere"},children:d.schoolName}),(d.motto||m||p)&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?9.8:10.6,lineHeight:1.12,fontWeight:720,color:"#475569",overflowWrap:"anywhere"},children:[d.motto,m,p].filter(Boolean).join("  •  ")})]}),(0,o.jsxs)("div",{"data-report-color-block":"true",style:{border:`1px solid ${c}`,borderLeft:"5px solid #0f766e",background:"#ffffff",color:"#0f766e",borderRadius:4,padding:s?"5px 8px":"6px 10px",textAlign:"left",fontSize:s?9.2:10,fontWeight:950,lineHeight:1.15,textTransform:"uppercase",letterSpacing:.22},children:[r,(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?9.6:10.1,color:"#64748b",fontWeight:850},children:"IB-style progress record"})]}),(0,o.jsx)("div",{style:{width:h,height:h,borderRadius:6,border:"1px solid #99d5cb",overflow:"hidden",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:d.logo?(0,o.jsx)("img",{src:d.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4,boxSizing:"border-box"}}):(0,o.jsxs)("span",{style:{fontSize:s?7.6:8.1,fontWeight:950,color:"#64748b",textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,o.jsx)("br",{}),"Logo"]})})]})]})}function B(e){return String(e??"").toLocaleLowerCase("en-GH").replace(/(^|[\s\-'])\p{L}/gu,e=>e.toLocaleUpperCase("en-GH"))}let L=`
.src-empty-card {
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 16px;
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
  font-weight: 750;
}

.src-preview-shell {
  --a4-width-px: 793.7008;
  --a4-height-px: 1122.5197;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 24px;
}

.src-mobile-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 8px;
  padding: 10px;
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.22);
  box-shadow: 0 10px 24px rgba(15,23,42,.06);
}

.src-mobile-toolbar div { min-width: 0; }
.src-mobile-toolbar strong,
.src-mobile-toolbar span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.src-mobile-toolbar strong { font-size: 13px; font-weight: 950; color: var(--text, #0f172a); }
.src-mobile-toolbar span { margin-top: 2px; color: var(--muted, #64748b); font-size: 11px; font-weight: 750; }

.src-zoom-controls {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 10%, transparent);
  border: 1px solid rgba(148,163,184,.18);
}
.src-zoom-controls button { appearance: none; -webkit-appearance: none; border: 0; cursor: pointer; font-family: inherit; }
.src-zoom-icon-button,
.src-zoom-fit-button,
.src-zoom-percent-button {
  height: 32px;
  min-height: 32px;
  border-radius: 999px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-weight: 950;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 0 6px 14px rgba(15,23,42,.12);
}
.src-zoom-icon-button { width: 32px; min-width: 32px; padding: 0; font-size: 18px; }
.src-zoom-fit-button { min-width: 42px; padding: 0 12px; font-size: 12px; }
.src-zoom-percent-button { min-width: 68px; padding: 0 10px; font-size: 12px; gap: 5px; font-variant-numeric: tabular-nums; }
.src-zoom-caret { font-size: 9px; line-height: 1; opacity: .9; transform: translateY(1px); }
.src-zoom-menu-wrap { position: relative; display: inline-flex; flex: 0 0 auto; }
.src-zoom-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 40;
  width: 114px;
  max-height: 252px;
  overflow-y: auto;
  display: grid;
  gap: 4px;
  padding: 7px;
  border-radius: 16px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.34);
  box-shadow: 0 20px 46px rgba(15,23,42,.20);
  box-sizing: border-box;
}
.src-zoom-menu-item {
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 11px;
  background: transparent;
  color: var(--text, #0f172a);
  font-size: 12px;
  font-weight: 900;
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.src-zoom-menu-item:hover { background: color-mix(in srgb, var(--primary-color, #2563eb) 10%, transparent); }
.src-zoom-menu-item.active { background: var(--primary-color, #2563eb); color: #fff; }

.src-preview-scroll {
  --report-preview-scale: 1;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
  border-radius: 22px;
  background: rgba(148,163,184,.10);
  border: 1px solid rgba(148,163,184,.18);
  box-sizing: border-box;
}
.src-preview-center {
  width: 100%;
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}
.src-preview-scale {
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
  transform: scale(var(--report-preview-scale));
  transform-origin: top center;
  flex: 0 0 auto;
}
.ib-template-page,
.student-report-card-page,
.src-a4-page {
  width: 210mm !important;
  min-width: 210mm !important;
  max-width: 210mm !important;
  min-height: 297mm !important;
  box-sizing: border-box !important;
}
.src-preview-shell:not(.expanded) .src-preview-scroll { overflow: hidden; }
.src-preview-shell.expanded .src-preview-scroll { overflow: auto; max-height: none; }
.src-preview-shell.expanded .src-preview-center {
  width: max(100%, calc(210mm * var(--report-preview-scale)));
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  overflow: visible;
  margin: 0 auto;
}

.ib-frame-line {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  border-radius: 18px;
}
.ib-frame-outer { inset: 4.5mm; border: 1.5px solid; opacity: .65; }
.ib-frame-inner { inset: 6.5mm; border: 1px solid #e5e7eb; }
.ib-corner {
  position: absolute;
  z-index: 0;
  width: 17mm;
  height: 17mm;
  pointer-events: none;
  opacity: .85;
}
.ib-corner-tl { left: 4.5mm; top: 4.5mm; border-left: 3px solid; border-top: 3px solid; border-top-left-radius: 18px; }
.ib-corner-tr { right: 4.5mm; top: 4.5mm; border-right: 3px solid; border-top: 3px solid; border-top-right-radius: 18px; }
.ib-corner-bl { left: 4.5mm; bottom: 4.5mm; border-left: 3px solid; border-bottom: 3px solid; border-bottom-left-radius: 18px; }
.ib-corner-br { right: 4.5mm; bottom: 4.5mm; border-right: 3px solid; border-bottom: 3px solid; border-bottom-right-radius: 18px; }
.ib-grade-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  border: 1px solid;
  border-radius: 999px;
  padding: 2px 6px;
  font-weight: 950;
  background: #fff;
}
.ib-timeline-marker {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: 3px solid;
  display: inline-block;
  position: relative;
}
.ib-timeline-marker::before,
.ib-timeline-marker::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 16px;
  height: 1px;
  background: #cbd5e1;
}
.ib-timeline-marker::before { right: 100%; }
.ib-timeline-marker::after { left: 100%; }

@media screen and (max-width: 380px) {
  .src-mobile-toolbar { gap: 6px; padding: 8px; }
  .src-mobile-toolbar strong { font-size: 12px; }
  .src-mobile-toolbar span { font-size: 10px; }
  .src-zoom-controls { gap: 3px; padding: 3px; }
  .src-zoom-icon-button { width: 29px; min-width: 29px; height: 29px; min-height: 29px; font-size: 16px; }
  .src-zoom-fit-button { min-width: 36px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; }
  .src-zoom-percent-button { min-width: 62px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; gap: 4px; }
  .src-zoom-menu { width: 106px; max-height: 210px; padding: 6px; }
  .src-zoom-menu-item { height: 30px; min-height: 30px; font-size: 11px; }
}

@media print {
  .src-preview-shell,
  .src-preview-scroll,
  .src-preview-center,
  .src-preview-scale {
    display: contents !important;
    transform: none !important;
    width: auto !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    overflow: visible !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .src-mobile-toolbar,
  .report-no-print {
    display: none !important;
    visibility: hidden !important;
  }

  .student-report-card-page,
  .ib-template-page,
  .src-a4-page {
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    min-height: 297mm !important;
    transform: none !important;
    margin: 0 auto !important;
    box-shadow: none !important;
    border-color: #111 !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  .ib-template-page [data-report-color-block="true"] {
    print-color-adjust: exact !important;
    -webkit-print-color-adjust: exact !important;
  }

  table,
  tr,
  td,
  th {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
}
`;function M({header:e,dataset:t,title:r="Early Years Progress Report",primaryColor:i,fontFamily:a,compact:s=!1}){let l=e||t?.header,d=(0,n.wX)(l),c=i||(0,n.Ak)(l,d.primaryColor),m=[d.address,d.phone?`Tel: ${d.phone}`:"",d.email,d.website].filter(Boolean).join("  •  "),p=[d.branchName,d.branchAddress].filter(Boolean).join(" \xb7 "),h=s?42:48;return(0,o.jsxs)("header",{className:"kindergarten-report-header",style:{fontFamily:a||d.fontFamily||"Arial, sans-serif",color:"#0f172a",background:"#ffffff",border:"1px solid #fed7aa",borderRadius:18,overflow:"hidden",boxShadow:"0 8px 22px rgba(15,23,42,.055)"},children:[(0,o.jsx)("div",{"data-report-color-block":"true",style:{height:6,background:"#ea580c"}}),(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`minmax(0, 1fr) ${s?172:198}px ${h}px`,gap:s?8:10,alignItems:"center",padding:s?"6px 10px":"8px 12px",background:"linear-gradient(180deg, #ffffff, #fff7ed)",borderBottom:"1px solid #ffedd5"},children:[(0,o.jsxs)("div",{style:{minWidth:0},children:[(0,o.jsx)("div",{style:{fontSize:s?15:17.5,lineHeight:1.05,fontWeight:950,letterSpacing:.18,textTransform:"uppercase",color:"#ea580c",overflowWrap:"anywhere"},children:d.schoolName}),(d.motto||m||p)&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?10.3:11.1,lineHeight:1.12,fontWeight:720,color:"#6b7280",overflowWrap:"anywhere"},children:[d.motto,m,p].filter(Boolean).join("  •  ")})]}),(0,o.jsxs)("div",{"data-report-color-block":"true",style:{border:`1px solid ${c}`,borderLeft:"0",background:"linear-gradient(135deg, #fff7ed, #ecfeff)",color:"#ea580c",borderRadius:999,padding:s?"5px 8px":"6px 10px",textAlign:"left",fontSize:s?9.2:10,fontWeight:950,lineHeight:1.15,textTransform:"uppercase",letterSpacing:.22},children:[r,(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?9.6:10.1,color:"#78716c",fontWeight:850},children:"Kindergarten progress record"})]}),(0,o.jsx)("div",{style:{width:h,height:h,borderRadius:16,border:"1px solid #fed7aa",overflow:"hidden",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:d.logo?(0,o.jsx)("img",{src:d.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4,boxSizing:"border-box"}}):(0,o.jsxs)("span",{style:{fontSize:s?7.6:8.1,fontWeight:950,color:"#78716c",textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,o.jsx)("br",{}),"Logo"]})})]})]})}function $(e){return String(e??"").toLocaleLowerCase("en-GH").replace(/(^|[\s\-'])\p{L}/gu,e=>e.toLocaleUpperCase("en-GH"))}let H=`
.src-empty-card {
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 16px;
  background: var(--surface, #fff);
  color: var(--text, #1f2937);
  font-weight: 750;
}

.src-preview-shell {
  --a4-width-px: 793.7008;
  --a4-height-px: 1122.5197;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 24px;
}

.src-mobile-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 8px;
  padding: 10px;
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.22);
  box-shadow: 0 10px 24px rgba(15,23,42,.06);
}

.src-mobile-toolbar div { min-width: 0; }
.src-mobile-toolbar strong,
.src-mobile-toolbar span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.src-mobile-toolbar strong { font-size: 13px; font-weight: 950; color: var(--text, #1f2937); }
.src-mobile-toolbar span { margin-top: 2px; color: var(--muted, #78716c); font-size: 11px; font-weight: 750; }

.src-zoom-controls {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #78716c) 10%, transparent);
  border: 1px solid rgba(148,163,184,.18);
}
.src-zoom-controls button { appearance: none; -webkit-appearance: none; border: 0; cursor: pointer; font-family: inherit; }
.src-zoom-icon-button,
.src-zoom-fit-button,
.src-zoom-percent-button {
  height: 32px;
  min-height: 32px;
  border-radius: 999px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-weight: 950;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 0 6px 14px rgba(15,23,42,.12);
}
.src-zoom-icon-button { width: 32px; min-width: 32px; padding: 0; font-size: 18px; }
.src-zoom-fit-button { min-width: 42px; padding: 0 12px; font-size: 12px; }
.src-zoom-percent-button { min-width: 68px; padding: 0 10px; font-size: 12px; gap: 5px; font-variant-numeric: tabular-nums; }
.src-zoom-caret { font-size: 9px; line-height: 1; opacity: .9; transform: translateY(1px); }
.src-zoom-menu-wrap { position: relative; display: inline-flex; flex: 0 0 auto; }
.src-zoom-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 40;
  width: 114px;
  max-height: 252px;
  overflow-y: auto;
  display: grid;
  gap: 4px;
  padding: 7px;
  border-radius: 16px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.34);
  box-shadow: 0 20px 46px rgba(15,23,42,.20);
  box-sizing: border-box;
}
.src-zoom-menu-item {
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 11px;
  background: transparent;
  color: var(--text, #1f2937);
  font-size: 12px;
  font-weight: 900;
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.src-zoom-menu-item:hover { background: color-mix(in srgb, var(--primary-color, #2563eb) 10%, transparent); }
.src-zoom-menu-item.active { background: var(--primary-color, #2563eb); color: #fff; }

.src-preview-scroll {
  --report-preview-scale: 1;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
  border-radius: 22px;
  background: rgba(148,163,184,.10);
  border: 1px solid rgba(148,163,184,.18);
  box-sizing: border-box;
}
.src-preview-center {
  width: 100%;
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}
.src-preview-scale {
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
  transform: scale(var(--report-preview-scale));
  transform-origin: top center;
  flex: 0 0 auto;
}
.kindergarten-template-page,
.student-report-card-page,
.src-a4-page {
  width: 210mm !important;
  min-width: 210mm !important;
  max-width: 210mm !important;
  min-height: 297mm !important;
  box-sizing: border-box !important;
}
.src-preview-shell:not(.expanded) .src-preview-scroll { overflow: hidden; }
.src-preview-shell.expanded .src-preview-scroll { overflow: auto; max-height: none; }
.src-preview-shell.expanded .src-preview-center {
  width: max(100%, calc(210mm * var(--report-preview-scale)));
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  overflow: visible;
  margin: 0 auto;
}

.ib-frame-line {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  border-radius: 18px;
}
.ib-frame-outer { inset: 4.5mm; border: 1.5px solid; opacity: .65; }
.ib-frame-inner { inset: 6.5mm; border: 1px solid #e5e7eb; }
.ib-corner {
  position: absolute;
  z-index: 0;
  width: 17mm;
  height: 17mm;
  pointer-events: none;
  opacity: .85;
}
.ib-corner-tl { left: 4.5mm; top: 4.5mm; border-left: 3px solid; border-top: 3px solid; border-top-left-radius: 18px; }
.ib-corner-tr { right: 4.5mm; top: 4.5mm; border-right: 3px solid; border-top: 3px solid; border-top-right-radius: 18px; }
.ib-corner-bl { left: 4.5mm; bottom: 4.5mm; border-left: 3px solid; border-bottom: 3px solid; border-bottom-left-radius: 18px; }
.ib-corner-br { right: 4.5mm; bottom: 4.5mm; border-right: 3px solid; border-bottom: 3px solid; border-bottom-right-radius: 18px; }
.kindergarten-grade-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  border: 1px solid;
  border-radius: 999px;
  padding: 2px 6px;
  font-weight: 950;
  background: #fff;
}
.ib-timeline-marker {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: 3px solid;
  display: inline-block;
  position: relative;
}
.ib-timeline-marker::before,
.ib-timeline-marker::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 16px;
  height: 1px;
  background: #cbd5e1;
}
.ib-timeline-marker::before { right: 100%; }
.ib-timeline-marker::after { left: 100%; }

@media screen and (max-width: 380px) {
  .src-mobile-toolbar { gap: 6px; padding: 8px; }
  .src-mobile-toolbar strong { font-size: 12px; }
  .src-mobile-toolbar span { font-size: 10px; }
  .src-zoom-controls { gap: 3px; padding: 3px; }
  .src-zoom-icon-button { width: 29px; min-width: 29px; height: 29px; min-height: 29px; font-size: 16px; }
  .src-zoom-fit-button { min-width: 36px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; }
  .src-zoom-percent-button { min-width: 62px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; gap: 4px; }
  .src-zoom-menu { width: 106px; max-height: 210px; padding: 6px; }
  .src-zoom-menu-item { height: 30px; min-height: 30px; font-size: 11px; }
}

@media print {
  .src-preview-shell,
  .src-preview-scroll,
  .src-preview-center,
  .src-preview-scale {
    display: contents !important;
    transform: none !important;
    width: auto !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    overflow: visible !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .src-mobile-toolbar,
  .report-no-print {
    display: none !important;
    visibility: hidden !important;
  }

  .student-report-card-page,
  .kindergarten-template-page,
  .src-a4-page {
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    min-height: 297mm !important;
    transform: none !important;
    margin: 0 auto !important;
    box-shadow: none !important;
    border-color: #111 !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  .kindergarten-template-page [data-report-color-block="true"] {
    print-color-adjust: exact !important;
    -webkit-print-color-adjust: exact !important;
  }

  table,
  tr,
  td,
  th {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
}
`;function D({header:e,dataset:t,title:r="Montessori Progress Record",primaryColor:i,fontFamily:a,compact:s=!1}){let l=e||t?.header,d=(0,n.wX)(l),c=i||(0,n.Ak)(l,d.primaryColor),m=[d.address,d.phone?`Tel: ${d.phone}`:"",d.email,d.website].filter(Boolean).join("  •  "),p=[d.branchName,d.branchAddress].filter(Boolean).join(" \xb7 "),h=s?38:44;return(0,o.jsx)("header",{className:"montessori-report-header",style:{fontFamily:a||d.fontFamily||"Arial, sans-serif",color:"#243126",background:"#fffdf7",border:"1px solid #d9cbb3",borderRadius:8,overflow:"hidden",boxShadow:"0 7px 18px rgba(80,64,38,.055)"},children:(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`${h}px minmax(0, 1fr) ${s?155:169}px`,gap:s?7:8,alignItems:"center",padding:s?"6px 10px":"4px 12px",background:"linear-gradient(180deg, #fffdf7, #ffffff)",borderBottom:"1px solid #e7ddc8",position:"relative"},children:[(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:12,right:12,bottom:-1,height:1,background:`linear-gradient(90deg, transparent, ${c}, transparent)`,opacity:.45}}),(0,o.jsx)("div",{style:{width:h,height:h,borderRadius:999,border:"1px solid #d9cbb3",overflow:"hidden",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:d.logo?(0,o.jsx)("img",{src:d.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4,boxSizing:"border-box"}}):(0,o.jsxs)("span",{style:{fontSize:s?9.2:9.8,fontWeight:900,color:"#6f6a5f",textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,o.jsx)("br",{}),"Logo"]})}),(0,o.jsxs)("div",{style:{minWidth:0},children:[(0,o.jsx)("div",{style:{fontSize:s?14.5:16.8,lineHeight:1.08,fontWeight:920,letterSpacing:.16,textTransform:"uppercase",color:"#243126",overflowWrap:"anywhere"},children:d.schoolName}),(d.motto||m||p)&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?10.1:10.6,lineHeight:1.12,fontWeight:680,color:"#6f6a5f",overflowWrap:"anywhere"},children:[d.motto,m,p].filter(Boolean).join("  •  ")})]}),(0,o.jsxs)("div",{"data-report-color-block":"true",style:{borderLeft:`3px solid ${c}`,background:"#f6f3ea",color:"#243126",borderRadius:6,padding:s?"5px 8px":"6px 10px",textAlign:"left",fontSize:s?9.3:10,fontWeight:920,lineHeight:1.15,textTransform:"uppercase",letterSpacing:.22},children:[r,(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?9.6:10.2,color:"#6f6a5f",fontWeight:760},children:"calm early-years learning record"})]})]})})}function F(e){return String(e??"").toLocaleLowerCase("en-GH").replace(/(^|[\s\-'])\p{L}/gu,e=>e.toLocaleUpperCase("en-GH"))}let E=`
.src-empty-card {
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 16px;
  background: var(--surface, #fff);
  color: var(--text, #1f2937);
  font-weight: 750;
}

.src-preview-shell {
  --a4-width-px: 793.7008;
  --a4-height-px: 1122.5197;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 24px;
}

.src-mobile-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 8px;
  padding: 10px;
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.22);
  box-shadow: 0 10px 24px rgba(15,23,42,.06);
}

.src-mobile-toolbar div { min-width: 0; }
.src-mobile-toolbar strong,
.src-mobile-toolbar span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.src-mobile-toolbar strong { font-size: 13px; font-weight: 950; color: var(--text, #1f2937); }
.src-mobile-toolbar span { margin-top: 2px; color: var(--muted, #78716c); font-size: 11px; font-weight: 750; }

.src-zoom-controls {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #78716c) 10%, transparent);
  border: 1px solid rgba(148,163,184,.18);
}
.src-zoom-controls button { appearance: none; -webkit-appearance: none; border: 0; cursor: pointer; font-family: inherit; }
.src-zoom-icon-button,
.src-zoom-fit-button,
.src-zoom-percent-button {
  height: 32px;
  min-height: 32px;
  border-radius: 999px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-weight: 950;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 0 6px 14px rgba(15,23,42,.12);
}
.src-zoom-icon-button { width: 32px; min-width: 32px; padding: 0; font-size: 18px; }
.src-zoom-fit-button { min-width: 42px; padding: 0 12px; font-size: 12px; }
.src-zoom-percent-button { min-width: 68px; padding: 0 10px; font-size: 12px; gap: 5px; font-variant-numeric: tabular-nums; }
.src-zoom-caret { font-size: 9px; line-height: 1; opacity: .9; transform: translateY(1px); }
.src-zoom-menu-wrap { position: relative; display: inline-flex; flex: 0 0 auto; }
.src-zoom-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 40;
  width: 114px;
  max-height: 252px;
  overflow-y: auto;
  display: grid;
  gap: 4px;
  padding: 7px;
  border-radius: 16px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.34);
  box-shadow: 0 20px 46px rgba(15,23,42,.20);
  box-sizing: border-box;
}
.src-zoom-menu-item {
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 11px;
  background: transparent;
  color: var(--text, #1f2937);
  font-size: 12px;
  font-weight: 900;
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.src-zoom-menu-item:hover { background: color-mix(in srgb, var(--primary-color, #2563eb) 10%, transparent); }
.src-zoom-menu-item.active { background: var(--primary-color, #2563eb); color: #fff; }

.src-preview-scroll {
  --report-preview-scale: 1;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
  border-radius: 22px;
  background: rgba(148,163,184,.10);
  border: 1px solid rgba(148,163,184,.18);
  box-sizing: border-box;
}
.src-preview-center {
  width: 100%;
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}
.src-preview-scale {
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
  transform: scale(var(--report-preview-scale));
  transform-origin: top center;
  flex: 0 0 auto;
}
.montessori-template-page,
.student-report-card-page,
.src-a4-page {
  width: 210mm !important;
  min-width: 210mm !important;
  max-width: 210mm !important;
  min-height: 297mm !important;
  box-sizing: border-box !important;
}
.src-preview-shell:not(.expanded) .src-preview-scroll { overflow: hidden; }
.src-preview-shell.expanded .src-preview-scroll { overflow: auto; max-height: none; }
.src-preview-shell.expanded .src-preview-center {
  width: max(100%, calc(210mm * var(--report-preview-scale)));
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  overflow: visible;
  margin: 0 auto;
}

.montessori-frame-line {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  border-radius: 18px;
}
.montessori-frame-outer { inset: 4.5mm; border: 1.5px solid; opacity: .65; }
.montessori-frame-inner { inset: 6.5mm; border: 1px solid #e5e7eb; }
.montessori-corner {
  position: absolute;
  z-index: 0;
  width: 17mm;
  height: 17mm;
  pointer-events: none;
  opacity: .85;
}
.montessori-corner-tl { left: 4.5mm; top: 4.5mm; border-left: 3px solid; border-top: 3px solid; border-top-left-radius: 18px; }
.montessori-corner-tr { right: 4.5mm; top: 4.5mm; border-right: 3px solid; border-top: 3px solid; border-top-right-radius: 18px; }
.montessori-corner-bl { left: 4.5mm; bottom: 4.5mm; border-left: 3px solid; border-bottom: 3px solid; border-bottom-left-radius: 18px; }
.montessori-corner-br { right: 4.5mm; bottom: 4.5mm; border-right: 3px solid; border-bottom: 3px solid; border-bottom-right-radius: 18px; }
.montessori-grade-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  border: 1px solid;
  border-radius: 999px;
  padding: 2px 6px;
  font-weight: 950;
  background: #fff;
}
.montessori-timeline-marker {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: 3px solid;
  display: inline-block;
  position: relative;
}
.montessori-timeline-marker::before,
.montessori-timeline-marker::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 16px;
  height: 1px;
  background: #cbd5e1;
}
.montessori-timeline-marker::before { right: 100%; }
.montessori-timeline-marker::after { left: 100%; }

@media screen and (max-width: 380px) {
  .src-mobile-toolbar { gap: 6px; padding: 8px; }
  .src-mobile-toolbar strong { font-size: 12px; }
  .src-mobile-toolbar span { font-size: 10px; }
  .src-zoom-controls { gap: 3px; padding: 3px; }
  .src-zoom-icon-button { width: 29px; min-width: 29px; height: 29px; min-height: 29px; font-size: 16px; }
  .src-zoom-fit-button { min-width: 36px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; }
  .src-zoom-percent-button { min-width: 62px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; gap: 4px; }
  .src-zoom-menu { width: 106px; max-height: 210px; padding: 6px; }
  .src-zoom-menu-item { height: 30px; min-height: 30px; font-size: 11px; }
}

@media print {
  .src-preview-shell,
  .src-preview-scroll,
  .src-preview-center,
  .src-preview-scale {
    display: contents !important;
    transform: none !important;
    width: auto !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    overflow: visible !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .src-mobile-toolbar,
  .report-no-print {
    display: none !important;
    visibility: hidden !important;
  }

  .student-report-card-page,
  .montessori-template-page,
  .src-a4-page {
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    min-height: 297mm !important;
    transform: none !important;
    margin: 0 auto !important;
    box-shadow: none !important;
    border-color: #111 !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  .montessori-template-page [data-report-color-block="true"] {
    print-color-adjust: exact !important;
    -webkit-print-color-adjust: exact !important;
  }

  table,
  tr,
  td,
  th {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
}
`;function G({header:e,dataset:t,title:r="Official Academic Transcript",primaryColor:i,fontFamily:a,compact:s=!1}){let l=e||t?.header,d=(0,n.wX)(l),c=i||(0,n.Ak)(l,d.primaryColor),m=[d.address,d.phone?`Tel: ${d.phone}`:"",d.email,d.website].filter(Boolean).join("  •  "),p=[d.branchName,d.branchAddress].filter(Boolean).join(" \xb7 "),h=s?38:44;return(0,o.jsx)("header",{className:"montessori-report-header",style:{fontFamily:a||d.fontFamily||"Arial, sans-serif",color:"#111827",background:"#ffffff",border:"1px solid #9ca3af",borderRadius:4,overflow:"hidden",boxShadow:"0 8px 22px rgba(15,23,42,.055)"},children:(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`${h}px minmax(0, 1fr) ${s?155:169}px`,gap:s?7:8,alignItems:"center",padding:s?"6px 10px":"4px 12px",background:"#ffffff",borderBottom:"3px double #111827",position:"relative"},children:[(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:12,right:12,bottom:-1,height:1,background:`linear-gradient(90deg, transparent, ${c}, transparent)`,opacity:.45}}),(0,o.jsx)("div",{style:{width:h,height:h,borderRadius:999,border:"1px solid #9ca3af",overflow:"hidden",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:d.logo?(0,o.jsx)("img",{src:d.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4,boxSizing:"border-box"}}):(0,o.jsxs)("span",{style:{fontSize:s?9.2:9.8,fontWeight:900,color:"#4b5563",textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,o.jsx)("br",{}),"Logo"]})}),(0,o.jsxs)("div",{style:{minWidth:0},children:[(0,o.jsx)("div",{style:{fontSize:s?14.5:16.8,lineHeight:1.08,fontWeight:920,letterSpacing:.16,textTransform:"uppercase",color:"#111827",overflowWrap:"anywhere"},children:d.schoolName}),(d.motto||m||p)&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?10.1:10.6,lineHeight:1.12,fontWeight:680,color:"#4b5563",overflowWrap:"anywhere"},children:[d.motto,m,p].filter(Boolean).join("  •  ")})]}),(0,o.jsxs)("div",{"data-report-color-block":"true",style:{borderLeft:`4px solid ${c}`,background:"#f3f4f6",color:"#111827",borderRadius:3,padding:s?"5px 8px":"6px 10px",textAlign:"left",fontSize:s?9.3:10,fontWeight:920,lineHeight:1.15,textTransform:"uppercase",letterSpacing:.22},children:[r,(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?9.6:10.2,color:"#4b5563",fontWeight:760},children:"office of academic records"})]})]})})}function O(e){return String(e??"").toLocaleLowerCase("en-GH").replace(/(^|[\s\-'])\p{L}/gu,e=>e.toLocaleUpperCase("en-GH"))}let _=`
.src-empty-card {
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 16px;
  background: var(--surface, #fff);
  color: var(--text, #1f2937);
  font-weight: 750;
}

.src-preview-shell {
  --a4-width-px: 793.7008;
  --a4-height-px: 1122.5197;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 24px;
}

.src-mobile-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 8px;
  padding: 10px;
  border-radius: 3px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.22);
  box-shadow: 0 10px 24px rgba(15,23,42,.06);
}

.src-mobile-toolbar div { min-width: 0; }
.src-mobile-toolbar strong,
.src-mobile-toolbar span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.src-mobile-toolbar strong { font-size: 13px; font-weight: 950; color: var(--text, #1f2937); }
.src-mobile-toolbar span { margin-top: 2px; color: var(--muted, #78716c); font-size: 11px; font-weight: 750; }

.src-zoom-controls {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--muted, #78716c) 10%, transparent);
  border: 1px solid rgba(148,163,184,.18);
}
.src-zoom-controls button { appearance: none; -webkit-appearance: none; border: 0; cursor: pointer; font-family: inherit; }
.src-zoom-icon-button,
.src-zoom-fit-button,
.src-zoom-percent-button {
  height: 32px;
  min-height: 32px;
  border-radius: 2px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-weight: 950;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 0 6px 14px rgba(15,23,42,.12);
}
.src-zoom-icon-button { width: 32px; min-width: 32px; padding: 0; font-size: 18px; }
.src-zoom-fit-button { min-width: 42px; padding: 0 12px; font-size: 12px; }
.src-zoom-percent-button { min-width: 68px; padding: 0 10px; font-size: 12px; gap: 5px; font-variant-numeric: tabular-nums; }
.src-zoom-caret { font-size: 9px; line-height: 1; opacity: .9; transform: translateY(1px); }
.src-zoom-menu-wrap { position: relative; display: inline-flex; flex: 0 0 auto; }
.src-zoom-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  z-index: 40;
  width: 114px;
  max-height: 252px;
  overflow-y: auto;
  display: grid;
  gap: 4px;
  padding: 7px;
  border-radius: 16px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.34);
  box-shadow: 0 20px 46px rgba(15,23,42,.20);
  box-sizing: border-box;
}
.src-zoom-menu-item {
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 11px;
  background: transparent;
  color: var(--text, #1f2937);
  font-size: 12px;
  font-weight: 900;
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.src-zoom-menu-item:hover { background: color-mix(in srgb, var(--primary-color, #2563eb) 10%, transparent); }
.src-zoom-menu-item.active { background: var(--primary-color, #2563eb); color: #fff; }

.src-preview-scroll {
  --report-preview-scale: 1;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
  border-radius: 22px;
  background: rgba(148,163,184,.10);
  border: 1px solid rgba(148,163,184,.18);
  box-sizing: border-box;
}
.src-preview-center {
  width: 100%;
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}
.src-preview-scale {
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
  transform: scale(var(--report-preview-scale));
  transform-origin: top center;
  flex: 0 0 auto;
}
.university-transcript-template-page,
.student-report-card-page,
.src-a4-page {
  width: 210mm !important;
  min-width: 210mm !important;
  max-width: 210mm !important;
  min-height: 297mm !important;
  box-sizing: border-box !important;
}
.src-preview-shell:not(.expanded) .src-preview-scroll { overflow: hidden; }
.src-preview-shell.expanded .src-preview-scroll { overflow: auto; max-height: none; }
.src-preview-shell.expanded .src-preview-center {
  width: max(100%, calc(210mm * var(--report-preview-scale)));
  height: calc(297mm * var(--report-preview-scale));
  min-height: calc(297mm * var(--report-preview-scale));
  overflow: visible;
  margin: 0 auto;
}

.university-transcript-frame-line {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  border-radius: 3px;
}
.university-transcript-frame-outer { inset: 4.5mm; border: 1.5px solid; opacity: .65; }
.university-transcript-frame-inner { inset: 6.5mm; border: 1px solid #e5e7eb; }
.university-transcript-corner {
  position: absolute;
  z-index: 0;
  width: 17mm;
  height: 17mm;
  pointer-events: none;
  opacity: .85;
}
.university-transcript-corner-tl { left: 4.5mm; top: 4.5mm; border-left: 3px solid; border-top: 3px solid; border-top-left-radius: 3px; }
.university-transcript-corner-tr { right: 4.5mm; top: 4.5mm; border-right: 3px solid; border-top: 3px solid; border-top-right-radius: 3px; }
.university-transcript-corner-bl { left: 4.5mm; bottom: 4.5mm; border-left: 3px solid; border-bottom: 3px solid; border-bottom-left-radius: 3px; }
.university-transcript-corner-br { right: 4.5mm; bottom: 4.5mm; border-right: 3px solid; border-bottom: 3px solid; border-bottom-right-radius: 3px; }
.university-transcript-grade-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  border: 1px solid;
  border-radius: 2px;
  padding: 2px 6px;
  font-weight: 950;
  background: #fff;
}
.university-transcript-timeline-marker {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 3px solid;
  display: inline-block;
  position: relative;
}
.university-transcript-timeline-marker::before,
.university-transcript-timeline-marker::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 16px;
  height: 1px;
  background: #cbd5e1;
}
.university-transcript-timeline-marker::before { right: 100%; }
.university-transcript-timeline-marker::after { left: 100%; }

@media screen and (max-width: 380px) {
  .src-mobile-toolbar { gap: 6px; padding: 8px; }
  .src-mobile-toolbar strong { font-size: 12px; }
  .src-mobile-toolbar span { font-size: 10px; }
  .src-zoom-controls { gap: 3px; padding: 3px; }
  .src-zoom-icon-button { width: 29px; min-width: 29px; height: 29px; min-height: 29px; font-size: 16px; }
  .src-zoom-fit-button { min-width: 36px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; }
  .src-zoom-percent-button { min-width: 62px; height: 29px; min-height: 29px; padding: 0 8px; font-size: 10px; gap: 4px; }
  .src-zoom-menu { width: 106px; max-height: 210px; padding: 6px; }
  .src-zoom-menu-item { height: 30px; min-height: 30px; font-size: 11px; }
}

@media print {
  .src-preview-shell,
  .src-preview-scroll,
  .src-preview-center,
  .src-preview-scale {
    display: contents !important;
    transform: none !important;
    width: auto !important;
    height: auto !important;
    min-width: 0 !important;
    min-height: 0 !important;
    overflow: visible !important;
    padding: 0 !important;
    margin: 0 !important;
    border: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .src-mobile-toolbar,
  .report-no-print {
    display: none !important;
    visibility: hidden !important;
  }

  .student-report-card-page,
  .university-transcript-template-page,
  .src-a4-page {
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    min-height: 297mm !important;
    transform: none !important;
    margin: 0 auto !important;
    box-shadow: none !important;
    border-color: #111 !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  .university-transcript-template-page [data-report-color-block="true"] {
    print-color-adjust: exact !important;
    -webkit-print-color-adjust: exact !important;
  }

  table,
  tr,
  td,
  th {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
}
`,Y=[{...(0,a.BF)("classic_formal"),component:function({dataset:e,template:t,settings:r,compact:l=!1,showWatermark:u=!0,pageBreakAfter:g=!0,mobilePreview:b=!0}){let[x,f]=(0,i.useState)(!1),w=(0,i.useRef)(null),v=(0,i.useRef)(null),y=(0,i.useRef)(null),[j,S]=(0,i.useState)(1),[k,I]=(0,i.useState)(1),[N,C]=(0,i.useState)(!1),z=x?k:j,A=Math.round(100*z),T=(0,i.useCallback)(e=>{I(t=>{let r=x?t:j;return Math.min(2,Math.max(.25,Number(("in"===e?1.01*r:r/1.01).toFixed(4))))}),f(!0)},[x,j]),P=(0,i.useCallback)(()=>{null!=v.current&&(window.clearTimeout(v.current),v.current=null),null!=y.current&&(window.clearInterval(y.current),y.current=null)},[]),W=(0,i.useCallback)(e=>{P(),T(e),v.current=window.setTimeout(()=>{y.current=window.setInterval(()=>{T(e)},55)},260)},[T,P]);(0,i.useEffect)(()=>{if(!b)return;let e=()=>{let e=w.current;if(!e)return;let t=e.getBoundingClientRect();S(Number(Math.min(1,Math.max(120,t.width-8)/793.7008,Math.max(180,window.innerHeight-t.top-8)/1122.5197).toFixed(4)))};e();let t=new ResizeObserver(e);return w.current&&t.observe(w.current),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{t.disconnect(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[b]),(0,i.useEffect)(()=>()=>{P()},[P]);let R=(0,a.tH)({...a.gv,...r||{},templateCode:"classic_formal",layoutKey:"classic_formal",templateName:"Classic Formal",density:r?.density||(l?"compact":"comfortable")},t||null,null),B=(0,n.J7)({dataset:e,template:t||null,settings:R}),L=e?.report,M=e?.header,$=e?.student,H=(0,i.useMemo)(()=>d(L?.subjectResults,R),[L?.subjectResults,R]);if(!e||!L||!M||!B)return(0,o.jsxs)("div",{className:"src-empty-card classic-template-empty",children:[(0,o.jsx)("style",{children:h}),(0,n.p6)(e)]});let{branding:D,studentInfo:F,currentAcademicPeriod:E,nextAcademicPeriod:G,signatures:O}=B,_=D.primaryColor||"var(--primary-color)",Y=D.fontFamily||"Arial, sans-serif",V=D.reportCardBackgroundImage||"",U=D.reportCardWatermark||D.logo||"",Z=O.officialSignatureImage||D.reportCardSignatureImage||"",K=F.studentPhoto||"",X={...(0,n.j1)({settings:R,primaryColor:_,fontFamily:Y,compact:l,pageBreakAfter:g}),width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:l?"8mm":"9mm",background:"#fff",color:"#111",border:"1px solid #d8d8d8",boxShadow:"0 18px 50px rgba(15,23,42,.14)"},q=(0,n.h5)({settings:R,primaryColor:_,compact:l}),J={fontSize:l?10.6:11.3,lineHeight:1.25,padding:l?"5px 3px":"6px 4px",whiteSpace:"normal",overflowWrap:"break-word",verticalAlign:"middle"},Q={fontSize:l?11.8:12.6,lineHeight:1.3,padding:l?"5px 4px":"6px 5px",whiteSpace:"normal",overflowWrap:"break-word",verticalAlign:"middle"},ee={...q.label,fontSize:l?10:10.7,lineHeight:1.25,color:"#404040",opacity:1},et={...q.value,fontSize:l?11.8:12.7,lineHeight:1.25,fontWeight:800,color:"#111"},er={border:"1px solid #bdbdbd",borderRadius:7,padding:l?6:7,minHeight:l?42:46,background:"rgba(255,255,255,0.96)",boxSizing:"border-box"},ei={minHeight:16,marginBottom:3,fontSize:l?11:11.8,lineHeight:1.25,fontWeight:850,color:"#111"},ea=(0,n.ou)(M?.academicStructure?.name,M?.academicStructureName,M?.academicYear?.name,M?.academicYearName,L?.academicStructureName,"string"==typeof M?.academicYear?M.academicYear:""),eo=[{key:"studentName",label:"Student Name",value:p(L.studentName),span:2,show:!0},{key:"gender",label:"Gender",value:L.gender||$?.gender||"-",show:!0},{key:"admissionNumber",label:"Admission No.",value:L.admissionNumber||"-",show:!0},{key:"academicStructure",label:"Academic Structure",value:ea||"-",show:!0},{key:"academicPeriod",label:"Academic Period",value:M.academicPeriod?.name||"-",show:!0},{key:"class",label:"Class",value:L.className,show:!0},{key:"attendance",label:"Attendance",value:`${L.attendance?.presentDays||0}/${L.attendance?.totalDays||0}`,show:R.showAttendance}].filter(e=>e.show),en=R.showNumberOnRoll?[{key:"numberOnRoll",label:R.numberOnRollLabel||"Number On Roll",value:F.numberOnRoll||L.numberOnRoll||L.classSize||e?.numberOnRoll||e?.classSize||"-"}]:[],es=[{key:"total",label:"Total",value:(0,n.ZV)(L.total,1),show:R.showTotal},{key:"average",label:"Average",value:`${(0,n.ZV)(L.average,1)}%`,show:R.showAverage},{key:"classPosition",label:R.classPositionLabel||"Class Position",value:(0,n.IE)(L.overallPosition),show:R.showClassPosition},{key:"gpa",label:"GPA",value:null!=L.overallGPA?(0,n.ZV)(L.overallGPA,2):"-",show:R.showGPA}].filter(e=>e.show),el=(0,n.qr)(E,R),ed=(0,n.R8)(G,R),ec=R.showGeneratedDate?(0,n.kn)(e?.generatedAt):"",em=1+(R.showAssessmentBreakdown?H.length:0)+1+ +!!R.showGrade+ +!!R.showSubjectPosition+ +!!R.showSubjectRemarks,ep=(0,o.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page classic-formal-template-page",style:X,children:[V&&(0,o.jsx)("img",{src:V,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),u&&R.showWatermark&&U&&(0,o.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.038,pointerEvents:"none",zIndex:0},children:(0,o.jsx)("img",{src:U,alt:"Watermark",style:{width:"56%",maxHeight:"56%",objectFit:"contain"}})}),(0,o.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,o.jsx)(s,{header:M,dataset:e,settings:R,title:"Terminal / Periodic Academic Report",compact:l,primaryColor:_,fontFamily:Y,studentPhoto:K,showStudentPhoto:!!R.showStudentPhoto}),(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:5,marginTop:8},children:[eo.map(e=>(0,o.jsxs)("div",{style:{...er,gridColumn:e.span?`span ${e.span}`:void 0},children:[(0,o.jsx)("div",{style:ee,children:e.label}),(0,o.jsx)("div",{style:{...et,overflowWrap:"break-word",whiteSpace:"normal"},children:e.value})]},e.key)),en.map(e=>(0,o.jsxs)("div",{style:er,children:[(0,o.jsx)("div",{style:ee,children:e.label}),(0,o.jsx)("div",{style:{...et,overflowWrap:"break-word",whiteSpace:"normal"},children:e.value})]},e.key))]}),(0,o.jsx)("div",{style:{marginTop:9},children:(0,o.jsxs)("table",{style:{...q.table,width:"100%"},children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{"data-report-color-block":"true",style:{...q.th,...J,textAlign:"left",minWidth:l?122:132,borderColor:"#111"},children:"Subject"}),R.showAssessmentBreakdown&&H.map(e=>(0,o.jsxs)("th",{"data-report-color-block":"true",style:{...q.th,...J,borderColor:"#111"},children:[c(e,R),(0,o.jsxs)("div",{style:{fontSize:l?9.5:10,marginTop:2,opacity:.95},children:["W:",(0,n.ZV)(e.weight,0)]})]},e.assessmentStructureItemId)),(0,o.jsx)("th",{"data-report-color-block":"true",style:{...q.th,...J,borderColor:"#111"},children:"%"}),R.showGrade&&(0,o.jsx)("th",{"data-report-color-block":"true",style:{...q.th,...J,borderColor:"#111"},children:"Grade"}),R.showSubjectPosition&&(0,o.jsx)("th",{"data-report-color-block":"true",style:{...q.th,...J,borderColor:"#111"},children:R.subjectPositionLabel||"Pos."}),R.showSubjectRemarks&&(0,o.jsx)("th",{"data-report-color-block":"true",style:{...q.th,...J,minWidth:l?85:94,borderColor:"#111"},children:"Remark"})]})}),(0,o.jsxs)("tbody",{children:[L.subjectResults.map(e=>(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{style:{...q.td,...Q,fontSize:l?13.2:14.3,lineHeight:1.28,minWidth:l?122:132,whiteSpace:"normal",overflowWrap:"break-word",fontWeight:850,borderColor:"#9a9a9a"},children:[e.subjectName,R.showTeacherNames&&e.teacherName&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:l?9.8:10.5,lineHeight:1.25,color:"#424242",fontWeight:650},children:p(e.teacherName)})]}),R.showAssessmentBreakdown&&H.map(t=>{let r=e.breakdown.find(e=>e.assessmentStructureItemId===t.assessmentStructureItemId);return(0,o.jsx)("td",{style:{...q.td,...Q,textAlign:"center",borderColor:"#9a9a9a"},children:m(r,R,n.ZV)},t.assessmentStructureItemId)}),(0,o.jsx)("td",{style:{...q.td,...Q,textAlign:"center",fontWeight:850,borderColor:"#9a9a9a"},children:(0,n.l9)(e.percentage,1,"-")}),R.showGrade&&(0,o.jsx)("td",{style:{...q.td,...Q,textAlign:"center",fontWeight:950,borderColor:"#9a9a9a"},children:e.grade}),R.showSubjectPosition&&(0,o.jsx)("td",{style:{...q.td,...Q,textAlign:"center",borderColor:"#9a9a9a"},children:(0,n.IE)(e.subjectPosition)}),R.showSubjectRemarks&&(0,o.jsx)("td",{style:{...q.td,...Q,borderColor:"#9a9a9a"},children:e.remark})]},e.classSubjectId)),!L.subjectResults.length&&(0,o.jsx)("tr",{children:(0,o.jsx)("td",{style:{...q.td,...Q,textAlign:"center",padding:16},colSpan:em,children:"No subject results available for this selected period."})})]})]})}),es.length>0&&(0,o.jsx)("div",{style:{marginTop:9,display:"grid",gridTemplateColumns:`repeat(${Math.min(es.length,4)}, minmax(0, 1fr))`,gap:6},children:es.map(e=>(0,o.jsxs)("div",{style:{border:"1px solid #111",borderRadius:8,padding:l?6:7,textAlign:"center",background:"rgba(255,255,255,0.96)"},children:[(0,o.jsx)("div",{style:ee,children:e.label}),(0,o.jsx)("div",{style:{...et,fontSize:l?16:17,fontWeight:950},children:e.value})]},e.key))}),(0,o.jsxs)("div",{style:{marginTop:9,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[(0,o.jsxs)("div",{style:{border:"1px solid #111",borderRadius:8,minHeight:50,padding:7},children:[(0,o.jsxs)("div",{style:ee,children:[R.classTeacherLabel,"'s Remark"]}),(0,o.jsx)("div",{style:{marginTop:5,fontSize:l?11.7:12.5,lineHeight:1.35,overflowWrap:"break-word"},children:L.classTeacherRemark||""})]}),(0,o.jsxs)("div",{style:{border:"1px solid #111",borderRadius:8,minHeight:50,padding:7},children:[(0,o.jsxs)("div",{style:ee,children:[R.headTeacherLabel,"'s Remark"]}),(0,o.jsx)("div",{style:{marginTop:5,fontSize:l?11.7:12.5,lineHeight:1.35,overflowWrap:"break-word"},children:L.headTeacherRemark||""})]})]}),(el||ed||ec)&&(0,o.jsxs)("div",{style:{marginTop:8,display:"grid",gridTemplateColumns:[el,ed,ec].filter(Boolean).length>=3?"repeat(3, minmax(0, 1fr))":2===[el,ed,ec].filter(Boolean).length?"repeat(2, minmax(0, 1fr))":"1fr",gap:7},children:[el&&(0,o.jsxs)("div",{style:{border:"1.5px solid #111",borderRadius:8,padding:"6px 9px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,background:"rgba(255,255,255,0.96)",borderLeft:`6px solid ${_}`},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:ee,children:"Current Academic Period"}),(0,o.jsx)("div",{style:{...et,fontSize:l?11.8:12.6},children:E?.name||M.academicPeriod?.name||"Current Period"})]}),(0,o.jsxs)("div",{style:{textAlign:"right"},children:[(0,o.jsx)("div",{style:ee,children:"Ends"}),(0,o.jsx)("div",{style:{...et,fontSize:l?12:12.8},children:E?.formattedEndDate||el.replace(/^.*?:\s*/i,"")})]})]}),ed&&(0,o.jsxs)("div",{style:{border:"1.5px solid #111",borderRadius:8,padding:"6px 9px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,background:"rgba(255,255,255,0.96)",borderLeft:`6px solid ${_}`},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:ee,children:"Next Academic Period"}),(0,o.jsx)("div",{style:{...et,fontSize:l?11.8:12.6},children:G?.name||"Next Period"})]}),(0,o.jsxs)("div",{style:{textAlign:"right"},children:[(0,o.jsx)("div",{style:ee,children:"Begins"}),(0,o.jsx)("div",{style:{...et,fontSize:l?12:12.8},children:G?.formattedStartDate||ed.replace(/^.*?:\s*/i,"")})]})]}),ec&&(0,o.jsxs)("div",{style:{border:"1.5px solid #111",borderRadius:8,padding:"6px 9px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,background:"rgba(255,255,255,0.96)",borderLeft:`6px solid ${_}`},children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:ee,children:R.generatedDateLabel||"Generated"}),(0,o.jsx)("div",{style:{...et,fontSize:l?11.8:12.6},children:"Report Card"})]}),(0,o.jsxs)("div",{style:{textAlign:"right"},children:[(0,o.jsx)("div",{style:ee,children:"Date"}),(0,o.jsx)("div",{style:{...et,fontSize:l?12:12.8},children:ec})]})]})]}),(0,o.jsxs)("div",{style:{marginTop:16,display:"grid",gridTemplateColumns:R.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)("div",{style:ei,children:p(O.classTeacherName)}),(0,o.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:l?10.7:11.4,fontWeight:850},children:R.classTeacherLabel})]}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[Z&&(0,o.jsx)("img",{src:Z,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,o.jsx)("div",{style:ei,children:p((0,n.ou)(O.headTeacherName,O.principalName))}),(0,o.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:l?10.7:11.4,fontWeight:850},children:R.headTeacherLabel})]}),R.showParentSignature&&(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)("div",{style:ei,children:(0,n.ou)(O.parentName,O.guardianName)}),(0,o.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:l?10.7:11.4,fontWeight:850},children:R.parentLabel})]})]}),(0,o.jsxs)("div",{style:{marginTop:9,borderTop:`1.5px solid ${_}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:l?9.2:9.8,lineHeight:1.25,color:"#444"},children:[(0,o.jsxs)("span",{children:["Official academic report generated for ",D.schoolName]}),(0,o.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return b?(0,o.jsxs)("div",{className:`src-preview-shell ${x?"expanded":""}`,children:[(0,o.jsx)("style",{children:h}),(0,o.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:p(L.studentName)}),(0,o.jsxs)("span",{children:[L.className," \xb7"," ",M.academicPeriod?.name||"Academic Period"]})]}),(0,o.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>{T("out")},onPointerDown:()=>W("out"),onPointerUp:P,onPointerCancel:P,onPointerLeave:P,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,o.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{P(),f(!1),I(1),C(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,o.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,o.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>C(e=>!e),"aria-label":"Choose zoom percentage","aria-expanded":N,title:"Choose zoom percentage",children:[(0,o.jsxs)("span",{children:[A,"%"]}),(0,o.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),N&&(0,o.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(e=>(0,o.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{P(),f(!0),I(Number((e/100).toFixed(4))),C(!1)},className:`src-zoom-menu-item ${Math.round(100*z)===e?"active":""}`,children:[e,"%"]},e))})]}),(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>{T("in")},onPointerDown:()=>W("in"),onPointerUp:P,onPointerCancel:P,onPointerLeave:P,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,o.jsx)("div",{ref:w,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":z},children:(0,o.jsx)("div",{className:"src-preview-center",children:(0,o.jsx)("div",{className:"src-preview-scale",children:ep})})})]}):ep},fileName:"ClassicFormalTemplate.tsx",aliases:["classic","classic_formal","classic_ghana","ghana","formal","default"]},{...(0,a.BF)("modern_clean"),component:function({dataset:e,template:t,settings:r,compact:s=!1,showWatermark:l=!0,pageBreakAfter:p=!0,mobilePreview:h=!0}){let[u,g]=(0,i.useState)(!1),b=(0,i.useRef)(null),x=(0,i.useRef)(null),f=(0,i.useRef)(null),[w,v]=(0,i.useState)(1),[k,I]=(0,i.useState)(1),[N,C]=(0,i.useState)(!1),z=u?k:w,A=Math.round(100*z),T=(0,i.useCallback)(e=>{I(t=>{let r=u?t:w;return Math.min(2,Math.max(.25,Number(("in"===e?1.01*r:r/1.01).toFixed(4))))}),g(!0)},[u,w]),P=(0,i.useCallback)(()=>{null!=x.current&&(window.clearTimeout(x.current),x.current=null),null!=f.current&&(window.clearInterval(f.current),f.current=null)},[]),W=(0,i.useCallback)(e=>{P(),T(e),x.current=window.setTimeout(()=>{f.current=window.setInterval(()=>{T(e)},55)},260)},[T,P]);(0,i.useEffect)(()=>{if(!h)return;let e=()=>{let e=b.current;if(!e)return;let t=e.getBoundingClientRect();v(Number(Math.min(1,Math.max(120,t.width-8)/793.7008,Math.max(180,window.innerHeight-t.top-8)/1122.5197).toFixed(4)))};e();let t=new ResizeObserver(e);return b.current&&t.observe(b.current),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{t.disconnect(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[h]),(0,i.useEffect)(()=>P,[P]);let R=(0,a.tH)({...a.gv,...r||{},templateCode:"modern_clean",layoutKey:"modern_clean",templateName:"Modern Clean",density:r?.density||(s?"compact":"comfortable")},t||null,null),B=(0,n.J7)({dataset:e,template:t||null,settings:R}),L=e?.report,M=e?.header,$=e?.student,H=(0,i.useMemo)(()=>d(L?.subjectResults,R),[L?.subjectResults,R]);if(!e||!L||!M||!B)return(0,o.jsxs)("div",{className:"src-empty-card modern-template-empty",children:[(0,o.jsx)("style",{children:S}),(0,n.p6)(e)]});let{branding:D,studentInfo:F,currentAcademicPeriod:E,nextAcademicPeriod:G,signatures:O}=B,_=D.primaryColor||"var(--primary-color)",Y=D.fontFamily||"Arial, sans-serif",V=D.reportCardBackgroundImage||"",U=D.reportCardWatermark||D.logo||"",Z=O.officialSignatureImage||D.reportCardSignatureImage||"",K=F.studentPhoto||"",X=(0,n.j1)({settings:R,primaryColor:_,fontFamily:Y,compact:s,pageBreakAfter:p}),q=(0,n.h5)({settings:R,primaryColor:_,compact:s}),J=s?"8mm":"9mm",Q={...X,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:J,background:"#fff",color:"#111",border:"1px solid #cbd5e1",borderRadius:22,boxShadow:"0 24px 70px rgba(15,23,42,.14)",overflow:"hidden"},ee={table:{...q.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:16,border:"1px solid #cfd6e3",fontSize:s?11.3:12},th:{...q.th,border:"0",borderBottom:"1px solid #111827",background:"#111827",color:"#fff",padding:s?"5px 5px":"6px 6px",fontWeight:950,fontSize:s?10.5:11.2,lineHeight:1.22,whiteSpace:"normal",overflowWrap:"break-word"},td:{...q.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:s?"4px 5px":"5px 6px",color:"#111827",fontSize:s?11.5:12.4,lineHeight:1.26,whiteSpace:"normal",overflowWrap:"break-word"},label:q.label,value:q.value},et={fontSize:s?9.5:10.2,fontWeight:950,letterSpacing:.25,textTransform:"uppercase",color:"#64748b",lineHeight:1.15},er={fontSize:s?11.4:12.4,fontWeight:950,color:"#0f172a",lineHeight:1.15,overflowWrap:"anywhere"},ei=[{key:"total",label:"Total",value:(0,n.ZV)(L.total,1),show:R.showTotal},{key:"average",label:"Average",value:`${(0,n.ZV)(L.average,1)}%`,show:R.showAverage},{key:"classPosition",label:R.classPositionLabel||"Class Position",value:(0,n.IE)(L.overallPosition),show:R.showClassPosition},{key:"gpa",label:"GPA",value:null!=L.overallGPA?(0,n.ZV)(L.overallGPA,2):"-",show:R.showGPA}].filter(e=>e.show),ea=(0,n.qr)(E,R),eo=(0,n.R8)(G,R),en=R.showGeneratedDate?(0,n.kn)(e?.generatedAt):"",es=1+(R.showAssessmentBreakdown?H.length:0)+1+ +!!R.showGrade+ +!!R.showSubjectPosition+ +!!R.showSubjectRemarks,el=(0,o.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page modern-clean-template-page",style:Q,children:[V&&(0,o.jsx)("img",{src:V,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),l&&R.showWatermark&&U&&(0,o.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,o.jsx)("img",{src:U,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,o.jsx)("div",{"aria-hidden":"true",className:"modern-frame-line modern-frame-outer",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"modern-frame-line modern-frame-inner"}),(0,o.jsx)("div",{"aria-hidden":"true",className:"modern-corner modern-corner-tl",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"modern-corner modern-corner-tr",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"modern-corner modern-corner-bl",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"modern-corner modern-corner-br",style:{borderColor:_}}),(0,o.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,o.jsx)(y,{header:M,dataset:e,settings:R,title:"Terminal / Periodic Academic Report",compact:s,primaryColor:_,fontFamily:Y}),(0,o.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:R.showStudentPhoto?"minmax(0, 1fr) 86px":"1fr",gap:8,alignItems:"stretch"},children:[(0,o.jsxs)("div",{style:{border:"1px solid #d9dee8",borderRadius:16,background:"linear-gradient(180deg, #ffffff, #f8fafc)",overflow:"hidden"},children:[(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, .8fr) minmax(0, 1.2fr)",gap:0,borderBottom:"1px solid #d9dee8"},children:[(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0},children:[(0,o.jsx)("div",{style:et,children:"Student Name"}),(0,o.jsx)("div",{style:{...er,marginTop:2,fontSize:s?12.6:14.2,overflowWrap:"anywhere"},children:j(L.studentName)})]}),(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #d9dee8"},children:[(0,o.jsx)("div",{style:et,children:"Gender"}),(0,o.jsx)("div",{style:{...er,marginTop:2},children:L.gender||$?.gender||"-"})]}),(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #d9dee8"},children:[(0,o.jsx)("div",{style:et,children:"Admission No."}),(0,o.jsx)("div",{style:{...er,marginTop:2},children:L.admissionNumber||"-"})]})]}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"},children:[{key:"structure",label:"Academic Structure",value:(0,n.ou)(M?.academicStructure?.name,M?.academicStructureName,"-")},{key:"period",label:"Academic Period",value:(0,n.ou)(M.academicPeriod?.name,M?.academicPeriodName,"-")},{key:"class",label:"Class",value:L.className||"-"},{key:"attendance",label:"Attendance",value:`${L.attendance?.presentDays??0}/${L.attendance?.totalDays??0}`}].filter(e=>"attendance"!==e.key||R.showAttendance).map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:0===t?void 0:"1px solid #d9dee8"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{...er,marginTop:2,overflowWrap:"anywhere"},children:e.value})]},e.key))}),R.showNumberOnRoll&&(0,o.jsxs)("div",{style:{padding:s?"5px 7px":"6px 9px",borderTop:"1px solid #d9dee8"},children:[(0,o.jsxs)("span",{style:et,children:[R.numberOnRollLabel||"Number On Roll",": "]}),(0,o.jsx)("span",{style:er,children:F.numberOnRoll||L.numberOnRoll||L.classSize||e?.numberOnRoll||e?.classSize||"-"})]})]}),R.showStudentPhoto&&(0,o.jsx)("div",{style:{border:"1px solid #d9dee8",borderRadius:16,background:"#fff",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:96},children:K?(0,o.jsx)("img",{src:K,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,o.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]}),(0,o.jsx)("div",{style:{marginTop:8},children:(0,o.jsxs)("table",{style:ee.table,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,textAlign:"left",minWidth:98},children:"Subject"}),R.showAssessmentBreakdown&&H.map(e=>(0,o.jsxs)("th",{"data-report-color-block":"true",style:ee.th,children:[c(e,R),(R.showAssessmentWeights||R.showAssessmentMaximumScores)&&(0,o.jsxs)("div",{style:{fontSize:7.5,marginTop:2,opacity:.88},children:[R.showAssessmentWeights?`W:${(0,n.ZV)(e.effectiveWeight??e.weight,0)}`:"",R.showAssessmentWeights&&R.showAssessmentMaximumScores?" \xb7 ":"",R.showAssessmentMaximumScores?`M:${(0,n.ZV)(e.maxScore,0)}`:""]})]},e.assessmentStructureItemId)),(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"%"}),R.showGrade&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"Grade"}),R.showSubjectPosition&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:R.subjectPositionLabel||"Pos."}),R.showSubjectRemarks&&(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,minWidth:86},children:"Remark"})]})}),(0,o.jsxs)("tbody",{children:[L.subjectResults.map((e,t)=>(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{style:{...ee.td,fontWeight:950,fontSize:s?12.8:13.7,lineHeight:1.25,overflowWrap:"break-word",background:t%2==0?"#f8fafc":"#ffffff"},children:[e.subjectName,R.showTeacherNames&&e.teacherName&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:10.2,opacity:.72,fontWeight:700},children:j(e.teacherName)})]}),R.showAssessmentBreakdown&&H.map(t=>{let r=e.breakdown.find(e=>e.assessmentStructureItemId===t.assessmentStructureItemId);return(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:m(r,R,n.ZV)},t.assessmentStructureItemId)}),(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",fontWeight:950},children:(0,n.l9)(e.percentage,1,"-")}),R.showGrade&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,o.jsx)("span",{className:"modern-grade-pill",style:{borderColor:_,color:_},children:e.grade})}),R.showSubjectPosition&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,n.IE)(e.subjectPosition)}),R.showSubjectRemarks&&(0,o.jsx)("td",{style:ee.td,children:e.remark})]},e.classSubjectId)),!L.subjectResults.length&&(0,o.jsx)("tr",{children:(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",padding:16},colSpan:es,children:"No subject results available for this selected period."})})]})]})}),ei.length>0&&(0,o.jsxs)("section",{style:{marginTop:8,borderRadius:18,border:"1px solid #d9dee8",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${ei.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,o.jsx)("div",{"data-report-color-block":"true",style:{background:_}}),ei.map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===t?"0":"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #f8fafc)"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?14:15.8,fontWeight:950,color:"#0f172a"},children:e.value})]},e.key))]}),(0,o.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${R.classTeacherLabel}'s Remark`,value:L.classTeacherRemark||""},{label:`${R.headTeacherLabel}'s Remark`,value:L.headTeacherRemark||""}].map(e=>(0,o.jsxs)("div",{style:{border:"1px solid #d9dee8",borderRadius:18,minHeight:52,padding:s?8:9,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:_}}),(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:s?9.6:10.5,lineHeight:1.32,color:"#111827"},children:e.value})]},e.label))}),(ea||eo||en)&&(0,o.jsxs)("section",{style:{marginTop:8,border:"1px solid #d9dee8",borderRadius:18,padding:s?7:8,background:"#f8fafc",display:"grid",gridTemplateColumns:[ea,eo,en].filter(Boolean).length>=3?"1fr 28px 1fr 28px 1fr":ea&&eo?"1fr 28px 1fr":"1fr",gap:6,alignItems:"center"},children:[ea&&(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:et,children:"Current Academic Period"}),(0,o.jsx)("div",{style:er,children:E?.name||M.academicPeriod?.name||"Current Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:["Ends:"," ",E?.formattedEndDate||ea.replace(/^.*?:\s*/i,"")]})]}),ea&&eo&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"modern-timeline-dot",style:{borderColor:_}})}),eo&&(0,o.jsxs)("div",{style:{textAlign:ea?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:"Next Academic Period"}),(0,o.jsx)("div",{style:er,children:G?.name||"Next Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:["Begins:"," ",G?.formattedStartDate||eo.replace(/^.*?:\s*/i,"")]})]}),en&&ea&&eo&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"modern-timeline-dot",style:{borderColor:_}})}),en&&(0,o.jsxs)("div",{style:{textAlign:ea||eo?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:R.generatedDateLabel||"Generated"}),(0,o.jsx)("div",{style:er,children:"Report Card"}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:en})]})]}),(0,o.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:R.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:R.classTeacherLabel,name:j(O.classTeacherName||""),image:"",show:!0},{label:R.headTeacherLabel,name:j((0,n.ou)(O.headTeacherName,O.principalName)),image:Z,show:!0},{label:R.parentLabel,name:j((0,n.ou)(O.parentName,O.guardianName)),image:"",show:R.showParentSignature}].filter(e=>e.show).map(e=>(0,o.jsxs)("div",{style:{textAlign:"center"},children:[e.image&&(0,o.jsx)("img",{src:e.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,o.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:s?10.5:11.5,fontWeight:950,color:"#111827"},children:e.name}),(0,o.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:e.label})]},e.label))}),(0,o.jsxs)("footer",{style:{marginTop:8,borderTop:`2px solid ${_}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:7.8,color:"#475569",fontWeight:700},children:[(0,o.jsxs)("span",{children:["Official academic report generated for ",D.schoolName]}),(0,o.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return h?(0,o.jsxs)("div",{className:`src-preview-shell ${u?"expanded":""}`,children:[(0,o.jsx)("style",{children:S}),(0,o.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:j(L.studentName)}),(0,o.jsxs)("span",{children:[L.className," \xb7"," ",M.academicPeriod?.name||"Academic Period"]})]}),(0,o.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>T("out"),onPointerDown:()=>W("out"),onPointerUp:P,onPointerCancel:P,onPointerLeave:P,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,o.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{P(),g(!1),I(1),C(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,o.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,o.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>C(e=>!e),"aria-label":"Choose zoom percentage","aria-expanded":N,title:"Choose zoom percentage",children:[(0,o.jsxs)("span",{children:[A,"%"]}),(0,o.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),N&&(0,o.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(e=>(0,o.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{P(),g(!0),I(Number((e/100).toFixed(4))),C(!1)},className:`src-zoom-menu-item ${Math.round(100*z)===e?"active":""}`,children:[e,"%"]},e))})]}),(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>T("in"),onPointerDown:()=>W("in"),onPointerUp:P,onPointerCancel:P,onPointerLeave:P,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,o.jsx)("div",{ref:b,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":z},children:(0,o.jsx)("div",{className:"src-preview-center",children:(0,o.jsx)("div",{className:"src-preview-scale",children:el})})})]}):el},fileName:"ModernCleanTemplate.tsx",aliases:["modern","clean","modern_clean","premium_clean"]},{...(0,a.BF)("compact_print"),component:function({dataset:e,template:t,settings:r,compact:s=!0,showWatermark:l=!0,pageBreakAfter:p=!0,mobilePreview:h=!0}){let[u,g]=(0,i.useState)(!1),b=(0,i.useRef)(null),y=(0,i.useRef)(null),j=(0,i.useRef)(null),[S,k]=(0,i.useState)(1),[I,N]=(0,i.useState)(1),[C,z]=(0,i.useState)(!1),A=u?I:S,T=Math.round(100*A),P=(0,i.useCallback)(e=>{N(t=>{let r=u?t:S;return Math.min(2,Math.max(.25,Number(("in"===e?1.01*r:r/1.01).toFixed(4))))}),g(!0)},[u,S]),W=(0,i.useCallback)(()=>{null!=y.current&&(window.clearTimeout(y.current),y.current=null),null!=j.current&&(window.clearInterval(j.current),j.current=null)},[]),R=(0,i.useCallback)(e=>{W(),P(e),y.current=window.setTimeout(()=>{j.current=window.setInterval(()=>{P(e)},55)},260)},[P,W]);(0,i.useEffect)(()=>{if(!h)return;let e=()=>{let e=b.current;if(!e)return;let t=e.getBoundingClientRect();k(Number(Math.min(1,Math.max(120,t.width-8)/793.7008,Math.max(180,window.innerHeight-t.top-8)/1122.5197).toFixed(4)))};e();let t=new ResizeObserver(e);return b.current&&t.observe(b.current),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{t.disconnect(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[h]),(0,i.useEffect)(()=>W,[W]);let B=(0,a.tH)({...a.gv,...r||{},templateCode:"compact_print",layoutKey:"compact_print",templateName:"Compact Print",density:"compact"},t||null,null),L=(0,n.J7)({dataset:e,template:t||null,settings:B}),M=e?.report,$=e?.header,H=e?.student,D=(0,i.useMemo)(()=>d(M?.subjectResults,B),[M?.subjectResults,B]);if(!e||!M||!$||!L)return(0,o.jsxs)("div",{className:"src-empty-card compact-template-empty",children:[(0,o.jsx)("style",{children:v}),(0,n.p6)(e)]});let{branding:F,studentInfo:E,currentAcademicPeriod:G,nextAcademicPeriod:O,signatures:_}=L,Y=F.primaryColor||"var(--primary-color)",V=(0,n.B_)(Y),U=F.fontFamily||"Arial, sans-serif",Z=F.reportCardBackgroundImage||"",K=F.reportCardWatermark||F.logo||"",X=_.officialSignatureImage||F.reportCardSignatureImage||"",q=E.studentPhoto||"",J={fontSize:9.7,lineHeight:1.2,textTransform:"uppercase",letterSpacing:.35,fontWeight:900,color:"#4b5563"},Q={marginTop:1,fontSize:12,lineHeight:1.24,fontWeight:900,color:"#111827"},ee={border:"1px solid #c8ccd3",padding:"5px 6px",minHeight:39,background:"rgba(255,255,255,.97)",boxSizing:"border-box"},et={border:"1px solid #111827",padding:"5px 4px",fontSize:10.5,lineHeight:1.25,whiteSpace:"normal",background:Y,color:V,textAlign:"center",fontWeight:950},er={border:"1px solid #7d8590",padding:"5px 4px",fontSize:11.6,overflowWrap:"break-word",whiteSpace:"normal",verticalAlign:"middle",lineHeight:1.25},ei=(0,n.ou)($?.academicStructure?.name,$?.academicStructureName,$?.academicYear?.name,$?.academicYearName,M?.academicStructureName,"string"==typeof $?.academicYear?$.academicYear:""),ea=[{key:"studentName",label:"Student Name",value:f(M.studentName),span:2,show:!0},{key:"gender",label:"Gender",value:M.gender||H?.gender||"-",show:!0},{key:"admissionNumber",label:"Admission No.",value:M.admissionNumber||"-",show:!0},{key:"academicStructure",label:"Academic Structure",value:ei||"-",show:!0},{key:"academicPeriod",label:"Academic Period",value:$.academicPeriod?.name||"-",show:!0},{key:"class",label:"Class",value:M.className||"-",show:!0},{key:"attendance",label:"Attendance",value:`${M.attendance?.presentDays||0}/${M.attendance?.totalDays||0}`,show:B.showAttendance}].filter(e=>e.show),eo=B.showNumberOnRoll?[{key:"numberOnRoll",label:B.numberOnRollLabel||"Number On Roll",value:E.numberOnRoll||M.numberOnRoll||M.classSize||e?.numberOnRoll||"-",show:!0}]:[],en=[{key:"total",label:"Total",value:(0,n.ZV)(M.total,1),show:B.showTotal},{key:"average",label:"Average",value:`${(0,n.ZV)(M.average,1)}%`,show:B.showAverage},{key:"classPosition",label:B.classPositionLabel||"Class Position",value:(0,n.IE)(M.overallPosition),show:B.showClassPosition},{key:"gpa",label:"GPA",value:null!=M.overallGPA?(0,n.ZV)(M.overallGPA,2):"-",show:B.showGPA}].filter(e=>e.show),es=(0,n.qr)(G,B),el=(0,n.R8)(O,B),ed=B.showGeneratedDate?(0,n.kn)(e?.generatedAt):"",ec=1+(B.showAssessmentBreakdown?D.length:0)+1+ +!!B.showGrade+ +!!B.showSubjectPosition+ +!!B.showSubjectRemarks,em=(0,o.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page compact-print-template-page",style:{width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:"6.8mm",background:"#fff",color:"#111827",border:"1px solid #d8d8d8",boxShadow:"0 18px 50px rgba(15,23,42,.14)",boxSizing:"border-box",fontFamily:U,position:"relative",overflow:"hidden",pageBreakAfter:!1===p?"auto":"always"},children:[Z&&(0,o.jsx)("img",{src:Z,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.018,zIndex:0}}),l&&B.showWatermark&&K&&(0,o.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.03,pointerEvents:"none",zIndex:0},children:(0,o.jsx)("img",{src:K,alt:"Watermark",style:{width:"50%",maxHeight:"50%",objectFit:"contain"}})}),(0,o.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,o.jsx)(x,{header:$,dataset:e,settings:B,title:"Compact Academic Report",primaryColor:Y,fontFamily:U,compact:!0,studentPhoto:q,showStudentPhoto:!!B.showStudentPhoto}),(0,o.jsxs)("section",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:4,marginTop:6},children:[ea.map(e=>(0,o.jsxs)("div",{style:{...ee,gridColumn:e.span?`span ${e.span}`:void 0},children:[(0,o.jsx)("div",{style:J,children:e.label}),(0,o.jsx)("div",{style:{...Q,whiteSpace:"normal",overflowWrap:"break-word"},children:e.value})]},e.key)),eo.map(e=>(0,o.jsxs)("div",{style:ee,children:[(0,o.jsx)("div",{style:J,children:e.label}),(0,o.jsx)("div",{style:{...Q,whiteSpace:"normal",overflowWrap:"break-word"},children:e.value})]},e.key))]}),en.length>0&&(0,o.jsx)("section",{style:{marginTop:5,display:"grid",gridTemplateColumns:`repeat(${Math.min(en.length,4)}, minmax(0, 1fr))`,gap:4},children:en.map(e=>(0,o.jsxs)("div",{style:{border:"1.2px solid #111827",borderLeft:`5px solid ${Y}`,padding:"4px 5px",background:"rgba(255,255,255,.98)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:6},children:[(0,o.jsx)("span",{style:J,children:e.label}),(0,o.jsx)("strong",{style:{color:"#111827",fontSize:11.2,lineHeight:1},children:e.value})]},e.key))}),(0,o.jsx)("section",{style:{marginTop:5},children:(0,o.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:11.3,lineHeight:1.25},children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{"data-report-color-block":"true",style:{...et,textAlign:"left",minWidth:88},children:"Subject"}),B.showAssessmentBreakdown&&D.map(e=>(0,o.jsxs)("th",{"data-report-color-block":"true",style:et,children:[c(e,B),(0,o.jsxs)("div",{style:{fontSize:9,marginTop:1,opacity:.95},children:["W:",(0,n.ZV)(e.weight,0)]})]},e.assessmentStructureItemId)),(0,o.jsx)("th",{"data-report-color-block":"true",style:et,children:"%"}),B.showGrade&&(0,o.jsx)("th",{"data-report-color-block":"true",style:et,children:"Grade"}),B.showSubjectPosition&&(0,o.jsx)("th",{"data-report-color-block":"true",style:et,children:B.subjectPositionLabel||"Pos."}),B.showSubjectRemarks&&(0,o.jsx)("th",{"data-report-color-block":"true",style:{...et,minWidth:76},children:"Remark"})]})}),(0,o.jsxs)("tbody",{children:[M.subjectResults.map(e=>(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{style:{...er,fontWeight:900,color:"#111827",fontSize:12.9,minWidth:118,whiteSpace:"normal",overflowWrap:"break-word"},children:[e.subjectName,B.showTeacherNames&&e.teacherName&&(0,o.jsx)("div",{style:{marginTop:1,fontSize:10,color:"#4b5563",fontWeight:700},children:f(e.teacherName)})]}),B.showAssessmentBreakdown&&D.map(t=>{let r=e.breakdown.find(e=>e.assessmentStructureItemId===t.assessmentStructureItemId);return(0,o.jsx)("td",{style:{...er,textAlign:"center"},children:m(r,B,n.ZV)},t.assessmentStructureItemId)}),(0,o.jsx)("td",{style:{...er,textAlign:"center",fontWeight:900},children:(0,n.l9)(e.percentage,1,"-")}),B.showGrade&&(0,o.jsx)("td",{style:{...er,textAlign:"center",fontWeight:1e3},children:e.grade}),B.showSubjectPosition&&(0,o.jsx)("td",{style:{...er,textAlign:"center"},children:(0,n.IE)(e.subjectPosition)}),B.showSubjectRemarks&&(0,o.jsx)("td",{style:er,children:e.remark})]},e.classSubjectId)),!M.subjectResults.length&&(0,o.jsx)("tr",{children:(0,o.jsx)("td",{style:{...er,textAlign:"center",padding:12},colSpan:ec,children:"No subject results available for this selected period."})})]})]})}),(0,o.jsxs)("section",{style:{marginTop:5,display:"grid",gridTemplateColumns:"1fr 1fr",gap:5},children:[(0,o.jsxs)("div",{style:{border:"1px solid #111827",minHeight:42,padding:5,background:"rgba(255,255,255,.97)"},children:[(0,o.jsxs)("div",{style:J,children:[B.classTeacherLabel,"'s Remark"]}),(0,o.jsx)("div",{style:{marginTop:3,fontSize:11,lineHeight:1.28,color:"#111827"},children:M.classTeacherRemark||""})]}),(0,o.jsxs)("div",{style:{border:"1px solid #111827",minHeight:42,padding:5,background:"rgba(255,255,255,.97)"},children:[(0,o.jsxs)("div",{style:J,children:[B.headTeacherLabel,"'s Remark"]}),(0,o.jsx)("div",{style:{marginTop:3,fontSize:11,lineHeight:1.28,color:"#111827"},children:M.headTeacherRemark||""})]})]}),(es||el||ed)&&(0,o.jsxs)("section",{style:{marginTop:5,display:"grid",gridTemplateColumns:[es,el,ed].filter(Boolean).length>=3?"repeat(3,minmax(0,1fr))":2===[es,el,ed].filter(Boolean).length?"repeat(2,minmax(0,1fr))":"1fr",gap:5},children:[es&&(0,o.jsxs)("div",{style:{border:"1px solid #111827",borderLeft:`5px solid ${Y}`,padding:"4px 6px",background:"rgba(255,255,255,.97)"},children:[(0,o.jsx)("div",{style:J,children:"This Academic Period"}),(0,o.jsxs)("div",{style:{...Q,display:"flex",justifyContent:"space-between",gap:7},children:[(0,o.jsx)("span",{children:G?.name||$.academicPeriod?.name||"Current Period"}),(0,o.jsx)("span",{children:G?.formattedEndDate||es.replace(/^.*?:\s*/i,"")})]})]}),el&&(0,o.jsxs)("div",{style:{border:"1px solid #111827",borderLeft:`5px solid ${Y}`,padding:"4px 6px",background:"rgba(255,255,255,.97)"},children:[(0,o.jsx)("div",{style:J,children:"Next Academic Period"}),(0,o.jsxs)("div",{style:{...Q,display:"flex",justifyContent:"space-between",gap:7},children:[(0,o.jsx)("span",{children:O?.name||"Next Period"}),(0,o.jsx)("span",{children:O?.formattedStartDate||el.replace(/^.*?:\s*/i,"")})]})]}),ed&&(0,o.jsxs)("div",{style:{border:"1px solid #111827",borderLeft:`5px solid ${Y}`,padding:"4px 6px",background:"rgba(255,255,255,.97)"},children:[(0,o.jsx)("div",{style:J,children:B.generatedDateLabel||"Generated"}),(0,o.jsxs)("div",{style:{...Q,display:"flex",justifyContent:"space-between",gap:7},children:[(0,o.jsx)("span",{children:"Report Card"}),(0,o.jsx)("span",{children:ed})]})]})]}),(0,o.jsxs)("section",{style:{marginTop:13,display:"grid",gridTemplateColumns:B.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:16,alignItems:"end"},children:[(0,o.jsx)(w,{name:f(_.classTeacherName),label:B.classTeacherLabel}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[X&&(0,o.jsx)("img",{src:X,alt:"Official signature",style:{height:23,objectFit:"contain",marginBottom:1}}),(0,o.jsx)(w,{name:f((0,n.ou)(_.headTeacherName,_.principalName)),label:B.headTeacherLabel,inline:!0})]}),B.showParentSignature&&(0,o.jsx)(w,{name:f((0,n.ou)(_.parentName,_.guardianName)),label:B.parentLabel})]}),(0,o.jsxs)("footer",{style:{marginTop:6,borderTop:`1.2px solid ${Y}`,paddingTop:3,display:"flex",justifyContent:"space-between",gap:10,fontSize:9.2,color:"#4b5563",fontWeight:700},children:[(0,o.jsxs)("span",{children:["Official academic report generated for ",F.schoolName]}),(0,o.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return h?(0,o.jsxs)("div",{className:`src-preview-shell ${u?"expanded":""}`,children:[(0,o.jsx)("style",{children:v}),(0,o.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:f(M.studentName)}),(0,o.jsxs)("span",{children:[M.className," \xb7"," ",$.academicPeriod?.name||"Academic Period"]})]}),(0,o.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>P("out"),onPointerDown:()=>R("out"),onPointerUp:W,onPointerCancel:W,onPointerLeave:W,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,o.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{W(),g(!1),N(1),z(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,o.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,o.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>z(e=>!e),"aria-label":"Choose zoom percentage","aria-expanded":C,title:"Choose zoom percentage",children:[(0,o.jsxs)("span",{children:[T,"%"]}),(0,o.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),C&&(0,o.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(e=>(0,o.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{W(),g(!0),N(Number((e/100).toFixed(4))),z(!1)},className:`src-zoom-menu-item ${Math.round(100*A)===e?"active":""}`,children:[e,"%"]},e))})]}),(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>P("in"),onPointerDown:()=>R("in"),onPointerUp:W,onPointerCancel:W,onPointerLeave:W,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,o.jsx)("div",{ref:b,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":A},children:(0,o.jsx)("div",{className:"src-preview-center",children:(0,o.jsx)("div",{className:"src-preview-scale",children:em})})})]}):em},fileName:"CompactPrintTemplate.tsx",aliases:["compact","print","compact_print","one_page","space_saving"]},{...(0,a.BF)("bordered_traditional"),component:function({dataset:e,template:t,settings:r,compact:s=!1,showWatermark:l=!0,pageBreakAfter:p=!0,mobilePreview:h=!0}){let[x,f]=(0,i.useState)(!1),w=(0,i.useRef)(null),v=(0,i.useRef)(null),y=(0,i.useRef)(null),[j,S]=(0,i.useState)(1),[k,I]=(0,i.useState)(1),[N,C]=(0,i.useState)(!1),z=x?k:j,A=Math.round(100*z),T=(0,i.useCallback)(e=>{I(t=>{let r=x?t:j;return Math.min(2,Math.max(.25,Number(("in"===e?1.01*r:r/1.01).toFixed(4))))}),f(!0)},[x,j]),P=(0,i.useCallback)(()=>{null!=v.current&&(window.clearTimeout(v.current),v.current=null),null!=y.current&&(window.clearInterval(y.current),y.current=null)},[]),W=(0,i.useCallback)(e=>{P(),T(e),v.current=window.setTimeout(()=>{y.current=window.setInterval(()=>{T(e)},55)},260)},[T,P]);(0,i.useEffect)(()=>{if(!h)return;let e=()=>{let e=w.current;if(!e)return;let t=e.getBoundingClientRect();S(Number(Math.min(1,Math.max(120,t.width-8)/793.7008,Math.max(180,window.innerHeight-t.top-8)/1122.5197).toFixed(4)))};e();let t=new ResizeObserver(e);return w.current&&t.observe(w.current),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{t.disconnect(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[h]),(0,i.useEffect)(()=>P,[P]);let R=(0,a.tH)({...a.gv,...r||{},templateCode:"bordered_traditional",layoutKey:"bordered_traditional",templateName:"Bordered Traditional",density:r?.density||(s?"compact":"comfortable")},t||null,null),B=(0,n.J7)({dataset:e,template:t||null,settings:R}),L=e?.report,M=e?.header,$=e?.student,H=(0,i.useMemo)(()=>d(L?.subjectResults,R),[L?.subjectResults,R]);if(!e||!L||!M||!B)return(0,o.jsxs)("div",{className:"src-empty-card bordered-template-empty",children:[(0,o.jsx)("style",{children:b}),(0,n.p6)(e)]});let{branding:D,studentInfo:F,currentAcademicPeriod:E,nextAcademicPeriod:G,signatures:O}=B,_=D.primaryColor||"var(--primary-color)",Y=D.fontFamily||"Arial, sans-serif",V=D.reportCardBackgroundImage||"",U=D.reportCardWatermark||D.logo||"",Z=O.officialSignatureImage||D.reportCardSignatureImage||"",K=F.studentPhoto||"",X=(0,n.j1)({settings:R,primaryColor:_,fontFamily:Y,compact:s,pageBreakAfter:p}),q=(0,n.h5)({settings:R,primaryColor:_,compact:s}),J=s?"8mm":"9mm",Q={...X,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:J,background:"#fffdf7",color:"#111",border:"2px double #111827",borderRadius:4,boxShadow:"0 20px 54px rgba(15,23,42,.13)",overflow:"hidden"},ee={table:{...q.table,width:"100%",borderCollapse:"collapse",borderSpacing:0,overflow:"hidden",borderRadius:4,border:"1.5px solid #111827",fontSize:s?11:12.2},th:{...q.th,border:"1px solid #111827",borderBottom:"2px double #111827",background:"#f3efe4",color:"#111827",padding:s?"5px 4px":"6px 4px",fontSize:s?10.1:10.9,lineHeight:1.25,whiteSpace:"normal",overflowWrap:"break-word",fontWeight:950},td:{...q.td,border:"1px solid #111827",borderBottom:"2px double #111827",padding:s?"4px 4px":"5px 5px",fontSize:s?11.2:12.3,lineHeight:1.25,overflowWrap:"break-word",whiteSpace:"normal",color:"#111827"},label:q.label,value:q.value},et={fontSize:s?9.3:10,fontWeight:950,letterSpacing:.25,textTransform:"uppercase",color:"#64748b",lineHeight:1.15},er={fontSize:s?11.8:12.7,fontWeight:950,color:"#0f172a",lineHeight:1.15,overflowWrap:"anywhere"},ei=(0,n.ou)(M?.academicStructure?.name,M?.academicStructureName,M?.academicYear?.name,M?.academicYearName,L?.academicStructureName,"string"==typeof M?.academicYear?M.academicYear:""),ea=[{key:"studentName",label:"Student Name",value:g(L.studentName),span:2,show:!0},{key:"gender",label:"Gender",value:L.gender||$?.gender||"-",show:!0},{key:"admissionNumber",label:"Admission No.",value:L.admissionNumber||"-",show:!0},{key:"academicStructure",label:"Academic Structure",value:ei||"-",show:!0},{key:"academicPeriod",label:"Academic Period",value:M.academicPeriod?.name||"-",show:!0},{key:"class",label:"Class",value:L.className||"-",show:!0},{key:"attendance",label:"Attendance",value:`${L.attendance?.presentDays||0}/${L.attendance?.totalDays||0}`,show:R.showAttendance}].filter(e=>e.show),eo=R.showNumberOnRoll?[{key:"numberOnRoll",label:R.numberOnRollLabel||"Number On Roll",value:F.numberOnRoll||L.numberOnRoll||L.classSize||e?.numberOnRoll||e?.classSize||"-",show:!0}]:[],en=[{key:"total",label:"Total",value:(0,n.ZV)(L.total,1),show:R.showTotal},{key:"average",label:"Average",value:`${(0,n.ZV)(L.average,1)}%`,show:R.showAverage},{key:"classPosition",label:R.classPositionLabel||"Class Position",value:(0,n.IE)(L.overallPosition),show:R.showClassPosition},{key:"gpa",label:"GPA",value:null!=L.overallGPA?(0,n.ZV)(L.overallGPA,2):"-",show:R.showGPA}].filter(e=>e.show),es=(0,n.qr)(E,R),el=(0,n.R8)(G,R),ed=R.showGeneratedDate?(0,n.kn)(e?.generatedAt):"",ec=1+(R.showAssessmentBreakdown?H.length:0)+1+ +!!R.showGrade+ +!!R.showSubjectPosition+ +!!R.showSubjectRemarks,em=(0,o.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page bordered-traditional-template-page",style:Q,children:[(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:10,border:`1px solid ${_}`,pointerEvents:"none",zIndex:0}}),(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:16,top:16,width:32,height:32,borderTop:`3px solid ${_}`,borderLeft:`3px solid ${_}`,zIndex:0}}),(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",right:16,top:16,width:32,height:32,borderTop:`3px solid ${_}`,borderRight:`3px solid ${_}`,zIndex:0}}),(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:16,bottom:16,width:32,height:32,borderBottom:`3px solid ${_}`,borderLeft:`3px solid ${_}`,zIndex:0}}),(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",right:16,bottom:16,width:32,height:32,borderBottom:`3px solid ${_}`,borderRight:`3px solid ${_}`,zIndex:0}}),V&&(0,o.jsx)("img",{src:V,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),l&&R.showWatermark&&U&&(0,o.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,o.jsx)("img",{src:U,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,o.jsx)("div",{"aria-hidden":"true",className:"traditional-frame-line traditional-frame-outer",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"traditional-frame-line traditional-frame-inner"}),(0,o.jsx)("div",{"aria-hidden":"true",className:"traditional-corner traditional-corner-tl",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"traditional-corner traditional-corner-tr",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"traditional-corner traditional-corner-bl",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"traditional-corner traditional-corner-br",style:{borderColor:_}}),(0,o.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,o.jsx)(u,{header:M,dataset:e,settings:R,title:"Official Academic Report",compact:s,primaryColor:_,fontFamily:Y}),(0,o.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:R.showStudentPhoto?"minmax(0, 1fr) 100px":"1fr",gap:8,alignItems:"stretch"},children:[(0,o.jsx)("div",{style:{borderRadius:4,border:"1px solid #111827",background:"#fffdf7",overflow:"hidden"},children:(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))"},children:[ea.map((e,t)=>(0,o.jsxs)("div",{style:{minWidth:0,gridColumn:e.span?`span ${e.span}`:void 0,padding:s?"7px 8px":"8px 9px",borderRight:2!==t&&6!==t?"1px solid #111827":void 0,borderBottom:t<3?"1px solid #111827":void 0},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{...er,marginTop:3,whiteSpace:"normal",overflowWrap:"break-word"},children:e.value})]},e.key)),eo.map(e=>(0,o.jsxs)("div",{style:{gridColumn:"1 / -1",padding:s?"7px 8px":"8px 9px",borderTop:"1px solid #111827"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{...er,marginTop:3},children:e.value})]},e.key))]})}),R.showStudentPhoto&&(0,o.jsx)("div",{style:{border:"2px double #111827",borderRadius:3,background:"#fffaf0",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:92},children:K?(0,o.jsx)("img",{src:K,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,o.jsx)("span",{style:{fontSize:11,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]}),(0,o.jsx)("div",{style:{marginTop:8},children:(0,o.jsxs)("table",{style:ee.table,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,textAlign:"left",minWidth:98},children:"Subject"}),R.showAssessmentBreakdown&&H.map(e=>(0,o.jsxs)("th",{"data-report-color-block":"true",style:ee.th,children:[c(e,R),(R.showAssessmentWeights||R.showAssessmentMaximumScores)&&(0,o.jsxs)("div",{style:{fontSize:s?9.2:9.7,marginTop:2,opacity:.88},children:[R.showAssessmentWeights?`W:${(0,n.ZV)(e.effectiveWeight??e.weight,0)}`:"",R.showAssessmentWeights&&R.showAssessmentMaximumScores?" \xb7 ":"",R.showAssessmentMaximumScores?`M:${(0,n.ZV)(e.maxScore,0)}`:""]})]},e.assessmentStructureItemId)),(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"%"}),R.showGrade&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"Grade"}),R.showSubjectPosition&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:R.subjectPositionLabel||"Pos."}),R.showSubjectRemarks&&(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,minWidth:86},children:"Remark"})]})}),(0,o.jsxs)("tbody",{children:[L.subjectResults.map((e,t)=>(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{style:{...ee.td,fontWeight:950,fontSize:s?12.5:13.9,lineHeight:1.25,minWidth:s?118:128,whiteSpace:"normal",overflowWrap:"break-word",background:t%2==0?"#fffaf0":"#fffdf7"},children:[e.subjectName,R.showTeacherNames&&e.teacherName&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?10:10.8,opacity:.85,fontWeight:700},children:g(e.teacherName)})]}),R.showAssessmentBreakdown&&H.map(t=>{let r=e.breakdown.find(e=>e.assessmentStructureItemId===t.assessmentStructureItemId);return(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:m(r,R,n.ZV)},t.assessmentStructureItemId)}),(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",fontWeight:950},children:(0,n.l9)(e.percentage,1,"-")}),R.showGrade&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,o.jsx)("span",{className:"traditional-grade-seal",style:{borderColor:_,color:_},children:e.grade})}),R.showSubjectPosition&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,n.IE)(e.subjectPosition)}),R.showSubjectRemarks&&(0,o.jsx)("td",{style:ee.td,children:e.remark})]},e.classSubjectId)),!L.subjectResults.length&&(0,o.jsx)("tr",{children:(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",padding:16},colSpan:ec,children:"No subject results available for this selected period."})})]})]})}),en.length>0&&(0,o.jsxs)("section",{style:{marginTop:8,borderRadius:4,border:"1px solid #111827",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${en.length}, minmax(0, 1fr))`,background:"#fffdf7"},children:[(0,o.jsx)("div",{"data-report-color-block":"true",style:{background:_}}),en.map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===t?"0":"1px solid #111827",background:"#fffdf7"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?14:15.8,fontWeight:950,color:"#0f172a"},children:e.value})]},e.key))]}),(0,o.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${R.classTeacherLabel}'s Remark`,value:L.classTeacherRemark||""},{label:`${R.headTeacherLabel}'s Remark`,value:L.headTeacherRemark||""}].map(e=>(0,o.jsxs)("div",{style:{border:"1px solid #111827",borderRadius:4,minHeight:52,padding:s?8:9,background:"#fffdf7",position:"relative",overflow:"hidden"},children:[(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:_}}),(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:s?9.6:10.5,lineHeight:1.32,color:"#111827"},children:e.value})]},e.label))}),(es||el||ed)&&(0,o.jsxs)("section",{style:{marginTop:8,border:"1px solid #111827",borderRadius:4,padding:s?7:8,background:"#fffaf0",display:"grid",gridTemplateColumns:[es,el,ed].filter(Boolean).length>=3?"1fr 28px 1fr 28px 1fr":es&&el?"1fr 28px 1fr":"1fr",gap:6,alignItems:"center"},children:[es&&(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:et,children:"Current Academic Period"}),(0,o.jsx)("div",{style:er,children:E?.name||M.academicPeriod?.name||"Current Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?10:10.8,fontWeight:900,color:_},children:["Ends:"," ",E?.formattedEndDate||es.replace(/^.*?:\s*/i,"")]})]}),es&&el&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"traditional-timeline-seal",style:{borderColor:_}})}),el&&(0,o.jsxs)("div",{style:{textAlign:es?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:"Next Academic Period"}),(0,o.jsx)("div",{style:er,children:G?.name||"Next Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?10:10.8,fontWeight:900,color:_},children:["Begins:"," ",G?.formattedStartDate||el.replace(/^.*?:\s*/i,"")]})]}),ed&&es&&el&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"traditional-timeline-seal",style:{borderColor:_}})}),ed&&(0,o.jsxs)("div",{style:{textAlign:"right"},children:[(0,o.jsx)("div",{style:et,children:R.generatedDateLabel||"Generated"}),(0,o.jsx)("div",{style:er,children:"Report Card"}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?10:10.8,fontWeight:900,color:_},children:ed})]})]}),(0,o.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:R.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:R.classTeacherLabel,name:g(O.classTeacherName),image:"",show:!0},{label:R.headTeacherLabel,name:g((0,n.ou)(O.headTeacherName,O.principalName)),image:Z,show:!0},{label:R.parentLabel,name:g((0,n.ou)(O.parentName,O.guardianName)),image:"",show:R.showParentSignature}].filter(e=>e.show).map(e=>(0,o.jsxs)("div",{style:{textAlign:"center"},children:[e.image&&(0,o.jsx)("img",{src:e.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,o.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:s?10.6:11.6,fontWeight:950,color:"#111827"},children:e.name}),(0,o.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:e.label})]},e.label))}),(0,o.jsxs)("footer",{style:{marginTop:8,borderTop:`2px solid ${_}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:9.3,color:"#475569",fontWeight:700},children:[(0,o.jsxs)("span",{children:["Official academic report generated for ",D.schoolName]}),(0,o.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return h?(0,o.jsxs)("div",{className:`src-preview-shell ${x?"expanded":""}`,children:[(0,o.jsx)("style",{children:b}),(0,o.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:g(L.studentName)}),(0,o.jsxs)("span",{children:[L.className," \xb7"," ",M.academicPeriod?.name||"Academic Period"]})]}),(0,o.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>T("out"),onPointerDown:()=>W("out"),onPointerUp:P,onPointerCancel:P,onPointerLeave:P,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,o.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{P(),f(!1),I(1),C(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,o.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,o.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>C(e=>!e),"aria-label":"Choose zoom percentage","aria-expanded":N,title:"Choose zoom percentage",children:[(0,o.jsxs)("span",{children:[A,"%"]}),(0,o.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),N&&(0,o.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(e=>(0,o.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{P(),f(!0),I(Number((e/100).toFixed(4))),C(!1)},className:`src-zoom-menu-item ${Math.round(100*z)===e?"active":""}`,children:[e,"%"]},e))})]}),(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>T("in"),onPointerDown:()=>W("in"),onPointerUp:P,onPointerCancel:P,onPointerLeave:P,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,o.jsx)("div",{ref:w,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":z},children:(0,o.jsx)("div",{className:"src-preview-center",children:(0,o.jsx)("div",{className:"src-preview-scale",children:em})})})]}):em},fileName:"BorderedTraditionalTemplate.tsx",aliases:["bordered","traditional","bordered_traditional","boxed"]},{...(0,a.BF)("letterhead_premium"),component:function({dataset:e,template:t,settings:r,compact:s=!1,showWatermark:l=!0,pageBreakAfter:p=!0,mobilePreview:h=!0}){let[u,g]=(0,i.useState)(!1),b=(0,i.useRef)(null),x=(0,i.useRef)(null),f=(0,i.useRef)(null),[w,v]=(0,i.useState)(1),[y,j]=(0,i.useState)(1),[S,k]=(0,i.useState)(!1),I=u?y:w,N=Math.round(100*I),T=(0,i.useCallback)(e=>{j(t=>{let r=u?t:w;return Math.min(2,Math.max(.25,Number(("in"===e?1.01*r:r/1.01).toFixed(4))))}),g(!0)},[u,w]),P=(0,i.useCallback)(()=>{null!=x.current&&(window.clearTimeout(x.current),x.current=null),null!=f.current&&(window.clearInterval(f.current),f.current=null)},[]),W=(0,i.useCallback)(e=>{P(),T(e),x.current=window.setTimeout(()=>{f.current=window.setInterval(()=>{T(e)},55)},260)},[T,P]);(0,i.useEffect)(()=>{if(!h)return;let e=()=>{let e=b.current;if(!e)return;let t=e.getBoundingClientRect();v(Number(Math.min(1,Math.max(120,t.width-8)/793.7008,Math.max(180,window.innerHeight-t.top-8)/1122.5197).toFixed(4)))};e();let t=new ResizeObserver(e);return b.current&&t.observe(b.current),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{t.disconnect(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[h]),(0,i.useEffect)(()=>P,[P]);let R=(0,a.tH)({...a.gv,...r||{},templateCode:"letterhead_premium",layoutKey:"letterhead_premium",templateName:"LetterHead Premium",density:r?.density||(s?"compact":"comfortable")},t||null,null),B=(0,n.J7)({dataset:e,template:t||null,settings:R}),L=e?.report,M=e?.header,$=e?.student,H=(0,i.useMemo)(()=>d(L?.subjectResults,R),[L?.subjectResults,R]);if(!e||!L||!M||!B)return(0,o.jsxs)("div",{className:"src-empty-card letterhead-template-empty",children:[(0,o.jsx)("style",{children:A}),(0,n.p6)(e)]});let{branding:D,studentInfo:F,currentAcademicPeriod:E,nextAcademicPeriod:G,signatures:O}=B,_=D.primaryColor||"var(--primary-color)",Y=D.fontFamily||"Arial, sans-serif",V=D.reportCardBackgroundImage||"",U=D.reportCardWatermark||D.logo||"",Z=O.officialSignatureImage||D.reportCardSignatureImage||"",K=F.studentPhoto||"",X=(0,n.j1)({settings:R,primaryColor:_,fontFamily:Y,compact:s,pageBreakAfter:p}),q=(0,n.h5)({settings:R,primaryColor:_,compact:s}),J=s?"8mm":"9mm",Q={...X,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:J,background:"linear-gradient(180deg, #fffdf8, #ffffff 34%, #fffdf8)",color:"#111",border:"1px solid #b7a981",borderRadius:10,boxShadow:"0 24px 70px rgba(15,23,42,.13)",overflow:"hidden"},ee={table:{...q.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:8,border:"1px double #9f8f62",fontSize:s?11.3:12},th:{...q.th,border:"0",borderBottom:"1px solid #111827",background:`linear-gradient(90deg, ${_}, #111827)`,color:"#fff",padding:s?"5px 5px":"6px 6px",fontWeight:950,fontSize:s?10.5:11.2,lineHeight:1.22,whiteSpace:"normal",overflowWrap:"break-word"},td:{...q.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:s?"4px 5px":"5px 6px",color:"#111827",fontSize:s?11.5:12.4,lineHeight:1.26,whiteSpace:"normal",overflowWrap:"break-word"},label:q.label,value:q.value},et={fontSize:s?9.5:10.2,fontWeight:950,letterSpacing:.25,textTransform:"uppercase",color:"#64748b",lineHeight:1.15},er={fontSize:s?11.4:12.4,fontWeight:950,color:"#0f172a",lineHeight:1.15,overflowWrap:"anywhere"},ei=[{key:"total",label:"Total",value:(0,n.ZV)(L.total,1),show:R.showTotal},{key:"average",label:"Average",value:`${(0,n.ZV)(L.average,1)}%`,show:R.showAverage},{key:"classPosition",label:R.classPositionLabel||"Class Position",value:(0,n.IE)(L.overallPosition),show:R.showClassPosition},{key:"gpa",label:"GPA",value:null!=L.overallGPA?(0,n.ZV)(L.overallGPA,2):"-",show:R.showGPA}].filter(e=>e.show),ea=(0,n.qr)(E,R),eo=(0,n.R8)(G,R),en=R.showGeneratedDate?(0,n.kn)(e?.generatedAt):"",es=1+(R.showAssessmentBreakdown?H.length:0)+1+ +!!R.showGrade+ +!!R.showSubjectPosition+ +!!R.showSubjectRemarks,el=(0,o.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page letterhead-premium-template-page",style:Q,children:[V&&(0,o.jsx)("img",{src:V,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),l&&R.showWatermark&&U&&(0,o.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,o.jsx)("img",{src:U,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,o.jsx)("div",{"aria-hidden":"true",className:"letterhead-frame-line letterhead-frame-outer",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"letterhead-frame-line letterhead-frame-inner"}),(0,o.jsx)("div",{"aria-hidden":"true",className:"letterhead-corner letterhead-corner-tl",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"letterhead-corner letterhead-corner-tr",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"letterhead-corner letterhead-corner-bl",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"letterhead-corner letterhead-corner-br",style:{borderColor:_}}),(0,o.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,o.jsx)(C,{header:M,dataset:e,settings:R,title:"Terminal / Periodic Academic Report",compact:s,primaryColor:_,fontFamily:Y}),(0,o.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:R.showStudentPhoto?"minmax(0, 1fr) 86px":"1fr",gap:8,alignItems:"stretch"},children:[(0,o.jsxs)("div",{style:{border:"1px solid #d8c79c",borderRadius:7,background:"linear-gradient(180deg, #fffdf8, #ffffff)",overflow:"hidden"},children:[(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, .8fr) minmax(0, 1.2fr)",gap:0,borderBottom:"1px solid #d8c79c"},children:[(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0},children:[(0,o.jsx)("div",{style:et,children:"Student Name"}),(0,o.jsx)("div",{style:{...er,marginTop:2,fontSize:s?12.6:14.2,overflowWrap:"anywhere"},children:z(L.studentName)})]}),(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #d8c79c"},children:[(0,o.jsx)("div",{style:et,children:"Gender"}),(0,o.jsx)("div",{style:{...er,marginTop:2},children:L.gender||$?.gender||"-"})]}),(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #d8c79c"},children:[(0,o.jsx)("div",{style:et,children:"Admission No."}),(0,o.jsx)("div",{style:{...er,marginTop:2},children:L.admissionNumber||"-"})]})]}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"},children:[{key:"structure",label:"Academic Structure",value:(0,n.ou)(M?.academicStructure?.name,M?.academicStructureName,"-")},{key:"period",label:"Academic Period",value:(0,n.ou)(M.academicPeriod?.name,M?.academicPeriodName,"-")},{key:"class",label:"Class",value:L.className||"-"},{key:"attendance",label:"Attendance",value:`${L.attendance?.presentDays??0}/${L.attendance?.totalDays??0}`}].filter(e=>"attendance"!==e.key||R.showAttendance).map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:0===t?void 0:"1px solid #d8c79c"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{...er,marginTop:2,overflowWrap:"anywhere"},children:e.value})]},e.key))}),R.showNumberOnRoll&&(0,o.jsxs)("div",{style:{padding:s?"5px 7px":"6px 9px",borderTop:"1px solid #d8c79c"},children:[(0,o.jsxs)("span",{style:et,children:[R.numberOnRollLabel||"Number On Roll",": "]}),(0,o.jsx)("span",{style:er,children:F.numberOnRoll||L.numberOnRoll||L.classSize||e?.numberOnRoll||e?.classSize||"-"})]})]}),R.showStudentPhoto&&(0,o.jsx)("div",{style:{border:"1px solid #d8c79c",borderRadius:7,background:"#fff",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:96},children:K?(0,o.jsx)("img",{src:K,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,o.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]}),(0,o.jsx)("div",{style:{marginTop:8},children:(0,o.jsxs)("table",{style:ee.table,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,textAlign:"left",minWidth:98},children:"Subject"}),R.showAssessmentBreakdown&&H.map(e=>(0,o.jsxs)("th",{"data-report-color-block":"true",style:ee.th,children:[c(e,R),(R.showAssessmentWeights||R.showAssessmentMaximumScores)&&(0,o.jsxs)("div",{style:{fontSize:7.5,marginTop:2,opacity:.88},children:[R.showAssessmentWeights?`W:${(0,n.ZV)(e.effectiveWeight??e.weight,0)}`:"",R.showAssessmentWeights&&R.showAssessmentMaximumScores?" \xb7 ":"",R.showAssessmentMaximumScores?`M:${(0,n.ZV)(e.maxScore,0)}`:""]})]},e.assessmentStructureItemId)),(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"%"}),R.showGrade&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"Grade"}),R.showSubjectPosition&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:R.subjectPositionLabel||"Pos."}),R.showSubjectRemarks&&(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,minWidth:86},children:"Remark"})]})}),(0,o.jsxs)("tbody",{children:[L.subjectResults.map((e,t)=>(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{style:{...ee.td,fontWeight:950,fontSize:s?12.8:13.7,lineHeight:1.25,overflowWrap:"break-word",background:t%2==0?"#f8fafc":"#ffffff"},children:[e.subjectName,R.showTeacherNames&&e.teacherName&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:10.2,opacity:.72,fontWeight:700},children:z(e.teacherName)})]}),R.showAssessmentBreakdown&&H.map(t=>{let r=e.breakdown.find(e=>e.assessmentStructureItemId===t.assessmentStructureItemId);return(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:m(r,R,n.ZV)},t.assessmentStructureItemId)}),(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",fontWeight:950},children:(0,n.l9)(e.percentage,1,"-")}),R.showGrade&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,o.jsx)("span",{className:"letterhead-grade-seal",style:{borderColor:_,color:_},children:e.grade})}),R.showSubjectPosition&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,n.IE)(e.subjectPosition)}),R.showSubjectRemarks&&(0,o.jsx)("td",{style:ee.td,children:e.remark})]},e.classSubjectId)),!L.subjectResults.length&&(0,o.jsx)("tr",{children:(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",padding:16},colSpan:es,children:"No subject results available for this selected period."})})]})]})}),ei.length>0&&(0,o.jsxs)("section",{style:{marginTop:8,borderRadius:8,border:"1px double #b7a981",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${ei.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,o.jsx)("div",{"data-report-color-block":"true",style:{background:_}}),ei.map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===t?"0":"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #f8fafc)"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?14:15.8,fontWeight:950,color:"#0f172a"},children:e.value})]},e.key))]}),(0,o.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${R.classTeacherLabel}'s Remark`,value:L.classTeacherRemark||""},{label:`${R.headTeacherLabel}'s Remark`,value:L.headTeacherRemark||""}].map(e=>(0,o.jsxs)("div",{style:{border:"1px double #b7a981",borderRadius:8,minHeight:52,padding:s?8:9,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:_}}),(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:s?9.6:10.5,lineHeight:1.32,color:"#111827"},children:e.value})]},e.label))}),(ea||eo||en)&&(0,o.jsxs)("section",{style:{marginTop:8,border:"1px double #b7a981",borderRadius:8,padding:s?7:8,background:"#f8fafc",display:"grid",gridTemplateColumns:[ea,eo,en].filter(Boolean).length>=3?"1fr 28px 1fr 28px 1fr":ea&&eo?"1fr 28px 1fr":"1fr",gap:6,alignItems:"center"},children:[ea&&(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:et,children:"Current Academic Period"}),(0,o.jsx)("div",{style:er,children:E?.name||M.academicPeriod?.name||"Current Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:["Ends:"," ",E?.formattedEndDate||ea.replace(/^.*?:\s*/i,"")]})]}),ea&&eo&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"letterhead-timeline-medallion",style:{borderColor:_}})}),eo&&(0,o.jsxs)("div",{style:{textAlign:ea?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:"Next Academic Period"}),(0,o.jsx)("div",{style:er,children:G?.name||"Next Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:["Begins:"," ",G?.formattedStartDate||eo.replace(/^.*?:\s*/i,"")]})]}),en&&ea&&eo&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"letterhead-timeline-medallion",style:{borderColor:_}})}),en&&(0,o.jsxs)("div",{style:{textAlign:ea||eo?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:R.generatedDateLabel||"Generated"}),(0,o.jsx)("div",{style:er,children:"Report Card"}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:en})]})]}),(0,o.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:R.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:R.classTeacherLabel,name:z(O.classTeacherName||""),image:"",show:!0},{label:R.headTeacherLabel,name:z((0,n.ou)(O.headTeacherName,O.principalName)),image:Z,show:!0},{label:R.parentLabel,name:z((0,n.ou)(O.parentName,O.guardianName)),image:"",show:R.showParentSignature}].filter(e=>e.show).map(e=>(0,o.jsxs)("div",{style:{textAlign:"center"},children:[e.image&&(0,o.jsx)("img",{src:e.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,o.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:s?10.5:11.5,fontWeight:950,color:"#111827"},children:e.name}),(0,o.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:e.label})]},e.label))}),(0,o.jsxs)("footer",{style:{marginTop:8,borderTop:`1.5px double ${_}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:7.8,color:"#475569",fontWeight:700},children:[(0,o.jsxs)("span",{children:["Official premium academic record • ",D.schoolName]}),(0,o.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return h?(0,o.jsxs)("div",{className:`src-preview-shell ${u?"expanded":""}`,children:[(0,o.jsx)("style",{children:A}),(0,o.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:z(L.studentName)}),(0,o.jsxs)("span",{children:[L.className," \xb7"," ",M.academicPeriod?.name||"Academic Period"]})]}),(0,o.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>T("out"),onPointerDown:()=>W("out"),onPointerUp:P,onPointerCancel:P,onPointerLeave:P,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,o.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{P(),g(!1),j(1),k(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,o.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,o.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>k(e=>!e),"aria-label":"Choose zoom percentage","aria-expanded":S,title:"Choose zoom percentage",children:[(0,o.jsxs)("span",{children:[N,"%"]}),(0,o.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),S&&(0,o.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(e=>(0,o.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{P(),g(!0),j(Number((e/100).toFixed(4))),k(!1)},className:`src-zoom-menu-item ${Math.round(100*I)===e?"active":""}`,children:[e,"%"]},e))})]}),(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>T("in"),onPointerDown:()=>W("in"),onPointerUp:P,onPointerCancel:P,onPointerLeave:P,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,o.jsx)("div",{ref:b,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":I},children:(0,o.jsx)("div",{className:"src-preview-center",children:(0,o.jsx)("div",{className:"src-preview-scale",children:el})})})]}):el},fileName:"LetterHeadPremiumTemplate.tsx",aliases:["letterhead","premium","letterhead_premium","institutional"]},{...(0,a.BF)("side_profile"),component:function({dataset:e,template:t,settings:r,compact:s=!1,showWatermark:l=!0,pageBreakAfter:p=!0,mobilePreview:h=!0}){let[u,g]=(0,i.useState)(!1),b=(0,i.useRef)(null),x=(0,i.useRef)(null),f=(0,i.useRef)(null),[w,v]=(0,i.useState)(1),[y,j]=(0,i.useState)(1),[S,C]=(0,i.useState)(!1),z=u?y:w,A=Math.round(100*z),T=(0,i.useCallback)(e=>{j(t=>{let r=u?t:w;return Math.min(2,Math.max(.25,Number(("in"===e?1.01*r:r/1.01).toFixed(4))))}),g(!0)},[u,w]),P=(0,i.useCallback)(()=>{null!=x.current&&(window.clearTimeout(x.current),x.current=null),null!=f.current&&(window.clearInterval(f.current),f.current=null)},[]),W=(0,i.useCallback)(e=>{P(),T(e),x.current=window.setTimeout(()=>{f.current=window.setInterval(()=>{T(e)},55)},260)},[T,P]);(0,i.useEffect)(()=>{if(!h)return;let e=()=>{let e=b.current;if(!e)return;let t=e.getBoundingClientRect();v(Number(Math.min(1,Math.max(120,t.width-8)/793.7008,Math.max(180,window.innerHeight-t.top-8)/1122.5197).toFixed(4)))};e();let t=new ResizeObserver(e);return b.current&&t.observe(b.current),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{t.disconnect(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[h]),(0,i.useEffect)(()=>P,[P]);let R=(0,a.tH)({...a.gv,...r||{},templateCode:"side_profile",layoutKey:"side_profile",templateName:"Side Profile",density:r?.density||(s?"compact":"comfortable")},t||null,null),B=(0,n.J7)({dataset:e,template:t||null,settings:R}),L=e?.report,M=e?.header,$=e?.student,H=(0,i.useMemo)(()=>d(L?.subjectResults,R),[L?.subjectResults,R]);if(!e||!L||!M||!B)return(0,o.jsxs)("div",{className:"src-empty-card side-profile-template-empty",children:[(0,o.jsx)("style",{children:N}),(0,n.p6)(e)]});let{branding:D,studentInfo:F,currentAcademicPeriod:E,nextAcademicPeriod:G,signatures:O}=B,_=D.primaryColor||"var(--primary-color)",Y=D.fontFamily||"Arial, sans-serif",V=D.reportCardBackgroundImage||"",U=D.reportCardWatermark||D.logo||"",Z=O.officialSignatureImage||D.reportCardSignatureImage||"",K=F.studentPhoto||"",X=(0,n.j1)({settings:R,primaryColor:_,fontFamily:Y,compact:s,pageBreakAfter:p}),q=(0,n.h5)({settings:R,primaryColor:_,compact:s}),J=s?"7mm":"8mm",Q=s?"42mm":"46mm",ee={...X,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:J,background:"#fff",color:"#111",border:"1px solid #cbd5e1",borderRadius:20,boxShadow:"0 24px 70px rgba(15,23,42,.14)",overflow:"hidden"},et={table:{...q.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:14,border:"1px solid #cfd6e3",fontSize:s?8.2:8.9},th:{...q.th,border:"0",borderBottom:"1px solid #0f172a",background:"#0f172a",color:"#fff",padding:s?"4.5px 4px":"5.5px 5px",fontWeight:950,fontSize:s?10.5:11.2,lineHeight:1.22,whiteSpace:"normal",overflowWrap:"break-word"},td:{...q.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:s?"3.8px 4px":"4.8px 5px",color:"#111827",fontSize:s?11.5:12.4,lineHeight:1.26,whiteSpace:"normal",overflowWrap:"break-word"},label:q.label,value:q.value},er={fontSize:s?9.5:10.2,fontWeight:950,letterSpacing:.25,textTransform:"uppercase",color:"#64748b",lineHeight:1.15},ei={fontSize:s?11.4:12.4,fontWeight:950,color:"#0f172a",lineHeight:1.15,overflowWrap:"anywhere"},ea=R.showGeneratedDate?(0,n.kn)(e?.generatedAt):"",eo=[{key:"total",label:"Total",value:(0,n.ZV)(L.total,1),show:R.showTotal},{key:"average",label:"Average",value:`${(0,n.ZV)(L.average,1)}%`,show:R.showAverage},{key:"classPosition",label:R.classPositionLabel||"Class Position",value:(0,n.IE)(L.overallPosition),show:R.showClassPosition},{key:"gpa",label:"GPA",value:null!=L.overallGPA?(0,n.ZV)(L.overallGPA,2):"-",show:R.showGPA}].filter(e=>e.show),en=(0,n.qr)(E,R),es=(0,n.R8)(G,R),el=1+(R.showAssessmentBreakdown?H.length:0)+1+ +!!R.showGrade+ +!!R.showSubjectPosition+ +!!R.showSubjectRemarks,ed=(0,o.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page side-profile-template-page",style:ee,children:[V&&(0,o.jsx)("img",{src:V,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.022,zIndex:0}}),l&&R.showWatermark&&U&&(0,o.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.028,pointerEvents:"none",zIndex:0},children:(0,o.jsx)("img",{src:U,alt:"Watermark",style:{width:"48%",maxHeight:"48%",objectFit:"contain"}})}),(0,o.jsx)("div",{"aria-hidden":"true",className:"side-profile-frame-line side-profile-frame-outer",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"side-profile-frame-line side-profile-frame-inner"}),(0,o.jsxs)("div",{style:{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:`${Q} minmax(0, 1fr)`,gap:s?8:10,minHeight:"calc(297mm - 16mm)"},children:[(0,o.jsxs)("aside",{className:"side-profile-sidebar","data-report-color-block":"true",style:{background:`linear-gradient(180deg, ${_}, #0f172a 72%, #020617)`,borderRadius:18,overflow:"hidden",color:"#fff",display:"flex",flexDirection:"column",minHeight:"100%",boxShadow:"inset 0 0 0 1px rgba(255,255,255,.14), 0 14px 32px rgba(15,23,42,.18)"},children:[(0,o.jsx)("div",{style:{padding:s?10:12,borderBottom:"1px solid rgba(255,255,255,.16)"},children:(0,o.jsx)("div",{style:{width:s?42:48,height:s?42:48,borderRadius:16,background:"rgba(255,255,255,.95)",border:"1px solid rgba(255,255,255,.5)",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:D.logo?(0,o.jsx)("img",{src:D.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4,boxSizing:"border-box"}}):(0,o.jsxs)("span",{style:{color:_,fontSize:7,fontWeight:950,textAlign:"center",lineHeight:1.05},children:["SCHOOL",(0,o.jsx)("br",{}),"LOGO"]})})}),(0,o.jsxs)("div",{style:{padding:s?"10px 10px 8px":"12px 12px 9px",textAlign:"center"},children:[R.showStudentPhoto&&(0,o.jsx)("div",{style:{width:s?82:92,height:s?98:108,margin:"0 auto",borderRadius:18,border:"3px solid rgba(255,255,255,.82)",background:"rgba(255,255,255,.12)",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 16px 28px rgba(0,0,0,.22)"},children:K?(0,o.jsx)("img",{src:K,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,o.jsx)("span",{style:{fontSize:9,fontWeight:950,color:"rgba(255,255,255,.78)"},children:"PHOTO"})}),(0,o.jsx)("div",{style:{marginTop:4,fontSize:s?7.4:8,fontWeight:850,color:"rgba(255,255,255,.76)",textTransform:"uppercase"},children:"Student Profile"})]}),(0,o.jsxs)("div",{style:{marginTop:"auto",padding:s?10:12},children:[ea&&(0,o.jsxs)("div",{style:{borderRadius:14,border:"1px solid rgba(255,255,255,.22)",background:"rgba(255,255,255,.12)",padding:s?"7px 8px":"8px 9px",marginBottom:8},children:[(0,o.jsx)("div",{style:{fontSize:s?9:9.6,fontWeight:950,letterSpacing:.25,textTransform:"uppercase",color:"rgba(255,255,255,.72)",lineHeight:1.15},children:R.generatedDateLabel||"Generated"}),(0,o.jsx)("div",{style:{marginTop:1,fontSize:s?10:11,fontWeight:900,color:"#fff",lineHeight:1.18,overflowWrap:"anywhere",fontSize:s?8.8:9.8},children:"Report Card"}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?8:8.8,fontWeight:950,color:"#fff"},children:ea})]}),(0,o.jsx)("div",{style:{borderTop:"1px solid rgba(255,255,255,.22)",paddingTop:7,fontSize:s?6.8:7.4,lineHeight:1.25,color:"rgba(255,255,255,.72)",fontWeight:760},children:"Official academic report generated by Eleeveon Schools."})]})]}),(0,o.jsxs)("main",{style:{minWidth:0},children:[(0,o.jsx)(k,{header:M,dataset:e,settings:R,title:"Terminal / Periodic Academic Report",compact:s,primaryColor:_,fontFamily:Y}),(0,o.jsxs)("section",{style:{marginTop:8,border:"1px solid #d9dee8",borderRadius:12,overflow:"hidden",background:"#fff"},children:[(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, .8fr) minmax(0, 1.2fr)",borderBottom:"1px solid #d9dee8"},children:[{key:"name",label:"Student Name",value:I(L.studentName)},{key:"gender",label:"Gender",value:L.gender||$?.gender||"-"},{key:"admission",label:"Admission No.",value:L.admissionNumber||"-"}].map((e,t)=>(0,o.jsxs)("div",{style:{padding:"7px 6px",minWidth:0,borderLeft:t?"1px solid #d9dee8":void 0},children:[(0,o.jsx)("div",{style:er,children:e.label}),(0,o.jsx)("div",{style:{...ei,fontSize:"name"===e.key?s?12.2:13.5:void 0,marginTop:2},children:e.value})]},e.key))}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.35fr) repeat(3, minmax(0, 1fr))"},children:[{key:"structure",label:"Academic Structure",value:(0,n.ou)(M?.academicStructure?.name,M?.academicStructureName,"-")},{key:"period",label:"Academic Period",value:M.academicPeriod?.name||"-"},{key:"class",label:"Class",value:L.className||"-"},{key:"attendance",label:"Attendance",value:`${L.attendance?.presentDays??0}/${L.attendance?.totalDays??0}`}].filter(e=>"attendance"!==e.key||R.showAttendance).map((e,t)=>(0,o.jsxs)("div",{style:{padding:"7px 6px",minWidth:0,borderLeft:t?"1px solid #d9dee8":void 0},children:[(0,o.jsx)("div",{style:er,children:e.label}),(0,o.jsx)("div",{style:{...ei,marginTop:2},children:e.value})]},e.key))}),R.showNumberOnRoll&&(0,o.jsxs)("div",{style:{padding:"6px 8px",borderTop:"1px solid #d9dee8"},children:[(0,o.jsxs)("span",{style:er,children:[R.numberOnRollLabel||"Number On Roll",": "]}),(0,o.jsx)("span",{style:ei,children:F.numberOnRoll||L.numberOnRoll||L.classSize||e?.numberOnRoll||e?.classSize||"-"})]})]}),(0,o.jsx)("div",{style:{marginTop:8},children:(0,o.jsxs)("table",{style:et.table,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{"data-report-color-block":"true",style:{...et.th,textAlign:"left",minWidth:92},children:"Subject"}),R.showAssessmentBreakdown&&H.map(e=>(0,o.jsxs)("th",{"data-report-color-block":"true",style:et.th,children:[c(e,R),(0,o.jsxs)("div",{style:{fontSize:7.2,marginTop:2,opacity:.88},children:["W:",(0,n.ZV)(e.weight,0)]})]},e.assessmentStructureItemId)),(0,o.jsx)("th",{"data-report-color-block":"true",style:et.th,children:"%"}),R.showGrade&&(0,o.jsx)("th",{"data-report-color-block":"true",style:et.th,children:"Grade"}),R.showSubjectPosition&&(0,o.jsx)("th",{"data-report-color-block":"true",style:et.th,children:R.subjectPositionLabel||"Pos."}),R.showSubjectRemarks&&(0,o.jsx)("th",{"data-report-color-block":"true",style:{...et.th,minWidth:78},children:"Remark"})]})}),(0,o.jsxs)("tbody",{children:[L.subjectResults.map((e,t)=>(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{style:{...et.td,fontWeight:950,fontSize:s?12.8:13.7,lineHeight:1.25,overflowWrap:"break-word",background:t%2==0?"#f8fafc":"#ffffff"},children:[e.subjectName,R.showTeacherNames&&e.teacherName&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:10,opacity:.72,fontWeight:700},children:I(e.teacherName)})]}),R.showAssessmentBreakdown&&H.map(t=>{let r=e.breakdown.find(e=>e.assessmentStructureItemId===t.assessmentStructureItemId);return(0,o.jsx)("td",{style:{...et.td,textAlign:"center"},children:m(r,R,n.ZV)},t.assessmentStructureItemId)}),(0,o.jsx)("td",{style:{...et.td,textAlign:"center",fontWeight:950},children:(0,n.l9)(e.percentage,1,"-")}),R.showGrade&&(0,o.jsx)("td",{style:{...et.td,textAlign:"center"},children:(0,o.jsx)("span",{className:"side-profile-grade-pill",style:{borderColor:_,color:_},children:e.grade})}),R.showSubjectPosition&&(0,o.jsx)("td",{style:{...et.td,textAlign:"center"},children:(0,n.IE)(e.subjectPosition)}),R.showSubjectRemarks&&(0,o.jsx)("td",{style:et.td,children:e.remark})]},e.classSubjectId)),!L.subjectResults.length&&(0,o.jsx)("tr",{children:(0,o.jsx)("td",{style:{...et.td,textAlign:"center",padding:16},colSpan:el,children:"No subject results available for this selected period."})})]})]})}),eo.length>0&&(0,o.jsxs)("section",{style:{marginTop:8,borderRadius:16,border:"1px solid #d9dee8",overflow:"hidden",display:"grid",gridTemplateColumns:`12px repeat(${eo.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,o.jsx)("div",{"data-report-color-block":"true",style:{background:_}}),eo.map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 8px",textAlign:"center",borderLeft:0===t?"0":"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #f8fafc)"},children:[(0,o.jsx)("div",{style:er,children:e.label}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?12.8:14.5,fontWeight:950,color:"#0f172a"},children:e.value})]},e.key))]}),(0,o.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${R.classTeacherLabel}'s Remark`,value:L.classTeacherRemark||""},{label:`${R.headTeacherLabel}'s Remark`,value:L.headTeacherRemark||""}].map(e=>(0,o.jsxs)("div",{style:{border:"1px solid #d9dee8",borderRadius:16,minHeight:48,padding:s?7:8,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:_}}),(0,o.jsx)("div",{style:er,children:e.label}),(0,o.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:s?9:9.8,lineHeight:1.32,color:"#111827"},children:e.value})]},e.label))}),(en||es)&&(0,o.jsxs)("section",{style:{marginTop:8,border:"1px solid #d9dee8",borderRadius:16,padding:s?6:7,background:"#f8fafc",display:"grid",gridTemplateColumns:en&&es?"1fr 24px 1fr":"1fr",gap:6,alignItems:"center"},children:[en&&(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:er,children:"Current Academic Period"}),(0,o.jsx)("div",{style:ei,children:E?.name||M.academicPeriod?.name||"Current Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?8.2:9,fontWeight:900,color:_},children:["Ends:"," ",E?.formattedEndDate||en.replace(/^.*?:\s*/i,"")]})]}),en&&es&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"side-profile-timeline-dot",style:{borderColor:_}})}),es&&(0,o.jsxs)("div",{style:{textAlign:en?"right":"left"},children:[(0,o.jsx)("div",{style:er,children:"Next Academic Period"}),(0,o.jsx)("div",{style:ei,children:G?.name||"Next Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?8.2:9,fontWeight:900,color:_},children:["Begins:"," ",G?.formattedStartDate||es.replace(/^.*?:\s*/i,"")]})]})]}),(0,o.jsx)("section",{style:{marginTop:13,display:"grid",gridTemplateColumns:R.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:16,alignItems:"end"},children:[{label:R.classTeacherLabel,name:I(O.classTeacherName||""),image:"",show:!0},{label:R.headTeacherLabel,name:I((0,n.ou)(O.headTeacherName,O.principalName)),image:Z,show:!0},{label:R.parentLabel,name:I((0,n.ou)(O.parentName,O.guardianName)),image:"",show:R.showParentSignature}].filter(e=>e.show).map(e=>(0,o.jsxs)("div",{style:{textAlign:"center"},children:[e.image&&(0,o.jsx)("img",{src:e.image,alt:"Official signature",style:{height:28,objectFit:"contain",marginBottom:2}}),(0,o.jsx)("div",{style:{minHeight:15,marginBottom:3,fontSize:s?8.6:9.5,fontWeight:950,color:"#111827"},children:e.name}),(0,o.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:s?8.5:9.3,fontWeight:900},children:e.label})]},e.label))}),(0,o.jsxs)("footer",{style:{marginTop:8,borderTop:`2px solid ${_}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:7.3,color:"#475569",fontWeight:700},children:[(0,o.jsxs)("span",{children:["Official academic report • ",D.schoolName]}),(0,o.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]})]});return h?(0,o.jsxs)("div",{className:`src-preview-shell ${u?"expanded":""}`,children:[(0,o.jsx)("style",{children:N}),(0,o.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:I(L.studentName)}),(0,o.jsxs)("span",{children:[L.className," \xb7"," ",M.academicPeriod?.name||"Academic Period"]})]}),(0,o.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>T("out"),onPointerDown:()=>W("out"),onPointerUp:P,onPointerCancel:P,onPointerLeave:P,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,o.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{P(),g(!1),j(1),C(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,o.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,o.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>C(e=>!e),"aria-label":"Choose zoom percentage","aria-expanded":S,title:"Choose zoom percentage",children:[(0,o.jsxs)("span",{children:[A,"%"]}),(0,o.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),S&&(0,o.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(e=>(0,o.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{P(),g(!0),j(Number((e/100).toFixed(4))),C(!1)},className:`src-zoom-menu-item ${Math.round(100*z)===e?"active":""}`,children:[e,"%"]},e))})]}),(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>T("in"),onPointerDown:()=>W("in"),onPointerUp:P,onPointerCancel:P,onPointerLeave:P,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,o.jsx)("div",{ref:b,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":z},children:(0,o.jsx)("div",{className:"src-preview-center",children:(0,o.jsx)("div",{className:"src-preview-scale",children:ed})})})]}):ed},fileName:"SideProfileTemplate.tsx",aliases:["side","profile","side_profile","identity","student_profile"]},{...(0,a.BF)("cambridge"),component:function({dataset:e,template:t,settings:r,compact:s=!1,showWatermark:l=!0,pageBreakAfter:p=!0,mobilePreview:h=!0}){let[u,g]=(0,i.useState)(!1),b=(0,i.useRef)(null),x=(0,i.useRef)(null),f=(0,i.useRef)(null),[w,v]=(0,i.useState)(1),[y,j]=(0,i.useState)(1),[S,k]=(0,i.useState)(!1),I=u?y:w,N=Math.round(100*I),C=(0,i.useCallback)(e=>{j(t=>{let r=u?t:w;return Math.min(2,Math.max(.25,Number(("in"===e?1.01*r:r/1.01).toFixed(4))))}),g(!0)},[u,w]),z=(0,i.useCallback)(()=>{null!=x.current&&(window.clearTimeout(x.current),x.current=null),null!=f.current&&(window.clearInterval(f.current),f.current=null)},[]),A=(0,i.useCallback)(e=>{z(),C(e),x.current=window.setTimeout(()=>{f.current=window.setInterval(()=>{C(e)},55)},260)},[C,z]);(0,i.useEffect)(()=>{if(!h)return;let e=()=>{let e=b.current;if(!e)return;let t=e.getBoundingClientRect();v(Number(Math.min(1,Math.max(120,t.width-8)/793.7008,Math.max(180,window.innerHeight-t.top-8)/1122.5197).toFixed(4)))};e();let t=new ResizeObserver(e);return b.current&&t.observe(b.current),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{t.disconnect(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[h]),(0,i.useEffect)(()=>z,[z]);let R=(0,a.tH)({...a.gv,...r||{},templateCode:"cambridge",layoutKey:"cambridge",templateName:"Cambridge",density:r?.density||(s?"compact":"comfortable")},t||null,null),B=(0,n.J7)({dataset:e,template:t||null,settings:R}),L=e?.report,M=e?.header,$=e?.student,H=(0,i.useMemo)(()=>d(L?.subjectResults,R),[L?.subjectResults,R]);if(!e||!L||!M||!B)return(0,o.jsxs)("div",{className:"src-empty-card cambridge-template-empty",children:[(0,o.jsx)("style",{children:W}),(0,n.p6)(e)]});let{branding:D,studentInfo:F,currentAcademicPeriod:E,nextAcademicPeriod:G,signatures:O}=B,_=D.primaryColor||"var(--primary-color)",Y=D.fontFamily||"Arial, sans-serif",V=D.reportCardBackgroundImage||"",U=D.reportCardWatermark||D.logo||"",Z=O.officialSignatureImage||D.reportCardSignatureImage||"",K=F.studentPhoto||"",X=(0,n.j1)({settings:R,primaryColor:_,fontFamily:Y,compact:s,pageBreakAfter:p}),q=(0,n.h5)({settings:R,primaryColor:_,compact:s}),J=s?"8mm":"9mm",Q={...X,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:J,background:"linear-gradient(180deg, #ffffff, #f8fbff 42%, #ffffff)",color:"#0f172a",border:"1px solid #9fb3d1",borderRadius:12,boxShadow:"0 24px 70px rgba(15,23,42,.13)",overflow:"hidden"},ee={table:{...q.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:6,border:"1px solid #9fb3d1",fontSize:s?11:12.2},th:{...q.th,border:"0",borderBottom:"1px solid #111827",background:"#0f2f5f",color:"#fff",padding:s?"5px 4px":"6px 4px",fontSize:s?10.1:10.9,lineHeight:1.25,whiteSpace:"normal",overflowWrap:"break-word",fontWeight:950},td:{...q.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:s?"4px 4px":"5px 5px",fontSize:s?11.2:12.3,lineHeight:1.25,overflowWrap:"break-word",whiteSpace:"normal",color:"#111827"},label:q.label,value:q.value},et={fontSize:s?9.3:10,fontWeight:950,letterSpacing:.25,textTransform:"uppercase",color:"#64748b",lineHeight:1.15},er={fontSize:s?11.8:12.7,fontWeight:950,color:"#0f172a",lineHeight:1.15,overflowWrap:"anywhere"},ei=(0,n.ou)(M?.academicStructure?.name,M?.academicStructureName,M?.academicYear?.name,M?.academicYearName,L?.academicStructureName,"string"==typeof M?.academicYear?M.academicYear:""),ea=[{key:"studentName",label:"Student Name",value:P(L.studentName),span:2,show:!0},{key:"gender",label:"Gender",value:L.gender||$?.gender||"-",show:!0},{key:"admissionNumber",label:"Admission No.",value:L.admissionNumber||"-",show:!0},{key:"academicStructure",label:"Academic Structure",value:ei||"-",show:!0},{key:"academicPeriod",label:"Academic Period",value:M.academicPeriod?.name||"-",show:!0},{key:"class",label:"Class",value:L.className||"-",show:!0},{key:"attendance",label:"Attendance",value:`${L.attendance?.presentDays||0}/${L.attendance?.totalDays||0}`,show:R.showAttendance}].filter(e=>e.show),eo=R.showNumberOnRoll?[{key:"numberOnRoll",label:R.numberOnRollLabel||"Number On Roll",value:F.numberOnRoll||L.numberOnRoll||L.classSize||e?.numberOnRoll||e?.classSize||"-",show:!0}]:[],en=[{key:"total",label:"Total",value:(0,n.ZV)(L.total,1),show:R.showTotal},{key:"average",label:"Average",value:`${(0,n.ZV)(L.average,1)}%`,show:R.showAverage},{key:"classPosition",label:R.classPositionLabel||"Class Rank",value:(0,n.IE)(L.overallPosition),show:R.showClassPosition},{key:"gpa",label:"GPA",value:null!=L.overallGPA?(0,n.ZV)(L.overallGPA,2):"-",show:R.showGPA}].filter(e=>e.show),es=(0,n.qr)(E,R),el=(0,n.R8)(G,R),ed=R.showGeneratedDate?(0,n.kn)(e?.generatedAt):"",ec=1+(R.showAssessmentBreakdown?H.length:0)+1+ +!!R.showGrade+ +!!R.showSubjectPosition+ +!!R.showSubjectRemarks,em=(0,o.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page cambridge-template-page",style:Q,children:[V&&(0,o.jsx)("img",{src:V,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),l&&R.showWatermark&&U&&(0,o.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,o.jsx)("img",{src:U,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,o.jsx)("div",{"aria-hidden":"true",className:"cambridge-frame-line cambridge-frame-outer",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"cambridge-frame-line cambridge-frame-inner"}),(0,o.jsx)("div",{"aria-hidden":"true",className:"cambridge-corner cambridge-corner-tl",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"cambridge-corner cambridge-corner-tr",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"cambridge-corner cambridge-corner-bl",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"cambridge-corner cambridge-corner-br",style:{borderColor:_}}),(0,o.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,o.jsx)(T,{header:M,dataset:e,settings:R,title:"International Academic Progress Report",compact:s,primaryColor:_,fontFamily:Y}),(0,o.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:R.showStudentPhoto?"94px minmax(0, 1fr)":"1fr",gap:8,alignItems:"stretch"},children:[R.showStudentPhoto&&(0,o.jsx)("div",{style:{border:"1.4px solid #9fb3d1",borderRadius:13,background:"#f8fafc",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:92},children:K?(0,o.jsx)("img",{src:K,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,o.jsx)("span",{style:{fontSize:11,fontWeight:900,color:"#64748b"},children:"PHOTO"})}),(0,o.jsx)("div",{style:{borderRadius:8,border:"1px solid #b8c7dc",background:"linear-gradient(180deg, #ffffff, #f3f8ff)",overflow:"hidden"},children:(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))"},children:[ea.map((e,t)=>(0,o.jsxs)("div",{style:{minWidth:0,gridColumn:e.span?`span ${e.span}`:void 0,padding:s?"7px 8px":"8px 9px",borderRight:2!==t&&6!==t?"1px solid #dbe5f3":void 0,borderBottom:t<3?"1px solid #dbe5f3":void 0},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{...er,marginTop:3,whiteSpace:"normal",overflowWrap:"break-word"},children:e.value})]},e.key)),eo.map(e=>(0,o.jsxs)("div",{style:{gridColumn:"1 / -1",padding:s?"7px 8px":"8px 9px",borderTop:"1px solid #dbe5f3"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{...er,marginTop:3},children:e.value})]},e.key))]})})]}),(0,o.jsx)("div",{style:{marginTop:8},children:(0,o.jsxs)("table",{style:ee.table,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,textAlign:"left",minWidth:98},children:"Subject / Course"}),R.showAssessmentBreakdown&&H.map(e=>(0,o.jsxs)("th",{"data-report-color-block":"true",style:ee.th,children:[c(e,R),(R.showAssessmentWeights||R.showAssessmentMaximumScores)&&(0,o.jsxs)("div",{style:{fontSize:s?9.2:9.7,marginTop:2,opacity:.88},children:[R.showAssessmentWeights?`W:${(0,n.ZV)(e.effectiveWeight??e.weight,0)}`:"",R.showAssessmentWeights&&R.showAssessmentMaximumScores?" \xb7 ":"",R.showAssessmentMaximumScores?`M:${(0,n.ZV)(e.maxScore,0)}`:""]})]},e.assessmentStructureItemId)),(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"%"}),R.showGrade&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"Grade"}),R.showSubjectPosition&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:R.subjectPositionLabel||"Pos."}),R.showSubjectRemarks&&(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,minWidth:86},children:"Remark"})]})}),(0,o.jsxs)("tbody",{children:[L.subjectResults.map((e,t)=>(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{style:{...ee.td,fontWeight:950,fontSize:s?12.5:13.9,lineHeight:1.25,minWidth:s?118:128,whiteSpace:"normal",overflowWrap:"break-word",background:t%2==0?"#f8fafc":"#ffffff"},children:[e.subjectName,R.showTeacherNames&&e.teacherName&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?10:10.8,opacity:.85,fontWeight:700},children:P(e.teacherName)})]}),R.showAssessmentBreakdown&&H.map(t=>{let r=e.breakdown.find(e=>e.assessmentStructureItemId===t.assessmentStructureItemId);return(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:m(r,R,n.ZV)},t.assessmentStructureItemId)}),(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",fontWeight:950},children:(0,n.l9)(e.percentage,1,"-")}),R.showGrade&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,o.jsx)("span",{className:"cambridge-grade-pill",style:{borderColor:_,color:_},children:e.grade})}),R.showSubjectPosition&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,n.IE)(e.subjectPosition)}),R.showSubjectRemarks&&(0,o.jsx)("td",{style:ee.td,children:e.remark})]},e.classSubjectId)),!L.subjectResults.length&&(0,o.jsx)("tr",{children:(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",padding:16},colSpan:ec,children:"No subject results available for this selected period."})})]})]})}),en.length>0&&(0,o.jsxs)("section",{style:{marginTop:8,borderRadius:8,border:"1px solid #b8c7dc",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${en.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,o.jsx)("div",{"data-report-color-block":"true",style:{background:_}}),en.map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===t?"0":"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #f3f8ff)"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?14:15.8,fontWeight:950,color:"#0f172a"},children:e.value})]},e.key))]}),(0,o.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${R.classTeacherLabel}'s Comment`,value:L.classTeacherRemark||""},{label:`${R.headTeacherLabel}'s Comment`,value:L.headTeacherRemark||""}].map(e=>(0,o.jsxs)("div",{style:{border:"1px solid #d9dee8",borderRadius:18,minHeight:52,padding:s?8:9,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:_}}),(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:s?9.6:10.5,lineHeight:1.32,color:"#111827"},children:e.value})]},e.label))}),(es||el||ed)&&(0,o.jsxs)("section",{style:{marginTop:8,border:"1px solid #d9dee8",borderRadius:18,padding:s?7:8,background:"#f8fafc",display:"grid",gridTemplateColumns:[es,el,ed].filter(Boolean).length>=3?"1fr 26px 1fr 26px 1fr":es&&el?"1fr 26px 1fr":"1fr",gap:6,alignItems:"center"},children:[es&&(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:et,children:"Current Academic Period"}),(0,o.jsx)("div",{style:er,children:E?.name||M.academicPeriod?.name||"Current Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?10:10.8,fontWeight:900,color:_},children:["Ends:"," ",E?.formattedEndDate||es.replace(/^.*?:\s*/i,"")]})]}),es&&el&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"cambridge-timeline-marker",style:{borderColor:_}})}),el&&(0,o.jsxs)("div",{style:{textAlign:es?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:"Next Academic Period"}),(0,o.jsx)("div",{style:er,children:G?.name||"Next Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?10:10.8,fontWeight:900,color:_},children:["Begins:"," ",G?.formattedStartDate||el.replace(/^.*?:\s*/i,"")]})]}),ed&&es&&el&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"cambridge-timeline-marker",style:{borderColor:_}})}),ed&&(0,o.jsxs)("div",{style:{textAlign:es||el?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:R.generatedDateLabel||"Generated"}),(0,o.jsx)("div",{style:er,children:"Progress Record"}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?10:10.8,fontWeight:900,color:_},children:ed})]})]}),(0,o.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:R.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:R.classTeacherLabel,name:P(O.classTeacherName),image:"",show:!0},{label:R.headTeacherLabel,name:P((0,n.ou)(O.headTeacherName,O.principalName)),image:Z,show:!0},{label:R.parentLabel,name:P((0,n.ou)(O.parentName,O.guardianName)),image:"",show:R.showParentSignature}].filter(e=>e.show).map(e=>(0,o.jsxs)("div",{style:{textAlign:"center"},children:[e.image&&(0,o.jsx)("img",{src:e.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,o.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:s?10.6:11.6,fontWeight:950,color:"#111827"},children:e.name}),(0,o.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:e.label})]},e.label))}),(0,o.jsxs)("footer",{style:{marginTop:8,borderTop:`2px solid ${_}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:9.3,color:"#475569",fontWeight:700},children:[(0,o.jsxs)("span",{children:["Official international academic progress record for"," ",D.schoolName]}),(0,o.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return h?(0,o.jsxs)("div",{className:`src-preview-shell ${u?"expanded":""}`,children:[(0,o.jsx)("style",{children:W}),(0,o.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:P(L.studentName)}),(0,o.jsxs)("span",{children:[L.className," \xb7"," ",M.academicPeriod?.name||"Academic Period"]})]}),(0,o.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>C("out"),onPointerDown:()=>A("out"),onPointerUp:z,onPointerCancel:z,onPointerLeave:z,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,o.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{z(),g(!1),j(1),k(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,o.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,o.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>k(e=>!e),"aria-label":"Choose zoom percentage","aria-expanded":S,title:"Choose zoom percentage",children:[(0,o.jsxs)("span",{children:[N,"%"]}),(0,o.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),S&&(0,o.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(e=>(0,o.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{z(),g(!0),j(Number((e/100).toFixed(4))),k(!1)},className:`src-zoom-menu-item ${Math.round(100*I)===e?"active":""}`,children:[e,"%"]},e))})]}),(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>C("in"),onPointerDown:()=>A("in"),onPointerUp:z,onPointerCancel:z,onPointerLeave:z,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,o.jsx)("div",{ref:b,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":I},children:(0,o.jsx)("div",{className:"src-preview-center",children:(0,o.jsx)("div",{className:"src-preview-scale",children:em})})})]}):em},fileName:"CambridgeTemplate.tsx",aliases:["cambridge","cambridge_report","international_cambridge"]},{...(0,a.BF)("ib"),component:function({dataset:e,template:t,settings:r,compact:s=!1,showWatermark:l=!0,pageBreakAfter:p=!0,mobilePreview:h=!0}){let[u,g]=(0,i.useState)(!1),b=(0,i.useRef)(null),x=(0,i.useRef)(null),f=(0,i.useRef)(null),[w,v]=(0,i.useState)(1),[y,j]=(0,i.useState)(1),[S,k]=(0,i.useState)(!1),I=u?y:w,N=Math.round(100*I),C=(0,i.useCallback)(e=>{j(t=>{let r=u?t:w;return Math.min(2,Math.max(.25,Number(("in"===e?1.01*r:r/1.01).toFixed(4))))}),g(!0)},[u,w]),z=(0,i.useCallback)(()=>{null!=x.current&&(window.clearTimeout(x.current),x.current=null),null!=f.current&&(window.clearInterval(f.current),f.current=null)},[]),A=(0,i.useCallback)(e=>{z(),C(e),x.current=window.setTimeout(()=>{f.current=window.setInterval(()=>{C(e)},55)},260)},[C,z]);(0,i.useEffect)(()=>{if(!h)return;let e=()=>{let e=b.current;if(!e)return;let t=e.getBoundingClientRect();v(Number(Math.min(1,Math.max(120,t.width-8)/793.7008,Math.max(180,window.innerHeight-t.top-8)/1122.5197).toFixed(4)))};e();let t=new ResizeObserver(e);return b.current&&t.observe(b.current),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{t.disconnect(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[h]),(0,i.useEffect)(()=>z,[z]);let T=(0,a.tH)({...a.gv,...r||{},templateCode:"ib",layoutKey:"ib",templateName:"IB",density:r?.density||(s?"compact":"comfortable")},t||null,null),P=(0,n.J7)({dataset:e,template:t||null,settings:T}),W=e?.report,M=e?.header,$=e?.student,H=(0,i.useMemo)(()=>d(W?.subjectResults,T),[W?.subjectResults,T]);if(!e||!W||!M||!P)return(0,o.jsxs)("div",{className:"src-empty-card ib-template-empty",children:[(0,o.jsx)("style",{children:L}),(0,n.p6)(e)]});let{branding:D,studentInfo:F,currentAcademicPeriod:E,nextAcademicPeriod:G,signatures:O}=P,_=D.primaryColor||"var(--primary-color)",Y=D.fontFamily||"Arial, sans-serif",V=D.reportCardBackgroundImage||"",U=D.reportCardWatermark||D.logo||"",Z=O.officialSignatureImage||D.reportCardSignatureImage||"",K=F.studentPhoto||"",X=(0,n.j1)({settings:T,primaryColor:_,fontFamily:Y,compact:s,pageBreakAfter:p}),q=(0,n.h5)({settings:T,primaryColor:_,compact:s}),J=s?"8mm":"9mm",Q={...X,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:J,background:"linear-gradient(180deg, #ffffff, #f8fbff 42%, #ffffff)",color:"#0f172a",border:"1px solid #99d5cb",borderRadius:12,boxShadow:"0 24px 70px rgba(15,23,42,.13)",overflow:"hidden"},ee={table:{...q.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:6,border:"1px solid #99d5cb",fontSize:s?11.3:12},th:{...q.th,border:"0",borderBottom:"1px solid #111827",background:"#0f766e",color:"#fff",padding:s?"5px 5px":"6px 6px",fontWeight:950,fontSize:s?10.5:11.2,lineHeight:1.22,whiteSpace:"normal",overflowWrap:"break-word"},td:{...q.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:s?"4px 5px":"5px 6px",color:"#111827",fontSize:s?11.5:12.4,lineHeight:1.26,whiteSpace:"normal",overflowWrap:"break-word"},label:q.label,value:q.value},et={fontSize:s?9.5:10.2,fontWeight:950,letterSpacing:.25,textTransform:"uppercase",color:"#64748b",lineHeight:1.15},er={fontSize:s?11.4:12.4,fontWeight:950,color:"#0f172a",lineHeight:1.15,overflowWrap:"anywhere"},ei=[{key:"total",label:"Total",value:(0,n.ZV)(W.total,1),show:T.showTotal},{key:"average",label:"Average",value:`${(0,n.ZV)(W.average,1)}%`,show:T.showAverage},{key:"classPosition",label:T.classPositionLabel||"Class Rank",value:(0,n.IE)(W.overallPosition),show:T.showClassPosition},{key:"gpa",label:"GPA",value:null!=W.overallGPA?(0,n.ZV)(W.overallGPA,2):"-",show:T.showGPA}].filter(e=>e.show),ea=(0,n.qr)(E,T),eo=(0,n.R8)(G,T),en=T.showGeneratedDate?(0,n.kn)(e?.generatedAt):"",es=1+(T.showAssessmentBreakdown?H.length:0)+1+ +!!T.showGrade+ +!!T.showSubjectPosition+ +!!T.showSubjectRemarks,el=(0,o.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page ib-template-page",style:Q,children:[V&&(0,o.jsx)("img",{src:V,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),l&&T.showWatermark&&U&&(0,o.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,o.jsx)("img",{src:U,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,o.jsx)("div",{"aria-hidden":"true",className:"ib-frame-line ib-frame-outer",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"ib-frame-line ib-frame-inner"}),(0,o.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-tl",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-tr",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-bl",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-br",style:{borderColor:_}}),(0,o.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,o.jsx)(R,{header:M,dataset:e,settings:T,title:"International Learner Progress Report",compact:s,primaryColor:_,fontFamily:Y}),(0,o.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:T.showStudentPhoto?"minmax(0, 1fr) 86px":"1fr",gap:8,alignItems:"stretch"},children:[(0,o.jsxs)("div",{style:{border:"1px solid #b8e0d6",borderRadius:10,background:"linear-gradient(180deg, #ffffff, #f6fffb)",overflow:"hidden"},children:[(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, .8fr) minmax(0, 1.2fr)",gap:0,borderBottom:"1px solid #b8e0d6"},children:[(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0},children:[(0,o.jsx)("div",{style:et,children:"Student Name"}),(0,o.jsx)("div",{style:{...er,marginTop:2,fontSize:s?12.6:14.2,overflowWrap:"anywhere"},children:B(W.studentName)})]}),(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #b8e0d6"},children:[(0,o.jsx)("div",{style:et,children:"Gender"}),(0,o.jsx)("div",{style:{...er,marginTop:2},children:W.gender||$?.gender||"-"})]}),(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #b8e0d6"},children:[(0,o.jsx)("div",{style:et,children:"Admission No."}),(0,o.jsx)("div",{style:{...er,marginTop:2},children:W.admissionNumber||"-"})]})]}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"},children:[{key:"structure",label:"Academic Structure",value:(0,n.ou)(M?.academicStructure?.name,M?.academicStructureName,"-")},{key:"period",label:"Academic Period",value:(0,n.ou)(M.academicPeriod?.name,M?.academicPeriodName,"-")},{key:"class",label:"Class",value:W.className||"-"},{key:"attendance",label:"Attendance",value:`${W.attendance?.presentDays??0}/${W.attendance?.totalDays??0}`}].filter(e=>"attendance"!==e.key||T.showAttendance).map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:0===t?void 0:"1px solid #b8e0d6"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{...er,marginTop:2,overflowWrap:"anywhere"},children:e.value})]},e.key))}),T.showNumberOnRoll&&(0,o.jsxs)("div",{style:{padding:s?"5px 7px":"6px 9px",borderTop:"1px solid #b8e0d6"},children:[(0,o.jsxs)("span",{style:et,children:[T.numberOnRollLabel||"Number On Roll",": "]}),(0,o.jsx)("span",{style:er,children:F.numberOnRoll||W.numberOnRoll||W.classSize||e?.numberOnRoll||e?.classSize||"-"})]})]}),T.showStudentPhoto&&(0,o.jsx)("div",{style:{border:"1px solid #99d5cb",borderRadius:10,background:"#fff",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:96},children:K?(0,o.jsx)("img",{src:K,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,o.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]}),(0,o.jsx)("div",{style:{marginTop:8},children:(0,o.jsxs)("table",{style:ee.table,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,textAlign:"left",minWidth:98},children:"Learning Area / Subject"}),T.showAssessmentBreakdown&&H.map(e=>(0,o.jsxs)("th",{"data-report-color-block":"true",style:ee.th,children:[c(e,T),(T.showAssessmentWeights||T.showAssessmentMaximumScores)&&(0,o.jsxs)("div",{style:{fontSize:7.5,marginTop:2,opacity:.88},children:[T.showAssessmentWeights?`W:${(0,n.ZV)(e.effectiveWeight??e.weight,0)}`:"",T.showAssessmentWeights&&T.showAssessmentMaximumScores?" \xb7 ":"",T.showAssessmentMaximumScores?`M:${(0,n.ZV)(e.maxScore,0)}`:""]})]},e.assessmentStructureItemId)),(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"%"}),T.showGrade&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"Grade"}),T.showSubjectPosition&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:T.subjectPositionLabel||"Pos."}),T.showSubjectRemarks&&(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,minWidth:86},children:"Remark"})]})}),(0,o.jsxs)("tbody",{children:[W.subjectResults.map((e,t)=>(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{style:{...ee.td,fontWeight:950,fontSize:s?12.8:13.7,lineHeight:1.25,overflowWrap:"break-word",background:t%2==0?"#f8fafc":"#ffffff"},children:[e.subjectName,T.showTeacherNames&&e.teacherName&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:10.2,opacity:.72,fontWeight:700},children:B(e.teacherName)})]}),T.showAssessmentBreakdown&&H.map(t=>{let r=e.breakdown.find(e=>e.assessmentStructureItemId===t.assessmentStructureItemId);return(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:m(r,T,n.ZV)},t.assessmentStructureItemId)}),(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",fontWeight:950},children:(0,n.l9)(e.percentage,1,"-")}),T.showGrade&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,o.jsx)("span",{className:"ib-grade-pill",style:{borderColor:_,color:_},children:e.grade})}),T.showSubjectPosition&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,n.IE)(e.subjectPosition)}),T.showSubjectRemarks&&(0,o.jsx)("td",{style:ee.td,children:e.remark})]},e.classSubjectId)),!W.subjectResults.length&&(0,o.jsx)("tr",{children:(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",padding:16},colSpan:es,children:"No subject results available for this selected period."})})]})]})}),ei.length>0&&(0,o.jsxs)("section",{style:{marginTop:8,borderRadius:8,border:"1px solid #b8c7dc",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${ei.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,o.jsx)("div",{"data-report-color-block":"true",style:{background:_}}),ei.map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===t?"0":"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #f6fffb)"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?14:15.8,fontWeight:950,color:"#0f172a"},children:e.value})]},e.key))]}),(0,o.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${T.classTeacherLabel}'s Comment`,value:W.classTeacherRemark||""},{label:`${T.headTeacherLabel}'s Comment`,value:W.headTeacherRemark||""}].map(e=>(0,o.jsxs)("div",{style:{border:"1px solid #d9dee8",borderRadius:18,minHeight:52,padding:s?8:9,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:_}}),(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:s?9.6:10.5,lineHeight:1.32,color:"#111827"},children:e.value})]},e.label))}),(ea||eo||en)&&(0,o.jsxs)("section",{style:{marginTop:8,border:"1px solid #d9dee8",borderRadius:18,padding:s?7:8,background:"#f8fafc",display:"grid",gridTemplateColumns:[ea,eo,en].filter(Boolean).length>=3?"1fr 26px 1fr 26px 1fr":ea&&eo?"1fr 26px 1fr":"1fr",gap:6,alignItems:"center"},children:[ea&&(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:et,children:"Current Academic Period"}),(0,o.jsx)("div",{style:er,children:E?.name||M.academicPeriod?.name||"Current Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:["Ends:"," ",E?.formattedEndDate||ea.replace(/^.*?:\s*/i,"")]})]}),ea&&eo&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"ib-timeline-marker",style:{borderColor:_}})}),eo&&(0,o.jsxs)("div",{style:{textAlign:ea?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:"Next Academic Period"}),(0,o.jsx)("div",{style:er,children:G?.name||"Next Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:["Begins:"," ",G?.formattedStartDate||eo.replace(/^.*?:\s*/i,"")]})]}),en&&ea&&eo&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"ib-timeline-marker",style:{borderColor:_}})}),en&&(0,o.jsxs)("div",{style:{textAlign:ea||eo?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:T.generatedDateLabel||"Generated"}),(0,o.jsx)("div",{style:er,children:"Progress Record"}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:en})]})]}),(0,o.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:T.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:T.classTeacherLabel,name:B(O.classTeacherName||""),image:"",show:!0},{label:T.headTeacherLabel,name:B((0,n.ou)(O.headTeacherName,O.principalName)),image:Z,show:!0},{label:T.parentLabel,name:B((0,n.ou)(O.parentName,O.guardianName)),image:"",show:T.showParentSignature}].filter(e=>e.show).map(e=>(0,o.jsxs)("div",{style:{textAlign:"center"},children:[e.image&&(0,o.jsx)("img",{src:e.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,o.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:s?10.5:11.5,fontWeight:950,color:"#111827"},children:e.name}),(0,o.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:e.label})]},e.label))}),(0,o.jsxs)("footer",{style:{marginTop:8,borderTop:`2px solid ${_}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:7.8,color:"#475569",fontWeight:700},children:[(0,o.jsxs)("span",{children:["Official international academic progress record for"," ",D.schoolName]}),(0,o.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return h?(0,o.jsxs)("div",{className:`src-preview-shell ${u?"expanded":""}`,children:[(0,o.jsx)("style",{children:L}),(0,o.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:B(W.studentName)}),(0,o.jsxs)("span",{children:[W.className," \xb7"," ",M.academicPeriod?.name||"Academic Period"]})]}),(0,o.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>C("out"),onPointerDown:()=>A("out"),onPointerUp:z,onPointerCancel:z,onPointerLeave:z,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,o.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{z(),g(!1),j(1),k(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,o.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,o.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>k(e=>!e),"aria-label":"Choose zoom percentage","aria-expanded":S,title:"Choose zoom percentage",children:[(0,o.jsxs)("span",{children:[N,"%"]}),(0,o.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),S&&(0,o.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(e=>(0,o.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{z(),g(!0),j(Number((e/100).toFixed(4))),k(!1)},className:`src-zoom-menu-item ${Math.round(100*I)===e?"active":""}`,children:[e,"%"]},e))})]}),(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>C("in"),onPointerDown:()=>A("in"),onPointerUp:z,onPointerCancel:z,onPointerLeave:z,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,o.jsx)("div",{ref:b,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":I},children:(0,o.jsx)("div",{className:"src-preview-center",children:(0,o.jsx)("div",{className:"src-preview-scale",children:el})})})]}):el},fileName:"IBTemplate.tsx",aliases:["ib","international_baccalaureate","baccalaureate"]},{...(0,a.BF)("kindergarten"),component:function({dataset:e,template:t,settings:r,compact:s=!1,showWatermark:l=!0,pageBreakAfter:p=!0,mobilePreview:h=!0}){let[u,g]=(0,i.useState)(!1),b=(0,i.useRef)(null),x=(0,i.useRef)(null),f=(0,i.useRef)(null),[w,v]=(0,i.useState)(1),[y,j]=(0,i.useState)(1),[S,k]=(0,i.useState)(!1),I=u?y:w,N=Math.round(100*I),C=(0,i.useCallback)(e=>{j(t=>{let r=u?t:w;return Math.min(2,Math.max(.25,Number(("in"===e?1.01*r:r/1.01).toFixed(4))))}),g(!0)},[u,w]),z=(0,i.useCallback)(()=>{null!=x.current&&(window.clearTimeout(x.current),x.current=null),null!=f.current&&(window.clearInterval(f.current),f.current=null)},[]),A=(0,i.useCallback)(e=>{z(),C(e),x.current=window.setTimeout(()=>{f.current=window.setInterval(()=>{C(e)},55)},260)},[C,z]);(0,i.useEffect)(()=>{if(!h)return;let e=()=>{let e=b.current;if(!e)return;let t=e.getBoundingClientRect();v(Number(Math.min(1,Math.max(120,t.width-8)/793.7008,Math.max(180,window.innerHeight-t.top-8)/1122.5197).toFixed(4)))};e();let t=new ResizeObserver(e);return b.current&&t.observe(b.current),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{t.disconnect(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[h]),(0,i.useEffect)(()=>z,[z]);let T=(0,a.tH)({...a.gv,...r||{},templateCode:"kindergarten",layoutKey:"kindergarten",templateName:"Kindergarten",density:r?.density||(s?"compact":"comfortable")},t||null,null),P=(0,n.J7)({dataset:e,template:t||null,settings:T}),W=e?.report,R=e?.header,B=e?.student,L=(0,i.useMemo)(()=>d(W?.subjectResults,T),[W?.subjectResults,T]);if(!e||!W||!R||!P)return(0,o.jsxs)("div",{className:"src-empty-card kindergarten-template-empty",children:[(0,o.jsx)("style",{children:H}),(0,n.p6)(e)]});let{branding:D,studentInfo:F,currentAcademicPeriod:E,nextAcademicPeriod:G,signatures:O}=P,_=D.primaryColor||"var(--primary-color)",Y=D.fontFamily||"Arial, sans-serif",V=D.reportCardBackgroundImage||"",U=D.reportCardWatermark||D.logo||"",Z=O.officialSignatureImage||D.reportCardSignatureImage||"",K=F.studentPhoto||"",X=(0,n.j1)({settings:T,primaryColor:_,fontFamily:Y,compact:s,pageBreakAfter:p}),q=(0,n.h5)({settings:T,primaryColor:_,compact:s}),J=s?"8mm":"9mm",Q={...X,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:J,background:"linear-gradient(180deg, #ffffff, #f8fbff 42%, #ffffff)",color:"#1f2937",border:"1px solid #fed7aa",borderRadius:12,boxShadow:"0 24px 70px rgba(15,23,42,.13)",overflow:"hidden"},ee={table:{...q.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:6,border:"1px solid #fed7aa",fontSize:s?11.3:12},th:{...q.th,border:"0",borderBottom:"1px solid #111827",background:"#ea580c",color:"#fff",padding:s?"5px 5px":"6px 6px",fontWeight:950,fontSize:s?10.5:11.2,lineHeight:1.22,whiteSpace:"normal",overflowWrap:"break-word"},td:{...q.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:s?"4px 5px":"5px 6px",color:"#111827",fontSize:s?11.5:12.4,lineHeight:1.26,whiteSpace:"normal",overflowWrap:"break-word"},label:q.label,value:q.value},et={fontSize:s?9.5:10.2,fontWeight:950,letterSpacing:.2,textTransform:"uppercase",color:"#78716c",lineHeight:1.15},er={fontSize:s?11.4:12.4,fontWeight:950,color:"#1f2937",lineHeight:1.15,overflowWrap:"anywhere"},ei=[{key:"total",label:"Total",value:(0,n.ZV)(W.total,1),show:T.showTotal},{key:"average",label:"Average",value:`${(0,n.ZV)(W.average,1)}%`,show:T.showAverage},{key:"classPosition",label:T.classPositionLabel||"Class Rank",value:(0,n.IE)(W.overallPosition),show:T.showClassPosition},{key:"gpa",label:"GPA",value:null!=W.overallGPA?(0,n.ZV)(W.overallGPA,2):"-",show:T.showGPA}].filter(e=>e.show),ea=(0,n.qr)(E,T),eo=(0,n.R8)(G,T),en=T.showGeneratedDate?(0,n.kn)(e?.generatedAt):"",es=1+(T.showAssessmentBreakdown?L.length:0)+1+ +!!T.showGrade+ +!!T.showSubjectPosition+ +!!T.showSubjectRemarks,el=(0,o.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page kindergarten-template-page",style:Q,children:[V&&(0,o.jsx)("img",{src:V,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),l&&T.showWatermark&&U&&(0,o.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,o.jsx)("img",{src:U,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,o.jsx)("div",{"aria-hidden":"true",className:"ib-frame-line ib-frame-outer",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"ib-frame-line ib-frame-inner"}),(0,o.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-tl",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-tr",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-bl",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-br",style:{borderColor:_}}),(0,o.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,o.jsx)(M,{header:R,dataset:e,settings:T,title:"Early Years Progress Report",compact:s,primaryColor:_,fontFamily:Y}),(0,o.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:T.showStudentPhoto?"minmax(0, 1fr) 86px":"1fr",gap:8,alignItems:"stretch"},children:[(0,o.jsxs)("div",{style:{border:"1px solid #fed7aa",borderRadius:16,background:"linear-gradient(180deg, #ffffff, #fff7ed)",overflow:"hidden"},children:[(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, .8fr) minmax(0, 1.2fr)",gap:0,borderBottom:"1px solid #fed7aa"},children:[(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0},children:[(0,o.jsx)("div",{style:et,children:"Student Name"}),(0,o.jsx)("div",{style:{...er,marginTop:2,fontSize:s?12.6:14.2,overflowWrap:"anywhere"},children:$(W.studentName)})]}),(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #fed7aa"},children:[(0,o.jsx)("div",{style:et,children:"Gender"}),(0,o.jsx)("div",{style:{...er,marginTop:2},children:W.gender||B?.gender||"-"})]}),(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #fed7aa"},children:[(0,o.jsx)("div",{style:et,children:"Admission No."}),(0,o.jsx)("div",{style:{...er,marginTop:2},children:W.admissionNumber||"-"})]})]}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"},children:[{key:"structure",label:"Academic Structure",value:(0,n.ou)(R?.academicStructure?.name,R?.academicStructureName,"-")},{key:"period",label:"Academic Period",value:(0,n.ou)(R.academicPeriod?.name,R?.academicPeriodName,"-")},{key:"class",label:"Class",value:W.className||"-"},{key:"attendance",label:"Attendance",value:`${W.attendance?.presentDays??0}/${W.attendance?.totalDays??0}`}].filter(e=>"attendance"!==e.key||T.showAttendance).map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:0===t?void 0:"1px solid #fed7aa"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{...er,marginTop:2,overflowWrap:"anywhere"},children:e.value})]},e.key))}),T.showNumberOnRoll&&(0,o.jsxs)("div",{style:{padding:s?"5px 7px":"6px 9px",borderTop:"1px solid #fed7aa"},children:[(0,o.jsxs)("span",{style:et,children:[T.numberOnRollLabel||"Number On Roll",": "]}),(0,o.jsx)("span",{style:er,children:F.numberOnRoll||W.numberOnRoll||W.classSize||e?.numberOnRoll||e?.classSize||"-"})]})]}),T.showStudentPhoto&&(0,o.jsx)("div",{style:{border:"1px solid #fed7aa",borderRadius:16,background:"#fff",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:96},children:K?(0,o.jsx)("img",{src:K,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,o.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]}),(0,o.jsx)("div",{style:{marginTop:8},children:(0,o.jsxs)("table",{style:ee.table,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,textAlign:"left",minWidth:98},children:"Learning Area / Learning Area"}),T.showAssessmentBreakdown&&L.map(e=>(0,o.jsxs)("th",{"data-report-color-block":"true",style:ee.th,children:[c(e,T),(T.showAssessmentWeights||T.showAssessmentMaximumScores)&&(0,o.jsxs)("div",{style:{fontSize:7.5,marginTop:2,opacity:.88},children:[T.showAssessmentWeights?`W:${(0,n.ZV)(e.effectiveWeight??e.weight,0)}`:"",T.showAssessmentWeights&&T.showAssessmentMaximumScores?" \xb7 ":"",T.showAssessmentMaximumScores?`M:${(0,n.ZV)(e.maxScore,0)}`:""]})]},e.assessmentStructureItemId)),(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"%"}),T.showGrade&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"Grade"}),T.showSubjectPosition&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:T.subjectPositionLabel||"Pos."}),T.showSubjectRemarks&&(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,minWidth:86},children:"Remark"})]})}),(0,o.jsxs)("tbody",{children:[W.subjectResults.map((e,t)=>(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{style:{...ee.td,fontWeight:950,fontSize:s?12.8:13.7,lineHeight:1.25,overflowWrap:"break-word",background:t%2==0?"#f8fafc":"#ffffff"},children:[e.subjectName,T.showTeacherNames&&e.teacherName&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:10.2,opacity:.72,fontWeight:700},children:$(e.teacherName)})]}),T.showAssessmentBreakdown&&L.map(t=>{let r=e.breakdown.find(e=>e.assessmentStructureItemId===t.assessmentStructureItemId);return(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:m(r,T,n.ZV)},t.assessmentStructureItemId)}),(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",fontWeight:950},children:(0,n.l9)(e.percentage,1,"-")}),T.showGrade&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,o.jsx)("span",{className:"kindergarten-grade-badge",style:{borderColor:_,color:_},children:e.grade})}),T.showSubjectPosition&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,n.IE)(e.subjectPosition)}),T.showSubjectRemarks&&(0,o.jsx)("td",{style:ee.td,children:e.remark})]},e.classSubjectId)),!W.subjectResults.length&&(0,o.jsx)("tr",{children:(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",padding:16},colSpan:es,children:"No subject results available for this selected period."})})]})]})}),ei.length>0&&(0,o.jsxs)("section",{style:{marginTop:8,borderRadius:18,border:"1px solid #b8c7dc",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${ei.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,o.jsx)("div",{"data-report-color-block":"true",style:{background:_}}),ei.map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===t?"0":"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #9a621e)"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?14:15.8,fontWeight:950,color:"#1f2937"},children:e.value})]},e.key))]}),(0,o.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${T.classTeacherLabel}'s Comment`,value:W.classTeacherRemark||""},{label:`${T.headTeacherLabel}'s Comment`,value:W.headTeacherRemark||""}].map(e=>(0,o.jsxs)("div",{style:{border:"1px solid #d9dee8",borderRadius:18,minHeight:52,padding:s?8:9,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:_}}),(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:s?9.6:10.5,lineHeight:1.32,color:"#111827"},children:e.value})]},e.label))}),(ea||eo||en)&&(0,o.jsxs)("section",{style:{marginTop:8,border:"1px solid #d9dee8",borderRadius:18,padding:s?7:8,background:"#f8fafc",display:"grid",gridTemplateColumns:[ea,eo,en].filter(Boolean).length>=3?"1fr 26px 1fr 26px 1fr":ea&&eo?"1fr 26px 1fr":"1fr",gap:6,alignItems:"center"},children:[ea&&(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:et,children:"Current Academic Period"}),(0,o.jsx)("div",{style:er,children:E?.name||R.academicPeriod?.name||"Current Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:["Ends:"," ",E?.formattedEndDate||ea.replace(/^.*?:\s*/i,"")]})]}),ea&&eo&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"ib-timeline-marker",style:{borderColor:_}})}),eo&&(0,o.jsxs)("div",{style:{textAlign:ea?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:"Next Academic Period"}),(0,o.jsx)("div",{style:er,children:G?.name||"Next Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:["Begins:"," ",G?.formattedStartDate||eo.replace(/^.*?:\s*/i,"")]})]}),en&&ea&&eo&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"ib-timeline-marker",style:{borderColor:_}})}),en&&(0,o.jsxs)("div",{style:{textAlign:ea||eo?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:T.generatedDateLabel||"Generated"}),(0,o.jsx)("div",{style:er,children:"Progress Record"}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:en})]})]}),(0,o.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:T.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:T.classTeacherLabel,name:$(O.classTeacherName||""),image:"",show:!0},{label:T.headTeacherLabel,name:$((0,n.ou)(O.headTeacherName,O.principalName)),image:Z,show:!0},{label:T.parentLabel,name:$((0,n.ou)(O.parentName,O.guardianName)),image:"",show:T.showParentSignature}].filter(e=>e.show).map(e=>(0,o.jsxs)("div",{style:{textAlign:"center"},children:[e.image&&(0,o.jsx)("img",{src:e.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,o.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:s?10.5:11.5,fontWeight:950,color:"#111827"},children:e.name}),(0,o.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:e.label})]},e.label))}),(0,o.jsxs)("footer",{style:{marginTop:8,borderTop:`2px solid ${_}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:7.8,color:"#6b7280",fontWeight:700},children:[(0,o.jsxs)("span",{children:["Official international academic progress record for"," ",D.schoolName]}),(0,o.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return h?(0,o.jsxs)("div",{className:`src-preview-shell ${u?"expanded":""}`,children:[(0,o.jsx)("style",{children:H}),(0,o.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:$(W.studentName)}),(0,o.jsxs)("span",{children:[W.className," \xb7"," ",R.academicPeriod?.name||"Academic Period"]})]}),(0,o.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>C("out"),onPointerDown:()=>A("out"),onPointerUp:z,onPointerCancel:z,onPointerLeave:z,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,o.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{z(),g(!1),j(1),k(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,o.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,o.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>k(e=>!e),"aria-label":"Choose zoom percentage","aria-expanded":S,title:"Choose zoom percentage",children:[(0,o.jsxs)("span",{children:[N,"%"]}),(0,o.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),S&&(0,o.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(e=>(0,o.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{z(),g(!0),j(Number((e/100).toFixed(4))),k(!1)},className:`src-zoom-menu-item ${Math.round(100*I)===e?"active":""}`,children:[e,"%"]},e))})]}),(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>C("in"),onPointerDown:()=>A("in"),onPointerUp:z,onPointerCancel:z,onPointerLeave:z,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,o.jsx)("div",{ref:b,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":I},children:(0,o.jsx)("div",{className:"src-preview-center",children:(0,o.jsx)("div",{className:"src-preview-scale",children:el})})})]}):el},fileName:"KindergartenTemplate.tsx",aliases:["kindergarten","kg","early_years","nursery"]},{...(0,a.BF)("montessori"),component:function({dataset:e,template:t,settings:r,compact:s=!1,showWatermark:l=!0,pageBreakAfter:p=!0,mobilePreview:h=!0}){let[u,g]=(0,i.useState)(!1),b=(0,i.useRef)(null),x=(0,i.useRef)(null),f=(0,i.useRef)(null),[w,v]=(0,i.useState)(1),[y,j]=(0,i.useState)(1),[S,k]=(0,i.useState)(!1),I=u?y:w,N=Math.round(100*I),C=(0,i.useCallback)(e=>{j(t=>{let r=u?t:w;return Math.min(2,Math.max(.25,Number(("in"===e?1.01*r:r/1.01).toFixed(4))))}),g(!0)},[u,w]),z=(0,i.useCallback)(()=>{null!=x.current&&(window.clearTimeout(x.current),x.current=null),null!=f.current&&(window.clearInterval(f.current),f.current=null)},[]),A=(0,i.useCallback)(e=>{z(),C(e),x.current=window.setTimeout(()=>{f.current=window.setInterval(()=>{C(e)},55)},260)},[C,z]);(0,i.useEffect)(()=>{if(!h)return;let e=()=>{let e=b.current;if(!e)return;let t=e.getBoundingClientRect();v(Number(Math.min(1,Math.max(120,t.width-8)/793.7008,Math.max(180,window.innerHeight-t.top-8)/1122.5197).toFixed(4)))};e();let t=new ResizeObserver(e);return b.current&&t.observe(b.current),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{t.disconnect(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[h]),(0,i.useEffect)(()=>z,[z]);let T=(0,a.tH)({...a.gv,...r||{},templateCode:"montessori",layoutKey:"montessori",templateName:"Montessori",density:r?.density||(s?"compact":"comfortable")},t||null,null),P=(0,n.J7)({dataset:e,template:t||null,settings:T}),W=e?.report,R=e?.header,B=e?.student,L=(0,i.useMemo)(()=>d(W?.subjectResults,T),[W?.subjectResults,T]);if(!e||!W||!R||!P)return(0,o.jsxs)("div",{className:"src-empty-card montessori-template-empty",children:[(0,o.jsx)("style",{children:E}),(0,n.p6)(e)]});let{branding:M,studentInfo:$,currentAcademicPeriod:H,nextAcademicPeriod:G,signatures:O}=P,_=M.primaryColor||"var(--primary-color)",Y=M.fontFamily||"Arial, sans-serif",V=M.reportCardBackgroundImage||"",U=M.reportCardWatermark||M.logo||"",Z=O.officialSignatureImage||M.reportCardSignatureImage||"",K=$.studentPhoto||"",X=(0,n.j1)({settings:T,primaryColor:_,fontFamily:Y,compact:s,pageBreakAfter:p}),q=(0,n.h5)({settings:T,primaryColor:_,compact:s}),J=s?"8mm":"9mm",Q={...X,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:J,background:"linear-gradient(180deg, #fffdf7, #ffffff 42%, #f8faf4)",color:"#243126",border:"1px solid #d9cbb3",borderRadius:6,boxShadow:"0 24px 70px rgba(15,23,42,.13)",overflow:"hidden"},ee={table:{...q.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:6,border:"1px solid #d9cbb3",fontSize:s?11.3:12},th:{...q.th,border:"0",borderBottom:"1px solid #111827",background:"#6b7f4e",color:"#fff",padding:s?"5px 5px":"6px 6px",fontWeight:950,fontSize:s?10.5:11.2,lineHeight:1.22,whiteSpace:"normal",overflowWrap:"break-word"},td:{...q.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:s?"4px 5px":"5px 6px",color:"#111827",fontSize:s?11.5:12.4,lineHeight:1.26,whiteSpace:"normal",overflowWrap:"break-word"},label:q.label,value:q.value},et={fontSize:s?9.5:10.2,fontWeight:950,letterSpacing:.2,textTransform:"uppercase",color:"#6f6a5f",lineHeight:1.15},er={fontSize:s?11.4:12.4,fontWeight:950,color:"#243126",lineHeight:1.15,overflowWrap:"anywhere"},ei=[{key:"total",label:"Total",value:(0,n.ZV)(W.total,1),show:T.showTotal},{key:"average",label:"Average",value:`${(0,n.ZV)(W.average,1)}%`,show:T.showAverage},{key:"classPosition",label:T.classPositionLabel||"Class Standing",value:(0,n.IE)(W.overallPosition),show:T.showClassPosition},{key:"gpa",label:"GPA",value:null!=W.overallGPA?(0,n.ZV)(W.overallGPA,2):"-",show:T.showGPA}].filter(e=>e.show),ea=(0,n.qr)(H,T),eo=(0,n.R8)(G,T),en=T.showGeneratedDate?(0,n.kn)(e?.generatedAt):"",es=1+(T.showAssessmentBreakdown?L.length:0)+1+ +!!T.showGrade+ +!!T.showSubjectPosition+ +!!T.showSubjectRemarks,el=(0,o.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page montessori-template-page",style:Q,children:[V&&(0,o.jsx)("img",{src:V,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),l&&T.showWatermark&&U&&(0,o.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,o.jsx)("img",{src:U,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,o.jsx)("div",{"aria-hidden":"true",className:"montessori-frame-line montessori-frame-outer",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"montessori-frame-line montessori-frame-inner"}),(0,o.jsx)("div",{"aria-hidden":"true",className:"montessori-corner montessori-corner-tl",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"montessori-corner montessori-corner-tr",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"montessori-corner montessori-corner-bl",style:{borderColor:_}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"montessori-corner montessori-corner-br",style:{borderColor:_}}),(0,o.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,o.jsx)(D,{header:R,dataset:e,settings:T,title:"Montessori Learning Record",compact:s,primaryColor:_,fontFamily:Y}),(0,o.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:T.showStudentPhoto?"minmax(0, 1fr) 86px":"1fr",gap:8,alignItems:"stretch"},children:[(0,o.jsxs)("div",{style:{border:"1px solid #d9cbb3",borderRadius:14,background:"linear-gradient(180deg, #fffdf7, #ffffff)",overflow:"hidden"},children:[(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, .8fr) minmax(0, 1.2fr)",gap:0,borderBottom:"1px solid #d9cbb3"},children:[(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0},children:[(0,o.jsx)("div",{style:et,children:"Student Name"}),(0,o.jsx)("div",{style:{...er,marginTop:2,fontSize:s?12.6:14.2,overflowWrap:"anywhere"},children:F(W.studentName)})]}),(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #d9cbb3"},children:[(0,o.jsx)("div",{style:et,children:"Gender"}),(0,o.jsx)("div",{style:{...er,marginTop:2},children:W.gender||B?.gender||"-"})]}),(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #d9cbb3"},children:[(0,o.jsx)("div",{style:et,children:"Admission No."}),(0,o.jsx)("div",{style:{...er,marginTop:2},children:W.admissionNumber||"-"})]})]}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"},children:[{key:"structure",label:"Academic Structure",value:(0,n.ou)(R?.academicStructure?.name,R?.academicStructureName,"-")},{key:"period",label:"Academic Period",value:(0,n.ou)(R.academicPeriod?.name,R?.academicPeriodName,"-")},{key:"class",label:"Class",value:W.className||"-"},{key:"attendance",label:"Attendance",value:`${W.attendance?.presentDays??0}/${W.attendance?.totalDays??0}`}].filter(e=>"attendance"!==e.key||T.showAttendance).map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:0===t?void 0:"1px solid #d9cbb3"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{...er,marginTop:2,overflowWrap:"anywhere"},children:e.value})]},e.key))}),T.showNumberOnRoll&&(0,o.jsxs)("div",{style:{padding:s?"5px 7px":"6px 9px",borderTop:"1px solid #d9cbb3"},children:[(0,o.jsxs)("span",{style:et,children:[T.numberOnRollLabel||"Number On Roll",": "]}),(0,o.jsx)("span",{style:er,children:$.numberOnRoll||W.numberOnRoll||W.classSize||e?.numberOnRoll||e?.classSize||"-"})]})]}),T.showStudentPhoto&&(0,o.jsx)("div",{style:{border:"1px solid #d9cbb3",borderRadius:14,background:"#fff",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:96},children:K?(0,o.jsx)("img",{src:K,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,o.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]}),(0,o.jsx)("div",{style:{marginTop:8},children:(0,o.jsxs)("table",{style:ee.table,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,textAlign:"left",minWidth:98},children:"Learning Area"}),T.showAssessmentBreakdown&&L.map(e=>(0,o.jsxs)("th",{"data-report-color-block":"true",style:ee.th,children:[c(e,T),(T.showAssessmentWeights||T.showAssessmentMaximumScores)&&(0,o.jsxs)("div",{style:{fontSize:7.5,marginTop:2,opacity:.88},children:[T.showAssessmentWeights?`W:${(0,n.ZV)(e.effectiveWeight??e.weight,0)}`:"",T.showAssessmentWeights&&T.showAssessmentMaximumScores?" \xb7 ":"",T.showAssessmentMaximumScores?`M:${(0,n.ZV)(e.maxScore,0)}`:""]})]},e.assessmentStructureItemId)),(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"%"}),T.showGrade&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"Grade"}),T.showSubjectPosition&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:T.subjectPositionLabel||"Pos."}),T.showSubjectRemarks&&(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,minWidth:86},children:"Remark"})]})}),(0,o.jsxs)("tbody",{children:[W.subjectResults.map((e,t)=>(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{style:{...ee.td,fontWeight:950,fontSize:s?12.8:13.7,lineHeight:1.25,overflowWrap:"break-word",background:t%2==0?"#f8fafc":"#ffffff"},children:[e.subjectName,T.showTeacherNames&&e.teacherName&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:10.2,opacity:.72,fontWeight:700},children:F(e.teacherName)})]}),T.showAssessmentBreakdown&&L.map(t=>{let r=e.breakdown.find(e=>e.assessmentStructureItemId===t.assessmentStructureItemId);return(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:m(r,T,n.ZV)},t.assessmentStructureItemId)}),(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",fontWeight:950},children:(0,n.l9)(e.percentage,1,"-")}),T.showGrade&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,o.jsx)("span",{className:"montessori-grade-badge",style:{borderColor:_,color:_},children:e.grade})}),T.showSubjectPosition&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,n.IE)(e.subjectPosition)}),T.showSubjectRemarks&&(0,o.jsx)("td",{style:ee.td,children:e.remark})]},e.classSubjectId)),!W.subjectResults.length&&(0,o.jsx)("tr",{children:(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",padding:16},colSpan:es,children:"No learning records available for this selected period."})})]})]})}),ei.length>0&&(0,o.jsxs)("section",{style:{marginTop:8,borderRadius:8,border:"1px solid #d9cbb3",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${ei.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,o.jsx)("div",{"data-report-color-block":"true",style:{background:_}}),ei.map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===t?"0":"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #f6f3ea)"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?14:15.8,fontWeight:950,color:"#243126"},children:e.value})]},e.key))]}),(0,o.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${T.classTeacherLabel}'s Comment`,value:W.classTeacherRemark||""},{label:`${T.headTeacherLabel}'s Comment`,value:W.headTeacherRemark||""}].map(e=>(0,o.jsxs)("div",{style:{border:"1px solid #d9cbb3",borderRadius:8,minHeight:52,padding:s?8:9,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:_}}),(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:s?9.6:10.5,lineHeight:1.32,color:"#111827"},children:e.value})]},e.label))}),(ea||eo||en)&&(0,o.jsxs)("section",{style:{marginTop:8,border:"1px solid #d9cbb3",borderRadius:8,padding:s?7:8,background:"#faf9f4",display:"grid",gridTemplateColumns:[ea,eo,en].filter(Boolean).length>=3?"1fr 26px 1fr 26px 1fr":ea&&eo?"1fr 26px 1fr":"1fr",gap:6,alignItems:"center"},children:[ea&&(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:et,children:"Current Academic Period"}),(0,o.jsx)("div",{style:er,children:H?.name||R.academicPeriod?.name||"Current Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:["Ends:"," ",H?.formattedEndDate||ea.replace(/^.*?:\s*/i,"")]})]}),ea&&eo&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"montessori-timeline-marker",style:{borderColor:_}})}),eo&&(0,o.jsxs)("div",{style:{textAlign:ea?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:"Next Academic Period"}),(0,o.jsx)("div",{style:er,children:G?.name||"Next Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:["Begins:"," ",G?.formattedStartDate||eo.replace(/^.*?:\s*/i,"")]})]}),en&&ea&&eo&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"montessori-timeline-marker",style:{borderColor:_}})}),en&&(0,o.jsxs)("div",{style:{textAlign:ea||eo?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:T.generatedDateLabel||"Generated"}),(0,o.jsx)("div",{style:er,children:"Learning Record"}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:_},children:en})]})]}),(0,o.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:T.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:T.classTeacherLabel,name:F(O.classTeacherName||""),image:"",show:!0},{label:T.headTeacherLabel,name:F((0,n.ou)(O.headTeacherName,O.principalName)),image:Z,show:!0},{label:T.parentLabel,name:F((0,n.ou)(O.parentName,O.guardianName)),image:"",show:T.showParentSignature}].filter(e=>e.show).map(e=>(0,o.jsxs)("div",{style:{textAlign:"center"},children:[e.image&&(0,o.jsx)("img",{src:e.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,o.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:s?10.5:11.5,fontWeight:950,color:"#111827"},children:e.name}),(0,o.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:e.label})]},e.label))}),(0,o.jsxs)("footer",{style:{marginTop:8,borderTop:`1.5px solid ${_}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:7.8,color:"#6b7280",fontWeight:700},children:[(0,o.jsxs)("span",{children:["Official Montessori learning record for ",M.schoolName]}),(0,o.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return h?(0,o.jsxs)("div",{className:`src-preview-shell ${u?"expanded":""}`,children:[(0,o.jsx)("style",{children:E}),(0,o.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:F(W.studentName)}),(0,o.jsxs)("span",{children:[W.className," \xb7"," ",R.academicPeriod?.name||"Academic Period"]})]}),(0,o.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>C("out"),onPointerDown:()=>A("out"),onPointerUp:z,onPointerCancel:z,onPointerLeave:z,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,o.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{z(),g(!1),j(1),k(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,o.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,o.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>k(e=>!e),"aria-label":"Choose zoom percentage","aria-expanded":S,title:"Choose zoom percentage",children:[(0,o.jsxs)("span",{children:[N,"%"]}),(0,o.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),S&&(0,o.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(e=>(0,o.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{z(),g(!0),j(Number((e/100).toFixed(4))),k(!1)},className:`src-zoom-menu-item ${Math.round(100*I)===e?"active":""}`,children:[e,"%"]},e))})]}),(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>C("in"),onPointerDown:()=>A("in"),onPointerUp:z,onPointerCancel:z,onPointerLeave:z,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,o.jsx)("div",{ref:b,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":I},children:(0,o.jsx)("div",{className:"src-preview-center",children:(0,o.jsx)("div",{className:"src-preview-scale",children:el})})})]}):el},fileName:"MontessoriTemplate.tsx",aliases:["montessori","montessori_report","narrative"]},{...(0,a.BF)("university_transcript"),component:function({dataset:e,template:t,settings:r,compact:s=!1,showWatermark:l=!0,pageBreakAfter:p=!0,mobilePreview:h=!0}){let[u,g]=(0,i.useState)(!1),b=(0,i.useRef)(null),x=(0,i.useRef)(null),f=(0,i.useRef)(null),[w,v]=(0,i.useState)(1),[y,j]=(0,i.useState)(1),[S,k]=(0,i.useState)(!1),I=u?y:w,N=Math.round(100*I),C=(0,i.useCallback)(e=>{j(t=>{let r=u?t:w;return Math.min(2,Math.max(.25,Number(("in"===e?1.01*r:r/1.01).toFixed(4))))}),g(!0)},[u,w]),z=(0,i.useCallback)(()=>{null!=x.current&&(window.clearTimeout(x.current),x.current=null),null!=f.current&&(window.clearInterval(f.current),f.current=null)},[]),A=(0,i.useCallback)(e=>{z(),C(e),x.current=window.setTimeout(()=>{f.current=window.setInterval(()=>{C(e)},55)},260)},[C,z]);(0,i.useEffect)(()=>{if(!h)return;let e=()=>{let e=b.current;if(!e)return;let t=e.getBoundingClientRect();v(Number(Math.min(1,Math.max(120,t.width-8)/793.7008,Math.max(180,window.innerHeight-t.top-8)/1122.5197).toFixed(4)))};e();let t=new ResizeObserver(e);return b.current&&t.observe(b.current),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{t.disconnect(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[h]),(0,i.useEffect)(()=>z,[z]);let T=(0,a.tH)({...a.gv,...r||{},templateCode:"university_transcript",layoutKey:"university_transcript",templateName:"University Transcript",density:r?.density||(s?"compact":"comfortable")},t||null,null),P=(0,n.J7)({dataset:e,template:t||null,settings:T}),W=e?.report,R=e?.header,B=e?.student,L=(0,i.useMemo)(()=>d(W?.subjectResults,T),[W?.subjectResults,T]);if(!e||!W||!R||!P)return(0,o.jsxs)("div",{className:"src-empty-card university-transcript-template-empty",children:[(0,o.jsx)("style",{children:_}),(0,n.p6)(e)]});let{branding:M,studentInfo:$,currentAcademicPeriod:H,nextAcademicPeriod:D,signatures:F}=P,E=M.primaryColor||"var(--primary-color)",Y=M.fontFamily||"Arial, sans-serif",V=M.reportCardBackgroundImage||"",U=M.reportCardWatermark||M.logo||"",Z=F.officialSignatureImage||M.reportCardSignatureImage||"",K=$.studentPhoto||"",X=(0,n.j1)({settings:T,primaryColor:E,fontFamily:Y,compact:s,pageBreakAfter:p}),q=(0,n.h5)({settings:T,primaryColor:E,compact:s}),J=s?"8mm":"9mm",Q={...X,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:J,background:"#ffffff",color:"#111827",border:"1px solid #9ca3af",borderRadius:4,boxShadow:"0 24px 70px rgba(15,23,42,.13)",overflow:"hidden"},ee={table:{...q.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:4,border:"1px solid #6b7280",fontSize:s?11.3:12},th:{...q.th,border:"0",borderBottom:"1px solid #111827",background:"#111827",color:"#fff",padding:s?"5px 5px":"6px 6px",fontWeight:950,fontSize:s?10.5:11.2,lineHeight:1.22,whiteSpace:"normal",overflowWrap:"break-word"},td:{...q.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:s?"4px 5px":"5px 6px",color:"#111827",fontSize:s?11.5:12.4,lineHeight:1.26,whiteSpace:"normal",overflowWrap:"break-word"},label:q.label,value:q.value},et={fontSize:s?9.5:10.2,fontWeight:950,letterSpacing:.2,textTransform:"uppercase",color:"#4b5563",lineHeight:1.15},er={fontSize:s?11.4:12.4,fontWeight:950,color:"#111827",lineHeight:1.15,overflowWrap:"anywhere"},ei=[{key:"total",label:"Total",value:(0,n.ZV)(W.total,1),show:T.showTotal},{key:"average",label:"Average",value:`${(0,n.ZV)(W.average,1)}%`,show:T.showAverage},{key:"classPosition",label:T.classPositionLabel||"Class Rank",value:(0,n.IE)(W.overallPosition),show:T.showClassPosition},{key:"gpa",label:"GPA",value:null!=W.overallGPA?(0,n.ZV)(W.overallGPA,2):"-",show:T.showGPA}].filter(e=>e.show),ea=(0,n.qr)(H,T),eo=(0,n.R8)(D,T),en=T.showGeneratedDate?(0,n.kn)(e?.generatedAt):"",es=1+(T.showAssessmentBreakdown?L.length:0)+1+ +!!T.showGrade+ +!!T.showSubjectPosition+ +!!T.showSubjectRemarks,el=(0,o.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page university-transcript-template-page",style:Q,children:[V&&(0,o.jsx)("img",{src:V,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),l&&T.showWatermark&&U&&(0,o.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,o.jsx)("img",{src:U,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,o.jsx)("div",{"aria-hidden":"true",className:"university-transcript-frame-line university-transcript-frame-outer",style:{borderColor:E}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"university-transcript-frame-line university-transcript-frame-inner"}),(0,o.jsx)("div",{"aria-hidden":"true",className:"university-transcript-corner university-transcript-corner-tl",style:{borderColor:E}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"university-transcript-corner university-transcript-corner-tr",style:{borderColor:E}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"university-transcript-corner university-transcript-corner-bl",style:{borderColor:E}}),(0,o.jsx)("div",{"aria-hidden":"true",className:"university-transcript-corner university-transcript-corner-br",style:{borderColor:E}}),(0,o.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,o.jsx)(G,{header:R,dataset:e,settings:T,title:"Official Academic Transcript",compact:s,primaryColor:E,fontFamily:Y}),(0,o.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:T.showStudentPhoto?"minmax(0, 1fr) 86px":"1fr",gap:8,alignItems:"stretch"},children:[(0,o.jsxs)("div",{style:{border:"1px solid #9ca3af",borderRadius:4,background:"linear-gradient(180deg, #ffffff, #f9fafb)",overflow:"hidden"},children:[(0,o.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, .8fr) minmax(0, 1.2fr)",gap:0,borderBottom:"1px solid #9ca3af"},children:[(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0},children:[(0,o.jsx)("div",{style:et,children:"Student Name"}),(0,o.jsx)("div",{style:{...er,marginTop:2,fontSize:s?12.6:14.2,overflowWrap:"anywhere"},children:O(W.studentName)})]}),(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #9ca3af"},children:[(0,o.jsx)("div",{style:et,children:"Gender"}),(0,o.jsx)("div",{style:{...er,marginTop:2},children:W.gender||B?.gender||"-"})]}),(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #9ca3af"},children:[(0,o.jsx)("div",{style:et,children:"Admission No."}),(0,o.jsx)("div",{style:{...er,marginTop:2},children:W.admissionNumber||"-"})]})]}),(0,o.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"},children:[{key:"structure",label:"Academic Structure",value:(0,n.ou)(R?.academicStructure?.name,R?.academicStructureName,"-")},{key:"period",label:"Academic Period",value:(0,n.ou)(R.academicPeriod?.name,R?.academicPeriodName,"-")},{key:"class",label:"Class",value:W.className||"-"},{key:"attendance",label:"Attendance",value:`${W.attendance?.presentDays??0}/${W.attendance?.totalDays??0}`}].filter(e=>"attendance"!==e.key||T.showAttendance).map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"6px 7px":"7px 9px",minWidth:0,borderLeft:0===t?void 0:"1px solid #9ca3af"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{...er,marginTop:2,overflowWrap:"anywhere"},children:e.value})]},e.key))}),T.showNumberOnRoll&&(0,o.jsxs)("div",{style:{padding:s?"5px 7px":"6px 9px",borderTop:"1px solid #9ca3af"},children:[(0,o.jsxs)("span",{style:et,children:[T.numberOnRollLabel||"Number On Roll",": "]}),(0,o.jsx)("span",{style:er,children:$.numberOnRoll||W.numberOnRoll||W.classSize||e?.numberOnRoll||e?.classSize||"-"})]})]}),T.showStudentPhoto&&(0,o.jsx)("div",{style:{border:"1px solid #9ca3af",borderRadius:4,background:"#fff",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:96},children:K?(0,o.jsx)("img",{src:K,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,o.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]}),(0,o.jsx)("div",{style:{marginTop:8},children:(0,o.jsxs)("table",{style:ee.table,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,textAlign:"left",minWidth:98},children:"Course / Subject"}),T.showAssessmentBreakdown&&L.map(e=>(0,o.jsxs)("th",{"data-report-color-block":"true",style:ee.th,children:[c(e,T),(T.showAssessmentWeights||T.showAssessmentMaximumScores)&&(0,o.jsxs)("div",{style:{fontSize:7.5,marginTop:2,opacity:.88},children:[T.showAssessmentWeights?`W:${(0,n.ZV)(e.effectiveWeight??e.weight,0)}`:"",T.showAssessmentWeights&&T.showAssessmentMaximumScores?" \xb7 ":"",T.showAssessmentMaximumScores?`M:${(0,n.ZV)(e.maxScore,0)}`:""]})]},e.assessmentStructureItemId)),(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"%"}),T.showGrade&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:"Grade"}),T.showSubjectPosition&&(0,o.jsx)("th",{"data-report-color-block":"true",style:ee.th,children:T.subjectPositionLabel||"Pos."}),T.showSubjectRemarks&&(0,o.jsx)("th",{"data-report-color-block":"true",style:{...ee.th,minWidth:86},children:"Remark"})]})}),(0,o.jsxs)("tbody",{children:[W.subjectResults.map((e,t)=>(0,o.jsxs)("tr",{children:[(0,o.jsxs)("td",{style:{...ee.td,fontWeight:950,fontSize:s?12.8:13.7,lineHeight:1.25,overflowWrap:"break-word",background:t%2==0?"#f8fafc":"#ffffff"},children:[e.subjectName,T.showTeacherNames&&e.teacherName&&(0,o.jsx)("div",{style:{marginTop:2,fontSize:10.2,opacity:.72,fontWeight:700},children:O(e.teacherName)})]}),T.showAssessmentBreakdown&&L.map(t=>{let r=e.breakdown.find(e=>e.assessmentStructureItemId===t.assessmentStructureItemId);return(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:m(r,T,n.ZV)},t.assessmentStructureItemId)}),(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",fontWeight:950},children:(0,n.l9)(e.percentage,1,"-")}),T.showGrade&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,o.jsx)("span",{className:"university-transcript-grade-badge",style:{borderColor:E,color:E},children:e.grade})}),T.showSubjectPosition&&(0,o.jsx)("td",{style:{...ee.td,textAlign:"center"},children:(0,n.IE)(e.subjectPosition)}),T.showSubjectRemarks&&(0,o.jsx)("td",{style:ee.td,children:e.remark})]},e.classSubjectId)),!W.subjectResults.length&&(0,o.jsx)("tr",{children:(0,o.jsx)("td",{style:{...ee.td,textAlign:"center",padding:16},colSpan:es,children:"No course / subject records available for this selected period."})})]})]})}),ei.length>0&&(0,o.jsxs)("section",{style:{marginTop:8,borderRadius:3,border:"1px solid #9ca3af",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${ei.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,o.jsx)("div",{"data-report-color-block":"true",style:{background:E}}),ei.map((e,t)=>(0,o.jsxs)("div",{style:{padding:s?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===t?"0":"1px solid #e5e7eb",background:"#ffffff"},children:[(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?14:15.8,fontWeight:950,color:"#111827"},children:e.value})]},e.key))]}),(0,o.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${T.classTeacherLabel}'s Comment`,value:W.classTeacherRemark||""},{label:`${T.headTeacherLabel}'s Comment`,value:W.headTeacherRemark||""}].map(e=>(0,o.jsxs)("div",{style:{border:"1px solid #9ca3af",borderRadius:8,minHeight:52,padding:s?8:9,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,o.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:E}}),(0,o.jsx)("div",{style:et,children:e.label}),(0,o.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:s?9.6:10.5,lineHeight:1.32,color:"#111827"},children:e.value})]},e.label))}),(ea||eo||en)&&(0,o.jsxs)("section",{style:{marginTop:8,border:"1px solid #9ca3af",borderRadius:3,padding:s?7:8,background:"#f9fafb",display:"grid",gridTemplateColumns:[ea,eo,en].filter(Boolean).length>=3?"1fr 26px 1fr 26px 1fr":ea&&eo?"1fr 26px 1fr":"1fr",gap:6,alignItems:"center"},children:[ea&&(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:et,children:"Current Academic Period"}),(0,o.jsx)("div",{style:er,children:H?.name||R.academicPeriod?.name||"Current Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:E},children:["Ends:"," ",H?.formattedEndDate||ea.replace(/^.*?:\s*/i,"")]})]}),ea&&eo&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"university-transcript-timeline-marker",style:{borderColor:E}})}),eo&&(0,o.jsxs)("div",{style:{textAlign:ea?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:"Next Academic Period"}),(0,o.jsx)("div",{style:er,children:D?.name||"Next Period"}),(0,o.jsxs)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:E},children:["Begins:"," ",D?.formattedStartDate||eo.replace(/^.*?:\s*/i,"")]})]}),en&&ea&&eo&&(0,o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)("span",{className:"university-transcript-timeline-marker",style:{borderColor:E}})}),en&&(0,o.jsxs)("div",{style:{textAlign:ea||eo?"right":"left"},children:[(0,o.jsx)("div",{style:et,children:T.generatedDateLabel||"Generated"}),(0,o.jsx)("div",{style:er,children:"Academic Transcript"}),(0,o.jsx)("div",{style:{marginTop:2,fontSize:s?8.8:9.7,fontWeight:900,color:E},children:en})]})]}),(0,o.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:T.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:T.classTeacherLabel,name:O(F.classTeacherName||""),image:"",show:!0},{label:T.headTeacherLabel,name:O((0,n.ou)(F.headTeacherName,F.principalName)),image:Z,show:!0},{label:T.parentLabel,name:O((0,n.ou)(F.parentName,F.guardianName)),image:"",show:T.showParentSignature}].filter(e=>e.show).map(e=>(0,o.jsxs)("div",{style:{textAlign:"center"},children:[e.image&&(0,o.jsx)("img",{src:e.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,o.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:s?10.5:11.5,fontWeight:950,color:"#111827"},children:e.name}),(0,o.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:e.label})]},e.label))}),(0,o.jsxs)("footer",{style:{marginTop:8,borderTop:`1.5px solid ${E}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:7.8,color:"#6b7280",fontWeight:700},children:[(0,o.jsxs)("span",{children:["Official academic transcript for ",M.schoolName]}),(0,o.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return h?(0,o.jsxs)("div",{className:`src-preview-shell ${u?"expanded":""}`,children:[(0,o.jsx)("style",{children:_}),(0,o.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:O(W.studentName)}),(0,o.jsxs)("span",{children:[W.className," \xb7"," ",R.academicPeriod?.name||"Academic Period"]})]}),(0,o.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>C("out"),onPointerDown:()=>A("out"),onPointerUp:z,onPointerCancel:z,onPointerLeave:z,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,o.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{z(),g(!1),j(1),k(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,o.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,o.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>k(e=>!e),"aria-label":"Choose zoom percentage","aria-expanded":S,title:"Choose zoom percentage",children:[(0,o.jsxs)("span",{children:[N,"%"]}),(0,o.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),S&&(0,o.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(e=>(0,o.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{z(),g(!0),j(Number((e/100).toFixed(4))),k(!1)},className:`src-zoom-menu-item ${Math.round(100*I)===e?"active":""}`,children:[e,"%"]},e))})]}),(0,o.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>C("in"),onPointerDown:()=>A("in"),onPointerUp:z,onPointerCancel:z,onPointerLeave:z,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,o.jsx)("div",{ref:b,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":I},children:(0,o.jsx)("div",{className:"src-preview-center",children:(0,o.jsx)("div",{className:"src-preview-scale",children:el})})})]}):el},fileName:"UniversityTranscriptTemplate.tsx",aliases:["university","transcript","university_transcript","academic_transcript","record"]}];function V(e){return(0,a.tU)(e)}function U(e){let t=V(e||a.u_);return Y.find(e=>{let r=V(e.code),i=V(e.layoutKey),a=(e.aliases||[]).map(V);return r===t||i===t||a.includes(t)})||Y[0]}function Z(e){return U(e).component}function K(e){let{component:t,aliases:r,fileName:i,...a}=U(e);return a}}}]);
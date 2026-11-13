"use strict";exports.id=8594,exports.ids=[8594],exports.modules={18169:(a,b,c)=>{c.d(b,{A:()=>i});var d=c(48249),e=c(67484),f=c(71888),g=c(90490),h=c(45284);function i({dataset:a,template:b,templateSettings:c,templateAssignment:k,settings:l,compact:m=!1,showWatermark:n=!0,pageBreakAfter:o=!0,mobilePreview:p=!0}){let q=(0,e.useMemo)(()=>{var d;let e,i=a?.template||a?.reportTemplate||a?.reportCardTemplate||a?.selectedTemplate||a?.header?.template||a?.header?.reportTemplate||a?.header?.reportCardTemplate||null,j=a?.templateSettings||a?.reportTemplateSettings||a?.reportCardTemplateSettings||a?.selectedTemplateSettings||a?.header?.templateSettings||a?.header?.reportTemplateSettings||a?.header?.reportCardTemplateSettings||null,m=a?.templateAssignment||a?.reportTemplateAssignment||a?.reportCardTemplateAssignment||a?.selectedTemplateAssignment||a?.header?.templateAssignment||a?.header?.reportTemplateAssignment||a?.header?.reportCardTemplateAssignment||null,n=b||i||null,o=l||c||j||null,p=(e=(d={dataset:a,template:n,settings:o}).dataset,d.settings?.templateCode||d.template?.code||e?.templateCode||e?.template?.code||e?.reportTemplate?.code||e?.reportCardTemplate?.code||e?.templateSettings?.templateCode||e?.reportTemplateSettings?.templateCode||e?.reportCardTemplateSettings?.templateCode||e?.header?.templateCode||e?.header?.template?.code||e?.header?.reportTemplate?.code||e?.header?.reportCardTemplate?.code||f.u_),q=(0,g.nO)(p),r=n?(0,f.ed)(n):q,s=(0,f.tH)(o,r,k||m||null),t=(0,g.FW)(s.templateCode||r.code||p),u=(0,h.Tu)(s);return{template:r,settings:s,assessmentReportSettings:u,TemplateComponent:t}},[a,b,c,k,l]);if(!a?.header||!a?.report)return(0,d.jsxs)("div",{className:"src-empty-card report-template-router-empty",children:[(0,d.jsx)("style",{children:j}),(0,h.p6)(a)]});let r=q.TemplateComponent,s={...a,assessmentReportSettings:q.assessmentReportSettings,header:{...a.header,assessmentReportSettings:q.assessmentReportSettings}};return(0,d.jsx)(r,{dataset:s,template:q.template,settings:q.settings,compact:m,showWatermark:n,pageBreakAfter:o,mobilePreview:p})}let j=`
.src-empty-card {
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 16px;
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
  font-weight: 750;
}
`},20949:(a,b,c)=>{c.d(b,{A:()=>i});var d=c(48249),e=c(67484),f=c(58632);let g=[30,40,50,60,70,80,90,100,125,150];function h(a){return"class"===a?"Class Broadsheet":"annual"===a?"Annual Broadsheet":"Subject Broadsheet"}function i({kind:a,dataset:b,header:c,template:l,settings:n,compact:o=!1,showWatermark:p=!0,pageBreakAfter:q=!0,mobilePreview:r=!0,generatedAt:s,pageNumber:t,totalPages:u,className:v,emptyMessage:w}){let x=(0,e.useRef)(null),y=(0,e.useRef)(null),z=(0,e.useRef)(null),[A,B]=(0,e.useState)(!1),[C,D]=(0,e.useState)(1),[E,F]=(0,e.useState)(1),[G,H]=(0,e.useState)(!1),I=A?E:C,J=Math.round(100*I),K=(0,e.useMemo)(()=>(0,f.J9)({kind:a,template:l,settings:n}),[a,l,n]),L=(0,f.ou)(l?.code,l?.templateCode,l?.layoutKey,l?.templateKey,K?.templateCode,K?.layoutKey,"broadsheet_classic"),M=(0,e.useMemo)(()=>(0,f.nE)(L),[L]),N=(0,e.useMemo)(()=>(0,f.Tn)(L),[L]),O=(0,e.useMemo)(()=>(0,f.BV)(c),[c]),P=(0,e.useMemo)(()=>(0,f.Xc)(a,b),[a,b]),Q=!!b&&("subject"===a||"class"===a||"annual"===a)&&Array.isArray(b.students)&&b.students.length>0,R=(0,e.useCallback)(()=>{null!=y.current&&(window.clearTimeout(y.current),y.current=null),null!=z.current&&(window.clearInterval(z.current),z.current=null)},[]),S=(0,e.useCallback)(a=>{F(b=>{let c=A?b:C;return Math.min(2.5,Math.max(.2,Number(("in"===a?1.01*c:c/1.01).toFixed(4))))}),B(!0)},[A,C]),T=(0,e.useCallback)(a=>{R(),S(a),y.current=window.setTimeout(()=>{z.current=window.setInterval(()=>{S(a)},55)},260)},[S,R]),U=(0,e.useCallback)(()=>{R(),B(!1),F(1),H(!1)},[R]),V=(0,e.useCallback)(()=>{R(),B(!0),F(1),H(!1)},[R]),W=(0,e.useCallback)(a=>{R(),B(!0),F(Number((a/100).toFixed(4))),H(!1)},[R]),X=Q?N?(0,d.jsx)(N,{kind:a,dataset:b,header:c,template:l||M,settings:K,compact:o,showWatermark:p,pageBreakAfter:q,generatedAt:s,pageNumber:t,totalPages:u,className:v}):(0,d.jsx)(k,{kind:a,header:c,templateDefinition:M,settings:K,summary:P,pageBreakAfter:q,compact:o}):(0,d.jsx)(j,{kind:a,header:c,settings:K,message:w||(0,f.JQ)(a),pageBreakAfter:q,compact:o});return r?(0,d.jsxs)("div",{className:`bs-viewer-shell ${A?"expanded":""}`,children:[(0,d.jsx)("style",{children:m}),(0,d.jsxs)("div",{className:"bs-viewer-toolbar report-no-print",children:[(0,d.jsxs)("div",{className:"bs-viewer-toolbar-copy",children:[(0,d.jsx)("strong",{children:K.broadsheetTitleLabel||h(a)}),(0,d.jsxs)("span",{children:[O.schoolName,O.branchName?` \xb7 ${O.branchName}`:"",N?` \xb7 ${M.name}`:` \xb7 ${M.name} fallback`]})]}),(0,d.jsxs)("div",{className:"bs-viewer-controls","aria-label":"Broadsheet zoom controls",children:[(0,d.jsx)("button",{type:"button",className:"bs-viewer-icon-button",onClick:()=>S("out"),onPointerDown:()=>T("out"),onPointerUp:R,onPointerCancel:R,onPointerLeave:R,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,d.jsx)("button",{type:"button",className:"bs-viewer-fit-button",onClick:U,"aria-label":"Fit broadsheet to screen",title:"Fit to screen",children:"Fit"}),(0,d.jsxs)("div",{className:"bs-viewer-menu-wrap",children:[(0,d.jsxs)("button",{type:"button",className:"bs-viewer-percent-button",onClick:()=>H(a=>!a),"aria-label":"Choose zoom percentage","aria-expanded":G,children:[(0,d.jsxs)("span",{children:[J,"%"]}),(0,d.jsx)("span",{className:"bs-viewer-caret",children:"▾"})]}),G&&(0,d.jsxs)("div",{className:"bs-viewer-menu",role:"menu",children:[(0,d.jsx)("button",{type:"button",className:"bs-viewer-menu-item",onClick:V,role:"menuitem",children:"Actual size"}),g.map(a=>(0,d.jsxs)("button",{type:"button",className:`bs-viewer-menu-item ${J===a?"active":""}`,onClick:()=>W(a),role:"menuitem",children:[a,"%"]},a))]})]}),(0,d.jsx)("button",{type:"button",className:"bs-viewer-icon-button",onClick:()=>S("in"),onPointerDown:()=>T("in"),onPointerUp:R,onPointerCancel:R,onPointerLeave:R,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,d.jsx)("div",{ref:x,className:"bs-viewer-scroll report-screen-scroll",style:{"--broadsheet-preview-scale":I},children:(0,d.jsx)("div",{className:"bs-viewer-center",children:(0,d.jsx)("div",{className:"bs-viewer-scale",children:X})})})]}):X}function j({kind:a,header:b,settings:c,message:e,pageBreakAfter:g,compact:i}){let k=(0,f.BV)(b);return(0,d.jsxs)("section",{className:"print-page report-page-break bs-router-page bs-empty-page",style:{width:"297mm",minHeight:"210mm",margin:"0 auto 18px",padding:i?"8mm":"10mm",boxSizing:"border-box",background:"#fff",color:"#111827",fontFamily:k.fontFamily,border:"1px solid #d1d5db",pageBreakAfter:g?"always":"auto",breakAfter:g?"page":"auto"},children:[(0,d.jsx)(l,{title:c.broadsheetTitleLabel||h(a),branding:k}),(0,d.jsxs)("div",{className:"bs-empty-card",children:[(0,d.jsx)("div",{className:"bs-empty-icon",children:"▦"}),(0,d.jsx)("h3",{children:"No broadsheet data"}),(0,d.jsx)("p",{children:e})]})]})}function k({kind:a,header:b,templateDefinition:c,settings:e,summary:g,pageBreakAfter:i,compact:j}){let m=(0,f.BV)(b);return(0,d.jsxs)("section",{className:"print-page report-page-break bs-router-page bs-fallback-page",style:{width:"297mm",minHeight:"210mm",margin:"0 auto 18px",padding:j?"8mm":"10mm",boxSizing:"border-box",background:"#fff",color:"#111827",fontFamily:m.fontFamily,border:"1px solid #d1d5db",pageBreakAfter:i?"always":"auto",breakAfter:i?"page":"auto"},children:[(0,d.jsx)(l,{title:e.broadsheetTitleLabel||h(a),branding:m}),g.length>0&&(0,d.jsx)("div",{className:"bs-fallback-summary",children:g.map(a=>(0,d.jsxs)("div",{className:"bs-fallback-stat",children:[(0,d.jsx)("span",{children:a.label}),(0,d.jsx)("strong",{children:a.value})]},a.key))}),(0,d.jsxs)("div",{className:"bs-fallback-notice",children:[(0,d.jsx)("strong",{children:c.name}),(0,d.jsx)("span",{children:"The dataset is ready, but this visual template has not been registered yet. The router has safely fallen back instead of failing. Register the Classic template in Phase 4 and it will render here automatically."})]})]})}function l({title:a,branding:b}){return(0,d.jsxs)("header",{className:"bs-fallback-header",children:[(0,d.jsx)("div",{className:"bs-fallback-logo",children:b.logo?(0,d.jsx)("img",{src:b.logo,alt:"School logo"}):(0,d.jsx)("span",{children:"LOGO"})}),(0,d.jsxs)("div",{className:"bs-fallback-identity",children:[(0,d.jsx)("strong",{children:b.schoolName}),(0,d.jsx)("span",{children:[b.branchName,b.address,b.phone].filter(Boolean).join(" \xb7 ")})]}),(0,d.jsx)("div",{className:"bs-fallback-title",style:{borderColor:b.primaryColor,color:b.primaryColor},children:a})]})}let m=`
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
`},23916:(a,b,c)=>{c.d(b,{DI:()=>r,GJ:()=>p,NK:()=>u,aw:()=>t,ci:()=>n,d8:()=>v,ez:()=>m,l2:()=>w,uu:()=>q});var d=c(47984),e=c(84884),f=c(51850),g=c(49077);function h(a){return null==a?"":String(a).trim()}function i(a){return!0!==a.isDeleted&&!1!==a.active}async function j(a){return(await d.db.assessmentStructureItems.where("assessmentStructureId").equals(a).toArray()).filter(i)}function k(a,b){let c=h(b)||null,d=a.filter(a=>(h(a.parentItemId)||null)===c).map(a=>Number(a.order||0));return d.length?Math.max(...d)+1:1}async function l(a){let b=(0,f.f5)(a),c=(0,f._6)(b),g=d.db.assessmentStructureItems;return await d.db.transaction("rw",g,async()=>{for(let b of c){let c=a.find(a=>h(a.id)===b.itemId);if(!c)continue;let d={...c,parentItemId:b.parentItemId,level:b.level,path:b.path,order:b.order};await g.put((0,e.zk)(d,c))}}),c}async function m(a){return o({...a,parentItemId:null})}async function n(a,b){return o({...b,parentItemId:a})}async function o(a){let b=await j(a.assessmentStructureId);if(a.parentItemId&&!b.find(b=>h(b.id)===h(a.parentItemId)))throw Error("Selected parent assessment item was not found.");let c=(0,e.zk)({accountId:a.accountId,schoolId:a.schoolId,branchId:a.branchId,assessmentStructureId:a.assessmentStructureId,name:a.name.trim(),parentItemId:h(a.parentItemId)||null,level:0,path:null,itemType:a.itemType??(a.parentItemId,"scored_item"),entryMode:a.entryMode??"direct",aggregationMode:a.aggregationMode??"sum",maxScore:a.maxScore??100,weight:a.weight??0,contributionWeight:a.contributionWeight??a.weight??0,bestNCount:a.bestNCount??null,calculationPrecision:Math.min(6,Math.max(0,a.calculationPrecision??2)),normalizeChildrenToParentWeight:!1!==a.normalizeChildrenToParentWeight,minimumRequiredChildren:a.minimumRequiredChildren??null,order:k(b,a.parentItemId),compulsory:!1!==a.compulsory,allowChildEntry:!0===a.allowChildEntry,allowManualOverride:!0===a.allowManualOverride,showParentOnReport:!1!==a.showParentOnReport,showChildrenOnReport:!0===a.showChildrenOnReport,reportVisibility:a.reportVisibility??"show",active:!1!==a.active,isDeleted:!1});return await d.db.assessmentStructureItems.put(c),await l([...b,c]),c}async function p(a,b){let c=await d.db.assessmentStructureItems.get(a);if(!c)throw Error("Assessment item was not found.");let e=await j(c.assessmentStructureId),f=(0,g.CZ)(a,b,e).find(a=>"error"===a.severity);if(f)throw Error(f.message);let i=k(e.filter(b=>h(b.id)!==a),b),m=e.map(c=>h(c.id)===a?{...c,parentItemId:h(b)||null,order:i}:c);await l(m)}async function q(a,b){return s(a,b,"before")}async function r(a,b){return s(a,b,"after")}async function s(a,b,c){if(a===b)return;let e=await d.db.assessmentStructureItems.get(a),f=await d.db.assessmentStructureItems.get(b);if(!e||!f)throw Error("Assessment item or movement target was not found.");if(e.assessmentStructureId!==f.assessmentStructureId)throw Error("Items from different assessment structures cannot be reordered together.");let i=await j(e.assessmentStructureId),k=h(f.parentItemId)||null,m=(0,g.CZ)(a,k,i).find(a=>"error"===a.severity);if(m)throw Error(m.message);let n=i.filter(b=>h(b.id)!==a&&(h(b.parentItemId)||null)===k).sort((a,b)=>Number(a.order||0)-Number(b.order||0)),o=n.findIndex(a=>h(a.id)===b);n.splice(Math.max(0,"before"===c?o:o+1),0,{...e,parentItemId:k});let p=new Map(n.map((a,b)=>[h(a.id),b+1])),q=i.map(b=>{let c=p.get(h(b.id));return void 0===c?b:{...b,parentItemId:h(b.id)===a?k:b.parentItemId,order:c}});await l(q)}async function t(a){let b=await d.db.assessmentStructureItems.get(a);if(!b)throw Error("Assessment item was not found.");let c=(await j(b.assessmentStructureId)).filter(a=>(h(a.parentItemId)||null)===(h(b.parentItemId)||null)).sort((a,b)=>Number(a.order||0)-Number(b.order||0)),e=c.findIndex(b=>h(b.id)===a);if(e<=0)throw Error("The first sibling cannot be indented.");await p(a,h(c[e-1].id))}async function u(a){let b=await d.db.assessmentStructureItems.get(a);if(!b)throw Error("Assessment item was not found.");let c=h(b.parentItemId);if(!c)throw Error("Root assessment items cannot be outdented.");if(!await d.db.assessmentStructureItems.get(c))throw Error("Parent assessment item was not found.");await r(a,c)}async function v(a){let b=await d.db.assessmentStructureItems.get(a);if(!b)return;let c=await j(b.assessmentStructureId),g=(0,f.f5)(c),i=[b,...(0,f.p_)(a,g).map(a=>a.item)];await d.db.transaction("rw",d.db.assessmentStructureItems,async()=>{for(let a of i)await d.db.assessmentStructureItems.put((0,e.T8)(a))});let k=c.filter(a=>!i.some(b=>h(b.id)===h(a.id)));k.length&&await l(k)}async function w(a){let b=await d.db.assessmentStructures.get(a);if(!b)throw Error("Assessment structure was not found.");let[c,f]=await Promise.all([d.db.assessmentStructureItems.where("assessmentStructureId").equals(a).toArray(),d.db.assessmentEntries.where("assessmentStructureId").equals(a).count()]);if(f>0)throw Error("This assessment system has score entries and cannot be deleted.");await d.db.transaction("rw",d.db.assessmentStructures,d.db.assessmentStructureItems,async()=>{for(let a of c)await d.db.assessmentStructureItems.put((0,e.T8)(a));await d.db.assessmentStructures.put((0,e.T8)(b))})}},26277:(a,b,c)=>{function d(a){let b=Number(a);return Number.isFinite(b)?b:0}function e(a,b=2){return Number(a.toFixed(b))}function f(a){let b=a.filter(a=>Number.isFinite(a));return b.length?b.reduce((a,b)=>a+b,0)/b.length:0}function g(...a){for(let b of a)if("string"==typeof b&&b.trim())return b.trim();return""}function h(a){return null==a?"":String(a)}function i(...a){for(let b of a){if(null==b)continue;let a=String(b).trim();if(a)return a}}function j(a){return Array.from(new Set(a.filter(a=>"string"==typeof a&&a.trim().length>0)))}function k(...a){for(let b of a){let a=Number(b);if(Number.isFinite(a))return a}}function l(a){let b=a.filter(a=>Number.isFinite(a));if(b.length<2)return"none";let c=b[0],d=b[b.length-1]-c;return 1>Math.abs(d)?"stable":d>0?"up":"down"}function m(a,b){switch(b){case"alphabetical":return[...a].sort((a,b)=>a.studentName.localeCompare(b.studentName));case"admission-number":return[...a].sort((a,b)=>(a.admissionNumber||"").localeCompare(b.admissionNumber||""));case"average":return[...a].sort((a,b)=>d(b.average)-d(a.average));default:return[...a].sort((a,b)=>{let c=a.position||999999,e=b.position||999999;return c!==e?c-e:d(b.average)-d(a.average)})}}function n(a){return{schoolMap:new Map(a.schools.map(a=>[a.id,a])),branchMap:new Map(a.branches.map(a=>[a.id,a])),schoolBranchSettingMap:new Map(a.schoolBranchSettings.map(a=>[a.branchId,a])),academicStructureMap:new Map(a.academicStructures.map(a=>[a.id,a])),academicPeriodMap:new Map(a.academicPeriods.map(a=>[a.id,a])),studentMap:new Map(a.students.map(a=>[a.id,a])),classMap:new Map(a.classes.map(a=>[a.id,a])),subjectMap:new Map(a.subjects.map(a=>[a.id,a])),teacherMap:new Map(a.teachers.map(a=>[a.id,a])),parentMap:new Map(a.parents.map(a=>[a.id,a]))}}function o(a){return!!(a&&!a.isDeleted&&!1!==a.active)}function p(a,b){if(!b)return 0;let c=a.academicPeriods.find(a=>a.id===b);return d(c?.order)}function q(a,b){if(b)return a.find(a=>a.id===b&&o(a))}function r(a){return a.reportData||{}}function s(a){let b=r(a);return b.report||b.studentReport||b.computedReport||b.computedStudentReport||b}function t(a){let b,c,f,j=s(a),l=k(a.total,j.total,j.cumulativeTotal)||0,m=k(a.average,j.average,j.cumulativeAverage)||0,n=(b=s(a),c=r(a),Array.isArray(f=b.subjectResults||b.subjects||b.reportItems||c.subjectResults||c.subjects||c.reportItems||[])?f:[]).map(a=>{let b;return b=k(a.percentage,a.average,a.totalPercentage,a.score,a.weightedTotal)||0,{subjectId:i(a.subjectId),classSubjectId:i(a.classSubjectId),subjectName:g(a.subjectName,a.name,a.title,a.shortName)||"Subject",subjectCode:g(a.subjectCode,a.code),teacherName:g(a.teacherName,a.teacher?.fullName),total:k(a.total,a.rawTotal),average:k(a.average),weightedTotal:k(a.weightedTotal),percentage:e(b,2),grade:g(a.grade),remark:g(a.remark),gpa:k(a.gpa),position:k(a.position,a.subjectPosition),raw:a}});return{snapshotId:h(a.id),schoolId:a.schoolId,branchId:a.branchId,studentId:a.studentId,classId:a.classId,academicStructureId:a.academicStructureId,academicPeriodId:a.academicPeriodId,academicYear:a.academicYear,term:a.term,snapshotType:a.snapshotType,total:e(l,2),average:e(m,2),position:k(a.position,j.overallPosition,j.position),gpa:k(j.overallGPA,j.gpa),recommendation:function(a){if("promote"===a||"repeat"===a||"graduate"===a)return a}(a.recommendation),promotedToClassId:a.promotedToClassId,attendance:function(a){let b=s(a).attendance||r(a).attendance;if(b)return{totalDays:d(b.totalDays),presentDays:d(b.presentDays),absentDays:d(b.absentDays),lateDays:d(b.lateDays),attendancePercent:d(b.attendancePercent)}}(a),subjectResults:n,reportData:j,rawSnapshot:a}}function u(a,b){return a.studentReportSnapshots.filter(a=>(!!b.includeDeletedSnapshots||!a.isDeleted)&&(!b.branchId||a.branchId===b.branchId)&&(!b.academicStructureId||a.academicStructureId===b.academicStructureId)&&(!b.academicPeriodId||a.academicPeriodId===b.academicPeriodId)&&(!b.classId||a.classId===b.classId)&&(!b.studentId||a.studentId===b.studentId)&&("all"===b.snapshotType||a.snapshotType===b.snapshotType)&&("manual"!==a.snapshotType||!1!==b.includeManualSnapshots)&&("terminal"!==a.snapshotType||!1!==b.includeTerminalSnapshots)&&("promotion"!==a.snapshotType||!1!==b.includePromotionRecords)&&(!b.academicYear||a.academicYear===b.academicYear)&&(!b.fromAcademicYear||!a.academicYear||!(a.academicYear<b.fromAcademicYear))&&(!b.toAcademicYear||!a.academicYear||!(a.academicYear>b.toAcademicYear))&&(!b.decision||"all"===b.decision||a.recommendation===b.decision)&&!0).sort((a,b)=>{let c=(a.academicYear||"").localeCompare(b.academicYear||"");return 0!==c?c:h(a.academicPeriodId).localeCompare(h(b.academicPeriodId))})}function v(a,b){return b.includePromotionRecords?a.studentPromotions.filter(a=>!a.isDeleted&&(!b.branchId||a.branchId===b.branchId)&&(!b.studentId||a.studentId===b.studentId)&&(!b.classId||a.fromClassId===b.classId||a.toClassId===b.classId)&&(!b.academicStructureId||a.fromAcademicStructureId===b.academicStructureId||a.toAcademicStructureId===b.academicStructureId)&&(!b.academicPeriodId||a.fromAcademicPeriodId===b.academicPeriodId||a.toAcademicPeriodId===b.academicPeriodId)&&(!b.decision||"all"===b.decision||a.finalDecision===b.decision)&&!0):[]}function w(a,b){let c=n(a),d=c.academicStructureMap.get(b.academicStructureId),e=c.academicPeriodMap.get(b.academicPeriodId),f=c.classMap.get(b.classId),g=b.promotedToClassId?c.classMap.get(b.promotedToClassId):void 0;return{academicStructureId:b.academicStructureId,academicStructureName:d?.name,academicPeriodId:b.academicPeriodId,academicPeriodName:e?.name||b.term||"Academic Period",academicPeriodOrder:e?.order,academicYear:b.academicYear,term:b.term,classId:b.classId,className:f?.name||"Class",snapshotId:b.snapshotId,snapshotType:b.snapshotType,total:b.total,average:b.average,gpa:b.gpa,position:b.position,recommendation:b.recommendation,promotedToClassId:b.promotedToClassId,promotedToClassName:g?.name,attendance:b.attendance,subjectResults:b.subjectResults}}function x(a){let b=new Map;return a.forEach(a=>{a.subjectResults.forEach(c=>{let d=c.subjectId?`subject-${c.subjectId}`:`name-${c.subjectName.toLowerCase().trim()}`;b.has(d)||b.set(d,{subjectId:c.subjectId,subjectName:c.subjectName,subjectCode:c.subjectCode,periods:[],average:0,highest:0,lowest:0,latest:void 0,trend:"none"}),b.get(d).periods.push({academicYear:a.academicYear,academicPeriodId:a.academicPeriodId,academicPeriodName:a.academicPeriodName,classId:a.classId,className:a.className,percentage:c.percentage,grade:c.grade,remark:c.remark,gpa:c.gpa,position:c.position})})}),Array.from(b.values()).map(a=>{let b=a.periods.map(a=>a.percentage);return{...a,average:e(f(b),2),highest:e(b.length?Math.max(...b):0,2),lowest:e(b.length?Math.min(...b):0,2),latest:b[b.length-1],trend:l(b)}}).sort((a,b)=>a.subjectName.localeCompare(b.subjectName))}function y(a,b,c){let d=n(a);return v(a,{...c,studentId:b}).map(a=>{let b=d.classMap.get(a.fromClassId),c=a.toClassId?d.classMap.get(a.toClassId):void 0,e=d.academicStructureMap.get(a.fromAcademicStructureId),f=a.toAcademicStructureId?d.academicStructureMap.get(a.toAcademicStructureId):void 0,g=d.academicPeriodMap.get(a.fromAcademicPeriodId),h=a.toAcademicPeriodId?d.academicPeriodMap.get(a.toAcademicPeriodId):void 0;return{id:`promotion-${a.id||`${a.studentId}-${a.fromClassId}`}`,studentId:a.studentId,fromClassId:a.fromClassId,fromClassName:b?.name,toClassId:a.toClassId,toClassName:c?.name,fromAcademicStructureId:a.fromAcademicStructureId,fromAcademicStructureName:e?.name,toAcademicStructureId:a.toAcademicStructureId,toAcademicStructureName:f?.name,fromAcademicPeriodId:a.fromAcademicPeriodId,fromAcademicPeriodName:g?.name,toAcademicPeriodId:a.toAcademicPeriodId,toAcademicPeriodName:h?.name,average:a.average,recommendation:a.recommendation,finalDecision:a.finalDecision,snapshotId:a.snapshotId,note:a.note,dateLabel:g?.name||e?.name,rawPromotion:a}}).sort((a,b)=>h(a.fromAcademicPeriodId).localeCompare(h(b.fromAcademicPeriodId)))}function z(a,b,c){if(!a?.id)return a?.parentName;let d=c.find(b=>!b.isDeleted&&b.studentId===a.id&&!0===b.isPrimary)||c.find(b=>!b.isDeleted&&b.studentId===a.id),e=d?b.find(a=>a.id===d.parentId&&!a.isDeleted):void 0;return e?.fullName||a.parentName}function A(a,b,c){let g,i=n(a),k=i.studentMap.get(c);if(!k||k.isDeleted)return;let m=u(a,{...b,studentId:c}).map(a=>t(a)).map(b=>w(a,b)),o=(g=new Map,m.forEach(a=>{let b=a.academicYear||"Unspecified Year";g.has(b)||g.set(b,[]),g.get(b).push(a)}),Array.from(g.entries()).map(([a,b])=>{let c=[...b].sort((a,b)=>d(a.academicPeriodOrder)-d(b.academicPeriodOrder)),g=c.map(a=>a.average),h=c.map(a=>a.gpa).filter(a=>null!=a),i=c[c.length-1];return{academicYear:a,periods:c,totalPeriods:c.length,totalSubjects:j(c.flatMap(a=>a.subjectResults.map(a=>a.subjectId))).length,total:e(c.reduce((a,b)=>a+b.total,0),2),average:e(f(g),2),gpa:h.length?e(f(h),2):void 0,highestAverage:e(g.length?Math.max(...g):0,2),lowestAverage:e(g.length?Math.min(...g):0,2),trend:l(g),finalDecision:i?.recommendation,recommendation:i?.recommendation}})),p=x(m),q=y(a,c,b),r=m.map(a=>a.average),s=m.map(a=>a.gpa).filter(a=>null!=a),v=m[m.length-1],A=k.currentClassId?i.classMap.get(k.currentClassId):v?.classId?i.classMap.get(v.classId):void 0;return{studentId:h(k.id),studentName:k.fullName,admissionNumber:k.admissionNumber,gender:k.gender,studentPhoto:k.photo,currentClassId:A?.id,currentClassName:A?.name,parentName:z(k,a.parents,a.studentParents),guardianName:z(k,a.parents,a.studentParents),periods:m,academicYears:o,subjectHistories:p,progression:q,totalPeriods:m.length,totalSubjects:p.length,cumulativeTotal:e(m.reduce((a,b)=>a+b.total,0),2),cumulativeAverage:e(f(r),2),cumulativeGPA:s.length?e(f(s),2):void 0,highestAverage:e(r.length?Math.max(...r):0,2),lowestAverage:e(r.length?Math.min(...r):0,2),latestAverage:v?.average,latestPosition:v?.position,latestDecision:v?.recommendation,overallTrend:l(r)}}function B(a,b){let c=n(a),d=m(v(a,b).map(a=>{let b=c.studentMap.get(a.studentId),d=c.classMap.get(a.fromClassId),e=a.toClassId?c.classMap.get(a.toClassId):void 0;return{studentId:a.studentId,studentName:b?.fullName||"Unknown Student",admissionNumber:b?.admissionNumber,fromClassId:a.fromClassId,fromClassName:d?.name,toClassId:a.toClassId,toClassName:e?.name,average:a.average,recommendation:a.recommendation,finalDecision:a.finalDecision,snapshotId:a.snapshotId,note:a.note}}),b.sortMode),g=d.map(a=>a.average).filter(a=>null!=a),h=d.filter(a=>"promote"===a.finalDecision).length,i=d.filter(a=>"repeat"===a.finalDecision).length,j=d.filter(a=>"graduate"===a.finalDecision).length;return{rows:d,totalStudents:d.length,promoteCount:h,repeatCount:i,graduateCount:j,promotionRate:d.length?e(h/d.length*100,1):0,repeatRate:d.length?e(i/d.length*100,1):0,graduationRate:d.length?e(j/d.length*100,1):0,averageScore:e(f(g),2)}}function C(a,b){var c,d,g,k;let r,s,z,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am=(K=a.studentReportSnapshots.filter(a=>(!!b.includeDeletedSnapshots||!a.isDeleted)&&(!b.branchId||a.branchId===b.branchId)&&(!b.academicStructureId||a.academicStructureId===b.academicStructureId)&&(!b.academicPeriodId||a.academicPeriodId===b.academicPeriodId)&&(!b.classId||a.classId===b.classId)&&(!b.studentId||a.studentId===b.studentId)&&(!b.academicYear||a.academicYear===b.academicYear)&&!0),L=[...K].sort((b,c)=>{let d=(b.academicYear||"").localeCompare(c.academicYear||"");if(0!==d)return d;let e=p(a,b.academicPeriodId)-p(a,c.academicPeriodId);return 0!==e?e:h(b.id).localeCompare(h(c.id))}).at(-1),M=a.studentPromotions.find(a=>!a.isDeleted&&(!b.branchId||a.branchId===b.branchId)&&(!b.studentId||a.studentId===b.studentId)),N=i(b.branchId,L?.branchId,M?.branchId,1===a.branches.length?a.branches[0]?.id:void 0),O=q(a.branches,N)||a.branches.find(a=>o(a)),P=i(O?.schoolId,L?.schoolId,1===a.schools.length?a.schools[0]?.id:void 0),Q=q(a.schools,P)||a.schools.find(a=>o(a)),R=i(b.academicStructureId,L?.academicStructureId,M?.toAcademicStructureId,M?.fromAcademicStructureId),S=q(a.academicStructures,R)||a.academicStructures.find(a=>!(!o(a)||O?.id&&a.branchId&&a.branchId!==O.id)),T=i(b.academicPeriodId,L?.academicPeriodId,M?.toAcademicPeriodId,M?.fromAcademicPeriodId),U=q(a.academicPeriods,T)||a.academicPeriods.find(a=>!(!o(a)||O?.id&&a.branchId&&a.branchId!==O.id||S?.id&&a.academicStructureId!==S.id)),V=i(b.classId,L?.classId,M?.toClassId,M?.fromClassId),W=q(a.classes,V)||a.classes.find(a=>!(!o(a)||O?.id&&a.branchId&&a.branchId!==O.id)),X=a.schoolBranchSettings.find(a=>O?.id&&a.branchId===O.id&&!a.isDeleted)||a.schoolBranchSettings.find(a=>N&&a.branchId===N&&!a.isDeleted)||(1===a.schoolBranchSettings.length?a.schoolBranchSettings.find(a=>!a.isDeleted):void 0),Y={schoolName:Q?.name||O?.name||"School Name",motto:Q?.motto,logo:X?.logo||O?.logo||Q?.logo,address:O?.address??Q?.address??void 0,phone:O?.phone||Q?.phone,email:O?.email||Q?.email,website:Q?.website,branchName:O?.name,branchAddress:O?.address??void 0,primaryColor:X?.primaryColor||"var(--primary-color)",fontFamily:X?.fontFamily,reportCardBackgroundImage:X?.reportCardBackgroundImage,reportCardWatermark:X?.reportCardWatermark,reportCardSignatureImage:X?.reportCardSignatureImage},{school:Q,branch:O,academicStructure:S,academicPeriod:U,classData:W,schoolBranchSetting:X,branding:Y}),an=u(a,b).map(a=>t(a)),ao=b.studentId&&"student-transcript"===b.mode?A(a,b,b.studentId):void 0,ap="multi-period-report"===b.mode?function(a,b,c){if(!b.studentId)return;let d=A(a,b,b.studentId);if(!d)return;let e=d.periods[d.periods.length-1];return{header:c,studentId:d.studentId,studentName:d.studentName,admissionNumber:d.admissionNumber,gender:d.gender,studentPhoto:d.studentPhoto,classId:e?.classId||d.currentClassId,className:e?.className||d.currentClassName,periods:d.periods,subjects:x(d.periods).map(a=>{let b=a.periods.map(a=>a.percentage),c=a.periods[a.periods.length-1];return{subjectId:a.subjectId,subjectName:a.subjectName,subjectCode:a.subjectCode,periodScores:a.periods.map(a=>({academicPeriodId:a.academicPeriodId,academicPeriodName:a.academicPeriodName,academicYear:a.academicYear,percentage:a.percentage,grade:a.grade,remark:a.remark,position:a.position})),average:a.average,bestScore:a.highest,latestScore:a.latest||0,finalGrade:c?.grade,finalRemark:c?.remark,trend:l(b)}}),total:d.cumulativeTotal,average:d.cumulativeAverage,gpa:d.cumulativeGPA,position:e?.position,attendance:e?.attendance,recommendation:d.latestDecision}}(a,b,am):void 0,aq="annual-broadsheet"===b.mode?(g=a,k=b,C=n(g),s=[...E=j((D=u(g,k).map(a=>t(a))).map(a=>a.studentId)).map(a=>{let b=C.studentMap.get(a),c=D.filter(b=>b.studentId===a).map(a=>w(g,a)),d=c.map(a=>a.average),h=c.map(a=>a.gpa).filter(a=>null!=a),i=c[c.length-1],j=v(g,{...k,studentId:a})[0];return{studentId:a,studentName:b?.fullName||"Unknown Student",admissionNumber:b?.admissionNumber,classId:i?.classId||b?.currentClassId,className:i?.className||(b?.currentClassId?C.classMap.get(b.currentClassId)?.name:void 0),subjects:x(c).map(a=>{let b=a.periods[a.periods.length-1];return{subjectId:a.subjectId,subjectName:a.subjectName,periodScores:a.periods.map(a=>({academicPeriodId:a.academicPeriodId,academicPeriodName:a.academicPeriodName,percentage:a.percentage,grade:a.grade})),average:a.average,grade:b?.grade,remark:b?.remark}}),total:e(c.reduce((a,b)=>a+b.total,0),2),average:e(f(d),2),gpa:h.length?e(f(h),2):void 0,position:void 0,periodsCount:c.length,subjectsCount:x(c).length,recommendation:i?.recommendation||j?.recommendation,finalDecision:j?.finalDecision}}).filter(a=>!k.classId||a.classId===k.classId)].sort((a,b)=>b.average-a.average),z=0,s.forEach((a,b)=>{let c=r===a.average?z:b+1;a.position=c,r=a.average,z=c}),G=(F=m(E,k.sortMode)).map(a=>a.average),H=new Map,F.forEach(a=>{a.subjects.forEach(a=>{let b=a.subjectId?`subject-${a.subjectId}`:`name-${a.subjectName.toLowerCase()}`;if(!H.has(b)){let c=a.subjectId?C.subjectMap.get(a.subjectId):void 0;H.set(b,{subjectId:a.subjectId,subjectName:a.subjectName,subjectCode:c?.code,shortName:c?.code||a.subjectName.slice(0,4).toUpperCase()})}})}),I=k.classId?C.classMap.get(k.classId):void 0,J=k.academicStructureId?C.academicStructureMap.get(k.academicStructureId):void 0,{classId:k.classId,className:I?.name,academicYear:k.academicYear,academicStructureId:k.academicStructureId,academicStructureName:J?.name,periodIds:j(D.map(a=>a.academicPeriodId)),periodNames:Array.from(new Set(D.map(a=>C.academicPeriodMap.get(a.academicPeriodId)?.name||a.term||"Period"))),subjectColumns:Array.from(H.values()).sort((a,b)=>a.subjectName.localeCompare(b.subjectName)),students:F,totalStudents:F.length,totalSubjects:H.size,totalPeriods:j(D.map(a=>a.academicPeriodId)).length,highestAverage:e(G.length?Math.max(...G):0,2),lowestAverage:e(G.length?Math.min(...G):0,2),classAverage:e(f(G),2),promotionCount:F.filter(a=>"promote"===a.finalDecision).length,repeatCount:F.filter(a=>"repeat"===a.finalDecision).length,graduateCount:F.filter(a=>"graduate"===a.finalDecision).length}):void 0,ar="subject-history"===b.mode?function(a,b){if(!b.subjectId)return;let c=n(a),d=c.subjectMap.get(b.subjectId),g=u(a,b).map(a=>t(a)),h=[];j(g.map(a=>a.studentId)).forEach(d=>{let i=c.studentMap.get(d),j=[];if(g.filter(a=>a.studentId===d).forEach(c=>{let d=w(a,c),e=d.subjectResults.find(a=>a.subjectId===b.subjectId);e&&j.push({academicYear:d.academicYear,academicPeriodId:d.academicPeriodId,academicPeriodName:d.academicPeriodName,percentage:e.percentage,grade:e.grade,position:e.position})}),!j.length)return;let k=j.map(a=>a.percentage),m=j[j.length-1];h.push({studentId:d,studentName:i?.fullName||"Unknown Student",admissionNumber:i?.admissionNumber,classId:i?.currentClassId,className:i?.currentClassId?c.classMap.get(i.currentClassId)?.name:void 0,periods:j,average:e(f(k),2),highest:e(k.length?Math.max(...k):0,2),lowest:e(k.length?Math.min(...k):0,2),latest:m?.percentage,trend:l(k)})});let i=m(h,b.sortMode),k=i.map(a=>a.average),o=b.classId?c.classMap.get(b.classId):void 0;return{subjectId:d?.id||b.subjectId,subjectName:d?.name||"Subject",subjectCode:d?.code,classId:b.classId,className:o?.name,academicYear:b.academicYear,students:i,totalStudents:i.length,totalPeriods:j(i.flatMap(a=>a.periods.map(a=>a.academicPeriodId))).length,highestAverage:e(k.length?Math.max(...k):0,2),lowestAverage:e(k.length?Math.min(...k):0,2),subjectAverage:e(f(k),2),improvingCount:i.filter(a=>"up"===a.trend).length,decliningCount:i.filter(a=>"down"===a.trend).length,stableCount:i.filter(a=>"stable"===a.trend).length}}(a,b):void 0,as="promotion-summary"===b.mode?B(a,b):B(a,{...b,decision:"all"}),at="progression-timeline"===b.mode&&b.studentId?y(a,b.studentId,b):void 0,au=(c={studentTranscript:ao,annualBroadsheet:aq,subjectHistory:ar,promotionSummary:as},Z=an.map(a=>a.average),$=c.promotionSummary,_=c.annualBroadsheet?.totalStudents||c.subjectHistory?.totalStudents||+!!c.studentTranscript,aa=c.annualBroadsheet?.totalPeriods||c.studentTranscript?.totalPeriods||c.subjectHistory?.totalPeriods||j(an.map(a=>a.academicPeriodId)).length,ab=c.annualBroadsheet?.totalSubjects||c.studentTranscript?.totalSubjects||j(an.flatMap(a=>a.subjectResults.map(a=>a.subjectId))).length,ac=$?.promoteCount||c.annualBroadsheet?.promotionCount||0,ad=$?.repeatCount||c.annualBroadsheet?.repeatCount||0,af=ac+ad+(ae=$?.graduateCount||c.annualBroadsheet?.graduateCount||0),{totalStudents:_,totalSnapshots:an.length,totalPeriods:aa,totalSubjects:ab,cumulativeAverage:c.studentTranscript?.cumulativeAverage||c.annualBroadsheet?.classAverage||c.subjectHistory?.subjectAverage||e(f(Z),2),highestAverage:c.studentTranscript?.highestAverage||c.annualBroadsheet?.highestAverage||c.subjectHistory?.highestAverage||e(Z.length?Math.max(...Z):0,2),lowestAverage:c.studentTranscript?.lowestAverage||c.annualBroadsheet?.lowestAverage||c.subjectHistory?.lowestAverage||e(Z.length?Math.min(...Z):0,2),promotionCount:ac,repeatCount:ad,graduateCount:ae,promotionRate:af?e(ac/af*100,1):0,repeatRate:af?e(ad/af*100,1):0,graduationRate:af?e(ae/af*100,1):0,improvingCount:c.subjectHistory?.improvingCount||c.studentTranscript?.subjectHistories.filter(a=>"up"===a.trend).length||0,decliningCount:c.subjectHistory?.decliningCount||c.studentTranscript?.subjectHistories.filter(a=>"down"===a.trend).length||0,stableCount:c.subjectHistory?.stableCount||c.studentTranscript?.subjectHistories.filter(a=>"stable"===a.trend).length||0}),av=(ag=[],b.branchId||ag.push("No active branch is selected."),an.length||ag.push("No student report snapshots were found for the selected filters."),"student-transcript"!==b.mode||b.studentId||ag.push("Select a student to generate a cumulative transcript."),"multi-period-report"!==b.mode||b.studentId||ag.push("Select a student to generate a multi-period report."),"annual-broadsheet"!==b.mode||b.classId||ag.push("Select a class to generate an annual cumulative broadsheet."),"subject-history"!==b.mode||b.subjectId||ag.push("Select a subject to generate longitudinal subject analytics."),(ah=an.filter(a=>!a.subjectResults.length)).length&&ag.push(`${ah.length} snapshot(s) do not contain subject result details.`),ai=v(a,b),b.includePromotionRecords&&!ai.length&&("promotion-summary"===b.mode||"progression-timeline"===b.mode)&&ag.push("No promotion records were found for the selected filters."),ag),aw=(ak=Number.isNaN((aj=(d={header:am,transcript:ao}).generatedAt?new Date(d.generatedAt):new Date).getTime())?new Date().toISOString():aj.toISOString(),al=d.transcript,{header:d.header,transcript:al,generatedAt:ak,student:al?{studentId:al.studentId,studentName:al.studentName,admissionNumber:al.admissionNumber,gender:al.gender,currentClassName:al.currentClassName,studentPhoto:al.studentPhoto,parentName:al.parentName,guardianName:al.guardianName}:void 0,summary:al?{totalPeriods:al.totalPeriods,totalSubjects:al.totalSubjects,cumulativeTotal:al.cumulativeTotal,cumulativeAverage:al.cumulativeAverage,cumulativeGPA:al.cumulativeGPA,cumulativePosition:al.latestPosition,highestAverage:al.highestAverage,lowestAverage:al.lowestAverage,latestAverage:al.latestAverage,latestPosition:al.latestPosition,latestDecision:al.latestDecision,overallTrend:al.overallTrend}:void 0});return{header:am,studentTranscript:ao,cumulativeTranscriptDataset:aw,multiPeriodReport:ap,annualBroadsheet:aq,subjectHistory:ar,promotionSummary:as,progressionTimeline:at,analytics:au,warnings:av}}c.d(b,{DB:()=>C,Wy:()=>A})},41490:(a,b,c)=>{c.d(b,{A:()=>f});var d=c(48249);c(67484);var e=c(20949);function f({broadsheet:a,header:b,template:c,settings:g,compact:h=!1,showWatermark:i=!0,pageBreakAfter:j=!0,mobilePreview:k=!0,generatedAt:l,pageNumber:m,totalPages:n,className:o,emptyMessage:p}){return(0,d.jsx)(e.A,{kind:"annual",dataset:a,header:b,template:c,settings:g,compact:h,showWatermark:i,pageBreakAfter:j,mobilePreview:k,generatedAt:l,pageNumber:m,totalPages:n,className:o,emptyMessage:p})}},45284:(a,b,c)=>{c.d(b,{Ak:()=>o,B_:()=>n,IE:()=>j,J7:()=>r,R8:()=>v,Tu:()=>s,ZV:()=>h,h5:()=>x,j1:()=>w,kn:()=>m,l9:()=>i,ou:()=>k,p6:()=>y,qr:()=>u,wX:()=>q,zI:()=>t});var d=c(71888),e=c(49403);function f(a){if(null==a)return;let b=String(a).trim();if(b&&"0"!==b&&"undefined"!==b&&"null"!==b)return b}function g(a,b=0){let c=Number(a);return Number.isFinite(c)?c:b}function h(a,b=1,c="-"){return null==a||Number.isNaN(Number(a))?c:Number(a).toFixed(b)}function i(a,b=1,c="-"){return null==a||Number.isNaN(Number(a))?c:`${Number(a).toFixed(b)}%`}function j(a){let b=Number(a);if(!Number.isFinite(b)||b<=0)return"-";let c=["th","st","nd","rd"],d=b%100;return`${b}${c[(d-20)%10]||c[d]||c[0]}`}function k(...a){for(let b of a)if("string"==typeof b&&b.trim())return b.trim();return""}function l(a){if(!a)return"";if("string"==typeof a&&/^\d{4}-\d{2}-\d{2}$/.test(a))return a;let b=a instanceof Date?a.getTime():new Date(a).getTime();return Number.isFinite(b)?new Date(b).toISOString().slice(0,10):""}function m(a){let b=l(a);if(!b)return"";try{return new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",year:"numeric"}).format(new Date(`${b}T00:00:00`))}catch{return b}}function n(a){let b=String(a||"#ffffff").replace("#","").trim();if(b.startsWith("rgb"))return"#fff";3===b.length&&(b=b.split("").map(a=>a+a).join(""));let c=parseInt(b,16);return Number.isFinite(c)&&(299*(c>>16&255)+587*(c>>8&255)+114*(255&c))/1e3>140?"#111":"#fff"}function o(a,b="var(--primary-color)"){return a?.primaryColor||a?.branding?.primaryColor||a?.schoolBranchSetting?.primaryColor||b}function p(a){switch(a){case"spacious":return{pagePadding:"13mm",gap:10,cellPadding:6,fontSize:11,smallFontSize:9.5};case"comfortable":return{pagePadding:"11mm",gap:8,cellPadding:5,fontSize:10.5,smallFontSize:9};default:return{pagePadding:"9mm",gap:6,cellPadding:4,fontSize:9.5,smallFontSize:8.5}}}function q(a){let b=a?.branding||{};return{schoolName:b.schoolName||a?.school?.name||a?.branch?.name||"School Name",motto:b.motto||a?.school?.motto||"",logo:b.resolvedLogoUrl||b.logo||a?.schoolBranchSetting?.logo||a?.branch?.logo||a?.school?.logo||"",address:b.address||a?.branch?.address||a?.school?.address||"",phone:b.phone||a?.branch?.phone||a?.school?.phone||"",email:b.email||a?.branch?.email||a?.school?.email||"",website:b.website||a?.school?.website||"",branchName:b.branchName||a?.branch?.name||a?.branchName||"",branchAddress:b.branchAddress||a?.branchAddress||a?.branch?.address||"",primaryColor:b.primaryColor||a?.primaryColor||"var(--primary-color)",fontFamily:b.fontFamily||a?.schoolBranchSetting?.fontFamily||"Arial, sans-serif",reportCardBackgroundImage:b.resolvedReportCardBackgroundImageUrl||b.reportCardBackgroundImage||a?.schoolBranchSetting?.reportCardBackgroundImage||"",reportCardWatermark:b.resolvedReportCardWatermarkUrl||b.reportCardWatermark||a?.schoolBranchSetting?.reportCardWatermark||"",reportCardSignatureImage:b.resolvedReportCardSignatureImageUrl||b.reportCardSignatureImage||a?.schoolBranchSetting?.reportCardSignatureImage||""}}function r(a){var b;let c,h,i,j,n,o,p,r,{dataset:s}=a;if(!s?.header||!s?.report)return;let t=(0,d.ed)(a.template||null),u=(b={template:a.template||t,settings:a.settings||null,assignment:a.assignment||null},(0,d.tH)({...d.gv,...b?.fallback||{},...b?.settings||{}},b?.template||null,b?.assignment||null)),v=s.report,w=v.subjectResults||[];return{header:s.header,report:v,student:s.student,branding:q(s.header),studentInfo:(c=s?.report,h=s?.student,{studentId:String(c?.studentId||h?.id||""),studentName:k(c?.studentName,h?.fullName,"Student Name"),admissionNumber:k(c?.admissionNumber,h?.admissionNumber),gender:k(c?.gender,h?.gender),studentPhoto:k(c?.resolvedStudentPhotoUrl,c?.studentPhoto,h?.resolvedStudentPhotoUrl,h?.photo),className:k(c?.className,s?.className,"Class"),numberOnRoll:function(a){let b=a?.report||{},c=a?.header||{};for(let d of[b.numberOnRoll,b.classSize,b.totalStudentsInClass,b.studentsInClass,b.rollCount,a?.numberOnRoll,a?.classSize,a?.totalStudentsInClass,c?.numberOnRoll,c?.classSize,c?.classData?.numberOnRoll,c?.classData?.classSize,c?.classData?.capacity]){let a=Number(d);if(Number.isFinite(a)&&a>0)return a}}(s),overallPosition:g(c?.overallPosition,0)||void 0,promoted:"boolean"==typeof c?.promoted?c.promoted:void 0}),subjectResults:w,assessmentProjections:w.map(a=>a.assessmentProjection).filter(a=>!!a),assessmentReportSettings:(0,e._J)(u),attendance:v.attendance,summary:{total:v?.total,average:v?.average,overallGPA:v?.overallGPA,overallPosition:v?.overallPosition,numberOnRoll:v?.numberOnRoll||v?.classSize},currentAcademicPeriod:function(a){let b=a?.report,c=a?.header,d=a?.currentAcademicPeriod||b?.currentAcademicPeriod||c?.currentAcademicPeriod||c?.academicPeriod;if(!d)return;let e=l(d.endDate),h=d.formattedEndDate||m(e);return{id:f(d.id),academicStructureId:f(d.academicStructureId),name:d.name,type:d.type,startDate:l(d.startDate),endDate:e,order:g(d.order,0)||void 0,formattedEndDate:h,label:d.label||(h?`This Academic Period Ends: ${h}`:"")}}(s),nextAcademicPeriod:function(a){let b=a?.report,c=a?.header,d=a?.nextAcademicPeriod||b?.nextAcademicPeriod||c?.nextAcademicPeriod;if(!d)return;let e=l(d.startDate),h=d.formattedStartDate||m(e);return{id:f(d.id),academicStructureId:f(d.academicStructureId),name:d.name,type:d.type,startDate:e,endDate:l(d.endDate),order:g(d.order,0)||void 0,formattedStartDate:h,label:d.label||(h?`Next Academic Period Begins: ${h}`:"")}}(s),signatures:(i=s?.report,j=s?.header,n=q(s?.header),o=k(i?.classTeacherName,i?.classTeacher?.fullName,i?.classTeacher?.name,s?.classTeacherName,s?.classTeacher?.fullName,s?.classTeacher?.name,j?.classTeacherName,j?.classTeacher?.fullName,j?.classTeacher?.name),p=k(i?.headTeacherName,i?.principalName,i?.headTeacher?.fullName,i?.headTeacher?.name,i?.principal?.fullName,i?.principal?.name,s?.headTeacherName,s?.principalName,s?.headTeacher?.fullName,s?.headTeacher?.name,s?.principal?.fullName,s?.principal?.name,j?.headTeacherName,j?.principalName,j?.headTeacher?.fullName,j?.headTeacher?.name,j?.principal?.fullName,j?.principal?.name),r=k(i?.parentName,i?.guardianName,i?.parent?.fullName,i?.parent?.name,i?.guardian?.fullName,i?.guardian?.name,s?.parentName,s?.guardianName,s?.parent?.fullName,s?.parent?.name,s?.guardian?.fullName,s?.guardian?.name,s?.student?.parentName,s?.student?.guardianName),{classTeacherName:o,headTeacherName:p,principalName:k(i?.principalName,s?.principalName),parentName:r,guardianName:r,officialSignatureImage:n.reportCardSignatureImage}),settings:u}}function s(a){return(0,e._J)(a)}function t(a){return(0,e.XR)(a)}function u(a,b){if(!b.showCurrentAcademicPeriodEnd||!a)return"";let c=b.currentAcademicPeriodEndLabel||"This Academic Period Ends",d=a.formattedEndDate||m(a.endDate);return d?`${c}: ${d}`:""}function v(a,b){if(!b.showNextAcademicPeriod||!a)return"";let c=b.nextAcademicPeriodLabel||"Next Academic Period Begins",d=a.formattedStartDate||m(a.startDate);return d?`${c}: ${d}`:""}function w(a){let b=p(a.compact?"compact":a.settings.density);return{...function(a,b="portrait"){return"Letter"===(a||"A4")?"landscape"===b?{width:"279.4mm",minHeight:"215.9mm"}:{width:"215.9mm",minHeight:"279.4mm"}:"landscape"===b?{width:"297mm",minHeight:"210mm"}:{width:"210mm",minHeight:"297mm"}}(a.settings.paperSize,a.settings.orientation),margin:"0 auto 20px",padding:b.pagePadding,boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:a.fontFamily||"Arial, sans-serif",border:"1px solid #e5e5e5",position:"relative",overflow:"hidden",pageBreakAfter:!1===a.pageBreakAfter?"auto":"always"}}function x(a){let b=p(a.compact?"compact":a.settings.density),c=a.primaryColor||"var(--primary-color)",d=n(c);return{table:{width:"100%",borderCollapse:"collapse",fontSize:b.fontSize},th:{border:"1px solid #222",padding:b.cellPadding,background:c,color:d,textAlign:"center",fontWeight:800,lineHeight:1.2},td:{border:"1px solid #222",padding:b.cellPadding,verticalAlign:"middle",lineHeight:1.25},label:{fontSize:b.smallFontSize,opacity:.72,textTransform:"uppercase",letterSpacing:.3,fontWeight:700},value:{marginTop:2,fontSize:b.fontSize+1,fontWeight:800}}}function y(a){return a?a.header?a.report?"Report data is not ready.":"Student report data is missing.":"Report header data is missing.":"Select a student, class and academic period to generate a report card."}},49077:(a,b,c)=>{c.d(b,{CZ:()=>i,Jk:()=>l,SF:()=>j,ZR:()=>k,pE:()=>m});var d=c(51850);function e(a){return null==a?"":String(a).trim()}function f(a,b=0){let c=Number(a);return Number.isFinite(c)?c:b}function g(a){return!0!==a.isDeleted&&!1!==a.active}function h(a,b,c,d="error"){return{code:a,severity:d,itemId:e(c?.id)||void 0,parentItemId:e(c?.parentItemId)||void 0,assessmentStructureId:e(c?.assessmentStructureId)||void 0,message:b}}function i(a,b,c){let f=[],g=c.find(b=>e(b.id)===a);if(!g)return[{code:"ITEM_NOT_FOUND",severity:"error",itemId:a,message:"Assessment item could not be found."}];let i=e(b);if(!i)return f;if(a===i)return f.push(h("SELF_PARENT","Assessment item cannot be its own parent.",g)),f;let j=c.find(a=>e(a.id)===i);if(!j||j.isDeleted)return f.push(h("PARENT_NOT_FOUND","Selected parent does not exist or has been deleted.",g)),f;if(e(j.assessmentStructureId)!==e(g.assessmentStructureId))return f.push(h("CROSS_STRUCTURE_PARENT","Selected parent belongs to another assessment structure.",g)),f;let k=(0,d.f5)(c);return(0,d.p_)(a,k).map(a=>e(a.item.id)).includes(i)&&f.push(h("CIRCULAR_PARENT_REFERENCE","An assessment item cannot be moved beneath one of its descendants.",g)),f}function j(a,b=!1){let c=[],d=a.entryMode??(b?"from_children":"direct"),e=a.itemType??(b?"group":"scored_item");return"computed_total"===e&&"direct"===d&&!0!==a.allowManualOverride&&c.push(h("COMPUTED_ITEM_DIRECT_ENTRY","A computed-total item should receive scores from children unless manual override is enabled.",a)),"group"===e&&"direct"===d&&!0!==a.allowChildEntry&&c.push(h("GROUP_DIRECT_ENTRY","A group item should not use direct entry unless direct parent entry is explicitly enabled.",a,"warning")),b||"from_children"!==d||c.push(h("LEAF_FROM_CHILDREN","A leaf item cannot calculate from children because it has no active children.",a)),c}function k(a,b=!1){let c=[],d=a.aggregationMode??"sum";return"best_n"===d&&(!Number.isInteger(a.bestNCount)||1>f(a.bestNCount))&&c.push(h("BEST_N_COUNT_REQUIRED","Best-N aggregation requires bestNCount of at least 1.",a)),"best_n"!==d||b||c.push(h("BEST_N_WITHOUT_CHILDREN","Best-N aggregation requires child assessment items.",a)),"custom"!==d||a.metadata||c.push(h("CUSTOM_AGGREGATION_NOT_CONFIGURED","Custom aggregation has no safe calculation configuration.",a,"warning")),null!=a.minimumRequiredChildren&&0>f(a.minimumRequiredChildren)&&c.push(h("INVALID_MINIMUM_REQUIRED_CHILDREN","Minimum required children cannot be negative.",a)),c}function l(a){let b=[],c=a.reportVisibility??"show";return["show","hide","inherit"].includes(c)||b.push(h("INVALID_REPORT_VISIBILITY",`Unsupported report visibility "${String(c)}".`,a)),"hide"===c&&!0===a.showParentOnReport&&b.push(h("CONFLICTING_REPORT_VISIBILITY","The item is hidden but showParentOnReport is enabled.",a,"warning")),b}function m(a,b){var c;let i,m=(0,d.f5)(a),n=[...m.issues],o=a.filter(g),p=new Set([null]);for(let a of o)p.add(e(a.parentItemId)||null);for(let a of p)n.push(...function(a,b){let c=b.filter(b=>g(b)&&(e(b.parentItemId)||null)===(e(a)||null));if(!c.length)return[];let d=a?b.find(b=>e(b.id)===e(a)):void 0,h=d?.aggregationMode??"weighted_sum";if(a&&"weighted_sum"!==h)return[];let i=c.reduce((a,b)=>a+f(b.contributionWeight??b.weight),0),j=a?f(d?.contributionWeight??d?.weight,100):100;return i>j+1e-4?[{code:a?"CHILD_WEIGHT_TOTAL_EXCEEDED":"ROOT_WEIGHT_TOTAL_EXCEEDED",severity:"error",parentItemId:a||void 0,assessmentStructureId:e(c[0]?.assessmentStructureId)||void 0,message:a?`Weighted children total ${i}, exceeding parent contribution ${j}.`:`Root assessment weights total ${i}, exceeding 100.`}]:Math.abs(i-j)>1e-4?[{code:a?"CHILD_WEIGHT_TOTAL_INCOMPLETE":"ROOT_WEIGHT_TOTAL_INCOMPLETE",severity:"warning",parentItemId:a||void 0,assessmentStructureId:e(c[0]?.assessmentStructureId)||void 0,message:a?`Weighted children total ${i}; expected parent contribution ${j}.`:`Root assessment weights total ${i}; the traditional flat structure expects 100.`}]:[]}(a,o)),n.push(...function(a,b){if(!a)return[];let c=b.find(b=>e(b.id)===e(a));if(!c||"sum"!==(c.aggregationMode??"sum"))return[];let d=b.filter(b=>g(b)&&e(b.parentItemId)===e(a)),i=d.reduce((a,b)=>a+f(b.maxScore),0),j=f(c.maxScore);return d.length&&Math.abs(i-j)>1e-4?[h("SUM_MAXIMUM_MISMATCH",`Child maximum scores total ${i}, while parent maximum is ${j}.`,c,"warning")]:[]}(a,o));for(let a of m.nodes)n.push(...j(a.item,a.children.length>0),...k(a.item,a.children.length>0),...l(a.item)),a.depth>5&&n.push(h("EXCESSIVE_TREE_DEPTH",`Assessment item is at depth ${a.depth}; the recommended UI maximum is 5.`,a.item,"warning")),0>=f(a.item.maxScore)&&n.push(h("INVALID_MAX_SCORE","Maximum score must be greater than zero.",a.item));if(b){let a=m.roots.reduce((a,b)=>a+f(b.item.contributionWeight??b.item.weight),0),c=f(b.totalScore,100);Math.abs(a-c)>1e-4&&n.push({code:a>c?"STRUCTURE_ROOT_WEIGHT_EXCEEDED":"STRUCTURE_ROOT_WEIGHT_INCOMPLETE",severity:a>c?"error":"warning",assessmentStructureId:e(b.id)||void 0,message:`Root assessment weight is ${a}; structure total is ${c}.`})}return c=n,i=new Set,c.filter(a=>{let b=[a.code,a.itemId??"",a.parentItemId??"",a.message].join("|");return!i.has(b)&&(i.add(b),!0)})}},49403:(a,b,c)=>{c.d(b,{kz:()=>n,f5:()=>d.f5,Am:()=>y,lj:()=>h,_J:()=>t,XR:()=>u,ZR:()=>e.ZR,pE:()=>e.pE,SF:()=>e.SF,Jk:()=>e.Jk});var d=c(51850),e=c(49077);function f(a){return null==a?"":String(a).trim()}function g(a,b=0){let c=Number(a);return Number.isFinite(c)?c:b}function h(a){let b=a.items.filter(b=>f(b.assessmentStructureId)===f(a.structureId)),c=(0,d.f5)(b),e=(0,d.DS)(c),h=[],i=[];for(let a of e){let b=f(a.item.id),e=a.children.length>0;if(!(0,d.km)(a.item,e)){i.push(b);continue}h.push({itemId:b,name:a.item.name,parentItemId:f(a.item.parentItemId)||null,pathLabels:[...a.path.slice(0,-1).map(a=>c.nodeById.get(a)?.item.name??a),a.item.name],maxScore:g(a.item.maxScore,100),contributionWeight:g(a.item.contributionWeight??a.item.weight),order:g(a.item.order),depth:a.depth,compulsory:!1!==a.item.compulsory})}let j=function(a,b){let c=new Map;for(let d of a){let a=d.parentItemId;if(!a)continue;let e=b.nodeById.get(a);if(!e)continue;let f=c.get(a);if(f){f.columnItemIds.push(d.itemId);continue}c.set(a,{itemId:a,name:e.item.name,depth:e.depth,pathLabels:e.path.map(a=>b.nodeById.get(a)?.item.name??a),columnItemIds:[d.itemId]})}return[...c.values()].sort((a,b)=>a.depth-b.depth||a.name.localeCompare(b.name))}(h,c);return{structureId:a.structureId,columns:h,groups:j,hiddenCalculatedNodes:i,warnings:c.issues}}function i(a){return Array.isArray(a)?a.map(i):a&&"object"==typeof a?Object.fromEntries(Object.entries(a).sort(([a],[b])=>a.localeCompare(b)).map(([a,b])=>[a,i(b)])):a}function j(a){return i({id:a.id,assessmentStructureId:a.assessmentStructureId,parentItemId:a.parentItemId??null,level:a.level??0,path:a.path??null,name:a.name,itemType:a.itemType??"scored_item",aggregationMode:a.aggregationMode??"sum",entryMode:a.entryMode??"direct",weight:a.weight,contributionWeight:a.contributionWeight??null,maxScore:a.maxScore,bestNCount:a.bestNCount??null,minimumRequiredChildren:a.minimumRequiredChildren??null,calculationPrecision:a.calculationPrecision??2,normalizeChildrenToParentWeight:a.normalizeChildrenToParentWeight??!0,allowManualOverride:a.allowManualOverride??!1,compulsory:!1!==a.compulsory,active:!1!==a.active,isDeleted:!0===a.isDeleted,order:a.order})}function k(a){return null==a?"":String(a).trim()}function l(a,b=0){let c=Number(a);return Number.isFinite(c)?c:b}function m(a,b){let c=10**Math.max(0,b);return Math.round((a+Number.EPSILON)*c)/c}let n=Object.freeze({enabled:!0,displayMode:"item_rules",showParentItems:!0,showChildItems:!0,showCalculatedItems:!0,showGroupHeaders:!0,indentChildren:!0,flattenSingleChildGroups:!1,inheritItemVisibility:!0,includeHiddenCalculationItems:!1,maximumVisibleDepth:null,showMaximumScores:!0,showWeights:!1,showRawScores:!0,showWeightedScores:!0,showHierarchyPath:!1}),o=Object.freeze({...n,displayMode:"parents_only",showParentItems:!0,showChildItems:!1,showGroupHeaders:!0,indentChildren:!1,showWeights:!0});function p(a,b){return"boolean"==typeof a?a:b}function q(a,b){if(null===a)return null;let c=Number(a);return Number.isFinite(c)?Math.max(0,Math.floor(c)):b}function r(a,b="item_rules"){switch(a){case"item_rules":case"parents_only":case"children_only":case"parents_and_children":case"compact":return a;default:return b}}function s(a,b){let c=a?.metadata?.[b];return"boolean"==typeof c?c:void 0}function t(a,b){return{...{enabled:p(a?.showAssessmentBreakdown,n.enabled),displayMode:r(a?.assessmentHierarchyDisplay??a?.metadata?.assessmentDisplayMode,n.displayMode),showParentItems:p(a?.showAssessmentParentItems,n.showParentItems),showChildItems:p(a?.showAssessmentChildItems,n.showChildItems),showCalculatedItems:p(a?.showCalculatedAssessmentItems,n.showCalculatedItems),showGroupHeaders:p(a?.showAssessmentGroupHeaders,n.showGroupHeaders),indentChildren:p(a?.indentAssessmentChildren,n.indentChildren),flattenSingleChildGroups:p(a?.flattenSingleChildAssessmentGroups,n.flattenSingleChildGroups),inheritItemVisibility:p(s(a,"inheritAssessmentItemVisibility"),n.inheritItemVisibility),includeHiddenCalculationItems:p(s(a,"includeHiddenAssessmentCalculationItems"),n.includeHiddenCalculationItems),maximumVisibleDepth:q(a?.assessmentMaximumVisibleDepth,n.maximumVisibleDepth),showMaximumScores:p(a?.showAssessmentMaximumScores??s(a,"showAssessmentMaximumScores"),n.showMaximumScores),showWeights:p(a?.showAssessmentWeights??s(a,"showAssessmentWeights"),n.showWeights),showRawScores:p(a?.showAssessmentRawScores??s(a,"showAssessmentRawScores"),n.showRawScores),showWeightedScores:p(a?.showAssessmentWeightedScores??s(a,"showAssessmentWeightedScores"),n.showWeightedScores),showHierarchyPath:p(a?.showAssessmentHierarchyPath??s(a,"showAssessmentHierarchyPath"),n.showHierarchyPath)},...b}}function u(a,b){return t(a,{displayMode:r(a?.broadsheetAssessmentHierarchyDisplay,o.displayMode),showParentItems:!0,showChildItems:"parents_only"!==r(a?.broadsheetAssessmentHierarchyDisplay,o.displayMode),showGroupHeaders:p(a?.broadsheetShowAssessmentGroupHeaders,o.showGroupHeaders),maximumVisibleDepth:q(a?.broadsheetMaximumAssessmentDepth,o.maximumVisibleDepth),indentChildren:!1,...b})}function v(a){return null==a?"":String(a).trim()}function w(a,b=0){let c=Number(a);return Number.isFinite(c)?c:b}function x(a){return!0!==a.isDeleted&&!1!==a.active}function y(a){var b,c,f;let g,h,o,p,q,r,s,t,u,y,z,A,B,C=(b=(g=function(a){var b;let c=a.options?.precision??2,f=k(a.structure.id),g=a.items.filter(b=>k(b.assessmentStructureId)===f&&(a.options?.includeInactiveItems||!1!==b.active&&!0!==b.isDeleted)),h=(0,d.f5)(g),n=function(a){let b=new Map;for(let c of a){if(!0===c.isDeleted)continue;let a=k(c.assessmentStructureItemId);if(!a)continue;let d=b.get(a),e=l(c.updatedAt),f=l(d?.updatedAt);(!d||e>=f)&&b.set(a,c)}return b}(a.entries),o=[...(0,e.pE)(g,a.structure)],p=new Map,q=a=>{let b=a.item,d=k(b.id),e=a.children.map(q),f=b.itemType??(e.length?"group":"scored_item"),g=b.aggregationMode??"sum",i=b.entryMode??(e.length?"from_children":"direct"),j=Math.max(0,l(b.maxScore,100)),o=Math.max(0,a.parent?l(b.contributionWeight??b.weight):l(b.weight)),r=n.get(d),s=r?l(r.rawScore??r.score):null,t=null!==s&&("direct"===i||"direct_or_children"===i||!0===b.allowManualOverride),u=0,v=0,w=!1,x=!1,y=e,z=[],A=e.filter(a=>a.complete);if("best_n"===g&&e.length){let a=Math.max(1,Math.floor(l(b.bestNCount,1))),c=new Set((y=[...A].sort((a,b)=>b.normalizedPercentage-a.normalizedPercentage).slice(0,a)).map(a=>a.itemId));for(let a of e)a.selectedForBestN=c.has(a.itemId)}let B=null==b.minimumRequiredChildren?null:Math.max(0,Math.floor(l(b.minimumRequiredChildren))),C=null===B||A.length>=B;if(r?.entrySource==="override"&&!0===b.allowManualOverride&&null!==s)u=s,v=j>0?u/j*100:0,x=!0;else if(e.length&&"direct"!==i){switch(w=!0,g){case"sum":u=e.reduce((a,b)=>a+b.rawScore,0),v=j>0?u/j*100:0;break;case"weighted_sum":{let a=!1===b.normalizeChildrenToParentWeight?e.reduce((a,b)=>a+b.effectiveWeight,0):o||100,c=e.reduce((a,b)=>a+b.normalizedPercentage/100*b.effectiveWeight,0);u=(v=a>0?c/a*100:0)/100*j;break}case"average":{let a=A.length?A:e;u=(v=a.length?a.reduce((a,b)=>a+b.normalizedPercentage,0)/a.length:0)/100*j;break}case"best_n":u=(v=y.length?y.reduce((a,b)=>a+b.normalizedPercentage,0)/y.length:0)/100*j,y.length<Math.max(1,l(b.bestNCount,1))&&z.push("Not enough completed children are available for Best-N aggregation.");break;case"custom":z.push("CUSTOM_AGGREGATION_NOT_CONFIGURED"),u=0,v=0}"direct_or_children"===i&&!A.length&&t&&(u=s,v=j>0?u/j*100:0,w=!1,x=!0)}else t&&(u=s,v=j>0?u/j*100:0,x=!0);let D=!1===b.compulsory||x||(e.length?e.every(a=>!!a.complete):null!==s),E=C&&D&&(x||w||!1===b.compulsory);C||z.push(`Requires at least ${B} completed child items.`),null!==s&&s>j&&z.push(`Entered score ${s} exceeds maximum score ${j}.`);let F=v/100*o,G={itemId:d,parentItemId:k(b.parentItemId)||null,name:b.name,depth:a.depth,order:l(b.order,0),pathItemIds:[...a.path],pathLabels:[...a.parent?a.parent.path.map(a=>h.nodeById.get(a)?.item.name??a):[],b.name],itemType:f,aggregationMode:g,entryMode:i,reportVisibility:b.reportVisibility??"show",showParentOnReport:!1!==b.showParentOnReport,showChildrenOnReport:!0===b.showChildrenOnReport,rawScore:m(u,b.calculationPrecision??c),maxScore:m(j,c),normalizedPercentage:m(v,b.calculationPrecision??c),weightedScore:m(F,b.calculationPrecision??c),effectiveWeight:m(o,c),enteredDirectly:x,calculatedFromChildren:w,complete:E,warnings:z,children:e};return p.set(d,G),G},r=h.roots.map(q),s=(0,d.DS)(h).map(a=>p.get(k(a.item.id))).filter(a=>!!a),t=r.reduce((a,b)=>a+b.rawScore,0),u=r.reduce((a,b)=>a+b.maxScore,0),v=r.reduce((a,b)=>a+b.weightedScore,0),w=r.reduce((a,b)=>a+b.effectiveWeight,0);for(let a of s)for(let b of a.warnings)o.push({code:"CUSTOM_AGGREGATION_NOT_CONFIGURED"===b?b:"ASSESSMENT_CALCULATION_WARNING",severity:"warning",itemId:a.itemId,assessmentStructureId:f,message:b});return{structureId:f,roots:r,nodes:s,nodeByItemId:p,rawTotal:m(t,c),rawMaxTotal:m(u,c),weightedTotal:m(v,c),totalWeight:m(w,c),percentage:m(w>0?v/w*100:u>0?t/u*100:0,c),complete:r.every(a=>a.complete),warnings:o,treeHash:(b=a.structure,function(a){let b=0x811c9dc5;for(let c=0;c<a.length;c+=1)b^=a.charCodeAt(c),b=Math.imul(b,0x1000193);return(b>>>0).toString(16).padStart(8,"0")}(JSON.stringify(i({structure:{id:b.id,totalScore:b.totalScore??100,active:!1!==b.active,locked:!0===b.locked},items:[...g].sort((a,b)=>String(a.id).localeCompare(String(b.id))).map(j)}))))}}(a)).percentage,h=[...a.gradeRules??[]].filter(x).sort((a,b)=>Number(a.order??0)-Number(b.order??0)).find(a=>b>=Number(a.minScore)&&b<=Number(a.maxScore)),{...g,grade:h?.grade,remark:h?.remark,gpa:h?.gpa,gradeRule:h});return{...C,reportProjection:(f=(c={computation:C,items:a.items,settings:a.reportSettings}).settings,o={...n,...f},p=c.computation.structureId,q=new Map(c.items.filter(a=>!0!==a.isDeleted&&!1!==a.active&&v(a.assessmentStructureId)===p).map(a=>[v(a.id),a])),r=new Map,s=[],t=[],u=(a,b,c,d)=>{var e;let f,g=q.get(a.itemId);if(!g)return null;let h=a.children.length>0,i=!h,j=[...b,a.name],k="hide"!==(f=(e={item:g,depth:c,isParent:h,parentAllowsChildren:d,settings:o}).item.reportVisibility??"show")||e.settings.includeHiddenCalculationItems?e.depth>0&&!e.parentAllowsChildren&&"item_rules"===e.settings.displayMode?{visible:!1,source:"parent"}:e.isParent&&!1===e.item.showParentOnReport||e.depth>0&&!e.isParent&&"inherit"===e.item.reportVisibility&&!e.settings.inheritItemVisibility?{visible:!1,source:"item"}:{visible:!0,source:"inherit"===f?"parent":"show"===f?"item":"default"}:{visible:!1,source:"item"},l=o.enabled&&k.visible,m=k.source;!function(a){switch(a.mode){case"parents_only":return 0===a.depth;case"children_only":return a.isLeaf;case"parents_and_children":case"item_rules":default:return!0;case"compact":return 0===a.depth||a.isLeaf}}({mode:o.displayMode,depth:c,isParent:h,isLeaf:i})&&(l=!1,m="template"),h&&!o.showParentItems&&(l=!1,m="template"),c>0&&i&&!o.showChildItems&&(l=!1,m="template"),a.calculatedFromChildren&&!o.showCalculatedItems&&(l=!1,m="template"),null!==o.maximumVisibleDepth&&c>o.maximumVisibleDepth&&(l=!1,m="template");let n="item_rules"!==o.displayMode||!0===g.showChildrenOnReport||null==g.showChildrenOnReport&&d,p=a.children.map(a=>u(a,j,c+1,n)).filter(a=>!!a).sort((a,b)=>a.order-b.order),v={key:`${a.itemId}:${c}`,itemId:a.itemId,parentItemId:a.parentItemId,name:a.name,shortLabel:function(a,b=18){return a.length<=b?a:`${a.slice(0,Math.max(1,b-1))}…`}(a.name),pathLabels:j,depth:c,order:w(g?.order,0),itemType:a.itemType,aggregationMode:a.aggregationMode,rawScore:w(a.rawScore),maxScore:w(a.maxScore),normalizedPercentage:w(a.normalizedPercentage),weightedScore:w(a.weightedScore),effectiveWeight:w(a.effectiveWeight),enteredDirectly:a.enteredDirectly,calculatedFromChildren:a.calculatedFromChildren,complete:a.complete,isParent:h,isLeaf:i,indent:o.indentChildren&&c>0,visible:l,visibilitySource:m,children:p};return r.set(v.itemId,v),(l?s:t).push(v.itemId),v},A=(z=function(a){let b=[],c=a=>{for(let d of(a.visible&&b.push(a),a.children))c(d)};for(let b of a)c(b);return b}(y=c.computation.roots.map(a=>u(a,[],0,!0)).filter(a=>!!a).sort((a,b)=>a.order-b.order))).map(({children:a,...b})=>({...b,groupId:b.parentItemId?`assessment-group:${b.parentItemId}`:void 0,groupLabel:b.parentItemId?r.get(b.parentItemId)?.name:void 0,groupDepth:b.parentItemId?r.get(b.parentItemId)?.depth:void 0})),o.flattenSingleChildGroups&&(A=function(a){let b=new Map;for(let c of a){let a=v(c.parentItemId);a&&b.set(a,(b.get(a)??0)+1)}return a.map(a=>{let c=v(a.parentItemId);return c&&1===b.get(c)?{...a,groupId:void 0,groupLabel:void 0,groupDepth:void 0}:a})}(A)),B=function(a,b,c){if(!c.showGroupHeaders)return[];let d=new Map;for(let a of b){let b=v(a.parentItemId);if(!b)continue;let c=d.get(b)??[];c.push(a),d.set(b,c)}return a.filter(a=>a.isParent).map(a=>{let c=b.filter(b=>b.pathLabels.slice(0,-1).includes(a.name)),e=d.get(a.itemId)??[],f=c.length?c:e;return{id:`assessment-group:${a.itemId}`,itemId:a.itemId,parentItemId:a.parentItemId,label:a.name,pathLabels:a.pathLabels,depth:a.depth,order:a.order,columnItemIds:f.map(a=>a.itemId),columnSpan:f.length}}).filter(a=>a.columnSpan>0).sort((a,b)=>a.order-b.order)}(z,A,o),{structureId:p,settings:o,roots:y,rows:z,columns:A,groups:B,nodeByItemId:r,visibleItemIds:s,hiddenItemIds:t,warnings:c.computation.warnings})}}c(23916)},51850:(a,b,c)=>{c.d(b,{DS:()=>j,_6:()=>l,f5:()=>i,km:()=>m,p_:()=>k});let d="__root__";function e(a){return"string"==typeof a?a.trim():null==a?"":String(a).trim()}function f(a){return!0!==a.isDeleted&&!1!==a.active}function g(a){let b=Number(a.order);return Number.isFinite(b)?b:0}function h(a,b,c,d="error",f){return{code:a,severity:d,itemId:e(c?.id)||void 0,parentItemId:e(c?.parentItemId)||void 0,assessmentStructureId:e(c?.assessmentStructureId)||void 0,message:b,details:f}}function i(a){let b=[],c=a.filter(f),i=new Map;for(let a of c){let c=e(a.id);if(!c){b.push(h("MISSING_ITEM_ID","Assessment item is missing a permanent id.",a));continue}if(i.has(c)){b.push(h("DUPLICATE_ITEM_ID",`Assessment item id ${c} appears more than once.`,a));continue}i.set(c,a)}let j=new Map;for(let[c,d]of i){let f=e(d.parentItemId)||null;if(!f){j.set(c,null);continue}if(f===c){b.push(h("SELF_PARENT","Assessment item cannot be its own parent.",d)),j.set(c,null);continue}let g=i.get(f);if(!g){let g=a.find(a=>e(a.id)===f);b.push(h(g?.isDeleted?"DELETED_PARENT_WITH_ACTIVE_CHILD":"MISSING_PARENT",g?.isDeleted?`Active item points to deleted parent ${f}.`:`Assessment item points to missing parent ${f}.`,d,"error")),j.set(c,null);continue}if(e(g.assessmentStructureId)!==e(d.assessmentStructureId)){b.push(h("CROSS_STRUCTURE_PARENT","Assessment item and parent belong to different assessment structures.",d,"error",{parentStructureId:g.assessmentStructureId})),j.set(c,null);continue}j.set(c,f)}let k=new Set;for(let a of i.keys()){let c=[],d=new Map,f=a;for(;f;){if(d.has(f)){let g=d.get(f)??0,h=c.slice(g);for(let a of h)k.add(a);b.push({code:"CIRCULAR_PARENT_REFERENCE",severity:"error",itemId:a,assessmentStructureId:e(i.get(a)?.assessmentStructureId)||void 0,message:`Circular assessment hierarchy detected: ${[...h,f].join(" → ")}.`,details:{members:h}});break}d.set(f,c.length),c.push(f),f=j.get(f)??null}}for(let a of k)j.set(a,null);let l=new Map;for(let a of i.keys()){let b=j.get(a)??d,c=l.get(b)??[];c.push(a),l.set(b,c)}for(let a of l.values())a.sort((a,b)=>(function(a,b){let c=g(a)-g(b);if(0!==c)return c;let d=String(a.name??"").localeCompare(String(b.name??""));return 0!==d?d:e(a.id).localeCompare(e(b.id))})(i.get(a),i.get(b)));let m=new Map,n=[],o=(a,b,c)=>{let d=i.get(a),e=[...c,a],f={item:d,children:[],parent:b,depth:b?b.depth+1:0,path:e};return m.set(a,f),n.push(f),f.children=(l.get(a)??[]).map(a=>o(a,f,e)),f},p=(l.get(d)??[]).map(a=>o(a,null,[])),q=new Map;for(let a of(q.set(null,p),n))q.set(e(a.item.id),a.children);let r=new Map;for(let a of n){let c=String(a.item.path??"").trim();if(c){let d=r.get(c);d&&d!==e(a.item.id)?b.push(h("DUPLICATE_STORED_PATH",`Stored hierarchy path "${c}" is used by multiple assessment items.`,a.item,"warning",{otherItemId:d})):r.set(c,e(a.item.id))}let d=Number(a.item.level??0);Number.isFinite(d)&&d!==a.depth&&b.push(h("INVALID_STORED_LEVEL",`Stored level ${d} does not match calculated level ${a.depth}.`,a.item,"warning"))}return{roots:p,nodes:n,nodeById:m,childrenByParentId:q,issues:b}}function j(a){let b=Array.isArray(a)?a:a.roots,c=[],d=a=>{c.push(a),a.children.forEach(d)};return b.forEach(d),c}function k(a,b){let c=b.nodeById.get(a);if(!c)return[];let d=[],e=a=>{for(let b of a.children)d.push(b),e(b)};return e(c),d}function l(a){let b=Array.isArray(a)?a:a.roots,c=[],d=(a,b,f,g)=>{let h=e(a.item.id),i=[...f,h];c.push({itemId:h,parentItemId:b,level:f.length,path:i.join("/"),order:g}),a.children.forEach((a,b)=>d(a,h,i,b+1))};return b.forEach((a,b)=>d(a,null,[],b+1)),c}function m(a,b=!1){if(!f(a))return!1;let c=a.entryMode??(b?"from_children":"direct");return"from_children"!==c&&(!b||"direct_or_children"===c||!0===a.allowChildEntry)}},58632:(a,b,c)=>{c.d(b,{Tj:()=>an,Xc:()=>s,JQ:()=>u,ou:()=>i,Tn:()=>aq,nE:()=>ao,av:()=>ap,BV:()=>q,J9:()=>p});var d=c(48249),e=c(67484),f=c(49403);let g="broadsheet_classic",h={reportType:"subject_broadsheet",templateCode:g,layoutKey:g,templateName:"Classic Broadsheet",paperSize:"A4",orientation:"landscape",density:"compact",showBroadsheetLogo:!0,showBroadsheetWatermark:!1,showBroadsheetGeneratedDate:!0,showBroadsheetPageNumber:!0,showBroadsheetSignatures:!1,showBroadsheetSummary:!0,showBroadsheetStatistics:!0,showBroadsheetStudentPhoto:!1,showBroadsheetAssessmentBreakdown:!0,broadsheetAssessmentHierarchyDisplay:"parents_only",broadsheetShowAssessmentGroupHeaders:!0,broadsheetMaximumAssessmentDepth:null,showAssessmentParentItems:!0,showAssessmentChildItems:!1,showCalculatedAssessmentItems:!0,indentAssessmentChildren:!0,showAssessmentMaximumScores:!0,showAssessmentWeights:!1,showAssessmentRawScores:!0,showAssessmentWeightedScores:!0,showAssessmentHierarchyPath:!1,showBroadsheetWeightedTotal:!0,showBroadsheetPercentage:!0,showBroadsheetGrade:!0,showBroadsheetRemark:!0,showBroadsheetGPA:!0,showBroadsheetPosition:!0,showBroadsheetHighestScore:!0,showBroadsheetLowestScore:!0,showBroadsheetClassAverage:!0,showBroadsheetSubjectScores:!0,showBroadsheetSubjectGrades:!1,showBroadsheetTotal:!0,showBroadsheetAverage:!0,showBroadsheetClassPosition:!0,showBroadsheetAttendance:!0,showBroadsheetClassHighestAverage:!0,showBroadsheetClassLowestAverage:!0,showBroadsheetPeriodScores:!0,showBroadsheetAnnualAverage:!0,showBroadsheetAnnualGPA:!0,showBroadsheetAnnualPosition:!0,showBroadsheetTrend:!0,showBroadsheetPromotionDecision:!0,showBroadsheetBestPeriod:!0,showBroadsheetLatestPeriod:!0,broadsheetTitleLabel:"Broadsheet",broadsheetGeneratedDateLabel:"Generated",broadsheetFooterText:"Official academic broadsheet generated by Eleeveon Schools.",studentColumnLabel:"Student",admissionNumberColumnLabel:"Admission No.",positionColumnLabel:"Position",gradeColumnLabel:"Grade",remarkColumnLabel:"Remark"};function i(...a){for(let b of a){if(null==b)continue;let a=String(b).trim();if(a)return a}return""}function j(a,b=1,c="-"){let d=Number(a);return Number.isFinite(d)?d.toFixed(b):c}function k(a,b=1,c="-"){let d=j(a,b,c);return d===c?c:`${d}%`}function l(a){if(!a||!Number.isFinite(a))return"-";let b=a%100;if(b>=11&&b<=13)return`${a}th`;let c=a%10;return 1===c?`${a}st`:2===c?`${a}nd`:3===c?`${a}rd`:`${a}th`}function m(a){if(null==a||""===a)return"";let b=a instanceof Date?a:new Date(a);return Number.isNaN(b.getTime())?String(a):new Intl.DateTimeFormat("en",{year:"numeric",month:"short",day:"2-digit"}).format(b)}function n(a){return String(a||"").trim().toLowerCase().replace(/[\s-]+/g,"_").replace(/[^a-z0-9_]/g,"")}function o(a){return"class"===a?"Class Broadsheet":"annual"===a?"Annual Broadsheet":"Subject Broadsheet"}function p(a){let{kind:b,settings:c,template:d}=a,e=i(d?.code,d?.templateCode,d?.layoutKey,d?.templateKey,c?.templateCode,c?.layoutKey,c?.templateKey,g)||g,j=(0,f.XR)(c);return{...h,...c||{},broadsheetAssessmentHierarchyDisplay:j.displayMode,broadsheetShowAssessmentGroupHeaders:j.showGroupHeaders,broadsheetMaximumAssessmentDepth:j.maximumVisibleDepth,showAssessmentParentItems:j.showParentItems,showAssessmentChildItems:j.showChildItems,showCalculatedAssessmentItems:j.showCalculatedItems,indentAssessmentChildren:j.indentChildren,showAssessmentMaximumScores:j.showMaximumScores,showAssessmentWeights:j.showWeights,showAssessmentRawScores:j.showRawScores,showAssessmentWeightedScores:j.showWeightedScores,showAssessmentHierarchyPath:j.showHierarchyPath,reportType:"class"===b?"class_broadsheet":"annual"===b?"annual_broadsheet":"subject_broadsheet",templateCode:e,layoutKey:i(c?.layoutKey,d?.layoutKey,e)||e,templateName:i(c?.templateName,d?.name,d?.name,"Classic Broadsheet")||"Classic Broadsheet",paperSize:i(c?.paperSize,d?.paperSize,"A4")||"A4",orientation:i(c?.orientation,d?.orientation,"landscape")||"landscape",density:i(c?.density,d?.density,"compact")||"compact",broadsheetTitleLabel:i(c?.broadsheetTitleLabel,o(b))||o(b),broadsheetGeneratedDateLabel:i(c?.broadsheetGeneratedDateLabel,"Generated")||"Generated",broadsheetFooterText:i(c?.broadsheetFooterText,c?.footerText,h.broadsheetFooterText)||h.broadsheetFooterText,studentColumnLabel:i(c?.studentColumnLabel,"Student")||"Student",admissionNumberColumnLabel:i(c?.admissionNumberColumnLabel,"Admission No.")||"Admission No.",positionColumnLabel:i(c?.positionColumnLabel,"Position")||"Position",gradeColumnLabel:i(c?.gradeColumnLabel,"Grade")||"Grade",remarkColumnLabel:i(c?.remarkColumnLabel,"Remark")||"Remark"}}function q(a){let b=a||{},c=b.branding||{},d=b.schoolBranchSetting||{},e=b.school||{},f=b.branch||{},g=i(b.resolvedLogoUrl,c.resolvedLogoUrl,c.logo,d.logo,f.logo,e.logo);return{schoolName:i(c.schoolName,e.name,"School Name"),branchName:i(c.branchName,b.branchName,b.branchLabel,b.campusName,f.name),branchAddress:i(c.branchAddress,b.branchAddress,f.address),motto:i(c.motto,e.motto),address:i(c.address,e.address),phone:i(c.phone,f.phone,e.phone),email:i(c.email,f.email,e.email),website:i(c.website,f.website,e.website),logo:g,watermark:i(b.resolvedReportCardWatermarkUrl,c.resolvedReportCardWatermarkUrl,c.reportCardWatermark,d.reportCardWatermark,g),backgroundImage:i(b.resolvedReportCardBackgroundImageUrl,c.resolvedReportCardBackgroundImageUrl,c.reportCardBackgroundImage,d.reportCardBackgroundImage),signatureImage:i(b.resolvedReportCardSignatureImageUrl,c.resolvedReportCardSignatureImageUrl,c.reportCardSignatureImage,d.reportCardSignatureImage),primaryColor:i(c.primaryColor,b.reportPrimaryColor,b.primaryColor,d.primaryColor,"#2563eb")||"#2563eb",fontFamily:i(c.fontFamily,d.fontFamily,"Arial, sans-serif")||"Arial, sans-serif"}}function r(a){return i(a?.resolvedStudentPhotoUrl,a?.studentPhoto,a?.photo)}function s(a,b){var c,d,e;return b?"subject"===a&&(c=b)&&"assessmentColumns"in c&&"subjectName"in c?[{key:"students",label:"Students",value:b.students.length},{key:"highest",label:"Highest Score",value:k(b.highestScore,1),rawValue:b.highestScore},{key:"lowest",label:"Lowest Score",value:k(b.lowestScore,1),rawValue:b.lowestScore},{key:"average",label:"Class Average",value:k(b.classAverage,1),rawValue:b.classAverage}]:"class"===a&&(d=b)&&"subjectColumns"in d&&"students"in d&&!("periodNames"in d)?[{key:"students",label:"Students",value:b.students.length},{key:"subjects",label:"Subjects",value:b.subjectColumns.length},{key:"highest",label:"Highest Average",value:k(b.highestAverage,1),rawValue:b.highestAverage},{key:"average",label:"Class Average",value:k(b.classAverage,1),rawValue:b.classAverage}]:"annual"===a&&(e=b)&&"periodNames"in e&&"promotionCount"in e?[{key:"students",label:"Students",value:b.totalStudents},{key:"subjects",label:"Subjects",value:b.totalSubjects},{key:"periods",label:"Periods",value:b.totalPeriods},{key:"average",label:"Class Average",value:k(b.classAverage,1),rawValue:b.classAverage},{key:"promoted",label:"Promoted",value:b.promotionCount},{key:"repeated",label:"Repeated",value:b.repeatCount}]:[]:[]}function t(a){let{branding:b,settings:c}=a,d=a.tone||"classic";return{width:"portrait"===c.orientation?"210mm":"297mm",minHeight:"portrait"===c.orientation?"297mm":"210mm",margin:"0 auto 18px",padding:a.compact?"8mm":"10mm",boxSizing:"border-box",position:"relative",overflow:"hidden",background:"#fff",color:"#111827",fontFamily:b.fontFamily,border:"minimal"===d?"0":"1px solid #d1d5db",borderRadius:"modern"===d||"analytics"===d?16:4,boxShadow:"0 18px 48px rgba(15,23,42,.10)",pageBreakAfter:a.pageBreakAfter?"always":"auto",breakAfter:a.pageBreakAfter?"page":"auto"}}function u(a){return"class"===a?"No class broadsheet records are available for the selected filters.":"annual"===a?"No annual broadsheet records are available for the selected filters.":"No subject broadsheet records are available for the selected filters."}function v(a){let{dataset:b,settings:c}=a;if(!b)return[];let d=b.assessmentProjection;return(d?.columns?.length?d.columns.map(a=>({assessmentStructureItemId:a.itemId,parentItemId:a.parentItemId,name:a.name,shortLabel:a.shortLabel,pathLabels:[...a.pathLabels],depth:a.depth,order:a.order,itemType:a.itemType,aggregationMode:a.aggregationMode,weight:a.effectiveWeight,effectiveWeight:a.effectiveWeight,maxScore:a.maxScore,isParent:a.isParent,isLeaf:a.isLeaf,calculatedFromChildren:a.calculatedFromChildren,complete:a.complete,groupId:a.groupId,groupLabel:a.groupLabel,groupDepth:a.groupDepth,columnSpan:a.columnSpan})):b.assessmentColumns??[]).filter(a=>{let b=a.depth??0;return(null===c.broadsheetMaximumAssessmentDepth||void 0===c.broadsheetMaximumAssessmentDepth||!(b>c.broadsheetMaximumAssessmentDepth))&&(!!c.showAssessmentParentItems||!a.isParent)&&(!!c.showAssessmentChildItems||!(b>0))&&(!!c.showCalculatedAssessmentItems||!a.calculatedFromChildren)}).sort((a,b)=>(a.order??0)-(b.order??0)||(a.depth??0)-(b.depth??0)||a.name.localeCompare(b.name))}function w(a,b){if(b.showAssessmentHierarchyPath&&a.pathLabels?.length)return a.pathLabels.join(" \xb7 ");let c=a.shortLabel||a.name;return b.indentAssessmentChildren&&(a.depth??0)>0?`${"› ".repeat(Math.min(a.depth??0,3))}${c}`:c}function x(a){let{item:b,settings:c,decimals:d=0}=a;if(!b)return"-";let e=b.rawScore??b.score??0;return c.showAssessmentRawScores&&c.showAssessmentMaximumScores?`${j(e,d)}/${j(b.maxScore,d)}`:c.showAssessmentRawScores?j(e,d):c.showAssessmentWeightedScores?j(b.weightedScore,1):k(b.normalizedPercentage,0)}function y({kind:a,branding:b,settings:c,title:e,subtitle:f,academicStructureName:g,academicPeriodName:h,className:j,subjectName:k,teacherName:l,academicYear:n,generatedAt:o,compact:p=!1}){let q=i(e,c.broadsheetTitleLabel,"class"===a?"Class Broadsheet":"annual"===a?"Annual Cumulative Broadsheet":"Subject Broadsheet"),r=[g?{label:"Academic Structure",value:g}:null,h?{label:"Academic Period",value:h}:null,n?{label:"Academic Year",value:n}:null,j?{label:"Class",value:j}:null,k?{label:"Subject",value:k}:null,l?{label:"Teacher",value:l}:null].filter(Boolean),s=[b.address,b.phone?`Tel: ${b.phone}`:"",b.email,b.website].filter(Boolean).join("  •  ");return(0,d.jsxs)("header",{style:{color:"#111",fontFamily:b.fontFamily||"Arial, sans-serif",marginBottom:p?7:9},children:[(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:c.showBroadsheetLogo&&b.logo?`${p?45:54}px minmax(0,1fr) auto`:"minmax(0,1fr) auto",alignItems:"center",gap:p?8:11,padding:p?"4px 7px":"6px 9px",borderTop:"3px double #111",borderBottom:"3px double #111",background:"#fff"},children:[c.showBroadsheetLogo&&b.logo&&(0,d.jsx)("div",{style:{width:p?45:54,height:p?45:54,border:"1px solid #111",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",background:"#fff"},children:(0,d.jsx)("img",{src:b.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:3,boxSizing:"border-box"}})}),(0,d.jsxs)("div",{style:{minWidth:0,textAlign:"center"},children:[(0,d.jsx)("div",{style:{fontSize:p?14:17,lineHeight:1.06,fontWeight:950,textTransform:"uppercase",letterSpacing:.35,overflowWrap:"anywhere"},children:b.schoolName}),(b.motto||b.branchName)&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:p?9.1:9.9,fontWeight:750,lineHeight:1.06},children:[b.motto,b.branchName].filter(Boolean).join("  •  ")}),s&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:p?9.2:10,lineHeight:1.06,color:"#333",overflowWrap:"anywhere"},children:s})]}),(0,d.jsxs)("div",{style:{minWidth:p?170:205,maxWidth:p?215:250,border:"1px solid #111",padding:p?"5px 8px":"6px 10px",textAlign:"center",background:"#f5f5f5"},children:[(0,d.jsx)("div",{style:{fontSize:p?9.5:11,fontWeight:950,textTransform:"uppercase",letterSpacing:.35,lineHeight:1.15},children:q}),f&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:p?8.5:9.2,lineHeight:1.06,fontWeight:750},children:f})]})]}),r.length>0&&(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(r.length,6)}, minmax(0,1fr))`,borderLeft:"1px solid #111",borderBottom:"1px solid #111",background:"#fff"},children:r.map(a=>(0,d.jsxs)("div",{style:{minWidth:0,padding:p?"1px 5px":"1px 6px",borderRight:"1px solid #111"},children:[(0,d.jsx)("div",{style:{fontSize:p?7.8:8.5,fontWeight:900,textTransform:"uppercase",letterSpacing:.08,color:"#444"},children:a.label}),(0,d.jsx)("div",{style:{marginTop:0,fontSize:p?9:9.7,fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.value})]},`${a.label}-${a.value}`))}),c.showBroadsheetGeneratedDate&&(0,d.jsxs)("div",{style:{marginTop:2,textAlign:"right",fontSize:p?8.2:8.9,fontWeight:750},children:[c.broadsheetGeneratedDateLabel||"Generated",":"," ",m(o||new Date)]})]})}function z(a){return{table:{width:"100%",borderCollapse:"collapse",tableLayout:"auto",fontSize:a?8.5:9.5,lineHeight:1.15,color:"#111"},th:{border:"1px solid #111",padding:a?"2.5px 2px":"3px 2.5px",background:"#e9e9e9",color:"#111",textAlign:"center",verticalAlign:"middle",fontWeight:900,whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.15},td:{border:"1px solid #111",padding:a?"1.5px 2px":"2px 2.5px",verticalAlign:"middle",whiteSpace:"nowrap"}}}function A({items:a,compact:b}){let c=a.filter(a=>!1!==a.show);return c.length?(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(c.length,8)}, minmax(0,1fr))`,borderTop:"1px solid #111",borderLeft:"1px solid #111",marginBottom:b?5:7},children:c.map(a=>(0,d.jsxs)("div",{style:{minWidth:0,padding:b?"2.5px 4px":"3px 5px",borderRight:"1px solid #111",borderBottom:"1px solid #111",background:"#fff"},children:[(0,d.jsx)("div",{style:{fontSize:b?8.2:9,fontWeight:900,textTransform:"uppercase",letterSpacing:0,color:"#444"},children:a.label}),(0,d.jsx)("div",{style:{marginTop:1,fontSize:b?10:11,fontWeight:900,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.value})]},a.label))}):null}function B({student:a,settings:b,compact:c}){let e=r(a);return(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:b.showBroadsheetStudentPhoto&&e?`${c?21:25}px minmax(0,1fr)`:"minmax(0,1fr)",gap:c?4:5,alignItems:"center",minWidth:c?132:155},children:[b.showBroadsheetStudentPhoto&&e&&(0,d.jsx)("img",{src:e,alt:"Student",style:{width:c?21:25,height:c?21:25,objectFit:"cover",border:"1px solid #777"}}),(0,d.jsxs)("div",{style:{minWidth:0},children:[(0,d.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.studentName||"-"}),a.admissionNumber&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#444"},children:a.admissionNumber})]})]})}function C({settings:a,schoolName:b,pageNumber:c,totalPages:e,compact:f}){return(0,d.jsxs)("footer",{style:{marginTop:f?5:7,paddingTop:f?2:3,borderTop:"1px solid #111",display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,fontSize:f?8.5:9.5,color:"#333"},children:[(0,d.jsx)("span",{children:a.broadsheetFooterText||`Official academic broadsheet generated for ${b}.`}),a.showBroadsheetPageNumber&&(0,d.jsxs)("span",{style:{whiteSpace:"nowrap",fontWeight:800},children:["Page ",c||1,e?` of ${e}`:""]})]})}function D({kind:a,dataset:b,header:c,template:e,settings:f,compact:g=!1,pageBreakAfter:h=!0,showWatermark:j=!0,generatedAt:k,pageNumber:l,totalPages:m,className:n,style:o}){var r,s;let u,v=p({kind:a,template:e,settings:f}),w=q(c),x=(u=c||{},{academicStructureName:i(u.academicStructure?.name,u.academicStructureName),academicPeriodName:i(u.academicPeriod?.name,u.academicPeriodName)});w.primaryColor;let z={...t({branding:w,settings:v,compact:g,pageBreakAfter:h,tone:"classic"}),...o,background:"#fff",color:"#111",border:"1px solid #111",borderRadius:0,boxShadow:"0 16px 40px rgba(15,23,42,.10)"};if(!b)return null;let A=(r=a,s=b,"subject"===r?{subtitle:`${s.className||"Class"} • ${s.students?.length||0} Students`,className:s.className,subjectName:s.subjectName,teacherName:s.teacherName,academicStructureName:"",academicYear:""}:"class"===r?{subtitle:`${s.className||"Class"} • ${s.students?.length||0} Students • ${s.subjectColumns?.length||0} Subjects`,className:s.className,subjectName:"",teacherName:"",academicStructureName:"",academicYear:""}:{subtitle:`${s.className||"Class"} • ${s.academicYear||"Academic Year"} • ${s.totalStudents||0} Students`,className:s.className,subjectName:"",teacherName:"",academicStructureName:s.academicStructureName,academicYear:s.academicYear});return(0,d.jsxs)("section",{className:`print-page report-page-break broadsheet-template-page broadsheet-classic-page ${n||""}`,style:z,children:[w.backgroundImage&&(0,d.jsx)("img",{src:w.backgroundImage,alt:"","aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,pointerEvents:"none",zIndex:0}}),j&&v.showBroadsheetWatermark&&w.watermark&&(0,d.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.035,pointerEvents:"none",zIndex:0},children:(0,d.jsx)("img",{src:w.watermark,alt:"",style:{width:"42%",maxHeight:"58%",objectFit:"contain"}})}),(0,d.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,d.jsx)(y,{kind:a,branding:w,settings:v,title:"class"===a?"Class Broadsheet":"annual"===a?"Annual Cumulative Broadsheet":"Subject Broadsheet",subtitle:A.subtitle,academicStructureName:A.academicStructureName||x.academicStructureName,academicPeriodName:x.academicPeriodName,academicYear:A.academicYear,className:A.className,subjectName:A.subjectName,teacherName:A.teacherName,generatedAt:k,compact:g}),"subject"===a&&(0,d.jsx)(E,{dataset:b,settings:v,compact:g}),"class"===a&&(0,d.jsx)(F,{dataset:b,settings:v,compact:g}),"annual"===a&&(0,d.jsx)(G,{dataset:b,settings:v,compact:g}),v.showBroadsheetSignatures&&(0,d.jsx)("div",{style:{marginTop:g?8:12,display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:g?18:28},children:["Prepared By","Checked By","Headteacher / Principal"].map(a=>(0,d.jsxs)("div",{style:{textAlign:"center"},children:[(0,d.jsx)("div",{style:{height:g?12:17}}),(0,d.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:3,fontSize:g?8.5:9.5,fontWeight:850},children:a})]},a))}),(0,d.jsx)(C,{settings:v,schoolName:w.schoolName,pageNumber:l,totalPages:m,compact:g})]})]})}function E({dataset:a,settings:b,compact:c}){let f=z(c),g=(0,e.useMemo)(()=>v({dataset:a,settings:b}),[a,b]);return(0,d.jsxs)(d.Fragment,{children:[b.showBroadsheetSummary&&(0,d.jsx)(A,{compact:c,items:[{label:"Students",value:a.students.length},{label:"Highest Score",value:`${j(a.highestScore,1)}%`,show:!1!==b.showBroadsheetHighestScore},{label:"Lowest Score",value:`${j(a.lowestScore,1)}%`,show:!1!==b.showBroadsheetLowestScore},{label:"Class Average",value:`${j(a.classAverage,1)}%`,show:!1!==b.showBroadsheetClassAverage}]}),(0,d.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,d.jsxs)("table",{style:f.table,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...f.th,width:26},children:"#"}),(0,d.jsx)("th",{style:{...f.th,textAlign:"left",minWidth:145},children:b.studentColumnLabel||"Student"}),!1!==b.showBroadsheetAssessmentBreakdown&&g.map(a=>(0,d.jsxs)("th",{style:f.th,children:[b.broadsheetShowAssessmentGroupHeaders&&a.groupLabel&&(0,d.jsx)("div",{style:{marginBottom:1,fontSize:"0.92em",opacity:.92,textTransform:"uppercase"},children:a.groupLabel}),(0,d.jsx)("div",{children:w(a,b)}),(b.showAssessmentWeights||b.showAssessmentMaximumScores)&&(0,d.jsxs)("div",{style:{marginTop:1,fontSize:"0.96em"},children:[b.showAssessmentWeights?`W:${j(a.effectiveWeight??a.weight,0)}`:"",b.showAssessmentWeights&&b.showAssessmentMaximumScores?" \xb7 ":"",b.showAssessmentMaximumScores?`M:${j(a.maxScore,0)}`:""]})]},a.assessmentStructureItemId)),!1!==b.showBroadsheetWeightedTotal&&(0,d.jsx)("th",{style:f.th,children:"Weighted"}),!1!==b.showBroadsheetPercentage&&(0,d.jsx)("th",{style:f.th,children:"%"}),!1!==b.showBroadsheetGrade&&(0,d.jsx)("th",{style:f.th,children:b.gradeColumnLabel||"Grade"}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("th",{style:f.th,children:"GPA"}),!1!==b.showBroadsheetPosition&&(0,d.jsx)("th",{style:f.th,children:b.positionColumnLabel||"Position"}),!1!==b.showBroadsheetRemark&&(0,d.jsx)("th",{style:{...f.th,minWidth:80},children:b.remarkColumnLabel||"Remark"})]})}),(0,d.jsx)("tbody",{children:a.students.map((a,e)=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:e+1}),(0,d.jsx)("td",{style:f.td,children:(0,d.jsx)(B,{student:a,settings:b,compact:c})}),!1!==b.showBroadsheetAssessmentBreakdown&&g.map(c=>{let e=a.breakdown.find(a=>a.assessmentStructureItemId===c.assessmentStructureItemId);return(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:x({item:e,settings:b})},c.assessmentStructureItemId)}),!1!==b.showBroadsheetWeightedTotal&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:850},children:j(a.weightedTotal,1)}),!1!==b.showBroadsheetPercentage&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:850},children:k(a.percentage,1)}),!1!==b.showBroadsheetGrade&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:900},children:a.grade||"-"}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:null!=a.gpa?j(a.gpa,2):"-"}),!1!==b.showBroadsheetPosition&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:l(a.position)}),!1!==b.showBroadsheetRemark&&(0,d.jsx)("td",{style:{...f.td,whiteSpace:"normal",minWidth:80},children:a.remark||"-"})]},a.studentId))})]})})]})}function F({dataset:a,settings:b,compact:c}){let e=z(c);return(0,d.jsxs)(d.Fragment,{children:[b.showBroadsheetSummary&&(0,d.jsx)(A,{compact:c,items:[{label:"Students",value:a.students.length},{label:"Subjects",value:a.subjectColumns.length},{label:"Highest Average",value:`${j(a.highestAverage,1)}%`,show:!1!==b.showBroadsheetClassHighestAverage},{label:"Lowest Average",value:`${j(a.lowestAverage,1)}%`,show:!1!==b.showBroadsheetClassLowestAverage},{label:"Class Average",value:`${j(a.classAverage,1)}%`}]}),(0,d.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,d.jsxs)("table",{style:e.table,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...e.th,width:26},children:"#"}),(0,d.jsx)("th",{style:{...e.th,textAlign:"left",minWidth:145},children:b.studentColumnLabel||"Student"}),!1!==b.showBroadsheetSubjectScores&&a.subjectColumns.map(a=>(0,d.jsxs)("th",{style:e.th,children:[a.shortName||a.subjectCode||a.subjectName,(0,d.jsx)("div",{style:{marginTop:1,maxWidth:65,whiteSpace:"normal",fontSize:"0.94em"},children:a.subjectName})]},a.classSubjectId)),!1!==b.showBroadsheetTotal&&(0,d.jsx)("th",{style:e.th,children:"Total"}),!1!==b.showBroadsheetAverage&&(0,d.jsx)("th",{style:e.th,children:"Average"}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("th",{style:e.th,children:"GPA"}),!1!==b.showBroadsheetClassPosition&&(0,d.jsx)("th",{style:e.th,children:b.positionColumnLabel||"Position"}),!1!==b.showBroadsheetAttendance&&(0,d.jsx)("th",{style:e.th,children:"Attendance"})]})}),(0,d.jsx)("tbody",{children:a.students.map((f,g)=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{...e.td,textAlign:"center"},children:g+1}),(0,d.jsx)("td",{style:e.td,children:(0,d.jsx)(B,{student:f,settings:b,compact:c})}),!1!==b.showBroadsheetSubjectScores&&a.subjectColumns.map(a=>{let c=f.subjects.find(b=>b.classSubjectId===a.classSubjectId);return(0,d.jsx)("td",{style:{...e.td,textAlign:"center"},children:c?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("strong",{children:j(c.percentage,1)}),b.showBroadsheetSubjectGrades&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.96em"},children:c.grade||"-"})]}):"-"},a.classSubjectId)}),!1!==b.showBroadsheetTotal&&(0,d.jsx)("td",{style:{...e.td,textAlign:"center",fontWeight:850},children:j(f.total,1)}),!1!==b.showBroadsheetAverage&&(0,d.jsx)("td",{style:{...e.td,textAlign:"center",fontWeight:900},children:k(f.average,1)}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("td",{style:{...e.td,textAlign:"center"},children:null!=f.gpa?j(f.gpa,2):"-"}),!1!==b.showBroadsheetClassPosition&&(0,d.jsx)("td",{style:{...e.td,textAlign:"center"},children:l(f.position)}),!1!==b.showBroadsheetAttendance&&(0,d.jsx)("td",{style:{...e.td,textAlign:"center"},children:k(f.attendancePercent,1)})]},f.studentId))})]})})]})}function G({dataset:a,settings:b,compact:c}){let e=z(c);return(0,d.jsxs)(d.Fragment,{children:[b.showBroadsheetSummary&&(0,d.jsx)(A,{compact:c,items:[{label:"Students",value:a.totalStudents},{label:"Subjects",value:a.totalSubjects},{label:"Periods",value:a.totalPeriods},{label:"Highest Average",value:`${j(a.highestAverage,1)}%`},{label:"Lowest Average",value:`${j(a.lowestAverage,1)}%`},{label:"Class Average",value:`${j(a.classAverage,1)}%`},{label:"Promote",value:a.promotionCount,show:!1!==b.showBroadsheetPromotionDecision},{label:"Repeat",value:a.repeatCount,show:!1!==b.showBroadsheetPromotionDecision}]}),b.showBroadsheetStatistics&&a.periodNames.length>0&&(0,d.jsxs)("div",{style:{marginBottom:c?5:7,fontSize:c?8.5:9.5,fontWeight:800},children:["Periods: ",a.periodNames.join("  •  ")]}),(0,d.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,d.jsxs)("table",{style:e.table,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...e.th,width:26},children:"#"}),(0,d.jsx)("th",{style:{...e.th,textAlign:"left",minWidth:145},children:b.studentColumnLabel||"Student"}),a.subjectColumns.map(a=>(0,d.jsxs)("th",{style:e.th,children:[a.shortName||a.subjectCode||a.subjectName,(0,d.jsx)("div",{style:{marginTop:1,maxWidth:62,whiteSpace:"normal",fontSize:"0.94em"},children:a.subjectName})]},`${a.subjectId||a.subjectName}`)),!1!==b.showBroadsheetAnnualAverage&&(0,d.jsx)("th",{style:e.th,children:"Annual Avg."}),!1!==b.showBroadsheetAnnualGPA&&(0,d.jsx)("th",{style:e.th,children:"GPA"}),!1!==b.showBroadsheetAnnualPosition&&(0,d.jsx)("th",{style:e.th,children:b.positionColumnLabel||"Position"}),!1!==b.showBroadsheetPromotionDecision&&(0,d.jsx)("th",{style:e.th,children:"Decision"})]})}),(0,d.jsx)("tbody",{children:a.students.map((f,g)=>{var h;return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{...e.td,textAlign:"center"},children:g+1}),(0,d.jsx)("td",{style:e.td,children:(0,d.jsx)(H,{student:f,settings:b,compact:c})}),a.subjectColumns.map(a=>{let c=f.subjects.find(b=>a.subjectId&&b.subjectId===a.subjectId||b.subjectName===a.subjectName);return(0,d.jsx)("td",{style:{...e.td,textAlign:"center"},children:c?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("strong",{children:j(c.average,1)}),b.showBroadsheetPeriodScores&&c.periodScores.length>0&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.92em",whiteSpace:"normal",lineHeight:1.15},children:c.periodScores.map(a=>`${a.academicPeriodName}: ${j(a.percentage,0)}`).join(" \xb7 ")})]}):"-"},`${a.subjectId||a.subjectName}`)}),!1!==b.showBroadsheetAnnualAverage&&(0,d.jsx)("td",{style:{...e.td,textAlign:"center",fontWeight:900},children:k(f.average,1)}),!1!==b.showBroadsheetAnnualGPA&&(0,d.jsx)("td",{style:{...e.td,textAlign:"center"},children:null!=f.gpa?j(f.gpa,2):"-"}),!1!==b.showBroadsheetAnnualPosition&&(0,d.jsx)("td",{style:{...e.td,textAlign:"center"},children:l(f.position)}),!1!==b.showBroadsheetPromotionDecision&&(0,d.jsx)("td",{style:{...e.td,textAlign:"center",fontWeight:850},children:(h=f.finalDecision||f.recommendation)?h.charAt(0).toUpperCase()+h.slice(1):"-"})]},f.studentId)})})]})})]})}function H({student:a,settings:b,compact:c}){return(0,d.jsxs)("div",{style:{minWidth:c?132:155},children:[(0,d.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.studentName||"-"}),a.admissionNumber&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#444"},children:a.admissionNumber})]})}function I({kind:a,branding:b,settings:c,title:e,subtitle:f,academicStructureName:g,academicPeriodName:h,className:j,subjectName:k,teacherName:l,academicYear:n,generatedAt:o,compact:p=!1}){let q=b.primaryColor||"#2563eb",r=i(e,c.broadsheetTitleLabel,"class"===a?"Class Broadsheet":"annual"===a?"Annual Cumulative Broadsheet":"Subject Broadsheet"),s=c.showBroadsheetGeneratedDate&&o?m(o):"",t=[g?{label:"Structure",value:g}:null,h?{label:"Period",value:h}:null,n?{label:"Year",value:n}:null,j?{label:"Class",value:j}:null,k?{label:"Subject",value:k}:null,l?{label:"Teacher",value:l}:null].filter(Boolean),u=[b.address,b.phone?`Tel: ${b.phone}`:"",b.email,b.website].filter(Boolean).join("  •  ");return(0,d.jsxs)("header",{className:"broadsheet-modern-header",style:{position:"relative",overflow:"hidden",marginBottom:p?7:9,padding:p?6:7,border:"1px solid #dbe3ee",borderRadius:p?13:16,background:"#ffffff",color:"#172033",fontFamily:b.fontFamily||"Arial, sans-serif",boxShadow:"0 8px 24px rgba(15,23,42,.055)"},children:[(0,d.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",insetInlineStart:0,top:0,bottom:0,width:p?5:6,background:q}}),(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:c.showBroadsheetLogo&&b.logo?`${p?42:50}px minmax(0,1fr) ${p?175:210}px`:`minmax(0,1fr) ${p?175:210}px`,gap:p?8:11,alignItems:"center",paddingInlineStart:p?3:5},children:[c.showBroadsheetLogo&&b.logo&&(0,d.jsx)("div",{style:{width:p?42:50,height:p?42:50,border:"1px solid #dbe3ee",borderRadius:p?11:14,overflow:"hidden",background:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:(0,d.jsx)("img",{src:b.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:p?4:5,boxSizing:"border-box"}})}),(0,d.jsxs)("div",{style:{minWidth:0},children:[(0,d.jsx)("div",{style:{fontSize:p?14.5:17.5,lineHeight:1.05,fontWeight:950,textTransform:"uppercase",letterSpacing:.2,color:"#172033",overflowWrap:"anywhere"},children:b.schoolName}),(b.motto||b.branchName)&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:p?9.1:9.9,lineHeight:1.08,fontWeight:760,color:"#475569",overflowWrap:"anywhere"},children:[b.motto,b.branchName].filter(Boolean).join("  •  ")}),u&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:p?9.2:10,lineHeight:1.08,fontWeight:650,color:"#475569",overflowWrap:"anywhere"},children:u})]}),(0,d.jsxs)("div",{"data-report-color-block":"true",style:{minWidth:0,borderRadius:p?12:14,padding:p?"5px 9px":"6px 11px",background:`linear-gradient(135deg, ${q}, ${q}dd)`,color:"#fff",textAlign:"left",boxShadow:"0 8px 18px rgba(15,23,42,.12)"},children:[(0,d.jsx)("div",{style:{fontSize:p?9.2:10,fontWeight:950,lineHeight:1.12,textTransform:"uppercase",letterSpacing:.24,overflowWrap:"anywhere"},children:r}),f&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:p?8.5:9.3,fontWeight:720,lineHeight:1.08,opacity:.92,overflowWrap:"anywhere"},children:f}),s&&(0,d.jsxs)("div",{style:{marginTop:2,paddingTop:2,borderTop:"1px solid rgba(255,255,255,.28)",fontSize:p?7.8:8.5,fontWeight:800,lineHeight:1.15,opacity:.95},children:[c.broadsheetGeneratedDateLabel||"Generated",":"," ",s]})]})]}),t.length>0&&(0,d.jsx)("div",{style:{marginTop:5,display:"grid",gridTemplateColumns:`repeat(${Math.min(t.length,6)}, minmax(0,1fr))`,gap:p?4:6,paddingInlineStart:p?3:5},children:t.map(a=>(0,d.jsxs)("div",{style:{minWidth:0,border:"1px solid #e2e8f0",borderRadius:p?9:11,background:"#f8fafc",padding:p?"2px 6px":"3px 7px"},children:[(0,d.jsx)("div",{style:{fontSize:p?7.8:8.5,fontWeight:900,textTransform:"uppercase",letterSpacing:.22,color:"#475569"},children:a.label}),(0,d.jsx)("div",{style:{marginTop:1,fontSize:p?8.9:9.6,fontWeight:880,color:"#172033",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.value})]},`${a.label}-${a.value}`))}),(0,d.jsx)("style",{children:`
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
      `})]})}function J(a,b){return{table:{width:"100%",borderCollapse:"separate",borderSpacing:0,tableLayout:"auto",fontSize:a?8.5:9.5,lineHeight:1.18,color:"#172033",border:"1px solid #dbe3ee",borderRadius:12,overflow:"hidden",background:"#fff"},th:{border:"0",borderRight:"1px solid rgba(255,255,255,.22)",borderBottom:"1px solid #dbe3ee",padding:a?"2.5px 2px":"3px 2.5px",background:b,color:"#fff",textAlign:"center",verticalAlign:"middle",fontWeight:900,whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.15},td:{border:"0",borderRight:"1px solid #e7edf5",borderBottom:"1px solid #e7edf5",padding:a?"1.5px 2px":"2px 2.5px",verticalAlign:"middle",whiteSpace:"nowrap",background:"#fff"}}}function K({items:a,compact:b}){let c=a.filter(a=>!1!==a.show);return c.length?(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(c.length,8)}, minmax(0,1fr))`,gap:b?5:7,marginBottom:b?7:9},children:c.map(a=>(0,d.jsxs)("div",{style:{minWidth:0,padding:b?"2.5px 4px":"3px 5px",border:"1px solid #dbe3ee",borderRadius:10,background:"#f8fafc",boxShadow:"0 4px 12px rgba(15,23,42,.035)"},children:[(0,d.jsx)("div",{style:{fontSize:b?8.2:9,fontWeight:900,textTransform:"uppercase",letterSpacing:0,color:"#475569"},children:a.label}),(0,d.jsx)("div",{style:{marginTop:1,fontSize:b?10:11,fontWeight:900,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.value})]},a.label))}):null}function L({student:a,settings:b,compact:c}){let e=r(a);return(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:b.showBroadsheetStudentPhoto&&e?`${c?21:25}px minmax(0,1fr)`:"minmax(0,1fr)",gap:c?4:5,alignItems:"center",minWidth:c?132:155},children:[b.showBroadsheetStudentPhoto&&e&&(0,d.jsx)("img",{src:e,alt:"Student",style:{width:c?21:25,height:c?21:25,objectFit:"cover",border:"2px solid #e2e8f0",borderRadius:8}}),(0,d.jsxs)("div",{style:{minWidth:0},children:[(0,d.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.studentName||"-"}),a.admissionNumber&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#475569"},children:a.admissionNumber})]})]})}function M({settings:a,schoolName:b,pageNumber:c,totalPages:e,compact:f}){return(0,d.jsxs)("footer",{style:{marginTop:f?5:7,paddingTop:f?2:3,borderTop:"1px solid #dbe3ee",display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,fontSize:f?8.5:9.5,color:"#333"},children:[(0,d.jsx)("span",{children:a.broadsheetFooterText||`Official academic broadsheet generated for ${b}.`}),a.showBroadsheetPageNumber&&(0,d.jsxs)("span",{style:{whiteSpace:"nowrap",fontWeight:800},children:["Page ",c||1,e?` of ${e}`:""]})]})}function N({kind:a,dataset:b,header:c,template:e,settings:f,compact:g=!1,pageBreakAfter:h=!0,showWatermark:j=!0,generatedAt:k,pageNumber:l,totalPages:m,className:n,style:o}){var r,s;let u,v=p({kind:a,template:e,settings:f}),w=q(c),x=(u=c||{},{academicStructureName:i(u.academicStructure?.name,u.academicStructureName),academicPeriodName:i(u.academicPeriod?.name,u.academicPeriodName)}),y=w.primaryColor||"#111",z={...t({branding:w,settings:v,compact:g,pageBreakAfter:h,tone:"classic"}),...o,background:"#fff",color:"#172033",border:"1px solid #dbe3ee",borderRadius:18,boxShadow:"0 20px 52px rgba(15,23,42,.10)"};if(!b)return null;let A=(r=a,s=b,"subject"===r?{subtitle:`${s.className||"Class"} • ${s.students?.length||0} Students`,className:s.className,subjectName:s.subjectName,teacherName:s.teacherName,academicStructureName:"",academicYear:""}:"class"===r?{subtitle:`${s.className||"Class"} • ${s.students?.length||0} Students • ${s.subjectColumns?.length||0} Subjects`,className:s.className,subjectName:"",teacherName:"",academicStructureName:"",academicYear:""}:{subtitle:`${s.className||"Class"} • ${s.academicYear||"Academic Year"} • ${s.totalStudents||0} Students`,className:s.className,subjectName:"",teacherName:"",academicStructureName:s.academicStructureName,academicYear:s.academicYear});return(0,d.jsxs)("section",{className:`print-page report-page-break broadsheet-template-page broadsheet-modern-page ${n||""}`,style:z,children:[w.backgroundImage&&(0,d.jsx)("img",{src:w.backgroundImage,alt:"","aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,pointerEvents:"none",zIndex:0}}),j&&v.showBroadsheetWatermark&&w.watermark&&(0,d.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.035,pointerEvents:"none",zIndex:0},children:(0,d.jsx)("img",{src:w.watermark,alt:"",style:{width:"42%",maxHeight:"58%",objectFit:"contain"}})}),(0,d.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,d.jsx)("div",{style:{borderRadius:16,overflow:"hidden",boxShadow:"0 8px 24px rgba(15,23,42,.06)",marginBottom:g?7:9},children:(0,d.jsx)(I,{kind:a,branding:w,settings:v,title:"class"===a?"Class Broadsheet":"annual"===a?"Annual Cumulative Broadsheet":"Subject Broadsheet",subtitle:A.subtitle,academicStructureName:A.academicStructureName||x.academicStructureName,academicPeriodName:x.academicPeriodName,academicYear:A.academicYear,className:A.className,subjectName:A.subjectName,teacherName:A.teacherName,generatedAt:k,compact:g})}),"subject"===a&&(0,d.jsx)(O,{dataset:b,settings:v,compact:g,primary:y}),"class"===a&&(0,d.jsx)(P,{dataset:b,settings:v,compact:g,primary:y}),"annual"===a&&(0,d.jsx)(Q,{dataset:b,settings:v,compact:g,primary:y}),v.showBroadsheetSignatures&&(0,d.jsx)("div",{style:{marginTop:g?8:12,display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:g?18:28},children:["Prepared By","Checked By","Headteacher / Principal"].map(a=>(0,d.jsxs)("div",{style:{textAlign:"center"},children:[(0,d.jsx)("div",{style:{height:g?12:17}}),(0,d.jsx)("div",{style:{borderTop:"1px solid #dbe3ee",paddingTop:3,fontSize:g?8.5:9.5,fontWeight:850},children:a})]},a))}),(0,d.jsx)(M,{settings:v,schoolName:w.schoolName,pageNumber:l,totalPages:m,compact:g})]})]})}function O({dataset:a,settings:b,compact:c,primary:f}){let g=J(c,f),h=(0,e.useMemo)(()=>v({dataset:a,settings:b}),[a,b]);return(0,d.jsxs)(d.Fragment,{children:[b.showBroadsheetSummary&&(0,d.jsx)(K,{compact:c,items:[{label:"Students",value:a.students.length},{label:"Highest Score",value:`${j(a.highestScore,1)}%`,show:!1!==b.showBroadsheetHighestScore},{label:"Lowest Score",value:`${j(a.lowestScore,1)}%`,show:!1!==b.showBroadsheetLowestScore},{label:"Class Average",value:`${j(a.classAverage,1)}%`,show:!1!==b.showBroadsheetClassAverage}]}),(0,d.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,d.jsxs)("table",{style:g.table,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...g.th,width:26},children:"#"}),(0,d.jsx)("th",{style:{...g.th,textAlign:"left",minWidth:145},children:b.studentColumnLabel||"Student"}),!1!==b.showBroadsheetAssessmentBreakdown&&h.map(a=>(0,d.jsxs)("th",{style:g.th,children:[b.broadsheetShowAssessmentGroupHeaders&&a.groupLabel&&(0,d.jsx)("div",{style:{marginBottom:1,fontSize:"0.92em",opacity:.92,textTransform:"uppercase"},children:a.groupLabel}),(0,d.jsx)("div",{children:w(a,b)}),(b.showAssessmentWeights||b.showAssessmentMaximumScores)&&(0,d.jsxs)("div",{style:{marginTop:1,fontSize:"0.96em"},children:[b.showAssessmentWeights?`W:${j(a.effectiveWeight??a.weight,0)}`:"",b.showAssessmentWeights&&b.showAssessmentMaximumScores?" \xb7 ":"",b.showAssessmentMaximumScores?`M:${j(a.maxScore,0)}`:""]})]},a.assessmentStructureItemId)),!1!==b.showBroadsheetWeightedTotal&&(0,d.jsx)("th",{style:g.th,children:"Weighted"}),!1!==b.showBroadsheetPercentage&&(0,d.jsx)("th",{style:g.th,children:"%"}),!1!==b.showBroadsheetGrade&&(0,d.jsx)("th",{style:g.th,children:b.gradeColumnLabel||"Grade"}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("th",{style:g.th,children:"GPA"}),!1!==b.showBroadsheetPosition&&(0,d.jsx)("th",{style:g.th,children:b.positionColumnLabel||"Position"}),!1!==b.showBroadsheetRemark&&(0,d.jsx)("th",{style:{...g.th,minWidth:80},children:b.remarkColumnLabel||"Remark"})]})}),(0,d.jsx)("tbody",{children:a.students.map((a,e)=>(0,d.jsxs)("tr",{style:{background:e%2==0?"#ffffff":"#f8fafc"},children:[(0,d.jsx)("td",{style:{...g.td,textAlign:"center"},children:e+1}),(0,d.jsx)("td",{style:g.td,children:(0,d.jsx)(L,{student:a,settings:b,compact:c})}),!1!==b.showBroadsheetAssessmentBreakdown&&h.map(c=>{let e=a.breakdown.find(a=>a.assessmentStructureItemId===c.assessmentStructureItemId);return(0,d.jsx)("td",{style:{...g.td,textAlign:"center"},children:x({item:e,settings:b})},c.assessmentStructureItemId)}),!1!==b.showBroadsheetWeightedTotal&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center",fontWeight:850},children:j(a.weightedTotal,1)}),!1!==b.showBroadsheetPercentage&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center",fontWeight:850},children:k(a.percentage,1)}),!1!==b.showBroadsheetGrade&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center",fontWeight:900},children:a.grade||"-"}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center"},children:null!=a.gpa?j(a.gpa,2):"-"}),!1!==b.showBroadsheetPosition&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center"},children:l(a.position)}),!1!==b.showBroadsheetRemark&&(0,d.jsx)("td",{style:{...g.td,whiteSpace:"normal",minWidth:80},children:a.remark||"-"})]},a.studentId))})]})})]})}function P({dataset:a,settings:b,compact:c,primary:e}){let f=J(c,e);return(0,d.jsxs)(d.Fragment,{children:[b.showBroadsheetSummary&&(0,d.jsx)(K,{compact:c,items:[{label:"Students",value:a.students.length},{label:"Subjects",value:a.subjectColumns.length},{label:"Highest Average",value:`${j(a.highestAverage,1)}%`,show:!1!==b.showBroadsheetClassHighestAverage},{label:"Lowest Average",value:`${j(a.lowestAverage,1)}%`,show:!1!==b.showBroadsheetClassLowestAverage},{label:"Class Average",value:`${j(a.classAverage,1)}%`}]}),(0,d.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,d.jsxs)("table",{style:f.table,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...f.th,width:26},children:"#"}),(0,d.jsx)("th",{style:{...f.th,textAlign:"left",minWidth:145},children:b.studentColumnLabel||"Student"}),!1!==b.showBroadsheetSubjectScores&&a.subjectColumns.map(a=>(0,d.jsxs)("th",{style:f.th,children:[a.shortName||a.subjectCode||a.subjectName,(0,d.jsx)("div",{style:{marginTop:1,maxWidth:65,whiteSpace:"normal",fontSize:"0.94em"},children:a.subjectName})]},a.classSubjectId)),!1!==b.showBroadsheetTotal&&(0,d.jsx)("th",{style:f.th,children:"Total"}),!1!==b.showBroadsheetAverage&&(0,d.jsx)("th",{style:f.th,children:"Average"}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("th",{style:f.th,children:"GPA"}),!1!==b.showBroadsheetClassPosition&&(0,d.jsx)("th",{style:f.th,children:b.positionColumnLabel||"Position"}),!1!==b.showBroadsheetAttendance&&(0,d.jsx)("th",{style:f.th,children:"Attendance"})]})}),(0,d.jsx)("tbody",{children:a.students.map((e,g)=>(0,d.jsxs)("tr",{style:{background:g%2==0?"#ffffff":"#f8fafc"},children:[(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:g+1}),(0,d.jsx)("td",{style:f.td,children:(0,d.jsx)(L,{student:e,settings:b,compact:c})}),!1!==b.showBroadsheetSubjectScores&&a.subjectColumns.map(a=>{let c=e.subjects.find(b=>b.classSubjectId===a.classSubjectId);return(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:c?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("strong",{children:j(c.percentage,1)}),b.showBroadsheetSubjectGrades&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.96em"},children:c.grade||"-"})]}):"-"},a.classSubjectId)}),!1!==b.showBroadsheetTotal&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:850},children:j(e.total,1)}),!1!==b.showBroadsheetAverage&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:900},children:k(e.average,1)}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:null!=e.gpa?j(e.gpa,2):"-"}),!1!==b.showBroadsheetClassPosition&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:l(e.position)}),!1!==b.showBroadsheetAttendance&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:k(e.attendancePercent,1)})]},e.studentId))})]})})]})}function Q({dataset:a,settings:b,compact:c,primary:e}){let f=J(c,e);return(0,d.jsxs)(d.Fragment,{children:[b.showBroadsheetSummary&&(0,d.jsx)(K,{compact:c,items:[{label:"Students",value:a.totalStudents},{label:"Subjects",value:a.totalSubjects},{label:"Periods",value:a.totalPeriods},{label:"Highest Average",value:`${j(a.highestAverage,1)}%`},{label:"Lowest Average",value:`${j(a.lowestAverage,1)}%`},{label:"Class Average",value:`${j(a.classAverage,1)}%`},{label:"Promote",value:a.promotionCount,show:!1!==b.showBroadsheetPromotionDecision},{label:"Repeat",value:a.repeatCount,show:!1!==b.showBroadsheetPromotionDecision}]}),b.showBroadsheetStatistics&&a.periodNames.length>0&&(0,d.jsxs)("div",{style:{marginBottom:c?5:7,fontSize:c?8.5:9.5,fontWeight:800},children:["Periods: ",a.periodNames.join("  •  ")]}),(0,d.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,d.jsxs)("table",{style:f.table,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...f.th,width:26},children:"#"}),(0,d.jsx)("th",{style:{...f.th,textAlign:"left",minWidth:145},children:b.studentColumnLabel||"Student"}),a.subjectColumns.map(a=>(0,d.jsxs)("th",{style:f.th,children:[a.shortName||a.subjectCode||a.subjectName,(0,d.jsx)("div",{style:{marginTop:1,maxWidth:62,whiteSpace:"normal",fontSize:"0.94em"},children:a.subjectName})]},`${a.subjectId||a.subjectName}`)),!1!==b.showBroadsheetAnnualAverage&&(0,d.jsx)("th",{style:f.th,children:"Annual Avg."}),!1!==b.showBroadsheetAnnualGPA&&(0,d.jsx)("th",{style:f.th,children:"GPA"}),!1!==b.showBroadsheetAnnualPosition&&(0,d.jsx)("th",{style:f.th,children:b.positionColumnLabel||"Position"}),!1!==b.showBroadsheetPromotionDecision&&(0,d.jsx)("th",{style:f.th,children:"Decision"})]})}),(0,d.jsx)("tbody",{children:a.students.map((e,g)=>{var h;return(0,d.jsxs)("tr",{style:{background:g%2==0?"#ffffff":"#f8fafc"},children:[(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:g+1}),(0,d.jsx)("td",{style:f.td,children:(0,d.jsx)(R,{student:e,settings:b,compact:c})}),a.subjectColumns.map(a=>{let c=e.subjects.find(b=>a.subjectId&&b.subjectId===a.subjectId||b.subjectName===a.subjectName);return(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:c?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("strong",{children:j(c.average,1)}),b.showBroadsheetPeriodScores&&c.periodScores.length>0&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.92em",whiteSpace:"normal",lineHeight:1.15},children:c.periodScores.map(a=>`${a.academicPeriodName}: ${j(a.percentage,0)}`).join(" \xb7 ")})]}):"-"},`${a.subjectId||a.subjectName}`)}),!1!==b.showBroadsheetAnnualAverage&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:900},children:k(e.average,1)}),!1!==b.showBroadsheetAnnualGPA&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:null!=e.gpa?j(e.gpa,2):"-"}),!1!==b.showBroadsheetAnnualPosition&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:l(e.position)}),!1!==b.showBroadsheetPromotionDecision&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:850},children:(h=e.finalDecision||e.recommendation)?h.charAt(0).toUpperCase()+h.slice(1):"-"})]},e.studentId)})})]})})]})}function R({student:a,settings:b,compact:c}){return(0,d.jsxs)("div",{style:{minWidth:c?132:155},children:[(0,d.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.studentName||"-"}),a.admissionNumber&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#475569"},children:a.admissionNumber})]})}function S({kind:a,branding:b,settings:c,title:e,subtitle:f,academicStructureName:g,academicPeriodName:h,className:j,subjectName:k,teacherName:l,academicYear:n,generatedAt:o,compact:p=!1}){let q=b.primaryColor||"#2563eb",r=i(e,c.broadsheetTitleLabel,"class"===a?"Class Broadsheet":"annual"===a?"Annual Cumulative Broadsheet":"Subject Broadsheet"),s=[g,h,n,j,k,l].filter(Boolean),t=c.showBroadsheetGeneratedDate&&o?m(o):"";return(0,d.jsxs)("header",{className:"broadsheet-compact-header",style:{display:"grid",gridTemplateColumns:c.showBroadsheetLogo&&b.logo?`${p?30:34}px minmax(0,1fr) auto`:"minmax(0,1fr) auto",alignItems:"center",gap:p?6:8,marginBottom:p?4:5,padding:p?"4px 7px":"5px 8px",border:"1px solid #cbd5e1",borderLeft:`4px solid ${q}`,borderRadius:6,background:"#fff",color:"#111827",fontFamily:b.fontFamily||"Arial, sans-serif"},children:[c.showBroadsheetLogo&&b.logo&&(0,d.jsx)("img",{src:b.logo,alt:"School logo",style:{width:p?30:34,height:p?30:34,objectFit:"contain"}}),(0,d.jsxs)("div",{style:{minWidth:0},children:[(0,d.jsx)("div",{style:{fontSize:p?11.2:12.6,fontWeight:950,lineHeight:1.02,textTransform:"uppercase",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:b.schoolName}),(0,d.jsx)("div",{style:{marginTop:0,fontSize:p?8.1:8.8,fontWeight:760,color:"#475569",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[b.branchName,...s].filter(Boolean).join(" • ")})]}),(0,d.jsxs)("div",{style:{textAlign:"right",minWidth:0},children:[(0,d.jsx)("div",{style:{fontSize:p?9.2:10,fontWeight:950,textTransform:"uppercase",color:q,whiteSpace:"nowrap"},children:r}),f&&(0,d.jsx)("div",{style:{marginTop:0,fontSize:p?8.1:8.8,fontWeight:700,color:"#475569",whiteSpace:"nowrap"},children:f}),t&&(0,d.jsxs)("div",{style:{marginTop:0,fontSize:p?7.8:8.4,fontWeight:760,color:"#475569",whiteSpace:"nowrap"},children:[c.broadsheetGeneratedDateLabel||"Generated",": ",t]})]}),(0,d.jsx)("style",{children:`
        @media print {
          .broadsheet-compact-header {
            box-shadow: none !important;
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
        }
      `})]})}function T(a,b){return{table:{width:"100%",borderCollapse:"separate",borderSpacing:0,tableLayout:"auto",fontSize:a?8.5:9.5,lineHeight:1.08,color:"#172033",border:"1px solid #dbe3ee",borderRadius:6,overflow:"hidden",background:"#fff"},th:{border:"0",borderRight:"1px solid rgba(255,255,255,.22)",borderBottom:"1px solid #dbe3ee",padding:a?"2.5px 2px":"3px 2.5px",background:b,color:"#fff",textAlign:"center",verticalAlign:"middle",fontWeight:900,whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.15},td:{border:"0",borderRight:"1px solid #e7edf5",borderBottom:"1px solid #e7edf5",padding:a?"1.5px 2px":"2px 2.5px",verticalAlign:"middle",whiteSpace:"nowrap",background:"#fff"}}}function U({items:a,compact:b}){let c=a.filter(a=>!1!==a.show);return c.length?(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(c.length,8)}, minmax(0,1fr))`,gap:b?3:4,marginBottom:b?4:5},children:c.map(a=>(0,d.jsxs)("div",{style:{minWidth:0,padding:b?"2px 3px":"2.5px 4px",border:"1px solid #dbe3ee",borderRadius:5,background:"#f8fafc",boxShadow:"none"},children:[(0,d.jsx)("div",{style:{fontSize:b?8.2:9,fontWeight:900,textTransform:"uppercase",letterSpacing:0,color:"#475569"},children:a.label}),(0,d.jsx)("div",{style:{marginTop:1,fontSize:b?10:11,fontWeight:900,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.value})]},a.label))}):null}function V({student:a,settings:b,compact:c}){let e=r(a);return(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:b.showBroadsheetStudentPhoto&&e?`${c?17:20}px minmax(0,1fr)`:"minmax(0,1fr)",gap:c?4:5,alignItems:"center",minWidth:c?112:128},children:[b.showBroadsheetStudentPhoto&&e&&(0,d.jsx)("img",{src:e,alt:"Student",style:{width:c?17:20,height:c?17:20,objectFit:"cover",border:"2px solid #e2e8f0",borderRadius:4}}),(0,d.jsxs)("div",{style:{minWidth:0},children:[(0,d.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.studentName||"-"}),a.admissionNumber&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#475569"},children:a.admissionNumber})]})]})}function W({settings:a,schoolName:b,pageNumber:c,totalPages:e,compact:f}){return(0,d.jsxs)("footer",{style:{marginTop:f?4:5,paddingTop:f?2:3,borderTop:"1px solid #dbe3ee",display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,fontSize:f?8.5:9.5,color:"#333"},children:[(0,d.jsx)("span",{children:a.broadsheetFooterText||`Official academic broadsheet generated for ${b}.`}),a.showBroadsheetPageNumber&&(0,d.jsxs)("span",{style:{whiteSpace:"nowrap",fontWeight:800},children:["Page ",c||1,e?` of ${e}`:""]})]})}function X({kind:a,dataset:b,header:c,template:e,settings:f,compact:g=!1,pageBreakAfter:h=!0,showWatermark:j=!0,generatedAt:k,pageNumber:l,totalPages:m,className:n,style:o}){var r,s;let u,v=p({kind:a,template:e,settings:f}),w=q(c),x=(u=c||{},{academicStructureName:i(u.academicStructure?.name,u.academicStructureName),academicPeriodName:i(u.academicPeriod?.name,u.academicPeriodName)}),y=w.primaryColor||"#111",z={...t({branding:w,settings:v,compact:g,pageBreakAfter:h,tone:"classic"}),...o,background:"#fff",color:"#172033",border:"1px solid #cbd5e1",borderRadius:8,boxShadow:"0 10px 28px rgba(15,23,42,.08)"};if(!b)return null;let A=(r=a,s=b,"subject"===r?{subtitle:`${s.className||"Class"} • ${s.students?.length||0} Students`,className:s.className,subjectName:s.subjectName,teacherName:s.teacherName,academicStructureName:"",academicYear:""}:"class"===r?{subtitle:`${s.className||"Class"} • ${s.students?.length||0} Students • ${s.subjectColumns?.length||0} Subjects`,className:s.className,subjectName:"",teacherName:"",academicStructureName:"",academicYear:""}:{subtitle:`${s.className||"Class"} • ${s.academicYear||"Academic Year"} • ${s.totalStudents||0} Students`,className:s.className,subjectName:"",teacherName:"",academicStructureName:s.academicStructureName,academicYear:s.academicYear});return(0,d.jsxs)("section",{className:`print-page report-page-break broadsheet-template-page broadsheet-compact-page ${n||""}`,style:z,children:[w.backgroundImage&&(0,d.jsx)("img",{src:w.backgroundImage,alt:"","aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,pointerEvents:"none",zIndex:0}}),j&&v.showBroadsheetWatermark&&w.watermark&&(0,d.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.035,pointerEvents:"none",zIndex:0},children:(0,d.jsx)("img",{src:w.watermark,alt:"",style:{width:"42%",maxHeight:"58%",objectFit:"contain"}})}),(0,d.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,d.jsx)("div",{style:{borderRadius:8,overflow:"hidden",boxShadow:"none",marginBottom:g?4:5},children:(0,d.jsx)(S,{kind:a,branding:w,settings:v,title:"class"===a?"Class Broadsheet":"annual"===a?"Annual Cumulative Broadsheet":"Subject Broadsheet",subtitle:A.subtitle,academicStructureName:A.academicStructureName||x.academicStructureName,academicPeriodName:x.academicPeriodName,academicYear:A.academicYear,className:A.className,subjectName:A.subjectName,teacherName:A.teacherName,generatedAt:k,compact:g})}),"subject"===a&&(0,d.jsx)(Y,{dataset:b,settings:v,compact:g,primary:y}),"class"===a&&(0,d.jsx)(Z,{dataset:b,settings:v,compact:g,primary:y}),"annual"===a&&(0,d.jsx)($,{dataset:b,settings:v,compact:g,primary:y}),v.showBroadsheetSignatures&&(0,d.jsx)("div",{style:{marginTop:g?5:7,display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:g?18:28},children:["Prepared By","Checked By","Headteacher / Principal"].map(a=>(0,d.jsxs)("div",{style:{textAlign:"center"},children:[(0,d.jsx)("div",{style:{height:g?12:17}}),(0,d.jsx)("div",{style:{borderTop:"1px solid #dbe3ee",paddingTop:3,fontSize:g?8.5:9.5,fontWeight:850},children:a})]},a))}),(0,d.jsx)(W,{settings:v,schoolName:w.schoolName,pageNumber:l,totalPages:m,compact:g})]})]})}function Y({dataset:a,settings:b,compact:c,primary:f}){let g=T(c,f),h=(0,e.useMemo)(()=>v({dataset:a,settings:b}),[a,b]);return(0,d.jsxs)(d.Fragment,{children:[b.showBroadsheetSummary&&(0,d.jsx)(U,{compact:c,items:[{label:"Students",value:a.students.length},{label:"Highest Score",value:`${j(a.highestScore,1)}%`,show:!1!==b.showBroadsheetHighestScore},{label:"Lowest Score",value:`${j(a.lowestScore,1)}%`,show:!1!==b.showBroadsheetLowestScore},{label:"Class Average",value:`${j(a.classAverage,1)}%`,show:!1!==b.showBroadsheetClassAverage}]}),(0,d.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,d.jsxs)("table",{style:g.table,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...g.th,width:26},children:"#"}),(0,d.jsx)("th",{style:{...g.th,textAlign:"left",minWidth:145},children:b.studentColumnLabel||"Student"}),!1!==b.showBroadsheetAssessmentBreakdown&&h.map(a=>(0,d.jsxs)("th",{style:g.th,children:[b.broadsheetShowAssessmentGroupHeaders&&a.groupLabel&&(0,d.jsx)("div",{style:{marginBottom:1,fontSize:"0.92em",opacity:.92,textTransform:"uppercase"},children:a.groupLabel}),(0,d.jsx)("div",{children:w(a,b)}),(b.showAssessmentWeights||b.showAssessmentMaximumScores)&&(0,d.jsxs)("div",{style:{marginTop:1,fontSize:"0.96em"},children:[b.showAssessmentWeights?`W:${j(a.effectiveWeight??a.weight,0)}`:"",b.showAssessmentWeights&&b.showAssessmentMaximumScores?" \xb7 ":"",b.showAssessmentMaximumScores?`M:${j(a.maxScore,0)}`:""]})]},a.assessmentStructureItemId)),!1!==b.showBroadsheetWeightedTotal&&(0,d.jsx)("th",{style:g.th,children:"Weighted"}),!1!==b.showBroadsheetPercentage&&(0,d.jsx)("th",{style:g.th,children:"%"}),!1!==b.showBroadsheetGrade&&(0,d.jsx)("th",{style:g.th,children:b.gradeColumnLabel||"Grade"}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("th",{style:g.th,children:"GPA"}),!1!==b.showBroadsheetPosition&&(0,d.jsx)("th",{style:g.th,children:b.positionColumnLabel||"Position"}),!1!==b.showBroadsheetRemark&&(0,d.jsx)("th",{style:{...g.th,minWidth:80},children:b.remarkColumnLabel||"Remark"})]})}),(0,d.jsx)("tbody",{children:a.students.map((a,e)=>(0,d.jsxs)("tr",{style:{background:e%2==0?"#ffffff":"#f8fafc"},children:[(0,d.jsx)("td",{style:{...g.td,textAlign:"center"},children:e+1}),(0,d.jsx)("td",{style:g.td,children:(0,d.jsx)(V,{student:a,settings:b,compact:c})}),!1!==b.showBroadsheetAssessmentBreakdown&&h.map(c=>{let e=a.breakdown.find(a=>a.assessmentStructureItemId===c.assessmentStructureItemId);return(0,d.jsx)("td",{style:{...g.td,textAlign:"center"},children:x({item:e,settings:b})},c.assessmentStructureItemId)}),!1!==b.showBroadsheetWeightedTotal&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center",fontWeight:850},children:j(a.weightedTotal,1)}),!1!==b.showBroadsheetPercentage&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center",fontWeight:850},children:k(a.percentage,1)}),!1!==b.showBroadsheetGrade&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center",fontWeight:900},children:a.grade||"-"}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center"},children:null!=a.gpa?j(a.gpa,2):"-"}),!1!==b.showBroadsheetPosition&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center"},children:l(a.position)}),!1!==b.showBroadsheetRemark&&(0,d.jsx)("td",{style:{...g.td,whiteSpace:"normal",minWidth:80},children:a.remark||"-"})]},a.studentId))})]})})]})}function Z({dataset:a,settings:b,compact:c,primary:e}){let f=T(c,e);return(0,d.jsxs)(d.Fragment,{children:[b.showBroadsheetSummary&&(0,d.jsx)(U,{compact:c,items:[{label:"Students",value:a.students.length},{label:"Subjects",value:a.subjectColumns.length},{label:"Highest Average",value:`${j(a.highestAverage,1)}%`,show:!1!==b.showBroadsheetClassHighestAverage},{label:"Lowest Average",value:`${j(a.lowestAverage,1)}%`,show:!1!==b.showBroadsheetClassLowestAverage},{label:"Class Average",value:`${j(a.classAverage,1)}%`}]}),(0,d.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,d.jsxs)("table",{style:f.table,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...f.th,width:26},children:"#"}),(0,d.jsx)("th",{style:{...f.th,textAlign:"left",minWidth:145},children:b.studentColumnLabel||"Student"}),!1!==b.showBroadsheetSubjectScores&&a.subjectColumns.map(a=>(0,d.jsxs)("th",{style:f.th,children:[a.shortName||a.subjectCode||a.subjectName,(0,d.jsx)("div",{style:{marginTop:1,maxWidth:65,whiteSpace:"normal",fontSize:"0.94em"},children:a.subjectName})]},a.classSubjectId)),!1!==b.showBroadsheetTotal&&(0,d.jsx)("th",{style:f.th,children:"Total"}),!1!==b.showBroadsheetAverage&&(0,d.jsx)("th",{style:f.th,children:"Average"}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("th",{style:f.th,children:"GPA"}),!1!==b.showBroadsheetClassPosition&&(0,d.jsx)("th",{style:f.th,children:b.positionColumnLabel||"Position"}),!1!==b.showBroadsheetAttendance&&(0,d.jsx)("th",{style:f.th,children:"Attendance"})]})}),(0,d.jsx)("tbody",{children:a.students.map((e,g)=>(0,d.jsxs)("tr",{style:{background:g%2==0?"#ffffff":"#f8fafc"},children:[(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:g+1}),(0,d.jsx)("td",{style:f.td,children:(0,d.jsx)(V,{student:e,settings:b,compact:c})}),!1!==b.showBroadsheetSubjectScores&&a.subjectColumns.map(a=>{let c=e.subjects.find(b=>b.classSubjectId===a.classSubjectId);return(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:c?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("strong",{children:j(c.percentage,1)}),b.showBroadsheetSubjectGrades&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.96em"},children:c.grade||"-"})]}):"-"},a.classSubjectId)}),!1!==b.showBroadsheetTotal&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:850},children:j(e.total,1)}),!1!==b.showBroadsheetAverage&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:900},children:k(e.average,1)}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:null!=e.gpa?j(e.gpa,2):"-"}),!1!==b.showBroadsheetClassPosition&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:l(e.position)}),!1!==b.showBroadsheetAttendance&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:k(e.attendancePercent,1)})]},e.studentId))})]})})]})}function $({dataset:a,settings:b,compact:c,primary:e}){let f=T(c,e);return(0,d.jsxs)(d.Fragment,{children:[b.showBroadsheetSummary&&(0,d.jsx)(U,{compact:c,items:[{label:"Students",value:a.totalStudents},{label:"Subjects",value:a.totalSubjects},{label:"Periods",value:a.totalPeriods},{label:"Highest Average",value:`${j(a.highestAverage,1)}%`},{label:"Lowest Average",value:`${j(a.lowestAverage,1)}%`},{label:"Class Average",value:`${j(a.classAverage,1)}%`},{label:"Promote",value:a.promotionCount,show:!1!==b.showBroadsheetPromotionDecision},{label:"Repeat",value:a.repeatCount,show:!1!==b.showBroadsheetPromotionDecision}]}),b.showBroadsheetStatistics&&a.periodNames.length>0&&(0,d.jsxs)("div",{style:{marginBottom:c?5:7,fontSize:c?8.5:9.5,fontWeight:800},children:["Periods: ",a.periodNames.join("  •  ")]}),(0,d.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,d.jsxs)("table",{style:f.table,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...f.th,width:26},children:"#"}),(0,d.jsx)("th",{style:{...f.th,textAlign:"left",minWidth:145},children:b.studentColumnLabel||"Student"}),a.subjectColumns.map(a=>(0,d.jsxs)("th",{style:f.th,children:[a.shortName||a.subjectCode||a.subjectName,(0,d.jsx)("div",{style:{marginTop:1,maxWidth:62,whiteSpace:"normal",fontSize:"0.94em"},children:a.subjectName})]},`${a.subjectId||a.subjectName}`)),!1!==b.showBroadsheetAnnualAverage&&(0,d.jsx)("th",{style:f.th,children:"Annual Avg."}),!1!==b.showBroadsheetAnnualGPA&&(0,d.jsx)("th",{style:f.th,children:"GPA"}),!1!==b.showBroadsheetAnnualPosition&&(0,d.jsx)("th",{style:f.th,children:b.positionColumnLabel||"Position"}),!1!==b.showBroadsheetPromotionDecision&&(0,d.jsx)("th",{style:f.th,children:"Decision"})]})}),(0,d.jsx)("tbody",{children:a.students.map((e,g)=>{var h;return(0,d.jsxs)("tr",{style:{background:g%2==0?"#ffffff":"#f8fafc"},children:[(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:g+1}),(0,d.jsx)("td",{style:f.td,children:(0,d.jsx)(_,{student:e,settings:b,compact:c})}),a.subjectColumns.map(a=>{let c=e.subjects.find(b=>a.subjectId&&b.subjectId===a.subjectId||b.subjectName===a.subjectName);return(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:c?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("strong",{children:j(c.average,1)}),b.showBroadsheetPeriodScores&&c.periodScores.length>0&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.92em",whiteSpace:"normal",lineHeight:1.15},children:c.periodScores.map(a=>`${a.academicPeriodName}: ${j(a.percentage,0)}`).join(" \xb7 ")})]}):"-"},`${a.subjectId||a.subjectName}`)}),!1!==b.showBroadsheetAnnualAverage&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:900},children:k(e.average,1)}),!1!==b.showBroadsheetAnnualGPA&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:null!=e.gpa?j(e.gpa,2):"-"}),!1!==b.showBroadsheetAnnualPosition&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:l(e.position)}),!1!==b.showBroadsheetPromotionDecision&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:850},children:(h=e.finalDecision||e.recommendation)?h.charAt(0).toUpperCase()+h.slice(1):"-"})]},e.studentId)})})]})})]})}function _({student:a,settings:b,compact:c}){return(0,d.jsxs)("div",{style:{minWidth:c?132:155},children:[(0,d.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.studentName||"-"}),a.admissionNumber&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#475569"},children:a.admissionNumber})]})}function aa({kind:a,branding:b,settings:c,title:e,subtitle:f,academicStructureName:g,academicPeriodName:h,className:j,subjectName:k,teacherName:l,academicYear:n,generatedAt:o,compact:p=!1}){let q=b.primaryColor||"#1e293b",r=i(e,c.broadsheetTitleLabel,"class"===a?"Class Performance Broadsheet":"annual"===a?"Annual Performance Review":"Subject Performance Broadsheet"),s=c.showBroadsheetGeneratedDate&&o?m(o):"",t=[g?{label:"Structure",value:g}:null,h?{label:"Period",value:h}:null,n?{label:"Year",value:n}:null,j?{label:"Class",value:j}:null,k?{label:"Subject",value:k}:null,l?{label:"Teacher",value:l}:null].filter(Boolean);return(0,d.jsxs)("header",{className:"broadsheet-executive-header",style:{position:"relative",marginBottom:p?8:10,border:"1px solid #cbd5e1",borderRadius:14,overflow:"hidden",background:"#fff",fontFamily:b.fontFamily||"Arial, sans-serif",boxShadow:"0 12px 30px rgba(15,23,42,.08)"},children:[(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:c.showBroadsheetLogo&&b.logo?`${p?44:52}px minmax(0,1fr) ${p?195:230}px`:`minmax(0,1fr) ${p?195:230}px`,gap:p?10:13,alignItems:"center",padding:p?"5px 11px":"9px 14px",background:"#ffffff"},children:[c.showBroadsheetLogo&&b.logo&&(0,d.jsx)("div",{style:{width:p?44:52,height:p?44:52,borderRadius:12,border:"1px solid #cbd5e1",background:"#f8fafc",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)("img",{src:b.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:5,boxSizing:"border-box"}})}),(0,d.jsxs)("div",{style:{minWidth:0},children:[(0,d.jsx)("div",{style:{fontSize:p?15.5:18.5,fontWeight:950,lineHeight:1.03,textTransform:"uppercase",letterSpacing:.25,color:"#0f172a",overflowWrap:"anywhere"},children:b.schoolName}),(b.motto||b.branchName)&&(0,d.jsx)("div",{style:{marginTop:2,fontSize:p?9.2:10,fontWeight:760,color:"#475569"},children:[b.motto,b.branchName].filter(Boolean).join("  •  ")}),(0,d.jsx)("div",{style:{marginTop:4,fontSize:p?9.2:10,fontWeight:650,color:"#475569"},children:[b.address,b.phone,b.email].filter(Boolean).join("  •  ")})]}),(0,d.jsxs)("div",{"data-report-color-block":"true",style:{minWidth:0,padding:p?"7px 11px":"9px 13px",borderRadius:12,background:`linear-gradient(135deg, ${q}, #0f172a)`,color:"#fff",boxShadow:"0 10px 24px rgba(15,23,42,.16)"},children:[(0,d.jsx)("div",{style:{fontSize:p?9.5:10.4,fontWeight:950,lineHeight:1.07,textTransform:"uppercase",letterSpacing:.28},children:r}),f&&(0,d.jsx)("div",{style:{marginTop:2,fontSize:p?8.5:9.3,fontWeight:720,opacity:.92,lineHeight:1.08},children:f}),s&&(0,d.jsxs)("div",{style:{marginTop:5,paddingTop:3,borderTop:"1px solid rgba(255,255,255,.25)",fontSize:p?8:8.7,fontWeight:760},children:[c.broadsheetGeneratedDateLabel||"Generated",":"," ",s]})]})]}),t.length>0&&(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(t.length,6)}, minmax(0,1fr))`,borderTop:"1px solid #e2e8f0",background:"#f8fafc"},children:t.map((a,b)=>(0,d.jsxs)("div",{style:{minWidth:0,padding:p?"2px 8px":"4px 9px",borderLeft:0===b?"0":"1px solid #e2e8f0"},children:[(0,d.jsx)("div",{style:{fontSize:p?7.8:8.5,fontWeight:900,textTransform:"uppercase",letterSpacing:.25,color:"#475569"},children:a.label}),(0,d.jsx)("div",{style:{marginTop:1,fontSize:p?9:9.7,fontWeight:900,color:"#0f172a",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.value})]},`${a.label}-${a.value}`))}),(0,d.jsx)("div",{"aria-hidden":"true",style:{height:4,background:`linear-gradient(90deg, ${q}, #0f172a, ${q})`}}),(0,d.jsx)("style",{children:`
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
      `})]})}function ab(a,b){return{table:{width:"100%",borderCollapse:"separate",borderSpacing:0,tableLayout:"auto",fontSize:a?8.5:9.5,lineHeight:1.15,color:"#172033",border:"1px solid #cbd5e1",borderRadius:10,overflow:"hidden",background:"#fff",boxShadow:"0 8px 18px rgba(15,23,42,.045)"},th:{border:"0",borderRight:"1px solid rgba(255,255,255,.22)",borderBottom:"1px solid #dbe3ee",padding:a?"2.5px 2px":"3px 2.5px",background:`linear-gradient(180deg, ${b}, ${b}e8)`,color:"#fff",textAlign:"center",verticalAlign:"middle",fontWeight:900,whiteSpace:"normal",overflowWrap:"anywhere",lineHeight:1.15},td:{border:"0",borderRight:"1px solid #e7edf5",borderBottom:"1px solid #e7edf5",padding:a?"1.5px 2px":"2px 2.5px",verticalAlign:"middle",whiteSpace:"nowrap",background:"#fff"}}}function ac({items:a,compact:b}){let c=a.filter(a=>!1!==a.show);return c.length?(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(c.length,8)}, minmax(0,1fr))`,gap:b?5:7,marginBottom:b?7:9},children:c.map(a=>(0,d.jsxs)("div",{style:{minWidth:0,padding:b?"2.5px 4px":"3px 5px",border:"1px solid #dbe3ee",borderTop:"3px solid #334155",borderRadius:10,background:"#ffffff",boxShadow:"0 8px 18px rgba(15,23,42,.055)"},children:[(0,d.jsx)("div",{style:{fontSize:b?8.2:9,fontWeight:900,textTransform:"uppercase",letterSpacing:0,color:"#475569"},children:a.label}),(0,d.jsx)("div",{style:{marginTop:1,fontSize:b?10:11,fontWeight:900,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.value})]},a.label))}):null}function ad({student:a,settings:b,compact:c}){let e=r(a);return(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:b.showBroadsheetStudentPhoto&&e?`${c?21:25}px minmax(0,1fr)`:"minmax(0,1fr)",gap:c?4:5,alignItems:"center",minWidth:c?132:155},children:[b.showBroadsheetStudentPhoto&&e&&(0,d.jsx)("img",{src:e,alt:"Student",style:{width:c?21:25,height:c?21:25,objectFit:"cover",border:"2px solid #e2e8f0",borderRadius:8}}),(0,d.jsxs)("div",{style:{minWidth:0},children:[(0,d.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.studentName||"-"}),a.admissionNumber&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#475569"},children:a.admissionNumber})]})]})}function ae({settings:a,schoolName:b,pageNumber:c,totalPages:e,compact:f}){return(0,d.jsxs)("footer",{style:{marginTop:f?5:7,paddingTop:f?2:3,borderTop:"2px solid #cbd5e1",display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,fontSize:f?8.5:9.5,color:"#333"},children:[(0,d.jsx)("span",{children:a.broadsheetFooterText||`Official academic broadsheet generated for ${b}.`}),a.showBroadsheetPageNumber&&(0,d.jsxs)("span",{style:{whiteSpace:"nowrap",fontWeight:800},children:["Page ",c||1,e?` of ${e}`:""]})]})}function af({kind:a,dataset:b,header:c,template:e,settings:f,compact:g=!1,pageBreakAfter:h=!0,showWatermark:j=!0,generatedAt:k,pageNumber:l,totalPages:m,className:n,style:o}){var r,s;let u,v=p({kind:a,template:e,settings:f}),w=q(c),x=(u=c||{},{academicStructureName:i(u.academicStructure?.name,u.academicStructureName),academicPeriodName:i(u.academicPeriod?.name,u.academicPeriodName)}),y=w.primaryColor||"#111",z={...t({branding:w,settings:v,compact:g,pageBreakAfter:h,tone:"classic"}),...o,background:"#fff",color:"#172033",border:"1px solid #cbd5e1",borderRadius:14,boxShadow:"0 24px 60px rgba(15,23,42,.12)"};if(!b)return null;let A=(r=a,s=b,"subject"===r?{subtitle:`${s.className||"Class"} • ${s.students?.length||0} Students`,className:s.className,subjectName:s.subjectName,teacherName:s.teacherName,academicStructureName:"",academicYear:""}:"class"===r?{subtitle:`${s.className||"Class"} • ${s.students?.length||0} Students • ${s.subjectColumns?.length||0} Subjects`,className:s.className,subjectName:"",teacherName:"",academicStructureName:"",academicYear:""}:{subtitle:`${s.className||"Class"} • ${s.academicYear||"Academic Year"} • ${s.totalStudents||0} Students`,className:s.className,subjectName:"",teacherName:"",academicStructureName:s.academicStructureName,academicYear:s.academicYear});return(0,d.jsxs)("section",{className:`print-page report-page-break broadsheet-template-page broadsheet-executive-page ${n||""}`,style:z,children:[w.backgroundImage&&(0,d.jsx)("img",{src:w.backgroundImage,alt:"","aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,pointerEvents:"none",zIndex:0}}),j&&v.showBroadsheetWatermark&&w.watermark&&(0,d.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.035,pointerEvents:"none",zIndex:0},children:(0,d.jsx)("img",{src:w.watermark,alt:"",style:{width:"42%",maxHeight:"58%",objectFit:"contain"}})}),(0,d.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,d.jsx)("div",{style:{borderRadius:14,overflow:"hidden",boxShadow:"0 10px 28px rgba(15,23,42,.08)",marginBottom:g?8:10},children:(0,d.jsx)(aa,{kind:a,branding:w,settings:v,title:"class"===a?"Class Broadsheet":"annual"===a?"Annual Cumulative Broadsheet":"Subject Broadsheet",subtitle:A.subtitle,academicStructureName:A.academicStructureName||x.academicStructureName,academicPeriodName:x.academicPeriodName,academicYear:A.academicYear,className:A.className,subjectName:A.subjectName,teacherName:A.teacherName,generatedAt:k,compact:g})}),"subject"===a&&(0,d.jsx)(ag,{dataset:b,settings:v,compact:g,primary:y}),"class"===a&&(0,d.jsx)(ah,{dataset:b,settings:v,compact:g,primary:y}),"annual"===a&&(0,d.jsx)(ai,{dataset:b,settings:v,compact:g,primary:y}),v.showBroadsheetSignatures&&(0,d.jsx)("div",{style:{marginTop:g?8:12,display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:g?18:28},children:["Prepared By","Checked By","Headteacher / Principal"].map(a=>(0,d.jsxs)("div",{style:{textAlign:"center"},children:[(0,d.jsx)("div",{style:{height:g?12:17}}),(0,d.jsx)("div",{style:{borderTop:"1px solid #dbe3ee",paddingTop:3,fontSize:g?8.5:9.5,fontWeight:850},children:a})]},a))}),(0,d.jsx)(ae,{settings:v,schoolName:w.schoolName,pageNumber:l,totalPages:m,compact:g})]})]})}function ag({dataset:a,settings:b,compact:c,primary:f}){let g=ab(c,f),h=(0,e.useMemo)(()=>v({dataset:a,settings:b}),[a,b]);return(0,d.jsxs)(d.Fragment,{children:[b.showBroadsheetSummary&&(0,d.jsx)(ac,{compact:c,items:[{label:"Students",value:a.students.length},{label:"Highest Score",value:`${j(a.highestScore,1)}%`,show:!1!==b.showBroadsheetHighestScore},{label:"Lowest Score",value:`${j(a.lowestScore,1)}%`,show:!1!==b.showBroadsheetLowestScore},{label:"Class Average",value:`${j(a.classAverage,1)}%`,show:!1!==b.showBroadsheetClassAverage}]}),(0,d.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,d.jsxs)("table",{style:g.table,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...g.th,width:26},children:"#"}),(0,d.jsx)("th",{style:{...g.th,textAlign:"left",minWidth:145},children:b.studentColumnLabel||"Student"}),!1!==b.showBroadsheetAssessmentBreakdown&&h.map(a=>(0,d.jsxs)("th",{style:g.th,children:[b.broadsheetShowAssessmentGroupHeaders&&a.groupLabel&&(0,d.jsx)("div",{style:{marginBottom:1,fontSize:"0.92em",opacity:.92,textTransform:"uppercase"},children:a.groupLabel}),(0,d.jsx)("div",{children:w(a,b)}),(b.showAssessmentWeights||b.showAssessmentMaximumScores)&&(0,d.jsxs)("div",{style:{marginTop:1,fontSize:"0.96em"},children:[b.showAssessmentWeights?`W:${j(a.effectiveWeight??a.weight,0)}`:"",b.showAssessmentWeights&&b.showAssessmentMaximumScores?" \xb7 ":"",b.showAssessmentMaximumScores?`M:${j(a.maxScore,0)}`:""]})]},a.assessmentStructureItemId)),!1!==b.showBroadsheetWeightedTotal&&(0,d.jsx)("th",{style:g.th,children:"Weighted"}),!1!==b.showBroadsheetPercentage&&(0,d.jsx)("th",{style:g.th,children:"%"}),!1!==b.showBroadsheetGrade&&(0,d.jsx)("th",{style:g.th,children:b.gradeColumnLabel||"Grade"}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("th",{style:g.th,children:"GPA"}),!1!==b.showBroadsheetPosition&&(0,d.jsx)("th",{style:g.th,children:b.positionColumnLabel||"Position"}),!1!==b.showBroadsheetRemark&&(0,d.jsx)("th",{style:{...g.th,minWidth:80},children:b.remarkColumnLabel||"Remark"})]})}),(0,d.jsx)("tbody",{children:a.students.map((a,e)=>(0,d.jsxs)("tr",{style:{background:e%2==0?"#ffffff":"#f8fafc"},children:[(0,d.jsx)("td",{style:{...g.td,textAlign:"center"},children:e+1}),(0,d.jsx)("td",{style:g.td,children:(0,d.jsx)(ad,{student:a,settings:b,compact:c})}),!1!==b.showBroadsheetAssessmentBreakdown&&h.map(c=>{let e=a.breakdown.find(a=>a.assessmentStructureItemId===c.assessmentStructureItemId);return(0,d.jsx)("td",{style:{...g.td,textAlign:"center"},children:x({item:e,settings:b})},c.assessmentStructureItemId)}),!1!==b.showBroadsheetWeightedTotal&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center",fontWeight:850},children:j(a.weightedTotal,1)}),!1!==b.showBroadsheetPercentage&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center",fontWeight:850},children:k(a.percentage,1)}),!1!==b.showBroadsheetGrade&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center",fontWeight:900},children:a.grade||"-"}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center"},children:null!=a.gpa?j(a.gpa,2):"-"}),!1!==b.showBroadsheetPosition&&(0,d.jsx)("td",{style:{...g.td,textAlign:"center"},children:l(a.position)}),!1!==b.showBroadsheetRemark&&(0,d.jsx)("td",{style:{...g.td,whiteSpace:"normal",minWidth:80},children:a.remark||"-"})]},a.studentId))})]})})]})}function ah({dataset:a,settings:b,compact:c,primary:e}){let f=ab(c,e);return(0,d.jsxs)(d.Fragment,{children:[b.showBroadsheetSummary&&(0,d.jsx)(ac,{compact:c,items:[{label:"Students",value:a.students.length},{label:"Subjects",value:a.subjectColumns.length},{label:"Highest Average",value:`${j(a.highestAverage,1)}%`,show:!1!==b.showBroadsheetClassHighestAverage},{label:"Lowest Average",value:`${j(a.lowestAverage,1)}%`,show:!1!==b.showBroadsheetClassLowestAverage},{label:"Class Average",value:`${j(a.classAverage,1)}%`}]}),(0,d.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,d.jsxs)("table",{style:f.table,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...f.th,width:26},children:"#"}),(0,d.jsx)("th",{style:{...f.th,textAlign:"left",minWidth:145},children:b.studentColumnLabel||"Student"}),!1!==b.showBroadsheetSubjectScores&&a.subjectColumns.map(a=>(0,d.jsxs)("th",{style:f.th,children:[a.shortName||a.subjectCode||a.subjectName,(0,d.jsx)("div",{style:{marginTop:1,maxWidth:65,whiteSpace:"normal",fontSize:"0.94em"},children:a.subjectName})]},a.classSubjectId)),!1!==b.showBroadsheetTotal&&(0,d.jsx)("th",{style:f.th,children:"Total"}),!1!==b.showBroadsheetAverage&&(0,d.jsx)("th",{style:f.th,children:"Average"}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("th",{style:f.th,children:"GPA"}),!1!==b.showBroadsheetClassPosition&&(0,d.jsx)("th",{style:f.th,children:b.positionColumnLabel||"Position"}),!1!==b.showBroadsheetAttendance&&(0,d.jsx)("th",{style:f.th,children:"Attendance"})]})}),(0,d.jsx)("tbody",{children:a.students.map((e,g)=>(0,d.jsxs)("tr",{style:{background:g%2==0?"#ffffff":"#f8fafc"},children:[(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:g+1}),(0,d.jsx)("td",{style:f.td,children:(0,d.jsx)(ad,{student:e,settings:b,compact:c})}),!1!==b.showBroadsheetSubjectScores&&a.subjectColumns.map(a=>{let c=e.subjects.find(b=>b.classSubjectId===a.classSubjectId);return(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:c?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("strong",{children:j(c.percentage,1)}),b.showBroadsheetSubjectGrades&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.96em"},children:c.grade||"-"})]}):"-"},a.classSubjectId)}),!1!==b.showBroadsheetTotal&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:850},children:j(e.total,1)}),!1!==b.showBroadsheetAverage&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:900},children:k(e.average,1)}),!1!==b.showBroadsheetGPA&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:null!=e.gpa?j(e.gpa,2):"-"}),!1!==b.showBroadsheetClassPosition&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:l(e.position)}),!1!==b.showBroadsheetAttendance&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:k(e.attendancePercent,1)})]},e.studentId))})]})})]})}function ai({dataset:a,settings:b,compact:c,primary:e}){let f=ab(c,e);return(0,d.jsxs)(d.Fragment,{children:[b.showBroadsheetSummary&&(0,d.jsx)(ac,{compact:c,items:[{label:"Students",value:a.totalStudents},{label:"Subjects",value:a.totalSubjects},{label:"Periods",value:a.totalPeriods},{label:"Highest Average",value:`${j(a.highestAverage,1)}%`},{label:"Lowest Average",value:`${j(a.lowestAverage,1)}%`},{label:"Class Average",value:`${j(a.classAverage,1)}%`},{label:"Promote",value:a.promotionCount,show:!1!==b.showBroadsheetPromotionDecision},{label:"Repeat",value:a.repeatCount,show:!1!==b.showBroadsheetPromotionDecision}]}),b.showBroadsheetStatistics&&a.periodNames.length>0&&(0,d.jsxs)("div",{style:{marginBottom:c?5:7,fontSize:c?8.5:9.5,fontWeight:800},children:["Periods: ",a.periodNames.join("  •  ")]}),(0,d.jsx)("div",{style:{overflowX:"auto",overflowY:"hidden",maxWidth:"100%"},children:(0,d.jsxs)("table",{style:f.table,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...f.th,width:26},children:"#"}),(0,d.jsx)("th",{style:{...f.th,textAlign:"left",minWidth:145},children:b.studentColumnLabel||"Student"}),a.subjectColumns.map(a=>(0,d.jsxs)("th",{style:f.th,children:[a.shortName||a.subjectCode||a.subjectName,(0,d.jsx)("div",{style:{marginTop:1,maxWidth:62,whiteSpace:"normal",fontSize:"0.94em"},children:a.subjectName})]},`${a.subjectId||a.subjectName}`)),!1!==b.showBroadsheetAnnualAverage&&(0,d.jsx)("th",{style:f.th,children:"Annual Avg."}),!1!==b.showBroadsheetAnnualGPA&&(0,d.jsx)("th",{style:f.th,children:"GPA"}),!1!==b.showBroadsheetAnnualPosition&&(0,d.jsx)("th",{style:f.th,children:b.positionColumnLabel||"Position"}),!1!==b.showBroadsheetPromotionDecision&&(0,d.jsx)("th",{style:f.th,children:"Decision"})]})}),(0,d.jsx)("tbody",{children:a.students.map((e,g)=>{var h;return(0,d.jsxs)("tr",{style:{background:g%2==0?"#ffffff":"#f8fafc"},children:[(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:g+1}),(0,d.jsx)("td",{style:f.td,children:(0,d.jsx)(aj,{student:e,settings:b,compact:c})}),a.subjectColumns.map(a=>{let c=e.subjects.find(b=>a.subjectId&&b.subjectId===a.subjectId||b.subjectName===a.subjectName);return(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:c?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("strong",{children:j(c.average,1)}),b.showBroadsheetPeriodScores&&c.periodScores.length>0&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.92em",whiteSpace:"normal",lineHeight:1.15},children:c.periodScores.map(a=>`${a.academicPeriodName}: ${j(a.percentage,0)}`).join(" \xb7 ")})]}):"-"},`${a.subjectId||a.subjectName}`)}),!1!==b.showBroadsheetAnnualAverage&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:900},children:k(e.average,1)}),!1!==b.showBroadsheetAnnualGPA&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:null!=e.gpa?j(e.gpa,2):"-"}),!1!==b.showBroadsheetAnnualPosition&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center"},children:l(e.position)}),!1!==b.showBroadsheetPromotionDecision&&(0,d.jsx)("td",{style:{...f.td,textAlign:"center",fontWeight:850},children:(h=e.finalDecision||e.recommendation)?h.charAt(0).toUpperCase()+h.slice(1):"-"})]},e.studentId)})})]})})]})}function aj({student:a,settings:b,compact:c}){return(0,d.jsxs)("div",{style:{minWidth:c?132:155},children:[(0,d.jsx)("div",{style:{fontWeight:850,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a.studentName||"-"}),a.admissionNumber&&(0,d.jsx)("div",{style:{marginTop:1,fontSize:"0.96em",color:"#475569"},children:a.admissionNumber})]})}let ak=["subject","class","annual"],al=[{code:"broadsheet_classic",layoutKey:"broadsheet_classic",name:"Classic Broadsheet",description:"Formal bordered academic table with strong print readability.",tone:"classic",supportedKinds:ak,orientation:"landscape",paperSize:"A4",density:"compact",aliases:["classic","default","formal","traditional"],fileName:"ClassicBroadsheetTemplate.tsx",isDefault:!0,active:!0,component:D},{code:"broadsheet_modern",layoutKey:"broadsheet_modern",name:"Modern Broadsheet",description:"Clean contemporary layout with soft summary cards and refined tables.",tone:"modern",supportedKinds:ak,orientation:"landscape",paperSize:"A4",density:"comfortable",aliases:["modern","clean","modern_clean"],fileName:"ModernBroadsheetTemplate.tsx",active:!0,component:N},{code:"broadsheet_compact",layoutKey:"broadsheet_compact",name:"Compact Broadsheet",description:"Dense paper-efficient layout for large classes and many subjects.",tone:"compact",supportedKinds:ak,orientation:"landscape",paperSize:"A4",density:"compact",aliases:["compact","print","space_saving","dense"],fileName:"CompactBroadsheetTemplate.tsx",active:!0,component:X},{code:"broadsheet_executive",layoutKey:"broadsheet_executive",name:"Executive Broadsheet",description:"Premium leadership-focused presentation with prominent academic summaries.",tone:"executive",supportedKinds:ak,orientation:"landscape",paperSize:"A4",density:"comfortable",aliases:["executive","premium","leadership","management"],fileName:"ExecutiveBroadsheetTemplate.tsx",active:!0,component:af},{code:"broadsheet_minimal",layoutKey:"broadsheet_minimal",name:"Minimal Broadsheet",description:"Low-ink understated design with only essential lines and fields.",tone:"minimal",supportedKinds:ak,orientation:"landscape",paperSize:"A4",density:"compact",aliases:["minimal","simple","low_ink","plain"],fileName:"MinimalBroadsheetTemplate.tsx",active:!0},{code:"broadsheet_cambridge",layoutKey:"broadsheet_cambridge",name:"Cambridge Broadsheet",description:"International examination-board inspired structure for clear candidate results.",tone:"cambridge",supportedKinds:ak,orientation:"landscape",paperSize:"A4",density:"compact",aliases:["cambridge","international","candidate","exam_board"],fileName:"CambridgeBroadsheetTemplate.tsx",active:!0},{code:"broadsheet_university",layoutKey:"broadsheet_university",name:"University Broadsheet",description:"Registrar-style academic record suitable for tertiary and credit-based programmes.",tone:"university",supportedKinds:ak,orientation:"landscape",paperSize:"A4",density:"compact",aliases:["university","tertiary","registrar","credits"],fileName:"UniversityBroadsheetTemplate.tsx",active:!0},{code:"broadsheet_analytics",layoutKey:"broadsheet_analytics",name:"Analytics Broadsheet",description:"Insight-led design emphasizing performance, trends and decision statistics.",tone:"analytics",supportedKinds:ak,orientation:"landscape",paperSize:"A4",density:"comfortable",aliases:["analytics","insights","trends","dashboard"],fileName:"AnalyticsBroadsheetTemplate.tsx",active:!0}],am=new Map([["broadsheet_classic",D],["broadsheet_modern",N],["broadsheet_compact",X],["broadsheet_executive",af]]),an=al.map(a=>({...a,get component(){return am.get(n(a.code))}}));function ao(a){let b=n(a||g);return al.find(a=>[a.code,a.layoutKey,...a.aliases||[]].map(n).includes(b))||al[0]}function ap(a){let b=ao(a);return{...b,component:am.get(n(b.code))}}function aq(a){let b=ao(a);return am.get(n(b.code))}},69417:(a,b,c)=>{c.d(b,{Eh:()=>s,EI:()=>t});var d=c(49403);function e(a){let b=Number(a);return Number.isFinite(b)?b:0}function f(a,b=2){return Number(a.toFixed(b))}function g(a){return a.length?a.reduce((a,b)=>a+b,0)/a.length:0}function h(a){return!a.isDeleted&&!1!==a.active}function i(a,b){return a.studentName.localeCompare(b.studentName)}function j(a,b){return(a.admissionNumber||"").localeCompare(b.admissionNumber||"")}function k(a){return{schoolMap:new Map(a.schools.map(a=>[a.id,a])),branchMap:new Map(a.branches.map(a=>[a.id,a])),schoolBranchSettingsMap:new Map((a.schoolBranchSettings||[]).map(a=>[a.branchId,a])),academicStructureMap:new Map(a.academicStructures.map(a=>[a.id,a])),academicPeriodMap:new Map(a.academicPeriods.map(a=>[a.id,a])),studentMap:new Map(a.students.map(a=>[a.id,a])),teacherMap:new Map(a.teachers.map(a=>[a.id,a])),classMap:new Map(a.classes.map(a=>[a.id,a])),subjectMap:new Map(a.subjects.map(a=>[a.id,a])),classSubjectMap:new Map(a.classSubjects.map(a=>[a.id,a])),gradingStructureMap:new Map(a.gradingStructures.map(a=>[a.id,a])),assessmentStructureMap:new Map(a.assessmentStructures.map(a=>[a.id,a]))}}function l(a){if(!a)return"";if("string"==typeof a&&/^\d{4}-\d{2}-\d{2}$/.test(a))return a;let b=a instanceof Date?a.getTime():new Date(a).getTime();return Number.isFinite(b)?new Date(b).toISOString().slice(0,10):""}function m(a){let b=l(a);if(!b)return"";try{return new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",year:"numeric"}).format(new Date(`${b}T00:00:00`))}catch{return b}}function n(a,b){let c=a.academicPeriods.find(a=>a.id===b.academicPeriodId&&!a.isDeleted);if(!c)return;let d=l(c.startDate),f=l(c.endDate),g=m(d),h=m(f);return{id:null!=c.id?String(c.id):void 0,academicStructureId:c.academicStructureId,name:c.name,type:c.type,startDate:d,endDate:f,order:e(c.order),formattedStartDate:g,formattedEndDate:h,label:h?`This Academic Period Ends: ${h}`:"This Academic Period Ends: Not set",period:c}}function o(a,b){let c=function(a,b){let c=a.academicPeriods.find(a=>a.id===b.academicPeriodId&&!a.isDeleted);if(!c)return;let d=b.academicStructureId||c.academicStructureId,f=a.academicStructures.find(a=>a.id===d&&!a.isDeleted),g=e(c.order),i=l(c.startDate),j=l(c.endDate),k=a=>!!h(a)&&a.id!==c.id&&(!b.branchId||a.branchId===b.branchId)&&(!c.schoolId||a.schoolId===c.schoolId),m=(a,b)=>{let c=e(a.order)-e(b.order);if(0!==c)return c;let d=l(a.startDate).localeCompare(l(b.startDate));return 0!==d?d:String(a.name||"").localeCompare(String(b.name||""))},n=a.academicPeriods.filter(a=>{if(!k(a)||d&&a.academicStructureId!==d)return!1;let b=e(a.order),c=l(a.startDate);return!!g&&!!(b>g)||!!j&&!!c&&!!(c>j)||!!i&&!!c&&!!(c>i)}).sort(m);if(n[0])return n[0];let o=l(f?.endDate),p=l(f?.startDate);for(let e of a.academicStructures.filter(a=>{if(!h(a)||a.id===d||b.branchId&&a.branchId!==b.branchId||c.schoolId&&a.schoolId!==c.schoolId)return!1;let e=l(a.startDate),f=l(a.endDate);return!!o&&!!e&&e>o||!!p&&!!e&&e>p||!!j&&!!e&&e>j||!!i&&!!e&&e>i||!!o&&!!f&&f>o||!1}).sort((a,b)=>{let c=l(a.startDate).localeCompare(l(b.startDate));if(0!==c)return c;let d=l(a.endDate).localeCompare(l(b.endDate));return 0!==d?d:String(a.name||"").localeCompare(String(b.name||""))})){let b=a.academicPeriods.filter(a=>k(a)&&a.academicStructureId===e.id).sort(m)[0];if(b)return b}return a.academicPeriods.filter(a=>{if(!k(a))return!1;let b=l(a.startDate);return!!j&&!!b&&!!(b>j)||!!i&&!!b&&!!(b>i)}).sort((b,c)=>{let d=l(b.startDate).localeCompare(l(c.startDate));if(0!==d)return d;let e=a.academicStructures.find(a=>a.id===b.academicStructureId),f=a.academicStructures.find(a=>a.id===c.academicStructureId),g=l(e?.startDate).localeCompare(l(f?.startDate));return 0!==g?g:m(b,c)})[0]}(a,b);if(!c)return;let d=l(c.startDate),f=m(d);return{id:null!=c.id?String(c.id):void 0,academicStructureId:c.academicStructureId,name:c.name,type:c.type,startDate:d,endDate:l(c.endDate),order:e(c.order),formattedStartDate:f,label:f?`Next Academic Period Begins: ${f}`:"Next Academic Period Begins: Not set",period:c}}function p(a,b){return a.classSubjects.filter(a=>!!h(a)&&(!b.branchId||a.branchId===b.branchId)&&(!b.classId||a.classId===b.classId)&&(!b.academicStructureId||a.academicStructureId===b.academicStructureId)&&(!b.academicPeriodId||a.academicPeriodId===b.academicPeriodId)&&(!b.classSubjectId||a.id===b.classSubjectId)&&!0).sort((b,c)=>{let d=Number(b.orderIndex),e=Number(c.orderIndex),f=Number.isFinite(d),g=Number.isFinite(e);if(f&&g&&d!==e)return d-e;if(f!==g)return f?-1:1;let h=a.subjects.find(a=>String(a.id)===String(b.subjectId)),i=a.subjects.find(a=>String(a.id)===String(c.subjectId));return String(b.name||h?.name||"").localeCompare(String(c.name||i?.name||""))||String(b.subjectId).localeCompare(String(c.subjectId))})}function q(a,b){if(b)return a.assessmentApplicabilities.find(a=>a.classSubjectId===b&&h(a))}function r(a){let b=a?.gradingStructureId??a?.gradingSystemId;return null==b||""===String(b).trim()?void 0:String(b)}function s(a,b,c){let l,m,s,t,u={...b,studentId:void 0,classSubjectId:void 0},v=(l=new Set(a.studentEnrollments.filter(a=>!a.isDeleted&&"active"===a.status&&(!u.branchId||a.branchId===u.branchId)&&(!u.classId||a.classId===u.classId)&&(!u.academicStructureId||a.academicStructureId===u.academicStructureId)&&(!u.academicPeriodId||a.academicPeriodId===u.academicPeriodId)).map(a=>a.studentId)),a.students.filter(a=>!a.isDeleted&&(!u.branchId||a.branchId===u.branchId)&&(!u.studentId||a.id===u.studentId)&&!!a.id&&l.has(a.id))),w=p(a,u),x=v.map(b=>{var i,j,l,m,p;let s,t,v,x,y,z,A,B,C,D,E;return s=k(a),v=(t=w.map(g=>{let i,j,l,m,n,o,p,s,t,v,w,x,y,z;return j=(i=k(a)).subjectMap.get(g.subjectId),l=g.teacherId?i.teacherMap.get(g.teacherId):void 0,m=q(a,null!=g.id?String(g.id):void 0),n=String(g.id??""),p=(o=function(a,b){var c,e,f;let g=b.applicability??q(a,b.classSubjectId);if(!g?.assessmentStructureId)return;let i=a.assessmentStructures.find(a=>String(a.id??"")===String(g.assessmentStructureId)&&h(a));if(!i)return;let j=a.assessmentStructureItems.filter(a=>String(a.assessmentStructureId)===String(i.id)&&h(a)),k=(c=b.studentId,e=b.classSubjectId,f=b.academicPeriodId,a.assessmentEntries.filter(a=>!a.isDeleted&&a.studentId===c&&(!e||a.classSubjectId===e)&&(!f||a.academicPeriodId===f))),l=r(g),m=a.gradeRules.filter(a=>(!l||r(a)===l)&&h(a));return(0,d.Am)({structure:i,items:j,entries:k,gradeRules:m,reportSettings:{...d.kz,...b.settings||{}}}).reportProjection}(a,{studentId:String(b.id??""),classSubjectId:n,academicPeriodId:u.academicPeriodId||g.academicPeriodId,applicability:m,settings:c}))?o.rows.map(a=>({assessmentStructureItemId:a.itemId,parentItemId:a.parentItemId,name:a.name,shortLabel:a.shortLabel,pathLabels:[...a.pathLabels],depth:a.depth,order:a.order,itemType:a.itemType,aggregationMode:a.aggregationMode,weight:a.effectiveWeight,effectiveWeight:a.effectiveWeight,maxScore:a.maxScore,isParent:a.isParent,isLeaf:a.isLeaf,calculatedFromChildren:a.calculatedFromChildren,complete:a.complete,score:a.rawScore,rawScore:a.rawScore,weightedScore:a.weightedScore,normalizedPercentage:a.normalizedPercentage,enteredDirectly:a.enteredDirectly})):[],s=o?o.columns.map(a=>({assessmentStructureItemId:a.itemId,parentItemId:a.parentItemId,name:a.name,shortLabel:a.shortLabel,pathLabels:[...a.pathLabels],depth:a.depth,order:a.order,itemType:a.itemType,aggregationMode:a.aggregationMode,weight:a.effectiveWeight,effectiveWeight:a.effectiveWeight,maxScore:a.maxScore,isParent:a.isParent,isLeaf:a.isLeaf,calculatedFromChildren:a.calculatedFromChildren,complete:a.complete,groupId:a.groupId,groupLabel:a.groupLabel,groupDepth:a.groupDepth,columnSpan:a.columnSpan})):[],t=o?o.roots.reduce((a,b)=>a+e(b.rawScore),0):p.reduce((a,b)=>a+e(b.rawScore),0),v=o?o.roots.reduce((a,b)=>a+e(b.maxScore),0):p.reduce((a,b)=>a+e(b.maxScore),0),w=o?o.roots.reduce((a,b)=>a+e(b.weightedScore),0):p.reduce((a,b)=>a+e(b.weightedScore),0),z=function(a,b,c){if(!c)return{grade:"N/A",remark:"No grading system"};let d=a.gradeRules.filter(a=>r(a)===c&&h(a)).sort((a,b)=>b.minScore-a.minScore).find(a=>b>=a.minScore&&b<=a.maxScore);return{grade:d?.grade||"N/A",remark:d?.remark||"No remark defined",gpa:d?.gpa,color:d?.color}}(a,y=(x=o?o.roots.reduce((a,b)=>a+e(b.effectiveWeight),0):s.reduce((a,b)=>a+e(b.effectiveWeight),0))>0?w/x*100:0,r(m)),{classSubjectId:n,subjectId:g.subjectId,subjectName:g.name||j?.name||"Unknown Subject",subjectCode:g.code||j?.code,shortName:g.code||j?.code||j?.name?.slice(0,4),teacherId:l?.id,teacherName:l?.fullName,assessmentStructureId:m?.assessmentStructureId,gradingStructureId:r(m),breakdown:p,assessmentProjection:o,assessmentReportSettings:o?.settings,rawTotal:f(t,2),rawMaxTotal:f(v,2),weightedTotal:f(w,2),totalWeight:f(x,2),percentage:f(y,2),grade:z.grade,remark:z.remark,gpa:z.gpa,color:z.color,subjectPosition:void 0}})).map(a=>a.percentage),x=t.map(a=>a.gpa).filter(a=>null!=a),y=String(u.classId??b.currentClassId??""),i={studentEnrollments:a.studentEnrollments||[],branchId:u.branchId,classId:y,academicStructureId:u.academicStructureId,academicPeriodId:u.academicPeriodId},z=(a,b)=>String(a??"")===String(b??""),A=new Set,i.studentEnrollments.filter(a=>!(a?.isDeleted||a?.active===!1||["withdrawn","transferred"].includes(String(a?.status||"active").toLowerCase()))&&(!i.branchId||!!z(a.branchId,i.branchId))&&(!i.classId||!!z(a.classId,i.classId))&&(!i.academicStructureId||!!z(a.academicStructureId,i.academicStructureId))&&(!i.academicPeriodId||!!z(a.academicPeriodId,i.academicPeriodId))).forEach(a=>{let b=String(a?.studentId??"").trim();b&&A.add(b)}),B=A.size,{studentId:String(b.id??""),studentName:b.fullName,admissionNumber:b.admissionNumber,gender:b.gender,studentPhoto:b.photo,classId:y,className:s.classMap.get(y)?.name||"Class",academicStructureId:u.academicStructureId,academicPeriodId:u.academicPeriodId,currentAcademicPeriod:n(a,u),nextAcademicPeriod:o(a,u),numberOnRoll:B,classSize:B,subjectResults:t,total:f(v.reduce((a,b)=>a+b,0),2),average:f(g(v),2),overallGPA:x.length?f(g(x),2):void 0,overallPosition:void 0,attendance:(j=a,l=String(b.id??""),(E=function(a,b,c){let d=(a.studentAttendanceSummaries||[]).find(a=>!a.isDeleted&&String(a.studentId)===String(b)&&(!c.classId||String(a.classId)===String(c.classId))&&(!c.academicStructureId||String(a.academicStructureId)===String(c.academicStructureId))&&(!c.academicPeriodId||String(a.academicPeriodId)===String(c.academicPeriodId)));if(d)return{totalDays:e(d.daysOpened),presentDays:e(d.daysPresent),absentDays:e(d.daysAbsent),lateDays:e(d.timesLate),attendancePercent:e(d.attendancePercent)}}(j,l,m=u))?E:(C=(p=j.attendance.filter(a=>!a.isDeleted&&a.studentId===l&&(!m.classId||a.classId===m.classId)&&(!m.academicStructureId||a.academicStructureId===m.academicStructureId)&&(!m.academicPeriodId||a.academicPeriodId===m.academicPeriodId))).length,D=p.filter(a=>"present"===a.status).length,{totalDays:C,presentDays:D,absentDays:p.filter(a=>"absent"===a.status).length,lateDays:p.filter(a=>"late"===a.status).length,attendancePercent:C?f(D/C*100,1):0})),classTeacherRemark:"",headTeacherRemark:"",promoted:void 0}});m=[...x].sort((a,b)=>b.total-a.total||b.average-a.average||(b.overallGPA||0)-(a.overallGPA||0)||a.studentName.localeCompare(b.studentName)),s="",t=0,m.forEach((a,b)=>{let c=[a.total,a.average,a.overallGPA||0].join("|"),d=c===s?t:b+1;a.overallPosition=d,s=c,t=d}),w.forEach(a=>{let b=String(a.id??"");if(!b)return;let c=x.map(a=>a.subjectResults.find(a=>String(a.classSubjectId??"")===b)).filter(a=>!!a).sort((a,b)=>b.percentage-a.percentage||b.weightedTotal-a.weightedTotal||b.rawTotal-a.rawTotal),d="",e=0;c.forEach((a,b)=>{let c=[a.percentage,a.weightedTotal,a.rawTotal].join("|"),f=c===d?e:b+1;a.subjectPosition=f,d=c,e=f})});let y=[...x];switch(b.sortMode){case"alphabetical":return y.sort(i);case"admission-number":return y.sort(j);default:return y.sort((a,b)=>(a.overallPosition||9999)-(b.overallPosition||9999))}}function t(a,b,c){let d,i,j,l,m,r,t,u,v,w,x,y,z,A,B,C,D,E=(d=a.schools.find(a=>!a.isDeleted),i=a.branches.find(a=>a.id===b.branchId&&!a.isDeleted),j=(a.schoolBranchSettings||[]).find(a=>a.branchId===b.branchId&&!a.isDeleted),l=a.academicStructures.find(a=>a.id===b.academicStructureId&&!a.isDeleted),m=a.academicPeriods.find(a=>a.id===b.academicPeriodId&&!a.isDeleted),r=a.classes.find(a=>a.id===b.classId&&!a.isDeleted),t=n(a,b),u=o(a,b),v={schoolName:d?.name||i?.name||"School Name",motto:d?.motto,logo:j?.logo||i?.logo||d?.logo,address:i?.address??d?.address??void 0,phone:i?.phone||d?.phone,email:i?.email||d?.email,website:d?.website,branchName:i?.name,branchAddress:i?.address??void 0,primaryColor:j?.primaryColor||"var(--primary-color)",fontFamily:j?.fontFamily,reportCardBackgroundImage:j?.reportCardBackgroundImage,reportCardWatermark:j?.reportCardWatermark,reportCardSignatureImage:j?.reportCardSignatureImage},{school:d,branch:i,academicStructure:l,academicPeriod:m,classData:r,schoolBranchSetting:j,branchId:i?.id||b.branchId,branchName:i?.name,branchAddress:i?.address??void 0,primaryColor:v.primaryColor,currentAcademicPeriod:t,nextAcademicPeriod:u,branding:v}),F=new Date().toISOString(),G=[];b.branchId||G.push("No branch selected."),b.academicPeriodId||G.push("No academic period selected."),b.classId||G.push("No class selected.");let H=p(a,{...b,classSubjectId:void 0});!H.length&&b.classId&&G.push("No class subjects found for the selected class and period.");let I=s(a,b,c),J=b.studentId?I.find(a=>a.studentId===b.studentId):I[0],K=(w=a.teachers.find(a=>a.branchId===b.branchId&&"head_teacher"===a.role&&!a.isDeleted),w?.fullName),L=(x=a.teachers.find(a=>a.branchId===b.branchId&&"principal"===a.role&&!a.isDeleted),x?.fullName),M=c=>{let d=a.students.find(a=>a.id===c.studentId),e=(c=>{if(!c)return;let d=a.classTeachers.find(a=>a.classId===c&&a.branchId===b.branchId&&!a.isDeleted),e=d?a.teachers.find(a=>a.id===d.teacherId&&a.branchId===b.branchId&&!a.isDeleted):void 0;return e?.fullName})(c.classId),f=(c=>{if(!c)return;let d=a.studentParents.find(a=>a.studentId===c&&a.branchId===b.branchId&&!a.isDeleted),e=d?a.parents.find(a=>a.id===d.parentId&&a.branchId===b.branchId&&!a.isDeleted):void 0;return e?.fullName})(c.studentId),g=a.reportCards.find(a=>a.branchId===b.branchId&&a.studentId===c.studentId&&a.classId===c.classId&&a.academicStructureId===c.academicStructureId&&a.academicPeriodId===c.academicPeriodId&&!a.isDeleted);return{header:E,student:d,report:{...c,classTeacherRemark:g?.classTeacherRemark||c.classTeacherRemark,headTeacherRemark:g?.headTeacherRemark||c.headTeacherRemark,classTeacherName:e,headTeacherName:K,principalName:L,parentName:f,guardianName:f},generatedAt:F,classTeacherName:e,headTeacherName:K,principalName:L,parentName:f,guardianName:f,currentAcademicPeriod:E.currentAcademicPeriod,nextAcademicPeriod:E.nextAcademicPeriod}},N=J?M(J):void 0,O=b.classSubjectId?function(a,b,c){let d=k(a),i=b.classSubjectId?d.classSubjectMap.get(b.classSubjectId):void 0;if(!i)return;let j=d.subjectMap.get(i.subjectId),l=i.teacherId?d.teacherMap.get(i.teacherId):void 0,m=c.reduce((a,b)=>{let c=b.subjectResults.find(a=>a.classSubjectId===i.id);return c&&a.push({studentId:b.studentId,studentName:b.studentName,admissionNumber:b.admissionNumber,breakdown:c.breakdown,weightedTotal:c.weightedTotal,percentage:c.percentage,grade:c.grade,remark:c.remark,gpa:c.gpa,position:c.subjectPosition}),a},[]).sort((a,b)=>(a.position||9999)-(b.position||9999)),n=m.map(a=>a.percentage),o=q(a,null!=i.id?String(i.id):void 0);return{classSubjectId:String(i.id??""),classId:i.classId,className:d.classMap.get(i.classId)?.name||"Class",subjectId:i.subjectId,subjectName:i.name||j?.name||"Subject",subjectCode:i.code||j?.code,teacherName:l?.fullName,assessmentColumns:function(a,b){if(!b?.assessmentStructureId)return[];let c=a.assessmentStructureItems.filter(a=>a.assessmentStructureId===b.assessmentStructureId&&h(a)).sort((a,b)=>e(a.level)-e(b.level)||e(a.order)-e(b.order)),d=new Map(c.map(a=>[String(a.id??""),a])),f=new Map;for(let a of c){let b=a.parentItemId?String(a.parentItemId):"";b&&f.set(b,(f.get(b)??0)+1)}return c.map(a=>{let b=String(a.id??""),c=(f.get(b)??0)>0,g=e(a.level),h=a.parentItemId?e(a.contributionWeight??a.weight):e(a.weight);return{assessmentStructureItemId:b,parentItemId:a.parentItemId?String(a.parentItemId):null,name:a.name,shortLabel:a.name,pathLabels:(a=>{let b=[a.name],c=new Set,e=a.parentItemId?String(a.parentItemId):"";for(;e&&!c.has(e);){c.add(e);let a=d.get(e);if(!a)break;b.unshift(a.name),e=a.parentItemId?String(a.parentItemId):""}return b})(a),depth:g,order:e(a.order),itemType:a.itemType,aggregationMode:a.aggregationMode,maxScore:e(a.maxScore),weight:h,effectiveWeight:h,isParent:c,isLeaf:!c,calculatedFromChildren:"from_children"===a.entryMode||"computed_total"===a.itemType,complete:!1,groupId:a.parentItemId?`assessment-group:${String(a.parentItemId)}`:void 0,groupLabel:a.parentItemId?d.get(String(a.parentItemId))?.name:void 0,groupDepth:a.parentItemId?e(d.get(String(a.parentItemId))?.level):void 0}})}(a,o),students:m,highestScore:f(n.length?Math.max(...n):0,2),lowestScore:f(n.length?Math.min(...n):0,2),classAverage:f(g(n),2)}}(a,b,I):void 0,P=(y=k(a),z=p(a,{...b,classSubjectId:void 0}).map(a=>{let b=y.subjectMap.get(a.subjectId);return{classSubjectId:String(a.id??""),subjectId:a.subjectId,subjectName:a.name||b?.name||"Subject",subjectCode:a.code||b?.code,shortName:a.code||b?.code||b?.name?.slice(0,4)}}),B=(A=I.map(a=>{let b=a.subjectResults.map(a=>({classSubjectId:a.classSubjectId,subjectId:a.subjectId,subjectName:a.subjectName,subjectCode:a.subjectCode,shortName:a.shortName,percentage:a.percentage,weightedTotal:a.weightedTotal,grade:a.grade,remark:a.remark,position:a.subjectPosition}));return{studentId:a.studentId,studentName:a.studentName,admissionNumber:a.admissionNumber,subjects:b,total:a.total,average:a.average,gpa:a.overallGPA,position:a.overallPosition,attendancePercent:a.attendance.attendancePercent}})).map(a=>a.average),{classId:String(b.classId??""),className:b.classId&&y.classMap.get(b.classId)?.name||"Class",subjectColumns:z,students:A,highestAverage:f(B.length?Math.max(...B):0,2),lowestAverage:f(B.length?Math.min(...B):0,2),classAverage:f(g(B),2)}),Q=(C=I.map(a=>a.average),D=I.flatMap(a=>a.subjectResults.flatMap(a=>a.breakdown)),{totalStudents:I.length,totalSubjects:H.length,totalAssessmentItems:D.length,highestAverage:f(C.length?Math.max(...C):0,2),lowestAverage:f(C.length?Math.min(...C):0,2),classAverage:f(g(C),2)});return{header:E,studentReport:N,classReports:I.map(a=>M(a)),subjectBroadsheet:O,classBroadsheet:P,analytics:Q,warnings:G}}},71888:(a,b,c)=>{c.d(b,{BF:()=>k,ed:()=>j,gv:()=>e,tH:()=>i,tU:()=>h,u_:()=>d});let d="classic_formal",e={templateCode:"classic_formal",layoutKey:"classic_formal",templateName:"Classic Formal",orientation:"portrait",paperSize:"A4",density:"compact",showSubjectPosition:!0,showClassPosition:!0,showNumberOnRoll:!1,showAttendance:!0,showAttendancePercent:!0,showStudentPhoto:!0,showTeacherNames:!0,showCurrentAcademicPeriodEnd:!0,showNextAcademicPeriod:!0,showPromotionStatus:!1,showGPA:!0,showAverage:!0,showTotal:!0,showGrade:!0,showSubjectRemarks:!0,showWatermark:!0,showParentSignature:!0,showGeneratedDate:!1,showAssessmentBreakdown:!0,assessmentHierarchyDisplay:"item_rules",showAssessmentParentItems:!0,showAssessmentChildItems:!0,showCalculatedAssessmentItems:!0,indentAssessmentChildren:!0,showAssessmentGroupHeaders:!0,flattenSingleChildAssessmentGroups:!1,assessmentMaximumVisibleDepth:null,showAssessmentMaximumScores:!0,showAssessmentWeights:!1,showAssessmentRawScores:!0,showAssessmentWeightedScores:!0,showAssessmentHierarchyPath:!1,broadsheetAssessmentHierarchyDisplay:"parents_only",broadsheetShowAssessmentGroupHeaders:!0,broadsheetMaximumAssessmentDepth:null,classTeacherLabel:"Class Teacher",headTeacherLabel:"Headteacher / Principal",parentLabel:"Parent / Guardian",principalLabel:"Principal",currentAcademicPeriodEndLabel:"This Academic Period Ends",nextAcademicPeriodLabel:"Next Academic Period Begins",numberOnRollLabel:"Number On Roll",classPositionLabel:"Class Position",subjectPositionLabel:"Position",generatedDateLabel:"Generated On",active:!0},f=[{code:"classic_formal",name:"Classic Formal",layoutKey:"classic_formal",description:"Formal Ghana/private-school report style with strong official structure.",orientation:"portrait",paperSize:"A4",density:"compact",isDefault:!0,active:!0},{code:"modern_clean",name:"Modern Clean",layoutKey:"modern_clean",description:"Premium clean layout with softer spacing and modern arrangement.",orientation:"portrait",paperSize:"A4",density:"comfortable",active:!0},{code:"compact_print",name:"Compact Print",layoutKey:"compact_print",description:"Space-saving layout for efficient printing while keeping report quality.",orientation:"portrait",paperSize:"A4",density:"compact",active:!0},{code:"bordered_traditional",name:"Bordered Traditional",layoutKey:"bordered_traditional",description:"Boxed and table-heavy traditional school report arrangement.",orientation:"portrait",paperSize:"A4",density:"compact",active:!0},{code:"letterhead_premium",name:"Letterhead Premium",layoutKey:"letterhead_premium",description:"Institutional letterhead-style report with elegant branding emphasis.",orientation:"portrait",paperSize:"A4",density:"comfortable",active:!0},{code:"side_profile",name:"Side Profile",layoutKey:"side_profile",description:"Modern report layout with student identity/profile emphasis.",orientation:"portrait",paperSize:"A4",density:"comfortable",active:!0},{code:"cambridge",name:"Cambridge",layoutKey:"cambridge",description:"International-style academic report arrangement inspired by Cambridge-style school reporting.",orientation:"portrait",paperSize:"A4",density:"comfortable",active:!0},{code:"ib",name:"IB",layoutKey:"ib",description:"International Baccalaureate-style report arrangement with clean academic structure.",orientation:"portrait",paperSize:"A4",density:"comfortable",active:!0},{code:"kindergarten",name:"Kindergarten",layoutKey:"kindergarten",description:"Early-years report card style while still receiving the same Eleeveon report dataset.",orientation:"portrait",paperSize:"A4",density:"comfortable",active:!0},{code:"montessori",name:"Montessori",layoutKey:"montessori",description:"Montessori-inspired report design focused on calm presentation and development-friendly structure.",orientation:"portrait",paperSize:"A4",density:"spacious",active:!0},{code:"university_transcript",name:"University Transcript",layoutKey:"university_transcript",description:"Transcript-style academic report layout for higher academic or cumulative presentation.",orientation:"portrait",paperSize:"A4",density:"compact",active:!0}];function g(a){if(null==a)return;let b=String(a).trim();if(b&&"0"!==b&&"undefined"!==b&&"null"!==b)return b}function h(a){return String(a||"").trim().toLowerCase().replace(/\s+/g,"_").replace(/-/g,"_")}function i(a,b,c){let f={...e,...a||{}},h=b?.code||a?.templateCode||f.templateCode||d,i=b?.layoutKey||a?.layoutKey||f.layoutKey||h||"classic_formal",j=k(h),l=b?.name||a?.templateName||j.name||f.templateName||"Classic Formal";return{...f,templateId:g(b?.id||a?.templateId||f.templateId),templateSettingsId:g(a?.id||a?.templateSettingsId||f.templateSettingsId),assignmentId:g(c?.id||f.assignmentId),templateCode:h,layoutKey:i,templateName:l,orientation:a?.orientation||b?.orientation||f.orientation||j.orientation||"portrait",paperSize:a?.paperSize||b?.paperSize||f.paperSize||j.paperSize||"A4",density:a?.density||b?.density||f.density||j.density||"compact",active:a?.active!==!1&&b?.active!==!1}}function j(a){let b=a?.code||d,c=k(b);return{id:a?.id?String(a.id):void 0,code:b,name:a?.name||c.name,layoutKey:a?.layoutKey||c.layoutKey,description:a?.description||c.description,orientation:a?.orientation||c.orientation,paperSize:a?.paperSize||c.paperSize,density:a?.density||c.density,isDefault:a?.isDefault??c.isDefault,active:a?.active!==!1}}function k(a){let b=h(a||d);return f.find(a=>h(a.code)===b||h(a.layoutKey)===b)||f[0]}},90490:(a,b,c)=>{c.d(b,{yo:()=>T,FW:()=>W,nO:()=>X,Ew:()=>V});var d=c(67484),e=c(71888),f=c(48249),g=c(45284);function h({header:a,dataset:b,title:c="Terminal / Periodic Academic Report",primaryColor:d,fontFamily:e,compact:i=!1,studentPhoto:j,showStudentPhoto:k=!0}){let l=a||b?.header,m=(0,g.wX)(l),n=d||(0,g.Ak)(l,m.primaryColor),o=(0,g.B_)(n),p=[m.address,m.phone?`Tel: ${m.phone}`:"",m.email,m.website].filter(Boolean).join("  |  "),q=[m.branchName,m.branchAddress].filter(Boolean).join(" \xb7 "),r=i?76:92;return(0,f.jsxs)("header",{className:"classic-formal-report-header",style:{fontFamily:e||m.fontFamily||"Arial, sans-serif",color:"#111",background:"#fff",borderBottom:`2px solid ${n}`,paddingBottom:i?3:5},children:[(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`${r}px 1fr ${r}px`,alignItems:"center",gap:i?7:9},children:[(0,f.jsx)("div",{style:{width:r,height:r,borderRadius:9,border:"1.4px solid #111",overflow:"hidden",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:m.logo?(0,f.jsx)("img",{src:m.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4,boxSizing:"border-box"}}):(0,f.jsxs)("span",{style:{fontSize:i?8.5:9.2,fontWeight:950,color:"#555",textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,f.jsx)("br",{}),"Logo"]})}),(0,f.jsxs)("div",{style:{textAlign:"center",minWidth:0},children:[(0,f.jsx)("div",{style:{fontSize:i?18:22,lineHeight:1.05,fontWeight:950,textTransform:"uppercase",letterSpacing:.42,color:n,overflowWrap:"anywhere"},children:m.schoolName}),m.motto&&(0,f.jsx)("div",{style:{marginTop:1,fontSize:i?9.8:10.6,fontWeight:800,fontStyle:"italic",color:"#333",lineHeight:1.1},children:m.motto}),p&&(0,f.jsx)("div",{style:{marginTop:1,fontSize:i?10:10.7,lineHeight:1.1,fontWeight:700,color:"#444",overflowWrap:"anywhere"},children:p}),q&&(0,f.jsx)("div",{style:{marginTop:1,fontSize:i?9.9:10.7,lineHeight:1.1,fontWeight:850,color:"#111",overflowWrap:"anywhere"},children:q})]}),k?(0,f.jsx)("div",{style:{width:r,height:r,borderRadius:9,border:"1.4px solid #111",background:"#fafafa",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:j?(0,f.jsx)("img",{src:j,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,f.jsx)("span",{style:{fontSize:i?10:11,fontWeight:900,color:"#666",textAlign:"center"},children:"PHOTO"})}):(0,f.jsx)("div",{"aria-hidden":"true",style:{width:r,height:r}})]}),(0,f.jsxs)("div",{style:{marginTop:i?3:5,display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",gap:i?5:7},children:[(0,f.jsx)("div",{style:{height:1,background:"#111",opacity:.42}}),(0,f.jsx)("div",{"data-report-color-block":"true",style:{border:"1.2px solid #111",background:n,color:o,borderRadius:999,padding:i?"3.5px 12px":"4.5px 16px",fontSize:i?9.5:10.5,fontWeight:950,textTransform:"uppercase",letterSpacing:.3,whiteSpace:"nowrap",textAlign:"center"},children:c}),(0,f.jsx)("div",{style:{height:1,background:"#111",opacity:.42}})]})]})}function i(a){return(0,g.Tu)(a)}function j(a,b){if(!a?.length)return[];let c=i(b),d=new Map;for(let b of a){let a=b.assessmentProjection?.columns;if(a?.length){for(let b of a)d.has(b.itemId)||d.set(b.itemId,{assessmentStructureItemId:b.itemId,parentItemId:b.parentItemId,name:b.name,shortLabel:b.shortLabel,pathLabels:[...b.pathLabels],depth:b.depth,order:b.order,itemType:b.itemType,aggregationMode:b.aggregationMode,weight:b.effectiveWeight,effectiveWeight:b.effectiveWeight,maxScore:b.maxScore,isParent:b.isParent,isLeaf:b.isLeaf,calculatedFromChildren:b.calculatedFromChildren,complete:b.complete,groupId:b.groupId,groupLabel:b.groupLabel,groupDepth:b.groupDepth,columnSpan:b.columnSpan});continue}for(let a of b.breakdown??[])d.has(a.assessmentStructureItemId)||d.set(a.assessmentStructureItemId,{...a,pathLabels:a.pathLabels?.length?[...a.pathLabels]:[a.name],depth:a.depth??0,effectiveWeight:a.effectiveWeight??a.weight,isParent:a.isParent??!1,isLeaf:a.isLeaf??!0,calculatedFromChildren:a.calculatedFromChildren??!1,complete:a.complete??!1})}return[...d.values()].filter(a=>(null===c.maximumVisibleDepth||!(a.depth>c.maximumVisibleDepth))&&(!!c.showParentItems||!a.isParent)&&(!!c.showChildItems||!(a.depth>0))&&(!!c.showCalculatedItems||!a.calculatedFromChildren)).sort((a,b)=>a.order-b.order||a.depth-b.depth||a.name.localeCompare(b.name))}function k(a,b){let c=i(b);if(c.showHierarchyPath&&a.pathLabels?.length)return a.pathLabels.join(" \xb7 ");let d=a.shortLabel||a.name;return c.indentChildren&&a.depth>0?`${"› ".repeat(Math.min(a.depth,3))}${d}`:d}function l(a,b,c=(a,b=0)=>Number(a||0).toFixed(b)){if(!a)return"-";let d=i(b);return d.showRawScores&&d.showMaximumScores?`${c(a.rawScore??a.score,0)}/${c(a.maxScore,0)}`:d.showRawScores?c(a.rawScore??a.score,0):d.showWeightedScores?c(a.weightedScore,1):c(a.normalizedPercentage,0)}function m(a){return String(a??"").trim().replace(/\s+/g," ").toLocaleLowerCase("en").replace(/(^|[\s\-\u2019'])(\p{L})/gu,(a,b,c)=>b+c.toLocaleUpperCase("en"))}let n=`
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
`;function o({header:a,dataset:b,title:c="Official Academic Report",primaryColor:d,fontFamily:e,compact:h=!1}){let i=a||b?.header,j=(0,g.wX)(i),k=d||(0,g.Ak)(i,j.primaryColor),l=[j.address,j.phone?`Tel: ${j.phone}`:"",j.email,j.website].filter(Boolean).join("  •  "),m=[j.branchName,j.branchAddress].filter(Boolean).join(" \xb7 "),n=h?68:80,p={height:0,borderTop:`1px solid ${k}`,borderBottom:"1px solid #111827"};return(0,f.jsxs)("header",{className:"bordered-traditional-report-header",style:{fontFamily:e||j.fontFamily||"Georgia, 'Times New Roman', serif",color:"#111827",background:"#fffdf7",border:"2px double #111827",padding:h?6:9,position:"relative",overflow:"hidden"},children:[(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:5,border:`1px solid ${k}`,pointerEvents:"none",opacity:.75}}),(0,f.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",gap:h?8:10},children:[(0,f.jsx)("div",{style:p}),(0,f.jsx)("div",{style:{width:n,height:n,border:`2px double ${k}`,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",padding:4,boxSizing:"border-box"},children:j.logo?(0,f.jsx)("img",{src:j.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain"}}):(0,f.jsxs)("span",{style:{fontSize:h?8.1:8.8,fontWeight:950,color:k,textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,f.jsx)("br",{}),"Crest"]})}),(0,f.jsx)("div",{style:p})]}),(0,f.jsxs)("div",{style:{marginTop:h?4:5,textAlign:"center"},children:[(0,f.jsx)("div",{style:{fontSize:h?19:23,lineHeight:1.02,fontWeight:950,textTransform:"uppercase",letterSpacing:.55,color:"#111827",overflowWrap:"anywhere"},children:j.schoolName}),j.motto&&(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?10.2:10.9,fontWeight:760,fontStyle:"italic",color:"#334155",lineHeight:1.1},children:["“",j.motto,"”"]}),l&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?10.5:11.1,fontWeight:700,color:"#475569",lineHeight:1.1,overflowWrap:"anywhere"},children:l}),m&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?10.4:11,fontWeight:900,color:k,lineHeight:1.1,overflowWrap:"anywhere"},children:m})]}),(0,f.jsx)("div",{"data-report-color-block":"true",style:{margin:h?"6px auto 0":"8px auto 0",width:"fit-content",maxWidth:"82%",border:`2px double ${k}`,background:"#f3efe4",padding:h?"4px 18px":"5px 22px",textAlign:"center",fontSize:h?9.8:11,fontWeight:950,color:"#111827",lineHeight:1.1,textTransform:"uppercase",letterSpacing:.42},children:c})]})]})}function p(a){return String(a??"").trim().replace(/\s+/g," ").toLocaleLowerCase("en").replace(/(^|[\s\-\u2019'])(\p{L})/gu,(a,b,c)=>b+c.toLocaleUpperCase("en"))}let q=`
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
`;function r({header:a,dataset:b,title:c="Terminal / Periodic Academic Report",settings:d,primaryColor:e,fontFamily:h,compact:i=!0,studentPhoto:j,showStudentPhoto:k=!1}){let l=a||b?.header,m=(0,g.wX)(l),n=e||(0,g.Ak)(l,m.primaryColor),o=(0,g.B_)(n),p=[m.address,m.phone?`Tel: ${m.phone}`:"",m.email,m.website].filter(Boolean).join("  |  "),q=[m.branchName,m.branchAddress].filter(Boolean).join(" \xb7 "),s=i?56:62;return(0,f.jsx)("header",{className:"compact-print-report-header",style:{fontFamily:h||m.fontFamily||"Arial, sans-serif",color:"#111",border:"1.5px solid #111827",borderTop:`5px solid ${n}`,padding:"5px 7px",background:"rgba(255,255,255,.98)"},children:(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:k?`${s}px minmax(0,1fr) auto 72px`:`${s}px minmax(0,1fr) auto`,alignItems:"center",gap:8},children:[(0,f.jsx)("div",{style:{width:s,height:s,border:"1px solid #cfcfcf",borderRadius:6,overflow:"hidden",background:"#fff",display:"flex",alignItems:"center",justifyContent:"center"},children:m.logo?(0,f.jsx)("img",{src:m.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:3,boxSizing:"border-box"}}):(0,f.jsx)("span",{style:{fontSize:9,fontWeight:900,color:"#777",textAlign:"center",lineHeight:1.05},children:"LOGO"})}),(0,f.jsxs)("div",{style:{minWidth:0},children:[(0,f.jsx)("div",{style:{fontSize:i?17.2:18.2,lineHeight:1.05,fontWeight:950,textTransform:"uppercase",letterSpacing:.3,color:n,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:m.schoolName}),m.motto&&(0,f.jsx)("div",{style:{marginTop:1,fontSize:10.2,fontWeight:750,fontStyle:"italic",color:"#444",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:m.motto}),p&&(0,f.jsx)("div",{style:{marginTop:1,fontSize:10.5,lineHeight:1.08,fontWeight:650,color:"#555",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:p}),q&&(0,f.jsx)("div",{style:{marginTop:1,fontSize:10.3,lineHeight:1.08,fontWeight:800,color:"#333",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:q})]}),(0,f.jsx)("div",{style:{background:n,color:o,borderRadius:6,padding:"6px 9px",maxWidth:160,textAlign:"center",fontSize:10.5,fontWeight:950,lineHeight:1.1,textTransform:"uppercase",letterSpacing:.25},children:c}),k&&(0,f.jsx)("div",{style:{width:72,height:78,border:"1.5px solid #111",overflow:"hidden",background:"#f8fafc",display:"flex",alignItems:"center",justifyContent:"center"},children:j?(0,f.jsx)("img",{src:j,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,f.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]})})}function s(a){return String(a??"").trim().replace(/\s+/g," ").toLocaleLowerCase("en").replace(/(^|[\s\-\u2019'])(\p{L})/gu,(a,b,c)=>b+c.toLocaleUpperCase("en"))}function t({name:a,label:b,inline:c=!1}){return c?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{style:{minHeight:13,marginBottom:2,fontSize:10.5,fontWeight:900,color:"#111827"},children:a||""}),(0,f.jsx)("div",{style:{borderTop:"1px solid #111827",paddingTop:3,fontSize:10.2,fontWeight:900,color:"#111827"},children:b})]}):(0,f.jsxs)("div",{style:{textAlign:"center"},children:[(0,f.jsx)("div",{style:{minHeight:13,marginBottom:2,fontSize:8.2,fontWeight:900,color:"#111827"},children:a||""}),(0,f.jsx)("div",{style:{borderTop:"1px solid #111827",paddingTop:3,fontSize:8.1,fontWeight:900,color:"#111827"},children:b})]})}let u=`
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
`;function v({header:a,dataset:b,title:c="Terminal / Periodic Academic Report",primaryColor:d,fontFamily:e,compact:h=!1}){let i=a||b?.header,j=(0,g.wX)(i),k=d||(0,g.Ak)(i,j.primaryColor),l=(0,g.B_)(k),m=[j.address,j.phone?`Tel: ${j.phone}`:"",j.email,j.website].filter(Boolean).join("  •  "),n=[j.branchName,j.branchAddress].filter(Boolean).join(" \xb7 "),o=h?54:64;return(0,f.jsxs)("header",{className:"modern-framed-report-header",style:{fontFamily:e||j.fontFamily||"Arial, sans-serif",color:"#111827",position:"relative",borderRadius:20,overflow:"hidden",background:"#ffffff",border:"1px solid #d9dee8",boxShadow:"0 10px 24px rgba(15,23,42,.06)"},children:[(0,f.jsx)("div",{"aria-hidden":"true","data-report-color-block":"true",style:{height:h?7:8,background:`linear-gradient(90deg, ${k}, ${k} 42%, rgba(15,23,42,.82))`}}),(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`${o+14}px minmax(0, 1fr) ${h?138:154}px`,gap:h?8:10,alignItems:"stretch",padding:h?6:8},children:[(0,f.jsx)("div",{"data-report-color-block":"true",style:{borderRadius:18,background:k,color:l,minHeight:o+12,display:"flex",alignItems:"center",justifyContent:"center",padding:7,boxSizing:"border-box",boxShadow:"inset 0 0 0 1px rgba(255,255,255,.22)"},children:(0,f.jsx)("div",{style:{width:o,height:o,borderRadius:16,overflow:"hidden",background:"rgba(255,255,255,.96)",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",border:"1px solid rgba(255,255,255,.75)"},children:j.logo?(0,f.jsx)("img",{src:j.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:5,boxSizing:"border-box"}}):(0,f.jsxs)("span",{style:{fontSize:h?9.2:9.7,fontWeight:950,color:k,textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,f.jsx)("br",{}),"Logo"]})})}),(0,f.jsxs)("div",{style:{minWidth:0,display:"flex",flexDirection:"column",justifyContent:"center",padding:"2px 0"},children:[(0,f.jsx)("div",{style:{fontSize:h?18.5:22,lineHeight:1.02,fontWeight:950,textTransform:"uppercase",letterSpacing:.18,color:"#0f172a",overflowWrap:"anywhere"},children:j.schoolName}),j.motto&&(0,f.jsx)("div",{style:{marginTop:3,fontSize:h?9.9:10.6,fontWeight:760,fontStyle:"italic",color:"#475569",lineHeight:1.1},children:j.motto}),m&&(0,f.jsx)("div",{style:{marginTop:3,fontSize:h?9.9:10.3,lineHeight:1.09,fontWeight:680,color:"#475569",overflowWrap:"anywhere"},children:m}),n&&(0,f.jsx)("div",{style:{marginTop:2,display:"inline-flex",width:"fit-content",maxWidth:"100%",borderRadius:999,padding:h?"2px 8px":"3px 10px",background:"#f8fafc",border:"1px solid #e5e7eb",fontSize:h?9.6:10,lineHeight:1.15,fontWeight:900,color:k,overflowWrap:"anywhere"},children:n})]}),(0,f.jsx)("aside",{style:{display:"grid",gridTemplateRows:"1fr auto",gap:7,minWidth:0},children:(0,f.jsxs)("div",{"data-report-color-block":"true",style:{borderRadius:18,background:"#0f172a",color:"#ffffff",padding:h?"9px 10px":"11px 12px",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",boxShadow:"inset 0 0 0 1px rgba(255,255,255,.08)"},children:[(0,f.jsx)("div",{style:{fontSize:h?9.2:9.7,fontWeight:950,letterSpacing:.35,textTransform:"uppercase",opacity:.82},children:"Report Card"}),(0,f.jsx)("div",{style:{marginTop:4,fontSize:h?10:11.4,lineHeight:1.12,fontWeight:950,textTransform:"uppercase"},children:c})]})})]})]})}function w(a){return String(a??"").toLocaleLowerCase("en-GH").replace(/(^|[\s\-'])\p{L}/gu,a=>a.toLocaleUpperCase("en-GH"))}let x=`
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
`;function y({header:a,dataset:b,title:c="Terminal / Periodic Academic Report",primaryColor:d,fontFamily:e,compact:h=!1}){let i=a||b?.header,j=(0,g.wX)(i),k=d||(0,g.Ak)(i,j.primaryColor),l=(0,g.B_)(k),m=[j.address,j.phone?`Tel: ${j.phone}`:"",j.email,j.website].filter(Boolean).join("  •  "),n=[j.branchName,j.branchAddress].filter(Boolean).join(" \xb7 ");return(0,f.jsx)("header",{className:"side-profile-report-header",style:{fontFamily:e||j.fontFamily||"Arial, sans-serif",color:"#0f172a",background:"#ffffff",border:"1px solid #dbe3ef",borderRadius:16,overflow:"hidden",boxShadow:"0 8px 22px rgba(15,23,42,.055)"},children:(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) auto",gap:8,alignItems:"center",padding:h?"5px 10px":"5px 12px",borderBottom:"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #f8fafc)"},children:[(0,f.jsxs)("div",{style:{minWidth:0},children:[(0,f.jsx)("div",{style:{fontSize:h?14.5:16.5,lineHeight:1.05,fontWeight:950,letterSpacing:.16,textTransform:"uppercase",color:"#0f172a",overflowWrap:"anywhere"},children:j.schoolName}),(j.motto||m||n)&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?10.3:10.6,lineHeight:1.12,fontWeight:720,color:"#475569",overflowWrap:"anywhere"},children:[j.motto,m,n].filter(Boolean).join("  •  ")})]}),(0,f.jsx)("div",{"data-report-color-block":"true",style:{background:k,color:l,borderRadius:999,padding:h?"5px 10px":"5px 12px",maxWidth:152,textAlign:"center",fontSize:h?9.2:10,fontWeight:950,lineHeight:1.12,textTransform:"uppercase",letterSpacing:.22,boxShadow:"0 8px 16px rgba(15,23,42,.13)"},children:c})]})})}function z(a){return String(a??"").toLocaleLowerCase("en-GH").replace(/(^|[\s\-'])\p{L}/gu,a=>a.toLocaleUpperCase("en-GH"))}let A=`
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
`;function B({header:a,dataset:b,title:c="Terminal / Periodic Academic Report",primaryColor:d,fontFamily:e,compact:h=!1}){let i=a||b?.header,j=(0,g.wX)(i),k=d||(0,g.Ak)(i,j.primaryColor),l=(0,g.B_)(k),m=[j.address,j.phone?`Tel: ${j.phone}`:"",j.email,j.website].filter(Boolean).join("  •  "),n=[j.branchName,j.branchAddress].filter(Boolean).join(" \xb7 "),o=h?46:52;return(0,f.jsxs)("header",{className:"letterhead-premium-report-header",style:{fontFamily:e||j.fontFamily||"Georgia, 'Times New Roman', serif",color:"#111827",position:"relative",overflow:"hidden",border:"1px double #b7a981",borderRadius:8,background:"linear-gradient(180deg, #fffdf8, #ffffff)",boxShadow:"0 6px 18px rgba(15,23,42,.045)"},children:[(0,f.jsx)("div",{"aria-hidden":"true","data-report-color-block":"true",style:{height:h?5:6,background:`linear-gradient(90deg, ${k}, #111827 50%, ${k})`}}),(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`${o+7}px minmax(0, 1fr) ${h?126:150}px`,gap:h?8:10,alignItems:"center",padding:h?"0px 9px 1px":"5px 11px 5px"},children:[(0,f.jsxs)("div",{style:{width:o,height:o,border:`1px double ${k}`,borderRadius:6,background:"#fff",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",position:"relative",overflow:"hidden"},children:[(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:4,border:"1px solid #eadfbe",borderRadius:4}}),j.logo?(0,f.jsx)("img",{src:j.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:6,boxSizing:"border-box",position:"relative",zIndex:1}}):(0,f.jsxs)("span",{style:{fontSize:h?8:8.7,fontWeight:950,color:k,textAlign:"center",lineHeight:1.05,textTransform:"uppercase",position:"relative",zIndex:1},children:["School",(0,f.jsx)("br",{}),"Crest"]})]}),(0,f.jsxs)("div",{style:{minWidth:0},children:[(0,f.jsx)("div",{style:{fontSize:h?17:19.5,lineHeight:1.02,fontWeight:950,textTransform:"uppercase",letterSpacing:.35,color:"#111827",overflowWrap:"anywhere"},children:j.schoolName}),j.motto&&(0,f.jsxs)("div",{style:{marginTop:1,fontSize:h?9.5:10.3,fontWeight:760,fontStyle:"italic",color:"#5f5642",lineHeight:1.08},children:["“",j.motto,"”"]}),m&&(0,f.jsx)("div",{style:{marginTop:1,fontSize:h?9.4:10.2,lineHeight:1.08,fontWeight:700,color:"#475569",overflowWrap:"anywhere"},children:m}),n&&(0,f.jsx)("div",{style:{marginTop:1,fontSize:h?9.4:10.2,lineHeight:1.08,fontWeight:900,color:k,overflowWrap:"anywhere"},children:n})]}),(0,f.jsxs)("div",{"data-report-color-block":"true",style:{alignSelf:"stretch",borderRadius:6,background:k,color:l,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:h?"6px 8px":"7px 10px",boxShadow:"inset 0 0 0 1px rgba(255,255,255,.24)",minHeight:o},children:[(0,f.jsx)("div",{style:{fontSize:h?9:9.7,fontWeight:950,textTransform:"uppercase",letterSpacing:.45,lineHeight:1.12},children:c}),(0,f.jsx)("div",{"aria-hidden":"true",style:{width:"74%",height:1,margin:"3px 0 2px",background:"rgba(255,255,255,.72)"}}),(0,f.jsx)("div",{style:{fontSize:h?8:8.7,fontWeight:850,letterSpacing:.25,opacity:.95},children:"Official Academic Record"})]})]}),(0,f.jsxs)("div",{"aria-hidden":"true",style:{display:"flex",alignItems:"center",gap:7,padding:"0 11px",color:k,fontWeight:950,lineHeight:1},children:[(0,f.jsx)("span",{style:{flex:1,height:1,background:"#e7ddbf"}}),(0,f.jsx)("span",{style:{fontSize:h?8:9},children:"◆"}),(0,f.jsx)("span",{style:{flex:1,height:1,background:"#e7ddbf"}})]})]})}function C(a){return String(a??"").toLocaleLowerCase("en-GH").replace(/(^|[\s\-'])\p{L}/gu,a=>a.toLocaleUpperCase("en-GH"))}let D=`
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
`;function E({header:a,dataset:b,title:c="International Academic Progress Report",primaryColor:d,fontFamily:e,compact:h=!1}){let i=a||b?.header,j=(0,g.wX)(i),k=d||(0,g.Ak)(i,j.primaryColor),l=[j.address,j.phone?`Tel: ${j.phone}`:"",j.email,j.website].filter(Boolean).join("  •  "),m=[j.branchName,j.branchAddress].filter(Boolean).join(" \xb7 "),n=h?58:68;return(0,f.jsxs)("header",{className:"cambridge-report-header",style:{fontFamily:e||j.fontFamily||"Arial, sans-serif",color:"#0f172a",background:"#ffffff",border:"1px solid #9fb3d1",borderRadius:10,overflow:"hidden",boxShadow:"0 8px 22px rgba(15,23,42,.055)"},children:[(0,f.jsx)("div",{"data-report-color-block":"true",style:{height:6,background:"#0f2f5f"}}),(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`minmax(0, 1fr) ${h?172:198}px ${n}px`,gap:h?8:10,alignItems:"center",padding:h?"5px 10px":"8px 12px",background:"linear-gradient(180deg, #ffffff, #f3f8ff)",borderBottom:"1px solid #c9d7eb"},children:[(0,f.jsxs)("div",{style:{minWidth:0},children:[(0,f.jsx)("div",{style:{fontSize:h?15:17.5,lineHeight:1.05,fontWeight:950,letterSpacing:.18,textTransform:"uppercase",color:"#0f2f5f",overflowWrap:"anywhere"},children:j.schoolName}),(j.motto||l||m)&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?10.3:11.1,lineHeight:1.12,fontWeight:720,color:"#475569",overflowWrap:"anywhere"},children:[j.motto,l,m].filter(Boolean).join("  •  ")})]}),(0,f.jsxs)("div",{"data-report-color-block":"true",style:{border:`1px solid ${k}`,borderLeft:"5px solid #0f2f5f",background:"#ffffff",color:"#0f2f5f",borderRadius:4,padding:h?"5px 8px":"6px 10px",textAlign:"left",fontSize:h?10:11.1,fontWeight:950,lineHeight:1.15,textTransform:"uppercase",letterSpacing:.22},children:[c,(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?9.6:10.1,color:"#64748b",fontWeight:850},children:"Cambridge-style progress record"})]}),(0,f.jsx)("div",{style:{width:n,height:n,borderRadius:6,border:"1px solid #9fb3d1",overflow:"hidden",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:j.logo?(0,f.jsx)("img",{src:j.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4,boxSizing:"border-box"}}):(0,f.jsxs)("span",{style:{fontSize:h?7.6:8.1,fontWeight:950,color:"#64748b",textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,f.jsx)("br",{}),"Logo"]})})]})]})}function F(a){return String(a??"").trim().replace(/\s+/g," ").toLocaleLowerCase("en").replace(/(^|[\s\-\u2019'])(\p{L})/gu,(a,b,c)=>b+c.toLocaleUpperCase("en"))}let G=`
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
`;function H({header:a,dataset:b,title:c="International Learner Progress Report",primaryColor:d,fontFamily:e,compact:h=!1}){let i=a||b?.header,j=(0,g.wX)(i),k=d||(0,g.Ak)(i,j.primaryColor),l=[j.address,j.phone?`Tel: ${j.phone}`:"",j.email,j.website].filter(Boolean).join("  •  "),m=[j.branchName,j.branchAddress].filter(Boolean).join(" \xb7 "),n=h?42:48;return(0,f.jsxs)("header",{className:"ib-report-header",style:{fontFamily:e||j.fontFamily||"Arial, sans-serif",color:"#0f172a",background:"#ffffff",border:"1px solid #99d5cb",borderRadius:10,overflow:"hidden",boxShadow:"0 8px 22px rgba(15,23,42,.055)"},children:[(0,f.jsx)("div",{"data-report-color-block":"true",style:{height:6,background:"#0f766e"}}),(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`minmax(0, 1fr) ${h?164:182}px ${n}px`,gap:h?7:9,alignItems:"center",padding:h?"1px 10px":"7px 12px",background:"linear-gradient(180deg, #ffffff, #f6fffb)",borderBottom:"1px solid #c7ebe4"},children:[(0,f.jsxs)("div",{style:{minWidth:0},children:[(0,f.jsx)("div",{style:{fontSize:h?15:17.5,lineHeight:1.05,fontWeight:950,letterSpacing:.18,textTransform:"uppercase",color:"#0f766e",overflowWrap:"anywhere"},children:j.schoolName}),(j.motto||l||m)&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?9.8:10.6,lineHeight:1.12,fontWeight:720,color:"#475569",overflowWrap:"anywhere"},children:[j.motto,l,m].filter(Boolean).join("  •  ")})]}),(0,f.jsxs)("div",{"data-report-color-block":"true",style:{border:`1px solid ${k}`,borderLeft:"5px solid #0f766e",background:"#ffffff",color:"#0f766e",borderRadius:4,padding:h?"5px 8px":"6px 10px",textAlign:"left",fontSize:h?9.2:10,fontWeight:950,lineHeight:1.15,textTransform:"uppercase",letterSpacing:.22},children:[c,(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?9.6:10.1,color:"#64748b",fontWeight:850},children:"IB-style progress record"})]}),(0,f.jsx)("div",{style:{width:n,height:n,borderRadius:6,border:"1px solid #99d5cb",overflow:"hidden",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:j.logo?(0,f.jsx)("img",{src:j.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4,boxSizing:"border-box"}}):(0,f.jsxs)("span",{style:{fontSize:h?7.6:8.1,fontWeight:950,color:"#64748b",textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,f.jsx)("br",{}),"Logo"]})})]})]})}function I(a){return String(a??"").toLocaleLowerCase("en-GH").replace(/(^|[\s\-'])\p{L}/gu,a=>a.toLocaleUpperCase("en-GH"))}let J=`
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
`;function K({header:a,dataset:b,title:c="Early Years Progress Report",primaryColor:d,fontFamily:e,compact:h=!1}){let i=a||b?.header,j=(0,g.wX)(i),k=d||(0,g.Ak)(i,j.primaryColor),l=[j.address,j.phone?`Tel: ${j.phone}`:"",j.email,j.website].filter(Boolean).join("  •  "),m=[j.branchName,j.branchAddress].filter(Boolean).join(" \xb7 "),n=h?42:48;return(0,f.jsxs)("header",{className:"kindergarten-report-header",style:{fontFamily:e||j.fontFamily||"Arial, sans-serif",color:"#0f172a",background:"#ffffff",border:"1px solid #fed7aa",borderRadius:18,overflow:"hidden",boxShadow:"0 8px 22px rgba(15,23,42,.055)"},children:[(0,f.jsx)("div",{"data-report-color-block":"true",style:{height:6,background:"#ea580c"}}),(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`minmax(0, 1fr) ${h?172:198}px ${n}px`,gap:h?8:10,alignItems:"center",padding:h?"6px 10px":"8px 12px",background:"linear-gradient(180deg, #ffffff, #fff7ed)",borderBottom:"1px solid #ffedd5"},children:[(0,f.jsxs)("div",{style:{minWidth:0},children:[(0,f.jsx)("div",{style:{fontSize:h?15:17.5,lineHeight:1.05,fontWeight:950,letterSpacing:.18,textTransform:"uppercase",color:"#ea580c",overflowWrap:"anywhere"},children:j.schoolName}),(j.motto||l||m)&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?10.3:11.1,lineHeight:1.12,fontWeight:720,color:"#6b7280",overflowWrap:"anywhere"},children:[j.motto,l,m].filter(Boolean).join("  •  ")})]}),(0,f.jsxs)("div",{"data-report-color-block":"true",style:{border:`1px solid ${k}`,borderLeft:"0",background:"linear-gradient(135deg, #fff7ed, #ecfeff)",color:"#ea580c",borderRadius:999,padding:h?"5px 8px":"6px 10px",textAlign:"left",fontSize:h?9.2:10,fontWeight:950,lineHeight:1.15,textTransform:"uppercase",letterSpacing:.22},children:[c,(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?9.6:10.1,color:"#78716c",fontWeight:850},children:"Kindergarten progress record"})]}),(0,f.jsx)("div",{style:{width:n,height:n,borderRadius:16,border:"1px solid #fed7aa",overflow:"hidden",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:j.logo?(0,f.jsx)("img",{src:j.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4,boxSizing:"border-box"}}):(0,f.jsxs)("span",{style:{fontSize:h?7.6:8.1,fontWeight:950,color:"#78716c",textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,f.jsx)("br",{}),"Logo"]})})]})]})}function L(a){return String(a??"").toLocaleLowerCase("en-GH").replace(/(^|[\s\-'])\p{L}/gu,a=>a.toLocaleUpperCase("en-GH"))}let M=`
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
`;function N({header:a,dataset:b,title:c="Montessori Progress Record",primaryColor:d,fontFamily:e,compact:h=!1}){let i=a||b?.header,j=(0,g.wX)(i),k=d||(0,g.Ak)(i,j.primaryColor),l=[j.address,j.phone?`Tel: ${j.phone}`:"",j.email,j.website].filter(Boolean).join("  •  "),m=[j.branchName,j.branchAddress].filter(Boolean).join(" \xb7 "),n=h?38:44;return(0,f.jsx)("header",{className:"montessori-report-header",style:{fontFamily:e||j.fontFamily||"Arial, sans-serif",color:"#243126",background:"#fffdf7",border:"1px solid #d9cbb3",borderRadius:8,overflow:"hidden",boxShadow:"0 7px 18px rgba(80,64,38,.055)"},children:(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`${n}px minmax(0, 1fr) ${h?155:169}px`,gap:h?7:8,alignItems:"center",padding:h?"6px 10px":"4px 12px",background:"linear-gradient(180deg, #fffdf7, #ffffff)",borderBottom:"1px solid #e7ddc8",position:"relative"},children:[(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:12,right:12,bottom:-1,height:1,background:`linear-gradient(90deg, transparent, ${k}, transparent)`,opacity:.45}}),(0,f.jsx)("div",{style:{width:n,height:n,borderRadius:999,border:"1px solid #d9cbb3",overflow:"hidden",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:j.logo?(0,f.jsx)("img",{src:j.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4,boxSizing:"border-box"}}):(0,f.jsxs)("span",{style:{fontSize:h?9.2:9.8,fontWeight:900,color:"#6f6a5f",textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,f.jsx)("br",{}),"Logo"]})}),(0,f.jsxs)("div",{style:{minWidth:0},children:[(0,f.jsx)("div",{style:{fontSize:h?14.5:16.8,lineHeight:1.08,fontWeight:920,letterSpacing:.16,textTransform:"uppercase",color:"#243126",overflowWrap:"anywhere"},children:j.schoolName}),(j.motto||l||m)&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?10.1:10.6,lineHeight:1.12,fontWeight:680,color:"#6f6a5f",overflowWrap:"anywhere"},children:[j.motto,l,m].filter(Boolean).join("  •  ")})]}),(0,f.jsxs)("div",{"data-report-color-block":"true",style:{borderLeft:`3px solid ${k}`,background:"#f6f3ea",color:"#243126",borderRadius:6,padding:h?"5px 8px":"6px 10px",textAlign:"left",fontSize:h?9.3:10,fontWeight:920,lineHeight:1.15,textTransform:"uppercase",letterSpacing:.22},children:[c,(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?9.6:10.2,color:"#6f6a5f",fontWeight:760},children:"calm early-years learning record"})]})]})})}function O(a){return String(a??"").toLocaleLowerCase("en-GH").replace(/(^|[\s\-'])\p{L}/gu,a=>a.toLocaleUpperCase("en-GH"))}let P=`
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
`;function Q({header:a,dataset:b,title:c="Official Academic Transcript",primaryColor:d,fontFamily:e,compact:h=!1}){let i=a||b?.header,j=(0,g.wX)(i),k=d||(0,g.Ak)(i,j.primaryColor),l=[j.address,j.phone?`Tel: ${j.phone}`:"",j.email,j.website].filter(Boolean).join("  •  "),m=[j.branchName,j.branchAddress].filter(Boolean).join(" \xb7 "),n=h?38:44;return(0,f.jsx)("header",{className:"montessori-report-header",style:{fontFamily:e||j.fontFamily||"Arial, sans-serif",color:"#111827",background:"#ffffff",border:"1px solid #9ca3af",borderRadius:4,overflow:"hidden",boxShadow:"0 8px 22px rgba(15,23,42,.055)"},children:(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:`${n}px minmax(0, 1fr) ${h?155:169}px`,gap:h?7:8,alignItems:"center",padding:h?"6px 10px":"4px 12px",background:"#ffffff",borderBottom:"3px double #111827",position:"relative"},children:[(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:12,right:12,bottom:-1,height:1,background:`linear-gradient(90deg, transparent, ${k}, transparent)`,opacity:.45}}),(0,f.jsx)("div",{style:{width:n,height:n,borderRadius:999,border:"1px solid #9ca3af",overflow:"hidden",background:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box"},children:j.logo?(0,f.jsx)("img",{src:j.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4,boxSizing:"border-box"}}):(0,f.jsxs)("span",{style:{fontSize:h?9.2:9.8,fontWeight:900,color:"#4b5563",textAlign:"center",lineHeight:1.05,textTransform:"uppercase"},children:["School",(0,f.jsx)("br",{}),"Logo"]})}),(0,f.jsxs)("div",{style:{minWidth:0},children:[(0,f.jsx)("div",{style:{fontSize:h?14.5:16.8,lineHeight:1.08,fontWeight:920,letterSpacing:.16,textTransform:"uppercase",color:"#111827",overflowWrap:"anywhere"},children:j.schoolName}),(j.motto||l||m)&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?10.1:10.6,lineHeight:1.12,fontWeight:680,color:"#4b5563",overflowWrap:"anywhere"},children:[j.motto,l,m].filter(Boolean).join("  •  ")})]}),(0,f.jsxs)("div",{"data-report-color-block":"true",style:{borderLeft:`4px solid ${k}`,background:"#f3f4f6",color:"#111827",borderRadius:3,padding:h?"5px 8px":"6px 10px",textAlign:"left",fontSize:h?9.3:10,fontWeight:920,lineHeight:1.15,textTransform:"uppercase",letterSpacing:.22},children:[c,(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?9.6:10.2,color:"#4b5563",fontWeight:760},children:"office of academic records"})]})]})})}function R(a){return String(a??"").toLocaleLowerCase("en-GH").replace(/(^|[\s\-'])\p{L}/gu,a=>a.toLocaleUpperCase("en-GH"))}let S=`
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
`,T=[{...(0,e.BF)("classic_formal"),component:function({dataset:a,template:b,settings:c,compact:i=!1,showWatermark:o=!0,pageBreakAfter:p=!0,mobilePreview:q=!0}){let[r,s]=(0,d.useState)(!1),t=(0,d.useRef)(null),u=(0,d.useRef)(null),v=(0,d.useRef)(null),[w,x]=(0,d.useState)(1),[y,z]=(0,d.useState)(1),[A,B]=(0,d.useState)(!1),C=r?y:w,D=Math.round(100*C),E=(0,d.useCallback)(a=>{z(b=>{let c=r?b:w;return Math.min(2,Math.max(.25,Number(("in"===a?1.01*c:c/1.01).toFixed(4))))}),s(!0)},[r,w]),F=(0,d.useCallback)(()=>{null!=u.current&&(window.clearTimeout(u.current),u.current=null),null!=v.current&&(window.clearInterval(v.current),v.current=null)},[]),G=(0,d.useCallback)(a=>{F(),E(a),u.current=window.setTimeout(()=>{v.current=window.setInterval(()=>{E(a)},55)},260)},[E,F]),H=(0,e.tH)({...e.gv,...c||{},templateCode:"classic_formal",layoutKey:"classic_formal",templateName:"Classic Formal",density:c?.density||(i?"compact":"comfortable")},b||null,null),I=(0,g.J7)({dataset:a,template:b||null,settings:H}),J=a?.report,K=a?.header,L=a?.student,M=(0,d.useMemo)(()=>j(J?.subjectResults,H),[J?.subjectResults,H]);if(!a||!J||!K||!I)return(0,f.jsxs)("div",{className:"src-empty-card classic-template-empty",children:[(0,f.jsx)("style",{children:n}),(0,g.p6)(a)]});let{branding:N,studentInfo:O,currentAcademicPeriod:P,nextAcademicPeriod:Q,signatures:R}=I,S=N.primaryColor||"var(--primary-color)",T=N.fontFamily||"Arial, sans-serif",U=N.reportCardBackgroundImage||"",V=N.reportCardWatermark||N.logo||"",W=R.officialSignatureImage||N.reportCardSignatureImage||"",X=O.studentPhoto||"",Y={...(0,g.j1)({settings:H,primaryColor:S,fontFamily:T,compact:i,pageBreakAfter:p}),width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:i?"8mm":"9mm",background:"#fff",color:"#111",border:"1px solid #d8d8d8",boxShadow:"0 18px 50px rgba(15,23,42,.14)"},Z=(0,g.h5)({settings:H,primaryColor:S,compact:i}),$={fontSize:i?10.6:11.3,lineHeight:1.25,padding:i?"5px 3px":"6px 4px",whiteSpace:"normal",overflowWrap:"break-word",verticalAlign:"middle"},_={fontSize:i?11.8:12.6,lineHeight:1.3,padding:i?"5px 4px":"6px 5px",whiteSpace:"normal",overflowWrap:"break-word",verticalAlign:"middle"},aa={...Z.label,fontSize:i?10:10.7,lineHeight:1.25,color:"#404040",opacity:1},ab={...Z.value,fontSize:i?11.8:12.7,lineHeight:1.25,fontWeight:800,color:"#111"},ac={border:"1px solid #bdbdbd",borderRadius:7,padding:i?6:7,minHeight:i?42:46,background:"rgba(255,255,255,0.96)",boxSizing:"border-box"},ad={minHeight:16,marginBottom:3,fontSize:i?11:11.8,lineHeight:1.25,fontWeight:850,color:"#111"},ae=(0,g.ou)(K?.academicStructure?.name,K?.academicStructureName,K?.academicYear?.name,K?.academicYearName,J?.academicStructureName,"string"==typeof K?.academicYear?K.academicYear:""),af=[{key:"studentName",label:"Student Name",value:m(J.studentName),span:2,show:!0},{key:"gender",label:"Gender",value:J.gender||L?.gender||"-",show:!0},{key:"admissionNumber",label:"Admission No.",value:J.admissionNumber||"-",show:!0},{key:"academicStructure",label:"Academic Structure",value:ae||"-",show:!0},{key:"academicPeriod",label:"Academic Period",value:K.academicPeriod?.name||"-",show:!0},{key:"class",label:"Class",value:J.className,show:!0},{key:"attendance",label:"Attendance",value:`${J.attendance?.presentDays||0}/${J.attendance?.totalDays||0}`,show:H.showAttendance}].filter(a=>a.show),ag=H.showNumberOnRoll?[{key:"numberOnRoll",label:H.numberOnRollLabel||"Number On Roll",value:O.numberOnRoll||J.numberOnRoll||J.classSize||a?.numberOnRoll||a?.classSize||"-"}]:[],ah=[{key:"total",label:"Total",value:(0,g.ZV)(J.total,1),show:H.showTotal},{key:"average",label:"Average",value:`${(0,g.ZV)(J.average,1)}%`,show:H.showAverage},{key:"classPosition",label:H.classPositionLabel||"Class Position",value:(0,g.IE)(J.overallPosition),show:H.showClassPosition},{key:"gpa",label:"GPA",value:null!=J.overallGPA?(0,g.ZV)(J.overallGPA,2):"-",show:H.showGPA}].filter(a=>a.show),ai=(0,g.qr)(P,H),aj=(0,g.R8)(Q,H),ak=H.showGeneratedDate?(0,g.kn)(a?.generatedAt):"",al=1+(H.showAssessmentBreakdown?M.length:0)+1+ +!!H.showGrade+ +!!H.showSubjectPosition+ +!!H.showSubjectRemarks,am=(0,f.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page classic-formal-template-page",style:Y,children:[U&&(0,f.jsx)("img",{src:U,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),o&&H.showWatermark&&V&&(0,f.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.038,pointerEvents:"none",zIndex:0},children:(0,f.jsx)("img",{src:V,alt:"Watermark",style:{width:"56%",maxHeight:"56%",objectFit:"contain"}})}),(0,f.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,f.jsx)(h,{header:K,dataset:a,settings:H,title:"Terminal / Periodic Academic Report",compact:i,primaryColor:S,fontFamily:T,studentPhoto:X,showStudentPhoto:!!H.showStudentPhoto}),(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:5,marginTop:8},children:[af.map(a=>(0,f.jsxs)("div",{style:{...ac,gridColumn:a.span?`span ${a.span}`:void 0},children:[(0,f.jsx)("div",{style:aa,children:a.label}),(0,f.jsx)("div",{style:{...ab,overflowWrap:"break-word",whiteSpace:"normal"},children:a.value})]},a.key)),ag.map(a=>(0,f.jsxs)("div",{style:ac,children:[(0,f.jsx)("div",{style:aa,children:a.label}),(0,f.jsx)("div",{style:{...ab,overflowWrap:"break-word",whiteSpace:"normal"},children:a.value})]},a.key))]}),(0,f.jsx)("div",{style:{marginTop:9},children:(0,f.jsxs)("table",{style:{...Z.table,width:"100%"},children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{"data-report-color-block":"true",style:{...Z.th,...$,textAlign:"left",minWidth:i?122:132,borderColor:"#111"},children:"Subject"}),H.showAssessmentBreakdown&&M.map(a=>(0,f.jsxs)("th",{"data-report-color-block":"true",style:{...Z.th,...$,borderColor:"#111"},children:[k(a,H),(0,f.jsxs)("div",{style:{fontSize:i?9.5:10,marginTop:2,opacity:.95},children:["W:",(0,g.ZV)(a.weight,0)]})]},a.assessmentStructureItemId)),(0,f.jsx)("th",{"data-report-color-block":"true",style:{...Z.th,...$,borderColor:"#111"},children:"%"}),H.showGrade&&(0,f.jsx)("th",{"data-report-color-block":"true",style:{...Z.th,...$,borderColor:"#111"},children:"Grade"}),H.showSubjectPosition&&(0,f.jsx)("th",{"data-report-color-block":"true",style:{...Z.th,...$,borderColor:"#111"},children:H.subjectPositionLabel||"Pos."}),H.showSubjectRemarks&&(0,f.jsx)("th",{"data-report-color-block":"true",style:{...Z.th,...$,minWidth:i?85:94,borderColor:"#111"},children:"Remark"})]})}),(0,f.jsxs)("tbody",{children:[J.subjectResults.map(a=>(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{style:{...Z.td,..._,fontSize:i?13.2:14.3,lineHeight:1.28,minWidth:i?122:132,whiteSpace:"normal",overflowWrap:"break-word",fontWeight:850,borderColor:"#9a9a9a"},children:[a.subjectName,H.showTeacherNames&&a.teacherName&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:i?9.8:10.5,lineHeight:1.25,color:"#424242",fontWeight:650},children:m(a.teacherName)})]}),H.showAssessmentBreakdown&&M.map(b=>{let c=a.breakdown.find(a=>a.assessmentStructureItemId===b.assessmentStructureItemId);return(0,f.jsx)("td",{style:{...Z.td,..._,textAlign:"center",borderColor:"#9a9a9a"},children:l(c,H,g.ZV)},b.assessmentStructureItemId)}),(0,f.jsx)("td",{style:{...Z.td,..._,textAlign:"center",fontWeight:850,borderColor:"#9a9a9a"},children:(0,g.l9)(a.percentage,1,"-")}),H.showGrade&&(0,f.jsx)("td",{style:{...Z.td,..._,textAlign:"center",fontWeight:950,borderColor:"#9a9a9a"},children:a.grade}),H.showSubjectPosition&&(0,f.jsx)("td",{style:{...Z.td,..._,textAlign:"center",borderColor:"#9a9a9a"},children:(0,g.IE)(a.subjectPosition)}),H.showSubjectRemarks&&(0,f.jsx)("td",{style:{...Z.td,..._,borderColor:"#9a9a9a"},children:a.remark})]},a.classSubjectId)),!J.subjectResults.length&&(0,f.jsx)("tr",{children:(0,f.jsx)("td",{style:{...Z.td,..._,textAlign:"center",padding:16},colSpan:al,children:"No subject results available for this selected period."})})]})]})}),ah.length>0&&(0,f.jsx)("div",{style:{marginTop:9,display:"grid",gridTemplateColumns:`repeat(${Math.min(ah.length,4)}, minmax(0, 1fr))`,gap:6},children:ah.map(a=>(0,f.jsxs)("div",{style:{border:"1px solid #111",borderRadius:8,padding:i?6:7,textAlign:"center",background:"rgba(255,255,255,0.96)"},children:[(0,f.jsx)("div",{style:aa,children:a.label}),(0,f.jsx)("div",{style:{...ab,fontSize:i?16:17,fontWeight:950},children:a.value})]},a.key))}),(0,f.jsxs)("div",{style:{marginTop:9,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[(0,f.jsxs)("div",{style:{border:"1px solid #111",borderRadius:8,minHeight:50,padding:7},children:[(0,f.jsxs)("div",{style:aa,children:[H.classTeacherLabel,"'s Remark"]}),(0,f.jsx)("div",{style:{marginTop:5,fontSize:i?11.7:12.5,lineHeight:1.35,overflowWrap:"break-word"},children:J.classTeacherRemark||""})]}),(0,f.jsxs)("div",{style:{border:"1px solid #111",borderRadius:8,minHeight:50,padding:7},children:[(0,f.jsxs)("div",{style:aa,children:[H.headTeacherLabel,"'s Remark"]}),(0,f.jsx)("div",{style:{marginTop:5,fontSize:i?11.7:12.5,lineHeight:1.35,overflowWrap:"break-word"},children:J.headTeacherRemark||""})]})]}),(ai||aj||ak)&&(0,f.jsxs)("div",{style:{marginTop:8,display:"grid",gridTemplateColumns:[ai,aj,ak].filter(Boolean).length>=3?"repeat(3, minmax(0, 1fr))":2===[ai,aj,ak].filter(Boolean).length?"repeat(2, minmax(0, 1fr))":"1fr",gap:7},children:[ai&&(0,f.jsxs)("div",{style:{border:"1.5px solid #111",borderRadius:8,padding:"6px 9px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,background:"rgba(255,255,255,0.96)",borderLeft:`6px solid ${S}`},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{style:aa,children:"Current Academic Period"}),(0,f.jsx)("div",{style:{...ab,fontSize:i?11.8:12.6},children:P?.name||K.academicPeriod?.name||"Current Period"})]}),(0,f.jsxs)("div",{style:{textAlign:"right"},children:[(0,f.jsx)("div",{style:aa,children:"Ends"}),(0,f.jsx)("div",{style:{...ab,fontSize:i?12:12.8},children:P?.formattedEndDate||ai.replace(/^.*?:\s*/i,"")})]})]}),aj&&(0,f.jsxs)("div",{style:{border:"1.5px solid #111",borderRadius:8,padding:"6px 9px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,background:"rgba(255,255,255,0.96)",borderLeft:`6px solid ${S}`},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{style:aa,children:"Next Academic Period"}),(0,f.jsx)("div",{style:{...ab,fontSize:i?11.8:12.6},children:Q?.name||"Next Period"})]}),(0,f.jsxs)("div",{style:{textAlign:"right"},children:[(0,f.jsx)("div",{style:aa,children:"Begins"}),(0,f.jsx)("div",{style:{...ab,fontSize:i?12:12.8},children:Q?.formattedStartDate||aj.replace(/^.*?:\s*/i,"")})]})]}),ak&&(0,f.jsxs)("div",{style:{border:"1.5px solid #111",borderRadius:8,padding:"6px 9px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,background:"rgba(255,255,255,0.96)",borderLeft:`6px solid ${S}`},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{style:aa,children:H.generatedDateLabel||"Generated"}),(0,f.jsx)("div",{style:{...ab,fontSize:i?11.8:12.6},children:"Report Card"})]}),(0,f.jsxs)("div",{style:{textAlign:"right"},children:[(0,f.jsx)("div",{style:aa,children:"Date"}),(0,f.jsx)("div",{style:{...ab,fontSize:i?12:12.8},children:ak})]})]})]}),(0,f.jsxs)("div",{style:{marginTop:16,display:"grid",gridTemplateColumns:H.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[(0,f.jsxs)("div",{style:{textAlign:"center"},children:[(0,f.jsx)("div",{style:ad,children:m(R.classTeacherName)}),(0,f.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:i?10.7:11.4,fontWeight:850},children:H.classTeacherLabel})]}),(0,f.jsxs)("div",{style:{textAlign:"center"},children:[W&&(0,f.jsx)("img",{src:W,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,f.jsx)("div",{style:ad,children:m((0,g.ou)(R.headTeacherName,R.principalName))}),(0,f.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:i?10.7:11.4,fontWeight:850},children:H.headTeacherLabel})]}),H.showParentSignature&&(0,f.jsxs)("div",{style:{textAlign:"center"},children:[(0,f.jsx)("div",{style:ad,children:(0,g.ou)(R.parentName,R.guardianName)}),(0,f.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:i?10.7:11.4,fontWeight:850},children:H.parentLabel})]})]}),(0,f.jsxs)("div",{style:{marginTop:9,borderTop:`1.5px solid ${S}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:i?9.2:9.8,lineHeight:1.25,color:"#444"},children:[(0,f.jsxs)("span",{children:["Official academic report generated for ",N.schoolName]}),(0,f.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return q?(0,f.jsxs)("div",{className:`src-preview-shell ${r?"expanded":""}`,children:[(0,f.jsx)("style",{children:n}),(0,f.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:m(J.studentName)}),(0,f.jsxs)("span",{children:[J.className," \xb7"," ",K.academicPeriod?.name||"Academic Period"]})]}),(0,f.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>{E("out")},onPointerDown:()=>G("out"),onPointerUp:F,onPointerCancel:F,onPointerLeave:F,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,f.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{F(),s(!1),z(1),B(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,f.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,f.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>B(a=>!a),"aria-label":"Choose zoom percentage","aria-expanded":A,title:"Choose zoom percentage",children:[(0,f.jsxs)("span",{children:[D,"%"]}),(0,f.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),A&&(0,f.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(a=>(0,f.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{F(),s(!0),z(Number((a/100).toFixed(4))),B(!1)},className:`src-zoom-menu-item ${Math.round(100*C)===a?"active":""}`,children:[a,"%"]},a))})]}),(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>{E("in")},onPointerDown:()=>G("in"),onPointerUp:F,onPointerCancel:F,onPointerLeave:F,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,f.jsx)("div",{ref:t,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":C},children:(0,f.jsx)("div",{className:"src-preview-center",children:(0,f.jsx)("div",{className:"src-preview-scale",children:am})})})]}):am},fileName:"ClassicFormalTemplate.tsx",aliases:["classic","classic_formal","classic_ghana","ghana","formal","default"]},{...(0,e.BF)("modern_clean"),component:function({dataset:a,template:b,settings:c,compact:h=!1,showWatermark:i=!0,pageBreakAfter:m=!0,mobilePreview:n=!0}){let[o,p]=(0,d.useState)(!1),q=(0,d.useRef)(null),r=(0,d.useRef)(null),s=(0,d.useRef)(null),[t,u]=(0,d.useState)(1),[y,z]=(0,d.useState)(1),[A,B]=(0,d.useState)(!1),C=o?y:t,D=Math.round(100*C),E=(0,d.useCallback)(a=>{z(b=>{let c=o?b:t;return Math.min(2,Math.max(.25,Number(("in"===a?1.01*c:c/1.01).toFixed(4))))}),p(!0)},[o,t]),F=(0,d.useCallback)(()=>{null!=r.current&&(window.clearTimeout(r.current),r.current=null),null!=s.current&&(window.clearInterval(s.current),s.current=null)},[]),G=(0,d.useCallback)(a=>{F(),E(a),r.current=window.setTimeout(()=>{s.current=window.setInterval(()=>{E(a)},55)},260)},[E,F]),H=(0,e.tH)({...e.gv,...c||{},templateCode:"modern_clean",layoutKey:"modern_clean",templateName:"Modern Clean",density:c?.density||(h?"compact":"comfortable")},b||null,null),I=(0,g.J7)({dataset:a,template:b||null,settings:H}),J=a?.report,K=a?.header,L=a?.student,M=(0,d.useMemo)(()=>j(J?.subjectResults,H),[J?.subjectResults,H]);if(!a||!J||!K||!I)return(0,f.jsxs)("div",{className:"src-empty-card modern-template-empty",children:[(0,f.jsx)("style",{children:x}),(0,g.p6)(a)]});let{branding:N,studentInfo:O,currentAcademicPeriod:P,nextAcademicPeriod:Q,signatures:R}=I,S=N.primaryColor||"var(--primary-color)",T=N.fontFamily||"Arial, sans-serif",U=N.reportCardBackgroundImage||"",V=N.reportCardWatermark||N.logo||"",W=R.officialSignatureImage||N.reportCardSignatureImage||"",X=O.studentPhoto||"",Y=(0,g.j1)({settings:H,primaryColor:S,fontFamily:T,compact:h,pageBreakAfter:m}),Z=(0,g.h5)({settings:H,primaryColor:S,compact:h}),$=h?"8mm":"9mm",_={...Y,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:$,background:"#fff",color:"#111",border:"1px solid #cbd5e1",borderRadius:22,boxShadow:"0 24px 70px rgba(15,23,42,.14)",overflow:"hidden"},aa={table:{...Z.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:16,border:"1px solid #cfd6e3",fontSize:h?11.3:12},th:{...Z.th,border:"0",borderBottom:"1px solid #111827",background:"#111827",color:"#fff",padding:h?"5px 5px":"6px 6px",fontWeight:950,fontSize:h?10.5:11.2,lineHeight:1.22,whiteSpace:"normal",overflowWrap:"break-word"},td:{...Z.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:h?"4px 5px":"5px 6px",color:"#111827",fontSize:h?11.5:12.4,lineHeight:1.26,whiteSpace:"normal",overflowWrap:"break-word"},label:Z.label,value:Z.value},ab={fontSize:h?9.5:10.2,fontWeight:950,letterSpacing:.25,textTransform:"uppercase",color:"#64748b",lineHeight:1.15},ac={fontSize:h?11.4:12.4,fontWeight:950,color:"#0f172a",lineHeight:1.15,overflowWrap:"anywhere"},ad=[{key:"total",label:"Total",value:(0,g.ZV)(J.total,1),show:H.showTotal},{key:"average",label:"Average",value:`${(0,g.ZV)(J.average,1)}%`,show:H.showAverage},{key:"classPosition",label:H.classPositionLabel||"Class Position",value:(0,g.IE)(J.overallPosition),show:H.showClassPosition},{key:"gpa",label:"GPA",value:null!=J.overallGPA?(0,g.ZV)(J.overallGPA,2):"-",show:H.showGPA}].filter(a=>a.show),ae=(0,g.qr)(P,H),af=(0,g.R8)(Q,H),ag=H.showGeneratedDate?(0,g.kn)(a?.generatedAt):"",ah=1+(H.showAssessmentBreakdown?M.length:0)+1+ +!!H.showGrade+ +!!H.showSubjectPosition+ +!!H.showSubjectRemarks,ai=(0,f.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page modern-clean-template-page",style:_,children:[U&&(0,f.jsx)("img",{src:U,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),i&&H.showWatermark&&V&&(0,f.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,f.jsx)("img",{src:V,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,f.jsx)("div",{"aria-hidden":"true",className:"modern-frame-line modern-frame-outer",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"modern-frame-line modern-frame-inner"}),(0,f.jsx)("div",{"aria-hidden":"true",className:"modern-corner modern-corner-tl",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"modern-corner modern-corner-tr",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"modern-corner modern-corner-bl",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"modern-corner modern-corner-br",style:{borderColor:S}}),(0,f.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,f.jsx)(v,{header:K,dataset:a,settings:H,title:"Terminal / Periodic Academic Report",compact:h,primaryColor:S,fontFamily:T}),(0,f.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:H.showStudentPhoto?"minmax(0, 1fr) 86px":"1fr",gap:8,alignItems:"stretch"},children:[(0,f.jsxs)("div",{style:{border:"1px solid #d9dee8",borderRadius:16,background:"linear-gradient(180deg, #ffffff, #f8fafc)",overflow:"hidden"},children:[(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, .8fr) minmax(0, 1.2fr)",gap:0,borderBottom:"1px solid #d9dee8"},children:[(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0},children:[(0,f.jsx)("div",{style:ab,children:"Student Name"}),(0,f.jsx)("div",{style:{...ac,marginTop:2,fontSize:h?12.6:14.2,overflowWrap:"anywhere"},children:w(J.studentName)})]}),(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #d9dee8"},children:[(0,f.jsx)("div",{style:ab,children:"Gender"}),(0,f.jsx)("div",{style:{...ac,marginTop:2},children:J.gender||L?.gender||"-"})]}),(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #d9dee8"},children:[(0,f.jsx)("div",{style:ab,children:"Admission No."}),(0,f.jsx)("div",{style:{...ac,marginTop:2},children:J.admissionNumber||"-"})]})]}),(0,f.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"},children:[{key:"structure",label:"Academic Structure",value:(0,g.ou)(K?.academicStructure?.name,K?.academicStructureName,"-")},{key:"period",label:"Academic Period",value:(0,g.ou)(K.academicPeriod?.name,K?.academicPeriodName,"-")},{key:"class",label:"Class",value:J.className||"-"},{key:"attendance",label:"Attendance",value:`${J.attendance?.presentDays??0}/${J.attendance?.totalDays??0}`}].filter(a=>"attendance"!==a.key||H.showAttendance).map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:0===b?void 0:"1px solid #d9dee8"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{...ac,marginTop:2,overflowWrap:"anywhere"},children:a.value})]},a.key))}),H.showNumberOnRoll&&(0,f.jsxs)("div",{style:{padding:h?"5px 7px":"6px 9px",borderTop:"1px solid #d9dee8"},children:[(0,f.jsxs)("span",{style:ab,children:[H.numberOnRollLabel||"Number On Roll",": "]}),(0,f.jsx)("span",{style:ac,children:O.numberOnRoll||J.numberOnRoll||J.classSize||a?.numberOnRoll||a?.classSize||"-"})]})]}),H.showStudentPhoto&&(0,f.jsx)("div",{style:{border:"1px solid #d9dee8",borderRadius:16,background:"#fff",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:96},children:X?(0,f.jsx)("img",{src:X,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,f.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]}),(0,f.jsx)("div",{style:{marginTop:8},children:(0,f.jsxs)("table",{style:aa.table,children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,textAlign:"left",minWidth:98},children:"Subject"}),H.showAssessmentBreakdown&&M.map(a=>(0,f.jsxs)("th",{"data-report-color-block":"true",style:aa.th,children:[k(a,H),(H.showAssessmentWeights||H.showAssessmentMaximumScores)&&(0,f.jsxs)("div",{style:{fontSize:7.5,marginTop:2,opacity:.88},children:[H.showAssessmentWeights?`W:${(0,g.ZV)(a.effectiveWeight??a.weight,0)}`:"",H.showAssessmentWeights&&H.showAssessmentMaximumScores?" \xb7 ":"",H.showAssessmentMaximumScores?`M:${(0,g.ZV)(a.maxScore,0)}`:""]})]},a.assessmentStructureItemId)),(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"%"}),H.showGrade&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"Grade"}),H.showSubjectPosition&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:H.subjectPositionLabel||"Pos."}),H.showSubjectRemarks&&(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,minWidth:86},children:"Remark"})]})}),(0,f.jsxs)("tbody",{children:[J.subjectResults.map((a,b)=>(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{style:{...aa.td,fontWeight:950,fontSize:h?12.8:13.7,lineHeight:1.25,overflowWrap:"break-word",background:b%2==0?"#f8fafc":"#ffffff"},children:[a.subjectName,H.showTeacherNames&&a.teacherName&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:10.2,opacity:.72,fontWeight:700},children:w(a.teacherName)})]}),H.showAssessmentBreakdown&&M.map(b=>{let c=a.breakdown.find(a=>a.assessmentStructureItemId===b.assessmentStructureItemId);return(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:l(c,H,g.ZV)},b.assessmentStructureItemId)}),(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",fontWeight:950},children:(0,g.l9)(a.percentage,1,"-")}),H.showGrade&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,f.jsx)("span",{className:"modern-grade-pill",style:{borderColor:S,color:S},children:a.grade})}),H.showSubjectPosition&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,g.IE)(a.subjectPosition)}),H.showSubjectRemarks&&(0,f.jsx)("td",{style:aa.td,children:a.remark})]},a.classSubjectId)),!J.subjectResults.length&&(0,f.jsx)("tr",{children:(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",padding:16},colSpan:ah,children:"No subject results available for this selected period."})})]})]})}),ad.length>0&&(0,f.jsxs)("section",{style:{marginTop:8,borderRadius:18,border:"1px solid #d9dee8",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${ad.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,f.jsx)("div",{"data-report-color-block":"true",style:{background:S}}),ad.map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===b?"0":"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #f8fafc)"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?14:15.8,fontWeight:950,color:"#0f172a"},children:a.value})]},a.key))]}),(0,f.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${H.classTeacherLabel}'s Remark`,value:J.classTeacherRemark||""},{label:`${H.headTeacherLabel}'s Remark`,value:J.headTeacherRemark||""}].map(a=>(0,f.jsxs)("div",{style:{border:"1px solid #d9dee8",borderRadius:18,minHeight:52,padding:h?8:9,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:S}}),(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:h?9.6:10.5,lineHeight:1.32,color:"#111827"},children:a.value})]},a.label))}),(ae||af||ag)&&(0,f.jsxs)("section",{style:{marginTop:8,border:"1px solid #d9dee8",borderRadius:18,padding:h?7:8,background:"#f8fafc",display:"grid",gridTemplateColumns:[ae,af,ag].filter(Boolean).length>=3?"1fr 28px 1fr 28px 1fr":ae&&af?"1fr 28px 1fr":"1fr",gap:6,alignItems:"center"},children:[ae&&(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{style:ab,children:"Current Academic Period"}),(0,f.jsx)("div",{style:ac,children:P?.name||K.academicPeriod?.name||"Current Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:["Ends:"," ",P?.formattedEndDate||ae.replace(/^.*?:\s*/i,"")]})]}),ae&&af&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"modern-timeline-dot",style:{borderColor:S}})}),af&&(0,f.jsxs)("div",{style:{textAlign:ae?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:"Next Academic Period"}),(0,f.jsx)("div",{style:ac,children:Q?.name||"Next Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:["Begins:"," ",Q?.formattedStartDate||af.replace(/^.*?:\s*/i,"")]})]}),ag&&ae&&af&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"modern-timeline-dot",style:{borderColor:S}})}),ag&&(0,f.jsxs)("div",{style:{textAlign:ae||af?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:H.generatedDateLabel||"Generated"}),(0,f.jsx)("div",{style:ac,children:"Report Card"}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:ag})]})]}),(0,f.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:H.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:H.classTeacherLabel,name:w(R.classTeacherName||""),image:"",show:!0},{label:H.headTeacherLabel,name:w((0,g.ou)(R.headTeacherName,R.principalName)),image:W,show:!0},{label:H.parentLabel,name:w((0,g.ou)(R.parentName,R.guardianName)),image:"",show:H.showParentSignature}].filter(a=>a.show).map(a=>(0,f.jsxs)("div",{style:{textAlign:"center"},children:[a.image&&(0,f.jsx)("img",{src:a.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,f.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:h?10.5:11.5,fontWeight:950,color:"#111827"},children:a.name}),(0,f.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:a.label})]},a.label))}),(0,f.jsxs)("footer",{style:{marginTop:8,borderTop:`2px solid ${S}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:7.8,color:"#475569",fontWeight:700},children:[(0,f.jsxs)("span",{children:["Official academic report generated for ",N.schoolName]}),(0,f.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return n?(0,f.jsxs)("div",{className:`src-preview-shell ${o?"expanded":""}`,children:[(0,f.jsx)("style",{children:x}),(0,f.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:w(J.studentName)}),(0,f.jsxs)("span",{children:[J.className," \xb7"," ",K.academicPeriod?.name||"Academic Period"]})]}),(0,f.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>E("out"),onPointerDown:()=>G("out"),onPointerUp:F,onPointerCancel:F,onPointerLeave:F,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,f.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{F(),p(!1),z(1),B(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,f.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,f.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>B(a=>!a),"aria-label":"Choose zoom percentage","aria-expanded":A,title:"Choose zoom percentage",children:[(0,f.jsxs)("span",{children:[D,"%"]}),(0,f.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),A&&(0,f.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(a=>(0,f.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{F(),p(!0),z(Number((a/100).toFixed(4))),B(!1)},className:`src-zoom-menu-item ${Math.round(100*C)===a?"active":""}`,children:[a,"%"]},a))})]}),(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>E("in"),onPointerDown:()=>G("in"),onPointerUp:F,onPointerCancel:F,onPointerLeave:F,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,f.jsx)("div",{ref:q,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":C},children:(0,f.jsx)("div",{className:"src-preview-center",children:(0,f.jsx)("div",{className:"src-preview-scale",children:ai})})})]}):ai},fileName:"ModernCleanTemplate.tsx",aliases:["modern","clean","modern_clean","premium_clean"]},{...(0,e.BF)("compact_print"),component:function({dataset:a,template:b,settings:c,compact:h=!0,showWatermark:i=!0,pageBreakAfter:m=!0,mobilePreview:n=!0}){let[o,p]=(0,d.useState)(!1),q=(0,d.useRef)(null),v=(0,d.useRef)(null),w=(0,d.useRef)(null),[x,y]=(0,d.useState)(1),[z,A]=(0,d.useState)(1),[B,C]=(0,d.useState)(!1),D=o?z:x,E=Math.round(100*D),F=(0,d.useCallback)(a=>{A(b=>{let c=o?b:x;return Math.min(2,Math.max(.25,Number(("in"===a?1.01*c:c/1.01).toFixed(4))))}),p(!0)},[o,x]),G=(0,d.useCallback)(()=>{null!=v.current&&(window.clearTimeout(v.current),v.current=null),null!=w.current&&(window.clearInterval(w.current),w.current=null)},[]),H=(0,d.useCallback)(a=>{G(),F(a),v.current=window.setTimeout(()=>{w.current=window.setInterval(()=>{F(a)},55)},260)},[F,G]),I=(0,e.tH)({...e.gv,...c||{},templateCode:"compact_print",layoutKey:"compact_print",templateName:"Compact Print",density:"compact"},b||null,null),J=(0,g.J7)({dataset:a,template:b||null,settings:I}),K=a?.report,L=a?.header,M=a?.student,N=(0,d.useMemo)(()=>j(K?.subjectResults,I),[K?.subjectResults,I]);if(!a||!K||!L||!J)return(0,f.jsxs)("div",{className:"src-empty-card compact-template-empty",children:[(0,f.jsx)("style",{children:u}),(0,g.p6)(a)]});let{branding:O,studentInfo:P,currentAcademicPeriod:Q,nextAcademicPeriod:R,signatures:S}=J,T=O.primaryColor||"var(--primary-color)",U=(0,g.B_)(T),V=O.fontFamily||"Arial, sans-serif",W=O.reportCardBackgroundImage||"",X=O.reportCardWatermark||O.logo||"",Y=S.officialSignatureImage||O.reportCardSignatureImage||"",Z=P.studentPhoto||"",$={fontSize:9.7,lineHeight:1.2,textTransform:"uppercase",letterSpacing:.35,fontWeight:900,color:"#4b5563"},_={marginTop:1,fontSize:12,lineHeight:1.24,fontWeight:900,color:"#111827"},aa={border:"1px solid #c8ccd3",padding:"5px 6px",minHeight:39,background:"rgba(255,255,255,.97)",boxSizing:"border-box"},ab={border:"1px solid #111827",padding:"5px 4px",fontSize:10.5,lineHeight:1.25,whiteSpace:"normal",background:T,color:U,textAlign:"center",fontWeight:950},ac={border:"1px solid #7d8590",padding:"5px 4px",fontSize:11.6,overflowWrap:"break-word",whiteSpace:"normal",verticalAlign:"middle",lineHeight:1.25},ad=(0,g.ou)(L?.academicStructure?.name,L?.academicStructureName,L?.academicYear?.name,L?.academicYearName,K?.academicStructureName,"string"==typeof L?.academicYear?L.academicYear:""),ae=[{key:"studentName",label:"Student Name",value:s(K.studentName),span:2,show:!0},{key:"gender",label:"Gender",value:K.gender||M?.gender||"-",show:!0},{key:"admissionNumber",label:"Admission No.",value:K.admissionNumber||"-",show:!0},{key:"academicStructure",label:"Academic Structure",value:ad||"-",show:!0},{key:"academicPeriod",label:"Academic Period",value:L.academicPeriod?.name||"-",show:!0},{key:"class",label:"Class",value:K.className||"-",show:!0},{key:"attendance",label:"Attendance",value:`${K.attendance?.presentDays||0}/${K.attendance?.totalDays||0}`,show:I.showAttendance}].filter(a=>a.show),af=I.showNumberOnRoll?[{key:"numberOnRoll",label:I.numberOnRollLabel||"Number On Roll",value:P.numberOnRoll||K.numberOnRoll||K.classSize||a?.numberOnRoll||"-",show:!0}]:[],ag=[{key:"total",label:"Total",value:(0,g.ZV)(K.total,1),show:I.showTotal},{key:"average",label:"Average",value:`${(0,g.ZV)(K.average,1)}%`,show:I.showAverage},{key:"classPosition",label:I.classPositionLabel||"Class Position",value:(0,g.IE)(K.overallPosition),show:I.showClassPosition},{key:"gpa",label:"GPA",value:null!=K.overallGPA?(0,g.ZV)(K.overallGPA,2):"-",show:I.showGPA}].filter(a=>a.show),ah=(0,g.qr)(Q,I),ai=(0,g.R8)(R,I),aj=I.showGeneratedDate?(0,g.kn)(a?.generatedAt):"",ak=1+(I.showAssessmentBreakdown?N.length:0)+1+ +!!I.showGrade+ +!!I.showSubjectPosition+ +!!I.showSubjectRemarks,al=(0,f.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page compact-print-template-page",style:{width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:"6.8mm",background:"#fff",color:"#111827",border:"1px solid #d8d8d8",boxShadow:"0 18px 50px rgba(15,23,42,.14)",boxSizing:"border-box",fontFamily:V,position:"relative",overflow:"hidden",pageBreakAfter:!1===m?"auto":"always"},children:[W&&(0,f.jsx)("img",{src:W,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.018,zIndex:0}}),i&&I.showWatermark&&X&&(0,f.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.03,pointerEvents:"none",zIndex:0},children:(0,f.jsx)("img",{src:X,alt:"Watermark",style:{width:"50%",maxHeight:"50%",objectFit:"contain"}})}),(0,f.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,f.jsx)(r,{header:L,dataset:a,settings:I,title:"Compact Academic Report",primaryColor:T,fontFamily:V,compact:!0,studentPhoto:Z,showStudentPhoto:!!I.showStudentPhoto}),(0,f.jsxs)("section",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:4,marginTop:6},children:[ae.map(a=>(0,f.jsxs)("div",{style:{...aa,gridColumn:a.span?`span ${a.span}`:void 0},children:[(0,f.jsx)("div",{style:$,children:a.label}),(0,f.jsx)("div",{style:{..._,whiteSpace:"normal",overflowWrap:"break-word"},children:a.value})]},a.key)),af.map(a=>(0,f.jsxs)("div",{style:aa,children:[(0,f.jsx)("div",{style:$,children:a.label}),(0,f.jsx)("div",{style:{..._,whiteSpace:"normal",overflowWrap:"break-word"},children:a.value})]},a.key))]}),ag.length>0&&(0,f.jsx)("section",{style:{marginTop:5,display:"grid",gridTemplateColumns:`repeat(${Math.min(ag.length,4)}, minmax(0, 1fr))`,gap:4},children:ag.map(a=>(0,f.jsxs)("div",{style:{border:"1.2px solid #111827",borderLeft:`5px solid ${T}`,padding:"4px 5px",background:"rgba(255,255,255,.98)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:6},children:[(0,f.jsx)("span",{style:$,children:a.label}),(0,f.jsx)("strong",{style:{color:"#111827",fontSize:11.2,lineHeight:1},children:a.value})]},a.key))}),(0,f.jsx)("section",{style:{marginTop:5},children:(0,f.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:11.3,lineHeight:1.25},children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{"data-report-color-block":"true",style:{...ab,textAlign:"left",minWidth:88},children:"Subject"}),I.showAssessmentBreakdown&&N.map(a=>(0,f.jsxs)("th",{"data-report-color-block":"true",style:ab,children:[k(a,I),(0,f.jsxs)("div",{style:{fontSize:9,marginTop:1,opacity:.95},children:["W:",(0,g.ZV)(a.weight,0)]})]},a.assessmentStructureItemId)),(0,f.jsx)("th",{"data-report-color-block":"true",style:ab,children:"%"}),I.showGrade&&(0,f.jsx)("th",{"data-report-color-block":"true",style:ab,children:"Grade"}),I.showSubjectPosition&&(0,f.jsx)("th",{"data-report-color-block":"true",style:ab,children:I.subjectPositionLabel||"Pos."}),I.showSubjectRemarks&&(0,f.jsx)("th",{"data-report-color-block":"true",style:{...ab,minWidth:76},children:"Remark"})]})}),(0,f.jsxs)("tbody",{children:[K.subjectResults.map(a=>(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{style:{...ac,fontWeight:900,color:"#111827",fontSize:12.9,minWidth:118,whiteSpace:"normal",overflowWrap:"break-word"},children:[a.subjectName,I.showTeacherNames&&a.teacherName&&(0,f.jsx)("div",{style:{marginTop:1,fontSize:10,color:"#4b5563",fontWeight:700},children:s(a.teacherName)})]}),I.showAssessmentBreakdown&&N.map(b=>{let c=a.breakdown.find(a=>a.assessmentStructureItemId===b.assessmentStructureItemId);return(0,f.jsx)("td",{style:{...ac,textAlign:"center"},children:l(c,I,g.ZV)},b.assessmentStructureItemId)}),(0,f.jsx)("td",{style:{...ac,textAlign:"center",fontWeight:900},children:(0,g.l9)(a.percentage,1,"-")}),I.showGrade&&(0,f.jsx)("td",{style:{...ac,textAlign:"center",fontWeight:1e3},children:a.grade}),I.showSubjectPosition&&(0,f.jsx)("td",{style:{...ac,textAlign:"center"},children:(0,g.IE)(a.subjectPosition)}),I.showSubjectRemarks&&(0,f.jsx)("td",{style:ac,children:a.remark})]},a.classSubjectId)),!K.subjectResults.length&&(0,f.jsx)("tr",{children:(0,f.jsx)("td",{style:{...ac,textAlign:"center",padding:12},colSpan:ak,children:"No subject results available for this selected period."})})]})]})}),(0,f.jsxs)("section",{style:{marginTop:5,display:"grid",gridTemplateColumns:"1fr 1fr",gap:5},children:[(0,f.jsxs)("div",{style:{border:"1px solid #111827",minHeight:42,padding:5,background:"rgba(255,255,255,.97)"},children:[(0,f.jsxs)("div",{style:$,children:[I.classTeacherLabel,"'s Remark"]}),(0,f.jsx)("div",{style:{marginTop:3,fontSize:11,lineHeight:1.28,color:"#111827"},children:K.classTeacherRemark||""})]}),(0,f.jsxs)("div",{style:{border:"1px solid #111827",minHeight:42,padding:5,background:"rgba(255,255,255,.97)"},children:[(0,f.jsxs)("div",{style:$,children:[I.headTeacherLabel,"'s Remark"]}),(0,f.jsx)("div",{style:{marginTop:3,fontSize:11,lineHeight:1.28,color:"#111827"},children:K.headTeacherRemark||""})]})]}),(ah||ai||aj)&&(0,f.jsxs)("section",{style:{marginTop:5,display:"grid",gridTemplateColumns:[ah,ai,aj].filter(Boolean).length>=3?"repeat(3,minmax(0,1fr))":2===[ah,ai,aj].filter(Boolean).length?"repeat(2,minmax(0,1fr))":"1fr",gap:5},children:[ah&&(0,f.jsxs)("div",{style:{border:"1px solid #111827",borderLeft:`5px solid ${T}`,padding:"4px 6px",background:"rgba(255,255,255,.97)"},children:[(0,f.jsx)("div",{style:$,children:"This Academic Period"}),(0,f.jsxs)("div",{style:{..._,display:"flex",justifyContent:"space-between",gap:7},children:[(0,f.jsx)("span",{children:Q?.name||L.academicPeriod?.name||"Current Period"}),(0,f.jsx)("span",{children:Q?.formattedEndDate||ah.replace(/^.*?:\s*/i,"")})]})]}),ai&&(0,f.jsxs)("div",{style:{border:"1px solid #111827",borderLeft:`5px solid ${T}`,padding:"4px 6px",background:"rgba(255,255,255,.97)"},children:[(0,f.jsx)("div",{style:$,children:"Next Academic Period"}),(0,f.jsxs)("div",{style:{..._,display:"flex",justifyContent:"space-between",gap:7},children:[(0,f.jsx)("span",{children:R?.name||"Next Period"}),(0,f.jsx)("span",{children:R?.formattedStartDate||ai.replace(/^.*?:\s*/i,"")})]})]}),aj&&(0,f.jsxs)("div",{style:{border:"1px solid #111827",borderLeft:`5px solid ${T}`,padding:"4px 6px",background:"rgba(255,255,255,.97)"},children:[(0,f.jsx)("div",{style:$,children:I.generatedDateLabel||"Generated"}),(0,f.jsxs)("div",{style:{..._,display:"flex",justifyContent:"space-between",gap:7},children:[(0,f.jsx)("span",{children:"Report Card"}),(0,f.jsx)("span",{children:aj})]})]})]}),(0,f.jsxs)("section",{style:{marginTop:13,display:"grid",gridTemplateColumns:I.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:16,alignItems:"end"},children:[(0,f.jsx)(t,{name:s(S.classTeacherName),label:I.classTeacherLabel}),(0,f.jsxs)("div",{style:{textAlign:"center"},children:[Y&&(0,f.jsx)("img",{src:Y,alt:"Official signature",style:{height:23,objectFit:"contain",marginBottom:1}}),(0,f.jsx)(t,{name:s((0,g.ou)(S.headTeacherName,S.principalName)),label:I.headTeacherLabel,inline:!0})]}),I.showParentSignature&&(0,f.jsx)(t,{name:s((0,g.ou)(S.parentName,S.guardianName)),label:I.parentLabel})]}),(0,f.jsxs)("footer",{style:{marginTop:6,borderTop:`1.2px solid ${T}`,paddingTop:3,display:"flex",justifyContent:"space-between",gap:10,fontSize:9.2,color:"#4b5563",fontWeight:700},children:[(0,f.jsxs)("span",{children:["Official academic report generated for ",O.schoolName]}),(0,f.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return n?(0,f.jsxs)("div",{className:`src-preview-shell ${o?"expanded":""}`,children:[(0,f.jsx)("style",{children:u}),(0,f.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:s(K.studentName)}),(0,f.jsxs)("span",{children:[K.className," \xb7"," ",L.academicPeriod?.name||"Academic Period"]})]}),(0,f.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>F("out"),onPointerDown:()=>H("out"),onPointerUp:G,onPointerCancel:G,onPointerLeave:G,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,f.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{G(),p(!1),A(1),C(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,f.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,f.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>C(a=>!a),"aria-label":"Choose zoom percentage","aria-expanded":B,title:"Choose zoom percentage",children:[(0,f.jsxs)("span",{children:[E,"%"]}),(0,f.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),B&&(0,f.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(a=>(0,f.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{G(),p(!0),A(Number((a/100).toFixed(4))),C(!1)},className:`src-zoom-menu-item ${Math.round(100*D)===a?"active":""}`,children:[a,"%"]},a))})]}),(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>F("in"),onPointerDown:()=>H("in"),onPointerUp:G,onPointerCancel:G,onPointerLeave:G,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,f.jsx)("div",{ref:q,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":D},children:(0,f.jsx)("div",{className:"src-preview-center",children:(0,f.jsx)("div",{className:"src-preview-scale",children:al})})})]}):al},fileName:"CompactPrintTemplate.tsx",aliases:["compact","print","compact_print","one_page","space_saving"]},{...(0,e.BF)("bordered_traditional"),component:function({dataset:a,template:b,settings:c,compact:h=!1,showWatermark:i=!0,pageBreakAfter:m=!0,mobilePreview:n=!0}){let[r,s]=(0,d.useState)(!1),t=(0,d.useRef)(null),u=(0,d.useRef)(null),v=(0,d.useRef)(null),[w,x]=(0,d.useState)(1),[y,z]=(0,d.useState)(1),[A,B]=(0,d.useState)(!1),C=r?y:w,D=Math.round(100*C),E=(0,d.useCallback)(a=>{z(b=>{let c=r?b:w;return Math.min(2,Math.max(.25,Number(("in"===a?1.01*c:c/1.01).toFixed(4))))}),s(!0)},[r,w]),F=(0,d.useCallback)(()=>{null!=u.current&&(window.clearTimeout(u.current),u.current=null),null!=v.current&&(window.clearInterval(v.current),v.current=null)},[]),G=(0,d.useCallback)(a=>{F(),E(a),u.current=window.setTimeout(()=>{v.current=window.setInterval(()=>{E(a)},55)},260)},[E,F]),H=(0,e.tH)({...e.gv,...c||{},templateCode:"bordered_traditional",layoutKey:"bordered_traditional",templateName:"Bordered Traditional",density:c?.density||(h?"compact":"comfortable")},b||null,null),I=(0,g.J7)({dataset:a,template:b||null,settings:H}),J=a?.report,K=a?.header,L=a?.student,M=(0,d.useMemo)(()=>j(J?.subjectResults,H),[J?.subjectResults,H]);if(!a||!J||!K||!I)return(0,f.jsxs)("div",{className:"src-empty-card bordered-template-empty",children:[(0,f.jsx)("style",{children:q}),(0,g.p6)(a)]});let{branding:N,studentInfo:O,currentAcademicPeriod:P,nextAcademicPeriod:Q,signatures:R}=I,S=N.primaryColor||"var(--primary-color)",T=N.fontFamily||"Arial, sans-serif",U=N.reportCardBackgroundImage||"",V=N.reportCardWatermark||N.logo||"",W=R.officialSignatureImage||N.reportCardSignatureImage||"",X=O.studentPhoto||"",Y=(0,g.j1)({settings:H,primaryColor:S,fontFamily:T,compact:h,pageBreakAfter:m}),Z=(0,g.h5)({settings:H,primaryColor:S,compact:h}),$=h?"8mm":"9mm",_={...Y,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:$,background:"#fffdf7",color:"#111",border:"2px double #111827",borderRadius:4,boxShadow:"0 20px 54px rgba(15,23,42,.13)",overflow:"hidden"},aa={table:{...Z.table,width:"100%",borderCollapse:"collapse",borderSpacing:0,overflow:"hidden",borderRadius:4,border:"1.5px solid #111827",fontSize:h?11:12.2},th:{...Z.th,border:"1px solid #111827",borderBottom:"2px double #111827",background:"#f3efe4",color:"#111827",padding:h?"5px 4px":"6px 4px",fontSize:h?10.1:10.9,lineHeight:1.25,whiteSpace:"normal",overflowWrap:"break-word",fontWeight:950},td:{...Z.td,border:"1px solid #111827",borderBottom:"2px double #111827",padding:h?"4px 4px":"5px 5px",fontSize:h?11.2:12.3,lineHeight:1.25,overflowWrap:"break-word",whiteSpace:"normal",color:"#111827"},label:Z.label,value:Z.value},ab={fontSize:h?9.3:10,fontWeight:950,letterSpacing:.25,textTransform:"uppercase",color:"#64748b",lineHeight:1.15},ac={fontSize:h?11.8:12.7,fontWeight:950,color:"#0f172a",lineHeight:1.15,overflowWrap:"anywhere"},ad=(0,g.ou)(K?.academicStructure?.name,K?.academicStructureName,K?.academicYear?.name,K?.academicYearName,J?.academicStructureName,"string"==typeof K?.academicYear?K.academicYear:""),ae=[{key:"studentName",label:"Student Name",value:p(J.studentName),span:2,show:!0},{key:"gender",label:"Gender",value:J.gender||L?.gender||"-",show:!0},{key:"admissionNumber",label:"Admission No.",value:J.admissionNumber||"-",show:!0},{key:"academicStructure",label:"Academic Structure",value:ad||"-",show:!0},{key:"academicPeriod",label:"Academic Period",value:K.academicPeriod?.name||"-",show:!0},{key:"class",label:"Class",value:J.className||"-",show:!0},{key:"attendance",label:"Attendance",value:`${J.attendance?.presentDays||0}/${J.attendance?.totalDays||0}`,show:H.showAttendance}].filter(a=>a.show),af=H.showNumberOnRoll?[{key:"numberOnRoll",label:H.numberOnRollLabel||"Number On Roll",value:O.numberOnRoll||J.numberOnRoll||J.classSize||a?.numberOnRoll||a?.classSize||"-",show:!0}]:[],ag=[{key:"total",label:"Total",value:(0,g.ZV)(J.total,1),show:H.showTotal},{key:"average",label:"Average",value:`${(0,g.ZV)(J.average,1)}%`,show:H.showAverage},{key:"classPosition",label:H.classPositionLabel||"Class Position",value:(0,g.IE)(J.overallPosition),show:H.showClassPosition},{key:"gpa",label:"GPA",value:null!=J.overallGPA?(0,g.ZV)(J.overallGPA,2):"-",show:H.showGPA}].filter(a=>a.show),ah=(0,g.qr)(P,H),ai=(0,g.R8)(Q,H),aj=H.showGeneratedDate?(0,g.kn)(a?.generatedAt):"",ak=1+(H.showAssessmentBreakdown?M.length:0)+1+ +!!H.showGrade+ +!!H.showSubjectPosition+ +!!H.showSubjectRemarks,al=(0,f.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page bordered-traditional-template-page",style:_,children:[(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:10,border:`1px solid ${S}`,pointerEvents:"none",zIndex:0}}),(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:16,top:16,width:32,height:32,borderTop:`3px solid ${S}`,borderLeft:`3px solid ${S}`,zIndex:0}}),(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",right:16,top:16,width:32,height:32,borderTop:`3px solid ${S}`,borderRight:`3px solid ${S}`,zIndex:0}}),(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:16,bottom:16,width:32,height:32,borderBottom:`3px solid ${S}`,borderLeft:`3px solid ${S}`,zIndex:0}}),(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",right:16,bottom:16,width:32,height:32,borderBottom:`3px solid ${S}`,borderRight:`3px solid ${S}`,zIndex:0}}),U&&(0,f.jsx)("img",{src:U,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),i&&H.showWatermark&&V&&(0,f.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,f.jsx)("img",{src:V,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,f.jsx)("div",{"aria-hidden":"true",className:"traditional-frame-line traditional-frame-outer",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"traditional-frame-line traditional-frame-inner"}),(0,f.jsx)("div",{"aria-hidden":"true",className:"traditional-corner traditional-corner-tl",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"traditional-corner traditional-corner-tr",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"traditional-corner traditional-corner-bl",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"traditional-corner traditional-corner-br",style:{borderColor:S}}),(0,f.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,f.jsx)(o,{header:K,dataset:a,settings:H,title:"Official Academic Report",compact:h,primaryColor:S,fontFamily:T}),(0,f.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:H.showStudentPhoto?"minmax(0, 1fr) 100px":"1fr",gap:8,alignItems:"stretch"},children:[(0,f.jsx)("div",{style:{borderRadius:4,border:"1px solid #111827",background:"#fffdf7",overflow:"hidden"},children:(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))"},children:[ae.map((a,b)=>(0,f.jsxs)("div",{style:{minWidth:0,gridColumn:a.span?`span ${a.span}`:void 0,padding:h?"7px 8px":"8px 9px",borderRight:2!==b&&6!==b?"1px solid #111827":void 0,borderBottom:b<3?"1px solid #111827":void 0},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{...ac,marginTop:3,whiteSpace:"normal",overflowWrap:"break-word"},children:a.value})]},a.key)),af.map(a=>(0,f.jsxs)("div",{style:{gridColumn:"1 / -1",padding:h?"7px 8px":"8px 9px",borderTop:"1px solid #111827"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{...ac,marginTop:3},children:a.value})]},a.key))]})}),H.showStudentPhoto&&(0,f.jsx)("div",{style:{border:"2px double #111827",borderRadius:3,background:"#fffaf0",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:92},children:X?(0,f.jsx)("img",{src:X,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,f.jsx)("span",{style:{fontSize:11,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]}),(0,f.jsx)("div",{style:{marginTop:8},children:(0,f.jsxs)("table",{style:aa.table,children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,textAlign:"left",minWidth:98},children:"Subject"}),H.showAssessmentBreakdown&&M.map(a=>(0,f.jsxs)("th",{"data-report-color-block":"true",style:aa.th,children:[k(a,H),(H.showAssessmentWeights||H.showAssessmentMaximumScores)&&(0,f.jsxs)("div",{style:{fontSize:h?9.2:9.7,marginTop:2,opacity:.88},children:[H.showAssessmentWeights?`W:${(0,g.ZV)(a.effectiveWeight??a.weight,0)}`:"",H.showAssessmentWeights&&H.showAssessmentMaximumScores?" \xb7 ":"",H.showAssessmentMaximumScores?`M:${(0,g.ZV)(a.maxScore,0)}`:""]})]},a.assessmentStructureItemId)),(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"%"}),H.showGrade&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"Grade"}),H.showSubjectPosition&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:H.subjectPositionLabel||"Pos."}),H.showSubjectRemarks&&(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,minWidth:86},children:"Remark"})]})}),(0,f.jsxs)("tbody",{children:[J.subjectResults.map((a,b)=>(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{style:{...aa.td,fontWeight:950,fontSize:h?12.5:13.9,lineHeight:1.25,minWidth:h?118:128,whiteSpace:"normal",overflowWrap:"break-word",background:b%2==0?"#fffaf0":"#fffdf7"},children:[a.subjectName,H.showTeacherNames&&a.teacherName&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?10:10.8,opacity:.85,fontWeight:700},children:p(a.teacherName)})]}),H.showAssessmentBreakdown&&M.map(b=>{let c=a.breakdown.find(a=>a.assessmentStructureItemId===b.assessmentStructureItemId);return(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:l(c,H,g.ZV)},b.assessmentStructureItemId)}),(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",fontWeight:950},children:(0,g.l9)(a.percentage,1,"-")}),H.showGrade&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,f.jsx)("span",{className:"traditional-grade-seal",style:{borderColor:S,color:S},children:a.grade})}),H.showSubjectPosition&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,g.IE)(a.subjectPosition)}),H.showSubjectRemarks&&(0,f.jsx)("td",{style:aa.td,children:a.remark})]},a.classSubjectId)),!J.subjectResults.length&&(0,f.jsx)("tr",{children:(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",padding:16},colSpan:ak,children:"No subject results available for this selected period."})})]})]})}),ag.length>0&&(0,f.jsxs)("section",{style:{marginTop:8,borderRadius:4,border:"1px solid #111827",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${ag.length}, minmax(0, 1fr))`,background:"#fffdf7"},children:[(0,f.jsx)("div",{"data-report-color-block":"true",style:{background:S}}),ag.map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===b?"0":"1px solid #111827",background:"#fffdf7"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?14:15.8,fontWeight:950,color:"#0f172a"},children:a.value})]},a.key))]}),(0,f.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${H.classTeacherLabel}'s Remark`,value:J.classTeacherRemark||""},{label:`${H.headTeacherLabel}'s Remark`,value:J.headTeacherRemark||""}].map(a=>(0,f.jsxs)("div",{style:{border:"1px solid #111827",borderRadius:4,minHeight:52,padding:h?8:9,background:"#fffdf7",position:"relative",overflow:"hidden"},children:[(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:S}}),(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:h?9.6:10.5,lineHeight:1.32,color:"#111827"},children:a.value})]},a.label))}),(ah||ai||aj)&&(0,f.jsxs)("section",{style:{marginTop:8,border:"1px solid #111827",borderRadius:4,padding:h?7:8,background:"#fffaf0",display:"grid",gridTemplateColumns:[ah,ai,aj].filter(Boolean).length>=3?"1fr 28px 1fr 28px 1fr":ah&&ai?"1fr 28px 1fr":"1fr",gap:6,alignItems:"center"},children:[ah&&(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{style:ab,children:"Current Academic Period"}),(0,f.jsx)("div",{style:ac,children:P?.name||K.academicPeriod?.name||"Current Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?10:10.8,fontWeight:900,color:S},children:["Ends:"," ",P?.formattedEndDate||ah.replace(/^.*?:\s*/i,"")]})]}),ah&&ai&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"traditional-timeline-seal",style:{borderColor:S}})}),ai&&(0,f.jsxs)("div",{style:{textAlign:ah?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:"Next Academic Period"}),(0,f.jsx)("div",{style:ac,children:Q?.name||"Next Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?10:10.8,fontWeight:900,color:S},children:["Begins:"," ",Q?.formattedStartDate||ai.replace(/^.*?:\s*/i,"")]})]}),aj&&ah&&ai&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"traditional-timeline-seal",style:{borderColor:S}})}),aj&&(0,f.jsxs)("div",{style:{textAlign:"right"},children:[(0,f.jsx)("div",{style:ab,children:H.generatedDateLabel||"Generated"}),(0,f.jsx)("div",{style:ac,children:"Report Card"}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?10:10.8,fontWeight:900,color:S},children:aj})]})]}),(0,f.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:H.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:H.classTeacherLabel,name:p(R.classTeacherName),image:"",show:!0},{label:H.headTeacherLabel,name:p((0,g.ou)(R.headTeacherName,R.principalName)),image:W,show:!0},{label:H.parentLabel,name:p((0,g.ou)(R.parentName,R.guardianName)),image:"",show:H.showParentSignature}].filter(a=>a.show).map(a=>(0,f.jsxs)("div",{style:{textAlign:"center"},children:[a.image&&(0,f.jsx)("img",{src:a.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,f.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:h?10.6:11.6,fontWeight:950,color:"#111827"},children:a.name}),(0,f.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:a.label})]},a.label))}),(0,f.jsxs)("footer",{style:{marginTop:8,borderTop:`2px solid ${S}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:9.3,color:"#475569",fontWeight:700},children:[(0,f.jsxs)("span",{children:["Official academic report generated for ",N.schoolName]}),(0,f.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return n?(0,f.jsxs)("div",{className:`src-preview-shell ${r?"expanded":""}`,children:[(0,f.jsx)("style",{children:q}),(0,f.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:p(J.studentName)}),(0,f.jsxs)("span",{children:[J.className," \xb7"," ",K.academicPeriod?.name||"Academic Period"]})]}),(0,f.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>E("out"),onPointerDown:()=>G("out"),onPointerUp:F,onPointerCancel:F,onPointerLeave:F,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,f.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{F(),s(!1),z(1),B(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,f.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,f.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>B(a=>!a),"aria-label":"Choose zoom percentage","aria-expanded":A,title:"Choose zoom percentage",children:[(0,f.jsxs)("span",{children:[D,"%"]}),(0,f.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),A&&(0,f.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(a=>(0,f.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{F(),s(!0),z(Number((a/100).toFixed(4))),B(!1)},className:`src-zoom-menu-item ${Math.round(100*C)===a?"active":""}`,children:[a,"%"]},a))})]}),(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>E("in"),onPointerDown:()=>G("in"),onPointerUp:F,onPointerCancel:F,onPointerLeave:F,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,f.jsx)("div",{ref:t,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":C},children:(0,f.jsx)("div",{className:"src-preview-center",children:(0,f.jsx)("div",{className:"src-preview-scale",children:al})})})]}):al},fileName:"BorderedTraditionalTemplate.tsx",aliases:["bordered","traditional","bordered_traditional","boxed"]},{...(0,e.BF)("letterhead_premium"),component:function({dataset:a,template:b,settings:c,compact:h=!1,showWatermark:i=!0,pageBreakAfter:m=!0,mobilePreview:n=!0}){let[o,p]=(0,d.useState)(!1),q=(0,d.useRef)(null),r=(0,d.useRef)(null),s=(0,d.useRef)(null),[t,u]=(0,d.useState)(1),[v,w]=(0,d.useState)(1),[x,y]=(0,d.useState)(!1),z=o?v:t,A=Math.round(100*z),E=(0,d.useCallback)(a=>{w(b=>{let c=o?b:t;return Math.min(2,Math.max(.25,Number(("in"===a?1.01*c:c/1.01).toFixed(4))))}),p(!0)},[o,t]),F=(0,d.useCallback)(()=>{null!=r.current&&(window.clearTimeout(r.current),r.current=null),null!=s.current&&(window.clearInterval(s.current),s.current=null)},[]),G=(0,d.useCallback)(a=>{F(),E(a),r.current=window.setTimeout(()=>{s.current=window.setInterval(()=>{E(a)},55)},260)},[E,F]),H=(0,e.tH)({...e.gv,...c||{},templateCode:"letterhead_premium",layoutKey:"letterhead_premium",templateName:"LetterHead Premium",density:c?.density||(h?"compact":"comfortable")},b||null,null),I=(0,g.J7)({dataset:a,template:b||null,settings:H}),J=a?.report,K=a?.header,L=a?.student,M=(0,d.useMemo)(()=>j(J?.subjectResults,H),[J?.subjectResults,H]);if(!a||!J||!K||!I)return(0,f.jsxs)("div",{className:"src-empty-card letterhead-template-empty",children:[(0,f.jsx)("style",{children:D}),(0,g.p6)(a)]});let{branding:N,studentInfo:O,currentAcademicPeriod:P,nextAcademicPeriod:Q,signatures:R}=I,S=N.primaryColor||"var(--primary-color)",T=N.fontFamily||"Arial, sans-serif",U=N.reportCardBackgroundImage||"",V=N.reportCardWatermark||N.logo||"",W=R.officialSignatureImage||N.reportCardSignatureImage||"",X=O.studentPhoto||"",Y=(0,g.j1)({settings:H,primaryColor:S,fontFamily:T,compact:h,pageBreakAfter:m}),Z=(0,g.h5)({settings:H,primaryColor:S,compact:h}),$=h?"8mm":"9mm",_={...Y,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:$,background:"linear-gradient(180deg, #fffdf8, #ffffff 34%, #fffdf8)",color:"#111",border:"1px solid #b7a981",borderRadius:10,boxShadow:"0 24px 70px rgba(15,23,42,.13)",overflow:"hidden"},aa={table:{...Z.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:8,border:"1px double #9f8f62",fontSize:h?11.3:12},th:{...Z.th,border:"0",borderBottom:"1px solid #111827",background:`linear-gradient(90deg, ${S}, #111827)`,color:"#fff",padding:h?"5px 5px":"6px 6px",fontWeight:950,fontSize:h?10.5:11.2,lineHeight:1.22,whiteSpace:"normal",overflowWrap:"break-word"},td:{...Z.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:h?"4px 5px":"5px 6px",color:"#111827",fontSize:h?11.5:12.4,lineHeight:1.26,whiteSpace:"normal",overflowWrap:"break-word"},label:Z.label,value:Z.value},ab={fontSize:h?9.5:10.2,fontWeight:950,letterSpacing:.25,textTransform:"uppercase",color:"#64748b",lineHeight:1.15},ac={fontSize:h?11.4:12.4,fontWeight:950,color:"#0f172a",lineHeight:1.15,overflowWrap:"anywhere"},ad=[{key:"total",label:"Total",value:(0,g.ZV)(J.total,1),show:H.showTotal},{key:"average",label:"Average",value:`${(0,g.ZV)(J.average,1)}%`,show:H.showAverage},{key:"classPosition",label:H.classPositionLabel||"Class Position",value:(0,g.IE)(J.overallPosition),show:H.showClassPosition},{key:"gpa",label:"GPA",value:null!=J.overallGPA?(0,g.ZV)(J.overallGPA,2):"-",show:H.showGPA}].filter(a=>a.show),ae=(0,g.qr)(P,H),af=(0,g.R8)(Q,H),ag=H.showGeneratedDate?(0,g.kn)(a?.generatedAt):"",ah=1+(H.showAssessmentBreakdown?M.length:0)+1+ +!!H.showGrade+ +!!H.showSubjectPosition+ +!!H.showSubjectRemarks,ai=(0,f.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page letterhead-premium-template-page",style:_,children:[U&&(0,f.jsx)("img",{src:U,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),i&&H.showWatermark&&V&&(0,f.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,f.jsx)("img",{src:V,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,f.jsx)("div",{"aria-hidden":"true",className:"letterhead-frame-line letterhead-frame-outer",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"letterhead-frame-line letterhead-frame-inner"}),(0,f.jsx)("div",{"aria-hidden":"true",className:"letterhead-corner letterhead-corner-tl",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"letterhead-corner letterhead-corner-tr",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"letterhead-corner letterhead-corner-bl",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"letterhead-corner letterhead-corner-br",style:{borderColor:S}}),(0,f.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,f.jsx)(B,{header:K,dataset:a,settings:H,title:"Terminal / Periodic Academic Report",compact:h,primaryColor:S,fontFamily:T}),(0,f.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:H.showStudentPhoto?"minmax(0, 1fr) 86px":"1fr",gap:8,alignItems:"stretch"},children:[(0,f.jsxs)("div",{style:{border:"1px solid #d8c79c",borderRadius:7,background:"linear-gradient(180deg, #fffdf8, #ffffff)",overflow:"hidden"},children:[(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, .8fr) minmax(0, 1.2fr)",gap:0,borderBottom:"1px solid #d8c79c"},children:[(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0},children:[(0,f.jsx)("div",{style:ab,children:"Student Name"}),(0,f.jsx)("div",{style:{...ac,marginTop:2,fontSize:h?12.6:14.2,overflowWrap:"anywhere"},children:C(J.studentName)})]}),(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #d8c79c"},children:[(0,f.jsx)("div",{style:ab,children:"Gender"}),(0,f.jsx)("div",{style:{...ac,marginTop:2},children:J.gender||L?.gender||"-"})]}),(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #d8c79c"},children:[(0,f.jsx)("div",{style:ab,children:"Admission No."}),(0,f.jsx)("div",{style:{...ac,marginTop:2},children:J.admissionNumber||"-"})]})]}),(0,f.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"},children:[{key:"structure",label:"Academic Structure",value:(0,g.ou)(K?.academicStructure?.name,K?.academicStructureName,"-")},{key:"period",label:"Academic Period",value:(0,g.ou)(K.academicPeriod?.name,K?.academicPeriodName,"-")},{key:"class",label:"Class",value:J.className||"-"},{key:"attendance",label:"Attendance",value:`${J.attendance?.presentDays??0}/${J.attendance?.totalDays??0}`}].filter(a=>"attendance"!==a.key||H.showAttendance).map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:0===b?void 0:"1px solid #d8c79c"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{...ac,marginTop:2,overflowWrap:"anywhere"},children:a.value})]},a.key))}),H.showNumberOnRoll&&(0,f.jsxs)("div",{style:{padding:h?"5px 7px":"6px 9px",borderTop:"1px solid #d8c79c"},children:[(0,f.jsxs)("span",{style:ab,children:[H.numberOnRollLabel||"Number On Roll",": "]}),(0,f.jsx)("span",{style:ac,children:O.numberOnRoll||J.numberOnRoll||J.classSize||a?.numberOnRoll||a?.classSize||"-"})]})]}),H.showStudentPhoto&&(0,f.jsx)("div",{style:{border:"1px solid #d8c79c",borderRadius:7,background:"#fff",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:96},children:X?(0,f.jsx)("img",{src:X,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,f.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]}),(0,f.jsx)("div",{style:{marginTop:8},children:(0,f.jsxs)("table",{style:aa.table,children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,textAlign:"left",minWidth:98},children:"Subject"}),H.showAssessmentBreakdown&&M.map(a=>(0,f.jsxs)("th",{"data-report-color-block":"true",style:aa.th,children:[k(a,H),(H.showAssessmentWeights||H.showAssessmentMaximumScores)&&(0,f.jsxs)("div",{style:{fontSize:7.5,marginTop:2,opacity:.88},children:[H.showAssessmentWeights?`W:${(0,g.ZV)(a.effectiveWeight??a.weight,0)}`:"",H.showAssessmentWeights&&H.showAssessmentMaximumScores?" \xb7 ":"",H.showAssessmentMaximumScores?`M:${(0,g.ZV)(a.maxScore,0)}`:""]})]},a.assessmentStructureItemId)),(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"%"}),H.showGrade&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"Grade"}),H.showSubjectPosition&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:H.subjectPositionLabel||"Pos."}),H.showSubjectRemarks&&(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,minWidth:86},children:"Remark"})]})}),(0,f.jsxs)("tbody",{children:[J.subjectResults.map((a,b)=>(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{style:{...aa.td,fontWeight:950,fontSize:h?12.8:13.7,lineHeight:1.25,overflowWrap:"break-word",background:b%2==0?"#f8fafc":"#ffffff"},children:[a.subjectName,H.showTeacherNames&&a.teacherName&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:10.2,opacity:.72,fontWeight:700},children:C(a.teacherName)})]}),H.showAssessmentBreakdown&&M.map(b=>{let c=a.breakdown.find(a=>a.assessmentStructureItemId===b.assessmentStructureItemId);return(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:l(c,H,g.ZV)},b.assessmentStructureItemId)}),(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",fontWeight:950},children:(0,g.l9)(a.percentage,1,"-")}),H.showGrade&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,f.jsx)("span",{className:"letterhead-grade-seal",style:{borderColor:S,color:S},children:a.grade})}),H.showSubjectPosition&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,g.IE)(a.subjectPosition)}),H.showSubjectRemarks&&(0,f.jsx)("td",{style:aa.td,children:a.remark})]},a.classSubjectId)),!J.subjectResults.length&&(0,f.jsx)("tr",{children:(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",padding:16},colSpan:ah,children:"No subject results available for this selected period."})})]})]})}),ad.length>0&&(0,f.jsxs)("section",{style:{marginTop:8,borderRadius:8,border:"1px double #b7a981",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${ad.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,f.jsx)("div",{"data-report-color-block":"true",style:{background:S}}),ad.map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===b?"0":"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #f8fafc)"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?14:15.8,fontWeight:950,color:"#0f172a"},children:a.value})]},a.key))]}),(0,f.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${H.classTeacherLabel}'s Remark`,value:J.classTeacherRemark||""},{label:`${H.headTeacherLabel}'s Remark`,value:J.headTeacherRemark||""}].map(a=>(0,f.jsxs)("div",{style:{border:"1px double #b7a981",borderRadius:8,minHeight:52,padding:h?8:9,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:S}}),(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:h?9.6:10.5,lineHeight:1.32,color:"#111827"},children:a.value})]},a.label))}),(ae||af||ag)&&(0,f.jsxs)("section",{style:{marginTop:8,border:"1px double #b7a981",borderRadius:8,padding:h?7:8,background:"#f8fafc",display:"grid",gridTemplateColumns:[ae,af,ag].filter(Boolean).length>=3?"1fr 28px 1fr 28px 1fr":ae&&af?"1fr 28px 1fr":"1fr",gap:6,alignItems:"center"},children:[ae&&(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{style:ab,children:"Current Academic Period"}),(0,f.jsx)("div",{style:ac,children:P?.name||K.academicPeriod?.name||"Current Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:["Ends:"," ",P?.formattedEndDate||ae.replace(/^.*?:\s*/i,"")]})]}),ae&&af&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"letterhead-timeline-medallion",style:{borderColor:S}})}),af&&(0,f.jsxs)("div",{style:{textAlign:ae?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:"Next Academic Period"}),(0,f.jsx)("div",{style:ac,children:Q?.name||"Next Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:["Begins:"," ",Q?.formattedStartDate||af.replace(/^.*?:\s*/i,"")]})]}),ag&&ae&&af&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"letterhead-timeline-medallion",style:{borderColor:S}})}),ag&&(0,f.jsxs)("div",{style:{textAlign:ae||af?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:H.generatedDateLabel||"Generated"}),(0,f.jsx)("div",{style:ac,children:"Report Card"}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:ag})]})]}),(0,f.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:H.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:H.classTeacherLabel,name:C(R.classTeacherName||""),image:"",show:!0},{label:H.headTeacherLabel,name:C((0,g.ou)(R.headTeacherName,R.principalName)),image:W,show:!0},{label:H.parentLabel,name:C((0,g.ou)(R.parentName,R.guardianName)),image:"",show:H.showParentSignature}].filter(a=>a.show).map(a=>(0,f.jsxs)("div",{style:{textAlign:"center"},children:[a.image&&(0,f.jsx)("img",{src:a.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,f.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:h?10.5:11.5,fontWeight:950,color:"#111827"},children:a.name}),(0,f.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:a.label})]},a.label))}),(0,f.jsxs)("footer",{style:{marginTop:8,borderTop:`1.5px double ${S}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:7.8,color:"#475569",fontWeight:700},children:[(0,f.jsxs)("span",{children:["Official premium academic record • ",N.schoolName]}),(0,f.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return n?(0,f.jsxs)("div",{className:`src-preview-shell ${o?"expanded":""}`,children:[(0,f.jsx)("style",{children:D}),(0,f.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:C(J.studentName)}),(0,f.jsxs)("span",{children:[J.className," \xb7"," ",K.academicPeriod?.name||"Academic Period"]})]}),(0,f.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>E("out"),onPointerDown:()=>G("out"),onPointerUp:F,onPointerCancel:F,onPointerLeave:F,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,f.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{F(),p(!1),w(1),y(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,f.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,f.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>y(a=>!a),"aria-label":"Choose zoom percentage","aria-expanded":x,title:"Choose zoom percentage",children:[(0,f.jsxs)("span",{children:[A,"%"]}),(0,f.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),x&&(0,f.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(a=>(0,f.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{F(),p(!0),w(Number((a/100).toFixed(4))),y(!1)},className:`src-zoom-menu-item ${Math.round(100*z)===a?"active":""}`,children:[a,"%"]},a))})]}),(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>E("in"),onPointerDown:()=>G("in"),onPointerUp:F,onPointerCancel:F,onPointerLeave:F,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,f.jsx)("div",{ref:q,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":z},children:(0,f.jsx)("div",{className:"src-preview-center",children:(0,f.jsx)("div",{className:"src-preview-scale",children:ai})})})]}):ai},fileName:"LetterHeadPremiumTemplate.tsx",aliases:["letterhead","premium","letterhead_premium","institutional"]},{...(0,e.BF)("side_profile"),component:function({dataset:a,template:b,settings:c,compact:h=!1,showWatermark:i=!0,pageBreakAfter:m=!0,mobilePreview:n=!0}){let[o,p]=(0,d.useState)(!1),q=(0,d.useRef)(null),r=(0,d.useRef)(null),s=(0,d.useRef)(null),[t,u]=(0,d.useState)(1),[v,w]=(0,d.useState)(1),[x,B]=(0,d.useState)(!1),C=o?v:t,D=Math.round(100*C),E=(0,d.useCallback)(a=>{w(b=>{let c=o?b:t;return Math.min(2,Math.max(.25,Number(("in"===a?1.01*c:c/1.01).toFixed(4))))}),p(!0)},[o,t]),F=(0,d.useCallback)(()=>{null!=r.current&&(window.clearTimeout(r.current),r.current=null),null!=s.current&&(window.clearInterval(s.current),s.current=null)},[]),G=(0,d.useCallback)(a=>{F(),E(a),r.current=window.setTimeout(()=>{s.current=window.setInterval(()=>{E(a)},55)},260)},[E,F]),H=(0,e.tH)({...e.gv,...c||{},templateCode:"side_profile",layoutKey:"side_profile",templateName:"Side Profile",density:c?.density||(h?"compact":"comfortable")},b||null,null),I=(0,g.J7)({dataset:a,template:b||null,settings:H}),J=a?.report,K=a?.header,L=a?.student,M=(0,d.useMemo)(()=>j(J?.subjectResults,H),[J?.subjectResults,H]);if(!a||!J||!K||!I)return(0,f.jsxs)("div",{className:"src-empty-card side-profile-template-empty",children:[(0,f.jsx)("style",{children:A}),(0,g.p6)(a)]});let{branding:N,studentInfo:O,currentAcademicPeriod:P,nextAcademicPeriod:Q,signatures:R}=I,S=N.primaryColor||"var(--primary-color)",T=N.fontFamily||"Arial, sans-serif",U=N.reportCardBackgroundImage||"",V=N.reportCardWatermark||N.logo||"",W=R.officialSignatureImage||N.reportCardSignatureImage||"",X=O.studentPhoto||"",Y=(0,g.j1)({settings:H,primaryColor:S,fontFamily:T,compact:h,pageBreakAfter:m}),Z=(0,g.h5)({settings:H,primaryColor:S,compact:h}),$=h?"7mm":"8mm",_=h?"42mm":"46mm",aa={...Y,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:$,background:"#fff",color:"#111",border:"1px solid #cbd5e1",borderRadius:20,boxShadow:"0 24px 70px rgba(15,23,42,.14)",overflow:"hidden"},ab={table:{...Z.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:14,border:"1px solid #cfd6e3",fontSize:h?8.2:8.9},th:{...Z.th,border:"0",borderBottom:"1px solid #0f172a",background:"#0f172a",color:"#fff",padding:h?"4.5px 4px":"5.5px 5px",fontWeight:950,fontSize:h?10.5:11.2,lineHeight:1.22,whiteSpace:"normal",overflowWrap:"break-word"},td:{...Z.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:h?"3.8px 4px":"4.8px 5px",color:"#111827",fontSize:h?11.5:12.4,lineHeight:1.26,whiteSpace:"normal",overflowWrap:"break-word"},label:Z.label,value:Z.value},ac={fontSize:h?9.5:10.2,fontWeight:950,letterSpacing:.25,textTransform:"uppercase",color:"#64748b",lineHeight:1.15},ad={fontSize:h?11.4:12.4,fontWeight:950,color:"#0f172a",lineHeight:1.15,overflowWrap:"anywhere"},ae=H.showGeneratedDate?(0,g.kn)(a?.generatedAt):"",af=[{key:"total",label:"Total",value:(0,g.ZV)(J.total,1),show:H.showTotal},{key:"average",label:"Average",value:`${(0,g.ZV)(J.average,1)}%`,show:H.showAverage},{key:"classPosition",label:H.classPositionLabel||"Class Position",value:(0,g.IE)(J.overallPosition),show:H.showClassPosition},{key:"gpa",label:"GPA",value:null!=J.overallGPA?(0,g.ZV)(J.overallGPA,2):"-",show:H.showGPA}].filter(a=>a.show),ag=(0,g.qr)(P,H),ah=(0,g.R8)(Q,H),ai=1+(H.showAssessmentBreakdown?M.length:0)+1+ +!!H.showGrade+ +!!H.showSubjectPosition+ +!!H.showSubjectRemarks,aj=(0,f.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page side-profile-template-page",style:aa,children:[U&&(0,f.jsx)("img",{src:U,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.022,zIndex:0}}),i&&H.showWatermark&&V&&(0,f.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.028,pointerEvents:"none",zIndex:0},children:(0,f.jsx)("img",{src:V,alt:"Watermark",style:{width:"48%",maxHeight:"48%",objectFit:"contain"}})}),(0,f.jsx)("div",{"aria-hidden":"true",className:"side-profile-frame-line side-profile-frame-outer",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"side-profile-frame-line side-profile-frame-inner"}),(0,f.jsxs)("div",{style:{position:"relative",zIndex:1,display:"grid",gridTemplateColumns:`${_} minmax(0, 1fr)`,gap:h?8:10,minHeight:"calc(297mm - 16mm)"},children:[(0,f.jsxs)("aside",{className:"side-profile-sidebar","data-report-color-block":"true",style:{background:`linear-gradient(180deg, ${S}, #0f172a 72%, #020617)`,borderRadius:18,overflow:"hidden",color:"#fff",display:"flex",flexDirection:"column",minHeight:"100%",boxShadow:"inset 0 0 0 1px rgba(255,255,255,.14), 0 14px 32px rgba(15,23,42,.18)"},children:[(0,f.jsx)("div",{style:{padding:h?10:12,borderBottom:"1px solid rgba(255,255,255,.16)"},children:(0,f.jsx)("div",{style:{width:h?42:48,height:h?42:48,borderRadius:16,background:"rgba(255,255,255,.95)",border:"1px solid rgba(255,255,255,.5)",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:N.logo?(0,f.jsx)("img",{src:N.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4,boxSizing:"border-box"}}):(0,f.jsxs)("span",{style:{color:S,fontSize:7,fontWeight:950,textAlign:"center",lineHeight:1.05},children:["SCHOOL",(0,f.jsx)("br",{}),"LOGO"]})})}),(0,f.jsxs)("div",{style:{padding:h?"10px 10px 8px":"12px 12px 9px",textAlign:"center"},children:[H.showStudentPhoto&&(0,f.jsx)("div",{style:{width:h?82:92,height:h?98:108,margin:"0 auto",borderRadius:18,border:"3px solid rgba(255,255,255,.82)",background:"rgba(255,255,255,.12)",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 16px 28px rgba(0,0,0,.22)"},children:X?(0,f.jsx)("img",{src:X,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,f.jsx)("span",{style:{fontSize:9,fontWeight:950,color:"rgba(255,255,255,.78)"},children:"PHOTO"})}),(0,f.jsx)("div",{style:{marginTop:4,fontSize:h?7.4:8,fontWeight:850,color:"rgba(255,255,255,.76)",textTransform:"uppercase"},children:"Student Profile"})]}),(0,f.jsxs)("div",{style:{marginTop:"auto",padding:h?10:12},children:[ae&&(0,f.jsxs)("div",{style:{borderRadius:14,border:"1px solid rgba(255,255,255,.22)",background:"rgba(255,255,255,.12)",padding:h?"7px 8px":"8px 9px",marginBottom:8},children:[(0,f.jsx)("div",{style:{fontSize:h?9:9.6,fontWeight:950,letterSpacing:.25,textTransform:"uppercase",color:"rgba(255,255,255,.72)",lineHeight:1.15},children:H.generatedDateLabel||"Generated"}),(0,f.jsx)("div",{style:{marginTop:1,fontSize:h?10:11,fontWeight:900,color:"#fff",lineHeight:1.18,overflowWrap:"anywhere",fontSize:h?8.8:9.8},children:"Report Card"}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?8:8.8,fontWeight:950,color:"#fff"},children:ae})]}),(0,f.jsx)("div",{style:{borderTop:"1px solid rgba(255,255,255,.22)",paddingTop:7,fontSize:h?6.8:7.4,lineHeight:1.25,color:"rgba(255,255,255,.72)",fontWeight:760},children:"Official academic report generated by Eleeveon Schools."})]})]}),(0,f.jsxs)("main",{style:{minWidth:0},children:[(0,f.jsx)(y,{header:K,dataset:a,settings:H,title:"Terminal / Periodic Academic Report",compact:h,primaryColor:S,fontFamily:T}),(0,f.jsxs)("section",{style:{marginTop:8,border:"1px solid #d9dee8",borderRadius:12,overflow:"hidden",background:"#fff"},children:[(0,f.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, .8fr) minmax(0, 1.2fr)",borderBottom:"1px solid #d9dee8"},children:[{key:"name",label:"Student Name",value:z(J.studentName)},{key:"gender",label:"Gender",value:J.gender||L?.gender||"-"},{key:"admission",label:"Admission No.",value:J.admissionNumber||"-"}].map((a,b)=>(0,f.jsxs)("div",{style:{padding:"7px 6px",minWidth:0,borderLeft:b?"1px solid #d9dee8":void 0},children:[(0,f.jsx)("div",{style:ac,children:a.label}),(0,f.jsx)("div",{style:{...ad,fontSize:"name"===a.key?h?12.2:13.5:void 0,marginTop:2},children:a.value})]},a.key))}),(0,f.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.35fr) repeat(3, minmax(0, 1fr))"},children:[{key:"structure",label:"Academic Structure",value:(0,g.ou)(K?.academicStructure?.name,K?.academicStructureName,"-")},{key:"period",label:"Academic Period",value:K.academicPeriod?.name||"-"},{key:"class",label:"Class",value:J.className||"-"},{key:"attendance",label:"Attendance",value:`${J.attendance?.presentDays??0}/${J.attendance?.totalDays??0}`}].filter(a=>"attendance"!==a.key||H.showAttendance).map((a,b)=>(0,f.jsxs)("div",{style:{padding:"7px 6px",minWidth:0,borderLeft:b?"1px solid #d9dee8":void 0},children:[(0,f.jsx)("div",{style:ac,children:a.label}),(0,f.jsx)("div",{style:{...ad,marginTop:2},children:a.value})]},a.key))}),H.showNumberOnRoll&&(0,f.jsxs)("div",{style:{padding:"6px 8px",borderTop:"1px solid #d9dee8"},children:[(0,f.jsxs)("span",{style:ac,children:[H.numberOnRollLabel||"Number On Roll",": "]}),(0,f.jsx)("span",{style:ad,children:O.numberOnRoll||J.numberOnRoll||J.classSize||a?.numberOnRoll||a?.classSize||"-"})]})]}),(0,f.jsx)("div",{style:{marginTop:8},children:(0,f.jsxs)("table",{style:ab.table,children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{"data-report-color-block":"true",style:{...ab.th,textAlign:"left",minWidth:92},children:"Subject"}),H.showAssessmentBreakdown&&M.map(a=>(0,f.jsxs)("th",{"data-report-color-block":"true",style:ab.th,children:[k(a,H),(0,f.jsxs)("div",{style:{fontSize:7.2,marginTop:2,opacity:.88},children:["W:",(0,g.ZV)(a.weight,0)]})]},a.assessmentStructureItemId)),(0,f.jsx)("th",{"data-report-color-block":"true",style:ab.th,children:"%"}),H.showGrade&&(0,f.jsx)("th",{"data-report-color-block":"true",style:ab.th,children:"Grade"}),H.showSubjectPosition&&(0,f.jsx)("th",{"data-report-color-block":"true",style:ab.th,children:H.subjectPositionLabel||"Pos."}),H.showSubjectRemarks&&(0,f.jsx)("th",{"data-report-color-block":"true",style:{...ab.th,minWidth:78},children:"Remark"})]})}),(0,f.jsxs)("tbody",{children:[J.subjectResults.map((a,b)=>(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{style:{...ab.td,fontWeight:950,fontSize:h?12.8:13.7,lineHeight:1.25,overflowWrap:"break-word",background:b%2==0?"#f8fafc":"#ffffff"},children:[a.subjectName,H.showTeacherNames&&a.teacherName&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:10,opacity:.72,fontWeight:700},children:z(a.teacherName)})]}),H.showAssessmentBreakdown&&M.map(b=>{let c=a.breakdown.find(a=>a.assessmentStructureItemId===b.assessmentStructureItemId);return(0,f.jsx)("td",{style:{...ab.td,textAlign:"center"},children:l(c,H,g.ZV)},b.assessmentStructureItemId)}),(0,f.jsx)("td",{style:{...ab.td,textAlign:"center",fontWeight:950},children:(0,g.l9)(a.percentage,1,"-")}),H.showGrade&&(0,f.jsx)("td",{style:{...ab.td,textAlign:"center"},children:(0,f.jsx)("span",{className:"side-profile-grade-pill",style:{borderColor:S,color:S},children:a.grade})}),H.showSubjectPosition&&(0,f.jsx)("td",{style:{...ab.td,textAlign:"center"},children:(0,g.IE)(a.subjectPosition)}),H.showSubjectRemarks&&(0,f.jsx)("td",{style:ab.td,children:a.remark})]},a.classSubjectId)),!J.subjectResults.length&&(0,f.jsx)("tr",{children:(0,f.jsx)("td",{style:{...ab.td,textAlign:"center",padding:16},colSpan:ai,children:"No subject results available for this selected period."})})]})]})}),af.length>0&&(0,f.jsxs)("section",{style:{marginTop:8,borderRadius:16,border:"1px solid #d9dee8",overflow:"hidden",display:"grid",gridTemplateColumns:`12px repeat(${af.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,f.jsx)("div",{"data-report-color-block":"true",style:{background:S}}),af.map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 8px",textAlign:"center",borderLeft:0===b?"0":"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #f8fafc)"},children:[(0,f.jsx)("div",{style:ac,children:a.label}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?12.8:14.5,fontWeight:950,color:"#0f172a"},children:a.value})]},a.key))]}),(0,f.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${H.classTeacherLabel}'s Remark`,value:J.classTeacherRemark||""},{label:`${H.headTeacherLabel}'s Remark`,value:J.headTeacherRemark||""}].map(a=>(0,f.jsxs)("div",{style:{border:"1px solid #d9dee8",borderRadius:16,minHeight:48,padding:h?7:8,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:S}}),(0,f.jsx)("div",{style:ac,children:a.label}),(0,f.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:h?9:9.8,lineHeight:1.32,color:"#111827"},children:a.value})]},a.label))}),(ag||ah)&&(0,f.jsxs)("section",{style:{marginTop:8,border:"1px solid #d9dee8",borderRadius:16,padding:h?6:7,background:"#f8fafc",display:"grid",gridTemplateColumns:ag&&ah?"1fr 24px 1fr":"1fr",gap:6,alignItems:"center"},children:[ag&&(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{style:ac,children:"Current Academic Period"}),(0,f.jsx)("div",{style:ad,children:P?.name||K.academicPeriod?.name||"Current Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?8.2:9,fontWeight:900,color:S},children:["Ends:"," ",P?.formattedEndDate||ag.replace(/^.*?:\s*/i,"")]})]}),ag&&ah&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"side-profile-timeline-dot",style:{borderColor:S}})}),ah&&(0,f.jsxs)("div",{style:{textAlign:ag?"right":"left"},children:[(0,f.jsx)("div",{style:ac,children:"Next Academic Period"}),(0,f.jsx)("div",{style:ad,children:Q?.name||"Next Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?8.2:9,fontWeight:900,color:S},children:["Begins:"," ",Q?.formattedStartDate||ah.replace(/^.*?:\s*/i,"")]})]})]}),(0,f.jsx)("section",{style:{marginTop:13,display:"grid",gridTemplateColumns:H.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:16,alignItems:"end"},children:[{label:H.classTeacherLabel,name:z(R.classTeacherName||""),image:"",show:!0},{label:H.headTeacherLabel,name:z((0,g.ou)(R.headTeacherName,R.principalName)),image:W,show:!0},{label:H.parentLabel,name:z((0,g.ou)(R.parentName,R.guardianName)),image:"",show:H.showParentSignature}].filter(a=>a.show).map(a=>(0,f.jsxs)("div",{style:{textAlign:"center"},children:[a.image&&(0,f.jsx)("img",{src:a.image,alt:"Official signature",style:{height:28,objectFit:"contain",marginBottom:2}}),(0,f.jsx)("div",{style:{minHeight:15,marginBottom:3,fontSize:h?8.6:9.5,fontWeight:950,color:"#111827"},children:a.name}),(0,f.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:h?8.5:9.3,fontWeight:900},children:a.label})]},a.label))}),(0,f.jsxs)("footer",{style:{marginTop:8,borderTop:`2px solid ${S}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:7.3,color:"#475569",fontWeight:700},children:[(0,f.jsxs)("span",{children:["Official academic report • ",N.schoolName]}),(0,f.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]})]});return n?(0,f.jsxs)("div",{className:`src-preview-shell ${o?"expanded":""}`,children:[(0,f.jsx)("style",{children:A}),(0,f.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:z(J.studentName)}),(0,f.jsxs)("span",{children:[J.className," \xb7"," ",K.academicPeriod?.name||"Academic Period"]})]}),(0,f.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>E("out"),onPointerDown:()=>G("out"),onPointerUp:F,onPointerCancel:F,onPointerLeave:F,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,f.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{F(),p(!1),w(1),B(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,f.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,f.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>B(a=>!a),"aria-label":"Choose zoom percentage","aria-expanded":x,title:"Choose zoom percentage",children:[(0,f.jsxs)("span",{children:[D,"%"]}),(0,f.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),x&&(0,f.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(a=>(0,f.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{F(),p(!0),w(Number((a/100).toFixed(4))),B(!1)},className:`src-zoom-menu-item ${Math.round(100*C)===a?"active":""}`,children:[a,"%"]},a))})]}),(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>E("in"),onPointerDown:()=>G("in"),onPointerUp:F,onPointerCancel:F,onPointerLeave:F,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,f.jsx)("div",{ref:q,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":C},children:(0,f.jsx)("div",{className:"src-preview-center",children:(0,f.jsx)("div",{className:"src-preview-scale",children:aj})})})]}):aj},fileName:"SideProfileTemplate.tsx",aliases:["side","profile","side_profile","identity","student_profile"]},{...(0,e.BF)("cambridge"),component:function({dataset:a,template:b,settings:c,compact:h=!1,showWatermark:i=!0,pageBreakAfter:m=!0,mobilePreview:n=!0}){let[o,p]=(0,d.useState)(!1),q=(0,d.useRef)(null),r=(0,d.useRef)(null),s=(0,d.useRef)(null),[t,u]=(0,d.useState)(1),[v,w]=(0,d.useState)(1),[x,y]=(0,d.useState)(!1),z=o?v:t,A=Math.round(100*z),B=(0,d.useCallback)(a=>{w(b=>{let c=o?b:t;return Math.min(2,Math.max(.25,Number(("in"===a?1.01*c:c/1.01).toFixed(4))))}),p(!0)},[o,t]),C=(0,d.useCallback)(()=>{null!=r.current&&(window.clearTimeout(r.current),r.current=null),null!=s.current&&(window.clearInterval(s.current),s.current=null)},[]),D=(0,d.useCallback)(a=>{C(),B(a),r.current=window.setTimeout(()=>{s.current=window.setInterval(()=>{B(a)},55)},260)},[B,C]),H=(0,e.tH)({...e.gv,...c||{},templateCode:"cambridge",layoutKey:"cambridge",templateName:"Cambridge",density:c?.density||(h?"compact":"comfortable")},b||null,null),I=(0,g.J7)({dataset:a,template:b||null,settings:H}),J=a?.report,K=a?.header,L=a?.student,M=(0,d.useMemo)(()=>j(J?.subjectResults,H),[J?.subjectResults,H]);if(!a||!J||!K||!I)return(0,f.jsxs)("div",{className:"src-empty-card cambridge-template-empty",children:[(0,f.jsx)("style",{children:G}),(0,g.p6)(a)]});let{branding:N,studentInfo:O,currentAcademicPeriod:P,nextAcademicPeriod:Q,signatures:R}=I,S=N.primaryColor||"var(--primary-color)",T=N.fontFamily||"Arial, sans-serif",U=N.reportCardBackgroundImage||"",V=N.reportCardWatermark||N.logo||"",W=R.officialSignatureImage||N.reportCardSignatureImage||"",X=O.studentPhoto||"",Y=(0,g.j1)({settings:H,primaryColor:S,fontFamily:T,compact:h,pageBreakAfter:m}),Z=(0,g.h5)({settings:H,primaryColor:S,compact:h}),$=h?"8mm":"9mm",_={...Y,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:$,background:"linear-gradient(180deg, #ffffff, #f8fbff 42%, #ffffff)",color:"#0f172a",border:"1px solid #9fb3d1",borderRadius:12,boxShadow:"0 24px 70px rgba(15,23,42,.13)",overflow:"hidden"},aa={table:{...Z.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:6,border:"1px solid #9fb3d1",fontSize:h?11:12.2},th:{...Z.th,border:"0",borderBottom:"1px solid #111827",background:"#0f2f5f",color:"#fff",padding:h?"5px 4px":"6px 4px",fontSize:h?10.1:10.9,lineHeight:1.25,whiteSpace:"normal",overflowWrap:"break-word",fontWeight:950},td:{...Z.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:h?"4px 4px":"5px 5px",fontSize:h?11.2:12.3,lineHeight:1.25,overflowWrap:"break-word",whiteSpace:"normal",color:"#111827"},label:Z.label,value:Z.value},ab={fontSize:h?9.3:10,fontWeight:950,letterSpacing:.25,textTransform:"uppercase",color:"#64748b",lineHeight:1.15},ac={fontSize:h?11.8:12.7,fontWeight:950,color:"#0f172a",lineHeight:1.15,overflowWrap:"anywhere"},ad=(0,g.ou)(K?.academicStructure?.name,K?.academicStructureName,K?.academicYear?.name,K?.academicYearName,J?.academicStructureName,"string"==typeof K?.academicYear?K.academicYear:""),ae=[{key:"studentName",label:"Student Name",value:F(J.studentName),span:2,show:!0},{key:"gender",label:"Gender",value:J.gender||L?.gender||"-",show:!0},{key:"admissionNumber",label:"Admission No.",value:J.admissionNumber||"-",show:!0},{key:"academicStructure",label:"Academic Structure",value:ad||"-",show:!0},{key:"academicPeriod",label:"Academic Period",value:K.academicPeriod?.name||"-",show:!0},{key:"class",label:"Class",value:J.className||"-",show:!0},{key:"attendance",label:"Attendance",value:`${J.attendance?.presentDays||0}/${J.attendance?.totalDays||0}`,show:H.showAttendance}].filter(a=>a.show),af=H.showNumberOnRoll?[{key:"numberOnRoll",label:H.numberOnRollLabel||"Number On Roll",value:O.numberOnRoll||J.numberOnRoll||J.classSize||a?.numberOnRoll||a?.classSize||"-",show:!0}]:[],ag=[{key:"total",label:"Total",value:(0,g.ZV)(J.total,1),show:H.showTotal},{key:"average",label:"Average",value:`${(0,g.ZV)(J.average,1)}%`,show:H.showAverage},{key:"classPosition",label:H.classPositionLabel||"Class Rank",value:(0,g.IE)(J.overallPosition),show:H.showClassPosition},{key:"gpa",label:"GPA",value:null!=J.overallGPA?(0,g.ZV)(J.overallGPA,2):"-",show:H.showGPA}].filter(a=>a.show),ah=(0,g.qr)(P,H),ai=(0,g.R8)(Q,H),aj=H.showGeneratedDate?(0,g.kn)(a?.generatedAt):"",ak=1+(H.showAssessmentBreakdown?M.length:0)+1+ +!!H.showGrade+ +!!H.showSubjectPosition+ +!!H.showSubjectRemarks,al=(0,f.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page cambridge-template-page",style:_,children:[U&&(0,f.jsx)("img",{src:U,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),i&&H.showWatermark&&V&&(0,f.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,f.jsx)("img",{src:V,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,f.jsx)("div",{"aria-hidden":"true",className:"cambridge-frame-line cambridge-frame-outer",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"cambridge-frame-line cambridge-frame-inner"}),(0,f.jsx)("div",{"aria-hidden":"true",className:"cambridge-corner cambridge-corner-tl",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"cambridge-corner cambridge-corner-tr",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"cambridge-corner cambridge-corner-bl",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"cambridge-corner cambridge-corner-br",style:{borderColor:S}}),(0,f.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,f.jsx)(E,{header:K,dataset:a,settings:H,title:"International Academic Progress Report",compact:h,primaryColor:S,fontFamily:T}),(0,f.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:H.showStudentPhoto?"94px minmax(0, 1fr)":"1fr",gap:8,alignItems:"stretch"},children:[H.showStudentPhoto&&(0,f.jsx)("div",{style:{border:"1.4px solid #9fb3d1",borderRadius:13,background:"#f8fafc",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:92},children:X?(0,f.jsx)("img",{src:X,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,f.jsx)("span",{style:{fontSize:11,fontWeight:900,color:"#64748b"},children:"PHOTO"})}),(0,f.jsx)("div",{style:{borderRadius:8,border:"1px solid #b8c7dc",background:"linear-gradient(180deg, #ffffff, #f3f8ff)",overflow:"hidden"},children:(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))"},children:[ae.map((a,b)=>(0,f.jsxs)("div",{style:{minWidth:0,gridColumn:a.span?`span ${a.span}`:void 0,padding:h?"7px 8px":"8px 9px",borderRight:2!==b&&6!==b?"1px solid #dbe5f3":void 0,borderBottom:b<3?"1px solid #dbe5f3":void 0},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{...ac,marginTop:3,whiteSpace:"normal",overflowWrap:"break-word"},children:a.value})]},a.key)),af.map(a=>(0,f.jsxs)("div",{style:{gridColumn:"1 / -1",padding:h?"7px 8px":"8px 9px",borderTop:"1px solid #dbe5f3"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{...ac,marginTop:3},children:a.value})]},a.key))]})})]}),(0,f.jsx)("div",{style:{marginTop:8},children:(0,f.jsxs)("table",{style:aa.table,children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,textAlign:"left",minWidth:98},children:"Subject / Course"}),H.showAssessmentBreakdown&&M.map(a=>(0,f.jsxs)("th",{"data-report-color-block":"true",style:aa.th,children:[k(a,H),(H.showAssessmentWeights||H.showAssessmentMaximumScores)&&(0,f.jsxs)("div",{style:{fontSize:h?9.2:9.7,marginTop:2,opacity:.88},children:[H.showAssessmentWeights?`W:${(0,g.ZV)(a.effectiveWeight??a.weight,0)}`:"",H.showAssessmentWeights&&H.showAssessmentMaximumScores?" \xb7 ":"",H.showAssessmentMaximumScores?`M:${(0,g.ZV)(a.maxScore,0)}`:""]})]},a.assessmentStructureItemId)),(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"%"}),H.showGrade&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"Grade"}),H.showSubjectPosition&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:H.subjectPositionLabel||"Pos."}),H.showSubjectRemarks&&(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,minWidth:86},children:"Remark"})]})}),(0,f.jsxs)("tbody",{children:[J.subjectResults.map((a,b)=>(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{style:{...aa.td,fontWeight:950,fontSize:h?12.5:13.9,lineHeight:1.25,minWidth:h?118:128,whiteSpace:"normal",overflowWrap:"break-word",background:b%2==0?"#f8fafc":"#ffffff"},children:[a.subjectName,H.showTeacherNames&&a.teacherName&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?10:10.8,opacity:.85,fontWeight:700},children:F(a.teacherName)})]}),H.showAssessmentBreakdown&&M.map(b=>{let c=a.breakdown.find(a=>a.assessmentStructureItemId===b.assessmentStructureItemId);return(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:l(c,H,g.ZV)},b.assessmentStructureItemId)}),(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",fontWeight:950},children:(0,g.l9)(a.percentage,1,"-")}),H.showGrade&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,f.jsx)("span",{className:"cambridge-grade-pill",style:{borderColor:S,color:S},children:a.grade})}),H.showSubjectPosition&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,g.IE)(a.subjectPosition)}),H.showSubjectRemarks&&(0,f.jsx)("td",{style:aa.td,children:a.remark})]},a.classSubjectId)),!J.subjectResults.length&&(0,f.jsx)("tr",{children:(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",padding:16},colSpan:ak,children:"No subject results available for this selected period."})})]})]})}),ag.length>0&&(0,f.jsxs)("section",{style:{marginTop:8,borderRadius:8,border:"1px solid #b8c7dc",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${ag.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,f.jsx)("div",{"data-report-color-block":"true",style:{background:S}}),ag.map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===b?"0":"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #f3f8ff)"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?14:15.8,fontWeight:950,color:"#0f172a"},children:a.value})]},a.key))]}),(0,f.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${H.classTeacherLabel}'s Comment`,value:J.classTeacherRemark||""},{label:`${H.headTeacherLabel}'s Comment`,value:J.headTeacherRemark||""}].map(a=>(0,f.jsxs)("div",{style:{border:"1px solid #d9dee8",borderRadius:18,minHeight:52,padding:h?8:9,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:S}}),(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:h?9.6:10.5,lineHeight:1.32,color:"#111827"},children:a.value})]},a.label))}),(ah||ai||aj)&&(0,f.jsxs)("section",{style:{marginTop:8,border:"1px solid #d9dee8",borderRadius:18,padding:h?7:8,background:"#f8fafc",display:"grid",gridTemplateColumns:[ah,ai,aj].filter(Boolean).length>=3?"1fr 26px 1fr 26px 1fr":ah&&ai?"1fr 26px 1fr":"1fr",gap:6,alignItems:"center"},children:[ah&&(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{style:ab,children:"Current Academic Period"}),(0,f.jsx)("div",{style:ac,children:P?.name||K.academicPeriod?.name||"Current Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?10:10.8,fontWeight:900,color:S},children:["Ends:"," ",P?.formattedEndDate||ah.replace(/^.*?:\s*/i,"")]})]}),ah&&ai&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"cambridge-timeline-marker",style:{borderColor:S}})}),ai&&(0,f.jsxs)("div",{style:{textAlign:ah?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:"Next Academic Period"}),(0,f.jsx)("div",{style:ac,children:Q?.name||"Next Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?10:10.8,fontWeight:900,color:S},children:["Begins:"," ",Q?.formattedStartDate||ai.replace(/^.*?:\s*/i,"")]})]}),aj&&ah&&ai&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"cambridge-timeline-marker",style:{borderColor:S}})}),aj&&(0,f.jsxs)("div",{style:{textAlign:ah||ai?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:H.generatedDateLabel||"Generated"}),(0,f.jsx)("div",{style:ac,children:"Progress Record"}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?10:10.8,fontWeight:900,color:S},children:aj})]})]}),(0,f.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:H.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:H.classTeacherLabel,name:F(R.classTeacherName),image:"",show:!0},{label:H.headTeacherLabel,name:F((0,g.ou)(R.headTeacherName,R.principalName)),image:W,show:!0},{label:H.parentLabel,name:F((0,g.ou)(R.parentName,R.guardianName)),image:"",show:H.showParentSignature}].filter(a=>a.show).map(a=>(0,f.jsxs)("div",{style:{textAlign:"center"},children:[a.image&&(0,f.jsx)("img",{src:a.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,f.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:h?10.6:11.6,fontWeight:950,color:"#111827"},children:a.name}),(0,f.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:a.label})]},a.label))}),(0,f.jsxs)("footer",{style:{marginTop:8,borderTop:`2px solid ${S}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:9.3,color:"#475569",fontWeight:700},children:[(0,f.jsxs)("span",{children:["Official international academic progress record for"," ",N.schoolName]}),(0,f.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return n?(0,f.jsxs)("div",{className:`src-preview-shell ${o?"expanded":""}`,children:[(0,f.jsx)("style",{children:G}),(0,f.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:F(J.studentName)}),(0,f.jsxs)("span",{children:[J.className," \xb7"," ",K.academicPeriod?.name||"Academic Period"]})]}),(0,f.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>B("out"),onPointerDown:()=>D("out"),onPointerUp:C,onPointerCancel:C,onPointerLeave:C,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,f.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{C(),p(!1),w(1),y(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,f.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,f.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>y(a=>!a),"aria-label":"Choose zoom percentage","aria-expanded":x,title:"Choose zoom percentage",children:[(0,f.jsxs)("span",{children:[A,"%"]}),(0,f.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),x&&(0,f.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(a=>(0,f.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{C(),p(!0),w(Number((a/100).toFixed(4))),y(!1)},className:`src-zoom-menu-item ${Math.round(100*z)===a?"active":""}`,children:[a,"%"]},a))})]}),(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>B("in"),onPointerDown:()=>D("in"),onPointerUp:C,onPointerCancel:C,onPointerLeave:C,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,f.jsx)("div",{ref:q,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":z},children:(0,f.jsx)("div",{className:"src-preview-center",children:(0,f.jsx)("div",{className:"src-preview-scale",children:al})})})]}):al},fileName:"CambridgeTemplate.tsx",aliases:["cambridge","cambridge_report","international_cambridge"]},{...(0,e.BF)("ib"),component:function({dataset:a,template:b,settings:c,compact:h=!1,showWatermark:i=!0,pageBreakAfter:m=!0,mobilePreview:n=!0}){let[o,p]=(0,d.useState)(!1),q=(0,d.useRef)(null),r=(0,d.useRef)(null),s=(0,d.useRef)(null),[t,u]=(0,d.useState)(1),[v,w]=(0,d.useState)(1),[x,y]=(0,d.useState)(!1),z=o?v:t,A=Math.round(100*z),B=(0,d.useCallback)(a=>{w(b=>{let c=o?b:t;return Math.min(2,Math.max(.25,Number(("in"===a?1.01*c:c/1.01).toFixed(4))))}),p(!0)},[o,t]),C=(0,d.useCallback)(()=>{null!=r.current&&(window.clearTimeout(r.current),r.current=null),null!=s.current&&(window.clearInterval(s.current),s.current=null)},[]),D=(0,d.useCallback)(a=>{C(),B(a),r.current=window.setTimeout(()=>{s.current=window.setInterval(()=>{B(a)},55)},260)},[B,C]),E=(0,e.tH)({...e.gv,...c||{},templateCode:"ib",layoutKey:"ib",templateName:"IB",density:c?.density||(h?"compact":"comfortable")},b||null,null),F=(0,g.J7)({dataset:a,template:b||null,settings:E}),G=a?.report,K=a?.header,L=a?.student,M=(0,d.useMemo)(()=>j(G?.subjectResults,E),[G?.subjectResults,E]);if(!a||!G||!K||!F)return(0,f.jsxs)("div",{className:"src-empty-card ib-template-empty",children:[(0,f.jsx)("style",{children:J}),(0,g.p6)(a)]});let{branding:N,studentInfo:O,currentAcademicPeriod:P,nextAcademicPeriod:Q,signatures:R}=F,S=N.primaryColor||"var(--primary-color)",T=N.fontFamily||"Arial, sans-serif",U=N.reportCardBackgroundImage||"",V=N.reportCardWatermark||N.logo||"",W=R.officialSignatureImage||N.reportCardSignatureImage||"",X=O.studentPhoto||"",Y=(0,g.j1)({settings:E,primaryColor:S,fontFamily:T,compact:h,pageBreakAfter:m}),Z=(0,g.h5)({settings:E,primaryColor:S,compact:h}),$=h?"8mm":"9mm",_={...Y,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:$,background:"linear-gradient(180deg, #ffffff, #f8fbff 42%, #ffffff)",color:"#0f172a",border:"1px solid #99d5cb",borderRadius:12,boxShadow:"0 24px 70px rgba(15,23,42,.13)",overflow:"hidden"},aa={table:{...Z.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:6,border:"1px solid #99d5cb",fontSize:h?11.3:12},th:{...Z.th,border:"0",borderBottom:"1px solid #111827",background:"#0f766e",color:"#fff",padding:h?"5px 5px":"6px 6px",fontWeight:950,fontSize:h?10.5:11.2,lineHeight:1.22,whiteSpace:"normal",overflowWrap:"break-word"},td:{...Z.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:h?"4px 5px":"5px 6px",color:"#111827",fontSize:h?11.5:12.4,lineHeight:1.26,whiteSpace:"normal",overflowWrap:"break-word"},label:Z.label,value:Z.value},ab={fontSize:h?9.5:10.2,fontWeight:950,letterSpacing:.25,textTransform:"uppercase",color:"#64748b",lineHeight:1.15},ac={fontSize:h?11.4:12.4,fontWeight:950,color:"#0f172a",lineHeight:1.15,overflowWrap:"anywhere"},ad=[{key:"total",label:"Total",value:(0,g.ZV)(G.total,1),show:E.showTotal},{key:"average",label:"Average",value:`${(0,g.ZV)(G.average,1)}%`,show:E.showAverage},{key:"classPosition",label:E.classPositionLabel||"Class Rank",value:(0,g.IE)(G.overallPosition),show:E.showClassPosition},{key:"gpa",label:"GPA",value:null!=G.overallGPA?(0,g.ZV)(G.overallGPA,2):"-",show:E.showGPA}].filter(a=>a.show),ae=(0,g.qr)(P,E),af=(0,g.R8)(Q,E),ag=E.showGeneratedDate?(0,g.kn)(a?.generatedAt):"",ah=1+(E.showAssessmentBreakdown?M.length:0)+1+ +!!E.showGrade+ +!!E.showSubjectPosition+ +!!E.showSubjectRemarks,ai=(0,f.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page ib-template-page",style:_,children:[U&&(0,f.jsx)("img",{src:U,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),i&&E.showWatermark&&V&&(0,f.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,f.jsx)("img",{src:V,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,f.jsx)("div",{"aria-hidden":"true",className:"ib-frame-line ib-frame-outer",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"ib-frame-line ib-frame-inner"}),(0,f.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-tl",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-tr",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-bl",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-br",style:{borderColor:S}}),(0,f.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,f.jsx)(H,{header:K,dataset:a,settings:E,title:"International Learner Progress Report",compact:h,primaryColor:S,fontFamily:T}),(0,f.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:E.showStudentPhoto?"minmax(0, 1fr) 86px":"1fr",gap:8,alignItems:"stretch"},children:[(0,f.jsxs)("div",{style:{border:"1px solid #b8e0d6",borderRadius:10,background:"linear-gradient(180deg, #ffffff, #f6fffb)",overflow:"hidden"},children:[(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, .8fr) minmax(0, 1.2fr)",gap:0,borderBottom:"1px solid #b8e0d6"},children:[(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0},children:[(0,f.jsx)("div",{style:ab,children:"Student Name"}),(0,f.jsx)("div",{style:{...ac,marginTop:2,fontSize:h?12.6:14.2,overflowWrap:"anywhere"},children:I(G.studentName)})]}),(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #b8e0d6"},children:[(0,f.jsx)("div",{style:ab,children:"Gender"}),(0,f.jsx)("div",{style:{...ac,marginTop:2},children:G.gender||L?.gender||"-"})]}),(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #b8e0d6"},children:[(0,f.jsx)("div",{style:ab,children:"Admission No."}),(0,f.jsx)("div",{style:{...ac,marginTop:2},children:G.admissionNumber||"-"})]})]}),(0,f.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"},children:[{key:"structure",label:"Academic Structure",value:(0,g.ou)(K?.academicStructure?.name,K?.academicStructureName,"-")},{key:"period",label:"Academic Period",value:(0,g.ou)(K.academicPeriod?.name,K?.academicPeriodName,"-")},{key:"class",label:"Class",value:G.className||"-"},{key:"attendance",label:"Attendance",value:`${G.attendance?.presentDays??0}/${G.attendance?.totalDays??0}`}].filter(a=>"attendance"!==a.key||E.showAttendance).map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:0===b?void 0:"1px solid #b8e0d6"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{...ac,marginTop:2,overflowWrap:"anywhere"},children:a.value})]},a.key))}),E.showNumberOnRoll&&(0,f.jsxs)("div",{style:{padding:h?"5px 7px":"6px 9px",borderTop:"1px solid #b8e0d6"},children:[(0,f.jsxs)("span",{style:ab,children:[E.numberOnRollLabel||"Number On Roll",": "]}),(0,f.jsx)("span",{style:ac,children:O.numberOnRoll||G.numberOnRoll||G.classSize||a?.numberOnRoll||a?.classSize||"-"})]})]}),E.showStudentPhoto&&(0,f.jsx)("div",{style:{border:"1px solid #99d5cb",borderRadius:10,background:"#fff",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:96},children:X?(0,f.jsx)("img",{src:X,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,f.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]}),(0,f.jsx)("div",{style:{marginTop:8},children:(0,f.jsxs)("table",{style:aa.table,children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,textAlign:"left",minWidth:98},children:"Learning Area / Subject"}),E.showAssessmentBreakdown&&M.map(a=>(0,f.jsxs)("th",{"data-report-color-block":"true",style:aa.th,children:[k(a,E),(E.showAssessmentWeights||E.showAssessmentMaximumScores)&&(0,f.jsxs)("div",{style:{fontSize:7.5,marginTop:2,opacity:.88},children:[E.showAssessmentWeights?`W:${(0,g.ZV)(a.effectiveWeight??a.weight,0)}`:"",E.showAssessmentWeights&&E.showAssessmentMaximumScores?" \xb7 ":"",E.showAssessmentMaximumScores?`M:${(0,g.ZV)(a.maxScore,0)}`:""]})]},a.assessmentStructureItemId)),(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"%"}),E.showGrade&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"Grade"}),E.showSubjectPosition&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:E.subjectPositionLabel||"Pos."}),E.showSubjectRemarks&&(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,minWidth:86},children:"Remark"})]})}),(0,f.jsxs)("tbody",{children:[G.subjectResults.map((a,b)=>(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{style:{...aa.td,fontWeight:950,fontSize:h?12.8:13.7,lineHeight:1.25,overflowWrap:"break-word",background:b%2==0?"#f8fafc":"#ffffff"},children:[a.subjectName,E.showTeacherNames&&a.teacherName&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:10.2,opacity:.72,fontWeight:700},children:I(a.teacherName)})]}),E.showAssessmentBreakdown&&M.map(b=>{let c=a.breakdown.find(a=>a.assessmentStructureItemId===b.assessmentStructureItemId);return(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:l(c,E,g.ZV)},b.assessmentStructureItemId)}),(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",fontWeight:950},children:(0,g.l9)(a.percentage,1,"-")}),E.showGrade&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,f.jsx)("span",{className:"ib-grade-pill",style:{borderColor:S,color:S},children:a.grade})}),E.showSubjectPosition&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,g.IE)(a.subjectPosition)}),E.showSubjectRemarks&&(0,f.jsx)("td",{style:aa.td,children:a.remark})]},a.classSubjectId)),!G.subjectResults.length&&(0,f.jsx)("tr",{children:(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",padding:16},colSpan:ah,children:"No subject results available for this selected period."})})]})]})}),ad.length>0&&(0,f.jsxs)("section",{style:{marginTop:8,borderRadius:8,border:"1px solid #b8c7dc",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${ad.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,f.jsx)("div",{"data-report-color-block":"true",style:{background:S}}),ad.map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===b?"0":"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #f6fffb)"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?14:15.8,fontWeight:950,color:"#0f172a"},children:a.value})]},a.key))]}),(0,f.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${E.classTeacherLabel}'s Comment`,value:G.classTeacherRemark||""},{label:`${E.headTeacherLabel}'s Comment`,value:G.headTeacherRemark||""}].map(a=>(0,f.jsxs)("div",{style:{border:"1px solid #d9dee8",borderRadius:18,minHeight:52,padding:h?8:9,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:S}}),(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:h?9.6:10.5,lineHeight:1.32,color:"#111827"},children:a.value})]},a.label))}),(ae||af||ag)&&(0,f.jsxs)("section",{style:{marginTop:8,border:"1px solid #d9dee8",borderRadius:18,padding:h?7:8,background:"#f8fafc",display:"grid",gridTemplateColumns:[ae,af,ag].filter(Boolean).length>=3?"1fr 26px 1fr 26px 1fr":ae&&af?"1fr 26px 1fr":"1fr",gap:6,alignItems:"center"},children:[ae&&(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{style:ab,children:"Current Academic Period"}),(0,f.jsx)("div",{style:ac,children:P?.name||K.academicPeriod?.name||"Current Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:["Ends:"," ",P?.formattedEndDate||ae.replace(/^.*?:\s*/i,"")]})]}),ae&&af&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"ib-timeline-marker",style:{borderColor:S}})}),af&&(0,f.jsxs)("div",{style:{textAlign:ae?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:"Next Academic Period"}),(0,f.jsx)("div",{style:ac,children:Q?.name||"Next Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:["Begins:"," ",Q?.formattedStartDate||af.replace(/^.*?:\s*/i,"")]})]}),ag&&ae&&af&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"ib-timeline-marker",style:{borderColor:S}})}),ag&&(0,f.jsxs)("div",{style:{textAlign:ae||af?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:E.generatedDateLabel||"Generated"}),(0,f.jsx)("div",{style:ac,children:"Progress Record"}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:ag})]})]}),(0,f.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:E.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:E.classTeacherLabel,name:I(R.classTeacherName||""),image:"",show:!0},{label:E.headTeacherLabel,name:I((0,g.ou)(R.headTeacherName,R.principalName)),image:W,show:!0},{label:E.parentLabel,name:I((0,g.ou)(R.parentName,R.guardianName)),image:"",show:E.showParentSignature}].filter(a=>a.show).map(a=>(0,f.jsxs)("div",{style:{textAlign:"center"},children:[a.image&&(0,f.jsx)("img",{src:a.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,f.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:h?10.5:11.5,fontWeight:950,color:"#111827"},children:a.name}),(0,f.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:a.label})]},a.label))}),(0,f.jsxs)("footer",{style:{marginTop:8,borderTop:`2px solid ${S}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:7.8,color:"#475569",fontWeight:700},children:[(0,f.jsxs)("span",{children:["Official international academic progress record for"," ",N.schoolName]}),(0,f.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return n?(0,f.jsxs)("div",{className:`src-preview-shell ${o?"expanded":""}`,children:[(0,f.jsx)("style",{children:J}),(0,f.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:I(G.studentName)}),(0,f.jsxs)("span",{children:[G.className," \xb7"," ",K.academicPeriod?.name||"Academic Period"]})]}),(0,f.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>B("out"),onPointerDown:()=>D("out"),onPointerUp:C,onPointerCancel:C,onPointerLeave:C,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,f.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{C(),p(!1),w(1),y(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,f.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,f.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>y(a=>!a),"aria-label":"Choose zoom percentage","aria-expanded":x,title:"Choose zoom percentage",children:[(0,f.jsxs)("span",{children:[A,"%"]}),(0,f.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),x&&(0,f.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(a=>(0,f.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{C(),p(!0),w(Number((a/100).toFixed(4))),y(!1)},className:`src-zoom-menu-item ${Math.round(100*z)===a?"active":""}`,children:[a,"%"]},a))})]}),(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>B("in"),onPointerDown:()=>D("in"),onPointerUp:C,onPointerCancel:C,onPointerLeave:C,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,f.jsx)("div",{ref:q,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":z},children:(0,f.jsx)("div",{className:"src-preview-center",children:(0,f.jsx)("div",{className:"src-preview-scale",children:ai})})})]}):ai},fileName:"IBTemplate.tsx",aliases:["ib","international_baccalaureate","baccalaureate"]},{...(0,e.BF)("kindergarten"),component:function({dataset:a,template:b,settings:c,compact:h=!1,showWatermark:i=!0,pageBreakAfter:m=!0,mobilePreview:n=!0}){let[o,p]=(0,d.useState)(!1),q=(0,d.useRef)(null),r=(0,d.useRef)(null),s=(0,d.useRef)(null),[t,u]=(0,d.useState)(1),[v,w]=(0,d.useState)(1),[x,y]=(0,d.useState)(!1),z=o?v:t,A=Math.round(100*z),B=(0,d.useCallback)(a=>{w(b=>{let c=o?b:t;return Math.min(2,Math.max(.25,Number(("in"===a?1.01*c:c/1.01).toFixed(4))))}),p(!0)},[o,t]),C=(0,d.useCallback)(()=>{null!=r.current&&(window.clearTimeout(r.current),r.current=null),null!=s.current&&(window.clearInterval(s.current),s.current=null)},[]),D=(0,d.useCallback)(a=>{C(),B(a),r.current=window.setTimeout(()=>{s.current=window.setInterval(()=>{B(a)},55)},260)},[B,C]),E=(0,e.tH)({...e.gv,...c||{},templateCode:"kindergarten",layoutKey:"kindergarten",templateName:"Kindergarten",density:c?.density||(h?"compact":"comfortable")},b||null,null),F=(0,g.J7)({dataset:a,template:b||null,settings:E}),G=a?.report,H=a?.header,I=a?.student,J=(0,d.useMemo)(()=>j(G?.subjectResults,E),[G?.subjectResults,E]);if(!a||!G||!H||!F)return(0,f.jsxs)("div",{className:"src-empty-card kindergarten-template-empty",children:[(0,f.jsx)("style",{children:M}),(0,g.p6)(a)]});let{branding:N,studentInfo:O,currentAcademicPeriod:P,nextAcademicPeriod:Q,signatures:R}=F,S=N.primaryColor||"var(--primary-color)",T=N.fontFamily||"Arial, sans-serif",U=N.reportCardBackgroundImage||"",V=N.reportCardWatermark||N.logo||"",W=R.officialSignatureImage||N.reportCardSignatureImage||"",X=O.studentPhoto||"",Y=(0,g.j1)({settings:E,primaryColor:S,fontFamily:T,compact:h,pageBreakAfter:m}),Z=(0,g.h5)({settings:E,primaryColor:S,compact:h}),$=h?"8mm":"9mm",_={...Y,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:$,background:"linear-gradient(180deg, #ffffff, #f8fbff 42%, #ffffff)",color:"#1f2937",border:"1px solid #fed7aa",borderRadius:12,boxShadow:"0 24px 70px rgba(15,23,42,.13)",overflow:"hidden"},aa={table:{...Z.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:6,border:"1px solid #fed7aa",fontSize:h?11.3:12},th:{...Z.th,border:"0",borderBottom:"1px solid #111827",background:"#ea580c",color:"#fff",padding:h?"5px 5px":"6px 6px",fontWeight:950,fontSize:h?10.5:11.2,lineHeight:1.22,whiteSpace:"normal",overflowWrap:"break-word"},td:{...Z.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:h?"4px 5px":"5px 6px",color:"#111827",fontSize:h?11.5:12.4,lineHeight:1.26,whiteSpace:"normal",overflowWrap:"break-word"},label:Z.label,value:Z.value},ab={fontSize:h?9.5:10.2,fontWeight:950,letterSpacing:.2,textTransform:"uppercase",color:"#78716c",lineHeight:1.15},ac={fontSize:h?11.4:12.4,fontWeight:950,color:"#1f2937",lineHeight:1.15,overflowWrap:"anywhere"},ad=[{key:"total",label:"Total",value:(0,g.ZV)(G.total,1),show:E.showTotal},{key:"average",label:"Average",value:`${(0,g.ZV)(G.average,1)}%`,show:E.showAverage},{key:"classPosition",label:E.classPositionLabel||"Class Rank",value:(0,g.IE)(G.overallPosition),show:E.showClassPosition},{key:"gpa",label:"GPA",value:null!=G.overallGPA?(0,g.ZV)(G.overallGPA,2):"-",show:E.showGPA}].filter(a=>a.show),ae=(0,g.qr)(P,E),af=(0,g.R8)(Q,E),ag=E.showGeneratedDate?(0,g.kn)(a?.generatedAt):"",ah=1+(E.showAssessmentBreakdown?J.length:0)+1+ +!!E.showGrade+ +!!E.showSubjectPosition+ +!!E.showSubjectRemarks,ai=(0,f.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page kindergarten-template-page",style:_,children:[U&&(0,f.jsx)("img",{src:U,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),i&&E.showWatermark&&V&&(0,f.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,f.jsx)("img",{src:V,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,f.jsx)("div",{"aria-hidden":"true",className:"ib-frame-line ib-frame-outer",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"ib-frame-line ib-frame-inner"}),(0,f.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-tl",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-tr",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-bl",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"ib-corner ib-corner-br",style:{borderColor:S}}),(0,f.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,f.jsx)(K,{header:H,dataset:a,settings:E,title:"Early Years Progress Report",compact:h,primaryColor:S,fontFamily:T}),(0,f.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:E.showStudentPhoto?"minmax(0, 1fr) 86px":"1fr",gap:8,alignItems:"stretch"},children:[(0,f.jsxs)("div",{style:{border:"1px solid #fed7aa",borderRadius:16,background:"linear-gradient(180deg, #ffffff, #fff7ed)",overflow:"hidden"},children:[(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, .8fr) minmax(0, 1.2fr)",gap:0,borderBottom:"1px solid #fed7aa"},children:[(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0},children:[(0,f.jsx)("div",{style:ab,children:"Student Name"}),(0,f.jsx)("div",{style:{...ac,marginTop:2,fontSize:h?12.6:14.2,overflowWrap:"anywhere"},children:L(G.studentName)})]}),(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #fed7aa"},children:[(0,f.jsx)("div",{style:ab,children:"Gender"}),(0,f.jsx)("div",{style:{...ac,marginTop:2},children:G.gender||I?.gender||"-"})]}),(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #fed7aa"},children:[(0,f.jsx)("div",{style:ab,children:"Admission No."}),(0,f.jsx)("div",{style:{...ac,marginTop:2},children:G.admissionNumber||"-"})]})]}),(0,f.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"},children:[{key:"structure",label:"Academic Structure",value:(0,g.ou)(H?.academicStructure?.name,H?.academicStructureName,"-")},{key:"period",label:"Academic Period",value:(0,g.ou)(H.academicPeriod?.name,H?.academicPeriodName,"-")},{key:"class",label:"Class",value:G.className||"-"},{key:"attendance",label:"Attendance",value:`${G.attendance?.presentDays??0}/${G.attendance?.totalDays??0}`}].filter(a=>"attendance"!==a.key||E.showAttendance).map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:0===b?void 0:"1px solid #fed7aa"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{...ac,marginTop:2,overflowWrap:"anywhere"},children:a.value})]},a.key))}),E.showNumberOnRoll&&(0,f.jsxs)("div",{style:{padding:h?"5px 7px":"6px 9px",borderTop:"1px solid #fed7aa"},children:[(0,f.jsxs)("span",{style:ab,children:[E.numberOnRollLabel||"Number On Roll",": "]}),(0,f.jsx)("span",{style:ac,children:O.numberOnRoll||G.numberOnRoll||G.classSize||a?.numberOnRoll||a?.classSize||"-"})]})]}),E.showStudentPhoto&&(0,f.jsx)("div",{style:{border:"1px solid #fed7aa",borderRadius:16,background:"#fff",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:96},children:X?(0,f.jsx)("img",{src:X,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,f.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]}),(0,f.jsx)("div",{style:{marginTop:8},children:(0,f.jsxs)("table",{style:aa.table,children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,textAlign:"left",minWidth:98},children:"Learning Area / Learning Area"}),E.showAssessmentBreakdown&&J.map(a=>(0,f.jsxs)("th",{"data-report-color-block":"true",style:aa.th,children:[k(a,E),(E.showAssessmentWeights||E.showAssessmentMaximumScores)&&(0,f.jsxs)("div",{style:{fontSize:7.5,marginTop:2,opacity:.88},children:[E.showAssessmentWeights?`W:${(0,g.ZV)(a.effectiveWeight??a.weight,0)}`:"",E.showAssessmentWeights&&E.showAssessmentMaximumScores?" \xb7 ":"",E.showAssessmentMaximumScores?`M:${(0,g.ZV)(a.maxScore,0)}`:""]})]},a.assessmentStructureItemId)),(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"%"}),E.showGrade&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"Grade"}),E.showSubjectPosition&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:E.subjectPositionLabel||"Pos."}),E.showSubjectRemarks&&(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,minWidth:86},children:"Remark"})]})}),(0,f.jsxs)("tbody",{children:[G.subjectResults.map((a,b)=>(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{style:{...aa.td,fontWeight:950,fontSize:h?12.8:13.7,lineHeight:1.25,overflowWrap:"break-word",background:b%2==0?"#f8fafc":"#ffffff"},children:[a.subjectName,E.showTeacherNames&&a.teacherName&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:10.2,opacity:.72,fontWeight:700},children:L(a.teacherName)})]}),E.showAssessmentBreakdown&&J.map(b=>{let c=a.breakdown.find(a=>a.assessmentStructureItemId===b.assessmentStructureItemId);return(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:l(c,E,g.ZV)},b.assessmentStructureItemId)}),(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",fontWeight:950},children:(0,g.l9)(a.percentage,1,"-")}),E.showGrade&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,f.jsx)("span",{className:"kindergarten-grade-badge",style:{borderColor:S,color:S},children:a.grade})}),E.showSubjectPosition&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,g.IE)(a.subjectPosition)}),E.showSubjectRemarks&&(0,f.jsx)("td",{style:aa.td,children:a.remark})]},a.classSubjectId)),!G.subjectResults.length&&(0,f.jsx)("tr",{children:(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",padding:16},colSpan:ah,children:"No subject results available for this selected period."})})]})]})}),ad.length>0&&(0,f.jsxs)("section",{style:{marginTop:8,borderRadius:18,border:"1px solid #b8c7dc",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${ad.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,f.jsx)("div",{"data-report-color-block":"true",style:{background:S}}),ad.map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===b?"0":"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #9a621e)"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?14:15.8,fontWeight:950,color:"#1f2937"},children:a.value})]},a.key))]}),(0,f.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${E.classTeacherLabel}'s Comment`,value:G.classTeacherRemark||""},{label:`${E.headTeacherLabel}'s Comment`,value:G.headTeacherRemark||""}].map(a=>(0,f.jsxs)("div",{style:{border:"1px solid #d9dee8",borderRadius:18,minHeight:52,padding:h?8:9,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:S}}),(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:h?9.6:10.5,lineHeight:1.32,color:"#111827"},children:a.value})]},a.label))}),(ae||af||ag)&&(0,f.jsxs)("section",{style:{marginTop:8,border:"1px solid #d9dee8",borderRadius:18,padding:h?7:8,background:"#f8fafc",display:"grid",gridTemplateColumns:[ae,af,ag].filter(Boolean).length>=3?"1fr 26px 1fr 26px 1fr":ae&&af?"1fr 26px 1fr":"1fr",gap:6,alignItems:"center"},children:[ae&&(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{style:ab,children:"Current Academic Period"}),(0,f.jsx)("div",{style:ac,children:P?.name||H.academicPeriod?.name||"Current Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:["Ends:"," ",P?.formattedEndDate||ae.replace(/^.*?:\s*/i,"")]})]}),ae&&af&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"ib-timeline-marker",style:{borderColor:S}})}),af&&(0,f.jsxs)("div",{style:{textAlign:ae?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:"Next Academic Period"}),(0,f.jsx)("div",{style:ac,children:Q?.name||"Next Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:["Begins:"," ",Q?.formattedStartDate||af.replace(/^.*?:\s*/i,"")]})]}),ag&&ae&&af&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"ib-timeline-marker",style:{borderColor:S}})}),ag&&(0,f.jsxs)("div",{style:{textAlign:ae||af?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:E.generatedDateLabel||"Generated"}),(0,f.jsx)("div",{style:ac,children:"Progress Record"}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:ag})]})]}),(0,f.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:E.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:E.classTeacherLabel,name:L(R.classTeacherName||""),image:"",show:!0},{label:E.headTeacherLabel,name:L((0,g.ou)(R.headTeacherName,R.principalName)),image:W,show:!0},{label:E.parentLabel,name:L((0,g.ou)(R.parentName,R.guardianName)),image:"",show:E.showParentSignature}].filter(a=>a.show).map(a=>(0,f.jsxs)("div",{style:{textAlign:"center"},children:[a.image&&(0,f.jsx)("img",{src:a.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,f.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:h?10.5:11.5,fontWeight:950,color:"#111827"},children:a.name}),(0,f.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:a.label})]},a.label))}),(0,f.jsxs)("footer",{style:{marginTop:8,borderTop:`2px solid ${S}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:7.8,color:"#6b7280",fontWeight:700},children:[(0,f.jsxs)("span",{children:["Official international academic progress record for"," ",N.schoolName]}),(0,f.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return n?(0,f.jsxs)("div",{className:`src-preview-shell ${o?"expanded":""}`,children:[(0,f.jsx)("style",{children:M}),(0,f.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:L(G.studentName)}),(0,f.jsxs)("span",{children:[G.className," \xb7"," ",H.academicPeriod?.name||"Academic Period"]})]}),(0,f.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>B("out"),onPointerDown:()=>D("out"),onPointerUp:C,onPointerCancel:C,onPointerLeave:C,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,f.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{C(),p(!1),w(1),y(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,f.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,f.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>y(a=>!a),"aria-label":"Choose zoom percentage","aria-expanded":x,title:"Choose zoom percentage",children:[(0,f.jsxs)("span",{children:[A,"%"]}),(0,f.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),x&&(0,f.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(a=>(0,f.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{C(),p(!0),w(Number((a/100).toFixed(4))),y(!1)},className:`src-zoom-menu-item ${Math.round(100*z)===a?"active":""}`,children:[a,"%"]},a))})]}),(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>B("in"),onPointerDown:()=>D("in"),onPointerUp:C,onPointerCancel:C,onPointerLeave:C,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,f.jsx)("div",{ref:q,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":z},children:(0,f.jsx)("div",{className:"src-preview-center",children:(0,f.jsx)("div",{className:"src-preview-scale",children:ai})})})]}):ai},fileName:"KindergartenTemplate.tsx",aliases:["kindergarten","kg","early_years","nursery"]},{...(0,e.BF)("montessori"),component:function({dataset:a,template:b,settings:c,compact:h=!1,showWatermark:i=!0,pageBreakAfter:m=!0,mobilePreview:n=!0}){let[o,p]=(0,d.useState)(!1),q=(0,d.useRef)(null),r=(0,d.useRef)(null),s=(0,d.useRef)(null),[t,u]=(0,d.useState)(1),[v,w]=(0,d.useState)(1),[x,y]=(0,d.useState)(!1),z=o?v:t,A=Math.round(100*z),B=(0,d.useCallback)(a=>{w(b=>{let c=o?b:t;return Math.min(2,Math.max(.25,Number(("in"===a?1.01*c:c/1.01).toFixed(4))))}),p(!0)},[o,t]),C=(0,d.useCallback)(()=>{null!=r.current&&(window.clearTimeout(r.current),r.current=null),null!=s.current&&(window.clearInterval(s.current),s.current=null)},[]),D=(0,d.useCallback)(a=>{C(),B(a),r.current=window.setTimeout(()=>{s.current=window.setInterval(()=>{B(a)},55)},260)},[B,C]),E=(0,e.tH)({...e.gv,...c||{},templateCode:"montessori",layoutKey:"montessori",templateName:"Montessori",density:c?.density||(h?"compact":"comfortable")},b||null,null),F=(0,g.J7)({dataset:a,template:b||null,settings:E}),G=a?.report,H=a?.header,I=a?.student,J=(0,d.useMemo)(()=>j(G?.subjectResults,E),[G?.subjectResults,E]);if(!a||!G||!H||!F)return(0,f.jsxs)("div",{className:"src-empty-card montessori-template-empty",children:[(0,f.jsx)("style",{children:P}),(0,g.p6)(a)]});let{branding:K,studentInfo:L,currentAcademicPeriod:M,nextAcademicPeriod:Q,signatures:R}=F,S=K.primaryColor||"var(--primary-color)",T=K.fontFamily||"Arial, sans-serif",U=K.reportCardBackgroundImage||"",V=K.reportCardWatermark||K.logo||"",W=R.officialSignatureImage||K.reportCardSignatureImage||"",X=L.studentPhoto||"",Y=(0,g.j1)({settings:E,primaryColor:S,fontFamily:T,compact:h,pageBreakAfter:m}),Z=(0,g.h5)({settings:E,primaryColor:S,compact:h}),$=h?"8mm":"9mm",_={...Y,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:$,background:"linear-gradient(180deg, #fffdf7, #ffffff 42%, #f8faf4)",color:"#243126",border:"1px solid #d9cbb3",borderRadius:6,boxShadow:"0 24px 70px rgba(15,23,42,.13)",overflow:"hidden"},aa={table:{...Z.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:6,border:"1px solid #d9cbb3",fontSize:h?11.3:12},th:{...Z.th,border:"0",borderBottom:"1px solid #111827",background:"#6b7f4e",color:"#fff",padding:h?"5px 5px":"6px 6px",fontWeight:950,fontSize:h?10.5:11.2,lineHeight:1.22,whiteSpace:"normal",overflowWrap:"break-word"},td:{...Z.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:h?"4px 5px":"5px 6px",color:"#111827",fontSize:h?11.5:12.4,lineHeight:1.26,whiteSpace:"normal",overflowWrap:"break-word"},label:Z.label,value:Z.value},ab={fontSize:h?9.5:10.2,fontWeight:950,letterSpacing:.2,textTransform:"uppercase",color:"#6f6a5f",lineHeight:1.15},ac={fontSize:h?11.4:12.4,fontWeight:950,color:"#243126",lineHeight:1.15,overflowWrap:"anywhere"},ad=[{key:"total",label:"Total",value:(0,g.ZV)(G.total,1),show:E.showTotal},{key:"average",label:"Average",value:`${(0,g.ZV)(G.average,1)}%`,show:E.showAverage},{key:"classPosition",label:E.classPositionLabel||"Class Standing",value:(0,g.IE)(G.overallPosition),show:E.showClassPosition},{key:"gpa",label:"GPA",value:null!=G.overallGPA?(0,g.ZV)(G.overallGPA,2):"-",show:E.showGPA}].filter(a=>a.show),ae=(0,g.qr)(M,E),af=(0,g.R8)(Q,E),ag=E.showGeneratedDate?(0,g.kn)(a?.generatedAt):"",ah=1+(E.showAssessmentBreakdown?J.length:0)+1+ +!!E.showGrade+ +!!E.showSubjectPosition+ +!!E.showSubjectRemarks,ai=(0,f.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page montessori-template-page",style:_,children:[U&&(0,f.jsx)("img",{src:U,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),i&&E.showWatermark&&V&&(0,f.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,f.jsx)("img",{src:V,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,f.jsx)("div",{"aria-hidden":"true",className:"montessori-frame-line montessori-frame-outer",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"montessori-frame-line montessori-frame-inner"}),(0,f.jsx)("div",{"aria-hidden":"true",className:"montessori-corner montessori-corner-tl",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"montessori-corner montessori-corner-tr",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"montessori-corner montessori-corner-bl",style:{borderColor:S}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"montessori-corner montessori-corner-br",style:{borderColor:S}}),(0,f.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,f.jsx)(N,{header:H,dataset:a,settings:E,title:"Montessori Learning Record",compact:h,primaryColor:S,fontFamily:T}),(0,f.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:E.showStudentPhoto?"minmax(0, 1fr) 86px":"1fr",gap:8,alignItems:"stretch"},children:[(0,f.jsxs)("div",{style:{border:"1px solid #d9cbb3",borderRadius:14,background:"linear-gradient(180deg, #fffdf7, #ffffff)",overflow:"hidden"},children:[(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, .8fr) minmax(0, 1.2fr)",gap:0,borderBottom:"1px solid #d9cbb3"},children:[(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0},children:[(0,f.jsx)("div",{style:ab,children:"Student Name"}),(0,f.jsx)("div",{style:{...ac,marginTop:2,fontSize:h?12.6:14.2,overflowWrap:"anywhere"},children:O(G.studentName)})]}),(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #d9cbb3"},children:[(0,f.jsx)("div",{style:ab,children:"Gender"}),(0,f.jsx)("div",{style:{...ac,marginTop:2},children:G.gender||I?.gender||"-"})]}),(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #d9cbb3"},children:[(0,f.jsx)("div",{style:ab,children:"Admission No."}),(0,f.jsx)("div",{style:{...ac,marginTop:2},children:G.admissionNumber||"-"})]})]}),(0,f.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"},children:[{key:"structure",label:"Academic Structure",value:(0,g.ou)(H?.academicStructure?.name,H?.academicStructureName,"-")},{key:"period",label:"Academic Period",value:(0,g.ou)(H.academicPeriod?.name,H?.academicPeriodName,"-")},{key:"class",label:"Class",value:G.className||"-"},{key:"attendance",label:"Attendance",value:`${G.attendance?.presentDays??0}/${G.attendance?.totalDays??0}`}].filter(a=>"attendance"!==a.key||E.showAttendance).map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:0===b?void 0:"1px solid #d9cbb3"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{...ac,marginTop:2,overflowWrap:"anywhere"},children:a.value})]},a.key))}),E.showNumberOnRoll&&(0,f.jsxs)("div",{style:{padding:h?"5px 7px":"6px 9px",borderTop:"1px solid #d9cbb3"},children:[(0,f.jsxs)("span",{style:ab,children:[E.numberOnRollLabel||"Number On Roll",": "]}),(0,f.jsx)("span",{style:ac,children:L.numberOnRoll||G.numberOnRoll||G.classSize||a?.numberOnRoll||a?.classSize||"-"})]})]}),E.showStudentPhoto&&(0,f.jsx)("div",{style:{border:"1px solid #d9cbb3",borderRadius:14,background:"#fff",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:96},children:X?(0,f.jsx)("img",{src:X,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,f.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]}),(0,f.jsx)("div",{style:{marginTop:8},children:(0,f.jsxs)("table",{style:aa.table,children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,textAlign:"left",minWidth:98},children:"Learning Area"}),E.showAssessmentBreakdown&&J.map(a=>(0,f.jsxs)("th",{"data-report-color-block":"true",style:aa.th,children:[k(a,E),(E.showAssessmentWeights||E.showAssessmentMaximumScores)&&(0,f.jsxs)("div",{style:{fontSize:7.5,marginTop:2,opacity:.88},children:[E.showAssessmentWeights?`W:${(0,g.ZV)(a.effectiveWeight??a.weight,0)}`:"",E.showAssessmentWeights&&E.showAssessmentMaximumScores?" \xb7 ":"",E.showAssessmentMaximumScores?`M:${(0,g.ZV)(a.maxScore,0)}`:""]})]},a.assessmentStructureItemId)),(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"%"}),E.showGrade&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"Grade"}),E.showSubjectPosition&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:E.subjectPositionLabel||"Pos."}),E.showSubjectRemarks&&(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,minWidth:86},children:"Remark"})]})}),(0,f.jsxs)("tbody",{children:[G.subjectResults.map((a,b)=>(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{style:{...aa.td,fontWeight:950,fontSize:h?12.8:13.7,lineHeight:1.25,overflowWrap:"break-word",background:b%2==0?"#f8fafc":"#ffffff"},children:[a.subjectName,E.showTeacherNames&&a.teacherName&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:10.2,opacity:.72,fontWeight:700},children:O(a.teacherName)})]}),E.showAssessmentBreakdown&&J.map(b=>{let c=a.breakdown.find(a=>a.assessmentStructureItemId===b.assessmentStructureItemId);return(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:l(c,E,g.ZV)},b.assessmentStructureItemId)}),(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",fontWeight:950},children:(0,g.l9)(a.percentage,1,"-")}),E.showGrade&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,f.jsx)("span",{className:"montessori-grade-badge",style:{borderColor:S,color:S},children:a.grade})}),E.showSubjectPosition&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,g.IE)(a.subjectPosition)}),E.showSubjectRemarks&&(0,f.jsx)("td",{style:aa.td,children:a.remark})]},a.classSubjectId)),!G.subjectResults.length&&(0,f.jsx)("tr",{children:(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",padding:16},colSpan:ah,children:"No learning records available for this selected period."})})]})]})}),ad.length>0&&(0,f.jsxs)("section",{style:{marginTop:8,borderRadius:8,border:"1px solid #d9cbb3",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${ad.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,f.jsx)("div",{"data-report-color-block":"true",style:{background:S}}),ad.map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===b?"0":"1px solid #e5e7eb",background:"linear-gradient(180deg, #ffffff, #f6f3ea)"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?14:15.8,fontWeight:950,color:"#243126"},children:a.value})]},a.key))]}),(0,f.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${E.classTeacherLabel}'s Comment`,value:G.classTeacherRemark||""},{label:`${E.headTeacherLabel}'s Comment`,value:G.headTeacherRemark||""}].map(a=>(0,f.jsxs)("div",{style:{border:"1px solid #d9cbb3",borderRadius:8,minHeight:52,padding:h?8:9,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:S}}),(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:h?9.6:10.5,lineHeight:1.32,color:"#111827"},children:a.value})]},a.label))}),(ae||af||ag)&&(0,f.jsxs)("section",{style:{marginTop:8,border:"1px solid #d9cbb3",borderRadius:8,padding:h?7:8,background:"#faf9f4",display:"grid",gridTemplateColumns:[ae,af,ag].filter(Boolean).length>=3?"1fr 26px 1fr 26px 1fr":ae&&af?"1fr 26px 1fr":"1fr",gap:6,alignItems:"center"},children:[ae&&(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{style:ab,children:"Current Academic Period"}),(0,f.jsx)("div",{style:ac,children:M?.name||H.academicPeriod?.name||"Current Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:["Ends:"," ",M?.formattedEndDate||ae.replace(/^.*?:\s*/i,"")]})]}),ae&&af&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"montessori-timeline-marker",style:{borderColor:S}})}),af&&(0,f.jsxs)("div",{style:{textAlign:ae?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:"Next Academic Period"}),(0,f.jsx)("div",{style:ac,children:Q?.name||"Next Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:["Begins:"," ",Q?.formattedStartDate||af.replace(/^.*?:\s*/i,"")]})]}),ag&&ae&&af&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"montessori-timeline-marker",style:{borderColor:S}})}),ag&&(0,f.jsxs)("div",{style:{textAlign:ae||af?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:E.generatedDateLabel||"Generated"}),(0,f.jsx)("div",{style:ac,children:"Learning Record"}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:S},children:ag})]})]}),(0,f.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:E.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:E.classTeacherLabel,name:O(R.classTeacherName||""),image:"",show:!0},{label:E.headTeacherLabel,name:O((0,g.ou)(R.headTeacherName,R.principalName)),image:W,show:!0},{label:E.parentLabel,name:O((0,g.ou)(R.parentName,R.guardianName)),image:"",show:E.showParentSignature}].filter(a=>a.show).map(a=>(0,f.jsxs)("div",{style:{textAlign:"center"},children:[a.image&&(0,f.jsx)("img",{src:a.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,f.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:h?10.5:11.5,fontWeight:950,color:"#111827"},children:a.name}),(0,f.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:a.label})]},a.label))}),(0,f.jsxs)("footer",{style:{marginTop:8,borderTop:`1.5px solid ${S}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:7.8,color:"#6b7280",fontWeight:700},children:[(0,f.jsxs)("span",{children:["Official Montessori learning record for ",K.schoolName]}),(0,f.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return n?(0,f.jsxs)("div",{className:`src-preview-shell ${o?"expanded":""}`,children:[(0,f.jsx)("style",{children:P}),(0,f.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:O(G.studentName)}),(0,f.jsxs)("span",{children:[G.className," \xb7"," ",H.academicPeriod?.name||"Academic Period"]})]}),(0,f.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>B("out"),onPointerDown:()=>D("out"),onPointerUp:C,onPointerCancel:C,onPointerLeave:C,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,f.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{C(),p(!1),w(1),y(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,f.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,f.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>y(a=>!a),"aria-label":"Choose zoom percentage","aria-expanded":x,title:"Choose zoom percentage",children:[(0,f.jsxs)("span",{children:[A,"%"]}),(0,f.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),x&&(0,f.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(a=>(0,f.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{C(),p(!0),w(Number((a/100).toFixed(4))),y(!1)},className:`src-zoom-menu-item ${Math.round(100*z)===a?"active":""}`,children:[a,"%"]},a))})]}),(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>B("in"),onPointerDown:()=>D("in"),onPointerUp:C,onPointerCancel:C,onPointerLeave:C,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,f.jsx)("div",{ref:q,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":z},children:(0,f.jsx)("div",{className:"src-preview-center",children:(0,f.jsx)("div",{className:"src-preview-scale",children:ai})})})]}):ai},fileName:"MontessoriTemplate.tsx",aliases:["montessori","montessori_report","narrative"]},{...(0,e.BF)("university_transcript"),component:function({dataset:a,template:b,settings:c,compact:h=!1,showWatermark:i=!0,pageBreakAfter:m=!0,mobilePreview:n=!0}){let[o,p]=(0,d.useState)(!1),q=(0,d.useRef)(null),r=(0,d.useRef)(null),s=(0,d.useRef)(null),[t,u]=(0,d.useState)(1),[v,w]=(0,d.useState)(1),[x,y]=(0,d.useState)(!1),z=o?v:t,A=Math.round(100*z),B=(0,d.useCallback)(a=>{w(b=>{let c=o?b:t;return Math.min(2,Math.max(.25,Number(("in"===a?1.01*c:c/1.01).toFixed(4))))}),p(!0)},[o,t]),C=(0,d.useCallback)(()=>{null!=r.current&&(window.clearTimeout(r.current),r.current=null),null!=s.current&&(window.clearInterval(s.current),s.current=null)},[]),D=(0,d.useCallback)(a=>{C(),B(a),r.current=window.setTimeout(()=>{s.current=window.setInterval(()=>{B(a)},55)},260)},[B,C]),E=(0,e.tH)({...e.gv,...c||{},templateCode:"university_transcript",layoutKey:"university_transcript",templateName:"University Transcript",density:c?.density||(h?"compact":"comfortable")},b||null,null),F=(0,g.J7)({dataset:a,template:b||null,settings:E}),G=a?.report,H=a?.header,I=a?.student,J=(0,d.useMemo)(()=>j(G?.subjectResults,E),[G?.subjectResults,E]);if(!a||!G||!H||!F)return(0,f.jsxs)("div",{className:"src-empty-card university-transcript-template-empty",children:[(0,f.jsx)("style",{children:S}),(0,g.p6)(a)]});let{branding:K,studentInfo:L,currentAcademicPeriod:M,nextAcademicPeriod:N,signatures:O}=F,P=K.primaryColor||"var(--primary-color)",T=K.fontFamily||"Arial, sans-serif",U=K.reportCardBackgroundImage||"",V=K.reportCardWatermark||K.logo||"",W=O.officialSignatureImage||K.reportCardSignatureImage||"",X=L.studentPhoto||"",Y=(0,g.j1)({settings:E,primaryColor:P,fontFamily:T,compact:h,pageBreakAfter:m}),Z=(0,g.h5)({settings:E,primaryColor:P,compact:h}),$=h?"8mm":"9mm",_={...Y,width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:$,background:"#ffffff",color:"#111827",border:"1px solid #9ca3af",borderRadius:4,boxShadow:"0 24px 70px rgba(15,23,42,.13)",overflow:"hidden"},aa={table:{...Z.table,width:"100%",borderCollapse:"separate",borderSpacing:0,overflow:"hidden",borderRadius:4,border:"1px solid #6b7280",fontSize:h?11.3:12},th:{...Z.th,border:"0",borderBottom:"1px solid #111827",background:"#111827",color:"#fff",padding:h?"5px 5px":"6px 6px",fontWeight:950,fontSize:h?10.5:11.2,lineHeight:1.22,whiteSpace:"normal",overflowWrap:"break-word"},td:{...Z.td,border:"0",borderBottom:"1px solid #e5e7eb",padding:h?"4px 5px":"5px 6px",color:"#111827",fontSize:h?11.5:12.4,lineHeight:1.26,whiteSpace:"normal",overflowWrap:"break-word"},label:Z.label,value:Z.value},ab={fontSize:h?9.5:10.2,fontWeight:950,letterSpacing:.2,textTransform:"uppercase",color:"#4b5563",lineHeight:1.15},ac={fontSize:h?11.4:12.4,fontWeight:950,color:"#111827",lineHeight:1.15,overflowWrap:"anywhere"},ad=[{key:"total",label:"Total",value:(0,g.ZV)(G.total,1),show:E.showTotal},{key:"average",label:"Average",value:`${(0,g.ZV)(G.average,1)}%`,show:E.showAverage},{key:"classPosition",label:E.classPositionLabel||"Class Rank",value:(0,g.IE)(G.overallPosition),show:E.showClassPosition},{key:"gpa",label:"GPA",value:null!=G.overallGPA?(0,g.ZV)(G.overallGPA,2):"-",show:E.showGPA}].filter(a=>a.show),ae=(0,g.qr)(M,E),af=(0,g.R8)(N,E),ag=E.showGeneratedDate?(0,g.kn)(a?.generatedAt):"",ah=1+(E.showAssessmentBreakdown?J.length:0)+1+ +!!E.showGrade+ +!!E.showSubjectPosition+ +!!E.showSubjectRemarks,ai=(0,f.jsxs)("section",{className:"print-page report-page-break student-report-card-page src-a4-page university-transcript-template-page",style:_,children:[U&&(0,f.jsx)("img",{src:U,alt:"Report background",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.025,zIndex:0}}),i&&E.showWatermark&&V&&(0,f.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",opacity:.032,pointerEvents:"none",zIndex:0},children:(0,f.jsx)("img",{src:V,alt:"Watermark",style:{width:"52%",maxHeight:"52%",objectFit:"contain"}})}),(0,f.jsx)("div",{"aria-hidden":"true",className:"university-transcript-frame-line university-transcript-frame-outer",style:{borderColor:P}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"university-transcript-frame-line university-transcript-frame-inner"}),(0,f.jsx)("div",{"aria-hidden":"true",className:"university-transcript-corner university-transcript-corner-tl",style:{borderColor:P}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"university-transcript-corner university-transcript-corner-tr",style:{borderColor:P}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"university-transcript-corner university-transcript-corner-bl",style:{borderColor:P}}),(0,f.jsx)("div",{"aria-hidden":"true",className:"university-transcript-corner university-transcript-corner-br",style:{borderColor:P}}),(0,f.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,f.jsx)(Q,{header:H,dataset:a,settings:E,title:"Official Academic Transcript",compact:h,primaryColor:P,fontFamily:T}),(0,f.jsxs)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:E.showStudentPhoto?"minmax(0, 1fr) 86px":"1fr",gap:8,alignItems:"stretch"},children:[(0,f.jsxs)("div",{style:{border:"1px solid #9ca3af",borderRadius:4,background:"linear-gradient(180deg, #ffffff, #f9fafb)",overflow:"hidden"},children:[(0,f.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 2fr) minmax(0, .8fr) minmax(0, 1.2fr)",gap:0,borderBottom:"1px solid #9ca3af"},children:[(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0},children:[(0,f.jsx)("div",{style:ab,children:"Student Name"}),(0,f.jsx)("div",{style:{...ac,marginTop:2,fontSize:h?12.6:14.2,overflowWrap:"anywhere"},children:R(G.studentName)})]}),(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #9ca3af"},children:[(0,f.jsx)("div",{style:ab,children:"Gender"}),(0,f.jsx)("div",{style:{...ac,marginTop:2},children:G.gender||I?.gender||"-"})]}),(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:"1px solid #9ca3af"},children:[(0,f.jsx)("div",{style:ab,children:"Admission No."}),(0,f.jsx)("div",{style:{...ac,marginTop:2},children:G.admissionNumber||"-"})]})]}),(0,f.jsx)("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"},children:[{key:"structure",label:"Academic Structure",value:(0,g.ou)(H?.academicStructure?.name,H?.academicStructureName,"-")},{key:"period",label:"Academic Period",value:(0,g.ou)(H.academicPeriod?.name,H?.academicPeriodName,"-")},{key:"class",label:"Class",value:G.className||"-"},{key:"attendance",label:"Attendance",value:`${G.attendance?.presentDays??0}/${G.attendance?.totalDays??0}`}].filter(a=>"attendance"!==a.key||E.showAttendance).map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"6px 7px":"7px 9px",minWidth:0,borderLeft:0===b?void 0:"1px solid #9ca3af"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{...ac,marginTop:2,overflowWrap:"anywhere"},children:a.value})]},a.key))}),E.showNumberOnRoll&&(0,f.jsxs)("div",{style:{padding:h?"5px 7px":"6px 9px",borderTop:"1px solid #9ca3af"},children:[(0,f.jsxs)("span",{style:ab,children:[E.numberOnRollLabel||"Number On Roll",": "]}),(0,f.jsx)("span",{style:ac,children:L.numberOnRoll||G.numberOnRoll||G.classSize||a?.numberOnRoll||a?.classSize||"-"})]})]}),E.showStudentPhoto&&(0,f.jsx)("div",{style:{border:"1px solid #9ca3af",borderRadius:4,background:"#fff",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",minHeight:96},children:X?(0,f.jsx)("img",{src:X,alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,f.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#64748b"},children:"PHOTO"})})]}),(0,f.jsx)("div",{style:{marginTop:8},children:(0,f.jsxs)("table",{style:aa.table,children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,textAlign:"left",minWidth:98},children:"Course / Subject"}),E.showAssessmentBreakdown&&J.map(a=>(0,f.jsxs)("th",{"data-report-color-block":"true",style:aa.th,children:[k(a,E),(E.showAssessmentWeights||E.showAssessmentMaximumScores)&&(0,f.jsxs)("div",{style:{fontSize:7.5,marginTop:2,opacity:.88},children:[E.showAssessmentWeights?`W:${(0,g.ZV)(a.effectiveWeight??a.weight,0)}`:"",E.showAssessmentWeights&&E.showAssessmentMaximumScores?" \xb7 ":"",E.showAssessmentMaximumScores?`M:${(0,g.ZV)(a.maxScore,0)}`:""]})]},a.assessmentStructureItemId)),(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"%"}),E.showGrade&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:"Grade"}),E.showSubjectPosition&&(0,f.jsx)("th",{"data-report-color-block":"true",style:aa.th,children:E.subjectPositionLabel||"Pos."}),E.showSubjectRemarks&&(0,f.jsx)("th",{"data-report-color-block":"true",style:{...aa.th,minWidth:86},children:"Remark"})]})}),(0,f.jsxs)("tbody",{children:[G.subjectResults.map((a,b)=>(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{style:{...aa.td,fontWeight:950,fontSize:h?12.8:13.7,lineHeight:1.25,overflowWrap:"break-word",background:b%2==0?"#f8fafc":"#ffffff"},children:[a.subjectName,E.showTeacherNames&&a.teacherName&&(0,f.jsx)("div",{style:{marginTop:2,fontSize:10.2,opacity:.72,fontWeight:700},children:R(a.teacherName)})]}),E.showAssessmentBreakdown&&J.map(b=>{let c=a.breakdown.find(a=>a.assessmentStructureItemId===b.assessmentStructureItemId);return(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:l(c,E,g.ZV)},b.assessmentStructureItemId)}),(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",fontWeight:950},children:(0,g.l9)(a.percentage,1,"-")}),E.showGrade&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,f.jsx)("span",{className:"university-transcript-grade-badge",style:{borderColor:P,color:P},children:a.grade})}),E.showSubjectPosition&&(0,f.jsx)("td",{style:{...aa.td,textAlign:"center"},children:(0,g.IE)(a.subjectPosition)}),E.showSubjectRemarks&&(0,f.jsx)("td",{style:aa.td,children:a.remark})]},a.classSubjectId)),!G.subjectResults.length&&(0,f.jsx)("tr",{children:(0,f.jsx)("td",{style:{...aa.td,textAlign:"center",padding:16},colSpan:ah,children:"No course / subject records available for this selected period."})})]})]})}),ad.length>0&&(0,f.jsxs)("section",{style:{marginTop:8,borderRadius:3,border:"1px solid #9ca3af",overflow:"hidden",display:"grid",gridTemplateColumns:`16px repeat(${ad.length}, minmax(0, 1fr))`,background:"#ffffff"},children:[(0,f.jsx)("div",{"data-report-color-block":"true",style:{background:P}}),ad.map((a,b)=>(0,f.jsxs)("div",{style:{padding:h?"7px 8px":"8px 10px",textAlign:"center",borderLeft:0===b?"0":"1px solid #e5e7eb",background:"#ffffff"},children:[(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?14:15.8,fontWeight:950,color:"#111827"},children:a.value})]},a.key))]}),(0,f.jsx)("section",{style:{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:7},children:[{label:`${E.classTeacherLabel}'s Comment`,value:G.classTeacherRemark||""},{label:`${E.headTeacherLabel}'s Comment`,value:G.headTeacherRemark||""}].map(a=>(0,f.jsxs)("div",{style:{border:"1px solid #9ca3af",borderRadius:8,minHeight:52,padding:h?8:9,background:"#ffffff",position:"relative",overflow:"hidden"},children:[(0,f.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",left:0,top:0,bottom:0,width:4,background:P}}),(0,f.jsx)("div",{style:ab,children:a.label}),(0,f.jsx)("div",{style:{marginTop:5,paddingLeft:2,fontSize:h?9.6:10.5,lineHeight:1.32,color:"#111827"},children:a.value})]},a.label))}),(ae||af||ag)&&(0,f.jsxs)("section",{style:{marginTop:8,border:"1px solid #9ca3af",borderRadius:3,padding:h?7:8,background:"#f9fafb",display:"grid",gridTemplateColumns:[ae,af,ag].filter(Boolean).length>=3?"1fr 26px 1fr 26px 1fr":ae&&af?"1fr 26px 1fr":"1fr",gap:6,alignItems:"center"},children:[ae&&(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{style:ab,children:"Current Academic Period"}),(0,f.jsx)("div",{style:ac,children:M?.name||H.academicPeriod?.name||"Current Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:P},children:["Ends:"," ",M?.formattedEndDate||ae.replace(/^.*?:\s*/i,"")]})]}),ae&&af&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"university-transcript-timeline-marker",style:{borderColor:P}})}),af&&(0,f.jsxs)("div",{style:{textAlign:ae?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:"Next Academic Period"}),(0,f.jsx)("div",{style:ac,children:N?.name||"Next Period"}),(0,f.jsxs)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:P},children:["Begins:"," ",N?.formattedStartDate||af.replace(/^.*?:\s*/i,"")]})]}),ag&&ae&&af&&(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,f.jsx)("span",{className:"university-transcript-timeline-marker",style:{borderColor:P}})}),ag&&(0,f.jsxs)("div",{style:{textAlign:ae||af?"right":"left"},children:[(0,f.jsx)("div",{style:ab,children:E.generatedDateLabel||"Generated"}),(0,f.jsx)("div",{style:ac,children:"Academic Transcript"}),(0,f.jsx)("div",{style:{marginTop:2,fontSize:h?8.8:9.7,fontWeight:900,color:P},children:ag})]})]}),(0,f.jsx)("section",{style:{marginTop:15,display:"grid",gridTemplateColumns:E.showParentSignature?"repeat(3, minmax(0, 1fr))":"repeat(2, minmax(0, 1fr))",gap:20,alignItems:"end"},children:[{label:E.classTeacherLabel,name:R(O.classTeacherName||""),image:"",show:!0},{label:E.headTeacherLabel,name:R((0,g.ou)(O.headTeacherName,O.principalName)),image:W,show:!0},{label:E.parentLabel,name:R((0,g.ou)(O.parentName,O.guardianName)),image:"",show:E.showParentSignature}].filter(a=>a.show).map(a=>(0,f.jsxs)("div",{style:{textAlign:"center"},children:[a.image&&(0,f.jsx)("img",{src:a.image,alt:"Official signature",style:{height:30,objectFit:"contain",marginBottom:2}}),(0,f.jsx)("div",{style:{minHeight:16,marginBottom:3,fontSize:h?10.5:11.5,fontWeight:950,color:"#111827"},children:a.name}),(0,f.jsx)("div",{style:{borderTop:"1px solid #111",paddingTop:5,fontSize:9.8,fontWeight:900},children:a.label})]},a.label))}),(0,f.jsxs)("footer",{style:{marginTop:8,borderTop:`1.5px solid ${P}`,paddingTop:4,display:"flex",justifyContent:"space-between",gap:10,fontSize:7.8,color:"#6b7280",fontWeight:700},children:[(0,f.jsxs)("span",{children:["Official academic transcript for ",K.schoolName]}),(0,f.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})]});return n?(0,f.jsxs)("div",{className:`src-preview-shell ${o?"expanded":""}`,children:[(0,f.jsx)("style",{children:S}),(0,f.jsxs)("div",{className:"src-mobile-toolbar report-no-print",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:R(G.studentName)}),(0,f.jsxs)("span",{children:[G.className," \xb7"," ",H.academicPeriod?.name||"Academic Period"]})]}),(0,f.jsxs)("div",{className:"src-zoom-controls","aria-label":"Report zoom controls",children:[(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>B("out"),onPointerDown:()=>D("out"),onPointerUp:C,onPointerCancel:C,onPointerLeave:C,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,f.jsx)("button",{type:"button",className:"src-zoom-fit-button",onClick:()=>{C(),p(!1),w(1),y(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,f.jsxs)("div",{className:"src-zoom-menu-wrap",children:[(0,f.jsxs)("button",{type:"button",className:"src-zoom-percent-button",onClick:()=>y(a=>!a),"aria-label":"Choose zoom percentage","aria-expanded":x,title:"Choose zoom percentage",children:[(0,f.jsxs)("span",{children:[A,"%"]}),(0,f.jsx)("span",{className:"src-zoom-caret",children:"▾"})]}),x&&(0,f.jsx)("div",{className:"src-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(a=>(0,f.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{C(),p(!0),w(Number((a/100).toFixed(4))),y(!1)},className:`src-zoom-menu-item ${Math.round(100*z)===a?"active":""}`,children:[a,"%"]},a))})]}),(0,f.jsx)("button",{type:"button",className:"src-zoom-icon-button",onClick:()=>B("in"),onPointerDown:()=>D("in"),onPointerUp:C,onPointerCancel:C,onPointerLeave:C,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,f.jsx)("div",{ref:q,className:"src-preview-scroll report-screen-scroll",style:{"--report-preview-scale":z},children:(0,f.jsx)("div",{className:"src-preview-center",children:(0,f.jsx)("div",{className:"src-preview-scale",children:ai})})})]}):ai},fileName:"UniversityTranscriptTemplate.tsx",aliases:["university","transcript","university_transcript","academic_transcript","record"]}];function U(a){return(0,e.tU)(a)}function V(a){let b=U(a||e.u_);return T.find(a=>{let c=U(a.code),d=U(a.layoutKey),e=(a.aliases||[]).map(U);return c===b||d===b||e.includes(b)})||T[0]}function W(a){return V(a).component}function X(a){let{component:b,aliases:c,fileName:d,...e}=V(a);return e}},96157:(a,b,c)=>{c.d(b,{J:()=>e});var d=c(67484);function e(a=!0){let b=(0,d.useRef)(!1),c=(0,d.useRef)(a),[f,g]=(0,d.useState)(a),[h,i]=(0,d.useState)(!1),[j,k]=(0,d.useState)(!1),l=(0,d.useCallback)(a=>{let d="function"==typeof a?a(c.current):a;(c.current=d,d)?b.current?i(!0):g(!0):(b.current=!0,k(!0),g(!1),i(!1))},[]),m=(0,d.useCallback)(async a=>{l(!0);try{return await a()}finally{l(!1)}},[l]);return{loading:f,initialLoading:f,refreshing:h,hasLoaded:j,setLoading:l,run:m,reset:(0,d.useCallback)(()=>{b.current=!1,c.current=a,k(!1),g(a),i(!1)},[a])}}},99867:(a,b,c)=>{c.d(b,{f:()=>d});async function d({targetId:a,mode:b="single-student",orientation:c,pageSize:e="A4",title:f,onBeforePrint:g,onAfterPrint:h}){}}};
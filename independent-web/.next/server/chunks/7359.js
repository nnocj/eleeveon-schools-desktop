"use strict";exports.id=7359,exports.ids=[7359],exports.modules={55264:(a,b,c)=>{c.d(b,{A:()=>f});var d=c(48249);function e(...a){for(let b of a)if("string"==typeof b&&b.trim())return b.trim();return""}function f({header:a,title:b,subtitle:c,orientation:h="portrait",compact:i=!1,showLogo:j=!0,showContact:k=!0}){let l=a.branding,m=l.primaryColor||"var(--primary-color)",n=e(l.resolvedLogoUrl,a.resolvedLogoUrl,a.schoolBranchSetting?.resolvedLogoUrl,a.schoolBranchSetting?.logo,a.branch?.resolvedLogoUrl,a.branch?.logo,a.school?.resolvedLogoUrl,a.school?.logo,l.logo),o=e(a.branch?.name,a.branchName,a.branchLabel,a.campusName,l.branchName,l.branchLabel,l.campusName),p=e(l.branchAddress,a.branchAddress,a.branch?.address,l.address);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("style",{children:g}),(0,d.jsxs)("div",{className:`rh-wrapper ${i?"compact":""} ${h}`,style:{borderBottom:`4px solid ${m}`,color:"#111",fontFamily:l.fontFamily||"Arial, sans-serif","--report-primary":m,"--logo-size":`${i?56:"landscape"===h?74:70}px`},children:[(0,d.jsxs)("div",{className:"rh-top",children:[j&&(0,d.jsx)("div",{className:"rh-logo-wrap",children:n?(0,d.jsx)("img",{src:n,alt:"School logo",className:"rh-logo"}):(0,d.jsx)("div",{className:"rh-logo-placeholder",children:"LOGO"})}),(0,d.jsxs)("div",{className:"rh-center",children:[(0,d.jsx)("h1",{className:"rh-school-name",children:l.schoolName||"School Name"}),l.motto&&(0,d.jsx)("div",{className:"rh-motto",children:l.motto}),k&&(0,d.jsxs)("div",{className:"rh-contact",children:[o&&(0,d.jsx)("div",{className:"rh-line",children:o}),p&&(0,d.jsx)("div",{className:"rh-line",children:p}),(l.phone||l.email||l.website)&&(0,d.jsxs)("div",{className:"rh-line rh-contact-row",children:[l.phone&&(0,d.jsxs)("span",{children:["Tel: ",l.phone]}),l.email&&(0,d.jsxs)("span",{children:["Email: ",l.email]}),l.website&&(0,d.jsx)("span",{children:l.website})]})]}),(0,d.jsx)("div",{className:"rh-title-pill",children:b}),c&&(0,d.jsx)("div",{className:"rh-subtitle",children:c})]}),j&&(0,d.jsx)("div",{className:"rh-spacer"})]}),(0,d.jsxs)("div",{className:"rh-meta-grid",children:[(0,d.jsxs)("div",{className:"rh-meta-item",children:[(0,d.jsx)("strong",{children:"Academic Level:"}),(0,d.jsx)("span",{children:a.academicStructure?.name||"-"})]}),(0,d.jsxs)("div",{className:"rh-meta-item",children:[(0,d.jsx)("strong",{children:"Period:"}),(0,d.jsx)("span",{children:a.academicPeriod?.name||"-"})]}),(0,d.jsxs)("div",{className:"rh-meta-item",children:[(0,d.jsx)("strong",{children:"Class:"}),(0,d.jsx)("span",{children:a.classData?.name||"-"})]}),(0,d.jsxs)("div",{className:"rh-meta-item",children:[(0,d.jsx)("strong",{children:"Branch:"}),(0,d.jsx)("span",{children:o||"-"})]})]})]})]})}c(67484);let g=`
.rh-wrapper {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  padding-bottom: 10px;
  margin-bottom: 12px;
}

.rh-top {
  display: grid;
  grid-template-columns: var(--logo-size) minmax(0, 1fr) var(--logo-size);
  align-items: center;
  gap: 12px;
}

.rh-logo-wrap,
.rh-spacer {
  width: var(--logo-size);
  height: var(--logo-size);
  flex: 0 0 auto;
}

.rh-logo-wrap {
  border: 1px solid #ddd;
  border-radius: 14px;
  overflow: hidden;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rh-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.rh-logo-placeholder {
  font-size: 10px;
  color: #777;
  font-weight: 700;
}

.rh-center {
  min-width: 0;
  text-align: center;
}

.rh-school-name {
  margin: 0;
  color: var(--report-primary);
  font-size: 24px;
  line-height: 1.12;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 950;
  overflow-wrap: anywhere;
}

.rh-wrapper.compact .rh-school-name {
  font-size: 18px;
}

.rh-wrapper.landscape .rh-school-name {
  font-size: 24px;
}

.rh-motto {
  margin-top: 3px;
  font-size: 12px;
  font-style: italic;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.rh-wrapper.compact .rh-motto {
  font-size: 10px;
}

.rh-contact {
  margin-top: 5px;
  font-size: 10px;
  line-height: 1.35;
}

.rh-wrapper.compact .rh-contact {
  font-size: 8.5px;
}

.rh-line {
  overflow-wrap: anywhere;
}

.rh-contact-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.rh-title-pill {
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  background: #111;
  color: #fff;
  font-size: 12px;
  font-weight: 950;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  border-radius: 999px;
  text-align: center;
  max-width: 100%;
  overflow-wrap: anywhere;
}

.rh-wrapper.compact .rh-title-pill {
  padding: 4px 10px;
  font-size: 10px;
}

.rh-subtitle {
  margin-top: 5px;
  font-size: 11px;
  font-weight: 700;
  color: #333;
  overflow-wrap: anywhere;
}

.rh-wrapper.compact .rh-subtitle {
  font-size: 9px;
}

.rh-meta-grid {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 6px;
  font-size: 10px;
}

.rh-wrapper.compact .rh-meta-grid {
  font-size: 8.5px;
}

.rh-meta-item {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px 8px;
  border-radius: 10px;
  background: rgba(148,163,184,.08);
  border: 1px solid rgba(148,163,184,.18);
}

.rh-meta-item strong,
.rh-meta-item span {
  overflow: hidden;
  text-overflow: ellipsis;
}

.rh-meta-item span {
  white-space: nowrap;
}

@media (max-width: 720px) {
  .rh-wrapper {
    padding-bottom: 8px;
    margin-bottom: 10px;
  }

  .rh-top {
    grid-template-columns: 54px minmax(0, 1fr);
    align-items: start;
    gap: 10px;
  }

  .rh-spacer {
    display: none;
  }

  .rh-logo-wrap {
    width: 54px;
    height: 54px;
    border-radius: 12px;
  }

  .rh-center {
    text-align: left;
  }

  .rh-school-name {
    font-size: 16px !important;
    letter-spacing: 0.2px;
    line-height: 1.15;
  }

  .rh-motto {
    margin-top: 2px;
    font-size: 9px !important;
  }

  .rh-contact {
    margin-top: 4px;
    font-size: 8px !important;
  }

  .rh-contact-row {
    justify-content: flex-start;
  }

  .rh-title-pill {
    margin-top: 6px;
    width: 100%;
    justify-content: center;
    padding: 5px 10px;
    font-size: 9px !important;
    border-radius: 999px;
  }

  .rh-subtitle {
    margin-top: 4px;
    font-size: 8px !important;
    line-height: 1.35;
  }

  .rh-meta-grid {
    margin-top: 8px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px;
    font-size: 8px !important;
  }

  .rh-meta-item {
    padding: 5px 6px;
    border-radius: 9px;
  }
}

@media (max-width: 420px) {
  .rh-top {
    grid-template-columns: 46px minmax(0, 1fr);
    gap: 8px;
  }

  .rh-logo-wrap {
    width: 46px;
    height: 46px;
    border-radius: 10px;
  }

  .rh-school-name {
    font-size: 14px !important;
  }

  .rh-motto {
    font-size: 8px !important;
  }

  .rh-contact {
    font-size: 7.5px !important;
  }

  .rh-title-pill {
    font-size: 8px !important;
    padding: 4px 8px;
  }

  .rh-subtitle {
    font-size: 7.5px !important;
  }

  .rh-meta-grid {
    grid-template-columns: 1fr;
  }
}

@media print {
  .rh-wrapper {
    overflow: visible !important;
  }
}
`},66169:(a,b,c)=>{c.d(b,{A:()=>k});var d=c(48249),e=c(67484),f=c(55264);let g=(a,b=1)=>null==a||Number.isNaN(a)?"0":Number(a).toFixed(b),h=a=>a?a.charAt(0).toUpperCase()+a.slice(1):"-",i=a=>"promote"===a?"#16a34a":"repeat"===a?"#dc2626":"graduate"===a?"#2563eb":"#111827",j=(a,b)=>String(a.id??a.snapshotId??b);function k({steps:a=[],header:b,studentName:c,compact:m=!1,pageBreakAfter:n=!0,mobilePreview:o=!0}){let p=b.branding,q=p.primaryColor||"var(--primary-color)",[r,s]=(0,e.useState)(!1),[t,u]=(0,e.useState)({}),v=(0,e.useMemo)(()=>a.filter(a=>"promote"===a.finalDecision).length,[a]),w=(0,e.useMemo)(()=>a.filter(a=>"repeat"===a.finalDecision).length,[a]),x=(0,e.useMemo)(()=>a.filter(a=>"graduate"===a.finalDecision).length,[a]),y={width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:m?"9mm":"11mm",boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:p.fontFamily||"Arial, sans-serif",border:"1px solid #e5e5e5",position:"relative",overflow:"hidden",pageBreakAfter:n?"always":"auto"},z={border:"1px solid #222",padding:m?3:5,background:q,color:"#fff",textAlign:"center",fontWeight:800,lineHeight:1.15,whiteSpace:"nowrap"},A={border:"1px solid #222",padding:m?3:5,verticalAlign:"middle",lineHeight:1.2},B={border:"1px solid #ddd",borderRadius:12,padding:m?8:10,background:"#fafafa"},C=(0,d.jsxs)("section",{className:"print-page report-page-break student-progression-timeline-page spt-a4-page",style:y,children:[(0,d.jsx)(f.A,{header:b,title:"Student Progression Timeline",subtitle:c?`${c} • ${a.length} Progression Records`:`${a.length} Progression Records`,orientation:"portrait",compact:m}),(0,d.jsxs)("div",{className:"spt-summary-print-grid",children:[(0,d.jsxs)("div",{style:B,children:[(0,d.jsx)("div",{className:"spt-summary-label",children:"Records"}),(0,d.jsx)("div",{className:"spt-summary-value",style:{color:q},children:a.length})]}),(0,d.jsxs)("div",{style:B,children:[(0,d.jsx)("div",{className:"spt-summary-label",children:"Promoted"}),(0,d.jsx)("div",{className:"spt-summary-value",style:{color:"#16a34a"},children:v})]}),(0,d.jsxs)("div",{style:B,children:[(0,d.jsx)("div",{className:"spt-summary-label",children:"Repeated"}),(0,d.jsx)("div",{className:"spt-summary-value",style:{color:"#dc2626"},children:w})]}),(0,d.jsxs)("div",{style:B,children:[(0,d.jsx)("div",{className:"spt-summary-label",children:"Graduated"}),(0,d.jsx)("div",{className:"spt-summary-value",style:{color:"#2563eb"},children:x})]})]}),(0,d.jsxs)("div",{className:"spt-print-timeline",style:{borderLeftColor:q},children:[a.map((a,b)=>{var c;let e=j(a,b),f=t[e];return(0,d.jsxs)("div",{className:"spt-print-card",style:{background:"promote"===(c=a.finalDecision)?"rgba(22,163,74,0.10)":"repeat"===c?"rgba(220,38,38,0.10)":"graduate"===c?"rgba(37,99,235,0.10)":"rgba(17,24,39,0.06)"},children:[(0,d.jsx)("div",{className:"spt-print-dot",style:{background:i(a.finalDecision)}}),(0,d.jsx)("button",{type:"button",className:"spt-print-card-head report-no-print",onClick:()=>{u(a=>({...a,[e]:!a[e]}))},children:(0,d.jsx)("span",{children:"View Details"})}),(0,d.jsxs)("div",{className:"spt-card-layout",children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"spt-title",children:[b+1,". ",a.fromClassName||"Class"," →"," ",a.toClassName||h(a.finalDecision)]}),(0,d.jsxs)("div",{className:"spt-period-line",children:[a.fromAcademicPeriodName||a.fromAcademicStructureName||"-"," → ",a.toAcademicPeriodName||a.toAcademicStructureName||"-"]}),a.note&&(0,d.jsx)("div",{className:`spt-note ${f?"open":""}`,children:a.note})]}),(0,d.jsx)("div",{className:"spt-decision-pill",style:{borderColor:i(a.finalDecision),color:i(a.finalDecision)},children:h(a.finalDecision)})]}),(0,d.jsxs)("div",{className:"spt-mini-grid",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Average:"})," ",null!=a.average?`${g(a.average,1)}%`:"-"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Recommended:"})," ",h(a.recommendation)]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Snapshot:"})," ",a.snapshotId||"-"]})]})]},e)}),!a.length&&(0,d.jsx)("div",{className:"spt-empty-box",children:"No progression records found for this student."})]}),(0,d.jsx)("div",{className:"spt-table-wrap",children:(0,d.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:m?8.5:9.5},children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:z,children:"#"}),(0,d.jsx)("th",{style:z,children:"From Class"}),(0,d.jsx)("th",{style:z,children:"To Class"}),(0,d.jsx)("th",{style:z,children:"From Period"}),(0,d.jsx)("th",{style:z,children:"To Period"}),(0,d.jsx)("th",{style:z,children:"Average"}),(0,d.jsx)("th",{style:z,children:"Recommendation"}),(0,d.jsx)("th",{style:z,children:"Final Decision"})]})}),(0,d.jsxs)("tbody",{children:[a.map((a,b)=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{...A,textAlign:"center"},children:b+1}),(0,d.jsx)("td",{style:A,children:a.fromClassName||"-"}),(0,d.jsx)("td",{style:A,children:a.toClassName||"-"}),(0,d.jsx)("td",{style:A,children:a.fromAcademicPeriodName||"-"}),(0,d.jsx)("td",{style:A,children:a.toAcademicPeriodName||"-"}),(0,d.jsx)("td",{style:{...A,textAlign:"center",fontWeight:800},children:null!=a.average?`${g(a.average,1)}%`:"-"}),(0,d.jsx)("td",{style:{...A,textAlign:"center"},children:h(a.recommendation)}),(0,d.jsx)("td",{style:{...A,textAlign:"center",fontWeight:900,color:i(a.finalDecision)},children:h(a.finalDecision)})]},`${j(a,b)}-table`)),!a.length&&(0,d.jsx)("tr",{children:(0,d.jsx)("td",{style:{...A,textAlign:"center",padding:14},colSpan:8,children:"No progression records found."})})]})]})}),(0,d.jsxs)("div",{className:"spt-footer",style:{borderTopColor:q},children:[(0,d.jsxs)("span",{children:["Official progression timeline generated for ",p.schoolName]}),(0,d.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]});return o?(0,d.jsxs)("div",{className:`spt-shell ${r?"expanded":""}`,children:[(0,d.jsx)("style",{children:l}),(0,d.jsxs)("div",{className:"spt-toolbar report-no-print",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:c||"Progression Timeline"}),(0,d.jsxs)("span",{children:[a.length," records \xb7 ",v," promoted \xb7 ",w," repeated"]})]}),(0,d.jsx)("button",{type:"button",onClick:()=>s(a=>!a),children:r?"Fit Preview":"Expand"})]}),(0,d.jsx)("div",{className:"spt-preview-scroll report-screen-scroll",children:(0,d.jsx)("div",{className:"spt-preview-scale",children:C})})]}):(0,d.jsxs)("div",{className:"spt-shell",children:[(0,d.jsx)("style",{children:l}),C]})}let l=`
.spt-shell {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
}

.spt-toolbar {
  display: none;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.22);
  box-shadow: 0 10px 24px rgba(15,23,42,.06);
}

.spt-toolbar div {
  min-width: 0;
}

.spt-toolbar strong,
.spt-toolbar span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.spt-toolbar strong {
  font-size: 13px;
  font-weight: 950;
  color: var(--text, #0f172a);
}

.spt-toolbar span {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 750;
}

.spt-toolbar button {
  flex: 0 0 auto;
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.spt-preview-scroll {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow-x: auto;
  overflow-y: visible;
  -webkit-overflow-scrolling: touch;
  padding: 8px;
  border-radius: 22px;
  background: rgba(148,163,184,.08);
  border: 1px solid rgba(148,163,184,.18);
}

.spt-preview-scale {
  width: max-content;
  min-width: 100%;
  transform-origin: top left;
}

.spt-summary-print-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 6px;
  margin-bottom: 12px;
}

.spt-summary-print-grid > div {
  min-width: 0;
  overflow: hidden;
}

.spt-summary-label {
  display: block;
  max-width: 100%;
  font-size: 8px;
  line-height: 1.15;
  opacity: 0.72;
  font-weight: 900;
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.spt-summary-value {
  margin-top: 3px;
  font-size: 18px;
  line-height: 1;
  font-weight: 900;
}

.spt-print-timeline {
  border-left: 4px solid;
  padding-left: 14px;
  display: grid;
  gap: 10px;
  margin-bottom: 14px;
}

.spt-print-card {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 14px;
  padding: 10px;
  break-inside: avoid;
}

.spt-print-dot {
  position: absolute;
  left: -25px;
  top: 14px;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  border: 3px solid #fff;
  box-shadow: 0 0 0 1px #ddd;
}

.spt-print-card-head {
  display: none;
}

.spt-card-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 10px;
  align-items: start;
}

.spt-title {
  font-size: 11.5px;
  font-weight: 900;
  overflow-wrap: anywhere;
}

.spt-period-line {
  margin-top: 4px;
  font-size: 9.5px;
  opacity: 0.78;
  font-weight: 650;
  overflow-wrap: anywhere;
}

.spt-note {
  margin-top: 6px;
  font-size: 9.5px;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.spt-decision-pill {
  min-width: 90px;
  text-align: center;
  border-radius: 999px;
  padding: 6px 10px;
  background: #fff;
  border: 1px solid;
  font-weight: 900;
  font-size: 9.5px;
}

.spt-mini-grid {
  margin-top: 8px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px;
  font-size: 9px;
}

.spt-mini-grid div {
  min-width: 0;
  overflow-wrap: anywhere;
}

.spt-empty-box {
  padding: 20px;
  border: 1px dashed #bbb;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
}

.spt-table-wrap {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
}

.spt-footer {
  margin-top: 10px;
  border-top: 2px solid;
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 8.5px;
  color: #555;
}

@media screen and (max-width: 720px) {
  .spt-summary-print-grid {
    gap: 4px;
  }

  .spt-summary-print-grid > div {
    padding: 6px !important;
    border-radius: 9px !important;
  }

  .spt-summary-label {
    font-size: 6.8px;
    letter-spacing: -0.15px;
  }

  .spt-summary-value {
    font-size: 14px;
  }

  .spt-toolbar {
    display: flex;
  }

  .spt-shell:not(.expanded) .spt-preview-scroll {
    overflow: hidden;
    max-height: 82vh;
  }

  .spt-shell:not(.expanded) .spt-preview-scale {
    width: 210mm;
    transform: scale(calc((100vw - 28px) / 793.7008));
    transform-origin: top left;
  }

  .spt-shell:not(.expanded) .spt-preview-scroll::after {
    content: "";
    display: block;
    height: calc(1122.5197px * ((100vw - 28px) / 793.7008));
  }

  .spt-shell.expanded .spt-preview-scroll {
    overflow-x: auto;
    max-height: none;
  }

  .spt-shell.expanded .spt-preview-scale {
    transform: none;
  }

  .spt-print-card-head {
    display: inline-flex;
    margin-bottom: 8px;
    border: 0;
    border-radius: 999px;
    padding: 5px 9px;
    background: rgba(255,255,255,.72);
    color: #111827;
    font-size: 9px;
    font-weight: 900;
  }

  .spt-card-layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .spt-decision-pill {
    width: fit-content;
    min-width: 0;
  }

  .spt-note:not(.open) {
    display: none;
  }

  .spt-mini-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media print {
  .spt-shell,
  .spt-preview-scroll,
  .spt-preview-scale {
    display: contents !important;
    transform: none !important;
    overflow: visible !important;
    padding: 0 !important;
    border: 0 !important;
    background: transparent !important;
  }

  .spt-toolbar,
  .spt-print-card-head {
    display: none !important;
  }

  .spt-note {
    display: block !important;
  }
}
`},96747:(a,b,c)=>{c.d(b,{A:()=>i});var d=c(48249),e=c(67484),f=c(55264);let g=(a,b=1)=>null==a||Number.isNaN(a)?"0":Number(a).toFixed(b),h=a=>a?a.charAt(0).toUpperCase()+a.slice(1):"-";function i({summary:a,header:b,compact:c=!1,pageBreakAfter:k=!0,mobilePreview:l=!0}){let[m,n]=(0,e.useState)(!1),o=b.branding,p=o.primaryColor||"var(--primary-color)",q={width:"297mm",minHeight:"210mm",margin:"0 auto 20px",padding:c?"8mm":"10mm",boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:o.fontFamily||"Arial, sans-serif",border:"1px solid #e5e5e5",pageBreakAfter:k?"always":"auto",overflow:"hidden"},r={border:"1px solid #222",padding:c?3:5,background:p,color:"#fff",textAlign:"center",fontWeight:800,lineHeight:1.15,whiteSpace:"nowrap"},s={border:"1px solid #222",padding:c?3:5,verticalAlign:"middle",lineHeight:1.2},t=(0,d.jsxs)("section",{style:q,children:[(0,d.jsx)(f.A,{header:b,title:"Promotion Summary",orientation:"landscape",compact:c}),(0,d.jsx)("div",{className:"ps-empty-box",children:"Select a class, period, academic year or decision filter to generate promotion intelligence."})]});if(!a)return(0,d.jsxs)("div",{className:"ps-shell",children:[(0,d.jsx)("style",{children:j}),t]});let u=(0,d.jsxs)("section",{className:"print-page report-page-break promotion-summary-page ps-a4-page",style:q,children:[(0,d.jsx)(f.A,{header:b,title:"Promotion Summary",subtitle:`${a.totalStudents} Students • ${a.promoteCount} Promoted • ${a.repeatCount} Repeated • ${a.graduateCount} Graduated`,orientation:"landscape",compact:c}),(0,d.jsxs)("div",{className:"ps-summary-strip",children:[(0,d.jsxs)("div",{className:"ps-summary-cell",children:[(0,d.jsx)("strong",{children:"Students:"})," ",a.totalStudents]}),(0,d.jsxs)("div",{className:"ps-summary-cell",children:[(0,d.jsx)("strong",{children:"Promoted:"})," ",a.promoteCount]}),(0,d.jsxs)("div",{className:"ps-summary-cell",children:[(0,d.jsx)("strong",{children:"Repeated:"})," ",a.repeatCount]}),(0,d.jsxs)("div",{className:"ps-summary-cell",children:[(0,d.jsx)("strong",{children:"Graduated:"})," ",a.graduateCount]}),(0,d.jsxs)("div",{className:"ps-summary-cell",children:[(0,d.jsx)("strong",{children:"Promotion Rate:"})," ",g(a.promotionRate,1),"%"]}),(0,d.jsxs)("div",{className:"ps-summary-cell",children:[(0,d.jsx)("strong",{children:"Repeat Rate:"})," ",g(a.repeatRate,1),"%"]}),(0,d.jsxs)("div",{className:"ps-summary-cell",children:[(0,d.jsx)("strong",{children:"Average:"})," ",g(a.averageScore,1),"%"]})]}),(0,d.jsxs)("div",{className:"ps-decision-grid",children:[(0,d.jsxs)("div",{className:"ps-decision-card",children:[(0,d.jsx)("div",{className:"ps-card-label",children:"Promotion Rate"}),(0,d.jsxs)("div",{className:"ps-card-value green",children:[g(a.promotionRate,1),"%"]})]}),(0,d.jsxs)("div",{className:"ps-decision-card",children:[(0,d.jsx)("div",{className:"ps-card-label",children:"Repeat Rate"}),(0,d.jsxs)("div",{className:"ps-card-value red",children:[g(a.repeatRate,1),"%"]})]}),(0,d.jsxs)("div",{className:"ps-decision-card",children:[(0,d.jsx)("div",{className:"ps-card-label",children:"Graduation Rate"}),(0,d.jsxs)("div",{className:"ps-card-value blue",children:[g(a.graduationRate,1),"%"]})]})]}),(0,d.jsx)("div",{className:"ps-table-wrap",children:(0,d.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:c?8.5:9.5},children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:r,children:"#"}),(0,d.jsx)("th",{style:{...r,textAlign:"left",minWidth:190},children:"Student Name"}),(0,d.jsx)("th",{style:r,children:"Admission No."}),(0,d.jsx)("th",{style:r,children:"From Class"}),(0,d.jsx)("th",{style:r,children:"To Class"}),(0,d.jsx)("th",{style:r,children:"Average"}),(0,d.jsx)("th",{style:r,children:"Recommendation"}),(0,d.jsx)("th",{style:r,children:"Final Decision"}),(0,d.jsx)("th",{style:{...r,minWidth:190},children:"Note"})]})}),(0,d.jsxs)("tbody",{children:[a.rows.map((a,b)=>{var c;return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{...s,textAlign:"center"},children:b+1}),(0,d.jsx)("td",{style:{...s,fontWeight:800},children:a.studentName}),(0,d.jsx)("td",{style:{...s,textAlign:"center"},children:a.admissionNumber||"-"}),(0,d.jsx)("td",{style:{...s,textAlign:"center"},children:a.fromClassName||"-"}),(0,d.jsx)("td",{style:{...s,textAlign:"center"},children:a.toClassName||"-"}),(0,d.jsx)("td",{style:{...s,textAlign:"center",fontWeight:800},children:null!=a.average?`${g(a.average,1)}%`:"-"}),(0,d.jsx)("td",{style:{...s,textAlign:"center"},children:h(a.recommendation)}),(0,d.jsx)("td",{style:{...s,textAlign:"center",fontWeight:900,color:"promote"===(c=a.finalDecision)?"#16a34a":"repeat"===c?"#dc2626":"graduate"===c?"#2563eb":"#111"},children:h(a.finalDecision)}),(0,d.jsx)("td",{style:s,children:a.note||""})]},`${a.studentId}-${b}`)}),!a.rows.length&&(0,d.jsx)("tr",{children:(0,d.jsx)("td",{style:{...s,textAlign:"center",padding:16},colSpan:9,children:"No promotion records found for the selected filters."})})]})]})}),(0,d.jsxs)("div",{className:"ps-footer",style:{borderTopColor:p},children:[(0,d.jsxs)("span",{children:["Official promotion summary generated for ",o.schoolName]}),(0,d.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]});return l?(0,d.jsxs)("div",{className:`ps-shell ${m?"expanded":""}`,children:[(0,d.jsx)("style",{children:j}),(0,d.jsxs)("div",{className:"ps-toolbar report-no-print",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Promotion Summary"}),(0,d.jsxs)("span",{children:[a.totalStudents," students \xb7 ",a.promoteCount," promoted \xb7"," ",a.repeatCount," repeated"]})]}),(0,d.jsx)("button",{type:"button",onClick:()=>n(a=>!a),children:m?"Fit Preview":"Expand"})]}),(0,d.jsx)("div",{className:"ps-preview-scroll report-screen-scroll",children:(0,d.jsx)("div",{className:"ps-preview-scale",children:u})})]}):(0,d.jsxs)("div",{className:"ps-shell",children:[(0,d.jsx)("style",{children:j}),u]})}let j=`
.ps-shell {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
}

.ps-toolbar {
  display: none;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 18px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.22);
  box-shadow: 0 10px 24px rgba(15,23,42,.06);
}

.ps-toolbar div {
  min-width: 0;
}

.ps-toolbar strong,
.ps-toolbar span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ps-toolbar strong {
  font-size: 13px;
  font-weight: 950;
  color: var(--text, #0f172a);
}

.ps-toolbar span {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 750;
}

.ps-toolbar button {
  flex: 0 0 auto;
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.ps-preview-scroll {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow-x: auto;
  overflow-y: visible;
  -webkit-overflow-scrolling: touch;
  padding: 8px;
  border-radius: 22px;
  background: rgba(148,163,184,.08);
  border: 1px solid rgba(148,163,184,.18);
}

.ps-preview-scale {
  width: max-content;
  min-width: 100%;
  transform-origin: top left;
}

.ps-empty-box {
  padding: 20px;
  border: 1px dashed #bbb;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
}

.ps-summary-strip {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 6px;
  margin-bottom: 10px;
  font-size: 8.4px;
}

.ps-summary-cell {
  min-width: 0;
  overflow: hidden;
  border: 1px solid #ccc;
  padding: 5px;
  line-height: 1.18;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.ps-summary-cell strong {
  font-weight: 900;
}

.ps-decision-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px;
  margin-bottom: 10px;
}

.ps-decision-card {
  min-width: 0;
  overflow: hidden;
  border: 1px solid #222;
  padding: 7px;
  text-align: center;
}

.ps-card-label {
  display: block;
  max-width: 100%;
  font-size: 8px;
  line-height: 1.15;
  opacity: 0.75;
  font-weight: 900;
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.ps-card-value {
  margin-top: 3px;
  font-size: 17px;
  line-height: 1;
  font-weight: 900;
}

.ps-card-value.green { color: #16a34a; }
.ps-card-value.red { color: #dc2626; }
.ps-card-value.blue { color: #2563eb; }

.ps-table-wrap {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
}

.ps-footer {
  margin-top: 10px;
  border-top: 2px solid;
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 8.5px;
  color: #555;
}

@media screen and (max-width: 720px) {
  .ps-toolbar {
    display: flex;
  }

  .ps-shell:not(.expanded) .ps-preview-scroll {
    overflow: hidden;
    max-height: 78vh;
  }

  .ps-shell:not(.expanded) .ps-preview-scale {
    width: 297mm;
    transform: scale(calc((100vw - 28px) / 1122.5197));
    transform-origin: top left;
  }

  .ps-shell:not(.expanded) .ps-preview-scroll::after {
    content: "";
    display: block;
    height: calc(793.7008px * ((100vw - 28px) / 1122.5197));
  }

  .ps-shell.expanded .ps-preview-scroll {
    overflow-x: auto;
    max-height: none;
  }

  .ps-shell.expanded .ps-preview-scale {
    transform: none;
  }

  .ps-summary-strip {
    gap: 4px;
    font-size: 6.4px;
  }

  .ps-summary-cell {
    padding: 4px;
  }

  .ps-decision-grid {
    gap: 4px;
  }

  .ps-decision-card {
    padding: 5px;
  }

  .ps-card-label {
    font-size: 6.8px;
    letter-spacing: -0.15px;
  }

  .ps-card-value {
    font-size: 13px;
  }
}

@media print {
  .ps-shell,
  .ps-preview-scroll,
  .ps-preview-scale {
    display: contents !important;
    transform: none !important;
    overflow: visible !important;
    padding: 0 !important;
    border: 0 !important;
    background: transparent !important;
  }

  .ps-toolbar {
    display: none !important;
  }
}
`}};
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7567],{3721:(e,r,t)=>{t.d(r,{A:()=>a});var s=t(95155);function i(...e){for(let r of e)if("string"==typeof r&&r.trim())return r.trim();return""}function a({header:e,title:r,subtitle:t,orientation:n="portrait",compact:l=!1,showLogo:d=!0,showContact:p=!0}){let c=e.branding,m=c.primaryColor||"var(--primary-color)",h=i(c.resolvedLogoUrl,e.resolvedLogoUrl,e.schoolBranchSetting?.resolvedLogoUrl,e.schoolBranchSetting?.logo,e.branch?.resolvedLogoUrl,e.branch?.logo,e.school?.resolvedLogoUrl,e.school?.logo,c.logo),x=i(e.branch?.name,e.branchName,e.branchLabel,e.campusName,c.branchName,c.branchLabel,c.campusName),g=i(c.branchAddress,e.branchAddress,e.branch?.address,c.address);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{children:o}),(0,s.jsxs)("div",{className:`rh-wrapper ${l?"compact":""} ${n}`,style:{borderBottom:`4px solid ${m}`,color:"#111",fontFamily:c.fontFamily||"Arial, sans-serif","--report-primary":m,"--logo-size":`${l?56:"landscape"===n?74:70}px`},children:[(0,s.jsxs)("div",{className:"rh-top",children:[d&&(0,s.jsx)("div",{className:"rh-logo-wrap",children:h?(0,s.jsx)("img",{src:h,alt:"School logo",className:"rh-logo"}):(0,s.jsx)("div",{className:"rh-logo-placeholder",children:"LOGO"})}),(0,s.jsxs)("div",{className:"rh-center",children:[(0,s.jsx)("h1",{className:"rh-school-name",children:c.schoolName||"School Name"}),c.motto&&(0,s.jsx)("div",{className:"rh-motto",children:c.motto}),p&&(0,s.jsxs)("div",{className:"rh-contact",children:[x&&(0,s.jsx)("div",{className:"rh-line",children:x}),g&&(0,s.jsx)("div",{className:"rh-line",children:g}),(c.phone||c.email||c.website)&&(0,s.jsxs)("div",{className:"rh-line rh-contact-row",children:[c.phone&&(0,s.jsxs)("span",{children:["Tel: ",c.phone]}),c.email&&(0,s.jsxs)("span",{children:["Email: ",c.email]}),c.website&&(0,s.jsx)("span",{children:c.website})]})]}),(0,s.jsx)("div",{className:"rh-title-pill",children:r}),t&&(0,s.jsx)("div",{className:"rh-subtitle",children:t})]}),d&&(0,s.jsx)("div",{className:"rh-spacer"})]}),(0,s.jsxs)("div",{className:"rh-meta-grid",children:[(0,s.jsxs)("div",{className:"rh-meta-item",children:[(0,s.jsx)("strong",{children:"Academic Level:"}),(0,s.jsx)("span",{children:e.academicStructure?.name||"-"})]}),(0,s.jsxs)("div",{className:"rh-meta-item",children:[(0,s.jsx)("strong",{children:"Period:"}),(0,s.jsx)("span",{children:e.academicPeriod?.name||"-"})]}),(0,s.jsxs)("div",{className:"rh-meta-item",children:[(0,s.jsx)("strong",{children:"Class:"}),(0,s.jsx)("span",{children:e.classData?.name||"-"})]}),(0,s.jsxs)("div",{className:"rh-meta-item",children:[(0,s.jsx)("strong",{children:"Branch:"}),(0,s.jsx)("span",{children:x||"-"})]})]})]})]})}t(12115);let o=`
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
`},78793:(e,r,t)=>{t.d(r,{A:()=>l});var s=t(95155),i=t(12115),a=t(3721);let o=(e,r=1)=>null==e||Number.isNaN(e)?"0":Number(e).toFixed(r),n=e=>e?e.charAt(0).toUpperCase()+e.slice(1):"-";function l({summary:e,header:r,compact:t=!1,pageBreakAfter:p=!0,mobilePreview:c=!0}){let[m,h]=(0,i.useState)(!1),x=r.branding,g=x.primaryColor||"var(--primary-color)",f={width:"297mm",minHeight:"210mm",margin:"0 auto 20px",padding:t?"8mm":"10mm",boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:x.fontFamily||"Arial, sans-serif",border:"1px solid #e5e5e5",pageBreakAfter:p?"always":"auto",overflow:"hidden"},b={border:"1px solid #222",padding:t?3:5,background:g,color:"#fff",textAlign:"center",fontWeight:800,lineHeight:1.15,whiteSpace:"nowrap"},w={border:"1px solid #222",padding:t?3:5,verticalAlign:"middle",lineHeight:1.2},u=(0,s.jsxs)("section",{style:f,children:[(0,s.jsx)(a.A,{header:r,title:"Promotion Summary",orientation:"landscape",compact:t}),(0,s.jsx)("div",{className:"ps-empty-box",children:"Select a class, period, academic year or decision filter to generate promotion intelligence."})]});if(!e)return(0,s.jsxs)("div",{className:"ps-shell",children:[(0,s.jsx)("style",{children:d}),u]});let v=(0,s.jsxs)("section",{className:"print-page report-page-break promotion-summary-page ps-a4-page",style:f,children:[(0,s.jsx)(a.A,{header:r,title:"Promotion Summary",subtitle:`${e.totalStudents} Students • ${e.promoteCount} Promoted • ${e.repeatCount} Repeated • ${e.graduateCount} Graduated`,orientation:"landscape",compact:t}),(0,s.jsxs)("div",{className:"ps-summary-strip",children:[(0,s.jsxs)("div",{className:"ps-summary-cell",children:[(0,s.jsx)("strong",{children:"Students:"})," ",e.totalStudents]}),(0,s.jsxs)("div",{className:"ps-summary-cell",children:[(0,s.jsx)("strong",{children:"Promoted:"})," ",e.promoteCount]}),(0,s.jsxs)("div",{className:"ps-summary-cell",children:[(0,s.jsx)("strong",{children:"Repeated:"})," ",e.repeatCount]}),(0,s.jsxs)("div",{className:"ps-summary-cell",children:[(0,s.jsx)("strong",{children:"Graduated:"})," ",e.graduateCount]}),(0,s.jsxs)("div",{className:"ps-summary-cell",children:[(0,s.jsx)("strong",{children:"Promotion Rate:"})," ",o(e.promotionRate,1),"%"]}),(0,s.jsxs)("div",{className:"ps-summary-cell",children:[(0,s.jsx)("strong",{children:"Repeat Rate:"})," ",o(e.repeatRate,1),"%"]}),(0,s.jsxs)("div",{className:"ps-summary-cell",children:[(0,s.jsx)("strong",{children:"Average:"})," ",o(e.averageScore,1),"%"]})]}),(0,s.jsxs)("div",{className:"ps-decision-grid",children:[(0,s.jsxs)("div",{className:"ps-decision-card",children:[(0,s.jsx)("div",{className:"ps-card-label",children:"Promotion Rate"}),(0,s.jsxs)("div",{className:"ps-card-value green",children:[o(e.promotionRate,1),"%"]})]}),(0,s.jsxs)("div",{className:"ps-decision-card",children:[(0,s.jsx)("div",{className:"ps-card-label",children:"Repeat Rate"}),(0,s.jsxs)("div",{className:"ps-card-value red",children:[o(e.repeatRate,1),"%"]})]}),(0,s.jsxs)("div",{className:"ps-decision-card",children:[(0,s.jsx)("div",{className:"ps-card-label",children:"Graduation Rate"}),(0,s.jsxs)("div",{className:"ps-card-value blue",children:[o(e.graduationRate,1),"%"]})]})]}),(0,s.jsx)("div",{className:"ps-table-wrap",children:(0,s.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:t?8.5:9.5},children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{style:b,children:"#"}),(0,s.jsx)("th",{style:{...b,textAlign:"left",minWidth:190},children:"Student Name"}),(0,s.jsx)("th",{style:b,children:"Admission No."}),(0,s.jsx)("th",{style:b,children:"From Class"}),(0,s.jsx)("th",{style:b,children:"To Class"}),(0,s.jsx)("th",{style:b,children:"Average"}),(0,s.jsx)("th",{style:b,children:"Recommendation"}),(0,s.jsx)("th",{style:b,children:"Final Decision"}),(0,s.jsx)("th",{style:{...b,minWidth:190},children:"Note"})]})}),(0,s.jsxs)("tbody",{children:[e.rows.map((e,r)=>{var t;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{style:{...w,textAlign:"center"},children:r+1}),(0,s.jsx)("td",{style:{...w,fontWeight:800},children:e.studentName}),(0,s.jsx)("td",{style:{...w,textAlign:"center"},children:e.admissionNumber||"-"}),(0,s.jsx)("td",{style:{...w,textAlign:"center"},children:e.fromClassName||"-"}),(0,s.jsx)("td",{style:{...w,textAlign:"center"},children:e.toClassName||"-"}),(0,s.jsx)("td",{style:{...w,textAlign:"center",fontWeight:800},children:null!=e.average?`${o(e.average,1)}%`:"-"}),(0,s.jsx)("td",{style:{...w,textAlign:"center"},children:n(e.recommendation)}),(0,s.jsx)("td",{style:{...w,textAlign:"center",fontWeight:900,color:"promote"===(t=e.finalDecision)?"#16a34a":"repeat"===t?"#dc2626":"graduate"===t?"#2563eb":"#111"},children:n(e.finalDecision)}),(0,s.jsx)("td",{style:w,children:e.note||""})]},`${e.studentId}-${r}`)}),!e.rows.length&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{style:{...w,textAlign:"center",padding:16},colSpan:9,children:"No promotion records found for the selected filters."})})]})]})}),(0,s.jsxs)("div",{className:"ps-footer",style:{borderTopColor:g},children:[(0,s.jsxs)("span",{children:["Official promotion summary generated for ",x.schoolName]}),(0,s.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]});return c?(0,s.jsxs)("div",{className:`ps-shell ${m?"expanded":""}`,children:[(0,s.jsx)("style",{children:d}),(0,s.jsxs)("div",{className:"ps-toolbar report-no-print",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Promotion Summary"}),(0,s.jsxs)("span",{children:[e.totalStudents," students \xb7 ",e.promoteCount," promoted \xb7"," ",e.repeatCount," repeated"]})]}),(0,s.jsx)("button",{type:"button",onClick:()=>h(e=>!e),children:m?"Fit Preview":"Expand"})]}),(0,s.jsx)("div",{className:"ps-preview-scroll report-screen-scroll",children:(0,s.jsx)("div",{className:"ps-preview-scale",children:v})})]}):(0,s.jsxs)("div",{className:"ps-shell",children:[(0,s.jsx)("style",{children:d}),v]})}let d=`
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
`},87239:(e,r,t)=>{t.d(r,{A:()=>p});var s=t(95155),i=t(12115),a=t(3721);let o=(e,r=1)=>null==e||Number.isNaN(e)?"0":Number(e).toFixed(r),n=e=>e?e.charAt(0).toUpperCase()+e.slice(1):"-",l=e=>"promote"===e?"#16a34a":"repeat"===e?"#dc2626":"graduate"===e?"#2563eb":"#111827",d=(e,r)=>String(e.id??e.snapshotId??r);function p({steps:e=[],header:r,studentName:t,compact:m=!1,pageBreakAfter:h=!0,mobilePreview:x=!0}){let g=r.branding,f=g.primaryColor||"var(--primary-color)",[b,w]=(0,i.useState)(!1),[u,v]=(0,i.useState)({}),y=(0,i.useMemo)(()=>e.filter(e=>"promote"===e.finalDecision).length,[e]),j=(0,i.useMemo)(()=>e.filter(e=>"repeat"===e.finalDecision).length,[e]),N=(0,i.useMemo)(()=>e.filter(e=>"graduate"===e.finalDecision).length,[e]),z={width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:m?"9mm":"11mm",boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:g.fontFamily||"Arial, sans-serif",border:"1px solid #e5e5e5",position:"relative",overflow:"hidden",pageBreakAfter:h?"always":"auto"},k={border:"1px solid #222",padding:m?3:5,background:f,color:"#fff",textAlign:"center",fontWeight:800,lineHeight:1.15,whiteSpace:"nowrap"},A={border:"1px solid #222",padding:m?3:5,verticalAlign:"middle",lineHeight:1.2},C={border:"1px solid #ddd",borderRadius:12,padding:m?8:10,background:"#fafafa"},S=(0,s.jsxs)("section",{className:"print-page report-page-break student-progression-timeline-page spt-a4-page",style:z,children:[(0,s.jsx)(a.A,{header:r,title:"Student Progression Timeline",subtitle:t?`${t} • ${e.length} Progression Records`:`${e.length} Progression Records`,orientation:"portrait",compact:m}),(0,s.jsxs)("div",{className:"spt-summary-print-grid",children:[(0,s.jsxs)("div",{style:C,children:[(0,s.jsx)("div",{className:"spt-summary-label",children:"Records"}),(0,s.jsx)("div",{className:"spt-summary-value",style:{color:f},children:e.length})]}),(0,s.jsxs)("div",{style:C,children:[(0,s.jsx)("div",{className:"spt-summary-label",children:"Promoted"}),(0,s.jsx)("div",{className:"spt-summary-value",style:{color:"#16a34a"},children:y})]}),(0,s.jsxs)("div",{style:C,children:[(0,s.jsx)("div",{className:"spt-summary-label",children:"Repeated"}),(0,s.jsx)("div",{className:"spt-summary-value",style:{color:"#dc2626"},children:j})]}),(0,s.jsxs)("div",{style:C,children:[(0,s.jsx)("div",{className:"spt-summary-label",children:"Graduated"}),(0,s.jsx)("div",{className:"spt-summary-value",style:{color:"#2563eb"},children:N})]})]}),(0,s.jsxs)("div",{className:"spt-print-timeline",style:{borderLeftColor:f},children:[e.map((e,r)=>{var t;let i=d(e,r),a=u[i];return(0,s.jsxs)("div",{className:"spt-print-card",style:{background:"promote"===(t=e.finalDecision)?"rgba(22,163,74,0.10)":"repeat"===t?"rgba(220,38,38,0.10)":"graduate"===t?"rgba(37,99,235,0.10)":"rgba(17,24,39,0.06)"},children:[(0,s.jsx)("div",{className:"spt-print-dot",style:{background:l(e.finalDecision)}}),(0,s.jsx)("button",{type:"button",className:"spt-print-card-head report-no-print",onClick:()=>{v(e=>({...e,[i]:!e[i]}))},children:(0,s.jsx)("span",{children:"View Details"})}),(0,s.jsxs)("div",{className:"spt-card-layout",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"spt-title",children:[r+1,". ",e.fromClassName||"Class"," →"," ",e.toClassName||n(e.finalDecision)]}),(0,s.jsxs)("div",{className:"spt-period-line",children:[e.fromAcademicPeriodName||e.fromAcademicStructureName||"-"," → ",e.toAcademicPeriodName||e.toAcademicStructureName||"-"]}),e.note&&(0,s.jsx)("div",{className:`spt-note ${a?"open":""}`,children:e.note})]}),(0,s.jsx)("div",{className:"spt-decision-pill",style:{borderColor:l(e.finalDecision),color:l(e.finalDecision)},children:n(e.finalDecision)})]}),(0,s.jsxs)("div",{className:"spt-mini-grid",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Average:"})," ",null!=e.average?`${o(e.average,1)}%`:"-"]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Recommended:"})," ",n(e.recommendation)]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:"Snapshot:"})," ",e.snapshotId||"-"]})]})]},i)}),!e.length&&(0,s.jsx)("div",{className:"spt-empty-box",children:"No progression records found for this student."})]}),(0,s.jsx)("div",{className:"spt-table-wrap",children:(0,s.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:m?8.5:9.5},children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{style:k,children:"#"}),(0,s.jsx)("th",{style:k,children:"From Class"}),(0,s.jsx)("th",{style:k,children:"To Class"}),(0,s.jsx)("th",{style:k,children:"From Period"}),(0,s.jsx)("th",{style:k,children:"To Period"}),(0,s.jsx)("th",{style:k,children:"Average"}),(0,s.jsx)("th",{style:k,children:"Recommendation"}),(0,s.jsx)("th",{style:k,children:"Final Decision"})]})}),(0,s.jsxs)("tbody",{children:[e.map((e,r)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{style:{...A,textAlign:"center"},children:r+1}),(0,s.jsx)("td",{style:A,children:e.fromClassName||"-"}),(0,s.jsx)("td",{style:A,children:e.toClassName||"-"}),(0,s.jsx)("td",{style:A,children:e.fromAcademicPeriodName||"-"}),(0,s.jsx)("td",{style:A,children:e.toAcademicPeriodName||"-"}),(0,s.jsx)("td",{style:{...A,textAlign:"center",fontWeight:800},children:null!=e.average?`${o(e.average,1)}%`:"-"}),(0,s.jsx)("td",{style:{...A,textAlign:"center"},children:n(e.recommendation)}),(0,s.jsx)("td",{style:{...A,textAlign:"center",fontWeight:900,color:l(e.finalDecision)},children:n(e.finalDecision)})]},`${d(e,r)}-table`)),!e.length&&(0,s.jsx)("tr",{children:(0,s.jsx)("td",{style:{...A,textAlign:"center",padding:14},colSpan:8,children:"No progression records found."})})]})]})}),(0,s.jsxs)("div",{className:"spt-footer",style:{borderTopColor:f},children:[(0,s.jsxs)("span",{children:["Official progression timeline generated for ",g.schoolName]}),(0,s.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]});return x?(0,s.jsxs)("div",{className:`spt-shell ${b?"expanded":""}`,children:[(0,s.jsx)("style",{children:c}),(0,s.jsxs)("div",{className:"spt-toolbar report-no-print",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("strong",{children:t||"Progression Timeline"}),(0,s.jsxs)("span",{children:[e.length," records \xb7 ",y," promoted \xb7 ",j," repeated"]})]}),(0,s.jsx)("button",{type:"button",onClick:()=>w(e=>!e),children:b?"Fit Preview":"Expand"})]}),(0,s.jsx)("div",{className:"spt-preview-scroll report-screen-scroll",children:(0,s.jsx)("div",{className:"spt-preview-scale",children:S})})]}):(0,s.jsxs)("div",{className:"spt-shell",children:[(0,s.jsx)("style",{children:c}),S]})}let c=`
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
`}}]);
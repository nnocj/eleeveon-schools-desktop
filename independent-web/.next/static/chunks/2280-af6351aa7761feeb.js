"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2280],{6581:(e,t,r)=>{r.d(t,{A:()=>A});var i=r(95155),a=r(12115),o=r(44253),n=r(32242);function s(e){let t=e?.header?.branding||{},r=e?.header||{},i=e?.branding||{};return{schoolName:(0,n.ou)(i.schoolName,t.schoolName,r.schoolName,r.school?.name,"School Name"),branchName:(0,n.ou)(i.branchName,t.branchName,r.branchName,r.branch?.name),motto:(0,n.ou)(i.motto,t.motto,r.school?.motto),logo:(0,n.ou)(i.logo,i.resolvedLogoUrl,t.logo,t.resolvedLogoUrl,r.logo,r.resolvedLogoUrl,r.schoolBranchSetting?.logo,r.schoolBranchSetting?.resolvedLogoUrl,r.school?.logo,r.school?.resolvedLogoUrl,r.branch?.logo,r.branch?.resolvedLogoUrl),address:(0,n.ou)(i.address,t.address,r.school?.address),phone:(0,n.ou)(i.phone,t.phone,r.school?.phone),email:(0,n.ou)(i.email,t.email,r.school?.email),website:(0,n.ou)(i.website,t.website,r.school?.website),primaryColor:(0,n.ou)(i.primaryColor,t.primaryColor,r.primaryColor,"#1d4ed8"),fontFamily:(0,n.ou)(i.fontFamily,t.fontFamily,r.fontFamily,"Arial, sans-serif"),reportCardBackgroundImage:(0,n.ou)(i.reportCardBackgroundImage,i.resolvedReportCardBackgroundImage,t.reportCardBackgroundImage,t.resolvedReportCardBackgroundImage,r.reportCardBackgroundImage,r.resolvedReportCardBackgroundImage,r.schoolBranchSetting?.reportCardBackgroundImage,r.schoolBranchSetting?.resolvedReportCardBackgroundImage),reportCardWatermark:(0,n.ou)(i.reportCardWatermark,i.resolvedReportCardWatermark,t.reportCardWatermark,t.resolvedReportCardWatermark,r.reportCardWatermark,r.resolvedReportCardWatermark,r.schoolBranchSetting?.reportCardWatermark,r.schoolBranchSetting?.resolvedReportCardWatermark,i.logo,i.resolvedLogoUrl,t.logo,t.resolvedLogoUrl,r.logo,r.resolvedLogoUrl,r.schoolBranchSetting?.logo,r.school?.logo,r.branch?.logo),reportCardSignatureImage:(0,n.ou)(i.reportCardSignatureImage,i.resolvedReportCardSignatureImage,t.reportCardSignatureImage,t.resolvedReportCardSignatureImage,r.reportCardSignatureImage,r.resolvedReportCardSignatureImage,r.schoolBranchSetting?.reportCardSignatureImage,r.schoolBranchSetting?.resolvedReportCardSignatureImage)}}function l(e){let t=e?.periods?.[0]?.dataset,r=t?.report||{},i=t?.student||{},a=t?.studentInfo||{},o=e?.student||e?.studentInfo||{};return{id:o.id||i.id||r.studentId,fullName:(0,n.ou)(o.fullName,o.name,i.fullName,i.name,r.studentName,"Student Name"),admissionNumber:(0,n.ou)(o.admissionNumber,i.admissionNumber,r.admissionNumber),gender:(0,n.ou)(o.gender,i.gender,r.gender),className:(0,n.ou)(o.className,o.currentClassName,r.className),photo:(0,n.ou)(o.photo,o.studentPhoto,o.resolvedPhotoUrl,o.resolvedStudentPhotoUrl,a.studentPhoto,a.photo,a.resolvedPhotoUrl,a.resolvedStudentPhotoUrl,i.studentPhoto,i.photo,i.resolvedPhotoUrl,i.resolvedStudentPhotoUrl,r.studentPhoto,r.photo),dateOfBirth:(0,n.ou)(o.dateOfBirth,i.dateOfBirth),parentName:(0,n.ou)(o.parentName,i.parentName),parentPhone:(0,n.ou)(o.parentPhone,i.parentPhone),parentEmail:(0,n.ou)(o.parentEmail,i.parentEmail),address:(0,n.ou)(o.address,i.address)}}function d(e,t){let r=(0,n.ou)(e?.code,e?.templateCode,e?.layoutKey,e?.templateKey,t?.templateCode,t?.layoutKey,"classic_formal").toLowerCase();return r.includes("modern")?"modern":r.includes("bordered")||r.includes("traditional")?"traditional":r.includes("letterhead")||r.includes("premium")?"premium":r.includes("side")?"sideProfile":r.includes("cambridge")?"cambridge":"ib"===r||r.includes("international")?"ib":r.includes("kindergarten")?"kindergarten":r.includes("montessori")?"montessori":r.includes("university")||r.includes("transcript")?"transcript":r.includes("compact")?"compact":"classic"}function c(e){let t=e?.periods||[],r=t.map(e=>Number(e.average??e.dataset?.report?.average)).filter(e=>Number.isFinite(e)),i=t.map(e=>Number(e.position??e.dataset?.report?.overallPosition)).filter(e=>Number.isFinite(e)&&e>0),a=t.map(e=>Number(e.gpa??e.dataset?.report?.overallGPA)).filter(e=>Number.isFinite(e)),o=r.length?r[0]:null,n=r.length?r[r.length-1]:null,s=r.length?Math.max(...r):null,l=r.length?r.reduce((e,t)=>e+t,0)/r.length:null,d=a.length?a.reduce((e,t)=>e+t,0)/a.length:null,c="none";if(null!=o&&null!=n&&r.length>1){let e=n-o;c=1>Math.abs(e)?"stable":e>0?"up":"down"}return{totalPeriods:t.length,firstPeriodName:p(t[0]),latestPeriodName:p(t[t.length-1]),firstAverage:o,latestAverage:n,bestAverage:s,cumulativeAverage:l,cumulativeGPA:d,bestPosition:i.length?Math.min(...i):null,latestPosition:i.length?i[i.length-1]:null,trend:c,...e?.summary||{}}}function p(e){return(0,n.ou)(e?.academicPeriodName,e?.title,e?.label,e?.term,e?.dataset?.header?.academicPeriod?.name,e?.dataset?.header?.academicPeriodName,"Academic Period")}function m(e){let t=e.tone||"classic";return{width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:e.compact?"10mm":"12mm",boxSizing:"border-box",position:"relative",overflow:"hidden",background:"kindergarten"===t?"linear-gradient(180deg,#fff8f1,#ffffff 42%,#f0fdfa)":"montessori"===t?"linear-gradient(180deg,#fffdf7,#ffffff 48%,#f8faf4)":"premium"===t?"linear-gradient(180deg,#fff,#fffaf0)":"#ffffff",color:"#111827",fontFamily:e.fontFamily,border:"transcript"===t?"1px solid #111827":"1px solid #d1d5db",borderRadius:"transcript"===t?2:"classic"===t?6:18,boxShadow:"0 18px 48px rgba(15,23,42,.10)",pageBreakAfter:e.pageBreakAfter?"always":"auto",breakAfter:e.pageBreakAfter?"page":"auto"}}function u(e,t){return"transcript"===t?{margin:"0 0 8px",padding:"6px 8px",background:"#111827",color:"#fff",fontSize:10,fontWeight:900,letterSpacing:.5,textTransform:"uppercase"}:{margin:"0 0 8px",color:e,fontSize:12,fontWeight:950,letterSpacing:.35,textTransform:"uppercase"}}function g({dataset:e,template:t,settings:r,compact:a=!1,pageBreakAfter:o=!0}){let c=s(e),p=l(e),u=d(t,r),h=c.primaryColor||"#1d4ed8",f=function(e){let t=(e||"#ffffff").replace("#","");if(t.startsWith("rgb"))return"#fff";3===t.length&&(t=t.split("").map(e=>e+e).join(""));let r=parseInt(t,16);return(299*(r>>16&255)+587*(r>>8&255)+114*(255&r))/1e3>140?"#111827":"#fff"}(h),x=r?.showGeneratedDate===!1?"":(0,n.kn)(e?.generatedAt||new Date),b=(0,n.ou)(r?.bookTitleLabel,e?.title,"Cumulative Academic Report Book"),v=(0,n.ou)(r?.bookSubtitleLabel,e?.subtitle,"Complete academic record across published report periods"),y=m({primary:h,fontFamily:c.fontFamily||"Arial, sans-serif",compact:a,pageBreakAfter:o,tone:u});return(0,i.jsxs)("section",{className:"print-page cumulative-book-page cumulative-book-front-cover",style:y,children:[(0,i.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:"transcript"===u?"8mm":"7mm",border:"premium"===u?`2px double ${h}`:`1px solid ${"montessori"===u?"#c8bda8":"#d1d5db"}`,borderRadius:18*("transcript"!==u),pointerEvents:"none"}}),c.reportCardWatermark&&(0,i.jsx)("img",{src:c.reportCardWatermark,alt:"","aria-hidden":"true",style:{position:"absolute",width:"58%",maxHeight:"58%",objectFit:"contain",opacity:"transcript"===u?.025:.045,left:"50%",top:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none"}}),(0,i.jsxs)("div",{style:{position:"relative",zIndex:1,minHeight:"267mm",display:"flex",flexDirection:"column"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:16},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:a?20:25,fontWeight:950,textTransform:"uppercase",letterSpacing:.35},children:c.schoolName}),c.motto&&(0,i.jsx)("div",{style:{marginTop:4,fontSize:a?9:10.5,fontStyle:"italic",fontWeight:700,color:"#4b5563"},children:c.motto}),c.branchName&&(0,i.jsx)("div",{style:{marginTop:4,fontSize:a?8.5:9.5,fontWeight:850,color:h},children:c.branchName})]}),(0,i.jsx)("div",{style:{width:a?62:74,height:a?62:74,border:`1px solid ${"transcript"===u?"#111827":"#d1d5db"}`,borderRadius:18*("transcript"!==u),display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#fff"},children:c.logo?(0,i.jsx)("img",{src:c.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:6,boxSizing:"border-box"}}):(0,i.jsxs)("span",{style:{fontSize:8,fontWeight:900,color:"#6b7280",textAlign:"center"},children:["SCHOOL",(0,i.jsx)("br",{}),"LOGO"]})})]}),(0,i.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:(0,i.jsxs)("div",{style:{width:"86%",maxWidth:560},children:[(0,i.jsx)("div",{style:{display:"inline-flex",padding:"transcript"===u?"8px 16px":"9px 18px",borderRadius:999*("transcript"!==u),background:h,color:f,fontSize:a?9:10.5,fontWeight:950,textTransform:"uppercase",letterSpacing:.6},children:"Academic Portfolio"}),(0,i.jsx)("h1",{style:{margin:"22px 0 8px",fontSize:a?28:38,lineHeight:1.02,fontWeight:"montessori"===u?720:950,textTransform:"kindergarten"===u||"montessori"===u?"none":"uppercase",letterSpacing:"transcript"===u?.9:.2},children:b}),(0,i.jsx)("div",{style:{margin:"0 auto",width:120,height:"transcript"===u?2:4,background:h,borderRadius:999}}),(0,i.jsx)("p",{style:{margin:"14px auto 0",fontSize:a?10.5:12,lineHeight:1.45,color:"#4b5563",fontWeight:700},children:v}),(0,i.jsxs)("div",{style:{margin:"28px auto 0",padding:a?14:18,border:`1px solid ${"transcript"===u?"#111827":"#e5e7eb"}`,borderRadius:18*("transcript"!==u),background:"transcript"===u?"#fff":"rgba(255,255,255,.78)"},children:[(0,i.jsx)("div",{style:{fontSize:a?8:9,fontWeight:900,textTransform:"uppercase",letterSpacing:.4,color:"#6b7280"},children:"Prepared For"}),(0,i.jsx)("div",{style:{marginTop:4,fontSize:a?20:24,fontWeight:950,color:"#111827"},children:p.fullName}),(0,i.jsxs)("div",{style:{marginTop:8,display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap",fontSize:a?9:10,fontWeight:850,color:"#374151"},children:[p.admissionNumber&&(0,i.jsxs)("span",{children:["Admission No: ",p.admissionNumber]}),p.className&&(0,i.jsxs)("span",{children:["Class: ",p.className]}),(0,i.jsxs)("span",{children:[e?.periods?.length||0," Report Periods"]})]})]})]})}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gap:12,alignItems:"flex-end",fontSize:a?8:9,color:"#4b5563",fontWeight:750},children:[(0,i.jsx)("span",{children:c.address||c.email||c.website||"Official school academic record"}),x&&(0,i.jsxs)("span",{children:[r?.generatedDateLabel||"Generated",": ",x]})]})]})]})}function h({dataset:e,template:t,settings:r,compact:a=!1,pageBreakAfter:o=!0}){let c=s(e),p=l(e),g=d(t,r),x=c.primaryColor||"#1d4ed8",b=m({primary:x,fontFamily:c.fontFamily||"Arial, sans-serif",compact:a,pageBreakAfter:o,tone:g}),v=[["Student Name",p.fullName],["Admission Number",p.admissionNumber],["Gender",p.gender],["Current / Latest Class",p.className],["Date of Birth",p.dateOfBirth],["Parent / Guardian",p.parentName],["Parent Phone",p.parentPhone],["Parent Email",p.parentEmail],["Address",p.address]].filter(([,e])=>(0,n.ou)(e));return(0,i.jsxs)("section",{className:"print-page cumulative-book-page cumulative-book-student-profile",style:b,children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,borderBottom:`2px solid ${x}`,paddingBottom:8},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:a?8:9,fontWeight:900,color:"#6b7280",textTransform:"uppercase",letterSpacing:.5},children:"Cumulative Report Book"}),(0,i.jsx)("div",{style:{marginTop:2,fontSize:a?18:21,fontWeight:950},children:c.schoolName})]}),c.logo&&(0,i.jsx)("img",{src:c.logo,alt:"School logo",style:{width:a?40:48,height:a?40:48,objectFit:"contain"}})]}),(0,i.jsxs)("div",{style:{marginTop:18},children:[(0,i.jsx)("h2",{style:u(x,g),children:"Student Profile"}),(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:r?.showStudentPhoto===!1?"1fr":"116px 1fr",gap:16,alignItems:"start"},children:[r?.showStudentPhoto!==!1&&(0,i.jsx)("div",{style:{border:"1px solid #d1d5db",borderRadius:16*("transcript"!==g),height:136,overflow:"hidden",background:"#f9fafb",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.ou)(p.photo,p.studentPhoto,p.resolvedPhotoUrl,p.resolvedStudentPhotoUrl)?(0,i.jsx)("img",{src:(0,n.ou)(p.photo,p.studentPhoto,p.resolvedPhotoUrl,p.resolvedStudentPhotoUrl),alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,i.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#6b7280"},children:"PHOTO"})}),(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:8},children:v.map(([e,t])=>(0,i.jsxs)("div",{style:{border:"1px solid #e5e7eb",borderRadius:12*("transcript"!==g),padding:a?7:9,background:"rgba(255,255,255,.78)"},children:[(0,i.jsx)("div",{style:{fontSize:a?7:7.8,color:"#6b7280",fontWeight:900,textTransform:"uppercase",letterSpacing:.35},children:e}),(0,i.jsx)("div",{style:{marginTop:2,fontSize:a?10:11,fontWeight:850,color:"#111827",overflowWrap:"anywhere"},children:t})]},e))})]})]}),(0,i.jsxs)("div",{style:{marginTop:18},children:[(0,i.jsx)("h2",{style:u(x,g),children:"Report Coverage"}),(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:8},children:[(0,i.jsx)(f,{label:"Published Periods",value:String(e?.periods?.length||0),tone:g,compact:a}),(0,i.jsx)(f,{label:"First Period",value:e?.summary?.firstPeriodName||"-",tone:g,compact:a}),(0,i.jsx)(f,{label:"Latest Period",value:e?.summary?.latestPeriodName||"-",tone:g,compact:a})]})]}),(0,i.jsxs)("div",{style:{marginTop:18},children:[(0,i.jsx)("h2",{style:u(x,g),children:"Purpose of This Book"}),(0,i.jsx)("p",{style:{margin:0,fontSize:a?10:11,lineHeight:1.55,color:"#374151",fontWeight:650},children:"This booklet assembles the learner's published academic report cards across the available academic periods. It is designed for parent review, school archives, transfers, progression discussions and long-term academic tracking."})]})]})}function f({label:e,value:t,tone:r,compact:a}){return(0,i.jsxs)("div",{style:{border:"1px solid #e5e7eb",borderRadius:12*("transcript"!==r),padding:a?8:10,background:"#fff"},children:[(0,i.jsx)("div",{style:{fontSize:a?7:7.8,color:"#6b7280",fontWeight:900,textTransform:"uppercase",letterSpacing:.3},children:e}),(0,i.jsx)("div",{style:{marginTop:3,fontSize:a?11:12.5,fontWeight:950,color:"#111827"},children:t})]})}function x({dataset:e,template:t,settings:r,compact:a=!1,pageBreakAfter:o=!0}){let l=s(e),c=d(t,r),g=l.primaryColor||"#1d4ed8",h=m({primary:g,fontFamily:l.fontFamily||"Arial, sans-serif",compact:a,pageBreakAfter:o,tone:c}),f=e?.periods||[];return(0,i.jsxs)("section",{className:"print-page cumulative-book-page cumulative-book-academic-journey",style:h,children:[(0,i.jsxs)("div",{style:{borderBottom:`2px solid ${g}`,paddingBottom:8},children:[(0,i.jsx)("div",{style:{fontSize:a?8:9,fontWeight:900,color:"#6b7280",textTransform:"uppercase",letterSpacing:.5},children:"Academic Journey"}),(0,i.jsx)("div",{style:{marginTop:2,fontSize:a?18:21,fontWeight:950},children:l.schoolName})]}),(0,i.jsxs)("div",{style:{marginTop:18},children:[(0,i.jsx)("h2",{style:u(g,c),children:"Timeline of Published Reports"}),(0,i.jsxs)("div",{style:{display:"grid",gap:8},children:[f.map((e,t)=>{let r,o,s=e.dataset?.report||{},l=Number(e.average??s.average),d=Number(e.position??s.overallPosition),m=Number(e.gpa??s.overallGPA);return(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"34px minmax(0, 1fr) repeat(3, 76px)",gap:8,alignItems:"center",border:"1px solid #e5e7eb",borderRadius:14*("transcript"!==c),padding:a?7:9,background:t%2?"#fff":"rgba(248,250,252,.78)"},children:[(0,i.jsx)("div",{style:{width:30,height:30,borderRadius:999*("transcript"!==c),background:g,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:950,fontSize:10},children:t+1}),(0,i.jsxs)("div",{style:{minWidth:0},children:[(0,i.jsx)("div",{style:{fontSize:a?10:11.3,fontWeight:950,color:"#111827"},children:p(e)}),(0,i.jsx)("div",{style:{marginTop:2,fontSize:a?7.5:8.3,color:"#6b7280",fontWeight:750},children:(r=(0,n.ou)(e?.formattedStartDate,(0,n.kn)(e?.startDate)),o=(0,n.ou)(e?.formattedEndDate,(0,n.kn)(e?.endDate)),(r&&o?`${r} – ${o}`:r||o||"")||e.academicYear||"Published report period")})]}),(0,i.jsx)(b,{label:"Average",value:Number.isFinite(l)?`${(0,n.ZV)(l,1)}%`:"-",compact:a}),(0,i.jsx)(b,{label:"Position",value:Number.isFinite(d)?(0,n.IE)(d):"-",compact:a}),(0,i.jsx)(b,{label:"GPA",value:Number.isFinite(m)?(0,n.ZV)(m,2):"-",compact:a})]},String(e.id||e.academicPeriodId||t))}),!f.length&&(0,i.jsx)("div",{style:{border:"1px dashed #cbd5e1",padding:18,borderRadius:14,textAlign:"center",color:"#64748b",fontWeight:800},children:"No published report snapshots are available for this cumulative book."})]})]})]})}function b({label:e,value:t,compact:r}){return(0,i.jsxs)("div",{style:{textAlign:"center",borderLeft:"1px solid #e5e7eb",paddingLeft:8},children:[(0,i.jsx)("div",{style:{fontSize:r?6.8:7.4,color:"#6b7280",fontWeight:900,textTransform:"uppercase"},children:e}),(0,i.jsx)("div",{style:{marginTop:2,fontSize:r?9.5:10.5,fontWeight:950},children:t})]})}function v({dataset:e,template:t,settings:r,compact:a=!1,pageBreakAfter:o=!0}){var l,p;let g=s(e),h=d(t,r),f=g.primaryColor||"#1d4ed8",x=c(e),b=m({primary:f,fontFamily:g.fontFamily||"Arial, sans-serif",compact:a,pageBreakAfter:o,tone:h}),j=[["Report Periods",String(x.totalPeriods||0)],["First Average",null==x.firstAverage?"-":`${(0,n.ZV)(x.firstAverage,1)}%`],["Latest Average",null==x.latestAverage?"-":`${(0,n.ZV)(x.latestAverage,1)}%`],["Best Average",null==x.bestAverage?"-":`${(0,n.ZV)(x.bestAverage,1)}%`],["Cumulative Average",null==x.cumulativeAverage?"-":`${(0,n.ZV)(x.cumulativeAverage,1)}%`],["Cumulative GPA",null==x.cumulativeGPA?"-":(0,n.ZV)(x.cumulativeGPA,2)],["Best Position",null==x.bestPosition?"-":(0,n.IE)(x.bestPosition)],["Latest Position",null==x.latestPosition?"-":(0,n.IE)(x.latestPosition)],["Trend","up"===(l=x.trend)?"Improving":"down"===l?"Needs attention":"stable"===l?"Stable":"Not enough data"],["Recommendation",(p=x.finalRecommendation)?p.charAt(0).toUpperCase()+p.slice(1):"-"]];return(0,i.jsxs)("section",{className:"print-page cumulative-book-page cumulative-book-summary",style:b,children:[(0,i.jsxs)("div",{style:{borderBottom:`2px solid ${f}`,paddingBottom:8},children:[(0,i.jsx)("div",{style:{fontSize:a?8:9,fontWeight:900,color:"#6b7280",textTransform:"uppercase",letterSpacing:.5},children:"Academic Summary"}),(0,i.jsx)("div",{style:{marginTop:2,fontSize:a?18:21,fontWeight:950},children:g.schoolName})]}),(0,i.jsxs)("div",{style:{marginTop:18},children:[(0,i.jsx)("h2",{style:u(f,h),children:"Cumulative Performance Snapshot"}),(0,i.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, minmax(0, 1fr))",gap:8},children:j.map(([e,t])=>(0,i.jsxs)("div",{style:{border:"1px solid #e5e7eb",borderRadius:14*("transcript"!==h),padding:a?8:10,background:"#fff",minHeight:54},children:[(0,i.jsx)("div",{style:{fontSize:a?6.8:7.4,fontWeight:900,color:"#6b7280",textTransform:"uppercase",letterSpacing:.25},children:e}),(0,i.jsx)("div",{style:{marginTop:4,fontSize:a?10.5:12,fontWeight:950,color:"#111827",overflowWrap:"anywhere"},children:t})]},e))})]}),(0,i.jsxs)("div",{style:{marginTop:18},children:[(0,i.jsx)("h2",{style:u(f,h),children:"Academic Reading Guide"}),(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[(0,i.jsx)(y,{title:"How to read this book",text:"Each report-card page after this section represents one published academic period. The page uses the same selected student report template, so the book remains visually consistent from period to period."}),(0,i.jsx)(y,{title:"How cumulative values are estimated",text:"The summary values are derived from the available published report snapshots. If a period has no published snapshot, it is not included in this booklet."})]})]}),Array.isArray(e?.notes)&&e.notes.length>0&&(0,i.jsxs)("div",{style:{marginTop:18},children:[(0,i.jsx)("h2",{style:u(f,h),children:"School Notes"}),(0,i.jsx)("ul",{style:{margin:0,paddingLeft:18,fontSize:a?9.5:10.5,lineHeight:1.55,color:"#374151",fontWeight:650},children:e.notes.map((e,t)=>(0,i.jsx)("li",{children:e},t))})]})]})}function y({title:e,text:t}){return(0,i.jsxs)("div",{style:{border:"1px solid #e5e7eb",borderRadius:14,padding:11,background:"rgba(255,255,255,.78)"},children:[(0,i.jsx)("div",{style:{fontSize:10.5,fontWeight:950,color:"#111827"},children:e}),(0,i.jsx)("p",{style:{margin:"5px 0 0",fontSize:9.5,lineHeight:1.45,color:"#4b5563",fontWeight:650},children:t})]})}function j({dataset:e,template:t,settings:r,compact:a=!1,pageBreakAfter:o=!1}){let l=s(e),c=d(t,r),p=l.primaryColor||"#1d4ed8",u=m({primary:p,fontFamily:l.fontFamily||"Arial, sans-serif",compact:a,pageBreakAfter:o,tone:c});return(0,i.jsx)("section",{className:"print-page cumulative-book-page cumulative-book-back-cover",style:u,children:(0,i.jsxs)("div",{style:{minHeight:"267mm",display:"flex",flexDirection:"column",justifyContent:"space-between",textAlign:"center"},children:[(0,i.jsx)("div",{}),(0,i.jsxs)("div",{style:{margin:"0 auto",maxWidth:520},children:[l.logo&&(0,i.jsx)("img",{src:l.logo,alt:"School logo",style:{width:a?70:86,height:a?70:86,objectFit:"contain",marginBottom:18}}),(0,i.jsx)("div",{style:{fontSize:a?18:22,fontWeight:950,textTransform:"uppercase",letterSpacing:.4},children:l.schoolName}),l.motto&&(0,i.jsx)("div",{style:{marginTop:6,fontSize:a?10:11.5,fontStyle:"italic",color:"#4b5563",fontWeight:750},children:l.motto}),(0,i.jsx)("div",{style:{margin:"20px auto",width:120,height:"transcript"===c?2:4,background:p,borderRadius:999}}),(0,i.jsx)("p",{style:{margin:0,fontSize:a?10:11.5,lineHeight:1.55,color:"#374151",fontWeight:720},children:(0,n.ou)(r?.footerText,"This cumulative academic report book is generated from published school report snapshots and is intended as an official record of the learner's academic journey.")})]}),(0,i.jsxs)("div",{style:{fontSize:a?8:9,color:"#4b5563",fontWeight:750,display:"grid",gap:3},children:[(0,i.jsx)("span",{children:[l.address,l.phone,l.email,l.website].filter(Boolean).join(" • ")}),(0,i.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})})}function S({dataset:e,template:t,settings:r,templateSettings:n,compact:s=!1,showWatermark:l=!0,pageBreakAfter:d=!0,mobilePreview:m=!0,includeCovers:u=!0}){let f=(0,a.useMemo)(()=>(function(e){if(!e)return null;let t=Array.isArray(e.periods)?e.periods.filter(e=>!!e?.dataset):[];return{...e,periods:t,summary:{...c({...e,periods:t}),...e.summary||{}}}})(e),[e]),b=(0,a.useMemo)(()=>({showBookFrontCover:!0,showBookStudentProfilePage:!0,showBookAcademicJourneyPage:!0,showBookSummaryPage:!0,showBookBackCover:!0,showGeneratedDate:!0,generatedDateLabel:"Generated",...n||{},...r||{},reportType:"cumulative_book"}),[r,n]);if(!f||!f.periods.length)return(0,i.jsxs)("div",{className:"cumulative-book-empty-card",children:[(0,i.jsx)("style",{children:w}),"No published report snapshots are available for this cumulative report book."]});let y=u&&!1!==b.showBookFrontCover,N=!1!==b.showBookStudentProfilePage,A=!1!==b.showBookAcademicJourneyPage,k=!1!==b.showBookSummaryPage,C=u&&!1!==b.showBookBackCover;return(0,i.jsxs)("div",{className:"cumulative-book-root",children:[(0,i.jsx)("style",{children:w}),y&&(0,i.jsx)(g,{dataset:f,template:t,settings:b,compact:s,pageBreakAfter:!0}),N&&(0,i.jsx)(h,{dataset:f,template:t,settings:b,compact:s,pageBreakAfter:!0}),A&&(0,i.jsx)(x,{dataset:f,template:t,settings:b,compact:s,pageBreakAfter:!0}),k&&(0,i.jsx)(v,{dataset:f,template:t,settings:b,compact:s,pageBreakAfter:!0}),f.periods.map((e,r)=>(0,i.jsxs)("div",{className:"cumulative-book-report-card-page",children:[(0,i.jsxs)("div",{className:"report-no-print cumulative-book-period-label",children:[(0,i.jsx)("strong",{children:p(e)}),(0,i.jsxs)("span",{children:["Period ",r+1," of ",f.periods.length]})]}),(0,i.jsx)(o.A,{dataset:e.dataset,template:t,settings:b,compact:s,showWatermark:l,pageBreakAfter:d||r<f.periods.length-1||C,mobilePreview:m})]},String(e.id||e.academicPeriodId||r))),C&&(0,i.jsx)(j,{dataset:f,template:t,settings:b,compact:s,pageBreakAfter:!1})]})}let w=`
.cumulative-book-empty-card {
  padding: 18px;
  border: 1px dashed #cbd5e1;
  border-radius: 16px;
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
  font-weight: 850;
}

.cumulative-book-root {
  width: 100%;
  max-width: 100%;
}

.cumulative-book-period-label {
  width: min(210mm, 100%);
  margin: 0 auto 8px;
  padding: 8px 10px;
  border-radius: 14px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148,163,184,.25);
  color: var(--text, #0f172a);
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 12px;
  box-sizing: border-box;
}

.cumulative-book-period-label span {
  color: var(--muted, #64748b);
  font-weight: 800;
}

@media print {
  .cumulative-book-period-label,
  .report-no-print {
    display: none !important;
  }

  .cumulative-book-root {
    width: 100% !important;
  }

  .cumulative-book-page {
    box-shadow: none !important;
    margin: 0 auto !important;
    border-color: #111 !important;
    border-radius: 0 !important;
  }
}
`;var N=r(75290);function A(e){let t=(0,a.useMemo)(()=>e.dataset?{...e.dataset,periods:e.dataset.periods.map(e=>{let t=(0,N.BA)(e.snapshot||e.rawSnapshot||e.reportData||e.dataset);return t?{...e,dataset:t}:e}).filter(e=>!!e.dataset)}:e.dataset,[e.dataset]);return(0,i.jsx)(S,{...e,dataset:t})}},13460:(e,t,r)=>{r.d(t,{A:()=>c});var i=r(95155),a=r(12115),o=r(19892),n=r(75290);let s={reportType:"cumulative_transcript",templateCode:"cumulative_transcript_classic",layoutKey:"cumulative_transcript_classic",templateName:"Cumulative Transcript Classic",paperSize:"A4",orientation:"portrait",density:"compact",showAdmissionNumber:!0,showGender:!0,showClass:!0,showAcademicStructure:!0,showAcademicPeriod:!0,showBranch:!0,showTranscriptTermBreakdown:!0,showTranscriptYearAverage:!0,showTranscriptCumulativeAverage:!0,showTranscriptCumulativePosition:!0,showTranscriptGPAProgression:!0,showTranscriptFinalRecommendation:!0,showGeneratedDate:!0,showLogo:!0,showWatermark:!1,studentNameLabel:"Student",admissionNumberLabel:"Student ID",genderLabel:"Gender",classLabel:"Programme / Class",academicStructureLabel:"Academic Structure",academicPeriodLabel:"Academic Period",subjectLabel:"Course / Subject",totalLabel:"Total",averageLabel:"Average",gradeLabel:"Grade",classPositionLabel:"Position",gpaLabel:"GPA",generatedDateLabel:"Date Generated",footerText:"Official cumulative academic transcript generated by Eleeveon Schools."};function l(...e){for(let t of e){let e=String(t??"").trim();if(e)return e}return""}function d(e,t){return l(e?.code,e?.templateCode,e?.layoutKey,e?.templateKey,t?.templateCode,t?.layoutKey,t?.templateKey,s.templateCode)}function c({dataset:e,template:t,settings:r,compact:m=!1,showWatermark:u=!0,pageBreakAfter:g=!0,mobilePreview:h=!0,className:f=""}){let[x,b]=(0,a.useState)(!1),[v,y]=(0,a.useState)(1),[j,S]=(0,a.useState)(1),[w,N]=(0,a.useState)(!1),A=(0,a.useRef)(null),k=(0,a.useRef)(null),C=(0,a.useRef)(null),T=(0,a.useMemo)(()=>(function(e){if(!e)return null;let t=e.transcript?{...e.transcript,historicalAssessmentSubjects:function(e){if(!e)return[];let t=new Map;for(let r of Array.isArray(e.periods)?e.periods:[]){let e=r.rawSnapshot||r.snapshot||r.reportData||r,i=(0,n.yt)(e);for(let e of i.payload?.assessmentSubjects||i.dataset?.report?.subjectResults||r.subjectResults||[]){let r=String(e?.classSubjectId||e?.subjectId||e?.subjectName||e?.name||"");if(!r)continue;let a=t.get(r);t.set(r,{subjectId:e.subjectId||a?.subjectId,classSubjectId:e.classSubjectId||a?.classSubjectId,subjectName:e.subjectName||e.name||a?.subjectName||"Subject",subjectCode:e.subjectCode||e.code||a?.subjectCode,assessmentProjection:e.assessmentProjection||a?.assessmentProjection,assessmentReportSettings:e.assessmentReportSettings||i.payload?.assessmentReportSettings||a?.assessmentReportSettings})}}return[...t.values()]}(e.transcript)}:null,r=e.assessmentReportSettings||t?.historicalAssessmentSubjects?.find(e=>e.assessmentReportSettings)?.assessmentReportSettings;return{...e,transcript:t,assessmentReportSettings:r}})(e),[e]),P=(0,a.useMemo)(()=>{var e;let i,a;return e={template:t,settings:r,compact:m},i=(0,o.Q5)(d(e.template,e.settings)),a=i?.code||e.template?.code||e.template?.templateCode||e.template?.layoutKey||e.settings?.templateCode||s.templateCode||"cumulative_transcript_classic",{...s,...e.settings||{},reportType:"cumulative_transcript",templateName:e.template?.name||e.settings?.templateName||i?.name||s.templateName,templateCode:a,layoutKey:e.template?.layoutKey||e.settings?.layoutKey||a,templateKey:e.template?.templateKey||e.settings?.templateKey||a,paperSize:e.template?.paperSize||e.settings?.paperSize||"A4",orientation:e.template?.orientation||e.settings?.orientation||"portrait",density:e.settings?.density||e.template?.density||(e.compact?"compact":s.density)}},[t,r,m]),z=d(t,P),B=(0,a.useMemo)(()=>(0,o.Jn)(z),[z]),L=x?j:v,W=Math.round(100*L),R=(0,a.useCallback)(e=>{S(t=>{let r=x?t:v;return Math.min(2,Math.max(.25,Number(("in"===e?1.01*r:r/1.01).toFixed(4))))}),b(!0)},[x,v]),I=(0,a.useCallback)(()=>{null!=k.current&&(window.clearTimeout(k.current),k.current=null),null!=C.current&&(window.clearInterval(C.current),C.current=null)},[]),F=(0,a.useCallback)(e=>{I(),R(e),k.current=window.setTimeout(()=>{C.current=window.setInterval(()=>{R(e)},55)},260)},[R,I]);(0,a.useEffect)(()=>{if(!h)return;let e=()=>{let e=A.current;if(!e)return;let t=e.getBoundingClientRect();y(Number(Math.min(1,Math.max(120,t.width-8)/793.7008,Math.max(180,window.innerHeight-t.top-8)/1122.5197).toFixed(4)))};e();let t=new ResizeObserver(e);return A.current&&t.observe(A.current),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{t.disconnect(),window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[h]),(0,a.useEffect)(()=>()=>I(),[I]);let G=T?(0,i.jsx)(B,{dataset:T,template:t||null,settings:P,compact:m,showWatermark:u,pageBreakAfter:g,mobilePreview:!1}):(0,i.jsx)("section",{className:"print-page report-page-break cumulative-transcript-empty-page ctc-a4-page",children:(0,i.jsx)("div",{className:"ctc-empty-card",children:T?"No cumulative transcript records are available for the selected student or filters.":"No cumulative transcript dataset was provided."})});return h?(0,i.jsxs)("div",{className:`ctc-preview-shell ${x?"expanded":""} ${f}`,children:[(0,i.jsx)("style",{children:p}),(0,i.jsxs)("div",{className:"ctc-mobile-toolbar report-no-print",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:l(T?.student?.studentName,T?.student?.fullName,T?.studentName,T?.summary?.studentName,"Cumulative Transcript")}),(0,i.jsx)("span",{children:l(T?.student?.admissionNumber,T?.student?.studentId,T?.summary?.programmeName,T?.summary?.className,T?.branding?.schoolName,T?.header?.branding?.schoolName,"Academic Records")})]}),(0,i.jsxs)("div",{className:"ctc-zoom-controls","aria-label":"Cumulative transcript zoom controls",children:[(0,i.jsx)("button",{type:"button",className:"ctc-zoom-icon-button",onClick:()=>R("out"),onPointerDown:()=>F("out"),onPointerUp:I,onPointerCancel:I,onPointerLeave:I,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,i.jsx)("button",{type:"button",className:"ctc-zoom-fit-button",onClick:()=>{I(),b(!1),S(1),N(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,i.jsxs)("div",{className:"ctc-zoom-menu-wrap",children:[(0,i.jsxs)("button",{type:"button",className:"ctc-zoom-percent-button",onClick:()=>N(e=>!e),"aria-label":"Choose zoom percentage","aria-expanded":w,title:"Choose zoom percentage",children:[(0,i.jsxs)("span",{children:[W,"%"]}),(0,i.jsx)("span",{className:"ctc-zoom-caret",children:"▾"})]}),w&&(0,i.jsx)("div",{className:"ctc-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(e=>(0,i.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{I(),b(!0),S(Number((e/100).toFixed(4))),N(!1)},className:`ctc-zoom-menu-item ${Math.round(100*L)===e?"active":""}`,children:[e,"%"]},e))})]}),(0,i.jsx)("button",{type:"button",className:"ctc-zoom-icon-button",onClick:()=>R("in"),onPointerDown:()=>F("in"),onPointerUp:I,onPointerCancel:I,onPointerLeave:I,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,i.jsx)("div",{ref:A,className:"ctc-preview-scroll report-screen-scroll",style:{"--ctc-preview-scale":L},children:(0,i.jsx)("div",{className:"ctc-preview-center",children:(0,i.jsx)("div",{className:"ctc-preview-scale",children:G})})})]}):(0,i.jsxs)("div",{className:f,children:[(0,i.jsx)("style",{children:p}),G]})}let p=`
.ctc-empty-card {
  margin: 24px auto;
  padding: 20px;
  border: 1px dashed #cbd5e1;
  border-radius: 16px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
  text-align: center;
}

.ctc-preview-shell {
  --a4-width-px: 793.7008;
  --a4-height-px: 1122.5197;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border-radius: 24px;
}

.ctc-mobile-toolbar {
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

.ctc-mobile-toolbar div {
  min-width: 0;
}

.ctc-mobile-toolbar strong,
.ctc-mobile-toolbar span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ctc-mobile-toolbar strong {
  font-size: 13px;
  font-weight: 950;
  color: var(--text, #0f172a);
}

.ctc-mobile-toolbar span {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 750;
}

.ctc-zoom-controls {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 10%, transparent);
  border: 1px solid rgba(148,163,184,.18);
}

.ctc-zoom-controls button {
  appearance: none;
  -webkit-appearance: none;
  border: 0;
  cursor: pointer;
  font-family: inherit;
}

.ctc-zoom-icon-button,
.ctc-zoom-fit-button,
.ctc-zoom-percent-button {
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

.ctc-zoom-icon-button {
  width: 32px;
  min-width: 32px;
  padding: 0;
  font-size: 18px;
}

.ctc-zoom-fit-button {
  min-width: 42px;
  padding: 0 12px;
  font-size: 12px;
}

.ctc-zoom-menu-wrap {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
}

.ctc-zoom-percent-button {
  min-width: 68px;
  padding: 0 10px;
  font-size: 12px;
  gap: 5px;
  font-variant-numeric: tabular-nums;
}

.ctc-zoom-caret {
  font-size: 9px;
  line-height: 1;
  opacity: .9;
  transform: translateY(1px);
}

.ctc-zoom-menu {
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

.ctc-zoom-menu-item {
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
  font-variant-numeric: tabular-nums;
  display: flex !important;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-sizing: border-box;
}

.ctc-zoom-menu-item:hover {
  background: color-mix(in srgb, var(--primary-color, #2563eb) 10%, transparent);
}

.ctc-zoom-menu-item.active {
  background: var(--primary-color, #2563eb);
  color: #fff;
}

.ctc-preview-scroll {
  --ctc-preview-scale: 1;
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

.ctc-preview-center {
  width: 100%;
  height: calc(297mm * var(--ctc-preview-scale));
  min-height: calc(297mm * var(--ctc-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}

.ctc-preview-scale {
  width: 210mm;
  height: 297mm;
  min-width: 210mm;
  min-height: 297mm;
  transform: scale(var(--ctc-preview-scale));
  transform-origin: top center;
  flex: 0 0 auto;
}

.ctc-a4-page,
.cumulative-transcript-page,
.cumulative-transcript-empty-page {
  width: 210mm !important;
  min-width: 210mm !important;
  max-width: 210mm !important;
  min-height: 297mm !important;
  box-sizing: border-box !important;
}

.ctc-preview-shell:not(.expanded) .ctc-preview-scroll {
  overflow: hidden;
}

.ctc-preview-shell.expanded .ctc-preview-scroll {
  overflow: auto;
  max-height: none;
}

.ctc-preview-shell.expanded .ctc-preview-center {
  width: max(100%, calc(210mm * var(--ctc-preview-scale)));
  height: calc(297mm * var(--ctc-preview-scale));
  min-height: calc(297mm * var(--ctc-preview-scale));
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: visible;
  margin: 0 auto;
}

@media screen and (max-width: 380px) {
  .ctc-mobile-toolbar {
    gap: 6px;
    padding: 8px;
  }

  .ctc-mobile-toolbar strong {
    font-size: 12px;
  }

  .ctc-mobile-toolbar span {
    font-size: 10px;
  }

  .ctc-zoom-controls {
    gap: 3px;
    padding: 3px;
  }

  .ctc-zoom-icon-button {
    width: 29px;
    min-width: 29px;
    height: 29px;
    min-height: 29px;
    font-size: 16px;
  }

  .ctc-zoom-fit-button {
    min-width: 36px;
    height: 29px;
    min-height: 29px;
    padding: 0 8px;
    font-size: 10px;
  }

  .ctc-zoom-percent-button {
    min-width: 62px;
    height: 29px;
    min-height: 29px;
    padding: 0 8px;
    font-size: 10px;
  }
}

@media print {
  .ctc-preview-shell,
  .ctc-preview-scroll,
  .ctc-preview-center,
  .ctc-preview-scale {
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

  .ctc-mobile-toolbar,
  .report-no-print {
    display: none !important;
    visibility: hidden !important;
  }

  .ctc-a4-page,
  .cumulative-transcript-page,
  .cumulative-transcript-empty-page {
    width: 210mm !important;
    min-width: 210mm !important;
    max-width: 210mm !important;
    min-height: 297mm !important;
    transform: none !important;
    margin: 0 auto !important;
    box-shadow: none !important;
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  table,
  tr,
  td,
  th {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }
}
`},19892:(e,t,r)=>{r.d(t,{wW:()=>b,Q5:()=>v,Jn:()=>y});var i=r(95155);r(12115);let a=(e,t=1)=>null==e||Number.isNaN(Number(e))?"-":Number(e).toFixed(t),o=e=>{if(!e)return"-";let t=["th","st","nd","rd"],r=e%100;return`${e}${t[(r-20)%10]||t[r]||t[0]}`},n=(...e)=>{for(let t of e){let e=String(t??"").trim();if(e)return e}return"-"};function s({header:e,title:t,primary:r,compact:a,pageBreakAfter:o}){let l=e?.branding||{};return(0,i.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page",style:{width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:a?"9mm":"11mm",boxSizing:"border-box",background:"#fff",color:"#111827",fontFamily:l.fontFamily||"Arial, sans-serif",border:"1px solid #d1d5db",pageBreakAfter:o?"always":"auto"},children:[(0,i.jsxs)("div",{style:{borderBottom:`3px solid ${r}`,paddingBottom:8,marginBottom:16},children:[(0,i.jsx)("div",{style:{fontSize:a?15:18,fontWeight:950,textTransform:"uppercase"},children:n(l.schoolName,"School")}),(0,i.jsx)("div",{style:{fontSize:10,fontWeight:800,color:"#4b5563"},children:t})]}),(0,i.jsx)("div",{style:{border:"1px dashed #9ca3af",padding:18,textAlign:"center",fontWeight:800,borderRadius:10},children:"Select a student with historical report snapshots to generate a cumulative academic transcript."})]})}let l=(e,t=1)=>null==e||Number.isNaN(Number(e))?"-":Number(e).toFixed(t),d=(...e)=>{for(let t of e){let e=String(t??"").trim();if(e)return e}return"-"};function c({header:e,title:t,primary:r,compact:a,pageBreakAfter:o}){let n=e?.branding||{};return(0,i.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page",style:{width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:a?"9mm":"11mm",boxSizing:"border-box",background:"#fff",color:"#111827",fontFamily:n.fontFamily||"Arial, sans-serif",border:"1px solid #d1d5db",pageBreakAfter:o?"always":"auto"},children:[(0,i.jsxs)("div",{style:{borderBottom:`3px solid ${r}`,paddingBottom:8,marginBottom:16},children:[(0,i.jsx)("div",{style:{fontSize:a?15:18,fontWeight:950,textTransform:"uppercase"},children:d(n.schoolName,"School")}),(0,i.jsx)("div",{style:{fontSize:10,fontWeight:800,color:"#4b5563"},children:t})]}),(0,i.jsx)("div",{style:{border:"1px dashed #9ca3af",padding:18,textAlign:"center",fontWeight:800,borderRadius:10},children:"Select a student with historical report snapshots to generate a cumulative academic transcript."})]})}let p=(e,t=1)=>null==e||Number.isNaN(Number(e))?"-":Number(e).toFixed(t),m=e=>{if(!e)return"-";let t=["th","st","nd","rd"],r=e%100;return`${e}${t[(r-20)%10]||t[r]||t[0]}`},u=(...e)=>{for(let t of e){let e=String(t??"").trim();if(e)return e}return"-"};function g({header:e,title:t,primary:r,compact:a,pageBreakAfter:o}){let n=e?.branding||{};return(0,i.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page",style:{width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:a?"9mm":"11mm",boxSizing:"border-box",background:"#fff",color:"#111827",fontFamily:n.fontFamily||"Arial, sans-serif",border:"1px solid #d1d5db",pageBreakAfter:o?"always":"auto"},children:[(0,i.jsxs)("div",{style:{borderBottom:`3px solid ${r}`,paddingBottom:8,marginBottom:16},children:[(0,i.jsx)("div",{style:{fontSize:a?15:18,fontWeight:950,textTransform:"uppercase"},children:u(n.schoolName,"School")}),(0,i.jsx)("div",{style:{fontSize:10,fontWeight:800,color:"#4b5563"},children:t})]}),(0,i.jsx)("div",{style:{border:"1px dashed #9ca3af",padding:18,textAlign:"center",fontWeight:800,borderRadius:10},children:"Select a student with historical report snapshots to generate a cumulative academic transcript."})]})}let h=(e,t=1)=>null==e||Number.isNaN(Number(e))?"-":Number(e).toFixed(t),f=(...e)=>{for(let t of e){let e=String(t??"").trim();if(e)return e}return"-"};function x({header:e,title:t,primary:r,compact:a,pageBreakAfter:o}){let n=e?.branding||{};return(0,i.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page",style:{width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:a?"9mm":"11mm",boxSizing:"border-box",background:"#fff",color:"#111827",fontFamily:n.fontFamily||"Arial, sans-serif",border:"1px solid #d1d5db",pageBreakAfter:o?"always":"auto"},children:[(0,i.jsxs)("div",{style:{borderBottom:`3px solid ${r}`,paddingBottom:8,marginBottom:16},children:[(0,i.jsx)("div",{style:{fontSize:a?15:18,fontWeight:950,textTransform:"uppercase"},children:f(n.schoolName,"School")}),(0,i.jsx)("div",{style:{fontSize:10,fontWeight:800,color:"#4b5563"},children:t})]}),(0,i.jsx)("div",{style:{border:"1px dashed #9ca3af",padding:18,textAlign:"center",fontWeight:800,borderRadius:10},children:"Select a student with historical report snapshots to generate a cumulative academic transcript."})]})}let b=[{name:"Cumulative Transcript Classic",code:"cumulative_transcript_classic",layoutKey:"cumulative_transcript_classic",description:"Formal school-friendly cumulative transcript with period-by-period academic records.",reportType:"cumulative_transcript",orientation:"portrait",paperSize:"A4",density:"comfortable",isDefault:!0,active:!0,component:function(e){var t;let r,l,d,c,p,m,u,{header:g,transcript:h,settings:f,branding:x,primary:b,labels:v,generatedAt:y}=(r=e.header||e.dataset?.header,l=e.transcript??e.dataset?.transcript??null,d=e.settings||{},p=(c=r?.branding||{}).primaryColor||"#111827",m=e.dataset?.generatedAt||new Date,u={student:d.studentNameLabel||"Student",studentId:d.admissionNumberLabel||"Student ID",gender:d.genderLabel||"Gender",className:d.classLabel||"Programme / Class",period:d.academicPeriodLabel||"Academic Period",subject:d.subjectLabel||"Course / Subject",total:d.totalLabel||"Score",average:d.averageLabel||"Average",grade:d.gradeLabel||"Grade",position:d.subjectPositionLabel||"Rank",classPosition:d.classPositionLabel||"Cumulative Position",gpa:d.gpaLabel||"GPA",generated:d.generatedDateLabel||"Date Generated",footer:d.footerText||"Official cumulative academic transcript generated by Eleeveon Schools."},{header:r,transcript:l,settings:d,branding:c,primary:p,labels:u,generatedAt:m}),j=e.compact??!1,S=e.pageBreakAfter??!0,w=!1!==e.showWatermark;if(!h)return(0,i.jsx)(s,{header:g,title:"Cumulative Academic Transcript",primary:b,compact:j,pageBreakAfter:S});let N={width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:j?"9mm":"11mm",boxSizing:"border-box",background:"#fff",color:"#111827",fontFamily:x.fontFamily||"Arial, sans-serif",border:"1px solid #d1d5db",position:"relative",overflow:"hidden",pageBreakAfter:S?"always":"auto"},A={width:"100%",borderCollapse:"collapse",fontSize:j?8.4:9.2},k={border:"1px solid #111827",padding:j?3:5,background:b,color:"#fff",textAlign:"center",fontWeight:900},C={border:"1px solid #374151",padding:j?3:5,verticalAlign:"top",lineHeight:1.25},T={fontSize:j?7.2:8,textTransform:"uppercase",letterSpacing:.3,color:"#6b7280",fontWeight:850},P={marginTop:2,fontSize:j?9.4:10.3,fontWeight:900,color:"#111827"};return(0,i.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page cumulative-transcript-classic",style:N,children:[w&&x.reportCardWatermark&&(0,i.jsx)("img",{src:x.reportCardWatermark,alt:"Watermark",style:{position:"absolute",inset:"30% 25%",width:"50%",opacity:.035,objectFit:"contain",pointerEvents:"none"}}),(0,i.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,i.jsxs)("header",{style:{display:"grid",gridTemplateColumns:"56px 1fr auto",gap:10,alignItems:"center",borderBottom:`3px solid ${b}`,paddingBottom:8},children:[(0,i.jsx)("div",{style:{width:54,height:54,border:"1px solid #9ca3af",display:"flex",alignItems:"center",justifyContent:"center"},children:x.logo?(0,i.jsx)("img",{src:x.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4}}):(0,i.jsx)("span",{style:{fontSize:7,fontWeight:900},children:"LOGO"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:j?16:19,fontWeight:950,textTransform:"uppercase",lineHeight:1.05},children:n(x.schoolName,"School")}),(0,i.jsx)("div",{style:{marginTop:3,fontSize:j?8:9,fontWeight:750,color:"#4b5563"},children:[x.address,x.phone,x.email].filter(Boolean).join(" • ")})]}),(0,i.jsxs)("div",{style:{border:`1px solid ${b}`,padding:"7px 10px",textAlign:"center",fontWeight:950,textTransform:"uppercase",fontSize:j?8:9},children:["Cumulative",(0,i.jsx)("br",{}),"Academic Transcript"]})]}),(0,i.jsx)("div",{style:{marginTop:10,display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:6},children:[[v.student,h.studentName],[v.studentId,h.admissionNumber||"-"],[v.gender,h.gender||"-"],[v.className,h.currentClassName||"-"]].map(([e,t])=>(0,i.jsxs)("div",{style:{border:"1px solid #d1d5db",padding:6,background:"#f9fafb"},children:[(0,i.jsx)("div",{style:T,children:e}),(0,i.jsx)("div",{style:P,children:t})]},e))}),(0,i.jsx)("div",{style:{marginTop:11,display:"grid",gridTemplateColumns:"repeat(5, minmax(0, 1fr))",border:"1px solid #111827"},children:[["Periods",h.totalPeriods],["Subjects",h.totalSubjects],["Cumulative Avg.",`${a(h.cumulativeAverage,1)}%`],[v.gpa,null!=h.cumulativeGPA?a(h.cumulativeGPA,2):"-"],["Trend","up"===(t=h.overallTrend)?"Improving":"down"===t?"Declining":"stable"===t?"Stable":"-"]].map(([e,t],r)=>(0,i.jsxs)("div",{style:{padding:7,textAlign:"center",borderLeft:r?"1px solid #111827":0},children:[(0,i.jsx)("div",{style:T,children:e}),(0,i.jsx)("div",{style:{...P,fontSize:j?10.5:12},children:t})]},e))}),(0,i.jsx)("div",{style:{marginTop:12,fontSize:j?9:10,fontWeight:950,textTransform:"uppercase",borderBottom:"1px solid #111827",paddingBottom:4},children:"Beginning of Academic Records"}),h.periods.map(e=>(0,i.jsxs)("div",{style:{marginTop:10,breakInside:"avoid"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gap:10,fontSize:j?9:10.2,fontWeight:950,padding:"5px 7px",background:"#f3f4f6",border:"1px solid #111827",borderBottom:0},children:[(0,i.jsx)("span",{children:e.academicPeriodName}),(0,i.jsx)("span",{children:e.className})]}),(0,i.jsxs)("table",{style:A,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...k,textAlign:"left"},children:v.subject}),!1!==f.showTotal&&(0,i.jsx)("th",{style:k,children:v.total}),!1!==f.showAverage&&(0,i.jsx)("th",{style:k,children:"%"}),!1!==f.showGrade&&(0,i.jsx)("th",{style:k,children:v.grade}),!1!==f.showSubjectPosition&&(0,i.jsx)("th",{style:k,children:v.position}),!1!==f.showSubjectRemarks&&(0,i.jsx)("th",{style:{...k,textAlign:"left"},children:"Remark"})]})}),(0,i.jsxs)("tbody",{children:[e.subjectResults.map(t=>(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{style:{...C,fontWeight:850},children:[t.subjectName,t.subjectCode&&(0,i.jsx)("div",{style:{fontSize:7.5,opacity:.75},children:t.subjectCode})]}),!1!==f.showTotal&&(0,i.jsx)("td",{style:{...C,textAlign:"center"},children:a(t.total??t.weightedTotal??t.percentage,1)}),!1!==f.showAverage&&(0,i.jsxs)("td",{style:{...C,textAlign:"center"},children:[a(t.percentage,1),"%"]}),!1!==f.showGrade&&(0,i.jsx)("td",{style:{...C,textAlign:"center",fontWeight:900},children:t.grade||"-"}),!1!==f.showSubjectPosition&&(0,i.jsx)("td",{style:{...C,textAlign:"center"},children:o(t.position)}),!1!==f.showSubjectRemarks&&(0,i.jsx)("td",{style:C,children:t.remark||"-"})]},`${e.academicPeriodId}-${t.subjectId||t.classSubjectId||t.subjectName}`)),!e.subjectResults.length&&(0,i.jsx)("tr",{children:(0,i.jsx)("td",{style:{...C,textAlign:"center",padding:12},colSpan:6,children:"No subject records for this period."})})]})]}),!1!==f.showTranscriptTermBreakdown&&(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",border:"1px solid #111827",borderTop:0,fontSize:j?8:9},children:[(0,i.jsxs)("div",{style:{padding:5},children:[(0,i.jsx)("strong",{children:"Term Total:"})," ",a(e.total,1)]}),(0,i.jsxs)("div",{style:{padding:5,borderLeft:"1px solid #d1d5db"},children:[(0,i.jsx)("strong",{children:"Term Avg:"})," ",a(e.average,1),"%"]}),(0,i.jsxs)("div",{style:{padding:5,borderLeft:"1px solid #d1d5db"},children:[(0,i.jsx)("strong",{children:"Term GPA:"})," ",null!=e.gpa?a(e.gpa,2):"-"]}),(0,i.jsxs)("div",{style:{padding:5,borderLeft:"1px solid #d1d5db"},children:[(0,i.jsx)("strong",{children:"Class Rank:"})," ",o(e.position)]})]})]},`${e.academicPeriodId}-${e.snapshotId||"p"}`)),(0,i.jsxs)("div",{style:{marginTop:12,border:"1px solid #111827",padding:8},children:[(0,i.jsx)("div",{style:{fontWeight:950,textTransform:"uppercase",fontSize:j?8:9,marginBottom:6},children:"End of Transcript Statistics"}),(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:6,fontSize:j?8.5:9.5},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Highest Avg:"})," ",a(h.highestAverage,1),"%"]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Lowest Avg:"})," ",a(h.lowestAverage,1),"%"]}),!1!==f.showTranscriptCumulativeAverage&&(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Cum Avg:"})," ",a(h.cumulativeAverage,1),"%"]}),!1!==f.showTranscriptCumulativePosition&&(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Latest Rank:"})," ",o(h.latestPosition)]})]})]}),(0,i.jsxs)("footer",{style:{marginTop:10,borderTop:"1px solid #111827",paddingTop:5,display:"flex",justifyContent:"space-between",fontSize:7.5,color:"#4b5563"},children:[(0,i.jsx)("span",{children:v.footer}),!1!==f.showGeneratedDate&&(0,i.jsxs)("span",{children:[v.generated,": ",(e=>{if(!e)return"-";let t=e instanceof Date?e:new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"})})(y)]})]})]})]})}},{name:"Cumulative Transcript Official",code:"cumulative_transcript_official",layoutKey:"cumulative_transcript_official",description:"Registrar-style official academic records layout inspired by university transcript structure.",reportType:"cumulative_transcript",orientation:"portrait",paperSize:"A4",density:"compact",active:!0,component:function(e){var t,r;let a,o,n,s,p,m,u,{header:g,transcript:h,settings:f,branding:x,primary:b,labels:v,generatedAt:y}=(a=e.header||e.dataset?.header,o=e.transcript??e.dataset?.transcript??null,n=e.settings||{},p=(s=a?.branding||{}).primaryColor||"#111827",m=e.dataset?.generatedAt||new Date,u={student:n.studentNameLabel||"Student",studentId:n.admissionNumberLabel||"Student ID",gender:n.genderLabel||"Gender",className:n.classLabel||"Programme / Class",period:n.academicPeriodLabel||"Academic Period",subject:n.subjectLabel||"Course / Subject",total:n.totalLabel||"Score",average:n.averageLabel||"Average",grade:n.gradeLabel||"Grade",position:n.subjectPositionLabel||"Rank",classPosition:n.classPositionLabel||"Cumulative Position",gpa:n.gpaLabel||"GPA",generated:n.generatedDateLabel||"Date Generated",footer:n.footerText||"Official cumulative academic transcript generated by Eleeveon Schools."},{header:a,transcript:o,settings:n,branding:s,primary:p,labels:u,generatedAt:m}),j=e.compact??!1,S=e.pageBreakAfter??!0;if(!h)return(0,i.jsx)(c,{header:g,title:"Official Academic Records",primary:b,compact:j,pageBreakAfter:S});let w={width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:j?"8mm":"10mm",boxSizing:"border-box",background:"#fff",color:"#000",fontFamily:x.fontFamily||"Times New Roman, serif",border:"1px solid #9ca3af",pageBreakAfter:S?"always":"auto"},N={width:"100%",borderCollapse:"collapse",fontSize:j?8:8.7},A={borderBottom:"1.5px solid #000",padding:"3px 4px",textAlign:"left",fontWeight:900},k={padding:"2.5px 4px",verticalAlign:"top",lineHeight:1.18};return(0,i.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page cumulative-transcript-official",style:w,children:[(0,i.jsxs)("header",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:12,borderBottom:"3px double #000",paddingBottom:7},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:j?15:17,fontWeight:900},children:d(x.schoolName,"Institution")}),(0,i.jsx)("div",{style:{fontSize:j?8:8.7,lineHeight:1.25},children:[x.address,x.website,x.email].filter(Boolean).join("\n")})]}),(0,i.jsxs)("div",{style:{textAlign:"right"},children:[x.logo&&(0,i.jsx)("img",{src:x.logo,alt:"Institution logo",style:{width:42,height:42,objectFit:"contain",marginBottom:3}}),(0,i.jsx)("div",{style:{fontSize:j?9:10,fontWeight:900,textTransform:"uppercase"},children:"Official Academic Records"})]})]}),(0,i.jsxs)("div",{style:{marginTop:8,fontSize:j?8.5:9.2,lineHeight:1.4},children:[(0,i.jsxs)("strong",{children:[v.student,":"]})," ",h.studentName,"\xa0\xa0",(0,i.jsxs)("strong",{children:[v.studentId,":"]})," ",h.admissionNumber||"-"," ","\xa0\xa0",(0,i.jsx)("strong",{children:"DOB/Gender:"})," ",h.gender||"-","\xa0\xa0",(0,i.jsxs)("strong",{children:[v.className,":"]})," ",h.currentClassName||"-"]}),(0,i.jsx)("div",{style:{marginTop:10,fontWeight:900,fontSize:j?9:10},children:"Beginning of Academic Records"}),h.periods.map(e=>(0,i.jsxs)("div",{style:{marginTop:9,breakInside:"avoid"},children:[(0,i.jsx)("div",{style:{fontSize:j?9:10,fontWeight:900},children:e.academicPeriodName}),(0,i.jsxs)("div",{style:{fontSize:j?7.6:8.2,marginBottom:2},children:[e.className,e.academicYear?` • ${e.academicYear}`:""]}),(0,i.jsxs)("table",{style:N,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...A,width:82},children:"Course Code"}),(0,i.jsx)("th",{style:A,children:"Course Description"}),(0,i.jsx)("th",{style:{...A,textAlign:"right"},children:"Score"}),(0,i.jsx)("th",{style:{...A,textAlign:"right"},children:"%"}),(0,i.jsx)("th",{style:{...A,textAlign:"right"},children:"Quality Pts"}),(0,i.jsx)("th",{style:{...A,textAlign:"center"},children:v.grade})]})}),(0,i.jsx)("tbody",{children:e.subjectResults.map(t=>{let r=null!=t.gpa?t.gpa:void 0;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{style:k,children:t.subjectCode||`SUB${t.subjectId||""}`}),(0,i.jsx)("td",{style:k,children:t.subjectName}),(0,i.jsx)("td",{style:{...k,textAlign:"right"},children:l(t.total??t.weightedTotal??t.percentage,1)}),(0,i.jsx)("td",{style:{...k,textAlign:"right"},children:l(t.percentage,1)}),(0,i.jsx)("td",{style:{...k,textAlign:"right"},children:null!=r?l(r,2):"-"}),(0,i.jsx)("td",{style:{...k,textAlign:"center",fontWeight:900},children:t.grade||"-"})]},`${e.academicPeriodId}-${t.subjectId||t.subjectName}`)})})]}),(0,i.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:3,fontSize:j?8:8.6},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Term GPA:"})," ",null!=e.gpa?l(e.gpa,3):"-"]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Cum GPA:"})," ",null!=h.cumulativeGPA?l(h.cumulativeGPA,3):"-"]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Term Totals:"})," ",l(e.total,1)," /"," ",l(e.average,1),"%"]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Cum Totals:"})," ",l(h.cumulativeTotal,1)," /"," ",l(h.cumulativeAverage,1),"%"]})]})]},`${e.academicPeriodId}-${e.snapshotId||"official"}`)),(0,i.jsxs)("div",{style:{marginTop:12,borderTop:"1.5px solid #000",paddingTop:6},children:[(0,i.jsx)("div",{style:{fontWeight:900,fontSize:j?9:10},children:"End of Transcript Statistics"}),(0,i.jsx)("table",{style:{...N,marginTop:3},children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{style:k,children:"Institution"}),(0,i.jsx)("td",{style:k,children:null!=h.cumulativeGPA?l(h.cumulativeGPA,3):"-"}),(0,i.jsxs)("td",{style:k,children:[l(h.cumulativeAverage,1),"%"]}),(0,i.jsx)("td",{style:k,children:l(h.cumulativeTotal,1)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{style:k,children:"Overall"}),(0,i.jsx)("td",{style:k,children:null!=h.cumulativeGPA?l(h.cumulativeGPA,3):"-"}),(0,i.jsxs)("td",{style:k,children:[l(h.cumulativeAverage,1),"%"]}),(0,i.jsx)("td",{style:k,children:"up"===(t=h.overallTrend)?"Improving":"down"===t?"Declining":"stable"===t?"Stable":"-"})]})]})})]}),!1!==f.showTranscriptFinalRecommendation&&(0,i.jsxs)("div",{style:{marginTop:8,fontSize:j?8:8.6},children:[(0,i.jsx)("strong",{children:"Latest Decision:"})," ",(r=h.latestDecision)?r.charAt(0).toUpperCase()+r.slice(1):"-"]}),(0,i.jsxs)("footer",{style:{marginTop:14,borderTop:"1px solid #000",paddingTop:4,display:"flex",justifyContent:"space-between",fontSize:7.5},children:[(0,i.jsx)("span",{children:"*** End of Transcript ***"}),!1!==f.showGeneratedDate&&(0,i.jsxs)("span",{children:[v.generated,": ",(e=>{if(!e)return"-";let t=e instanceof Date?e:new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"})})(y),"\xa0 Page 1 of 1"]})]})]})}},{name:"Cumulative Transcript Modern",code:"cumulative_transcript_modern",layoutKey:"cumulative_transcript_modern",description:"Clean modern cumulative transcript with summary metrics and readable period cards.",reportType:"cumulative_transcript",orientation:"portrait",paperSize:"A4",density:"comfortable",active:!0,component:function(e){var t;let r,a,o,n,s,l,d,{header:c,transcript:h,settings:f,branding:x,primary:b,labels:v,generatedAt:y}=(r=e.header||e.dataset?.header,a=e.transcript??e.dataset?.transcript??null,o=e.settings||{},s=(n=r?.branding||{}).primaryColor||"#111827",l=e.dataset?.generatedAt||new Date,d={student:o.studentNameLabel||"Student",studentId:o.admissionNumberLabel||"Student ID",gender:o.genderLabel||"Gender",className:o.classLabel||"Programme / Class",period:o.academicPeriodLabel||"Academic Period",subject:o.subjectLabel||"Course / Subject",total:o.totalLabel||"Score",average:o.averageLabel||"Average",grade:o.gradeLabel||"Grade",position:o.subjectPositionLabel||"Rank",classPosition:o.classPositionLabel||"Cumulative Position",gpa:o.gpaLabel||"GPA",generated:o.generatedDateLabel||"Date Generated",footer:o.footerText||"Official cumulative academic transcript generated by Eleeveon Schools."},{header:r,transcript:a,settings:o,branding:n,primary:s,labels:d,generatedAt:l}),j=e.compact??!1,S=e.pageBreakAfter??!0;if(!h)return(0,i.jsx)(g,{header:c,title:"Modern Cumulative Transcript",primary:b,compact:j,pageBreakAfter:S});let w={width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:j?"9mm":"11mm",boxSizing:"border-box",background:"linear-gradient(180deg,#ffffff,#f8fafc)",color:"#0f172a",fontFamily:x.fontFamily||"Arial, sans-serif",border:"1px solid #e2e8f0",borderRadius:18,pageBreakAfter:S?"always":"auto",overflow:"hidden"},N={border:"1px solid #e2e8f0",borderRadius:14,padding:j?6:8,background:"rgba(255,255,255,.9)"},A={width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:j?8.3:9.1,overflow:"hidden"},k={padding:j?4:6,background:b,color:"#fff",textAlign:"center",fontWeight:950,borderBottom:`1px solid ${b}`},C={padding:j?4:6,borderBottom:"1px solid #e5e7eb",verticalAlign:"top"};return(0,i.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page cumulative-transcript-modern",style:w,children:[(0,i.jsxs)("header",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:14,alignItems:"center"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:j?18:22,fontWeight:950,textTransform:"uppercase",color:"#0f172a"},children:u(x.schoolName,"School")}),(0,i.jsx)("div",{style:{marginTop:3,color:"#64748b",fontWeight:750,fontSize:j?8:9},children:[x.branchName,x.address,x.email].filter(Boolean).join(" • ")})]}),(0,i.jsx)("div",{style:{background:b,color:"#fff",borderRadius:999,padding:"8px 14px",fontSize:j?8:9,fontWeight:950,textTransform:"uppercase",textAlign:"center"},children:"Cumulative Transcript"})]}),(0,i.jsxs)("div",{style:{marginTop:12,display:"grid",gridTemplateColumns:"1.4fr repeat(4, 1fr)",gap:7},children:[(0,i.jsxs)("div",{style:{...N,gridRow:"span 2"},children:[(0,i.jsx)("div",{style:{fontSize:8,fontWeight:900,color:"#64748b",textTransform:"uppercase"},children:v.student}),(0,i.jsx)("div",{style:{fontSize:j?16:19,fontWeight:950},children:h.studentName}),(0,i.jsxs)("div",{style:{marginTop:4,fontSize:j?8:9,color:"#64748b",fontWeight:760},children:[v.studentId,": ",h.admissionNumber||"-"]})]}),[["Periods",h.totalPeriods],["Subjects",h.totalSubjects],[v.average,`${p(h.cumulativeAverage,1)}%`],[v.gpa,null!=h.cumulativeGPA?p(h.cumulativeGPA,2):"-"],["Highest",`${p(h.highestAverage,1)}%`],["Lowest",`${p(h.lowestAverage,1)}%`],["Latest Rank",m(h.latestPosition)],["Trend","up"===(t=h.overallTrend)?"Improving":"down"===t?"Declining":"stable"===t?"Stable":"-"]].map(([e,t])=>(0,i.jsxs)("div",{style:{...N,textAlign:"center"},children:[(0,i.jsx)("div",{style:{fontSize:7.5,fontWeight:900,color:"#64748b",textTransform:"uppercase"},children:e}),(0,i.jsx)("div",{style:{marginTop:2,fontSize:j?11:13,fontWeight:950},children:t})]},String(e)))]}),h.periods.map(e=>(0,i.jsxs)("div",{style:{marginTop:11,border:"1px solid #e2e8f0",borderRadius:16,overflow:"hidden",background:"#fff",breakInside:"avoid"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gap:12,padding:j?"7px 9px":"8px 11px",background:"#f8fafc",borderBottom:"1px solid #e2e8f0"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:e.academicPeriodName}),(0,i.jsx)("div",{style:{fontSize:8,color:"#64748b"},children:e.className})]}),(0,i.jsxs)("div",{style:{textAlign:"right",fontSize:8.5},children:[(0,i.jsxs)("strong",{children:[p(e.average,1),"%"]}),(0,i.jsx)("div",{style:{color:"#64748b"},children:"Term Average"})]})]}),(0,i.jsxs)("table",{style:A,children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...k,textAlign:"left"},children:v.subject}),(0,i.jsx)("th",{style:k,children:"%"}),(0,i.jsx)("th",{style:k,children:v.grade}),!1!==f.showSubjectPosition&&(0,i.jsx)("th",{style:k,children:v.position}),!1!==f.showSubjectRemarks&&(0,i.jsx)("th",{style:{...k,textAlign:"left"},children:"Remark"})]})}),(0,i.jsx)("tbody",{children:e.subjectResults.map(t=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{style:{...C,fontWeight:850},children:t.subjectName}),(0,i.jsxs)("td",{style:{...C,textAlign:"center"},children:[p(t.percentage,1),"%"]}),(0,i.jsx)("td",{style:{...C,textAlign:"center",fontWeight:950},children:t.grade||"-"}),!1!==f.showSubjectPosition&&(0,i.jsx)("td",{style:{...C,textAlign:"center"},children:m(t.position)}),!1!==f.showSubjectRemarks&&(0,i.jsx)("td",{style:C,children:t.remark||"-"})]},`${e.academicPeriodId}-${t.subjectId||t.subjectName}`))})]})]},`${e.academicPeriodId}-${e.snapshotId||"modern"}`)),(0,i.jsxs)("footer",{style:{marginTop:10,display:"flex",justifyContent:"space-between",fontSize:8,color:"#64748b",borderTop:"1px solid #e2e8f0",paddingTop:6},children:[(0,i.jsx)("span",{children:v.footer}),!1!==f.showGeneratedDate&&(0,i.jsxs)("span",{children:[v.generated,": ",(e=>{if(!e)return"-";let t=e instanceof Date?e:new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"})})(y)]})]})]})}},{name:"Cumulative Transcript Compact",code:"cumulative_transcript_compact",layoutKey:"cumulative_transcript_compact",description:"Print-efficient dense transcript for schools that need to save paper.",reportType:"cumulative_transcript",orientation:"portrait",paperSize:"A4",density:"compact",active:!0,component:function(e){var t;let r,a,o,n,s,l,d,{header:c,transcript:p,settings:m,branding:u,primary:g,labels:b,generatedAt:v}=(r=e.header||e.dataset?.header,a=e.transcript??e.dataset?.transcript??null,o=e.settings||{},s=(n=r?.branding||{}).primaryColor||"#111827",l=e.dataset?.generatedAt||new Date,d={student:o.studentNameLabel||"Student",studentId:o.admissionNumberLabel||"Student ID",gender:o.genderLabel||"Gender",className:o.classLabel||"Programme / Class",period:o.academicPeriodLabel||"Academic Period",subject:o.subjectLabel||"Course / Subject",total:o.totalLabel||"Score",average:o.averageLabel||"Average",grade:o.gradeLabel||"Grade",position:o.subjectPositionLabel||"Rank",classPosition:o.classPositionLabel||"Cumulative Position",gpa:o.gpaLabel||"GPA",generated:o.generatedDateLabel||"Date Generated",footer:o.footerText||"Official cumulative academic transcript generated by Eleeveon Schools."},{header:r,transcript:a,settings:o,branding:n,primary:s,labels:d,generatedAt:l}),y=e.pageBreakAfter??!0;if(!p)return(0,i.jsx)(x,{header:c,title:"Compact Cumulative Transcript",primary:g,compact:!0,pageBreakAfter:y});let j={width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:"7mm",boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:u.fontFamily||"Arial, sans-serif",border:"1px solid #d1d5db",pageBreakAfter:y?"always":"auto"},S={border:"1px solid #111",padding:2.5,background:g,color:"#fff",fontWeight:900,textAlign:"center"},w={border:"1px solid #555",padding:2.5,verticalAlign:"top",lineHeight:1.12};return(0,i.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page cumulative-transcript-compact",style:j,children:[(0,i.jsxs)("header",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"flex-start",borderBottom:"2px solid #111",paddingBottom:5},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:13,fontWeight:950,textTransform:"uppercase"},children:f(u.schoolName,"School")}),(0,i.jsx)("div",{style:{fontSize:7.2},children:[u.branchName,u.phone,u.email].filter(Boolean).join(" • ")})]}),(0,i.jsx)("div",{style:{textAlign:"right",fontSize:8,fontWeight:950,textTransform:"uppercase"},children:"Cumulative Transcript"})]}),(0,i.jsxs)("div",{style:{marginTop:5,display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr",gap:3,fontSize:7.4},children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("strong",{children:[b.student,":"]})," ",p.studentName]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"ID:"})," ",p.admissionNumber||"-"]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Class:"})," ",p.currentClassName||"-"]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Avg:"})," ",h(p.cumulativeAverage,1),"%"]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"GPA:"})," ",null!=p.cumulativeGPA?h(p.cumulativeGPA,2):"-"]})]}),(0,i.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:7.4,marginTop:5},children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{...S,textAlign:"left",width:76},children:"Period"}),(0,i.jsx)("th",{style:{...S,textAlign:"left"},children:b.subject}),(0,i.jsx)("th",{style:S,children:"Score"}),(0,i.jsx)("th",{style:S,children:"%"}),(0,i.jsx)("th",{style:S,children:b.grade}),(0,i.jsx)("th",{style:S,children:"Rank"}),(0,i.jsx)("th",{style:{...S,textAlign:"left"},children:"Remark"})]})}),(0,i.jsx)("tbody",{children:p.periods.flatMap(e=>e.subjectResults.map((t,r)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{style:w,children:0===r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("strong",{children:e.academicPeriodName}),(0,i.jsx)("br",{}),e.className,(0,i.jsx)("br",{}),"Avg: ",h(e.average,1),"%"]}):""}),(0,i.jsx)("td",{style:{...w,fontWeight:800},children:t.subjectName}),(0,i.jsx)("td",{style:{...w,textAlign:"center"},children:h(t.total??t.weightedTotal??t.percentage,1)}),(0,i.jsx)("td",{style:{...w,textAlign:"center"},children:h(t.percentage,1)}),(0,i.jsx)("td",{style:{...w,textAlign:"center",fontWeight:900},children:t.grade||"-"}),(0,i.jsx)("td",{style:{...w,textAlign:"center"},children:(e=>{if(!e)return"-";let t=["th","st","nd","rd"],r=e%100;return`${e}${t[(r-20)%10]||t[r]||t[0]}`})(t.position)}),(0,i.jsx)("td",{style:w,children:t.remark||"-"})]},`${e.academicPeriodId}-${t.subjectId||t.subjectName}-${r}`)))})]}),(0,i.jsx)("div",{style:{marginTop:5,display:"grid",gridTemplateColumns:"repeat(6, 1fr)",border:"1px solid #111",fontSize:7.2},children:[["Periods",p.totalPeriods],["Subjects",p.totalSubjects],["Cum Total",h(p.cumulativeTotal,1)],["Cum Avg",`${h(p.cumulativeAverage,1)}%`],["High",`${h(p.highestAverage,1)}%`],["Trend","up"===(t=p.overallTrend)?"Improving":"down"===t?"Declining":"stable"===t?"Stable":"-"]].map(([e,t],r)=>(0,i.jsxs)("div",{style:{padding:3,borderLeft:r?"1px solid #111":0},children:[(0,i.jsxs)("strong",{children:[e,":"]})," ",t]},String(e)))}),(0,i.jsxs)("footer",{style:{marginTop:5,display:"flex",justifyContent:"space-between",borderTop:"1px solid #111",paddingTop:3,fontSize:6.8},children:[(0,i.jsx)("span",{children:b.footer}),!1!==m.showGeneratedDate&&(0,i.jsxs)("span",{children:[b.generated,": ",(e=>{if(!e)return"-";let t=e instanceof Date?e:new Date(e);return Number.isNaN(t.getTime())?String(e):t.toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"})})(v)]})]})]})}}];function v(e){let t=String(e||"").trim();return b.find(e=>e.code===t||e.layoutKey===t)||b[0]}function y(e){return v(e).component}},75290:(e,t,r)=>{function i(e){return"function"==typeof structuredClone?structuredClone(e):JSON.parse(JSON.stringify(e))}function a(e){if(!e)return{payload:null,dataset:null,migratedFromLegacy:!1};let t=e.reportData??e;if(t&&"object"==typeof t&&Number(t.schemaVersion)>=2&&t.dataset&&t.report){let e=i(t.dataset),r=new Map(t.assessmentSubjects.map(e=>[e.classSubjectId||e.subjectId||e.subjectName,e])),a=e.report||i(t.report);return a?(a.subjectResults=a.subjectResults.map(e=>{let i=r.get(e.classSubjectId||e.subjectId||e.subjectName);return i?{...e,gradingStructureId:i.gradingStructureId||i.gradingSystemId||e.gradingStructureId||e.gradingSystemId,assessmentProjection:i.assessmentProjection,assessmentReportSettings:i.assessmentReportSettings||t.assessmentReportSettings,breakdown:i.breakdown||e.breakdown}:e}),e.report=a,e.assessmentReportSettings=t.assessmentReportSettings,{payload:t,dataset:e,migratedFromLegacy:!1}):{payload:t,dataset:null,migratedFromLegacy:!1}}return{payload:null,dataset:function(e){if(!e||"object"!=typeof e)return null;if(e.dataset?.report)return e.dataset;if(e.report&&e.header)return e;if(e.studentReport?.subjectResults||e.computedReport?.subjectResults||e.computedStudentReport?.subjectResults||e.subjectResults){let t=e.studentReport||e.computedReport||e.computedStudentReport||e;return{...e,report:t,header:e.header||{}}}return null}(t),migratedFromLegacy:!0}}function o(e){return a(e).dataset}r.d(t,{BA:()=>o,yt:()=>a}),r(59816),r(32242)}}]);
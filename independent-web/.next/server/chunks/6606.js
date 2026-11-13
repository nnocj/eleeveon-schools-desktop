"use strict";exports.id=6606,exports.ids=[6606],exports.modules={14910:(a,b,c)=>{function d(a){return"function"==typeof structuredClone?structuredClone(a):JSON.parse(JSON.stringify(a))}function e(a){if(!a)return{payload:null,dataset:null,migratedFromLegacy:!1};let b=a.reportData??a;if(b&&"object"==typeof b&&Number(b.schemaVersion)>=2&&b.dataset&&b.report){let a=d(b.dataset),c=new Map(b.assessmentSubjects.map(a=>[a.classSubjectId||a.subjectId||a.subjectName,a])),e=a.report||d(b.report);return e?(e.subjectResults=e.subjectResults.map(a=>{let d=c.get(a.classSubjectId||a.subjectId||a.subjectName);return d?{...a,gradingStructureId:d.gradingStructureId||d.gradingSystemId||a.gradingStructureId||a.gradingSystemId,assessmentProjection:d.assessmentProjection,assessmentReportSettings:d.assessmentReportSettings||b.assessmentReportSettings,breakdown:d.breakdown||a.breakdown}:a}),a.report=e,a.assessmentReportSettings=b.assessmentReportSettings,{payload:b,dataset:a,migratedFromLegacy:!1}):{payload:b,dataset:null,migratedFromLegacy:!1}}return{payload:null,dataset:function(a){if(!a||"object"!=typeof a)return null;if(a.dataset?.report)return a.dataset;if(a.report&&a.header)return a;if(a.studentReport?.subjectResults||a.computedReport?.subjectResults||a.computedStudentReport?.subjectResults||a.subjectResults){let b=a.studentReport||a.computedReport||a.computedStudentReport||a;return{...a,report:b,header:a.header||{}}}return null}(b),migratedFromLegacy:!0}}function f(a){return e(a).dataset}c.d(b,{BA:()=>f,yt:()=>e}),c(84884),c(45284)},15096:(a,b,c)=>{c.d(b,{A:()=>z});var d=c(48249),e=c(67484),f=c(18169),g=c(45284);function h(a){let b=a?.header?.branding||{},c=a?.header||{},d=a?.branding||{};return{schoolName:(0,g.ou)(d.schoolName,b.schoolName,c.schoolName,c.school?.name,"School Name"),branchName:(0,g.ou)(d.branchName,b.branchName,c.branchName,c.branch?.name),motto:(0,g.ou)(d.motto,b.motto,c.school?.motto),logo:(0,g.ou)(d.logo,d.resolvedLogoUrl,b.logo,b.resolvedLogoUrl,c.logo,c.resolvedLogoUrl,c.schoolBranchSetting?.logo,c.schoolBranchSetting?.resolvedLogoUrl,c.school?.logo,c.school?.resolvedLogoUrl,c.branch?.logo,c.branch?.resolvedLogoUrl),address:(0,g.ou)(d.address,b.address,c.school?.address),phone:(0,g.ou)(d.phone,b.phone,c.school?.phone),email:(0,g.ou)(d.email,b.email,c.school?.email),website:(0,g.ou)(d.website,b.website,c.school?.website),primaryColor:(0,g.ou)(d.primaryColor,b.primaryColor,c.primaryColor,"#1d4ed8"),fontFamily:(0,g.ou)(d.fontFamily,b.fontFamily,c.fontFamily,"Arial, sans-serif"),reportCardBackgroundImage:(0,g.ou)(d.reportCardBackgroundImage,d.resolvedReportCardBackgroundImage,b.reportCardBackgroundImage,b.resolvedReportCardBackgroundImage,c.reportCardBackgroundImage,c.resolvedReportCardBackgroundImage,c.schoolBranchSetting?.reportCardBackgroundImage,c.schoolBranchSetting?.resolvedReportCardBackgroundImage),reportCardWatermark:(0,g.ou)(d.reportCardWatermark,d.resolvedReportCardWatermark,b.reportCardWatermark,b.resolvedReportCardWatermark,c.reportCardWatermark,c.resolvedReportCardWatermark,c.schoolBranchSetting?.reportCardWatermark,c.schoolBranchSetting?.resolvedReportCardWatermark,d.logo,d.resolvedLogoUrl,b.logo,b.resolvedLogoUrl,c.logo,c.resolvedLogoUrl,c.schoolBranchSetting?.logo,c.school?.logo,c.branch?.logo),reportCardSignatureImage:(0,g.ou)(d.reportCardSignatureImage,d.resolvedReportCardSignatureImage,b.reportCardSignatureImage,b.resolvedReportCardSignatureImage,c.reportCardSignatureImage,c.resolvedReportCardSignatureImage,c.schoolBranchSetting?.reportCardSignatureImage,c.schoolBranchSetting?.resolvedReportCardSignatureImage)}}function i(a){let b=a?.periods?.[0]?.dataset,c=b?.report||{},d=b?.student||{},e=b?.studentInfo||{},f=a?.student||a?.studentInfo||{};return{id:f.id||d.id||c.studentId,fullName:(0,g.ou)(f.fullName,f.name,d.fullName,d.name,c.studentName,"Student Name"),admissionNumber:(0,g.ou)(f.admissionNumber,d.admissionNumber,c.admissionNumber),gender:(0,g.ou)(f.gender,d.gender,c.gender),className:(0,g.ou)(f.className,f.currentClassName,c.className),photo:(0,g.ou)(f.photo,f.studentPhoto,f.resolvedPhotoUrl,f.resolvedStudentPhotoUrl,e.studentPhoto,e.photo,e.resolvedPhotoUrl,e.resolvedStudentPhotoUrl,d.studentPhoto,d.photo,d.resolvedPhotoUrl,d.resolvedStudentPhotoUrl,c.studentPhoto,c.photo),dateOfBirth:(0,g.ou)(f.dateOfBirth,d.dateOfBirth),parentName:(0,g.ou)(f.parentName,d.parentName),parentPhone:(0,g.ou)(f.parentPhone,d.parentPhone),parentEmail:(0,g.ou)(f.parentEmail,d.parentEmail),address:(0,g.ou)(f.address,d.address)}}function j(a,b){let c=(0,g.ou)(a?.code,a?.templateCode,a?.layoutKey,a?.templateKey,b?.templateCode,b?.layoutKey,"classic_formal").toLowerCase();return c.includes("modern")?"modern":c.includes("bordered")||c.includes("traditional")?"traditional":c.includes("letterhead")||c.includes("premium")?"premium":c.includes("side")?"sideProfile":c.includes("cambridge")?"cambridge":"ib"===c||c.includes("international")?"ib":c.includes("kindergarten")?"kindergarten":c.includes("montessori")?"montessori":c.includes("university")||c.includes("transcript")?"transcript":c.includes("compact")?"compact":"classic"}function k(a){let b=a?.periods||[],c=b.map(a=>Number(a.average??a.dataset?.report?.average)).filter(a=>Number.isFinite(a)),d=b.map(a=>Number(a.position??a.dataset?.report?.overallPosition)).filter(a=>Number.isFinite(a)&&a>0),e=b.map(a=>Number(a.gpa??a.dataset?.report?.overallGPA)).filter(a=>Number.isFinite(a)),f=c.length?c[0]:null,g=c.length?c[c.length-1]:null,h=c.length?Math.max(...c):null,i=c.length?c.reduce((a,b)=>a+b,0)/c.length:null,j=e.length?e.reduce((a,b)=>a+b,0)/e.length:null,k="none";if(null!=f&&null!=g&&c.length>1){let a=g-f;k=1>Math.abs(a)?"stable":a>0?"up":"down"}return{totalPeriods:b.length,firstPeriodName:l(b[0]),latestPeriodName:l(b[b.length-1]),firstAverage:f,latestAverage:g,bestAverage:h,cumulativeAverage:i,cumulativeGPA:j,bestPosition:d.length?Math.min(...d):null,latestPosition:d.length?d[d.length-1]:null,trend:k,...a?.summary||{}}}function l(a){return(0,g.ou)(a?.academicPeriodName,a?.title,a?.label,a?.term,a?.dataset?.header?.academicPeriod?.name,a?.dataset?.header?.academicPeriodName,"Academic Period")}function m(a){let b=a.tone||"classic";return{width:"210mm",minHeight:"297mm",margin:"0 auto 18px",padding:a.compact?"10mm":"12mm",boxSizing:"border-box",position:"relative",overflow:"hidden",background:"kindergarten"===b?"linear-gradient(180deg,#fff8f1,#ffffff 42%,#f0fdfa)":"montessori"===b?"linear-gradient(180deg,#fffdf7,#ffffff 48%,#f8faf4)":"premium"===b?"linear-gradient(180deg,#fff,#fffaf0)":"#ffffff",color:"#111827",fontFamily:a.fontFamily,border:"transcript"===b?"1px solid #111827":"1px solid #d1d5db",borderRadius:"transcript"===b?2:"classic"===b?6:18,boxShadow:"0 18px 48px rgba(15,23,42,.10)",pageBreakAfter:a.pageBreakAfter?"always":"auto",breakAfter:a.pageBreakAfter?"page":"auto"}}function n(a,b){return"transcript"===b?{margin:"0 0 8px",padding:"6px 8px",background:"#111827",color:"#fff",fontSize:10,fontWeight:900,letterSpacing:.5,textTransform:"uppercase"}:{margin:"0 0 8px",color:a,fontSize:12,fontWeight:950,letterSpacing:.35,textTransform:"uppercase"}}function o({dataset:a,template:b,settings:c,compact:e=!1,pageBreakAfter:f=!0}){let k=h(a),l=i(a),n=j(b,c),p=k.primaryColor||"#1d4ed8",q=function(a){let b=(a||"#ffffff").replace("#","");if(b.startsWith("rgb"))return"#fff";3===b.length&&(b=b.split("").map(a=>a+a).join(""));let c=parseInt(b,16);return(299*(c>>16&255)+587*(c>>8&255)+114*(255&c))/1e3>140?"#111827":"#fff"}(p),r=c?.showGeneratedDate===!1?"":(0,g.kn)(a?.generatedAt||new Date),s=(0,g.ou)(c?.bookTitleLabel,a?.title,"Cumulative Academic Report Book"),t=(0,g.ou)(c?.bookSubtitleLabel,a?.subtitle,"Complete academic record across published report periods"),u=m({primary:p,fontFamily:k.fontFamily||"Arial, sans-serif",compact:e,pageBreakAfter:f,tone:n});return(0,d.jsxs)("section",{className:"print-page cumulative-book-page cumulative-book-front-cover",style:u,children:[(0,d.jsx)("div",{"aria-hidden":"true",style:{position:"absolute",inset:"transcript"===n?"8mm":"7mm",border:"premium"===n?`2px double ${p}`:`1px solid ${"montessori"===n?"#c8bda8":"#d1d5db"}`,borderRadius:18*("transcript"!==n),pointerEvents:"none"}}),k.reportCardWatermark&&(0,d.jsx)("img",{src:k.reportCardWatermark,alt:"","aria-hidden":"true",style:{position:"absolute",width:"58%",maxHeight:"58%",objectFit:"contain",opacity:"transcript"===n?.025:.045,left:"50%",top:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none"}}),(0,d.jsxs)("div",{style:{position:"relative",zIndex:1,minHeight:"267mm",display:"flex",flexDirection:"column"},children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:16},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{style:{fontSize:e?20:25,fontWeight:950,textTransform:"uppercase",letterSpacing:.35},children:k.schoolName}),k.motto&&(0,d.jsx)("div",{style:{marginTop:4,fontSize:e?9:10.5,fontStyle:"italic",fontWeight:700,color:"#4b5563"},children:k.motto}),k.branchName&&(0,d.jsx)("div",{style:{marginTop:4,fontSize:e?8.5:9.5,fontWeight:850,color:p},children:k.branchName})]}),(0,d.jsx)("div",{style:{width:e?62:74,height:e?62:74,border:`1px solid ${"transcript"===n?"#111827":"#d1d5db"}`,borderRadius:18*("transcript"!==n),display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#fff"},children:k.logo?(0,d.jsx)("img",{src:k.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:6,boxSizing:"border-box"}}):(0,d.jsxs)("span",{style:{fontSize:8,fontWeight:900,color:"#6b7280",textAlign:"center"},children:["SCHOOL",(0,d.jsx)("br",{}),"LOGO"]})})]}),(0,d.jsx)("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:(0,d.jsxs)("div",{style:{width:"86%",maxWidth:560},children:[(0,d.jsx)("div",{style:{display:"inline-flex",padding:"transcript"===n?"8px 16px":"9px 18px",borderRadius:999*("transcript"!==n),background:p,color:q,fontSize:e?9:10.5,fontWeight:950,textTransform:"uppercase",letterSpacing:.6},children:"Academic Portfolio"}),(0,d.jsx)("h1",{style:{margin:"22px 0 8px",fontSize:e?28:38,lineHeight:1.02,fontWeight:"montessori"===n?720:950,textTransform:"kindergarten"===n||"montessori"===n?"none":"uppercase",letterSpacing:"transcript"===n?.9:.2},children:s}),(0,d.jsx)("div",{style:{margin:"0 auto",width:120,height:"transcript"===n?2:4,background:p,borderRadius:999}}),(0,d.jsx)("p",{style:{margin:"14px auto 0",fontSize:e?10.5:12,lineHeight:1.45,color:"#4b5563",fontWeight:700},children:t}),(0,d.jsxs)("div",{style:{margin:"28px auto 0",padding:e?14:18,border:`1px solid ${"transcript"===n?"#111827":"#e5e7eb"}`,borderRadius:18*("transcript"!==n),background:"transcript"===n?"#fff":"rgba(255,255,255,.78)"},children:[(0,d.jsx)("div",{style:{fontSize:e?8:9,fontWeight:900,textTransform:"uppercase",letterSpacing:.4,color:"#6b7280"},children:"Prepared For"}),(0,d.jsx)("div",{style:{marginTop:4,fontSize:e?20:24,fontWeight:950,color:"#111827"},children:l.fullName}),(0,d.jsxs)("div",{style:{marginTop:8,display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap",fontSize:e?9:10,fontWeight:850,color:"#374151"},children:[l.admissionNumber&&(0,d.jsxs)("span",{children:["Admission No: ",l.admissionNumber]}),l.className&&(0,d.jsxs)("span",{children:["Class: ",l.className]}),(0,d.jsxs)("span",{children:[a?.periods?.length||0," Report Periods"]})]})]})]})}),(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gap:12,alignItems:"flex-end",fontSize:e?8:9,color:"#4b5563",fontWeight:750},children:[(0,d.jsx)("span",{children:k.address||k.email||k.website||"Official school academic record"}),r&&(0,d.jsxs)("span",{children:[c?.generatedDateLabel||"Generated",": ",r]})]})]})]})}function p({dataset:a,template:b,settings:c,compact:e=!1,pageBreakAfter:f=!0}){let k=h(a),l=i(a),o=j(b,c),r=k.primaryColor||"#1d4ed8",s=m({primary:r,fontFamily:k.fontFamily||"Arial, sans-serif",compact:e,pageBreakAfter:f,tone:o}),t=[["Student Name",l.fullName],["Admission Number",l.admissionNumber],["Gender",l.gender],["Current / Latest Class",l.className],["Date of Birth",l.dateOfBirth],["Parent / Guardian",l.parentName],["Parent Phone",l.parentPhone],["Parent Email",l.parentEmail],["Address",l.address]].filter(([,a])=>(0,g.ou)(a));return(0,d.jsxs)("section",{className:"print-page cumulative-book-page cumulative-book-student-profile",style:s,children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,borderBottom:`2px solid ${r}`,paddingBottom:8},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{style:{fontSize:e?8:9,fontWeight:900,color:"#6b7280",textTransform:"uppercase",letterSpacing:.5},children:"Cumulative Report Book"}),(0,d.jsx)("div",{style:{marginTop:2,fontSize:e?18:21,fontWeight:950},children:k.schoolName})]}),k.logo&&(0,d.jsx)("img",{src:k.logo,alt:"School logo",style:{width:e?40:48,height:e?40:48,objectFit:"contain"}})]}),(0,d.jsxs)("div",{style:{marginTop:18},children:[(0,d.jsx)("h2",{style:n(r,o),children:"Student Profile"}),(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:c?.showStudentPhoto===!1?"1fr":"116px 1fr",gap:16,alignItems:"start"},children:[c?.showStudentPhoto!==!1&&(0,d.jsx)("div",{style:{border:"1px solid #d1d5db",borderRadius:16*("transcript"!==o),height:136,overflow:"hidden",background:"#f9fafb",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,g.ou)(l.photo,l.studentPhoto,l.resolvedPhotoUrl,l.resolvedStudentPhotoUrl)?(0,d.jsx)("img",{src:(0,g.ou)(l.photo,l.studentPhoto,l.resolvedPhotoUrl,l.resolvedStudentPhotoUrl),alt:"Student",style:{width:"100%",height:"100%",objectFit:"cover"}}):(0,d.jsx)("span",{style:{fontSize:10,fontWeight:900,color:"#6b7280"},children:"PHOTO"})}),(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:8},children:t.map(([a,b])=>(0,d.jsxs)("div",{style:{border:"1px solid #e5e7eb",borderRadius:12*("transcript"!==o),padding:e?7:9,background:"rgba(255,255,255,.78)"},children:[(0,d.jsx)("div",{style:{fontSize:e?7:7.8,color:"#6b7280",fontWeight:900,textTransform:"uppercase",letterSpacing:.35},children:a}),(0,d.jsx)("div",{style:{marginTop:2,fontSize:e?10:11,fontWeight:850,color:"#111827",overflowWrap:"anywhere"},children:b})]},a))})]})]}),(0,d.jsxs)("div",{style:{marginTop:18},children:[(0,d.jsx)("h2",{style:n(r,o),children:"Report Coverage"}),(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gap:8},children:[(0,d.jsx)(q,{label:"Published Periods",value:String(a?.periods?.length||0),tone:o,compact:e}),(0,d.jsx)(q,{label:"First Period",value:a?.summary?.firstPeriodName||"-",tone:o,compact:e}),(0,d.jsx)(q,{label:"Latest Period",value:a?.summary?.latestPeriodName||"-",tone:o,compact:e})]})]}),(0,d.jsxs)("div",{style:{marginTop:18},children:[(0,d.jsx)("h2",{style:n(r,o),children:"Purpose of This Book"}),(0,d.jsx)("p",{style:{margin:0,fontSize:e?10:11,lineHeight:1.55,color:"#374151",fontWeight:650},children:"This booklet assembles the learner's published academic report cards across the available academic periods. It is designed for parent review, school archives, transfers, progression discussions and long-term academic tracking."})]})]})}function q({label:a,value:b,tone:c,compact:e}){return(0,d.jsxs)("div",{style:{border:"1px solid #e5e7eb",borderRadius:12*("transcript"!==c),padding:e?8:10,background:"#fff"},children:[(0,d.jsx)("div",{style:{fontSize:e?7:7.8,color:"#6b7280",fontWeight:900,textTransform:"uppercase",letterSpacing:.3},children:a}),(0,d.jsx)("div",{style:{marginTop:3,fontSize:e?11:12.5,fontWeight:950,color:"#111827"},children:b})]})}function r({dataset:a,template:b,settings:c,compact:e=!1,pageBreakAfter:f=!0}){let i=h(a),k=j(b,c),o=i.primaryColor||"#1d4ed8",p=m({primary:o,fontFamily:i.fontFamily||"Arial, sans-serif",compact:e,pageBreakAfter:f,tone:k}),q=a?.periods||[];return(0,d.jsxs)("section",{className:"print-page cumulative-book-page cumulative-book-academic-journey",style:p,children:[(0,d.jsxs)("div",{style:{borderBottom:`2px solid ${o}`,paddingBottom:8},children:[(0,d.jsx)("div",{style:{fontSize:e?8:9,fontWeight:900,color:"#6b7280",textTransform:"uppercase",letterSpacing:.5},children:"Academic Journey"}),(0,d.jsx)("div",{style:{marginTop:2,fontSize:e?18:21,fontWeight:950},children:i.schoolName})]}),(0,d.jsxs)("div",{style:{marginTop:18},children:[(0,d.jsx)("h2",{style:n(o,k),children:"Timeline of Published Reports"}),(0,d.jsxs)("div",{style:{display:"grid",gap:8},children:[q.map((a,b)=>{let c,f,h=a.dataset?.report||{},i=Number(a.average??h.average),j=Number(a.position??h.overallPosition),m=Number(a.gpa??h.overallGPA);return(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"34px minmax(0, 1fr) repeat(3, 76px)",gap:8,alignItems:"center",border:"1px solid #e5e7eb",borderRadius:14*("transcript"!==k),padding:e?7:9,background:b%2?"#fff":"rgba(248,250,252,.78)"},children:[(0,d.jsx)("div",{style:{width:30,height:30,borderRadius:999*("transcript"!==k),background:o,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:950,fontSize:10},children:b+1}),(0,d.jsxs)("div",{style:{minWidth:0},children:[(0,d.jsx)("div",{style:{fontSize:e?10:11.3,fontWeight:950,color:"#111827"},children:l(a)}),(0,d.jsx)("div",{style:{marginTop:2,fontSize:e?7.5:8.3,color:"#6b7280",fontWeight:750},children:(c=(0,g.ou)(a?.formattedStartDate,(0,g.kn)(a?.startDate)),f=(0,g.ou)(a?.formattedEndDate,(0,g.kn)(a?.endDate)),(c&&f?`${c} – ${f}`:c||f||"")||a.academicYear||"Published report period")})]}),(0,d.jsx)(s,{label:"Average",value:Number.isFinite(i)?`${(0,g.ZV)(i,1)}%`:"-",compact:e}),(0,d.jsx)(s,{label:"Position",value:Number.isFinite(j)?(0,g.IE)(j):"-",compact:e}),(0,d.jsx)(s,{label:"GPA",value:Number.isFinite(m)?(0,g.ZV)(m,2):"-",compact:e})]},String(a.id||a.academicPeriodId||b))}),!q.length&&(0,d.jsx)("div",{style:{border:"1px dashed #cbd5e1",padding:18,borderRadius:14,textAlign:"center",color:"#64748b",fontWeight:800},children:"No published report snapshots are available for this cumulative book."})]})]})]})}function s({label:a,value:b,compact:c}){return(0,d.jsxs)("div",{style:{textAlign:"center",borderLeft:"1px solid #e5e7eb",paddingLeft:8},children:[(0,d.jsx)("div",{style:{fontSize:c?6.8:7.4,color:"#6b7280",fontWeight:900,textTransform:"uppercase"},children:a}),(0,d.jsx)("div",{style:{marginTop:2,fontSize:c?9.5:10.5,fontWeight:950},children:b})]})}function t({dataset:a,template:b,settings:c,compact:e=!1,pageBreakAfter:f=!0}){var i,l;let o=h(a),p=j(b,c),q=o.primaryColor||"#1d4ed8",r=k(a),s=m({primary:q,fontFamily:o.fontFamily||"Arial, sans-serif",compact:e,pageBreakAfter:f,tone:p}),v=[["Report Periods",String(r.totalPeriods||0)],["First Average",null==r.firstAverage?"-":`${(0,g.ZV)(r.firstAverage,1)}%`],["Latest Average",null==r.latestAverage?"-":`${(0,g.ZV)(r.latestAverage,1)}%`],["Best Average",null==r.bestAverage?"-":`${(0,g.ZV)(r.bestAverage,1)}%`],["Cumulative Average",null==r.cumulativeAverage?"-":`${(0,g.ZV)(r.cumulativeAverage,1)}%`],["Cumulative GPA",null==r.cumulativeGPA?"-":(0,g.ZV)(r.cumulativeGPA,2)],["Best Position",null==r.bestPosition?"-":(0,g.IE)(r.bestPosition)],["Latest Position",null==r.latestPosition?"-":(0,g.IE)(r.latestPosition)],["Trend","up"===(i=r.trend)?"Improving":"down"===i?"Needs attention":"stable"===i?"Stable":"Not enough data"],["Recommendation",(l=r.finalRecommendation)?l.charAt(0).toUpperCase()+l.slice(1):"-"]];return(0,d.jsxs)("section",{className:"print-page cumulative-book-page cumulative-book-summary",style:s,children:[(0,d.jsxs)("div",{style:{borderBottom:`2px solid ${q}`,paddingBottom:8},children:[(0,d.jsx)("div",{style:{fontSize:e?8:9,fontWeight:900,color:"#6b7280",textTransform:"uppercase",letterSpacing:.5},children:"Academic Summary"}),(0,d.jsx)("div",{style:{marginTop:2,fontSize:e?18:21,fontWeight:950},children:o.schoolName})]}),(0,d.jsxs)("div",{style:{marginTop:18},children:[(0,d.jsx)("h2",{style:n(q,p),children:"Cumulative Performance Snapshot"}),(0,d.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, minmax(0, 1fr))",gap:8},children:v.map(([a,b])=>(0,d.jsxs)("div",{style:{border:"1px solid #e5e7eb",borderRadius:14*("transcript"!==p),padding:e?8:10,background:"#fff",minHeight:54},children:[(0,d.jsx)("div",{style:{fontSize:e?6.8:7.4,fontWeight:900,color:"#6b7280",textTransform:"uppercase",letterSpacing:.25},children:a}),(0,d.jsx)("div",{style:{marginTop:4,fontSize:e?10.5:12,fontWeight:950,color:"#111827",overflowWrap:"anywhere"},children:b})]},a))})]}),(0,d.jsxs)("div",{style:{marginTop:18},children:[(0,d.jsx)("h2",{style:n(q,p),children:"Academic Reading Guide"}),(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[(0,d.jsx)(u,{title:"How to read this book",text:"Each report-card page after this section represents one published academic period. The page uses the same selected student report template, so the book remains visually consistent from period to period."}),(0,d.jsx)(u,{title:"How cumulative values are estimated",text:"The summary values are derived from the available published report snapshots. If a period has no published snapshot, it is not included in this booklet."})]})]}),Array.isArray(a?.notes)&&a.notes.length>0&&(0,d.jsxs)("div",{style:{marginTop:18},children:[(0,d.jsx)("h2",{style:n(q,p),children:"School Notes"}),(0,d.jsx)("ul",{style:{margin:0,paddingLeft:18,fontSize:e?9.5:10.5,lineHeight:1.55,color:"#374151",fontWeight:650},children:a.notes.map((a,b)=>(0,d.jsx)("li",{children:a},b))})]})]})}function u({title:a,text:b}){return(0,d.jsxs)("div",{style:{border:"1px solid #e5e7eb",borderRadius:14,padding:11,background:"rgba(255,255,255,.78)"},children:[(0,d.jsx)("div",{style:{fontSize:10.5,fontWeight:950,color:"#111827"},children:a}),(0,d.jsx)("p",{style:{margin:"5px 0 0",fontSize:9.5,lineHeight:1.45,color:"#4b5563",fontWeight:650},children:b})]})}function v({dataset:a,template:b,settings:c,compact:e=!1,pageBreakAfter:f=!1}){let i=h(a),k=j(b,c),l=i.primaryColor||"#1d4ed8",n=m({primary:l,fontFamily:i.fontFamily||"Arial, sans-serif",compact:e,pageBreakAfter:f,tone:k});return(0,d.jsx)("section",{className:"print-page cumulative-book-page cumulative-book-back-cover",style:n,children:(0,d.jsxs)("div",{style:{minHeight:"267mm",display:"flex",flexDirection:"column",justifyContent:"space-between",textAlign:"center"},children:[(0,d.jsx)("div",{}),(0,d.jsxs)("div",{style:{margin:"0 auto",maxWidth:520},children:[i.logo&&(0,d.jsx)("img",{src:i.logo,alt:"School logo",style:{width:e?70:86,height:e?70:86,objectFit:"contain",marginBottom:18}}),(0,d.jsx)("div",{style:{fontSize:e?18:22,fontWeight:950,textTransform:"uppercase",letterSpacing:.4},children:i.schoolName}),i.motto&&(0,d.jsx)("div",{style:{marginTop:6,fontSize:e?10:11.5,fontStyle:"italic",color:"#4b5563",fontWeight:750},children:i.motto}),(0,d.jsx)("div",{style:{margin:"20px auto",width:120,height:"transcript"===k?2:4,background:l,borderRadius:999}}),(0,d.jsx)("p",{style:{margin:0,fontSize:e?10:11.5,lineHeight:1.55,color:"#374151",fontWeight:720},children:(0,g.ou)(c?.footerText,"This cumulative academic report book is generated from published school report snapshots and is intended as an official record of the learner's academic journey.")})]}),(0,d.jsxs)("div",{style:{fontSize:e?8:9,color:"#4b5563",fontWeight:750,display:"grid",gap:3},children:[(0,d.jsx)("span",{children:[i.address,i.phone,i.email,i.website].filter(Boolean).join(" • ")}),(0,d.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})]})})}function w({dataset:a,template:b,settings:c,templateSettings:g,compact:h=!1,showWatermark:i=!0,pageBreakAfter:j=!0,mobilePreview:m=!0,includeCovers:n=!0}){let q=(0,e.useMemo)(()=>(function(a){if(!a)return null;let b=Array.isArray(a.periods)?a.periods.filter(a=>!!a?.dataset):[];return{...a,periods:b,summary:{...k({...a,periods:b}),...a.summary||{}}}})(a),[a]),s=(0,e.useMemo)(()=>({showBookFrontCover:!0,showBookStudentProfilePage:!0,showBookAcademicJourneyPage:!0,showBookSummaryPage:!0,showBookBackCover:!0,showGeneratedDate:!0,generatedDateLabel:"Generated",...g||{},...c||{},reportType:"cumulative_book"}),[c,g]);if(!q||!q.periods.length)return(0,d.jsxs)("div",{className:"cumulative-book-empty-card",children:[(0,d.jsx)("style",{children:x}),"No published report snapshots are available for this cumulative report book."]});let u=n&&!1!==s.showBookFrontCover,y=!1!==s.showBookStudentProfilePage,z=!1!==s.showBookAcademicJourneyPage,A=!1!==s.showBookSummaryPage,B=n&&!1!==s.showBookBackCover;return(0,d.jsxs)("div",{className:"cumulative-book-root",children:[(0,d.jsx)("style",{children:x}),u&&(0,d.jsx)(o,{dataset:q,template:b,settings:s,compact:h,pageBreakAfter:!0}),y&&(0,d.jsx)(p,{dataset:q,template:b,settings:s,compact:h,pageBreakAfter:!0}),z&&(0,d.jsx)(r,{dataset:q,template:b,settings:s,compact:h,pageBreakAfter:!0}),A&&(0,d.jsx)(t,{dataset:q,template:b,settings:s,compact:h,pageBreakAfter:!0}),q.periods.map((a,c)=>(0,d.jsxs)("div",{className:"cumulative-book-report-card-page",children:[(0,d.jsxs)("div",{className:"report-no-print cumulative-book-period-label",children:[(0,d.jsx)("strong",{children:l(a)}),(0,d.jsxs)("span",{children:["Period ",c+1," of ",q.periods.length]})]}),(0,d.jsx)(f.A,{dataset:a.dataset,template:b,settings:s,compact:h,showWatermark:i,pageBreakAfter:j||c<q.periods.length-1||B,mobilePreview:m})]},String(a.id||a.academicPeriodId||c))),B&&(0,d.jsx)(v,{dataset:q,template:b,settings:s,compact:h,pageBreakAfter:!1})]})}let x=`
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
`;var y=c(14910);function z(a){let b=(0,e.useMemo)(()=>a.dataset?{...a.dataset,periods:a.dataset.periods.map(a=>{let b=(0,y.BA)(a.snapshot||a.rawSnapshot||a.reportData||a.dataset);return b?{...a,dataset:b}:a}).filter(a=>!!a.dataset)}:a.dataset,[a.dataset]);return(0,d.jsx)(w,{...a,dataset:b})}},51069:(a,b,c)=>{c.d(b,{A:()=>k});var d=c(48249),e=c(67484),f=c(63607),g=c(14910);let h={reportType:"cumulative_transcript",templateCode:"cumulative_transcript_classic",layoutKey:"cumulative_transcript_classic",templateName:"Cumulative Transcript Classic",paperSize:"A4",orientation:"portrait",density:"compact",showAdmissionNumber:!0,showGender:!0,showClass:!0,showAcademicStructure:!0,showAcademicPeriod:!0,showBranch:!0,showTranscriptTermBreakdown:!0,showTranscriptYearAverage:!0,showTranscriptCumulativeAverage:!0,showTranscriptCumulativePosition:!0,showTranscriptGPAProgression:!0,showTranscriptFinalRecommendation:!0,showGeneratedDate:!0,showLogo:!0,showWatermark:!1,studentNameLabel:"Student",admissionNumberLabel:"Student ID",genderLabel:"Gender",classLabel:"Programme / Class",academicStructureLabel:"Academic Structure",academicPeriodLabel:"Academic Period",subjectLabel:"Course / Subject",totalLabel:"Total",averageLabel:"Average",gradeLabel:"Grade",classPositionLabel:"Position",gpaLabel:"GPA",generatedDateLabel:"Date Generated",footerText:"Official cumulative academic transcript generated by Eleeveon Schools."};function i(...a){for(let b of a){let a=String(b??"").trim();if(a)return a}return""}function j(a,b){return i(a?.code,a?.templateCode,a?.layoutKey,a?.templateKey,b?.templateCode,b?.layoutKey,b?.templateKey,h.templateCode)}function k({dataset:a,template:b,settings:c,compact:m=!1,showWatermark:n=!0,pageBreakAfter:o=!0,mobilePreview:p=!0,className:q=""}){let[r,s]=(0,e.useState)(!1),[t,u]=(0,e.useState)(1),[v,w]=(0,e.useState)(1),[x,y]=(0,e.useState)(!1),z=(0,e.useRef)(null),A=(0,e.useRef)(null),B=(0,e.useRef)(null),C=(0,e.useMemo)(()=>(function(a){if(!a)return null;let b=a.transcript?{...a.transcript,historicalAssessmentSubjects:function(a){if(!a)return[];let b=new Map;for(let c of Array.isArray(a.periods)?a.periods:[]){let a=c.rawSnapshot||c.snapshot||c.reportData||c,d=(0,g.yt)(a);for(let a of d.payload?.assessmentSubjects||d.dataset?.report?.subjectResults||c.subjectResults||[]){let c=String(a?.classSubjectId||a?.subjectId||a?.subjectName||a?.name||"");if(!c)continue;let e=b.get(c);b.set(c,{subjectId:a.subjectId||e?.subjectId,classSubjectId:a.classSubjectId||e?.classSubjectId,subjectName:a.subjectName||a.name||e?.subjectName||"Subject",subjectCode:a.subjectCode||a.code||e?.subjectCode,assessmentProjection:a.assessmentProjection||e?.assessmentProjection,assessmentReportSettings:a.assessmentReportSettings||d.payload?.assessmentReportSettings||e?.assessmentReportSettings})}}return[...b.values()]}(a.transcript)}:null,c=a.assessmentReportSettings||b?.historicalAssessmentSubjects?.find(a=>a.assessmentReportSettings)?.assessmentReportSettings;return{...a,transcript:b,assessmentReportSettings:c}})(a),[a]),D=(0,e.useMemo)(()=>{var a;let d,e;return a={template:b,settings:c,compact:m},d=(0,f.Q5)(j(a.template,a.settings)),e=d?.code||a.template?.code||a.template?.templateCode||a.template?.layoutKey||a.settings?.templateCode||h.templateCode||"cumulative_transcript_classic",{...h,...a.settings||{},reportType:"cumulative_transcript",templateName:a.template?.name||a.settings?.templateName||d?.name||h.templateName,templateCode:e,layoutKey:a.template?.layoutKey||a.settings?.layoutKey||e,templateKey:a.template?.templateKey||a.settings?.templateKey||e,paperSize:a.template?.paperSize||a.settings?.paperSize||"A4",orientation:a.template?.orientation||a.settings?.orientation||"portrait",density:a.settings?.density||a.template?.density||(a.compact?"compact":h.density)}},[b,c,m]),E=j(b,D),F=(0,e.useMemo)(()=>(0,f.Jn)(E),[E]),G=r?v:t,H=Math.round(100*G),I=(0,e.useCallback)(a=>{w(b=>{let c=r?b:t;return Math.min(2,Math.max(.25,Number(("in"===a?1.01*c:c/1.01).toFixed(4))))}),s(!0)},[r,t]),J=(0,e.useCallback)(()=>{null!=A.current&&(window.clearTimeout(A.current),A.current=null),null!=B.current&&(window.clearInterval(B.current),B.current=null)},[]),K=(0,e.useCallback)(a=>{J(),I(a),A.current=window.setTimeout(()=>{B.current=window.setInterval(()=>{I(a)},55)},260)},[I,J]),L=C?(0,d.jsx)(F,{dataset:C,template:b||null,settings:D,compact:m,showWatermark:n,pageBreakAfter:o,mobilePreview:!1}):(0,d.jsx)("section",{className:"print-page report-page-break cumulative-transcript-empty-page ctc-a4-page",children:(0,d.jsx)("div",{className:"ctc-empty-card",children:C?"No cumulative transcript records are available for the selected student or filters.":"No cumulative transcript dataset was provided."})});return p?(0,d.jsxs)("div",{className:`ctc-preview-shell ${r?"expanded":""} ${q}`,children:[(0,d.jsx)("style",{children:l}),(0,d.jsxs)("div",{className:"ctc-mobile-toolbar report-no-print",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:i(C?.student?.studentName,C?.student?.fullName,C?.studentName,C?.summary?.studentName,"Cumulative Transcript")}),(0,d.jsx)("span",{children:i(C?.student?.admissionNumber,C?.student?.studentId,C?.summary?.programmeName,C?.summary?.className,C?.branding?.schoolName,C?.header?.branding?.schoolName,"Academic Records")})]}),(0,d.jsxs)("div",{className:"ctc-zoom-controls","aria-label":"Cumulative transcript zoom controls",children:[(0,d.jsx)("button",{type:"button",className:"ctc-zoom-icon-button",onClick:()=>I("out"),onPointerDown:()=>K("out"),onPointerUp:J,onPointerCancel:J,onPointerLeave:J,"aria-label":"Zoom out",title:"Click or hold to zoom out",children:"−"}),(0,d.jsx)("button",{type:"button",className:"ctc-zoom-fit-button",onClick:()=>{J(),s(!1),w(1),y(!1)},"aria-label":"Fit to screen",title:"Fit to screen",children:"Fit"}),(0,d.jsxs)("div",{className:"ctc-zoom-menu-wrap",children:[(0,d.jsxs)("button",{type:"button",className:"ctc-zoom-percent-button",onClick:()=>y(a=>!a),"aria-label":"Choose zoom percentage","aria-expanded":x,title:"Choose zoom percentage",children:[(0,d.jsxs)("span",{children:[H,"%"]}),(0,d.jsx)("span",{className:"ctc-zoom-caret",children:"▾"})]}),x&&(0,d.jsx)("div",{className:"ctc-zoom-menu",role:"menu",children:[30,40,50,60,70,80,90,100].map(a=>(0,d.jsxs)("button",{type:"button",role:"menuitem",onClick:()=>{J(),s(!0),w(Number((a/100).toFixed(4))),y(!1)},className:`ctc-zoom-menu-item ${Math.round(100*G)===a?"active":""}`,children:[a,"%"]},a))})]}),(0,d.jsx)("button",{type:"button",className:"ctc-zoom-icon-button",onClick:()=>I("in"),onPointerDown:()=>K("in"),onPointerUp:J,onPointerCancel:J,onPointerLeave:J,"aria-label":"Zoom in",title:"Click or hold to zoom in",children:"+"})]})]}),(0,d.jsx)("div",{ref:z,className:"ctc-preview-scroll report-screen-scroll",style:{"--ctc-preview-scale":G},children:(0,d.jsx)("div",{className:"ctc-preview-center",children:(0,d.jsx)("div",{className:"ctc-preview-scale",children:L})})})]}):(0,d.jsxs)("div",{className:q,children:[(0,d.jsx)("style",{children:l}),L]})}let l=`
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
`},63607:(a,b,c)=>{c.d(b,{wW:()=>s,Q5:()=>t,Jn:()=>u});var d=c(48249);c(67484);let e=(a,b=1)=>null==a||Number.isNaN(Number(a))?"-":Number(a).toFixed(b),f=a=>{if(!a)return"-";let b=["th","st","nd","rd"],c=a%100;return`${a}${b[(c-20)%10]||b[c]||b[0]}`},g=(...a)=>{for(let b of a){let a=String(b??"").trim();if(a)return a}return"-"};function h({header:a,title:b,primary:c,compact:e,pageBreakAfter:f}){let i=a?.branding||{};return(0,d.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page",style:{width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:e?"9mm":"11mm",boxSizing:"border-box",background:"#fff",color:"#111827",fontFamily:i.fontFamily||"Arial, sans-serif",border:"1px solid #d1d5db",pageBreakAfter:f?"always":"auto"},children:[(0,d.jsxs)("div",{style:{borderBottom:`3px solid ${c}`,paddingBottom:8,marginBottom:16},children:[(0,d.jsx)("div",{style:{fontSize:e?15:18,fontWeight:950,textTransform:"uppercase"},children:g(i.schoolName,"School")}),(0,d.jsx)("div",{style:{fontSize:10,fontWeight:800,color:"#4b5563"},children:b})]}),(0,d.jsx)("div",{style:{border:"1px dashed #9ca3af",padding:18,textAlign:"center",fontWeight:800,borderRadius:10},children:"Select a student with historical report snapshots to generate a cumulative academic transcript."})]})}let i=(a,b=1)=>null==a||Number.isNaN(Number(a))?"-":Number(a).toFixed(b),j=(...a)=>{for(let b of a){let a=String(b??"").trim();if(a)return a}return"-"};function k({header:a,title:b,primary:c,compact:e,pageBreakAfter:f}){let g=a?.branding||{};return(0,d.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page",style:{width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:e?"9mm":"11mm",boxSizing:"border-box",background:"#fff",color:"#111827",fontFamily:g.fontFamily||"Arial, sans-serif",border:"1px solid #d1d5db",pageBreakAfter:f?"always":"auto"},children:[(0,d.jsxs)("div",{style:{borderBottom:`3px solid ${c}`,paddingBottom:8,marginBottom:16},children:[(0,d.jsx)("div",{style:{fontSize:e?15:18,fontWeight:950,textTransform:"uppercase"},children:j(g.schoolName,"School")}),(0,d.jsx)("div",{style:{fontSize:10,fontWeight:800,color:"#4b5563"},children:b})]}),(0,d.jsx)("div",{style:{border:"1px dashed #9ca3af",padding:18,textAlign:"center",fontWeight:800,borderRadius:10},children:"Select a student with historical report snapshots to generate a cumulative academic transcript."})]})}let l=(a,b=1)=>null==a||Number.isNaN(Number(a))?"-":Number(a).toFixed(b),m=a=>{if(!a)return"-";let b=["th","st","nd","rd"],c=a%100;return`${a}${b[(c-20)%10]||b[c]||b[0]}`},n=(...a)=>{for(let b of a){let a=String(b??"").trim();if(a)return a}return"-"};function o({header:a,title:b,primary:c,compact:e,pageBreakAfter:f}){let g=a?.branding||{};return(0,d.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page",style:{width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:e?"9mm":"11mm",boxSizing:"border-box",background:"#fff",color:"#111827",fontFamily:g.fontFamily||"Arial, sans-serif",border:"1px solid #d1d5db",pageBreakAfter:f?"always":"auto"},children:[(0,d.jsxs)("div",{style:{borderBottom:`3px solid ${c}`,paddingBottom:8,marginBottom:16},children:[(0,d.jsx)("div",{style:{fontSize:e?15:18,fontWeight:950,textTransform:"uppercase"},children:n(g.schoolName,"School")}),(0,d.jsx)("div",{style:{fontSize:10,fontWeight:800,color:"#4b5563"},children:b})]}),(0,d.jsx)("div",{style:{border:"1px dashed #9ca3af",padding:18,textAlign:"center",fontWeight:800,borderRadius:10},children:"Select a student with historical report snapshots to generate a cumulative academic transcript."})]})}let p=(a,b=1)=>null==a||Number.isNaN(Number(a))?"-":Number(a).toFixed(b),q=(...a)=>{for(let b of a){let a=String(b??"").trim();if(a)return a}return"-"};function r({header:a,title:b,primary:c,compact:e,pageBreakAfter:f}){let g=a?.branding||{};return(0,d.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page",style:{width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:e?"9mm":"11mm",boxSizing:"border-box",background:"#fff",color:"#111827",fontFamily:g.fontFamily||"Arial, sans-serif",border:"1px solid #d1d5db",pageBreakAfter:f?"always":"auto"},children:[(0,d.jsxs)("div",{style:{borderBottom:`3px solid ${c}`,paddingBottom:8,marginBottom:16},children:[(0,d.jsx)("div",{style:{fontSize:e?15:18,fontWeight:950,textTransform:"uppercase"},children:q(g.schoolName,"School")}),(0,d.jsx)("div",{style:{fontSize:10,fontWeight:800,color:"#4b5563"},children:b})]}),(0,d.jsx)("div",{style:{border:"1px dashed #9ca3af",padding:18,textAlign:"center",fontWeight:800,borderRadius:10},children:"Select a student with historical report snapshots to generate a cumulative academic transcript."})]})}let s=[{name:"Cumulative Transcript Classic",code:"cumulative_transcript_classic",layoutKey:"cumulative_transcript_classic",description:"Formal school-friendly cumulative transcript with period-by-period academic records.",reportType:"cumulative_transcript",orientation:"portrait",paperSize:"A4",density:"comfortable",isDefault:!0,active:!0,component:function(a){var b;let c,i,j,k,l,m,n,{header:o,transcript:p,settings:q,branding:r,primary:s,labels:t,generatedAt:u}=(c=a.header||a.dataset?.header,i=a.transcript??a.dataset?.transcript??null,j=a.settings||{},l=(k=c?.branding||{}).primaryColor||"#111827",m=a.dataset?.generatedAt||new Date,n={student:j.studentNameLabel||"Student",studentId:j.admissionNumberLabel||"Student ID",gender:j.genderLabel||"Gender",className:j.classLabel||"Programme / Class",period:j.academicPeriodLabel||"Academic Period",subject:j.subjectLabel||"Course / Subject",total:j.totalLabel||"Score",average:j.averageLabel||"Average",grade:j.gradeLabel||"Grade",position:j.subjectPositionLabel||"Rank",classPosition:j.classPositionLabel||"Cumulative Position",gpa:j.gpaLabel||"GPA",generated:j.generatedDateLabel||"Date Generated",footer:j.footerText||"Official cumulative academic transcript generated by Eleeveon Schools."},{header:c,transcript:i,settings:j,branding:k,primary:l,labels:n,generatedAt:m}),v=a.compact??!1,w=a.pageBreakAfter??!0,x=!1!==a.showWatermark;if(!p)return(0,d.jsx)(h,{header:o,title:"Cumulative Academic Transcript",primary:s,compact:v,pageBreakAfter:w});let y={width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:v?"9mm":"11mm",boxSizing:"border-box",background:"#fff",color:"#111827",fontFamily:r.fontFamily||"Arial, sans-serif",border:"1px solid #d1d5db",position:"relative",overflow:"hidden",pageBreakAfter:w?"always":"auto"},z={width:"100%",borderCollapse:"collapse",fontSize:v?8.4:9.2},A={border:"1px solid #111827",padding:v?3:5,background:s,color:"#fff",textAlign:"center",fontWeight:900},B={border:"1px solid #374151",padding:v?3:5,verticalAlign:"top",lineHeight:1.25},C={fontSize:v?7.2:8,textTransform:"uppercase",letterSpacing:.3,color:"#6b7280",fontWeight:850},D={marginTop:2,fontSize:v?9.4:10.3,fontWeight:900,color:"#111827"};return(0,d.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page cumulative-transcript-classic",style:y,children:[x&&r.reportCardWatermark&&(0,d.jsx)("img",{src:r.reportCardWatermark,alt:"Watermark",style:{position:"absolute",inset:"30% 25%",width:"50%",opacity:.035,objectFit:"contain",pointerEvents:"none"}}),(0,d.jsxs)("div",{style:{position:"relative",zIndex:1},children:[(0,d.jsxs)("header",{style:{display:"grid",gridTemplateColumns:"56px 1fr auto",gap:10,alignItems:"center",borderBottom:`3px solid ${s}`,paddingBottom:8},children:[(0,d.jsx)("div",{style:{width:54,height:54,border:"1px solid #9ca3af",display:"flex",alignItems:"center",justifyContent:"center"},children:r.logo?(0,d.jsx)("img",{src:r.logo,alt:"School logo",style:{width:"100%",height:"100%",objectFit:"contain",padding:4}}):(0,d.jsx)("span",{style:{fontSize:7,fontWeight:900},children:"LOGO"})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{style:{fontSize:v?16:19,fontWeight:950,textTransform:"uppercase",lineHeight:1.05},children:g(r.schoolName,"School")}),(0,d.jsx)("div",{style:{marginTop:3,fontSize:v?8:9,fontWeight:750,color:"#4b5563"},children:[r.address,r.phone,r.email].filter(Boolean).join(" • ")})]}),(0,d.jsxs)("div",{style:{border:`1px solid ${s}`,padding:"7px 10px",textAlign:"center",fontWeight:950,textTransform:"uppercase",fontSize:v?8:9},children:["Cumulative",(0,d.jsx)("br",{}),"Academic Transcript"]})]}),(0,d.jsx)("div",{style:{marginTop:10,display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:6},children:[[t.student,p.studentName],[t.studentId,p.admissionNumber||"-"],[t.gender,p.gender||"-"],[t.className,p.currentClassName||"-"]].map(([a,b])=>(0,d.jsxs)("div",{style:{border:"1px solid #d1d5db",padding:6,background:"#f9fafb"},children:[(0,d.jsx)("div",{style:C,children:a}),(0,d.jsx)("div",{style:D,children:b})]},a))}),(0,d.jsx)("div",{style:{marginTop:11,display:"grid",gridTemplateColumns:"repeat(5, minmax(0, 1fr))",border:"1px solid #111827"},children:[["Periods",p.totalPeriods],["Subjects",p.totalSubjects],["Cumulative Avg.",`${e(p.cumulativeAverage,1)}%`],[t.gpa,null!=p.cumulativeGPA?e(p.cumulativeGPA,2):"-"],["Trend","up"===(b=p.overallTrend)?"Improving":"down"===b?"Declining":"stable"===b?"Stable":"-"]].map(([a,b],c)=>(0,d.jsxs)("div",{style:{padding:7,textAlign:"center",borderLeft:c?"1px solid #111827":0},children:[(0,d.jsx)("div",{style:C,children:a}),(0,d.jsx)("div",{style:{...D,fontSize:v?10.5:12},children:b})]},a))}),(0,d.jsx)("div",{style:{marginTop:12,fontSize:v?9:10,fontWeight:950,textTransform:"uppercase",borderBottom:"1px solid #111827",paddingBottom:4},children:"Beginning of Academic Records"}),p.periods.map(a=>(0,d.jsxs)("div",{style:{marginTop:10,breakInside:"avoid"},children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gap:10,fontSize:v?9:10.2,fontWeight:950,padding:"5px 7px",background:"#f3f4f6",border:"1px solid #111827",borderBottom:0},children:[(0,d.jsx)("span",{children:a.academicPeriodName}),(0,d.jsx)("span",{children:a.className})]}),(0,d.jsxs)("table",{style:z,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...A,textAlign:"left"},children:t.subject}),!1!==q.showTotal&&(0,d.jsx)("th",{style:A,children:t.total}),!1!==q.showAverage&&(0,d.jsx)("th",{style:A,children:"%"}),!1!==q.showGrade&&(0,d.jsx)("th",{style:A,children:t.grade}),!1!==q.showSubjectPosition&&(0,d.jsx)("th",{style:A,children:t.position}),!1!==q.showSubjectRemarks&&(0,d.jsx)("th",{style:{...A,textAlign:"left"},children:"Remark"})]})}),(0,d.jsxs)("tbody",{children:[a.subjectResults.map(b=>(0,d.jsxs)("tr",{children:[(0,d.jsxs)("td",{style:{...B,fontWeight:850},children:[b.subjectName,b.subjectCode&&(0,d.jsx)("div",{style:{fontSize:7.5,opacity:.75},children:b.subjectCode})]}),!1!==q.showTotal&&(0,d.jsx)("td",{style:{...B,textAlign:"center"},children:e(b.total??b.weightedTotal??b.percentage,1)}),!1!==q.showAverage&&(0,d.jsxs)("td",{style:{...B,textAlign:"center"},children:[e(b.percentage,1),"%"]}),!1!==q.showGrade&&(0,d.jsx)("td",{style:{...B,textAlign:"center",fontWeight:900},children:b.grade||"-"}),!1!==q.showSubjectPosition&&(0,d.jsx)("td",{style:{...B,textAlign:"center"},children:f(b.position)}),!1!==q.showSubjectRemarks&&(0,d.jsx)("td",{style:B,children:b.remark||"-"})]},`${a.academicPeriodId}-${b.subjectId||b.classSubjectId||b.subjectName}`)),!a.subjectResults.length&&(0,d.jsx)("tr",{children:(0,d.jsx)("td",{style:{...B,textAlign:"center",padding:12},colSpan:6,children:"No subject records for this period."})})]})]}),!1!==q.showTranscriptTermBreakdown&&(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",border:"1px solid #111827",borderTop:0,fontSize:v?8:9},children:[(0,d.jsxs)("div",{style:{padding:5},children:[(0,d.jsx)("strong",{children:"Term Total:"})," ",e(a.total,1)]}),(0,d.jsxs)("div",{style:{padding:5,borderLeft:"1px solid #d1d5db"},children:[(0,d.jsx)("strong",{children:"Term Avg:"})," ",e(a.average,1),"%"]}),(0,d.jsxs)("div",{style:{padding:5,borderLeft:"1px solid #d1d5db"},children:[(0,d.jsx)("strong",{children:"Term GPA:"})," ",null!=a.gpa?e(a.gpa,2):"-"]}),(0,d.jsxs)("div",{style:{padding:5,borderLeft:"1px solid #d1d5db"},children:[(0,d.jsx)("strong",{children:"Class Rank:"})," ",f(a.position)]})]})]},`${a.academicPeriodId}-${a.snapshotId||"p"}`)),(0,d.jsxs)("div",{style:{marginTop:12,border:"1px solid #111827",padding:8},children:[(0,d.jsx)("div",{style:{fontWeight:950,textTransform:"uppercase",fontSize:v?8:9,marginBottom:6},children:"End of Transcript Statistics"}),(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",gap:6,fontSize:v?8.5:9.5},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Highest Avg:"})," ",e(p.highestAverage,1),"%"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Lowest Avg:"})," ",e(p.lowestAverage,1),"%"]}),!1!==q.showTranscriptCumulativeAverage&&(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Cum Avg:"})," ",e(p.cumulativeAverage,1),"%"]}),!1!==q.showTranscriptCumulativePosition&&(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Latest Rank:"})," ",f(p.latestPosition)]})]})]}),(0,d.jsxs)("footer",{style:{marginTop:10,borderTop:"1px solid #111827",paddingTop:5,display:"flex",justifyContent:"space-between",fontSize:7.5,color:"#4b5563"},children:[(0,d.jsx)("span",{children:t.footer}),!1!==q.showGeneratedDate&&(0,d.jsxs)("span",{children:[t.generated,": ",(a=>{if(!a)return"-";let b=a instanceof Date?a:new Date(a);return Number.isNaN(b.getTime())?String(a):b.toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"})})(u)]})]})]})]})}},{name:"Cumulative Transcript Official",code:"cumulative_transcript_official",layoutKey:"cumulative_transcript_official",description:"Registrar-style official academic records layout inspired by university transcript structure.",reportType:"cumulative_transcript",orientation:"portrait",paperSize:"A4",density:"compact",active:!0,component:function(a){var b,c;let e,f,g,h,l,m,n,{header:o,transcript:p,settings:q,branding:r,primary:s,labels:t,generatedAt:u}=(e=a.header||a.dataset?.header,f=a.transcript??a.dataset?.transcript??null,g=a.settings||{},l=(h=e?.branding||{}).primaryColor||"#111827",m=a.dataset?.generatedAt||new Date,n={student:g.studentNameLabel||"Student",studentId:g.admissionNumberLabel||"Student ID",gender:g.genderLabel||"Gender",className:g.classLabel||"Programme / Class",period:g.academicPeriodLabel||"Academic Period",subject:g.subjectLabel||"Course / Subject",total:g.totalLabel||"Score",average:g.averageLabel||"Average",grade:g.gradeLabel||"Grade",position:g.subjectPositionLabel||"Rank",classPosition:g.classPositionLabel||"Cumulative Position",gpa:g.gpaLabel||"GPA",generated:g.generatedDateLabel||"Date Generated",footer:g.footerText||"Official cumulative academic transcript generated by Eleeveon Schools."},{header:e,transcript:f,settings:g,branding:h,primary:l,labels:n,generatedAt:m}),v=a.compact??!1,w=a.pageBreakAfter??!0;if(!p)return(0,d.jsx)(k,{header:o,title:"Official Academic Records",primary:s,compact:v,pageBreakAfter:w});let x={width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:v?"8mm":"10mm",boxSizing:"border-box",background:"#fff",color:"#000",fontFamily:r.fontFamily||"Times New Roman, serif",border:"1px solid #9ca3af",pageBreakAfter:w?"always":"auto"},y={width:"100%",borderCollapse:"collapse",fontSize:v?8:8.7},z={borderBottom:"1.5px solid #000",padding:"3px 4px",textAlign:"left",fontWeight:900},A={padding:"2.5px 4px",verticalAlign:"top",lineHeight:1.18};return(0,d.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page cumulative-transcript-official",style:x,children:[(0,d.jsxs)("header",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:12,borderBottom:"3px double #000",paddingBottom:7},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{style:{fontSize:v?15:17,fontWeight:900},children:j(r.schoolName,"Institution")}),(0,d.jsx)("div",{style:{fontSize:v?8:8.7,lineHeight:1.25},children:[r.address,r.website,r.email].filter(Boolean).join("\n")})]}),(0,d.jsxs)("div",{style:{textAlign:"right"},children:[r.logo&&(0,d.jsx)("img",{src:r.logo,alt:"Institution logo",style:{width:42,height:42,objectFit:"contain",marginBottom:3}}),(0,d.jsx)("div",{style:{fontSize:v?9:10,fontWeight:900,textTransform:"uppercase"},children:"Official Academic Records"})]})]}),(0,d.jsxs)("div",{style:{marginTop:8,fontSize:v?8.5:9.2,lineHeight:1.4},children:[(0,d.jsxs)("strong",{children:[t.student,":"]})," ",p.studentName,"\xa0\xa0",(0,d.jsxs)("strong",{children:[t.studentId,":"]})," ",p.admissionNumber||"-"," ","\xa0\xa0",(0,d.jsx)("strong",{children:"DOB/Gender:"})," ",p.gender||"-","\xa0\xa0",(0,d.jsxs)("strong",{children:[t.className,":"]})," ",p.currentClassName||"-"]}),(0,d.jsx)("div",{style:{marginTop:10,fontWeight:900,fontSize:v?9:10},children:"Beginning of Academic Records"}),p.periods.map(a=>(0,d.jsxs)("div",{style:{marginTop:9,breakInside:"avoid"},children:[(0,d.jsx)("div",{style:{fontSize:v?9:10,fontWeight:900},children:a.academicPeriodName}),(0,d.jsxs)("div",{style:{fontSize:v?7.6:8.2,marginBottom:2},children:[a.className,a.academicYear?` • ${a.academicYear}`:""]}),(0,d.jsxs)("table",{style:y,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...z,width:82},children:"Course Code"}),(0,d.jsx)("th",{style:z,children:"Course Description"}),(0,d.jsx)("th",{style:{...z,textAlign:"right"},children:"Score"}),(0,d.jsx)("th",{style:{...z,textAlign:"right"},children:"%"}),(0,d.jsx)("th",{style:{...z,textAlign:"right"},children:"Quality Pts"}),(0,d.jsx)("th",{style:{...z,textAlign:"center"},children:t.grade})]})}),(0,d.jsx)("tbody",{children:a.subjectResults.map(b=>{let c=null!=b.gpa?b.gpa:void 0;return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:A,children:b.subjectCode||`SUB${b.subjectId||""}`}),(0,d.jsx)("td",{style:A,children:b.subjectName}),(0,d.jsx)("td",{style:{...A,textAlign:"right"},children:i(b.total??b.weightedTotal??b.percentage,1)}),(0,d.jsx)("td",{style:{...A,textAlign:"right"},children:i(b.percentage,1)}),(0,d.jsx)("td",{style:{...A,textAlign:"right"},children:null!=c?i(c,2):"-"}),(0,d.jsx)("td",{style:{...A,textAlign:"center",fontWeight:900},children:b.grade||"-"})]},`${a.academicPeriodId}-${b.subjectId||b.subjectName}`)})})]}),(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:3,fontSize:v?8:8.6},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Term GPA:"})," ",null!=a.gpa?i(a.gpa,3):"-"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Cum GPA:"})," ",null!=p.cumulativeGPA?i(p.cumulativeGPA,3):"-"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Term Totals:"})," ",i(a.total,1)," /"," ",i(a.average,1),"%"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Cum Totals:"})," ",i(p.cumulativeTotal,1)," /"," ",i(p.cumulativeAverage,1),"%"]})]})]},`${a.academicPeriodId}-${a.snapshotId||"official"}`)),(0,d.jsxs)("div",{style:{marginTop:12,borderTop:"1.5px solid #000",paddingTop:6},children:[(0,d.jsx)("div",{style:{fontWeight:900,fontSize:v?9:10},children:"End of Transcript Statistics"}),(0,d.jsx)("table",{style:{...y,marginTop:3},children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:A,children:"Institution"}),(0,d.jsx)("td",{style:A,children:null!=p.cumulativeGPA?i(p.cumulativeGPA,3):"-"}),(0,d.jsxs)("td",{style:A,children:[i(p.cumulativeAverage,1),"%"]}),(0,d.jsx)("td",{style:A,children:i(p.cumulativeTotal,1)})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:A,children:"Overall"}),(0,d.jsx)("td",{style:A,children:null!=p.cumulativeGPA?i(p.cumulativeGPA,3):"-"}),(0,d.jsxs)("td",{style:A,children:[i(p.cumulativeAverage,1),"%"]}),(0,d.jsx)("td",{style:A,children:"up"===(b=p.overallTrend)?"Improving":"down"===b?"Declining":"stable"===b?"Stable":"-"})]})]})})]}),!1!==q.showTranscriptFinalRecommendation&&(0,d.jsxs)("div",{style:{marginTop:8,fontSize:v?8:8.6},children:[(0,d.jsx)("strong",{children:"Latest Decision:"})," ",(c=p.latestDecision)?c.charAt(0).toUpperCase()+c.slice(1):"-"]}),(0,d.jsxs)("footer",{style:{marginTop:14,borderTop:"1px solid #000",paddingTop:4,display:"flex",justifyContent:"space-between",fontSize:7.5},children:[(0,d.jsx)("span",{children:"*** End of Transcript ***"}),!1!==q.showGeneratedDate&&(0,d.jsxs)("span",{children:[t.generated,": ",(a=>{if(!a)return"-";let b=a instanceof Date?a:new Date(a);return Number.isNaN(b.getTime())?String(a):b.toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"})})(u),"\xa0 Page 1 of 1"]})]})]})}},{name:"Cumulative Transcript Modern",code:"cumulative_transcript_modern",layoutKey:"cumulative_transcript_modern",description:"Clean modern cumulative transcript with summary metrics and readable period cards.",reportType:"cumulative_transcript",orientation:"portrait",paperSize:"A4",density:"comfortable",active:!0,component:function(a){var b;let c,e,f,g,h,i,j,{header:k,transcript:p,settings:q,branding:r,primary:s,labels:t,generatedAt:u}=(c=a.header||a.dataset?.header,e=a.transcript??a.dataset?.transcript??null,f=a.settings||{},h=(g=c?.branding||{}).primaryColor||"#111827",i=a.dataset?.generatedAt||new Date,j={student:f.studentNameLabel||"Student",studentId:f.admissionNumberLabel||"Student ID",gender:f.genderLabel||"Gender",className:f.classLabel||"Programme / Class",period:f.academicPeriodLabel||"Academic Period",subject:f.subjectLabel||"Course / Subject",total:f.totalLabel||"Score",average:f.averageLabel||"Average",grade:f.gradeLabel||"Grade",position:f.subjectPositionLabel||"Rank",classPosition:f.classPositionLabel||"Cumulative Position",gpa:f.gpaLabel||"GPA",generated:f.generatedDateLabel||"Date Generated",footer:f.footerText||"Official cumulative academic transcript generated by Eleeveon Schools."},{header:c,transcript:e,settings:f,branding:g,primary:h,labels:j,generatedAt:i}),v=a.compact??!1,w=a.pageBreakAfter??!0;if(!p)return(0,d.jsx)(o,{header:k,title:"Modern Cumulative Transcript",primary:s,compact:v,pageBreakAfter:w});let x={width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:v?"9mm":"11mm",boxSizing:"border-box",background:"linear-gradient(180deg,#ffffff,#f8fafc)",color:"#0f172a",fontFamily:r.fontFamily||"Arial, sans-serif",border:"1px solid #e2e8f0",borderRadius:18,pageBreakAfter:w?"always":"auto",overflow:"hidden"},y={border:"1px solid #e2e8f0",borderRadius:14,padding:v?6:8,background:"rgba(255,255,255,.9)"},z={width:"100%",borderCollapse:"separate",borderSpacing:0,fontSize:v?8.3:9.1,overflow:"hidden"},A={padding:v?4:6,background:s,color:"#fff",textAlign:"center",fontWeight:950,borderBottom:`1px solid ${s}`},B={padding:v?4:6,borderBottom:"1px solid #e5e7eb",verticalAlign:"top"};return(0,d.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page cumulative-transcript-modern",style:x,children:[(0,d.jsxs)("header",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:14,alignItems:"center"},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{style:{fontSize:v?18:22,fontWeight:950,textTransform:"uppercase",color:"#0f172a"},children:n(r.schoolName,"School")}),(0,d.jsx)("div",{style:{marginTop:3,color:"#64748b",fontWeight:750,fontSize:v?8:9},children:[r.branchName,r.address,r.email].filter(Boolean).join(" • ")})]}),(0,d.jsx)("div",{style:{background:s,color:"#fff",borderRadius:999,padding:"8px 14px",fontSize:v?8:9,fontWeight:950,textTransform:"uppercase",textAlign:"center"},children:"Cumulative Transcript"})]}),(0,d.jsxs)("div",{style:{marginTop:12,display:"grid",gridTemplateColumns:"1.4fr repeat(4, 1fr)",gap:7},children:[(0,d.jsxs)("div",{style:{...y,gridRow:"span 2"},children:[(0,d.jsx)("div",{style:{fontSize:8,fontWeight:900,color:"#64748b",textTransform:"uppercase"},children:t.student}),(0,d.jsx)("div",{style:{fontSize:v?16:19,fontWeight:950},children:p.studentName}),(0,d.jsxs)("div",{style:{marginTop:4,fontSize:v?8:9,color:"#64748b",fontWeight:760},children:[t.studentId,": ",p.admissionNumber||"-"]})]}),[["Periods",p.totalPeriods],["Subjects",p.totalSubjects],[t.average,`${l(p.cumulativeAverage,1)}%`],[t.gpa,null!=p.cumulativeGPA?l(p.cumulativeGPA,2):"-"],["Highest",`${l(p.highestAverage,1)}%`],["Lowest",`${l(p.lowestAverage,1)}%`],["Latest Rank",m(p.latestPosition)],["Trend","up"===(b=p.overallTrend)?"Improving":"down"===b?"Declining":"stable"===b?"Stable":"-"]].map(([a,b])=>(0,d.jsxs)("div",{style:{...y,textAlign:"center"},children:[(0,d.jsx)("div",{style:{fontSize:7.5,fontWeight:900,color:"#64748b",textTransform:"uppercase"},children:a}),(0,d.jsx)("div",{style:{marginTop:2,fontSize:v?11:13,fontWeight:950},children:b})]},String(a)))]}),p.periods.map(a=>(0,d.jsxs)("div",{style:{marginTop:11,border:"1px solid #e2e8f0",borderRadius:16,overflow:"hidden",background:"#fff",breakInside:"avoid"},children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",gap:12,padding:v?"7px 9px":"8px 11px",background:"#f8fafc",borderBottom:"1px solid #e2e8f0"},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:a.academicPeriodName}),(0,d.jsx)("div",{style:{fontSize:8,color:"#64748b"},children:a.className})]}),(0,d.jsxs)("div",{style:{textAlign:"right",fontSize:8.5},children:[(0,d.jsxs)("strong",{children:[l(a.average,1),"%"]}),(0,d.jsx)("div",{style:{color:"#64748b"},children:"Term Average"})]})]}),(0,d.jsxs)("table",{style:z,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...A,textAlign:"left"},children:t.subject}),(0,d.jsx)("th",{style:A,children:"%"}),(0,d.jsx)("th",{style:A,children:t.grade}),!1!==q.showSubjectPosition&&(0,d.jsx)("th",{style:A,children:t.position}),!1!==q.showSubjectRemarks&&(0,d.jsx)("th",{style:{...A,textAlign:"left"},children:"Remark"})]})}),(0,d.jsx)("tbody",{children:a.subjectResults.map(b=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{...B,fontWeight:850},children:b.subjectName}),(0,d.jsxs)("td",{style:{...B,textAlign:"center"},children:[l(b.percentage,1),"%"]}),(0,d.jsx)("td",{style:{...B,textAlign:"center",fontWeight:950},children:b.grade||"-"}),!1!==q.showSubjectPosition&&(0,d.jsx)("td",{style:{...B,textAlign:"center"},children:m(b.position)}),!1!==q.showSubjectRemarks&&(0,d.jsx)("td",{style:B,children:b.remark||"-"})]},`${a.academicPeriodId}-${b.subjectId||b.subjectName}`))})]})]},`${a.academicPeriodId}-${a.snapshotId||"modern"}`)),(0,d.jsxs)("footer",{style:{marginTop:10,display:"flex",justifyContent:"space-between",fontSize:8,color:"#64748b",borderTop:"1px solid #e2e8f0",paddingTop:6},children:[(0,d.jsx)("span",{children:t.footer}),!1!==q.showGeneratedDate&&(0,d.jsxs)("span",{children:[t.generated,": ",(a=>{if(!a)return"-";let b=a instanceof Date?a:new Date(a);return Number.isNaN(b.getTime())?String(a):b.toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"})})(u)]})]})]})}},{name:"Cumulative Transcript Compact",code:"cumulative_transcript_compact",layoutKey:"cumulative_transcript_compact",description:"Print-efficient dense transcript for schools that need to save paper.",reportType:"cumulative_transcript",orientation:"portrait",paperSize:"A4",density:"compact",active:!0,component:function(a){var b;let c,e,f,g,h,i,j,{header:k,transcript:l,settings:m,branding:n,primary:o,labels:s,generatedAt:t}=(c=a.header||a.dataset?.header,e=a.transcript??a.dataset?.transcript??null,f=a.settings||{},h=(g=c?.branding||{}).primaryColor||"#111827",i=a.dataset?.generatedAt||new Date,j={student:f.studentNameLabel||"Student",studentId:f.admissionNumberLabel||"Student ID",gender:f.genderLabel||"Gender",className:f.classLabel||"Programme / Class",period:f.academicPeriodLabel||"Academic Period",subject:f.subjectLabel||"Course / Subject",total:f.totalLabel||"Score",average:f.averageLabel||"Average",grade:f.gradeLabel||"Grade",position:f.subjectPositionLabel||"Rank",classPosition:f.classPositionLabel||"Cumulative Position",gpa:f.gpaLabel||"GPA",generated:f.generatedDateLabel||"Date Generated",footer:f.footerText||"Official cumulative academic transcript generated by Eleeveon Schools."},{header:c,transcript:e,settings:f,branding:g,primary:h,labels:j,generatedAt:i}),u=a.pageBreakAfter??!0;if(!l)return(0,d.jsx)(r,{header:k,title:"Compact Cumulative Transcript",primary:o,compact:!0,pageBreakAfter:u});let v={width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:"7mm",boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:n.fontFamily||"Arial, sans-serif",border:"1px solid #d1d5db",pageBreakAfter:u?"always":"auto"},w={border:"1px solid #111",padding:2.5,background:o,color:"#fff",fontWeight:900,textAlign:"center"},x={border:"1px solid #555",padding:2.5,verticalAlign:"top",lineHeight:1.12};return(0,d.jsxs)("section",{className:"print-page report-page-break cumulative-transcript-page cumulative-transcript-compact",style:v,children:[(0,d.jsxs)("header",{style:{display:"flex",justifyContent:"space-between",gap:10,alignItems:"flex-start",borderBottom:"2px solid #111",paddingBottom:5},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{style:{fontSize:13,fontWeight:950,textTransform:"uppercase"},children:q(n.schoolName,"School")}),(0,d.jsx)("div",{style:{fontSize:7.2},children:[n.branchName,n.phone,n.email].filter(Boolean).join(" • ")})]}),(0,d.jsx)("div",{style:{textAlign:"right",fontSize:8,fontWeight:950,textTransform:"uppercase"},children:"Cumulative Transcript"})]}),(0,d.jsxs)("div",{style:{marginTop:5,display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr",gap:3,fontSize:7.4},children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("strong",{children:[s.student,":"]})," ",l.studentName]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"ID:"})," ",l.admissionNumber||"-"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Class:"})," ",l.currentClassName||"-"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Avg:"})," ",p(l.cumulativeAverage,1),"%"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"GPA:"})," ",null!=l.cumulativeGPA?p(l.cumulativeGPA,2):"-"]})]}),(0,d.jsxs)("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:7.4,marginTop:5},children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...w,textAlign:"left",width:76},children:"Period"}),(0,d.jsx)("th",{style:{...w,textAlign:"left"},children:s.subject}),(0,d.jsx)("th",{style:w,children:"Score"}),(0,d.jsx)("th",{style:w,children:"%"}),(0,d.jsx)("th",{style:w,children:s.grade}),(0,d.jsx)("th",{style:w,children:"Rank"}),(0,d.jsx)("th",{style:{...w,textAlign:"left"},children:"Remark"})]})}),(0,d.jsx)("tbody",{children:l.periods.flatMap(a=>a.subjectResults.map((b,c)=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:x,children:0===c?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("strong",{children:a.academicPeriodName}),(0,d.jsx)("br",{}),a.className,(0,d.jsx)("br",{}),"Avg: ",p(a.average,1),"%"]}):""}),(0,d.jsx)("td",{style:{...x,fontWeight:800},children:b.subjectName}),(0,d.jsx)("td",{style:{...x,textAlign:"center"},children:p(b.total??b.weightedTotal??b.percentage,1)}),(0,d.jsx)("td",{style:{...x,textAlign:"center"},children:p(b.percentage,1)}),(0,d.jsx)("td",{style:{...x,textAlign:"center",fontWeight:900},children:b.grade||"-"}),(0,d.jsx)("td",{style:{...x,textAlign:"center"},children:(a=>{if(!a)return"-";let b=["th","st","nd","rd"],c=a%100;return`${a}${b[(c-20)%10]||b[c]||b[0]}`})(b.position)}),(0,d.jsx)("td",{style:x,children:b.remark||"-"})]},`${a.academicPeriodId}-${b.subjectId||b.subjectName}-${c}`)))})]}),(0,d.jsx)("div",{style:{marginTop:5,display:"grid",gridTemplateColumns:"repeat(6, 1fr)",border:"1px solid #111",fontSize:7.2},children:[["Periods",l.totalPeriods],["Subjects",l.totalSubjects],["Cum Total",p(l.cumulativeTotal,1)],["Cum Avg",`${p(l.cumulativeAverage,1)}%`],["High",`${p(l.highestAverage,1)}%`],["Trend","up"===(b=l.overallTrend)?"Improving":"down"===b?"Declining":"stable"===b?"Stable":"-"]].map(([a,b],c)=>(0,d.jsxs)("div",{style:{padding:3,borderLeft:c?"1px solid #111":0},children:[(0,d.jsxs)("strong",{children:[a,":"]})," ",b]},String(a)))}),(0,d.jsxs)("footer",{style:{marginTop:5,display:"flex",justifyContent:"space-between",borderTop:"1px solid #111",paddingTop:3,fontSize:6.8},children:[(0,d.jsx)("span",{children:s.footer}),!1!==m.showGeneratedDate&&(0,d.jsxs)("span",{children:[s.generated,": ",(a=>{if(!a)return"-";let b=a instanceof Date?a:new Date(a);return Number.isNaN(b.getTime())?String(a):b.toLocaleDateString("en-GB",{year:"numeric",month:"short",day:"2-digit"})})(t)]})]})]})}}];function t(a){let b=String(a||"").trim();return s.find(a=>a.code===b||a.layoutKey===b)||s[0]}function u(a){return t(a).component}}};
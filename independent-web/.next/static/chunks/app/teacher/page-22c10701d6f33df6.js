(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{48992:(e,a,t)=>{"use strict";t.r(a),t.d(a,{NAV_SECTIONS:()=>tm,default:()=>tb});var r=t(95155),s=t(12115),i=t(34187),o=t(86263),n=t(36067),d=t(23585),l=t(42563);let c=e=>null==e?"":String(e).trim(),p=(e,a)=>!!c(e)&&c(e)===c(a);function m(e,a,t,r){return!(!e||!0===e.isDeleted||!1===e.active||["inactive","deleted","archived","suspended","revoked"].includes(c(e.status).toLowerCase()))&&p(e.accountId,a)&&p(e.schoolId,t)&&p(e.branchId,r)}let u=(e,a=!1,t)=>({key:e,ready:a,subjects:new Set,classes:new Set,teachingClasses:new Set,error:t});function b(e,a){if(e.size!==a.size)return!1;for(let t of e)if(!a.has(t))return!1;return!0}function h(){let e=(0,n.P)(),a=(0,d.f)(["classSubjects","classTeachers"]),{accountId:t,schoolId:r,branchId:i,authenticated:o,restoring:h,branchLoading:x,membership:g,role:f}=e,v=c(f||g?.role).toLowerCase().replace(/-/g,"_"),y=c(g?.teacherId||g?.teacherLocalId||g?.teacher?.id),w=c(t),k=c(r),j=c(i),I=[w,k,j,y,v].join("|"),S=!!(o&&!e.error&&g&&"teacher"===v&&y&&w&&k&&j),[N,C]=(0,s.useState)(()=>u(""));(0,s.useEffect)(()=>{let e=!1;return S?(C(e=>e.key===I?e:u(I)),Promise.all([l.db.classSubjects.toArray(),l.db.classTeachers.toArray()]).then(([a,t])=>{if(e)return;let r=a.filter(e=>m(e,w,k,j)&&p(e.teacherId,y)),s=t.filter(e=>m(e,w,k,j)&&p(e.teacherId,y)),i=new Set(r.map(e=>c(e.id)).filter(Boolean)),o=new Set(s.map(e=>c(e.classId)).filter(Boolean)),n=new Set(r.map(e=>c(e.classId)).filter(Boolean));C(e=>e.key===I&&e.ready&&!e.error&&b(e.subjects,i)&&b(e.classes,o)&&b(e.teachingClasses,n)?e:{key:I,ready:!0,subjects:i,classes:o,teachingClasses:n})}).catch(a=>{if(e)return;let t=a instanceof Error?a.message:String(a);C(e=>e.key===I&&e.ready?{...e,error:t}:u(I,!0,t))}),()=>{e=!0}):(C(e=>e.key!==I||!e.ready||e.subjects.size||e.classes.size||e.teachingClasses.size||e.error?u(I,!0):e),()=>{e=!0})},[S,I,w,k,j,y,a]);let z=N.key===I?N:u(I),M=(0,s.useMemo)(()=>new Set([...z.classes,...z.teachingClasses]),[z.classes,z.teachingClasses]);return{accountId:w,schoolId:k,branchId:j,teacherId:y,permitted:S,ready:!h&&!x&&z.ready,error:e.error||z.error,classTeacherClassIds:z.classes,teachingClassIds:z.teachingClasses,allowedClassIds:M,subjectIds:z.subjects}}async function x(e,a){return!!a&&!!e.teacherId&&(await l.db.classSubjects.toArray()).some(t=>m(t,e.accountId,e.schoolId,e.branchId)&&p(t.teacherId,e.teacherId)&&p(t.id,a))}async function g(e,a){if(!a||!e.teacherId)return!1;let[t,r,s]=await Promise.all([l.db.studentEnrollments.toArray(),l.db.classSubjects.toArray(),l.db.classTeachers.toArray()]),i=new Set([...r.filter(a=>m(a,e.accountId,e.schoolId,e.branchId)&&p(a.teacherId,e.teacherId)).map(e=>c(e.classId)),...s.filter(a=>m(a,e.accountId,e.schoolId,e.branchId)&&p(a.teacherId,e.teacherId)).map(e=>c(e.classId))]);return t.some(t=>{let r;return m(t,e.accountId,e.schoolId,e.branchId)&&p(t.studentId,a)&&("active"===(r=c(t?.status).toLowerCase())||""===r&&t?.active!==!1)&&i.has(c(t.classId))})}async function f(e,a){return!!a&&!!e.teacherId&&(await l.db.classTeachers.toArray()).some(t=>m(t,e.accountId,e.schoolId,e.branchId)&&p(t.teacherId,e.teacherId)&&p(t.classId,a))}var v=t(47650),y=t(73321),w=t(1573),k=t(19035),j=t(6243),I=t(59816),S=t(10903);let N=`
.eleeveon-skeleton{--sk-base:var(--surface-muted,var(--hover-bg,rgba(127,141,163,.12)));--sk-edge:var(--border,rgba(127,141,163,.2)); color:var(--text,#1f2937);width:100%;min-width:0}
.eleeveon-skeleton *{box-sizing:border-box;min-width:0}
.eleeveon-skeleton .esk-header{margin-bottom:12px}
.eleeveon-skeleton .esk-heading{font-size:13px;font-weight:750;line-height:1.5}
.eleeveon-skeleton .esk-note{font-size:11px;color:var(--muted,#64748b);margin-top:2px}
.eleeveon-skeleton .esk-line{display:block;height:10px;background:var(--sk-base);border-radius:5px;max-width:100%;animation:eleeveon-sk-pulse 1.6s ease-in-out infinite alternate}
.eleeveon-skeleton .esk-line.sm{height:7px}.eleeveon-skeleton .esk-line.lg{height:16px}
.eleeveon-skeleton .esk-card{border:1px solid var(--sk-edge);background:var(--card-bg,var(--surface,#fff));border-radius:14px;padding:12px;display:flex;flex-direction:column;gap:11px;min-height:104px}
.eleeveon-skeleton .esk-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:10px}
.eleeveon-skeleton .esk-grid.esk-assessment-grid{grid-template-columns:minmax(0,1fr)}
.eleeveon-skeleton .esk-grid.esk-picker-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.eleeveon-skeleton .esk-assessment-card{min-height:180px;padding:11px;gap:8px}
.eleeveon-skeleton .esk-assessment-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}
.eleeveon-skeleton .esk-assessment-field{display:flex;flex-direction:column;gap:5px;padding:7px;border:1px solid var(--sk-edge);border-radius:9px}
.eleeveon-skeleton .esk-assessment-result{display:flex;gap:12px;border-top:1px solid var(--sk-edge);padding-top:9px}
.eleeveon-skeleton .esk-picker-card{min-height:130px;justify-content:center;padding:16px}
@media (min-width:760px){.eleeveon-skeleton .esk-grid.esk-picker-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.eleeveon-skeleton .esk-grid.esk-assessment-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (min-width:1024px){.eleeveon-skeleton .esk-grid.esk-assessment-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
.eleeveon-skeleton .esk-row{display:flex;align-items:center;gap:10px}.eleeveon-skeleton .esk-col{flex:1;display:flex;flex-direction:column;gap:8px}
.eleeveon-skeleton .esk-avatar{height:43px;width:43px;border-radius:11px;background:var(--sk-base);flex:0 0 auto;animation:eleeveon-sk-pulse 1.6s ease-in-out infinite alternate}
.eleeveon-skeleton .esk-avatar.round{border-radius:50%}
.eleeveon-skeleton .esk-divider{height:1px;background:var(--sk-edge)}
.eleeveon-skeleton .esk-field{flex:1;background:var(--sk-base);height:31px;border-radius:7px;animation:eleeveon-sk-pulse 1.6s ease-in-out infinite alternate}
.eleeveon-skeleton .esk-pill{background:var(--sk-base);width:50px;height:24px;border-radius:30px;animation:eleeveon-sk-pulse 1.6s ease-in-out infinite alternate}
.eleeveon-skeleton .esk-table-scroll{width:100%;overflow:hidden;border:1px solid var(--sk-edge);border-radius:12px;background:var(--card-bg,var(--surface,#fff))}
.eleeveon-skeleton .esk-table{width:100%;border-collapse:collapse;table-layout:fixed}.eleeveon-skeleton .esk-table td,.eleeveon-skeleton .esk-table th{padding:11px 9px;border-bottom:1px solid var(--sk-edge);text-align:left}.eleeveon-skeleton .esk-table th{background:var(--sk-base)}.eleeveon-skeleton .esk-table tr:last-child td{border-bottom:0}
.eleeveon-skeleton .esk-report{max-width:740px;width:100%;background:var(--card-bg,var(--surface,#fff));border:1px solid var(--sk-edge);padding:20px;border-radius:8px;display:flex;flex-direction:column;gap:15px}
.eleeveon-skeleton .esk-report .esk-avatar{height:55px;width:55px}
@keyframes eleeveon-sk-pulse{from{opacity:.65}to{opacity:1}}
@media(prefers-reduced-motion:reduce){.eleeveon-skeleton .esk-line,.eleeveon-skeleton .esk-avatar,.eleeveon-skeleton .esk-field,.eleeveon-skeleton .esk-pill{animation:none}}
@media(max-width:580px){.eleeveon-skeleton .esk-grid{gap:8px}.eleeveon-skeleton .esk-card{padding:9px;gap:9px}.eleeveon-skeleton .esk-avatar{width:34px;height:34px}.eleeveon-skeleton .esk-picker-card{padding:10px;min-height:120px}.eleeveon-skeleton .esk-report{padding:12px}.eleeveon-skeleton .esk-table td,.eleeveon-skeleton .esk-table th{padding:9px 5px}}
@media(max-width:380px){.eleeveon-skeleton .esk-grid.esk-picker-grid{grid-template-columns:minmax(0,1fr)}}
`;function C({width:e="70%",size:a=""}){return(0,r.jsx)("span",{"aria-hidden":"true",className:`esk-line ${a}`,style:{width:e}})}function z({kind:e}){return"assessment"===e?(0,r.jsxs)("div",{className:"esk-card esk-assessment-card","aria-hidden":"true",children:[(0,r.jsxs)("div",{className:"esk-row",children:[(0,r.jsx)("span",{className:"esk-avatar",style:{height:36,width:36}}),(0,r.jsxs)("div",{className:"esk-col",children:[(0,r.jsx)(C,{width:"75%"}),(0,r.jsx)(C,{size:"sm",width:"50%"})]}),(0,r.jsx)("span",{className:"esk-pill"})]}),(0,r.jsx)("div",{className:"esk-assessment-fields",children:Array.from({length:2},(e,a)=>(0,r.jsxs)("div",{className:"esk-assessment-field",children:[(0,r.jsx)(C,{size:"sm",width:"74%"}),(0,r.jsx)(C,{size:"sm",width:"30%"}),(0,r.jsx)("span",{className:"esk-field",style:{height:38,flex:"none"}})]},a))}),(0,r.jsxs)("div",{className:"esk-assessment-result",children:[(0,r.jsx)(C,{size:"sm",width:"22%"}),(0,r.jsx)(C,{size:"sm",width:"24%"}),(0,r.jsx)(C,{size:"sm",width:"32%"})]})]}):(0,r.jsxs)("div",{className:`esk-card ${"class"===e?"esk-picker-card":""}`,"aria-hidden":"true",children:[(0,r.jsxs)("div",{className:"esk-row",children:[(0,r.jsx)("span",{className:`esk-avatar ${"student"===e||"teacher"===e||"attendance"===e?"round":""}`}),(0,r.jsxs)("div",{className:"esk-col",children:[(0,r.jsx)(C,{width:"82%"}),(0,r.jsx)(C,{size:"sm",width:"58%"})]})]}),"class"!==e&&(0,r.jsx)("div",{className:"esk-divider"}),(0,r.jsx)(C,{size:"sm",width:"90%"}),(0,r.jsx)(C,{size:"sm",width:"62%"})]})}function M({rows:e,columns:a,broadsheet:t}){return(0,r.jsx)("div",{className:"esk-table-scroll","aria-hidden":"true",children:(0,r.jsxs)("table",{className:"esk-table",children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:Array.from({length:a},(e,a)=>(0,r.jsx)("th",{children:(0,r.jsx)(C,{width:0===a?"85%":"70%"})},a))})}),(0,r.jsx)("tbody",{children:Array.from({length:e},(e,s)=>(0,r.jsx)("tr",{children:Array.from({length:a},(e,a)=>(0,r.jsx)("td",{children:(0,r.jsx)(C,{size:"sm",width:0===a?"90%":t?"42%":"70%"})},a))},s))})]})})}function A(){return(0,r.jsxs)("div",{className:"esk-report","aria-hidden":"true",children:[(0,r.jsxs)("div",{className:"esk-row",children:[(0,r.jsx)("span",{className:"esk-avatar"}),(0,r.jsxs)("div",{className:"esk-col",children:[(0,r.jsx)(C,{size:"lg",width:"68%"}),(0,r.jsx)(C,{width:"48%"}),(0,r.jsx)(C,{size:"sm",width:"60%"})]}),(0,r.jsx)("span",{className:"esk-avatar round"})]}),(0,r.jsx)("div",{className:"esk-divider"}),(0,r.jsxs)("div",{className:"esk-row",children:[(0,r.jsxs)("div",{className:"esk-col",children:[(0,r.jsx)(C,{width:"87%"}),(0,r.jsx)(C,{size:"sm",width:"62%"})]}),(0,r.jsxs)("div",{className:"esk-col",children:[(0,r.jsx)(C,{width:"88%"}),(0,r.jsx)(C,{size:"sm",width:"68%"})]})]}),(0,r.jsx)(M,{rows:5,columns:4,broadsheet:!1}),(0,r.jsx)("div",{className:"esk-divider"}),(0,r.jsx)(C,{width:"55%"}),(0,r.jsx)(C,{size:"sm",width:"96%"}),(0,r.jsx)(C,{size:"sm",width:"81%"})]})}function P({kind:e,view:a="cards",count:t=4,title:s="Getting your records ready…",message:i,compact:o=!1}){let n=Math.max(2,Math.min(10,Math.floor(t))),d="broadsheet"===e||"table"===e||"table"===a,l="report-card"===e||"preview"===a;return(0,r.jsxs)("section",{className:"eleeveon-skeleton",role:"status","aria-busy":"true","aria-label":s,children:[(0,r.jsx)("style",{children:N}),(0,r.jsxs)("div",{className:"esk-header",children:[(0,r.jsx)("div",{className:"esk-heading",children:s}),i&&(0,r.jsx)("div",{className:"esk-note",children:i})]}),l?(0,r.jsx)(A,{}):d?(0,r.jsx)(M,{rows:n,columns:"broadsheet"===e?7:o?3:5,broadsheet:"broadsheet"===e}):(0,r.jsx)("div",{className:`esk-grid ${"assessment"===e?"esk-assessment-grid":"class"===e?"esk-picker-grid":""}`,children:Array.from({length:n},(a,t)=>(0,r.jsx)(z,{kind:e},t))})]})}var E=t(62511),T=t(49779),R=t(39908),B=t(42328),$=t(75194),D=t(29114),O=t(95243),F=t(16550),L=t(28333),U=t(20303),_=t(15394),W=t(94705),K=t(46659),V=t(24670);function G(e,a){return("all"===a.classId||J(e.row.classId,a.classId))&&("all"===a.subjectId||J(e.row.subjectId,a.subjectId))&&("all"===a.periodId||J(e.row.academicPeriodId,a.periodId))&&("all"===a.readiness||("ready"===a.readiness?e.ready:!e.ready))}let q=e=>null==e?"":String(e).trim(),J=(e,a)=>String(e??"")===String(a??""),H=e=>String(e||"").toLowerCase().trim(),Y=e=>l.db[e],Z=(e,a)=>`${e||""}-${a||""}`,X=e=>!e?.isDeleted&&e?.active!==!1;function Q({item:e,onOpen:a}){return(0,r.jsxs)("button",{type:"button",className:"student-row assessment-row",onClick:a,children:[(0,r.jsx)("span",{className:"app-icon",children:"\uD83C\uDFEB"}),(0,r.jsxs)("span",{className:"student-main",children:[(0,r.jsx)("strong",{children:e.name}),(0,r.jsxs)("small",{children:[e.subjectCount," class subject(s) \xb7 ",e.studentCount," active student(s)"]}),(0,r.jsx)("em",{children:e.missingCount?`${e.missingCount} missing setup`:"All class subjects ready"})]}),(0,r.jsxs)("span",{className:"student-side",children:[(0,r.jsx)("span",{className:`status-dot-mini ${e.missingCount?"orange":"green"}`}),(0,r.jsx)("i",{children:"›"})]})]})}function ee({item:e,onOpen:a}){let t=e.option.ready&&e.itemCount>0;return(0,r.jsxs)("button",{type:"button",className:"student-row assessment-row",onClick:a,children:[(0,r.jsx)("span",{className:"app-icon",children:"\uD83D\uDCDD"}),(0,r.jsxs)("span",{className:"student-main",children:[(0,r.jsx)("strong",{children:e.option.subjectName}),(0,r.jsxs)("small",{className:"ae-subject-teacher-name",children:[(0,r.jsx)("span",{"aria-hidden":"true",children:"\uD83D\uDC64"})," Teacher: ",e.option.teacherName]}),(0,r.jsx)("small",{className:"ae-subject-period-name",children:e.option.academicPeriodName}),(0,r.jsx)("em",{children:t?`${e.studentCount} students \xb7 ${e.itemCount} items \xb7 ${e.completion}% done`:"Needs applicability or assessment items"})]}),(0,r.jsxs)("span",{className:"student-side",children:[(0,r.jsx)("span",{className:`status-dot-mini ${t?e.completion>=100?"green":"orange":"red"}`}),(0,r.jsx)("i",{children:"›"})]})]})}function ea({primary:e,title:a,text:t}){return(0,r.jsxs)("main",{className:"ae-page",style:{"--ae-primary":e},children:[(0,r.jsx)("style",{children:eu}),(0,r.jsxs)("section",{className:"ae-state",children:[(0,r.jsx)("div",{className:"ae-spinner"}),(0,r.jsx)("h2",{children:a}),(0,r.jsx)("p",{children:t})]})]})}function et({icon:e,title:a,text:t}){return(0,r.jsxs)("section",{className:"ae-empty",children:[(0,r.jsx)("div",{className:"ae-empty-icon",children:e}),(0,r.jsx)("h3",{children:a}),(0,r.jsx)("p",{children:t})]})}function er(e){let a=e.__entryPathLabels;return Array.isArray(a)?a.filter(e=>"string"==typeof e):[e.name]}function es(e){return er(e).slice(0,-1).join(" \xb7 ")}function ei(e){return er(e).join(" \xb7 ")}function eo({studentId:e,item:a,scores:t,updateScore:s}){let i=t[Z(e,q(a.id))];return(0,r.jsx)("input",{className:"ae-score-input",type:"number",inputMode:"decimal",min:0,max:Number(a.maxScore||100),step:"0.01",value:i??"",placeholder:`/${Number(a.maxScore||100)}`,onChange:t=>s(e,a,t.target.value)})}let en=s.memo(function({name:e,photo:a}){return(0,r.jsx)("span",{className:"ae-portrait","aria-hidden":"true",children:a?(0,r.jsx)("img",{src:a,alt:"",loading:"lazy",decoding:"async"}):(0,r.jsx)("span",{children:String(e||"S").trim().slice(0,1).toUpperCase()})})});function ed({row:e,photo:a,items:t,scores:s,updateScore:i}){let o=e.student,n=q(o.id),d=e.rowExpected>0&&e.rowEntered>=e.rowExpected;return(0,r.jsxs)("article",{className:"ae-score-card",children:[(0,r.jsxs)("div",{className:"ae-score-head",children:[(0,r.jsx)(en,{name:o.fullName,photo:a}),(0,r.jsxs)("div",{className:"ae-student-label",children:[(0,r.jsx)("strong",{children:o.fullName||"Unnamed student"}),(0,r.jsx)("span",{children:o.admissionNumber||"No admission number"})]}),(0,r.jsx)("i",{className:d?"done":e.rowEntered?"partial":"empty",children:d?"Done":e.rowEntered?"Partial":"Empty"})]}),(0,r.jsx)("div",{className:"ae-score-grid",children:t.map(e=>(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:ei(e)}),(0,r.jsxs)("small",{children:["/",Number(e.maxScore||100)]}),(0,r.jsx)(eo,{studentId:n,item:e,scores:s,updateScore:i})]},String(e.id)))}),(0,r.jsxs)("div",{className:"ae-result-row",children:[(0,r.jsxs)("span",{children:["Total: ",(0,r.jsx)("b",{children:e.weightedTotal})]}),(0,r.jsxs)("span",{children:["Grade: ",(0,r.jsx)("b",{children:e.grade||"—"})]}),(0,r.jsx)("span",{children:e.remark||"No remark"})]})]})}function el({rows:e,photoFor:a,items:t,scores:s,updateScore:i}){return(0,r.jsx)("section",{className:"ae-table-card",children:(0,r.jsxs)("div",{className:"ae-table-scroll",children:[(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsxs)("th",{children:["Students (",e.length,")"]}),t.map(e=>(0,r.jsxs)("th",{children:[es(e)?(0,r.jsx)("small",{className:"ae-assessment-group",children:es(e)}):null,e.name,(0,r.jsxs)("span",{children:["/",Number(e.maxScore||100)]})]},String(e.id))),(0,r.jsx)("th",{children:"Total"}),(0,r.jsx)("th",{children:"Grade"}),(0,r.jsx)("th",{children:"Remark"})]})}),(0,r.jsx)("tbody",{children:e.map(e=>{let o=e.student,n=q(o.id);return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"ae-table-student",children:[(0,r.jsx)(en,{name:o.fullName,photo:a(e.student)}),(0,r.jsxs)("span",{className:"ae-student-label",children:[(0,r.jsx)("strong",{children:o.fullName||"Unnamed student"}),(0,r.jsx)("small",{children:o.admissionNumber||"—"})]})]})}),t.map(e=>(0,r.jsx)("td",{children:(0,r.jsx)(eo,{studentId:n,item:e,scores:s,updateScore:i})},String(e.id))),(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:e.weightedTotal})}),(0,r.jsx)("td",{children:e.grade||"—"}),(0,r.jsx)("td",{children:e.remark||"—"})]},String(n))})})]}),!e.length&&(0,r.jsx)("div",{className:"ae-empty-table",children:"No student matches your filters."})]})})}function ec({rows:e,completion:a,structureItems:t,classSubjectOptions:i}){let o=(0,s.useMemo)(()=>{let a=new Map;return e.forEach(e=>a.set(e.grade||"Ungraded",(a.get(e.grade||"Ungraded")||0)+1)),Array.from(a.entries()).sort((e,a)=>a[1]-e[1])},[e]);return(0,r.jsxs)("section",{className:"ae-analysis-grid",children:[(0,r.jsxs)("article",{className:"ae-analysis ae-current-filter",children:[(0,r.jsx)("span",{children:"Completion"}),(0,r.jsxs)("strong",{children:[a.completion,"%"]}),(0,r.jsxs)("p",{children:[a.entered," of ",a.expected," expected score cells entered."]})]}),(0,r.jsxs)("article",{className:"ae-analysis ae-current-filter",children:[(0,r.jsx)("span",{children:"Complete Students"}),(0,r.jsx)("strong",{children:a.completeStudents}),(0,r.jsx)("p",{children:"Students with every active assessment item entered."})]}),(0,r.jsxs)("article",{className:"ae-analysis ae-current-filter",children:[(0,r.jsx)("span",{children:"Assessment Items"}),(0,r.jsx)("strong",{children:t.length}),(0,r.jsx)("p",{children:"Active score components in the selected assessment structure."})]}),(0,r.jsxs)("article",{className:"ae-analysis ae-current-filter",children:[(0,r.jsx)("span",{children:"Class Subjects"}),(0,r.jsx)("strong",{children:i.length}),(0,r.jsx)("p",{children:"Class subjects currently matching your filters."})]}),(0,r.jsxs)("article",{className:"ae-analysis ae-wide",children:[(0,r.jsx)("span",{children:"Grade Distribution"}),o.map(([e,a])=>(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:e})," — ",a]},e))]})]})}function ep({classes:e,subjects:a,periods:t,search:i,setSearch:o,filterClassId:n,filterSubjectId:d,filterPeriodId:l,filterReadiness:c,filterCompletion:p,filterGender:m,allOptions:u,activeClassSubjectId:b,onApply:h,onClose:x}){let[g,f]=(0,s.useState)(()=>({classId:n,subjectId:d,periodId:l,readiness:c,completion:p,gender:m,classSubjectId:"all"===b?"auto":b})),y=e=>{f(a=>({...a,...e}))},w=u.filter(e=>G(e,g)),k=new Set(w.map(e=>e.id)).has(g.classSubjectId)?g.classSubjectId:"auto";return"u"<typeof document?null:(0,v.createPortal)((0,r.jsx)("div",{className:"ae-sheet-backdrop",role:"presentation",onMouseDown:e=>{e.target===e.currentTarget&&x()},children:(0,r.jsxs)("section",{className:"ae-sheet",role:"dialog","aria-modal":"true","aria-label":"Assessment filters",onMouseDown:e=>e.stopPropagation(),children:[(0,r.jsxs)("div",{className:"ae-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Filters"}),(0,r.jsx)("p",{children:"Choose class, subject, gender and score completion."})]}),(0,r.jsx)("button",{type:"button",onClick:x,children:"✕"})]}),(0,r.jsxs)("label",{className:"ae-filter-search",children:[(0,r.jsx)("span",{children:"Search"}),(0,r.jsx)("input",{type:"search",value:i,onChange:e=>o(e.target.value),placeholder:"Find student or class..."})]}),(0,r.jsxs)("div",{className:"ae-form-grid",children:[(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Class"}),(0,r.jsxs)("select",{value:g.classId,onChange:e=>y({classId:e.target.value,classSubjectId:"auto"}),children:[(0,r.jsx)("option",{value:"all",children:"All classes"}),e.map(e=>(0,r.jsx)("option",{value:String(e.id),children:e.name},String(e.id)))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Subject"}),(0,r.jsxs)("select",{value:g.subjectId,onChange:e=>y({subjectId:e.target.value,classSubjectId:"auto"}),children:[(0,r.jsx)("option",{value:"all",children:"All subjects"}),a.map(e=>(0,r.jsx)("option",{value:String(e.id),children:e.name},String(e.id)))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Academic Period"}),(0,r.jsxs)("select",{value:g.periodId,onChange:e=>y({periodId:e.target.value,classSubjectId:"auto"}),children:[(0,r.jsx)("option",{value:"all",children:"All periods"}),t.map(e=>(0,r.jsx)("option",{value:String(e.id),children:e.name},String(e.id)))]})]}),(0,r.jsxs)("label",{className:"ae-filter-exact-subject",children:[(0,r.jsxs)("span",{children:["Class subject to open (",w.length," matching)"]}),(0,r.jsxs)("select",{value:k,onChange:e=>y({classSubjectId:e.target.value}),children:[(0,r.jsx)("option",{value:"auto",children:"Automatically choose a ready match"}),w.map(e=>(0,r.jsxs)("option",{value:e.id,children:[e.display,e.ready?" \xb7 Ready":" \xb7 Needs setup"]},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Setup Status"}),(0,r.jsxs)("select",{value:g.readiness,onChange:e=>y({readiness:e.target.value,classSubjectId:"auto"}),children:[(0,r.jsx)("option",{value:"all",children:"All"}),(0,r.jsx)("option",{value:"ready",children:"Applicability ready"}),(0,r.jsx)("option",{value:"missing",children:"Missing applicability"})]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Student gender"}),(0,r.jsxs)("select",{value:g.gender,onChange:e=>y({gender:e.target.value}),children:[(0,r.jsx)("option",{value:"all",children:"All students"}),(0,r.jsx)("option",{value:"male",children:"Male students"}),(0,r.jsx)("option",{value:"female",children:"Female students"})]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Score Completion"}),(0,r.jsxs)("select",{value:g.completion,onChange:e=>y({completion:e.target.value}),children:[(0,r.jsx)("option",{value:"all",children:"All"}),(0,r.jsx)("option",{value:"empty",children:"Empty"}),(0,r.jsx)("option",{value:"partial",children:"Partial"}),(0,r.jsx)("option",{value:"complete",children:"Complete"})]})]})]}),(0,r.jsxs)("div",{className:"ae-sheet-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>f({classId:"all",subjectId:"all",periodId:"all",readiness:"all",completion:"all",gender:"all",classSubjectId:"auto"}),children:"Clear"}),(0,r.jsx)("button",{type:"button",className:"ae-primary",onClick:()=>h({...g,classSubjectId:k}),children:"Apply \xb7 Open subject"})]})]})}),document.body)}function em({viewMode:e,setViewMode:a,onExcel:t,onRefresh:s,onClose:i}){return"u"<typeof document?null:(0,v.createPortal)((0,r.jsx)("div",{className:"ae-sheet-backdrop",role:"presentation",onMouseDown:e=>{e.target===e.currentTarget&&i()},children:(0,r.jsxs)("section",{className:"ae-sheet ae-more-sheet",role:"dialog","aria-modal":"true","aria-label":"More assessment options",onMouseDown:e=>e.stopPropagation(),children:[(0,r.jsxs)("div",{className:"ae-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"More"}),(0,r.jsx)("p",{children:"Change how you enter and review scores."})]}),(0,r.jsx)("button",{type:"button",onClick:i,children:"✕"})]}),(0,r.jsxs)("button",{type:"button",className:"cards"===e?"active":"",onClick:()=>a("cards"),children:["Card entry ",(0,r.jsx)("span",{children:"Best for phones"})]}),(0,r.jsxs)("button",{type:"button",className:"table"===e?"active":"",onClick:()=>a("table"),children:["Table entry ",(0,r.jsx)("span",{children:"Best for laptop/tablet"})]}),(0,r.jsxs)("button",{type:"button",className:"summary"===e?"active":"",onClick:()=>a("summary"),children:["Summary ",(0,r.jsx)("span",{children:"Completion and grade overview"})]}),(0,r.jsxs)("button",{type:"button",onClick:t,children:["Excel ",(0,r.jsx)("span",{children:"Import, template and score-sheet export"})]}),(0,r.jsxs)("button",{type:"button",onClick:s,children:["Refresh data ",(0,r.jsx)("span",{children:"Reload records from IndexedDB"})]})]})}),document.body)}let eu=`
@keyframes ae-spin { to { transform: rotate(360deg); } }
.ae-page{--ae-bg:var(--bg,#f7f8fb);--ae-card:var(--card-bg,var(--surface,#fff));--ae-text:var(--text,#111827);--ae-muted:var(--muted,#6b7280);--ae-border:var(--border,rgba(15,23,42,.10));min-height:100dvh;width:100%;max-width:100%;padding:calc(8px * var(--local-density-scale,1));padding-bottom:max(40px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--ae-primary) 9%,transparent),transparent 30rem),var(--ae-bg);color:var(--ae-text);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);font-size:var(--font-size,14px);overflow-x:hidden}
.ae-page *,.ae-page *::before,.ae-page *::after{box-sizing:border-box;min-width:0}.ae-page button,.ae-page input,.ae-page select{font:inherit}.ae-page button{-webkit-tap-highlight-color:transparent;cursor:pointer}.ae-page input,.ae-page select{width:100%;min-height:42px;border:1px solid var(--input-border,var(--ae-border));border-radius:16px;padding:0 12px;background:var(--input-bg,var(--ae-card));color:var(--input-text,var(--ae-text));outline:none;font-weight:750}.ae-page input:focus,.ae-page select:focus{border-color:color-mix(in srgb,var(--ae-primary) 52%,var(--ae-border));box-shadow:0 0 0 4px color-mix(in srgb,var(--ae-primary) 12%,transparent)}
.ae-state,.ae-search-card,.student-row,.ae-table-card,.ae-score-card,.ae-empty,.ae-analysis,.ae-sheet,.ae-session-strip,.ae-compact-meta{background:var(--ae-card);border:1px solid var(--ae-border);box-shadow:0 18px 45px rgba(15,23,42,.07)}
.ae-search-card{position:sticky;top:0;z-index:10;display:grid;grid-template-columns:1fr auto auto;gap:7px;align-items:center;padding:8px;border-radius:22px;margin:0 auto 8px;backdrop-filter:blur(18px);max-width:1180px}.ae-search{display:flex;align-items:center;gap:8px;min-width:0;background:color-mix(in srgb,var(--ae-primary) 5%,var(--ae-card));border:1px solid var(--ae-border);border-radius:16px;padding:0 10px}.ae-search span{color:var(--ae-muted);font-weight:900}.ae-search input{height:40px;min-height:40px;border:0;background:transparent;box-shadow:none;padding:0}.ae-icon-button,.ae-filter-button{height:40px;width:40px;border:1px solid var(--ae-border);border-radius:15px;background:var(--ae-card);color:var(--ae-text);display:grid;place-items:center;position:relative;font-weight:950}.ae-filter-button.active{border-color:color-mix(in srgb,var(--ae-primary) 58%,var(--ae-border));color:var(--ae-primary);background:color-mix(in srgb,var(--ae-primary) 8%,var(--ae-card))}.ae-filter-button b{position:absolute;right:-4px;top:-4px;min-width:18px;height:18px;border-radius:99px;background:var(--ae-primary);color:#fff;font-size:11px;display:grid;place-items:center}.ae-slider-icon{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}
.ae-filter-chips{display:flex;gap:7px;overflow:auto;padding:1px 0 8px;max-width:1180px;margin:0 auto}.ae-filter-chips button{white-space:nowrap;border:1px solid var(--ae-border);background:var(--ae-card);color:var(--ae-text);border-radius:999px;padding:7px 10px;font-size:12px;font-weight:850}.class-breadcrumb button:first-child{background:color-mix(in srgb,var(--ae-primary) 10%,var(--ae-card));color:var(--ae-primary);border-color:color-mix(in srgb,var(--ae-primary) 22%,var(--ae-border))}
.ae-list{display:grid;gap:8px;max-width:1180px;margin:0 auto}.student-row{width:100%;border-radius:18px;padding:9px 10px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;text-align:left;color:var(--ae-text)}.student-row:hover{border-color:color-mix(in srgb,var(--ae-primary) 35%,var(--ae-border));transform:translateY(-1px)}.app-icon{width:36px;height:36px;border-radius:14px;display:grid;place-items:center;background:linear-gradient(135deg,color-mix(in srgb,var(--ae-primary) 18%,transparent),color-mix(in srgb,var(--ae-primary) 5%,transparent));font-size:18px}.student-main{display:grid;gap:1px}.student-main strong{font-size:13.5px;line-height:1.2}.student-main small,.student-main em{font-size:11.5px;color:var(--ae-muted);font-style:normal;line-height:1.25}.student-side{display:grid;justify-items:end;gap:3px;color:var(--ae-muted);font-weight:950}.status-dot-mini,.ae-status-dot{width:9px;height:9px;border-radius:99px;background:var(--ae-muted);box-shadow:0 0 0 3px color-mix(in srgb,currentColor 12%,transparent)}.status-dot-mini.green,.ae-status-dot.green{background:#16a34a}.status-dot-mini.orange,.ae-status-dot.orange{background:#f97316}.status-dot-mini.red{background:#dc2626}.status-dot-mini.gray{background:#94a3b8}
.ae-session-strip{max-width:1180px;margin:0 auto 8px;border-radius:18px;padding:8px 9px;display:grid;grid-template-columns:auto 1fr auto auto;gap:8px;align-items:center}.ae-session-strip strong{display:block;font-size:13.5px}.ae-session-strip small{display:block;color:var(--ae-muted);font-size:11.5px;margin-top:1px}.ae-session-strip button{border:1px solid var(--ae-border);border-radius:14px;padding:8px 10px;background:var(--ae-card);color:var(--ae-text);font-weight:950}.ae-session-strip button.primary{border-color:transparent;background:var(--ae-primary);color:#fff}.ae-session-strip button:disabled{opacity:.55}.ae-compact-meta{max-width:1180px;margin:0 auto 8px;border-radius:18px;padding:7px;display:flex;gap:6px;overflow:auto}.ae-chip{white-space:nowrap;display:inline-flex;align-items:center;border-radius:999px;padding:5px 8px;font-size:11px;font-weight:950;border:1px solid var(--ae-border);background:color-mix(in srgb,var(--ae-card) 90%,transparent)}.ae-chip.green{background:rgba(34,197,94,.12);color:#15803d}.ae-chip.red{background:rgba(239,68,68,.12);color:#b91c1c}.ae-chip.blue{background:rgba(59,130,246,.12);color:#1d4ed8}.ae-chip.purple{background:rgba(147,51,234,.12);color:#7e22ce}.ae-chip.orange{background:rgba(249,115,22,.12);color:#c2410c}.ae-chip.gray{color:var(--ae-muted)}
.ae-score-card{border-radius:18px;padding:9px}.ae-score-head{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px}.ae-score-head strong{display:block;font-size:13.5px}.ae-score-head span{display:block;color:var(--ae-muted);font-size:11.5px;margin-top:1px}.ae-score-head i{font-style:normal;font-size:10.5px;font-weight:950;border-radius:999px;padding:4px 7px;background:rgba(148,163,184,.12)}.ae-score-head i.done{background:rgba(34,197,94,.12);color:#15803d}.ae-score-head i.partial{background:rgba(249,115,22,.12);color:#c2410c}.ae-score-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.ae-score-grid label{display:grid;gap:3px;border:1px solid var(--ae-border);border-radius:15px;padding:7px;background:color-mix(in srgb,var(--ae-primary) 3%,var(--ae-card))}.ae-score-grid span{font-size:11.5px;font-weight:950}.ae-score-grid small{font-size:10px;color:var(--ae-muted)}.ae-score-input{width:100%;height:36px;min-height:36px;border:1px solid var(--ae-border);border-radius:12px;background:var(--ae-card);color:var(--ae-text);padding:0 8px;font:inherit;font-weight:950}.ae-result-row{display:flex;gap:8px;flex-wrap:wrap;color:var(--ae-muted);font-size:11.5px;border-top:1px solid var(--ae-border);margin-top:8px;padding-top:8px}.ae-result-row b{color:var(--ae-text)}
.ae-entry-projection-warning{max-width:1180px;margin:0 auto 10px;padding:11px 13px;border:1px solid #f59e0b;border-radius:14px;background:color-mix(in srgb,#f59e0b 10%,var(--ae-card));display:grid;gap:3px}.ae-entry-projection-warning span{font-size:12px;color:var(--ae-muted)}.ae-assessment-group{display:block!important;margin:0 0 2px!important;color:var(--ae-primary)!important;font-size:9px!important;letter-spacing:.02em;text-transform:none!important}.ae-table-card{max-width:1180px;margin:0 auto;border-radius:20px;overflow:hidden}.ae-table-scroll{overflow:auto;max-height:72dvh}table{width:100%;border-collapse:separate;border-spacing:0;min-width:760px}th,td{border-bottom:1px solid var(--ae-border);padding:8px 9px;text-align:left;vertical-align:middle;font-size:12.5px}th{position:sticky;top:0;background:var(--ae-card);z-index:1;color:var(--ae-muted);font-size:10.5px;text-transform:uppercase}th span,td span{display:block;color:var(--ae-muted);font-size:10.5px;margin-top:1px}td .ae-score-input{min-width:84px}.ae-empty-table{padding:18px;color:var(--ae-muted);text-align:center}
.ae-empty,.ae-state{max-width:720px;margin:10px auto;border-radius:22px;padding:22px;text-align:center}.ae-empty-icon{font-size:28px}.ae-empty h3,.ae-state h2{margin:7px 0 4px}.ae-empty p,.ae-state p{margin:0;color:var(--ae-muted);font-size:13px}.ae-spinner{width:30px;height:30px;border:3px solid rgba(148,163,184,.35);border-top-color:var(--ae-primary);border-radius:999px;margin:0 auto 10px;animation:ae-spin 1s linear infinite}.ae-state-button{margin-top:12px;border:1px solid transparent;border-radius:14px;padding:10px 12px;font-weight:950;background:var(--ae-primary);color:#fff}
.ae-analysis-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;max-width:1180px;margin:0 auto}.ae-analysis{border-radius:18px;padding:12px}.ae-analysis span{display:block;color:var(--ae-muted);font-size:11.5px;font-weight:950}.ae-analysis strong{font-size:26px}.ae-analysis p{margin:5px 0 0;color:var(--ae-muted);font-size:12.5px}.ae-analysis.ae-wide{grid-column:1/-1}.ae-analysis.ae-wide p{display:flex;justify-content:space-between;border-top:1px solid var(--ae-border);padding-top:7px}
.ae-sheet-backdrop{position:fixed;inset:0;z-index:50;background:rgba(15,23,42,.48);display:flex;align-items:flex-end;justify-content:center;padding:12px}.ae-sheet{width:min(680px,100%);max-height:88dvh;overflow:auto;border-radius:26px;padding:14px}.ae-sheet-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:12px}.ae-sheet-head h2{margin:0}.ae-sheet-head p{margin:2px 0 0;color:var(--ae-muted);font-size:13px}.ae-sheet-head button{border:1px solid var(--ae-border);background:var(--ae-card);border-radius:12px;width:36px;height:36px;color:var(--ae-text)}.ae-form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.ae-form-grid label{display:grid;gap:5px;font-size:12px;color:var(--ae-muted);font-weight:850}.ae-sheet-actions{display:flex;justify-content:flex-end;gap:8px;border-top:1px solid var(--ae-border);padding-top:12px;margin-top:12px}.ae-sheet-actions button{border:1px solid var(--ae-border);border-radius:14px;padding:10px 12px;background:var(--ae-card);color:var(--ae-text);font-weight:950}.ae-sheet-actions .ae-primary{background:var(--ae-primary);color:#fff;border-color:transparent}.ae-more-sheet{display:grid;gap:8px}.ae-more-sheet .ae-sheet-head{margin-bottom:4px}.ae-more-sheet>button{display:grid;grid-template-columns:auto 1fr;gap:2px 10px;text-align:left;border:1px solid var(--ae-border);background:var(--ae-card);color:var(--ae-text);border-radius:16px;padding:11px;font-weight:950}.ae-more-sheet>button span:first-child{grid-row:1/3;font-size:18px}.ae-more-sheet>button small{display:block;color:var(--ae-muted);font-size:11.5px;font-weight:700}.ae-more-sheet>button.active{border-color:var(--ae-primary);color:var(--ae-primary);background:color-mix(in srgb,var(--ae-primary) 7%,var(--ae-card))}
.ae-toast{position:fixed;z-index:80;left:12px;right:12px;bottom:12px;max-width:720px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:10px;border-radius:18px;padding:12px 14px;color:#fff;box-shadow:0 18px 40px rgba(15,23,42,.28);font-weight:850}.ae-toast.success{background:#16a34a}.ae-toast.error{background:#dc2626}.ae-toast.info{background:#2563eb}.ae-toast button{border:0;background:rgba(255,255,255,.18);color:#fff;border-radius:10px;width:30px;height:30px}
@media (min-width:760px){.ae-page{padding:14px}.ae-list{grid-template-columns:repeat(2,minmax(0,1fr))}.ae-score-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.ae-sheet-backdrop{align-items:center}.ae-analysis-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
@media (min-width:1120px){.ae-list.ae-entry-list{grid-template-columns:repeat(3,minmax(0,1fr))}.ae-list.ae-picker-list{grid-template-columns:repeat(2,minmax(0,1fr))}.ae-score-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:520px){.ae-page{padding:7px}.ae-search-card{border-radius:18px}.ae-session-strip{grid-template-columns:auto 1fr auto auto}.ae-session-strip button{padding:8px 9px}.ae-score-grid,.ae-form-grid{grid-template-columns:1fr}th,td{padding:7px}.ae-sheet{border-radius:22px}.ae-analysis-grid{grid-template-columns:1fr}}

@media (min-width:980px){
  .ae-sheet-backdrop{
    top:var(--eds-shell-top-offset,0px);
    right:0;
    bottom:0;
    left:var(--portal-content-left,0px);
    width:auto;
    max-width:calc(100vw - var(--portal-content-left,0px));
    min-width:0;
    overflow-x:hidden;
  }

  .ae-sheet{
    min-width:0;
    max-width:calc(100vw - var(--portal-content-left,0px) - 20px);
  }
}


.assessment-excel-footer-actions{display:flex;justify-content:flex-end;gap:8px;flex-wrap:wrap}.assessment-excel-footer-actions button{min-height:40px;border-radius:12px;padding:0 14px;border:1px solid var(--ae-border);font-weight:900}.assessment-excel-footer-actions button.secondary{background:var(--ae-card);color:var(--ae-text)}.assessment-excel-footer-actions button.primary{background:var(--ae-primary);border-color:var(--ae-primary);color:#fff}.assessment-excel-footer-actions button:disabled{opacity:.5;cursor:not-allowed}.assessment-excel-stage{display:grid;gap:14px}.assessment-excel-stage-head h3{margin:0;font-size:15px}.assessment-excel-stage-head p{margin:5px 0 0;color:var(--ae-muted);font-size:12px;line-height:1.5}.assessment-excel-context-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.assessment-excel-context-grid label{display:grid;gap:5px}.assessment-excel-context-grid label>span{font-size:11px;font-weight:900;color:var(--ae-muted)}.assessment-excel-context-card,.assessment-excel-column-note{display:grid;gap:3px;padding:12px;border:1px solid var(--ae-border);border-radius:14px;background:var(--ae-card)}.assessment-excel-context-card span,.assessment-excel-context-card small,.assessment-excel-column-note span{font-size:11px;color:var(--ae-muted);line-height:1.45}.assessment-excel-result{text-align:center;padding:10px 0}.assessment-excel-result-icon{width:56px;height:56px;margin:0 auto 10px;border-radius:50%;display:grid;place-items:center;background:rgba(34,197,94,.13);color:#15803d;font-size:28px;font-weight:950}.assessment-excel-result h3{margin:0;font-size:17px}.assessment-excel-result>p{margin:6px auto 16px;max-width:620px;color:var(--ae-muted);font-size:12px;line-height:1.5}.assessment-excel-result-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:8px}.assessment-excel-result-grid span{padding:11px 7px;border-radius:12px;background:var(--ae-card);border:1px solid var(--ae-border)}.assessment-excel-result-grid span.danger{background:#fff1f0}.assessment-excel-result-grid strong{display:block;font-size:18px}.assessment-excel-result-grid small{display:block;margin-top:2px;color:var(--ae-muted);font-size:10px}.assessment-excel-result-errors{margin-top:14px;display:grid;gap:6px;text-align:left}.assessment-excel-result-errors div{display:grid;gap:2px;padding:9px 10px;border-radius:11px;background:#fff7f6;border:1px solid #ffd3cf}.assessment-excel-result-errors strong{font-size:11px}.assessment-excel-result-errors span{font-size:10px;color:#b42318}@media(max-width:720px){.assessment-excel-context-grid{grid-template-columns:1fr}.assessment-excel-result-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.assessment-excel-footer-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));width:100%}.assessment-excel-footer-actions button:only-child{grid-column:1/-1}}

/* ============================================================
   PORTAL-SAFE CENTERED MODALS + RESPONSIVE ASSESSMENT CONTEXT
   ============================================================ */
.ae-sheet-backdrop,
[class*="excel"][class*="backdrop"] {
  top: calc(var(--eds-shell-top-offset, 0px) + var(--portal-header-height, 48px)) !important;
  right: 0 !important;
  bottom: calc(64px + env(safe-area-inset-bottom, 0px)) !important;
  left: 0 !important;
  width: auto !important;
  height: auto !important;
  min-height: 0 !important;
  box-sizing: border-box !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 10px !important;
  overflow: hidden !important;
  z-index: 58 !important;
}

.ae-sheet,
[class*="excel"][class*="sheet"]:not([class*="backdrop"]),
[class*="excel"][class*="modal"]:not([class*="backdrop"]) {
  margin: 0 auto !important;
  max-height: calc(100% - 4px) !important;
  max-width: calc(100% - 2px) !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scroll-padding-bottom: 84px;
}

.ae-sheet-actions {
  position: sticky;
  bottom: 0;
  z-index: 3;
  background: linear-gradient(to top, var(--ae-card) 78%, transparent);
}

/* Replace the single horizontally-scrolling metadata line with a true
   responsive grid so labels never sit on top of one another. */
.ae-compact-meta {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(112px, 1fr)) !important;
  gap: 7px !important;
  overflow: visible !important;
  align-items: stretch;
}

.ae-compact-meta .ae-chip {
  min-width: 0;
  width: 100%;
  min-height: 32px;
  justify-content: center;
  text-align: center;
  white-space: normal !important;
  overflow-wrap: anywhere;
  line-height: 1.2;
}

/* Let the subject/session strip breathe on phones instead of squeezing
   title + Start + Save into one narrow row. */
@media (max-width: 560px) {
  .ae-session-strip {
    grid-template-columns: auto minmax(0, 1fr) !important;
    align-items: center;
  }

  .ae-session-strip > div {
    min-width: 0;
  }

  .ae-session-strip > div strong,
  .ae-session-strip > div small {
    overflow-wrap: anywhere;
  }

  .ae-session-strip > button {
    width: 100%;
  }

  .ae-session-strip > button:nth-last-child(2) {
    grid-column: 1 / 2;
  }

  .ae-session-strip > button:last-child {
    grid-column: 2 / 3;
  }

  .ae-compact-meta {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}

@media (max-width: 360px) {
  .ae-compact-meta {
    grid-template-columns: 1fr !important;
  }
}

@media (min-width: 980px) {
  .ae-sheet-backdrop,
  [class*="excel"][class*="backdrop"] {
    top: calc(var(--eds-shell-top-offset, 0px) + var(--portal-header-height, 48px)) !important;
    right: 0 !important;
    bottom: 0 !important;
    left: var(--portal-content-left, 0px) !important;
    max-width: calc(100vw - var(--portal-content-left, 0px)) !important;
    padding: 18px !important;
    z-index: 80 !important;
  }

  .ae-compact-meta {
    grid-template-columns: repeat(auto-fit, minmax(130px, max-content)) !important;
    justify-content: start;
  }

  .ae-compact-meta .ae-chip {
    width: auto;
    padding-inline: 11px;
  }
}

/* ============================================================
   ASSESSMENT FILTER / MORE MODALS — TRUE FULL-SCREEN PORTALS
   ============================================================ */
.ae-sheet-backdrop {
  --ae-bg: var(--bg, #f7f8fb);
  --ae-card: var(--card-bg, var(--surface, #ffffff));
  --ae-text: var(--text, var(--foreground, #111827));
  --ae-muted: var(--muted, var(--muted-foreground, #64748b));
  --ae-border: var(--border, rgba(15, 23, 42, .12));
  --ae-primary: var(--primary-color, #2563eb);

  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100dvh !important;
  max-width: none !important;
  min-height: 100dvh !important;
  z-index: 2147482000 !important;

  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  box-sizing: border-box !important;
  padding:
    calc(var(--eds-shell-top-offset, 0px) + var(--portal-header-height, 48px) + 10px)
    10px
    calc(82px + env(safe-area-inset-bottom, 0px))
    10px !important;

  overflow: hidden !important;

  background:
    color-mix(
      in srgb,
      #020617 62%,
      transparent
    ) !important;

  -webkit-backdrop-filter: blur(10px) saturate(.92);
  backdrop-filter: blur(10px) saturate(.92);
}

.ae-sheet-backdrop .ae-sheet {
  width: min(680px, calc(100vw - 20px)) !important;
  max-width: 100% !important;
  max-height: calc(100% - 4px) !important;
  min-height: 0 !important;
  margin: 0 !important;

  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;

  border: 1px solid var(--ae-border) !important;
  border-radius: 22px !important;
  background: var(--ae-card) !important;
  color: var(--ae-text) !important;
  box-shadow: 0 26px 80px rgba(2, 6, 23, .28) !important;
}

.ae-sheet-backdrop .ae-sheet-head {
  position: sticky;
  top: -14px;
  z-index: 5;

  margin: -14px -14px 12px;
  padding: 14px;
  border-bottom: 1px solid var(--ae-border);

  background: var(--ae-card);
}

.ae-sheet-backdrop .ae-sheet-head h2 {
  color: var(--ae-text) !important;
}

.ae-sheet-backdrop .ae-sheet-head p {
  color: var(--ae-muted) !important;
}

.ae-sheet-backdrop .ae-sheet-head > button {
  position: relative;
  z-index: 6;

  width: 44px !important;
  min-width: 44px !important;
  height: 44px !important;
  min-height: 44px !important;

  display: grid;
  place-items: center;

  border: 1px solid var(--ae-border) !important;
  border-radius: 999px !important;

  background:
    color-mix(
      in srgb,
      var(--ae-text) 6%,
      var(--ae-card)
    ) !important;

  color: var(--ae-text) !important;
  box-shadow: none !important;

  font-size: 20px;
  font-weight: 900;

  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  pointer-events: auto;
}

.ae-sheet-backdrop .ae-sheet-head > button:hover {
  background:
    color-mix(
      in srgb,
      var(--ae-primary) 10%,
      var(--ae-card)
    ) !important;

  border-color:
    color-mix(
      in srgb,
      var(--ae-primary) 36%,
      var(--ae-border)
    ) !important;
}

.ae-sheet-backdrop .ae-form-grid label {
  color: var(--ae-muted);
}

.ae-sheet-backdrop input,
.ae-sheet-backdrop select,
.ae-sheet-backdrop textarea {
  background: var(--ae-card) !important;
  color: var(--ae-text) !important;
  border-color: var(--ae-border) !important;
}

.ae-sheet-backdrop select option {
  background: var(--ae-card);
  color: var(--ae-text);
}

.ae-sheet-backdrop .ae-sheet-actions {
  position: sticky;
  bottom: -14px;
  z-index: 4;

  margin: 12px -14px -14px;
  padding: 12px 14px 14px;

  border-top: 1px solid var(--ae-border);

  background:
    linear-gradient(
      to top,
      var(--ae-card) 86%,
      color-mix(in srgb, var(--ae-card) 94%, transparent)
    );
}

.ae-sheet-backdrop .ae-sheet-actions button,
.ae-sheet-backdrop .ae-more-sheet > button {
  min-height: 46px;

  border-color: var(--ae-border) !important;
  background:
    color-mix(
      in srgb,
      var(--ae-text) 4%,
      var(--ae-card)
    ) !important;
  color: var(--ae-text) !important;

  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  pointer-events: auto;
}

.ae-sheet-backdrop .ae-sheet-actions .ae-primary {
  background: var(--ae-primary) !important;
  border-color: var(--ae-primary) !important;
  color: #ffffff !important;
}

.ae-sheet-backdrop .ae-more-sheet > button.active {
  background:
    color-mix(
      in srgb,
      var(--ae-primary) 10%,
      var(--ae-card)
    ) !important;
  border-color: var(--ae-primary) !important;
  color: var(--ae-primary) !important;
}

@media (prefers-color-scheme: dark) {
  .ae-sheet-backdrop {
    background:
      color-mix(
        in srgb,
        #020617 78%,
        transparent
      ) !important;
  }

  .ae-sheet-backdrop .ae-sheet-head > button {
    background: rgba(255, 255, 255, .12) !important;
    color: #f8fafc !important;
    border-color: rgba(255, 255, 255, .22) !important;
    box-shadow:
      0 4px 16px rgba(0, 0, 0, .28),
      inset 0 0 0 1px rgba(255, 255, 255, .04) !important;
  }

  .ae-sheet-backdrop .ae-sheet-head > button:hover {
    background: rgba(255, 255, 255, .18) !important;
    border-color: rgba(255, 255, 255, .32) !important;
  }
}

@media (max-width: 520px) {
  .ae-sheet-backdrop {
    padding:
      calc(var(--eds-shell-top-offset, 0px) + var(--portal-header-height, 48px) + 8px)
      8px
      calc(82px + env(safe-area-inset-bottom, 0px))
      8px !important;
  }

  .ae-sheet-backdrop .ae-sheet {
    width: calc(100vw - 16px) !important;
    border-radius: 20px !important;
  }

  .ae-sheet-backdrop .ae-more-sheet > button {
    min-height: 52px;
  }

  .ae-sheet-backdrop .ae-sheet-actions button {
    min-height: 48px;
    flex: 1 1 120px;
  }
}


/* ============================================================
   MODAL VISIBILITY HARDENING — STRONG BACKDROP + CLOSE BUTTON
   Applies to assessment portals and shared Excel portals rendered
   directly under document.body.
   ============================================================ */
.ae-sheet-backdrop,
.excel-export-overlay,
.excel-import-overlay {
  background: rgba(2, 6, 23, .66) !important;
  -webkit-backdrop-filter: blur(12px) saturate(.9) !important;
  backdrop-filter: blur(12px) saturate(.9) !important;
}

/* Branch Admin assessment — lean, neutral, scroll-efficient */
.ae-page{min-height:0;background:transparent;padding:4px 5px 20px;overflow-x:clip}
.ae-page .ae-search-card{display:none}
.ae-page .student-row,.ae-page .ae-score-card,.ae-page .ae-table-card,.ae-page .ae-session-strip{box-shadow:none;background:var(--ae-card);border:1px solid var(--ae-border)}
.ae-page .ae-list{gap:10px;align-items:stretch;max-width:none}
.ae-page .ae-picker-list .student-row{min-height:128px;align-items:center;padding:18px 16px;border-radius:13px;transform:none;box-shadow:none}
.ae-page .ae-picker-list .student-row:focus-visible,.ae-page .ae-picker-list .student-row:hover{border-color:var(--ae-primary)}
.ae-page .app-icon{background:var(--ae-bg)!important;color:var(--ae-text)!important;box-shadow:none!important}
.ae-page .ae-session-strip{padding:6px 10px;margin:4px auto 8px;border-radius:12px;min-height:44px}
.ae-page .ae-active-context{flex:1;min-width:0;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.ae-page .ae-active-context strong{font-size:13px}
.ae-page .ae-active-context small{font-size:11px;color:var(--ae-muted);white-space:nowrap}
.ae-page .ae-score-card{border-radius:13px;padding:11px;min-width:0;content-visibility:auto;contain-intrinsic-size:auto 230px}
.ae-page .ae-score-grid label{background:transparent;border-radius:9px;padding:6px;gap:2px}
.ae-page .ae-score-grid small{font-size:10px}
.ae-page .ae-score-head{align-items:center;justify-content:flex-start;gap:9px}
.ae-page .ae-score-head i{margin-left:auto;background:var(--ae-bg);color:var(--ae-muted);font-weight:650}
.ae-page .ae-score-head i.done,.ae-page .ae-score-head i.partial{background:var(--ae-bg);color:var(--ae-text)}
.ae-page .ae-student-label{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.ae-page .ae-student-label strong{font-size:12.5px;line-height:1.25}
.ae-page .ae-student-label small{font-size:10.5px;color:var(--ae-muted)}
.ae-page .ae-portrait{width:36px;height:36px;flex:0 0 36px;border-radius:50%;border:1px solid var(--ae-border);overflow:hidden;display:grid;place-items:center;background:var(--ae-bg);color:var(--ae-muted);font-size:14px;font-weight:700}
.ae-page .ae-portrait img{width:100%;height:100%;object-fit:cover;display:block}
.ae-page .ae-table-student{display:flex;gap:8px;align-items:center;min-width:155px}
.ae-page .ae-table-card{max-width:none;border-radius:12px}
.ae-page .ae-table-scroll{max-height:none;overflow:auto;overscroll-behavior-x:contain;-webkit-overflow-scrolling:touch}
.ae-page .ae-table-card tr{content-visibility:auto;contain-intrinsic-size:auto 57px}
.ae-page .ae-score-grid span{font-size:10.5px;font-weight:700}
.ae-page .ae-result-row{font-size:10.5px}
.ae-page .ae-compact-meta{display:none}
.ae-page .ae-score-head .ae-student-label span{font-size:10.5px;color:var(--ae-muted)}
@media(min-width:1120px){.ae-page .ae-list.ae-entry-list{grid-template-columns:repeat(4,minmax(0,1fr))}}
@media(min-width:760px){.ae-page .ae-list.ae-picker-list{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:759px){.ae-page{padding:2px 0 12px}.ae-page .ae-list.ae-picker-list{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.ae-page .ae-picker-list .student-row{padding:13px 10px;min-height:112px}.ae-page .ae-list.ae-entry-list{grid-template-columns:1fr}.ae-page .ae-score-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ae-page .ae-score-card{content-visibility:visible}}
@media(max-width:380px){.ae-page .ae-list.ae-picker-list{grid-template-columns:1fr}.ae-page .ae-score-grid{grid-template-columns:1fr}}
/* Excel is portaled outside .ae-page, so the styling must be global. */
.excel-export-overlay,
.excel-import-overlay {
  isolation: isolate;
}

.excel-export-close,
.excel-import-close,
.ae-sheet-backdrop .ae-sheet-head > button,
.ae-sheet-backdrop .ae-modal-close {
  position: relative !important;
  z-index: 20 !important;
  width: 42px !important;
  min-width: 42px !important;
  height: 42px !important;
  min-height: 42px !important;
  padding: 0 !important;
  display: grid !important;
  place-items: center !important;
  border: 1px solid rgba(15, 23, 42, .20) !important;
  border-radius: 999px !important;
  background: #ffffff !important;
  color: #111827 !important;
  opacity: 1 !important;
  visibility: visible !important;
  box-shadow: 0 5px 16px rgba(15, 23, 42, .16) !important;
  font-size: 20px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  cursor: pointer !important;
  pointer-events: auto !important;
}

.excel-export-close:hover,
.excel-import-close:hover,
.ae-sheet-backdrop .ae-sheet-head > button:hover,
.ae-sheet-backdrop .ae-modal-close:hover {
  border-color: color-mix(in srgb, var(--ae-primary, #2563eb) 42%, rgba(15, 23, 42, .20)) !important;
  background: color-mix(in srgb, var(--ae-primary, #2563eb) 8%, #ffffff) !important;
  color: #111827 !important;
}

@media (prefers-color-scheme: dark) {
  .ae-sheet-backdrop,
  .excel-export-overlay,
  .excel-import-overlay {
    background: rgba(2, 6, 23, .78) !important;
  }

  .excel-export-close,
  .excel-import-close,
  .ae-sheet-backdrop .ae-sheet-head > button,
  .ae-sheet-backdrop .ae-modal-close {
    border-color: rgba(255, 255, 255, .22) !important;
    background: #1f2937 !important;
    color: #ffffff !important;
    box-shadow: 0 5px 18px rgba(0, 0, 0, .36) !important;
  }
}


/* V4: dense, neutral score-entry workspace — preserve theme and fast scrolling. */
.ae-page { --ae-panel:color-mix(in srgb,var(--ae-card) 76%,var(--ae-bg) 24%); background:transparent; }
.ae-page .ae-score-card, .ae-page .ae-table-card,
.ae-page .ae-picker-list .student-row, .ae-page .ae-analysis {
  background:var(--ae-panel); border-color:color-mix(in srgb,var(--ae-border) 85%,var(--ae-muted) 15%);
  box-shadow:none; transform:none; transition:border-color .12s ease;
}
.ae-page .ae-picker-list .student-row { min-height:132px; }
.ae-page .ae-score-grid label { background:color-mix(in srgb,var(--ae-panel) 84%,var(--ae-bg) 16%); }
.ae-page .ae-table-scroll th { background:color-mix(in srgb,var(--ae-panel) 88%,var(--ae-bg) 12%); }
.ae-page .ae-table-scroll tbody tr:nth-child(even) { background:color-mix(in srgb,var(--ae-panel) 79%,var(--ae-bg) 21%); }
.ae-page .ae-table-scroll tbody tr:nth-child(odd) { background:var(--ae-panel); }
.ae-page .ae-table-scroll tbody tr { content-visibility:visible; }
.ae-page .ae-table-scroll td { background:transparent; }
.ae-page .ae-entry-topbar {display:flex;align-items:center;gap:7px;min-height:37px;margin:0 0 7px;min-width:0;white-space:nowrap;}
.ae-page .ae-entry-topbar button { flex:0 0 auto;min-height:30px;padding:5px 9px;border:1px solid var(--ae-border);border-radius:8px;background:var(--ae-panel);color:var(--ae-text);font-size:11px;font-weight:700;line-height:1.15;}
.ae-page .ae-entry-back {max-width:130px;}
.ae-page .ae-entry-location { flex:1 1 0;min-width:0;overflow:hidden;text-overflow:ellipsis;font-size:12px;font-weight:650;color:var(--ae-text); }
.ae-page .ae-entry-count { flex:0 0 auto;color:var(--ae-muted);font-size:11px;font-variant-numeric:tabular-nums; }
.ae-page .ae-entry-topbar .ae-entry-save {background:var(--ae-primary);color:#fff;border-color:transparent;}
.ae-page .ae-entry-topbar button:disabled {opacity:.55;}
.ae-filter-search {display:grid;gap:5px;margin-bottom:12px;font-size:12px;font-weight:700;color:var(--ae-muted);}
.ae-filter-search input {min-height:40px;border:1px solid var(--ae-border);border-radius:10px;padding:0 11px;background:var(--ae-card);color:var(--ae-text);}
@media(max-width:759px){
 .ae-page .ae-entry-topbar{gap:4px;}
 .ae-page .ae-entry-back{padding:5px 7px;max-width:35px;}
 .ae-page .ae-entry-back span{display:none;}
 .ae-page .ae-entry-location{font-size:11px;}
 .ae-page .ae-entry-count{font-size:10px;}
 .ae-page .ae-entry-topbar button{padding:5px 7px;font-size:10px;}
 .ae-page .ae-picker-list .student-row{min-height:120px;}
}
@media(min-width:1120px){.ae-page .ae-list.ae-entry-list{grid-template-columns:repeat(4,minmax(0,1fr));}}
@media(prefers-reduced-motion:reduce){.ae-page *, .ae-page *::before,.ae-page *::after{scroll-behavior:auto!important;animation-duration:0.01ms!important;transition-duration:0.01ms!important;}}

/* V25: filter-driven subject navigation; the exact ClassSubject id is offered
   alongside class/subject/term selectors to avoid ambiguous term records. */
.ae-filter-exact-subject { grid-column: 1 / -1; }
.ae-filter-empty-action { display:flex;justify-content:center;margin:10px auto; }
.ae-filter-empty-action button { padding:9px 16px;border-radius:10px;border:1px solid var(--ae-border);background:var(--ae-card);color:var(--ae-text);font-weight:750; }

/* V6 — quiet neutral records presentation matching Students/Teachers/Classes V5 */

.ae-page {
  --ae-bg:var(--bg,var(--background,#f2f4f7));
  --ae-card:var(--card-bg,var(--surface,#fff));
  --ae-panel:color-mix(in srgb,var(--ae-card) 91%,var(--ae-text,#182235) 9%);
  --ae-border:color-mix(in srgb,var(--border,#d4dae3) 85%,var(--ae-text,#182235) 15%);
  background:var(--ae-bg); padding:5px; min-height:0;
}
.ae-page .ae-score-card,.ae-page .ae-table-card,.ae-page .ae-analysis,
.ae-page .ae-picker-list .student-row,.ae-page .ae-list:not(.ae-picker-list) .student-row {
  background:color-mix(in srgb,var(--ae-card) 93%,var(--ae-text) 7%);
  border:1px solid var(--ae-border); box-shadow:none; border-radius:13px;
}
.ae-page .ae-picker-list .student-row {min-height:130px;}
.ae-page .ae-table-card {padding:4px; margin-top:2px;}
.ae-page .ae-table-scroll {border-radius:10px;}
.ae-page .ae-table-scroll table {background:color-mix(in srgb,var(--ae-card) 95%,var(--ae-text) 5%);}
.ae-page .ae-table-scroll th {position:sticky;top:0;z-index:2;background:color-mix(in srgb,var(--ae-card) 85%,var(--ae-text) 15%);}
.ae-page .ae-table-scroll tbody tr:nth-child(even) {background:color-mix(in srgb,var(--ae-card) 89%,var(--ae-text) 11%);}
.ae-page .ae-table-scroll tbody tr:nth-child(odd) {background:color-mix(in srgb,var(--ae-card) 95%,var(--ae-text) 5%);}
.ae-page .ae-table-scroll td {background:transparent;}
.ae-page .ae-score-grid label {background:color-mix(in srgb,var(--ae-card) 89%,var(--ae-text) 11%);border-radius:9px;}
.ae-page .ae-portrait {box-shadow:none;border-radius:12px;}
.ae-page .ae-score-card {box-shadow:none;}
.ae-page .ae-entry-topbar {margin-bottom:5px;}
.ae-page .ae-entry-topbar button {background:var(--ae-panel);}
.ae-page .ae-entry-topbar .ae-entry-save {background:var(--ae-primary);color:#fff;}
.ae-page .ae-analysis {box-shadow:none;}
@media(min-width:1024px){.ae-page .ae-list.ae-entry-list {grid-template-columns:repeat(4,minmax(0,1fr));}}
@media(max-width:639px){.ae-page {padding:3px;}}
@media(prefers-reduced-motion:reduce){.ae-page .student-row,.ae-page .ae-score-card {transition:none;}}

/* V23 FINAL — Mobile: one STUDENT card per row, with TWO assessment
   item cells side by side INSIDE the card. No squeezed student cards. */
@media (max-width: 759px) {
  .ae-page .ae-list.ae-entry-list {
    display: grid;
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 8px;
    width: 100%;
    max-width: none;
    align-items: stretch;
  }

  .ae-page .ae-entry-list > .ae-score-card {
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 10px;
    border-radius: 12px;
    content-visibility: visible;
  }

  .ae-page .ae-entry-list .ae-score-head {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    min-width: 0;
    margin-bottom: 8px;
  }

  .ae-page .ae-entry-list .ae-portrait {
    width: 36px;
    height: 36px;
    flex: 0 0 36px;
  }

  .ae-page .ae-entry-list .ae-student-label {
    flex: 1 1 0;
    min-width: 0;
  }
  .ae-page .ae-entry-list .ae-student-label strong {
    font-size: 12px;
    line-height: 1.3;
    overflow-wrap: anywhere;
  }
  .ae-page .ae-entry-list .ae-student-label span {
    font-size: 10px;
    overflow-wrap: anywhere;
  }
  .ae-page .ae-entry-list .ae-score-head i {
    flex: 0 0 auto;
    margin-left: auto;
    font-size: 10px;
  }

  /* This is the requested 2-COLUMN arrangement: assessment ITEMS. */
  .ae-page .ae-entry-list .ae-score-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 7px;
    width: 100%;
    min-width: 0;
  }

  .ae-page .ae-entry-list .ae-score-grid label {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 3px 4px;
    align-content: start;
    min-width: 0;
    padding: 7px;
    border-radius: 9px;
  }

  .ae-page .ae-entry-list .ae-score-grid label > span {
    min-width: 0;
    font-size: 10.5px;
    line-height: 1.22;
    font-weight: 700;
    overflow-wrap: anywhere;
  }
  .ae-page .ae-entry-list .ae-score-grid label > small {
    align-self: start;
    justify-self: end;
    font-size: 9.5px;
    white-space: nowrap;
  }
  .ae-page .ae-entry-list .ae-score-grid .ae-score-input {
    grid-column: 1 / -1;
    width: 100%;
    min-width: 0;
    min-height: 38px;
    height: 38px;
    padding: 0 9px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 750;
    font-variant-numeric: tabular-nums;
  }

  .ae-page .ae-entry-list .ae-result-row {
    margin-top: 8px;
    padding-top: 7px;
    font-size: 10.5px;
    line-height: 1.3;
  }
}

/* Preserve two assessment-item columns even on narrow Android phones.
   The separate class/subject picker grids are not affected. */
@media (max-width: 380px) {
  .ae-page .ae-list.ae-entry-list {
    grid-template-columns: minmax(0, 1fr) !important;
  }
  .ae-page .ae-entry-list .ae-score-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 6px;
  }
  .ae-page .ae-entry-list .ae-score-grid label {
    padding: 5px;
    gap: 3px;
  }
  .ae-page .ae-entry-list .ae-score-grid label > span { font-size: 10px; }
  .ae-page .ae-entry-list .ae-score-grid label > small { font-size: 9px; }
}


/* Assigned teacher identity: visible on class-subject cards, in both themes. */
.ae-page .ae-picker-list .ae-subject-teacher-name {
  display:block; color:var(--ae-text); font-weight:700;
  font-size:11.5px; line-height:1.45; white-space:normal;
  overflow-wrap:anywhere;
}
.ae-page .ae-picker-list .ae-subject-period-name {
  display:block; color:var(--ae-muted); font-size:10.5px; line-height:1.3;
}
`;var eb=t(21287),eh=t(6439),ex=t(58365),eg=t(44253),ef=t(73837),ev=t(5779),ey=t(15982);let ew=eg.A;function ek(e){return e?.reportType==="student_report"||!e?.reportType}let ej="student-report-print-zone",eI=String(ex.$S.STUDENTS||"students"),eS=String(ex.$S.SCHOOLS||"schools"),eN=String(ex.$S.BRANCHES||"branches"),eC=String(ex.$S.SCHOOL_BRANCH_SETTINGS||ex.$S.SCHOOL_BRANCHES_SETTINGS||"schoolBranchSettings"),ez=String(ex.Vq.PHOTO||"photo"),eM=String(ex.Vq.LOGO||"logo");function eA(e,a,t){let r;return!e||t&&e&&Object.prototype.hasOwnProperty.call(e,t)&&!eP(e[t])?"":!(r=String(e[a]||""))||r.startsWith("blob:")||r.startsWith("data:image/")?"":r}function eP(e){if(null==e)return"";let a=String(e).trim();return a&&"0"!==a&&"undefined"!==a&&"null"!==a?a:""}String(ex.Vq.BANNER||"bannerImage");function eE(e,a){let t=eP(a);return t?e.find(e=>eP(e.id)===t)?.name||"Not found":"Not selected"}function eT(){let e=(0,d.f)(["schools","branches","schoolBranchSettings","academicStructures","academicPeriods","students","parents","teachers","classes","subjects","classSubjects","classTeachers","studentEnrollments","studentParents","assessmentApplicabilities","assessmentStructures","assessmentStructureItems","assessmentEntries","gradingStructures","gradeRules","attendance","studentAttendanceSummaries","computedResults","reportCards","reportCardItems","reportCardTemplates","reportCardTemplateSettings","reportCardTemplateAssignments","mediaAssets","mediaBlobs"]),a=(0,y.useRouter)(),{settings:t,loading:i}=(0,k.t)(),{activeSchool:o,activeBranch:c}=(0,j.c)(),p=(0,n.P)(),m=h(),{accountId:u,schoolId:b,branchId:x,authenticated:g,restoring:f,branchLoading:v}=p,w=t?.primaryColor||"var(--primary-color, #2563eb)",I=eP(t?.currentAcademicStructureId)||void 0,N=eP(t?.currentAcademicPeriodId)||void 0,{loading:C,setLoading:z}=(0,S.J)(),M=(0,s.useRef)(""),[A,P]=(0,s.useState)(""),[E,R]=(0,s.useState)(""),[B,$]=(0,s.useState)(!1),D=m.teacherId,O=[u,b,x,D].join(":"),F=[O,String(e)].join("::"),[L,U]=(0,s.useState)("student-report"),[_,W]=(0,s.useState)(""),[K,V]=(0,s.useState)(!1),[G,q]=(0,s.useState)(!1),[J,H]=(0,s.useState)({branchId:x||void 0,academicStructureId:I,academicPeriodId:N,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"}),[Y,Z]=(0,s.useState)([]),[X,Q]=(0,s.useState)([]),[ee,ea]=(0,s.useState)([]),[et,er]=(0,s.useState)([]),[es,ei]=(0,s.useState)([]),[eo,en]=(0,s.useState)([]),[ed,el]=(0,s.useState)([]),[ec,ep]=(0,s.useState)([]),[em,eu]=(0,s.useState)([]),[eg,eT]=(0,s.useState)([]),[eF,eL]=(0,s.useState)([]),[eU,e_]=(0,s.useState)([]),[eW,eK]=(0,s.useState)([]),[eV,eG]=(0,s.useState)([]),[eq,eJ]=(0,s.useState)([]),[eH,eY]=(0,s.useState)([]),[eZ,eX]=(0,s.useState)([]),[eQ,e0]=(0,s.useState)([]),[e1,e2]=(0,s.useState)([]),[e4,e8]=(0,s.useState)([]),[e5,e3]=(0,s.useState)([]),[e6,e9]=(0,s.useState)([]),[e7,ae]=(0,s.useState)([]),[aa,at]=(0,s.useState)([]),[ar,as]=(0,s.useState)([]),[ai,ao]=(0,s.useState)([]),[an,ad]=(0,s.useState)([]),[al,ac]=(0,s.useState)([]),[ap,am]=(0,s.useState)([]);(0,s.useEffect)(()=>{if(!f&&!v&&(!g||!u))return void a.replace("/login")},[f,v,g,u,b,x,a]),(0,s.useEffect)(()=>()=>{ap.forEach(ex.hZ)},[ap]);let au=()=>{ap.forEach(ex.hZ),am([]),Z([]),Q([]),ea([]),er([]),ei([]),en([]),el([]),ep([]),eu([]),eT([]),eL([]),e_([]),eK([]),eG([]),eJ([]),eY([]),eX([]),e0([]),e2([]),e8([]),e3([]),e9([]),ae([]),at([]),as([]),ao([]),ad([]),ac([])},ab=async({ownerTable:e,ownerId:a,fieldKey:t,fallbackMediaId:r,nextUrls:s})=>{let i=eP(a);if(i){let a=await (0,ex.cg)({accountId:u||void 0,ownerTable:e,ownerId:i,fieldKey:t});if(a?.id&&!a.isDeleted&&!1!==a.active){let e=await (0,ex.fW)(String(a.id));if(e)return s.push(e),e}}let o=eP(r);if(!o)return"";let n=await l.db.mediaAssets?.get?.(o);if(!(n&&!n.isDeleted&&!1!==n.active&&(!u||n.accountId===u)&&n.ownerTable===e&&n.fieldKey===t&&(!i||String(n.ownerId||"")===String(i))))return"";let d=await (0,ex.fW)(o);return d&&s.push(d),d||""},ah=async()=>{if(!g||!u||!b||!x||!m.ready||!m.permitted||!D){au(),P(""),R(F),z(!1);return}try{z(!0);let[e,a,t,r,s,i,n,d,p,m,h,g,f,v,y,w,k,j,I,S,N,C,M,A,E,T,R,B]=await Promise.all([l.db.schools.toArray(),l.db.branches.toArray(),l.db.schoolBranchSettings.toArray(),l.db.academicStructures.toArray(),l.db.academicPeriods.toArray(),l.db.students.toArray(),l.db.parents.toArray(),l.db.teachers.toArray(),l.db.classes.toArray(),l.db.subjects.toArray(),l.db.classSubjects.toArray(),l.db.classTeachers.toArray(),l.db.studentEnrollments.toArray(),l.db.studentParents.toArray(),l.db.assessmentApplicabilities.toArray(),l.db.assessmentStructures.toArray(),l.db.assessmentStructureItems.toArray(),l.db.assessmentEntries.toArray(),l.db.gradingStructures.toArray(),l.db.gradeRules.toArray(),l.db.attendance.toArray(),l.db.studentAttendanceSummaries?.toArray?.()||[],l.db.computedResults.toArray(),l.db.reportCards.toArray(),l.db.reportCardItems.toArray(),l.db.reportCardTemplates?.toArray?.()||[],l.db.reportCardTemplateSettings?.toArray?.()||[],l.db.reportCardTemplateAssignments?.toArray?.()||[]]),F=e=>eP(e.accountId)===eP(u)&&eP(e.schoolId)===b&&eP(e.branchId)===x&&!e.isDeleted,L=e.find(e=>eP(e.accountId)===eP(u)&&eP(e.id)===b&&!e.isDeleted)||(eP(o?.accountId)===eP(u)&&eP(o?.id)===b?o:void 0),U=a.find(e=>eP(e.accountId)===eP(u)&&eP(e.schoolId)===b&&eP(e.id)===x&&!e.isDeleted)||(eP(c?.accountId)===eP(u)&&eP(c?.schoolId)===b&&eP(c?.id)===x?c:void 0),_=s.filter(F),W=A.filter(F),K=t.filter(F);K[0];let V=g.filter(e=>F(e)&&!1!==e.active),G=h.filter(e=>F(e)&&!1!==e.active),q=new Set([...V.filter(e=>eP(e.teacherId)===D).map(e=>eP(e.classId)),...G.filter(e=>eP(e.teacherId)===D).map(e=>eP(e.classId))].filter(Boolean)),J=f.filter(e=>F(e)&&!e.isDeleted&&q.has(eP(e.classId))),H=new Set(J.filter(e=>"active"===e.status).map(e=>eP(e.studentId)).filter(Boolean)),Y=G.filter(e=>q.has(eP(e.classId))),X=new Set(Y.map(e=>eP(e.id)).filter(Boolean)),ee=W.filter(e=>!e.isDeleted&&q.has(eP(e.classId))),et=T.filter(e=>!e.isDeleted&&!1!==e.active&&!!ek(e)&&(!e.accountId||e.accountId===u)&&(!e.schoolId||String(e.schoolId??"")===String(b??""))&&(!e.branchId||String(e.branchId??"")===String(x??""))).sort((e,a)=>e.isDefault&&!a.isDefault?-1:!e.isDefault&&a.isDefault?1:String(e.name||"").localeCompare(String(a.name||""))),es=R.filter(e=>!e.isDeleted&&!1!==e.active&&!!ek(e)&&(!e.accountId||e.accountId===u)&&(!e.schoolId||String(e.schoolId??"")===String(b??""))&&(!e.branchId||String(e.branchId??"")===String(x??""))),eo=B.filter(e=>!e.isDeleted&&!1!==e.active&&!!ek(e)&&(!e.accountId||e.accountId===u)&&(!e.schoolId||String(e.schoolId??"")===String(b??""))&&(!e.branchId||String(e.branchId??"")===String(x??""))),ed=[],ec=L?{...L,logo:await ab({ownerTable:eS,ownerId:L.id,fieldKey:eM,fallbackMediaId:L.logoMediaId,nextUrls:ed})||eA(L,"logo","logoMediaId")}:void 0,em=U?{...U,logo:await ab({ownerTable:eN,ownerId:U.id,fieldKey:eM,fallbackMediaId:U.logoMediaId,nextUrls:ed})||eA(U,"logo","logoMediaId")}:void 0,eb=await Promise.all(K.map(async e=>({...e,logo:await ab({ownerTable:eC,ownerId:e.id,fieldKey:eM,fallbackMediaId:e.logoMediaId,nextUrls:ed})||eA(e,"logo","logoMediaId"),reportCardBackgroundImage:await ab({ownerTable:eC,ownerId:e.id,fieldKey:"reportCardBackgroundImage",fallbackMediaId:e.reportCardBackgroundImageMediaId,nextUrls:ed})||eA(e,"reportCardBackgroundImage","reportCardBackgroundImageMediaId"),reportCardWatermark:await ab({ownerTable:eC,ownerId:e.id,fieldKey:"reportCardWatermark",fallbackMediaId:e.reportCardWatermarkMediaId,nextUrls:ed})||eA(e,"reportCardWatermark","reportCardWatermarkMediaId"),reportCardSignatureImage:await ab({ownerTable:eC,ownerId:e.id,fieldKey:"reportCardSignatureImage",fallbackMediaId:e.reportCardSignatureImageMediaId,nextUrls:ed})||eA(e,"reportCardSignatureImage","reportCardSignatureImageMediaId")}))),eh=await Promise.all(i.filter(e=>F(e)&&!e.isDeleted&&H.has(eP(e.id))&&"withdrawn"!==e.status).map(async e=>({...e,photo:await ab({ownerTable:eI,ownerId:e.id,fieldKey:ez,fallbackMediaId:e.photoMediaId,nextUrls:ed})||eA(e,"photo","photoMediaId")}))),eg=new Set(_.map(e=>eP(e.id)).filter(Boolean)),ef=new Set(ee.map(e=>eP(e.id)).filter(Boolean));ap.forEach(e=>{ed.includes(e)||(0,ex.hZ)(e)}),am(ed),Z(ec?[ec]:[]),Q(em?[em]:[]),ea(eb),er(r.filter(F)),ei(_),en(eh);let ev=v.filter(e=>F(e)&&H.has(eP(e.studentId))),ey=new Set(ev.map(e=>eP(e.parentId)).filter(Boolean));ep(n.filter(e=>F(e)&&ey.has(eP(e.id)))),el(d.filter(e=>F(e)&&!1!==e.active)),eT(p.filter(e=>F(e)&&!1!==e.active&&q.has(eP(e.id)))),eL(m.filter(e=>F(e)&&!1!==e.active)),e_(Y),eG(ev),eK(J),eu(V.filter(e=>q.has(eP(e.classId)))),eJ(y.filter(e=>F(e)&&!1!==e.active&&(!e.classId||q.has(eP(e.classId)))&&(!e.classSubjectId||X.has(eP(e.classSubjectId))))),eY(w.filter(e=>F(e)&&!1!==e.active)),eX(k.filter(e=>F(e)&&!1!==e.active)),e0(j.filter(e=>F(e)&&!e.isDeleted&&(!e.classSubjectId||X.has(eP(e.classSubjectId)))&&(!e.classId||q.has(eP(e.classId)))&&(!e.studentId||H.has(eP(e.studentId))))),e2(I.filter(e=>F(e)&&!1!==e.active)),e8(S.filter(e=>F(e)&&!1!==e.active)),e3(N.filter(e=>F(e)&&!e.isDeleted&&(!e.classId||q.has(eP(e.classId)))&&(!e.studentId||H.has(eP(e.studentId))))),e9(C.filter(e=>F(e)&&(!e.classId||q.has(eP(e.classId)))&&(!e.studentId||H.has(eP(e.studentId))))),ae(M.filter(e=>F(e)&&!e.isDeleted&&(!e.classSubjectId||X.has(eP(e.classSubjectId)))&&(!e.classId||q.has(eP(e.classId)))&&(!e.studentId||H.has(eP(e.studentId))))),at(ee),as(E.filter(e=>!!F(e)&&(!e.reportCardId||!!ef.has(eP(e.reportCardId)))&&(!e.academicPeriodId||!!eg.has(eP(e.academicPeriodId))))),ao(et),ad(es),ac(eo),P(O),$(!1)}catch(e){console.error("Failed to load report data:",e),au(),P(""),$(!0)}finally{R(F),z(!1)}};(0,s.useEffect)(()=>{ah()},[g,u,b,x,e,m.ready,m.permitted,D]);let ax=(0,s.useMemo)(()=>{let e=new Map,a=new Set(et.map(e=>eP(e.id))),t=new Set(eg.map(e=>eP(e.id))),r=new Map(es.map(e=>[eP(e.id),e])),s=(s,i,o)=>{let n=eP(s),d=eP(i),l=eP(o);if(!n||!d||!l||!a.has(n)||!t.has(l))return;let c=r.get(d);!c||c.academicStructureId&&eP(c.academicStructureId)!==n||e.set(`${n}:${d}:${l}`,{academicStructureId:n,academicPeriodId:d,classId:l})};return eW.forEach(e=>{e.isDeleted||"active"!==e.status||s(e.academicStructureId,e.academicPeriodId,e.classId)}),eU.forEach(e=>{e.isDeleted||!1===e.active||s(e.academicStructureId,e.academicPeriodId,e.classId)}),[...e.values()]},[et,es,eg,eW,eU]);(0,s.useEffect)(()=>{H(e=>e.branchId===(x||void 0)?e:{...e,branchId:x||void 0,academicStructureId:void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})},[x]),(0,s.useEffect)(()=>{if(!u||!b||!x||!m.permitted||A!==O||!ax.length||M.current===O)return;M.current=O;let e=[...ax].sort((e,a)=>Number(a.academicStructureId===I&&a.academicPeriodId===N)-Number(e.academicStructureId===I&&e.academicPeriodId===N)||Number(a.academicStructureId===I)-Number(e.academicStructureId===I)||Number(a.academicPeriodId===N)-Number(e.academicPeriodId===N))[0];e&&H(a=>({...a,branchId:x||void 0,academicStructureId:e.academicStructureId,academicPeriodId:e.academicPeriodId,classId:e.classId,classSubjectId:void 0,studentId:void 0}))},[O,u,b,x,m.permitted,ax,A,I,N]);let ag=E===F&&!C,af=!!(m.permitted&&m.ready&&A===O&&J.academicStructureId&&J.academicPeriodId&&J.classId&&et.some(e=>eP(e.id)===eP(J.academicStructureId))&&eg.some(e=>eP(e.id)===eP(J.classId))&&m.allowedClassIds.has(eP(J.classId))&&es.some(e=>eP(e.id)===eP(J.academicPeriodId)&&(!e.academicStructureId||eP(e.academicStructureId)===eP(J.academicStructureId)))),av=(0,s.useMemo)(()=>es.filter(e=>!J.academicStructureId||!e.academicStructureId||eP(e.academicStructureId)===eP(J.academicStructureId)),[es,J.academicStructureId]),ay=(0,s.useMemo)(()=>c&&eP(c.id)===x?[c]:X,[c,x,X]),aw=(0,s.useMemo)(()=>{let e=new Set;return(eW.forEach(a=>{"active"!==a.status||J.academicStructureId&&a.academicStructureId!==J.academicStructureId||J.academicPeriodId&&a.academicPeriodId!==J.academicPeriodId||e.add(eP(a.classId))}),eU.forEach(a=>{!1===a.active||J.academicStructureId&&a.academicStructureId!==J.academicStructureId||J.academicPeriodId&&a.academicPeriodId&&a.academicPeriodId!==J.academicPeriodId||e.add(eP(a.classId))}),J.academicStructureId||J.academicPeriodId)?eg.filter(a=>!!eP(a.id)&&e.has(eP(a.id))):eg},[eg,eW,eU,J.academicStructureId,J.academicPeriodId]);(0,s.useEffect)(()=>{J.classId&&!eg.some(e=>eP(e.id)===eP(J.classId))&&H(e=>({...e,classId:void 0,classSubjectId:void 0,studentId:void 0}))},[eg,J.classId]);let ak=(0,s.useMemo)(()=>eU.filter(e=>(!J.classId||e.classId===J.classId)&&(!J.academicStructureId||e.academicStructureId===J.academicStructureId)&&(!J.academicPeriodId||!e.academicPeriodId||e.academicPeriodId===J.academicPeriodId)),[eU,J.classId,J.academicStructureId,J.academicPeriodId]),aj=(0,s.useMemo)(()=>{if(!J.classId&&!J.academicPeriodId)return eo;let e=new Set(eW.filter(e=>"active"===e.status&&(!J.classId||e.classId===J.classId)&&(!J.academicStructureId||e.academicStructureId===J.academicStructureId)&&(!J.academicPeriodId||e.academicPeriodId===J.academicPeriodId)).map(e=>eP(e.studentId)).filter(Boolean));return eo.filter(a=>!!eP(a.id)&&e.has(eP(a.id)))},[eo,eW,J.classId,J.academicStructureId,J.academicPeriodId]),aI=(0,s.useMemo)(()=>({schools:Y,branches:ay,schoolBranchSettings:ee,academicStructures:et,academicPeriods:es,students:eo,parents:ec,studentParents:eV,teachers:ed,classes:eg,subjects:eF,classSubjects:eU,studentEnrollments:eW,classTeachers:em,assessmentApplicabilities:eq,assessmentStructures:eH,assessmentStructureItems:eZ,assessmentEntries:eQ,gradingStructures:e1,gradeRules:e4,attendance:e5,studentAttendanceSummaries:e6,computedResults:e7,reportCards:aa,reportCardItems:ar}),[Y,ay,ee,et,es,eo,ec,eV,ed,eg,eF,eU,eW,em,eq,eH,eZ,eQ,e1,e4,e5,e6,e7,aa,ar]),aS=(0,s.useMemo)(()=>af?(0,ev.EI)(aI,J):{classReports:[],studentReport:void 0,warnings:[]},[aI,J,af]),aN=!!(et.length&&es.length&&eg.length&&eo.length),aC=!!(ag&&!B&&A===O&&ax.length&&!af&&M.current!==O),az="class-reports"===L?aS.classReports.length>0:!!aS.studentReport,aM=(0,s.useMemo)(()=>X.find(e=>eP(e.id)===x)||ay.find(e=>eP(e.id)===x)||c||X[0]||ay[0],[c,x,X,ay]);o?.name||Y[0]?.name,aM?.name||c?.name||X[0]?.name,eE(eg,J.classId),eE(es,J.academicPeriodId),eE(et,J.academicStructureId);let aA=_.trim().toLowerCase(),aP=(0,s.useMemo)(()=>aA?aj.filter(e=>`${e.fullName||e.name||""} ${e.admissionNumber||""} ${e.gender||""}`.toLowerCase().includes(aA)):aj,[aj,aA]),aE=(0,s.useMemo)(()=>aA?aw.filter(e=>`${e.name||""} ${e.code||""}`.toLowerCase().includes(aA)):aw,[aw,aA]);(0,s.useMemo)(()=>[J.academicStructureId,J.academicPeriodId,J.classId,J.classSubjectId,J.studentId,J.sortMode&&"position"!==J.sortMode?J.sortMode:void 0,"student-report"!==L?L:void 0].filter(Boolean).length,[J.academicStructureId,J.academicPeriodId,J.classId,J.classSubjectId,J.studentId,J.sortMode,L]),eE(eo,J.studentId),eE(ak.map(e=>{var a;let t;return{id:e.id,name:(a=e,t=eF.find(e=>e.id===a.subjectId),a.name||t?.name||`Subject ${a.subjectId||""}`)}}),J.classSubjectId),"class-reports"===L?aS.classReports.length:aS.studentReport,aS.warnings.length;let aT=af&&aN&&("class-reports"===L?aS.classReports.length>0:!!aS.studentReport),aR=()=>{aT&&(0,ef.f)({targetId:ej,mode:"class-reports"===L?"whole-class-reports":"single-student",orientation:"portrait",pageSize:"A4"})},aB=(0,s.useMemo)(()=>{let e=al.filter(e=>!1!==e.active&&ek(e));return e.find(e=>!0===e.isDefault&&(!e.scopeType||"branch"===e.scopeType)&&(!e.scopeId||String(e.scopeId??"")===String(x??"")))||e.find(e=>(!e.scopeType||"branch"===e.scopeType)&&(!e.scopeId||String(e.scopeId??"")===String(x??"")))||e.find(e=>!0===e.isDefault)||e[0]||null},[al,x]),a$=(0,s.useMemo)(()=>{let e=eP(aB?.templateId);return ai.find(a=>e&&eP(a.id)===e)||ai.find(e=>e.isDefault)||ai.find(e=>"classic_formal"===String(e.code||""))||ai[0]||(0,ey.ed)(null)},[aB,ai]),aD=(0,s.useMemo)(()=>{let e=eP(aB?.templateSettingsId),a=eP(a$?.id);return an.find(a=>e&&eP(a.id)===e)||an.find(e=>a&&eP(e.templateId)===a)||an.find(e=>!1!==e.active)||null},[aB,a$,an]),aO=(0,s.useMemo)(()=>(0,ey.tH)({...ey.gv,...aD||{}},a$||null,aB||null),[a$,aB,aD]);function aF(e){let a=eP(e?.report?.studentId||e?.studentId);if(a)return eo.find(e=>eP(e.id)===a)}function aL(e,a){let t;if(!e)return e;let r=a?.name||a?.branchName||a?.campusName||e.branchName||e.branchLabel||e.branch?.name||"",s=aF(e),i=(t=aF(e),t?.resolvedStudentPhotoUrl||t?.photo||e?.report?.resolvedStudentPhotoUrl||e?.report?.studentPhoto||"");return{...e,student:s||e.student,branch:a,branchId:a?.id||e.branchId,branchName:r,branchLabel:r,template:a$,templateSettings:aO,reportCardTemplate:a$,reportCardTemplateSettings:aO,reportCardTemplateAssignment:aB,header:{...e.header,branch:a,branchId:a?.id||e.header?.branchId,branchName:r,branchLabel:r,template:a$,templateSettings:aO,reportCardTemplate:a$,reportCardTemplateSettings:aO,reportCardTemplateAssignment:aB,branding:{...e.header?.branding||{},primaryColor:(e.header?.branding||{}).primaryColor||"var(--ba-primary, var(--primary-color, #2563eb))",branchName:(e.header?.branding||{}).branchName||r,logo:(e.header?.branding||{}).logo||e.header?.schoolBranchSetting?.logo||e.header?.branch?.logo||e.header?.school?.logo,reportCardBackgroundImage:(e.header?.branding||{}).reportCardBackgroundImage||e.header?.schoolBranchSetting?.reportCardBackgroundImage,reportCardWatermark:(e.header?.branding||{}).reportCardWatermark||e.header?.schoolBranchSetting?.reportCardWatermark,reportCardSignatureImage:(e.header?.branding||{}).reportCardSignatureImage||e.header?.schoolBranchSetting?.reportCardSignatureImage}},report:{...e.report,studentPhoto:i||e.report?.studentPhoto,resolvedStudentPhotoUrl:i||e.report?.resolvedStudentPhotoUrl,branch:a,branchId:a?.id||e.report?.branchId,branchName:r,branchLabel:r,template:a$,templateSettings:aO,reportCardTemplate:a$,reportCardTemplateSettings:aO,reportCardTemplateAssignment:aB}}}return((0,T.TV)("reportsWorkspace",{search:W,filter:()=>V(!0),print:()=>aR(),more:()=>q(!0)}),f||v||i||!m.ready||!ag||aC)?(0,r.jsx)(eB,{primary:w,title:"Opening Teacher Report Cards...",text:"Checking branch students, classes, reports, results, attendance and report templates."}):g&&u?m.permitted?B?(0,r.jsx)(eR,{primary:w,icon:"⚠",title:"Unable to load report cards",text:"The local report data could not be loaded. Check the device's data and synchronization, then reopen Reports."}):b&&x?(0,r.jsxs)("main",{className:"ba-page student-reports-page",style:{"--ba-primary":w,"--primary-color":w},children:[(0,r.jsx)("style",{children:eO}),eg.length?!af&&(0,r.jsxs)("section",{className:"ba-v6-scope-picker teacher-report-picker report-no-print","aria-label":"Select reporting context",children:[(0,r.jsxs)("div",{className:"teacher-report-picker-intro",children:[(0,r.jsx)("strong",{children:"Select a reporting class and term"}),(0,r.jsx)("span",{children:"Choose an academic structure, term and an assigned class to open its report cards."})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Academic structure"}),(0,r.jsxs)("select",{value:J.academicStructureId||"",onChange:e=>H(a=>({...a,academicStructureId:e.target.value||void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"Structure"}),et.map(e=>(0,r.jsx)("option",{value:String(e.id),children:e.name},String(e.id)))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Academic period"}),(0,r.jsxs)("select",{value:J.academicPeriodId||"",onChange:e=>H(a=>({...a,academicPeriodId:e.target.value||void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"Period"}),av.map(e=>(0,r.jsx)("option",{value:String(e.id),children:e.name},String(e.id)))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Class"}),(0,r.jsxs)("select",{value:J.classId||"",onChange:e=>H(a=>({...a,classId:e.target.value||void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"Class"}),aw.map(e=>(0,r.jsx)("option",{value:String(e.id),children:e.name},String(e.id)))]})]})]}):(0,r.jsx)(eR,{primary:w,icon:"\uD83D\uDCDA",title:"No assigned classes",text:"No Report Cards are available for your teacher assignments in this branch. Ask a school administrator to assign a class or subject.",inline:!0}),af&&(aN&&az?(0,r.jsx)("section",{className:"ba-print-card",children:(0,r.jsx)(eh.Ay,{printZoneId:ej,naturalWidth:794,children:af&&aN?"class-reports"===L?aS.classReports.length?aS.classReports.map((e,a)=>(0,r.jsx)(ew,{dataset:aL(e,aM),template:a$,settings:aO,compact:!0,mobilePreview:!1,pageBreakAfter:a<aS.classReports.length-1},e.report?.studentId||a)):null:aS.studentReport?(0,r.jsx)(ew,{dataset:aL(aS.studentReport,aM),template:a$,settings:aO,mobilePreview:!1,pageBreakAfter:!1}):null:null})}):(0,r.jsx)(eR,{primary:w,icon:"\uD83D\uDCC4",title:"No report cards for this selection",text:"This class and term have no report available yet. Use Filter to choose another assigned class or reporting period.",inline:!0})),K&&(0,r.jsx)(eb.A,{themeSourceClass:".student-reports-page",onEscape:()=>V(!1),children:(0,r.jsx)(e$,{mode:L,filters:J,academicStructures:et,academicPeriods:av,filteredClasses:aE,filteredClassSubjects:ak,filteredStudents:aP,setMode:U,setFilters:H,search:_,setSearch:W,onClose:()=>V(!1)})}),G&&(0,r.jsx)(eb.A,{themeSourceClass:".student-reports-page",onEscape:()=>q(!1),children:(0,r.jsx)(eD,{onRefresh:async()=>{q(!1),await ah()},onPrint:()=>{q(!1),aR()},onClose:()=>q(!1)})})]}):(0,r.jsxs)("main",{className:"ba-page",style:{"--ba-primary":w,"--primary-color":w},children:[(0,r.jsx)("style",{children:eO}),(0,r.jsxs)("section",{className:"ba-state",children:[(0,r.jsx)("h2",{children:"Branch workspace required"}),(0,r.jsx)("p",{children:"Teacher report cards are limited to your selected school branch. Choose your teacher workspace if the wrong branch is active."}),(0,r.jsx)("button",{type:"button",className:"ba-state-button",onClick:()=>a.push("/select-role"),children:"Go to Select Role"})]})]}):(0,r.jsx)(eB,{primary:w,title:"Teacher workspace required",text:"Open an assigned teacher membership to view report cards."}):(0,r.jsx)(eB,{primary:w,title:"Redirecting to login...",text:"You must sign in before opening student reports."})}function eR({primary:e,icon:a,title:t,text:s,inline:i=!1}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:eO}),(0,r.jsxs)("section",{className:`teacher-report-notice ${i?"is-inline":""}`,style:{"--ba-primary":e},role:"status",children:[(0,r.jsx)("div",{className:"teacher-report-notice-icon","aria-hidden":"true",children:a}),(0,r.jsx)("h2",{children:t}),(0,r.jsx)("p",{children:s})]})]})}function eB({primary:e,title:a,text:t}){return(0,r.jsxs)("main",{className:"ba-page",style:{"--ba-primary":e,"--primary-color":e},children:[(0,r.jsx)("style",{children:eO}),(0,r.jsxs)("section",{className:"ba-state",children:[(0,r.jsx)("div",{className:"ba-spinner"}),(0,r.jsx)("h2",{children:a}),(0,r.jsx)("p",{children:t})]})]})}function e$({mode:e,filters:a,academicStructures:t,academicPeriods:s,filteredClasses:i,filteredClassSubjects:o,filteredStudents:n,setMode:d,setFilters:l,search:c,setSearch:p,onClose:m}){return(0,r.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"ba-sheet",children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Filters"}),(0,r.jsx)("p",{children:"Select an assigned class and its academic period to generate report cards."})]}),(0,r.jsx)("button",{type:"button",onClick:m,"aria-label":"Close filters",children:"✕"})]}),(0,r.jsxs)("div",{className:"ba-form compact",children:[(0,r.jsxs)("label",{className:"ba-v4-find",children:[(0,r.jsx)("span",{children:"Search"}),(0,r.jsx)("input",{type:"search",value:c,onChange:e=>p(e.target.value),placeholder:"Find a student, subject or class"})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Report Mode"}),(0,r.jsxs)("select",{value:e,onChange:e=>d(e.target.value),children:[(0,r.jsx)("option",{value:"student-report",children:"Single Student Report"}),(0,r.jsx)("option",{value:"class-reports",children:"Class Batch Reports"})]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Academic Structure"}),(0,r.jsxs)("select",{value:a.academicStructureId||"",onChange:e=>l(a=>({...a,academicStructureId:eP(e.target.value)||void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"Select structure"}),t.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Academic Period"}),(0,r.jsxs)("select",{value:a.academicPeriodId||"",onChange:e=>l(a=>({...a,academicPeriodId:eP(e.target.value)||void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"Select period"}),s.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Class"}),(0,r.jsxs)("select",{value:a.classId||"",onChange:e=>l(a=>({...a,classId:eP(e.target.value)||void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"Select assigned class"}),i.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Class Subject"}),(0,r.jsxs)("select",{value:a.classSubjectId||"",onChange:e=>l(a=>({...a,classSubjectId:eP(e.target.value)||void 0})),children:[(0,r.jsx)("option",{value:"",children:"All subjects"}),o.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name||`Subject ${e.subjectId||""}`},e.id))]})]}),"student-report"===e&&(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Student"}),(0,r.jsxs)("select",{value:a.studentId||"",onChange:e=>l(a=>({...a,studentId:eP(e.target.value)||void 0})),children:[(0,r.jsx)("option",{value:"",children:"Select student"}),n.map(e=>(0,r.jsx)("option",{value:e.id,children:e.fullName||e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Sort Mode"}),(0,r.jsxs)("select",{value:a.sortMode||"position",onChange:e=>l(a=>({...a,sortMode:e.target.value})),children:[(0,r.jsx)("option",{value:"position",children:"Position"}),(0,r.jsx)("option",{value:"name",children:"Name"}),(0,r.jsx)("option",{value:"score",children:"Score"})]})]})]}),(0,r.jsxs)("div",{className:"ba-sheet-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>l(e=>({...e,academicStructureId:void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"})),children:"Clear"}),(0,r.jsx)("button",{type:"button",className:"primary",onClick:m,children:"Apply"})]})]})})}function eD({onRefresh:e,onPrint:a,onClose:t}){return(0,r.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"ba-sheet small",children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"More"}),(0,r.jsx)("p",{children:"Quick report actions only."})]}),(0,r.jsx)("button",{type:"button",onClick:t,"aria-label":"Close menu",children:"✕"})]}),(0,r.jsxs)("div",{className:"ba-menu-list",children:[(0,r.jsxs)("button",{type:"button",onClick:a,children:[(0,r.jsx)("span",{children:"⎙"}),(0,r.jsx)("b",{children:"Print report"}),(0,r.jsx)("small",{children:"Print the current preview output"})]}),(0,r.jsxs)("button",{type:"button",onClick:e,children:[(0,r.jsx)("span",{children:"↻"}),(0,r.jsx)("b",{children:"Refresh"}),(0,r.jsx)("small",{children:"Reload local branch report records"})]})]})]})})}let eO=`
/* Teacher Reports V32: stable, non-flashing empty/error presentation. */
.teacher-report-picker-intro {grid-column:1/-1; display:grid; gap:4px; padding:2px 2px 5px;}
.teacher-report-picker-intro strong {font-size:14px;font-weight:850;}
.teacher-report-picker-intro span {font-size:12px;line-height:1.5;color:var(--muted,#64748b);}
.teacher-report-picker {margin:10px 0;}
.teacher-report-notice { min-height:220px; width:min(560px,100%); margin:22px auto;
 display:grid; place-items:center; align-content:center; gap:11px; padding:28px 22px;
 border:1px solid var(--border,rgba(15,23,42,.12)); border-radius:22px;
 background:var(--card-bg,var(--surface,#fff)); color:var(--text,#172033);
 box-shadow:0 8px 24px rgba(15,23,42,.04); text-align:center; }
.teacher-report-notice.is-inline { width:min(680px,100%); }
.teacher-report-notice-icon { width:48px; height:48px; border-radius:16px;
 display:grid; place-items:center; font-size:22px;
 background:color-mix(in srgb,var(--ba-primary) 11%,var(--surface,#fff)); }
.teacher-report-notice h2 { margin:0; font-size:17px; line-height:1.3; font-weight:800; }
.teacher-report-notice p { margin:0; max-width:400px; font-size:13px; line-height:1.6;
 color:var(--muted,#64748b); }

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


/* Role-portal modal/sheet containment -------------------------------- */
@media (min-width:980px){
  .ba-sheet-backdrop,
  .ba-modal-backdrop{
    position:fixed;
    top:var(--eds-shell-top-offset,0px) !important;
    right:0 !important;
    bottom:0 !important;
    left:var(--portal-content-left,0px) !important;
    inset:auto 0 0 var(--portal-content-left,0px) !important;
    width:auto;
    height:auto;
    max-width:calc(100vw - var(--portal-content-left,0px));
    min-width:0;
    overflow-x:hidden;
  }

  .ba-sheet,
  .ba-modal{
    min-width:0;
    max-width:calc(100vw - var(--portal-content-left,0px) - 20px);
  }
}


/* V4 records workspace: neutral surface, efficient scroll, no duplicated toolbars. */
.ba-page.student-reports-page, .ba-page.report-remarks-page { min-height:0; padding:3px 4px 18px; background:transparent; overflow-x:clip; }
.ba-page.student-reports-page .ba-search-card, .ba-page.report-remarks-page .ba-search-card,
.ba-page.report-remarks-page .ba-summary-line { display:none; }
.ba-page.student-reports-page .ba-print-card,
.ba-page.report-remarks-page .ba-remark-card,
.ba-page.report-remarks-page .ba-student-row,
.ba-page.report-remarks-page .ba-list,
.ba-page.report-remarks-page .ba-sheet {
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 83%,var(--bg,#f3f5f8) 17%);
  border-color:var(--border,rgba(15,23,42,.13));
  box-shadow:none;
}
.ba-page.student-reports-page .ba-print-card { margin:0; padding:5px; border-radius:11px; box-shadow:none; }
.ba-page.student-reports-page .ba-print-zone { padding:3px; overflow-x:auto; overscroll-behavior-inline:contain; }
.ba-page.report-remarks-page .ba-remark-card { margin-top:0; box-shadow:none; border-radius:11px; }
.ba-page.report-remarks-page .ba-student-row { border-radius:9px; box-shadow:none; transform:none; }
.ba-page.report-remarks-page .ba-list { gap:6px; }
.ba-page.report-remarks-page .ba-student-row:hover { transform:none; }
.ba-page .ba-v4-find { display:grid; gap:5px; grid-column:1/-1; font-size:12px; font-weight:700; color:var(--muted,#64748b); }
.ba-page .ba-v4-find input { min-height:40px; padding:0 10px; border-radius:9px; background:var(--input-bg,var(--surface,#fff)); color:var(--text,#111827); }
@media(max-width:760px){
 .ba-page.student-reports-page,.ba-page.report-remarks-page{padding:0 1px 14px;}
 .ba-page.student-reports-page .ba-print-card{padding:3px;border-radius:9px;}
 .ba-page.report-remarks-page .ba-remark-card{padding:9px;}
}
@media print {
  .ba-page.student-reports-page,.ba-page.report-remarks-page,
  .ba-page.student-reports-page .ba-print-card,
  .ba-page.student-reports-page .ba-print-zone {
    background:#fff!important;box-shadow:none!important;border:0!important;
    margin:0!important;padding:0!important;overflow:visible!important;
  }
}

/* V6 — quiet neutral records presentation matching Students/Teachers/Classes V5 */

.student-reports-page {background:var(--bg,var(--background,#f2f4f7));padding:5px;min-height:0;}
.student-reports-page .ba-print-card {margin:0; padding:5px; border-radius:13px;
  border:1px solid color-mix(in srgb,var(--border,#d4dae3) 85%,var(--text,#182235) 15%);
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#182235) 7%);box-shadow:none;}
/* Printed report templates are intentionally NOT restyled; only the preview frame changes. */
.student-reports-page .ba-print-zone {border-radius:10px;}
.ba-v6-scope-picker {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px;align-items:end;
  padding:8px;border:1px solid var(--border,#d4dae3);border-radius:12px;
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#182235) 7%);}
.ba-v6-scope-picker label {min-width:0;display:grid;gap:4px;}
.ba-v6-scope-picker label span {font-size:10px;color:var(--muted,#64748b);font-weight:700;}
.ba-v6-scope-picker select {width:100%;min-width:0;min-height:38px;padding:0 8px;border-radius:9px;
  background:var(--input-bg,var(--surface,#fff));border:1px solid var(--border,#d4dae3);
  color:var(--text,#182235);font-size:12px;}
@media(max-width:639px){.student-reports-page {padding:3px;}.ba-v6-scope-picker {grid-template-columns:1fr;}}
@media print {.ba-v6-scope-picker{display:none!important;}}


/* V14: printable document uses the full available preview canvas, without a chrome/header card. */
.ba-page.student-reports-page { width:100%; max-width:none; padding:0; margin:0; overflow:visible; }
.ba-page.student-reports-page > .ba-print-card { width:100%; max-width:none; min-width:0;
  padding:0!important; margin:0!important; border:0!important; border-radius:0!important;
  background:transparent!important; box-shadow:none!important; overflow:visible!important; }
.ba-page.student-reports-page .ba-fit-viewport { width:100%; max-width:100%; }
.ba-page.student-reports-page .ba-print-head, .ba-page.student-reports-page .ba-report-toolbar { display:none!important; }
@media print { .ba-page.student-reports-page .ba-fit-viewport { max-height:none!important; overflow:visible!important; } }
`;var eF=t(59473),eL=t(41245),eU=t(45116),e_=t(69792),eW=t(32242),eK=t(55753);function eV(e){return e.map(e=>e0(e.id)).find(Boolean)||void 0}let eG="broadsheet-print-zone",eq=String(ex.$S.SCHOOLS||"schools"),eJ=String(ex.$S.BRANCHES||"branches"),eH=String(ex.$S.SCHOOL_BRANCH_SETTINGS||ex.$S.SCHOOL_BRANCHES_SETTINGS||"schoolBranchSettings"),eY=String(ex.Vq.LOGO||"logo"),eZ=String(ex.Vq.PHOTO||"photo"),eX=String(ex.$S.STUDENTS||"students");function eQ(e,a,t){let r;return!e||t&&e&&Object.prototype.hasOwnProperty.call(e,t)&&!e0(e[t])?"":!(r=String(e[a]||""))||r.startsWith("blob:")||r.startsWith("data:image/")?"":r}function e0(e){if(null==e)return"";let a=String(e).trim();return a&&"0"!==a&&"undefined"!==a&&"null"!==a?a:""}function e1(e,a){let t=e0(a);return t?e.find(e=>e0(e.id)===t)?.name||"Not found":"Not selected"}function e2(e){return String(e?.code||e?.templateCode||e?.layoutKey||e?.templateKey||"").trim()}function e4(e,a){if(!e)return e;let t=a?.name||a?.branchName||a?.campusName||e.branchName||e.branchLabel||e.branch?.name||e.branding?.branchName||"";return{...e,branch:a,branchId:a?.id||e.branchId,branchName:t,branchLabel:t,campusName:t,branding:{...e.branding||{},branchName:(e.branding||{}).branchName||t,branchLabel:(e.branding||{}).branchLabel||t,campusName:(e.branding||{}).campusName||t,resolvedLogoUrl:(e.branding||{}).resolvedLogoUrl||e.schoolBranchSetting?.logo||e.branch?.logo||e.school?.logo||"",logo:(e.branding||{}).logo||e.schoolBranchSetting?.logo||e.branch?.logo||e.school?.logo||"",resolvedReportCardBackgroundImageUrl:(e.branding||{}).resolvedReportCardBackgroundImageUrl||e.schoolBranchSetting?.reportCardBackgroundImage||"",reportCardBackgroundImage:(e.branding||{}).reportCardBackgroundImage||e.schoolBranchSetting?.reportCardBackgroundImage||"",resolvedReportCardWatermarkUrl:(e.branding||{}).resolvedReportCardWatermarkUrl||e.schoolBranchSetting?.reportCardWatermark||"",reportCardWatermark:(e.branding||{}).reportCardWatermark||e.schoolBranchSetting?.reportCardWatermark||"",resolvedReportCardSignatureImageUrl:(e.branding||{}).resolvedReportCardSignatureImageUrl||e.schoolBranchSetting?.reportCardSignatureImage||"",reportCardSignatureImage:(e.branding||{}).reportCardSignatureImage||e.schoolBranchSetting?.reportCardSignatureImage||""}}}function e8(){let e=(0,d.f)(["schools","branches","schoolBranchSettings","academicStructures","academicPeriods","students","parents","teachers","classes","subjects","classSubjects","classTeachers","studentEnrollments","studentParents","assessmentApplicabilities","assessmentStructures","assessmentStructureItems","assessmentEntries","gradingStructures","gradeRules","attendance","studentAttendanceSummaries","computedResults","reportCards","reportCardItems","studentReportSnapshots","studentPromotions","reportCardTemplates","reportCardTemplateSettings","reportCardTemplateAssignments","mediaAssets","mediaBlobs"]),a=(0,y.useRouter)(),{settings:t,loading:i}=(0,k.t)(),{activeSchool:o,activeBranch:c}=(0,j.c)(),p=(0,n.P)(),m=h(),{accountId:u,schoolId:b,branchId:x,authenticated:g,restoring:f,branchLoading:v}=p,w=m.teacherId,I=t?.primaryColor||"var(--primary-color, #2563eb)",N=e0(t?.currentAcademicStructureId)||void 0,C=e0(t?.currentAcademicPeriodId)||void 0,{loading:z,setLoading:M}=(0,S.J)(),[A,P]=(0,s.useState)(""),[E,R]=(0,s.useState)(!1),[B,$]=(0,s.useState)(""),D=[u,b,x,m.teacherId,String(e)].join("::"),O=A===D&&!z,[F,L]=(0,s.useState)("subject-broadsheet"),[U,_]=(0,s.useState)(""),[W,K]=(0,s.useState)(!1),[V,G]=(0,s.useState)(!1),q=s.useRef(""),J=s.useRef(!1),[H,Y]=(0,s.useState)({branchId:x||void 0,academicStructureId:N,academicPeriodId:C,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"}),[Z,X]=(0,s.useState)([]),[Q,ee]=(0,s.useState)([]),[ea,et]=(0,s.useState)([]),[er,es]=(0,s.useState)([]),[ei,eo]=(0,s.useState)([]),[en,ed]=(0,s.useState)([]),[el,ec]=(0,s.useState)([]),[ep,em]=(0,s.useState)([]),[eu,eg]=(0,s.useState)([]),[ey,ew]=(0,s.useState)([]),[ek,ej]=(0,s.useState)([]),[eI,eS]=(0,s.useState)([]),[eN,eC]=(0,s.useState)([]),[ez,eM]=(0,s.useState)([]),[eA,eP]=(0,s.useState)([]),[eE,eT]=(0,s.useState)([]),[eR,eB]=(0,s.useState)([]),[e$,eD]=(0,s.useState)([]),[eO,e8]=(0,s.useState)([]),[aa,at]=(0,s.useState)([]),[ar,as]=(0,s.useState)([]),[ai,ao]=(0,s.useState)([]),[an,ad]=(0,s.useState)([]),[al,ac]=(0,s.useState)([]),[ap,am]=(0,s.useState)([]),[au,ab]=(0,s.useState)([]),[ah,ax]=(0,s.useState)([]),[ag,af]=(0,s.useState)([]),[av,ay]=(0,s.useState)([]),[aw,ak]=(0,s.useState)([]),[aj,aI]=(0,s.useState)([]);(0,s.useEffect)(()=>{if(!f&&!v&&(!g||!u))return void a.replace("/login")},[f,v,g,u,b,x,a]),(0,s.useEffect)(()=>()=>{aj.forEach(ex.hZ)},[aj]);let aS=()=>{aj.forEach(ex.hZ),aI([]),X([]),ee([]),et([]),es([]),eo([]),ed([]),ec([]),em([]),eg([]),ew([]),ej([]),eS([]),eC([]),eM([]),eP([]),eT([]),eB([]),eD([]),e8([]),at([]),as([]),ao([]),ad([]),ac([]),am([]),ab([]),ax([]),af([]),ay([]),ak([])},aN=async({ownerTable:e,ownerId:a,fieldKey:t,fallbackMediaId:r,nextUrls:s})=>{let i=e0(a);if(i){let a=await (0,ex.cg)({accountId:u||void 0,ownerTable:e,ownerId:i,fieldKey:t});if(a?.id&&!a.isDeleted&&!1!==a.active){let e=await (0,ex.fW)(String(a.id));if(e)return s.push(e),e}}let o=e0(r);if(!o)return"";let n=await l.db.mediaAssets?.get?.(o);if(!(n&&!n.isDeleted&&!1!==n.active&&(!u||n.accountId===u)&&n.ownerTable===e&&n.fieldKey===t&&(!i||String(n.ownerId||"")===String(i))))return"";let d=await (0,ex.fW)(o);return d&&s.push(d),d||""},aC=async()=>{if(!g||!u||!b||!x||!m.ready||!m.permitted||!w){aS(),P(D),M(!1);return}try{M(!0);let[e,a,t,r,s,i,n,d,p,m,h,g,f,v,y,k,j,I,S,N,C,z,A,P,E,T,B,$,D,O]=await Promise.all([l.db.schools.toArray(),l.db.branches.toArray(),l.db.schoolBranchSettings.toArray(),l.db.academicStructures.toArray(),l.db.academicPeriods.toArray(),l.db.students.toArray(),l.db.parents.toArray(),l.db.teachers.toArray(),l.db.classes.toArray(),l.db.subjects.toArray(),l.db.classSubjects.toArray(),l.db.classTeachers.toArray(),l.db.studentEnrollments.toArray(),l.db.studentParents.toArray(),l.db.assessmentApplicabilities.toArray(),l.db.assessmentStructures.toArray(),l.db.assessmentStructureItems.toArray(),l.db.assessmentEntries.toArray(),l.db.gradingStructures.toArray(),l.db.gradeRules.toArray(),l.db.attendance.toArray(),l.db.studentAttendanceSummaries.toArray(),l.db.computedResults.toArray(),l.db.reportCards.toArray(),l.db.reportCardItems.toArray(),l.db.studentReportSnapshots.toArray(),l.db.studentPromotions.toArray(),l.db.reportCardTemplates?.toArray?.()||[],l.db.reportCardTemplateSettings?.toArray?.()||[],l.db.reportCardTemplateAssignments?.toArray?.()||[]]),F=e=>e0(e.accountId)===e0(u)&&e0(e.schoolId)===b&&e0(e.branchId)===x&&!e.isDeleted,L=e.find(e=>e0(e.accountId)===e0(u)&&e0(e.id)===b&&!e.isDeleted)||(o?.accountId===u&&o?.id===b?o:void 0),U=a.find(e=>e0(e.accountId)===e0(u)&&e0(e.schoolId)===b&&e0(e.id)===x&&!e.isDeleted)||(c?.accountId===u&&c?.schoolId===b&&c?.id===x?c:void 0),_=s.filter(F),W=t.filter(F),K=h.filter(e=>F(e)&&!1!==e.active&&e0(e.teacherId)===w),V=g.filter(e=>F(e)&&!1!==e.active&&e0(e.teacherId)===w),G=new Set(K.map(e=>e0(e.classId)).filter(Boolean)),q=new Set(V.map(e=>e0(e.classId)).filter(Boolean)),J=new Set([...G,...q]),H=f.filter(e=>F(e)&&!e.isDeleted&&J.has(e0(e.classId))),Y=new Set(H.map(e=>e0(e.studentId)).filter(Boolean)),Z=h.filter(e=>F(e)&&!1!==e.active&&J.has(e0(e.classId))),Q=new Set(Z.map(e=>e0(e.id)).filter(Boolean)),ea=P.filter(e=>F(e)&&!e.isDeleted&&J.has(e0(e.classId))),er=[],ei=L?{...L,logo:await aN({ownerTable:eq,ownerId:L.id,fieldKey:eY,fallbackMediaId:L.logoMediaId,nextUrls:er})||eQ(L,"logo","logoMediaId")}:void 0,en=U?{...U,logo:await aN({ownerTable:eJ,ownerId:U.id,fieldKey:eY,fallbackMediaId:U.logoMediaId,nextUrls:er})||eQ(U,"logo","logoMediaId")}:void 0,el=await Promise.all(W.map(async e=>({...e,logo:await aN({ownerTable:eH,ownerId:e.id,fieldKey:eY,fallbackMediaId:e.logoMediaId,nextUrls:er})||eQ(e,"logo","logoMediaId"),reportCardBackgroundImage:await aN({ownerTable:eH,ownerId:e.id,fieldKey:"reportCardBackgroundImage",fallbackMediaId:e.reportCardBackgroundImageMediaId,nextUrls:er})||eQ(e,"reportCardBackgroundImage","reportCardBackgroundImageMediaId"),reportCardWatermark:await aN({ownerTable:eH,ownerId:e.id,fieldKey:"reportCardWatermark",fallbackMediaId:e.reportCardWatermarkMediaId,nextUrls:er})||eQ(e,"reportCardWatermark","reportCardWatermarkMediaId"),reportCardSignatureImage:await aN({ownerTable:eH,ownerId:e.id,fieldKey:"reportCardSignatureImage",fallbackMediaId:e.reportCardSignatureImageMediaId,nextUrls:er})||eQ(e,"reportCardSignatureImage","reportCardSignatureImageMediaId")}))),ep=await Promise.all(i.filter(e=>F(e)&&Y.has(e0(e.id))).map(async e=>{let a=await aN({ownerTable:eX,ownerId:e.id,fieldKey:eZ,fallbackMediaId:e.photoMediaId,nextUrls:er})||eQ(e,"photo","photoMediaId");return{...e,photo:a,studentPhoto:a,resolvedStudentPhotoUrl:a}})),eu=new Set(_.map(e=>e0(e.id)).filter(Boolean)),eb=new Set(ea.map(e=>e0(e.id)).filter(Boolean));aj.forEach(e=>{er.includes(e)||(0,ex.hZ)(e)}),aI(er),X(ei?[ei]:[]),ee(en?[en]:[]),et(el),es(r.filter(F)),eo(_),ed(ep),em(n.filter(e=>F(e)&&v.some(a=>F(a)&&Y.has(e0(a.studentId))&&e0(a.parentId)===e0(e.id)))),ec(d.filter(e=>F(e)&&(e0(e.id)===w||Z.some(a=>e0(a.teacherId)===e0(e.id))||g.some(a=>F(a)&&J.has(e0(a.classId))&&e0(a.teacherId)===e0(e.id))))),ew(p.filter(e=>F(e)&&!1!==e.active&&J.has(e0(e.id)))),ej(m.filter(e=>F(e)&&!1!==e.active&&Z.some(a=>e0(a.subjectId)===e0(e.id)))),eS(Z),eM(v.filter(e=>F(e)&&Y.has(e0(e.studentId)))),eC(H),eg(g.filter(e=>F(e)&&!1!==e.active&&J.has(e0(e.classId)))),eP(y.filter(e=>F(e)&&!1!==e.active&&(!e.classId||J.has(e0(e.classId)))&&(!e.classSubjectId||Q.has(e0(e.classSubjectId))))),eT(k.filter(e=>F(e)&&!1!==e.active)),eB(j.filter(e=>F(e)&&!1!==e.active)),eD(I.filter(e=>F(e)&&!e.isDeleted&&(!e.classSubjectId||Q.has(e0(e.classSubjectId)))&&(!e.studentId||Y.has(e0(e.studentId))))),e8(S.filter(e=>F(e)&&!1!==e.active)),at(N.filter(e=>F(e)&&!1!==e.active)),as(C.filter(e=>F(e)&&!e.isDeleted&&(!e.studentId||Y.has(e0(e.studentId))))),ao(z.filter(e=>F(e)&&(!e.studentId||Y.has(e0(e.studentId))))),ad(A.filter(e=>F(e)&&!e.isDeleted&&(!e.classSubjectId||Q.has(e0(e.classSubjectId)))&&(!e.studentId||Y.has(e0(e.studentId))))),ac(ea),am(E.filter(e=>!!F(e)&&(!e.reportCardId||!!eb.has(e0(e.reportCardId)))&&(!e.academicPeriodId||!!eu.has(e0(e.academicPeriodId))))),ab(T.filter(e=>!e.isDeleted&&e.accountId===u&&e.schoolId===b&&e.branchId===x&&(!e.classId||!!q.has(e0(e.classId)))&&(!e.studentId||!!Y.has(e0(e.studentId))))),ax(B.filter(e=>!e.isDeleted&&(!e.accountId||e.accountId===u)&&(!e.schoolId||e.schoolId===b)&&(!e.branchId||e.branchId===x)&&(!e.studentId||!!Y.has(e0(e.studentId)))&&(!e.fromClassId||!!q.has(e0(e.fromClassId))||!e.toClassId||!!q.has(e0(e.toClassId)))&&!0)),af($.filter(e=>!e.isDeleted&&!1!==e.active&&(!e.accountId||e.accountId===u)&&(!e.schoolId||String(e.schoolId??"")===String(b??""))&&(!e.branchId||String(e.branchId??"")===String(x??""))&&["subject_broadsheet","class_broadsheet","annual_broadsheet"].includes(String(e.reportType||"")))),ay(D.filter(e=>!e.isDeleted&&!1!==e.active&&(!e.accountId||e.accountId===u)&&(!e.schoolId||String(e.schoolId??"")===String(b??""))&&(!e.branchId||String(e.branchId??"")===String(x??""))&&["subject_broadsheet","class_broadsheet","annual_broadsheet"].includes(String(e.reportType||"")))),ak(O.filter(e=>!e.isDeleted&&!1!==e.active&&(!e.accountId||e.accountId===u)&&(!e.schoolId||String(e.schoolId??"")===String(b??""))&&(!e.branchId||String(e.branchId??"")===String(x??""))&&["subject_broadsheet","class_broadsheet","annual_broadsheet"].includes(String(e.reportType||"")))),R(!1)}catch(e){console.error("Failed to load report data:",e),aS(),R(!0)}finally{P(D),M(!1)}};(0,s.useEffect)(()=>{aC()},[g,u,b,x,e,m.ready,m.permitted,w]),(0,s.useEffect)(()=>{q.current="",J.current=!1,$("")},[u,b,x,w]),(0,s.useEffect)(()=>{Y(e=>{let a=x||void 0,t=e.branchId!==a;return{...e,branchId:a,academicStructureId:t?N:e.academicStructureId||N,academicPeriodId:t?C:e.academicPeriodId||C,classId:t?void 0:e.classId,classSubjectId:t?void 0:e.classSubjectId,studentId:t?void 0:e.studentId}})},[x,N,C]),(0,s.useEffect)(()=>{if(!H.academicStructureId){let e=N||eV(er);e&&Y(a=>({...a,academicStructureId:e}))}},[H.academicStructureId,N,er]),(0,s.useEffect)(()=>{if(!H.academicPeriodId){let e=C||eV(ei);e&&Y(a=>({...a,academicPeriodId:e}))}},[H.academicPeriodId,C,ei]);let az=(0,s.useMemo)(()=>c&&c.id===x?[c]:Q,[c,x,Q]),aM=(0,s.useMemo)(()=>new Set(eI.filter(e=>e0(e.teacherId)===w).map(e=>e0(e.id)).filter(Boolean)),[eI,w]),aA=(0,s.useMemo)(()=>new Set(eI.filter(e=>e0(e.teacherId)===w).map(e=>e0(e.classId)).filter(Boolean)),[eI,w]),aP=(0,s.useMemo)(()=>new Set(eu.filter(e=>e0(e.teacherId)===w).map(e=>e0(e.classId)).filter(Boolean)),[eu,w]),aE="subject-broadsheet"===F?aA:aP;(0,s.useEffect)(()=>{!aA.size&&aP.size&&"subject-broadsheet"===F&&L("class-broadsheet")},[aA,aP,F]);let aT=aA.size>0,aR=aP.size>0,aB=e=>{L(e),J.current=!0,Y(e=>({...e,classId:void 0,classSubjectId:void 0,studentId:void 0}))},a$=(0,s.useMemo)(()=>{let e=new Set;eN.forEach(a=>{"active"!==a.status||H.academicStructureId&&a.academicStructureId!==H.academicStructureId||H.academicPeriodId&&a.academicPeriodId!==H.academicPeriodId||e.add(e0(a.classId))}),eI.forEach(a=>{!1===a.active||H.academicStructureId&&a.academicStructureId!==H.academicStructureId||H.academicPeriodId&&a.academicPeriodId&&a.academicPeriodId!==H.academicPeriodId||e.add(e0(a.classId))});let a=ey.filter(e=>!!e0(e.id)&&aE.has(e0(e.id)));return H.academicStructureId||H.academicPeriodId?a.filter(a=>!!e0(a.id)&&e.has(e0(a.id))):a},[ey,eN,eI,H.academicStructureId,H.academicPeriodId,aE]),aD=(0,s.useMemo)(()=>eI.filter(e=>("subject-broadsheet"!==F||!!aM.has(e0(e.id)))&&("subject-broadsheet"===F||!!aP.has(e0(e.classId)))&&(!H.classId||e.classId===H.classId)&&(!H.academicStructureId||e.academicStructureId===H.academicStructureId)&&(!H.academicPeriodId||!e.academicPeriodId||e.academicPeriodId===H.academicPeriodId)),[eI,H.classId,H.academicStructureId,H.academicPeriodId,F,aM,aP]);(0,s.useMemo)(()=>{if(!H.classId&&!H.academicPeriodId)return en;let e=new Set(eN.filter(e=>"active"===e.status&&(!H.classId||e.classId===H.classId)&&(!H.academicStructureId||e.academicStructureId===H.academicStructureId)&&(!H.academicPeriodId||e.academicPeriodId===H.academicPeriodId)).map(e=>e0(e.studentId)).filter(Boolean));return en.filter(a=>!!e0(a.id)&&e.has(e0(a.id)))},[en,eN,H.classId,H.academicStructureId,H.academicPeriodId]);let aO=(0,s.useMemo)(()=>eN.filter(e=>aE.has(e0(e.classId))),[aE,eN]),aF=(0,s.useMemo)(()=>new Set(aO.map(e=>e0(e.studentId)).filter(Boolean)),[aO]),aL=(0,s.useMemo)(()=>ey.filter(e=>aE.has(e0(e.id))),[ey,aE]),aU=(0,s.useMemo)(()=>eI.filter(e=>"subject-broadsheet"===F?aM.has(e0(e.id)):aP.has(e0(e.classId))),[eI,F,aM,aP]),a_=(0,s.useMemo)(()=>new Set(aU.map(e=>e0(e.id)).filter(Boolean)),[aU]),aW=(0,s.useMemo)(()=>({schools:Z,branches:az,schoolBranchSettings:ea,academicStructures:er,academicPeriods:ei,students:en.filter(e=>aF.has(e0(e.id))),parents:ep,studentParents:ez.filter(e=>aF.has(e0(e.studentId))),teachers:el,classes:aL,subjects:ek,classSubjects:aU,studentEnrollments:aO,classTeachers:eu,assessmentApplicabilities:eA.filter(e=>a_.has(e0(e.classSubjectId))),assessmentStructures:eE,assessmentStructureItems:eR,assessmentEntries:e$.filter(e=>a_.has(e0(e.classSubjectId))),gradingStructures:eO,gradeRules:aa,attendance:ar.filter(e=>aF.has(e0(e.studentId))),studentAttendanceSummaries:ai.filter(e=>aF.has(e0(e.studentId))),computedResults:an.filter(e=>a_.has(e0(e.classSubjectId))),reportCards:al.filter(e=>aE.has(e0(e.classId))),reportCardItems:ap}),[Z,az,ea,er,ei,en,ep,ez,el,ey,ek,eI,eN,eu,eA,eE,eR,e$,eO,aa,ar,ai,an,al,ap,aF,aL,aU,a_,aE,aO]),aK=(0,s.useMemo)(()=>{if("subject-broadsheet"!==F)return;let e=av.find(e=>"subject_broadsheet"===String(e.reportType||"")&&!1!==e.active)||null;return(0,eW.zI)(e)},[F,av]),aV=(0,s.useMemo)(()=>(0,ev.EI)(aW,H,aK),[aW,H,aK]);(0,s.useEffect)(()=>{let e=[u,b,x,w].join(":");if(!m.ready||!m.permitted||"subject-broadsheet"!==F||!u||!b||!x||!w||z||!ei.length||!eI.length||!eN.length||q.current===e||J.current)return;if(H.classSubjectId&&Array.isArray(aV.subjectBroadsheet?.students)&&aV.subjectBroadsheet.students.length>0){q.current=e,$(e);return}let a=new Map;eN.forEach(e=>{if(e.isDeleted||"active"!==e.status)return;let t=[e0(e.classId),e0(e.academicStructureId),e0(e.academicPeriodId)].join(":");a.set(t,(a.get(t)||0)+1)});let t=new Map;e$.forEach(e=>{if(e.isDeleted)return;let a=[e0(e.classSubjectId),e0(e.academicPeriodId)].join(":");t.set(a,(t.get(a)||0)+1)});let r=[];for(let s of(eI.forEach(e=>{if(e.isDeleted||!1===e.active)return;let s=e0(e.classId),i=e0(e.id);!aM.has(i)||s&&i&&ey.some(e=>e0(e.id)===s)&&ei.forEach(o=>{if(o.isDeleted||!1===o.active)return;let n=e0(o.id),d=e0(e.academicStructureId)||e0(o.academicStructureId);if(!n||!d||e0(e.academicPeriodId)&&e0(e.academicPeriodId)!==n||e0(o.academicStructureId)&&e0(o.academicStructureId)!==d)return;let l=a.get([s,d,n].join(":"))||0;if(!l)return;let c=1e3*(t.get([i,n].join(":"))||0)+10*l+5*(n===e0(H.academicPeriodId))+3*(d===e0(H.academicStructureId))+2*(s===e0(H.classId));r.push({priority:c,filters:{...H,branchId:x||void 0,academicStructureId:d,academicPeriodId:n,classId:s,classSubjectId:i,studentId:void 0}})})}),r.sort((e,a)=>a.priority-e.priority),r.slice(0,24)))try{let a=(0,ev.EI)(aW,s.filters,aK);if(Array.isArray(a.subjectBroadsheet?.students)&&a.subjectBroadsheet.students.length>0){q.current=e,$(e),Y(e=>({...e,branchId:s.filters.branchId,academicStructureId:s.filters.academicStructureId,academicPeriodId:s.filters.academicPeriodId,classId:s.filters.classId,classSubjectId:s.filters.classSubjectId,studentId:void 0}));return}}catch(e){console.warn("Skipping incomplete default broadsheet candidate:",e)}q.current=e,$(e)},[u,b,x,z,ei,eI,ey,eN,e$,aW,H,aK,aV.subjectBroadsheet,w,m.permitted,m.ready,F,aM]);let aG=(0,s.useMemo)(()=>({schools:Z,branches:az,schoolBranchSettings:ea,academicStructures:er,academicPeriods:ei,students:en.filter(e=>aF.has(e0(e.id))),parents:ep,studentParents:ez,teachers:el,classes:aL,subjects:ek,studentReportSnapshots:au.filter(e=>aE.has(e0(e.classId))),studentPromotions:ah.filter(e=>!e.fromClassId||aE.has(e0(e.fromClassId))||!e.toClassId||aE.has(e0(e.toClassId)))}),[Z,az,ea,er,ei,en,ep,ez,el,ey,ek,au,ah,aE,aF,aO,aL,aU]),aq=(0,s.useMemo)(()=>(0,eK.DB)(aG,{branchId:H.branchId,academicStructureId:H.academicStructureId,academicPeriodId:H.academicPeriodId,fromAcademicPeriodId:void 0,toAcademicPeriodId:H.academicPeriodId,classId:H.classId,studentId:H.studentId,subjectId:void 0,snapshotType:"all",decision:"all",mode:"annual-broadsheet",sortMode:H.sortMode,groupingMode:"class",subjectAggregationMode:"average",includePromotionRecords:!0,includeManualSnapshots:!0,includeTerminalSnapshots:!0,includeDeletedSnapshots:!1}),[aG,H]),aJ=!!(er.length&&ei.length&&ey.length&&en.length),aH=(0,s.useMemo)(()=>Q.find(e=>e.id===x)||az.find(e=>e.id===x)||c||Q[0]||az[0],[c,x,Q,az]),aY=(0,s.useMemo)(()=>e4(aV.header,aH),[aV.header,aH]),aZ=(0,s.useMemo)(()=>e4(aq.header,aH),[aq.header,aH]);o?.name||Z[0]?.name,aH?.name||c?.name||Q[0]?.name,e1(ey,H.classId),e1(ei,H.academicPeriodId),e1(er,H.academicStructureId);let aX=U.trim().toLowerCase(),aQ=(0,s.useMemo)(()=>aX?a$.filter(e=>`${e.name||""} ${e.code||""}`.toLowerCase().includes(aX)):a$,[a$,aX]),a0=(0,s.useMemo)(()=>aX?aD.filter(e=>{let a=ek.find(a=>a.id===e.subjectId),t=ey.find(a=>a.id===e.classId);return`${t?.name||""} ${a?.name||""} ${e.name||""}`.toLowerCase().includes(aX)}):aD,[ey,aD,aX,ek]);(0,s.useMemo)(()=>{if(!H.classSubjectId)return"Not selected";let e=eI.find(e=>e.id===H.classSubjectId);if(!e)return"Not found";let a=ek.find(a=>a.id===e.subjectId),t=ey.find(a=>a.id===e.classId);return`${t?.name||"Class"} \xb7 ${a?.name||e.name||"Subject"}`},[eI,ey,H.classSubjectId,ek]),(0,s.useMemo)(()=>[H.academicStructureId,H.academicPeriodId,H.classId,H.classSubjectId,H.sortMode&&"position"!==H.sortMode?H.sortMode:void 0,"subject-broadsheet"!==F?F:void 0].filter(Boolean).length,[H.academicStructureId,H.academicPeriodId,H.classId,H.classSubjectId,H.sortMode,F]);let a1=aJ&&("subject-broadsheet"===F?aT:aR)&&("subject-broadsheet"===F?!!aV.subjectBroadsheet:"class-broadsheet"===F?!!aV.classBroadsheet:!!aq.annualBroadsheet),a2="class-broadsheet"===F?"class":"annual-broadsheet"===F?"annual":"subject",a4="class-broadsheet"===F?"class_broadsheet":"annual-broadsheet"===F?"annual_broadsheet":"subject_broadsheet",a8=(0,s.useMemo)(()=>{let e=aw.filter(e=>{var a;let t,r;return String(e.reportType||"")===a4&&!1!==e.active&&(a=e.scopeId,t=e0(a),r=e0(x),!t||!!r&&t===r)&&(!e.scopeType||"branch"===e.scopeType)});return e.find(e=>!0===e.isDefault)||e[0]||null},[a4,x,aw]),a5=(0,s.useMemo)(()=>{let e=e0(a8?.templateId),a=e2(a8),t=ag.filter(e=>String(e.reportType||"")===a4&&!1!==e.active);return t.find(a=>!!e&&e0(a.id)===e)||t.find(e=>a&&e2(e)===a)||t.find(e=>!0===e.isDefault)||t[0]||(0,e_.nE)("broadsheet_classic")},[a8,a4,ag]),a3=(0,s.useMemo)(()=>{let e=e0(a8?.templateSettingsId),a=e0(a5?.id),t=e2(a5),r=av.filter(e=>String(e.reportType||"")===a4&&!1!==e.active);return r.find(a=>!!e&&e0(a.id)===e)||r.find(e=>!!a&&e0(e.templateId)===a)||r.find(e=>t&&e2(e)===t)||r[0]||null},[a8,a4,a5,av]),a6=(0,s.useMemo)(()=>(0,e_.J9)({kind:a2,template:a5,settings:a3}),[a2,a3,a5]),a9=(0,s.useMemo)(()=>{let e=new Map;return en.forEach(a=>{let t=e0(a.id);if(!t)return;let r=a.resolvedStudentPhotoUrl||a.studentPhoto||a.photo||"";r&&e.set(t,r)}),e},[en]);function a7(e){return e&&Array.isArray(e.students)?{...e,students:e.students.map(e=>{let a=e.resolvedStudentPhotoUrl||e.studentPhoto||e.photo||a9.get(e0(e.studentId))||"";return{...e,photo:a,studentPhoto:a,resolvedStudentPhotoUrl:a}})}:e}let te=()=>{a1&&(0,ef.f)({targetId:eG,mode:"current-view",orientation:"landscape",pageSize:"A4",title:"annual-broadsheet"===F?"Annual Broadsheet":"class-broadsheet"===F?"Class Broadsheet":"Subject Broadsheet"})};(0,T.TV)("reportsWorkspace",{search:_,filter:()=>K(!0),print:()=>te(),more:()=>G(!0)});let ta="subject-broadsheet"===F?!!(aV.subjectBroadsheet&&Array.isArray(aV.subjectBroadsheet.students)&&aV.subjectBroadsheet.students.length):"class-broadsheet"===F?!!aV.classBroadsheet:!!aq.annualBroadsheet,tt=!!(O&&!E&&"subject-broadsheet"===F&&!J.current&&ei.length&&eI.length&&eN.length&&!ta&&B!==[u,b,x,w].join(":"));return f||v||i||!m.ready||!O||tt?(0,r.jsx)(e3,{primary:I,title:"Opening Broadsheets...",text:"Checking account, assigned branch, academic result data and broadsheet records."}):g&&u?m.permitted&&w?E?(0,r.jsx)(e5,{primary:I,icon:"⚠",title:"Unable to load broadsheets",text:"The local academic data could not be loaded. Check synchronization or reopen Reports."}):b&&x?(0,r.jsxs)("main",{className:"ba-page student-reports-page",style:{"--ba-primary":I},children:[(0,r.jsx)("style",{children:ae}),aJ&&ta?(0,r.jsx)("section",{className:"ba-print-card",children:(0,r.jsx)(eh.Ay,{printZoneId:eG,naturalWidth:1122,children:(()=>{if(!aJ||!ta)return(0,r.jsx)(e6,{icon:"\uD83D\uDCCA",title:"No broadsheet for this selection",text:"No prepared broadsheet is available for the selected class, subject and term. Use Filter to choose another assignment or academic period."});let e={template:a5,settings:a6,showWatermark:a6.showBroadsheetWatermark,generatedAt:new Date,pageBreakAfter:!1,mobilePreview:!1};return"subject-broadsheet"===F?(0,r.jsx)(eF.A,{...e,header:aY,broadsheet:a7(aV.subjectBroadsheet)}):"annual-broadsheet"===F?(0,r.jsx)(eU.A,{...e,header:aZ,broadsheet:a7(aq.annualBroadsheet)}):(0,r.jsx)(eL.A,{...e,header:aY,broadsheet:a7(aV.classBroadsheet)})})()})}):(0,r.jsx)(e5,{primary:I,icon:"\uD83D\uDCCA",title:"No broadsheet for this selection",text:"Choose another assigned class, subject or reporting period with available assessment results using Filter."}),W&&(0,r.jsx)(eb.A,{themeSourceClass:".student-reports-page",onEscape:()=>K(!1),children:(0,r.jsx)(e9,{mode:F,filters:H,academicStructures:er,academicPeriods:ei,filteredClasses:aQ,filteredClassSubjects:a0,subjects:ek,classes:ey,setMode:aB,allowSubject:aT,allowClass:aR,setFilters:e=>{J.current=!0,Y(e)},search:U,setSearch:_,onClose:()=>K(!1)})}),V&&(0,r.jsx)(eb.A,{themeSourceClass:".student-reports-page",onEscape:()=>G(!1),children:(0,r.jsx)(e7,{mode:F,setMode:e=>{aB(e),G(!1)},allowSubject:aT,allowClass:aR,onRefresh:async()=>{G(!1),await aC()},onPrint:()=>{G(!1),te()},onClose:()=>G(!1)})})]}):(0,r.jsxs)("main",{className:"ba-page",style:{"--ba-primary":I},children:[(0,r.jsx)("style",{children:ae}),(0,r.jsxs)("section",{className:"ba-state",children:[(0,r.jsx)("h2",{children:"Branch workspace required"}),(0,r.jsx)("p",{children:"Teacher Broadsheets use your selected school branch workspace. Use Select Role again if the wrong branch is active."}),(0,r.jsx)("button",{type:"button",className:"ba-state-button",onClick:()=>a.push("/select-role"),children:"Go to Select Role"})]})]}):(0,r.jsx)(e5,{primary:I,icon:"\uD83D\uDD12",title:"Teacher membership required",text:"Choose an active teacher membership to view assigned Broadsheets."}):(0,r.jsx)(e3,{primary:I,title:"Redirecting to login...",text:"You must sign in before opening broadsheets."})}function e5({primary:e,icon:a,title:t,text:s}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:ae}),(0,r.jsxs)("section",{className:"teacher-report-notice",style:{"--ba-primary":e},role:"status",children:[(0,r.jsx)("div",{className:"teacher-report-notice-icon","aria-hidden":"true",children:a}),(0,r.jsx)("h2",{children:t}),(0,r.jsx)("p",{children:s})]})]})}function e3({primary:e,title:a,text:t}){return(0,r.jsxs)("main",{className:"ba-page",style:{"--ba-primary":e},children:[(0,r.jsx)("style",{children:ae}),(0,r.jsxs)("section",{className:"ba-state",children:[(0,r.jsx)("div",{className:"ba-spinner"}),(0,r.jsx)("h2",{children:a}),(0,r.jsx)("p",{children:t})]})]})}function e6({icon:e,title:a,text:t}){return(0,r.jsxs)("section",{className:"ba-empty",children:[(0,r.jsx)("div",{className:"ba-empty-icon",children:e}),(0,r.jsx)("h3",{children:a}),(0,r.jsx)("p",{children:t})]})}function e9({mode:e,filters:a,academicStructures:t,academicPeriods:s,filteredClasses:i,filteredClassSubjects:o,subjects:n,classes:d,setMode:l,allowSubject:c,allowClass:p,setFilters:m,search:u,setSearch:b,onClose:h}){return(0,r.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"ba-sheet",children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Filters"}),(0,r.jsx)("p",{children:"Choose the broadsheet scope. Branch stays locked to the assigned branch."})]}),(0,r.jsx)("button",{type:"button",onClick:h,"aria-label":"Close filters",children:"✕"})]}),(0,r.jsxs)("div",{className:"ba-form compact",children:[(0,r.jsxs)("label",{className:"ba-v4-find",children:[(0,r.jsx)("span",{children:"Search"}),(0,r.jsx)("input",{type:"search",value:u,onChange:e=>b(e.target.value),placeholder:"Find a student, subject or class"})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Broadsheet Mode"}),(0,r.jsxs)("select",{value:e,onChange:e=>l(e.target.value),children:[c&&(0,r.jsx)("option",{value:"subject-broadsheet",children:"Subject Broadsheet"}),p&&(0,r.jsx)("option",{value:"class-broadsheet",children:"Class Broadsheet"}),p&&(0,r.jsx)("option",{value:"annual-broadsheet",children:"Annual Broadsheet"})]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Academic Structure"}),(0,r.jsxs)("select",{value:a.academicStructureId||"",onChange:e=>m(a=>({...a,academicStructureId:e0(e.target.value)||void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"Select structure"}),t.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Academic Period"}),(0,r.jsxs)("select",{value:a.academicPeriodId||"",onChange:e=>m(a=>({...a,academicPeriodId:e0(e.target.value)||void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"Select period"}),s.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Class"}),(0,r.jsxs)("select",{value:a.classId||"",onChange:e=>m(a=>({...a,classId:e0(e.target.value)||void 0,classSubjectId:void 0})),children:[(0,r.jsx)("option",{value:"",children:"Select class"}),i.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),"subject-broadsheet"===e&&(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Class Subject"}),(0,r.jsxs)("select",{value:a.classSubjectId||"",onChange:e=>m(a=>({...a,classSubjectId:e0(e.target.value)||void 0})),children:[(0,r.jsx)("option",{value:"",children:"Select class subject"}),o.map(e=>{let a=n.find(a=>a.id===e.subjectId),t=d.find(a=>a.id===e.classId);return(0,r.jsxs)("option",{value:e.id,children:[t?.name||"Class"," \xb7"," ",a?.name||e.name||"Subject"]},e.id)})]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Sort Mode"}),(0,r.jsxs)("select",{value:a.sortMode||"position",onChange:e=>m(a=>({...a,sortMode:e.target.value})),children:[(0,r.jsx)("option",{value:"position",children:"Position"}),(0,r.jsx)("option",{value:"name",children:"Name"}),(0,r.jsx)("option",{value:"score",children:"Score"})]})]})]}),(0,r.jsxs)("div",{className:"ba-sheet-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>m(e=>({...e,academicStructureId:void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"})),children:"Clear"}),(0,r.jsx)("button",{type:"button",className:"primary",onClick:h,children:"Apply"})]})]})})}function e7({mode:e,setMode:a,allowSubject:t,allowClass:s,onRefresh:i,onPrint:o,onClose:n}){return(0,r.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"ba-sheet small",children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"More"}),(0,r.jsx)("p",{children:"Quick broadsheet actions only."})]}),(0,r.jsx)("button",{type:"button",onClick:n,"aria-label":"Close menu",children:"✕"})]}),(0,r.jsxs)("div",{className:"ba-menu-list",children:[[{mode:"subject-broadsheet",icon:"☷",label:"Subject Broadsheet",note:"One subject across a class"},{mode:"class-broadsheet",icon:"▦",label:"Class Broadsheet",note:"All subjects for one class"},{mode:"annual-broadsheet",icon:"\uD83D\uDCCA",label:"Annual Broadsheet",note:"Cumulative annual class view"}].filter(e=>"subject-broadsheet"===e.mode?t:s).map(t=>(0,r.jsxs)("button",{type:"button",className:e===t.mode?"active":"",onClick:()=>a(t.mode),children:[(0,r.jsx)("span",{children:t.icon}),(0,r.jsx)("b",{children:t.label}),(0,r.jsx)("small",{children:t.note})]},t.mode)),(0,r.jsxs)("button",{type:"button",onClick:o,children:[(0,r.jsx)("span",{children:"⎙"}),(0,r.jsx)("b",{children:"Print broadsheet"}),(0,r.jsx)("small",{children:"Print the current preview output"})]}),(0,r.jsxs)("button",{type:"button",onClick:i,children:[(0,r.jsx)("span",{children:"↻"}),(0,r.jsx)("b",{children:"Refresh"}),(0,r.jsx)("small",{children:"Reload local branch broadsheet records"})]})]})]})})}let ae=`
/* Teacher Broadsheets V32: calm, legible empty and error states. */
.teacher-report-notice { min-height:220px; width:min(560px,100%); margin:22px auto;
 display:grid; place-items:center; align-content:center; gap:11px; padding:28px 22px;
 border:1px solid var(--border,rgba(15,23,42,.12)); border-radius:22px;
 background:var(--card-bg,var(--surface,#fff)); color:var(--text,#172033);
 box-shadow:0 8px 24px rgba(15,23,42,.04); text-align:center; }
.teacher-report-notice-icon { width:48px; height:48px; border-radius:16px;
 display:grid; place-items:center; font-size:22px;
 background:color-mix(in srgb,var(--ba-primary) 11%,var(--surface,#fff)); }
.teacher-report-notice h2 { margin:0; font-size:17px; line-height:1.3; font-weight:800; }
.teacher-report-notice p { margin:0; max-width:400px; font-size:13px; line-height:1.6;
 color:var(--muted,#64748b); }

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


.ba-add-inline:disabled,
.ba-report-toolbar button:disabled {
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

/* Broadsheets golden additions */

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



/* Broadsheets compact overrides */
.student-reports-page .ba-print-card{margin-top:8px;border-radius:22px}
.student-reports-page .ba-print-head{padding:8px 10px}
.student-reports-page .ba-print-head strong{font-size:14px}
.student-reports-page .ba-print-head p{font-size:11px;margin-top:2px}
.student-reports-page .ba-print-zone{padding:8px}

@media (min-width:980px){
  .student-reports-page .ba-modal-backdrop,
  .student-reports-page .ba-sheet-backdrop{
    top:var(--eds-shell-top-offset,0px);
    right:0;
    bottom:0;
    left:var(--portal-content-left,0px);
    width:auto;
    max-width:calc(100vw - var(--portal-content-left,0px));
    min-width:0;
    overflow-x:hidden;
  }

  .student-reports-page .ba-modal,
  .student-reports-page .ba-sheet{
    min-width:0;
    max-width:calc(100vw - var(--portal-content-left,0px) - 20px);
  }
}


/* V4 records workspace: neutral surface, efficient scroll, no duplicated toolbars. */
.ba-page.student-reports-page, .ba-page.report-remarks-page { min-height:0; padding:3px 4px 18px; background:transparent; overflow-x:clip; }
.ba-page.student-reports-page .ba-search-card, .ba-page.report-remarks-page .ba-search-card,
.ba-page.report-remarks-page .ba-summary-line { display:none; }
.ba-page.student-reports-page .ba-print-card,
.ba-page.report-remarks-page .ba-remark-card,
.ba-page.report-remarks-page .ba-student-row,
.ba-page.report-remarks-page .ba-list,
.ba-page.report-remarks-page .ba-sheet {
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 83%,var(--bg,#f3f5f8) 17%);
  border-color:var(--border,rgba(15,23,42,.13));
  box-shadow:none;
}
.ba-page.student-reports-page .ba-print-card { margin:0; padding:5px; border-radius:11px; box-shadow:none; }
.ba-page.student-reports-page .ba-print-zone { padding:3px; overflow-x:auto; overscroll-behavior-inline:contain; }
.ba-page.report-remarks-page .ba-remark-card { margin-top:0; box-shadow:none; border-radius:11px; }
.ba-page.report-remarks-page .ba-student-row { border-radius:9px; box-shadow:none; transform:none; }
.ba-page.report-remarks-page .ba-list { gap:6px; }
.ba-page.report-remarks-page .ba-student-row:hover { transform:none; }
.ba-page .ba-v4-find { display:grid; gap:5px; grid-column:1/-1; font-size:12px; font-weight:700; color:var(--muted,#64748b); }
.ba-page .ba-v4-find input { min-height:40px; padding:0 10px; border-radius:9px; background:var(--input-bg,var(--surface,#fff)); color:var(--text,#111827); }
@media(max-width:760px){
 .ba-page.student-reports-page,.ba-page.report-remarks-page{padding:0 1px 14px;}
 .ba-page.student-reports-page .ba-print-card{padding:3px;border-radius:9px;}
 .ba-page.report-remarks-page .ba-remark-card{padding:9px;}
}
@media print {
  .ba-page.student-reports-page,.ba-page.report-remarks-page,
  .ba-page.student-reports-page .ba-print-card,
  .ba-page.student-reports-page .ba-print-zone {
    background:#fff!important;box-shadow:none!important;border:0!important;
    margin:0!important;padding:0!important;overflow:visible!important;
  }
}

/* V6 — quiet neutral records presentation matching Students/Teachers/Classes V5 */

.student-reports-page {background:var(--bg,var(--background,#f2f4f7));padding:5px;min-height:0;}
.student-reports-page .ba-print-card {margin:0;padding:5px;border-radius:13px;
 border:1px solid color-mix(in srgb,var(--border,#d4dae3) 85%,var(--text,#182235) 15%);
 background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#182235) 7%);box-shadow:none;}
.student-reports-page .ba-print-zone {border-radius:10px;}
.student-reports-page .ba-sheet,.student-reports-page .ba-card,.student-reports-page .ba-analysis {
 background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#182235) 7%);
 box-shadow:none;border-radius:13px;}
@media(max-width:639px){.student-reports-page{padding:3px;}}


/* V14: printable document uses the full available preview canvas, without a chrome/header card. */
.ba-page.student-reports-page { width:100%; max-width:none; padding:0; margin:0; overflow:visible; }
.ba-page.student-reports-page > .ba-print-card { width:100%; max-width:none; min-width:0;
  padding:0!important; margin:0!important; border:0!important; border-radius:0!important;
  background:transparent!important; box-shadow:none!important; overflow:visible!important; }
.ba-page.student-reports-page .ba-fit-viewport { width:100%; max-width:100%; }
.ba-page.student-reports-page .ba-print-head, .ba-page.student-reports-page .ba-report-toolbar { display:none!important; }
@media print { .ba-page.student-reports-page .ba-fit-viewport { max-height:none!important; overflow:visible!important; } }
`;function aa(e,a){let t=ai(e).toLowerCase();return"position"===a?t.includes("first")||t.includes("1st")||t.includes("top")?"Outstanding class position. Maintain this excellent standard.":t.includes("upper")||t.includes("strong")?"A strong class position. Continue working consistently.":t.includes("middle")||t.includes("average")?"A fair class position. More focused effort can produce stronger results.":"The class position can improve with greater effort and consistency.":"attendance"===a?t.includes("excellent")||t.includes("outstanding")?"Excellent attendance. Keep maintaining this level of punctuality and commitment.":t.includes("good")||t.includes("very good")?"Good attendance. Continue to attend school regularly and punctually.":t.includes("satisfactory")||t.includes("fair")?"Attendance is satisfactory but should become more consistent.":"Attendance needs improvement. Regular and punctual attendance is strongly encouraged.":t.includes("excellent")||t.includes("outstanding")||"a"===t||t.startsWith("a1")?"Excellent performance. Keep up the outstanding work.":t.includes("very good")||t.includes("credit")||t.startsWith("b")?"Very good performance. Continue working hard.":t.includes("good")||t.includes("satisfactory")||t.startsWith("c")?"Good performance. Greater consistency will produce even better results.":t.includes("pass")||t.includes("fair")||t.startsWith("d")?"A fair performance. More focused effort is encouraged.":"Performance needs improvement. Work harder and seek support where necessary."}function at(e){return e.filter(e=>Number.isFinite(e.minimum)&&Number.isFinite(e.maximum)&&e.maximum>=e.minimum).sort((e,a)=>a.minimum-e.minimum||a.maximum-e.maximum)}let ar=[{id:"excellent",label:"Excellent",minimum:80,maximum:100,remark:"Excellent performance. Keep up the outstanding work."},{id:"very-good",label:"Very good",minimum:70,maximum:79.99,remark:"Very good performance. Continue working hard."},{id:"good",label:"Good",minimum:60,maximum:69.99,remark:"Good performance. Greater consistency will produce even better results."},{id:"satisfactory",label:"Satisfactory",minimum:50,maximum:59.99,remark:"Satisfactory performance. More focused effort is encouraged."},{id:"needs-improvement",label:"Needs improvement",minimum:0,maximum:49.99,remark:"Performance needs improvement. Work harder and seek support where necessary."}];function as(e){return null==e?"":String(e).trim()}function ai(e){return String(e||"").trim()}function ao(e,a){let t=as(e),r=as(a);return!!t&&!!r&&t===r}function an(){return{classTeacherRemark:"",headTeacherRemark:"",published:!1}}function ad(e,a,t){let r=ai(e);return(ai(r)?ai(r).split(/\s+/).length:0)>=4?r:aa(a,t)}function al(e,a=0){let t=Number(e);return Number.isFinite(t)?t:a}function ac(e,a){let t=e.computedReport;if("position"===a){let e=t?.overallPosition;return Number.isFinite(Number(e))?Number(e):void 0}if("attendance"===a){let e=t?.attendance?.attendancePercent;return Number.isFinite(Number(e))?Number(e):void 0}let r="total"===a?t?.total:t?.average;if(Number.isFinite(Number(r)))return Number(r);let s="total"===a?e.reportCard?.total:e.reportCard?.average;return Number.isFinite(Number(s))?Number(s):void 0}function ap(e,a){if(void 0!==e)return a.find(a=>e>=a.minimum&&e<=a.maximum)}function am(e,a,t,r){return`${e}:${a}:${t}:${r}`}async function au(e){return await (0,I.uJ)(e)||[]}function ab(e,a){if(!a)return"Not selected";let t=e.find(e=>e.id===a);return t?.name||t?.fullName||"Not found"}function ah(){let e=(0,d.f)(["students","classes","academicStructures","academicPeriods","studentEnrollments","classTeachers","reportCards","subjects","classSubjects","assessmentApplicabilities","assessmentStructures","assessmentStructureItems","assessmentEntries","gradingStructures","gradeRules","attendance","studentAttendanceSummaries","computedResults","reportCardItems","mediaAssets","mediaBlobs"]),{settings:a,loading:t}=(0,k.t)(),{activeSchool:i,activeBranch:o}=(0,j.c)(),l=(0,n.P)(),c=h(),p=c.teacherId,m=c.classTeacherClassIds,u=[...m].sort().join("|"),{accountId:b,schoolId:x,branchId:g,authenticated:v,restoring:y,branchLoading:w}=l,N=ai(a?.primaryColor)||"var(--primary-color, #2563eb)",{loading:C,setLoading:z}=(0,S.J)(),[M,A]=(0,s.useState)(""),[P,R]=(0,s.useState)(""),[B,$]=(0,s.useState)(""),D=[b,x,g,p,u].join(":"),[O,F]=(0,s.useState)(!1),[L,U]=(0,s.useState)([]),[_,W]=(0,s.useState)([]),[K,V]=(0,s.useState)([]),[G,q]=(0,s.useState)([]),[J,H]=(0,s.useState)([]),[Y,Z]=(0,s.useState)([]),[X,Q]=(0,s.useState)([]),[ee,ea]=(0,s.useState)([]),[et,er]=(0,s.useState)([]),[es,ei]=(0,s.useState)([]),[eo,en]=(0,s.useState)([]),[ed,el]=(0,s.useState)([]),[ec,ep]=(0,s.useState)([]),[em,eu]=(0,s.useState)([]),[eh,ex]=(0,s.useState)([]),[eg,ef]=(0,s.useState)([]),[ey,ew]=(0,s.useState)([]),[ek,ej]=(0,s.useState)([]),[eI,eS]=(0,s.useState)(as(a?.currentAcademicStructureId)||void 0),[eN,eC]=(0,s.useState)(as(a?.currentAcademicPeriodId)||void 0),[ez,eM]=(0,s.useState)(),[eA,eP]=(0,s.useState)(),[eE,eT]=(0,s.useState)("cards"),[eR,eB]=(0,s.useState)("class"),[e$,eD]=(0,s.useState)(!1),[eO,eF]=(0,s.useState)(!1),eL=(0,s.useRef)("");(0,s.useEffect)(()=>{eT(window.matchMedia("(min-width: 768px)").matches?"table":"cards")},[]);let[eU,e_]=(0,s.useState)("all"),[eW,eK]=(0,s.useState)(""),[eV,eG]=(0,s.useState)(!1),[eq,eJ]=(0,s.useState)(!1),[eH,eY]=(0,s.useState)({}),[eZ,eX]=(0,s.useState)(""),[eQ,e0]=(0,s.useState)(!1),[e1,e2]=(0,s.useState)(!1),[e4,e8]=(0,s.useState)("average"),e5="classTeacherRemark",[e3,e6]=(0,s.useState)(!1),[e9,e7]=(0,s.useState)(ar),[ae,ah]=(0,s.useState)({title:"Default percentage bands",detail:"Select a class and basis to derive bands from the reporting system."}),aI=(0,s.useRef)(""),aS=(0,s.useMemo)(()=>["eleeveon_report_remarks_basis_v1",b||"account",x||"school",g||"branch",p||"teacher"].join(":"),[g,x,b,p]);(0,s.useEffect)(()=>{try{let e=window.localStorage.getItem(aS);if(!e){e8("average"),e6(!1),e7(ar);return}let a=JSON.parse(e);e8("total"===a.metric||"position"===a.metric||"attendance"===a.metric?a.metric:"average"),e6(!!a.overwrite),e7(Array.isArray(a.rules)&&a.rules.length?a.rules.map((e,t)=>({id:ai(e.id)||`rule-${t+1}`,label:ai(e.label)||`Band ${t+1}`,minimum:al(e.minimum),maximum:al(e.maximum,100),remark:ad(e.remark,ai(e.label)||`Band ${t+1}`,"total"===a.metric||"position"===a.metric||"attendance"===a.metric?a.metric:"average")})):ar)}catch{e7(ar)}},[aS]),(0,s.useEffect)(()=>{try{window.localStorage.setItem(aS,JSON.stringify({metric:e4,overwrite:e3,rules:e9}))}catch{}},[e4,e3,e9,aS]);let aN=e=>{var a,t;return a=e.accountId,(!b||!a||String(a)===String(b))&&ao(e.schoolId,x)&&ao(e.branchId,g)&&!!(t=e)&&!0!==t.isDeleted&&!1!==t.active},aC=()=>{U([]),W([]),V([]),q([]),H([]),Z([]),Q([]),ea([]),er([]),ei([]),en([]),el([]),ep([]),eu([]),ex([]),ef([]),ew([]),ej([])},az=async()=>{if(!c.ready||!c.permitted||!v||!b||!x||!g||!p){aC(),A(""),z(!1);return}try{z(!0),R("");let e=await Promise.all([au("students"),au("classes"),au("academicStructures"),au("academicPeriods"),au("studentEnrollments"),au("reportCards"),au("subjects"),au("classSubjects"),au("assessmentApplicabilities"),au("assessmentStructures"),au("assessmentStructureItems"),au("assessmentEntries"),au("gradingStructures"),au("gradeRules"),au("attendance"),au("studentAttendanceSummaries"),au("computedResults"),au("reportCardItems")]),a=e[0],t=e[1],r=e[2],s=e[3],i=e[4],o=e[5],n=i.filter(e=>aN(e)&&m.has(as(e.classId))&&"withdrawn"!==e.status&&!1!==e.active),d=new Set(n.map(e=>as(e.studentId)));U(a.filter(e=>aN(e)&&"withdrawn"!==e.status&&d.has(as(e.id))).sort((e,a)=>ai(e.fullName).localeCompare(ai(a.fullName)))),W(t.filter(e=>aN(e)&&m.has(as(e.id))).sort((e,a)=>ai(e.name).localeCompare(ai(a.name)))),V(r.filter(e=>aN(e)).sort((e,a)=>ai(e.name).localeCompare(ai(a.name)))),q(s.filter(e=>aN(e)).sort((e,a)=>Number(e.order||0)-Number(a.order||0))),H(n),Z(o.filter(e=>aN(e)&&m.has(as(e.classId)))),Q(e[6].filter(e=>aN(e))),ea(e[7].filter(e=>aN(e))),er(e[8].filter(e=>aN(e))),ei(e[9].filter(e=>aN(e))),en(e[10].filter(e=>aN(e))),el(e[11].filter(e=>aN(e))),ep(e[12].filter(e=>aN(e))),eu(e[13].filter(e=>aN(e))),ex(e[14].filter(e=>aN(e))),ef(e[15].filter(e=>aN(e))),ew(e[16].filter(e=>aN(e))),ej(e[17].filter(e=>aN(e))),A(D)}catch(e){console.error("Failed to load teacher report remarks:",e),aC(),A(D),R("Could not load report remarks. Use More → Refresh to try again.")}finally{z(!1)}};(0,s.useEffect)(()=>{az()},[v,b,x,g,p,u,c.ready,c.permitted,e]);let aM=(0,s.useMemo)(()=>new Map(L.map(e=>[e.id,e])),[L]),aA=(0,s.useMemo)(()=>new Map(_.map(e=>[e.id,e])),[_]),aP=(0,s.useMemo)(()=>eI?G.filter(e=>ao(e.academicStructureId,eI)):G,[G,eI]),aE=(0,s.useMemo)(()=>{let e=new Set;return J.forEach(a=>{"withdrawn"===a.status||!m.has(as(a.classId))||eI&&!ao(a.academicStructureId,eI)||(!eN||ao(a.academicPeriodId,eN))&&a.classId&&e.add(a.classId)}),Y.forEach(a=>{!m.has(as(a.classId))||eI&&!ao(a.academicStructureId,eI)||(!eN||ao(a.academicPeriodId,eN))&&a.classId&&e.add(a.classId)}),e},[eN,eI,J,Y,m]),aT=(0,s.useMemo)(()=>eI||eN?_.filter(e=>m.has(as(e.id))&&aE.has(as(e.id))):_.filter(e=>m.has(as(e.id))),[eN,eI,aE,_,m]);(0,s.useEffect)(()=>{if(!c.ready||!D||!x||!g||!_.length||!G.length||!K.length||eL.current===D)return;let e=as(a?.currentAcademicStructureId),t=as(a?.currentAcademicPeriodId),r=new Map,s=(e,a)=>{let t=as(e.academicStructureId),s=as(e.academicPeriodId),i=as(e.classId);if(!t||!s||!i||!_.some(e=>ao(e.id,i))||!G.some(e=>ao(e.id,s)&&ao(e.academicStructureId,t)))return;let o=[t,s,i].join(":"),n=r.get(o)||{year:t,term:s,cls:i,reports:0,pupils:0};a?n.reports++:n.pupils++,r.set(o,n)};J.filter(e=>"withdrawn"!==e.status&&!0!==e.isDeleted).forEach(e=>s(e,!1)),Y.filter(e=>ai(e.classTeacherRemark)||ai(e.headTeacherRemark)).forEach(e=>s(e,!0));let i=[...r.values()].sort((a,r)=>Number(r.reports>0)-Number(a.reports>0)||r.reports-a.reports||r.pupils-a.pupils||Number(r.year===e&&r.term===t)-Number(a.year===e&&a.term===t)||a.cls.localeCompare(r.cls))[0];if(i)eS(i.year),eC(i.term),eM(i.cls);else{let a=K.find(a=>ao(a.id,e))||K[0],r=G.find(e=>ao(e.id,t)&&ao(e.academicStructureId,a.id))||G.find(e=>ao(e.academicStructureId,a.id));eS(as(a.id)||void 0),eC(as(r?.id)||void 0),eM(as(_[0]?.id)||void 0)}eL.current=D},[D,c.ready,_,G,K,J,Y,a?.currentAcademicStructureId,a?.currentAcademicPeriodId]);let aR=(0,E.D)({accountId:b,ownerTable:"students",rows:L,fields:[{fieldKey:"photo",mediaIdKey:"photoMediaId"}]}),aB=(0,s.useMemo)(()=>{let e=new Map;return Y.forEach(a=>{a.studentId&&a.classId&&a.academicStructureId&&a.academicPeriodId&&e.set(am(a.studentId,a.classId,a.academicStructureId,a.academicPeriodId),a)}),e},[Y]),a$=(0,s.useMemo)(()=>({schools:i?[i]:[],branches:o?[o]:[],schoolBranchSettings:a?[a]:[],academicStructures:K,academicPeriods:G,students:L,teachers:[],parents:[],studentParents:[],classes:_,subjects:X,classSubjects:ee,studentEnrollments:J,classTeachers:[],assessmentApplicabilities:et,assessmentStructures:es,assessmentStructureItems:eo,assessmentEntries:ed,gradingStructures:ec,gradeRules:em,attendance:eh,studentAttendanceSummaries:eg,computedResults:ey,reportCards:Y,reportCardItems:ek}),[o,i,G,K,et,ed,eo,es,eh,ee,_,ey,J,em,ec,ek,Y,a,eg,L,X]),aD=(0,s.useMemo)(()=>{if(!g||!eI||!eN)return[];let e="group"===eR?aT.map(e=>as(e.id)).filter(Boolean):ez?[ez]:[],a=[];for(let t of e){let e={branchId:g,academicStructureId:eI,academicPeriodId:eN,classId:t,sortMode:"position"};try{for(let r of(0,ev.Eh)(a$,e))a.push(Object.assign({},r,{_remarksClassId:t}))}catch(e){console.warn("Could not compute remarks for class",t,e)}}return a},[g,eI,eN,ez,eR,aT,a$]),aO=(0,s.useMemo)(()=>new Map(aD.map(e=>[`${as(e._remarksClassId)}:${as(e.studentId)}`,e])),[aD]),aF=(0,s.useMemo)(()=>{let e=aD.map(e=>e.subjectResults.length).filter(e=>e>0),t=e.length?Math.max(...e):ee.filter(e=>ao(e.classId,ez)&&!1!==e.active&&!0!==e.isDeleted).length,r=new Map;aD.forEach(e=>{e.subjectResults.forEach(e=>{let a=as(e.gradingStructureId);a&&r.set(a,(r.get(a)||0)+1)})});let s=[...r.entries()].sort((e,a)=>a[1]-e[1])[0]?.[0]||as(ec.find(e=>!0===e.default&&!1!==e.active)?.id)||as(ec.find(e=>!1!==e.active)?.id),i=ec.find(e=>ao(e.id,s)),o=em.filter(e=>ao(e.gradingStructureId,s)&&!1!==e.active&&!0!==e.isDeleted).sort((e,a)=>Number(a.minScore||0)-Number(e.minScore||0));if("average"===e4)return{rules:at(o.length?o.map((e,a)=>{let t=ai(e.grade)||ai(e.remark)||`Band ${a+1}`;return{id:as(e.id)||`average-${a}`,label:t,minimum:al(e.minScore),maximum:al(e.maxScore,100),remark:ad(e.remark,t,"average")}}):ar),source:{title:ai(i?.name)||"Default percentage grading",detail:o.length?`${o.length} grade bands from the active class grading configuration.`:"No active grading rules were found, so standard percentage bands are being used."},signature:["average",s,o.map(e=>[e.id,e.minScore,e.maxScore,e.grade,e.remark].join(":")).join("|")].join("::")};if("total"===e4){let e=Math.max(1,t),a=aD.map(e=>Number(e.total)).filter(e=>Number.isFinite(e)&&e>=0).reduce((e,a)=>Math.max(e,a),0),r=100*e,n=Math.max(r,a,100),d=n/100,l=o.length?o:ar.map(e=>({id:e.id,minScore:e.minimum,maxScore:e.maximum,grade:e.label,remark:e.remark}));return{rules:at(l.map((e,a)=>{let t=ai(e.grade)||ai(e.label)||`Band ${a+1}`;return{id:`total-${as(e.id)||a}`,label:t,minimum:Number((al(e.minScore??e.minimum)*d).toFixed(2)),maximum:Number((al(e.maxScore??e.maximum,100)*d).toFixed(2)),remark:ad(e.remark,t,"total")}})),source:{title:ai(i?.name)||"Percentage grading scaled to total",detail:`${e} active subject${1===e?"":"s"} give a configured maximum total of ${r}. ${a?`Current report data reaches ${Number(a.toFixed(2))}.`:"No computed total is available yet, so the configured class subject load is used."}`},signature:["total",s,e,n,l.map(e=>[e.id,e.minScore??e.minimum,e.maxScore??e.maximum,e.grade??e.label].join(":")).join("|")].join("::")}}if("position"===e4){let e=J.filter(e=>"withdrawn"!==e.status&&ao(e.academicStructureId,eI)&&ao(e.academicPeriodId,eN)&&ao(e.classId,ez)).length,a=Math.max(aD.length,e);if(!a)return{rules:[{id:"position-first",label:"1st position",minimum:1,maximum:1,remark:aa("1st position","position")}],source:{title:"Class position bands",detail:"Select a class with computed reports to derive position ranges."},signature:"position::0"};let t=[],r=(e,r,s,i,o=r)=>{s>a||i<s||t.push({id:e,label:r,minimum:s,maximum:Math.min(i,a),remark:aa(o,"position")})};r("position-first","1st position",1,1,"first"),r("position-top-three",a>=3?"2nd–3rd position":"2nd position",2,Math.min(3,a),"top");let s=Math.max(4,Math.ceil(.25*a));r("position-upper","Upper quarter",4,s,"upper");let i=Math.max(s+1,Math.ceil(.6*a));return r("position-middle","Middle group",s+1,i,"middle"),r("position-lower","Needs stronger position",i+1,a,"lower"),{rules:t,source:{title:"Actual class position distribution",detail:`${a} student${1===a?"":"s"} with positions assigned by the report engine from computed averages.`},signature:`position::${a}`}}let n=[a?.minimumAttendancePercentage,a?.requiredAttendancePercentage,a?.attendanceTargetPercentage,a?.attendancePassPercentage].map(e=>Number(e)).find(e=>Number.isFinite(e)),d=Math.min(100,Math.max(1,n??75)),l=Math.max(d,90),c=Math.max(d,Math.min(l-1,80)),p=Math.min(c-1,d);return{rules:at([{id:"attendance-excellent",label:"Excellent attendance",minimum:l,maximum:100,remark:aa("excellent","attendance")},{id:"attendance-good",label:"Good attendance",minimum:c,maximum:l-.01,remark:aa("good","attendance")},{id:"attendance-satisfactory",label:"Satisfactory attendance",minimum:p,maximum:c-.01,remark:aa("satisfactory","attendance")},{id:"attendance-poor",label:"Attendance needs improvement",minimum:0,maximum:p-.01,remark:aa("needs improvement","attendance")}]),source:{title:void 0!==n?"School attendance configuration":"Report attendance percentage",detail:void 0!==n?`The school attendance expectation is ${d}%. Bands were generated around this configured threshold.`:"No school attendance threshold was found, so the report engine’s percentage is grouped around a 75% minimum expectation."},signature:["attendance",d].join("::")}},[e4,ez,ee,aD,em,ec,a,eN,eI,J]);(0,s.useEffect)(()=>{!aF.signature||aI.current===aF.signature&&e9.length>0||(aI.current=aF.signature,e7(aF.rules),ah(aF.source))},[aF,e9.length]);let aL=(0,s.useMemo)(()=>{if(!eI||!eN||"class"===eR&&!ez)return[];let e=new Set;return J.filter(e=>"withdrawn"!==e.status&&m.has(as(e.classId))&&ao(e.academicStructureId,eI)&&ao(e.academicPeriodId,eN)&&("group"===eR||ao(e.classId,ez))).map(a=>{let t=aM.get(a.studentId);if(!t?.id)return;let r=am(t.id,a.classId,a.academicStructureId,a.academicPeriodId),s=aB.get(r),i=aO.get(`${as(a.classId)}:${as(t.id)}`),o=am(t.id,a.classId,a.academicStructureId,a.academicPeriodId);if(e.has(o))return;e.add(o);let n=eH[o]||{reportCardId:s?.id,classTeacherRemark:s?.classTeacherRemark||"",headTeacherRemark:s?.headTeacherRemark||"",published:!!s?.published};return{student:t,enrollment:a,reportCard:s,computedReport:i,draft:n,rowKey:o}}).filter(Boolean)},[eN,eI,ez,eR,eH,aO,J,aB,aM,m]),aU=(0,s.useMemo)(()=>{let e=eW.trim().toLowerCase();return aL.filter(a=>{let t=!!a.draft.classTeacherRemark.trim();return("missing"!==eU||!t)&&("complete"!==eU||!!t)&&("published"!==eU||!!a.draft.published)&&("unpublished"!==eU||!a.draft.published)&&(!e||`${a.student.fullName||""} ${a.student.admissionNumber||""}`.toLowerCase().includes(e))}).sort((e,a)=>ai(e.student.fullName).localeCompare(ai(a.student.fullName)))},[aL,eW,eU]),a_=(0,s.useMemo)(()=>aL.find(e=>e.student.id===eA)||aU[0],[eA,aL,aU]);(0,s.useEffect)(()=>{eI&&eN?eY(e=>{let a={};return aL.forEach(t=>{a[t.rowKey]=e$&&e[t.rowKey]?e[t.rowKey]:{reportCardId:t.reportCard?.id,classTeacherRemark:t.reportCard?.classTeacherRemark||"",headTeacherRemark:t.reportCard?.headTeacherRemark||"",published:!!t.reportCard?.published}}),a}):eY({})},[eI,eN,ez,eR,Y]);let aW=(0,s.useMemo)(()=>{let e=aL.length,a=aL.filter(e=>!!e.draft.classTeacherRemark.trim()).length,t=aL.filter(e=>!!e.draft.headTeacherRemark.trim()).length,r=aL.filter(e=>!!e.draft.classTeacherRemark.trim()).length,s=aL.filter(e=>e.draft.published).length,i=Math.max(0,e-r),o=e?Math.round(r/e*100):0;return{total:e,classRemarked:a,headRemarked:t,complete:r,published:s,missing:i,completion:o}},[aL]);(0,s.useMemo)(()=>[eI,eN,ez,"group"===eR?"group":void 0,"all"!==eU?eU:void 0].filter(Boolean).length,[eN,eI,ez,eU,eR]),ab(K,eI);let aK=ab(G,eN),aV=ab(_,ez);ab(L,eA),i?.name,o?.name;let aG=(e,a)=>{eY(t=>({...t,[e]:{...t[e]||an(),...a}}))},aq=e=>{let a="selected"===e?a_?[a_]:[]:aU;if(!a.length)return alert("selected"===e?"Select a student first.":"No students match the current filters.");let t={...eH},r=0,s=0,i=0,o=0;a.forEach(e=>{let a=e.rowKey;if(!a)return;let n=ac(e,e4);if(void 0===n){s+=1;return}let d=ap(n,e9);if(!d?.remark.trim()){i+=1;return}let l=t[a]||e.draft||an();if(!e3&&ai(l[e5])){o+=1;return}t[a]={...l,[e5]:d.remark.trim()},r+=1}),eY(t),alert([`${r} remark${1===r?"":"s"} applied.`,s?`${s} without a computed ${e4} value.`:"",i?`${i} without a matching completed band.`:"",o?`${o} kept because overwrite is off.`:""].filter(Boolean).join(" "))},aJ=e=>ai((eH[e.rowKey]||e.draft).classTeacherRemark)!==ai(e.reportCard?.classTeacherRemark),aH=aL.filter(aJ).length,aY=()=>{(!e$||!aH||window.confirm("You have unsaved remarks. Discard these changes and change the report filters?"))&&(eD(!1),eG(!0))},aZ=async e=>{if(!c.ready||!c.permitted||!p||!v||!b||!x||!g)return void $("An authorized teacher workspace is required.");if(!eI||!eN)return void $("Select an academic year and term.");let a=e.filter(aJ);if(!a.length)return void eD(!1);try{for(let e of(F(!0),a)){let a=as(e.student.id),t=as(e.enrollment.classId);if(!a||!t||!m.has(t))throw Error("The selected student is outside your assigned classes.");if(!await f({accountId:b,schoolId:x,branchId:g,teacherId:p},t))throw Error("Class-teacher assignment has changed. Reload Remarks.");if(!(await au("studentEnrollments")).some(e=>aN(e)&&ao(e.studentId,a)&&ao(e.classId,t)&&ao(e.academicStructureId,eI)&&ao(e.academicPeriodId,eN)&&"withdrawn"!==e.status))throw Error("Student enrollment changed. Refresh before saving.");let r=ai((eH[e.rowKey]||e.draft).classTeacherRemark),s=(await au("reportCards")).find(e=>aN(e)&&ao(e.studentId,a)&&ao(e.classId,t)&&ao(e.academicStructureId,eI)&&ao(e.academicPeriodId,eN));s?.id?await (0,I.Po)("reportCards",String(s.id),{classTeacherRemark:r||void 0}):r&&await (0,I.oJ)("reportCards",{accountId:b,schoolId:x,branchId:g,studentId:a,classId:t,academicStructureId:eI,academicPeriodId:eN,total:Number(e.computedReport?.total||0),average:Number(e.computedReport?.average||0),classTeacherRemark:r})}eD(!1),$(`Saved ${a.length} class-teacher remark${1===a.length?"":"s"}.`),await az()}catch(e){console.error("Failed to save teacher report remarks:",e),$(e instanceof Error?e.message:"Could not save all remarks. Review and retry.")}finally{F(!1)}};(0,T.TV)("reportsWorkspace",{add:()=>{eD(!0),e2(!0)},search:eK,filter:aY,more:()=>eJ(!0)});let aX=eL.current===D||!_.length||!G.length||!K.length;return y||w||t||!c.ready?(0,r.jsx)(ax,{primary:N,title:"Opening report remarks...",text:"Checking teacher membership and assigned classes."}):v&&b?x&&g&&c.permitted?C||M!==D||!aX?(0,r.jsx)(ax,{primary:N,title:"Opening report remarks...",text:"Loading assigned students, classes and report cards."}):P?(0,r.jsx)(ax,{primary:N,spin:!1,title:"Remarks unavailable",text:P}):m.size?(0,r.jsxs)("main",{className:`ba-page report-remarks-page ${"cards"===eE?"rr-force-cards":"table"===eE?"rr-force-table":""}`,style:{"--ba-primary":N,"--primary-color":N},children:[(0,r.jsx)("style",{children:aj}),B&&(0,r.jsxs)("div",{className:"rr-teacher-notice",role:"status",children:[B,(0,r.jsx)("button",{type:"button","aria-label":"Dismiss",onClick:()=>$(""),children:"\xd7"})]}),(0,r.jsxs)("header",{className:"rr-command-row report-no-print",children:[(0,r.jsxs)("button",{type:"button",className:"rr-context",onClick:aY,"aria-label":"Choose group, class and term",children:[(0,r.jsx)("strong",{children:"group"===eR?"All classes":aV}),(0,r.jsxs)("span",{children:[aK," \xb7 ",aU.length," shown"]}),(0,r.jsx)("i",{"aria-hidden":"true",children:"⌄"})]}),(0,r.jsxs)("span",{className:"rr-count",title:"Completed remarks",children:[aW.complete,"/",aW.total]}),(0,r.jsx)("button",{type:"button",className:"rr-primary",onClick:e$?()=>void aZ(aL):()=>eD(!0),disabled:O||!e$&&!aL.length,children:O?"Saving…":e$?`Save${aH?` (${aH})`:""}`:"Start"}),e$&&(0,r.jsx)("button",{type:"button",className:"rr-secondary",onClick:()=>{(!aH||window.confirm("Discard unsaved remark changes?"))&&(eY(Object.fromEntries(aL.map(e=>[e.rowKey,{reportCardId:e.reportCard?.id,classTeacherRemark:e.reportCard?.classTeacherRemark||"",headTeacherRemark:e.reportCard?.headTeacherRemark||"",published:!!e.reportCard?.published}]))),eD(!1))},children:"Cancel"})]}),"analytics"===eE?(0,r.jsx)("section",{className:"rr-analytics",children:[["Students",aW.total],["Class remarks",aW.classRemarked],["Complete",aW.complete],["Missing",aW.missing],["Published",aW.published],["Completion",`${aW.completion}%`]].map(([e,a])=>(0,r.jsxs)("article",{children:[(0,r.jsx)("small",{children:e}),(0,r.jsx)("strong",{children:a})]},e))}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"rr-table-wrap",children:(0,r.jsxs)("table",{className:"rr-table","aria-label":"Report remarks for students",children:[(0,r.jsxs)("colgroup",{children:[(0,r.jsx)("col",{className:"rr-col-student"}),(0,r.jsx)("col",{className:"rr-col-basis"}),(0,r.jsx)("col",{}),(0,r.jsx)("col",{}),(0,r.jsx)("col",{className:"rr-col-status"})]}),(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Student"}),(0,r.jsx)("th",{children:"Basis"}),(0,r.jsx)("th",{children:"Class teacher remark"}),(0,r.jsx)("th",{children:"Headteacher remark \xb7 view only"}),(0,r.jsx)("th",{children:"Status"})]})}),(0,r.jsx)("tbody",{children:aU.map(e=>{let a=e.rowKey,t=eH[a]||e.draft,s=ac(e,e4),i=ap(s,e9);return(0,r.jsxs)("tr",{className:eA===e.student.id?"rr-row-selected":"",children:[(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"rr-person",children:[(0,r.jsx)(ag,{student:e.student,photo:aR[as(e.student.id)]?.photo}),(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{type:"button",className:"rr-select-student",title:"Select student for remarks basis",onClick:()=>eP(as(e.student.id)),children:e.student.fullName||"Unnamed student"}),(0,r.jsxs)("small",{children:[e.student.admissionNumber||"No ID"," \xb7 ",aA.get(e.enrollment.classId)?.name||"Class"]})]})]})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("span",{className:"rr-basis-value",children:void 0===s?"—":`${Number(s.toFixed(1))}${"attendance"===e4?"%":""}`}),(0,r.jsx)("small",{children:i?.label||e4})]}),(0,r.jsx)("td",{children:(0,r.jsx)("textarea",{"aria-label":`Class teacher remark for ${e.student.fullName}`,rows:2,readOnly:!e$,value:t.classTeacherRemark,onChange:e=>aG(a,{classTeacherRemark:e.target.value}),placeholder:e$?"Enter class teacher remark":"—"})}),(0,r.jsx)("td",{children:(0,r.jsx)("p",{className:"rr-teacher-readonly","aria-label":`Headteacher remark for ${e.student.fullName}`,children:e.reportCard?.headTeacherRemark||"—"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("span",{className:"rr-teacher-publication",children:e.reportCard?.published?"Published":"Unpublished"}),(0,r.jsx)("span",{className:`rr-state ${t.classTeacherRemark.trim()?"ready":"missing"}`,children:t.classTeacherRemark.trim()?aJ(e)?"Ready to save":"Remark saved":"Missing remark"})]})]},a)})})]})}),(0,r.jsx)("section",{className:"rr-mobile-cards","aria-label":"Student remarks cards",children:aU.map(e=>{let a=e.rowKey,t=eH[a]||e.draft,s=ac(e,e4),i=ap(s,e9);return(0,r.jsxs)("article",{className:`rr-card ${eA===e.student.id?"rr-row-selected":""}`,children:[(0,r.jsxs)("div",{className:"rr-card-head",children:[(0,r.jsx)(ag,{student:e.student,photo:aR[as(e.student.id)]?.photo}),(0,r.jsxs)("div",{className:"rr-card-person",children:[(0,r.jsx)("button",{type:"button",className:"rr-select-student",title:"Select student for remarks basis",onClick:()=>eP(as(e.student.id)),children:e.student.fullName||"Unnamed student"}),(0,r.jsxs)("small",{children:[e.student.admissionNumber||"No ID"," \xb7 ",aA.get(e.enrollment.classId)?.name||"Class"]})]}),(0,r.jsxs)("span",{className:"rr-card-basis",title:`Based on ${e4}`,children:[void 0===s?"—":Number(s.toFixed(1)),"attendance"===e4&&void 0!==s?"%":"",(0,r.jsx)("small",{children:i?.label||e4})]})]}),(0,r.jsxs)("div",{className:"rr-card-fields",children:[(0,r.jsxs)("label",{children:["Class teacher",(0,r.jsx)("textarea",{rows:2,readOnly:!e$,value:t.classTeacherRemark,placeholder:e$?"Write a remark…":"—",onChange:e=>aG(a,{classTeacherRemark:e.target.value})})]}),(0,r.jsxs)("label",{children:["Headteacher \xb7 view only ",(0,r.jsx)("p",{className:"rr-teacher-readonly",children:e.reportCard?.headTeacherRemark||"—"})]})]}),(0,r.jsxs)("div",{className:"rr-card-foot",children:[(0,r.jsx)("span",{className:`rr-state ${t.classTeacherRemark.trim()?"ready":"missing"}`,children:t.classTeacherRemark.trim()?aJ(e)?"Ready to save":"Remark saved":"Missing remark"}),(0,r.jsx)("span",{className:"rr-teacher-publication",children:e.reportCard?.published?"Published":"Unpublished"})]})]},a)})})]}),!aL.length&&(0,r.jsx)(ak,{text:"There are no enrolled students for this class or term. Use Filter to choose another class/group."}),aL.length>0&&!aU.length&&(0,r.jsx)(ak,{text:"No students match the current search and status filters."}),eV&&(0,r.jsx)(eb.A,{themeSourceClass:".report-remarks-page",onEscape:()=>eG(!1),children:(0,r.jsx)(af,{viewMode:eE,setViewMode:eT,scopeMode:eR,setScopeMode:e=>{eB(e),eD(!1)},remarkFilter:eU,setRemarkFilter:e_,academicStructureId:eI,setAcademicStructureId:eS,academicPeriodId:eN,setAcademicPeriodId:eC,classId:ez,setClassId:eM,studentId:eA,setStudentId:eP,academicStructures:K,academicPeriods:aP,classes:aT,students:aL.map(e=>e.student),search:eW,setSearch:eK,onClose:()=>eG(!1)})}),e1&&(0,r.jsx)(eb.A,{themeSourceClass:".report-remarks-page",onEscape:()=>e2(!1),children:(0,r.jsx)(av,{metric:e4,setMetric:e=>{aI.current="",e8(e),e7([]),ah({title:"Updating remarks basis…",detail:"Recalculating minimum and maximum bands from the selected class and reporting system."})},overwrite:e3,setOverwrite:e6,rules:e9,source:ae,updateRule:(e,a)=>{e7(t=>t.map(t=>t.id===e?{...t,...a}:t))},addRule:()=>{e7(e=>[...e,{id:`custom-${Date.now()}`,label:`Band ${e.length+1}`,minimum:0,maximum:100,remark:""}])},removeRule:e=>{e7(a=>a.length<=1?a:a.filter(a=>a.id!==e))},selectedRow:a_,shownCount:aU.length,applySelected:()=>{aq("selected"),eD(!0),e2(!1)},applyShown:()=>{aq("shown"),eD(!0),e2(!1)},resetRules:()=>{aI.current="",e7(aF.rules),ah(aF.source)},onClose:()=>e2(!1)})}),eO&&(0,r.jsx)(eb.A,{themeSourceClass:".report-remarks-page",onEscape:()=>eF(!1),children:(0,r.jsx)(ay,{classRemark:eZ,setClassRemark:eX,overwrite:eQ,setOverwrite:e0,shownCount:aU.length,onApply:()=>{aU.length?eZ.trim()?(eY(e=>{let a={...e};return aU.forEach(e=>{let t=a[e.rowKey]||e.draft||an();a[e.rowKey]={...t,classTeacherRemark:eQ||!t.classTeacherRemark.trim()?eZ.trim():t.classTeacherRemark}}),a}),eD(!0),$("Class-teacher remarks applied. Select Save to keep your changes.")):$("Enter a class-teacher remark first."):$("No students match the current filters."),eD(!0),eF(!1)},onClose:()=>eF(!1)})}),eq&&(0,r.jsx)(eb.A,{themeSourceClass:".report-remarks-page",onEscape:()=>eJ(!1),children:(0,r.jsx)(aw,{onRefresh:async()=>{eJ(!1),await az()},onCards:()=>{eT("cards"),eJ(!1)},onTable:()=>{eT("table"),eJ(!1)},onAnalytics:()=>{eT("analytics"),eJ(!1)},onBulk:()=>{eJ(!1),eF(!0)},onRemarksBasis:()=>{eJ(!1),eD(!0),e2(!0)},onClose:()=>eJ(!1)})})]}):(0,r.jsx)(ax,{primary:N,spin:!1,title:"No class-teacher assignment",text:"Only class teachers can enter report remarks. Ask a school administrator to assign your class."}):(0,r.jsx)(ax,{primary:N,spin:!1,title:"Teacher workspace required",text:"Open Reports through a linked teacher membership in the correct school branch."}):(0,r.jsx)(ax,{primary:N,spin:!1,title:"Sign in required",text:"Sign in before entering class-teacher remarks."})}function ax({primary:e,title:a,text:t,spin:s=!0}){return(0,r.jsxs)("main",{className:"ba-page",style:{"--ba-primary":e,"--primary-color":e},children:[(0,r.jsx)("style",{children:aj}),(0,r.jsxs)("section",{className:"ba-state",children:[s&&(0,r.jsx)("div",{className:"ba-spinner"}),(0,r.jsx)("h2",{children:a}),(0,r.jsx)("p",{children:t})]})]})}function ag({student:e,photo:a}){let t=ai(e.fullName),i=ai(e.photo),o=e=>e.startsWith("https://")||e.startsWith("http://")||e.startsWith("blob:")||e.startsWith("data:image/"),n=(a&&o(a)?a:"")||(o(i)?i:""),[d,l]=(0,s.useState)(!1);return(0,s.useEffect)(()=>l(!1),[n]),(0,r.jsx)("span",{className:"rr-avatar","aria-label":`${t} photograph`,children:n&&!d?(0,r.jsx)("img",{src:n,alt:t,onError:()=>l(!0)}):(0,r.jsx)("b",{"aria-hidden":"true",children:t.slice(0,1).toUpperCase()||"S"})})}function af(e){return(0,r.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"ba-sheet",children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Filters"}),(0,r.jsx)("p",{children:"Choose the report remarks scope. School and branch stay locked."})]}),(0,r.jsx)("button",{type:"button",onClick:e.onClose,"aria-label":"Close filters",children:"✕"})]}),(0,r.jsxs)("div",{className:"ba-form",children:[(0,r.jsxs)("label",{className:"ba-v4-find",children:[(0,r.jsx)("span",{children:"Search students"}),(0,r.jsx)("input",{type:"search",value:e.search,onChange:a=>e.setSearch(a.target.value),placeholder:"Name or admission number"})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Students"}),(0,r.jsxs)("select",{value:e.scopeMode,onChange:a=>e.setScopeMode(a.target.value),children:[(0,r.jsx)("option",{value:"class",children:"One class"}),(0,r.jsx)("option",{value:"group",children:"Group \xb7 all classes in this term"})]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Academic Structure"}),(0,r.jsxs)("select",{value:e.academicStructureId||"",onChange:a=>{e.setAcademicStructureId(as(a.target.value)||void 0),e.setAcademicPeriodId(void 0),e.setClassId(void 0),e.setStudentId(void 0)},children:[(0,r.jsx)("option",{value:"",children:"Select structure"}),e.academicStructures.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Academic Period"}),(0,r.jsxs)("select",{value:e.academicPeriodId||"",onChange:a=>{e.setAcademicPeriodId(as(a.target.value)||void 0),e.setClassId(void 0),e.setStudentId(void 0)},children:[(0,r.jsx)("option",{value:"",children:"Select period"}),e.academicPeriods.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),"class"===e.scopeMode&&(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Class"}),(0,r.jsxs)("select",{value:e.classId||"",onChange:a=>{e.setClassId(as(a.target.value)||void 0),e.setStudentId(void 0)},children:[(0,r.jsx)("option",{value:"",children:"Select class"}),e.classes.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Remark Filter"}),(0,r.jsxs)("select",{value:e.remarkFilter,onChange:a=>e.setRemarkFilter(a.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All remarks"}),(0,r.jsx)("option",{value:"missing",children:"Missing remarks"}),(0,r.jsx)("option",{value:"complete",children:"Complete remarks"}),(0,r.jsx)("option",{value:"published",children:"Published"}),(0,r.jsx)("option",{value:"unpublished",children:"Unpublished"})]})]})]}),(0,r.jsxs)("div",{className:"ba-sheet-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>{e.setAcademicStructureId(void 0),e.setAcademicPeriodId(void 0),e.setClassId(void 0),e.setStudentId(void 0),e.setRemarkFilter("all")},children:"Clear"}),(0,r.jsx)("button",{type:"button",className:"primary",onClick:e.onClose,children:"Apply"})]})]})})}function av({metric:e,setMetric:a,overwrite:t,setOverwrite:s,rules:i,source:o,updateRule:n,addRule:d,removeRule:l,selectedRow:c,shownCount:p,applySelected:m,applyShown:u,resetRules:b,onClose:h}){return(0,r.jsx)("div",{className:"ba-sheet-backdrop ba-basis-backdrop portal-contained-modal",role:"dialog","aria-modal":"true","aria-label":"Remarks basis",children:(0,r.jsxs)("section",{className:"ba-sheet ba-basis-sheet rr-basis-modal",children:[(0,r.jsxs)("header",{className:"ba-sheet-head rr-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Remarks basis"}),(0,r.jsxs)("p",{children:[o.title," \xb7 ",i.length," bands"]})]}),(0,r.jsx)("button",{type:"button","aria-label":"Close remarks basis",onClick:h,children:"✕"})]}),(0,r.jsxs)("div",{className:"rr-basis-config",children:[(0,r.jsxs)("label",{children:["Use scores from",(0,r.jsxs)("select",{value:e,onChange:e=>a(e.target.value),children:[(0,r.jsx)("option",{value:"average",children:"Average"}),(0,r.jsx)("option",{value:"total",children:"Total"}),(0,r.jsx)("option",{value:"position",children:"Class position"}),(0,r.jsx)("option",{value:"attendance",children:"Attendance"})]})]}),(0,r.jsxs)("div",{className:"rr-basis-locked",children:[(0,r.jsx)("strong",{children:"For"}),(0,r.jsx)("span",{children:"Class teacher remarks only"})]}),(0,r.jsxs)("label",{className:"rr-check",children:[(0,r.jsx)("input",{type:"checkbox",checked:t,onChange:e=>s(e.target.checked)}),"Overwrite existing"]})]}),(0,r.jsxs)("p",{className:"rr-source-note",children:[o.detail," ",c?`Selected: ${c.student.fullName}.`:""]}),(0,r.jsx)("section",{className:"rr-basis-list","aria-label":"Remark bands",children:i.map((e,a)=>(0,r.jsxs)("details",{className:"rr-band",children:[(0,r.jsxs)("summary",{children:[(0,r.jsx)("strong",{children:e.label||`Band ${a+1}`}),(0,r.jsxs)("small",{children:[e.minimum,"–",e.maximum," \xb7 ",e.remark||"No remark yet"]}),(0,r.jsx)("span",{"aria-hidden":"true",children:"⌄"})]}),(0,r.jsxs)("div",{className:"rr-band-body",children:[(0,r.jsxs)("label",{children:["Label",(0,r.jsx)("input",{value:e.label,onChange:a=>n(e.id,{label:a.target.value})})]}),(0,r.jsxs)("div",{className:"rr-band-numbers",children:[(0,r.jsxs)("label",{children:["Minimum",(0,r.jsx)("input",{type:"number",value:e.minimum,onChange:a=>n(e.id,{minimum:al(a.target.value)})})]}),(0,r.jsxs)("label",{children:["Maximum",(0,r.jsx)("input",{type:"number",value:e.maximum,onChange:a=>n(e.id,{maximum:al(a.target.value,100)})})]})]}),(0,r.jsxs)("label",{children:["Remark",(0,r.jsx)("textarea",{rows:2,value:e.remark,onChange:a=>n(e.id,{remark:a.target.value})})]}),(0,r.jsx)("button",{type:"button",className:"rr-link",disabled:i.length<=1,onClick:()=>l(e.id),children:"Remove band"})]})]},e.id))}),(0,r.jsxs)("div",{className:"rr-basis-utils",children:[(0,r.jsx)("button",{type:"button",onClick:d,children:"+ Add band"}),(0,r.jsx)("button",{type:"button",onClick:b,children:"Recalculate bands"})]}),(0,r.jsxs)("footer",{className:"rr-modal-actions",children:[(0,r.jsx)("button",{type:"button",onClick:h,children:"Close"}),(0,r.jsx)("button",{type:"button",onClick:m,disabled:!c,children:"Apply selected"}),(0,r.jsxs)("button",{type:"button",className:"primary",onClick:u,disabled:!p,children:["Apply to ",p," shown"]})]})]})})}function ay({classRemark:e,setClassRemark:a,overwrite:t,setOverwrite:s,shownCount:i,onApply:o,onClose:n}){return(0,r.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"ba-sheet small rr-bulk-modal",children:[(0,r.jsxs)("header",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Group remarks"}),(0,r.jsxs)("p",{children:["Apply class-teacher remarks to ",i," shown students."]})]}),(0,r.jsx)("button",{type:"button","aria-label":"Close group remarks",onClick:n,children:"✕"})]}),(0,r.jsxs)("div",{className:"ba-form",children:[(0,r.jsxs)("label",{children:["Class teacher",(0,r.jsx)("textarea",{rows:3,value:e,onChange:e=>a(e.target.value)})]}),(0,r.jsxs)("label",{className:"rr-check",children:[(0,r.jsx)("input",{type:"checkbox",checked:t,onChange:e=>s(e.target.checked)}),"Overwrite existing text"]})]}),(0,r.jsxs)("footer",{className:"rr-modal-actions",children:[(0,r.jsx)("button",{type:"button",onClick:n,children:"Cancel"}),(0,r.jsx)("button",{type:"button",className:"primary",disabled:!i,onClick:o,children:"Apply to shown"})]})]})})}function aw({onRefresh:e,onCards:a,onTable:t,onAnalytics:s,onBulk:i,onRemarksBasis:o,onClose:n}){return(0,r.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"ba-sheet small",children:[(0,r.jsxs)("header",{className:"ba-sheet-head",children:[(0,r.jsx)("h2",{children:"More"}),(0,r.jsx)("button",{type:"button",onClick:n,"aria-label":"Close menu",children:"✕"})]}),(0,r.jsxs)("div",{className:"ba-menu-list",children:[(0,r.jsxs)("button",{type:"button",onClick:a,children:[(0,r.jsx)("span",{children:"▦"}),(0,r.jsx)("b",{children:"Cards"}),(0,r.jsx)("small",{children:"Compact mobile-friendly rows"})]}),(0,r.jsxs)("button",{type:"button",onClick:t,children:[(0,r.jsx)("span",{children:"▤"}),(0,r.jsx)("b",{children:"Table"}),(0,r.jsx)("small",{children:"Editable desktop-style list"})]}),(0,r.jsxs)("button",{type:"button",onClick:s,children:[(0,r.jsx)("span",{children:"◫"}),(0,r.jsx)("b",{children:"Analytics"}),(0,r.jsx)("small",{children:"Remarks completion statistics"})]}),(0,r.jsxs)("button",{type:"button",onClick:i,children:[(0,r.jsx)("span",{children:"\uD83D\uDC65"}),(0,r.jsx)("b",{children:"Group remark entry"}),(0,r.jsx)("small",{children:"Apply one remark to many students"})]}),(0,r.jsxs)("button",{type:"button",onClick:o,children:[(0,r.jsx)("span",{children:"∑"}),(0,r.jsx)("b",{children:"Remarks basis"}),(0,r.jsx)("small",{children:"Generate from grades or attendance"})]}),(0,r.jsxs)("button",{type:"button",onClick:e,children:[(0,r.jsx)("span",{children:"↻"}),(0,r.jsx)("b",{children:"Refresh"}),(0,r.jsx)("small",{children:"Reload saved local records"})]})]})]})})}function ak({text:e}){return(0,r.jsxs)("section",{className:"ba-empty",children:[(0,r.jsx)("div",{className:"ba-empty-icon",children:"\uD83D\uDCAC"}),(0,r.jsx)("h3",{children:"No remarks loaded"}),(0,r.jsx)("p",{children:e})]})}let aj=`
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

.ba-page textarea {
  min-height: 96px;
  padding: 12px;
  resize: vertical;
  line-height: 1.55;
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
.ba-empty,
.ba-sheet,
.ba-remark-card,
.ba-student-row {
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

.ba-state h2 { margin: 0; font-size: 22px; font-weight: 1000; letter-spacing: -.04em; }
.ba-state p { max-width: 34rem; margin: 0; color: var(--muted,#64748b); font-size: 13px; line-height: 1.6; }

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

.ba-search span { color: var(--muted,#64748b); font-size: 17px; font-weight: 1000; }
.ba-search input { min-height: 42px; border: 0; padding: 0; border-radius: 0; background: transparent; box-shadow: none; font-size: 14px; }

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
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
  font-size: 20px;
  box-shadow: 0 12px 28px color-mix(in srgb, var(--ba-primary) 22%, transparent);
}

.ba-add-inline:disabled { opacity: .65; cursor: not-allowed; }

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

.ba-filter-button.active { background: var(--ba-primary); color: #fff; border-color: var(--ba-primary); }

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

.ba-filter-chips {
  display: flex;
  gap: 7px;
  overflow-x: auto;
  padding: 8px 1px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.ba-filter-chips::-webkit-scrollbar { display: none; }
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

.ba-summary-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
  padding: 10px 12px;
  border-radius: 20px;
}
.ba-summary-line div { display: flex; align-items: baseline; gap: 6px; min-width: 0; }
.ba-summary-line strong { font-size: 21px; font-weight: 1000; letter-spacing: -.05em; }
.ba-summary-line span, .ba-summary-line p { color: var(--muted,#64748b); font-size: 12px; font-weight: 850; }
.ba-summary-line p { margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.ba-list { display: grid; gap: 7px; margin-top: 10px; }

.ba-student-row {
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
.ba-student-row:hover, .ba-student-row.active {
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
  background: var(--ba-primary);
  font-size: 17px;
  font-weight: 1000;
  box-shadow: 0 12px 24px rgba(15,23,42,.12);
}
.ba-student-main, .ba-student-main strong, .ba-student-main small, .ba-student-main em {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ba-student-main strong { color: var(--text,#111827); font-size: 14px; font-weight: 1000; letter-spacing: -.02em; }
.ba-student-main small { margin-top: 3px; color: var(--muted,#64748b); font-size: 12px; font-weight: 850; font-style: normal; }
.ba-student-main em { margin-top: 3px; color: color-mix(in srgb, var(--muted,#64748b) 86%, var(--text,#111827)); font-size: 11px; font-weight: 750; font-style: normal; }
.ba-student-side { display: grid; justify-items: end; gap: 6px; flex: 0 0 auto; }
.ba-student-side i { color: var(--muted,#64748b); font-style: normal; font-size: 18px; font-weight: 1000; line-height: 1; }

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

.ba-remark-card {
  display: grid;
  gap: 10px;
  margin-top: 10px;
  padding: 12px;
  border-radius: 24px;
}
.ba-remark-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; }
.ba-remark-head h3 { margin: 0; color: var(--text,#111827); font-size: 16px; font-weight: 1000; letter-spacing: -.04em; }
.ba-remark-head p { margin: 3px 0 0; color: var(--muted,#64748b); font-size: 12px; font-weight: 800; }
.ba-remark-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 9px; }
.ba-remark-field { display: grid; gap: 6px; }
.ba-remark-field span { display: flex; justify-content: space-between; gap: 8px; color: var(--muted,#64748b); font-size: 11px; font-weight: 950; text-transform: uppercase; letter-spacing: .06em; }
.ba-publish-line {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 38px;
  padding: 9px 11px;
  border-radius: 16px;
  background: color-mix(in srgb, var(--muted,#64748b) 8%, transparent);
  border: 1px solid var(--border,rgba(0,0,0,.08));
  color: var(--text,#111827);
  font-size: 12px;
  font-weight: 900;
}
.ba-publish-line input { width: 16px; min-height: 16px; }

.ba-empty {
  display: grid;
  place-items: center;
  align-content: center;
  gap: 8px;
  min-height: 210px;
  margin-top: 10px;
  padding: 22px;
  border-radius: 24px;
  border-style: dashed;
  text-align: center;
}
.ba-empty-icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: color-mix(in srgb, var(--ba-primary) 12%, var(--surface,#fff));
  font-size: 28px;
}
.ba-empty h3 { margin: 0; font-size: 18px; font-weight: 1000; }
.ba-empty p { margin: 0; color: var(--muted,#64748b); font-size: 13px; line-height: 1.6; }

.ba-sheet-backdrop {
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
.ba-sheet.small { width: min(520px, 100%); }
@keyframes sheetIn { from { transform: translateY(16px); opacity: .7; } to { transform: translateY(0); opacity: 1; } }
.ba-sheet-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding-bottom: 12px; }
.ba-sheet-head h2 { margin: 0; color: var(--text,#111827); font-size: 21px; font-weight: 1000; letter-spacing: -.05em; }
.ba-sheet-head p { margin: 5px 0 0; color: var(--muted,#64748b); font-size: 12px; line-height: 1.5; font-weight: 750; }
.ba-sheet-head button {
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
.ba-sheet-actions {
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
.ba-sheet-actions button {
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
.ba-sheet-actions button.primary {
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
  box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent);
}
.ba-form { display: grid; grid-template-columns: minmax(0, 1fr); gap: 9px; }
.ba-form label { display: grid; gap: 6px; min-width: 0; }
.ba-form span { color: var(--muted,#64748b); font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: .06em; }
.ba-menu-list { display: grid; gap: 8px; }
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
.ba-menu-list button small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ba-menu-list button b { font-size: 13px; font-weight: 1000; }
.ba-menu-list button small { margin-top: 2px; color: var(--muted,#64748b); font-size: 11px; font-weight: 750; }

@media (min-width: 720px) {
  .ba-page { padding: 10px; }
  .ba-remark-grid.two { grid-template-columns: repeat(2, minmax(0,1fr)); }
  .ba-list { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (min-width: 1100px) {
  .ba-page { padding: 12px; }
  .ba-list { grid-template-columns: repeat(3, minmax(0,1fr)); }
}
@media (max-width: 520px) {
  .ba-search-card { grid-template-columns: minmax(0, 1fr) repeat(3, 40px); gap: 6px; padding: 6px; border-radius: 22px; }
  .ba-icon-button, .ba-filter-button, .ba-add-inline { width: 40px; height: 40px; }
  .ba-summary-line { display: grid; }
}


.ba-basis-preview {
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    auto
    auto;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding: 9px 10px;
  border:
    1px solid
    color-mix(
      in srgb,
      var(--ba-primary) 18%,
      var(--border, rgba(0,0,0,.10))
    );
  border-radius: 16px;
  background:
    color-mix(
      in srgb,
      var(--ba-primary) 6%,
      var(--card-bg, var(--surface,#fff))
    );
}

.ba-basis-preview span {
  min-width: 0;
}

.ba-basis-preview b,
.ba-basis-preview small {
  display: block;
}

.ba-basis-preview b {
  color: var(--text,#111827);
  font-size: 11px;
  font-weight: 950;
}

.ba-basis-preview small {
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 9px;
  font-weight: 750;
}

.ba-basis-preview strong {
  color: var(--ba-primary);
  font-size: 16px;
  font-weight: 1000;
}

.ba-basis-preview em {
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 999px;
  padding: 5px 8px;
  background:
    color-mix(
      in srgb,
      var(--ba-primary) 11%,
      transparent
    );
  color: var(--ba-primary);
  font-size: 9px;
  font-style: normal;
  font-weight: 900;
}

.ba-basis-sheet {
  width: min(760px, 100%);
}

.ba-basis-controls {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.ba-basis-controls > label:not(.ba-basis-overwrite),
.ba-basis-rule label {
  display: grid;
  gap: 5px;
}

.ba-basis-controls label > span,
.ba-basis-rule label > span {
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 900;
}

.ba-basis-overwrite {
  grid-column: 1 / -1;
  min-height: 48px;
  display: grid;
  grid-template-columns:
    20px minmax(0, 1fr);
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border:
    1px solid
    var(--border, rgba(0,0,0,.10));
  border-radius: 15px;
  background:
    var(--card-bg, var(--surface,#fff));
}

.ba-basis-overwrite input {
  width: 18px;
  height: 18px;
  min-height: 0;
}

.ba-basis-overwrite b,
.ba-basis-overwrite small {
  display: block;
}

.ba-basis-overwrite b {
  font-size: 10px;
  font-weight: 950;
}

.ba-basis-overwrite small {
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 8px;
  font-weight: 700;
}

.ba-basis-rule-list {
  display: grid;
  gap: 8px;
  margin-top: 10px;
}

.ba-basis-rule {
  display: grid;
  gap: 8px;
  padding: 9px;
  border:
    1px solid
    var(--border, rgba(0,0,0,.10));
  border-radius: 18px;
  background:
    var(--card-bg, var(--surface,#fff));
}

.ba-basis-rule-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.ba-basis-rule-head strong {
  font-size: 10px;
  font-weight: 950;
}

.ba-basis-rule-head button {
  width: 28px;
  height: 28px;
  border:
    1px solid
    var(--border, rgba(0,0,0,.10));
  border-radius: 9px;
  background:
    var(--surface, #fff);
  color: var(--muted,#64748b);
  cursor: pointer;
}

.ba-basis-rule-head button:disabled {
  opacity: .4;
  cursor: not-allowed;
}

.ba-basis-rule-grid {
  display: grid;
  grid-template-columns:
    minmax(0, 1.4fr)
    minmax(90px, .6fr)
    minmax(90px, .6fr);
  gap: 7px;
}

.ba-basis-rule-grid input {
  min-height: 38px;
  border-radius: 12px;
}

.ba-basis-remark textarea {
  min-height: 74px;
  border-radius: 13px;
}

.ba-basis-secondary-actions,
.ba-basis-apply {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 10px;
}

.ba-basis-secondary-actions button,
.ba-basis-apply button {
  min-height: 40px;
  border:
    1px solid
    var(--border, rgba(0,0,0,.10));
  border-radius: 13px;
  padding: 7px 11px;
  background:
    var(--card-bg, var(--surface,#fff));
  color: var(--text,#111827);
  font-size: 10px;
  font-weight: 900;
  cursor: pointer;
}

.ba-basis-apply {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));
}

.ba-basis-apply button {
  display: grid;
  gap: 2px;
  text-align: left;
}

.ba-basis-apply button.primary {
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
}

.ba-basis-apply button:disabled {
  opacity: .5;
  cursor: not-allowed;
}

.ba-basis-apply small {
  color: inherit;
  opacity: .78;
  font-size: 8px;
  font-weight: 700;
}

@media (max-width: 620px) {
  .ba-basis-controls,
  .ba-basis-rule-grid,
  .ba-basis-apply {
    grid-template-columns: 1fr;
  }

  .ba-basis-preview {
    grid-template-columns:
      minmax(0, 1fr)
      auto;
  }

  .ba-basis-preview em {
    grid-column: 1 / -1;
    max-width: 100%;
    justify-self: start;
  }
}



.ba-basis-source {
  display: grid;
  grid-template-columns:
    34px minmax(0, 1fr);
  align-items: center;
  gap: 9px;
  margin-bottom: 10px;
  padding: 9px 10px;
  border:
    1px solid
    color-mix(
      in srgb,
      var(--ba-primary) 22%,
      var(--border, rgba(0,0,0,.10))
    );
  border-radius: 16px;
  background:
    color-mix(
      in srgb,
      var(--ba-primary) 7%,
      var(--card-bg, var(--surface,#fff))
    );
}

.ba-basis-source > span {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background:
    color-mix(
      in srgb,
      var(--ba-primary) 15%,
      transparent
    );
  color: var(--ba-primary);
  font-size: 16px;
  font-weight: 1000;
}

.ba-basis-source div {
  min-width: 0;
}

.ba-basis-source strong,
.ba-basis-source small {
  display: block;
}

.ba-basis-source strong {
  color: var(--text,#111827);
  font-size: 10px;
  font-weight: 950;
}

.ba-basis-source small {
  margin-top: 3px;
  color: var(--muted,#64748b);
  font-size: 8.5px;
  font-weight: 700;
  line-height: 1.4;
}

.ba-basis-field-note {
  display: block;
  margin-top: 1px;
  color: var(--muted,#64748b);
  font-size: 8px;
  font-weight: 650;
  line-height: 1.35;
}



/* Bounded, centred Remarks Basis dialog ------------------------------- */
.ba-basis-backdrop {
  position: fixed;
  inset:
    max(8px, env(safe-area-inset-top))
    max(8px, env(safe-area-inset-right))
    max(8px, env(safe-area-inset-bottom))
    max(8px, env(safe-area-inset-left));
  z-index: 12000;
  display: grid;
  place-items: center;
  padding: clamp(8px, 2vw, 18px);
  overflow: hidden;
  background: rgba(15, 23, 42, .54);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.ba-basis-backdrop .ba-basis-sheet {
  position: relative;
  inset: auto;
  width: min(680px, 100%);
  max-width: 680px;
  min-width: 0;
  height: auto;
  max-height: min(760px, calc(100dvh - 32px));
  margin: 0;
  border-radius: clamp(18px, 2vw, 24px);
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
  box-shadow: 0 28px 90px rgba(15, 23, 42, .30);
}

.ba-basis-backdrop .ba-sheet {
  bottom: auto;
  left: auto;
  right: auto;
  transform: none;
}

.ba-basis-backdrop .ba-sheet-head {
  position: sticky;
  top: 0;
  z-index: 4;
  margin: -1px -1px 8px;
  padding: 10px 10px 9px;
  border-bottom: 1px solid var(--border, rgba(0,0,0,.10));
  background: color-mix(in srgb, var(--card-bg, var(--surface,#fff)) 96%, transparent);
  backdrop-filter: blur(12px) saturate(1.05);
  -webkit-backdrop-filter: blur(12px) saturate(1.05);
}

@media (max-width: 720px) {
  .ba-basis-backdrop {
    inset:
      max(6px, env(safe-area-inset-top))
      max(6px, env(safe-area-inset-right))
      max(6px, env(safe-area-inset-bottom))
      max(6px, env(safe-area-inset-left));
    padding: 6px;
  }

  .ba-basis-backdrop .ba-basis-sheet {
    width: 100%;
    max-width: 100%;
    max-height: calc(100dvh - 20px);
    border-radius: 18px;
  }
}





/* Role-portal-contained sheets --------------------------------------- */
@media (min-width:980px){
  .ba-sheet-backdrop,
  .ba-basis-backdrop,
  .ba-basis-backdrop.portal-contained-modal{
    position:fixed;
    top:var(--eds-shell-top-offset,0px) !important;
    right:0 !important;
    bottom:0 !important;
    left:var(--portal-content-left,0px) !important;
    inset:auto 0 0 var(--portal-content-left,0px) !important;
    width:auto;
    height:auto;
    max-width:calc(100vw - var(--portal-content-left,0px));
    min-width:0;
    overflow-x:hidden;
  }

  .ba-sheet,
  .ba-basis-sheet,
  .ba-basis-backdrop .ba-basis-sheet{
    min-width:0;
    max-width:calc(100vw - var(--portal-content-left,0px) - 20px);
  }

  .ba-basis-backdrop,
  .ba-basis-backdrop.portal-contained-modal{
    display:grid;
    place-items:center;
    padding:18px;
  }

  .ba-basis-backdrop .ba-basis-sheet{
    width:min(680px,100%);
    max-height:calc(100dvh - var(--eds-shell-top-offset,0px) - 36px);
    overflow-y:auto;
    overflow-x:hidden;
  }
}

@media (max-width:979px){
  .ba-basis-backdrop,
  .ba-basis-backdrop.portal-contained-modal{
    position:fixed;
    inset:0 !important;
    display:grid;
    place-items:end center;
    padding:10px;
  }

  .ba-basis-backdrop .ba-basis-sheet{
    width:min(680px,100%);
    max-width:100%;
    max-height:min(88dvh,760px);
  }
}


/* V4 records workspace: neutral surface, efficient scroll, no duplicated toolbars. */
.ba-page.student-reports-page, .ba-page.report-remarks-page { min-height:0; padding:3px 4px 18px; background:transparent; overflow-x:clip; }
.ba-page.student-reports-page .ba-search-card, .ba-page.report-remarks-page .ba-search-card,
.ba-page.student-reports-page .ba-filter-chips:not(.ba-remark-analytics),
.ba-page.report-remarks-page .ba-summary-line { display:none; }
.ba-page.student-reports-page .ba-print-card,
.ba-page.report-remarks-page .ba-remark-card,
.ba-page.report-remarks-page .ba-student-row,
.ba-page.report-remarks-page .ba-list,
.ba-page.report-remarks-page .ba-sheet {
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 83%,var(--bg,#f3f5f8) 17%);
  border-color:var(--border,rgba(15,23,42,.13));
  box-shadow:none;
}
.ba-page.student-reports-page .ba-print-card { margin:0; padding:5px; border-radius:11px; box-shadow:none; }
.ba-page.student-reports-page .ba-print-zone { padding:3px; overflow-x:auto; overscroll-behavior-inline:contain; }
.ba-page.report-remarks-page .ba-remark-card { margin-top:0; box-shadow:none; border-radius:11px; }
.ba-page.report-remarks-page .ba-student-row { border-radius:9px; box-shadow:none; transform:none; }
.ba-page.report-remarks-page .ba-list { gap:6px; }
.ba-page.report-remarks-page .ba-student-row:hover { transform:none; }
.ba-page .ba-v4-find { display:grid; gap:5px; grid-column:1/-1; font-size:12px; font-weight:700; color:var(--muted,#64748b); }
.ba-page .ba-v4-find input { min-height:40px; padding:0 10px; border-radius:9px; background:var(--input-bg,var(--surface,#fff)); color:var(--text,#111827); }
@media(max-width:760px){
 .ba-page.student-reports-page,.ba-page.report-remarks-page{padding:0 1px 14px;}
 .ba-page.student-reports-page .ba-print-card{padding:3px;border-radius:9px;}
 .ba-page.report-remarks-page .ba-remark-card{padding:9px;}
}
@media print {
  .ba-page.student-reports-page,.ba-page.report-remarks-page,
  .ba-page.student-reports-page .ba-print-card,
  .ba-page.student-reports-page .ba-print-zone {
    background:#fff!important;box-shadow:none!important;border:0!important;
    margin:0!important;padding:0!important;overflow:visible!important;
  }
}
.ba-page.report-remarks-page .ba-v4-remark-actions{display:flex;align-items:center;justify-content:flex-end;gap:6px;flex:0 0 auto;}
.ba-page.report-remarks-page .ba-v4-save-remark{padding:7px 11px;min-height:30px;width:auto;border-radius:8px;border:0;background:var(--ba-primary);color:#fff;font-size:12px;font-weight:750;cursor:pointer;}
.ba-page.report-remarks-page .ba-v4-save-remark:disabled{opacity:.55;cursor:default;}

/* V6 — quiet neutral records presentation matching Students/Teachers/Classes V5 */

.report-remarks-page {background:var(--bg,var(--background,#f2f4f7));padding:5px;min-height:0;}
.report-remarks-page .ba-student-row,.report-remarks-page .ba-remark-card,
.report-remarks-page .ba-analysis,.report-remarks-page .ba-basis-preview,
.report-remarks-page .ba-sheet:not(.ba-basis-sheet) {
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#182235) 7%);
  border:1px solid color-mix(in srgb,var(--border,#d4dae3) 85%,var(--text,#182235) 15%);
  border-radius:13px;box-shadow:none;}
.report-remarks-page .ba-student-row:hover {transform:none;box-shadow:none;}
.report-remarks-page .ba-student-row {min-height:64px;transition:border-color .12s ease;}
.report-remarks-page .ba-list {margin-top:2px;gap:9px;}
.report-remarks-page .ba-remark-card {margin-top:2px;padding:10px;}
.report-remarks-page .ba-basis-preview {padding:7px;margin:6px 0;}
.report-remarks-page .ba-remark-field textarea {background:var(--input-bg,var(--surface,#fff));border-radius:10px;}
@media(min-width:1024px){.report-remarks-page .ba-list{grid-template-columns:repeat(4,minmax(0,1fr));}}
@media(max-width:639px){.report-remarks-page{padding:3px;}}
@media(prefers-reduced-motion:reduce){.report-remarks-page .ba-student-row{transition:none;}}



/* V22 — Assessment-style responsive editable remarks records. */
.report-remarks-page { --rr-border:var(--border,rgba(15,23,42,.15)); background:transparent!important; overflow:visible!important; padding:2px 3px 22px!important; }
.report-remarks-page .rr-command-row{display:flex;align-items:center;gap:7px;padding:2px 0 8px;min-width:0;flex-wrap:wrap;}
.report-remarks-page .rr-context{display:flex;align-items:center;gap:7px;max-width:100%;min-width:0;min-height:35px;flex:1 1 180px;text-align:left;
 border:1px solid var(--rr-border);border-radius:9px;padding:5px 9px;background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#172235) 7%);color:var(--text,#111827);cursor:pointer;}
.rr-context strong{font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:40%;}
.rr-context span{font-size:11px;color:var(--muted,#64748b);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.rr-context i{margin-left:auto;font-style:normal;color:var(--ba-primary);font-size:13px;}
.rr-count{font-size:11px;font-weight:750;white-space:nowrap;color:var(--muted,#64748b)}
.report-remarks-page .rr-primary,.report-remarks-page .rr-secondary{border:1px solid var(--ba-primary);min-height:34px;padding:6px 13px;border-radius:8px;font-size:12px;font-weight:800;cursor:pointer;white-space:nowrap;}
.report-remarks-page .rr-primary{color:white;background:var(--ba-primary)}
.report-remarks-page .rr-secondary{color:var(--ba-primary);background:transparent}
.report-remarks-page .rr-primary:disabled{opacity:.55;cursor:not-allowed}
.rr-table-wrap{width:100%;min-width:0;overflow-x:auto;overscroll-behavior-x:contain;border:1px solid var(--rr-border);border-radius:10px;background:var(--card-bg,var(--surface,#fff));scrollbar-color:var(--ba-primary) color-mix(in srgb,var(--ba-primary) 12%,transparent);scrollbar-width:thin}
.rr-table{width:100%;border-collapse:separate;border-spacing:0;table-layout:fixed;font-size:12px;color:var(--text,#111827)}
.rr-col-student{width:22%}.rr-col-basis{width:10%}.rr-col-status{width:12%}
.rr-table thead th{padding:10px 9px;text-align:left;background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 88%,var(--ba-primary) 12%);border-bottom:1px solid var(--rr-border);font-size:11px;font-weight:800;white-space:nowrap;}
.rr-table tbody td{padding:7px 8px;vertical-align:middle;border-bottom:1px solid var(--rr-border);background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 96%,var(--text,#1b2235) 4%);}
.rr-table tbody tr:nth-child(even) td{background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 91%,var(--text,#1b2235) 9%)}
.rr-table tbody tr:last-child td{border-bottom:0}.rr-table tbody tr:hover td{background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 94%,var(--ba-primary) 6%)}
.rr-person,.rr-card-head{display:flex;align-items:center;gap:8px;min-width:0}.rr-person>div,.rr-card-person{min-width:0;flex:1}
.rr-person strong,.rr-card-person strong{display:block;font-weight:800;font-size:12px;white-space:normal;line-height:1.35;overflow-wrap:anywhere}
.rr-person small,.rr-card-person small{display:block;font-size:10px;color:var(--muted,#64748b);line-height:1.35;margin-top:3px;overflow-wrap:anywhere}
.rr-avatar{display:grid;place-items:center;flex:0 0 36px;width:36px;height:36px;border-radius:9px;overflow:hidden;background:color-mix(in srgb,var(--ba-primary) 18%,var(--card-bg,#fff));color:var(--ba-primary);font-size:14px;}
.rr-avatar img{width:100%;height:100%;object-fit:cover;display:block}
.rr-table td small{display:block;color:var(--muted,#64748b);font-size:10px;line-height:1.4;}
.rr-basis-value{font-weight:800;font-size:12px}
.report-remarks-page .rr-table textarea,.report-remarks-page .rr-card textarea{resize:vertical;min-height:48px;max-width:100%;width:100%;padding:7px 9px;border:1px solid var(--rr-border);border-radius:7px;background:var(--input-bg,var(--surface,#fff));color:var(--text,#111827);font-weight:500;font-size:11px;line-height:1.4;box-shadow:none;}
.report-remarks-page textarea[readonly]{resize:none;overflow:hidden;background:transparent;border-color:transparent;padding:5px 2px;cursor:default;}
.report-remarks-page textarea[readonly]:focus{box-shadow:none;border-color:transparent;}
.rr-published{display:inline-flex;align-items:center;gap:5px;color:var(--text,#111827);font-size:10px;font-weight:650;white-space:nowrap;}
.report-remarks-page .rr-published input{flex:0 0 15px;width:15px;height:15px;min-height:15px;accent-color:var(--ba-primary);}
.rr-state{display:inline-block;margin-top:6px;border-radius:5px;padding:3px 6px;font-size:9px;font-weight:750;white-space:nowrap;}
.rr-state.ready{color:#15803d;background:rgba(22,163,74,.12)}.rr-state.missing{color:#b45309;background:rgba(245,158,11,.12)}
.rr-mobile-cards{display:none;gap:7px;}.rr-card{padding:10px;border:1px solid var(--rr-border);border-radius:10px;background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 94%,var(--text,#182235) 6%);min-width:0;}
.rr-card-basis{margin-left:auto;flex:0 0 auto;display:grid;justify-items:end;gap:3px;font-weight:800;color:var(--ba-primary);font-size:13px;}
.rr-card-basis small{font-weight:550;color:var(--muted,#64748b);font-size:9px;max-width:82px;text-align:right;overflow:hidden;text-overflow:ellipsis;}
.rr-card-fields{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px;margin-top:9px;}
.rr-card-fields label{display:grid;gap:3px;color:var(--muted,#64748b);font-size:10px;font-weight:800;}
.rr-card-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;}
.rr-card-foot .rr-state{margin:0}.rr-analytics{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px}
.rr-analytics article{padding:12px;border:1px solid var(--rr-border);border-radius:10px;background:var(--card-bg,var(--surface,#fff));display:grid;gap:7px;}
.rr-analytics small{font-size:10px;color:var(--muted,#64748b)}.rr-analytics strong{font-size:21px;color:var(--ba-primary)}
/* Compact modal, with short header and collapsible editable bands. */
.ba-basis-backdrop .rr-basis-modal{width:min(650px,100%);padding:10px;max-height:min(86dvh,760px);border-radius:13px;overflow-y:auto;background:var(--card-bg,var(--surface,#fff));}
.rr-basis-modal .rr-modal-head{position:sticky;top:-10px;z-index:3;margin:-10px -10px 6px;padding:9px 11px;border-bottom:1px solid var(--rr-border);background:var(--card-bg,var(--surface,#fff));}
.rr-basis-modal .rr-modal-head h2{font-size:15px;letter-spacing:normal}.rr-basis-modal .rr-modal-head p{font-size:10px;margin:2px 0 0;line-height:1.2}
.rr-basis-modal .rr-modal-head button{width:32px;height:32px;min-height:32px;background:var(--surface,#fff);color:var(--text,#111827);border:1px solid var(--rr-border);}
.rr-basis-config{display:grid;grid-template-columns:1fr 1fr auto;gap:7px;align-items:end}
.rr-basis-config>label{min-width:0;display:grid;gap:4px;color:var(--muted,#64748b);font-size:10px;font-weight:800;}
.rr-basis-config select{width:100%;min-height:34px;border-radius:7px;padding:3px 5px;font-size:11px;}
.rr-basis-config .rr-check{display:flex;align-items:center;gap:5px;min-height:34px;white-space:nowrap;color:var(--text,#111827)}
.rr-check input{width:16px;min-height:16px;height:16px;accent-color:var(--ba-primary);}
.rr-source-note{margin:7px 0;color:var(--muted,#64748b);font-size:10px;line-height:1.35;}
.rr-basis-list{display:grid;gap:5px;}
.rr-band{border:1px solid var(--rr-border);border-radius:8px;background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 94%,var(--text,#182235) 6%);overflow:hidden;}
.rr-band summary{display:grid;grid-template-columns:minmax(0,110px) minmax(0,1fr) auto;gap:7px;align-items:center;padding:8px;cursor:pointer;list-style:none;}
.rr-band summary::-webkit-details-marker{display:none}.rr-band summary strong{font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.rr-band summary small{font-size:10px;color:var(--muted,#64748b);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.rr-band[open] summary{border-bottom:1px solid var(--rr-border)}.rr-band-body{display:grid;gap:7px;padding:8px;}
.rr-band-body label{display:grid;gap:3px;font-size:10px;color:var(--muted,#64748b);font-weight:700}.rr-band-body input{min-height:33px;border-radius:7px;padding:5px 8px;}
.rr-band-body textarea{min-height:58px;border-radius:7px;padding:6px 8px;font-size:11px}.rr-band-numbers{display:grid;grid-template-columns:1fr 1fr;gap:7px;}
.rr-band-body .rr-link{border:0;background:none;color:var(--ba-primary);padding:3px 0;text-align:left;font-size:10px;cursor:pointer;}
.rr-basis-utils{display:flex;gap:7px;margin:8px 0}.rr-basis-utils button{padding:6px 9px;border:1px solid var(--rr-border);border-radius:7px;background:var(--card-bg,var(--surface,#fff));color:var(--text,#111827);font-size:10px;cursor:pointer;}
.rr-modal-actions{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:6px;position:sticky;bottom:-10px;background:var(--card-bg,var(--surface,#fff));padding:9px 0 0;border-top:1px solid var(--rr-border);margin-top:9px;}
.rr-modal-actions button{padding:7px 10px;min-height:34px;border:1px solid var(--rr-border);background:var(--surface,#fff);color:var(--text,#111827);border-radius:7px;font-size:11px;font-weight:750;cursor:pointer;}
.rr-modal-actions button.primary{background:var(--ba-primary);border-color:var(--ba-primary);color:#fff}.rr-modal-actions button:disabled{opacity:.45}
.rr-bulk-modal .ba-form label{display:grid;gap:4px;font-size:11px}.rr-bulk-modal .rr-check{display:flex;gap:8px;align-items:center}
@media(min-width:768px){.rr-mobile-cards{display:none!important}.rr-table-wrap{display:block!important}}
@media(max-width:767px){.rr-table-wrap{display:none!important}.rr-mobile-cards{display:grid!important}.report-remarks-page .rr-command-row{gap:5px;padding-bottom:6px}.report-remarks-page .rr-context{min-height:32px;flex-basis:160px}.rr-context strong{max-width:48%}.rr-card-fields{grid-template-columns:1fr 1fr;}.ba-basis-backdrop .rr-basis-modal{max-height:calc(100dvh - 25px);}.rr-basis-config{grid-template-columns:1fr 1fr}.rr-basis-config .rr-check{grid-column:1 / -1;min-height:23px;}}
@media(max-width:385px){.rr-card-fields{grid-template-columns:1fr}.rr-card-basis small{max-width:62px}.rr-band summary{grid-template-columns:minmax(0,85px) minmax(0,1fr) auto}}
/* Honor manually selected Cards or Table in More menu, regardless of display width. */
.report-remarks-page.rr-force-cards .rr-table-wrap{display:none!important}
.report-remarks-page.rr-force-cards .rr-mobile-cards{display:grid!important}
.report-remarks-page.rr-force-table .rr-table-wrap{display:block!important}
.report-remarks-page.rr-force-table .rr-mobile-cards{display:none!important}
@media print{.rr-command-row,.rr-mobile-cards,.rr-modal-actions{display:none!important}.rr-table-wrap{display:block!important;overflow:visible!important}.rr-table textarea{border:0!important;background:transparent!important;resize:none!important}.rr-table tbody td{break-inside:avoid}}

.rr-select-student{display:block;padding:0;border:0;background:transparent;color:var(--text,#111827);text-align:left;font-size:12px;line-height:1.35;font-weight:800;cursor:pointer;overflow-wrap:anywhere;}
.rr-select-student:focus-visible{outline:2px solid var(--ba-primary);outline-offset:2px;border-radius:2px}
.rr-row-selected td:first-child{box-shadow:inset 3px 0 0 var(--ba-primary)}
.rr-card.rr-row-selected{border-color:var(--ba-primary)!important;}
.rr-basis-modal input,.rr-basis-modal select,.rr-basis-modal textarea,.rr-bulk-modal input,.rr-bulk-modal textarea{font:inherit;max-width:100%;color:var(--input-text,var(--text,#111827));background:var(--input-bg,var(--surface,#fff));border:1px solid var(--input-border,var(--border,rgba(0,0,0,.15)));border-radius:7px;}
.rr-basis-modal input[type=checkbox],.rr-bulk-modal input[type=checkbox]{width:16px;min-height:16px;height:16px;accent-color:var(--ba-primary)}
.rr-basis-modal *,.rr-bulk-modal *{box-sizing:border-box;min-width:0}
.rr-basis-modal details summary:focus-visible{outline:2px solid var(--ba-primary);outline-offset:-2px}

/* Teacher-only read-only fields, matching the Branch Admin surfaces. */
.report-remarks-page .rr-teacher-readonly {
  margin:0; min-height:40px; padding:7px 9px; font-size:11px; line-height:1.45;
  white-space:pre-wrap; overflow-wrap:anywhere; color:var(--text,#111827);
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#182235) 7%);
  border:1px solid var(--rr-border); border-radius:7px;
}
.report-remarks-page .rr-teacher-publication {
  display:inline-block; margin:2px 0 3px; font-size:10px; font-weight:750;
  color:var(--muted,#64748b);
}
.report-remarks-page .rr-teacher-notice {
  display:flex; align-items:center; justify-content:space-between; gap:12px;
  margin:0 0 7px; padding:9px 11px;
  border:1px solid var(--border,rgba(15,23,42,.15)); border-radius:9px;
  background:var(--card-bg,var(--surface,#fff)); color:var(--text,#111827); font-size:12px;
}
.report-remarks-page .rr-teacher-notice button {
  border:0; background:none; color:inherit; cursor:pointer; font-size:20px;
}
.rr-basis-locked { min-height:34px; display:grid; gap:3px; align-content:center; font-size:10px; }
.rr-basis-locked strong { color:var(--muted,#64748b); }
.rr-basis-locked span { font-size:11px; font-weight:750; }
`;var aI=t(52975),aS=t(66925),aN=t(91013),aC=t(15967),az=t(38639),aM=t(41240),aA=t(97537),aP=t(26204),aE=t(74152),aT=t(45893),aR=t(72312);let aB=()=>new Date().toISOString().slice(0,10),a$=e=>null==e?"":String(e).trim(),aD=(e,a)=>a$(e)===a$(a),aO=e=>l.db[e];function aF(e){try{return window.localStorage.getItem(e)||window.sessionStorage.getItem(e)}catch{return null}}function aL(e){let a=aF(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}}function aU(...e){for(let a of e){let e=a$(a);if(e&&"0"!==e)return e}return""}function a_(e){let a=String(e.status||"").toLowerCase();return!e.isDeleted&&!1!==e.active&&!["inactive","deleted","archived","suspended"].includes(a)}function aW(e){let a=Number(e);return Number.isFinite(a)?Math.max(0,Math.round(a)):0}function aK(e,a){return a?Math.max(0,Math.min(100,Math.round(e/a*100))):0}function aV(e){let a=String(e||"");return!a||a.startsWith("blob:")||a.startsWith("data:image/")?void 0:a}function aG(e){let a=aW(e?.daysOpened),t=Math.min(a||Number.MAX_SAFE_INTEGER,aW(e?.daysPresent));return{daysOpened:a,daysPresent:t,daysAbsent:Math.max(0,a-t),timesLate:aW(e?.timesLate),attendancePercent:aK(t,a)}}function aq(e){return e?e.charAt(0).toUpperCase()+e.slice(1):"Unmarked"}function aJ(){let e=(0,y.useRouter)(),a=(0,aS.p)(),{loading:t,setLoading:i}=(0,S.J)(),{accountId:o,authenticated:n,loading:d}=(0,w.F)(),{settings:l,loading:c}=(0,k.t)(),{activeSchool:p,activeSchoolId:m,activeBranch:u,activeBranchId:b,loading:x}=(0,j.c)(),{activeMembership:g}=(0,aI.A)(),v=(0,s.useMemo)(()=>aL("eleeveon_open_workspace"),[]),N=(0,s.useMemo)(()=>aL("activeMembership"),[]),C=v?.membership||g||N||{},z=aU(v?.schoolId,C.schoolId,C.school?.id,m,p?.id,l?.schoolId,aF("activeSchoolId")),M=aU(v?.branchId,C.branchId,C.schoolBranchId,C.branch?.id,b,u?.id,l?.branchId,aF("activeBranchId")),A=l?.primaryColor||"var(--primary-color, #2563eb)",P=h(),R=P.teacherId,B=P.permitted&&aD(P.accountId,o)&&aD(P.schoolId,z)&&aD(P.branchId,M),[O,_]=(0,s.useState)([]),[W,K]=(0,s.useState)([]),[V,G]=(0,s.useState)([]),q=[o||"",z,M,R].join("|"),[J,H]=(0,s.useState)(""),[Y,Z]=(0,s.useState)([]),[X,Q]=(0,s.useState)([]),[ee,ea]=(0,s.useState)([]),[et,er]=(0,s.useState)([]),[es,ei]=(0,s.useState)([]),[eo,en]=(0,s.useState)("termTotals"),[ed,el]=(0,s.useState)("cards");(0,s.useEffect)(()=>{el(window.matchMedia("(min-width: 768px)").matches?"table":"cards")},[]);let[ec,ep]=(0,s.useState)(String(l?.currentAcademicStructureId||"")),[em,eu]=(0,s.useState)(String(l?.currentAcademicPeriodId||"")),[eb,eh]=(0,s.useState)(""),ex=(0,s.useRef)(""),eg=(0,s.useRef)(""),ef=[o||"",z,M,R].join("|"),ev=(0,s.useRef)(ef);(0,s.useEffect)(()=>{ev.current!==ef&&(ev.current=ef,ep(""),eu(""),eh(""),en("termTotals"),eI(""),eN("all"))},[ef]);let ey=()=>{eg.current=ef},[ew,ek]=(0,s.useState)(aB()),[ej,eI]=(0,s.useState)(""),[eS,eN]=(0,s.useState)("all"),[eC,ez]=(0,s.useState)({}),[eM,eA]=(0,s.useState)({}),[eP,eE]=(0,s.useState)(""),[eT,eR]=(0,s.useState)("all"),[eB,e$]=(0,s.useState)(!1),[eD,eO]=(0,s.useState)(!1),[eF,eL]=(0,s.useState)(!1),[eU,e_]=(0,s.useState)(!1),[eW,eK]=(0,s.useState)(null),[eV,eG]=(0,s.useState)(!1),[eq,eJ]=(0,s.useState)(!1),[eH,eY]=(0,s.useState)(null),[eZ,eX]=(0,s.useState)(null),[eQ,e0]=(0,s.useState)(""),[e1,e2]=(0,s.useState)(0),[e4,e8]=(0,s.useState)([]),[e5,e3]=(0,s.useState)([]),[e6,e9]=(0,s.useState)("file"),[e7,ae]=(0,s.useState)(""),[aa,at]=(0,s.useState)(!1),[ar,as]=(0,s.useState)(null),[ai,ao]=(0,s.useState)(null),[an,ad]=(0,s.useState)(null),[al,ac]=(0,s.useState)(null),[ap,am]=(0,s.useState)(ew),[au,ab]=(0,s.useState)(ew),ah=(0,E.D)({accountId:o,ownerTable:"students",rows:O,fields:[{fieldKey:"photo",mediaIdKey:"photoMediaId"},{fieldKey:"coverPhoto",mediaIdKey:"coverPhotoMediaId"}]}),ax=e=>(!e.accountId||e.accountId===o)&&(!e.schoolId||aD(e.schoolId,z))&&(!e.branchId||aD(e.branchId,M))&&!e.isDeleted,ag=(e,a)=>{eK({tone:e,message:a}),window.setTimeout(()=>{eK(e=>e?.message===a?null:e)},4200)},af=()=>{_([]),K([]),G([]),Z([]),Q([]),ea([]),er([]),ei([])},av=async()=>{if(!P.ready){af(),H(""),i(!1);return}if(!n||!o||!z||!M||!B||!P.ready){af(),H(q),i(!1);return}try{i(!0);let[e,a,t,r,s,n,d,c]=await Promise.all([aO("students")?.toArray?.()||[],aO("classes")?.toArray?.()||[],aO("classTeachers")?.toArray?.()||[],aO("academicStructures")?.toArray?.()||[],aO("academicPeriods")?.toArray?.()||[],aO("studentEnrollments")?.toArray?.()||[],aO("attendance")?.toArray?.()||[],aO("studentAttendanceSummaries")?.toArray?.()||[]]),p=t.filter(e=>ax(e)&&a_(e)&&aD(e.teacherId,R)&&P.classTeacherClassIds.has(a$(e.classId))),m=new Set(p.map(e=>a$(e.classId)).filter(Boolean)),u=a.filter(e=>ax(e)&&a_(e)&&m.has(a$(e.id))).sort((e,a)=>String(e.name||"").localeCompare(String(a.name||""))),b=n.filter(e=>ax(e)&&m.has(a$(e.classId))),h=new Set(b.filter(e=>!0!==e.isDeleted&&"withdrawn"!==e.status).map(e=>a$(e.studentId))),x=e.filter(e=>ax(e)&&!["withdrawn","graduated"].includes(String(e.status||"").toLowerCase())&&(h.has(a$(e.id))||m.has(a$(e.currentClassId)))).sort((e,a)=>String(e.fullName||"").localeCompare(String(a.fullName||""))),g=r.filter(e=>ax(e)&&a_(e)).sort((e,a)=>String(e.name||"").localeCompare(String(a.name||""))),f=s.filter(e=>ax(e)&&a_(e)).sort((e,a)=>Number(e.order||0)-Number(a.order||0)),v=d.filter(e=>ax(e)&&m.has(a$(e.classId))),y=c.filter(e=>ax(e)&&m.has(a$(e.classId)));_(x),K(u),G(p),Z(g),Q(f),ea(b),er(v),ei(y);let w=[o||"",z,M].join("|");if(ex.current!==w&&eg.current!==w){let e=function(e){let{students:a,classes:t,structures:r,periods:s,enrollments:i,attendanceRows:o,summaryRows:n,preferredStructureId:d,preferredPeriodId:l}=e;if(!a.length||!t.length||!s.length)return null;let c=new Map(a.map(e=>[a$(e.id),e])),p=new Set(r.map(e=>a$(e.id))),m=new Map,u=new Map,b=(e,a,t)=>`${e}|${a}|${t}`;a.forEach(e=>{let a=a$(e.id),t=a$(e.currentClassId);if(!a||!t||!a_(e))return;let r=u.get(t)||new Set;r.add(a),u.set(t,r)}),i.forEach(e=>{if(e.isDeleted||"active"!==e.status)return;let a=a$(e.studentId),t=a$(e.classId),r=a$(e.academicStructureId),s=a$(e.academicPeriodId);if(!a||!t||!r||!s||!c.has(a))return;let i=b(r,s,t),o=m.get(i)||new Set;o.add(a),m.set(i,o)});let h=new Map;n.forEach(e=>{if(e.isDeleted)return;let a=b(a$(e.academicStructureId),a$(e.academicPeriodId),a$(e.classId)),t=a$(e.studentId);if(!t)return;let r=h.get(a)||new Set;r.add(t),h.set(a,r)});let x=new Map;o.forEach(e=>{if(e.isDeleted)return;let a=b(a$(e.academicStructureId),a$(e.academicPeriodId),a$(e.classId)),t=a$(e.studentId);if(!t)return;let r=x.get(a)||new Set;r.add(t),x.set(a,r)});let g=[];for(let e of s){let a=a$(e.academicStructureId),r=a$(e.id);if(a&&r&&p.has(a))for(let s of t){let t=a$(s.id);if(!t)continue;let i=b(a,r,t),o=new Set(m.get(i)||[]);if(u.get(t)?.forEach(e=>o.add(e)),!o.size)continue;let n=0;h.get(i)?.forEach(e=>{o.has(e)&&(n+=1)});let c=0;x.get(i)?.forEach(e=>{o.has(e)&&(c+=1)}),g.push({structureId:a,periodId:r,classId:t,tier:n?3:c?2:1,preferred:2*(r===l)+ +(a===d),matched:n||c,rosterCount:o.size,periodOrder:Number(e.order||0),className:String(s.name||"")})}}g.sort((e,a)=>a.tier-e.tier||a.preferred-e.preferred||a.matched-e.matched||a.rosterCount-e.rosterCount||a.periodOrder-e.periodOrder||e.className.localeCompare(a.className));let f=g[0];return f?{structureId:f.structureId,periodId:f.periodId,classId:f.classId}:null}({students:x,classes:u,structures:g,periods:f,enrollments:b,attendanceRows:v,summaryRows:y,preferredStructureId:a$(l?.currentAcademicStructureId),preferredPeriodId:a$(l?.currentAcademicPeriodId)});e&&(ep(e.structureId),eu(e.periodId),eh(e.classId),ex.current=w)}}catch(e){console.error("Failed to load student attendance:",e),af(),ag("error","Failed to load student attendance.")}finally{H(q),i(!1)}};(0,s.useEffect)(()=>{!d&&!x&&(n&&o?z&&M||e.replace("/account"):e.replace("/login"))},[d,x,n,o,z,M,e]),(0,s.useEffect)(()=>{d||c||x||av()},[n,o,z,M,d,c,x,a,B,P.ready,R]),(0,s.useEffect)(()=>{ex.current!==ef&&eg.current!==ef&&(!ec&&l?.currentAcademicStructureId&&ep(String(l.currentAcademicStructureId)),!em&&l?.currentAcademicPeriodId&&eu(String(l.currentAcademicPeriodId)))},[ec,em,ef,l?.currentAcademicStructureId,l?.currentAcademicPeriodId]);let ay=(0,s.useMemo)(()=>new Set(V.map(e=>a$(e.classId)).filter(Boolean)),[V]),aw=!!eb&&ay.has(a$(eb)),ak=B&&P.ready&&aw,aj=(0,s.useMemo)(()=>new Map(O.map(e=>[a$(e.id),e])),[O]),aJ=(0,s.useMemo)(()=>new Map(W.map(e=>[a$(e.id),e])),[W]),aX=(0,s.useMemo)(()=>new Map(Y.map(e=>[a$(e.id),e])),[Y]),a8=(0,s.useMemo)(()=>new Map(X.map(e=>[a$(e.id),e])),[X]),a5=(0,s.useMemo)(()=>ec?X.filter(e=>aD(e.academicStructureId,ec)):X,[X,ec]),a3=(0,s.useMemo)(()=>{let e=new Map;return et.forEach(a=>{!a.isDeleted&&aD(a.classId,eb)&&aD(a.academicStructureId,ec)&&aD(a.academicPeriodId,em)&&a.date===ew&&e.set(a$(a.studentId),a)}),e},[et,eb,ec,em,ew]),a7=(0,s.useMemo)(()=>{let e=new Map;return es.forEach(a=>{!a.isDeleted&&aD(a.classId,eb)&&aD(a.academicStructureId,ec)&&aD(a.academicPeriodId,em)&&e.set(a$(a.studentId),a)}),e},[es,eb,ec,em]),te=(0,s.useMemo)(()=>{if(!ec||!em||!eb)return[];let e=new Set,a=[];return ee.forEach(t=>{if(t.isDeleted||"active"!==t.status||!aD(t.classId,eb)||!aD(t.academicStructureId,ec)||!aD(t.academicPeriodId,em))return;let r=aj.get(a$(t.studentId));if(!r)return;let s=a$(r.id);!s||e.has(s)||(e.add(s),a.push({student:r,id:s,name:r.fullName||"Unnamed student",admissionNumber:r.admissionNumber||"No admission number",photo:ah[s]?.photo||aV(r.photo),existingAttendance:a3.get(s),existingSummary:a7.get(s)}))}),O.forEach(t=>{let r=a$(t.id);!(!r||e.has(r))&&aD(t.currentClassId,eb)&&a_(t)&&(e.add(r),a.push({student:t,id:r,name:t.fullName||"Unnamed student",admissionNumber:t.admissionNumber||"No admission number",photo:ah[r]?.photo||aV(t.photo),existingAttendance:a3.get(r),existingSummary:a7.get(r)}))}),a.sort((e,a)=>e.name.localeCompare(a.name))},[ec,em,eb,ee,O,aj,ah,a3,a7]);(0,s.useEffect)(()=>{let e={};te.forEach(a=>{let t=a.existingAttendance?.status;["present","absent","late"].includes(t)&&(e[a.id]=t)}),ez(e)},[te]),(0,s.useEffect)(()=>{let e={};te.forEach(a=>{let t=a.existingSummary;e[a.id]=aG({daysOpened:t?.daysOpened,daysPresent:t?.daysPresent,daysAbsent:t?.daysAbsent,timesLate:t?.timesLate,attendancePercent:t?.attendancePercent})}),eA(e)},[te]);let ta=aJ.get(eb)?.name||(eb?"Selected class":"Select a class"),tt=aX.get(ec)?.name||(ec?"Selected structure":""),tr=a8.get(em)?.name||(em?"Selected period":""),ts=(0,s.useMemo)(()=>{let e=ej.trim().toLowerCase();return te.filter(a=>{if("daily"===eo){let e=eC[a.id];if("unmarked"===eS&&e||["present","absent","late"].includes(eS)&&e!==eS)return!1}return!e||`${a.name} ${a.admissionNumber}`.toLowerCase().includes(e)})},[te,ej,eo,eC,eS]),ti=(0,s.useMemo)(()=>{let e=te.length,a=te.filter(e=>"present"===eC[e.id]).length,t=te.filter(e=>"absent"===eC[e.id]).length,r=te.filter(e=>"late"===eC[e.id]).length,s=a+t+r;return{total:e,present:a,absent:t,late:r,marked:s,unmarked:Math.max(0,e-s),completion:e?Math.round(s/e*100):0,attendanceRate:e?Math.round(a/e*100):0}},[te,eC]),to=(0,s.useMemo)(()=>{let e=te.map(e=>eM[e.id]||aG()),a=e.filter(e=>e.daysOpened>0).length,t=e.reduce((e,a)=>e+a.daysOpened,0),r=e.reduce((e,a)=>e+a.daysPresent,0);return{total:e.length,completed:a,missing:Math.max(0,e.length-a),average:t?Math.round(r/t*100):0,opened:t,present:r,absent:e.reduce((e,a)=>e+a.daysAbsent,0),late:e.reduce((e,a)=>e+a.timesLate,0)}},[te,eM]);[ec,em,eb,"daily"===eo?ew:"","daily"===eo&&"all"!==eS?eS:""].filter(Boolean).length;let tn=(e,a)=>{ez(t=>({...t,[e]:a}))},td=e=>{ez(a=>{let t={...a};return delete t[e],t})},tl=(e,a,t)=>{eA(r=>{let s=r[e]||aG(),i=aG({...s,[a]:aW(t)});return{...r,[e]:i}})},tc=async()=>{for(let e of te){let a=eC[e.id],t=a3.get(e.id);if(!a){t?.id&&await (0,I.R8)("attendance",a$(t.id));continue}if(t?.id&&t.status===a)continue;let r={accountId:o??void 0,schoolId:z,branchId:M,studentId:e.id,classId:eb,academicStructureId:ec,academicPeriodId:em,date:ew,status:a,isDeleted:!1};t?.id?await (0,I.Po)("attendance",a$(t.id),r):await (0,I.oJ)("attendance",r)}},tp=async()=>{for(let e of te){let a=eM[e.id]||aG(),t=a7.get(e.id);if(!a.daysOpened&&!a.daysPresent&&!a.timesLate){t?.id&&await (0,I.R8)("studentAttendanceSummaries",a$(t.id));continue}if(a.daysPresent>a.daysOpened)throw Error(`${e.name} has more days present than days opened.`);let r={accountId:o??void 0,schoolId:z,branchId:M,studentId:e.id,classId:eb,academicStructureId:ec,academicPeriodId:em,entryMode:"manual",daysOpened:a.daysOpened,daysPresent:a.daysPresent,daysAbsent:Math.max(0,a.daysOpened-a.daysPresent),timesLate:a.timesLate,attendancePercent:aK(a.daysPresent,a.daysOpened),active:!0,isDeleted:!1};t?.id?await (0,I.Po)("studentAttendanceSummaries",a$(t.id),r):await (0,I.oJ)("studentAttendanceSummaries",r)}},tm=async()=>{if(!ak)return void ag("error","Only the assigned class teacher can edit attendance for this class.");if(!n||!o)return void ag("error","Sign in first.");if(!z||!M)return void ag("error","Select a school branch first.");if(!ec)return void ag("error","Select an academic structure.");if(!em)return void ag("error","Select an academic period.");if(!eb)return void ag("error","Select a class.");if("daily"===eo&&!ew)return void ag("error","Select a date.");if(!await f({accountId:String(o),schoolId:z,branchId:M,teacherId:R},eb))return void ag("error","This class is no longer assigned to you as class teacher.");try{e_(!0),"daily"===eo?await tc():await tp(),await av(),ag("success","daily"===eo?"Daily attendance saved successfully.":"Term attendance totals saved successfully.")}catch(e){console.error("Failed to save attendance:",e),ag("error",e instanceof Error?e.message:"Failed to save attendance.")}finally{e_(!1)}},tu=()=>{if(!o||!z||!M)throw Error("Select an account and branch first.");if(!ec||!em||!eb)throw Error("Select an academic structure, academic period and class first.");if(!B||!ay.has(a$(eb)))throw Error("Class-teacher assignment required for this attendance register.");return{accountId:String(o),schoolId:z,branchId:M,classId:eb,academicStructureId:ec,academicPeriodId:em,date:"daily"===eo?ew:void 0}},tb=()=>({...tu(),schoolName:String(p?.name||"")||void 0,branchName:String(u?.name||"")||void 0,className:ta,academicStructureName:tt||void 0,academicPeriodName:tr||void 0}),th=()=>te.map(e=>({id:e.id,admissionNumber:e.student?.admissionNumber||void 0,fullName:e.name})),tx=()=>{eY(null),eX(null),e0(""),e2(0),e8([]),e3([]),as(null),ao(null),ad(null),e9("file"),ae(""),at(!1)},tg=()=>{aa||(eG(!1),tx())},tf=()=>{try{tu()}catch(e){ag("error",e instanceof Error?e.message:"Choose the attendance context first."),e$(!0);return}eO(!1),am(ew||aB()),ab(ew||aB()),eJ(!0)},tv=async e=>{let a=await e.arrayBuffer(),t=aC.LF(a,{type:"array",cellDates:!0}),r=t.SheetNames.map((e,a)=>{let r=t.Sheets[e],s=aC.Wp.sheet_to_json(r,{header:1,raw:!0,defval:null}).map(e=>e.map(e=>null==e||"string"==typeof e||"number"==typeof e||"boolean"==typeof e||e instanceof Date?e:String(e))),i=s.reduce((e,a)=>Math.max(e,a.length),0);return{name:e,index:a,rows:s,rowCount:s.length,columnCount:i}});return{fileName:e.name,sheetNames:t.SheetNames,sheets:r}},ty=()=>eZ&&(eZ.sheets.find(e=>e.name===eQ)||eZ.sheets[0])||null,tw=(e,a)=>{let t=a??(0,U.J)(e),r=(0,U.B)(e,{headerRowIndex:t,skipEmptyRows:!0,trimStrings:!0}),s=aA.n6;"daily"===eo&&(s="grid"===(0,aA.kF)(r.columns)?aA.mw.filter(e=>"date"!==e.key&&"status"!==e.key):aA.mw);let i=(0,aM.WR)(r.columns,s);e2(t),e8(r.columns),e3(i)},tk=async e=>{if(eY(e),eX(null),e0(""),e8([]),e3([]),as(null),ao(null),ad(null),ae(""),!e)return void e9("file");try{at(!0);let a=await tv(e);if(!a.sheets.length)throw Error("This workbook does not contain any worksheets.");let t=a.sheets.find(e=>!e.name.toLowerCase().startsWith("_eleeveon_"))||a.sheets[0];eX(a),e0(t.name),tw(t),e9("sheet")}catch(e){console.error("Failed to read attendance workbook:",e),ag("error",e instanceof Error?e.message:"Failed to read the Excel workbook."),eY(null)}finally{at(!1)}},tj=async()=>{if(!ak||!eb)return void ag("error","Select a class you are assigned to as class teacher.");let e=ty();if(!e)return void ag("error","Choose a worksheet first.");try{at(!0);let a=tu(),t=await (0,aE.uk)(a);if("daily"===eo){let r=(0,aA.H5)({sheet:e,headerRowIndex:e1,mappings:e5,defaultDate:ew,ignoreBlankStatuses:!0}),s=(0,aP.Oz)({records:r.records,rowNumbers:r.rowNumbers,context:a,students:t.students,enrollments:t.enrollments});as(s),ao(null)}else{let r=(0,aA.s9)({sheet:e,headerRowIndex:e1,mappings:e5}),s=(0,aP.N7)({records:r.records,rowNumbers:r.rowNumbers,context:a,students:t.students,enrollments:t.enrollments});ao(s),as(null)}ae([a.accountId,a.schoolId,a.branchId,a.classId,a.academicStructureId,a.academicPeriodId,eo].join("|")),e9("preview")}catch(e){console.error("Failed to preview attendance import:",e),ag("error",e instanceof Error?e.message:"Failed to validate the attendance workbook.")}finally{at(!1)}},tI=async()=>{if(!ak||!eb||!await f({accountId:String(o),schoolId:z,branchId:M,teacherId:R},eb))return void ag("error","Only the currently assigned class teacher can import attendance.");try{let e;at(!0);let a=tu(),t=[a.accountId,a.schoolId,a.branchId,a.classId,a.academicStructureId,a.academicPeriodId,eo].join("|");if(!e7||t!==e7)throw Error("The selected class, period, or mode changed since Excel preview. Please preview again.");if("daily"===eo){if(!ar)throw Error("Preview the daily attendance import first.");e=await (0,aE.MK)(ar,a)}else{if(!ai)throw Error("Preview the term attendance import first.");e=await (0,aE.B2)(ai,a)}ad(e),e9("result"),await av(),ag(e.failed?"info":"success",`Excel import finished: ${e.created} created, ${e.updated} updated, ${e.skipped} skipped${e.failed?`, ${e.failed} failed`:""}.`)}catch(e){console.error("Failed to import attendance workbook:",e),ag("error",e instanceof Error?e.message:"Failed to import attendance.")}finally{at(!1)}},tS=async(e,a)=>{try{ac(e),await a()}catch(e){console.error("Attendance Excel export failed:",e),ag("error",e instanceof Error?e.message:"Failed to create the Excel workbook.")}finally{ac(null)}},tN=()=>{let e=tb(),a=(0,aR.z7)({context:e,students:th(),date:ew});a.sheets[0].rows=te.map(e=>({studentId:e.id,admissionNumber:e.student?.admissionNumber||"",studentName:e.name,date:ew,status:eC[e.id]||""})),(0,aT.w)(a)},tC=()=>{let e=tb(),a=(0,aR.mY)({context:e,students:th()});a.sheets[0].rows=te.map(e=>{let a=eM[e.id]||aG();return{studentId:e.id,admissionNumber:e.student?.admissionNumber||"",studentName:e.name,daysOpened:a.daysOpened,daysPresent:a.daysPresent,timesLate:a.timesLate,daysAbsent:a.daysAbsent,attendancePercent:a.attendancePercent}}),(0,aT.w)(a)},tz=()=>{let e=tb();"daily"===eo?(0,aT.w)((0,aR.z7)({context:e,students:th(),date:ew})):(0,aT.w)((0,aR.mY)({context:e,students:th()}))},tM=()=>{if(!ap||!au)throw Error("Choose a start and end date for the register.");(0,aT.w)((0,aR.VR)({context:tb(),students:th(),startDate:ap,endDate:au}))};return((0,T.TV)("reportsWorkspace",{add:()=>{e$(!0)},search:eI,filter:()=>e$(!0),print:()=>tf(),more:()=>eO(!0)}),d||x||c||!P.ready||B&&J!==q||t)?(0,r.jsx)(a6,{primary:A,title:"Opening Teacher Attendance...",text:"Checking your class-teacher assignments, enrolled students and saved attendance."}):n&&o?z&&M?B&&!V.length?(0,r.jsx)(a6,{primary:A,title:"No class-teacher assignment",text:"Attendance is available only for classes where you are assigned as class teacher. Ask your school administrator to check the assignment."}):(0,r.jsx)(aN.Bk,{allowed:B,fallback:(0,r.jsx)(a6,{primary:A,title:"Attendance access restricted",text:"Open the Teacher Portal with a linked teacher membership to view attendance."}),children:(0,r.jsxs)("main",{className:"ba-page attendance-workspace",style:{"--ba-primary":A},children:[(0,r.jsx)("style",{children:a9}),eW?(0,r.jsxs)("section",{className:`ba-toast ${eW.tone}`,children:[(0,r.jsx)("span",{children:eW.message}),(0,r.jsx)("button",{type:"button",onClick:()=>eK(null),children:"\xd7"})]}):null,(0,r.jsxs)("div",{className:"attendance-work-row","aria-label":"Attendance context and saving",children:[(0,r.jsxs)("button",{type:"button",className:"attendance-context",onClick:()=>e$(!0),"aria-label":"Select attendance structure, period, class and date",title:"Change class, term or date",children:[(0,r.jsx)("span",{className:"attendance-context-class",children:eb?ta:"Select class"}),(0,r.jsx)("span",{className:"attendance-context-period",children:"daily"===eo?ew:"Term totals"}),(0,r.jsx)("span",{"aria-hidden":"true",children:"⌄"})]}),(0,r.jsx)("button",{type:"button",className:`attendance-progress status-dot-mini ${"daily"===eo?ti.total&&100===ti.completion?"green":ti.marked?"orange":"gray":to.total&&to.completed===to.total?"green":to.completed?"orange":"gray"}`,onClick:()=>eL(!0),title:"Attendance progress","aria-label":"View attendance status",children:"daily"===eo?`${ti.marked}/${ti.total}`:`${to.completed}/${to.total}`}),ak?(0,r.jsx)("button",{type:"button",className:"ba-save-inline",onClick:tm,disabled:eU||!ec||!em||!eb,children:eU?"Saving…":"Save"}):null]}),"analytics"===ed?(0,r.jsx)(aZ,{entryMode:eo,daily:ti,term:to}):"daily"===eo?"table"===ed?(0,r.jsx)(aQ,{rows:ts,drafts:eC,setStatus:tn,clearStatus:td,primary:A,editable:ak}):(0,r.jsx)("section",{className:"ba-list",children:ts.map(e=>{let a=eC[e.id];return(0,r.jsxs)("article",{className:"attendance-row",children:[(0,r.jsx)(aH,{name:e.name,photo:e.photo,primary:A}),(0,r.jsxs)("span",{className:"attendance-main",children:[(0,r.jsx)("strong",{children:e.name}),(0,r.jsx)("small",{children:e.admissionNumber})]}),(0,r.jsxs)("span",{className:"attendance-status-actions",children:[["present","absent","late"].map(t=>(0,r.jsx)("button",{type:"button",className:`${t} ${a===t?"active":""}`,disabled:!ak,title:aq(t),onClick:()=>tn(e.id,t),children:t.slice(0,1).toUpperCase()},t)),(0,r.jsx)("button",{type:"button",className:"clear",disabled:!ak,title:"Clear",onClick:()=>td(e.id),children:"\xd7"}),(0,r.jsx)("span",{className:`status-dot-mini ${"present"===a?"green":"absent"===a?"red":"late"===a?"orange":"gray"}`})]})]},e.id)})}):"table"===ed?(0,r.jsx)(a0,{rows:ts,drafts:eM,updateDraft:tl,primary:A,editable:ak}):(0,r.jsx)("section",{className:"ba-list",children:ts.map(e=>{let a=eM[e.id]||aG();return(0,r.jsxs)("article",{className:"term-row",children:[(0,r.jsxs)("div",{className:"term-student",children:[(0,r.jsx)(aH,{name:e.name,photo:e.photo,primary:A}),(0,r.jsxs)("span",{children:[(0,r.jsx)("strong",{children:e.name}),(0,r.jsx)("small",{children:e.admissionNumber})]}),(0,r.jsxs)("b",{children:[a.attendancePercent,"%"]})]}),(0,r.jsxs)("div",{className:"term-input-grid",children:[(0,r.jsx)(aY,{label:"Opened",value:a.daysOpened,disabled:!ak,onChange:a=>tl(e.id,"daysOpened",a)}),(0,r.jsx)(aY,{label:"Present",value:a.daysPresent,disabled:!ak,onChange:a=>tl(e.id,"daysPresent",a)}),(0,r.jsx)(aY,{label:"Absent",value:a.daysAbsent,readOnly:!0}),(0,r.jsx)(aY,{label:"Late",value:a.timesLate,disabled:!ak,onChange:a=>tl(e.id,"timesLate",a)})]})]},e.id)})}),ts.length?null:(0,r.jsxs)("section",{className:"ba-empty",children:[(0,r.jsx)("div",{className:"ba-empty-icon",children:"\uD83D\uDCC5"}),(0,r.jsx)("h3",{children:eb?"No students found":"Select a class"}),(0,r.jsx)("p",{children:eb?"No students match the current search or filters.":"Open the slider filter and choose an academic structure, period and class."})]}),eB?(0,r.jsx)(a1,{search:ej,onSearch:eI,entryMode:eo,structureId:ec,periodId:em,classId:eb,date:ew,statusFilter:eS,structures:Y,periods:a5,classes:W,bulkDaysOpened:eP,bulkScope:eT,onEntryMode:e=>{en(e),"termTotals"===e&&eN("all")},onStructure:e=>{ey(),ep(e),eu(""),eh("")},onPeriod:e=>{ey(),eu(e),eh("")},onClass:e=>{ey(),eh(e)},onDate:ek,onStatus:eN,onBulkDaysOpened:eE,onBulkScope:eR,onApplyBulkDaysOpened:()=>{let e=aW(eP);if(!eb||!ec||!em)return void ag("error","Select an academic structure, period and class first.");if(!e)return void ag("error","Enter a valid number of days opened.");let a="shown"===eT?ts:te;a.length?(eA(t=>{let r={...t};return a.forEach(a=>{let t=r[a.id]||aG();r[a.id]=aG({...t,daysOpened:e,daysPresent:Math.min(t.daysPresent,e)})}),r}),ag("success",`Days opened applied to ${a.length} ${1===a.length?"student":"students"}.`)):ag("info","There are no students to update.")},onClose:()=>e$(!1)}):null,eD?(0,r.jsx)(a2,{entryMode:eo,viewMode:ed,canEdit:ak,onViewMode:e=>{el(e),eO(!1)},onMarkAll:e=>{ez(a=>{let t={...a};return ts.forEach(a=>{t[a.id]=e}),t}),eO(!1)},onClearShown:()=>{"daily"===eo?ez(e=>{let a={...e};return ts.forEach(e=>{delete a[e.id]}),a}):eA(e=>{let a={...e};return ts.forEach(e=>{a[e.id]=aG()}),a}),eO(!1)},onOpenBulkDays:()=>{eO(!1),e$(!0)},onImportExcel:()=>{try{tu()}catch(e){ag("error",e instanceof Error?e.message:"Choose the attendance context first."),e$(!0);return}ak?(eO(!1),tx(),eG(!0)):ag("error","You do not have permission to import attendance.")},onExportExcel:tf,onRefresh:async()=>{eO(!1),await av()},onClose:()=>eO(!1)}):null,eF?(0,r.jsx)(a4,{entryMode:eo,daily:ti,term:to,onClose:()=>eL(!1)}):null,(0,r.jsxs)(F.A,{open:eV,onClose:tg,title:"daily"===eo?"Import Daily Attendance":"Import Term Attendance",subtitle:`${ta}${tr?` \xb7 ${tr}`:""}`,step:e6,busy:aa,width:860,footer:"file"===e6?(0,r.jsxs)("div",{className:"attendance-excel-footer",children:[(0,r.jsx)("button",{type:"button",className:"secondary",onClick:tg,disabled:aa,children:"Cancel"}),(0,r.jsx)("button",{type:"button",className:"primary",disabled:!eH||!eZ||aa,onClick:()=>e9("sheet"),children:"Continue"})]}):"sheet"===e6?(0,r.jsxs)("div",{className:"attendance-excel-footer",children:[(0,r.jsx)("button",{type:"button",className:"secondary",onClick:()=>e9("file"),disabled:aa,children:"Back"}),(0,r.jsx)("button",{type:"button",className:"primary",onClick:()=>{let e=ty();if(!e)return void ag("error","Choose a worksheet first.");try{tw(e,e1),e9("mapping")}catch(e){ag("error",e instanceof Error?e.message:"Could not prepare the worksheet columns.")}},disabled:!eQ||aa,children:"Match columns"})]}):"mapping"===e6?(0,r.jsxs)("div",{className:"attendance-excel-footer",children:[(0,r.jsx)("button",{type:"button",className:"secondary",onClick:()=>e9("sheet"),disabled:aa,children:"Back"}),(0,r.jsx)("button",{type:"button",className:"primary",onClick:tj,disabled:aa,children:"Preview import"})]}):"preview"===e6?(0,r.jsxs)("div",{className:"attendance-excel-footer",children:[(0,r.jsx)("button",{type:"button",className:"secondary",onClick:()=>e9("mapping"),disabled:aa,children:"Back"}),(0,r.jsx)("button",{type:"button",className:"primary",onClick:tI,disabled:aa||("daily"===eo?!ar?.valid:!ai?.valid),children:"Import attendance"})]}):(0,r.jsx)("div",{className:"attendance-excel-footer",children:(0,r.jsx)("button",{type:"button",className:"primary",onClick:tg,disabled:aa,children:"Done"})}),children:["file"===e6?(0,r.jsxs)("div",{className:"attendance-excel-stack",children:[(0,r.jsxs)("div",{className:"attendance-excel-context",children:[(0,r.jsx)("strong",{children:"daily"===eo?"Daily Register":"Term Totals"}),(0,r.jsx)("span",{children:ta}),(0,r.jsx)("span",{children:tr}),"daily"===eo?(0,r.jsx)("span",{children:ew}):null]}),(0,r.jsx)($.A,{value:eH,onChange:tk,disabled:aa,label:"Choose attendance workbook",description:"daily"===eo?"Use an Eleeveon workbook or an existing daily attendance sheet.":"Use an Eleeveon workbook or an existing term-attendance sheet."}),(0,r.jsxs)("div",{className:"attendance-excel-note",children:[(0,r.jsx)("strong",{children:"Safe import"}),(0,r.jsx)("span",{children:"Nothing is changed until the workbook passes validation and you confirm the import."})]})]}):null,"sheet"===e6?(0,r.jsxs)("div",{className:"attendance-excel-stack",children:[(0,r.jsxs)("label",{className:"attendance-excel-field",children:[(0,r.jsx)("span",{children:"Worksheet"}),(0,r.jsx)("select",{value:eQ,onChange:e=>{let a=e.target.value;e0(a);let t=eZ?.sheets.find(e=>e.name===a);t&&tw(t)},children:(eZ?.sheets||[]).map(e=>(0,r.jsxs)("option",{value:e.name,children:[e.name," \xb7 ",e.rowCount," rows"]},e.name))})]}),(0,r.jsxs)("label",{className:"attendance-excel-field",children:[(0,r.jsx)("span",{children:"Header row"}),(0,r.jsx)("input",{type:"number",min:1,max:Math.max(1,ty()?.rowCount||1),value:e1+1,onChange:e=>{let a=Math.max(0,Number(e.target.value||1)-1);e2(a);let t=ty();if(t)try{tw(t,a)}catch{}}}),(0,r.jsxs)("small",{children:["Eleeveon detected row ",e1+1,". Change it if your column headings are on another row."]})]}),(0,r.jsxs)("div",{className:"attendance-excel-note",children:[(0,r.jsx)("strong",{children:"daily"===eo?"Daily spreadsheet":"Term totals spreadsheet"}),(0,r.jsx)("span",{children:"daily"===eo?"Daily imports can use Student \xb7 Date \xb7 Status rows or a register with dates across the columns.":"Term totals use Days Opened, Days Present and Times Late. Eleeveon recalculates Days Absent and Attendance %."})]})]}):null,"mapping"===e6?(0,r.jsxs)("div",{className:"attendance-excel-stack",children:[(0,r.jsxs)("label",{className:"attendance-excel-field",children:[(0,r.jsx)("span",{children:"Header row"}),(0,r.jsx)("input",{type:"number",min:1,value:e1+1,onChange:e=>{let a=Math.max(0,Number(e.target.value||1)-1),t=ty();if(t)try{tw(t,a)}catch(e){ag("error",e instanceof Error?e.message:"Could not read that header row.")}}})]}),(0,r.jsx)(D.A,{columns:e4,fields:"daily"===eo&&"grid"===(0,aA.kF)(e4)?aA.mw.filter(e=>"date"!==e.key&&"status"!==e.key):"daily"===eo?aA.mw:aA.n6,mappings:e5,onChange:e3,disabled:aa,title:"Match attendance columns",description:"daily"===eo&&"grid"===(0,aA.kF)(e4)?"The date columns were detected automatically. Match the student identity columns below.":"Confirm which spreadsheet columns correspond to the attendance fields."})]}):null,"preview"===e6&&ar?(0,r.jsx)(az.A,{validation:ar,title:"Daily attendance preview",description:"Check student matches, dates and statuses before importing.",columns:[{key:"studentName",label:"Student"},{key:"admissionNumber",label:"Admission No."},{key:"date",label:"Date"},{key:"status",label:"Status"}]}):null,"preview"===e6&&ai?(0,r.jsx)(az.A,{validation:ai,title:"Term attendance preview",description:"Days Absent and Attendance % are recalculated by Eleeveon.",columns:[{key:"studentName",label:"Student"},{key:"daysOpened",label:"Opened"},{key:"daysPresent",label:"Present"},{key:"daysAbsent",label:"Absent"},{key:"timesLate",label:"Late"},{key:"attendancePercent",label:"Attendance %",render:e=>`${e.attendancePercent}%`}]}):null,"result"===e6&&an?(0,r.jsxs)("div",{className:"attendance-excel-result",children:[(0,r.jsx)("div",{className:"attendance-excel-result-icon",children:"✓"}),(0,r.jsx)("h3",{children:"Attendance import complete"}),(0,r.jsx)("p",{children:"The workbook has been applied through Eleeveon's local-first attendance records and will use the normal sync pipeline."}),(0,r.jsxs)("div",{className:"attendance-excel-result-grid",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:an.created}),(0,r.jsx)("span",{children:"Created"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:an.updated}),(0,r.jsx)("span",{children:"Updated"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:an.skipped}),(0,r.jsx)("span",{children:"Skipped"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:an.failed}),(0,r.jsx)("span",{children:"Failed"})]})]})]}):null]}),(0,r.jsx)(L.A,{open:eq,onClose:()=>{al||eJ(!1)},title:"daily"===eo?"Daily Attendance Excel":"Term Attendance Excel",subtitle:`${ta}${tr?` \xb7 ${tr}`:""}`,busyKey:al,headerContent:"daily"===eo?(0,r.jsxs)("div",{className:"attendance-excel-register-range",children:[(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Register start"}),(0,r.jsx)("input",{type:"date",value:ap,onChange:e=>am(e.target.value)})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Register end"}),(0,r.jsx)("input",{type:"date",value:au,onChange:e=>ab(e.target.value)})]})]}):null,actions:"daily"===eo?[{key:"export-current",title:"Export current daily attendance",description:"Download the current date with the statuses already entered in Eleeveon.",badge:ew,onClick:()=>tS("export-current",tN)},{key:"blank-template",title:"Download daily template",description:"Create a clean sheet for this class and date.",onClick:()=>tS("blank-template",tz)},{key:"register-template",title:"Download multi-day register",description:"Create a student register with one attendance column for each date in the selected range.",onClick:()=>tS("register-template",tM)}]:[{key:"export-current",title:"Export current term totals",description:"Download the current term totals already entered in Eleeveon.",onClick:()=>tS("export-current",tC)},{key:"blank-template",title:"Download term template",description:"Create a clean term-attendance sheet for this class.",onClick:()=>tS("blank-template",tz)}]})]})}):(0,r.jsx)(a6,{primary:A,title:"No branch workspace selected",text:"Select the correct branch workspace and reopen attendance.",action:(0,r.jsx)("button",{type:"button",className:"ba-state-button",onClick:()=>e.push("/account"),children:"Go to Account Setup"})}):(0,r.jsx)(a6,{primary:A,title:"Redirecting to login...",text:"You must sign in before recording attendance."})}function aH({name:e,photo:a,primary:t}){return(0,r.jsx)("div",{className:"ba-avatar",style:{background:a?`url(${a}) center/cover`:`linear-gradient(135deg, ${t}, rgba(15,23,42,.9))`},children:a?null:String(e||"S").slice(0,1).toUpperCase()})}function aY({label:e,value:a,onChange:t,readOnly:s,disabled:i}){return(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("input",{type:"number",min:0,inputMode:"numeric",value:a,readOnly:s,disabled:i,onChange:e=>t?.(Number(e.target.value))})]})}function aZ({entryMode:e,daily:a,term:t}){return(0,r.jsx)("section",{className:"ba-analysis-grid",children:"daily"===e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(aX,{title:"Present",value:a.present}),(0,r.jsx)(aX,{title:"Absent",value:a.absent}),(0,r.jsx)(aX,{title:"Late",value:a.late}),(0,r.jsx)(aX,{title:"Completion",value:`${a.completion}%`}),(0,r.jsx)(aX,{title:"Attendance rate",value:`${a.attendanceRate}%`}),(0,r.jsx)(aX,{title:"Unmarked",value:a.unmarked})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(aX,{title:"Completed",value:t.completed}),(0,r.jsx)(aX,{title:"Missing",value:t.missing}),(0,r.jsx)(aX,{title:"Average attendance",value:`${t.average}%`}),(0,r.jsx)(aX,{title:"Days opened",value:t.opened}),(0,r.jsx)(aX,{title:"Present",value:t.present}),(0,r.jsx)(aX,{title:"Times late",value:t.late})]})})}function aX({title:e,value:a}){return(0,r.jsxs)("article",{className:"ba-analysis",children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("strong",{children:a})]})}function aQ({rows:e,drafts:a,setStatus:t,clearStatus:s,primary:i,editable:o}){return(0,r.jsx)("section",{className:"ba-table-card",children:(0,r.jsx)("div",{className:"ba-table-scroll",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsxs)("th",{children:["Students (",e.length,")"]}),(0,r.jsx)("th",{children:"Admission No."}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Entry"})]})}),(0,r.jsx)("tbody",{children:e.map(e=>{let n=a[e.id];return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"table-student",children:[(0,r.jsx)(aH,{name:e.name,photo:e.photo,primary:i}),(0,r.jsx)("strong",{children:e.name})]})}),(0,r.jsx)("td",{children:e.admissionNumber}),(0,r.jsx)("td",{children:aq(n)}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"table-actions",children:[["present","absent","late"].map(a=>(0,r.jsx)("button",{type:"button",disabled:!o,className:n===a?"active":"",onClick:()=>t(e.id,a),children:a.slice(0,1).toUpperCase()},a)),(0,r.jsx)("button",{type:"button",disabled:!o,onClick:()=>s(e.id),children:"\xd7"})]})})]},e.id)})})]})})})}function a0({rows:e,drafts:a,updateDraft:t,primary:s,editable:i}){return(0,r.jsx)("section",{className:"ba-table-card",children:(0,r.jsx)("div",{className:"ba-table-scroll",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsxs)("th",{children:["Students (",e.length,")"]}),(0,r.jsx)("th",{children:"Opened"}),(0,r.jsx)("th",{children:"Present"}),(0,r.jsx)("th",{children:"Absent"}),(0,r.jsx)("th",{children:"Late"}),(0,r.jsx)("th",{children:"Attendance"})]})}),(0,r.jsx)("tbody",{children:e.map(e=>{let o=a[e.id]||aG();return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"table-student",children:[(0,r.jsx)(aH,{name:e.name,photo:e.photo,primary:s}),(0,r.jsxs)("span",{children:[(0,r.jsx)("strong",{children:e.name}),(0,r.jsx)("small",{children:e.admissionNumber})]})]})}),(0,r.jsx)("td",{children:(0,r.jsx)("input",{className:"table-number",type:"number",min:0,value:o.daysOpened,disabled:!i,onChange:a=>t(e.id,"daysOpened",Number(a.target.value))})}),(0,r.jsx)("td",{children:(0,r.jsx)("input",{className:"table-number",type:"number",min:0,value:o.daysPresent,disabled:!i,onChange:a=>t(e.id,"daysPresent",Number(a.target.value))})}),(0,r.jsx)("td",{children:(0,r.jsx)("input",{className:"table-number",type:"number",value:o.daysAbsent,readOnly:!0})}),(0,r.jsx)("td",{children:(0,r.jsx)("input",{className:"table-number",type:"number",min:0,value:o.timesLate,disabled:!i,onChange:a=>t(e.id,"timesLate",Number(a.target.value))})}),(0,r.jsx)("td",{children:(0,r.jsxs)("strong",{children:[o.attendancePercent,"%"]})})]},e.id)})})]})})})}function a1(e){return(0,r.jsxs)(a5,{title:"Attendance Setup",text:"Choose the register type and working context.",onClose:e.onClose,children:[(0,r.jsxs)("div",{className:"attendance-search-in-filter",children:[(0,r.jsx)("label",{htmlFor:"attendance-student-search",children:"Search students"}),(0,r.jsx)("input",{id:"attendance-student-search",type:"search",value:e.search,onChange:a=>e.onSearch(a.target.value),placeholder:"Name or admission number"})]}),(0,r.jsxs)("div",{className:"filter-section",children:[(0,r.jsx)("span",{className:"filter-section-label",children:"Register Type"}),(0,r.jsxs)("section",{className:"mode-switch",children:[(0,r.jsxs)("button",{type:"button",className:"daily"===e.entryMode?"active":"",onClick:()=>e.onEntryMode("daily"),children:[(0,r.jsx)("strong",{children:"Daily Register"}),(0,r.jsx)("small",{children:"Present, absent and late by date"})]}),(0,r.jsxs)("button",{type:"button",className:"termTotals"===e.entryMode?"active":"",onClick:()=>e.onEntryMode("termTotals"),children:[(0,r.jsx)("strong",{children:"Term Totals"}),(0,r.jsx)("small",{children:"Opened, present, absent and late"})]})]})]}),(0,r.jsxs)("div",{className:"ba-form",children:[(0,r.jsx)(a3,{label:"Academic Structure",children:(0,r.jsxs)("select",{value:e.structureId,onChange:a=>e.onStructure(a.target.value),children:[(0,r.jsx)("option",{value:"",children:"Select structure"}),e.structures.map(e=>(0,r.jsx)("option",{value:a$(e.id),children:e.name||"Unnamed"},a$(e.id)))]})}),(0,r.jsx)(a3,{label:"Academic Period",children:(0,r.jsxs)("select",{value:e.periodId,onChange:a=>e.onPeriod(a.target.value),children:[(0,r.jsx)("option",{value:"",children:"Select period"}),e.periods.map(e=>(0,r.jsx)("option",{value:a$(e.id),children:e.name||"Unnamed"},a$(e.id)))]})}),(0,r.jsx)(a3,{label:"Class",children:(0,r.jsxs)("select",{value:e.classId,onChange:a=>e.onClass(a.target.value),children:[(0,r.jsx)("option",{value:"",children:"Select class"}),e.classes.map(e=>(0,r.jsx)("option",{value:a$(e.id),children:e.name||"Unnamed"},a$(e.id)))]})}),"daily"===e.entryMode?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a3,{label:"Date",children:(0,r.jsx)("input",{type:"date",value:e.date,onChange:a=>e.onDate(a.target.value)})}),(0,r.jsx)(a3,{label:"Status",children:(0,r.jsxs)("select",{value:e.statusFilter,onChange:a=>e.onStatus(a.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All students"}),(0,r.jsx)("option",{value:"present",children:"Present"}),(0,r.jsx)("option",{value:"absent",children:"Absent"}),(0,r.jsx)("option",{value:"late",children:"Late"}),(0,r.jsx)("option",{value:"unmarked",children:"Unmarked"})]})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a3,{label:"Days Opened",children:(0,r.jsx)("input",{type:"number",min:0,value:e.bulkDaysOpened,onChange:a=>e.onBulkDaysOpened(a.target.value),placeholder:"e.g. 65"})}),(0,r.jsx)(a3,{label:"Apply To",children:(0,r.jsxs)("select",{value:e.bulkScope,onChange:a=>e.onBulkScope(a.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All students"}),(0,r.jsx)("option",{value:"shown",children:"Shown students"})]})}),(0,r.jsx)("button",{type:"button",className:"ba-sheet-action",onClick:e.onApplyBulkDaysOpened,children:"Apply Days Opened"})]})]}),(0,r.jsx)("div",{className:"ba-sheet-footer",children:(0,r.jsx)("button",{type:"button",className:"primary",onClick:e.onClose,children:"Apply"})})]})}function a2(e){return(0,r.jsxs)(a5,{title:"More",text:"Change views, use bulk actions or refresh.",onClose:e.onClose,children:[(0,r.jsxs)("section",{className:"more-section",children:[(0,r.jsx)("span",{children:"View"}),(0,r.jsx)("div",{className:"more-grid",children:[["cards","Cards"],["table","Table"],["analytics","Analytics"]].map(([a,t])=>(0,r.jsxs)("button",{type:"button",className:e.viewMode===a?"active":"",onClick:()=>e.onViewMode(a),children:[(0,r.jsx)("strong",{children:t}),(0,r.jsx)("small",{children:"cards"===a?"Compact mobile-first rows":"table"===a?"Dense desktop register":"Attendance summary"})]},a))})]}),"daily"===e.entryMode?(0,r.jsxs)("section",{className:"more-section",children:[(0,r.jsx)("span",{children:"Daily Actions"}),(0,r.jsxs)("div",{className:"more-actions",children:[(0,r.jsx)("button",{type:"button",disabled:!e.canEdit,onClick:()=>e.onMarkAll("present"),children:"Mark shown present"}),(0,r.jsx)("button",{type:"button",disabled:!e.canEdit,onClick:()=>e.onMarkAll("absent"),children:"Mark shown absent"}),(0,r.jsx)("button",{type:"button",disabled:!e.canEdit,onClick:()=>e.onMarkAll("late"),children:"Mark shown late"}),(0,r.jsx)("button",{type:"button",disabled:!e.canEdit,onClick:e.onClearShown,children:"Clear shown"})]})]}):(0,r.jsxs)("section",{className:"more-section",children:[(0,r.jsx)("span",{children:"Term Actions"}),(0,r.jsxs)("div",{className:"more-actions",children:[(0,r.jsx)("button",{type:"button",disabled:!e.canEdit,onClick:e.onOpenBulkDays,children:"Set days opened"}),(0,r.jsx)("button",{type:"button",disabled:!e.canEdit,onClick:e.onClearShown,children:"Clear shown totals"})]})]}),(0,r.jsxs)("section",{className:"more-section",children:[(0,r.jsx)("span",{children:"Excel"}),(0,r.jsxs)("div",{className:"more-actions",children:[(0,r.jsx)("button",{type:"button",disabled:!e.canEdit,onClick:e.onImportExcel,children:"Import attendance"}),(0,r.jsx)("button",{type:"button",onClick:e.onExportExcel,children:"Export / templates"})]})]}),(0,r.jsxs)("section",{className:"more-section",children:[(0,r.jsx)("span",{children:"System"}),(0,r.jsx)("div",{className:"more-actions",children:(0,r.jsx)("button",{type:"button",onClick:e.onRefresh,children:"Refresh attendance"})})]})]})}function a4({entryMode:e,daily:a,term:t,onClose:s}){return(0,r.jsx)(a5,{title:"Attendance Status",text:"daily"===e?"Current daily register progress.":"Current term totals progress.",onClose:s,children:(0,r.jsx)("div",{className:"status-list",children:"daily"===e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a8,{label:"Students",value:a.total}),(0,r.jsx)(a8,{label:"Marked",value:a.marked}),(0,r.jsx)(a8,{label:"Unmarked",value:a.unmarked}),(0,r.jsx)(a8,{label:"Present",value:a.present}),(0,r.jsx)(a8,{label:"Absent",value:a.absent}),(0,r.jsx)(a8,{label:"Late",value:a.late}),(0,r.jsx)(a8,{label:"Completion",value:`${a.completion}%`})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a8,{label:"Students",value:t.total}),(0,r.jsx)(a8,{label:"Completed",value:t.completed}),(0,r.jsx)(a8,{label:"Missing",value:t.missing}),(0,r.jsx)(a8,{label:"Average attendance",value:`${t.average}%`}),(0,r.jsx)(a8,{label:"Times late",value:t.late})]})})})}function a8({label:e,value:a}){return(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("strong",{children:a})]})}function a5({title:e,text:a,children:t,onClose:s}){return(0,r.jsx)(eb.A,{themeSourceClass:".attendance-workspace",onEscape:s,children:(0,r.jsx)("div",{className:"ba-sheet-backdrop",role:"presentation",onPointerDown:e=>{e.target===e.currentTarget&&s()},children:(0,r.jsxs)("section",{className:"ba-sheet",role:"dialog","aria-modal":"true",onPointerDown:e=>e.stopPropagation(),children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a})]}),(0,r.jsx)("button",{type:"button",onClick:s,"aria-label":`Close ${e}`,children:"\xd7"})]}),t]})})})}function a3({label:e,children:a}){return(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:e}),a]})}function a6({primary:e,title:a,text:t,action:s}){return(0,r.jsxs)("main",{className:"ba-page",style:{"--ba-primary":e},children:[(0,r.jsx)("style",{children:a9}),(0,r.jsxs)("section",{className:"ba-state",children:[(0,r.jsx)("h2",{children:a}),(0,r.jsx)("p",{children:t}),s]})]})}let a9=`
.ba-page{
  --ba-page-bg:var(--bg,var(--background,#f7f8fb));
  --ba-surface:var(--surface,var(--card,var(--background,#fff)));
  --ba-surface-2:var(--surface-2,var(--muted-surface,color-mix(in srgb,var(--ba-surface) 92%,var(--ba-text) 8%)));
  --ba-text:var(--text,var(--foreground,#172033));
  --ba-muted:var(--muted,color-mix(in srgb,var(--ba-text) 62%,transparent));
  --ba-border:var(--border,color-mix(in srgb,var(--ba-text) 14%,transparent));
  --ba-soft:color-mix(in srgb,var(--ba-text) 6%,transparent);
  color:var(--ba-text);
  background:var(--ba-page-bg);
  color-scheme:light dark;
  display:grid;
  gap:10px;
  padding:clamp(8px,1.8vw,16px);
  min-width:0;
}
.ba-search-card{
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto auto auto;
  align-items:center;
  gap:6px;
  min-width:0;
}
.status-dot-mini{
  width:10px;
  height:10px;
  border:0;
  border-radius:999px;
  padding:0;
  flex:0 0 auto;
  background:#94a3b8;
  box-shadow:0 0 0 3px color-mix(in srgb,currentColor 12%,transparent);
}
button.status-dot-mini{cursor:pointer}
.status-dot-mini.green{background:#22c55e}
.status-dot-mini.orange{background:#f59e0b}
.status-dot-mini.red{background:#ef4444}
.status-dot-mini.gray{background:#94a3b8}
.ba-search{
  height:38px;
  min-width:0;
  display:flex;
  align-items:center;
  gap:7px;
  padding:0 10px;
  border:1px solid var(--ba-border);
  border-radius:12px;
  background:var(--ba-surface);
}
.ba-search>span{
  font-size:19px;
  line-height:1;
  opacity:.55;
  transform:translateY(-1px);
}
.ba-search input{
  width:100%;
  min-width:0;
  border:0;
  outline:0;
  background:transparent;
  color:inherit;
  font:inherit;
  font-size:12px;
}
.ba-save-inline,.ba-filter-button,.ba-icon-button{
  height:38px;
  border:1px solid var(--ba-border);
  border-radius:11px;
  background:var(--ba-surface);
  color:inherit;
  font:inherit;
  font-size:10px;
  font-weight:850;
  cursor:pointer;
}
.ba-save-inline{
  padding:0 12px;
  color:var(--ba-primary);
}
.ba-save-inline:disabled{opacity:.45;cursor:not-allowed}
.ba-filter-button,.ba-icon-button{
  width:38px;
  display:grid;
  place-items:center;
  position:relative;
}
.ba-filter-button.active{
  color:var(--ba-primary);
  border-color:color-mix(in srgb,var(--ba-primary) 34%,transparent);
}
.ba-filter-button b{
  position:absolute;
  top:-5px;
  right:-5px;
  min-width:16px;
  height:16px;
  display:grid;
  place-items:center;
  padding:0 3px;
  border-radius:999px;
  background:var(--ba-primary);
  color:#fff;
  font-size:8px;
}
.ba-slider-icon{
  width:17px;
  height:17px;
  fill:none;
  stroke:currentColor;
  stroke-width:1.8;
  stroke-linecap:round;
}
.ba-icon-button{font-size:18px;line-height:1}
.ba-filter-chips{
  display:flex;
  gap:5px;
  flex-wrap:wrap;
}
.ba-filter-chips span{
  border:1px solid var(--ba-border);
  border-radius:999px;
  background:var(--ba-surface);
  padding:4px 8px;
  font-size:8.5px;
  font-weight:750;
  color:var(--ba-muted);
}
.ba-list{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(min(100%,310px),1fr));
  gap:7px;
}
.attendance-row,.term-row{
  min-width:0;
  border:1px solid var(--ba-border);
  border-radius:13px;
  background:var(--ba-surface);
}
.attendance-row{
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto;
  align-items:center;
  gap:8px;
  padding:8px;
}
.ba-avatar{
  width:34px;
  height:34px;
  border-radius:10px;
  display:grid;
  place-items:center;
  color:#fff;
  font-size:12px;
  font-weight:900;
  flex:0 0 auto;
}
.attendance-main{
  min-width:0;
  display:grid;
  gap:1px;
}
.attendance-main strong,.term-student strong{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size:10.5px;
}
.attendance-main small,.term-student small{
  color:var(--ba-muted);
  font-size:8.5px;
}
.attendance-main em{
  color:var(--ba-muted);
  font-size:7.5px;
  font-style:normal;
}
.attendance-status-actions{
  display:flex;
  align-items:center;
  gap:4px;
}
.attendance-status-actions button{
  width:27px;
  height:27px;
  border:1px solid var(--ba-border);
  border-radius:8px;
  background:transparent;
  color:var(--ba-muted);
  font-size:9px;
  font-weight:900;
  cursor:pointer;
}
.attendance-status-actions button:disabled{opacity:.45;cursor:not-allowed}
.attendance-status-actions button.present.active{
  color:#15803d;
  border-color:color-mix(in srgb,#22c55e 45%,transparent);
  background:color-mix(in srgb,#22c55e 10%,transparent);
}
.attendance-status-actions button.absent.active{
  color:#b91c1c;
  border-color:color-mix(in srgb,#ef4444 45%,transparent);
  background:color-mix(in srgb,#ef4444 10%,transparent);
}
.attendance-status-actions button.late.active{
  color:#b45309;
  border-color:color-mix(in srgb,#f59e0b 45%,transparent);
  background:color-mix(in srgb,#f59e0b 10%,transparent);
}
.attendance-status-actions button.clear{font-size:13px}
.attendance-status-actions .status-dot-mini{
  width:7px;
  height:7px;
  margin-left:1px;
}
.term-row{padding:8px}
.term-student{
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto;
  align-items:center;
  gap:8px;
  margin-bottom:8px;
}
.term-student>span{
  min-width:0;
  display:grid;
}
.term-student>b{
  color:var(--ba-primary);
  font-size:12px;
}
.term-input-grid{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:6px;
}
.term-input-grid label{
  min-width:0;
  display:grid;
  gap:3px;
}
.term-input-grid label span{
  color:var(--ba-muted);
  font-size:7.5px;
  font-weight:800;
  text-transform:uppercase;
}
.term-input-grid input{
  width:100%;
  min-width:0;
  box-sizing:border-box;
  border:1px solid var(--ba-border);
  border-radius:8px;
  background:var(--ba-soft);
  color:inherit;
  padding:7px 5px;
  font:inherit;
  font-size:9px;
}
.ba-table-card{
  border:1px solid var(--ba-border);
  border-radius:13px;
  overflow:hidden;
  background:var(--ba-surface);
}
.ba-table-scroll{overflow:auto}
.ba-table-scroll table{
  width:100%;
  min-width:690px;
  border-collapse:collapse;
  font-size:9px;
}
.ba-table-scroll th,.ba-table-scroll td{
  text-align:left;
  padding:8px;
  border-bottom:1px solid var(--ba-border);
}
.ba-table-scroll th{
  color:var(--ba-muted);
  font-size:8px;
  text-transform:uppercase;
  letter-spacing:.03em;
}
.table-student{
  display:flex;
  align-items:center;
  gap:7px;
}
.table-student .ba-avatar{
  width:28px;
  height:28px;
  border-radius:8px;
}
.table-student>span{
  display:grid;
}
.table-student small{
  color:var(--ba-muted);
  font-size:7.5px;
}
.table-actions{
  display:flex;
  gap:4px;
}
.table-actions button{
  min-width:26px;
  height:26px;
  border:1px solid var(--ba-border);
  border-radius:7px;
  background:transparent;
  color:inherit;
  font-size:8px;
  font-weight:900;
}
.table-actions button.active{
  color:#fff;
  border-color:var(--ba-primary);
  background:var(--ba-primary);
}
.table-number{
  width:68px;
  border:1px solid var(--ba-border);
  border-radius:7px;
  background:var(--ba-soft);
  color:inherit;
  padding:6px;
  font:inherit;
  font-size:9px;
}
.ba-analysis-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(135px,1fr));
  gap:7px;
}
.ba-analysis{
  border:1px solid var(--ba-border);
  border-radius:12px;
  background:var(--ba-surface);
  padding:10px;
  display:grid;
  gap:4px;
}
.ba-analysis span{
  color:var(--ba-muted);
  font-size:8px;
  font-weight:800;
  text-transform:uppercase;
}
.ba-analysis strong{
  color:var(--ba-primary);
  font-size:17px;
}
.ba-empty,.ba-state{
  min-height:220px;
  display:grid;
  place-items:center;
  align-content:center;
  gap:6px;
  text-align:center;
  padding:24px;
  border:1px dashed var(--ba-border);
  border-radius:15px;
}
.ba-empty-icon{font-size:26px}
.ba-empty h3,.ba-state h2{
  margin:0;
  font-size:14px;
}
.ba-empty p,.ba-state p{
  max-width:440px;
  margin:0;
  color:var(--ba-muted);
  font-size:9.5px;
  line-height:1.6;
}
.ba-state-button{
  margin-top:8px;
  border:0;
  border-radius:10px;
  background:var(--ba-primary);
  color:#fff;
  padding:9px 12px;
  font-size:9px;
  font-weight:850;
}
.ba-toast{
  position:sticky;
  top:8px;
  z-index:60;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  border:1px solid var(--ba-border);
  border-radius:11px;
  background:var(--ba-surface);
  padding:9px 11px;
  font-size:9px;
  font-weight:750;
}
.ba-toast.success{border-color:color-mix(in srgb,#22c55e 38%,transparent)}
.ba-toast.error{border-color:color-mix(in srgb,#ef4444 38%,transparent)}
.ba-toast.info{border-color:color-mix(in srgb,var(--ba-primary) 38%,transparent)}
.ba-toast button{
  border:0;
  background:transparent;
  color:inherit;
  font-size:16px;
}
.ba-sheet-backdrop{
  position:fixed;
  inset:0;
  z-index:100;
  display:grid;
  place-items:end center;
  padding:8px;
  background:rgba(15,23,42,.58);
}
.ba-sheet{
  width:min(580px,100%);
  max-height:92vh;
  overflow:auto;
  border:1px solid var(--ba-border);
  border-radius:20px 20px 12px 12px;
  background:var(--ba-surface);
  color:var(--ba-text);
  padding:12px;
  box-sizing:border-box;
}
.ba-sheet-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:10px;
  padding-bottom:10px;
  border-bottom:1px solid var(--ba-border);
}
.ba-sheet-head h2{
  margin:0;
  font-size:13px;
}
.ba-sheet-head p{
  margin:2px 0 0;
  color:var(--ba-muted);
  font-size:8.5px;
}
.ba-sheet-head>button{
  width:30px;
  height:30px;
  border:1px solid var(--ba-border);
  border-radius:9px;
  background:transparent;
  color:inherit;
  font-size:17px;
}
.filter-section,.more-section{
  display:grid;
  gap:7px;
  padding:11px 0;
}
.filter-section-label,.more-section>span{
  color:var(--ba-muted);
  font-size:8px;
  font-weight:900;
  text-transform:uppercase;
}
.mode-switch,.more-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:7px;
}
.mode-switch button,.more-grid button{
  min-width:0;
  display:grid;
  gap:2px;
  text-align:left;
  border:1px solid var(--ba-border);
  border-radius:11px;
  background:transparent;
  color:inherit;
  padding:9px;
}
.mode-switch button.active,.more-grid button.active{
  border-color:color-mix(in srgb,var(--ba-primary) 42%,transparent);
  background:color-mix(in srgb,var(--ba-primary) 8%,transparent);
}
.mode-switch strong,.more-grid strong{
  font-size:9.5px;
}
.mode-switch small,.more-grid small{
  color:var(--ba-muted);
  font-size:7.5px;
}
.ba-form{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:8px;
}
.ba-form label{
  min-width:0;
  display:grid;
  gap:4px;
}
.ba-form label>span{
  color:var(--ba-muted);
  font-size:8px;
  font-weight:850;
  text-transform:uppercase;
}
.ba-form select,.ba-form input{
  width:100%;
  box-sizing:border-box;
  border:1px solid var(--ba-border);
  border-radius:9px;
  background:var(--ba-surface);
  color:inherit;
  padding:9px;
  font:inherit;
  font-size:9px;
}
.ba-sheet-action{
  align-self:end;
  min-height:34px;
  border:1px solid color-mix(in srgb,var(--ba-primary) 38%,transparent);
  border-radius:9px;
  background:color-mix(in srgb,var(--ba-primary) 8%,transparent);
  color:var(--ba-primary);
  font-size:8.5px;
  font-weight:850;
}
.ba-sheet-footer{
  display:flex;
  justify-content:flex-end;
  padding-top:12px;
}
.ba-sheet-footer button{
  border:1px solid var(--ba-border);
  border-radius:9px;
  background:transparent;
  color:inherit;
  padding:9px 13px;
  font-size:8.5px;
  font-weight:850;
}
.ba-sheet-footer button.primary{
  border-color:var(--ba-primary);
  background:var(--ba-primary);
  color:#fff;
}
.more-actions{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:7px;
}
.more-actions button{
  min-height:36px;
  border:1px solid var(--ba-border);
  border-radius:9px;
  background:transparent;
  color:inherit;
  padding:8px;
  text-align:left;
  font-size:8.5px;
  font-weight:750;
}
.more-actions button:disabled{opacity:.45}
.status-list{
  display:grid;
  gap:0;
  padding-top:7px;
}
.status-list>div{
  display:flex;
  justify-content:space-between;
  gap:12px;
  padding:9px 1px;
  border-bottom:1px solid var(--ba-border);
  font-size:9px;
}
.status-list span{color:var(--ba-muted)}
.status-list strong{color:var(--ba-primary)}
@media(max-width:640px){
  .ba-page{padding:7px;gap:8px}
  .ba-search-card{gap:4px}
  .ba-search{height:36px;padding:0 8px}
  .ba-save-inline,.ba-filter-button,.ba-icon-button{height:36px}
  .ba-filter-button,.ba-icon-button{width:36px}
  .attendance-row{
    grid-template-columns:auto minmax(0,1fr);
  }
  .attendance-status-actions{
    grid-column:1/-1;
    justify-content:flex-end;
  }
  .term-input-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .ba-form,.mode-switch,.more-grid,.more-actions{
    grid-template-columns:1fr;
  }
}

/* ======================================================
   THEME / DARK-MODE ALIGNMENT
   Mirrors the semantic surface system used by Subjects.tsx.
   ====================================================== */
.ba-search,
.ba-save-inline,
.ba-filter-button,
.ba-icon-button,
.attendance-row,
.term-row,
.ba-table-card,
.ba-analysis,
.ba-sheet,
.ba-state,
.ba-toast{
  background:var(--ba-surface);
  color:var(--ba-text);
  border-color:var(--ba-border);
}

.ba-filter-chips span,
.ba-filter-chips button,
.filter-section,
.mode-switch,
.term-input-grid label,
.ba-form label,
.status-card,
.bulk-card{
  background:var(--ba-surface-2);
  color:var(--ba-text);
  border-color:var(--ba-border);
}

.ba-page input,
.ba-page select,
.ba-page textarea,
.table-number,
.term-input-grid input{
  background:var(--ba-surface);
  color:var(--ba-text);
  border-color:var(--ba-border);
}

.ba-page input::placeholder,
.ba-page textarea::placeholder{
  color:var(--ba-muted);
  opacity:1;
}

.ba-table-scroll th{
  background:var(--ba-surface-2);
  color:var(--ba-muted);
}

.ba-table-scroll td{
  background:var(--ba-surface);
  color:var(--ba-text);
}

.ba-table-scroll tbody tr:hover td{
  background:color-mix(in srgb,var(--ba-primary) 7%,var(--ba-surface));
}

.attendance-status-actions button,
.table-actions button,
.mode-switch button,
.ba-more-list button,
.ba-sheet-actions button{
  background:var(--ba-surface-2);
  color:var(--ba-text);
  border-color:var(--ba-border);
}

.attendance-status-actions button.clear{
  color:var(--ba-muted);
}

.attendance-main strong,
.term-student strong,
.table-student strong,
.ba-analysis strong,
.ba-sheet-head h3,
.ba-state h2,
.ba-empty h3{
  color:var(--ba-text);
}

.attendance-main small,
.attendance-main em,
.term-student small,
.table-student small,
.ba-analysis span,
.ba-sheet-head p,
.ba-empty p,
.ba-state p,
.filter-section-label,
.ba-form label>span{
  color:var(--ba-muted);
}

.ba-sheet-backdrop{
  background:color-mix(in srgb,#020617 68%,transparent);
}

.ba-page input:disabled,
.ba-page select:disabled,
.ba-page textarea:disabled,
.ba-page button:disabled{
  opacity:.58;
}

@media (prefers-color-scheme: dark){
  .ba-page{
    --ba-soft:color-mix(in srgb,var(--ba-text) 8%,transparent);
  }
}


/* -------------------------------------------------------
   Excel interoperability additions
-------------------------------------------------------- */
.attendance-excel-stack{
  display:grid;
  gap:14px;
  min-width:0;
}
.attendance-excel-context{
  display:flex;
  flex-wrap:wrap;
  gap:6px;
  align-items:center;
}
.attendance-excel-context strong,
.attendance-excel-context span{
  border:1px solid var(--ba-border);
  border-radius:999px;
  padding:5px 9px;
  background:var(--ba-surface);
  font-size:10px;
}
.attendance-excel-context strong{
  color:var(--ba-primary);
}
.attendance-excel-note{
  display:grid;
  gap:4px;
  padding:12px;
  border:1px solid var(--ba-border);
  border-radius:13px;
  background:var(--ba-surface);
}
.attendance-excel-note strong{
  font-size:11px;
}
.attendance-excel-note span{
  color:var(--ba-muted);
  font-size:10px;
  line-height:1.5;
}
.attendance-excel-field{
  display:grid;
  gap:5px;
}
.attendance-excel-field>span{
  font-size:9px;
  font-weight:850;
  color:var(--ba-muted);
}
.attendance-excel-field select,
.attendance-excel-field input,
.attendance-excel-register-range input{
  width:100%;
  min-height:40px;
  border:1px solid var(--ba-border);
  border-radius:11px;
  padding:0 10px;
  background:var(--ba-surface);
  color:inherit;
  font:inherit;
  font-size:11px;
  outline:0;
}
.attendance-excel-field small{
  color:var(--ba-muted);
  font-size:9px;
  line-height:1.4;
}
.attendance-excel-field select:focus,
.attendance-excel-field input:focus,
.attendance-excel-register-range input:focus{
  border-color:var(--ba-primary);
}
.attendance-excel-footer{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  gap:8px;
}
.attendance-excel-footer button{
  min-height:38px;
  border:1px solid var(--ba-border);
  border-radius:11px;
  padding:0 14px;
  font:inherit;
  font-size:10px;
  font-weight:850;
  cursor:pointer;
}
.attendance-excel-footer button.secondary{
  background:var(--ba-surface);
  color:var(--ba-text);
}
.attendance-excel-footer button.primary{
  border-color:var(--ba-primary);
  background:var(--ba-primary);
  color:#fff;
}
.attendance-excel-footer button:disabled{
  opacity:.45;
  cursor:not-allowed;
}
.attendance-excel-result{
  display:grid;
  justify-items:center;
  gap:8px;
  padding:22px 10px;
  text-align:center;
}
.attendance-excel-result-icon{
  width:52px;
  height:52px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:color-mix(in srgb,#22c55e 14%,transparent);
  color:#15803d;
  font-size:24px;
  font-weight:900;
}
.attendance-excel-result h3{
  margin:4px 0 0;
  font-size:16px;
}
.attendance-excel-result p{
  max-width:560px;
  margin:0;
  color:var(--ba-muted);
  font-size:10px;
  line-height:1.55;
}
.attendance-excel-result-grid{
  width:min(100%,520px);
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:7px;
  margin-top:8px;
}
.attendance-excel-result-grid>div{
  padding:12px 8px;
  border:1px solid var(--ba-border);
  border-radius:12px;
  background:var(--ba-surface);
}
.attendance-excel-result-grid strong{
  display:block;
  font-size:18px;
}
.attendance-excel-result-grid span{
  display:block;
  margin-top:2px;
  color:var(--ba-muted);
  font-size:9px;
}
.attendance-excel-register-range{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:8px;
}
.attendance-excel-register-range label{
  display:grid;
  gap:4px;
}
.attendance-excel-register-range span{
  color:var(--ba-muted);
  font-size:9px;
  font-weight:800;
}
@media(max-width:560px){
  .attendance-excel-footer{
    width:100%;
  }
  .attendance-excel-footer button{
    flex:1;
  }
  .attendance-excel-result-grid{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
  .attendance-excel-register-range{
    grid-template-columns:1fr;
  }
}


/* ============================================================
   PORTAL-SAFE CENTERED MODALS
   ============================================================ */
.ba-sheet-backdrop,
[class*="excel"][class*="backdrop"] {
  top: calc(var(--eds-shell-top-offset, 0px) + var(--portal-header-height, 48px)) !important;
  right: 0 !important;
  bottom: calc(64px + env(safe-area-inset-bottom, 0px)) !important;
  left: 0 !important;
  width: auto !important;
  height: auto !important;
  min-height: 0 !important;
  box-sizing: border-box !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 10px !important;
  overflow: hidden !important;
  z-index: 58 !important;
}

.ba-sheet,
[class*="excel"][class*="sheet"]:not([class*="backdrop"]),
[class*="excel"][class*="modal"]:not([class*="backdrop"]) {
  margin: 0 auto !important;
  max-height: calc(100% - 4px) !important;
  max-width: calc(100% - 2px) !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scroll-padding-bottom: 84px;
}

.ba-sheet-footer,
.ba-sheet-actions {
  position: sticky;
  bottom: 0;
  z-index: 3;
}

@media (min-width: 980px) {
  .ba-sheet-backdrop,
  [class*="excel"][class*="backdrop"] {
    top: calc(var(--eds-shell-top-offset, 0px) + var(--portal-header-height, 48px)) !important;
    right: 0 !important;
    bottom: 0 !important;
    left: var(--portal-content-left, 0px) !important;
    max-width: calc(100vw - var(--portal-content-left, 0px)) !important;
    padding: 18px !important;
    z-index: 80 !important;
  }
}
/* ============================================================
   EXCEL MODALS — MATCH BRANCH-ADMIN (BA) VISUAL LANGUAGE
   Light/dark-safe surfaces, readable controls and strong contrast.
   ============================================================ */
.ba-page {
  --excel-surface: var(--card-bg, var(--surface, #fff));
  --excel-surface-2: var(--surface-2, color-mix(in srgb, var(--excel-surface) 93%, var(--text, #111827) 7%));
  --excel-text: var(--text, #111827);
  --excel-muted: var(--muted, color-mix(in srgb, var(--excel-text) 62%, transparent));
  --excel-border: var(--border, color-mix(in srgb, var(--excel-text) 14%, transparent));
  --excel-soft: color-mix(in srgb, var(--excel-text) 5%, transparent);
}

.ba-page [class^="excel-"],
.ba-page [class*=" excel-"] {
  color: var(--excel-text);
}

.ba-page [class*="excel-"][class*="sheet"]:not([class*="backdrop"]),
.ba-page [class*="excel-"][class*="modal"]:not([class*="backdrop"]),
.ba-page [class*="excel-"][class*="panel"],
.ba-page [class*="excel-"][class*="card"] {
  background: var(--excel-surface) !important;
  color: var(--excel-text) !important;
  border-color: var(--excel-border) !important;
  box-shadow: 0 22px 58px color-mix(in srgb, #0f172a 16%, transparent) !important;
}

.ba-page [class*="excel-"][class*="backdrop"] {
  background: color-mix(in srgb, #0f172a 52%, transparent) !important;
  backdrop-filter: blur(7px);
}

.ba-page [class^="excel-"] h1,
.ba-page [class^="excel-"] h2,
.ba-page [class^="excel-"] h3,
.ba-page [class*=" excel-"] h1,
.ba-page [class*=" excel-"] h2,
.ba-page [class*=" excel-"] h3 {
  color: var(--excel-text) !important;
}

.ba-page [class^="excel-"] p,
.ba-page [class^="excel-"] small,
.ba-page [class^="excel-"] label > span,
.ba-page [class*=" excel-"] p,
.ba-page [class*=" excel-"] small,
.ba-page [class*=" excel-"] label > span {
  color: var(--excel-muted) !important;
}

.ba-page [class^="excel-"] input,
.ba-page [class^="excel-"] select,
.ba-page [class^="excel-"] textarea,
.ba-page [class*=" excel-"] input,
.ba-page [class*=" excel-"] select,
.ba-page [class*=" excel-"] textarea {
  background: var(--input-bg, var(--excel-surface)) !important;
  color: var(--input-text, var(--excel-text)) !important;
  border: 1px solid var(--input-border, var(--excel-border)) !important;
  box-shadow: none;
}

.ba-page [class^="excel-"] input:focus,
.ba-page [class^="excel-"] select:focus,
.ba-page [class^="excel-"] textarea:focus,
.ba-page [class*=" excel-"] input:focus,
.ba-page [class*=" excel-"] select:focus,
.ba-page [class*=" excel-"] textarea:focus {
  border-color: color-mix(in srgb, var(--ba-primary) 58%, var(--excel-border)) !important;
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--ba-primary) 13%, transparent) !important;
}

.ba-page [class^="excel-"] button,
.ba-page [class*=" excel-"] button {
  color: var(--excel-text);
  border-color: var(--excel-border);
}

.ba-page [class^="excel-"] button:not(.primary):not([class*="primary"]),
.ba-page [class*=" excel-"] button:not(.primary):not([class*="primary"]) {
  background: var(--excel-surface);
}

.ba-page [class^="excel-"] table,
.ba-page [class*=" excel-"] table {
  background: var(--excel-surface);
  color: var(--excel-text);
}

.ba-page [class^="excel-"] th,
.ba-page [class*=" excel-"] th {
  background: var(--excel-surface-2) !important;
  color: var(--excel-muted) !important;
  border-color: var(--excel-border) !important;
}

.ba-page [class^="excel-"] td,
.ba-page [class*=" excel-"] td {
  background: var(--excel-surface) !important;
  color: var(--excel-text) !important;
  border-color: var(--excel-border) !important;
}

/* Local Excel workflow blocks use the same BA surfaces. */
.attendance-excel-stage,
.attendance-excel-file-note,
.attendance-excel-result,
.attendance-excel-result-grid > span,
.attendance-excel-result-errors > div {
  color: var(--excel-text);
}

.attendance-excel-file-note,
.attendance-excel-result-grid > span {
  background: var(--excel-surface) !important;
  border-color: var(--excel-border) !important;
}

.attendance-excel-stage-head p,
.attendance-excel-file-note span,
.attendance-excel-result > p,
.attendance-excel-result-grid small {
  color: var(--excel-muted) !important;
}

.attendance-excel-context-grid select,
.attendance-excel-context-grid input {
  background: var(--input-bg, var(--excel-surface)) !important;
  color: var(--input-text, var(--excel-text)) !important;
  border-color: var(--input-border, var(--excel-border)) !important;
}

.attendance-excel-result-errors > div {
  background: color-mix(in srgb, #ef4444 8%, var(--excel-surface)) !important;
  border-color: color-mix(in srgb, #ef4444 28%, var(--excel-border)) !important;
}

.attendance-excel-result-errors > div span {
  color: color-mix(in srgb, #ef4444 82%, var(--excel-text)) !important;
}

/* File-picker / drop-zone styling, including dark mode. */
.ba-page [class*="excel-"][class*="drop"],
.ba-page [class*="excel-"][class*="picker"],
.ba-page [class*="excel-"][class*="upload"] {
  background: color-mix(in srgb, var(--ba-primary) 4%, var(--excel-surface)) !important;
  border-color: color-mix(in srgb, var(--ba-primary) 26%, var(--excel-border)) !important;
  color: var(--excel-text) !important;
}

.ba-page [class*="excel-"][class*="drop"]:hover,
.ba-page [class*="excel-"][class*="picker"]:hover,
.ba-page [class*="excel-"][class*="upload"]:hover {
  background: color-mix(in srgb, var(--ba-primary) 8%, var(--excel-surface)) !important;
  border-color: color-mix(in srgb, var(--ba-primary) 48%, var(--excel-border)) !important;
}

/* Mapping and preview rows/cards. */
.ba-page [class*="excel-"][class*="row"],
.ba-page [class*="excel-"][class*="item"],
.ba-page [class*="excel-"][class*="mapping"],
.ba-page [class*="excel-"][class*="preview"] {
  border-color: var(--excel-border);
}

@media (prefers-color-scheme: dark) {
  .ba-page [class*="excel-"][class*="backdrop"] {
    background: rgba(2, 6, 23, .72) !important;
  }
}

.attendance-excel-context,
.attendance-excel-note,
.attendance-excel-result,
.attendance-excel-result-grid > div,
.attendance-excel-register-range {
  color: var(--excel-text);
}

.attendance-excel-context,
.attendance-excel-note,
.attendance-excel-result-grid > div {
  background: var(--excel-surface) !important;
  border-color: var(--excel-border) !important;
}

.attendance-excel-context span,
.attendance-excel-note span,
.attendance-excel-result p,
.attendance-excel-result-grid span,
.attendance-excel-field > span,
.attendance-excel-field small,
.attendance-excel-register-range span {
  color: var(--excel-muted) !important;
}

.attendance-excel-field select,
.attendance-excel-field input,
.attendance-excel-register-range input {
  background: var(--input-bg, var(--excel-surface)) !important;
  color: var(--input-text, var(--excel-text)) !important;
  border-color: var(--input-border, var(--excel-border)) !important;
}


/* ============================================================
   V8.1 — compact attendance records, aligned with Students/Classes V5.
   No gradient, repeated filter chips, floating shadows or hover translations.
   ============================================================ */
.attendance-workspace {
  --ba-page-bg: var(--bg,var(--background,#f2f4f7));
  --ba-surface: color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#182235) 7%);
  --ba-surface-2: color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 88%,var(--text,#182235) 12%);
  --ba-border: color-mix(in srgb,var(--border,#d4dae3) 85%,var(--text,#182235) 15%);
  display:block;
  min-height:0;
  padding:5px;
  background:var(--ba-page-bg);
}
.attendance-workspace .attendance-work-row {
  display:flex;
  align-items:center;
  justify-content:flex-end;
  gap:7px;
  min-width:0;
  margin:0 0 9px;
}
.attendance-workspace .attendance-context {
  flex:1 1 auto;
  min-width:0;
  display:flex;
  align-items:center;
  gap:6px;
  padding:5px 3px;
  border:0;
  background:transparent;
  color:var(--ba-text);
  font:inherit;
  font-size:12px;
  text-align:left;
  cursor:pointer;
}
.attendance-workspace .attendance-context-class {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size:12px;
  font-weight:800;
}
.attendance-workspace .attendance-context-period {
  color:var(--ba-muted);
  font-size:11px;
  white-space:nowrap;
}
.attendance-workspace .attendance-progress {
  flex:0 0 auto;
  width:auto;
  height:30px;
  min-width:43px;
  padding:0 8px;
  border:1px solid var(--ba-border);
  border-radius:8px;
  box-shadow:none;
  color:var(--ba-text);
  background:var(--ba-surface-2);
  font-size:11px;
  font-weight:750;
  cursor:pointer;
}
.attendance-workspace .ba-save-inline {
  flex:0 0 auto;
  height:31px;
  padding:0 13px;
  border-radius:8px;
  background:var(--ba-primary);
  border-color:var(--ba-primary);
  color:var(--ba-primary-text,#fff);
  font-size:11px;
  box-shadow:none;
}
.attendance-workspace .ba-list {
  grid-template-columns:repeat(1,minmax(0,1fr));
  gap:9px;
  margin:0;
}
.attendance-workspace .attendance-row,
.attendance-workspace .term-row,
.attendance-workspace .ba-table-card,
.attendance-workspace .ba-analysis {
  background:var(--ba-surface);
  border:1px solid var(--ba-border);
  border-radius:13px;
  box-shadow:none;
  transition:border-color .12s ease;
}
.attendance-workspace .attendance-row:hover,
.attendance-workspace .term-row:hover {
  transform:none;
  box-shadow:none;
}
.attendance-workspace .attendance-row { padding:10px;gap:9px; }
.attendance-workspace .attendance-main strong,
.attendance-workspace .term-student strong {
  font-size:12.5px;
  font-weight:800;
}
.attendance-workspace .attendance-main small,
.attendance-workspace .term-student small { font-size:10px; }
.attendance-workspace .ba-avatar { width:36px;height:36px;border-radius:11px;box-shadow:none; }
.attendance-workspace .attendance-status-actions button { height:30px;width:30px;border-radius:8px;font-size:11px; }
.attendance-workspace .term-row { padding:10px; }
.attendance-workspace .term-input-grid label span { font-size:10px;letter-spacing:0; }
.attendance-workspace .term-input-grid input { font-size:12px; }
.attendance-workspace .ba-table-card { padding:4px;overflow:hidden; }
.attendance-workspace .ba-table-scroll { border-radius:10px; }
.attendance-workspace .ba-table-scroll table { background:var(--ba-surface);font-size:11px; }
.attendance-workspace .ba-table-scroll th {
  position:sticky;top:0;z-index:2;
  background:var(--ba-surface-2);
  font-size:10px;
  letter-spacing:.025em;
}
.attendance-workspace .ba-table-scroll td { background:transparent; font-size:11px; }
.attendance-workspace .ba-table-scroll tbody tr:nth-child(even) { background:var(--ba-surface-2); }
.attendance-workspace .ba-table-scroll tbody tr:hover td { background:transparent; }
.attendance-workspace .ba-table-scroll td .ba-avatar { width:31px;height:31px; }
.attendance-workspace .ba-analysis strong { color:var(--ba-text); }
.attendance-search-in-filter { display:grid;gap:6px;margin:0 0 12px; }
.attendance-search-in-filter label { color:var(--ba-muted);font-size:12px;font-weight:750; }
.attendance-search-in-filter input {
  width:100%;min-height:38px;padding:7px 10px;
  border:1px solid var(--ba-border);border-radius:9px;
  background:var(--ba-surface);color:var(--ba-text);
  font-size:13px;outline:none;
}
/* Excel dialog stays on the shared Excel component's own theme layer. */
@media(min-width:680px){
  .attendance-workspace .ba-list { grid-template-columns:repeat(2,minmax(0,1fr)); }
}
@media(min-width:980px){
  .attendance-workspace .ba-list { grid-template-columns:repeat(3,minmax(0,1fr)); }
}
@media(min-width:1240px){
  .attendance-workspace .ba-list { grid-template-columns:repeat(4,minmax(0,1fr)); }
}
@media(max-width:640px){
  .attendance-workspace { padding:3px; }
  .attendance-workspace .attendance-row { grid-template-columns:auto minmax(0,1fr) auto; }
  .attendance-workspace .attendance-status-actions { grid-column:auto; }
  .attendance-workspace .attendance-status-actions button { width:27px;height:27px; }
  .attendance-workspace .attendance-context-period { font-size:10px; }
  .attendance-workspace .attendance-context-class { font-size:11px; }
  .attendance-workspace .term-input-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
}
@media(max-width:370px){
  .attendance-workspace .attendance-row {grid-template-columns:32px minmax(0,1fr);}
  .attendance-workspace .attendance-status-actions {grid-column:1/-1;justify-content:flex-end;}
}
@media(prefers-reduced-motion:reduce){
  .attendance-workspace * {transition:none !important;animation:none !important;}
}
`,a7={fullName:"",gender:"",dateOfBirth:"",age:"",parentName:"",parentPhone:"",parentEmail:"",address:""},te=e=>null==e?"":String(e);function ta(e,a=new Date){let t=/^(\d{4})-(\d{2})-(\d{2})(?:$|T)/.exec(te(e).trim());if(!t)return;let r=Number(t[1]),s=Number(t[2]),i=Number(t[3]),o=new Date(Date.UTC(r,s-1,i));if(o.getUTCFullYear()!==r||o.getUTCMonth()!==s-1||o.getUTCDate()!==i)return;let n=a.getFullYear()-r;return(a.getMonth()+1<s||a.getMonth()+1===s&&a.getDate()<i)&&n--,n>=0&&n<=130?n:void 0}function tt(e){let a=ta(e.dateOfBirth);return void 0===a?te(e.age):String(a)}function tr(e){let a,t;return["m","male","boy","boys"].includes(t=(a=te(e.gender||e.sex).trim()).toLowerCase())?"Male":["f","female","girl","girls"].includes(t)?"Female":["o","other","nonbinary","non-binary"].includes(t)?"Other":a}function ts(e){return te(e.status||"active").toLowerCase()}function ti(e){let a=ts(e);return"graduated"===a?"blue":"transferred"===a?"orange":"withdrawn"===a?"red":"green"}function to(e){let a=te(e).trim().replace(/^#/,""),t=3===a.length?a.split("").map(e=>e+e).join(""):a;if(!/^[0-9a-f]{6}$/i.test(t))return"#ffffff";let r=parseInt(t,16);return((r>>16&255)*299+(r>>8&255)*587+(255&r)*114)/1e3>155?"#111827":"#ffffff"}function tn({name:e,photo:a,primary:t}){return(0,r.jsx)("div",{className:"ba-avatar",style:{background:a?`url(${a}) center/cover`:t,color:a?"#fff":to(t),borderColor:a?"transparent":`color-mix(in srgb, ${t} 76%, transparent)`},children:!a&&te(e||"S").slice(0,1).toUpperCase()})}function td({row:e}){let a=ti(e);return(0,r.jsx)("span",{className:`status-dot-mini ${a}`,title:ts(e),"aria-label":ts(e)})}function tl({children:e,onClose:a,type:t="modal",primary:i}){let[o,n]=(0,s.useState)({}),d=(0,s.useRef)(a);return(d.current=a,(0,s.useEffect)(()=>{let e=document.body.style.overflow,a=document.documentElement.style.overflow;document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden";let t=document.querySelector(".teacher-students-page")||document.documentElement,r=window.getComputedStyle(t),s={};["--ba-primary","--ba-primary-text","--card-bg","--surface","--surface-2","--text","--muted","--border","--bg","--input-bg","--input-text","--input-border","--font-family","--font-size"].forEach(e=>{let a=r.getPropertyValue(e).trim();a&&(s[e]=a)}),s["--ba-primary"]=i,n(s);let o=e=>{"Escape"===e.key&&d.current()};return window.addEventListener("keydown",o),()=>{document.body.style.overflow=e,document.documentElement.style.overflow=a,window.removeEventListener("keydown",o)}},[i]),"u"<typeof document)?null:(0,v.createPortal)((0,r.jsx)("div",{className:`teacher-students-overlay ${"modal"===t?"ba-modal-backdrop":"ba-sheet-backdrop"}`,style:o,onPointerDown:e=>{e.currentTarget===e.target&&a()},children:e}),document.body)}let tc=`
.teacher-students-overlay .teacher-camera-dialog{width:min(660px,100%)}
.teacher-students-overlay .ba-camera-preview{position:relative;background:#0b1220;border-radius:18px;overflow:hidden;min-height:210px;display:grid;place-items:center}
.teacher-students-overlay .ba-camera-preview video{display:block;width:100%;max-height:58dvh;object-fit:contain}
.teacher-students-overlay .ba-camera-loading{position:absolute;color:#fff;background:#101828c9;padding:9px 14px;border-radius:12px}
.teacher-students-overlay .ba-camera-actions{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:9px;margin-top:12px}
.teacher-students-overlay .ba-camera-actions button{min-height:42px;border-radius:999px;padding:0 14px;font-weight:850;cursor:pointer}
.teacher-students-overlay .ba-camera-secondary{background:var(--surface,#fff);color:var(--text,#111827);border:1px solid var(--border,#ddd)}
.teacher-students-overlay .ba-camera-primary{background:var(--ba-primary);color:#fff;border:1px solid var(--ba-primary)}
.teacher-students-overlay .ba-camera-actions button:disabled{opacity:.5;cursor:not-allowed}
.teacher-students-overlay .teacher-camera-preview{display:block;width:100%;height:auto;max-height:58dvh;min-height:190px;object-fit:contain;background:#0b1220;border-radius:18px}
.teacher-students-overlay .teacher-camera-error{color:#dc2626;font-size:12px;margin:9px 0}
.teacher-students-overlay .ba-media-section{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.teacher-students-overlay .ba-media-section .ba-media-button{width:auto}
@media(max-width:520px){.teacher-students-overlay .ba-media-section .ba-media-button{flex:1 1 125px}}

@keyframes  spin { to { transform: rotate(360deg); } }
.teacher-students-page{
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
.teacher-students-page *,
.teacher-students-page *::before,
.teacher-students-page *::after{
  box-sizing: border-box;
  min-width: 0;
}
.teacher-students-page button,
.teacher-students-page input,
.teacher-students-page select,
.teacher-students-page textarea{
  font: inherit;
  max-width: 100%;
}
.teacher-students-page button{
  -webkit-tap-highlight-color: transparent;
}
.teacher-students-page input,
.teacher-students-page select,
.teacher-students-page textarea{
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
.teacher-students-page input:focus,
.teacher-students-page select:focus,
.teacher-students-page textarea:focus{
  border-color: color-mix(in srgb, var(--ba-primary) 52%, var(--border, rgba(0,0,0,.10)));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--ba-primary) 12%, transparent);
}
:where(.teacher-students-page) .ba-state,
:where(.teacher-students-page) .ba-table-card,
:where(.teacher-students-page) .ba-empty,
.teacher-students-overlay .ba-sheet,
.teacher-students-overlay .ba-modal,
:where(.teacher-students-page) .student-row{
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 12px 28px rgba(15,23,42,.045);
}
:where(.teacher-students-page) .ba-state{
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
:where(.teacher-students-page) .ba-spinner{
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--ba-primary) 18%, transparent);
  border-top-color: var(--ba-primary);
  animation: spin .8s linear infinite;
}
:where(.teacher-students-page) .ba-state h2{
  margin: 0;
  font-size: 22px;
  font-weight: 1000;
  letter-spacing: -.04em;
}
:where(.teacher-students-page) .ba-state p{
  max-width: 34rem;
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.6;
}
:where(.teacher-students-page) .ba-state-button{
  min-height: 42px;
  border: 0;
  border-radius: 999px;
  padding: 0 16px;
  background: var(--ba-primary);
  color: #fff;
  font-weight: 950;
  cursor: pointer;
}
:where(.teacher-students-page) .ba-toast{
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
:where(.teacher-students-page) .ba-toast.success{ background: rgba(34,197,94,.14); color: #166534; }
:where(.teacher-students-page) .ba-toast.error{ background: rgba(239,68,68,.12); color: #991b1b; }
:where(.teacher-students-page) .ba-toast.info{ background: rgba(59,130,246,.13); color: #1d4ed8; }
:where(.teacher-students-page) .ba-toast button{
  border: 0;
  background: transparent;
  color: currentColor;
  font-weight: 1000;
  cursor: pointer;
}
:where(.teacher-students-page) .ba-list{
  display: grid;
  gap: 7px;
  margin-top: 10px;
}
:where(.teacher-students-page) .student-row{
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
:where(.teacher-students-page) .student-row:hover{
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--ba-primary) 24%, var(--border, rgba(0,0,0,.10)));
  box-shadow: 0 16px 34px rgba(15,23,42,.07);
}
:where(.teacher-students-page) .ba-avatar{
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
:where(.teacher-students-page) .student-main,
:where(.teacher-students-page) .student-main strong,
:where(.teacher-students-page) .student-main small,
:where(.teacher-students-page) .student-main em{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
:where(.teacher-students-page) .student-main strong{
  color: var(--text,#111827);
  font-size: 14px;
  font-weight: 1000;
  letter-spacing: -.02em;
}
:where(.teacher-students-page) .student-main small{
  margin-top: 3px;
  color: var(--muted,#64748b);
  font-size: 12px;
  font-weight: 850;
  font-style: normal;
}
:where(.teacher-students-page) .student-main em{
  margin-top: 3px;
  color: color-mix(in srgb, var(--muted,#64748b) 86%, var(--text,#111827));
  font-size: 11px;
  font-weight: 750;
  font-style: normal;
}
:where(.teacher-students-page) .student-side{
  display: grid;
  justify-items: end;
  gap: 6px;
  flex: 0 0 auto;
}
:where(.teacher-students-page) .student-side i{
  color: var(--muted,#64748b);
  font-style: normal;
  font-size: 18px;
  font-weight: 1000;
  line-height: 1;
}
:where(.teacher-students-page) .ba-chip{
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
:where(.teacher-students-page) .ba-chip.green{ background: rgba(34,197,94,.12); color: #16a34a; }
:where(.teacher-students-page) .ba-chip.red{ background: rgba(239,68,68,.12); color: #dc2626; }
:where(.teacher-students-page) .ba-chip.blue{ background: rgba(59,130,246,.12); color: #2563eb; }
:where(.teacher-students-page) .ba-chip.gray{ background: color-mix(in srgb,var(--muted,#64748b) 14%,transparent); color: var(--muted,#64748b); }
:where(.teacher-students-page) .ba-chip.orange{ background: rgba(245,158,11,.14); color: #b45309; }
:where(.teacher-students-page) .ba-chip.purple{ background: rgba(147,51,234,.12); color: #7e22ce; }
:where(.teacher-students-page) .status-dot-mini{
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 999px;
  background: var(--muted,#64748b);
  box-shadow: 0 0 0 4px color-mix(in srgb, currentColor 10%, transparent);
}
:where(.teacher-students-page) .status-dot-mini.green{ background: #22c55e; }
:where(.teacher-students-page) .status-dot-mini.red{ background: #ef4444; }
:where(.teacher-students-page) .status-dot-mini.blue{ background: #3b82f6; }
:where(.teacher-students-page) .status-dot-mini.orange{ background: #f59e0b; }
:where(.teacher-students-page) .status-dot-mini.gray{ background: var(--muted,#64748b); }
.teacher-students-overlay.ba-sheet-backdrop,
.teacher-students-overlay.ba-modal-backdrop{
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15,23,42,.50);
  backdrop-filter: blur(12px);
}
.teacher-students-overlay .ba-sheet{
  width: min(760px, 100%);
  max-height: min(88dvh, 760px);
  overflow-y: auto;
  padding: 14px;
  border-radius: 28px 28px 22px 22px;
  box-shadow: 0 30px 90px rgba(15,23,42,.32);
  animation: sheetIn .18s var(--ease);
}
.teacher-students-overlay .ba-sheet.small{
  width: min(520px, 100%);
}
@keyframes  sheetIn {
  from { transform: translateY(16px); opacity: .7; }
  to { transform: translateY(0); opacity: 1; }
}
.teacher-students-overlay .ba-sheet-head,
.teacher-students-overlay .ba-sheet-profile{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 12px;
}
.teacher-students-overlay .ba-sheet-head h2,
.teacher-students-overlay .ba-sheet-profile h2,
.teacher-students-overlay .ba-modal-head h2{
  margin: 0;
  color: var(--text,#111827);
  font-size: 21px;
  font-weight: 1000;
  letter-spacing: -.05em;
}
.teacher-students-overlay .ba-sheet-head p,
.teacher-students-overlay .ba-sheet-profile p,
.teacher-students-overlay .ba-modal-head p{
  margin: 5px 0 0;
  color: var(--muted,#64748b);
  font-size: 12px;
  line-height: 1.5;
  font-weight: 750;
}
.teacher-students-overlay .ba-sheet-head button,
.teacher-students-overlay .ba-sheet-profile button,
.teacher-students-overlay .ba-modal-head button{
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
.teacher-students-overlay .ba-sheet-actions,
.teacher-students-overlay .ba-modal-actions{
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
.teacher-students-overlay .ba-sheet-actions button,
.teacher-students-overlay .ba-modal-actions button{
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
.teacher-students-overlay .ba-sheet-actions button.primary,
.teacher-students-overlay .ba-modal-actions button:last-child{
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
  box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent);
}
.teacher-students-overlay .ba-modal-actions button:disabled{
  opacity: .65;
  cursor: not-allowed;
}
.teacher-students-overlay .ba-menu-list{
  display: grid;
  gap: 8px;
}
.teacher-students-overlay .ba-menu-list button{
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
.teacher-students-overlay .ba-menu-list button span{
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
.teacher-students-overlay .ba-menu-list button b,
.teacher-students-overlay .ba-menu-list button small{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.teacher-students-overlay .ba-menu-list button b{
  font-size: 13px;
  font-weight: 1000;
}
.teacher-students-overlay .ba-menu-list button small{
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 750;
}
.teacher-students-overlay .ba-menu-list button.active{
  border-color: color-mix(in srgb, var(--ba-primary) 34%, var(--border,rgba(0,0,0,.10)));
  background: color-mix(in srgb, var(--ba-primary) 8%, var(--surface,#fff));
}
.teacher-students-overlay .ba-menu-list button.danger span{
  background: color-mix(in srgb, #dc2626 10%, transparent);
  color: #dc2626;
}
.teacher-students-overlay .ba-menu-list button.danger b{
  color: #991b1b;
}
.teacher-students-overlay .student-detail-strip{
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 7px;
  margin-bottom: 10px;
}
.teacher-students-overlay .student-detail-strip span{
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
.teacher-students-overlay .student-detail-strip b{
  display: block;
  margin-bottom: 3px;
  color: var(--text,#111827);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .05em;
}
.teacher-students-overlay .ba-form{
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 10px;
}
.teacher-students-overlay .ba-form.two{
  grid-template-columns: minmax(0,1fr);
}
.teacher-students-overlay .ba-form.compact{
  gap: 9px;
}
.teacher-students-overlay .ba-form label{
  display: grid;
  gap: 6px;
  min-width: 0;
}
.teacher-students-overlay .ba-form span{
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .06em;
}
.teacher-students-overlay .ba-form .wide{
  grid-column: 1 / -1;
}
.teacher-students-overlay .ba-form-section{
  padding: 12px 0;
  border-top: 1px solid var(--border,rgba(0,0,0,.08));
}
.teacher-students-overlay .ba-form-section:first-of-type{
  border-top: 0;
  padding-top: 0;
}
.teacher-students-overlay .ba-form-section h3{
  margin: 0 0 10px;
  color: var(--text,#111827);
  font-size: 14px;
  font-weight: 1000;
  letter-spacing: -.03em;
}
.teacher-students-page input[type="file"]{
  padding: 10px;
  font-size: 12px;
}
.teacher-students-page textarea{
  min-height: 92px;
  padding: 12px;
  resize: vertical;
  line-height: 1.55;
}
.teacher-students-overlay .ba-media-button{
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
  transition: transform .18s var(--ease), background .18s var(--ease), border-color .18s var(--ease), box-shadow .18s var(--ease), filter .18s var(--ease);
}
.teacher-students-overlay .ba-media-button.secondary{
  background: var(--surface, #fff);
  color: var(--ba-primary) !important;
  box-shadow: none;
}
.teacher-students-overlay .ba-media-button input{
  display: none;
}
.teacher-students-overlay .ba-preview-photo{
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid var(--border,rgba(0,0,0,.10));
}
.teacher-students-overlay .ba-modal{
  width: min(980px, 100%);
  max-height: min(92dvh, 900px);
  overflow-y: auto;
  padding: 14px;
  border-radius: 28px;
  box-shadow: 0 30px 90px rgba(15,23,42,.35);
}
.teacher-students-overlay .ba-modal-head{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 4px 2px 14px;
}
:where(.teacher-students-page) .ba-table-card,
:where(.teacher-students-page) .ba-empty{
  padding: 13px;
  border-radius: 24px;
}
:where(.teacher-students-page) .ba-empty{
  display: grid;
  place-items: center;
  align-content: center;
  gap: 8px;
  min-height: 220px;
  text-align: center;
  border-style: dashed;
}
:where(.teacher-students-page) .ba-empty-icon{
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));
  font-size: 28px;
}
:where(.teacher-students-page) .ba-empty h3{
  margin: 0;
  font-size: 18px;
  font-weight: 1000;
}
:where(.teacher-students-page) .ba-empty p{
  margin: 0;
  color: var(--muted,#64748b);
  font-size: 13px;
  line-height: 1.6;
}
:where(.teacher-students-page) .ba-table-card{
  margin-top: 10px;
}
:where(.teacher-students-page) .ba-table-scroll{
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  border-radius: 18px;
  border: 1px solid var(--border,rgba(0,0,0,.08));
}
:where(.teacher-students-page) .ba-table-scroll table{
  width: 100%;
  min-width: 1120px;
  border-collapse: collapse;
  background: var(--card-bg, var(--surface, var(--bg, transparent)));
}
:where(.teacher-students-page) .ba-table-scroll th,
:where(.teacher-students-page) .ba-table-scroll td{
  padding: 10px;
  border-bottom: 1px solid var(--border,rgba(0,0,0,.08));
  vertical-align: top;
  text-align: left;
  font-size: 13px;
}
:where(.teacher-students-page) .ba-table-scroll th{
  background: var(--table-header-bg, color-mix(in srgb, var(--ba-primary) 6%, var(--card-bg, var(--surface, var(--bg, transparent)))));
  color: var(--table-header-text, var(--muted, var(--text)));
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .07em;
}
:where(.teacher-students-page) .ba-table-scroll td strong,
:where(.teacher-students-page) .ba-table-scroll td span{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
:where(.teacher-students-page) .ba-table-scroll td span{
  margin-top: 3px;
  color: var(--muted,#64748b);
  font-size: 11px;
}
:where(.teacher-students-page) .ba-table-actions{
  display: flex;
  flex-wrap: nowrap;
  gap: 7px;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
:where(.teacher-students-page) .ba-table-actions::-webkit-scrollbar{
  display: none;
}
:where(.teacher-students-page) .ba-table-actions button{
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
:where(.teacher-students-page) .ba-table-actions button:first-child{
  background: var(--ba-primary);
  color: #fff;
  border-color: var(--ba-primary);
}
:where(.teacher-students-page) .ba-table-actions button.ba-delete{
  color: #991b1b;
  background: color-mix(in srgb,#dc2626 7%,var(--surface,#fff));
  border-color: color-mix(in srgb,#dc2626 24%,var(--border,rgba(0,0,0,.10)));
}
:where(.teacher-students-page) .ba-empty-table{
  padding: 22px;
  text-align: center;
  color: var(--muted,#64748b);
  font-weight: 850;
}
@media  (min-width: 680px) {
.teacher-students-page{
    padding: calc(12px * var(--local-density-scale,1));
    padding-bottom: 44px;
  }
:where(.teacher-students-page) .ba-list{
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
:where(.teacher-students-page) .student-row{
    border-radius: 24px;
    padding: 12px;
  }
.teacher-students-overlay .ba-form{
    grid-template-columns: repeat(2, minmax(0,1fr));
  }
.teacher-students-overlay .ba-form.two{
    grid-template-columns: repeat(2, minmax(0,1fr));
  }
.teacher-students-overlay.ba-modal-backdrop,
.teacher-students-overlay.ba-sheet-backdrop{
    place-items: center;
    padding: 18px;
  }
.teacher-students-overlay .ba-sheet{
    border-radius: 28px;
    padding: 18px;
  }
.teacher-students-overlay .ba-modal{
    padding: 18px;
  }
}
@media  (min-width: 1040px) {
.teacher-students-page{
    padding: calc(16px * var(--local-density-scale,1));
    padding-bottom: 48px;
  }
:where(.teacher-students-page) .ba-list,
:where(.teacher-students-page) .ba-table-card{
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }
:where(.teacher-students-page) .ba-list{
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
.teacher-students-overlay .ba-form{
    grid-template-columns: repeat(3, minmax(0,1fr));
  }
.teacher-students-overlay .ba-form.two{
    grid-template-columns: repeat(2, minmax(0,1fr));
  }
}
@media  (max-width: 520px) {
.teacher-students-page{
    padding: calc(7px * var(--local-density-scale,1));
    padding-bottom: max(38px, env(safe-area-inset-bottom));
  }
.teacher-students-overlay .student-detail-strip{
    grid-template-columns: minmax(0,1fr);
  }
.teacher-students-overlay .ba-sheet,
.teacher-students-overlay .ba-modal{
    border-radius: 24px 24px 18px 18px;
    padding: 12px;
  }
.teacher-students-overlay .ba-sheet-actions,
.teacher-students-overlay .ba-modal-actions{
    display: grid;
    grid-template-columns: minmax(0,1fr);
  }
.teacher-students-overlay .ba-sheet-actions button,
.teacher-students-overlay .ba-modal-actions button{
    width: 100%;
  }
}
.teacher-students-overlay .ba-media-button{
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
.teacher-students-overlay .ba-media-button.secondary{
  background: var(--surface, #fff);
  color: var(--ba-primary);
  box-shadow: none;
}
@media  (max-width: 520px) {
.teacher-students-overlay .ba-media-button{
    width: 100%;
  }
}
.teacher-students-page .settings-save-button{
  width: 42px;
  min-width: 42px;
  padding: 0;
  font-size: 25px;
  letter-spacing: 0;
}
.teacher-students-overlay .ba-modal-actions button:last-child,
.teacher-students-overlay .ba-sheet-actions .primary,
.teacher-students-page .ba-state-button,
.teacher-students-overlay .ba-media-button:not(.secondary){
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff !important;
  box-shadow: 0 12px 28px color-mix(in srgb, var(--ba-primary) 22%, transparent);
}
.teacher-students-overlay .ba-media-button.secondary{
  border-color: var(--ba-primary);
  background: var(--surface,#fff);
  color: var(--ba-primary) !important;
  box-shadow: none;
}
.teacher-students-page .ba-cancel-button,
.teacher-students-overlay .ba-modal-actions button:not(:last-child),
.teacher-students-overlay .ba-sheet-actions button:not(.primary){
  border-color: var(--border, rgba(0,0,0,.10));
  background: color-mix(in srgb, var(--muted,#64748b) 8%, var(--surface,#fff));
  color: var(--text,#111827) !important;
  box-shadow: none;
}
.teacher-students-overlay .ba-modal-actions button:last-child:hover,
.teacher-students-overlay .ba-sheet-actions .primary:hover,
.teacher-students-page .ba-state-button:hover,
.teacher-students-overlay .ba-media-button:not(.secondary):hover{
  filter: brightness(.96);
  transform: translateY(-1px);
}
.teacher-students-overlay .ba-media-button.secondary:hover{
  background: color-mix(in srgb, var(--ba-primary) 7%, var(--surface,#fff));
  transform: translateY(-1px);
}
.teacher-students-overlay .ba-media-button:focus-visible,
.teacher-students-overlay .ba-modal-actions button:focus-visible,
.teacher-students-overlay .ba-sheet-actions button:focus-visible{
  outline: 3px solid color-mix(in srgb, var(--ba-primary) 28%, transparent);
  outline-offset: 2px;
}
.teacher-students-page button:disabled,
.teacher-students-overlay .ba-media-button[aria-disabled="true"]{
  cursor: not-allowed;
  opacity: .58;
  transform: none !important;
  filter: none !important;
  box-shadow: none !important;
}
.teacher-students-page .ba-search:focus-within{
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--ba-primary) 12%, transparent);
}
.teacher-students-page .student-row{
  position: relative;
  overflow: hidden;
  border-color: color-mix(in srgb, var(--ba-primary) 15%, var(--border, rgba(0,0,0,.10)));
}
.teacher-students-page .student-row::before{
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 3px;
  background: var(--ba-primary);
  opacity: .78;
}
.teacher-students-page .student-row:hover,
.teacher-students-page .student-row:focus-within{
  border-color: color-mix(in srgb, var(--ba-primary) 46%, var(--border, rgba(0,0,0,.10)));
  background: color-mix(in srgb, var(--ba-primary) 5%, var(--card-bg, var(--surface, #fff)));
  box-shadow: 0 14px 30px color-mix(in srgb, var(--ba-primary) 10%, transparent);
}
.teacher-students-page .ba-avatar{
  border: 1px solid color-mix(in srgb, var(--ba-primary) 42%, transparent);
  box-shadow: 0 12px 24px color-mix(in srgb, var(--ba-primary) 18%, transparent);
}
.teacher-students-page .ba-chip.blue,
.teacher-students-page .ba-chip.purple{
  border-color: color-mix(in srgb, var(--ba-primary) 30%, transparent);
  background: color-mix(in srgb, var(--ba-primary) 10%, var(--card-bg, var(--surface, #fff)));
  color: var(--ba-primary);
}
.teacher-students-page .ba-table-scroll th{
  background: color-mix(in srgb, var(--ba-primary) 9%, var(--table-head, var(--card-bg, #fff)));
  color: var(--text, #111827);
}
@media  (max-width: 640px) {
.teacher-students-overlay .ba-section-heading-row .ba-media-button{
    width: 100%;
  }
}
.teacher-students-overlay .ba-field-hint{
  display: block;
  margin-top: 6px;
  color: var(--muted, #64748b);
  font-size: .74rem;
  line-height: 1.4;
  font-weight: 650;
}
.teacher-students-page select:disabled,
.teacher-students-page input:disabled{
  opacity: .68;
  cursor: not-allowed;
  background: color-mix(in srgb, var(--surface, #fff) 86%, var(--border, rgba(0,0,0,.10)));
}
.teacher-students-overlay .ba-inline-info{
  align-self: stretch;
  display: grid;
  gap: 4px;
  padding: 11px 12px;
  border-radius: 14px;
  border: 1px solid color-mix(in srgb, var(--ba-primary) 22%, var(--border, rgba(0,0,0,.10)));
  background: color-mix(in srgb, var(--ba-primary) 7%, var(--card-bg, var(--surface, #fff)));
}
.teacher-students-overlay .ba-inline-info b{
  font-size: .8rem;
  color: var(--text, #111827);
}
.teacher-students-overlay .ba-inline-info span{
  color: var(--muted, #64748b);
  font-size: .73rem;
  line-height: 1.45;
}
.teacher-students-overlay.ba-sheet-backdrop,
.teacher-students-overlay.ba-modal-backdrop{
  --ba-card: var(--card-bg, var(--surface, #ffffff));
  --ba-text: var(--text, var(--foreground, #111827));
  --ba-muted: var(--muted, var(--muted-foreground, #64748b));
  --ba-border: var(--border, rgba(15, 23, 42, .12));

  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100dvh !important;
  min-width: 100vw !important;
  min-height: 100dvh !important;
  max-width: none !important;
  max-height: none !important;
  z-index: 2147482000 !important;

  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  box-sizing: border-box !important;
  padding:
    max(10px, env(safe-area-inset-top, 0px))
    10px
    max(10px, env(safe-area-inset-bottom, 0px)) !important;
  overflow: hidden !important;

  background: rgba(2, 6, 23, .68) !important;
  -webkit-backdrop-filter: blur(11px) saturate(.9);
  backdrop-filter: blur(11px) saturate(.9);
}
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet{
  position: relative;
  width: min(760px, calc(100vw - 20px)) !important;
  max-width: calc(100vw - 20px) !important;
  max-height: calc(100dvh - 20px) !important;
  min-height: 0 !important;
  margin: 0 !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scroll-padding-bottom: 90px;
  border: 1px solid var(--ba-border) !important;
  border-radius: 24px !important;
  background: var(--ba-card) !important;
  color: var(--ba-text) !important;
  box-shadow: 0 28px 90px rgba(2, 6, 23, .34) !important;
}
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet.small{
  width: min(520px, calc(100vw - 20px)) !important;
}
.teacher-students-overlay.ba-modal-backdrop .ba-modal{
  position: relative;
  width: min(980px, calc(100vw - 20px)) !important;
  max-width: calc(100vw - 20px) !important;
  max-height: calc(100dvh - 20px) !important;
  min-height: 0 !important;
  margin: 0 !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scroll-padding-bottom: 96px;
  border: 1px solid var(--ba-border) !important;
  border-radius: 24px !important;
  background: var(--ba-card) !important;
  color: var(--ba-text) !important;
  box-shadow: 0 28px 90px rgba(2, 6, 23, .36) !important;
}
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-head,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-profile,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-head{
  position: sticky;
  top: -14px;
  z-index: 8;
  margin: -14px -14px 12px;
  padding: 14px;
  border-bottom: 1px solid var(--ba-border);
  background: var(--ba-card);
}
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-head h2,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-profile h2,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-head h2,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-head p,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-profile p,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-head p{
  color: inherit;
}
.teacher-students-overlay.ba-sheet-backdrop .ba-modal-close,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-close{
  position: relative;
  z-index: 10;
  flex: 0 0 auto;
  width: 44px !important;
  min-width: 44px !important;
  height: 44px !important;
  min-height: 44px !important;
  display: grid !important;
  place-items: center !important;
  padding: 0 !important;
  border: 1px solid var(--ba-border) !important;
  border-radius: 999px !important;
  background: color-mix(in srgb, var(--ba-text) 6%, var(--ba-card)) !important;
  color: var(--ba-text) !important;
  box-shadow: none !important;
  opacity: 1 !important;
  font-size: 20px !important;
  line-height: 1 !important;
  font-weight: 900 !important;
  cursor: pointer;
  pointer-events: auto !important;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
.teacher-students-overlay.ba-sheet-backdrop .ba-modal-close:hover,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-close:hover{
  background: color-mix(in srgb, var(--ba-primary) 10%, var(--ba-card)) !important;
  border-color: color-mix(in srgb, var(--ba-primary) 38%, var(--ba-border)) !important;
}
.teacher-students-overlay.ba-sheet-backdrop input,
.teacher-students-overlay.ba-sheet-backdrop select,
.teacher-students-overlay.ba-sheet-backdrop textarea,
.teacher-students-overlay.ba-modal-backdrop input,
.teacher-students-overlay.ba-modal-backdrop select,
.teacher-students-overlay.ba-modal-backdrop textarea{
  background: var(--input-bg, var(--ba-card)) !important;
  color: var(--input-text, var(--ba-text)) !important;
  border-color: var(--input-border, var(--ba-border)) !important;
}
.teacher-students-overlay.ba-sheet-backdrop select option,
.teacher-students-overlay.ba-modal-backdrop select option{
  background: var(--ba-card);
  color: var(--ba-text);
}
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-actions,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-actions{
  position: sticky !important;
  bottom: -14px !important;
  z-index: 7;
  margin: 14px -14px -14px !important;
  padding: 12px 14px 14px !important;
  border-top: 1px solid var(--ba-border);
  background: var(--ba-card) !important;
}
@media  (prefers-color-scheme: dark) {
.teacher-students-overlay.ba-sheet-backdrop,
.teacher-students-overlay.ba-modal-backdrop{
    background: rgba(2, 6, 23, .80) !important;
  }
}
@media  (max-width: 520px) {
.teacher-students-overlay.ba-sheet-backdrop,
.teacher-students-overlay.ba-modal-backdrop{
    padding:
      max(8px, env(safe-area-inset-top, 0px))
      8px
      max(8px, env(safe-area-inset-bottom, 0px)) !important;
  }
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet,
.teacher-students-overlay.ba-modal-backdrop .ba-modal{
    width: calc(100vw - 16px) !important;
    max-width: calc(100vw - 16px) !important;
    max-height: calc(100dvh - 16px) !important;
    border-radius: 20px !important;
  }
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-head,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-profile,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-head{
    top: -12px;
    margin: -12px -12px 12px;
    padding: 12px;
  }
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-actions,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-actions{
    bottom: -12px !important;
    margin: 12px -12px -12px !important;
    padding: 10px 12px 12px !important;
  }
}
.teacher-students-page{
  --excel-surface: var(--card-bg, var(--surface, #fff));
  --excel-surface-2: var(--surface-2, color-mix(in srgb, var(--excel-surface) 93%, var(--text, #111827) 7%));
  --excel-text: var(--text, #111827);
  --excel-muted: var(--muted, color-mix(in srgb, var(--excel-text) 62%, transparent));
  --excel-border: var(--border, color-mix(in srgb, var(--excel-text) 14%, transparent));
  --excel-soft: color-mix(in srgb, var(--excel-text) 5%, transparent);
}
.teacher-students-overlay.ba-sheet-backdrop,
.teacher-students-overlay.ba-modal-backdrop{
  background: rgba(2, 6, 23, .66) !important;
  -webkit-backdrop-filter: blur(12px) saturate(.9) !important;
  backdrop-filter: blur(12px) saturate(.9) !important;
}
.teacher-students-overlay.ba-sheet-backdrop .ba-modal-close,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-close,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-head > button,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-profile > button,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-head > button{
  position: relative !important;
  z-index: 20 !important;
  width: 42px !important;
  min-width: 42px !important;
  height: 42px !important;
  min-height: 42px !important;
  padding: 0 !important;
  display: grid !important;
  place-items: center !important;
  border: 1px solid rgba(15, 23, 42, .20) !important;
  border-radius: 999px !important;
  background: #ffffff !important;
  color: #111827 !important;
  opacity: 1 !important;
  visibility: visible !important;
  box-shadow: 0 5px 16px rgba(15, 23, 42, .16) !important;
  font-size: 20px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  cursor: pointer !important;
  pointer-events: auto !important;
}
.teacher-students-overlay.ba-sheet-backdrop .ba-modal-close:hover,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-close:hover,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-head > button:hover,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-profile > button:hover,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-head > button:hover{
  border-color: color-mix(in srgb, var(--ba-primary, #2563eb) 42%, rgba(15, 23, 42, .20)) !important;
  background: color-mix(in srgb, var(--ba-primary, #2563eb) 8%, #ffffff) !important;
  color: #111827 !important;
}
@media  (prefers-color-scheme: dark) {
.teacher-students-overlay.ba-sheet-backdrop,
.teacher-students-overlay.ba-modal-backdrop{
    background: rgba(2, 6, 23, .78) !important;
  }
.teacher-students-overlay.ba-sheet-backdrop .ba-modal-close,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-close,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-head > button,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-profile > button,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-head > button{
    border-color: rgba(255, 255, 255, .22) !important;
    background: #1f2937 !important;
    color: #ffffff !important;
    box-shadow: 0 5px 18px rgba(0, 0, 0, .36) !important;
  }
}
:where(.teacher-students-page) .ba-table-person{ display:flex; align-items:center; gap:9px; min-width:160px; }
:where(.teacher-students-page) .ba-table-person .ba-avatar{ width:32px; height:32px; font-size:12px; flex:0 0 32px; }
.teacher-students-page{ background: var(--bg, var(--background, #f2f4f7)); padding: 5px; min-height: 0; }
:where(.teacher-students-page) .ba-list{ gap: 9px; margin-top: 2px; }
:where(.teacher-students-page) .student-row,
:where(.teacher-students-page) .ba-table-card{
  background: color-mix(in srgb, var(--card-bg, var(--surface, #fff)) 93%, var(--text, #182235) 7%);
  border: 1px solid color-mix(in srgb, var(--border, #d4dae3) 85%, var(--text, #182235) 15%);
  box-shadow: none; border-radius: 13px; transition: border-color .12s ease;
}
:where(.teacher-students-page) .student-row:hover{ transform: none; box-shadow: none; }
:where(.teacher-students-page) .ba-table-card{ padding: 4px; margin-top: 2px; }
:where(.teacher-students-page) .ba-table-scroll{ border-radius: 10px; }
:where(.teacher-students-page) .ba-table-scroll table{ background: color-mix(in srgb, var(--card-bg, var(--surface,#fff)) 95%, var(--text,#182235) 5%); }
:where(.teacher-students-page) .ba-table-scroll thead th{ position: sticky; top: 0; z-index: 2;
  background: color-mix(in srgb, var(--card-bg, var(--surface,#fff)) 85%, var(--text,#182235) 15%); }
:where(.teacher-students-page) .ba-table-scroll tbody tr:nth-child(even){ background: color-mix(in srgb, var(--card-bg, var(--surface,#fff)) 89%, var(--text,#182235) 11%); }
:where(.teacher-students-page) .ba-table-scroll td{ background: transparent; }
:where(.teacher-students-page) .ba-avatar{ box-shadow: none; border-radius: 12px; }
.teacher-students-page .student-row::before{ display: none; }
@media  (min-width: 1024px) {
:where(.teacher-students-page) .ba-list{ grid-template-columns: repeat(4,minmax(0,1fr)); }
}
@media  (max-width: 639px) {
.teacher-students-page{ padding: 3px; }
:where(.teacher-students-page) .student-row{ padding: 9px; }
}
@media  (prefers-reduced-motion: reduce) {
:where(.teacher-students-page) .student-row{ transition: none; }
}
.teacher-students-page{
  width: 100%;
  max-width: none;
  min-width: 0;
  min-height: 0;
  margin: 0;
  padding: 5px;
  padding-bottom: max(20px, env(safe-area-inset-bottom));
  overflow-x: clip;
}
.teacher-students-page .ba-list,
.teacher-students-page .ba-table-card{
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  max-width: none;
  margin-left: 0;
  margin-right: 0;
}
.teacher-students-page .ba-list{
  gap: 9px;
  margin-top: 2px;
  align-items: stretch;
}
.teacher-students-page .ba-list > .student-row{
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 9px 10px;
}
.teacher-students-page .ba-table-card{
  display: block;
  padding: 4px;
  margin-top: 2px;
  overflow: visible;
}
.teacher-students-page .ba-table-scroll{
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin: 0;
  overflow-x: auto;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  border-radius: 10px;
}
.teacher-students-page .ba-table-scroll table{
  width: 100%;
  margin: 0;
}
.teacher-students-page .ba-table-scroll th,
.teacher-students-page .ba-table-scroll td{
  padding: 9px 10px;
}
@media  (min-width: 680px) and (max-width: 1023px) {
.teacher-students-page .ba-list{ grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media  (min-width: 1024px) {
.teacher-students-page .ba-list{ grid-template-columns: repeat(4, minmax(0,1fr)); }
}
@media  (max-width: 679px) {
.teacher-students-page .ba-list{ grid-template-columns: minmax(0,1fr); }
}
@media  (max-width: 639px) {
.teacher-students-page{
    padding: 3px;
    padding-bottom: max(14px, env(safe-area-inset-bottom));
  }
.teacher-students-page .ba-list{ gap: 7px; }
.teacher-students-page .ba-list > .student-row{ padding: 9px; }
.teacher-students-page .ba-table-scroll th,
.teacher-students-page .ba-table-scroll td{ padding: 8px 9px; }
}

/* Teacher-specific actions: original Branch Admin cards and tables retain the same
   surface, texture, spacing, typography, and responsive layout. */
.teacher-students-page .student-row:focus-visible,
.teacher-students-page .ba-table-actions button:focus-visible{outline:2px solid var(--ba-primary);outline-offset:2px}
.teacher-students-page .ba-table-actions button{min-width:58px}
.teacher-students-page .ba-table-person{min-width:160px}
.teacher-students-page .ba-page{max-width:none}
/* Keep the original Branch Admin automatic card height. */
.teacher-students-overlay{--ease:cubic-bezier(.2,.8,.2,1);font-family:var(--font-family,system-ui);font-size:var(--font-size,14px)}
.teacher-students-overlay *,.teacher-students-overlay *::before,.teacher-students-overlay *::after{box-sizing:border-box;min-width:0}
.teacher-students-overlay .ba-modal,.teacher-students-overlay .ba-sheet{color:var(--text,#111827);background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.1))}
.teacher-students-overlay .ba-modal-head,.teacher-students-overlay .ba-sheet-head{display:flex;justify-content:space-between;align-items:center;gap:12px}
.teacher-students-overlay .ba-modal-head h2,.teacher-students-overlay .ba-sheet-head h2{margin:0}
.teacher-students-overlay .ba-form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.teacher-students-overlay .ba-form label,.teacher-students-overlay .ba-filter-field{display:grid;gap:6px;font-size:12px;font-weight:900}
.teacher-students-overlay .ba-form label>span,.teacher-students-overlay .ba-filter-field>span{color:var(--text,#111827)}
.teacher-students-overlay .ba-form input,.teacher-students-overlay .ba-form select,.teacher-students-overlay .ba-form textarea,
.teacher-students-overlay .ba-filter-field input,.teacher-students-overlay .ba-filter-field select{width:100%;min-height:44px;border:1px solid var(--input-border,var(--border,rgba(0,0,0,.1)));border-radius:14px;padding:8px 12px;background:var(--input-bg,var(--surface,#fff));color:var(--input-text,var(--text,#111827));font:inherit;font-size:16px;outline:none}
.teacher-students-overlay .ba-form textarea{min-height:90px;resize:vertical}
.teacher-students-overlay .ba-form .wide{grid-column:1/-1}
.teacher-students-overlay .ba-media-section{display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:8px 0 2px}
.teacher-students-overlay .ba-media-section .ba-avatar{width:70px;height:70px;flex:0 0 70px}
.teacher-students-overlay .ba-media-button{width:auto;position:relative;min-height:42px;cursor:pointer}
.teacher-students-overlay .ba-media-button input{position:absolute;inset:0;opacity:0;width:100%;height:100%;cursor:pointer;display:block}
.teacher-students-overlay .ba-school-managed{background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 91%,var(--text,#182235) 9%);border:1px solid var(--border,rgba(0,0,0,.1));border-radius:12px;padding:10px 12px;display:grid;gap:5px}
.teacher-students-overlay .ba-school-managed strong{font-size:12px}
.teacher-students-overlay .ba-school-managed p{font-size:12px;line-height:1.5;color:var(--muted,#64748b);margin:0}
.teacher-students-overlay .ba-modal-actions button:disabled,.teacher-students-overlay .ba-media-button:has(input:disabled){opacity:.55;pointer-events:none}
.teacher-students-overlay .ba-menu-list{margin-top:12px}
.teacher-students-overlay .ba-menu-list button.active{border-color:var(--ba-primary);background:color-mix(in srgb,var(--ba-primary) 8%,var(--card-bg,var(--surface,#fff)))}
.teacher-students-page .teacher-loading{padding:24px;text-align:center;color:var(--muted,#64748b)}
.teacher-students-page .ba-table-scroll{scrollbar-width:thin}
@media(max-width:580px){.teacher-students-overlay .ba-form{grid-template-columns:minmax(0,1fr)}.teacher-students-overlay .ba-modal,.teacher-students-overlay .ba-sheet{border-radius:16px!important}}
@media(prefers-reduced-motion:reduce){.teacher-students-page .student-row{transition:none}}

`,tp=`
/* V32: identical Reports subnavigation structure and style to Branch Admin. */
.role-shell.branch-workspace-layout .ba-v7-nav .ba-v7-tool[aria-label="Add in Reports"]{display:none!important}

.ba-workspace-wrapper, .ba-setup-page { min-width:0; width:100%; }
/* V14: report previews start immediately below the subtabs; full available width. */
.ba-reports-workspace { width:100%; max-width:none; min-width:0; margin:0; padding:0; }
.ba-reports-workspace .ba-report-subtabs {
  display:flex; align-items:center; gap:6px; flex-wrap:nowrap;
  min-width:0; width:100%; margin:0; padding:4px 0 5px;
  position:sticky; top:0; z-index:22;
  background:var(--eds-shell-bg,var(--bg,var(--surface,#fff)));
  border-bottom:1px solid var(--border,rgba(15,23,42,.10));
  backdrop-filter:blur(12px);
}
.ba-report-subtab-list { display:flex; flex:1 1 auto; min-width:0; gap:4px;
  overflow-x:auto; scrollbar-width:thin; overscroll-behavior-x:contain; white-space:nowrap; }
.ba-reports-workspace .ba-report-subtab-list button { flex:0 0 auto; min-height:31px;
  border-radius:7px; padding:4px 9px; font-size:11px; }
.ba-global-report-zoom { flex:0 0 auto; display:flex; align-items:center; gap:3px;
  margin-left:auto; white-space:nowrap; }
.ba-global-report-zoom button,.ba-global-report-zoom select {
  box-sizing:border-box; height:31px; min-height:31px; border:1px solid var(--border,rgba(0,0,0,.14));
  border-radius:7px; background:var(--surface,#fff); color:var(--text,#111827); font:inherit;
  font-size:12px; font-weight:650; padding:0 5px; cursor:pointer;
}
.ba-global-report-zoom button { width:29px; min-width:29px; font-size:19px; }
.ba-global-report-zoom select { width:103px; max-width:103px; }
.ba-reports-workspace > .student-reports-page,
.ba-reports-workspace > .ba-page { width:100%!important; max-width:none!important; min-width:0;
  padding:0!important; margin:0!important; background:transparent; }
.ba-reports-workspace .student-reports-page .ba-print-card { width:100%; max-width:none;
  margin:0!important; padding:0!important; border:0!important; border-radius:0!important;
  background:transparent!important; overflow:visible; box-shadow:none!important; }
.ba-reports-workspace .student-reports-page .ba-print-zone { width:100%; padding:0!important; }
.ba-reports-workspace .ba-print-head,
.ba-reports-workspace .ba-report-toolbar { display:none!important; }
/* V15 — mobile has dedicated full-width tab row, then a right-aligned zoom row. */
@media(max-width:640px) {
 .ba-reports-workspace .ba-report-subtabs {
   display:flex; flex-direction:column; align-items:stretch;
   gap:5px; width:100%; min-width:0; padding-bottom:5px;
 }
 .ba-reports-workspace .ba-report-subtab-list {
   display:flex; width:100%; min-width:0; flex:0 0 auto;
   overflow-x:auto; padding-bottom:1px;
 }
 .ba-reports-workspace .ba-report-subtab-list button {
   font-size:11px; padding:4px 9px;
 }
 .ba-reports-workspace .ba-global-report-zoom {
   display:flex; width:100%; flex:0 0 auto; justify-content:flex-end;
   margin:0; padding:0;
 }
 .ba-reports-workspace .ba-global-report-zoom button {
   height:32px; width:34px; min-width:34px;
 }
 .ba-reports-workspace .ba-global-report-zoom select {
   height:32px; width:100px; max-width:100px; font-size:12px;
 }
}

/* Match Branch Admin's final contextual-button cascade, including zoom buttons. */
.ba-contextual-actions button, .ba-setup-empty-section button { min-height:34px; padding:7px 11px; border-radius:9px; border:1px solid var(--border,rgba(0,0,0,.14)); background:var(--surface,#fff); color:var(--text,#111827); cursor:pointer; font:inherit; font-size:12px; font-weight:700; }
.ba-contextual-actions button.is-active { border-color:var(--primary-color,#2563eb); background:color-mix(in srgb,var(--primary-color,#2563eb) 10%,var(--surface,#fff)); }
.teacher-portal-report-loading {min-height:190px;display:grid;place-items:center;padding:22px;
  color:var(--muted,#64748b);font-size:13px;text-align:center;}
/* Keep Report Cards and Broadsheets on the same full-width preview canvas. */
@media print {.ba-reports-workspace .ba-report-subtabs{display:none!important}}
`,tm=[{title:"Teaching",defaultOpen:!0,items:[{key:"assessmentEntry",label:"Enter Scores",icon:"\uD83D\uDCDD"},{key:"reportsWorkspace",label:"Reports",icon:"\uD83D\uDCC4"},{key:"teacherStudents",label:"Students",icon:"\uD83D\uDC65"}]}],tu={assessmentEntry:function(){let e=(0,d.f)(["students","classes","subjects","teachers","academicStructures","academicPeriods","organizations","curriculums","curriculumPathways","curriculumSubjects","classSubjects","assessmentApplicabilities","assessmentStructures","assessmentStructureItems","assessmentEntries","gradingStructures","gradeRules","studentEnrollments"]),a=(0,y.useRouter)(),t=h(),{user:i}=(0,w.F)(),{settings:o,loading:l}=(0,k.t)(),{activeBranch:c}=(0,j.c)(),m=(0,n.P)(),{accountId:u,schoolId:b,branchId:g,authenticated:f,restoring:v,branchLoading:N}=m,C=o?.primaryColor||"var(--primary-color, #2563eb)",{loading:z,setLoading:M}=(0,S.J)(),A=[u||"",b||"",g||""].join("|"),[er,es]=(0,s.useState)(null),[eo,en]=(0,s.useState)(null),eb=s.useRef(0),[eh,ex]=(0,s.useState)(null),[eg,ef]=(0,s.useState)(!1),[ev,ey]=(0,s.useState)(!1),[ew,ek]=(0,s.useState)(null),[ej,eI]=(0,s.useState)([]),[eS,eN]=(0,s.useState)([]),[eC,ez]=(0,s.useState)([]),[eM,eA]=(0,s.useState)([]),[eP,eE]=(0,s.useState)([]),[eT,eR]=(0,s.useState)([]),[eB,e$]=(0,s.useState)([]),[eD,eO]=(0,s.useState)([]),[eF,eL]=(0,s.useState)([]),[eU,e_]=(0,s.useState)([]),[eW,eK]=(0,s.useState)([]),[eV,eG]=(0,s.useState)([]),[eq,eJ]=(0,s.useState)([]),[eH,eY]=(0,s.useState)([]),[eZ,eX]=(0,s.useState)([]),[eQ,e0]=(0,s.useState)([]),[e1,e2]=(0,s.useState)([]),[e4,e8]=(0,s.useState)([]),e5=(0,E.D)({accountId:u,ownerTable:"students",rows:ej,fields:[{fieldKey:"photo",mediaIdKey:"photoMediaId"}]}),e3=e=>{let a=e5[q(e.id)]?.photo||e.photo;if(!("string"!=typeof a||!a.trim()||a.startsWith("blob:")))return a},[e6,e9]=(0,s.useState)("cards");(0,s.useEffect)(()=>{e9(window.matchMedia("(min-width: 768px)").matches?"table":"cards")},[]);let[e7,ae]=(0,s.useState)(""),[aa,at]=(0,s.useState)("all"),[ar,as]=(0,s.useState)(""),ai=s.useRef({selectedClassId:ar,classSubjectId:aa});s.useLayoutEffect(()=>{let e=ai.current;if(e.selectedClassId===ar&&e.classSubjectId===aa)return;ai.current={selectedClassId:ar,classSubjectId:aa};let a=document.querySelector(".role-shell.workspace-locked-scroll .app-content")||document.querySelector(".role-shell.branch-workspace-layout .app-content");a?a.scrollTop=0:window.scrollTo(0,0)},[ar,aa]);let[ao,an]=(0,s.useState)("all"),[ad,al]=(0,s.useState)("all"),[ac,ap]=(0,s.useState)("all"),[am,au]=(0,s.useState)("all"),[ab,ah]=(0,s.useState)("all"),[ax,ag]=(0,s.useState)("all"),[af,av]=(0,s.useState)(!1),[ay,aw]=(0,s.useState)(!1),[ak,aj]=(0,s.useState)({}),[aI,aS]=(0,s.useState)(!1),[aN,aC]=(0,s.useState)(null),[az,aM]=(0,s.useState)(!1),[aA,aP]=(0,s.useState)("file"),[aE,aT]=(0,s.useState)(null),[aR,aB]=(0,s.useState)(null),[a$,aD]=(0,s.useState)(""),[aO,aF]=(0,s.useState)(0),[aL,aU]=(0,s.useState)([]),[a_,aW]=(0,s.useState)(null),[aK,aV]=(0,s.useState)(null),[aG,aq]=(0,s.useState)(null),[aJ,aH]=(0,s.useState)(!1),[aY,aZ]=(0,s.useState)(!1);(0,s.useEffect)(()=>{!v&&!N&&(f&&u?b&&g||a.replace("/account"):a.replace("/login"))},[v,N,f,u,b,g,a]);let aX=e=>(!e.accountId||e.accountId===u)&&(!e.schoolId||J(e.schoolId,b))&&(!e.branchId||J(e.branchId,g))&&!e.isDeleted,aQ=(e,a)=>{ek({tone:e,message:a}),window.setTimeout(()=>ek(e=>e?.message===a?null:e),4200)},a0=()=>{eI([]),eN([]),ez([]),eA([]),eE([]),eR([]),e$([]),eO([]),eL([]),e_([]),eK([]),eG([]),eJ([]),eY([]),eX([]),e0([]),e2([]),e8([]),aj({}),ey(!1)},a1=async()=>{let e=++eb.current;if(!f||!u||!b||!g||!t.permitted||!t.ready){a0(),es(null),en(null),ex(null),M(!1);return}let a={accountId:u,schoolId:b,branchId:g},r=new Set(t.allowedClassIds),s=new Set(t.subjectIds);try{M(!0);let[t,i,o,n,d,l,c]=await Promise.all([(0,I.uJ)("classes",a),(0,I.uJ)("subjects",a),(0,I.uJ)("classSubjects",a),Y("studentEnrollments")?.toArray?.()||[],(0,I.uJ)("assessmentApplicabilities",a),(0,I.uJ)("academicPeriods",a),(0,I.uJ)("teachers",a)]);if(e!==eb.current)return;eN(t.filter(e=>r.has(q(e.id))).sort((e,a)=>String(e.name||"").localeCompare(String(a.name||"")))),ez(i.sort((e,a)=>String(e.name||"").localeCompare(String(a.name||"")))),eK(o.filter(e=>X(e)&&s.has(q(e.id)))),e8(n.filter(e=>aX(e)&&!e.isDeleted)),eG(d.filter(X)),eR(l),eA(c.sort((e,a)=>String(e.fullName||"").localeCompare(String(a.fullName||"")))),es(A),ex(null),M(!1);let[p,m,u,b,h,x,g,f,v,y,w]=await Promise.all([Y("students")?.toArray?.()||[],(0,I.uJ)("academicStructures",a),(0,I.uJ)("organizations",a),(0,I.uJ)("curriculums",a),(0,I.uJ)("curriculumPathways",a),(0,I.uJ)("curriculumSubjects",a),(0,I.uJ)("assessmentStructures",a),(0,I.uJ)("assessmentStructureItems",a),Y("assessmentEntries")?.toArray?.()||[],(0,I.uJ)("gradingStructures",a),(0,I.uJ)("gradeRules",a)]);if(e!==eb.current)return;eI(p.filter(e=>aX(e)).filter(e=>!["withdrawn","deleted","archived"].includes(H(e.status))).sort((e,a)=>String(e.fullName||"").localeCompare(String(a.fullName||"")))),eE(m),e$(u),eO(b),eL(h),e_(x),eJ(g.filter(X)),eY(f.filter(X)),eX(v.filter(e=>aX(e)&&!e.isDeleted)),e0(y.filter(X)),e2(w.filter(X)),en(A)}catch(a){if(e!==eb.current)return;console.error("Assessment Entries local read failed:",a),er!==A&&ex(A),aQ("error","Could not refresh assessment records. Try again.")}finally{e===eb.current&&M(!1)}};(0,s.useEffect)(()=>{if(!v&&!l&&!N&&t.ready){if(!t.permitted)return void a0();a1()}},[f,u,b,g,v,l,N,e,t.ready,t.permitted,t.teacherId,[...t.subjectIds].sort().join(","),[...t.allowedClassIds].sort().join(",")]);let a2=(0,s.useMemo)(()=>new Map(eS.map(e=>[q(e.id),e])),[eS]),a4=(0,s.useMemo)(()=>new Map(eC.map(e=>[q(e.id),e])),[eC]),a8=(0,s.useMemo)(()=>new Map(eM.map(e=>[q(e.id),e])),[eM]),a5=(0,s.useMemo)(()=>new Map(eP.map(e=>[q(e.id),e])),[eP]),a3=(0,s.useMemo)(()=>new Map(eT.map(e=>[q(e.id),e])),[eT]);(0,s.useMemo)(()=>new Map(eB.map(e=>[q(e.id),e])),[eB]);let a6=(0,s.useMemo)(()=>new Map(eU.map(e=>[q(e.id),e])),[eU]),a9=(0,s.useMemo)(()=>new Map(eD.map(e=>[q(e.id),e])),[eD]),a7=(0,s.useMemo)(()=>new Map(eF.map(e=>[q(e.id),e])),[eF]),te=(0,s.useMemo)(()=>{let e=new Map;return eV.forEach(a=>{q(a.classSubjectId)&&!1!==a.active&&!a.isDeleted&&e.set(q(a.classSubjectId),a)}),e},[eV]),ta=(0,s.useMemo)(()=>eW.map(e=>{let a=q(e.id),r=a2.get(q(e.classId)),s=a4.get(q(e.subjectId)),o=e.teacherId?a8.get(q(e.teacherId)):void 0,n=p(e.teacherId,t.teacherId),d=n?String(m.membership?.teacher?.fullName||m.membership?.teacher?.name||i?.fullName||i?.name||"").trim():"",l=String(o?.fullName||o?.name||"").trim()||d||(n?"You":"No teacher assigned"),c=a5.get(q(e.academicStructureId)),u=e.academicPeriodId?a3.get(q(e.academicPeriodId)):void 0,b=a6.get(q(e.curriculumSubjectId)),h=b?a9.get(q(b.curriculumId)):void 0,x=b?.pathwayId?a7.get(q(b.pathwayId)):void 0,g=e.name||s?.name||"Unknown Subject",f=e.code||s?.code||"",v=r?.name||"Unknown Class",y=u?.name||"All Periods",w=!!te.get(a);return{id:a,row:e,className:v,subjectName:g,subjectCode:f,teacherName:l,academicStructureName:c?.name||"Unknown structure",academicPeriodName:y,curriculumName:h?.name||"No curriculum",pathwayName:x?.name||"No pathway",organizationId:b?.organizationId,ready:w,display:`${v} • ${g}${f?` (${f})`:""} • ${y}`}}).filter(e=>!!e.id).sort((e,a)=>e.display.localeCompare(a.display)),[eW,a2,a4,a8,t.teacherId,m.membership,i?.fullName,a5,a3,a6,a9,a7,te]),tt=(0,s.useMemo)(()=>ta.filter(e=>G(e,{classId:ao,subjectId:ad,periodId:ac,readiness:am})),[ta,ao,ad,ac,am]),tr=(0,s.useMemo)(()=>ar?a2.get(q(ar)):null,[a2,ar]),ts=(0,s.useMemo)(()=>ar?tt.filter(e=>J(e.row.classId,ar)):[],[tt,ar]),ti="all"!==ac?q(ac):q(o?.currentAcademicPeriodId),to=eT.find(e=>J(e.id,ti)),tn=q(to?.academicStructureId),td=(0,s.useMemo)(()=>new Set(ej.filter(e=>X(e)&&!["graduated","transferred","inactive"].includes(H(e.status))).map(e=>q(e.id)).filter(Boolean)),[ej]),tl=(0,s.useMemo)(()=>(e,a,t)=>new Set(e4.filter(r=>J(r.classId,e)&&"active"===r.status&&!1!==r.active&&!r.isDeleted&&(!a||J(r.academicStructureId,a))&&(!t||J(r.academicPeriodId,t))&&td.has(q(r.studentId))).map(e=>q(e.studentId)).filter(Boolean)),[e4,td]),tc=(0,s.useMemo)(()=>ts.map(e=>{let a=te.get(e.id),t=a?.assessmentStructureId?eH.filter(e=>J(e.assessmentStructureId,a.assessmentStructureId)&&X(e)):[],r=q(e.row.academicPeriodId)||ti,s=q(e.row.classId),i=r?tl(s,q(e.row.academicStructureId),r):new Set(ej.filter(e=>td.has(q(e.id))&&J(e.currentClassId,s)).map(e=>q(e.id)).filter(Boolean)),o=i.size,n=new Set(t.map(e=>q(e.id)).filter(Boolean)),d=o*n.size,l=new Set(eZ.filter(t=>J(t.classSubjectId,e.id)&&!!a&&J(t.assessmentStructureId,a.assessmentStructureId)&&i.has(q(t.studentId))&&n.has(q(t.assessmentStructureItemId))&&!t.isDeleted&&!1!==t.active&&void 0!==t.score&&null!==t.score&&""!==t.score).map(e=>Z(q(e.studentId),q(e.assessmentStructureItemId)))).size,c=d?Math.round(Math.min(l,d)/d*100):0;return{id:e.id,option:e,studentCount:o,itemCount:t.length,entered:l,expected:d,completion:c}}),[ts,te,eH,e4,eZ,ej,td,ti,tl]),tp=(0,s.useMemo)(()=>{let e=e7.trim().toLowerCase();return eS.filter(X).map(e=>{let a=q(e.id),t=tt.filter(e=>J(e.row.classId,a)),r=t.filter(e=>e.ready).length,s=ti?tl(a,tn,ti):new Set(ej.filter(e=>td.has(q(e.id))&&J(e.currentClassId,a)).map(e=>q(e.id)).filter(Boolean));return{id:a,row:e,name:e.name||`Class ${a}`,code:e.code||"",subjectCount:t.length,readyCount:r,missingCount:Math.max(0,t.length-r),studentCount:s.size}}).filter(a=>!e||`${a.name} ${a.code} ${a.subjectCount} subjects`.toLowerCase().includes(e)).sort((e,a)=>e.name.localeCompare(a.name))},[eS,tt,e4,ej,e7,td,ti,tn,tl]),tm=(0,s.useMemo)(()=>{let e=q(aa);return ta.find(a=>J(a.id,e))},[ta,aa]),tu=tm?.row,tb=(0,s.useMemo)(()=>tm?te.get(tm.id):void 0,[te,tm]),th=(0,s.useMemo)(()=>eq.find(e=>J(e.id,tb?.assessmentStructureId)),[eq,tb]),tx=(0,s.useMemo)(()=>eQ.find(e=>J(e.id,tb?.gradingStructureId)),[eQ,tb]),tg=(0,s.useMemo)(()=>tb?.assessmentStructureId?eH.filter(e=>J(e.assessmentStructureId,tb.assessmentStructureId)&&X(e)):[],[eH,tb]),tf=(0,s.useMemo)(()=>tb?.assessmentStructureId?(0,B.lj)({items:tg,structureId:q(tb.assessmentStructureId),existingEntries:eZ}):{structureId:"",columns:[],groups:[],hiddenCalculatedNodes:[],warnings:[]},[tg,tb,eZ]),tv=(0,s.useMemo)(()=>{let e=new Map(tg.map(e=>[q(e.id),e]));return tf.columns.map(a=>{let t=e.get(a.itemId);return t?{...t,__entryPathLabels:a.pathLabels,__entryDepth:a.depth,__entryGroupLabel:a.pathLabels.length>1?a.pathLabels.slice(0,-1).join(" \xb7 "):"",__entryCompactLabel:a.pathLabels.join(" \xb7 ")}:null}).filter(e=>!!e)},[tg,tf]),ty=(0,s.useMemo)(()=>tx?.id?e1.filter(e=>J(e.gradingStructureId,tx.id)&&X(e)).sort((e,a)=>Number(a.minScore||0)-Number(e.minScore||0)):[],[e1,tx]),tw=(0,s.useMemo)(()=>tv.map((e,a)=>({itemId:q(e.id),label:ei(e)||e.name||`Assessment ${a+1}`,compactLabel:e.__entryCompactLabel||e.name||void 0,groupLabel:e.__entryGroupLabel||void 0,pathLabels:Array.isArray(e.__entryPathLabels)?e.__entryPathLabels:[e.name||`Assessment ${a+1}`],maxScore:Math.max(1,Number(e.maxScore||100)),weight:Number(e.weight||0),order:Number(e.order??a)})),[tv]),tk=(0,s.useMemo)(()=>tu&&tm&&tb?{accountId:q(u),schoolId:q(b),branchId:q(g),classSubjectId:q(tu.id),classId:q(tu.classId),subjectId:q(tu.subjectId),academicStructureId:q(tu.academicStructureId),academicPeriodId:q(tu.academicPeriodId),assessmentStructureId:q(tb.assessmentStructureId),gradingStructureId:q(tb.gradingStructureId)||void 0,organizationId:q(tb.organizationId||tm.organizationId)||void 0,branchName:c?.name||void 0,className:tm.className,subjectName:tm.subjectName,subjectCode:tm.subjectCode,academicStructureName:tm.academicStructureName,academicPeriodName:tm.academicPeriodName,assessmentStructureName:th?.name||void 0}:null,[tu,tm,tb,u,b,g,c,th]),tj=(0,s.useMemo)(()=>{if(!tu||!tb)return[];let e=q(tu.academicPeriodId);return eZ.filter(a=>!!J(a.classSubjectId,tu.id)&&!!J(a.classId,tu.classId)&&!!J(a.subjectId,tu.subjectId)&&!!J(a.academicStructureId||"",tu.academicStructureId)&&!!J(a.academicPeriodId||"",e)&&!!J(a.assessmentStructureId||"",tb.assessmentStructureId)&&(!tb.gradingStructureId||!!J(a.gradingStructureId||"",tb.gradingStructureId))&&!a.isDeleted)},[eZ,tu,tb]);(0,s.useEffect)(()=>{if(!tu||!tb){aj({}),ey(!1);return}let e={};tj.forEach(a=>{e[Z(q(a.studentId),q(a.assessmentStructureItemId))]=Number(a.score||0)}),ev||aj(e)},[tu,tb,tj,ev]);let tI=(0,s.useMemo)(()=>{if(!tu)return[];let e=q(tu.classId),a=q(tu.academicPeriodId)||ti,t=q(tu.academicStructureId);return ej.filter(e=>td.has(q(e.id))).map(r=>{if(!a&&!J(r.currentClassId,e))return;let s=e4.find(s=>!!J(s.studentId,r.id)&&!!J(s.classId,e)&&(!t||!!J(s.academicStructureId,t))&&(!a||!!J(s.academicPeriodId,a))&&"active"===s.status&&!1!==s.active&&!s.isDeleted);return s?{student:r,enrollment:s}:void 0}).filter(Boolean)},[ej,e4,tu,ti,td]),tS=(0,s.useMemo)(()=>{let e=new Map;return tj.forEach(a=>e.set(Z(q(a.studentId),q(a.assessmentStructureItemId)),a)),e},[tj]),tN=(0,s.useMemo)(()=>tI.map(({student:e,enrollment:a})=>{let t=0,r=0,s=0,i=0;for(let a of tv){let o=ak[Z(q(e.id),q(a.id))],n=""!==o&&null!=o,d=n?Number(o):0,l=Math.max(1,Number(a.maxScore||100)),c=Number(a.weight||0);n&&(i+=1),t+=d,s+=l,r+=d/l*c}let o=tv.length?Number(r.toFixed(2)):s?Number((t/s*100).toFixed(2)):0,n=ty.find(e=>o>=Number(e.minScore||0)&&o<=Number(e.maxScore||100));return{student:e,enrollment:a,rowEntered:i,rowExpected:tv.length,rawTotal:Number(t.toFixed(2)),weightedTotal:Number(r.toFixed(2)),percentage:o,grade:n?.grade,remark:n?.remark,gpa:n?.gpa}}),[tI,tv,ak,ty]),tC=(0,s.useMemo)(()=>{let e=e7.trim().toLowerCase();return tN.filter(a=>{var t;let r;if("all"!==ax&&(["male","m","boy","boys"].includes(r=String((t=a.student).sex??t.gender??"").trim().toLowerCase())?"male":["female","f","girl","girls"].includes(r)?"female":"unknown")!==ax)return!1;if("all"!==ab){let e=a.rowEntered,t=a.rowExpected;if("empty"===ab&&0!==e||"partial"===ab&&!(e>0&&e<t)||"complete"===ab&&!(t>0&&e>=t))return!1}if(!e)return!0;let s=a.student;return`${s.fullName||""} ${s.admissionNumber||""} ${a.grade||""} ${a.remark||""}`.toLowerCase().includes(e)})},[tN,e7,ab,ax]),tz=(0,s.useMemo)(()=>{let e=tN.length*tv.length,a=0;tN.forEach(e=>a+=e.rowEntered);let t=e?Math.round(a/e*100):0,r=tN.filter(e=>e.rowExpected>0&&e.rowEntered>=e.rowExpected).length;return{expected:e,entered:a,completion:t,completeStudents:r}},[tN,tv]);(0,s.useMemo)(()=>[ao,ad,ac,am,ab,ax].filter(e=>"all"!==e).length,[ao,ad,ac,am,ab,ax]),tm?(tm.className,tm.academicStructureName,tm.academicPeriodName):c?.name;let tM=(e,a,t)=>{let r=Z(e,q(a.id));if(""===t)return void aj(e=>({...e,[r]:""}));let s=Number(t);if(Number.isNaN(s))return;let i=Math.max(0,Math.min(s,Number(a.maxScore||100)));aj(e=>({...e,[r]:i}))},tA=()=>f&&u&&b&&g?tu&&t.subjectIds.has(q(tu.id))?tb?tv.length?tN.length?void(ey(!0),aQ("success","Score entry session started.")):aQ("error","No active student enrollment was found for this class subject."):aQ("error","The selected assessment structure has no active items."):aQ("error","No assessment applicability is configured for this class subject."):aQ("error","Select a subject assigned to your teacher profile."):aQ("error","Sign in and select a school branch first."),tP=async()=>{if(!ev)return aQ("error","Start the score entry session first.");if(!f||!u||!b||!g)return aQ("error","Sign in and select a school branch first.");if(!tu||!tb)return aQ("error","Select a valid class subject with assessment applicability.");try{if(!t.permitted||!t.subjectIds.has(q(tu.id))||!await x(t,q(tu.id)))return void aQ("error","This class subject is not currently assigned to you.");ef(!0);let e=q(tu.academicPeriodId),a=0,r=0,s=0;for(let t of tN){let i=q(t.student.id);if(i)for(let o of tv){let n=q(o.id),d=Z(i,n),l=ak[d],c=tS.get(d);if(c?.locked){s+=1;continue}if(""===l||null==l){c?.id&&(await (0,I.R8)("assessmentEntries",q(c.id)),r+=1);continue}let p={accountId:u,schoolId:b,branchId:g,classSubjectId:q(tu.id),organizationId:tb.organizationId||tm?.organizationId,academicStructureId:q(tu.academicStructureId),academicPeriodId:e,gradingStructureId:tb.gradingStructureId,assessmentStructureId:tb.assessmentStructureId,assessmentStructureItemId:n,studentId:i,classId:q(tu.classId),subjectId:q(tu.subjectId),score:Number(l),grade:t.grade,remark:t.remark,published:!1,locked:!1,active:!0,isDeleted:!1};c?.id?await (0,I.Po)("assessmentEntries",q(c.id),p):await (0,I.oJ)("assessmentEntries",p),a+=1}}await a1(),ey(!1),aQ("success",`Saved ${a} score${1===a?"":"s"}${r?` \xb7 cleared ${r}`:""}${s?` \xb7 skipped ${s} locked`:""}.`)}catch(e){console.error(e),aQ("error","Failed to save assessment scores.")}finally{ef(!1)}},tE=()=>tI.map(({student:e})=>({id:q(e.id),fullName:e.fullName||"Unnamed student",admissionNumber:e.admissionNumber||void 0,active:e.active,isDeleted:e.isDeleted})),tT=()=>tj.map(e=>({id:q(e.id),accountId:q(e.accountId)||void 0,schoolId:q(e.schoolId)||void 0,branchId:q(e.branchId)||void 0,classSubjectId:q(e.classSubjectId)||void 0,organizationId:q(e.organizationId)||void 0,academicStructureId:q(e.academicStructureId)||void 0,academicPeriodId:q(e.academicPeriodId)||void 0,gradingStructureId:q(e.gradingStructureId)||void 0,assessmentStructureId:q(e.assessmentStructureId)||void 0,assessmentStructureItemId:q(e.assessmentStructureItemId)||void 0,studentId:q(e.studentId)||void 0,classId:q(e.classId)||void 0,subjectId:q(e.subjectId)||void 0,score:void 0===e.score||null===e.score?void 0:Number(e.score),grade:e.grade,remark:e.remark,published:e.published,locked:e.locked,active:e.active,isDeleted:e.isDeleted})),tR=()=>tk&&tm&&tb?tw.length?tI.length?tk:(aQ("error","No active students are enrolled in this assessment context."),null):(aQ("error","This assessment structure has no directly enterable score columns."),null):(aQ("error","Select a ready class subject before using Excel."),null),tB=async()=>{let e=tR();if(e)try{aC("template"),await Promise.resolve((0,V.s)({context:e,students:tE(),projectedColumns:tw})),aQ("success","Assessment template downloaded.")}catch(e){console.error("Failed to download assessment template:",e),aQ("error",e?.message||"Failed to download assessment template.")}finally{aC(null)}},t$=async()=>{let e=tR();if(e)try{let a;aC("export"),await Promise.resolve((0,V.s)({context:e,students:tE(),projectedColumns:tw,scores:(a={},tI.forEach(({student:e})=>{let t=q(e.id);t&&(a[t]={},tw.forEach(e=>{let r=ak[Z(t,e.itemId)];a[t][e.itemId]=""===r||null==r?void 0:Number(r)}))}),a),fileName:`Eleeveon Assessment - ${tm?.className||"Class"} - ${tm?.subjectName||"Subject"}.xlsx`})),aQ("success","Current assessment sheet exported.")}catch(e){console.error("Failed to export assessment sheet:",e),aQ("error",e?.message||"Failed to export assessment sheet.")}finally{aC(null)}},tD=()=>{aT(null),aB(null),aD(""),aF(0),aU([]),aW(null),aV(null),aq(null),aZ(!1),aP("file")},tO=()=>{aJ||(aM(!1),tD())},tF=(e,a)=>{aD(a);let t=(0,U.TJ)(e,a);aF(t?(0,U.J)(t):0),aU([]),aW(null),aV(null)},tL=async e=>{if(aT(e),aB(null),aD(""),aU([]),aW(null),aV(null),aq(null),!e)return void aP("file");try{aH(!0);let a=await (0,U.zJ)(e),t=(0,_.TI)(a).metadata,r=t?.sheetName,s=(r?(0,U.TJ)(a,r):void 0)||a.sheets.find(e=>"_Eleeveon_Metadata"!==e.name);if(!s)throw Error("The workbook does not contain a usable assessment worksheet.");aB(a),tF(a,s.name),aP("sheet")}catch(e){console.error("Failed to open assessment workbook:",e),aQ("error",e?.message||"Failed to open Excel workbook."),aT(null)}finally{aH(!1)}},tU=e=>{if(!tk)throw Error("The assessment context is no longer available.");let a=(0,W.r3)({parsed:e,context:tk,projectedColumns:tw,students:tE(),enrollments:e4.map(e=>({id:q(e.id),studentId:q(e.studentId),classId:q(e.classId),academicStructureId:q(e.academicStructureId),academicPeriodId:q(e.academicPeriodId)||void 0,status:e.status,isDeleted:e.isDeleted})),existingEntries:tT(),options:{lockedEntrySeverity:"error",allowNameMatch:!0}});aZ(!1),aW(e),aV(a),aP("preview")},t_=async()=>{let e=tR();if(!e||!aK||!a_)return;if(!t.permitted||!tu||!t.subjectIds.has(q(tu.id))||!await x(t,q(tu.id)))return void aQ("error","This subject is no longer assigned to you.");let a=(0,O.gG)(aK,"eleeveon-assessment"===a_.kind);if(a.fatal.length)return void aQ("error","This workbook has a blocking context or structure error.");if(a.clear>0&&!aY)return void aQ("error","Review and approve clearing existing scores first.");if(!a.totalChanges)return void aQ("info","No score changes are required.");try{aH(!0);let a=await (0,K.PF)(aK,e,{updateExisting:!0,clearExistingWhenBlank:"eleeveon-assessment"===a_.kind&&aY,lockedEntrySeverity:"error",allowNameMatch:!0},{projectedColumns:tw,gradeRules:ty.map((e,a)=>({id:q(e.id)||void 0,minScore:Number(e.minScore||0),maxScore:Number(e.maxScore||100),grade:e.grade||"",remark:e.remark||void 0,gpa:void 0===e.gpa||null===e.gpa?void 0:Number(e.gpa),order:Number(e.order??a)})),existingEntries:tT()});aq(a),aP("result"),ey(!1),await a1(),aQ(a.failed?"info":"success",`Assessment import finished: ${a.created} created, ${a.updated} updated${a.deleted?`, ${a.deleted} cleared`:""}.`)}catch(e){console.error("Failed to import assessment workbook:",e),aQ("error",e?.message||"Failed to import assessment workbook.")}finally{aH(!1)}};(0,T.TV)("assessmentEntry",{add:()=>{"all"===aa?av(!0):ev?aS(!0):tA()},filter:()=>av(!0),more:()=>aw(!0),search:ae,print:()=>{"all"!==aa&&tm&&tb&&tv.length?(0,R.Ej)({title:"Assessment Scores",subtitle:`${tm.className} \xb7 ${tm.subjectName} \xb7 ${tm.academicStructureName} \xb7 ${tm.academicPeriodName}`,columns:[{key:"student",label:"Students"},...tv.map(e=>({key:`item_${q(e.id)}`,label:`${ei(e)||e.name} /${Number(e.maxScore||100)}`})),{key:"total",label:"Total"},{key:"grade",label:"Grade"},{key:"remark",label:"Remark"}],rows:tC.map(e=>{let a=e.student,t=q(a.id),r={student:{text:a.fullName||"Unnamed student",detail:a.admissionNumber||void 0,image:e3(e.student)},total:e.weightedTotal,grade:e.grade||"—",remark:e.remark||"—"};return tv.forEach(e=>{let a=ak[Z(t,q(e.id))];r[`item_${q(e.id)}`]=""===a||null==a?"—":a}),r})}):aQ("info","Select a class subject with a scoring structure before printing.")}});let tW=er===A,tK=eh===A&&!tW;if(v||N||l||!t.ready||!tW&&!tK&&f&&t.permitted&&u&&b&&g){let e="all"!==aa;return(0,r.jsxs)("main",{className:"ae-page",style:{"--ae-primary":C},children:[(0,r.jsx)("style",{children:eu}),(0,r.jsx)(P,{kind:e?"assessment":"class",view:e&&"table"===e6?"table":"cards",count:e?5:6,title:"Getting assessment records ready…",message:"Checking your saved classes, subjects and scores."})]})}return tK&&f&&t.permitted&&u&&b&&g?(0,r.jsxs)("main",{className:"ae-page",style:{"--ae-primary":C},children:[(0,r.jsx)("style",{children:eu}),(0,r.jsxs)("section",{className:"ae-state",role:"alert",children:[(0,r.jsx)("h2",{children:"Assessment records couldn't be opened"}),(0,r.jsx)("p",{children:"Your saved scores were not changed. Try loading this workspace again."}),(0,r.jsx)("button",{type:"button",className:"ae-state-button",onClick:()=>void a1(),children:"Try again"})]})]}):f&&u?t.permitted?b&&g?(0,r.jsxs)("main",{className:"ae-page",style:{"--ae-primary":C},children:[(0,r.jsx)("style",{children:eu}),ew&&(0,r.jsxs)("section",{className:`ae-toast ${ew.tone}`,children:[ew.message,(0,r.jsx)("button",{type:"button",onClick:()=>ek(null),"aria-label":"Close notification",children:"✕"})]}),0===tt.length&&("all"!==ao||"all"!==ad||"all"!==ac||"all"!==am)?(0,r.jsxs)("section",{children:[(0,r.jsx)(et,{icon:"\uD83D\uDD0E",title:"No matching class subjects",text:"No class subject matches these filters. Choose a different class, subject or term; existing assessment setup has not been removed."}),(0,r.jsx)("div",{className:"ae-filter-empty-action",children:(0,r.jsx)("button",{type:"button",onClick:()=>av(!0),children:"Change filters"})})]}):ar?"all"===aa?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("section",{className:"ae-filter-chips class-breadcrumb","aria-label":"Selected class",children:[(0,r.jsx)("button",{type:"button",onClick:()=>{as(""),an("all"),at("all"),ae("")},children:"← Classes"}),(0,r.jsxs)("button",{type:"button",onClick:()=>av(!0),children:[tr?.name||"Selected class"," \xb7"," ",ts.length," class subject(s)"]})]}),(0,r.jsxs)("section",{className:"ae-list ae-picker-list",children:[tc.map(e=>(0,r.jsx)(ee,{item:e,onOpen:()=>{at(String(e.id)),ey(!1),ae("")}},String(e.id))),!tc.length&&(0,r.jsx)(et,{icon:"\uD83D\uDCDD",title:"No subjects available",text:"No class subjects in this class match the current filters."})]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("section",{className:"ae-entry-topbar","aria-label":"Selected class and scoring actions",children:[(0,r.jsxs)("button",{type:"button",className:"ae-entry-back",onClick:()=>{at("all"),ey(!1),ae("")},"aria-label":"Back to class subjects",title:"Class subjects",children:["← ",(0,r.jsx)("span",{children:"Class subjects"})]}),(0,r.jsxs)("span",{className:"ae-entry-location",title:`${tm?.className||"Class"} \xb7 ${tm?.subjectName||"Subject"}`,children:[tm?.className||"Class"," \xb7 ",tm?.subjectName||"Subject"]}),(0,r.jsxs)("span",{className:"ae-entry-count",title:"Entered score cells","aria-live":"polite",children:[tz.entered,"/",tz.expected]}),(0,r.jsx)("button",{type:"button",className:"ae-entry-start",onClick:tA,disabled:ev,children:ev?"Active":"Start"}),(0,r.jsx)("button",{type:"button",className:"ae-entry-save",onClick:tP,disabled:!ev||eg,children:eg?"Saving":"Save"})]}),eo!==A&&(0,r.jsx)(P,{kind:"assessment",view:"table"===e6?"table":"cards",count:4,title:"Preparing score entry…",message:"Loading students and assessment items saved on this device."}),eo===A&&(0,r.jsxs)(r.Fragment,{children:["all"!==aa&&!tm&&(0,r.jsx)(et,{icon:"\uD83D\uDD0E",title:"Class subject unavailable",text:"The selected class subject could not be found in this branch. Choose another one through Filters."}),tm&&!tb&&(0,r.jsx)(et,{icon:"⚠️",title:"No assessment applicability",text:"This specific class subject does not yet have an active applicability. Choose a ready class subject in Filters or configure its assessment structure."}),tb&&!tv.length&&(0,r.jsx)(et,{icon:"\uD83E\uDDE9",title:"No directly enterable assessment items",text:"This structure contains no active leaf or explicitly direct-entry item. Calculated parents are intentionally hidden from score entry."}),tb&&tf.warnings.length>0&&(0,r.jsxs)("section",{className:"ae-entry-projection-warning",children:[(0,r.jsx)("strong",{children:"Assessment hierarchy needs review"}),(0,r.jsxs)("span",{children:[tf.warnings.length," hierarchy warning",1===tf.warnings.length?"":"s",". Score entry is showing only safe, directly enterable items."]})]}),tm&&tb&&!!tv.length&&!tN.length&&(0,r.jsx)(et,{icon:"\uD83C\uDF93",title:"No enrolled students",text:"No active student enrollment was found for this class subject, class, academic structure, and period."}),tm&&tb&&!!tv.length&&!!tN.length&&"summary"===e6&&(0,r.jsx)(ec,{rows:tN,completion:tz,structureItems:tv,classSubjectOptions:tt}),tm&&tb&&!!tv.length&&!!tN.length&&"table"===e6&&(0,r.jsx)(el,{rows:tC,photoFor:e3,items:tv,scores:ak,updateScore:tM}),tm&&tb&&!!tv.length&&!!tN.length&&"cards"===e6&&(0,r.jsxs)("section",{className:"ae-list ae-entry-list",children:[tC.map(e=>(0,r.jsx)(ed,{row:e,photo:e3(e.student),items:tv,scores:ak,updateScore:tM},String(e.student.id))),!tC.length&&(0,r.jsx)(et,{icon:"\uD83D\uDD0E",title:"No student matches",text:"Change your search or completion filter to see students."})]})]})]}):(0,r.jsxs)("section",{className:"ae-list ae-picker-list",children:[tp.map(e=>(0,r.jsx)(Q,{item:e,onOpen:()=>{as(String(e.id)),an(String(e.id)),at("all"),ae("")}},String(e.id))),!tp.length&&(0,r.jsx)(et,{icon:"\uD83C\uDFEB",title:"No classes available",text:"No active class subjects are available in the selected branch."})]}),af&&(0,r.jsx)(ep,{classes:eS,subjects:eC,periods:eT,search:e7,setSearch:ae,filterClassId:ao,filterSubjectId:ad,filterPeriodId:ac,filterReadiness:am,filterCompletion:ab,filterGender:ax,allOptions:ta,activeClassSubjectId:aa,onApply:e=>{let a=ta.filter(a=>G(a,e)),t="auto"!==e.classSubjectId?a.find(a=>J(a.id,e.classSubjectId)):void 0,r=a.find(e=>J(e.id,aa)),s=q(o?.currentAcademicPeriodId),i=q(o?.currentAcademicStructureId),n=[...a].sort((a,t)=>{let r=a=>{let t=a.row,r=te.get(a.id),o=q(r?.assessmentStructureId),n=!!o&&eH.some(e=>X(e)&&J(e.assessmentStructureId,o)),d=q(t.academicPeriodId)||("all"!==e.periodId?q(e.periodId):s),l=d?tl(q(t.classId),q(t.academicStructureId),d).size>0:ej.some(e=>td.has(q(e.id))&&J(e.currentClassId,t.classId)),c=eZ.some(e=>!e.isDeleted&&J(e.classSubjectId,a.id)&&null!==e.score&&void 0!==e.score&&""!==e.score);return 1e5*!!a.ready+5e4*!!n+2e4*!!l+(s&&J(t.academicPeriodId,s)?2e3:0)+(i&&J(t.academicStructureId,i)?1e3:0)+100*!!c};return r(t)-r(a)||a.display.localeCompare(t.display)}),d=e.classId===ao&&e.subjectId===ad&&e.periodId===ac&&e.readiness===am,l=t||(d?r:void 0)||n[0],c=l?.id||"all";c!==aa&&ev&&tN.some(e=>tv.some(a=>{let t=Z(q(e.student.id),q(a.id)),r=tS.get(t),s=ak[t],i=r?.score;return""===s||void 0===s?null!=i&&""!==i:Number(s)!==Number(i)}))&&!window.confirm("You have unsaved assessment scores. Change class subject and discard those edits?")||(an(e.classId),al(e.subjectId),ap(e.periodId),au(e.readiness),ah(e.completion),ag(e.gender),as(l?q(l.row.classId):""),at(c),c!==aa&&(ey(!1),ae("")),av(!1))},onClose:()=>av(!1)}),ay&&(0,r.jsx)(em,{viewMode:e6,setViewMode:e=>{e9(e),aw(!1)},onExcel:()=>{aw(!1),aS(!0)},onRefresh:async()=>{aw(!1),await a1()},onClose:()=>aw(!1)}),aI&&(0,r.jsx)(L.A,{open:aI,onClose:()=>{aN||aS(!1)},title:"Assessment Excel",subtitle:tm?`${tm.className} \xb7 ${tm.subjectName}`:"Choose a ready class subject first.",busyKey:aN,actions:[{key:"import",title:"Import assessment scores",description:"Bring back an Eleeveon score sheet or import a compatible school workbook.",badge:"Import",disabled:!tk,onClick:async()=>void(tR()&&(aw(!1),aS(!1),tD(),aM(!0)))},{key:"template",title:"Download blank score sheet",description:"Create the controlled workbook for this class, subject and assessment structure.",badge:`${tN.length} students`,disabled:!tk,onClick:tB},{key:"export",title:"Export current scores",description:"Download the same controlled workbook prefilled with the scores currently in Eleeveon.",badge:`${tz.entered} scores`,disabled:!tk,onClick:t$}]}),(0,r.jsxs)(F.A,{open:az,onClose:tO,title:"Import assessment scores",subtitle:"Validate the workbook against the active class, subject, period and assessment structure before any score is changed.",step:aA,busy:aJ,width:980,footer:(0,r.jsxs)("div",{className:"assessment-excel-footer-actions",children:["file"===aA&&(0,r.jsx)("button",{type:"button",className:"secondary",onClick:tO,children:"Cancel"}),"sheet"===aA&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",className:"secondary",onClick:()=>aP("file"),children:"Back"}),(0,r.jsx)("button",{type:"button",className:"primary",onClick:()=>{if(!aR||!a$)return void aQ("error","Choose an assessment worksheet first.");if(tR())try{if((0,_.TI)(aR).metadata){let e=(0,_.ac)({workbook:aR,sheetName:a$,headerRowIndex:aO});tU(e);return}let e=(0,U.TJ)(aR,a$);if(!e)throw Error("The selected worksheet could not be found.");let a=(0,_.k3)({sheet:e,projectedColumns:tw,headerRowIndex:aO});if(!a.metadataColumns.length)throw Error("No assessment score columns could be matched. Use an Eleeveon assessment template or keep assessment headings aligned with the current assessment structure.");aW(a),aU(a.mappings),aV(null),aP("mapping")}catch(e){console.error("Failed to prepare assessment workbook:",e),aQ("error",e?.message||"Failed to prepare assessment workbook.")}},children:"Continue"})]}),"mapping"===aA&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",className:"secondary",onClick:()=>aP("sheet"),children:"Back"}),(0,r.jsx)("button",{type:"button",className:"primary",onClick:()=>{if(!aR||!a$)return;let e=(0,U.TJ)(aR,a$);if(!e)return void aQ("error","The selected worksheet could not be found.");try{let a=(0,_.k3)({sheet:e,projectedColumns:tw,headerRowIndex:aO,identityMappings:aL});if(!a.metadataColumns.length)throw Error("No assessment score columns are mapped to the current structure.");tU(a)}catch(e){console.error("Failed to review external assessment workbook:",e),aQ("error",e?.message||"Failed to review assessment workbook.")}},children:"Review scores"})]}),"preview"===aA&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",className:"secondary",onClick:()=>aP(a_?.kind==="external-assessment"?"mapping":"sheet"),children:"Back"}),(0,r.jsx)("button",{type:"button",className:"primary",disabled:!aK||!!(0,O.gG)(aK,a_?.kind==="eleeveon-assessment").fatal.length||!(0,O.gG)(aK,a_?.kind==="eleeveon-assessment").totalChanges||(0,O.gG)(aK,a_?.kind==="eleeveon-assessment").clear>0&&!aY,onClick:t_,children:"Apply reviewed changes"})]}),"result"===aA&&(0,r.jsx)("button",{type:"button",className:"primary",onClick:tO,children:"Done"})]}),children:["file"===aA&&(0,r.jsx)($.A,{value:aE,onChange:tL,disabled:aJ,label:"Choose assessment workbook",description:"Use an Eleeveon assessment sheet or a compatible school score workbook."}),"sheet"===aA&&aR&&(0,r.jsxs)("section",{className:"assessment-excel-stage",children:[(0,r.jsxs)("div",{className:"assessment-excel-stage-head",children:[(0,r.jsx)("h3",{children:"Choose score worksheet"}),(0,r.jsx)("p",{children:"Eleeveon-controlled workbooks carry hidden context metadata. External workbooks are matched to the assessment columns currently shown on this page."})]}),(0,r.jsxs)("div",{className:"assessment-excel-context-grid",children:[(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Worksheet"}),(0,r.jsx)("select",{value:a$,onChange:e=>tF(aR,e.target.value),children:aR.sheets.filter(e=>"_Eleeveon_Metadata"!==e.name).map(e=>(0,r.jsx)("option",{value:e.name,children:e.name},e.name))})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Header row"}),(0,r.jsx)("input",{type:"number",min:1,value:aO+1,onChange:e=>aF(Math.max(0,Number(e.target.value||1)-1))})]})]}),(0,r.jsxs)("div",{className:"assessment-excel-context-card",children:[(0,r.jsx)("strong",{children:aE?.name}),(0,r.jsx)("span",{children:(0,_.TI)(aR).metadata?"Controlled Eleeveon assessment workbook":"External assessment workbook"}),(0,r.jsxs)("small",{children:["Active context: ",tm?.className||"Class"," \xb7 ",tm?.subjectName||"Subject"," \xb7 ",tm?.academicPeriodName||"Period"]})]})]}),"mapping"===aA&&aR&&(0,r.jsxs)("section",{className:"assessment-excel-stage",children:[(0,r.jsxs)("div",{className:"assessment-excel-stage-head",children:[(0,r.jsx)("h3",{children:"Match student identity columns"}),(0,r.jsx)("p",{children:"Assessment score columns are matched against the current projected assessment structure. Confirm how this external sheet identifies each student."})]}),(()=>{let e=(0,U.TJ)(aR,a$);if(!e)return null;let a=(0,U.B)(e,{headerRowIndex:aO,skipEmptyRows:!0,trimStrings:!0});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(D.A,{columns:a.columns,fields:_.tq,mappings:aL,onChange:e=>{aU(e),aV(null)},disabled:aJ,title:"Match student columns",description:"Student ID is strongest, followed by Admission Number. Exact Student Name is used only when unambiguous."}),(0,r.jsxs)("div",{className:"assessment-excel-column-note",children:[(0,r.jsxs)("strong",{children:[a_?.metadataColumns.length||0," score column",1===(a_?.metadataColumns.length||0)?"":"s"," recognized"]}),(0,r.jsx)("span",{children:a_?.metadataColumns.map(e=>e.label).filter(Boolean).join(" \xb7 ")||"No score columns recognized yet."})]})]})})()]}),"preview"===aA&&aK&&(0,r.jsxs)("section",{style:{display:"grid",gap:14},children:[(0,r.jsx)(O.Ay,{validation:aK,controlledWorkbook:a_?.kind==="eleeveon-assessment"}),(0,O.gG)(aK,a_?.kind==="eleeveon-assessment").clear>0&&(0,r.jsxs)("label",{style:{display:"flex",alignItems:"flex-start",gap:10,padding:12,border:"1px solid #d97706",borderRadius:9},children:[(0,r.jsx)("input",{type:"checkbox",checked:aY,onChange:e=>aZ(e.target.checked),disabled:aJ}),(0,r.jsx)("span",{children:"I have reviewed the blank cells and explicitly approve clearing the indicated existing assessment scores."})]})]}),"result"===aA&&aG&&(0,r.jsxs)("section",{className:"assessment-excel-result",children:[(0,r.jsx)("div",{className:"assessment-excel-result-icon",children:"✓"}),(0,r.jsx)("h3",{children:"Assessment import completed"}),(0,r.jsx)("p",{children:"Scores were written through the same offline-first assessmentEntries flow used by manual score entry."}),(0,r.jsxs)("div",{className:"assessment-excel-result-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("strong",{children:aG.created}),(0,r.jsx)("small",{children:"Created"})]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("strong",{children:aG.updated}),(0,r.jsx)("small",{children:"Updated"})]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("strong",{children:aG.deleted}),(0,r.jsx)("small",{children:"Cleared"})]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("strong",{children:aG.skipped}),(0,r.jsx)("small",{children:"Skipped"})]}),(0,r.jsxs)("span",{className:aG.failed?"danger":"",children:[(0,r.jsx)("strong",{children:aG.failed}),(0,r.jsx)("small",{children:"Failed"})]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("strong",{children:aG.studentsProcessed}),(0,r.jsx)("small",{children:"Students"})]})]}),aG.failed>0&&(0,r.jsx)("div",{className:"assessment-excel-result-errors",children:aG.rows.filter(e=>"failed"===e.action).slice(0,12).map((e,a)=>(0,r.jsxs)("div",{children:[(0,r.jsxs)("strong",{children:["Row ",e.rowNumber]}),(0,r.jsx)("span",{children:e.error||"Score import failed."})]},`${e.rowNumber}-${e.columnIndex||0}-${a}`))})]})]})]}):(0,r.jsxs)("main",{className:"ae-page",style:{"--ae-primary":C},children:[(0,r.jsx)("style",{children:eu}),(0,r.jsxs)("section",{className:"ae-state",children:[(0,r.jsx)("h2",{children:"No branch workspace selected"}),(0,r.jsx)("p",{children:"Assessment entries belong to your selected teacher workspace. Use Select Role again if the wrong school or branch is active."}),(0,r.jsx)("button",{type:"button",className:"ae-state-button",onClick:()=>a.push("/account"),children:"Go to Account Setup"})]})]}):(0,r.jsx)(ea,{primary:C,title:"Teacher assignment required",text:"Select your teacher role with an assigned teacher profile to enter scores."}):(0,r.jsx)(ea,{primary:C,title:"Redirecting to login...",text:"You must sign in before entering assessment scores."})},reportsWorkspace:function(e){let[a,t]=(0,s.useState)("reports"),i=h(),o=[{key:"reports",label:"Report Cards",Component:eT},{key:"broadsheets",label:"Broadsheets",Component:e8},...i.classTeacherClassIds.size>0?[{key:"remarks",label:"Remarks",Component:ah},{key:"attendance",label:"Attendance",Component:aJ}]:[]],n=o.find(e=>e.key===a)||o[0],d=n.Component;return(0,r.jsx)(eh.NA,{children:(0,r.jsxs)("div",{className:"ba-workspace-wrapper ba-reports-workspace teacher-reports-workspace",children:[(0,r.jsx)("style",{children:tp}),(0,r.jsxs)("div",{className:"ba-contextual-actions ba-report-subtabs report-no-print","aria-label":"Report views",children:[(0,r.jsx)("div",{className:"ba-report-subtab-list",role:"group","aria-label":"Select report view",children:o.map(e=>(0,r.jsx)("button",{type:"button",className:n.key===e.key?"is-active":"","aria-pressed":n.key===e.key,onClick:()=>{t(e.key);let a=document.querySelector(".role-shell.workspace-locked-scroll .app-content");a&&(a.scrollTop=0)},children:e.label},e.key))}),("reports"===n.key||"broadsheets"===n.key)&&(0,r.jsx)(eh.Gx,{})]}),i.ready?i.permitted?(0,r.jsx)(d,{...e}):(0,r.jsx)("div",{className:"teacher-portal-report-loading",role:"status",children:"An active teacher membership is required."}):(0,r.jsx)("div",{className:"teacher-portal-report-loading",role:"status",children:"Loading teacher assignments…"})]})})},teacherStudents:function(){let e=h(),{settings:a}=(0,k.t)(),t=a?.primaryColor||"var(--primary-color,#2563eb)",i=(0,d.f)(["students","studentEnrollments","classes","organizations"]),[o,n]=(0,s.useState)([]),[m,u]=(0,s.useState)(!1),[b,x]=(0,s.useState)(!1),[f,v]=(0,s.useState)(""),[y,w]=(0,s.useState)("all"),[j,S]=(0,s.useState)("all"),[N,C]=(0,s.useState)("cards"),[z,M]=(0,s.useState)(!1),[A,P]=(0,s.useState)(!1),[R,B]=(0,s.useState)(null),[$,D]=(0,s.useState)(a7),[O,F]=(0,s.useState)(null),[L,U]=(0,s.useState)(!1),[_,W]=(0,s.useState)(""),[K,V]=(0,s.useState)(!1),[G,q]=(0,s.useState)(!1),[J,H]=(0,s.useState)("environment"),Y=(0,s.useRef)(null),Z=(0,s.useRef)(null),X=(0,s.useRef)(null),[Q,ee]=(0,s.useState)(""),ea=(0,s.useRef)(""),et=[e.accountId,e.schoolId,e.branchId,e.teacherId].join("|"),er=(0,s.useRef)(et);er.current=et;let es=(0,s.useRef)(0),[ei,eo]=(0,s.useState)(""),en=[...e.allowedClassIds].sort().join("|"),ed=(0,s.useMemo)(()=>new Set(en.split("|").filter(Boolean)),[en]),el=(0,s.useMemo)(()=>e.permitted&&ei===et?o.filter(e=>ed.has(e.classId)):[],[e.permitted,ei,et,o,ed]),ec=(0,s.useMemo)(()=>el.map(e=>e.row),[el]),ep=(0,E.D)({accountId:e.accountId,ownerTable:"students",rows:ec,fields:[{fieldKey:"photo",mediaIdKey:"photoMediaId"}]});(0,s.useEffect)(()=>{C(window.matchMedia("(min-width: 900px)").matches?"table":"cards")},[]);let em=(0,s.useCallback)(async()=>{let a=++es.current;if(e.permitted&&e.ready){u(!0);try{let t=l.db.organizations,r=[l.db.students,l.db.studentEnrollments,l.db.classes];t&&r.push(t);let[s,i,o,d]=await l.db.transaction("r",r,async()=>Promise.all([l.db.students.toArray(),l.db.studentEnrollments.toArray(),l.db.classes.toArray(),t?t.toArray():Promise.resolve([])]));if(a!==es.current||er.current!==et)return;let m=a=>a?.isDeleted!==!0&&a?.active!==!1&&p(a.accountId,e.accountId)&&p(a.schoolId,e.schoolId)&&p(a.branchId,e.branchId),u=new Map(o.filter(m).map(e=>[c(e.id),te(e.name)])),b=new Map(d.filter(m).map(e=>[c(e.id),te(e.name)])),h=i.filter(e=>m(e)&&ed.has(c(e.classId))),x=h.filter(e=>{let a=te(e.status).trim().toLowerCase();return"active"===a||!a&&!1!==e.active}),g=new Map;x.forEach(e=>{let a=c(e.studentId),t=c(e.classId);a&&!g.has(a)&&g.set(a,{classId:t,className:u.get(t)||"Class"})});let f=new Map;h.forEach(e=>{let a=c(e.studentId);f.set(a,(f.get(a)||0)+1)});let v=s.filter(e=>m(e)&&g.has(c(e.id))&&!["withdrawn","graduated","deleted"].includes(ts(e))).map(e=>({row:e,...g.get(c(e.id)),organizationName:b.get(c(e.organizationId))||"—",enrollmentCount:f.get(c(e.id))||0})).sort((e,a)=>te(e.row.fullName).localeCompare(te(a.row.fullName)));n(v),eo(et)}catch(e){a===es.current&&er.current===et&&(console.error("Teacher Students load:",e),ee("Student refresh could not complete. Your existing list is retained; try Refresh."))}finally{a===es.current&&er.current===et&&u(!1)}}},[et,e.permitted,e.ready,e.accountId,e.schoolId,e.branchId,ed]);(0,s.useEffect)(()=>(e.permitted&&e.ready?em():es.current++,()=>{es.current++}),[em,i,e.permitted,e.ready]);let eu=e=>ep[c(e.id)]?.photo||te(e.photo)||void 0,eb=(0,s.useMemo)(()=>[...new Map(el.map(e=>[e.classId,e.className])).entries()].sort((e,a)=>e[1].localeCompare(a[1])),[el]),eh=(0,s.useMemo)(()=>el.filter(e=>{if("all"!==y&&e.classId!==y||"all"!==j&&tr(e.row)!==j)return!1;let a=f.toLowerCase().trim();return!a||`${e.row.fullName||""} ${e.row.admissionNumber||""} ${e.className} ${e.row.parentPhone||""}`.toLowerCase().includes(a)}),[el,y,j,f]);(0,T.TV)("teacherStudents",{search:v,filter:()=>M(!0),more:()=>P(!0)});let eg=e=>{let a=e.row;B(e),ee(""),F(null),ea.current=(0,ex.It)(ex.$S.STUDENTS),D({fullName:te(a.fullName),gender:tr(e.row),dateOfBirth:te(a.dateOfBirth).slice(0,10),age:tt(e.row),parentName:te(a.parentName),parentPhone:te(a.parentPhone),parentEmail:te(a.parentEmail),address:te(a.address)})},ef=()=>{(0,ex.IK)(Z.current),Z.current=null,Y.current&&(Y.current.srcObject=null)};(0,s.useEffect)(()=>{if(!L||!R)return;let e=!1;return(async()=>{W(""),V(!0),ef();try{let a=await (0,ex.Ik)({facingMode:J,width:1280,height:720});if(e)return void(0,ex.IK)(a);Z.current=a,Y.current&&await (0,ex.Pr)(Y.current,a)}catch(a){e||W(a instanceof Error?a.message:(0,ex.f5)())}finally{e||V(!1)}})(),()=>{e=!0,ef()}},[L,J,R?.row.id]);let ev=()=>{ef(),U(!1),W(""),q(!1)},ey=async()=>{if(!Y.current)return void W("Camera preview is not ready.");q(!0),W("");try{let e=await (0,ex.ln)(Y.current,{fileName:`student-photo-${Date.now()}.jpg`,mimeType:"image/jpeg",quality:.88,maxWidth:900,maxHeight:900});await ek(e),ev()}catch(e){W(e instanceof Error?e.message:"Could not capture student photo.")}finally{q(!1)}},ew=()=>{b||(ev(),B(null),F(null))},ek=async a=>{if(a&&R){if(!a.type.startsWith("image/"))return void ee("Choose an image file.");try{let t=await (0,ex.fA)(a,{accountId:e.accountId,schoolId:e.schoolId,branchId:e.branchId,ownerTable:ex.$S.STUDENTS,ownerId:void 0,ownerTempKey:ea.current,fieldKey:ex.Vq.PHOTO,variant:"avatar",replaceExisting:!0});if(!t.assetId)throw Error("Photo could not be staged.");F({assetId:c(t.assetId),previewUrl:t.previewUrl})}catch(e){ee(e instanceof Error?e.message:"Photo upload failed.")}}},ej=async a=>{if(a?.preventDefault(),!R||!e.permitted||b)return;let t=$.fullName.trim();if(!t)return void ee("Student name is required.");let r=$.dateOfBirth?ta($.dateOfBirth):""===$.age.trim()?void 0:Number($.age);if($.dateOfBirth&&void 0===r)return void ee("Enter a valid date of birth that is not in the future.");if(void 0!==r&&(!Number.isFinite(r)||r<0||r>130))return void ee("Enter a valid age.");let s=c(R.row.id);x(!0);try{if(!await g(e,s))throw Error("This student is no longer assigned to one of your classes.");let a=await l.db.students.get(s);if(!a||!p(a.accountId,e.accountId)||!p(a.schoolId,e.schoolId)||!p(a.branchId,e.branchId)||a.isDeleted)throw Error("Student record is no longer available.");let i=$.gender!==tr(a),o={fullName:t,dateOfBirth:$.dateOfBirth||void 0,age:r,parentName:$.parentName.trim()||void 0,parentPhone:$.parentPhone.trim()||void 0,parentEmail:$.parentEmail.trim()||void 0,address:$.address.trim()||void 0,...i?{gender:$.gender||void 0}:{}};await (0,I.Po)("students",s,o);let d=await l.db.students.get(s);d&&er.current===et&&n(e=>e.map(e=>c(e.row.id)===s?{...e,row:d}:e));let m="";if(O?.assetId)try{let a=await (0,ex.$e)({accountId:e.accountId,ownerTable:ex.$S.STUDENTS,ownerId:s,ownerTempKey:ea.current,assets:[{assetId:O.assetId,fieldKey:ex.Vq.PHOTO}]}),t=a.find(e=>e.fieldKey===ex.Vq.PHOTO)?.assetId;if(!t)throw Error("The photo could not be attached to this student.");await (0,I.Po)("students",s,{photoMediaId:t});let r=await l.db.students.get(s);r&&er.current===et&&n(e=>e.map(e=>c(e.row.id)===s?{...e,row:r}:e))}catch(e){console.error("Teacher Student photo attachment:",e),m=e instanceof Error?e.message:"Unable to attach the photo."}m?ee(`Student details saved locally, but the photo needs attention: ${m}`):(B(null),F(null),ee("Student details saved locally. Cloud sync may still be pending.")),em()}catch(e){console.error("Teacher Student save:",e),ee(e instanceof Error?e.message:"Could not save student.")}finally{x(!1)}};return(0,r.jsxs)("main",{className:"ba-page students-page teacher-students-page",style:{"--ba-primary":t,"--ba-primary-text":to(t)},children:[(0,r.jsx)("style",{children:tc}),Q&&(0,r.jsxs)("section",{className:"ba-toast info",role:"status",children:[Q,(0,r.jsx)("button",{type:"button",onClick:()=>ee(""),"aria-label":"Dismiss message",children:"✕"})]}),e.ready?e.permitted?m&&!el.length&&ei!==et?(0,r.jsx)("div",{className:"teacher-loading",children:"Loading assigned students…"}):(0,r.jsxs)(r.Fragment,{children:["cards"===N&&(0,r.jsx)("section",{className:"ba-list",children:eh.map(e=>(0,r.jsxs)("button",{type:"button",className:"student-row",onClick:()=>eg(e),"aria-label":`Edit ${te(e.row.fullName)}`,children:[(0,r.jsx)(tn,{name:te(e.row.fullName),photo:eu(e.row),primary:t}),(0,r.jsxs)("span",{className:"student-main",children:[(0,r.jsx)("strong",{children:e.row.fullName||"Unnamed student"}),(0,r.jsxs)("small",{children:[e.className,e.row.admissionNumber?` \xb7 ${e.row.admissionNumber}`:""]}),(0,r.jsx)("em",{children:e.row.parentPhone?`Parent: ${e.row.parentPhone}`:e.row.parentName?`Parent: ${e.row.parentName}`:e.organizationName})]}),(0,r.jsxs)("span",{className:"student-side",children:[(0,r.jsx)(td,{row:e.row}),(0,r.jsx)("i",{"aria-hidden":"true",children:"✎"})]})]},c(e.row.id)))}),"table"===N&&(0,r.jsx)("section",{className:"ba-table-card",children:(0,r.jsxs)("div",{className:"ba-table-scroll eds-workspace-table-scroll","data-workspace-hscroll":"true",role:"region","aria-label":"Teacher students table",tabIndex:0,children:[(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsxs)("th",{children:["Students (",eh.length,")"]}),(0,r.jsx)("th",{children:"Admission No."}),(0,r.jsx)("th",{children:"Class"}),(0,r.jsx)("th",{children:"Organization"}),(0,r.jsx)("th",{children:"Gender"}),(0,r.jsx)("th",{children:"Age"}),(0,r.jsx)("th",{children:"Parent"}),(0,r.jsx)("th",{children:"Phone"}),(0,r.jsx)("th",{children:"Enrollments"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Updated"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:eh.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"ba-table-person",children:[(0,r.jsx)(tn,{name:te(e.row.fullName),photo:eu(e.row),primary:"var(--ba-primary,#64748b)"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:e.row.fullName}),(0,r.jsx)("span",{children:e.row.address||""})]})]})}),(0,r.jsx)("td",{children:e.row.admissionNumber||"—"}),(0,r.jsx)("td",{children:e.className}),(0,r.jsx)("td",{children:e.organizationName}),(0,r.jsx)("td",{children:tr(e.row)||"—"}),(0,r.jsx)("td",{children:tt(e.row)||"—"}),(0,r.jsx)("td",{children:e.row.parentName||"—"}),(0,r.jsx)("td",{children:e.row.parentPhone||"—"}),(0,r.jsx)("td",{children:e.enrollmentCount}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{className:`ba-chip ${ti(e.row)}`,children:ts(e.row)})}),(0,r.jsx)("td",{children:function(e){if(!e)return"—";let a=new Date(e);return Number.isFinite(a.getTime())?a.toLocaleDateString("en-GH",{day:"2-digit",month:"short",year:"numeric"}):"—"}(e.row.updatedAt||e.row.createdAt)}),(0,r.jsx)("td",{children:(0,r.jsx)("div",{className:"ba-table-actions",children:(0,r.jsx)("button",{type:"button",onClick:()=>eg(e),children:"Edit"})})})]},c(e.row.id)))})]}),!eh.length&&(0,r.jsx)("div",{className:"ba-empty-table",children:"No student matches your filters."})]})}),!eh.length&&"cards"===N&&(0,r.jsxs)("section",{className:"ba-state",children:[(0,r.jsx)("h2",{children:"No students found"}),(0,r.jsx)("p",{children:ed.size?"No assigned students match your current filters, or their enrollment records are not yet available on this device.":"No class assignment is available on this device. Check the selected teacher workspace and synchronization."})]})]}):(0,r.jsxs)("section",{className:"ba-state",children:[(0,r.jsx)("h2",{children:"Teacher workspace required"}),(0,r.jsx)("p",{children:"Select your teacher role to view assigned students."})]}):(0,r.jsx)("div",{className:"teacher-loading",children:"Loading assigned students…"}),z&&(0,r.jsx)(tl,{type:"sheet",primary:t,onClose:()=>M(!1),children:(0,r.jsxs)("section",{className:"ba-sheet small",role:"dialog","aria-modal":"true","aria-label":"Student filters",onPointerDown:e=>e.stopPropagation(),children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Filters"}),(0,r.jsx)("p",{children:"Find students in your assigned classes."})]}),(0,r.jsx)("button",{className:"ba-modal-close",type:"button",onClick:()=>M(!1),"aria-label":"Close filters",children:"✕"})]}),(0,r.jsxs)("div",{className:"ba-form two",children:[(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Search"}),(0,r.jsx)("input",{value:f,onChange:e=>v(e.target.value),placeholder:"Name or admission number"})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Class"}),(0,r.jsxs)("select",{value:y,onChange:e=>w(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All assigned classes"}),eb.map(([e,a])=>(0,r.jsx)("option",{value:e,children:a},e))]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Gender"}),(0,r.jsxs)("select",{value:j,onChange:e=>S(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All genders"}),(0,r.jsx)("option",{value:"Male",children:"Male"}),(0,r.jsx)("option",{value:"Female",children:"Female"}),(0,r.jsx)("option",{value:"Other",children:"Other"})]})]})]}),(0,r.jsxs)("div",{className:"ba-sheet-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>{w("all"),S("all"),v("")},children:"Clear"}),(0,r.jsx)("button",{type:"button",className:"primary",onClick:()=>M(!1),children:"Apply"})]})]})}),A&&(0,r.jsx)(tl,{type:"sheet",primary:t,onClose:()=>P(!1),children:(0,r.jsxs)("section",{className:"ba-sheet small",role:"dialog","aria-modal":"true","aria-label":"Student display",onPointerDown:e=>e.stopPropagation(),children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"More"}),(0,r.jsx)("p",{children:"Choose a student display."})]}),(0,r.jsx)("button",{className:"ba-modal-close",type:"button","aria-label":"Close More",onClick:()=>P(!1),children:"✕"})]}),(0,r.jsxs)("div",{className:"ba-menu-list",children:[(0,r.jsxs)("button",{type:"button",className:"cards"===N?"active":"",onClick:()=>{C("cards"),P(!1)},children:[(0,r.jsx)("span",{children:"☰"}),(0,r.jsx)("b",{children:"List view"}),(0,r.jsx)("small",{children:"Compact student cards"})]}),(0,r.jsxs)("button",{type:"button",className:"table"===N?"active":"",onClick:()=>{C("table"),P(!1)},children:[(0,r.jsx)("span",{children:"☷"}),(0,r.jsx)("b",{children:"Table view"}),(0,r.jsx)("small",{children:"Dense records for laptop work"})]}),(0,r.jsxs)("button",{type:"button",onClick:()=>{P(!1),em()},children:[(0,r.jsx)("span",{children:"↻"}),(0,r.jsx)("b",{children:"Refresh"}),(0,r.jsx)("small",{children:"Reload assigned students"})]})]})]})}),R&&(0,r.jsx)(tl,{primary:t,onClose:ew,children:(0,r.jsxs)("form",{className:"ba-modal",role:"dialog","aria-modal":"true","aria-label":"Edit student",onSubmit:ej,onPointerDown:e=>e.stopPropagation(),children:[(0,r.jsxs)("div",{className:"ba-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Edit Student"}),(0,r.jsxs)("p",{children:[R.row.admissionNumber||"No admission number"," \xb7 ",R.className]})]}),(0,r.jsx)("button",{type:"button",className:"ba-modal-close",disabled:b,onClick:ew,"aria-label":"Close student editor",children:"✕"})]}),(0,r.jsxs)("section",{className:"ba-form-section",children:[(0,r.jsx)("h3",{children:"Student"}),(0,r.jsxs)("div",{className:"ba-form",children:[(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Full Name"}),(0,r.jsx)("input",{autoFocus:!0,value:$.fullName,onChange:e=>D(a=>({...a,fullName:e.target.value})),required:!0})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Gender"}),(0,r.jsxs)("select",{value:$.gender,onChange:e=>D(a=>({...a,gender:e.target.value})),children:[(0,r.jsx)("option",{value:"",children:"Select gender"}),(0,r.jsx)("option",{value:"Male",children:"Male"}),(0,r.jsx)("option",{value:"Female",children:"Female"}),(0,r.jsx)("option",{value:"Other",children:"Other"}),$.gender&&!["Male","Female","Other"].includes($.gender)&&(0,r.jsxs)("option",{value:$.gender,children:[$.gender," (existing)"]})]})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Date of Birth"}),(0,r.jsx)("input",{type:"date",value:$.dateOfBirth,onChange:e=>D(a=>({...a,dateOfBirth:e.target.value,age:e.target.value?String(ta(e.target.value)??""):""}))})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Age (calculated)"}),(0,r.jsx)("input",{type:"number",min:"0",max:"130",value:$.dateOfBirth?ta($.dateOfBirth)??"":$.age,readOnly:!0,title:"Age is automatically calculated from Date of Birth"})]})]})]}),(0,r.jsxs)("section",{className:"ba-form-section",children:[(0,r.jsx)("h3",{children:"Parent / Guardian"}),(0,r.jsxs)("div",{className:"ba-form",children:[(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Parent / Guardian Name"}),(0,r.jsx)("input",{value:$.parentName,onChange:e=>D(a=>({...a,parentName:e.target.value}))})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Parent Phone"}),(0,r.jsx)("input",{value:$.parentPhone,onChange:e=>D(a=>({...a,parentPhone:e.target.value}))})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{children:"Parent Email"}),(0,r.jsx)("input",{type:"email",value:$.parentEmail,onChange:e=>D(a=>({...a,parentEmail:e.target.value}))})]}),(0,r.jsxs)("label",{className:"wide",children:[(0,r.jsx)("span",{children:"Address"}),(0,r.jsx)("textarea",{value:$.address,onChange:e=>D(a=>({...a,address:e.target.value}))})]})]})]}),(0,r.jsxs)("section",{className:"ba-form-section",children:[(0,r.jsx)("h3",{children:"Media"}),(0,r.jsxs)("div",{className:"ba-media-section",children:[(0,r.jsx)(tn,{name:$.fullName,photo:O?.previewUrl||eu(R.row),primary:t}),(0,r.jsxs)("label",{className:"ba-media-button secondary",children:["Upload photo",(0,r.jsx)("input",{type:"file",accept:"image/*",disabled:b,onChange:e=>{ek(e.target.files?.[0]),e.target.value=""}})]}),(0,r.jsx)("button",{type:"button",className:"ba-media-button",disabled:b,onClick:()=>{(0,ex.fP)()?(H("environment"),W(""),U(!0)):ee((0,ex.f5)())},children:"\uD83D\uDCF7 Take Photo"}),(0,r.jsx)("input",{ref:X,type:"file",accept:"image/*",capture:"environment","aria-label":"Use device camera",style:{display:"none"},onChange:e=>{ek(e.target.files?.[0]),e.target.value=""}})]})]}),(0,r.jsx)("section",{className:"ba-form-section",children:(0,r.jsxs)("div",{className:"ba-school-managed",children:[(0,r.jsx)("strong",{children:"School-managed fields"}),(0,r.jsxs)("p",{children:["Admission number: ",R.row.admissionNumber||"—"," \xb7 Class: ",R.className,". Enrollment, class assignment, organization, and student status cannot be edited by teachers."]})]})}),(0,r.jsxs)("div",{className:"ba-modal-actions",children:[(0,r.jsx)("button",{type:"button",disabled:b,onClick:ew,children:"Cancel"}),(0,r.jsx)("button",{type:"submit",disabled:b,children:b?"Saving…":"Save changes"})]})]})}),R&&L&&(0,r.jsx)(tl,{primary:t,onClose:ev,children:(0,r.jsxs)("section",{className:"ba-modal teacher-camera-dialog ba-camera-modal",role:"dialog","aria-modal":"true","aria-label":"Take student photo",onPointerDown:e=>e.stopPropagation(),children:[(0,r.jsxs)("div",{className:"ba-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Take Student Photo"}),(0,r.jsx)("p",{children:"Use the live camera preview, then capture. The photo is compressed and staged until Save."})]}),(0,r.jsx)("button",{type:"button",className:"ba-modal-close",onClick:ev,"aria-label":"Close camera",children:"✕"})]}),(0,r.jsxs)("div",{className:"ba-camera-preview",children:[(0,r.jsx)("video",{ref:Y,autoPlay:!0,muted:!0,playsInline:!0}),K&&(0,r.jsx)("span",{className:"ba-camera-loading",children:"Opening camera…"})]}),_&&(0,r.jsx)("p",{role:"alert",className:"teacher-camera-error",children:_}),(0,r.jsxs)("div",{className:"ba-camera-actions",children:[(0,r.jsx)("button",{type:"button",className:"ba-camera-secondary",disabled:K||G,onClick:()=>H(e=>"environment"===e?"user":"environment"),children:"Switch Camera"}),(0,r.jsx)("button",{type:"button",className:"ba-camera-secondary",disabled:G,onClick:ev,children:"Cancel"}),(0,r.jsx)("button",{type:"button",className:"ba-camera-primary",disabled:K||G||!!_,onClick:()=>void ey(),children:G?"Capturing…":"Capture Photo"})]})]})})]})}};function tb(){return(0,r.jsx)(i.A,{portalTitle:"Teacher Portal",portalSubtitle:"Enter scores, reports and students",homeKey:"assessmentEntry",allowedRoles:o.dF,navSections:tm,navigationMode:"branch-workspace",routes:tu,lockedContext:!0,requireSchool:!0,requireBranch:!0})}},68126:(e,a,t)=>{Promise.resolve().then(t.bind(t,48992))},91013:(e,a,t)=>{"use strict";t.d(a,{Bk:()=>s});var r=t(95155);function s({permissions:e,require:a,mode:t="all",allowed:i,fallback:o=null,children:n}){let d=i??function(e,a,t="all"){if(!a)return!0;let r=new Set(e??[]);if("function"==typeof a)return a(r);let s="string"==typeof a?[a]:[...a];return 0===s.length||("any"===t?s.some(e=>r.has(e)):s.every(e=>r.has(e)))}(e,a,t);return(0,r.jsx)(r.Fragment,{children:d?n:o})}}},e=>{e.O(0,[8206,3524,3019,69,1439,5125,9540,4967,2975,8365,6228,110,4187,7050,2566,2133,5558,8441,3794,7358],()=>e(e.s=68126)),_N_E=e.O()}]);
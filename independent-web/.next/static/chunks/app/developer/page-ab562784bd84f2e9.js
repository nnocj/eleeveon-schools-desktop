(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5379],{21107:(e,a,t)=>{"use strict";t.r(a),t.d(a,{NAV_SECTIONS:()=>sV,default:()=>sQ});var r=t(95155),i=t(12115),s=t(34187),n=t(1728),d=t(48035),l=t(28408),o=t(32539),c=t(59656),p=t(58021),u=t(18167),m=t(99360),g=t(1573),x=t(19035);let h=[{value:"trial",title:"Public free trial",description:"Temporary, limited evaluation access"},{value:"self_service",title:"Self-service purchase",description:"Public checkout for eligible customers"},{value:"private_offer",title:"Private offer",description:"Individually negotiated package or quote"},{value:"complimentary",title:"Complimentary / pilot",description:"Platform-controlled special access (not automatically granted)"},{value:"outright",title:"Outright purchase",description:"One-time purchase, subject to issued licence"},{value:"installments",title:"Flex installments",description:"Purchase agreement with scheduled payments"}],b=[{value:"eleeveon_cloud",title:"Eleeveon Cloud"},{value:"independent_essentials",title:"Independent Essentials"},{value:"independent_multi_device",title:"Independent Multi-device"},{value:"private_hosted",title:"Private / school hosted (future)"}],f=[{key:"offlineSync",label:"Offline-first sync",description:"Local-first records with protected synchronization.",icon:"↻",group:"Core",legacyTopLevel:!0},{key:"cloudBackup",label:"Cloud backup",description:"Cloud recovery, restore and backup tools.",icon:"☁",group:"Core",legacyTopLevel:!0},{key:"reports",label:"Assessments & reports",description:"Assessment entry, report cards, broadsheets and templates.",icon:"▦",group:"Core",legacyTopLevel:!0},{key:"finance",label:"Finance",description:"Fees, payments, income, expenses and payroll.",icon:"₵",group:"Core",legacyTopLevel:!0},{key:"attendance",label:"Attendance",description:"Student and staff attendance workflows.",icon:"✓",group:"Operations"},{key:"identityCards",label:"ID cards & passes",description:"Student, staff, parent and visitor identity cards.",icon:"▣",group:"Operations"},{key:"identitySafety",label:"Identity & safety",description:"Pickup, visitors, access points and emergency roll calls.",icon:"◇",group:"Operations"},{key:"transport",label:"School transport",description:"Vehicles, routes, stops, assignments and journeys.",icon:"▰",group:"Operations"},{key:"schoolWebsites",label:"School websites",description:"Template-based public websites and custom domains.",icon:"↗",group:"Growth"},{key:"communications",label:"Communication",description:"Announcements, messaging and delivery logs.",icon:"✉",group:"Growth"},{key:"calendarScheduling",label:"Calendar & scheduling",description:"Events, timetables, resources and conflict checks.",icon:"□",group:"Growth"},{key:"parentPortal",label:"Parent portal",description:"Children, reports, fees and communication.",icon:"P",group:"People",legacyTopLevel:!0},{key:"studentPortal",label:"Student portal",description:"Results, reports, attendance and learning records.",icon:"S",group:"People",legacyTopLevel:!0},{key:"teacherPortal",label:"Teacher portal",description:"Classes, attendance, assessment and timetable tools.",icon:"T",group:"People",legacyTopLevel:!0},{key:"advancedAnalytics",label:"Advanced analytics",description:"Charts, trends, insights and performance views.",icon:"⌁",group:"Growth",legacyTopLevel:!0},{key:"apiAccess",label:"API access",description:"External integrations and developer APIs.",icon:"{ }",group:"Growth",legacyTopLevel:!0}],v={offlineSync:!0,cloudBackup:!1,reports:!0,finance:!1,attendance:!1,identityCards:!1,identitySafety:!1,transport:!1,schoolWebsites:!1,communications:!1,calendarScheduling:!1,parentPortal:!1,studentPortal:!1,teacherPortal:!0,advancedAnalytics:!1,apiAccess:!1},y={name:"",code:"",description:"",currency:"GHS",priceMonthly:"0",priceTermly:"0",priceYearly:"0",priceOneTime:"",deploymentMode:"eleeveon_cloud",licenseModel:"subscription",syncPolicy:"full",updatePolicy:"continuous",deviceLimit:"",activationLimit:"",offlineGraceDays:"",validationIntervalDays:"",requiresPeriodicValidation:!1,trialDays:"14",pricingMode:"fixed",pricingPeriod:"termly",perStudentRate:"3",pricingMinimum:"0",pricingTiers:[{upTo:"100",unitPrice:"3"},{upTo:"",unitPrice:"2"}],publicVisible:!0,acquisitionModes:["self_service"],originalMetadata:{},maxSchools:"",maxBranches:"",maxUsers:"",maxStudents:"",maxTeachers:"",maxStorageMb:"",features:{...v},active:!0},j=(e,a=[])=>{if(Array.isArray(e))return e;if(!e||"object"!=typeof e)return[];for(let t of a)if(Array.isArray(e[t]))return e[t];return Array.isArray(e.data)?e.data:Array.isArray(e.items)?e.items:Array.isArray(e.results)?e.results:Array.isArray(e.records)?e.records:Array.isArray(e.rows)?e.rows:[]},w=e=>String(e??"").trim(),k=e=>{if(!e.trim())return null;let a=Number(e);return Number.isFinite(a)?Math.max(0,Math.round(a)):null},N=(e,a="GHS")=>new Intl.NumberFormat("en-GH",{style:"currency",currency:a,maximumFractionDigits:0}).format(Number(e||0)),S=e=>Array.isArray(e.features)?e.features.map(e=>w(e)).filter(Boolean):[],C=(e,a)=>{let t=e[a];if("boolean"==typeof t)return t;let r=e.metadata&&"object"==typeof e.metadata&&e.metadata.featureFlags&&"object"==typeof e.metadata.featureFlags?e.metadata.featureFlags:{};return"boolean"==typeof r[a]?r[a]:S(e).includes(a)},A=e=>{let a=e?.plan||e?.data||e;if(!a||"object"!=typeof a)return null;let t=w(a.id||a.localId);return t?{...a,id:t,name:w(a.name),code:w(a.code),currency:w(a.currency)||"GHS",priceMonthly:Number(a.priceMonthly||0),priceTermly:Number(a.priceTermly||0),priceYearly:Number(a.priceYearly||0),active:!1!==a.active,features:Array.isArray(a.features)?a.features:[],metadata:a.metadata&&"object"==typeof a.metadata?a.metadata:{}}:null};function z({title:e,description:a}){return(0,r.jsxs)("section",{className:"dp-empty",children:[(0,r.jsx)("div",{className:"dp-empty-icon",children:"◇"}),(0,r.jsx)("h3",{children:e}),(0,r.jsx)("p",{children:a})]})}function D({tone:e,children:a,onClose:t}){return(0,r.jsxs)("div",{className:`dp-toast ${e}`,children:[(0,r.jsx)("span",{children:a}),(0,r.jsx)("button",{type:"button",onClick:t,"aria-label":"Close message",children:"\xd7"})]})}function T({navigate:e}){let{accountId:a,authenticated:t,loading:s}=(0,g.F)(),{settings:R}=(0,x.t)(),M=R?.primaryColor||"var(--primary-color, #2563eb)",q=function(e){let a=w(e);if(!a.startsWith("#"))return"#fff";let t=a.slice(1);if(3===t.length&&(t=t.split("").map(e=>e+e).join("")),!/^[0-9a-fA-F]{6}$/.test(t))return"#fff";let r=Number.parseInt(t,16);return(299*(r>>16&255)+587*(r>>8&255)+114*(255&r))/1e3>155?"#111827":"#ffffff"}(M),[L,I]=(0,i.useState)([]),[E,$]=(0,i.useState)([]),[F,U]=(0,i.useState)(!0),[O,_]=(0,i.useState)(!1),[K,B]=(0,i.useState)(!1),[H,G]=(0,i.useState)(""),[W,V]=(0,i.useState)(null),[J,Q]=(0,i.useState)(""),[Y,X]=(0,i.useState)("all"),[Z,ee]=(0,i.useState)("all"),[ea,et]=(0,i.useState)("all"),[er,ei]=(0,i.useState)("cards"),[es,en]=(0,i.useState)("monthly"),[ed,el]=(0,i.useState)(!1),[eo,ec]=(0,i.useState)(!1),[ep,eu]=(0,i.useState)(!1),[em,eg]=(0,i.useState)({...y,features:{...y.features}}),ex=async(e=!1)=>{try{e?_(!0):U(!0);let[a,t]=await Promise.all([(0,m.uE)("/billing/plans/manage?includeInactive=true"),(0,m.uE)("/billing/subscriptions").catch(()=>[])]),r=j(a,["plans","subscriptionPlans"]).map(A).filter(Boolean);I(r),$(j(t,["subscriptions","accountSubscriptions"]))}catch(e){V({tone:"error",text:e?.message||"Could not load subscription plans."})}finally{U(!1),_(!1)}};(0,i.useEffect)(()=>{if(!s){if(!t||!a)return void U(!1);ex()}},[s,t,a]);let eh=(0,i.useMemo)(()=>Array.from(new Set(L.map(e=>e.currency||"GHS").filter(Boolean))).sort(),[L]),eb=(0,i.useMemo)(()=>{let e=J.trim().toLowerCase();return L.filter(a=>{let t=[a.name,a.code,a.description,...S(a)].join(" ").toLowerCase(),r="all"===Y||"active"===Y&&!1!==a.active||"inactive"===Y&&!1===a.active,i="all"===Z||C(a,Z),s="all"===ea||(a.currency||"GHS")===ea;return r&&i&&s&&(!e||t.includes(e))}).sort((e,a)=>!1!==e.active!=(!1!==a.active)?!1!==e.active?-1:1:Number(e.priceMonthly||0)-Number(a.priceMonthly||0))},[L,J,Y,Z,ea]),ef=(0,i.useMemo)(()=>L.filter(e=>!1!==e.active),[L]),ev=(0,i.useMemo)(()=>L.filter(e=>Number(e.priceMonthly||0)>0||Number(e.priceTermly||0)>0||Number(e.priceYearly||0)>0||Number(e.priceOneTime||0)>0),[L]),ey=(0,i.useMemo)(()=>ev.length?Math.round(ev.reduce((e,a)=>e+Number(a.priceMonthly||0),0)/ev.length):0,[ev]),ej=(0,i.useMemo)(()=>E.filter(e=>["active"].includes(w(e.status).toLowerCase())).reduce((e,a)=>{let t=a.plan||L.find(e=>e.id===a.planId);return e+Number(t?.priceMonthly||0)},0),[L,E]),ew=["all"!==Y,"all"!==Z,"all"!==ea].filter(Boolean).length,ek=(0,i.useMemo)(()=>f.map(e=>({label:e.label,value:L.filter(a=>C(a,e.key)).length})).sort((e,a)=>a.value-e.value),[L]),eN=(0,i.useMemo)(()=>eb.map(e=>({label:e.name||e.code,monthly:Number(e.priceMonthly||0),termly:Number(e.priceTermly||0),yearly:Number(e.priceYearly||0)})),[eb]),eS=e=>{V(null),eg({id:e.id,name:e.name||"",code:e.code||"",description:e.description||"",currency:e.currency||"GHS",priceMonthly:String(e.priceMonthly??0),priceTermly:String(e.priceTermly??0),priceYearly:String(e.priceYearly??0),priceOneTime:null==e.priceOneTime?"":String(e.priceOneTime),deploymentMode:e.deploymentMode||"eleeveon_cloud",licenseModel:e.licenseModel||"subscription",syncPolicy:e.syncPolicy||"full",updatePolicy:e.updatePolicy||"continuous",deviceLimit:null==e.deviceLimit?"":String(e.deviceLimit),activationLimit:null==e.activationLimit?"":String(e.activationLimit),offlineGraceDays:null==e.offlineGraceDays?"":String(e.offlineGraceDays),validationIntervalDays:null==e.validationIntervalDays?"":String(e.validationIntervalDays),requiresPeriodicValidation:!0===e.requiresPeriodicValidation,trialDays:String(e.metadata?.trialDays??14),pricingMode:["fixed","per_student","tiered"].includes(e.metadata?.pricing?.mode)?e.metadata.pricing.mode:"fixed",pricingPeriod:["monthly","termly","yearly"].includes(e.metadata?.pricing?.billingPeriod)?e.metadata.pricing.billingPeriod:"termly",perStudentRate:String(e.metadata?.pricing?.perStudentRate??3),pricingMinimum:String(e.metadata?.pricing?.minimumAmount??0),pricingTiers:Array.isArray(e.metadata?.pricing?.tiers)?e.metadata.pricing.tiers.map(e=>({upTo:null==e.upTo?"":String(e.upTo),unitPrice:String(e.unitPrice)})):[{upTo:"100",unitPrice:"3"},{upTo:"",unitPrice:"2"}],publicVisible:e.metadata?.publicVisible!==!1&&e.metadata?.visibility!=="private",acquisitionModes:Array.isArray(e.availableAcquisitionModes)?e.availableAcquisitionModes.filter(e=>h.some(a=>a.value===e)):"trial"===e.licenseModel?["trial"]:"complimentary"===e.licenseModel?["complimentary"]:["self_service"],originalMetadata:{...e.metadata||{}},maxSchools:null==e.maxSchools?"":String(e.maxSchools),maxBranches:null==e.maxBranches?"":String(e.maxBranches),maxUsers:null==e.maxUsers?"":String(e.maxUsers),maxStudents:null==e.maxStudents?"":String(e.maxStudents),maxTeachers:null==e.maxTeachers?"":String(e.maxTeachers),maxStorageMb:null==e.maxStorageMb?"":String(e.maxStorageMb),features:f.reduce((a,t)=>(a[t.key]=C(e,t.key),a),{...v}),active:!1!==e.active}),eu(!0)},eC=()=>{K||eu(!1)},eA=async e=>{let a,t;e.preventDefault();let r=(a=f.filter(e=>em.features[e.key]).map(e=>e.key),t=f.reduce((e,a)=>(e[a.key]=em.features[a.key],e),{}),{name:w(em.name),code:w(em.code).toLowerCase().replace(/[^a-z0-9]+/g,"_"),description:w(em.description)||null,currency:w(em.currency)||"GHS",priceMonthly:k(em.priceMonthly)??0,priceTermly:k(em.priceTermly)??0,priceYearly:k(em.priceYearly)??0,priceOneTime:k(em.priceOneTime),deploymentMode:em.deploymentMode,licenseModel:em.licenseModel,syncPolicy:em.syncPolicy,updatePolicy:em.updatePolicy,deviceLimit:k(em.deviceLimit),activationLimit:k(em.activationLimit),offlineGraceDays:k(em.offlineGraceDays),validationIntervalDays:k(em.validationIntervalDays),requiresPeriodicValidation:em.requiresPeriodicValidation,availableAcquisitionModes:em.acquisitionModes,maxSchools:k(em.maxSchools),maxBranches:k(em.maxBranches),maxUsers:k(em.maxUsers),maxStudents:k(em.maxStudents),maxTeachers:k(em.maxTeachers),maxStorageMb:k(em.maxStorageMb),...t,features:a,metadata:{...em.originalMetadata,trialDays:k(em.trialDays)??14,publicVisible:em.publicVisible,visibility:em.publicVisible?"public":"private",pricing:"fixed"===em.pricingMode?{mode:"fixed"}:{mode:em.pricingMode,billingPeriod:em.pricingPeriod,minimumAmount:Number(em.pricingMinimum||0),..."per_student"===em.pricingMode?{perStudentRate:Number(em.perStudentRate||0)}:{tiers:em.pricingTiers.map(e=>({upTo:e.upTo.trim()?Number(e.upTo):null,unitPrice:Number(e.unitPrice||0)}))}},featureFlags:{...em.features},featureSchemaVersion:2,featureKeys:a},active:em.active});if(0===em.acquisitionModes.length)return void V({tone:"error",text:"Select at least one acquisition option."});if(em.acquisitionModes.includes("trial")&&(!Number.isInteger(Number(em.trialDays))||1>Number(em.trialDays)||Number(em.trialDays)>365))return void V({tone:"error",text:"Trial duration must be between 1 and 365 days."});if("perpetual"===em.licenseModel&&""===em.priceOneTime.trim())return void V({tone:"error",text:"Set the one-time price for perpetual packages (0 is permitted)."});if(!r.name||!r.code)return void V({tone:"error",text:"Plan name and code are required."});if("fixed"!==em.pricingMode){if("subscription"!==em.licenseModel)return void V({tone:"error",text:"Student pricing is available for subscriptions. Use a fixed price for trial, complimentary and perpetual packages."});if("tiered"===em.pricingMode){let e=em.pricingTiers,a=0;for(let t=0;t<e.length;t++){let r=e[t],i=Number(r.upTo);if(!Number.isFinite(Number(r.unitPrice))||0>Number(r.unitPrice)||r.upTo.trim()&&(!Number.isSafeInteger(i)||i<=a)||!r.upTo.trim()&&t!==e.length-1)return void V({tone:"error",text:"Tier thresholds must increase, with an empty final threshold meaning unlimited."});r.upTo.trim()&&(a=i)}if(!e.length||e[e.length-1].upTo.trim())return void V({tone:"error",text:"The final tier must have an empty upper limit (unlimited)."})}}try{B(!0),V(null);let e=em.id?await (0,m.uE)(`/billing/plans/${em.id}`,{method:"PATCH",body:r}):await (0,m.uE)("/billing/plans",{method:"POST",body:r}),a=A(e);if(em.id&&a&&a.id!==em.id)throw Error("The server returned a different plan after update.");em.id||a?.id,await ex(!0),eu(!1),V({tone:"success",text:em.id?"Subscription plan updated successfully.":"Subscription plan created successfully."})}catch(e){V({tone:"error",text:e?.message||"Could not save the subscription plan."})}finally{B(!1)}},ez=async e=>{let a=!1===e.active;try{G(e.id),V(null),await (0,m.uE)(`/billing/plans/${e.id}`,{method:"PATCH",body:{active:a}}),await ex(!0),V({tone:"success",text:a?"Plan activated.":"Plan deactivated."})}catch(e){V({tone:"error",text:e?.message||"Could not update plan status."})}finally{G("")}};return F||s?(0,r.jsxs)("main",{className:"dp-page",style:{"--dp-primary":M,"--dp-primary-text":q},children:[(0,r.jsx)("style",{children:P}),(0,r.jsxs)("section",{className:"dp-loading",children:[(0,r.jsx)("span",{className:"dp-spinner"}),(0,r.jsx)("h2",{children:"Loading subscription plans"}),(0,r.jsx)("p",{children:"Preparing prices, limits and platform capabilities."})]})]}):t&&a?(0,r.jsxs)("main",{className:"dp-page",style:{"--dp-primary":M,"--dp-primary-text":q},children:[(0,r.jsx)("style",{children:P}),W?(0,r.jsx)(D,{tone:W.tone,onClose:()=>V(null),children:W.text}):null,(0,r.jsxs)("section",{className:"dp-toolbar",children:[(0,r.jsxs)("label",{className:"dp-search",children:[(0,r.jsx)("span",{children:"⌕"}),(0,r.jsx)("input",{value:J,onChange:e=>Q(e.target.value),placeholder:"Search plans..."})]}),(0,r.jsx)("button",{type:"button",className:"dp-primary-action",onClick:()=>{V(null),eg({...y,features:{...y.features},acquisitionModes:[...y.acquisitionModes],originalMetadata:{}}),eu(!0)},"aria-label":"Add subscription plan",children:"+"}),(0,r.jsxs)("button",{type:"button",className:`dp-icon-action ${ew?"active":""}`,onClick:()=>el(!0),"aria-label":"Filter plans",children:[(0,r.jsx)("span",{children:"≡"}),ew?(0,r.jsx)("b",{children:ew}):null]}),(0,r.jsx)("button",{type:"button",className:"dp-icon-action",onClick:()=>ec(!0),"aria-label":"More plan options",children:"⋯"})]}),(0,r.jsxs)("section",{className:"dp-summary-grid",children:[(0,r.jsxs)("article",{children:[(0,r.jsx)("span",{children:"Plans"}),(0,r.jsx)("strong",{children:L.length}),(0,r.jsxs)("small",{children:[ef.length," active"]})]}),(0,r.jsxs)("article",{children:[(0,r.jsx)("span",{children:"Paid plans"}),(0,r.jsx)("strong",{children:ev.length}),(0,r.jsxs)("small",{children:[L.length-ev.length," free or trial"]})]}),(0,r.jsxs)("article",{children:[(0,r.jsx)("span",{children:"Average monthly"}),(0,r.jsx)("strong",{children:N(ey)}),(0,r.jsx)("small",{children:"Across paid plans"})]}),(0,r.jsxs)("article",{children:[(0,r.jsx)("span",{children:"Potential MRR"}),(0,r.jsx)("strong",{children:N(ej)}),(0,r.jsx)("small",{children:"Active subscriptions (list-price estimate)"})]})]}),"cards"===er?eb.length?(0,r.jsx)("section",{className:"dp-card-grid",children:eb.map(e=>{let a=f.filter(a=>C(e,a.key)),t="one_time"===es?Number(e.priceOneTime||0):"monthly"===es?Number(e.priceMonthly||0):"termly"===es?Number(e.priceTermly||0):Number(e.priceYearly||0);return(0,r.jsxs)("article",{className:`dp-plan-card ${!1===e.active?"inactive":""}`,children:[(0,r.jsxs)("header",{children:[(0,r.jsx)("div",{className:"dp-plan-mark",children:String(e.name||"P").slice(0,1).toUpperCase()}),(0,r.jsxs)("div",{className:"dp-plan-heading",children:[(0,r.jsxs)("div",{className:"dp-plan-title-row",children:[(0,r.jsx)("h3",{children:e.name||"Untitled plan"}),(0,r.jsx)("span",{className:`dp-status-dot ${!1===e.active?"inactive":""}`,title:!1===e.active?"Inactive":"Active"})]}),(0,r.jsx)("p",{children:e.code||"no_code"})]}),(0,r.jsx)("button",{type:"button",className:"dp-card-more",onClick:()=>eS(e),"aria-label":`Edit ${e.name}`,children:"⋯"})]}),(0,r.jsxs)("div",{className:"dp-price-row",children:[(0,r.jsx)("strong",{children:N(t,e.currency||"GHS")}),(0,r.jsx)("span",{children:"one_time"===es?"one-time":"monthly"===es?"month":"termly"===es?"4 months":"year"})]}),(0,r.jsx)("p",{className:"dp-description",children:e.description||"No plan description has been added."}),(0,r.jsxs)("div",{className:"dp-limit-row",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:e.maxStudents??"∞"}),"students"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:e.maxBranches??"∞"}),"branches"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:e.maxStorageMb??"∞"}),"MB"]})]}),(0,r.jsxs)("div",{className:"dp-feature-summary",children:[(0,r.jsx)("span",{children:a.slice(0,5).map(e=>(0,r.jsx)("i",{title:e.label,children:e.icon},e.key))}),(0,r.jsxs)("small",{children:[a.length,"/",f.length," capabilities"]})]}),(0,r.jsxs)("footer",{children:[(0,r.jsxs)("span",{children:[e.deploymentMode||"eleeveon_cloud"," \xb7 ",(e=>{if(!e)return"Not set";let a=new Date(e);return Number.isNaN(a.getTime())?"Not set":new Intl.DateTimeFormat("en-GH",{day:"2-digit",month:"short",year:"numeric"}).format(a)})(e.updatedAt)]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{type:"button",className:"dp-secondary-button",onClick:()=>eS(e),children:"Edit"}),(0,r.jsx)("button",{type:"button",className:"dp-secondary-button",disabled:H===e.id,onClick:()=>void ez(e),children:H===e.id?"Saving...":!1===e.active?"Activate":"Deactivate"})]})]})]},e.id)})}):(0,r.jsx)(z,{title:"No plans found",description:"Adjust the search or filters, or create a new subscription plan."}):null,"table"===er?(0,r.jsxs)("section",{className:"dp-table-card",children:[(0,r.jsxs)("div",{className:"dp-table-title",children:["Plans (",eb.length,")"]}),(0,r.jsx)("div",{className:"dp-table-scroll",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Plan"}),(0,r.jsx)("th",{children:"Monthly"}),(0,r.jsx)("th",{children:"Termly"}),(0,r.jsx)("th",{children:"Yearly"}),(0,r.jsx)("th",{children:"Students"}),(0,r.jsx)("th",{children:"Capabilities"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{})]})}),(0,r.jsx)("tbody",{children:eb.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("strong",{children:e.name}),(0,r.jsx)("small",{children:e.code})]}),(0,r.jsx)("td",{children:N(Number(e.priceMonthly||0),e.currency)}),(0,r.jsx)("td",{children:N(Number(e.priceTermly||0),e.currency)}),(0,r.jsx)("td",{children:N(Number(e.priceYearly||0),e.currency)}),(0,r.jsx)("td",{children:e.maxStudents??"Unlimited"}),(0,r.jsxs)("td",{children:[f.filter(a=>C(e,a.key)).length,"/",f.length]}),(0,r.jsx)("td",{children:(0,r.jsxs)("span",{className:"dp-inline-status",children:[(0,r.jsx)("i",{className:!1===e.active?"inactive":"active"}),!1===e.active?"Inactive":"Active"]})}),(0,r.jsx)("td",{children:(0,r.jsx)("button",{type:"button",className:"dp-table-action",onClick:()=>eS(e),children:"Edit"})})]},e.id))})]})})]}):null,"analytics"===er?(0,r.jsxs)("section",{className:"dp-analytics-grid",children:[(0,r.jsxs)("article",{className:"dp-chart-card",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Plan pricing"}),(0,r.jsx)("p",{children:"Monthly and yearly price comparison."})]})}),(0,r.jsx)("div",{className:"dp-chart",children:(0,r.jsx)(n.u,{width:"100%",height:"100%",children:(0,r.jsxs)(d.E,{data:eN,children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1,opacity:.2}),(0,r.jsx)(o.W,{dataKey:"label",tick:{fontSize:11},interval:0,angle:-18,height:58}),(0,r.jsx)(c.h,{tick:{fontSize:11}}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"monthly",fill:"var(--dp-primary)",radius:[5,5,0,0]}),(0,r.jsx)(u.yP,{dataKey:"termly",fill:"#0f766e",radius:[5,5,0,0]}),(0,r.jsx)(u.yP,{dataKey:"yearly",fill:"#64748b",radius:[5,5,0,0]})]})})})]}),(0,r.jsxs)("article",{className:"dp-chart-card",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Capability coverage"}),(0,r.jsx)("p",{children:"How many plans include each platform capability."})]})}),(0,r.jsx)("div",{className:"dp-coverage-list",children:ek.map(e=>(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:e.label}),(0,r.jsx)("div",{children:(0,r.jsx)("i",{style:{width:`${L.length?Math.max(4,e.value/L.length*100):0}%`}})}),(0,r.jsx)("b",{children:e.value})]},e.label))})]})]}):null,ed?(0,r.jsx)("div",{className:"dp-overlay",role:"presentation",onMouseDown:e=>{e.target===e.currentTarget&&el(!1)},children:(0,r.jsxs)("section",{className:"dp-sheet dp-small-sheet",children:[(0,r.jsxs)("header",{className:"dp-sheet-header",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Filter plans"}),(0,r.jsx)("p",{children:"Narrow the list without changing saved data."})]}),(0,r.jsx)("button",{type:"button",onClick:()=>el(!1),children:"\xd7"})]}),(0,r.jsxs)("div",{className:"dp-sheet-body",children:[(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Status"}),(0,r.jsxs)("select",{value:Y,onChange:e=>X(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All statuses"}),(0,r.jsx)("option",{value:"active",children:"Active"}),(0,r.jsx)("option",{value:"inactive",children:"Inactive"})]})]}),(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Capability"}),(0,r.jsxs)("select",{value:Z,onChange:e=>ee(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All capabilities"}),f.map(e=>(0,r.jsx)("option",{value:e.key,children:e.label},e.key))]})]}),(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Currency"}),(0,r.jsxs)("select",{value:ea,onChange:e=>et(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All currencies"}),eh.map(e=>(0,r.jsx)("option",{value:e,children:e},e))]})]})]}),(0,r.jsxs)("footer",{className:"dp-sheet-footer",children:[(0,r.jsx)("button",{type:"button",className:"dp-secondary-button",onClick:()=>{X("all"),ee("all"),et("all")},children:"Reset"}),(0,r.jsx)("button",{type:"button",className:"dp-primary-button",onClick:()=>el(!1),children:"Apply"})]})]})}):null,eo?(0,r.jsx)("div",{className:"dp-overlay",role:"presentation",onMouseDown:e=>{e.target===e.currentTarget&&ec(!1)},children:(0,r.jsxs)("section",{className:"dp-sheet dp-small-sheet",children:[(0,r.jsxs)("header",{className:"dp-sheet-header",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Plan options"}),(0,r.jsx)("p",{children:"Change view or refresh server data."})]}),(0,r.jsx)("button",{type:"button",onClick:()=>ec(!1),children:"\xd7"})]}),(0,r.jsxs)("div",{className:"dp-option-list",children:[["cards","table","analytics"].map(e=>(0,r.jsxs)("button",{type:"button",className:er===e?"active":"",onClick:()=>{ei(e),ec(!1)},children:[(0,r.jsx)("span",{children:"cards"===e?"▦":"table"===e?"☷":"⌁"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"cards"===e?"Cards":"table"===e?"Table":"Analytics"}),(0,r.jsx)("small",{children:"cards"===e?"Compact plan cards":"table"===e?"Dense comparison table":"Pricing and coverage insights"})]}),(0,r.jsx)("i",{children:er===e?"✓":""})]},e)),(0,r.jsxs)("button",{type:"button",onClick:()=>{en(e=>"monthly"===e?"termly":"termly"===e?"yearly":"yearly"===e?"one_time":"monthly"),ec(!1)},children:[(0,r.jsx)("span",{children:"₵"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("strong",{children:["Show"," ","one_time"===es?"monthly":"yearly"===es?"one-time":"monthly"===es?"termly":"termly"===es?"yearly":"monthly"," prices"]}),(0,r.jsx)("small",{children:"Changes only the card price preview."})]}),(0,r.jsx)("i",{})]}),(0,r.jsxs)("button",{type:"button",disabled:O,onClick:()=>{ex(!0),ec(!1)},children:[(0,r.jsx)("span",{children:"↻"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:O?"Refreshing...":"Refresh data"}),(0,r.jsx)("small",{children:"Reload plans and subscriptions from the server."})]}),(0,r.jsx)("i",{})]})]})]})}):null,ep?(0,r.jsx)("div",{className:"dp-overlay",role:"presentation",onMouseDown:e=>{e.target===e.currentTarget&&eC()},children:(0,r.jsxs)("form",{className:"dp-sheet dp-editor-sheet",onSubmit:eA,children:[(0,r.jsxs)("header",{className:"dp-sheet-header",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:em.id?"Edit plan":"Create plan"}),(0,r.jsx)("p",{children:"Pricing, limits and the complete Eleeveon capability package."})]}),(0,r.jsx)("button",{type:"button",onClick:eC,disabled:K,children:"\xd7"})]}),(0,r.jsxs)("div",{className:"dp-sheet-body dp-editor-body",children:[(0,r.jsxs)("section",{className:"dp-form-section",children:[(0,r.jsxs)("div",{className:"dp-section-title",children:[(0,r.jsx)("h3",{children:"Plan identity"}),(0,r.jsx)("p",{children:"Public name, internal code and description."})]}),(0,r.jsxs)("div",{className:"dp-field-grid",children:[(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Plan name *"}),(0,r.jsx)("input",{value:em.name,onChange:e=>eg(a=>({...a,name:e.target.value})),placeholder:"Complete",required:!0})]}),(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Plan code *"}),(0,r.jsx)("input",{value:em.code,onChange:e=>eg(a=>({...a,code:e.target.value})),placeholder:"complete",required:!0})]}),(0,r.jsxs)("label",{className:"dp-field dp-field-wide",children:[(0,r.jsx)("span",{children:"Description"}),(0,r.jsx)("textarea",{value:em.description,onChange:e=>eg(a=>({...a,description:e.target.value})),placeholder:"Describe who this plan is for.",rows:3})]})]})]}),(0,r.jsxs)("section",{className:"dp-form-section",children:[(0,r.jsxs)("div",{className:"dp-section-title",children:[(0,r.jsx)("h3",{children:"Pricing"}),(0,r.jsx)("p",{children:"Monthly, four-month termly and yearly prices shown to customers."})]}),(0,r.jsxs)("div",{className:"dp-field-grid dp-three-columns",children:[(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Currency"}),(0,r.jsx)("input",{value:em.currency,onChange:e=>eg(a=>({...a,currency:e.target.value.toUpperCase()})),placeholder:"GHS"})]}),(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Monthly price"}),(0,r.jsx)("input",{type:"number",min:"0",value:em.priceMonthly,onChange:e=>eg(a=>({...a,priceMonthly:e.target.value}))})]}),(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Termly price (4 months)"}),(0,r.jsx)("input",{type:"number",min:"0",value:em.priceTermly,onChange:e=>eg(a=>({...a,priceTermly:e.target.value}))})]}),(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Yearly price"}),(0,r.jsx)("input",{type:"number",min:"0",value:em.priceYearly,onChange:e=>eg(a=>({...a,priceYearly:e.target.value}))})]})]})]}),(0,r.jsxs)("section",{className:"dp-form-section",children:[(0,r.jsxs)("div",{className:"dp-section-title",children:[(0,r.jsx)("h3",{children:"Deployment & ownership"}),(0,r.jsx)("p",{children:"Decide where the application runs and how the school owns access. This is separate from the acquisition route."})]}),(0,r.jsxs)("div",{className:"dp-field-grid dp-three-columns",children:[(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Deployment"}),(0,r.jsx)("select",{value:em.deploymentMode,onChange:e=>eg(a=>({...a,deploymentMode:e.target.value})),children:b.map(e=>(0,r.jsx)("option",{value:e.value,children:e.title},e.value))})]}),(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Licence model"}),(0,r.jsxs)("select",{value:em.licenseModel,onChange:e=>eg(a=>({...a,licenseModel:e.target.value})),children:[(0,r.jsx)("option",{value:"subscription",children:"Subscription"}),(0,r.jsx)("option",{value:"trial",children:"Trial"}),(0,r.jsx)("option",{value:"complimentary",children:"Complimentary / pilot"}),(0,r.jsx)("option",{value:"perpetual",children:"Perpetual purchase"})]})]}),(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Sync policy"}),(0,r.jsxs)("select",{value:em.syncPolicy,onChange:e=>eg(a=>({...a,syncPolicy:e.target.value})),children:[(0,r.jsx)("option",{value:"full",children:"Full cloud sync"}),(0,r.jsx)("option",{value:"platform_only",children:"Platform only"}),(0,r.jsx)("option",{value:"disabled",children:"No cloud sync"})]})]}),(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Update policy"}),(0,r.jsxs)("select",{value:em.updatePolicy,onChange:e=>eg(a=>({...a,updatePolicy:e.target.value})),children:[(0,r.jsx)("option",{value:"continuous",children:"Continuous"}),(0,r.jsx)("option",{value:"security_only",children:"Security only"}),(0,r.jsx)("option",{value:"version_locked",children:"Version-locked"})]})]}),(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"One-time price (GHS)"}),(0,r.jsx)("input",{type:"number",min:"0",value:em.priceOneTime,onChange:e=>eg(a=>({...a,priceOneTime:e.target.value})),placeholder:"Not applicable"})]}),[["deviceLimit","Device limit"],["activationLimit","Activations"],["offlineGraceDays","Offline grace days"],["validationIntervalDays","Validation interval days"]].map(([e,a])=>(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:a}),(0,r.jsx)("input",{type:"number",min:"0",value:em[e],onChange:a=>eg(t=>({...t,[e]:a.target.value})),placeholder:"Not configured"})]},e)),(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Periodic licence validation"}),(0,r.jsxs)("select",{value:em.requiresPeriodicValidation?"yes":"no",onChange:e=>eg(a=>({...a,requiresPeriodicValidation:"yes"===e.target.value})),children:[(0,r.jsx)("option",{value:"no",children:"Not required"}),(0,r.jsx)("option",{value:"yes",children:"Required"})]})]})]})]}),(0,r.jsxs)("section",{className:"dp-form-section",children:[(0,r.jsxs)("div",{className:"dp-section-title",children:[(0,r.jsx)("h3",{children:"How schools can acquire this package"}),(0,r.jsx)("p",{children:"These are catalogue options. Activating a pilot, taking payments, or issuing a licence requires separately authorized backend workflows."})]}),(0,r.jsx)("div",{className:"dp-feature-grid",children:h.map(e=>(0,r.jsxs)("button",{type:"button",className:`dp-feature-option ${em.acquisitionModes.includes(e.value)?"enabled":""}`,onClick:()=>eg(a=>({...a,acquisitionModes:a.acquisitionModes.includes(e.value)?a.acquisitionModes.filter(a=>a!==e.value):[...a.acquisitionModes,e.value]})),children:[(0,r.jsxs)("span",{className:"dp-feature-copy",children:[(0,r.jsx)("strong",{children:e.title}),(0,r.jsx)("small",{children:e.description})]}),(0,r.jsx)("span",{className:`dp-toggle ${em.acquisitionModes.includes(e.value)?"enabled":""}`,children:(0,r.jsx)("i",{})})]},e.value))}),em.acquisitionModes.includes("trial")&&(0,r.jsx)("div",{className:"dp-field-grid",children:(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Trial duration (days)"}),(0,r.jsx)("input",{type:"number",min:"1",max:"365",value:em.trialDays,onChange:e=>eg(a=>({...a,trialDays:e.target.value}))})]})}),(0,r.jsx)("p",{style:{fontSize:12,opacity:.75,marginTop:10},children:"Trial duration is saved in package metadata. Registration will use it only after the trial bootstrap integration is deployed. Complimentary access must be assigned explicitly to school account IDs."})]}),(0,r.jsxs)("section",{className:"dp-form-section",children:[(0,r.jsxs)("div",{className:"dp-section-title",children:[(0,r.jsx)("h3",{children:"Subscription price calculation"}),(0,r.jsx)("p",{children:"Keep the billing period separate from the amount calculation. Progressive tiers charge only additional students at the next rate."})]}),(0,r.jsxs)("div",{className:"dp-field-grid dp-three-columns",children:[(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Pricing model"}),(0,r.jsxs)("select",{value:em.pricingMode,onChange:e=>eg(a=>({...a,pricingMode:e.target.value})),children:[(0,r.jsx)("option",{value:"fixed",children:"Fixed package price"}),(0,r.jsx)("option",{value:"per_student",children:"Flat rate per student"}),(0,r.jsx)("option",{value:"tiered",children:"Progressive student tiers"})]})]}),"fixed"!==em.pricingMode&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Rate applies per"}),(0,r.jsxs)("select",{value:em.pricingPeriod,onChange:e=>eg(a=>({...a,pricingPeriod:e.target.value})),children:[(0,r.jsx)("option",{value:"termly",children:"Term"}),(0,r.jsx)("option",{value:"monthly",children:"Month"}),(0,r.jsx)("option",{value:"yearly",children:"Year"})]})]}),(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Minimum charge (GHS)"}),(0,r.jsx)("input",{type:"number",min:"0",step:"0.01",value:em.pricingMinimum,onChange:e=>eg(a=>({...a,pricingMinimum:e.target.value}))})]})]}),"per_student"===em.pricingMode&&(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Rate per student (GHS)"}),(0,r.jsx)("input",{type:"number",min:"0",step:"0.01",value:em.perStudentRate,onChange:e=>eg(a=>({...a,perStudentRate:e.target.value}))})]})]}),"tiered"===em.pricingMode&&(0,r.jsxs)("div",{style:{display:"grid",gap:10,marginTop:12},children:[em.pricingTiers.map((e,a)=>(0,r.jsxs)("div",{className:"dp-field-grid dp-three-columns",children:[(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Through student # (blank = unlimited)"}),(0,r.jsx)("input",{type:"number",min:"1",value:e.upTo,onChange:e=>eg(t=>({...t,pricingTiers:t.pricingTiers.map((t,r)=>r===a?{...t,upTo:e.target.value}:t)}))})]}),(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:"Rate per student (GHS)"}),(0,r.jsx)("input",{type:"number",min:"0",step:"0.01",value:e.unitPrice,onChange:e=>eg(t=>({...t,pricingTiers:t.pricingTiers.map((t,r)=>r===a?{...t,unitPrice:e.target.value}:t)}))})]}),(0,r.jsx)("button",{type:"button",className:"dp-secondary-button",disabled:em.pricingTiers.length<=1,onClick:()=>eg(e=>({...e,pricingTiers:e.pricingTiers.filter((e,t)=>t!==a)})),children:"Remove tier"})]},a)),(0,r.jsx)("button",{type:"button",className:"dp-secondary-button",onClick:()=>eg(e=>({...e,pricingTiers:[...e.pricingTiers,{upTo:"",unitPrice:"0"}]})),children:"+ Add tier"})]}),(0,r.jsxs)("label",{className:"dp-field",style:{marginTop:12},children:[(0,r.jsx)("span",{children:"Public catalogue visibility"}),(0,r.jsxs)("select",{value:em.publicVisible?"public":"private",onChange:e=>eg(a=>({...a,publicVisible:"public"===e.target.value})),children:[(0,r.jsx)("option",{value:"public",children:"Publish for public visitors"}),(0,r.jsx)("option",{value:"private",children:"Private — developer only"})]})]}),(0,r.jsx)("p",{style:{opacity:.7,fontSize:12,marginTop:8},children:"Complimentary/pilot and private-hosted plans are never listed publicly. Student-priced checkout remains disabled until verified enrollment billing is connected."})]}),(0,r.jsxs)("section",{className:"dp-form-section",children:[(0,r.jsxs)("div",{className:"dp-section-title",children:[(0,r.jsx)("h3",{children:"Usage limits"}),(0,r.jsx)("p",{children:"Leave a field blank for no configured limit."})]}),(0,r.jsx)("div",{className:"dp-field-grid dp-three-columns",children:[["maxSchools","Schools"],["maxBranches","Branches"],["maxUsers","Users"],["maxStudents","Students"],["maxTeachers","Teachers"],["maxStorageMb","Storage (MB)"]].map(([e,a])=>(0,r.jsxs)("label",{className:"dp-field",children:[(0,r.jsx)("span",{children:a}),(0,r.jsx)("input",{type:"number",min:"0",value:em[e],onChange:a=>eg(t=>({...t,[e]:a.target.value})),placeholder:"Unlimited"})]},e))})]}),(0,r.jsxs)("section",{className:"dp-form-section",children:[(0,r.jsxs)("div",{className:"dp-section-title dp-feature-heading",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Platform capabilities"}),(0,r.jsx)("p",{children:"Includes websites, ID cards, attendance, safety and the wider system."})]}),(0,r.jsxs)("span",{children:[f.filter(e=>em.features[e.key]).length,"/",f.length]})]}),["Core","People","Operations","Growth"].map(e=>(0,r.jsxs)("div",{className:"dp-feature-group",children:[(0,r.jsx)("h4",{children:e}),(0,r.jsx)("div",{className:"dp-feature-grid",children:f.filter(a=>a.group===e).map(e=>{let a=em.features[e.key];return(0,r.jsxs)("button",{type:"button",className:`dp-feature-option ${a?"enabled":""}`,onClick:()=>{var t,r;return t=e.key,r=!a,void eg(e=>({...e,features:{...e.features,[t]:r}}))},children:[(0,r.jsx)("span",{className:"dp-feature-icon",children:e.icon}),(0,r.jsxs)("span",{className:"dp-feature-copy",children:[(0,r.jsx)("strong",{children:e.label}),(0,r.jsx)("small",{children:e.description})]}),(0,r.jsx)("span",{className:`dp-toggle ${a?"enabled":""}`,children:(0,r.jsx)("i",{})})]},e.key)})})]},e))]}),(0,r.jsxs)("section",{className:"dp-form-section dp-status-section",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Plan availability"}),(0,r.jsx)("p",{children:"Inactive plans remain available for history but cannot be newly selected."})]}),(0,r.jsx)("button",{type:"button",className:`dp-toggle dp-large-toggle ${em.active?"enabled":""}`,onClick:()=>eg(e=>({...e,active:!e.active})),"aria-label":em.active?"Deactivate plan":"Activate plan",children:(0,r.jsx)("i",{})})]})]}),(0,r.jsxs)("footer",{className:"dp-sheet-footer",children:[(0,r.jsx)("button",{type:"button",className:"dp-secondary-button",onClick:eC,disabled:K,children:"Cancel"}),(0,r.jsx)("button",{type:"submit",className:"dp-primary-button",disabled:K,children:K?"Saving...":em.id?"Save changes":"Create plan"})]})]})}):null]}):(0,r.jsxs)("main",{className:"dp-page",children:[(0,r.jsx)("style",{children:P}),(0,r.jsx)(z,{title:"Developer access required",description:"Sign in with a developer workspace to manage platform plans."})]})}let P=String.raw`
  .dp-page {
    --dp-bg: var(--bg, #f6f7fb);
    --dp-card: var(--card, #ffffff);
    --dp-surface: var(--surface, #ffffff);
    --dp-text: var(--text, #111827);
    --dp-muted: var(--muted, #6b7280);
    --dp-border: var(--border, #e5e7eb);
    --dp-soft: color-mix(in srgb, var(--dp-primary) 8%, var(--dp-card));
    --dp-muted-dot: color-mix(in srgb, var(--dp-muted) 28%, transparent);
    min-height: 100%;
    color: var(--dp-text);
  }

  * { box-sizing: border-box; }

  button, input, select, textarea { font: inherit; }

  button { color: inherit; }

  .dp-toolbar {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 42px 42px 42px;
    gap: 8px;
    align-items: center;
    margin-bottom: 12px;
  }

  .dp-search {
    min-width: 0;
    height: 42px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 13px;
    border: 1px solid var(--dp-border);
    border-radius: 13px;
    background: var(--dp-card);
    box-shadow: 0 1px 2px rgba(15, 23, 42, .04);
  }

  .dp-search span {
    color: var(--dp-muted);
    font-size: 19px;
    line-height: 1;
  }

  .dp-search input {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: var(--dp-text);
  }

  .dp-search input::placeholder { color: var(--dp-muted); }

  .dp-primary-action,
  .dp-icon-action {
    width: 42px;
    height: 42px;
    border-radius: 13px;
    display: grid;
    place-items: center;
    border: 1px solid var(--dp-border);
    cursor: pointer;
    position: relative;
    transition: .18s ease;
  }

  .dp-primary-action {
    background: var(--dp-primary);
    border-color: var(--dp-primary);
    color: var(--dp-primary-text);
    font-size: 24px;
    box-shadow: 0 7px 18px color-mix(in srgb, var(--dp-primary) 24%, transparent);
  }

  .dp-icon-action {
    background: var(--dp-card);
    color: var(--dp-text);
    font-size: 20px;
  }

  .dp-icon-action.active {
    color: var(--dp-primary-text);
    background: var(--dp-primary);
    border-color: var(--dp-primary);
  }

  .dp-icon-action b {
    position: absolute;
    top: -5px;
    right: -4px;
    min-width: 17px;
    height: 17px;
    padding: 0 4px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: #ef4444;
    color: #fff;
    font-size: 10px;
    border: 2px solid var(--dp-bg);
  }

  .dp-summary-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 9px;
    margin-bottom: 12px;
  }

  .dp-summary-grid article {
    min-width: 0;
    padding: 13px 14px;
    border: 1px solid var(--dp-border);
    border-radius: 14px;
    background: var(--dp-card);
  }

  .dp-summary-grid span,
  .dp-summary-grid small {
    display: block;
    color: var(--dp-muted);
    font-size: 11px;
  }

  .dp-summary-grid strong {
    display: block;
    margin: 4px 0 3px;
    font-size: clamp(16px, 2vw, 21px);
    line-height: 1.1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dp-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 10px;
  }

  .dp-plan-card {
    min-width: 0;
    padding: 15px;
    border: 1px solid var(--dp-border);
    border-radius: 17px;
    background: var(--dp-card);
    box-shadow: 0 4px 16px rgba(15, 23, 42, .035);
  }

  .dp-plan-card.inactive { opacity: .7; }

  .dp-plan-card > header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .dp-plan-mark {
    width: 38px;
    height: 38px;
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    border-radius: 12px;
    color: var(--dp-primary-text);
    background: var(--dp-primary);
    font-weight: 800;
  }

  .dp-plan-heading { min-width: 0; flex: 1; }

  .dp-plan-title-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .dp-plan-title-row h3 {
    min-width: 0;
    margin: 0;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dp-plan-heading p {
    margin: 3px 0 0;
    color: var(--dp-muted);
    font-size: 11px;
  }

  .dp-status-dot {
    width: 8px;
    height: 8px;
    flex: 0 0 auto;
    border-radius: 999px;
    background: #16a34a;
  }

  .dp-status-dot.inactive { background: #94a3b8; }

  .dp-card-more {
    width: 34px;
    height: 34px;
    border: 0;
    border-radius: 10px;
    background: transparent;
    color: var(--dp-muted);
    cursor: pointer;
    font-size: 20px;
  }

  .dp-card-more:hover { background: var(--dp-soft); }

  .dp-price-row {
    display: flex;
    align-items: baseline;
    gap: 5px;
    margin-top: 15px;
  }

  .dp-price-row strong { font-size: 24px; letter-spacing: -.03em; }

  .dp-price-row span {
    color: var(--dp-muted);
    font-size: 12px;
  }

  .dp-description {
    min-height: 38px;
    margin: 8px 0 13px;
    color: var(--dp-muted);
    font-size: 12px;
    line-height: 1.55;
  }

  .dp-limit-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 7px;
  }

  .dp-limit-row span {
    min-width: 0;
    padding: 8px;
    border-radius: 10px;
    background: var(--dp-soft);
    color: var(--dp-muted);
    font-size: 10px;
    text-align: center;
  }

  .dp-limit-row b {
    display: block;
    color: var(--dp-text);
    font-size: 12px;
    margin-bottom: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dp-feature-summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 13px;
  }

  .dp-feature-summary > span {
    display: flex;
    align-items: center;
  }

  .dp-feature-summary i {
    width: 25px;
    height: 25px;
    margin-left: -4px;
    display: grid;
    place-items: center;
    border: 2px solid var(--dp-card);
    border-radius: 999px;
    background: var(--dp-soft);
    color: var(--dp-primary);
    font-size: 10px;
    font-style: normal;
    font-weight: 800;
  }

  .dp-feature-summary i:first-child { margin-left: 0; }

  .dp-feature-summary small { color: var(--dp-muted); font-size: 10px; }

  .dp-plan-card > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 14px;
    padding-top: 12px;
    border-top: 1px solid var(--dp-border);
  }

  .dp-plan-card > footer > span {
    color: var(--dp-muted);
    font-size: 10px;
  }

  .dp-plan-card > footer > div { display: flex; gap: 6px; }

  .dp-secondary-button,
  .dp-primary-button {
    min-height: 36px;
    padding: 0 13px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;
    transition: .18s ease;
  }

  .dp-secondary-button {
    border: 1px solid var(--dp-border);
    background: var(--dp-card);
    color: var(--dp-text);
  }

  .dp-primary-button {
    border: 1px solid var(--dp-primary);
    background: var(--dp-primary);
    color: var(--dp-primary-text);
    box-shadow: 0 6px 16px color-mix(in srgb, var(--dp-primary) 20%, transparent);
  }

  button:disabled {
    cursor: not-allowed;
    opacity: .58;
  }

  .dp-table-card,
  .dp-chart-card {
    border: 1px solid var(--dp-border);
    border-radius: 17px;
    background: var(--dp-card);
    overflow: hidden;
  }

  .dp-table-title {
    padding: 13px 15px;
    border-bottom: 1px solid var(--dp-border);
    font-size: 13px;
    font-weight: 800;
  }

  .dp-table-scroll { overflow: auto; }

  .dp-table-scroll table {
    width: 100%;
    min-width: 830px;
    border-collapse: collapse;
  }

  .dp-table-scroll th,
  .dp-table-scroll td {
    padding: 11px 13px;
    border-bottom: 1px solid var(--dp-border);
    text-align: left;
    font-size: 12px;
  }

  .dp-table-scroll th {
    color: var(--dp-muted);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: .07em;
  }

  .dp-table-scroll td strong,
  .dp-table-scroll td small {
    display: block;
  }

  .dp-table-scroll td small {
    margin-top: 3px;
    color: var(--dp-muted);
    font-size: 10px;
  }

  .dp-inline-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .dp-inline-status i {
    width: 7px;
    height: 7px;
    border-radius: 999px;
  }

  .dp-inline-status i.active { background: #16a34a; }
  .dp-inline-status i.inactive { background: #94a3b8; }

  .dp-table-action {
    border: 0;
    background: transparent;
    color: var(--dp-primary);
    cursor: pointer;
    font-weight: 800;
  }

  .dp-analytics-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(300px, .9fr);
    gap: 10px;
  }

  .dp-chart-card { padding: 15px; }

  .dp-chart-card header h3 {
    margin: 0;
    font-size: 14px;
  }

  .dp-chart-card header p {
    margin: 4px 0 0;
    color: var(--dp-muted);
    font-size: 11px;
  }

  .dp-chart { height: 340px; margin-top: 12px; }

  .dp-coverage-list {
    margin-top: 15px;
    display: grid;
    gap: 10px;
  }

  .dp-coverage-list > div {
    display: grid;
    grid-template-columns: minmax(120px, 1fr) minmax(90px, 1.4fr) 24px;
    align-items: center;
    gap: 8px;
    font-size: 11px;
  }

  .dp-coverage-list > div > div {
    height: 7px;
    overflow: hidden;
    border-radius: 999px;
    background: var(--dp-soft);
  }

  .dp-coverage-list i {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: var(--dp-primary);
  }

  .dp-coverage-list b { text-align: right; }

  .dp-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    justify-content: flex-end;
    background: rgba(15, 23, 42, .36);
    backdrop-filter: blur(3px);
  }

  .dp-sheet {
    width: min(760px, 100%);
    height: 100%;
    display: flex;
    flex-direction: column;
    border-left: 1px solid var(--dp-border);
    background: var(--dp-bg);
    box-shadow: -18px 0 45px rgba(15, 23, 42, .18);
  }

  .dp-small-sheet { width: min(390px, 100%); }

  .dp-sheet-header,
  .dp-sheet-footer {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 14px 16px;
    background: var(--dp-card);
  }

  .dp-sheet-header { border-bottom: 1px solid var(--dp-border); }
  .dp-sheet-footer { border-top: 1px solid var(--dp-border); justify-content: flex-end; }

  .dp-sheet-header h2 {
    margin: 0;
    font-size: 16px;
  }

  .dp-sheet-header p {
    margin: 3px 0 0;
    color: var(--dp-muted);
    font-size: 11px;
  }

  .dp-sheet-header > button {
    width: 36px;
    height: 36px;
    border: 1px solid var(--dp-border);
    border-radius: 11px;
    background: var(--dp-card);
    cursor: pointer;
    font-size: 20px;
  }

  .dp-sheet-body {
    flex: 1;
    min-height: 0;
    overflow: auto;
    padding: 15px;
  }

  .dp-editor-body { display: grid; gap: 10px; }

  .dp-form-section {
    padding: 15px;
    border: 1px solid var(--dp-border);
    border-radius: 16px;
    background: var(--dp-card);
  }

  .dp-section-title h3,
  .dp-status-section h3 {
    margin: 0;
    font-size: 14px;
  }

  .dp-section-title p,
  .dp-status-section p {
    margin: 4px 0 0;
    color: var(--dp-muted);
    font-size: 11px;
    line-height: 1.5;
  }

  .dp-field-grid {
    margin-top: 13px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .dp-three-columns { grid-template-columns: repeat(3, minmax(0, 1fr)); }

  .dp-field-wide { grid-column: 1 / -1; }

  .dp-field {
    display: grid;
    gap: 6px;
  }

  .dp-field > span {
    color: var(--dp-muted);
    font-size: 10px;
    font-weight: 800;
  }

  .dp-field input,
  .dp-field select,
  .dp-field textarea {
    width: 100%;
    min-height: 40px;
    border: 1px solid var(--dp-border);
    border-radius: 11px;
    outline: 0;
    padding: 9px 11px;
    background: var(--dp-surface);
    color: var(--dp-text);
    font-size: 12px;
  }

  .dp-field textarea { resize: vertical; }

  .dp-field input:focus,
  .dp-field select:focus,
  .dp-field textarea:focus {
    border-color: var(--dp-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--dp-primary) 12%, transparent);
  }

  .dp-feature-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }

  .dp-feature-heading > span {
    flex: 0 0 auto;
    padding: 5px 9px;
    border-radius: 999px;
    background: var(--dp-soft);
    color: var(--dp-primary);
    font-size: 10px;
    font-weight: 800;
  }

  .dp-feature-group { margin-top: 15px; }

  .dp-feature-group h4 {
    margin: 0 0 8px;
    color: var(--dp-muted);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: .08em;
  }

  .dp-feature-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  .dp-feature-option {
    min-width: 0;
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr) auto;
    align-items: center;
    gap: 9px;
    padding: 10px;
    border: 1px solid var(--dp-border);
    border-radius: 13px;
    background: var(--dp-surface);
    text-align: left;
    cursor: pointer;
  }

  .dp-feature-option.enabled {
    border-color: color-mix(in srgb, var(--dp-primary) 38%, var(--dp-border));
    background: var(--dp-soft);
  }

  .dp-feature-icon {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: var(--dp-card);
    color: var(--dp-primary);
    font-weight: 800;
    font-size: 12px;
  }

  .dp-feature-copy { min-width: 0; }

  .dp-feature-copy strong,
  .dp-feature-copy small {
    display: block;
  }

  .dp-feature-copy strong { font-size: 11px; }

  .dp-feature-copy small {
    margin-top: 3px;
    color: var(--dp-muted);
    font-size: 9px;
    line-height: 1.35;
  }

  .dp-toggle {
    width: 36px;
    height: 21px;
    flex: 0 0 auto;
    padding: 2px;
    border: 0;
    border-radius: 999px;
    background: color-mix(in srgb, var(--dp-muted) 28%, transparent);
    transition: .18s ease;
  }

  .dp-toggle i {
    display: block;
    width: 17px;
    height: 17px;
    border-radius: 999px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(15, 23, 42, .18);
    transition: .18s ease;
  }

  .dp-toggle.enabled { background: var(--dp-primary); }

  .dp-toggle.enabled i { transform: translateX(15px); }

  .dp-large-toggle {
    width: 44px;
    height: 25px;
    cursor: pointer;
  }

  .dp-large-toggle i {
    width: 21px;
    height: 21px;
  }

  .dp-large-toggle.enabled i { transform: translateX(19px); }

  .dp-status-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
  }

  .dp-option-list {
    flex: 1;
    overflow: auto;
    padding: 12px;
  }

  .dp-option-list > button {
    width: 100%;
    display: grid;
    grid-template-columns: 36px minmax(0, 1fr) 24px;
    align-items: center;
    gap: 10px;
    padding: 11px;
    border: 0;
    border-radius: 13px;
    background: transparent;
    text-align: left;
    cursor: pointer;
  }

  .dp-option-list > button:hover,
  .dp-option-list > button.active {
    background: var(--dp-soft);
  }

  .dp-option-list > button > span {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: var(--dp-card);
    color: var(--dp-primary);
    font-weight: 800;
  }

  .dp-option-list strong,
  .dp-option-list small {
    display: block;
  }

  .dp-option-list strong { font-size: 12px; }

  .dp-option-list small {
    margin-top: 3px;
    color: var(--dp-muted);
    font-size: 10px;
  }

  .dp-option-list > button > i {
    color: var(--dp-primary);
    font-style: normal;
    font-weight: 900;
  }

  .dp-toast {
    position: fixed;
    z-index: 1200;
    top: 18px;
    right: 18px;
    max-width: min(390px, calc(100vw - 36px));
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 11px 13px;
    border-radius: 13px;
    color: #fff;
    box-shadow: 0 14px 35px rgba(15, 23, 42, .2);
    font-size: 12px;
  }

  .dp-toast.success { background: #15803d; }
  .dp-toast.error { background: #b91c1c; }
  .dp-toast.info { background: #1d4ed8; }

  .dp-toast button {
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-size: 18px;
  }

  .dp-empty,
  .dp-loading {
    min-height: 330px;
    display: grid;
    place-items: center;
    align-content: center;
    padding: 30px;
    text-align: center;
    border: 1px dashed var(--dp-border);
    border-radius: 17px;
    background: var(--dp-card);
  }

  .dp-empty-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: var(--dp-soft);
    color: var(--dp-primary);
    font-size: 20px;
  }

  .dp-empty h3,
  .dp-loading h2 {
    margin: 13px 0 0;
    font-size: 15px;
  }

  .dp-empty p,
  .dp-loading p {
    max-width: 420px;
    margin: 6px 0 0;
    color: var(--dp-muted);
    font-size: 12px;
    line-height: 1.55;
  }

  .dp-spinner {
    width: 29px;
    height: 29px;
    border: 3px solid var(--dp-border);
    border-top-color: var(--dp-primary);
    border-radius: 999px;
    animation: dp-spin .75s linear infinite;
  }

  @keyframes dp-spin { to { transform: rotate(360deg); } }

  @media (max-width: 860px) {
    .dp-summary-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .dp-analytics-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 640px) {
    .dp-toolbar {
      grid-template-columns: minmax(0, 1fr) 40px 40px 40px;
    }

    .dp-primary-action,
    .dp-icon-action {
      width: 40px;
      height: 40px;
    }

    .dp-summary-grid { gap: 7px; }

    .dp-summary-grid article { padding: 11px; }

    .dp-card-grid { grid-template-columns: 1fr; }

    .dp-overlay {
      align-items: flex-end;
    }

    .dp-sheet,
    .dp-small-sheet {
      width: 100%;
      height: min(92dvh, 820px);
      border-left: 0;
      border-top: 1px solid var(--dp-border);
      border-radius: 20px 20px 0 0;
    }

    .dp-field-grid,
    .dp-three-columns,
    .dp-feature-grid {
      grid-template-columns: 1fr;
    }

    .dp-feature-option {
      grid-template-columns: 34px minmax(0, 1fr) auto;
    }

    .dp-sheet-footer {
      padding-bottom: max(14px, env(safe-area-inset-bottom));
    }
  }

  @media (max-width: 430px) {
    .dp-summary-grid { grid-template-columns: 1fr 1fr; }

    .dp-summary-grid article:nth-child(3),
    .dp-summary-grid article:nth-child(4) {
      display: none;
    }

    .dp-plan-card > footer {
      align-items: flex-end;
    }

    .dp-plan-card > footer > div {
      flex-direction: column;
    }
  }
`;var R=t(80865),M=t(53201),q=t(67389);let L=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2"],I=(e,a="GHS")=>new Intl.NumberFormat("en-GH",{style:"currency",currency:a,maximumFractionDigits:0}).format(Number(e||0)),E=e=>{if(!e)return"Not set";let a=new Date(e);return Number.isNaN(a.getTime())?"Not set":new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(a)},$=e=>{if(!e)return 0;let a=new Date(e).getTime();return Number.isFinite(a)?a:0},F=e=>{let a=String(e||"").toLowerCase();return["active","trial"].includes(a)?"green":["past_due","expired"].includes(a)?"orange":["cancelled","suspended"].includes(a)?"red":"gray"},U=(e,a)=>{let t=new Map;return e.forEach(e=>{let r=String(a(e)||"Unknown").trim()||"Unknown";t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)};function O({navigate:e}){let{accountId:a,authenticated:t,loading:s}=(0,g.F)(),{settings:h}=(0,x.t)(),b=h?.primaryColor||"var(--primary-color, #2563eb)",[f,v]=(0,i.useState)([]),[y,j]=(0,i.useState)([]),[w,k]=(0,i.useState)(!0),[N,S]=(0,i.useState)(!1),[C,A]=(0,i.useState)(""),[z,D]=(0,i.useState)("cards"),[T,P]=(0,i.useState)(""),[Q,Y]=(0,i.useState)("all"),[X,Z]=(0,i.useState)("all"),[ee,ea]=(0,i.useState)("all"),[et,er]=(0,i.useState)(!1),ei=async(e=!1)=>{try{e?S(!0):k(!0),A("");let[a,t]=await Promise.all([(0,m.uE)("/billing/subscriptions").catch(()=>[]),(0,m.uE)("/billing/plans?includeInactive=true").catch(()=>[])]);v(Array.isArray(a)?a:[]),j(Array.isArray(t)?t:[])}catch(e){A(e?.message||"Could not load subscriptions.")}finally{k(!1),S(!1)}};(0,i.useEffect)(()=>{if(!s){if(!t||!a)return void k(!1);ei()}},[s,t,a]);let es=(0,i.useMemo)(()=>new Map(y.map(e=>[e.id,e.name||e.code])),[y]),en=(0,i.useMemo)(()=>{let e=T.trim().toLowerCase(),a=Date.now(),t=a+2592e6;return f.filter(r=>{let i=r.account?.name||r.accountId||"",s=r.plan?.name||(r.planId?es.get(r.planId):"")||"",n=`${i} ${s} ${r.status} ${r.billingCycle}`.toLowerCase(),d="all"===Q||String(r.status||"").toLowerCase()===Q,l="all"===X||String(r.billingCycle||"").toLowerCase()===X,o="all"===ee||r.planId===ee||r.plan?.id===ee,c=!e||n.includes(e),p=$(r.currentPeriodEnd||r.trialEndsAt||r.nextBillingDate),u=!et||!!p&&p>=a&&p<=t;return d&&l&&o&&c&&u}).sort((e,a)=>$(a.updatedAt||a.createdAt||a.currentPeriodEnd)-$(e.updatedAt||e.createdAt||e.currentPeriodEnd))},[f,T,Q,X,ee,et,es]),ed=f.filter(e=>["active","trial"].includes(String(e.status||"").toLowerCase())).length,el=f.filter(e=>["past_due","expired","suspended"].includes(String(e.status||"").toLowerCase())).length,eo=f.filter(e=>"cancelled"===String(e.status||"").toLowerCase()).length,ec=(0,i.useMemo)(()=>U(f,e=>e.status),[f]),ep=(0,i.useMemo)(()=>U(f,e=>e.billingCycle||"monthly"),[f]),eu=(0,i.useMemo)(()=>U(f,e=>e.plan?.name||(e.planId?es.get(e.planId):void 0)||"No plan"),[f,es]),em=(0,i.useMemo)(()=>{let e=((e=6)=>{let a=new Date;return Array.from({length:e},(t,r)=>{let i=new Date(a.getFullYear(),a.getMonth()-(e-1-r),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(i)})})(6),a=new Map(e.map(e=>[e,0]));return f.forEach(e=>{let t,r=(t=$(e.createdAt||e.updatedAt||e.currentPeriodStart))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(t)):"Unknown";a.has(r)&&a.set(r,(a.get(r)||0)+1)}),e.map(e=>({label:e,subscriptions:a.get(e)||0}))},[f]),eg=(0,i.useMemo)(()=>f.filter(e=>["active","trial"].includes(String(e.status||"").toLowerCase())).reduce((e,a)=>{let t=a.plan||y.find(e=>e.id===a.planId);return t?"yearly"===String(a.billingCycle||"monthly").toLowerCase()?e+Number(t.priceYearly||0)/12:e+Number(t.priceMonthly||0):e},0),[f,y]);return w||s?(0,r.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":b},children:[(0,r.jsx)("style",{children:J}),(0,r.jsx)(K,{title:"Loading subscriptions...",text:"Preparing subscription status, renewals and analytics."})]}):t&&a?(0,r.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":b},children:[(0,r.jsx)("style",{children:J}),(0,r.jsx)(_,{eyebrow:"SaaS control",title:"Subscriptions",description:"Track trials, active subscriptions, renewals, billing cycles and subscription risk.",viewMode:z,onViewMode:D,onRefresh:()=>ei(!0),refreshing:N,actions:(0,r.jsx)("button",{className:"devmod-primary-btn",onClick:()=>e?.("plans"),type:"button",children:"Manage Plans"})}),C&&(0,r.jsx)("div",{className:"devmod-error",children:C}),(0,r.jsxs)("section",{className:"devmod-stat-grid",children:[(0,r.jsx)(B,{label:"Total",value:f.length,detail:`${en.length} after filters`,icon:"\uD83D\uDD01"}),(0,r.jsx)(B,{label:"Active/Trial",value:ed,detail:"Currently enabled",icon:"✅"}),(0,r.jsx)(B,{label:"Risky",value:el,detail:"Past due / expired / suspended",icon:"⚠️"}),(0,r.jsx)(B,{label:"MRR Estimate",value:I(eg),detail:`${eo} cancelled`,icon:"\uD83D\uDCC8"})]}),(0,r.jsxs)("section",{className:"devmod-filters",children:[(0,r.jsx)("input",{value:T,onChange:e=>P(e.target.value),placeholder:"Search account, plan, status..."}),(0,r.jsxs)("select",{value:Q,onChange:e=>Y(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All statuses"}),(0,r.jsx)("option",{value:"trial",children:"Trial"}),(0,r.jsx)("option",{value:"active",children:"Active"}),(0,r.jsx)("option",{value:"past_due",children:"Past due"}),(0,r.jsx)("option",{value:"expired",children:"Expired"}),(0,r.jsx)("option",{value:"cancelled",children:"Cancelled"}),(0,r.jsx)("option",{value:"suspended",children:"Suspended"})]}),(0,r.jsxs)("select",{value:X,onChange:e=>Z(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All cycles"}),(0,r.jsx)("option",{value:"monthly",children:"Monthly"}),(0,r.jsx)("option",{value:"yearly",children:"Yearly"}),(0,r.jsx)("option",{value:"manual",children:"Manual"})]}),(0,r.jsxs)("select",{value:ee,onChange:e=>ea(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All plans"}),y.map(e=>(0,r.jsx)("option",{value:e.id,children:e.name},e.id))]}),(0,r.jsxs)("label",{className:"devmod-check",children:[(0,r.jsx)("input",{type:"checkbox",checked:et,onChange:e=>er(e.target.checked)})," Ending in 30 days"]}),(0,r.jsx)("button",{type:"button",onClick:()=>{P(""),Y("all"),Z("all"),ea("all"),er(!1)},children:"Reset"})]}),"analytics"===z?(0,r.jsxs)("section",{className:"devmod-chart-grid",children:[(0,r.jsx)(W,{title:"Subscription starts",description:"Subscriptions created or updated in the last six months.",children:(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(d.E,{data:em,children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,allowDecimals:!1,fontSize:11}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"subscriptions",fill:"var(--dev-primary)",radius:[12,12,0,0]})]})})}),(0,r.jsxs)(W,{title:"Status breakdown",description:"Subscription health by current status.",children:[(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:ec,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:ec.map((e,a)=>(0,r.jsx)(q.f,{fill:L[a%L.length]},a))})]})}),(0,r.jsx)(V,{rows:ec})]}),(0,r.jsx)(W,{title:"Plan adoption",description:"Which packages clients are subscribed to.",children:(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(d.E,{data:eu,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",allowDecimals:!1,tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11,width:95}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--dev-primary)",radius:[0,12,12,0]})]})})}),(0,r.jsxs)(W,{title:"Billing cycles",description:"Monthly, yearly and manual subscription mix.",children:[(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:ep,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:ep.map((e,a)=>(0,r.jsx)(q.f,{fill:L[a%L.length]},a))})]})}),(0,r.jsx)(V,{rows:ep})]})]}):"table"===z?(0,r.jsxs)("section",{className:"devmod-table-card",children:[(0,r.jsx)("div",{className:"devmod-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Account"}),(0,r.jsx)("th",{children:"Plan"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Cycle"}),(0,r.jsx)("th",{children:"Period End"}),(0,r.jsx)("th",{children:"Next Billing"})]})}),(0,r.jsx)("tbody",{children:en.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:e.account?.name||e.accountId})}),(0,r.jsx)("td",{children:e.plan?.name||(e.planId?es.get(e.planId):"No plan")||"No plan"}),(0,r.jsx)("td",{children:(0,r.jsx)(H,{tone:F(e.status),children:e.status})}),(0,r.jsx)("td",{children:e.billingCycle||"monthly"}),(0,r.jsx)("td",{children:E(e.currentPeriodEnd||e.trialEndsAt)}),(0,r.jsx)("td",{children:E(e.nextBillingDate)})]},e.id))})]})}),!en.length&&(0,r.jsx)(G,{text:"No subscriptions match your filters."})]}):(0,r.jsxs)("section",{className:"devmod-card-grid",children:[en.map(a=>{let t=a.plan||y.find(e=>e.id===a.planId);return(0,r.jsxs)("article",{className:"devmod-record-card",children:[(0,r.jsxs)("div",{className:"devmod-record-top",children:[(0,r.jsx)("span",{className:"devmod-avatar",children:"\uD83D\uDD01"}),(0,r.jsx)(H,{tone:F(a.status),children:a.status})]}),(0,r.jsx)("h3",{children:a.account?.name||"Client account"}),(0,r.jsxs)("p",{children:[t?.name||"No plan linked"," \xb7 ",a.billingCycle||"monthly"]}),(0,r.jsxs)("div",{className:"devmod-meta-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Period end"}),E(a.currentPeriodEnd||a.trialEndsAt)]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Next billing"}),E(a.nextBillingDate)]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Estimate"}),I("yearly"===String(a.billingCycle).toLowerCase()?Number(t?.priceYearly||0):Number(t?.priceMonthly||0),t?.currency||"GHS")]})]}),a.cancelReason&&(0,r.jsx)("p",{className:"devmod-note",children:a.cancelReason}),(0,r.jsx)("button",{type:"button",onClick:()=>e?.("invoices"),children:"View billing records"})]},a.id)}),!en.length&&(0,r.jsx)(G,{text:"No subscriptions match your filters."})]})]}):(0,r.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":b},children:[(0,r.jsx)("style",{children:J}),(0,r.jsx)(K,{title:"Developer access required",text:"Sign in with a developer account to manage subscriptions."})]})}function _({eyebrow:e,title:a,description:t,viewMode:i,onViewMode:s,onRefresh:n,refreshing:d,actions:l}){return(0,r.jsxs)("section",{className:"devmod-header",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("h1",{children:a}),(0,r.jsx)("p",{children:t})]}),(0,r.jsxs)("div",{className:"devmod-header-actions",children:[(0,r.jsxs)("div",{className:"devmod-switch",children:[(0,r.jsx)("button",{className:"cards"===i?"active":"",onClick:()=>s("cards"),type:"button",children:"Cards"}),(0,r.jsx)("button",{className:"table"===i?"active":"",onClick:()=>s("table"),type:"button",children:"Table"}),(0,r.jsx)("button",{className:"analytics"===i?"active":"",onClick:()=>s("analytics"),type:"button",children:"Charts"})]}),l,(0,r.jsx)("button",{className:"devmod-soft-btn",type:"button",onClick:n,disabled:d,children:d?"Refreshing...":"Refresh"})]})]})}function K({title:e,text:a}){return(0,r.jsxs)("section",{className:"devmod-state",children:[(0,r.jsx)("div",{className:"devmod-spinner"}),(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a})]})}function B({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"devmod-stat",children:[(0,r.jsxs)("span",{children:[e,(0,r.jsx)("b",{children:i})]}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:t})]})}function H({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`devmod-chip ${a}`,children:e})}function G({text:e}){return(0,r.jsx)("div",{className:"devmod-empty",children:e})}function W({title:e,description:a,children:t}){return(0,r.jsxs)("section",{className:"devmod-chart-card",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function V({rows:e}){return(0,r.jsx)("div",{className:"devmod-legend",children:e.map((e,a)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{style:{background:L[a%L.length]}}),e.label,": ",e.value]},e.label))})}let J=`
@keyframes devmodSpin{to{transform:rotate(360deg)}}.devmod-page{min-height:100dvh;width:100%;max-width:100%;padding:8px;padding-bottom:max(28px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--dev-primary) 10%,transparent),transparent 34rem),var(--bg,#f8fafc);color:var(--text,#0f172a);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);overflow-x:hidden}.devmod-page *{box-sizing:border-box}.devmod-page button,.devmod-page input,.devmod-page select{font:inherit;max-width:100%}.devmod-state{min-height:min(420px,calc(100dvh - 32px));display:grid;place-items:center;align-content:center;gap:10px;width:min(520px,100%);margin:0 auto;padding:22px;border-radius:28px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 24px 70px rgba(15,23,42,.08);text-align:center}.devmod-state h2{margin:0;font-size:clamp(18px,5vw,24px);font-weight:1000;letter-spacing:-.04em}.devmod-state p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.devmod-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--dev-primary) 18%,transparent);border-top-color:var(--dev-primary);animation:devmodSpin .8s linear infinite}.devmod-header{display:grid;gap:16px;border-radius:30px;padding:18px;color:#fff;background:radial-gradient(circle at 20% 10%,rgba(255,255,255,.18),transparent 20rem),linear-gradient(135deg,var(--dev-primary),#0f172a 72%);box-shadow:0 24px 70px rgba(15,23,42,.18);overflow:hidden}.devmod-header span{font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.14em;opacity:.82}.devmod-header h1{margin:8px 0 0;font-size:clamp(28px,8vw,44px);line-height:1.02;font-weight:1000;letter-spacing:-.07em}.devmod-header p{max-width:760px;margin:10px 0 0;font-size:13px;line-height:1.6;opacity:.9}.devmod-header-actions{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.devmod-switch{display:inline-flex;gap:5px;padding:5px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(14px)}.devmod-switch button{min-height:34px;border:0;border-radius:999px;padding:0 11px;background:transparent;color:rgba(255,255,255,.75);font-size:12px;font-weight:1000;cursor:pointer}.devmod-switch button.active{background:#fff;color:#0f172a;box-shadow:0 10px 24px rgba(15,23,42,.16)}.devmod-primary-btn,.devmod-soft-btn{min-height:40px;border:0;border-radius:999px;padding:0 13px;font-size:12px;font-weight:950;cursor:pointer}.devmod-primary-btn{background:#fff;color:#0f172a}.devmod-soft-btn{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);color:#fff}.devmod-error{margin-top:10px;padding:12px 14px;border-radius:20px;background:#fee2e2;color:#991b1b;font-size:13px;font-weight:850}.devmod-stat-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-stat{border:1px solid rgba(148,163,184,.22);border-radius:24px;padding:16px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-stat span{display:flex;justify-content:space-between;gap:10px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devmod-stat strong{display:block;margin-top:8px;font-size:clamp(24px,8vw,34px);line-height:1;font-weight:1000;letter-spacing:-.06em}.devmod-stat small{display:block;margin-top:8px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devmod-filters{display:grid;grid-template-columns:1fr;gap:8px;margin-top:10px;padding:10px;border-radius:24px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 18px 45px rgba(15,23,42,.05)}.devmod-filters input,.devmod-filters select{min-height:42px;width:100%;border:1px solid rgba(148,163,184,.3);border-radius:16px;padding:0 12px;background:#fff;color:#0f172a;font-size:13px;font-weight:800}.devmod-filters button{min-height:42px;border:0;border-radius:16px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:13px;font-weight:1000;cursor:pointer}.devmod-check{display:flex;align-items:center;gap:8px;min-height:42px;padding:0 12px;border-radius:16px;background:#f8fafc;color:#475569;font-size:12px;font-weight:900}.devmod-card-grid,.devmod-chart-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-record-card,.devmod-chart-card,.devmod-table-card{min-width:0;border:1px solid rgba(148,163,184,.22);border-radius:26px;padding:14px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-record-top{display:flex;align-items:center;justify-content:space-between;gap:10px}.devmod-avatar{width:42px;height:42px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:#fff;font-weight:1000}.devmod-record-card h3{margin:14px 0 0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-record-card p{margin:5px 0 0;color:var(--muted,#64748b);font-size:13px;line-height:1.45}.devmod-note{padding:10px;border-radius:16px;background:#fff7ed;color:#9a3412!important}.devmod-meta-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.devmod-meta-grid span{padding:10px;border-radius:16px;background:#f8fafc;color:#0f172a;font-size:12px;font-weight:850}.devmod-meta-grid b{display:block;color:var(--muted,#64748b);font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px}.devmod-record-card button{width:100%;min-height:40px;margin-top:14px;border:0;border-radius:999px;background:var(--dev-primary);color:#fff;font-size:12px;font-weight:1000;cursor:pointer}.devmod-chip{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border-radius:999px;font-size:11px;font-weight:1000;white-space:nowrap}.devmod-chip.green{background:#dcfce7;color:#166534}.devmod-chip.blue{background:#dbeafe;color:#1d4ed8}.devmod-chip.orange{background:#ffedd5;color:#c2410c}.devmod-chip.red{background:#fee2e2;color:#b91c1c}.devmod-chip.gray{background:#f1f5f9;color:#475569}.devmod-table-wrap{width:100%;overflow-x:auto}.devmod-table-wrap table{width:100%;min-width:850px;border-collapse:collapse}.devmod-table-wrap th{text-align:left;color:var(--muted,#64748b);font-size:11px;text-transform:uppercase;letter-spacing:.08em;padding:10px;border-bottom:1px solid rgba(148,163,184,.22)}.devmod-table-wrap td{padding:12px 10px;border-bottom:1px solid rgba(148,163,184,.16);font-size:13px}.devmod-table-wrap strong{font-weight:1000}.devmod-chart-card h2{margin:0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-chart-card p{margin:5px 0 10px;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.devmod-legend{display:flex;flex-wrap:wrap;gap:8px;padding-top:8px}.devmod-legend span{display:inline-flex;align-items:center;gap:6px;min-height:28px;border-radius:999px;padding:0 9px;background:#f8fafc;border:1px solid rgba(148,163,184,.18);color:#475569;font-size:11px;font-weight:900}.devmod-legend i{width:9px;height:9px;border-radius:999px}.devmod-empty{grid-column:1/-1;margin:0;padding:18px;border-radius:20px;background:#f8fafc;color:var(--muted,#64748b);font-size:13px;text-align:center;border:1px dashed rgba(148,163,184,.35)}@media(min-width:520px){.devmod-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-meta-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.devmod-filters{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(min-width:820px){.devmod-page{padding:14px}.devmod-header{padding:24px;grid-template-columns:1fr auto;align-items:end}.devmod-card-grid,.devmod-chart-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-filters{grid-template-columns:2fr repeat(4,1fr) auto}.devmod-stat-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
`,Q=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2"],Y=e=>{if(!e)return"Not set";let a=new Date(e);return Number.isNaN(a.getTime())?"Not set":new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(a)},X=e=>{if(!e)return 0;let a=new Date(e).getTime();return Number.isFinite(a)?a:0},Z=(e,a)=>{let t=new Map;return e.forEach(e=>{let r=String(a(e)||"Unknown").trim()||"Unknown";t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)},ee=e=>{let a=String(e||"").toLowerCase();return"active"===a?"green":"suspended"===a?"orange":"closed"===a?"red":"gray"};function ea({navigate:e}){let{accountId:a,authenticated:t,loading:s}=(0,g.F)(),{settings:h}=(0,x.t)(),b=h?.primaryColor||"var(--primary-color, #2563eb)",[f,v]=(0,i.useState)([]),[y,j]=(0,i.useState)(!0),[w,k]=(0,i.useState)(!1),[N,S]=(0,i.useState)(""),[C,A]=(0,i.useState)("cards"),[z,D]=(0,i.useState)(""),[T,P]=(0,i.useState)("all"),[L,I]=(0,i.useState)("all"),[E,$]=(0,i.useState)(""),[F,U]=(0,i.useState)(""),O=async(e=!1)=>{try{e?k(!0):j(!0),S("");let a=await (0,m.uE)("/accounts").catch(()=>[]);v(Array.isArray(a)?a:[])}catch(e){S(e?.message||"Could not load client accounts.")}finally{j(!1),k(!1)}};(0,i.useEffect)(()=>{if(!s){if(!t||!a)return void j(!1);O()}},[s,t,a]);let _=(0,i.useMemo)(()=>Array.from(new Set(f.map(e=>e.country).filter(Boolean))).sort(),[f]),K=(0,i.useMemo)(()=>{let e=z.trim().toLowerCase(),a=E?new Date(E).getTime():0,t=F?new Date(F).setHours(23,59,59,999):0;return f.filter(r=>{let i=`${r.name||""} ${r.email||""} ${r.phone||""} ${r.country||""}`.toLowerCase(),s=X(r.createdAt||r.updatedAt),n="all"===T||String(r.status||"active").toLowerCase()===T,d="all"===L||r.country===L,l=!e||i.includes(e);return n&&d&&l&&(!a||s>=a)&&(!t||s<=t)}).sort((e,a)=>X(a.createdAt||a.updatedAt)-X(e.createdAt||e.updatedAt))},[f,z,T,L,E,F]),B=f.filter(e=>"active"===String(e.status||"active").toLowerCase()).length,H=f.filter(e=>"suspended"===String(e.status||"").toLowerCase()).length,G=f.filter(e=>"closed"===String(e.status||"").toLowerCase()).length,W=(0,i.useMemo)(()=>Z(f,e=>e.status||"active"),[f]),V=(0,i.useMemo)(()=>Z(f,e=>e.country||"Unknown").slice(0,8),[f]),J=(0,i.useMemo)(()=>{let e=((e=6)=>{let a=new Date;return Array.from({length:e},(t,r)=>{let i=new Date(a.getFullYear(),a.getMonth()-(e-1-r),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(i)})})(6),a=new Map(e.map(e=>[e,0]));return f.forEach(e=>{let t,r=(t=X(e.createdAt||e.updatedAt))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(t)):"Unknown";a.has(r)&&a.set(r,(a.get(r)||0)+1)}),e.map(e=>({label:e,accounts:a.get(e)||0}))},[f]);return y||s?(0,r.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":b},children:[(0,r.jsx)("style",{children:ec}),(0,r.jsx)(er,{title:"Loading client accounts...",text:"Checking SaaS account records and preparing filters."})]}):t&&a?(0,r.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":b},children:[(0,r.jsx)("style",{children:ec}),(0,r.jsx)(et,{eyebrow:"SaaS control",title:"Client Accounts",description:"Manage schools, owners and organizations using the platform. Switch between card, table and chart views.",viewMode:C,onViewMode:A,onRefresh:()=>O(!0),refreshing:w,actions:(0,r.jsx)("button",{className:"devmod-primary-btn",type:"button",onClick:()=>e?.("subscriptions"),children:"View Subscriptions"})}),N&&(0,r.jsx)("div",{className:"devmod-error",children:N}),(0,r.jsxs)("section",{className:"devmod-stat-grid",children:[(0,r.jsx)(es,{label:"Total Accounts",value:f.length,detail:`${K.length} after filters`,icon:"\uD83C\uDFEB"}),(0,r.jsx)(es,{label:"Active",value:B,detail:"Currently allowed",icon:"✅"}),(0,r.jsx)(es,{label:"Suspended",value:H,detail:"Needs attention",icon:"⏸️"}),(0,r.jsx)(es,{label:"Closed",value:G,detail:"Inactive clients",icon:"\uD83D\uDEAB"})]}),(0,r.jsxs)(ei,{children:[(0,r.jsx)("input",{value:z,onChange:e=>D(e.target.value),placeholder:"Search name, email, phone..."}),(0,r.jsxs)("select",{value:T,onChange:e=>P(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All statuses"}),(0,r.jsx)("option",{value:"active",children:"Active"}),(0,r.jsx)("option",{value:"suspended",children:"Suspended"}),(0,r.jsx)("option",{value:"closed",children:"Closed"})]}),(0,r.jsxs)("select",{value:L,onChange:e=>I(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All countries"}),_.map(e=>(0,r.jsx)("option",{value:e||"",children:e},e||""))]}),(0,r.jsx)("input",{type:"date",value:E,onChange:e=>$(e.target.value)}),(0,r.jsx)("input",{type:"date",value:F,onChange:e=>U(e.target.value)}),(0,r.jsx)("button",{type:"button",onClick:()=>{D(""),P("all"),I("all"),$(""),U("")},children:"Reset"})]}),"analytics"===C?(0,r.jsxs)("section",{className:"devmod-chart-grid",children:[(0,r.jsx)(el,{title:"Account growth",description:"New or updated client accounts over the last six months.",children:(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(d.E,{data:J,children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"accounts",name:"Accounts",radius:[12,12,0,0],fill:"var(--dev-primary)"})]})})}),(0,r.jsxs)(el,{title:"Account status",description:"Breakdown of account status across the platform.",children:[(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:W,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:W.map((e,a)=>(0,r.jsx)(q.f,{fill:Q[a%Q.length]},a))})]})}),(0,r.jsx)(eo,{rows:W})]}),(0,r.jsx)(el,{title:"Countries",description:"Client account distribution by country.",children:(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(d.E,{data:V,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11,width:82}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",name:"Accounts",radius:[0,12,12,0],fill:"var(--dev-primary)"})]})})})]}):"table"===C?(0,r.jsxs)("section",{className:"devmod-table-card",children:[(0,r.jsx)("div",{className:"devmod-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Account"}),(0,r.jsx)("th",{children:"Contact"}),(0,r.jsx)("th",{children:"Country"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Created"})]})}),(0,r.jsx)("tbody",{children:K.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:e.name||"Unnamed account"})}),(0,r.jsx)("td",{children:e.email||e.phone||"—"}),(0,r.jsx)("td",{children:e.country||"—"}),(0,r.jsx)("td",{children:(0,r.jsx)(en,{tone:ee(e.status),children:e.status||"active"})}),(0,r.jsx)("td",{children:Y(e.createdAt||e.updatedAt)})]},e.id))})]})}),!K.length&&(0,r.jsx)(ed,{text:"No accounts match your filters."})]}):(0,r.jsxs)("section",{className:"devmod-card-grid",children:[K.map(a=>(0,r.jsxs)("article",{className:"devmod-record-card",children:[(0,r.jsxs)("div",{className:"devmod-record-top",children:[(0,r.jsx)("span",{className:"devmod-avatar",children:String(a.name||"A").slice(0,1).toUpperCase()}),(0,r.jsx)(en,{tone:ee(a.status),children:a.status||"active"})]}),(0,r.jsx)("h3",{children:a.name||"Unnamed account"}),(0,r.jsx)("p",{children:a.email||a.phone||"No contact saved"}),(0,r.jsxs)("div",{className:"devmod-meta-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Country"}),a.country||"—"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Currency"}),a.currency||"GHS"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Created"}),Y(a.createdAt||a.updatedAt)]})]}),(0,r.jsx)("button",{type:"button",onClick:()=>e?.("subscriptions"),children:"Open subscription view"})]},a.id)),!K.length&&(0,r.jsx)(ed,{text:"No accounts match your filters."})]})]}):(0,r.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":b},children:[(0,r.jsx)("style",{children:ec}),(0,r.jsx)(er,{title:"Developer access required",text:"Sign in with a developer account to manage client accounts."})]})}function et({eyebrow:e,title:a,description:t,viewMode:i,onViewMode:s,onRefresh:n,refreshing:d,actions:l}){return(0,r.jsxs)("section",{className:"devmod-header",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("h1",{children:a}),(0,r.jsx)("p",{children:t})]}),(0,r.jsxs)("div",{className:"devmod-header-actions",children:[(0,r.jsxs)("div",{className:"devmod-switch",children:[(0,r.jsx)("button",{className:"cards"===i?"active":"",onClick:()=>s("cards"),type:"button",children:"Cards"}),(0,r.jsx)("button",{className:"table"===i?"active":"",onClick:()=>s("table"),type:"button",children:"Table"}),(0,r.jsx)("button",{className:"analytics"===i?"active":"",onClick:()=>s("analytics"),type:"button",children:"Charts"})]}),l,(0,r.jsx)("button",{className:"devmod-soft-btn",type:"button",onClick:n,disabled:d,children:d?"Refreshing...":"Refresh"})]})]})}function er({title:e,text:a}){return(0,r.jsxs)("section",{className:"devmod-state",children:[(0,r.jsx)("div",{className:"devmod-spinner"}),(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a})]})}function ei({children:e}){return(0,r.jsx)("section",{className:"devmod-filters",children:e})}function es({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"devmod-stat",children:[(0,r.jsxs)("span",{children:[e,(0,r.jsx)("b",{children:i})]}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:t})]})}function en({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`devmod-chip ${a}`,children:e})}function ed({text:e}){return(0,r.jsx)("div",{className:"devmod-empty",children:e})}function el({title:e,description:a,children:t}){return(0,r.jsxs)("section",{className:"devmod-chart-card",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function eo({rows:e}){return(0,r.jsx)("div",{className:"devmod-legend",children:e.map((e,a)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{style:{background:Q[a%Q.length]}}),e.label,": ",e.value]},e.label))})}let ec=`
@keyframes devmodSpin { to { transform: rotate(360deg); } }
.devmod-page{min-height:100dvh;width:100%;max-width:100%;padding:8px;padding-bottom:max(28px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--dev-primary) 10%,transparent),transparent 34rem),var(--bg,#f8fafc);color:var(--text,#0f172a);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);overflow-x:hidden}
.devmod-page *{box-sizing:border-box}.devmod-page button,.devmod-page input,.devmod-page select{font:inherit;max-width:100%}.devmod-page button{-webkit-tap-highlight-color:transparent}
.devmod-state{min-height:min(420px,calc(100dvh - 32px));display:grid;place-items:center;align-content:center;gap:10px;width:min(520px,100%);margin:0 auto;padding:22px;border-radius:28px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 24px 70px rgba(15,23,42,.08);text-align:center}.devmod-state h2{margin:0;font-size:clamp(18px,5vw,24px);font-weight:1000;letter-spacing:-.04em}.devmod-state p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.devmod-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--dev-primary) 18%,transparent);border-top-color:var(--dev-primary);animation:devmodSpin .8s linear infinite}
.devmod-header{display:grid;gap:16px;border-radius:30px;padding:18px;color:#fff;background:radial-gradient(circle at 20% 10%,rgba(255,255,255,.18),transparent 20rem),linear-gradient(135deg,var(--dev-primary),#0f172a 72%);box-shadow:0 24px 70px rgba(15,23,42,.18);overflow:hidden}.devmod-header span{font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.14em;opacity:.82}.devmod-header h1{margin:8px 0 0;font-size:clamp(28px,8vw,44px);line-height:1.02;font-weight:1000;letter-spacing:-.07em}.devmod-header p{max-width:760px;margin:10px 0 0;font-size:13px;line-height:1.6;opacity:.9}.devmod-header-actions{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.devmod-switch{display:inline-flex;gap:5px;padding:5px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(14px)}.devmod-switch button{min-height:34px;border:0;border-radius:999px;padding:0 11px;background:transparent;color:rgba(255,255,255,.75);font-size:12px;font-weight:1000;cursor:pointer}.devmod-switch button.active{background:#fff;color:#0f172a;box-shadow:0 10px 24px rgba(15,23,42,.16)}
.devmod-primary-btn,.devmod-soft-btn{min-height:40px;border:0;border-radius:999px;padding:0 13px;font-size:12px;font-weight:950;cursor:pointer}.devmod-primary-btn{background:#fff;color:#0f172a}.devmod-soft-btn{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);color:#fff}
.devmod-error{margin-top:10px;padding:12px 14px;border-radius:20px;background:#fee2e2;color:#991b1b;font-size:13px;font-weight:850}
.devmod-stat-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-stat{border:1px solid rgba(148,163,184,.22);border-radius:24px;padding:16px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-stat span{display:flex;justify-content:space-between;gap:10px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devmod-stat strong{display:block;margin-top:8px;font-size:clamp(24px,8vw,34px);line-height:1;font-weight:1000;letter-spacing:-.06em}.devmod-stat small{display:block;margin-top:8px;color:var(--muted,#64748b);font-size:12px;font-weight:850}
.devmod-filters{display:grid;grid-template-columns:1fr;gap:8px;margin-top:10px;padding:10px;border-radius:24px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 18px 45px rgba(15,23,42,.05)}.devmod-filters input,.devmod-filters select{min-height:42px;width:100%;border:1px solid rgba(148,163,184,.3);border-radius:16px;padding:0 12px;background:#fff;color:#0f172a;font-size:13px;font-weight:800}.devmod-filters button{min-height:42px;border:0;border-radius:16px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:13px;font-weight:1000;cursor:pointer}
.devmod-card-grid,.devmod-chart-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-record-card,.devmod-chart-card,.devmod-table-card{min-width:0;border:1px solid rgba(148,163,184,.22);border-radius:26px;padding:14px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-record-top{display:flex;align-items:center;justify-content:space-between;gap:10px}.devmod-avatar{width:42px;height:42px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:#fff;font-weight:1000}.devmod-record-card h3{margin:14px 0 0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-record-card p{margin:5px 0 0;color:var(--muted,#64748b);font-size:13px;line-height:1.45}.devmod-meta-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.devmod-meta-grid span{padding:10px;border-radius:16px;background:#f8fafc;color:#0f172a;font-size:12px;font-weight:850}.devmod-meta-grid b{display:block;color:var(--muted,#64748b);font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px}.devmod-record-card button{width:100%;min-height:40px;margin-top:14px;border:0;border-radius:999px;background:var(--dev-primary);color:#fff;font-size:12px;font-weight:1000;cursor:pointer}
.devmod-chip{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border-radius:999px;font-size:11px;font-weight:1000;white-space:nowrap}.devmod-chip.green{background:#dcfce7;color:#166534}.devmod-chip.blue{background:#dbeafe;color:#1d4ed8}.devmod-chip.orange{background:#ffedd5;color:#c2410c}.devmod-chip.red{background:#fee2e2;color:#b91c1c}.devmod-chip.gray{background:#f1f5f9;color:#475569}
.devmod-table-wrap{width:100%;overflow-x:auto}.devmod-table-wrap table{width:100%;min-width:760px;border-collapse:collapse}.devmod-table-wrap th{text-align:left;color:var(--muted,#64748b);font-size:11px;text-transform:uppercase;letter-spacing:.08em;padding:10px;border-bottom:1px solid rgba(148,163,184,.22)}.devmod-table-wrap td{padding:12px 10px;border-bottom:1px solid rgba(148,163,184,.16);font-size:13px}.devmod-table-wrap strong{font-weight:1000}
.devmod-chart-card h2{margin:0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-chart-card p{margin:5px 0 10px;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.devmod-legend{display:flex;flex-wrap:wrap;gap:8px;padding-top:8px}.devmod-legend span{display:inline-flex;align-items:center;gap:6px;min-height:28px;border-radius:999px;padding:0 9px;background:#f8fafc;border:1px solid rgba(148,163,184,.18);color:#475569;font-size:11px;font-weight:900}.devmod-legend i{width:9px;height:9px;border-radius:999px}
.devmod-empty{grid-column:1/-1;margin:0;padding:18px;border-radius:20px;background:#f8fafc;color:var(--muted,#64748b);font-size:13px;text-align:center;border:1px dashed rgba(148,163,184,.35)}
@media (min-width:520px){.devmod-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-meta-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.devmod-filters{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (min-width:820px){.devmod-page{padding:14px}.devmod-header{padding:24px;grid-template-columns:1fr auto;align-items:end}.devmod-card-grid,.devmod-chart-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-filters{grid-template-columns:2fr repeat(4,1fr) auto}.devmod-stat-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
`,ep=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2"],eu=(e,a="GHS")=>new Intl.NumberFormat("en-GH",{style:"currency",currency:a,maximumFractionDigits:0}).format(Number(e||0)),em=e=>{if(!e)return 0;let a=new Date(e).getTime();return Number.isFinite(a)?a:0},eg=e=>{if(!e)return"Not set";let a=new Date(e);return Number.isNaN(a.getTime())?"Not set":new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(a)},ex=e=>{let a=String(e||"").toLowerCase();return"paid"===a?"green":["issued","draft"].includes(a)?"blue":"overdue"===a?"orange":"void"===a?"red":"gray"};function eh({navigate:e}){let{accountId:a,authenticated:t,loading:s}=(0,g.F)(),{settings:h}=(0,x.t)(),b=h?.primaryColor||"var(--primary-color, #2563eb)",[f,v]=(0,i.useState)([]),[y,j]=(0,i.useState)(!0),[w,k]=(0,i.useState)(!1),[N,S]=(0,i.useState)(""),[C,A]=(0,i.useState)("cards"),[z,D]=(0,i.useState)(""),[T,P]=(0,i.useState)("all"),[L,I]=(0,i.useState)("created"),[E,$]=(0,i.useState)(""),[F,U]=(0,i.useState)(""),O=async(e=!1)=>{try{e?k(!0):j(!0),S("");let a=await (0,m.uE)("/billing/invoices").catch(()=>[]);v(Array.isArray(a)?a:[])}catch(e){S(e?.message||"Could not load invoices.")}finally{j(!1),k(!1)}};(0,i.useEffect)(()=>{if(!s){if(!t||!a)return void j(!1);O()}},[s,t,a]);let _=(0,i.useMemo)(()=>{let e=z.trim().toLowerCase(),a=E?new Date(E).getTime():0,t=F?new Date(F).setHours(23,59,59,999):0;return f.filter(r=>{let i=`${r.invoiceNumber||""} ${r.account?.name||""} ${r.status||""} ${r.note||""}`.toLowerCase(),s="all"===T||String(r.status||"").toLowerCase()===T,n=!e||i.includes(e),d=em("due"===L?r.dueDate:"paid"===L?r.paidAt:r.createdAt||r.updatedAt);return s&&n&&(!a||d>=a)&&(!t||d<=t)}).sort((e,a)=>em(a.createdAt||a.updatedAt)-em(e.createdAt||e.updatedAt))},[f,z,T,L,E,F]),K=f.reduce((e,a)=>e+Number(a.total||0),0),B=f.filter(e=>"paid"===String(e.status).toLowerCase()).reduce((e,a)=>e+Number(a.total||0),0),H=f.filter(e=>["issued","draft","overdue"].includes(String(e.status).toLowerCase())).reduce((e,a)=>e+Number(a.total||0),0),G=f.filter(e=>"overdue"===String(e.status).toLowerCase()).length,W=(0,i.useMemo)(()=>{var e;let a;return e=e=>e.status,a=new Map,f.forEach(t=>{let r=String(e(t)||"Unknown").trim()||"Unknown";a.set(r,(a.get(r)||0)+1)}),Array.from(a.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)},[f]),V=(0,i.useMemo)(()=>{let e=new Map;return f.forEach(a=>{let t=String(a.status||"Unknown");e.set(t,(e.get(t)||0)+Number(a.total||0))}),Array.from(e.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)},[f]),J=(0,i.useMemo)(()=>{let e=((e=6)=>{let a=new Date;return Array.from({length:e},(t,r)=>{let i=new Date(a.getFullYear(),a.getMonth()-(e-1-r),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(i)})})(6),a=new Map(e.map(e=>[e,0]));return f.forEach(e=>{let t,r=(t=em(e.createdAt||e.updatedAt))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(t)):"Unknown";a.has(r)&&a.set(r,(a.get(r)||0)+Number(e.total||0))}),e.map(e=>({label:e,total:a.get(e)||0}))},[f]);return y||s?(0,r.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":b},children:[(0,r.jsx)("style",{children:eN}),(0,r.jsx)(ef,{title:"Loading invoices...",text:"Preparing invoice records, dates and charts."})]}):t&&a?(0,r.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":b},children:[(0,r.jsx)("style",{children:eN}),(0,r.jsx)(eb,{eyebrow:"Platform billing",title:"Invoices",description:"Review invoices by status, date, value and client account. Switch between card, table and chart views.",viewMode:C,onViewMode:A,onRefresh:()=>O(!0),refreshing:w,actions:(0,r.jsx)("button",{className:"devmod-primary-btn",type:"button",onClick:()=>e?.("payments"),children:"View Payments"})}),N&&(0,r.jsx)("div",{className:"devmod-error",children:N}),(0,r.jsxs)("section",{className:"devmod-stat-grid",children:[(0,r.jsx)(ev,{label:"Invoices",value:f.length,detail:`${_.length} after filters`,icon:"\uD83E\uDDFE"}),(0,r.jsx)(ev,{label:"Total Value",value:eu(K),detail:"All invoice records",icon:"\uD83D\uDCCA"}),(0,r.jsx)(ev,{label:"Paid Value",value:eu(B),detail:"Collected invoices",icon:"✅"}),(0,r.jsx)(ev,{label:"Open / Overdue",value:eu(H),detail:`${G} overdue`,icon:"⚠️"})]}),(0,r.jsxs)("section",{className:"devmod-filters",children:[(0,r.jsx)("input",{value:z,onChange:e=>D(e.target.value),placeholder:"Search invoice, account, note..."}),(0,r.jsxs)("select",{value:T,onChange:e=>P(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All statuses"}),(0,r.jsx)("option",{value:"draft",children:"Draft"}),(0,r.jsx)("option",{value:"issued",children:"Issued"}),(0,r.jsx)("option",{value:"paid",children:"Paid"}),(0,r.jsx)("option",{value:"overdue",children:"Overdue"}),(0,r.jsx)("option",{value:"void",children:"Void"})]}),(0,r.jsxs)("select",{value:L,onChange:e=>I(e.target.value),children:[(0,r.jsx)("option",{value:"created",children:"Created date"}),(0,r.jsx)("option",{value:"due",children:"Due date"}),(0,r.jsx)("option",{value:"paid",children:"Paid date"})]}),(0,r.jsx)("input",{type:"date",value:E,onChange:e=>$(e.target.value)}),(0,r.jsx)("input",{type:"date",value:F,onChange:e=>U(e.target.value)}),(0,r.jsx)("button",{type:"button",onClick:()=>{D(""),P("all"),I("created"),$(""),U("")},children:"Reset"})]}),"analytics"===C?(0,r.jsxs)("section",{className:"devmod-chart-grid",children:[(0,r.jsx)(ew,{title:"Invoice value over time",description:"Total invoice value created during the last six months.",children:(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(d.E,{data:J,children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,fontSize:11,tickFormatter:e=>Intl.NumberFormat("en-GH",{notation:"compact"}).format(Number(e))}),(0,r.jsx)(p.m,{formatter:e=>eu(Number(e))}),(0,r.jsx)(u.yP,{dataKey:"total",fill:"var(--dev-primary)",radius:[12,12,0,0]})]})})}),(0,r.jsxs)(ew,{title:"Invoice status count",description:"How many invoices are draft, issued, paid, overdue or void.",children:[(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:W,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:W.map((e,a)=>(0,r.jsx)(q.f,{fill:ep[a%ep.length]},a))})]})}),(0,r.jsx)(ek,{rows:W})]}),(0,r.jsx)(ew,{title:"Value by status",description:"Amount locked in each invoice status.",children:(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(d.E,{data:V,children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,fontSize:11,tickFormatter:e=>Intl.NumberFormat("en-GH",{notation:"compact"}).format(Number(e))}),(0,r.jsx)(p.m,{formatter:e=>eu(Number(e))}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--dev-primary)",radius:[12,12,0,0]})]})})})]}):"table"===C?(0,r.jsxs)("section",{className:"devmod-table-card",children:[(0,r.jsx)("div",{className:"devmod-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Invoice"}),(0,r.jsx)("th",{children:"Account"}),(0,r.jsx)("th",{children:"Total"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Due"}),(0,r.jsx)("th",{children:"Paid"})]})}),(0,r.jsx)("tbody",{children:_.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:e.invoiceNumber||e.id.slice(0,8)})}),(0,r.jsx)("td",{children:e.account?.name||e.accountId}),(0,r.jsx)("td",{children:eu(e.total,e.currency||"GHS")}),(0,r.jsx)("td",{children:(0,r.jsx)(ey,{tone:ex(e.status),children:e.status})}),(0,r.jsx)("td",{children:eg(e.dueDate)}),(0,r.jsx)("td",{children:eg(e.paidAt)})]},e.id))})]})}),!_.length&&(0,r.jsx)(ej,{text:"No invoices match your filters."})]}):(0,r.jsxs)("section",{className:"devmod-card-grid",children:[_.map(a=>(0,r.jsxs)("article",{className:"devmod-record-card",children:[(0,r.jsxs)("div",{className:"devmod-record-top",children:[(0,r.jsx)("span",{className:"devmod-avatar",children:"\uD83E\uDDFE"}),(0,r.jsx)(ey,{tone:ex(a.status),children:a.status})]}),(0,r.jsx)("h3",{children:a.invoiceNumber||"Invoice"}),(0,r.jsx)("p",{children:a.account?.name||a.accountId}),(0,r.jsxs)("div",{className:"devmod-meta-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Total"}),eu(a.total,a.currency||"GHS")]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Due"}),eg(a.dueDate)]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Paid"}),eg(a.paidAt)]})]}),a.note&&(0,r.jsx)("p",{className:"devmod-note",children:a.note}),(0,r.jsx)("button",{type:"button",onClick:()=>e?.("payments"),children:"View related payments"})]},a.id)),!_.length&&(0,r.jsx)(ej,{text:"No invoices match your filters."})]})]}):(0,r.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":b},children:[(0,r.jsx)("style",{children:eN}),(0,r.jsx)(ef,{title:"Developer access required",text:"Sign in with a developer account to manage invoices."})]})}function eb({eyebrow:e,title:a,description:t,viewMode:i,onViewMode:s,onRefresh:n,refreshing:d,actions:l}){return(0,r.jsxs)("section",{className:"devmod-header",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("h1",{children:a}),(0,r.jsx)("p",{children:t})]}),(0,r.jsxs)("div",{className:"devmod-header-actions",children:[(0,r.jsxs)("div",{className:"devmod-switch",children:[(0,r.jsx)("button",{className:"cards"===i?"active":"",onClick:()=>s("cards"),type:"button",children:"Cards"}),(0,r.jsx)("button",{className:"table"===i?"active":"",onClick:()=>s("table"),type:"button",children:"Table"}),(0,r.jsx)("button",{className:"analytics"===i?"active":"",onClick:()=>s("analytics"),type:"button",children:"Charts"})]}),l,(0,r.jsx)("button",{className:"devmod-soft-btn",type:"button",onClick:n,disabled:d,children:d?"Refreshing...":"Refresh"})]})]})}function ef({title:e,text:a}){return(0,r.jsxs)("section",{className:"devmod-state",children:[(0,r.jsx)("div",{className:"devmod-spinner"}),(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a})]})}function ev({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"devmod-stat",children:[(0,r.jsxs)("span",{children:[e,(0,r.jsx)("b",{children:i})]}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:t})]})}function ey({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`devmod-chip ${a}`,children:e})}function ej({text:e}){return(0,r.jsx)("div",{className:"devmod-empty",children:e})}function ew({title:e,description:a,children:t}){return(0,r.jsxs)("section",{className:"devmod-chart-card",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function ek({rows:e}){return(0,r.jsx)("div",{className:"devmod-legend",children:e.map((e,a)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{style:{background:ep[a%ep.length]}}),e.label,": ",e.value]},e.label))})}let eN=`
@keyframes devmodSpin{to{transform:rotate(360deg)}}.devmod-page{min-height:100dvh;width:100%;max-width:100%;padding:8px;padding-bottom:max(28px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--dev-primary) 10%,transparent),transparent 34rem),var(--bg,#f8fafc);color:var(--text,#0f172a);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);overflow-x:hidden}.devmod-page *{box-sizing:border-box}.devmod-page button,.devmod-page input,.devmod-page select{font:inherit;max-width:100%}.devmod-state{min-height:min(420px,calc(100dvh - 32px));display:grid;place-items:center;align-content:center;gap:10px;width:min(520px,100%);margin:0 auto;padding:22px;border-radius:28px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 24px 70px rgba(15,23,42,.08);text-align:center}.devmod-state h2{margin:0;font-size:clamp(18px,5vw,24px);font-weight:1000;letter-spacing:-.04em}.devmod-state p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.devmod-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--dev-primary) 18%,transparent);border-top-color:var(--dev-primary);animation:devmodSpin .8s linear infinite}.devmod-header{display:grid;gap:16px;border-radius:30px;padding:18px;color:#fff;background:radial-gradient(circle at 20% 10%,rgba(255,255,255,.18),transparent 20rem),linear-gradient(135deg,var(--dev-primary),#0f172a 72%);box-shadow:0 24px 70px rgba(15,23,42,.18);overflow:hidden}.devmod-header span{font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.14em;opacity:.82}.devmod-header h1{margin:8px 0 0;font-size:clamp(28px,8vw,44px);line-height:1.02;font-weight:1000;letter-spacing:-.07em}.devmod-header p{max-width:760px;margin:10px 0 0;font-size:13px;line-height:1.6;opacity:.9}.devmod-header-actions{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.devmod-switch{display:inline-flex;gap:5px;padding:5px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(14px)}.devmod-switch button{min-height:34px;border:0;border-radius:999px;padding:0 11px;background:transparent;color:rgba(255,255,255,.75);font-size:12px;font-weight:1000;cursor:pointer}.devmod-switch button.active{background:#fff;color:#0f172a;box-shadow:0 10px 24px rgba(15,23,42,.16)}.devmod-primary-btn,.devmod-soft-btn{min-height:40px;border:0;border-radius:999px;padding:0 13px;font-size:12px;font-weight:950;cursor:pointer}.devmod-primary-btn{background:#fff;color:#0f172a}.devmod-soft-btn{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);color:#fff}.devmod-error{margin-top:10px;padding:12px 14px;border-radius:20px;background:#fee2e2;color:#991b1b;font-size:13px;font-weight:850}.devmod-stat-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-stat{border:1px solid rgba(148,163,184,.22);border-radius:24px;padding:16px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-stat span{display:flex;justify-content:space-between;gap:10px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devmod-stat strong{display:block;margin-top:8px;font-size:clamp(24px,8vw,34px);line-height:1;font-weight:1000;letter-spacing:-.06em}.devmod-stat small{display:block;margin-top:8px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devmod-filters{display:grid;grid-template-columns:1fr;gap:8px;margin-top:10px;padding:10px;border-radius:24px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 18px 45px rgba(15,23,42,.05)}.devmod-filters input,.devmod-filters select{min-height:42px;width:100%;border:1px solid rgba(148,163,184,.3);border-radius:16px;padding:0 12px;background:#fff;color:#0f172a;font-size:13px;font-weight:800}.devmod-filters button{min-height:42px;border:0;border-radius:16px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:13px;font-weight:1000;cursor:pointer}.devmod-card-grid,.devmod-chart-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-record-card,.devmod-chart-card,.devmod-table-card{min-width:0;border:1px solid rgba(148,163,184,.22);border-radius:26px;padding:14px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-record-top{display:flex;align-items:center;justify-content:space-between;gap:10px}.devmod-avatar{width:42px;height:42px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:#fff;font-weight:1000}.devmod-record-card h3{margin:14px 0 0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-record-card p{margin:5px 0 0;color:var(--muted,#64748b);font-size:13px;line-height:1.45}.devmod-note{padding:10px;border-radius:16px;background:#f8fafc;color:#475569!important}.devmod-meta-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.devmod-meta-grid span{padding:10px;border-radius:16px;background:#f8fafc;color:#0f172a;font-size:12px;font-weight:850}.devmod-meta-grid b{display:block;color:var(--muted,#64748b);font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px}.devmod-record-card button{width:100%;min-height:40px;margin-top:14px;border:0;border-radius:999px;background:var(--dev-primary);color:#fff;font-size:12px;font-weight:1000;cursor:pointer}.devmod-chip{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border-radius:999px;font-size:11px;font-weight:1000;white-space:nowrap}.devmod-chip.green{background:#dcfce7;color:#166534}.devmod-chip.blue{background:#dbeafe;color:#1d4ed8}.devmod-chip.orange{background:#ffedd5;color:#c2410c}.devmod-chip.red{background:#fee2e2;color:#b91c1c}.devmod-chip.gray{background:#f1f5f9;color:#475569}.devmod-table-wrap{width:100%;overflow-x:auto}.devmod-table-wrap table{width:100%;min-width:850px;border-collapse:collapse}.devmod-table-wrap th{text-align:left;color:var(--muted,#64748b);font-size:11px;text-transform:uppercase;letter-spacing:.08em;padding:10px;border-bottom:1px solid rgba(148,163,184,.22)}.devmod-table-wrap td{padding:12px 10px;border-bottom:1px solid rgba(148,163,184,.16);font-size:13px}.devmod-table-wrap strong{font-weight:1000}.devmod-chart-card h2{margin:0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-chart-card p{margin:5px 0 10px;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.devmod-legend{display:flex;flex-wrap:wrap;gap:8px;padding-top:8px}.devmod-legend span{display:inline-flex;align-items:center;gap:6px;min-height:28px;border-radius:999px;padding:0 9px;background:#f8fafc;border:1px solid rgba(148,163,184,.18);color:#475569;font-size:11px;font-weight:900}.devmod-legend i{width:9px;height:9px;border-radius:999px}.devmod-empty{grid-column:1/-1;margin:0;padding:18px;border-radius:20px;background:#f8fafc;color:var(--muted,#64748b);font-size:13px;text-align:center;border:1px dashed rgba(148,163,184,.35)}@media(min-width:520px){.devmod-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-meta-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.devmod-filters{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(min-width:820px){.devmod-page{padding:14px}.devmod-header{padding:24px;grid-template-columns:1fr auto;align-items:end}.devmod-card-grid,.devmod-chart-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-filters{grid-template-columns:2fr repeat(4,1fr) auto}.devmod-stat-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
`;var eS=t(90639),eC=t(54736);let eA=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2"],ez=(e,a="GHS")=>new Intl.NumberFormat("en-GH",{style:"currency",currency:a,maximumFractionDigits:0}).format(Number(e||0)),eD=e=>{if(!e)return 0;let a=new Date(e).getTime();return Number.isFinite(a)?a:0},eT=e=>{if(!e)return"Not set";let a=new Date(e);return Number.isNaN(a.getTime())?"Not set":new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(a)},eP=e=>{let a=String(e||"").toLowerCase();return["paid","success"].includes(a)?"green":"pending"===a?"blue":["refunded","cancelled"].includes(a)?"orange":"failed"===a?"red":"gray"},eR=(e,a)=>{let t=new Map;return e.forEach(e=>{let r=String(a(e)||"Unknown").trim()||"Unknown";t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)};function eM({navigate:e}){let{accountId:a,authenticated:t,loading:s}=(0,g.F)(),{settings:h}=(0,x.t)(),b=h?.primaryColor||"var(--primary-color, #2563eb)",[f,v]=(0,i.useState)([]),[y,j]=(0,i.useState)(!0),[w,k]=(0,i.useState)(!1),[N,S]=(0,i.useState)(""),[C,A]=(0,i.useState)("cards"),[z,D]=(0,i.useState)(""),[T,P]=(0,i.useState)("all"),[L,I]=(0,i.useState)("all"),[E,$]=(0,i.useState)("all"),[F,U]=(0,i.useState)(""),[O,_]=(0,i.useState)(""),K=async(e=!1)=>{try{e?k(!0):j(!0),S("");let a=await (0,m.uE)("/billing/payments").catch(()=>[]);v(Array.isArray(a)?a:[])}catch(e){S(e?.message||"Could not load payments.")}finally{j(!1),k(!1)}};(0,i.useEffect)(()=>{if(!s){if(!t||!a)return void j(!1);K()}},[s,t,a]);let B=(0,i.useMemo)(()=>Array.from(new Set(f.map(e=>e.method).filter(Boolean))).sort(),[f]),H=(0,i.useMemo)(()=>Array.from(new Set(f.map(e=>e.provider).filter(Boolean))).sort(),[f]),G=(0,i.useMemo)(()=>{let e=z.trim().toLowerCase(),a=F?new Date(F).getTime():0,t=O?new Date(O).setHours(23,59,59,999):0;return f.filter(r=>{let i=`${r.account?.name||""} ${r.payerName||""} ${r.payerPhone||""} ${r.payerEmail||""} ${r.receiptNumber||""} ${r.providerReference||""} ${r.status||""}`.toLowerCase(),s=eD(r.paidAt||r.createdAt||r.updatedAt),n="all"===T||String(r.status||"").toLowerCase()===T,d="all"===L||r.method===L,l="all"===E||r.provider===E,o=!e||i.includes(e);return n&&d&&l&&o&&(!a||s>=a)&&(!t||s<=t)}).sort((e,a)=>eD(a.paidAt||a.createdAt)-eD(e.paidAt||e.createdAt))},[f,z,T,L,E,F,O]),W=f.filter(e=>["paid","success"].includes(String(e.status).toLowerCase())),V=f.filter(e=>"pending"===String(e.status).toLowerCase()),J=f.filter(e=>"failed"===String(e.status).toLowerCase()),Q=W.reduce((e,a)=>e+Number(a.amount||0),0),Y=V.reduce((e,a)=>e+Number(a.amount||0),0),X=(0,i.useMemo)(()=>eR(f,e=>e.method||e.provider||"manual"),[f]),Z=(0,i.useMemo)(()=>eR(f,e=>e.status),[f]),ee=(0,i.useMemo)(()=>eR(f,e=>e.provider||"manual"),[f]),ea=(0,i.useMemo)(()=>{let e=((e=6)=>{let a=new Date;return Array.from({length:e},(t,r)=>{let i=new Date(a.getFullYear(),a.getMonth()-(e-1-r),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(i)})})(6),a=new Map(e.map(e=>[e,0]));return W.forEach(e=>{let t,r=(t=eD(e.paidAt||e.createdAt))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(t)):"Unknown";a.has(r)&&a.set(r,(a.get(r)||0)+Number(e.amount||0))}),e.map(e=>({label:e,revenue:a.get(e)||0}))},[W]);return y||s?(0,r.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":b},children:[(0,r.jsx)("style",{children:eO}),(0,r.jsx)(eL,{title:"Loading payments...",text:"Preparing payment records, filters and revenue charts."})]}):t&&a?(0,r.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":b},children:[(0,r.jsx)("style",{children:eO}),(0,r.jsx)(eq,{eyebrow:"Platform billing",title:"Payments",description:"Track Paystack/manual payments, pending payments, failed payments, receipts and revenue trends.",viewMode:C,onViewMode:A,onRefresh:()=>K(!0),refreshing:w,actions:(0,r.jsx)("button",{className:"devmod-primary-btn",type:"button",onClick:()=>e?.("invoices"),children:"View Invoices"})}),N&&(0,r.jsx)("div",{className:"devmod-error",children:N}),(0,r.jsxs)("section",{className:"devmod-stat-grid",children:[(0,r.jsx)(eI,{label:"Payments",value:f.length,detail:`${G.length} after filters`,icon:"\uD83D\uDCB0"}),(0,r.jsx)(eI,{label:"Paid Revenue",value:ez(Q),detail:`${W.length} successful`,icon:"✅"}),(0,r.jsx)(eI,{label:"Pending",value:ez(Y),detail:`${V.length} pending`,icon:"⏳"}),(0,r.jsx)(eI,{label:"Failed",value:J.length,detail:"Needs review",icon:"⚠️"})]}),(0,r.jsxs)("section",{className:"devmod-filters",children:[(0,r.jsx)("input",{value:z,onChange:e=>D(e.target.value),placeholder:"Search payer, receipt, reference..."}),(0,r.jsxs)("select",{value:T,onChange:e=>P(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All statuses"}),(0,r.jsx)("option",{value:"pending",children:"Pending"}),(0,r.jsx)("option",{value:"paid",children:"Paid"}),(0,r.jsx)("option",{value:"failed",children:"Failed"}),(0,r.jsx)("option",{value:"refunded",children:"Refunded"}),(0,r.jsx)("option",{value:"cancelled",children:"Cancelled"})]}),(0,r.jsxs)("select",{value:L,onChange:e=>I(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All methods"}),B.map(e=>(0,r.jsx)("option",{value:e||"",children:e},e||""))]}),(0,r.jsxs)("select",{value:E,onChange:e=>$(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All providers"}),H.map(e=>(0,r.jsx)("option",{value:e||"",children:e},e||""))]}),(0,r.jsx)("input",{type:"date",value:F,onChange:e=>U(e.target.value)}),(0,r.jsx)("input",{type:"date",value:O,onChange:e=>_(e.target.value)}),(0,r.jsx)("button",{type:"button",onClick:()=>{D(""),P("all"),I("all"),$("all"),U(""),_("")},children:"Reset"})]}),"analytics"===C?(0,r.jsxs)("section",{className:"devmod-chart-grid",children:[(0,r.jsx)(eF,{title:"Revenue over time",description:"Successful paid payment value over the last six months.",children:(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(eS.Q,{data:ea,children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"payRevenue",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"8%",stopColor:"var(--dev-primary)",stopOpacity:.28}),(0,r.jsx)("stop",{offset:"95%",stopColor:"var(--dev-primary)",stopOpacity:.02})]})}),(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,fontSize:11,tickFormatter:e=>Intl.NumberFormat("en-GH",{notation:"compact"}).format(Number(e))}),(0,r.jsx)(p.m,{formatter:e=>ez(Number(e))}),(0,r.jsx)(eC.Gk,{type:"monotone",dataKey:"revenue",stroke:"var(--dev-primary)",fill:"url(#payRevenue)",strokeWidth:3})]})})}),(0,r.jsxs)(eF,{title:"Payment status",description:"Successful, pending, failed, refunded and cancelled payments.",children:[(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:Z,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:Z.map((e,a)=>(0,r.jsx)(q.f,{fill:eA[a%eA.length]},a))})]})}),(0,r.jsx)(eU,{rows:Z})]}),(0,r.jsx)(eF,{title:"Payment method",description:"Cash, mobile money, card, bank and manual payment mix.",children:(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(d.E,{data:X,children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--dev-primary)",radius:[12,12,0,0]})]})})}),(0,r.jsxs)(eF,{title:"Providers",description:"Payment provider distribution such as Paystack or manual.",children:[(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:ee,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:ee.map((e,a)=>(0,r.jsx)(q.f,{fill:eA[a%eA.length]},a))})]})}),(0,r.jsx)(eU,{rows:ee})]})]}):"table"===C?(0,r.jsxs)("section",{className:"devmod-table-card",children:[(0,r.jsx)("div",{className:"devmod-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Payer / Account"}),(0,r.jsx)("th",{children:"Amount"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Method"}),(0,r.jsx)("th",{children:"Provider"}),(0,r.jsx)("th",{children:"Receipt"}),(0,r.jsx)("th",{children:"Date"})]})}),(0,r.jsx)("tbody",{children:G.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:e.payerName||e.account?.name||e.accountId})}),(0,r.jsx)("td",{children:ez(e.amount,e.currency||"GHS")}),(0,r.jsx)("td",{children:(0,r.jsx)(eE,{tone:eP(e.status),children:e.status})}),(0,r.jsx)("td",{children:e.method||"—"}),(0,r.jsx)("td",{children:e.provider||"manual"}),(0,r.jsx)("td",{children:e.receiptNumber||e.providerReference||"—"}),(0,r.jsx)("td",{children:eT(e.paidAt||e.createdAt)})]},e.id))})]})}),!G.length&&(0,r.jsx)(e$,{text:"No payments match your filters."})]}):(0,r.jsxs)("section",{className:"devmod-card-grid",children:[G.map(a=>(0,r.jsxs)("article",{className:"devmod-record-card",children:[(0,r.jsxs)("div",{className:"devmod-record-top",children:[(0,r.jsx)("span",{className:"devmod-avatar",children:"\uD83D\uDCB0"}),(0,r.jsx)(eE,{tone:eP(a.status),children:a.status})]}),(0,r.jsx)("h3",{children:ez(a.amount,a.currency||"GHS")}),(0,r.jsx)("p",{children:a.payerName||a.account?.name||a.payerEmail||a.accountId}),(0,r.jsxs)("div",{className:"devmod-meta-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Method"}),a.method||"—"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Provider"}),a.provider||"manual"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Date"}),eT(a.paidAt||a.createdAt)]})]}),(a.receiptNumber||a.providerReference||a.note)&&(0,r.jsx)("p",{className:"devmod-note",children:a.receiptNumber||a.providerReference||a.note}),(0,r.jsx)("button",{type:"button",onClick:()=>e?.("invoices"),children:"Open invoices"})]},a.id)),!G.length&&(0,r.jsx)(e$,{text:"No payments match your filters."})]})]}):(0,r.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":b},children:[(0,r.jsx)("style",{children:eO}),(0,r.jsx)(eL,{title:"Developer access required",text:"Sign in with a developer account to manage payments."})]})}function eq({eyebrow:e,title:a,description:t,viewMode:i,onViewMode:s,onRefresh:n,refreshing:d,actions:l}){return(0,r.jsxs)("section",{className:"devmod-header",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("h1",{children:a}),(0,r.jsx)("p",{children:t})]}),(0,r.jsxs)("div",{className:"devmod-header-actions",children:[(0,r.jsxs)("div",{className:"devmod-switch",children:[(0,r.jsx)("button",{className:"cards"===i?"active":"",onClick:()=>s("cards"),type:"button",children:"Cards"}),(0,r.jsx)("button",{className:"table"===i?"active":"",onClick:()=>s("table"),type:"button",children:"Table"}),(0,r.jsx)("button",{className:"analytics"===i?"active":"",onClick:()=>s("analytics"),type:"button",children:"Charts"})]}),l,(0,r.jsx)("button",{className:"devmod-soft-btn",type:"button",onClick:n,disabled:d,children:d?"Refreshing...":"Refresh"})]})]})}function eL({title:e,text:a}){return(0,r.jsxs)("section",{className:"devmod-state",children:[(0,r.jsx)("div",{className:"devmod-spinner"}),(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a})]})}function eI({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"devmod-stat",children:[(0,r.jsxs)("span",{children:[e,(0,r.jsx)("b",{children:i})]}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:t})]})}function eE({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`devmod-chip ${a}`,children:e})}function e$({text:e}){return(0,r.jsx)("div",{className:"devmod-empty",children:e})}function eF({title:e,description:a,children:t}){return(0,r.jsxs)("section",{className:"devmod-chart-card",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function eU({rows:e}){return(0,r.jsx)("div",{className:"devmod-legend",children:e.map((e,a)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{style:{background:eA[a%eA.length]}}),e.label,": ",e.value]},e.label))})}let eO=`
@keyframes devmodSpin{to{transform:rotate(360deg)}}.devmod-page{min-height:100dvh;width:100%;max-width:100%;padding:8px;padding-bottom:max(28px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--dev-primary) 10%,transparent),transparent 34rem),var(--bg,#f8fafc);color:var(--text,#0f172a);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);overflow-x:hidden}.devmod-page *{box-sizing:border-box}.devmod-page button,.devmod-page input,.devmod-page select{font:inherit;max-width:100%}.devmod-state{min-height:min(420px,calc(100dvh - 32px));display:grid;place-items:center;align-content:center;gap:10px;width:min(520px,100%);margin:0 auto;padding:22px;border-radius:28px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 24px 70px rgba(15,23,42,.08);text-align:center}.devmod-state h2{margin:0;font-size:clamp(18px,5vw,24px);font-weight:1000;letter-spacing:-.04em}.devmod-state p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.devmod-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--dev-primary) 18%,transparent);border-top-color:var(--dev-primary);animation:devmodSpin .8s linear infinite}.devmod-header{display:grid;gap:16px;border-radius:30px;padding:18px;color:#fff;background:radial-gradient(circle at 20% 10%,rgba(255,255,255,.18),transparent 20rem),linear-gradient(135deg,var(--dev-primary),#0f172a 72%);box-shadow:0 24px 70px rgba(15,23,42,.18);overflow:hidden}.devmod-header span{font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.14em;opacity:.82}.devmod-header h1{margin:8px 0 0;font-size:clamp(28px,8vw,44px);line-height:1.02;font-weight:1000;letter-spacing:-.07em}.devmod-header p{max-width:760px;margin:10px 0 0;font-size:13px;line-height:1.6;opacity:.9}.devmod-header-actions{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.devmod-switch{display:inline-flex;gap:5px;padding:5px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(14px)}.devmod-switch button{min-height:34px;border:0;border-radius:999px;padding:0 11px;background:transparent;color:rgba(255,255,255,.75);font-size:12px;font-weight:1000;cursor:pointer}.devmod-switch button.active{background:#fff;color:#0f172a;box-shadow:0 10px 24px rgba(15,23,42,.16)}.devmod-primary-btn,.devmod-soft-btn{min-height:40px;border:0;border-radius:999px;padding:0 13px;font-size:12px;font-weight:950;cursor:pointer}.devmod-primary-btn{background:#fff;color:#0f172a}.devmod-soft-btn{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);color:#fff}.devmod-error{margin-top:10px;padding:12px 14px;border-radius:20px;background:#fee2e2;color:#991b1b;font-size:13px;font-weight:850}.devmod-stat-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-stat{border:1px solid rgba(148,163,184,.22);border-radius:24px;padding:16px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-stat span{display:flex;justify-content:space-between;gap:10px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devmod-stat strong{display:block;margin-top:8px;font-size:clamp(24px,8vw,34px);line-height:1;font-weight:1000;letter-spacing:-.06em}.devmod-stat small{display:block;margin-top:8px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devmod-filters{display:grid;grid-template-columns:1fr;gap:8px;margin-top:10px;padding:10px;border-radius:24px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 18px 45px rgba(15,23,42,.05)}.devmod-filters input,.devmod-filters select{min-height:42px;width:100%;border:1px solid rgba(148,163,184,.3);border-radius:16px;padding:0 12px;background:#fff;color:#0f172a;font-size:13px;font-weight:800}.devmod-filters button{min-height:42px;border:0;border-radius:16px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:13px;font-weight:1000;cursor:pointer}.devmod-card-grid,.devmod-chart-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-record-card,.devmod-chart-card,.devmod-table-card{min-width:0;border:1px solid rgba(148,163,184,.22);border-radius:26px;padding:14px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-record-top{display:flex;align-items:center;justify-content:space-between;gap:10px}.devmod-avatar{width:42px;height:42px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:#fff;font-weight:1000}.devmod-record-card h3{margin:14px 0 0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-record-card p{margin:5px 0 0;color:var(--muted,#64748b);font-size:13px;line-height:1.45}.devmod-note{padding:10px;border-radius:16px;background:#f8fafc;color:#475569!important}.devmod-meta-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.devmod-meta-grid span{padding:10px;border-radius:16px;background:#f8fafc;color:#0f172a;font-size:12px;font-weight:850}.devmod-meta-grid b{display:block;color:var(--muted,#64748b);font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px}.devmod-record-card button{width:100%;min-height:40px;margin-top:14px;border:0;border-radius:999px;background:var(--dev-primary);color:#fff;font-size:12px;font-weight:1000;cursor:pointer}.devmod-chip{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border-radius:999px;font-size:11px;font-weight:1000;white-space:nowrap}.devmod-chip.green{background:#dcfce7;color:#166534}.devmod-chip.blue{background:#dbeafe;color:#1d4ed8}.devmod-chip.orange{background:#ffedd5;color:#c2410c}.devmod-chip.red{background:#fee2e2;color:#b91c1c}.devmod-chip.gray{background:#f1f5f9;color:#475569}.devmod-table-wrap{width:100%;overflow-x:auto}.devmod-table-wrap table{width:100%;min-width:900px;border-collapse:collapse}.devmod-table-wrap th{text-align:left;color:var(--muted,#64748b);font-size:11px;text-transform:uppercase;letter-spacing:.08em;padding:10px;border-bottom:1px solid rgba(148,163,184,.22)}.devmod-table-wrap td{padding:12px 10px;border-bottom:1px solid rgba(148,163,184,.16);font-size:13px}.devmod-table-wrap strong{font-weight:1000}.devmod-chart-card h2{margin:0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-chart-card p{margin:5px 0 10px;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.devmod-legend{display:flex;flex-wrap:wrap;gap:8px;padding-top:8px}.devmod-legend span{display:inline-flex;align-items:center;gap:6px;min-height:28px;border-radius:999px;padding:0 9px;background:#f8fafc;border:1px solid rgba(148,163,184,.18);color:#475569;font-size:11px;font-weight:900}.devmod-legend i{width:9px;height:9px;border-radius:999px}.devmod-empty{grid-column:1/-1;margin:0;padding:18px;border-radius:20px;background:#f8fafc;color:var(--muted,#64748b);font-size:13px;text-align:center;border:1px dashed rgba(148,163,184,.35)}@media(min-width:520px){.devmod-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-meta-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.devmod-filters{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(min-width:820px){.devmod-page{padding:14px}.devmod-header{padding:24px;grid-template-columns:1fr auto;align-items:end}.devmod-card-grid,.devmod-chart-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-filters{grid-template-columns:2fr repeat(5,1fr) auto}.devmod-stat-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
`,e_=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"];function eK(e){if(!e)return 0;let a="number"==typeof e?e:new Date(e).getTime();return Number.isFinite(a)?a:0}function eB(e){let a=eK(e);return a?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(a)):"Not set"}function eH(e){let a=String(e||"").toLowerCase();return["ok","healthy","active","resolved","success","completed","synced","enabled","open","paid"].includes(a)?"green":["pending","info","queued","processing","draft"].includes(a)?"blue":["warning","degraded","slow","retrying","medium","overdue"].includes(a)?"orange":["error","failed","critical","down","disabled","blocked","urgent","high","suspended"].includes(a)?"red":"gray"}function eG({eyebrow:e,title:a,description:t,viewMode:i,onViewMode:s,onRefresh:n,refreshing:d,actions:l}){return(0,r.jsxs)("section",{className:"devx-hero",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"devx-eyebrow",children:e}),(0,r.jsx)("h1",{children:a}),(0,r.jsx)("p",{children:t})]}),(0,r.jsxs)("div",{className:"devx-hero-actions",children:[(0,r.jsxs)("div",{className:"devx-switch",children:[(0,r.jsx)("button",{className:"cards"===i?"active":"",onClick:()=>s("cards"),type:"button",children:"Cards"}),(0,r.jsx)("button",{className:"table"===i?"active":"",onClick:()=>s("table"),type:"button",children:"Table"}),(0,r.jsx)("button",{className:"analytics"===i?"active":"",onClick:()=>s("analytics"),type:"button",children:"Charts"})]}),l,(0,r.jsx)("button",{className:"devx-glass-btn",onClick:n,disabled:d,type:"button",children:d?"Refreshing...":"Refresh"})]})]})}function eW({title:e,text:a}){return(0,r.jsxs)("section",{className:"devx-state",children:[(0,r.jsx)("div",{className:"devx-spinner"}),(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a})]})}function eV({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"devx-stat",children:[(0,r.jsxs)("span",{children:[e,(0,r.jsx)("b",{children:i})]}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:t})]})}function eJ({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`devx-chip ${a}`,children:e})}function eQ({text:e}){return(0,r.jsx)("div",{className:"devx-empty",children:e})}function eY({title:e,description:a,children:t}){return(0,r.jsxs)("section",{className:"devx-chart-card",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function eX({rows:e}){return(0,r.jsx)("div",{className:"devx-legend",children:e.map((e,a)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{style:{background:e_[a%e_.length]}}),e.label,": ",e.value]},`${e.label}-${a}`))})}function eZ(){let{accountId:e,authenticated:a,loading:t}=(0,g.F)(),{settings:s}=(0,x.t)(),d=s?.primaryColor||"var(--primary-color, #2563eb)",[u,h]=(0,i.useState)("cards"),[b,f]=(0,i.useState)([]),[v,y]=(0,i.useState)(!0),[j,w]=(0,i.useState)(!1),[k,N]=(0,i.useState)(""),[S,C]=(0,i.useState)(""),[A,z]=(0,i.useState)("all"),D=async(e=!1)=>{try{e?w(!0):y(!0),N("");let a=await (0,m.uE)("/health").catch(async()=>(0,m.uE)("/developer/system-health").catch(()=>[]));f((function(e,a=[]){if(Array.isArray(e))return e;if(!e||"object"!=typeof e)return[];for(let t of a)if(Array.isArray(e[t]))return e[t];return Array.isArray(e.data)?e.data:Array.isArray(e.items)?e.items:Array.isArray(e.results)?e.results:Array.isArray(e.records)?e.records:Array.isArray(e.rows)?e.rows:[]})(a,["services","checks","health","items"]).map((e,a)=>({...e,id:e.id||String(a)})))}catch(e){N(e?.message||"Could not load system health.")}finally{y(!1),w(!1)}};(0,i.useEffect)(()=>{if(!t){if(!a||!e)return void y(!1);D()}},[t,a,e]);let T=(0,i.useMemo)(()=>{let e=S.trim().toLowerCase();return b.filter(a=>{let t=JSON.stringify(a).toLowerCase(),r=String(a.status||a.severity||"open").toLowerCase();return(!e||t.includes(e))&&("all"===A||r===A)}).sort((e,a)=>eK(a.updatedAt||a.createdAt||a.checkedAt)-eK(e.updatedAt||e.createdAt||e.checkedAt))},[b,S,A]),P=b.filter(e=>"green"===eH(e.status)).length,L=b.filter(e=>"orange"===eH(e.status)).length,I=b.filter(e=>"red"===eH(e.status)).length,E=(0,i.useMemo)(()=>{var e;let a;return e=e=>String(e.status||e.status||"unknown"),a=new Map,b.forEach(t=>{let r=String(e(t)||"Unknown").trim()||"Unknown";a.set(r,(a.get(r)||0)+1)}),Array.from(a.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)},[b]),$=(0,i.useMemo)(()=>{let e=function(e=6){let a=new Date;return Array.from({length:e},(t,r)=>{let i=new Date(a.getFullYear(),a.getMonth()-(e-1-r),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(i)})}(6),a=new Map(e.map(e=>[e,0]));return b.forEach(e=>{let t,r=(t=eK(e.createdAt||e.updatedAt||e.checkedAt))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(t)):"Unknown";a.has(r)&&a.set(r,(a.get(r)||0)+1)}),e.map(e=>({label:e,value:a.get(e)||0}))},[b]);return v||t?(0,r.jsxs)("main",{className:"devx-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:e0}),(0,r.jsx)(eW,{title:"Loading system health...",text:"Preparing records, filters and analytics."})]}):a&&e?(0,r.jsxs)("main",{className:"devx-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:e0}),(0,r.jsx)(eG,{eyebrow:"Technical support",title:"System Health",description:"Monitor backend APIs, frontend PWA, network, sync, billing and service status.",viewMode:u,onViewMode:h,onRefresh:()=>D(!0),refreshing:j}),k&&(0,r.jsx)("section",{className:"devx-alert error",children:k}),(0,r.jsxs)("section",{className:"devx-stat-grid",children:[(0,r.jsx)(eV,{label:"Total",value:b.length,detail:`${T.length} after filters`,icon:"\uD83E\uDE7A"}),(0,r.jsx)(eV,{label:"Active / Open",value:P,detail:"Healthy or open records",icon:"✅"}),(0,r.jsx)(eV,{label:"Warnings",value:L,detail:"Needs attention",icon:"⚠️"}),(0,r.jsx)(eV,{label:"Critical",value:I,detail:"Failed or blocked records",icon:"\uD83D\uDEA8"})]}),(0,r.jsxs)("section",{className:"devx-toolbar",children:[(0,r.jsx)("input",{value:S,onChange:e=>C(e.target.value),placeholder:"Search records..."}),(0,r.jsxs)("select",{value:A,onChange:e=>z(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All statuses"}),(0,r.jsx)("option",{value:"open",children:"Open"}),(0,r.jsx)("option",{value:"pending",children:"Pending"}),(0,r.jsx)("option",{value:"resolved",children:"Resolved"}),(0,r.jsx)("option",{value:"healthy",children:"Healthy"}),(0,r.jsx)("option",{value:"failed",children:"Failed"}),(0,r.jsx)("option",{value:"critical",children:"Critical"}),(0,r.jsx)("option",{value:"info",children:"Info"})]}),(0,r.jsx)("button",{type:"button",onClick:()=>{C(""),z("all")},children:"Reset"})]}),"analytics"===u?(0,r.jsxs)("section",{className:"devx-chart-grid",children:[(0,r.jsx)(eY,{title:"Trend over time",description:"Records created or updated in the last six months.",children:(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(eS.Q,{data:$,children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"DeveloperSystemHealthTrend",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"8%",stopColor:"var(--dev-primary)",stopOpacity:.28}),(0,r.jsx)("stop",{offset:"95%",stopColor:"var(--dev-primary)",stopOpacity:.02})]})}),(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(p.m,{}),(0,r.jsx)(eC.Gk,{dataKey:"value",stroke:"var(--dev-primary)",fill:"url(#DeveloperSystemHealthTrend)",strokeWidth:3})]})})}),(0,r.jsxs)(eY,{title:"Status breakdown",description:"Current record distribution by status.",children:[(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:E,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:E.map((e,a)=>(0,r.jsx)(q.f,{fill:e_[a%e_.length]},a))})]})}),(0,r.jsx)(eX,{rows:E})]})]}):"table"===u?(0,r.jsxs)("section",{className:"devx-table-card",children:[(0,r.jsx)("div",{className:"devx-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Service"}),(0,r.jsx)("th",{children:"Area"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Latency"}),(0,r.jsx)("th",{children:"Uptime"}),(0,r.jsx)("th",{children:"Message"}),(0,r.jsx)("th",{children:"Checked"})]})}),(0,r.jsx)("tbody",{children:T.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("strong",{children:e.name})}),(0,r.jsx)("td",{children:e.service||"platform"}),(0,r.jsx)("td",{children:(0,r.jsx)(eJ,{tone:eH(e.status),children:e.status})}),(0,r.jsxs)("td",{children:[e.latencyMs??0,"ms"]}),(0,r.jsxs)("td",{children:[e.uptimePercent??0,"%"]}),(0,r.jsx)("td",{children:e.message||"—"}),(0,r.jsx)("td",{children:eB(e.checkedAt)})]},e.id))})]})}),!T.length&&(0,r.jsx)(eQ,{text:"No records match your filters."})]}):(0,r.jsxs)("section",{className:"devx-card-grid",children:[T.map(e=>(0,r.jsxs)("article",{className:"devx-card",children:[(0,r.jsxs)("div",{className:"devx-record-top",children:[(0,r.jsx)("span",{className:"devx-avatar",children:"\uD83E\uDE7A"}),(0,r.jsx)(eJ,{tone:eH(e.status||e.severity),children:e.status||e.severity||"open"})]}),(0,r.jsx)("h3",{children:e.name||"Service"}),(0,r.jsx)("p",{children:e.message||"No service message."}),(0,r.jsxs)("div",{className:"devx-meta-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Area"}),e.service||"platform"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Latency"}),e.latencyMs??0,"ms"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Checked"}),eB(e.checkedAt)]})]})]},e.id)),!T.length&&(0,r.jsx)(eQ,{text:"No records match your filters."})]})]}):(0,r.jsxs)("main",{className:"devx-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:e0}),(0,r.jsx)(eW,{title:"Developer access required",text:"Sign in to view system health."})]})}let e0=`
@keyframes devSpin{to{transform:rotate(360deg)}}.devx-page{min-height:100dvh;width:100%;max-width:100%;padding:8px;padding-bottom:max(28px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--dev-primary) 10%,transparent),transparent 34rem),var(--bg,#f8fafc);color:var(--text,#0f172a);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);overflow-x:hidden}.devx-page *{box-sizing:border-box}.devx-page button,.devx-page input,.devx-page select,.devx-page textarea{font:inherit;max-width:100%}.devx-page button{-webkit-tap-highlight-color:transparent}.devx-state{min-height:min(420px,calc(100dvh - 32px));display:grid;place-items:center;align-content:center;gap:10px;width:min(520px,100%);margin:0 auto;padding:22px;border-radius:28px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 24px 70px rgba(15,23,42,.08);text-align:center}.devx-state h2{margin:0;font-size:clamp(18px,5vw,24px);font-weight:1000;letter-spacing:-.04em}.devx-state p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.devx-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--dev-primary) 18%,transparent);border-top-color:var(--dev-primary);animation:devSpin .8s linear infinite}.devx-hero{display:grid;gap:16px;border-radius:30px;padding:18px;color:#fff;background:radial-gradient(circle at 20% 10%,rgba(255,255,255,.18),transparent 20rem),linear-gradient(135deg,var(--dev-primary),#0f172a 72%);box-shadow:0 24px 70px rgba(15,23,42,.18);overflow:hidden}.devx-eyebrow{display:inline-flex;font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.14em;opacity:.82}.devx-hero h1{margin:8px 0 0;font-size:clamp(28px,8vw,44px);line-height:1.02;font-weight:1000;letter-spacing:-.07em}.devx-hero p{max-width:760px;margin:10px 0 0;font-size:13px;line-height:1.6;opacity:.9}.devx-hero-actions{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.devx-switch{display:inline-flex;gap:5px;padding:5px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(14px)}.devx-switch button{min-height:34px;border:0;border-radius:999px;padding:0 11px;background:transparent;color:rgba(255,255,255,.75);font-size:12px;font-weight:1000;cursor:pointer}.devx-switch button.active{background:#fff;color:#0f172a;box-shadow:0 10px 24px rgba(15,23,42,.16)}.devx-white-btn,.devx-glass-btn,.devx-solid-btn,.devx-soft-btn{min-height:40px;border-radius:999px;padding:0 13px;font-size:12px;font-weight:950;cursor:pointer}.devx-white-btn{border:0;background:#fff;color:#0f172a}.devx-glass-btn{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.14);color:#fff}.devx-solid-btn{border:0;background:var(--dev-primary);color:#fff}.devx-soft-btn{border:0;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary)}.devx-alert{margin-top:10px;padding:12px 14px;border-radius:20px;font-size:13px;font-weight:850}.devx-alert.error{background:#fee2e2;color:#991b1b}.devx-alert.success{background:#dcfce7;color:#166534}.devx-stat-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devx-stat{border:1px solid rgba(148,163,184,.22);border-radius:24px;padding:16px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devx-stat span{display:flex;justify-content:space-between;gap:10px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devx-stat strong{display:block;margin-top:8px;font-size:clamp(24px,8vw,34px);line-height:1;font-weight:1000;letter-spacing:-.06em;overflow-wrap:anywhere}.devx-stat small{display:block;margin-top:8px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devx-toolbar{display:grid;grid-template-columns:1fr;gap:8px;margin-top:10px;padding:10px;border-radius:24px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 18px 45px rgba(15,23,42,.05)}.devx-toolbar input,.devx-toolbar select,.devx-toolbar textarea{min-height:42px;width:100%;border:1px solid rgba(148,163,184,.3);border-radius:16px;padding:0 12px;background:#fff;color:#0f172a;font-size:13px;font-weight:800}.devx-toolbar button{min-height:42px;border:0;border-radius:16px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:13px;font-weight:1000;cursor:pointer}.devx-card-grid,.devx-chart-grid,.devx-main-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devx-card,.devx-chart-card,.devx-table-card{min-width:0;border:1px solid rgba(148,163,184,.22);border-radius:26px;padding:14px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devx-record-top{display:flex;align-items:center;justify-content:space-between;gap:10px}.devx-avatar{width:42px;height:42px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:#fff;font-weight:1000}.devx-card h3{margin:14px 0 0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devx-card p,.devx-chart-card p{margin:5px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.devx-chart-card h2{margin:0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devx-meta-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.devx-meta-grid span{padding:10px;border-radius:16px;background:#f8fafc;color:#0f172a;font-size:12px;font-weight:850}.devx-meta-grid b{display:block;color:var(--muted,#64748b);font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px}.devx-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}.devx-actions button,.devx-actions input{min-height:38px;border:0;border-radius:999px;padding:0 12px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:12px;font-weight:1000}.devx-actions button{cursor:pointer}.devx-actions button.primary{background:var(--dev-primary);color:#fff}.devx-chip{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border-radius:999px;font-size:11px;font-weight:1000;white-space:nowrap}.devx-chip.green{background:#dcfce7;color:#166534}.devx-chip.blue{background:#dbeafe;color:#1d4ed8}.devx-chip.orange{background:#ffedd5;color:#c2410c}.devx-chip.red{background:#fee2e2;color:#b91c1c}.devx-chip.gray{background:#f1f5f9;color:#475569}.devx-table-wrap{width:100%;overflow-x:auto}.devx-table-wrap table{width:100%;min-width:900px;border-collapse:collapse}.devx-table-wrap th{text-align:left;color:var(--muted,#64748b);font-size:11px;text-transform:uppercase;letter-spacing:.08em;padding:10px;border-bottom:1px solid rgba(148,163,184,.22)}.devx-table-wrap td{padding:12px 10px;border-bottom:1px solid rgba(148,163,184,.16);font-size:13px;vertical-align:top}.devx-table-wrap strong{font-weight:1000}.devx-empty{grid-column:1/-1;margin:0;padding:18px;border-radius:20px;background:#f8fafc;color:var(--muted,#64748b);font-size:13px;text-align:center;border:1px dashed rgba(148,163,184,.35)}.devx-legend{display:flex;flex-wrap:wrap;gap:8px;padding-top:8px}.devx-legend span{display:inline-flex;align-items:center;gap:6px;min-height:28px;border-radius:999px;padding:0 9px;background:#f8fafc;border:1px solid rgba(148,163,184,.18);color:#475569;font-size:11px;font-weight:900}.devx-legend i{width:9px;height:9px;border-radius:999px}@media(min-width:520px){.devx-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devx-toolbar{grid-template-columns:repeat(2,minmax(0,1fr))}.devx-meta-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:760px){.devx-card-grid,.devx-chart-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(min-width:920px){.devx-page{padding:14px}.devx-hero{grid-template-columns:1fr auto;align-items:end;padding:24px}.devx-stat-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.devx-toolbar{grid-template-columns:2fr repeat(4,minmax(130px,1fr)) auto}.devx-main-grid{grid-template-columns:1.3fr .7fr}}@media(min-width:1180px){.devx-card-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
`,e1=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"];function e2(e){let a=function(e){if(!e)return 0;let a="number"==typeof e?e:new Date(e).getTime();return Number.isFinite(a)?a:0}(e);return a?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(a)):"Not set"}function e4(e,a){let t=new Map;return e.forEach(e=>{let r=String(a(e)||"Unknown").trim()||"Unknown";t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)}function e8({eyebrow:e,title:a,description:t,viewMode:i,onViewMode:s,onRefresh:n,refreshing:d,actions:l}){return(0,r.jsxs)("section",{className:"devx-hero",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"devx-eyebrow",children:e}),(0,r.jsx)("h1",{children:a}),(0,r.jsx)("p",{children:t})]}),(0,r.jsxs)("div",{className:"devx-hero-actions",children:[(0,r.jsxs)("div",{className:"devx-switch",children:[(0,r.jsx)("button",{className:"cards"===i?"active":"",onClick:()=>s("cards"),type:"button",children:"Cards"}),(0,r.jsx)("button",{className:"table"===i?"active":"",onClick:()=>s("table"),type:"button",children:"Table"}),(0,r.jsx)("button",{className:"analytics"===i?"active":"",onClick:()=>s("analytics"),type:"button",children:"Charts"})]}),l,(0,r.jsx)("button",{className:"devx-glass-btn",onClick:n,disabled:d,type:"button",children:d?"Refreshing...":"Refresh"})]})]})}function e5({title:e,text:a}){return(0,r.jsxs)("section",{className:"devx-state",children:[(0,r.jsx)("div",{className:"devx-spinner"}),(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a})]})}function e3({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"devx-stat",children:[(0,r.jsxs)("span",{children:[e,(0,r.jsx)("b",{children:i})]}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:t})]})}function e6({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`devx-chip ${a}`,children:e})}function e9({text:e}){return(0,r.jsx)("div",{className:"devx-empty",children:e})}function e7({title:e,description:a,children:t}){return(0,r.jsxs)("section",{className:"devx-chart-card",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function ae({rows:e}){return(0,r.jsx)("div",{className:"devx-legend",children:e.map((e,a)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{style:{background:e1[a%e1.length]}}),e.label,": ",e.value]},`${e.label}-${a}`))})}let aa=[{key:"platformName",label:"Platform Name",value:"Eleeveon",category:"Branding",description:"Name shown across developer tools.",type:"text"},{key:"defaultCurrency",label:"Default Currency",value:"GHS",category:"Billing",description:"Default billing currency.",type:"text"},{key:"trialDays",label:"Default Trial Days",value:14,category:"Billing",description:"Trial length for new accounts.",type:"number"},{key:"maintenanceMode",label:"Maintenance Mode",value:!1,category:"System",description:"Temporarily restrict platform access.",type:"boolean"},{key:"allowNewSignups",label:"Allow New Signups",value:!0,category:"Access",description:"Permit new SaaS client registration.",type:"boolean"},{key:"enableAdvancedAnalytics",label:"Advanced Analytics",value:!0,category:"Features",description:"Enable platform-wide charts and insights.",type:"boolean"},{key:"enableApiAccess",label:"API Access",value:!1,category:"Integrations",description:"Allow external API keys and integrations.",type:"boolean"}],at=`
@keyframes devSpin{to{transform:rotate(360deg)}}.devx-page{min-height:100dvh;width:100%;max-width:100%;padding:8px;padding-bottom:max(28px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--dev-primary) 10%,transparent),transparent 34rem),var(--bg,#f8fafc);color:var(--text,#0f172a);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);overflow-x:hidden}.devx-page *{box-sizing:border-box}.devx-page button,.devx-page input,.devx-page select,.devx-page textarea{font:inherit;max-width:100%}.devx-page button{-webkit-tap-highlight-color:transparent}.devx-state{min-height:min(420px,calc(100dvh - 32px));display:grid;place-items:center;align-content:center;gap:10px;width:min(520px,100%);margin:0 auto;padding:22px;border-radius:28px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 24px 70px rgba(15,23,42,.08);text-align:center}.devx-state h2{margin:0;font-size:clamp(18px,5vw,24px);font-weight:1000;letter-spacing:-.04em}.devx-state p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.devx-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--dev-primary) 18%,transparent);border-top-color:var(--dev-primary);animation:devSpin .8s linear infinite}.devx-hero{display:grid;gap:16px;border-radius:30px;padding:18px;color:#fff;background:radial-gradient(circle at 20% 10%,rgba(255,255,255,.18),transparent 20rem),linear-gradient(135deg,var(--dev-primary),#0f172a 72%);box-shadow:0 24px 70px rgba(15,23,42,.18);overflow:hidden}.devx-eyebrow{display:inline-flex;font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.14em;opacity:.82}.devx-hero h1{margin:8px 0 0;font-size:clamp(28px,8vw,44px);line-height:1.02;font-weight:1000;letter-spacing:-.07em}.devx-hero p{max-width:760px;margin:10px 0 0;font-size:13px;line-height:1.6;opacity:.9}.devx-hero-actions{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.devx-switch{display:inline-flex;gap:5px;padding:5px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(14px)}.devx-switch button{min-height:34px;border:0;border-radius:999px;padding:0 11px;background:transparent;color:rgba(255,255,255,.75);font-size:12px;font-weight:1000;cursor:pointer}.devx-switch button.active{background:#fff;color:#0f172a;box-shadow:0 10px 24px rgba(15,23,42,.16)}.devx-white-btn,.devx-glass-btn,.devx-solid-btn,.devx-soft-btn{min-height:40px;border-radius:999px;padding:0 13px;font-size:12px;font-weight:950;cursor:pointer}.devx-white-btn{border:0;background:#fff;color:#0f172a}.devx-glass-btn{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.14);color:#fff}.devx-solid-btn{border:0;background:var(--dev-primary);color:#fff}.devx-soft-btn{border:0;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary)}.devx-alert{margin-top:10px;padding:12px 14px;border-radius:20px;font-size:13px;font-weight:850}.devx-alert.error{background:#fee2e2;color:#991b1b}.devx-alert.success{background:#dcfce7;color:#166534}.devx-stat-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devx-stat{border:1px solid rgba(148,163,184,.22);border-radius:24px;padding:16px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devx-stat span{display:flex;justify-content:space-between;gap:10px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devx-stat strong{display:block;margin-top:8px;font-size:clamp(24px,8vw,34px);line-height:1;font-weight:1000;letter-spacing:-.06em;overflow-wrap:anywhere}.devx-stat small{display:block;margin-top:8px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devx-toolbar{display:grid;grid-template-columns:1fr;gap:8px;margin-top:10px;padding:10px;border-radius:24px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 18px 45px rgba(15,23,42,.05)}.devx-toolbar input,.devx-toolbar select,.devx-toolbar textarea{min-height:42px;width:100%;border:1px solid rgba(148,163,184,.3);border-radius:16px;padding:0 12px;background:#fff;color:#0f172a;font-size:13px;font-weight:800}.devx-toolbar button{min-height:42px;border:0;border-radius:16px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:13px;font-weight:1000;cursor:pointer}.devx-card-grid,.devx-chart-grid,.devx-main-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devx-card,.devx-chart-card,.devx-table-card{min-width:0;border:1px solid rgba(148,163,184,.22);border-radius:26px;padding:14px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devx-record-top{display:flex;align-items:center;justify-content:space-between;gap:10px}.devx-avatar{width:42px;height:42px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:#fff;font-weight:1000}.devx-card h3{margin:14px 0 0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devx-card p,.devx-chart-card p{margin:5px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.devx-chart-card h2{margin:0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devx-meta-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.devx-meta-grid span{padding:10px;border-radius:16px;background:#f8fafc;color:#0f172a;font-size:12px;font-weight:850}.devx-meta-grid b{display:block;color:var(--muted,#64748b);font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px}.devx-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}.devx-actions button,.devx-actions input{min-height:38px;border:0;border-radius:999px;padding:0 12px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:12px;font-weight:1000}.devx-actions button{cursor:pointer}.devx-actions button.primary{background:var(--dev-primary);color:#fff}.devx-chip{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border-radius:999px;font-size:11px;font-weight:1000;white-space:nowrap}.devx-chip.green{background:#dcfce7;color:#166534}.devx-chip.blue{background:#dbeafe;color:#1d4ed8}.devx-chip.orange{background:#ffedd5;color:#c2410c}.devx-chip.red{background:#fee2e2;color:#b91c1c}.devx-chip.gray{background:#f1f5f9;color:#475569}.devx-table-wrap{width:100%;overflow-x:auto}.devx-table-wrap table{width:100%;min-width:900px;border-collapse:collapse}.devx-table-wrap th{text-align:left;color:var(--muted,#64748b);font-size:11px;text-transform:uppercase;letter-spacing:.08em;padding:10px;border-bottom:1px solid rgba(148,163,184,.22)}.devx-table-wrap td{padding:12px 10px;border-bottom:1px solid rgba(148,163,184,.16);font-size:13px;vertical-align:top}.devx-table-wrap strong{font-weight:1000}.devx-empty{grid-column:1/-1;margin:0;padding:18px;border-radius:20px;background:#f8fafc;color:var(--muted,#64748b);font-size:13px;text-align:center;border:1px dashed rgba(148,163,184,.35)}.devx-legend{display:flex;flex-wrap:wrap;gap:8px;padding-top:8px}.devx-legend span{display:inline-flex;align-items:center;gap:6px;min-height:28px;border-radius:999px;padding:0 9px;background:#f8fafc;border:1px solid rgba(148,163,184,.18);color:#475569;font-size:11px;font-weight:900}.devx-legend i{width:9px;height:9px;border-radius:999px}@media(min-width:520px){.devx-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devx-toolbar{grid-template-columns:repeat(2,minmax(0,1fr))}.devx-meta-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:760px){.devx-card-grid,.devx-chart-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(min-width:920px){.devx-page{padding:14px}.devx-hero{grid-template-columns:1fr auto;align-items:end;padding:24px}.devx-stat-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.devx-toolbar{grid-template-columns:2fr repeat(4,minmax(130px,1fr)) auto}.devx-main-grid{grid-template-columns:1.3fr .7fr}}@media(min-width:1180px){.devx-card-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
`;var ar=t(42563);let ai="eleeveon_developer_team_members",as="eleeveon_platform_team_auth_metadata",an=[{value:"developer",label:"Developer",backendRole:"developer",description:"Core engineering access. Use carefully."},{value:"platform_admin",label:"Platform Admin",backendRole:"platform_team",description:"Leads platform operations without raw database power."},{value:"support_agent",label:"Support Agent",backendRole:"platform_team",description:"Handles tickets, onboarding support and client issues."},{value:"billing_officer",label:"Billing Officer",backendRole:"platform_team",description:"Handles subscriptions, invoices and payment follow-up."},{value:"qa_tester",label:"QA Tester",backendRole:"platform_team",description:"Tests releases, features, bugs and platform quality."},{value:"sync_technician",label:"Sync Technician",backendRole:"platform_team",description:"Supports offline-first sync and diagnostics."}],ad=["Engineering","Support","Billing","QA","Operations","Management"],al=[{key:"canViewAccounts",label:"View Accounts",description:"Can view SaaS client accounts."},{key:"canManageAccounts",label:"Manage Accounts",description:"Can edit onboarding and safe account details."},{key:"canManageSubscriptions",label:"Manage Subscriptions",description:"Can help with plan and subscription support."},{key:"canViewPayments",label:"View Payments",description:"Can inspect billing and payment records."},{key:"canManagePayments",label:"Manage Payments",description:"Can verify or reconcile payment records."},{key:"canResolveSupport",label:"Resolve Support",description:"Can handle and close support tickets."},{key:"canViewDiagnostics",label:"View Diagnostics",description:"Can inspect sync and system health tools."},{key:"canViewAuditLogs",label:"View Audit Logs",description:"Can inspect security and activity logs.",danger:!0},{key:"canManageReleases",label:"Manage Releases",description:"Can prepare releases, rollbacks and changelogs.",danger:!0},{key:"canManageBackups",label:"Manage Backups",description:"Can run backup and recovery operations.",danger:!0},{key:"canManageSettings",label:"Manage Settings",description:"Can change platform-team settings.",danger:!0}],ao={canViewAccounts:!1,canManageAccounts:!1,canManageSubscriptions:!1,canViewPayments:!1,canManagePayments:!1,canResolveSupport:!1,canViewDiagnostics:!1,canViewAuditLogs:!1,canManageReleases:!1,canManageBackups:!1,canManageSettings:!1},ac={developer:Object.fromEntries(Object.keys(ao).map(e=>[e,!0])),platform_admin:{...ao,canViewAccounts:!0,canManageAccounts:!0,canManageSubscriptions:!0,canViewPayments:!0,canResolveSupport:!0,canViewDiagnostics:!0,canViewAuditLogs:!0,canManageReleases:!0},support_agent:{...ao,canViewAccounts:!0,canResolveSupport:!0,canViewDiagnostics:!0},billing_officer:{...ao,canViewAccounts:!0,canManageSubscriptions:!0,canViewPayments:!0,canManagePayments:!0},qa_tester:{...ao,canViewDiagnostics:!0,canManageReleases:!0},sync_technician:{...ao,canViewAccounts:!0,canResolveSupport:!0,canViewDiagnostics:!0}},ap={fullName:"",email:"",phone:"",role:"support_agent",department:"Support",title:"",status:"active",permissions:{...ac.support_agent},temporaryPassword:"",mustChangePassword:!0},au=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],am=(e,a=[])=>{if(Array.isArray(e))return e;if(!e||"object"!=typeof e)return[];for(let t of a)if(Array.isArray(e[t]))return e[t];return Array.isArray(e.data)?e.data:Array.isArray(e.items)?e.items:Array.isArray(e.results)?e.results:Array.isArray(e.records)?e.records:Array.isArray(e.rows)?e.rows:[]},ag=e=>{if(!e)return 0;let a="number"==typeof e?e:new Date(e).getTime();return Number.isFinite(a)?a:0};function ax(e){let a=String(e||"auth").replace(/[^a-zA-Z0-9_-]/g,""),t="u">typeof crypto&&"function"==typeof crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`;return`${a}_${t}`}function ah(e){let a=e?.schema?.primKey;return a?.keyPath==="id"&&a?.auto===!1}function ab(e){return ah(e)?new Date().toISOString():Date.now()}function af(...e){let a=ar.db;for(let t of e)if(a[t])return a[t];return null}async function av(...e){let a=af(...e);return a?.toArray?a.toArray():[]}function ay(e){return String(e??"").trim().toLowerCase()}function aj(e){return String(e??"").trim().replace(/\s+/g," ")}function aw(e){let a=ay(e).split("@")[0].replace(/[^a-zA-Z0-9._-]/g,""),t=Math.random().toString(36).slice(2,6).toUpperCase();return`${a||"team"}@${new Date().getFullYear()}${t}`}function ak(e){return e?.id??e?.localId}let aN=e=>an.find(a=>a.value===e),aS=e=>aN(e)?.label||String(e||"Team Member"),aC=e=>aN(e)?.backendRole||"platform_team",aA=e=>"active"===e?"green":"suspended"===e?"red":"gray",az=e=>e?Object.values(e).filter(Boolean).length:0;async function aD(e,a){try{return await (0,m.uE)(e,{method:a.method,body:a.body})}catch(r){let t=String(r?.message||r||"Request failed");throw Error(`${a.method} ${e} failed: ${t}`)}}async function aT(e){let a=null;for(let t of e)try{return await aD(t.endpoint,{method:t.method,body:t.body})}catch(e){if(a=e,!function(e){let a=String(e?.message||e?.statusText||e||"").toLowerCase();return e?.status===404||e?.statusCode===404||a.includes("404")||a.includes("not found")||a.includes("cannot ")||a.includes("no route")}(e))break}throw a||Error("No auth endpoint accepted the request.")}function aP(e){return Array.isArray(e)?e:Array.isArray(e?.data)?e.data:Array.isArray(e?.items)?e.items:Array.isArray(e?.rows)?e.rows:Array.isArray(e?.results)?e.results:Array.isArray(e?.users)?e.users:Array.isArray(e?.members)?e.members:[]}function aR(){try{return am(JSON.parse(window.localStorage.getItem(as)||"[]"),["meta","members"])}catch{return[]}}function aM(e){try{window.localStorage.setItem(as,JSON.stringify(e))}catch{}}function aq(){try{return am(JSON.parse(window.localStorage.getItem(ai)||"[]"),["members","team"]).map((e,a)=>aE(e,a))}catch{return[]}}function aL(e){try{window.localStorage.setItem(ai,JSON.stringify(e))}catch{}}function aI(e,a,t){let r=ay(e?.email||a?.email),i=String(ak(e)||a?.userId||""),s=String(a?.id||a?.localId||"");return t.find(e=>e.userId&&i&&String(e.userId)===i||e.membershipId&&s&&String(e.membershipId)===s||e.email&&r&&ay(e.email)===r)}function aE(e,a){let t=e.platformRole||e.role||"support_agent",r=an.some(e=>e.value===t)?t:"developer"===e.role?"developer":"support_agent",i=e.backendRole||aC(r);return{id:String(e.id||e.localId||e.userId||e.email||`team-${a}-${Date.now()}`),userId:e.userId||e.id,membershipId:e.membershipId,fullName:e.fullName||e.name||e.displayName||"Unnamed Team Member",email:ay(e.email),phone:e.phone||"",role:r,backendRole:i,department:e.department||"Support",title:e.title||e.jobTitle||aS(r),status:e.status||(!1===e.active?"inactive":"active"),permissions:{...ao,...ac[r],...e.permissions||{}},temporaryPassword:e.temporaryPassword,mustChangePassword:!!e.mustChangePassword,lastActiveAt:e.lastActiveAt||e.lastLoginAt||e.updatedAt||null,createdAt:e.createdAt||Date.now(),updatedAt:e.updatedAt||Date.now()}}function a$(e,a,t){let r=a.filter(e=>{let a=String(e.role||"").toLowerCase();return!e.isDeleted&&("developer"===a||"platform_team"===a||"platform_admin"===a)}).map((a,r)=>{let i=e.find(e=>String(ak(e)||"")===String(a?.userId??a?.userLocalId??a?.accountUserId??""))||e.find(e=>ay(e.email)===ay(a.email)),s=aI(i,a,t),n="developer"===String(a.role||i?.role||"platform_team")?"developer":"platform_team",d=s?.platformRole||("developer"===n?"developer":"support_agent");return aE({id:ak(i)||a.userId||a.id,userId:ak(i)||a.userId,membershipId:a.id||a.localId,fullName:i?.fullName||i?.name||a.fullName||i?.email||a.email,email:i?.email||a.email,phone:i?.phone,role:d,backendRole:n,department:s?.department,title:s?.title,permissions:s?.permissions,status:!1===a.active||i?.active===!1||"inactive"===a.status||i?.status==="inactive"?"inactive":"suspended"===a.status||i?.status==="suspended"?"suspended":"active",temporaryPassword:s?.temporaryPassword||i?.temporaryPassword,mustChangePassword:s?.mustChangePassword??a.mustChangePassword??i?.mustChangePassword,lastActiveAt:i?.lastLoginAt||i?.updatedAt,createdAt:a.createdAt||i?.createdAt,updatedAt:a.updatedAt||i?.updatedAt||s?.updatedAt},r)}),i=new Set(r.map(e=>ay(e.email)).filter(Boolean));return[...r,...e.filter(e=>{let a=String(e.role||"").toLowerCase(),t=ay(e.email);return!e.isDeleted&&!i.has(t)&&("developer"===a||"platform_team"===a)}).map((e,a)=>{let r=aI(e,void 0,t),i="developer"===e.role?"developer":"platform_team",s=r?.platformRole||("developer"===i?"developer":"support_agent");return aE({id:ak(e),userId:ak(e),fullName:e.fullName||e.name||e.email,email:e.email,phone:e.phone,role:s,backendRole:i,department:r?.department,title:r?.title,permissions:r?.permissions,status:!1===e.active||"inactive"===e.status?"inactive":"suspended"===e.status?"suspended":"active",temporaryPassword:r?.temporaryPassword||e.temporaryPassword,mustChangePassword:r?.mustChangePassword??e.mustChangePassword,lastActiveAt:e.lastLoginAt||e.updatedAt,createdAt:e.createdAt,updatedAt:e.updatedAt||r?.updatedAt},a)})].sort((e,a)=>("active"===e.status?-1:1)-("active"===a.status?-1:1)||ag(a.updatedAt||a.createdAt)-ag(e.updatedAt||e.createdAt))}function aF(e){return{fullName:e.fullName,email:e.email,phone:e.phone||void 0,password:e.password,role:e.role,mustChangePassword:e.mustChangePassword,platformRole:e.platformRole,department:e.department,title:e.title,permissions:e.permissions,active:e.active}}function aU(e){return{fullName:e.fullName,phone:e.phone||void 0,role:e.role,platformRole:e.platformRole,department:e.department,title:e.title,permissions:e.permissions,active:e.active}}function aO(e,a){return e?.user||e?.appUser||e?.accountUser||e?.data?.user||e?.data?.appUser||e?.data?.accountUser||e?.data||e||a}async function a_(){let e=await aT([{endpoint:"/accounts/me/users?role=platform_team",method:"GET"},{endpoint:"/accounts/me/users?role=developer",method:"GET"},{endpoint:"/accounts/me/users",method:"GET"}]);if(Array.isArray(e))return e;let a=await aD("/accounts/me/users?role=developer",{method:"GET"}).catch(()=>null),t=aP(e),r=aP(a),i=new Map;return[...t,...r].forEach(e=>i.set(ay(e.email||e.id),e)),Array.from(i.values())}async function aK(e){if(e.userId){let a=await aT([{endpoint:`/accounts/users/${encodeURIComponent(e.userId)}`,method:"PATCH",body:aU(e)},{endpoint:`/developer/team/${encodeURIComponent(e.userId)}`,method:"PATCH",body:aU(e)},{endpoint:`/platform-team/${encodeURIComponent(e.userId)}`,method:"PATCH",body:aU(e)}]),t=null;try{t=await aD(`/accounts/users/${encodeURIComponent(e.userId)}/status`,{method:"PATCH",body:{active:e.active}})}catch(e){console.warn("Failed to update platform team user status:",e)}return{user:{...a||{},...t||{},id:e.userId,accountId:e.accountId,email:e.email,fullName:e.fullName,phone:e.phone,role:e.role,active:e.active},membership:{id:e.membershipId,accountId:e.accountId,userId:e.userId,email:e.email,fullName:e.fullName,role:e.role,schoolId:null,branchId:null,teacherLocalId:null,studentLocalId:null,parentLocalId:null,active:e.active,status:e.status}}}let a=await aT([{endpoint:"/accounts/me/users",method:"POST",body:aF(e)},{endpoint:"/developer/team",method:"POST",body:aF(e)},{endpoint:"/platform-team",method:"POST",body:aF(e)}]),t=a?.memberships?.find?.(a=>String(a.role)===e.role)||a?.memberships?.[0]||{accountId:e.accountId,userId:ak(a),email:e.email,fullName:e.fullName,role:e.role,schoolId:null,branchId:null,teacherLocalId:null,studentLocalId:null,parentLocalId:null,active:e.active,status:e.status};return{user:a,membership:t}}async function aB(e){let a=af("users","accountUsers","appUsers");if(!a)return;let t=ab(a),r=ak(e.user)||ax("user"),i={...e.user,id:r,accountId:e.payload.accountId,fullName:e.payload.fullName,name:e.payload.name,email:e.payload.email,phone:e.payload.phone,role:e.payload.role,active:e.payload.active,status:e.payload.status,temporaryPassword:e.payload.temporaryPassword,mustChangePassword:e.payload.mustChangePassword,isDeleted:!1,updatedAt:t},s=await a.get(r).catch(()=>void 0)||await a.where?.("email")?.equals?.(e.payload.email)?.first?.().catch(()=>void 0);s?.id?await a.update(s.id,{...i,version:Number(s.version||0)+1}):await a.add({...ah(a)?{id:r}:{},...i,createdAt:t,version:1})}async function aH(e){let a=af("userMemberships","memberships");if(!a)return;let t=ab(a),r=String(ak(e.user)||e.payload.userId||""),i=e.membership.id||e.payload.membershipId||ax("membership"),s={...e.membership,id:i,accountId:e.payload.accountId,userId:r,userLocalId:null,accountUserId:null,fullName:e.payload.fullName,email:e.payload.email,role:e.payload.role,schoolId:null,branchId:null,teacherLocalId:null,studentLocalId:null,parentLocalId:null,active:e.payload.active,status:e.payload.status,mustChangePassword:e.payload.mustChangePassword,isDeleted:!1,updatedAt:t},n=await a.get(i).catch(()=>void 0)||await a.where?.("userId")?.equals?.(r)?.first?.().catch(()=>void 0);n?.id?await a.update(n.id,{...s,version:Number(n.version||0)+1}):await a.add({...ah(a)?{id:i}:{},...s,createdAt:t,version:1})}async function aG(e){let a=af("userMemberships","memberships"),t=af("users","accountUsers","appUsers");if(a&&e.membershipId)try{await a.delete(e.membershipId)}catch(e){console.warn("Failed to remove local platform team membership cache:",e)}if(t&&e.userId)try{await t.delete(e.userId)}catch(e){console.warn("Failed to remove local platform team user cache:",e)}}let aW=(e,a)=>{let t=new Map;return e.forEach(e=>{let r=String(a(e)||"Unknown").trim()||"Unknown";t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)};function aV(e,a){let t=e.role,r=aC(t),i=ay(e.email),s=e.temporaryPassword.trim()||aw(i);return{accountId:a,fullName:e.fullName.trim(),name:e.fullName.trim(),email:i,phone:aj(e.phone)||void 0,password:s,temporaryPassword:s,role:r,platformRole:t,department:e.department,title:e.title.trim()||aS(t),permissions:e.permissions,mustChangePassword:e.mustChangePassword,active:"active"===e.status,status:e.status,userId:e.userId,membershipId:e.membershipId}}function aJ({members:e,onEdit:a,onStatus:t,onDelete:i,navigate:s}){return(0,r.jsxs)("section",{className:"devteam-card-grid",children:[e.map(e=>{let n,d;return(0,r.jsxs)("article",{className:`devteam-member-card ${e.status}`,children:[(0,r.jsxs)("div",{className:"devteam-member-top",children:[(0,r.jsx)("span",{className:"devteam-avatar",children:String(e.fullName||"Team").split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]?.toUpperCase()).join("")||"TM"}),(0,r.jsx)(a1,{tone:aA(e.status),children:e.status})]}),(0,r.jsx)("h2",{children:e.fullName}),(0,r.jsx)("p",{children:e.title||aS(e.role)}),(0,r.jsxs)("div",{className:"devteam-mini-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Email"}),e.email||"—"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Login Role"}),e.backendRole]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Team Role"}),aS(e.role)]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Department"}),e.department]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Permissions"}),az(e.permissions),"/",al.length]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Temp Password"}),e.temporaryPassword||"Hidden/changed"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Last Active"}),(n=ag(e.lastActiveAt))?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(n)):"Not set"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Updated"}),(d=ag(e.updatedAt))?new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(d)):"Not set"]})]}),(0,r.jsxs)("div",{className:"devteam-permission-pills",children:[al.filter(a=>e.permissions[a.key]).slice(0,5).map(e=>(0,r.jsx)("span",{children:e.label},e.key)),az(e.permissions)>5&&(0,r.jsxs)("span",{children:["+",az(e.permissions)-5," more"]}),!az(e.permissions)&&(0,r.jsx)("span",{children:"No permissions"})]}),(0,r.jsxs)("div",{className:"devteam-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Edit"}),"active"===e.status?(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"inactive"),children:"Deactivate"}):(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"active"),children:"Reactivate"}),"suspended"!==e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"suspended"),children:"Suspend"}),(0,r.jsx)("button",{type:"button",onClick:()=>s?.("auditLogs"),children:"Audit"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>i(e),children:"Remove"})]})]},e.id)}),!e.length&&(0,r.jsx)(a2,{text:"No platform team members match your filters."})]})}function aQ({members:e,onEdit:a,onStatus:t,onDelete:i}){return(0,r.jsxs)("section",{className:"devteam-table-card",children:[(0,r.jsx)("div",{className:"devteam-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Member"}),(0,r.jsx)("th",{children:"Login Role"}),(0,r.jsx)("th",{children:"Team Role"}),(0,r.jsx)("th",{children:"Department"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Permissions"}),(0,r.jsx)("th",{children:"Temporary Password"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:e.map(e=>{let s;return(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("strong",{children:e.fullName}),(0,r.jsx)("small",{children:e.email})]}),(0,r.jsx)("td",{children:(0,r.jsx)(a1,{tone:"developer"===e.backendRole?"purple":"blue",children:e.backendRole})}),(0,r.jsx)("td",{children:(0,r.jsx)(a1,{tone:"developer"===(s=e.role)?"purple":"platform_admin"===s?"blue":"billing_officer"===s?"green":"support_agent"===s?"orange":"gray",children:aS(e.role)})}),(0,r.jsx)("td",{children:e.department}),(0,r.jsx)("td",{children:(0,r.jsx)(a1,{tone:aA(e.status),children:e.status})}),(0,r.jsxs)("td",{children:[az(e.permissions),"/",al.length]}),(0,r.jsx)("td",{children:e.temporaryPassword||"Hidden/changed"}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"devteam-table-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Edit"}),"active"===e.status?(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"inactive"),children:"Deactivate"}):(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"active"),children:"Reactivate"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>i(e),children:"Remove"})]})})]},e.id)})})]})}),!e.length&&(0,r.jsx)(a2,{text:"No platform team members match your filters."})]})}function aY({roleChart:e,departmentChart:a,statusChart:t,growthChart:i}){return(0,r.jsxs)("section",{className:"devteam-analytics",children:[(0,r.jsx)(a0,{title:"Team Roles",children:(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(M.Fq,{data:e,dataKey:"value",nameKey:"label",innerRadius:52,outerRadius:88,children:e.map((e,a)=>(0,r.jsx)(q.f,{fill:au[a%au.length]},a))}),(0,r.jsx)(p.m,{})]})})}),(0,r.jsx)(a0,{title:"Departments",children:(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(d.E,{data:a,children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3"}),(0,r.jsx)(o.W,{dataKey:"label"}),(0,r.jsx)(c.h,{allowDecimals:!1}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--dev-primary)",radius:[8,8,0,0]})]})})}),(0,r.jsx)(a0,{title:"Status",children:(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(M.Fq,{data:t,dataKey:"value",nameKey:"label",outerRadius:88,children:t.map((e,a)=>(0,r.jsx)(q.f,{fill:au[(a+2)%au.length]},a))}),(0,r.jsx)(p.m,{})]})})}),(0,r.jsx)(a0,{title:"Added Over Time",children:(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(d.E,{data:i,children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3"}),(0,r.jsx)(o.W,{dataKey:"label"}),(0,r.jsx)(c.h,{allowDecimals:!1}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--dev-primary)",radius:[8,8,0,0]})]})})})]})}function aX({form:e,updateForm:a,setForm:t,saving:i,onClose:s,onSubmit:n}){return(0,r.jsx)("div",{className:"devteam-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("form",{className:"devteam-modal",onSubmit:n,children:[(0,r.jsxs)("div",{className:"devteam-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:e.id?"Edit Platform Team Login":"Add Platform Team Login"}),(0,r.jsx)("p",{children:e.id?"Update backend login profile and local team metadata.":"Creates AppUser + UserMembership first so the person can sign in."})]}),(0,r.jsx)("button",{type:"button",onClick:s,children:"\xd7"})]}),(0,r.jsxs)("div",{className:"devteam-form-grid",children:[(0,r.jsxs)("label",{children:["Full Name",(0,r.jsx)("input",{value:e.fullName,onChange:e=>a("fullName",e.target.value),placeholder:"e.g. Ama Mensah"})]}),(0,r.jsxs)("label",{children:["Email / Login",(0,r.jsx)("input",{value:e.email,onChange:e=>a("email",e.target.value),placeholder:"name@example.com"})]}),(0,r.jsxs)("label",{children:["Phone",(0,r.jsx)("input",{value:e.phone,onChange:e=>a("phone",e.target.value),placeholder:"024..."})]}),(0,r.jsxs)("label",{children:["Title",(0,r.jsx)("input",{value:e.title,onChange:e=>a("title",e.target.value),placeholder:"Support Lead"})]}),(0,r.jsxs)("label",{children:["Team Role",(0,r.jsx)("select",{value:e.role,onChange:e=>a("role",e.target.value),children:an.map(e=>(0,r.jsxs)("option",{value:e.value,children:[e.label," → login as ",e.backendRole]},e.value))})]}),(0,r.jsxs)("label",{children:["Department",(0,r.jsx)("select",{value:e.department,onChange:e=>a("department",e.target.value),children:ad.map(e=>(0,r.jsx)("option",{value:e,children:e},e))})]}),(0,r.jsxs)("label",{children:["Status",(0,r.jsxs)("select",{value:e.status,onChange:e=>a("status",e.target.value),children:[(0,r.jsx)("option",{value:"active",children:"Active"}),(0,r.jsx)("option",{value:"inactive",children:"Inactive"}),(0,r.jsx)("option",{value:"suspended",children:"Suspended"})]})]}),(0,r.jsxs)("label",{children:["Temporary Password",(0,r.jsxs)("div",{className:"password-row",children:[(0,r.jsx)("input",{value:e.temporaryPassword,onChange:e=>a("temporaryPassword",e.target.value),placeholder:"Required for first login"}),(0,r.jsx)("button",{type:"button",onClick:()=>a("temporaryPassword",aw(e.email)),children:"Generate"})]})]})]}),(0,r.jsxs)("label",{className:"devteam-check",children:[(0,r.jsx)("input",{type:"checkbox",checked:e.mustChangePassword,onChange:e=>a("mustChangePassword",e.target.checked)})," Force password change after first login"]}),(0,r.jsxs)("section",{className:"devteam-permissions",children:[(0,r.jsx)("h3",{children:"Permissions"}),(0,r.jsx)("p",{children:"These control what the team member should see in the platform-team working area. Backend role remains developer/platform_team."}),al.map(a=>(0,r.jsxs)("label",{className:a.danger?"danger":"",children:[(0,r.jsx)("input",{type:"checkbox",checked:!!e.permissions[a.key],onChange:e=>t(t=>({...t,permissions:{...t.permissions,[a.key]:e.target.checked}}))}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:a.label}),(0,r.jsx)("small",{children:a.description})]})]},a.key))]}),(0,r.jsxs)("div",{className:"devteam-modal-actions",children:[(0,r.jsx)("button",{type:"button",onClick:s,disabled:i,children:"Cancel"}),(0,r.jsx)("button",{type:"submit",disabled:i,children:i?"Saving...":e.id?"Save Changes":"Create Login Account"})]})]})})}function aZ({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"devteam-stat-card",children:[(0,r.jsx)("span",{children:i}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:e}),(0,r.jsx)("h2",{children:a}),(0,r.jsx)("small",{children:t})]})]})}function a0({title:e,children:a}){return(0,r.jsxs)("article",{className:"devteam-chart-card",children:[(0,r.jsx)("h2",{children:e}),a]})}function a1({tone:e,children:a}){return(0,r.jsx)("span",{className:`devteam-chip ${e}`,children:a})}function a2({text:e}){return(0,r.jsxs)("section",{className:"devteam-empty",children:[(0,r.jsx)("h2",{children:"No records found"}),(0,r.jsx)("p",{children:e})]})}let a4=`
.devteam-page{--dev-primary:#2563eb;min-height:100vh;padding:16px;background:linear-gradient(180deg,#eef4ff 0%,#f8fafc 34%,#ffffff 100%);color:#0f172a}.devteam-hero{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;padding:24px;border-radius:28px;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:white;box-shadow:0 24px 60px rgba(15,23,42,.18)}.devteam-eyebrow{text-transform:uppercase;letter-spacing:.14em;font-size:.72rem;font-weight:900;opacity:.8}.devteam-hero h1{font-size:clamp(1.8rem,4vw,3.1rem);line-height:1;margin:8px 0}.devteam-hero p{max-width:760px;margin:0;color:rgba(255,255,255,.88)}.devteam-hero-actions{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}.devteam-switch{display:flex;gap:4px;padding:4px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.24);border-radius:999px}.devteam-switch button,.devteam-glass-btn,.devteam-white-btn{border:0;border-radius:999px;padding:10px 14px;font-weight:900;cursor:pointer}.devteam-switch button{background:transparent;color:white}.devteam-switch button.active,.devteam-white-btn{background:white;color:#0f172a}.devteam-glass-btn{background:rgba(255,255,255,.16);color:white;border:1px solid rgba(255,255,255,.28)}.devteam-alert{margin:14px 0;padding:14px 16px;border-radius:18px;font-weight:800}.devteam-alert.error{background:#fef2f2;color:#991b1b;border:1px solid #fecaca}.devteam-alert.success{background:#ecfdf5;color:#065f46;border:1px solid #bbf7d0}.devteam-stat-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;margin:16px 0}.devteam-stat-card{display:flex;gap:12px;align-items:center;background:white;border:1px solid #e2e8f0;border-radius:22px;padding:16px;box-shadow:0 14px 36px rgba(15,23,42,.06)}.devteam-stat-card>span{display:grid;place-items:center;width:42px;height:42px;border-radius:16px;background:#eff6ff}.devteam-stat-card p,.devteam-stat-card h2{margin:0}.devteam-stat-card p{font-size:.8rem;color:#64748b;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.devteam-stat-card h2{font-size:1.8rem}.devteam-stat-card small{color:#64748b}.devteam-toolbar{display:grid;grid-template-columns:2fr 1fr 1fr 1fr auto;gap:10px;margin:16px 0}.devteam-toolbar input,.devteam-toolbar select,.devteam-toolbar button,.devteam-modal input,.devteam-modal select{width:100%;border:1px solid #dbe3ef;border-radius:16px;padding:12px 14px;background:white;color:#0f172a;outline:none}.devteam-toolbar button{font-weight:900;cursor:pointer}.devteam-card-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.devteam-member-card{background:white;border:1px solid #e2e8f0;border-radius:24px;padding:18px;box-shadow:0 18px 46px rgba(15,23,42,.07)}.devteam-member-card.suspended{border-color:#fecaca}.devteam-member-top{display:flex;justify-content:space-between;align-items:center}.devteam-avatar{display:grid;place-items:center;width:54px;height:54px;border-radius:20px;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:white;font-weight:950}.devteam-member-card h2{margin:14px 0 4px}.devteam-member-card p{margin:0 0 12px;color:#64748b}.devteam-mini-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.devteam-mini-grid span{background:#f8fafc;border:1px solid #edf2f7;border-radius:16px;padding:10px;min-width:0;word-break:break-word}.devteam-mini-grid b{display:block;color:#64748b;font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px}.devteam-permission-pills{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.devteam-permission-pills span{background:#eff6ff;color:#1d4ed8;border-radius:999px;padding:6px 9px;font-size:.75rem;font-weight:900}.devteam-actions,.devteam-table-actions,.devteam-modal-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}.devteam-actions button,.devteam-table-actions button,.devteam-modal-actions button{border:0;border-radius:999px;padding:9px 12px;font-weight:900;cursor:pointer;background:#eef2ff;color:#1e3a8a}.devteam-actions .danger,.devteam-table-actions .danger{background:#fef2f2;color:#991b1b}.devteam-chip{display:inline-flex;align-items:center;border-radius:999px;padding:6px 10px;font-size:.76rem;font-weight:950;text-transform:capitalize}.devteam-chip.green{background:#dcfce7;color:#166534}.devteam-chip.blue{background:#dbeafe;color:#1d4ed8}.devteam-chip.purple{background:#ede9fe;color:#6d28d9}.devteam-chip.orange{background:#ffedd5;color:#c2410c}.devteam-chip.red{background:#fee2e2;color:#b91c1c}.devteam-chip.gray{background:#f1f5f9;color:#475569}.devteam-table-card,.devteam-chart-card{background:white;border:1px solid #e2e8f0;border-radius:24px;padding:16px;box-shadow:0 18px 46px rgba(15,23,42,.07)}.devteam-table-wrap{overflow:auto}table{width:100%;border-collapse:collapse;min-width:920px}th,td{text-align:left;border-bottom:1px solid #edf2f7;padding:12px}th{font-size:.75rem;text-transform:uppercase;letter-spacing:.08em;color:#64748b}td small{display:block;color:#64748b;margin-top:3px}.devteam-analytics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.devteam-chart-card h2{margin:0 0 10px}.devteam-empty,.devteam-state{grid-column:1/-1;text-align:center;background:white;border:1px dashed #cbd5e1;border-radius:24px;padding:40px 18px}.devteam-spinner{width:42px;height:42px;border-radius:999px;border:4px solid #dbeafe;border-top-color:var(--dev-primary);animation:spin 1s linear infinite;margin:0 auto 12px}@keyframes spin{to{transform:rotate(360deg)}}.devteam-modal-backdrop{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:80;display:grid;place-items:center;padding:14px}.devteam-modal{width:min(940px,100%);max-height:92vh;overflow:auto;background:white;border-radius:28px;padding:18px;box-shadow:0 40px 90px rgba(15,23,42,.28)}.devteam-modal-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;margin-bottom:14px}.devteam-modal-head h2{margin:0}.devteam-modal-head p{margin:4px 0 0;color:#64748b}.devteam-modal-head button{border:0;background:#f1f5f9;width:40px;height:40px;border-radius:999px;font-size:1.5rem;cursor:pointer}.devteam-form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.devteam-modal label{font-weight:900;color:#334155}.devteam-modal label input,.devteam-modal label select{margin-top:6px}.password-row{display:flex;gap:8px}.password-row button{margin-top:6px;border:0;border-radius:14px;background:#0f172a;color:white;font-weight:900;padding:0 12px;cursor:pointer}.devteam-check{display:flex;align-items:center;gap:10px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:18px;padding:12px;margin:12px 0}.devteam-check input{width:auto!important;margin:0!important}.devteam-permissions{margin-top:10px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:22px;padding:14px}.devteam-permissions h3{margin:0}.devteam-permissions p{margin:4px 0 12px;color:#64748b}.devteam-permissions label{display:flex;gap:10px;align-items:flex-start;background:white;border:1px solid #e2e8f0;border-radius:16px;padding:10px;margin-bottom:8px}.devteam-permissions label.danger{border-color:#fed7aa}.devteam-permissions input{width:auto!important;margin-top:3px!important}.devteam-permissions small{display:block;color:#64748b;font-weight:500}.devteam-modal-actions{justify-content:flex-end}.devteam-modal-actions button[type=submit]{background:var(--dev-primary);color:white}.devteam-modal-actions button[type=button]{background:#f1f5f9;color:#0f172a}@media(max-width:1100px){.devteam-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devteam-card-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devteam-toolbar{grid-template-columns:1fr 1fr}.devteam-analytics{grid-template-columns:1fr}}@media(max-width:720px){.devteam-page{padding:10px}.devteam-hero{border-radius:22px;flex-direction:column}.devteam-hero-actions,.devteam-switch{width:100%}.devteam-switch button{flex:1}.devteam-white-btn,.devteam-glass-btn{width:100%}.devteam-stat-grid,.devteam-card-grid,.devteam-toolbar,.devteam-form-grid{grid-template-columns:1fr}.devteam-mini-grid{grid-template-columns:1fr}.devteam-modal{border-radius:20px;padding:14px}.password-row{flex-direction:column}.password-row button{padding:12px}}`,a8="eleeveon_developer_feature_flags",a5=["core","billing","reports","sync","portal","analytics","experimental"],a3=["development","staging","production"],a6=["owner","school_admin","branch_admin","teacher","accountant","parent","student","developer"],a9=["free","starter","growth","professional","enterprise"],a7={key:"",name:"",description:"",category:"experimental",status:"disabled",rolloutPercent:"0",environments:["development"],targetRoles:[],targetPlans:[],owner:"",riskLevel:"low"},te=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],ta=(e,a=[])=>{if(Array.isArray(e))return e;if(!e||"object"!=typeof e)return[];for(let t of a)if(Array.isArray(e[t]))return e[t];return Array.isArray(e.data)?e.data:Array.isArray(e.items)?e.items:Array.isArray(e.results)?e.results:Array.isArray(e.records)?e.records:Array.isArray(e.rows)?e.rows:[]},tt=e=>{if(!e)return 0;let a="number"==typeof e?e:new Date(e).getTime();return Number.isFinite(a)?a:0},tr=e=>{let a=tt(e);return a?new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(a)):"Not set"},ti=e=>e.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,""),ts=e=>{let a=Number(e);return Number.isFinite(a)?Math.min(100,Math.max(0,Math.round(a))):0},tn=e=>"enabled"===e?"green":"disabled"===e?"gray":"archived"===e?"orange":"gray",td=e=>"low"===e?"green":"medium"===e?"orange":"high"===e?"red":"gray",tl=(e,a)=>{let t=new Map;return e.forEach(e=>{let r=String(a(e)||"Unknown").trim()||"Unknown";t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)},to=(e,a)=>{let t=e.name||e.title||"Unnamed Feature",r=ti(e.key||e.code||t||`feature_${a+1}`);return{id:String(e.id||e.localId||r||`flag-${a}-${Date.now()}`),key:r,name:t,description:e.description||e.message||"",category:e.category||"experimental",status:e.status||(e.enabled?"enabled":"disabled"),rolloutPercent:ts(e.rolloutPercent??e.rollout??100*!!e.enabled),environments:Array.isArray(e.environments)?e.environments:e.environment?[e.environment]:["development"],targetRoles:Array.isArray(e.targetRoles)?e.targetRoles:[],targetPlans:Array.isArray(e.targetPlans)?e.targetPlans:[],owner:e.owner||e.ownerEmail||"",riskLevel:e.riskLevel||e.risk||"low",createdAt:e.createdAt||Date.now(),updatedAt:e.updatedAt||Date.now()}},tc=()=>{try{let e=window.localStorage.getItem(a8);if(!e)return[];return ta(JSON.parse(e),["flags","featureFlags"]).map(to)}catch{return[]}},tp=e=>{try{window.localStorage.setItem(a8,JSON.stringify(e))}catch{}},tu=(e,a)=>e.includes(a)?e.filter(e=>e!==a):[...e,a];function tm({navigate:e}){let{accountId:a,authenticated:t,loading:s}=(0,g.F)(),{settings:n}=(0,x.t)(),d=n?.primaryColor||"var(--primary-color, #2563eb)",[l,o]=(0,i.useState)("cards"),[c,p]=(0,i.useState)([]),[u,h]=(0,i.useState)(!0),[b,f]=(0,i.useState)(!1),[v,y]=(0,i.useState)(!1),[j,w]=(0,i.useState)(""),[k,N]=(0,i.useState)(""),[S,C]=(0,i.useState)(""),[A,z]=(0,i.useState)("all"),[D,T]=(0,i.useState)("all"),[P,R]=(0,i.useState)("all"),[M,q]=(0,i.useState)("all"),[L,I]=(0,i.useState)(!1),[E,$]=(0,i.useState)(a7),F=async(e=!1)=>{try{e?f(!0):h(!0),w(""),N("");let a=await (0,m.uE)("/developer/feature-flags").catch(async()=>(0,m.uE)("/feature-flags").catch(()=>null)),t=ta(a,["flags","featureFlags"]).map(to);t.length?(p(t),tp(t)):p(tc())}catch(e){w(e?.message||"Could not load feature flags from the server. Showing local saved flags."),p(tc())}finally{h(!1),f(!1)}};(0,i.useEffect)(()=>{if(!s){if(!t||!a)return void h(!1);F()}},[s,t,a]);let U=(0,i.useMemo)(()=>{let e=S.trim().toLowerCase();return c.filter(a=>{let t=`${a.name} ${a.key} ${a.description||""} ${a.owner||""} ${a.category} ${a.status}`.toLowerCase(),r=!e||t.includes(e),i="all"===A||a.status===A,s="all"===D||a.category===D,n="all"===P||a.environments.includes(P),d="all"===M||a.riskLevel===M;return r&&i&&s&&n&&d}).sort((e,a)=>{if(e.status!==a.status){if("enabled"===e.status)return -1;if("enabled"===a.status)return 1}return tt(a.updatedAt||a.createdAt)-tt(e.updatedAt||e.createdAt)})},[c,S,A,D,P,M]),O=c.filter(e=>"enabled"===e.status).length,_=c.filter(e=>"disabled"===e.status).length,K=c.filter(e=>"archived"===e.status).length,B=c.filter(e=>"high"===e.riskLevel).length,H=c.filter(e=>e.environments.includes("production")).length,G=c.length?Math.round(c.reduce((e,a)=>e+Number(a.rolloutPercent||0),0)/c.length):0,W=(0,i.useMemo)(()=>tl(c,e=>e.status),[c]),V=(0,i.useMemo)(()=>tl(c,e=>e.category),[c]),J=(0,i.useMemo)(()=>tl(c,e=>e.riskLevel),[c]),Q=(0,i.useMemo)(()=>[{label:"0%",min:0,max:0},{label:"1-24%",min:1,max:24},{label:"25-49%",min:25,max:49},{label:"50-74%",min:50,max:74},{label:"75-99%",min:75,max:99},{label:"100%",min:100,max:100}].map(e=>({label:e.label,value:c.filter(a=>a.rolloutPercent>=e.min&&a.rolloutPercent<=e.max).length})),[c]),Y=e=>{w(""),N(""),$({id:e.id,key:e.key,name:e.name,description:e.description||"",category:e.category,status:e.status,rolloutPercent:String(e.rolloutPercent),environments:e.environments,targetRoles:e.targetRoles,targetPlans:e.targetPlans,owner:e.owner||"",riskLevel:e.riskLevel}),I(!0)},X=()=>{v||(I(!1),$(a7))},Z=async e=>{if(e.preventDefault(),!E.name.trim())return void w("Feature name is required.");let a={id:E.id||`flag-${Date.now()}`,key:ti(E.key||E.name),name:E.name.trim(),description:E.description.trim(),category:E.category,status:E.status,rolloutPercent:ts(E.rolloutPercent),environments:E.environments,targetRoles:E.targetRoles,targetPlans:E.targetPlans,owner:E.owner.trim(),riskLevel:E.riskLevel,createdAt:Date.now(),updatedAt:Date.now()};if(!a.key)return void w("Feature key is required.");try{if(y(!0),w(""),N(""),E.id){let e=await (0,m.uE)(`/developer/feature-flags/${E.id}`,{method:"PATCH",body:JSON.stringify(a)}).catch(async()=>(0,m.uE)(`/feature-flags/${E.id}`,{method:"PATCH",body:JSON.stringify(a)}).catch(()=>null)),t=to(e?.flag||e?.data||e||a,0);p(e=>{let a=e.map(e=>e.id===E.id?{...e,...t,id:E.id,createdAt:e.createdAt,updatedAt:Date.now()}:e);return tp(a),a}),N("Feature flag updated.")}else{let e=await (0,m.uE)("/developer/feature-flags",{method:"POST",body:JSON.stringify(a)}).catch(async()=>(0,m.uE)("/feature-flags",{method:"POST",body:JSON.stringify(a)}).catch(()=>null)),t=to(e?.flag||e?.data||e||a,0);p(e=>{let a=e.some(e=>e.key===t.key)?e.map(e=>e.key===t.key?{...e,...t}:e):[t,...e];return tp(a),a}),N("Feature flag created.")}X()}catch(e){w(e?.message||"Could not save feature flag.")}finally{y(!1)}},ee=async(e,a)=>{try{w(""),N("");let t={...e,status:a,rolloutPercent:"enabled"===a&&0===e.rolloutPercent?100:e.rolloutPercent,updatedAt:Date.now()};await (0,m.uE)(`/developer/feature-flags/${e.id}`,{method:"PATCH",body:JSON.stringify({status:t.status,rolloutPercent:t.rolloutPercent})}).catch(async()=>(0,m.uE)(`/feature-flags/${e.id}`,{method:"PATCH",body:JSON.stringify({status:t.status,rolloutPercent:t.rolloutPercent})}).catch(()=>null)),p(a=>{let r=a.map(a=>a.id===e.id?t:a);return tp(r),r}),N(`Feature flag ${a}.`)}catch(e){w(e?.message||"Could not update feature flag.")}},ea=async(e,a)=>{try{w(""),N("");let t={...e,rolloutPercent:ts(a),updatedAt:Date.now()};await (0,m.uE)(`/developer/feature-flags/${e.id}`,{method:"PATCH",body:JSON.stringify({rolloutPercent:t.rolloutPercent})}).catch(async()=>(0,m.uE)(`/feature-flags/${e.id}`,{method:"PATCH",body:JSON.stringify({rolloutPercent:t.rolloutPercent})}).catch(()=>null)),p(a=>{let r=a.map(a=>a.id===e.id?t:a);return tp(r),r}),N("Rollout updated.")}catch(e){w(e?.message||"Could not update rollout.")}},et=e=>{window.confirm(`Remove ${e.name} from your local feature flag list?`)&&(p(a=>{let t=a.filter(a=>a.id!==e.id);return tp(t),t}),N("Feature flag removed locally."))};return u||s?(0,r.jsxs)("main",{className:"devflags-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:tN}),(0,r.jsxs)("section",{className:"devflags-state",children:[(0,r.jsx)("div",{className:"devflags-spinner"}),(0,r.jsx)("h2",{children:"Loading feature flags..."}),(0,r.jsx)("p",{children:"Preparing rollout controls, environments, targeting and analytics."})]})]}):t&&a?(0,r.jsxs)("main",{className:"devflags-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:tN}),(0,r.jsxs)("section",{className:"devflags-hero",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"devflags-eyebrow",children:"Feature control"}),(0,r.jsx)("h1",{children:"Feature Flags"}),(0,r.jsx)("p",{children:"Roll out beta features safely, target specific roles or plans, control production exposure, and disable risky changes without redeploying the whole platform."})]}),(0,r.jsxs)("div",{className:"devflags-hero-actions",children:[(0,r.jsxs)("div",{className:"devflags-switch",role:"tablist","aria-label":"Feature flag views",children:[(0,r.jsx)("button",{type:"button",className:"cards"===l?"active":"",onClick:()=>o("cards"),children:"Cards"}),(0,r.jsx)("button",{type:"button",className:"table"===l?"active":"",onClick:()=>o("table"),children:"Table"}),(0,r.jsx)("button",{type:"button",className:"analytics"===l?"active":"",onClick:()=>o("analytics"),children:"Charts"})]}),(0,r.jsx)("button",{type:"button",className:"devflags-white-btn",onClick:()=>{w(""),N(""),$(a7),I(!0)},children:"New Flag"}),(0,r.jsx)("button",{type:"button",className:"devflags-glass-btn",onClick:()=>F(!0),disabled:b,children:b?"Refreshing...":"Refresh"})]})]}),(j||k)&&(0,r.jsx)("section",{className:`devflags-alert ${j?"error":"success"}`,children:j||k}),(0,r.jsxs)("section",{className:"devflags-stat-grid",children:[(0,r.jsx)(tv,{label:"Flags",value:c.length,detail:`${U.length} shown`,icon:"\uD83D\uDEA9"}),(0,r.jsx)(tv,{label:"Enabled",value:O,detail:`${_} disabled`,icon:"✅"}),(0,r.jsx)(tv,{label:"Production",value:H,detail:`${K} archived`,icon:"\uD83D\uDE80"}),(0,r.jsx)(tv,{label:"Avg Rollout",value:`${G}%`,detail:`${B} high-risk flags`,icon:"\uD83D\uDCCA"})]}),(0,r.jsxs)("section",{className:"devflags-toolbar",children:[(0,r.jsx)("input",{value:S,onChange:e=>C(e.target.value),placeholder:"Search name, key, owner, description..."}),(0,r.jsxs)("select",{value:A,onChange:e=>z(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All statuses"}),(0,r.jsx)("option",{value:"enabled",children:"Enabled"}),(0,r.jsx)("option",{value:"disabled",children:"Disabled"}),(0,r.jsx)("option",{value:"archived",children:"Archived"})]}),(0,r.jsxs)("select",{value:D,onChange:e=>T(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All categories"}),a5.map(e=>(0,r.jsx)("option",{value:e,children:e},e))]}),(0,r.jsxs)("select",{value:P,onChange:e=>R(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All environments"}),a3.map(e=>(0,r.jsx)("option",{value:e,children:e},e))]}),(0,r.jsxs)("select",{value:M,onChange:e=>q(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All risk levels"}),(0,r.jsx)("option",{value:"low",children:"Low risk"}),(0,r.jsx)("option",{value:"medium",children:"Medium risk"}),(0,r.jsx)("option",{value:"high",children:"High risk"})]}),(0,r.jsx)("button",{type:"button",onClick:()=>{C(""),z("all"),T("all"),R("all"),q("all")},children:"Reset"})]}),"analytics"===l?(0,r.jsx)(th,{statusChart:W,categoryChart:V,riskChart:J,rolloutChart:Q}):"table"===l?(0,r.jsx)(tx,{flags:U,onEdit:Y,onStatus:ee,onRollout:ea,onDelete:et}):(0,r.jsx)(tg,{flags:U,onEdit:Y,onStatus:ee,onRollout:ea,onDelete:et,navigate:e}),L&&(0,r.jsx)(tb,{form:E,setForm:$,saving:v,onClose:X,onSubmit:Z})]}):(0,r.jsxs)("main",{className:"devflags-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:tN}),(0,r.jsxs)("section",{className:"devflags-state",children:[(0,r.jsx)("h2",{children:"Developer access required"}),(0,r.jsx)("p",{children:"Sign in with a developer account to manage platform feature flags."})]})]})}function tg({flags:e,onEdit:a,onStatus:t,onRollout:i,onDelete:s,navigate:n}){return(0,r.jsxs)("section",{className:"devflags-card-grid",children:[e.map(e=>(0,r.jsxs)("article",{className:`devflags-flag-card ${e.status}`,children:[(0,r.jsxs)("div",{className:"devflags-flag-top",children:[(0,r.jsx)("span",{className:"devflags-flag-icon",children:"\uD83D\uDEA9"}),(0,r.jsxs)("div",{className:"devflags-chip-row",children:[(0,r.jsx)(ty,{tone:tn(e.status),children:e.status}),(0,r.jsxs)(ty,{tone:td(e.riskLevel),children:[e.riskLevel," risk"]})]})]}),(0,r.jsx)("h2",{children:e.name}),(0,r.jsx)("p",{children:e.description||"No description added."}),(0,r.jsx)("div",{className:"devflags-key",children:e.key}),(0,r.jsxs)("div",{className:"devflags-rollout",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("strong",{children:[e.rolloutPercent,"%"]}),(0,r.jsx)("span",{children:"rollout"})]}),(0,r.jsx)("input",{type:"range",min:0,max:100,value:e.rolloutPercent,onChange:a=>i(e,Number(a.target.value))})]}),(0,r.jsxs)("div",{className:"devflags-mini-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Category"}),e.category]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Environments"}),e.environments.join(", ")||"None"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Roles"}),e.targetRoles.length?e.targetRoles.join(", "):"All roles"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Plans"}),e.targetPlans.length?e.targetPlans.join(", "):"All plans"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Owner"}),e.owner||"Unassigned"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Updated"}),tr(e.updatedAt)]})]}),(0,r.jsxs)("div",{className:"devflags-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Edit"}),"enabled"===e.status?(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"disabled"),children:"Disable"}):(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"enabled"),children:"Enable"}),"archived"!==e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"archived"),children:"Archive"}),(0,r.jsx)("button",{type:"button",onClick:()=>n?.("auditLogs"),children:"Audit"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>s(e),children:"Remove"})]})]},e.id)),!e.length&&(0,r.jsx)(tj,{text:"No feature flags match your filters."})]})}function tx({flags:e,onEdit:a,onStatus:t,onRollout:i,onDelete:s}){return(0,r.jsxs)("section",{className:"devflags-table-card",children:[(0,r.jsx)("div",{className:"devflags-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Feature"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Risk"}),(0,r.jsx)("th",{children:"Rollout"}),(0,r.jsx)("th",{children:"Category"}),(0,r.jsx)("th",{children:"Environments"}),(0,r.jsx)("th",{children:"Targets"}),(0,r.jsx)("th",{children:"Updated"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:e.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("strong",{children:e.name}),(0,r.jsx)("small",{children:e.key})]}),(0,r.jsx)("td",{children:(0,r.jsx)(ty,{tone:tn(e.status),children:e.status})}),(0,r.jsx)("td",{children:(0,r.jsx)(ty,{tone:td(e.riskLevel),children:e.riskLevel})}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"devflags-table-rollout",children:[(0,r.jsxs)("span",{children:[e.rolloutPercent,"%"]}),(0,r.jsx)("input",{type:"range",min:0,max:100,value:e.rolloutPercent,onChange:a=>i(e,Number(a.target.value))})]})}),(0,r.jsx)("td",{children:e.category}),(0,r.jsx)("td",{children:e.environments.join(", ")}),(0,r.jsxs)("td",{children:[e.targetRoles.length?e.targetRoles.join(", "):"All roles"," \xb7 ",e.targetPlans.length?e.targetPlans.join(", "):"All plans"]}),(0,r.jsx)("td",{children:tr(e.updatedAt)}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"devflags-table-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Edit"}),"enabled"===e.status?(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"disabled"),children:"Disable"}):(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"enabled"),children:"Enable"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>s(e),children:"Remove"})]})})]},e.id))})]})}),!e.length&&(0,r.jsx)(tj,{text:"No feature flags match your filters."})]})}function th({statusChart:e,categoryChart:a,riskChart:t,rolloutChart:i}){return(0,r.jsxs)("section",{className:"devflags-chart-grid",children:[(0,r.jsxs)(tw,{title:"Flag Status",description:"Enabled, disabled and archived feature flags.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:e,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:e.map((e,a)=>(0,r.jsx)(q.f,{fill:te[a%te.length]},a))})]})}),(0,r.jsx)(tk,{rows:e})]}),(0,r.jsx)(tw,{title:"Categories",description:"Flags grouped by product area.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:a,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11,width:110}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--dev-primary)",radius:[0,12,12,0]})]})})}),(0,r.jsxs)(tw,{title:"Risk Levels",description:"Low, medium and high-risk release controls.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:t,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:t.map((e,a)=>(0,r.jsx)(q.f,{fill:te[a%te.length]},a))})]})}),(0,r.jsx)(tk,{rows:t})]}),(0,r.jsx)(tw,{title:"Rollout Distribution",description:"How widely features are exposed.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:i,children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--dev-primary)",radius:[12,12,0,0]})]})})})]})}function tb({form:e,setForm:a,saving:t,onClose:i,onSubmit:s}){let n=(e,t)=>{a(a=>({...a,[e]:t,..."name"===e&&!a.key?{key:ti(String(t))}:{}}))};return(0,r.jsx)("div",{className:"devflags-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("form",{className:"devflags-modal",onSubmit:s,children:[(0,r.jsxs)("div",{className:"devflags-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:e.id?"Edit Feature Flag":"Create Feature Flag"}),(0,r.jsx)("p",{children:"Control rollout, environments and target users for this feature."})]}),(0,r.jsx)("button",{type:"button",onClick:i,disabled:t,"aria-label":"Close",children:"✕"})]}),(0,r.jsxs)("div",{className:"devflags-form-grid",children:[(0,r.jsxs)("label",{children:["Feature name",(0,r.jsx)("input",{value:e.name,onChange:e=>n("name",e.target.value),placeholder:"New report analytics",required:!0})]}),(0,r.jsxs)("label",{children:["Feature key",(0,r.jsx)("input",{value:e.key,onChange:e=>n("key",ti(e.target.value)),placeholder:"new_report_analytics",required:!0})]}),(0,r.jsxs)("label",{children:["Owner",(0,r.jsx)("input",{value:e.owner,onChange:e=>n("owner",e.target.value),placeholder:"developer@example.com"})]}),(0,r.jsxs)("label",{children:["Category",(0,r.jsx)("select",{value:e.category,onChange:e=>n("category",e.target.value),children:a5.map(e=>(0,r.jsx)("option",{value:e,children:e},e))})]}),(0,r.jsxs)("label",{children:["Status",(0,r.jsxs)("select",{value:e.status,onChange:e=>n("status",e.target.value),children:[(0,r.jsx)("option",{value:"enabled",children:"Enabled"}),(0,r.jsx)("option",{value:"disabled",children:"Disabled"}),(0,r.jsx)("option",{value:"archived",children:"Archived"})]})]}),(0,r.jsxs)("label",{children:["Risk level",(0,r.jsxs)("select",{value:e.riskLevel,onChange:e=>n("riskLevel",e.target.value),children:[(0,r.jsx)("option",{value:"low",children:"Low risk"}),(0,r.jsx)("option",{value:"medium",children:"Medium risk"}),(0,r.jsx)("option",{value:"high",children:"High risk"})]})]}),(0,r.jsxs)("label",{children:["Rollout percentage",(0,r.jsx)("input",{type:"number",min:"0",max:"100",value:e.rolloutPercent,onChange:e=>n("rolloutPercent",e.target.value)})]}),(0,r.jsxs)("label",{className:"wide",children:["Description",(0,r.jsx)("textarea",{value:e.description,onChange:e=>n("description",e.target.value),placeholder:"Describe what this feature unlocks and when it should be enabled.",rows:3})]})]}),(0,r.jsxs)("section",{className:"devflags-target-editor",children:[(0,r.jsx)(tf,{title:"Environments",description:"Where this feature may run.",children:a3.map(a=>(0,r.jsxs)("label",{className:"devflags-toggle",children:[(0,r.jsx)("input",{type:"checkbox",checked:e.environments.includes(a),onChange:()=>n("environments",tu(e.environments,a))}),(0,r.jsx)("span",{children:a})]},a))}),(0,r.jsx)(tf,{title:"Target roles",description:"Leave empty to target all roles.",children:a6.map(a=>(0,r.jsxs)("label",{className:"devflags-toggle",children:[(0,r.jsx)("input",{type:"checkbox",checked:e.targetRoles.includes(a),onChange:()=>n("targetRoles",tu(e.targetRoles,a))}),(0,r.jsx)("span",{children:a})]},a))}),(0,r.jsx)(tf,{title:"Target plans",description:"Leave empty to target all subscription plans.",children:a9.map(a=>(0,r.jsxs)("label",{className:"devflags-toggle",children:[(0,r.jsx)("input",{type:"checkbox",checked:e.targetPlans.includes(a),onChange:()=>n("targetPlans",tu(e.targetPlans,a))}),(0,r.jsx)("span",{children:a})]},a))})]}),(0,r.jsxs)("div",{className:"devflags-modal-actions",children:[(0,r.jsx)("button",{type:"button",onClick:i,disabled:t,children:"Cancel"}),(0,r.jsx)("button",{type:"submit",disabled:t,children:t?"Saving...":e.id?"Save Changes":"Create Flag"})]})]})})}function tf({title:e,description:a,children:t}){return(0,r.jsxs)("article",{className:"devflags-editor-group",children:[(0,r.jsx)("h3",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function tv({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"devflags-stat",children:[(0,r.jsxs)("span",{children:[e,(0,r.jsx)("b",{children:i})]}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:t})]})}function ty({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`devflags-chip ${a}`,children:e})}function tj({text:e}){return(0,r.jsx)("div",{className:"devflags-empty",children:e})}function tw({title:e,description:a,children:t}){return(0,r.jsxs)("section",{className:"devflags-chart-card",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function tk({rows:e}){return(0,r.jsx)("div",{className:"devflags-legend",children:e.map((e,a)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{style:{background:te[a%te.length]}}),e.label,": ",e.value]},`${e.label}-${a}`))})}let tN=`
@keyframes devflagsSpin { to { transform: rotate(360deg); } }

.devflags-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 8px;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--dev-primary) 10%, transparent), transparent 34rem),
    var(--bg, #f8fafc);
  color: var(--text, #0f172a);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  overflow-x: hidden;
}

.devflags-page *,
.devflags-page *::before,
.devflags-page *::after {
  box-sizing: border-box;
}

.devflags-page button,
.devflags-page input,
.devflags-page select,
.devflags-page textarea {
  font: inherit;
  max-width: 100%;
}

.devflags-page button {
  -webkit-tap-highlight-color: transparent;
}

.devflags-state {
  min-height: min(420px, calc(100dvh - 32px));
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 28px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .08);
  text-align: center;
}

.devflags-state h2 {
  margin: 0;
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 1000;
  letter-spacing: -.04em;
}

.devflags-state p {
  max-width: 34rem;
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.6;
}

.devflags-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--dev-primary) 18%, transparent);
  border-top-color: var(--dev-primary);
  animation: devflagsSpin .8s linear infinite;
}

.devflags-hero {
  display: grid;
  gap: 16px;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, .18), transparent 20rem),
    linear-gradient(135deg, var(--dev-primary), #0f172a 72%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .18);
  overflow: hidden;
}

.devflags-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .14em;
  opacity: .82;
}

.devflags-hero h1 {
  margin: 8px 0 0;
  font-size: clamp(28px, 8vw, 44px);
  line-height: 1.02;
  font-weight: 1000;
  letter-spacing: -.07em;
}

.devflags-hero p {
  max-width: 780px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: .9;
}

.devflags-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.devflags-switch {
  display: inline-flex;
  gap: 5px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(14px);
}

.devflags-switch button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.devflags-switch button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .16);
}

.devflags-white-btn,
.devflags-glass-btn {
  min-height: 40px;
  border-radius: 999px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.devflags-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.devflags-glass-btn {
  border: 1px solid rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .14);
  color: #fff;
}

.devflags-glass-btn:disabled {
  opacity: .7;
  cursor: not-allowed;
}

.devflags-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 850;
}

.devflags-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.devflags-alert.success {
  background: #dcfce7;
  color: #166534;
}

.devflags-stat-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.devflags-stat {
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 24px;
  padding: 16px;
  background: var(--surface, #fff);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.devflags-stat span {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 850;
}

.devflags-stat strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(24px, 8vw, 34px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
  overflow-wrap: anywhere;
}

.devflags-stat small {
  display: block;
  margin-top: 8px;
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 850;
}

.devflags-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 24px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
}

.devflags-toolbar input,
.devflags-toolbar select {
  min-height: 42px;
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .3);
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
}

.devflags-toolbar button {
  min-height: 42px;
  border: 0;
  border-radius: 16px;
  background: color-mix(in srgb, var(--dev-primary) 10%, white);
  color: var(--dev-primary);
  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.devflags-card-grid,
.devflags-chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.devflags-flag-card,
.devflags-chart-card,
.devflags-table-card {
  min-width: 0;
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 26px;
  padding: 14px;
  background: var(--surface, #fff);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.devflags-flag-card.disabled {
  opacity: .78;
}

.devflags-flag-card.archived {
  background: linear-gradient(180deg, #fff, #f8fafc);
}

.devflags-flag-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.devflags-flag-icon {
  width: 46px;
  height: 46px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--dev-primary), #0f172a);
  color: #fff;
  font-size: 18px;
  font-weight: 1000;
}

.devflags-chip-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.devflags-flag-card h2 {
  margin: 14px 0 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.devflags-flag-card p {
  margin: 5px 0 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.45;
}

.devflags-key {
  display: inline-flex;
  max-width: 100%;
  margin-top: 10px;
  padding: 7px 10px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #334155;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 11px;
  font-weight: 900;
  overflow-wrap: anywhere;
}

.devflags-rollout {
  display: grid;
  gap: 8px;
  margin-top: 14px;
  padding: 12px;
  border-radius: 20px;
  background: color-mix(in srgb, var(--dev-primary) 7%, white);
}

.devflags-rollout div {
  display: flex;
  align-items: flex-end;
  gap: 6px;
}

.devflags-rollout strong {
  font-size: 28px;
  line-height: .9;
  font-weight: 1000;
  letter-spacing: -.06em;
}

.devflags-rollout span {
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 900;
}

.devflags-rollout input,
.devflags-table-rollout input {
  width: 100%;
  accent-color: var(--dev-primary);
}

.devflags-mini-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 14px;
}

.devflags-mini-grid span {
  padding: 10px;
  border-radius: 16px;
  background: #f8fafc;
  color: #0f172a;
  font-size: 12px;
  font-weight: 850;
  overflow: hidden;
  text-overflow: ellipsis;
}

.devflags-mini-grid b {
  display: block;
  color: var(--muted, #64748b);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 3px;
}

.devflags-actions,
.devflags-table-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.devflags-actions {
  margin-top: 14px;
}

.devflags-actions button,
.devflags-table-actions button {
  min-height: 38px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: color-mix(in srgb, var(--dev-primary) 10%, white);
  color: var(--dev-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.devflags-actions button:first-child,
.devflags-table-actions button:first-child {
  background: var(--dev-primary);
  color: #fff;
}

.devflags-actions button.danger,
.devflags-table-actions button.danger {
  background: #fee2e2;
  color: #b91c1c;
}

.devflags-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
  white-space: nowrap;
}

.devflags-chip.green { background: #dcfce7; color: #166534; }
.devflags-chip.blue { background: #dbeafe; color: #1d4ed8; }
.devflags-chip.purple { background: #f3e8ff; color: #7e22ce; }
.devflags-chip.orange { background: #ffedd5; color: #c2410c; }
.devflags-chip.red { background: #fee2e2; color: #b91c1c; }
.devflags-chip.gray { background: #f1f5f9; color: #475569; }

.devflags-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.devflags-table-wrap table {
  width: 100%;
  min-width: 1120px;
  border-collapse: collapse;
}

.devflags-table-wrap th {
  text-align: left;
  color: var(--muted, #64748b);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.devflags-table-wrap td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .16);
  font-size: 13px;
  vertical-align: top;
}

.devflags-table-wrap strong {
  display: block;
  font-weight: 1000;
}

.devflags-table-wrap small {
  display: block;
  margin-top: 3px;
  color: var(--muted, #64748b);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 11px;
}

.devflags-table-rollout {
  display: grid;
  gap: 6px;
  width: 160px;
}

.devflags-table-rollout span {
  font-weight: 1000;
}

.devflags-chart-card h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.devflags-chart-card p {
  margin: 5px 0 10px;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.5;
}

.devflags-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

.devflags-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 9px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.devflags-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

.devflags-empty {
  grid-column: 1 / -1;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
  color: var(--muted, #64748b);
  font-size: 13px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, .35);
}

.devflags-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15, 23, 42, .58);
  backdrop-filter: blur(12px);
}

.devflags-modal {
  width: min(980px, 100%);
  max-height: min(92dvh, 920px);
  overflow-y: auto;
  border-radius: 28px;
  background: var(--surface, #fff);
  box-shadow: 0 30px 100px rgba(15, 23, 42, .35);
  border: 1px solid rgba(255, 255, 255, .24);
  padding: 14px;
}

.devflags-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 4px 14px;
}

.devflags-modal-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.devflags-modal-head p {
  margin: 5px 0 0;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.5;
}

.devflags-modal-head button {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: #f1f5f9;
  color: #0f172a;
  font-weight: 1000;
  cursor: pointer;
}

.devflags-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.devflags-form-grid label,
.devflags-target-editor {
  display: grid;
  gap: 6px;
  color: #334155;
  font-size: 12px;
  font-weight: 950;
}

.devflags-form-grid input,
.devflags-form-grid select,
.devflags-form-grid textarea {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .32);
  border-radius: 16px;
  background: #fff;
  color: #0f172a;
  padding: 11px 12px;
  font-size: 13px;
  font-weight: 800;
}

.devflags-form-grid input,
.devflags-form-grid select {
  min-height: 42px;
}

.devflags-form-grid textarea {
  resize: vertical;
}

.devflags-target-editor {
  margin-top: 12px;
  padding: 12px;
  border-radius: 22px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
}

.devflags-editor-group {
  padding: 12px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .18);
}

.devflags-editor-group + .devflags-editor-group {
  margin-top: 10px;
}

.devflags-editor-group h3 {
  margin: 0;
  font-size: 15px;
  font-weight: 1000;
  letter-spacing: -.03em;
}

.devflags-editor-group p {
  margin: 4px 0 10px;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.45;
}

.devflags-editor-group > div {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.devflags-toggle {
  display: inline-flex !important;
  align-items: center;
  gap: 8px !important;
  min-height: 36px;
  padding: 0 10px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
}

.devflags-toggle input {
  width: 16px;
  height: 16px;
  accent-color: var(--dev-primary);
}

.devflags-modal-actions {
  position: sticky;
  bottom: -14px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 14px;
  padding: 12px 0 2px;
  background: linear-gradient(to top, var(--surface, #fff) 70%, transparent);
}

.devflags-modal-actions button {
  min-height: 42px;
  border: 0;
  border-radius: 999px;
  padding: 0 14px;
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.devflags-modal-actions button:first-child {
  background: #f1f5f9;
  color: #0f172a;
}

.devflags-modal-actions button:last-child {
  background: var(--dev-primary);
  color: #fff;
}

.devflags-modal-actions button:disabled {
  opacity: .65;
  cursor: not-allowed;
}

@media (min-width: 520px) {
  .devflags-stat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .devflags-toolbar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .devflags-mini-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 760px) {
  .devflags-card-grid,
  .devflags-chart-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .devflags-form-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .devflags-form-grid .wide {
    grid-column: 1 / -1;
  }

  .devflags-modal-backdrop {
    place-items: center;
    padding: 18px;
  }

  .devflags-modal {
    padding: 18px;
  }
}

@media (min-width: 920px) {
  .devflags-page {
    padding: 14px;
  }

  .devflags-hero {
    grid-template-columns: 1fr auto;
    align-items: end;
    padding: 24px;
  }

  .devflags-stat-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .devflags-toolbar {
    grid-template-columns: minmax(240px, 2fr) repeat(4, minmax(130px, 1fr)) auto;
  }

  .devflags-mini-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1180px) {
  .devflags-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`,tS="eleeveon_developer_backups",tC="eleeveon_developer_backup_policy",tA=["full_platform","accounts","billing","school_data","sync_data","audit_logs","settings"],tz=["scheduled","running","completed","failed","verified","restore_requested","restored"],tD=["local","cloud","external_drive","server_snapshot"],tT=["manual","hourly","daily","weekly","monthly"],tP={name:"",description:"",status:"scheduled",scope:"full_platform",storage:"cloud",frequency:"manual",sizeMb:"0",encrypted:!0,compressed:!0,retentionDays:"30",location:"",checksum:"",initiatedBy:""},tR={enabled:!0,frequency:"daily",retentionDays:"30",storage:"cloud",encrypted:!0,compressed:!0,notifyEmail:""},tM=["var(--backup-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],tq=(e,a=[])=>{if(Array.isArray(e))return e;if(!e||"object"!=typeof e)return[];for(let t of a)if(Array.isArray(e[t]))return e[t];return Array.isArray(e.data)?e.data:Array.isArray(e.items)?e.items:Array.isArray(e.results)?e.results:Array.isArray(e.records)?e.records:Array.isArray(e.rows)?e.rows:[]},tL=e=>{if(!e)return 0;let a="number"==typeof e?e:new Date(e).getTime();return Number.isFinite(a)?a:0},tI=e=>{let a=tL(e);return a?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(a)):"Not set"},tE=e=>new Intl.NumberFormat("en-GH",{notation:"compact",maximumFractionDigits:1}).format(Number(e||0)),t$=(e,a=0)=>{let t=Number(e);return Number.isFinite(t)?Math.max(a,t):a},tF=e=>{let a=String(e||"").toLowerCase();return"completed"===a||"verified"===a||"restored"===a?"green":"running"===a||"scheduled"===a?"blue":"restore_requested"===a?"orange":"failed"===a?"red":"gray"},tU=e=>e.replace(/_/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,e=>e.toUpperCase()),tO=(e,a)=>{let t=new Map;return e.forEach(e=>{let r=String(a(e)||"Unknown").trim()||"Unknown";t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)},t_=(e=6)=>{let a=new Date;return Array.from({length:e},(t,r)=>{let i=new Date(a.getFullYear(),a.getMonth()-(e-1-r),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(i)})},tK=e=>{let a=tL(e);return a?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(a)):"Unknown"},tB=(e,a)=>{let t=Date.now(),r=e.status||e.state||(!1===e.ok?"failed":"completed");return{id:String(e.id||e.localId||e.backupId||`backup-${a}-${t}`),name:e.name||e.title||`Backup ${a+1}`,description:e.description||e.note||"",status:tz.includes(r)?r:"completed",scope:tA.includes(e.scope)?e.scope:"full_platform",storage:tD.includes(e.storage)?e.storage:e.locationType||"cloud",frequency:tT.includes(e.frequency)?e.frequency:"manual",sizeMb:Number(e.sizeMb||e.sizeMB||e.size||0),encrypted:!!(e.encrypted??!0),compressed:!!(e.compressed??!0),retentionDays:Number(e.retentionDays||e.retention||30),checksum:e.checksum||null,location:e.location||e.path||null,initiatedBy:e.initiatedBy||e.createdBy||null,verifiedAt:e.verifiedAt||null,restoredAt:e.restoredAt||null,restoreNote:e.restoreNote||null,createdAt:e.createdAt||t,updatedAt:e.updatedAt||e.createdAt||t}},tH=()=>{try{let e=window.localStorage.getItem(tS);if(!e)return[];return tq(JSON.parse(e),["backups","snapshots","backupJobs"]).map(tB)}catch{return[]}},tG=e=>{try{window.localStorage.setItem(tS,JSON.stringify(e))}catch{}},tW=()=>{try{let e=window.localStorage.getItem(tC);if(!e)return tR;return{...tR,...JSON.parse(e)}}catch{return tR}};function tV({navigate:e}){let{accountId:a,authenticated:t,loading:s}=(0,g.F)(),{settings:n}=(0,x.t)(),d=n?.primaryColor||"#2563eb",[l,o]=(0,i.useState)("cards"),[c,p]=(0,i.useState)([]),[u,h]=(0,i.useState)(tR),[b,f]=(0,i.useState)(!0),[v,y]=(0,i.useState)(!1),[j,w]=(0,i.useState)(!1),[k,N]=(0,i.useState)(""),[S,C]=(0,i.useState)(""),[A,z]=(0,i.useState)(""),[D,T]=(0,i.useState)("all"),[P,R]=(0,i.useState)("all"),[M,q]=(0,i.useState)("all"),[L,I]=(0,i.useState)(""),[E,$]=(0,i.useState)(""),[F,U]=(0,i.useState)(!1),[O,_]=(0,i.useState)(!1),[K,B]=(0,i.useState)(null),[H,G]=(0,i.useState)(""),[W,V]=(0,i.useState)(tP),J=async(e=!1)=>{try{e?y(!0):f(!0),N(""),C(""),h(tW());let a=await (0,m.uE)("/developer/backups").catch(async()=>(0,m.uE)("/backups").catch(()=>null)),t=tq(a,["backups","snapshots","backupJobs"]).map(tB);t.length?(p(t),tG(t)):p(tH())}catch(e){N(e?.message||"Could not load backup records from the server. Showing local saved records."),p(tH()),h(tW())}finally{f(!1),y(!1)}};(0,i.useEffect)(()=>{if(!s){if(!t||!a)return void f(!1);J()}},[s,t,a]);let Q=(0,i.useMemo)(()=>{let e=A.trim().toLowerCase(),a=L?new Date(L).getTime():0,t=E?new Date(E).setHours(23,59,59,999):0;return c.filter(r=>{let i=`${r.name} ${r.description||""} ${r.scope} ${r.status} ${r.storage} ${r.location||""} ${r.checksum||""}`.toLowerCase(),s=tL(r.createdAt||r.updatedAt),n=!e||i.includes(e),d="all"===D||r.status===D,l="all"===P||r.scope===P,o="all"===M||r.storage===M;return n&&d&&l&&o&&(!a||s>=a)&&(!t||s<=t)}).sort((e,a)=>tL(a.updatedAt||a.createdAt)-tL(e.updatedAt||e.createdAt))},[c,A,D,P,M,L,E]),Y=c.filter(e=>"completed"===e.status).length,X=c.filter(e=>"verified"===e.status).length,Z=c.filter(e=>"failed"===e.status).length,ee=c.filter(e=>["restore_requested","restored"].includes(e.status)).length,ea=c.reduce((e,a)=>e+Number(a.sizeMb||0),0),et=c.filter(e=>e.encrypted).length,er=(0,i.useMemo)(()=>tO(c,e=>tU(e.status)),[c]),ei=(0,i.useMemo)(()=>tO(c,e=>tU(e.scope)),[c]),es=(0,i.useMemo)(()=>tO(c,e=>tU(e.storage)),[c]),en=(0,i.useMemo)(()=>{let e=t_(6),a=new Map(e.map(e=>[e,0]));return c.forEach(e=>{let t=tK(e.createdAt);a.has(t)&&a.set(t,(a.get(t)||0)+1)}),e.map(e=>({label:e,value:a.get(e)||0}))},[c]),ed=(0,i.useMemo)(()=>{let e=t_(6),a=new Map(e.map(e=>[e,0]));return c.forEach(e=>{let t=tK(e.createdAt);a.has(t)&&a.set(t,(a.get(t)||0)+Number(e.sizeMb||0))}),e.map(e=>({label:e,value:Math.round(a.get(e)||0)}))},[c]),el=e=>{N(""),C(""),V({id:e.id,name:e.name,description:e.description||"",status:e.status,scope:e.scope,storage:e.storage,frequency:e.frequency,sizeMb:String(e.sizeMb),encrypted:e.encrypted,compressed:e.compressed,retentionDays:String(e.retentionDays),location:e.location||"",checksum:e.checksum||"",initiatedBy:e.initiatedBy||""}),U(!0)},eo=()=>{j||(U(!1),V(tP))},ec=async e=>{if(e.preventDefault(),!W.name.trim())return void N("Backup name is required.");try{let e;w(!0),N(""),C("");let a=(e=Date.now(),{id:W.id||`backup-${e}`,name:W.name.trim(),description:W.description.trim(),status:W.status,scope:W.scope,storage:W.storage,frequency:W.frequency,sizeMb:t$(W.sizeMb),encrypted:W.encrypted,compressed:W.compressed,retentionDays:t$(W.retentionDays,1),checksum:W.checksum.trim()||null,location:W.location.trim()||null,initiatedBy:W.initiatedBy.trim()||"developer",verifiedAt:null,restoredAt:null,restoreNote:null,createdAt:e,updatedAt:e});if(W.id){let e=await (0,m.uE)(`/developer/backups/${W.id}`,{method:"PATCH",body:JSON.stringify(a)}).catch(async()=>(0,m.uE)(`/backups/${W.id}`,{method:"PATCH",body:JSON.stringify(a)}).catch(()=>null)),t=tB(e?.backup||e?.data||e||a,0);p(e=>{let a=e.map(e=>e.id===W.id?{...e,...t,id:W.id,createdAt:e.createdAt,updatedAt:Date.now()}:e);return tG(a),a}),C("Backup record updated.")}else{let e=await (0,m.uE)("/developer/backups",{method:"POST",body:JSON.stringify(a)}).catch(async()=>(0,m.uE)("/backups",{method:"POST",body:JSON.stringify(a)}).catch(()=>null)),t=tB(e?.backup||e?.data||e||a,0);p(e=>{let a=[t,...e];return tG(a),a}),C("Backup record created.")}eo()}catch(e){N(e?.message||"Could not save backup record.")}finally{w(!1)}},ep=async()=>{try{N(""),C("");let e={id:`backup-${Date.now()}`,name:`Manual Backup ${new Date().toLocaleString("en-GH")}`,description:"Manual backup started from developer portal.",status:"running",scope:"full_platform",storage:u.storage,frequency:"manual",sizeMb:0,encrypted:u.encrypted,compressed:u.compressed,retentionDays:t$(u.retentionDays,1),checksum:null,location:null,initiatedBy:"developer",verifiedAt:null,restoredAt:null,restoreNote:null,createdAt:Date.now(),updatedAt:Date.now()},a=await (0,m.uE)("/developer/backups",{method:"POST",body:JSON.stringify(e)}).catch(async()=>(0,m.uE)("/backups",{method:"POST",body:JSON.stringify(e)}).catch(()=>null)),t=tB(a?.backup||a?.data||a||e,0);p(e=>{let a=[t,...e];return tG(a),a}),C("Backup job created.")}catch(e){N(e?.message||"Could not create backup job.")}},eu=async(e,a,t)=>{try{N(""),C("");let r={...e,...a,updatedAt:Date.now()};await (0,m.uE)(`/developer/backups/${e.id}`,{method:"PATCH",body:JSON.stringify(a)}).catch(async()=>(0,m.uE)(`/backups/${e.id}`,{method:"PATCH",body:JSON.stringify(a)}).catch(()=>null)),p(a=>{let t=a.map(a=>a.id===e.id?r:a);return tG(t),t}),C(t)}catch(e){N(e?.message||"Could not update backup.")}},em=async e=>{try{await (0,m.uE)(`/developer/backups/${e.id}/verify`,{method:"POST"}).catch(async()=>(0,m.uE)(`/backups/${e.id}/verify`,{method:"POST"}).catch(()=>null)),await eu(e,{status:"verified",checksum:e.checksum||`sha256:${Array.from({length:16},()=>Math.floor(16*Math.random()).toString(16)).join("")}`,verifiedAt:Date.now()},"Backup verified.")}catch(e){N(e?.message||"Could not verify backup.")}},eg=async e=>{if(e.preventDefault(),K)try{N(""),C(""),await (0,m.uE)(`/developer/backups/${K.id}/restore`,{method:"POST",body:JSON.stringify({restoreNote:H})}).catch(async()=>(0,m.uE)(`/backups/${K.id}/restore`,{method:"POST",body:JSON.stringify({restoreNote:H})}).catch(()=>null)),await eu(K,{status:"restore_requested",restoreNote:H.trim()},"Restore request recorded."),B(null),G("")}catch(e){N(e?.message||"Could not request restore.")}},ex=async e=>{await eu(e,{status:"restored",restoredAt:Date.now()},"Backup marked as restored.")},eh=e=>{window.confirm(`Remove "${e.name}" from local backup records?`)&&(p(a=>{let t=a.filter(a=>a.id!==e.id);return tG(t),t}),C("Backup record removed locally."))};return b||s?(0,r.jsxs)("main",{className:"backup-page",style:{"--backup-primary":d},children:[(0,r.jsx)("style",{children:t6}),(0,r.jsxs)("section",{className:"backup-state",children:[(0,r.jsx)("div",{className:"backup-spinner"}),(0,r.jsx)("h2",{children:"Loading backups..."}),(0,r.jsx)("p",{children:"Preparing backup jobs, recovery policy and disaster recovery analytics."})]})]}):t&&a?(0,r.jsxs)("main",{className:"backup-page",style:{"--backup-primary":d},children:[(0,r.jsx)("style",{children:t6}),(0,r.jsxs)("section",{className:"backup-hero",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"backup-eyebrow",children:"Disaster recovery"}),(0,r.jsx)("h1",{children:"Backups & Recovery"}),(0,r.jsx)("p",{children:"Create backup jobs, verify snapshot integrity, track restore requests and keep your SaaS platform safer from data loss. This module is operational now with local fallback, and becomes server-powered when your backend endpoints are added."})]}),(0,r.jsxs)("div",{className:"backup-hero-actions",children:[(0,r.jsxs)("div",{className:"backup-switch",children:[(0,r.jsx)("button",{type:"button",className:"cards"===l?"active":"",onClick:()=>o("cards"),children:"Cards"}),(0,r.jsx)("button",{type:"button",className:"table"===l?"active":"",onClick:()=>o("table"),children:"Table"}),(0,r.jsx)("button",{type:"button",className:"analytics"===l?"active":"",onClick:()=>o("analytics"),children:"Charts"})]}),(0,r.jsx)("button",{type:"button",className:"backup-white-btn",onClick:ep,children:"Run Backup"}),(0,r.jsx)("button",{type:"button",className:"backup-glass-btn",onClick:()=>{N(""),C(""),V({...tP,retentionDays:u.retentionDays,storage:u.storage,frequency:u.frequency,encrypted:u.encrypted,compressed:u.compressed}),U(!0)},children:"New Record"}),(0,r.jsx)("button",{type:"button",className:"backup-glass-btn",onClick:()=>J(!0),disabled:v,children:v?"Refreshing...":"Refresh"})]})]}),(k||S)&&(0,r.jsx)("section",{className:`backup-alert ${k?"error":"success"}`,children:k||S}),(0,r.jsxs)("section",{className:"backup-stat-grid",children:[(0,r.jsx)(t1,{label:"Backups",value:c.length,detail:`${Q.length} shown`,icon:"\uD83D\uDCBE"}),(0,r.jsx)(t1,{label:"Verified",value:X,detail:`${Y} completed`,icon:"✅"}),(0,r.jsx)(t1,{label:"Failures",value:Z,detail:`${ee} restore actions`,icon:"⚠️"}),(0,r.jsx)(t1,{label:"Storage",value:`${tE(ea)} MB`,detail:`${et} encrypted`,icon:"\uD83D\uDCE6"})]}),(0,r.jsxs)("section",{className:"backup-policy-card",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Backup Policy"}),(0,r.jsxs)("p",{children:[u.enabled?"Enabled":"Disabled"," \xb7 ",u.frequency," \xb7 ",u.retentionDays," days retention \xb7 ",u.storage]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{type:"button",onClick:()=>_(!0),children:"Configure Policy"}),(0,r.jsx)("button",{type:"button",onClick:()=>{let e,a,t;e=new Blob([JSON.stringify({exportedAt:new Date().toISOString(),policy:u,backups:c},null,2)],{type:"application/json"}),a=URL.createObjectURL(e),(t=document.createElement("a")).href=a,t.download="eleeveon-backups.json",t.click(),URL.revokeObjectURL(a),C("Backup records exported.")},children:"Export Records"}),(0,r.jsx)("button",{type:"button",onClick:()=>e?.("auditLogs"),children:"Audit Logs"})]})]}),(0,r.jsxs)("section",{className:"backup-toolbar",children:[(0,r.jsx)("input",{value:A,onChange:e=>z(e.target.value),placeholder:"Search name, checksum, location, description..."}),(0,r.jsxs)("select",{value:D,onChange:e=>T(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All statuses"}),tz.map(e=>(0,r.jsx)("option",{value:e,children:tU(e)},e))]}),(0,r.jsxs)("select",{value:P,onChange:e=>R(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All scopes"}),tA.map(e=>(0,r.jsx)("option",{value:e,children:tU(e)},e))]}),(0,r.jsxs)("select",{value:M,onChange:e=>q(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All storage"}),tD.map(e=>(0,r.jsx)("option",{value:e,children:tU(e)},e))]}),(0,r.jsx)("input",{type:"date",value:L,onChange:e=>I(e.target.value)}),(0,r.jsx)("input",{type:"date",value:E,onChange:e=>$(e.target.value)}),(0,r.jsx)("button",{type:"button",onClick:()=>{z(""),T("all"),R("all"),q("all"),I(""),$("")},children:"Reset"})]}),"analytics"===l?(0,r.jsx)(tY,{statusChart:er,scopeChart:ei,storageChart:es,trendChart:en,sizeTrendChart:ed}):"table"===l?(0,r.jsx)(tQ,{backups:Q,onEdit:el,onVerify:em,onRestore:e=>{B(e),G(e.restoreNote||"")},onMarkRestored:ex,onDelete:eh}):(0,r.jsx)(tJ,{backups:Q,onEdit:el,onVerify:em,onRestore:e=>{B(e),G(e.restoreNote||"")},onMarkRestored:ex,onDelete:eh,navigate:e}),F&&(0,r.jsx)(tX,{form:W,setForm:V,saving:j,onClose:eo,onSubmit:ec}),O&&(0,r.jsx)(tZ,{policy:u,setPolicy:h,onClose:()=>_(!1),onSubmit:e=>{e.preventDefault();try{window.localStorage.setItem(tC,JSON.stringify(u))}catch{}_(!1),C("Backup policy saved locally.")}}),K&&(0,r.jsx)(t0,{backup:K,note:H,setNote:G,onClose:()=>B(null),onSubmit:eg})]}):(0,r.jsxs)("main",{className:"backup-page",style:{"--backup-primary":d},children:[(0,r.jsx)("style",{children:t6}),(0,r.jsxs)("section",{className:"backup-state",children:[(0,r.jsx)("h2",{children:"Developer access required"}),(0,r.jsx)("p",{children:"Sign in with a developer account to manage backups and recovery operations."})]})]})}function tJ({backups:e,onEdit:a,onVerify:t,onRestore:i,onMarkRestored:s,onDelete:n,navigate:d}){return(0,r.jsxs)("section",{className:"backup-card-grid",children:[e.map(e=>{var l;return(0,r.jsxs)("article",{className:`backup-card ${e.status}`,children:[(0,r.jsxs)("div",{className:"backup-card-top",children:[(0,r.jsx)("span",{className:"backup-avatar",children:"\uD83D\uDCBE"}),(0,r.jsxs)("div",{className:"backup-chip-row",children:[(0,r.jsx)(t2,{tone:tF(e.status),children:tU(e.status)}),(0,r.jsx)(t2,{tone:"cloud"===(l=e.storage)?"blue":"server_snapshot"===l?"purple":"external_drive"===l?"orange":"gray",children:tU(e.storage)})]})]}),(0,r.jsx)("h2",{children:e.name}),(0,r.jsx)("p",{children:e.description||"No description added."}),(0,r.jsxs)("div",{className:"backup-mini-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Scope"}),tU(e.scope)]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Size"}),tE(e.sizeMb)," MB"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Frequency"}),tU(e.frequency)]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Retention"}),e.retentionDays," days"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Verified"}),tI(e.verifiedAt)]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Updated"}),tI(e.updatedAt)]})]}),(0,r.jsxs)("div",{className:"backup-pills",children:[e.encrypted&&(0,r.jsx)("span",{children:"Encrypted"}),e.compressed&&(0,r.jsx)("span",{children:"Compressed"}),e.checksum&&(0,r.jsx)("span",{children:e.checksum}),e.location&&(0,r.jsx)("span",{children:e.location}),!e.encrypted&&(0,r.jsx)("span",{children:"Not encrypted"})]}),(0,r.jsxs)("div",{className:"backup-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Edit"}),(0,r.jsx)("button",{type:"button",onClick:()=>t(e),children:"Verify"}),(0,r.jsx)("button",{type:"button",onClick:()=>i(e),children:"Request Restore"}),"restore_requested"===e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>s(e),children:"Mark Restored"}),(0,r.jsx)("button",{type:"button",onClick:()=>d?.("auditLogs"),children:"Audit"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>n(e),children:"Remove"})]})]},e.id)}),!e.length&&(0,r.jsx)(t4,{text:"No backup records match your filters."})]})}function tQ({backups:e,onEdit:a,onVerify:t,onRestore:i,onMarkRestored:s,onDelete:n}){return(0,r.jsxs)("section",{className:"backup-table-card",children:[(0,r.jsx)("div",{className:"backup-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Backup"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Scope"}),(0,r.jsx)("th",{children:"Storage"}),(0,r.jsx)("th",{children:"Size"}),(0,r.jsx)("th",{children:"Retention"}),(0,r.jsx)("th",{children:"Security"}),(0,r.jsx)("th",{children:"Verified"}),(0,r.jsx)("th",{children:"Updated"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:e.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("strong",{children:e.name}),(0,r.jsx)("small",{children:e.checksum||e.location||e.description||"—"})]}),(0,r.jsx)("td",{children:(0,r.jsx)(t2,{tone:tF(e.status),children:tU(e.status)})}),(0,r.jsx)("td",{children:tU(e.scope)}),(0,r.jsx)("td",{children:tU(e.storage)}),(0,r.jsxs)("td",{children:[tE(e.sizeMb)," MB"]}),(0,r.jsxs)("td",{children:[e.retentionDays," days"]}),(0,r.jsxs)("td",{children:[e.encrypted?"Encrypted":"Not encrypted",e.compressed?" \xb7 compressed":""]}),(0,r.jsx)("td",{children:tI(e.verifiedAt)}),(0,r.jsx)("td",{children:tI(e.updatedAt)}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"backup-table-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Edit"}),(0,r.jsx)("button",{type:"button",onClick:()=>t(e),children:"Verify"}),(0,r.jsx)("button",{type:"button",onClick:()=>i(e),children:"Restore"}),"restore_requested"===e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>s(e),children:"Restored"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>n(e),children:"Remove"})]})})]},e.id))})]})}),!e.length&&(0,r.jsx)(t4,{text:"No backup records match your filters."})]})}function tY({statusChart:e,scopeChart:a,storageChart:t,trendChart:i,sizeTrendChart:s}){return(0,r.jsxs)("section",{className:"backup-chart-grid",children:[(0,r.jsx)(t8,{title:"Backup Trend",description:"Backup jobs created over the last six months.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(eS.Q,{data:i,children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"backupTrend",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"8%",stopColor:"var(--backup-primary)",stopOpacity:.28}),(0,r.jsx)("stop",{offset:"95%",stopColor:"var(--backup-primary)",stopOpacity:.02})]})}),(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(p.m,{}),(0,r.jsx)(eC.Gk,{type:"monotone",dataKey:"value",stroke:"var(--backup-primary)",fill:"url(#backupTrend)",strokeWidth:3})]})})}),(0,r.jsx)(t8,{title:"Backup Size Trend",description:"Total backup size created by month.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:s,children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--backup-primary)",radius:[12,12,0,0]})]})})}),(0,r.jsxs)(t8,{title:"Status Overview",description:"Completed, verified, failed and restore states.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:e,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:e.map((e,a)=>(0,r.jsx)(q.f,{fill:tM[a%tM.length]},a))})]})}),(0,r.jsx)(t5,{rows:e})]}),(0,r.jsx)(t8,{title:"Backup Scope",description:"What areas of the platform are being backed up.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:a,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",width:120,tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--backup-primary)",radius:[0,12,12,0]})]})})}),(0,r.jsxs)(t8,{title:"Storage Types",description:"Where backup snapshots are stored.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:t,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:t.map((e,a)=>(0,r.jsx)(q.f,{fill:tM[a%tM.length]},a))})]})}),(0,r.jsx)(t5,{rows:t})]})]})}function tX({form:e,setForm:a,saving:t,onClose:i,onSubmit:s}){let n=(e,t)=>{a(a=>({...a,[e]:t}))};return(0,r.jsx)("div",{className:"backup-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("form",{className:"backup-modal",onSubmit:s,children:[(0,r.jsxs)("div",{className:"backup-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:e.id?"Edit Backup":"New Backup Record"}),(0,r.jsx)("p",{children:"Create or update a backup/recovery record."})]}),(0,r.jsx)("button",{type:"button",onClick:i,disabled:t,"aria-label":"Close",children:"✕"})]}),(0,r.jsxs)("div",{className:"backup-form-grid",children:[(0,r.jsxs)("label",{children:["Backup name",(0,r.jsx)("input",{value:e.name,onChange:e=>n("name",e.target.value),placeholder:"Daily Full Platform Backup",required:!0})]}),(0,r.jsxs)("label",{children:["Status",(0,r.jsx)("select",{value:e.status,onChange:e=>n("status",e.target.value),children:tz.map(e=>(0,r.jsx)("option",{value:e,children:tU(e)},e))})]}),(0,r.jsxs)("label",{children:["Scope",(0,r.jsx)("select",{value:e.scope,onChange:e=>n("scope",e.target.value),children:tA.map(e=>(0,r.jsx)("option",{value:e,children:tU(e)},e))})]}),(0,r.jsxs)("label",{children:["Storage",(0,r.jsx)("select",{value:e.storage,onChange:e=>n("storage",e.target.value),children:tD.map(e=>(0,r.jsx)("option",{value:e,children:tU(e)},e))})]}),(0,r.jsxs)("label",{children:["Frequency",(0,r.jsx)("select",{value:e.frequency,onChange:e=>n("frequency",e.target.value),children:tT.map(e=>(0,r.jsx)("option",{value:e,children:tU(e)},e))})]}),(0,r.jsxs)("label",{children:["Size MB",(0,r.jsx)("input",{type:"number",min:"0",value:e.sizeMb,onChange:e=>n("sizeMb",e.target.value)})]}),(0,r.jsxs)("label",{children:["Retention days",(0,r.jsx)("input",{type:"number",min:"1",value:e.retentionDays,onChange:e=>n("retentionDays",e.target.value)})]}),(0,r.jsxs)("label",{children:["Checksum",(0,r.jsx)("input",{value:e.checksum,onChange:e=>n("checksum",e.target.value),placeholder:"sha256:..."})]}),(0,r.jsxs)("label",{children:["Storage location",(0,r.jsx)("input",{value:e.location,onChange:e=>n("location",e.target.value),placeholder:"s3://bucket/path or server snapshot id"})]}),(0,r.jsxs)("label",{children:["Initiated by",(0,r.jsx)("input",{value:e.initiatedBy,onChange:e=>n("initiatedBy",e.target.value),placeholder:"developer@example.com"})]}),(0,r.jsxs)("label",{className:"wide",children:["Description",(0,r.jsx)("textarea",{value:e.description,onChange:e=>n("description",e.target.value),placeholder:"Describe the backup purpose, contents or recovery notes.",rows:3})]})]}),(0,r.jsxs)("section",{className:"backup-option-grid",children:[(0,r.jsx)(t3,{label:"Encrypted",checked:e.encrypted,onChange:e=>n("encrypted",e)}),(0,r.jsx)(t3,{label:"Compressed",checked:e.compressed,onChange:e=>n("compressed",e)})]}),(0,r.jsxs)("div",{className:"backup-modal-actions",children:[(0,r.jsx)("button",{type:"button",onClick:i,disabled:t,children:"Cancel"}),(0,r.jsx)("button",{type:"submit",disabled:t,children:t?"Saving...":e.id?"Save Changes":"Create Record"})]})]})})}function tZ({policy:e,setPolicy:a,onClose:t,onSubmit:i}){let s=(e,t)=>{a(a=>({...a,[e]:t}))};return(0,r.jsx)("div",{className:"backup-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("form",{className:"backup-modal small",onSubmit:i,children:[(0,r.jsxs)("div",{className:"backup-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Backup Policy"}),(0,r.jsx)("p",{children:"Configure your default backup schedule and retention plan."})]}),(0,r.jsx)("button",{type:"button",onClick:t,"aria-label":"Close",children:"✕"})]}),(0,r.jsxs)("section",{className:"backup-option-grid",children:[(0,r.jsx)(t3,{label:"Enable Scheduled Backups",checked:e.enabled,onChange:e=>s("enabled",e)}),(0,r.jsx)(t3,{label:"Encrypt Backups",checked:e.encrypted,onChange:e=>s("encrypted",e)}),(0,r.jsx)(t3,{label:"Compress Backups",checked:e.compressed,onChange:e=>s("compressed",e)})]}),(0,r.jsxs)("div",{className:"backup-form-grid",children:[(0,r.jsxs)("label",{children:["Frequency",(0,r.jsx)("select",{value:e.frequency,onChange:e=>s("frequency",e.target.value),children:tT.map(e=>(0,r.jsx)("option",{value:e,children:tU(e)},e))})]}),(0,r.jsxs)("label",{children:["Retention days",(0,r.jsx)("input",{type:"number",min:"1",value:e.retentionDays,onChange:e=>s("retentionDays",e.target.value)})]}),(0,r.jsxs)("label",{children:["Storage",(0,r.jsx)("select",{value:e.storage,onChange:e=>s("storage",e.target.value),children:tD.map(e=>(0,r.jsx)("option",{value:e,children:tU(e)},e))})]}),(0,r.jsxs)("label",{children:["Notify email",(0,r.jsx)("input",{type:"email",value:e.notifyEmail,onChange:e=>s("notifyEmail",e.target.value),placeholder:"developer@example.com"})]})]}),(0,r.jsxs)("div",{className:"backup-modal-actions",children:[(0,r.jsx)("button",{type:"button",onClick:t,children:"Cancel"}),(0,r.jsx)("button",{type:"submit",children:"Save Policy"})]})]})})}function t0({backup:e,note:a,setNote:t,onClose:i,onSubmit:s}){return(0,r.jsx)("div",{className:"backup-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("form",{className:"backup-modal small",onSubmit:s,children:[(0,r.jsxs)("div",{className:"backup-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Request Restore"}),(0,r.jsx)("p",{children:e.name})]}),(0,r.jsx)("button",{type:"button",onClick:i,"aria-label":"Close",children:"✕"})]}),(0,r.jsxs)("section",{className:"backup-warning",children:[(0,r.jsx)("strong",{children:"Restore safety"}),(0,r.jsx)("p",{children:"A real restore should be performed on the backend with audit logs, backup verification, transaction safety and a rollback plan."})]}),(0,r.jsxs)("label",{className:"backup-restore-label",children:["Restore note",(0,r.jsx)("textarea",{value:a,onChange:e=>t(e.target.value),rows:5,placeholder:"Explain why this restore is needed and what scope should be restored."})]}),(0,r.jsxs)("div",{className:"backup-modal-actions",children:[(0,r.jsx)("button",{type:"button",onClick:i,children:"Cancel"}),(0,r.jsx)("button",{type:"submit",children:"Request Restore"})]})]})})}function t1({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"backup-stat",children:[(0,r.jsxs)("span",{children:[e,(0,r.jsx)("b",{children:i})]}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:t})]})}function t2({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`backup-chip ${a}`,children:e})}function t4({text:e}){return(0,r.jsx)("div",{className:"backup-empty",children:e})}function t8({title:e,description:a,children:t}){return(0,r.jsxs)("section",{className:"backup-chart-card",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function t5({rows:e}){return(0,r.jsx)("div",{className:"backup-legend",children:e.map((e,a)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{style:{background:tM[a%tM.length]}}),e.label,": ",e.value]},`${e.label}-${a}`))})}function t3({label:e,checked:a,onChange:t}){return(0,r.jsxs)("label",{className:"backup-toggle",children:[(0,r.jsx)("input",{type:"checkbox",checked:a,onChange:e=>t(e.target.checked)}),(0,r.jsx)("span",{children:e})]})}let t6=`
@keyframes backupSpin { to { transform: rotate(360deg); } }

.backup-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  padding: 8px;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--backup-primary) 10%, transparent), transparent 34rem),
    #f8fafc;
  color: #0f172a;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}

.backup-page *,
.backup-page *::before,
.backup-page *::after {
  box-sizing: border-box;
}

.backup-page button,
.backup-page input,
.backup-page select,
.backup-page textarea {
  font: inherit;
  max-width: 100%;
}

.backup-state {
  min-height: min(420px, calc(100dvh - 32px));
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .08);
  text-align: center;
}

.backup-state h2 {
  margin: 0;
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 1000;
  letter-spacing: -.04em;
}

.backup-state p {
  max-width: 34rem;
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.6;
}

.backup-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--backup-primary) 18%, transparent);
  border-top-color: var(--backup-primary);
  animation: backupSpin .8s linear infinite;
}

.backup-hero {
  display: grid;
  gap: 16px;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, .18), transparent 20rem),
    linear-gradient(135deg, var(--backup-primary), #0f172a 72%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .18);
  overflow: hidden;
}

.backup-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .14em;
  opacity: .82;
}

.backup-hero h1 {
  margin: 8px 0 0;
  font-size: clamp(28px, 8vw, 44px);
  line-height: 1.02;
  font-weight: 1000;
  letter-spacing: -.07em;
}

.backup-hero p {
  max-width: 850px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: .9;
}

.backup-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.backup-switch {
  display: inline-flex;
  gap: 5px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(14px);
}

.backup-switch button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.backup-switch button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .16);
}

.backup-white-btn,
.backup-glass-btn {
  min-height: 40px;
  border-radius: 999px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.backup-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.backup-glass-btn {
  border: 1px solid rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .14);
  color: #fff;
}

.backup-glass-btn:disabled {
  opacity: .7;
  cursor: not-allowed;
}

.backup-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 850;
}

.backup-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.backup-alert.success {
  background: #dcfce7;
  color: #166534;
}

.backup-stat-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.backup-stat,
.backup-policy-card,
.backup-card,
.backup-chart-card,
.backup-table-card {
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.backup-stat {
  padding: 16px;
}

.backup-stat span {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.backup-stat strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(24px, 8vw, 34px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
}

.backup-stat small {
  display: block;
  margin-top: 8px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.backup-policy-card {
  display: grid;
  gap: 12px;
  margin-top: 10px;
  padding: 14px;
}

.backup-policy-card h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 1000;
}

.backup-policy-card p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.backup-policy-card > div:last-child,
.backup-actions,
.backup-table-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.backup-policy-card button,
.backup-actions button,
.backup-table-actions button,
.backup-modal-actions button {
  min-height: 38px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: color-mix(in srgb, var(--backup-primary) 10%, white);
  color: var(--backup-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.backup-actions button:first-child,
.backup-table-actions button:first-child,
.backup-modal-actions button:last-child {
  background: var(--backup-primary);
  color: #fff;
}

.backup-actions button.danger,
.backup-table-actions button.danger {
  background: #fee2e2;
  color: #b91c1c;
}

.backup-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
}

.backup-toolbar input,
.backup-toolbar select {
  min-height: 42px;
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .3);
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
}

.backup-toolbar button {
  min-height: 42px;
  border: 0;
  border-radius: 16px;
  background: color-mix(in srgb, var(--backup-primary) 10%, white);
  color: var(--backup-primary);
  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.backup-card-grid,
.backup-chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.backup-card,
.backup-chart-card,
.backup-table-card {
  min-width: 0;
  padding: 14px;
}

.backup-card.failed {
  border-color: rgba(220, 38, 38, .24);
  background: linear-gradient(180deg, #fff, #fff7f7);
}

.backup-card.restore_requested {
  border-color: rgba(249, 115, 22, .24);
}

.backup-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.backup-avatar {
  width: 46px;
  height: 46px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--backup-primary), #0f172a);
  color: #fff;
  font-size: 18px;
  font-weight: 1000;
}

.backup-chip-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.backup-card h2 {
  margin: 14px 0 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.backup-card p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.45;
}

.backup-mini-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 14px;
}

.backup-mini-grid span {
  padding: 10px;
  border-radius: 16px;
  background: #f8fafc;
  color: #0f172a;
  font-size: 12px;
  font-weight: 850;
}

.backup-mini-grid b {
  display: block;
  color: #64748b;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 3px;
}

.backup-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.backup-pills span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 9px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
  max-width: 100%;
  overflow-wrap: anywhere;
}

.backup-actions {
  margin-top: 14px;
}

.backup-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
  white-space: nowrap;
}

.backup-chip.green { background: #dcfce7; color: #166534; }
.backup-chip.blue { background: #dbeafe; color: #1d4ed8; }
.backup-chip.purple { background: #f3e8ff; color: #7e22ce; }
.backup-chip.orange { background: #ffedd5; color: #c2410c; }
.backup-chip.red { background: #fee2e2; color: #b91c1c; }
.backup-chip.gray { background: #f1f5f9; color: #475569; }

.backup-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.backup-table-wrap table {
  width: 100%;
  min-width: 1180px;
  border-collapse: collapse;
}

.backup-table-wrap th {
  text-align: left;
  color: #64748b;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.backup-table-wrap td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .16);
  font-size: 13px;
  vertical-align: top;
}

.backup-table-wrap strong {
  display: block;
  font-weight: 1000;
}

.backup-table-wrap small {
  display: block;
  margin-top: 3px;
  color: #64748b;
  font-size: 11px;
  line-height: 1.35;
}

.backup-chart-card h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.backup-chart-card p {
  margin: 5px 0 10px;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.backup-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

.backup-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 9px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.backup-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

.backup-empty {
  grid-column: 1 / -1;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
  color: #64748b;
  font-size: 13px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, .35);
}

.backup-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15, 23, 42, .58);
  backdrop-filter: blur(12px);
}

.backup-modal {
  width: min(980px, 100%);
  max-height: min(92dvh, 920px);
  overflow-y: auto;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 30px 100px rgba(15, 23, 42, .35);
  border: 1px solid rgba(255, 255, 255, .24);
  padding: 14px;
}

.backup-modal.small {
  width: min(680px, 100%);
}

.backup-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 4px 14px;
}

.backup-modal-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.backup-modal-head p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.backup-modal-head button {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: #f1f5f9;
  color: #0f172a;
  font-weight: 1000;
  cursor: pointer;
}

.backup-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.backup-form-grid label,
.backup-restore-label {
  display: grid;
  gap: 6px;
  color: #334155;
  font-size: 12px;
  font-weight: 950;
}

.backup-form-grid input,
.backup-form-grid select,
.backup-form-grid textarea,
.backup-restore-label textarea {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .32);
  border-radius: 16px;
  background: #fff;
  color: #0f172a;
  padding: 11px 12px;
  font-size: 13px;
  font-weight: 800;
}

.backup-form-grid input,
.backup-form-grid select {
  min-height: 42px;
}

.backup-form-grid textarea,
.backup-restore-label textarea {
  resize: vertical;
}

.backup-option-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 12px;
  padding: 12px;
  border-radius: 22px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
}

.backup-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 36px;
  padding: 0 10px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .18);
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
}

.backup-toggle input {
  width: 16px;
  height: 16px;
  accent-color: var(--backup-primary);
}

.backup-warning {
  padding: 12px;
  border-radius: 20px;
  background: #fff7ed;
  border: 1px solid rgba(249, 115, 22, .24);
  margin-bottom: 12px;
}

.backup-warning strong {
  display: block;
  color: #9a3412;
  font-size: 13px;
  font-weight: 1000;
}

.backup-warning p {
  margin: 5px 0 0;
  color: #c2410c;
  font-size: 12px;
  line-height: 1.5;
}

.backup-modal-actions {
  position: sticky;
  bottom: -14px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 14px;
  padding: 12px 0 2px;
  background: linear-gradient(to top, #fff 70%, transparent);
}

.backup-modal-actions button:first-child {
  background: #f1f5f9;
  color: #0f172a;
}

.backup-modal-actions button:disabled {
  opacity: .65;
  cursor: not-allowed;
}

@media (min-width: 520px) {
  .backup-stat-grid,
  .backup-option-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .backup-toolbar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .backup-mini-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 760px) {
  .backup-card-grid,
  .backup-chart-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .backup-form-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .backup-form-grid .wide {
    grid-column: 1 / -1;
  }

  .backup-policy-card {
    grid-template-columns: 1fr auto;
    align-items: center;
  }

  .backup-modal-backdrop {
    place-items: center;
    padding: 18px;
  }

  .backup-modal {
    padding: 18px;
  }
}

@media (min-width: 920px) {
  .backup-page {
    padding: 14px;
  }

  .backup-hero {
    grid-template-columns: 1fr auto;
    align-items: end;
    padding: 24px;
  }

  .backup-stat-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .backup-toolbar {
    grid-template-columns: minmax(240px, 2fr) repeat(5, minmax(120px, 1fr)) auto;
  }

  .backup-mini-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1180px) {
  .backup-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`,t9="eleeveon_developer_integrations",t7=["payment","email","sms","webhook","storage","analytics","identity","ai","external_api","other"],re=["active","inactive","pending","failed","testing","deprecated"],ra=["production","sandbox","development"],rt=["var(--integration-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],rr={name:"",provider:"",type:"external_api",status:"pending",environment:"sandbox",endpoint:"",publicKey:"",secretConfigured:!1,webhookUrl:"",requestsToday:"0",failuresToday:"0",notes:""},ri=[{id:"integration-paystack",name:"Paystack Payments",provider:"Paystack",type:"payment",status:"pending",environment:"sandbox",endpoint:"https://api.paystack.co",publicKey:"",secretConfigured:!1,webhookUrl:"",lastTestStatus:"never",lastTestMessage:"Not tested yet.",lastTestAt:null,lastSyncAt:null,requestsToday:0,failuresToday:0,notes:"Use for subscription payments, school invoices and checkout.",createdAt:Date.now()-6912e5,updatedAt:Date.now()-1728e5},{id:"integration-email",name:"Email Delivery",provider:"SMTP / Email Provider",type:"email",status:"inactive",environment:"production",endpoint:"",publicKey:"",secretConfigured:!1,webhookUrl:"",lastTestStatus:"never",lastTestMessage:"No provider configured.",lastTestAt:null,lastSyncAt:null,requestsToday:0,failuresToday:0,notes:"Use for password reset, invitations and notifications.",createdAt:Date.now()-432e6,updatedAt:Date.now()-864e5},{id:"integration-webhooks",name:"Platform Webhooks",provider:"Eleeveon Webhooks",type:"webhook",status:"active",environment:"development",endpoint:"/webhooks/platform",publicKey:"",secretConfigured:!0,webhookUrl:"/webhooks/platform",lastTestStatus:"success",lastTestMessage:"Webhook endpoint reachable.",lastTestAt:Date.now()-216e5,lastSyncAt:Date.now()-216e5,requestsToday:12,failuresToday:1,notes:"Receives internal platform events.",createdAt:Date.now()-10368e5,updatedAt:Date.now()-216e5}];function rs(e,a=[]){if(Array.isArray(e))return e;if(!e||"object"!=typeof e)return[];for(let t of a)if(Array.isArray(e[t]))return e[t];return Array.isArray(e.data)?e.data:Array.isArray(e.items)?e.items:Array.isArray(e.results)?e.results:Array.isArray(e.records)?e.records:[]}let rn=e=>{if(!e)return 0;let a="number"==typeof e?e:new Date(e).getTime();return Number.isFinite(a)?a:0},rd=e=>{let a=rn(e);return a?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(a)):"Not set"},rl=e=>new Intl.NumberFormat("en-GH",{notation:"compact",maximumFractionDigits:1}).format(Number(e||0)),ro=e=>e.replace(/_/g," ").replace(/\b\w/g,e=>e.toUpperCase()),rc=(e,a=0)=>Math.max(a,Number.isFinite(Number(e))?Number(e):a),rp=e=>"active"===e?"green":"pending"===e||"testing"===e?"orange":"failed"===e?"red":"gray",ru=e=>{if("failed"===e.status)return 0;if(["inactive","deprecated"].includes(e.status))return 30;let a=Number(e.requestsToday||0),t=Number(e.failuresToday||0);return a||"active"!==e.status?a?Math.round(Math.max(0,100-t/a*100)):50:80};function rm(e,a){let t=new Map;return e.forEach(e=>{let r=String(a(e)||"Unknown");t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)}function rg(e,a){let t=Date.now();return{id:String(e.id||e.localId||e.integrationId||`integration-${a}-${t}`),name:e.name||e.title||`Integration ${a+1}`,provider:e.provider||e.vendor||e.service||"Unknown Provider",type:t7.includes(e.type)?e.type:"external_api",status:re.includes(e.status)?e.status:e.enabled?"active":"inactive",environment:ra.includes(e.environment)?e.environment:"development",endpoint:e.endpoint||e.baseUrl||e.url||null,publicKey:e.publicKey||e.public_key||null,secretConfigured:!!(e.secretConfigured??e.hasSecret??e.secretKeyConfigured),webhookUrl:e.webhookUrl||e.webhook_url||null,lastTestStatus:e.lastTestStatus||e.testStatus||"never",lastTestMessage:e.lastTestMessage||e.testMessage||null,lastTestAt:e.lastTestAt||null,lastSyncAt:e.lastSyncAt||e.syncedAt||null,requestsToday:Number(e.requestsToday||e.requests||0),failuresToday:Number(e.failuresToday||e.failures||0),notes:e.notes||e.description||null,createdAt:e.createdAt||t,updatedAt:e.updatedAt||e.createdAt||t}}let rx=()=>{try{let e=window.localStorage.getItem(t9);if(!e)return window.localStorage.setItem(t9,JSON.stringify(ri)),ri;let a=rs(JSON.parse(e),["integrations","items","data"]).map(rg);return a.length?a:ri}catch{return ri}},rh=e=>{try{window.localStorage.setItem(t9,JSON.stringify(e))}catch{}};function rb({navigate:e}){let{accountId:a,authenticated:t,loading:s}=(0,g.F)(),{settings:n}=(0,x.t)(),d=n?.primaryColor||"#2563eb",[l,o]=(0,i.useState)("cards"),[c,p]=(0,i.useState)([]),[u,h]=(0,i.useState)(!0),[b,f]=(0,i.useState)(!1),[v,y]=(0,i.useState)(!1),[j,w]=(0,i.useState)(""),[k,N]=(0,i.useState)("all"),[S,C]=(0,i.useState)("all"),[A,z]=(0,i.useState)("all"),[D,T]=(0,i.useState)(""),[P,R]=(0,i.useState)(""),[M,q]=(0,i.useState)(!1),[L,I]=(0,i.useState)(rr),E=async(e=!1)=>{try{e?f(!0):h(!0),T("");let a=await (0,m.uE)("/developer/integrations").catch(async()=>(0,m.uE)("/integrations").catch(()=>null)),t=rs(a,["integrations","items","data"]).map(rg);t.length?(p(t),rh(t)):p(rx())}catch(e){T(e?.message||"Could not load integrations. Showing local saved records."),p(rx())}finally{h(!1),f(!1)}};(0,i.useEffect)(()=>{if(!s){if(!t||!a)return void h(!1);E()}},[s,t,a]);let $=(0,i.useMemo)(()=>{let e=j.trim().toLowerCase();return c.filter(a=>{let t=`${a.name} ${a.provider} ${a.type} ${a.status} ${a.environment} ${a.endpoint||""} ${a.webhookUrl||""} ${a.notes||""}`.toLowerCase();return(!e||t.includes(e))&&("all"===k||a.type===k)&&("all"===S||a.status===S)&&("all"===A||a.environment===A)}).sort((e,a)=>rn(a.updatedAt)-rn(e.updatedAt))},[c,j,k,S,A]),F=c.filter(e=>"active"===e.status).length,U=c.filter(e=>"failed"===e.status).length,O=c.filter(e=>"pending"===e.status||"testing"===e.status).length,_=c.reduce((e,a)=>e+Number(a.requestsToday||0),0),K=c.reduce((e,a)=>e+Number(a.failuresToday||0),0),B=c.length?Math.round(c.reduce((e,a)=>e+ru(a),0)/c.length):0,H=(0,i.useMemo)(()=>rm(c,e=>ro(e.status)),[c]),G=(0,i.useMemo)(()=>rm(c,e=>ro(e.type)),[c]),W=(0,i.useMemo)(()=>rm(c,e=>ro(e.environment)),[c]),V=(0,i.useMemo)(()=>[...c].sort((e,a)=>a.requestsToday-e.requestsToday).slice(0,8).map(e=>({label:e.name.length>15?`${e.name.slice(0,15)}…`:e.name,value:e.requestsToday})),[c]),J=(0,i.useMemo)(()=>[...c].sort((e,a)=>a.failuresToday-e.failuresToday).slice(0,8).map(e=>({label:e.name.length>15?`${e.name.slice(0,15)}…`:e.name,value:e.failuresToday})),[c]),Q=(0,i.useMemo)(()=>["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((e,a)=>({label:e,value:Math.round(_*[.12,.18,.15,.2,.22,.08,.05][a])})),[_]),Y=e=>{T(""),R(""),I({id:e.id,name:e.name,provider:e.provider,type:e.type,status:e.status,environment:e.environment,endpoint:e.endpoint||"",publicKey:e.publicKey||"",secretConfigured:e.secretConfigured,webhookUrl:e.webhookUrl||"",requestsToday:String(e.requestsToday||0),failuresToday:String(e.failuresToday||0),notes:e.notes||""}),q(!0)},X=()=>{v||(q(!1),I(rr))},Z=async e=>{if(e.preventDefault(),!L.name.trim())return T("Integration name is required.");if(!L.provider.trim())return T("Provider is required.");try{let e;y(!0),T(""),R("");let a=(e=Date.now(),{id:L.id||`integration-${e}`,name:L.name.trim(),provider:L.provider.trim(),type:L.type,status:L.status,environment:L.environment,endpoint:L.endpoint.trim()||null,publicKey:L.publicKey.trim()||null,secretConfigured:L.secretConfigured,webhookUrl:L.webhookUrl.trim()||null,lastTestStatus:"never",lastTestMessage:"Not tested yet.",lastTestAt:null,lastSyncAt:null,requestsToday:rc(L.requestsToday),failuresToday:rc(L.failuresToday),notes:L.notes.trim()||null,createdAt:e,updatedAt:e});if(L.id){let e=await (0,m.uE)(`/developer/integrations/${L.id}`,{method:"PATCH",body:a}).catch(async()=>(0,m.uE)(`/integrations/${L.id}`,{method:"PATCH",body:a}).catch(()=>null)),t=rg(e?.integration||e?.data||e||a,0);p(e=>{let a=e.map(e=>e.id===L.id?{...e,...t,id:L.id,createdAt:e.createdAt,updatedAt:Date.now()}:e);return rh(a),a}),R("Integration updated.")}else{let e=await (0,m.uE)("/developer/integrations",{method:"POST",body:a}).catch(async()=>(0,m.uE)("/integrations",{method:"POST",body:a}).catch(()=>null)),t=rg(e?.integration||e?.data||e||a,0);p(e=>{let a=[t,...e];return rh(a),a}),R("Integration created.")}X()}catch(e){T(e?.message||"Could not save integration.")}finally{y(!1)}},ee=async(e,a,t)=>{try{T(""),R(""),await (0,m.uE)(`/developer/integrations/${e.id}`,{method:"PATCH",body:a}).catch(async()=>(0,m.uE)(`/integrations/${e.id}`,{method:"PATCH",body:a}).catch(()=>null)),p(t=>{let r=t.map(t=>t.id===e.id?{...t,...a,updatedAt:Date.now()}:t);return rh(r),r}),R(t)}catch(e){T(e?.message||"Could not update integration.")}},ea=e=>ee(e,{status:"active"===e.status?"inactive":"active"},"active"===e.status?"Integration disabled.":"Integration enabled."),et=async e=>{try{await ee(e,{status:"testing",lastTestStatus:"never",lastTestMessage:"Testing integration..."},"Testing integration...");let a=await (0,m.uE)(`/developer/integrations/${e.id}/test`,{method:"POST",body:{id:e.id,type:e.type,provider:e.provider,endpoint:e.endpoint,webhookUrl:e.webhookUrl,environment:e.environment}}).catch(async()=>(0,m.uE)(`/integrations/${e.id}/test`,{method:"POST",body:{id:e.id}}).catch(()=>null)),t=a?.ok!==!1;await ee(e,{status:t?"active":"failed",lastTestStatus:t?"success":"failed",lastTestMessage:a?.message||(t?"Integration test completed successfully.":"Integration test failed."),lastTestAt:Date.now(),lastSyncAt:t?Date.now():e.lastSyncAt},t?"Integration test completed successfully.":"Integration test failed.")}catch(a){await ee(e,{status:"failed",lastTestStatus:"failed",lastTestMessage:a?.message||"Integration test failed.",lastTestAt:Date.now()},"Integration test failed.")}},er=async e=>{if(window.confirm(`Delete "${e.name}" from integrations?`))try{await (0,m.uE)(`/developer/integrations/${e.id}`,{method:"DELETE"}).catch(async()=>(0,m.uE)(`/integrations/${e.id}`,{method:"DELETE"}).catch(()=>null)),p(a=>{let t=a.filter(a=>a.id!==e.id);return rh(t),t}),R("Integration deleted.")}catch(e){T(e?.message||"Could not delete integration.")}};return u||s?(0,r.jsxs)("main",{className:"integration-page",style:{"--integration-primary":d},children:[(0,r.jsx)("style",{children:rz}),(0,r.jsxs)("section",{className:"integration-state",children:[(0,r.jsx)("div",{className:"integration-spinner"}),(0,r.jsx)("h2",{children:"Loading integrations..."}),(0,r.jsx)("p",{children:"Preparing platform APIs, webhooks and service health."})]})]}):t&&a?(0,r.jsxs)("main",{className:"integration-page",style:{"--integration-primary":d},children:[(0,r.jsx)("style",{children:rz}),(0,r.jsxs)("section",{className:"integration-hero",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"integration-eyebrow",children:"External services"}),(0,r.jsx)("h1",{children:"Platform Integrations"}),(0,r.jsx)("p",{children:"Manage payment gateways, webhooks, email/SMS providers, storage, analytics and external APIs powering Eleeveon."})]}),(0,r.jsxs)("div",{className:"integration-hero-actions",children:[(0,r.jsxs)("div",{className:"integration-switch",children:[(0,r.jsx)("button",{type:"button",className:"cards"===l?"active":"",onClick:()=>o("cards"),children:"Cards"}),(0,r.jsx)("button",{type:"button",className:"table"===l?"active":"",onClick:()=>o("table"),children:"Table"}),(0,r.jsx)("button",{type:"button",className:"analytics"===l?"active":"",onClick:()=>o("analytics"),children:"Charts"})]}),(0,r.jsx)("button",{type:"button",className:"integration-white-btn",onClick:()=>{T(""),R(""),I(rr),q(!0)},children:"New Integration"}),(0,r.jsx)("button",{type:"button",className:"integration-glass-btn",onClick:()=>{let e,a,t;e=new Blob([JSON.stringify({exportedAt:new Date().toISOString(),integrations:c},null,2)],{type:"application/json"}),a=URL.createObjectURL(e),(t=document.createElement("a")).href=a,t.download="eleeveon-integrations.json",t.click(),URL.revokeObjectURL(a),R("Integrations exported.")},children:"Export"}),(0,r.jsx)("button",{type:"button",className:"integration-glass-btn",onClick:()=>E(!0),disabled:b,children:b?"Refreshing...":"Refresh"})]})]}),(D||P)&&(0,r.jsx)("section",{className:`integration-alert ${D?"error":"success"}`,children:D||P}),(0,r.jsxs)("section",{className:"integration-stat-grid",children:[(0,r.jsx)(rw,{label:"Integrations",value:c.length,detail:`${$.length} shown`,icon:"\uD83D\uDD0C"}),(0,r.jsx)(rw,{label:"Active",value:F,detail:`${O} pending/testing`,icon:"✅"}),(0,r.jsx)(rw,{label:"Failures",value:U,detail:`${K} failures today`,icon:"⚠️"}),(0,r.jsx)(rw,{label:"Health",value:`${B}%`,detail:`${rl(_)} requests today`,icon:"\uD83D\uDCC8"})]}),(0,r.jsxs)("section",{className:"integration-toolbar",children:[(0,r.jsx)("input",{value:j,onChange:e=>w(e.target.value),placeholder:"Search name, provider, endpoint, notes..."}),(0,r.jsxs)("select",{value:k,onChange:e=>N(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All types"}),t7.map(e=>(0,r.jsx)("option",{value:e,children:ro(e)},e))]}),(0,r.jsxs)("select",{value:S,onChange:e=>C(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All statuses"}),re.map(e=>(0,r.jsx)("option",{value:e,children:ro(e)},e))]}),(0,r.jsxs)("select",{value:A,onChange:e=>z(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All environments"}),ra.map(e=>(0,r.jsx)("option",{value:e,children:ro(e)},e))]}),(0,r.jsx)("button",{type:"button",onClick:()=>{w(""),N("all"),C("all"),z("all")},children:"Reset"})]}),"analytics"===l?(0,r.jsx)(ry,{statusData:H,typeData:G,environmentData:W,usageData:V,failureData:J,trendData:Q}):"table"===l?(0,r.jsx)(rv,{rows:$,onEdit:Y,onToggle:ea,onTest:et,onDelete:er}):(0,r.jsx)(rf,{rows:$,onEdit:Y,onToggle:ea,onTest:et,onDelete:er,navigate:e}),M&&(0,r.jsx)(rj,{form:L,setForm:I,saving:v,onClose:X,onSubmit:Z})]}):(0,r.jsxs)("main",{className:"integration-page",style:{"--integration-primary":d},children:[(0,r.jsx)("style",{children:rz}),(0,r.jsxs)("section",{className:"integration-state",children:[(0,r.jsx)("h2",{children:"Developer access required"}),(0,r.jsx)("p",{children:"Sign in with a developer account to manage integrations."})]})]})}function rf({rows:e,onEdit:a,onToggle:t,onTest:i,onDelete:s,navigate:n}){return(0,r.jsxs)("section",{className:"integration-card-grid",children:[e.map(e=>{var d,l;return(0,r.jsxs)("article",{className:`integration-card ${e.status}`,children:[(0,r.jsxs)("div",{className:"integration-card-top",children:[(0,r.jsx)("span",{className:"integration-avatar",children:"payment"===(d=e.type)?"\uD83D\uDCB3":"email"===d?"\uD83D\uDCE7":"sms"===d?"\uD83D\uDCAC":"webhook"===d?"\uD83E\uDE9D":"storage"===d?"\uD83D\uDDC4️":"analytics"===d?"\uD83D\uDCCA":"identity"===d?"\uD83D\uDD10":"ai"===d?"\uD83E\uDD16":"external_api"===d?"\uD83D\uDD0C":"⚙️"}),(0,r.jsxs)("div",{className:"integration-chip-row",children:[(0,r.jsx)(rk,{tone:rp(e.status),children:ro(e.status)}),(0,r.jsx)(rk,{tone:"payment"===(l=e.type)?"green":"webhook"===l||"external_api"===l?"blue":"ai"===l||"analytics"===l?"purple":"email"===l||"sms"===l?"orange":"gray",children:ro(e.type)})]})]}),(0,r.jsx)("h2",{children:e.name}),(0,r.jsxs)("p",{children:[e.provider," \xb7 ",ro(e.environment)]}),(0,r.jsx)("div",{className:"integration-health",children:(0,r.jsx)("span",{style:{width:`${ru(e)}%`}})}),(0,r.jsxs)("div",{className:"integration-mini-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Health"}),ru(e),"%"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Requests"}),rl(e.requestsToday)]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Failures"}),e.failuresToday]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Secret"}),e.secretConfigured?"Configured":"Missing"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Last Test"}),rd(e.lastTestAt)]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Last Sync"}),rd(e.lastSyncAt)]})]}),(0,r.jsxs)("div",{className:"integration-pills",children:[e.endpoint&&(0,r.jsx)("span",{children:e.endpoint}),e.webhookUrl&&(0,r.jsx)("span",{children:e.webhookUrl}),e.lastTestStatus&&(0,r.jsx)("span",{children:e.lastTestStatus}),e.notes&&(0,r.jsx)("span",{children:e.notes})]}),(0,r.jsxs)("div",{className:"integration-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Edit"}),(0,r.jsx)("button",{type:"button",onClick:()=>i(e),children:"Test"}),(0,r.jsx)("button",{type:"button",onClick:()=>t(e),children:"active"===e.status?"Disable":"Enable"}),(0,r.jsx)("button",{type:"button",onClick:()=>n?.("auditLogs"),children:"Audit"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>s(e),children:"Delete"})]})]},e.id)}),!e.length&&(0,r.jsx)(rN,{text:"No integrations match your filters."})]})}function rv({rows:e,onEdit:a,onToggle:t,onTest:i,onDelete:s}){return(0,r.jsxs)("section",{className:"integration-table-card",children:[(0,r.jsx)("div",{className:"integration-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Integration"}),(0,r.jsx)("th",{children:"Type"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Environment"}),(0,r.jsx)("th",{children:"Health"}),(0,r.jsx)("th",{children:"Requests"}),(0,r.jsx)("th",{children:"Failures"}),(0,r.jsx)("th",{children:"Secret"}),(0,r.jsx)("th",{children:"Last Test"}),(0,r.jsx)("th",{children:"Endpoint"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:e.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("strong",{children:e.name}),(0,r.jsx)("small",{children:e.provider})]}),(0,r.jsx)("td",{children:ro(e.type)}),(0,r.jsx)("td",{children:(0,r.jsx)(rk,{tone:rp(e.status),children:ro(e.status)})}),(0,r.jsx)("td",{children:ro(e.environment)}),(0,r.jsxs)("td",{children:[ru(e),"%"]}),(0,r.jsx)("td",{children:rl(e.requestsToday)}),(0,r.jsx)("td",{children:e.failuresToday}),(0,r.jsx)("td",{children:e.secretConfigured?"Configured":"Missing"}),(0,r.jsx)("td",{children:rd(e.lastTestAt)}),(0,r.jsx)("td",{children:(0,r.jsx)("small",{children:e.endpoint||e.webhookUrl||"—"})}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"integration-table-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Edit"}),(0,r.jsx)("button",{type:"button",onClick:()=>i(e),children:"Test"}),(0,r.jsx)("button",{type:"button",onClick:()=>t(e),children:"active"===e.status?"Disable":"Enable"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>s(e),children:"Delete"})]})})]},e.id))})]})}),!e.length&&(0,r.jsx)(rN,{text:"No integrations match your filters."})]})}function ry({statusData:e,typeData:a,environmentData:t,usageData:i,failureData:s,trendData:m}){return(0,r.jsxs)("section",{className:"integration-chart-grid",children:[(0,r.jsx)(rS,{title:"Usage Trend",description:"Estimated request traffic trend across integrations.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(eS.Q,{data:m,children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"integrationTrend",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"8%",stopColor:"var(--integration-primary)",stopOpacity:.28}),(0,r.jsx)("stop",{offset:"95%",stopColor:"var(--integration-primary)",stopOpacity:.02})]})}),(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(p.m,{}),(0,r.jsx)(eC.Gk,{type:"monotone",dataKey:"value",stroke:"var(--integration-primary)",fill:"url(#integrationTrend)",strokeWidth:3})]})})}),(0,r.jsxs)(rS,{title:"Status Overview",description:"Active, inactive, pending and failed services.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:e,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:e.map((e,a)=>(0,r.jsx)(q.f,{fill:rt[a%rt.length]},a))})]})}),(0,r.jsx)(rC,{rows:e})]}),(0,r.jsx)(rS,{title:"Integration Types",description:"Categories of connected services.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:a,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",width:115,tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--integration-primary)",radius:[0,12,12,0]})]})})}),(0,r.jsxs)(rS,{title:"Environment Split",description:"Production, sandbox and development services.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:t,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:t.map((e,a)=>(0,r.jsx)(q.f,{fill:rt[a%rt.length]},a))})]})}),(0,r.jsx)(rC,{rows:t})]}),(0,r.jsx)(rS,{title:"Requests Today",description:"Top integrations by request volume.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:i,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",width:115,tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--integration-primary)",radius:[0,12,12,0]})]})})}),(0,r.jsx)(rS,{title:"Failures Today",description:"Integrations needing attention by failure count.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:s,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",width:115,tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--integration-primary)",radius:[0,12,12,0]})]})})})]})}function rj({form:e,setForm:a,saving:t,onClose:i,onSubmit:s}){let n=(e,t)=>a(a=>({...a,[e]:t}));return(0,r.jsx)("div",{className:"integration-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("form",{className:"integration-modal",onSubmit:s,children:[(0,r.jsxs)("div",{className:"integration-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:e.id?"Edit Integration":"New Integration"}),(0,r.jsx)("p",{children:"Configure an external service connection."})]}),(0,r.jsx)("button",{type:"button",onClick:i,disabled:t,"aria-label":"Close",children:"✕"})]}),(0,r.jsxs)("div",{className:"integration-form-grid",children:[(0,r.jsxs)("label",{children:["Integration name",(0,r.jsx)("input",{value:e.name,onChange:e=>n("name",e.target.value),placeholder:"Paystack Payments",required:!0})]}),(0,r.jsxs)("label",{children:["Provider",(0,r.jsx)("input",{value:e.provider,onChange:e=>n("provider",e.target.value),placeholder:"Paystack, SendGrid, Twilio...",required:!0})]}),(0,r.jsxs)("label",{children:["Type",(0,r.jsx)("select",{value:e.type,onChange:e=>n("type",e.target.value),children:t7.map(e=>(0,r.jsx)("option",{value:e,children:ro(e)},e))})]}),(0,r.jsxs)("label",{children:["Status",(0,r.jsx)("select",{value:e.status,onChange:e=>n("status",e.target.value),children:re.map(e=>(0,r.jsx)("option",{value:e,children:ro(e)},e))})]}),(0,r.jsxs)("label",{children:["Environment",(0,r.jsx)("select",{value:e.environment,onChange:e=>n("environment",e.target.value),children:ra.map(e=>(0,r.jsx)("option",{value:e,children:ro(e)},e))})]}),(0,r.jsxs)("label",{children:["Endpoint / Base URL",(0,r.jsx)("input",{value:e.endpoint,onChange:e=>n("endpoint",e.target.value),placeholder:"https://api.example.com"})]}),(0,r.jsxs)("label",{children:["Public key",(0,r.jsx)("input",{value:e.publicKey,onChange:e=>n("publicKey",e.target.value),placeholder:"pk_test_..."})]}),(0,r.jsxs)("label",{children:["Webhook URL",(0,r.jsx)("input",{value:e.webhookUrl,onChange:e=>n("webhookUrl",e.target.value),placeholder:"/webhooks/paystack"})]}),(0,r.jsxs)("label",{children:["Requests today",(0,r.jsx)("input",{type:"number",min:"0",value:e.requestsToday,onChange:e=>n("requestsToday",e.target.value)})]}),(0,r.jsxs)("label",{children:["Failures today",(0,r.jsx)("input",{type:"number",min:"0",value:e.failuresToday,onChange:e=>n("failuresToday",e.target.value)})]}),(0,r.jsxs)("label",{className:"wide",children:["Notes",(0,r.jsx)("textarea",{value:e.notes,onChange:e=>n("notes",e.target.value),placeholder:"What is this integration used for?",rows:3})]})]}),(0,r.jsx)("section",{className:"integration-option-grid",children:(0,r.jsx)(rA,{label:"Secret configured securely on backend",checked:e.secretConfigured,onChange:e=>n("secretConfigured",e)})}),(0,r.jsxs)("div",{className:"integration-modal-actions",children:[(0,r.jsx)("button",{type:"button",onClick:i,disabled:t,children:"Cancel"}),(0,r.jsx)("button",{type:"submit",disabled:t,children:t?"Saving...":e.id?"Save Changes":"Create Integration"})]})]})})}function rw({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"integration-stat",children:[(0,r.jsxs)("span",{children:[e,(0,r.jsx)("b",{children:i})]}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:t})]})}function rk({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`integration-chip ${a}`,children:e})}function rN({text:e}){return(0,r.jsx)("div",{className:"integration-empty",children:e})}function rS({title:e,description:a,children:t}){return(0,r.jsxs)("section",{className:"integration-chart-card",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function rC({rows:e}){return(0,r.jsx)("div",{className:"integration-legend",children:e.map((e,a)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{style:{background:rt[a%rt.length]}}),e.label,": ",e.value]},`${e.label}-${a}`))})}function rA({label:e,checked:a,onChange:t}){return(0,r.jsxs)("label",{className:"integration-toggle",children:[(0,r.jsx)("input",{type:"checkbox",checked:a,onChange:e=>t(e.target.checked)}),(0,r.jsx)("span",{children:e})]})}let rz=`
@keyframes integrationSpin { to { transform: rotate(360deg); } }
.integration-page { min-height:100dvh; width:100%; max-width:100%; padding:8px; padding-bottom:max(28px, env(safe-area-inset-bottom)); background:radial-gradient(circle at top left, color-mix(in srgb, var(--integration-primary) 10%, transparent), transparent 34rem), #f8fafc; color:#0f172a; font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; overflow-x:hidden; }
.integration-page *, .integration-page *::before, .integration-page *::after { box-sizing:border-box; }
.integration-page button, .integration-page input, .integration-page select, .integration-page textarea { font:inherit; max-width:100%; }
.integration-state { min-height:min(420px, calc(100dvh - 32px)); display:grid; place-items:center; align-content:center; gap:10px; width:min(520px, 100%); margin:0 auto; padding:22px; border-radius:28px; background:#fff; border:1px solid rgba(148,163,184,.22); box-shadow:0 24px 70px rgba(15,23,42,.08); text-align:center; }
.integration-state h2 { margin:0; font-size:clamp(18px,5vw,24px); font-weight:1000; letter-spacing:-.04em; }
.integration-state p { max-width:34rem; margin:0; color:#64748b; font-size:13px; line-height:1.6; }
.integration-spinner { width:38px; height:38px; border-radius:999px; border:4px solid color-mix(in srgb, var(--integration-primary) 18%, transparent); border-top-color:var(--integration-primary); animation:integrationSpin .8s linear infinite; }
.integration-hero { display:grid; gap:16px; border-radius:30px; padding:18px; color:#fff; background:radial-gradient(circle at 20% 10%, rgba(255,255,255,.18), transparent 20rem), linear-gradient(135deg,var(--integration-primary),#0f172a 72%); box-shadow:0 24px 70px rgba(15,23,42,.18); overflow:hidden; }
.integration-eyebrow { display:inline-flex; font-size:11px; font-weight:1000; text-transform:uppercase; letter-spacing:.14em; opacity:.82; }
.integration-hero h1 { margin:8px 0 0; font-size:clamp(28px,8vw,44px); line-height:1.02; font-weight:1000; letter-spacing:-.07em; }
.integration-hero p { max-width:850px; margin:10px 0 0; font-size:13px; line-height:1.6; opacity:.9; }
.integration-hero-actions { display:flex; flex-wrap:wrap; gap:8px; align-items:center; }
.integration-switch { display:inline-flex; gap:5px; padding:5px; border-radius:999px; background:rgba(255,255,255,.14); border:1px solid rgba(255,255,255,.2); backdrop-filter:blur(14px); }
.integration-switch button { min-height:34px; border:0; border-radius:999px; padding:0 11px; background:transparent; color:rgba(255,255,255,.75); font-size:12px; font-weight:1000; cursor:pointer; }
.integration-switch button.active { background:#fff; color:#0f172a; box-shadow:0 10px 24px rgba(15,23,42,.16); }
.integration-white-btn,.integration-glass-btn { min-height:40px; border-radius:999px; padding:0 13px; font-size:12px; font-weight:950; cursor:pointer; }
.integration-white-btn { border:0; background:#fff; color:#0f172a; }
.integration-glass-btn { border:1px solid rgba(255,255,255,.28); background:rgba(255,255,255,.14); color:#fff; }
.integration-glass-btn:disabled { opacity:.7; cursor:not-allowed; }
.integration-alert { margin-top:10px; padding:12px 14px; border-radius:20px; font-size:13px; font-weight:850; }
.integration-alert.error { background:#fee2e2; color:#991b1b; }
.integration-alert.success { background:#dcfce7; color:#166534; }
.integration-stat-grid { display:grid; grid-template-columns:1fr; gap:10px; margin-top:10px; }
.integration-stat,.integration-card,.integration-chart-card,.integration-table-card { border:1px solid rgba(148,163,184,.22); border-radius:24px; background:#fff; box-shadow:0 18px 45px rgba(15,23,42,.06); }
.integration-stat { padding:16px; }
.integration-stat span { display:flex; justify-content:space-between; gap:10px; color:#64748b; font-size:12px; font-weight:850; }
.integration-stat strong { display:block; margin-top:8px; font-size:clamp(24px,8vw,34px); line-height:1; font-weight:1000; letter-spacing:-.06em; }
.integration-stat small { display:block; margin-top:8px; color:#64748b; font-size:12px; font-weight:850; }
.integration-toolbar { display:grid; grid-template-columns:1fr; gap:8px; margin-top:10px; padding:10px; border-radius:24px; background:#fff; border:1px solid rgba(148,163,184,.22); box-shadow:0 18px 45px rgba(15,23,42,.05); }
.integration-toolbar input,.integration-toolbar select { min-height:42px; width:100%; border:1px solid rgba(148,163,184,.3); border-radius:16px; padding:0 12px; background:#fff; color:#0f172a; font-size:13px; font-weight:800; }
.integration-toolbar button { min-height:42px; border:0; border-radius:16px; background:color-mix(in srgb, var(--integration-primary) 10%, white); color:var(--integration-primary); font-size:13px; font-weight:1000; cursor:pointer; }
.integration-card-grid,.integration-chart-grid { display:grid; grid-template-columns:1fr; gap:10px; margin-top:10px; }
.integration-card,.integration-chart-card,.integration-table-card { min-width:0; padding:14px; }
.integration-card.failed { border-color:rgba(220,38,38,.24); background:linear-gradient(180deg,#fff,#fff7f7); }
.integration-card.pending,.integration-card.testing { border-color:rgba(249,115,22,.24); }
.integration-card-top { display:flex; align-items:center; justify-content:space-between; gap:8px; }
.integration-avatar { width:46px; height:46px; border-radius:18px; display:grid; place-items:center; background:linear-gradient(135deg,var(--integration-primary),#0f172a); color:#fff; font-size:18px; font-weight:1000; }
.integration-chip-row { display:flex; flex-wrap:wrap; justify-content:flex-end; gap:6px; }
.integration-card h2 { margin:14px 0 0; font-size:20px; font-weight:1000; letter-spacing:-.05em; }
.integration-card p { margin:5px 0 0; color:#64748b; font-size:13px; line-height:1.45; }
.integration-health { height:9px; margin-top:12px; border-radius:999px; background:#e2e8f0; overflow:hidden; }
.integration-health span { display:block; height:100%; min-width:4px; background:linear-gradient(90deg,var(--integration-primary),#16a34a); }
.integration-mini-grid { display:grid; grid-template-columns:1fr; gap:8px; margin-top:14px; }
.integration-mini-grid span { padding:10px; border-radius:16px; background:#f8fafc; color:#0f172a; font-size:12px; font-weight:850; }
.integration-mini-grid b { display:block; color:#64748b; font-size:10px; text-transform:uppercase; letter-spacing:.08em; margin-bottom:3px; }
.integration-pills { display:flex; flex-wrap:wrap; gap:6px; margin-top:14px; }
.integration-pills span { display:inline-flex; align-items:center; min-height:28px; padding:0 9px; border-radius:999px; background:#f8fafc; border:1px solid rgba(148,163,184,.18); color:#475569; font-size:11px; font-weight:900; max-width:100%; overflow-wrap:anywhere; }
.integration-actions,.integration-table-actions,.integration-modal-actions { display:flex; flex-wrap:wrap; gap:8px; }
.integration-actions { margin-top:14px; }
.integration-actions button,.integration-table-actions button,.integration-modal-actions button { min-height:38px; border:0; border-radius:999px; padding:0 12px; background:color-mix(in srgb, var(--integration-primary) 10%, white); color:var(--integration-primary); font-size:12px; font-weight:1000; cursor:pointer; }
.integration-actions button:first-child,.integration-table-actions button:first-child,.integration-modal-actions button:last-child { background:var(--integration-primary); color:#fff; }
.integration-actions button.danger,.integration-table-actions button.danger { background:#fee2e2; color:#b91c1c; }
.integration-chip { display:inline-flex; align-items:center; justify-content:center; min-height:28px; padding:0 10px; border-radius:999px; font-size:11px; font-weight:1000; white-space:nowrap; }
.integration-chip.green { background:#dcfce7; color:#166534; }.integration-chip.blue { background:#dbeafe; color:#1d4ed8; }.integration-chip.purple { background:#f3e8ff; color:#7e22ce; }.integration-chip.orange { background:#ffedd5; color:#c2410c; }.integration-chip.red { background:#fee2e2; color:#b91c1c; }.integration-chip.gray { background:#f1f5f9; color:#475569; }
.integration-table-wrap { width:100%; overflow-x:auto; }
.integration-table-wrap table { width:100%; min-width:1180px; border-collapse:collapse; }
.integration-table-wrap th { text-align:left; color:#64748b; font-size:11px; text-transform:uppercase; letter-spacing:.08em; padding:10px; border-bottom:1px solid rgba(148,163,184,.22); }
.integration-table-wrap td { padding:12px 10px; border-bottom:1px solid rgba(148,163,184,.16); font-size:13px; vertical-align:top; }
.integration-table-wrap strong { display:block; font-weight:1000; }.integration-table-wrap small { display:block; margin-top:3px; color:#64748b; font-size:11px; line-height:1.35; }
.integration-chart-card h2 { margin:0; font-size:17px; font-weight:1000; letter-spacing:-.04em; }.integration-chart-card p { margin:5px 0 10px; color:#64748b; font-size:12px; line-height:1.5; }
.integration-legend { display:flex; flex-wrap:wrap; gap:8px; padding-top:8px; }.integration-legend span { display:inline-flex; align-items:center; gap:6px; min-height:28px; border-radius:999px; padding:0 9px; background:#f8fafc; border:1px solid rgba(148,163,184,.18); color:#475569; font-size:11px; font-weight:900; }.integration-legend i { width:9px; height:9px; border-radius:999px; }
.integration-empty { grid-column:1 / -1; margin:0; padding:18px; border-radius:20px; background:#f8fafc; color:#64748b; font-size:13px; text-align:center; border:1px dashed rgba(148,163,184,.35); }
.integration-modal-backdrop { position:fixed; inset:0; z-index:90; display:grid; place-items:end center; padding:10px; background:rgba(15,23,42,.58); backdrop-filter:blur(12px); }
.integration-modal { width:min(980px,100%); max-height:min(92dvh,920px); overflow-y:auto; border-radius:28px; background:#fff; box-shadow:0 30px 100px rgba(15,23,42,.35); border:1px solid rgba(255,255,255,.24); padding:14px; }
.integration-modal-head { display:flex; align-items:flex-start; justify-content:space-between; gap:12px; padding:6px 4px 14px; }.integration-modal-head h2 { margin:0; font-size:20px; font-weight:1000; letter-spacing:-.05em; }.integration-modal-head p { margin:5px 0 0; color:#64748b; font-size:12px; line-height:1.5; }.integration-modal-head button { width:38px; height:38px; border:0; border-radius:999px; background:#f1f5f9; color:#0f172a; font-weight:1000; cursor:pointer; }
.integration-form-grid { display:grid; grid-template-columns:1fr; gap:10px; }.integration-form-grid label { display:grid; gap:6px; color:#334155; font-size:12px; font-weight:950; }.integration-form-grid input,.integration-form-grid select,.integration-form-grid textarea { width:100%; border:1px solid rgba(148,163,184,.32); border-radius:16px; background:#fff; color:#0f172a; padding:11px 12px; font-size:13px; font-weight:800; }.integration-form-grid input,.integration-form-grid select { min-height:42px; }.integration-form-grid textarea { resize:vertical; }
.integration-option-grid { display:grid; grid-template-columns:1fr; gap:8px; margin-top:12px; padding:12px; border-radius:22px; background:#f8fafc; border:1px solid rgba(148,163,184,.18); }
.integration-toggle { display:inline-flex; align-items:center; gap:8px; min-height:36px; padding:0 10px; border-radius:999px; background:#fff; border:1px solid rgba(148,163,184,.18); font-size:12px; font-weight:900; cursor:pointer; }.integration-toggle input { width:16px; height:16px; accent-color:var(--integration-primary); }
.integration-modal-actions { position:sticky; bottom:-14px; justify-content:flex-end; margin-top:14px; padding:12px 0 2px; background:linear-gradient(to top,#fff 70%,transparent); }.integration-modal-actions button:first-child { background:#f1f5f9; color:#0f172a; }.integration-modal-actions button:disabled { opacity:.65; cursor:not-allowed; }
@media (min-width:520px){ .integration-stat-grid,.integration-toolbar,.integration-option-grid{grid-template-columns:repeat(2,minmax(0,1fr));}.integration-mini-grid{grid-template-columns:repeat(2,minmax(0,1fr));} }
@media (min-width:760px){ .integration-card-grid,.integration-chart-grid{grid-template-columns:repeat(2,minmax(0,1fr));}.integration-form-grid{grid-template-columns:repeat(3,minmax(0,1fr));}.integration-form-grid .wide{grid-column:1 / -1;}.integration-modal-backdrop{place-items:center;padding:18px;}.integration-modal{padding:18px;} }
@media (min-width:920px){ .integration-page{padding:14px;}.integration-hero{grid-template-columns:1fr auto;align-items:end;padding:24px;}.integration-stat-grid{grid-template-columns:repeat(4,minmax(0,1fr));}.integration-toolbar{grid-template-columns:minmax(240px,2fr) repeat(3,minmax(130px,1fr)) auto;}.integration-mini-grid{grid-template-columns:repeat(3,minmax(0,1fr));} }
@media (min-width:1180px){ .integration-card-grid{grid-template-columns:repeat(3,minmax(0,1fr));} }
`,rD="eleeveon_developer_error_reports",rT=["frontend","backend","sync","database","billing","pwa","unknown"],rP=["critical","high","medium","low","info"],rR=["open","investigating","resolved","ignored"],rM=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],rq=(e,a=[])=>{if(Array.isArray(e))return e;if(!e||"object"!=typeof e)return[];for(let t of a)if(Array.isArray(e[t]))return e[t];return Array.isArray(e.data)?e.data:Array.isArray(e.items)?e.items:Array.isArray(e.results)?e.results:Array.isArray(e.records)?e.records:Array.isArray(e.rows)?e.rows:[]},rL=e=>{if(!e)return 0;let a="number"==typeof e?e:new Date(e).getTime();return Number.isFinite(a)?a:0},rI=e=>{let a=rL(e);return a?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(a)):"Not set"},rE=e=>{let a=String(e||"").toLowerCase();return"critical"===a||"high"===a?"red":"medium"===a?"orange":"low"===a?"blue":"gray"},r$=e=>{let a=String(e||"").toLowerCase();return"resolved"===a?"green":"investigating"===a?"blue":"ignored"===a?"gray":"open"===a?"orange":"gray"},rF=(e,a)=>{let t=new Map;return e.forEach(e=>{let r=String(a(e)||"Unknown").trim()||"Unknown";t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)},rU=(e,a)=>{let t=e.title||e.name||e.errorName||e.exception||e.message?.split("\n")?.[0]||`Error Report ${a+1}`,r=e.source||e.area||e.module||"unknown",i=e.severity||e.level||e.priority||"medium",s=e.status||(e.resolved?"resolved":"open");return{id:String(e.id||e.localId||e.fingerprint||`error-${a}-${Date.now()}`),title:t,message:e.message||e.errorMessage||e.description||"No error message recorded.",stack:e.stack||e.stackTrace||null,source:rT.includes(r)?r:"unknown",severity:rP.includes(i)?i:"medium",status:rR.includes(s)?s:"open",route:e.route||e.path||e.url||null,accountId:e.accountId||null,accountName:e.accountName||e.schoolName||null,userEmail:e.userEmail||e.email||null,browser:e.browser||e.userAgent||null,deviceId:e.deviceId||null,appVersion:e.appVersion||e.version||null,environment:e.environment||e.env||"production",occurrences:Number(e.occurrences||e.count||1),assignedTo:e.assignedTo||null,resolutionNote:e.resolutionNote||e.note||null,firstSeenAt:e.firstSeenAt||e.createdAt||Date.now(),lastSeenAt:e.lastSeenAt||e.updatedAt||e.createdAt||Date.now(),createdAt:e.createdAt||Date.now(),updatedAt:e.updatedAt||e.lastSeenAt||Date.now()}},rO=()=>{try{let e=window.localStorage.getItem(rD);if(!e)return[];return rq(JSON.parse(e),["errors","reports","errorReports"]).map(rU)}catch{return[]}},r_=e=>{try{window.localStorage.setItem(rD,JSON.stringify(e))}catch{}};function rK({navigate:e}){let{accountId:a,authenticated:t,loading:s}=(0,g.F)(),{settings:n}=(0,x.t)(),d=n?.primaryColor||"var(--primary-color, #2563eb)",[l,o]=(0,i.useState)("cards"),[c,p]=(0,i.useState)([]),[u,h]=(0,i.useState)(!0),[b,f]=(0,i.useState)(!1),[v,y]=(0,i.useState)(""),[j,w]=(0,i.useState)(""),[k,N]=(0,i.useState)(""),[S,C]=(0,i.useState)("all"),[A,z]=(0,i.useState)("all"),[D,T]=(0,i.useState)("all"),[P,R]=(0,i.useState)("all"),[M,q]=(0,i.useState)(""),[L,I]=(0,i.useState)(""),[E,$]=(0,i.useState)(null),[F,U]=(0,i.useState)({assignedTo:"",resolutionNote:""}),O=async(e=!1)=>{try{e?f(!0):h(!0),y(""),w("");let a=await (0,m.uE)("/developer/error-reports").catch(async()=>(0,m.uE)("/error-reports").catch(()=>null)),t=rq(a,["errors","reports","errorReports"]).map(rU);t.length?(p(t),r_(t)):p(rO())}catch(e){y(e?.message||"Could not load server error reports. Showing local saved reports."),p(rO())}finally{h(!1),f(!1)}};(0,i.useEffect)(()=>{if(!s){if(!t||!a)return void h(!1);O()}},[s,t,a]);let _=(0,i.useMemo)(()=>Array.from(new Set(c.map(e=>e.environment||"unknown"))).sort(),[c]),K=(0,i.useMemo)(()=>{let e=k.trim().toLowerCase(),a=M?new Date(M).getTime():0,t=L?new Date(L).setHours(23,59,59,999):0;return c.filter(r=>{let i=`${r.title} ${r.message} ${r.stack||""} ${r.route||""} ${r.accountName||""} ${r.userEmail||""} ${r.assignedTo||""}`.toLowerCase(),s=rL(r.lastSeenAt||r.updatedAt||r.createdAt),n=!e||i.includes(e),d="all"===S||r.status===S,l="all"===A||r.severity===A,o="all"===D||r.source===D,c="all"===P||r.environment===P;return n&&d&&l&&o&&c&&(!a||s>=a)&&(!t||s<=t)}).sort((e,a)=>{let t={critical:5,high:4,medium:3,low:2,info:1},r=e=>"open"===e.status?2:+("investigating"===e.status),i=r(a)-r(e);if(i)return i;let s=t[a.severity]-t[e.severity];return s||rL(a.lastSeenAt||a.updatedAt)-rL(e.lastSeenAt||e.updatedAt)})},[c,k,S,A,D,P,M,L]),B=c.filter(e=>"open"===e.status).length,H=c.filter(e=>"investigating"===e.status).length,G=c.filter(e=>"resolved"===e.status).length,W=c.filter(e=>"critical"===e.severity).length,V=c.filter(e=>["critical","high"].includes(e.severity)).length,J=c.reduce((e,a)=>e+Number(a.occurrences||0),0),Q=(0,i.useMemo)(()=>rF(c,e=>e.status),[c]),Y=(0,i.useMemo)(()=>rF(c,e=>e.severity),[c]),X=(0,i.useMemo)(()=>rF(c,e=>e.source),[c]),Z=(0,i.useMemo)(()=>c.map(e=>({label:e.title.length>22?`${e.title.slice(0,22)}…`:e.title,value:Number(e.occurrences||0)})).sort((e,a)=>a.value-e.value).slice(0,8),[c]),ee=(0,i.useMemo)(()=>{let e=((e=6)=>{let a=new Date;return Array.from({length:e},(t,r)=>{let i=new Date(a.getFullYear(),a.getMonth()-(e-1-r),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(i)})})(6),a=new Map(e.map(e=>[e,0]));return c.forEach(e=>{let t,r=(t=rL(e.firstSeenAt||e.createdAt))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(t)):"Unknown";a.has(r)&&a.set(r,(a.get(r)||0)+1)}),e.map(e=>({label:e,value:a.get(e)||0}))},[c]),ea=async(e,a)=>{let t={...a,updatedAt:Date.now()};await (0,m.uE)(`/developer/error-reports/${e.id}`,{method:"PATCH",body:JSON.stringify(t)}).catch(async()=>(0,m.uE)(`/error-reports/${e.id}`,{method:"PATCH",body:JSON.stringify(t)}).catch(()=>null)),p(a=>{let r=a.map(a=>a.id===e.id?{...a,...t}:a);return r_(r),r})},et=async(e,a)=>{try{y(""),w(""),await ea(e,{status:a,resolutionNote:"resolved"===a?e.resolutionNote||"Marked as resolved from developer portal.":e.resolutionNote}),w(`Error report ${a}.`)}catch(e){y(e?.message||"Could not update error report.")}},er=e=>{$(e),U({assignedTo:e.assignedTo||"",resolutionNote:e.resolutionNote||""})},ei=async e=>{if(e.preventDefault(),E)try{y(""),w(""),await ea(E,{assignedTo:F.assignedTo.trim(),resolutionNote:F.resolutionNote.trim(),status:F.resolutionNote.trim()?"resolved":E.status}),$(null),w("Error report action saved.")}catch(e){y(e?.message||"Could not save report action.")}},es=e=>{window.confirm(`Remove "${e.title}" from local error reports?`)&&(p(a=>{let t=a.filter(a=>a.id!==e.id);return r_(t),t}),w("Error report removed locally."))};return u||s?(0,r.jsxs)("main",{className:"deverrors-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:rZ}),(0,r.jsxs)("section",{className:"deverrors-state",children:[(0,r.jsx)("div",{className:"deverrors-spinner"}),(0,r.jsx)("h2",{children:"Loading error reports..."}),(0,r.jsx)("p",{children:"Preparing diagnostics, stack traces, sources and incident analytics."})]})]}):t&&a?(0,r.jsxs)("main",{className:"deverrors-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:rZ}),(0,r.jsxs)("section",{className:"deverrors-hero",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"deverrors-eyebrow",children:"Diagnostics"}),(0,r.jsx)("h1",{children:"Error Reports"}),(0,r.jsx)("p",{children:"Monitor frontend, backend, sync, billing and database failures. Prioritize critical incidents, assign fixes, resolve reports and understand failure patterns over time."})]}),(0,r.jsxs)("div",{className:"deverrors-hero-actions",children:[(0,r.jsxs)("div",{className:"deverrors-switch",role:"tablist","aria-label":"Error report views",children:[(0,r.jsx)("button",{type:"button",className:"cards"===l?"active":"",onClick:()=>o("cards"),children:"Cards"}),(0,r.jsx)("button",{type:"button",className:"table"===l?"active":"",onClick:()=>o("table"),children:"Table"}),(0,r.jsx)("button",{type:"button",className:"analytics"===l?"active":"",onClick:()=>o("analytics"),children:"Charts"})]}),(0,r.jsx)("button",{type:"button",className:"deverrors-white-btn",onClick:()=>{let e={id:`client-diagnostic-${Date.now()}`,title:"Client Diagnostic Snapshot",message:"Manual browser-side diagnostic snapshot captured from the developer portal.",source:"frontend",severity:navigator.onLine?"info":"medium",status:"open",route:window.location.pathname,accountId:null,accountName:null,userEmail:null,browser:navigator.userAgent,deviceId:null,appVersion:null,environment:"production",occurrences:1,assignedTo:null,resolutionNote:null,firstSeenAt:Date.now(),lastSeenAt:Date.now(),createdAt:Date.now(),updatedAt:Date.now()};e&&(p(a=>{let t=[e,...a];return r_(t),t}),w("Client diagnostic snapshot captured."))},children:"Capture Client Diagnostic"}),(0,r.jsx)("button",{type:"button",className:"deverrors-glass-btn",onClick:()=>O(!0),disabled:b,children:b?"Refreshing...":"Refresh"})]})]}),(v||j)&&(0,r.jsx)("section",{className:`deverrors-alert ${v?"error":"success"}`,children:v||j}),(0,r.jsxs)("section",{className:"deverrors-stat-grid",children:[(0,r.jsx)(rV,{label:"Reports",value:c.length,detail:`${K.length} shown`,icon:"\uD83D\uDC1E"}),(0,r.jsx)(rV,{label:"Open",value:B,detail:`${H} investigating`,icon:"\uD83D\uDCEC"}),(0,r.jsx)(rV,{label:"High Risk",value:V,detail:`${W} critical`,icon:"\uD83D\uDEA8"}),(0,r.jsx)(rV,{label:"Occurrences",value:new Intl.NumberFormat("en-GH",{notation:"compact",maximumFractionDigits:1}).format(Number(J||0)),detail:`${G} resolved`,icon:"\uD83D\uDCC8"})]}),(0,r.jsxs)("section",{className:"deverrors-toolbar",children:[(0,r.jsx)("input",{value:k,onChange:e=>N(e.target.value),placeholder:"Search title, message, stack, route, account..."}),(0,r.jsxs)("select",{value:S,onChange:e=>C(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All statuses"}),rR.map(e=>(0,r.jsx)("option",{value:e,children:e},e))]}),(0,r.jsxs)("select",{value:A,onChange:e=>z(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All severity"}),rP.map(e=>(0,r.jsx)("option",{value:e,children:e},e))]}),(0,r.jsxs)("select",{value:D,onChange:e=>T(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All sources"}),rT.map(e=>(0,r.jsx)("option",{value:e,children:e},e))]}),(0,r.jsxs)("select",{value:P,onChange:e=>R(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All environments"}),_.map(e=>(0,r.jsx)("option",{value:e,children:e},e))]}),(0,r.jsx)("input",{type:"date",value:M,onChange:e=>q(e.target.value)}),(0,r.jsx)("input",{type:"date",value:L,onChange:e=>I(e.target.value)}),(0,r.jsx)("button",{type:"button",onClick:()=>{N(""),C("all"),z("all"),T("all"),R("all"),q(""),I("")},children:"Reset"})]}),"analytics"===l?(0,r.jsx)(rG,{statusChart:Q,severityChart:Y,sourceChart:X,occurrenceChart:Z,trendChart:ee}):"table"===l?(0,r.jsx)(rH,{reports:K,onOpenAction:er,onStatus:et,onDelete:es}):(0,r.jsx)(rB,{reports:K,onOpenAction:er,onStatus:et,onDelete:es,navigate:e}),E&&(0,r.jsx)(rW,{report:E,form:F,setForm:U,onClose:()=>$(null),onSubmit:ei})]}):(0,r.jsxs)("main",{className:"deverrors-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:rZ}),(0,r.jsxs)("section",{className:"deverrors-state",children:[(0,r.jsx)("h2",{children:"Developer access required"}),(0,r.jsx)("p",{children:"Sign in with a developer account to inspect platform error reports."})]})]})}function rB({reports:e,onOpenAction:a,onStatus:t,onDelete:i,navigate:s}){return(0,r.jsxs)("section",{className:"deverrors-card-grid",children:[e.map(e=>(0,r.jsxs)("article",{className:`deverrors-report-card ${e.severity}`,children:[(0,r.jsxs)("div",{className:"deverrors-report-top",children:[(0,r.jsx)("span",{className:"deverrors-report-icon",children:(e=>{switch(e){case"frontend":return"\uD83D\uDDA5️";case"backend":return"\uD83E\uDDE0";case"sync":return"\uD83D\uDD04";case"database":return"\uD83D\uDDC4️";case"billing":return"\uD83D\uDCB3";case"pwa":return"\uD83D\uDCF1";default:return"⚠️"}})(e.source)}),(0,r.jsxs)("div",{className:"deverrors-chip-row",children:[(0,r.jsx)(rJ,{tone:rE(e.severity),children:e.severity}),(0,r.jsx)(rJ,{tone:r$(e.status),children:e.status})]})]}),(0,r.jsx)("h2",{children:e.title}),(0,r.jsx)("p",{children:e.message}),(0,r.jsx)("div",{className:"deverrors-route",children:e.route||e.source}),(0,r.jsxs)("div",{className:"deverrors-mini-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Source"}),e.source]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Occurrences"}),e.occurrences]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Account"}),e.accountName||e.accountId||"—"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"User"}),e.userEmail||"—"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Assigned"}),e.assignedTo||"Unassigned"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Last Seen"}),rI(e.lastSeenAt||e.updatedAt)]})]}),e.stack&&(0,r.jsxs)("details",{className:"deverrors-stack",children:[(0,r.jsx)("summary",{children:"Stack trace"}),(0,r.jsx)("pre",{children:e.stack})]}),(0,r.jsxs)("div",{className:"deverrors-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Assign / Resolve"}),"investigating"!==e.status&&"resolved"!==e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"investigating"),children:"Investigate"}),"resolved"!==e.status?(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"resolved"),children:"Resolve"}):(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"open"),children:"Reopen"}),(0,r.jsx)("button",{type:"button",onClick:()=>s?.("auditLogs"),children:"Audit"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>i(e),children:"Remove"})]})]},e.id)),!e.length&&(0,r.jsx)(rQ,{text:"No error reports match your filters."})]})}function rH({reports:e,onOpenAction:a,onStatus:t,onDelete:i}){return(0,r.jsxs)("section",{className:"deverrors-table-card",children:[(0,r.jsx)("div",{className:"deverrors-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Error"}),(0,r.jsx)("th",{children:"Severity"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Source"}),(0,r.jsx)("th",{children:"Occurrences"}),(0,r.jsx)("th",{children:"Route"}),(0,r.jsx)("th",{children:"Account/User"}),(0,r.jsx)("th",{children:"Assigned"}),(0,r.jsx)("th",{children:"Last Seen"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:e.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("strong",{children:e.title}),(0,r.jsx)("small",{children:e.message})]}),(0,r.jsx)("td",{children:(0,r.jsx)(rJ,{tone:rE(e.severity),children:e.severity})}),(0,r.jsx)("td",{children:(0,r.jsx)(rJ,{tone:r$(e.status),children:e.status})}),(0,r.jsx)("td",{children:e.source}),(0,r.jsx)("td",{children:e.occurrences}),(0,r.jsx)("td",{children:e.route||"—"}),(0,r.jsxs)("td",{children:[e.accountName||e.accountId||"—",(0,r.jsx)("br",{}),(0,r.jsx)("small",{children:e.userEmail||"—"})]}),(0,r.jsx)("td",{children:e.assignedTo||"Unassigned"}),(0,r.jsx)("td",{children:rI(e.lastSeenAt||e.updatedAt)}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"deverrors-table-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Action"}),"resolved"!==e.status?(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"resolved"),children:"Resolve"}):(0,r.jsx)("button",{type:"button",onClick:()=>t(e,"open"),children:"Reopen"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>i(e),children:"Remove"})]})})]},e.id))})]})}),!e.length&&(0,r.jsx)(rQ,{text:"No error reports match your filters."})]})}function rG({statusChart:e,severityChart:a,sourceChart:t,occurrenceChart:i,trendChart:s}){return(0,r.jsxs)("section",{className:"deverrors-chart-grid",children:[(0,r.jsx)(rY,{title:"Error Trend",description:"New reports captured over the last six months.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(eS.Q,{data:s,children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"errorTrend",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"8%",stopColor:"var(--dev-primary)",stopOpacity:.28}),(0,r.jsx)("stop",{offset:"95%",stopColor:"var(--dev-primary)",stopOpacity:.02})]})}),(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(p.m,{}),(0,r.jsx)(eC.Gk,{type:"monotone",dataKey:"value",stroke:"var(--dev-primary)",fill:"url(#errorTrend)",strokeWidth:3})]})})}),(0,r.jsxs)(rY,{title:"Severity",description:"Risk level distribution.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:a,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:a.map((e,a)=>(0,r.jsx)(q.f,{fill:rM[a%rM.length]},a))})]})}),(0,r.jsx)(rX,{rows:a})]}),(0,r.jsxs)(rY,{title:"Status",description:"Open, investigating, resolved and ignored reports.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:e,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:e.map((e,a)=>(0,r.jsx)(q.f,{fill:rM[a%rM.length]},a))})]})}),(0,r.jsx)(rX,{rows:e})]}),(0,r.jsx)(rY,{title:"Sources",description:"Where failures are coming from.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:t,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11,width:100}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--dev-primary)",radius:[0,12,12,0]})]})})}),(0,r.jsx)(rY,{title:"Top Occurrences",description:"Most repeated errors by occurrence count.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:i,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11,width:130}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--dev-primary)",radius:[0,12,12,0]})]})})})]})}function rW({report:e,form:a,setForm:t,onClose:i,onSubmit:s}){return(0,r.jsx)("div",{className:"deverrors-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("form",{className:"deverrors-modal",onSubmit:s,children:[(0,r.jsxs)("div",{className:"deverrors-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Assign / Resolve Report"}),(0,r.jsx)("p",{children:e.title})]}),(0,r.jsx)("button",{type:"button",onClick:i,"aria-label":"Close",children:"✕"})]}),(0,r.jsxs)("section",{className:"deverrors-modal-summary",children:[(0,r.jsx)(rJ,{tone:rE(e.severity),children:e.severity}),(0,r.jsx)(rJ,{tone:r$(e.status),children:e.status}),(0,r.jsx)("span",{children:e.source}),(0,r.jsxs)("span",{children:[e.occurrences," occurrence(s)"]})]}),(0,r.jsxs)("div",{className:"deverrors-form-grid",children:[(0,r.jsxs)("label",{children:["Assign to",(0,r.jsx)("input",{value:a.assignedTo,onChange:e=>t(a=>({...a,assignedTo:e.target.value})),placeholder:"developer@example.com"})]}),(0,r.jsxs)("label",{className:"wide",children:["Resolution / investigation note",(0,r.jsx)("textarea",{value:a.resolutionNote,onChange:e=>t(a=>({...a,resolutionNote:e.target.value})),rows:5,placeholder:"Describe what was fixed, ignored, or assigned for investigation."})]})]}),e.stack&&(0,r.jsxs)("details",{className:"deverrors-stack modal-stack",children:[(0,r.jsx)("summary",{children:"Stack trace"}),(0,r.jsx)("pre",{children:e.stack})]}),(0,r.jsxs)("div",{className:"deverrors-modal-actions",children:[(0,r.jsx)("button",{type:"button",onClick:i,children:"Cancel"}),(0,r.jsx)("button",{type:"submit",children:"Save Action"})]})]})})}function rV({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"deverrors-stat",children:[(0,r.jsxs)("span",{children:[e,(0,r.jsx)("b",{children:i})]}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:t})]})}function rJ({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`deverrors-chip ${a}`,children:e})}function rQ({text:e}){return(0,r.jsx)("div",{className:"deverrors-empty",children:e})}function rY({title:e,description:a,children:t}){return(0,r.jsxs)("section",{className:"deverrors-chart-card",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function rX({rows:e}){return(0,r.jsx)("div",{className:"deverrors-legend",children:e.map((e,a)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{style:{background:rM[a%rM.length]}}),e.label,": ",e.value]},`${e.label}-${a}`))})}let rZ=`
@keyframes deverrorsSpin { to { transform: rotate(360deg); } }

.deverrors-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 8px;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--dev-primary) 10%, transparent), transparent 34rem),
    var(--bg, #f8fafc);
  color: var(--text, #0f172a);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  overflow-x: hidden;
}

.deverrors-page *,
.deverrors-page *::before,
.deverrors-page *::after {
  box-sizing: border-box;
}

.deverrors-page button,
.deverrors-page input,
.deverrors-page select,
.deverrors-page textarea {
  font: inherit;
  max-width: 100%;
}

.deverrors-page button {
  -webkit-tap-highlight-color: transparent;
}

.deverrors-state {
  min-height: min(420px, calc(100dvh - 32px));
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 28px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .08);
  text-align: center;
}

.deverrors-state h2 {
  margin: 0;
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 1000;
  letter-spacing: -.04em;
}

.deverrors-state p {
  max-width: 34rem;
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.6;
}

.deverrors-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--dev-primary) 18%, transparent);
  border-top-color: var(--dev-primary);
  animation: deverrorsSpin .8s linear infinite;
}

.deverrors-hero {
  display: grid;
  gap: 16px;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, .18), transparent 20rem),
    linear-gradient(135deg, var(--dev-primary), #0f172a 72%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .18);
  overflow: hidden;
}

.deverrors-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .14em;
  opacity: .82;
}

.deverrors-hero h1 {
  margin: 8px 0 0;
  font-size: clamp(28px, 8vw, 44px);
  line-height: 1.02;
  font-weight: 1000;
  letter-spacing: -.07em;
}

.deverrors-hero p {
  max-width: 820px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: .9;
}

.deverrors-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.deverrors-switch {
  display: inline-flex;
  gap: 5px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(14px);
}

.deverrors-switch button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.deverrors-switch button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .16);
}

.deverrors-white-btn,
.deverrors-glass-btn {
  min-height: 40px;
  border-radius: 999px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.deverrors-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.deverrors-glass-btn {
  border: 1px solid rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .14);
  color: #fff;
}

.deverrors-glass-btn:disabled {
  opacity: .7;
  cursor: not-allowed;
}

.deverrors-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 850;
}

.deverrors-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.deverrors-alert.success {
  background: #dcfce7;
  color: #166534;
}

.deverrors-stat-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.deverrors-stat {
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 24px;
  padding: 16px;
  background: var(--surface, #fff);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.deverrors-stat span {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 850;
}

.deverrors-stat strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(24px, 8vw, 34px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
  overflow-wrap: anywhere;
}

.deverrors-stat small {
  display: block;
  margin-top: 8px;
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 850;
}

.deverrors-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 24px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
}

.deverrors-toolbar input,
.deverrors-toolbar select {
  min-height: 42px;
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .3);
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
}

.deverrors-toolbar button {
  min-height: 42px;
  border: 0;
  border-radius: 16px;
  background: color-mix(in srgb, var(--dev-primary) 10%, white);
  color: var(--dev-primary);
  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.deverrors-card-grid,
.deverrors-chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.deverrors-report-card,
.deverrors-chart-card,
.deverrors-table-card {
  min-width: 0;
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 26px;
  padding: 14px;
  background: var(--surface, #fff);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.deverrors-report-card.critical,
.deverrors-report-card.high {
  border-color: rgba(220, 38, 38, .24);
  background: linear-gradient(180deg, #fff, #fff7f7);
}

.deverrors-report-card.medium {
  border-color: rgba(249, 115, 22, .2);
}

.deverrors-report-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.deverrors-report-icon {
  width: 46px;
  height: 46px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--dev-primary), #0f172a);
  color: #fff;
  font-size: 18px;
  font-weight: 1000;
}

.deverrors-chip-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.deverrors-report-card h2 {
  margin: 14px 0 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.deverrors-report-card p {
  margin: 5px 0 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.45;
}

.deverrors-route {
  display: inline-flex;
  max-width: 100%;
  margin-top: 10px;
  padding: 7px 10px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #334155;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 11px;
  font-weight: 900;
  overflow-wrap: anywhere;
}

.deverrors-mini-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 14px;
}

.deverrors-mini-grid span {
  padding: 10px;
  border-radius: 16px;
  background: #f8fafc;
  color: #0f172a;
  font-size: 12px;
  font-weight: 850;
  overflow: hidden;
  text-overflow: ellipsis;
}

.deverrors-mini-grid b {
  display: block;
  color: var(--muted, #64748b);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 3px;
}

.deverrors-stack {
  margin-top: 12px;
  border-radius: 18px;
  background: #0f172a;
  color: #e5e7eb;
  overflow: hidden;
}

.deverrors-stack summary {
  cursor: pointer;
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 1000;
}

.deverrors-stack pre {
  max-height: 240px;
  overflow: auto;
  margin: 0;
  padding: 0 12px 12px;
  font-size: 11px;
  line-height: 1.55;
  white-space: pre-wrap;
}

.deverrors-actions,
.deverrors-table-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.deverrors-actions {
  margin-top: 14px;
}

.deverrors-actions button,
.deverrors-table-actions button {
  min-height: 38px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: color-mix(in srgb, var(--dev-primary) 10%, white);
  color: var(--dev-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.deverrors-actions button:first-child,
.deverrors-table-actions button:first-child {
  background: var(--dev-primary);
  color: #fff;
}

.deverrors-actions button.danger,
.deverrors-table-actions button.danger {
  background: #fee2e2;
  color: #b91c1c;
}

.deverrors-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
  white-space: nowrap;
}

.deverrors-chip.green { background: #dcfce7; color: #166534; }
.deverrors-chip.blue { background: #dbeafe; color: #1d4ed8; }
.deverrors-chip.purple { background: #f3e8ff; color: #7e22ce; }
.deverrors-chip.orange { background: #ffedd5; color: #c2410c; }
.deverrors-chip.red { background: #fee2e2; color: #b91c1c; }
.deverrors-chip.gray { background: #f1f5f9; color: #475569; }

.deverrors-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.deverrors-table-wrap table {
  width: 100%;
  min-width: 1180px;
  border-collapse: collapse;
}

.deverrors-table-wrap th {
  text-align: left;
  color: var(--muted, #64748b);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.deverrors-table-wrap td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .16);
  font-size: 13px;
  vertical-align: top;
}

.deverrors-table-wrap strong {
  display: block;
  font-weight: 1000;
}

.deverrors-table-wrap small {
  display: block;
  margin-top: 3px;
  color: var(--muted, #64748b);
  font-size: 11px;
  line-height: 1.35;
}

.deverrors-chart-card h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.deverrors-chart-card p {
  margin: 5px 0 10px;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.5;
}

.deverrors-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

.deverrors-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 9px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.deverrors-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

.deverrors-empty {
  grid-column: 1 / -1;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
  color: var(--muted, #64748b);
  font-size: 13px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, .35);
}

.deverrors-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15, 23, 42, .58);
  backdrop-filter: blur(12px);
}

.deverrors-modal {
  width: min(860px, 100%);
  max-height: min(92dvh, 920px);
  overflow-y: auto;
  border-radius: 28px;
  background: var(--surface, #fff);
  box-shadow: 0 30px 100px rgba(15, 23, 42, .35);
  border: 1px solid rgba(255, 255, 255, .24);
  padding: 14px;
}

.deverrors-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 4px 14px;
}

.deverrors-modal-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.deverrors-modal-head p {
  margin: 5px 0 0;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.5;
}

.deverrors-modal-head button {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: #f1f5f9;
  color: #0f172a;
  font-weight: 1000;
  cursor: pointer;
}

.deverrors-modal-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px;
  border-radius: 18px;
  background: #f8fafc;
  margin-bottom: 12px;
}

.deverrors-modal-summary span:not(.deverrors-chip) {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .18);
  font-size: 11px;
  font-weight: 900;
  color: #475569;
}

.deverrors-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.deverrors-form-grid label {
  display: grid;
  gap: 6px;
  color: #334155;
  font-size: 12px;
  font-weight: 950;
}

.deverrors-form-grid input,
.deverrors-form-grid textarea {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .32);
  border-radius: 16px;
  background: #fff;
  color: #0f172a;
  padding: 11px 12px;
  font-size: 13px;
  font-weight: 800;
}

.deverrors-form-grid input {
  min-height: 42px;
}

.deverrors-form-grid textarea {
  resize: vertical;
}

.deverrors-modal-actions {
  position: sticky;
  bottom: -14px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 14px;
  padding: 12px 0 2px;
  background: linear-gradient(to top, var(--surface, #fff) 70%, transparent);
}

.deverrors-modal-actions button {
  min-height: 42px;
  border: 0;
  border-radius: 999px;
  padding: 0 14px;
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.deverrors-modal-actions button:first-child {
  background: #f1f5f9;
  color: #0f172a;
}

.deverrors-modal-actions button:last-child {
  background: var(--dev-primary);
  color: #fff;
}

.modal-stack {
  margin-top: 12px;
}

@media (min-width: 520px) {
  .deverrors-stat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .deverrors-toolbar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .deverrors-mini-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 760px) {
  .deverrors-card-grid,
  .deverrors-chart-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .deverrors-form-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .deverrors-form-grid .wide {
    grid-column: 1 / -1;
  }

  .deverrors-modal-backdrop {
    place-items: center;
    padding: 18px;
  }

  .deverrors-modal {
    padding: 18px;
  }
}

@media (min-width: 920px) {
  .deverrors-page {
    padding: 14px;
  }

  .deverrors-hero {
    grid-template-columns: 1fr auto;
    align-items: end;
    padding: 24px;
  }

  .deverrors-stat-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .deverrors-toolbar {
    grid-template-columns: minmax(240px, 2fr) repeat(6, minmax(120px, 1fr)) auto;
  }

  .deverrors-mini-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1180px) {
  .deverrors-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`,r0="eleeveon_developer_releases",r1=["draft","scheduled","in_review","approved","deploying","deployed","failed","rollback_requested","rolled_back"],r2=["major","minor","patch","hotfix","security"],r4=["development","staging","production"],r8=["low","medium","high","critical"],r5={version:"",title:"",type:"patch",status:"draft",environment:"staging",risk:"low",branchName:"",commitSha:"",changelog:"",releaseNotes:"",approvedBy:"",deployedBy:"",rolloutPercent:"0",testsPassed:"0",testsFailed:"0",bugsFixed:"0",featuresAdded:"0",breakingChanges:"0",scheduledAt:""},r3=[{id:"release-1",version:"1.0.0",title:"Developer Portal Foundation",type:"major",status:"deployed",environment:"production",risk:"medium",branchName:"main",commitSha:"a1b2c3d",changelog:"Initial developer portal with dashboard, database tools, backups, integrations and system diagnostics.",releaseNotes:"First stable developer portal release.",approvedBy:"developer",deployedBy:"developer",rollbackReason:null,rolloutPercent:100,testsPassed:38,testsFailed:0,bugsFixed:12,featuresAdded:9,breakingChanges:0,scheduledAt:Date.now()-7776e5,approvedAt:Date.now()-6912e5,deployedAt:Date.now()-6912e5,rolledBackAt:null,createdAt:Date.now()-10368e5,updatedAt:Date.now()-6912e5},{id:"release-2",version:"1.1.0",title:"SQL Console Backend",type:"minor",status:"approved",environment:"staging",risk:"high",branchName:"feature/developer-sql",commitSha:"d4e5f6a",changelog:"Adds protected SQL console backend endpoints with read-only mode, query history and audit IDs.",releaseNotes:"Requires backend module import before use.",approvedBy:"developer",deployedBy:"",rollbackReason:null,rolloutPercent:0,testsPassed:24,testsFailed:1,bugsFixed:4,featuresAdded:3,breakingChanges:0,scheduledAt:Date.now()+864e5,approvedAt:Date.now()-216e5,deployedAt:null,rolledBackAt:null,createdAt:Date.now()-2592e5,updatedAt:Date.now()-216e5},{id:"release-3",version:"1.1.1",title:"Payment Checkout Polish",type:"patch",status:"scheduled",environment:"staging",risk:"low",branchName:"fix/payment-checkout",commitSha:"b7c8d9e",changelog:"Improves checkout modal scrolling, close behavior, mobile UX and accessibility.",releaseNotes:"Safe UI-only release.",approvedBy:"",deployedBy:"",rollbackReason:null,rolloutPercent:0,testsPassed:17,testsFailed:0,bugsFixed:5,featuresAdded:1,breakingChanges:0,scheduledAt:Date.now()+1728e5,approvedAt:null,deployedAt:null,rolledBackAt:null,createdAt:Date.now()-864e5,updatedAt:Date.now()-108e5}],r6=["var(--release-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],r9=(e,a=[])=>{if(Array.isArray(e))return e;if(!e||"object"!=typeof e)return[];for(let t of a)if(Array.isArray(e[t]))return e[t];return Array.isArray(e.data)?e.data:Array.isArray(e.items)?e.items:Array.isArray(e.results)?e.results:Array.isArray(e.records)?e.records:Array.isArray(e.rows)?e.rows:[]},r7=e=>{if(!e)return 0;let a="number"==typeof e?e:new Date(e).getTime();return Number.isFinite(a)?a:0},ie=e=>{let a=r7(e);return a?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(a)):"Not set"},ia=(e,a=0,t=Number.MAX_SAFE_INTEGER)=>{let r=Number(e);return Number.isFinite(r)?Math.min(t,Math.max(a,r)):a},it=e=>e.replace(/_/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,e=>e.toUpperCase()),ir=e=>{let a=String(e||"").toLowerCase();return"deployed"===a||"approved"===a?"green":"deploying"===a||"scheduled"===a||"in_review"===a?"blue":"rollback_requested"===a?"orange":"failed"===a||"rolled_back"===a?"red":"gray"},ii=e=>"low"===e?"green":"medium"===e?"blue":"high"===e?"orange":"critical"===e?"red":"gray",is=e=>{let a=e.testsPassed+e.testsFailed;return Math.max(0,Math.min(100,(a?Math.round(e.testsPassed/a*100):70)-("critical"===e.risk?30:"high"===e.risk?18:8*("medium"===e.risk))-8*e.breakingChanges-("failed"===e.status?45:"rollback_requested"===e.status?35:50*("rolled_back"===e.status))))},id=(e,a)=>{let t=new Map;return e.forEach(e=>{let r=String(a(e)||"Unknown").trim()||"Unknown";t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)},il=(e,a)=>{let t=Date.now();return{id:String(e.id||e.localId||e.releaseId||`release-${a}-${t}`),version:e.version||e.tag||`0.0.${a+1}`,title:e.title||e.name||`Release ${a+1}`,type:r2.includes(e.type)?e.type:"patch",status:r1.includes(e.status)?e.status:"draft",environment:r4.includes(e.environment)?e.environment:"staging",risk:r8.includes(e.risk)?e.risk:"low",branchName:e.branchName||e.branch||null,commitSha:e.commitSha||e.commit||null,changelog:e.changelog||e.description||"",releaseNotes:e.releaseNotes||e.notes||null,approvedBy:e.approvedBy||null,deployedBy:e.deployedBy||null,rollbackReason:e.rollbackReason||null,rolloutPercent:Number(e.rolloutPercent||e.rollout||0),testsPassed:Number(e.testsPassed||e.passedTests||0),testsFailed:Number(e.testsFailed||e.failedTests||0),bugsFixed:Number(e.bugsFixed||0),featuresAdded:Number(e.featuresAdded||e.features||0),breakingChanges:Number(e.breakingChanges||0),scheduledAt:e.scheduledAt||null,approvedAt:e.approvedAt||null,deployedAt:e.deployedAt||null,rolledBackAt:e.rolledBackAt||null,createdAt:e.createdAt||t,updatedAt:e.updatedAt||e.createdAt||t}},io=()=>{try{let e=window.localStorage.getItem(r0);if(!e)return window.localStorage.setItem(r0,JSON.stringify(r3)),r3;let a=r9(JSON.parse(e),["releases","items","data"]).map(il);return a.length?a:r3}catch{return r3}},ic=e=>{try{window.localStorage.setItem(r0,JSON.stringify(e))}catch{}};function ip({navigate:e}){let{accountId:a,authenticated:t,loading:s}=(0,g.F)(),{settings:n}=(0,x.t)(),d=n?.primaryColor||"#2563eb",[l,o]=(0,i.useState)("cards"),[c,p]=(0,i.useState)([]),[u,h]=(0,i.useState)(!0),[b,f]=(0,i.useState)(!1),[v,y]=(0,i.useState)(!1),[j,w]=(0,i.useState)(""),[k,N]=(0,i.useState)("all"),[S,C]=(0,i.useState)("all"),[A,z]=(0,i.useState)("all"),[D,T]=(0,i.useState)("all"),[P,R]=(0,i.useState)(""),[M,q]=(0,i.useState)(""),[L,I]=(0,i.useState)(!1),[E,$]=(0,i.useState)(null),[F,U]=(0,i.useState)(""),[O,_]=(0,i.useState)(r5),K=async(e=!1)=>{try{e?f(!0):h(!0),R(""),q("");let a=await (0,m.uE)("/developer/releases").catch(async()=>(0,m.uE)("/releases").catch(()=>null)),t=r9(a,["releases","items","data"]).map(il);t.length?(p(t),ic(t)):p(io())}catch(e){R(e?.message||"Could not load releases. Showing local saved records."),p(io())}finally{h(!1),f(!1)}};(0,i.useEffect)(()=>{if(!s){if(!t||!a)return void h(!1);K()}},[s,t,a]);let B=(0,i.useMemo)(()=>{let e=j.trim().toLowerCase();return c.filter(a=>{let t=`${a.version} ${a.title} ${a.type} ${a.status} ${a.environment} ${a.risk} ${a.branchName||""} ${a.commitSha||""} ${a.changelog} ${a.releaseNotes||""}`.toLowerCase(),r=!e||t.includes(e),i="all"===k||a.status===k,s="all"===S||a.type===S,n="all"===A||a.environment===A,d="all"===D||a.risk===D;return r&&i&&s&&n&&d}).sort((e,a)=>r7(a.updatedAt)-r7(e.updatedAt))},[c,j,k,S,A,D]),H=c.filter(e=>"deployed"===e.status).length,G=c.filter(e=>"failed"===e.status).length,W=c.filter(e=>["rollback_requested","rolled_back"].includes(e.status)).length,V=c.filter(e=>["scheduled","approved","deploying"].includes(e.status)).length,J=c.reduce((e,a)=>e+a.featuresAdded,0),Q=c.reduce((e,a)=>e+a.bugsFixed,0),Y=c.length?Math.round(c.reduce((e,a)=>e+is(a),0)/c.length):0,X=(0,i.useMemo)(()=>id(c,e=>it(e.status)),[c]),Z=(0,i.useMemo)(()=>id(c,e=>it(e.type)),[c]),ee=(0,i.useMemo)(()=>id(c,e=>it(e.environment)),[c]),ea=(0,i.useMemo)(()=>id(c,e=>it(e.risk)),[c]),et=(0,i.useMemo)(()=>{let e=((e=6)=>{let a=new Date;return Array.from({length:e},(t,r)=>{let i=new Date(a.getFullYear(),a.getMonth()-(e-1-r),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(i)})})(6),a=new Map(e.map(e=>[e,0]));return c.forEach(e=>{let t,r=(t=r7(e.deployedAt||e.createdAt))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(t)):"Unknown";a.has(r)&&a.set(r,(a.get(r)||0)+1)}),e.map(e=>({label:e,value:a.get(e)||0}))},[c]),er=(0,i.useMemo)(()=>[{label:"Features",value:J},{label:"Bug Fixes",value:Q},{label:"Breaking",value:c.reduce((e,a)=>e+a.breakingChanges,0)},{label:"Failed Tests",value:c.reduce((e,a)=>e+a.testsFailed,0)}],[c,J,Q]),ei=e=>{var a;let t;R(""),q(""),_({id:(a=e).id,version:a.version,title:a.title,type:a.type,status:a.status,environment:a.environment,risk:a.risk,branchName:a.branchName||"",commitSha:a.commitSha||"",changelog:a.changelog,releaseNotes:a.releaseNotes||"",approvedBy:a.approvedBy||"",deployedBy:a.deployedBy||"",rolloutPercent:String(a.rolloutPercent||0),testsPassed:String(a.testsPassed||0),testsFailed:String(a.testsFailed||0),bugsFixed:String(a.bugsFixed||0),featuresAdded:String(a.featuresAdded||0),breakingChanges:String(a.breakingChanges||0),scheduledAt:(t=r7(a.scheduledAt))?new Date(t).toISOString().slice(0,16):""}),I(!0)},es=()=>{v||(I(!1),_(r5))},en=async e=>{if(e.preventDefault(),!O.version.trim())return void R("Version is required.");if(!O.title.trim())return void R("Release title is required.");try{let e;y(!0),R(""),q("");let a=(e=Date.now(),{id:O.id||`release-${e}`,version:O.version.trim(),title:O.title.trim(),type:O.type,status:O.status,environment:O.environment,risk:O.risk,branchName:O.branchName.trim()||null,commitSha:O.commitSha.trim()||null,changelog:O.changelog.trim(),releaseNotes:O.releaseNotes.trim()||null,approvedBy:O.approvedBy.trim()||null,deployedBy:O.deployedBy.trim()||null,rollbackReason:null,rolloutPercent:ia(O.rolloutPercent,0,100),testsPassed:ia(O.testsPassed),testsFailed:ia(O.testsFailed),bugsFixed:ia(O.bugsFixed),featuresAdded:ia(O.featuresAdded),breakingChanges:ia(O.breakingChanges),scheduledAt:O.scheduledAt?new Date(O.scheduledAt).getTime():null,approvedAt:"approved"===O.status?e:null,deployedAt:"deployed"===O.status?e:null,rolledBackAt:null,createdAt:e,updatedAt:e});if(O.id){let e=await (0,m.uE)(`/developer/releases/${O.id}`,{method:"PATCH",body:a}).catch(async()=>(0,m.uE)(`/releases/${O.id}`,{method:"PATCH",body:a}).catch(()=>null)),t=il(e?.release||e?.data||e||a,0);p(e=>{let a=e.map(e=>e.id===O.id?{...e,...t,id:O.id,createdAt:e.createdAt,updatedAt:Date.now()}:e);return ic(a),a}),q("Release updated.")}else{let e=await (0,m.uE)("/developer/releases",{method:"POST",body:a}).catch(async()=>(0,m.uE)("/releases",{method:"POST",body:a}).catch(()=>null)),t=il(e?.release||e?.data||e||a,0);p(e=>{let a=[t,...e];return ic(a),a}),q("Release created.")}es()}catch(e){R(e?.message||"Could not save release.")}finally{y(!1)}},ed=async(e,a,t)=>{try{R(""),q("");let r={...e,...a,updatedAt:Date.now()};await (0,m.uE)(`/developer/releases/${e.id}`,{method:"PATCH",body:a}).catch(async()=>(0,m.uE)(`/releases/${e.id}`,{method:"PATCH",body:a}).catch(()=>null)),p(a=>{let t=a.map(a=>a.id===e.id?r:a);return ic(t),t}),q(t)}catch(e){R(e?.message||"Could not update release.")}},el=e=>{ed(e,{status:"approved",approvedAt:Date.now(),approvedBy:e.approvedBy||"developer"},"Release approved.")},eo=async e=>{try{R(""),q(""),await ed(e,{status:"deploying",rolloutPercent:Math.max(10,e.rolloutPercent)},"Deployment started."),await (0,m.uE)(`/developer/releases/${e.id}/deploy`,{method:"POST",body:{id:e.id,version:e.version,environment:e.environment}}).catch(async()=>(0,m.uE)(`/releases/${e.id}/deploy`,{method:"POST",body:{id:e.id,version:e.version,environment:e.environment}}).catch(()=>null)),await ed(e,{status:"deployed",rolloutPercent:100,deployedAt:Date.now(),deployedBy:e.deployedBy||"developer"},"Release deployed.")}catch(a){await ed(e,{status:"failed"},a?.message||"Deployment failed.")}},ec=async e=>{if(e.preventDefault(),E)try{R(""),q(""),await (0,m.uE)(`/developer/releases/${E.id}/rollback`,{method:"POST",body:{reason:F}}).catch(async()=>(0,m.uE)(`/releases/${E.id}/rollback`,{method:"POST",body:{reason:F}}).catch(()=>null)),await ed(E,{status:"rollback_requested",rollbackReason:F.trim()||"Rollback requested from developer portal."},"Rollback requested."),$(null),U("")}catch(e){R(e?.message||"Could not request rollback.")}},ep=e=>{ed(e,{status:"rolled_back",rolloutPercent:0,rolledBackAt:Date.now()},"Release marked as rolled back.")},eu=async e=>{if(window.confirm(`Delete release "${e.version} - ${e.title}"?`))try{R(""),q(""),await (0,m.uE)(`/developer/releases/${e.id}`,{method:"DELETE"}).catch(async()=>(0,m.uE)(`/releases/${e.id}`,{method:"DELETE"}).catch(()=>null)),p(a=>{let t=a.filter(a=>a.id!==e.id);return ic(t),t}),q("Release deleted.")}catch(e){R(e?.message||"Could not delete release.")}};return u||s?(0,r.jsxs)("main",{className:"release-page",style:{"--release-primary":d},children:[(0,r.jsx)("style",{children:ik}),(0,r.jsxs)("section",{className:"release-state",children:[(0,r.jsx)("div",{className:"release-spinner"}),(0,r.jsx)("h2",{children:"Loading releases..."}),(0,r.jsx)("p",{children:"Preparing deployment pipeline, changelogs and rollback history."})]})]}):t&&a?(0,r.jsxs)("main",{className:"release-page",style:{"--release-primary":d},children:[(0,r.jsx)("style",{children:ik}),(0,r.jsxs)("section",{className:"release-hero",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"release-eyebrow",children:"Deployment pipeline"}),(0,r.jsx)("h1",{children:"Release Management"}),(0,r.jsx)("p",{children:"Track versions, changelogs, approvals, deployments, rollout progress and rollback operations across the Eleeveon platform."})]}),(0,r.jsxs)("div",{className:"release-hero-actions",children:[(0,r.jsxs)("div",{className:"release-switch",children:[(0,r.jsx)("button",{type:"button",className:"cards"===l?"active":"",onClick:()=>o("cards"),children:"Cards"}),(0,r.jsx)("button",{type:"button",className:"table"===l?"active":"",onClick:()=>o("table"),children:"Table"}),(0,r.jsx)("button",{type:"button",className:"analytics"===l?"active":"",onClick:()=>o("analytics"),children:"Charts"})]}),(0,r.jsx)("button",{type:"button",className:"release-white-btn",onClick:()=>{R(""),q(""),_(r5),I(!0)},children:"New Release"}),(0,r.jsx)("button",{type:"button",className:"release-glass-btn",onClick:()=>{let e,a,t;e=new Blob([JSON.stringify({exportedAt:new Date().toISOString(),releases:c},null,2)],{type:"application/json"}),a=URL.createObjectURL(e),(t=document.createElement("a")).href=a,t.download="eleeveon-releases.json",t.click(),URL.revokeObjectURL(a),q("Releases exported.")},children:"Export"}),(0,r.jsx)("button",{type:"button",className:"release-glass-btn",onClick:()=>K(!0),disabled:b,children:b?"Refreshing...":"Refresh"})]})]}),(P||M)&&(0,r.jsx)("section",{className:`release-alert ${P?"error":"success"}`,children:P||M}),(0,r.jsxs)("section",{className:"release-stat-grid",children:[(0,r.jsx)(ib,{label:"Releases",value:c.length,detail:`${B.length} shown`,icon:"\uD83D\uDE80"}),(0,r.jsx)(ib,{label:"Deployed",value:H,detail:`${V} in pipeline`,icon:"✅"}),(0,r.jsx)(ib,{label:"Issues",value:G+W,detail:`${W} rollback states`,icon:"⚠️"}),(0,r.jsx)(ib,{label:"Health",value:`${Y}%`,detail:`${J} features \xb7 ${Q} fixes`,icon:"\uD83D\uDCC8"})]}),(0,r.jsxs)("section",{className:"release-toolbar",children:[(0,r.jsx)("input",{value:j,onChange:e=>w(e.target.value),placeholder:"Search version, title, branch, commit, changelog..."}),(0,r.jsxs)("select",{value:k,onChange:e=>N(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All statuses"}),r1.map(e=>(0,r.jsx)("option",{value:e,children:it(e)},e))]}),(0,r.jsxs)("select",{value:S,onChange:e=>C(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All types"}),r2.map(e=>(0,r.jsx)("option",{value:e,children:it(e)},e))]}),(0,r.jsxs)("select",{value:A,onChange:e=>z(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All environments"}),r4.map(e=>(0,r.jsx)("option",{value:e,children:it(e)},e))]}),(0,r.jsxs)("select",{value:D,onChange:e=>T(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All risks"}),r8.map(e=>(0,r.jsx)("option",{value:e,children:it(e)},e))]}),(0,r.jsx)("button",{type:"button",onClick:()=>{w(""),N("all"),C("all"),z("all"),T("all")},children:"Reset"})]}),"analytics"===l?(0,r.jsx)(ig,{statusData:X,typeData:Z,envData:ee,riskData:ea,trendData:et,impactData:er}):"table"===l?(0,r.jsx)(im,{rows:B,onEdit:ei,onApprove:el,onDeploy:eo,onRollback:e=>{$(e),U(e.rollbackReason||"")},onRolledBack:ep,onDelete:eu}):(0,r.jsx)(iu,{rows:B,onEdit:ei,onApprove:el,onDeploy:eo,onRollback:e=>{$(e),U(e.rollbackReason||"")},onRolledBack:ep,onDelete:eu,navigate:e}),L&&(0,r.jsx)(ix,{form:O,setForm:_,saving:v,onClose:es,onSubmit:en}),E&&(0,r.jsx)(ih,{release:E,reason:F,setReason:U,onClose:()=>$(null),onSubmit:ec})]}):(0,r.jsxs)("main",{className:"release-page",style:{"--release-primary":d},children:[(0,r.jsx)("style",{children:ik}),(0,r.jsxs)("section",{className:"release-state",children:[(0,r.jsx)("h2",{children:"Developer access required"}),(0,r.jsx)("p",{children:"Sign in with a developer account to manage platform releases."})]})]})}function iu({rows:e,onEdit:a,onApprove:t,onDeploy:i,onRollback:s,onRolledBack:n,onDelete:d,navigate:l}){return(0,r.jsxs)("section",{className:"release-card-grid",children:[e.map(e=>{var o;return(0,r.jsxs)("article",{className:`release-card ${e.status}`,children:[(0,r.jsxs)("div",{className:"release-card-top",children:[(0,r.jsx)("span",{className:"release-avatar",children:"major"===(o=e.type)?"\uD83C\uDF0D":"minor"===o?"✨":"patch"===o?"\uD83E\uDDE9":"hotfix"===o?"\uD83D\uDD25":"security"===o?"\uD83D\uDD10":"\uD83D\uDE80"}),(0,r.jsxs)("div",{className:"release-chip-row",children:[(0,r.jsx)(iv,{tone:ir(e.status),children:it(e.status)}),(0,r.jsx)(iv,{tone:ii(e.risk),children:it(e.risk)})]})]}),(0,r.jsx)("h2",{children:e.version}),(0,r.jsx)("p",{children:e.title}),(0,r.jsx)("div",{className:"release-progress",children:(0,r.jsx)("span",{style:{width:`${e.rolloutPercent}%`}})}),(0,r.jsxs)("div",{className:"release-mini-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Type"}),it(e.type)]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Environment"}),it(e.environment)]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Rollout"}),e.rolloutPercent,"%"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Health"}),is(e),"%"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Tests"}),e.testsPassed," passed \xb7 ",e.testsFailed," failed"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Updated"}),ie(e.updatedAt)]})]}),(0,r.jsxs)("div",{className:"release-pills",children:[e.branchName&&(0,r.jsx)("span",{children:e.branchName}),e.commitSha&&(0,r.jsx)("span",{children:e.commitSha}),e.featuresAdded>0&&(0,r.jsxs)("span",{children:[e.featuresAdded," features"]}),e.bugsFixed>0&&(0,r.jsxs)("span",{children:[e.bugsFixed," fixes"]}),e.breakingChanges>0&&(0,r.jsxs)("span",{children:[e.breakingChanges," breaking"]})]}),(0,r.jsx)("p",{className:"release-changelog",children:e.changelog||"No changelog added."}),(0,r.jsxs)("div",{className:"release-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Edit"}),"approved"!==e.status&&"deployed"!==e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>t(e),children:"Approve"}),"deployed"!==e.status&&"rolled_back"!==e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>i(e),children:"Deploy"}),["deployed","failed"].includes(e.status)&&(0,r.jsx)("button",{type:"button",onClick:()=>s(e),children:"Rollback"}),"rollback_requested"===e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>n(e),children:"Mark Rolled Back"}),(0,r.jsx)("button",{type:"button",onClick:()=>l?.("auditLogs"),children:"Audit"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>d(e),children:"Delete"})]})]},e.id)}),!e.length&&(0,r.jsx)(iy,{text:"No releases match your filters."})]})}function im({rows:e,onEdit:a,onApprove:t,onDeploy:i,onRollback:s,onRolledBack:n,onDelete:d}){return(0,r.jsxs)("section",{className:"release-table-card",children:[(0,r.jsx)("div",{className:"release-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Release"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Type"}),(0,r.jsx)("th",{children:"Environment"}),(0,r.jsx)("th",{children:"Risk"}),(0,r.jsx)("th",{children:"Rollout"}),(0,r.jsx)("th",{children:"Tests"}),(0,r.jsx)("th",{children:"Impact"}),(0,r.jsx)("th",{children:"Deployed"}),(0,r.jsx)("th",{children:"Branch / Commit"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:e.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("strong",{children:e.version}),(0,r.jsx)("small",{children:e.title})]}),(0,r.jsx)("td",{children:(0,r.jsx)(iv,{tone:ir(e.status),children:it(e.status)})}),(0,r.jsx)("td",{children:it(e.type)}),(0,r.jsx)("td",{children:it(e.environment)}),(0,r.jsx)("td",{children:(0,r.jsx)(iv,{tone:ii(e.risk),children:it(e.risk)})}),(0,r.jsxs)("td",{children:[e.rolloutPercent,"%"]}),(0,r.jsxs)("td",{children:[e.testsPassed," / ",e.testsFailed]}),(0,r.jsxs)("td",{children:[e.featuresAdded," features \xb7 ",e.bugsFixed," fixes"]}),(0,r.jsx)("td",{children:ie(e.deployedAt)}),(0,r.jsx)("td",{children:(0,r.jsxs)("small",{children:[e.branchName||"—"," ",e.commitSha?`\xb7 ${e.commitSha}`:""]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"release-table-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Edit"}),"approved"!==e.status&&"deployed"!==e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>t(e),children:"Approve"}),"deployed"!==e.status&&"rolled_back"!==e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>i(e),children:"Deploy"}),["deployed","failed"].includes(e.status)&&(0,r.jsx)("button",{type:"button",onClick:()=>s(e),children:"Rollback"}),"rollback_requested"===e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>n(e),children:"Rolled Back"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>d(e),children:"Delete"})]})})]},e.id))})]})}),!e.length&&(0,r.jsx)(iy,{text:"No releases match your filters."})]})}function ig({statusData:e,typeData:a,envData:t,riskData:i,trendData:s,impactData:m}){return(0,r.jsxs)("section",{className:"release-chart-grid",children:[(0,r.jsx)(ij,{title:"Release Trend",description:"Release activity over the last six months.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(eS.Q,{data:s,children:[(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"releaseTrend",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,r.jsx)("stop",{offset:"8%",stopColor:"var(--release-primary)",stopOpacity:.28}),(0,r.jsx)("stop",{offset:"95%",stopColor:"var(--release-primary)",stopOpacity:.02})]})}),(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(p.m,{}),(0,r.jsx)(eC.Gk,{type:"monotone",dataKey:"value",stroke:"var(--release-primary)",fill:"url(#releaseTrend)",strokeWidth:3})]})})}),(0,r.jsxs)(ij,{title:"Status Overview",description:"Pipeline state across all releases.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:e,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:e.map((e,a)=>(0,r.jsx)(q.f,{fill:r6[a%r6.length]},a))})]})}),(0,r.jsx)(iw,{rows:e})]}),(0,r.jsx)(ij,{title:"Release Types",description:"Major, minor, patch, hotfix and security releases.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:a,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",width:115,tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--release-primary)",radius:[0,12,12,0]})]})})}),(0,r.jsxs)(ij,{title:"Environment Split",description:"Where releases are being prepared or deployed.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:t,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:t.map((e,a)=>(0,r.jsx)(q.f,{fill:r6[a%r6.length]},a))})]})}),(0,r.jsx)(iw,{rows:t})]}),(0,r.jsxs)(ij,{title:"Risk Profile",description:"Release risk distribution.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:i,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:i.map((e,a)=>(0,r.jsx)(q.f,{fill:r6[a%r6.length]},a))})]})}),(0,r.jsx)(iw,{rows:i})]}),(0,r.jsx)(ij,{title:"Release Impact",description:"Features, bug fixes, breaking changes and failed tests.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:m,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",width:115,tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--release-primary)",radius:[0,12,12,0]})]})})})]})}function ix({form:e,setForm:a,saving:t,onClose:i,onSubmit:s}){let n=(e,t)=>{a(a=>({...a,[e]:t}))};return(0,r.jsx)("div",{className:"release-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("form",{className:"release-modal",onSubmit:s,children:[(0,r.jsxs)("div",{className:"release-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:e.id?"Edit Release":"New Release"}),(0,r.jsx)("p",{children:"Record version, changelog, tests, risk and rollout details."})]}),(0,r.jsx)("button",{type:"button",onClick:i,disabled:t,"aria-label":"Close",children:"✕"})]}),(0,r.jsxs)("div",{className:"release-form-grid",children:[(0,r.jsxs)("label",{children:["Version",(0,r.jsx)("input",{value:e.version,onChange:e=>n("version",e.target.value),placeholder:"1.2.0",required:!0})]}),(0,r.jsxs)("label",{children:["Title",(0,r.jsx)("input",{value:e.title,onChange:e=>n("title",e.target.value),placeholder:"Payment checkout redesign",required:!0})]}),(0,r.jsxs)("label",{children:["Type",(0,r.jsx)("select",{value:e.type,onChange:e=>n("type",e.target.value),children:r2.map(e=>(0,r.jsx)("option",{value:e,children:it(e)},e))})]}),(0,r.jsxs)("label",{children:["Status",(0,r.jsx)("select",{value:e.status,onChange:e=>n("status",e.target.value),children:r1.map(e=>(0,r.jsx)("option",{value:e,children:it(e)},e))})]}),(0,r.jsxs)("label",{children:["Environment",(0,r.jsx)("select",{value:e.environment,onChange:e=>n("environment",e.target.value),children:r4.map(e=>(0,r.jsx)("option",{value:e,children:it(e)},e))})]}),(0,r.jsxs)("label",{children:["Risk",(0,r.jsx)("select",{value:e.risk,onChange:e=>n("risk",e.target.value),children:r8.map(e=>(0,r.jsx)("option",{value:e,children:it(e)},e))})]}),(0,r.jsxs)("label",{children:["Branch",(0,r.jsx)("input",{value:e.branchName,onChange:e=>n("branchName",e.target.value),placeholder:"feature/my-release"})]}),(0,r.jsxs)("label",{children:["Commit SHA",(0,r.jsx)("input",{value:e.commitSha,onChange:e=>n("commitSha",e.target.value),placeholder:"abc123"})]}),(0,r.jsxs)("label",{children:["Scheduled date",(0,r.jsx)("input",{type:"datetime-local",value:e.scheduledAt,onChange:e=>n("scheduledAt",e.target.value)})]}),(0,r.jsxs)("label",{children:["Rollout %",(0,r.jsx)("input",{type:"number",min:"0",max:"100",value:e.rolloutPercent,onChange:e=>n("rolloutPercent",e.target.value)})]}),(0,r.jsxs)("label",{children:["Tests passed",(0,r.jsx)("input",{type:"number",min:"0",value:e.testsPassed,onChange:e=>n("testsPassed",e.target.value)})]}),(0,r.jsxs)("label",{children:["Tests failed",(0,r.jsx)("input",{type:"number",min:"0",value:e.testsFailed,onChange:e=>n("testsFailed",e.target.value)})]}),(0,r.jsxs)("label",{children:["Features added",(0,r.jsx)("input",{type:"number",min:"0",value:e.featuresAdded,onChange:e=>n("featuresAdded",e.target.value)})]}),(0,r.jsxs)("label",{children:["Bugs fixed",(0,r.jsx)("input",{type:"number",min:"0",value:e.bugsFixed,onChange:e=>n("bugsFixed",e.target.value)})]}),(0,r.jsxs)("label",{children:["Breaking changes",(0,r.jsx)("input",{type:"number",min:"0",value:e.breakingChanges,onChange:e=>n("breakingChanges",e.target.value)})]}),(0,r.jsxs)("label",{children:["Approved by",(0,r.jsx)("input",{value:e.approvedBy,onChange:e=>n("approvedBy",e.target.value),placeholder:"developer"})]}),(0,r.jsxs)("label",{children:["Deployed by",(0,r.jsx)("input",{value:e.deployedBy,onChange:e=>n("deployedBy",e.target.value),placeholder:"developer"})]}),(0,r.jsxs)("label",{className:"wide",children:["Changelog",(0,r.jsx)("textarea",{value:e.changelog,onChange:e=>n("changelog",e.target.value),placeholder:"What changed in this release?",rows:4})]}),(0,r.jsxs)("label",{className:"wide",children:["Release notes",(0,r.jsx)("textarea",{value:e.releaseNotes,onChange:e=>n("releaseNotes",e.target.value),placeholder:"Internal notes, migration steps, QA notes, etc.",rows:3})]})]}),(0,r.jsxs)("div",{className:"release-modal-actions",children:[(0,r.jsx)("button",{type:"button",onClick:i,disabled:t,children:"Cancel"}),(0,r.jsx)("button",{type:"submit",disabled:t,children:t?"Saving...":e.id?"Save Changes":"Create Release"})]})]})})}function ih({release:e,reason:a,setReason:t,onClose:i,onSubmit:s}){return(0,r.jsx)("div",{className:"release-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("form",{className:"release-modal small",onSubmit:s,children:[(0,r.jsxs)("div",{className:"release-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Request Rollback"}),(0,r.jsxs)("p",{children:[e.version," \xb7 ",e.title]})]}),(0,r.jsx)("button",{type:"button",onClick:i,"aria-label":"Close",children:"✕"})]}),(0,r.jsxs)("section",{className:"release-warning",children:[(0,r.jsx)("strong",{children:"Rollback safety"}),(0,r.jsx)("p",{children:"A real rollback should be performed through your backend/deployment pipeline with audit logs, backup verification and a clear recovery plan."})]}),(0,r.jsxs)("label",{className:"release-rollback-label",children:["Rollback reason",(0,r.jsx)("textarea",{value:a,onChange:e=>t(e.target.value),rows:5,placeholder:"Explain why this release needs to be rolled back."})]}),(0,r.jsxs)("div",{className:"release-modal-actions",children:[(0,r.jsx)("button",{type:"button",onClick:i,children:"Cancel"}),(0,r.jsx)("button",{type:"submit",children:"Request Rollback"})]})]})})}function ib({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"release-stat",children:[(0,r.jsxs)("span",{children:[e,(0,r.jsx)("b",{children:i})]}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:t})]})}function iv({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`release-chip ${a}`,children:e})}function iy({text:e}){return(0,r.jsx)("div",{className:"release-empty",children:e})}function ij({title:e,description:a,children:t}){return(0,r.jsxs)("section",{className:"release-chart-card",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function iw({rows:e}){return(0,r.jsx)("div",{className:"release-legend",children:e.map((e,a)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{style:{background:r6[a%r6.length]}}),e.label,": ",e.value]},`${e.label}-${a}`))})}let ik=`
@keyframes releaseSpin { to { transform: rotate(360deg); } }

.release-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  padding: 8px;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--release-primary) 10%, transparent), transparent 34rem),
    #f8fafc;
  color: #0f172a;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}

.release-page *,
.release-page *::before,
.release-page *::after {
  box-sizing: border-box;
}

.release-page button,
.release-page input,
.release-page select,
.release-page textarea {
  font: inherit;
  max-width: 100%;
}

.release-state {
  min-height: min(420px, calc(100dvh - 32px));
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .08);
  text-align: center;
}

.release-state h2 {
  margin: 0;
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 1000;
  letter-spacing: -.04em;
}

.release-state p {
  max-width: 34rem;
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.6;
}

.release-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--release-primary) 18%, transparent);
  border-top-color: var(--release-primary);
  animation: releaseSpin .8s linear infinite;
}

.release-hero {
  display: grid;
  gap: 16px;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, .18), transparent 20rem),
    linear-gradient(135deg, var(--release-primary), #0f172a 72%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .18);
  overflow: hidden;
}

.release-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .14em;
  opacity: .82;
}

.release-hero h1 {
  margin: 8px 0 0;
  font-size: clamp(28px, 8vw, 44px);
  line-height: 1.02;
  font-weight: 1000;
  letter-spacing: -.07em;
}

.release-hero p {
  max-width: 850px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: .9;
}

.release-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.release-switch {
  display: inline-flex;
  gap: 5px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(14px);
}

.release-switch button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.release-switch button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .16);
}

.release-white-btn,
.release-glass-btn {
  min-height: 40px;
  border-radius: 999px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.release-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.release-glass-btn {
  border: 1px solid rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .14);
  color: #fff;
}

.release-glass-btn:disabled {
  opacity: .7;
  cursor: not-allowed;
}

.release-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 850;
}

.release-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.release-alert.success {
  background: #dcfce7;
  color: #166534;
}

.release-stat-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.release-stat,
.release-card,
.release-chart-card,
.release-table-card {
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.release-stat {
  padding: 16px;
}

.release-stat span {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.release-stat strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(24px, 8vw, 34px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
}

.release-stat small {
  display: block;
  margin-top: 8px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.release-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
}

.release-toolbar input,
.release-toolbar select {
  min-height: 42px;
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .3);
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
}

.release-toolbar button {
  min-height: 42px;
  border: 0;
  border-radius: 16px;
  background: color-mix(in srgb, var(--release-primary) 10%, white);
  color: var(--release-primary);
  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.release-card-grid,
.release-chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.release-card,
.release-chart-card,
.release-table-card {
  min-width: 0;
  padding: 14px;
}

.release-card.failed,
.release-card.rolled_back {
  border-color: rgba(220, 38, 38, .24);
  background: linear-gradient(180deg, #fff, #fff7f7);
}

.release-card.rollback_requested {
  border-color: rgba(249, 115, 22, .24);
}

.release-card.deploying {
  border-color: rgba(37, 99, 235, .24);
}

.release-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.release-avatar {
  width: 46px;
  height: 46px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--release-primary), #0f172a);
  color: #fff;
  font-size: 18px;
  font-weight: 1000;
}

.release-chip-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.release-card h2 {
  margin: 14px 0 0;
  font-size: 25px;
  font-weight: 1000;
  letter-spacing: -.06em;
}

.release-card p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.45;
}

.release-changelog {
  padding: 10px;
  border-radius: 16px;
  background: #f8fafc;
}

.release-progress {
  height: 9px;
  margin-top: 12px;
  border-radius: 999px;
  background: #e2e8f0;
  overflow: hidden;
}

.release-progress span {
  display: block;
  height: 100%;
  min-width: 4px;
  background: linear-gradient(90deg, var(--release-primary), #16a34a);
}

.release-mini-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 14px;
}

.release-mini-grid span {
  padding: 10px;
  border-radius: 16px;
  background: #f8fafc;
  color: #0f172a;
  font-size: 12px;
  font-weight: 850;
}

.release-mini-grid b {
  display: block;
  color: #64748b;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 3px;
}

.release-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.release-pills span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 9px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
  max-width: 100%;
  overflow-wrap: anywhere;
}

.release-actions,
.release-table-actions,
.release-modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.release-actions {
  margin-top: 14px;
}

.release-actions button,
.release-table-actions button,
.release-modal-actions button {
  min-height: 38px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: color-mix(in srgb, var(--release-primary) 10%, white);
  color: var(--release-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.release-actions button:first-child,
.release-table-actions button:first-child,
.release-modal-actions button:last-child {
  background: var(--release-primary);
  color: #fff;
}

.release-actions button.danger,
.release-table-actions button.danger {
  background: #fee2e2;
  color: #b91c1c;
}

.release-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
  white-space: nowrap;
}

.release-chip.green { background: #dcfce7; color: #166534; }
.release-chip.blue { background: #dbeafe; color: #1d4ed8; }
.release-chip.purple { background: #f3e8ff; color: #7e22ce; }
.release-chip.orange { background: #ffedd5; color: #c2410c; }
.release-chip.red { background: #fee2e2; color: #b91c1c; }
.release-chip.gray { background: #f1f5f9; color: #475569; }

.release-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.release-table-wrap table {
  width: 100%;
  min-width: 1280px;
  border-collapse: collapse;
}

.release-table-wrap th {
  text-align: left;
  color: #64748b;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.release-table-wrap td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .16);
  font-size: 13px;
  vertical-align: top;
}

.release-table-wrap strong {
  display: block;
  font-weight: 1000;
}

.release-table-wrap small {
  display: block;
  margin-top: 3px;
  color: #64748b;
  font-size: 11px;
  line-height: 1.35;
}

.release-chart-card h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.release-chart-card p {
  margin: 5px 0 10px;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.release-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

.release-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 9px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.release-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

.release-empty {
  grid-column: 1 / -1;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
  color: #64748b;
  font-size: 13px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, .35);
}

.release-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15, 23, 42, .58);
  backdrop-filter: blur(12px);
}

.release-modal {
  width: min(1040px, 100%);
  max-height: min(92dvh, 920px);
  overflow-y: auto;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 30px 100px rgba(15, 23, 42, .35);
  border: 1px solid rgba(255, 255, 255, .24);
  padding: 14px;
}

.release-modal.small {
  width: min(680px, 100%);
}

.release-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 4px 14px;
}

.release-modal-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.release-modal-head p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.release-modal-head button {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: #f1f5f9;
  color: #0f172a;
  font-weight: 1000;
  cursor: pointer;
}

.release-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.release-form-grid label,
.release-rollback-label {
  display: grid;
  gap: 6px;
  color: #334155;
  font-size: 12px;
  font-weight: 950;
}

.release-form-grid input,
.release-form-grid select,
.release-form-grid textarea,
.release-rollback-label textarea {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .32);
  border-radius: 16px;
  background: #fff;
  color: #0f172a;
  padding: 11px 12px;
  font-size: 13px;
  font-weight: 800;
}

.release-form-grid input,
.release-form-grid select {
  min-height: 42px;
}

.release-form-grid textarea,
.release-rollback-label textarea {
  resize: vertical;
}

.release-warning {
  padding: 12px;
  border-radius: 20px;
  background: #fff7ed;
  border: 1px solid rgba(249, 115, 22, .24);
  margin-bottom: 12px;
}

.release-warning strong {
  display: block;
  color: #9a3412;
  font-size: 13px;
  font-weight: 1000;
}

.release-warning p {
  margin: 5px 0 0;
  color: #c2410c;
  font-size: 12px;
  line-height: 1.5;
}

.release-modal-actions {
  position: sticky;
  bottom: -14px;
  justify-content: flex-end;
  margin-top: 14px;
  padding: 12px 0 2px;
  background: linear-gradient(to top, #fff 70%, transparent);
}

.release-modal-actions button:first-child {
  background: #f1f5f9;
  color: #0f172a;
}

.release-modal-actions button:disabled {
  opacity: .65;
  cursor: not-allowed;
}

@media (min-width: 520px) {
  .release-stat-grid,
  .release-toolbar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .release-mini-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 760px) {
  .release-card-grid,
  .release-chart-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .release-form-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .release-form-grid .wide {
    grid-column: 1 / -1;
  }

  .release-modal-backdrop {
    place-items: center;
    padding: 18px;
  }

  .release-modal {
    padding: 18px;
  }
}

@media (min-width: 920px) {
  .release-page {
    padding: 14px;
  }

  .release-hero {
    grid-template-columns: 1fr auto;
    align-items: end;
    padding: 24px;
  }

  .release-stat-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .release-toolbar {
    grid-template-columns: minmax(240px, 2fr) repeat(4, minmax(130px, 1fr)) auto;
  }

  .release-mini-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1180px) {
  .release-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`,iN=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],iS=e=>{if(!e)return 0;let a="number"==typeof e?e:new Date(e).getTime();return Number.isFinite(a)?a:0},iC=e=>{let a=iS(e);return a?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(a)):"Not set"},iA=e=>new Intl.NumberFormat("en-GH",{notation:"compact",maximumFractionDigits:1}).format(Number(e||0)),iz=e=>{try{return Math.round(new Blob([JSON.stringify(e)]).size/1024)}catch{try{return Math.round(JSON.stringify(e).length/1024)}catch{return 0}}},iD=e=>"healthy"===e?"green":"empty"===e?"gray":"warning"===e?"orange":"error"===e?"red":"gray",iT=({count:e,pendingSync:a,failedRecords:t,error:r})=>r||t>0?"error":a>0?"warning":0===e?"empty":"healthy",iP=e=>{let a=0;return e.forEach(e=>{let t=iS(e?.updatedAt||e?.createdAt||e?.lastModifiedAt);t>a&&(a=t)}),a||null},iR=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},iM=(e,a)=>{let t=new Map;return e.forEach(e=>{let r=String(a(e)||"Unknown").trim()||"Unknown";t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)},iq=(e,a)=>{let t=Number(e.count||e.records||e.rows||0),r=Number(e.pendingSync||e.pending||e.unsynced||0),i=Number(e.deletedRecords||e.deleted||0),s=Number(e.failedRecords||e.failed||e.errors||0),n=e.error||null;return{id:String(e.id||e.name||e.tableName||`server-table-${a}`),name:e.name||e.tableName||`Server Table ${a+1}`,source:"server",count:t,pendingSync:r,deletedRecords:i,failedRecords:s,estimatedSizeKb:Number(e.estimatedSizeKb||e.sizeKb||0),primaryKey:e.primaryKey||null,indexes:Array.isArray(e.indexes)?e.indexes:[],health:e.health||iT({count:t,pendingSync:r,failedRecords:s,error:n}),sample:Array.isArray(e.sample)?e.sample:Array.isArray(e.recordsSample)?e.recordsSample:[],lastUpdatedAt:e.lastUpdatedAt||e.updatedAt||null,error:n}},iL=async()=>{let e=Array.isArray(ar.db.tables)?ar.db.tables:Object.values(ar.db._allTables||{}),a=[];for(let t of e){let e=t?.name||t?.schema?.name||"unknown";try{let r=await t.count(),i=await t.limit(25).toArray(),s=i.filter(e=>{let a=String(e?.synced||e?.syncStatus||"").toLowerCase();return["pending","local","unsynced","failed"].includes(a)||e?.synced===!1}).length,n=i.filter(e=>{let a=String(e?.synced||e?.syncStatus||"").toLowerCase();return"failed"===a||"error"===a||!!(e?.syncError||e?.error)}).length,d=i.filter(e=>!!e?.isDeleted).length,l=Array.isArray(t?.schema?.indexes)?t.schema.indexes.map(e=>e?.name||e?.keyPath||String(e)):[],o=t?.schema?.primKey?.name||t?.schema?.primKey?.keyPath||"id";a.push({id:e,name:e,source:"local",count:r,pendingSync:s,deletedRecords:d,failedRecords:n,estimatedSizeKb:iz(i),primaryKey:String(o||"id"),indexes:l.map(String).filter(Boolean),health:iT({count:r,pendingSync:s,failedRecords:n}),sample:i,lastUpdatedAt:iP(i),error:null})}catch(t){a.push({id:e,name:e,source:"local",count:0,pendingSync:0,deletedRecords:0,failedRecords:0,estimatedSizeKb:0,primaryKey:null,indexes:[],health:"error",sample:[],lastUpdatedAt:null,error:t?.message||"Could not inspect table."})}}return a.sort((e,a)=>a.count-e.count)},iI=(e,a)=>{let t=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),r=URL.createObjectURL(t),i=document.createElement("a");i.href=r,i.download=e,i.click(),URL.revokeObjectURL(r)};function iE({navigate:e}){let{accountId:a,authenticated:t,loading:s}=(0,g.F)(),{settings:n}=(0,x.t)(),d=n?.primaryColor||"var(--primary-color, #2563eb)",[l,o]=(0,i.useState)("cards"),[c,p]=(0,i.useState)([]),[u,h]=(0,i.useState)(!0),[b,f]=(0,i.useState)(!1),[v,y]=(0,i.useState)(""),[j,w]=(0,i.useState)(""),[k,N]=(0,i.useState)(""),[S,C]=(0,i.useState)("all"),[A,z]=(0,i.useState)("all"),[D,T]=(0,i.useState)(null),[P,R]=(0,i.useState)(""),M=async(e=!1)=>{try{e?f(!0):h(!0),y(""),w("");let[a,t]=await Promise.all([iL(),(0,m.uE)("/developer/database-tools").catch(async()=>(0,m.uE)("/database/tools").catch(()=>null))]),r=((e,a=[])=>{if(Array.isArray(e))return e;if(!e||"object"!=typeof e)return[];for(let t of a)if(Array.isArray(e[t]))return e[t];return Array.isArray(e.data)?e.data:Array.isArray(e.items)?e.items:Array.isArray(e.results)?e.results:Array.isArray(e.records)?e.records:Array.isArray(e.rows)?e.rows:[]})(t,["tables","databaseTables","diagnostics"]).map(iq);p([...a,...r])}catch(e){y(e?.message||"Could not inspect database tables."),p(await iL())}finally{h(!1),f(!1)}};(0,i.useEffect)(()=>{if(!s){if(!t||!a)return void h(!1);M()}},[s,t,a]);let q=(0,i.useMemo)(()=>{let e=k.trim().toLowerCase();return c.filter(a=>{let t=`${a.name} ${a.primaryKey||""} ${a.indexes.join(" ")} ${a.error||""}`.toLowerCase(),r=!e||t.includes(e),i="all"===S||a.health===S,s="all"===A||a.source===A;return r&&i&&s}).sort((e,a)=>{if(e.health!==a.health){if("error"===e.health)return -1;if("error"===a.health)return 1;if("warning"===e.health)return -1;if("warning"===a.health)return 1}return a.count-e.count})},[c,k,S,A]),L=(0,i.useMemo)(()=>{if(!D)return[];let e=P.trim().toLowerCase();return e?D.sample.filter(a=>iR(a).toLowerCase().includes(e)):D.sample},[D,P]),I=c.reduce((e,a)=>e+Number(a.count||0),0),E=c.reduce((e,a)=>e+Number(a.pendingSync||0),0),$=c.reduce((e,a)=>e+Number(a.deletedRecords||0),0),F=c.reduce((e,a)=>e+Number(a.failedRecords||0),0),U=c.reduce((e,a)=>e+Number(a.estimatedSizeKb||0),0),O=(0,i.useMemo)(()=>iM(c,e=>e.health),[c]),_=(0,i.useMemo)(()=>iM(c,e=>e.source),[c]),K=(0,i.useMemo)(()=>[...c].sort((e,a)=>a.count-e.count).slice(0,10).map(e=>({label:e.name.length>16?`${e.name.slice(0,16)}…`:e.name,value:e.count})),[c]),B=(0,i.useMemo)(()=>[...c].sort((e,a)=>a.pendingSync-e.pendingSync).slice(0,10).map(e=>({label:e.name.length>16?`${e.name.slice(0,16)}…`:e.name,value:e.pendingSync})),[c]),H=async e=>{try{if(y(""),w(""),"local"===e.source){let a=ar.db.table(e.name),t=await a.toArray();iI(`${e.name}-export.json`,t),w(`${e.name} exported.`)}else iI(`${e.name}-diagnostic.json`,e),w(`${e.name} diagnostic exported.`)}catch(e){y(e?.message||"Could not export table.")}},G=async e=>{if("local"!==e.source)return void y("Only local PWA tables can be cleared from this tool.");if(window.confirm(`This will clear all local records from "${e.name}" on this device only. This is dangerous. Continue?`))try{y(""),w(""),await ar.db.table(e.name).clear(),T(null),await M(!0),w(`${e.name} cleared locally.`)}catch(e){y(e?.message||"Could not clear local table.")}},W=e=>{T(e),R("")};return u||s?(0,r.jsxs)("main",{className:"devdb-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:iW}),(0,r.jsxs)("section",{className:"devdb-state",children:[(0,r.jsx)("div",{className:"devdb-spinner"}),(0,r.jsx)("h2",{children:"Inspecting database..."}),(0,r.jsx)("p",{children:"Reading local PWA tables, sync flags, sample records and backend diagnostics."})]})]}):t&&a?(0,r.jsxs)("main",{className:"devdb-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:iW}),(0,r.jsxs)("section",{className:"devdb-hero",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"devdb-eyebrow",children:"Data operations"}),(0,r.jsx)("h1",{children:"Database Tools"}),(0,r.jsx)("p",{children:"Inspect local PWA tables, sample records, sync health, deleted records and backend database diagnostics. Use dangerous actions carefully because local table clearing affects this device."})]}),(0,r.jsxs)("div",{className:"devdb-hero-actions",children:[(0,r.jsxs)("div",{className:"devdb-switch",role:"tablist","aria-label":"Database tool views",children:[(0,r.jsx)("button",{type:"button",className:"cards"===l?"active":"",onClick:()=>o("cards"),children:"Cards"}),(0,r.jsx)("button",{type:"button",className:"table"===l?"active":"",onClick:()=>o("table"),children:"Table"}),(0,r.jsx)("button",{type:"button",className:"analytics"===l?"active":"",onClick:()=>o("analytics"),children:"Charts"})]}),(0,r.jsx)("button",{type:"button",className:"devdb-white-btn",onClick:()=>{iI("eleeveon-database-diagnostics.json",{exportedAt:new Date().toISOString(),tables:c}),w("Database diagnostics exported.")},children:"Export Diagnostics"}),(0,r.jsx)("button",{type:"button",className:"devdb-glass-btn",onClick:()=>M(!0),disabled:b,children:b?"Refreshing...":"Refresh"})]})]}),(v||j)&&(0,r.jsx)("section",{className:`devdb-alert ${v?"error":"success"}`,children:v||j}),(0,r.jsxs)("section",{className:"devdb-stat-grid",children:[(0,r.jsx)(i_,{label:"Tables",value:c.length,detail:`${q.length} shown`,icon:"\uD83D\uDDC4️"}),(0,r.jsx)(i_,{label:"Records",value:iA(I),detail:`${iA(U)} KB sampled`,icon:"\uD83D\uDCE6"}),(0,r.jsx)(i_,{label:"Pending Sync",value:E,detail:`${$} deleted sampled`,icon:"\uD83D\uDD04"}),(0,r.jsx)(i_,{label:"Failed Records",value:F,detail:"Sampled sync failures",icon:"⚠️"})]}),(0,r.jsxs)("section",{className:"devdb-toolbar",children:[(0,r.jsx)("input",{value:k,onChange:e=>N(e.target.value),placeholder:"Search table, primary key, indexes..."}),(0,r.jsxs)("select",{value:S,onChange:e=>C(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All health"}),(0,r.jsx)("option",{value:"healthy",children:"Healthy"}),(0,r.jsx)("option",{value:"empty",children:"Empty"}),(0,r.jsx)("option",{value:"warning",children:"Warning"}),(0,r.jsx)("option",{value:"error",children:"Error"})]}),(0,r.jsxs)("select",{value:A,onChange:e=>z(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All sources"}),(0,r.jsx)("option",{value:"local",children:"Local PWA"}),(0,r.jsx)("option",{value:"server",children:"Server"})]}),(0,r.jsx)("button",{type:"button",onClick:()=>{N(""),C("all"),z("all")},children:"Reset"})]}),"analytics"===l?(0,r.jsx)(iU,{healthChart:O,sourceChart:_,recordChart:K,syncChart:B}):"table"===l?(0,r.jsx)(iF,{tables:q,onOpen:W,onExport:H,onClear:G}):(0,r.jsx)(i$,{tables:q,onOpen:W,onExport:H,onClear:G,navigate:e}),D&&(0,r.jsx)(iO,{table:D,records:L,recordQuery:P,setRecordQuery:R,onClose:()=>T(null),onExport:H,onClear:G})]}):(0,r.jsxs)("main",{className:"devdb-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:iW}),(0,r.jsxs)("section",{className:"devdb-state",children:[(0,r.jsx)("h2",{children:"Developer access required"}),(0,r.jsx)("p",{children:"Sign in with a developer account to inspect database tools."})]})]})}function i$({tables:e,onOpen:a,onExport:t,onClear:i,navigate:s}){return(0,r.jsxs)("section",{className:"devdb-card-grid",children:[e.map(e=>(0,r.jsxs)("article",{className:`devdb-table-card ${e.health}`,children:[(0,r.jsxs)("div",{className:"devdb-table-top",children:[(0,r.jsx)("span",{className:"devdb-table-icon",children:"\uD83D\uDDC4️"}),(0,r.jsxs)("div",{className:"devdb-chip-row",children:[(0,r.jsx)(iK,{tone:iD(e.health),children:e.health}),(0,r.jsx)(iK,{tone:"local"===e.source?"blue":"purple",children:e.source})]})]}),(0,r.jsx)("h2",{children:e.name}),(0,r.jsx)("p",{children:e.error||`${iA(e.count)} records \xb7 ${e.indexes.length} index(es) \xb7 ${e.estimatedSizeKb} KB sampled`}),(0,r.jsxs)("div",{className:"devdb-mini-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Records"}),iA(e.count)]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Pending Sync"}),e.pendingSync]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Deleted"}),e.deletedRecords]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Failed"}),e.failedRecords]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Primary Key"}),e.primaryKey||"—"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Last Update"}),iC(e.lastUpdatedAt)]})]}),(0,r.jsxs)("div",{className:"devdb-index-pills",children:[e.indexes.slice(0,6).map(e=>(0,r.jsx)("span",{children:e},e)),e.indexes.length>6&&(0,r.jsxs)("span",{children:["+",e.indexes.length-6," more"]}),!e.indexes.length&&(0,r.jsx)("span",{children:"No secondary indexes"})]}),(0,r.jsxs)("div",{className:"devdb-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Inspect"}),(0,r.jsx)("button",{type:"button",onClick:()=>t(e),children:"Export"}),(0,r.jsx)("button",{type:"button",onClick:()=>s?.("syncDiagnostics"),children:"Sync"}),"local"===e.source&&(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>i(e),children:"Clear Local"})]})]},`${e.source}-${e.name}`)),!e.length&&(0,r.jsx)(iB,{text:"No database tables match your filters."})]})}function iF({tables:e,onOpen:a,onExport:t,onClear:i}){return(0,r.jsxs)("section",{className:"devdb-table-list-card",children:[(0,r.jsx)("div",{className:"devdb-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Table"}),(0,r.jsx)("th",{children:"Source"}),(0,r.jsx)("th",{children:"Health"}),(0,r.jsx)("th",{children:"Records"}),(0,r.jsx)("th",{children:"Pending"}),(0,r.jsx)("th",{children:"Deleted"}),(0,r.jsx)("th",{children:"Failed"}),(0,r.jsx)("th",{children:"Primary Key"}),(0,r.jsx)("th",{children:"Indexes"}),(0,r.jsx)("th",{children:"Sample Size"}),(0,r.jsx)("th",{children:"Updated"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:e.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("strong",{children:e.name}),e.error&&(0,r.jsx)("small",{children:e.error})]}),(0,r.jsx)("td",{children:e.source}),(0,r.jsx)("td",{children:(0,r.jsx)(iK,{tone:iD(e.health),children:e.health})}),(0,r.jsx)("td",{children:iA(e.count)}),(0,r.jsx)("td",{children:e.pendingSync}),(0,r.jsx)("td",{children:e.deletedRecords}),(0,r.jsx)("td",{children:e.failedRecords}),(0,r.jsx)("td",{children:e.primaryKey||"—"}),(0,r.jsx)("td",{children:e.indexes.length}),(0,r.jsxs)("td",{children:[e.estimatedSizeKb," KB"]}),(0,r.jsx)("td",{children:iC(e.lastUpdatedAt)}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"devdb-table-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Inspect"}),(0,r.jsx)("button",{type:"button",onClick:()=>t(e),children:"Export"}),"local"===e.source&&(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>i(e),children:"Clear"})]})})]},`${e.source}-${e.name}`))})]})}),!e.length&&(0,r.jsx)(iB,{text:"No database tables match your filters."})]})}function iU({healthChart:e,sourceChart:a,recordChart:t,syncChart:i}){return(0,r.jsxs)("section",{className:"devdb-chart-grid",children:[(0,r.jsxs)(iH,{title:"Table Health",description:"Healthy, warning, empty and error table states.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:e,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:e.map((e,a)=>(0,r.jsx)(q.f,{fill:iN[a%iN.length]},a))})]})}),(0,r.jsx)(iG,{rows:e})]}),(0,r.jsxs)(iH,{title:"Source Mix",description:"Local PWA versus server diagnostics.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:a,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:a.map((e,a)=>(0,r.jsx)(q.f,{fill:iN[a%iN.length]},a))})]})}),(0,r.jsx)(iG,{rows:a})]}),(0,r.jsx)(iH,{title:"Largest Tables",description:"Top tables by record count.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:t,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11,width:120}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--dev-primary)",radius:[0,12,12,0]})]})})}),(0,r.jsx)(iH,{title:"Pending Sync by Table",description:"Tables with sampled unsynced records.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:i,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11,width:120}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--dev-primary)",radius:[0,12,12,0]})]})})})]})}function iO({table:e,records:a,recordQuery:t,setRecordQuery:i,onClose:s,onExport:n,onClear:d}){return(0,r.jsx)("div",{className:"devdb-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"devdb-modal",children:[(0,r.jsxs)("div",{className:"devdb-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:e.name}),(0,r.jsxs)("p",{children:[e.source," table \xb7 ",iA(e.count)," records \xb7 ",e.sample.length," sampled"]})]}),(0,r.jsx)("button",{type:"button",onClick:s,"aria-label":"Close",children:"✕"})]}),(0,r.jsxs)("section",{className:"devdb-modal-summary",children:[(0,r.jsx)(iK,{tone:iD(e.health),children:e.health}),(0,r.jsx)(iK,{tone:"local"===e.source?"blue":"purple",children:e.source}),(0,r.jsx)("span",{children:e.primaryKey||"no primary key"}),(0,r.jsxs)("span",{children:[e.indexes.length," index(es)"]}),(0,r.jsxs)("span",{children:[e.estimatedSizeKb," KB sampled"]})]}),e.error&&(0,r.jsx)("section",{className:"devdb-alert error",children:e.error}),(0,r.jsxs)("div",{className:"devdb-inspector-actions",children:[(0,r.jsx)("input",{value:t,onChange:e=>i(e.target.value),placeholder:"Search sampled records..."}),(0,r.jsx)("button",{type:"button",onClick:()=>n(e),children:"Export"}),"local"===e.source&&(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>d(e),children:"Clear Local Table"})]}),(0,r.jsxs)("section",{className:"devdb-record-list",children:[a.map((e,a)=>(0,r.jsxs)("details",{className:"devdb-record",children:[(0,r.jsxs)("summary",{children:["Record ",a+1,e?.id?` \xb7 ID: ${e.id}`:"",e?.cloudId?` \xb7 Cloud: ${e.cloudId}`:""]}),(0,r.jsx)("pre",{children:iR(e)})]},a)),!a.length&&(0,r.jsx)(iB,{text:"No sampled records match your search."})]})]})})}function i_({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"devdb-stat",children:[(0,r.jsxs)("span",{children:[e,(0,r.jsx)("b",{children:i})]}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:t})]})}function iK({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`devdb-chip ${a}`,children:e})}function iB({text:e}){return(0,r.jsx)("div",{className:"devdb-empty",children:e})}function iH({title:e,description:a,children:t}){return(0,r.jsxs)("section",{className:"devdb-chart-card",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function iG({rows:e}){return(0,r.jsx)("div",{className:"devdb-legend",children:e.map((e,a)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{style:{background:iN[a%iN.length]}}),e.label,": ",e.value]},`${e.label}-${a}`))})}let iW=`
@keyframes devdbSpin { to { transform: rotate(360deg); } }

.devdb-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 8px;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--dev-primary) 10%, transparent), transparent 34rem),
    var(--bg, #f8fafc);
  color: var(--text, #0f172a);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  overflow-x: hidden;
}

.devdb-page *,
.devdb-page *::before,
.devdb-page *::after {
  box-sizing: border-box;
}

.devdb-page button,
.devdb-page input,
.devdb-page select,
.devdb-page textarea {
  font: inherit;
  max-width: 100%;
}

.devdb-page button {
  -webkit-tap-highlight-color: transparent;
}

.devdb-state {
  min-height: min(420px, calc(100dvh - 32px));
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 28px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .08);
  text-align: center;
}

.devdb-state h2 {
  margin: 0;
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 1000;
  letter-spacing: -.04em;
}

.devdb-state p {
  max-width: 34rem;
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.6;
}

.devdb-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--dev-primary) 18%, transparent);
  border-top-color: var(--dev-primary);
  animation: devdbSpin .8s linear infinite;
}

.devdb-hero {
  display: grid;
  gap: 16px;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, .18), transparent 20rem),
    linear-gradient(135deg, var(--dev-primary), #0f172a 72%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .18);
  overflow: hidden;
}

.devdb-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .14em;
  opacity: .82;
}

.devdb-hero h1 {
  margin: 8px 0 0;
  font-size: clamp(28px, 8vw, 44px);
  line-height: 1.02;
  font-weight: 1000;
  letter-spacing: -.07em;
}

.devdb-hero p {
  max-width: 850px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: .9;
}

.devdb-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.devdb-switch {
  display: inline-flex;
  gap: 5px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(14px);
}

.devdb-switch button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.devdb-switch button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .16);
}

.devdb-white-btn,
.devdb-glass-btn {
  min-height: 40px;
  border-radius: 999px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.devdb-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.devdb-glass-btn {
  border: 1px solid rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .14);
  color: #fff;
}

.devdb-glass-btn:disabled {
  opacity: .7;
  cursor: not-allowed;
}

.devdb-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 850;
}

.devdb-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.devdb-alert.success {
  background: #dcfce7;
  color: #166534;
}

.devdb-stat-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.devdb-stat {
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 24px;
  padding: 16px;
  background: var(--surface, #fff);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.devdb-stat span {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 850;
}

.devdb-stat strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(24px, 8vw, 34px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
  overflow-wrap: anywhere;
}

.devdb-stat small {
  display: block;
  margin-top: 8px;
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 850;
}

.devdb-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 24px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
}

.devdb-toolbar input,
.devdb-toolbar select {
  min-height: 42px;
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .3);
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
}

.devdb-toolbar button {
  min-height: 42px;
  border: 0;
  border-radius: 16px;
  background: color-mix(in srgb, var(--dev-primary) 10%, white);
  color: var(--dev-primary);
  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.devdb-card-grid,
.devdb-chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.devdb-table-card,
.devdb-chart-card,
.devdb-table-list-card {
  min-width: 0;
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 26px;
  padding: 14px;
  background: var(--surface, #fff);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.devdb-table-card.error {
  border-color: rgba(220, 38, 38, .24);
  background: linear-gradient(180deg, #fff, #fff7f7);
}

.devdb-table-card.warning {
  border-color: rgba(249, 115, 22, .24);
}

.devdb-table-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.devdb-table-icon {
  width: 46px;
  height: 46px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--dev-primary), #0f172a);
  color: #fff;
  font-size: 18px;
  font-weight: 1000;
}

.devdb-chip-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.devdb-table-card h2 {
  margin: 14px 0 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.devdb-table-card p {
  margin: 5px 0 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.45;
}

.devdb-mini-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 14px;
}

.devdb-mini-grid span {
  padding: 10px;
  border-radius: 16px;
  background: #f8fafc;
  color: #0f172a;
  font-size: 12px;
  font-weight: 850;
  overflow: hidden;
  text-overflow: ellipsis;
}

.devdb-mini-grid b {
  display: block;
  color: var(--muted, #64748b);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 3px;
}

.devdb-index-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.devdb-index-pills span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 9px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.devdb-actions,
.devdb-table-actions,
.devdb-inspector-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.devdb-actions {
  margin-top: 14px;
}

.devdb-actions button,
.devdb-table-actions button,
.devdb-inspector-actions button {
  min-height: 38px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: color-mix(in srgb, var(--dev-primary) 10%, white);
  color: var(--dev-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.devdb-actions button:first-child,
.devdb-table-actions button:first-child,
.devdb-inspector-actions button:first-of-type {
  background: var(--dev-primary);
  color: #fff;
}

.devdb-actions button.danger,
.devdb-table-actions button.danger,
.devdb-inspector-actions button.danger {
  background: #fee2e2;
  color: #b91c1c;
}

.devdb-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
  white-space: nowrap;
}

.devdb-chip.green { background: #dcfce7; color: #166534; }
.devdb-chip.blue { background: #dbeafe; color: #1d4ed8; }
.devdb-chip.purple { background: #f3e8ff; color: #7e22ce; }
.devdb-chip.orange { background: #ffedd5; color: #c2410c; }
.devdb-chip.red { background: #fee2e2; color: #b91c1c; }
.devdb-chip.gray { background: #f1f5f9; color: #475569; }

.devdb-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.devdb-table-wrap table {
  width: 100%;
  min-width: 1180px;
  border-collapse: collapse;
}

.devdb-table-wrap th {
  text-align: left;
  color: var(--muted, #64748b);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.devdb-table-wrap td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .16);
  font-size: 13px;
  vertical-align: top;
}

.devdb-table-wrap strong {
  display: block;
  font-weight: 1000;
}

.devdb-table-wrap small {
  display: block;
  margin-top: 3px;
  color: var(--muted, #64748b);
  font-size: 11px;
  line-height: 1.35;
}

.devdb-chart-card h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.devdb-chart-card p {
  margin: 5px 0 10px;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.5;
}

.devdb-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

.devdb-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 9px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.devdb-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

.devdb-empty {
  grid-column: 1 / -1;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
  color: var(--muted, #64748b);
  font-size: 13px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, .35);
}

.devdb-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15, 23, 42, .58);
  backdrop-filter: blur(12px);
}

.devdb-modal {
  width: min(980px, 100%);
  max-height: min(92dvh, 920px);
  overflow-y: auto;
  border-radius: 28px;
  background: var(--surface, #fff);
  box-shadow: 0 30px 100px rgba(15, 23, 42, .35);
  border: 1px solid rgba(255, 255, 255, .24);
  padding: 14px;
}

.devdb-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 4px 14px;
}

.devdb-modal-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.devdb-modal-head p {
  margin: 5px 0 0;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.5;
}

.devdb-modal-head button {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: #f1f5f9;
  color: #0f172a;
  font-weight: 1000;
  cursor: pointer;
}

.devdb-modal-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px;
  border-radius: 18px;
  background: #f8fafc;
  margin-bottom: 12px;
}

.devdb-modal-summary span:not(.devdb-chip) {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .18);
  font-size: 11px;
  font-weight: 900;
  color: #475569;
}

.devdb-inspector-actions {
  margin-bottom: 12px;
}

.devdb-inspector-actions input {
  min-height: 38px;
  flex: 1 1 240px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, .32);
  padding: 0 12px;
  font-size: 12px;
  font-weight: 850;
}

.devdb-record-list {
  display: grid;
  gap: 8px;
}

.devdb-record {
  border-radius: 18px;
  background: #0f172a;
  color: #e5e7eb;
  overflow: hidden;
}

.devdb-record summary {
  cursor: pointer;
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 1000;
}

.devdb-record pre {
  max-height: 320px;
  overflow: auto;
  margin: 0;
  padding: 0 12px 12px;
  font-size: 11px;
  line-height: 1.55;
  white-space: pre-wrap;
}

@media (min-width: 520px) {
  .devdb-stat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .devdb-toolbar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .devdb-mini-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 760px) {
  .devdb-card-grid,
  .devdb-chart-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .devdb-modal-backdrop {
    place-items: center;
    padding: 18px;
  }

  .devdb-modal {
    padding: 18px;
  }
}

@media (min-width: 920px) {
  .devdb-page {
    padding: 14px;
  }

  .devdb-hero {
    grid-template-columns: 1fr auto;
    align-items: end;
    padding: 24px;
  }

  .devdb-stat-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .devdb-toolbar {
    grid-template-columns: minmax(240px, 2fr) repeat(2, minmax(130px, 1fr)) auto;
  }

  .devdb-mini-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1180px) {
  .devdb-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`,iV=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},iJ=async e=>JSON.parse(await e.text());function iQ({navigate:e}){let{settings:a}=(0,x.t)(),{authenticated:t,accountId:s,loading:m}=(0,g.F)(),h=a?.primaryColor||"#2563eb",[b,f]=(0,i.useState)(!0),[v,y]=(0,i.useState)([]),[j,w]=(0,i.useState)(null),[k,N]=(0,i.useState)([]),[S,C]=(0,i.useState)([]),[A,z]=(0,i.useState)(""),[D,T]=(0,i.useState)("cards"),[P,R]=(0,i.useState)(1),[M,q]=(0,i.useState)([]),[L,I]=(0,i.useState)(null),[E,$]=(0,i.useState)(""),[F,U]=(0,i.useState)(!1),[O,_]=(0,i.useState)(""),[K,B]=(0,i.useState)(""),H=async()=>{try{f(!0);let e=Array.isArray(ar.db.tables)?ar.db.tables:Object.values(ar.db._allTables||{}),a=[];for(let t of e){let e=await t.count();a.push({name:t.name,count:e,primaryKey:t?.schema?.primKey?.name||t?.schema?.primKey?.keyPath||"id",indexes:Array.isArray(t?.schema?.indexes)?t.schema.indexes.map(e=>e?.name||e?.keyPath||String(e)):[]})}a.sort((e,a)=>a.count-e.count),y(a),a.length&&!j&&await G(a[0])}catch(e){_(e?.message||"Could not load database studio.")}finally{f(!1)}},G=async e=>{try{w(e),R(1),q([]);let a=ar.db.table(e.name),t=await a.toArray();N(t),C(t)}catch(e){_(e?.message||"Could not open table.")}};(0,i.useEffect)(()=>{if(!m){if(!t||!s)return void f(!1);H()}},[t,s,m]),(0,i.useEffect)(()=>{let e=A.trim().toLowerCase();e?C(k.filter(a=>iV(a).toLowerCase().includes(e))):C(k)},[A,k]);let W=Math.max(1,Math.ceil(S.length/20)),V=(0,i.useMemo)(()=>{let e=(P-1)*20;return S.slice(e,e+20)},[S,P]),J=e=>{I(e),$(iV(e)),U(!0)},Q=async()=>{if(j)try{_("");let e=JSON.parse(E),a=ar.db.table(j.name);if(L){let t=L[j.primaryKey]??L.id;await a.put({...L,...e},t),B("Record updated.")}else await a.add(e),B("Record created.");U(!1),await G(j),await H()}catch(e){_(e?.message||"Could not save record.")}},Y=async e=>{if(j&&window.confirm("Delete this record permanently?"))try{let a=ar.db.table(j.name),t=e[j.primaryKey]??e.id;await a.delete(t),B("Record deleted."),await G(j),await H()}catch(e){_(e?.message||"Could not delete record.")}},X=async()=>{if(j&&M.length&&window.confirm(`Delete ${M.length} selected records permanently?`))try{let e=ar.db.table(j.name);await e.bulkDelete(M),q([]),B(`${M.length} records deleted.`),await G(j),await H()}catch(e){_(e?.message||"Bulk delete failed.")}},Z=async()=>{var e;let a,t,r;if(!j)return;let i=ar.db.table(j.name),s=await i.toArray();e=`${j.name}.json`,a=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),t=URL.createObjectURL(a),(r=document.createElement("a")).href=t,r.download=e,r.click(),URL.revokeObjectURL(t)},ee=async e=>{if(!j)return;let a=e.target.files?.[0];if(a)try{let e=await iJ(a);if(!Array.isArray(e))throw Error("JSON file must contain an array.");let t=ar.db.table(j.name);await t.bulkAdd(e),B(`${e.length} records imported.`),await G(j),await H()}catch(e){_(e?.message||"Import failed.")}},ea=v.slice(0,10).map(e=>({label:e.name.length>16?`${e.name.slice(0,16)}…`:e.name,value:e.count}));return b||m?(0,r.jsxs)("main",{className:"studio-page",style:{"--studio-primary":h},children:[(0,r.jsx)("style",{children:iX}),(0,r.jsxs)("section",{className:"studio-loading",children:[(0,r.jsx)("div",{className:"studio-spinner"}),(0,r.jsx)("h2",{children:"Loading Database Studio..."})]})]}):t&&s?(0,r.jsxs)("main",{className:"studio-page",style:{"--studio-primary":h},children:[(0,r.jsx)("style",{children:iX}),(0,r.jsxs)("section",{className:"studio-hero",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"studio-eyebrow",children:"CRUD DATABASE MANAGER"}),(0,r.jsx)("h1",{children:"Database Studio"}),(0,r.jsx)("p",{children:"Add, edit, delete, inspect, import and export local PWA database records with a mobile-first developer interface."})]}),(0,r.jsxs)("div",{className:"studio-hero-actions",children:[(0,r.jsx)("button",{type:"button",className:"studio-white-btn",onClick:()=>{I(null),$("{\n  \n}"),U(!0)},children:"+ New Record"}),(0,r.jsx)("button",{type:"button",className:"studio-glass-btn",onClick:()=>e?.("databaseTools"),children:"Back To Tools"}),(0,r.jsx)("button",{type:"button",className:"studio-glass-btn",onClick:()=>e?.("sqlConsole"),children:"SQL Console"})]})]}),(O||K)&&(0,r.jsx)("section",{className:`studio-alert ${O?"error":"success"}`,children:O||K}),(0,r.jsxs)("section",{className:"studio-grid",children:[(0,r.jsxs)("aside",{className:"studio-sidebar",children:[(0,r.jsxs)("div",{className:"studio-side-head",children:[(0,r.jsx)("h2",{children:"Tables"}),(0,r.jsx)("span",{children:v.length})]}),(0,r.jsx)("div",{className:"studio-table-list",children:v.map(e=>{var a;let t;return(0,r.jsxs)("button",{type:"button",className:`studio-table-item ${j?.name===e.name?"active":""}`,onClick:()=>G(e),children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:e.name}),(0,r.jsxs)("small",{children:[(t=e.count,new Intl.NumberFormat("en-GH",{notation:"compact",maximumFractionDigits:1}).format(Number(t||0)))," records"]})]}),(0,r.jsx)(iY,{tone:(a=e.count)>5e3?"red":a>1e3?"orange":a>100?"purple":a>20?"blue":"green",children:e.count})]},e.name)})})]}),(0,r.jsxs)("section",{className:"studio-main",children:[(0,r.jsxs)("section",{className:"studio-toolbar",children:[(0,r.jsx)("input",{value:A,onChange:e=>z(e.target.value),placeholder:"Search records..."}),(0,r.jsxs)("div",{className:"studio-switch",children:[(0,r.jsx)("button",{type:"button",className:"cards"===D?"active":"",onClick:()=>T("cards"),children:"Cards"}),(0,r.jsx)("button",{type:"button",className:"table"===D?"active":"",onClick:()=>T("table"),children:"Table"})]}),(0,r.jsx)("button",{type:"button",onClick:Z,children:"Export"}),(0,r.jsxs)("label",{className:"studio-import",children:["Import JSON",(0,r.jsx)("input",{type:"file",accept:".json",onChange:ee})]}),!!M.length&&(0,r.jsx)("button",{type:"button",className:"danger",onClick:X,children:"Delete Selected"})]}),(0,r.jsxs)("section",{className:"studio-chart-card",children:[(0,r.jsx)("h2",{children:"Largest Tables"}),(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(d.E,{data:ea,children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3"}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--studio-primary)",radius:[12,12,0,0]})]})})]}),j&&(0,r.jsxs)("section",{className:"studio-schema-card",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:j.name}),(0,r.jsxs)("p",{children:["Primary Key:"," ",j.primaryKey]})]}),(0,r.jsx)("div",{className:"studio-indexes",children:j.indexes.map(e=>(0,r.jsx)("span",{children:e},e))})]}),"cards"===D?(0,r.jsx)("section",{className:"studio-card-grid",children:V.map((e,a)=>{let t=e?.[j?.primaryKey||"id"]??e.id??a,i=M.includes(t);return(0,r.jsxs)("article",{className:"studio-record-card",children:[(0,r.jsxs)("div",{className:"studio-record-head",children:[(0,r.jsx)("label",{children:(0,r.jsx)("input",{type:"checkbox",checked:i,onChange:e=>{e.target.checked?q(e=>[...e,t]):q(e=>e.filter(e=>e!==t))}})}),(0,r.jsxs)("div",{className:"studio-record-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>J(e),children:"Edit"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>Y(e),children:"Delete"})]})]}),(0,r.jsx)("pre",{children:iV(e)})]},t)})}):(0,r.jsx)("section",{className:"studio-table-card",children:(0,r.jsx)("div",{className:"studio-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Select"}),(0,r.jsx)("th",{children:"Record"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:V.map((e,a)=>{let t=e?.[j?.primaryKey||"id"]??e.id??a,i=M.includes(t);return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("input",{type:"checkbox",checked:i,onChange:e=>{e.target.checked?q(e=>[...e,t]):q(e=>e.filter(e=>e!==t))}})}),(0,r.jsx)("td",{children:(0,r.jsx)("pre",{children:iV(e)})}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"studio-table-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>J(e),children:"Edit"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>Y(e),children:"Delete"})]})})]},t)})})]})})}),(0,r.jsxs)("section",{className:"studio-pagination",children:[(0,r.jsx)("button",{type:"button",disabled:P<=1,onClick:()=>R(e=>e-1),children:"Previous"}),(0,r.jsxs)("span",{children:["Page ",P," of ",W]}),(0,r.jsx)("button",{type:"button",disabled:P>=W,onClick:()=>R(e=>e+1),children:"Next"})]})]})]}),F&&(0,r.jsx)("div",{className:"studio-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"studio-modal",children:[(0,r.jsxs)("div",{className:"studio-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:L?"Edit Record":"New Record"}),(0,r.jsx)("p",{children:"Modify JSON directly and save to the selected table."})]}),(0,r.jsx)("button",{type:"button",onClick:()=>U(!1),children:"✕"})]}),(0,r.jsx)("textarea",{value:E,onChange:e=>$(e.target.value)}),(0,r.jsxs)("div",{className:"studio-modal-actions",children:[(0,r.jsx)("button",{type:"button",onClick:Q,children:"Save Record"}),(0,r.jsx)("button",{type:"button",onClick:()=>U(!1),children:"Cancel"})]})]})})]}):(0,r.jsxs)("main",{className:"studio-page",style:{"--studio-primary":h},children:[(0,r.jsx)("style",{children:iX}),(0,r.jsx)("section",{className:"studio-loading",children:(0,r.jsx)("h2",{children:"Developer authentication required."})})]})}function iY({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`studio-chip ${a}`,children:e})}let iX=`
@keyframes studioSpin {
  to {
    transform: rotate(360deg);
  }
}

.studio-page {
  min-height: 100dvh;
  padding: 10px;
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--studio-primary) 10%, transparent), transparent 32rem),
    #f8fafc;
  color: #0f172a;
  overflow-x: hidden;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

.studio-page *,
.studio-page *::before,
.studio-page *::after {
  box-sizing: border-box;
}

.studio-loading {
  min-height: 60dvh;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 12px;
}

.studio-spinner {
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 4px solid rgba(148,163,184,.2);
  border-top-color: var(--studio-primary);
  animation: studioSpin .7s linear infinite;
}

.studio-hero {
  display: grid;
  gap: 14px;
  border-radius: 30px;
  padding: 20px;
  color: #fff;
  background:
    radial-gradient(circle at top left, rgba(255,255,255,.15), transparent 20rem),
    linear-gradient(135deg, var(--studio-primary), #0f172a 70%);
  box-shadow: 0 24px 70px rgba(15,23,42,.18);
}

.studio-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  letter-spacing: .14em;
  opacity: .8;
}

.studio-hero h1 {
  margin: 10px 0 0;
  font-size: clamp(30px, 8vw, 48px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.08em;
}

.studio-hero p {
  margin: 10px 0 0;
  max-width: 800px;
  font-size: 13px;
  line-height: 1.6;
  opacity: .92;
}

.studio-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.studio-white-btn,
.studio-glass-btn {
  min-height: 42px;
  border-radius: 999px;
  padding: 0 14px;
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.studio-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.studio-glass-btn {
  border: 1px solid rgba(255,255,255,.25);
  background: rgba(255,255,255,.12);
  color: #fff;
}

.studio-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 18px;
  font-size: 13px;
  font-weight: 900;
}

.studio-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.studio-alert.success {
  background: #dcfce7;
  color: #166534;
}

.studio-grid {
  display: grid;
  gap: 10px;
  margin-top: 10px;
}

.studio-sidebar,
.studio-main {
  min-width: 0;
}

.studio-sidebar {
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(148,163,184,.2);
  box-shadow: 0 18px 45px rgba(15,23,42,.05);
  overflow: hidden;
}

.studio-side-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid rgba(148,163,184,.14);
}

.studio-side-head h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 1000;
}

.studio-side-head span {
  display: inline-flex;
  min-height: 28px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #eff6ff;
  color: var(--studio-primary);
  font-size: 11px;
  font-weight: 1000;
}

.studio-table-list {
  display: grid;
}

.studio-table-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 0;
  border-bottom: 1px solid rgba(148,163,184,.12);
  background: transparent;
  padding: 14px 16px;
  text-align: left;
  cursor: pointer;
}

.studio-table-item.active {
  background: color-mix(in srgb, var(--studio-primary) 8%, white);
}

.studio-table-item strong {
  display: block;
  font-size: 13px;
  font-weight: 1000;
}

.studio-table-item small {
  display: block;
  margin-top: 3px;
  color: #64748b;
  font-size: 11px;
  font-weight: 800;
}

.studio-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
}

.studio-chip.green {
  background: #dcfce7;
  color: #166534;
}

.studio-chip.blue {
  background: #dbeafe;
  color: #1d4ed8;
}

.studio-chip.purple {
  background: #f3e8ff;
  color: #7e22ce;
}

.studio-chip.orange {
  background: #ffedd5;
  color: #c2410c;
}

.studio-chip.red {
  background: #fee2e2;
  color: #b91c1c;
}

.studio-chip.gray {
  background: #f1f5f9;
  color: #475569;
}

.studio-main {
  display: grid;
  gap: 10px;
}

.studio-toolbar,
.studio-chart-card,
.studio-schema-card,
.studio-table-card {
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(148,163,184,.2);
  box-shadow: 0 18px 45px rgba(15,23,42,.05);
}

.studio-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px;
}

.studio-toolbar input {
  flex: 1 1 240px;
  min-height: 42px;
  border-radius: 16px;
  border: 1px solid rgba(148,163,184,.28);
  padding: 0 12px;
  font-size: 13px;
  font-weight: 800;
}

.studio-toolbar button,
.studio-import {
  min-height: 42px;
  border-radius: 16px;
  border: 0;
  padding: 0 14px;
  background: color-mix(in srgb, var(--studio-primary) 10%, white);
  color: var(--studio-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}

.studio-toolbar .danger {
  background: #fee2e2;
  color: #b91c1c;
}

.studio-import input {
  display: none;
}

.studio-switch {
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: #f1f5f9;
}

.studio-switch button {
  background: transparent;
}

.studio-switch button.active {
  background: #fff;
  box-shadow: 0 8px 20px rgba(15,23,42,.08);
}

.studio-chart-card,
.studio-schema-card {
  padding: 16px;
}

.studio-chart-card h2,
.studio-schema-card h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 1000;
}

.studio-schema-card p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 13px;
  font-weight: 800;
}

.studio-indexes {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

.studio-indexes span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148,163,184,.18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.studio-card-grid {
  display: grid;
  gap: 10px;
}

.studio-record-card {
  border-radius: 26px;
  background: #fff;
  border: 1px solid rgba(148,163,184,.2);
  box-shadow: 0 18px 45px rgba(15,23,42,.05);
  overflow: hidden;
}

.studio-record-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px;
  border-bottom: 1px solid rgba(148,163,184,.14);
}

.studio-record-actions,
.studio-table-actions,
.studio-modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.studio-record-actions button,
.studio-table-actions button,
.studio-modal-actions button {
  min-height: 34px;
  border-radius: 999px;
  border: 0;
  padding: 0 12px;
  background: color-mix(in srgb, var(--studio-primary) 10%, white);
  color: var(--studio-primary);
  font-size: 11px;
  font-weight: 1000;
  cursor: pointer;
}

.studio-record-actions .danger,
.studio-table-actions .danger {
  background: #fee2e2;
  color: #b91c1c;
}

.studio-record-card pre,
.studio-table-wrap pre {
  margin: 0;
  padding: 12px;
  overflow: auto;
  font-size: 11px;
  line-height: 1.5;
  white-space: pre-wrap;
  background: #0f172a;
  color: #e5e7eb;
}

.studio-table-card {
  overflow: hidden;
}

.studio-table-wrap {
  overflow-x: auto;
}

.studio-table-wrap table {
  width: 100%;
  min-width: 880px;
  border-collapse: collapse;
}

.studio-table-wrap th {
  text-align: left;
  padding: 12px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: #64748b;
  border-bottom: 1px solid rgba(148,163,184,.14);
}

.studio-table-wrap td {
  padding: 12px;
  vertical-align: top;
  border-bottom: 1px solid rgba(148,163,184,.12);
}

.studio-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
}

.studio-pagination button {
  min-height: 40px;
  border-radius: 999px;
  border: 0;
  padding: 0 14px;
  background: var(--studio-primary);
  color: #fff;
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.studio-pagination button:disabled {
  opacity: .45;
  cursor: not-allowed;
}

.studio-pagination span {
  font-size: 12px;
  font-weight: 900;
  color: #475569;
}

.studio-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: center;
  padding: 12px;
  background: rgba(15,23,42,.6);
  backdrop-filter: blur(12px);
}

.studio-modal {
  width: min(980px, 100%);
  max-height: 92dvh;
  overflow: auto;
  border-radius: 30px;
  background: #fff;
  padding: 18px;
  box-shadow: 0 30px 100px rgba(15,23,42,.35);
}

.studio-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.studio-modal-head h2 {
  margin: 0;
  font-size: 22px;
  font-weight: 1000;
}

.studio-modal-head p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 12px;
}

.studio-modal-head button {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 0;
  background: #f1f5f9;
  cursor: pointer;
}

.studio-modal textarea {
  width: 100%;
  min-height: 420px;
  margin-top: 16px;
  border-radius: 24px;
  border: 1px solid rgba(148,163,184,.22);
  padding: 14px;
  resize: vertical;
  font-size: 12px;
  line-height: 1.6;
  font-family:
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    monospace;
}

.studio-modal-actions {
  margin-top: 14px;
}

@media (min-width: 920px) {
  .studio-grid {
    grid-template-columns: 320px 1fr;
    align-items: start;
  }

  .studio-card-grid {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }
}

@media (min-width: 1280px) {
  .studio-card-grid {
    grid-template-columns: repeat(3, minmax(0,1fr));
  }
}
`,iZ="eleeveon_developer_database_designs",i0=["string","number","boolean","date","timestamp","json","array","email","phone","currency","enum"],i1={tableName:"",displayName:"",description:"",status:"draft",primaryKey:"++id",autoIncrement:!0,syncEnabled:!0,softDelete:!0,timestamps:!0,accountScoped:!0,schoolScoped:!1,branchScoped:!1,fields:[{id:"field-name",name:"name",type:"string",required:!0,indexed:!0,unique:!1,defaultValue:"",enumValues:"",description:"Human readable name."}]},i2=["var(--designer-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],i4=(e,a=[])=>{if(Array.isArray(e))return e;if(!e||"object"!=typeof e)return[];for(let t of a)if(Array.isArray(e[t]))return e[t];return Array.isArray(e.data)?e.data:Array.isArray(e.items)?e.items:Array.isArray(e.results)?e.results:Array.isArray(e.records)?e.records:Array.isArray(e.rows)?e.rows:[]},i8=e=>{if(!e)return 0;let a="number"==typeof e?e:new Date(e).getTime();return Number.isFinite(a)?a:0},i5=e=>{let a=i8(e);return a?new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(a)):"Not set"},i3=e=>e.trim().replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,""),i6=e=>e.replace(/_/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,e=>e.toUpperCase()),i9=e=>e.trim().replace(/[^a-zA-Z0-9_]+/g,"_").replace(/^_+|_+$/g,""),i7=(e,a)=>{let t=new Map;return e.forEach(e=>{let r=String(a(e)||"Unknown").trim()||"Unknown";t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)},se=e=>"applied"===e?"green":"ready"===e?"blue":"draft"===e?"orange":"gray",sa=()=>{try{let e=window.localStorage.getItem(iZ);if(!e)return[];return i4(JSON.parse(e),["designs","tables"])}catch{return[]}},st=e=>{try{window.localStorage.setItem(iZ,JSON.stringify(e))}catch{}},sr=(e,a)=>{let t=new Blob([JSON.stringify(a,null,2)],{type:"application/json"}),r=URL.createObjectURL(t),i=document.createElement("a");i.href=r,i.download=e,i.click(),URL.revokeObjectURL(r)},si=async e=>{if("u"<typeof navigator||!navigator.clipboard)return!1;try{return await navigator.clipboard.writeText(e),!0}catch{return!1}},ss=e=>{let a=Date.now();return{id:e.id||`table-design-${a}`,tableName:i3(e.tableName),displayName:e.displayName.trim()||i6(e.tableName),description:e.description.trim(),status:e.status,primaryKey:e.primaryKey.trim()||"++id",autoIncrement:e.autoIncrement,syncEnabled:e.syncEnabled,softDelete:e.softDelete,timestamps:e.timestamps,accountScoped:e.accountScoped,schoolScoped:e.schoolScoped,branchScoped:e.branchScoped,fields:e.fields.map(e=>({...e,name:i9(e.name)})),createdAt:a,updatedAt:a}},sn=e=>{let a=[];return e.accountScoped&&a.push("accountId"),e.schoolScoped&&a.push("schoolId"),e.branchScoped&&a.push("branchId"),e.timestamps&&a.push("createdAt","updatedAt"),e.syncEnabled&&a.push("cloudId","version","synced","deviceId"),e.softDelete&&a.push("isDeleted"),a},sd=e=>{let a=e.primaryKey||"++id",t=e.fields.filter(e=>e.indexed||e.unique).map(e=>`${e.unique?"&":""}${e.name}`),r=Array.from(new Set([a,...sn(e).filter(e=>["accountId","schoolId","branchId","cloudId","updatedAt","synced","isDeleted"].includes(e)),...t])).filter(Boolean);return`${e.tableName}: "${r.join(", ")}"`},sl=e=>{let a=sd(e);return`/**
 * Add this table to app/lib/db.ts inside a NEW db.version(n).stores({ ... }) block.
 * Do not edit an already-shipped Dexie version in production.
 */

db.version(NEXT_VERSION_NUMBER).stores({
  ${a},
});

/**
 * Suggested TypeScript type
 */
export type ${i6(e.tableName).replace(/\s/g,"")} = {
  id?: number;
${sn(e).map(e=>`  ${e}?: ${e.endsWith("Id")||"cloudId"===e||"deviceId"===e?"string | number":"isDeleted"===e?"boolean":"number | string"};`).join("\n")}
${e.fields.map(e=>{let a=e.required?"":"?",t="number"===e.type||"currency"===e.type?"number":"boolean"===e.type?"boolean":"json"===e.type?"Record<string, any>":"array"===e.type?"any[]":"timestamp"===e.type?"number":"string";return`  ${e.name}${a}: ${t};`}).join("\n")}
};`};function so({navigate:e}){let{accountId:a,authenticated:t,loading:s}=(0,g.F)(),{settings:n}=(0,x.t)(),d=n?.primaryColor||"#2563eb",[l,o]=(0,i.useState)(!0),[c,p]=(0,i.useState)("cards"),[u,h]=(0,i.useState)([]),[b,f]=(0,i.useState)(""),[v,y]=(0,i.useState)("all"),[j,w]=(0,i.useState)(!1),[k,N]=(0,i.useState)(null),[S,C]=(0,i.useState)(i1),[A,z]=(0,i.useState)(""),[D,T]=(0,i.useState)(""),P=async()=>{try{o(!0),z("");let e=await (0,m.uE)("/developer/database-designs").catch(()=>null),a=i4(e,["designs","tables","databaseDesigns"]);a.length?(h(a),st(a)):h(sa())}catch(e){z(e?.message||"Could not load database designs. Showing local saved designs."),h(sa())}finally{o(!1)}};(0,i.useEffect)(()=>{if(!s){if(!t||!a)return void o(!1);P()}},[s,t,a]);let R=(0,i.useMemo)(()=>{let e=b.trim().toLowerCase();return u.filter(a=>{let t=`${a.tableName} ${a.displayName} ${a.description} ${a.fields.map(e=>e.name).join(" ")}`.toLowerCase(),r=!e||t.includes(e),i="all"===v||a.status===v;return r&&i}).sort((e,a)=>i8(a.updatedAt)-i8(e.updatedAt))},[u,b,v]),M=u.filter(e=>"ready"===e.status).length,q=u.filter(e=>"applied"===e.status).length,L=u.filter(e=>e.syncEnabled).length,I=u.reduce((e,a)=>e+a.fields.length,0),E=(0,i.useMemo)(()=>i7(u,e=>e.status),[u]),$=(0,i.useMemo)(()=>[{label:"Account Scoped",value:u.filter(e=>e.accountScoped).length},{label:"School Scoped",value:u.filter(e=>e.schoolScoped).length},{label:"Branch Scoped",value:u.filter(e=>e.branchScoped).length},{label:"Sync Enabled",value:u.filter(e=>e.syncEnabled).length}],[u]),F=(0,i.useMemo)(()=>i7(u.flatMap(e=>e.fields),e=>e.type),[u]),U=(0,i.useMemo)(()=>u.map(e=>({label:e.tableName.length>16?`${e.tableName.slice(0,16)}…`:e.tableName,value:e.fields.length})),[u]),O=e=>{z(""),T(""),C({id:e.id,tableName:e.tableName,displayName:e.displayName,description:e.description,status:e.status,primaryKey:e.primaryKey,autoIncrement:e.autoIncrement,syncEnabled:e.syncEnabled,softDelete:e.softDelete,timestamps:e.timestamps,accountScoped:e.accountScoped,schoolScoped:e.schoolScoped,branchScoped:e.branchScoped,fields:e.fields}),w(!0)},_=async e=>{let a,t,r;e.preventDefault();let i=(a=[],i3(S.tableName)||a.push("Table name is required."),S.primaryKey.trim()||a.push("Primary key is required."),(r=(t=S.fields.map(e=>i9(e.name)).filter(Boolean)).filter((e,a)=>t.indexOf(e)!==a)).length&&a.push(`Duplicate field name(s): ${Array.from(new Set(r)).join(", ")}`),S.fields.forEach((e,t)=>{i9(e.name)||a.push(`Field ${t+1} needs a valid name.`),"enum"!==e.type||e.enumValues?.trim()||a.push(`Enum field "${e.name||t+1}" needs values.`)}),a);if(i.length)return void z(i.join(" "));try{z(""),T("");let e=ss(S);S.id?(await (0,m.uE)(`/developer/database-designs/${S.id}`,{method:"PATCH",body:JSON.stringify(e)}).catch(()=>null),h(a=>{let t=a.map(a=>a.id===S.id?{...e,id:S.id,createdAt:a.createdAt,updatedAt:Date.now()}:a);return st(t),t}),T("Table design updated.")):(await (0,m.uE)("/developer/database-designs",{method:"POST",body:JSON.stringify(e)}).catch(()=>null),h(a=>{let t=[e,...a];return st(t),t}),T("Table design saved.")),w(!1)}catch(e){z(e?.message||"Could not save table design.")}},K=async(e,a)=>{let t={...e,status:a,updatedAt:Date.now()};await (0,m.uE)(`/developer/database-designs/${e.id}`,{method:"PATCH",body:JSON.stringify({status:a})}).catch(()=>null),h(a=>{let r=a.map(a=>a.id===e.id?t:a);return st(r),r}),T(`Design marked as ${a}.`)},B=e=>{window.confirm(`Delete the table design "${e.displayName||e.tableName}"?`)&&(h(a=>{let t=a.filter(a=>a.id!==e.id);return st(t),t}),T("Table design deleted locally."))},H=e=>{sr(`${e.tableName}-table-design.json`,e),T("Table design exported.")},G=async e=>{T(await si(sl(e))?"Generated Dexie code copied.":"Could not copy code in this browser.")};return l||s?(0,r.jsxs)("main",{className:"designer-page",style:{"--designer-primary":d},children:[(0,r.jsx)("style",{children:sj}),(0,r.jsxs)("section",{className:"designer-state",children:[(0,r.jsx)("div",{className:"designer-spinner"}),(0,r.jsx)("h2",{children:"Loading Database Designer..."}),(0,r.jsx)("p",{children:"Preparing table blueprints, fields and schema generation."})]})]}):t&&a?(0,r.jsxs)("main",{className:"designer-page",style:{"--designer-primary":d},children:[(0,r.jsx)("style",{children:sj}),(0,r.jsxs)("section",{className:"designer-hero",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"designer-eyebrow",children:"Schema designer"}),(0,r.jsx)("h1",{children:"Database Designer"}),(0,r.jsx)("p",{children:"Create safe table blueprints, define fields and indexes, then generate Dexie migration code. This avoids dangerous runtime schema changes while still giving you a professional low-code database design workflow."})]}),(0,r.jsxs)("div",{className:"designer-hero-actions",children:[(0,r.jsxs)("div",{className:"designer-switch",children:[(0,r.jsx)("button",{type:"button",className:"cards"===c?"active":"",onClick:()=>p("cards"),children:"Cards"}),(0,r.jsx)("button",{type:"button",className:"table"===c?"active":"",onClick:()=>p("table"),children:"Table"}),(0,r.jsx)("button",{type:"button",className:"analytics"===c?"active":"",onClick:()=>p("analytics"),children:"Charts"})]}),(0,r.jsx)("button",{type:"button",className:"designer-white-btn",onClick:()=>{z(""),T(""),C({...i1,fields:i1.fields.map(e=>({...e,id:`field-${Date.now()}`}))}),w(!0)},children:"New Table Design"}),(0,r.jsx)("button",{type:"button",className:"designer-glass-btn",onClick:()=>{sr("eleeveon-database-designs.json",{exportedAt:new Date().toISOString(),designs:u}),T("All database designs exported.")},children:"Export All"})]})]}),(A||D)&&(0,r.jsx)("section",{className:`designer-alert ${A?"error":"success"}`,children:A||D}),(0,r.jsxs)("section",{className:"designer-stat-grid",children:[(0,r.jsx)(sx,{label:"Designs",value:u.length,detail:`${R.length} shown`,icon:"\uD83E\uDDF1"}),(0,r.jsx)(sx,{label:"Ready",value:M,detail:`${q} applied`,icon:"✅"}),(0,r.jsx)(sx,{label:"Syncable",value:L,detail:"Offline-first tables",icon:"\uD83D\uDD04"}),(0,r.jsx)(sx,{label:"Fields",value:I,detail:"Designed data fields",icon:"\uD83E\uDDE9"})]}),(0,r.jsxs)("section",{className:"designer-tool-links",children:[(0,r.jsxs)("button",{type:"button",onClick:()=>e?.("databaseTools"),children:["\uD83D\uDDC4️ Database Tools",(0,r.jsx)("span",{children:"Inspect existing local and server tables."})]}),(0,r.jsxs)("button",{type:"button",onClick:()=>e?.("databaseStudio"),children:["\uD83E\uDDFE Database Studio",(0,r.jsx)("span",{children:"Manage records in existing tables."})]}),(0,r.jsxs)("button",{type:"button",onClick:()=>e?.("sqlConsole"),children:["\uD83E\uDDEA SQL Console",(0,r.jsx)("span",{children:"Protected server-side SQL actions."})]})]}),(0,r.jsxs)("section",{className:"designer-toolbar",children:[(0,r.jsx)("input",{value:b,onChange:e=>f(e.target.value),placeholder:"Search table name, display name, fields..."}),(0,r.jsxs)("select",{value:v,onChange:e=>y(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All statuses"}),(0,r.jsx)("option",{value:"draft",children:"Draft"}),(0,r.jsx)("option",{value:"ready",children:"Ready"}),(0,r.jsx)("option",{value:"applied",children:"Applied"}),(0,r.jsx)("option",{value:"archived",children:"Archived"})]}),(0,r.jsx)("button",{type:"button",onClick:()=>{f(""),y("all")},children:"Reset"})]}),"analytics"===c?(0,r.jsx)(su,{statusChart:E,scopeChart:$,fieldTypeChart:F,tableSizeChart:U}):"table"===c?(0,r.jsx)(sp,{designs:R,onEdit:O,onPreview:N,onCopy:G,onExport:H,onDelete:B,onStatus:K}):(0,r.jsx)(sc,{designs:R,onEdit:O,onPreview:N,onCopy:G,onExport:H,onDelete:B,onStatus:K}),j&&(0,r.jsx)(sm,{form:S,updateForm:(e,a)=>{C(t=>({...t,[e]:a,..."tableName"===e&&!t.displayName?{displayName:i6(String(a))}:{}}))},updateField:(e,a,t)=>{C(r=>({...r,fields:r.fields.map(r=>r.id===e?{...r,[a]:"name"===a?i9(String(t)):t}:r)}))},addField:()=>{C(e=>({...e,fields:[...e.fields,{id:`field-${Date.now()}-${Math.random().toString(36).slice(2)}`,name:"",type:"string",required:!1,indexed:!1,unique:!1,defaultValue:"",enumValues:"",description:""}]}))},removeField:e=>{C(a=>({...a,fields:a.fields.filter(a=>a.id!==e)}))},onClose:()=>w(!1),onSubmit:_}),k&&(0,r.jsx)(sg,{design:k,onClose:()=>N(null),onCopy:G,onExport:H})]}):(0,r.jsxs)("main",{className:"designer-page",style:{"--designer-primary":d},children:[(0,r.jsx)("style",{children:sj}),(0,r.jsxs)("section",{className:"designer-state",children:[(0,r.jsx)("h2",{children:"Developer access required"}),(0,r.jsx)("p",{children:"Sign in with a developer account to design database tables."})]})]})}function sc({designs:e,onEdit:a,onPreview:t,onCopy:i,onExport:s,onDelete:n,onStatus:d}){return(0,r.jsxs)("section",{className:"designer-card-grid",children:[e.map(e=>(0,r.jsxs)("article",{className:"designer-card",children:[(0,r.jsxs)("div",{className:"designer-card-top",children:[(0,r.jsx)("span",{className:"designer-avatar",children:"\uD83E\uDDF1"}),(0,r.jsxs)("div",{className:"designer-chip-row",children:[(0,r.jsx)(sh,{tone:se(e.status),children:e.status}),e.syncEnabled&&(0,r.jsx)(sh,{tone:"blue",children:"sync"})]})]}),(0,r.jsx)("h2",{children:e.displayName||e.tableName}),(0,r.jsx)("p",{children:e.description||"No description added."}),(0,r.jsx)("code",{className:"designer-code",children:sd(e)}),(0,r.jsxs)("div",{className:"designer-mini-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Table"}),e.tableName]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Primary Key"}),e.primaryKey]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Fields"}),e.fields.length]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"System Fields"}),sn(e).length]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Indexes"}),e.fields.filter(e=>e.indexed||e.unique).length]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Updated"}),i5(e.updatedAt)]})]}),(0,r.jsxs)("div",{className:"designer-field-pills",children:[e.fields.slice(0,6).map(e=>(0,r.jsxs)("span",{children:[e.name,": ",e.type]},e.id)),e.fields.length>6&&(0,r.jsxs)("span",{children:["+",e.fields.length-6," fields"]})]}),(0,r.jsxs)("div",{className:"designer-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Edit"}),(0,r.jsx)("button",{type:"button",onClick:()=>t(e),children:"Preview"}),(0,r.jsx)("button",{type:"button",onClick:()=>i(e),children:"Copy Code"}),(0,r.jsx)("button",{type:"button",onClick:()=>s(e),children:"Export"}),"ready"!==e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>d(e,"ready"),children:"Mark Ready"}),"applied"!==e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>d(e,"applied"),children:"Mark Applied"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>n(e),children:"Delete"})]})]},e.id)),!e.length&&(0,r.jsx)(sb,{text:"No table designs match your filters."})]})}function sp({designs:e,onEdit:a,onPreview:t,onCopy:i,onExport:s,onDelete:n,onStatus:d}){return(0,r.jsxs)("section",{className:"designer-table-card",children:[(0,r.jsx)("div",{className:"designer-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Table"}),(0,r.jsx)("th",{children:"Status"}),(0,r.jsx)("th",{children:"Primary Key"}),(0,r.jsx)("th",{children:"Fields"}),(0,r.jsx)("th",{children:"Scopes"}),(0,r.jsx)("th",{children:"Sync"}),(0,r.jsx)("th",{children:"Schema"}),(0,r.jsx)("th",{children:"Updated"}),(0,r.jsx)("th",{children:"Actions"})]})}),(0,r.jsx)("tbody",{children:e.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("strong",{children:e.displayName}),(0,r.jsx)("small",{children:e.tableName})]}),(0,r.jsx)("td",{children:(0,r.jsx)(sh,{tone:se(e.status),children:e.status})}),(0,r.jsx)("td",{children:e.primaryKey}),(0,r.jsx)("td",{children:e.fields.length}),(0,r.jsx)("td",{children:[e.accountScoped?"account":"",e.schoolScoped?"school":"",e.branchScoped?"branch":""].filter(Boolean).join(", ")||"global"}),(0,r.jsx)("td",{children:e.syncEnabled?"Yes":"No"}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:sd(e)})}),(0,r.jsx)("td",{children:i5(e.updatedAt)}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{className:"designer-table-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>a(e),children:"Edit"}),(0,r.jsx)("button",{type:"button",onClick:()=>t(e),children:"Preview"}),(0,r.jsx)("button",{type:"button",onClick:()=>i(e),children:"Copy"}),(0,r.jsx)("button",{type:"button",onClick:()=>s(e),children:"Export"}),"ready"!==e.status&&(0,r.jsx)("button",{type:"button",onClick:()=>d(e,"ready"),children:"Ready"}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>n(e),children:"Delete"})]})})]},e.id))})]})}),!e.length&&(0,r.jsx)(sb,{text:"No table designs match your filters."})]})}function su({statusChart:e,scopeChart:a,fieldTypeChart:t,tableSizeChart:i}){return(0,r.jsxs)("section",{className:"designer-chart-grid",children:[(0,r.jsxs)(sf,{title:"Design Status",description:"Draft, ready, applied and archived table designs.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:e,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:e.map((e,a)=>(0,r.jsx)(q.f,{fill:i2[a%i2.length]},a))})]})}),(0,r.jsx)(sv,{rows:e})]}),(0,r.jsx)(sf,{title:"Scopes & Sync",description:"How new tables are designed for tenancy and offline sync.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:a,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",width:120,tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--designer-primary)",radius:[0,12,12,0]})]})})}),(0,r.jsxs)(sf,{title:"Field Types",description:"Field type distribution across all designs.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:t,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:t.map((e,a)=>(0,r.jsx)(q.f,{fill:i2[a%i2.length]},a))})]})}),(0,r.jsx)(sv,{rows:t})]}),(0,r.jsx)(sf,{title:"Fields Per Table",description:"Table complexity by number of custom fields.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:i,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",width:120,tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--designer-primary)",radius:[0,12,12,0]})]})})})]})}function sm({form:e,updateForm:a,updateField:t,addField:i,removeField:s,onClose:n,onSubmit:d}){let l=ss({...e,tableName:e.tableName||"new_table"});return(0,r.jsx)("div",{className:"designer-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("form",{className:"designer-modal",onSubmit:d,children:[(0,r.jsxs)("div",{className:"designer-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:e.id?"Edit Table Design":"Create Table Design"}),(0,r.jsx)("p",{children:"Define the table blueprint and generate safe Dexie migration code."})]}),(0,r.jsx)("button",{type:"button",onClick:n,"aria-label":"Close",children:"✕"})]}),(0,r.jsxs)("section",{className:"designer-form-grid",children:[(0,r.jsxs)("label",{children:["Table name",(0,r.jsx)("input",{value:e.tableName,onChange:e=>a("tableName",i3(e.target.value)),placeholder:"student_notes",required:!0})]}),(0,r.jsxs)("label",{children:["Display name",(0,r.jsx)("input",{value:e.displayName,onChange:e=>a("displayName",e.target.value),placeholder:"Student Notes"})]}),(0,r.jsxs)("label",{children:["Primary key",(0,r.jsx)("input",{value:e.primaryKey,onChange:e=>a("primaryKey",e.target.value),placeholder:"++id",required:!0})]}),(0,r.jsxs)("label",{children:["Status",(0,r.jsxs)("select",{value:e.status,onChange:e=>a("status",e.target.value),children:[(0,r.jsx)("option",{value:"draft",children:"Draft"}),(0,r.jsx)("option",{value:"ready",children:"Ready"}),(0,r.jsx)("option",{value:"applied",children:"Applied"}),(0,r.jsx)("option",{value:"archived",children:"Archived"})]})]}),(0,r.jsxs)("label",{className:"wide",children:["Description",(0,r.jsx)("textarea",{value:e.description,onChange:e=>a("description",e.target.value),rows:3,placeholder:"What will this table store?"})]})]}),(0,r.jsxs)("section",{className:"designer-option-grid",children:[(0,r.jsx)(sy,{label:"Auto Increment",checked:e.autoIncrement,onChange:e=>a("autoIncrement",e)}),(0,r.jsx)(sy,{label:"Sync Enabled",checked:e.syncEnabled,onChange:e=>a("syncEnabled",e)}),(0,r.jsx)(sy,{label:"Soft Delete",checked:e.softDelete,onChange:e=>a("softDelete",e)}),(0,r.jsx)(sy,{label:"Timestamps",checked:e.timestamps,onChange:e=>a("timestamps",e)}),(0,r.jsx)(sy,{label:"Account Scoped",checked:e.accountScoped,onChange:e=>a("accountScoped",e)}),(0,r.jsx)(sy,{label:"School Scoped",checked:e.schoolScoped,onChange:e=>a("schoolScoped",e)}),(0,r.jsx)(sy,{label:"Branch Scoped",checked:e.branchScoped,onChange:e=>a("branchScoped",e)})]}),(0,r.jsxs)("section",{className:"designer-fields-section",children:[(0,r.jsxs)("div",{className:"designer-section-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Fields"}),(0,r.jsxs)("p",{children:[e.fields.length," custom field(s). System fields are generated automatically."]})]}),(0,r.jsx)("button",{type:"button",onClick:i,children:"Add Field"})]}),(0,r.jsx)("div",{className:"designer-field-list",children:e.fields.map((e,a)=>{var i;return(0,r.jsxs)("article",{className:"designer-field-card",children:[(0,r.jsxs)("div",{className:"designer-field-head",children:[(0,r.jsxs)("span",{children:["Field ",a+1]}),(0,r.jsx)(sh,{tone:["email","phone","string","enum"].includes(i=e.type)?"blue":["number","currency"].includes(i)?"green":["date","timestamp"].includes(i)?"purple":["json","array"].includes(i)?"orange":"gray",children:e.type})]}),(0,r.jsxs)("div",{className:"designer-field-grid",children:[(0,r.jsxs)("label",{children:["Name",(0,r.jsx)("input",{value:e.name,onChange:a=>t(e.id,"name",a.target.value),placeholder:"studentId",required:!0})]}),(0,r.jsxs)("label",{children:["Type",(0,r.jsx)("select",{value:e.type,onChange:a=>t(e.id,"type",a.target.value),children:i0.map(e=>(0,r.jsx)("option",{value:e,children:e},e))})]}),(0,r.jsxs)("label",{children:["Default value",(0,r.jsx)("input",{value:e.defaultValue||"",onChange:a=>t(e.id,"defaultValue",a.target.value),placeholder:"optional"})]}),"enum"===e.type&&(0,r.jsxs)("label",{children:["Enum values",(0,r.jsx)("input",{value:e.enumValues||"",onChange:a=>t(e.id,"enumValues",a.target.value),placeholder:"draft,active,archived"})]}),(0,r.jsxs)("label",{className:"wide",children:["Description",(0,r.jsx)("input",{value:e.description||"",onChange:a=>t(e.id,"description",a.target.value),placeholder:"What does this field store?"})]})]}),(0,r.jsxs)("div",{className:"designer-field-options",children:[(0,r.jsx)(sy,{label:"Required",checked:e.required,onChange:a=>t(e.id,"required",a)}),(0,r.jsx)(sy,{label:"Indexed",checked:e.indexed,onChange:a=>t(e.id,"indexed",a)}),(0,r.jsx)(sy,{label:"Unique",checked:e.unique,onChange:a=>t(e.id,"unique",a)}),(0,r.jsx)("button",{type:"button",className:"danger",onClick:()=>s(e.id),children:"Remove"})]})]},e.id)})})]}),(0,r.jsxs)("section",{className:"designer-preview-card",children:[(0,r.jsx)("h3",{children:"Generated Dexie Schema"}),(0,r.jsx)("code",{children:sd(l)}),(0,r.jsx)("p",{children:"This is preview code. Apply it through a proper db.ts version upgrade."})]}),(0,r.jsxs)("div",{className:"designer-modal-actions",children:[(0,r.jsx)("button",{type:"submit",children:"Save Design"}),(0,r.jsx)("button",{type:"button",onClick:n,children:"Cancel"})]})]})})}function sg({design:e,onClose:a,onCopy:t,onExport:i}){return(0,r.jsx)("div",{className:"designer-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"designer-modal",children:[(0,r.jsxs)("div",{className:"designer-modal-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:e.displayName}),(0,r.jsxs)("p",{children:[e.tableName," migration preview"]})]}),(0,r.jsx)("button",{type:"button",onClick:a,"aria-label":"Close",children:"✕"})]}),(0,r.jsxs)("section",{className:"designer-warning",children:[(0,r.jsx)("strong",{children:"Safe schema rule"}),(0,r.jsx)("p",{children:"Do not create production Dexie tables by directly mutating IndexedDB at runtime. Add this schema through a new Dexie version block in db.ts, then test migration carefully."})]}),(0,r.jsx)("pre",{className:"designer-code-block",children:sl(e)}),(0,r.jsxs)("div",{className:"designer-modal-actions",children:[(0,r.jsx)("button",{type:"button",onClick:()=>t(e),children:"Copy Code"}),(0,r.jsx)("button",{type:"button",onClick:()=>i(e),children:"Export JSON"}),(0,r.jsx)("button",{type:"button",onClick:a,children:"Close"})]})]})})}function sx({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"designer-stat",children:[(0,r.jsxs)("span",{children:[e,(0,r.jsx)("b",{children:i})]}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:t})]})}function sh({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`designer-chip ${a}`,children:e})}function sb({text:e}){return(0,r.jsx)("div",{className:"designer-empty",children:e})}function sf({title:e,description:a,children:t}){return(0,r.jsxs)("section",{className:"designer-chart-card",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function sv({rows:e}){return(0,r.jsx)("div",{className:"designer-legend",children:e.map((e,a)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{style:{background:i2[a%i2.length]}}),e.label,": ",e.value]},`${e.label}-${a}`))})}function sy({label:e,checked:a,onChange:t}){return(0,r.jsxs)("label",{className:"designer-toggle",children:[(0,r.jsx)("input",{type:"checkbox",checked:a,onChange:e=>t(e.target.checked)}),(0,r.jsx)("span",{children:e})]})}let sj=`
@keyframes designerSpin { to { transform: rotate(360deg); } }

.designer-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  padding: 8px;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--designer-primary) 10%, transparent), transparent 34rem),
    #f8fafc;
  color: #0f172a;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}

.designer-page *,
.designer-page *::before,
.designer-page *::after {
  box-sizing: border-box;
}

.designer-page button,
.designer-page input,
.designer-page select,
.designer-page textarea {
  font: inherit;
  max-width: 100%;
}

.designer-state {
  min-height: min(420px, calc(100dvh - 32px));
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .08);
  text-align: center;
}

.designer-state h2 {
  margin: 0;
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 1000;
  letter-spacing: -.04em;
}

.designer-state p {
  max-width: 34rem;
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.6;
}

.designer-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--designer-primary) 18%, transparent);
  border-top-color: var(--designer-primary);
  animation: designerSpin .8s linear infinite;
}

.designer-hero {
  display: grid;
  gap: 16px;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, .18), transparent 20rem),
    linear-gradient(135deg, var(--designer-primary), #0f172a 72%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .18);
  overflow: hidden;
}

.designer-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .14em;
  opacity: .82;
}

.designer-hero h1 {
  margin: 8px 0 0;
  font-size: clamp(28px, 8vw, 44px);
  line-height: 1.02;
  font-weight: 1000;
  letter-spacing: -.07em;
}

.designer-hero p {
  max-width: 850px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: .9;
}

.designer-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.designer-switch {
  display: inline-flex;
  gap: 5px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(14px);
}

.designer-switch button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.designer-switch button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .16);
}

.designer-white-btn,
.designer-glass-btn {
  min-height: 40px;
  border-radius: 999px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.designer-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.designer-glass-btn {
  border: 1px solid rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .14);
  color: #fff;
}

.designer-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 850;
}

.designer-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.designer-alert.success {
  background: #dcfce7;
  color: #166534;
}

.designer-stat-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.designer-stat {
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 24px;
  padding: 16px;
  background: #fff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.designer-stat span {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.designer-stat strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(24px, 8vw, 34px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
}

.designer-stat small {
  display: block;
  margin-top: 8px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.designer-tool-links {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 10px;
}

.designer-tool-links button {
  display: grid;
  gap: 3px;
  text-align: left;
  min-height: 62px;
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 22px;
  padding: 12px 14px;
  background: #fff;
  color: #0f172a;
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.designer-tool-links span {
  color: #64748b;
  font-size: 11px;
  font-weight: 800;
  line-height: 1.35;
}

.designer-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
}

.designer-toolbar input,
.designer-toolbar select {
  min-height: 42px;
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .3);
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
}

.designer-toolbar button {
  min-height: 42px;
  border: 0;
  border-radius: 16px;
  background: color-mix(in srgb, var(--designer-primary) 10%, white);
  color: var(--designer-primary);
  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.designer-card-grid,
.designer-chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.designer-card,
.designer-chart-card,
.designer-table-card {
  min-width: 0;
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 26px;
  padding: 14px;
  background: #fff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.designer-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.designer-avatar {
  width: 46px;
  height: 46px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--designer-primary), #0f172a);
  color: #fff;
  font-size: 18px;
  font-weight: 1000;
}

.designer-chip-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.designer-card h2 {
  margin: 14px 0 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.designer-card p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.45;
}

.designer-code {
  display: block;
  margin-top: 10px;
  padding: 10px;
  border-radius: 16px;
  background: #0f172a;
  color: #e5e7eb;
  font-size: 11px;
  line-height: 1.5;
  overflow-x: auto;
}

.designer-mini-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 14px;
}

.designer-mini-grid span {
  padding: 10px;
  border-radius: 16px;
  background: #f8fafc;
  color: #0f172a;
  font-size: 12px;
  font-weight: 850;
}

.designer-mini-grid b {
  display: block;
  color: #64748b;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 3px;
}

.designer-field-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.designer-field-pills span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 9px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.designer-actions,
.designer-table-actions,
.designer-modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.designer-actions {
  margin-top: 14px;
}

.designer-actions button,
.designer-table-actions button,
.designer-modal-actions button,
.designer-section-head button,
.designer-field-options button {
  min-height: 38px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: color-mix(in srgb, var(--designer-primary) 10%, white);
  color: var(--designer-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.designer-actions button:first-child,
.designer-modal-actions button:first-child {
  background: var(--designer-primary);
  color: #fff;
}

.designer-actions button.danger,
.designer-table-actions button.danger,
.designer-field-options button.danger {
  background: #fee2e2;
  color: #b91c1c;
}

.designer-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
  white-space: nowrap;
}

.designer-chip.green { background: #dcfce7; color: #166534; }
.designer-chip.blue { background: #dbeafe; color: #1d4ed8; }
.designer-chip.purple { background: #f3e8ff; color: #7e22ce; }
.designer-chip.orange { background: #ffedd5; color: #c2410c; }
.designer-chip.red { background: #fee2e2; color: #b91c1c; }
.designer-chip.gray { background: #f1f5f9; color: #475569; }

.designer-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.designer-table-wrap table {
  width: 100%;
  min-width: 1180px;
  border-collapse: collapse;
}

.designer-table-wrap th {
  text-align: left;
  color: #64748b;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.designer-table-wrap td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .16);
  font-size: 13px;
  vertical-align: top;
}

.designer-table-wrap strong {
  display: block;
  font-weight: 1000;
}

.designer-table-wrap small {
  display: block;
  margin-top: 3px;
  color: #64748b;
  font-size: 11px;
}

.designer-table-wrap code {
  display: block;
  max-width: 340px;
  overflow-x: auto;
  padding: 8px;
  border-radius: 12px;
  background: #0f172a;
  color: #e5e7eb;
  font-size: 11px;
}

.designer-chart-card h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.designer-chart-card p {
  margin: 5px 0 10px;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.designer-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

.designer-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 9px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.designer-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

.designer-empty {
  grid-column: 1 / -1;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
  color: #64748b;
  font-size: 13px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, .35);
}

.designer-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15, 23, 42, .58);
  backdrop-filter: blur(12px);
}

.designer-modal {
  width: min(1080px, 100%);
  max-height: min(92dvh, 920px);
  overflow-y: auto;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 30px 100px rgba(15, 23, 42, .35);
  border: 1px solid rgba(255, 255, 255, .24);
  padding: 14px;
}

.designer-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 4px 14px;
}

.designer-modal-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.designer-modal-head p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.designer-modal-head button {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: #f1f5f9;
  color: #0f172a;
  font-weight: 1000;
  cursor: pointer;
}

.designer-form-grid,
.designer-field-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.designer-form-grid label,
.designer-field-grid label {
  display: grid;
  gap: 6px;
  color: #334155;
  font-size: 12px;
  font-weight: 950;
}

.designer-form-grid input,
.designer-form-grid select,
.designer-form-grid textarea,
.designer-field-grid input,
.designer-field-grid select {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .32);
  border-radius: 16px;
  background: #fff;
  color: #0f172a;
  padding: 11px 12px;
  font-size: 13px;
  font-weight: 800;
}

.designer-form-grid input,
.designer-form-grid select,
.designer-field-grid input,
.designer-field-grid select {
  min-height: 42px;
}

.designer-form-grid textarea {
  resize: vertical;
}

.designer-option-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 12px;
  padding: 12px;
  border-radius: 22px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
}

.designer-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 36px;
  padding: 0 10px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .18);
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
}

.designer-toggle input {
  width: 16px;
  height: 16px;
  accent-color: var(--designer-primary);
}

.designer-fields-section {
  margin-top: 12px;
  padding: 12px;
  border-radius: 22px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
}

.designer-section-head,
.designer-field-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.designer-section-head h3,
.designer-preview-card h3 {
  margin: 0;
  font-size: 15px;
  font-weight: 1000;
}

.designer-section-head p,
.designer-preview-card p {
  margin: 4px 0 0;
  color: #64748b;
  font-size: 12px;
}

.designer-field-list {
  display: grid;
  gap: 10px;
  margin-top: 10px;
}

.designer-field-card {
  padding: 12px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .18);
}

.designer-field-head span {
  color: #64748b;
  font-size: 12px;
  font-weight: 1000;
}

.designer-field-grid {
  margin-top: 10px;
}

.designer-field-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.designer-preview-card,
.designer-warning {
  margin-top: 12px;
  padding: 12px;
  border-radius: 22px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
}

.designer-preview-card code {
  display: block;
  margin-top: 10px;
  padding: 10px;
  border-radius: 16px;
  background: #0f172a;
  color: #e5e7eb;
  font-size: 11px;
  overflow-x: auto;
}

.designer-warning {
  background: #fff7ed;
  border-color: rgba(249, 115, 22, .24);
}

.designer-warning strong {
  display: block;
  color: #9a3412;
  font-size: 13px;
  font-weight: 1000;
}

.designer-warning p {
  margin: 5px 0 0;
  color: #c2410c;
  font-size: 12px;
  line-height: 1.5;
}

.designer-code-block {
  margin: 12px 0 0;
  max-height: 520px;
  overflow: auto;
  padding: 14px;
  border-radius: 22px;
  background: #0f172a;
  color: #e5e7eb;
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
}

.designer-modal-actions {
  position: sticky;
  bottom: -14px;
  justify-content: flex-end;
  margin-top: 14px;
  padding: 12px 0 2px;
  background: linear-gradient(to top, #fff 70%, transparent);
}

@media (min-width: 520px) {
  .designer-stat-grid,
  .designer-tool-links,
  .designer-toolbar,
  .designer-option-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .designer-mini-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 760px) {
  .designer-card-grid,
  .designer-chart-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .designer-form-grid,
  .designer-field-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .designer-form-grid .wide,
  .designer-field-grid .wide {
    grid-column: 1 / -1;
  }

  .designer-modal-backdrop {
    place-items: center;
    padding: 18px;
  }

  .designer-modal {
    padding: 18px;
  }
}

@media (min-width: 920px) {
  .designer-page {
    padding: 14px;
  }

  .designer-hero {
    grid-template-columns: 1fr auto;
    align-items: end;
    padding: 24px;
  }

  .designer-stat-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .designer-tool-links {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .designer-toolbar {
    grid-template-columns: minmax(240px, 2fr) minmax(160px, 1fr) auto;
  }

  .designer-mini-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .designer-option-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 1180px) {
  .designer-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`,sw="eleeveon_developer_sql_history",sk="I UNDERSTAND",sN=`-- Real PostgreSQL database query
-- Run one statement at a time.
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name
LIMIT 50;
`,sS=[{id:"list-tables",title:"List Tables",description:"Shows all public database tables.",sql:"SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name LIMIT 100;"},{id:"table-columns",title:"Table Columns",description:"Shows columns, types and nullability for public tables.",sql:"SELECT table_name, column_name, data_type, is_nullable FROM information_schema.columns WHERE table_schema = 'public' ORDER BY table_name, ordinal_position LIMIT 300;"},{id:"accounts-safe",title:"Accounts",description:"Reads account records if the table exists.",sql:"SELECT * FROM accounts LIMIT 20;"},{id:"users-safe",title:"Users",description:"Reads user records if the table exists.",sql:"SELECT * FROM users LIMIT 20;"},{id:"schools-safe",title:"Schools",description:"Reads school records if the table exists.",sql:"SELECT * FROM schools LIMIT 20;"},{id:"branches-safe",title:"Branches",description:"Reads branch records if the table exists.",sql:"SELECT * FROM branches LIMIT 20;"},{id:"subscriptions-safe",title:"Subscriptions",description:"Reads subscription records if the table exists.",sql:"SELECT * FROM subscriptions LIMIT 20;"},{id:"payments-safe",title:"Payments",description:"Reads payment records if the table exists.",sql:"SELECT * FROM payments LIMIT 20;"}],sC=["var(--sql-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],sA=(e,a=[])=>{if(Array.isArray(e))return e;if(!e||"object"!=typeof e)return[];for(let t of a)if(Array.isArray(e[t]))return e[t];return Array.isArray(e.data)?e.data:Array.isArray(e.items)?e.items:Array.isArray(e.results)?e.results:Array.isArray(e.records)?e.records:Array.isArray(e.rows)?e.rows:[]},sz=e=>e.replace(/--.*$/gm,"").replace(/\/\*[\s\S]*?\*\//g,"").trim(),sD=e=>"safe"===e?"green":"write"===e?"orange":"destructive"===e||"schema"===e?"red":"gray",sT=e=>{let a=e?.response?.data?.message||e?.response?.message||e?.data?.message||e?.message||"SQL request failed.";return Array.isArray(a)?a.join(" "):"object"==typeof a?JSON.stringify(a):String(a)},sP=async e=>(0,m.uE)(e),sR=async(e,a)=>(0,m.uE)(e,{method:"POST",body:a}),sM=()=>{try{let e=window.localStorage.getItem(sw);if(!e)return[];return sA(JSON.parse(e),["history","queries"])}catch{return[]}},sq=e=>{try{window.localStorage.setItem(sw,JSON.stringify(e.slice(0,100)))}catch{}},sL=(e,a)=>{let t=new Map;return e.forEach(e=>{let r=String(a(e)||"Unknown").trim()||"Unknown";t.set(r,(t.get(r)||0)+1)}),Array.from(t.entries()).map(([e,a])=>({label:e,value:a})).sort((e,a)=>a.value-e.value)};function sI({navigate:e}){let{accountId:a,authenticated:t,loading:s}=(0,g.F)(),{settings:n}=(0,x.t)(),d=n?.primaryColor||"#2563eb",[l,o]=(0,i.useState)("results"),[c,p]=(0,i.useState)("table"),[u,m]=(0,i.useState)(sN),[h,b]=(0,i.useState)(!0),[f,v]=(0,i.useState)(""),[y,j]=(0,i.useState)(null),[w,k]=(0,i.useState)([]),[N,S]=(0,i.useState)(null),[C,A]=(0,i.useState)(""),[z,D]=(0,i.useState)("all"),[T,P]=(0,i.useState)(!1),[R,M]=(0,i.useState)(!0),[q,L]=(0,i.useState)(""),[I,E]=(0,i.useState)(""),$=async()=>{try{let e=await sP("/developer/sql/status");S(e)}catch(e){S({ok:!1,error:sT(e)})}},F=async()=>{try{M(!0),await $();let e=await sP("/developer/sql/history").catch(()=>null),a=sA(e,["history","queries","items"]);a.length?(k(a),sq(a)):k(sM())}catch{k(sM())}finally{M(!1)}};(0,i.useEffect)(()=>{if(!s){if(!t||!a)return void M(!1);F()}},[s,t,a]);let U=(0,i.useMemo)(()=>{let e;return(e=sz(u).toUpperCase())?/^\s*(SELECT|WITH|SHOW|EXPLAIN|DESCRIBE)\b/.test(e)?"safe":/\b(DROP|TRUNCATE|ALTER|CREATE|REINDEX|VACUUM)\b/.test(e)?"schema":/\b(DELETE|UPDATE)\b/.test(e)?"destructive":/\b(INSERT|UPSERT|MERGE|REPLACE)\b/.test(e)?"write":"unknown":"unknown"},[u]),O=(0,i.useMemo)(()=>{let e;return e=sz(u),e.split(/\s+/)[0]?.toUpperCase()||""},[u]),_="safe"!==U,K=!!sz(u)&&(!h||"safe"===U)&&(!_||f.trim()===sk),B=(0,i.useMemo)(()=>{let e=C.trim().toLowerCase();return w.filter(a=>{let t=!e||`${a.sql} ${a.error||""} ${a.auditId||""}`.toLowerCase().includes(e),r="all"===z||a.risk===z;return t&&r}).sort((e,a)=>a.createdAt-e.createdAt)},[w,C,z]),H=w.filter(e=>e.ok).length,G=w.filter(e=>!e.ok).length,W=w.filter(e=>"safe"!==e.risk).length,V=w.length?Math.round(w.reduce((e,a)=>e+Number(a.executionMs||0),0)/w.length):0,J=(0,i.useMemo)(()=>sL(w,e=>e.risk),[w]),Q=(0,i.useMemo)(()=>sL(w,e=>e.mode),[w]),Y=(0,i.useMemo)(()=>[{label:"Success",value:H},{label:"Failed",value:G}],[H,G]),X=(0,i.useMemo)(()=>w.slice(0,10).map((e,a)=>({label:`Q${w.length-a}`,value:Number(e.executionMs||0)})).reverse(),[w]),Z=e=>{k(a=>{let t=[e,...a].slice(0,100);return sq(t),t})},ee=async()=>{if(!K)return h&&"safe"!==U?void L("Read-only mode is enabled. Disable it before running write/schema queries."):_?void L(`Type "${sk}" to confirm this risky query.`):void L("SQL query is empty.");let e=performance.now();try{var a;let t,r;P(!0),L(""),E("");let i=(a=await sR("/developer/sql/execute",{sql:sz(u),rawSql:u,readOnly:h,risk:U,confirmText:_?f:void 0,source:"developer_portal"}),t=(e=>{if("string"!=typeof e)return e;let a=e.trim();if(!a)return{};try{let e=JSON.parse(a);if("string"==typeof e)try{return JSON.parse(e)}catch{return{message:e}}return e}catch{return{message:a}}})(a),r=sA(t,["rows","data","records","results"]),{columns:Array.isArray(t?.columns)?t.columns.map(String):r.length?Array.from(new Set(r.flatMap(e=>Object.keys(e||{})))):[],rows:r,rowCount:Number(t?.rowCount??t?.count??r.length),executionMs:Number(t?.executionMs??t?.durationMs??0),auditId:t?.auditId||t?.auditLogId||null}),s=i.executionMs||Math.round(performance.now()-e),n={...i,executionMs:s};j(n);let d={id:`query-${Date.now()}`,sql:u,risk:U,mode:h?"read_only":"write_enabled",ok:!0,rowCount:n.rowCount,executionMs:s,auditId:n.auditId,error:null,createdAt:Date.now()};Z(d),await sR("/developer/sql/history",d).catch(()=>null),E(`Query completed. ${n.rowCount} row(s) returned/affected.`),o("results"),v(""),await $()}catch(r){let a=Math.round(performance.now()-e),t=sT(r);Z({id:`query-${Date.now()}`,sql:u,risk:U,mode:h?"read_only":"write_enabled",ok:!1,rowCount:0,executionMs:a,auditId:null,error:t,createdAt:Date.now()}),L(t),await $()}finally{P(!1)}};return R||s?(0,r.jsxs)("main",{className:"sql-page",style:{"--sql-primary":d},children:[(0,r.jsx)("style",{children:sH}),(0,r.jsxs)("section",{className:"sql-state",children:[(0,r.jsx)("div",{className:"sql-spinner"}),(0,r.jsx)("h2",{children:"Loading SQL Console..."}),(0,r.jsx)("p",{children:"Connecting to backend SQL service and loading query history."})]})]}):t&&a?(0,r.jsxs)("main",{className:"sql-page",style:{"--sql-primary":d},children:[(0,r.jsx)("style",{children:sH}),(0,r.jsxs)("section",{className:"sql-hero",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"sql-eyebrow",children:"Real PostgreSQL Database"}),(0,r.jsx)("h1",{children:"SQL Console"}),(0,r.jsx)("p",{children:"This console queries your actual PostgreSQL database through the NestJS backend using Prisma and the backend DATABASE_URL. The database URL is never placed in browser code."})]}),(0,r.jsxs)("div",{className:"sql-hero-actions",children:[(0,r.jsxs)("div",{className:"sql-switch",children:[(0,r.jsx)("button",{type:"button",className:"results"===l?"active":"",onClick:()=>o("results"),children:"Results"}),(0,r.jsx)("button",{type:"button",className:"history"===l?"active":"",onClick:()=>o("history"),children:"History"}),(0,r.jsx)("button",{type:"button",className:"analytics"===l?"active":"",onClick:()=>o("analytics"),children:"Charts"})]}),(0,r.jsx)("button",{type:"button",className:"sql-white-btn",onClick:()=>F(),children:"Refresh"}),(0,r.jsx)("button",{type:"button",className:"sql-glass-btn",onClick:()=>e?.("databaseTools"),children:"Database Tools"}),(0,r.jsx)("button",{type:"button",className:"sql-glass-btn",onClick:()=>e?.("databaseStudio"),children:"Database Studio"})]})]}),(q||I)&&(0,r.jsx)("section",{className:`sql-alert ${q?"error":"success"}`,children:q||I}),(0,r.jsxs)("section",{className:`sql-backend-card ${N?.ok?"ok":"bad"}`,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:N?.ok?"Backend SQL service connected":"Backend SQL service not ready"}),(0,r.jsx)("p",{children:N?.ok?`${N.service||"Developer SQL Service"} \xb7 ${N.provider||"PostgreSQL"} \xb7 writes ${N.writesEnabled?"enabled":"blocked"}`:N?.error||"Add the backend developer-sql module and restart NestJS."})]}),(0,r.jsx)(sO,{tone:N?.ok?"green":"red",children:N?.ok?"connected":"not connected"})]}),(0,r.jsxs)("section",{className:"sql-stat-grid",children:[(0,r.jsx)(sU,{label:"Queries",value:w.length,detail:`${H} successful`,icon:"\uD83E\uDDEA"}),(0,r.jsx)(sU,{label:"Failures",value:G,detail:"Backend/query errors",icon:"⚠️"}),(0,r.jsx)(sU,{label:"Write/Schema",value:W,detail:"Risky query history",icon:"\uD83D\uDD10"}),(0,r.jsx)(sU,{label:"Avg Time",value:`${V}ms`,detail:"Local/backend history",icon:"⏱️"})]}),(0,r.jsxs)("section",{className:"sql-console-grid",children:[(0,r.jsxs)("section",{className:"sql-editor-card",children:[(0,r.jsxs)("div",{className:"sql-editor-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Query Editor"}),(0,r.jsxs)("p",{children:["Current command: ",O||"None"]})]}),(0,r.jsx)(sO,{tone:sD(U),children:U})]}),(0,r.jsx)("textarea",{value:u,onChange:e=>{m(e.target.value),v("")},spellCheck:!1}),(0,r.jsxs)("div",{className:"sql-editor-controls",children:[(0,r.jsxs)("label",{className:"sql-toggle",children:[(0,r.jsx)("input",{type:"checkbox",checked:h,onChange:e=>{b(e.target.checked),v("")}}),(0,r.jsx)("span",{children:"Read-only mode"})]}),!h&&(0,r.jsx)(sO,{tone:"orange",children:"write mode requested"}),_&&(0,r.jsxs)("label",{className:"sql-confirm",children:["Confirmation",(0,r.jsx)("input",{value:f,onChange:e=>v(e.target.value),placeholder:sk})]})]}),(0,r.jsxs)("div",{className:"sql-actions",children:[(0,r.jsx)("button",{type:"button",onClick:ee,disabled:T||!K||N?.ok===!1,children:T?"Running...":"Run Query"}),(0,r.jsx)("button",{type:"button",onClick:()=>{m(""),v(""),j(null)},children:"Clear"}),y&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{type:"button",onClick:()=>{if(y){let e,a,t;e=new Blob([JSON.stringify(y,null,2)],{type:"application/json"}),a=URL.createObjectURL(e),(t=document.createElement("a")).href=a,t.download="sql-result.json",t.click(),URL.revokeObjectURL(a)}},children:"Export JSON"}),(0,r.jsx)("button",{type:"button",onClick:()=>{if(y){var e,a;let t,r,i,s;e=y.rows,a=y.columns,t=e=>{let a=null==e?"":String(e);return`"${a.replace(/"/g,'""')}"`},r=new Blob([[a.map(t).join(","),...e.map(e=>a.map(a=>t(e[a])).join(","))].join("\n")],{type:"text/csv;charset=utf-8"}),i=URL.createObjectURL(r),(s=document.createElement("a")).href=i,s.download="sql-result.csv",s.click(),URL.revokeObjectURL(i)}},children:"Export CSV"})]})]}),(0,r.jsxs)("details",{className:"sql-payload-preview",children:[(0,r.jsx)("summary",{children:"Backend request preview"}),(0,r.jsx)("pre",{children:JSON.stringify({url:"/developer/sql/execute",sql:sz(u),readOnly:h,risk:U,confirmText:_?f:void 0,source:"developer_portal"},null,2)})]}),"safe"!==U&&(0,r.jsxs)("section",{className:"sql-warning",children:[(0,r.jsx)("strong",{children:"Risk warning"}),(0,r.jsx)("p",{children:"The backend blocks write/schema SQL by default. To enable it, set DEVELOPER_SQL_ALLOW_WRITES=true in the backend .env and type the confirmation text."})]})]}),(0,r.jsxs)("section",{className:"sql-snippets-card",children:[(0,r.jsx)("h2",{children:"Real DB Snippets"}),(0,r.jsx)("p",{children:"These are safe queries to inspect your actual PostgreSQL schema and records."}),(0,r.jsx)("div",{className:"sql-snippet-list",children:sS.map(e=>(0,r.jsxs)("button",{type:"button",onClick:()=>{m(e.sql),v(""),o("results")},children:[(0,r.jsx)("strong",{children:e.title}),(0,r.jsx)("span",{children:e.description})]},e.id))})]})]}),"results"===l?(0,r.jsx)(sE,{result:y,resultMode:c,setResultMode:p}):"history"===l?(0,r.jsx)(s$,{history:B,search:C,setSearch:A,riskFilter:z,setRiskFilter:D,onUse:e=>{m(e.sql),v(""),o("results")},onClear:()=>{window.confirm("Clear local SQL query history on this device?")&&(k([]),sq([]),E("Local query history cleared."))}}):(0,r.jsx)(sF,{riskChart:J,modeChart:Q,successChart:Y,durationChart:X})]}):(0,r.jsxs)("main",{className:"sql-page",style:{"--sql-primary":d},children:[(0,r.jsx)("style",{children:sH}),(0,r.jsxs)("section",{className:"sql-state",children:[(0,r.jsx)("h2",{children:"Developer access required"}),(0,r.jsx)("p",{children:"Sign in with a developer account to use the SQL console."})]})]})}function sE({result:e,resultMode:a,setResultMode:t}){return e?(0,r.jsxs)("section",{className:"sql-results-card",children:[(0,r.jsxs)("div",{className:"sql-results-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Query Results"}),(0,r.jsxs)("p",{children:[e.rowCount," row(s) \xb7 ",e.executionMs,"ms",e.auditId?` \xb7 Audit: ${e.auditId}`:""]})]}),(0,r.jsxs)("div",{className:"sql-mode-switch",children:[(0,r.jsx)("button",{type:"button",className:"table"===a?"active":"",onClick:()=>t("table"),children:"Table"}),(0,r.jsx)("button",{type:"button",className:"cards"===a?"active":"",onClick:()=>t("cards"),children:"Cards"})]})]}),"table"===a?(0,r.jsx)("div",{className:"sql-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:e.columns.map(e=>(0,r.jsx)("th",{children:e},e))})}),(0,r.jsx)("tbody",{children:e.rows.map((a,t)=>(0,r.jsx)("tr",{children:e.columns.map(e=>{var t;return(0,r.jsx)("td",{children:null==(t=a[e])?"—":"bigint"==typeof t?t.toString():t instanceof Date?t.toISOString():"object"==typeof t?JSON.stringify(t):String(t)},e)})},t))})]})}):(0,r.jsx)("section",{className:"sql-result-card-grid",children:e.rows.map((e,a)=>(0,r.jsxs)("article",{className:"sql-result-card",children:[(0,r.jsxs)("h3",{children:["Row ",a+1]}),(0,r.jsx)("pre",{children:JSON.stringify(e,null,2)})]},a))}),!e.rows.length&&(0,r.jsx)(s_,{text:"Query returned no rows."})]}):(0,r.jsxs)("section",{className:"sql-empty-card",children:[(0,r.jsx)("h2",{children:"No query result yet"}),(0,r.jsx)("p",{children:"Run a query to see rows, columns, execution time and audit ID here."})]})}function s$({history:e,search:a,setSearch:t,riskFilter:i,setRiskFilter:s,onUse:n,onClear:d}){return(0,r.jsxs)("section",{className:"sql-history-card",children:[(0,r.jsxs)("div",{className:"sql-history-toolbar",children:[(0,r.jsx)("input",{value:a,onChange:e=>t(e.target.value),placeholder:"Search SQL history..."}),(0,r.jsxs)("select",{value:i,onChange:e=>s(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All risks"}),(0,r.jsx)("option",{value:"safe",children:"Safe"}),(0,r.jsx)("option",{value:"write",children:"Write"}),(0,r.jsx)("option",{value:"destructive",children:"Destructive"}),(0,r.jsx)("option",{value:"schema",children:"Schema"}),(0,r.jsx)("option",{value:"unknown",children:"Unknown"})]}),(0,r.jsx)("button",{type:"button",onClick:d,children:"Clear Local History"})]}),(0,r.jsxs)("div",{className:"sql-history-list",children:[e.map(e=>{let a;return(0,r.jsxs)("article",{className:`sql-history-item ${e.ok?"ok":"failed"}`,children:[(0,r.jsxs)("div",{className:"sql-history-top",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(sO,{tone:sD(e.risk),children:e.risk}),(0,r.jsx)(sO,{tone:e.ok?"green":"red",children:e.ok?"success":"failed"})]}),(0,r.jsx)("span",{children:(a=(e=>{if(!e)return 0;let a="number"==typeof e?e:new Date(e).getTime();return Number.isFinite(a)?a:0})(e.createdAt))?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(a)):"Not set"})]}),(0,r.jsx)("pre",{children:e.sql}),(0,r.jsxs)("div",{className:"sql-history-meta",children:[(0,r.jsx)("span",{children:e.mode}),(0,r.jsxs)("span",{children:[e.rowCount," row(s)"]}),(0,r.jsxs)("span",{children:[e.executionMs,"ms"]}),e.auditId&&(0,r.jsxs)("span",{children:["Audit: ",e.auditId]})]}),e.error&&(0,r.jsx)("p",{children:e.error}),(0,r.jsx)("button",{type:"button",onClick:()=>n(e),children:"Use Query"})]},e.id)}),!e.length&&(0,r.jsx)(s_,{text:"No query history matches your filters."})]})]})}function sF({riskChart:e,modeChart:a,successChart:t,durationChart:i}){return(0,r.jsxs)("section",{className:"sql-chart-grid",children:[(0,r.jsxs)(sK,{title:"Risk Distribution",description:"Safe, write, destructive and schema queries.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:e,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:e.map((e,a)=>(0,r.jsx)(q.f,{fill:sC[a%sC.length]},a))})]})}),(0,r.jsx)(sB,{rows:e})]}),(0,r.jsxs)(sK,{title:"Execution Status",description:"Successful versus failed queries.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:t,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:t.map((e,a)=>(0,r.jsx)(q.f,{fill:sC[a%sC.length]},a))})]})}),(0,r.jsx)(sB,{rows:t})]}),(0,r.jsxs)(sK,{title:"Mode Usage",description:"Read-only versus write-enabled query runs.",children:[(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:a,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:a.map((e,a)=>(0,r.jsx)(q.f,{fill:sC[a%sC.length]},a))})]})}),(0,r.jsx)(sB,{rows:a})]}),(0,r.jsx)(sK,{title:"Recent Durations",description:"Execution time of recent queries.",children:(0,r.jsx)(n.u,{width:"100%",height:280,children:(0,r.jsxs)(d.E,{data:i,children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",vertical:!1}),(0,r.jsx)(o.W,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--sql-primary)",radius:[12,12,0,0]})]})})})]})}function sU({label:e,value:a,detail:t,icon:i}){return(0,r.jsxs)("article",{className:"sql-stat",children:[(0,r.jsxs)("span",{children:[e,(0,r.jsx)("b",{children:i})]}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:t})]})}function sO({children:e,tone:a="gray"}){return(0,r.jsx)("span",{className:`sql-chip ${a}`,children:e})}function s_({text:e}){return(0,r.jsx)("div",{className:"sql-empty",children:e})}function sK({title:e,description:a,children:t}){return(0,r.jsxs)("section",{className:"sql-chart-card",children:[(0,r.jsx)("h2",{children:e}),(0,r.jsx)("p",{children:a}),(0,r.jsx)("div",{children:t})]})}function sB({rows:e}){return(0,r.jsx)("div",{className:"sql-legend",children:e.map((e,a)=>(0,r.jsxs)("span",{children:[(0,r.jsx)("i",{style:{background:sC[a%sC.length]}}),e.label,": ",e.value]},`${e.label}-${a}`))})}let sH=`
@keyframes sqlSpin { to { transform: rotate(360deg); } }

.sql-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  padding: 8px;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--sql-primary) 10%, transparent), transparent 34rem),
    #f8fafc;
  color: #0f172a;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}

.sql-page *,
.sql-page *::before,
.sql-page *::after {
  box-sizing: border-box;
}

.sql-page button,
.sql-page input,
.sql-page select,
.sql-page textarea {
  font: inherit;
  max-width: 100%;
}

.sql-state {
  min-height: min(420px, calc(100dvh - 32px));
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .08);
  text-align: center;
}

.sql-state h2 {
  margin: 0;
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 1000;
  letter-spacing: -.04em;
}

.sql-state p {
  max-width: 34rem;
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.6;
}

.sql-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--sql-primary) 18%, transparent);
  border-top-color: var(--sql-primary);
  animation: sqlSpin .8s linear infinite;
}

.sql-hero {
  display: grid;
  gap: 16px;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, .18), transparent 20rem),
    linear-gradient(135deg, var(--sql-primary), #0f172a 72%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .18);
  overflow: hidden;
}

.sql-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .14em;
  opacity: .82;
}

.sql-hero h1 {
  margin: 8px 0 0;
  font-size: clamp(28px, 8vw, 44px);
  line-height: 1.02;
  font-weight: 1000;
  letter-spacing: -.07em;
}

.sql-hero p {
  max-width: 850px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: .9;
}

.sql-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.sql-switch,
.sql-mode-switch {
  display: inline-flex;
  gap: 5px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(14px);
}

.sql-mode-switch {
  background: #f1f5f9;
  border-color: rgba(148, 163, 184, .18);
}

.sql-switch button,
.sql-mode-switch button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.sql-mode-switch button {
  color: #475569;
}

.sql-switch button.active,
.sql-mode-switch button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .16);
}

.sql-white-btn,
.sql-glass-btn {
  min-height: 40px;
  border-radius: 999px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.sql-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.sql-glass-btn {
  border: 1px solid rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .14);
  color: #fff;
}

.sql-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 850;
}

.sql-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.sql-alert.success {
  background: #dcfce7;
  color: #166534;
}

.sql-backend-card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-top: 10px;
  padding: 14px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
}

.sql-backend-card.ok {
  border-color: rgba(22, 163, 74, .24);
}

.sql-backend-card.bad {
  border-color: rgba(220, 38, 38, .24);
}

.sql-backend-card h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 1000;
  letter-spacing: -.03em;
}

.sql-backend-card p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.sql-stat-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.sql-stat {
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 24px;
  padding: 16px;
  background: #fff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.sql-stat span {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.sql-stat strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(24px, 8vw, 34px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
}

.sql-stat small {
  display: block;
  margin-top: 8px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.sql-console-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.sql-editor-card,
.sql-snippets-card,
.sql-results-card,
.sql-history-card,
.sql-chart-card,
.sql-empty-card {
  min-width: 0;
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 26px;
  padding: 14px;
  background: #fff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.sql-editor-head,
.sql-results-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.sql-editor-head h2,
.sql-snippets-card h2,
.sql-results-head h2,
.sql-chart-card h2,
.sql-empty-card h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.sql-editor-head p,
.sql-snippets-card p,
.sql-results-head p,
.sql-chart-card p,
.sql-empty-card p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.sql-editor-card textarea {
  width: 100%;
  min-height: 320px;
  border: 1px solid rgba(148, 163, 184, .24);
  border-radius: 22px;
  padding: 14px;
  background: #0f172a;
  color: #e5e7eb;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  line-height: 1.6;
  resize: vertical;
}

.sql-editor-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-top: 10px;
}

.sql-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 36px;
  padding: 0 10px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
}

.sql-toggle input {
  width: 16px;
  height: 16px;
  accent-color: var(--sql-primary);
}

.sql-confirm {
  display: inline-grid;
  gap: 4px;
  color: #991b1b;
  font-size: 11px;
  font-weight: 1000;
}

.sql-confirm input {
  min-height: 36px;
  border-radius: 999px;
  border: 1px solid rgba(220, 38, 38, .28);
  padding: 0 12px;
  color: #991b1b;
  font-size: 12px;
  font-weight: 900;
}

.sql-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.sql-actions button,
.sql-history-toolbar button,
.sql-history-item button {
  min-height: 38px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: color-mix(in srgb, var(--sql-primary) 10%, white);
  color: var(--sql-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.sql-actions button:first-child {
  background: var(--sql-primary);
  color: #fff;
}

.sql-actions button:disabled {
  opacity: .45;
  cursor: not-allowed;
}

.sql-payload-preview {
  margin-top: 12px;
  border-radius: 18px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  overflow: hidden;
}

.sql-payload-preview summary {
  cursor: pointer;
  padding: 10px 12px;
  color: #334155;
  font-size: 12px;
  font-weight: 1000;
}

.sql-payload-preview pre {
  margin: 0;
  padding: 0 12px 12px;
  overflow-x: auto;
  white-space: pre-wrap;
  color: #475569;
  font-size: 11px;
  line-height: 1.5;
}

.sql-warning {
  margin-top: 12px;
  padding: 12px;
  border-radius: 20px;
  background: #fff7ed;
  border: 1px solid rgba(249, 115, 22, .24);
}

.sql-warning strong {
  display: block;
  color: #9a3412;
  font-size: 13px;
  font-weight: 1000;
}

.sql-warning p {
  margin: 5px 0 0;
  color: #c2410c;
  font-size: 12px;
  line-height: 1.5;
}

.sql-snippet-list {
  display: grid;
  gap: 8px;
  margin-top: 12px;
}

.sql-snippet-list button {
  display: grid;
  gap: 4px;
  text-align: left;
  border: 1px solid rgba(148, 163, 184, .18);
  border-radius: 18px;
  padding: 12px;
  background: #f8fafc;
  cursor: pointer;
}

.sql-snippet-list strong {
  color: #0f172a;
  font-size: 13px;
  font-weight: 1000;
}

.sql-snippet-list span {
  color: #64748b;
  font-size: 11px;
  line-height: 1.4;
  font-weight: 800;
}

.sql-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
  white-space: nowrap;
}

.sql-chip.green { background: #dcfce7; color: #166534; }
.sql-chip.blue { background: #dbeafe; color: #1d4ed8; }
.sql-chip.purple { background: #f3e8ff; color: #7e22ce; }
.sql-chip.orange { background: #ffedd5; color: #c2410c; }
.sql-chip.red { background: #fee2e2; color: #b91c1c; }
.sql-chip.gray { background: #f1f5f9; color: #475569; }

.sql-results-card,
.sql-history-card,
.sql-empty-card,
.sql-chart-grid {
  margin-top: 10px;
}

.sql-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.sql-table-wrap table {
  width: 100%;
  min-width: 900px;
  border-collapse: collapse;
}

.sql-table-wrap th {
  text-align: left;
  color: #64748b;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.sql-table-wrap td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .16);
  font-size: 13px;
  vertical-align: top;
  max-width: 320px;
  overflow-wrap: anywhere;
}

.sql-result-card-grid,
.sql-chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.sql-result-card {
  border-radius: 20px;
  background: #0f172a;
  color: #e5e7eb;
  overflow: hidden;
}

.sql-result-card h3 {
  margin: 0;
  padding: 10px 12px;
  font-size: 13px;
  font-weight: 1000;
  border-bottom: 1px solid rgba(255,255,255,.1);
}

.sql-result-card pre,
.sql-history-item pre {
  margin: 0;
  padding: 12px;
  overflow-x: auto;
  white-space: pre-wrap;
  font-size: 11px;
  line-height: 1.5;
}

.sql-history-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.sql-history-toolbar input,
.sql-history-toolbar select {
  min-height: 42px;
  border: 1px solid rgba(148, 163, 184, .3);
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
}

.sql-history-list {
  display: grid;
  gap: 10px;
  margin-top: 10px;
}

.sql-history-item {
  border: 1px solid rgba(148, 163, 184, .18);
  border-radius: 22px;
  padding: 12px;
  background: #fff;
}

.sql-history-item.failed {
  border-color: rgba(220, 38, 38, .22);
  background: #fff7f7;
}

.sql-history-top {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.sql-history-top > div {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.sql-history-top > span {
  color: #64748b;
  font-size: 11px;
  font-weight: 900;
}

.sql-history-item pre {
  margin-top: 10px;
  border-radius: 16px;
  background: #0f172a;
  color: #e5e7eb;
}

.sql-history-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}

.sql-history-meta span {
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 8px;
  border-radius: 999px;
  background: #f8fafc;
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.sql-history-item p {
  margin: 10px 0 0;
  color: #b91c1c;
  font-size: 12px;
  font-weight: 850;
}

.sql-history-item button {
  margin-top: 10px;
}

.sql-chart-card h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.sql-chart-card p {
  margin: 5px 0 10px;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.sql-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

.sql-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 9px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.sql-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

.sql-empty {
  grid-column: 1 / -1;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
  color: #64748b;
  font-size: 13px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, .35);
}

@media (min-width: 520px) {
  .sql-stat-grid,
  .sql-history-toolbar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sql-result-card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 760px) {
  .sql-chart-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 920px) {
  .sql-page {
    padding: 14px;
  }

  .sql-hero {
    grid-template-columns: 1fr auto;
    align-items: end;
    padding: 24px;
  }

  .sql-stat-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .sql-console-grid {
    grid-template-columns: 1.5fr .7fr;
    align-items: start;
  }

  .sql-history-toolbar {
    grid-template-columns: minmax(240px, 1fr) 180px auto;
  }
}
`;function sG({label:e,value:a,onChange:t,tabs:i}){return(0,r.jsxs)("div",{className:"ba-workspace-wrapper ba-finance-workspace ed-dev-subtabs",children:[(0,r.jsx)("style",{children:sW}),(0,r.jsx)("div",{className:"ba-contextual-actions ba-finance-subtabs","aria-label":e,children:(0,r.jsx)("div",{className:"ba-finance-subtab-list",role:"group","aria-label":e,children:i.map(e=>(0,r.jsx)("button",{type:"button","aria-pressed":e.key===a,className:e.key===a?"is-active":"",onClick:()=>{if(e.key===a)return;t(e.key);let r=document.querySelector(".role-shell.workspace-locked-scroll .app-content");r&&(r.scrollTop=0)},children:e.label},e.key))})})]})}let sW=`
.ed-dev-subtabs { width:100%;max-width:none;min-width:0;margin:0;padding:0; }
.ed-dev-subtabs .ba-finance-subtabs {
 display:flex;align-items:center;width:100%;min-width:0;margin:0 0 8px;
 padding:4px 0 5px;position:sticky;top:0;z-index:22;
 background:var(--eds-shell-bg,var(--bg,var(--surface,#fff)));
 border-bottom:1px solid var(--border,rgba(15,23,42,.10));
 backdrop-filter:blur(12px);
}
.ed-dev-subtabs .ba-finance-subtab-list {
 display:flex;align-items:center;gap:4px;min-width:0;width:100%;
 overflow-x:auto;white-space:nowrap;scrollbar-width:thin;
}
.ed-dev-subtabs .ba-finance-subtab-list button {
 flex:0 0 auto;min-height:31px;border:1px solid transparent;
 border-radius:7px;padding:4px 11px;background:transparent;
 color:var(--text,#172033);font:inherit;font-size:11px;font-weight:700;
 cursor:pointer;
}
.ed-dev-subtabs .ba-finance-subtab-list button.is-active {
 background:color-mix(in srgb,var(--primary-color,#2563eb) 10%,var(--surface,#fff));
 border-color:color-mix(in srgb,var(--primary-color,#2563eb) 25%,var(--border,#d4dae3));
}
.ed-dev-subtabs button:focus-visible {
 outline:2px solid var(--primary-color,#2563eb);outline-offset:2px;
}
@media print {.ed-dev-subtabs .ba-finance-subtabs {display:none!important;}}
`,sV=[{title:"Workspaces",defaultOpen:!0,items:[{key:"saasWorkspace",label:"SaaS Control",icon:"\uD83D\uDCE6"},{key:"developerTeam",label:"Platform Team",icon:"\uD83D\uDC65"},{key:"billingWorkspace",label:"Billing",icon:"\uD83D\uDCB3"},{key:"healthWorkspace",label:"Diagnostics",icon:"\uD83E\uDE7A"},{key:"developerToolsWorkspace",label:"Developer Tools",icon:"\uD83D\uDEE0️"},{key:"settings",label:"Settings",icon:"⚙️"}]}],sJ={saasWorkspace:function(e){let[a,t]=i.useState("plans");return(0,r.jsxs)("div",{className:"eds-platform-workspace",children:[(0,r.jsx)(sG,{value:a,onChange:t,label:"SaaS control",tabs:[{key:"plans",label:"Plans & Packages"},{key:"subscriptions",label:"Active Subscriptions"},{key:"accounts",label:"Customer Accounts"},{key:"featureFlags",label:"Feature Flags"}]}),(0,r.jsx)("subscriptions"===a?O:"accounts"===a?ea:"featureFlags"===a?tm:T,{...e})]})},developerTeam:function({navigate:e}){let{accountId:a,authenticated:t,loading:s}=(0,g.F)(),{settings:n}=(0,x.t)(),d=n?.primaryColor||"var(--primary-color, #2563eb)",[l,o]=(0,i.useState)("cards"),[c,p]=(0,i.useState)([]),[u,m]=(0,i.useState)(!0),[h,b]=(0,i.useState)(!1),[f,v]=(0,i.useState)(!1),[y,j]=(0,i.useState)(""),[w,k]=(0,i.useState)(""),[N,S]=(0,i.useState)(""),[C,A]=(0,i.useState)("all"),[z,D]=(0,i.useState)("all"),[T,P]=(0,i.useState)("all"),[R,M]=(0,i.useState)(!1),[q,L]=(0,i.useState)({...ap}),I=async(e=!1)=>{try{var t;let r,i,s,n;e?b(!0):m(!0),j(""),k("");let{users:d,memberships:l}=(t=await a_(),r=[t?.users,t?.appUsers,t?.accountUsers,t?.platformTeam,t?.members,t?.team,t?.data?.users,t?.data?.appUsers,t?.data?.accountUsers,t?.data?.platformTeam,t?.data?.members,t?.data,t?.items,t?.rows,t?.results,t].flatMap(aP).filter(Boolean),i=[t?.memberships,t?.userMemberships,t?.data?.memberships,t?.data?.userMemberships].flatMap(aP).filter(Boolean),s=r.flatMap(e=>[e?.memberships,e?.userMemberships,e?.membership?[e.membership]:[],e?.userMembership?[e.userMembership]:[]].flatMap(aP).map(a=>({...a,userId:a?.userId||ak(e),fullName:a?.fullName||e?.fullName||e?.name,email:a?.email||e?.email,accountId:a?.accountId||e?.accountId,active:a?.active??e?.active,status:a?.status||e?.status,mustChangePassword:a?.mustChangePassword??e?.mustChangePassword}))),n=r.filter(e=>{let a=String(e?.role||"").toLowerCase(),t=s.some(a=>String(a.userId||"")===String(ak(e)||""));return("developer"===a||"platform_team"===a||"platform_admin"===a)&&!t}).map(e=>({id:e?.membershipId||e?.userMembershipId||`membership_${ak(e)||e.email||Math.random()}`,accountId:e?.accountId,userId:ak(e),fullName:e?.fullName||e?.name,email:e?.email,role:e?.role==="developer"?"developer":"platform_team",schoolId:null,branchId:null,active:e?.active!==!1&&e?.status!=="inactive",status:e?.active===!1||e?.status==="inactive"?"inactive":"active",mustChangePassword:!!e?.mustChangePassword,isDeleted:!!e?.isDeleted})),{users:r,memberships:[...i,...s,...n]}),o=aR(),c=a$(d,l,o);if(c.length)for(let e of(p(c),aL(c),d)){let t=l.find(a=>String(a.userId||"")===String(ak(e)||"")||ay(a.email)===ay(e.email));if(!t)continue;let r=String(t.role||e.role||"").toLowerCase();if("developer"!==r&&"platform_team"!==r&&"platform_admin"!==r)continue;let i=aI(e,t,o),s=i?.platformRole||("developer"===r?"developer":"support_agent"),n=aV({id:String(ak(e)||""),userId:String(ak(e)||""),membershipId:String(t.id||""),fullName:e.fullName||e.name||t.fullName||e.email||"Platform Team Member",email:ay(e.email||t.email),phone:aj(e.phone),role:s,department:i?.department||"Support",title:i?.title||aS(s),status:!1===e.active||!1===t.active?"inactive":"active",permissions:i?.permissions||ac[s],temporaryPassword:i?.temporaryPassword||e.temporaryPassword||"",mustChangePassword:i?.mustChangePassword??e.mustChangePassword??t.mustChangePassword??!0},a||String(e.accountId||""));await aB({user:e,payload:n}),await aH({membership:t,user:e,payload:n})}else{let e=await av("users","accountUsers","appUsers"),a=await av("userMemberships","memberships"),t=a$(e,a,o);p(t.length?t:aq())}}catch(a){j(a?.message||"Could not load platform team from the server. Showing local saved team records.");let e=a$(await av("users","accountUsers","appUsers"),await av("userMemberships","memberships"),aR());p(e.length?e:aq())}finally{m(!1),b(!1)}};(0,i.useEffect)(()=>{if(!s){if(!t||!a)return void m(!1);I()}},[s,t,a]);let E=(0,i.useMemo)(()=>{let e=N.trim().toLowerCase();return c.filter(a=>{let t=`${a.fullName} ${a.email} ${a.phone||""} ${a.title||""} ${a.role} ${a.department} ${a.backendRole}`.toLowerCase();return(!e||t.includes(e))&&("all"===C||a.role===C)&&("all"===z||a.department===z)&&("all"===T||a.status===T)}).sort((e,a)=>("active"===e.status?-1:1)-("active"===a.status?-1:1)||ag(a.updatedAt||a.createdAt)-ag(e.updatedAt||e.createdAt))},[c,N,C,z,T]),$=c.filter(e=>"active"===e.status).length,F=c.filter(e=>"suspended"===e.status).length,U=c.filter(e=>"inactive"===e.status).length,O=c.filter(e=>e.mustChangePassword||e.temporaryPassword).length,_=c.filter(e=>e.permissions.canManageBackups||e.permissions.canManageReleases||e.permissions.canManageSettings||e.permissions.canViewAuditLogs).length,K=(0,i.useMemo)(()=>aW(c,e=>aS(e.role)),[c]),B=(0,i.useMemo)(()=>aW(c,e=>e.department),[c]),H=(0,i.useMemo)(()=>aW(c,e=>e.status),[c]),G=(0,i.useMemo)(()=>{let e=((e=6)=>{let a=new Date;return Array.from({length:e},(t,r)=>{let i=new Date(a.getFullYear(),a.getMonth()-(e-1-r),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(i)})})(6),a=new Map(e.map(e=>[e,0]));return c.forEach(e=>{let t,r=(t=ag(e.createdAt))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(t)):"Unknown";a.has(r)&&a.set(r,(a.get(r)||0)+1)}),e.map(e=>({label:e,value:a.get(e)||0}))},[c]),W=e=>{j(""),k(""),L({id:e.id,userId:e.userId,membershipId:e.membershipId,fullName:e.fullName,email:e.email,phone:e.phone||"",role:e.role,department:e.department,title:e.title||"",status:e.status,permissions:{...ao,...e.permissions},temporaryPassword:e.temporaryPassword||"",mustChangePassword:e.mustChangePassword??!0}),M(!0)},V=()=>{f||(M(!1),L({...ap,permissions:{...ap.permissions}}))},J=async e=>{e.preventDefault();let t=a?q.fullName.trim()?q.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(q.email.trim())?q.id||q.temporaryPassword.trim()?"":"Temporary password is required for the first login.":"Please enter a valid email address.":"Team member email is required because the person signs in with email and password.":"Team member name is required.":"Account session is missing. Please log out and sign in again.";if(t)return j(t);try{var r,i;let e;v(!0),j(""),k("");let t=aV(q,a),s=await aK(t),n=aO(s,{id:t.userId,accountId:t.accountId,fullName:t.fullName,email:t.email,phone:t.phone,role:t.role,active:t.active}),d=(r={id:t.membershipId,accountId:t.accountId,userId:ak(n),email:t.email,fullName:t.fullName,role:t.role,active:t.active,schoolId:null,branchId:null},s?.membership||s?.userMembership||s?.data?.membership||s?.data?.userMembership||aO(s,{})?.memberships?.[0]||r),l={...t,userId:String(ak(n)||t.userId||""),membershipId:String(d.id||t.membershipId||"")};await aB({user:n,payload:l}),await aH({membership:d,user:n,payload:l}),i={id:String(ak(n)||t.email),userId:String(ak(n)||""),membershipId:String(d.id||""),email:t.email,platformRole:t.platformRole,backendRole:t.role,department:t.department,title:t.title,permissions:t.permissions,temporaryPassword:t.temporaryPassword,mustChangePassword:t.mustChangePassword,updatedAt:Date.now()},e=aR(),aM(e.some(e=>i.userId&&e.userId===i.userId||ay(e.email)===ay(i.email))?e.map(e=>i.userId&&e.userId===i.userId||ay(e.email)===ay(i.email)?{...e,...i,updatedAt:Date.now()}:e):[{...i,updatedAt:Date.now(),createdAt:i.createdAt||Date.now()},...e]);let o=aE({id:ak(n)||t.email,userId:ak(n),membershipId:d.id,fullName:t.fullName,email:t.email,phone:t.phone,role:t.platformRole,backendRole:t.role,department:t.department,title:t.title,permissions:t.permissions,status:t.status,temporaryPassword:t.temporaryPassword,mustChangePassword:t.mustChangePassword,createdAt:n?.createdAt||Date.now(),updatedAt:Date.now()},0);p(e=>{let a=e.some(e=>e.userId===o.userId||ay(e.email)===ay(o.email))?e.map(e=>e.userId===o.userId||ay(e.email)===ay(o.email)?{...e,...o,createdAt:e.createdAt||o.createdAt}:e):[o,...e];return aL(a),a}),k(q.id?"Team member updated. Their login account remains active in AppUser/UserMembership.":`Team member added. Temporary password: ${t.temporaryPassword}`),V()}catch(e){j(e?.message||"Could not save platform team member.")}finally{v(!1)}},Q=async(e,a)=>{try{j(""),k("");let t=String(e.userId||"").trim();if(t){let e=encodeURIComponent(t);await aD(`/accounts/users/${e}/status`,{method:"PATCH",body:{active:"active"===a}}).catch(async()=>aD(`/accounts/users/${e}`,{method:"PATCH",body:{active:"active"===a,status:a}}))}p(t=>{let r=t.map(t=>t.id===e.id?{...t,status:a,updatedAt:Date.now()}:t);return aL(r),r});let r=aR();aM(r.map(a=>a.userId===e.userId||ay(a.email)===ay(e.email)?{...a,updatedAt:Date.now()}:a)),k(`Team member ${"active"===a?"reactivated":a}.`)}catch(e){j(e?.message||"Could not update team member status.")}},Y=async e=>{if(window.confirm(`Remove ${e.fullName} from platform team access? This removes local cache and tries to remove the backend membership if available.`))try{j(""),k("");let a=String(e.membershipId||"").trim(),t=String(e.userId||"").trim();a&&!a.startsWith("membership_")?await aD(`/memberships/${encodeURIComponent(a)}`,{method:"DELETE"}).catch(()=>null):t&&await aD(`/accounts/users/${encodeURIComponent(t)}/status`,{method:"PATCH",body:{active:!1}}).catch(()=>null),await aG(e),aM(aR().filter(a=>a.userId!==e.userId&&a.membershipId!==e.membershipId&&ay(a.email)!==ay(e.email))),p(a=>{let t=a.filter(a=>a.id!==e.id);return aL(t),t}),k("Team member removed from the local list and backend access was disabled/removed where possible.")}catch(e){j(e?.message||"Could not remove platform team member.")}};return u||s?(0,r.jsxs)("main",{className:"devteam-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:a4}),(0,r.jsxs)("section",{className:"devteam-state",children:[(0,r.jsx)("div",{className:"devteam-spinner"}),(0,r.jsx)("h2",{children:"Loading platform team..."}),(0,r.jsx)("p",{children:"Preparing staff login accounts, memberships, permissions and departments."})]})]}):t&&a?(0,r.jsxs)("main",{className:"devteam-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:a4}),(0,r.jsxs)("section",{className:"devteam-hero",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"devteam-eyebrow",children:"Auth-first platform workforce"}),(0,r.jsx)("h1",{children:"Developer Team"}),(0,r.jsx)("p",{children:"Add people who can actually log into Eleeveon. This creates backend AppUser and UserMembership records with no school or branch assignment, then stores department and permission metadata for team operations."})]}),(0,r.jsxs)("div",{className:"devteam-hero-actions",children:[(0,r.jsxs)("div",{className:"devteam-switch",children:[(0,r.jsx)("button",{type:"button",className:"cards"===l?"active":"",onClick:()=>o("cards"),children:"Cards"}),(0,r.jsx)("button",{type:"button",className:"table"===l?"active":"",onClick:()=>o("table"),children:"Table"}),(0,r.jsx)("button",{type:"button",className:"analytics"===l?"active":"",onClick:()=>o("analytics"),children:"Charts"})]}),(0,r.jsx)("button",{type:"button",className:"devteam-white-btn",onClick:()=>{j(""),k(""),L({...ap,permissions:{...ap.permissions},temporaryPassword:""}),M(!0)},children:"Add Login Member"}),(0,r.jsx)("button",{type:"button",className:"devteam-glass-btn",onClick:()=>I(!0),disabled:h,children:h?"Refreshing...":"Refresh"})]})]}),(y||w)&&(0,r.jsx)("section",{className:`devteam-alert ${y?"error":"success"}`,children:y||w}),(0,r.jsxs)("section",{className:"devteam-stat-grid",children:[(0,r.jsx)(aZ,{label:"Team Members",value:c.length,detail:`${E.length} shown`,icon:"\uD83D\uDC65"}),(0,r.jsx)(aZ,{label:"Active Logins",value:$,detail:`${U} inactive`,icon:"✅"}),(0,r.jsx)(aZ,{label:"Suspended",value:F,detail:"Blocked access",icon:"⛔"}),(0,r.jsx)(aZ,{label:"Temporary Passwords",value:O,detail:"Initial login access",icon:"\uD83D\uDD11"}),(0,r.jsx)(aZ,{label:"Sensitive Access",value:_,detail:"Audit/release/backup/settings",icon:"\uD83D\uDD10"})]}),(0,r.jsxs)("section",{className:"devteam-toolbar",children:[(0,r.jsx)("input",{value:N,onChange:e=>S(e.target.value),placeholder:"Search name, email, phone, title..."}),(0,r.jsxs)("select",{value:C,onChange:e=>A(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All roles"}),an.map(e=>(0,r.jsx)("option",{value:e.value,children:e.label},e.value))]}),(0,r.jsxs)("select",{value:z,onChange:e=>D(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All departments"}),ad.map(e=>(0,r.jsx)("option",{value:e,children:e},e))]}),(0,r.jsxs)("select",{value:T,onChange:e=>P(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All statuses"}),(0,r.jsx)("option",{value:"active",children:"Active"}),(0,r.jsx)("option",{value:"inactive",children:"Inactive"}),(0,r.jsx)("option",{value:"suspended",children:"Suspended"})]}),(0,r.jsx)("button",{type:"button",onClick:()=>{S(""),A("all"),D("all"),P("all")},children:"Reset"})]}),"analytics"===l?(0,r.jsx)(aY,{roleChart:K,departmentChart:B,statusChart:H,growthChart:G}):"table"===l?(0,r.jsx)(aQ,{members:E,onEdit:W,onStatus:Q,onDelete:Y}):(0,r.jsx)(aJ,{members:E,onEdit:W,onStatus:Q,onDelete:Y,navigate:e}),R&&(0,r.jsx)(aX,{form:q,updateForm:(e,a)=>{L(t=>{let r={...t,[e]:a};if("role"===e&&(r.permissions={...ac[a]},r.title=t.title||aS(a)),"email"===e){let e=ay(String(a));r.email=e,t.temporaryPassword&&t.temporaryPassword!==aw(t.email).slice(0,t.temporaryPassword.length)||(r.temporaryPassword=aw(e))}return r})},setForm:L,saving:f,onClose:V,onSubmit:J})]}):(0,r.jsxs)("main",{className:"devteam-page",style:{"--dev-primary":d},children:[(0,r.jsx)("style",{children:a4}),(0,r.jsxs)("section",{className:"devteam-state",children:[(0,r.jsx)("h2",{children:"Developer access required"}),(0,r.jsx)("p",{children:"Sign in with a developer account to manage platform team members."})]})]})},billingWorkspace:function(e){let[a,t]=i.useState("invoices");return(0,r.jsxs)("div",{className:"eds-platform-workspace",children:[(0,r.jsx)(sG,{value:a,onChange:t,label:"Platform billing",tabs:[{key:"invoices",label:"Invoices"},{key:"payments",label:"Payments"}]}),(0,r.jsx)("payments"===a?eM:eh,{...e})]})},healthWorkspace:function(e){let[a,t]=i.useState("systemHealth");return(0,r.jsxs)("div",{className:"eds-platform-workspace",children:[(0,r.jsx)(sG,{value:a,onChange:t,label:"Platform diagnostics",tabs:[{key:"systemHealth",label:"System Health"},{key:"errorReports",label:"Error Reports"},{key:"databaseTools",label:"Database Health"}]}),(0,r.jsx)("errorReports"===a?rK:"databaseTools"===a?iE:eZ,{...e})]})},developerToolsWorkspace:function(e){let[a,t]=i.useState("databaseStudio"),s="databaseDesigner"===a?so:"sqlConsole"===a?sI:"backups"===a?tV:"integrations"===a?rb:"releases"===a?ip:iQ;return(0,r.jsxs)("div",{className:"eds-platform-workspace",children:[(0,r.jsx)(sG,{value:a,onChange:t,label:"Developer tools",tabs:[{key:"databaseStudio",label:"Database Studio"},{key:"databaseDesigner",label:"Database Designer"},{key:"sqlConsole",label:"Safe SQL Console"},{key:"backups",label:"Backup & Restore"},{key:"integrations",label:"API & Integrations"},{key:"releases",label:"Release Manager"}]}),(0,r.jsx)(s,{...e})]})},settings:function(){let{accountId:e,authenticated:a,loading:t}=(0,g.F)(),{settings:s}=(0,x.t)(),h=s?.primaryColor||"var(--primary-color, #2563eb)",[b,f]=(0,i.useState)("cards"),[v,y]=(0,i.useState)(aa),[j,w]=(0,i.useState)(!0),[k,N]=(0,i.useState)(!1),[S,C]=(0,i.useState)(!1),[A,z]=(0,i.useState)(""),[D,T]=(0,i.useState)(""),[P,L]=(0,i.useState)(""),[I,E]=(0,i.useState)("all"),$=async(e=!1)=>{try{e?N(!0):w(!0),z("");let a=await (0,m.uE)("/developer/settings").catch(async()=>(0,m.uE)("/settings/developer").catch(()=>null)),t=function(e,a=[]){if(Array.isArray(e))return e;if(!e||"object"!=typeof e)return[];for(let t of a)if(Array.isArray(e[t]))return e[t];return Array.isArray(e.data)?e.data:Array.isArray(e.items)?e.items:Array.isArray(e.results)?e.results:Array.isArray(e.records)?e.records:Array.isArray(e.rows)?e.rows:[]}(a,["settings","items","records"]);y(t.length?t:aa)}catch(e){z(e?.message||"Could not load developer settings."),y(aa)}finally{w(!1),N(!1)}};(0,i.useEffect)(()=>{if(!t){if(!a||!e)return void w(!1);$()}},[t,a,e]);let F=(0,i.useMemo)(()=>Array.from(new Set(v.map(e=>e.category))).sort(),[v]),U=(0,i.useMemo)(()=>{let e=P.trim().toLowerCase();return v.filter(a=>{let t=`${a.key} ${a.label} ${a.category} ${a.description||""}`.toLowerCase();return(!e||t.includes(e))&&("all"===I||a.category===I)})},[v,P,I]),O=v.filter(e=>"boolean"===e.type&&!!e.value).length,_=v.filter(e=>e.sensitive).length,K=(0,i.useMemo)(()=>e4(v,e=>e.category),[v]),B=(0,i.useMemo)(()=>e4(v,e=>e.type||typeof e.value),[v]),H=(e,a)=>{y(t=>t.map(t=>t.key===e?{...t,value:a,updatedAt:Date.now()}:t))},G=async()=>{try{C(!0),z(""),T(""),await (0,m.uE)("/developer/settings",{method:"PUT",body:JSON.stringify({settings:v})}).catch(async()=>(0,m.uE)("/settings/developer",{method:"PUT",body:JSON.stringify({settings:v})})),T("Developer settings saved.")}catch(e){z(e?.message||"Could not save settings.")}finally{C(!1)}};return j||t?(0,r.jsxs)("main",{className:"devx-page",style:{"--dev-primary":h},children:[(0,r.jsx)("style",{children:at}),(0,r.jsx)(e5,{title:"Loading developer settings...",text:"Preparing platform configuration and controls."})]}):a&&e?(0,r.jsxs)("main",{className:"devx-page",style:{"--dev-primary":h},children:[(0,r.jsx)("style",{children:at}),(0,r.jsx)(e8,{eyebrow:"System",title:"Developer Settings",description:"Control platform defaults, feature switches, billing preferences and operational settings.",viewMode:b,onViewMode:f,onRefresh:()=>$(!0),refreshing:k,actions:(0,r.jsx)("button",{className:"devx-white-btn",type:"button",onClick:G,disabled:S,children:S?"Saving...":"Save Settings"})}),(A||D)&&(0,r.jsx)("section",{className:`devx-alert ${A?"error":"success"}`,children:A||D}),(0,r.jsxs)("section",{className:"devx-stat-grid",children:[(0,r.jsx)(e3,{label:"Settings",value:v.length,detail:`${U.length} shown`,icon:"⚙️"}),(0,r.jsx)(e3,{label:"Categories",value:F.length,detail:"Configuration groups",icon:"\uD83E\uDDE9"}),(0,r.jsx)(e3,{label:"Enabled Flags",value:O,detail:"Boolean switches on",icon:"✅"}),(0,r.jsx)(e3,{label:"Sensitive",value:_,detail:"Protected values",icon:"\uD83D\uDD10"})]}),(0,r.jsxs)("section",{className:"devx-toolbar",children:[(0,r.jsx)("input",{value:P,onChange:e=>L(e.target.value),placeholder:"Search setting, key, description..."}),(0,r.jsxs)("select",{value:I,onChange:e=>E(e.target.value),children:[(0,r.jsx)("option",{value:"all",children:"All categories"}),F.map(e=>(0,r.jsx)("option",{value:e,children:e},e))]}),(0,r.jsx)("button",{type:"button",onClick:()=>{L(""),E("all")},children:"Reset"})]}),"analytics"===b?(0,r.jsxs)("section",{className:"devx-chart-grid",children:[(0,r.jsx)(e7,{title:"Settings by category",description:"Configuration spread across system areas.",children:(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(d.E,{data:K,layout:"vertical",children:[(0,r.jsx)(l.d,{strokeDasharray:"3 3",horizontal:!1}),(0,r.jsx)(o.W,{type:"number",allowDecimals:!1,tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(c.h,{type:"category",dataKey:"label",width:110,tickLine:!1,axisLine:!1,fontSize:11}),(0,r.jsx)(p.m,{}),(0,r.jsx)(u.yP,{dataKey:"value",fill:"var(--dev-primary)",radius:[0,12,12,0]})]})})}),(0,r.jsxs)(e7,{title:"Setting types",description:"Text, number and boolean setting mix.",children:[(0,r.jsx)(n.u,{width:"100%",height:260,children:(0,r.jsxs)(R.r,{children:[(0,r.jsx)(p.m,{}),(0,r.jsx)(M.Fq,{data:B,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:B.map((e,a)=>(0,r.jsx)(q.f,{fill:e1[a%e1.length]},a))})]})}),(0,r.jsx)(ae,{rows:B})]})]}):"table"===b?(0,r.jsx)("section",{className:"devx-table-card",children:(0,r.jsx)("div",{className:"devx-table-wrap",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Setting"}),(0,r.jsx)("th",{children:"Key"}),(0,r.jsx)("th",{children:"Category"}),(0,r.jsx)("th",{children:"Value"}),(0,r.jsx)("th",{children:"Type"}),(0,r.jsx)("th",{children:"Updated"})]})}),(0,r.jsx)("tbody",{children:U.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)("strong",{children:e.label}),(0,r.jsx)("br",{}),(0,r.jsx)("small",{children:e.description||""})]}),(0,r.jsx)("td",{children:e.key}),(0,r.jsx)("td",{children:e.category}),(0,r.jsx)("td",{children:e.sensitive?"••••••":String(e.value)}),(0,r.jsx)("td",{children:e.type||typeof e.value}),(0,r.jsx)("td",{children:e2(e.updatedAt)})]},e.key))})]})})}):(0,r.jsxs)("section",{className:"devx-card-grid",children:[U.map(e=>(0,r.jsxs)("article",{className:"devx-card",children:[(0,r.jsxs)("div",{className:"devx-record-top",children:[(0,r.jsx)("span",{className:"devx-avatar",children:"⚙️"}),(0,r.jsx)(e6,{tone:"boolean"===e.type?e.value?"green":"gray":"blue",children:e.category})]}),(0,r.jsx)("h3",{children:e.label}),(0,r.jsx)("p",{children:e.description||e.key}),(0,r.jsxs)("div",{className:"devx-meta-grid",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Key"}),e.key]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Type"}),e.type||typeof e.value]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"Updated"}),e2(e.updatedAt)]})]}),(0,r.jsx)("div",{className:"devx-actions",children:"boolean"===e.type?(0,r.jsx)("button",{className:"primary",type:"button",onClick:()=>H(e.key,!e.value),children:e.value?"Disable":"Enable"}):"number"===e.type?(0,r.jsx)("input",{type:"number",value:Number(e.value||0),onChange:a=>H(e.key,Number(a.target.value))}):(0,r.jsx)("input",{value:String(e.value??""),onChange:a=>H(e.key,a.target.value)})})]},e.key)),!U.length&&(0,r.jsx)(e9,{text:"No settings match your filters."})]})]}):(0,r.jsxs)("main",{className:"devx-page",style:{"--dev-primary":h},children:[(0,r.jsx)("style",{children:at}),(0,r.jsx)(e5,{title:"Developer access required",text:"Sign in to manage developer settings."})]})},plans:T,subscriptions:O,accounts:ea,featureFlags:tm,invoices:eh,payments:eM,systemHealth:eZ,errorReports:rK,databaseTools:iE,databaseStudio:iQ,databaseDesigner:so,sqlConsole:sI,backups:tV,integrations:rb,releases:ip};function sQ(){return(0,r.jsx)(s.A,{portalTitle:"Developer Portal",portalSubtitle:"Platform operations, customers, billing and technical tools",homeKey:"saasWorkspace",allowedRoles:["developer","platform_team"],navSections:sV,navigationMode:"branch-workspace",routes:sJ,lockedContext:!1,requireSchool:!1,requireBranch:!1})}},35426:(e,a,t)=>{Promise.resolve().then(t.bind(t,21107))}},e=>{e.O(0,[8206,3019,69,1439,796,5125,9540,4967,2975,8365,6228,110,4187,8441,3794,7358],()=>e(e.s=35426)),_N_E=e.O()}]);
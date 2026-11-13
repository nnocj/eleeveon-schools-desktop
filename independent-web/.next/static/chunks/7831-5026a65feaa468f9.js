(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7831],{4032:(e,t,a)=>{"use strict";function r(e,t){if(!Number.isSafeInteger(t)||t<1||"fixed"===e.mode)return null;let a=0;if("per_student"===e.mode&&(a=t*(e.perStudentRate||0)),"tiered"===e.mode){let r=0;for(let i of e.tiers||[]){let e=null==i.upTo?t:Math.min(i.upTo,t);if(a+=Math.max(0,e-r)*i.unitPrice,(r=e)>=t)break}if(r<t)return null}return Math.round(100*Math.max(a,e.minimumAmount||0))/100}a.d(t,{B:()=>r})},23333:()=>{},39092:(e,t,a)=>{"use strict";e.exports=a(73279).style},41660:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});var r=a(95155),i=a(12115),n=a(49917),o=a(14176);function s(e){return"number"==typeof e&&Number.isFinite(e)&&e>=0?e:null}function c(e){if(!e)return"Not configured";let t=new Date(e);return Number.isNaN(t.getTime())?"Not configured":t.toLocaleDateString("en-GH",{day:"numeric",month:"short",year:"numeric"})}function l({onExplorePackages:e,refreshKey:t}){let[a,h]=(0,i.useState)(null),[f,x]=(0,i.useState)(!0),[b,g]=(0,i.useState)(""),[y,v]=(0,i.useState)(0);if((0,i.useEffect)(()=>{let e=!0;return x(!0),g(""),h(null),(0,n.K)().then(t=>{e&&h(t)}).catch(t=>{e&&g(t instanceof Error?t.message:"Entitlement unavailable")}).finally(()=>{e&&x(!1)}),()=>{e=!1}},[t,y]),f)return(0,r.jsx)("section",{style:p,"aria-label":"Checking trial access",children:(0,r.jsx)("span",{style:u,children:"Checking trial status and student allowance..."})});if(b)return(0,r.jsxs)("section",{style:p,"aria-label":"Trial status unavailable",children:[(0,r.jsx)("strong",{children:"Unable to verify current trial access"}),(0,r.jsx)("p",{style:u,children:"Reconnect and refresh to view your entitlement and student allowance. The displayed information is not a substitute for backend access checks."}),(0,r.jsx)("button",{type:"button",style:m,onClick:()=>v(e=>e+1),children:"Retry"})]});if(!a)return null;let{snapshot:w,usage:j}=a;if("trial"!==w.licenseModel&&"trial"!==w.source)return null;let k=(0,o.YP)({status:w.status,validUntil:w.validUntil,graceEndsAt:w.graceEndsAt}),S=w.validUntil,N=function(e){if(!e)return null;let t=Date.parse(e);return Number.isFinite(t)?Math.max(0,Math.ceil((t-Date.now())/864e5)):null}(S),C=s(w.limits.students),_=s(j?.students),q=null!==C&&null!==_?Math.max(0,C-_):null,z=null===w.limits.students,P=!!S&&Number.isFinite(Date.parse(S))&&Date.parse(S)<=Date.now()||"expired"===k||"cancelled"===k||"suspended"===k,E=!S,T=j?.calculatedAt&&!Number.isNaN(Date.parse(j.calculatedAt))?c(j.calculatedAt):null;return(0,r.jsxs)("section",{style:p,"aria-label":"Your Eleeveon free trial",children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{style:{fontSize:15},children:"Your Free Trial"}),(0,r.jsx)("div",{style:u,children:P?"Trial ended or access restricted":"trial"===k?"Trial in progress":`Access status: ${k}`})]}),(0,r.jsx)("span",{style:{padding:"5px 10px",borderRadius:99,fontSize:11,fontWeight:800,background:P?"#fee2e2":"#dcfce7",color:P?"#991b1b":"#166534"},children:P?"Expired / restricted":k.toUpperCase()})]}),(0,r.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(132px,1fr))",gap:8},children:[(0,r.jsx)(d,{title:"Days remaining",value:null===N?"Not available":String(N),sub:E?"Expiry unavailable":`Ends ${c(S)}`}),(0,r.jsx)(d,{title:"Students recorded",value:null===_?"Not available":_.toLocaleString("en-GH"),sub:T?`Last snapshot ${T}`:"Based on available usage snapshot"}),(0,r.jsx)(d,{title:"Student allowance",value:z?"Unlimited":null===C?"Not available":C.toLocaleString("en-GH"),sub:"From your effective entitlement"}),(0,r.jsx)(d,{title:"Places remaining",value:z?"Unlimited":null===q?"Not available":q.toLocaleString("en-GH"),sub:0===q?"No remaining places under this snapshot":"Calculated from the latest usage snapshot"})]}),E?(0,r.jsx)("p",{style:{...u,margin:0},children:"Your trial expiry is missing from the entitlement response. Please contact Eleeveon support; an unknown expiry is not unlimited access."}):null,P?(0,r.jsx)("p",{style:{...u,margin:0},children:"Your trial period has ended. Your existing records are not erased by this notice. Choose a supported paid package to request conversion; activation and any access restrictions are determined by the backend."}):null,(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"space-between"},children:[(0,r.jsx)("span",{style:u,children:"Usage figures can lag behind recently synchronized admissions. Server limits remain authoritative."}),e?(0,r.jsx)("button",{type:"button",style:m,onClick:e,children:P?"View paid packages":"Explore packages"}):(0,r.jsx)("span",{style:{...u,fontWeight:700},children:"Open My Subscription to explore packages"})]})]})}function d({title:e,value:t,sub:a}){return(0,r.jsxs)("div",{style:{padding:"11px 12px",border:"1px solid var(--border,rgba(148,163,184,.25))",borderRadius:15,background:"color-mix(in srgb,var(--muted,#64748b) 5%,transparent)",minWidth:0},children:[(0,r.jsx)("div",{style:{...u,fontWeight:700,fontSize:11},children:e}),(0,r.jsx)("strong",{style:{display:"block",fontSize:23,lineHeight:1.4,overflowWrap:"anywhere"},children:t}),(0,r.jsx)("span",{style:{...u,fontSize:10},children:a})]})}let p={display:"grid",gap:12,padding:14,borderRadius:20,border:"1px solid var(--border,rgba(148,163,184,.25))",background:"var(--card-bg,var(--card,var(--surface,#fff)))",color:"var(--text,#0f172a)"},u={color:"var(--muted,#64748b)",fontSize:11,lineHeight:1.45},m={padding:"10px 13px",borderRadius:99,border:0,fontSize:12,fontWeight:800,cursor:"pointer",background:"var(--primary-color,#2563eb)",color:"white"}},60815:(e,t,a)=>{"use strict";a.d(t,{Gi:()=>i,Pw:()=>n,Sh:()=>d,TG:()=>s,Vh:()=>o,g4:()=>c,qc:()=>l,wr:()=>p});var r=a(41463);function i(){return(r.env.NEXT_PUBLIC_API_URL||r.env.NEXT_PUBLIC_API_BASE_URL||"").replace(/\/$/,"")}function n(e){let t=localStorage.getItem("token")||localStorage.getItem("accessToken")||localStorage.getItem("authToken")||localStorage.getItem("eleeveon_token");return{"Content-Type":"application/json",...t?{Authorization:`Bearer ${t}`}:{},...e||{}}}async function o(e){let t=await e.text().catch(()=>""),a=t?function(e){try{return JSON.parse(e)}catch{return null}}(t):null;if(!e.ok){let r=a?.message||a?.error||t||`Request failed with status ${e.status}`;throw Error(Array.isArray(r)?r.join(", "):String(r))}return a}function s(e,t="GHS"){return`${t} ${Number(e||0).toLocaleString("en-GH")}`}function c(e){return"momo"===e||"card"===e||"bank"===e?"paystack":"manual"}function l(){return"mtn"}function d(e){return({momo:"Mobile Money",card:"Card",bank:"Bank",cash:"Cash",manual:"Manual"})[e]||e}function p(e){return e?.authorizationUrl||e?.providerResponse?.authorizationUrl||e?.payment?.authorizationUrl||e?.data?.authorizationUrl}},73279:(e,t,a)=>{"use strict";var r=a(41463);a(23333);var i=a(12115),n=i&&"object"==typeof i&&"default"in i?i:{default:i},o=void 0!==r&&r.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var t=void 0===e?{}:e,a=t.name,r=void 0===a?"stylesheet":a,i=t.optimizeForSpeed,n=void 0===i?o:i;l(s(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",l("boolean"==typeof n,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=n,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var c="u">typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=c?c.getAttribute("content"):null}var t,a=e.prototype;return a.setOptimizeForSpeed=function(e){l("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),l(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(l(!this._injected,"sheet already injected"),this._injected=!0,"u">typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,a){return"number"==typeof a?e._serverSheet.cssRules[a]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),a},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(l(s(e),"`insertRule` accepts only strings"),"u"<typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var a=this.getSheet();"number"!=typeof t&&(t=a.cssRules.length);try{a.insertRule(e,t)}catch(t){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||"u"<typeof window){var a="u">typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!a.cssRules[e])return e;a.deleteRule(e);try{a.insertRule(t,e)}catch(r){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),a.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];l(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},a.deleteRule=function(e){if("u"<typeof window)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];l(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},a.flush=function(){this._injected=!1,this._rulesCount=0,"u">typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return"u"<typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,a){return a?t=t.concat(Array.prototype.map.call(e.getSheetForTag(a).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},a.makeStyleTag=function(e,t,a){t&&l(s(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return a?i.insertBefore(r,a):i.appendChild(r),r},t=[{key:"length",get:function(){return this._rulesCount}}],function(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}();function l(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,a=e.length;a;)t=33*t^e.charCodeAt(--a);return t>>>0},p={};function u(e,t){if(!t)return"jsx-"+e;var a=String(t),r=e+a;return p[r]||(p[r]="jsx-"+d(e+"-"+a)),p[r]}function m(e,t){"u"<typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var a=e+t;return p[a]||(p[a]=t.replace(/__jsx-style-dynamic-selector/g,e)),p[a]}var h=function(){function e(e){var t=void 0===e?{}:e,a=t.styleSheet,r=void 0===a?null:a,i=t.optimizeForSpeed,n=void 0!==i&&i;this._sheet=r||new c({name:"styled-jsx",optimizeForSpeed:n}),this._sheet.inject(),r&&"boolean"==typeof n&&(this._sheet.setOptimizeForSpeed(n),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"u">typeof window&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var a=this.getIdAndRules(e),r=a.styleId,i=a.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var n=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=n,this._instancesCounts[r]=1},t.remove=function(e){var t=this,a=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(a in this._instancesCounts,"styleId: `"+a+"` not found"),this._instancesCounts[a]-=1,this._instancesCounts[a]<1){var r=this._fromServer&&this._fromServer[a];r?(r.parentNode.removeChild(r),delete this._fromServer[a]):(this._indices[a].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[a]),delete this._instancesCounts[a]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],a=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return a[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,a;return t=this.cssRules(),void 0===(a=e)&&(a={}),t.map(function(e){var t=e[0],r=e[1];return n.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:a.nonce?a.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,a=e.dynamic,r=e.id;if(a){var i=u(r,a);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return m(i,e)}):[m(i,t)]}}return{styleId:u(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),f=i.createContext(null);f.displayName="StyleSheetContext";var x=n.default.useInsertionEffect||n.default.useLayoutEffect,b="u">typeof window?new h:void 0;function g(e){var t=b||i.useContext(f);return t&&("u"<typeof window?t.add(e):x(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}g.dynamic=function(e){return e.map(function(e){return u(e[0],e[1])}).join(" ")},t.style=g},97831:(e,t,a)=>{"use strict";a.d(t,{A:()=>q});var r=a(95155),i=a(12115),n=a(47650),o=a(39092),s=a.n(o),c=a(60815);let l=["momo","card","bank","cash","manual"];function d(e){let{open:t,onClose:a,title:o,description:d,amount:p,currency:u="GHS",onSuccess:m,onError:h}=e,f=e.purpose||"subscription",x="subscription"!==e.purpose&&e.purpose?void 0:e.billingCycle||"monthly",b=(0,c.Gi)(),g=(0,i.useRef)(null),[y,v]=(0,i.useState)(!1),[w,j]=(0,i.useState)("momo"),[k,S]=(0,i.useState)((0,c.qc)()),[N,C]=(0,i.useState)(e.payerNameDefault||""),[_,q]=(0,i.useState)(e.payerPhoneDefault||""),[z,P]=(0,i.useState)(e.payerEmailDefault||""),E=(0,i.useMemo)(()=>(0,c.g4)(w),[w]),T="subscription_quote"===e.purpose,I=T?l.filter(e=>"momo"===e||"card"===e||"bank"===e):l;if((0,i.useEffect)(()=>{t&&(C(e.payerNameDefault||""),q(e.payerPhoneDefault||""),P(e.payerEmailDefault||""))},[t,e.payerNameDefault,e.payerPhoneDefault,e.payerEmailDefault]),(0,i.useEffect)(()=>{if(!t)return;let e=document.body.style.overflow;document.body.style.overflow="hidden";let r=window.setTimeout(()=>{g.current?.focus()},0);function i(e){"Escape"!==e.key||y||a()}return window.addEventListener("keydown",i),()=>{window.clearTimeout(r),window.removeEventListener("keydown",i),document.body.style.overflow=e}},[t,y,a]),!t||"u"<typeof document)return null;async function A(){try{let t;v(!0);if("subscription_quote"===e.purpose){if(!e.quoteId?.trim())throw Error("A verified quotation is required.");if("paystack"!==E)throw Error("This subscription must be paid through Paystack.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(z.trim()))throw Error("Enter a valid payer email for Paystack checkout.");t=await fetch(`${b}/billing/subscription-quotes/${encodeURIComponent(e.quoteId)}/pay`,{method:"POST",headers:(0,c.Pw)(),body:JSON.stringify({paymentMethod:w,provider:"paystack",momoNetwork:k,payerName:N,payerPhone:_,payerEmail:(z??"").trim()})})}else if("student_fee"===e.purpose){let a=e.callbackUrl||`${window.location.origin}${window.location.pathname}?invoiceId=${encodeURIComponent(String(e.invoiceId))}`;t=await fetch(`${b}/finance/student-fees/payments/initiate`,{method:"POST",headers:(0,c.Pw)(),body:JSON.stringify({schoolId:e.schoolId,branchId:e.branchId,studentId:e.studentId,invoiceId:e.invoiceId,amount:p,channel:"momo"===w?"momo":"card",method:w,provider:E,momoNetwork:k,payerName:N,payerPhone:_,payerEmail:z,callbackUrl:a,currencyCode:u,currencySymbol:"GHS"===u?"GH₵":u,currencyName:"GHS"===u?"Ghanaian Cedi":u,metadata:e.metadata||{}})})}else t=await fetch(`${b}/billing/subscribe`,{method:"POST",headers:(0,c.Pw)(),body:JSON.stringify({planId:e.planId,billingCycle:e.billingCycle||"monthly",paymentMethod:w,provider:E,momoNetwork:k,payerName:N,payerPhone:_,payerEmail:z})});let r=await (0,c.Vh)(t),i=(0,c.wr)(r);if(T){let e;if(!i)throw Error("Paystack did not return a checkout URL. Check the existing quotation before trying again.");try{e=new URL(i)}catch{throw Error("Paystack returned an invalid checkout URL.")}let t=e.hostname.toLowerCase();if("https:"!==e.protocol||"paystack.com"!==t&&!t.endsWith(".paystack.com"))throw Error("The payment provider returned an unrecognized checkout URL.");window.location.assign(e.toString());return}if(i){window.location.href=i;return}m?.(r),a()}catch(e){h?.(e?.message||"Payment failed.")}finally{v(!1)}}return(0,n.createPortal)((0,r.jsxs)("div",{role:"presentation",onMouseDown:e=>{e.target!==e.currentTarget||y||a()},className:"jsx-129cf7e4a5c61cc4 payment-backdrop",children:[(0,r.jsx)("section",{ref:g,role:"dialog","aria-modal":"true","aria-labelledby":"payment-checkout-title","aria-describedby":"payment-checkout-description",tabIndex:-1,className:"jsx-129cf7e4a5c61cc4 payment-modal",children:(0,r.jsxs)("div",{className:"jsx-129cf7e4a5c61cc4 payment-shell",children:[(0,r.jsxs)("header",{className:"jsx-129cf7e4a5c61cc4 payment-header",children:[(0,r.jsxs)("div",{className:"jsx-129cf7e4a5c61cc4 payment-title-row",children:[(0,r.jsx)("span",{className:"jsx-129cf7e4a5c61cc4 checkout-dot",children:"\uD83D\uDCB3"}),(0,r.jsxs)("div",{className:"jsx-129cf7e4a5c61cc4 header-copy",children:[(0,r.jsx)("p",{className:"jsx-129cf7e4a5c61cc4 eyebrow",children:"Secure checkout"}),(0,r.jsx)("h2",{id:"payment-checkout-title",className:"jsx-129cf7e4a5c61cc4",children:o||("student_fee"===f?"Pay School Fee":"subscription_quote"===f?"Pay Verified Subscription":"Complete Subscription")}),(0,r.jsx)("p",{id:"payment-checkout-description",className:"jsx-129cf7e4a5c61cc4 desc",children:d||("student_fee"===f?"Choose a payment option and pay this invoice securely.":"subscription_quote"===f?"Your quotation and student count will be checked again by the server before Paystack opens.":"Choose a payment option and confirm your subscription securely.")})]})]}),(0,r.jsx)("button",{type:"button",onClick:a,disabled:y,"aria-label":"Close payment checkout",className:"jsx-129cf7e4a5c61cc4 close-btn",children:"\xd7"})]}),(0,r.jsxs)("main",{className:"jsx-129cf7e4a5c61cc4 payment-body",children:[(0,r.jsxs)("section",{"aria-label":"Payment amount",className:"jsx-129cf7e4a5c61cc4 amount-row",children:[(0,r.jsxs)("span",{className:"jsx-129cf7e4a5c61cc4",children:[(0,r.jsx)("strong",{className:"jsx-129cf7e4a5c61cc4",children:(0,c.TG)(p,u)}),(0,r.jsx)("small",{className:"jsx-129cf7e4a5c61cc4",children:x?"termly"===x?"4-month termly subscription":"yearly"===x?"yearly subscription":"monthly subscription":"student_fee"===f?"student fee":"subscription_quote"===f?"verified subscription quotation":"subscription"})]}),(0,r.jsx)("b",{className:"jsx-129cf7e4a5c61cc4",children:"paystack"===E?"Paystack":"Manual"})]}),(0,r.jsxs)("section",{"aria-label":"Payment method",className:"jsx-129cf7e4a5c61cc4 compact-section",children:[(0,r.jsxs)("div",{className:"jsx-129cf7e4a5c61cc4 section-line",children:[(0,r.jsx)("h3",{className:"jsx-129cf7e4a5c61cc4",children:"Payment method"}),(0,r.jsxs)("p",{className:"jsx-129cf7e4a5c61cc4",children:[(0,c.Sh)(w)," selected"]})]}),(0,r.jsx)("div",{role:"radiogroup",className:"jsx-129cf7e4a5c61cc4 method-list",children:I.map(e=>(0,r.jsxs)("button",{type:"button",role:"radio","aria-checked":w===e,onClick:()=>j(e),className:"jsx-129cf7e4a5c61cc4 "+((w===e?"method active":"method")||""),children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"jsx-129cf7e4a5c61cc4 method-icon",children:"momo"===e?"Mo":"card"===e?"Ca":"bank"===e?"Ba":"cash"===e?"Cs":"Mn"}),(0,r.jsxs)("span",{className:"jsx-129cf7e4a5c61cc4 method-main",children:[(0,r.jsx)("strong",{className:"jsx-129cf7e4a5c61cc4",children:(0,c.Sh)(e)}),(0,r.jsx)("small",{className:"jsx-129cf7e4a5c61cc4",children:"momo"===e?"Mobile wallet":"card"===e?"Debit or credit card":"bank"===e?"Bank payment":"cash"===e?"Offline cash":"Manual approval"})]}),(0,r.jsx)("span",{className:"jsx-129cf7e4a5c61cc4 method-side",children:(0,r.jsx)("i",{className:"jsx-129cf7e4a5c61cc4 "+((w===e?"selected":"")||"")})})]},e))})]}),(0,r.jsxs)("section",{"aria-label":"Payer details",className:"jsx-129cf7e4a5c61cc4 compact-section",children:[(0,r.jsxs)("div",{className:"jsx-129cf7e4a5c61cc4 section-line",children:[(0,r.jsx)("h3",{className:"jsx-129cf7e4a5c61cc4",children:"Payer details"}),(0,r.jsx)("p",{className:"jsx-129cf7e4a5c61cc4",children:"Optional contact details for the payer."})]}),(0,r.jsxs)("div",{className:"jsx-129cf7e4a5c61cc4 form-list",children:["momo"===w?(0,r.jsxs)("label",{htmlFor:"momoNetwork",className:"jsx-129cf7e4a5c61cc4 field-row",children:[(0,r.jsx)("span",{className:"jsx-129cf7e4a5c61cc4",children:"Network"}),(0,r.jsxs)("select",{id:"momoNetwork",value:k,onChange:e=>S(e.target.value),className:"jsx-129cf7e4a5c61cc4",children:[(0,r.jsx)("option",{value:"mtn",className:"jsx-129cf7e4a5c61cc4",children:"MTN Mobile Money"}),(0,r.jsx)("option",{value:"telecel",className:"jsx-129cf7e4a5c61cc4",children:"Telecel Cash"}),(0,r.jsx)("option",{value:"airteltigo",className:"jsx-129cf7e4a5c61cc4",children:"AirtelTigo Money"})]})]}):null,(0,r.jsxs)("label",{htmlFor:"payerName",className:"jsx-129cf7e4a5c61cc4 field-row",children:[(0,r.jsx)("span",{className:"jsx-129cf7e4a5c61cc4",children:"Name"}),(0,r.jsx)("input",{id:"payerName",value:N,onChange:e=>C(e.target.value),placeholder:"Payer name",autoComplete:"name",className:"jsx-129cf7e4a5c61cc4"})]}),(0,r.jsxs)("label",{htmlFor:"payerPhone",className:"jsx-129cf7e4a5c61cc4 field-row",children:[(0,r.jsx)("span",{className:"jsx-129cf7e4a5c61cc4",children:"Phone"}),(0,r.jsx)("input",{id:"payerPhone",value:_,onChange:e=>q(e.target.value),placeholder:"024xxxxxxx",inputMode:"tel",autoComplete:"tel",className:"jsx-129cf7e4a5c61cc4"})]}),(0,r.jsxs)("label",{htmlFor:"payerEmail",className:"jsx-129cf7e4a5c61cc4 field-row",children:[(0,r.jsx)("span",{className:"jsx-129cf7e4a5c61cc4",children:"Email"}),(0,r.jsx)("input",{id:"payerEmail",type:"email",value:z,onChange:e=>P(e.target.value),placeholder:"example@email.com",autoComplete:"email",className:"jsx-129cf7e4a5c61cc4"})]})]})]}),(0,r.jsxs)("section",{className:"jsx-129cf7e4a5c61cc4 payment-note",children:[(0,r.jsx)("span",{className:"jsx-129cf7e4a5c61cc4 status-dot"}),(0,r.jsx)("p",{className:"jsx-129cf7e4a5c61cc4",children:"paystack"===E?"You will be redirected securely to Paystack to complete this payment.":"This payment will be created and remain pending until it is manually confirmed."})]})]}),(0,r.jsxs)("footer",{className:"jsx-129cf7e4a5c61cc4 actions",children:[(0,r.jsx)("button",{type:"button",onClick:a,disabled:y,className:"jsx-129cf7e4a5c61cc4 cancel-btn",children:"Cancel"}),(0,r.jsx)("button",{type:"button",disabled:y,onClick:A,className:"jsx-129cf7e4a5c61cc4 pay-btn",children:y?"Processing...":"paystack"===E?"Continue to Paystack":"Create Payment"})]})]})}),(0,r.jsx)(s(),{id:"129cf7e4a5c61cc4",children:'.payment-backdrop.jsx-129cf7e4a5c61cc4{position:fixed;inset:0;z-index:20000;display:grid;align-items:stretch;justify-items:center;width:100%;height:100vh;height:100dvh;min-height:0;padding:0;overflow:hidden;background:rgba(2,6,23,.58);backdrop-filter:blur(12px);-webkit-overflow-scrolling:touch}.payment-modal.jsx-129cf7e4a5c61cc4{width:min(100%,760px);height:100%;min-height:0;margin:0;outline:none}.payment-shell.jsx-129cf7e4a5c61cc4{width:100%;height:100%;min-height:0;max-height:100%;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--border,rgba(226,232,240,.9));border-radius:0;background:var(--card-bg,var(--surface,#fff));color:var(--text,#0f172a);box-shadow:0 30px 90px rgba(2,6,23,.28)}.payment-header.jsx-129cf7e4a5c61cc4{flex:0 0 auto;display:flex;align-items:flex-start;justify-content:space-between;gap:10px;padding:13px;border-bottom:1px solid var(--border,rgba(226,232,240,.9));background:radial-gradient(circle at top left,color-mix(in srgb,var(--primary-color,#2563eb)10%,transparent),transparent 46%),var(--card-bg,var(--surface,#fff))}.payment-title-row.jsx-129cf7e4a5c61cc4{min-width:0;display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:9px}.checkout-dot.jsx-129cf7e4a5c61cc4{width:36px;height:36px;display:grid;place-items:center;flex:0 0 auto;border-radius:15px;background:linear-gradient(135deg,var(--primary-color,#2563eb),rgba(15,23,42,.92));color:#fff;font-size:15px;box-shadow:0 10px 22px color-mix(in srgb,var(--primary-color,#2563eb)22%,transparent)}.header-copy.jsx-129cf7e4a5c61cc4{min-width:0}.eyebrow.jsx-129cf7e4a5c61cc4,h2.jsx-129cf7e4a5c61cc4,.desc.jsx-129cf7e4a5c61cc4{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eyebrow.jsx-129cf7e4a5c61cc4{margin:0 0 2px;font-size:9px;font-weight:1000;text-transform:uppercase;letter-spacing:.12em;color:var(--primary-color,#2563eb)}h2.jsx-129cf7e4a5c61cc4{margin:0;color:var(--text,#0f172a);font-size:17px;line-height:1.05;font-weight:1000;letter-spacing:-.045em}.desc.jsx-129cf7e4a5c61cc4{max-width:100%;margin:3px 0 0;color:var(--muted,#64748b);font-size:11px;font-weight:750;line-height:1.35}.close-btn.jsx-129cf7e4a5c61cc4{flex:0 0 auto;width:38px;height:38px;display:grid;place-items:center;border:1px solid var(--border,rgba(226,232,240,.9));border-radius:999px;background:var(--card-bg,var(--surface,#fff));color:var(--text,#0f172a);cursor:pointer;font-size:24px;font-weight:900;line-height:1;box-shadow:0 8px 18px rgba(15,23,42,.06)}.close-btn.jsx-129cf7e4a5c61cc4:disabled{cursor:not-allowed;opacity:.55}.payment-body.jsx-129cf7e4a5c61cc4{flex:1 1 auto;min-height:0;overflow-y:auto;display:grid;gap:8px;padding:10px;background:var(--bg,#f8fafc);-webkit-overflow-scrolling:touch}.amount-row.jsx-129cf7e4a5c61cc4,.compact-section.jsx-129cf7e4a5c61cc4,.payment-note.jsx-129cf7e4a5c61cc4{border:1px solid var(--border,rgba(226,232,240,.95));background:var(--card-bg,var(--surface,#fff));box-shadow:0 10px 24px rgba(15,23,42,.04)}.amount-row.jsx-129cf7e4a5c61cc4{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 11px;border-radius:20px}.amount-row.jsx-129cf7e4a5c61cc4 span.jsx-129cf7e4a5c61cc4{min-width:0;display:grid;gap:2px}.amount-row.jsx-129cf7e4a5c61cc4 strong.jsx-129cf7e4a5c61cc4,.amount-row.jsx-129cf7e4a5c61cc4 small.jsx-129cf7e4a5c61cc4{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.amount-row.jsx-129cf7e4a5c61cc4 strong.jsx-129cf7e4a5c61cc4{color:var(--text,#0f172a);font-size:22px;line-height:1;font-weight:1000;letter-spacing:-.055em}.amount-row.jsx-129cf7e4a5c61cc4 small.jsx-129cf7e4a5c61cc4{color:var(--muted,#64748b);font-size:10.5px;font-weight:850;text-transform:capitalize}.amount-row.jsx-129cf7e4a5c61cc4 b.jsx-129cf7e4a5c61cc4{flex:0 0 auto;min-height:26px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;padding:0 9px;background:color-mix(in srgb,var(--primary-color,#2563eb)11%,transparent);color:var(--primary-color,#2563eb);font-size:10px;font-weight:1000}.compact-section.jsx-129cf7e4a5c61cc4{display:grid;gap:8px;padding:10px;border-radius:20px}.section-line.jsx-129cf7e4a5c61cc4{display:flex;align-items:baseline;justify-content:space-between;gap:10px}.section-line.jsx-129cf7e4a5c61cc4 h3.jsx-129cf7e4a5c61cc4{margin:0;color:var(--text,#0f172a);font-size:12px;font-weight:1000;letter-spacing:-.01em}.section-line.jsx-129cf7e4a5c61cc4 p.jsx-129cf7e4a5c61cc4{margin:0;color:var(--muted,#64748b);font-size:10px;font-weight:850;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.method-list.jsx-129cf7e4a5c61cc4,.form-list.jsx-129cf7e4a5c61cc4{display:grid;gap:6px}.method.jsx-129cf7e4a5c61cc4{min-height:50px;display:grid;grid-template-columns:auto minmax(0,1fr)auto;align-items:center;gap:8px;padding:7px;border:1px solid var(--border,rgba(203,213,225,.8));border-radius:16px;background:color-mix(in srgb,var(--card-bg,var(--surface,#fff))94%,var(--primary-color,#2563eb)6%);color:var(--text,#0f172a);cursor:pointer;text-align:left}.method.active.jsx-129cf7e4a5c61cc4{border-color:var(--primary-color,#2563eb);background:color-mix(in srgb,var(--card-bg,var(--surface,#fff))86%,var(--primary-color,#2563eb)14%);box-shadow:0 10px 22px color-mix(in srgb,var(--primary-color,#2563eb)10%,transparent)}.method-icon.jsx-129cf7e4a5c61cc4{width:30px;height:30px;display:grid;place-items:center;border-radius:12px;background:var(--primary-color,#2563eb);color:#fff;font-size:10px;font-weight:1000}.method-main.jsx-129cf7e4a5c61cc4{min-width:0;display:grid;gap:1px}.method.jsx-129cf7e4a5c61cc4 strong.jsx-129cf7e4a5c61cc4,.method.jsx-129cf7e4a5c61cc4 small.jsx-129cf7e4a5c61cc4{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.method.jsx-129cf7e4a5c61cc4 strong.jsx-129cf7e4a5c61cc4{color:var(--text,#0f172a);font-size:12px;font-weight:1000;line-height:1.15}.method.jsx-129cf7e4a5c61cc4 small.jsx-129cf7e4a5c61cc4{color:color-mix(in srgb,var(--text,#0f172a)66%,var(--muted,#64748b)34%);font-size:10px;line-height:1.2;font-weight:800}.method-side.jsx-129cf7e4a5c61cc4 i.jsx-129cf7e4a5c61cc4{width:9px;height:9px;display:block;border-radius:999px;background:color-mix(in srgb,var(--text,#0f172a)45%,var(--muted,#64748b)55%);box-shadow:0 0 0 3px color-mix(in srgb,var(--text,#0f172a)12%,transparent)}.method-side.jsx-129cf7e4a5c61cc4 i.selected.jsx-129cf7e4a5c61cc4{background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.14)}html[data-theme="dark"] .method.jsx-129cf7e4a5c61cc4,html.dark .method.jsx-129cf7e4a5c61cc4{background:color-mix(in srgb,var(--card-bg,var(--surface,#111827))88%,var(--primary-color,#2563eb)12%);border-color:var(--border,rgba(255,255,255,.16));color:var(--text,#fff)}html[data-theme="dark"] .method.active.jsx-129cf7e4a5c61cc4,html.dark .method.active.jsx-129cf7e4a5c61cc4{background:color-mix(in srgb,var(--card-bg,var(--surface,#111827))76%,var(--primary-color,#2563eb)24%);border-color:var(--primary-color,#2563eb)}html[data-theme="dark"] .method.jsx-129cf7e4a5c61cc4 strong.jsx-129cf7e4a5c61cc4,html.dark .method.jsx-129cf7e4a5c61cc4 strong.jsx-129cf7e4a5c61cc4{color:var(--text,#fff)}html[data-theme="dark"] .method.jsx-129cf7e4a5c61cc4 small.jsx-129cf7e4a5c61cc4,html.dark .method.jsx-129cf7e4a5c61cc4 small.jsx-129cf7e4a5c61cc4{color:color-mix(in srgb,var(--text,#fff)78%,var(--muted,rgba(255,255,255,.72))22%)}html[data-theme="dark"] .payment-note.jsx-129cf7e4a5c61cc4,html.dark .payment-note.jsx-129cf7e4a5c61cc4{background:color-mix(in srgb,var(--card-bg,var(--surface,#111827))84%,var(--primary-color,#2563eb)16%);border-color:var(--border,rgba(255,255,255,.16));color:var(--text,#fff)}html[data-theme="dark"] .payment-note.jsx-129cf7e4a5c61cc4 p.jsx-129cf7e4a5c61cc4,html.dark .payment-note.jsx-129cf7e4a5c61cc4 p.jsx-129cf7e4a5c61cc4{color:color-mix(in srgb,var(--text,#fff)82%,var(--muted,rgba(255,255,255,.72))18%)}html[data-theme="dark"] .cancel-btn.jsx-129cf7e4a5c61cc4,html.dark .cancel-btn.jsx-129cf7e4a5c61cc4{background:var(--card-bg,var(--surface,#111827));border-color:var(--border,rgba(255,255,255,.16));color:var(--text,#fff)}html[data-theme="dark"] .cancel-btn.jsx-129cf7e4a5c61cc4:hover:not(:disabled),html.dark .cancel-btn.jsx-129cf7e4a5c61cc4:hover:not(:disabled){background:color-mix(in srgb,var(--card-bg,var(--surface,#111827))82%,var(--primary-color,#2563eb)18%)}.field-row.jsx-129cf7e4a5c61cc4{display:grid;grid-template-columns:82px minmax(0,1fr);align-items:center;gap:8px;min-height:44px;padding:6px;border:1px solid var(--border,rgba(203,213,225,.8));border-radius:16px;background:color-mix(in srgb,var(--muted,#64748b)4%,transparent)}.field-row.jsx-129cf7e4a5c61cc4 span.jsx-129cf7e4a5c61cc4{color:var(--muted,#64748b);font-size:10px;font-weight:1000;text-transform:uppercase;letter-spacing:.06em;padding-left:4px}input.jsx-129cf7e4a5c61cc4,select.jsx-129cf7e4a5c61cc4{width:100%;height:34px;border:0;border-radius:12px;background:var(--input-bg,var(--surface,#fff));color:var(--input-text,var(--text,#0f172a));padding:0 10px;font-size:12px;font-weight:800;outline:none}input.jsx-129cf7e4a5c61cc4::placeholder{color:color-mix(in srgb,var(--muted,#64748b)70%,transparent)}input.jsx-129cf7e4a5c61cc4:focus,select.jsx-129cf7e4a5c61cc4:focus,.method.jsx-129cf7e4a5c61cc4:focus-visible,.close-btn.jsx-129cf7e4a5c61cc4:focus-visible,.cancel-btn.jsx-129cf7e4a5c61cc4:focus-visible,.pay-btn.jsx-129cf7e4a5c61cc4:focus-visible{box-shadow:0 0 0 4px color-mix(in srgb,var(--primary-color,#2563eb)14%,transparent)}.payment-note.jsx-129cf7e4a5c61cc4{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:8px;padding:9px 10px;border:1px solid var(--border,rgba(226,232,240,.95));border-radius:17px;background:color-mix(in srgb,var(--card-bg,var(--surface,#fff))88%,var(--primary-color,#2563eb)12%);color:var(--text,#0f172a)}.status-dot.jsx-129cf7e4a5c61cc4{width:8px;height:8px;border-radius:999px;background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.14)}.payment-note.jsx-129cf7e4a5c61cc4 p.jsx-129cf7e4a5c61cc4{margin:0;color:color-mix(in srgb,var(--text,#0f172a)78%,var(--muted,#64748b)22%);font-size:10.5px;line-height:1.35;font-weight:800}.actions.jsx-129cf7e4a5c61cc4{flex:0 0 auto;display:grid;grid-template-columns:minmax(0,.78fr)minmax(0,1.22fr);gap:8px;padding:10px;border-top:1px solid var(--border,rgba(226,232,240,.95));background:var(--card-bg,var(--surface,#fff))}.cancel-btn.jsx-129cf7e4a5c61cc4,.pay-btn.jsx-129cf7e4a5c61cc4{min-height:42px;padding:0 12px;border:0;border-radius:999px;cursor:pointer;font-size:12px;font-weight:1000}.cancel-btn.jsx-129cf7e4a5c61cc4{border:1px solid var(--border,rgba(226,232,240,.95));background:var(--card-bg,var(--surface,#fff));color:var(--text,#0f172a)}.cancel-btn.jsx-129cf7e4a5c61cc4:hover:not(:disabled){background:color-mix(in srgb,var(--primary-color,#2563eb)8%,var(--card-bg,var(--surface,#fff)))}.pay-btn.jsx-129cf7e4a5c61cc4{color:#fff;background:linear-gradient(135deg,var(--primary-color,#2563eb),#1d4ed8);box-shadow:0 12px 26px color-mix(in srgb,var(--primary-color,#2563eb)24%,transparent)}.cancel-btn.jsx-129cf7e4a5c61cc4:disabled,.pay-btn.jsx-129cf7e4a5c61cc4:disabled{cursor:not-allowed;opacity:.65}@media(min-width:640px){.payment-backdrop.jsx-129cf7e4a5c61cc4{align-items:stretch}.method-list.jsx-129cf7e4a5c61cc4{grid-template-columns:repeat(2,minmax(0,1fr))}.method.jsx-129cf7e4a5c61cc4:first-child{grid-column:1/-1}}@media(max-width:420px){.payment-backdrop.jsx-129cf7e4a5c61cc4{padding:0}.payment-modal.jsx-129cf7e4a5c61cc4{width:100%}.payment-shell.jsx-129cf7e4a5c61cc4{height:100%;max-height:100%;border-right:0;border-bottom:0;border-left:0;border-radius:0}.payment-header.jsx-129cf7e4a5c61cc4{padding:12px}.payment-body.jsx-129cf7e4a5c61cc4{padding:8px}.field-row.jsx-129cf7e4a5c61cc4{grid-template-columns:74px minmax(0,1fr)}.amount-row.jsx-129cf7e4a5c61cc4 strong.jsx-129cf7e4a5c61cc4{font-size:20px}}@media(prefers-reduced-motion:reduce){*.jsx-129cf7e4a5c61cc4,*.jsx-129cf7e4a5c61cc4::before,*.jsx-129cf7e4a5c61cc4::after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}'})]}),document.body)}var p=a(41660),u=a(4032);function m({children:e}){return"u"<typeof document?null:(0,n.createPortal)(e,document.body)}let h=["test","live"].includes((a(41463).env.NEXT_PUBLIC_STUDENT_PRICED_CHECKOUT_MODE||"off").toLowerCase()),f="eleeveon_owner_student_checkout_quote",x={offlineSync:"Offline-first synchronization",cloudBackup:"Cloud backup",reports:"Assessment and reports",finance:"Finance",attendance:"Attendance",identityCards:"ID cards",identitySafety:"Identity and safety",transport:"Transport",schoolWebsites:"School websites",communications:"Communication",calendarScheduling:"Calendar and scheduling",teacherPortal:"Teacher workspace",parentPortal:"Parent portal",studentPortal:"Student portal",advancedAnalytics:"Advanced analytics",apiAccess:"API access"},b=e=>String(e??"").trim().toLowerCase(),g=e=>{if(!e)return"No scheduled expiry";let t=new Date(e);return isNaN(t.getTime())?"Not available":t.toLocaleDateString("en-GH",{year:"numeric",month:"short",day:"numeric"})};function y(e){let t=b(e.licenseModel);return"trial"===t?"trial":"complimentary"===t||"pilot"===t?"complimentary":"perpetual"===t?"perpetual":"subscription"}function v(e){let t=e.metadata;return t?.publicVisible===!1||["private","internal","hidden"].includes(b(t?.visibility))||Array.isArray(e.availableAcquisitionModes)&&e.availableAcquisitionModes.length>0&&e.availableAcquisitionModes.every(e=>["private_offer","complimentary","pilot","internal"].includes(b(e)))}function w(e){let t=b(e.deploymentMode);return t.includes("multi_device")?"Independent Multi-device":t.includes("essentials")?"Independent Essentials":t.includes("private")||t.includes("hosted")?"Private deployment":"Eleeveon Cloud"}function j(e){return"trial"===y(e)?"Free trial":"complimentary"===y(e)||v(e)?"Private arrangement":"perpetual"===y(e)?"One-time licence":"Cloud subscription"}function k(e){let t=e.metadata?.pricing;return t&&["fixed","per_student","tiered"].includes(t.mode)?t:{mode:"fixed"}}function S(e,t){return"yearly"===t?Number(e.priceYearly||0):"termly"===t?Number(e.priceTermly||0)||4*Number(e.priceMonthly||0):Number(e.priceMonthly||0)}function N(e,t,a){if("trial"===y(e)||"complimentary"===y(e))return{amount:0,period:"trial",estimated:!1};if("perpetual"===y(e))return{amount:Number(e.priceOneTime||0),period:"one-time",estimated:!1};let r=k(e);return"fixed"!==r.mode?{amount:(0,u.B)(r,t),period:r.billingPeriod||"termly",estimated:!0}:{amount:S(e,a),period:a,estimated:!1}}function C(e){let t="trial"===b(e?.status),a=e?.trialEndsAt?Date.parse(e.trialEndsAt):NaN,r=Number.isFinite(a),i=t&&r&&a<=Date.now(),n=t&&r?Math.max(0,Math.ceil((a-Date.now())/864e5)):null;return{trial:t,known:r,expired:i,days:n,endsAt:e?.trialEndsAt||null}}function _(e){let t=e.metadata?.featureFlags||{},a=new Set([...e.features||[],...e.metadata?.featureKeys||[],...Object.keys(t).filter(e=>!0===t[e])]),r=[null==e.maxSchools?"Flexible schools":`${e.maxSchools} schools`,null==e.maxBranches?"Flexible branches":`${e.maxBranches} branches`,null==e.maxUsers?"Flexible users":`${e.maxUsers} users`,null==e.maxStudents?"Flexible students":`${e.maxStudents} students`,null==e.maxTeachers?"Flexible teachers":`${e.maxTeachers} teachers`];for(let i of a)!1!==t[i]&&!1!==e[i]&&r.push(x[i]||i.replace(/([a-z])([A-Z])/g,"$1 $2"));return Array.from(new Set(r))}function q(){let e,t,a,n,o,s,l,u,x,[q,I]=(0,i.useState)([]),[A,R]=(0,i.useState)(null),[$,F]=(0,i.useState)("termly"),[M,D]=(0,i.useState)(200),[U,L]=(0,i.useState)(""),[O,Y]=(0,i.useState)(!0),[G,H]=(0,i.useState)(""),[V,B]=(0,i.useState)(""),[W,K]=(0,i.useState)(!1),[J,Q]=(0,i.useState)(null),[X,Z]=(0,i.useState)(null),[ee,et]=(0,i.useState)(null),[ea,er]=(0,i.useState)(null),[ei,en]=(0,i.useState)(!1),[eo,es]=(0,i.useState)(""),[ec,el]=(0,i.useState)(!1),[ed,ep]=(0,i.useState)(""),[eu,em]=(0,i.useState)(null),[eh,ef]=(0,i.useState)(null),[ex,eb]=(0,i.useState)(null),[eg,ey]=(0,i.useState)(null),[ev,ew]=(0,i.useState)(null),ej=(0,c.Gi)();async function ek(e=!1){try{Y(!0),H(""),e||B("");let[t,a]=await Promise.all([fetch(`${ej}/billing/plans`,{headers:(0,c.Pw)()}),fetch(`${ej}/billing/my-subscription`,{headers:(0,c.Pw)()})]);if(!t.ok)throw Error(`Unable to load packages (${t.status}).`);let r=await (0,c.Vh)(t),i=(e=>{if(Array.isArray(e))return e;for(let t of["plans","data","items","results"])if(Array.isArray(e?.[t]))return e[t];return[]})(r).filter(e=>!1!==e.active);if(I(i),a.ok){let e=await (0,c.Vh)(a);R(e?.subscription||e?.data||e||null)}else if(404===a.status)R(null);else throw Error(`Unable to load your current package (${a.status}).`);let n=new URLSearchParams(window.location.search),o=n.get("billingCycle");("monthly"===o||"termly"===o||"yearly"===o)&&F(o);let s=n.get("planId");if(s&&"1"===n.get("checkout")){let e=i.find(e=>e.id===s);if(e&&"subscription"===y(e)&&"fixed"!==k(e).mode&&h){let t=Number(n.get("students"));Number.isSafeInteger(t)&&t>0&&D(t),Z(e)}else e&&"subscription"===y(e)&&"fixed"===k(e).mode&&S(e,"monthly"===o||"termly"===o||"yearly"===o?o:"termly")>0?Q(e):B("This package is not currently available for online checkout.");let t=new URL(window.location.href);["planId","checkout","billingCycle","students","source"].forEach(e=>t.searchParams.delete(e)),window.history.replaceState({},"",t.toString())}}catch(e){H(e instanceof Error?e.message:"Could not load packages.")}finally{Y(!1)}}async function eS(e,t){let a=await fetch(`${ej}${e}`,{method:t?"POST":"GET",headers:{...(0,c.Pw)(),...t?{"Content-Type":"application/json"}:{}},...t?{body:JSON.stringify(t)}:{}}),r=await (0,c.Vh)(a);if(!a.ok)throw Error(String(r?.message||r?.error||`Request failed (${a.status}).`));return r}function eN(e){Z(e),er(null),ep(""),em(null);try{sessionStorage.getItem(f)&&ep("A previous checkout was started. Check its status before requesting another payment.")}catch{}}async function eC(){if(X&&!ei){try{if(sessionStorage.getItem(f))return void ep("Review the previous quotation first. Do not create another payment request until it is resolved.")}catch{}en(!0),ep("");try{let e=await eS("/billing/subscription-quotes",{toPlanId:X.id,billingCycle:k(X).billingPeriod||"termly",changeType:A?.id&&"active"===b(A.status)&&A.planId===X.id?A?.metadata?.prepaidStudentLimit&&M>A.metadata.prepaidStudentLimit?"upgrade":"renewal":"new",effectiveMode:"immediate",requestedStudentCount:M});if(!e.id||e.toPlanId!==X.id||!Number.isFinite(e.amountDue)||e.amountDue<=0||"GHS"!==e.currency||"quoted"!==e.status||!e.calculation?.studentCount||new Date(e.quoteExpiresAt).getTime()<=Date.now())throw Error("The server did not return a valid payable student quotation.");er(e);try{sessionStorage.setItem(f,e.id)}catch{}ew(e.id)}catch(e){ep(e instanceof Error?e.message:"Unable to prepare quotation.")}finally{en(!1)}}}function e_(){try{sessionStorage.removeItem(f)}catch{}ew(null),em(null),ey(null)}async function eq(){let e="payment_pending"===ex&&"failed"===eg;if(ev&&!ei&&ea&&ea.id===ev&&("quoted"===ex||e)&&window.confirm(e?"Request cancellation of this failed Paystack checkout? The server will independently re-verify the payment status with Paystack. If it is pending, paid, or uncertain, cancellation will be refused. This does not issue a refund.":"Cancel this unused quotation on the server? This will not cancel a Paystack payment or refund a transaction.")){en(!0),ef({kind:"info",text:"Checking cancellation with the server…"});try{let t=await fetch(`${ej}/billing/subscription-quotes/${encodeURIComponent(ev)}/cancel`,{method:"POST",headers:(0,c.Pw)()});if(await (0,c.Vh)(t),!t.ok)throw Error("The server did not confirm cancellation.");e_(),er(null),eb("cancelled"),Z(null),ef({kind:"success",text:e?"The backend confirmed a terminal failed Paystack transaction and cancelled this quotation. You may start another quotation.":"The server cancelled this unused quotation. You may request a new quotation now."})}catch(e){ef({kind:"error",text:`Cancellation was not confirmed: ${e instanceof Error?e.message:"Unknown error"}. Do not initiate a duplicate payment.`})}finally{en(!1)}}}async function ez(){let e=ev||ea?.id||(()=>{try{return sessionStorage.getItem(f)}catch{return null}})();if(e&&!ei){en(!0),ep(""),ef({kind:"info",text:"Checking the quotation and Paystack status with the server. No new payment will be initiated."}),em(null);try{let t=await eS(`/billing/subscription-quotes/${encodeURIComponent(e)}/recover`),a=await eS(`/billing/subscription-quotes/${encodeURIComponent(e)}`);if(a.id!==e||t.changeOrderId!==e)throw Error("The server returned an inconsistent quotation reference. Please contact support.");er(a),eb(a.status),ey(t.paymentStatus??null);let r=function(e){if("string"!=typeof e||!e.startsWith("https://"))return null;try{let t=new URL(e).hostname.toLowerCase();return"paystack.com"===t||t.endsWith(".paystack.com")?e:null}catch{return null}}(t.authorizationUrl);if(em(r),"applied"===a.status&&t.applied)e_(),Z(null),el(!1),await ek(!0),ef({kind:"success",text:"The server confirms this subscription change was applied. Your package and entitlements should now be refreshed."}),B("The server confirms your subscription was activated.");else if("quoted"===a.status){let e=Date.parse(a.quoteExpiresAt)<=Date.now();ef({kind:e?"warning":"info",text:e?"This quotation has expired without a confirmed payment. You may cancel it on the server, then request a fresh one.":"This quotation has not started payment. Choose Resume quotation to continue with the existing verified amount, or cancel it on the server."}),X&&X.id===a.toPlanId&&ep("")}else r?ef({kind:"info",text:"Your earlier Paystack session is available. Select Continue existing Paystack session below. Do not create a second payment."}):t.requiresManualReview||["payment_pending","checkout_initializing","paid"].includes(a.status)?ef({kind:"warning",text:"payment_pending"===a.status&&"failed"===t.paymentStatus?"The locally recorded payment is failed. You can request cancellation below. The server must independently verify a terminal failure with Paystack before releasing this quotation; no payment or refund is initiated by the check.":`The order is ${a.status.replace(/_/g," ")}${t.paymentStatus?` (payment: ${t.paymentStatus})`:""}. No resumable Paystack link is available. Keep the reference and request reconciliation; do not pay again.`}):["cancelled","expired"].includes(a.status)?(e_(),ef({kind:"info",text:`The server confirms this quotation is ${a.status}. You may request a new quotation.`})):ef({kind:"warning",text:`The server reports quotation status: ${a.status}. No new payment was started. Keep the reference and contact support if this does not resolve.`})}catch(t){let e=t instanceof Error?t.message:"Could not refresh payment status.";ef({kind:"error",text:`Status check failed: ${e}. Keep your quotation reference; do not start another payment until its status is confirmed.`}),B("")}finally{en(!1)}}}async function eP(){if(ev&&!ei&&"paid"===ex&&"paid"===eg){en(!0),ef({kind:"info",text:"Verifying the existing Paystack payment and applying your subscription. No new payment will be created."});try{let e=await fetch(`${ej}/billing/subscription-quotes/${encodeURIComponent(ev)}/reconcile`,{method:"POST",headers:(0,c.Pw)()}),t=await (0,c.Vh)(e);if(!e.ok)throw Error(String(t?.message||t?.error||`Reconciliation failed (${e.status}).`));if(t?.changeOrderId!==ev)throw Error("The server returned a different order reference.");!0===t.applied&&"applied"===t.status?(e_(),er(null),Z(null),eb("applied"),await ek(!0),ef({kind:"success",text:"Paystack payment verified. Your paid subscription has been activated and the subscription details have been refreshed."})):(eb(String(t.status||"paid")),ef({kind:"warning",text:"Payment is recorded but subscription activation is not yet complete. The original payment is preserved. Please request reconciliation again or contact Eleeveon support; do not pay twice."}))}catch(e){ef({kind:"error",text:`Unable to complete reconciliation: ${e instanceof Error?e.message:"Unknown error"}. Your paid record is preserved. Do not pay again.`})}finally{en(!1)}}}async function eE(e){try{B("Verifying payment with the server...");let t=await fetch(`${ej}/billing/payments/verify/${encodeURIComponent(e)}?provider=paystack`,{headers:(0,c.Pw)()});if(await (0,c.Vh)(t),!t.ok)throw Error("Payment could not be verified.");await ek(!0),B("The provider verification request completed. Your paid access is confirmed only when your subscription and entitlement are active.");let a=new URL(window.location.href);a.searchParams.delete("reference"),window.history.replaceState({},"",a.toString())}catch(e){H(e instanceof Error?e.message:"Verification failed.")}}(0,i.useEffect)(()=>{try{ew(sessionStorage.getItem(f))}catch{}ek();let e=new URLSearchParams(window.location.search).get("reference");e&&eE(e)},[]);let eT=(0,i.useMemo)(()=>{let e=b(U),t=A?.plan,a=q.filter(e=>!v(e)||e.id===t?.id||e.id===A?.planId);return t&&!a.some(e=>e.id===t.id)&&a.unshift(t),a.filter(t=>!e||[t.name,t.code,t.description,j(t),w(t),..._(t)].join(" ").toLowerCase().includes(e)).sort((e,t)=>Number(e.metadata?.displayOrder??999)-Number(t.metadata?.displayOrder??999))},[q,A,U]),eI=(0,i.useMemo)(()=>eT.filter(e=>"subscription"===y(e)&&"fixed"!==k(e).mode&&!v(e)),[eT]),eA=C(A),eR=function(e){if(!e)return!1;let t=b(e.status),a=e.plan?y(e.plan):"subscription";return"trial"===t?!C(e).expired:"active"===t&&("trial"===a||"complimentary"===a||(e.plan&&(v(e.plan)||b(e.plan.code).startsWith("pilot_")),!0))}(A),e$=["expired","suspended","cancelled"].includes(b(A?.status))||eA.expired,eF=eA.trial&&eA.known&&!eA.expired&&null!==eA.days&&eA.days<=7,eM=eT.filter(eD);function eD(e){return"subscription"===y(e)&&!v(e)&&("fixed"===k(e).mode?S(e,$)>0:h)}function eU(){L(""),window.requestAnimationFrame(()=>document.getElementById("owner-commercial-packages")?.scrollIntoView({behavior:"smooth",block:"start"}))}let eL=A?.planId||A?.plan?.id,eO=A?.plan||q.find(e=>e.id===eL),eY=b(A?.status),eG="trial"===eY,eH=!!A&&["pending","pending_payment","unpaid","processing"].includes(eY);return(0,r.jsxs)("main",{className:"ba-page subscription-page",children:[(0,r.jsx)("style",{children:T}),(0,r.jsxs)("section",{className:"ba-search-card","aria-label":"Package search and actions",children:[(0,r.jsxs)("label",{className:"ba-search",children:[(0,r.jsx)("span",{children:"⌕"}),(0,r.jsx)("input",{value:U,onChange:e=>L(e.target.value),placeholder:"Search packages...","aria-label":"Search packages"})]}),(0,r.jsx)("button",{type:"button",className:"ba-add-inline",onClick:()=>F(e=>"monthly"===e?"termly":"termly"===e?"yearly":"monthly"),title:"Change fixed subscription billing period",children:"monthly"===$?"Month":"termly"===$?"Term":"Year"}),(0,r.jsx)("button",{type:"button",className:"ba-filter-button",onClick:()=>void ek(),disabled:O,"aria-label":"Refresh",children:"↻"}),(0,r.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>K(!0),"aria-label":"More options",children:"⋯"})]}),(0,r.jsx)("style",{children:".trial-conversion-notice{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;padding:12px 14px;border-radius:15px;border:1px solid var(--border,rgba(148,163,184,.3));background:var(--card-bg,var(--surface,#fff))}.trial-conversion-notice>div{flex:1 1 240px;min-width:0}.trial-conversion-notice strong{font-size:14px}.trial-conversion-notice p{margin:4px 0;font-size:12px;line-height:1.45}.trial-conversion-notice small{display:block;color:var(--muted,#64748b);font-size:11px}.trial-conversion-notice button{border:0;border-radius:12px;background:var(--primary-color,#2563eb);color:white;padding:10px 13px;font-weight:800;cursor:pointer}.trial-conversion-notice button:focus-visible{outline:2px solid currentColor;outline-offset:3px}.trial-conversion-notice .recovery-feedback{flex:1 1 100%;margin:0;padding:10px 12px;border:1px solid var(--border,rgba(148,163,184,.3));border-radius:10px;line-height:1.5;font-size:12px;overflow-wrap:anywhere}.recovery-feedback.info{color:var(--text,#334155)}.recovery-feedback.success{color:#15803d}.recovery-feedback.warning{color:#b45309}.recovery-feedback.error{color:#b91c1c}.trial-conversion-notice a{display:inline-flex;align-items:center;justify-content:center;padding:10px 13px;border-radius:12px;border:1px solid var(--border,rgba(148,163,184,.3));color:var(--text,#334155);font-weight:800;text-decoration:underline}"}),(0,r.jsxs)("section",{className:"ba-list compact-status-list","aria-label":"Current commercial arrangement",children:[(0,r.jsxs)("button",{type:"button",className:"status-row",onClick:()=>K(!0),children:[(0,r.jsx)("span",{className:"status-icon",children:eR?"✓":eH?"!":"○"}),(0,r.jsxs)("span",{className:"status-main",children:[(0,r.jsx)("strong",{children:eO?.name||"Choose your package"}),(0,r.jsxs)("small",{children:[eO?j(eO):"No active package"," \xb7 ",A?.status||"Not selected"]}),(0,r.jsx)("em",{children:eA.expired?`Trial ended ${g(eA.endsAt)}`:eG?`Trial ends ${g(A?.trialEndsAt||A?.currentPeriodEnd)}`:eH?"Awaiting confirmation":eR?`Access active \xb7 ${g(A?.currentPeriodEnd)}`:"Explore available packages"})]}),(0,r.jsxs)("span",{className:"status-side",children:[(0,r.jsx)("span",{className:`status-dot-mini ${eR?"green":eH?"orange":"gray"}`}),(0,r.jsx)("i",{children:"⋯"})]})]}),e$?(0,r.jsxs)("section",{className:"trial-conversion-notice",role:"status",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Your package needs attention"}),(0,r.jsxs)("p",{children:[eA.expired?`Your trial ended on ${g(eA.endsAt)}.`:`Your subscription status is ${A?.status||"restricted"}.`," Your school records are not deleted. Access and permitted actions depend on the server's effective entitlement."]}),(0,r.jsx)("small",{children:eM.length?"Select a supported paid cloud package below to begin checkout. A package is activated only after the server confirms payment.":"No self-service paid package is currently available. Please contact Eleeveon for conversion."})]}),(0,r.jsx)("button",{type:"button",onClick:eU,children:"View paid packages"})]}):null,eF?(0,r.jsxs)("section",{className:"trial-conversion-notice",role:"status",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:0===eA.days?"Trial ends today":`${eA.days} day${1===eA.days?"":"s"} left in your trial`}),(0,r.jsxs)("p",{children:["Your trial ends ",g(eA.endsAt),". Choose a supported paid package before it ends to avoid an interruption."]})]}),(0,r.jsx)("button",{type:"button",onClick:eU,children:"Explore paid packages"})]}):null,ev?(0,r.jsxs)("section",{className:"trial-conversion-notice",role:"status",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Unresolved subscription quotation"}),(0,r.jsx)("p",{children:"A previous checkout or quotation is recorded on this device. Check it before starting another payment. A status check does not charge you."}),(0,r.jsxs)("small",{children:["Reference: ",ev]})]}),(0,r.jsx)("button",{type:"button",disabled:ei,onClick:()=>void ez(),children:ei?"Checking…":"Check payment / subscription status"}),eh?(0,r.jsx)("p",{role:"status","aria-live":"polite",className:`recovery-feedback ${eh.kind}`,children:eh.text}):null,"quoted"===ex&&ea?.id===ev&&Date.parse(ea.quoteExpiresAt)>Date.now()?(0,r.jsx)("button",{type:"button",disabled:ei,onClick:function(){if(!ea||"quoted"!==ea.status)return;if(Date.parse(ea.quoteExpiresAt)<=Date.now())return void ef({kind:"warning",text:"This quotation has expired. Check its status and cancel it on the server before requesting a replacement."});let e=q.find(e=>e.id===ea.toPlanId);e?(Z(e),ep(""),el(!1)):ef({kind:"warning",text:"This quotation's plan is not available in the current catalogue. Refresh and contact support before paying."})},children:"Resume quotation"}):null,("quoted"===ex||"payment_pending"===ex&&"failed"===eg)&&ea?.id===ev?(0,r.jsx)("button",{type:"button",className:"cancel-quote-button",disabled:ei,onClick:()=>void eq(),children:"quoted"===ex?"Cancel unused quotation":"Cancel failed checkout"}):null,"paid"===ex&&"paid"===eg&&ea?.id===ev?(0,r.jsx)("button",{type:"button",disabled:ei,onClick:()=>void eP(),children:"Reconcile paid payment & activate subscription"}):null,eu?(0,r.jsx)("a",{href:eu,target:"_blank",rel:"noopener noreferrer",children:"Continue existing Paystack session"}):null]}):null,eH?(0,r.jsx)(P,{tone:"orange",children:"A pending package requires confirmation before activation. Do not make a duplicate payment until the invoice and provider status have been checked."}):null,V?(0,r.jsx)(P,{tone:"green",children:V}):null,G?(0,r.jsx)(P,{tone:"red",children:G}):null,O?(0,r.jsx)(P,{tone:"gray",children:"Loading packages..."}):null]}),!O&&A?(0,r.jsx)(p.A,{refreshKey:`${A?.id||""}:${A?.status||""}:${A?.trialEndsAt||""}`,onExplorePackages:eU}):null,O||A?null:(0,r.jsx)(P,{tone:"orange",children:"No subscription is assigned to this account. You can prepay for a new Standard subscription before enrolling students; your purchased places are assigned after verified payment."}),(0,r.jsxs)("section",{className:"quote-panel","aria-label":"Instant student quotation",children:[(0,r.jsxs)("div",{className:"quote-heading",children:[(0,r.jsx)("strong",{children:"Get an instant student quote"}),(0,r.jsx)("small",{children:"Enter the number of students. Estimated prices appear here, regardless of the package cards below."})]}),(0,r.jsxs)("div",{className:"quote-layout",children:[(0,r.jsx)(z,{value:M,onChange:D,label:"Student places"}),(0,r.jsx)("div",{className:"quote-results",children:eI.length?eI.map(e=>{let t=N(e,M,$);return(0,r.jsxs)("div",{className:"quote-result",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:e.name}),(0,r.jsxs)("small",{children:[w(e)," \xb7 /",t.period]})]}),(0,r.jsx)("b",{children:null==t.amount?"Quote unavailable":(0,c.TG)(t.amount,e.currency||"GHS")})]},e.id)}):(0,r.jsx)("div",{className:"quote-result",children:(0,r.jsx)("span",{children:"No published per-student pricing available."})})})]}),(0,r.jsx)("small",{className:"quote-disclaimer",children:"Estimates only. Your invoice and payment amount must be confirmed by the server. No payment is initiated by entering a student count."})]}),O||eT.length?null:(0,r.jsxs)("section",{className:"ba-empty",children:[(0,r.jsx)("h3",{children:"No packages found"}),(0,r.jsx)("p",{children:"Try adjusting your search."})]}),(0,r.jsx)("section",{id:"owner-commercial-packages",className:"plans-grid","aria-label":"Commercial packages",children:eT.map(e=>{let t=N(e,M,$),a=!!eL&&eL===e.id&&eR,i=!!eL&&eL===e.id&&eH,n=a&&"subscription"===y(e)&&"fixed"!==k(e).mode,o=!n&&(a||!eD(e));return(0,r.jsxs)("article",{className:a?"plan current":i?"plan waiting":"plan",children:[a?(0,r.jsx)("div",{className:"ribbon",children:"Current"}):i?(0,r.jsx)("div",{className:"ribbon waiting-ribbon",children:"Pending"}):null,(0,r.jsxs)("div",{children:[(0,r.jsxs)("span",{className:"badge",children:[e.code," \xb7 ",j(e)]}),(0,r.jsx)("h2",{children:e.name}),(0,r.jsx)("p",{children:e.description||"An Eleeveon Schools package."})]}),(0,r.jsxs)("div",{className:"price",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"trial"===y(e)||"complimentary"===y(e)?"Included":null==t.amount?"Request quote":(0,c.TG)(t.amount,e.currency||"GHS")}),(0,r.jsx)("span",{children:"trial"===y(e)?`\xb7 ${Number(e.metadata?.trialDays||14)}-day trial`:"perpetual"===y(e)?"\xb7 one-time licence":"complimentary"===y(e)?"\xb7 complimentary":`/${t.period}`})]}),(0,r.jsx)("small",{children:t.estimated?`Estimate for ${M.toLocaleString()} students`:"perpetual"===y(e)?w(e):"trial"===y(e)?"No upfront payment":"Price is configured by the package"})]}),(0,r.jsx)("ul",{children:_(e).slice(0,16).map(e=>(0,r.jsxs)("li",{children:["✓ ",e]},e))}),(0,r.jsx)("button",{type:"button",disabled:o,onClick:()=>n?(D(Math.max(M,Number(A?.metadata?.prepaidStudentLimit||0)+1)),et(e)):"fixed"===k(e).mode?Q(e):eN(e),children:a&&"subscription"===y(e)&&"fixed"!==k(e).mode?"Increase student capacity":a?"Current package":"trial"===y(e)?"Trial activation coming soon":"perpetual"===y(e)?"Licence checkout coming soon":"fixed"!==k(e).mode?h?"Get verified quote":"Student checkout not yet enabled":"complimentary"===y(e)?"Managed by Eleeveon":S(e,$)>0?"Choose payment":"Contact Eleeveon"})]},e.id)})}),ee?(0,r.jsx)(m,{children:(0,r.jsx)("div",{className:"ba-sheet-backdrop",role:"presentation",children:(0,r.jsxs)("section",{className:"ba-sheet small",role:"dialog","aria-modal":"true","aria-label":"Increase purchased student capacity",children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Increase student capacity"}),(0,r.jsx)("p",{children:"Existing Standard subscription \xb7 keep the same expiry date"})]}),(0,r.jsx)("button",{type:"button",onClick:()=>et(null),"aria-label":"Close upgrade panel",children:"✕"})]}),(0,r.jsx)("div",{className:"student-checkout-content",children:(e=Number(A?.metadata?.prepaidStudentLimit),t=A?.currentPeriodStart?new Date(A.currentPeriodStart).getTime():NaN,a=A?.currentPeriodEnd?new Date(A.currentPeriodEnd).getTime():NaN,n=Date.now(),o=Number.isFinite(t)&&Number.isFinite(a)&&a>t&&a>n?Math.max(0,Math.min(1,(a-n)/(a-t))):null,s=Number.isSafeInteger(e)&&e>0?N(ee,e,$).amount:null,l=Number.isSafeInteger(e)&&e>0&&M>e?N(ee,M,$).amount:null,u=null!==s&&null!==l?Math.max(0,l-s):null,x=null!==o&&null!==u?Math.round(u*o*100)/100:null,(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"student-checkout-quote",children:[(0,r.jsxs)("strong",{children:["Current paid allowance: ",Number.isSafeInteger(e)&&e>0?e.toLocaleString():"Not available"]}),(0,r.jsxs)("span",{children:["Subscription ends: ",g(A?.currentPeriodEnd)]})]}),(0,r.jsx)(z,{value:M,onChange:D,label:"New TOTAL student allowance (not additional places)"}),Number.isSafeInteger(e)&&e>0&&M<=e?(0,r.jsxs)("p",{role:"alert",className:"student-checkout-error",children:["Enter a total greater than your existing allowance of ",e,"."]}):null,null!==x&&M>e?(0,r.jsxs)("div",{className:"student-checkout-quote",children:[(0,r.jsxs)("strong",{children:["Indicative remaining-term difference: GHS ",x.toFixed(2)]}),(0,r.jsxs)("span",{children:[M-e," additional places \xb7 ",Math.round((o??0)*100),"% of the existing period remaining"]}),(0,r.jsx)("small",{children:"For illustration only: not a payable quotation or an invoice."})]}):(0,r.jsx)("p",{children:"Once the server confirms your existing allowance and remaining term, it will calculate the upgrade balance."}),(0,r.jsx)("p",{role:"status",children:"The backend will calculate your remaining-term charge and round up to the next whole GH₵ because the current billing records store whole cedis. The original expiry date will not change."}),(0,r.jsx)("button",{type:"button",className:"student-checkout-primary",disabled:!h||!Number.isSafeInteger(e)||e<1||M<=e||!o||ei,onClick:()=>{et(null),eN(ee)},children:"Get verified upgrade quote & pay"}),(0,r.jsx)("button",{type:"button",onClick:()=>et(null),children:"Not now"})]}))})]})})}):null,W?(0,r.jsx)(m,{children:(0,r.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,r.jsxs)("section",{className:"ba-sheet small",children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Package details"}),(0,r.jsx)("p",{children:"Your current commercial arrangement"})]}),(0,r.jsx)("button",{type:"button",onClick:()=>K(!1),children:"✕"})]}),(0,r.jsxs)("div",{className:"sub-info-list",children:[(0,r.jsx)(E,{label:"Package",value:eO?.name||"None"}),(0,r.jsx)(E,{label:"Type",value:eO?j(eO):"Not selected"}),(0,r.jsx)(E,{label:"Deployment",value:eO?w(eO):"—"}),(0,r.jsx)(E,{label:"Status",value:A?.status||"None"}),(0,r.jsx)(E,{label:"Access until",value:g(A?.trialEndsAt||A?.currentPeriodEnd)}),(0,r.jsx)(E,{label:"Payment recorded",value:A?.payments?.some(e=>"paid"===b(e.status))||A?.invoices?.some(e=>"paid"===b(e.status))?"Yes":"No paid record in this response"})]}),(0,r.jsx)("div",{className:"cycle-sheet",children:["termly","monthly","yearly"].map(e=>(0,r.jsx)("button",{type:"button",className:$===e?"active":"",onClick:()=>F(e),children:e},e))}),(0,r.jsx)("div",{className:"ba-menu-list",children:(0,r.jsxs)("button",{type:"button",onClick:()=>{K(!1),ek()},children:[(0,r.jsx)("span",{children:"↻"}),(0,r.jsx)("b",{children:"Refresh"}),(0,r.jsx)("small",{children:"Reload account and catalogue"})]})})]})})}):null,X?(0,r.jsx)(m,{children:(0,r.jsx)("div",{className:"ba-sheet-backdrop",role:"presentation",children:(0,r.jsxs)("section",{className:"ba-sheet small",role:"dialog","aria-modal":"true","aria-label":"Verified student subscription checkout",children:[(0,r.jsxs)("div",{className:"ba-sheet-head",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:X.name}),(0,r.jsx)("p",{children:"Verified server quotation \xb7 Paystack"})]}),(0,r.jsx)("button",{type:"button",disabled:ei,onClick:()=>{Z(null),er(null),el(!1)},children:"✕"})]}),(0,r.jsxs)("div",{className:"student-checkout-content",children:[(0,r.jsx)("p",{children:A?.planId===X.id&&A?.status==="active"&&M>Number(A?.metadata?.prepaidStudentLimit||0)?`Increase your existing allowance from ${A?.metadata?.prepaidStudentLimit||"—"} to ${M} places. You will pay only the rounded remaining-term difference. Expiry: ${g(A?.currentPeriodEnd)}.`:"Prepay for student places. The backend verifies your allowance and calculates the payable amount."}),ea?null:(0,r.jsx)(z,{value:M,onChange:D,label:"Places to prepay",disabled:ei}),ea?(0,r.jsxs)("div",{className:"student-checkout-quote",children:[(0,r.jsx)("strong",{children:(0,c.TG)(ea.amountDue,ea.currency)}),(0,r.jsxs)("span",{children:[ea.calculation?.studentCount??"—"," prepaid student places \xb7 expires ",g(ea.quoteExpiresAt)]}),(0,r.jsxs)("small",{children:["Quotation status: ",ea.status,ea.calculation?.upgradeFromSeats?` \xb7 Upgrade ${ea.calculation.upgradeFromSeats} → ${ea.calculation.upgradeToSeats} places \xb7 Expiry unchanged: ${g(ea.calculation.upgradePeriodEnd)} \xb7 Rounded up to whole GH₵`:""]})]}):null,ed?(0,r.jsx)("p",{role:"alert",className:"student-checkout-error",children:ed}):null,ea?null:(0,r.jsx)("button",{type:"button",className:"student-checkout-primary",disabled:ei,onClick:()=>void eC(),children:ei?"Preparing quotation…":"Get server quotation"}),ea?.status==="quoted"?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{type:"button",className:"student-checkout-primary",disabled:ei||new Date(ea.quoteExpiresAt).getTime()<=Date.now(),onClick:()=>el(!0),children:"Continue to secure payment"})}):null,(0,r.jsx)("button",{type:"button",disabled:ei,onClick:()=>void ez(),children:"Check existing quotation / payment status"}),eu&&(0,r.jsx)("a",{href:eu,rel:"noopener noreferrer",target:"_blank",className:"ba-btn",children:"Continue existing Paystack checkout"}),(0,r.jsx)("small",{children:"Never pay twice for an unconfirmed order. Your subscription only activates after verified settlement."})]})]})})}):null,ec&&ea&&X?(0,r.jsx)(d,{open:!0,purpose:"subscription_quote",quoteId:ea.id,title:`Pay for ${X.name}`,description:`Prepaid allowance for ${ea.calculation?.studentCount??"your"} student places. Access activates only after verified payment.`,amount:ea.amountDue,currency:ea.currency,onClose:()=>el(!1),onError:e=>{ep(`${e} Check the quotation before trying again.`),el(!1)}}):null,J?(0,r.jsx)(d,{open:!0,onClose:()=>Q(null),title:J.name,description:J.description||"Complete your subscription payment.",amount:S(J,$),currency:J.currency||"GHS",planId:J.id,billingCycle:$,onSuccess:async e=>{B(e.message||"Payment request received. Verify payment and refresh your package status. Your plan is not active until confirmed by the backend."),Q(null),await ek(!0)},onError:e=>H(e)}):null]})}function z({value:e,onChange:t,label:a,disabled:i=!1}){let n=e=>t(Math.min(1e6,Math.max(1,Math.floor(Number.isFinite(e)?e:1))));return(0,r.jsxs)("div",{className:"places-picker","aria-label":a,children:[(0,r.jsxs)("div",{className:"places-picker-top",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"places-picker-eyebrow",children:"PREPAID CAPACITY"}),(0,r.jsx)("strong",{children:a}),(0,r.jsx)("small",{children:"Choose your allowance before enrolling students"})]}),(0,r.jsx)("span",{className:"places-picker-term",children:"Per term"})]}),(0,r.jsxs)("div",{className:"places-picker-controls",children:[(0,r.jsx)("button",{type:"button",disabled:i||e<=1,"aria-label":"Reduce places by ten",onClick:()=>n(e-10),children:"−"}),(0,r.jsxs)("label",{className:"places-picker-input",children:[(0,r.jsx)("input",{type:"number",min:"1",max:"1000000",step:"1",value:e,disabled:i,onChange:e=>n(Number(e.target.value)),"aria-label":a}),(0,r.jsx)("span",{children:"student places"})]}),(0,r.jsx)("button",{type:"button",disabled:i||e>=1e6,"aria-label":"Add ten places",onClick:()=>n(e+10),children:"+"})]}),(0,r.jsx)("div",{className:"places-picker-presets","aria-label":"Quick student-place choices",children:[50,100,200,500].map(t=>(0,r.jsx)("button",{type:"button",disabled:i,className:t===e?"selected":"","aria-pressed":t===e,onClick:()=>n(t),children:t.toLocaleString()},t))})]})}function P({tone:e,children:t}){return(0,r.jsxs)("section",{className:`slim-notice ${e}`,children:[(0,r.jsx)("span",{className:`status-dot-mini ${e}`}),(0,r.jsx)("p",{children:t})]})}function E({label:e,value:t}){return(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("strong",{children:t})]})}let T=`
.quote-panel{display:grid;gap:14px;padding:clamp(14px,2vw,22px);border:1px solid var(--border,rgba(148,163,184,.25));border-radius:22px;background:var(--card-bg,var(--surface,#fff));box-shadow:0 12px 30px rgba(15,23,42,.04)}
.quote-heading{display:grid;gap:4px}
.quote-heading strong{font-size:19px;font-weight:900;letter-spacing:-.02em}
.quote-heading small,.quote-disclaimer{color:var(--muted,#64748b);font-size:12px;line-height:1.55}
.quote-layout{display:grid;grid-template-columns:minmax(240px,.9fr) minmax(220px,1fr);gap:14px;align-items:stretch}
.quote-results{display:grid;align-content:center;gap:8px;min-width:0}
.quote-result{display:flex;justify-content:space-between;align-items:center;gap:14px;min-height:66px;padding:12px 15px;border-radius:17px;background:color-mix(in srgb,var(--primary-color,#2563eb) 5%,var(--card-bg,#fff));border:1px solid var(--border,rgba(148,163,184,.2))}
.quote-result>div{display:grid;gap:4px}
.quote-result strong{font-size:14px}
.quote-result small{font-size:11px;color:var(--muted,#64748b)}
.quote-result b{font-size:clamp(18px,2.2vw,23px);font-weight:900;white-space:nowrap;color:var(--primary-color,#2563eb)}
@media(max-width:620px){.quote-layout{grid-template-columns:minmax(0,1fr)}.quote-result{min-height:58px}}
.places-picker{display:grid;gap:14px;padding:16px;border:1px solid var(--border,rgba(148,163,184,.3));border-radius:20px;background:var(--card-bg,var(--surface,#fff));box-shadow:0 8px 25px rgba(15,23,42,.04)}
.places-picker-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
.places-picker-top>div{display:grid;gap:3px}
.places-picker-top strong{font-size:17px;font-weight:850;line-height:1.2}
.places-picker-eyebrow{font-size:10px;font-weight:850;color:var(--primary-color,#2563eb);letter-spacing:.1em}
.places-picker-top small{font-size:11px;line-height:1.5;color:var(--muted,#64748b)}
.places-picker-term{font-size:11px;font-weight:750;white-space:nowrap;color:var(--muted,#64748b);border:1px solid var(--border,#cbd5e1);border-radius:30px;padding:6px 9px}
.places-picker-controls{display:grid;grid-template-columns:46px minmax(0,1fr) 46px;gap:9px;align-items:stretch}
.places-picker-controls>button{display:grid;place-items:center;border:1px solid var(--border,#cbd5e1);border-radius:14px;font-size:24px;font-weight:500;background:var(--card-bg,var(--surface,#fff));color:var(--text,#0f172a);cursor:pointer}
.places-picker-controls>button:disabled{opacity:.4;cursor:not-allowed}
.places-picker-input{display:grid;justify-items:center;gap:1px;padding:8px 6px;border:1.5px solid var(--primary-color,#2563eb);border-radius:14px;background:color-mix(in srgb,var(--primary-color,#2563eb) 5%,var(--card-bg,#fff))}
.places-picker-input:focus-within{outline:2px solid var(--primary-color,#2563eb);outline-offset:2px}
.places-picker-input input{width:100%;min-width:0;border:0!important;outline:0!important;background:transparent!important;box-shadow:none!important;color:var(--text,#0f172a);font-size:26px!important;font-weight:850!important;line-height:1.15;text-align:center;appearance:textfield;-moz-appearance:textfield}
.places-picker-input input::-webkit-outer-spin-button,.places-picker-input input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
.places-picker-input span{font-size:11px;color:var(--muted,#64748b);font-weight:650}
.places-picker-presets{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px}
.places-picker-presets button{padding:9px 4px;border-radius:11px;border:1px solid var(--border,#cbd5e1);background:var(--card-bg,var(--surface,#fff));color:var(--text,#0f172a);font-weight:750;cursor:pointer}
.places-picker-presets button.selected{border-color:var(--primary-color,#2563eb);color:var(--primary-color,#2563eb);background:color-mix(in srgb,var(--primary-color,#2563eb) 10%,var(--card-bg,#fff))}
.cancel-quote-button{background:transparent!important;border:1px solid #dc2626!important;color:#dc2626!important;box-shadow:none!important}
.cancel-quote-button:hover:not(:disabled){background:rgba(220,38,38,.08)!important}

.student-checkout-content{padding:16px;display:grid;gap:12px;}
.student-checkout-content p,.student-checkout-content small{color:var(--muted,#64748b);line-height:1.5;}
.student-checkout-quote{display:grid;gap:4px;padding:14px;border:1px solid var(--border,#cbd5e1);border-radius:12px;}
.student-checkout-quote strong{font-size:24px;color:var(--text,inherit);}
.student-checkout-email{display:grid;gap:6px;font-size:13px;font-weight:600;}
.student-checkout-email input{width:100%;padding:12px;border:1px solid var(--border,#cbd5e1);border-radius:9px;background:var(--input-bg,var(--card-bg,#fff));color:var(--text,inherit);}
.student-checkout-primary{padding:12px;border-radius:10px;background:var(--ba-primary,var(--primary-color,#2563eb));color:#fff;font-weight:700;}
.student-checkout-error{color:#b91c1c!important;}

@keyframes spin{to{transform:rotate(360deg)}}

.ba-page{
  --ease:cubic-bezier(.2,.8,.2,1);
  min-height:100dvh;
  width:100%;
  max-width:100%;
  min-width:0;
  padding:calc(8px * var(--local-density-scale,1));
  padding-bottom:max(40px,env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left,color-mix(in srgb,var(--primary-color,#2563eb) 9%,transparent),transparent 30rem),
    var(--bg,#f7f8fb);
  color:var(--text,#0f172a);
  font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);
  font-size:var(--font-size,14px);
  overflow-x:hidden;
}

.ba-page *,
.ba-page *::before,
.ba-page *::after{
  box-sizing:border-box;
  min-width:0;
}

.ba-page button,
.ba-page input,
.ba-page select,
.ba-page textarea{
  font:inherit;
  max-width:100%;
}

.subscription-page{
  display:grid;
  gap:10px;
}

.ba-search-card,
.status-row,
.slim-notice,
.ba-empty,
.ba-sheet{
  background:var(--card-bg,var(--card,var(--surface,#fff)));
  border:1px solid var(--border,rgba(0,0,0,.10));
  box-shadow:0 12px 28px rgba(15,23,42,.045);
}

.ba-search-card{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto auto auto;
  gap:8px;
  align-items:center;
  padding:8px;
  border-radius:24px;
}

.ba-search{
  min-width:0;
  display:grid;
  grid-template-columns:auto minmax(0,1fr);
  align-items:center;
  gap:8px;
  min-height:44px;
  padding:0 11px;
  border-radius:18px;
  background:color-mix(in srgb,var(--muted,#64748b) 7%,transparent);
}

.ba-search span{
  color:var(--muted,#64748b);
  font-size:17px;
  font-weight:1000;
}

.ba-search input{
  width:100%;
  min-height:42px;
  border:0;
  padding:0;
  border-radius:0;
  background:transparent;
  color:var(--text,#0f172a);
  outline:none;
  box-shadow:none;
  font-size:14px;
  font-weight:750;
}

.ba-add-inline,
.ba-filter-button,
.ba-icon-button{
  min-width:42px;
  height:42px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  display:grid;
  place-items:center;
  background:var(--card-bg,var(--card,var(--surface,#fff)));
  color:var(--text,#0f172a);
  font-size:14px;
  font-weight:1000;
  cursor:pointer;
  box-shadow:0 10px 22px rgba(15,23,42,.045);
}

.ba-add-inline{
  padding:0 13px;
  border-color:var(--primary-color,#2563eb);
  background:var(--primary-color,#2563eb);
  color:#fff;
  font-size:11px;
}

.ba-filter-button{
  color:var(--primary-color,#2563eb);
  background:color-mix(in srgb,var(--primary-color,#2563eb) 8%,var(--card-bg,#fff));
}

.ba-icon-button{
  width:42px;
  font-size:18px;
}

.ba-list{
  display:grid;
  gap:7px;
}

.status-row{
  width:100%;
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto;
  align-items:center;
  gap:9px;
  padding:9px;
  border-radius:20px;
  color:var(--text,#0f172a);
  text-align:left;
  cursor:pointer;
}

.status-icon{
  width:34px;
  height:34px;
  border-radius:14px;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,var(--primary-color,#2563eb),rgba(15,23,42,.9));
  color:#fff;
  font-size:13px;
  font-weight:1000;
  box-shadow:0 10px 20px rgba(15,23,42,.12);
}

.status-main{
  display:grid;
  gap:1px;
}

.status-main strong,
.status-main small,
.status-main em{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.status-main strong{
  font-size:13px;
  font-weight:1000;
  line-height:1.15;
}

.status-main small,
.status-main em{
  color:var(--muted,#64748b);
  font-size:10.5px;
  font-style:normal;
  font-weight:800;
  line-height:1.25;
}

.status-side{
  display:flex;
  align-items:center;
  gap:6px;
}

.status-side i{
  color:var(--muted,#64748b);
  font-style:normal;
  font-size:17px;
  font-weight:1000;
}

.status-dot-mini{
  width:8px;
  height:8px;
  border-radius:999px;
  background:var(--muted,#64748b);
  box-shadow:0 0 0 3px color-mix(in srgb,var(--muted,#64748b) 12%,transparent);
}

.status-dot-mini.green{background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.13)}
.status-dot-mini.red{background:#ef4444;box-shadow:0 0 0 3px rgba(239,68,68,.13)}
.status-dot-mini.orange{background:#f59e0b;box-shadow:0 0 0 3px rgba(245,158,11,.15)}
.status-dot-mini.gray{background:var(--muted,#64748b)}

.slim-notice{
  display:grid;
  grid-template-columns:auto minmax(0,1fr);
  align-items:center;
  gap:9px;
  border-radius:17px;
  padding:8px 10px;
}

.slim-notice p{
  margin:0;
  font-size:11px;
  line-height:1.35;
  font-weight:850;
}

.slim-notice.green{background:#f0fdf4;color:#166534;border-color:#bbf7d0}
.slim-notice.red{background:#fef2f2;color:#991b1b;border-color:#fecaca}
.slim-notice.orange{background:#fff7ed;color:#9a3412;border-color:#fed7aa}
.slim-notice.gray{background:var(--card-bg,var(--surface,#fff));color:var(--muted,#64748b)}

.ba-empty{
  display:grid;
  place-items:center;
  align-content:center;
  gap:8px;
  min-height:180px;
  padding:18px;
  border-radius:24px;
  text-align:center;
  border-style:dashed;
}

.ba-empty-icon{
  width:50px;
  height:50px;
  display:grid;
  place-items:center;
  border-radius:20px;
  background:color-mix(in srgb,var(--primary-color,#2563eb) 12%,var(--surface,#fff));
  font-size:24px;
}

.ba-empty h3{
  margin:0;
  font-size:17px;
  font-weight:1000;
}

.ba-empty p{
  margin:0;
  color:var(--muted,#64748b);
  font-size:12px;
  line-height:1.5;
}

/* Selling cards intentionally preserved and lightly theme-safe. */
.plans-grid{
  width:100%;
  min-width:0;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,max-content));
  justify-content:start;
  align-items:start;
  gap:14px;
}

.plan{
  position:relative;
  isolation:isolate;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  gap:9px;
  width:100%;
  max-width:365px;
  min-width:0;
  padding:13px;
  border-radius:22px;
  background:
    linear-gradient(var(--card-bg,var(--card,#fff)),var(--card-bg,var(--card,#fff))) padding-box,
    linear-gradient(145deg,rgba(37,99,235,.18),rgba(15,23,42,.05),rgba(14,165,233,.13)) border-box;
  border:1px solid transparent;
  box-shadow:0 12px 28px rgba(15,23,42,.065);
  transition:transform .18s ease,box-shadow .18s ease;
}

.plan:before{
  content:"";
  position:absolute;
  inset:0;
  z-index:-1;
  background:
    radial-gradient(circle at top right,rgba(37,99,235,.075),transparent 33%),
    radial-gradient(circle at bottom left,rgba(14,165,233,.055),transparent 31%);
}

.plan:hover{
  transform:translateY(-2px);
  box-shadow:0 18px 42px rgba(15,23,42,.1);
}

.plan.current{
  border:2px solid var(--primary-color,#2563eb);
  box-shadow:0 16px 40px rgba(37,99,235,.13);
}

.plan.waiting{
  border:2px solid #f59e0b;
  box-shadow:0 16px 40px rgba(245,158,11,.13);
}

.ribbon{
  position:absolute;
  right:-40px;
  top:15px;
  transform:rotate(38deg);
  background:linear-gradient(135deg,var(--primary-color,#2563eb),#1d4ed8);
  color:#fff;
  font-size:8.5px;
  font-weight:1000;
  padding:5px 42px;
  text-transform:uppercase;
  letter-spacing:.1em;
  box-shadow:0 7px 18px rgba(37,99,235,.23);
}

.waiting-ribbon{
  background:linear-gradient(135deg,#f59e0b,#c2410c);
}

.badge{
  display:inline-flex;
  width:max-content;
  max-width:100%;
  padding:5px 8px;
  border-radius:999px;
  background:rgba(37,99,235,.085);
  color:var(--primary-color,#2563eb);
  border:1px solid rgba(37,99,235,.14);
  font-size:9.5px;
  font-weight:1000;
  text-transform:uppercase;
  overflow-wrap:anywhere;
}

.plan h2{
  margin:6px 0 3px;
  color:var(--text,#0f172a);
  font-size:18px;
  line-height:1.05;
  font-weight:1000;
  letter-spacing:-.04em;
  overflow-wrap:anywhere;
}

.plan p{
  margin:0;
  min-height:auto;
  color:var(--muted,#64748b);
  font-size:11.5px;
  line-height:1.35;
  overflow-wrap:anywhere;
}

.price{
  display:grid;
  gap:4px;
  padding:10px;
  border-radius:16px;
  background:color-mix(in srgb,var(--muted,#64748b) 6%,transparent);
  border:1px solid var(--border,rgba(148,163,184,.2));
}

.price>div{
  display:flex;
  align-items:flex-end;
  gap:5px;
}

.price strong{
  color:var(--text,#0f172a);
  font-size:clamp(1.22rem,2.4vw,1.6rem);
  line-height:1;
  font-weight:1000;
  letter-spacing:-.055em;
}

.price span{
  color:var(--muted,#64748b);
  font-size:10.5px;
  font-weight:900;
  padding-bottom:2px;
}

.price small{
  display:block;
  color:var(--muted,#64748b);
  font-size:10px;
  line-height:1.25;
  font-weight:800;
}

.price small b{
  color:var(--text,#0f172a);
}

.saving-pill{
  display:inline-flex;
  width:max-content;
  max-width:100%;
  align-items:center;
  border-radius:999px;
  padding:5px 8px;
  background:#ecfdf5;
  color:#047857;
  border:1px solid #bbf7d0;
  font-size:10px;
  font-weight:1000;
  overflow-wrap:anywhere;
}

.saving-pill.warning{
  background:#fff7ed;
  color:#c2410c;
  border-color:#fed7aa;
}

.plan ul{
  list-style:none;
  margin:0;
  padding:0;
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:5px 8px;
}

.plan li{
  display:flex;
  align-items:flex-start;
  gap:5px;
  color:var(--text,#334155);
  font-size:11px;
  font-weight:800;
  line-height:1.2;
}

.feature-count{
  display:block;
  width:max-content;
  max-width:100%;
  margin-top:-1px;
  padding:4px 7px;
  border-radius:999px;
  background:color-mix(in srgb,var(--primary-color,#2563eb) 8%,transparent);
  color:var(--primary-color,#2563eb);
  font-size:9.5px;
  font-weight:1000;
}

.plan button{
  margin-top:4px;
  border:0;
  border-radius:999px;
  padding:10px 12px;
  background:linear-gradient(135deg,var(--primary-color,#2563eb),#1d4ed8);
  color:#fff;
  font-size:11.5px;
  font-weight:1000;
  cursor:pointer;
  box-shadow:0 9px 18px rgba(37,99,235,.18);
}

.plan button:hover:not(:disabled){
  filter:brightness(1.04);
}

.plan button:disabled{
  background:#e5e7eb;
  color:#64748b;
  cursor:not-allowed;
  box-shadow:none;
}

/* Modal surfaces live in document.body, outside sticky portal headers. */
.ba-sheet-backdrop{
  position:fixed;
  inset:0;
  width:100%;
  height:100vh;
  height:100dvh;
  z-index:10000;
  display:flex;
  align-items:stretch;
  justify-content:center;
  padding:0;
  overflow:hidden;
  background:rgba(2,6,23,.72);
  backdrop-filter:blur(7px);
}
.ba-sheet,
.ba-sheet.small{
  box-sizing:border-box;
  width:min(100%,760px);
  max-width:760px;
  height:100%;
  max-height:100%;
  min-height:0;
  margin:0 auto;
  padding:clamp(14px,2.2vw,24px);
  border-radius:0;
  border-inline:1px solid var(--border,rgba(148,163,184,.28));
  display:flex;
  flex-direction:column;
  gap:12px;
  overflow-y:auto;
  overscroll-behavior:contain;
  scrollbar-gutter:stable;
  background:var(--card-bg,var(--card,var(--surface,#fff)));
  color:var(--text,#0f172a);
}
.ba-sheet-head{
  position:sticky;
  top:0;
  z-index:2;
  flex-shrink:0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  min-height:56px;
  margin:-4px 0 0;
  padding:8px 0 12px;
  background:var(--card-bg,var(--card,var(--surface,#fff)));
  border-bottom:1px solid var(--border,rgba(148,163,184,.22));
}
.ba-sheet-head>div{min-width:0;flex:1;}
.ba-sheet-head h2{margin:0;font-size:20px;font-weight:900;letter-spacing:-.03em;overflow-wrap:anywhere;}
.ba-sheet-head p{margin:4px 0 0;color:var(--muted,#64748b);font-size:12px;font-weight:650;line-height:1.45;white-space:normal;}
.ba-sheet-head button{
  flex-shrink:0;width:42px;height:42px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#0f172a);font-size:19px;font-weight:800;cursor:pointer;
}
@media(max-width:600px){
  .ba-sheet,.ba-sheet.small{width:100%;max-width:none;border-inline:0;padding:14px;}
}

.cycle-sheet{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:7px;
  padding:4px;
  border-radius:999px;
  background:color-mix(in srgb,var(--primary-color,#2563eb) 8%,transparent);
  border:1px solid var(--border,rgba(0,0,0,.10));
}

.cycle-sheet button{
  min-height:38px;
  border:0;
  border-radius:999px;
  background:transparent;
  color:var(--muted,#64748b);
  font-size:12px;
  font-weight:1000;
  cursor:pointer;
}

.cycle-sheet button.active{
  background:var(--primary-color,#2563eb);
  color:#fff;
}

.cycle-sheet button small{
  display:block;
  margin-top:1px;
  color:inherit;
  font-size:8.5px;
  font-weight:850;
  opacity:.78;
}

.sub-info-list{
  display:grid;
  gap:7px;
  margin:10px 0;
}

.sub-info-list div{
  display:flex;
  justify-content:space-between;
  gap:10px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:15px;
  padding:9px 10px;
  background:color-mix(in srgb,var(--muted,#64748b) 5%,transparent);
}

.sub-info-list span{
  color:var(--muted,#64748b);
  font-size:11px;
  font-weight:900;
}

.sub-info-list strong{
  color:var(--text,#0f172a);
  font-size:11px;
  font-weight:1000;
  text-align:right;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ba-menu-list{
  display:grid;
  gap:8px;
  margin-top:10px;
}

.ba-menu-list button{
  width:100%;
  display:grid;
  grid-template-columns:auto minmax(0,1fr);
  grid-template-rows:auto auto;
  column-gap:10px;
  text-align:left;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:18px;
  padding:10px;
  background:color-mix(in srgb,var(--muted,#64748b) 5%,transparent);
  color:var(--text,#0f172a);
  cursor:pointer;
}

.ba-menu-list span{
  grid-row:1 / span 2;
  width:32px;
  height:32px;
  border-radius:13px;
  display:grid;
  place-items:center;
  background:color-mix(in srgb,var(--primary-color,#2563eb) 12%,transparent);
  color:var(--primary-color,#2563eb);
  font-weight:1000;
}

.ba-menu-list b{
  font-size:13px;
  font-weight:1000;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ba-menu-list small{
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:800;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

@media(max-width:720px){
  .subscription-page{gap:9px}
  .ba-search-card{grid-template-columns:minmax(0,1fr) auto auto auto}
  .plans-grid{grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),max-content));gap:12px}
  .plan{max-width:365px;padding:12px;border-radius:21px}
  .plan ul{grid-template-columns:1fr}
}

@media(max-width:460px){
  .ba-search-card{gap:6px;padding:7px;border-radius:22px}
  .ba-add-inline{padding:0 10px}
  .plans-grid{grid-template-columns:1fr}
  .plan{max-width:100%}
}

@media(prefers-reduced-motion:reduce){
  .plan{transition:none!important}
  .plan:hover{transform:none!important}
}
`}}]);
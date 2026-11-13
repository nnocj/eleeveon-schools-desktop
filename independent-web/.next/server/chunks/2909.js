exports.id=2909,exports.ids=[2909],exports.modules={42264:(a,b,c)=>{"use strict";c.d(b,{A:()=>C});var d=c(48249),e=c(67484),f=c(74429),g=c(73142),h=c.n(g),i=c(62941);let j=["momo","card","bank","cash","manual"];function k(a){let{open:b,onClose:c,title:g,description:k,amount:l,currency:m="GHS",onSuccess:n,onError:o}=a,p=a.purpose||"subscription",q="subscription"!==a.purpose&&a.purpose?void 0:a.billingCycle||"monthly",r=(0,i.Gi)(),s=(0,e.useRef)(null),[t,u]=(0,e.useState)(!1),[v,w]=(0,e.useState)("momo"),[x,y]=(0,e.useState)((0,i.qc)()),[z,A]=(0,e.useState)(a.payerNameDefault||""),[B,C]=(0,e.useState)(a.payerPhoneDefault||""),[D,E]=(0,e.useState)(a.payerEmailDefault||""),F=(0,e.useMemo)(()=>(0,i.g4)(v),[v]),G="subscription_quote"===a.purpose,H=G?j.filter(a=>"momo"===a||"card"===a||"bank"===a):j;if(!b||"u"<typeof document)return null;async function I(){try{let b;u(!0);if("subscription_quote"===a.purpose){if(!a.quoteId?.trim())throw Error("A verified quotation is required.");if("paystack"!==F)throw Error("This subscription must be paid through Paystack.");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(D.trim()))throw Error("Enter a valid payer email for Paystack checkout.");b=await fetch(`${r}/billing/subscription-quotes/${encodeURIComponent(a.quoteId)}/pay`,{method:"POST",headers:(0,i.Pw)(),body:JSON.stringify({paymentMethod:v,provider:"paystack",momoNetwork:x,payerName:z,payerPhone:B,payerEmail:(D??"").trim()})})}else if("student_fee"===a.purpose){let c=a.callbackUrl||`${window.location.origin}${window.location.pathname}?invoiceId=${encodeURIComponent(String(a.invoiceId))}`;b=await fetch(`${r}/finance/student-fees/payments/initiate`,{method:"POST",headers:(0,i.Pw)(),body:JSON.stringify({schoolId:a.schoolId,branchId:a.branchId,studentId:a.studentId,invoiceId:a.invoiceId,amount:l,channel:"momo"===v?"momo":"card",method:v,provider:F,momoNetwork:x,payerName:z,payerPhone:B,payerEmail:D,callbackUrl:c,currencyCode:m,currencySymbol:"GHS"===m?"GH₵":m,currencyName:"GHS"===m?"Ghanaian Cedi":m,metadata:a.metadata||{}})})}else b=await fetch(`${r}/billing/subscribe`,{method:"POST",headers:(0,i.Pw)(),body:JSON.stringify({planId:a.planId,billingCycle:a.billingCycle||"monthly",paymentMethod:v,provider:F,momoNetwork:x,payerName:z,payerPhone:B,payerEmail:D})});let d=await (0,i.Vh)(b),e=(0,i.wr)(d);if(G){let a;if(!e)throw Error("Paystack did not return a checkout URL. Check the existing quotation before trying again.");try{a=new URL(e)}catch{throw Error("Paystack returned an invalid checkout URL.")}let b=a.hostname.toLowerCase();if("https:"!==a.protocol||"paystack.com"!==b&&!b.endsWith(".paystack.com"))throw Error("The payment provider returned an unrecognized checkout URL.");window.location.assign(a.toString());return}if(e){window.location.href=e;return}n?.(d),c()}catch(a){o?.(a?.message||"Payment failed.")}finally{u(!1)}}return(0,f.createPortal)((0,d.jsxs)("div",{role:"presentation",onMouseDown:a=>{a.target!==a.currentTarget||t||c()},className:"jsx-129cf7e4a5c61cc4 payment-backdrop",children:[(0,d.jsx)("section",{ref:s,role:"dialog","aria-modal":"true","aria-labelledby":"payment-checkout-title","aria-describedby":"payment-checkout-description",tabIndex:-1,className:"jsx-129cf7e4a5c61cc4 payment-modal",children:(0,d.jsxs)("div",{className:"jsx-129cf7e4a5c61cc4 payment-shell",children:[(0,d.jsxs)("header",{className:"jsx-129cf7e4a5c61cc4 payment-header",children:[(0,d.jsxs)("div",{className:"jsx-129cf7e4a5c61cc4 payment-title-row",children:[(0,d.jsx)("span",{className:"jsx-129cf7e4a5c61cc4 checkout-dot",children:"\uD83D\uDCB3"}),(0,d.jsxs)("div",{className:"jsx-129cf7e4a5c61cc4 header-copy",children:[(0,d.jsx)("p",{className:"jsx-129cf7e4a5c61cc4 eyebrow",children:"Secure checkout"}),(0,d.jsx)("h2",{id:"payment-checkout-title",className:"jsx-129cf7e4a5c61cc4",children:g||("student_fee"===p?"Pay School Fee":"subscription_quote"===p?"Pay Verified Subscription":"Complete Subscription")}),(0,d.jsx)("p",{id:"payment-checkout-description",className:"jsx-129cf7e4a5c61cc4 desc",children:k||("student_fee"===p?"Choose a payment option and pay this invoice securely.":"subscription_quote"===p?"Your quotation and student count will be checked again by the server before Paystack opens.":"Choose a payment option and confirm your subscription securely.")})]})]}),(0,d.jsx)("button",{type:"button",onClick:c,disabled:t,"aria-label":"Close payment checkout",className:"jsx-129cf7e4a5c61cc4 close-btn",children:"\xd7"})]}),(0,d.jsxs)("main",{className:"jsx-129cf7e4a5c61cc4 payment-body",children:[(0,d.jsxs)("section",{"aria-label":"Payment amount",className:"jsx-129cf7e4a5c61cc4 amount-row",children:[(0,d.jsxs)("span",{className:"jsx-129cf7e4a5c61cc4",children:[(0,d.jsx)("strong",{className:"jsx-129cf7e4a5c61cc4",children:(0,i.TG)(l,m)}),(0,d.jsx)("small",{className:"jsx-129cf7e4a5c61cc4",children:q?"termly"===q?"4-month termly subscription":"yearly"===q?"yearly subscription":"monthly subscription":"student_fee"===p?"student fee":"subscription_quote"===p?"verified subscription quotation":"subscription"})]}),(0,d.jsx)("b",{className:"jsx-129cf7e4a5c61cc4",children:"paystack"===F?"Paystack":"Manual"})]}),(0,d.jsxs)("section",{"aria-label":"Payment method",className:"jsx-129cf7e4a5c61cc4 compact-section",children:[(0,d.jsxs)("div",{className:"jsx-129cf7e4a5c61cc4 section-line",children:[(0,d.jsx)("h3",{className:"jsx-129cf7e4a5c61cc4",children:"Payment method"}),(0,d.jsxs)("p",{className:"jsx-129cf7e4a5c61cc4",children:[(0,i.Sh)(v)," selected"]})]}),(0,d.jsx)("div",{role:"radiogroup",className:"jsx-129cf7e4a5c61cc4 method-list",children:H.map(a=>(0,d.jsxs)("button",{type:"button",role:"radio","aria-checked":v===a,onClick:()=>w(a),className:"jsx-129cf7e4a5c61cc4 "+((v===a?"method active":"method")||""),children:[(0,d.jsx)("span",{"aria-hidden":"true",className:"jsx-129cf7e4a5c61cc4 method-icon",children:"momo"===a?"Mo":"card"===a?"Ca":"bank"===a?"Ba":"cash"===a?"Cs":"Mn"}),(0,d.jsxs)("span",{className:"jsx-129cf7e4a5c61cc4 method-main",children:[(0,d.jsx)("strong",{className:"jsx-129cf7e4a5c61cc4",children:(0,i.Sh)(a)}),(0,d.jsx)("small",{className:"jsx-129cf7e4a5c61cc4",children:"momo"===a?"Mobile wallet":"card"===a?"Debit or credit card":"bank"===a?"Bank payment":"cash"===a?"Offline cash":"Manual approval"})]}),(0,d.jsx)("span",{className:"jsx-129cf7e4a5c61cc4 method-side",children:(0,d.jsx)("i",{className:"jsx-129cf7e4a5c61cc4 "+((v===a?"selected":"")||"")})})]},a))})]}),(0,d.jsxs)("section",{"aria-label":"Payer details",className:"jsx-129cf7e4a5c61cc4 compact-section",children:[(0,d.jsxs)("div",{className:"jsx-129cf7e4a5c61cc4 section-line",children:[(0,d.jsx)("h3",{className:"jsx-129cf7e4a5c61cc4",children:"Payer details"}),(0,d.jsx)("p",{className:"jsx-129cf7e4a5c61cc4",children:"Optional contact details for the payer."})]}),(0,d.jsxs)("div",{className:"jsx-129cf7e4a5c61cc4 form-list",children:["momo"===v?(0,d.jsxs)("label",{htmlFor:"momoNetwork",className:"jsx-129cf7e4a5c61cc4 field-row",children:[(0,d.jsx)("span",{className:"jsx-129cf7e4a5c61cc4",children:"Network"}),(0,d.jsxs)("select",{id:"momoNetwork",value:x,onChange:a=>y(a.target.value),className:"jsx-129cf7e4a5c61cc4",children:[(0,d.jsx)("option",{value:"mtn",className:"jsx-129cf7e4a5c61cc4",children:"MTN Mobile Money"}),(0,d.jsx)("option",{value:"telecel",className:"jsx-129cf7e4a5c61cc4",children:"Telecel Cash"}),(0,d.jsx)("option",{value:"airteltigo",className:"jsx-129cf7e4a5c61cc4",children:"AirtelTigo Money"})]})]}):null,(0,d.jsxs)("label",{htmlFor:"payerName",className:"jsx-129cf7e4a5c61cc4 field-row",children:[(0,d.jsx)("span",{className:"jsx-129cf7e4a5c61cc4",children:"Name"}),(0,d.jsx)("input",{id:"payerName",value:z,onChange:a=>A(a.target.value),placeholder:"Payer name",autoComplete:"name",className:"jsx-129cf7e4a5c61cc4"})]}),(0,d.jsxs)("label",{htmlFor:"payerPhone",className:"jsx-129cf7e4a5c61cc4 field-row",children:[(0,d.jsx)("span",{className:"jsx-129cf7e4a5c61cc4",children:"Phone"}),(0,d.jsx)("input",{id:"payerPhone",value:B,onChange:a=>C(a.target.value),placeholder:"024xxxxxxx",inputMode:"tel",autoComplete:"tel",className:"jsx-129cf7e4a5c61cc4"})]}),(0,d.jsxs)("label",{htmlFor:"payerEmail",className:"jsx-129cf7e4a5c61cc4 field-row",children:[(0,d.jsx)("span",{className:"jsx-129cf7e4a5c61cc4",children:"Email"}),(0,d.jsx)("input",{id:"payerEmail",type:"email",value:D,onChange:a=>E(a.target.value),placeholder:"example@email.com",autoComplete:"email",className:"jsx-129cf7e4a5c61cc4"})]})]})]}),(0,d.jsxs)("section",{className:"jsx-129cf7e4a5c61cc4 payment-note",children:[(0,d.jsx)("span",{className:"jsx-129cf7e4a5c61cc4 status-dot"}),(0,d.jsx)("p",{className:"jsx-129cf7e4a5c61cc4",children:"paystack"===F?"You will be redirected securely to Paystack to complete this payment.":"This payment will be created and remain pending until it is manually confirmed."})]})]}),(0,d.jsxs)("footer",{className:"jsx-129cf7e4a5c61cc4 actions",children:[(0,d.jsx)("button",{type:"button",onClick:c,disabled:t,className:"jsx-129cf7e4a5c61cc4 cancel-btn",children:"Cancel"}),(0,d.jsx)("button",{type:"button",disabled:t,onClick:I,className:"jsx-129cf7e4a5c61cc4 pay-btn",children:t?"Processing...":"paystack"===F?"Continue to Paystack":"Create Payment"})]})]})}),(0,d.jsx)(h(),{id:"129cf7e4a5c61cc4",children:'.payment-backdrop.jsx-129cf7e4a5c61cc4{position:fixed;inset:0;z-index:20000;display:grid;align-items:stretch;justify-items:center;width:100%;height:100vh;height:100dvh;min-height:0;padding:0;overflow:hidden;background:rgba(2,6,23,.58);backdrop-filter:blur(12px);-webkit-overflow-scrolling:touch}.payment-modal.jsx-129cf7e4a5c61cc4{width:min(100%,760px);height:100%;min-height:0;margin:0;outline:none}.payment-shell.jsx-129cf7e4a5c61cc4{width:100%;height:100%;min-height:0;max-height:100%;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--border,rgba(226,232,240,.9));border-radius:0;background:var(--card-bg,var(--surface,#fff));color:var(--text,#0f172a);box-shadow:0 30px 90px rgba(2,6,23,.28)}.payment-header.jsx-129cf7e4a5c61cc4{flex:0 0 auto;display:flex;align-items:flex-start;justify-content:space-between;gap:10px;padding:13px;border-bottom:1px solid var(--border,rgba(226,232,240,.9));background:radial-gradient(circle at top left,color-mix(in srgb,var(--primary-color,#2563eb)10%,transparent),transparent 46%),var(--card-bg,var(--surface,#fff))}.payment-title-row.jsx-129cf7e4a5c61cc4{min-width:0;display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:9px}.checkout-dot.jsx-129cf7e4a5c61cc4{width:36px;height:36px;display:grid;place-items:center;flex:0 0 auto;border-radius:15px;background:linear-gradient(135deg,var(--primary-color,#2563eb),rgba(15,23,42,.92));color:#fff;font-size:15px;box-shadow:0 10px 22px color-mix(in srgb,var(--primary-color,#2563eb)22%,transparent)}.header-copy.jsx-129cf7e4a5c61cc4{min-width:0}.eyebrow.jsx-129cf7e4a5c61cc4,h2.jsx-129cf7e4a5c61cc4,.desc.jsx-129cf7e4a5c61cc4{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eyebrow.jsx-129cf7e4a5c61cc4{margin:0 0 2px;font-size:9px;font-weight:1000;text-transform:uppercase;letter-spacing:.12em;color:var(--primary-color,#2563eb)}h2.jsx-129cf7e4a5c61cc4{margin:0;color:var(--text,#0f172a);font-size:17px;line-height:1.05;font-weight:1000;letter-spacing:-.045em}.desc.jsx-129cf7e4a5c61cc4{max-width:100%;margin:3px 0 0;color:var(--muted,#64748b);font-size:11px;font-weight:750;line-height:1.35}.close-btn.jsx-129cf7e4a5c61cc4{flex:0 0 auto;width:38px;height:38px;display:grid;place-items:center;border:1px solid var(--border,rgba(226,232,240,.9));border-radius:999px;background:var(--card-bg,var(--surface,#fff));color:var(--text,#0f172a);cursor:pointer;font-size:24px;font-weight:900;line-height:1;box-shadow:0 8px 18px rgba(15,23,42,.06)}.close-btn.jsx-129cf7e4a5c61cc4:disabled{cursor:not-allowed;opacity:.55}.payment-body.jsx-129cf7e4a5c61cc4{flex:1 1 auto;min-height:0;overflow-y:auto;display:grid;gap:8px;padding:10px;background:var(--bg,#f8fafc);-webkit-overflow-scrolling:touch}.amount-row.jsx-129cf7e4a5c61cc4,.compact-section.jsx-129cf7e4a5c61cc4,.payment-note.jsx-129cf7e4a5c61cc4{border:1px solid var(--border,rgba(226,232,240,.95));background:var(--card-bg,var(--surface,#fff));box-shadow:0 10px 24px rgba(15,23,42,.04)}.amount-row.jsx-129cf7e4a5c61cc4{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 11px;border-radius:20px}.amount-row.jsx-129cf7e4a5c61cc4 span.jsx-129cf7e4a5c61cc4{min-width:0;display:grid;gap:2px}.amount-row.jsx-129cf7e4a5c61cc4 strong.jsx-129cf7e4a5c61cc4,.amount-row.jsx-129cf7e4a5c61cc4 small.jsx-129cf7e4a5c61cc4{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.amount-row.jsx-129cf7e4a5c61cc4 strong.jsx-129cf7e4a5c61cc4{color:var(--text,#0f172a);font-size:22px;line-height:1;font-weight:1000;letter-spacing:-.055em}.amount-row.jsx-129cf7e4a5c61cc4 small.jsx-129cf7e4a5c61cc4{color:var(--muted,#64748b);font-size:10.5px;font-weight:850;text-transform:capitalize}.amount-row.jsx-129cf7e4a5c61cc4 b.jsx-129cf7e4a5c61cc4{flex:0 0 auto;min-height:26px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;padding:0 9px;background:color-mix(in srgb,var(--primary-color,#2563eb)11%,transparent);color:var(--primary-color,#2563eb);font-size:10px;font-weight:1000}.compact-section.jsx-129cf7e4a5c61cc4{display:grid;gap:8px;padding:10px;border-radius:20px}.section-line.jsx-129cf7e4a5c61cc4{display:flex;align-items:baseline;justify-content:space-between;gap:10px}.section-line.jsx-129cf7e4a5c61cc4 h3.jsx-129cf7e4a5c61cc4{margin:0;color:var(--text,#0f172a);font-size:12px;font-weight:1000;letter-spacing:-.01em}.section-line.jsx-129cf7e4a5c61cc4 p.jsx-129cf7e4a5c61cc4{margin:0;color:var(--muted,#64748b);font-size:10px;font-weight:850;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.method-list.jsx-129cf7e4a5c61cc4,.form-list.jsx-129cf7e4a5c61cc4{display:grid;gap:6px}.method.jsx-129cf7e4a5c61cc4{min-height:50px;display:grid;grid-template-columns:auto minmax(0,1fr)auto;align-items:center;gap:8px;padding:7px;border:1px solid var(--border,rgba(203,213,225,.8));border-radius:16px;background:color-mix(in srgb,var(--card-bg,var(--surface,#fff))94%,var(--primary-color,#2563eb)6%);color:var(--text,#0f172a);cursor:pointer;text-align:left}.method.active.jsx-129cf7e4a5c61cc4{border-color:var(--primary-color,#2563eb);background:color-mix(in srgb,var(--card-bg,var(--surface,#fff))86%,var(--primary-color,#2563eb)14%);box-shadow:0 10px 22px color-mix(in srgb,var(--primary-color,#2563eb)10%,transparent)}.method-icon.jsx-129cf7e4a5c61cc4{width:30px;height:30px;display:grid;place-items:center;border-radius:12px;background:var(--primary-color,#2563eb);color:#fff;font-size:10px;font-weight:1000}.method-main.jsx-129cf7e4a5c61cc4{min-width:0;display:grid;gap:1px}.method.jsx-129cf7e4a5c61cc4 strong.jsx-129cf7e4a5c61cc4,.method.jsx-129cf7e4a5c61cc4 small.jsx-129cf7e4a5c61cc4{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.method.jsx-129cf7e4a5c61cc4 strong.jsx-129cf7e4a5c61cc4{color:var(--text,#0f172a);font-size:12px;font-weight:1000;line-height:1.15}.method.jsx-129cf7e4a5c61cc4 small.jsx-129cf7e4a5c61cc4{color:color-mix(in srgb,var(--text,#0f172a)66%,var(--muted,#64748b)34%);font-size:10px;line-height:1.2;font-weight:800}.method-side.jsx-129cf7e4a5c61cc4 i.jsx-129cf7e4a5c61cc4{width:9px;height:9px;display:block;border-radius:999px;background:color-mix(in srgb,var(--text,#0f172a)45%,var(--muted,#64748b)55%);box-shadow:0 0 0 3px color-mix(in srgb,var(--text,#0f172a)12%,transparent)}.method-side.jsx-129cf7e4a5c61cc4 i.selected.jsx-129cf7e4a5c61cc4{background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.14)}html[data-theme="dark"] .method.jsx-129cf7e4a5c61cc4,html.dark .method.jsx-129cf7e4a5c61cc4{background:color-mix(in srgb,var(--card-bg,var(--surface,#111827))88%,var(--primary-color,#2563eb)12%);border-color:var(--border,rgba(255,255,255,.16));color:var(--text,#fff)}html[data-theme="dark"] .method.active.jsx-129cf7e4a5c61cc4,html.dark .method.active.jsx-129cf7e4a5c61cc4{background:color-mix(in srgb,var(--card-bg,var(--surface,#111827))76%,var(--primary-color,#2563eb)24%);border-color:var(--primary-color,#2563eb)}html[data-theme="dark"] .method.jsx-129cf7e4a5c61cc4 strong.jsx-129cf7e4a5c61cc4,html.dark .method.jsx-129cf7e4a5c61cc4 strong.jsx-129cf7e4a5c61cc4{color:var(--text,#fff)}html[data-theme="dark"] .method.jsx-129cf7e4a5c61cc4 small.jsx-129cf7e4a5c61cc4,html.dark .method.jsx-129cf7e4a5c61cc4 small.jsx-129cf7e4a5c61cc4{color:color-mix(in srgb,var(--text,#fff)78%,var(--muted,rgba(255,255,255,.72))22%)}html[data-theme="dark"] .payment-note.jsx-129cf7e4a5c61cc4,html.dark .payment-note.jsx-129cf7e4a5c61cc4{background:color-mix(in srgb,var(--card-bg,var(--surface,#111827))84%,var(--primary-color,#2563eb)16%);border-color:var(--border,rgba(255,255,255,.16));color:var(--text,#fff)}html[data-theme="dark"] .payment-note.jsx-129cf7e4a5c61cc4 p.jsx-129cf7e4a5c61cc4,html.dark .payment-note.jsx-129cf7e4a5c61cc4 p.jsx-129cf7e4a5c61cc4{color:color-mix(in srgb,var(--text,#fff)82%,var(--muted,rgba(255,255,255,.72))18%)}html[data-theme="dark"] .cancel-btn.jsx-129cf7e4a5c61cc4,html.dark .cancel-btn.jsx-129cf7e4a5c61cc4{background:var(--card-bg,var(--surface,#111827));border-color:var(--border,rgba(255,255,255,.16));color:var(--text,#fff)}html[data-theme="dark"] .cancel-btn.jsx-129cf7e4a5c61cc4:hover:not(:disabled),html.dark .cancel-btn.jsx-129cf7e4a5c61cc4:hover:not(:disabled){background:color-mix(in srgb,var(--card-bg,var(--surface,#111827))82%,var(--primary-color,#2563eb)18%)}.field-row.jsx-129cf7e4a5c61cc4{display:grid;grid-template-columns:82px minmax(0,1fr);align-items:center;gap:8px;min-height:44px;padding:6px;border:1px solid var(--border,rgba(203,213,225,.8));border-radius:16px;background:color-mix(in srgb,var(--muted,#64748b)4%,transparent)}.field-row.jsx-129cf7e4a5c61cc4 span.jsx-129cf7e4a5c61cc4{color:var(--muted,#64748b);font-size:10px;font-weight:1000;text-transform:uppercase;letter-spacing:.06em;padding-left:4px}input.jsx-129cf7e4a5c61cc4,select.jsx-129cf7e4a5c61cc4{width:100%;height:34px;border:0;border-radius:12px;background:var(--input-bg,var(--surface,#fff));color:var(--input-text,var(--text,#0f172a));padding:0 10px;font-size:12px;font-weight:800;outline:none}input.jsx-129cf7e4a5c61cc4::placeholder{color:color-mix(in srgb,var(--muted,#64748b)70%,transparent)}input.jsx-129cf7e4a5c61cc4:focus,select.jsx-129cf7e4a5c61cc4:focus,.method.jsx-129cf7e4a5c61cc4:focus-visible,.close-btn.jsx-129cf7e4a5c61cc4:focus-visible,.cancel-btn.jsx-129cf7e4a5c61cc4:focus-visible,.pay-btn.jsx-129cf7e4a5c61cc4:focus-visible{box-shadow:0 0 0 4px color-mix(in srgb,var(--primary-color,#2563eb)14%,transparent)}.payment-note.jsx-129cf7e4a5c61cc4{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:8px;padding:9px 10px;border:1px solid var(--border,rgba(226,232,240,.95));border-radius:17px;background:color-mix(in srgb,var(--card-bg,var(--surface,#fff))88%,var(--primary-color,#2563eb)12%);color:var(--text,#0f172a)}.status-dot.jsx-129cf7e4a5c61cc4{width:8px;height:8px;border-radius:999px;background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.14)}.payment-note.jsx-129cf7e4a5c61cc4 p.jsx-129cf7e4a5c61cc4{margin:0;color:color-mix(in srgb,var(--text,#0f172a)78%,var(--muted,#64748b)22%);font-size:10.5px;line-height:1.35;font-weight:800}.actions.jsx-129cf7e4a5c61cc4{flex:0 0 auto;display:grid;grid-template-columns:minmax(0,.78fr)minmax(0,1.22fr);gap:8px;padding:10px;border-top:1px solid var(--border,rgba(226,232,240,.95));background:var(--card-bg,var(--surface,#fff))}.cancel-btn.jsx-129cf7e4a5c61cc4,.pay-btn.jsx-129cf7e4a5c61cc4{min-height:42px;padding:0 12px;border:0;border-radius:999px;cursor:pointer;font-size:12px;font-weight:1000}.cancel-btn.jsx-129cf7e4a5c61cc4{border:1px solid var(--border,rgba(226,232,240,.95));background:var(--card-bg,var(--surface,#fff));color:var(--text,#0f172a)}.cancel-btn.jsx-129cf7e4a5c61cc4:hover:not(:disabled){background:color-mix(in srgb,var(--primary-color,#2563eb)8%,var(--card-bg,var(--surface,#fff)))}.pay-btn.jsx-129cf7e4a5c61cc4{color:#fff;background:linear-gradient(135deg,var(--primary-color,#2563eb),#1d4ed8);box-shadow:0 12px 26px color-mix(in srgb,var(--primary-color,#2563eb)24%,transparent)}.cancel-btn.jsx-129cf7e4a5c61cc4:disabled,.pay-btn.jsx-129cf7e4a5c61cc4:disabled{cursor:not-allowed;opacity:.65}@media(min-width:640px){.payment-backdrop.jsx-129cf7e4a5c61cc4{align-items:stretch}.method-list.jsx-129cf7e4a5c61cc4{grid-template-columns:repeat(2,minmax(0,1fr))}.method.jsx-129cf7e4a5c61cc4:first-child{grid-column:1/-1}}@media(max-width:420px){.payment-backdrop.jsx-129cf7e4a5c61cc4{padding:0}.payment-modal.jsx-129cf7e4a5c61cc4{width:100%}.payment-shell.jsx-129cf7e4a5c61cc4{height:100%;max-height:100%;border-right:0;border-bottom:0;border-left:0;border-radius:0}.payment-header.jsx-129cf7e4a5c61cc4{padding:12px}.payment-body.jsx-129cf7e4a5c61cc4{padding:8px}.field-row.jsx-129cf7e4a5c61cc4{grid-template-columns:74px minmax(0,1fr)}.amount-row.jsx-129cf7e4a5c61cc4 strong.jsx-129cf7e4a5c61cc4{font-size:20px}}@media(prefers-reduced-motion:reduce){*.jsx-129cf7e4a5c61cc4,*.jsx-129cf7e4a5c61cc4::before,*.jsx-129cf7e4a5c61cc4::after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}'})]}),document.body)}var l=c(99646),m=c(90182);function n({children:a}){return"u"<typeof document?null:(0,f.createPortal)(a,document.body)}let o=["test","live"].includes((process.env.NEXT_PUBLIC_STUDENT_PRICED_CHECKOUT_MODE||"off").toLowerCase()),p="eleeveon_owner_student_checkout_quote",q={offlineSync:"Offline-first synchronization",cloudBackup:"Cloud backup",reports:"Assessment and reports",finance:"Finance",attendance:"Attendance",identityCards:"ID cards",identitySafety:"Identity and safety",transport:"Transport",schoolWebsites:"School websites",communications:"Communication",calendarScheduling:"Calendar and scheduling",teacherPortal:"Teacher workspace",parentPortal:"Parent portal",studentPortal:"Student portal",advancedAnalytics:"Advanced analytics",apiAccess:"API access"},r=a=>String(a??"").trim().toLowerCase(),s=a=>{if(!a)return"No scheduled expiry";let b=new Date(a);return isNaN(b.getTime())?"Not available":b.toLocaleDateString("en-GH",{year:"numeric",month:"short",day:"numeric"})};function t(a){let b=r(a.licenseModel);return"trial"===b?"trial":"complimentary"===b||"pilot"===b?"complimentary":"perpetual"===b?"perpetual":"subscription"}function u(a){let b=a.metadata;return b?.publicVisible===!1||["private","internal","hidden"].includes(r(b?.visibility))||Array.isArray(a.availableAcquisitionModes)&&a.availableAcquisitionModes.length>0&&a.availableAcquisitionModes.every(a=>["private_offer","complimentary","pilot","internal"].includes(r(a)))}function v(a){let b=r(a.deploymentMode);return b.includes("multi_device")?"Independent Multi-device":b.includes("essentials")?"Independent Essentials":b.includes("private")||b.includes("hosted")?"Private deployment":"Eleeveon Cloud"}function w(a){return"trial"===t(a)?"Free trial":"complimentary"===t(a)||u(a)?"Private arrangement":"perpetual"===t(a)?"One-time licence":"Cloud subscription"}function x(a){let b=a.metadata?.pricing;return b&&["fixed","per_student","tiered"].includes(b.mode)?b:{mode:"fixed"}}function y(a,b){return"yearly"===b?Number(a.priceYearly||0):"termly"===b?Number(a.priceTermly||0)||4*Number(a.priceMonthly||0):Number(a.priceMonthly||0)}function z(a,b,c){if("trial"===t(a)||"complimentary"===t(a))return{amount:0,period:"trial",estimated:!1};if("perpetual"===t(a))return{amount:Number(a.priceOneTime||0),period:"one-time",estimated:!1};let d=x(a);return"fixed"!==d.mode?{amount:(0,m.B)(d,b),period:d.billingPeriod||"termly",estimated:!0}:{amount:y(a,c),period:c,estimated:!1}}function A(a){let b="trial"===r(a?.status),c=a?.trialEndsAt?Date.parse(a.trialEndsAt):NaN,d=Number.isFinite(c),e=b&&d&&c<=Date.now(),f=b&&d?Math.max(0,Math.ceil((c-Date.now())/864e5)):null;return{trial:b,known:d,expired:e,days:f,endsAt:a?.trialEndsAt||null}}function B(a){let b=a.metadata?.featureFlags||{},c=new Set([...a.features||[],...a.metadata?.featureKeys||[],...Object.keys(b).filter(a=>!0===b[a])]),d=[null==a.maxSchools?"Flexible schools":`${a.maxSchools} schools`,null==a.maxBranches?"Flexible branches":`${a.maxBranches} branches`,null==a.maxUsers?"Flexible users":`${a.maxUsers} users`,null==a.maxStudents?"Flexible students":`${a.maxStudents} students`,null==a.maxTeachers?"Flexible teachers":`${a.maxTeachers} teachers`];for(let e of c)!1!==b[e]&&!1!==a[e]&&d.push(q[e]||e.replace(/([a-z])([A-Z])/g,"$1 $2"));return Array.from(new Set(d))}function C(){let a,b,c,f,g,h,j,m,q,[C,H]=(0,e.useState)([]),[I,J]=(0,e.useState)(null),[K,L]=(0,e.useState)("termly"),[M,N]=(0,e.useState)(200),[O,P]=(0,e.useState)(""),[Q,R]=(0,e.useState)(!0),[S,T]=(0,e.useState)(""),[U,V]=(0,e.useState)(""),[W,X]=(0,e.useState)(!1),[Y,Z]=(0,e.useState)(null),[$,_]=(0,e.useState)(null),[aa,ab]=(0,e.useState)(null),[ac,ad]=(0,e.useState)(null),[ae,af]=(0,e.useState)(!1),[ag,ah]=(0,e.useState)(""),[ai,aj]=(0,e.useState)(!1),[ak,al]=(0,e.useState)(""),[am,an]=(0,e.useState)(null),[ao,ap]=(0,e.useState)(null),[aq,ar]=(0,e.useState)(null),[as,at]=(0,e.useState)(null),[au,av]=(0,e.useState)(null),aw=(0,i.Gi)();async function ax(a=!1){try{R(!0),T(""),a||V("");let[b,c]=await Promise.all([fetch(`${aw}/billing/plans`,{headers:(0,i.Pw)()}),fetch(`${aw}/billing/my-subscription`,{headers:(0,i.Pw)()})]);if(!b.ok)throw Error(`Unable to load packages (${b.status}).`);let d=await (0,i.Vh)(b),e=(a=>{if(Array.isArray(a))return a;for(let b of["plans","data","items","results"])if(Array.isArray(a?.[b]))return a[b];return[]})(d).filter(a=>!1!==a.active);if(H(e),c.ok){let a=await (0,i.Vh)(c);J(a?.subscription||a?.data||a||null)}else if(404===c.status)J(null);else throw Error(`Unable to load your current package (${c.status}).`);let f=new URLSearchParams(window.location.search),g=f.get("billingCycle");("monthly"===g||"termly"===g||"yearly"===g)&&L(g);let h=f.get("planId");if(h&&"1"===f.get("checkout")){let a=e.find(a=>a.id===h);if(a&&"subscription"===t(a)&&"fixed"!==x(a).mode&&o){let b=Number(f.get("students"));Number.isSafeInteger(b)&&b>0&&N(b),_(a)}else a&&"subscription"===t(a)&&"fixed"===x(a).mode&&y(a,"monthly"===g||"termly"===g||"yearly"===g?g:"termly")>0?Z(a):V("This package is not currently available for online checkout.");let b=new URL(window.location.href);["planId","checkout","billingCycle","students","source"].forEach(a=>b.searchParams.delete(a)),window.history.replaceState({},"",b.toString())}}catch(a){T(a instanceof Error?a.message:"Could not load packages.")}finally{R(!1)}}async function ay(a,b){let c=await fetch(`${aw}${a}`,{method:b?"POST":"GET",headers:{...(0,i.Pw)(),...b?{"Content-Type":"application/json"}:{}},...b?{body:JSON.stringify(b)}:{}}),d=await (0,i.Vh)(c);if(!c.ok)throw Error(String(d?.message||d?.error||`Request failed (${c.status}).`));return d}function az(a){_(a),ad(null),al(""),an(null);try{sessionStorage.getItem(p)&&al("A previous checkout was started. Check its status before requesting another payment.")}catch{}}async function aA(){if($&&!ae){try{if(sessionStorage.getItem(p))return void al("Review the previous quotation first. Do not create another payment request until it is resolved.")}catch{}af(!0),al("");try{let a=await ay("/billing/subscription-quotes",{toPlanId:$.id,billingCycle:x($).billingPeriod||"termly",changeType:I?.id&&"active"===r(I.status)&&I.planId===$.id?I?.metadata?.prepaidStudentLimit&&M>I.metadata.prepaidStudentLimit?"upgrade":"renewal":"new",effectiveMode:"immediate",requestedStudentCount:M});if(!a.id||a.toPlanId!==$.id||!Number.isFinite(a.amountDue)||a.amountDue<=0||"GHS"!==a.currency||"quoted"!==a.status||!a.calculation?.studentCount||new Date(a.quoteExpiresAt).getTime()<=Date.now())throw Error("The server did not return a valid payable student quotation.");ad(a);try{sessionStorage.setItem(p,a.id)}catch{}av(a.id)}catch(a){al(a instanceof Error?a.message:"Unable to prepare quotation.")}finally{af(!1)}}}function aB(){try{sessionStorage.removeItem(p)}catch{}av(null),an(null),at(null)}async function aC(){let a="payment_pending"===aq&&"failed"===as;if(au&&!ae&&ac&&ac.id===au&&("quoted"===aq||a)&&window.confirm(a?"Request cancellation of this failed Paystack checkout? The server will independently re-verify the payment status with Paystack. If it is pending, paid, or uncertain, cancellation will be refused. This does not issue a refund.":"Cancel this unused quotation on the server? This will not cancel a Paystack payment or refund a transaction.")){af(!0),ap({kind:"info",text:"Checking cancellation with the server…"});try{let b=await fetch(`${aw}/billing/subscription-quotes/${encodeURIComponent(au)}/cancel`,{method:"POST",headers:(0,i.Pw)()});if(await (0,i.Vh)(b),!b.ok)throw Error("The server did not confirm cancellation.");aB(),ad(null),ar("cancelled"),_(null),ap({kind:"success",text:a?"The backend confirmed a terminal failed Paystack transaction and cancelled this quotation. You may start another quotation.":"The server cancelled this unused quotation. You may request a new quotation now."})}catch(a){ap({kind:"error",text:`Cancellation was not confirmed: ${a instanceof Error?a.message:"Unknown error"}. Do not initiate a duplicate payment.`})}finally{af(!1)}}}async function aD(){let a=au||ac?.id||(()=>{try{return sessionStorage.getItem(p)}catch{return null}})();if(a&&!ae){af(!0),al(""),ap({kind:"info",text:"Checking the quotation and Paystack status with the server. No new payment will be initiated."}),an(null);try{let b=await ay(`/billing/subscription-quotes/${encodeURIComponent(a)}/recover`),c=await ay(`/billing/subscription-quotes/${encodeURIComponent(a)}`);if(c.id!==a||b.changeOrderId!==a)throw Error("The server returned an inconsistent quotation reference. Please contact support.");ad(c),ar(c.status),at(b.paymentStatus??null);let d=function(a){if("string"!=typeof a||!a.startsWith("https://"))return null;try{let b=new URL(a).hostname.toLowerCase();return"paystack.com"===b||b.endsWith(".paystack.com")?a:null}catch{return null}}(b.authorizationUrl);if(an(d),"applied"===c.status&&b.applied)aB(),_(null),aj(!1),await ax(!0),ap({kind:"success",text:"The server confirms this subscription change was applied. Your package and entitlements should now be refreshed."}),V("The server confirms your subscription was activated.");else if("quoted"===c.status){let a=Date.parse(c.quoteExpiresAt)<=Date.now();ap({kind:a?"warning":"info",text:a?"This quotation has expired without a confirmed payment. You may cancel it on the server, then request a fresh one.":"This quotation has not started payment. Choose Resume quotation to continue with the existing verified amount, or cancel it on the server."}),$&&$.id===c.toPlanId&&al("")}else d?ap({kind:"info",text:"Your earlier Paystack session is available. Select Continue existing Paystack session below. Do not create a second payment."}):b.requiresManualReview||["payment_pending","checkout_initializing","paid"].includes(c.status)?ap({kind:"warning",text:"payment_pending"===c.status&&"failed"===b.paymentStatus?"The locally recorded payment is failed. You can request cancellation below. The server must independently verify a terminal failure with Paystack before releasing this quotation; no payment or refund is initiated by the check.":`The order is ${c.status.replace(/_/g," ")}${b.paymentStatus?` (payment: ${b.paymentStatus})`:""}. No resumable Paystack link is available. Keep the reference and request reconciliation; do not pay again.`}):["cancelled","expired"].includes(c.status)?(aB(),ap({kind:"info",text:`The server confirms this quotation is ${c.status}. You may request a new quotation.`})):ap({kind:"warning",text:`The server reports quotation status: ${c.status}. No new payment was started. Keep the reference and contact support if this does not resolve.`})}catch(b){let a=b instanceof Error?b.message:"Could not refresh payment status.";ap({kind:"error",text:`Status check failed: ${a}. Keep your quotation reference; do not start another payment until its status is confirmed.`}),V("")}finally{af(!1)}}}async function aE(){if(au&&!ae&&"paid"===aq&&"paid"===as){af(!0),ap({kind:"info",text:"Verifying the existing Paystack payment and applying your subscription. No new payment will be created."});try{let a=await fetch(`${aw}/billing/subscription-quotes/${encodeURIComponent(au)}/reconcile`,{method:"POST",headers:(0,i.Pw)()}),b=await (0,i.Vh)(a);if(!a.ok)throw Error(String(b?.message||b?.error||`Reconciliation failed (${a.status}).`));if(b?.changeOrderId!==au)throw Error("The server returned a different order reference.");!0===b.applied&&"applied"===b.status?(aB(),ad(null),_(null),ar("applied"),await ax(!0),ap({kind:"success",text:"Paystack payment verified. Your paid subscription has been activated and the subscription details have been refreshed."})):(ar(String(b.status||"paid")),ap({kind:"warning",text:"Payment is recorded but subscription activation is not yet complete. The original payment is preserved. Please request reconciliation again or contact Eleeveon support; do not pay twice."}))}catch(a){ap({kind:"error",text:`Unable to complete reconciliation: ${a instanceof Error?a.message:"Unknown error"}. Your paid record is preserved. Do not pay again.`})}finally{af(!1)}}}let aF=(0,e.useMemo)(()=>{let a=r(O),b=I?.plan,c=C.filter(a=>!u(a)||a.id===b?.id||a.id===I?.planId);return b&&!c.some(a=>a.id===b.id)&&c.unshift(b),c.filter(b=>!a||[b.name,b.code,b.description,w(b),v(b),...B(b)].join(" ").toLowerCase().includes(a)).sort((a,b)=>Number(a.metadata?.displayOrder??999)-Number(b.metadata?.displayOrder??999))},[C,I,O]),aG=(0,e.useMemo)(()=>aF.filter(a=>"subscription"===t(a)&&"fixed"!==x(a).mode&&!u(a)),[aF]),aH=A(I),aI=function(a){if(!a)return!1;let b=r(a.status),c=a.plan?t(a.plan):"subscription";return"trial"===b?!A(a).expired:"active"===b&&("trial"===c||"complimentary"===c||(a.plan&&(u(a.plan)||r(a.plan.code).startsWith("pilot_")),!0))}(I),aJ=["expired","suspended","cancelled"].includes(r(I?.status))||aH.expired,aK=aH.trial&&aH.known&&!aH.expired&&null!==aH.days&&aH.days<=7,aL=aF.filter(aM);function aM(a){return"subscription"===t(a)&&!u(a)&&("fixed"===x(a).mode?y(a,K)>0:o)}function aN(){P(""),window.requestAnimationFrame(()=>document.getElementById("owner-commercial-packages")?.scrollIntoView({behavior:"smooth",block:"start"}))}let aO=I?.planId||I?.plan?.id,aP=I?.plan||C.find(a=>a.id===aO),aQ=r(I?.status),aR="trial"===aQ,aS=!!I&&["pending","pending_payment","unpaid","processing"].includes(aQ);return(0,d.jsxs)("main",{className:"ba-page subscription-page",children:[(0,d.jsx)("style",{children:G}),(0,d.jsxs)("section",{className:"ba-search-card","aria-label":"Package search and actions",children:[(0,d.jsxs)("label",{className:"ba-search",children:[(0,d.jsx)("span",{children:"⌕"}),(0,d.jsx)("input",{value:O,onChange:a=>P(a.target.value),placeholder:"Search packages...","aria-label":"Search packages"})]}),(0,d.jsx)("button",{type:"button",className:"ba-add-inline",onClick:()=>L(a=>"monthly"===a?"termly":"termly"===a?"yearly":"monthly"),title:"Change fixed subscription billing period",children:"monthly"===K?"Month":"termly"===K?"Term":"Year"}),(0,d.jsx)("button",{type:"button",className:"ba-filter-button",onClick:()=>void ax(),disabled:Q,"aria-label":"Refresh",children:"↻"}),(0,d.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>X(!0),"aria-label":"More options",children:"⋯"})]}),(0,d.jsx)("style",{children:".trial-conversion-notice{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;padding:12px 14px;border-radius:15px;border:1px solid var(--border,rgba(148,163,184,.3));background:var(--card-bg,var(--surface,#fff))}.trial-conversion-notice>div{flex:1 1 240px;min-width:0}.trial-conversion-notice strong{font-size:14px}.trial-conversion-notice p{margin:4px 0;font-size:12px;line-height:1.45}.trial-conversion-notice small{display:block;color:var(--muted,#64748b);font-size:11px}.trial-conversion-notice button{border:0;border-radius:12px;background:var(--primary-color,#2563eb);color:white;padding:10px 13px;font-weight:800;cursor:pointer}.trial-conversion-notice button:focus-visible{outline:2px solid currentColor;outline-offset:3px}.trial-conversion-notice .recovery-feedback{flex:1 1 100%;margin:0;padding:10px 12px;border:1px solid var(--border,rgba(148,163,184,.3));border-radius:10px;line-height:1.5;font-size:12px;overflow-wrap:anywhere}.recovery-feedback.info{color:var(--text,#334155)}.recovery-feedback.success{color:#15803d}.recovery-feedback.warning{color:#b45309}.recovery-feedback.error{color:#b91c1c}.trial-conversion-notice a{display:inline-flex;align-items:center;justify-content:center;padding:10px 13px;border-radius:12px;border:1px solid var(--border,rgba(148,163,184,.3));color:var(--text,#334155);font-weight:800;text-decoration:underline}"}),(0,d.jsxs)("section",{className:"ba-list compact-status-list","aria-label":"Current commercial arrangement",children:[(0,d.jsxs)("button",{type:"button",className:"status-row",onClick:()=>X(!0),children:[(0,d.jsx)("span",{className:"status-icon",children:aI?"✓":aS?"!":"○"}),(0,d.jsxs)("span",{className:"status-main",children:[(0,d.jsx)("strong",{children:aP?.name||"Choose your package"}),(0,d.jsxs)("small",{children:[aP?w(aP):"No active package"," \xb7 ",I?.status||"Not selected"]}),(0,d.jsx)("em",{children:aH.expired?`Trial ended ${s(aH.endsAt)}`:aR?`Trial ends ${s(I?.trialEndsAt||I?.currentPeriodEnd)}`:aS?"Awaiting confirmation":aI?`Access active \xb7 ${s(I?.currentPeriodEnd)}`:"Explore available packages"})]}),(0,d.jsxs)("span",{className:"status-side",children:[(0,d.jsx)("span",{className:`status-dot-mini ${aI?"green":aS?"orange":"gray"}`}),(0,d.jsx)("i",{children:"⋯"})]})]}),aJ?(0,d.jsxs)("section",{className:"trial-conversion-notice",role:"status",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Your package needs attention"}),(0,d.jsxs)("p",{children:[aH.expired?`Your trial ended on ${s(aH.endsAt)}.`:`Your subscription status is ${I?.status||"restricted"}.`," Your school records are not deleted. Access and permitted actions depend on the server's effective entitlement."]}),(0,d.jsx)("small",{children:aL.length?"Select a supported paid cloud package below to begin checkout. A package is activated only after the server confirms payment.":"No self-service paid package is currently available. Please contact Eleeveon for conversion."})]}),(0,d.jsx)("button",{type:"button",onClick:aN,children:"View paid packages"})]}):null,aK?(0,d.jsxs)("section",{className:"trial-conversion-notice",role:"status",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:0===aH.days?"Trial ends today":`${aH.days} day${1===aH.days?"":"s"} left in your trial`}),(0,d.jsxs)("p",{children:["Your trial ends ",s(aH.endsAt),". Choose a supported paid package before it ends to avoid an interruption."]})]}),(0,d.jsx)("button",{type:"button",onClick:aN,children:"Explore paid packages"})]}):null,au?(0,d.jsxs)("section",{className:"trial-conversion-notice",role:"status",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Unresolved subscription quotation"}),(0,d.jsx)("p",{children:"A previous checkout or quotation is recorded on this device. Check it before starting another payment. A status check does not charge you."}),(0,d.jsxs)("small",{children:["Reference: ",au]})]}),(0,d.jsx)("button",{type:"button",disabled:ae,onClick:()=>void aD(),children:ae?"Checking…":"Check payment / subscription status"}),ao?(0,d.jsx)("p",{role:"status","aria-live":"polite",className:`recovery-feedback ${ao.kind}`,children:ao.text}):null,"quoted"===aq&&ac?.id===au&&Date.parse(ac.quoteExpiresAt)>Date.now()?(0,d.jsx)("button",{type:"button",disabled:ae,onClick:function(){if(!ac||"quoted"!==ac.status)return;if(Date.parse(ac.quoteExpiresAt)<=Date.now())return void ap({kind:"warning",text:"This quotation has expired. Check its status and cancel it on the server before requesting a replacement."});let a=C.find(a=>a.id===ac.toPlanId);a?(_(a),al(""),aj(!1)):ap({kind:"warning",text:"This quotation's plan is not available in the current catalogue. Refresh and contact support before paying."})},children:"Resume quotation"}):null,("quoted"===aq||"payment_pending"===aq&&"failed"===as)&&ac?.id===au?(0,d.jsx)("button",{type:"button",className:"cancel-quote-button",disabled:ae,onClick:()=>void aC(),children:"quoted"===aq?"Cancel unused quotation":"Cancel failed checkout"}):null,"paid"===aq&&"paid"===as&&ac?.id===au?(0,d.jsx)("button",{type:"button",disabled:ae,onClick:()=>void aE(),children:"Reconcile paid payment & activate subscription"}):null,am?(0,d.jsx)("a",{href:am,target:"_blank",rel:"noopener noreferrer",children:"Continue existing Paystack session"}):null]}):null,aS?(0,d.jsx)(E,{tone:"orange",children:"A pending package requires confirmation before activation. Do not make a duplicate payment until the invoice and provider status have been checked."}):null,U?(0,d.jsx)(E,{tone:"green",children:U}):null,S?(0,d.jsx)(E,{tone:"red",children:S}):null,Q?(0,d.jsx)(E,{tone:"gray",children:"Loading packages..."}):null]}),!Q&&I?(0,d.jsx)(l.A,{refreshKey:`${I?.id||""}:${I?.status||""}:${I?.trialEndsAt||""}`,onExplorePackages:aN}):null,Q||I?null:(0,d.jsx)(E,{tone:"orange",children:"No subscription is assigned to this account. You can prepay for a new Standard subscription before enrolling students; your purchased places are assigned after verified payment."}),(0,d.jsxs)("section",{className:"quote-panel","aria-label":"Instant student quotation",children:[(0,d.jsxs)("div",{className:"quote-heading",children:[(0,d.jsx)("strong",{children:"Get an instant student quote"}),(0,d.jsx)("small",{children:"Enter the number of students. Estimated prices appear here, regardless of the package cards below."})]}),(0,d.jsxs)("div",{className:"quote-layout",children:[(0,d.jsx)(D,{value:M,onChange:N,label:"Student places"}),(0,d.jsx)("div",{className:"quote-results",children:aG.length?aG.map(a=>{let b=z(a,M,K);return(0,d.jsxs)("div",{className:"quote-result",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:a.name}),(0,d.jsxs)("small",{children:[v(a)," \xb7 /",b.period]})]}),(0,d.jsx)("b",{children:null==b.amount?"Quote unavailable":(0,i.TG)(b.amount,a.currency||"GHS")})]},a.id)}):(0,d.jsx)("div",{className:"quote-result",children:(0,d.jsx)("span",{children:"No published per-student pricing available."})})})]}),(0,d.jsx)("small",{className:"quote-disclaimer",children:"Estimates only. Your invoice and payment amount must be confirmed by the server. No payment is initiated by entering a student count."})]}),Q||aF.length?null:(0,d.jsxs)("section",{className:"ba-empty",children:[(0,d.jsx)("h3",{children:"No packages found"}),(0,d.jsx)("p",{children:"Try adjusting your search."})]}),(0,d.jsx)("section",{id:"owner-commercial-packages",className:"plans-grid","aria-label":"Commercial packages",children:aF.map(a=>{let b=z(a,M,K),c=!!aO&&aO===a.id&&aI,e=!!aO&&aO===a.id&&aS,f=c&&"subscription"===t(a)&&"fixed"!==x(a).mode,g=!f&&(c||!aM(a));return(0,d.jsxs)("article",{className:c?"plan current":e?"plan waiting":"plan",children:[c?(0,d.jsx)("div",{className:"ribbon",children:"Current"}):e?(0,d.jsx)("div",{className:"ribbon waiting-ribbon",children:"Pending"}):null,(0,d.jsxs)("div",{children:[(0,d.jsxs)("span",{className:"badge",children:[a.code," \xb7 ",w(a)]}),(0,d.jsx)("h2",{children:a.name}),(0,d.jsx)("p",{children:a.description||"An Eleeveon Schools package."})]}),(0,d.jsxs)("div",{className:"price",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"trial"===t(a)||"complimentary"===t(a)?"Included":null==b.amount?"Request quote":(0,i.TG)(b.amount,a.currency||"GHS")}),(0,d.jsx)("span",{children:"trial"===t(a)?`\xb7 ${Number(a.metadata?.trialDays||14)}-day trial`:"perpetual"===t(a)?"\xb7 one-time licence":"complimentary"===t(a)?"\xb7 complimentary":`/${b.period}`})]}),(0,d.jsx)("small",{children:b.estimated?`Estimate for ${M.toLocaleString()} students`:"perpetual"===t(a)?v(a):"trial"===t(a)?"No upfront payment":"Price is configured by the package"})]}),(0,d.jsx)("ul",{children:B(a).slice(0,16).map(a=>(0,d.jsxs)("li",{children:["✓ ",a]},a))}),(0,d.jsx)("button",{type:"button",disabled:g,onClick:()=>f?(N(Math.max(M,Number(I?.metadata?.prepaidStudentLimit||0)+1)),ab(a)):"fixed"===x(a).mode?Z(a):az(a),children:c&&"subscription"===t(a)&&"fixed"!==x(a).mode?"Increase student capacity":c?"Current package":"trial"===t(a)?"Trial activation coming soon":"perpetual"===t(a)?"Licence checkout coming soon":"fixed"!==x(a).mode?o?"Get verified quote":"Student checkout not yet enabled":"complimentary"===t(a)?"Managed by Eleeveon":y(a,K)>0?"Choose payment":"Contact Eleeveon"})]},a.id)})}),aa?(0,d.jsx)(n,{children:(0,d.jsx)("div",{className:"ba-sheet-backdrop",role:"presentation",children:(0,d.jsxs)("section",{className:"ba-sheet small",role:"dialog","aria-modal":"true","aria-label":"Increase purchased student capacity",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Increase student capacity"}),(0,d.jsx)("p",{children:"Existing Standard subscription \xb7 keep the same expiry date"})]}),(0,d.jsx)("button",{type:"button",onClick:()=>ab(null),"aria-label":"Close upgrade panel",children:"✕"})]}),(0,d.jsx)("div",{className:"student-checkout-content",children:(a=Number(I?.metadata?.prepaidStudentLimit),b=I?.currentPeriodStart?new Date(I.currentPeriodStart).getTime():NaN,c=I?.currentPeriodEnd?new Date(I.currentPeriodEnd).getTime():NaN,f=Date.now(),g=Number.isFinite(b)&&Number.isFinite(c)&&c>b&&c>f?Math.max(0,Math.min(1,(c-f)/(c-b))):null,h=Number.isSafeInteger(a)&&a>0?z(aa,a,K).amount:null,j=Number.isSafeInteger(a)&&a>0&&M>a?z(aa,M,K).amount:null,m=null!==h&&null!==j?Math.max(0,j-h):null,q=null!==g&&null!==m?Math.round(m*g*100)/100:null,(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"student-checkout-quote",children:[(0,d.jsxs)("strong",{children:["Current paid allowance: ",Number.isSafeInteger(a)&&a>0?a.toLocaleString():"Not available"]}),(0,d.jsxs)("span",{children:["Subscription ends: ",s(I?.currentPeriodEnd)]})]}),(0,d.jsx)(D,{value:M,onChange:N,label:"New TOTAL student allowance (not additional places)"}),Number.isSafeInteger(a)&&a>0&&M<=a?(0,d.jsxs)("p",{role:"alert",className:"student-checkout-error",children:["Enter a total greater than your existing allowance of ",a,"."]}):null,null!==q&&M>a?(0,d.jsxs)("div",{className:"student-checkout-quote",children:[(0,d.jsxs)("strong",{children:["Indicative remaining-term difference: GHS ",q.toFixed(2)]}),(0,d.jsxs)("span",{children:[M-a," additional places \xb7 ",Math.round((g??0)*100),"% of the existing period remaining"]}),(0,d.jsx)("small",{children:"For illustration only: not a payable quotation or an invoice."})]}):(0,d.jsx)("p",{children:"Once the server confirms your existing allowance and remaining term, it will calculate the upgrade balance."}),(0,d.jsx)("p",{role:"status",children:"The backend will calculate your remaining-term charge and round up to the next whole GH₵ because the current billing records store whole cedis. The original expiry date will not change."}),(0,d.jsx)("button",{type:"button",className:"student-checkout-primary",disabled:!o||!Number.isSafeInteger(a)||a<1||M<=a||!g||ae,onClick:()=>{ab(null),az(aa)},children:"Get verified upgrade quote & pay"}),(0,d.jsx)("button",{type:"button",onClick:()=>ab(null),children:"Not now"})]}))})]})})}):null,W?(0,d.jsx)(n,{children:(0,d.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet small",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Package details"}),(0,d.jsx)("p",{children:"Your current commercial arrangement"})]}),(0,d.jsx)("button",{type:"button",onClick:()=>X(!1),children:"✕"})]}),(0,d.jsxs)("div",{className:"sub-info-list",children:[(0,d.jsx)(F,{label:"Package",value:aP?.name||"None"}),(0,d.jsx)(F,{label:"Type",value:aP?w(aP):"Not selected"}),(0,d.jsx)(F,{label:"Deployment",value:aP?v(aP):"—"}),(0,d.jsx)(F,{label:"Status",value:I?.status||"None"}),(0,d.jsx)(F,{label:"Access until",value:s(I?.trialEndsAt||I?.currentPeriodEnd)}),(0,d.jsx)(F,{label:"Payment recorded",value:I?.payments?.some(a=>"paid"===r(a.status))||I?.invoices?.some(a=>"paid"===r(a.status))?"Yes":"No paid record in this response"})]}),(0,d.jsx)("div",{className:"cycle-sheet",children:["termly","monthly","yearly"].map(a=>(0,d.jsx)("button",{type:"button",className:K===a?"active":"",onClick:()=>L(a),children:a},a))}),(0,d.jsx)("div",{className:"ba-menu-list",children:(0,d.jsxs)("button",{type:"button",onClick:()=>{X(!1),ax()},children:[(0,d.jsx)("span",{children:"↻"}),(0,d.jsx)("b",{children:"Refresh"}),(0,d.jsx)("small",{children:"Reload account and catalogue"})]})})]})})}):null,$?(0,d.jsx)(n,{children:(0,d.jsx)("div",{className:"ba-sheet-backdrop",role:"presentation",children:(0,d.jsxs)("section",{className:"ba-sheet small",role:"dialog","aria-modal":"true","aria-label":"Verified student subscription checkout",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:$.name}),(0,d.jsx)("p",{children:"Verified server quotation \xb7 Paystack"})]}),(0,d.jsx)("button",{type:"button",disabled:ae,onClick:()=>{_(null),ad(null),aj(!1)},children:"✕"})]}),(0,d.jsxs)("div",{className:"student-checkout-content",children:[(0,d.jsx)("p",{children:I?.planId===$.id&&I?.status==="active"&&M>Number(I?.metadata?.prepaidStudentLimit||0)?`Increase your existing allowance from ${I?.metadata?.prepaidStudentLimit||"—"} to ${M} places. You will pay only the rounded remaining-term difference. Expiry: ${s(I?.currentPeriodEnd)}.`:"Prepay for student places. The backend verifies your allowance and calculates the payable amount."}),ac?null:(0,d.jsx)(D,{value:M,onChange:N,label:"Places to prepay",disabled:ae}),ac?(0,d.jsxs)("div",{className:"student-checkout-quote",children:[(0,d.jsx)("strong",{children:(0,i.TG)(ac.amountDue,ac.currency)}),(0,d.jsxs)("span",{children:[ac.calculation?.studentCount??"—"," prepaid student places \xb7 expires ",s(ac.quoteExpiresAt)]}),(0,d.jsxs)("small",{children:["Quotation status: ",ac.status,ac.calculation?.upgradeFromSeats?` \xb7 Upgrade ${ac.calculation.upgradeFromSeats} → ${ac.calculation.upgradeToSeats} places \xb7 Expiry unchanged: ${s(ac.calculation.upgradePeriodEnd)} \xb7 Rounded up to whole GH₵`:""]})]}):null,ak?(0,d.jsx)("p",{role:"alert",className:"student-checkout-error",children:ak}):null,ac?null:(0,d.jsx)("button",{type:"button",className:"student-checkout-primary",disabled:ae,onClick:()=>void aA(),children:ae?"Preparing quotation…":"Get server quotation"}),ac?.status==="quoted"?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("button",{type:"button",className:"student-checkout-primary",disabled:ae||new Date(ac.quoteExpiresAt).getTime()<=Date.now(),onClick:()=>aj(!0),children:"Continue to secure payment"})}):null,(0,d.jsx)("button",{type:"button",disabled:ae,onClick:()=>void aD(),children:"Check existing quotation / payment status"}),am&&(0,d.jsx)("a",{href:am,rel:"noopener noreferrer",target:"_blank",className:"ba-btn",children:"Continue existing Paystack checkout"}),(0,d.jsx)("small",{children:"Never pay twice for an unconfirmed order. Your subscription only activates after verified settlement."})]})]})})}):null,ai&&ac&&$?(0,d.jsx)(k,{open:!0,purpose:"subscription_quote",quoteId:ac.id,title:`Pay for ${$.name}`,description:`Prepaid allowance for ${ac.calculation?.studentCount??"your"} student places. Access activates only after verified payment.`,amount:ac.amountDue,currency:ac.currency,onClose:()=>aj(!1),onError:a=>{al(`${a} Check the quotation before trying again.`),aj(!1)}}):null,Y?(0,d.jsx)(k,{open:!0,onClose:()=>Z(null),title:Y.name,description:Y.description||"Complete your subscription payment.",amount:y(Y,K),currency:Y.currency||"GHS",planId:Y.id,billingCycle:K,onSuccess:async a=>{V(a.message||"Payment request received. Verify payment and refresh your package status. Your plan is not active until confirmed by the backend."),Z(null),await ax(!0)},onError:a=>T(a)}):null]})}function D({value:a,onChange:b,label:c,disabled:e=!1}){let f=a=>b(Math.min(1e6,Math.max(1,Math.floor(Number.isFinite(a)?a:1))));return(0,d.jsxs)("div",{className:"places-picker","aria-label":c,children:[(0,d.jsxs)("div",{className:"places-picker-top",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{className:"places-picker-eyebrow",children:"PREPAID CAPACITY"}),(0,d.jsx)("strong",{children:c}),(0,d.jsx)("small",{children:"Choose your allowance before enrolling students"})]}),(0,d.jsx)("span",{className:"places-picker-term",children:"Per term"})]}),(0,d.jsxs)("div",{className:"places-picker-controls",children:[(0,d.jsx)("button",{type:"button",disabled:e||a<=1,"aria-label":"Reduce places by ten",onClick:()=>f(a-10),children:"−"}),(0,d.jsxs)("label",{className:"places-picker-input",children:[(0,d.jsx)("input",{type:"number",min:"1",max:"1000000",step:"1",value:a,disabled:e,onChange:a=>f(Number(a.target.value)),"aria-label":c}),(0,d.jsx)("span",{children:"student places"})]}),(0,d.jsx)("button",{type:"button",disabled:e||a>=1e6,"aria-label":"Add ten places",onClick:()=>f(a+10),children:"+"})]}),(0,d.jsx)("div",{className:"places-picker-presets","aria-label":"Quick student-place choices",children:[50,100,200,500].map(b=>(0,d.jsx)("button",{type:"button",disabled:e,className:b===a?"selected":"","aria-pressed":b===a,onClick:()=>f(b),children:b.toLocaleString()},b))})]})}function E({tone:a,children:b}){return(0,d.jsxs)("section",{className:`slim-notice ${a}`,children:[(0,d.jsx)("span",{className:`status-dot-mini ${a}`}),(0,d.jsx)("p",{children:b})]})}function F({label:a,value:b}){return(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:a}),(0,d.jsx)("strong",{children:b})]})}let G=`
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
`},49663:()=>{},62941:(a,b,c)=>{"use strict";function d(){return(process.env.NEXT_PUBLIC_API_URL||process.env.NEXT_PUBLIC_API_BASE_URL||"").replace(/\/$/,"")}function e(a){return{"Content-Type":"application/json",...a||{}}}async function f(a){let b=await a.text().catch(()=>""),c=b?function(a){try{return JSON.parse(a)}catch{return null}}(b):null;if(!a.ok){let d=c?.message||c?.error||b||`Request failed with status ${a.status}`;throw Error(Array.isArray(d)?d.join(", "):String(d))}return c}function g(a,b="GHS"){return`${b} ${Number(a||0).toLocaleString("en-GH")}`}function h(a){return"momo"===a||"card"===a||"bank"===a?"paystack":"manual"}function i(){return"mtn"}function j(a){return({momo:"Mobile Money",card:"Card",bank:"Bank",cash:"Cash",manual:"Manual"})[a]||a}function k(a){return a?.authorizationUrl||a?.providerResponse?.authorizationUrl||a?.payment?.authorizationUrl||a?.data?.authorizationUrl}c.d(b,{Gi:()=>d,Pw:()=>e,Sh:()=>j,TG:()=>g,Vh:()=>f,g4:()=>h,qc:()=>i,wr:()=>k})},73142:(a,b,c)=>{"use strict";a.exports=c(73895).style},73895:(a,b,c)=>{"use strict";c(49663);var d=c(67484),e=d&&"object"==typeof d&&"default"in d?d:{default:d},f="u">typeof process&&process.env&&!0,g=function(a){return"[object String]"===Object.prototype.toString.call(a)},h=function(){function a(a){var b=void 0===a?{}:a,c=b.name,d=void 0===c?"stylesheet":c,e=b.optimizeForSpeed,h=void 0===e?f:e;i(g(d),"`name` must be a string"),this._name=d,this._deletedRulePlaceholder="#"+d+"-deleted-rule____{}",i("boolean"==typeof h,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=h,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0,this._nonce=null}var b,c=a.prototype;return c.setOptimizeForSpeed=function(a){i("boolean"==typeof a,"`setOptimizeForSpeed` accepts a boolean"),i(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=a,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var a=this;i(!this._injected,"sheet already injected"),this._injected=!0,this._serverSheet={cssRules:[],insertRule:function(b,c){return"number"==typeof c?a._serverSheet.cssRules[c]={cssText:b}:a._serverSheet.cssRules.push({cssText:b}),c},deleteRule:function(b){a._serverSheet.cssRules[b]=null}}},c.getSheetForTag=function(a){if(a.sheet)return a.sheet;for(var b=0;b<document.styleSheets.length;b++)if(document.styleSheets[b].ownerNode===a)return document.styleSheets[b]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(a,b){return i(g(a),"`insertRule` accepts only strings"),"number"!=typeof b&&(b=this._serverSheet.cssRules.length),this._serverSheet.insertRule(a,b),this._rulesCount++},c.replaceRule=function(a,b){this._optimizeForSpeed;var c=this._serverSheet;if(b.trim()||(b=this._deletedRulePlaceholder),!c.cssRules[a])return a;c.deleteRule(a);try{c.insertRule(b,a)}catch(d){f||console.warn("StyleSheet: illegal rule: \n\n"+b+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),c.insertRule(this._deletedRulePlaceholder,a)}return a},c.deleteRule=function(a){this._serverSheet.deleteRule(a)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._serverSheet.cssRules=[]},c.cssRules=function(){return this._serverSheet.cssRules},c.makeStyleTag=function(a,b,c){b&&i(g(b),"makeStyleTag accepts only strings as second parameter");var d=document.createElement("style");this._nonce&&d.setAttribute("nonce",this._nonce),d.type="text/css",d.setAttribute("data-"+a,""),b&&d.appendChild(document.createTextNode(b));var e=document.head||document.getElementsByTagName("head")[0];return c?e.insertBefore(d,c):e.appendChild(d),d},b=[{key:"length",get:function(){return this._rulesCount}}],function(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}(a.prototype,b),a}();function i(a,b){if(!a)throw Error("StyleSheet: "+b+".")}var j=function(a){for(var b=5381,c=a.length;c;)b=33*b^a.charCodeAt(--c);return b>>>0},k={};function l(a,b){if(!b)return"jsx-"+a;var c=String(b),d=a+c;return k[d]||(k[d]="jsx-"+j(a+"-"+c)),k[d]}function m(a,b){var c=a+(b=b.replace(/\/style/gi,"\\/style"));return k[c]||(k[c]=b.replace(/__jsx-style-dynamic-selector/g,a)),k[c]}var n=function(){function a(a){var b=void 0===a?{}:a,c=b.styleSheet,d=void 0===c?null:c,e=b.optimizeForSpeed,f=void 0!==e&&e;this._sheet=d||new h({name:"styled-jsx",optimizeForSpeed:f}),this._sheet.inject(),d&&"boolean"==typeof f&&(this._sheet.setOptimizeForSpeed(f),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var b=a.prototype;return b.add=function(a){var b=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(a.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed());var c=this.getIdAndRules(a),d=c.styleId,e=c.rules;if(d in this._instancesCounts){this._instancesCounts[d]+=1;return}var f=e.map(function(a){return b._sheet.insertRule(a)}).filter(function(a){return -1!==a});this._indices[d]=f,this._instancesCounts[d]=1},b.remove=function(a){var b=this,c=this.getIdAndRules(a).styleId;if(function(a,b){if(!a)throw Error("StyleSheetRegistry: "+b+".")}(c in this._instancesCounts,"styleId: `"+c+"` not found"),this._instancesCounts[c]-=1,this._instancesCounts[c]<1){var d=this._fromServer&&this._fromServer[c];d?(d.parentNode.removeChild(d),delete this._fromServer[c]):(this._indices[c].forEach(function(a){return b._sheet.deleteRule(a)}),delete this._indices[c]),delete this._instancesCounts[c]}},b.update=function(a,b){this.add(b),this.remove(a)},b.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},b.cssRules=function(){var a=this,b=this._fromServer?Object.keys(this._fromServer).map(function(b){return[b,a._fromServer[b]]}):[],c=this._sheet.cssRules();return b.concat(Object.keys(this._indices).map(function(b){return[b,a._indices[b].map(function(a){return c[a].cssText}).join(a._optimizeForSpeed?"":"\n")]}).filter(function(a){return!!a[1]}))},b.styles=function(a){var b,c;return b=this.cssRules(),void 0===(c=a)&&(c={}),b.map(function(a){var b=a[0],d=a[1];return e.default.createElement("style",{id:"__"+b,key:"__"+b,nonce:c.nonce?c.nonce:void 0,dangerouslySetInnerHTML:{__html:d}})})},b.getIdAndRules=function(a){var b=a.children,c=a.dynamic,d=a.id;if(c){var e=l(d,c);return{styleId:e,rules:Array.isArray(b)?b.map(function(a){return m(e,a)}):[m(e,b)]}}return{styleId:l(d),rules:Array.isArray(b)?b:[b]}},b.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(a,b){return a[b.id.slice(2)]=b,a},{})},a}(),o=d.createContext(null);o.displayName="StyleSheetContext";e.default.useInsertionEffect||e.default.useLayoutEffect;var p=void 0;function q(a){var b=p||d.useContext(o);return b&&b.add(a),null}q.dynamic=function(a){return a.map(function(a){return l(a[0],a[1])}).join(" ")},b.style=q},90182:(a,b,c)=>{"use strict";function d(a,b){if(!Number.isSafeInteger(b)||b<1||"fixed"===a.mode)return null;let c=0;if("per_student"===a.mode&&(c=b*(a.perStudentRate||0)),"tiered"===a.mode){let d=0;for(let e of a.tiers||[]){let a=null==e.upTo?b:Math.min(e.upTo,b);if(c+=Math.max(0,a-d)*e.unitPrice,(d=a)>=b)break}if(d<b)return null}return Math.round(100*Math.max(c,a.minimumAmount||0))/100}c.d(b,{B:()=>d})},94624:(a,b,c)=>{"use strict";function d({children:a}){return a}c.r(b),c.d(b,{default:()=>d}),c(91986)},99646:(a,b,c)=>{"use strict";c.d(b,{A:()=>i});var d=c(48249),e=c(67484);c(72905);var f=c(87e3);function g(a){return"number"==typeof a&&Number.isFinite(a)&&a>=0?a:null}function h(a){if(!a)return"Not configured";let b=new Date(a);return Number.isNaN(b.getTime())?"Not configured":b.toLocaleDateString("en-GH",{day:"numeric",month:"short",year:"numeric"})}function i({onExplorePackages:a,refreshKey:b}){let[c,n]=(0,e.useState)(null),[o,p]=(0,e.useState)(!0),[q,r]=(0,e.useState)(""),[s,t]=(0,e.useState)(0);if(o)return(0,d.jsx)("section",{style:k,"aria-label":"Checking trial access",children:(0,d.jsx)("span",{style:l,children:"Checking trial status and student allowance..."})});if(q)return(0,d.jsxs)("section",{style:k,"aria-label":"Trial status unavailable",children:[(0,d.jsx)("strong",{children:"Unable to verify current trial access"}),(0,d.jsx)("p",{style:l,children:"Reconnect and refresh to view your entitlement and student allowance. The displayed information is not a substitute for backend access checks."}),(0,d.jsx)("button",{type:"button",style:m,onClick:()=>t(a=>a+1),children:"Retry"})]});if(!c)return null;let{snapshot:u,usage:v}=c;if("trial"!==u.licenseModel&&"trial"!==u.source)return null;let w=(0,f.YP)({status:u.status,validUntil:u.validUntil,graceEndsAt:u.graceEndsAt}),x=u.validUntil,y=function(a){if(!a)return null;let b=Date.parse(a);return Number.isFinite(b)?Math.max(0,Math.ceil((b-Date.now())/864e5)):null}(x),z=g(u.limits.students),A=g(v?.students),B=null!==z&&null!==A?Math.max(0,z-A):null,C=null===u.limits.students,D=!!x&&Number.isFinite(Date.parse(x))&&Date.parse(x)<=Date.now()||"expired"===w||"cancelled"===w||"suspended"===w,E=!x,F=v?.calculatedAt&&!Number.isNaN(Date.parse(v.calculatedAt))?h(v.calculatedAt):null;return(0,d.jsxs)("section",{style:k,"aria-label":"Your Eleeveon free trial",children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{style:{fontSize:15},children:"Your Free Trial"}),(0,d.jsx)("div",{style:l,children:D?"Trial ended or access restricted":"trial"===w?"Trial in progress":`Access status: ${w}`})]}),(0,d.jsx)("span",{style:{padding:"5px 10px",borderRadius:99,fontSize:11,fontWeight:800,background:D?"#fee2e2":"#dcfce7",color:D?"#991b1b":"#166534"},children:D?"Expired / restricted":w.toUpperCase()})]}),(0,d.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(132px,1fr))",gap:8},children:[(0,d.jsx)(j,{title:"Days remaining",value:null===y?"Not available":String(y),sub:E?"Expiry unavailable":`Ends ${h(x)}`}),(0,d.jsx)(j,{title:"Students recorded",value:null===A?"Not available":A.toLocaleString("en-GH"),sub:F?`Last snapshot ${F}`:"Based on available usage snapshot"}),(0,d.jsx)(j,{title:"Student allowance",value:C?"Unlimited":null===z?"Not available":z.toLocaleString("en-GH"),sub:"From your effective entitlement"}),(0,d.jsx)(j,{title:"Places remaining",value:C?"Unlimited":null===B?"Not available":B.toLocaleString("en-GH"),sub:0===B?"No remaining places under this snapshot":"Calculated from the latest usage snapshot"})]}),E?(0,d.jsx)("p",{style:{...l,margin:0},children:"Your trial expiry is missing from the entitlement response. Please contact Eleeveon support; an unknown expiry is not unlimited access."}):null,D?(0,d.jsx)("p",{style:{...l,margin:0},children:"Your trial period has ended. Your existing records are not erased by this notice. Choose a supported paid package to request conversion; activation and any access restrictions are determined by the backend."}):null,(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",justifyContent:"space-between"},children:[(0,d.jsx)("span",{style:l,children:"Usage figures can lag behind recently synchronized admissions. Server limits remain authoritative."}),a?(0,d.jsx)("button",{type:"button",style:m,onClick:a,children:D?"View paid packages":"Explore packages"}):(0,d.jsx)("span",{style:{...l,fontWeight:700},children:"Open My Subscription to explore packages"})]})]})}function j({title:a,value:b,sub:c}){return(0,d.jsxs)("div",{style:{padding:"11px 12px",border:"1px solid var(--border,rgba(148,163,184,.25))",borderRadius:15,background:"color-mix(in srgb,var(--muted,#64748b) 5%,transparent)",minWidth:0},children:[(0,d.jsx)("div",{style:{...l,fontWeight:700,fontSize:11},children:a}),(0,d.jsx)("strong",{style:{display:"block",fontSize:23,lineHeight:1.4,overflowWrap:"anywhere"},children:b}),(0,d.jsx)("span",{style:{...l,fontSize:10},children:c})]})}let k={display:"grid",gap:12,padding:14,borderRadius:20,border:"1px solid var(--border,rgba(148,163,184,.25))",background:"var(--card-bg,var(--card,var(--surface,#fff)))",color:"var(--text,#0f172a)"},l={color:"var(--muted,#64748b)",fontSize:11,lineHeight:1.45},m={padding:"10px 13px",borderRadius:99,border:0,fontSize:12,fontWeight:800,cursor:"pointer",background:"var(--primary-color,#2563eb)",color:"white"}}};
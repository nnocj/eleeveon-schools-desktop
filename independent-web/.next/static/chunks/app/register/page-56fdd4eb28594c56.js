(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2454],{19137:(e,r,t)=>{"use strict";t.d(r,{AT:()=>n,JR:()=>o,NR:()=>i,VB:()=>s});var a=t(41463);let o=a.env.NEXT_PUBLIC_API_URL||a.env.NEXT_PUBLIC_BACKEND_URL||"http://localhost:4000";function i(e){e&&(localStorage.setItem("eleeveonToken",e),localStorage.setItem("accessToken",e),localStorage.setItem("token",e),localStorage.setItem("authToken",e),localStorage.setItem("eleeveon_auth_token",e))}function s(e){return e?.accessToken||e?.token||e?.access_token||null}async function n(e,r={}){let t=localStorage.getItem("eleeveonToken")||localStorage.getItem("accessToken")||localStorage.getItem("token")||localStorage.getItem("authToken")||"",a=`${o}${e.startsWith("/")?e:`/${e}`}`,i={"Content-Type":"application/json",...r.headers||{}};t&&(i.Authorization=`Bearer ${t}`);let s=await fetch(a,{...r,headers:i}),l=await s.text(),c=null;try{c=l?JSON.parse(l):null}catch{c=l}if(!s.ok){let e=c?.message||c?.error||`Request failed with status ${s.status}`;throw Error(Array.isArray(e)?e.join(", "):e)}return c}},25073:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u});var a=t(95155),o=t(12115),i=t(73321),s=t(19137),n=t(31685),l=t(20753);function c(e){return null==e?null:String(e).trim()||null}function d(e){let r=c(e.branchId||e.schoolBranchId||e.branch?.id);return{...e,id:c(e.id)||`membership-${e.role}-${Date.now()}`,accountId:c(e.accountId),schoolId:c(e.schoolId||e.school?.id),branchId:r,schoolBranchId:r,teacherId:c(e.teacherId||e.teacher?.id),studentId:c(e.studentId||e.student?.id),parentId:c(e.parentId||e.parent?.id),active:!1!==e.active}}function u(){let e=(0,i.useRouter)(),[r,t]=(0,o.useState)({fullName:"",email:"",password:"",accountName:""}),[c,u]=(0,o.useState)(!1),[g,m]=(0,o.useState)(!1),h=e=>{t(r=>({...r,...e}))},f=async()=>{if(!r.fullName.trim())return alert("Enter your full name");if(!r.accountName.trim())return alert("Enter school or business account name");if(!r.email.trim())return alert("Enter your email address");if(!r.password.trim())return alert("Enter your password");if(r.password.trim().length<6)return alert("Password must be at least 6 characters");try{u(!0);let e=await (0,s.AT)("/auth/register",{method:"POST",body:JSON.stringify({fullName:r.fullName.trim(),email:r.email.trim().toLowerCase(),password:r.password,accountName:r.accountName.trim()})});if(!e.user?.accountId)throw Error("Account created but no account ID was returned.");let t=(0,s.VB)(e);if(!t)throw console.error("Register response without token:",e),Error("Account created but no login token was returned.");(0,l.pP)(),(0,s.NR)(t),(0,n.d1)(e.user.accountId);let a=(e.user.memberships||e.memberships||[]).filter(e=>!1!==e.active).map(d),o={...e.user,memberships:a,userMemberships:a},i=e.account?{...e.account,memberships:a,userMemberships:a}:null;localStorage.setItem("eleeveon_auth_user",JSON.stringify(o)),localStorage.setItem("eleeveon_auth_account",JSON.stringify(i)),localStorage.setItem("eleeveon_account_user",JSON.stringify(o)),localStorage.setItem("eleeveon_account_info",JSON.stringify(i)),localStorage.setItem("eleeveon_user_memberships",JSON.stringify(a)),localStorage.setItem("user",JSON.stringify(o)),localStorage.setItem("account",JSON.stringify(i)),sessionStorage.setItem("eleeveon_auth_user",JSON.stringify(o)),sessionStorage.setItem("eleeveon_auth_account",JSON.stringify(i)),sessionStorage.setItem("eleeveon_user_memberships",JSON.stringify(a));let c=a.find(e=>["super_admin","owner"].includes(String(e.role||"")))||a[0]||{id:`owner-${e.user.id}`,role:"super_admin",active:!0};(0,l.Kn)(c),window.location.replace("/owner")}catch(e){alert(e?.message||"Registration failed")}finally{u(!1)}},b=e=>{"Enter"!==e.key||c||f()};return(0,a.jsxs)("main",{className:"register-page",children:[(0,a.jsx)("style",{children:p}),(0,a.jsxs)("section",{className:"register-card",children:[(0,a.jsx)("div",{className:"register-badge",children:"\uD83C\uDFEB"}),(0,a.jsx)("h1",{children:"Create Account"}),(0,a.jsx)("p",{children:"Create your Eleeveon owner workspace."}),(0,a.jsxs)("div",{className:"register-grid",children:[(0,a.jsx)("input",{placeholder:"Full name",value:r.fullName,onChange:e=>h({fullName:e.target.value}),onKeyDown:b,autoComplete:"name"}),(0,a.jsx)("input",{placeholder:"School / business account name",value:r.accountName,onChange:e=>h({accountName:e.target.value}),onKeyDown:b,autoComplete:"organization"}),(0,a.jsx)("input",{placeholder:"Email",value:r.email,onChange:e=>h({email:e.target.value}),onKeyDown:b,autoComplete:"email"}),(0,a.jsxs)("div",{className:"password-wrap",children:[(0,a.jsx)("input",{type:g?"text":"password",placeholder:"Password",value:r.password,onChange:e=>h({password:e.target.value}),onKeyDown:b,autoComplete:"new-password"}),(0,a.jsx)("button",{type:"button",className:"password-toggle",onClick:()=>m(e=>!e),disabled:c,"aria-label":g?"Hide password":"Show password",children:g?"\uD83D\uDE48":"\uD83D\uDC41"})]}),(0,a.jsx)("button",{type:"button",onClick:f,disabled:c,children:c?"Creating...":"Create Account"}),(0,a.jsx)("button",{type:"button",className:"ghost",onClick:()=>e.push("/login"),disabled:c,children:"Already have account? Login"})]})]})]})}let p=`
.register-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  display: grid;
  place-items: center;
  padding: 16px;
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--primary-color, #2563eb) 18%, transparent), transparent 34%),
    var(--bg, #f8fafc);
  color: var(--text, #0f172a);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

.register-page *,
.register-page *::before,
.register-page *::after {
  box-sizing: border-box;
}

.register-card {
  width: min(460px, 100%);
  border-radius: 28px;
  padding: 24px;
  background: var(--surface, #ffffff);
  border: 1px solid rgba(148, 163, 184, .24);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .12);
  overflow: hidden;
}

.register-badge {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: color-mix(in srgb, var(--primary-color, #2563eb) 13%, #fff);
  font-size: 26px;
}

.register-card h1 {
  margin: 16px 0 4px;
  font-size: clamp(28px, 9vw, 38px);
  font-weight: 1000;
  letter-spacing: -.06em;
  line-height: 1;
}

.register-card p {
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.55;
}

.register-grid {
  display: grid;
  gap: 12px;
  margin-top: 20px;
}

.register-grid input,
.password-wrap input {
  width: 100%;
  min-height: 48px;
  border: 1px solid rgba(148, 163, 184, .28);
  border-radius: 16px;
  padding: 0 14px;
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
  outline: none;
  font: inherit;
  font-weight: 750;
}

.password-wrap {
  position: relative;
  width: 100%;
  min-width: 0;
}

.password-wrap input {
  padding-right: 52px;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  min-height: 40px !important;
  border: 0 !important;
  border-radius: 14px !important;
  padding: 0 !important;
  background: rgba(148, 163, 184, .12) !important;
  color: var(--text, #0f172a) !important;
  display: grid;
  place-items: center;
  font-size: 17px;
  cursor: pointer;
}

.register-grid input:focus,
.password-wrap input:focus {
  border-color: color-mix(in srgb, var(--primary-color, #2563eb) 60%, rgba(148,163,184,.28));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary-color, #2563eb) 13%, transparent);
}

.register-grid button {
  min-height: 48px;
  border: 0;
  border-radius: 16px;
  padding: 0 16px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font: inherit;
  font-weight: 950;
  cursor: pointer;
}

.register-grid button:disabled {
  opacity: .58;
  cursor: not-allowed;
}

.register-grid button.ghost {
  border: 1px solid rgba(148, 163, 184, .24);
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
}

@media (max-width: 420px) {
  .register-page {
    padding: 10px;
  }

  .register-card {
    border-radius: 24px;
    padding: 18px;
  }

  .register-grid input,
  .register-grid button,
  .password-wrap input {
    min-height: 46px;
    border-radius: 15px;
  }

  .password-toggle {
    width: 38px;
    height: 38px;
    min-height: 38px !important;
    border-radius: 13px !important;
  }
}
`},50555:(e,r,t)=>{Promise.resolve().then(t.bind(t,25073))},73321:(e,r,t)=>{"use strict";var a=t(74645);t.o(a,"usePathname")&&t.d(r,{usePathname:function(){return a.usePathname}}),t.o(a,"useRouter")&&t.d(r,{useRouter:function(){return a.useRouter}})}},e=>{e.O(0,[5125,8441,3794,7358],()=>e(e.s=50555)),_N_E=e.O()}]);
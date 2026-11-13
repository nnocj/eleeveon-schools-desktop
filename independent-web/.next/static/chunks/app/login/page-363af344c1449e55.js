(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4520],{19137:(e,r,t)=>{"use strict";t.d(r,{AT:()=>n,JR:()=>a,NR:()=>s,VB:()=>i});var o=t(41463);let a=o.env.NEXT_PUBLIC_API_URL||o.env.NEXT_PUBLIC_BACKEND_URL||"http://localhost:4000";function s(e){e&&(localStorage.setItem("eleeveonToken",e),localStorage.setItem("accessToken",e),localStorage.setItem("token",e),localStorage.setItem("authToken",e),localStorage.setItem("eleeveon_auth_token",e))}function i(e){return e?.accessToken||e?.token||e?.access_token||null}async function n(e,r={}){let t=localStorage.getItem("eleeveonToken")||localStorage.getItem("accessToken")||localStorage.getItem("token")||localStorage.getItem("authToken")||"",o=`${a}${e.startsWith("/")?e:`/${e}`}`,s={"Content-Type":"application/json",...r.headers||{}};t&&(s.Authorization=`Bearer ${t}`);let i=await fetch(o,{...r,headers:s}),l=await i.text(),d=null;try{d=l?JSON.parse(l):null}catch{d=l}if(!i.ok){let e=d?.message||d?.error||`Request failed with status ${i.status}`;throw Error(Array.isArray(e)?e.join(", "):e)}return d}},42309:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>I});var o=t(95155),a=t(12115),s=t(49742),i=t(17933),n=t(73321),l=t(19137),d=t(31685),c=t(20753),u=t(86263);let p="eleeveon_auth_user",g="eleeveon_auth_account",h="eleeveon_account_user",m="eleeveon_account_info",b="eleeveon_user_memberships";function f(e){return null==e?null:String(e).trim()||null}function w(e){if(!e.role)return null;let r=f(e.user?.branchId||e.user?.schoolBranchId||e.user?.activeBranchId);return{id:`direct-${e.role}-${e.user?.id||Date.now()}`,accountId:f(e.user?.accountId),role:e.role,schoolId:f(e.user?.schoolId||e.user?.activeSchoolId),branchId:r,schoolBranchId:r,teacherId:f(e.user?.teacherId),studentId:f(e.user?.studentId),parentId:f(e.user?.parentId),active:!0}}function x(e,r){window.location.replace(r)}function I(){let e=(0,n.useRouter)(),[r,t]=(0,a.useState)({email:"",password:""}),[I,y]=(0,a.useState)(!1),[S,k]=(0,a.useState)(!1),[N,_]=(0,a.useState)(null),[C,M]=(0,a.useState)(null),[O,j]=(0,a.useState)(null),E=e=>{t(r=>({...r,...e}))},B=async()=>{if(!I){if(!r.email.trim())return alert("Enter your email address");if(!r.password.trim())return alert("Enter your password");try{let t,o,a,s,n;y(!0),(0,c.pP)();let I=await (0,l.AT)("/auth/login",{method:"POST",body:JSON.stringify({email:r.email.trim().toLowerCase(),password:r.password})}),v=(0,l.VB)(I);if(!v)throw console.error("Login response without token:",I),Error("Login succeeded but no token was returned.");if(!I.user?.accountId)throw console.error("Login response without accountId:",I),Error("Login succeeded but no account ID was returned.");let S=(t=[I.memberships,I.userMemberships,I.accountMemberships,I.schoolMemberships,I.roleMemberships,I.user?.memberships,I.user?.userMemberships,I.user?.accountMemberships,I.user?.schoolMemberships,I.user?.roleMemberships,I.account?.memberships,I.account?.userMemberships,I.account?.accountMemberships,I.account?.schoolMemberships,I.account?.roleMemberships].flatMap(e=>Array.isArray(e)?e:e?[e]:[]).map(e=>(function(e){if(!(e&&!1!==e.active&&!1!==e.isActive&&!0!==e.disabled&&!0!==e.isDeleted&&!["inactive","disabled","deleted","blocked","suspended"].includes(String(e.status||"").trim().toLowerCase())))return null;let r=(0,u.GY)(e.role||e.membershipRole||e.portalRole||e.userRole||e.type);if(!r)return null;let t=f(e.branchId||e.schoolBranchId||e.branch?.id||e.activeBranchId||e.contextBranchId);return{...e,id:f(e.id)||`membership-${r}-${Date.now()}`,role:r,schoolId:f(e.schoolId||e.school?.id||e.activeSchoolId||e.contextSchoolId),branchId:t,schoolBranchId:t,teacherId:f(e.teacherId||e.teacher?.id),studentId:f(e.studentId||e.student?.id),parentId:f(e.parentId||e.parent?.id),active:!0}})(e)).filter(Boolean),o=new Map,t.forEach((e,r)=>{let t=e.id||`${e.role}-${e.schoolId||"school"}-${e.branchId||"branch"}-${e.teacherId||e.studentId||e.parentId||r}`;o.set(String(t),e)}),Array.from(o.values())),k=(0,u.GY)(I.user.role);if((0,l.NR)(v),(0,d.d1)(I.user.accountId),a=(0,u.GY)(I.user?.role)||I.user?.role||null,s={...I.user,role:a,memberships:S,userMemberships:S},n=I.account?{...I.account,role:(0,u.GY)(I.account.role)||I.account.role||a,memberships:S,userMemberships:S}:null,localStorage.setItem(p,JSON.stringify(s)),localStorage.setItem(g,JSON.stringify(n)),localStorage.setItem(h,JSON.stringify(s)),localStorage.setItem(m,JSON.stringify(n)),localStorage.setItem(b,JSON.stringify(S)),sessionStorage.setItem(p,JSON.stringify(s)),sessionStorage.setItem(g,JSON.stringify(n)),sessionStorage.setItem(h,JSON.stringify(s)),sessionStorage.setItem(m,JSON.stringify(n)),sessionStorage.setItem(b,JSON.stringify(S)),localStorage.setItem("user",JSON.stringify(s)),localStorage.setItem("account",JSON.stringify(n)),a&&localStorage.setItem("activeRole",String(a)),"developer"===k){(0,c.Kn)(w({role:k,user:I.user})),x(e,"/developer");return}if("platform_team"===k){(0,c.Kn)(w({role:k,user:I.user})),x(e,"/platform-team");return}if("super_admin"===k&&S.length<=1){let r=(S.length?k&&S.find(e=>e.role===k)||S[0]:null)||w({role:k,user:I.user});(0,c.Kn)(r),x(e,"/owner");return}if(S.length>1||(0,u.Pq)({role:k,memberships:S}))return void x(e,"/select-role");if(1===S.length){let r=S[0];(0,c.Kn)(r),j(r),M(null);try{await (0,i.$N)(r,{allowCached:!0,onProgress:_}),x(e,(0,u.b8)(r.role))}catch(e){M(e?.message||"Failed to prepare this workspace.")}return}if(k){let r=w({role:k,user:I.user});(0,c.Kn)(r),x(e,(0,u.ab)({role:k,memberships:S}));return}throw Error("Login succeeded, but no active membership or role was found.")}catch(e){(0,c.pP)(),alert(e?.message||"Login failed"),y(!1)}}},J=e=>{"Enter"!==e.key||I||B()},L=async()=>{if(O){M(null);try{await (0,i.$N)(O,{force:!0,allowCached:!0,onProgress:_}),x(e,(0,u.b8)(O.role))}catch(e){M(e?.message||"Failed to prepare this workspace.")}}};return(0,o.jsxs)("main",{className:"login-page",children:[(0,o.jsx)("style",{children:v}),(N||C)&&(0,o.jsx)(s.A,{progress:N,error:C,onRetry:L,onCancel:()=>{_(null),M(null),j(null),x(e,"/select-role")}}),(0,o.jsxs)("section",{className:"login-card",children:[(0,o.jsx)("div",{className:"login-badge",children:"\uD83D\uDD10"}),(0,o.jsx)("h1",{children:"Login"}),(0,o.jsx)("p",{children:"Access your Eleeveon workspace."}),(0,o.jsxs)("div",{className:"login-grid",children:[(0,o.jsx)("input",{placeholder:"Email",value:r.email,onChange:e=>E({email:e.target.value}),onKeyDown:J,autoComplete:"email",inputMode:"email",disabled:I}),(0,o.jsxs)("div",{className:"password-wrap",children:[(0,o.jsx)("input",{type:S?"text":"password",placeholder:"Password",value:r.password,onChange:e=>E({password:e.target.value}),onKeyDown:J,autoComplete:"current-password",disabled:I}),(0,o.jsx)("button",{type:"button",className:"password-toggle",onClick:()=>k(e=>!e),disabled:I,"aria-label":S?"Hide password":"Show password",children:S?"\uD83D\uDE48":"\uD83D\uDC41"})]}),(0,o.jsx)("button",{type:"button",onClick:B,disabled:I,children:I?"Logging in...":"Login"}),(0,o.jsx)("button",{type:"button",className:"ghost",onClick:()=>e.push("/register"),disabled:I,children:"Create new account"})]})]})]})}let v=`
.login-page {
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

.login-page *,
.login-page *::before,
.login-page *::after {
  box-sizing: border-box;
}

.login-card {
  width: min(430px, 100%);
  border-radius: 28px;
  padding: 24px;
  background: var(--surface, #ffffff);
  border: 1px solid rgba(148, 163, 184, .24);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .12);
  overflow: hidden;
}

.login-badge {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: color-mix(in srgb, var(--primary-color, #2563eb) 13%, #fff);
  font-size: 26px;
}

.login-card h1 {
  margin: 16px 0 4px;
  font-size: clamp(28px, 9vw, 38px);
  font-weight: 1000;
  letter-spacing: -.06em;
  line-height: 1;
}

.login-card p {
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.55;
}

.login-grid {
  display: grid;
  gap: 12px;
  margin-top: 20px;
}

.login-grid input,
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

.login-grid input:disabled,
.password-wrap input:disabled {
  opacity: .72;
  cursor: not-allowed;
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

.login-grid input:focus,
.password-wrap input:focus {
  border-color: color-mix(in srgb, var(--primary-color, #2563eb) 60%, rgba(148,163,184,.28));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary-color, #2563eb) 13%, transparent);
}

.login-grid button {
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

.login-grid button:disabled {
  opacity: .58;
  cursor: not-allowed;
}

.login-grid button.ghost {
  border: 1px solid rgba(148, 163, 184, .24);
  background: var(--surface, #fff);
  color: var(--text, #0f172a);
}

@media (max-width: 420px) {
  .login-page {
    padding: 10px;
  }

  .login-card {
    border-radius: 24px;
    padding: 18px;
  }

  .login-grid input,
  .login-grid button,
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
`},94253:(e,r,t)=>{Promise.resolve().then(t.bind(t,42309))}},e=>{e.O(0,[3019,5125,9540,110,8441,3794,7358],()=>e(e.s=94253)),_N_E=e.O()}]);
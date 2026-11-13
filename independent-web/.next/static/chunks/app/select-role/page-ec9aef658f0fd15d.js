(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2382],{17258:(e,r,t)=>{"use strict";t.d(r,{PY:()=>n,Rh:()=>o,pq:()=>i});let a=["eleeveon_open_workspace","activeMembership","activeMembershipId","activeRole","activeSchoolId","activeBranchId","activeTeacherId","activeStudentId","activeParentId"];function n(){let e={};for(let r of a)try{e[r]=window.localStorage.getItem(r)??window.sessionStorage.getItem(r)}catch{e[r]=null}return e}function o(e){for(let r of a)try{null==e[r]?(window.localStorage.removeItem(r),window.sessionStorage.removeItem(r)):(window.localStorage.setItem(r,e[r]),window.sessionStorage.setItem(r,e[r]))}catch{}}async function i(e){if(!e.startsWith("/")||e.startsWith("//"))throw Error("Invalid workspace destination.");if(navigator.onLine)return;if(!("caches"in window))throw Error("Offline role switching is unavailable in this browser. Keep your current workspace open.");let r=new URL(e,window.location.origin).href;try{let t=await window.caches.match(r,{ignoreSearch:!0})||await window.caches.match(e,{ignoreSearch:!0});if(!t||!t.ok||!(t.headers.get("content-type")||"").includes("text/html"))throw Error("This role's portal has not been prepared for offline opening. Open it once while online, then try switching offline.")}catch(e){if(e instanceof Error)throw e;throw Error("Could not verify the offline destination. Your current role is unchanged.")}}},24435:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>S});var a=t(95155),n=t(12115),o=t(73321),i=t(1573),s=t(52975),l=t(63139),c=t(61127),d=t(17258),p=t(53280),u=t(41181),h=t(86263);let m="eleeveon_user_memberships";function b(e,r){try{window.localStorage.setItem(e,r)}catch{}try{window.sessionStorage.setItem(e,r)}catch{}}function g(e){try{window.localStorage.removeItem(e)}catch{}try{window.sessionStorage.removeItem(e)}catch{}}function f(e){return null==e?null:String(e).trim()||null}function x(...e){for(let r of e){let e=f(r);if(e)return e}return null}function w(e){let r=x(e.schoolId,e.school?.id,e.activeSchoolId,e.contextSchoolId),t=x(e.branchId,e.schoolBranchId,e.branch?.id,e.activeBranchId,e.contextBranchId),a=x(e.teacherId,e.teacher?.id),n=x(e.studentId,e.student?.id),o=x(e.parentId,e.parent?.id);return{...e,schoolId:r,branchId:t,schoolBranchId:t,teacherId:a,studentId:n,parentId:o,active:!1!==e.active}}function I(e){return"student"===e.role?!!e.studentId:"teacher"===e.role?!!e.teacherId:"parent"!==e.role||!!e.parentId}function v(e,r="membership"){return String(e.id??`${e.role}-${e.schoolId??"account"}-${e.branchId??"root"}-${e.teacherId??e.studentId??e.parentId??r}`)}function y({children:e,tone:r="gray"}){return(0,a.jsx)("span",{className:`ba-chip ${r}`,children:e})}function S(){let e=(0,o.useRouter)(),{user:r,account:t,logout:x,loading:S,restoring:j,verifying:z,sessionVerified:M,authenticated:_}=(0,i.F)(),{setActiveMembership:C,beginMembershipTransition:E,completeMembershipTransition:T,failMembershipTransition:P}=(0,s.A)(),{applyForMembership:R}=(0,l.D)(),[U,A]=(0,n.useState)(null),[B,$]=(0,n.useState)(null),F=(0,n.useMemo)(()=>{var e;let a,n,o=(e=[...(0,h.TQ)(t),...(0,h.TQ)(r),...Array.isArray(a=function(e){let r=null;try{r=window.localStorage.getItem(e)}catch{}if(!r)try{r=window.sessionStorage.getItem(e)}catch{}if(!r)return null;try{return JSON.parse(r)}catch{return null}}(m))?a:[]],n=new Map,e.map(w).filter(e=>!1!==e.active).filter(I).forEach((e,r)=>{n.set(v(e,String(r)),e)}),[...n.values()]);return o.length&&b(m,JSON.stringify(o)),o},[t,r]),O=(0,u.ns)(F),W=(0,n.useMemo)(()=>F.map((e,r)=>{var t,a,n;return{key:`${v(e)}-${r}`,id:v(e),membership:e,role:e.role,label:(t=e.role,(0,c.R)(t)),icon:"developer"===(a=e.role)?"\uD83D\uDEE0️":"platform_team"===a?"\uD83E\uDDE9":"owner"===a||"super_admin"===a?"\uD83D\uDC51":"branch_admin"===a?"\uD83C\uDFDB️":"admin"===a?"\uD83C\uDFEB":"accountant"===a?"\uD83D\uDCB0":"teacher"===a?"\uD83D\uDC68‍\uD83C\uDFEB":"student"===a?"\uD83E\uDDD1‍\uD83C\uDF93":"parent"===a?"\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67":"\uD83D\uDC64",scope:(0,u.sX)(e,O),detail:(0,u.dV)(e,O),tone:"developer"===(n=e.role)||"platform_team"===n||"owner"===n||"super_admin"===n?"purple":"admin"===n||"branch_admin"===n?"blue":"accountant"===n?"green":"teacher"===n?"blue":"student"===n?"orange":"gray"}}),[F,O]);(0,n.useEffect)(()=>{j||S||z||!M||_&&r||e.replace("/login")},[j,S,z,M,_,r,e]);let D=async e=>{if(U)return;let a=w(e),n=v(a);if(!I(a))return void $("This membership is missing its linked profile ID. Please update the membership record.");let o=F.find(e=>v(e)===n&&e.role===a.role&&String(e.schoolId||"")===String(a.schoolId||"")&&String(e.branchId||"")===String(a.branchId||"")&&String(e.teacherId||"")===String(a.teacherId||"")&&String(e.studentId||"")===String(a.studentId||"")&&String(e.parentId||"")===String(a.parentId||"")),i=String(t?.id||r?.accountId||"").trim();if(!o||i&&a.accountId&&String(a.accountId)!==i)return void $("This role is not available for the current account.");let s=(0,h.b8)(a.role);if("/login"===s)return void $("This role does not have a valid portal.");let l=(0,d.PY)(),c=!1,u=!1;A(n),$(null);try{let e,r,t,n,o,i,l,h;await (0,d.pq)(s);let m=(e=w(a),r=v(e),b("activeMembership",JSON.stringify(e)),b("activeMembershipId",r),b("activeRole",e.role||""),t=f(e.schoolId),n=f(e.branchId),o=f(e.teacherId),i=f(e.studentId),l=f(e.parentId),h=function({membershipId:e,role:r,schoolId:t,branchId:a}){return[r||"role",e||"membership",t||"school-none",a||"branch-none",Date.now()].join("-")}({membershipId:r,role:e.role,schoolId:t,branchId:n}),b("eleeveon_branding_refresh_key",h),t?b("activeSchoolId",t):g("activeSchoolId"),n?b("activeBranchId",n):g("activeBranchId"),o?b("activeTeacherId",o):g("activeTeacherId"),i?b("activeStudentId",i):g("activeStudentId"),l?b("activeParentId",l):g("activeParentId"),b("eleeveon_open_workspace",JSON.stringify({membership:e,membershipId:r,role:e.role,schoolId:t,branchId:n,teacherId:o,studentId:i,parentId:l,brandingRefreshKey:h,openedAt:Date.now()})),e);c=!0,E(m),await C(m);let x=await R(m),I=(0,p.uu)({role:m.role,accountId:m.accountId,schoolId:m.schoolId,branchId:m.branchId});if(!x||!(0,p.Ic)(x,I))throw Error("The selected role appearance could not be applied correctly.");T(),u=!0,window.location.replace(s)}catch(r){let e=r instanceof Error?r.message:"Failed to open the selected workspace.";if(console.error("Failed to open selected workspace:",r),c&&!u){(0,d.Rh)(l);let e=l.activeMembership;if(e)try{let r=JSON.parse(e);await C(r),await R(r)}catch(e){console.warn("Unable to restore previous role appearance:",e)}}P(e),$(e),A(null)}},Y=!!(r&&F.length);return(j||S)&&!Y?(0,a.jsx)(k,{title:"Opening roles...",text:"Restoring your saved account memberships and workspaces."}):_&&r?F.length||!M||z?(0,a.jsxs)("main",{className:"ba-page select-role-page",children:[(0,a.jsx)("style",{children:N}),(0,a.jsxs)("section",{className:"sr-shell","aria-label":"Choose workspace role",children:[(0,a.jsxs)("section",{className:"sr-compact-head",children:[(0,a.jsx)("div",{className:"sr-head-icon",children:"\uD83D\uDD00"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"Choose Workspace"}),(0,a.jsx)("strong",{children:String(t?.name||"").trim()||"Eleeveon Account"}),(0,a.jsx)("small",{children:r.email})]})]}),(0,a.jsxs)("section",{className:"sr-summary-row","aria-label":"Role summary",children:[(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:W.length})," ","role",1===W.length?"":"s"]}),(0,a.jsxs)("span",{children:[(0,a.jsx)("b",{children:new Set(W.map(e=>e.scope)).size})," ","workspace",1===new Set(W.map(e=>e.scope)).size?"":"s"]})]}),B&&(0,a.jsxs)("div",{className:"sr-error",role:"alert",children:[(0,a.jsx)("span",{children:B}),(0,a.jsx)("button",{type:"button",onClick:()=>$(null),"aria-label":"Dismiss error",children:"\xd7"})]}),(0,a.jsx)("section",{className:"ba-list sr-role-list",children:W.map(e=>{let r=U===e.id;return(0,a.jsxs)("button",{type:"button",className:"student-row sr-role-row",onClick:()=>void D(e.membership),disabled:!!U,"aria-busy":r,children:[(0,a.jsx)("span",{className:`sr-role-avatar ${e.tone}`,children:e.icon}),(0,a.jsxs)("span",{className:"student-main",children:[(0,a.jsx)("strong",{children:e.label}),(0,a.jsx)("small",{children:e.scope}),(0,a.jsx)("em",{children:e.detail})]}),(0,a.jsxs)("span",{className:"student-side",children:[(0,a.jsx)("span",{className:`status-dot-mini ${e.tone}`,"aria-label":`${e.label} role`}),(0,a.jsx)("i",{children:r?"…":"→"})]})]},e.key)})}),(0,a.jsxs)("section",{className:"sr-footer-actions",children:[(0,a.jsx)(y,{tone:z?"orange":"gray",children:z?"Updating access…":"Signed in"}),(0,a.jsx)("button",{type:"button",onClick:x,children:"Logout"})]})]})]}):(0,a.jsxs)("main",{className:"ba-page select-role-page",children:[(0,a.jsx)("style",{children:N}),(0,a.jsxs)("section",{className:"ba-state",children:[(0,a.jsx)("div",{className:"ba-empty-icon",children:"\uD83D\uDC64"}),(0,a.jsx)("h2",{children:"No role membership found"}),(0,a.jsx)("p",{children:"Your account is signed in, but no active school role membership has been assigned yet."}),(0,a.jsx)("button",{type:"button",className:"sr-logout-inline",onClick:x,children:"Logout"})]})]}):(0,a.jsx)(k,{title:"Redirecting to login...",text:"You must sign in before choosing a workspace."})}function k({title:e,text:r}){return(0,a.jsxs)("main",{className:"ba-page select-role-page",children:[(0,a.jsx)("style",{children:N}),(0,a.jsxs)("section",{className:"ba-state",children:[(0,a.jsx)("div",{className:"ba-spinner"}),(0,a.jsx)("h2",{children:e}),(0,a.jsx)("p",{children:r})]})]})}let N=`
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.ba-page {
  --ease: cubic-bezier(.2,.8,.2,1);

  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  min-width: 0;

  display: grid;
  place-items: center;

  padding: calc(10px * var(--local-density-scale, 1));
  padding-bottom: max(32px, env(safe-area-inset-bottom));

  background:
    radial-gradient(
      circle at top left,
      color-mix(in srgb, var(--primary-color, #2563eb) 10%, transparent),
      transparent 30rem
    ),
    radial-gradient(
      circle at bottom right,
      color-mix(in srgb, var(--primary-color, #2563eb) 7%, transparent),
      transparent 28rem
    ),
    var(--bg, #f7f8fb);

  color: var(--text, #111827);

  font-family:
    var(
      --font-family,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      sans-serif
    );

  font-size: var(--font-size, 14px);
  overflow-x: hidden;
}

.ba-page *,
.ba-page *::before,
.ba-page *::after {
  box-sizing: border-box;
  min-width: 0;
}

.ba-page button {
  font: inherit;
  -webkit-tap-highlight-color: transparent;
}

.ba-state,
.sr-shell,
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

.ba-state h2 {
  margin: 0;
  color: var(--text, #111827);
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

.ba-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;

  border: 4px solid
    color-mix(
      in srgb,
      var(--primary-color, #2563eb) 18%,
      transparent
    );

  border-top-color:
    var(--primary-color, #2563eb);

  animation: spin .8s linear infinite;
}

.ba-empty-icon {
  width: 54px;
  height: 54px;

  display: grid;
  place-items: center;

  border-radius: 20px;

  background:
    color-mix(
      in srgb,
      var(--primary-color, #2563eb) 11%,
      var(--surface, #fff)
    );

  font-size: 25px;
}

.sr-shell {
  width: min(760px, 100%);
  border-radius: 30px;
  padding: 10px;
  overflow: hidden;
}

.sr-compact-head {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 24px;

  background:
    color-mix(
      in srgb,
      var(--primary-color, #2563eb) 6%,
      transparent
    );
}

.sr-head-icon {
  width: 50px;
  height: 50px;

  display: grid;
  place-items: center;

  border-radius: 18px;
  background: var(--primary-color, #2563eb);
  color: #fff;
  font-size: 22px;

  box-shadow:
    0 12px 28px
    color-mix(
      in srgb,
      var(--primary-color, #2563eb) 22%,
      transparent
    );
}

.sr-compact-head span,
.sr-compact-head strong,
.sr-compact-head small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sr-compact-head span {
  color: var(--primary-color, #2563eb);
  font-size: 10px;
  font-weight: 950;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.sr-compact-head strong {
  margin-top: 2px;
  color: var(--text, #111827);
  font-size: clamp(18px, 5vw, 25px);
  font-weight: 1000;
  letter-spacing: -.05em;
  line-height: 1.05;
}

.sr-compact-head small {
  margin-top: 4px;
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 750;
}

.sr-summary-row {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 7px;
  margin-top: 8px;
}

.sr-summary-row span {
  display: block;
  min-height: 42px;
  padding: 9px 10px;
  border-radius: 17px;

  background:
    color-mix(
      in srgb,
      var(--muted, #64748b) 8%,
      transparent
    );

  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 850;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sr-summary-row b {
  color: var(--text, #111827);
  font-size: 14px;
  font-weight: 1000;
}

.ba-list {
  display: grid;
  gap: 7px;
  margin-top: 10px;
}

.student-row {
  width: 100%;

  display: grid;
  grid-template-columns:
    auto minmax(0,1fr) auto;

  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 22px;
  text-align: left;
  cursor: pointer;

  transition:
    transform .16s var(--ease),
    box-shadow .16s var(--ease),
    border-color .16s var(--ease);
}

.student-row:hover {
  transform: translateY(-1px);

  border-color:
    color-mix(
      in srgb,
      var(--primary-color, #2563eb) 24%,
      var(--border, rgba(0,0,0,.10))
    );

  box-shadow: 0 16px 34px rgba(15,23,42,.07);
}

.student-row:disabled {
  opacity: .66;
  cursor: not-allowed;
  transform: none;
}

.sr-role-avatar {
  width: 48px;
  height: 48px;
  flex: 0 0 auto;

  display: grid;
  place-items: center;

  border-radius: 18px;
  font-size: 21px;

  box-shadow:
    0 12px 24px rgba(15,23,42,.10);
}

.sr-role-avatar.green {
  background: rgba(34,197,94,.12);
}

.sr-role-avatar.red {
  background: rgba(239,68,68,.12);
}

.sr-role-avatar.blue {
  background: rgba(59,130,246,.12);
}

.sr-role-avatar.gray {
  background:
    color-mix(
      in srgb,
      var(--muted,#64748b) 14%,
      transparent
    );
}

.sr-role-avatar.orange {
  background: rgba(245,158,11,.14);
}

.sr-role-avatar.purple {
  background: rgba(147,51,234,.12);
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

  color:
    color-mix(
      in srgb,
      var(--muted,#64748b) 86%,
      var(--text,#111827)
    );

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

.status-dot-mini {
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 999px;

  background: var(--muted,#64748b);

  box-shadow:
    0 0 0 4px
    color-mix(
      in srgb,
      currentColor 10%,
      transparent
    );
}

.status-dot-mini.green {
  background: #22c55e;
}

.status-dot-mini.red {
  background: #ef4444;
}

.status-dot-mini.blue {
  background: #3b82f6;
}

.status-dot-mini.orange {
  background: #f59e0b;
}

.status-dot-mini.gray {
  background: var(--muted,#64748b);
}

.status-dot-mini.purple {
  background: #9333ea;
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

.ba-chip.green {
  background: rgba(34,197,94,.12);
  color: #16a34a;
}

.ba-chip.red {
  background: rgba(239,68,68,.12);
  color: #dc2626;
}

.ba-chip.blue {
  background: rgba(59,130,246,.12);
  color: #2563eb;
}

.ba-chip.gray {
  background:
    color-mix(
      in srgb,
      var(--muted,#64748b) 14%,
      transparent
    );

  color: var(--muted,#64748b);
}

.ba-chip.orange {
  background: rgba(245,158,11,.14);
  color: #b45309;
}

.ba-chip.purple {
  background: rgba(147,51,234,.12);
  color: #7e22ce;
}

.sr-footer-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 10px;
  padding: 8px 2px 0;
}

.sr-footer-actions button,
.sr-logout-inline {
  min-height: 38px;

  border: 1px solid rgba(239,68,68,.20);
  border-radius: 999px;

  padding: 0 14px;

  background: rgba(239,68,68,.10);
  color: #dc2626;

  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.sr-logout-inline {
  margin-top: 8px;
}

/**
 * NON-BLOCKING ENTRY ERROR DISPLAY
 */
.sr-error {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  margin-top: 10px;
  padding: 10px 12px;
  border-radius: 16px;

  border: 1px solid rgba(220,38,38,.25);
  background: rgba(220,38,38,.08);

  color: var(--text, #111827);
  font-size: 12px;
  line-height: 1.5;
}

.sr-error button {
  border: 0;
  background: none;
  color: #dc2626;
  cursor: pointer;
  font-size: 20px;
}

@media (min-width: 720px) {
  .ba-page {
    padding:
      calc(14px * var(--local-density-scale, 1));
  }

  .sr-shell {
    padding: 12px;
  }
}

@media (max-width: 520px) {
  .sr-shell {
    border-radius: 24px;
    padding: 8px;
  }

  .sr-compact-head {
    align-items: start;
  }

  .student-row {
    border-radius: 20px;
  }
}
`},41181:(e,r,t)=>{"use strict";t.d(r,{YT:()=>f,dV:()=>g,ns:()=>m,sX:()=>b});var a=t(12115),n=t(42563),o=t(58365),i=t(66925);function s(e){return null==e?"":String(e).trim()}function l(...e){for(let r of e)if("string"==typeof r&&r.trim())return r.trim();return null}function c(e){return!!e&&(e.startsWith("blob:")||e.startsWith("data:image/")||e.startsWith("https://")||e.startsWith("http://")||e.startsWith("/"))}function d(e){return e?String(e.id??[e.role,e.schoolId??e.school?.id??"account",e.branchId??e.schoolBranchId??e.branch?.id??"root",e.teacherId??e.studentId??e.parentId??e.userId??e.appUserId??"portal"].join(":")):""}function p(e){return e?l(e.resolvedProfileImageUrl,e.resolvedPhotoUrl,e.photoUrl,e.profilePhotoUrl,e.avatarUrl,e.imageUrl,e.pictureUrl,e.photo,e.profilePhoto,e.avatar,e.image,e.picture):null}function u(e){return e?s(e.photoMediaId??e.profilePhotoMediaId??e.avatarMediaId??e.imageMediaId??e.pictureMediaId):""}async function h(e,r){let{row:t,ownerTable:a,ownerId:n}=e;if(!t||!n)return null;let i=p(t);if(i&&c(i))return i;try{let e=await (0,o.cg)({accountId:s(t.accountId)||void 0,ownerTable:a,ownerId:n,fieldKey:"photo"});if(e?.id&&!0!==e.isDeleted&&!1!==e.active){let t=await (0,o.fW)(String(e.id));if(t)return t.startsWith("blob:")&&r.push(t),t}}catch(e){console.warn("[workspace identity] owner photo resolution failed",e)}let l=u(t)||(i&&!c(i)?i:"");if(!l)return null;try{let e=await (0,o.fW)(l);return e?.startsWith("blob:")&&r.push(e),e||null}catch(e){return console.warn("[workspace identity] media-id photo resolution failed",e),null}}function m(e,r){let t=(0,i.p)(),c=(0,a.useMemo)(()=>[...e.map(e=>[d(e),e.schoolId??e.school?.id??"",e.branchId??e.schoolBranchId??e.branch?.id??"",e.teacherId??"",e.studentId??"",e.parentId??"",e.userId??e.appUserId??""].join("|")).sort(),[s(r?.id),s(r?.updatedAt),u(r),p(r)??"",String(t)].join("|")].join("::"),[e,r,t]),[m,b]=(0,a.useState)(new Map);return(0,a.useEffect)(()=>{let t=!1,a=[];return(async()=>{let o=new Set,i=new Set,c=new Set,p=new Set,u=new Set,m=new Set;for(let r of e){let e=s(r.schoolId??r.school?.id),t=s(r.branchId??r.schoolBranchId??r.branch?.id),a=s(r.teacherId),n=s(r.studentId),l=s(r.parentId),d=s(r.userId??r.appUserId??r.user?.id??r.appUser?.id);e&&o.add(e),t&&i.add(t),a&&c.add(a),n&&p.add(n),l&&u.add(l),d&&m.add(d)}let g=s(r?.id);g&&m.add(g);let[f,x,w,I,v,y]=await Promise.all([n.db.schools.bulkGet([...o]),n.db.branches.bulkGet([...i]),n.db.teachers.bulkGet([...c]),n.db.students.bulkGet([...p]),n.db.parents.bulkGet([...u]),n.db.appUsers?.bulkGet?.([...m])??[]]),S=e=>new Map(e.filter(Boolean).map(e=>[s(e.id),e])),k=S(f),N=S(x),j=S(w),z=S(I),M=S(v),_=S(y),C=new Map;for(let n of e){let e,o=s(n.schoolId??n.school?.id),i=s(n.branchId??n.schoolBranchId??n.branch?.id),c=s(n.teacherId),p=s(n.studentId),u=s(n.parentId),m=s(n.userId??n.appUserId??n.user?.id??n.appUser?.id??r?.id);if(c)e={row:j.get(c)??n.teacher??null,ownerTable:"teachers",ownerId:c};else if(p)e={row:z.get(p)??n.student??null,ownerTable:"students",ownerId:p};else if(u)e={row:M.get(u)??n.parent??null,ownerTable:"parents",ownerId:u};else{let t=_.get(m)??n.user??n.appUser??r??null;e={row:t,ownerTable:"appUsers",ownerId:m||s(t?.id)}}let b=await h(e,a);if(t)return;C.set(d(n),{schoolName:l(n.school?.name,k.get(o)?.name),branchName:l(n.branch?.name,N.get(i)?.name),profileName:function(e){if(!e)return null;let r=l(e.fullName,e.displayName,e.memberName,e.userName,e.name);return r||[e.firstName,e.middleName,e.lastName,e.surname].filter(e=>"string"==typeof e&&e.trim()).join(" ").trim()||null}(e.row),profileImage:b})}t||b(C)})(),()=>{for(let e of(t=!0,a))(0,o.hZ)(e)}},[c,e,r]),m}function b(e,r){let t=r.get(d(e));return e.schoolId||e.branchId?t?.schoolName&&t?.branchName?`${t.schoolName} \xb7 ${t.branchName}`:t?.branchName?t.branchName:t?.schoolName?t.schoolName:e.schoolId&&e.branchId?"School branch workspace":e.schoolId?"School workspace":"Branch workspace":"Account level"}function g(e,r){let t=r.get(d(e));if(t?.profileName){if(e.teacherId)return`Teacher \xb7 ${t.profileName}`;if(e.studentId)return`Student \xb7 ${t.profileName}`;if(e.parentId)return`Parent \xb7 ${t.profileName}`}return e.teacherId?"Teacher workspace":e.studentId?"Student workspace":e.parentId?"Parent workspace":"Workspace access"}function f(e,r){return e?r.get(d(e))?.profileImage??null:null}},61127:(e,r,t)=>{"use strict";function a(e){let r=String(e||"").trim().toLowerCase().replace(/[\s-]+/g,"_");return"super_admin"===r||"owner"===r||"school_owner"===r?"Owner":"school_admin"===r||"admin"===r?"Multi-Branch Admin":"branch_admin"===r?"Branch Admin":"platform_team"===r?"Platform Team":"developer"===r?"Developer":"accountant"===r?"Accountant":"teacher"===r?"Teacher":"student"===r?"Student":"parent"===r?"Parent":String(e||"Member").replace(/_/g," ")}t.d(r,{R:()=>a})},63139:(e,r,t)=>{"use strict";t.d(r,{D:()=>m,N:()=>h});var a=t(95155),n=t(12115),o=t(52975),i=t(19035),s=t(53280),l=t(68096);let c=(0,n.createContext)(null);function d(e,r){return String(e??"").trim()||r}function p(e){return String(e??"").trim()||null}function u(e){e&&window.dispatchEvent(new CustomEvent("eleeveon:shared-theme-applied",{detail:{appliedFor:e,at:Date.now()}}))}function h({children:e}){let r,{activeMembership:t}=(0,o.A)(),m=(0,i.t)(),[b,g]=(0,n.useState)(null),[f,x]=(0,n.useState)(!0),w=(0,n.useRef)(0),I=(0,n.useRef)(null),v=m.effectiveSettings||null,y=(0,n.useCallback)(()=>{w.current+=1,I.current=null,(0,l.AR)(),g(null),x(!1)},[]),S=(0,n.useCallback)(async e=>{let r=++w.current;x(!0),(0,l.AR)();try{let t=await m.hydrateSettingsForMembership(e);if(r!==w.current)return null;let a=(0,l.CW)({role:String(e.role||""),accountId:p(e.accountId),schoolId:p(e.schoolId),branchId:p(e.branchId),settings:t});return r===w.current&&(I.current=null,g(a),x(!1),u(a)),a}catch(e){throw r===w.current&&x(!1),e}},[m.hydrateSettingsForMembership]),k=(0,n.useCallback)(async()=>{t?await S(t):y()},[t,S,y]),N=(0,n.useMemo)(()=>t?(0,s.uu)({role:t.role,accountId:t.accountId,schoolId:t.schoolId,branchId:t.branchId}):null,[t?.role,t?.accountId,t?.schoolId,t?.branchId]),j=(0,n.useMemo)(()=>v?JSON.stringify({id:v.id??null,accountId:v.accountId??null,schoolId:v.schoolId??null,branchId:v.branchId??null,primaryColor:v.primaryColor??null,theme:v.theme??v.mode??null,fontFamily:v.fontFamily??null,fontSize:v.fontSize??null,logo:v.logo??null,logoMediaId:v.logoMediaId??null,updatedAt:v.updatedAt??null,version:v.version??null}):"none",[v]);(0,n.useEffect)(()=>{if(!t||!v||!N||!m.loadedFor||m.loadedFor.key!==N.key)return;let e=`${N.key}::${j}`;if(I.current===e)return;let r=d(v.accountId,"")||d(t.accountId,""),a=d(v.schoolId,"")||d(t.schoolId,""),n=d(v.branchId,"")||d(t.branchId,"");if(N.accountId&&r&&N.accountId!==r||N.schoolId&&a&&String(N.schoolId)!==a||N.branchId&&n&&String(N.branchId)!==n)return;let o=(0,l.CW)({role:String(t.role||""),accountId:p(t.accountId),schoolId:p(t.schoolId),branchId:p(t.branchId),settings:v});I.current=e,g(o),x(!1),u(o)},[t,N,v,j,m.loadedFor?.key]),(0,n.useEffect)(()=>{t||(w.current+=1,I.current=null,(0,l.AR)(),g(null),x(!1))},[t]);let z=!!(!f&&t&&b&&(0,s.Ic)(b,N)),M="dark"===String((v?.theme??v?.mode??b?.mode)||"").toLowerCase()?"dark":"light",_=d(v?.primaryColor,b?.primaryColor||l.aS.primaryColor),C=d(v?.fontFamily,l.aS.fontFamily),E=Number.isFinite(r=Number(v?.fontSize))&&r>0?r:16,T=(0,n.useMemo)(()=>({loading:f,ready:z,mode:M,primaryColor:_,fontFamily:C,fontSize:E,logo:v?.logo||void 0,branchSettings:m.branchSettings,theme:v,effectiveScope:b?.scope||m.effectiveScope,appliedFor:b,refreshTheme:k,applyForMembership:S,resetAppearance:y}),[f,z,M,_,C,E,v,m.branchSettings,m.effectiveScope,b,k,S,y]);return(0,a.jsx)(c.Provider,{value:T,children:e})}function m(){let e=(0,n.useContext)(c);if(!e)throw Error("useTheme must be used inside ThemeProvider");return e}},66925:(e,r,t)=>{"use strict";t.d(r,{p:()=>o});var a=t(12115),n=t(25255);function o(e,r){let t=(0,a.useMemo)(()=>{var t,a;return t=e,a=r,Array.isArray(t)?{tables:t,accountId:a}:{tables:t?.tables,accountId:t?.accountId??a}},[e,r]),o=(0,a.useCallback)(()=>(0,n.eZ)(t),[t]);return(0,a.useSyncExternalStore)(n.X2,o,n.jB)}},85039:(e,r,t)=>{Promise.resolve().then(t.bind(t,24435))}},e=>{e.O(0,[3019,69,5125,9540,4967,2975,8365,8441,3794,7358],()=>e(e.s=85039)),_N_E=e.O()}]);
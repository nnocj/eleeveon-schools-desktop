(()=>{var a={};a.id=2382,a.ids=[2382],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},1932:a=>{"use strict";a.exports=require("url")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},17665:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>w});var d=c(48249),e=c(67484),f=c(19099),g=c(4121),h=c(41259),i=c(39091),j=c(47811),k=c(51912),l=c(4070),m=c(78527),n=c(23553);function o(a,b){}function p(a){}function q(a){return null==a?null:String(a).trim()||null}function r(...a){for(let b of a){let a=q(b);if(a)return a}return null}function s(a){let b=r(a.schoolId,a.school?.id,a.activeSchoolId,a.contextSchoolId),c=r(a.branchId,a.schoolBranchId,a.branch?.id,a.activeBranchId,a.contextBranchId),d=r(a.teacherId,a.teacher?.id),e=r(a.studentId,a.student?.id),f=r(a.parentId,a.parent?.id);return{...a,schoolId:b,branchId:c,schoolBranchId:c,teacherId:d,studentId:e,parentId:f,active:!1!==a.active}}function t(a){return"student"===a.role?!!a.studentId:"teacher"===a.role?!!a.teacherId:"parent"!==a.role||!!a.parentId}function u(a,b="membership"){return String(a.id??`${a.role}-${a.schoolId??"account"}-${a.branchId??"root"}-${a.teacherId??a.studentId??a.parentId??b}`)}function v({children:a,tone:b="gray"}){return(0,d.jsx)("span",{className:`ba-chip ${b}`,children:a})}function w(){(0,f.useRouter)();let{user:a,account:b,logout:c,loading:r,restoring:w,verifying:z,sessionVerified:A,authenticated:B}=(0,g.F)(),{setActiveMembership:C,beginMembershipTransition:D,completeMembershipTransition:E,failMembershipTransition:F}=(0,h.A)(),{applyForMembership:G}=(0,i.D)(),[H,I]=(0,e.useState)(null),[J,K]=(0,e.useState)(null),L=(0,e.useMemo)(()=>{var c;let d,e=(c=[...(0,n.TQ)(b),...(0,n.TQ)(a),...Array.isArray(null)?null:[]],d=new Map,c.map(s).filter(a=>!1!==a.active).filter(t).forEach((a,b)=>{d.set(u(a,String(b)),a)}),[...d.values()]);return e.length&&o("eleeveon_user_memberships",JSON.stringify(e)),e},[b,a]),M=(0,m.ns)(L),N=(0,e.useMemo)(()=>L.map((a,b)=>{var c,d,e;return{key:`${u(a)}-${b}`,id:u(a),membership:a,role:a.role,label:(c=a.role,(0,j.R)(c)),icon:"developer"===(d=a.role)?"\uD83D\uDEE0️":"platform_team"===d?"\uD83E\uDDE9":"owner"===d||"super_admin"===d?"\uD83D\uDC51":"branch_admin"===d?"\uD83C\uDFDB️":"admin"===d?"\uD83C\uDFEB":"accountant"===d?"\uD83D\uDCB0":"teacher"===d?"\uD83D\uDC68‍\uD83C\uDFEB":"student"===d?"\uD83E\uDDD1‍\uD83C\uDF93":"parent"===d?"\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67":"\uD83D\uDC64",scope:(0,m.sX)(a,M),detail:(0,m.dV)(a,M),tone:"developer"===(e=a.role)||"platform_team"===e||"owner"===e||"super_admin"===e?"purple":"admin"===e||"branch_admin"===e?"blue":"accountant"===e?"green":"teacher"===e?"blue":"student"===e?"orange":"gray"}}),[L,M]),O=async c=>{if(H)return;let d=s(c),e=u(d);if(!t(d))return void K("This membership is missing its linked profile ID. Please update the membership record.");let f=L.find(a=>u(a)===e&&a.role===d.role&&String(a.schoolId||"")===String(d.schoolId||"")&&String(a.branchId||"")===String(d.branchId||"")&&String(a.teacherId||"")===String(d.teacherId||"")&&String(a.studentId||"")===String(d.studentId||"")&&String(a.parentId||"")===String(d.parentId||"")),g=String(b?.id||a?.accountId||"").trim();if(!f||g&&d.accountId&&String(d.accountId)!==g)return void K("This role is not available for the current account.");let h=(0,n.b8)(d.role);if("/login"===h)return void K("This role does not have a valid portal.");let i=(0,k.PY)(),j=!1,m=!1;I(e),K(null);try{let a,b,c,e,f,g,i,n;await (0,k.pq)(h);let r=(a=s(d),b=u(a),o("activeMembership",JSON.stringify(a)),o("activeMembershipId",b),o("activeRole",a.role||""),c=q(a.schoolId),e=q(a.branchId),f=q(a.teacherId),g=q(a.studentId),i=q(a.parentId),n=function({membershipId:a,role:b,schoolId:c,branchId:d}){return[b||"role",a||"membership",c||"school-none",d||"branch-none",Date.now()].join("-")}({membershipId:b,role:a.role,schoolId:c,branchId:e}),o("eleeveon_branding_refresh_key",n),c?o("activeSchoolId",c):p("activeSchoolId"),e?o("activeBranchId",e):p("activeBranchId"),f?o("activeTeacherId",f):p("activeTeacherId"),g?o("activeStudentId",g):p("activeStudentId"),i?o("activeParentId",i):p("activeParentId"),o("eleeveon_open_workspace",JSON.stringify({membership:a,membershipId:b,role:a.role,schoolId:c,branchId:e,teacherId:f,studentId:g,parentId:i,brandingRefreshKey:n,openedAt:Date.now()})),a);j=!0,D(r),await C(r);let t=await G(r),v=(0,l.uu)({role:r.role,accountId:r.accountId,schoolId:r.schoolId,branchId:r.branchId});if(!t||!(0,l.Ic)(t,v))throw Error("The selected role appearance could not be applied correctly.");E(),m=!0,window.location.replace(h)}catch(b){let a=b instanceof Error?b.message:"Failed to open the selected workspace.";if(console.error("Failed to open selected workspace:",b),j&&!m){(0,k.Rh)(i);let a=i.activeMembership;if(a)try{let b=JSON.parse(a);await C(b),await G(b)}catch(a){console.warn("Unable to restore previous role appearance:",a)}}F(a),K(a),I(null)}},P=!!(a&&L.length);return(w||r)&&!P?(0,d.jsx)(x,{title:"Opening roles...",text:"Restoring your saved account memberships and workspaces."}):B&&a?L.length||!A||z?(0,d.jsxs)("main",{className:"ba-page select-role-page",children:[(0,d.jsx)("style",{children:y}),(0,d.jsxs)("section",{className:"sr-shell","aria-label":"Choose workspace role",children:[(0,d.jsxs)("section",{className:"sr-compact-head",children:[(0,d.jsx)("div",{className:"sr-head-icon",children:"\uD83D\uDD00"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Choose Workspace"}),(0,d.jsx)("strong",{children:String(b?.name||"").trim()||"Eleeveon Account"}),(0,d.jsx)("small",{children:a.email})]})]}),(0,d.jsxs)("section",{className:"sr-summary-row","aria-label":"Role summary",children:[(0,d.jsxs)("span",{children:[(0,d.jsx)("b",{children:N.length})," ","role",1===N.length?"":"s"]}),(0,d.jsxs)("span",{children:[(0,d.jsx)("b",{children:new Set(N.map(a=>a.scope)).size})," ","workspace",1===new Set(N.map(a=>a.scope)).size?"":"s"]})]}),J&&(0,d.jsxs)("div",{className:"sr-error",role:"alert",children:[(0,d.jsx)("span",{children:J}),(0,d.jsx)("button",{type:"button",onClick:()=>K(null),"aria-label":"Dismiss error",children:"\xd7"})]}),(0,d.jsx)("section",{className:"ba-list sr-role-list",children:N.map(a=>{let b=H===a.id;return(0,d.jsxs)("button",{type:"button",className:"student-row sr-role-row",onClick:()=>void O(a.membership),disabled:!!H,"aria-busy":b,children:[(0,d.jsx)("span",{className:`sr-role-avatar ${a.tone}`,children:a.icon}),(0,d.jsxs)("span",{className:"student-main",children:[(0,d.jsx)("strong",{children:a.label}),(0,d.jsx)("small",{children:a.scope}),(0,d.jsx)("em",{children:a.detail})]}),(0,d.jsxs)("span",{className:"student-side",children:[(0,d.jsx)("span",{className:`status-dot-mini ${a.tone}`,"aria-label":`${a.label} role`}),(0,d.jsx)("i",{children:b?"…":"→"})]})]},a.key)})}),(0,d.jsxs)("section",{className:"sr-footer-actions",children:[(0,d.jsx)(v,{tone:z?"orange":"gray",children:z?"Updating access…":"Signed in"}),(0,d.jsx)("button",{type:"button",onClick:c,children:"Logout"})]})]})]}):(0,d.jsxs)("main",{className:"ba-page select-role-page",children:[(0,d.jsx)("style",{children:y}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("div",{className:"ba-empty-icon",children:"\uD83D\uDC64"}),(0,d.jsx)("h2",{children:"No role membership found"}),(0,d.jsx)("p",{children:"Your account is signed in, but no active school role membership has been assigned yet."}),(0,d.jsx)("button",{type:"button",className:"sr-logout-inline",onClick:c,children:"Logout"})]})]}):(0,d.jsx)(x,{title:"Redirecting to login...",text:"You must sign in before choosing a workspace."})}function x({title:a,text:b}){return(0,d.jsxs)("main",{className:"ba-page select-role-page",children:[(0,d.jsx)("style",{children:y}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("div",{className:"ba-spinner"}),(0,d.jsx)("h2",{children:a}),(0,d.jsx)("p",{children:b})]})]})}let y=`
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
`},17891:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/get-segment-param")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:a=>{"use strict";a.exports=require("os")},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},27910:a=>{"use strict";a.exports=require("stream")},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},34631:a=>{"use strict";a.exports=require("tls")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},43954:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/interception-routes")},47811:(a,b,c)=>{"use strict";function d(a){let b=String(a||"").trim().toLowerCase().replace(/[\s-]+/g,"_");return"super_admin"===b||"owner"===b||"school_owner"===b?"Owner":"school_admin"===b||"admin"===b?"Multi-Branch Admin":"branch_admin"===b?"Branch Admin":"platform_team"===b?"Platform Team":"developer"===b?"Developer":"accountant"===b?"Accountant":"teacher"===b?"Teacher":"student"===b?"Student":"parent"===b?"Parent":String(a||"Member").replace(/_/g," ")}c.d(b,{R:()=>d})},47911:(a,b,c)=>{"use strict";c.d(b,{p:()=>f});var d=c(67484),e=c(87745);function f(a,b){let c=(0,d.useMemo)(()=>{var c,d;return c=a,d=b,Array.isArray(c)?{tables:c,accountId:d}:{tables:c?.tables,accountId:c?.accountId??d}},[a,b]),f=(0,d.useCallback)(()=>(0,e.eZ)(c),[c]);return(0,d.useSyncExternalStore)(e.X2,f,e.jB)}},51912:(a,b,c)=>{"use strict";c.d(b,{PY:()=>e,Rh:()=>f,pq:()=>g});let d=["eleeveon_open_workspace","activeMembership","activeMembershipId","activeRole","activeSchoolId","activeBranchId","activeTeacherId","activeStudentId","activeParentId"];function e(){let a={};for(let b of d)try{a[b]=null}catch{a[b]=null}return a}function f(a){}async function g(a){}},55511:a=>{"use strict";a.exports=require("crypto")},55591:a=>{"use strict";a.exports=require("https")},56955:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\AGNES\\\\github\\\\eleeveon-schools-frontend\\\\app\\\\select-role\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\select-role\\page.tsx","default")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},70722:a=>{"use strict";a.exports=require("next/dist/shared/lib/invariant-error")},72989:(a,b,c)=>{"use strict";c.r(b),c.d(b,{__next_app__:()=>M,handler:()=>O,routeModule:()=>N});var d=c(7553),e=c(84006),f=c(67798),g=c(34775),h=c(99373),i=c(73461),j=c(1020),k=c(26349),l=c(54365),m=c(16023),n=c(63747),o=c(24235),p=c(23938),q=c(261),r=c(66758),s=c(77243),t=c(26713),u=c(37527),v=c(22820),w=c(88216),x=c(47929),y=c(79551),z=c(71797),A=c(89125),B=c(86439),C=c(77068),D=c(27269),E=c(61287),F=c(81494),G=c(70722),H=c(70753),I=c(43954),J=c(17891),K={};for(let a in E)0>["default","__next_app__","routeModule","handler"].indexOf(a)&&(K[a]=()=>E[a]);c.d(b,K);let L={children:["",{children:["select-role",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,56955)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\select-role\\page.tsx"]}]},{"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}},[]]},{layout:[()=>Promise.resolve().then(c.bind(c,32056)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,55091,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,45270,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,28193,23)),"next/dist/client/components/builtin/unauthorized.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}},[]]}.children,M={require:c,loadChunk:()=>Promise.resolve()},N=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/select-role/page",pathname:"/select-role",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:L},distDir:".next",relativeProjectDir:""});async function O(a,b,d){var K,P,Q,R,S;d.requestMeta&&(0,h.setRequestMeta)(a,d.requestMeta),N.isDev&&(0,h.addRequestMeta)(a,"devRequestTimingInternalsEnd",process.hrtime.bigint());let T=!!(0,h.getRequestMeta)(a,"minimalMode"),U="/select-role/page";"/index"===U&&(U="/");let V=await N.prepare(a,b,{srcPage:U,multiZoneDraftMode:!1});if(!V)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:W,query:X,params:Y,pageIsDynamic:Z,buildManifest:$,nextFontManifest:_,reactLoadableManifest:aa,serverActionsManifest:ab,clientReferenceManifest:ac,subresourceIntegrityManifest:ad,prerenderManifest:ae,isDraftMode:af,resolvedPathname:ag,revalidateOnlyGenerated:ah,routerServerContext:ai,nextConfig:aj,parsedUrl:ak,interceptionRoutePatterns:al,deploymentId:am,clientAssetToken:an}=V,ao=(0,q.normalizeAppPath)(U),{isOnDemandRevalidate:ap}=V,aq=aj.experimental.ppr&&!aj.cacheComponents&&(0,I.isInterceptionRouteAppPath)(ag)?null:N.match(ag,ae),ar=(null==aq?void 0:aq.route)??null,as=!!ae.routes[ag],at=a.headers["user-agent"]||"",au=(0,t.getBotType)(at),av=(0,p.isHtmlBotRequest)(a),aw=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[s.NEXT_ROUTER_PREFETCH_HEADER],ax=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[s.RSC_HEADER],ay=(0,r.getIsPossibleServerAction)(a),az=(0,m.checkIsAppPPREnabled)(aj.experimental.ppr),aA=a.headers[x.NEXT_RESUME_STATE_LENGTH_HEADER];if(!(0,h.getRequestMeta)(a,"postponed")&&T&&az&&ay&&aA&&"string"==typeof aA){let e=parseInt(aA,10),{maxPostponedStateSize:f,maxPostponedStateSizeBytes:g}=(0,D.getMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize);if(!isNaN(e)&&e>0){if(e>g)return b.statusCode=413,b.end((0,D.getPostponedStateExceededErrorMessage)(f)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let i="1 MB",j=(null==(S=aj.experimental.serverActions)?void 0:S.bodySizeLimit)??i,k=e+(j!==i?c(95726).parse(j):1048576),l=await (0,D.readBodyWithSizeLimit)(a,k);if(null===l)return b.statusCode=413,b.end("Request body exceeded limit. To configure the body size limit for Server Actions, see: https://nextjs.org/docs/app/api-reference/next-config-js/serverActions#bodysizelimit"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;if(l.length>=e){let b=l.subarray(0,e).toString("utf8");(0,h.addRequestMeta)(a,"postponed",b);let c=l.subarray(e);(0,h.addRequestMeta)(a,"actionBody",c)}else throw Object.defineProperty(Error(`invariant: expected ${e} bytes of postponed state but only received ${l.length} bytes`),"__NEXT_ERROR_CODE",{value:"E979",enumerable:!1,configurable:!0})}}if(!(0,h.getRequestMeta)(a,"postponed")&&az&&"1"===a.headers[x.NEXT_RESUME_HEADER]&&"POST"===a.method){let{maxPostponedStateSize:c,maxPostponedStateSizeBytes:e}=(0,D.getMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize),f=await (0,D.readBodyWithSizeLimit)(a,e);if(null===f)return b.statusCode=413,b.end((0,D.getPostponedStateExceededErrorMessage)(c)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let g=f.toString("utf8");(0,h.addRequestMeta)(a,"postponed",g)}let aB=!0===N.isDev||!0===aj.experimental.exposeTestingApiInProductionBuild,aC=aB&&("1"===a.headers[s.NEXT_INSTANT_PREFETCH_HEADER]||void 0===a.headers[s.RSC_HEADER]&&"string"==typeof a.headers.cookie&&a.headers.cookie.includes(s.NEXT_INSTANT_TEST_COOKIE+"=")),aD=(az||aC)&&((null==(K=ae.routes[ao]??ae.dynamicRoutes[ao])?void 0:K.renderingMode)==="PARTIALLY_STATIC"||aC&&(aB||(null==ai?void 0:ai.experimentalTestProxy)===!0)),aE=aC&&aD,aF=aE&&!0===N.isDev,aG=!1,aH=aD?(0,h.getRequestMeta)(a,"postponed"):void 0,aI=null==(P=ae.routes[ag])?void 0:P.prefetchDataRoute,aJ=aD&&ax&&!aw&&!aI;T&&(aJ=aJ&&!!aH);let aK=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),aL=(!au||!aD)&&(!at||(0,p.shouldServeStreamingMetadata)(at,aj.htmlLimitedBots)),aM=!!((ar||as||ae.routes[ao])&&!(au&&aD)),aN=aD&&!0===aj.cacheComponents,aO=!0===N.isDev||!aM||"string"==typeof aH||(aN&&(0,h.getRequestMeta)(a,"onCacheEntryV2")?aJ&&!T:aJ),aP=!!au&&aD,aQ=(null==ar?void 0:ar.remainingPrerenderableParams)??[],aR=(null==ar?void 0:ar.fallback)===null&&((null==(Q=ar.fallbackRootParams)?void 0:Q.length)??0)>0,aS=null;if(!af&&aM&&!aO&&!ay&&!aH&&!aJ){let a=aq?"string"==typeof(null==ar?void 0:ar.fallback)?ar.fallback:aq.source:null;if(!0===aj.experimental.partialFallbacks&&a&&(null==ar?void 0:ar.fallbackRouteParams)&&!aR){if(aQ.length>0){let b,c=(b=new Map(aQ.map(a=>[a.paramName,a])),a.split("/").map(a=>{let c=(0,J.getSegmentParam)(a);if(!c)return a;let d=b.get(c.paramName);if(!d)return a;let e=null==Y?void 0:Y[d.paramName];if(!e)return a;let f=Array.isArray(e)?e.map(a=>encodeURIComponent(a)).join("/"):encodeURIComponent(e);return a.replace(function(a){let{repeat:b,optional:c}=(0,J.getParamProperties)(a.paramType);return c?`[[...${a.paramName}]]`:b?`[...${a.paramName}]`:`[${a.paramName}]`}(d),f)}).join("/")||"/");aS=c!==a?c:null}}else aS=ag}let aT=aS;!aT&&(N.isDev||aM&&Z&&(null==ar?void 0:ar.fallbackRouteParams)&&!ay)&&(aT=ag),N.isDev||af||!aM||!ax||aJ||(0,k.d)(a.headers);let aU={...E,tree:L,handler:O,routeModule:N,__next_app__:M};ab&&ac&&(0,o.setManifestsSingleton)({page:U,clientReferenceManifest:ac,serverActionsManifest:ab});let aV=a.method||"GET",aW=(0,g.getTracer)(),aX=aW.getActiveScopeSpan(),aY=!!(null==ai?void 0:ai.isWrappedByNextServer),aZ=!0===aj.experimental.partialFallbacks&&aQ.length>0?(null==ar||null==(R=ar.fallbackRouteParams)?void 0:R.filter(a=>!aQ.some(b=>b.paramName===a.paramName)))??[]:[],a$=async()=>((null==ai?void 0:ai.render404)?await ai.render404(a,b,ak,!1):b.end("This page could not be found"),null);try{let k,m=N.getVaryHeader(ag,al);b.setHeader("Vary",m);let o=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return N.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let a=aW.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let d=a.get("next.route");if(d){let a=`${aV} ${d}`;c.setAttributes({"next.route":d,"http.route":d,"next.span_name":a}),c.updateName(a),k&&k!==c&&(k.setAttribute("http.route",d),k.updateName(a))}else c.updateName(`${aV} ${U}`)})},p=(0,h.getRequestMeta)(a,"incrementalCache")||await N.getIncrementalCache(a,aj,ae,T);null==p||p.resetRequestCache(),globalThis.__incrementalCache=p;let q=async({span:e,postponed:f,fallbackRouteParams:g,forceStaticRender:i})=>{let k={query:X,params:Y,page:ao,sharedContext:{buildId:W,deploymentId:am,clientAssetToken:an},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aU,Component:(0,j.T)(aU),params:Y,routeModule:N,page:U,postponed:f,shouldWaitOnAllReady:aP,serveStreamingMetadata:aL,supportsDynamicResponse:"string"==typeof f||aO,buildManifest:$,nextFontManifest:_,reactLoadableManifest:aa,subresourceIntegrityManifest:ad,setCacheStatus:null==ai?void 0:ai.setCacheStatus,setIsrStatus:null==ai?void 0:ai.setIsrStatus,setReactDebugChannel:null==ai?void 0:ai.setReactDebugChannel,sendErrorsToBrowser:null==ai?void 0:ai.sendErrorsToBrowser,dir:c(33873).join(process.cwd(),N.relativeProjectDir),isDraftMode:af,botType:au,isOnDemandRevalidate:ap,isPossibleServerAction:ay,assetPrefix:aj.assetPrefix,nextConfigOutput:aj.output,crossOrigin:aj.crossOrigin,trailingSlash:aj.trailingSlash,images:aj.images,previewProps:ae.preview,enableTainting:aj.experimental.taint,htmlLimitedBots:aj.htmlLimitedBots,reactMaxHeadersLength:aj.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:p,cacheLifeProfiles:aj.cacheLife,basePath:aj.basePath,serverActions:aj.experimental.serverActions,logServerFunctions:"object"==typeof aj.logging&&!!aj.logging.serverFunctions,...aE||aF||aG?{isBuildTimePrerendering:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isDebugDynamicAccesses:aF}:{},cacheComponents:!!aj.cacheComponents,experimental:{isRoutePPREnabled:aD,expireTime:aj.expireTime,staleTimes:aj.experimental.staleTimes,dynamicOnHover:!!aj.experimental.dynamicOnHover,optimisticRouting:!!aj.experimental.optimisticRouting,inlineCss:!!aj.experimental.inlineCss,prefetchInlining:aj.experimental.prefetchInlining??!1,authInterrupts:!!aj.experimental.authInterrupts,cachedNavigations:!!aj.experimental.cachedNavigations,clientTraceMetadata:aj.experimental.clientTraceMetadata||[],clientParamParsingOrigins:aj.experimental.clientParamParsingOrigins,maxPostponedStateSizeBytes:(0,C.parseMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize)},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d,e)=>N.onRequestError(a,b,d,e,ai),err:(0,h.getRequestMeta)(a,"invokeError")}};i&&(k.renderOpts.supportsDynamicResponse=!1);let l=await o(e,k),{metadata:m}=l,{cacheControl:n,headers:q={},fetchTags:r,fetchMetrics:s}=m;if(r&&(q[x.NEXT_CACHE_TAGS_HEADER]=r),a.fetchMetrics=s,aM&&(null==n?void 0:n.revalidate)===0&&!N.isDev&&!aD){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${ag}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:u.CachedRouteKind.APP_PAGE,html:l,headers:q,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},r=async({hasResolved:c,previousCacheEntry:g,isRevalidating:i,span:j,forceStaticRender:k=!1})=>{let l=!1===N.isDev,m=c||b.writableEnded;try{let f;if(ap&&ah&&!g&&!T)return(null==ai?void 0:ai.render404)?await ai.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ar&&(f=(0,v.parseFallbackField)(ar.fallback)),!0===aj.experimental.partialFallbacks&&(null==ar?void 0:ar.fallback)===null&&!aR&&aQ.length>0&&(f=v.FallbackMode.PRERENDER),f===v.FallbackMode.PRERENDER&&(0,t.isBot)(at)&&(!aD||av)&&(f=v.FallbackMode.BLOCKING_STATIC_RENDER),(null==g?void 0:g.isStale)===-1&&(ap=!0),ap&&(f!==v.FallbackMode.NOT_FOUND||g)&&(f=v.FallbackMode.BLOCKING_STATIC_RENDER),!T&&f!==v.FallbackMode.BLOCKING_STATIC_RENDER&&aT&&!m&&!af&&Z&&(l||!as)){if((l||ar)&&f===v.FallbackMode.NOT_FOUND){if(aj.adapterPath)return await a$();throw new B.NoFallbackError}if(aD&&(aj.cacheComponents?!aJ:!ax)){let b=l&&"string"==typeof(null==ar?void 0:ar.fallback)?ar.fallback:ao,f=(l||aE)&&(null==ar?void 0:ar.fallbackRouteParams)?(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams):aG?(0,n.getFallbackRouteParams)(ao,N):null;aE&&f&&(0,h.addRequestMeta)(a,"fallbackParams",f);let g=await N.handleResponse({cacheKey:b,req:a,nextConfig:aj,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:ae,isRoutePPREnabled:aD,responseGenerator:async()=>q({span:j,postponed:void 0,fallbackRouteParams:f,forceStaticRender:!0}),waitUntil:d.waitUntil,isMinimalMode:T});if(null===g)return null;if(g)return T||!aD||!(aQ.length>0)||!0!==aj.experimental.partialFallbacks||!aS||!p||ap||aG||aB||aC||aw||(0,H.scheduleOnNextTick)(async()=>{let b=N.getResponseCache(a);try{await b.revalidate(aS,p,aD,!1,a=>q({span:a.span,postponed:void 0,fallbackRouteParams:aZ.length>0?(0,n.createOpaqueFallbackRouteParams)(aZ):null,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}),delete g.cacheControl,g}}let o=ap||i||!aH?void 0:aH;if(aN&&!T&&p&&(aJ||ay)&&!k){let b=await p.get(ag,{kind:u.IncrementalCacheKind.APP_PAGE,isRoutePPREnabled:!0,isFallback:!1});b&&b.value&&b.value.kind===u.CachedRouteKind.APP_PAGE&&(o=b.value.postponed,b&&(-1===b.isStale||!0===b.isStale)&&(0,H.scheduleOnNextTick)(async()=>{let b=N.getResponseCache(a);try{await b.revalidate(ag,p,aD,!1,a=>r({...a,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}))}if((aE||aF)&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:u.CachedRouteKind.PAGES,html:w.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let s=(l&&(0,h.getRequestMeta)(a,"renderFallbackShell")||aE&&!as)&&(null==ar?void 0:ar.fallbackRouteParams)?(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams):aG?(0,n.getFallbackRouteParams)(ao,N):null;if((l||aE)&&aj.cacheComponents&&!as&&(null==ar?void 0:ar.fallbackRouteParams)){let b=(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams);b&&(0,h.addRequestMeta)(a,"fallbackParams",b)}return q({span:j,postponed:o,fallbackRouteParams:s,forceStaticRender:k})}catch(b){throw(null==g?void 0:g.isStale)&&await N.onRequestError(a,b,{routerKind:"App Router",routePath:U,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aM,isOnDemandRevalidate:ap})},!1,ai),b}},D=async c=>{var f,g,i,j,k;let l,m=await N.handleResponse({cacheKey:aS,responseGenerator:a=>r({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ap,isRoutePPREnabled:aD,req:a,nextConfig:aj,prerenderManifest:ae,waitUntil:d.waitUntil,isMinimalMode:T});if(af&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),N.isDev&&b.setHeader("Cache-Control","no-cache, must-revalidate"),!m){if(aS)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=m.value)?void 0:f.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=m.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let n="string"==typeof m.value.postponed;ax&&!ay&&am&&b.setHeader(x.NEXT_NAV_DEPLOYMENT_ID_HEADER,am),aM&&!aJ&&(!n||aw)&&(T||b.setHeader("x-nextjs-cache",ap?"REVALIDATED":m.isMiss?"MISS":m.isStale?"STALE":"HIT"),b.setHeader(s.NEXT_IS_PRERENDER_HEADER,"1"));let{value:o}=m;if(aH)l={revalidate:0,expire:void 0};else if(aJ)l={revalidate:0,expire:void 0};else if(!N.isDev)if(af)l={revalidate:0,expire:void 0};else if(aM){if(m.cacheControl)if("number"==typeof m.cacheControl.revalidate){if(m.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${m.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:m.cacheControl.revalidate,expire:(null==(j=m.cacheControl)?void 0:j.expire)??aj.expireTime}}else l={revalidate:x.CACHE_ONE_YEAR_SECONDS,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(m.cacheControl=l,"string"==typeof aK&&(null==o?void 0:o.kind)===u.CachedRouteKind.APP_PAGE&&o.segmentData){b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=o.headers)?void 0:k[x.NEXT_CACHE_TAGS_HEADER];T&&aM&&c&&"string"==typeof c&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,c);let d=o.segmentData.get(aK);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.fromStatic(d,s.RSC_CONTENT_TYPE_HEADER),cacheControl:m.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.EMPTY,cacheControl:m.cacheControl}))}let p=aN?(0,h.getRequestMeta)(a,"onCacheEntryV2")??(0,h.getRequestMeta)(a,"onCacheEntry"):(0,h.getRequestMeta)(a,"onCacheEntry");if(p&&await p(m,{url:(0,h.getRequestMeta)(a,"initURL")??a.url}))return null;if(o.headers){let a={...o.headers};for(let[c,d]of(T&&aM||delete a[x.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let t=null==(g=o.headers)?void 0:g[x.NEXT_CACHE_TAGS_HEADER];if(T&&aM&&t&&"string"==typeof t&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,t),!o.status||ax&&aD||(b.statusCode=o.status),!T&&o.status&&F.RedirectStatusCode[o.status]&&ax&&(b.statusCode=200),n&&!aJ&&b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"1"),ax&&!af){if(void 0===o.rscData){if(o.html.contentType!==s.RSC_CONTENT_TYPE_HEADER)if(aj.cacheComponents)return b.statusCode=404,(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.EMPTY,cacheControl:m.cacheControl});else throw Object.defineProperty(new G.InvariantError(`Expected RSC response, got ${o.html.contentType}`),"__NEXT_ERROR_CODE",{value:"E789",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:o.html,cacheControl:m.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.fromStatic(o.rscData,s.RSC_CONTENT_TYPE_HEADER),cacheControl:m.cacheControl})}let v=o.html;if(aC&&aE){let c=!0===N.isDev?crypto.randomUUID():null;return v.pipeThrough((0,z.createInstantTestScriptInsertionTransformStream)(c)),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})}if(!n||T||ax)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:m.cacheControl});if(aE||aF)return v.push(new ReadableStream({start(a){a.enqueue(y.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}});let B=new TransformStream;return v.push(B.readable),q({span:c,postponed:o.postponed,fallbackRouteParams:null,forceStaticRender:!1}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(B.writable)}).catch(a=>{B.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})};if(!aY||!aX)return k=aW.getActiveScopeSpan(),await aW.withPropagatedContext(a.headers,()=>aW.trace(i.BaseServerSpan.handleRequest,{spanName:`${aV} ${U}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aV,"http.target":a.url}},D),void 0,!aY);await D(aX)}catch(b){throw b instanceof B.NoFallbackError||await N.onRequestError(a,b,{routerKind:"App Router",routePath:U,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aM,isOnDemandRevalidate:ap})},!1,ai),b}}},74075:a=>{"use strict";a.exports=require("zlib")},75153:(a,b,c)=>{Promise.resolve().then(c.bind(c,17665))},77068:a=>{"use strict";a.exports=require("next/dist/shared/lib/size-limit")},78527:(a,b,c)=>{"use strict";c.d(b,{YT:()=>k,dV:()=>j,ns:()=>h,sX:()=>i});var d=c(67484);c(47984),c(28505);var e=c(47911);function f(a){return null==a?"":String(a).trim()}function g(a){return a?String(a.id??[a.role,a.schoolId??a.school?.id??"account",a.branchId??a.schoolBranchId??a.branch?.id??"root",a.teacherId??a.studentId??a.parentId??a.userId??a.appUserId??"portal"].join(":")):""}function h(a,b){let c=(0,e.p)();(0,d.useMemo)(()=>[...a.map(a=>[g(a),a.schoolId??a.school?.id??"",a.branchId??a.schoolBranchId??a.branch?.id??"",a.teacherId??"",a.studentId??"",a.parentId??"",a.userId??a.appUserId??""].join("|")).sort(),[f(b?.id),f(b?.updatedAt),!b?"":f(b.photoMediaId??b.profilePhotoMediaId??b.avatarMediaId??b.imageMediaId??b.pictureMediaId),(!b?null:function(...a){for(let b of a)if("string"==typeof b&&b.trim())return b.trim();return null}(b.resolvedProfileImageUrl,b.resolvedPhotoUrl,b.photoUrl,b.profilePhotoUrl,b.avatarUrl,b.imageUrl,b.pictureUrl,b.photo,b.profilePhoto,b.avatar,b.image,b.picture))??"",String(c)].join("|")].join("::"),[a,b,c]);let[h,i]=(0,d.useState)(new Map);return h}function i(a,b){let c=b.get(g(a));return a.schoolId||a.branchId?c?.schoolName&&c?.branchName?`${c.schoolName} \xb7 ${c.branchName}`:c?.branchName?c.branchName:c?.schoolName?c.schoolName:a.schoolId&&a.branchId?"School branch workspace":a.schoolId?"School workspace":"Branch workspace":"Account level"}function j(a,b){let c=b.get(g(a));if(c?.profileName){if(a.teacherId)return`Teacher \xb7 ${c.profileName}`;if(a.studentId)return`Student \xb7 ${c.profileName}`;if(a.parentId)return`Parent \xb7 ${c.profileName}`}return a.teacherId?"Teacher workspace":a.studentId?"Student workspace":a.parentId?"Parent workspace":"Workspace access"}function k(a,b){return a?b.get(g(a))?.profileImage??null:null}},79428:a=>{"use strict";a.exports=require("buffer")},79646:a=>{"use strict";a.exports=require("child_process")},81630:a=>{"use strict";a.exports=require("http")},83997:a=>{"use strict";a.exports=require("tty")},84881:(a,b,c)=>{Promise.resolve().then(c.bind(c,56955))},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},91645:a=>{"use strict";a.exports=require("net")},94735:a=>{"use strict";a.exports=require("events")}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[3445,63,7488,1537,8505],()=>b(b.s=72989));module.exports=c})();
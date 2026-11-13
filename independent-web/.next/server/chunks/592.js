"use strict";exports.id=592,exports.ids=[592],exports.modules={592:(a,b,c)=>{c.d(b,{Ay:()=>i});var d=c(48249),e=c(67484),f=c(4121),g=c(41259),h=c(17731);function i({portalName:a="Portal",roleKey:b="portal",accountId:c,userId:o,schoolId:p,branchId:q,triggerLabel:t="Local Settings",triggerIcon:u="⚙️",inline:v=!1,primaryColor:w="var(--primary-color, #2563eb)",branchFontSize:x,sharedDefaultMode:y="light",onChange:z}){let{user:A}=(0,f.F)(),{activeMembership:B}=(0,g.A)(),C=String(o??A?.id??B?.userId??"").trim(),D=(0,e.useMemo)(()=>(0,h.fC)({userId:C,accountId:c,schoolId:p,branchId:q,roleKey:b}),[C,c,p,q,b]),[E,F]=(0,e.useState)(v),[G,H]=(0,e.useState)(""),[I,J]=(0,e.useState)(null),[K,L]=(0,e.useState)(!1),M=a=>{if(!C)return(0,h.ot)(a);let b=(0,h.O5)(D,a,{sharedDefaultMode:y,sharedPrimaryColor:w,sharedFontSize:x});return z?.(b),b},[N,O]=(0,e.useState)(()=>(0,h.v6)(D)),P=a=>{C&&O(M((0,h.ot)({...N,...a})))},Q=()=>{C&&((0,h.MK)(D),O(M({...h.tr})))},R=(0,h.Qn)(N.appearanceMode,y),S=(0,e.useMemo)(()=>{let a=[{key:"appearance",icon:"◐",title:"Appearance",subtitle:`${r(N.appearanceMode)} \xb7 ${r(R)}`,detail:"Light, dark, or portal default",tone:"dark"===R?"orange":"green"},{key:"text",icon:"Aa",title:"Text Size",subtitle:"branch"===N.fontSize?"Branch default":r(N.fontSize),detail:`Current size: ${(0,h.W5)(N.fontSize,x)}`,tone:"blue"},{key:"density",icon:"▦",title:"Layout Density",subtitle:r(N.density),detail:"compact"===N.density?"Tighter spacing":"Comfortable spacing",tone:"compact"===N.density?"purple":"green"},{key:"motion",icon:"≈",title:"Motion",subtitle:N.reduceMotion?"Reduced":"Normal",detail:N.reduceMotion?"Animations minimized":"Animations enabled",tone:N.reduceMotion?"orange":"gray"}],b=G.trim().toLowerCase();return b?a.filter(a=>`${a.title} ${a.subtitle} ${a.detail}`.toLowerCase().includes(b)):a},[x,R,G,N]),T=(0,d.jsxs)("main",{className:"ba-page local-settings-page eds-background eds-page-shell",style:{"--ba-primary":w},children:[(0,d.jsxs)("section",{className:"ba-search-card eds-glass-subtle eds-elevation-1","aria-label":"Local settings search and actions",children:[(0,d.jsxs)("label",{className:"ba-search",children:[(0,d.jsx)("span",{children:"⌕"}),(0,d.jsx)("input",{value:G,onChange:a=>H(a.target.value),placeholder:"Search settings...","aria-label":"Search local settings"})]}),(0,d.jsx)("button",{type:"button",className:"ba-add-inline",onClick:Q,"aria-label":"Reset local settings",title:"Reset",children:"Reset"}),(0,d.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>L(!0),"aria-label":"More options",children:"⋯"}),!v&&(0,d.jsx)("button",{type:"button",className:"ba-icon-button local-close-button",onClick:()=>F(!1),"aria-label":"Close local settings",children:"✕"})]}),(0,d.jsxs)("section",{className:"ba-list local-settings-list","aria-label":`${a} local settings`,children:[S.map(a=>(0,d.jsxs)("button",{type:"button",className:"student-row eds-surface eds-hover-lift",onClick:()=>J(a.key),children:[(0,d.jsx)("span",{className:"local-row-icon",children:a.icon}),(0,d.jsxs)("span",{className:"student-main",children:[(0,d.jsx)("strong",{children:a.title}),(0,d.jsx)("small",{children:a.subtitle}),(0,d.jsx)("em",{children:a.detail})]}),(0,d.jsxs)("span",{className:"student-side",children:[(0,d.jsx)("span",{className:`status-dot-mini ${a.tone}`}),(0,d.jsx)("i",{children:"⋯"})]})]},a.key)),!S.length&&(0,d.jsxs)("section",{className:"ba-empty",children:[(0,d.jsx)("div",{className:"ba-empty-icon",children:"⚙️"}),(0,d.jsx)("h3",{children:"No settings found"}),(0,d.jsx)("p",{children:"Try another search term or open More for current setup details."})]})]}),"appearance"===I&&(0,d.jsx)(j,{value:N.appearanceMode,resolvedAppearance:R,onChange:a=>P({appearanceMode:a}),onClose:()=>J(null)}),"text"===I&&(0,d.jsx)(k,{value:N.fontSize,branchFontSize:x,onChange:a=>P({fontSize:a}),onClose:()=>J(null)}),"density"===I&&(0,d.jsx)(l,{value:N.density,onChange:a=>P({density:a}),onClose:()=>J(null)}),"motion"===I&&(0,d.jsx)(m,{value:N.reduceMotion,onChange:a=>P({reduceMotion:a}),onClose:()=>J(null)}),K&&(0,d.jsx)(n,{portalName:a,roleKey:b,settings:N,resolvedAppearance:R,storageKey:D,resetSettings:()=>{Q(),L(!1)},onClose:()=>L(!1)})]});return(0,d.jsxs)("div",{className:"ba-local-root",style:{"--ba-primary":w},children:[(0,d.jsx)("style",{children:s}),!v&&(0,d.jsxs)("button",{type:"button",className:"ba-local-trigger",onClick:()=>F(!0),children:[(0,d.jsx)("span",{children:u}),t]}),v&&T,!v&&E&&(0,d.jsxs)("div",{className:"ba-sheet-backdrop local-layer",role:"dialog","aria-modal":"true","aria-label":`${a} local settings`,children:[(0,d.jsx)("button",{type:"button",className:"local-overlay","aria-label":"Close local settings",onClick:()=>F(!1)}),(0,d.jsx)("div",{className:"local-panel",children:T})]})]})}function j({value:a,resolvedAppearance:b,onChange:c,onClose:e}){return(0,d.jsxs)(o,{title:"Appearance",text:`Current resolved mode: ${r(b)}.`,onClose:e,children:[(0,d.jsxs)("div",{className:"ba-menu-list",children:[(0,d.jsx)(p,{active:"light"===a,icon:"☀",title:"Light",note:"Use old light mode",onClick:()=>c("light")}),(0,d.jsx)(p,{active:"dark"===a,icon:"☾",title:"Dark",note:"Use protected branch dark mode",onClick:()=>c("dark")}),(0,d.jsx)(p,{active:"system"===a,icon:"▣",title:"Portal Default",note:"Follow the branch, account, or platform default",onClick:()=>c("system")})]}),(0,d.jsx)("div",{className:"ba-sheet-actions",children:(0,d.jsx)("button",{type:"button",className:"primary",onClick:e,children:"Done"})})]})}function k({value:a,branchFontSize:b,onChange:c,onClose:e}){let f=[{value:"branch",title:"Branch Default",note:`Uses ${(0,h.MC)(b)}`},{value:"small",title:"Small",note:"12px"},{value:"normal",title:"Normal",note:"14px"},{value:"large",title:"Large",note:"18px"},{value:"extra-large",title:"Extra Large",note:"20px"}];return(0,d.jsxs)(o,{title:"Text Size",text:"Change only your local reading size.",onClose:e,children:[(0,d.jsx)("div",{className:"ba-menu-list",children:f.map(b=>(0,d.jsx)(p,{active:a===b.value,icon:"Aa",title:b.title,note:b.note,onClick:()=>c(b.value)},b.value))}),(0,d.jsx)("div",{className:"ba-sheet-actions",children:(0,d.jsx)("button",{type:"button",className:"primary",onClick:e,children:"Done"})})]})}function l({value:a,onChange:b,onClose:c}){return(0,d.jsxs)(o,{title:"Layout Density",text:"Choose how much spacing the portal uses locally.",onClose:c,children:[(0,d.jsxs)("div",{className:"ba-menu-list",children:[(0,d.jsx)(p,{active:"comfortable"===a,icon:"▢",title:"Comfortable",note:"More spacing, easier reading",onClick:()=>b("comfortable")}),(0,d.jsx)(p,{active:"compact"===a,icon:"▥",title:"Compact",note:"Less spacing, more data visible",onClick:()=>b("compact")})]}),(0,d.jsx)("div",{className:"ba-sheet-actions",children:(0,d.jsx)("button",{type:"button",className:"primary",onClick:c,children:"Done"})})]})}function m({value:a,onChange:b,onClose:c}){return(0,d.jsxs)(o,{title:"Motion",text:"Control animations on this device.",onClose:c,children:[(0,d.jsxs)("div",{className:"ba-menu-list",children:[(0,d.jsx)(p,{active:!a,icon:"≈",title:"Normal Motion",note:"Animations enabled",onClick:()=>b(!1)}),(0,d.jsx)(p,{active:a,icon:"—",title:"Reduce Motion",note:"Minimize animations",onClick:()=>b(!0)})]}),(0,d.jsx)("div",{className:"ba-sheet-actions",children:(0,d.jsx)("button",{type:"button",className:"primary",onClick:c,children:"Done"})})]})}function n({portalName:a,roleKey:b,settings:c,resolvedAppearance:e,storageKey:f,resetSettings:g,onClose:h}){return(0,d.jsxs)(o,{title:"More",text:"Local display details and reset action.",onClose:h,small:!0,children:[(0,d.jsxs)("div",{className:"local-info-list",children:[(0,d.jsx)(q,{label:"Portal",value:`${a} \xb7 ${b}`}),(0,d.jsx)(q,{label:"Appearance",value:`${c.appearanceMode} / ${e}`}),(0,d.jsx)(q,{label:"Text",value:c.fontSize}),(0,d.jsx)(q,{label:"Density",value:c.density}),(0,d.jsx)(q,{label:"Motion",value:c.reduceMotion?"Reduced":"Normal"})]}),(0,d.jsxs)("div",{className:"ba-menu-list",children:[(0,d.jsxs)("button",{type:"button",onClick:g,children:[(0,d.jsx)("span",{children:"↺"}),(0,d.jsx)("b",{children:"Reset local preferences"}),(0,d.jsx)("small",{children:"Return this portal to branch defaults"})]}),(0,d.jsxs)("button",{type:"button",onClick:h,children:[(0,d.jsx)("span",{children:"✓"}),(0,d.jsx)("b",{children:"Keep current setup"}),(0,d.jsx)("small",{children:f})]})]})]})}function o({title:a,text:b,children:c,onClose:e,small:f=!1}){return(0,d.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:`ba-sheet eds-surface eds-elevation-4 ${f?"small":""}`,children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:a}),(0,d.jsx)("p",{children:b})]}),(0,d.jsx)("button",{type:"button",onClick:e,"aria-label":`Close ${a}`,children:"✕"})]}),c]})})}function p({active:a,icon:b,title:c,note:e,onClick:f}){return(0,d.jsxs)("button",{type:"button",className:a?"active":"",onClick:f,children:[(0,d.jsx)("span",{children:a?"✓":b}),(0,d.jsx)("b",{children:c}),(0,d.jsx)("small",{children:e})]})}function q({label:a,value:b}){return(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:a}),(0,d.jsx)("strong",{children:b})]})}function r(a){return a.split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" ")}let s=`
@keyframes spin{to{transform:rotate(360deg)}}

.ba-local-root{
  width:100%;
  max-width:100%;
  min-width:0;
  color:var(--text,#111827);
  font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);
}

.ba-local-root *,
.ba-local-root *::before,
.ba-local-root *::after{
  box-sizing:border-box;
  min-width:0;
}

.ba-local-root button,
.ba-local-root input,
.ba-local-root select,
.ba-local-root textarea{
  font:inherit;
  max-width:100%;
}

.ba-local-root button{
  -webkit-tap-highlight-color:transparent;
}

.ba-local-trigger{
  min-height:42px;
  display:inline-flex;
  align-items:center;
  gap:8px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  padding:0 14px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-size:13px;
  font-weight:950;
  cursor:pointer;
  box-shadow:0 12px 28px rgba(15,23,42,.06);
}

.ba-local-trigger span{
  width:24px;
  height:24px;
  display:grid;
  place-items:center;
  border-radius:999px;
  background:color-mix(in srgb,var(--ba-primary) 11%,transparent);
  color:var(--ba-primary);
}

.ba-page{
  --ease:cubic-bezier(.2,.8,.2,1);
  min-height:100dvh;
  width:100%;
  max-width:100%;
  min-width:0;
  padding:calc(8px * var(--local-density-scale,1));
  padding-bottom:max(40px,env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left,color-mix(in srgb,var(--ba-primary) 9%,transparent),transparent 30rem),
    var(--bg,#f7f8fb);
  color:var(--text,#111827);
  font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);
  font-size:var(--font-size,14px);
  overflow-x:hidden;
}

.local-settings-page{
  min-height:100%;
}

.ba-page input,
.ba-page select,
.ba-page textarea{
  width:100%;
  min-height:44px;
  border:1px solid var(--input-border,var(--border,rgba(0,0,0,.10)));
  border-radius:16px;
  padding:0 12px;
  background:var(--input-bg,var(--surface,#fff));
  color:var(--input-text,var(--text,#111827));
  outline:none;
  font-weight:750;
}

.ba-page input:focus,
.ba-page select:focus,
.ba-page textarea:focus{
  border-color:color-mix(in srgb,var(--ba-primary) 52%,var(--border,rgba(0,0,0,.10)));
  box-shadow:0 0 0 4px color-mix(in srgb,var(--ba-primary) 12%,transparent);
}

.ba-search-card,
.student-row,
.ba-empty,
.ba-sheet{
  background:var(--card-bg,var(--surface,#fff));
  border:1px solid var(--border,rgba(0,0,0,.10));
  box-shadow:0 12px 28px rgba(15,23,42,.045);
}

.ba-search-card{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto auto;
  gap:8px;
  align-items:center;
  margin-top:2px;
  padding:8px;
  border-radius:24px;
}

.local-close-button{
  display:none!important;
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
  min-height:42px;
  border:0;
  padding:0;
  border-radius:0;
  background:transparent;
  box-shadow:none;
  font-size:14px;
}

.ba-add-inline,
.ba-icon-button{
  min-width:42px;
  height:42px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  display:grid;
  place-items:center;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-size:14px;
  font-weight:1000;
  cursor:pointer;
  box-shadow:0 10px 22px rgba(15,23,42,.045);
}

.ba-add-inline{
  padding:0 13px;
  background:var(--ba-primary);
  border-color:var(--ba-primary);
  color:#fff;
  font-size:12px;
}

.ba-icon-button{
  width:42px;
  font-size:18px;
}

.ba-list{
  display:grid;
  gap:7px;
  margin-top:10px;
}

.student-row{
  width:100%;
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto;
  align-items:center;
  gap:10px;
  padding:10px;
  border-radius:22px;
  text-align:left;
  color:var(--text,#111827);
  cursor:pointer;
  transition:transform .16s var(--ease),border-color .16s var(--ease),box-shadow .16s var(--ease);
}

.student-row:hover{
  transform:translateY(-1px);
  border-color:color-mix(in srgb,var(--ba-primary) 26%,var(--border,rgba(0,0,0,.10)));
}

.local-row-icon{
  width:40px;
  height:40px;
  display:grid;
  place-items:center;
  border-radius:16px;
  background:linear-gradient(135deg,var(--ba-primary),rgba(15,23,42,.9));
  color:#fff;
  font-size:13px;
  font-weight:1000;
  box-shadow:0 12px 24px rgba(15,23,42,.12);
}

.student-main{
  display:grid;
  gap:2px;
  min-width:0;
}

.student-main strong,
.student-main small,
.student-main em{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.student-main strong{
  font-size:14px;
  font-weight:1000;
  color:var(--text,#111827);
}

.student-main small{
  color:var(--muted,#64748b);
  font-size:11px;
  font-weight:850;
}

.student-main em{
  color:var(--muted,#64748b);
  font-size:11px;
  font-style:normal;
  font-weight:750;
}

.student-side{
  display:flex;
  align-items:center;
  gap:8px;
}

.student-side i{
  color:var(--muted,#64748b);
  font-style:normal;
  font-size:18px;
  font-weight:1000;
}

.status-dot-mini{
  width:9px;
  height:9px;
  border-radius:999px;
  background:var(--muted,#64748b);
  box-shadow:0 0 0 4px color-mix(in srgb,var(--muted,#64748b) 12%,transparent);
}

.status-dot-mini.green{background:#22c55e;box-shadow:0 0 0 4px rgba(34,197,94,.13)}
.status-dot-mini.red{background:#ef4444;box-shadow:0 0 0 4px rgba(239,68,68,.13)}
.status-dot-mini.orange{background:#f59e0b;box-shadow:0 0 0 4px rgba(245,158,11,.15)}
.status-dot-mini.blue{background:#3b82f6;box-shadow:0 0 0 4px rgba(59,130,246,.13)}
.status-dot-mini.purple{background:#9333ea;box-shadow:0 0 0 4px rgba(147,51,234,.13)}
.status-dot-mini.gray{background:var(--muted,#64748b)}

.ba-empty{
  border-radius:24px;
  padding:18px;
  text-align:center;
}

.ba-empty-icon{
  width:44px;
  height:44px;
  margin:0 auto 8px;
  display:grid;
  place-items:center;
  border-radius:18px;
  background:color-mix(in srgb,var(--ba-primary) 10%,transparent);
  color:var(--ba-primary);
  font-size:20px;
}

.ba-empty h3{
  margin:0;
  font-size:16px;
  font-weight:1000;
}

.ba-empty p{
  margin:5px 0 0;
  color:var(--muted,#64748b);
  font-size:12px;
  line-height:1.5;
}

.ba-sheet-backdrop{
  position:fixed;
  inset:0;
  z-index:80;
  background:rgba(2,6,23,.46);
  display:grid;
  align-items:end;
  padding:10px;
}

.local-layer{
  align-items:center;
  justify-items:center;
}

.local-overlay{
  position:absolute;
  inset:0;
  border:0;
  background:transparent;
  cursor:pointer;
}

.local-panel{
  position:relative;
  z-index:1;
  width:min(520px,100%);
  max-height:min(92dvh,760px);
  overflow:auto;
  border-radius:30px;
  background:var(--bg,#f7f8fb);
  box-shadow:0 30px 90px rgba(0,0,0,.30);
}

.local-panel .ba-page{
  min-height:auto;
}

.ba-sheet{
  width:min(540px,100%);
  margin:0 auto;
  border-radius:28px 28px 20px 20px;
  padding:14px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
}

.ba-sheet.small{
  width:min(440px,100%);
}

.ba-sheet-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:12px;
  margin-bottom:12px;
}

.ba-sheet-head h2{
  margin:0;
  font-size:20px;
  font-weight:1000;
  letter-spacing:-.04em;
}

.ba-sheet-head p{
  margin:3px 0 0;
  color:var(--muted,#64748b);
  font-size:12px;
  font-weight:750;
  line-height:1.45;
}

.ba-sheet-head button{
  width:38px;
  height:38px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-weight:1000;
  cursor:pointer;
}

.ba-menu-list{
  display:grid;
  gap:8px;
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
  color:var(--text,#111827);
  cursor:pointer;
}

.ba-menu-list button.active{
  border-color:var(--ba-primary);
  background:color-mix(in srgb,var(--ba-primary) 11%,transparent);
}

.ba-menu-list span{
  grid-row:1 / span 2;
  width:32px;
  height:32px;
  border-radius:13px;
  display:grid;
  place-items:center;
  background:color-mix(in srgb,var(--ba-primary) 12%,transparent);
  color:var(--ba-primary);
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

.local-info-list{
  display:grid;
  gap:7px;
  margin-bottom:10px;
}

.local-info-list div{
  display:flex;
  justify-content:space-between;
  gap:10px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:15px;
  padding:9px 10px;
  background:color-mix(in srgb,var(--muted,#64748b) 5%,transparent);
}

.local-info-list span{
  color:var(--muted,#64748b);
  font-size:11px;
  font-weight:900;
}

.local-info-list strong{
  color:var(--text,#111827);
  font-size:11px;
  font-weight:1000;
  text-align:right;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.ba-sheet-actions{
  display:flex;
  justify-content:flex-end;
  gap:8px;
  margin-top:12px;
}

.ba-sheet-actions button{
  min-height:40px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  padding:0 14px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-size:12px;
  font-weight:950;
  cursor:pointer;
}

.ba-sheet-actions button.primary{
  border-color:var(--ba-primary);
  background:var(--ba-primary);
  color:#fff;
}

@media (max-width:520px){
  .ba-search-card{
    grid-template-columns:minmax(0,1fr) auto auto;
  }

  .local-panel{
    width:100%;
    max-height:94dvh;
    border-radius:24px;
  }

  .ba-sheet-backdrop{
    padding:8px;
  }

  .student-row{
    padding:9px;
  }

  .local-row-icon{
    width:38px;
    height:38px;
    border-radius:15px;
  }
}

@media (min-width:720px){
  .ba-page{
    padding:10px;
  }

  .local-panel{
    width:min(760px,100%);
  }

  .local-settings-list{
    grid-template-columns:repeat(2,minmax(0,1fr));
    align-items:stretch;
  }

  .student-row{
    height:100%;
    min-height:86px;
  }
}

@media (min-width:1080px){
  .local-panel{
    width:min(980px,100%);
  }

  .local-settings-list{
    grid-template-columns:repeat(3,minmax(0,1fr));
  }
}

@media (prefers-reduced-motion:reduce){
  .student-row{
    transition:none!important;
  }

  .student-row:hover{
    transform:none!important;
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

`}};
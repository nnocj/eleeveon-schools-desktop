(()=>{var a={};a.id=6154,a.ids=[6154],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},1932:a=>{"use strict";a.exports=require("url")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10525:(a,b,c)=>{Promise.resolve().then(c.bind(c,88331))},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},17891:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/get-segment-param")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:a=>{"use strict";a.exports=require("os")},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},27910:a=>{"use strict";a.exports=require("stream")},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},34631:a=>{"use strict";a.exports=require("tls")},40381:(a,b,c)=>{Promise.resolve().then(c.bind(c,86327))},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},43954:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/interception-routes")},55511:a=>{"use strict";a.exports=require("crypto")},55591:a=>{"use strict";a.exports=require("https")},59885:(a,b,c)=>{"use strict";c.r(b),c.d(b,{__next_app__:()=>M,handler:()=>O,routeModule:()=>N});var d=c(7553),e=c(84006),f=c(67798),g=c(34775),h=c(99373),i=c(73461),j=c(1020),k=c(26349),l=c(54365),m=c(16023),n=c(63747),o=c(24235),p=c(23938),q=c(261),r=c(66758),s=c(77243),t=c(26713),u=c(37527),v=c(22820),w=c(88216),x=c(47929),y=c(79551),z=c(71797),A=c(89125),B=c(86439),C=c(77068),D=c(27269),E=c(61287),F=c(81494),G=c(70722),H=c(70753),I=c(43954),J=c(17891),K={};for(let a in E)0>["default","__next_app__","routeModule","handler"].indexOf(a)&&(K[a]=()=>E[a]);c.d(b,K);let L={children:["",{children:["owner",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,86327)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\owner\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,94624)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\owner\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}},[]]},{layout:[()=>Promise.resolve().then(c.bind(c,32056)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,55091,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,45270,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,28193,23)),"next/dist/client/components/builtin/unauthorized.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}},[]]}.children,M={require:c,loadChunk:()=>Promise.resolve()},N=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/owner/page",pathname:"/owner",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:L},distDir:".next",relativeProjectDir:""});async function O(a,b,d){var K,P,Q,R,S;d.requestMeta&&(0,h.setRequestMeta)(a,d.requestMeta),N.isDev&&(0,h.addRequestMeta)(a,"devRequestTimingInternalsEnd",process.hrtime.bigint());let T=!!(0,h.getRequestMeta)(a,"minimalMode"),U="/owner/page";"/index"===U&&(U="/");let V=await N.prepare(a,b,{srcPage:U,multiZoneDraftMode:!1});if(!V)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:W,query:X,params:Y,pageIsDynamic:Z,buildManifest:$,nextFontManifest:_,reactLoadableManifest:aa,serverActionsManifest:ab,clientReferenceManifest:ac,subresourceIntegrityManifest:ad,prerenderManifest:ae,isDraftMode:af,resolvedPathname:ag,revalidateOnlyGenerated:ah,routerServerContext:ai,nextConfig:aj,parsedUrl:ak,interceptionRoutePatterns:al,deploymentId:am,clientAssetToken:an}=V,ao=(0,q.normalizeAppPath)(U),{isOnDemandRevalidate:ap}=V,aq=aj.experimental.ppr&&!aj.cacheComponents&&(0,I.isInterceptionRouteAppPath)(ag)?null:N.match(ag,ae),ar=(null==aq?void 0:aq.route)??null,as=!!ae.routes[ag],at=a.headers["user-agent"]||"",au=(0,t.getBotType)(at),av=(0,p.isHtmlBotRequest)(a),aw=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[s.NEXT_ROUTER_PREFETCH_HEADER],ax=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[s.RSC_HEADER],ay=(0,r.getIsPossibleServerAction)(a),az=(0,m.checkIsAppPPREnabled)(aj.experimental.ppr),aA=a.headers[x.NEXT_RESUME_STATE_LENGTH_HEADER];if(!(0,h.getRequestMeta)(a,"postponed")&&T&&az&&ay&&aA&&"string"==typeof aA){let e=parseInt(aA,10),{maxPostponedStateSize:f,maxPostponedStateSizeBytes:g}=(0,D.getMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize);if(!isNaN(e)&&e>0){if(e>g)return b.statusCode=413,b.end((0,D.getPostponedStateExceededErrorMessage)(f)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let i="1 MB",j=(null==(S=aj.experimental.serverActions)?void 0:S.bodySizeLimit)??i,k=e+(j!==i?c(95726).parse(j):1048576),l=await (0,D.readBodyWithSizeLimit)(a,k);if(null===l)return b.statusCode=413,b.end("Request body exceeded limit. To configure the body size limit for Server Actions, see: https://nextjs.org/docs/app/api-reference/next-config-js/serverActions#bodysizelimit"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;if(l.length>=e){let b=l.subarray(0,e).toString("utf8");(0,h.addRequestMeta)(a,"postponed",b);let c=l.subarray(e);(0,h.addRequestMeta)(a,"actionBody",c)}else throw Object.defineProperty(Error(`invariant: expected ${e} bytes of postponed state but only received ${l.length} bytes`),"__NEXT_ERROR_CODE",{value:"E979",enumerable:!1,configurable:!0})}}if(!(0,h.getRequestMeta)(a,"postponed")&&az&&"1"===a.headers[x.NEXT_RESUME_HEADER]&&"POST"===a.method){let{maxPostponedStateSize:c,maxPostponedStateSizeBytes:e}=(0,D.getMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize),f=await (0,D.readBodyWithSizeLimit)(a,e);if(null===f)return b.statusCode=413,b.end((0,D.getPostponedStateExceededErrorMessage)(c)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let g=f.toString("utf8");(0,h.addRequestMeta)(a,"postponed",g)}let aB=!0===N.isDev||!0===aj.experimental.exposeTestingApiInProductionBuild,aC=aB&&("1"===a.headers[s.NEXT_INSTANT_PREFETCH_HEADER]||void 0===a.headers[s.RSC_HEADER]&&"string"==typeof a.headers.cookie&&a.headers.cookie.includes(s.NEXT_INSTANT_TEST_COOKIE+"=")),aD=(az||aC)&&((null==(K=ae.routes[ao]??ae.dynamicRoutes[ao])?void 0:K.renderingMode)==="PARTIALLY_STATIC"||aC&&(aB||(null==ai?void 0:ai.experimentalTestProxy)===!0)),aE=aC&&aD,aF=aE&&!0===N.isDev,aG=!1,aH=aD?(0,h.getRequestMeta)(a,"postponed"):void 0,aI=null==(P=ae.routes[ag])?void 0:P.prefetchDataRoute,aJ=aD&&ax&&!aw&&!aI;T&&(aJ=aJ&&!!aH);let aK=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),aL=(!au||!aD)&&(!at||(0,p.shouldServeStreamingMetadata)(at,aj.htmlLimitedBots)),aM=!!((ar||as||ae.routes[ao])&&!(au&&aD)),aN=aD&&!0===aj.cacheComponents,aO=!0===N.isDev||!aM||"string"==typeof aH||(aN&&(0,h.getRequestMeta)(a,"onCacheEntryV2")?aJ&&!T:aJ),aP=!!au&&aD,aQ=(null==ar?void 0:ar.remainingPrerenderableParams)??[],aR=(null==ar?void 0:ar.fallback)===null&&((null==(Q=ar.fallbackRootParams)?void 0:Q.length)??0)>0,aS=null;if(!af&&aM&&!aO&&!ay&&!aH&&!aJ){let a=aq?"string"==typeof(null==ar?void 0:ar.fallback)?ar.fallback:aq.source:null;if(!0===aj.experimental.partialFallbacks&&a&&(null==ar?void 0:ar.fallbackRouteParams)&&!aR){if(aQ.length>0){let b,c=(b=new Map(aQ.map(a=>[a.paramName,a])),a.split("/").map(a=>{let c=(0,J.getSegmentParam)(a);if(!c)return a;let d=b.get(c.paramName);if(!d)return a;let e=null==Y?void 0:Y[d.paramName];if(!e)return a;let f=Array.isArray(e)?e.map(a=>encodeURIComponent(a)).join("/"):encodeURIComponent(e);return a.replace(function(a){let{repeat:b,optional:c}=(0,J.getParamProperties)(a.paramType);return c?`[[...${a.paramName}]]`:b?`[...${a.paramName}]`:`[${a.paramName}]`}(d),f)}).join("/")||"/");aS=c!==a?c:null}}else aS=ag}let aT=aS;!aT&&(N.isDev||aM&&Z&&(null==ar?void 0:ar.fallbackRouteParams)&&!ay)&&(aT=ag),N.isDev||af||!aM||!ax||aJ||(0,k.d)(a.headers);let aU={...E,tree:L,handler:O,routeModule:N,__next_app__:M};ab&&ac&&(0,o.setManifestsSingleton)({page:U,clientReferenceManifest:ac,serverActionsManifest:ab});let aV=a.method||"GET",aW=(0,g.getTracer)(),aX=aW.getActiveScopeSpan(),aY=!!(null==ai?void 0:ai.isWrappedByNextServer),aZ=!0===aj.experimental.partialFallbacks&&aQ.length>0?(null==ar||null==(R=ar.fallbackRouteParams)?void 0:R.filter(a=>!aQ.some(b=>b.paramName===a.paramName)))??[]:[],a$=async()=>((null==ai?void 0:ai.render404)?await ai.render404(a,b,ak,!1):b.end("This page could not be found"),null);try{let k,m=N.getVaryHeader(ag,al);b.setHeader("Vary",m);let o=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return N.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let a=aW.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let d=a.get("next.route");if(d){let a=`${aV} ${d}`;c.setAttributes({"next.route":d,"http.route":d,"next.span_name":a}),c.updateName(a),k&&k!==c&&(k.setAttribute("http.route",d),k.updateName(a))}else c.updateName(`${aV} ${U}`)})},p=(0,h.getRequestMeta)(a,"incrementalCache")||await N.getIncrementalCache(a,aj,ae,T);null==p||p.resetRequestCache(),globalThis.__incrementalCache=p;let q=async({span:e,postponed:f,fallbackRouteParams:g,forceStaticRender:i})=>{let k={query:X,params:Y,page:ao,sharedContext:{buildId:W,deploymentId:am,clientAssetToken:an},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aU,Component:(0,j.T)(aU),params:Y,routeModule:N,page:U,postponed:f,shouldWaitOnAllReady:aP,serveStreamingMetadata:aL,supportsDynamicResponse:"string"==typeof f||aO,buildManifest:$,nextFontManifest:_,reactLoadableManifest:aa,subresourceIntegrityManifest:ad,setCacheStatus:null==ai?void 0:ai.setCacheStatus,setIsrStatus:null==ai?void 0:ai.setIsrStatus,setReactDebugChannel:null==ai?void 0:ai.setReactDebugChannel,sendErrorsToBrowser:null==ai?void 0:ai.sendErrorsToBrowser,dir:c(33873).join(process.cwd(),N.relativeProjectDir),isDraftMode:af,botType:au,isOnDemandRevalidate:ap,isPossibleServerAction:ay,assetPrefix:aj.assetPrefix,nextConfigOutput:aj.output,crossOrigin:aj.crossOrigin,trailingSlash:aj.trailingSlash,images:aj.images,previewProps:ae.preview,enableTainting:aj.experimental.taint,htmlLimitedBots:aj.htmlLimitedBots,reactMaxHeadersLength:aj.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:p,cacheLifeProfiles:aj.cacheLife,basePath:aj.basePath,serverActions:aj.experimental.serverActions,logServerFunctions:"object"==typeof aj.logging&&!!aj.logging.serverFunctions,...aE||aF||aG?{isBuildTimePrerendering:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isDebugDynamicAccesses:aF}:{},cacheComponents:!!aj.cacheComponents,experimental:{isRoutePPREnabled:aD,expireTime:aj.expireTime,staleTimes:aj.experimental.staleTimes,dynamicOnHover:!!aj.experimental.dynamicOnHover,optimisticRouting:!!aj.experimental.optimisticRouting,inlineCss:!!aj.experimental.inlineCss,prefetchInlining:aj.experimental.prefetchInlining??!1,authInterrupts:!!aj.experimental.authInterrupts,cachedNavigations:!!aj.experimental.cachedNavigations,clientTraceMetadata:aj.experimental.clientTraceMetadata||[],clientParamParsingOrigins:aj.experimental.clientParamParsingOrigins,maxPostponedStateSizeBytes:(0,C.parseMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize)},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d,e)=>N.onRequestError(a,b,d,e,ai),err:(0,h.getRequestMeta)(a,"invokeError")}};i&&(k.renderOpts.supportsDynamicResponse=!1);let l=await o(e,k),{metadata:m}=l,{cacheControl:n,headers:q={},fetchTags:r,fetchMetrics:s}=m;if(r&&(q[x.NEXT_CACHE_TAGS_HEADER]=r),a.fetchMetrics=s,aM&&(null==n?void 0:n.revalidate)===0&&!N.isDev&&!aD){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${ag}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:u.CachedRouteKind.APP_PAGE,html:l,headers:q,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},r=async({hasResolved:c,previousCacheEntry:g,isRevalidating:i,span:j,forceStaticRender:k=!1})=>{let l=!1===N.isDev,m=c||b.writableEnded;try{let f;if(ap&&ah&&!g&&!T)return(null==ai?void 0:ai.render404)?await ai.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ar&&(f=(0,v.parseFallbackField)(ar.fallback)),!0===aj.experimental.partialFallbacks&&(null==ar?void 0:ar.fallback)===null&&!aR&&aQ.length>0&&(f=v.FallbackMode.PRERENDER),f===v.FallbackMode.PRERENDER&&(0,t.isBot)(at)&&(!aD||av)&&(f=v.FallbackMode.BLOCKING_STATIC_RENDER),(null==g?void 0:g.isStale)===-1&&(ap=!0),ap&&(f!==v.FallbackMode.NOT_FOUND||g)&&(f=v.FallbackMode.BLOCKING_STATIC_RENDER),!T&&f!==v.FallbackMode.BLOCKING_STATIC_RENDER&&aT&&!m&&!af&&Z&&(l||!as)){if((l||ar)&&f===v.FallbackMode.NOT_FOUND){if(aj.adapterPath)return await a$();throw new B.NoFallbackError}if(aD&&(aj.cacheComponents?!aJ:!ax)){let b=l&&"string"==typeof(null==ar?void 0:ar.fallback)?ar.fallback:ao,f=(l||aE)&&(null==ar?void 0:ar.fallbackRouteParams)?(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams):aG?(0,n.getFallbackRouteParams)(ao,N):null;aE&&f&&(0,h.addRequestMeta)(a,"fallbackParams",f);let g=await N.handleResponse({cacheKey:b,req:a,nextConfig:aj,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:ae,isRoutePPREnabled:aD,responseGenerator:async()=>q({span:j,postponed:void 0,fallbackRouteParams:f,forceStaticRender:!0}),waitUntil:d.waitUntil,isMinimalMode:T});if(null===g)return null;if(g)return T||!aD||!(aQ.length>0)||!0!==aj.experimental.partialFallbacks||!aS||!p||ap||aG||aB||aC||aw||(0,H.scheduleOnNextTick)(async()=>{let b=N.getResponseCache(a);try{await b.revalidate(aS,p,aD,!1,a=>q({span:a.span,postponed:void 0,fallbackRouteParams:aZ.length>0?(0,n.createOpaqueFallbackRouteParams)(aZ):null,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}),delete g.cacheControl,g}}let o=ap||i||!aH?void 0:aH;if(aN&&!T&&p&&(aJ||ay)&&!k){let b=await p.get(ag,{kind:u.IncrementalCacheKind.APP_PAGE,isRoutePPREnabled:!0,isFallback:!1});b&&b.value&&b.value.kind===u.CachedRouteKind.APP_PAGE&&(o=b.value.postponed,b&&(-1===b.isStale||!0===b.isStale)&&(0,H.scheduleOnNextTick)(async()=>{let b=N.getResponseCache(a);try{await b.revalidate(ag,p,aD,!1,a=>r({...a,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}))}if((aE||aF)&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:u.CachedRouteKind.PAGES,html:w.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let s=(l&&(0,h.getRequestMeta)(a,"renderFallbackShell")||aE&&!as)&&(null==ar?void 0:ar.fallbackRouteParams)?(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams):aG?(0,n.getFallbackRouteParams)(ao,N):null;if((l||aE)&&aj.cacheComponents&&!as&&(null==ar?void 0:ar.fallbackRouteParams)){let b=(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams);b&&(0,h.addRequestMeta)(a,"fallbackParams",b)}return q({span:j,postponed:o,fallbackRouteParams:s,forceStaticRender:k})}catch(b){throw(null==g?void 0:g.isStale)&&await N.onRequestError(a,b,{routerKind:"App Router",routePath:U,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aM,isOnDemandRevalidate:ap})},!1,ai),b}},D=async c=>{var f,g,i,j,k;let l,m=await N.handleResponse({cacheKey:aS,responseGenerator:a=>r({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ap,isRoutePPREnabled:aD,req:a,nextConfig:aj,prerenderManifest:ae,waitUntil:d.waitUntil,isMinimalMode:T});if(af&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),N.isDev&&b.setHeader("Cache-Control","no-cache, must-revalidate"),!m){if(aS)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=m.value)?void 0:f.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=m.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let n="string"==typeof m.value.postponed;ax&&!ay&&am&&b.setHeader(x.NEXT_NAV_DEPLOYMENT_ID_HEADER,am),aM&&!aJ&&(!n||aw)&&(T||b.setHeader("x-nextjs-cache",ap?"REVALIDATED":m.isMiss?"MISS":m.isStale?"STALE":"HIT"),b.setHeader(s.NEXT_IS_PRERENDER_HEADER,"1"));let{value:o}=m;if(aH)l={revalidate:0,expire:void 0};else if(aJ)l={revalidate:0,expire:void 0};else if(!N.isDev)if(af)l={revalidate:0,expire:void 0};else if(aM){if(m.cacheControl)if("number"==typeof m.cacheControl.revalidate){if(m.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${m.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:m.cacheControl.revalidate,expire:(null==(j=m.cacheControl)?void 0:j.expire)??aj.expireTime}}else l={revalidate:x.CACHE_ONE_YEAR_SECONDS,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(m.cacheControl=l,"string"==typeof aK&&(null==o?void 0:o.kind)===u.CachedRouteKind.APP_PAGE&&o.segmentData){b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=o.headers)?void 0:k[x.NEXT_CACHE_TAGS_HEADER];T&&aM&&c&&"string"==typeof c&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,c);let d=o.segmentData.get(aK);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.fromStatic(d,s.RSC_CONTENT_TYPE_HEADER),cacheControl:m.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.EMPTY,cacheControl:m.cacheControl}))}let p=aN?(0,h.getRequestMeta)(a,"onCacheEntryV2")??(0,h.getRequestMeta)(a,"onCacheEntry"):(0,h.getRequestMeta)(a,"onCacheEntry");if(p&&await p(m,{url:(0,h.getRequestMeta)(a,"initURL")??a.url}))return null;if(o.headers){let a={...o.headers};for(let[c,d]of(T&&aM||delete a[x.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let t=null==(g=o.headers)?void 0:g[x.NEXT_CACHE_TAGS_HEADER];if(T&&aM&&t&&"string"==typeof t&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,t),!o.status||ax&&aD||(b.statusCode=o.status),!T&&o.status&&F.RedirectStatusCode[o.status]&&ax&&(b.statusCode=200),n&&!aJ&&b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"1"),ax&&!af){if(void 0===o.rscData){if(o.html.contentType!==s.RSC_CONTENT_TYPE_HEADER)if(aj.cacheComponents)return b.statusCode=404,(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.EMPTY,cacheControl:m.cacheControl});else throw Object.defineProperty(new G.InvariantError(`Expected RSC response, got ${o.html.contentType}`),"__NEXT_ERROR_CODE",{value:"E789",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:o.html,cacheControl:m.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.fromStatic(o.rscData,s.RSC_CONTENT_TYPE_HEADER),cacheControl:m.cacheControl})}let v=o.html;if(aC&&aE){let c=!0===N.isDev?crypto.randomUUID():null;return v.pipeThrough((0,z.createInstantTestScriptInsertionTransformStream)(c)),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})}if(!n||T||ax)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:m.cacheControl});if(aE||aF)return v.push(new ReadableStream({start(a){a.enqueue(y.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}});let B=new TransformStream;return v.push(B.readable),q({span:c,postponed:o.postponed,fallbackRouteParams:null,forceStaticRender:!1}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(B.writable)}).catch(a=>{B.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})};if(!aY||!aX)return k=aW.getActiveScopeSpan(),await aW.withPropagatedContext(a.headers,()=>aW.trace(i.BaseServerSpan.handleRequest,{spanName:`${aV} ${U}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aV,"http.target":a.url}},D),void 0,!aY);await D(aX)}catch(b){throw b instanceof B.NoFallbackError||await N.onRequestError(a,b,{routerKind:"App Router",routePath:U,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aM,isOnDemandRevalidate:ap})},!1,ai),b}}},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},63659:(a,b,c)=>{"use strict";c.d(b,{A:()=>e});var d=c(48249);function e({value:a,onChange:b,tabs:c,ariaLabel:g,secondary:h=!1}){return(0,d.jsxs)("div",{className:`eds-workspace-subtabs ${h?"eds-subtabs-secondary":""}`,children:[(0,d.jsx)("style",{children:f}),(0,d.jsx)("div",{className:"eds-workspace-subtabs-row",role:"group","aria-label":g,children:c.map(({key:c,label:e})=>(0,d.jsx)("button",{type:"button","aria-pressed":a===c,className:a===c?"is-active":"",onClick:()=>{if(a===c)return;b(c);let d=document.querySelector(".role-shell.workspace-locked-scroll .app-content");d&&(d.scrollTop=0)},children:e},c))})]})}c(67484);let f=`
.eds-workspace-subtabs { position:sticky;top:0;z-index:22;display:flex;align-items:center;width:100%;min-width:0;margin:0 0 8px;padding:4px 0 5px;background:var(--eds-shell-bg,var(--bg,var(--surface,#fff)));border-bottom:1px solid var(--border,rgba(15,23,42,.10));backdrop-filter:blur(12px); }
.eds-workspace-subtabs-row { display:flex;align-items:center;gap:4px;min-width:0;max-width:100%;overflow-x:auto;white-space:nowrap;scrollbar-width:thin;overscroll-behavior-x:contain; }
.eds-workspace-subtabs-row button { flex:0 0 auto;min-height:31px;padding:5px 11px;font:inherit;font-size:11px;font-weight:750;color:var(--text,#172033);border-radius:7px;border:1px solid transparent;background:transparent;cursor:pointer; }
.eds-workspace-subtabs-row button:hover { background:color-mix(in srgb,var(--primary-color,#2563eb) 6%,var(--surface,#fff)); }
.eds-workspace-subtabs-row button.is-active { border-color:color-mix(in srgb,var(--primary-color,#2563eb) 26%,var(--border,#d4dae3));background:color-mix(in srgb,var(--primary-color,#2563eb) 10%,var(--surface,#fff)); }
.eds-workspace-subtabs-row button:focus-visible {outline:2px solid var(--primary-color,#2563eb);outline-offset:1px;}
.eds-subtabs-secondary {position:relative;z-index:1;margin:2px 0 9px;backdrop-filter:none;}
.eds-subtabs-secondary .eds-workspace-subtabs-row button {min-height:30px;border:1px solid var(--border,rgba(15,23,42,.1));border-radius:8px;background:var(--surface,#fff);}
.eds-subtabs-secondary .eds-workspace-subtabs-row button.is-active {border-color:var(--primary-color,#2563eb);background:color-mix(in srgb,var(--primary-color,#2563eb) 12%,var(--surface,#fff));}
@media print { .eds-workspace-subtabs {display:none!important;} }
`},70722:a=>{"use strict";a.exports=require("next/dist/shared/lib/invariant-error")},74075:a=>{"use strict";a.exports=require("zlib")},77068:a=>{"use strict";a.exports=require("next/dist/shared/lib/size-limit")},79428:a=>{"use strict";a.exports=require("buffer")},79646:a=>{"use strict";a.exports=require("child_process")},81630:a=>{"use strict";a.exports=require("http")},83997:a=>{"use strict";a.exports=require("tty")},86327:(a,b,c)=>{"use strict";c.r(b),c.d(b,{NAV_SECTIONS:()=>e,default:()=>f});var d=c(77943);let e=(0,d.registerClientReference)(function(){throw Error("Attempted to call NAV_SECTIONS() from the server but NAV_SECTIONS is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\owner\\page.tsx","NAV_SECTIONS"),f=(0,d.registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\AGNES\\\\github\\\\eleeveon-schools-frontend\\\\app\\\\owner\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\owner\\page.tsx","default")},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},88331:(a,b,c)=>{"use strict";let d,e;c.r(b),c.d(b,{NAV_SECTIONS:()=>e1,default:()=>e3});var f=c(48249),g=c(67484),h=c.n(g),i=c(30728),j=c(63659),k=c(19099),l=c(4121),m=c(16453),n=c(41259),o=c(47984),p=c(84884),q=c(28505);let r={name:"",motto:"",phone:"",email:"",address:"",website:"",logo:"",logoMediaId:void 0,photo:"",photoMediaId:void 0,bannerImage:"",bannerImageMediaId:void 0,active:!0},s=a=>null==a?"":String(a).trim(),t=(a,b)=>String(a??"")===String(b??""),u=a=>o.db[a],v=a=>String(a||"").trim(),w=a=>v(a?.name)||"Unnamed school",x=a=>!1===a?"Inactive":"Active";function y(a){return!1===a?"red":"green"}let z=a=>{if(!a)return"Not set";let b="number"==typeof a?a:new Date(a).getTime();if(!Number.isFinite(b))return"Not set";try{return new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",year:"numeric"}).format(new Date(b))}catch{return"Not set"}},A=(a,b)=>`schools:${a}:${b}`,B=a=>{let b=String(a||"");if(!(!b||b.startsWith("blob:"))&&!b.startsWith("data:image/"))return b},C=q.$S.SCHOOLS||q.$S.SCHOOL||"schools",D={logo:q.Vq.LOGO||"logo",photo:q.Vq.PHOTO||"photo",bannerImage:q.Vq.BANNER_IMAGE||q.Vq.COVER_PHOTO||"bannerImage"},E=()=>(0,q.It)(C);function F({children:a,tone:b="gray"}){return(0,f.jsx)("span",{className:`ba-chip ${b}`,children:a})}function G({name:a,photo:b,primary:c}){return(0,f.jsx)("div",{className:"ba-avatar",style:{background:b?`url(${b}) center/cover`:`linear-gradient(135deg, ${c}, rgba(15,23,42,.9))`},children:!b&&String(a||"S").slice(0,1).toUpperCase()})}function H({icon:a,title:b,text:c}){return(0,f.jsxs)("section",{className:"ba-empty",children:[(0,f.jsx)("div",{className:"ba-empty-icon",children:a}),(0,f.jsx)("h3",{children:b}),(0,f.jsx)("p",{children:c})]})}function I(){var a;(0,k.useRouter)();let{accountId:b,authenticated:c,loading:d}=(0,l.F)(),{settings:e,loading:h}=(0,m.t)(),{activeMembership:i}=(0,n.A)(),j=e?.primaryColor||"var(--primary-color, #2563eb)",o=(0,g.useMemo)(()=>null,[]),y=(0,g.useMemo)(()=>v(o?.accountId)||v(o?.membership?.accountId)||v(i?.accountId)||v(b)||v(e?.accountId)||v(null)||v(null),[b,i?.accountId,o?.accountId,o?.membership?.accountId,e?.accountId]),[z,F]=(0,g.useState)(!0),[G,I]=(0,g.useState)(!1),[R,W]=(0,g.useState)([]),[X,Y]=(0,g.useState)([]),[Z,$]=(0,g.useState)({}),[_,aa]=(0,g.useState)("cards"),[ab,ac]=(0,g.useState)(""),[ad,ae]=(0,g.useState)("all"),[af,ag]=(0,g.useState)(!1),[ah,ai]=(0,g.useState)(!1),[aj,ak]=(0,g.useState)(null),[al,am]=(0,g.useState)(!1),[an,ao]=(0,g.useState)(r),[ap,aq]=(0,g.useState)(null),ar=(0,g.useRef)(E()),as=(0,g.useRef)(null),at=(0,g.useRef)(null),[au,av]=(0,g.useState)(!1),[aw,ax]=(0,g.useState)("logo"),[ay,az]=(0,g.useState)("environment"),[aA,aB]=(0,g.useState)(!1),[aC,aD]=(0,g.useState)(!1),aE=a=>(!a.accountId||a.accountId===y)&&!a.isDeleted,aF=(a,b)=>{aq({tone:a,message:b}),window.setTimeout(()=>aq(a=>a?.message===b?null:a),4200)},aG=()=>!!c&&!!y||(aF("error","Sign in before managing owner schools."),!1),aH=()=>{(0,q.IK)(at.current),at.current=null,as.current&&(as.current.srcObject=null),av(!1),aD(!1),aB(!1)},aI=async()=>{if(!as.current)return void aF("error","Camera preview is not ready yet.");try{aD(!0);let a=await (0,q.ln)(as.current,{fileName:`${aw}-${Date.now()}.jpg`,mimeType:"image/jpeg",quality:.88,maxWidth:"logo"===aw?900:1440,maxHeight:900});await aV(aw,a),aH()}catch(a){console.error("Failed to capture school image:",a),aF("error",a?.message||"Failed to capture photo.")}finally{aD(!1)}},aJ=()=>{Object.values(Z).forEach(q.hZ),W([]),Y([]),$({})},aK=async a=>{let b={};await Promise.all(a.map(async a=>{let c=s(a.id);if(!c)return;let d=async(b,d)=>{let e=await (0,q.cg)({accountId:y||void 0,ownerTable:C,ownerId:String(a.cloudId||a.id||c),fieldKey:D[b]});if(e?.id){let a=await (0,q.fW)(String(e.id));if(a)return a}let f=s(d);if(!f)return"";let g=await u("mediaAssets")?.get?.(f);return g&&!g.isDeleted&&!1!==g.active&&g.accountId===y&&g.ownerTable===C&&g.fieldKey===D[b]&&t(g.ownerLocalId,c)?(0,q.fW)(String(f)):""};try{let e=await d("logo",a.logoMediaId);e&&(b[A(c,"logo")]=e);let f=await d("photo",a.photoMediaId);f&&(b[A(c,"photo")]=f);let g=await d("bannerImage",a.bannerImageMediaId);g&&(b[A(c,"bannerImage")]=g)}catch(a){console.error("Failed to resolve school media:",c,a)}})),$(a=>(Object.values(a).forEach(a=>{Object.values(b).includes(a)||(0,q.hZ)(a)}),b))},aL=async()=>{if(!c||!y){aJ(),F(!1);return}try{F(!0);let[a,b]=await Promise.all([u("schools")?.toArray?.()||[],(0,p.uJ)("branches",{accountId:y})]),c=a.filter(a=>aE(a)).sort((a,b)=>w(a).localeCompare(w(b))),d=new Set(c.map(a=>s(a.id)).filter(a=>!!a)),e=b.filter(a=>aE(a)&&d.has(s(a.schoolId)));W(c),Y(e),await aK(c)}catch(a){console.error(a),aJ(),aF("error","Failed to load owner schools.")}finally{F(!1)}},aM=(0,g.useMemo)(()=>{let a=new Map;return X.forEach(b=>{let c=s(b.schoolId);c&&a.set(c,(a.get(c)||0)+1)}),a},[X]),aN=(0,g.useMemo)(()=>R.map(a=>{let b,c=s(a.id);return{id:c,row:a,branchCount:aM.get(c)||0,logoUrl:Z[A(c,"logo")]||B(a.logo),photoUrl:Z[A(c,"photo")]||B(a.photo),bannerImageUrl:Z[A(c,"bannerImage")]||B(a.bannerImage),active:(b=a,!b?.isDeleted&&b?.active!==!1&&!["deleted","archived","inactive"].includes(String(b?.status||"").toLowerCase().trim()))}}),[aM,Z,R]),aO=(0,g.useMemo)(()=>{let a=ab.trim().toLowerCase();return aN.filter(b=>{let c=b.row;return("active"!==ad||!1!==c.active)&&("inactive"!==ad||!1===c.active)&&("no_contact"!==ad||!c.phone&&!c.email)&&("no_branch"!==ad||!(b.branchCount>0))&&(!a||`${c.name||""} ${c.motto||""} ${c.phone||""} ${c.email||""} ${c.address||""} ${c.website||""}`.toLowerCase().includes(a))}).sort((a,b)=>w(a.row).localeCompare(w(b.row)))},[ad,ab,aN]),aP=(0,g.useMemo)(()=>({total:R.length,branches:X.length,active:R.filter(a=>!1!==a.active&&!a.isDeleted).length,inactive:R.filter(a=>!1===a.active&&!a.isDeleted).length,noContact:R.filter(a=>!a.phone&&!a.email).length,noBranch:aN.filter(a=>!a.branchCount).length,showing:aO.length}),[X.length,aO.length,R,aN]),aQ=(0,g.useMemo)(()=>+("all"!==ad),[ad]),aR=(0,g.useMemo)(()=>T(aN,a=>x(a.row.active)),[aN]),aS=(0,g.useMemo)(()=>T(aN,a=>a.branchCount?"Has branches":"No branch"),[aN]),aT=(0,g.useMemo)(()=>T(aN,a=>a.row.phone||a.row.email?"Contact ready":"No contact"),[aN]),aU=a=>ao(b=>({...b,...a})),aV=async(a,b)=>{if(b&&aG())try{let c=an.id?void 0:ar.current,d=await (0,q.fA)(b,{accountId:y,schoolId:an.id||void 0,branchId:void 0,ownerTable:C,ownerId:an.id?String(an.id):void 0,ownerTempKey:c,fieldKey:D[a],variant:"logo"===a?"avatar":"bannerImage"===a?"cover":"image",replaceExisting:!0});aU({[a]:d.previewUrl,[`${a}MediaId`]:d.assetId});let e="logo"===a?"School logo":"photo"===a?"School photo":"School banner";aF("success",`${e} optimized.`)}catch(a){console.error("Failed to process school image:",a),aF("error",a?.message||"Failed to process image.")}},aW=a=>{let b=s(a.id);ar.current=E(),ak(null),ao({id:b,name:a.name||"",motto:a.motto||"",phone:a.phone||"",email:a.email||"",address:a.address||"",website:a.website||"",logo:Z[A(b,"logo")]||B(a.logo)||"",logoMediaId:a.logoMediaId?String(a.logoMediaId):void 0,photo:Z[A(b,"photo")]||B(a.photo)||"",photoMediaId:a.photoMediaId?String(a.photoMediaId):void 0,bannerImage:Z[A(b,"bannerImage")]||B(a.bannerImage)||"",bannerImageMediaId:a.bannerImageMediaId?String(a.bannerImageMediaId):void 0,active:!1!==a.active}),am(!0)},aX=async a=>{a?.preventDefault();let b=c&&y?an.name.trim()?R.find(a=>!(an.id&&t(a.id,an.id))&&v(a.name).toLowerCase()===v(an.name).toLowerCase()&&!a.isDeleted)?"A school with this name already exists on this account.":an.email.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(an.email.trim())?"Enter a valid school email.":!an.website.trim()||/^https?:\/\/.+/i.test(an.website.trim())||/^www\..+/i.test(an.website.trim())?"":"Website should begin with https://, http://, or www.":"Enter school name.":"Sign in first.";if(b)return void aF("error",b);if(c&&y)try{I(!0);let a=an.id?R.find(a=>t(a.id,an.id)):void 0,b={accountId:y,name:an.name.trim(),motto:an.motto.trim()||void 0,phone:an.phone.trim()||void 0,email:an.email.trim()||void 0,address:an.address.trim()||void 0,website:an.website.trim()||void 0,logo:B(an.logo),logoMediaId:an.logoMediaId||void 0,photo:B(an.photo),photoMediaId:an.photoMediaId||void 0,bannerImage:B(an.bannerImage),bannerImageMediaId:an.bannerImageMediaId||void 0,active:an.active,isDeleted:!1},c=an.id&&a?await (0,p.Po)("schools",an.id,b):await (0,p.oJ)("schools",b),d=s(c?.id||an.id);if(!d)throw Error("The school record was written without a valid permanent ID.");let e=await u("schools")?.get?.(d);if(!e||e.isDeleted)throw Error("The school could not be verified in local storage after saving.");if(v(e.accountId)!==y)throw Error("The school was saved under the wrong account workspace.");await Promise.all([{id:an.logoMediaId,field:"logo"},{id:an.photoMediaId,field:"photo"},{id:an.bannerImageMediaId,field:"bannerImage"}].filter(a=>!!a.id).map(a=>(0,q.yy)({assetId:String(a.id),ownerTable:C,ownerId:d,ownerTempKey:ar.current,fieldKey:D[a.field]}))),ar.current=E(),am(!1),await aL(),aF("success",an.id?"School changes saved.":"School created and saved locally.")}catch(a){console.error("Failed to save school:",a),aF("error",a?.message||"Failed to save school.")}finally{I(!1)}},aY=async a=>{let b=s(a.row.id);!b||window.confirm(a.branchCount?`"${w(a.row)}" has ${a.branchCount} branch record(s). Delete anyway?`:`Delete "${w(a.row)}"?`)&&(await (0,p.R8)("schools",String(b)),ak(null),aF("success","School deleted."),await aL())},aZ=async(a,b)=>{let c=s(a.row.id);c&&(await (0,p.Po)("schools",String(c),{active:b,isDeleted:!1}),ak(null),aF("success",b?"School activated.":"School deactivated."),await aL())};return d||h||z?(0,f.jsx)(J,{primary:j,title:"Opening Schools...",text:"Checking owner account, local school records, branch coverage, and media assets."}):c&&y?(0,f.jsxs)("main",{className:"ba-page",style:{"--ba-primary":j},children:[(0,f.jsx)("style",{children:V}),ap&&(0,f.jsxs)("section",{className:`ba-toast ${ap.tone}`,children:[ap.message,(0,f.jsx)("button",{type:"button",onClick:()=>aq(null),"aria-label":"Close notification",children:"✕"})]}),(0,f.jsxs)("section",{className:"ba-search-card","aria-label":"School search and actions",children:[(0,f.jsxs)("label",{className:"ba-search",children:[(0,f.jsx)("span",{children:"⌕"}),(0,f.jsx)("input",{value:ab,onChange:a=>ac(a.target.value),placeholder:"Search schools...","aria-label":"Search schools"})]}),(0,f.jsx)("button",{type:"button",className:"ba-add-inline",onClick:()=>{aG()&&(ar.current=E(),ak(null),ao({...r,active:"inactive"!==ad}),am(!0))},"aria-label":"Add school",children:"+"}),(0,f.jsxs)("button",{type:"button",className:`ba-filter-button ${aQ?"active":""}`,onClick:()=>ag(!0),"aria-label":"Open filters",title:"Filters",children:[(0,f.jsx)(L,{}),aQ?(0,f.jsx)("b",{children:aQ}):null]}),(0,f.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>ai(!0),"aria-label":"More options",children:"⋯"})]}),aQ>0&&(0,f.jsx)("section",{className:"ba-filter-chips","aria-label":"Active filters",children:(0,f.jsxs)("button",{type:"button",onClick:()=>ae("all"),children:["Filter: ","active"===(a=ad)?"Active only":"inactive"===a?"Inactive only":"no_contact"===a?"Missing contact":"no_branch"===a?"No branch":"All schools"," \xd7"]})}),"summary"===_&&(0,f.jsxs)("section",{className:"ba-analysis-grid",children:[(0,f.jsx)(U,{title:"Schools by Status",rows:aR,total:aP.total}),(0,f.jsx)(U,{title:"Branch Coverage",rows:aS,total:aP.total}),(0,f.jsx)(U,{title:"Contact Readiness",rows:aT,total:aP.total}),(0,f.jsxs)("article",{className:"ba-analysis ba-current-filter",children:[(0,f.jsx)("span",{children:"Current Filter"}),(0,f.jsx)("strong",{children:aP.showing}),(0,f.jsxs)("p",{children:[aP.branches," branch record(s) connected across ",aP.total," owner school(s)."]})]})]}),"table"===_&&(0,f.jsx)(P,{rows:aO,openEdit:aW,remove:aY,setActive:aZ}),"cards"===_&&(0,f.jsxs)("section",{className:"ba-list",children:[aO.map(a=>(0,f.jsx)(K,{item:a,primary:j,onOpen:()=>ak(a)},String(a.id))),!aO.length&&(0,f.jsx)(H,{icon:"\uD83C\uDFEB",title:"No schools found",text:"Add owner school records, connect logo and banner images, then create branches under each school."})]}),af&&(0,f.jsx)(M,{filterStatus:ad,setFilterStatus:ae,clearFilters:()=>ae("all"),onClose:()=>ag(!1)}),ah&&(0,f.jsx)(N,{viewMode:_,setViewMode:a=>{aa(a),ai(!1)},onRefresh:async()=>{ai(!1),await aL()},onClose:()=>ai(!1)}),aj&&(0,f.jsx)(O,{item:aj,openEdit:aW,remove:aY,setActive:aZ,onClose:()=>ak(null)}),al&&(0,f.jsx)(Q,{form:an,saving:G,setModalOpen:am,updateForm:aU,handleImageUpload:aV,openCameraForField:a=>{if(aG()){if(!(0,q.fP)())return void aF("error",(0,q.f5)());ax(a),av(!0)}},save:aX}),au&&(0,f.jsx)(S,{field:aw,videoRef:as,starting:aA,capturing:aC,facing:ay,setFacing:az,capture:aI,close:aH,entityLabel:"School"})]}):(0,f.jsx)(J,{primary:j,title:"Redirecting to login...",text:"You must sign in before managing owner schools."})}function J({primary:a,title:b,text:c}){return(0,f.jsxs)("main",{className:"ba-page",style:{"--ba-primary":a},children:[(0,f.jsx)("style",{children:V}),(0,f.jsxs)("section",{className:"ba-state",children:[(0,f.jsx)("div",{className:"ba-spinner"}),(0,f.jsx)("h2",{children:b}),(0,f.jsx)("p",{children:c})]})]})}function K({item:a,primary:b,onOpen:c}){let d=a.row,e=a.logoUrl||a.photoUrl;return(0,f.jsxs)("button",{type:"button",className:"student-row",onClick:c,children:[(0,f.jsx)(G,{name:w(d),photo:e,primary:b}),(0,f.jsxs)("span",{className:"student-main",children:[(0,f.jsx)("strong",{children:w(d)}),(0,f.jsxs)("small",{children:[a.branchCount," branch",1===a.branchCount?"":"es",d.motto?` \xb7 ${d.motto}`:""]}),(0,f.jsx)("em",{children:d.phone||d.email||d.address||"No contact details yet"})]}),(0,f.jsxs)("span",{className:"student-side",children:[(0,f.jsx)("span",{className:`status-dot-mini ${y(d.active)}`,title:x(d.active),"aria-label":x(d.active)}),(0,f.jsx)("i",{children:"⋯"})]})]})}function L(){return(0,f.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,f.jsx)("path",{d:"M4 7h9"}),(0,f.jsx)("path",{d:"M17 7h3"}),(0,f.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,f.jsx)("path",{d:"M4 17h3"}),(0,f.jsx)("path",{d:"M11 17h9"}),(0,f.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function M({filterStatus:a,setFilterStatus:b,clearFilters:c,onClose:d}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Filters"}),(0,f.jsx)("p",{children:"Keep the owner school register compact and focused."})]}),(0,f.jsx)("button",{type:"button",onClick:d,"aria-label":"Close filters",children:"✕"})]}),(0,f.jsx)("div",{className:"ba-menu-list",children:[{value:"all",label:"All schools",note:"Show every owner school record"},{value:"active",label:"Active only",note:"Schools currently enabled"},{value:"inactive",label:"Inactive only",note:"Schools disabled for daily use"},{value:"no_contact",label:"Missing contact",note:"Schools without phone or email"},{value:"no_branch",label:"No branch",note:"Schools that still need branch setup"}].map(c=>(0,f.jsxs)("button",{type:"button",className:a===c.value?"active":"",onClick:()=>b(c.value),children:[(0,f.jsx)("span",{children:a===c.value?"✓":"⌁"}),(0,f.jsx)("b",{children:c.label}),(0,f.jsx)("small",{children:c.note})]},c.value))}),(0,f.jsxs)("div",{className:"ba-sheet-actions",children:[(0,f.jsx)("button",{type:"button",onClick:c,children:"Clear"}),(0,f.jsx)("button",{type:"button",className:"primary",onClick:d,children:"Apply"})]})]})})}function N({viewMode:a,setViewMode:b,onRefresh:c,onClose:d}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"More"}),(0,f.jsx)("p",{children:"Switch views or reload the local owner school register."})]}),(0,f.jsx)("button",{type:"button",onClick:d,"aria-label":"Close more options",children:"✕"})]}),(0,f.jsxs)("div",{className:"ba-menu-list",children:[(0,f.jsxs)("button",{type:"button",className:"cards"===a?"active":"",onClick:()=>b("cards"),children:[(0,f.jsx)("span",{children:"▦"}),(0,f.jsx)("b",{children:"Cards"}),(0,f.jsx)("small",{children:"Compact school register"})]}),(0,f.jsxs)("button",{type:"button",className:"table"===a?"active":"",onClick:()=>b("table"),children:[(0,f.jsx)("span",{children:"☷"}),(0,f.jsx)("b",{children:"Table view"}),(0,f.jsx)("small",{children:"Dense laptop-friendly owner records"})]}),(0,f.jsxs)("button",{type:"button",className:"summary"===a?"active":"",onClick:()=>b("summary"),children:[(0,f.jsx)("span",{children:"◔"}),(0,f.jsx)("b",{children:"Analytics"}),(0,f.jsx)("small",{children:"Status, contact and branch coverage"})]}),(0,f.jsxs)("button",{type:"button",onClick:c,children:[(0,f.jsx)("span",{children:"↻"}),(0,f.jsx)("b",{children:"Refresh"}),(0,f.jsx)("small",{children:"Reload local schools and branches"})]})]})]})})}function O({item:a,openEdit:b,remove:c,setActive:d,onClose:e}){let g=a.row;return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-profile",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:w(g)}),(0,f.jsxs)("p",{children:[a.branchCount," branch",1===a.branchCount?"":"es"," \xb7 ",x(g.active)]})]}),(0,f.jsx)("button",{type:"button",onClick:e,"aria-label":"Close school actions",children:"✕"})]}),(0,f.jsxs)("div",{className:"student-detail-strip",children:[(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Contact"}),g.phone||g.email||"Not set"]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Website"}),g.website||"Not set"]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Updated"}),z(g.updatedAt||g.createdAt)]})]}),(0,f.jsxs)("div",{className:"ba-menu-list",children:[(0,f.jsxs)("button",{type:"button",onClick:()=>b(a.row),children:[(0,f.jsx)("span",{children:"✎"}),(0,f.jsx)("b",{children:"Edit school"}),(0,f.jsx)("small",{children:"Update profile, contact, logo and banner"})]}),!1===g.active?(0,f.jsxs)("button",{type:"button",onClick:()=>d(a,!0),children:[(0,f.jsx)("span",{children:"✓"}),(0,f.jsx)("b",{children:"Activate"}),(0,f.jsx)("small",{children:"Enable this school for account operations"})]}):(0,f.jsxs)("button",{type:"button",onClick:()=>d(a,!1),children:[(0,f.jsx)("span",{children:"⏸"}),(0,f.jsx)("b",{children:"Deactivate"}),(0,f.jsx)("small",{children:"Keep the record but disable daily use"})]}),(0,f.jsxs)("button",{type:"button",className:"danger",onClick:()=>c(a),children:[(0,f.jsx)("span",{children:"⌫"}),(0,f.jsx)("b",{children:"Delete"}),(0,f.jsx)("small",{children:"Soft delete this school locally"})]})]})]})})}function P({rows:a,openEdit:b,remove:c,setActive:d}){return(0,f.jsx)("section",{className:"ba-table-card",children:(0,f.jsxs)("div",{className:"ba-table-scroll",children:[(0,f.jsxs)("table",{children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsxs)("th",{children:["Schools (",a.length,")"]}),(0,f.jsx)("th",{children:"Contact"}),(0,f.jsx)("th",{children:"Website"}),(0,f.jsx)("th",{children:"Branches"}),(0,f.jsx)("th",{children:"Status"}),(0,f.jsx)("th",{children:"Updated"}),(0,f.jsx)("th",{children:"Actions"})]})}),(0,f.jsx)("tbody",{children:a.map(a=>{let e=a.row;return(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{children:[(0,f.jsx)("strong",{children:w(e)}),(0,f.jsx)("span",{children:e.motto||e.address||"No motto/address"})]}),(0,f.jsx)("td",{children:e.phone||e.email||"—"}),(0,f.jsx)("td",{children:e.website||"—"}),(0,f.jsx)("td",{children:(0,f.jsx)(F,{tone:a.branchCount?"green":"orange",children:a.branchCount})}),(0,f.jsx)("td",{children:(0,f.jsx)(F,{tone:y(e.active),children:x(e.active)})}),(0,f.jsx)("td",{children:z(e.updatedAt||e.createdAt)}),(0,f.jsx)("td",{children:(0,f.jsxs)("div",{className:"ba-table-actions",children:[(0,f.jsx)("button",{type:"button",onClick:()=>b(a.row),children:"Edit"}),(0,f.jsxs)("button",{type:"button",onClick:()=>d(a,!1===e.active),children:[" ",!1===e.active?"Activate":"Deactivate"]}),(0,f.jsx)("button",{type:"button",className:"ba-delete",onClick:()=>c(a),children:"Delete"})]})})]},String(a.id))})})]}),!a.length&&(0,f.jsx)("div",{className:"ba-empty-table",children:"No school matches your filters."})]})})}function Q({form:a,saving:b,setModalOpen:c,updateForm:d,handleImageUpload:e,openCameraForField:g,save:h}){return(0,f.jsx)("div",{className:"ba-modal-backdrop",children:(0,f.jsxs)("form",{className:"ba-modal",onSubmit:h,children:[(0,f.jsxs)("div",{className:"ba-modal-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:a.id?"Edit School":"Add School"}),(0,f.jsx)("p",{children:"School is saved locally first and syncs through your normal sync pipeline."})]}),(0,f.jsx)("button",{type:"button",onClick:()=>c(!1),"aria-label":"Close school form",children:"✕"})]}),(0,f.jsxs)("section",{className:"ba-form-section",children:[(0,f.jsx)("h3",{children:"School Profile"}),(0,f.jsxs)("div",{className:"ba-form",children:[(0,f.jsxs)("label",{className:"wide",children:[(0,f.jsx)("span",{children:"School Name"}),(0,f.jsx)("input",{value:a.name,onChange:a=>d({name:a.target.value}),placeholder:"School name"})]}),(0,f.jsxs)("label",{className:"wide",children:[(0,f.jsx)("span",{children:"Motto"}),(0,f.jsx)("input",{value:a.motto,onChange:a=>d({motto:a.target.value}),placeholder:"School motto"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Phone"}),(0,f.jsx)("input",{value:a.phone,onChange:a=>d({phone:a.target.value}),placeholder:"Phone"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Email"}),(0,f.jsx)("input",{value:a.email,onChange:a=>d({email:a.target.value}),placeholder:"Email"})]}),(0,f.jsxs)("label",{className:"wide",children:[(0,f.jsx)("span",{children:"Website"}),(0,f.jsx)("input",{value:a.website,onChange:a=>d({website:a.target.value}),placeholder:"https://example.com"})]}),(0,f.jsxs)("label",{className:"wide",children:[(0,f.jsx)("span",{children:"Address"}),(0,f.jsx)("textarea",{value:a.address,onChange:a=>d({address:a.target.value}),placeholder:"School address"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Status"}),(0,f.jsxs)("select",{value:a.active?"active":"inactive",onChange:a=>d({active:"active"===a.target.value}),children:[(0,f.jsx)("option",{value:"active",children:"Active"}),(0,f.jsx)("option",{value:"inactive",children:"Inactive"})]})]})]})]}),(0,f.jsxs)("section",{className:"ba-form-section",children:[(0,f.jsx)("h3",{children:"Images"}),(0,f.jsxs)("div",{className:"ba-form",children:[(0,f.jsx)(R,{title:"Logo",field:"logo",preview:a.logo,handleImageUpload:e,openCameraForField:g}),(0,f.jsx)(R,{title:"School Photo",field:"photo",preview:a.photo,handleImageUpload:e,openCameraForField:g}),(0,f.jsx)(R,{title:"Banner Image",field:"bannerImage",preview:a.bannerImage,banner:!0,handleImageUpload:e,openCameraForField:g})]})]}),(0,f.jsxs)("div",{className:"ba-modal-actions",children:[(0,f.jsx)("button",{type:"button",onClick:()=>c(!1),children:"Cancel"}),(0,f.jsx)("button",{type:"submit",disabled:b,children:b?"Saving...":a.id?"Save Changes":"Add School"})]})]})})}function R({title:a,field:b,preview:c,banner:d=!1,handleImageUpload:e,openCameraForField:g}){return(0,f.jsxs)("label",{className:d?"wide":void 0,children:[(0,f.jsx)("span",{children:a}),(0,f.jsxs)("div",{className:"ba-media-actions",children:[(0,f.jsxs)("label",{className:"ba-media-button",children:["Upload",(0,f.jsx)("input",{type:"file",accept:"image/*",onChange:a=>e(b,a.target.files?.[0]),hidden:!0})]}),(0,f.jsx)("button",{type:"button",className:"ba-media-button secondary",onClick:()=>g(b),children:"Take Photo"})]}),(0,f.jsx)("small",{className:"ba-media-hint",children:"Upload from files or take a camera photo. It is optimized and saved as a media asset."}),c&&(0,f.jsx)("img",{src:c,alt:`${a} preview`,className:d?"ba-preview-banner":"ba-preview-photo"})]})}function S({field:a,videoRef:b,starting:c,capturing:d,facing:e,setFacing:g,capture:h,close:i,entityLabel:j}){let k="logo"===a?`Take ${j} Logo`:"bannerImage"===a?`Take ${j} Banner`:`Take ${j} Photo`;return(0,f.jsx)("div",{className:"ba-modal-backdrop camera-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-camera-modal",children:[(0,f.jsxs)("div",{className:"ba-modal-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:k}),(0,f.jsx)("p",{children:"Use the live camera preview, then capture. The image will be compressed and saved as a media asset."})]}),(0,f.jsx)("button",{type:"button",onClick:i,"aria-label":"Close camera",children:"✕"})]}),(0,f.jsxs)("div",{className:"ba-camera-preview",children:[(0,f.jsx)("video",{ref:b,autoPlay:!0,muted:!0,playsInline:!0}),c&&(0,f.jsx)("span",{className:"ba-camera-loading",children:"Opening camera..."})]}),(0,f.jsxs)("div",{className:"ba-camera-actions",children:[(0,f.jsx)("button",{type:"button",className:"ba-camera-secondary",onClick:()=>g("environment"===e?"user":"environment"),disabled:c||d,children:"Switch Camera"}),(0,f.jsx)("button",{type:"button",className:"ba-camera-secondary",onClick:i,disabled:d,children:"Cancel"}),(0,f.jsx)("button",{type:"button",className:"ba-camera-primary",onClick:h,disabled:c||d,children:d?"Capturing...":"Capture Photo"})]})]})})}function T(a,b){let c=new Map;return a.forEach(a=>{let d=b(a)||"Unknown";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value||a.label.localeCompare(b.label))}function U({title:a,rows:b,total:c}){return(0,f.jsxs)("article",{className:"ba-analysis",children:[(0,f.jsx)("span",{children:a}),(0,f.jsx)("strong",{children:c}),(0,f.jsx)("div",{className:"ba-analysis-list",children:b.map(a=>{let b=c?Math.round(a.value/c*100):0;return(0,f.jsxs)("section",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:a.label}),(0,f.jsx)("small",{children:a.value})]}),(0,f.jsx)("div",{className:"ba-progress",children:(0,f.jsx)("i",{style:{width:`${b}%`}})})]},a.label)})})]})}let V=`
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
.ba-page input, .ba-page select, .ba-page textarea {
  width: 100%; min-height: 44px; border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10)));
  border-radius: 16px; padding: 0 12px; background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #111827)); outline: none; font-weight: 750;
}
.ba-page input:focus, .ba-page select:focus, .ba-page textarea:focus {
  border-color: color-mix(in srgb, var(--ba-primary) 52%, var(--border, rgba(0,0,0,.10)));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--ba-primary) 12%, transparent);
}
.ba-state, .ba-search-card, .ba-card, .ba-table-card, .ba-analysis, .ba-empty, .ba-sheet, .ba-modal, .student-row {
  background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); box-shadow: 0 12px 28px rgba(15,23,42,.045);
}
.ba-state { min-height: min(420px, calc(100dvh - 32px)); width: min(520px, 100%); margin: 0 auto; display: grid; place-items: center; align-content: center; gap: 10px; padding: 22px; border-radius: 28px; text-align: center; }
.ba-spinner { width: 38px; height: 38px; border-radius: 999px; border: 4px solid color-mix(in srgb, var(--ba-primary) 18%, transparent); border-top-color: var(--ba-primary); animation: spin .8s linear infinite; }
.ba-state h2 { margin: 0; font-size: 22px; font-weight: 1000; letter-spacing: -.04em; }
.ba-state p { max-width: 34rem; margin: 0; color: var(--muted, #64748b); font-size: 13px; line-height: 1.6; }
.ba-toast { position: sticky; top: 8px; z-index: 40; display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; padding: 12px 14px; border-radius: 18px; font-size: 13px; font-weight: 850; box-shadow: 0 18px 40px rgba(15,23,42,.12); }
.ba-toast.success { background: rgba(34,197,94,.14); color: #166534; } .ba-toast.error { background: rgba(239,68,68,.12); color: #991b1b; } .ba-toast.info { background: rgba(59,130,246,.13); color: #1d4ed8; }
.ba-toast button { border: 0; background: transparent; color: currentColor; font-weight: 1000; cursor: pointer; }
.ba-icon-button, .ba-filter-button, .ba-add-inline { width: 42px; height: 42px; border: 1px solid var(--border, rgba(0,0,0,.10)); border-radius: 999px; display: grid; place-items: center; background: var(--card-bg, var(--surface,#fff)); color: var(--text,#111827); font-size: 18px; font-weight: 1000; cursor: pointer; box-shadow: 0 10px 22px rgba(15,23,42,.045); }
.ba-add-inline { flex: 0 0 42px; border-color: var(--ba-primary); background: var(--ba-primary); color: #fff; font-size: 25px; line-height: 1; box-shadow: 0 12px 28px color-mix(in srgb, var(--ba-primary) 22%, transparent); }
.ba-search-card { display: grid; grid-template-columns: minmax(0, 1fr) auto auto auto; gap: 8px; align-items: center; margin-top: 2px; padding: 8px; border-radius: 24px; }
.ba-search { min-width: 0; display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 8px; min-height: 44px; padding: 0 11px; border-radius: 18px; background: color-mix(in srgb, var(--muted,#64748b) 7%, transparent); }
.ba-search span { color: var(--muted,#64748b); font-size: 17px; font-weight: 1000; }
.ba-search input { min-height: 42px; border: 0; padding: 0; border-radius: 0; background: transparent; box-shadow: none; font-size: 14px; }
.ba-slider-icon { width: 21px; height: 21px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
.ba-filter-button { position: relative; background: color-mix(in srgb, var(--ba-primary) 8%, var(--card-bg,#fff)); color: var(--ba-primary); }
.ba-filter-button.active { background: var(--ba-primary); color: #fff; border-color: var(--ba-primary); }
.ba-filter-button b { position: absolute; top: -4px; right: -4px; min-width: 19px; height: 19px; display: grid; place-items: center; border-radius: 999px; background: #ef4444; color: #fff; font-size: 10px; border: 2px solid var(--card-bg,#fff); }
.ba-filter-chips { display: flex; gap: 7px; overflow-x: auto; padding: 8px 1px 0; scrollbar-width: none; -ms-overflow-style: none; }
.ba-filter-chips::-webkit-scrollbar { display: none; }
.ba-filter-chips button { flex: 0 0 auto; min-height: 31px; border: 0; border-radius: 999px; padding: 0 10px; background: color-mix(in srgb, var(--ba-primary) 11%, transparent); color: var(--ba-primary); font-size: 11px; font-weight: 950; white-space: nowrap; cursor: pointer; }
.ba-list { display: grid; gap: 7px; margin-top: 10px; }
.student-row { width: 100%; display: grid; grid-template-columns: auto minmax(0,1fr) auto; align-items: center; gap: 10px; padding: 10px; border-radius: 22px; text-align: left; cursor: pointer; transition: transform .16s var(--ease), box-shadow .16s var(--ease), border-color .16s var(--ease); }
.student-row:hover { transform: translateY(-1px); border-color: color-mix(in srgb, var(--ba-primary) 24%, var(--border, rgba(0,0,0,.10))); box-shadow: 0 16px 34px rgba(15,23,42,.07); }
.ba-avatar { width: 48px; height: 48px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 18px; color: #fff; font-size: 17px; font-weight: 1000; box-shadow: 0 12px 24px rgba(15,23,42,.12); }
.student-main, .student-main strong, .student-main small, .student-main em { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.student-main strong { color: var(--text,#111827); font-size: 14px; font-weight: 1000; letter-spacing: -.02em; }
.student-main small { margin-top: 3px; color: var(--muted,#64748b); font-size: 12px; font-weight: 850; font-style: normal; }
.student-main em { margin-top: 3px; color: color-mix(in srgb, var(--muted,#64748b) 86%, var(--text,#111827)); font-size: 11px; font-weight: 750; font-style: normal; }
.student-side { display: grid; justify-items: end; gap: 6px; flex: 0 0 auto; }
.student-side i { color: var(--muted,#64748b); font-style: normal; font-size: 18px; font-weight: 1000; line-height: 1; }
.ba-chip { max-width: 100%; display: inline-flex; align-items: center; min-height: 24px; padding: 3px 8px; border-radius: 999px; font-size: 10px; font-weight: 950; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize; }
.ba-chip.green { background: rgba(34,197,94,.12); color: #16a34a; } .ba-chip.red { background: rgba(239,68,68,.12); color: #dc2626; } .ba-chip.blue { background: rgba(59,130,246,.12); color: #2563eb; } .ba-chip.gray { background: color-mix(in srgb,var(--muted,#64748b) 14%,transparent); color: var(--muted,#64748b); } .ba-chip.orange { background: rgba(245,158,11,.14); color: #b45309; } .ba-chip.purple { background: rgba(147,51,234,.12); color: #7e22ce; }
.status-dot-mini { width: 10px; height: 10px; display: inline-block; border-radius: 999px; background: var(--muted,#64748b); box-shadow: 0 0 0 4px color-mix(in srgb, currentColor 10%, transparent); }
.status-dot-mini.green { background: #22c55e; } .status-dot-mini.red { background: #ef4444; } .status-dot-mini.blue { background: #3b82f6; } .status-dot-mini.orange { background: #f59e0b; } .status-dot-mini.gray { background: var(--muted,#64748b); }
.ba-sheet-backdrop, .ba-modal-backdrop { position: fixed; inset: 0; z-index: 80; display: grid; place-items: end center; padding: 10px; background: rgba(15,23,42,.50); backdrop-filter: blur(12px); }
.ba-sheet { width: min(760px, 100%); max-height: min(88dvh, 760px); overflow-y: auto; padding: 14px; border-radius: 28px 28px 22px 22px; box-shadow: 0 30px 90px rgba(15,23,42,.32); animation: sheetIn .18s var(--ease); }
.ba-sheet.small { width: min(520px, 100%); }
@keyframes sheetIn { from { transform: translateY(16px); opacity: .7; } to { transform: translateY(0); opacity: 1; } }
.ba-sheet-head, .ba-sheet-profile, .ba-modal-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding-bottom: 12px; }
.ba-sheet-head h2, .ba-sheet-profile h2, .ba-modal-head h2 { margin: 0; color: var(--text,#111827); font-size: 21px; font-weight: 1000; letter-spacing: -.05em; }
.ba-sheet-head p, .ba-sheet-profile p, .ba-modal-head p { margin: 5px 0 0; color: var(--muted,#64748b); font-size: 12px; line-height: 1.5; font-weight: 750; }
.ba-sheet-head button, .ba-sheet-profile button, .ba-modal-head button { width: 38px; height: 38px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; background: var(--surface,#fff); color: var(--text,#111827); font-weight: 1000; cursor: pointer; flex: 0 0 auto; }
.ba-sheet-actions, .ba-modal-actions { position: sticky; bottom: -14px; display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 8px; margin-top: 14px; padding: 12px 0 2px; background: linear-gradient(to top, var(--card-bg,var(--surface,#fff)) 70%, transparent); }
.ba-sheet-actions button, .ba-modal-actions button { min-height: 42px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; padding: 0 16px; background: color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff)); color: var(--text,#111827); font-size: 12px; font-weight: 950; cursor: pointer; }
.ba-sheet-actions button.primary, .ba-modal-actions button:last-child { border-color: var(--ba-primary); background: var(--ba-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent); }
.ba-modal-actions button:disabled { opacity: .65; cursor: not-allowed; }
.ba-menu-list { display: grid; gap: 8px; }
.ba-menu-list button { width: 100%; display: grid; grid-template-columns: 42px minmax(0,1fr); column-gap: 10px; align-items: center; min-height: 58px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 18px; padding: 9px; background: var(--surface,#fff); color: var(--text,#111827); text-align: left; cursor: pointer; }
.ba-menu-list button span { grid-row: span 2; width: 42px; height: 42px; display: grid; place-items: center; border-radius: 16px; background: color-mix(in srgb, var(--ba-primary) 10%, transparent); color: var(--ba-primary); font-weight: 1000; }
.ba-menu-list button b, .ba-menu-list button small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ba-menu-list button b { font-size: 13px; font-weight: 1000; } .ba-menu-list button small { margin-top: 2px; color: var(--muted,#64748b); font-size: 11px; font-weight: 750; }
.ba-menu-list button.active { border-color: color-mix(in srgb, var(--ba-primary) 34%, var(--border,rgba(0,0,0,.10))); background: color-mix(in srgb, var(--ba-primary) 8%, var(--surface,#fff)); }
.ba-menu-list button.danger span { background: color-mix(in srgb, #dc2626 10%, transparent); color: #dc2626; } .ba-menu-list button.danger b { color: #991b1b; }
.student-detail-strip { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 7px; margin-bottom: 10px; }
.student-detail-strip span { display: block; padding: 9px; border-radius: 16px; background: color-mix(in srgb, var(--muted,#64748b) 8%, transparent); color: var(--muted,#64748b); font-size: 11px; font-weight: 850; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.student-detail-strip b { display: block; margin-bottom: 3px; color: var(--text,#111827); font-size: 10px; text-transform: uppercase; letter-spacing: .05em; }
.ba-form { display: grid; grid-template-columns: minmax(0, 1fr); gap: 10px; } .ba-form.two { grid-template-columns: minmax(0,1fr); } .ba-form.compact { gap: 9px; }
.ba-form label { display: grid; gap: 6px; min-width: 0; } .ba-form span { color: var(--muted,#64748b); font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: .06em; }
.ba-media-hint { color: var(--muted,#64748b); font-size: 11px; font-weight: 750; line-height: 1.4; }
.ba-form .wide { grid-column: 1 / -1; }
.ba-form-section { padding: 12px 0; border-top: 1px solid var(--border,rgba(0,0,0,.08)); } .ba-form-section:first-of-type { border-top: 0; padding-top: 0; }
.ba-form-section h3 { margin: 0 0 10px; color: var(--text,#111827); font-size: 14px; font-weight: 1000; letter-spacing: -.03em; }
.ba-page textarea { min-height: 92px; padding: 12px; resize: vertical; line-height: 1.55; }
.ba-media-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
.ba-media-button { min-height: 40px; border: 1px solid var(--ba-primary); border-radius: 999px; padding: 0 14px; display: inline-flex; align-items: center; justify-content: center; background: var(--ba-primary); color: #fff !important; font-size: 12px; font-weight: 950; letter-spacing: 0 !important; text-transform: none !important; cursor: pointer; text-align: center; box-shadow: 0 12px 26px color-mix(in srgb, var(--ba-primary) 18%, transparent); }
.ba-media-button.secondary { background: var(--surface, #fff); color: var(--ba-primary) !important; box-shadow: none; }
.ba-media-button input { display: none; }
.ba-preview-photo { width: 96px; height: 96px; object-fit: cover; border-radius: 22px; border: 1px solid var(--border,rgba(0,0,0,.10)); }
.ba-preview-banner { width: 100%; height: 130px; object-fit: cover; border-radius: 22px; border: 1px solid var(--border,rgba(0,0,0,.10)); }
.ba-modal { width: min(980px, 100%); max-height: min(92dvh, 900px); overflow-y: auto; padding: 14px; border-radius: 28px; box-shadow: 0 30px 90px rgba(15,23,42,.35); }
.ba-analysis-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 10px; margin-top: 10px; }
.ba-analysis, .ba-table-card, .ba-empty { padding: 13px; border-radius: 24px; }
.ba-analysis span { color: var(--muted,#64748b); font-size: 11px; font-weight: 950; text-transform: uppercase; letter-spacing: .08em; }
.ba-analysis strong { display: block; margin-top: 8px; font-size: clamp(22px,7vw,30px); line-height: 1; font-weight: 1000; letter-spacing: -.06em; overflow-wrap: anywhere; }
.ba-analysis p { margin: 8px 0 0; color: var(--muted,#64748b); font-size: 12px; line-height: 1.5; }
.ba-analysis-list { display: grid; gap: 10px; margin-top: 12px; }
.ba-analysis-list section { display: grid; gap: 6px; padding: 10px; border-radius: 16px; background: color-mix(in srgb,var(--muted,#64748b) 8%,transparent); }
.ba-analysis-list section > div:first-child { display: flex; justify-content: space-between; gap: 10px; }
.ba-analysis-list b, .ba-analysis-list small { font-size: 12px; } .ba-analysis-list small { color: var(--muted,#64748b); font-weight: 850; }
.ba-progress { height: 8px; border-radius: 999px; background: color-mix(in srgb,var(--muted,#64748b) 18%,transparent); overflow: hidden; } .ba-progress i { display: block; height: 100%; border-radius: inherit; background: var(--ba-primary); }
.ba-empty { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 220px; text-align: center; border-style: dashed; }
.ba-empty-icon { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 22px; background: color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff)); font-size: 28px; }
.ba-empty h3 { margin: 0; font-size: 18px; font-weight: 1000; } .ba-empty p { margin: 0; color: var(--muted,#64748b); font-size: 13px; line-height: 1.6; }
.ba-table-card { margin-top: 10px; } .ba-table-scroll { width: 100%; max-width: 100%; overflow-x: auto; border-radius: 18px; border: 1px solid var(--border,rgba(0,0,0,.08)); }
.ba-table-scroll table { width: 100%; min-width: 920px; border-collapse: collapse; background: var(--card-bg, var(--surface, var(--bg, transparent))); }
.ba-table-scroll th, .ba-table-scroll td { padding: 10px; border-bottom: 1px solid var(--border,rgba(0,0,0,.08)); vertical-align: top; text-align: left; font-size: 13px; }
.ba-table-scroll th { background: var(--table-header-bg, color-mix(in srgb, var(--ba-primary) 6%, var(--card-bg, var(--surface, var(--bg, transparent))))); color: var(--table-header-text, var(--muted, var(--text))); font-size: 11px; font-weight: 1000; text-transform: uppercase; letter-spacing: .07em; }
.ba-table-scroll td strong, .ba-table-scroll td span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .ba-table-scroll td span { margin-top: 3px; color: var(--muted,#64748b); font-size: 11px; }
.ba-table-actions { display: flex; flex-wrap: nowrap; gap: 7px; width: 100%; max-width: 100%; overflow-x: auto; scrollbar-width: none; -ms-overflow-style: none; } .ba-table-actions::-webkit-scrollbar { display: none; }
.ba-table-actions button { flex: 0 0 auto; min-height: 34px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; padding: 0 10px; background: var(--surface,#fff); color: var(--text,#111827); font-size: 11px; font-weight: 950; cursor: pointer; white-space: nowrap; }
.ba-table-actions button:first-child { background: var(--ba-primary); color: #fff; border-color: var(--ba-primary); }
.ba-delete, .ba-table-actions button.ba-delete { color: #991b1b; background: color-mix(in srgb,#dc2626 7%,var(--surface,#fff)); border-color: color-mix(in srgb,#dc2626 24%,var(--border,rgba(0,0,0,.10))); }
.ba-empty-table { padding: 22px; text-align: center; color: var(--muted,#64748b); font-weight: 850; }
.camera-backdrop { z-index: 100; place-items: center; }
.ba-camera-modal { width: min(720px, 100%); max-height: min(92dvh, 880px); overflow-y: auto; padding: 14px; border-radius: 28px; background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); box-shadow: 0 30px 90px rgba(15,23,42,.35); }
.ba-camera-preview { position: relative; width: 100%; aspect-ratio: 4 / 3; overflow: hidden; border-radius: 24px; background: #020617; border: 1px solid var(--border, rgba(0,0,0,.10)); }
.ba-camera-preview video { width: 100%; height: 100%; display: block; object-fit: cover; background: #020617; }
.ba-camera-loading { position: absolute; inset: 0; display: grid; place-items: center; background: rgba(2,6,23,.72); color: #fff; font-size: 13px; font-weight: 950; }
.ba-camera-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px; margin-top: 12px; }
.ba-camera-actions button { min-height: 42px; border-radius: 999px; padding: 0 14px; font-size: 12px; font-weight: 950; cursor: pointer; }
.ba-camera-secondary { border: 1px solid var(--border, rgba(0,0,0,.10)); background: color-mix(in srgb, var(--muted, #64748b) 8%, var(--surface, #fff)); color: var(--text, #111827); }
.ba-camera-primary { border: 1px solid var(--ba-primary); background: var(--ba-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent); }
.ba-camera-actions button:disabled { opacity: .62; cursor: not-allowed; }
@media (min-width: 680px) { .ba-page { padding: calc(12px * var(--local-density-scale,1)); padding-bottom: 44px; } .ba-search-card { grid-template-columns: minmax(0,1fr) 48px 48px 48px; } .ba-list { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; } .student-row { border-radius: 24px; padding: 12px; } .ba-analysis-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } .ba-form { grid-template-columns: repeat(2, minmax(0,1fr)); } .ba-modal-backdrop, .ba-sheet-backdrop { place-items: center; padding: 18px; } .ba-sheet { border-radius: 28px; padding: 18px; } .ba-modal { padding: 18px; } }
@media (min-width: 1040px) { .ba-page { padding: calc(16px * var(--local-density-scale,1)); padding-bottom: 48px; } .ba-search-card, .ba-list, .ba-analysis-grid, .ba-table-card, .ba-filter-chips { max-width: 1180px; margin-left: auto; margin-right: auto; } .ba-list { grid-template-columns: repeat(3, minmax(0, 1fr)); } .ba-analysis-grid { grid-template-columns: repeat(4, minmax(0,1fr)); } .ba-current-filter { grid-column: span 2; } .ba-form { grid-template-columns: repeat(3, minmax(0,1fr)); } }
@media (max-width: 520px) { .ba-page { padding: calc(7px * var(--local-density-scale,1)); padding-bottom: max(38px, env(safe-area-inset-bottom)); } .ba-icon-button, .ba-filter-button, .ba-add-inline { width: 40px; height: 40px; } .student-detail-strip { grid-template-columns: minmax(0,1fr); } .ba-sheet, .ba-modal { border-radius: 24px 24px 18px 18px; padding: 12px; } .ba-sheet-actions, .ba-modal-actions { display: grid; grid-template-columns: minmax(0,1fr); } .ba-sheet-actions button, .ba-modal-actions button { width: 100%; } .ba-media-actions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); } .ba-media-button, .ba-camera-actions button { width: 100%; } .ba-camera-actions { display: grid; grid-template-columns: minmax(0, 1fr); } .ba-camera-modal { border-radius: 22px; padding: 11px; } }
`;c(79143);let W=[{id:"pathways-to-possibility",type:"image",src:"/pathways-to-possibility.png",durationSeconds:7},{id:"building-the-future",type:"image",src:"/building-the-future.png",durationSeconds:7},{id:"knowledge-in-motion",type:"image",src:"/knowledge-in-motion.png",durationSeconds:7}];function X(a,b=""){return String(a??"").trim()||b}function Y(a){return null==a?"":String(a).trim()}function Z(a,b){let c=Y(a),d=Y(b);return!!(c&&d&&c===d)}function $(a){let b=Number(a??0);return Number.isFinite(b)?b:0}function _(a){return a?.id??a?.localId??a?.cloudId??a?.payload?.id}function aa(a){return!!a&&!0!==a.isDeleted&&!1!==a.active&&!["deleted","archived","inactive","disabled","blocked","suspended"].includes(X(a.status).toLowerCase())}function ab(a,b="GHS"){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:b,maximumFractionDigits:0}).format($(a))}catch{return`${b} ${$(a).toLocaleString()}`}}function ac(a,b){let c=a.find(a=>Z(_(a),b));return X(c?.publicUrl||c?.remoteUrl||c?.previewDataUrl||c?.thumbnailDataUrl||c?.localObjectUrl)}function ad({slides:a}){let[b,c]=(0,g.useState)(0),d=a[b%Math.max(1,a.length)];return d?(0,f.jsxs)("section",{className:"od-hero",children:["video"===d.type?(0,f.jsx)("video",{src:d.src,poster:d.poster,autoPlay:!0,muted:!0,playsInline:!0,onEnded:()=>c(b=>(b+1)%a.length)}):(0,f.jsx)("img",{src:d.src,alt:""}),a.length>1?(0,f.jsx)("div",{className:"od-dots",children:a.map((a,d)=>(0,f.jsx)("button",{type:"button",className:d===b?"active":"",onClick:()=>c(d)},a.id))}):null]}):null}function ae({navigate:a,navSections:b}){(0,k.useRouter)();let{accountId:c,authenticated:d,loading:e}=(0,l.F)(),{settings:h,loading:i}=(0,m.t)(),j=h?.primaryColor||"var(--primary-color,#2563eb)",[n,o]=(0,g.useState)(!0),[p,q]=(0,g.useState)({}),r=(0,g.useMemo)(()=>{let a=(p.schools||[]).filter(aa),b=(p.branches||[]).filter(aa),c=(p.appUsers||p.users||p.accountUsers||[]).filter(aa),d=(p.userMemberships||p.memberships||[]).filter(aa),e=new Set([...c.map(a=>Y(a.id||a.userId||a.email)),...d.map(a=>Y(a.userId||a.appUserId||a.email))].filter(Boolean)).size,f=(p.invoices||[]).filter(aa),g=[...p.appPayments||[],...p.payments||[]].filter(aa),h=(p.accountSubscriptions||[]).filter(aa),i=(p.subscriptionPlans||[]).filter(aa),j=h.slice().sort((a,b)=>$(b.updatedAt||b.createdAt)-$(a.updatedAt||a.createdAt))[0],k=i.find(a=>Z(_(a),j?.planId)),l=g.filter(a=>["paid","success","succeeded","completed"].includes(X(a.status).toLowerCase())).reduce((a,b)=>a+$(b.amount||b.total),0),m=(p.syncConflicts||[]).filter(a=>!["resolved","closed","ignored"].includes(X(a.status,"open").toLowerCase())).length;return{schools:a.length,branches:b.length,users:e,invoices:f.length,payments:g.length,totalPaid:l,conflicts:m,planName:X(k?.name||j?.planName,"No plan"),subscriptionStatus:X(j?.status,"Not set"),currency:X(k?.currency||j?.currency||g[0]?.currency,"GHS")}},[p]),s=(0,g.useMemo)(()=>(p.schools||[]).filter(aa).slice(0,3),[p.schools]),t=(0,g.useMemo)(()=>[...(p.announcements||[]).map(a=>({...a,_kind:"Announcement",_icon:"\uD83D\uDCE3",_title:X(a.title,"Announcement"),_date:a.sentAt||a.updatedAt||a.createdAt})),...(p.payments||[]).map(a=>({...a,_kind:"Payment",_icon:"\uD83D\uDCB3",_title:ab(a.amount||a.total,a.currency||r.currency),_date:a.paidAt||a.updatedAt||a.createdAt}))].filter(aa).sort((a,b)=>new Date(b._date||0).getTime()-new Date(a._date||0).getTime()).slice(0,3),[p,r.currency]),u=(0,g.useMemo)(()=>{var a,b;let c;return a=p.portalHighlights||[],b=(p.mediaAssets||[]).filter(aa),(c=a.filter(aa).filter(a=>(Array.isArray(a.audiences)?a.audiences.map(a=>X(a).toLowerCase()):[X(a.audience||a.portal||a.role||"all").toLowerCase()]).some(a=>["all","owner","super_admin","super-admin"].includes(a))).sort((a,b)=>$(a.displayOrder||a.order)-$(b.displayOrder||b.order)).map((a,c)=>{let d="video"===X(a.mediaType).toLowerCase()?"video":"image",e=ac(b,a.mediaAssetId)||("image"===d?X(a.fallbackImageUrl):"");return e?{id:Y(_(a))||`owner-highlight-${c}`,type:d,src:e,poster:ac(b,a.posterMediaAssetId)||void 0,durationSeconds:Math.max(3,$(a.durationSeconds||7))}:null}).filter(a=>!!a)).length?c:W},[p.portalHighlights,p.mediaAssets]);function v(b){if(a)return void a(b);try{window.dispatchEvent(new CustomEvent("eleeveon:portal-route",{detail:{key:b}}))}catch{}}return n||e||i?(0,f.jsx)(ag,{primary:j}):(0,f.jsxs)("main",{className:"od-page",style:{"--od-primary":j},children:[(0,f.jsx)("style",{children:ah}),(0,f.jsx)(ad,{slides:u}),(0,f.jsxs)("section",{className:"od-metrics",children:[(0,f.jsxs)("button",{type:"button",onClick:()=>v("schools"),children:[(0,f.jsx)("span",{children:"Schools"}),(0,f.jsx)("strong",{children:r.schools}),(0,f.jsxs)("small",{children:[r.branches," ","branches"]})]}),(0,f.jsxs)("button",{type:"button",onClick:()=>v("users"),children:[(0,f.jsx)("span",{children:"Users"}),(0,f.jsx)("strong",{children:r.users}),(0,f.jsx)("small",{children:"account-wide"})]})]}),(0,f.jsxs)("section",{className:"od-grid",children:[(0,f.jsxs)("article",{className:"od-card",children:[(0,f.jsxs)("header",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"Institution"}),(0,f.jsx)("h2",{children:"Schools"})]}),(0,f.jsx)("button",{onClick:()=>v("schools"),children:"Manage"})]}),(0,f.jsxs)("div",{className:"od-list",children:[s.map((a,b)=>{let c=_(a),d=(p.branches||[]).filter(a=>aa(a)&&Z(a.schoolId,c)).length;return(0,f.jsxs)("button",{type:"button",className:"od-row",onClick:()=>v("schools"),children:[(0,f.jsx)("span",{children:"\uD83C\uDFEB"}),(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:X(a?.name||a?.fullName||a?.title||a?.email,"Unnamed")}),(0,f.jsxs)("small",{children:[d," ","branch(es)"]})]})]},Y(c)||b)}),s.length?null:(0,f.jsx)(af,{text:"No schools yet."})]})]}),(0,f.jsxs)("article",{className:"od-card",children:[(0,f.jsxs)("header",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"Subscription"}),(0,f.jsx)("h2",{children:"Account plan"})]}),(0,f.jsx)("button",{onClick:()=>v("subscription"),children:"Open"})]}),(0,f.jsx)("strong",{className:"od-big",children:r.planName}),(0,f.jsx)("p",{children:r.subscriptionStatus}),(0,f.jsxs)("div",{className:"od-inline",children:[(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:r.invoices}),"Invoices"]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:ab(r.totalPaid,r.currency)}),"Paid"]})]})]}),(0,f.jsxs)("article",{className:"od-card",children:[(0,f.jsxs)("header",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"System"}),(0,f.jsx)("h2",{children:"Sync health"})]}),(0,f.jsx)("button",{onClick:()=>v("sync"),children:"Inspect"})]}),(0,f.jsx)("strong",{className:"od-big",children:r.conflicts?"Attention":"Healthy"}),(0,f.jsx)("p",{children:r.conflicts?`${r.conflicts} unresolved conflict(s)`:"No unresolved sync conflicts"})]}),(0,f.jsxs)("article",{className:"od-card",children:[(0,f.jsx)("header",{children:(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:"Recent"}),(0,f.jsx)("h2",{children:"Account activity"})]})}),(0,f.jsxs)("div",{className:"od-list",children:[t.map((a,b)=>(0,f.jsxs)("button",{type:"button",className:"od-row",onClick:()=>v("Payment"===a._kind?"payments":"ownerAnnouncements"),children:[(0,f.jsx)("span",{children:a._icon}),(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:a._title}),(0,f.jsxs)("small",{children:[a._kind," ","\xb7"," ",function(a){if(!a)return"Not set";let b=new Date(a);return Number.isFinite(b.getTime())?new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric"}).format(b):"Not set"}(a._date)]})]})]},Y(_(a))||b)),t.length?null:(0,f.jsx)(af,{text:"No recent account activity."})]})]})]})]})}function af({text:a}){return(0,f.jsx)("div",{className:"od-empty",children:a})}function ag({primary:a}){return(0,f.jsxs)("main",{className:"od-page",style:{"--od-primary":a},children:[(0,f.jsx)("style",{children:ah}),(0,f.jsxs)("section",{className:"od-state",children:[(0,f.jsx)("div",{className:"od-spinner"}),(0,f.jsx)("h2",{children:"Opening owner home..."})]})]})}let ah=`
@keyframes odSpin {
  to { transform: rotate(360deg); }
}

.od-page {
  width: 100%;
  height: auto !important;
  min-height: 0 !important;
  overflow: visible !important;
  padding: 8px 8px calc(76px + env(safe-area-inset-bottom,0px));
  background: var(--bg,#f7f8fb);
  color: var(--text,#111827);
}

.od-page,
.od-page * {
  box-sizing: border-box;
  min-width: 0;
}

.od-page button {
  font: inherit;
  cursor: pointer;
}

.od-hero {
  position: relative;
  height: clamp(290px,47vw,390px);
  overflow: hidden;
  border-radius: 25px;
  background: #0f172a;
  box-shadow: 0 14px 34px rgba(15,23,42,.08);
}

.od-hero img,
.od-hero video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.od-dots {
  position: absolute;
  left: 50%;
  bottom: 11px;
  display: flex;
  gap: 6px;
  transform: translateX(-50%);
}

.od-dots button {
  width: 7px;
  height: 7px;
  padding: 0;
  border: 0;
  border-radius: 99px;
  background: rgba(255,255,255,.5);
}

.od-dots button.active {
  width: 20px;
  background: #fff;
}

.od-metrics,
.od-grid {
  display: grid;
  gap: 9px;
  margin-top: 9px;
}

.od-metrics {
  grid-template-columns: repeat(2,minmax(0,1fr));
}

.od-metrics button,
.od-card {
  border: 1px solid var(--border,rgba(15,23,42,.09));
  background: var(--card-bg,var(--surface,#fff));
  color: inherit;
  box-shadow: 0 8px 22px rgba(15,23,42,.045);
}

.od-metrics button {
  min-height: 92px;
  padding: 12px;
  border-radius: 20px;
  text-align: left;
}

.od-metrics span,
.od-metrics strong,
.od-metrics small {
  display: block;
}

.od-metrics span {
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
}

.od-metrics strong {
  margin-top: 5px;
  font-size: 28px;
  line-height: 1;
}

.od-metrics small {
  margin-top: 5px;
  color: var(--muted,#64748b);
  font-size: 10px;
}

.od-card {
  padding: 13px;
  border-radius: 22px;
}

.od-card header {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}

.od-card header span {
  color: var(--muted,#64748b);
  font-size: 9px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .09em;
}

.od-card h2 {
  margin: 2px 0 0;
  font-size: 16px;
}

.od-card header button {
  border: 0;
  border-radius: 999px;
  padding: 6px 9px;
  background: color-mix(in srgb,var(--od-primary) 9%,transparent);
  color: var(--od-primary);
  font-size: 10px;
  font-weight: 900;
}

.od-list {
  display: grid;
  gap: 6px;
}

.od-row {
  width: 100%;
  display: grid;
  grid-template-columns: 36px minmax(0,1fr);
  gap: 9px;
  align-items: center;
  border: 0;
  border-radius: 15px;
  padding: 8px;
  background: color-mix(in srgb,var(--muted,#64748b) 5%,transparent);
  color: inherit;
  text-align: left;
}

.od-row > span {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background: color-mix(in srgb,var(--od-primary) 10%,transparent);
}

.od-row strong,
.od-row small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.od-row strong {
  font-size: 12px;
}

.od-row small {
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 10px;
}

.od-big {
  display: block;
  overflow-wrap: anywhere;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -.05em;
}

.od-card > p {
  margin: 6px 0 0;
  color: var(--muted,#64748b);
  font-size: 10px;
}

.od-inline {
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 7px;
  margin-top: 13px;
}

.od-inline span {
  padding: 9px;
  border-radius: 14px;
  background: color-mix(in srgb,var(--muted,#64748b) 6%,transparent);
  color: var(--muted,#64748b);
  font-size: 9px;
}

.od-inline b {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
  color: var(--text,#111827);
  font-size: 14px;
}

.od-empty {
  padding: 18px 8px;
  text-align: center;
  color: var(--muted,#64748b);
  font-size: 11px;
}

.od-state {
  min-height: 280px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
}

.od-spinner {
  width: 36px;
  height: 36px;
  border: 4px solid color-mix(in srgb,var(--od-primary) 16%,transparent);
  border-top-color: var(--od-primary);
  border-radius: 999px;
  animation: odSpin .8s linear infinite;
}

.od-state h2 {
  margin: 0;
  font-size: 17px;
}

.od-page,
.app-content,
.app-content-inner,
.shell-portal-content,
.shell-content-background {
  height: auto !important;
  max-height: none !important;
  min-height: 0 !important;
  overflow-y: visible !important;
}

html {
  overflow-y: auto !important;
}

body {
  overflow-y: visible !important;
}

@media (min-width:720px) {
  .od-page {
    padding: 12px 12px 24px;
  }

  .od-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }

  .od-hero {
    height: 370px;
  }
}

@media (min-width:1100px) {
  .od-page {
    max-width: 1180px;
    margin: 0 auto;
  }
}
`,ai=[{key:"term-1",name:"Term 1",type:"Term 1",order:1},{key:"term-2",name:"Term 2",type:"Term 2",order:2},{key:"term-3",name:"Term 3",type:"Term 3",order:3}],aj=[{key:"a",minScore:80,maxScore:100,grade:"A",remark:"Excellent",order:1},{key:"b",minScore:70,maxScore:79.99,grade:"B",remark:"Very Good",order:2},{key:"c",minScore:60,maxScore:69.99,grade:"C",remark:"Good",order:3},{key:"d",minScore:50,maxScore:59.99,grade:"D",remark:"Credit",order:4},{key:"e",minScore:40,maxScore:49.99,grade:"E",remark:"Pass",order:5},{key:"f",minScore:0,maxScore:39.99,grade:"F",remark:"Fail",order:6}],ak=[{key:"continuous-assessment",name:"Continuous Assessment",weight:30,maxScore:30,order:1,compulsory:!0},{key:"examination",name:"Examination",weight:70,maxScore:70,order:2,compulsory:!0}],al={literacy:["literacy","Language and Literacy","LIT"],numeracy:["numeracy","Numeracy","NUM"],owop:["owop","Our World and Our People","OWOP"],"creative-arts":["creative-arts","Creative Arts","CA"],english:["english","English Language","ENG"],mathematics:["mathematics","Mathematics","MATH"],science:["science","Science","SCI"],history:["history","History","HIST"],"ghanaian-language":["ghanaian-language","Ghanaian Language","GHL"],french:["french","French Language","FRE"],computing:["computing","Computing","COMP"],rme:["rme","Religious and Moral Education","RME"],pe:["pe","Physical Education","PE"],"social-studies":["social-studies","Social Studies","SOC"],"career-technology":["career-technology","Career Technology","CT"],"creative-arts-design":["creative-arts-design","Creative Arts and Design","CAD"],"pe-health":["pe-health","Physical Education and Health","PEH"],arabic:["arabic","Arabic","ARA"],"core-mathematics":["core-mathematics","Core Mathematics","CMATH"],"integrated-science":["integrated-science","Integrated Science","ISCI"]},am=["literacy","numeracy","creative-arts","owop"],an=["english","mathematics","science","history","ghanaian-language","creative-arts","rme","pe"],ao=[...an,"french","computing"],ap=["english","mathematics","science","social-studies","ghanaian-language","french","computing","career-technology","creative-arts-design","rme","pe-health","arabic"],aq=["english","core-mathematics","integrated-science","social-studies"],ar={nursery:[1,2].map(a=>({key:`nursery-${a}`,name:`Nursery ${a}`,code:`N${a}`,level:"nursery",subjects:am})),kg:[1,2].map(a=>({key:`kg-${a}`,name:`KG ${a}`,code:`KG${a}`,level:"nursery",subjects:am})),primary:[1,2,3,4,5,6].map(a=>({key:`basic-${a}`,name:`Basic ${a}`,code:`B${a}`,level:"primary",subjects:a<=3?an:ao})),jhs:[1,2,3].map(a=>({key:`jhs-${a}`,name:`JHS ${a}`,code:`JHS${a}`,level:"junior_high",subjects:ap.filter(a=>"arabic"!==a)})),shs:[1,2,3].map(a=>({key:`shs-${a}`,name:`SHS ${a}`,code:`SHS${a}`,level:"senior_high",subjects:aq}))},as={nursery:"Nursery",kg:"Kindergarten",primary:"Primary",jhs:"Junior High",shs:"Senior High"},at={"ghana-early-childhood-v1":["nursery","kg"],"ghana-kg-v2":["kg"],"ghana-primary-v1":["primary"],"ghana-kg-primary-v2":["kg","primary"],"ghana-jhs-v1":["jhs"],"ghana-basic-school-v1":["primary","jhs"],"ghana-kg-primary-jhs-v2":["kg","primary","jhs"],"ghana-shs-v1":["shs"],"ghana-jhs-shs-v2":["jhs","shs"],"ghana-full-school-v1":["kg","primary","jhs","shs"]},au=Object.fromEntries(Object.keys(at).map(a=>[a,function(a){let b=at[a],c=b.flatMap(a=>ar[a]),d=[...new Set(c.flatMap(a=>a.subjects))].map(a=>{let[b,c,d]=al[a];return{key:b,name:c,code:d,category:"core"}}),e=[],f=[],g=[],h=[],i=[],j=[],k=[],l=[];for(let a of b){i.push({key:`${a}-department`,name:`${as[a]} Department`,type:"department"}),g.push({key:a,name:`Ghana ${as[a]} Curriculum`,code:`GH-${a.toUpperCase()}`,academicStructureKey:"academic-year",curriculumVersion:"NaCCA-2024-2026"}),h.push({key:`${a}-general`,name:"General",code:"GEN",curriculumKey:a}),[...new Set(ar[a].flatMap(a=>a.subjects))].forEach((b,c)=>e.push({key:`${a}:${b}`,subjectKey:b,curriculumKey:a,type:"core",orderIndex:c+1}));let b=`${a}-standard`;for(let c of(j.push({key:b,name:`${as[a]} Standard Assessment`,totalScore:100,academicStructureKey:"academic-year"}),ak.forEach(c=>k.push({...c,key:`${a}:${c.key}`,assessmentStructureKey:b})),ar[a]))for(let[d,e]of c.subjects.entries()){let g=`${c.key}:${e}`;f.push({key:g,classKey:c.key,subjectKey:e,curriculumSubjectKey:`${a}:${e}`,academicStructureKey:"academic-year",orderIndex:d+1}),l.push({key:g,classSubjectKey:g,assessmentStructureKey:b,gradingSystemKey:"percentage"})}}return{code:a,version:2,name:b.map(a=>as[a]).join(" + "),organizations:i,academicStructures:[{key:"academic-year",name:"Academic Year",level:c[0]?.level??"primary"}],academicPeriods:ai.map(a=>({...a,academicStructureKey:"academic-year"})),classes:c.map(({subjects:a,...b})=>b),subjects:d,curriculums:g,curriculumPathways:h,curriculumSubjects:e,subjectPrerequisites:[],classSubjects:f,gradingSystems:[{key:"percentage",name:"Percentage Grading",type:"percentage",default:!0}],gradeRules:aj.map(a=>({...a,gradingSystemKey:"percentage"})),assessmentStructures:j,assessmentStructureItems:k,assessmentApplicabilities:l}}(a)])),av=["organizations","academicStructures","academicPeriods","classes","subjects","curriculums","curriculumPathways","curriculumSubjects","subjectPrerequisites","classSubjects","gradingStructures","gradeRules","assessmentStructures","assessmentStructureItems","assessmentApplicabilities"],aw={academicStructures:["name"],academicPeriods:["academicStructureId","name"],classes:["code"],subjects:["code"],organizations:["name"],curriculums:["code"],curriculumPathways:["curriculumId","code"],curriculumSubjects:["curriculumId","subjectId"],classSubjects:["classId","subjectId"],gradingStructures:["name"],gradeRules:["gradingStructureId","grade"],assessmentStructures:["name"],assessmentStructureItems:["assessmentStructureId","name"],assessmentApplicabilities:["classSubjectId"],subjectPrerequisites:["curriculumSubjectId","prerequisiteSubjectId"]};async function ax(a,b,c,d){let e={accountId:a.accountId,schoolId:a.schoolId,branchId:a.branchId},f=`${b}:${c.key}`,g=await a.store.findOne(b,{...e,setupSeedKey:f});if(g&&!g.isDeleted)return g;let h=aw[b]||[];if(h.length&&h.every(a=>void 0!==d[a]&&null!==d[a]&&""!==d[a])){let c=await a.store.findOne(b,{...e,...Object.fromEntries(h.map(a=>[a,d[a]]))});if(c&&!c.isDeleted)return c}}async function ay(a,b,c,d){let e,f=await ax(a,b,c,d);if(f){a.ids[b][c.key]=String(f.id),a.counts[b].reused++;let e=Object.fromEntries(Object.entries(d).filter(([a,b])=>void 0!==b&&void 0===f[a]));return Object.keys(e).length&&a.store.update&&await a.store.update(b,String(f.id),e),String(f.id)}let g=await a.store.create(b,{accountId:a.accountId,schoolId:a.schoolId,branchId:a.branchId,...d,...(e=c.key,{setupSource:"seeded",setupTemplateCode:a.templateCode,setupTemplateVersion:a.templateVersion,setupSeedKey:`${b}:${e}`}),active:d.active??!0});return a.ids[b][c.key]=String(g.id),a.counts[b].created++,String(g.id)}function az(a,b,c){if("string"!=typeof c)throw Error(`Missing reference key for ${b}`);let d=a.ids[b][c];if(!d)throw Error(`Unresolved ${b} seed key: ${c}`);return d}async function aA(a,b){for(let c of b)await ay(a,"organizations",c,{...c,key:void 0})}async function aB(a,b){for(let c of b)await ay(a,"academicStructures",c,{...c,key:void 0,name:a.academicYearName,startDate:c.startDate??a.academicYearStart,endDate:c.endDate??a.academicYearEnd})}let aC=a=>a.toISOString().slice(0,10);async function aD(a,b){let c=new Date(`${a.academicYearStart}T12:00:00Z`),d=Math.floor((new Date(`${a.academicYearEnd}T12:00:00Z`).getTime()-c.getTime())/864e5)+1;for(let e of b){let b=Math.max(0,Math.min(2,Number(e.order??1)-1)),f=new Date(c.getTime()+864e5*Math.floor(d*b/3)),g=new Date(c.getTime()+(Math.floor(d*(b+1)/3)-1)*864e5);await ay(a,"academicPeriods",e,{...e,key:void 0,academicStructureId:az(a,"academicStructures",e.academicStructureKey),startDate:e.startDate??aC(f),endDate:e.endDate??aC(g)})}}async function aE(a,b){for(let c of b)await ay(a,"classes",c,{...c,key:void 0})}async function aF(a,b){for(let c of b)await ay(a,"subjects",c,{...c,key:void 0})}async function aG(a,b){for(let c of b)await ay(a,"curriculums",c,{...c,key:void 0,academicStructureId:az(a,"academicStructures",c.academicStructureKey),effectiveFrom:c.effectiveFrom??a.academicYearStart,effectiveTo:c.effectiveTo??a.academicYearEnd})}async function aH(a,b){for(let c of b)await ay(a,"curriculumPathways",c,{...c,key:void 0,curriculumId:az(a,"curriculums",c.curriculumKey)})}async function aI(a,b){for(let c of b)await ay(a,"curriculumSubjects",c,{...c,key:void 0,curriculumId:az(a,"curriculums",c.curriculumKey),subjectId:az(a,"subjects",c.subjectKey),pathwayId:c.pathwayKey?az(a,"curriculumPathways",c.pathwayKey):void 0})}async function aJ(a,b){for(let c of b)await ay(a,"subjectPrerequisites",c,{...c,key:void 0,curriculumSubjectId:az(a,"curriculumSubjects",c.curriculumSubjectKey),prerequisiteSubjectId:az(a,"subjects",c.prerequisiteSubjectKey)})}async function aK(a,b){for(let c of b)await ay(a,"classSubjects",c,{...c,key:void 0,classId:az(a,"classes",c.classKey),subjectId:az(a,"subjects",c.subjectKey),curriculumSubjectId:az(a,"curriculumSubjects",c.curriculumSubjectKey),academicStructureId:az(a,"academicStructures",c.academicStructureKey),orderIndex:c.orderIndex??0,active:!0})}async function aL(a,b){for(let c of b)await ay(a,"gradingStructures",c,{...c,key:void 0})}async function aM(a,b){for(let c of b)await ay(a,"gradeRules",c,{...c,key:void 0,gradingStructureId:az(a,"gradingStructures",c.gradingSystemKey)})}async function aN(a,b){for(let c of b)await ay(a,"assessmentStructures",c,{...c,key:void 0,academicStructureId:az(a,"academicStructures",c.academicStructureKey)})}async function aO(a,b){for(let c of b)await ay(a,"assessmentStructureItems",c,{...c,key:void 0,assessmentStructureId:az(a,"assessmentStructures",c.assessmentStructureKey)})}async function aP(a,b){for(let c of b)await ay(a,"assessmentApplicabilities",c,{...c,key:void 0,classSubjectId:az(a,"classSubjects",c.classSubjectKey),assessmentStructureId:az(a,"assessmentStructures",c.assessmentStructureKey),gradingStructureId:c.gradingSystemKey?az(a,"gradingStructures",c.gradingSystemKey):void 0,active:!0})}async function aQ(a){let b=function(a){let b=au[a];if(!b)throw Error(`Unknown setup template: ${a}`);return b}(a.templateCode),c=a=>new Set(b[a].map(a=>a.key));for(let[a,d,e]of[["academicPeriods","academicStructures","academicStructureKey"],["curriculums","academicStructures","academicStructureKey"],["curriculumPathways","curriculums","curriculumKey"],["curriculumSubjects","curriculums","curriculumKey"],["curriculumSubjects","subjects","subjectKey"],["classSubjects","classes","classKey"],["classSubjects","subjects","subjectKey"],["classSubjects","curriculumSubjects","curriculumSubjectKey"],["classSubjects","academicStructures","academicStructureKey"],["gradeRules","gradingSystems","gradingSystemKey"],["assessmentStructures","academicStructures","academicStructureKey"],["assessmentStructureItems","assessmentStructures","assessmentStructureKey"],["assessmentApplicabilities","classSubjects","classSubjectKey"],["assessmentApplicabilities","assessmentStructures","assessmentStructureKey"]]){let f=c(d);for(let c of b[a])if(!f.has(String(c[e])))throw Error(`Invalid ${b.code}: ${a}.${c.key} missing ${d}.${String(c[e])}`)}for(let a of["academicStructures","academicPeriods","classes","subjects","curriculums","curriculumSubjects","classSubjects","gradingSystems","gradeRules","assessmentStructures","assessmentStructureItems","assessmentApplicabilities"]){let c=b[a];if(new Set(c.map(a=>a.key)).size!==c.length)throw Error(`Duplicate ${a} template keys`)}if(1!==b.academicStructures.length||3!==b.academicPeriods.length)throw Error("Setup must contain exactly one academic year and three terms");let d=function(a,b){let c={},d={};for(let a of av)c[a]={},d[a]={created:0,reused:0};return{...a,templateVersion:b,ids:c,counts:d}}(a,b.version);return await aA(d,b.organizations),await aB(d,b.academicStructures),await aD(d,b.academicPeriods),await aE(d,b.classes),await aF(d,b.subjects),await aG(d,b.curriculums),await aH(d,b.curriculumPathways),await aI(d,b.curriculumSubjects),await aJ(d,b.subjectPrerequisites),await aK(d,b.classSubjects),await aL(d,b.gradingSystems),await aM(d,b.gradeRules),await aN(d,b.assessmentStructures),await aO(d,b.assessmentStructureItems),await aP(d,b.assessmentApplicabilities),{templateCode:d.templateCode,templateVersion:d.templateVersion,counts:d.counts,ids:d.ids}}var aR=c(61602),aS=c(26950);let aT=[{value:"none",label:"No automatic setup",note:"Create only the branch."},{value:"ghana-kg-v2",label:"KG",note:"KG 1–2"},{value:"ghana-primary-v1",label:"Primary",note:"Basic 1–6"},{value:"ghana-jhs-v1",label:"JHS",note:"JHS 1–3"},{value:"ghana-shs-v1",label:"SHS",note:"SHS 1–3"},{value:"ghana-kg-primary-v2",label:"KG + Primary",note:"KG 1–2 and Basic 1–6"},{value:"ghana-basic-school-v1",label:"Primary + JHS",note:"Basic 1–6 and JHS 1–3"},{value:"ghana-kg-primary-jhs-v2",label:"KG + Primary + JHS",note:"KG 1–2, Basic 1–6 and JHS 1–3"},{value:"ghana-jhs-shs-v2",label:"JHS + SHS",note:"JHS 1–3 and SHS 1–3"},{value:"ghana-full-school-v1",label:"KG + Primary + JHS + SHS",note:"KG 1–2, Basic 1–6, JHS 1–3 and SHS 1–3"},{value:"ghana-early-childhood-v1",label:"Nursery + KG",note:"Nursery 1–2 and KG 1–2"}],aU=(e=(d=new Date).getMonth()>=7?d.getFullYear():d.getFullYear()-1,{name:`${e}/${e+1} Academic Year`,start:`${e}-09-01`,end:`${e+1}-08-31`}),aV={schoolId:"",name:"",code:"",phone:"",email:"",address:"",city:"",latitude:"",longitude:"",accuracyMeters:"",locationLabel:"",formattedAddress:"",locationType:"school",locationSource:"manual",locationPrecision:"exact",locationCapturedAt:void 0,mapVisible:!0,locationRestricted:!1,logo:"",logoMediaId:void 0,photo:"",photoMediaId:void 0,bannerImage:"",bannerImageMediaId:void 0,active:!0,setupMode:"ghana-kg-primary-jhs-v2",academicYearName:aU.name,academicYearStart:aU.start,academicYearEnd:aU.end},aW=a=>null==a||""===a?"":String(a).trim(),aX=(a,b)=>String(a??"")===String(b??""),aY=a=>String(a||"").toLowerCase().trim(),aZ=a=>o.db[a],a$={create:async(a,b)=>await (0,p.oJ)(a,b),update:async(a,b,c)=>(0,p.Po)(a,b,c),findOne:async(a,b)=>(await aZ(a)?.toArray?.()||[]).find(a=>!a?.isDeleted&&Object.entries(b).every(([b,c])=>a?.[b]===c))},a_=a=>String(a||"").trim(),a0=a=>a_(a?.name)||"Unnamed branch",a1=a=>a_(a?.name)||"Unnamed school",a2=a=>!1===a?"Inactive":"Active";function a3(a){return!1===a?"red":"green"}let a4=a=>{if(!a)return"Not set";let b="number"==typeof a?a:new Date(a).getTime();if(!Number.isFinite(b))return"Not set";try{return new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",year:"numeric"}).format(new Date(b))}catch{return"Not set"}},a5=(a,b)=>`branches:${a}:${b}`,a6=a=>{let b=String(a||"");if(!(!b||b.startsWith("blob:"))&&!b.startsWith("data:image/"))return b},a7=q.$S.BRANCHES||q.$S.BRANCH||"branches",a8={logo:q.Vq.LOGO||"logo",photo:q.Vq.PHOTO||"photo",bannerImage:q.Vq.BANNER_IMAGE||q.Vq.COVER_PHOTO||"bannerImage"},a9=()=>(0,q.It)(a7);function ba({children:a,tone:b="gray"}){return(0,f.jsx)("span",{className:`ba-chip ${b}`,children:a})}function bb({name:a,photo:b,primary:c}){return(0,f.jsx)("div",{className:"ba-avatar",style:{background:b?`url(${b}) center/cover`:`linear-gradient(135deg, ${c}, rgba(15,23,42,.9))`},children:!b&&String(a||"S").slice(0,1).toUpperCase()})}function bc({icon:a,title:b,text:c}){return(0,f.jsxs)("section",{className:"ba-empty",children:[(0,f.jsx)("div",{className:"ba-empty-icon",children:a}),(0,f.jsx)("h3",{children:b}),(0,f.jsx)("p",{children:c})]})}function bd(){var a;(0,k.useRouter)();let{accountId:b,authenticated:c,loading:d}=(0,l.F)(),{settings:e,loading:h}=(0,m.t)(),{activeMembership:i}=(0,n.A)(),j=e?.primaryColor||"var(--primary-color, #2563eb)",o=(0,g.useMemo)(()=>null,[]),r=(0,g.useMemo)(()=>a_(o?.accountId)||a_(o?.membership?.accountId)||a_(i?.accountId)||a_(b)||a_(e?.accountId)||a_(null)||a_(null),[b,i?.accountId,o?.accountId,o?.membership?.accountId,e?.accountId]),[s,t]=(0,g.useState)(!0),[u,v]=(0,g.useState)(!1),[w,x]=(0,g.useState)([]),[y,z]=(0,g.useState)([]),[A,B]=(0,g.useState)([]),[C,D]=(0,g.useState)([]),[E,F]=(0,g.useState)([]),[G,H]=(0,g.useState)({}),[I,J]=(0,g.useState)("cards"),[K,L]=(0,g.useState)(""),[M,N]=(0,g.useState)("all"),[O,P]=(0,g.useState)(!0),[Q,R]=(0,g.useState)({students:!0,teachers:!0,parents:!0}),[S,T]=(0,g.useState)(!1),[U,V]=(0,g.useState)(!1),[W,X]=(0,g.useState)(null),[Y,Z]=(0,g.useState)(!1),[$,_]=(0,g.useState)(aV),[aa,ab]=(0,g.useState)(null),ac=(0,g.useRef)(a9()),ad=(0,g.useRef)(null),ae=(0,g.useRef)(null),[af,ag]=(0,g.useState)(!1),[ah,ai]=(0,g.useState)("logo"),[aj,ak]=(0,g.useState)("environment"),[al,am]=(0,g.useState)(!1),[an,ao]=(0,g.useState)(!1),ap=a=>(!a.accountId||a_(a.accountId)===r)&&!a.isDeleted,aq=(a,b)=>{ab({tone:a,message:b}),window.setTimeout(()=>ab(a=>a?.message===b?null:a),4200)},ar=()=>!!c&&!!r||(aq("error","Sign in before managing owner branches."),!1),as=()=>{(0,q.IK)(ae.current),ae.current=null,ad.current&&(ad.current.srcObject=null),ag(!1),ao(!1),am(!1)},at=async()=>{if(!ad.current)return void aq("error","Camera preview is not ready yet.");try{ao(!0);let a=await (0,q.ln)(ad.current,{fileName:`${ah}-${Date.now()}.jpg`,mimeType:"image/jpeg",quality:.88,maxWidth:"logo"===ah?900:1440,maxHeight:900});await aJ(ah,a),as()}catch(a){console.error("Failed to capture branch image:",a),aq("error",a?.message||"Failed to capture photo.")}finally{ao(!1)}},au=()=>{Object.values(G).forEach(q.hZ),x([]),z([]),B([]),D([]),F([]),H({})},av=async a=>{let b={};await Promise.all(a.map(async a=>{let c=aW(a.id);if(!c)return;let d=async(a,b)=>{let d=await (0,q.cg)({accountId:r||void 0,ownerTable:a7,ownerId:c,fieldKey:a8[a]});if(d?.id){let a=await (0,q.fW)(String(d.id));if(a)return a}let e=aW(b);if(!e)return"";let f=await aZ("mediaAssets")?.get?.(e);return f&&!f.isDeleted&&!1!==f.active&&f.accountId===r&&f.ownerTable===a7&&f.fieldKey===a8[a]&&aX(f.ownerId,c)?(0,q.fW)(String(e)):""};try{let e=await d("logo",a.logoMediaId);e&&(b[a5(c,"logo")]=e);let f=await d("photo",a.photoMediaId);f&&(b[a5(c,"photo")]=f);let g=await d("bannerImage",a.bannerImageMediaId);g&&(b[a5(c,"bannerImage")]=g)}catch(a){console.error("Failed to resolve branch media:",c,a)}})),H(a=>(Object.values(a).forEach(a=>{Object.values(b).includes(a)||(0,q.hZ)(a)}),b))},aw=async()=>{if(!c||!r){au(),t(!1);return}try{t(!0);let[a,b,c,d,e]=await Promise.all([aZ("branches")?.toArray?.()||[],aZ("schools")?.toArray?.()||[],aZ("students")?.toArray?.()||[],aZ("teachers")?.toArray?.()||[],aZ("parents")?.toArray?.()||[]]),f=b.filter(a=>ap(a)&&!1!==a.active).sort((a,b)=>a1(a).localeCompare(a1(b))),g=new Set(f.map(a=>aW(a.id)).filter(Boolean)),h=a.filter(a=>ap(a)&&(!a.schoolId||g.has(aW(a.schoolId)))).sort((a,b)=>a0(a).localeCompare(a0(b)));z(f),x(h),B(c.filter(a=>ap(a)&&!1!==a.active&&!["withdrawn","deleted","archived","inactive"].includes(aY(a.status)))),D(d.filter(a=>ap(a)&&!1!==a.active&&!["deleted","archived","inactive"].includes(aY(a.status)))),F(e.filter(a=>ap(a)&&!1!==a.active&&!["deleted","archived","inactive"].includes(aY(a.status)))),await av(h)}catch(a){console.error(a),au(),aq("error","Failed to load owner branches.")}finally{t(!1)}},ax=(0,g.useMemo)(()=>new Map(y.map(a=>[aW(a.id),a])),[y]),ay=(0,g.useMemo)(()=>w.map(a=>{let b=aW(a.id),c=ax.get(aW(a.schoolId));return{id:b,row:a,school:c,schoolName:a1(c),logoUrl:G[a5(b,"logo")]||a6(a.logo),photoUrl:G[a5(b,"photo")]||a6(a.photo),bannerImageUrl:G[a5(b,"bannerImage")]||a6(a.bannerImage),active:!a?.isDeleted&&a?.active!==!1&&!["deleted","archived","inactive"].includes(aY(a?.status))}}),[G,w,ax]),az=(0,g.useMemo)(()=>{let a=K.trim().toLowerCase();return ay.filter(b=>{let c=b.row;return("active"!==M||!1!==c.active)&&("inactive"!==M||!1===c.active)&&("no_contact"!==M||!c.phone&&!c.email)&&("no_school"!==M||!c.schoolId)&&(!a||`${c.name||""} ${c.code||""} ${c.phone||""} ${c.email||""} ${c.address||""} ${c.city||""} ${b.schoolName||""}`.toLowerCase().includes(a))}).sort((a,b)=>a0(a.row).localeCompare(a0(b.row)))},[M,K,ay]),aA=(0,g.useMemo)(()=>O?az.reduce((a,b)=>{let c=b.row,d=(0,aS.c2)({...c,id:b.id,photo:b.logoUrl||b.photoUrl||c.logo||c.photo},{entityType:"branch",layerId:"branches",icon:"school",imageUrl:b.logoUrl||b.photoUrl,subtitle:[b.schoolName,c.city,c.address].filter(Boolean).join(" \xb7 "),privacy:{allowRestricted:!0,requireConsent:!1}});return d&&a.push({...d,description:c.phone||c.email||"School branch building",metadata:{...d.metadata||{},branchId:b.id,markerRole:"branch-building",markerColor:"#7c3aed",schoolName:b.schoolName}}),a},[]):[],[O,az]),aB=(0,g.useMemo)(()=>{let a=[],b=(b,c,d,e,f)=>{Q[d]&&b.forEach(b=>{if(!1===b.mapVisible)return;let g=(0,aS.c2)(b,{entityType:c,layerId:d,icon:e,imageUrl:a6(b.photo),subtitle:[b.locationLabel||b.formattedAddress||b.address,a0(w.find(a=>aX(a.id,b.branchId)))].filter(Boolean).join(" \xb7 "),privacy:{allowRestricted:!0,requireConsent:!1}});g&&a.push({...g,metadata:{...g.metadata||{},[`${c}Id`]:aW(b.id),branchId:aW(b.branchId),markerRole:c,markerColor:f}})})};return b(A,"student","students","student","#2563eb"),b(C,"teacher","teachers","teacher","#16a34a"),b(E,"parent","parents","parent","#ea580c"),a},[E,w,A,C,Q]),aC=(0,g.useMemo)(()=>[...aA,...aB],[aA,aB]),aD=(0,g.useMemo)(()=>({total:w.length,schools:y.length,active:w.filter(a=>!1!==a.active&&!a.isDeleted).length,inactive:w.filter(a=>!1===a.active&&!a.isDeleted).length,noContact:w.filter(a=>!a.phone&&!a.email).length,noSchool:w.filter(a=>!a.schoolId).length,showing:az.length}),[y.length,az.length,w]),aE=(0,g.useMemo)(()=>+("all"!==M),[M]),aF=(0,g.useMemo)(()=>bp(ay,a=>a2(a.row.active)),[ay]),aG=(0,g.useMemo)(()=>bp(ay,a=>a.schoolName||"No school"),[ay]),aH=(0,g.useMemo)(()=>bp(ay,a=>a.row.phone||a.row.email?"Contact ready":"No contact"),[ay]),aI=a=>_(b=>({...b,...a})),aJ=async(a,b)=>{if(b&&ar())try{let c=$.id?void 0:ac.current,d=await (0,q.fA)(b,{accountId:r,schoolId:$.schoolId||void 0,branchId:$.id||void 0,ownerTable:a7,ownerId:$.id||void 0,ownerTempKey:c,fieldKey:a8[a],variant:"logo"===a?"avatar":"bannerImage"===a?"cover":"image",replaceExisting:!0});aI({[a]:d.previewUrl,[`${a}MediaId`]:d.assetId});let e="logo"===a?"Branch logo":"photo"===a?"Branch photo":"Branch banner";aq("success",`${e} optimized.`)}catch(a){console.error("Failed to process branch image:",a),aq("error",a?.message||"Failed to process image.")}},aK=async a=>{if(!c||!r)throw Error("Sign in before updating map locations.");let b=String(a.marker.entityType||""),d=a.marker.metadata||{},e="branch"===b?"branches":"student"===b?"students":"teacher"===b?"teachers":"parent"===b?"parents":"",f=aW("branch"===b?d.branchId||a.marker.id:"student"===b?d.studentId||a.marker.id:"teacher"===b?d.teacherId||a.marker.id:d.parentId||a.marker.id);if(!e||!f)throw Error("The selected map item could not be identified.");await (0,p.Po)(e,f,{latitude:a.coordinate.latitude,longitude:a.coordinate.longitude,locationSource:"manual",locationCapturedAt:Date.now(),mapVisible:!0,isDeleted:!1}),aq("success",`${"branch"===b?"Branch":b.charAt(0).toUpperCase()+b.slice(1)} location updated.`),await aw()},aL=a=>{let b=aW(a.id);ac.current=a9(),X(null),_({id:b,name:a.name||"",schoolId:a.schoolId?String(a.schoolId):"",code:a.code||"",phone:a.phone||"",email:a.email||"",address:a.address||"",city:a.city||"",latitude:null==a.latitude?"":String(a.latitude),longitude:null==a.longitude?"":String(a.longitude),accuracyMeters:null==a.accuracyMeters?"":String(a.accuracyMeters),locationLabel:a.locationLabel||"",formattedAddress:a.formattedAddress||"",locationType:a.locationType||"school",locationSource:a.locationSource||"manual",locationPrecision:a.locationPrecision||"exact",locationCapturedAt:a.locationCapturedAt||void 0,mapVisible:!1!==a.mapVisible,locationRestricted:!!a.locationRestricted,logo:G[a5(b,"logo")]||a6(a.logo)||"",logoMediaId:a.logoMediaId?String(a.logoMediaId):void 0,photo:G[a5(b,"photo")]||a6(a.photo)||"",photoMediaId:a.photoMediaId?String(a.photoMediaId):void 0,bannerImage:G[a5(b,"bannerImage")]||a6(a.bannerImage)||"",bannerImageMediaId:a.bannerImageMediaId?String(a.bannerImageMediaId):void 0,active:!1!==a.active,setupMode:"none",academicYearName:aU.name,academicYearStart:aU.start,academicYearEnd:aU.end}),Z(!0)},aM=async a=>{a?.preventDefault();let b=(()=>{if(!c||!r)return"Sign in first.";if(!$.schoolId)return"Select the school this branch belongs to.";if(!y.some(a=>aX(a.id,$.schoolId)))return"Selected school does not belong to this owner account.";if(!$.name.trim())return"Enter branch name.";if(!$.id&&"none"!==$.setupMode){if(!$.academicYearName.trim())return"Enter the academic year name for automatic setup.";if(!$.academicYearStart)return"Select the academic year start date.";if(!$.academicYearEnd)return"Select the academic year end date.";if(new Date($.academicYearEnd).getTime()<=new Date($.academicYearStart).getTime())return"Academic year end date must be after its start date."}let a=""!==$.latitude.trim(),b=""!==$.longitude.trim();if(a!==b)return"Enter both latitude and longitude, or leave both empty.";if(a&&b){let a=Number($.latitude),b=Number($.longitude);if(!Number.isFinite(a)||a<-90||a>90)return"Latitude must be between -90 and 90.";if(!Number.isFinite(b)||b<-180||b>180)return"Longitude must be between -180 and 180."}return w.find(a=>!($.id&&aX(a.id,$.id))&&aX(a.schoolId,$.schoolId)&&a_(a.name).toLowerCase()===a_($.name).toLowerCase()&&!a.isDeleted)?"A branch with this name already exists for the selected school.":$.email.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($.email.trim())?"Enter a valid branch email.":""})();if(b)return void aq("error",b);if(c&&r)try{v(!0);let a=$.id?w.find(a=>aX(a.id,$.id)):void 0,b={accountId:r,name:$.name.trim(),schoolId:$.schoolId,code:$.code.trim()||void 0,phone:$.phone.trim()||void 0,email:$.email.trim()||void 0,address:$.address.trim()||void 0,city:$.city.trim()||void 0,latitude:""===$.latitude.trim()?void 0:Number($.latitude),longitude:""===$.longitude.trim()?void 0:Number($.longitude),accuracyMeters:""===$.accuracyMeters.trim()?void 0:Number($.accuracyMeters),locationLabel:$.locationLabel.trim()||void 0,formattedAddress:$.formattedAddress.trim()||void 0,locationType:$.locationType,locationSource:$.locationSource,locationPrecision:$.locationPrecision,locationCapturedAt:$.latitude.trim()&&$.longitude.trim()?$.locationCapturedAt||Date.now():void 0,mapVisible:$.mapVisible,locationRestricted:$.locationRestricted,logo:a6($.logo),logoMediaId:$.logoMediaId||void 0,photo:a6($.photo),photoMediaId:$.photoMediaId||void 0,bannerImage:a6($.bannerImage),bannerImageMediaId:$.bannerImageMediaId||void 0,active:$.active,isDeleted:!1},c=$.id&&a?await (0,p.Po)("branches",$.id,b):await (0,p.oJ)("branches",b),d=aW(c?.id||$.id);if(!d)throw Error("The branch record was written without a valid permanent ID.");let e=await aZ("branches")?.get?.(d);if(!e||e.isDeleted)throw Error("The branch could not be verified in local storage after saving.");if(a_(e.accountId)!==r)throw Error("The branch was saved under the wrong account workspace.");if(!aX(e.schoolId,$.schoolId))throw Error("The branch was not linked to the selected school.");let f=await aZ("schools")?.get?.($.schoolId);if(!f||f.isDeleted||a_(f.accountId)!==r)throw Error("The selected school is unavailable in this owner account.");await Promise.all([{id:$.logoMediaId,field:"logo"},{id:$.photoMediaId,field:"photo"},{id:$.bannerImageMediaId,field:"bannerImage"}].filter(a=>!!a.id).map(a=>(0,q.yy)({assetId:String(a.id),ownerTable:a7,ownerId:d,ownerTempKey:ac.current,fieldKey:a8[a.field],schoolId:$.schoolId,branchId:d})));let g="";if(!$.id&&"none"!==$.setupMode){let a=await aQ({store:a$,accountId:r,schoolId:$.schoolId,branchId:d,templateCode:$.setupMode,academicYearName:$.academicYearName.trim(),academicYearStart:$.academicYearStart,academicYearEnd:$.academicYearEnd}),b=Object.values(a.counts).reduce((a,b)=>a+b.created,0),c=Object.values(a.counts).reduce((a,b)=>a+b.reused,0);g=` Academic foundation ready: ${b} created${c?`, ${c} reused`:""}.`}ac.current=a9(),Z(!1),await aw(),aq("success",$.id?"Branch changes saved.":`Branch created and saved locally.${g}`)}catch(a){console.error("Failed to save branch:",a),aq("error",a?.message||"Failed to save branch.")}finally{v(!1)}},aN=async a=>{let b=aW(a.row.id);!b||window.confirm(`Delete "${a0(a.row)}"?`)&&(await (0,p.R8)("branches",b),X(null),aq("success","Branch deleted."),await aw())},aO=async(a,b)=>{let c=aW(a.row.id);c&&(await (0,p.Po)("branches",c,{active:b,isDeleted:!1}),X(null),aq("success",b?"Branch activated.":"Branch deactivated."),await aw())};return d||h||s?(0,f.jsx)(be,{primary:j,title:"Opening Branches...",text:"Checking owner account, local branch records, school assignment, and media assets."}):c&&r?(0,f.jsxs)("main",{className:"ba-page",style:{"--ba-primary":j},children:[(0,f.jsx)("style",{children:br}),aa&&(0,f.jsxs)("section",{className:`ba-toast ${aa.tone}`,children:[aa.message,(0,f.jsx)("button",{type:"button",onClick:()=>ab(null),"aria-label":"Close notification",children:"✕"})]}),(0,f.jsxs)("section",{className:"ba-search-card","aria-label":"Branch search and actions",children:[(0,f.jsxs)("label",{className:"ba-search",children:[(0,f.jsx)("span",{children:"⌕"}),(0,f.jsx)("input",{value:K,onChange:a=>L(a.target.value),placeholder:"Search branches...","aria-label":"Search branches"})]}),(0,f.jsx)("button",{type:"button",className:"ba-add-inline",onClick:()=>(()=>{if(!ar())return;ac.current=a9(),X(null);let a=Number.isFinite(void 0)&&Number.isFinite(void 0);_({...aV,schoolId:aW(y[0]?.id),active:"inactive"!==M,latitude:a?String(void 0):"",longitude:a?String(void 0):"",locationSource:"manual",locationCapturedAt:a?Date.now():void 0,mapVisible:!0}),Z(!0)})(),"aria-label":"Add branch",children:"+"}),(0,f.jsxs)("button",{type:"button",className:`ba-filter-button ${aE?"active":""}`,onClick:()=>T(!0),"aria-label":"Open filters",title:"Filters",children:[(0,f.jsx)(bh,{}),aE?(0,f.jsx)("b",{children:aE}):null]}),(0,f.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>V(!0),"aria-label":"More options",children:"⋯"})]}),aE>0&&(0,f.jsx)("section",{className:"ba-filter-chips","aria-label":"Active filters",children:(0,f.jsxs)("button",{type:"button",onClick:()=>N("all"),children:["Filter: ","active"===(a=M)?"Active only":"inactive"===a?"Inactive only":"no_contact"===a?"Missing contact":"no_school"===a?"No school":"All branches"," \xd7"]})}),"summary"===I&&(0,f.jsxs)("section",{className:"ba-analysis-grid",children:[(0,f.jsx)(bq,{title:"Branches by Status",rows:aF,total:aD.total}),(0,f.jsx)(bq,{title:"School Assignment",rows:aG,total:aD.total}),(0,f.jsx)(bq,{title:"Contact Readiness",rows:aH,total:aD.total}),(0,f.jsxs)("article",{className:"ba-analysis ba-current-filter",children:[(0,f.jsx)("span",{children:"Current Filter"}),(0,f.jsx)("strong",{children:aD.showing}),(0,f.jsxs)("p",{children:[aD.schools," active school(s) available for ",aD.total," owner branch record(s)."]})]})]}),"map"===I&&(0,f.jsxs)("section",{className:"branches-map-shell",children:[(0,f.jsxs)("div",{className:"branches-map-toolbar","aria-label":"Map layers",children:[(0,f.jsx)(bg,{label:"Branch",tone:"branch",checked:O,onChange:P}),(0,f.jsx)(bg,{label:"Student",tone:"student",checked:Q.students,onChange:a=>R(b=>({...b,students:a}))}),(0,f.jsx)(bg,{label:"Teacher",tone:"teacher",checked:Q.teachers,onChange:a=>R(b=>({...b,teachers:a}))}),(0,f.jsx)(bg,{label:"Parent",tone:"parent",checked:Q.parents,onChange:a=>R(b=>({...b,parents:a}))})]}),(0,f.jsx)(aR.V,{markers:aC,height:"min(72vh, 760px)",searchable:!1,filterable:!1,showLegend:!1,cluster:!0,fitMarkers:!0,allowLocationEditing:!0,onLocationUpdate:aK,emptyView:(0,f.jsxs)("div",{className:"branches-map-empty",children:[(0,f.jsx)("span",{"aria-hidden":"true",children:"⌖"}),(0,f.jsx)("strong",{children:"No mapped branches or people"}),(0,f.jsx)("small",{children:"Save branch coordinates in the branch form, or save coordinates on student, teacher and parent records."})]})})]}),"table"===I&&(0,f.jsx)(bl,{rows:az,openEdit:aL,remove:aN,setActive:aO}),"cards"===I&&(0,f.jsxs)("section",{className:"ba-list",children:[az.map(a=>(0,f.jsx)(bf,{item:a,primary:j,onOpen:()=>X(a)},String(a.id))),!az.length&&(0,f.jsx)(bc,{icon:"\uD83C\uDFDB️",title:"No branches found",text:"Add owner branch records, connect logo and banner images, and assign each branch to a school."})]}),S&&(0,f.jsx)(bi,{filterStatus:M,setFilterStatus:N,clearFilters:()=>N("all"),onClose:()=>T(!1)}),U&&(0,f.jsx)(bj,{viewMode:I,setViewMode:a=>{J(a),V(!1)},onRefresh:async()=>{V(!1),await aw()},onClose:()=>V(!1)}),W&&(0,f.jsx)(bk,{item:W,openEdit:aL,remove:aN,setActive:aO,onClose:()=>X(null)}),Y&&(0,f.jsx)(bm,{form:$,saving:u,schools:y,setModalOpen:Z,updateForm:aI,handleImageUpload:aJ,openCameraForField:a=>{if(ar()){if(!(0,q.fP)())return void aq("error",(0,q.f5)());ai(a),ag(!0)}},save:aM}),af&&(0,f.jsx)(bo,{field:ah,videoRef:ad,starting:al,capturing:an,facing:aj,setFacing:ak,capture:at,close:as,entityLabel:"Branch"})]}):(0,f.jsx)(be,{primary:j,title:"Redirecting to login...",text:"You must sign in before managing owner branches."})}function be({primary:a,title:b,text:c}){return(0,f.jsxs)("main",{className:"ba-page",style:{"--ba-primary":a},children:[(0,f.jsx)("style",{children:br}),(0,f.jsxs)("section",{className:"ba-state",children:[(0,f.jsx)("div",{className:"ba-spinner"}),(0,f.jsx)("h2",{children:b}),(0,f.jsx)("p",{children:c})]})]})}function bf({item:a,primary:b,onOpen:c}){let d=a.row,e=a.logoUrl||a.photoUrl;return(0,f.jsxs)("button",{type:"button",className:"student-row",onClick:c,children:[(0,f.jsx)(bb,{name:a0(d),photo:e,primary:b}),(0,f.jsxs)("span",{className:"student-main",children:[(0,f.jsx)("strong",{children:a0(d)}),(0,f.jsxs)("small",{children:[a.schoolName,d.code?` \xb7 ${d.code}`:""]}),(0,f.jsx)("em",{children:d.phone||d.email||d.address||"No contact details yet"})]}),(0,f.jsxs)("span",{className:"student-side",children:[(0,f.jsx)("span",{className:`status-dot-mini ${a3(d.active)}`,title:a2(d.active),"aria-label":a2(d.active)}),(0,f.jsx)("i",{children:"⋯"})]})]})}function bg({label:a,tone:b,checked:c,onChange:d}){return(0,f.jsxs)("button",{type:"button",className:`branches-map-toggle ${b} ${c?"active":""}`,"aria-pressed":c,"aria-label":`${c?"Hide":"Show"} ${a.toLowerCase()} locations`,onClick:()=>d(!c),children:[(0,f.jsx)("i",{"aria-hidden":"true"}),(0,f.jsx)("span",{children:a})]})}function bh(){return(0,f.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,f.jsx)("path",{d:"M4 7h9"}),(0,f.jsx)("path",{d:"M17 7h3"}),(0,f.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,f.jsx)("path",{d:"M4 17h3"}),(0,f.jsx)("path",{d:"M11 17h9"}),(0,f.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function bi({filterStatus:a,setFilterStatus:b,clearFilters:c,onClose:d}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Filters"}),(0,f.jsx)("p",{children:"Keep the owner branch register compact and focused."})]}),(0,f.jsx)("button",{type:"button",onClick:d,"aria-label":"Close filters",children:"✕"})]}),(0,f.jsx)("div",{className:"ba-menu-list",children:[{value:"all",label:"All branches",note:"Show every owner branch record"},{value:"active",label:"Active only",note:"Branches currently enabled"},{value:"inactive",label:"Inactive only",note:"Branches disabled for daily use"},{value:"no_contact",label:"Missing contact",note:"Branches without phone or email"},{value:"no_school",label:"No school",note:"Branches not assigned to a school"}].map(c=>(0,f.jsxs)("button",{type:"button",className:a===c.value?"active":"",onClick:()=>b(c.value),children:[(0,f.jsx)("span",{children:a===c.value?"✓":"⌁"}),(0,f.jsx)("b",{children:c.label}),(0,f.jsx)("small",{children:c.note})]},c.value))}),(0,f.jsxs)("div",{className:"ba-sheet-actions",children:[(0,f.jsx)("button",{type:"button",onClick:c,children:"Clear"}),(0,f.jsx)("button",{type:"button",className:"primary",onClick:d,children:"Apply"})]})]})})}function bj({viewMode:a,setViewMode:b,onRefresh:c,onClose:d}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"More"}),(0,f.jsx)("p",{children:"Switch views or reload the local owner branch register."})]}),(0,f.jsx)("button",{type:"button",onClick:d,"aria-label":"Close more options",children:"✕"})]}),(0,f.jsxs)("div",{className:"ba-menu-list",children:[(0,f.jsxs)("button",{type:"button",className:"cards"===a?"active":"",onClick:()=>b("cards"),children:[(0,f.jsx)("span",{children:"▦"}),(0,f.jsx)("b",{children:"Cards"}),(0,f.jsx)("small",{children:"Compact branch register"})]}),(0,f.jsxs)("button",{type:"button",className:"table"===a?"active":"",onClick:()=>b("table"),children:[(0,f.jsx)("span",{children:"☷"}),(0,f.jsx)("b",{children:"Table view"}),(0,f.jsx)("small",{children:"Dense laptop-friendly owner records"})]}),(0,f.jsxs)("button",{type:"button",className:"map"===a?"active":"",onClick:()=>b("map"),children:[(0,f.jsx)("span",{children:"⌖"}),(0,f.jsx)("b",{children:"Proximity map"}),(0,f.jsx)("small",{children:"Branches, students, teachers and parents"})]}),(0,f.jsxs)("button",{type:"button",className:"summary"===a?"active":"",onClick:()=>b("summary"),children:[(0,f.jsx)("span",{children:"◔"}),(0,f.jsx)("b",{children:"Analytics"}),(0,f.jsx)("small",{children:"Status, contact and school assignment"})]}),(0,f.jsxs)("button",{type:"button",onClick:c,children:[(0,f.jsx)("span",{children:"↻"}),(0,f.jsx)("b",{children:"Refresh"}),(0,f.jsx)("small",{children:"Reload local branches and schools"})]})]})]})})}function bk({item:a,openEdit:b,remove:c,setActive:d,onClose:e}){let g=a.row;return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-profile",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:a0(g)}),(0,f.jsxs)("p",{children:[a.schoolName," \xb7 ",a2(g.active)]})]}),(0,f.jsx)("button",{type:"button",onClick:e,"aria-label":"Close branch actions",children:"✕"})]}),(0,f.jsxs)("div",{className:"student-detail-strip",children:[(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Contact"}),g.phone||g.email||"Not set"]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"School"}),a.schoolName||"Not set"]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Updated"}),a4(g.updatedAt||g.createdAt)]})]}),(0,f.jsxs)("div",{className:"ba-menu-list",children:[(0,f.jsxs)("button",{type:"button",onClick:()=>b(a.row),children:[(0,f.jsx)("span",{children:"✎"}),(0,f.jsx)("b",{children:"Edit branch"}),(0,f.jsx)("small",{children:"Update profile, contact, logo and banner"})]}),!1===g.active?(0,f.jsxs)("button",{type:"button",onClick:()=>d(a,!0),children:[(0,f.jsx)("span",{children:"✓"}),(0,f.jsx)("b",{children:"Activate"}),(0,f.jsx)("small",{children:"Enable this branch for account operations"})]}):(0,f.jsxs)("button",{type:"button",onClick:()=>d(a,!1),children:[(0,f.jsx)("span",{children:"⏸"}),(0,f.jsx)("b",{children:"Deactivate"}),(0,f.jsx)("small",{children:"Keep the record but disable daily use"})]}),(0,f.jsxs)("button",{type:"button",className:"danger",onClick:()=>c(a),children:[(0,f.jsx)("span",{children:"⌫"}),(0,f.jsx)("b",{children:"Delete"}),(0,f.jsx)("small",{children:"Soft delete this branch locally"})]})]})]})})}function bl({rows:a,openEdit:b,remove:c,setActive:d}){return(0,f.jsx)("section",{className:"ba-table-card",children:(0,f.jsxs)("div",{className:"ba-table-scroll",children:[(0,f.jsxs)("table",{children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsxs)("th",{children:["Branches (",a.length,")"]}),(0,f.jsx)("th",{children:"Contact"}),(0,f.jsx)("th",{children:"School"}),(0,f.jsx)("th",{children:"City"}),(0,f.jsx)("th",{children:"Status"}),(0,f.jsx)("th",{children:"Updated"}),(0,f.jsx)("th",{children:"Actions"})]})}),(0,f.jsx)("tbody",{children:a.map(a=>{let e=a.row;return(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{children:[(0,f.jsx)("strong",{children:a0(e)}),(0,f.jsx)("span",{children:e.code||e.address||"No code/address"})]}),(0,f.jsx)("td",{children:e.phone||e.email||"—"}),(0,f.jsx)("td",{children:a.schoolName||"—"}),(0,f.jsx)("td",{children:e.city||"—"}),(0,f.jsx)("td",{children:(0,f.jsx)(ba,{tone:a3(e.active),children:a2(e.active)})}),(0,f.jsx)("td",{children:a4(e.updatedAt||e.createdAt)}),(0,f.jsx)("td",{children:(0,f.jsxs)("div",{className:"ba-table-actions",children:[(0,f.jsx)("button",{type:"button",onClick:()=>b(a.row),children:"Edit"}),(0,f.jsxs)("button",{type:"button",onClick:()=>d(a,!1===e.active),children:[" ",!1===e.active?"Activate":"Deactivate"]}),(0,f.jsx)("button",{type:"button",className:"ba-delete",onClick:()=>c(a),children:"Delete"})]})})]},String(a.id))})})]}),!a.length&&(0,f.jsx)("div",{className:"ba-empty-table",children:"No branch matches your filters."})]})})}function bm({form:a,saving:b,schools:c,setModalOpen:d,updateForm:e,handleImageUpload:g,openCameraForField:h,save:i}){return(0,f.jsx)("div",{className:"ba-modal-backdrop",children:(0,f.jsxs)("form",{className:"ba-modal",onSubmit:i,children:[(0,f.jsxs)("div",{className:"ba-modal-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:a.id?"Edit Branch":"Add Branch"}),(0,f.jsx)("p",{children:"Branch is saved locally first and syncs through your normal sync pipeline."})]}),(0,f.jsx)("button",{type:"button",onClick:()=>d(!1),"aria-label":"Close branch form",children:"✕"})]}),(0,f.jsxs)("section",{className:"ba-form-section",children:[(0,f.jsx)("h3",{children:"Branch Profile"}),(0,f.jsxs)("div",{className:"ba-form",children:[(0,f.jsxs)("label",{className:"wide",children:[(0,f.jsx)("span",{children:"School"}),(0,f.jsxs)("select",{value:a.schoolId,onChange:a=>e({schoolId:a.target.value}),children:[(0,f.jsx)("option",{value:"",children:"Select school"}),c.map(a=>(0,f.jsx)("option",{value:String(a.id),children:a1(a)},String(a.id)))]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Branch Name"}),(0,f.jsx)("input",{value:a.name,onChange:a=>e({name:a.target.value}),placeholder:"Branch name"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Branch Code"}),(0,f.jsx)("input",{value:a.code,onChange:a=>e({code:a.target.value}),placeholder:"Code"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Phone"}),(0,f.jsx)("input",{value:a.phone,onChange:a=>e({phone:a.target.value}),placeholder:"Phone"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Email"}),(0,f.jsx)("input",{value:a.email,onChange:a=>e({email:a.target.value}),placeholder:"Email"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"City"}),(0,f.jsx)("input",{value:a.city,onChange:a=>e({city:a.target.value}),placeholder:"City"})]}),(0,f.jsxs)("label",{className:"wide",children:[(0,f.jsx)("span",{children:"Address"}),(0,f.jsx)("textarea",{value:a.address,onChange:a=>e({address:a.target.value}),placeholder:"Branch address"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Status"}),(0,f.jsxs)("select",{value:a.active?"active":"inactive",onChange:a=>e({active:"active"===a.target.value}),children:[(0,f.jsx)("option",{value:"active",children:"Active"}),(0,f.jsx)("option",{value:"inactive",children:"Inactive"})]})]})]})]}),!a.id&&(0,f.jsxs)("section",{className:"ba-form-section",children:[(0,f.jsx)("h3",{children:"Foundational Setup"}),(0,f.jsx)("p",{className:"ba-section-note",children:"Choose the kind of school operated by this branch. Eleeveon will create the foundational academic records after the branch receives its permanent ID."}),(0,f.jsxs)("div",{className:"ba-form",children:[(0,f.jsxs)("label",{className:"wide",children:[(0,f.jsx)("span",{children:"School Setup Template"}),(0,f.jsx)("select",{value:a.setupMode,onChange:a=>e({setupMode:a.target.value}),children:aT.map(a=>(0,f.jsx)("option",{value:a.value,children:a.label},a.value))}),(0,f.jsx)("small",{className:"ba-media-hint",children:aT.find(b=>b.value===a.setupMode)?.note})]}),"none"!==a.setupMode&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Academic Year"}),(0,f.jsx)("input",{value:a.academicYearName,onChange:a=>e({academicYearName:a.target.value}),placeholder:"2026/2027"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Year Starts"}),(0,f.jsx)("input",{type:"date",value:a.academicYearStart,onChange:a=>e({academicYearStart:a.target.value})})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Year Ends"}),(0,f.jsx)("input",{type:"date",value:a.academicYearEnd,onChange:a=>e({academicYearEnd:a.target.value})})]}),(0,f.jsxs)("div",{className:"wide ba-setup-preview",children:[(0,f.jsx)("strong",{children:"Records created automatically"}),(0,f.jsx)("span",{children:"Organizations \xb7 Academic structures \xb7 Academic periods \xb7 Curriculum \xb7 Pathways \xb7 Subjects \xb7 Curriculum subjects \xb7 Classes \xb7 Class subjects \xb7 Prerequisites \xb7 Assessment structures and items \xb7 Grading systems and rules \xb7 Assessment applicability"})]})]})]})]}),(0,f.jsxs)("section",{className:"ba-form-section",children:[(0,f.jsx)("h3",{children:"Branch Location"}),(0,f.jsxs)("div",{className:"ba-form",children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Location Label"}),(0,f.jsx)("input",{value:a.locationLabel,onChange:a=>e({locationLabel:a.target.value}),placeholder:"Main campus building"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Location Type"}),(0,f.jsxs)("select",{value:a.locationType,onChange:a=>e({locationType:a.target.value}),children:[(0,f.jsx)("option",{value:"school",children:"School building"}),(0,f.jsx)("option",{value:"campus",children:"Campus"}),(0,f.jsx)("option",{value:"office",children:"Office"}),(0,f.jsx)("option",{value:"other",children:"Other"})]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Latitude"}),(0,f.jsx)("input",{inputMode:"decimal",value:a.latitude,onChange:a=>e({latitude:a.target.value}),placeholder:"5.6037"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Longitude"}),(0,f.jsx)("input",{inputMode:"decimal",value:a.longitude,onChange:a=>e({longitude:a.target.value}),placeholder:"-0.1870"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Accuracy (metres)"}),(0,f.jsx)("input",{inputMode:"decimal",value:a.accuracyMeters,onChange:a=>e({accuracyMeters:a.target.value}),placeholder:"Optional"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Precision"}),(0,f.jsxs)("select",{value:a.locationPrecision,onChange:a=>e({locationPrecision:a.target.value}),children:[(0,f.jsx)("option",{value:"exact",children:"Exact"}),(0,f.jsx)("option",{value:"approximate",children:"Approximate"}),(0,f.jsx)("option",{value:"area_only",children:"Area only"})]})]}),(0,f.jsxs)("label",{className:"wide",children:[(0,f.jsx)("span",{children:"Formatted Address"}),(0,f.jsx)("textarea",{value:a.formattedAddress,onChange:a=>e({formattedAddress:a.target.value}),placeholder:"Map or standardized address"})]}),(0,f.jsxs)("label",{className:"ba-check",children:[(0,f.jsx)("input",{type:"checkbox",checked:a.mapVisible,onChange:a=>e({mapVisible:a.target.checked})}),(0,f.jsx)("span",{children:"Show branch building on maps"})]}),(0,f.jsxs)("label",{className:"ba-check",children:[(0,f.jsx)("input",{type:"checkbox",checked:a.locationRestricted,onChange:a=>e({locationRestricted:a.target.checked})}),(0,f.jsx)("span",{children:"Restrict exact branch location"})]})]})]}),(0,f.jsxs)("section",{className:"ba-form-section",children:[(0,f.jsx)("h3",{children:"Images"}),(0,f.jsxs)("div",{className:"ba-form",children:[(0,f.jsx)(bn,{title:"Logo",field:"logo",preview:a.logo,handleImageUpload:g,openCameraForField:h}),(0,f.jsx)(bn,{title:"Branch Photo",field:"photo",preview:a.photo,handleImageUpload:g,openCameraForField:h}),(0,f.jsx)(bn,{title:"Banner Image",field:"bannerImage",preview:a.bannerImage,banner:!0,handleImageUpload:g,openCameraForField:h})]})]}),(0,f.jsxs)("div",{className:"ba-modal-actions",children:[(0,f.jsx)("button",{type:"button",onClick:()=>d(!1),children:"Cancel"}),(0,f.jsx)("button",{type:"submit",disabled:b,children:b?a.id?"Saving...":"none"===a.setupMode?"Creating...":"Creating & Setting Up...":a.id?"Save Changes":"none"===a.setupMode?"Add Branch":"Create & Set Up Branch"})]})]})})}function bn({title:a,field:b,preview:c,banner:d=!1,handleImageUpload:e,openCameraForField:g}){return(0,f.jsxs)("label",{className:d?"wide":void 0,children:[(0,f.jsx)("span",{children:a}),(0,f.jsxs)("div",{className:"ba-media-actions",children:[(0,f.jsxs)("label",{className:"ba-media-button",children:["Upload",(0,f.jsx)("input",{type:"file",accept:"image/*",onChange:a=>e(b,a.target.files?.[0]),hidden:!0})]}),(0,f.jsx)("button",{type:"button",className:"ba-media-button secondary",onClick:()=>g(b),children:"Take Photo"})]}),(0,f.jsx)("small",{className:"ba-media-hint",children:"Upload from files or take a camera photo. It is optimized and saved as a media asset."}),c&&(0,f.jsx)("img",{src:c,alt:`${a} preview`,className:d?"ba-preview-banner":"ba-preview-photo"})]})}function bo({field:a,videoRef:b,starting:c,capturing:d,facing:e,setFacing:g,capture:h,close:i,entityLabel:j}){let k="logo"===a?`Take ${j} Logo`:"bannerImage"===a?`Take ${j} Banner`:`Take ${j} Photo`;return(0,f.jsx)("div",{className:"ba-modal-backdrop camera-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-camera-modal",children:[(0,f.jsxs)("div",{className:"ba-modal-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:k}),(0,f.jsx)("p",{children:"Use the live camera preview, then capture. The image will be compressed and saved as a media asset."})]}),(0,f.jsx)("button",{type:"button",onClick:i,"aria-label":"Close camera",children:"✕"})]}),(0,f.jsxs)("div",{className:"ba-camera-preview",children:[(0,f.jsx)("video",{ref:b,autoPlay:!0,muted:!0,playsInline:!0}),c&&(0,f.jsx)("span",{className:"ba-camera-loading",children:"Opening camera..."})]}),(0,f.jsxs)("div",{className:"ba-camera-actions",children:[(0,f.jsx)("button",{type:"button",className:"ba-camera-secondary",onClick:()=>g("environment"===e?"user":"environment"),disabled:c||d,children:"Switch Camera"}),(0,f.jsx)("button",{type:"button",className:"ba-camera-secondary",onClick:i,disabled:d,children:"Cancel"}),(0,f.jsx)("button",{type:"button",className:"ba-camera-primary",onClick:h,disabled:c||d,children:d?"Capturing...":"Capture Photo"})]})]})})}function bp(a,b){let c=new Map;return a.forEach(a=>{let d=b(a)||"Unknown";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value||a.label.localeCompare(b.label))}function bq({title:a,rows:b,total:c}){return(0,f.jsxs)("article",{className:"ba-analysis",children:[(0,f.jsx)("span",{children:a}),(0,f.jsx)("strong",{children:c}),(0,f.jsx)("div",{className:"ba-analysis-list",children:b.map(a=>{let b=c?Math.round(a.value/c*100):0;return(0,f.jsxs)("section",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:a.label}),(0,f.jsx)("small",{children:a.value})]}),(0,f.jsx)("div",{className:"ba-progress",children:(0,f.jsx)("i",{style:{width:`${b}%`}})})]},a.label)})})]})}let br=`
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
.ba-page input, .ba-page select, .ba-page textarea {
  width: 100%; min-height: 44px; border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10)));
  border-radius: 16px; padding: 0 12px; background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #111827)); outline: none; font-weight: 750;
}
.ba-page input:focus, .ba-page select:focus, .ba-page textarea:focus {
  border-color: color-mix(in srgb, var(--ba-primary) 52%, var(--border, rgba(0,0,0,.10)));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--ba-primary) 12%, transparent);
}
.ba-state, .ba-search-card, .ba-card, .ba-table-card, .ba-analysis, .ba-empty, .ba-sheet, .ba-modal, .student-row {
  background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); box-shadow: 0 12px 28px rgba(15,23,42,.045);
}
.ba-state { min-height: min(420px, calc(100dvh - 32px)); width: min(520px, 100%); margin: 0 auto; display: grid; place-items: center; align-content: center; gap: 10px; padding: 22px; border-radius: 28px; text-align: center; }
.ba-spinner { width: 38px; height: 38px; border-radius: 999px; border: 4px solid color-mix(in srgb, var(--ba-primary) 18%, transparent); border-top-color: var(--ba-primary); animation: spin .8s linear infinite; }
.ba-state h2 { margin: 0; font-size: 22px; font-weight: 1000; letter-spacing: -.04em; }
.ba-state p { max-width: 34rem; margin: 0; color: var(--muted, #64748b); font-size: 13px; line-height: 1.6; }
.ba-toast { position: sticky; top: 8px; z-index: 40; display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; padding: 12px 14px; border-radius: 18px; font-size: 13px; font-weight: 850; box-shadow: 0 18px 40px rgba(15,23,42,.12); }
.ba-toast.success { background: rgba(34,197,94,.14); color: #166534; } .ba-toast.error { background: rgba(239,68,68,.12); color: #991b1b; } .ba-toast.info { background: rgba(59,130,246,.13); color: #1d4ed8; }
.ba-toast button { border: 0; background: transparent; color: currentColor; font-weight: 1000; cursor: pointer; }
.ba-icon-button, .ba-filter-button, .ba-add-inline { width: 42px; height: 42px; border: 1px solid var(--border, rgba(0,0,0,.10)); border-radius: 999px; display: grid; place-items: center; background: var(--card-bg, var(--surface,#fff)); color: var(--text,#111827); font-size: 18px; font-weight: 1000; cursor: pointer; box-shadow: 0 10px 22px rgba(15,23,42,.045); }
.ba-add-inline { flex: 0 0 42px; border-color: var(--ba-primary); background: var(--ba-primary); color: #fff; font-size: 25px; line-height: 1; box-shadow: 0 12px 28px color-mix(in srgb, var(--ba-primary) 22%, transparent); }
.ba-search-card { display: grid; grid-template-columns: minmax(0, 1fr) auto auto auto; gap: 8px; align-items: center; margin-top: 2px; padding: 8px; border-radius: 24px; }
.ba-search { min-width: 0; display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 8px; min-height: 44px; padding: 0 11px; border-radius: 18px; background: color-mix(in srgb, var(--muted,#64748b) 7%, transparent); }
.ba-search span { color: var(--muted,#64748b); font-size: 17px; font-weight: 1000; }
.ba-search input { min-height: 42px; border: 0; padding: 0; border-radius: 0; background: transparent; box-shadow: none; font-size: 14px; }
.ba-slider-icon { width: 21px; height: 21px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
.ba-filter-button { position: relative; background: color-mix(in srgb, var(--ba-primary) 8%, var(--card-bg,#fff)); color: var(--ba-primary); }
.ba-filter-button.active { background: var(--ba-primary); color: #fff; border-color: var(--ba-primary); }
.ba-filter-button b { position: absolute; top: -4px; right: -4px; min-width: 19px; height: 19px; display: grid; place-items: center; border-radius: 999px; background: #ef4444; color: #fff; font-size: 10px; border: 2px solid var(--card-bg,#fff); }
.ba-filter-chips { display: flex; gap: 7px; overflow-x: auto; padding: 8px 1px 0; scrollbar-width: none; -ms-overflow-style: none; }
.ba-filter-chips::-webkit-scrollbar { display: none; }
.ba-filter-chips button { flex: 0 0 auto; min-height: 31px; border: 0; border-radius: 999px; padding: 0 10px; background: color-mix(in srgb, var(--ba-primary) 11%, transparent); color: var(--ba-primary); font-size: 11px; font-weight: 950; white-space: nowrap; cursor: pointer; }
.ba-list { display: grid; gap: 7px; margin-top: 10px; }
.student-row { width: 100%; display: grid; grid-template-columns: auto minmax(0,1fr) auto; align-items: center; gap: 10px; padding: 10px; border-radius: 22px; text-align: left; cursor: pointer; transition: transform .16s var(--ease), box-shadow .16s var(--ease), border-color .16s var(--ease); }
.student-row:hover { transform: translateY(-1px); border-color: color-mix(in srgb, var(--ba-primary) 24%, var(--border, rgba(0,0,0,.10))); box-shadow: 0 16px 34px rgba(15,23,42,.07); }
.ba-avatar { width: 48px; height: 48px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 18px; color: #fff; font-size: 17px; font-weight: 1000; box-shadow: 0 12px 24px rgba(15,23,42,.12); }
.student-main, .student-main strong, .student-main small, .student-main em { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.student-main strong { color: var(--text,#111827); font-size: 14px; font-weight: 1000; letter-spacing: -.02em; }
.student-main small { margin-top: 3px; color: var(--muted,#64748b); font-size: 12px; font-weight: 850; font-style: normal; }
.student-main em { margin-top: 3px; color: color-mix(in srgb, var(--muted,#64748b) 86%, var(--text,#111827)); font-size: 11px; font-weight: 750; font-style: normal; }
.student-side { display: grid; justify-items: end; gap: 6px; flex: 0 0 auto; }
.student-side i { color: var(--muted,#64748b); font-style: normal; font-size: 18px; font-weight: 1000; line-height: 1; }
.ba-chip { max-width: 100%; display: inline-flex; align-items: center; min-height: 24px; padding: 3px 8px; border-radius: 999px; font-size: 10px; font-weight: 950; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize; }
.ba-chip.green { background: rgba(34,197,94,.12); color: #16a34a; } .ba-chip.red { background: rgba(239,68,68,.12); color: #dc2626; } .ba-chip.blue { background: rgba(59,130,246,.12); color: #2563eb; } .ba-chip.gray { background: color-mix(in srgb,var(--muted,#64748b) 14%,transparent); color: var(--muted,#64748b); } .ba-chip.orange { background: rgba(245,158,11,.14); color: #b45309; } .ba-chip.purple { background: rgba(147,51,234,.12); color: #7e22ce; }
.status-dot-mini { width: 10px; height: 10px; display: inline-block; border-radius: 999px; background: var(--muted,#64748b); box-shadow: 0 0 0 4px color-mix(in srgb, currentColor 10%, transparent); }
.status-dot-mini.green { background: #22c55e; } .status-dot-mini.red { background: #ef4444; } .status-dot-mini.blue { background: #3b82f6; } .status-dot-mini.orange { background: #f59e0b; } .status-dot-mini.gray { background: var(--muted,#64748b); }
.ba-sheet-backdrop, .ba-modal-backdrop { position: fixed; inset: 0; z-index: 80; display: grid; place-items: end center; padding: 10px; background: rgba(15,23,42,.50); backdrop-filter: blur(12px); }
.ba-sheet { width: min(760px, 100%); max-height: min(88dvh, 760px); overflow-y: auto; padding: 14px; border-radius: 28px 28px 22px 22px; box-shadow: 0 30px 90px rgba(15,23,42,.32); animation: sheetIn .18s var(--ease); }
.ba-sheet.small { width: min(520px, 100%); }
@keyframes sheetIn { from { transform: translateY(16px); opacity: .7; } to { transform: translateY(0); opacity: 1; } }
.ba-sheet-head, .ba-sheet-profile, .ba-modal-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding-bottom: 12px; }
.ba-sheet-head h2, .ba-sheet-profile h2, .ba-modal-head h2 { margin: 0; color: var(--text,#111827); font-size: 21px; font-weight: 1000; letter-spacing: -.05em; }
.ba-sheet-head p, .ba-sheet-profile p, .ba-modal-head p { margin: 5px 0 0; color: var(--muted,#64748b); font-size: 12px; line-height: 1.5; font-weight: 750; }
.ba-sheet-head button, .ba-sheet-profile button, .ba-modal-head button { width: 38px; height: 38px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; background: var(--surface,#fff); color: var(--text,#111827); font-weight: 1000; cursor: pointer; flex: 0 0 auto; }
.ba-sheet-actions, .ba-modal-actions { position: sticky; bottom: -14px; display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 8px; margin-top: 14px; padding: 12px 0 2px; background: linear-gradient(to top, var(--card-bg,var(--surface,#fff)) 70%, transparent); }
.ba-sheet-actions button, .ba-modal-actions button { min-height: 42px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; padding: 0 16px; background: color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff)); color: var(--text,#111827); font-size: 12px; font-weight: 950; cursor: pointer; }
.ba-sheet-actions button.primary, .ba-modal-actions button:last-child { border-color: var(--ba-primary); background: var(--ba-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent); }
.ba-modal-actions button:disabled { opacity: .65; cursor: not-allowed; }
.ba-menu-list { display: grid; gap: 8px; }
.ba-menu-list button { width: 100%; display: grid; grid-template-columns: 42px minmax(0,1fr); column-gap: 10px; align-items: center; min-height: 58px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 18px; padding: 9px; background: var(--surface,#fff); color: var(--text,#111827); text-align: left; cursor: pointer; }
.ba-menu-list button span { grid-row: span 2; width: 42px; height: 42px; display: grid; place-items: center; border-radius: 16px; background: color-mix(in srgb, var(--ba-primary) 10%, transparent); color: var(--ba-primary); font-weight: 1000; }
.ba-menu-list button b, .ba-menu-list button small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ba-menu-list button b { font-size: 13px; font-weight: 1000; } .ba-menu-list button small { margin-top: 2px; color: var(--muted,#64748b); font-size: 11px; font-weight: 750; }
.ba-menu-list button.active { border-color: color-mix(in srgb, var(--ba-primary) 34%, var(--border,rgba(0,0,0,.10))); background: color-mix(in srgb, var(--ba-primary) 8%, var(--surface,#fff)); }
.ba-menu-list button.danger span { background: color-mix(in srgb, #dc2626 10%, transparent); color: #dc2626; } .ba-menu-list button.danger b { color: #991b1b; }
.student-detail-strip { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 7px; margin-bottom: 10px; }
.student-detail-strip span { display: block; padding: 9px; border-radius: 16px; background: color-mix(in srgb, var(--muted,#64748b) 8%, transparent); color: var(--muted,#64748b); font-size: 11px; font-weight: 850; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.student-detail-strip b { display: block; margin-bottom: 3px; color: var(--text,#111827); font-size: 10px; text-transform: uppercase; letter-spacing: .05em; }
.ba-form { display: grid; grid-template-columns: minmax(0, 1fr); gap: 10px; } .ba-form.two { grid-template-columns: minmax(0,1fr); } .ba-form.compact { gap: 9px; }
.ba-form label { display: grid; gap: 6px; min-width: 0; } .ba-form span { color: var(--muted,#64748b); font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: .06em; }
.ba-media-hint { color: var(--muted,#64748b); font-size: 11px; font-weight: 750; line-height: 1.4; }
.ba-form .wide { grid-column: 1 / -1; }
.ba-form-section { padding: 12px 0; border-top: 1px solid var(--border,rgba(0,0,0,.08)); } .ba-form-section:first-of-type { border-top: 0; padding-top: 0; }
.ba-section-note { margin: -4px 0 12px; color: var(--ba-muted); font-size: .82rem; line-height: 1.45; }
.ba-setup-preview { padding: 12px; border: 1px dashed color-mix(in srgb, var(--ba-primary) 38%, var(--ba-border)); border-radius: 14px; background: color-mix(in srgb, var(--ba-primary) 6%, var(--ba-card)); display: grid; gap: 5px; }
.ba-setup-preview strong { font-size: .82rem; color: var(--ba-text); }
.ba-setup-preview span { color: var(--ba-muted); font-size: .76rem; line-height: 1.45; }
.ba-form-section h3 { margin: 0 0 10px; color: var(--text,#111827); font-size: 14px; font-weight: 1000; letter-spacing: -.03em; }
.ba-page textarea { min-height: 92px; padding: 12px; resize: vertical; line-height: 1.55; }
.ba-media-actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
.ba-media-button { min-height: 40px; border: 1px solid var(--ba-primary); border-radius: 999px; padding: 0 14px; display: inline-flex; align-items: center; justify-content: center; background: var(--ba-primary); color: #fff !important; font-size: 12px; font-weight: 950; letter-spacing: 0 !important; text-transform: none !important; cursor: pointer; text-align: center; box-shadow: 0 12px 26px color-mix(in srgb, var(--ba-primary) 18%, transparent); }
.ba-media-button.secondary { background: var(--surface, #fff); color: var(--ba-primary) !important; box-shadow: none; }
.ba-media-button input { display: none; }
.ba-preview-photo { width: 96px; height: 96px; object-fit: cover; border-radius: 22px; border: 1px solid var(--border,rgba(0,0,0,.10)); }
.ba-preview-banner { width: 100%; height: 130px; object-fit: cover; border-radius: 22px; border: 1px solid var(--border,rgba(0,0,0,.10)); }
.ba-modal { width: min(980px, 100%); max-height: min(92dvh, 900px); overflow-y: auto; padding: 14px; border-radius: 28px; box-shadow: 0 30px 90px rgba(15,23,42,.35); }
.ba-analysis-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 10px; margin-top: 10px; }
.ba-analysis, .ba-table-card, .ba-empty { padding: 13px; border-radius: 24px; }
.ba-analysis span { color: var(--muted,#64748b); font-size: 11px; font-weight: 950; text-transform: uppercase; letter-spacing: .08em; }
.ba-analysis strong { display: block; margin-top: 8px; font-size: clamp(22px,7vw,30px); line-height: 1; font-weight: 1000; letter-spacing: -.06em; overflow-wrap: anywhere; }
.ba-analysis p { margin: 8px 0 0; color: var(--muted,#64748b); font-size: 12px; line-height: 1.5; }
.ba-analysis-list { display: grid; gap: 10px; margin-top: 12px; }
.ba-analysis-list section { display: grid; gap: 6px; padding: 10px; border-radius: 16px; background: color-mix(in srgb,var(--muted,#64748b) 8%,transparent); }
.ba-analysis-list section > div:first-child { display: flex; justify-content: space-between; gap: 10px; }
.ba-analysis-list b, .ba-analysis-list small { font-size: 12px; } .ba-analysis-list small { color: var(--muted,#64748b); font-weight: 850; }
.ba-progress { height: 8px; border-radius: 999px; background: color-mix(in srgb,var(--muted,#64748b) 18%,transparent); overflow: hidden; } .ba-progress i { display: block; height: 100%; border-radius: inherit; background: var(--ba-primary); }
.ba-empty { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 220px; text-align: center; border-style: dashed; }
.ba-empty-icon { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 22px; background: color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff)); font-size: 28px; }
.ba-empty h3 { margin: 0; font-size: 18px; font-weight: 1000; } .ba-empty p { margin: 0; color: var(--muted,#64748b); font-size: 13px; line-height: 1.6; }
.ba-table-card { margin-top: 10px; } .ba-table-scroll { width: 100%; max-width: 100%; overflow-x: auto; border-radius: 18px; border: 1px solid var(--border,rgba(0,0,0,.08)); }
.ba-table-scroll table { width: 100%; min-width: 920px; border-collapse: collapse; background: var(--card-bg, var(--surface, var(--bg, transparent))); }
.ba-table-scroll th, .ba-table-scroll td { padding: 10px; border-bottom: 1px solid var(--border,rgba(0,0,0,.08)); vertical-align: top; text-align: left; font-size: 13px; }
.ba-table-scroll th { background: var(--table-header-bg, color-mix(in srgb, var(--ba-primary) 6%, var(--card-bg, var(--surface, var(--bg, transparent))))); color: var(--table-header-text, var(--muted, var(--text))); font-size: 11px; font-weight: 1000; text-transform: uppercase; letter-spacing: .07em; }
.ba-table-scroll td strong, .ba-table-scroll td span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .ba-table-scroll td span { margin-top: 3px; color: var(--muted,#64748b); font-size: 11px; }
.ba-table-actions { display: flex; flex-wrap: nowrap; gap: 7px; width: 100%; max-width: 100%; overflow-x: auto; scrollbar-width: none; -ms-overflow-style: none; } .ba-table-actions::-webkit-scrollbar { display: none; }
.ba-table-actions button { flex: 0 0 auto; min-height: 34px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; padding: 0 10px; background: var(--surface,#fff); color: var(--text,#111827); font-size: 11px; font-weight: 950; cursor: pointer; white-space: nowrap; }
.ba-table-actions button:first-child { background: var(--ba-primary); color: #fff; border-color: var(--ba-primary); }
.ba-delete, .ba-table-actions button.ba-delete { color: #991b1b; background: color-mix(in srgb,#dc2626 7%,var(--surface,#fff)); border-color: color-mix(in srgb,#dc2626 24%,var(--border,rgba(0,0,0,.10))); }
.ba-empty-table { padding: 22px; text-align: center; color: var(--muted,#64748b); font-weight: 850; }
.camera-backdrop { z-index: 100; place-items: center; }
.ba-camera-modal { width: min(720px, 100%); max-height: min(92dvh, 880px); overflow-y: auto; padding: 14px; border-radius: 28px; background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); box-shadow: 0 30px 90px rgba(15,23,42,.35); }
.ba-camera-preview { position: relative; width: 100%; aspect-ratio: 4 / 3; overflow: hidden; border-radius: 24px; background: #020617; border: 1px solid var(--border, rgba(0,0,0,.10)); }
.ba-camera-preview video { width: 100%; height: 100%; display: block; object-fit: cover; background: #020617; }
.ba-camera-loading { position: absolute; inset: 0; display: grid; place-items: center; background: rgba(2,6,23,.72); color: #fff; font-size: 13px; font-weight: 950; }
.ba-camera-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 8px; margin-top: 12px; }
.ba-camera-actions button { min-height: 42px; border-radius: 999px; padding: 0 14px; font-size: 12px; font-weight: 950; cursor: pointer; }
.ba-camera-secondary { border: 1px solid var(--border, rgba(0,0,0,.10)); background: color-mix(in srgb, var(--muted, #64748b) 8%, var(--surface, #fff)); color: var(--text, #111827); }
.ba-camera-primary { border: 1px solid var(--ba-primary); background: var(--ba-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent); }
.ba-camera-actions button:disabled { opacity: .62; cursor: not-allowed; }
@media (min-width: 680px) { .ba-page { padding: calc(12px * var(--local-density-scale,1)); padding-bottom: 44px; } .ba-search-card { grid-template-columns: minmax(0,1fr) 48px 48px 48px; } .ba-list { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; } .student-row { border-radius: 24px; padding: 12px; } .ba-analysis-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } .ba-form { grid-template-columns: repeat(2, minmax(0,1fr)); } .ba-modal-backdrop, .ba-sheet-backdrop { place-items: center; padding: 18px; } .ba-sheet { border-radius: 28px; padding: 18px; } .ba-modal { padding: 18px; } }
@media (min-width: 1040px) { .ba-page { padding: calc(16px * var(--local-density-scale,1)); padding-bottom: 48px; } .ba-search-card, .ba-list, .ba-analysis-grid, .ba-table-card, .ba-filter-chips { max-width: 1180px; margin-left: auto; margin-right: auto; } .ba-list { grid-template-columns: repeat(3, minmax(0, 1fr)); } .ba-analysis-grid { grid-template-columns: repeat(4, minmax(0,1fr)); } .ba-current-filter { grid-column: span 2; } .ba-form { grid-template-columns: repeat(3, minmax(0,1fr)); } }
@media (max-width: 520px) { .ba-page { padding: calc(7px * var(--local-density-scale,1)); padding-bottom: max(38px, env(safe-area-inset-bottom)); } .ba-icon-button, .ba-filter-button, .ba-add-inline { width: 40px; height: 40px; } .student-detail-strip { grid-template-columns: minmax(0,1fr); } .ba-sheet, .ba-modal { border-radius: 24px 24px 18px 18px; padding: 12px; } .ba-sheet-actions, .ba-modal-actions { display: grid; grid-template-columns: minmax(0,1fr); } .ba-sheet-actions button, .ba-modal-actions button { width: 100%; } .ba-media-actions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); } .ba-media-button, .ba-camera-actions button { width: 100%; } .ba-camera-actions { display: grid; grid-template-columns: minmax(0, 1fr); } .ba-camera-modal { border-radius: 22px; padding: 11px; } }

.branches-map-shell {
  display: grid;
  gap: 10px;
}


.branches-map-legend span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  border-radius: 999px;
  background: color-mix(in srgb, currentColor 10%, transparent);
  font-size: 11px;
  font-weight: 850;
}

.branches-map-legend .branch { color: #7c3aed; }
.branches-map-legend .student { color: #2563eb; }
.branches-map-legend .teacher { color: #16a34a; }
.branches-map-legend .parent { color: #ea580c; }


.branches-map-toolbar {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 7px;
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
}
.branches-map-toolbar::-webkit-scrollbar { display: none; }

.branches-map-toggle {
  --layer-color: #64748b;
  flex: 0 0 auto;
  min-height: 30px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid color-mix(in srgb, var(--layer-color) 24%, var(--border, rgba(0,0,0,.10)));
  border-radius: 999px;
  padding: 5px 9px;
  background: var(--card-bg, var(--surface, #fff));
  color: var(--muted-text, var(--muted-foreground, #64748b));
  cursor: pointer;
  font-size: 11px;
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;
  transition: border-color .16s ease, background .16s ease, color .16s ease, opacity .16s ease;
}
.branches-map-toggle i {
  width: 8px;
  height: 8px;
  flex: 0 0 auto;
  border-radius: 999px;
  background: var(--layer-color);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--layer-color) 12%, transparent);
}
.branches-map-toggle.active {
  border-color: color-mix(in srgb, var(--layer-color) 45%, var(--border, rgba(0,0,0,.10)));
  background: color-mix(in srgb, var(--layer-color) 9%, var(--card-bg, var(--surface, #fff)));
  color: var(--text, #111827);
}
.branches-map-toggle:not(.active) {
  opacity: .52;
}
.branches-map-toggle.branch { --layer-color: #7c3aed; }
.branches-map-toggle.student { --layer-color: #2563eb; }
.branches-map-toggle.teacher { --layer-color: #16a34a; }
.branches-map-toggle.parent { --layer-color: #ea580c; }

.branches-map-empty {
  min-height: 280px;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 7px;
  padding: 24px;
  text-align: center;
  color: var(--muted, #64748b);
}

.branches-map-empty > span {
  font-size: 38px;
  color: var(--ba-primary);
}

.branches-map-empty strong {
  color: var(--text, #111827);
  font-size: 16px;
}

.branches-map-empty small {
  max-width: 390px;
  line-height: 1.5;
}

@media (max-width: 680px) {
  .branches-layer-controls {
    grid-template-columns: 1fr;
  }
}
`;var bs=c(99227);let bt=[{value:"school_admin",label:"School Admin",icon:"\uD83C\uDFEB",helper:"School-level administrator across selected school operations.",branchRequired:!1},{value:"branch_admin",label:"Branch Admin",icon:"\uD83C\uDFE2",helper:"Branch-level administrator for one selected campus.",branchRequired:!0},{value:"accountant",label:"Accountant",icon:"\uD83D\uDCB0",helper:"Finance access for a selected school branch.",branchRequired:!0}],bu=["","Mr.","Mrs.","Miss","Ms.","Dr.","Prof.","Rev.","Pastor","Imam","Alhaji","Hajia","Nana"],bv={userId:"",title:"",fullName:"",email:"",phone:"",role:"school_admin",schoolId:"",branchId:"",active:!0,temporaryPassword:""};function bw(a){return null==a?"":String(a).trim()}function bx(a){return bw(a)||void 0}function by(a){return String(a||"").trim().toLowerCase()}function bz(a){return String(a||"").trim().replace(/\s+/g," ")}function bA(a){let b=by(a).split("@")[0].replace(/[^a-zA-Z0-9._-]/g,"");return`${b||"user"}@123`}function bB(a,b){return!!a&&!a.isDeleted&&(!a.accountId||a.accountId===b)}function bC(a){return bt.find(b=>b.value===a)?.label||String(a||"No role").replaceAll("_"," ")}function bD(a){return bt.find(b=>b.value===a)?.icon||"\uD83D\uDC64"}function bE(a){return String(a||"User").split(/\s+/).filter(Boolean).slice(0,2).map(a=>a[0]?.toUpperCase()).join("")||"U"}function bF(a){return a?.id||a?.localId}function bG(a){return String(a?.userLocalId||a?.userId||a?.accountUserId||"")}function bH(a){return a?.id??a?.localId}function bI(...a){let b=o.db;for(let c of a)if(b[c])return b[c];return null}async function bJ(...a){let b=bI(...a);return b?.toArray?b.toArray():[]}function bK(a){let b=a?.schema?.primKey;return b?.keyPath==="id"&&b?.auto===!1}function bL(a){let b=String(a||"auth").replace(/[^a-zA-Z0-9_-]/g,""),c="u">typeof crypto&&"function"==typeof crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`;return`${b}_${c}`}function bM(a){return bK(a)?new Date().toISOString():Date.now()}async function bN(a,b){try{return await (0,bs.AT)(a,{method:b.method,body:void 0===b.body?void 0:JSON.stringify(b.body)})}catch(d){let c=String(d?.message||d||"Request failed");throw Error(`${b.method} ${a} failed: ${c}`)}}function bO(a){return String(a?.message||a?.statusText||a||"")}function bP(a){let b=bO(a).toLowerCase();return a?.status===404||a?.statusCode===404||b.includes("404")||b.includes("not found")||b.includes("cannot ")||b.includes("no route")}async function bQ(a){let b=null;for(let c of a)try{return await bN(c.endpoint,{method:c.method,body:c.body})}catch(a){if(b=a,!bP(a))break}throw b||Error("No auth endpoint accepted the request.")}function bR(a){return Array.isArray(a)?a:Array.isArray(a?.data)?a.data:Array.isArray(a?.items)?a.items:Array.isArray(a?.rows)?a.rows:Array.isArray(a?.results)?a.results:[]}function bS(a){return[String(a.accountId||""),String(a.schoolId||""),String(a.branchId||""),String(a.role||""),String(a.userId||a.userLocalId||a.accountUserId||""),`email:${by(a.email)}`].join("|")}function bT(a){let b=new Map,c=[];a.filter(Boolean).forEach(a=>{let d=String(bH(a)||"").trim();d&&!d.startsWith("membership_")?b.set(d,{...b.get(d)||{},...a}):c.push(a)});let d=new Map;[...b.values(),...c].forEach(a=>{let b=String(bH(a)||"").trim(),c=b&&!b.startsWith("membership_")?`id:${b}`:`logical:${bS(a)}`,e=d.get(c);if(!e)return void d.set(c,a);let f=String(bH(e)||""),g=b&&!b.startsWith("membership_"),h=f&&!f.startsWith("membership_");g&&!h?d.set(c,a):(!1!==a.active&&!1===e.active||Number(a.updatedAt||0)>=Number(e.updatedAt||0))&&d.set(c,{...e,...a})});let e=new Map;return[...d.values()].forEach(a=>{let b=bS(a),c=e.get(b);if(!c)return void e.set(b,a);let d=String(bH(a)||""),f=String(bH(c)||""),g=d&&!d.startsWith("membership_"),h=f&&!f.startsWith("membership_");g&&!h?e.set(b,a):(!h||Number(a.updatedAt||0)>=Number(c.updatedAt||0))&&e.set(b,{...c,...a})}),[...e.values()]}function bU(a,b,c){return!(!a||a.role!==b.role||String(bG(a)||a.userId||"")!==String(c)||bw(a.schoolId)!==bw(b.schoolId)||bt.find(a=>a.value===b.role)?.branchRequired&&bw(a.branchId)!==bw(b.branchId))&&(by(a.email)===by(b.email)||!!c)}function bV(a){let b=[a?.users,a?.appUsers,a?.accountUsers,a?.data?.users,a?.data?.appUsers,a?.data?.accountUsers,a?.data,a?.items,a?.rows,a?.results,a].flatMap(bR).filter(Boolean),c=[a?.memberships,a?.userMemberships,a?.data?.memberships,a?.data?.userMemberships].flatMap(bR).filter(Boolean),d=b.flatMap(a=>[a?.memberships,a?.userMemberships,a?.membership?[a.membership]:[],a?.userMembership?[a.userMembership]:[]].flatMap(bR).map(b=>({...b,userId:b?.userId||bF(a),title:b?.title||a?.title,fullName:b?.fullName||a?.fullName||a?.name,email:b?.email||a?.email,accountId:b?.accountId||a?.accountId,schoolId:b?.schoolId??a?.schoolId,branchId:b?.branchId??a?.branchId,active:b?.active??a?.active,status:b?.status||a?.status,mustChangePassword:b?.mustChangePassword??a?.mustChangePassword}))),e=b.filter(a=>{let b=String(a?.role||"").toLowerCase(),c=d.some(c=>String(c.userId||"")===String(bF(a)||"")&&String(c.role||"")===b);return bt.some(a=>a.value===b)&&!c}).map(a=>({id:a?.membershipId||a?.userMembershipId||`membership_${bF(a)||a.email||Math.random()}`,accountId:a?.accountId,schoolId:a?.schoolId,branchId:a?.branchId,userId:bF(a),title:a?.title,fullName:a?.fullName||a?.name,email:a?.email,role:a?.role,active:a?.active!==!1&&a?.status!=="inactive",status:a?.active===!1||a?.status==="inactive"?"inactive":"active",mustChangePassword:!!a?.mustChangePassword,isDeleted:!!a?.isDeleted}));return{users:b,memberships:bT([...c,...d,...e])}}async function bW(a){let b=new URLSearchParams;a.schoolId&&b.set("schoolId",String(a.schoolId)),a.branchId&&b.set("branchId",String(a.branchId));let c=b.toString()?`?${b.toString()}`:"";return bQ([{endpoint:`/accounts/me/users${c}`,method:"GET"},{endpoint:`/accounts/users${c}`,method:"GET"},{endpoint:`/owner/users${c}`,method:"GET"}])}function bX(a){return{fullName:a.fullName.trim(),email:by(a.email),phone:bz(a.phone)||void 0,password:a.temporaryPassword.trim(),role:a.role,schoolId:a.schoolId,branchId:a.branchId||void 0}}function bY(a){return{fullName:a.fullName.trim(),phone:bz(a.phone)||void 0,role:a.role}}function bZ(a,b){return{userId:b,role:a.role,schoolId:a.schoolId,branchId:a.branchId||null,active:a.active}}async function b$(a){let b,c=by(a.form.email),d=(a.form.userId?a.users.find(b=>String(bF(b)||"")===String(a.form.userId)):void 0)||a.users.find(a=>by(a.email)===c),e=[];if(d&&bF(d))e=bV(d=await bQ([{endpoint:`/accounts/users/${encodeURIComponent(String(bF(d)))}`,method:"PATCH",body:bY(a.form)},{endpoint:`/accounts/me/users/${encodeURIComponent(String(bF(d)))}`,method:"PATCH",body:bY(a.form)}])).memberships;else try{d=await bQ([{endpoint:"/accounts/me/users",method:"POST",body:bX(a.form)},{endpoint:"/accounts/users",method:"POST",body:bX(a.form)},{endpoint:"/owner/users",method:"POST",body:bX(a.form)}]),e=bV(d).memberships}catch(g){let b=bO(g).toLowerCase();if(!b.includes("already registered")&&!b.includes("already exists"))throw g;let f=bV(await bW({schoolId:bx(a.form.schoolId),branchId:bx(a.form.branchId)}));if(d=f.users.find(a=>by(a.email)===c),e=f.memberships,!d)throw g}let f=String(bF(d)||"");if(!f)throw Error("The backend did not return a valid user id.");let g=bT([...a.memberships,...e,...bV(d).memberships]),h=(a.form.membershipId?g.find(b=>String(bH(b)||"")===String(a.form.membershipId)):void 0)||g.find(b=>bU(b,a.form,f));return b=h?.id||h?.localId?await bQ([{endpoint:`/memberships/${encodeURIComponent(String(bH(h)))}`,method:"PATCH",body:bZ(a.form,f)},{endpoint:`/user-memberships/${encodeURIComponent(String(bH(h)))}`,method:"PATCH",body:bZ(a.form,f)}]):await bQ([{endpoint:"/memberships",method:"POST",body:bZ(a.form,f)},{endpoint:"/user-memberships",method:"POST",body:bZ(a.form,f)}]),!1===a.form.active&&b?.id&&(b=await bQ([{endpoint:`/memberships/${encodeURIComponent(String(b.id))}`,method:"PATCH",body:{active:!1,status:"inactive"}},{endpoint:`/user-memberships/${encodeURIComponent(String(b.id))}`,method:"PATCH",body:{active:!1,status:"inactive"}}])),{user:d,membership:b}}async function b_(a){let b=bI("appUsers","accountUsers","users");if(!b)return;let c=bF(a.user)||bL("user"),d=bM(b),e={...a.user,id:c,accountId:a.accountId,schoolId:a.form.schoolId,branchId:a.form.branchId||null,title:a.form.title.trim()||a.user.title,fullName:a.form.fullName.trim(),name:a.form.fullName.trim(),email:by(a.form.email),phone:bz(a.form.phone)||void 0,role:a.form.role,active:a.form.active,status:a.form.active?"active":"inactive",temporaryPassword:a.form.temporaryPassword.trim(),password:a.form.temporaryPassword.trim(),mustChangePassword:!0,isDeleted:!1,updatedAt:d},f=await b.get(c).catch(()=>void 0)||await b.where?.("email")?.equals?.(e.email)?.first?.().catch(()=>void 0);f?.id||f?.localId?await b.update(bH(f),{...e,version:Number(f.version||0)+1}):await b.add({...bK(b)?{id:c}:{},...e,createdAt:d,version:1})}async function b0(a){let b=bI("userMemberships","memberships");if(!b)return;let c=bH(a.membership)||a.form.membershipId||bL("membership"),d=String(bF(a.user)||a.membership.userId||""),e=bM(b),f={...a.membership,id:c,accountId:a.accountId,schoolId:a.form.schoolId,branchId:a.form.branchId||null,userId:d,userLocalId:null,accountUserId:null,title:a.form.title.trim()||void 0,fullName:a.form.fullName.trim(),email:by(a.form.email),role:a.form.role,active:a.form.active,status:a.form.active?"active":"inactive",mustChangePassword:!0,isDeleted:!1,updatedAt:e},g=b?.toArray?await b.toArray().catch(()=>[]):[],h=await b.get(c).catch(()=>void 0)||g.find(b=>bU(b,a.form,d));h?.id||h?.localId?await b.update(bH(h),{...f,id:bH(h),version:Number(h.version||0)+1}):await b.add({...bK(b)?{id:c}:{},...f,createdAt:e,version:1})}async function b1(a){let b=String(bH(a.membership)||"").trim();if(!b)throw Error("Missing membership id for this access role.");let c=encodeURIComponent(b);try{return await bQ([{endpoint:`/memberships/${c}`,method:"DELETE"},{endpoint:`/user-memberships/${c}`,method:"DELETE"},{endpoint:`/accounts/memberships/${c}`,method:"DELETE"},{endpoint:`/accounts/user-memberships/${c}`,method:"DELETE"}])}catch(a){if(!bP(a))throw a;return bQ([{endpoint:`/memberships/${c}`,method:"PATCH",body:{active:!1,status:"inactive",isDeleted:!0}},{endpoint:`/user-memberships/${c}`,method:"PATCH",body:{active:!1,status:"inactive",isDeleted:!0}},{endpoint:`/accounts/memberships/${c}`,method:"PATCH",body:{active:!1,status:"inactive",isDeleted:!0}},{endpoint:`/accounts/user-memberships/${c}`,method:"PATCH",body:{active:!1,status:"inactive",isDeleted:!0}}])}}async function b2(a){let b=bI("userMemberships","memberships"),c=bI("appUsers","accountUsers","users"),d=bH(a.membership),e=bF(a.user)||bG(a.membership);b&&d&&await b.delete(d).catch(a=>console.warn("Failed to remove local membership cache:",a)),c&&e&&b?.toArray&&((await b.toArray()).some(a=>{let b=String(bG(a))===String(e),c=String(bH(a)||"")===String(d||"");return b&&!c&&!0!==a.isDeleted})||await c.delete(e).catch(a=>console.warn("Failed to remove local user cache:",a)))}function b3({primary:a,title:b,text:c}){return(0,f.jsxs)("main",{className:"ba-page ownerusers-page",style:{"--ba-primary":a},children:[(0,f.jsx)("style",{children:ca}),(0,f.jsxs)("section",{className:"ba-state",children:[(0,f.jsx)("div",{className:"ba-spinner"}),(0,f.jsx)("h2",{children:b}),(0,f.jsx)("p",{children:c})]})]})}function b4(){return(0,f.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,f.jsx)("path",{d:"M4 7h9"}),(0,f.jsx)("path",{d:"M17 7h3"}),(0,f.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,f.jsx)("path",{d:"M4 17h3"}),(0,f.jsx)("path",{d:"M11 17h9"}),(0,f.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function b5({children:a,tone:b="gray"}){return(0,f.jsx)("span",{className:`ba-chip ${b}`,children:a})}function b6({icon:a,title:b,text:c}){return(0,f.jsxs)("section",{className:"ba-empty",children:[(0,f.jsx)("div",{className:"ba-empty-icon",children:a}),(0,f.jsx)("h3",{children:b}),(0,f.jsx)("p",{children:c})]})}function b7({schools:a,branches:b,roleFilter:c,accessFilter:d,schoolFilter:e,branchFilter:g,setRoleFilter:h,setAccessFilter:i,setSchoolFilter:j,setBranchFilter:k,onClose:l}){let m="all"===e?b:b.filter(a=>bw(a.schoolId)===bw(e));return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Filters"}),(0,f.jsx)("p",{children:"Filter owner-created access by role, access state, school and branch."})]}),(0,f.jsx)("button",{type:"button",onClick:l,"aria-label":"Close filters",children:"✕"})]}),(0,f.jsxs)("div",{className:"ba-form compact",children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Role"}),(0,f.jsxs)("select",{value:c,onChange:a=>h(a.target.value),children:[(0,f.jsx)("option",{value:"all",children:"All Roles"}),bt.map(a=>(0,f.jsx)("option",{value:a.value,children:a.label},a.value))]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Access"}),(0,f.jsxs)("select",{value:d,onChange:a=>i(a.target.value),children:[(0,f.jsx)("option",{value:"all",children:"All Access"}),(0,f.jsx)("option",{value:"enabled",children:"Access Enabled"}),(0,f.jsx)("option",{value:"inactive",children:"Inactive"})]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"School"}),(0,f.jsxs)("select",{value:e,onChange:a=>j(a.target.value),children:[(0,f.jsx)("option",{value:"all",children:"All Schools"}),a.map(a=>(0,f.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Branch"}),(0,f.jsxs)("select",{value:g,onChange:a=>k(a.target.value),children:[(0,f.jsx)("option",{value:"all",children:"All Branches"}),m.map(a=>(0,f.jsx)("option",{value:a.id,children:a.name},a.id))]})]})]}),(0,f.jsxs)("div",{className:"ba-sheet-actions",children:[(0,f.jsx)("button",{type:"button",onClick:()=>{h("all"),i("all"),j("all"),k("all")},children:"Clear"}),(0,f.jsx)("button",{type:"button",className:"primary",onClick:l,children:"Apply"})]})]})})}function b8({viewMode:a,setViewMode:b,onAdd:c,onRefresh:d,summary:e,onClose:g}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"More"}),(0,f.jsxs)("p",{children:[e.total," administrative access record(s)."]})]}),(0,f.jsx)("button",{type:"button",onClick:g,"aria-label":"Close more options",children:"✕"})]}),(0,f.jsxs)("div",{className:"ba-menu-list",children:[(0,f.jsxs)("button",{type:"button",className:"cards"===a?"active":"",onClick:()=>b("cards"),children:[(0,f.jsx)("span",{children:"☰"}),(0,f.jsx)("b",{children:"Cards"}),(0,f.jsx)("small",{children:"Compact mobile-first list"})]}),(0,f.jsxs)("button",{type:"button",className:"table"===a?"active":"",onClick:()=>b("table"),children:[(0,f.jsx)("span",{children:"▦"}),(0,f.jsx)("b",{children:"Table"}),(0,f.jsx)("small",{children:"Compare users, roles and branches"})]}),(0,f.jsxs)("button",{type:"button",onClick:c,children:[(0,f.jsx)("span",{children:"＋"}),(0,f.jsx)("b",{children:"Add Access"}),(0,f.jsx)("small",{children:"Create school or branch admin access"})]}),(0,f.jsxs)("button",{type:"button",onClick:d,children:[(0,f.jsx)("span",{children:"↻"}),(0,f.jsx)("b",{children:"Refresh"}),(0,f.jsx)("small",{children:"Reload backend and local cache"})]})]})]})})}function b9({candidate:a,openCandidate:b,toggleAccess:c,deleteAccess:d,onClose:e}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:a.fullName}),(0,f.jsxs)("p",{children:[a.email||"No email"," \xb7 ",a.subLabel]})]}),(0,f.jsx)("button",{type:"button",onClick:e,"aria-label":"Close user details",children:"✕"})]}),(0,f.jsxs)("div",{className:"ownerusers-profile",children:[(0,f.jsx)("span",{className:"ownerusers-avatar large",children:bE(a.fullName)}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("strong",{children:[bD(a.role)," ",bC(a.role)]}),(0,f.jsx)("small",{children:a.enabled?"Access enabled":a.inactive?"Inactive access":"Not enabled"})]})]}),(0,f.jsxs)("div",{className:"ba-menu-list",children:[(0,f.jsxs)("button",{type:"button",onClick:()=>{b(a),e()},children:[(0,f.jsx)("span",{children:"✎"}),(0,f.jsx)("b",{children:"Edit access"}),(0,f.jsx)("small",{children:"Change school, branch, role or contact details"})]}),(0,f.jsxs)("button",{type:"button",onClick:()=>{c(a),e()},children:[(0,f.jsx)("span",{children:a.enabled?"⏸":"▶"}),(0,f.jsx)("b",{children:a.enabled?"Deactivate":"Activate"}),(0,f.jsx)("small",{children:"Toggle this role membership"})]}),(0,f.jsxs)("button",{type:"button",className:"danger",onClick:()=>{d(a),e()},children:[(0,f.jsx)("span",{children:"⌫"}),(0,f.jsx)("b",{children:"Delete access"}),(0,f.jsx)("small",{children:"Remove this role membership from backend"})]})]})]})})}let ca=`
@keyframes baSpin{to{transform:rotate(360deg)}}
.ba-page{min-height:100dvh;width:100%;max-width:100%;min-width:0;padding:calc(8px * var(--local-density-scale,1));padding-bottom:max(40px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--ba-primary) 9%,transparent),transparent 30rem),var(--bg,#f7f8fb);color:var(--text,#111827);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);font-size:var(--font-size,14px);overflow-x:hidden}
.ba-page *,.ba-page *::before,.ba-page *::after{box-sizing:border-box;min-width:0}
.ba-page button,.ba-page input,.ba-page select{font:inherit;max-width:100%}
.ba-page input,.ba-page select{width:100%;min-height:44px;border:1px solid var(--input-border,var(--border,rgba(0,0,0,.10)));border-radius:16px;padding:0 12px;background:var(--input-bg,var(--surface,#fff));color:var(--input-text,var(--text,#111827));outline:none;font-weight:750}
.ba-page input:focus,.ba-page select:focus{border-color:color-mix(in srgb,var(--ba-primary) 52%,var(--border,rgba(0,0,0,.10)));box-shadow:0 0 0 4px color-mix(in srgb,var(--ba-primary) 12%,transparent)}
.ba-state,.ba-search-card,.student-row,.ba-table-card,.ba-empty,.ba-sheet{background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.10));box-shadow:0 12px 28px rgba(15,23,42,.045)}
.ba-state{min-height:min(420px,calc(100dvh - 32px));width:min(520px,100%);margin:0 auto;display:grid;place-items:center;align-content:center;gap:10px;padding:22px;border-radius:28px;text-align:center}
.ba-state h2{margin:0;font-size:22px;font-weight:1000;letter-spacing:-.04em}.ba-state p{max-width:34rem;margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.ba-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--ba-primary) 18%,transparent);border-top-color:var(--ba-primary);animation:baSpin .8s linear infinite}
.ba-search-card{display:grid;grid-template-columns:minmax(0,1fr) 42px 42px 42px;gap:8px;align-items:center;margin-top:2px;padding:8px;border-radius:24px}
.ba-search{min-width:0;display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:8px;min-height:44px;padding:0 11px;border-radius:18px;background:color-mix(in srgb,var(--muted,#64748b) 7%,transparent)}.ba-search span{color:var(--muted,#64748b);font-size:17px;font-weight:1000}.ba-search input{min-height:42px;border:0;padding:0;border-radius:0;background:transparent;box-shadow:none;font-size:14px}
.ba-icon-button,.ba-filter-button,.ba-add-inline{width:42px;height:42px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;display:grid;place-items:center;background:var(--card-bg,var(--surface,#fff));color:var(--text,#111827);font-size:18px;font-weight:1000;cursor:pointer;box-shadow:0 10px 22px rgba(15,23,42,.045)}
.ba-add-inline{border-color:var(--ba-primary);background:var(--ba-primary);color:#fff;font-size:20px;box-shadow:0 12px 28px color-mix(in srgb,var(--ba-primary) 22%,transparent)}.ba-filter-button{position:relative;background:color-mix(in srgb,var(--ba-primary) 8%,var(--card-bg,#fff));color:var(--ba-primary)}.ba-filter-button.active{background:var(--ba-primary);color:#fff;border-color:var(--ba-primary)}.ba-filter-button b{position:absolute;top:-4px;right:-4px;min-width:19px;height:19px;display:grid;place-items:center;border-radius:999px;background:#ef4444;color:#fff;font-size:10px;border:2px solid var(--card-bg,#fff)}.ba-slider-icon{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}
.ba-filter-chips{display:flex;gap:7px;overflow-x:auto;padding:8px 1px 0;scrollbar-width:none}.ba-filter-chips::-webkit-scrollbar{display:none}.ba-filter-chips button{flex:0 0 auto;min-height:31px;border:0;border-radius:999px;padding:0 10px;background:color-mix(in srgb,var(--ba-primary) 11%,transparent);color:var(--ba-primary);font-size:11px;font-weight:950;white-space:nowrap;cursor:pointer}
.ba-list{display:grid;gap:8px;margin-top:10px}.student-row{width:100%;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:10px;padding:10px;border-radius:22px;text-align:left;cursor:pointer;color:var(--text,#111827)}.student-row:hover{border-color:color-mix(in srgb,var(--ba-primary) 24%,var(--border,rgba(0,0,0,.10)));box-shadow:0 16px 34px rgba(15,23,42,.07)}
.ownerusers-avatar{width:48px;height:48px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--ba-primary),color-mix(in srgb,var(--ba-primary) 35%,#fff));color:#fff;font-size:15px;font-weight:1000;box-shadow:0 12px 24px rgba(15,23,42,.12)}.ownerusers-avatar.large{width:58px;height:58px;border-radius:21px;font-size:18px}
.student-main,.student-main strong,.student-main small,.student-main em{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.student-main strong{color:var(--text,#111827);font-size:14px;font-weight:1000;letter-spacing:-.02em}.student-main small{margin-top:3px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.student-main em{margin-top:3px;color:color-mix(in srgb,var(--muted,#64748b) 86%,var(--text,#111827));font-size:11px;font-weight:750;font-style:normal}.student-side{display:grid;justify-items:end;gap:5px}.student-side i{font-style:normal;font-weight:1000;color:var(--muted,#64748b)}
.status-dot-mini{width:10px;height:10px;border-radius:999px}.status-dot-mini.green{background:#22c55e}.status-dot-mini.red{background:#ef4444}.status-dot-mini.orange{background:#f59e0b}
.ba-chip{max-width:100%;display:inline-flex;align-items:center;min-height:24px;padding:3px 8px;border-radius:999px;font-size:10px;font-weight:950;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:capitalize}.ba-chip.green{background:rgba(34,197,94,.12);color:#16a34a}.ba-chip.red{background:rgba(239,68,68,.12);color:#dc2626}.ba-chip.blue{background:rgba(59,130,246,.12);color:#2563eb}.ba-chip.gray{background:color-mix(in srgb,var(--muted,#64748b) 14%,transparent);color:var(--muted,#64748b)}.ba-chip.orange{background:rgba(245,158,11,.14);color:#b45309}.ba-chip.purple{background:rgba(147,51,234,.12);color:#7e22ce}
.ba-table-card{margin-top:10px;border-radius:24px;overflow:hidden}.ba-table-scroll{width:100%;overflow:auto}table{width:100%;border-collapse:separate;border-spacing:0;min-width:840px}th,td{padding:12px;text-align:left;border-bottom:1px solid var(--border,rgba(0,0,0,.08));vertical-align:middle}th{position:sticky;top:0;z-index:1;background:var(--table-header-bg,color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff)));color:var(--table-header-text,var(--text,#111827));font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.07em}td{font-size:13px;color:var(--text,#111827)}td strong,td span{display:block}.ba-table-actions{display:flex;align-items:center;gap:6px;white-space:nowrap}.ba-table-actions button{min-height:32px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;padding:0 10px;background:var(--surface,#fff);color:var(--text,#111827);font-size:11px;font-weight:900;cursor:pointer}.ba-table-actions .ba-delete{border-color:rgba(239,68,68,.25);background:rgba(239,68,68,.08);color:#dc2626}.ba-empty-table{padding:18px;text-align:center;color:var(--muted,#64748b);font-size:13px;font-weight:800}
.ba-empty{display:grid;place-items:center;align-content:center;gap:8px;min-height:210px;margin-top:10px;padding:22px;border-radius:24px;border-style:dashed;text-align:center}.ba-empty-icon{width:56px;height:56px;display:grid;place-items:center;border-radius:22px;background:color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));font-size:28px}.ba-empty h3{margin:0;font-size:18px;font-weight:1000}.ba-empty p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}
.ba-sheet-backdrop{position:fixed;inset:0;z-index:80;display:grid;place-items:end center;padding:10px;background:rgba(15,23,42,.50);backdrop-filter:blur(12px)}.ba-sheet{width:min(760px,100%);max-height:min(88dvh,760px);overflow-y:auto;padding:14px;border-radius:28px 28px 22px 22px;box-shadow:0 30px 90px rgba(15,23,42,.32)}.ba-sheet.small{width:min(520px,100%)}.ba-sheet-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding-bottom:12px}.ba-sheet-head h2{margin:0;color:var(--text,#111827);font-size:21px;font-weight:1000;letter-spacing:-.05em}.ba-sheet-head p{margin:5px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5;font-weight:750}.ba-sheet-head button{width:38px;height:38px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;background:var(--surface,#fff);color:var(--text,#111827);font-weight:1000;cursor:pointer;flex:0 0 auto}
.ba-form.compact{display:grid;grid-template-columns:minmax(0,1fr);gap:9px}.ba-form label{display:grid;gap:6px}.ba-form span{color:var(--muted,#64748b);font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.06em}.ba-warning{margin-bottom:10px;padding:10px 12px;border-radius:18px;background:rgba(245,158,11,.12);color:#92400e;border:1px solid rgba(245,158,11,.22);font-size:12px;font-weight:800;line-height:1.5}.ownerusers-note{display:grid;gap:3px;margin-bottom:10px;padding:10px 12px;border-radius:18px;background:color-mix(in srgb,var(--ba-primary) 9%,transparent);border:1px solid color-mix(in srgb,var(--ba-primary) 16%,transparent)}.ownerusers-note strong{font-size:12px;font-weight:1000}.ownerusers-note span{color:var(--muted,#64748b);font-size:11px;font-weight:750;line-height:1.5}.ownerusers-switch-row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:10px;padding:10px 12px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:18px}.ownerusers-switch-row strong,.ownerusers-switch-row span{display:block}.ownerusers-switch-row span{margin-top:3px;color:var(--muted,#64748b);font-size:11px;font-weight:750}.ownerusers-switch{width:54px;height:30px;border:0;border-radius:999px;background:color-mix(in srgb,var(--muted,#64748b) 28%,transparent);padding:3px;cursor:pointer;transition:.18s}.ownerusers-switch span{width:24px;height:24px;display:block;border-radius:999px;background:#fff;transition:.18s;box-shadow:0 5px 14px rgba(15,23,42,.20)}.ownerusers-switch.on{background:var(--ba-primary)}.ownerusers-switch.on span{transform:translateX(24px)}
.ba-sheet-actions{position:sticky;bottom:-14px;display:flex;justify-content:flex-end;flex-wrap:wrap;gap:8px;margin-top:14px;padding:12px 0 2px;background:linear-gradient(to top,var(--card-bg,var(--surface,#fff)) 70%,transparent)}.ba-sheet-actions button{min-height:42px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;padding:0 16px;background:color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff));color:var(--text,#111827);font-size:12px;font-weight:950;cursor:pointer}.ba-sheet-actions button.primary{border-color:var(--ba-primary);background:var(--ba-primary);color:#fff;box-shadow:0 14px 32px color-mix(in srgb,var(--ba-primary) 25%,transparent)}.ba-sheet-actions button:disabled{opacity:.65;cursor:not-allowed}
.ba-menu-list{display:grid;gap:8px}.ba-menu-list button{width:100%;display:grid;grid-template-columns:42px minmax(0,1fr);column-gap:10px;align-items:center;min-height:58px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:18px;padding:9px;background:var(--surface,#fff);color:var(--text,#111827);text-align:left;cursor:pointer}.ba-menu-list button span{grid-row:span 2;width:42px;height:42px;display:grid;place-items:center;border-radius:16px;background:color-mix(in srgb,var(--ba-primary) 10%,transparent);color:var(--ba-primary);font-weight:1000}.ba-menu-list button b,.ba-menu-list button small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ba-menu-list button b{font-size:13px;font-weight:1000}.ba-menu-list button small{margin-top:2px;color:var(--muted,#64748b);font-size:11px;font-weight:750}.ba-menu-list button.active{border-color:color-mix(in srgb,var(--ba-primary) 34%,var(--border,rgba(0,0,0,.10)));background:color-mix(in srgb,var(--ba-primary) 8%,var(--surface,#fff))}.ba-menu-list button.danger span{background:rgba(239,68,68,.10);color:#dc2626}.ba-menu-list button.danger b{color:#dc2626}
.ownerusers-profile{display:flex;align-items:center;gap:12px;margin-bottom:12px;padding:10px;border-radius:20px;background:color-mix(in srgb,var(--muted,#64748b) 8%,transparent)}.ownerusers-profile strong,.ownerusers-profile small{display:block}.ownerusers-profile strong{font-size:14px;font-weight:1000}.ownerusers-profile small{margin-top:3px;color:var(--muted,#64748b);font-size:12px;font-weight:800}
@media (min-width:680px){.ba-page{padding:calc(12px * var(--local-density-scale,1));padding-bottom:44px}.ba-search-card{grid-template-columns:minmax(0,1fr) 48px 48px 48px}.ba-list{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.ba-sheet-backdrop{place-items:center;padding:18px}.ba-sheet{border-radius:28px;padding:18px}.ba-form.compact{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (min-width:1040px){.ba-page{padding:calc(16px * var(--local-density-scale,1));padding-bottom:48px}.ba-search-card,.ba-list,.ba-table-card,.ba-filter-chips{max-width:1180px;margin-left:auto;margin-right:auto}.ba-list{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:520px){.ba-page{padding:calc(7px * var(--local-density-scale,1));padding-bottom:max(38px,env(safe-area-inset-bottom))}.ba-search-card{grid-template-columns:minmax(0,1fr) 40px 40px 40px;gap:6px;padding:6px;border-radius:22px}.ba-icon-button,.ba-filter-button,.ba-add-inline{width:40px;height:40px}.ba-sheet-actions{display:grid;grid-template-columns:minmax(0,1fr)}.ba-sheet-actions button{width:100%}}
`;var cb=c(99646),cc=c(90182);function cd(a,b){let c=String(a?.licenseModel||"").toLowerCase(),d=String(a?.deploymentMode||"").toLowerCase();return"trial"===c||"trial"===b?"Free trial":"complimentary"===c||String(a?.code||"").startsWith("pilot_")?"Complimentary access":a?.metadata?.visibility==="private"||a?.code==="sp005"?"Private / pilot arrangement":"perpetual"===c||d.startsWith("independent")?"Independent licence":d.includes("private")||d.includes("hosted")?"Private deployment":"subscription"===c||"connected"===d||"eleeveon_cloud"===d?"Cloud subscription":"Commercial package"}function ce(a){if(!a)return"Pricing not available";let b=cd(a);if("Free trial"===b)return`${Number(a.metadata?.trialDays||14)}-day free trial`;if("Complimentary access"===b||"Private / pilot arrangement"===b)return"Privately arranged access";if("Independent licence"===b)return null==a.priceOneTime?"Contact Eleeveon for pricing":`${cg(Number(a.priceOneTime),a.currency||"GHS")} once`;let c=a.metadata?.pricing;return c?.mode==="per_student"?`${cg(Number(c.perStudentRate||0),a.currency||"GHS")} per student / ${c.billingPeriod||"term"}`:c?.mode==="tiered"?`Student-based tiers / ${c.billingPeriod||"term"}`:Number(a.priceTermly)>0?`${cg(Number(a.priceTermly),a.currency||"GHS")} / term`:Number(a.priceMonthly)>0?`${cg(Number(a.priceMonthly),a.currency||"GHS")} / month`:Number(a.priceYearly)>0?`${cg(Number(a.priceYearly),a.currency||"GHS")} / year`:"Pricing available on request"}function cf(a){let b=String(a.metadata?.visibility||"public").toLowerCase(),c=String(a.licenseModel||"").toLowerCase(),d=a.availableAcquisitionModes||[];return!1!==a.active&&"public"===b&&a.metadata?.publicVisible!==!1&&!["complimentary","private"].includes(c)&&!String(a.code||"").startsWith("pilot_")&&!d.includes("private_offer")}function cg(a,b="GHS"){return new Intl.NumberFormat("en-GH",{style:"currency",currency:b,maximumFractionDigits:0}).format(Number(a||0))}function ch(a){if(!a)return"Not set";let b=new Date(a);return Number.isNaN(b.getTime())?"Not set":b.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}function ci(a){return Array.isArray(a)?a:Array.isArray(a?.data)?a.data:Array.isArray(a?.items)?a.items:Array.isArray(a?.rows)?a.rows:Array.isArray(a?.results)?a.results:[]}async function cj(...a){let b=function(...a){let b=o.db;for(let c of a)if(b[c])return b[c];return null}(...a);return b?.toArray?b.toArray():[]}function ck(a){let b=String(a||"").toLowerCase();return["active","paid","completed","success","succeeded"].includes(b)?"green":["failed","cancelled","void","expired","suspended"].includes(b)?"red":["trial","pending","processing","issued","part_paid","past_due","overdue"].includes(b)?"orange":["draft"].includes(b)?"gray":"blue"}function cl(a,b="not set"){let c=String(a||"").trim();return c?c.replace(/_/g," "):b}function cm(){let a=(0,k.useRouter)(),{accountId:b,authenticated:c,loading:d}=(0,l.F)(),{settings:e,loading:h}=(0,m.t)(),i=e?.primaryColor||"var(--primary-color, #2563eb)",[j,n]=(0,g.useState)(!0),[o,p]=(0,g.useState)(""),[q,r]=(0,g.useState)(null),[s,t]=(0,g.useState)([]),[u,v]=(0,g.useState)([]),[w,x]=(0,g.useState)("overview"),[y,z]=(0,g.useState)(""),[A,B]=(0,g.useState)(!1),[C,D]=(0,g.useState)([]),[E,F]=(0,g.useState)(""),[G,H]=(0,g.useState)(200);async function I(){if(!c||!b)return void n(!1);try{n(!0),p("");try{let a=await (0,bs.AT)("/billing/plans");D((function(a){if(Array.isArray(a))return a;if(a&&"object"==typeof a){for(let b of["plans","data","items","results"])if(Array.isArray(a[b]))return a[b]}return[]})(a).filter(cf)),F("")}catch{F("The current package catalogue is unavailable. Your account history is still accessible.")}try{let a=await (0,bs.AT)("/accounts/me");r(a),t(ci(a?.invoices)),v(ci(a?.payments))}catch{let[a,c,d,e]=await Promise.all([cj("accountSubscriptions"),cj("invoices"),cj("appPayments","payments"),cj("subscriptionPlans")]),f=a.find(a=>a.accountId===b)||null,g=e.find(a=>a.id===f?.planId)||f?.plan||null;r({id:b,name:"Owner Account",subscription:f?{...f,plan:g}:null}),t(c.filter(a=>!a.accountId||a.accountId===b)),v(d.filter(a=>!a.accountId||a.accountId===b)),p("Live billing server was not available. Showing latest billing data saved on this device.")}}finally{n(!1)}}let J=q?.subscription?.plan?.currency||s[0]?.currency||u[0]?.currency||"GHS",K=q?.subscription?.plan,L=C.find(a=>a.id===q?.subscription?.planId||a.code===K?.code),M=K?{...L,...K,metadata:K.metadata||L?.metadata}:L,N=q?.subscription,O=(0,g.useMemo)(()=>{let a=s.reduce((a,b)=>a+Number(b.total||0),0);return{totalInvoiced:a,totalPaid:u.filter(a=>"paid"===String(a.status||"").toLowerCase()).reduce((a,b)=>a+Number(b.amount||0),0),outstanding:s.reduce((a,b)=>a+Number(b.balance??Math.max(Number(b.total||0)-Number(b.amountPaid||0),0)),0),invoices:s.length,payments:u.length,unpaidInvoices:s.filter(a=>!["paid","void","cancelled"].includes(String(a.status||"").toLowerCase())).length}},[s,u]),P=(0,g.useMemo)(()=>{let a=y.toLowerCase().trim();return s.filter(b=>!a||`${b.invoiceNumber} ${b.status} ${b.total} ${b.balance}`.toLowerCase().includes(a))},[s,y]),Q=(0,g.useMemo)(()=>{let a=y.toLowerCase().trim();return u.filter(b=>!a||`${b.receiptNumber} ${b.providerReference} ${b.status} ${b.method} ${b.provider}`.toLowerCase().includes(a))},[u,y]),R=[["Offline Sync",M?.offlineSync??M?.metadata?.featureFlags?.offlineSync],["Cloud Backup",M?.cloudBackup],["Reports",M?.reports],["Finance",M?.finance],["Teacher Portal",M?.teacherPortal],["Student Portal",M?.studentPortal],["Parent Portal",M?.parentPortal],["Advanced Analytics",M?.advancedAnalytics],["API Access",M?.apiAccess]],S="packages"===w?C.length:"invoices"===w?P.length:"payments"===w?Q.length:"features"===w?R.length:4,T=cd(M,N?.status),U=C.filter(a=>{let b=a.metadata?.pricing;return b?.mode==="per_student"||b?.mode==="tiered"});return d||h||j?(0,f.jsxs)("main",{className:"ba-page billing-page",style:{"--ba-primary":i},children:[(0,f.jsx)("style",{children:ct}),(0,f.jsxs)("section",{className:"ba-state",children:[(0,f.jsx)("div",{className:"ba-spinner"}),(0,f.jsx)("h2",{children:"Opening billing overview..."}),(0,f.jsx)("p",{children:"Loading subscription, invoices and payment history."})]})]}):(0,f.jsxs)("main",{className:"ba-page billing-page",style:{"--ba-primary":i},children:[(0,f.jsx)("style",{children:ct}),(0,f.jsxs)("section",{className:"ba-search-card","aria-label":"Billing search and actions",children:[(0,f.jsxs)("label",{className:"ba-search",children:[(0,f.jsx)("span",{children:"⌕"}),(0,f.jsx)("input",{placeholder:"invoices"===w?"Search invoices...":"payments"===w?"Search payments...":"Search billing...",value:y,onChange:a=>z(a.target.value),"aria-label":"Search billing records"})]}),(0,f.jsx)("button",{type:"button",className:"ba-add-inline",onClick:I,"aria-label":"Refresh billing",children:"↻"}),(0,f.jsx)("button",{type:"button",className:"ba-filter-button",onClick:()=>B(!0),"aria-label":"Open billing views",title:"Views",children:S}),(0,f.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>B(!0),"aria-label":"More options",children:"⋯"})]}),o?(0,f.jsxs)("section",{className:"ba-slim-notice",children:[(0,f.jsx)("span",{className:"status-dot-mini orange"}),(0,f.jsx)("p",{children:o})]}):null,(0,f.jsx)(cb.A,{onExplorePackages:()=>a.push("/owner/subscription")}),(0,f.jsxs)("section",{className:"ba-filter-chips","aria-label":"Billing views",children:[(0,f.jsx)("button",{type:"button",className:"overview"===w?"active":"",onClick:()=>x("overview"),children:"Overview"}),(0,f.jsxs)("button",{type:"button",className:"packages"===w?"active":"",onClick:()=>x("packages"),children:["Packages (",C.length,")"]}),(0,f.jsxs)("button",{type:"button",className:"invoices"===w?"active":"",onClick:()=>x("invoices"),children:["Invoices (",O.invoices,")"]}),(0,f.jsxs)("button",{type:"button",className:"payments"===w?"active":"",onClick:()=>x("payments"),children:["Payments (",O.payments,")"]}),(0,f.jsx)("button",{type:"button",className:"features"===w?"active":"",onClick:()=>x("features"),children:"Features"})]}),"overview"===w&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("section",{className:"ba-list",children:[(0,f.jsxs)("article",{className:"billing-row",children:[(0,f.jsx)("span",{className:"billing-row-icon",children:"\uD83D\uDCE6"}),(0,f.jsxs)("span",{className:"billing-row-main",children:[(0,f.jsx)("strong",{children:M?.name||"No package assigned"}),(0,f.jsxs)("small",{children:[T," \xb7 ",cl(N?.status,"No arrangement")]}),(0,f.jsx)("em",{children:N?.status==="trial"?`Trial ends: ${ch(N.trialEndsAt||N.currentPeriodEnd)}`:N?.nextBillingDate?`Next billing: ${ch(N.nextBillingDate)}`:"No automatic billing date shown"})]}),(0,f.jsx)("span",{className:"billing-row-side",children:(0,f.jsx)("span",{className:`status-dot-mini ${ck(N?.status)}`})})]}),(0,f.jsxs)("article",{className:"billing-row",children:[(0,f.jsx)("span",{className:"billing-row-icon",children:"\uD83D\uDCB0"}),(0,f.jsxs)("span",{className:"billing-row-main",children:[(0,f.jsx)("strong",{children:"Package pricing"}),(0,f.jsx)("small",{children:ce(M)}),(0,f.jsxs)("em",{children:[M?.maxStudents==null?"No configured student cap":`Up to ${M.maxStudents} students`," \xb7 Quote is not an invoice"]})]})]}),(0,f.jsx)(cn,{icon:"\uD83E\uDDFE",title:"Total invoiced",subtitle:cg(O.totalInvoiced,J),note:`${O.invoices} invoice(s)`,tone:"blue"}),(0,f.jsx)(cn,{icon:"✅",title:"Payments received",subtitle:cg(O.totalPaid,J),note:"Recorded paid transactions",tone:"green"}),(0,f.jsx)(cn,{icon:"⚠️",title:"Outstanding invoices",subtitle:cg(O.outstanding,J),note:`${O.unpaidInvoices} unpaid invoice(s)`,tone:O.outstanding>0?"orange":"green"})]}),(0,f.jsxs)("section",{className:"billing-quote-panel","aria-label":"Instant student quotation",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:"Estimate a package"}),(0,f.jsx)("p",{children:"Enter your school's student count to compare published student-based plans. This does not change your current package."})]}),(0,f.jsxs)("label",{className:"billing-count-input",children:["Students",(0,f.jsx)("input",{type:"number",min:"1",max:"1000000",value:G,onChange:a=>H(Math.max(1,Math.min(1e6,Math.floor(Number(a.target.value)||1))))})]}),(0,f.jsx)("div",{className:"billing-quote-results",children:U.length?U.map(a=>{let b=a.metadata?.pricing,c=b?(0,cc.B)(b,G):null;return(0,f.jsxs)("div",{className:"billing-quote-result",children:[(0,f.jsxs)("span",{children:[a.name,(0,f.jsxs)("small",{children:["Estimated / ",b?.billingPeriod||"term"]})]}),(0,f.jsx)("strong",{children:null==c?"Quote unavailable":cg(c,a.currency||"GHS")})]},a.id||a.code)}):(0,f.jsx)("small",{children:E||"No published student-based plan is available for an instant estimate."})}),(0,f.jsx)("small",{children:"Indicative quote only. The verified invoice or private offer determines what is payable."})]})]}),"packages"===w&&(0,f.jsxs)("section",{className:"ba-list","aria-label":"Published packages",children:[E?(0,f.jsx)("section",{className:"ba-slim-notice",children:(0,f.jsx)("p",{children:E})}):null,C.map(b=>{let c=b.metadata?.pricing,d=c?.mode==="tiered"||c?.mode==="per_student",e=d&&c?(0,cc.B)(c,G):null;return(0,f.jsxs)("article",{className:"billing-row",children:[(0,f.jsx)("span",{className:"billing-row-icon",children:"Free trial"===cd(b)?"\uD83C\uDF81":"Independent licence"===cd(b)?"\uD83D\uDCBB":"☁️"}),(0,f.jsxs)("span",{className:"billing-row-main",children:[(0,f.jsx)("strong",{children:b.name}),(0,f.jsxs)("small",{children:[cd(b)," \xb7 ",d&&null!=e?`${cg(e,b.currency||"GHS")} / ${c?.billingPeriod||"term"} estimated`:ce(b)]}),(0,f.jsx)("em",{children:b.description||"Explore this package's included capabilities and limits."})]}),(0,f.jsx)("span",{className:"billing-row-side",children:(0,f.jsx)("button",{type:"button",className:"billing-package-action",onClick:()=>a.push(`/owner/subscription?planId=${encodeURIComponent(b.id||"")}`),children:"View"})})]},b.id||b.code)}),C.length||E?null:(0,f.jsx)(cs,{text:"No published packages are available."}),(0,f.jsx)("p",{className:"billing-small-note",children:"Private offers, complimentary pilots and unpublished packages do not appear in this catalogue. Viewing a package does not purchase or activate it."})]}),"invoices"===w&&(0,f.jsxs)("section",{className:"ba-list",children:[P.map(a=>(0,f.jsx)(co,{invoice:a,currency:J},a.id||a.invoiceNumber)),!P.length&&(0,f.jsx)(cs,{text:"No invoices match your search."})]}),"payments"===w&&(0,f.jsxs)("section",{className:"ba-list",children:[Q.map(a=>(0,f.jsx)(cp,{payment:a,currency:J},a.id||a.providerReference||a.receiptNumber)),!Q.length&&(0,f.jsx)(cs,{text:"No payments match your search."})]}),"features"===w&&(0,f.jsx)("section",{className:"feature-grid",children:R.map(([a,b])=>(0,f.jsxs)("article",{className:"feature-row",children:[(0,f.jsx)("span",{className:!0===b?"on":"off",children:!0===b?"✓":!1===b?"\xd7":"\xb7"}),(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:a}),(0,f.jsx)("small",{children:!0===b?"Included":!1===b?"Not included":"Not specified in package details"})]})]},String(a)))}),A&&(0,f.jsx)(cq,{viewMode:w,setViewMode:a=>{x(a),B(!1)},summary:O,currency:J,planName:M?.name||"No active plan",subscriptionStatus:cl(N?.status,"not set"),billingCycle:T,nextBillingDate:N?.status==="trial"?ch(N?.trialEndsAt):ch(N?.nextBillingDate),onRefresh:async()=>{B(!1),await I()},onClose:()=>B(!1)})]})}function cn({icon:a,title:b,subtitle:c,note:d,tone:e}){return(0,f.jsxs)("article",{className:"billing-row",children:[(0,f.jsx)("span",{className:"billing-row-icon",children:a}),(0,f.jsxs)("span",{className:"billing-row-main",children:[(0,f.jsx)("strong",{children:b}),(0,f.jsx)("small",{children:c}),(0,f.jsx)("em",{children:d})]}),(0,f.jsx)("span",{className:"billing-row-side",children:(0,f.jsx)("span",{className:`status-dot-mini ${e}`})})]})}function co({invoice:a,currency:b}){return(0,f.jsxs)("article",{className:"billing-row",children:[(0,f.jsx)("span",{className:"billing-row-icon",children:"\uD83E\uDDFE"}),(0,f.jsxs)("span",{className:"billing-row-main",children:[(0,f.jsx)("strong",{children:a.invoiceNumber||"Invoice"}),(0,f.jsxs)("small",{children:[cg(a.total,a.currency||b)," \xb7 ",cl(a.status,"draft")]}),(0,f.jsxs)("em",{children:["Issued ",ch(a.issueDate||a.createdAt)," \xb7 Due ",ch(a.dueDate)]})]}),(0,f.jsxs)("span",{className:"billing-row-side",children:[(0,f.jsx)("span",{className:`status-dot-mini ${ck(a.status)}`}),(0,f.jsx)("i",{children:cg(a.balance??0,a.currency||b)})]})]})}function cp({payment:a,currency:b}){return(0,f.jsxs)("article",{className:"billing-row",children:[(0,f.jsx)("span",{className:"billing-row-icon",children:"\uD83D\uDCB0"}),(0,f.jsxs)("span",{className:"billing-row-main",children:[(0,f.jsx)("strong",{children:a.receiptNumber||a.providerReference||"Payment"}),(0,f.jsxs)("small",{children:[cg(a.amount,a.currency||b)," \xb7 ",cl(a.status,"pending")]}),(0,f.jsxs)("em",{children:[a.provider||"manual"," \xb7 ",a.method||"method not set"," \xb7 ",ch(a.paidAt||a.createdAt)]})]}),(0,f.jsx)("span",{className:"billing-row-side",children:(0,f.jsx)("span",{className:`status-dot-mini ${ck(a.status)}`})})]})}function cq({viewMode:a,setViewMode:b,summary:c,currency:d,planName:e,subscriptionStatus:g,billingCycle:h,nextBillingDate:i,onRefresh:j,onClose:k}){let l=[{key:"overview",icon:"◔",label:"Overview",note:"Package, quotes, invoices and balances"},{key:"packages",icon:"\uD83D\uDCE6",label:"Packages",note:"Compare published arrangements"},{key:"invoices",icon:"\uD83E\uDDFE",label:"Invoices",note:`${c.invoices} invoice record(s)`},{key:"payments",icon:"\uD83D\uDCB0",label:"Payments",note:`${c.payments} payment record(s)`},{key:"features",icon:"✓",label:"Features",note:"Enabled plan modules"}];return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Billing"}),(0,f.jsx)("p",{children:"Compact billing summary and view switcher."})]}),(0,f.jsx)("button",{type:"button",onClick:k,"aria-label":"Close billing menu",children:"✕"})]}),(0,f.jsxs)("div",{className:"billing-info-list",children:[(0,f.jsx)(cr,{label:"Plan",value:e}),(0,f.jsx)(cr,{label:"Status",value:g}),(0,f.jsx)(cr,{label:"Arrangement",value:h}),(0,f.jsx)(cr,{label:"Next billing / trial expiry",value:i}),(0,f.jsx)(cr,{label:"Invoiced",value:cg(c.totalInvoiced,d)}),(0,f.jsx)(cr,{label:"Paid",value:cg(c.totalPaid,d)}),(0,f.jsx)(cr,{label:"Outstanding",value:cg(c.outstanding,d)})]}),(0,f.jsxs)("div",{className:"ba-menu-list",children:[l.map(c=>(0,f.jsxs)("button",{type:"button",className:a===c.key?"active":"",onClick:()=>b(c.key),children:[(0,f.jsx)("span",{children:c.icon}),(0,f.jsx)("b",{children:c.label}),(0,f.jsx)("small",{children:c.note})]},c.key)),(0,f.jsxs)("button",{type:"button",onClick:j,children:[(0,f.jsx)("span",{children:"↻"}),(0,f.jsx)("b",{children:"Refresh"}),(0,f.jsx)("small",{children:"Reload subscription, invoices and payments"})]})]})]})})}function cr({label:a,value:b}){return(0,f.jsxs)("div",{children:[(0,f.jsx)("span",{children:a}),(0,f.jsx)("strong",{children:b})]})}function cs({text:a}){return(0,f.jsxs)("section",{className:"ba-empty",children:[(0,f.jsx)("div",{className:"ba-empty-icon",children:"\uD83D\uDCB3"}),(0,f.jsx)("h3",{children:"No records found"}),(0,f.jsx)("p",{children:a})]})}let ct=`
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

.ba-state,
.ba-search-card,
.ba-slim-notice,
.billing-row,
.feature-row,
.ba-empty,
.ba-sheet {
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
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.6;
}

.ba-search-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto auto auto;
  gap: 8px;
  align-items: center;
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
  width: 100%;
  min-height: 42px;
  border: 0;
  padding: 0;
  border-radius: 0;
  background: transparent;
  color: var(--text,#111827);
  outline: none;
  box-shadow: none;
  font-size: 14px;
  font-weight: 750;
}

.ba-add-inline,
.ba-filter-button,
.ba-icon-button {
  min-width: 42px;
  height: 42px;
  border: 1px solid var(--border, rgba(0,0,0,.10));
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: var(--card-bg, var(--surface,#fff));
  color: var(--text,#111827);
  font-size: 14px;
  font-weight: 1000;
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(15,23,42,.045);
}

.ba-add-inline {
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
  font-size: 18px;
}

.ba-filter-button {
  color: var(--ba-primary);
  background: color-mix(in srgb, var(--ba-primary) 8%, var(--card-bg,#fff));
}

.ba-icon-button {
  width: 42px;
  font-size: 18px;
}

.ba-slim-notice {
  display: grid;
  grid-template-columns: auto minmax(0,1fr);
  align-items: center;
  gap: 9px;
  margin-top: 8px;
  border-radius: 17px;
  padding: 8px 10px;
  color: #92400e;
  background: rgba(245,158,11,.1);
  border-color: rgba(245,158,11,.24);
}

.ba-slim-notice p {
  margin: 0;
  font-size: 11px;
  line-height: 1.35;
  font-weight: 850;
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

.ba-filter-chips button.active {
  background: var(--ba-primary);
  color: #fff;
}

.billing-compact-grid,
.ba-list,
.feature-grid {
  display: grid;
  gap: 7px;
  margin-top: 10px;
}

.billing-row {
  width: 100%;
  display: grid;
  grid-template-columns: auto minmax(0,1fr) auto;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 18px;
  color: var(--text,#111827);
}

.billing-row-icon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--ba-primary), rgba(15,23,42,.9));
  color: #fff;
  font-size: 13px;
  font-weight: 1000;
  box-shadow: 0 8px 18px rgba(15,23,42,.10);
}

.billing-row-main {
  display: grid;
  gap: 1px;
  min-width: 0;
}

.billing-row-main strong,
.billing-row-main small,
.billing-row-main em {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.billing-row-main strong {
  font-size: 13px;
  font-weight: 1000;
  color: var(--text,#111827);
  line-height: 1.15;
}

.billing-row-main small,
.billing-row-main em {
  color: var(--muted,#64748b);
  font-size: 10.5px;
  font-style: normal;
  font-weight: 800;
  line-height: 1.22;
}

.billing-row-side {
  display: flex;
  align-items: center;
  gap: 6px;
}

.billing-row-side i {
  color: var(--muted,#64748b);
  font-style: normal;
  font-size: 10px;
  font-weight: 950;
  max-width: 76px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.status-dot-mini {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--muted,#64748b);
  box-shadow: 0 0 0 3px color-mix(in srgb,var(--muted,#64748b) 12%,transparent);
}

.status-dot-mini.green{background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.13)}
.status-dot-mini.red{background:#ef4444;box-shadow:0 0 0 3px rgba(239,68,68,.13)}
.status-dot-mini.orange{background:#f59e0b;box-shadow:0 0 0 3px rgba(245,158,11,.15)}
.status-dot-mini.blue{background:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.13)}
.status-dot-mini.gray{background:var(--muted,#64748b)}

.feature-grid {
  grid-template-columns: repeat(2, minmax(0,1fr));
}

.feature-row {
  display: grid;
  grid-template-columns: auto minmax(0,1fr);
  align-items: center;
  gap: 8px;
  padding: 9px;
  border-radius: 18px;
}

.feature-row > span {
  width: 30px;
  height: 30px;
  border-radius: 13px;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 1000;
}

.feature-row > span.on {
  background: rgba(34,197,94,.12);
  color: #16a34a;
}

.feature-row > span.off {
  background: rgba(100,116,139,.12);
  color: var(--muted,#64748b);
}

.feature-row strong,
.feature-row small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.feature-row strong {
  font-size: 12px;
  font-weight: 1000;
}

.feature-row small {
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 800;
}

.ba-empty {
  display: grid;
  place-items: center;
  align-content: center;
  gap: 8px;
  min-height: 180px;
  padding: 18px;
  border-radius: 24px;
  text-align: center;
  border-style: dashed;
}

.ba-empty-icon {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 20px;
  background: color-mix(in srgb, var(--ba-primary) 12%, var(--surface,#fff));
  font-size: 24px;
}

.ba-empty h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
}

.ba-empty p {
  margin: 0;
  color: var(--muted,#64748b);
  font-size: 12px;
  line-height: 1.5;
}

.ba-sheet-backdrop {
  position: fixed;
  inset: 0;
  z-index: 80;
  background: rgba(2,6,23,.46);
  display: grid;
  align-items: end;
  padding: 10px;
}

.ba-sheet {
  width: min(540px, 100%);
  margin: 0 auto;
  border-radius: 28px 28px 20px 20px;
  padding: 14px;
  background: var(--card-bg, var(--surface,#fff));
  color: var(--text,#111827);
}

.ba-sheet.small {
  width: min(440px, 100%);
}

.ba-sheet-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}

.ba-sheet-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.ba-sheet-head p {
  margin: 3px 0 0;
  color: var(--muted,#64748b);
  font-size: 12px;
  font-weight: 750;
  line-height: 1.45;
}

.ba-sheet-head button {
  width: 38px;
  height: 38px;
  border: 1px solid var(--border, rgba(0,0,0,.10));
  border-radius: 999px;
  background: var(--card-bg, var(--surface,#fff));
  color: var(--text,#111827);
  font-weight: 1000;
  cursor: pointer;
}

.billing-info-list {
  display: grid;
  gap: 7px;
  margin-bottom: 10px;
}

.billing-info-list div {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid var(--border, rgba(0,0,0,.10));
  border-radius: 15px;
  padding: 9px 10px;
  background: color-mix(in srgb, var(--muted,#64748b) 5%, transparent);
}

.billing-info-list span {
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 900;
}

.billing-info-list strong {
  color: var(--text,#111827);
  font-size: 11px;
  font-weight: 1000;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ba-menu-list {
  display: grid;
  gap: 8px;
  margin-top: 10px;
}

.ba-menu-list button {
  width: 100%;
  display: grid;
  grid-template-columns: auto minmax(0,1fr);
  grid-template-rows: auto auto;
  column-gap: 10px;
  text-align: left;
  border: 1px solid var(--border, rgba(0,0,0,.10));
  border-radius: 18px;
  padding: 10px;
  background: color-mix(in srgb, var(--muted,#64748b) 5%, transparent);
  color: var(--text,#111827);
  cursor: pointer;
}

.ba-menu-list button.active {
  border-color: var(--ba-primary);
  background: color-mix(in srgb, var(--ba-primary) 11%, transparent);
}

.ba-menu-list span {
  grid-row: 1 / span 2;
  width: 32px;
  height: 32px;
  border-radius: 13px;
  display: grid;
  place-items: center;
  background: color-mix(in srgb, var(--ba-primary) 12%, transparent);
  color: var(--ba-primary);
  font-weight: 1000;
}

.ba-menu-list b {
  font-size: 13px;
  font-weight: 1000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ba-menu-list small {
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 800;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (min-width: 680px) {
  .ba-page {
    padding: calc(12px * var(--local-density-scale, 1));
  }

  .billing-compact-grid,
  .feature-grid {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }

  .billing-row {
    min-height: 68px;
  }
}

@media (min-width: 1040px) {
  .billing-compact-grid {
    grid-template-columns: repeat(3, minmax(0,1fr));
  }

  .feature-grid {
    grid-template-columns: repeat(3, minmax(0,1fr));
  }
}

@media (min-width: 1280px) {
  .billing-compact-grid,
  .feature-grid {
    grid-template-columns: repeat(4, minmax(0,1fr));
  }

  .billing-row {
    min-height: 64px;
  }
}

@media (max-width: 520px) {
  .ba-search-card {
    gap: 6px;
    padding: 7px;
    border-radius: 22px;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .billing-row-side i {
    display: none;
  }
}

.billing-quote-panel { margin-top:12px; background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.1));border-radius:20px;padding:16px;display:grid;grid-template-columns:minmax(0,1fr) minmax(130px,190px);gap:12px;align-items:center;}
.billing-quote-panel p { margin:5px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5; }
.billing-quote-panel > small { grid-column:1 / -1;color:var(--muted,#64748b);font-size:11px; }
.billing-count-input {display:grid;gap:5px;font-size:12px;font-weight:700;}
.billing-count-input input {width:100%;background:var(--bg,#f7f8fb);border:1px solid var(--border,#ddd);padding:11px;border-radius:12px;color:var(--text,#111827);}
.billing-quote-results {grid-column:1 / -1;display:grid;gap:8px;}
.billing-quote-result {display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px;border-radius:12px;background:color-mix(in srgb,var(--ba-primary) 6%,transparent);}
.billing-quote-result span {font-weight:750;font-size:13px;}
.billing-quote-result small {display:block;font-weight:400;color:var(--muted,#64748b);margin-top:2px;}
.billing-quote-result strong {font-size:20px;white-space:nowrap;}
.billing-package-action {border-radius:10px;border:1px solid var(--border,#ddd);padding:8px 12px;background:var(--card-bg,#fff);font-weight:700;cursor:pointer;}
.billing-small-note {font-size:12px;color:var(--muted,#64748b);padding:8px;line-height:1.5;}
@media(max-width:450px){.billing-quote-panel{grid-template-columns:minmax(0,1fr) 120px;padding:12px;}.billing-quote-result strong{font-size:17px;}}
`;var cu=c(42264);let cv={invoiceNumber:"",currency:"GHS",subtotal:"",discount:"0",tax:"0",total:"",status:"draft",dueDate:"",note:""};function cw(a,b="GHS"){return new Intl.NumberFormat("en-GH",{style:"currency",currency:b||"GHS",maximumFractionDigits:0}).format(Number(a||0))}function cx(a){if(!a)return"Not set";let b=new Date(a);return Number.isNaN(b.getTime())?"Not set":b.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"2-digit"})}function cy(a){return String(a||"draft").toLowerCase()}function cz(a){let b=cy(a);return"paid"===b?"green":["void","cancelled"].includes(b)?"red":["overdue","part_paid"].includes(b)?"orange":"issued"===b?"blue":"draft"===b?"gray":"purple"}function cA(a){return a.balance??Math.max(Number(a.total||0)-Number(a.amountPaid||0),0)}function cB(...a){let b=o.db;for(let c of a)if(b[c])return b[c];return null}async function cC(...a){let b=cB(...a);return b?.toArray?b.toArray():[]}async function cD(a){let b=cB("invoices");if(b?.put){for(let c of a)if(c?.id)try{await b.put(c)}catch{}}}function cE(){(0,k.useRouter)();let{accountId:a,authenticated:b,loading:c}=(0,l.F)(),{settings:d,loading:e}=(0,m.t)(),h=d?.primaryColor||"var(--primary-color, #2563eb)",[i,j]=(0,g.useState)(!0),[n,o]=(0,g.useState)(!1),[p,q]=(0,g.useState)([]),[r,s]=(0,g.useState)("cards"),[t,u]=(0,g.useState)("all"),[v,w]=(0,g.useState)(""),[x,y]=(0,g.useState)(!1),[z,A]=(0,g.useState)(cv),[B,C]=(0,g.useState)(""),[D,E]=(0,g.useState)(""),[F,G]=(0,g.useState)(!1),[H,I]=(0,g.useState)(!1);async function J(){if(!b||!a){q([]),j(!1);return}try{j(!0),E("");try{var c;let a=(c=await (0,bs.AT)("/billing/invoices"),Array.isArray(c)?c:Array.isArray(c?.data)?c.data:Array.isArray(c?.items)?c.items:Array.isArray(c?.invoices)?c.invoices:Array.isArray(c?.rows)?c.rows:Array.isArray(c?.results)?c.results:[]);q(a),await cD(a)}catch{let b=await cC("invoices");q(b.filter(b=>!b.accountId||b.accountId===a)),E("Live billing server was not available, so this page is showing the latest invoice data saved on this device.")}}finally{j(!1)}}let K=(0,g.useMemo)(()=>{let a=v.trim().toLowerCase();return p.filter(b=>{let c=cy(b.status);return("all"===t||c===t)&&(!a||`${b.invoiceNumber||""} ${b.status||""} ${b.currency||""} ${b.total||""} ${b.note||""}`.toLowerCase().includes(a))})},[p,v,t]),L=(0,g.useMemo)(()=>{let a=p.reduce((a,b)=>a+Number(b.total||0),0),b=p.reduce((a,b)=>a+Number(b.amountPaid||0),0),c=p.reduce((a,b)=>a+cA(b),0),d=p[0]?.currency||"GHS";return{invoices:p.length,total:a,paid:b,balance:c,currency:d,paidCount:p.filter(a=>"paid"===cy(a.status)).length,unpaidCount:p.filter(a=>!["paid","void","cancelled"].includes(cy(a.status))).length,overdueCount:p.filter(a=>"overdue"===cy(a.status)).length}},[p]),M=(0,g.useMemo)(()=>{let a=new Map;for(let b of p){let c=cy(b.status);a.set(c,(a.get(c)||0)+1)}return Array.from(a.entries()).map(([a,b])=>({name:a,count:b})).sort((a,b)=>b.count-a.count)},[p]),N=+("all"!==t);function O(){A({...cv,invoiceNumber:`INV-${Date.now()}`}),C(""),y(!0)}function P(a){let b="paid"===cy(a.status);A({id:a.id,invoiceNumber:a.invoiceNumber||"",currency:a.currency||"GHS",subtotal:String(a.subtotal||0),discount:String(a.discount||0),tax:String(a.tax||0),total:String(a.total||0),status:b?"issued":cy(a.status)||"draft",dueDate:a.dueDate?String(a.dueDate).slice(0,10):"",note:a.note||""}),C(b?"This invoice is already paid. You can review it, but do not manually change paid status here.":""),y(!0)}async function Q(){let a=z.invoiceNumber.trim()?z.subtotal.trim()?z.total.trim()?0>Number(z.total)?"Total cannot be negative.":"":"Total is required.":"Subtotal is required.":"Invoice number is required.";if(a)return void C(a);try{let a,b,c,d;o(!0);let e=(a=Number(z.subtotal||0),b=Number(z.discount||0),c=Number(z.tax||0),d=Number(z.total||a-b+c),{invoiceNumber:z.invoiceNumber.trim(),currency:z.currency.trim()||"GHS",subtotal:a,discount:b,tax:c,total:d,status:z.status,dueDate:z.dueDate||void 0,note:z.note.trim()||void 0}),f=z.id?await (0,bs.AT)(`/billing/invoices/${encodeURIComponent(z.id)}`,{method:"PATCH",body:JSON.stringify(e)}):await (0,bs.AT)("/billing/invoices",{method:"POST",body:JSON.stringify(e)});await cD([f]),y(!1),await J()}catch(a){C(a?.message||"Invoice could not be saved.")}finally{o(!1)}}return c||e||i?(0,f.jsxs)("main",{className:"ba-page invoices-page",style:{"--ba-primary":h},children:[(0,f.jsx)("style",{children:cL}),(0,f.jsxs)("section",{className:"ba-state",children:[(0,f.jsx)("div",{className:"ba-spinner"}),(0,f.jsx)("h2",{children:"Opening invoices..."}),(0,f.jsx)("p",{children:"Loading owner invoices and billing balances."})]})]}):(0,f.jsxs)("main",{className:"ba-page invoices-page",style:{"--ba-primary":h},children:[(0,f.jsx)("style",{children:cL}),(0,f.jsxs)("section",{className:"ba-search-card","aria-label":"Invoices search and actions",children:[(0,f.jsxs)("label",{className:"ba-search",children:[(0,f.jsx)("span",{children:"⌕"}),(0,f.jsx)("input",{placeholder:"Search invoices...",value:v,onChange:a=>w(a.target.value),"aria-label":"Search invoices"})]}),(0,f.jsx)("button",{type:"button",className:"ba-add-inline",onClick:O,"aria-label":"Create invoice",title:"New invoice",children:"+"}),(0,f.jsxs)("button",{type:"button",className:`ba-filter-button ${N?"active":""}`,onClick:()=>G(!0),"aria-label":"Open invoice filters",title:"Filters",children:["☷",N?(0,f.jsx)("b",{children:N}):null]}),(0,f.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>I(!0),"aria-label":"More options",children:"⋯"})]}),D?(0,f.jsxs)("section",{className:"ba-slim-notice",children:[(0,f.jsx)("span",{className:"status-dot-mini orange"}),(0,f.jsx)("p",{children:D})]}):null,N>0&&(0,f.jsx)("section",{className:"ba-filter-chips","aria-label":"Active invoice filters",children:(0,f.jsxs)("button",{type:"button",onClick:()=>u("all"),children:["Status: ",t," \xd7"]})}),"analytics"===r&&(0,f.jsx)("section",{className:"analytics-grid",children:(0,f.jsx)(cK,{title:"Invoice Status Breakdown",items:M,total:L.invoices})}),"table"===r&&(0,f.jsx)("section",{className:"ba-table-card",children:(0,f.jsxs)("div",{className:"ba-table-scroll",children:[(0,f.jsxs)("table",{children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsxs)("th",{children:["Invoices (",K.length,")"]}),(0,f.jsx)("th",{children:"Total"}),(0,f.jsx)("th",{children:"Paid"}),(0,f.jsx)("th",{children:"Balance"}),(0,f.jsx)("th",{children:"Status"}),(0,f.jsx)("th",{children:"Due"}),(0,f.jsx)("th",{children:"Action"})]})}),(0,f.jsx)("tbody",{children:K.map(a=>(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{children:[(0,f.jsx)("strong",{children:a.invoiceNumber||"Invoice"}),(0,f.jsx)("span",{children:a.note||"No note"})]}),(0,f.jsx)("td",{children:cw(a.total,a.currency)}),(0,f.jsx)("td",{children:cw(a.amountPaid,a.currency)}),(0,f.jsx)("td",{children:cw(cA(a),a.currency)}),(0,f.jsx)("td",{children:(0,f.jsx)(cI,{tone:cz(a.status),children:a.status||"draft"})}),(0,f.jsx)("td",{children:cx(a.dueDate)}),(0,f.jsx)("td",{children:(0,f.jsx)("button",{className:"table-action",onClick:()=>P(a),children:"Review"})})]},a.id||a.invoiceNumber))})]}),!K.length&&(0,f.jsx)("div",{className:"ba-empty-table",children:"No invoice matches the selected filters."})]})}),"cards"===r&&(0,f.jsxs)("section",{className:"ba-list",children:[K.map(a=>{let b=cA(a);return(0,f.jsxs)("button",{type:"button",className:"invoice-row",onClick:()=>P(a),children:[(0,f.jsx)("span",{className:"invoice-avatar",children:"\uD83E\uDDFE"}),(0,f.jsxs)("span",{className:"invoice-main",children:[(0,f.jsx)("strong",{children:a.invoiceNumber||"Invoice"}),(0,f.jsxs)("small",{children:[cw(a.total,a.currency)," \xb7 Paid ",cw(a.amountPaid,a.currency)]}),(0,f.jsxs)("em",{children:["Balance ",cw(b,a.currency)," \xb7 Due ",cx(a.dueDate)]})]}),(0,f.jsxs)("span",{className:"invoice-side",children:[(0,f.jsx)("span",{className:`status-dot-mini ${cz(a.status)}`}),(0,f.jsx)("i",{children:"⋯"})]})]},a.id||a.invoiceNumber)}),!K.length&&(0,f.jsx)(cJ,{text:"No invoice matches the selected filters."})]}),F&&(0,f.jsx)(cF,{statusFilter:t,setStatusFilter:u,clearFilters:()=>u("all"),onClose:()=>G(!1)}),H&&(0,f.jsx)(cG,{viewMode:r,setViewMode:a=>{s(a),I(!1)},summary:L,filteredCount:K.length,onRefresh:async()=>{I(!1),await J()},onCreate:()=>{I(!1),O()},onClose:()=>I(!1)}),x&&(0,f.jsx)(cH,{form:z,message:B,saving:n,updateForm:function(a,b){A(c=>{let d={...c,[a]:b};if(["subtotal","discount","tax"].includes(String(a))){let c=Number("subtotal"===a?b:d.subtotal||0),e=Number("discount"===a?b:d.discount||0),f=Number("tax"===a?b:d.tax||0);d.total=String(Math.max(c-e+f,0))}return d}),C("")},saveInvoice:Q,onClose:()=>y(!1)})]})}function cF({statusFilter:a,setStatusFilter:b,clearFilters:c,onClose:d}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Filters"}),(0,f.jsx)("p",{children:"Filter invoices by current billing status."})]}),(0,f.jsx)("button",{type:"button",onClick:d,"aria-label":"Close filters",children:"✕"})]}),(0,f.jsx)("div",{className:"ba-form compact",children:(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Status"}),(0,f.jsxs)("select",{value:a,onChange:a=>b(a.target.value),children:[(0,f.jsx)("option",{value:"all",children:"All invoices"}),(0,f.jsx)("option",{value:"draft",children:"Draft"}),(0,f.jsx)("option",{value:"issued",children:"Issued"}),(0,f.jsx)("option",{value:"part_paid",children:"Part paid"}),(0,f.jsx)("option",{value:"paid",children:"Paid"}),(0,f.jsx)("option",{value:"overdue",children:"Overdue"}),(0,f.jsx)("option",{value:"void",children:"Void"})]})]})}),(0,f.jsxs)("div",{className:"ba-sheet-actions",children:[(0,f.jsx)("button",{type:"button",onClick:c,children:"Clear"}),(0,f.jsx)("button",{type:"button",className:"primary",onClick:d,children:"Apply"})]})]})})}function cG({viewMode:a,setViewMode:b,summary:c,filteredCount:d,onRefresh:e,onCreate:g,onClose:h}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Invoices"}),(0,f.jsxs)("p",{children:[d," of ",c.invoices," invoice record(s) shown."]})]}),(0,f.jsx)("button",{type:"button",onClick:h,"aria-label":"Close menu",children:"✕"})]}),(0,f.jsxs)("div",{className:"invoice-insights",children:[(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:cw(c.total,c.currency)}),"Total"]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:cw(c.paid,c.currency)}),"Paid"]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:cw(c.balance,c.currency)}),"Balance"]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:c.overdueCount}),"Overdue"]})]}),(0,f.jsxs)("div",{className:"ba-menu-list",children:[(0,f.jsxs)("button",{type:"button",className:"cards"===a?"active":"",onClick:()=>b("cards"),children:[(0,f.jsx)("span",{children:"☰"}),(0,f.jsx)("b",{children:"List view"}),(0,f.jsx)("small",{children:"Compact invoice rows"})]}),(0,f.jsxs)("button",{type:"button",className:"table"===a?"active":"",onClick:()=>b("table"),children:[(0,f.jsx)("span",{children:"☷"}),(0,f.jsx)("b",{children:"Table view"}),(0,f.jsx)("small",{children:"Dense laptop invoice records"})]}),(0,f.jsxs)("button",{type:"button",className:"analytics"===a?"active":"",onClick:()=>b("analytics"),children:[(0,f.jsx)("span",{children:"◔"}),(0,f.jsx)("b",{children:"Analytics"}),(0,f.jsx)("small",{children:"Status breakdown"})]}),(0,f.jsxs)("button",{type:"button",onClick:g,children:[(0,f.jsx)("span",{children:"+"}),(0,f.jsx)("b",{children:"New invoice"}),(0,f.jsx)("small",{children:"Create a billing-owned invoice record"})]}),(0,f.jsxs)("button",{type:"button",onClick:e,children:[(0,f.jsx)("span",{children:"↻"}),(0,f.jsx)("b",{children:"Refresh"}),(0,f.jsx)("small",{children:"Reload invoice data"})]})]})]})})}function cH({form:a,message:b,saving:c,updateForm:d,saveInvoice:e,onClose:g}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop detail-layer",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet detail-sheet",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:a.id?"Review Invoice":"New Invoice"}),(0,f.jsx)("p",{children:"Billing-owned invoice record."})]}),(0,f.jsx)("button",{type:"button",onClick:g,"aria-label":"Close invoice editor",children:"✕"})]}),b?(0,f.jsxs)("section",{className:"ba-slim-notice error",children:[(0,f.jsx)("span",{className:"status-dot-mini red"}),(0,f.jsx)("p",{children:b})]}):null,(0,f.jsxs)("section",{className:"safety-note",children:[(0,f.jsx)("strong",{children:"Important payment rule"}),(0,f.jsx)("span",{children:"Do not manually mark an invoice as paid here. Paid status should come from confirmed payment records."})]}),(0,f.jsxs)("div",{className:"ba-form compact",children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Invoice Number"}),(0,f.jsx)("input",{value:a.invoiceNumber,onChange:a=>d("invoiceNumber",a.target.value)})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Currency"}),(0,f.jsx)("input",{value:a.currency,onChange:a=>d("currency",a.target.value)})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Subtotal"}),(0,f.jsx)("input",{type:"number",value:a.subtotal,onChange:a=>d("subtotal",a.target.value)})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Discount"}),(0,f.jsx)("input",{type:"number",value:a.discount,onChange:a=>d("discount",a.target.value)})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Tax"}),(0,f.jsx)("input",{type:"number",value:a.tax,onChange:a=>d("tax",a.target.value)})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Total"}),(0,f.jsx)("input",{type:"number",value:a.total,onChange:a=>d("total",a.target.value)})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Status"}),(0,f.jsxs)("select",{value:a.status,onChange:a=>d("status",a.target.value),children:[(0,f.jsx)("option",{value:"draft",children:"Draft"}),(0,f.jsx)("option",{value:"issued",children:"Issued"}),(0,f.jsx)("option",{value:"overdue",children:"Overdue"}),(0,f.jsx)("option",{value:"void",children:"Void"})]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Due Date"}),(0,f.jsx)("input",{type:"date",value:a.dueDate,onChange:a=>d("dueDate",a.target.value)})]}),(0,f.jsxs)("label",{className:"wide",children:[(0,f.jsx)("span",{children:"Note"}),(0,f.jsx)("textarea",{value:a.note,onChange:a=>d("note",a.target.value)})]})]}),(0,f.jsxs)("div",{className:"ba-sheet-actions sticky",children:[(0,f.jsx)("button",{type:"button",onClick:g,children:"Cancel"}),(0,f.jsx)("button",{type:"button",className:"primary",disabled:c,onClick:e,children:c?"Saving...":"Save Invoice"})]})]})})}function cI({children:a,tone:b="gray"}){return(0,f.jsx)("span",{className:`ba-chip ${b}`,children:a})}function cJ({text:a}){return(0,f.jsxs)("section",{className:"ba-empty",children:[(0,f.jsx)("div",{className:"ba-empty-icon",children:"\uD83E\uDDFE"}),(0,f.jsx)("h3",{children:"No records found"}),(0,f.jsx)("p",{children:a})]})}function cK({title:a,items:b,total:c}){return(0,f.jsxs)("section",{className:"analytics-card",children:[(0,f.jsxs)("div",{className:"section-mini-head",children:[(0,f.jsx)("strong",{children:a}),(0,f.jsxs)("small",{children:[b.length," group(s)"]})]}),(0,f.jsxs)("div",{className:"breakdown-list",children:[b.map(a=>(0,f.jsxs)("article",{className:"breakdown-row",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:a.name}),(0,f.jsxs)("small",{children:[a.count," invoice(s)"]})]}),(0,f.jsx)("span",{children:a.count}),(0,f.jsx)("div",{className:"bar-track",children:(0,f.jsx)("i",{style:{width:`${c?Math.round(a.count/c*100):0}%`}})})]},a.name)),!b.length&&(0,f.jsx)(cJ,{text:`No ${a.toLowerCase()} available.`})]})]})}let cL=`
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
    radial-gradient(circle at top left,color-mix(in srgb,var(--ba-primary) 9%,transparent),transparent 30rem),
    var(--bg,#f7f8fb);
  color:var(--text,#111827);
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

.ba-page button{
  -webkit-tap-highlight-color:transparent;
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

.ba-page textarea{
  min-height:86px;
  resize:vertical;
  padding-top:10px;
}

.ba-state,
.ba-search-card,
.ba-slim-notice,
.invoice-row,
.ba-table-card,
.analytics-card,
.breakdown-row,
.ba-empty,
.ba-sheet,
.safety-note{
  background:var(--card-bg,var(--surface,#fff));
  border:1px solid var(--border,rgba(0,0,0,.10));
  box-shadow:0 12px 28px rgba(15,23,42,.045);
}

.ba-state{
  min-height:min(420px,calc(100dvh - 32px));
  width:min(520px,100%);
  margin:0 auto;
  display:grid;
  place-items:center;
  align-content:center;
  gap:10px;
  padding:22px;
  border-radius:28px;
  text-align:center;
}

.ba-spinner{
  width:38px;
  height:38px;
  border-radius:999px;
  border:4px solid color-mix(in srgb,var(--ba-primary) 18%,transparent);
  border-top-color:var(--ba-primary);
  animation:spin .8s linear infinite;
}

.ba-state h2{
  margin:0;
  font-size:22px;
  font-weight:1000;
  letter-spacing:-.04em;
}

.ba-state p{
  margin:0;
  color:var(--muted,#64748b);
  font-size:13px;
  line-height:1.6;
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
  min-height:42px;
  border:0;
  padding:0;
  border-radius:0;
  background:transparent;
  box-shadow:none;
  font-size:14px;
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
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-size:15px;
  font-weight:1000;
  cursor:pointer;
  box-shadow:0 10px 22px rgba(15,23,42,.045);
}

.ba-add-inline{
  border-color:var(--ba-primary);
  background:var(--ba-primary);
  color:#fff;
  font-size:18px;
}

.ba-filter-button{
  position:relative;
  color:var(--ba-primary);
  background:color-mix(in srgb,var(--ba-primary) 8%,var(--card-bg,#fff));
}

.ba-filter-button.active{
  background:var(--ba-primary);
  color:#fff;
  border-color:var(--ba-primary);
}

.ba-filter-button b{
  position:absolute;
  top:-4px;
  right:-4px;
  min-width:19px;
  height:19px;
  display:grid;
  place-items:center;
  border-radius:999px;
  background:#ef4444;
  color:#fff;
  font-size:10px;
  border:2px solid var(--card-bg,#fff);
}

.ba-icon-button{
  width:42px;
  font-size:18px;
}

.ba-slim-notice{
  display:grid;
  grid-template-columns:auto minmax(0,1fr);
  align-items:center;
  gap:9px;
  margin-top:8px;
  border-radius:17px;
  padding:8px 10px;
  color:color-mix(in srgb,var(--text,#111827) 76%,#b45309 24%);
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 88%,#f59e0b 12%);
  border-color:color-mix(in srgb,var(--border,rgba(0,0,0,.10)) 72%,#f59e0b 28%);
}

.ba-slim-notice.error{
  color:color-mix(in srgb,var(--text,#111827) 76%,#ef4444 24%);
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 88%,#ef4444 12%);
  border-color:color-mix(in srgb,var(--border,rgba(0,0,0,.10)) 72%,#ef4444 28%);
}

.ba-slim-notice p{
  margin:0;
  font-size:11px;
  line-height:1.35;
  font-weight:850;
}

.ba-filter-chips{
  display:flex;
  gap:7px;
  overflow-x:auto;
  padding:8px 1px 0;
  scrollbar-width:none;
  -ms-overflow-style:none;
}

.ba-filter-chips::-webkit-scrollbar{display:none}

.ba-filter-chips button{
  flex:0 0 auto;
  min-height:31px;
  border:0;
  border-radius:999px;
  padding:0 10px;
  background:color-mix(in srgb,var(--ba-primary) 11%,transparent);
  color:var(--ba-primary);
  font-size:11px;
  font-weight:950;
  white-space:nowrap;
  cursor:pointer;
}

.ba-list,
.analytics-grid,
.breakdown-list{
  display:grid;
  gap:7px;
  margin-top:10px;
}

.invoice-row{
  width:100%;
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto;
  align-items:center;
  gap:8px;
  padding:8px;
  border-radius:18px;
  color:var(--text,#111827);
  text-align:left;
  cursor:pointer;
}

.invoice-avatar{
  width:34px;
  height:34px;
  display:grid;
  place-items:center;
  border-radius:14px;
  background:linear-gradient(135deg,var(--ba-primary),rgba(15,23,42,.9));
  color:#fff;
  font-size:15px;
  box-shadow:0 8px 18px rgba(15,23,42,.10);
}

.invoice-main{
  display:grid;
  gap:1px;
  min-width:0;
}

.invoice-main strong,
.invoice-main small,
.invoice-main em{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.invoice-main strong{
  font-size:13px;
  font-weight:1000;
  line-height:1.15;
}

.invoice-main small,
.invoice-main em{
  color:var(--muted,#64748b);
  font-size:10.5px;
  font-style:normal;
  font-weight:800;
  line-height:1.22;
}

.invoice-side{
  display:flex;
  align-items:center;
  gap:6px;
}

.invoice-side i{
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
.status-dot-mini.blue{background:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.13)}
.status-dot-mini.purple{background:#9333ea;box-shadow:0 0 0 3px rgba(147,51,234,.13)}
.status-dot-mini.gray{background:var(--muted,#64748b)}

.ba-chip{
  display:inline-flex;
  align-items:center;
  min-height:24px;
  padding:0 9px;
  border-radius:999px;
  font-size:11px;
  font-weight:950;
  text-transform:capitalize;
}

.ba-chip.green{background:rgba(34,197,94,.11);color:#15803d}
.ba-chip.red{background:rgba(239,68,68,.1);color:#dc2626}
.ba-chip.blue{background:rgba(37,99,235,.1);color:#1d4ed8}
.ba-chip.orange{background:rgba(245,158,11,.12);color:#b45309}
.ba-chip.purple{background:rgba(124,58,237,.1);color:#6d28d9}
.ba-chip.gray{background:rgba(100,116,139,.1);color:#64748b}

.ba-table-card{
  margin-top:10px;
  padding:10px;
  border-radius:24px;
}

.ba-table-scroll{
  overflow-x:auto;
  border-radius:18px;
  border:1px solid var(--border,rgba(0,0,0,.08));
}

.ba-table-scroll table{
  width:100%;
  min-width:780px;
  border-collapse:collapse;
}

.ba-table-scroll th,
.ba-table-scroll td{
  padding:10px;
  text-align:left;
  border-bottom:1px solid var(--border,rgba(0,0,0,.08));
  vertical-align:top;
  font-size:12px;
}

.ba-table-scroll th{
  color:var(--muted,#64748b);
  font-size:11px;
  font-weight:950;
  text-transform:uppercase;
  letter-spacing:.06em;
  background:color-mix(in srgb,var(--ba-primary) 5%,var(--card-bg,var(--surface,#fff)));
}

.ba-table-scroll td strong,
.ba-table-scroll td span{
  display:block;
}

.ba-table-scroll td span{
  margin-top:3px;
  color:var(--muted,#64748b);
  font-size:11px;
}

.table-action{
  min-height:32px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  padding:0 10px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-size:11px;
  font-weight:950;
  cursor:pointer;
}

.ba-empty-table{
  padding:22px;
  text-align:center;
  color:var(--muted,#64748b);
  font-weight:850;
}

.analytics-grid{
  grid-template-columns:1fr;
}

.analytics-card{
  padding:10px;
  border-radius:22px;
}

.section-mini-head{
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:10px;
  margin-bottom:8px;
}

.section-mini-head strong{
  font-size:13px;
  font-weight:1000;
}

.section-mini-head small{
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:850;
}

.breakdown-row{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto;
  gap:8px;
  padding:9px;
  border-radius:17px;
}

.breakdown-row strong,
.breakdown-row small{
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.breakdown-row strong{
  font-size:12px;
  font-weight:1000;
  text-transform:capitalize;
}

.breakdown-row small{
  margin-top:2px;
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:850;
}

.breakdown-row > span{
  font-size:12px;
  font-weight:1000;
}

.bar-track{
  grid-column:1/-1;
  height:8px;
  border-radius:999px;
  background:color-mix(in srgb,var(--muted,#64748b) 16%,transparent);
  overflow:hidden;
}

.bar-track i{
  display:block;
  height:100%;
  border-radius:inherit;
  background:var(--ba-primary);
}

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
  background:color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));
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

.ba-sheet-backdrop{
  position:fixed;
  inset:0;
  z-index:80;
  background:rgba(2,6,23,.46);
  display:grid;
  align-items:end;
  padding:10px;
}

.ba-sheet{
  width:min(540px,100%);
  max-height:92dvh;
  overflow-y:auto;
  margin:0 auto;
  border-radius:28px 28px 20px 20px;
  padding:14px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
}

.ba-sheet.small{
  width:min(440px,100%);
}

.detail-sheet{
  width:min(720px,100%);
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
  overflow-wrap:anywhere;
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

.ba-form{
  display:grid;
  grid-template-columns:1fr;
  gap:9px;
}

.ba-form label{
  display:grid;
  gap:5px;
  min-width:0;
}

.ba-form label.wide{
  grid-column:1/-1;
}

.ba-form span{
  color:var(--muted,#64748b);
  font-size:11px;
  font-weight:950;
}

.ba-sheet-actions{
  display:flex;
  justify-content:flex-end;
  flex-wrap:wrap;
  gap:8px;
  margin-top:12px;
}

.ba-sheet-actions.sticky{
  position:sticky;
  bottom:-14px;
  padding-top:10px;
  background:linear-gradient(to top,var(--card-bg,var(--surface,#fff)) 76%,transparent);
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

.invoice-insights{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:7px;
  margin-bottom:10px;
}

.invoice-insights span{
  display:grid;
  gap:2px;
  padding:9px;
  border-radius:16px;
  background:color-mix(in srgb,var(--muted,#64748b) 7%,transparent);
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:850;
}

.invoice-insights b{
  color:var(--text,#111827);
  font-size:12px;
  font-weight:1000;
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

.safety-note{
  display:grid;
  gap:3px;
  margin-bottom:10px;
  padding:10px;
  border-radius:18px;
  background:color-mix(
    in srgb,
    var(--card-bg,var(--surface,#fff)) 88%,
    var(--ba-primary) 12%
  );
  border:1px solid var(--border,rgba(0,0,0,.10));
  color:var(--text,#111827);
  box-shadow:0 12px 28px rgba(15,23,42,.045);
}

.safety-note strong{
  color:var(--text,#111827);
  font-size:12px;
  font-weight:1000;
}

.safety-note span{
  color:color-mix(in srgb,var(--text,#111827) 74%,var(--muted,#64748b) 26%);
  font-size:11px;
  line-height:1.45;
  font-weight:800;
}

:global(html[data-theme="dark"]) .safety-note,
:global(html.dark) .safety-note{
  background:color-mix(
    in srgb,
    var(--card-bg,var(--surface,#111827)) 84%,
    var(--ba-primary) 16%
  );
  border-color:var(--border,rgba(255,255,255,.16));
  color:var(--text,#fff);
}

:global(html[data-theme="dark"]) .safety-note strong,
:global(html.dark) .safety-note strong{
  color:var(--text,#fff);
}

:global(html[data-theme="dark"]) .safety-note span,
:global(html.dark) .safety-note span{
  color:color-mix(in srgb,var(--text,#fff) 82%,var(--muted,rgba(255,255,255,.72)) 18%);
}

@media(min-width:680px){
  .ba-page{
    padding:calc(12px * var(--local-density-scale,1));
  }

  .ba-list{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .invoice-row{
    min-height:68px;
  }

  .analytics-grid{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .ba-form.compact{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
}

@media(min-width:1040px){
  .ba-list{
    grid-template-columns:repeat(3,minmax(0,1fr));
  }
}

@media(min-width:1280px){
  .ba-list{
    grid-template-columns:repeat(4,minmax(0,1fr));
  }

  .invoice-row{
    min-height:64px;
  }
}

@media(max-width:520px){
  .ba-search-card{
    gap:6px;
    padding:7px;
    border-radius:22px;
  }

  .invoice-insights{
    grid-template-columns:1fr;
  }
}
`,cM={paymentId:"",receiptNumber:"",paidAt:"",note:""};function cN(a,b="GHS"){return new Intl.NumberFormat("en-GH",{style:"currency",currency:b||"GHS",maximumFractionDigits:0}).format(Number(a||0))}function cO(a){if(!a)return"Not set";let b=new Date(a);return Number.isNaN(b.getTime())?"Not set":b.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"2-digit"})}function cP(a){if(!a)return"Not set";let b=new Date(a);return Number.isNaN(b.getTime())?"Not set":b.toLocaleString("en-GB",{day:"2-digit",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"})}function cQ(a){return String(a||"pending").toLowerCase()}function cR(a){return String(a||"manual").toLowerCase()}function cS(a){let b=cQ(a);return"paid"===b?"green":["failed","cancelled"].includes(b)?"red":["pending","processing"].includes(b)?"orange":"refunded"===b?"purple":"gray"}function cT(a){let b=cR(a);return"momo"===b?"\uD83D\uDCF1":"card"===b?"\uD83D\uDCB3":"bank"===b?"\uD83C\uDFE6":"cash"===b?"\uD83D\uDCB5":"\uD83E\uDDFE"}function cU(a){return a.receiptNumber||a.providerReference||a.invoice?.invoiceNumber||`Payment ${a.id?.slice(0,8)||""}`}function cV(a){let b=cQ(a.status),c=cR(a.method),d=String(a.provider||"").toLowerCase();return["pending","processing"].includes(b)&&["cash","bank","manual"].includes(c)&&(!d||"manual"===d||"cash"===d||"bank"===d)}function cW(...a){let b=o.db;for(let c of a)if(b[c])return b[c];return null}async function cX(...a){let b=cW(...a);return b?.toArray?b.toArray():[]}async function cY(a){let b=cW("appPayments","payments");if(b?.put){for(let c of a)if(c?.id)try{await b.put(c)}catch{}}}function cZ(){(0,k.useRouter)();let{accountId:a,authenticated:b,loading:c}=(0,l.F)(),{settings:d,loading:e}=(0,m.t)(),h=d?.primaryColor||"var(--primary-color, #2563eb)",[i,j]=(0,g.useState)(!0),[n,o]=(0,g.useState)(!1),[p,q]=(0,g.useState)([]),[r,s]=(0,g.useState)("cards"),[t,u]=(0,g.useState)("all"),[v,w]=(0,g.useState)("all"),[x,y]=(0,g.useState)(""),[z,A]=(0,g.useState)(null),[B,C]=(0,g.useState)(cM),[D,E]=(0,g.useState)(""),[F,G]=(0,g.useState)(""),[H,I]=(0,g.useState)(!1),[J,K]=(0,g.useState)(!1);async function L(){if(!b||!a){q([]),j(!1);return}try{j(!0),E(""),G("");try{var c;let a=(c=await (0,bs.AT)("/billing/payments"),Array.isArray(c)?c:Array.isArray(c?.data)?c.data:Array.isArray(c?.items)?c.items:Array.isArray(c?.payments)?c.payments:Array.isArray(c?.rows)?c.rows:Array.isArray(c?.results)?c.results:[]);q(a),await cY(a)}catch{let b=await cX("appPayments","payments");q(b.filter(b=>!b.accountId||b.accountId===a)),E("Live billing server was not available, so this page is showing the latest payment data saved on this device.")}}finally{j(!1)}}let M=(0,g.useMemo)(()=>{let a=x.trim().toLowerCase();return p.filter(b=>{let c=cQ(b.status),d=cR(b.method);return("all"===t||c===t)&&("all"===v||d===v)&&(!a||`${b.receiptNumber||""} ${b.providerReference||""} ${b.payerName||""} ${b.payerPhone||""} ${b.payerEmail||""} ${b.status||""} ${b.method||""} ${b.provider||""} ${b.invoice?.invoiceNumber||""}`.toLowerCase().includes(a))})},[v,p,x,t]),N=p[0]?.currency||"GHS",O=(0,g.useMemo)(()=>{let a=p.filter(a=>"paid"===cQ(a.status)),b=p.filter(a=>["pending","processing"].includes(cQ(a.status))),c=p.filter(a=>["failed","cancelled"].includes(cQ(a.status))),d=p.filter(a=>"refunded"===cQ(a.status));return{payments:p.length,collected:a.reduce((a,b)=>a+Number(b.amount||0),0),pending:b.reduce((a,b)=>a+Number(b.amount||0),0),failed:c.length,refunded:d.reduce((a,b)=>a+Number(b.amount||0),0),manualConfirmable:p.filter(cV).length}},[p]),P=(0,g.useMemo)(()=>{let a=new Map;for(let b of p){let c=cQ(b.status),d=a.get(c)||{count:0,amount:0};d.count+=1,d.amount+=Number(b.amount||0),a.set(c,d)}return Array.from(a.entries()).map(([a,b])=>({name:a,...b})).sort((a,b)=>b.count-a.count)},[p]),Q=(0,g.useMemo)(()=>{let a=new Map;for(let b of p){let c=cR(b.method),d=a.get(c)||{count:0,amount:0};d.count+=1,d.amount+=Number(b.amount||0),a.set(c,d)}return Array.from(a.entries()).map(([a,b])=>({name:a,...b})).sort((a,b)=>b.amount-a.amount)},[p]),R=(0,g.useMemo)(()=>["all"!==t?t:"","all"!==v?v:""].filter(Boolean).length,[v,t]);function S(a){A(a),C({paymentId:a.id||"",receiptNumber:a.receiptNumber||`RCPT-${Date.now()}`,paidAt:new Date().toISOString().slice(0,10),note:a.note||""}),G("")}async function T(){if(!z?.id)return void G("Missing payment ID.");if(!cV(z))return void G("Only pending manual, cash, or bank payments can be confirmed from this page.");if(window.confirm(`Confirm this payment as paid?

${cU(z)}
${cN(z.amount,z.currency)}

This should only be done after money has truly been received.`))try{o(!0),G("");let a={receiptNumber:B.receiptNumber.trim()||void 0,paidAt:B.paidAt?new Date(B.paidAt).toISOString():void 0,note:B.note.trim()||void 0},b=await (0,bs.AT)(`/billing/payments/${encodeURIComponent(z.id)}/confirm`,{method:"PATCH",body:JSON.stringify(a)});await cY([b]),A(null),E("Payment confirmed. The backend should now reconcile the invoice and activate the subscription where applicable."),await L()}catch(a){G(a?.message||"Payment could not be confirmed.")}finally{o(!1)}}return c||e||i?(0,f.jsxs)("main",{className:"ba-page payments-page",style:{"--ba-primary":h},children:[(0,f.jsx)("style",{children:c5}),(0,f.jsxs)("section",{className:"ba-state",children:[(0,f.jsx)("div",{className:"ba-spinner"}),(0,f.jsx)("h2",{children:"Opening payments..."}),(0,f.jsx)("p",{children:"Loading payment records, receipts and confirmation status."})]})]}):(0,f.jsxs)("main",{className:"ba-page payments-page",style:{"--ba-primary":h},children:[(0,f.jsx)("style",{children:c5}),(0,f.jsxs)("section",{className:"ba-search-card","aria-label":"Payments search and actions",children:[(0,f.jsxs)("label",{className:"ba-search",children:[(0,f.jsx)("span",{children:"⌕"}),(0,f.jsx)("input",{placeholder:"Search payments...",value:x,onChange:a=>y(a.target.value),"aria-label":"Search payments"})]}),(0,f.jsx)("button",{type:"button",className:"ba-add-inline",onClick:L,"aria-label":"Refresh payments",title:"Refresh",children:"↻"}),(0,f.jsxs)("button",{type:"button",className:`ba-filter-button ${R?"active":""}`,onClick:()=>I(!0),"aria-label":"Open payment filters",title:"Filters",children:["☷",R?(0,f.jsx)("b",{children:R}):null]}),(0,f.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>K(!0),"aria-label":"More options",children:"⋯"})]}),D?(0,f.jsxs)("section",{className:"ba-slim-notice",children:[(0,f.jsx)("span",{className:"status-dot-mini orange"}),(0,f.jsx)("p",{children:D})]}):null,R>0&&(0,f.jsxs)("section",{className:"ba-filter-chips","aria-label":"Active payment filters",children:["all"!==t&&(0,f.jsxs)("button",{type:"button",onClick:()=>u("all"),children:["Status: ",t," \xd7"]}),"all"!==v&&(0,f.jsxs)("button",{type:"button",onClick:()=>w("all"),children:["Method: ",v," \xd7"]})]}),"analytics"===r&&(0,f.jsxs)("section",{className:"analytics-grid",children:[(0,f.jsx)(c4,{title:"Status Breakdown",items:P,total:p.length,currency:N}),(0,f.jsx)(c4,{title:"Method Breakdown",items:Q,total:p.length,currency:N})]}),"table"===r&&(0,f.jsx)("section",{className:"ba-table-card",children:(0,f.jsxs)("div",{className:"ba-table-scroll",children:[(0,f.jsxs)("table",{children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsxs)("th",{children:["Payments (",M.length,")"]}),(0,f.jsx)("th",{children:"Amount"}),(0,f.jsx)("th",{children:"Method"}),(0,f.jsx)("th",{children:"Payer"}),(0,f.jsx)("th",{children:"Invoice"}),(0,f.jsx)("th",{children:"Status"}),(0,f.jsx)("th",{children:"Paid At"}),(0,f.jsx)("th",{children:"Action"})]})}),(0,f.jsx)("tbody",{children:M.map(a=>(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{children:[(0,f.jsx)("strong",{children:cU(a)}),(0,f.jsx)("span",{children:a.providerReference||a.id||"No reference"})]}),(0,f.jsx)("td",{children:cN(a.amount,a.currency)}),(0,f.jsxs)("td",{children:[cT(a.method)," ",a.method||"manual"]}),(0,f.jsx)("td",{children:a.payerName||a.payerEmail||a.payerPhone||"Not set"}),(0,f.jsx)("td",{children:a.invoice?.invoiceNumber||a.invoiceId||"Not linked"}),(0,f.jsx)("td",{children:(0,f.jsx)(c1,{tone:cS(a.status),children:a.status||"pending"})}),(0,f.jsx)("td",{children:cO(a.paidAt||a.createdAt)}),(0,f.jsx)("td",{children:(0,f.jsx)("button",{className:"table-action",type:"button",onClick:()=>S(a),children:"Details"})})]},a.id||a.providerReference||a.receiptNumber))})]}),!M.length&&(0,f.jsx)("div",{className:"ba-empty-table",children:"No payment matches the selected filters."})]})}),"cards"===r&&(0,f.jsxs)("section",{className:"ba-list",children:[M.map(a=>(0,f.jsxs)("button",{type:"button",className:"payment-row",onClick:()=>S(a),children:[(0,f.jsx)("span",{className:"payment-avatar",children:cT(a.method)}),(0,f.jsxs)("span",{className:"payment-main",children:[(0,f.jsx)("strong",{children:cU(a)}),(0,f.jsxs)("small",{children:[cN(a.amount,a.currency)," \xb7 ",a.method||"manual"," \xb7 ",a.provider||"recorded"]}),(0,f.jsxs)("em",{children:[a.payerName||a.payerEmail||a.payerPhone||"No payer"," \xb7 ",cO(a.paidAt||a.createdAt)]})]}),(0,f.jsxs)("span",{className:"payment-side",children:[(0,f.jsx)("span",{className:`status-dot-mini ${cS(a.status)}`}),(0,f.jsx)("i",{children:"⋯"})]})]},a.id||a.providerReference||a.receiptNumber)),!M.length&&(0,f.jsx)(c3,{text:"No payment matches the selected filters."})]}),H&&(0,f.jsx)(c$,{statusFilter:t,methodFilter:v,setStatusFilter:u,setMethodFilter:w,clearFilters:function(){u("all"),w("all")},onClose:()=>I(!1)}),J&&(0,f.jsx)(c_,{viewMode:r,setViewMode:a=>{s(a),K(!1)},summary:O,currency:N,filteredCount:M.length,onRefresh:async()=>{K(!1),await L()},onClose:()=>K(!1)}),z&&(0,f.jsx)(c0,{payment:z,message:F,saving:n,confirmForm:B,setConfirmForm:C,confirmManualPayment:T,printReceipt:function(a){let b=`
      <html>
        <head>
          <title>${cU(a)}</title>
          <style>
            body{font-family:Arial,sans-serif;padding:24px;color:#111827}
            .receipt{max-width:520px;margin:auto;border:1px solid #e5e7eb;border-radius:18px;padding:22px}
            h1{margin:0 0 4px;font-size:24px}
            p{margin:4px 0;color:#4b5563}
            table{width:100%;border-collapse:collapse;margin-top:18px}
            td{padding:10px 0;border-bottom:1px solid #e5e7eb}
            td:last-child{text-align:right;font-weight:700;color:#111827}
            .status{display:inline-block;margin-top:12px;padding:7px 12px;border-radius:999px;background:#dcfce7;color:#166534;font-weight:800}
          </style>
        </head>
        <body>
          <div class="receipt">
            <h1>Eleeveon Schools Receipt</h1>
            <p>Owner account payment record</p>
            <span class="status">${a.status||"pending"}</span>
            <table>
              <tr><td>Receipt</td><td>${a.receiptNumber||"Not set"}</td></tr>
              <tr><td>Reference</td><td>${a.providerReference||"Not set"}</td></tr>
              <tr><td>Amount</td><td>${cN(a.amount,a.currency)}</td></tr>
              <tr><td>Method</td><td>${a.method||"Not set"}</td></tr>
              <tr><td>Provider</td><td>${a.provider||"manual"}</td></tr>
              <tr><td>Payer</td><td>${a.payerName||a.payerEmail||a.payerPhone||"Not set"}</td></tr>
              <tr><td>Invoice</td><td>${a.invoice?.invoiceNumber||a.invoiceId||"Not linked"}</td></tr>
              <tr><td>Paid At</td><td>${cP(a.paidAt||a.createdAt)}</td></tr>
            </table>
          </div>
          <script>window.print();</script>
        </body>
      </html>
    `,c=window.open("","_blank","width=720,height=800");c&&(c.document.write(b),c.document.close())},onClose:()=>A(null)})]})}function c$({statusFilter:a,methodFilter:b,setStatusFilter:c,setMethodFilter:d,clearFilters:e,onClose:g}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Filters"}),(0,f.jsx)("p",{children:"Filter payments by status and method."})]}),(0,f.jsx)("button",{type:"button",onClick:g,"aria-label":"Close filters",children:"✕"})]}),(0,f.jsxs)("div",{className:"ba-form compact",children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Status"}),(0,f.jsxs)("select",{value:a,onChange:a=>c(a.target.value),children:[(0,f.jsx)("option",{value:"all",children:"All statuses"}),(0,f.jsx)("option",{value:"pending",children:"Pending"}),(0,f.jsx)("option",{value:"processing",children:"Processing"}),(0,f.jsx)("option",{value:"paid",children:"Paid"}),(0,f.jsx)("option",{value:"failed",children:"Failed"}),(0,f.jsx)("option",{value:"refunded",children:"Refunded"}),(0,f.jsx)("option",{value:"cancelled",children:"Cancelled"})]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Method"}),(0,f.jsxs)("select",{value:b,onChange:a=>d(a.target.value),children:[(0,f.jsx)("option",{value:"all",children:"All methods"}),(0,f.jsx)("option",{value:"momo",children:"Momo"}),(0,f.jsx)("option",{value:"card",children:"Card"}),(0,f.jsx)("option",{value:"bank",children:"Bank"}),(0,f.jsx)("option",{value:"cash",children:"Cash"}),(0,f.jsx)("option",{value:"manual",children:"Manual"})]})]})]}),(0,f.jsxs)("div",{className:"ba-sheet-actions",children:[(0,f.jsx)("button",{type:"button",onClick:e,children:"Clear"}),(0,f.jsx)("button",{type:"button",className:"primary",onClick:g,children:"Apply"})]})]})})}function c_({viewMode:a,setViewMode:b,summary:c,currency:d,filteredCount:e,onRefresh:g,onClose:h}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Payments"}),(0,f.jsxs)("p",{children:[e," of ",c.payments," payment record(s) shown."]})]}),(0,f.jsx)("button",{type:"button",onClick:h,"aria-label":"Close menu",children:"✕"})]}),(0,f.jsxs)("div",{className:"payment-insights",children:[(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:cN(c.collected,d)}),"Collected"]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:cN(c.pending,d)}),"Pending"]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:c.failed}),"Failed"]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:c.manualConfirmable}),"Manual review"]})]}),(0,f.jsxs)("div",{className:"ba-menu-list",children:[(0,f.jsxs)("button",{type:"button",className:"cards"===a?"active":"",onClick:()=>b("cards"),children:[(0,f.jsx)("span",{children:"☰"}),(0,f.jsx)("b",{children:"List view"}),(0,f.jsx)("small",{children:"Compact payment rows"})]}),(0,f.jsxs)("button",{type:"button",className:"table"===a?"active":"",onClick:()=>b("table"),children:[(0,f.jsx)("span",{children:"☷"}),(0,f.jsx)("b",{children:"Table view"}),(0,f.jsx)("small",{children:"Dense laptop payment records"})]}),(0,f.jsxs)("button",{type:"button",className:"analytics"===a?"active":"",onClick:()=>b("analytics"),children:[(0,f.jsx)("span",{children:"◔"}),(0,f.jsx)("b",{children:"Analytics"}),(0,f.jsx)("small",{children:"Status and method breakdown"})]}),(0,f.jsxs)("button",{type:"button",onClick:g,children:[(0,f.jsx)("span",{children:"↻"}),(0,f.jsx)("b",{children:"Refresh"}),(0,f.jsx)("small",{children:"Reload payment data"})]})]})]})})}function c0({payment:a,message:b,saving:c,confirmForm:d,setConfirmForm:e,confirmManualPayment:g,printReceipt:h,onClose:i}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop detail-layer",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet detail-sheet",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:cU(a)}),(0,f.jsxs)("p",{children:[cN(a.amount,a.currency)," \xb7 ",a.status||"pending"]})]}),(0,f.jsx)("button",{type:"button",onClick:i,"aria-label":"Close payment details",children:"✕"})]}),b?(0,f.jsxs)("section",{className:"ba-slim-notice error",children:[(0,f.jsx)("span",{className:"status-dot-mini red"}),(0,f.jsx)("p",{children:b})]}):null,(0,f.jsxs)("section",{className:"safety-note",children:[(0,f.jsx)("strong",{children:"Financial safety rule"}),(0,f.jsx)("span",{children:"Gateway records should not be edited manually. Only pending manual, cash or bank payments can be confirmed here."})]}),(0,f.jsxs)("div",{className:"detail-grid",children:[(0,f.jsx)(c2,{label:"Amount",value:cN(a.amount,a.currency)}),(0,f.jsx)(c2,{label:"Status",value:a.status||"pending"}),(0,f.jsx)(c2,{label:"Method",value:a.method||"manual"}),(0,f.jsx)(c2,{label:"Provider",value:a.provider||"manual"}),(0,f.jsx)(c2,{label:"Reference",value:a.providerReference||"Not set"}),(0,f.jsx)(c2,{label:"Receipt",value:a.receiptNumber||"Not set"}),(0,f.jsx)(c2,{label:"Payer",value:a.payerName||a.payerEmail||a.payerPhone||"Not set"}),(0,f.jsx)(c2,{label:"Invoice",value:a.invoice?.invoiceNumber||a.invoiceId||"Not linked"}),(0,f.jsx)(c2,{label:"Subscription",value:a.subscription?.plan?.name||a.subscriptionId||"Not linked"}),(0,f.jsx)(c2,{label:"Created",value:cP(a.createdAt)}),(0,f.jsx)(c2,{label:"Paid At",value:cP(a.paidAt)}),(0,f.jsx)(c2,{label:"Note",value:a.note||"No note",wide:!0})]}),cV(a)&&(0,f.jsxs)("section",{className:"confirm-box",children:[(0,f.jsxs)("div",{className:"section-mini-head",children:[(0,f.jsx)("strong",{children:"Manual confirmation"}),(0,f.jsx)("small",{children:"Confirm only after receiving the money."})]}),(0,f.jsxs)("div",{className:"ba-form compact",children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Receipt Number"}),(0,f.jsx)("input",{value:d.receiptNumber,onChange:a=>e(b=>({...b,receiptNumber:a.target.value}))})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Paid At"}),(0,f.jsx)("input",{type:"date",value:d.paidAt,onChange:a=>e(b=>({...b,paidAt:a.target.value}))})]}),(0,f.jsxs)("label",{className:"wide",children:[(0,f.jsx)("span",{children:"Confirmation Note"}),(0,f.jsx)("textarea",{value:d.note,onChange:a=>e(b=>({...b,note:a.target.value}))})]})]})]}),(0,f.jsxs)("div",{className:"ba-sheet-actions sticky",children:[(0,f.jsx)("button",{type:"button",onClick:()=>h(a),children:"Print Receipt"}),cV(a)&&(0,f.jsx)("button",{type:"button",className:"primary",disabled:c,onClick:g,children:c?"Confirming...":"Confirm Payment"})]})]})})}function c1({children:a,tone:b="gray"}){return(0,f.jsx)("span",{className:`ba-chip ${b}`,children:a})}function c2({label:a,value:b,wide:c}){return(0,f.jsxs)("div",{className:`detail-item ${c?"wide":""}`,children:[(0,f.jsx)("span",{children:a}),(0,f.jsx)("strong",{children:b})]})}function c3({text:a}){return(0,f.jsxs)("section",{className:"ba-empty",children:[(0,f.jsx)("div",{className:"ba-empty-icon",children:"\uD83D\uDCB3"}),(0,f.jsx)("h3",{children:"No records found"}),(0,f.jsx)("p",{children:a})]})}function c4({title:a,items:b,total:c,currency:d}){return(0,f.jsxs)("section",{className:"analytics-card",children:[(0,f.jsxs)("div",{className:"section-mini-head",children:[(0,f.jsx)("strong",{children:a}),(0,f.jsxs)("small",{children:[b.length," group(s)"]})]}),(0,f.jsxs)("div",{className:"breakdown-list",children:[b.map(a=>(0,f.jsxs)("article",{className:"breakdown-row",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:a.name}),(0,f.jsx)("small",{children:cN(a.amount,d)})]}),(0,f.jsx)("span",{children:a.count}),(0,f.jsx)("div",{className:"bar-track",children:(0,f.jsx)("i",{style:{width:`${c?Math.round(a.count/c*100):0}%`}})})]},a.name)),!b.length&&(0,f.jsx)(c3,{text:`No ${a.toLowerCase()} available.`})]})]})}let c5=`
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
    radial-gradient(circle at top left,color-mix(in srgb,var(--ba-primary) 9%,transparent),transparent 30rem),
    var(--bg,#f7f8fb);
  color:var(--text,#111827);
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

.ba-page button{
  -webkit-tap-highlight-color:transparent;
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

.ba-page textarea{
  min-height:86px;
  resize:vertical;
  padding-top:10px;
}

.ba-state,
.ba-search-card,
.ba-slim-notice,
.payment-row,
.ba-table-card,
.analytics-card,
.breakdown-row,
.ba-empty,
.ba-sheet,
.safety-note,
.confirm-box,
.detail-item{
  background:var(--card-bg,var(--surface,#fff));
  border:1px solid var(--border,rgba(0,0,0,.10));
  box-shadow:0 12px 28px rgba(15,23,42,.045);
}

.ba-state{
  min-height:min(420px,calc(100dvh - 32px));
  width:min(520px,100%);
  margin:0 auto;
  display:grid;
  place-items:center;
  align-content:center;
  gap:10px;
  padding:22px;
  border-radius:28px;
  text-align:center;
}

.ba-spinner{
  width:38px;
  height:38px;
  border-radius:999px;
  border:4px solid color-mix(in srgb,var(--ba-primary) 18%,transparent);
  border-top-color:var(--ba-primary);
  animation:spin .8s linear infinite;
}

.ba-state h2{
  margin:0;
  font-size:22px;
  font-weight:1000;
  letter-spacing:-.04em;
}

.ba-state p{
  margin:0;
  color:var(--muted,#64748b);
  font-size:13px;
  line-height:1.6;
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
  min-height:42px;
  border:0;
  padding:0;
  border-radius:0;
  background:transparent;
  box-shadow:none;
  font-size:14px;
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
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-size:15px;
  font-weight:1000;
  cursor:pointer;
  box-shadow:0 10px 22px rgba(15,23,42,.045);
}

.ba-add-inline{
  border-color:var(--ba-primary);
  background:var(--ba-primary);
  color:#fff;
  font-size:18px;
}

.ba-filter-button{
  position:relative;
  color:var(--ba-primary);
  background:color-mix(in srgb,var(--ba-primary) 8%,var(--card-bg,#fff));
}

.ba-filter-button.active{
  background:var(--ba-primary);
  color:#fff;
  border-color:var(--ba-primary);
}

.ba-filter-button b{
  position:absolute;
  top:-4px;
  right:-4px;
  min-width:19px;
  height:19px;
  display:grid;
  place-items:center;
  border-radius:999px;
  background:#ef4444;
  color:#fff;
  font-size:10px;
  border:2px solid var(--card-bg,#fff);
}

.ba-icon-button{
  width:42px;
  font-size:18px;
}

.ba-slim-notice{
  display:grid;
  grid-template-columns:auto minmax(0,1fr);
  align-items:center;
  gap:9px;
  margin-top:8px;
  border-radius:17px;
  padding:8px 10px;
  color:#92400e;
  background:rgba(245,158,11,.1);
  border-color:rgba(245,158,11,.24);
}

.ba-slim-notice.error{
  color:#991b1b;
  background:rgba(239,68,68,.10);
  border-color:rgba(239,68,68,.20);
}

.ba-slim-notice p{
  margin:0;
  font-size:11px;
  line-height:1.35;
  font-weight:850;
}

.ba-filter-chips{
  display:flex;
  gap:7px;
  overflow-x:auto;
  padding:8px 1px 0;
  scrollbar-width:none;
  -ms-overflow-style:none;
}

.ba-filter-chips::-webkit-scrollbar{display:none}

.ba-filter-chips button{
  flex:0 0 auto;
  min-height:31px;
  border:0;
  border-radius:999px;
  padding:0 10px;
  background:color-mix(in srgb,var(--ba-primary) 11%,transparent);
  color:var(--ba-primary);
  font-size:11px;
  font-weight:950;
  white-space:nowrap;
  cursor:pointer;
}

.ba-list,
.analytics-grid,
.breakdown-list{
  display:grid;
  gap:7px;
  margin-top:10px;
}

.payment-row{
  width:100%;
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto;
  align-items:center;
  gap:8px;
  padding:8px;
  border-radius:18px;
  color:var(--text,#111827);
  text-align:left;
  cursor:pointer;
}

.payment-avatar{
  width:34px;
  height:34px;
  display:grid;
  place-items:center;
  border-radius:14px;
  background:linear-gradient(135deg,var(--ba-primary),rgba(15,23,42,.9));
  color:#fff;
  font-size:15px;
  box-shadow:0 8px 18px rgba(15,23,42,.10);
}

.payment-main{
  display:grid;
  gap:1px;
  min-width:0;
}

.payment-main strong,
.payment-main small,
.payment-main em{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.payment-main strong{
  font-size:13px;
  font-weight:1000;
  line-height:1.15;
}

.payment-main small,
.payment-main em{
  color:var(--muted,#64748b);
  font-size:10.5px;
  font-style:normal;
  font-weight:800;
  line-height:1.22;
}

.payment-side{
  display:flex;
  align-items:center;
  gap:6px;
}

.payment-side i{
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
.status-dot-mini.blue{background:#3b82f6;box-shadow:0 0 0 3px rgba(59,130,246,.13)}
.status-dot-mini.purple{background:#9333ea;box-shadow:0 0 0 3px rgba(147,51,234,.13)}
.status-dot-mini.gray{background:var(--muted,#64748b)}

.ba-chip{
  display:inline-flex;
  align-items:center;
  min-height:24px;
  padding:0 9px;
  border-radius:999px;
  font-size:11px;
  font-weight:950;
  text-transform:capitalize;
}

.ba-chip.green{background:rgba(34,197,94,.11);color:#15803d}
.ba-chip.red{background:rgba(239,68,68,.1);color:#dc2626}
.ba-chip.blue{background:rgba(37,99,235,.1);color:#1d4ed8}
.ba-chip.orange{background:rgba(245,158,11,.12);color:#b45309}
.ba-chip.purple{background:rgba(124,58,237,.1);color:#6d28d9}
.ba-chip.gray{background:rgba(100,116,139,.1);color:#64748b}

.ba-table-card{
  margin-top:10px;
  padding:10px;
  border-radius:24px;
}

.ba-table-scroll{
  overflow-x:auto;
  border-radius:18px;
  border:1px solid var(--border,rgba(0,0,0,.08));
}

.ba-table-scroll table{
  width:100%;
  min-width:940px;
  border-collapse:collapse;
}

.ba-table-scroll th,
.ba-table-scroll td{
  padding:10px;
  text-align:left;
  border-bottom:1px solid var(--border,rgba(0,0,0,.08));
  vertical-align:top;
  font-size:12px;
}

.ba-table-scroll th{
  color:var(--muted,#64748b);
  font-size:11px;
  font-weight:950;
  text-transform:uppercase;
  letter-spacing:.06em;
  background:color-mix(in srgb,var(--ba-primary) 5%,transparent);
}

.ba-table-scroll td strong,
.ba-table-scroll td span{
  display:block;
}

.ba-table-scroll td span{
  margin-top:3px;
  color:var(--muted,#64748b);
  font-size:11px;
}

.table-action{
  min-height:32px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:999px;
  padding:0 10px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
  font-size:11px;
  font-weight:950;
  cursor:pointer;
}

.ba-empty-table{
  padding:22px;
  text-align:center;
  color:var(--muted,#64748b);
  font-weight:850;
}

.analytics-grid{
  grid-template-columns:1fr;
}

.analytics-card{
  padding:10px;
  border-radius:22px;
}

.section-mini-head{
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  gap:10px;
  margin-bottom:8px;
}

.section-mini-head strong{
  font-size:13px;
  font-weight:1000;
}

.section-mini-head small{
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:850;
}

.breakdown-row{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto;
  gap:8px;
  padding:9px;
  border-radius:17px;
}

.breakdown-row strong,
.breakdown-row small{
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.breakdown-row strong{
  font-size:12px;
  font-weight:1000;
  text-transform:capitalize;
}

.breakdown-row small{
  margin-top:2px;
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:850;
}

.breakdown-row > span{
  font-size:12px;
  font-weight:1000;
}

.bar-track{
  grid-column:1/-1;
  height:8px;
  border-radius:999px;
  background:color-mix(in srgb,var(--muted,#64748b) 16%,transparent);
  overflow:hidden;
}

.bar-track i{
  display:block;
  height:100%;
  border-radius:inherit;
  background:var(--ba-primary);
}

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
  background:color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));
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

.ba-sheet-backdrop{
  position:fixed;
  inset:0;
  z-index:80;
  background:rgba(2,6,23,.46);
  display:grid;
  align-items:end;
  padding:10px;
}

.ba-sheet{
  width:min(540px,100%);
  max-height:92dvh;
  overflow-y:auto;
  margin:0 auto;
  border-radius:28px 28px 20px 20px;
  padding:14px;
  background:var(--card-bg,var(--surface,#fff));
  color:var(--text,#111827);
}

.ba-sheet.small{
  width:min(440px,100%);
}

.detail-sheet{
  width:min(720px,100%);
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
  overflow-wrap:anywhere;
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

.ba-form{
  display:grid;
  grid-template-columns:1fr;
  gap:9px;
}

.ba-form label{
  display:grid;
  gap:5px;
  min-width:0;
}

.ba-form label.wide{
  grid-column:1/-1;
}

.ba-form span{
  color:var(--muted,#64748b);
  font-size:11px;
  font-weight:950;
}

.ba-sheet-actions{
  display:flex;
  justify-content:flex-end;
  flex-wrap:wrap;
  gap:8px;
  margin-top:12px;
}

.ba-sheet-actions.sticky{
  position:sticky;
  bottom:-14px;
  padding-top:10px;
  background:linear-gradient(to top,var(--card-bg,var(--surface,#fff)) 76%,transparent);
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

.payment-insights{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:7px;
  margin-bottom:10px;
}

.payment-insights span{
  display:grid;
  gap:2px;
  padding:9px;
  border-radius:16px;
  background:color-mix(in srgb,var(--muted,#64748b) 7%,transparent);
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:850;
}

.payment-insights b{
  color:var(--text,#111827);
  font-size:12px;
  font-weight:1000;
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

.safety-note{
  display:grid;
  gap:3px;
  margin-bottom:10px;
  padding:10px;
  border-radius:18px;
  background:color-mix(in srgb,var(--ba-primary) 8%,var(--card-bg,#fff));
}

.safety-note strong{
  font-size:12px;
  font-weight:1000;
}

.safety-note span{
  color:var(--muted,#64748b);
  font-size:11px;
  line-height:1.45;
  font-weight:800;
}

.detail-grid{
  display:grid;
  grid-template-columns:1fr;
  gap:8px;
}

.detail-item{
  min-width:0;
  padding:9px;
  border-radius:17px;
  background:color-mix(in srgb,var(--muted,#64748b) 5%,transparent);
}

.detail-item span{
  display:block;
  color:var(--muted,#64748b);
  font-size:10px;
  font-weight:950;
  text-transform:uppercase;
  letter-spacing:.05em;
}

.detail-item strong{
  display:block;
  margin-top:3px;
  font-size:12px;
  font-weight:1000;
  overflow-wrap:anywhere;
}

.confirm-box{
  display:grid;
  gap:8px;
  margin-top:10px;
  padding:10px;
  border-radius:20px;
}

@media(min-width:680px){
  .ba-page{
    padding:calc(12px * var(--local-density-scale,1));
  }

  .ba-list{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .payment-row{
    min-height:68px;
  }

  .analytics-grid{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .detail-grid,
  .ba-form.compact{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .detail-item.wide{
    grid-column:1/-1;
  }
}

@media(min-width:1040px){
  .ba-list{
    grid-template-columns:repeat(3,minmax(0,1fr));
  }
}

@media(min-width:1280px){
  .ba-list{
    grid-template-columns:repeat(4,minmax(0,1fr));
  }

  .payment-row{
    min-height:64px;
  }
}

@media(max-width:520px){
  .ba-search-card{
    gap:6px;
    padding:7px;
    border-radius:22px;
  }

  .payment-insights{
    grid-template-columns:1fr;
  }
}
`;var c6=c(88744);let c7=["schools","branches","academicStructures","academicPeriods","organizations","students","teachers","parents","studentParents","classes","subjects","programs","curriculums","curriculumPathways","curriculumSubjects","classSubjects","subjectPrerequisites","studentCurriculums","subjectOfferings","assignments","classTeachers","studentEnrollments","assessmentApplicabilities","gradingSystems","gradeRules","assessmentStructures","assessmentStructureItems","assessmentComponents","assessmentEntries","computedResults","attendance","teacherAttendance","reportCards","reportCardItems","studentReportSnapshots","studentPromotions","feeStructures","payments","income","expenses","currencies","schoolCurrencySettings","paymentIntents","paymentTransactions","paymentProviderEvents","paymentRefunds","studentFeeInvoices","studentFeeInvoiceItems","studentFeePayments","staffPayrollProfiles","payrollRuns","payrollItems","staffPaymentRecords","announcements","announcementRecipients","messageThreads","messages","communicationLogs","notificationTemplates","schoolBranchSettings","calendarEvents","calendarEventParticipants","calendarEventReminders","calendarEventResponses","scheduleTimetables","scheduleSessions","scheduleResources","scheduleConflicts"],c8=["users","appUsers","accountUsers","userMemberships","memberships","permissionRules","accounts","accountSubscriptions","subscriptionPlans","invoices","appPayments","billingEvents","syncDevices","syncConflicts","apiClients","apiKeys","webhooks","webhookLogs","integrationMappings","auditLogs","backgroundJobs","storageUsage","accountFeatureFlags","accountSystemSettings","notificationDeliveryLogs"],c9=a=>String(a||"").trim(),da=a=>Array.from(new Set(a)).filter(Boolean),db=a=>o.db[a]||null;async function dc(a){let b=db(a);return b?.toArray?b.toArray():[]}function dd(a,b){return!!a&&!0!==a.isDeleted&&(!a.accountId||a.accountId===b)}function de(a){return String(a?.syncStatus??a?.synced??a?.status??"").toLowerCase()}function df(a){return["pending","local","dirty","queued","unsynced"].includes(de(a))||a?.synced===!1}function dg(a){return["synced","success","clean","done"].includes(de(a))||a?.synced===!0}function dh(a){if(!a)return 0;if("number"==typeof a)return a;if("bigint"==typeof a)return Number(a);let b=new Date(a).getTime();return Number.isFinite(b)?b:0}function di(a){return c9(a.deviceName||a.userAgent||a.ua||a.deviceId||a.id)}function dj(a){let b=a||"",c=b.toLowerCase(),d=b.match(/(Chrome|CriOS|Edg|Firefox|FxiOS|Safari|OPR)\/?\s*(\d+)?/i),e=d?.[1]?d[1].replace("CriOS","Chrome").replace("FxiOS","Firefox").replace("Edg","Edge").replace("OPR","Opera"):"Browser",f=d?.[2]||"",g="Unknown",h="\uD83D\uDCF1",i="Device";if(c.includes("windows nt"))g="Windows",h="\uD83D\uDCBB",i="Windows PC";else if(c.includes("android")){let a=b.match(/Android[^;)]*;\s*([^;)]+?)(?:\s+Build|\)|;)/i)?.[1]?.trim();g="Android",h="\uD83D\uDCF1",i=a?`Android \xb7 ${a}`:"Android Phone"}else c.includes("iphone")?(g="iOS",h="\uD83D\uDCF1",i="iPhone"):c.includes("ipad")?(g="iPadOS",h="\uD83D\uDCF1",i="iPad"):c.includes("mac os")||c.includes("macintosh")?(g="macOS",h="\uD83D\uDCBB",i="Mac"):c.includes("linux")&&(g="Linux",h="\uD83D\uDCBB",i="Linux Device");return{icon:h,os:g,label:i,browser:`${e}${f?` ${f}`:""}`,browserKey:`${e.toLowerCase()}:${f||"x"}`}}function dk(a){let b=dj(di(a)),c=c9(a.deviceName),d=/^mozilla\//i.test(c)||c.length>80,e=c&&!d?c:b.label,f=c9(a.platform),g=c9(a.appVersion),h=Number(a.__userCount||+!!a.userId);return{...b,name:e,subtitle:`${b.browser}${f?` \xb7 ${f}`:""}${g?` \xb7 App ${g}`:""}${h>1?` \xb7 ${h} users`:""}`,userLabel:h>1?`${h} linked users`:a.userId?`User ${a.userId}`:"No linked user"}}function dl(a){let b=di(a).toLowerCase().replace(/\s+/g," ").trim(),c=dj(b),d=c9(a.platform).toLowerCase();if(b.includes("mozilla/")||b.includes("chrome")||b.includes("android")||b.includes("windows nt"))return`ua:${c.os.toLowerCase()}:${c.browserKey}:${d||"platform"}:${c.label.toLowerCase()}`;let e=c9(a.deviceId);if(e)return`device:${e.toLowerCase()}`;let f=c9(a.deviceName).toLowerCase();return`fallback:${f||"unknown"}:${d||"unknown"}`}function dm(a){let b=dh(a);if(!b)return"Not set";try{return new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(b))}catch{return"Not set"}}function dn(a,b){return b>0?"red":a>0?"orange":"green"}function dp(a){try{return new Intl.NumberFormat("en-GH").format(a)}catch{return String(a)}}function dq({children:a,tone:b="gray"}){return(0,f.jsx)("span",{className:`ba-chip ${b}`,children:a})}function dr(){var a;(0,k.useRouter)();let{accountId:b,authenticated:c,loading:d}=(0,l.F)(),{settings:e,loading:h}=(0,m.t)(),i=e?.primaryColor||"var(--primary-color, #2563eb)",[j,n]=(0,g.useState)(!0),[o,p]=(0,g.useState)(!1),[q,r]=(0,g.useState)(!1),[s,t]=(0,g.useState)("cards"),[u,v]=(0,g.useState)("all"),[w,x]=(0,g.useState)("school"),[y,z]=(0,g.useState)(""),[A,B]=(0,g.useState)(!1),[C,D]=(0,g.useState)(!1),[E,F]=(0,g.useState)(null),[G,H]=(0,g.useState)(null),[I,J]=(0,g.useState)(null),[K,L]=(0,g.useState)([]),[M,N]=(0,g.useState)([]),[O,P]=(0,g.useState)([]),Q=(a,b)=>{J({tone:a,message:b}),window.setTimeout(()=>J(a=>a?.message===b?null:a),4200)};async function R(){if(!c||!b)return void n(!1);try{var a;let c;n(!0);let d=(await dc("syncConflicts")).filter(a=>!a.accountId||a.accountId===b),e=new Map;d.forEach(a=>{let b,c,d=c9(a.tableName);d&&(a.status&&"open"!==(b=a.status,c9(b).toLowerCase())&&"pending"!==(c=a.status,c9(c).toLowerCase())||e.set(d,(e.get(d)||0)+1))});let f=[],g=async(a,c)=>{let d=db(a);if(!d?.toArray)return;let g=(await d.toArray()).filter(a=>dd(a,b));f.push({tableName:a,category:c,total:g.length,pending:g.filter(df).length,synced:g.filter(dg).length,deleted:g.filter(a=>!0===a.isDeleted).length,conflicts:e.get(a)||0,latestUpdatedAt:g.reduce((a,b)=>Math.max(a,dh(b.updatedAt||b.createdAt)),0)})};for(let a of da(c7))await g(a,"school");for(let a of da(c8))await g(a,"platform");L(f.sort((a,b)=>b.pending-a.pending||b.conflicts-a.conflicts||b.total-a.total||a.tableName.localeCompare(b.tableName))),N((a=(await dc("syncDevices")).filter(a=>!a.accountId||a.accountId===b),c=new Map,a.forEach(a=>{let b,d,e=dl(a),f=c.get(e);c.set(e,f?(b=new Set,[f.userId,a.userId,...f.__users||[],...a.__users||[]].forEach(a=>{let c=c9(a);c&&b.add(c)}),d=dh(a.lastSeenAt||a.updatedAt||a.createdAt)>=dh(f.lastSeenAt||f.updatedAt||f.createdAt)?a:f,{...f,...d,active:!1!==f.active||!1!==a.active,__users:Array.from(b),__userCount:b.size}):{...a,__users:a.userId?[a.userId]:[],__userCount:+!!a.userId})}),Array.from(c.values()).sort((a,b)=>{let c=dh(b.lastSeenAt||b.updatedAt||b.createdAt),d=dh(a.lastSeenAt||a.updatedAt||a.createdAt),e=dk(a).name,f=dk(b).name;return c-d||e.localeCompare(f)}))),P(d.sort((a,b)=>dh(b.updatedAt||b.createdAt)-dh(a.updatedAt||a.createdAt)))}catch(a){Q("error",a?.message||"Unable to read local sync and backup data.")}finally{n(!1)}}let S=(0,g.useMemo)(()=>{let a=K.reduce((a,b)=>a+b.total,0),b=K.reduce((a,b)=>a+b.pending,0),c=K.reduce((a,b)=>a+b.synced,0),d=K.reduce((a,b)=>a+b.deleted,0),e=K.reduce((a,b)=>Math.max(a,b.latestUpdatedAt||0),0),f=O.filter(a=>!a.status||["open","pending"].includes(c9(a.status).toLowerCase())).length;return{tables:K.length,schoolTables:K.filter(a=>"school"===a.category).length,platformTables:K.filter(a=>"platform"===a.category).length,totalRecords:a,pending:b,synced:c,deleted:d,devices:M.length,openConflicts:f,latest:e,healthTone:dn(b,f),healthLabel:f?"Conflicts":b?"Pending":"Healthy"}},[O,M.length,K]),T=(0,g.useMemo)(()=>+("all"!==u),[u]),U=(0,g.useMemo)(()=>{let a=y.trim().toLowerCase();return K.filter(b=>("pending"!==u||!(b.pending<=0))&&("synced"!==u||!(b.synced<=0))&&("deleted"!==u||!(b.deleted<=0))&&("conflicts"!==u||!(b.conflicts<=0))&&("empty"!==u||!(b.total>0))&&(!a||`${b.tableName} ${b.category}`.toLowerCase().includes(a)))},[u,y,K]),V=(0,g.useMemo)(()=>{let a=y.trim().toLowerCase();return O.filter(b=>!a||`${b.tableName||""} ${b.status||""} ${b.deviceId||""} ${b.cloudId||""} ${b.localId||""}`.toLowerCase().includes(a))},[O,y]),W=(0,g.useMemo)(()=>[{label:"School tables",value:S.schoolTables},{label:"Platform cache",value:S.platformTables},{label:"Pending records",value:S.pending},{label:"Synced records",value:S.synced},{label:"Deleted records",value:S.deleted},{label:"Open conflicts",value:S.openConflicts}],[S]);async function X(){if(!c||!b)return void Q("error","Sign in before running sync.");try{p(!0),Q("info","Sync request started.");try{await (0,bs.AT)("/sync/push",{method:"POST",body:JSON.stringify({accountId:b})}),Q("success","Sync request completed. Local health refreshed.")}catch(a){Q("error",a?.message||"Live sync endpoint was unavailable. Local records remain safe.")}await R()}finally{p(!1)}}async function Y(a=w){if(!b)return void Q("error","Sign in before exporting a backup.");try{var c,d;let e,f,g;r(!0);let h="school"===a?c7:"platform"===a?c8:[...c7,...c8],i={};for(let a of da(h)){let c=db(a);c?.toArray&&(i[a]=(await c.toArray()).filter(a=>dd(a,b)))}c=`eleeveon-${a}-backup-${Date.now()}.json`,d={accountId:b,scope:a,exportedAt:new Date().toISOString(),source:"Eleeveon Schools PWA local IndexedDB",tableCount:Object.keys(i).length,recordCount:Object.values(i).reduce((a,b)=>a+b.length,0),tables:i},e=new Blob([JSON.stringify(d,null,2)],{type:"application/json"}),f=URL.createObjectURL(e),(g=document.createElement("a")).href=f,g.download=c,g.click(),URL.revokeObjectURL(f),Q("success",`${"full"===a?"Full":"platform"===a?"Platform":"School"} backup exported.`)}catch(a){Q("error",a?.message||"Backup export failed.")}finally{r(!1)}}async function Z(a){let b=db("syncConflicts"),c=a.id;if(!b||null==c)return void Q("error","This conflict cannot be updated locally because it has no saved id.");try{let d={status:"reviewed",resolution:a.resolution||"Reviewed locally",updatedAt:new Date().toISOString()};b.update?await b.update(c,d):b.put&&await b.put({...a,...d}),H(null),Q("success","Conflict marked reviewed locally."),await R()}catch(a){Q("error",a?.message||"Unable to update conflict locally.")}}return d||h||j?(0,f.jsx)(ds,{primary:i,title:"Opening Sync & Backup...",text:"Reading local database health, sync queues, devices and conflicts."}):c&&b?(0,f.jsxs)("main",{className:"ba-page",style:{"--ba-primary":i},children:[(0,f.jsx)("style",{children:dE}),I&&(0,f.jsxs)("section",{className:`ba-toast ${I.tone}`,children:[I.message,(0,f.jsx)("button",{type:"button",onClick:()=>J(null),"aria-label":"Close notification",children:"✕"})]}),(0,f.jsxs)("section",{className:"ba-search-card","aria-label":"Sync and backup actions",children:[(0,f.jsxs)("label",{className:"ba-search",children:[(0,f.jsx)("span",{children:"⌕"}),(0,f.jsx)("input",{value:y,onChange:a=>z(a.target.value),placeholder:"Search sync tables...","aria-label":"Search sync tables"})]}),(0,f.jsx)("button",{type:"button",className:"ba-add-inline",onClick:X,disabled:o,"aria-label":"Run sync",title:"Run sync",children:o?"…":"↻"}),(0,f.jsxs)("button",{type:"button",className:`ba-filter-button ${T?"active":""}`,onClick:()=>B(!0),"aria-label":"Open filters",title:"Filters",children:[(0,f.jsx)(dt,{}),T?(0,f.jsx)("b",{children:T}):null]}),(0,f.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>D(!0),"aria-label":"More options",title:"More options",children:"⋯"})]}),T>0&&(0,f.jsx)("section",{className:"ba-filter-chips","aria-label":"Active filters",children:(0,f.jsxs)("button",{type:"button",onClick:()=>v("all"),children:["Filter: ","pending"===(a=u)?"Pending only":"synced"===a?"Synced only":"deleted"===a?"Deleted only":"conflicts"===a?"Conflicts only":"empty"===a?"Empty tables":"All tables"," \xd7"]})}),"cards"===s&&(0,f.jsxs)("section",{className:"ba-list",children:[U.map(a=>(0,f.jsx)(du,{row:a,onOpen:()=>F(a)},a.tableName)),!U.length&&(0,f.jsx)(dD,{icon:"☁️",title:"No sync tables found",text:"Try clearing filters or refreshing the local sync scan."})]}),"table"===s&&(0,f.jsx)(dv,{rows:U,conflicts:O,onOpen:F}),"devices"===s&&(0,f.jsx)(dw,{devices:M}),"conflicts"===s&&(0,f.jsx)(dx,{rows:V,onOpen:H}),"analytics"===s&&(0,f.jsx)(dy,{rows:W,total:Math.max(S.totalRecords,1)}),A&&(0,f.jsx)(dz,{filter:u,setFilter:v,onClose:()=>B(!1)}),C&&(0,f.jsx)(dA,{viewMode:s,setViewMode:a=>{t(a),D(!1)},backupScope:w,setBackupScope:x,onRefresh:async()=>{D(!1),await R()},onRunSync:async()=>{D(!1),await X()},onExport:async a=>{D(!1),await Y(a)},syncing:o,backingUp:q,onClose:()=>D(!1)}),E&&(0,f.jsx)(dB,{row:E,conflicts:O.filter(a=>a.tableName===E.tableName),onClose:()=>F(null)}),G&&(0,f.jsx)(dC,{conflict:G,onReviewed:Z,onClose:()=>H(null)})]}):(0,f.jsx)(ds,{primary:i,title:"Redirecting to login...",text:"You must sign in before viewing sync and backup tools."})}function ds({primary:a,title:b,text:c}){return(0,f.jsxs)("main",{className:"ba-page",style:{"--ba-primary":a},children:[(0,f.jsx)("style",{children:dE}),(0,f.jsxs)("section",{className:"ba-state",children:[(0,f.jsx)("div",{className:"ba-spinner"}),(0,f.jsx)("h2",{children:b}),(0,f.jsx)("p",{children:c})]})]})}function dt(){return(0,f.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,f.jsx)("path",{d:"M4 7h9"}),(0,f.jsx)("path",{d:"M17 7h3"}),(0,f.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,f.jsx)("path",{d:"M4 17h3"}),(0,f.jsx)("path",{d:"M11 17h9"}),(0,f.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function du({row:a,onOpen:b}){let c=dn(a.pending,a.conflicts);return(0,f.jsxs)("button",{type:"button",className:"student-row",onClick:b,children:[(0,f.jsx)("span",{className:`ba-sync-avatar ${c}`,children:"school"===a.category?"\uD83C\uDFEB":"⚙️"}),(0,f.jsxs)("span",{className:"student-main",children:[(0,f.jsx)("strong",{children:a.tableName}),(0,f.jsxs)("small",{children:[a.category," \xb7 ",dp(a.total)," record(s) \xb7 ",dm(a.latestUpdatedAt)]}),(0,f.jsxs)("em",{children:[a.pending," pending \xb7 ",a.synced," synced \xb7 ",a.conflicts," conflict(s)"]})]}),(0,f.jsxs)("span",{className:"student-side",children:[(0,f.jsx)("span",{className:`status-dot-mini ${c}`,title:c,"aria-label":c}),(0,f.jsx)("i",{children:"⋯"})]})]})}function dv({rows:a,conflicts:b,onOpen:c}){return(0,f.jsx)("section",{className:"ba-table-card",children:(0,f.jsxs)("div",{className:"ba-table-scroll",children:[(0,f.jsxs)("table",{children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsxs)("th",{children:["Tables (",a.length,")"]}),(0,f.jsx)("th",{children:"Category"}),(0,f.jsx)("th",{children:"Total"}),(0,f.jsx)("th",{children:"Pending"}),(0,f.jsx)("th",{children:"Synced"}),(0,f.jsx)("th",{children:"Deleted"}),(0,f.jsx)("th",{children:"Conflicts"}),(0,f.jsx)("th",{children:"Latest"}),(0,f.jsx)("th",{children:"Actions"})]})}),(0,f.jsx)("tbody",{children:a.map(a=>{let d=b.filter(b=>b.tableName===a.tableName).length;return(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{children:[(0,f.jsx)("strong",{children:a.tableName}),(0,f.jsxs)("span",{children:[a.category," table"]})]}),(0,f.jsx)("td",{children:(0,f.jsx)(dq,{tone:"school"===a.category?"blue":"purple",children:a.category})}),(0,f.jsx)("td",{children:a.total}),(0,f.jsx)("td",{children:(0,f.jsx)(dq,{tone:a.pending?"orange":"gray",children:a.pending})}),(0,f.jsx)("td",{children:(0,f.jsx)(dq,{tone:a.synced?"green":"gray",children:a.synced})}),(0,f.jsx)("td",{children:(0,f.jsx)(dq,{tone:a.deleted?"red":"gray",children:a.deleted})}),(0,f.jsx)("td",{children:(0,f.jsx)(dq,{tone:d?"red":"gray",children:d})}),(0,f.jsx)("td",{children:dm(a.latestUpdatedAt)}),(0,f.jsx)("td",{children:(0,f.jsx)("div",{className:"ba-table-actions",children:(0,f.jsx)("button",{type:"button",onClick:()=>c(a),children:"Open"})})})]},a.tableName)})})]}),!a.length&&(0,f.jsx)("div",{className:"ba-empty-table",children:"No table matches your filters."})]})})}function dw({devices:a}){return(0,f.jsxs)("section",{className:"ba-list",children:[a.map((a,b)=>{let c=dk(a),d=dm(a.lastSeenAt||a.updatedAt||a.createdAt);return(0,f.jsx)("article",{className:"ba-device-card compact",children:(0,f.jsxs)("div",{className:"ba-device-head",children:[(0,f.jsx)("span",{className:"ba-sync-avatar blue",children:c.icon}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:c.name}),(0,f.jsx)("p",{children:c.subtitle}),(0,f.jsxs)("em",{children:[c.userLabel," \xb7 Last seen ",d]})]}),(0,f.jsx)(dq,{tone:!1===a.active?"red":"green",children:!1===a.active?"Inactive":"Active"})]})},String(dl(a)||b))}),!a.length&&(0,f.jsx)(dD,{icon:"\uD83D\uDCF1",title:"No devices found",text:"No sync devices have been cached locally yet."})]})}function dx({rows:a,onOpen:b}){return(0,f.jsxs)("section",{className:"ba-list",children:[a.map((a,c)=>{let d=!a.status||["open","pending"].includes(c9(a.status).toLowerCase());return(0,f.jsxs)("button",{type:"button",className:"student-row",onClick:()=>b(a),children:[(0,f.jsx)("span",{className:`ba-sync-avatar ${d?"red":"green"}`,children:"!"}),(0,f.jsxs)("span",{className:"student-main",children:[(0,f.jsx)("strong",{children:a.tableName||"Unknown table"}),(0,f.jsxs)("small",{children:["Local #",a.localId||"—"," \xb7 Cloud ",a.cloudId||"not linked"]}),(0,f.jsxs)("em",{children:[a.deviceId||"No device"," \xb7 ",dm(a.createdAt)]})]}),(0,f.jsxs)("span",{className:"student-side",children:[(0,f.jsx)("span",{className:`status-dot-mini ${d?"red":"green"}`}),(0,f.jsx)("i",{children:"⋯"})]})]},String(a.id||`${a.tableName}-${a.localId}-${c}`))}),!a.length&&(0,f.jsx)(dD,{icon:"✅",title:"No conflicts found",text:"No sync conflicts match your search."})]})}function dy({rows:a,total:b}){return(0,f.jsx)("section",{className:"ba-analysis-grid",children:a.map(a=>{let c=b?Math.min(100,Math.round(a.value/b*100)):0;return(0,f.jsxs)("article",{className:"ba-analysis",children:[(0,f.jsx)("span",{children:a.label}),(0,f.jsx)("strong",{children:dp(a.value)}),(0,f.jsx)("div",{className:"ba-progress",children:(0,f.jsx)("i",{style:{width:`${c}%`}})})]},a.label)})})}function dz({filter:a,setFilter:b,onClose:c}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Filters"}),(0,f.jsx)("p",{children:"Keep the sync register focused."})]}),(0,f.jsx)("button",{type:"button",onClick:c,"aria-label":"Close filters",children:"✕"})]}),(0,f.jsx)("div",{className:"ba-menu-list",children:[{value:"all",label:"All tables",note:"Show every readable local table"},{value:"pending",label:"Pending only",note:"Tables with local changes waiting for sync"},{value:"synced",label:"Synced only",note:"Tables with synced records"},{value:"deleted",label:"Deleted only",note:"Tables containing soft-deleted rows"},{value:"conflicts",label:"Conflicts only",note:"Tables needing conflict review"},{value:"empty",label:"Empty tables",note:"Readable tables without account records"}].map(c=>(0,f.jsxs)("button",{type:"button",className:a===c.value?"active":"",onClick:()=>b(c.value),children:[(0,f.jsx)("span",{children:a===c.value?"✓":"⌁"}),(0,f.jsx)("b",{children:c.label}),(0,f.jsx)("small",{children:c.note})]},c.value))}),(0,f.jsxs)("div",{className:"ba-sheet-actions",children:[(0,f.jsx)("button",{type:"button",onClick:()=>b("all"),children:"Clear"}),(0,f.jsx)("button",{type:"button",className:"primary",onClick:c,children:"Apply"})]})]})})}function dA({viewMode:a,setViewMode:b,backupScope:c,setBackupScope:d,onRefresh:e,onRunSync:g,onExport:h,syncing:i,backingUp:j,onClose:k}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"More"}),(0,f.jsx)("p",{children:"Switch views, run sync, refresh or export a safe local backup."})]}),(0,f.jsx)("button",{type:"button",onClick:k,"aria-label":"Close more options",children:"✕"})]}),(0,f.jsxs)("div",{className:"ba-menu-list",children:[[{value:"cards",label:"Cards",note:"Compact table health register",icon:"▦"},{value:"table",label:"Table view",note:"Dense laptop-friendly records",icon:"☷"},{value:"devices",label:"Devices",note:"Cached sync devices",icon:"\uD83D\uDCF1"},{value:"conflicts",label:"Conflicts",note:"Rows needing review",icon:"!"},{value:"analytics",label:"Analytics",note:"Health distribution",icon:"◔"}].map(c=>(0,f.jsxs)("button",{type:"button",className:a===c.value?"active":"",onClick:()=>b(c.value),children:[(0,f.jsx)("span",{children:c.icon}),(0,f.jsx)("b",{children:c.label}),(0,f.jsx)("small",{children:c.note})]},c.value)),(0,f.jsxs)("button",{type:"button",onClick:g,disabled:i,children:[(0,f.jsx)("span",{children:"↻"}),(0,f.jsx)("b",{children:i?"Syncing":"Run sync"}),(0,f.jsx)("small",{children:"Ask backend to process local pending records"})]}),(0,f.jsxs)("button",{type:"button",onClick:e,children:[(0,f.jsx)("span",{children:"⟳"}),(0,f.jsx)("b",{children:"Refresh scan"}),(0,f.jsx)("small",{children:"Reload local tables, devices and conflicts"})]})]}),(0,f.jsxs)("section",{className:"ba-backup-picker",children:[(0,f.jsx)("span",{children:"Backup scope"}),(0,f.jsx)("div",{children:["school","platform","full"].map(a=>(0,f.jsx)("button",{type:"button",className:c===a?"active":"",onClick:()=>d(a),children:a},a))}),(0,f.jsx)("button",{type:"button",className:"ba-export-button",disabled:j,onClick:()=>h(c),children:j?"Preparing...":"Export backup"})]})]})})}function dB({row:a,conflicts:b,onClose:c}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-profile",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:a.tableName}),(0,f.jsxs)("p",{children:[a.category," table \xb7 latest ",dm(a.latestUpdatedAt)]})]}),(0,f.jsx)("button",{type:"button",onClick:c,"aria-label":"Close table details",children:"✕"})]}),(0,f.jsxs)("div",{className:"student-detail-strip",children:[(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Total"}),a.total]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Pending"}),a.pending]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Synced"}),a.synced]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Deleted"}),a.deleted]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Conflicts"}),b.length]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Status"}),dn(a.pending,b.length)]})]}),(0,f.jsx)("p",{className:"ba-sheet-note",children:"This screen summarizes IndexedDB records only. Use backup export before clearing local data or changing devices."})]})})}function dC({conflict:a,onReviewed:b,onClose:c}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-profile",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:a.tableName||"Unknown table"}),(0,f.jsxs)("p",{children:["Local #",a.localId||"—"," \xb7 Cloud ",a.cloudId||"not linked"]})]}),(0,f.jsx)("button",{type:"button",onClick:c,"aria-label":"Close conflict actions",children:"✕"})]}),(0,f.jsxs)("div",{className:"student-detail-strip",children:[(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Status"}),a.status||"open"]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Device"}),a.deviceId||"Not set"]}),(0,f.jsxs)("span",{children:[(0,f.jsx)("b",{children:"Created"}),dm(a.createdAt)]})]}),(0,f.jsx)("div",{className:"ba-menu-list",children:(0,f.jsxs)("button",{type:"button",onClick:()=>b(a),children:[(0,f.jsx)("span",{children:"✓"}),(0,f.jsx)("b",{children:"Mark reviewed locally"}),(0,f.jsx)("small",{children:"This does not resolve server truth; it only updates the local cache."})]})})]})})}function dD({icon:a,title:b,text:c}){return(0,f.jsxs)("section",{className:"ba-empty",children:[(0,f.jsx)("div",{className:"ba-empty-icon",children:a}),(0,f.jsx)("h3",{children:b}),(0,f.jsx)("p",{children:c})]})}let dE=`
@keyframes spin { to { transform: rotate(360deg); } }
.ba-page { --ease: cubic-bezier(.2,.8,.2,1); min-height: 100dvh; width: 100%; max-width: 100%; min-width: 0; padding: calc(8px * var(--local-density-scale, 1)); padding-bottom: max(40px, env(safe-area-inset-bottom)); background: radial-gradient(circle at top left, color-mix(in srgb, var(--ba-primary) 9%, transparent), transparent 30rem), var(--bg, #f7f8fb); color: var(--text, #111827); font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif); font-size: var(--font-size, 14px); overflow-x: hidden; }
.ba-page *, .ba-page *::before, .ba-page *::after { box-sizing: border-box; min-width: 0; }
.ba-page button, .ba-page input, .ba-page select { font: inherit; max-width: 100%; }
.ba-page button { -webkit-tap-highlight-color: transparent; }
.ba-page input, .ba-page select { width: 100%; min-height: 44px; border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10))); border-radius: 16px; padding: 0 12px; background: var(--input-bg, var(--surface, #fff)); color: var(--input-text, var(--text, #111827)); outline: none; font-weight: 750; }
.ba-page input:focus, .ba-page select:focus { border-color: color-mix(in srgb, var(--ba-primary) 52%, var(--border, rgba(0,0,0,.10))); box-shadow: 0 0 0 4px color-mix(in srgb, var(--ba-primary) 12%, transparent); }
.ba-state, .ba-search-card, .ba-table-card, .ba-analysis, .ba-empty, .ba-sheet, .student-row, .ba-device-card { background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); box-shadow: 0 12px 28px rgba(15,23,42,.045); }
.ba-state { min-height: min(420px, calc(100dvh - 32px)); width: min(520px, 100%); margin: 0 auto; display: grid; place-items: center; align-content: center; gap: 10px; padding: 22px; border-radius: 28px; text-align: center; }
.ba-spinner { width: 38px; height: 38px; border-radius: 999px; border: 4px solid color-mix(in srgb, var(--ba-primary) 18%, transparent); border-top-color: var(--ba-primary); animation: spin .8s linear infinite; }
.ba-state h2 { margin: 0; font-size: 22px; font-weight: 1000; letter-spacing: -.04em; }
.ba-state p { max-width: 34rem; margin: 0; color: var(--muted, #64748b); font-size: 13px; line-height: 1.6; }
.ba-toast { position: sticky; top: 8px; z-index: 40; display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; padding: 12px 14px; border-radius: 18px; font-size: 13px; font-weight: 850; box-shadow: 0 18px 40px rgba(15,23,42,.12); }
.ba-toast.success { background: rgba(34,197,94,.14); color: #166534; } .ba-toast.error { background: rgba(239,68,68,.12); color: #991b1b; } .ba-toast.info { background: rgba(59,130,246,.13); color: #1d4ed8; }
.ba-toast button { border: 0; background: transparent; color: currentColor; font-weight: 1000; cursor: pointer; }
.ba-icon-button, .ba-filter-button, .ba-add-inline { width: 42px; height: 42px; border: 1px solid var(--border, rgba(0,0,0,.10)); border-radius: 999px; display: grid; place-items: center; background: var(--card-bg, var(--surface,#fff)); color: var(--text,#111827); font-size: 18px; font-weight: 1000; cursor: pointer; box-shadow: 0 10px 22px rgba(15,23,42,.045); }
.ba-add-inline { flex: 0 0 42px; border-color: var(--ba-primary); background: var(--ba-primary); color: #fff; font-size: 20px; line-height: 1; box-shadow: 0 12px 28px color-mix(in srgb, var(--ba-primary) 22%, transparent); }
.ba-add-inline:disabled { opacity: .72; cursor: not-allowed; }
.ba-search-card { display: grid; grid-template-columns: minmax(0, 1fr) auto auto auto; gap: 8px; align-items: center; margin-top: 2px; padding: 8px; border-radius: 24px; }
.ba-search { min-width: 0; display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 8px; min-height: 44px; padding: 0 11px; border-radius: 18px; background: color-mix(in srgb, var(--muted,#64748b) 7%, transparent); }
.ba-search span { color: var(--muted,#64748b); font-size: 17px; font-weight: 1000; }
.ba-search input { min-height: 42px; border: 0; padding: 0; border-radius: 0; background: transparent; box-shadow: none; font-size: 14px; }
.ba-slider-icon { width: 21px; height: 21px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
.ba-filter-button { position: relative; background: color-mix(in srgb, var(--ba-primary) 8%, var(--card-bg,#fff)); color: var(--ba-primary); }
.ba-filter-button.active { background: var(--ba-primary); color: #fff; border-color: var(--ba-primary); }
.ba-filter-button b { position: absolute; top: -4px; right: -4px; min-width: 19px; height: 19px; display: grid; place-items: center; border-radius: 999px; background: #ef4444; color: #fff; font-size: 10px; border: 2px solid var(--card-bg,#fff); }
.ba-filter-chips { display: flex; gap: 7px; overflow-x: auto; padding: 8px 1px 0; scrollbar-width: none; }
.ba-filter-chips button { flex: 0 0 auto; min-height: 31px; border: 0; border-radius: 999px; padding: 0 10px; background: color-mix(in srgb, var(--ba-primary) 11%, transparent); color: var(--ba-primary); font-size: 11px; font-weight: 950; white-space: nowrap; cursor: pointer; }
.ba-list { display: grid; gap: 7px; margin-top: 10px; }
.student-row { width: 100%; display: grid; grid-template-columns: auto minmax(0,1fr) auto; align-items: center; gap: 10px; padding: 10px; border-radius: 22px; text-align: left; cursor: pointer; transition: transform .16s var(--ease), box-shadow .16s var(--ease), border-color .16s var(--ease); }
.student-row:hover { transform: translateY(-1px); border-color: color-mix(in srgb, var(--ba-primary) 24%, var(--border, rgba(0,0,0,.10))); box-shadow: 0 16px 34px rgba(15,23,42,.07); }
.ba-sync-avatar { width: 48px; height: 48px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 18px; color: #fff; font-size: 17px; font-weight: 1000; box-shadow: 0 12px 24px rgba(15,23,42,.12); background: var(--ba-primary); }
.ba-sync-avatar.green { background: #22c55e; } .ba-sync-avatar.red { background: #ef4444; } .ba-sync-avatar.orange { background: #f59e0b; } .ba-sync-avatar.blue { background: #3b82f6; } .ba-sync-avatar.gray { background: var(--muted,#64748b); } .ba-sync-avatar.purple { background: #8b5cf6; }
.student-main, .student-main strong, .student-main small, .student-main em { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.student-main strong { color: var(--text,#111827); font-size: 14px; font-weight: 1000; letter-spacing: -.02em; }
.student-main small { margin-top: 3px; color: var(--muted,#64748b); font-size: 12px; font-weight: 850; font-style: normal; }
.student-main em { margin-top: 3px; color: color-mix(in srgb, var(--muted,#64748b) 86%, var(--text,#111827)); font-size: 11px; font-weight: 750; font-style: normal; }
.student-side { display: grid; justify-items: end; gap: 6px; flex: 0 0 auto; }
.student-side i { color: var(--muted,#64748b); font-style: normal; font-size: 18px; font-weight: 1000; line-height: 1; }
.ba-chip { max-width: 100%; display: inline-flex; align-items: center; min-height: 24px; padding: 3px 8px; border-radius: 999px; font-size: 10px; font-weight: 950; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize; }
.ba-chip.green { background: rgba(34,197,94,.12); color: #16a34a; } .ba-chip.red { background: rgba(239,68,68,.12); color: #dc2626; } .ba-chip.blue { background: rgba(59,130,246,.12); color: #2563eb; } .ba-chip.gray { background: color-mix(in srgb,var(--muted,#64748b) 14%,transparent); color: var(--muted,#64748b); } .ba-chip.orange { background: rgba(245,158,11,.14); color: #b45309; } .ba-chip.purple { background: rgba(147,51,234,.12); color: #7e22ce; }
.status-dot-mini { width: 10px; height: 10px; display: inline-block; border-radius: 999px; background: var(--muted,#64748b); box-shadow: 0 0 0 4px color-mix(in srgb, currentColor 10%, transparent); }
.status-dot-mini.green { background: #22c55e; } .status-dot-mini.red { background: #ef4444; } .status-dot-mini.blue { background: #3b82f6; } .status-dot-mini.orange { background: #f59e0b; } .status-dot-mini.gray { background: var(--muted,#64748b); }
.ba-sheet-backdrop { position: fixed; inset: 0; z-index: 80; display: grid; place-items: end center; padding: 10px; background: rgba(15,23,42,.50); backdrop-filter: blur(12px); }
.ba-sheet { width: min(760px, 100%); max-height: min(88dvh, 760px); overflow-y: auto; padding: 14px; border-radius: 28px 28px 22px 22px; background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); box-shadow: 0 30px 90px rgba(15,23,42,.32); animation: sheetIn .18s var(--ease); }
.ba-sheet.small { width: min(520px, 100%); }
@keyframes sheetIn { from { transform: translateY(16px); opacity: .7; } to { transform: translateY(0); opacity: 1; } }
.ba-sheet-head, .ba-sheet-profile { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding-bottom: 12px; }
.ba-sheet-head h2, .ba-sheet-profile h2 { margin: 0; color: var(--text,#111827); font-size: 21px; font-weight: 1000; letter-spacing: -.05em; }
.ba-sheet-head p, .ba-sheet-profile p, .ba-sheet-note { margin: 5px 0 0; color: var(--muted,#64748b); font-size: 12px; line-height: 1.5; font-weight: 750; }
.ba-sheet-head button, .ba-sheet-profile button { width: 38px; height: 38px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; background: var(--surface,#fff); color: var(--text,#111827); font-weight: 1000; cursor: pointer; flex: 0 0 auto; }
.ba-sheet-actions { position: sticky; bottom: -14px; display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 8px; margin-top: 14px; padding: 12px 0 2px; background: linear-gradient(to top, var(--card-bg,var(--surface,#fff)) 70%, transparent); }
.ba-sheet-actions button, .ba-export-button { min-height: 42px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; padding: 0 16px; background: color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff)); color: var(--text,#111827); font-size: 12px; font-weight: 950; cursor: pointer; }
.ba-sheet-actions button.primary, .ba-export-button { border-color: var(--ba-primary); background: var(--ba-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent); }
.ba-menu-list { display: grid; gap: 8px; }
.ba-menu-list button { width: 100%; display: grid; grid-template-columns: 42px minmax(0,1fr); column-gap: 10px; align-items: center; min-height: 58px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 18px; padding: 9px; background: var(--surface,#fff); color: var(--text,#111827); text-align: left; cursor: pointer; }
.ba-menu-list button:disabled { opacity: .6; cursor: not-allowed; }
.ba-menu-list button span { grid-row: span 2; width: 42px; height: 42px; display: grid; place-items: center; border-radius: 16px; background: color-mix(in srgb, var(--ba-primary) 10%, transparent); color: var(--ba-primary); font-weight: 1000; }
.ba-menu-list button b, .ba-menu-list button small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ba-menu-list button b { font-size: 13px; font-weight: 1000; } .ba-menu-list button small { margin-top: 2px; color: var(--muted,#64748b); font-size: 11px; font-weight: 750; }
.ba-menu-list button.active { border-color: color-mix(in srgb, var(--ba-primary) 34%, var(--border,rgba(0,0,0,.10))); background: color-mix(in srgb, var(--ba-primary) 8%, var(--surface,#fff)); }
.ba-backup-picker { display: grid; gap: 8px; margin-top: 12px; padding: 12px; border-radius: 20px; background: color-mix(in srgb, var(--muted,#64748b) 7%, transparent); }
.ba-backup-picker > span { color: var(--muted,#64748b); font-size: 10px; font-weight: 1000; text-transform: uppercase; letter-spacing: .08em; }
.ba-backup-picker div { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 6px; }
.ba-backup-picker div button { min-height: 36px; border: 1px solid var(--border,rgba(0,0,0,.10)); border-radius: 999px; background: var(--surface,#fff); color: var(--text,#111827); font-size: 11px; font-weight: 950; text-transform: capitalize; cursor: pointer; }
.ba-backup-picker div button.active { background: var(--ba-primary); border-color: var(--ba-primary); color: #fff; }
.student-detail-strip { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 7px; margin-bottom: 10px; }
.student-detail-strip span { display: block; padding: 9px; border-radius: 16px; background: color-mix(in srgb, var(--muted,#64748b) 8%, transparent); color: var(--muted,#64748b); font-size: 11px; font-weight: 850; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.student-detail-strip b { display: block; margin-bottom: 3px; color: var(--text,#111827); font-size: 10px; text-transform: uppercase; letter-spacing: .05em; }
.ba-table-card, .ba-empty, .ba-analysis, .ba-device-card { padding: 13px; border-radius: 24px; }
.ba-table-card { margin-top: 10px; }
.ba-table-scroll { width: 100%; max-width: 100%; overflow-x: auto; border-radius: 18px; border: 1px solid var(--border,rgba(0,0,0,.08)); }
.ba-table-scroll table { width: 100%; min-width: 980px; border-collapse: collapse; background: var(--card-bg, var(--surface, var(--bg, transparent))); }
.ba-table-scroll th, .ba-table-scroll td { padding: 10px; border-bottom: 1px solid var(--border,rgba(0,0,0,.08)); vertical-align: top; text-align: left; font-size: 13px; }
.ba-table-scroll th { background: var(--table-header-bg, color-mix(in srgb, var(--ba-primary) 6%, var(--card-bg, var(--surface, var(--bg, transparent))))); color: var(--table-header-text, var(--muted, var(--text))); font-size: 11px; font-weight: 1000; text-transform: uppercase; letter-spacing: .07em; }
.ba-table-scroll td strong, .ba-table-scroll td span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .ba-table-scroll td span { margin-top: 3px; color: var(--muted,#64748b); font-size: 11px; }
.ba-table-actions { display: flex; flex-wrap: nowrap; gap: 7px; width: 100%; max-width: 100%; overflow-x: auto; scrollbar-width: none; }
.ba-table-actions button { flex: 0 0 auto; min-height: 34px; border: 1px solid var(--ba-primary); border-radius: 999px; padding: 0 10px; background: var(--ba-primary); color: #fff; font-size: 11px; font-weight: 950; cursor: pointer; white-space: nowrap; }
.ba-empty-table { padding: 22px; text-align: center; color: var(--muted,#64748b); font-weight: 850; }
.ba-device-head { display: grid; grid-template-columns: auto minmax(0,1fr) auto; align-items: start; gap: 10px; margin-bottom: 10px; }
.ba-device-head h3 { margin: 0; font-size: 15px; font-weight: 1000; letter-spacing: -.03em; }
.ba-device-head p { margin: 3px 0 0; color: var(--muted,#64748b); font-size: 12px; font-weight: 750; }
.ba-analysis-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 10px; margin-top: 10px; }
.ba-analysis span { color: var(--muted,#64748b); font-size: 11px; font-weight: 950; text-transform: uppercase; letter-spacing: .08em; }
.ba-analysis strong { display: block; margin-top: 8px; font-size: clamp(22px,7vw,30px); line-height: 1; font-weight: 1000; letter-spacing: -.06em; }
.ba-progress { height: 8px; margin-top: 12px; border-radius: 999px; background: color-mix(in srgb,var(--muted,#64748b) 18%,transparent); overflow: hidden; } .ba-progress i { display: block; height: 100%; border-radius: inherit; background: var(--ba-primary); }
.ba-empty { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 220px; text-align: center; border-style: dashed; }
.ba-empty-icon { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 22px; background: color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff)); font-size: 28px; }
.ba-empty h3 { margin: 0; font-size: 18px; font-weight: 1000; } .ba-empty p { margin: 0; color: var(--muted,#64748b); font-size: 13px; line-height: 1.6; }
@media (min-width: 680px) { .ba-page { padding: calc(12px * var(--local-density-scale,1)); padding-bottom: 44px; } .ba-search-card { grid-template-columns: minmax(0,1fr) 48px 48px 48px; } .ba-list { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; } .student-row { border-radius: 24px; padding: 12px; } .ba-analysis-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } .ba-sheet-backdrop { place-items: center; padding: 18px; } .ba-sheet { border-radius: 28px; padding: 18px; } }
@media (min-width: 1040px) { .ba-page { padding: calc(16px * var(--local-density-scale,1)); padding-bottom: 48px; } .ba-search-card, .ba-list, .ba-analysis-grid, .ba-table-card, .ba-filter-chips { max-width: 1180px; margin-left: auto; margin-right: auto; } .ba-list { grid-template-columns: repeat(3, minmax(0, 1fr)); } .ba-analysis-grid { grid-template-columns: repeat(3, minmax(0,1fr)); } }
@media (max-width: 520px) { .ba-page { padding: calc(7px * var(--local-density-scale,1)); padding-bottom: max(38px, env(safe-area-inset-bottom)); } .ba-icon-button, .ba-filter-button, .ba-add-inline { width: 40px; height: 40px; } .student-detail-strip { grid-template-columns: minmax(0,1fr); } .ba-sheet { border-radius: 24px 24px 18px 18px; padding: 12px; } .ba-sheet-actions { display: grid; grid-template-columns: minmax(0,1fr); } .ba-sheet-actions button { width: 100%; } .ba-device-head { grid-template-columns: auto minmax(0,1fr); } .ba-device-head .ba-chip { grid-column: 1 / -1; width: fit-content; } }
`;var dF=c(90077),dG=c(32784);function dH(a){let b=Number(a||0);return Number.isFinite(b)?b:0}function dI(a){if(!a)return"Not set";let b="number"==typeof a?a:new Date(a).getTime();if(!Number.isFinite(b))return"Not set";try{return new Intl.DateTimeFormat(void 0,{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(b))}catch{return"Not set"}}async function dJ(a){let b=o.db[a];return b?.toArray?b.toArray():[]}function dK(a,b){return!a?.isDeleted&&(!a?.accountId||a.accountId===b)}async function dL(a){let[b,c]=await Promise.all([dJ("userMemberships").then(async a=>a.length?a:dJ("memberships")),dJ("users").then(async a=>a.length?a:dJ("accountUsers"))]),d=b.find(b=>["owner","admin","super_admin"].includes(String(b.role))&&dK(b,a)),e=c.find(a=>String(a?.id||a?.localId||"")===String(d?.userLocalId||d?.userId||d?.accountUserId||"")||!!(d?.email&&String(a.email||"").toLowerCase()===String(d.email).toLowerCase()));return{owner:{...d||{},...e||{},role:d?.role||"owner"},user:e,membership:d}}function dM({children:a,tone:b="gray"}){return(0,f.jsx)("span",{className:`op-chip ${b}`,children:a})}function dN({label:a,value:b,icon:c,positive:d,warning:e}){return(0,f.jsxs)("article",{className:`op-summary ${d?"positive":""} ${e?"warning":""}`,children:[(0,f.jsx)("div",{children:c}),(0,f.jsxs)("section",{children:[(0,f.jsx)("strong",{children:b}),(0,f.jsx)("span",{children:a})]})]})}function dO({label:a,value:b}){return(0,f.jsxs)("div",{className:"op-mini",children:[(0,f.jsx)("strong",{children:b}),(0,f.jsx)("span",{children:a})]})}function dP({title:a="No records",text:b}){return(0,f.jsxs)("section",{className:"op-empty",children:[(0,f.jsx)("div",{children:"\uD83D\uDCCC"}),(0,f.jsx)("h3",{children:a}),(0,f.jsx)("p",{children:b})]})}function dQ({view:a,setView:b,count:c}){return(0,f.jsxs)("section",{className:"op-toolbar",children:[(0,f.jsxs)("div",{className:"op-tabs",children:[(0,f.jsx)("button",{type:"button",className:"cards"===a?"active":"",onClick:()=>b("cards"),children:"Cards"}),(0,f.jsx)("button",{type:"button",className:"table"===a?"active":"",onClick:()=>b("table"),children:"Table"}),(0,f.jsx)("button",{type:"button",className:"analytics"===a?"active":"",onClick:()=>b("analytics"),children:"Analytics"})]}),(0,f.jsxs)(dM,{children:[c," shown"]})]})}let dR=`
.op-page{min-height:100dvh;width:100%;min-width:0;padding:calc(8px * var(--local-density-scale,1));padding-bottom:max(32px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--op-primary) 10%,transparent),transparent 34rem),var(--bg,#f7f8fb);color:var(--text,#111);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);font-size:var(--font-size,14px);overflow-x:hidden}.op-page *{box-sizing:border-box}.op-page button,.op-page input,.op-page select,.op-page textarea{font:inherit;max-width:100%}.op-page input,.op-page select,.op-page textarea{width:100%;min-height:44px;border:1px solid var(--input-border,var(--border,rgba(0,0,0,.10)));border-radius:16px;padding:0 12px;background:var(--input-bg,var(--surface,#fff));color:var(--input-text,var(--text,#111));outline:none;font-weight:750}.op-page textarea{min-height:120px;padding:12px;resize:vertical;line-height:1.55}.op-state{min-height:min(420px,calc(100dvh - 32px));width:min(480px,100%);margin:0 auto;display:grid;place-items:center;align-content:center;gap:10px;padding:22px;border-radius:28px;background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.10));box-shadow:var(--shell-shadow,0 24px 60px rgba(15,23,42,.08));text-align:center}.op-state h2{margin:0;font-size:22px;letter-spacing:-.04em;font-weight:1000}.op-state p{margin:0;color:var(--muted,#64748b);line-height:1.6}.op-hero{display:flex;align-items:stretch;justify-content:space-between;gap:10px;padding:12px;border-radius:28px;background:radial-gradient(circle at 18% 8%,color-mix(in srgb,var(--op-primary) 16%,transparent),transparent 20rem),linear-gradient(135deg,var(--card-bg,var(--surface,#fff)),color-mix(in srgb,var(--op-primary) 7%,var(--card-bg,#fff)) 72%);border:1px solid var(--border,rgba(0,0,0,.10));box-shadow:0 18px 46px rgba(15,23,42,.07);overflow:hidden}.op-hero-left{min-width:0;display:flex;align-items:center;gap:10px;flex:1}.op-icon{width:48px;height:48px;flex:0 0 auto;display:grid;place-items:center;border-radius:18px;background:var(--op-primary);color:#fff;font-size:22px;box-shadow:0 12px 26px color-mix(in srgb,var(--op-primary) 28%,transparent)}.op-title{min-width:0}.op-title p,.op-title h2,.op-title span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.op-title p{margin:0 0 2px;color:var(--op-primary);font-size:10px;font-weight:950;letter-spacing:.08em;text-transform:uppercase}.op-title h2{margin:0;color:var(--text,#111);font-size:clamp(20px,5vw,30px);font-weight:1000;letter-spacing:-.06em;line-height:1}.op-title span{margin-top:3px;color:var(--muted,#64748b);font-size:12px;font-weight:750}.op-actions{display:flex;align-items:center;justify-content:flex-end;gap:8px}.op-btn,.op-primary{min-height:42px;border-radius:999px;padding:0 14px;font-weight:950;cursor:pointer}.op-btn{border:1px solid var(--border,rgba(0,0,0,.10));background:var(--surface,#fff);color:var(--text,#111)}.op-primary{border:0;background:var(--op-primary);color:#fff;box-shadow:0 14px 32px color-mix(in srgb,var(--op-primary) 25%,transparent)}.op-summary-grid,.op-list,.op-mini-grid,.op-breakdown-grid{display:grid;gap:8px}.op-summary-grid{margin-top:10px;grid-template-columns:repeat(2,minmax(0,1fr))}.op-summary,.op-card,.op-panel,.op-toolbar,.op-filter,.op-empty,.op-breakdown{background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.10));box-shadow:0 12px 28px rgba(15,23,42,.045)}.op-summary{min-width:0;display:flex;align-items:center;gap:10px;padding:12px;border-radius:22px;overflow:hidden}.op-summary.positive{background:linear-gradient(135deg,rgba(34,197,94,.10),var(--card-bg,var(--surface,#fff)))}.op-summary.warning{background:linear-gradient(135deg,rgba(245,158,11,.10),var(--card-bg,var(--surface,#fff)))}.op-summary>div:first-child{width:36px;height:36px;flex:0 0 auto;display:grid;place-items:center;border-radius:15px;background:color-mix(in srgb,var(--op-primary) 12%,var(--surface,#fff))}.op-summary section{min-width:0}.op-summary strong,.op-summary span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.op-summary strong{font-size:18px;font-weight:1000;letter-spacing:-.05em;color:var(--text,#111)}.op-summary span{margin-top:2px;color:var(--muted,#64748b);font-size:11px;font-weight:850}.op-toolbar,.op-filter,.op-panel{margin-top:10px;padding:10px;border-radius:24px}.op-toolbar{display:flex;align-items:center;justify-content:space-between;gap:8px}.op-tabs{display:inline-grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:4px;width:min(390px,100%);padding:4px;border-radius:999px;background:var(--shell-section-bg,color-mix(in srgb,var(--op-primary) 7%,var(--surface,#fff)));border:1px solid var(--border,rgba(0,0,0,.08))}.op-tabs button{min-width:0;min-height:35px;border:0;border-radius:999px;padding:0 9px;background:transparent;color:var(--muted,#64748b);font-size:12px;font-weight:950;cursor:pointer}.op-tabs button.active{background:var(--op-primary);color:#fff}.op-filter{display:grid;grid-template-columns:minmax(0,1fr);gap:8px}.op-section{margin-top:16px}.op-list{margin-top:10px}.op-card,.op-breakdown,.op-empty{min-width:0;border-radius:24px;padding:13px;overflow:hidden}.op-card-top{display:flex;align-items:flex-start;gap:10px}.op-avatar{width:56px;height:56px;flex:0 0 auto;display:grid;place-items:center;border-radius:19px;background:var(--op-primary);color:#fff;font-size:22px;box-shadow:0 12px 24px rgba(15,23,42,.12)}.op-card-main{min-width:0;flex:1}.op-card-main h3{margin:0;color:var(--text,#111);font-size:18px;font-weight:1000;letter-spacing:-.04em}.op-card-main p{margin:4px 0 0;color:var(--muted,#64748b);font-size:12px;font-weight:750;line-height:1.4}.op-chip-row{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-top:10px}.op-chip{max-width:100%;display:inline-flex;align-items:center;min-height:25px;padding:4px 9px;border-radius:999px;font-size:11px;font-weight:950;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:capitalize}.op-chip.green{background:rgba(34,197,94,.14);color:#22c55e}.op-chip.red{background:rgba(239,68,68,.14);color:#ef4444}.op-chip.blue{background:rgba(59,130,246,.15);color:#60a5fa}.op-chip.gray{background:color-mix(in srgb,var(--muted,#64748b) 14%,transparent);color:var(--muted,#64748b)}.op-chip.orange{background:rgba(245,158,11,.16);color:#f59e0b}.op-chip.purple{background:rgba(147,51,234,.15);color:#a855f7}.op-mini-grid{grid-template-columns:repeat(2,minmax(0,1fr));margin-top:10px}.op-mini{min-width:0;padding:9px;border-radius:17px;background:color-mix(in srgb,var(--muted,#64748b) 9%,transparent);border:1px solid var(--border,rgba(0,0,0,.08));overflow:hidden}.op-mini strong,.op-mini span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.op-mini strong{color:var(--text,#111);font-size:13px;font-weight:1000}.op-mini span{margin-top:2px;color:var(--muted,#64748b);font-size:10px;font-weight:850}.op-table-wrap{width:100%;overflow-x:auto;border-radius:18px;border:1px solid var(--border,rgba(0,0,0,.08))}.op-table{width:100%;min-width:980px;border-collapse:collapse;background:var(--card-bg,var(--surface,#fff))}.op-table th,.op-table td{padding:10px;border-bottom:1px solid var(--border,rgba(0,0,0,.08));text-align:left;vertical-align:top;color:var(--text,#111);font-size:13px}.op-table th{color:var(--muted,#64748b);font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.07em;background:color-mix(in srgb,var(--op-primary) 6%,var(--card-bg,#fff))}.op-empty{display:grid;place-items:center;align-content:center;gap:8px;min-height:190px;text-align:center;border-style:dashed}.op-empty div{width:56px;height:56px;display:grid;place-items:center;border-radius:22px;background:color-mix(in srgb,var(--op-primary) 12%,var(--surface,#fff));font-size:28px}.op-empty h3{margin:0;color:var(--text,#111);font-size:18px;font-weight:1000}.op-empty p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.op-message{margin:10px 0;padding:12px;border-radius:18px;background:rgba(245,158,11,.14);color:#f59e0b;font-size:13px;font-weight:900}.op-drawer-layer{position:fixed;inset:0;z-index:80}.op-drawer-overlay{position:absolute;inset:0;border:0;background:rgba(15,23,42,.52)}.op-drawer{position:absolute;right:0;top:0;bottom:0;width:min(94vw,720px);max-width:100vw;overflow-y:auto;overflow-x:hidden;background:var(--bg,#f7f8fb);color:var(--text,#111);padding:14px;box-shadow:var(--shell-shadow,-24px 0 70px rgba(15,23,42,.22))}.op-drawer-head{position:sticky;top:0;z-index:2;display:flex;align-items:flex-start;justify-content:space-between;gap:10px;padding:6px 0 12px;background:var(--bg,#f7f8fb)}.op-drawer-head p{margin:0;color:var(--op-primary);font-size:11px;font-weight:950;letter-spacing:.08em;text-transform:uppercase}.op-drawer-head h2{margin:2px 0 0;color:var(--text,#111);font-size:22px;font-weight:1000;letter-spacing:-.05em}.op-drawer-head span{margin-top:3px;display:block;color:var(--muted,#64748b);font-size:12px;font-weight:750}.op-drawer-head button{width:38px;height:38px;flex:0 0 auto;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:15px;background:var(--surface,#fff);color:var(--text,#111);font-weight:1000;cursor:pointer}.op-form-card{margin-top:10px;padding:12px;border-radius:22px;background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.10))}.op-form-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:9px}.op-form-grid label{min-width:0;display:grid;gap:6px}.op-form-grid label span{color:var(--muted,#64748b);font-size:11px;font-weight:950;letter-spacing:.06em;text-transform:uppercase}.op-form-grid .wide{grid-column:1/-1}.op-drawer-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:12px}.op-bar{height:8px;margin-top:12px;border-radius:999px;background:color-mix(in srgb,var(--muted,#64748b) 14%,transparent);overflow:hidden}.op-bar div{height:100%;background:var(--op-primary);border-radius:inherit}@media (min-width:680px){.op-page{padding:calc(12px * var(--local-density-scale,1))}.op-summary-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.op-filter{grid-template-columns:minmax(0,1fr) 190px 190px 150px}.op-mini-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.op-form-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:1040px){.op-page{padding:calc(16px * var(--local-density-scale,1))}.op-summary-grid{grid-template-columns:repeat(6,minmax(0,1fr))}.op-list,.op-breakdown-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (max-width:520px){.op-page{padding:calc(6px * var(--local-density-scale,1))}.op-hero{flex-direction:column;border-radius:22px;padding:10px}.op-actions{display:grid;grid-template-columns:minmax(0,1fr)}.op-btn,.op-primary{width:100%}.op-summary-grid{gap:6px}.op-summary{padding:10px;border-radius:19px}.op-toolbar{align-items:stretch;flex-direction:column;border-radius:20px}.op-tabs{width:100%}.op-card,.op-empty,.op-breakdown{border-radius:20px;padding:11px}.op-avatar{width:52px;height:52px;flex-basis:52px}.op-mini-grid{grid-template-columns:repeat(1,minmax(0,1fr))}.op-drawer-actions{grid-template-columns:minmax(0,1fr)}.op-drawer{width:min(96vw,720px);padding:12px}}
`;function dS(){var a;(0,k.useRouter)();let{accountId:b,authenticated:c,loading:d}=(0,l.F)(),{settings:e,loading:h}=(0,m.t)(),i=e?.primaryColor||"var(--primary-color, #2563eb)",[j,n]=(0,g.useState)(!0),[o,p]=(0,g.useState)(null),[q,r]=(0,g.useState)([]),[s,t]=(0,g.useState)([]),[u,v]=(0,g.useState)([]),[w,x]=(0,g.useState)([]),[y,z]=(0,g.useState)("cards"),[A,B]=(0,g.useState)(""),[C,D]=(0,g.useState)("all"),[E,F]=(0,g.useState)("all"),[G,H]=(0,g.useState)("all"),I=async()=>{if(!b)return void n(!1);n(!0);try{let a=await dL(b);p(a.owner);let[c,d]=await Promise.all([dJ("schools"),dJ("branches")]),e=c.filter(a=>dK(a,b)),f=new Set(e.map(a=>Number(a.id))),g=d.filter(a=>dK(a,b)&&f.has(Number(a.schoolId)));r(e),t(g);let h=[],i=[];for(let a of g)try{let c=await (0,dF.ok)({accountId:b,schoolId:String(a.schoolId),branchId:String(a.id)});h.push(...c);let d=await (0,dG.nu)({accountId:b,schoolId:String(a.schoolId),branchId:String(a.id)});i.push(...d)}catch(b){console.warn("Failed to load owner branch overview",a,b)}v(h.filter(a=>!a.isDeleted&&"cancelled"!==a.status)),x(i.filter(a=>!a.isDeleted&&"resolved"!==String(a.status||"open")))}finally{n(!1)}},J=(0,g.useMemo)(()=>"all"===C?s:s.filter(a=>Number(a.schoolId)===Number(C)),[s,C]),K=(0,g.useMemo)(()=>{let a=A.toLowerCase().trim();return u.filter(b=>("all"===C||String(b.schoolId)===C)&&("all"===E||String(b.branchId)===E)&&("all"===G||String(b.eventType)===G)&&(!a||`${b.title} ${b.description} ${b.location} ${b.eventType}`.toLowerCase().includes(a))).sort((a,b)=>dH(a.startAt)-dH(b.startAt))},[u,A,C,E,G]),L=(0,g.useMemo)(()=>{let a=new Date;a.setHours(0,0,0,0);let b=new Date;return b.setHours(23,59,59,999),{schools:q.length,branches:s.length,events:u.length,upcoming:u.filter(a=>dH(a.startAt)>=Date.now()).length,today:u.filter(c=>dH(c.startAt)>=a.getTime()&&dH(c.startAt)<=b.getTime()).length,conflicts:w.length}},[q,s,u,w]);return j||d||h?(0,f.jsxs)("main",{className:"op-page",style:{"--op-primary":i},children:[(0,f.jsx)("style",{children:dR}),(0,f.jsxs)("section",{className:"op-state",children:[(0,f.jsx)("h2",{children:"Opening owner calendar..."}),(0,f.jsx)("p",{children:"Loading events across your schools."})]})]}):(0,f.jsxs)("main",{className:"op-page",style:{"--op-primary":i},children:[(0,f.jsx)("style",{children:dR}),(0,f.jsxs)("section",{className:"op-hero",children:[(0,f.jsxs)("div",{className:"op-hero-left",children:[(0,f.jsx)("div",{className:"op-icon",children:"\uD83D\uDCC5"}),(0,f.jsxs)("div",{className:"op-title",children:[(0,f.jsx)("p",{children:"Owner Oversight"}),(0,f.jsx)("h2",{children:"Calendar Overview"}),(0,f.jsxs)("span",{children:[(a=o||{},function(a,b=""){return String(a||"").trim()||b}(a?.fullName||a?.name||a?.title||a?.label||a?.email,"Unnamed"))," \xb7 View only across owned schools"]})]})]}),(0,f.jsx)("div",{className:"op-actions",children:(0,f.jsx)("button",{className:"op-btn",onClick:I,children:"Refresh"})})]}),(0,f.jsxs)("section",{className:"op-summary-grid",children:[(0,f.jsx)(dN,{label:"Schools",value:L.schools,icon:"\uD83C\uDFEB"}),(0,f.jsx)(dN,{label:"Branches",value:L.branches,icon:"\uD83C\uDFDB️"}),(0,f.jsx)(dN,{label:"Events",value:L.events,icon:"\uD83D\uDCCC"}),(0,f.jsx)(dN,{label:"Upcoming",value:L.upcoming,icon:"⏭️",positive:!0}),(0,f.jsx)(dN,{label:"Today",value:L.today,icon:"\uD83D\uDCCD"}),(0,f.jsx)(dN,{label:"Open Conflicts",value:L.conflicts,icon:"⚠️",warning:L.conflicts>0})]}),(0,f.jsx)(dQ,{view:y,setView:z,count:K.length}),(0,f.jsxs)("section",{className:"op-filter",children:[(0,f.jsx)("input",{value:A,onChange:a=>B(a.target.value),placeholder:"Search events..."}),(0,f.jsxs)("select",{value:C,onChange:a=>{D(a.target.value),F("all")},children:[(0,f.jsx)("option",{value:"all",children:"All Schools"}),q.map(a=>(0,f.jsx)("option",{value:a.id,children:a.name},a.id))]}),(0,f.jsxs)("select",{value:E,onChange:a=>F(a.target.value),children:[(0,f.jsx)("option",{value:"all",children:"All Branches"}),J.map(a=>(0,f.jsx)("option",{value:a.id,children:a.name},a.id))]}),(0,f.jsxs)("select",{value:G,onChange:a=>H(a.target.value),children:[(0,f.jsx)("option",{value:"all",children:"All Types"}),(0,f.jsx)("option",{value:"school_event",children:"School Event"}),(0,f.jsx)("option",{value:"branch_event",children:"Branch Event"}),(0,f.jsx)("option",{value:"meeting",children:"Meeting"}),(0,f.jsx)("option",{value:"exam",children:"Exam"}),(0,f.jsx)("option",{value:"assessment",children:"Assessment"}),(0,f.jsx)("option",{value:"fee_deadline",children:"Fee Deadline"}),(0,f.jsx)("option",{value:"payroll_date",children:"Payroll Date"}),(0,f.jsx)("option",{value:"holiday",children:"Holiday"})]})]}),w.length>0&&(0,f.jsx)("section",{className:"op-section",children:(0,f.jsx)("div",{className:"op-list",children:w.slice(0,4).map(a=>(0,f.jsx)("article",{className:"op-card",children:(0,f.jsxs)("div",{className:"op-card-top",children:[(0,f.jsx)("div",{className:"op-avatar",children:"⚠️"}),(0,f.jsxs)("div",{className:"op-card-main",children:[(0,f.jsx)("h3",{children:a.title||"Schedule conflict"}),(0,f.jsx)("p",{children:a.description||"Conflict detected in one of your branches."}),(0,f.jsxs)("div",{className:"op-chip-row",children:[(0,f.jsx)(dM,{tone:"red",children:a.severity||"conflict"}),(0,f.jsx)(dM,{tone:"orange",children:a.conflictType||"schedule"}),(0,f.jsx)(dM,{children:s.find(b=>Number(b.id)===Number(a.branchId))?.name||"Branch"})]})]})]})},a.id))})}),"analytics"===y&&(0,f.jsxs)("section",{className:"op-section op-breakdown-grid",children:[q.map(a=>{let b=K.filter(b=>Number(b.schoolId)===Number(a.id)).length,c=K.length?Math.round(b/K.length*100):0;return(0,f.jsxs)("article",{className:"op-breakdown",children:[(0,f.jsx)("strong",{children:a.name}),(0,f.jsx)("div",{className:"op-bar",children:(0,f.jsx)("div",{style:{width:`${c}%`}})}),(0,f.jsxs)("div",{className:"op-chip-row",children:[(0,f.jsx)(dM,{tone:"blue",children:b}),(0,f.jsxs)(dM,{children:[c,"%"]})]})]},a.id)}),["exam","assessment","meeting","fee_deadline","holiday"].map(a=>{let b=K.filter(b=>b.eventType===a).length,c=K.length?Math.round(b/K.length*100):0;return(0,f.jsxs)("article",{className:"op-breakdown",children:[(0,f.jsx)("strong",{children:a.replaceAll("_"," ")}),(0,f.jsx)("div",{className:"op-bar",children:(0,f.jsx)("div",{style:{width:`${c}%`}})}),(0,f.jsxs)("div",{className:"op-chip-row",children:[(0,f.jsx)(dM,{tone:"purple",children:b}),(0,f.jsxs)(dM,{children:[c,"%"]})]})]},a)})]}),"table"===y&&(0,f.jsx)("section",{className:"op-panel",children:(0,f.jsx)("div",{className:"op-table-wrap",children:(0,f.jsxs)("table",{className:"op-table",children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"School"}),(0,f.jsx)("th",{children:"Branch"}),(0,f.jsx)("th",{children:"Event"}),(0,f.jsx)("th",{children:"Type"}),(0,f.jsx)("th",{children:"Starts"}),(0,f.jsx)("th",{children:"Ends"}),(0,f.jsx)("th",{children:"Status"})]})}),(0,f.jsxs)("tbody",{children:[K.map(a=>(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:q.find(b=>Number(b.id)===Number(a.schoolId))?.name||"-"}),(0,f.jsx)("td",{children:s.find(b=>Number(b.id)===Number(a.branchId))?.name||"-"}),(0,f.jsxs)("td",{children:[(0,f.jsx)("strong",{children:a.title}),(0,f.jsx)("br",{}),(0,f.jsx)("span",{children:a.description||"-"})]}),(0,f.jsx)("td",{children:a.eventType}),(0,f.jsx)("td",{children:dI(a.startAt)}),(0,f.jsx)("td",{children:dI(a.endAt)}),(0,f.jsx)("td",{children:(0,f.jsx)(dM,{tone:"green",children:a.status||"scheduled"})})]},a.id)),!K.length&&(0,f.jsx)("tr",{children:(0,f.jsx)("td",{colSpan:7,children:(0,f.jsx)(dP,{text:"No calendar events found across your schools."})})})]})]})})}),"cards"===y&&(0,f.jsx)("section",{className:"op-section",children:(0,f.jsxs)("div",{className:"op-list",children:[K.map(a=>(0,f.jsxs)("article",{className:"op-card",children:[(0,f.jsxs)("div",{className:"op-card-top",children:[(0,f.jsx)("div",{className:"op-avatar",children:"\uD83D\uDCC5"}),(0,f.jsxs)("div",{className:"op-card-main",children:[(0,f.jsx)("h3",{children:a.title}),(0,f.jsxs)("p",{children:[q.find(b=>Number(b.id)===Number(a.schoolId))?.name||"School"," \xb7 ",s.find(b=>Number(b.id)===Number(a.branchId))?.name||"Branch"," \xb7 ",dI(a.startAt)]}),(0,f.jsxs)("div",{className:"op-chip-row",children:[(0,f.jsx)(dM,{tone:"blue",children:a.eventType}),(0,f.jsx)(dM,{tone:"urgent"===a.priority?"red":"high"===a.priority?"orange":"gray",children:a.priority||"normal"}),(0,f.jsx)(dM,{tone:"green",children:a.status||"scheduled"})]})]})]}),(0,f.jsxs)("div",{className:"op-mini-grid",children:[(0,f.jsx)(dO,{label:"Starts",value:dI(a.startAt)}),(0,f.jsx)(dO,{label:"Ends",value:dI(a.endAt)}),(0,f.jsx)(dO,{label:"Location",value:a.location||"-"})]}),a.description&&(0,f.jsx)("p",{className:"op-message",children:a.description})]},a.id)),!K.length&&(0,f.jsx)(dP,{text:"No calendar events found across your schools."})]})})]})}let dT=["admin","school_admin","branch_admin","accountant"],dU=[{value:"all",label:"All authority contacts"},{value:"school_admin",label:"School admins"},{value:"branch_admin",label:"Branch admins"},{value:"accountant",label:"Accountants"}],dV={subject:"",body:"",recipientUserId:"",roleFilter:"all",schoolFilter:"all",branchFilter:"all"};function dW(a){let b=Number(a||0);return Number.isFinite(b)?b:0}function dX(a){return dY(a?.id??a?.localId??a?.cloudId)}function dY(a){return null==a?"":String(a).trim()}function dZ(a,b=""){return String(a||"").trim()||b}function d$(a,b){return String(a??"")===String(b??"")}function d_(a){return a?.id??a?.localId??a?.userId??a?.accountUserId}function d0(a){return a?.userLocalId??a?.userId??a?.accountUserId??a?.accountUserLocalId}function d1(a,b){return a&&!0!==a.isDeleted&&(!a.accountId||!b||a.accountId===b)}function d2(a){return dY(a?.schoolId??a?.schoolLocalId??a?.payload?.schoolId)}function d3(a){return dY(a?.branchId??a?.branchLocalId??a?.payload?.branchId)}function d4(a,b="Unnamed"){return dZ(a?.fullName||a?.displayName||a?.name||[a?.firstName,a?.middleName,a?.lastName].filter(Boolean).join(" ")||a?.title||a?.label||a?.email||a?.phone,b)}function d5(a){return String(a?.email||a?.user?.email||a?.appUser?.email||a?.accountUser?.email||"").trim()}function d6(a){return String(a?.phone||a?.user?.phone||a?.appUser?.phone||a?.accountUser?.phone||"").trim()}function d7(a){return a?.user||a?.appUser||a?.accountUser||a?.profile||a?.payload?.user||null}function d8(a){let b=String(a||"").toLowerCase();return"admin"===b||"school_admin"===b?"school_admin":"branch_admin"===b?"branch_admin":"accountant"===b?"accountant":"other"}function d9(a){let b=d8(a);return"school_admin"===b?"School admin":"branch_admin"===b?"Branch admin":"accountant"===b?"Accountant":dZ(a,"user").replaceAll("_"," ")}function ea(a,b){return"all"===b||d8(a)===b}function eb(a){if(!a)return"Not set";let b="number"==typeof a?a:new Date(a).getTime();if(!Number.isFinite(b))return"Not set";try{return new Intl.DateTimeFormat(void 0,{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(b))}catch{return"Not set"}}async function ec(a){let b=o.db[a];return b?.toArray?b.toArray():[]}async function ed(a){for(let c of a)try{var b;let a=(b=await (0,bs.AT)(c),Array.isArray(b)?b:Array.isArray(b?.data)?b.data:Array.isArray(b?.items)?b.items:Array.isArray(b?.records)?b.records:Array.isArray(b?.users)?b.users:Array.isArray(b?.memberships)?b.memberships:Array.isArray(b?.data?.users)?b.data.users:Array.isArray(b?.data?.memberships)?b.data.memberships:Array.isArray(b?.data?.items)?b.data.items:[]);if(a.length)return a}catch{}return[]}function ee(a,b){let c=new Map;for(let d of a){let a=b(d);if(!a)continue;let e=c.get(a);c.set(a,{...e||{},...d})}return Array.from(c.values())}async function ef(a){let[b,c]=await Promise.all([ec("userMemberships").then(async a=>a.length?a:ec("memberships")),ec("users").then(async a=>a.length?a:ec("accountUsers"))]),d=b.find(b=>["owner","admin","super_admin"].includes(String(b.role||"").toLowerCase())&&d1(b,a)),e=c.find(a=>d$(d_(a),d0(d))||!!(d?.email&&String(a.email||"").toLowerCase()===String(d.email).toLowerCase()));return{owner:{...d||{},...e||{},role:d?.role||"owner"},user:e,membership:d}}function eg(a){return dZ(a.subject||a.title,"No subject")}function eh(a){let b=String(a.folder||"inbox").toLowerCase();return["inbox","sent","archived"].includes(b)?b:"inbox"}function ei(a){return dW(a.lastMessageAt||a.updatedAt||a.createdAt)}function ej(a){return dZ(a,"No message preview.")}function ek(a){return"sent"===a?"green":"archived"===a?"orange":"inbox"===a?"blue":"gray"}function el({children:a,tone:b="gray"}){return(0,f.jsx)("span",{className:`ba-chip ${b}`,children:a})}function em({title:a="No messages",text:b}){return(0,f.jsxs)("section",{className:"ba-empty",children:[(0,f.jsx)("div",{children:"\uD83D\uDCAC"}),(0,f.jsx)("h3",{children:a}),(0,f.jsx)("p",{children:b})]})}function en(){return(0,f.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,f.jsx)("path",{d:"M4 7h9"}),(0,f.jsx)("path",{d:"M17 7h3"}),(0,f.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,f.jsx)("path",{d:"M4 17h3"}),(0,f.jsx)("path",{d:"M11 17h9"}),(0,f.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function eo(){(0,k.useRouter)();let{accountId:a,authenticated:b,loading:c}=(0,l.F)(),{settings:d,loading:e}=(0,m.t)(),h=d?.primaryColor||"var(--primary-color,#2563eb)",[i,j]=(0,g.useState)(!0),[n,o]=(0,g.useState)(!1),[q,r]=(0,g.useState)("cards"),[s,t]=(0,g.useState)(null),[u,v]=(0,g.useState)([]),[w,x]=(0,g.useState)([]),[y,z]=(0,g.useState)([]),[A,B]=(0,g.useState)([]),[C,D]=(0,g.useState)([]),[E,F]=(0,g.useState)([]),[G,H]=(0,g.useState)(""),[I,J]=(0,g.useState)("inbox"),[K,L]=(0,g.useState)("all"),[M,N]=(0,g.useState)("all"),[O,P]=(0,g.useState)("all"),[Q,R]=(0,g.useState)(!1),[S,T]=(0,g.useState)(!1),[U,V]=(0,g.useState)(!1),[W,X]=(0,g.useState)(null),[Y,Z]=(0,g.useState)(null),[$,_]=(0,g.useState)(""),[aa,ab]=(0,g.useState)(null),[ac,ad]=(0,g.useState)(dV);function ae(a,b){ab({tone:a,message:b}),window.setTimeout(()=>ab(a=>a?.message===b?null:a),4200)}async function af(){if(!a){z([]),B([]),j(!1);return}j(!0);try{let b=await ef(a),c=d_(b.user||b.owner),[d,e,f,g,h,i,j,k]=await Promise.all([ec("schools"),ec("branches"),ec("messageThreads"),ec("messages"),ec("users").then(async a=>a.length?a:ec("accountUsers")),ec("userMemberships").then(async a=>a.length?a:ec("memberships")),ed(["/accounts/users","/account/users","/users","/owner/users"]),ed(["/accounts/memberships","/account/memberships","/memberships","/owner/memberships"])]),l=ee([...h,...j],a=>String(d_(a)||d5(a)).toLowerCase()),m=ee([...i,...k],a=>String(a.id||a.localId||`${d0(a)}-${a.role}-${a.schoolId||0}-${a.branchId||0}`)),n=d.filter(b=>d1(b,a)),o=new Set(n.map(a=>dX(a)).filter(Boolean)),p=e.filter(b=>d1(b,a)&&(!o.size||o.has(dY(b.schoolId))));t(b.owner),v(n),x(p),z(f.filter(b=>(function(a,b,c){if(!d1(a,b))return!1;let d=Array.isArray(a.participantRoles)?a.participantRoles.join(" "):String(a.participantRoles||""),e=Array.isArray(a.participantUserIds)?a.participantUserIds.map(String):String(a.participantUserIds||"").split(",");return d.toLowerCase().includes("owner")||"owner"===String(a.createdByRole||"").toLowerCase()||d$(a.ownerUserId,c)||e.includes(String(c||""))})(b,a,c)).filter(a=>!0!==a.isDeleted)),B(g.filter(b=>d1(b,a))),D(l),F(m.filter(b=>d1(b,a)))}catch(a){console.error("Failed to load owner messages:",a),ae("error","Failed to load owner messages.")}finally{j(!1)}}let ag=(0,g.useMemo)(()=>{let a=new Map(u.map(a=>[dX(a),d4(a)])),b=new Map(w.map(a=>[dX(a),d4(a)])),c=E.filter(a=>dT.includes(String(a.role||"").toLowerCase())).map(c=>{let d,e,f=d7(c),g=d5(c)||d5(f),h=C.find(a=>d$(d_(a),d0(c)))||C.find(a=>!!(g&&d5(a).toLowerCase()===g.toLowerCase()))||f||void 0,i=dY(d_(h)||d0(c)||g),j=d2(c),k=d3(c),l=String(c.role||h?.role||"user").toLowerCase(),m=d8(l);return{key:`${i||c.email||l}-${m}-${j||0}-${k||0}`,id:i,name:(d=d7(c),e=d9(l),dZ(d4(h,"")||d4(d,"")||d4(c,"")||d5(h)||d5(d)||d5(c),e)),role:l,roleGroup:"other"===m?"school_admin":m,email:d5(h)||d5(c),phone:d6(h)||d6(c),schoolId:j,branchId:k,schoolName:a.get(j),branchName:b.get(k)}}).filter(a=>a.id),d=new Set;return c.filter(a=>{let b=a.key;return!d.has(b)&&(d.add(b),!0)})},[w,E,u,C]),ah=(0,g.useMemo)(()=>ag.filter(a=>!!ea(a.roleGroup,ac.roleFilter)&&("all"===ac.schoolFilter||String(a.schoolId||0)===String(ac.schoolFilter))&&("all"===ac.branchFilter||String(a.branchId||0)===String(ac.branchFilter))),[ag,ac.branchFilter,ac.roleFilter,ac.schoolFilter]),ai=(0,g.useMemo)(()=>"all"===ac.schoolFilter?w:w.filter(a=>String(a.schoolId||0)===String(ac.schoolFilter)),[w,ac.schoolFilter]),aj=(0,g.useMemo)(()=>{let a=G.toLowerCase().trim();return[...y].filter(a=>"all"===I||eh(a)===I).filter(a=>"all"===K||(Array.isArray(a.participantRoles)?a.participantRoles:String(a.participantRoles||"").split(/[\s,]+/)).some(a=>ea(a,K))).filter(a=>"all"===M||String(d2(a)||0)===String(M)).filter(a=>"all"===O||String(d3(a)||0)===String(O)).filter(b=>!a||[b.subject,b.title,b.lastMessage,b.status,b.folder,b.participantRoles].join(" ").toLowerCase().includes(a)).sort((a,b)=>ei(b)-ei(a))},[O,I,G,K,M,y]),ak=(0,g.useMemo)(()=>Y?.id?A.filter(a=>dY(a.threadId)===dY(Y.id)).sort((a,b)=>dW(a.createdAt||a.sentAt)-dW(b.createdAt||b.sentAt)):[],[Y,A]),al=(0,g.useMemo)(()=>({threads:y.length,inbox:y.filter(a=>"inbox"===eh(a)).length,sent:y.filter(a=>"sent"===eh(a)).length,unread:A.filter(a=>!a.readAt&&"inbound"===String(a.direction||"").toLowerCase()).length,archived:y.filter(a=>"archived"===eh(a)).length,contacts:ag.length,showing:aj.length,schools:u.length,branches:w.length}),[w.length,ag.length,A,u.length,aj.length,y]),am=(0,g.useMemo)(()=>["inbox"!==I,"all"!==K,"all"!==M,"all"!==O].filter(Boolean).length,[O,I,K,M]);async function an(){if(!a)return ae("error","Account context is required.");if(!ac.subject.trim()||!ac.body.trim()||!ac.recipientUserId)return ae("error","Subject, message and recipient are required.");let b=ag.find(a=>a.key===ac.recipientUserId);if(!b)return ae("error","Select a valid recipient.");o(!0);try{let c=await (0,p.oJ)("messageThreads",{accountId:String(a),schoolId:b.schoolId||null,branchId:b.branchId||null,subject:ac.subject.trim(),participantUserIds:[String(d_(s||{})),String(b.id)].filter(Boolean),participantRoles:["owner",b.roleGroup],ownerUserId:d_(s||{}),folder:"sent",status:"open",lastMessage:ac.body.trim(),lastMessageAt:Date.now(),createdByRole:"owner",active:!0,isDeleted:!1}),d=dY(c?.id);if(!d)throw Error("Could not create message thread.");await (0,p.oJ)("messages",{accountId:String(a),schoolId:Number(b.schoolId||0),branchId:Number(b.branchId||0),threadId:d,senderRole:"owner",ownerUserId:d_(s||{}),recipientUserId:String(b.id),recipientRole:b.roleGroup,body:ac.body.trim(),direction:"outbound",status:"sent",sentAt:Date.now(),active:!0,isDeleted:!1}),R(!1),ad(dV),await af(),ae("success","Message sent successfully.")}catch(a){console.error("Failed to send owner message:",a),ae("error",a?.message||"Failed to send message.")}finally{o(!1)}}async function ao(){if(!a)return ae("error","Account context is required.");if(!Y?.id||!$.trim())return;let b=dY(Y.id);if(!b)return;let c=$.trim();o(!0);try{await (0,p.oJ)("messages",{accountId:String(a),schoolId:dY(Y.schoolId)||null,branchId:dY(Y.branchId)||null,threadId:b,senderRole:"owner",ownerUserId:d_(s||{}),body:c,direction:"outbound",status:"sent",sentAt:Date.now(),active:!0,isDeleted:!1});let d=await (0,p.Po)("messageThreads",b,{lastMessage:c,lastMessageAt:Date.now(),folder:"sent"});_(""),await af(),d?.id?Z(d):Z(a=>a?{...a,lastMessage:c,lastMessageAt:Date.now(),folder:"sent"}:a),ae("success","Reply sent.")}catch(a){console.error("Failed to reply:",a),ae("error",a?.message||"Failed to send reply.")}finally{o(!1)}}async function ap(a){let b=dY(a.id||a.localId);if(b)try{await (0,p.Po)("messageThreads",b,{folder:"archived"}),X(null),await af(),ae("success","Thread archived.")}catch(a){ae("error",a?.message||"Failed to archive thread.")}}async function aq(a){let b=dY(a.id||a.localId);if(b)try{await (0,p.Po)("messageThreads",b,{folder:"inbox"}),X(null),await af(),ae("success","Thread restored.")}catch(a){ae("error",a?.message||"Failed to restore thread.")}}async function ar(a){let b=dY(a.id||a.localId);if(b&&window.confirm(`Delete "${eg(a)}"? This will sync as a soft delete.`))try{for(let a of(await (0,p.R8)("messageThreads",b),A.filter(a=>dY(a.threadId)===b))){let b=dY(a.id||a.localId);b&&await (0,p.R8)("messages",b)}Y&&dY(Y.id)===b&&Z(null),X(null),await af(),ae("success","Thread deleted.")}catch(a){ae("error",a?.message||"Failed to delete thread.")}}return i||c||e?(0,f.jsxs)("main",{className:"ba-page",style:{"--ba-primary":h},children:[(0,f.jsx)("style",{children:ex}),(0,f.jsxs)("section",{className:"ba-state",children:[(0,f.jsx)("div",{className:"ba-spinner"}),(0,f.jsx)("h2",{children:"Opening owner messages..."}),(0,f.jsx)("p",{children:"Loading account conversations, schools, branches and owner contacts."})]})]}):b&&a?(0,f.jsxs)("main",{className:"ba-page",style:{"--ba-primary":h},children:[(0,f.jsx)("style",{children:ex}),aa?(0,f.jsxs)("section",{className:`ba-toast ${aa.tone}`,children:[aa.message,(0,f.jsx)("button",{type:"button",onClick:()=>ab(null),"aria-label":"Close notification",children:"✕"})]}):null,(0,f.jsxs)("section",{className:"ba-search-card","aria-label":"Owner messages search and actions",children:[(0,f.jsx)("span",{className:`status-dot-mini ${al.unread?"orange":al.threads?"green":"gray"}`,title:`${al.threads} thread(s)`}),(0,f.jsxs)("label",{className:"ba-search",children:[(0,f.jsx)("span",{children:"⌕"}),(0,f.jsx)("input",{value:G,onChange:a=>H(a.target.value),placeholder:"Search owner messages...","aria-label":"Search messages"})]}),(0,f.jsx)("button",{type:"button",className:"ba-add-inline",onClick:function(){ad(dV),R(!0)},"aria-label":"Compose message",children:"+"}),(0,f.jsxs)("button",{type:"button",className:`ba-filter-button ${am?"active":""}`,onClick:()=>T(!0),"aria-label":"Open filters",title:"Filters",children:[(0,f.jsx)(en,{}),am?(0,f.jsx)("b",{children:am}):null]}),(0,f.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>V(!0),"aria-label":"More options",children:"⋯"})]}),("inbox"!==I||"all"!==K||"all"!==M||"all"!==O||G.trim())&&(0,f.jsxs)("section",{className:"ba-filter-chips","aria-label":"Active filters",children:["inbox"!==I&&(0,f.jsxs)("button",{type:"button",onClick:()=>J("inbox"),children:["Folder: ",I," \xd7"]}),"all"!==K&&(0,f.jsxs)("button",{type:"button",onClick:()=>L("all"),children:["Role: ",d9(K)," \xd7"]}),"all"!==M&&(0,f.jsx)("button",{type:"button",onClick:()=>N("all"),children:"School \xd7"}),"all"!==O&&(0,f.jsx)("button",{type:"button",onClick:()=>P("all"),children:"Branch \xd7"}),G.trim()&&(0,f.jsxs)("button",{type:"button",onClick:()=>H(""),children:["Search: ",G.trim()," \xd7"]})]}),"analytics"===q?(0,f.jsx)(eu,{summary:al,threads:y,contacts:ag}):null,"table"===q?(0,f.jsx)(et,{rows:aj,openThread:Z,selectThread:X,archiveThread:ap,restoreThread:aq,deleteThread:ar}):null,"cards"===q?(0,f.jsxs)("section",{className:"ba-list",children:[aj.map(a=>(0,f.jsx)(ep,{thread:a,onOpen:()=>X(a)},String(dX(a)))),aj.length?null:(0,f.jsx)(em,{text:"No owner message threads found."})]}):null,S?(0,f.jsx)(eq,{folder:I,roleFilter:K,schoolFilter:M,branchFilter:O,schools:u,branches:w,setFolder:J,setRoleFilter:L,setSchoolFilter:a=>{N(a),P("all")},setBranchFilter:P,onClose:()=>T(!1)}):null,U?(0,f.jsx)(er,{view:q,setView:a=>{r(a),V(!1)},summary:al,onRefresh:async()=>{V(!1),await af()},onClose:()=>V(!1)}):null,W?(0,f.jsx)(es,{thread:W,openThread:a=>{Z(a),X(null)},archiveThread:ap,restoreThread:aq,deleteThread:ar,onClose:()=>X(null)}):null,Y?(0,f.jsx)(ev,{thread:Y,threadMessages:ak,messageText:$,setMessageText:_,saving:n,reply:ao,close:()=>Z(null)}):null,Q?(0,f.jsx)(ew,{contacts:ag,visibleContacts:ah,schools:u,composeBranches:ai,form:ac,setForm:ad,saving:n,sendNew:an,close:()=>R(!1)}):null]}):(0,f.jsxs)("main",{className:"ba-page",style:{"--ba-primary":h},children:[(0,f.jsx)("style",{children:ex}),(0,f.jsxs)("section",{className:"ba-state",children:[(0,f.jsx)("div",{className:"ba-spinner"}),(0,f.jsx)("h2",{children:"Redirecting to login..."}),(0,f.jsx)("p",{children:"You must sign in before managing owner messages."})]})]})}function ep({thread:a,onOpen:b}){let c,d,e=eh(a);return(0,f.jsxs)("button",{type:"button",className:"thread-row",onClick:b,children:[(0,f.jsx)("span",{className:"thread-avatar",children:"\uD83D\uDCAC"}),(0,f.jsxs)("span",{className:"thread-main",children:[(0,f.jsx)("strong",{children:eg(a)}),(0,f.jsx)("small",{children:(c=Array.from(new Set((Array.isArray(a.participantRoles)?a.participantRoles.map(d9).filter(Boolean):String(a.participantRoles||"").split(/[\s,]+/).filter(Boolean).map(d9)).filter(a=>"owner"!==a.toLowerCase()))),d=[d2(a)?`School ${d2(a)}`:"",d3(a)?`Branch ${d3(a)}`:""].filter(Boolean).join(" \xb7 "),[c.join(", "),d].filter(Boolean).join(" \xb7 ")||"Authority contact")}),(0,f.jsxs)("em",{children:[ej(a.lastMessage)," \xb7 ",eb(a.lastMessageAt||a.updatedAt||a.createdAt)]})]}),(0,f.jsxs)("span",{className:"thread-side",children:[(0,f.jsx)(el,{tone:ek(e),children:e}),(0,f.jsx)("i",{children:"⋯"})]})]})}function eq({folder:a,roleFilter:b,schoolFilter:c,branchFilter:d,schools:e,branches:g,setFolder:h,setRoleFilter:i,setSchoolFilter:j,setBranchFilter:k,onClose:l}){return"all"===c||g.filter(a=>String(a.schoolId||0)===String(c)),(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Filters"}),(0,f.jsx)("p",{children:"Choose message folder and contact role."})]}),(0,f.jsx)("button",{type:"button",onClick:l,"aria-label":"Close filters",children:"✕"})]}),(0,f.jsxs)("div",{className:"ba-form compact",children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Folder"}),(0,f.jsxs)("select",{value:a,onChange:a=>h(a.target.value),children:[(0,f.jsx)("option",{value:"inbox",children:"Inbox"}),(0,f.jsx)("option",{value:"sent",children:"Sent"}),(0,f.jsx)("option",{value:"archived",children:"Archived"}),(0,f.jsx)("option",{value:"all",children:"All"})]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Role"}),(0,f.jsx)("select",{value:b,onChange:a=>i(a.target.value),children:dU.map(a=>(0,f.jsx)("option",{value:a.value,children:a.label},a.value))})]})]}),(0,f.jsxs)("div",{className:"ba-sheet-actions",children:[(0,f.jsx)("button",{type:"button",onClick:()=>{h("inbox"),i("all"),j("all"),k("all")},children:"Reset"}),(0,f.jsx)("button",{type:"button",className:"primary",onClick:l,children:"Apply"})]})]})})}function er({view:a,setView:b,summary:c,onRefresh:d,onClose:e}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"More"}),(0,f.jsx)("p",{children:"Advanced views stay here so the owner inbox remains compact."})]}),(0,f.jsx)("button",{type:"button",onClick:e,"aria-label":"Close menu",children:"✕"})]}),(0,f.jsxs)("div",{className:"ba-menu-list",children:[(0,f.jsxs)("button",{type:"button",className:"cards"===a?"active":"",onClick:()=>b("cards"),children:[(0,f.jsx)("span",{children:"☰"}),(0,f.jsx)("b",{children:"List view"}),(0,f.jsx)("small",{children:"Compact owner message threads"})]}),(0,f.jsxs)("button",{type:"button",className:"table"===a?"active":"",onClick:()=>b("table"),children:[(0,f.jsx)("span",{children:"☷"}),(0,f.jsx)("b",{children:"Table view"}),(0,f.jsx)("small",{children:"Dense laptop-friendly thread list"})]}),(0,f.jsxs)("button",{type:"button",className:"analytics"===a?"active":"",onClick:()=>b("analytics"),children:[(0,f.jsx)("span",{children:"◔"}),(0,f.jsx)("b",{children:"Analytics"}),(0,f.jsxs)("small",{children:[c.threads," thread(s), ",c.contacts," contacts"]})]}),(0,f.jsxs)("button",{type:"button",onClick:d,children:[(0,f.jsx)("span",{children:"↻"}),(0,f.jsx)("b",{children:"Refresh"}),(0,f.jsx)("small",{children:"Reload local owner messages"})]})]})]})})}function es({thread:a,openThread:b,archiveThread:c,restoreThread:d,deleteThread:e,onClose:g}){let h=eh(a);return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-profile",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:eg(a)}),(0,f.jsxs)("p",{children:[eb(a.lastMessageAt||a.updatedAt||a.createdAt)," \xb7 ",h]})]}),(0,f.jsx)("button",{type:"button",onClick:g,"aria-label":"Close thread actions",children:"✕"})]}),(0,f.jsx)("p",{className:"thread-preview",children:ej(a.lastMessage)}),(0,f.jsxs)("div",{className:"ba-menu-list",children:[(0,f.jsxs)("button",{type:"button",onClick:()=>b(a),children:[(0,f.jsx)("span",{children:"↗"}),(0,f.jsx)("b",{children:"Open conversation"}),(0,f.jsx)("small",{children:"Read messages and reply"})]}),"archived"===h?(0,f.jsxs)("button",{type:"button",onClick:()=>d(a),children:[(0,f.jsx)("span",{children:"↩"}),(0,f.jsx)("b",{children:"Restore"}),(0,f.jsx)("small",{children:"Move this thread back to inbox"})]}):(0,f.jsxs)("button",{type:"button",onClick:()=>c(a),children:[(0,f.jsx)("span",{children:"\uD83D\uDDC4"}),(0,f.jsx)("b",{children:"Archive"}),(0,f.jsx)("small",{children:"Move this thread out of inbox"})]}),(0,f.jsxs)("button",{type:"button",className:"danger",onClick:()=>e(a),children:[(0,f.jsx)("span",{children:"⌫"}),(0,f.jsx)("b",{children:"Delete"}),(0,f.jsx)("small",{children:"Soft delete this thread and messages"})]})]})]})})}function et({rows:a,openThread:b,selectThread:c,archiveThread:d,restoreThread:e,deleteThread:g}){return(0,f.jsx)("section",{className:"ba-table-card",children:(0,f.jsxs)("div",{className:"ba-table-scroll",children:[(0,f.jsxs)("table",{children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsxs)("th",{children:["Messages (",a.length,")"]}),(0,f.jsx)("th",{children:"Updated"}),(0,f.jsx)("th",{children:"Folder"}),(0,f.jsx)("th",{children:"Status"}),(0,f.jsx)("th",{children:"Last Message"}),(0,f.jsx)("th",{children:"Actions"})]})}),(0,f.jsx)("tbody",{children:a.map(a=>{let h=eh(a);return(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{children:[(0,f.jsx)("strong",{children:eg(a)}),(0,f.jsx)("span",{children:ej(a.lastMessage).slice(0,70)})]}),(0,f.jsx)("td",{children:eb(a.lastMessageAt||a.updatedAt||a.createdAt)}),(0,f.jsx)("td",{children:(0,f.jsx)(el,{tone:ek(h),children:h})}),(0,f.jsx)("td",{children:(0,f.jsx)(el,{children:a.status||"open"})}),(0,f.jsx)("td",{children:ej(a.lastMessage).slice(0,120)}),(0,f.jsx)("td",{children:(0,f.jsxs)("div",{className:"ba-table-actions",children:[(0,f.jsx)("button",{type:"button",onClick:()=>b(a),children:"Open"}),(0,f.jsx)("button",{type:"button",onClick:()=>c(a),children:"More"}),"archived"===h?(0,f.jsx)("button",{type:"button",onClick:()=>e(a),children:"Restore"}):(0,f.jsx)("button",{type:"button",onClick:()=>d(a),children:"Archive"}),(0,f.jsx)("button",{type:"button",className:"ba-delete",onClick:()=>g(a),children:"Delete"})]})})]},String(dX(a)))})})]}),a.length?null:(0,f.jsx)("div",{className:"ba-empty-table",children:"No owner message thread matches your search/filter."})]})})}function eu({summary:a,threads:b,contacts:c}){return(0,f.jsxs)("section",{className:"ba-analysis-grid",children:[(0,f.jsxs)("article",{className:"ba-analysis",children:[(0,f.jsx)("span",{children:"Threads"}),(0,f.jsx)("strong",{children:a.threads}),(0,f.jsx)("p",{children:"Total owner-visible message thread(s)."})]}),(0,f.jsxs)("article",{className:"ba-analysis",children:[(0,f.jsx)("span",{children:"Unread"}),(0,f.jsx)("strong",{children:a.unread}),(0,f.jsx)("p",{children:"Inbound message(s) not marked as read."})]}),(0,f.jsxs)("article",{className:"ba-analysis",children:[(0,f.jsx)("span",{children:"Contacts"}),(0,f.jsx)("strong",{children:a.contacts}),(0,f.jsx)("p",{children:"School, branch and finance users the owner can message."})]}),(0,f.jsxs)("article",{className:"ba-analysis",children:[(0,f.jsx)("span",{children:"Scope"}),(0,f.jsx)("strong",{children:a.schools}),(0,f.jsxs)("p",{children:[a.branches," branch(es) under this owner account."]})]}),["inbox","sent","archived"].map(a=>{let c=b.filter(b=>eh(b)===a).length,d=b.length?Math.round(c/b.length*100):0;return(0,f.jsxs)("article",{className:"ba-analysis",children:[(0,f.jsx)("span",{children:a}),(0,f.jsx)("strong",{children:c}),(0,f.jsx)("div",{className:"ba-progress",children:(0,f.jsx)("i",{style:{width:`${Math.max(4,d)}%`}})}),(0,f.jsxs)("p",{children:[d,"% of all owner message threads."]})]},a)}),["admin","school_admin","branch_admin","accountant"].map(a=>{let b=c.filter(b=>b.role===a).length,d=c.length?Math.round(b/c.length*100):0;return(0,f.jsxs)("article",{className:"ba-analysis",children:[(0,f.jsx)("span",{children:d9(a)}),(0,f.jsx)("strong",{children:b}),(0,f.jsx)("div",{className:"ba-progress",children:(0,f.jsx)("i",{style:{width:`${Math.max(4,d)}%`}})}),(0,f.jsxs)("p",{children:[d,"% of available owner contacts."]})]},a)})]})}function ev({thread:a,threadMessages:b,messageText:c,setMessageText:d,saving:e,reply:g,close:h}){return(0,f.jsxs)("div",{className:"ba-drawer-layer",children:[(0,f.jsx)("button",{className:"ba-drawer-overlay",type:"button",onClick:h,"aria-label":"Close conversation"}),(0,f.jsxs)("aside",{className:"ba-drawer",children:[(0,f.jsxs)("div",{className:"ba-drawer-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Conversation"}),(0,f.jsx)("h2",{children:eg(a)}),(0,f.jsxs)("span",{children:[b.length," message(s)"]})]}),(0,f.jsx)("button",{type:"button",onClick:h,children:"✕"})]}),(0,f.jsxs)("section",{className:"ba-list",children:[b.map(a=>(0,f.jsxs)("article",{className:`message-bubble ${"outbound"===a.direction?"outbound":"inbound"}`,children:[(0,f.jsxs)("div",{className:"ba-chip-row",children:[(0,f.jsx)(el,{tone:"outbound"===a.direction?"green":"blue",children:a.direction||"message"}),(0,f.jsx)(el,{children:eb(a.sentAt||a.createdAt)})]}),(0,f.jsx)("p",{children:a.body})]},String(dX(a)))),b.length?null:(0,f.jsx)(em,{text:"No messages in this thread."})]}),(0,f.jsxs)("section",{className:"ba-form-card",children:[(0,f.jsx)("textarea",{value:c,onChange:a=>d(a.target.value),placeholder:"Write a reply..."}),(0,f.jsxs)("div",{className:"ba-drawer-actions",children:[(0,f.jsx)("button",{className:"ba-btn",type:"button",onClick:h,children:"Close"}),(0,f.jsx)("button",{className:"ba-primary",type:"button",disabled:e||!c.trim(),onClick:g,children:e?"Sending...":"Send Reply"})]})]})]})]})}function ew({contacts:a,visibleContacts:b,schools:c,composeBranches:d,form:e,setForm:g,saving:h,sendNew:i,close:j}){return(0,f.jsxs)("div",{className:"ba-drawer-layer",children:[(0,f.jsx)("button",{className:"ba-drawer-overlay",type:"button",onClick:j,"aria-label":"Close compose"}),(0,f.jsxs)("aside",{className:"ba-drawer",children:[(0,f.jsxs)("div",{className:"ba-drawer-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"Compose"}),(0,f.jsx)("h2",{children:"New Owner Message"}),(0,f.jsxs)("span",{children:[a.length," available owner contact(s)"]})]}),(0,f.jsx)("button",{type:"button",onClick:j,children:"✕"})]}),(0,f.jsxs)("section",{className:"ba-form-card",children:[(0,f.jsxs)("div",{className:"ba-form-grid",children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Role Filter"}),(0,f.jsx)("select",{value:e.roleFilter,onChange:a=>g({...e,roleFilter:a.target.value,recipientUserId:""}),children:dU.map(a=>(0,f.jsx)("option",{value:a.value,children:a.label},a.value))})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"School Filter"}),(0,f.jsxs)("select",{value:e.schoolFilter,onChange:a=>g({...e,schoolFilter:a.target.value,branchFilter:"all",recipientUserId:""}),children:[(0,f.jsx)("option",{value:"all",children:"All schools"}),c.map(a=>(0,f.jsx)("option",{value:String(dX(a)),children:d4(a)},String(dX(a))))]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Branch Filter"}),(0,f.jsxs)("select",{value:e.branchFilter,onChange:a=>g({...e,branchFilter:a.target.value,recipientUserId:""}),children:[(0,f.jsx)("option",{value:"all",children:"All branches"}),d.map(a=>(0,f.jsx)("option",{value:String(dX(a)),children:d4(a)},String(dX(a))))]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Recipient"}),(0,f.jsxs)("select",{value:e.recipientUserId,onChange:a=>g({...e,recipientUserId:a.target.value}),children:[(0,f.jsx)("option",{value:"",children:"Select recipient"}),b.map(a=>(0,f.jsxs)("option",{value:a.key,children:[dZ(a.name,d9(a.roleGroup))," \xb7 ",d9(a.roleGroup),a.schoolName?` \xb7 ${a.schoolName}`:"",a.branchName?` \xb7 ${a.branchName}`:""]},a.key))]})]}),(0,f.jsxs)("label",{className:"wide",children:[(0,f.jsx)("span",{children:"Subject"}),(0,f.jsx)("input",{value:e.subject,onChange:a=>g({...e,subject:a.target.value}),placeholder:"Message subject"})]}),(0,f.jsxs)("label",{className:"wide",children:[(0,f.jsx)("span",{children:"Message"}),(0,f.jsx)("textarea",{value:e.body,onChange:a=>g({...e,body:a.target.value}),placeholder:"Write your message..."})]})]}),(0,f.jsxs)("p",{className:"ba-hint",children:[b.length," contact(s) match these authority filters."]})]}),(0,f.jsxs)("div",{className:"ba-drawer-actions",children:[(0,f.jsx)("button",{className:"ba-btn",type:"button",onClick:j,children:"Cancel"}),(0,f.jsx)("button",{className:"ba-primary",type:"button",disabled:h,onClick:i,children:h?"Sending...":"Send"})]})]})]})}let ex=`
@keyframes spin { to { transform: rotate(360deg); } }
.ba-page{--ease:cubic-bezier(.2,.8,.2,1);min-height:100dvh;width:100%;max-width:100%;min-width:0;padding:calc(8px * var(--local-density-scale,1));padding-bottom:max(40px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--ba-primary) 9%,transparent),transparent 30rem),var(--bg,#f7f8fb);color:var(--text,#111827);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);font-size:var(--font-size,14px);overflow-x:hidden}.ba-page *,.ba-page *::before,.ba-page *::after{box-sizing:border-box;min-width:0}.ba-page button,.ba-page input,.ba-page select,.ba-page textarea{font:inherit;max-width:100%}.ba-page button{-webkit-tap-highlight-color:transparent}.ba-page input,.ba-page select,.ba-page textarea{width:100%;min-height:44px;border:1px solid var(--input-border,var(--border,rgba(0,0,0,.10)));border-radius:16px;padding:0 12px;background:var(--input-bg,var(--surface,#fff));color:var(--input-text,var(--text,#111827));outline:none;font-weight:750}.ba-page textarea{min-height:130px;padding:12px;resize:vertical;line-height:1.55}.ba-page input:focus,.ba-page select:focus,.ba-page textarea:focus{border-color:color-mix(in srgb,var(--ba-primary) 52%,var(--border,rgba(0,0,0,.10)));box-shadow:0 0 0 4px color-mix(in srgb,var(--ba-primary) 12%,transparent)}.ba-state,.ba-search-card,.thread-row,.ba-table-card,.ba-analysis,.ba-empty,.ba-sheet,.ba-form-card{background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.10));box-shadow:0 12px 28px rgba(15,23,42,.045)}.ba-state{min-height:min(420px,calc(100dvh - 32px));width:min(520px,100%);margin:0 auto;display:grid;place-items:center;align-content:center;gap:10px;padding:22px;border-radius:28px;text-align:center}.ba-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--ba-primary) 18%,transparent);border-top-color:var(--ba-primary);animation:spin .8s linear infinite}.ba-state h2{margin:0;font-size:22px;font-weight:1000;letter-spacing:-.04em}.ba-state p{max-width:34rem;margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.ba-toast{position:sticky;top:8px;z-index:40;display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;padding:12px 14px;border-radius:18px;font-size:13px;font-weight:850;box-shadow:0 18px 40px rgba(15,23,42,.12)}.ba-toast.success{background:rgba(34,197,94,.14);color:#166534}.ba-toast.error{background:rgba(239,68,68,.12);color:#991b1b}.ba-toast.info{background:rgba(59,130,246,.13);color:#1d4ed8}.ba-toast button{border:0;background:transparent;color:currentColor;font-weight:1000;cursor:pointer}.ba-search-card{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto auto;gap:8px;align-items:center;margin-top:2px;padding:8px;border-radius:24px}.ba-search{min-width:0;display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:8px;min-height:44px;padding:0 11px;border-radius:18px;background:color-mix(in srgb,var(--muted,#64748b) 7%,transparent)}.ba-search span{color:var(--muted,#64748b);font-size:17px;font-weight:1000}.ba-search input{min-height:42px;border:0;padding:0;border-radius:0;background:transparent;box-shadow:none;font-size:14px}.ba-icon-button,.ba-filter-button,.ba-add-inline{width:42px;height:42px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;display:grid;place-items:center;background:var(--card-bg,var(--surface,#fff));color:var(--text,#111827);font-size:18px;font-weight:1000;cursor:pointer;box-shadow:0 10px 22px rgba(15,23,42,.045)}.ba-add-inline{border-color:var(--ba-primary);background:var(--ba-primary);color:#fff;font-size:25px;line-height:1;box-shadow:0 12px 28px color-mix(in srgb,var(--ba-primary) 22%,transparent)}.ba-slider-icon{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.ba-filter-button{position:relative;background:color-mix(in srgb,var(--ba-primary) 8%,var(--card-bg,#fff));color:var(--ba-primary)}.ba-filter-button.active{background:var(--ba-primary);color:#fff;border-color:var(--ba-primary)}.ba-filter-button b{position:absolute;top:-4px;right:-4px;min-width:19px;height:19px;display:grid;place-items:center;border-radius:999px;background:#ef4444;color:#fff;font-size:10px;border:2px solid var(--card-bg,#fff)}.status-dot-mini{width:10px;height:10px;border-radius:999px;display:inline-flex;box-shadow:0 0 0 4px color-mix(in srgb,var(--muted,#64748b) 10%,transparent)}.status-dot-mini.green{background:#22c55e}.status-dot-mini.orange{background:#f59e0b}.status-dot-mini.gray{background:var(--muted,#64748b)}.ba-filter-chips{display:flex;gap:7px;overflow-x:auto;padding:8px 1px 0;scrollbar-width:none}.ba-filter-chips::-webkit-scrollbar{display:none}.ba-filter-chips button{flex:0 0 auto;min-height:31px;border:0;border-radius:999px;padding:0 10px;background:color-mix(in srgb,var(--ba-primary) 11%,transparent);color:var(--ba-primary);font-size:11px;font-weight:950;white-space:nowrap;cursor:pointer}.ba-list{display:grid;gap:7px;margin-top:10px}.thread-row{width:100%;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:10px;padding:10px;border-radius:22px;text-align:left;cursor:pointer;color:var(--text,#111827);transition:transform .16s var(--ease),box-shadow .16s var(--ease),border-color .16s var(--ease)}.thread-row:hover{transform:translateY(-1px);border-color:color-mix(in srgb,var(--ba-primary) 28%,var(--border,rgba(0,0,0,.10)));box-shadow:0 15px 34px rgba(15,23,42,.07)}.thread-avatar{width:42px;height:42px;display:grid;place-items:center;border-radius:16px;background:var(--ba-primary);color:#fff;font-size:19px;box-shadow:0 10px 22px color-mix(in srgb,var(--ba-primary) 21%,transparent)}.thread-main{display:grid;gap:2px}.thread-main strong,.thread-main small,.thread-main em{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.thread-main strong{font-size:14px;font-weight:1000;letter-spacing:-.02em;color:var(--text,#111827)}.thread-main small{color:var(--muted,#64748b);font-size:12px;font-weight:800}.thread-main em{color:var(--muted,#64748b);font-size:11px;font-style:normal;font-weight:750}.thread-side{display:grid;justify-items:end;gap:5px}.thread-side i{font-style:normal;color:var(--muted,#64748b);font-weight:1000}.ba-chip{max-width:100%;display:inline-flex;align-items:center;min-height:25px;padding:4px 9px;border-radius:999px;font-size:11px;font-weight:950;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:capitalize}.ba-chip.green{background:rgba(34,197,94,.12);color:#16a34a}.ba-chip.red{background:rgba(239,68,68,.12);color:#dc2626}.ba-chip.blue{background:rgba(59,130,246,.12);color:#2563eb}.ba-chip.gray{background:color-mix(in srgb,var(--muted,#64748b) 14%,transparent);color:var(--muted,#64748b)}.ba-chip.orange{background:rgba(245,158,11,.14);color:#b45309}.ba-chip.purple{background:rgba(147,51,234,.12);color:#7e22ce}.ba-table-card{margin-top:10px;padding:10px;border-radius:24px;overflow:hidden}.ba-table-scroll{width:100%;max-width:100%;overflow-x:auto;border-radius:18px;border:1px solid var(--border,rgba(0,0,0,.08))}.ba-table-scroll table{width:100%;min-width:980px;border-collapse:collapse;background:var(--card-bg,var(--surface,#fff));color:var(--text,#111827)}.ba-table-scroll th,.ba-table-scroll td{padding:10px;border-bottom:1px solid var(--border,rgba(0,0,0,.08));vertical-align:top;text-align:left;font-size:13px;color:var(--text,#111827)}.ba-table-scroll th{background:color-mix(in srgb,var(--ba-primary) 6%,var(--card-bg,var(--surface,#fff)));color:var(--muted,#64748b);font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.07em}.ba-table-scroll td strong,.ba-table-scroll td span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ba-table-scroll td span{margin-top:3px;color:var(--muted,#64748b);font-size:11px}.ba-table-actions{display:flex;flex-wrap:wrap;gap:7px}.ba-table-actions button,.ba-btn,.ba-primary,.ba-delete{min-height:34px;border-radius:999px;padding:0 10px;font-size:11px;font-weight:950;cursor:pointer}.ba-btn,.ba-table-actions button{border:1px solid var(--border,rgba(0,0,0,.10));background:var(--surface,#fff);color:var(--text,#111827)}.ba-primary,.ba-table-actions button:first-child{border:0;background:var(--ba-primary);color:#fff}.ba-primary:disabled{opacity:.6;cursor:not-allowed}.ba-delete,.ba-table-actions .ba-delete{color:var(--muted,#64748b);background:color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff));border:1px solid color-mix(in srgb,var(--muted,#64748b) 24%,var(--border,rgba(0,0,0,.10)))}.ba-empty-table{padding:22px;text-align:center;color:var(--muted,#64748b);font-weight:850}.ba-analysis-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;margin-top:10px}.ba-analysis,.ba-empty{padding:13px;border-radius:24px}.ba-analysis span{color:var(--muted,#64748b);font-size:11px;font-weight:950;text-transform:uppercase;letter-spacing:.08em}.ba-analysis strong{display:block;margin-top:8px;font-size:clamp(22px,7vw,30px);line-height:1;font-weight:1000;letter-spacing:-.06em;overflow-wrap:anywhere}.ba-analysis p{margin:8px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.ba-progress{height:8px;margin-top:12px;border-radius:999px;background:color-mix(in srgb,var(--muted,#64748b) 18%,transparent);overflow:hidden}.ba-progress i{display:block;height:100%;border-radius:inherit;background:var(--ba-primary)}.ba-empty{display:grid;place-items:center;align-content:center;gap:8px;min-height:220px;text-align:center;border-style:dashed}.ba-empty div{width:56px;height:56px;display:grid;place-items:center;border-radius:22px;background:color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));font-size:28px}.ba-empty h3{margin:0;font-size:18px;font-weight:1000}.ba-empty p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.ba-sheet-backdrop{position:fixed;inset:0;z-index:80;display:grid;place-items:end center;padding:10px;background:rgba(15,23,42,.58);backdrop-filter:blur(12px)}.ba-sheet{width:min(760px,100%);max-height:min(92dvh,820px);overflow-y:auto;border-radius:28px;padding:14px}.ba-sheet.small{width:min(520px,100%)}.ba-sheet-head,.ba-sheet-profile{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;padding:2px 2px 14px}.ba-sheet-head h2,.ba-sheet-profile h2{margin:0;font-size:20px;font-weight:1000;letter-spacing:-.05em}.ba-sheet-head p,.ba-sheet-profile p{margin:4px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.ba-sheet-head button,.ba-sheet-profile button{width:38px;height:38px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;background:var(--surface,#fff);color:var(--text,#111827);font-weight:1000;cursor:pointer}.ba-form{display:grid;gap:10px}.ba-form label{display:grid;gap:6px}.ba-form span,.ba-form-grid label span{color:var(--muted,#64748b);font-size:11px;font-weight:950;letter-spacing:.06em;text-transform:uppercase}.ba-sheet-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:14px}.ba-sheet-actions button{min-height:38px;border-radius:999px;border:1px solid var(--border,rgba(0,0,0,.10));background:var(--surface,#fff);color:var(--text,#111827);font-weight:950;padding:0 14px}.ba-sheet-actions button.primary{background:var(--ba-primary);color:#fff;border-color:var(--ba-primary)}.ba-menu-list{display:grid;gap:8px}.ba-menu-list button{width:100%;display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:10px;row-gap:2px;align-items:center;text-align:left;padding:11px;border-radius:18px;border:1px solid var(--border,rgba(0,0,0,.10));background:var(--surface,#fff);color:var(--text,#111827);cursor:pointer}.ba-menu-list button.active{border-color:color-mix(in srgb,var(--ba-primary) 35%,var(--border,rgba(0,0,0,.10)));background:color-mix(in srgb,var(--ba-primary) 9%,var(--surface,#fff))}.ba-menu-list button.danger{background:color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff));color:var(--text,#111827)}.ba-menu-list span{grid-row:1/3;width:34px;height:34px;display:grid;place-items:center;border-radius:13px;background:color-mix(in srgb,var(--ba-primary) 10%,transparent);color:var(--ba-primary);font-weight:1000}.ba-menu-list b{font-size:13px;font-weight:1000}.ba-menu-list small{color:var(--muted,#64748b);font-size:11px;font-weight:750}.thread-preview{margin:0 0 10px;padding:12px;border-radius:18px;background:color-mix(in srgb,var(--muted,#64748b) 8%,transparent);color:var(--text,#111827);font-size:13px;line-height:1.55}.ba-drawer-layer{position:fixed;inset:0;z-index:80}.ba-drawer-overlay{position:absolute;inset:0;border:0;background:rgba(15,23,42,.52)}.ba-drawer{position:absolute;right:0;top:0;bottom:0;width:min(94vw,720px);max-width:100vw;overflow-y:auto;overflow-x:hidden;background:var(--bg,#f7f8fb);color:var(--text,#111827);padding:14px;box-shadow:var(--shell-shadow,-24px 0 70px rgba(15,23,42,.22))}.ba-drawer-head{position:sticky;top:0;z-index:2;display:flex;align-items:flex-start;justify-content:space-between;gap:10px;padding:6px 0 12px;background:var(--bg,#f7f8fb)}.ba-drawer-head p{margin:0;color:var(--ba-primary);font-size:11px;font-weight:950;letter-spacing:.08em;text-transform:uppercase}.ba-drawer-head h2{margin:2px 0 0;font-size:22px;font-weight:1000;letter-spacing:-.05em}.ba-drawer-head span{margin-top:3px;display:block;color:var(--muted,#64748b);font-size:12px;font-weight:750}.ba-drawer-head button{width:38px;height:38px;flex:0 0 auto;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:15px;background:var(--surface,#fff);color:var(--text,#111827);font-weight:1000;cursor:pointer}.ba-form-card{margin-top:10px;padding:12px;border-radius:22px}.ba-form-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:9px}.ba-form-grid label{display:grid;gap:6px}.ba-form-grid .wide{grid-column:1/-1}.ba-drawer-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:12px}.message-bubble{max-width:min(560px,100%);padding:12px;border-radius:22px;background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.10));box-shadow:0 12px 28px rgba(15,23,42,.045)}.message-bubble.outbound{margin-left:auto;background:color-mix(in srgb,var(--ba-primary) 9%,var(--card-bg,var(--surface,#fff)))}.message-bubble p{margin:8px 0 0;color:var(--text,#111827);font-size:13px;line-height:1.55;white-space:pre-wrap}.ba-chip-row{display:flex;align-items:center;gap:7px;flex-wrap:wrap;margin-top:0}@media(min-width:680px){.ba-page{padding:calc(12px * var(--local-density-scale,1))}.ba-analysis-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ba-form-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ba-sheet-backdrop{place-items:center;padding:18px}}@media(min-width:1040px){.ba-page{padding:calc(16px * var(--local-density-scale,1))}.ba-list{grid-template-columns:repeat(2,minmax(0,1fr))}.ba-analysis-grid{grid-template-columns:repeat(4,minmax(0,1fr));max-width:1180px;margin-left:auto;margin-right:auto}.ba-list,.ba-table-card{max-width:1180px;margin-left:auto;margin-right:auto}}@media(max-width:520px){.ba-page{padding:calc(6px * var(--local-density-scale,1))}.ba-search-card{grid-template-columns:auto minmax(0,1fr) auto auto auto;gap:6px;padding:7px;border-radius:22px}.ba-add-inline,.ba-icon-button,.ba-filter-button{width:39px;height:39px}.thread-row{border-radius:20px;padding:9px}.thread-avatar{width:39px;height:39px}.thread-main strong{font-size:13px}.thread-main small,.thread-main em{font-size:11px}.ba-table-card,.ba-analysis,.ba-empty{border-radius:20px;padding:11px}.ba-drawer-actions{grid-template-columns:minmax(0,1fr)}.ba-drawer{width:min(96vw,720px);padding:12px}.ba-sheet-actions{display:grid;grid-template-columns:minmax(0,1fr)}}
`,ey=[{value:"school_admins",label:"School Admins",note:"School-level admins only"},{value:"branch_admins",label:"Branch Admins",note:"Branch administrators only"}],ez=["in_app","email","sms","whatsapp"],eA={id:"",title:"",body:"",audience:"school_admins",schoolId:"all",branchId:"all",priority:"normal",status:"sent",publishAt:"",channels:["in_app"]};function eB(a){let b=Number(a||0);return Number.isFinite(b)?b:0}function eC(a,b=""){return String(a||"").trim()||b}function eD(a){return eE(a?.id??a?.localId??a?.cloudId??a?.payload?.id??a?.payload?.localId)}function eE(a){return null==a?"":String(a).trim()}function eF(a){if(!a)return"Not set";let b="number"==typeof a?a:new Date(a).getTime();if(!Number.isFinite(b))return"Not set";try{return new Intl.DateTimeFormat(void 0,{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(b))}catch{return"Not set"}}function eG(a,b){return a&&!0!==a.isDeleted&&(!a.accountId||!b||a.accountId===b)}function eH(a){return eC(a?.fullName||a?.name||a?.title||a?.label||a?.email,"Unnamed")}function eI(a){let b=String(a||"school_admins").toLowerCase();return ey.some(a=>a.value===b)?b:"school_admins"}function eJ(a){let b=(Array.isArray(a)?a:String(a||"in_app").split(",").map(a=>a.trim())).filter(a=>ez.includes(a));return b.length?b:["in_app"]}function eK(a){let b=eI(a);return ey.find(a=>a.value===b)?.label||b.replaceAll("_"," ")}function eL(a){let b=String(a||"sent").toLowerCase();return"draft"===b?"gray":"scheduled"===b?"orange":"failed"===b?"red":"green"}function eM(a){return"school_admins"===a?["admin","school_admin"]:"branch_admins"===a?["branch_admin"]:[]}let eN=new Set(["school_admins","branch_admins"]),eO=new Set(["admin","school_admin","branch_admin"]);function eP(a){return String(a||"").trim().toLowerCase()}async function eQ(a){let b=o.db[a];return b?.toArray?b.toArray():[]}function eR({children:a,tone:b="gray"}){return(0,f.jsx)("span",{className:`ba-chip ${b}`,children:a})}function eS({icon:a,title:b,text:c}){return(0,f.jsxs)("section",{className:"ba-empty",children:[(0,f.jsx)("div",{className:"ba-empty-icon",children:a}),(0,f.jsx)("h3",{children:b}),(0,f.jsx)("p",{children:c})]})}function eT(){return(0,f.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,f.jsx)("path",{d:"M4 7h9"}),(0,f.jsx)("path",{d:"M17 7h3"}),(0,f.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,f.jsx)("path",{d:"M4 17h3"}),(0,f.jsx)("path",{d:"M11 17h9"}),(0,f.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function eU(){(0,k.useRouter)();let{accountId:a,authenticated:b,loading:c}=(0,l.F)(),{settings:d,loading:e}=(0,m.t)(),h=d?.primaryColor||"var(--primary-color,#2563eb)",[i,j]=(0,g.useState)(!0),[n,o]=(0,g.useState)("cards"),[q,r]=(0,g.useState)([]),[s,t]=(0,g.useState)([]),[u,v]=(0,g.useState)([]),[w,x]=(0,g.useState)([]),[y,z]=(0,g.useState)([]),[A,B]=(0,g.useState)([]),[C,D]=(0,g.useState)(""),[E,F]=(0,g.useState)("all"),[G,H]=(0,g.useState)("all"),[I,J]=(0,g.useState)("all"),[K,L]=(0,g.useState)(!1),[M,N]=(0,g.useState)(!1),[O,P]=(0,g.useState)(!1),[Q,R]=(0,g.useState)("create"),[S,T]=(0,g.useState)(!1),[U,V]=(0,g.useState)(null),[W,X]=(0,g.useState)(""),[Y,Z]=(0,g.useState)(eA),$=(a,b)=>{V({tone:a,message:b}),window.setTimeout(()=>V(a=>a?.message===b?null:a),4200)};async function _(){if(!b||!a)return void j(!1);j(!0),X("");try{let[b,c,d,e,f,g,h,i]=await Promise.all([eQ("schools"),eQ("branches"),eQ("userMemberships"),eQ("memberships"),eQ("users"),eQ("accountUsers"),eQ("announcements"),eQ("announcementRecipients")]),j=b.filter(b=>eG(b,a)),k=new Set(j.map(a=>eD(a)).filter(Boolean)),l=c.filter(b=>eG(b,a)).filter(a=>!k.size||k.has(eE(a.schoolId))),m=d.length?d:e,n=f.length?f:g,o=h.filter(b=>(function(a,b){if(!eG(a,b)||"owner"!==eP(a?.createdByRole||a?.createdBy||a?.senderRole||a?.authorRole)||a?.accountWide===!0)return!1;let c=String(a?.audience||"").toLowerCase(),d=String(a?.targetRole||"").toLowerCase();if(eN.has(c)||"school_admins"===d||"branch_admins"===d)return!0;let e=(Array.isArray(a?.targetRoles)?a.targetRoles:String(a?.targetRoles||a?.targetRole||a?.role||"").split(",").map(a=>a.trim()).filter(Boolean)).map(eP).filter(Boolean);return e.length>0&&e.every(a=>eO.has(a))})(b,a)).sort((a,b)=>eB(b.sentAt||b.publishAt||b.createdAt)-eB(a.sentAt||a.publishAt||a.createdAt)),p=new Set(o.map(a=>eE(a.id||a.localId)).filter(Boolean));r(j),t(l),v(m.filter(b=>eG(b,a))),x(n.filter(b=>eG(b,a))),z(o),B(i.filter(b=>(function(a,b,c){if(!eG(a,c))return!1;let d=eE(a?.announcementId||a?.announcementLocalId||a?.announcementCloudId);if(d&&b.size&&!b.has(d))return!1;let e=eP(a?.role||a?.recipientRole||a?.targetRole),f=eI(a?.audience||a?.targetRole);return eO.has(e)||eN.has(f)})(b,p,a)))}catch(a){console.error("Failed to load owner announcements:",a),$("error","Failed to load owner announcements.")}finally{j(!1)}}let aa=(0,g.useMemo)(()=>"all"===Y.schoolId?q:q.filter(a=>String(eD(a))===String(Y.schoolId)),[Y.schoolId,q]),ab=(0,g.useMemo)(()=>{let a=new Set(aa.map(a=>eD(a)).filter(Boolean));return s.filter(b=>("all"===Y.schoolId||!!a.has(eE(b.schoolId)))&&("all"===Y.branchId||String(eD(b))===String(Y.branchId)))},[s,Y.branchId,Y.schoolId,aa]),ac=(0,g.useMemo)(()=>{let a=eM(Y.audience).map(a=>a.toLowerCase()),b=new Set(aa.map(a=>eD(a)).filter(Boolean)),c=new Set(ab.map(a=>eD(a)).filter(Boolean)),d=u.filter(d=>{let e=String(d.role||d.roleName||"").toLowerCase();return!!a.includes(e)&&("all"===Y.schoolId||!!b.has(eE(d.schoolId)))&&("all"===Y.branchId||!!c.has(eE(d.branchId)))}),e=new Set;return d.filter(a=>{let b=String(a.userId||a.userLocalId||a.accountUserId||a.email||`${a.role}-${a.schoolId}-${a.branchId}`);return!(!b||e.has(b))&&(e.add(b),!0)})},[Y.audience,Y.branchId,Y.schoolId,u,ab,aa]).length,ad=(0,g.useMemo)(()=>{let a=C.toLowerCase().trim();return y.filter(a=>"all"===E||String(a.status||"sent")===E).filter(a=>"all"===G||eI(a.audience||a.targetRole)===G).filter(a=>"all"===I||String(a.priority||"normal")===I).filter(b=>!a||[b.title,b.body,b.message,b.audience,b.status,b.priority,eJ(b.channels||b.channel).join(" ")].join(" ").toLowerCase().includes(a)).sort((a,b)=>eB(b.sentAt||b.publishAt||b.createdAt)-eB(a.sentAt||a.publishAt||a.createdAt))},[y,G,I,C,E]),ae=(0,g.useMemo)(()=>({total:y.length,shown:ad.length,sent:y.filter(a=>"sent"===String(a.status||"sent")).length,draft:y.filter(a=>"draft"===String(a.status||"")).length,scheduled:y.filter(a=>"scheduled"===String(a.status||"")).length,urgent:y.filter(a=>["urgent","high"].includes(String(a.priority||""))).length,recipients:A.length,schools:q.length,branches:s.length}),[y,s.length,ad.length,A.length,q.length]),af=(0,g.useMemo)(()=>ey.map(a=>({label:a.label,value:y.filter(b=>eI(b.audience||b.targetRole)===a.value).length})),[y]),ag=(0,g.useMemo)(()=>[{label:"Sent",value:ae.sent},{label:"Draft",value:ae.draft},{label:"Scheduled",value:ae.scheduled},{label:"High/Urgent",value:ae.urgent}],[ae]),ah=(0,g.useMemo)(()=>[E,G,I].filter(a=>"all"!==a).length,[G,I,E]);function ai(a){R("edit"),Z({id:eE(a.id||a.localId),title:String(a.title||""),body:String(a.body||a.message||""),audience:eI(a.audience||a.targetRole),schoolId:a.targetSchoolIds?.length===1?String(a.targetSchoolIds[0]):a.schoolId?String(a.schoolId):"all",branchId:a.targetBranchIds?.length===1?String(a.targetBranchIds[0]):a.branchId?String(a.branchId):"all",priority:String(a.priority||"normal"),status:String(a.status||"sent"),publishAt:"scheduled"===a.status&&a.publishAt?function(a){if(!a)return"";let b=new Date(a);if(Number.isNaN(b.getTime()))return"";let c=b.getTimezoneOffset();return new Date(b.getTime()-6e4*c).toISOString().slice(0,16)}(a.publishAt):"",channels:eJ(a.channels||a.channel)}),X(""),P(!0)}function aj(a){R("duplicate"),Z({id:"",title:`${String(a.title||"Announcement")} Copy`,body:String(a.body||a.message||""),audience:eI(a.audience||a.targetRole),schoolId:a.targetSchoolIds?.length===1?String(a.targetSchoolIds[0]):"all",branchId:a.targetBranchIds?.length===1?String(a.targetBranchIds[0]):"all",priority:String(a.priority||"normal"),status:"draft",publishAt:"",channels:eJ(a.channels||a.channel)}),X(""),P(!0)}async function ak(b,c,d,e,f){for(let a of A.filter(a=>eE(a.announcementId)===b)){let b=eE(a.id||a.localId);b&&await (0,p.R8)("announcementRecipients",b)}let g=e.length?e:["all"],h=c.length?c:[""],i=d.length?d:[""];for(let c of h)for(let d of i)for(let e of g)await (0,p.oJ)("announcementRecipients",{accountId:String(a),schoolId:c,branchId:d,announcementId:b,role:e,audience:Y.audience,channels:Y.channels,channel:Y.channels.join(","),status:"sent"===Y.status?"delivered":Y.status,deliveredAt:"sent"===Y.status?f:void 0,isDeleted:!1})}async function al(){let b=a?Y.title.trim()?Y.body.trim()?"scheduled"!==Y.status||Y.publishAt?ac?"":"No matching school admin or branch admin recipients found for this audience and scope.":"Choose a publish date and time for scheduled announcements.":"Announcement message is required.":"Announcement title is required.":"Sign in before creating announcements.";if(b)return void X(b);T(!0);try{let b=eM(Y.audience),c="all"===Y.schoolId?q.map(a=>eD(a)).filter(Boolean):[eE(Y.schoolId)].filter(Boolean),d="all"===Y.branchId?ab.map(a=>eD(a)).filter(Boolean):[eE(Y.branchId)].filter(Boolean),e=Date.now(),f="scheduled"===Y.status&&Y.publishAt?new Date(Y.publishAt).getTime():e,g={accountId:String(a),schoolId:c[0]||null,branchId:d[0]||null,title:Y.title.trim(),body:Y.body.trim(),message:Y.body.trim(),audience:Y.audience,accountWide:!1,targetRole:b[0]||"all",targetRoles:b,targetSchoolIds:c,targetBranchIds:d,channels:Y.channels,channel:Y.channels.join(","),priority:Y.priority,status:Y.status,publishAt:f,sentAt:"sent"===Y.status?e:void 0,createdBy:"owner",createdByRole:"owner",active:!0,isDeleted:!1},h=eE(Y.id);if("edit"===Q&&h)await (0,p.Po)("announcements",h,g);else{let a=await (0,p.oJ)("announcements",g);h="object"==typeof a&&a?eE(a.id||a.localId):eE(a)}h&&await ak(h,c,d,b,e),P(!1),Z(eA),$("success","edit"===Q?"Announcement updated.":"duplicate"===Q?"Announcement duplicated.":"Announcement saved."),await _()}catch(a){console.error("Failed to save owner announcement:",a),$("error",a?.message||"Failed to save announcement.")}finally{T(!1)}}async function am(a){let b=eE(a.id||a.localId);if(b&&window.confirm(`Delete "${a.title||"announcement"}"?`))try{for(let a of(await (0,p.R8)("announcements",b),A.filter(a=>eE(a.announcementId)===b))){let b=eE(a.id||a.localId);b&&await (0,p.R8)("announcementRecipients",b)}$("success","Announcement deleted."),await _()}catch(a){console.error("Failed to delete owner announcement:",a),$("error",a?.message||"Failed to delete announcement.")}}return i||c||e?(0,f.jsx)(eV,{primary:h,title:"Opening owner announcements...",text:"Loading account-wide communication records."}):b&&a?(0,f.jsxs)("main",{className:"ba-page",style:{"--ba-primary":h},children:[(0,f.jsx)("style",{children:e0}),U&&(0,f.jsxs)("section",{className:`ba-toast ${U.tone}`,children:[U.message,(0,f.jsx)("button",{type:"button",onClick:()=>V(null),"aria-label":"Close notification",children:"✕"})]}),(0,f.jsxs)("section",{className:"ba-search-card","aria-label":"Owner announcements search and actions",children:[(0,f.jsxs)("label",{className:"ba-search",children:[(0,f.jsx)("span",{children:"⌕"}),(0,f.jsx)("input",{value:C,onChange:a=>D(a.target.value),placeholder:"Search announcements...","aria-label":"Search announcements"})]}),(0,f.jsx)("button",{type:"button",className:"ba-add-inline",onClick:function(){R("create"),Z(eA),X(""),P(!0)},"aria-label":"New owner announcement",children:"+"}),(0,f.jsxs)("button",{type:"button",className:`ba-filter-button ${ah?"active":""}`,onClick:()=>L(!0),"aria-label":"Open filters",title:"Filters",children:[(0,f.jsx)(eT,{}),ah?(0,f.jsx)("b",{children:ah}):null]}),(0,f.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>N(!0),"aria-label":"More options",children:"⋯"})]}),ah>0&&(0,f.jsxs)("section",{className:"ba-filter-chips","aria-label":"Active filters",children:["all"!==E&&(0,f.jsxs)("button",{type:"button",onClick:()=>F("all"),children:["Status: ",E," \xd7"]}),"all"!==G&&(0,f.jsxs)("button",{type:"button",onClick:()=>H("all"),children:["Audience: ",eK(G)," \xd7"]}),"all"!==I&&(0,f.jsxs)("button",{type:"button",onClick:()=>J("all"),children:["Priority: ",I," \xd7"]})]}),"analytics"===n&&(0,f.jsxs)("section",{className:"ba-analysis-grid",children:[(0,f.jsx)(e_,{title:"Announcements by Audience",rows:af,total:Math.max(1,ae.total)}),(0,f.jsx)(e_,{title:"Status Overview",rows:ag,total:Math.max(1,ae.total)}),(0,f.jsxs)("article",{className:"ba-analysis",children:[(0,f.jsx)("span",{children:"Account Scope"}),(0,f.jsx)("strong",{children:ae.schools}),(0,f.jsxs)("p",{children:[ae.branches," branch record(s) available for owner targeting."]})]}),(0,f.jsxs)("article",{className:"ba-analysis",children:[(0,f.jsx)("span",{children:"Recipients"}),(0,f.jsx)("strong",{children:ae.recipients}),(0,f.jsx)("p",{children:"Recipient rows generated from account-wide announcements."})]})]}),"table"===n&&(0,f.jsx)(eX,{rows:ad,openEdit:ai,duplicateAnnouncement:aj,deleteAnnouncement:am}),"cards"===n&&(0,f.jsxs)("section",{className:"ba-list",children:[ad.map(a=>(0,f.jsx)(eW,{announcement:a,openEdit:ai,duplicateAnnouncement:aj,deleteAnnouncement:am},String(eD(a)))),!ad.length&&(0,f.jsx)(eS,{icon:"\uD83D\uDCE3",title:"No announcements found",text:"Create owner-level announcements for school admins or branch admins only."})]}),K&&(0,f.jsx)(eY,{status:E,audienceFilter:G,priorityFilter:I,setStatus:F,setAudienceFilter:H,setPriorityFilter:J,clearFilters:()=>{F("all"),H("all"),J("all")},onClose:()=>L(!1)}),M&&(0,f.jsx)(eZ,{view:n,summary:ae,setView:a=>{o(a),N(!1)},onRefresh:async()=>{N(!1),await _()},onClose:()=>N(!1)}),O&&(0,f.jsx)(e$,{mode:Q,form:Y,setForm:Z,schools:q,targetBranches:ab,estimatedRecipients:ac,targetSchoolsCount:aa.length,targetBranchesCount:ab.length,saving:S,message:W,toggleChannel:function(a){Z(b=>{let c=b.channels.includes(a)?b.channels.filter(b=>b!==a):[...b.channels,a];return{...b,channels:c.length?c:["in_app"]}})},save:al,onClose:()=>P(!1)})]}):(0,f.jsx)(eV,{primary:h,title:"Redirecting to login...",text:"You must sign in before managing owner announcements."})}function eV({primary:a,title:b,text:c}){return(0,f.jsxs)("main",{className:"ba-page",style:{"--ba-primary":a},children:[(0,f.jsx)("style",{children:e0}),(0,f.jsxs)("section",{className:"ba-state",children:[(0,f.jsx)("div",{className:"ba-spinner"}),(0,f.jsx)("h2",{children:b}),(0,f.jsx)("p",{children:c})]})]})}function eW({announcement:a,openEdit:b,duplicateAnnouncement:c,deleteAnnouncement:d}){return(0,f.jsxs)("article",{className:"announcement-row",children:[(0,f.jsx)("div",{className:"announcement-avatar",children:"\uD83D\uDCE3"}),(0,f.jsxs)("span",{className:"announcement-main",children:[(0,f.jsx)("strong",{children:a.title||"Untitled announcement"}),(0,f.jsxs)("small",{children:[eF(a.sentAt||a.publishAt||a.createdAt)," \xb7 ",eK(a.audience||a.targetRole)]}),(0,f.jsx)("em",{children:eC(a.body||a.message,"No message").slice(0,118)})]}),(0,f.jsxs)("span",{className:"announcement-side",children:[(0,f.jsx)("span",{className:`status-dot-mini ${eL(a.status)}`,title:String(a.status||"sent")}),(0,f.jsx)("button",{type:"button",onClick:()=>b(a),"aria-label":"Edit announcement",children:"✎"}),(0,f.jsx)("button",{type:"button",onClick:()=>c(a),"aria-label":"Duplicate announcement",children:"⧉"}),(0,f.jsx)("button",{type:"button",className:"danger",onClick:()=>d(a),"aria-label":"Delete announcement",children:"⌫"})]})]})}function eX({rows:a,openEdit:b,duplicateAnnouncement:c,deleteAnnouncement:d}){return(0,f.jsx)("section",{className:"ba-table-card",children:(0,f.jsxs)("div",{className:"ba-table-scroll",children:[(0,f.jsxs)("table",{children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsxs)("th",{children:["Announcements (",a.length,")"]}),(0,f.jsx)("th",{children:"Date"}),(0,f.jsx)("th",{children:"Audience"}),(0,f.jsx)("th",{children:"Priority"}),(0,f.jsx)("th",{children:"Status"}),(0,f.jsx)("th",{children:"Scope"}),(0,f.jsx)("th",{children:"Message"}),(0,f.jsx)("th",{children:"Actions"})]})}),(0,f.jsx)("tbody",{children:a.map(a=>{var e;let g,h,i;return(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{children:[(0,f.jsx)("strong",{children:a.title||"Untitled"}),(0,f.jsx)("span",{children:a.createdByRole||"owner"})]}),(0,f.jsx)("td",{children:eF(a.sentAt||a.publishAt||a.createdAt)}),(0,f.jsx)("td",{children:eK(a.audience||a.targetRole)}),(0,f.jsx)("td",{children:(0,f.jsx)(eR,{tone:"urgent"===(g=String(a.priority||"normal").toLowerCase())?"red":"high"===g?"orange":"low"===g?"gray":"blue",children:a.priority||"normal"})}),(0,f.jsx)("td",{children:(0,f.jsx)(eR,{tone:eL(a.status),children:a.status||"sent"})}),(0,f.jsx)("td",{children:(h=Array.isArray((e=a).targetSchoolIds)?e.targetSchoolIds.length:+!!e.schoolId,i=Array.isArray(e.targetBranchIds)?e.targetBranchIds.length:+!!e.branchId,e.accountWide?"Account-wide":h&&i?`${h} school(s), ${i} branch(es)`:h?`${h} school(s)`:i?`${i} branch(es)`:"Account scope")}),(0,f.jsx)("td",{children:eC(a.body||a.message).slice(0,120)}),(0,f.jsx)("td",{children:(0,f.jsxs)("div",{className:"ba-table-actions",children:[(0,f.jsx)("button",{type:"button",onClick:()=>b(a),children:"Edit"}),(0,f.jsx)("button",{type:"button",onClick:()=>c(a),children:"Copy"}),(0,f.jsx)("button",{type:"button",className:"ba-delete",onClick:()=>d(a),children:"Delete"})]})})]},String(eD(a)))})})]}),!a.length&&(0,f.jsx)("div",{className:"ba-empty-table",children:"No announcement matches your filters."})]})})}function eY({status:a,audienceFilter:b,priorityFilter:c,setStatus:d,setAudienceFilter:e,setPriorityFilter:g,clearFilters:h,onClose:i}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Filters"}),(0,f.jsx)("p",{children:"Choose announcement status, admin audience, and priority."})]}),(0,f.jsx)("button",{type:"button",onClick:i,"aria-label":"Close filters",children:"✕"})]}),(0,f.jsxs)("div",{className:"ba-form compact",children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Status"}),(0,f.jsxs)("select",{value:a,onChange:a=>d(a.target.value),children:[(0,f.jsx)("option",{value:"all",children:"All statuses"}),(0,f.jsx)("option",{value:"sent",children:"Sent"}),(0,f.jsx)("option",{value:"draft",children:"Draft"}),(0,f.jsx)("option",{value:"scheduled",children:"Scheduled"}),(0,f.jsx)("option",{value:"failed",children:"Failed"})]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Audience"}),(0,f.jsxs)("select",{value:b,onChange:a=>e(a.target.value),children:[(0,f.jsx)("option",{value:"all",children:"All audiences"}),ey.map(a=>(0,f.jsx)("option",{value:a.value,children:a.label},a.value))]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Priority"}),(0,f.jsxs)("select",{value:c,onChange:a=>g(a.target.value),children:[(0,f.jsx)("option",{value:"all",children:"All priorities"}),(0,f.jsx)("option",{value:"normal",children:"Normal"}),(0,f.jsx)("option",{value:"high",children:"High"}),(0,f.jsx)("option",{value:"urgent",children:"Urgent"}),(0,f.jsx)("option",{value:"low",children:"Low"})]})]})]}),(0,f.jsxs)("div",{className:"ba-sheet-actions",children:[(0,f.jsx)("button",{type:"button",onClick:h,children:"Clear"}),(0,f.jsx)("button",{type:"button",className:"primary",onClick:i,children:"Apply"})]})]})})}function eZ({view:a,summary:b,setView:c,onRefresh:d,onClose:e}){return(0,f.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("section",{className:"ba-sheet small",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"More"}),(0,f.jsx)("p",{children:"Views and refresh actions are here to keep the page compact."})]}),(0,f.jsx)("button",{type:"button",onClick:e,"aria-label":"Close menu",children:"✕"})]}),(0,f.jsxs)("div",{className:"ba-menu-list",children:[(0,f.jsxs)("button",{type:"button",className:"cards"===a?"active":"",onClick:()=>c("cards"),children:[(0,f.jsx)("span",{children:"☰"}),(0,f.jsx)("b",{children:"List view"}),(0,f.jsxs)("small",{children:[b.shown,"/",b.total," announcements shown"]})]}),(0,f.jsxs)("button",{type:"button",className:"table"===a?"active":"",onClick:()=>c("table"),children:[(0,f.jsx)("span",{children:"☷"}),(0,f.jsx)("b",{children:"Table view"}),(0,f.jsx)("small",{children:"Dense laptop-friendly owner records"})]}),(0,f.jsxs)("button",{type:"button",className:"analytics"===a?"active":"",onClick:()=>c("analytics"),children:[(0,f.jsx)("span",{children:"◔"}),(0,f.jsx)("b",{children:"Analytics"}),(0,f.jsxs)("small",{children:[b.schools," schools \xb7 ",b.branches," branches \xb7 ",b.recipients," recipients"]})]}),(0,f.jsxs)("button",{type:"button",onClick:d,children:[(0,f.jsx)("span",{children:"↻"}),(0,f.jsx)("b",{children:"Refresh"}),(0,f.jsx)("small",{children:"Reload local owner announcements"})]})]})]})})}function e$({mode:a,form:b,setForm:c,schools:d,targetBranches:e,estimatedRecipients:g,targetSchoolsCount:h,targetBranchesCount:i,saving:j,message:k,toggleChannel:l,save:m,onClose:n}){return(0,f.jsxs)("div",{className:"ba-drawer-layer",role:"dialog","aria-modal":"true",children:[(0,f.jsx)("button",{className:"ba-drawer-overlay",type:"button",onClick:n,"aria-label":"Close drawer"}),(0,f.jsxs)("aside",{className:"ba-drawer",children:[(0,f.jsxs)("div",{className:"ba-drawer-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{children:"edit"===a?"Edit Owner Announcement":"duplicate"===a?"Duplicate Announcement":"New Owner Announcement"}),(0,f.jsx)("h2",{children:"Authority Broadcast"}),(0,f.jsxs)("span",{children:[g," estimated recipient(s)"]})]}),(0,f.jsx)("button",{type:"button",onClick:n,"aria-label":"Close announcement form",children:"✕"})]}),k&&(0,f.jsx)("section",{className:"ba-inline-error",children:k}),(0,f.jsxs)("section",{className:"ba-form-card",children:[(0,f.jsxs)("div",{className:"ba-form-grid",children:[(0,f.jsxs)("label",{className:"wide",children:[(0,f.jsx)("span",{children:"Title"}),(0,f.jsx)("input",{value:b.title,onChange:a=>c({...b,title:a.target.value}),placeholder:"Announcement title"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Audience"}),(0,f.jsx)("select",{value:b.audience,onChange:a=>c({...b,audience:a.target.value}),children:ey.map(a=>(0,f.jsx)("option",{value:a.value,children:a.label},a.value))})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"School Scope"}),(0,f.jsxs)("select",{value:b.schoolId,onChange:a=>c({...b,schoolId:a.target.value,branchId:"all"}),children:[(0,f.jsx)("option",{value:"all",children:"All Schools"}),d.map(a=>(0,f.jsx)("option",{value:String(eD(a)),children:eH(a)},String(eD(a))))]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Branch Scope"}),(0,f.jsxs)("select",{value:b.branchId,onChange:a=>c({...b,branchId:a.target.value}),children:[(0,f.jsx)("option",{value:"all",children:"All Branches"}),e.map(a=>(0,f.jsx)("option",{value:String(eD(a)),children:eH(a)},String(eD(a))))]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Priority"}),(0,f.jsxs)("select",{value:b.priority,onChange:a=>c({...b,priority:a.target.value}),children:[(0,f.jsx)("option",{value:"normal",children:"Normal"}),(0,f.jsx)("option",{value:"high",children:"High"}),(0,f.jsx)("option",{value:"urgent",children:"Urgent"}),(0,f.jsx)("option",{value:"low",children:"Low"})]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Status"}),(0,f.jsxs)("select",{value:b.status,onChange:a=>c({...b,status:a.target.value}),children:[(0,f.jsx)("option",{value:"sent",children:"Send now"}),(0,f.jsx)("option",{value:"draft",children:"Draft"}),(0,f.jsx)("option",{value:"scheduled",children:"Scheduled"})]})]}),"scheduled"===b.status&&(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Publish At"}),(0,f.jsx)("input",{type:"datetime-local",value:b.publishAt,onChange:a=>c({...b,publishAt:a.target.value})})]}),(0,f.jsxs)("label",{className:"wide",children:[(0,f.jsx)("span",{children:"Message"}),(0,f.jsx)("textarea",{value:b.body,onChange:a=>c({...b,body:a.target.value}),placeholder:"Write the message..."})]})]}),(0,f.jsx)("div",{className:"ba-channel-row",children:ez.map(a=>(0,f.jsx)("button",{type:"button",className:b.channels.includes(a)?"active":"",onClick:()=>l(a),children:a.replaceAll("_"," ")},a))}),(0,f.jsxs)("p",{className:"ba-hint",children:["Audience: ",eK(b.audience)," \xb7 Schools: ","all"===b.schoolId?h:1," \xb7 Branches: ","all"===b.branchId?i:1," \xb7 Recipients: ",g]})]}),(0,f.jsxs)("div",{className:"ba-drawer-actions",children:[(0,f.jsx)("button",{type:"button",onClick:n,children:"Cancel"}),(0,f.jsx)("button",{type:"button",className:"primary",disabled:j,onClick:m,children:j?"Saving...":"edit"===a?"Update":"sent"===b.status?"Send":"Save"})]})]})]})}function e_({title:a,rows:b,total:c}){return(0,f.jsxs)("article",{className:"ba-analysis",children:[(0,f.jsx)("span",{children:a}),(0,f.jsx)("strong",{children:b.reduce((a,b)=>a+b.value,0)}),(0,f.jsxs)("div",{className:"ba-analysis-list",children:[b.map(a=>{let b=c?Math.round(a.value/c*100):0;return(0,f.jsxs)("section",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:a.label}),(0,f.jsxs)("small",{children:[a.value," \xb7 ",b,"%"]})]}),(0,f.jsx)("div",{className:"ba-progress",children:(0,f.jsx)("i",{style:{width:`${Math.max(4,b)}%`}})})]},a.label)}),!b.length&&(0,f.jsx)("p",{children:"No data available."})]})]})}let e0=`
@keyframes spin { to { transform: rotate(360deg); } }
.ba-page{--ease:cubic-bezier(.2,.8,.2,1);min-height:100dvh;width:100%;max-width:100%;min-width:0;padding:calc(8px * var(--local-density-scale,1));padding-bottom:max(40px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--ba-primary) 9%,transparent),transparent 30rem),var(--bg,#f7f8fb);color:var(--text,#111827);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);font-size:var(--font-size,14px);overflow-x:hidden}.ba-page *,.ba-page *::before,.ba-page *::after{box-sizing:border-box;min-width:0}.ba-page button,.ba-page input,.ba-page select,.ba-page textarea{font:inherit;max-width:100%}.ba-page button{-webkit-tap-highlight-color:transparent}.ba-page input,.ba-page select,.ba-page textarea{width:100%;min-height:44px;border:1px solid var(--input-border,var(--border,rgba(0,0,0,.10)));border-radius:16px;padding:0 12px;background:var(--input-bg,var(--surface,#fff));color:var(--input-text,var(--text,#111827));outline:none;font-weight:750}.ba-page textarea{min-height:130px;padding:12px;resize:vertical;line-height:1.55}.ba-page input:focus,.ba-page select:focus,.ba-page textarea:focus{border-color:color-mix(in srgb,var(--ba-primary) 52%,var(--border,rgba(0,0,0,.10)));box-shadow:0 0 0 4px color-mix(in srgb,var(--ba-primary) 12%,transparent)}.ba-state,.ba-search-card,.announcement-row,.ba-table-card,.ba-analysis,.ba-empty,.ba-sheet,.ba-modal,.ba-form-card{background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.10));box-shadow:0 12px 28px rgba(15,23,42,.045)}.ba-state{min-height:min(420px,calc(100dvh - 32px));width:min(520px,100%);margin:0 auto;display:grid;place-items:center;align-content:center;gap:10px;padding:22px;border-radius:28px;text-align:center}.ba-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--ba-primary) 18%,transparent);border-top-color:var(--ba-primary);animation:spin .8s linear infinite}.ba-state h2{margin:0;font-size:22px;font-weight:1000;letter-spacing:-.04em}.ba-state p{max-width:34rem;margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.ba-toast{position:sticky;top:8px;z-index:40;display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;padding:12px 14px;border-radius:18px;font-size:13px;font-weight:850;box-shadow:0 18px 40px rgba(15,23,42,.12)}.ba-toast.success{background:rgba(34,197,94,.14);color:#166534}.ba-toast.error,.ba-inline-error{background:rgba(239,68,68,.12);color:#991b1b}.ba-toast.info{background:rgba(59,130,246,.13);color:#1d4ed8}.ba-toast button{border:0;background:transparent;color:currentColor;font-weight:1000;cursor:pointer}.ba-inline-error{padding:10px 12px;border-radius:18px;font-size:12px;font-weight:850;margin-bottom:10px}.ba-search-card{display:grid;grid-template-columns:minmax(0,1fr) auto auto auto;gap:8px;align-items:center;margin-top:2px;padding:8px;border-radius:24px}.ba-search{min-width:0;display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:8px;min-height:44px;padding:0 11px;border-radius:18px;background:color-mix(in srgb,var(--muted,#64748b) 7%,transparent)}.ba-search span{color:var(--muted,#64748b);font-size:17px;font-weight:1000}.ba-search input{min-height:42px;border:0;padding:0;border-radius:0;background:transparent;box-shadow:none;font-size:14px}.ba-icon-button,.ba-filter-button,.ba-add-inline{width:42px;height:42px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;display:grid;place-items:center;background:var(--card-bg,var(--surface,#fff));color:var(--text,#111827);font-size:18px;font-weight:1000;cursor:pointer;box-shadow:0 10px 22px rgba(15,23,42,.045)}.ba-add-inline{flex:0 0 42px;border-color:var(--ba-primary);background:var(--ba-primary);color:#fff;font-size:25px;line-height:1;box-shadow:0 12px 28px color-mix(in srgb,var(--ba-primary) 22%,transparent)}.ba-slider-icon{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.ba-filter-button{position:relative;background:color-mix(in srgb,var(--ba-primary) 8%,var(--card-bg,#fff));color:var(--ba-primary)}.ba-filter-button.active{background:var(--ba-primary);color:#fff;border-color:var(--ba-primary)}.ba-filter-button b{position:absolute;top:-4px;right:-4px;min-width:19px;height:19px;display:grid;place-items:center;border-radius:999px;background:#ef4444;color:#fff;font-size:10px;border:2px solid var(--card-bg,#fff)}.ba-filter-chips{display:flex;gap:7px;overflow-x:auto;padding:8px 1px 0;scrollbar-width:none}.ba-filter-chips::-webkit-scrollbar{display:none}.ba-filter-chips button{flex:0 0 auto;min-height:31px;border:0;border-radius:999px;padding:0 10px;background:color-mix(in srgb,var(--ba-primary) 11%,transparent);color:var(--ba-primary);font-size:11px;font-weight:950;white-space:nowrap;cursor:pointer}.ba-list{display:grid;gap:7px;margin-top:10px}.announcement-row{width:100%;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:10px;padding:10px;border-radius:22px;text-align:left}.announcement-avatar{width:48px;height:48px;display:grid;place-items:center;border-radius:18px;background:color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));font-size:22px}.announcement-main,.announcement-main strong,.announcement-main small,.announcement-main em{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.announcement-main strong{color:var(--text,#111827);font-size:14px;font-weight:1000;letter-spacing:-.02em}.announcement-main small{margin-top:3px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.announcement-main em{margin-top:3px;color:color-mix(in srgb,var(--muted,#64748b) 86%,var(--text,#111827));font-size:11px;font-weight:750;font-style:normal}.announcement-side{display:flex;align-items:center;gap:5px}.announcement-side button{width:31px;height:31px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;background:var(--surface,#fff);color:var(--text,#111827);font-size:12px;font-weight:1000;cursor:pointer}.announcement-side button.danger{color:#991b1b;background:color-mix(in srgb,#dc2626 7%,var(--surface,#fff));border-color:color-mix(in srgb,#dc2626 24%,var(--border,rgba(0,0,0,.10)))}.status-dot-mini{width:10px;height:10px;display:inline-block;border-radius:999px;background:var(--muted,#64748b);box-shadow:0 0 0 4px color-mix(in srgb,currentColor 10%,transparent)}.status-dot-mini.green{background:#22c55e}.status-dot-mini.red{background:#ef4444}.status-dot-mini.blue{background:#3b82f6}.status-dot-mini.orange{background:#f59e0b}.status-dot-mini.gray{background:var(--muted,#64748b)}.ba-chip{max-width:100%;display:inline-flex;align-items:center;min-height:24px;padding:3px 8px;border-radius:999px;font-size:10px;font-weight:950;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:capitalize}.ba-chip.green{background:rgba(34,197,94,.12);color:#16a34a}.ba-chip.red{background:rgba(239,68,68,.12);color:#dc2626}.ba-chip.blue{background:rgba(59,130,246,.12);color:#2563eb}.ba-chip.gray{background:color-mix(in srgb,var(--muted,#64748b) 14%,transparent);color:var(--muted,#64748b)}.ba-chip.orange{background:rgba(245,158,11,.14);color:#b45309}.ba-chip.purple{background:rgba(147,51,234,.12);color:#7e22ce}.ba-sheet-backdrop,.ba-drawer-layer{position:fixed;inset:0;z-index:80;display:grid;place-items:end center;padding:10px;background:rgba(15,23,42,.50);backdrop-filter:blur(12px)}.ba-sheet{width:min(760px,100%);max-height:min(88dvh,760px);overflow-y:auto;padding:14px;border-radius:28px 28px 22px 22px;box-shadow:0 30px 90px rgba(15,23,42,.32);animation:sheetIn .18s var(--ease)}.ba-sheet.small{width:min(520px,100%)}@keyframes sheetIn{from{transform:translateY(16px);opacity:.7}to{transform:translateY(0);opacity:1}}.ba-sheet-head,.ba-drawer-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding-bottom:12px}.ba-sheet-head h2,.ba-drawer-head h2{margin:0;color:var(--text,#111827);font-size:21px;font-weight:1000;letter-spacing:-.05em}.ba-sheet-head p,.ba-drawer-head p,.ba-drawer-head span{margin:5px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5;font-weight:750}.ba-sheet-head button,.ba-drawer-head button{width:38px;height:38px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;background:var(--surface,#fff);color:var(--text,#111827);font-weight:1000;cursor:pointer;flex:0 0 auto}.ba-menu-list{display:grid;gap:8px}.ba-menu-list button{width:100%;display:grid;grid-template-columns:42px minmax(0,1fr);column-gap:10px;align-items:center;min-height:58px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:18px;padding:9px;background:var(--surface,#fff);color:var(--text,#111827);text-align:left;cursor:pointer}.ba-menu-list button span{grid-row:span 2;width:42px;height:42px;display:grid;place-items:center;border-radius:16px;background:color-mix(in srgb,var(--ba-primary) 10%,transparent);color:var(--ba-primary);font-weight:1000}.ba-menu-list button b,.ba-menu-list button small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ba-menu-list button b{font-size:13px;font-weight:1000}.ba-menu-list button small{margin-top:2px;color:var(--muted,#64748b);font-size:11px;font-weight:750}.ba-menu-list button.active{border-color:color-mix(in srgb,var(--ba-primary) 34%,var(--border,rgba(0,0,0,.10)));background:color-mix(in srgb,var(--ba-primary) 8%,var(--surface,#fff))}.ba-sheet-actions,.ba-drawer-actions{position:sticky;bottom:-14px;display:flex;justify-content:flex-end;flex-wrap:wrap;gap:8px;margin-top:14px;padding:12px 0 2px;background:linear-gradient(to top,var(--card-bg,var(--surface,#fff)) 70%,transparent)}.ba-sheet-actions button,.ba-drawer-actions button{min-height:42px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;padding:0 16px;background:color-mix(in srgb,var(--muted,#64748b) 8%,var(--surface,#fff));color:var(--text,#111827);font-size:12px;font-weight:950;cursor:pointer}.ba-sheet-actions button.primary,.ba-drawer-actions button.primary{border-color:var(--ba-primary);background:var(--ba-primary);color:#fff;box-shadow:0 14px 32px color-mix(in srgb,var(--ba-primary) 25%,transparent)}.ba-drawer-layer{place-items:stretch end;padding:0}.ba-drawer-overlay{position:absolute;inset:0;border:0;background:transparent}.ba-drawer{position:relative;z-index:1;width:min(720px,100%);height:100dvh;overflow-y:auto;background:var(--card-bg,var(--surface,#fff));border-left:1px solid var(--border,rgba(0,0,0,.10));padding:14px;box-shadow:-28px 0 80px rgba(15,23,42,.28)}.ba-form-card{padding:12px;border-radius:24px}.ba-form,.ba-form-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:10px}.ba-form label,.ba-form-grid label{display:grid;gap:6px;min-width:0}.ba-form span,.ba-form-grid span{color:var(--muted,#64748b);font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.06em}.ba-form .wide,.ba-form-grid .wide{grid-column:1/-1}.ba-channel-row{display:flex;gap:7px;overflow-x:auto;margin-top:10px;scrollbar-width:none}.ba-channel-row button{flex:0 0 auto;min-height:34px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;padding:0 11px;background:var(--surface,#fff);color:var(--text,#111827);font-size:11px;font-weight:950;cursor:pointer;text-transform:capitalize}.ba-channel-row button.active{border-color:var(--ba-primary);background:var(--ba-primary);color:#fff}.ba-hint{margin:9px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5;font-weight:800}.ba-analysis-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;margin-top:10px}.ba-analysis,.ba-table-card,.ba-empty{padding:13px;border-radius:24px}.ba-analysis span{color:var(--muted,#64748b);font-size:11px;font-weight:950;text-transform:uppercase;letter-spacing:.08em}.ba-analysis strong{display:block;margin-top:8px;font-size:clamp(22px,7vw,30px);line-height:1;font-weight:1000;letter-spacing:-.06em;overflow-wrap:anywhere}.ba-analysis p{margin:8px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.ba-analysis-list{display:grid;gap:10px;margin-top:12px}.ba-analysis-list section{display:grid;gap:6px;padding:10px;border-radius:16px;background:color-mix(in srgb,var(--muted,#64748b) 8%,transparent)}.ba-analysis-list section>div:first-child{display:flex;justify-content:space-between;gap:10px}.ba-analysis-list b,.ba-analysis-list small{font-size:12px}.ba-analysis-list small{color:var(--muted,#64748b);font-weight:850}.ba-progress{height:8px;border-radius:999px;background:color-mix(in srgb,var(--muted,#64748b) 18%,transparent);overflow:hidden}.ba-progress i{display:block;height:100%;border-radius:inherit;background:var(--ba-primary)}.ba-empty{display:grid;place-items:center;align-content:center;gap:8px;min-height:220px;text-align:center;border-style:dashed}.ba-empty-icon{width:56px;height:56px;display:grid;place-items:center;border-radius:22px;background:color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));font-size:28px}.ba-empty h3{margin:0;font-size:18px;font-weight:1000}.ba-empty p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.ba-table-card{margin-top:10px}.ba-table-scroll{width:100%;max-width:100%;overflow-x:auto;border-radius:18px;border:1px solid var(--border,rgba(0,0,0,.08))}.ba-table-scroll table{width:100%;min-width:980px;border-collapse:collapse;background:var(--card-bg,var(--surface,var(--bg,transparent)))}.ba-table-scroll th,.ba-table-scroll td{padding:10px;border-bottom:1px solid var(--border,rgba(0,0,0,.08));vertical-align:top;text-align:left;font-size:13px}.ba-table-scroll th{background:var(--table-header-bg,color-mix(in srgb,var(--ba-primary) 6%,var(--card-bg,var(--surface,var(--bg,transparent)))));color:var(--table-header-text,var(--muted,var(--text)));font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.07em}.ba-table-scroll td strong,.ba-table-scroll td span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ba-table-scroll td span{margin-top:3px;color:var(--muted,#64748b);font-size:11px}.ba-table-actions{display:flex;flex-wrap:nowrap;gap:7px;width:100%;overflow-x:auto;scrollbar-width:none}.ba-table-actions::-webkit-scrollbar{display:none}.ba-table-actions button{flex:0 0 auto;min-height:34px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;padding:0 10px;background:var(--surface,#fff);color:var(--text,#111827);font-size:11px;font-weight:950;cursor:pointer;white-space:nowrap}.ba-table-actions button:first-child{background:var(--ba-primary);color:#fff;border-color:var(--ba-primary)}.ba-delete,.ba-table-actions button.ba-delete{color:#991b1b;background:color-mix(in srgb,#dc2626 7%,var(--surface,#fff));border-color:color-mix(in srgb,#dc2626 24%,var(--border,rgba(0,0,0,.10)))}.ba-empty-table{padding:22px;text-align:center;color:var(--muted,#64748b);font-weight:850}@media (min-width:680px){.ba-page{padding:calc(12px * var(--local-density-scale,1));padding-bottom:44px}.ba-search-card{grid-template-columns:minmax(0,1fr) 48px 48px 48px}.ba-list{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.announcement-row{border-radius:24px;padding:12px}.ba-analysis-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ba-form,.ba-form-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ba-sheet-backdrop{place-items:center;padding:18px}.ba-sheet{border-radius:28px;padding:18px}.ba-drawer{padding:18px}}@media (min-width:1040px){.ba-page{padding:calc(16px * var(--local-density-scale,1));padding-bottom:48px}.ba-search-card,.ba-list,.ba-analysis-grid,.ba-table-card,.ba-filter-chips{max-width:1180px;margin-left:auto;margin-right:auto}.ba-list{grid-template-columns:repeat(3,minmax(0,1fr))}.ba-analysis-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.ba-form-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media (max-width:520px){.ba-page{padding:calc(7px * var(--local-density-scale,1));padding-bottom:max(38px,env(safe-area-inset-bottom))}.ba-icon-button,.ba-filter-button,.ba-add-inline{width:40px;height:40px}.announcement-row{grid-template-columns:auto minmax(0,1fr);align-items:start}.announcement-side{grid-column:1/-1;justify-content:flex-end}.ba-sheet{border-radius:24px 24px 18px 18px;padding:12px}.ba-sheet-actions,.ba-drawer-actions{display:grid;grid-template-columns:minmax(0,1fr)}.ba-sheet-actions button,.ba-drawer-actions button{width:100%}.ba-drawer{width:100%;padding:12px}.ba-channel-row{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.ba-channel-row button{width:100%}}
`,e1=[{title:"Workspaces",defaultOpen:!0,items:[{key:"ownerDashboard",label:"Overview",icon:"\uD83D\uDC51"},{key:"institutionWorkspace",label:"Institutions",icon:"\uD83C\uDFEB"},{key:"users",label:"User Roles",icon:"\uD83D\uDC65"},{key:"ownerBillingWorkspace",label:"Billing",icon:"\uD83D\uDCB3"},{key:"ownerSystemWorkspace",label:"System",icon:"⚙️"},{key:"ownerCommsWorkspace",label:"Communication",icon:"\uD83D\uDCE2"}]}],e2={ownerDashboard:function(a){return(0,f.jsx)(ae,{...a,navSections:e1})},institutionWorkspace:function(a){let[b,c]=h().useState("schools");return(0,f.jsxs)("div",{className:"eds-owner-workspace",children:[(0,f.jsx)(j.A,{value:b,onChange:c,ariaLabel:"Institution views",tabs:[{key:"schools",label:"Schools"},{key:"branches",label:"Branches"}]}),(0,f.jsx)("branches"===b?bd:I,{...a})]})},users:function(){var a;let b;(0,k.useRouter)();let{accountId:c,authenticated:d,loading:e}=(0,l.F)(),{settings:h,loading:i}=(0,m.t)(),{activeMembership:j}=(0,n.A)(),p=(a={openWorkspace:(0,g.useMemo)(()=>null,[]),activeMembership:j,accountId:c,settings:h},b=a.openWorkspace?.membership||a.activeMembership||null,function(...a){for(let b of a){let a=String(b||"").trim();if(a)return a}return""}(a.openWorkspace?.accountId,b?.accountId,a.accountId,a.settings?.accountId,null,null)),q=h?.primaryColor||"var(--primary-color, #2563eb)",[r,s]=(0,g.useState)(!0),[t,u]=(0,g.useState)(!1),[v,w]=(0,g.useState)("cards"),[x,y]=(0,g.useState)(""),[z,A]=(0,g.useState)("all"),[B,C]=(0,g.useState)("all"),[D,E]=(0,g.useState)("all"),[F,G]=(0,g.useState)("all"),[H,I]=(0,g.useState)(!1),[J,K]=(0,g.useState)(!1),[L,M]=(0,g.useState)(null),[N,O]=(0,g.useState)([]),[P,Q]=(0,g.useState)([]),[R,S]=(0,g.useState)([]),[T,U]=(0,g.useState)([]),[V,W]=(0,g.useState)(!1),[X,Y]=(0,g.useState)(bv),[Z,$]=(0,g.useState)(""),_=(0,g.useMemo)(()=>new Map(N.map(a=>[bw(a.id),a])),[N]),aa=(0,g.useMemo)(()=>new Map(P.map(a=>[bw(a.id),a])),[P]),ab=(0,g.useMemo)(()=>{let a=bw(X.schoolId);return a?P.filter(b=>bw(b.schoolId)===a):[]},[P,X.schoolId]),ac=()=>{O([]),Q([]),S([]),U([])},ad=async()=>{if(!d||!p){ac(),s(!1);return}try{s(!0);let[a,b]=await Promise.all([o.db.schools.toArray(),o.db.branches.toArray()]),c=a.filter(a=>bB(a,p)&&!1!==a.active&&!0!==a.isDeleted).sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""))),d=b.filter(a=>bB(a,p)&&!1!==a.active&&!0!==a.isDeleted).sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""))),e=[],f=[];try{let a=await bW({}),b=bV(a);for(let a of(e=b.users,f=bT(b.memberships))){if(!bt.some(b=>b.value===a.role)||!bB(a,p))continue;let b=e.find(b=>String(bF(b)||"")===String(a.userId||""))||e.find(b=>!!(b.email&&a.email&&by(b.email)===by(a.email)));if(!b)continue;let c={membershipId:bH(a),userId:String(bF(b)||""),title:a.title||b.title||"",fullName:a.fullName||b.fullName||b.name||a.email||"Portal User",email:by(a.email||b.email),phone:bz(b.phone),role:a.role,schoolId:a.schoolId?String(a.schoolId):"",branchId:a.branchId?String(a.branchId):"",active:!1!==a.active&&"inactive"!==a.status&&!1!==b.active&&"inactive"!==b.status,temporaryPassword:b.temporaryPassword||bA(a.email||b.email||"")};await b_({user:b,form:c,accountId:p}),await b0({membership:a,user:b,form:c,accountId:p})}}catch(a){console.warn("Owner backend auth user load failed; using local auth cache fallback:",a),[e,f]=await Promise.all([bJ("appUsers","accountUsers","users"),bJ("userMemberships","memberships")])}let g=bT(f).map(a=>{let b=e.find(b=>String(bF(b)||"")===bG(a))||e.find(b=>!!(b.email&&a.email&&by(b.email)===by(a.email)));return{...a,accountId:a.accountId||b?.accountId||p,schoolId:a.schoolId??b?.schoolId,branchId:a.branchId??b?.branchId,email:a.email||b?.email,fullName:a.fullName||b?.fullName||b?.name,active:a.active??b?.active,status:a.status||b?.status,mustChangePassword:a.mustChangePassword??b?.mustChangePassword}}).filter(a=>bB(a,p)&&bt.some(b=>b.value===a.role)),h=e.filter(a=>!a.isDeleted&&(!a.accountId||a.accountId===p)&&g.some(b=>String(bF(a)||"")===bG(b)||!!(a.email&&b.email&&by(a.email)===by(b.email))));O(c),Q(d),S(h),U(g)}catch(a){console.error("Failed to load owner users and roles:",a),alert("Failed to load owner users and roles."),ac()}finally{s(!1)}},ae=(0,g.useMemo)(()=>{let a=[];return T.forEach(b=>{let c,d,e,f,g;if(!bt.some(a=>a.value===b.role))return;let h=R.find(a=>String(bF(a)||"")===bG(b))||R.find(a=>!!(a.email&&b.email&&by(a.email)===by(b.email))),i=b.schoolId?_.get(bw(b.schoolId)):void 0,j=b.branchId?aa.get(bw(b.branchId)):void 0,k=by(h?.email||b.email),l=function(a){let b=String(a.title||"").trim(),c=String(a.fullName||a.name||a.email||"User").trim();if(!b)return c;let d=b.replace(/\.$/,"").toLowerCase(),e=c.toLowerCase();return e.startsWith(`${d} `)||e.startsWith(`${d}. `)?c:`${b} ${c}`}({title:h?.title||b.title,fullName:h?.fullName||h?.name||b.fullName,email:k}),m=(c=!!(h?.id||h?.localId||h?.email),d=!!(b?.id||b?.localId||b?.role),e=h?.active===!1||h?.status==="inactive",f=b?.active===!1||b?.status==="inactive",g=c&&e||d&&f,{hasLogin:c,hasMembership:d,inactive:g,enabled:c&&d&&!g,mustChangePassword:!!(h?.mustChangePassword||b?.mustChangePassword)});a.push({key:`${b.role}-${bH(b)||k||l}`,role:b.role,user:h,membership:b,school:i,branch:j,title:h?.title||b.title,fullName:l,email:k,phone:bz(h?.phone),subLabel:`${i?.name||"No school"}${j?.name?` \xb7 ${j.name}`:""}`,...m})}),a.sort((a,b)=>{let c={school_admin:1,branch_admin:2,accountant:3};return c[a.role]-c[b.role]||a.fullName.localeCompare(b.fullName)})},[aa,T,_,R]),af=(0,g.useMemo)(()=>{let a=x.trim().toLowerCase();return ae.filter(b=>("all"===z||b.role===z)&&("enabled"!==B||!!b.enabled)&&("inactive"!==B||!!b.inactive)&&("all"===D||bw(b.membership?.schoolId)===bw(D))&&("all"===F||bw(b.membership?.branchId)===bw(F))&&(!a||`${b.fullName} ${b.email} ${b.phone} ${b.role} ${b.subLabel}`.toLowerCase().includes(a)))},[B,F,ae,z,D,x]),ag=(0,g.useMemo)(()=>({total:ae.length,schoolAdmins:ae.filter(a=>"school_admin"===a.role).length,branchAdmins:ae.filter(a=>"branch_admin"===a.role).length,accountants:ae.filter(a=>"accountant"===a.role).length,enabled:ae.filter(a=>a.enabled).length,inactive:ae.filter(a=>a.inactive).length,temporary:ae.filter(a=>a.mustChangePassword).length}),[ae]),ah=(0,g.useMemo)(()=>["all"!==z?z:void 0,"all"!==B?B:void 0,"all"!==D?D:void 0,"all"!==F?F:void 0].filter(Boolean).length,[B,F,z,D]),ai=(a,b)=>{Y(c=>{let d={...c,[a]:b};if("email"===a){let a=by(String(b));d.email=a,c.temporaryPassword&&c.temporaryPassword!==bA(c.email)||(d.temporaryPassword=bA(a))}if("schoolId"===a&&(P.some(a=>bw(a.id)===bw(c.branchId)&&bw(a.schoolId)===bw(b))||(d.branchId="")),"role"===a){let a=String(b);bt.find(b=>b.value===a)?.branchRequired||(d.branchId="")}return d}),$("")},aj=()=>{let a=N[0];Y({...bv,schoolId:a?.id?String(a.id):"",branchId:"",temporaryPassword:""}),$(""),W(!0)},ak=a=>{Y({membershipId:bH(a.membership),userId:String(bF(a.user)||bG(a.membership)||""),title:a.title||a.user?.title||"",fullName:a.user?.fullName||a.user?.name||a.fullName,email:a.email,phone:a.user?.phone||a.phone,role:a.role,schoolId:a.membership?.schoolId?String(a.membership.schoolId):"",branchId:a.membership?.branchId?String(a.membership.branchId):"",active:!a.inactive,temporaryPassword:a.user?.temporaryPassword||bA(a.email)}),$(""),W(!0)},al=async()=>{let a=p?X.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(X.email.trim())?X.fullName.trim()?bt.some(a=>a.value===X.role)?X.schoolId?bt.find(a=>a.value===X.role)?.branchRequired&&!X.branchId?`${bC(X.role)} role must be assigned to a branch.`:X.temporaryPassword.trim()?"":"Temporary password is required.":"Select the school this user belongs to.":"Owner can assign only school admin, branch admin, or accountant roles.":"Full name is required.":"Please enter a valid email address.":"Email is required because portal users sign in with email and password.":"Sign in first.";if(a)return void $(a);try{u(!0);let a=await b$({form:X,users:R,memberships:T});await b_({user:a.user,form:X,accountId:p}),await b0({membership:a.membership,user:a.user,form:X,accountId:p}),W(!1),await ad()}catch(a){console.error("Failed to save owner access through backend auth:",a),$(a?.message||"Failed to save access. Make sure the backend user and membership routes are running.")}finally{u(!1)}},am=async a=>{if(!a.membership?.id&&!a.membership?.localId){ak(a),$("Create portal access first.");return}let b=!a.enabled;try{u(!0);let c=String(bH(a.membership)),d=await bQ([{endpoint:`/memberships/${encodeURIComponent(c)}`,method:"PATCH",body:{active:b,status:b?"active":"inactive"}},{endpoint:`/user-memberships/${encodeURIComponent(c)}`,method:"PATCH",body:{active:b,status:b?"active":"inactive"}}]),e={membershipId:bH(a.membership),userId:String(bF(a.user)||bG(a.membership)||""),title:a.title||a.user?.title||"",fullName:a.user?.fullName||a.user?.name||a.fullName,email:a.email,phone:a.user?.phone||a.phone,role:a.role,schoolId:String(a.membership?.schoolId||a.school?.id||""),branchId:String(a.membership?.branchId||a.branch?.id||""),active:b,temporaryPassword:a.user?.temporaryPassword||bA(a.email)};a.user&&await b_({user:a.user,form:e,accountId:p}),await b0({membership:d,user:a.user||{id:d.userId,email:a.email},form:e,accountId:p}),await ad()}catch(a){console.error("Failed to toggle owner access through backend auth:",a),alert(a?.message||"Failed to update access.")}finally{u(!1)}},an=async a=>{if(!a.membership?.id&&!a.membership?.localId)return void alert("No membership exists for this access record yet.");if(window.confirm(`Delete ${bC(a.role)} access for ${a.fullName}?

This removes the role/membership from the backend database.`))try{u(!0),await b1(a),await b2(a),await ad()}catch(a){console.error("Failed to delete owner access through backend auth:",a),alert(a?.message||"Failed to delete this access role.")}finally{u(!1)}};return e||i||r?(0,f.jsx)(b3,{primary:q,title:"Opening Owner Users...",text:"Loading schools, branches and administrative access."}):d&&p?(0,f.jsxs)("main",{className:"ba-page ownerusers-page",style:{"--ba-primary":q},children:[(0,f.jsx)("style",{children:ca}),(0,f.jsxs)("section",{className:"ba-search-card","aria-label":"Owner users search and actions",children:[(0,f.jsxs)("label",{className:"ba-search",children:[(0,f.jsx)("span",{children:"⌕"}),(0,f.jsx)("input",{placeholder:"Search owner users...",value:x,onChange:a=>y(a.target.value),"aria-label":"Search owner users"})]}),(0,f.jsx)("button",{type:"button",className:"ba-add-inline",onClick:aj,"aria-label":"Add owner user",title:"Add user",children:"+"}),(0,f.jsxs)("button",{type:"button",className:`ba-filter-button ${ah?"active":""}`,onClick:()=>I(!0),"aria-label":"Open filters",title:"Filters",children:[(0,f.jsx)(b4,{}),ah?(0,f.jsx)("b",{children:ah}):null]}),(0,f.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>K(!0),"aria-label":"More options",children:"⋯"})]}),ah>0&&(0,f.jsxs)("section",{className:"ba-filter-chips","aria-label":"Active owner user filters",children:["all"!==z&&(0,f.jsxs)("button",{type:"button",onClick:()=>A("all"),children:["Role: ",bC(z)," \xd7"]}),"all"!==B&&(0,f.jsxs)("button",{type:"button",onClick:()=>C("all"),children:["Access: ",B," \xd7"]}),"all"!==D&&(0,f.jsxs)("button",{type:"button",onClick:()=>E("all"),children:["School: ",_.get(bw(D))?.name||D," \xd7"]}),"all"!==F&&(0,f.jsxs)("button",{type:"button",onClick:()=>G("all"),children:["Branch: ",aa.get(bw(F))?.name||F," \xd7"]})]}),"table"===v&&(0,f.jsx)("section",{className:"ba-table-card ownerusers-table-card",children:(0,f.jsxs)("div",{className:"ba-table-scroll",children:[(0,f.jsxs)("table",{children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsxs)("th",{children:["Users (",af.length,")"]}),(0,f.jsx)("th",{children:"Role"}),(0,f.jsx)("th",{children:"School"}),(0,f.jsx)("th",{children:"Branch"}),(0,f.jsx)("th",{children:"Email"}),(0,f.jsx)("th",{children:"Access"}),(0,f.jsx)("th",{children:"Actions"})]})}),(0,f.jsx)("tbody",{children:af.map(a=>{var b;return(0,f.jsxs)("tr",{children:[(0,f.jsxs)("td",{children:[(0,f.jsx)("strong",{children:a.fullName}),(0,f.jsx)("span",{children:a.phone||a.subLabel})]}),(0,f.jsx)("td",{children:(0,f.jsxs)(b5,{tone:"school_admin"===(b=a.role)?"blue":"branch_admin"===b?"purple":"accountant"===b?"green":"gray",children:[bD(a.role)," ",bC(a.role)]})}),(0,f.jsx)("td",{children:a.school?.name||"No school"}),(0,f.jsx)("td",{children:a.branch?.name||("school_admin"===a.role?"All/School":"No branch")}),(0,f.jsx)("td",{children:a.email||(0,f.jsx)("span",{className:"ownerusers-warn",children:"Email needed"})}),(0,f.jsx)("td",{children:(0,f.jsx)(b5,{tone:a.enabled?"green":a.inactive?"red":"orange",children:a.enabled?"Enabled":a.inactive?"Inactive":"Not Enabled"})}),(0,f.jsx)("td",{children:(0,f.jsxs)("div",{className:"ba-table-actions",children:[(0,f.jsx)("button",{type:"button",onClick:()=>ak(a),children:"Edit"}),(0,f.jsx)("button",{type:"button",onClick:()=>am(a),children:a.enabled?"Deactivate":"Activate"}),(0,f.jsx)("button",{type:"button",className:"ba-delete",onClick:()=>an(a),children:"Delete"})]})})]},a.key)})})]}),!af.length&&(0,f.jsx)("div",{className:"ba-empty-table",children:"No owner users match the selected filters."})]})}),"cards"===v&&(0,f.jsxs)("section",{className:"ba-list ownerusers-list",children:[af.map(a=>(0,f.jsxs)("button",{type:"button",className:"student-row ownerusers-row",onClick:()=>M(a),children:[(0,f.jsx)("span",{className:"ownerusers-avatar",children:bE(a.fullName)}),(0,f.jsxs)("span",{className:"student-main",children:[(0,f.jsx)("strong",{children:a.fullName}),(0,f.jsxs)("small",{children:[bD(a.role)," ",bC(a.role)," \xb7 ",a.email||"Email needed"]}),(0,f.jsx)("em",{children:a.subLabel})]}),(0,f.jsxs)("span",{className:"student-side",children:[(0,f.jsx)("span",{className:`status-dot-mini ${a.enabled?"green":a.inactive?"red":"orange"}`}),(0,f.jsx)("i",{children:"⋯"})]})]},a.key)),!af.length&&(0,f.jsx)(b6,{icon:"\uD83D\uDD10",title:"No users found",text:"No school admin, branch admin or accountant records match the selected filters."})]}),H&&(0,f.jsx)(b7,{schools:N,branches:P,roleFilter:z,accessFilter:B,schoolFilter:D,branchFilter:F,setRoleFilter:A,setAccessFilter:C,setSchoolFilter:a=>{E(a),G("all")},setBranchFilter:G,onClose:()=>I(!1)}),J&&(0,f.jsx)(b8,{viewMode:v,setViewMode:a=>{w(a),K(!1)},onAdd:()=>{K(!1),aj()},onRefresh:async()=>{K(!1),await ad()},summary:ag,onClose:()=>K(!1)}),L&&(0,f.jsx)(b9,{candidate:L,openCandidate:ak,toggleAccess:am,deleteAccess:an,onClose:()=>M(null)}),V&&(0,f.jsx)("div",{className:"ba-sheet-backdrop ownerusers-drawer-layer",role:"dialog","aria-modal":"true",children:(0,f.jsxs)("aside",{className:"ba-sheet ownerusers-drawer",children:[(0,f.jsxs)("div",{className:"ba-sheet-head",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:X.membershipId?"Edit Access":"Create Access"}),(0,f.jsxs)("p",{children:[bC(X.role)," \xb7 ",X.schoolId?_.get(bw(X.schoolId))?.name||"Selected school":"Select school"]})]}),(0,f.jsx)("button",{type:"button",onClick:()=>W(!1),"aria-label":"Close access form",children:"✕"})]}),Z&&(0,f.jsx)("section",{className:"ba-warning ownerusers-message",children:Z}),(0,f.jsxs)("section",{className:"ownerusers-note",children:[(0,f.jsx)("strong",{children:"Owner assignment"}),(0,f.jsx)("span",{children:"Select the school and, when required, the branch where this admin role should operate."})]}),(0,f.jsxs)("div",{className:"ba-form compact",children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Title"}),(0,f.jsx)("select",{value:X.title,onChange:a=>ai("title",a.target.value),children:bu.map(a=>(0,f.jsx)("option",{value:a,children:a||"No title"},a||"none"))})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Role"}),(0,f.jsx)("select",{value:X.role,onChange:a=>ai("role",a.target.value),children:bt.map(a=>(0,f.jsx)("option",{value:a.value,children:a.label},a.value))})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"School"}),(0,f.jsxs)("select",{value:X.schoolId,onChange:a=>ai("schoolId",a.target.value),children:[(0,f.jsx)("option",{value:"",children:"Select school"}),N.map(a=>(0,f.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Branch"}),(0,f.jsxs)("select",{value:X.branchId,disabled:!bt.find(a=>a.value===X.role)?.branchRequired,onChange:a=>ai("branchId",a.target.value),children:[(0,f.jsx)("option",{value:"",children:bt.find(a=>a.value===X.role)?.branchRequired?"Select branch":"Not required"}),ab.map(a=>(0,f.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Full Name"}),(0,f.jsx)("input",{value:X.fullName,onChange:a=>ai("fullName",a.target.value)})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Email"}),(0,f.jsx)("input",{value:X.email,onChange:a=>ai("email",a.target.value),placeholder:"user@example.com"})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Phone"}),(0,f.jsx)("input",{value:X.phone,onChange:a=>ai("phone",a.target.value)})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Temporary Password"}),(0,f.jsx)("input",{value:X.temporaryPassword,onChange:a=>ai("temporaryPassword",a.target.value)})]})]}),(0,f.jsxs)("label",{className:"ownerusers-switch-row",children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("strong",{children:"Active access"}),(0,f.jsx)("span",{children:"Inactive users remain recorded but cannot use this selected role."})]}),(0,f.jsx)("button",{type:"button",className:`ownerusers-switch ${X.active?"on":""}`,onClick:()=>ai("active",!X.active),"aria-pressed":X.active,children:(0,f.jsx)("span",{})})]}),(0,f.jsxs)("div",{className:"ba-sheet-actions",children:[(0,f.jsx)("button",{type:"button",onClick:()=>W(!1),children:"Cancel"}),(0,f.jsx)("button",{type:"button",className:"primary",disabled:t,onClick:al,children:t?"Saving...":"Save Access"})]})]})})]}):(0,f.jsx)(b3,{primary:q,title:"Redirecting to login...",text:"You must sign in before managing owner users."})},ownerBillingWorkspace:function(a){let[b,c]=h().useState("billing"),d="subscription"===b?cu.A:"invoices"===b?cE:"payments"===b?cZ:cm;return(0,f.jsxs)("div",{className:"eds-owner-workspace",children:[(0,f.jsx)(j.A,{value:b,onChange:c,ariaLabel:"Owner billing",tabs:[{key:"billing",label:"Billing Overview"},{key:"subscription",label:"My Subscription"},{key:"invoices",label:"Invoices"},{key:"payments",label:"Payments"}]}),(0,f.jsx)(d,{...a})]})},ownerSystemWorkspace:function(a){let[b,c]=h().useState("profile"),d="sync"===b?dr:"calendarOverview"===b?dS:c6.A;return(0,f.jsxs)("div",{className:"eds-owner-workspace",children:[(0,f.jsx)(j.A,{value:b,onChange:c,ariaLabel:"Owner system",tabs:[{key:"profile",label:"Account Profile"},{key:"sync",label:"Sync & Backup"},{key:"calendarOverview",label:"Calendar"}]}),(0,f.jsx)(d,{...a})]})},ownerCommsWorkspace:function(a){let[b,c]=h().useState("ownerAnnouncements");return(0,f.jsxs)("div",{className:"eds-owner-workspace",children:[(0,f.jsx)(j.A,{value:b,onChange:c,ariaLabel:"Owner communication",tabs:[{key:"ownerAnnouncements",label:"Announcements"},{key:"messages",label:"Messages"}]}),(0,f.jsx)("messages"===b?eo:eU,{...a})]})},schools:I,branches:bd,billing:cm,subscription:cu.A,invoices:cE,payments:cZ,profile:c6.A,sync:dr,calendarOverview:dS,messages:eo,ownerAnnouncements:eU};function e3(){return(0,f.jsx)(i.A,{portalTitle:"Owner Portal",portalSubtitle:"Institutions, user access, billing and account management",homeKey:"ownerDashboard",allowedRoles:["owner","super_admin"],navSections:e1,navigationMode:"branch-workspace",routes:e2,lockedContext:!1,requireSchool:!1,requireBranch:!1})}},91645:a=>{"use strict";a.exports=require("net")},94735:a=>{"use strict";a.exports=require("events")}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[3445,63,7488,7533,2978,1537,8505,3080,728,1602,2300,2909,8744],()=>b(b.s=59885));module.exports=c})();
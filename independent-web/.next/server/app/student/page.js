(()=>{var a={};a.id=7454,a.ids=[7454],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},1932:a=>{"use strict";a.exports=require("url")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},6557:(a,b,c)=>{"use strict";c.r(b),c.d(b,{__next_app__:()=>M,handler:()=>O,routeModule:()=>N});var d=c(7553),e=c(84006),f=c(67798),g=c(34775),h=c(99373),i=c(73461),j=c(1020),k=c(26349),l=c(54365),m=c(16023),n=c(63747),o=c(24235),p=c(23938),q=c(261),r=c(66758),s=c(77243),t=c(26713),u=c(37527),v=c(22820),w=c(88216),x=c(47929),y=c(79551),z=c(71797),A=c(89125),B=c(86439),C=c(77068),D=c(27269),E=c(61287),F=c(81494),G=c(70722),H=c(70753),I=c(43954),J=c(17891),K={};for(let a in E)0>["default","__next_app__","routeModule","handler"].indexOf(a)&&(K[a]=()=>E[a]);c.d(b,K);let L={children:["",{children:["student",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,16771)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\student\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,38124)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\student\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}},[]]},{layout:[()=>Promise.resolve().then(c.bind(c,32056)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,55091,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,45270,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,28193,23)),"next/dist/client/components/builtin/unauthorized.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}},[]]}.children,M={require:c,loadChunk:()=>Promise.resolve()},N=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/student/page",pathname:"/student",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:L},distDir:".next",relativeProjectDir:""});async function O(a,b,d){var K,P,Q,R,S;d.requestMeta&&(0,h.setRequestMeta)(a,d.requestMeta),N.isDev&&(0,h.addRequestMeta)(a,"devRequestTimingInternalsEnd",process.hrtime.bigint());let T=!!(0,h.getRequestMeta)(a,"minimalMode"),U="/student/page";"/index"===U&&(U="/");let V=await N.prepare(a,b,{srcPage:U,multiZoneDraftMode:!1});if(!V)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:W,query:X,params:Y,pageIsDynamic:Z,buildManifest:$,nextFontManifest:_,reactLoadableManifest:aa,serverActionsManifest:ab,clientReferenceManifest:ac,subresourceIntegrityManifest:ad,prerenderManifest:ae,isDraftMode:af,resolvedPathname:ag,revalidateOnlyGenerated:ah,routerServerContext:ai,nextConfig:aj,parsedUrl:ak,interceptionRoutePatterns:al,deploymentId:am,clientAssetToken:an}=V,ao=(0,q.normalizeAppPath)(U),{isOnDemandRevalidate:ap}=V,aq=aj.experimental.ppr&&!aj.cacheComponents&&(0,I.isInterceptionRouteAppPath)(ag)?null:N.match(ag,ae),ar=(null==aq?void 0:aq.route)??null,as=!!ae.routes[ag],at=a.headers["user-agent"]||"",au=(0,t.getBotType)(at),av=(0,p.isHtmlBotRequest)(a),aw=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[s.NEXT_ROUTER_PREFETCH_HEADER],ax=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[s.RSC_HEADER],ay=(0,r.getIsPossibleServerAction)(a),az=(0,m.checkIsAppPPREnabled)(aj.experimental.ppr),aA=a.headers[x.NEXT_RESUME_STATE_LENGTH_HEADER];if(!(0,h.getRequestMeta)(a,"postponed")&&T&&az&&ay&&aA&&"string"==typeof aA){let e=parseInt(aA,10),{maxPostponedStateSize:f,maxPostponedStateSizeBytes:g}=(0,D.getMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize);if(!isNaN(e)&&e>0){if(e>g)return b.statusCode=413,b.end((0,D.getPostponedStateExceededErrorMessage)(f)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let i="1 MB",j=(null==(S=aj.experimental.serverActions)?void 0:S.bodySizeLimit)??i,k=e+(j!==i?c(95726).parse(j):1048576),l=await (0,D.readBodyWithSizeLimit)(a,k);if(null===l)return b.statusCode=413,b.end("Request body exceeded limit. To configure the body size limit for Server Actions, see: https://nextjs.org/docs/app/api-reference/next-config-js/serverActions#bodysizelimit"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;if(l.length>=e){let b=l.subarray(0,e).toString("utf8");(0,h.addRequestMeta)(a,"postponed",b);let c=l.subarray(e);(0,h.addRequestMeta)(a,"actionBody",c)}else throw Object.defineProperty(Error(`invariant: expected ${e} bytes of postponed state but only received ${l.length} bytes`),"__NEXT_ERROR_CODE",{value:"E979",enumerable:!1,configurable:!0})}}if(!(0,h.getRequestMeta)(a,"postponed")&&az&&"1"===a.headers[x.NEXT_RESUME_HEADER]&&"POST"===a.method){let{maxPostponedStateSize:c,maxPostponedStateSizeBytes:e}=(0,D.getMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize),f=await (0,D.readBodyWithSizeLimit)(a,e);if(null===f)return b.statusCode=413,b.end((0,D.getPostponedStateExceededErrorMessage)(c)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let g=f.toString("utf8");(0,h.addRequestMeta)(a,"postponed",g)}let aB=!0===N.isDev||!0===aj.experimental.exposeTestingApiInProductionBuild,aC=aB&&("1"===a.headers[s.NEXT_INSTANT_PREFETCH_HEADER]||void 0===a.headers[s.RSC_HEADER]&&"string"==typeof a.headers.cookie&&a.headers.cookie.includes(s.NEXT_INSTANT_TEST_COOKIE+"=")),aD=(az||aC)&&((null==(K=ae.routes[ao]??ae.dynamicRoutes[ao])?void 0:K.renderingMode)==="PARTIALLY_STATIC"||aC&&(aB||(null==ai?void 0:ai.experimentalTestProxy)===!0)),aE=aC&&aD,aF=aE&&!0===N.isDev,aG=!1,aH=aD?(0,h.getRequestMeta)(a,"postponed"):void 0,aI=null==(P=ae.routes[ag])?void 0:P.prefetchDataRoute,aJ=aD&&ax&&!aw&&!aI;T&&(aJ=aJ&&!!aH);let aK=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),aL=(!au||!aD)&&(!at||(0,p.shouldServeStreamingMetadata)(at,aj.htmlLimitedBots)),aM=!!((ar||as||ae.routes[ao])&&!(au&&aD)),aN=aD&&!0===aj.cacheComponents,aO=!0===N.isDev||!aM||"string"==typeof aH||(aN&&(0,h.getRequestMeta)(a,"onCacheEntryV2")?aJ&&!T:aJ),aP=!!au&&aD,aQ=(null==ar?void 0:ar.remainingPrerenderableParams)??[],aR=(null==ar?void 0:ar.fallback)===null&&((null==(Q=ar.fallbackRootParams)?void 0:Q.length)??0)>0,aS=null;if(!af&&aM&&!aO&&!ay&&!aH&&!aJ){let a=aq?"string"==typeof(null==ar?void 0:ar.fallback)?ar.fallback:aq.source:null;if(!0===aj.experimental.partialFallbacks&&a&&(null==ar?void 0:ar.fallbackRouteParams)&&!aR){if(aQ.length>0){let b,c=(b=new Map(aQ.map(a=>[a.paramName,a])),a.split("/").map(a=>{let c=(0,J.getSegmentParam)(a);if(!c)return a;let d=b.get(c.paramName);if(!d)return a;let e=null==Y?void 0:Y[d.paramName];if(!e)return a;let f=Array.isArray(e)?e.map(a=>encodeURIComponent(a)).join("/"):encodeURIComponent(e);return a.replace(function(a){let{repeat:b,optional:c}=(0,J.getParamProperties)(a.paramType);return c?`[[...${a.paramName}]]`:b?`[...${a.paramName}]`:`[${a.paramName}]`}(d),f)}).join("/")||"/");aS=c!==a?c:null}}else aS=ag}let aT=aS;!aT&&(N.isDev||aM&&Z&&(null==ar?void 0:ar.fallbackRouteParams)&&!ay)&&(aT=ag),N.isDev||af||!aM||!ax||aJ||(0,k.d)(a.headers);let aU={...E,tree:L,handler:O,routeModule:N,__next_app__:M};ab&&ac&&(0,o.setManifestsSingleton)({page:U,clientReferenceManifest:ac,serverActionsManifest:ab});let aV=a.method||"GET",aW=(0,g.getTracer)(),aX=aW.getActiveScopeSpan(),aY=!!(null==ai?void 0:ai.isWrappedByNextServer),aZ=!0===aj.experimental.partialFallbacks&&aQ.length>0?(null==ar||null==(R=ar.fallbackRouteParams)?void 0:R.filter(a=>!aQ.some(b=>b.paramName===a.paramName)))??[]:[],a$=async()=>((null==ai?void 0:ai.render404)?await ai.render404(a,b,ak,!1):b.end("This page could not be found"),null);try{let k,m=N.getVaryHeader(ag,al);b.setHeader("Vary",m);let o=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return N.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let a=aW.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let d=a.get("next.route");if(d){let a=`${aV} ${d}`;c.setAttributes({"next.route":d,"http.route":d,"next.span_name":a}),c.updateName(a),k&&k!==c&&(k.setAttribute("http.route",d),k.updateName(a))}else c.updateName(`${aV} ${U}`)})},p=(0,h.getRequestMeta)(a,"incrementalCache")||await N.getIncrementalCache(a,aj,ae,T);null==p||p.resetRequestCache(),globalThis.__incrementalCache=p;let q=async({span:e,postponed:f,fallbackRouteParams:g,forceStaticRender:i})=>{let k={query:X,params:Y,page:ao,sharedContext:{buildId:W,deploymentId:am,clientAssetToken:an},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aU,Component:(0,j.T)(aU),params:Y,routeModule:N,page:U,postponed:f,shouldWaitOnAllReady:aP,serveStreamingMetadata:aL,supportsDynamicResponse:"string"==typeof f||aO,buildManifest:$,nextFontManifest:_,reactLoadableManifest:aa,subresourceIntegrityManifest:ad,setCacheStatus:null==ai?void 0:ai.setCacheStatus,setIsrStatus:null==ai?void 0:ai.setIsrStatus,setReactDebugChannel:null==ai?void 0:ai.setReactDebugChannel,sendErrorsToBrowser:null==ai?void 0:ai.sendErrorsToBrowser,dir:c(33873).join(process.cwd(),N.relativeProjectDir),isDraftMode:af,botType:au,isOnDemandRevalidate:ap,isPossibleServerAction:ay,assetPrefix:aj.assetPrefix,nextConfigOutput:aj.output,crossOrigin:aj.crossOrigin,trailingSlash:aj.trailingSlash,images:aj.images,previewProps:ae.preview,enableTainting:aj.experimental.taint,htmlLimitedBots:aj.htmlLimitedBots,reactMaxHeadersLength:aj.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:p,cacheLifeProfiles:aj.cacheLife,basePath:aj.basePath,serverActions:aj.experimental.serverActions,logServerFunctions:"object"==typeof aj.logging&&!!aj.logging.serverFunctions,...aE||aF||aG?{isBuildTimePrerendering:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isDebugDynamicAccesses:aF}:{},cacheComponents:!!aj.cacheComponents,experimental:{isRoutePPREnabled:aD,expireTime:aj.expireTime,staleTimes:aj.experimental.staleTimes,dynamicOnHover:!!aj.experimental.dynamicOnHover,optimisticRouting:!!aj.experimental.optimisticRouting,inlineCss:!!aj.experimental.inlineCss,prefetchInlining:aj.experimental.prefetchInlining??!1,authInterrupts:!!aj.experimental.authInterrupts,cachedNavigations:!!aj.experimental.cachedNavigations,clientTraceMetadata:aj.experimental.clientTraceMetadata||[],clientParamParsingOrigins:aj.experimental.clientParamParsingOrigins,maxPostponedStateSizeBytes:(0,C.parseMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize)},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d,e)=>N.onRequestError(a,b,d,e,ai),err:(0,h.getRequestMeta)(a,"invokeError")}};i&&(k.renderOpts.supportsDynamicResponse=!1);let l=await o(e,k),{metadata:m}=l,{cacheControl:n,headers:q={},fetchTags:r,fetchMetrics:s}=m;if(r&&(q[x.NEXT_CACHE_TAGS_HEADER]=r),a.fetchMetrics=s,aM&&(null==n?void 0:n.revalidate)===0&&!N.isDev&&!aD){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${ag}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:u.CachedRouteKind.APP_PAGE,html:l,headers:q,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},r=async({hasResolved:c,previousCacheEntry:g,isRevalidating:i,span:j,forceStaticRender:k=!1})=>{let l=!1===N.isDev,m=c||b.writableEnded;try{let f;if(ap&&ah&&!g&&!T)return(null==ai?void 0:ai.render404)?await ai.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ar&&(f=(0,v.parseFallbackField)(ar.fallback)),!0===aj.experimental.partialFallbacks&&(null==ar?void 0:ar.fallback)===null&&!aR&&aQ.length>0&&(f=v.FallbackMode.PRERENDER),f===v.FallbackMode.PRERENDER&&(0,t.isBot)(at)&&(!aD||av)&&(f=v.FallbackMode.BLOCKING_STATIC_RENDER),(null==g?void 0:g.isStale)===-1&&(ap=!0),ap&&(f!==v.FallbackMode.NOT_FOUND||g)&&(f=v.FallbackMode.BLOCKING_STATIC_RENDER),!T&&f!==v.FallbackMode.BLOCKING_STATIC_RENDER&&aT&&!m&&!af&&Z&&(l||!as)){if((l||ar)&&f===v.FallbackMode.NOT_FOUND){if(aj.adapterPath)return await a$();throw new B.NoFallbackError}if(aD&&(aj.cacheComponents?!aJ:!ax)){let b=l&&"string"==typeof(null==ar?void 0:ar.fallback)?ar.fallback:ao,f=(l||aE)&&(null==ar?void 0:ar.fallbackRouteParams)?(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams):aG?(0,n.getFallbackRouteParams)(ao,N):null;aE&&f&&(0,h.addRequestMeta)(a,"fallbackParams",f);let g=await N.handleResponse({cacheKey:b,req:a,nextConfig:aj,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:ae,isRoutePPREnabled:aD,responseGenerator:async()=>q({span:j,postponed:void 0,fallbackRouteParams:f,forceStaticRender:!0}),waitUntil:d.waitUntil,isMinimalMode:T});if(null===g)return null;if(g)return T||!aD||!(aQ.length>0)||!0!==aj.experimental.partialFallbacks||!aS||!p||ap||aG||aB||aC||aw||(0,H.scheduleOnNextTick)(async()=>{let b=N.getResponseCache(a);try{await b.revalidate(aS,p,aD,!1,a=>q({span:a.span,postponed:void 0,fallbackRouteParams:aZ.length>0?(0,n.createOpaqueFallbackRouteParams)(aZ):null,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}),delete g.cacheControl,g}}let o=ap||i||!aH?void 0:aH;if(aN&&!T&&p&&(aJ||ay)&&!k){let b=await p.get(ag,{kind:u.IncrementalCacheKind.APP_PAGE,isRoutePPREnabled:!0,isFallback:!1});b&&b.value&&b.value.kind===u.CachedRouteKind.APP_PAGE&&(o=b.value.postponed,b&&(-1===b.isStale||!0===b.isStale)&&(0,H.scheduleOnNextTick)(async()=>{let b=N.getResponseCache(a);try{await b.revalidate(ag,p,aD,!1,a=>r({...a,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}))}if((aE||aF)&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:u.CachedRouteKind.PAGES,html:w.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let s=(l&&(0,h.getRequestMeta)(a,"renderFallbackShell")||aE&&!as)&&(null==ar?void 0:ar.fallbackRouteParams)?(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams):aG?(0,n.getFallbackRouteParams)(ao,N):null;if((l||aE)&&aj.cacheComponents&&!as&&(null==ar?void 0:ar.fallbackRouteParams)){let b=(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams);b&&(0,h.addRequestMeta)(a,"fallbackParams",b)}return q({span:j,postponed:o,fallbackRouteParams:s,forceStaticRender:k})}catch(b){throw(null==g?void 0:g.isStale)&&await N.onRequestError(a,b,{routerKind:"App Router",routePath:U,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aM,isOnDemandRevalidate:ap})},!1,ai),b}},D=async c=>{var f,g,i,j,k;let l,m=await N.handleResponse({cacheKey:aS,responseGenerator:a=>r({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ap,isRoutePPREnabled:aD,req:a,nextConfig:aj,prerenderManifest:ae,waitUntil:d.waitUntil,isMinimalMode:T});if(af&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),N.isDev&&b.setHeader("Cache-Control","no-cache, must-revalidate"),!m){if(aS)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=m.value)?void 0:f.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=m.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let n="string"==typeof m.value.postponed;ax&&!ay&&am&&b.setHeader(x.NEXT_NAV_DEPLOYMENT_ID_HEADER,am),aM&&!aJ&&(!n||aw)&&(T||b.setHeader("x-nextjs-cache",ap?"REVALIDATED":m.isMiss?"MISS":m.isStale?"STALE":"HIT"),b.setHeader(s.NEXT_IS_PRERENDER_HEADER,"1"));let{value:o}=m;if(aH)l={revalidate:0,expire:void 0};else if(aJ)l={revalidate:0,expire:void 0};else if(!N.isDev)if(af)l={revalidate:0,expire:void 0};else if(aM){if(m.cacheControl)if("number"==typeof m.cacheControl.revalidate){if(m.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${m.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:m.cacheControl.revalidate,expire:(null==(j=m.cacheControl)?void 0:j.expire)??aj.expireTime}}else l={revalidate:x.CACHE_ONE_YEAR_SECONDS,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(m.cacheControl=l,"string"==typeof aK&&(null==o?void 0:o.kind)===u.CachedRouteKind.APP_PAGE&&o.segmentData){b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=o.headers)?void 0:k[x.NEXT_CACHE_TAGS_HEADER];T&&aM&&c&&"string"==typeof c&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,c);let d=o.segmentData.get(aK);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.fromStatic(d,s.RSC_CONTENT_TYPE_HEADER),cacheControl:m.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.EMPTY,cacheControl:m.cacheControl}))}let p=aN?(0,h.getRequestMeta)(a,"onCacheEntryV2")??(0,h.getRequestMeta)(a,"onCacheEntry"):(0,h.getRequestMeta)(a,"onCacheEntry");if(p&&await p(m,{url:(0,h.getRequestMeta)(a,"initURL")??a.url}))return null;if(o.headers){let a={...o.headers};for(let[c,d]of(T&&aM||delete a[x.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let t=null==(g=o.headers)?void 0:g[x.NEXT_CACHE_TAGS_HEADER];if(T&&aM&&t&&"string"==typeof t&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,t),!o.status||ax&&aD||(b.statusCode=o.status),!T&&o.status&&F.RedirectStatusCode[o.status]&&ax&&(b.statusCode=200),n&&!aJ&&b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"1"),ax&&!af){if(void 0===o.rscData){if(o.html.contentType!==s.RSC_CONTENT_TYPE_HEADER)if(aj.cacheComponents)return b.statusCode=404,(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.EMPTY,cacheControl:m.cacheControl});else throw Object.defineProperty(new G.InvariantError(`Expected RSC response, got ${o.html.contentType}`),"__NEXT_ERROR_CODE",{value:"E789",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:o.html,cacheControl:m.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.fromStatic(o.rscData,s.RSC_CONTENT_TYPE_HEADER),cacheControl:m.cacheControl})}let v=o.html;if(aC&&aE){let c=!0===N.isDev?crypto.randomUUID():null;return v.pipeThrough((0,z.createInstantTestScriptInsertionTransformStream)(c)),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})}if(!n||T||ax)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:m.cacheControl});if(aE||aF)return v.push(new ReadableStream({start(a){a.enqueue(y.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}});let B=new TransformStream;return v.push(B.readable),q({span:c,postponed:o.postponed,fallbackRouteParams:null,forceStaticRender:!1}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(B.writable)}).catch(a=>{B.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})};if(!aY||!aX)return k=aW.getActiveScopeSpan(),await aW.withPropagatedContext(a.headers,()=>aW.trace(i.BaseServerSpan.handleRequest,{spanName:`${aV} ${U}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aV,"http.target":a.url}},D),void 0,!aY);await D(aX)}catch(b){throw b instanceof B.NoFallbackError||await N.onRequestError(a,b,{routerKind:"App Router",routePath:U,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aM,isOnDemandRevalidate:ap})},!1,ai),b}}},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},16771:(a,b,c)=>{"use strict";c.r(b),c.d(b,{NAV_SECTIONS:()=>e,default:()=>f});var d=c(77943);let e=(0,d.registerClientReference)(function(){throw Error("Attempted to call NAV_SECTIONS() from the server but NAV_SECTIONS is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\student\\page.tsx","NAV_SECTIONS"),f=(0,d.registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\AGNES\\\\github\\\\eleeveon-schools-frontend\\\\app\\\\student\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\student\\page.tsx","default")},17891:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/get-segment-param")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},19417:(a,b,c)=>{Promise.resolve().then(c.bind(c,74485))},21820:a=>{"use strict";a.exports=require("os")},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},27910:a=>{"use strict";a.exports=require("stream")},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},34631:a=>{"use strict";a.exports=require("tls")},38124:(a,b,c)=>{"use strict";function d({children:a}){return a}c.r(b),c.d(b,{default:()=>d})},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},43954:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/interception-routes")},55511:a=>{"use strict";a.exports=require("crypto")},55591:a=>{"use strict";a.exports=require("https")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},70722:a=>{"use strict";a.exports=require("next/dist/shared/lib/invariant-error")},74075:a=>{"use strict";a.exports=require("zlib")},74485:(a,b,c)=>{"use strict";c.r(b),c.d(b,{NAV_SECTIONS:()=>aQ,default:()=>aS});var d=c(48249),e=c(30728),f=c(23553),g=c(67484),h=c(19099),i=c(4121),j=c(16453),k=c(18423),l=c(41259),m=c(47984);let n=[{id:"pathways-to-possibility",type:"image",src:"/pathways-to-possibility.png",durationSeconds:7},{id:"building-the-future",type:"image",src:"/building-the-future.png",durationSeconds:7},{id:"knowledge-in-motion",type:"image",src:"/knowledge-in-motion.png",durationSeconds:7}];function o(a){return null==a?"":String(a).trim()}function p(a,b){let c=o(a),d=o(b);return!!(c&&d&&c===d)}function q(a,b=""){return String(a??"").trim()||b}function r(a){let b=Number(a??0);return Number.isFinite(b)?b:0}function s(a){return a?.id??a?.localId??a?.cloudId??a?.payload?.id}function t(a){return!!a&&!0!==a.isDeleted&&!1!==a.active&&!["deleted","archived","inactive","disabled","withdrawn"].includes(q(a.status).toLowerCase())}function u(...a){for(let b of a){let a=o(b);if(a)return a}return""}function v(a){return a.filter(t).length}function w(a,b){let c=a.find(a=>p(s(a),b));return q(c?.publicUrl||c?.remoteUrl||c?.previewDataUrl||c?.thumbnailDataUrl||c?.localObjectUrl)}function x({slides:a}){let[b,c]=(0,g.useState)(0),e=a[b%Math.max(1,a.length)];return e?(0,d.jsxs)("section",{className:"sd-hero",children:["video"===e.type?(0,d.jsx)("video",{src:e.src,poster:e.poster,autoPlay:!0,muted:!0,playsInline:!0,onEnded:()=>c(b=>(b+1)%a.length)}):(0,d.jsx)("img",{src:e.src,alt:""}),a.length>1?(0,d.jsx)("div",{className:"sd-dots",children:a.map((a,e)=>(0,d.jsx)("button",{type:"button",className:e===b?"active":"",onClick:()=>c(e),"aria-label":`Show slide ${e+1}`},a.id))}):null]}):null}function y({navigate:a,navSections:b}){(0,h.useRouter)();let{accountId:c,authenticated:e,loading:f}=(0,i.F)(),{settings:m,loading:C}=(0,j.t)(),{activeSchoolId:D,activeBranchId:E,activeSchool:F,activeBranch:G}=(0,k.c)(),{activeStudentId:H,activeMembership:I}=(0,l.A)(),J=m?.primaryColor||"var(--primary-color,#2563eb)",K=(0,g.useMemo)(()=>null,[]),L=K?.membership||I||null;u(K?.schoolId,L?.schoolId,D,F?.id,m?.schoolId),u(K?.branchId,L?.branchId,E,G?.id,m?.branchId);let M=u(K?.studentLocalId,L?.studentLocalId,L?.studentId,H,null),[N,O]=(0,g.useState)(!0),[P,Q]=(0,g.useState)({}),R=(0,g.useMemo)(()=>(P.students||[]).find(a=>M&&p(s(a),M))||null,[P.students,M]),S=(0,g.useMemo)(()=>{let a=M||o(s(R)),b=(P.studentEnrollments||[]).filter(b=>!a||p(b.studentId,a)),c=b.find(a=>"active"===q(a.status,"active").toLowerCase())||b[0],d=o(c?.classId||R?.currentClassId||R?.classId),e=new Set((P.classSubjects||[]).filter(a=>!d||p(a.classId,d)).map(a=>o(a.subjectId)).filter(Boolean)),f=(P.subjects||[]).filter(a=>!e.size||e.has(o(s(a)))),g=(P.assignments||[]).filter(b=>(!b.studentId||p(b.studentId,a))&&(!b.classId||p(b.classId,d))),h=(P.attendance||[]).filter(b=>!a||p(b.studentId,a)),i=h.filter(a=>"present"===q(a.status).toLowerCase()).length,j=h.length?Math.round(i/h.length*100):0,k=(P.computedResults||[]).filter(b=>!a||p(b.studentId,a)),l=k.length?Math.round(k.reduce((a,b)=>a+r(b.percentage||b.average||b.score||b.totalScore),0)/k.length):0,m=(P.studentFeeInvoices||[]).filter(b=>!a||p(b.studentId,a)),n=[...P.studentFeePayments||[],...P.payments||[]].filter(b=>!b.studentId||p(b.studentId,a)),t=m.reduce((a,b)=>a+r(b.total||b.amount||b.netAmount),0),u=n.reduce((a,b)=>a+r(b.amount||b.total),0);return{subjects:f.length||e.size,assignments:v(g),pendingAssignments:g.filter(a=>!["submitted","completed","graded"].includes(q(a.status).toLowerCase())).length,attendancePercent:j,present:i,attendance:v(h),results:v(k),averageScore:l,reportCards:(P.reportCards||[]).filter(b=>!a||p(b.studentId,a)).length,feeBalance:Math.max(0,t-u),currency:q(m[0]?.currencyCode||n[0]?.currencyCode,"GHS")}},[P,R,M]),T=(0,g.useMemo)(()=>{var a,b;let c,d;return a=P.portalHighlights||[],b=(P.mediaAssets||[]).filter(t),c=Date.now(),(d=a.filter(t).filter(a=>!(!(Array.isArray(a.audiences)?a.audiences.map(a=>q(a).toLowerCase()):[q(a.audience||a.portal||a.role||"all").toLowerCase()]).some(a=>["all","student","students"].includes(a))||!["published","scheduled","active"].includes(q(a.status,"published").toLowerCase())||r(a.startAt)>c||r(a.endAt)&&r(a.endAt)<c)).sort((a,b)=>r(a.displayOrder||a.order)-r(b.displayOrder||b.order)).map((a,c)=>{let d="video"===q(a.mediaType).toLowerCase()?"video":"image",e=w(b,a.mediaAssetId)||("image"===d?q(a.fallbackImageUrl):"");return e?{id:o(s(a))||`student-highlight-${c}`,type:d,src:e,poster:w(b,a.posterMediaAssetId)||q(a.fallbackImageUrl)||void 0,durationSeconds:Math.max(3,Math.min(30,r(a.durationSeconds||7)))}:null}).filter(a=>!!a)).length?d:n},[P.portalHighlights,P.mediaAssets]),U=(0,g.useMemo)(()=>(P.announcements||[]).filter(t).slice(0,2),[P.announcements]),V=(0,g.useMemo)(()=>(P.calendarEvents||[]).filter(t).sort((a,b)=>new Date(a.startAt||a.date||0).getTime()-new Date(b.startAt||b.date||0).getTime()).slice(0,2),[P.calendarEvents]);function W(b){if(a)return void a(b);try{window.dispatchEvent(new CustomEvent("eleeveon:portal-route",{detail:{key:b}}))}catch{}}return N||f||C?(0,d.jsx)(A,{primary:J,title:"Opening student home..."}):(0,d.jsxs)("main",{className:"sd-page",style:{"--sd-primary":J},children:[(0,d.jsx)("style",{children:B}),(0,d.jsx)(x,{slides:T}),(0,d.jsxs)("section",{className:"sd-metrics",children:[(0,d.jsxs)("button",{type:"button",onClick:()=>W("myAttendance"),children:[(0,d.jsx)("span",{children:"Attendance"}),(0,d.jsxs)("strong",{children:[S.attendancePercent,"%"]}),(0,d.jsxs)("small",{children:[S.present," ","present record(s)"]})]}),(0,d.jsxs)("button",{type:"button",onClick:()=>W("myResults"),children:[(0,d.jsx)("span",{children:"Results"}),(0,d.jsxs)("strong",{children:[S.averageScore||"—",S.averageScore?"%":""]}),(0,d.jsxs)("small",{children:[S.results," ","result record(s)"]})]})]}),(0,d.jsxs)("section",{className:"sd-grid",children:[(0,d.jsxs)("article",{className:"sd-card",children:[(0,d.jsx)("header",{children:(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Learning"}),(0,d.jsx)("h2",{children:"My work"})]})}),(0,d.jsxs)("div",{className:"sd-work-grid",children:[(0,d.jsxs)("button",{type:"button",onClick:()=>W("mySubjects"),children:[(0,d.jsx)("strong",{children:S.subjects}),(0,d.jsx)("span",{children:"Subjects"})]}),(0,d.jsxs)("button",{type:"button",onClick:()=>W("myAssignments"),children:[(0,d.jsx)("strong",{children:S.pendingAssignments}),(0,d.jsx)("span",{children:"Pending"})]}),(0,d.jsxs)("button",{type:"button",onClick:()=>W("myReportCards"),children:[(0,d.jsx)("strong",{children:S.reportCards}),(0,d.jsx)("span",{children:"Reports"})]})]})]}),(0,d.jsxs)("article",{className:"sd-card",children:[(0,d.jsxs)("header",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Account"}),(0,d.jsx)("h2",{children:"Fees"})]}),(0,d.jsx)("button",{type:"button",onClick:()=>W("studentPayments"),children:"Open"})]}),(0,d.jsx)("strong",{className:"sd-balance",children:function(a,b="GHS"){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:b,maximumFractionDigits:0}).format(r(a))}catch{return`${b} ${r(a).toLocaleString()}`}}(S.feeBalance,S.currency)}),(0,d.jsx)("p",{className:"sd-muted",children:S.feeBalance?"Outstanding balance":"No outstanding balance"})]}),(0,d.jsxs)("article",{className:"sd-card",children:[(0,d.jsxs)("header",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"School updates"}),(0,d.jsx)("h2",{children:"Announcements"})]}),(0,d.jsx)("button",{type:"button",onClick:()=>W("announcements"),children:"View all"})]}),(0,d.jsxs)("div",{className:"sd-list",children:[U.map((a,b)=>(0,d.jsxs)("button",{type:"button",className:"sd-row",onClick:()=>W("announcements"),children:[(0,d.jsx)("span",{children:"\uD83D\uDCE3"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:q(a.title,"Announcement")}),(0,d.jsx)("small",{children:q(a.body||a.message||a.content,"Open to read")})]})]},o(s(a))||b)),U.length?null:(0,d.jsx)(z,{text:"No announcements yet."})]})]}),(0,d.jsxs)("article",{className:"sd-card",children:[(0,d.jsxs)("header",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Schedule"}),(0,d.jsx)("h2",{children:"Upcoming"})]}),(0,d.jsx)("button",{type:"button",onClick:()=>W("calendar"),children:"Calendar"})]}),(0,d.jsxs)("div",{className:"sd-list",children:[V.map((a,b)=>(0,d.jsxs)("button",{type:"button",className:"sd-row",onClick:()=>W("calendar"),children:[(0,d.jsx)("span",{children:"\uD83D\uDDD3️"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:q(a.title||a.name,"School event")}),(0,d.jsx)("small",{children:function(a){if(!a)return"Not set";let b=new Date(a);return Number.isFinite(b.getTime())?new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric"}).format(b):"Not set"}(a.startAt||a.date)})]})]},o(s(a))||b)),V.length?null:(0,d.jsx)(z,{text:"Nothing upcoming."})]})]})]})]})}function z({text:a}){return(0,d.jsx)("div",{className:"sd-empty",children:a})}function A({primary:a,title:b}){return(0,d.jsxs)("main",{className:"sd-page",style:{"--sd-primary":a},children:[(0,d.jsx)("style",{children:B}),(0,d.jsxs)("section",{className:"sd-state",children:[(0,d.jsx)("div",{className:"sd-spinner"}),(0,d.jsx)("h2",{children:b})]})]})}let B=`
@keyframes sdSpin {
  to { transform: rotate(360deg); }
}

.sd-page {
  width: 100%;
  height: auto !important;
  min-height: 0 !important;
  overflow: visible !important;
  padding: 8px 8px calc(76px + env(safe-area-inset-bottom,0px));
  background: var(--bg,#f7f8fb);
  color: var(--text,#111827);
}

.sd-page,
.sd-page * {
  box-sizing: border-box;
  min-width: 0;
}

.sd-page button {
  font: inherit;
  cursor: pointer;
}

.sd-hero {
  position: relative;
  height: clamp(290px,47vw,390px);
  overflow: hidden;
  border-radius: 25px;
  background: #0f172a;
  box-shadow: 0 14px 34px rgba(15,23,42,.08);
}

.sd-hero img,
.sd-hero video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.sd-dots {
  position: absolute;
  left: 50%;
  bottom: 11px;
  display: flex;
  gap: 6px;
  transform: translateX(-50%);
}

.sd-dots button {
  width: 7px;
  height: 7px;
  padding: 0;
  border: 0;
  border-radius: 99px;
  background: rgba(255,255,255,.5);
}

.sd-dots button.active {
  width: 20px;
  background: #fff;
}

.sd-metrics,
.sd-grid {
  display: grid;
  gap: 9px;
  margin-top: 9px;
}

.sd-metrics {
  grid-template-columns: repeat(2,minmax(0,1fr));
}

.sd-metrics button,
.sd-card {
  border: 1px solid var(--border,rgba(15,23,42,.09));
  background: var(--card-bg,var(--surface,#fff));
  color: inherit;
  box-shadow: 0 8px 22px rgba(15,23,42,.045);
}

.sd-metrics button {
  min-height: 92px;
  padding: 12px;
  border-radius: 20px;
  text-align: left;
}

.sd-metrics span,
.sd-metrics strong,
.sd-metrics small {
  display: block;
}

.sd-metrics span {
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
}

.sd-metrics strong {
  margin-top: 5px;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -.05em;
}

.sd-metrics small {
  margin-top: 5px;
  color: var(--muted,#64748b);
  font-size: 10px;
}

.sd-card {
  padding: 13px;
  border-radius: 22px;
}

.sd-card header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}

.sd-card header span {
  color: var(--muted,#64748b);
  font-size: 9px;
  font-weight: 900;
  letter-spacing: .09em;
  text-transform: uppercase;
}

.sd-card h2 {
  margin: 2px 0 0;
  font-size: 16px;
}

.sd-card header button {
  border: 0;
  border-radius: 999px;
  padding: 6px 9px;
  background: color-mix(in srgb,var(--sd-primary) 9%,transparent);
  color: var(--sd-primary);
  font-size: 10px;
  font-weight: 900;
}

.sd-work-grid {
  display: grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
  gap: 7px;
}

.sd-work-grid button {
  min-height: 74px;
  border: 0;
  border-radius: 16px;
  background: color-mix(in srgb,var(--muted,#64748b) 6%,transparent);
  color: inherit;
}

.sd-work-grid strong,
.sd-work-grid span {
  display: block;
}

.sd-work-grid strong {
  font-size: 22px;
}

.sd-work-grid span {
  margin-top: 3px;
  color: var(--muted,#64748b);
  font-size: 9px;
  font-weight: 850;
}

.sd-balance {
  display: block;
  font-size: 28px;
  letter-spacing: -.05em;
}

.sd-muted {
  margin: 5px 0 0;
  color: var(--muted,#64748b);
  font-size: 10px;
}

.sd-list {
  display: grid;
  gap: 6px;
}

.sd-row {
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

.sd-row > span {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background: color-mix(in srgb,var(--sd-primary) 10%,transparent);
}

.sd-row strong,
.sd-row small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sd-row strong {
  font-size: 12px;
}

.sd-row small {
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 10px;
}

.sd-empty {
  padding: 18px 8px;
  text-align: center;
  color: var(--muted,#64748b);
  font-size: 11px;
}

.sd-state {
  min-height: 280px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
}

.sd-spinner {
  width: 36px;
  height: 36px;
  border: 4px solid color-mix(in srgb,var(--sd-primary) 16%,transparent);
  border-top-color: var(--sd-primary);
  border-radius: 999px;
  animation: sdSpin .8s linear infinite;
}

.sd-state h2 {
  margin: 0;
  font-size: 17px;
}

.sd-page,
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
  .sd-page {
    padding: 12px 12px 24px;
  }

  .sd-grid {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }

  .sd-hero {
    height: 370px;
  }
}

@media (min-width:1100px) {
  .sd-page {
    max-width: 1180px;
    margin: 0 auto;
  }
}
`;var C=c(28505),D=c(18169),E=c(99867),F=c(69417),G=c(71888),H=c(47911),I=c(96157);let J=D.A;function K(a){return a?.reportType==="student_report"||!a?.reportType}let L="student-report-print-zone",M=String(C.$S.STUDENTS||"students"),N=String(C.$S.SCHOOLS||"schools"),O=String(C.$S.BRANCHES||"branches"),P=String(C.$S.SCHOOL_BRANCH_SETTINGS||C.$S.SCHOOL_BRANCHES_SETTINGS||"schoolBranchSettings"),Q=String(C.Vq.PHOTO||"photo"),R=String(C.Vq.LOGO||"logo");function S(a,b,c){let d;return!a||c&&a&&Object.prototype.hasOwnProperty.call(a,c)&&!T(a[c])?"":!(d=String(a[b]||""))||d.startsWith("blob:")||d.startsWith("data:image/")?"":d}function T(a){if(null==a)return"";let b=String(a).trim();return b&&"0"!==b&&"undefined"!==b&&"null"!==b?b:""}String(C.Vq.BANNER||"bannerImage");function U(...a){for(let b of a){let a=T(b);if(a)return a}return""}function V(a,b){let c=T(b);return c?a.find(a=>T(a.id)===c)?.name||"Not found":"Not selected"}function W({primary:a,title:b,text:c}){return(0,d.jsxs)("main",{className:"ba-page",style:{"--ba-primary":a,"--primary-color":a},children:[(0,d.jsx)("style",{children:_}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("div",{className:"ba-spinner"}),(0,d.jsx)("h2",{children:b}),(0,d.jsx)("p",{children:c})]})]})}function X({icon:a,title:b,text:c}){return(0,d.jsxs)("section",{className:"ba-empty",children:[(0,d.jsx)("div",{className:"ba-empty-icon",children:a}),(0,d.jsx)("h3",{children:b}),(0,d.jsx)("p",{children:c})]})}function Y(){return(0,d.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,d.jsx)("path",{d:"M4 7h9"}),(0,d.jsx)("path",{d:"M17 7h3"}),(0,d.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,d.jsx)("path",{d:"M4 17h3"}),(0,d.jsx)("path",{d:"M11 17h9"}),(0,d.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function Z({mode:a,filters:b,academicStructures:c,academicPeriods:e,filteredClasses:f,filteredClassSubjects:g,filteredStudents:h,setMode:i,setFilters:j,onClose:k}){return(0,d.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Filters"}),(0,d.jsx)("p",{children:"Choose the academic period or subject. Your student profile stays locked to the assigned branch."})]}),(0,d.jsx)("button",{type:"button",onClick:k,"aria-label":"Close filters",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-form compact",children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Report Mode"}),(0,d.jsx)("select",{value:a,onChange:a=>i(a.target.value),children:(0,d.jsx)("option",{value:"student-report",children:"My Report"})})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Structure"}),(0,d.jsxs)("select",{value:b.academicStructureId||"",onChange:a=>j(b=>({...b,academicStructureId:T(a.target.value)||void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select structure"}),c.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Period"}),(0,d.jsxs)("select",{value:b.academicPeriodId||"",onChange:a=>j(b=>({...b,academicPeriodId:T(a.target.value)||void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select period"}),e.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class"}),(0,d.jsxs)("select",{value:b.classId||"",onChange:a=>j(b=>({...b,classId:T(a.target.value)||void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select class"}),f.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class Subject"}),(0,d.jsxs)("select",{value:b.classSubjectId||"",onChange:a=>j(b=>({...b,classSubjectId:T(a.target.value)||void 0})),children:[(0,d.jsx)("option",{value:"",children:"All subjects"}),g.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name||`Subject ${a.subjectId||""}`},a.id))]})]}),"student-report"===a&&(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Student"}),(0,d.jsx)("select",{value:b.studentId||"",disabled:!0,children:h.map(a=>(0,d.jsx)("option",{value:a.id,children:a.fullName||a.name||"Student"},a.id))})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Sort Mode"}),(0,d.jsxs)("select",{value:b.sortMode||"position",onChange:a=>j(b=>({...b,sortMode:a.target.value})),children:[(0,d.jsx)("option",{value:"position",children:"Position"}),(0,d.jsx)("option",{value:"name",children:"Name"}),(0,d.jsx)("option",{value:"score",children:"Score"})]})]})]}),(0,d.jsxs)("div",{className:"ba-sheet-actions",children:[(0,d.jsx)("button",{type:"button",onClick:()=>j(a=>({...a,academicStructureId:void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"})),children:"Clear"}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:k,children:"Apply"})]})]})})}function $({onRefresh:a,onPrint:b,onClose:c}){return(0,d.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet small",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"More"}),(0,d.jsx)("p",{children:"Quick report actions only."})]}),(0,d.jsx)("button",{type:"button",onClick:c,"aria-label":"Close menu",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-menu-list",children:[(0,d.jsxs)("button",{type:"button",onClick:b,children:[(0,d.jsx)("span",{children:"⎙"}),(0,d.jsx)("b",{children:"Print report"}),(0,d.jsx)("small",{children:"Print the current preview output"})]}),(0,d.jsxs)("button",{type:"button",onClick:a,children:[(0,d.jsx)("span",{children:"↻"}),(0,d.jsx)("b",{children:"Refresh"}),(0,d.jsx)("small",{children:"Reload local branch report records"})]})]})]})})}let _=`
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

/* Student My Report golden additions */

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

`;var aa=c(15096),ab=c(51069),ac=c(90490),ad=c(63607),ae=c(41490),af=c(96747),ag=c(66169),ah=c(55264),ai=c(26277);function aj(a,b,c){let d=String(a.code||a.templateCode||a.layoutKey||a.key||"").trim();return{name:a.name||a.templateName||("cumulative_transcript"===c?"Cumulative Transcript Classic":"Classic Formal"),code:d||("cumulative_transcript"===c?"cumulative_transcript_classic":"classic_formal"),templateCode:d||("cumulative_transcript"===c?"cumulative_transcript_classic":"classic_formal"),layoutKey:a.layoutKey||d||("cumulative_transcript"===c?"cumulative_transcript_classic":"classic_formal"),templateKey:a.templateKey||a.layoutKey||d,reportType:c,orientation:a.orientation||"portrait",paperSize:a.paperSize||"A4",density:a.density||"compact",description:a.description||"Built-in report template.",active:!1!==a.active,isDefault:!0===a.isDefault||0===b}}function ak(a){let b=String(a.reportType||"student_report").trim(),c=String(a.code||a.templateCode||a.layoutKey||a.templateKey||a.name||a.id||"").trim();return`${b}:${c}`}let al=String(C.$S.SCHOOLS||"schools"),am=String(C.$S.BRANCHES||"branches"),an=String(C.$S.SCHOOL_BRANCH_SETTINGS||C.$S.SCHOOL_BRANCHES_SETTINGS||"schoolBranchSettings"),ao=String(C.$S.STUDENTS||"students"),ap=String(C.Vq.LOGO||"logo"),aq=String(C.Vq.PHOTO||"photo");function ar(a,b,c){let d;return!a||c&&a&&Object.prototype.hasOwnProperty.call(a,c)&&!ax(a[c])?"":!(d=String(a[b]||""))||d.startsWith("blob:")||d.startsWith("data:image/")?"":d}function as(...a){for(let b of a){let a=String(b||"").trim();if(a)return a}return""}let at=(a,b=1)=>null==a||Number.isNaN(a)?"0":Number(a).toFixed(b),au=a=>"up"===a?"Improving":"down"===a?"Declining":"stable"===a?"Stable":"-",av={"student-transcript":"Cumulative Transcript","cumulative-book":"Cumulative Report Book","multi-period-report":"Multi-Period Report","annual-broadsheet":"Annual Broadsheet","subject-history":"Subject History","promotion-summary":"Promotion Summary","progression-timeline":"Progression Timeline"};function aw(a,b){if(!b)return"Not selected";let c=a.find(a=>a.id===b);return c?.name||c?.fullName||"Not found"}function ax(a){return null==a?"":String(a).trim()}function ay(a,b){let c=ax(a),d=ax(b);return!!c&&!!d&&c===d}function az(...a){for(let b of a){let a=ax(b);if(a)return a}return""}function aA(a,b){return!b||!a||a===b}function aB(a){return!a.isDeleted&&!1!==a.active&&"withdrawn"!==a.status}function aC(a){return String(a?.code||a?.templateCode||a?.layoutKey||a?.templateKey||"").trim()}function aD(a){return String(a?.reportType||"student_report").trim()}function aE(a){return!a.isDeleted&&!1!==a.active}function aF(a,b,c,d){return aA(a.accountId,b)&&(!a.schoolId||ay(a.schoolId,c))&&(!a.branchId||ay(a.branchId,d))&&!a.isDeleted}function aG(a,b){let c=a.filter(a=>aE(a)&&aD(a)===b);return c.find(a=>a.isDefault)||c[0]}function aH(a,b,c){let d=a.filter(a=>!!aE(a)&&aD(a)===b&&(!a.scopeType||"branch"===a.scopeType)&&(!a.scopeId||!c||!!ay(a.scopeId,c)));return d.find(a=>a.isDefault)||d[0]}function aI(a,b){if(!b)return;let c=ax(b.templateId),d=aC(b);return a.find(a=>c&&ax(a.id)===c&&aE(a))||a.find(a=>d&&aC(a)===d&&aE(a))}function aJ(a,b,c,d){let e=ax(b?.templateSettingsId),f=ax(c?.id||b?.templateId),g=aC(c)||aC(b);return a.find(a=>e&&ax(a.id)===e&&aE(a))||a.find(a=>f&&ax(a.templateId)===f&&aE(a))||a.find(a=>g&&aC(a)===g&&(!d||aD(a)===d)&&aE(a))}function aK({primary:a,title:b,text:c}){return(0,d.jsxs)("main",{className:"ba-page cumulative-page",style:{"--ba-primary":a},children:[(0,d.jsx)("style",{children:aP}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("div",{className:"ba-spinner"}),(0,d.jsx)("h2",{children:b}),(0,d.jsx)("p",{children:c})]})]})}function aL(){return(0,d.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,d.jsx)("path",{d:"M4 7h9"}),(0,d.jsx)("path",{d:"M17 7h3"}),(0,d.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,d.jsx)("path",{d:"M4 17h3"}),(0,d.jsx)("path",{d:"M11 17h9"}),(0,d.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function aM({filters:a,setBranchLockedFilters:b,academicStructures:c,academicPeriods:e,classes:f,students:g,subjects:h,onClose:i}){let j=e.filter(b=>!a.academicStructureId||b.academicStructureId===a.academicStructureId),k=g.filter(b=>!a.classId||b.currentClassId===a.classId);return(0,d.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Filters"}),(0,d.jsx)("p",{children:"Choose the historical period, subject, or record type. Your student profile stays locked."})]}),(0,d.jsx)("button",{type:"button",onClick:i,"aria-label":"Close filters",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-form compact",children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Structure"}),(0,d.jsxs)("select",{value:a.academicStructureId||"",onChange:a=>b(b=>({...b,academicStructureId:ax(a.target.value)||void 0,academicPeriodId:void 0,fromAcademicPeriodId:void 0,toAcademicPeriodId:void 0,classId:void 0,subjectId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"All structures"}),c.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Period"}),(0,d.jsxs)("select",{value:a.academicPeriodId||"",onChange:a=>b(b=>({...b,academicPeriodId:ax(a.target.value)||void 0,classId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"All periods"}),j.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"From Period"}),(0,d.jsxs)("select",{value:a.fromAcademicPeriodId||"",onChange:a=>b(b=>({...b,fromAcademicPeriodId:ax(a.target.value)||void 0})),children:[(0,d.jsx)("option",{value:"",children:"No start period"}),j.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"To Period"}),(0,d.jsxs)("select",{value:a.toAcademicPeriodId||"",onChange:a=>b(b=>({...b,toAcademicPeriodId:ax(a.target.value)||void 0})),children:[(0,d.jsx)("option",{value:"",children:"No end period"}),j.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class"}),(0,d.jsxs)("select",{value:a.classId||"",onChange:a=>b(b=>({...b,classId:ax(a.target.value)||void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"All classes"}),f.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Student"}),(0,d.jsx)("select",{value:a.studentId||"",disabled:!0,children:k.map(a=>(0,d.jsxs)("option",{value:a.id,children:[a.fullName,a.admissionNumber?` (${a.admissionNumber})`:""]},a.id))})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Subject"}),(0,d.jsxs)("select",{value:a.subjectId||"",onChange:a=>b(b=>({...b,subjectId:ax(a.target.value)||void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select subject"}),h.map(a=>(0,d.jsxs)("option",{value:a.id,children:[a.name,a.code?` (${a.code})`:""]},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Snapshot Type"}),(0,d.jsxs)("select",{value:a.snapshotType,onChange:a=>b(b=>({...b,snapshotType:a.target.value})),children:[(0,d.jsx)("option",{value:"all",children:"All snapshots"}),(0,d.jsx)("option",{value:"terminal",children:"Terminal snapshots"}),(0,d.jsx)("option",{value:"promotion",children:"Promotion snapshots"}),(0,d.jsx)("option",{value:"manual",children:"Manual snapshots"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Decision"}),(0,d.jsxs)("select",{value:a.decision||"all",onChange:a=>b(b=>({...b,decision:a.target.value})),children:[(0,d.jsx)("option",{value:"all",children:"All decisions"}),(0,d.jsx)("option",{value:"promote",children:"Promote"}),(0,d.jsx)("option",{value:"repeat",children:"Repeat"}),(0,d.jsx)("option",{value:"graduate",children:"Graduate"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Sort Mode"}),(0,d.jsxs)("select",{value:a.sortMode,onChange:a=>b(b=>({...b,sortMode:a.target.value})),children:[(0,d.jsx)("option",{value:"position",children:"Sort by position"}),(0,d.jsx)("option",{value:"alphabetical",children:"Sort alphabetically"}),(0,d.jsx)("option",{value:"average",children:"Sort by average"}),(0,d.jsx)("option",{value:"admission-number",children:"Sort by admission no."})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Grouping"}),(0,d.jsxs)("select",{value:a.groupingMode,onChange:a=>b(b=>({...b,groupingMode:a.target.value})),children:[(0,d.jsx)("option",{value:"academic-structure",children:"Academic structure"}),(0,d.jsx)("option",{value:"class",children:"Class"}),(0,d.jsx)("option",{value:"period",children:"Period"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Subject Aggregation"}),(0,d.jsxs)("select",{value:a.subjectAggregationMode,onChange:a=>b(b=>({...b,subjectAggregationMode:a.target.value})),children:[(0,d.jsx)("option",{value:"average",children:"Average"}),(0,d.jsx)("option",{value:"latest",children:"Latest score"}),(0,d.jsx)("option",{value:"best",children:"Best score"}),(0,d.jsx)("option",{value:"weighted-average",children:"Weighted average"})]})]})]}),(0,d.jsxs)("div",{className:"cumulative-toggle-grid",children:[(0,d.jsxs)("button",{type:"button",className:a.includeTerminalSnapshots?"active":"",onClick:()=>b(a=>({...a,includeTerminalSnapshots:!a.includeTerminalSnapshots})),children:["Terminal: ",a.includeTerminalSnapshots?"On":"Off"]}),(0,d.jsxs)("button",{type:"button",className:a.includePromotionRecords?"active":"",onClick:()=>b(a=>({...a,includePromotionRecords:!a.includePromotionRecords})),children:["Promotions: ",a.includePromotionRecords?"On":"Off"]}),(0,d.jsxs)("button",{type:"button",className:a.includeManualSnapshots?"active":"",onClick:()=>b(a=>({...a,includeManualSnapshots:!a.includeManualSnapshots})),children:["Manual: ",a.includeManualSnapshots?"On":"Off"]}),(0,d.jsxs)("button",{type:"button",className:a.includeDeletedSnapshots?"active":"",onClick:()=>b(a=>({...a,includeDeletedSnapshots:!a.includeDeletedSnapshots})),children:["Deleted: ",a.includeDeletedSnapshots?"On":"Off"]})]}),(0,d.jsxs)("div",{className:"ba-sheet-actions",children:[(0,d.jsx)("button",{type:"button",onClick:()=>b(b=>({...b,academicStructureId:void 0,academicPeriodId:void 0,fromAcademicPeriodId:void 0,toAcademicPeriodId:void 0,classId:void 0,studentId:a.studentId,subjectId:void 0,snapshotType:"all",decision:"all",sortMode:"position",groupingMode:"academic-structure",subjectAggregationMode:"average",includePromotionRecords:!0,includeManualSnapshots:!0,includeTerminalSnapshots:!0,includeDeletedSnapshots:!1})),children:"Clear"}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:i,children:"Apply"})]})]})})}function aN({mode:a,setMode:b,onRefresh:c,onPrint:e,onClose:f}){return(0,d.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet small",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"More"}),(0,d.jsx)("p",{children:"Choose output mode or run quick actions."})]}),(0,d.jsx)("button",{type:"button",onClick:f,"aria-label":"Close menu",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-menu-list",children:[[{mode:"student-transcript",icon:"\uD83D\uDCC4",label:"Cumulative Transcript",note:"Template-based academic transcript"},{mode:"cumulative-book",icon:"\uD83D\uDCD8",label:"Cumulative Report Book",note:"Covers plus period report cards"},{mode:"multi-period-report",icon:"\uD83D\uDCDA",label:"Multi-Period Report",note:"Student performance across periods"},{mode:"annual-broadsheet",icon:"☷",label:"Annual Broadsheet",note:"Class or school annual broadsheet"},{mode:"subject-history",icon:"\uD83D\uDCC8",label:"Subject History",note:"Longitudinal subject analytics"},{mode:"promotion-summary",icon:"\uD83C\uDF93",label:"Promotion Summary",note:"Promotion decision summary"},{mode:"progression-timeline",icon:"⏱",label:"Progression Timeline",note:"Student academic timeline"}].map(c=>(0,d.jsxs)("button",{type:"button",className:a===c.mode?"active":"",onClick:()=>b(c.mode),children:[(0,d.jsx)("span",{children:c.icon}),(0,d.jsx)("b",{children:c.label}),(0,d.jsx)("small",{children:c.note})]},c.mode)),(0,d.jsxs)("button",{type:"button",onClick:e,children:[(0,d.jsx)("span",{children:"⎙"}),(0,d.jsx)("b",{children:"Print current view"}),(0,d.jsx)("small",{children:"Print the selected cumulative output"})]}),(0,d.jsxs)("button",{type:"button",onClick:c,children:[(0,d.jsx)("span",{children:"↻"}),(0,d.jsx)("b",{children:"Refresh"}),(0,d.jsx)("small",{children:"Reload my cumulative records"})]})]})]})})}function aO({primary:a,schoolName:b,label:c}){return(0,d.jsxs)("div",{style:{marginTop:10,borderTop:`2px solid ${a}`,paddingTop:5,display:"flex",justifyContent:"space-between",fontSize:8.5,color:"#555"},children:[(0,d.jsxs)("span",{children:[c," generated for ",b]}),(0,d.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})}let aP=`
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

.ba-output-switch {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px;
  border-radius: 999px;
  background: var(--card-bg, #fff);
  border: 1px solid color-mix(in srgb, var(--ba-primary) 32%, rgba(148, 163, 184, .28));
  box-shadow: inset 0 1px 0 rgba(255,255,255,.35), 0 6px 16px rgba(15,23,42,.06);
}

.ba-output-switch button {
  min-height: 30px;
  padding: 0 12px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--ba-primary) 9%, var(--card-bg, #fff));
  color: var(--ba-primary);
  border: 1px solid color-mix(in srgb, var(--ba-primary) 22%, transparent);
  box-shadow: none;
  opacity: 1;
}

.ba-output-switch button:not(.active):hover {
  background: color-mix(in srgb, var(--ba-primary) 14%, var(--card-bg, #fff));
}

.ba-output-switch button.active {
  background: var(--ba-primary);
  color: #fff;
  border-color: var(--ba-primary);
  box-shadow: 0 6px 14px rgba(15,23,42,.14);
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



/* Cumulative Records golden compact additions */
.cumulative-page .ba-print-card{margin-top:8px;border-radius:22px}
.cumulative-page .ba-print-head{padding:8px 10px}
.cumulative-page .ba-print-head strong{font-size:14px}
.cumulative-page .ba-print-head p{font-size:11px;margin-top:2px}
.cumulative-page .ba-print-zone{padding:8px;width:100%;max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}
#cumulative-report-print-zone{width:max-content;min-width:100%}
.cumulative-toggle-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:12px}
.cumulative-toggle-grid button{min-height:36px;border:1px solid var(--border,rgba(0,0,0,.10));border-radius:999px;padding:0 10px;background:color-mix(in srgb,var(--muted,#64748b) 8%,var(--card-bg,#fff));color:var(--text,#111827);font-size:11px;font-weight:950;cursor:pointer}
.cumulative-toggle-grid button.active{background:color-mix(in srgb,var(--ba-primary) 10%,var(--card-bg,#fff));border-color:color-mix(in srgb,var(--ba-primary) 34%,var(--border,rgba(0,0,0,.10)));color:var(--ba-primary)}
.cr-print-empty{padding:20px;border:1px dashed #bbb;border-radius:12px;text-align:center;font-weight:700}
.cr-print-summary-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-bottom:10px;font-size:10px}
.cr-print-summary-grid.six{grid-template-columns:repeat(6,minmax(0,1fr))}
.cr-print-summary-grid div{border:1px solid #ccc;padding:7px}
@media(max-width:520px){.cumulative-toggle-grid{grid-template-columns:minmax(0,1fr)}.ba-output-switch{width:100%;justify-content:center}.ba-output-switch button{flex:1}.cumulative-page .ba-report-toolbar{width:100%;justify-content:stretch}}
@media print{.report-no-print,.ba-search-card,.ba-filter-chips,.ba-sheet-backdrop,.ba-modal-backdrop,.ba-print-head,.ba-report-toolbar{display:none!important}.ba-page,.ba-print-card,.ba-print-zone,.report-screen-scroll,#cumulative-report-print-zone{padding:0!important;margin:0!important;background:#fff!important;box-shadow:none!important;border:0!important;border-radius:0!important;overflow:visible!important}}

`,aQ=[{title:"My Learning",defaultOpen:!0,items:[{key:"studentDashboard",label:"Dashboard",icon:"\uD83C\uDFE0"},{key:"myAttendance",label:"Attendance",icon:"\uD83D\uDCC5"}]},{title:"My Records",defaultOpen:!1,items:[{key:"myReport",label:"Report Card",icon:"\uD83D\uDCCA"},{key:"myCumulativeRecords",label:"Cumulative Records",icon:"\uD83D\uDCD1"}]},{title:"My Finances",defaultOpen:!1,items:[{key:"studentPayments",label:"Fee Payments",icon:"\uD83D\uDCB3"}]}],aR={studentDashboard:function({navigate:a}){return(0,d.jsx)(y,{navigate:a,navSections:aQ})},myCumulativeRecords:function(){var a,b;let c,e;(0,H.p)();let f=(0,h.useRouter)(),{accountId:n,authenticated:o,loading:p}=(0,i.F)(),{settings:q,loading:r}=(0,j.t)(),{activeSchool:s,activeSchoolId:t,activeBranch:u,activeBranchId:v,loading:w}=(0,k.c)(),{activeMembership:x}=(0,l.A)(),y=(0,g.useMemo)(()=>null,[]),z=(0,g.useMemo)(()=>y?.membership||x||{},[x,y?.membership]),A=az(z?.studentId,z?.studentLocalId,z?.student?.id,y?.studentId,null),B="student"===String(z?.role||y?.role||"").toLowerCase(),D=q?.primaryColor||"var(--primary-color, #2563eb)",E=ax(q?.currentAcademicStructureId)||void 0,F=(a={openWorkspace:y,activeMembership:x,activeSchoolId:t,activeSchool:s,settings:q},c=a.openWorkspace?.membership||a.activeMembership||null,az(a.openWorkspace?.schoolId,c?.schoolId,c?.school?.id,a.activeSchoolId,a.activeSchool?.id,a.settings?.schoolId,null)),G=(b={openWorkspace:y,activeMembership:x,activeBranchId:v,activeBranch:u,settings:q},e=b.openWorkspace?.membership||b.activeMembership||null,az(b.openWorkspace?.branchId,e?.branchId,e?.schoolBranchId,e?.branch?.id,b.activeBranchId,b.activeBranch?.id,b.settings?.branchId,null)),{loading:J,setLoading:K}=(0,I.J)(),[L,M]=(0,g.useState)(""),[N,O]=(0,g.useState)(!1),[P,Q]=(0,g.useState)(!1),[R,S]=(0,g.useState)({branchId:G||"",academicStructureId:E,academicPeriodId:void 0,fromAcademicPeriodId:void 0,toAcademicPeriodId:void 0,classId:void 0,studentId:void 0,subjectId:void 0,snapshotType:"all",decision:"all",mode:"student-transcript",sortMode:"position",groupingMode:"academic-structure",subjectAggregationMode:"average",includePromotionRecords:!0,includeManualSnapshots:!0,includeTerminalSnapshots:!0,includeDeletedSnapshots:!1}),[T,U]=(0,g.useState)([]),[V,W]=(0,g.useState)([]),[X,Y]=(0,g.useState)([]),[Z,$]=(0,g.useState)([]),[_,aC]=(0,g.useState)([]),[aD,aQ]=(0,g.useState)([]),[aR,aS]=(0,g.useState)([]),[aT,aU]=(0,g.useState)([]),[aV,aW]=(0,g.useState)([]),[aX,aY]=(0,g.useState)([]),[aZ,a$]=(0,g.useState)([]),[a_,a0]=(0,g.useState)([]),[a1,a2]=(0,g.useState)([]),[a3,a4]=(0,g.useState)([]),[a5,a6]=(0,g.useState)([]),[a7,a8]=(0,g.useState)([]),[a9,ba]=(0,g.useState)([]),bb=a=>aA(a.accountId,n)&&ay(a.schoolId,F)&&ay(a.branchId,G)&&!a.isDeleted,bc=a=>aA(a.accountId,n)&&(ay(a.schoolId,F)||ay(a.id,F))&&!a.isDeleted,bd=a=>aA(a.accountId,n)&&ay(a.schoolId,F)&&ay(a.id,G)&&!a.isDeleted,be=a=>aA(a.accountId,n)&&(!a.schoolId||ay(a.schoolId,F))&&(!a.branchId||ay(a.branchId,G))&&!a.isDeleted,bf=()=>{a9.forEach(C.hZ),ba([]),U([]),W([]),Y([]),$([]),aC([]),aQ([]),aS([]),aU([]),aW([]),aY([]),a$([]),a0([]),a2([]),a4([]),a6([]),a8([])},bg=async({ownerTable:a,ownerId:b,fieldKey:c,fallbackMediaId:d,nextUrls:e})=>{let f=ax(b);if(f){let b=await (0,C.cg)({accountId:n||void 0,ownerTable:a,ownerId:f,fieldKey:c});if(b?.id&&!b.isDeleted&&!1!==b.active){let a=await (0,C.fW)(String(b.id));if(a)return e.push(a),a}}let g=ax(d);if(!g)return"";let h=await m.db.mediaAssets?.get?.(g);if(!(h&&!h.isDeleted&&!1!==h.active&&(!n||h.accountId===n)&&h.ownerTable===a&&h.fieldKey===c&&(!f||String(h.ownerId||"")===String(f))))return"";let i=await (0,C.fW)(g);return i&&e.push(i),i||""},bh=async()=>{if(!o||!n||!F||!G||!B){bf(),K(!1);return}try{K(!0);let[a,b,c,d,e,f,g,h,i,j,k,l,o,p,q,r]=await Promise.all([m.db.schools.toArray(),m.db.branches.toArray(),m.db.schoolBranchSettings.toArray(),m.db.academicStructures.toArray(),m.db.academicPeriods.toArray(),m.db.students.toArray(),m.db.parents.toArray(),m.db.studentParents.toArray(),m.db.teachers.toArray(),m.db.classes.toArray(),m.db.subjects.toArray(),m.db.studentReportSnapshots.toArray(),m.db.studentPromotions.toArray(),m.db.reportCardTemplates?.toArray?.()||Promise.resolve([]),m.db.reportCardTemplateSettings?.toArray?.()||Promise.resolve([]),m.db.reportCardTemplateAssignments?.toArray?.()||Promise.resolve([])]),s=a.filter(bc),t=b.filter(bd),u=c.filter(a=>bb(a)||be(a)),v=[],w=await Promise.all(s.map(async a=>({...a,logo:await bg({ownerTable:al,ownerId:a.id,fieldKey:ap,fallbackMediaId:a.logoMediaId,nextUrls:v})||ar(a,"logo","logoMediaId")}))),x=await Promise.all(t.map(async a=>({...a,logo:await bg({ownerTable:am,ownerId:a.id,fieldKey:ap,fallbackMediaId:a.logoMediaId,nextUrls:v})||ar(a,"logo","logoMediaId")}))),y=await Promise.all(u.map(async a=>({...a,logo:await bg({ownerTable:an,ownerId:a.id,fieldKey:ap,fallbackMediaId:a.logoMediaId,nextUrls:v})||ar(a,"logo","logoMediaId")})));a9.forEach(a=>{v.includes(a)||(0,C.hZ)(a)}),ba(v);let B=await Promise.all(f.filter(a=>be(a)&&aB(a)).sort((a,b)=>a.fullName.localeCompare(b.fullName)).map(async a=>{let b=await bg({ownerTable:ao,ownerId:a.id,fieldKey:aq,fallbackMediaId:a.photoMediaId,nextUrls:v})||ar(a,"photo","photoMediaId");return{...a,photo:b,studentPhoto:b,resolvedStudentPhotoUrl:b}})),D=g.filter(a=>bb(a)||be(a)),E=h.filter(a=>bb(a)||be(a)),H=String(z?.email||z?.user?.email||"").trim().toLowerCase(),I=String(z?.phone||z?.user?.phone||"").replace(/\s+/g,""),J=B.find(a=>A&&ay(a.id,A))||B.find(a=>{let b=String(a.email||"").trim().toLowerCase(),c=String(a.phone||"").replace(/\s+/g,"");return H&&b===H||I&&c===I}),L=az(A,J?.id),M=new Set(L?[L]:[]),N=B.filter(a=>M.has(ax(a.id))),O=E.filter(a=>M.has(ax(a.studentId))),P=new Set(O.map(a=>ax(a.parentId)).filter(Boolean)),Q=D.filter(a=>P.has(ax(a.id)));U(w),W(x),Y(y),$(d.filter(a=>be(a)&&aB(a)).sort((a,b)=>a.name.localeCompare(b.name))),aC(e.filter(a=>be(a)&&aB(a)).sort((a,b)=>Number(a.order||0)-Number(b.order||0))),aQ(N),aS(Q),aU(O),aW(i.filter(a=>bb(a)||be(a))),aY(j.filter(a=>be(a)&&aB(a)).sort((a,b)=>a.name.localeCompare(b.name))),a$(k.filter(a=>be(a)&&aB(a)).sort((a,b)=>a.name.localeCompare(b.name))),a0(l.filter(a=>!!M.has(ax(a.studentId))&&(!!R.includeDeletedSnapshots||!a.isDeleted)&&!!aA(a.accountId,n)&&!!ay(a.schoolId,F)&&!!ay(a.branchId,G))),a2(o.filter(a=>!!M.has(ax(a.studentId))&&!a.isDeleted&&!!aA(a.accountId,n)&&(!a.schoolId||!!ay(a.schoolId,F))&&(!a.branchId||!!ay(a.branchId,G)))),S(a=>({...a,studentId:L||void 0}));let T=new Map;[...ac.yo.map((a,b)=>aj(a,b,"student_report")),...ad.wW.map((a,b)=>aj(a,b,"cumulative_transcript"))].forEach(a=>{let b=ak(a);b&&T.set(b,a)}),p.filter(a=>aF(a,n,F,G)&&aE(a)).forEach(a=>{let b={...a,reportType:a.reportType||"student_report",templateCode:a.templateCode||a.code||a.layoutKey,templateKey:a.templateKey||a.layoutKey||a.code},c=ak(b);c&&T.set(c,{...T.get(c)||{},...b})}),a4(Array.from(T.values()).sort((a,b)=>a.reportType!==b.reportType?String(a.reportType||"").localeCompare(String(b.reportType||"")):a.isDefault&&!b.isDefault?-1:!a.isDefault&&b.isDefault?1:String(a.name||"").localeCompare(String(b.name||"")))),a6(q.filter(a=>aF(a,n,F,G)&&aE(a))),a8(r.filter(a=>aF(a,n,F,G)&&aE(a)))}catch(a){console.error("Failed to load cumulative records:",a),bf(),alert("Failed to load cumulative records")}finally{K(!1)}},bi=(0,g.useMemo)(()=>{let a=V.find(a=>ay(a.id,G));return a?[a]:u?[u]:V},[u,V,G]);(0,g.useMemo)(()=>a_.filter(a=>(!!R.includeDeletedSnapshots||!a.isDeleted)&&(!G||!!ay(a.branchId,G))&&(!F||!!ay(a.schoolId,F))&&(!n||a.accountId===n)),[a_,G,F,n,R.includeDeletedSnapshots]);let bj=(0,g.useMemo)(()=>({schools:T.length?T:s?[s]:[],branches:bi,schoolBranchSettings:X,academicStructures:Z,academicPeriods:_,students:aD,parents:aR,studentParents:aT,teachers:aV,classes:aX,subjects:aZ,studentReportSnapshots:a_,studentPromotions:a1}),[T,s,bi,X,Z,_,aD,aR,aT,aV,aX,aZ,a_,a1]),bk=(0,g.useMemo)(()=>(0,ai.DB)(bj,R),[bj,R]),bl=(0,g.useMemo)(()=>V.find(a=>ax(a.id)===ax(G))||bi.find(a=>ax(a.id)===ax(G))||(u&&ax(u.id)===ax(G)?u:void 0)||u||V[0]||bi[0]||bk.header.branch,[u,G,V,bi,bk.header.branch]),bm=(0,g.useMemo)(()=>(function(a,b){if(!a)return a;let c=a.header||{},d=c.branding||{},e=b?.name||b?.branchName||b?.campusName||c.branchName||c.branchLabel||c.branch?.name||d.branchName||"",f=b?.address||b?.branchAddress||c.branchAddress||d.branchAddress||"";return{...a,header:{...c,branch:b||c.branch,branchId:b?.id||c.branchId,branchName:e,branchLabel:e,campusName:e,branchAddress:f,branding:{...d,branchName:d.branchName||e,branchLabel:d.branchLabel||e,campusName:d.campusName||e,branchAddress:d.branchAddress||f,resolvedLogoUrl:d.resolvedLogoUrl||d.logo||c.schoolBranchSetting?.logo||c.branch?.logo||c.school?.logo||"",logo:d.logo||d.resolvedLogoUrl||c.schoolBranchSetting?.logo||c.branch?.logo||c.school?.logo||"",primaryColor:d.primaryColor||"var(--ba-primary, var(--primary-color, #2563eb))"}}}})(bk,bl),[bk,bl]),bn=(0,g.useMemo)(()=>aD.find(a=>ay(a.id,R.studentId)),[aD,R.studentId]),bo={width:"297mm",minHeight:"210mm",margin:"0 auto 20px",padding:"10mm",boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:bm.header.branding.fontFamily||"Arial, sans-serif",border:"1px solid #e5e5e5"},bp={width:"100%",borderCollapse:"collapse",fontSize:9},bq={border:"1px solid #222",padding:5,background:D,color:"#fff",textAlign:"center",fontWeight:800},br={border:"1px solid #222",padding:5,verticalAlign:"middle"},bs=(0,g.useMemo)(()=>{let a=aH(a7,"cumulative_book",G),b=aH(a7,"student_report",G);return aI(a3,a)||aI(a3,b)||aG(a3,"student_report")||{name:"Classic Formal",code:"classic_formal",layoutKey:"classic_formal",templateKey:"classic_formal",reportType:"student_report",paperSize:"A4",orientation:"portrait",density:"compact",active:!0,isDefault:!0}},[a7,a3,G]),bt=(0,g.useMemo)(()=>{var a;let b=aH(a7,"cumulative_book",G),c=aH(a7,"student_report",G),d=aJ(a5,b,bs,"cumulative_book"),e=aJ(a5,c,bs,"student_report");return{...(a=d||e)||{},reportType:"cumulative_book",showBookFrontCover:a?.showBookFrontCover??!0,showBookStudentProfilePage:a?.showBookStudentProfilePage??!0,showBookAcademicJourneyPage:a?.showBookAcademicJourneyPage??!0,showBookSummaryPage:a?.showBookSummaryPage??!0,showBookBackCover:a?.showBookBackCover??!0,bookTitleLabel:a?.bookTitleLabel||"Cumulative Academic Report Book",bookSubtitleLabel:a?.bookSubtitleLabel||"Complete Academic Journey",showGeneratedDate:a?.showGeneratedDate??!0,generatedDateLabel:a?.generatedDateLabel||"Generated"}},[a7,a5,bs,G]),bu=(0,g.useMemo)(()=>aI(a3,aH(a7,"cumulative_transcript",G))||aG(a3,"cumulative_transcript")||{name:"Cumulative Transcript Classic",code:"cumulative_transcript_classic",layoutKey:"cumulative_transcript_classic",templateKey:"cumulative_transcript_classic",reportType:"cumulative_transcript",paperSize:"A4",orientation:"portrait",density:"compact",active:!0,isDefault:!0},[a7,a3,G]),bv=(0,g.useMemo)(()=>aJ(a5,aH(a7,"cumulative_transcript",G),bu,"cumulative_transcript")||{templateCode:"cumulative_transcript_classic",layoutKey:"cumulative_transcript_classic",templateKey:"cumulative_transcript_classic",templateName:"Cumulative Transcript Classic",reportType:"cumulative_transcript",paperSize:"A4",orientation:"portrait",density:"compact",showAdmissionNumber:!0,showGender:!0,showClass:!0,showAcademicStructure:!0,showAcademicPeriod:!0,showBranch:!0,showTranscriptTermBreakdown:!0,showTranscriptYearAverage:!0,showTranscriptCumulativeAverage:!0,showTranscriptCumulativePosition:!0,showTranscriptGPAProgression:!0,showTranscriptFinalRecommendation:!0,showGeneratedDate:!0,studentNameLabel:"Student",admissionNumberLabel:"Student ID",classLabel:"Programme / Class",academicPeriodLabel:"Academic Period",subjectLabel:"Course / Subject",averageLabel:"Average",gradeLabel:"Grade",gpaLabel:"GPA",generatedDateLabel:"Date Generated",footerText:"Official cumulative academic transcript generated by Eleeveon Schools."},[a7,a5,bu,G]),bw=(0,g.useMemo)(()=>bm.studentTranscript?bm.studentTranscript:R.studentId?(0,ai.Wy)(bj,{...R,mode:"student-transcript"},R.studentId):void 0,[bj,R,bm.studentTranscript]),bx=(0,g.useMemo)(()=>{let a=bm.cumulativeTranscriptDataset;return a?.transcript&&a?.student?a:{...a||{},header:bm.header,transcript:bw,generatedAt:a?.generatedAt||new Date().toISOString(),student:bw?{studentId:bw.studentId,studentName:bw.studentName,admissionNumber:bw.admissionNumber,gender:bw.gender,currentClassName:bw.currentClassName,studentPhoto:bw.studentPhoto,parentName:bw.parentName,guardianName:bw.guardianName}:void 0,summary:bw?{totalPeriods:bw.totalPeriods,totalSubjects:bw.totalSubjects,cumulativeTotal:bw.cumulativeTotal,cumulativeAverage:bw.cumulativeAverage,cumulativeGPA:bw.cumulativeGPA,cumulativePosition:bw.latestPosition,highestAverage:bw.highestAverage,lowestAverage:bw.lowestAverage,latestAverage:bw.latestAverage,latestPosition:bw.latestPosition,latestDecision:bw.latestDecision,overallTrend:bw.overallTrend}:void 0}},[bm,bw]),by=(0,g.useMemo)(()=>{let a=a_.filter(a=>(!!R.includeDeletedSnapshots||!a.isDeleted)&&(!F||!!ay(a.schoolId,F))&&(!G||!!ay(a.branchId,G))&&(!R.academicStructureId||!!ay(a.academicStructureId,R.academicStructureId))&&(!R.academicPeriodId||!!ay(a.academicPeriodId,R.academicPeriodId))&&(!R.classId||!!ay(a.classId,R.classId))&&(!R.studentId||!!ay(a.studentId,R.studentId))&&("all"===R.snapshotType||a.snapshotType===R.snapshotType)&&("manual"!==a.snapshotType||!1!==R.includeManualSnapshots)&&("terminal"!==a.snapshotType||!1!==R.includeTerminalSnapshots)&&("promotion"!==a.snapshotType||!1!==R.includePromotionRecords)&&!0).sort((a,b)=>{let c=String(a.academicYear||"").localeCompare(String(b.academicYear||""));return 0!==c?c:String(a.academicPeriodId||"").localeCompare(String(b.academicPeriodId||""))}).map(a=>{var b;let c,d,e,f,g,h,i,j,k,l,m,n,o=_.find(b=>ay(b.id,a.academicPeriodId)),p=aD.find(b=>ay(b.id,a.studentId)),q=(b=bm.header,d=(c=a.reportData||{}).dataset||c.reportCardDataset||c.studentReportDataset||c,e=d?.report||d||{},f=d?.header||{},g=b||{},h=f?.branding||{},j=as((i=g?.branding||{}).logo,i.resolvedLogoUrl,g.schoolBranchSetting?.logo,g.branch?.logo,g.school?.logo,h.logo,h.resolvedLogoUrl,f.schoolBranchSetting?.logo,f.branch?.logo,f.school?.logo),k=as(i.reportCardBackgroundImage,g.schoolBranchSetting?.reportCardBackgroundImage,h.reportCardBackgroundImage,f.schoolBranchSetting?.reportCardBackgroundImage),l=as(i.reportCardWatermark,g.schoolBranchSetting?.reportCardWatermark,h.reportCardWatermark,f.schoolBranchSetting?.reportCardWatermark,j),m=as(i.reportCardSignatureImage,g.schoolBranchSetting?.reportCardSignatureImage,h.reportCardSignatureImage,f.schoolBranchSetting?.reportCardSignatureImage),n=as(p?.resolvedStudentPhotoUrl,p?.photo,p?.studentPhoto,d?.studentInfo?.studentPhoto,d?.studentInfo?.photo,d?.student?.resolvedStudentPhotoUrl,d?.student?.studentPhoto,d?.student?.photo,e?.resolvedStudentPhotoUrl,e?.studentPhoto),{...d,generatedAt:d?.generatedAt||a.createdAt||new Date().toISOString(),header:{...g,...f,school:g.school||f.school,branch:g.branch||f.branch,schoolBranchSetting:g.schoolBranchSetting||f.schoolBranchSetting,branding:{...h,...i,logo:j,resolvedLogoUrl:j,reportCardBackgroundImage:k,reportCardWatermark:l,reportCardSignatureImage:m}},branding:{...d?.branding||{},...i,logo:j,resolvedLogoUrl:j,reportCardBackgroundImage:k,reportCardWatermark:l,reportCardSignatureImage:m},report:{...e,studentId:e?.studentId||a.studentId,studentPhoto:n,resolvedStudentPhotoUrl:n},student:{...p||{},...d?.student||{},id:d?.student?.id||p?.id||a.studentId,name:d?.student?.name||d?.student?.fullName||p?.fullName||e?.studentName,fullName:d?.student?.fullName||d?.student?.name||p?.fullName||e?.studentName,admissionNumber:d?.student?.admissionNumber||p?.admissionNumber||e?.admissionNumber,gender:d?.student?.gender||p?.gender||e?.gender,photo:n,studentPhoto:n,resolvedStudentPhotoUrl:n},studentInfo:{...d?.studentInfo||{},studentPhoto:n,photo:n}}),r=q?.report||{};return{id:a.id,academicPeriodId:a.academicPeriodId,academicPeriodName:o?.name||a.term||q?.header?.academicPeriod?.name||"Academic Period",academicYear:a.academicYear,term:a.term,startDate:o?.startDate,endDate:o?.endDate,dataset:q,total:a.total??r.total,average:a.average??r.average,position:a.position??r.overallPosition??r.position,gpa:r.overallGPA??r.gpa,recommendation:a.recommendation}});return{generatedAt:new Date().toISOString(),title:bt.bookTitleLabel||"Cumulative Academic Report Book",subtitle:bt.bookSubtitleLabel||"Complete Academic Journey",header:bm.header,branding:bm.header.branding,student:{id:bw?.studentId||bn?.id,fullName:bw?.studentName||bn?.fullName,name:bw?.studentName||bn?.fullName,admissionNumber:bw?.admissionNumber||bn?.admissionNumber,gender:bw?.gender||bn?.gender,className:bw?.currentClassName,currentClassName:bw?.currentClassName,photo:bw?.studentPhoto||bn?.resolvedStudentPhotoUrl||bn?.photo||a[0]?.dataset?.studentInfo?.studentPhoto||a[0]?.dataset?.report?.studentPhoto,studentPhoto:bw?.studentPhoto||bn?.resolvedStudentPhotoUrl||bn?.photo||a[0]?.dataset?.studentInfo?.studentPhoto||a[0]?.dataset?.report?.studentPhoto,parentName:bw?.parentName||bn?.parentName,address:bn?.address,parentPhone:bn?.parentPhone,parentEmail:bn?.parentEmail},periods:a,summary:{totalPeriods:bw?.totalPeriods||a.length,cumulativeAverage:bw?.cumulativeAverage,cumulativeGPA:bw?.cumulativeGPA,bestAverage:bw?.highestAverage,latestAverage:bw?.latestAverage,latestPosition:bw?.latestPosition,finalRecommendation:bw?.latestDecision,trend:bw?.overallTrend},notes:bm.warnings}},[_,G,R,bm.header,bm.warnings,F,bn,bt,a_,bw]),bz=a=>{"function"==typeof a?S(b=>({...a(b),branchId:G||""})):S({...a,branchId:G||""})},bA=(0,g.useMemo)(()=>[R.academicStructureId,R.academicPeriodId,R.fromAcademicPeriodId,R.toAcademicPeriodId,R.classId,R.studentId,R.subjectId,"all"!==R.snapshotType?R.snapshotType:void 0,"all"!==R.decision?R.decision:void 0,"student-transcript"!==String(R.mode)?R.mode:void 0,"position"!==R.sortMode?R.sortMode:void 0,"academic-structure"!==R.groupingMode?R.groupingMode:void 0,"average"!==R.subjectAggregationMode?R.subjectAggregationMode:void 0,!R.includePromotionRecords?"promotion-off":void 0,!R.includeManualSnapshots?"manual-off":void 0,!R.includeTerminalSnapshots?"terminal-off":void 0,R.includeDeletedSnapshots?"deleted-on":void 0].filter(Boolean).length,[R]),bB=L.trim().toLowerCase(),bC=(0,g.useMemo)(()=>bB?aD.filter(a=>`${a.fullName||""} ${a.admissionNumber||""}`.toLowerCase().includes(bB)):aD,[aD,bB]),bD=(0,g.useMemo)(()=>{let a=new Set(a_.map(a=>ax(a.academicStructureId)).filter(Boolean)),b=Z.filter(b=>!b.isDeleted&&(!1!==b.active||a.has(ax(b.id))));return b.length?b:Array.from(a).map(a=>({id:a,name:`Academic Structure ${a}`,schoolId:F,branchId:G,accountId:n||void 0,active:!0}))},[Z,a_,F,G,n]),bE=(0,g.useMemo)(()=>{let a=new Set(a_.filter(a=>!R.academicStructureId||ay(a.academicStructureId,R.academicStructureId)).map(a=>ax(a.academicPeriodId)).filter(Boolean)),b=_.filter(b=>!b.isDeleted&&(!R.academicStructureId||!!ay(b.academicStructureId,R.academicStructureId))&&(!1!==b.active||a.has(ax(b.id)))).sort((a,b)=>Number(a.order||0)-Number(b.order||0));return b.length?b:Array.from(a).map((a,b)=>({id:a,name:`Academic Period ${a}`,schoolId:F,branchId:G,accountId:n||void 0,academicStructureId:R.academicStructureId||0,order:b+1,active:!0}))},[_,a_,R.academicStructureId,F,G,n]),bF=(0,g.useMemo)(()=>{let a=new Set(a_.filter(a=>(!R.academicStructureId||!!ay(a.academicStructureId,R.academicStructureId))&&(!R.academicPeriodId||!!ay(a.academicPeriodId,R.academicPeriodId))).map(a=>ax(a.classId)).filter(Boolean)),b=aX.filter(b=>!b.isDeleted&&(!1!==b.active||a.has(ax(b.id))));return b.length?b:Array.from(a).map(a=>({id:a,name:`Class ${a}`,schoolId:F,branchId:G,accountId:n||void 0,active:!0}))},[aX,a_,R.academicStructureId,R.academicPeriodId,F,G,n]),bG=(0,g.useMemo)(()=>{let a=new Set(a_.filter(a=>(!R.academicStructureId||!!ay(a.academicStructureId,R.academicStructureId))&&(!R.academicPeriodId||!!ay(a.academicPeriodId,R.academicPeriodId))&&(!R.classId||!!ay(a.classId,R.classId))).map(a=>ax(a.studentId)).filter(Boolean)),b=bC.filter(b=>!b.isDeleted&&("withdrawn"!==b.status||a.has(ax(b.id))));return b.length?b:Array.from(a).map(a=>({id:a,fullName:`Student ${a}`,schoolId:F,branchId:G,accountId:n||void 0,status:"active"}))},[bC,a_,R.academicStructureId,R.academicPeriodId,R.classId,F,G,n]),bH=(0,g.useMemo)(()=>{if(aZ.length)return aZ;let a=new Map;return a_.forEach(b=>{let c=b.reportData||{},d=c.report||c.studentReport||c.computedReport||c.computedStudentReport||c,e=d.subjectResults||d.subjects||d.reportItems||c.subjectResults||c.subjects||c.reportItems||[];Array.isArray(e)&&e.forEach(b=>{let c=ax(b.subjectId||b.id);!c||a.has(c)||a.set(c,{id:c,name:b.subjectName||b.name||b.title||b.shortName||`Subject ${c}`,code:b.subjectCode||b.code,schoolId:F,branchId:G,accountId:n||void 0,active:!0})})}),Array.from(a.values()).sort((a,b)=>a.name.localeCompare(b.name))},[aZ,a_,F,G,n]),bI=aw(bD,R.academicStructureId),bJ=aw(bE,R.academicPeriodId),bK=aw(bG,R.studentId),bL=aw(bF,R.classId),bM=aw(bH,R.subjectId),bN=av[R.mode]||R.mode.replaceAll("-"," "),bO=()=>{var a,b;let c,d,e;a="cumulative-report-print-zone",b="annual-broadsheet"===(c=R.mode)||"subject-history"===c||"promotion-summary"===c?"landscape":"portrait",(d=document.getElementById("cumulative-report-print-style"))&&d.remove(),(e=document.createElement("style")).id="cumulative-report-print-style",e.innerHTML=`
    @page {
      size: A4 ${b};
      margin: 10mm;
    }

    @media print {
      body {
        background: #ffffff !important;
      }

      body * {
        visibility: hidden !important;
      }

      #${a},
      #${a} * {
        visibility: visible !important;
      }

      #${a} {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background: #fff;
        overflow: visible !important;
      }

      .report-no-print {
        display: none !important;
      }

      .report-screen-scroll {
        overflow: visible !important;
      }

      .report-page-break {
        page-break-after: always;
      }

      .report-page-break:last-child {
        page-break-after: auto;
      }

      tr,
      td,
      th {
        page-break-inside: avoid !important;
      }
    }
  `,document.head.appendChild(e),setTimeout(()=>window.print(),120)};return p||w||r||J?(0,d.jsx)(aK,{primary:D,title:"Opening My Cumulative Records...",text:"Checking your historical reports, promotions and academic progression."}):o&&n?B?A||0!==aD.length?F&&G?(0,d.jsxs)("main",{className:"ba-page cumulative-page",style:{"--ba-primary":D},children:[(0,d.jsx)("style",{children:aP}),(0,d.jsxs)("section",{className:"ba-search-card report-no-print","aria-label":"My cumulative records search and actions",children:[(0,d.jsxs)("label",{className:"ba-search",children:[(0,d.jsx)("span",{children:"⌕"}),(0,d.jsx)("input",{value:L,onChange:a=>M(a.target.value),placeholder:"Search my cumulative records...","aria-label":"Search my cumulative records"})]}),(0,d.jsx)("button",{type:"button",className:"ba-add-inline",onClick:bO,"aria-label":"Print cumulative record",title:"Print",children:"⎙"}),(0,d.jsxs)("button",{type:"button",className:`ba-filter-button ${bA?"active":""}`,onClick:()=>O(!0),"aria-label":"Open cumulative filters",title:"Filters",children:[(0,d.jsx)(aL,{}),bA?(0,d.jsx)("b",{children:bA}):null]}),(0,d.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>Q(!0),"aria-label":"More options",children:"⋯"})]}),bA>0&&(0,d.jsxs)("section",{className:"ba-filter-chips report-no-print","aria-label":"Active cumulative filters",children:["student-transcript"!==String(R.mode)&&(0,d.jsxs)("button",{type:"button",onClick:()=>bz(a=>({...a,mode:"student-transcript"})),children:["Mode: ",bN," \xd7"]}),R.academicStructureId&&(0,d.jsxs)("button",{type:"button",onClick:()=>bz(a=>({...a,academicStructureId:void 0})),children:["Structure: ",bI," \xd7"]}),R.academicPeriodId&&(0,d.jsxs)("button",{type:"button",onClick:()=>bz(a=>({...a,academicPeriodId:void 0})),children:["Period: ",bJ," \xd7"]}),R.classId&&(0,d.jsxs)("button",{type:"button",onClick:()=>bz(a=>({...a,classId:void 0})),children:["Class: ",bL," \xd7"]}),R.subjectId&&(0,d.jsxs)("button",{type:"button",onClick:()=>bz(a=>({...a,subjectId:void 0})),children:["Subject: ",bM," \xd7"]})]}),(0,d.jsxs)("section",{className:"ba-print-card",children:[(0,d.jsxs)("div",{className:"ba-print-head report-no-print",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:bN}),(0,d.jsxs)("p",{children:[bI," \xb7 ",bJ,R.studentId?` \xb7 ${bK}`:""]})]}),(0,d.jsxs)("div",{className:"ba-report-toolbar",children:[(0,d.jsxs)("div",{className:"ba-output-switch",role:"group","aria-label":"Choose cumulative record output",children:[(0,d.jsx)("button",{type:"button",className:"student-transcript"===R.mode?"active":"",onClick:()=>bz(a=>({...a,mode:"student-transcript"})),title:"View cumulative transcript",children:"Transcript"}),(0,d.jsx)("button",{type:"button",className:"cumulative-book"===String(R.mode)?"active":"",onClick:()=>bz(a=>({...a,mode:"cumulative-book"})),title:"View cumulative report book",children:"Book"})]}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:bO,children:"Print"})]})]}),(0,d.jsx)("div",{className:"report-screen-scroll ba-print-zone",children:(0,d.jsx)("div",{id:"cumulative-report-print-zone",children:(()=>{if("cumulative-book"===String(R.mode))return(0,d.jsx)(aa.A,{dataset:by,template:bs,settings:bt,compact:!0,pageBreakAfter:!1,mobilePreview:!0});if("student-transcript"===R.mode)return(0,d.jsx)(ab.A,{dataset:bx,template:bu,settings:bv,compact:!0,pageBreakAfter:!1,mobilePreview:!0});if("multi-period-report"===R.mode){let a;return a=bm.multiPeriodReport,(0,d.jsxs)("section",{className:"print-page report-page-break cumulative-multi-period-page",style:{width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:"11mm",boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:bm.header.branding.fontFamily||"Arial, sans-serif",border:"1px solid #e5e5e5"},children:[(0,d.jsx)(ah.A,{header:bm.header,title:"Multi-Period Academic Report",subtitle:a?`${a.studentName} • ${a.periods.length} Periods`:void 0,orientation:"portrait"}),a?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"cr-print-summary-grid",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Student:"})," ",a.studentName]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Class:"})," ",a.className||"-"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Average:"})," ",at(a.average,1),"%"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"GPA:"})," ",null!=a.gpa?at(a.gpa,2):"-"]})]}),(0,d.jsxs)("table",{style:bp,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...bq,textAlign:"left"},children:"Subject"}),a.periods.map(a=>(0,d.jsx)("th",{style:bq,children:a.academicPeriodName},a.academicPeriodId)),(0,d.jsx)("th",{style:bq,children:"Average"}),(0,d.jsx)("th",{style:bq,children:"Best"}),(0,d.jsx)("th",{style:bq,children:"Latest"}),(0,d.jsx)("th",{style:bq,children:"Trend"}),(0,d.jsx)("th",{style:bq,children:"Final Grade"})]})}),(0,d.jsxs)("tbody",{children:[a.subjects.map(b=>(0,d.jsxs)("tr",{children:[(0,d.jsxs)("td",{style:{...br,fontWeight:800},children:[b.subjectName,b.subjectCode&&(0,d.jsx)("div",{style:{fontSize:8,opacity:.7},children:b.subjectCode})]}),a.periods.map(a=>{let c=b.periodScores.find(b=>b.academicPeriodId===a.academicPeriodId);return(0,d.jsx)("td",{style:{...br,textAlign:"center"},children:c?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("strong",{children:[at(c.percentage,1),"%"]}),(0,d.jsx)("div",{style:{fontSize:8,opacity:.7},children:c.grade||"-"})]}):"-"},`${b.subjectName}-${a.academicPeriodId}`)}),(0,d.jsxs)("td",{style:{...br,textAlign:"center",fontWeight:800},children:[at(b.average,1),"%"]}),(0,d.jsxs)("td",{style:{...br,textAlign:"center"},children:[at(b.bestScore,1),"%"]}),(0,d.jsxs)("td",{style:{...br,textAlign:"center"},children:[at(b.latestScore,1),"%"]}),(0,d.jsx)("td",{style:{...br,textAlign:"center"},children:au(b.trend)}),(0,d.jsx)("td",{style:{...br,textAlign:"center",fontWeight:800},children:b.finalGrade||"-"})]},b.subjectId||b.subjectName)),!a.subjects.length&&(0,d.jsx)("tr",{children:(0,d.jsx)("td",{style:{...br,textAlign:"center",padding:16},colSpan:a.periods.length+6,children:"No multi-period subject records found."})})]})]}),(0,d.jsx)(aO,{primary:D,schoolName:bm.header.branding.schoolName,label:"Official multi-period academic report"})]}):(0,d.jsx)("div",{className:"cr-print-empty",children:"Select a student with multiple historical snapshots to generate a multi-period report."})]})}if("annual-broadsheet"===R.mode)return(0,d.jsx)(ae.A,{header:bm.header,broadsheet:bm.annualBroadsheet,pageBreakAfter:!1});if("subject-history"===R.mode){let a;return a=bm.subjectHistory,(0,d.jsxs)("section",{className:"print-page report-page-break cumulative-subject-history-page",style:bo,children:[(0,d.jsx)(ah.A,{header:bm.header,title:"Subject Longitudinal Analytics",subtitle:a?`${a.subjectName} • ${a.totalStudents} Students • ${a.totalPeriods} Periods`:void 0,orientation:"landscape"}),a?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"cr-print-summary-grid six",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Subject:"})," ",a.subjectName]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Students:"})," ",a.totalStudents]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Periods:"})," ",a.totalPeriods]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Average:"})," ",at(a.subjectAverage,1),"%"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Improving:"})," ",a.improvingCount]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Declining:"})," ",a.decliningCount]})]}),(0,d.jsxs)("table",{style:bp,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:bq,children:"#"}),(0,d.jsx)("th",{style:{...bq,textAlign:"left",minWidth:180},children:"Student"}),(0,d.jsx)("th",{style:bq,children:"Class"}),(0,d.jsx)("th",{style:bq,children:"Periods"}),(0,d.jsx)("th",{style:bq,children:"Average"}),(0,d.jsx)("th",{style:bq,children:"Highest"}),(0,d.jsx)("th",{style:bq,children:"Lowest"}),(0,d.jsx)("th",{style:bq,children:"Latest"}),(0,d.jsx)("th",{style:bq,children:"Trend"})]})}),(0,d.jsxs)("tbody",{children:[a.students.map((a,b)=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{...br,textAlign:"center"},children:b+1}),(0,d.jsxs)("td",{style:{...br,fontWeight:800},children:[a.studentName,a.admissionNumber&&(0,d.jsx)("div",{style:{fontSize:8,opacity:.7},children:a.admissionNumber})]}),(0,d.jsx)("td",{style:{...br,textAlign:"center"},children:a.className||"-"}),(0,d.jsx)("td",{style:{...br,textAlign:"center"},children:a.periods.length}),(0,d.jsxs)("td",{style:{...br,textAlign:"center",fontWeight:800},children:[at(a.average,1),"%"]}),(0,d.jsxs)("td",{style:{...br,textAlign:"center"},children:[at(a.highest,1),"%"]}),(0,d.jsxs)("td",{style:{...br,textAlign:"center"},children:[at(a.lowest,1),"%"]}),(0,d.jsx)("td",{style:{...br,textAlign:"center"},children:null!=a.latest?`${at(a.latest,1)}%`:"-"}),(0,d.jsx)("td",{style:{...br,textAlign:"center",fontWeight:800},children:au(a.trend)})]},a.studentId)),!a.students.length&&(0,d.jsx)("tr",{children:(0,d.jsx)("td",{style:{...br,textAlign:"center",padding:16},colSpan:9,children:"No subject history records found."})})]})]}),(0,d.jsx)(aO,{primary:D,schoolName:bm.header.branding.schoolName,label:"Official subject history"})]}):(0,d.jsx)("div",{className:"cr-print-empty",children:"Select a subject to generate longitudinal subject analytics."})]})}return"promotion-summary"===R.mode?(0,d.jsx)(af.A,{header:bm.header,summary:bm.promotionSummary,pageBreakAfter:!1}):(0,d.jsx)(ag.A,{header:bm.header,steps:bm.progressionTimeline,studentName:bn?.fullName||bm.studentTranscript?.studentName,pageBreakAfter:!1})})()})})]}),N&&(0,d.jsx)(aM,{filters:R,setBranchLockedFilters:bz,academicStructures:bD,academicPeriods:bE,classes:bF,students:bG,subjects:bH,onClose:()=>O(!1)}),P&&(0,d.jsx)(aN,{mode:R.mode,setMode:a=>{bz(b=>({...b,mode:a})),Q(!1)},onRefresh:async()=>{Q(!1),await bh()},onPrint:()=>{Q(!1),bO()},onClose:()=>Q(!1)})]}):(0,d.jsxs)("main",{className:"ba-page cumulative-page",style:{"--ba-primary":D},children:[(0,d.jsx)("style",{children:aP}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("h2",{children:"Student workspace unavailable"}),(0,d.jsx)("p",{children:"Your cumulative records require an active school and branch workspace."}),(0,d.jsx)("button",{type:"button",className:"ba-state-button",onClick:()=>f.push("/student"),children:"Return to Student Home"})]})]}):(0,d.jsx)(aK,{primary:D,title:"Student profile not linked",text:"The active student membership needs a studentId, studentLocalId, or matching student contact."}):(0,d.jsx)(aK,{primary:D,title:"Student access required",text:"Open this page from an active student-role workspace."}):(0,d.jsx)(aK,{primary:D,title:"Redirecting to login...",text:"You must sign in before viewing your cumulative records."})},myReport:function(){var a,b;let c,e;(0,H.p)();let f=(0,h.useRouter)(),{accountId:n,loading:o,authenticated:p}=(0,i.F)(),{settings:q,loading:r}=(0,j.t)(),{activeSchool:s,activeSchoolId:t,activeBranch:u,activeBranchId:v,loading:w}=(0,k.c)(),{activeMembership:x}=(0,l.A)(),y=(0,g.useMemo)(()=>null,[]),z=(0,g.useMemo)(()=>y?.membership||x||{},[x,y?.membership]),A=U(z?.studentId,z?.studentLocalId,z?.student?.id,y?.studentId,null),B="student"===String(z?.role||y?.role||"").toLowerCase(),D=(a={openWorkspace:y,activeMembership:x,activeSchoolId:t,activeSchool:s,settings:q},c=a.openWorkspace?.membership||a.activeMembership||null,U(a.openWorkspace?.schoolId,c?.schoolId,c?.school?.id,a.activeSchoolId,a.activeSchool?.id,a.settings?.schoolId,null)),aa=(b={openWorkspace:y,activeMembership:x,activeBranchId:v,activeBranch:u,settings:q},e=b.openWorkspace?.membership||b.activeMembership||null,U(b.openWorkspace?.branchId,e?.branchId,e?.schoolBranchId,e?.branch?.id,b.activeBranchId,b.activeBranch?.id,b.settings?.branchId,null)),ab=q?.primaryColor||"var(--primary-color, #2563eb)",ac=T(q?.currentAcademicStructureId)||void 0,ad=T(q?.currentAcademicPeriodId)||void 0,{loading:ae,setLoading:af}=(0,I.J)(),[ag,ah]=(0,g.useState)("student-report"),[ai,aj]=(0,g.useState)(""),[ak,al]=(0,g.useState)(!1),[am,an]=(0,g.useState)(!1),[ao,ap]=(0,g.useState)({branchId:aa||void 0,academicStructureId:ac,academicPeriodId:ad,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"}),[aq,ar]=(0,g.useState)([]),[as,at]=(0,g.useState)([]),[au,av]=(0,g.useState)([]),[aw,ax]=(0,g.useState)([]),[ay,az]=(0,g.useState)([]),[aA,aB]=(0,g.useState)([]),[aC,aD]=(0,g.useState)([]),[aE,aF]=(0,g.useState)([]),[aG,aH]=(0,g.useState)([]),[aI,aJ]=(0,g.useState)([]),[aK,aL]=(0,g.useState)([]),[aM,aN]=(0,g.useState)([]),[aO,aP]=(0,g.useState)([]),[aQ,aR]=(0,g.useState)([]),[aS,aT]=(0,g.useState)([]),[aU,aV]=(0,g.useState)([]),[aW,aX]=(0,g.useState)([]),[aY,aZ]=(0,g.useState)([]),[a$,a_]=(0,g.useState)([]),[a0,a1]=(0,g.useState)([]),[a2,a3]=(0,g.useState)([]),[a4,a5]=(0,g.useState)([]),[a6,a7]=(0,g.useState)([]),[a8,a9]=(0,g.useState)([]),[ba,bb]=(0,g.useState)([]),[bc,bd]=(0,g.useState)([]),[be,bf]=(0,g.useState)([]),[bg,bh]=(0,g.useState)([]),[bi,bj]=(0,g.useState)([]),bk=()=>{bi.forEach(C.hZ),bj([]),ar([]),at([]),av([]),ax([]),az([]),aB([]),aD([]),aF([]),aH([]),aJ([]),aL([]),aN([]),aP([]),aR([]),aT([]),aV([]),aX([]),aZ([]),a_([]),a1([]),a3([]),a5([]),a7([]),a9([]),bb([]),bd([]),bf([]),bh([])},bl=async({ownerTable:a,ownerId:b,fieldKey:c,fallbackMediaId:d,nextUrls:e})=>{let f=T(b);if(f){let b=await (0,C.cg)({accountId:n||void 0,ownerTable:a,ownerId:f,fieldKey:c});if(b?.id&&!b.isDeleted&&!1!==b.active){let a=await (0,C.fW)(String(b.id));if(a)return e.push(a),a}}let g=T(d);if(!g)return"";let h=await m.db.mediaAssets?.get?.(g);if(!(h&&!h.isDeleted&&!1!==h.active&&(!n||h.accountId===n)&&h.ownerTable===a&&h.fieldKey===c&&(!f||String(h.ownerId||"")===String(f))))return"";let i=await (0,C.fW)(g);return i&&e.push(i),i||""},bm=async()=>{if(!p||!n||!D||!aa||!B){bk(),af(!1);return}try{af(!0);let[a,b,c,d,e,f,g,h,i,j,k,l,o,p,q,r,t,v,w,x,y,B,E,F,G,H,I,J]=await Promise.all([m.db.schools.toArray(),m.db.branches.toArray(),m.db.schoolBranchSettings.toArray(),m.db.academicStructures.toArray(),m.db.academicPeriods.toArray(),m.db.students.toArray(),m.db.parents.toArray(),m.db.teachers.toArray(),m.db.classes.toArray(),m.db.subjects.toArray(),m.db.classSubjects.toArray(),m.db.classTeachers.toArray(),m.db.studentEnrollments.toArray(),m.db.studentParents.toArray(),m.db.assessmentApplicabilities.toArray(),m.db.assessmentStructures.toArray(),m.db.assessmentStructureItems.toArray(),m.db.assessmentEntries.toArray(),m.db.gradingStructures.toArray(),m.db.gradeRules.toArray(),m.db.attendance.toArray(),m.db.studentAttendanceSummaries?.toArray?.()||[],m.db.computedResults.toArray(),m.db.reportCards.toArray(),m.db.reportCardItems.toArray(),m.db.reportCardTemplates?.toArray?.()||[],m.db.reportCardTemplateSettings?.toArray?.()||[],m.db.reportCardTemplateAssignments?.toArray?.()||[]]),L=a=>T(a.accountId)===T(n)&&T(a.schoolId)===D&&T(a.branchId)===aa&&!a.isDeleted,V=a.find(a=>T(a.accountId)===T(n)&&T(a.id)===D&&!a.isDeleted)||(T(s?.accountId)===T(n)&&T(s?.id)===D?s:void 0),W=b.find(a=>T(a.accountId)===T(n)&&T(a.schoolId)===D&&T(a.id)===aa&&!a.isDeleted)||(T(u?.accountId)===T(n)&&T(u?.schoolId)===D&&T(u?.id)===aa?u:void 0),X=e.filter(L),Y=F.filter(L),Z=c.filter(L);Z[0];let $=H.filter(a=>!a.isDeleted&&!1!==a.active&&!!K(a)&&(!a.accountId||a.accountId===n)&&(!a.schoolId||String(a.schoolId??"")===String(D??""))&&(!a.branchId||String(a.branchId??"")===String(aa??""))).sort((a,b)=>a.isDefault&&!b.isDefault?-1:!a.isDefault&&b.isDefault?1:String(a.name||"").localeCompare(String(b.name||""))),_=I.filter(a=>!a.isDeleted&&!1!==a.active&&!!K(a)&&(!a.accountId||a.accountId===n)&&(!a.schoolId||String(a.schoolId??"")===String(D??""))&&(!a.branchId||String(a.branchId??"")===String(aa??""))),ab=J.filter(a=>!a.isDeleted&&!1!==a.active&&!!K(a)&&(!a.accountId||a.accountId===n)&&(!a.schoolId||String(a.schoolId??"")===String(D??""))&&(!a.branchId||String(a.branchId??"")===String(aa??""))),ac=[],ad=V?{...V,logo:await bl({ownerTable:N,ownerId:V.id,fieldKey:R,fallbackMediaId:V.logoMediaId,nextUrls:ac})||S(V,"logo","logoMediaId")}:void 0,ae=W?{...W,logo:await bl({ownerTable:O,ownerId:W.id,fieldKey:R,fallbackMediaId:W.logoMediaId,nextUrls:ac})||S(W,"logo","logoMediaId")}:void 0,ag=await Promise.all(Z.map(async a=>({...a,logo:await bl({ownerTable:P,ownerId:a.id,fieldKey:R,fallbackMediaId:a.logoMediaId,nextUrls:ac})||S(a,"logo","logoMediaId"),reportCardBackgroundImage:await bl({ownerTable:P,ownerId:a.id,fieldKey:"reportCardBackgroundImage",fallbackMediaId:a.reportCardBackgroundImageMediaId,nextUrls:ac})||S(a,"reportCardBackgroundImage","reportCardBackgroundImageMediaId"),reportCardWatermark:await bl({ownerTable:P,ownerId:a.id,fieldKey:"reportCardWatermark",fallbackMediaId:a.reportCardWatermarkMediaId,nextUrls:ac})||S(a,"reportCardWatermark","reportCardWatermarkMediaId"),reportCardSignatureImage:await bl({ownerTable:P,ownerId:a.id,fieldKey:"reportCardSignatureImage",fallbackMediaId:a.reportCardSignatureImageMediaId,nextUrls:ac})||S(a,"reportCardSignatureImage","reportCardSignatureImageMediaId")}))),ah=await Promise.all(f.filter(L).map(async a=>({...a,photo:await bl({ownerTable:M,ownerId:a.id,fieldKey:Q,fallbackMediaId:a.photoMediaId,nextUrls:ac})||S(a,"photo","photoMediaId")}))),ai=new Set(X.map(a=>T(a.id)).filter(Boolean));bi.forEach(a=>{ac.includes(a)||(0,C.hZ)(a)}),bj(ac);let aj=g.filter(L),ak=p.filter(L),al=String(z?.email||z?.user?.email||"").trim().toLowerCase(),am=String(z?.phone||z?.user?.phone||"").replace(/\s+/g,""),an=ah.find(a=>A&&T(a.id)===A)||ah.find(a=>{let b=String(a.email||"").trim().toLowerCase(),c=String(a.phone||"").replace(/\s+/g,"");return al&&b===al||am&&c===am}),ao=U(A,an?.id),aq=new Set(ao?[ao]:[]),as=new Set(Y.filter(a=>aq.has(T(a.studentId))).map(a=>T(a.id)).filter(Boolean)),au=ah.filter(a=>aq.has(T(a.id))),aw=a=>aq.has(T(a.studentId)),ay=ak.filter(a=>aq.has(T(a.studentId))),aA=new Set(ay.map(a=>T(a.parentId)).filter(Boolean)),aC=aj.filter(a=>aA.has(T(a.id)));ar(ad?[ad]:[]),at(ae?[ae]:[]),av(ag),ax(d.filter(L)),az(X),aB(au),ap(a=>({...a,studentId:ao||void 0})),aF(aC),aD(h.filter(L)),aJ(i.filter(a=>L(a)&&!1!==a.active)),aL(j.filter(a=>L(a)&&!1!==a.active)),aN(k.filter(a=>L(a)&&!1!==a.active)),aR(ay),aP(o.filter(a=>L(a)&&aw(a))),aH(l.filter(L)),aT(q.filter(a=>L(a)&&!1!==a.active)),aV(r.filter(a=>L(a)&&!1!==a.active)),aX(t.filter(a=>L(a)&&!1!==a.active)),aZ(v.filter(a=>L(a)&&aw(a))),a_(w.filter(a=>L(a)&&!1!==a.active)),a1(x.filter(a=>L(a)&&!1!==a.active)),a3(y.filter(a=>L(a)&&aw(a))),a5(B.filter(a=>L(a)&&aw(a))),a7(E.filter(a=>L(a)&&aw(a))),a9(Y.filter(aw)),bb(G.filter(a=>!!L(a)&&(!a.reportCardId||!!as.has(T(a.reportCardId)))&&(!a.academicPeriodId||!!ai.has(T(a.academicPeriodId))))),bd($),bf(_),bh(ab)}catch(a){console.error("Failed to load report data:",a),bk()}finally{af(!1)}},bn=(0,g.useMemo)(()=>u&&T(u.id)===aa?[u]:as,[u,aa,as]),bo=(0,g.useMemo)(()=>{let a=new Set;return(aO.forEach(b=>{"active"!==b.status||ao.academicStructureId&&b.academicStructureId!==ao.academicStructureId||ao.academicPeriodId&&b.academicPeriodId!==ao.academicPeriodId||a.add(T(b.classId))}),aM.forEach(b=>{!1===b.active||ao.academicStructureId&&b.academicStructureId!==ao.academicStructureId||ao.academicPeriodId&&b.academicPeriodId&&b.academicPeriodId!==ao.academicPeriodId||a.add(T(b.classId))}),ao.academicStructureId||ao.academicPeriodId)?aI.filter(b=>!!T(b.id)&&a.has(T(b.id))):aI},[aI,aO,aM,ao.academicStructureId,ao.academicPeriodId]),bp=(0,g.useMemo)(()=>aM.filter(a=>(!ao.classId||a.classId===ao.classId)&&(!ao.academicStructureId||a.academicStructureId===ao.academicStructureId)&&(!ao.academicPeriodId||!a.academicPeriodId||a.academicPeriodId===ao.academicPeriodId)),[aM,ao.classId,ao.academicStructureId,ao.academicPeriodId]),bq=(0,g.useMemo)(()=>{if(!ao.classId&&!ao.academicPeriodId)return aA;let a=new Set(aO.filter(a=>"active"===a.status&&(!ao.classId||a.classId===ao.classId)&&(!ao.academicStructureId||a.academicStructureId===ao.academicStructureId)&&(!ao.academicPeriodId||a.academicPeriodId===ao.academicPeriodId)).map(a=>T(a.studentId)).filter(Boolean));return aA.filter(b=>!!T(b.id)&&a.has(T(b.id)))},[aA,aO,ao.classId,ao.academicStructureId,ao.academicPeriodId]),br=(0,g.useMemo)(()=>({schools:aq,branches:bn,schoolBranchSettings:au,academicStructures:aw,academicPeriods:ay,students:aA,parents:aE,studentParents:aQ,teachers:aC,classes:aI,subjects:aK,classSubjects:aM,studentEnrollments:aO,classTeachers:aG,assessmentApplicabilities:aS,assessmentStructures:aU,assessmentStructureItems:aW,assessmentEntries:aY,gradingStructures:a$,gradeRules:a0,attendance:a2,studentAttendanceSummaries:a4,computedResults:a6,reportCards:a8,reportCardItems:ba}),[aq,bn,au,aw,ay,aA,aE,aQ,aC,aI,aK,aM,aO,aG,aS,aU,aW,aY,a$,a0,a2,a4,a6,a8,ba]),bs=(0,g.useMemo)(()=>(0,F.EI)(br,ao),[br,ao]),bt=!!(aw.length&&ay.length&&aI.length&&aA.length),bu=(0,g.useMemo)(()=>as.find(a=>T(a.id)===aa)||bn.find(a=>T(a.id)===aa)||u||as[0]||bn[0],[u,aa,as,bn]);s?.name||aq[0]?.name,bu?.name||u?.name||as[0]?.name;let bv=V(aI,ao.classId),bw=V(ay,ao.academicPeriodId),bx=V(aw,ao.academicStructureId),by=ai.trim().toLowerCase(),bz=(0,g.useMemo)(()=>by?bq.filter(a=>`${a.fullName||a.name||""} ${a.admissionNumber||""} ${a.gender||""}`.toLowerCase().includes(by)):bq,[bq,by]),bA=(0,g.useMemo)(()=>by?bo.filter(a=>`${a.name||""} ${a.code||""}`.toLowerCase().includes(by)):bo,[bo,by]),bB=(0,g.useMemo)(()=>[ao.academicStructureId,ao.academicPeriodId,ao.classId,ao.classSubjectId,ao.studentId,ao.sortMode&&"position"!==ao.sortMode?ao.sortMode:void 0,"student-report"!==ag?ag:void 0].filter(Boolean).length,[ao.academicStructureId,ao.academicPeriodId,ao.classId,ao.classSubjectId,ao.studentId,ao.sortMode,ag]);V(aA,ao.studentId),V(bp.map(a=>{var b;let c;return{id:a.id,name:(b=a,c=aK.find(a=>a.id===b.subjectId),b.name||c?.name||`Subject ${b.subjectId||""}`)}}),ao.classSubjectId),"class-reports"===ag?bs.classReports.length:bs.studentReport,bs.warnings.length;let bC=bt&&("class-reports"===ag?bs.classReports.length>0:!!bs.studentReport),bD=()=>{bC&&(0,E.f)({targetId:L,mode:"class-reports"===ag?"whole-class-reports":"single-student",orientation:"portrait",pageSize:"A4"})},bE=(0,g.useMemo)(()=>{let a=bg.filter(a=>!1!==a.active&&K(a));return a.find(a=>!0===a.isDefault&&(!a.scopeType||"branch"===a.scopeType)&&(!a.scopeId||String(a.scopeId??"")===String(aa??"")))||a.find(a=>(!a.scopeType||"branch"===a.scopeType)&&(!a.scopeId||String(a.scopeId??"")===String(aa??"")))||a.find(a=>!0===a.isDefault)||a[0]||null},[bg,aa]),bF=(0,g.useMemo)(()=>{let a=T(bE?.templateId);return bc.find(b=>a&&T(b.id)===a)||bc.find(a=>a.isDefault)||bc.find(a=>"classic_formal"===String(a.code||""))||bc[0]||(0,G.ed)(null)},[bE,bc]),bG=(0,g.useMemo)(()=>{let a=T(bE?.templateSettingsId),b=T(bF?.id);return be.find(b=>a&&T(b.id)===a)||be.find(a=>b&&T(a.templateId)===b)||be.find(a=>!1!==a.active)||null},[bE,bF,be]),bH=(0,g.useMemo)(()=>(0,G.tH)({...G.gv,...bG||{}},bF||null,bE||null),[bF,bE,bG]);function bI(a){let b=T(a?.report?.studentId||a?.studentId);if(b)return aA.find(a=>T(a.id)===b)}function bJ(a,b){let c;if(!a)return a;let d=b?.name||b?.branchName||b?.campusName||a.branchName||a.branchLabel||a.branch?.name||"",e=bI(a),f=(c=bI(a),c?.resolvedStudentPhotoUrl||c?.photo||a?.report?.resolvedStudentPhotoUrl||a?.report?.studentPhoto||"");return{...a,student:e||a.student,branch:b,branchId:b?.id||a.branchId,branchName:d,branchLabel:d,template:bF,templateSettings:bH,reportCardTemplate:bF,reportCardTemplateSettings:bH,reportCardTemplateAssignment:bE,header:{...a.header,branch:b,branchId:b?.id||a.header?.branchId,branchName:d,branchLabel:d,template:bF,templateSettings:bH,reportCardTemplate:bF,reportCardTemplateSettings:bH,reportCardTemplateAssignment:bE,branding:{...a.header?.branding||{},primaryColor:(a.header?.branding||{}).primaryColor||"var(--ba-primary, var(--primary-color, #2563eb))",branchName:(a.header?.branding||{}).branchName||d,logo:(a.header?.branding||{}).logo||a.header?.schoolBranchSetting?.logo||a.header?.branch?.logo||a.header?.school?.logo,reportCardBackgroundImage:(a.header?.branding||{}).reportCardBackgroundImage||a.header?.schoolBranchSetting?.reportCardBackgroundImage,reportCardWatermark:(a.header?.branding||{}).reportCardWatermark||a.header?.schoolBranchSetting?.reportCardWatermark,reportCardSignatureImage:(a.header?.branding||{}).reportCardSignatureImage||a.header?.schoolBranchSetting?.reportCardSignatureImage}},report:{...a.report,studentPhoto:f||a.report?.studentPhoto,resolvedStudentPhotoUrl:f||a.report?.resolvedStudentPhotoUrl,branch:b,branchId:b?.id||a.report?.branchId,branchName:d,branchLabel:d,template:bF,templateSettings:bH,reportCardTemplate:bF,reportCardTemplateSettings:bH,reportCardTemplateAssignment:bE}}}return o||w||r||ae?(0,d.jsx)(W,{primary:ab,title:"Opening My Report...",text:"Checking your academic records, report template and attendance."}):p&&n?B?A||0!==aA.length||ae?D&&aa?(0,d.jsxs)("main",{className:"ba-page student-reports-page",style:{"--ba-primary":ab,"--primary-color":ab},children:[(0,d.jsx)("style",{children:_}),(0,d.jsxs)("section",{className:"ba-search-card report-no-print","aria-label":"My report search and actions",children:[(0,d.jsxs)("label",{className:"ba-search",children:[(0,d.jsx)("span",{children:"⌕"}),(0,d.jsx)("input",{value:ai,onChange:a=>aj(a.target.value),placeholder:"Search my report...","aria-label":"Search my report"})]}),(0,d.jsx)("button",{type:"button",className:"ba-add-inline",onClick:bD,"aria-label":"Print report",title:"Print",disabled:!bC,children:"⎙"}),(0,d.jsxs)("button",{type:"button",className:`ba-filter-button ${bB?"active":""}`,onClick:()=>al(!0),"aria-label":"Open report filters",title:"Filters",children:[(0,d.jsx)(Y,{}),bB?(0,d.jsx)("b",{children:bB}):null]}),(0,d.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>an(!0),"aria-label":"More options",children:"⋯"})]}),bB>0&&(0,d.jsxs)("section",{className:"ba-filter-chips report-no-print","aria-label":"Active report filters",children:[ao.academicStructureId&&(0,d.jsxs)("button",{type:"button",onClick:()=>ap(a=>({...a,academicStructureId:void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:["Structure: ",bx," \xd7"]}),ao.academicPeriodId&&(0,d.jsxs)("button",{type:"button",onClick:()=>ap(a=>({...a,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:["Period: ",bw," \xd7"]}),ao.classId&&(0,d.jsxs)("button",{type:"button",onClick:()=>ap(a=>({...a,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:["Class: ",bv," \xd7"]}),"student-report"!==ag&&(0,d.jsx)("button",{type:"button",onClick:()=>ah("student-report"),children:"Mode: My Report \xd7"})]}),(0,d.jsx)("section",{className:"ba-print-card",children:(0,d.jsx)("div",{id:L,className:"ba-print-zone",children:bt?"class-reports"===ag?bs.classReports.length?bs.classReports.map((a,b)=>(0,d.jsx)(J,{dataset:bJ(a,bu),template:bF,settings:bH,compact:!0,pageBreakAfter:b<bs.classReports.length-1},a.report?.studentId||b)):(0,d.jsx)(J,{dataset:void 0,template:bF,settings:bH}):(0,d.jsx)(J,{dataset:bJ(bs.studentReport,bu),template:bF,settings:bH,pageBreakAfter:!1}):(0,d.jsx)(X,{icon:"\uD83D\uDCC4",title:"Your report is not available yet",text:"Your school has not published enough academic data to build your report yet."})})}),ak&&(0,d.jsx)(Z,{mode:ag,filters:ao,academicStructures:aw,academicPeriods:ay,filteredClasses:bA,filteredClassSubjects:bp,filteredStudents:bz,setMode:ah,setFilters:ap,onClose:()=>al(!1)}),am&&(0,d.jsx)($,{onRefresh:async()=>{an(!1),await bm()},onPrint:()=>{an(!1),bD()},onClose:()=>an(!1)})]}):(0,d.jsxs)("main",{className:"ba-page",style:{"--ba-primary":ab,"--primary-color":ab},children:[(0,d.jsx)("style",{children:_}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("h2",{children:"Branch workspace required"}),(0,d.jsx)("p",{children:"Your report is generated inside the selected student workspace. Use Select Role again if the wrong branch is active."}),(0,d.jsx)("button",{type:"button",className:"ba-state-button",onClick:()=>f.push("/select-role"),children:"Go to Select Role"})]})]}):(0,d.jsx)(W,{primary:ab,title:"Student profile not linked",text:"The active student membership needs a studentId, studentLocalId, or matching student contact."}):(0,d.jsx)(W,{primary:ab,title:"Student access required",text:"Open this page from an active student-role workspace."}):(0,d.jsx)(W,{primary:ab,title:"Redirecting to login...",text:"You must sign in before opening your report."})}};function aS(){return(0,d.jsx)(e.A,{portalTitle:"Student Portal",portalSubtitle:"Learner workspace",homeKey:"studentDashboard",allowedRoles:f.un,navSections:aQ,routes:aR,lockedContext:!0,requireSchool:!0,requireBranch:!0})}},77068:a=>{"use strict";a.exports=require("next/dist/shared/lib/size-limit")},79428:a=>{"use strict";a.exports=require("buffer")},79646:a=>{"use strict";a.exports=require("child_process")},81630:a=>{"use strict";a.exports=require("http")},82969:(a,b,c)=>{Promise.resolve().then(c.bind(c,16771))},83997:a=>{"use strict";a.exports=require("tty")},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},91645:a=>{"use strict";a.exports=require("net")},94735:a=>{"use strict";a.exports=require("events")}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[3445,63,7488,7533,1537,8505,3080,728,8594,6606,7359],()=>b(b.s=6557));module.exports=c})();
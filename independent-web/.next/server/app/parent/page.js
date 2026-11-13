(()=>{var a={};a.id=7531,a.ids=[7531],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},1932:a=>{"use strict";a.exports=require("url")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},6393:(a,b,c)=>{"use strict";c.r(b),c.d(b,{__next_app__:()=>M,handler:()=>O,routeModule:()=>N});var d=c(7553),e=c(84006),f=c(67798),g=c(34775),h=c(99373),i=c(73461),j=c(1020),k=c(26349),l=c(54365),m=c(16023),n=c(63747),o=c(24235),p=c(23938),q=c(261),r=c(66758),s=c(77243),t=c(26713),u=c(37527),v=c(22820),w=c(88216),x=c(47929),y=c(79551),z=c(71797),A=c(89125),B=c(86439),C=c(77068),D=c(27269),E=c(61287),F=c(81494),G=c(70722),H=c(70753),I=c(43954),J=c(17891),K={};for(let a in E)0>["default","__next_app__","routeModule","handler"].indexOf(a)&&(K[a]=()=>E[a]);c.d(b,K);let L={children:["",{children:["parent",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,96614)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\parent\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,51873)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\parent\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}},[]]},{layout:[()=>Promise.resolve().then(c.bind(c,32056)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,55091,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,45270,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,28193,23)),"next/dist/client/components/builtin/unauthorized.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}},[]]}.children,M={require:c,loadChunk:()=>Promise.resolve()},N=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/parent/page",pathname:"/parent",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:L},distDir:".next",relativeProjectDir:""});async function O(a,b,d){var K,P,Q,R,S;d.requestMeta&&(0,h.setRequestMeta)(a,d.requestMeta),N.isDev&&(0,h.addRequestMeta)(a,"devRequestTimingInternalsEnd",process.hrtime.bigint());let T=!!(0,h.getRequestMeta)(a,"minimalMode"),U="/parent/page";"/index"===U&&(U="/");let V=await N.prepare(a,b,{srcPage:U,multiZoneDraftMode:!1});if(!V)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:W,query:X,params:Y,pageIsDynamic:Z,buildManifest:$,nextFontManifest:_,reactLoadableManifest:aa,serverActionsManifest:ab,clientReferenceManifest:ac,subresourceIntegrityManifest:ad,prerenderManifest:ae,isDraftMode:af,resolvedPathname:ag,revalidateOnlyGenerated:ah,routerServerContext:ai,nextConfig:aj,parsedUrl:ak,interceptionRoutePatterns:al,deploymentId:am,clientAssetToken:an}=V,ao=(0,q.normalizeAppPath)(U),{isOnDemandRevalidate:ap}=V,aq=aj.experimental.ppr&&!aj.cacheComponents&&(0,I.isInterceptionRouteAppPath)(ag)?null:N.match(ag,ae),ar=(null==aq?void 0:aq.route)??null,as=!!ae.routes[ag],at=a.headers["user-agent"]||"",au=(0,t.getBotType)(at),av=(0,p.isHtmlBotRequest)(a),aw=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[s.NEXT_ROUTER_PREFETCH_HEADER],ax=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[s.RSC_HEADER],ay=(0,r.getIsPossibleServerAction)(a),az=(0,m.checkIsAppPPREnabled)(aj.experimental.ppr),aA=a.headers[x.NEXT_RESUME_STATE_LENGTH_HEADER];if(!(0,h.getRequestMeta)(a,"postponed")&&T&&az&&ay&&aA&&"string"==typeof aA){let e=parseInt(aA,10),{maxPostponedStateSize:f,maxPostponedStateSizeBytes:g}=(0,D.getMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize);if(!isNaN(e)&&e>0){if(e>g)return b.statusCode=413,b.end((0,D.getPostponedStateExceededErrorMessage)(f)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let i="1 MB",j=(null==(S=aj.experimental.serverActions)?void 0:S.bodySizeLimit)??i,k=e+(j!==i?c(95726).parse(j):1048576),l=await (0,D.readBodyWithSizeLimit)(a,k);if(null===l)return b.statusCode=413,b.end("Request body exceeded limit. To configure the body size limit for Server Actions, see: https://nextjs.org/docs/app/api-reference/next-config-js/serverActions#bodysizelimit"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;if(l.length>=e){let b=l.subarray(0,e).toString("utf8");(0,h.addRequestMeta)(a,"postponed",b);let c=l.subarray(e);(0,h.addRequestMeta)(a,"actionBody",c)}else throw Object.defineProperty(Error(`invariant: expected ${e} bytes of postponed state but only received ${l.length} bytes`),"__NEXT_ERROR_CODE",{value:"E979",enumerable:!1,configurable:!0})}}if(!(0,h.getRequestMeta)(a,"postponed")&&az&&"1"===a.headers[x.NEXT_RESUME_HEADER]&&"POST"===a.method){let{maxPostponedStateSize:c,maxPostponedStateSizeBytes:e}=(0,D.getMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize),f=await (0,D.readBodyWithSizeLimit)(a,e);if(null===f)return b.statusCode=413,b.end((0,D.getPostponedStateExceededErrorMessage)(c)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let g=f.toString("utf8");(0,h.addRequestMeta)(a,"postponed",g)}let aB=!0===N.isDev||!0===aj.experimental.exposeTestingApiInProductionBuild,aC=aB&&("1"===a.headers[s.NEXT_INSTANT_PREFETCH_HEADER]||void 0===a.headers[s.RSC_HEADER]&&"string"==typeof a.headers.cookie&&a.headers.cookie.includes(s.NEXT_INSTANT_TEST_COOKIE+"=")),aD=(az||aC)&&((null==(K=ae.routes[ao]??ae.dynamicRoutes[ao])?void 0:K.renderingMode)==="PARTIALLY_STATIC"||aC&&(aB||(null==ai?void 0:ai.experimentalTestProxy)===!0)),aE=aC&&aD,aF=aE&&!0===N.isDev,aG=!1,aH=aD?(0,h.getRequestMeta)(a,"postponed"):void 0,aI=null==(P=ae.routes[ag])?void 0:P.prefetchDataRoute,aJ=aD&&ax&&!aw&&!aI;T&&(aJ=aJ&&!!aH);let aK=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),aL=(!au||!aD)&&(!at||(0,p.shouldServeStreamingMetadata)(at,aj.htmlLimitedBots)),aM=!!((ar||as||ae.routes[ao])&&!(au&&aD)),aN=aD&&!0===aj.cacheComponents,aO=!0===N.isDev||!aM||"string"==typeof aH||(aN&&(0,h.getRequestMeta)(a,"onCacheEntryV2")?aJ&&!T:aJ),aP=!!au&&aD,aQ=(null==ar?void 0:ar.remainingPrerenderableParams)??[],aR=(null==ar?void 0:ar.fallback)===null&&((null==(Q=ar.fallbackRootParams)?void 0:Q.length)??0)>0,aS=null;if(!af&&aM&&!aO&&!ay&&!aH&&!aJ){let a=aq?"string"==typeof(null==ar?void 0:ar.fallback)?ar.fallback:aq.source:null;if(!0===aj.experimental.partialFallbacks&&a&&(null==ar?void 0:ar.fallbackRouteParams)&&!aR){if(aQ.length>0){let b,c=(b=new Map(aQ.map(a=>[a.paramName,a])),a.split("/").map(a=>{let c=(0,J.getSegmentParam)(a);if(!c)return a;let d=b.get(c.paramName);if(!d)return a;let e=null==Y?void 0:Y[d.paramName];if(!e)return a;let f=Array.isArray(e)?e.map(a=>encodeURIComponent(a)).join("/"):encodeURIComponent(e);return a.replace(function(a){let{repeat:b,optional:c}=(0,J.getParamProperties)(a.paramType);return c?`[[...${a.paramName}]]`:b?`[...${a.paramName}]`:`[${a.paramName}]`}(d),f)}).join("/")||"/");aS=c!==a?c:null}}else aS=ag}let aT=aS;!aT&&(N.isDev||aM&&Z&&(null==ar?void 0:ar.fallbackRouteParams)&&!ay)&&(aT=ag),N.isDev||af||!aM||!ax||aJ||(0,k.d)(a.headers);let aU={...E,tree:L,handler:O,routeModule:N,__next_app__:M};ab&&ac&&(0,o.setManifestsSingleton)({page:U,clientReferenceManifest:ac,serverActionsManifest:ab});let aV=a.method||"GET",aW=(0,g.getTracer)(),aX=aW.getActiveScopeSpan(),aY=!!(null==ai?void 0:ai.isWrappedByNextServer),aZ=!0===aj.experimental.partialFallbacks&&aQ.length>0?(null==ar||null==(R=ar.fallbackRouteParams)?void 0:R.filter(a=>!aQ.some(b=>b.paramName===a.paramName)))??[]:[],a$=async()=>((null==ai?void 0:ai.render404)?await ai.render404(a,b,ak,!1):b.end("This page could not be found"),null);try{let k,m=N.getVaryHeader(ag,al);b.setHeader("Vary",m);let o=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return N.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let a=aW.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let d=a.get("next.route");if(d){let a=`${aV} ${d}`;c.setAttributes({"next.route":d,"http.route":d,"next.span_name":a}),c.updateName(a),k&&k!==c&&(k.setAttribute("http.route",d),k.updateName(a))}else c.updateName(`${aV} ${U}`)})},p=(0,h.getRequestMeta)(a,"incrementalCache")||await N.getIncrementalCache(a,aj,ae,T);null==p||p.resetRequestCache(),globalThis.__incrementalCache=p;let q=async({span:e,postponed:f,fallbackRouteParams:g,forceStaticRender:i})=>{let k={query:X,params:Y,page:ao,sharedContext:{buildId:W,deploymentId:am,clientAssetToken:an},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aU,Component:(0,j.T)(aU),params:Y,routeModule:N,page:U,postponed:f,shouldWaitOnAllReady:aP,serveStreamingMetadata:aL,supportsDynamicResponse:"string"==typeof f||aO,buildManifest:$,nextFontManifest:_,reactLoadableManifest:aa,subresourceIntegrityManifest:ad,setCacheStatus:null==ai?void 0:ai.setCacheStatus,setIsrStatus:null==ai?void 0:ai.setIsrStatus,setReactDebugChannel:null==ai?void 0:ai.setReactDebugChannel,sendErrorsToBrowser:null==ai?void 0:ai.sendErrorsToBrowser,dir:c(33873).join(process.cwd(),N.relativeProjectDir),isDraftMode:af,botType:au,isOnDemandRevalidate:ap,isPossibleServerAction:ay,assetPrefix:aj.assetPrefix,nextConfigOutput:aj.output,crossOrigin:aj.crossOrigin,trailingSlash:aj.trailingSlash,images:aj.images,previewProps:ae.preview,enableTainting:aj.experimental.taint,htmlLimitedBots:aj.htmlLimitedBots,reactMaxHeadersLength:aj.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:p,cacheLifeProfiles:aj.cacheLife,basePath:aj.basePath,serverActions:aj.experimental.serverActions,logServerFunctions:"object"==typeof aj.logging&&!!aj.logging.serverFunctions,...aE||aF||aG?{isBuildTimePrerendering:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isDebugDynamicAccesses:aF}:{},cacheComponents:!!aj.cacheComponents,experimental:{isRoutePPREnabled:aD,expireTime:aj.expireTime,staleTimes:aj.experimental.staleTimes,dynamicOnHover:!!aj.experimental.dynamicOnHover,optimisticRouting:!!aj.experimental.optimisticRouting,inlineCss:!!aj.experimental.inlineCss,prefetchInlining:aj.experimental.prefetchInlining??!1,authInterrupts:!!aj.experimental.authInterrupts,cachedNavigations:!!aj.experimental.cachedNavigations,clientTraceMetadata:aj.experimental.clientTraceMetadata||[],clientParamParsingOrigins:aj.experimental.clientParamParsingOrigins,maxPostponedStateSizeBytes:(0,C.parseMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize)},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d,e)=>N.onRequestError(a,b,d,e,ai),err:(0,h.getRequestMeta)(a,"invokeError")}};i&&(k.renderOpts.supportsDynamicResponse=!1);let l=await o(e,k),{metadata:m}=l,{cacheControl:n,headers:q={},fetchTags:r,fetchMetrics:s}=m;if(r&&(q[x.NEXT_CACHE_TAGS_HEADER]=r),a.fetchMetrics=s,aM&&(null==n?void 0:n.revalidate)===0&&!N.isDev&&!aD){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${ag}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:u.CachedRouteKind.APP_PAGE,html:l,headers:q,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},r=async({hasResolved:c,previousCacheEntry:g,isRevalidating:i,span:j,forceStaticRender:k=!1})=>{let l=!1===N.isDev,m=c||b.writableEnded;try{let f;if(ap&&ah&&!g&&!T)return(null==ai?void 0:ai.render404)?await ai.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ar&&(f=(0,v.parseFallbackField)(ar.fallback)),!0===aj.experimental.partialFallbacks&&(null==ar?void 0:ar.fallback)===null&&!aR&&aQ.length>0&&(f=v.FallbackMode.PRERENDER),f===v.FallbackMode.PRERENDER&&(0,t.isBot)(at)&&(!aD||av)&&(f=v.FallbackMode.BLOCKING_STATIC_RENDER),(null==g?void 0:g.isStale)===-1&&(ap=!0),ap&&(f!==v.FallbackMode.NOT_FOUND||g)&&(f=v.FallbackMode.BLOCKING_STATIC_RENDER),!T&&f!==v.FallbackMode.BLOCKING_STATIC_RENDER&&aT&&!m&&!af&&Z&&(l||!as)){if((l||ar)&&f===v.FallbackMode.NOT_FOUND){if(aj.adapterPath)return await a$();throw new B.NoFallbackError}if(aD&&(aj.cacheComponents?!aJ:!ax)){let b=l&&"string"==typeof(null==ar?void 0:ar.fallback)?ar.fallback:ao,f=(l||aE)&&(null==ar?void 0:ar.fallbackRouteParams)?(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams):aG?(0,n.getFallbackRouteParams)(ao,N):null;aE&&f&&(0,h.addRequestMeta)(a,"fallbackParams",f);let g=await N.handleResponse({cacheKey:b,req:a,nextConfig:aj,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:ae,isRoutePPREnabled:aD,responseGenerator:async()=>q({span:j,postponed:void 0,fallbackRouteParams:f,forceStaticRender:!0}),waitUntil:d.waitUntil,isMinimalMode:T});if(null===g)return null;if(g)return T||!aD||!(aQ.length>0)||!0!==aj.experimental.partialFallbacks||!aS||!p||ap||aG||aB||aC||aw||(0,H.scheduleOnNextTick)(async()=>{let b=N.getResponseCache(a);try{await b.revalidate(aS,p,aD,!1,a=>q({span:a.span,postponed:void 0,fallbackRouteParams:aZ.length>0?(0,n.createOpaqueFallbackRouteParams)(aZ):null,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}),delete g.cacheControl,g}}let o=ap||i||!aH?void 0:aH;if(aN&&!T&&p&&(aJ||ay)&&!k){let b=await p.get(ag,{kind:u.IncrementalCacheKind.APP_PAGE,isRoutePPREnabled:!0,isFallback:!1});b&&b.value&&b.value.kind===u.CachedRouteKind.APP_PAGE&&(o=b.value.postponed,b&&(-1===b.isStale||!0===b.isStale)&&(0,H.scheduleOnNextTick)(async()=>{let b=N.getResponseCache(a);try{await b.revalidate(ag,p,aD,!1,a=>r({...a,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}))}if((aE||aF)&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:u.CachedRouteKind.PAGES,html:w.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let s=(l&&(0,h.getRequestMeta)(a,"renderFallbackShell")||aE&&!as)&&(null==ar?void 0:ar.fallbackRouteParams)?(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams):aG?(0,n.getFallbackRouteParams)(ao,N):null;if((l||aE)&&aj.cacheComponents&&!as&&(null==ar?void 0:ar.fallbackRouteParams)){let b=(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams);b&&(0,h.addRequestMeta)(a,"fallbackParams",b)}return q({span:j,postponed:o,fallbackRouteParams:s,forceStaticRender:k})}catch(b){throw(null==g?void 0:g.isStale)&&await N.onRequestError(a,b,{routerKind:"App Router",routePath:U,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aM,isOnDemandRevalidate:ap})},!1,ai),b}},D=async c=>{var f,g,i,j,k;let l,m=await N.handleResponse({cacheKey:aS,responseGenerator:a=>r({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ap,isRoutePPREnabled:aD,req:a,nextConfig:aj,prerenderManifest:ae,waitUntil:d.waitUntil,isMinimalMode:T});if(af&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),N.isDev&&b.setHeader("Cache-Control","no-cache, must-revalidate"),!m){if(aS)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=m.value)?void 0:f.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=m.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let n="string"==typeof m.value.postponed;ax&&!ay&&am&&b.setHeader(x.NEXT_NAV_DEPLOYMENT_ID_HEADER,am),aM&&!aJ&&(!n||aw)&&(T||b.setHeader("x-nextjs-cache",ap?"REVALIDATED":m.isMiss?"MISS":m.isStale?"STALE":"HIT"),b.setHeader(s.NEXT_IS_PRERENDER_HEADER,"1"));let{value:o}=m;if(aH)l={revalidate:0,expire:void 0};else if(aJ)l={revalidate:0,expire:void 0};else if(!N.isDev)if(af)l={revalidate:0,expire:void 0};else if(aM){if(m.cacheControl)if("number"==typeof m.cacheControl.revalidate){if(m.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${m.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:m.cacheControl.revalidate,expire:(null==(j=m.cacheControl)?void 0:j.expire)??aj.expireTime}}else l={revalidate:x.CACHE_ONE_YEAR_SECONDS,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(m.cacheControl=l,"string"==typeof aK&&(null==o?void 0:o.kind)===u.CachedRouteKind.APP_PAGE&&o.segmentData){b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=o.headers)?void 0:k[x.NEXT_CACHE_TAGS_HEADER];T&&aM&&c&&"string"==typeof c&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,c);let d=o.segmentData.get(aK);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.fromStatic(d,s.RSC_CONTENT_TYPE_HEADER),cacheControl:m.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.EMPTY,cacheControl:m.cacheControl}))}let p=aN?(0,h.getRequestMeta)(a,"onCacheEntryV2")??(0,h.getRequestMeta)(a,"onCacheEntry"):(0,h.getRequestMeta)(a,"onCacheEntry");if(p&&await p(m,{url:(0,h.getRequestMeta)(a,"initURL")??a.url}))return null;if(o.headers){let a={...o.headers};for(let[c,d]of(T&&aM||delete a[x.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let t=null==(g=o.headers)?void 0:g[x.NEXT_CACHE_TAGS_HEADER];if(T&&aM&&t&&"string"==typeof t&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,t),!o.status||ax&&aD||(b.statusCode=o.status),!T&&o.status&&F.RedirectStatusCode[o.status]&&ax&&(b.statusCode=200),n&&!aJ&&b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"1"),ax&&!af){if(void 0===o.rscData){if(o.html.contentType!==s.RSC_CONTENT_TYPE_HEADER)if(aj.cacheComponents)return b.statusCode=404,(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.EMPTY,cacheControl:m.cacheControl});else throw Object.defineProperty(new G.InvariantError(`Expected RSC response, got ${o.html.contentType}`),"__NEXT_ERROR_CODE",{value:"E789",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:o.html,cacheControl:m.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.fromStatic(o.rscData,s.RSC_CONTENT_TYPE_HEADER),cacheControl:m.cacheControl})}let v=o.html;if(aC&&aE){let c=!0===N.isDev?crypto.randomUUID():null;return v.pipeThrough((0,z.createInstantTestScriptInsertionTransformStream)(c)),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})}if(!n||T||ax)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:m.cacheControl});if(aE||aF)return v.push(new ReadableStream({start(a){a.enqueue(y.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}});let B=new TransformStream;return v.push(B.readable),q({span:c,postponed:o.postponed,fallbackRouteParams:null,forceStaticRender:!1}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(B.writable)}).catch(a=>{B.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})};if(!aY||!aX)return k=aW.getActiveScopeSpan(),await aW.withPropagatedContext(a.headers,()=>aW.trace(i.BaseServerSpan.handleRequest,{spanName:`${aV} ${U}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aV,"http.target":a.url}},D),void 0,!aY);await D(aX)}catch(b){throw b instanceof B.NoFallbackError||await N.onRequestError(a,b,{routerKind:"App Router",routePath:U,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aM,isOnDemandRevalidate:ap})},!1,ai),b}}},8133:(a,b,c)=>{"use strict";c.d(b,{P:()=>k});var d=c(67484),e=c(4121),f=c(18423),g=c(41259);let h=new Set(["branch_admin","teacher","student","parent","accountant"]);function i(a){return null==a?null:String(a).trim()||null}function j(...a){for(let b of a){let a=i(b);if(a)return a}return null}function k(){let{accountId:a,authenticated:b,restoring:c,verifying:k}=(0,e.F)(),{activeSchoolId:l,activeSchool:m,activeBranchId:n,activeBranch:o,loading:p}=(0,f.c)(),{activeMembership:q,activeRole:r,restored:s}=(0,g.A)();return(0,d.useMemo)(()=>{let d,e=String(r||q?.role||"").trim().toLowerCase().replace(/-/g,"_"),f=i(q?.accountId),g=i(a)||f,t=j(q?.schoolId,q?.school?.id,q?.activeSchoolId,l,m?.id),u=j(q?.branchId,q?.schoolBranchId,q?.branch?.id,q?.activeBranchId,n,o?.id);a&&f&&String(a)!==f?d="The active membership belongs to a different account.":e&&h.has(e)&&!u?d="The selected role requires an active branch.":!e||["developer","platform_team"].includes(e)||t||(d="The selected role requires an active school.");let v=!!(b&&s&&!c&&g&&t&&u&&q&&!d);return{accountId:g,schoolId:t,branchId:u,membership:q,role:e||null,ready:v,authenticated:b,restoring:c,verifying:k,branchLoading:p,membershipRestored:s,error:d}},[a,b,c,k,l,m,n,o,p,q,r,s])}},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},17891:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/get-segment-param")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:a=>{"use strict";a.exports=require("os")},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},27910:a=>{"use strict";a.exports=require("stream")},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},34631:a=>{"use strict";a.exports=require("tls")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},43954:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/interception-routes")},47734:(a,b,c)=>{Promise.resolve().then(c.bind(c,96614))},49663:()=>{},51873:(a,b,c)=>{"use strict";function d({children:a}){return a}c.r(b),c.d(b,{default:()=>d})},55511:a=>{"use strict";a.exports=require("crypto")},55591:a=>{"use strict";a.exports=require("https")},58859:(a,b,c)=>{"use strict";c.d(b,{D:()=>e});var d=c(67484);function e(a){let{accountId:b,ownerTable:c,rows:e,fields:f}=a,[g,h]=(0,d.useState)({}),i=f.map(a=>[a.fieldKey,a.mediaIdKey||"",a.fallbackKey||""].join(":")).join("|"),j=(0,d.useMemo)(()=>f.map(a=>({...a})),[i]);return(0,d.useMemo)(()=>e.map(a=>[a.id,a.updatedAt,a.isDeleted,...j.flatMap(b=>[a[b.mediaIdKey||`${b.fieldKey}MediaId`],a[b.fallbackKey||b.fieldKey]])].join(":")).join("|"),[e,j]),g}c(28505)},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},70722:a=>{"use strict";a.exports=require("next/dist/shared/lib/invariant-error")},73142:(a,b,c)=>{"use strict";a.exports=c(73895).style},73895:(a,b,c)=>{"use strict";c(49663);var d=c(67484),e=d&&"object"==typeof d&&"default"in d?d:{default:d},f="u">typeof process&&process.env&&!0,g=function(a){return"[object String]"===Object.prototype.toString.call(a)},h=function(){function a(a){var b=void 0===a?{}:a,c=b.name,d=void 0===c?"stylesheet":c,e=b.optimizeForSpeed,h=void 0===e?f:e;i(g(d),"`name` must be a string"),this._name=d,this._deletedRulePlaceholder="#"+d+"-deleted-rule____{}",i("boolean"==typeof h,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=h,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0,this._nonce=null}var b,c=a.prototype;return c.setOptimizeForSpeed=function(a){i("boolean"==typeof a,"`setOptimizeForSpeed` accepts a boolean"),i(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=a,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var a=this;i(!this._injected,"sheet already injected"),this._injected=!0,this._serverSheet={cssRules:[],insertRule:function(b,c){return"number"==typeof c?a._serverSheet.cssRules[c]={cssText:b}:a._serverSheet.cssRules.push({cssText:b}),c},deleteRule:function(b){a._serverSheet.cssRules[b]=null}}},c.getSheetForTag=function(a){if(a.sheet)return a.sheet;for(var b=0;b<document.styleSheets.length;b++)if(document.styleSheets[b].ownerNode===a)return document.styleSheets[b]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(a,b){return i(g(a),"`insertRule` accepts only strings"),"number"!=typeof b&&(b=this._serverSheet.cssRules.length),this._serverSheet.insertRule(a,b),this._rulesCount++},c.replaceRule=function(a,b){this._optimizeForSpeed;var c=this._serverSheet;if(b.trim()||(b=this._deletedRulePlaceholder),!c.cssRules[a])return a;c.deleteRule(a);try{c.insertRule(b,a)}catch(d){f||console.warn("StyleSheet: illegal rule: \n\n"+b+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),c.insertRule(this._deletedRulePlaceholder,a)}return a},c.deleteRule=function(a){this._serverSheet.deleteRule(a)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._serverSheet.cssRules=[]},c.cssRules=function(){return this._serverSheet.cssRules},c.makeStyleTag=function(a,b,c){b&&i(g(b),"makeStyleTag accepts only strings as second parameter");var d=document.createElement("style");this._nonce&&d.setAttribute("nonce",this._nonce),d.type="text/css",d.setAttribute("data-"+a,""),b&&d.appendChild(document.createTextNode(b));var e=document.head||document.getElementsByTagName("head")[0];return c?e.insertBefore(d,c):e.appendChild(d),d},b=[{key:"length",get:function(){return this._rulesCount}}],function(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}(a.prototype,b),a}();function i(a,b){if(!a)throw Error("StyleSheet: "+b+".")}var j=function(a){for(var b=5381,c=a.length;c;)b=33*b^a.charCodeAt(--c);return b>>>0},k={};function l(a,b){if(!b)return"jsx-"+a;var c=String(b),d=a+c;return k[d]||(k[d]="jsx-"+j(a+"-"+c)),k[d]}function m(a,b){var c=a+(b=b.replace(/\/style/gi,"\\/style"));return k[c]||(k[c]=b.replace(/__jsx-style-dynamic-selector/g,a)),k[c]}var n=function(){function a(a){var b=void 0===a?{}:a,c=b.styleSheet,d=void 0===c?null:c,e=b.optimizeForSpeed,f=void 0!==e&&e;this._sheet=d||new h({name:"styled-jsx",optimizeForSpeed:f}),this._sheet.inject(),d&&"boolean"==typeof f&&(this._sheet.setOptimizeForSpeed(f),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var b=a.prototype;return b.add=function(a){var b=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(a.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed());var c=this.getIdAndRules(a),d=c.styleId,e=c.rules;if(d in this._instancesCounts){this._instancesCounts[d]+=1;return}var f=e.map(function(a){return b._sheet.insertRule(a)}).filter(function(a){return -1!==a});this._indices[d]=f,this._instancesCounts[d]=1},b.remove=function(a){var b=this,c=this.getIdAndRules(a).styleId;if(function(a,b){if(!a)throw Error("StyleSheetRegistry: "+b+".")}(c in this._instancesCounts,"styleId: `"+c+"` not found"),this._instancesCounts[c]-=1,this._instancesCounts[c]<1){var d=this._fromServer&&this._fromServer[c];d?(d.parentNode.removeChild(d),delete this._fromServer[c]):(this._indices[c].forEach(function(a){return b._sheet.deleteRule(a)}),delete this._indices[c]),delete this._instancesCounts[c]}},b.update=function(a,b){this.add(b),this.remove(a)},b.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},b.cssRules=function(){var a=this,b=this._fromServer?Object.keys(this._fromServer).map(function(b){return[b,a._fromServer[b]]}):[],c=this._sheet.cssRules();return b.concat(Object.keys(this._indices).map(function(b){return[b,a._indices[b].map(function(a){return c[a].cssText}).join(a._optimizeForSpeed?"":"\n")]}).filter(function(a){return!!a[1]}))},b.styles=function(a){var b,c;return b=this.cssRules(),void 0===(c=a)&&(c={}),b.map(function(a){var b=a[0],d=a[1];return e.default.createElement("style",{id:"__"+b,key:"__"+b,nonce:c.nonce?c.nonce:void 0,dangerouslySetInnerHTML:{__html:d}})})},b.getIdAndRules=function(a){var b=a.children,c=a.dynamic,d=a.id;if(c){var e=l(d,c);return{styleId:e,rules:Array.isArray(b)?b.map(function(a){return m(e,a)}):[m(e,b)]}}return{styleId:l(d),rules:Array.isArray(b)?b:[b]}},b.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(a,b){return a[b.id.slice(2)]=b,a},{})},a}(),o=d.createContext(null);o.displayName="StyleSheetContext";e.default.useInsertionEffect||e.default.useLayoutEffect;var p=void 0;function q(a){var b=p||d.useContext(o);return b&&b.add(a),null}q.dynamic=function(a){return a.map(function(a){return l(a[0],a[1])}).join(" ")},b.style=q},73929:(a,b,c)=>{"use strict";c.d(b,{f:()=>g});var d=c(67484),e=c(47911),f=c(8133);function g(a){let{accountId:b}=(0,f.P)(),c=(0,d.useMemo)(()=>[...new Set(a)].sort(),[a.join("|")]);return(0,e.p)({accountId:b,tables:c})}},74075:a=>{"use strict";a.exports=require("zlib")},77068:a=>{"use strict";a.exports=require("next/dist/shared/lib/size-limit")},79428:a=>{"use strict";a.exports=require("buffer")},79646:a=>{"use strict";a.exports=require("child_process")},81630:a=>{"use strict";a.exports=require("http")},83997:a=>{"use strict";a.exports=require("tty")},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},91645:a=>{"use strict";a.exports=require("net")},94590:(a,b,c)=>{Promise.resolve().then(c.bind(c,96829))},94735:a=>{"use strict";a.exports=require("events")},96614:(a,b,c)=>{"use strict";c.r(b),c.d(b,{NAV_SECTIONS:()=>e,default:()=>f});var d=c(77943);let e=(0,d.registerClientReference)(function(){throw Error("Attempted to call NAV_SECTIONS() from the server but NAV_SECTIONS is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\parent\\page.tsx","NAV_SECTIONS"),f=(0,d.registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\AGNES\\\\github\\\\eleeveon-schools-frontend\\\\app\\\\parent\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\parent\\page.tsx","default")},96829:(a,b,c)=>{"use strict";c.r(b),c.d(b,{NAV_SECTIONS:()=>cv,default:()=>cx});var d=c(48249),e=c(30728),f=c(23553),g=c(592),h=c(4121),i=c(16453),j=c(18423),k=c(67484),l=c(19099),m=c(41259),n=c(47984);let o=[{id:"pathways-to-possibility",type:"image",src:"/pathways-to-possibility.png",durationSeconds:7},{id:"building-the-future",type:"image",src:"/building-the-future.png",durationSeconds:7},{id:"knowledge-in-motion",type:"image",src:"/knowledge-in-motion.png",durationSeconds:7}];function p(a){return null==a?"":String(a).trim()}function q(a,b){let c=p(a),d=p(b);return!!(c&&d&&c===d)}function r(a,b=""){return String(a??"").trim()||b}function s(a){let b=Number(a??0);return Number.isFinite(b)?b:0}function t(a){return a?.id??a?.localId??a?.cloudId??a?.payload?.id??a?.payload?.localId}function u(a){return!!a&&!0!==a.isDeleted&&!1!==a.active&&!["deleted","archived","inactive","disabled","withdrawn"].includes(r(a.status).toLowerCase())}function v(...a){for(let b of a){let a=p(b);if(a)return a}return""}function w(a){return a.filter(u).length}function x(a,b){let c=p(b);if(!c)return"";let d=a.find(a=>q(t(a),c));return r(d?.publicUrl||d?.remoteUrl||d?.previewDataUrl||d?.thumbnailDataUrl||d?.localObjectUrl)}function y({slides:a}){let[b,c]=(0,k.useState)(0),e=a[b%Math.max(a.length,1)];return e?(0,d.jsxs)("section",{className:"pd-hero",children:["video"===e.type?(0,d.jsx)("video",{src:e.src,poster:e.poster,autoPlay:!0,muted:!0,playsInline:!0,onEnded:()=>c(b=>(b+1)%a.length)},e.id):(0,d.jsx)("img",{src:e.src,alt:""},e.id),a.length>1?(0,d.jsx)("div",{className:"pd-hero-dots",children:a.map((a,e)=>(0,d.jsx)("button",{type:"button",className:e===b?"active":"","aria-label":`Show slide ${e+1}`,onClick:()=>c(e)},a.id))}):null]}):null}function z({navigate:a,navSections:b}){(0,l.useRouter)();let{accountId:c,authenticated:e,loading:f}=(0,h.F)(),{settings:g,loading:n}=(0,i.t)(),{activeSchoolId:D,activeBranchId:E,activeSchool:F,activeBranch:G}=(0,j.c)(),{activeParentId:H,activeMembership:I}=(0,m.A)(),J=g?.primaryColor||"var(--primary-color,#2563eb)",K=(0,k.useMemo)(()=>null,[]),L=K?.membership||I||null;v(K?.schoolId,L?.schoolId,D,F?.id,g?.schoolId,null),v(K?.branchId,L?.branchId,L?.schoolBranchId,E,G?.id,g?.branchId,null);let M=v(K?.parentLocalId,L?.parentLocalId,L?.parentId,H,null),[N,O]=(0,k.useState)(!0),[P,Q]=(0,k.useState)({}),R=(0,k.useMemo)(()=>(P.parents||[]).find(a=>M&&q(t(a),M))||null,[P.parents,M]),S=(0,k.useMemo)(()=>(P.studentParents||[]).filter(a=>M&&q(a.parentId||a.parentLocalId,M)),[P.studentParents,M]),T=(0,k.useMemo)(()=>{let a=(P.students||[]).filter(u),b=new Set(S.map(a=>p(a.studentId||a.studentLocalId)).filter(Boolean));if(b.size)return a.filter(a=>b.has(p(t(a))));let c=R?.email||L?.parentEmail,d=R?.phone||L?.parentPhone;return a.filter(a=>!!(c&&q(a.parentEmail,c)||d&&q(a.parentPhone,d)))},[P.students,S,R,L]),U=(0,k.useMemo)(()=>new Set(T.map(a=>p(t(a))).filter(Boolean)),[T]),V=(0,k.useMemo)(()=>{let a=(P.attendance||[]).filter(a=>U.has(p(a.studentId))),b=new Date().toISOString().slice(0,10),c=a.filter(a=>r(a.date||a.createdAt).startsWith(b)),d=c.filter(a=>"present"===r(a.status).toLowerCase()).length,e=c.length?Math.round(d/c.length*100):0,f=(P.computedResults||[]).filter(a=>U.has(p(a.studentId))),g=f.length?Math.round(f.reduce((a,b)=>a+s(b.percentage||b.average||b.score||b.totalScore),0)/f.length):0,h=(P.studentFeeInvoices||[]).filter(a=>U.has(p(a.studentId))),i=[...P.studentFeePayments||[],...P.payments||[]].filter(a=>!a.studentId||U.has(p(a.studentId))),j=h.reduce((a,b)=>a+s(b.total||b.amount||b.netAmount),0),k=i.reduce((a,b)=>a+s(b.amount||b.total),0);return{children:T.length,attendancePercent:e,present:d,attendanceRecorded:c.length,results:f.length,averageScore:g,invoices:w(h),payments:w(i),paidTotal:k,feeBalance:Math.max(0,j-k),currency:r(h[0]?.currencyCode||i[0]?.currencyCode,"GHS")}},[P,U,T.length]),W=(0,k.useMemo)(()=>(P.announcements||[]).filter(u).sort((a,b)=>s(b.publishAt||b.sentAt||b.updatedAt||b.createdAt)-s(a.publishAt||a.sentAt||a.updatedAt||a.createdAt)).slice(0,2),[P.announcements]),X=(0,k.useMemo)(()=>(P.calendarEvents||[]).filter(u).sort((a,b)=>new Date(a.startAt||a.startDate||a.date||0).getTime()-new Date(b.startAt||b.startDate||b.date||0).getTime()).slice(0,2),[P.calendarEvents]),Y=(0,k.useMemo)(()=>{var a,b;let c,d;return a=P.portalHighlights||[],b=(P.mediaAssets||[]).filter(u),c=Date.now(),(d=a.filter(u).filter(a=>a?.metadata?.placement!=="gallery").filter(a=>{if(!(Array.isArray(a.audiences)?a.audiences.map(a=>r(a).toLowerCase()):[r(a.audience||a.portal||a.role||"all").toLowerCase()]).some(a=>["all","parent","parents"].includes(a))||!["published","scheduled","active"].includes(r(a.status,"published").toLowerCase()))return!1;let b=s(a.startAt),d=s(a.endAt);return(!b||!(b>c))&&(!d||!(d<c))}).sort((a,b)=>s(a.displayOrder??a.order)-s(b.displayOrder??b.order)).map((a,c)=>{let d="video"===r(a.mediaType).toLowerCase()?"video":"image",e=x(b,a.mediaAssetId)||("image"===d?r(a.fallbackImageUrl):"");return e?{id:p(t(a))||`parent-highlight-${c}`,type:d,src:e,poster:x(b,a.posterMediaAssetId)||r(a.fallbackImageUrl)||void 0,durationSeconds:Math.max(3,Math.min(30,s(a.durationSeconds||7)))}:null}).filter(a=>!!a)).length?d:o},[P.portalHighlights,P.mediaAssets]);function Z(b){if(a)return void a(b);try{window.dispatchEvent(new CustomEvent("eleeveon:portal-route",{detail:{key:b}}))}catch{}}return N||f||n?(0,d.jsx)(B,{primary:J,title:"Opening parent home..."}):(0,d.jsxs)("main",{className:"pd-page",style:{"--pd-primary":J},children:[(0,d.jsx)("style",{children:C}),(0,d.jsx)(y,{slides:Y}),(0,d.jsxs)("section",{className:"pd-metric-grid",children:[(0,d.jsxs)("button",{type:"button",className:"pd-metric",onClick:()=>Z("childAttendance"),children:[(0,d.jsx)("span",{children:"Attendance"}),(0,d.jsxs)("strong",{children:[V.attendancePercent,"%"]}),(0,d.jsxs)("small",{children:[V.present," ","present today"]})]}),(0,d.jsxs)("button",{type:"button",className:"pd-metric",onClick:()=>Z("childResults"),children:[(0,d.jsx)("span",{children:"Results"}),(0,d.jsxs)("strong",{children:[V.averageScore||"—",V.averageScore?"%":""]}),(0,d.jsxs)("small",{children:[V.results," ","result record(s)"]})]})]}),(0,d.jsxs)("section",{className:"pd-grid",children:[(0,d.jsxs)("article",{className:"pd-card",children:[(0,d.jsxs)("header",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Family"}),(0,d.jsx)("h2",{children:"My children"})]}),(0,d.jsx)("button",{type:"button",onClick:()=>Z("children"),children:"View all"})]}),(0,d.jsxs)("div",{className:"pd-list",children:[T.slice(0,3).map((a,b)=>(0,d.jsxs)("button",{type:"button",className:"pd-row",onClick:()=>Z("children"),children:[(0,d.jsx)("span",{className:"pd-avatar",children:r(a.fullName||a.name,"C").slice(0,1).toUpperCase()}),(0,d.jsxs)("span",{children:[(0,d.jsx)("strong",{children:r(a.fullName||a.name,"Student")}),(0,d.jsx)("small",{children:r(a.className,"Open student profile")})]}),(0,d.jsx)("i",{children:"›"})]},p(t(a))||b)),T.length?null:(0,d.jsx)(A,{text:"No linked children found."})]})]}),(0,d.jsxs)("article",{className:"pd-card pd-fees",children:[(0,d.jsxs)("header",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Account"}),(0,d.jsx)("h2",{children:"Fees"})]}),(0,d.jsx)("button",{type:"button",onClick:()=>Z("childFees"),children:"Open"})]}),(0,d.jsx)("strong",{className:"pd-big-number",children:function(a,b="GHS"){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:b,maximumFractionDigits:0}).format(s(a))}catch{return`${b} ${s(a).toLocaleString()}`}}(V.feeBalance,V.currency)}),(0,d.jsx)("p",{children:V.feeBalance?"Outstanding balance":"Account currently clear"}),(0,d.jsxs)("div",{className:"pd-inline-stats",children:[(0,d.jsxs)("span",{children:[(0,d.jsx)("b",{children:V.invoices}),"Invoices"]}),(0,d.jsxs)("span",{children:[(0,d.jsx)("b",{children:V.payments}),"Payments"]})]})]}),(0,d.jsxs)("article",{className:"pd-card",children:[(0,d.jsxs)("header",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Notice board"}),(0,d.jsx)("h2",{children:"Announcements"})]}),(0,d.jsx)("button",{type:"button",onClick:()=>Z("announcements"),children:"View all"})]}),(0,d.jsxs)("div",{className:"pd-list",children:[W.map((a,b)=>(0,d.jsxs)("button",{type:"button",className:"pd-row compact",onClick:()=>Z("announcements"),children:[(0,d.jsx)("span",{className:"pd-icon",children:"\uD83D\uDCE3"}),(0,d.jsxs)("span",{children:[(0,d.jsx)("strong",{children:r(a.title,"Announcement")}),(0,d.jsx)("small",{children:r(a.message||a.body||a.content,"Open to read")})]}),(0,d.jsx)("i",{children:"›"})]},p(t(a))||b)),W.length?null:(0,d.jsx)(A,{text:"No announcements yet."})]})]}),(0,d.jsxs)("article",{className:"pd-card",children:[(0,d.jsxs)("header",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"School day"}),(0,d.jsx)("h2",{children:"Upcoming"})]}),(0,d.jsx)("button",{type:"button",onClick:()=>Z("calendar"),children:"Calendar"})]}),(0,d.jsxs)("div",{className:"pd-list",children:[X.map((a,b)=>(0,d.jsxs)("button",{type:"button",className:"pd-row compact",onClick:()=>Z("calendar"),children:[(0,d.jsx)("span",{className:"pd-icon",children:"\uD83D\uDDD3️"}),(0,d.jsxs)("span",{children:[(0,d.jsx)("strong",{children:r(a.title||a.name,"School event")}),(0,d.jsx)("small",{children:function(a){if(!a)return"Not set";let b=new Date(a);return Number.isFinite(b.getTime())?new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric"}).format(b):"Not set"}(a.startAt||a.startDate||a.date)})]}),(0,d.jsx)("i",{children:"›"})]},p(t(a))||b)),X.length?null:(0,d.jsx)(A,{text:"No upcoming events."})]})]})]})]})}function A({text:a}){return(0,d.jsx)("div",{className:"pd-empty",children:a})}function B({primary:a,title:b}){return(0,d.jsxs)("main",{className:"pd-page",style:{"--pd-primary":a},children:[(0,d.jsx)("style",{children:C}),(0,d.jsxs)("section",{className:"pd-state",children:[(0,d.jsx)("div",{className:"pd-spinner"}),(0,d.jsx)("h2",{children:b})]})]})}let C=`
@keyframes pdSpin {
  to {
    transform: rotate(360deg);
  }
}

.pd-page {
  width: 100%;
  height: auto !important;
  min-height: 0 !important;
  overflow: visible !important;
  padding: 8px 8px calc(76px + env(safe-area-inset-bottom, 0px));
  color: var(--text, #111827);
  background: var(--bg, #f7f8fb);
}

.pd-page,
.pd-page * {
  box-sizing: border-box;
  min-width: 0;
}

.pd-page button {
  font: inherit;
  cursor: pointer;
}

.pd-hero {
  position: relative;
  width: 100%;
  height: clamp(290px, 47vw, 390px);
  overflow: hidden;
  border-radius: 25px;
  background:
    color-mix(
      in srgb,
      var(--pd-primary) 12%,
      #0f172a
    );
  box-shadow: 0 14px 34px rgba(15,23,42,.08);
}

.pd-hero img,
.pd-hero video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.pd-hero-dots {
  position: absolute;
  left: 50%;
  bottom: 11px;
  z-index: 3;
  display: flex;
  gap: 6px;
  transform: translateX(-50%);
}

.pd-hero-dots button {
  width: 7px;
  height: 7px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: rgba(255,255,255,.52);
}

.pd-hero-dots button.active {
  width: 20px;
  background: #fff;
}

.pd-metric-grid,
.pd-grid {
  display: grid;
  gap: 9px;
  margin-top: 9px;
}

.pd-metric-grid {
  grid-template-columns: repeat(2, minmax(0,1fr));
}

.pd-metric,
.pd-card {
  border:
    1px solid
    var(--border, rgba(15,23,42,.09));
  background:
    var(--card-bg, var(--surface,#fff));
  color: inherit;
  box-shadow:
    0 8px 22px rgba(15,23,42,.045);
}

.pd-metric {
  min-height: 92px;
  padding: 12px;
  border-radius: 20px;
  text-align: left;
}

.pd-metric > span,
.pd-metric > strong,
.pd-metric > small {
  display: block;
}

.pd-metric > span {
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
}

.pd-metric > strong {
  margin-top: 5px;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -.05em;
}

.pd-metric > small {
  margin-top: 5px;
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 750;
}

.pd-card {
  padding: 13px;
  border-radius: 22px;
}

.pd-card header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 9px;
}

.pd-card header span {
  display: block;
  color: var(--muted,#64748b);
  font-size: 9px;
  font-weight: 900;
  letter-spacing: .09em;
  text-transform: uppercase;
}

.pd-card h2 {
  margin: 2px 0 0;
  font-size: 16px;
  letter-spacing: -.03em;
}

.pd-card header button {
  border: 0;
  border-radius: 999px;
  padding: 6px 9px;
  background:
    color-mix(
      in srgb,
      var(--pd-primary) 9%,
      transparent
    );
  color: var(--pd-primary);
  font-size: 10px;
  font-weight: 900;
}

.pd-list {
  display: grid;
  gap: 6px;
}

.pd-row {
  width: 100%;
  display: grid;
  grid-template-columns: auto minmax(0,1fr) auto;
  align-items: center;
  gap: 9px;
  padding: 8px;
  border: 0;
  border-radius: 15px;
  background:
    color-mix(
      in srgb,
      var(--muted,#64748b) 5%,
      transparent
    );
  color: inherit;
  text-align: left;
}

.pd-avatar,
.pd-icon {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background:
    color-mix(
      in srgb,
      var(--pd-primary) 10%,
      transparent
    );
}

.pd-avatar {
  color: var(--pd-primary);
  font-weight: 1000;
}

.pd-row strong,
.pd-row small {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pd-row strong {
  font-size: 12px;
}

.pd-row small {
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 10px;
}

.pd-row i {
  color: var(--muted,#64748b);
  font-style: normal;
  font-size: 18px;
}

.pd-big-number {
  display: block;
  font-size: 27px;
  line-height: 1;
  letter-spacing: -.05em;
}

.pd-fees p {
  margin: 5px 0 0;
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 750;
}

.pd-inline-stats {
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 7px;
  margin-top: 12px;
}

.pd-inline-stats span {
  padding: 9px;
  border-radius: 14px;
  background:
    color-mix(
      in srgb,
      var(--muted,#64748b) 6%,
      transparent
    );
  color: var(--muted,#64748b);
  font-size: 9px;
  font-weight: 800;
}

.pd-inline-stats b {
  display: block;
  margin-bottom: 2px;
  color: var(--text,#111827);
  font-size: 15px;
}

.pd-empty {
  padding: 18px 8px;
  text-align: center;
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 750;
}

.pd-state {
  min-height: 280px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
}

.pd-spinner {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border:
    4px solid
    color-mix(
      in srgb,
      var(--pd-primary) 16%,
      transparent
    );
  border-top-color: var(--pd-primary);
  animation: pdSpin .8s linear infinite;
}

.pd-state h2 {
  margin: 0;
  font-size: 17px;
}

/*
 * Single document scroll ownership.
 */
.pd-page,
.app-content,
.app-content-inner,
.shell-portal-content,
.shell-content-background {
  height: auto !important;
  max-height: none !important;
  min-height: 0 !important;
  overflow-y: visible !important;
  overscroll-behavior-y: auto !important;
}

html {
  overflow-y: auto !important;
}

body {
  overflow-y: visible !important;
}

@media (min-width: 720px) {
  .pd-page {
    padding: 12px 12px 24px;
  }

  .pd-grid {
    grid-template-columns:
      repeat(2,minmax(0,1fr));
  }

  .pd-hero {
    height: 370px;
  }
}

@media (min-width: 1100px) {
  .pd-page {
    max-width: 1180px;
    margin: 0 auto;
  }
}
`;var D=c(58859),E=c(73929);let F=a=>null==a?"":String(a).trim(),G=(a,b)=>F(a)===F(b),H=a=>String(a??"").trim().toLowerCase(),I=a=>{let b=String(a||"active").replaceAll("_"," ");return b.charAt(0).toUpperCase()+b.slice(1)},J=a=>a&&"active"!==a?"graduated"===a?"blue":"transferred"===a?"orange":"withdrawn"===a?"red":"gray":"green",K=a=>{let b=String(a||"").trim();if(!b.startsWith("#"))return"#ffffff";let c=b.slice(1);if(3===c.length&&(c=c.split("").map(a=>a+a).join("")),!/^[0-9a-fA-F]{6}$/.test(c))return"#ffffff";let d=Number.parseInt(c,16);return(299*(d>>16&255)+587*(d>>8&255)+114*(255&d))/1e3>155?"#111827":"#ffffff"},L=a=>{if("number"==typeof a.age&&Number.isFinite(a.age))return a.age;if(!a.dateOfBirth)return null;let b=new Date(a.dateOfBirth);if(!Number.isFinite(b.getTime()))return null;let c=new Date,d=c.getFullYear()-b.getFullYear(),e=c.getMonth()-b.getMonth();return(e<0||0===e&&c.getDate()<b.getDate())&&(d-=1),d>=0?d:null};function M(a,b){let c=new Map;return a.forEach(a=>{let d=b(a)||"Not set";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({name:a,count:b})).sort((a,b)=>b.count-a.count||a.name.localeCompare(b.name))}function N({name:a,photo:b,primary:c,size:e="normal"}){return(0,d.jsx)("div",{className:`pp-avatar ${"large"===e?"large":""}`,style:{background:b?`url("${b}") center/cover`:c,color:b?"#ffffff":K(c),borderColor:b?"transparent":`color-mix(in srgb, ${c} 70%, transparent)`},"aria-label":`${a} photo`,children:!b&&String(a||"S").slice(0,1).toUpperCase()})}function O({children:a,tone:b="gray"}){return(0,d.jsx)("span",{className:`pp-chip ${b}`,children:a})}function P({icon:a,title:b,text:c}){return(0,d.jsxs)("section",{className:"pp-empty",children:[(0,d.jsx)("div",{className:"pp-empty-icon",children:a}),(0,d.jsx)("h3",{children:b}),(0,d.jsx)("p",{children:c})]})}function Q({title:a,subtitle:b,items:c}){let e=c.reduce((a,b)=>a+b.count,0);return(0,d.jsxs)("section",{className:"pp-summary-section",children:[(0,d.jsxs)("div",{className:"pp-section-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:b}),(0,d.jsx)("h3",{children:a})]}),(0,d.jsxs)(O,{children:[c.length," group(s)"]})]}),(0,d.jsxs)("div",{className:"pp-summary-list",children:[c.map(a=>{let b=e?Math.round(a.count/e*100):0;return(0,d.jsxs)("article",{className:"pp-summary-row",children:[(0,d.jsxs)("div",{className:"pp-summary-row-top",children:[(0,d.jsx)("strong",{children:a.name}),(0,d.jsx)("span",{children:a.count})]}),(0,d.jsx)("div",{className:"pp-progress-track",children:(0,d.jsx)("div",{style:{width:`${b}%`}})}),(0,d.jsxs)("small",{children:[b,"% of linked children"]})]},a.name)}),!c.length&&(0,d.jsx)(P,{icon:"\uD83D\uDCCA",title:"No summary data",text:"There is no information available for this summary."})]})]})}let R=`
@keyframes ppSpin {
  to { transform: rotate(360deg); }
}

.pp-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 8px;
  padding-bottom: max(32px, env(safe-area-inset-bottom));
  overflow-x: hidden;
  background: var(--bg, #f8fafc);
  color: var(--text, #0f172a);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--font-size, 16px);
}

.pp-page *,
.pp-page *::before,
.pp-page *::after {
  box-sizing: border-box;
}

.pp-page button,
.pp-page input,
.pp-page select {
  font: inherit;
}

.pp-state-card {
  width: min(460px, 100%);
  min-height: min(420px, calc(100dvh - 32px));
  margin: 0 auto;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  padding: 24px;
  border: 1px solid var(--border, rgba(148, 163, 184, .22));
  border-radius: 28px;
  background: var(--card, var(--surface, #fff));
  box-shadow: var(--shell-shadow, 0 24px 60px rgba(15, 23, 42, .08));
  text-align: center;
}

.pp-state-card h2,
.pp-state-card p {
  margin: 0;
}

.pp-state-card h2 {
  font-size: 22px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.pp-state-card p {
  max-width: 34rem;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.6;
}

.pp-spinner {
  width: 38px;
  height: 38px;
  border: 4px solid color-mix(in srgb, var(--pp-primary) 18%, transparent);
  border-top-color: var(--pp-primary);
  border-radius: 999px;
  animation: ppSpin .8s linear infinite;
}

.pp-action-strip {
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 44px 44px;
  gap: 7px;
  width: 100%;
  padding: 7px;
  border: 1px solid var(--border, rgba(148, 163, 184, .20));
  border-radius: 20px;
  background: var(--card, var(--surface, #fff));
  box-shadow: 0 10px 26px rgba(15, 23, 42, .055);
}

.pp-search-box {
  min-width: 0;
  min-height: 44px;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 10px;
  border: 1px solid var(--input-border, var(--border, rgba(148, 163, 184, .24)));
  border-radius: 14px;
  background: var(--input-bg, var(--surface, #fff));
  color: var(--muted, #64748b);
}

.pp-search-box:focus-within {
  border-color: var(--pp-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--pp-primary) 12%, transparent);
}

.pp-search-box > span {
  flex: 0 0 auto;
  font-size: 21px;
  line-height: 1;
}

.pp-search-box input {
  min-width: 0;
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--text, #0f172a);
  font-weight: 760;
}

.pp-search-box input::placeholder {
  color: var(--muted, #94a3b8);
}

.pp-search-clear {
  width: 26px;
  height: 26px;
  flex: 0 0 auto;
  border: 0;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 12%, transparent);
  color: var(--muted, #64748b);
  cursor: pointer;
}

.pp-filter-button,
.pp-more-button {
  position: relative;
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 1000;
}

.pp-filter-button {
  border: 1px solid color-mix(in srgb, var(--pp-primary) 18%, var(--border, transparent));
  background: color-mix(in srgb, var(--pp-primary) 9%, var(--card, #fff));
  color: var(--pp-primary);
}

.pp-filter-button.active {
  border-color: var(--pp-primary);
  background: var(--pp-primary);
  color: var(--pp-primary-text);
  box-shadow: 0 8px 18px color-mix(in srgb, var(--pp-primary) 24%, transparent);
}

.pp-more-button {
  border: 1px solid var(--border, rgba(148, 163, 184, .24));
  background: var(--card, var(--surface, #fff));
  color: var(--text, #0f172a);
  box-shadow: 0 6px 16px rgba(15, 23, 42, .05);
}

.pp-action-count {
  position: absolute;
  top: -5px;
  right: -5px;
  min-width: 19px;
  height: 19px;
  display: grid;
  place-items: center;
  padding: 0 5px;
  border: 2px solid var(--card, #fff);
  border-radius: 999px;
  background: #ef4444;
  color: #fff;
  font-size: 10px;
  line-height: 1;
}

.pp-active-filters {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.pp-active-filters button {
  min-height: 29px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 4px 9px;
  border: 1px solid color-mix(in srgb, var(--pp-primary) 18%, var(--border, transparent));
  border-radius: 999px;
  background: color-mix(in srgb, var(--pp-primary) 8%, var(--card, #fff));
  color: var(--pp-primary);
  font-size: 11px;
  font-weight: 900;
  cursor: pointer;
}

.pp-active-filters button span {
  font-size: 15px;
  line-height: 1;
}

.pp-content-section {
  margin-top: 10px;
}

.pp-card-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 8px;
}

.pp-child-card {
  min-width: 0;
  padding: 10px;
  border: 1px solid var(--border, rgba(148, 163, 184, .20));
  border-radius: 19px;
  background: var(--card, var(--surface, #fff));
  box-shadow: 0 9px 22px rgba(15, 23, 42, .045);
  cursor: pointer;
  overflow: hidden;
  transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
}

.pp-child-card:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--pp-primary) 34%, var(--border, transparent));
  box-shadow: 0 13px 28px rgba(15, 23, 42, .07);
}

.pp-child-main {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 9px;
}

.pp-avatar {
  width: 46px;
  height: 46px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border: 1px solid transparent;
  border-radius: 15px;
  overflow: hidden;
  font-size: 18px;
  font-weight: 1000;
  box-shadow: 0 7px 18px rgba(15, 23, 42, .10);
}

.pp-avatar.large {
  width: 76px;
  height: 76px;
  border-radius: 24px;
  font-size: 28px;
}

.pp-child-copy {
  min-width: 0;
  flex: 1;
}

.pp-name-line {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 7px;
}

.pp-name-line h3 {
  min-width: 0;
  margin: 0;
  overflow: hidden;
  color: var(--text, #0f172a);
  font-size: 14px;
  font-weight: 1000;
  letter-spacing: -.025em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pp-status-dot {
  width: 8px;
  height: 8px;
  flex: 0 0 auto;
  border-radius: 999px;
  box-shadow: 0 0 0 3px color-mix(in srgb, currentColor 12%, transparent);
}

.pp-status-dot.green { color: #22c55e; background: #22c55e; }
.pp-status-dot.red { color: #ef4444; background: #ef4444; }
.pp-status-dot.blue { color: #3b82f6; background: #3b82f6; }
.pp-status-dot.orange { color: #f59e0b; background: #f59e0b; }
.pp-status-dot.gray { color: #94a3b8; background: #94a3b8; }

.pp-child-copy > p {
  min-width: 0;
  margin: 3px 0 0;
  overflow: hidden;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 740;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pp-card-meta {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 5px;
}

.pp-card-meta span {
  min-height: 21px;
  display: inline-flex;
  align-items: center;
  padding: 3px 7px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 9%, transparent);
  color: var(--muted, #64748b);
  font-size: 9px;
  font-weight: 850;
  text-transform: capitalize;
}

.pp-row-more {
  width: 31px;
  height: 31px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border: 1px solid var(--border, rgba(148, 163, 184, .18));
  border-radius: 999px;
  background: color-mix(in srgb, var(--pp-primary) 7%, var(--card, #fff));
  color: var(--pp-primary);
  font-size: 20px;
  font-weight: 1000;
  cursor: pointer;
}

.pp-card-footer {
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;
  padding-top: 7px;
  border-top: 1px solid var(--border, rgba(148, 163, 184, .13));
}

.pp-card-footer span,
.pp-card-footer strong {
  min-width: 0;
  overflow: hidden;
  font-size: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pp-card-footer span {
  color: var(--muted, #64748b);
  font-weight: 760;
}

.pp-card-footer strong {
  color: var(--pp-primary);
  font-weight: 950;
}

.pp-chip {
  max-width: 100%;
  min-height: 24px;
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 999px;
  overflow: hidden;
  font-size: 10px;
  font-weight: 950;
  line-height: 1.1;
  text-overflow: ellipsis;
  text-transform: capitalize;
  white-space: nowrap;
}

.pp-chip.green { background: rgba(34, 197, 94, .13); color: #16a34a; }
.pp-chip.red { background: rgba(239, 68, 68, .13); color: #dc2626; }
.pp-chip.blue { background: rgba(59, 130, 246, .13); color: #2563eb; }
.pp-chip.orange { background: rgba(245, 158, 11, .14); color: #d97706; }
.pp-chip.purple { background: rgba(147, 51, 234, .13); color: #9333ea; }
.pp-chip.gray {
  background: color-mix(in srgb, var(--muted, #64748b) 12%, transparent);
  color: var(--muted, #64748b);
}

.pp-empty {
  min-height: 180px;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 7px;
  padding: 18px;
  border: 1px dashed var(--border, rgba(148, 163, 184, .30));
  border-radius: 21px;
  background: var(--card, var(--surface, #fff));
  text-align: center;
}

.pp-empty-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: color-mix(in srgb, var(--pp-primary) 10%, var(--card, #fff));
  font-size: 24px;
}

.pp-empty h3,
.pp-empty p {
  margin: 0;
}

.pp-empty h3 {
  color: var(--text, #0f172a);
  font-size: 16px;
  font-weight: 1000;
  letter-spacing: -.03em;
}

.pp-empty p {
  max-width: 34rem;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.55;
}

.pp-table-card,
.pp-summary-section {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid var(--border, rgba(148, 163, 184, .20));
  border-radius: 21px;
  background: var(--card, var(--surface, #fff));
  box-shadow: 0 10px 25px rgba(15, 23, 42, .045);
}

.pp-section-head {
  min-width: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 9px;
  margin-bottom: 9px;
}

.pp-section-head p,
.pp-section-head h3 {
  margin: 0;
}

.pp-section-head p {
  color: var(--pp-primary);
  font-size: 9px;
  font-weight: 950;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.pp-section-head h3 {
  margin-top: 2px;
  color: var(--text, #0f172a);
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.035em;
}

.pp-table-scroll {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--border, rgba(148, 163, 184, .16));
  border-radius: 16px;
}

.pp-table-scroll table {
  width: 100%;
  min-width: 800px;
  border-collapse: collapse;
  background: var(--card, var(--surface, #fff));
}

.pp-table-scroll th,
.pp-table-scroll td {
  padding: 9px;
  border-bottom: 1px solid var(--border, rgba(148, 163, 184, .14));
  color: var(--text, #0f172a);
  text-align: left;
  vertical-align: middle;
  font-size: 12px;
}

.pp-table-scroll th {
  background: color-mix(in srgb, var(--pp-primary) 5%, var(--card, #fff));
  color: var(--muted, #64748b);
  font-size: 9px;
  font-weight: 1000;
  letter-spacing: .07em;
  text-transform: uppercase;
}

.pp-table-scroll td > strong,
.pp-table-scroll td > small {
  display: block;
}

.pp-table-scroll td > small {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 10px;
}

.pp-table-student {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.pp-table-student .pp-avatar {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  font-size: 15px;
}

.pp-table-student > span {
  min-width: 0;
}

.pp-table-student strong,
.pp-table-student small {
  display: block;
  max-width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pp-table-student strong {
  font-weight: 950;
}

.pp-table-student small {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 10px;
}

.pp-table-action {
  min-height: 31px;
  padding: 0 10px;
  border: 1px solid color-mix(in srgb, var(--pp-primary) 22%, var(--border, transparent));
  border-radius: 999px;
  background: color-mix(in srgb, var(--pp-primary) 8%, var(--card, #fff));
  color: var(--pp-primary);
  font-size: 10px;
  font-weight: 950;
  cursor: pointer;
}

.pp-summary-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0;
}

.pp-summary-list {
  display: grid;
  gap: 7px;
}

.pp-summary-row {
  padding: 10px;
  border: 1px solid var(--border, rgba(148, 163, 184, .16));
  border-radius: 15px;
  background: color-mix(in srgb, var(--muted, #64748b) 4%, var(--card, #fff));
}

.pp-summary-row-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.pp-summary-row-top strong {
  min-width: 0;
  overflow: hidden;
  color: var(--text, #0f172a);
  font-size: 12px;
  font-weight: 950;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pp-summary-row-top span {
  flex: 0 0 auto;
  color: var(--pp-primary);
  font-size: 12px;
  font-weight: 1000;
}

.pp-progress-track {
  height: 6px;
  margin-top: 8px;
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 12%, transparent);
}

.pp-progress-track div {
  height: 100%;
  border-radius: inherit;
  background: var(--pp-primary);
}

.pp-summary-row small {
  display: block;
  margin-top: 5px;
  color: var(--muted, #64748b);
  font-size: 9px;
  font-weight: 750;
}

.pp-layer,
.pp-drawer-layer {
  position: fixed;
  inset: 0;
  z-index: 90;
}

.pp-overlay,
.pp-drawer-overlay {
  position: absolute;
  inset: 0;
  border: 0;
  background: rgba(15, 23, 42, .54);
  backdrop-filter: blur(2px);
}

.pp-sheet {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: min(86dvh, 720px);
  overflow-y: auto;
  padding: 9px 12px max(14px, env(safe-area-inset-bottom));
  border-radius: 25px 25px 0 0;
  background: var(--card, var(--surface, #fff));
  color: var(--text, #0f172a);
  box-shadow: 0 -22px 64px rgba(15, 23, 42, .22);
}

.pp-sheet.compact {
  max-height: min(78dvh, 580px);
}

.pp-sheet-handle {
  width: 42px;
  height: 4px;
  margin: 0 auto 9px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 36%, transparent);
}

.pp-sheet-head,
.pp-drawer-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

.pp-sheet-head {
  padding-bottom: 10px;
}

.pp-sheet-head p,
.pp-sheet-head h2,
.pp-drawer-head p,
.pp-drawer-head h2 {
  margin: 0;
}

.pp-sheet-head p,
.pp-drawer-head p {
  color: var(--pp-primary);
  font-size: 9px;
  font-weight: 950;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.pp-sheet-head h2,
.pp-drawer-head h2 {
  margin-top: 2px;
  color: var(--text, #0f172a);
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.045em;
}

.pp-sheet-head > button,
.pp-drawer-head > button {
  width: 35px;
  height: 35px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border: 1px solid var(--border, rgba(148, 163, 184, .20));
  border-radius: 999px;
  background: color-mix(in srgb, var(--muted, #64748b) 7%, var(--card, #fff));
  color: var(--text, #0f172a);
  font-size: 20px;
  cursor: pointer;
}

.pp-form-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 8px;
}

.pp-form-grid label {
  display: grid;
  gap: 5px;
}

.pp-form-grid label > span {
  color: var(--muted, #64748b);
  font-size: 10px;
  font-weight: 900;
}

.pp-form-grid select {
  width: 100%;
  min-height: 43px;
  padding: 0 11px;
  border: 1px solid var(--input-border, var(--border, rgba(148, 163, 184, .24)));
  border-radius: 13px;
  outline: 0;
  background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #0f172a));
  font-weight: 800;
}

.pp-form-grid select:focus {
  border-color: var(--pp-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--pp-primary) 11%, transparent);
}

.pp-sheet-actions {
  position: sticky;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
  margin-top: 12px;
  padding-top: 9px;
  background: var(--card, var(--surface, #fff));
}

.pp-sheet-actions button {
  min-height: 43px;
  border-radius: 13px;
  font-weight: 950;
  cursor: pointer;
}

.pp-sheet-actions .secondary {
  border: 1px solid var(--border, rgba(148, 163, 184, .24));
  background: var(--card, var(--surface, #fff));
  color: var(--text, #0f172a);
}

.pp-sheet-actions .primary {
  border: 1px solid var(--pp-primary);
  background: var(--pp-primary);
  color: var(--pp-primary-text);
  box-shadow: 0 8px 18px color-mix(in srgb, var(--pp-primary) 25%, transparent);
}

.pp-menu-list {
  display: grid;
  gap: 7px;
}

.pp-menu-list > button {
  min-width: 0;
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr) 18px;
  align-items: center;
  gap: 9px;
  min-height: 61px;
  padding: 8px;
  border: 1px solid var(--border, rgba(148, 163, 184, .18));
  border-radius: 16px;
  background: var(--card, var(--surface, #fff));
  color: var(--text, #0f172a);
  text-align: left;
  cursor: pointer;
}

.pp-menu-list > button.active {
  border-color: color-mix(in srgb, var(--pp-primary) 45%, var(--border, transparent));
  background: color-mix(in srgb, var(--pp-primary) 8%, var(--card, #fff));
}

.pp-menu-list > button > span {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: color-mix(in srgb, var(--pp-primary) 10%, var(--card, #fff));
  color: var(--pp-primary);
  font-size: 18px;
}

.pp-menu-list > button div {
  min-width: 0;
}

.pp-menu-list > button strong,
.pp-menu-list > button small {
  display: block;
}

.pp-menu-list > button strong {
  color: var(--text, #0f172a);
  font-size: 12px;
  font-weight: 950;
}

.pp-menu-list > button small {
  margin-top: 2px;
  color: var(--muted, #64748b);
  font-size: 10px;
  line-height: 1.4;
}

.pp-menu-list > button > b {
  color: var(--muted, #64748b);
  font-size: 17px;
}

.pp-drawer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(94vw, 620px);
  max-width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 12px;
  background: var(--card, var(--surface, #fff));
  color: var(--text, #0f172a);
  box-shadow: -24px 0 70px rgba(15, 23, 42, .22);
}

.pp-drawer-head {
  position: sticky;
  top: 0;
  z-index: 3;
  padding: 3px 0 10px;
  background: var(--card, var(--surface, #fff));
}

.pp-profile-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--border, rgba(148, 163, 184, .18));
  border-radius: 21px;
  background:
    linear-gradient(
      135deg,
      color-mix(in srgb, var(--pp-primary) 10%, var(--card, #fff)),
      var(--card, #fff) 70%
    );
}

.pp-profile-card > div:last-child {
  min-width: 0;
}

.pp-profile-card h3,
.pp-profile-card p {
  margin: 0;
}

.pp-profile-card h3 {
  overflow: hidden;
  color: var(--text, #0f172a);
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.045em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pp-profile-card p {
  margin-top: 3px;
  color: var(--muted, #64748b);
  font-size: 11px;
  font-weight: 760;
}

.pp-chip-row {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.pp-detail-section {
  margin-top: 14px;
}

.pp-detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.pp-detail-grid article {
  min-width: 0;
  padding: 10px;
  border: 1px solid var(--border, rgba(148, 163, 184, .15));
  border-radius: 15px;
  background: color-mix(in srgb, var(--muted, #64748b) 5%, var(--card, #fff));
}

.pp-detail-grid span,
.pp-detail-grid strong {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pp-detail-grid span {
  color: var(--muted, #64748b);
  font-size: 9px;
  font-weight: 850;
  text-transform: uppercase;
}

.pp-detail-grid strong {
  margin-top: 4px;
  color: var(--text, #0f172a);
  font-size: 12px;
  font-weight: 950;
}

.pp-detail-list {
  overflow: hidden;
  border: 1px solid var(--border, rgba(148, 163, 184, .16));
  border-radius: 17px;
}

.pp-detail-list > div {
  min-width: 0;
  display: grid;
  grid-template-columns: minmax(110px, .65fr) minmax(0, 1fr);
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid var(--border, rgba(148, 163, 184, .13));
}

.pp-detail-list > div:last-child {
  border-bottom: 0;
}

.pp-detail-list span {
  color: var(--muted, #64748b);
  font-size: 10px;
  font-weight: 800;
}

.pp-detail-list strong {
  min-width: 0;
  overflow-wrap: anywhere;
  color: var(--text, #0f172a);
  font-size: 11px;
  font-weight: 950;
  text-align: right;
}

.pp-readonly-note {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  margin-top: 14px;
  padding: 11px;
  border: 1px solid color-mix(in srgb, var(--pp-primary) 18%, var(--border, transparent));
  border-radius: 16px;
  background: color-mix(in srgb, var(--pp-primary) 7%, var(--card, #fff));
}

.pp-readonly-note > span {
  flex: 0 0 auto;
  font-size: 18px;
}

.pp-readonly-note strong,
.pp-readonly-note p {
  display: block;
  margin: 0;
}

.pp-readonly-note strong {
  color: var(--text, #0f172a);
  font-size: 11px;
  font-weight: 950;
}

.pp-readonly-note p {
  margin-top: 3px;
  color: var(--muted, #64748b);
  font-size: 10px;
  line-height: 1.5;
}

.pp-toast {
  position: fixed;
  z-index: 120;
  right: 12px;
  bottom: max(14px, env(safe-area-inset-bottom));
  width: min(360px, calc(100vw - 24px));
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px;
  border: 1px solid var(--border, rgba(148, 163, 184, .20));
  border-radius: 15px;
  background: var(--card, var(--surface, #fff));
  box-shadow: 0 18px 48px rgba(15, 23, 42, .18);
}

.pp-toast > span {
  width: 29px;
  height: 29px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 10px;
  font-weight: 1000;
}

.pp-toast.success > span {
  background: rgba(34, 197, 94, .14);
  color: #16a34a;
}

.pp-toast.error > span {
  background: rgba(239, 68, 68, .14);
  color: #dc2626;
}

.pp-toast.info > span {
  background: rgba(59, 130, 246, .14);
  color: #2563eb;
}

.pp-toast p {
  margin: 0;
  color: var(--text, #0f172a);
  font-size: 11px;
  font-weight: 850;
  line-height: 1.4;
}

@media (min-width: 620px) {
  .pp-page {
    padding: 10px;
  }

  .pp-card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .pp-form-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .pp-summary-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .pp-summary-section {
    margin-top: 10px;
  }
}

@media (min-width: 980px) {
  .pp-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .pp-summary-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .pp-sheet {
    right: 12px;
    bottom: 12px;
    left: auto;
    width: min(520px, calc(100vw - 24px));
    max-height: min(86dvh, 720px);
    border-radius: 24px;
  }
}

@media (max-width: 420px) {
  .pp-page {
    padding: 6px;
  }

  .pp-action-strip {
    grid-template-columns: minmax(0, 1fr) 41px 41px;
    gap: 5px;
    padding: 5px;
    border-radius: 17px;
  }

  .pp-filter-button,
  .pp-more-button {
    width: 41px;
    height: 41px;
    border-radius: 13px;
  }

  .pp-search-box {
    min-height: 41px;
    padding: 0 8px;
    border-radius: 13px;
  }

  .pp-child-card {
    padding: 8px;
    border-radius: 17px;
  }

  .pp-avatar {
    width: 43px;
    height: 43px;
    border-radius: 14px;
  }

  .pp-detail-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pp-page *,
  .pp-page *::before,
  .pp-page *::after {
    scroll-behavior: auto !important;
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
`;var S=c(73142),T=c.n(S),U=c(47911),V=c(96157);let W=a=>null==a?"":String(a).trim(),X=(a,b)=>W(a)===W(b);function Y(...a){for(let b of a){let a=W(b);if(a&&"0"!==a)return a}return""}function Z(a){let b=new Date(`${a}T00:00:00`);return Number.isNaN(b.getTime())?null:b}function $(a,b){let c=Z(a);return c?new Intl.DateTimeFormat("en",{day:"2-digit",month:"short",year:"numeric",...b}).format(c):a||"—"}function _(a){return String(a||"").replaceAll("_"," ").replace(/\b\w/g,a=>a.toUpperCase())}function aa(a){return"present"===a?"positive":"absent"===a||"suspended"===a?"negative":"late"===a?"warning":["excused","medical","sports","trip","remote"].includes(a)?"info":"neutral"}let ab=`
  .attendance-page{--surface:var(--card-background,#fff);--border:var(--border-color,#e5e7eb);--text:var(--text-color,#111827);--muted:var(--muted-color,#6b7280);--soft:var(--soft-background,#f8fafc);min-height:100%;color:var(--text);padding:10px 12px 34px;background:var(--page-background,transparent)}
  .loading-page,.empty-page{display:grid;place-items:center;align-content:center;gap:10px;min-height:55vh;text-align:center}.spinner{width:28px;height:28px;border:3px solid var(--border);border-top-color:var(--primary);border-radius:50%;animation:spin .8s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}
  .toolbar{display:grid;grid-template-columns:minmax(0,1fr) 40px 40px;gap:7px;position:sticky;top:0;z-index:15;padding:4px 0 10px;background:var(--page-background,var(--surface))}.search-box{height:40px;display:flex;align-items:center;gap:8px;padding:0 10px;border:1px solid var(--border);border-radius:12px;background:var(--surface)}.search-box input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:13px}.search-icon{font-size:21px;color:var(--muted)}.clear-search{border:0;background:transparent;color:var(--muted);font-size:20px}.icon-button{position:relative;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font-size:21px;cursor:pointer}.icon-button.active{border-color:var(--primary);color:var(--primary)}.button-badge{position:absolute;right:-4px;top:-5px;min-width:17px;height:17px;padding:0 4px;display:grid;place-items:center;border-radius:10px;background:var(--primary);color:#fff;font-size:9px;font-weight:800}
  .child-strip{display:flex;gap:7px;overflow:auto;padding:1px 0 9px;scrollbar-width:none}.child-strip::-webkit-scrollbar{display:none}.child-chip{flex:0 0 auto;display:flex;align-items:center;gap:7px;padding:6px 9px 6px 6px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);text-align:left}.child-chip.selected{border-color:var(--primary);box-shadow:0 0 0 1px color-mix(in srgb,var(--primary) 25%,transparent)}.child-chip strong,.child-chip small{display:block}.child-chip strong{font-size:11px}.child-chip small{font-size:9px;color:var(--muted);margin-top:1px}.mini-avatar{width:28px;height:28px;border-radius:9px;display:grid;place-items:center;overflow:hidden;background:color-mix(in srgb,var(--primary) 13%,var(--soft));color:var(--primary);font-size:12px;font-weight:800}.mini-avatar img,.child-avatar img{width:100%;height:100%;object-fit:cover}
  .child-header{display:grid;grid-template-columns:52px minmax(0,1fr) auto;align-items:center;gap:10px;padding:12px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}.child-avatar{width:52px;height:52px;border-radius:15px;display:grid;place-items:center;overflow:hidden;background:color-mix(in srgb,var(--primary) 14%,var(--soft));color:var(--primary);font-size:20px;font-weight:900}.child-copy{min-width:0}.child-name-row{display:flex;align-items:center;gap:7px}.child-copy h1{margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:15px}.child-copy p{margin:3px 0 0;color:var(--muted);font-size:10px}.context-line{display:flex;align-items:center;gap:5px;margin-top:5px;color:var(--muted);font-size:9px}.context-line i{font-style:normal}.sync-dot{width:8px;height:8px;padding:0;border:0;border-radius:50%;background:#22c55e;box-shadow:0 0 0 3px color-mix(in srgb,#22c55e 15%,transparent)}.rate-ring{width:60px;height:60px;border-radius:50%;display:grid;place-content:center;text-align:center;border:5px solid #d1d5db;background:var(--surface)}.rate-ring.good{border-color:#22c55e}.rate-ring.fair{border-color:#f59e0b}.rate-ring.low{border-color:#ef4444}.rate-ring strong{font-size:14px}.rate-ring small{font-size:7px;color:var(--muted)}
  .summary-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px;margin:8px 0}.summary-card{display:flex;align-items:center;gap:7px;min-width:0;padding:9px;border:1px solid var(--border);border-radius:13px;background:var(--surface)}.summary-mark{width:26px;height:26px;flex:0 0 auto;display:grid;place-items:center;border-radius:8px;font-weight:900}.positive{background:color-mix(in srgb,#22c55e 13%,var(--surface));color:#15803d}.negative{background:color-mix(in srgb,#ef4444 13%,var(--surface));color:#dc2626}.warning{background:color-mix(in srgb,#f59e0b 15%,var(--surface));color:#b45309}.info{background:color-mix(in srgb,#3b82f6 13%,var(--surface));color:#2563eb}.neutral{background:var(--soft);color:var(--muted)}.summary-card strong,.summary-card small{display:block}.summary-card strong{font-size:14px}.summary-card small{font-size:8px;color:var(--muted);white-space:nowrap}
  .attendance-list{display:grid;gap:7px}.attendance-card{display:flex;gap:9px;padding:10px;border:1px solid var(--border);border-radius:14px;background:var(--surface)}.status-symbol{width:34px;height:34px;flex:0 0 auto;display:grid;place-items:center;border-radius:10px;font-size:16px;font-weight:900}.attendance-main{flex:1;min-width:0}.attendance-topline{display:flex;justify-content:space-between;align-items:center;gap:8px}.attendance-topline strong{font-size:12px}.status-pill{display:inline-flex;align-items:center;justify-content:center;padding:3px 7px;border-radius:999px;font-size:8px;font-weight:800;white-space:nowrap}.attendance-main p{margin:4px 0 0;font-size:9px;color:var(--muted)}.attendance-note{display:block;margin-top:6px;padding-top:6px;border-top:1px dashed var(--border);font-size:9px;color:var(--text)}
  .table-shell{overflow:hidden;border:1px solid var(--border);border-radius:14px;background:var(--surface)}.table-title{padding:10px 12px;border-bottom:1px solid var(--border);font-size:11px}.table-scroll{overflow:auto}table{width:100%;border-collapse:collapse;min-width:570px}th,td{padding:9px 11px;border-bottom:1px solid var(--border);text-align:left;font-size:10px}th{position:sticky;top:0;background:var(--soft);color:var(--muted);font-size:9px;text-transform:uppercase;letter-spacing:.04em}tbody tr:last-child td{border-bottom:0}
  .analytics-view{display:grid;gap:8px}.analytics-card{padding:12px;border:1px solid var(--border);border-radius:15px;background:var(--surface)}.overview-card{display:flex;align-items:center;justify-content:space-between}.overview-card span,.overview-card strong,.overview-card small{display:block}.overview-card span{font-size:10px;color:var(--muted)}.overview-card strong{margin-top:2px;font-size:25px}.overview-card small{font-size:9px;color:var(--muted)}.donut{width:76px;height:76px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--primary) var(--value),var(--border) 0);position:relative}.donut:after{content:"";position:absolute;inset:8px;border-radius:50%;background:var(--surface)}.donut span{position:relative;z-index:1;font-size:12px;font-weight:900}.section-heading strong,.section-heading small{display:block}.section-heading strong{font-size:12px}.section-heading small{margin-top:2px;font-size:9px;color:var(--muted)}.month-list{display:grid;gap:11px;margin-top:13px}.month-row{display:grid;grid-template-columns:105px minmax(80px,1fr) 34px;align-items:center;gap:9px}.month-row strong,.month-row small{display:block}.month-row strong{font-size:10px}.month-row small{font-size:8px;color:var(--muted);margin-top:2px}.month-progress{height:6px;border-radius:10px;background:var(--border);overflow:hidden}.month-progress span{display:block;height:100%;border-radius:inherit;background:var(--primary)}.month-row b{font-size:10px;text-align:right}.note-card strong{font-size:11px}.note-card p{margin:6px 0 0;font-size:10px;line-height:1.55;color:var(--muted)}.muted-empty{margin:13px 0 0;color:var(--muted);font-size:10px}
  .empty-state{display:grid;justify-items:center;text-align:center;padding:44px 18px;border:1px dashed var(--border);border-radius:16px;background:var(--surface)}.compact-empty{margin-top:8px}.empty-icon{width:42px;height:42px;display:grid;place-items:center;border-radius:13px;background:color-mix(in srgb,var(--primary) 11%,var(--soft));color:var(--primary);font-size:20px;font-weight:900}.empty-state h2,.empty-page h2{margin:10px 0 3px;font-size:14px}.empty-state p,.empty-page p{max-width:380px;margin:0;color:var(--muted);font-size:10px;line-height:1.55}
  .sheet-layer{position:fixed;inset:0;z-index:1000;display:flex;justify-content:flex-end;background:rgba(15,23,42,.38);backdrop-filter:blur(2px)}.sheet{width:min(410px,94vw);height:100%;display:flex;flex-direction:column;background:var(--surface);box-shadow:-16px 0 40px rgba(0,0,0,.16)}.short-sheet{height:auto;max-height:78vh;align-self:flex-end;border-radius:20px 0 0 0}.sheet-head{display:flex;align-items:center;justify-content:space-between;padding:15px;border-bottom:1px solid var(--border)}.sheet-head strong,.sheet-head small{display:block}.sheet-head strong{font-size:13px}.sheet-head small{margin-top:2px;font-size:9px;color:var(--muted)}.sheet-head button{width:32px;height:32px;border:1px solid var(--border);border-radius:10px;background:var(--soft);color:var(--text);font-size:19px}.sheet-body{flex:1;overflow:auto;display:grid;align-content:start;gap:12px;padding:15px}.sheet-body label>span{display:block;margin-bottom:5px;color:var(--muted);font-size:9px;font-weight:700}.sheet-body input,.sheet-body select{width:100%;height:40px;padding:0 10px;border:1px solid var(--border);border-radius:11px;outline:0;background:var(--surface);color:var(--text);font:inherit;font-size:11px}.sheet-body input:focus,.sheet-body select:focus{border-color:var(--primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 12%,transparent)}.two-column{display:grid;grid-template-columns:1fr 1fr;gap:9px}.sheet-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:12px 15px;border-top:1px solid var(--border)}.primary-button,.secondary-button{height:39px;border-radius:11px;font-weight:800;font-size:10px}.primary-button{border:1px solid var(--primary);background:var(--primary);color:#fff}.secondary-button{border:1px solid var(--border);background:var(--surface);color:var(--text)}.empty-state .primary-button{margin-top:12px;padding:0 16px}
  .view-options{display:grid;gap:7px;padding:12px}.view-options button{display:grid;grid-template-columns:34px minmax(0,1fr) 20px;align-items:center;gap:9px;padding:10px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);text-align:left}.view-options button.selected{border-color:var(--primary);background:color-mix(in srgb,var(--primary) 6%,var(--surface))}.view-options button>span{width:34px;height:34px;display:grid;place-items:center;border-radius:10px;background:var(--soft);font-size:17px}.view-options strong,.view-options small{display:block}.view-options strong{font-size:11px}.view-options small{margin-top:2px;font-size:9px;color:var(--muted)}.view-options b{color:var(--primary)}.status-panel{display:flex;gap:11px;padding:16px}.large-dot{width:14px;height:14px;flex:0 0 auto;margin-top:2px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 5px color-mix(in srgb,#22c55e 14%,transparent)}.status-panel strong{font-size:11px}.status-panel p{margin:5px 0 0;color:var(--muted);font-size:9px;line-height:1.55}
  @media(max-width:700px){.summary-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.short-sheet{width:100%;border-radius:20px 20px 0 0}.sheet-layer{align-items:flex-end}.child-header{grid-template-columns:48px minmax(0,1fr) auto}.child-avatar{width:48px;height:48px}.rate-ring{width:54px;height:54px}.attendance-page{padding-inline:9px}.month-row{grid-template-columns:90px minmax(70px,1fr) 32px}}
  @media(min-width:900px){.attendance-page{max-width:1120px;margin:0 auto;padding-top:14px}.attendance-list{grid-template-columns:repeat(2,minmax(0,1fr))}.summary-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.analytics-view{grid-template-columns:1fr 1fr}.overview-card,.note-card{grid-column:span 1}.sheet{width:430px}.short-sheet{height:100%;max-height:none;align-self:stretch;border-radius:0}}
`;var ac=c(28505),ad=c(18169),ae=c(99867),af=c(69417),ag=c(71888);let ah=ad.A;function ai(a){return a?.reportType==="student_report"||!a?.reportType}let aj="student-report-print-zone",ak=String(ac.$S.STUDENTS||"students"),al=String(ac.$S.SCHOOLS||"schools"),am=String(ac.$S.BRANCHES||"branches"),an=String(ac.$S.SCHOOL_BRANCH_SETTINGS||ac.$S.SCHOOL_BRANCHES_SETTINGS||"schoolBranchSettings"),ao=String(ac.Vq.PHOTO||"photo"),ap=String(ac.Vq.LOGO||"logo");function aq(a,b,c){let d;return!a||c&&a&&Object.prototype.hasOwnProperty.call(a,c)&&!ar(a[c])?"":!(d=String(a[b]||""))||d.startsWith("blob:")||d.startsWith("data:image/")?"":d}function ar(a){if(null==a)return"";let b=String(a).trim();return b&&"0"!==b&&"undefined"!==b&&"null"!==b?b:""}String(ac.Vq.BANNER||"bannerImage");function as(...a){for(let b of a){let a=ar(b);if(a)return a}return""}function at(a,b){let c=ar(b);return c?a.find(a=>ar(a.id)===c)?.name||"Not found":"Not selected"}function au({primary:a,title:b,text:c}){return(0,d.jsxs)("main",{className:"ba-page",style:{"--ba-primary":a,"--primary-color":a},children:[(0,d.jsx)("style",{children:az}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("div",{className:"ba-spinner"}),(0,d.jsx)("h2",{children:b}),(0,d.jsx)("p",{children:c})]})]})}function av({icon:a,title:b,text:c}){return(0,d.jsxs)("section",{className:"ba-empty",children:[(0,d.jsx)("div",{className:"ba-empty-icon",children:a}),(0,d.jsx)("h3",{children:b}),(0,d.jsx)("p",{children:c})]})}function aw(){return(0,d.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,d.jsx)("path",{d:"M4 7h9"}),(0,d.jsx)("path",{d:"M17 7h3"}),(0,d.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,d.jsx)("path",{d:"M4 17h3"}),(0,d.jsx)("path",{d:"M11 17h9"}),(0,d.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function ax({mode:a,filters:b,academicStructures:c,academicPeriods:e,filteredClasses:f,filteredClassSubjects:g,filteredStudents:h,setMode:i,setFilters:j,onClose:k}){return(0,d.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Filters"}),(0,d.jsx)("p",{children:"Choose the report scope. Branch stays locked to the assigned branch."})]}),(0,d.jsx)("button",{type:"button",onClick:k,"aria-label":"Close filters",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-form compact",children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Report Mode"}),(0,d.jsxs)("select",{value:a,onChange:a=>i(a.target.value),children:[(0,d.jsx)("option",{value:"student-report",children:"Single Student Report"}),(0,d.jsx)("option",{value:"class-reports",children:"All Children Reports"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Structure"}),(0,d.jsxs)("select",{value:b.academicStructureId||"",onChange:a=>j(b=>({...b,academicStructureId:ar(a.target.value)||void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select structure"}),c.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Period"}),(0,d.jsxs)("select",{value:b.academicPeriodId||"",onChange:a=>j(b=>({...b,academicPeriodId:ar(a.target.value)||void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select period"}),e.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class"}),(0,d.jsxs)("select",{value:b.classId||"",onChange:a=>j(b=>({...b,classId:ar(a.target.value)||void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select class"}),f.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class Subject"}),(0,d.jsxs)("select",{value:b.classSubjectId||"",onChange:a=>j(b=>({...b,classSubjectId:ar(a.target.value)||void 0})),children:[(0,d.jsx)("option",{value:"",children:"All subjects"}),g.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name||`Subject ${a.subjectId||""}`},a.id))]})]}),"student-report"===a&&(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Student"}),(0,d.jsxs)("select",{value:b.studentId||"",onChange:a=>j(b=>({...b,studentId:ar(a.target.value)||void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select student"}),h.map(a=>(0,d.jsx)("option",{value:a.id,children:a.fullName||a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Sort Mode"}),(0,d.jsxs)("select",{value:b.sortMode||"position",onChange:a=>j(b=>({...b,sortMode:a.target.value})),children:[(0,d.jsx)("option",{value:"position",children:"Position"}),(0,d.jsx)("option",{value:"name",children:"Name"}),(0,d.jsx)("option",{value:"score",children:"Score"})]})]})]}),(0,d.jsxs)("div",{className:"ba-sheet-actions",children:[(0,d.jsx)("button",{type:"button",onClick:()=>j(a=>({...a,academicStructureId:void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"})),children:"Clear"}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:k,children:"Apply"})]})]})})}function ay({onRefresh:a,onPrint:b,onClose:c}){return(0,d.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet small",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"More"}),(0,d.jsx)("p",{children:"Quick report actions only."})]}),(0,d.jsx)("button",{type:"button",onClick:c,"aria-label":"Close menu",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-menu-list",children:[(0,d.jsxs)("button",{type:"button",onClick:b,children:[(0,d.jsx)("span",{children:"⎙"}),(0,d.jsx)("b",{children:"Print report"}),(0,d.jsx)("small",{children:"Print the current preview output"})]}),(0,d.jsxs)("button",{type:"button",onClick:a,children:[(0,d.jsx)("span",{children:"↻"}),(0,d.jsx)("b",{children:"Refresh"}),(0,d.jsx)("small",{children:"Reload local branch report records"})]})]})]})})}let az=`
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

/* My Child Reports golden additions */

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

`;var aA=c(15096),aB=c(51069),aC=c(90490),aD=c(63607),aE=c(41490),aF=c(96747),aG=c(66169),aH=c(55264),aI=c(26277);function aJ(a,b,c){let d=String(a.code||a.templateCode||a.layoutKey||a.key||"").trim();return{name:a.name||a.templateName||("cumulative_transcript"===c?"Cumulative Transcript Classic":"Classic Formal"),code:d||("cumulative_transcript"===c?"cumulative_transcript_classic":"classic_formal"),templateCode:d||("cumulative_transcript"===c?"cumulative_transcript_classic":"classic_formal"),layoutKey:a.layoutKey||d||("cumulative_transcript"===c?"cumulative_transcript_classic":"classic_formal"),templateKey:a.templateKey||a.layoutKey||d,reportType:c,orientation:a.orientation||"portrait",paperSize:a.paperSize||"A4",density:a.density||"compact",description:a.description||"Built-in report template.",active:!1!==a.active,isDefault:!0===a.isDefault||0===b}}function aK(a){let b=String(a.reportType||"student_report").trim(),c=String(a.code||a.templateCode||a.layoutKey||a.templateKey||a.name||a.id||"").trim();return`${b}:${c}`}let aL=String(ac.$S.SCHOOLS||"schools"),aM=String(ac.$S.BRANCHES||"branches"),aN=String(ac.$S.SCHOOL_BRANCH_SETTINGS||ac.$S.SCHOOL_BRANCHES_SETTINGS||"schoolBranchSettings"),aO=String(ac.$S.STUDENTS||"students"),aP=String(ac.Vq.LOGO||"logo"),aQ=String(ac.Vq.PHOTO||"photo");function aR(a,b,c){let d;return!a||c&&a&&Object.prototype.hasOwnProperty.call(a,c)&&!aX(a[c])?"":!(d=String(a[b]||""))||d.startsWith("blob:")||d.startsWith("data:image/")?"":d}function aS(...a){for(let b of a){let a=String(b||"").trim();if(a)return a}return""}let aT=(a,b=1)=>null==a||Number.isNaN(a)?"0":Number(a).toFixed(b),aU=a=>"up"===a?"Improving":"down"===a?"Declining":"stable"===a?"Stable":"-",aV={"student-transcript":"Cumulative Transcript","cumulative-book":"Cumulative Report Book","multi-period-report":"Multi-Period Report","annual-broadsheet":"Annual Broadsheet","subject-history":"Subject History","promotion-summary":"Promotion Summary","progression-timeline":"Progression Timeline"};function aW(a,b){if(!b)return"Not selected";let c=a.find(a=>a.id===b);return c?.name||c?.fullName||"Not found"}function aX(a){return null==a?"":String(a).trim()}function aY(a,b){let c=aX(a),d=aX(b);return!!c&&!!d&&c===d}function aZ(...a){for(let b of a){let a=aX(b);if(a)return a}return""}function a$(a,b){return!b||!a||a===b}function a_(a){return!a.isDeleted&&!1!==a.active&&"withdrawn"!==a.status}function a0(a){return String(a?.code||a?.templateCode||a?.layoutKey||a?.templateKey||"").trim()}function a1(a){return String(a?.reportType||"student_report").trim()}function a2(a){return!a.isDeleted&&!1!==a.active}function a3(a,b,c,d){return a$(a.accountId,b)&&(!a.schoolId||aY(a.schoolId,c))&&(!a.branchId||aY(a.branchId,d))&&!a.isDeleted}function a4(a,b){let c=a.filter(a=>a2(a)&&a1(a)===b);return c.find(a=>a.isDefault)||c[0]}function a5(a,b,c){let d=a.filter(a=>!!a2(a)&&a1(a)===b&&(!a.scopeType||"branch"===a.scopeType)&&(!a.scopeId||!c||!!aY(a.scopeId,c)));return d.find(a=>a.isDefault)||d[0]}function a6(a,b){if(!b)return;let c=aX(b.templateId),d=a0(b);return a.find(a=>c&&aX(a.id)===c&&a2(a))||a.find(a=>d&&a0(a)===d&&a2(a))}function a7(a,b,c,d){let e=aX(b?.templateSettingsId),f=aX(c?.id||b?.templateId),g=a0(c)||a0(b);return a.find(a=>e&&aX(a.id)===e&&a2(a))||a.find(a=>f&&aX(a.templateId)===f&&a2(a))||a.find(a=>g&&a0(a)===g&&(!d||a1(a)===d)&&a2(a))}function a8({primary:a,title:b,text:c}){return(0,d.jsxs)("main",{className:"ba-page cumulative-page",style:{"--ba-primary":a},children:[(0,d.jsx)("style",{children:bd}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("div",{className:"ba-spinner"}),(0,d.jsx)("h2",{children:b}),(0,d.jsx)("p",{children:c})]})]})}function a9(){return(0,d.jsxs)("svg",{className:"ba-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,d.jsx)("path",{d:"M4 7h9"}),(0,d.jsx)("path",{d:"M17 7h3"}),(0,d.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,d.jsx)("path",{d:"M4 17h3"}),(0,d.jsx)("path",{d:"M11 17h9"}),(0,d.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function ba({filters:a,setBranchLockedFilters:b,academicStructures:c,academicPeriods:e,classes:f,students:g,subjects:h,onClose:i}){let j=e.filter(b=>!a.academicStructureId||b.academicStructureId===a.academicStructureId),k=g.filter(b=>!a.classId||b.currentClassId===a.classId);return(0,d.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Filters"}),(0,d.jsx)("p",{children:"Choose a linked child, historical period, subject, or record type. School and branch stay locked."})]}),(0,d.jsx)("button",{type:"button",onClick:i,"aria-label":"Close filters",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-form compact",children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Structure"}),(0,d.jsxs)("select",{value:a.academicStructureId||"",onChange:a=>b(b=>({...b,academicStructureId:aX(a.target.value)||void 0,academicPeriodId:void 0,fromAcademicPeriodId:void 0,toAcademicPeriodId:void 0,classId:void 0,studentId:void 0,subjectId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"All structures"}),c.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Period"}),(0,d.jsxs)("select",{value:a.academicPeriodId||"",onChange:a=>b(b=>({...b,academicPeriodId:aX(a.target.value)||void 0,classId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"All periods"}),j.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"From Period"}),(0,d.jsxs)("select",{value:a.fromAcademicPeriodId||"",onChange:a=>b(b=>({...b,fromAcademicPeriodId:aX(a.target.value)||void 0})),children:[(0,d.jsx)("option",{value:"",children:"No start period"}),j.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"To Period"}),(0,d.jsxs)("select",{value:a.toAcademicPeriodId||"",onChange:a=>b(b=>({...b,toAcademicPeriodId:aX(a.target.value)||void 0})),children:[(0,d.jsx)("option",{value:"",children:"No end period"}),j.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class"}),(0,d.jsxs)("select",{value:a.classId||"",onChange:a=>b(b=>({...b,classId:aX(a.target.value)||void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"All classes"}),f.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Student"}),(0,d.jsxs)("select",{value:a.studentId||"",onChange:a=>b(b=>({...b,studentId:aX(a.target.value)||void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select student"}),k.map(a=>(0,d.jsxs)("option",{value:a.id,children:[a.fullName,a.admissionNumber?` (${a.admissionNumber})`:""]},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Subject"}),(0,d.jsxs)("select",{value:a.subjectId||"",onChange:a=>b(b=>({...b,subjectId:aX(a.target.value)||void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select subject"}),h.map(a=>(0,d.jsxs)("option",{value:a.id,children:[a.name,a.code?` (${a.code})`:""]},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Snapshot Type"}),(0,d.jsxs)("select",{value:a.snapshotType,onChange:a=>b(b=>({...b,snapshotType:a.target.value})),children:[(0,d.jsx)("option",{value:"all",children:"All snapshots"}),(0,d.jsx)("option",{value:"terminal",children:"Terminal snapshots"}),(0,d.jsx)("option",{value:"promotion",children:"Promotion snapshots"}),(0,d.jsx)("option",{value:"manual",children:"Manual snapshots"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Decision"}),(0,d.jsxs)("select",{value:a.decision||"all",onChange:a=>b(b=>({...b,decision:a.target.value})),children:[(0,d.jsx)("option",{value:"all",children:"All decisions"}),(0,d.jsx)("option",{value:"promote",children:"Promote"}),(0,d.jsx)("option",{value:"repeat",children:"Repeat"}),(0,d.jsx)("option",{value:"graduate",children:"Graduate"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Sort Mode"}),(0,d.jsxs)("select",{value:a.sortMode,onChange:a=>b(b=>({...b,sortMode:a.target.value})),children:[(0,d.jsx)("option",{value:"position",children:"Sort by position"}),(0,d.jsx)("option",{value:"alphabetical",children:"Sort alphabetically"}),(0,d.jsx)("option",{value:"average",children:"Sort by average"}),(0,d.jsx)("option",{value:"admission-number",children:"Sort by admission no."})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Grouping"}),(0,d.jsxs)("select",{value:a.groupingMode,onChange:a=>b(b=>({...b,groupingMode:a.target.value})),children:[(0,d.jsx)("option",{value:"academic-structure",children:"Academic structure"}),(0,d.jsx)("option",{value:"class",children:"Class"}),(0,d.jsx)("option",{value:"period",children:"Period"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Subject Aggregation"}),(0,d.jsxs)("select",{value:a.subjectAggregationMode,onChange:a=>b(b=>({...b,subjectAggregationMode:a.target.value})),children:[(0,d.jsx)("option",{value:"average",children:"Average"}),(0,d.jsx)("option",{value:"latest",children:"Latest score"}),(0,d.jsx)("option",{value:"best",children:"Best score"}),(0,d.jsx)("option",{value:"weighted-average",children:"Weighted average"})]})]})]}),(0,d.jsxs)("div",{className:"cumulative-toggle-grid",children:[(0,d.jsxs)("button",{type:"button",className:a.includeTerminalSnapshots?"active":"",onClick:()=>b(a=>({...a,includeTerminalSnapshots:!a.includeTerminalSnapshots})),children:["Terminal: ",a.includeTerminalSnapshots?"On":"Off"]}),(0,d.jsxs)("button",{type:"button",className:a.includePromotionRecords?"active":"",onClick:()=>b(a=>({...a,includePromotionRecords:!a.includePromotionRecords})),children:["Promotions: ",a.includePromotionRecords?"On":"Off"]}),(0,d.jsxs)("button",{type:"button",className:a.includeManualSnapshots?"active":"",onClick:()=>b(a=>({...a,includeManualSnapshots:!a.includeManualSnapshots})),children:["Manual: ",a.includeManualSnapshots?"On":"Off"]}),(0,d.jsxs)("button",{type:"button",className:a.includeDeletedSnapshots?"active":"",onClick:()=>b(a=>({...a,includeDeletedSnapshots:!a.includeDeletedSnapshots})),children:["Deleted: ",a.includeDeletedSnapshots?"On":"Off"]})]}),(0,d.jsxs)("div",{className:"ba-sheet-actions",children:[(0,d.jsx)("button",{type:"button",onClick:()=>b(a=>({...a,academicStructureId:void 0,academicPeriodId:void 0,fromAcademicPeriodId:void 0,toAcademicPeriodId:void 0,classId:void 0,studentId:void 0,subjectId:void 0,snapshotType:"all",decision:"all",sortMode:"position",groupingMode:"academic-structure",subjectAggregationMode:"average",includePromotionRecords:!0,includeManualSnapshots:!0,includeTerminalSnapshots:!0,includeDeletedSnapshots:!1})),children:"Clear"}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:i,children:"Apply"})]})]})})}function bb({mode:a,setMode:b,onRefresh:c,onPrint:e,onClose:f}){return(0,d.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet small",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"More"}),(0,d.jsx)("p",{children:"Choose output mode or run quick actions."})]}),(0,d.jsx)("button",{type:"button",onClick:f,"aria-label":"Close menu",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-menu-list",children:[[{mode:"student-transcript",icon:"\uD83D\uDCC4",label:"Cumulative Transcript",note:"Template-based academic transcript"},{mode:"cumulative-book",icon:"\uD83D\uDCD8",label:"Cumulative Report Book",note:"Covers plus period report cards"},{mode:"multi-period-report",icon:"\uD83D\uDCDA",label:"Multi-Period Report",note:"Student performance across periods"},{mode:"annual-broadsheet",icon:"☷",label:"Annual Broadsheet",note:"Class or school annual broadsheet"},{mode:"subject-history",icon:"\uD83D\uDCC8",label:"Subject History",note:"Longitudinal subject analytics"},{mode:"promotion-summary",icon:"\uD83C\uDF93",label:"Promotion Summary",note:"Promotion decision summary"},{mode:"progression-timeline",icon:"⏱",label:"Progression Timeline",note:"Student academic timeline"}].map(c=>(0,d.jsxs)("button",{type:"button",className:a===c.mode?"active":"",onClick:()=>b(c.mode),children:[(0,d.jsx)("span",{children:c.icon}),(0,d.jsx)("b",{children:c.label}),(0,d.jsx)("small",{children:c.note})]},c.mode)),(0,d.jsxs)("button",{type:"button",onClick:e,children:[(0,d.jsx)("span",{children:"⎙"}),(0,d.jsx)("b",{children:"Print current view"}),(0,d.jsx)("small",{children:"Print the selected cumulative output"})]}),(0,d.jsxs)("button",{type:"button",onClick:c,children:[(0,d.jsx)("span",{children:"↻"}),(0,d.jsx)("b",{children:"Refresh"}),(0,d.jsx)("small",{children:"Reload my child's cumulative records"})]})]})]})})}function bc({primary:a,schoolName:b,label:c}){return(0,d.jsxs)("div",{style:{marginTop:10,borderTop:`2px solid ${a}`,paddingTop:5,display:"flex",justifyContent:"space-between",fontSize:8.5,color:"#555"},children:[(0,d.jsxs)("span",{children:[c," generated for ",b]}),(0,d.jsx)("span",{children:"Powered by Eleeveon School Management System"})]})}let bd=`
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

`;var be=c(84884);function bf(a){return null==a?"":"object"==typeof a?String(a.id??a.localId??a.cloudId??"").trim():String(a).trim()}function bg(...a){for(let b of a){let a=bf(b);if(a&&"0"!==a)return a}return""}function bh(a,b){let c=bf(a),d=bf(b);return!!(c&&d&&c===d)}function bi(a){let b=Number(a||0);return Number.isFinite(b)?b:0}function bj(a,b=""){return String(a||"").trim()||b}function bk(a){return bj(a?.fullName||a?.name||a?.title,"Unnamed")}function bl(a,b="GHS"){try{return new Intl.NumberFormat(void 0,{style:"currency",currency:b||"GHS",maximumFractionDigits:2}).format(bi(a))}catch{return`${b||"GHS"} ${bi(a).toLocaleString()}`}}function bm(a){if(!a)return"Not set";let b=new Date(a);return Number.isNaN(b.getTime())?"Not set":new Intl.DateTimeFormat(void 0,{day:"2-digit",month:"short",year:"numeric"}).format(b)}function bn(a){return bj(a,"issued").replaceAll("_"," ").replace(/\b\w/g,a=>a.toUpperCase())}function bo(a){let b=String(a||"").toLowerCase();return["paid","success","succeeded"].includes(b)?"green":["overdue","failed","cancelled","reversed"].includes(b)?"red":["part_paid","pending","processing"].includes(b)?"orange":["issued","draft"].includes(b)?"blue":"gray"}function bp({children:a,tone:b="gray"}){return(0,d.jsx)("span",{className:`cf-chip ${b}`,children:a})}function bq(){return(0,d.jsxs)("svg",{className:"cf-slider-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[(0,d.jsx)("path",{d:"M4 7h9"}),(0,d.jsx)("path",{d:"M17 7h3"}),(0,d.jsx)("circle",{cx:"15",cy:"7",r:"2"}),(0,d.jsx)("path",{d:"M4 17h3"}),(0,d.jsx)("path",{d:"M11 17h9"}),(0,d.jsx)("circle",{cx:"9",cy:"17",r:"2"})]})}function br({title:a,body:b}){return(0,d.jsxs)("section",{className:"cf-empty",children:[(0,d.jsx)("div",{children:"₵"}),(0,d.jsx)("h3",{children:a}),(0,d.jsx)("p",{children:b})]})}let bs=`
  .cf-page{--surface:var(--card-background,#fff);--border:var(--border-color,#e5e7eb);--text:var(--text-color,#111827);--muted:var(--muted-color,#6b7280);--soft:var(--soft-background,#f8fafc);min-height:100%;padding:10px 12px 34px;color:var(--text);background:var(--page-background,transparent)}
  .cf-loading,.cf-state{min-height:55vh;display:grid;place-items:center;align-content:center;gap:10px;text-align:center}.cf-spinner{width:28px;height:28px;border:3px solid var(--border);border-top-color:var(--primary);border-radius:50%;animation:cf-spin .8s linear infinite}@keyframes cf-spin{to{transform:rotate(360deg)}}.cf-state-icon{width:44px;height:44px;display:grid;place-items:center;border-radius:14px;background:color-mix(in srgb,var(--primary) 12%,var(--soft));color:var(--primary);font-weight:900;font-size:20px}.cf-state h2{margin:5px 0 0;font-size:15px}.cf-state p{margin:0;color:var(--muted);font-size:10px}
  .cf-toolbar{position:sticky;top:0;z-index:20;display:grid;grid-template-columns:minmax(0,1fr) 40px 40px;gap:7px;padding:4px 0 10px;background:var(--page-background,var(--surface))}.cf-search{height:40px;display:flex;align-items:center;gap:8px;padding:0 10px;border:1px solid var(--border);border-radius:12px;background:var(--surface)}.cf-search>span{font-size:21px;color:var(--muted)}.cf-search input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:var(--text);font:inherit;font-size:12px}.cf-search button{border:0;background:transparent;color:var(--muted);font-size:19px}.cf-icon-btn{position:relative;display:grid;place-items:center;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);font-size:21px}.cf-icon-btn.active{border-color:var(--primary);color:var(--primary)}.cf-slider-icon{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.8}.cf-badge{position:absolute;right:-4px;top:-5px;min-width:17px;height:17px;padding:0 4px;display:grid;place-items:center;border-radius:10px;background:var(--primary);color:#fff;font-size:9px;font-weight:800}
  .cf-child-strip{display:flex;gap:7px;overflow:auto;padding:1px 0 9px;scrollbar-width:none}.cf-child-strip::-webkit-scrollbar{display:none}.cf-child-strip>button{flex:0 0 auto;display:flex;align-items:center;gap:7px;padding:6px 9px 6px 6px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);text-align:left}.cf-child-strip>button.selected{border-color:var(--primary);box-shadow:0 0 0 1px color-mix(in srgb,var(--primary) 24%,transparent)}.cf-child-strip strong,.cf-child-strip small{display:block}.cf-child-strip strong{font-size:11px}.cf-child-strip small{font-size:9px;color:var(--muted);margin-top:1px}.cf-mini-avatar{width:28px;height:28px;display:grid;place-items:center;overflow:hidden;border-radius:9px;background:color-mix(in srgb,var(--primary) 13%,var(--soft));color:var(--primary);font-size:12px;font-weight:800}.cf-mini-avatar img,.cf-avatar img{width:100%;height:100%;object-fit:cover}
  .cf-child-card{display:grid;grid-template-columns:52px minmax(0,1fr) auto;align-items:center;gap:10px;padding:12px;border:1px solid var(--border);border-radius:16px;background:var(--surface)}.cf-avatar{width:52px;height:52px;display:grid;place-items:center;overflow:hidden;border-radius:15px;background:color-mix(in srgb,var(--primary) 14%,var(--soft));color:var(--primary);font-size:20px;font-weight:900}.cf-child-copy{min-width:0}.cf-child-copy>div{display:flex;align-items:center;gap:7px}.cf-child-copy h1{margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:15px}.cf-child-copy p{margin:4px 0 0;color:var(--muted);font-size:9px}.cf-sync-dot{width:8px;height:8px;padding:0;border:0;border-radius:50%;background:#22c55e;box-shadow:0 0 0 3px color-mix(in srgb,#22c55e 15%,transparent)}.cf-balance-block{text-align:right}.cf-balance-block small,.cf-balance-block strong{display:block}.cf-balance-block small{font-size:8px;color:var(--muted)}.cf-balance-block strong{margin-top:3px;font-size:15px;color:#dc2626}
  .cf-summary-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px;margin:8px 0}.cf-summary-grid article{display:flex;align-items:center;gap:7px;min-width:0;padding:9px;border:1px solid var(--border);border-radius:13px;background:var(--surface)}.cf-summary-grid article>span{width:27px;height:27px;flex:0 0 auto;display:grid;place-items:center;border-radius:8px;font-weight:900}.cf-summary-grid strong,.cf-summary-grid small{display:block}.cf-summary-grid strong{overflow:hidden;text-overflow:ellipsis;font-size:11px}.cf-summary-grid small{margin-top:2px;color:var(--muted);font-size:8px;white-space:nowrap}.green{background:color-mix(in srgb,#22c55e 13%,var(--surface));color:#15803d}.red{background:color-mix(in srgb,#ef4444 13%,var(--surface));color:#dc2626}.orange{background:color-mix(in srgb,#f59e0b 15%,var(--surface));color:#b45309}.blue{background:color-mix(in srgb,#3b82f6 13%,var(--surface));color:#2563eb}
  .cf-tabs{display:flex;gap:4px;margin:0 0 8px;padding:3px;border:1px solid var(--border);border-radius:12px;background:var(--soft)}.cf-tabs button{flex:1;height:32px;border:0;border-radius:9px;background:transparent;color:var(--muted);font-size:10px;font-weight:800}.cf-tabs button.active{background:var(--surface);color:var(--text);box-shadow:0 1px 4px rgba(15,23,42,.08)}.cf-tabs span{display:inline-grid;place-items:center;min-width:18px;height:18px;margin-left:4px;padding:0 5px;border-radius:9px;background:var(--border);font-size:8px}
  .cf-card-grid{display:grid;gap:7px}.cf-invoice-card,.cf-payment-card{border:1px solid var(--border);border-radius:14px;background:var(--surface);cursor:pointer}.cf-invoice-card{padding:11px}.cf-card-top{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}.cf-card-top strong,.cf-card-top small{display:block}.cf-card-top strong{font-size:12px}.cf-card-top small{margin-top:3px;color:var(--muted);font-size:8px}.cf-chip{display:inline-flex;align-items:center;justify-content:center;padding:3px 7px;border-radius:999px;font-size:8px;font-weight:800;white-space:nowrap}.cf-chip.green{background:color-mix(in srgb,#22c55e 13%,var(--surface));color:#15803d}.cf-chip.red{background:color-mix(in srgb,#ef4444 13%,var(--surface));color:#dc2626}.cf-chip.orange{background:color-mix(in srgb,#f59e0b 15%,var(--surface));color:#b45309}.cf-chip.blue{background:color-mix(in srgb,#3b82f6 13%,var(--surface));color:#2563eb}.cf-chip.gray{background:var(--soft);color:var(--muted)}.cf-money-row{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:11px;padding:9px;border-radius:11px;background:var(--soft)}.cf-money-row small,.cf-money-row strong{display:block}.cf-money-row small{font-size:8px;color:var(--muted)}.cf-money-row strong{margin-top:3px;font-size:10px}.cf-money-row strong.danger{color:#dc2626}.cf-card-foot{display:flex;justify-content:space-between;gap:8px;margin-top:9px;color:var(--muted);font-size:8px}.cf-payment-card{display:flex;align-items:center;gap:10px;padding:10px}.cf-payment-icon{width:36px;height:36px;flex:0 0 auto;display:grid;place-items:center;border-radius:11px;background:color-mix(in srgb,#22c55e 13%,var(--surface));color:#15803d;font-weight:900}.cf-payment-main{flex:1;min-width:0}.cf-payment-main>div{display:flex;justify-content:space-between;align-items:center;gap:8px}.cf-payment-main>div>strong{font-size:12px}.cf-payment-main p,.cf-payment-main small{display:block;margin:0;color:var(--muted);font-size:8px}.cf-payment-main p{margin-top:4px}.cf-payment-main small{margin-top:3px}
  .cf-table-shell{overflow:hidden;border:1px solid var(--border);border-radius:14px;background:var(--surface)}.cf-table-title{padding:10px 12px;border-bottom:1px solid var(--border);font-size:11px;font-weight:800}.cf-table-scroll{overflow:auto}.cf-table-shell table{width:100%;min-width:690px;border-collapse:collapse}.cf-table-shell th,.cf-table-shell td{padding:9px 11px;border-bottom:1px solid var(--border);text-align:left;font-size:9px}.cf-table-shell th{position:sticky;top:0;background:var(--soft);color:var(--muted);font-size:8px;text-transform:uppercase;letter-spacing:.04em}.cf-table-shell tr{cursor:pointer}.cf-table-shell tbody tr:last-child td{border-bottom:0}.cf-table-shell td strong,.cf-table-shell td small{display:block}.cf-table-shell td small{margin-top:2px;color:var(--muted);font-size:8px}
  .cf-analytics{display:grid;gap:8px}.cf-analytics-card{padding:12px;border:1px solid var(--border);border-radius:15px;background:var(--surface)}.cf-overview{display:flex;align-items:center;justify-content:space-between}.cf-overview>div:first-child span,.cf-overview>div:first-child strong,.cf-overview>div:first-child small{display:block}.cf-overview>div:first-child span{font-size:9px;color:var(--muted)}.cf-overview>div:first-child strong{margin-top:2px;font-size:25px}.cf-overview>div:first-child small{font-size:8px;color:var(--muted)}.cf-donut{position:relative;width:76px;height:76px;display:grid;place-items:center;border-radius:50%;background:conic-gradient(var(--primary) var(--value),var(--border) 0)}.cf-donut:after{content:"";position:absolute;inset:8px;border-radius:50%;background:var(--surface)}.cf-donut span{position:relative;z-index:1;font-size:11px;font-weight:900}.cf-analytics-title strong,.cf-analytics-title small{display:block}.cf-analytics-title strong{font-size:12px}.cf-analytics-title small{margin-top:2px;color:var(--muted);font-size:8px}.cf-metric-list{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin-top:12px}.cf-metric-list div{padding:10px;border:1px solid var(--border);border-radius:11px;background:var(--soft)}.cf-metric-list span,.cf-metric-list strong{display:block}.cf-metric-list span{font-size:8px;color:var(--muted)}.cf-metric-list strong{margin-top:3px;font-size:16px}
  .cf-empty{display:grid;justify-items:center;text-align:center;padding:44px 18px;border:1px dashed var(--border);border-radius:16px;background:var(--surface)}.cf-empty>div{width:44px;height:44px;display:grid;place-items:center;border-radius:14px;background:color-mix(in srgb,var(--primary) 12%,var(--soft));color:var(--primary);font-size:18px;font-weight:900}.cf-empty h3{margin:10px 0 3px;font-size:14px}.cf-empty p{max-width:380px;margin:0;color:var(--muted);font-size:9px;line-height:1.55}
  .cf-sheet-layer{position:fixed;inset:0;z-index:1000;display:flex;justify-content:flex-end;background:rgba(15,23,42,.38);backdrop-filter:blur(2px)}.cf-sheet{width:min(430px,94vw);height:100%;display:flex;flex-direction:column;background:var(--surface);box-shadow:-16px 0 40px rgba(0,0,0,.16)}.cf-short-sheet{height:auto;max-height:78vh;align-self:flex-end;border-radius:20px 0 0 0}.cf-sheet-head{display:flex;align-items:center;justify-content:space-between;padding:15px;border-bottom:1px solid var(--border)}.cf-sheet-head strong,.cf-sheet-head small{display:block}.cf-sheet-head strong{font-size:13px}.cf-sheet-head small{margin-top:2px;color:var(--muted);font-size:9px}.cf-sheet-head button{width:32px;height:32px;border:1px solid var(--border);border-radius:10px;background:var(--soft);color:var(--text);font-size:19px}.cf-sheet-body{flex:1;overflow:auto;display:grid;align-content:start;gap:12px;padding:15px}.cf-sheet-body label>span{display:block;margin-bottom:5px;color:var(--muted);font-size:9px;font-weight:700}.cf-sheet-body select{width:100%;height:40px;padding:0 10px;border:1px solid var(--border);border-radius:11px;outline:0;background:var(--surface);color:var(--text);font:inherit;font-size:10px}.cf-sheet-body select:focus{border-color:var(--primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 12%,transparent)}.cf-sheet-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:12px 15px;border-top:1px solid var(--border)}.cf-sheet-actions.single{grid-template-columns:1fr;margin-top:auto}.cf-sheet-actions button{height:39px;border-radius:11px;font-size:10px;font-weight:800}.cf-sheet-actions .primary{border:1px solid var(--primary);background:var(--primary);color:#fff}.cf-sheet-actions .secondary{border:1px solid var(--border);background:var(--surface);color:var(--text)}
  .cf-view-options{display:grid;gap:7px;padding:12px}.cf-view-options button{display:grid;grid-template-columns:34px minmax(0,1fr) 20px;align-items:center;gap:9px;padding:10px;border:1px solid var(--border);border-radius:12px;background:var(--surface);color:var(--text);text-align:left}.cf-view-options button.selected{border-color:var(--primary);background:color-mix(in srgb,var(--primary) 6%,var(--surface))}.cf-view-options button>span{width:34px;height:34px;display:grid;place-items:center;border-radius:10px;background:var(--soft);font-size:17px}.cf-view-options strong,.cf-view-options small{display:block}.cf-view-options strong{font-size:11px}.cf-view-options small{margin-top:2px;color:var(--muted);font-size:8px}.cf-view-options b{color:var(--primary)}
  .cf-detail-summary{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;padding:15px}.cf-detail-summary div{padding:10px;border:1px solid var(--border);border-radius:11px;background:var(--soft)}.cf-detail-summary small,.cf-detail-summary strong{display:block}.cf-detail-summary small{font-size:8px;color:var(--muted)}.cf-detail-summary strong{margin-top:3px;font-size:11px}.cf-detail-list{display:grid;gap:0;padding:0 15px}.cf-detail-list>div{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)}.cf-detail-list strong,.cf-detail-list small{display:block}.cf-detail-list strong{font-size:10px}.cf-detail-list small{margin-top:2px;color:var(--muted);font-size:8px}.cf-detail-list b{font-size:10px}.cf-meta-list{display:grid;padding:10px 15px}.cf-meta-list>div{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)}.cf-meta-list>div:last-child{border-bottom:0}.cf-meta-list span{font-size:9px;color:var(--muted)}.cf-meta-list strong{font-size:10px;text-align:right}.cf-payment-detail{padding-top:15px}.cf-muted{color:var(--muted);font-size:9px}.cf-status-panel{display:flex;gap:11px;padding:16px}.cf-status-panel>span{width:14px;height:14px;flex:0 0 auto;margin-top:2px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 5px color-mix(in srgb,#22c55e 14%,transparent)}.cf-status-panel strong{font-size:11px}.cf-status-panel p{margin:5px 0 0;color:var(--muted);font-size:9px;line-height:1.55}.cf-toast{position:fixed;left:50%;bottom:20px;z-index:1200;transform:translateX(-50%);max-width:min(420px,90vw);padding:10px 13px;border-radius:11px;background:#111827;color:#fff;font-size:10px;box-shadow:0 12px 30px rgba(0,0,0,.22)}
  @media(max-width:700px){.cf-page{padding-inline:9px}.cf-summary-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.cf-child-card{grid-template-columns:48px minmax(0,1fr)}.cf-avatar{width:48px;height:48px}.cf-balance-block{grid-column:1/-1;display:flex;justify-content:space-between;align-items:center;padding-top:8px;border-top:1px solid var(--border);text-align:left}.cf-metric-list{grid-template-columns:repeat(2,1fr)}.cf-short-sheet{width:100%;border-radius:20px 20px 0 0}.cf-sheet-layer{align-items:flex-end}}
  @media(min-width:900px){.cf-page{max-width:1120px;margin:0 auto;padding-top:14px}.cf-card-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.cf-analytics{grid-template-columns:1fr 1fr}.cf-short-sheet{height:100%;max-height:none;align-self:stretch;border-radius:0}}
`;function bt(a){let b=Number(a||0);return Number.isFinite(b)?b:0}function bu(){return Date.now()}function bv(a,b=""){return String(a||"").trim()||b}function bw(a){if(!a)return"Not set";let b="number"==typeof a?a:new Date(a).getTime();if(!Number.isFinite(b))return"Not set";try{return new Intl.DateTimeFormat(void 0,{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(b))}catch{return"Not set"}}function bx(a,b,c,d){return!!a&&!a.isDeleted&&(!a.accountId||a.accountId===b)&&Number(a.schoolId)===Number(c)&&Number(a.branchId)===Number(d)}async function by(a){let b=n.db[a];return b?.toArray?b.toArray():[]}function bz({children:a,tone:b="gray"}){return(0,d.jsx)("span",{className:`pp-chip ${b}`,children:a})}function bA({label:a,value:b,icon:c,positive:e,warning:f}){return(0,d.jsxs)("article",{className:`pp-summary ${e?"positive":""} ${f?"warning":""}`,children:[(0,d.jsx)("div",{children:c}),(0,d.jsxs)("section",{children:[(0,d.jsx)("strong",{children:b}),(0,d.jsx)("span",{children:a})]})]})}function bB({title:a="No records",text:b}){return(0,d.jsxs)("section",{className:"pp-empty",children:[(0,d.jsx)("div",{children:"\uD83D\uDCCC"}),(0,d.jsx)("h3",{children:a}),(0,d.jsx)("p",{children:b})]})}function bC({view:a,setView:b,count:c}){return(0,d.jsxs)("section",{className:"pp-toolbar",children:[(0,d.jsxs)("div",{className:"pp-tabs",children:[(0,d.jsx)("button",{type:"button",className:"cards"===a?"active":"",onClick:()=>b("cards"),children:"Cards"}),(0,d.jsx)("button",{type:"button",className:"table"===a?"active":"",onClick:()=>b("table"),children:"Table"}),(0,d.jsx)("button",{type:"button",className:"analytics"===a?"active":"",onClick:()=>b("analytics"),children:"Analytics"})]}),(0,d.jsxs)(bz,{children:[c," shown"]})]})}let bD=`
.pp-page {
  min-height: 100dvh;
  width: 100%;
  min-width: 0;
  padding: calc(8px * var(--local-density-scale, 1));
  padding-bottom: max(32px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--pp-primary) 10%, transparent), transparent 34rem),
    var(--bg, #f7f8fb);
  color: var(--text, #111);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--font-size, 14px);
  overflow-x: hidden;
}
.pp-page * { box-sizing: border-box; }
.pp-page button, .pp-page input, .pp-page select, .pp-page textarea { font: inherit; max-width: 100%; }
.pp-page input, .pp-page select, .pp-page textarea {
  width: 100%;
  min-height: 44px;
  border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10)));
  border-radius: 16px;
  padding: 0 12px;
  background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #111));
  outline: none;
  font-weight: 750;
}
.pp-page textarea { min-height: 120px; padding: 12px; resize: vertical; line-height: 1.55; }
.pp-state {
  min-height: min(420px, calc(100dvh - 32px));
  width: min(480px, 100%);
  margin: 0 auto;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  padding: 22px;
  border-radius: 28px;
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: var(--shell-shadow, 0 24px 60px rgba(15,23,42,.08));
  text-align: center;
}
.pp-state h2 { margin: 0; font-size: 22px; letter-spacing: -.04em; font-weight: 1000; }
.pp-state p { margin: 0; color: var(--muted, #64748b); line-height: 1.6; }
.pp-hero {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 10px;
  padding: 12px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 18% 8%, color-mix(in srgb, var(--pp-primary) 16%, transparent), transparent 20rem),
    linear-gradient(135deg, var(--card-bg, var(--surface, #fff)), color-mix(in srgb, var(--pp-primary) 7%, var(--card-bg, #fff)) 72%);
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 18px 46px rgba(15,23,42,.07);
  overflow: hidden;
}
.pp-hero-left { min-width: 0; display: flex; align-items: center; gap: 10px; flex: 1; }
.pp-icon {
  width: 48px; height: 48px; flex: 0 0 auto; display: grid; place-items: center;
  border-radius: 18px; background: var(--pp-primary); color: #fff; font-size: 22px;
  box-shadow: 0 12px 26px color-mix(in srgb, var(--pp-primary) 28%, transparent);
}
.pp-title { min-width: 0; }
.pp-title p, .pp-title h2, .pp-title span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-title p { margin: 0 0 2px; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-title h2 { margin: 0; color: var(--text, #111); font-size: clamp(20px, 5vw, 30px); font-weight: 1000; letter-spacing: -.06em; line-height: 1; }
.pp-title span { margin-top: 3px; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; }
.pp-btn, .pp-primary {
  min-height: 42px; border-radius: 999px; padding: 0 14px; font-weight: 950; cursor: pointer;
}
.pp-btn { border: 1px solid var(--border, rgba(0,0,0,.10)); background: var(--surface, #fff); color: var(--text, #111); }
.pp-primary { border: 0; background: var(--pp-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--pp-primary) 25%, transparent); }
.pp-summary-grid, .pp-list, .pp-mini-grid, .pp-breakdown-grid { display: grid; gap: 8px; }
.pp-summary-grid { margin-top: 10px; grid-template-columns: repeat(2, minmax(0,1fr)); }
.pp-summary, .pp-card, .pp-panel, .pp-toolbar, .pp-filter, .pp-empty, .pp-breakdown {
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 12px 28px rgba(15,23,42,.045);
}
.pp-summary { min-width: 0; display: flex; align-items: center; gap: 10px; padding: 12px; border-radius: 22px; overflow: hidden; }
.pp-summary.positive { background: linear-gradient(135deg, rgba(34,197,94,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary.warning { background: linear-gradient(135deg, rgba(245,158,11,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary > div:first-child {
  width: 36px; height: 36px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 15px;
  background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff));
}
.pp-summary section { min-width: 0; }
.pp-summary strong, .pp-summary span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-summary strong { font-size: 18px; font-weight: 1000; letter-spacing: -.05em; color: var(--text, #111); }
.pp-summary span { margin-top: 2px; color: var(--muted, #64748b); font-size: 11px; font-weight: 850; }
.pp-toolbar, .pp-filter, .pp-panel { margin-top: 10px; padding: 10px; border-radius: 24px; }
.pp-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.pp-tabs {
  display: inline-grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 4px; width: min(390px, 100%);
  padding: 4px; border-radius: 999px; background: var(--shell-section-bg, color-mix(in srgb, var(--pp-primary) 7%, var(--surface, #fff)));
  border: 1px solid var(--border, rgba(0,0,0,.08));
}
.pp-tabs button { min-width: 0; min-height: 35px; border: 0; border-radius: 999px; padding: 0 9px; background: transparent; color: var(--muted, #64748b); font-size: 12px; font-weight: 950; cursor: pointer; }
.pp-tabs button.active { background: var(--pp-primary); color: #fff; }
.pp-filter { display: grid; grid-template-columns: minmax(0,1fr); gap: 8px; }
.pp-section { margin-top: 16px; }
.pp-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 10px; }
.pp-head p { margin: 0; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-head h3 { margin: 2px 0 0; color: var(--text, #111); font-size: 19px; font-weight: 1000; letter-spacing: -.04em; }
.pp-list { margin-top: 10px; }
.pp-card, .pp-breakdown, .pp-empty { min-width: 0; border-radius: 24px; padding: 13px; overflow: hidden; }
.pp-card-top { display: flex; align-items: flex-start; gap: 10px; }
.pp-avatar {
  width: 56px; height: 56px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 19px;
  background: var(--pp-primary); color: #fff; font-size: 22px; box-shadow: 0 12px 24px rgba(15,23,42,.12);
}
.pp-card-main { min-width: 0; flex: 1; }
.pp-card-main h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; letter-spacing: -.04em; }
.pp-card-main p { margin: 4px 0 0; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; line-height: 1.4; }
.pp-chip-row { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; margin-top: 10px; }
.pp-chip {
  max-width: 100%; display: inline-flex; align-items: center; min-height: 25px; padding: 4px 9px; border-radius: 999px;
  font-size: 11px; font-weight: 950; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize;
}
.pp-chip.green { background: rgba(34,197,94,.14); color: #22c55e; }
.pp-chip.red { background: rgba(239,68,68,.14); color: #ef4444; }
.pp-chip.blue { background: rgba(59,130,246,.15); color: #60a5fa; }
.pp-chip.gray { background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); color: var(--muted, #64748b); }
.pp-chip.orange { background: rgba(245,158,11,.16); color: #f59e0b; }
.pp-chip.purple { background: rgba(147,51,234,.15); color: #a855f7; }
.pp-mini-grid { grid-template-columns: repeat(2, minmax(0,1fr)); margin-top: 10px; }
.pp-mini {
  min-width: 0; padding: 9px; border-radius: 17px; background: color-mix(in srgb, var(--muted, #64748b) 9%, transparent);
  border: 1px solid var(--border, rgba(0,0,0,.08)); overflow: hidden;
}
.pp-mini strong, .pp-mini span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-mini strong { color: var(--text, #111); font-size: 13px; font-weight: 1000; }
.pp-mini span { margin-top: 2px; color: var(--muted, #64748b); font-size: 10px; font-weight: 850; }
.pp-table-wrap { width: 100%; overflow-x: auto; border-radius: 18px; border: 1px solid var(--border, rgba(0,0,0,.08)); }
.pp-table { width: 100%; min-width: 980px; border-collapse: collapse; background: var(--card-bg, var(--surface, #fff)); }
.pp-table th, .pp-table td { padding: 10px; border-bottom: 1px solid var(--border, rgba(0,0,0,.08)); text-align: left; vertical-align: top; color: var(--text, #111); font-size: 13px; }
.pp-table th { color: var(--muted, #64748b); font-size: 11px; font-weight: 1000; text-transform: uppercase; letter-spacing: .07em; background: color-mix(in srgb, var(--pp-primary) 6%, var(--card-bg, #fff)); }
.pp-empty { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 190px; text-align: center; border-style: dashed; }
.pp-empty div { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 22px; background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff)); font-size: 28px; }
.pp-empty h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; }
.pp-empty p { margin: 0; color: var(--muted, #64748b); font-size: 13px; line-height: 1.6; }
.pp-message { margin: 10px 0; padding: 12px; border-radius: 18px; background: rgba(245,158,11,.14); color: #f59e0b; font-size: 13px; font-weight: 900; }
.pp-drawer-layer { position: fixed; inset: 0; z-index: 80; }
.pp-drawer-overlay { position: absolute; inset: 0; border: 0; background: rgba(15,23,42,.52); }
.pp-drawer {
  position: absolute; right: 0; top: 0; bottom: 0; width: min(94vw, 720px); max-width: 100vw; overflow-y: auto; overflow-x: hidden;
  background: var(--bg, #f7f8fb); color: var(--text, #111); padding: 14px; box-shadow: var(--shell-shadow, -24px 0 70px rgba(15,23,42,.22));
}
.pp-drawer-head { position: sticky; top: 0; z-index: 2; display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; padding: 6px 0 12px; background: var(--bg, #f7f8fb); }
.pp-drawer-head p { margin: 0; color: var(--pp-primary); font-size: 11px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-drawer-head h2 { margin: 2px 0 0; color: var(--text, #111); font-size: 22px; font-weight: 1000; letter-spacing: -.05em; }
.pp-drawer-head span { margin-top: 3px; display: block; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-drawer-head button { width: 38px; height: 38px; flex: 0 0 auto; border: 1px solid var(--border, rgba(0,0,0,.10)); border-radius: 15px; background: var(--surface, #fff); color: var(--text, #111); font-weight: 1000; cursor: pointer; }
.pp-form-card { margin-top: 10px; padding: 12px; border-radius: 22px; background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); }
.pp-form-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 9px; }
.pp-form-grid label { min-width: 0; display: grid; gap: 6px; }
.pp-form-grid label span { color: var(--muted, #64748b); font-size: 11px; font-weight: 950; letter-spacing: .06em; text-transform: uppercase; }
.pp-form-grid .wide { grid-column: 1 / -1; }
.pp-drawer-actions { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px; margin-top: 12px; }
.pp-bar { height: 8px; margin-top: 12px; border-radius: 999px; background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); overflow: hidden; }
.pp-bar div { height: 100%; background: var(--pp-primary); border-radius: inherit; }
@media (min-width: 680px) {
  .pp-page { padding: calc(12px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-filter { grid-template-columns: minmax(0,1fr) 190px 150px; }
  .pp-mini-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-form-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (min-width: 1040px) {
  .pp-page { padding: calc(16px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(6, minmax(0,1fr)); }
  .pp-list, .pp-breakdown-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (max-width: 520px) {
  .pp-page { padding: calc(6px * var(--local-density-scale, 1)); }
  .pp-hero { flex-direction: column; border-radius: 22px; padding: 10px; }
  .pp-actions { display: grid; grid-template-columns: minmax(0,1fr); }
  .pp-btn, .pp-primary { width: 100%; }
  .pp-summary-grid { gap: 6px; }
  .pp-summary { padding: 10px; border-radius: 19px; }
  .pp-toolbar { align-items: stretch; flex-direction: column; border-radius: 20px; }
  .pp-tabs { width: 100%; }
  .pp-card, .pp-empty, .pp-breakdown { border-radius: 20px; padding: 11px; }
  .pp-avatar { width: 52px; height: 52px; flex-basis: 52px; }
  .pp-mini-grid { grid-template-columns: repeat(1, minmax(0,1fr)); }
  .pp-drawer-actions { grid-template-columns: minmax(0,1fr); }
  .pp-drawer { width: min(96vw, 720px); padding: 12px; }
}
`;async function bE(a,b,c){let[d,e,f,g,h]=await Promise.all([by("parents"),by("students"),by("studentParents"),by("userMemberships").then(async a=>a.length?a:by("memberships")),by("users").then(async a=>a.length?a:by("accountUsers"))]),i=g.find(d=>"parent"===d.role&&bx(d,a,Number(b),Number(c))),j=h.find(a=>String(a?.id||a?.localId||"")===String(i?.userLocalId||i?.userId||i?.accountUserId||"")),k=d.find(d=>bx(d,a,Number(b),Number(c))&&(Number(d.id)===Number(i?.parentLocalId)||!!(j?.email&&d.email&&String(d.email).toLowerCase()===String(j.email).toLowerCase())))||null,l=new Set;f.forEach(a=>{k?.id&&Number(a.parentId||a.parentLocalId)===Number(k.id)&&l.add(Number(a.studentId||a.studentLocalId))}),i?.studentLocalId&&l.add(Number(i.studentLocalId));let m=e.filter(d=>bx(d,a,Number(b),Number(c))&&(l.has(Number(d.id))||!!(k?.email&&String(d.parentEmail||"").toLowerCase()===String(k.email).toLowerCase())||!!(k?.phone&&String(d.parentPhone||"")===String(k.phone))));return{parent:k,children:m,user:j}}var bF=c(90077);function bG(a){let b=Number(a||0);return Number.isFinite(b)?b:0}function bH(a){if(!a)return"Not set";let b="number"==typeof a?a:new Date(a).getTime();if(!Number.isFinite(b))return"Not set";try{return new Intl.DateTimeFormat(void 0,{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(b))}catch{return"Not set"}}function bI(a,b,c,d){return!!a&&!a.isDeleted&&(!a.accountId||a.accountId===b)&&Number(a.schoolId)===Number(c)&&Number(a.branchId)===Number(d)}function bJ(a){return function(a,b=""){return String(a||"").trim()||b}(a?.fullName||a?.name||a?.title||a?.label||a?.email,"Unnamed")}async function bK(a){let b=n.db[a];return b?.toArray?b.toArray():[]}function bL({children:a,tone:b="gray"}){return(0,d.jsx)("span",{className:`pp-chip ${b}`,children:a})}function bM({label:a,value:b,icon:c,positive:e,warning:f}){return(0,d.jsxs)("article",{className:`pp-summary ${e?"positive":""} ${f?"warning":""}`,children:[(0,d.jsx)("div",{children:c}),(0,d.jsxs)("section",{children:[(0,d.jsx)("strong",{children:b}),(0,d.jsx)("span",{children:a})]})]})}function bN({title:a="No records",text:b}){return(0,d.jsxs)("section",{className:"pp-empty",children:[(0,d.jsx)("div",{children:"\uD83D\uDCCC"}),(0,d.jsx)("h3",{children:a}),(0,d.jsx)("p",{children:b})]})}function bO({view:a,setView:b,count:c}){return(0,d.jsxs)("section",{className:"pp-toolbar",children:[(0,d.jsxs)("div",{className:"pp-tabs",children:[(0,d.jsx)("button",{type:"button",className:"cards"===a?"active":"",onClick:()=>b("cards"),children:"Cards"}),(0,d.jsx)("button",{type:"button",className:"table"===a?"active":"",onClick:()=>b("table"),children:"Table"}),(0,d.jsx)("button",{type:"button",className:"analytics"===a?"active":"",onClick:()=>b("analytics"),children:"Analytics"})]}),(0,d.jsxs)(bL,{children:[c," shown"]})]})}let bP=`
.pp-page {
  min-height: 100dvh;
  width: 100%;
  min-width: 0;
  padding: calc(8px * var(--local-density-scale, 1));
  padding-bottom: max(32px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--pp-primary) 10%, transparent), transparent 34rem),
    var(--bg, #f7f8fb);
  color: var(--text, #111);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--font-size, 14px);
  overflow-x: hidden;
}
.pp-page * { box-sizing: border-box; }
.pp-page button, .pp-page input, .pp-page select, .pp-page textarea { font: inherit; max-width: 100%; }
.pp-page input, .pp-page select, .pp-page textarea {
  width: 100%;
  min-height: 44px;
  border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10)));
  border-radius: 16px;
  padding: 0 12px;
  background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #111));
  outline: none;
  font-weight: 750;
}
.pp-page textarea { min-height: 120px; padding: 12px; resize: vertical; line-height: 1.55; }
.pp-state {
  min-height: min(420px, calc(100dvh - 32px));
  width: min(480px, 100%);
  margin: 0 auto;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  padding: 22px;
  border-radius: 28px;
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: var(--shell-shadow, 0 24px 60px rgba(15,23,42,.08));
  text-align: center;
}
.pp-state h2 { margin: 0; font-size: 22px; letter-spacing: -.04em; font-weight: 1000; }
.pp-state p { margin: 0; color: var(--muted, #64748b); line-height: 1.6; }
.pp-hero {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 10px;
  padding: 12px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 18% 8%, color-mix(in srgb, var(--pp-primary) 16%, transparent), transparent 20rem),
    linear-gradient(135deg, var(--card-bg, var(--surface, #fff)), color-mix(in srgb, var(--pp-primary) 7%, var(--card-bg, #fff)) 72%);
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 18px 46px rgba(15,23,42,.07);
  overflow: hidden;
}
.pp-hero-left { min-width: 0; display: flex; align-items: center; gap: 10px; flex: 1; }
.pp-icon {
  width: 48px; height: 48px; flex: 0 0 auto; display: grid; place-items: center;
  border-radius: 18px; background: var(--pp-primary); color: #fff; font-size: 22px;
  box-shadow: 0 12px 26px color-mix(in srgb, var(--pp-primary) 28%, transparent);
}
.pp-title { min-width: 0; }
.pp-title p, .pp-title h2, .pp-title span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-title p { margin: 0 0 2px; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-title h2 { margin: 0; color: var(--text, #111); font-size: clamp(20px, 5vw, 30px); font-weight: 1000; letter-spacing: -.06em; line-height: 1; }
.pp-title span { margin-top: 3px; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; }
.pp-btn, .pp-primary {
  min-height: 42px; border-radius: 999px; padding: 0 14px; font-weight: 950; cursor: pointer;
}
.pp-btn { border: 1px solid var(--border, rgba(0,0,0,.10)); background: var(--surface, #fff); color: var(--text, #111); }
.pp-primary { border: 0; background: var(--pp-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--pp-primary) 25%, transparent); }
.pp-summary-grid, .pp-list, .pp-mini-grid, .pp-breakdown-grid { display: grid; gap: 8px; }
.pp-summary-grid { margin-top: 10px; grid-template-columns: repeat(2, minmax(0,1fr)); }
.pp-summary, .pp-card, .pp-panel, .pp-toolbar, .pp-filter, .pp-empty, .pp-breakdown {
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 12px 28px rgba(15,23,42,.045);
}
.pp-summary { min-width: 0; display: flex; align-items: center; gap: 10px; padding: 12px; border-radius: 22px; overflow: hidden; }
.pp-summary.positive { background: linear-gradient(135deg, rgba(34,197,94,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary.warning { background: linear-gradient(135deg, rgba(245,158,11,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary > div:first-child {
  width: 36px; height: 36px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 15px;
  background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff));
}
.pp-summary section { min-width: 0; }
.pp-summary strong, .pp-summary span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-summary strong { font-size: 18px; font-weight: 1000; letter-spacing: -.05em; color: var(--text, #111); }
.pp-summary span { margin-top: 2px; color: var(--muted, #64748b); font-size: 11px; font-weight: 850; }
.pp-toolbar, .pp-filter, .pp-panel { margin-top: 10px; padding: 10px; border-radius: 24px; }
.pp-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.pp-tabs {
  display: inline-grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 4px; width: min(390px, 100%);
  padding: 4px; border-radius: 999px; background: var(--shell-section-bg, color-mix(in srgb, var(--pp-primary) 7%, var(--surface, #fff)));
  border: 1px solid var(--border, rgba(0,0,0,.08));
}
.pp-tabs button { min-width: 0; min-height: 35px; border: 0; border-radius: 999px; padding: 0 9px; background: transparent; color: var(--muted, #64748b); font-size: 12px; font-weight: 950; cursor: pointer; }
.pp-tabs button.active { background: var(--pp-primary); color: #fff; }
.pp-filter { display: grid; grid-template-columns: minmax(0,1fr); gap: 8px; }
.pp-section { margin-top: 16px; }
.pp-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 10px; }
.pp-head p { margin: 0; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-head h3 { margin: 2px 0 0; color: var(--text, #111); font-size: 19px; font-weight: 1000; letter-spacing: -.04em; }
.pp-list { margin-top: 10px; }
.pp-card, .pp-breakdown, .pp-empty { min-width: 0; border-radius: 24px; padding: 13px; overflow: hidden; }
.pp-card-top { display: flex; align-items: flex-start; gap: 10px; }
.pp-avatar {
  width: 56px; height: 56px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 19px;
  background: var(--pp-primary); color: #fff; font-size: 22px; box-shadow: 0 12px 24px rgba(15,23,42,.12);
}
.pp-card-main { min-width: 0; flex: 1; }
.pp-card-main h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; letter-spacing: -.04em; }
.pp-card-main p { margin: 4px 0 0; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; line-height: 1.4; }
.pp-chip-row { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; margin-top: 10px; }
.pp-chip {
  max-width: 100%; display: inline-flex; align-items: center; min-height: 25px; padding: 4px 9px; border-radius: 999px;
  font-size: 11px; font-weight: 950; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize;
}
.pp-chip.green { background: rgba(34,197,94,.14); color: #22c55e; }
.pp-chip.red { background: rgba(239,68,68,.14); color: #ef4444; }
.pp-chip.blue { background: rgba(59,130,246,.15); color: #60a5fa; }
.pp-chip.gray { background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); color: var(--muted, #64748b); }
.pp-chip.orange { background: rgba(245,158,11,.16); color: #f59e0b; }
.pp-chip.purple { background: rgba(147,51,234,.15); color: #a855f7; }
.pp-mini-grid { grid-template-columns: repeat(2, minmax(0,1fr)); margin-top: 10px; }
.pp-mini {
  min-width: 0; padding: 9px; border-radius: 17px; background: color-mix(in srgb, var(--muted, #64748b) 9%, transparent);
  border: 1px solid var(--border, rgba(0,0,0,.08)); overflow: hidden;
}
.pp-mini strong, .pp-mini span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-mini strong { color: var(--text, #111); font-size: 13px; font-weight: 1000; }
.pp-mini span { margin-top: 2px; color: var(--muted, #64748b); font-size: 10px; font-weight: 850; }
.pp-table-wrap { width: 100%; overflow-x: auto; border-radius: 18px; border: 1px solid var(--border, rgba(0,0,0,.08)); }
.pp-table { width: 100%; min-width: 980px; border-collapse: collapse; background: var(--card-bg, var(--surface, #fff)); }
.pp-table th, .pp-table td { padding: 10px; border-bottom: 1px solid var(--border, rgba(0,0,0,.08)); text-align: left; vertical-align: top; color: var(--text, #111); font-size: 13px; }
.pp-table th { color: var(--muted, #64748b); font-size: 11px; font-weight: 1000; text-transform: uppercase; letter-spacing: .07em; background: color-mix(in srgb, var(--pp-primary) 6%, var(--card-bg, #fff)); }
.pp-empty { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 190px; text-align: center; border-style: dashed; }
.pp-empty div { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 22px; background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff)); font-size: 28px; }
.pp-empty h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; }
.pp-empty p { margin: 0; color: var(--muted, #64748b); font-size: 13px; line-height: 1.6; }
.pp-message { margin: 10px 0; padding: 12px; border-radius: 18px; background: rgba(245,158,11,.14); color: #f59e0b; font-size: 13px; font-weight: 900; }
.pp-drawer-layer { position: fixed; inset: 0; z-index: 80; }
.pp-drawer-overlay { position: absolute; inset: 0; border: 0; background: rgba(15,23,42,.52); }
.pp-drawer {
  position: absolute; right: 0; top: 0; bottom: 0; width: min(94vw, 720px); max-width: 100vw; overflow-y: auto; overflow-x: hidden;
  background: var(--bg, #f7f8fb); color: var(--text, #111); padding: 14px; box-shadow: var(--shell-shadow, -24px 0 70px rgba(15,23,42,.22));
}
.pp-drawer-head { position: sticky; top: 0; z-index: 2; display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; padding: 6px 0 12px; background: var(--bg, #f7f8fb); }
.pp-drawer-head p { margin: 0; color: var(--pp-primary); font-size: 11px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-drawer-head h2 { margin: 2px 0 0; color: var(--text, #111); font-size: 22px; font-weight: 1000; letter-spacing: -.05em; }
.pp-drawer-head span { margin-top: 3px; display: block; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-drawer-head button { width: 38px; height: 38px; flex: 0 0 auto; border: 1px solid var(--border, rgba(0,0,0,.10)); border-radius: 15px; background: var(--surface, #fff); color: var(--text, #111); font-weight: 1000; cursor: pointer; }
.pp-form-card { margin-top: 10px; padding: 12px; border-radius: 22px; background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); }
.pp-form-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 9px; }
.pp-form-grid label { min-width: 0; display: grid; gap: 6px; }
.pp-form-grid label span { color: var(--muted, #64748b); font-size: 11px; font-weight: 950; letter-spacing: .06em; text-transform: uppercase; }
.pp-form-grid .wide { grid-column: 1 / -1; }
.pp-drawer-actions { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px; margin-top: 12px; }
.pp-bar { height: 8px; margin-top: 12px; border-radius: 999px; background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); overflow: hidden; }
.pp-bar div { height: 100%; background: var(--pp-primary); border-radius: inherit; }
@media (min-width: 680px) {
  .pp-page { padding: calc(12px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-filter { grid-template-columns: minmax(0,1fr) 190px 150px; }
  .pp-mini-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-form-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (min-width: 1040px) {
  .pp-page { padding: calc(16px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(6, minmax(0,1fr)); }
  .pp-list, .pp-breakdown-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (max-width: 520px) {
  .pp-page { padding: calc(6px * var(--local-density-scale, 1)); }
  .pp-hero { flex-direction: column; border-radius: 22px; padding: 10px; }
  .pp-actions { display: grid; grid-template-columns: minmax(0,1fr); }
  .pp-btn, .pp-primary { width: 100%; }
  .pp-summary-grid { gap: 6px; }
  .pp-summary { padding: 10px; border-radius: 19px; }
  .pp-toolbar { align-items: stretch; flex-direction: column; border-radius: 20px; }
  .pp-tabs { width: 100%; }
  .pp-card, .pp-empty, .pp-breakdown { border-radius: 20px; padding: 11px; }
  .pp-avatar { width: 52px; height: 52px; flex-basis: 52px; }
  .pp-mini-grid { grid-template-columns: repeat(1, minmax(0,1fr)); }
  .pp-drawer-actions { grid-template-columns: minmax(0,1fr); }
  .pp-drawer { width: min(96vw, 720px); padding: 12px; }
}
`;async function bQ(a,b,c){let[d,e,f,g,h]=await Promise.all([bK("parents"),bK("students"),bK("studentParents"),bK("userMemberships").then(async a=>a.length?a:bK("memberships")),bK("users").then(async a=>a.length?a:bK("accountUsers"))]),i=g.find(d=>"parent"===d.role&&bI(d,a,Number(b),Number(c))),j=h.find(a=>String(a?.id||a?.localId||"")===String(i?.userLocalId||i?.userId||i?.accountUserId||"")),k=d.find(d=>bI(d,a,Number(b),Number(c))&&(Number(d.id)===Number(i?.parentLocalId)||!!(j?.email&&d.email&&String(d.email).toLowerCase()===String(j.email).toLowerCase())))||null,l=new Set;f.forEach(a=>{k?.id&&Number(a.parentId||a.parentLocalId)===Number(k.id)&&l.add(Number(a.studentId||a.studentLocalId))}),i?.studentLocalId&&l.add(Number(i.studentLocalId));let m=e.filter(d=>bI(d,a,Number(b),Number(c))&&(l.has(Number(d.id))||!!(k?.email&&String(d.parentEmail||"").toLowerCase()===String(k.email).toLowerCase())||!!(k?.phone&&String(d.parentPhone||"")===String(k.phone))));return{parent:k,children:m,user:j}}var bR=c(32784);function bS(a){let b=Number(a||0);return Number.isFinite(b)?b:0}function bT(a,b,c,d){return!!a&&!a.isDeleted&&(!a.accountId||a.accountId===b)&&String(a.schoolId)===String(c)&&String(a.branchId)===String(d)}function bU(a){return function(a,b=""){return String(a||"").trim()||b}(a?.fullName||a?.name||a?.title||a?.label||a?.email,"Unnamed")}async function bV(a){let b=n.db[a];return b?.toArray?b.toArray():[]}function bW({children:a,tone:b="gray"}){return(0,d.jsx)("span",{className:`pp-chip ${b}`,children:a})}function bX({label:a,value:b,icon:c,positive:e,warning:f}){return(0,d.jsxs)("article",{className:`pp-summary ${e?"positive":""} ${f?"warning":""}`,children:[(0,d.jsx)("div",{children:c}),(0,d.jsxs)("section",{children:[(0,d.jsx)("strong",{children:b}),(0,d.jsx)("span",{children:a})]})]})}function bY({label:a,value:b}){return(0,d.jsxs)("div",{className:"pp-mini",children:[(0,d.jsx)("strong",{children:b}),(0,d.jsx)("span",{children:a})]})}function bZ({title:a="No records",text:b}){return(0,d.jsxs)("section",{className:"pp-empty",children:[(0,d.jsx)("div",{children:"\uD83D\uDCCC"}),(0,d.jsx)("h3",{children:a}),(0,d.jsx)("p",{children:b})]})}function b$({view:a,setView:b,count:c}){return(0,d.jsxs)("section",{className:"pp-toolbar",children:[(0,d.jsxs)("div",{className:"pp-tabs",children:[(0,d.jsx)("button",{type:"button",className:"cards"===a?"active":"",onClick:()=>b("cards"),children:"Cards"}),(0,d.jsx)("button",{type:"button",className:"table"===a?"active":"",onClick:()=>b("table"),children:"Table"}),(0,d.jsx)("button",{type:"button",className:"analytics"===a?"active":"",onClick:()=>b("analytics"),children:"Analytics"})]}),(0,d.jsxs)(bW,{children:[c," shown"]})]})}let b_=`
.pp-page {
  min-height: 100dvh;
  width: 100%;
  min-width: 0;
  padding: calc(8px * var(--local-density-scale, 1));
  padding-bottom: max(32px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--pp-primary) 10%, transparent), transparent 34rem),
    var(--bg, #f7f8fb);
  color: var(--text, #111);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--font-size, 14px);
  overflow-x: hidden;
}
.pp-page * { box-sizing: border-box; }
.pp-page button, .pp-page input, .pp-page select, .pp-page textarea { font: inherit; max-width: 100%; }
.pp-page input, .pp-page select, .pp-page textarea {
  width: 100%;
  min-height: 44px;
  border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10)));
  border-radius: 16px;
  padding: 0 12px;
  background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #111));
  outline: none;
  font-weight: 750;
}
.pp-page textarea { min-height: 120px; padding: 12px; resize: vertical; line-height: 1.55; }
.pp-state {
  min-height: min(420px, calc(100dvh - 32px));
  width: min(480px, 100%);
  margin: 0 auto;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  padding: 22px;
  border-radius: 28px;
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: var(--shell-shadow, 0 24px 60px rgba(15,23,42,.08));
  text-align: center;
}
.pp-state h2 { margin: 0; font-size: 22px; letter-spacing: -.04em; font-weight: 1000; }
.pp-state p { margin: 0; color: var(--muted, #64748b); line-height: 1.6; }
.pp-hero {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 10px;
  padding: 12px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 18% 8%, color-mix(in srgb, var(--pp-primary) 16%, transparent), transparent 20rem),
    linear-gradient(135deg, var(--card-bg, var(--surface, #fff)), color-mix(in srgb, var(--pp-primary) 7%, var(--card-bg, #fff)) 72%);
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 18px 46px rgba(15,23,42,.07);
  overflow: hidden;
}
.pp-hero-left { min-width: 0; display: flex; align-items: center; gap: 10px; flex: 1; }
.pp-icon {
  width: 48px; height: 48px; flex: 0 0 auto; display: grid; place-items: center;
  border-radius: 18px; background: var(--pp-primary); color: #fff; font-size: 22px;
  box-shadow: 0 12px 26px color-mix(in srgb, var(--pp-primary) 28%, transparent);
}
.pp-title { min-width: 0; }
.pp-title p, .pp-title h2, .pp-title span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-title p { margin: 0 0 2px; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-title h2 { margin: 0; color: var(--text, #111); font-size: clamp(20px, 5vw, 30px); font-weight: 1000; letter-spacing: -.06em; line-height: 1; }
.pp-title span { margin-top: 3px; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; }
.pp-btn, .pp-primary {
  min-height: 42px; border-radius: 999px; padding: 0 14px; font-weight: 950; cursor: pointer;
}
.pp-btn { border: 1px solid var(--border, rgba(0,0,0,.10)); background: var(--surface, #fff); color: var(--text, #111); }
.pp-primary { border: 0; background: var(--pp-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--pp-primary) 25%, transparent); }
.pp-summary-grid, .pp-list, .pp-mini-grid, .pp-breakdown-grid { display: grid; gap: 8px; }
.pp-summary-grid { margin-top: 10px; grid-template-columns: repeat(2, minmax(0,1fr)); }
.pp-summary, .pp-card, .pp-panel, .pp-toolbar, .pp-filter, .pp-empty, .pp-breakdown {
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 12px 28px rgba(15,23,42,.045);
}
.pp-summary { min-width: 0; display: flex; align-items: center; gap: 10px; padding: 12px; border-radius: 22px; overflow: hidden; }
.pp-summary.positive { background: linear-gradient(135deg, rgba(34,197,94,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary.warning { background: linear-gradient(135deg, rgba(245,158,11,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary > div:first-child {
  width: 36px; height: 36px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 15px;
  background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff));
}
.pp-summary section { min-width: 0; }
.pp-summary strong, .pp-summary span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-summary strong { font-size: 18px; font-weight: 1000; letter-spacing: -.05em; color: var(--text, #111); }
.pp-summary span { margin-top: 2px; color: var(--muted, #64748b); font-size: 11px; font-weight: 850; }
.pp-toolbar, .pp-filter, .pp-panel { margin-top: 10px; padding: 10px; border-radius: 24px; }
.pp-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.pp-tabs {
  display: inline-grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 4px; width: min(390px, 100%);
  padding: 4px; border-radius: 999px; background: var(--shell-section-bg, color-mix(in srgb, var(--pp-primary) 7%, var(--surface, #fff)));
  border: 1px solid var(--border, rgba(0,0,0,.08));
}
.pp-tabs button { min-width: 0; min-height: 35px; border: 0; border-radius: 999px; padding: 0 9px; background: transparent; color: var(--muted, #64748b); font-size: 12px; font-weight: 950; cursor: pointer; }
.pp-tabs button.active { background: var(--pp-primary); color: #fff; }
.pp-filter { display: grid; grid-template-columns: minmax(0,1fr); gap: 8px; }
.pp-section { margin-top: 16px; }
.pp-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 10px; }
.pp-head p { margin: 0; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-head h3 { margin: 2px 0 0; color: var(--text, #111); font-size: 19px; font-weight: 1000; letter-spacing: -.04em; }
.pp-list { margin-top: 10px; }
.pp-card, .pp-breakdown, .pp-empty { min-width: 0; border-radius: 24px; padding: 13px; overflow: hidden; }
.pp-card-top { display: flex; align-items: flex-start; gap: 10px; }
.pp-avatar {
  width: 56px; height: 56px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 19px;
  background: var(--pp-primary); color: #fff; font-size: 22px; box-shadow: 0 12px 24px rgba(15,23,42,.12);
}
.pp-card-main { min-width: 0; flex: 1; }
.pp-card-main h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; letter-spacing: -.04em; }
.pp-card-main p { margin: 4px 0 0; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; line-height: 1.4; }
.pp-chip-row { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; margin-top: 10px; }
.pp-chip {
  max-width: 100%; display: inline-flex; align-items: center; min-height: 25px; padding: 4px 9px; border-radius: 999px;
  font-size: 11px; font-weight: 950; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize;
}
.pp-chip.green { background: rgba(34,197,94,.14); color: #22c55e; }
.pp-chip.red { background: rgba(239,68,68,.14); color: #ef4444; }
.pp-chip.blue { background: rgba(59,130,246,.15); color: #60a5fa; }
.pp-chip.gray { background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); color: var(--muted, #64748b); }
.pp-chip.orange { background: rgba(245,158,11,.16); color: #f59e0b; }
.pp-chip.purple { background: rgba(147,51,234,.15); color: #a855f7; }
.pp-mini-grid { grid-template-columns: repeat(2, minmax(0,1fr)); margin-top: 10px; }
.pp-mini {
  min-width: 0; padding: 9px; border-radius: 17px; background: color-mix(in srgb, var(--muted, #64748b) 9%, transparent);
  border: 1px solid var(--border, rgba(0,0,0,.08)); overflow: hidden;
}
.pp-mini strong, .pp-mini span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-mini strong { color: var(--text, #111); font-size: 13px; font-weight: 1000; }
.pp-mini span { margin-top: 2px; color: var(--muted, #64748b); font-size: 10px; font-weight: 850; }
.pp-table-wrap { width: 100%; overflow-x: auto; border-radius: 18px; border: 1px solid var(--border, rgba(0,0,0,.08)); }
.pp-table { width: 100%; min-width: 980px; border-collapse: collapse; background: var(--card-bg, var(--surface, #fff)); }
.pp-table th, .pp-table td { padding: 10px; border-bottom: 1px solid var(--border, rgba(0,0,0,.08)); text-align: left; vertical-align: top; color: var(--text, #111); font-size: 13px; }
.pp-table th { color: var(--muted, #64748b); font-size: 11px; font-weight: 1000; text-transform: uppercase; letter-spacing: .07em; background: color-mix(in srgb, var(--pp-primary) 6%, var(--card-bg, #fff)); }
.pp-empty { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 190px; text-align: center; border-style: dashed; }
.pp-empty div { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 22px; background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff)); font-size: 28px; }
.pp-empty h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; }
.pp-empty p { margin: 0; color: var(--muted, #64748b); font-size: 13px; line-height: 1.6; }
.pp-message { margin: 10px 0; padding: 12px; border-radius: 18px; background: rgba(245,158,11,.14); color: #f59e0b; font-size: 13px; font-weight: 900; }
.pp-drawer-layer { position: fixed; inset: 0; z-index: 80; }
.pp-drawer-overlay { position: absolute; inset: 0; border: 0; background: rgba(15,23,42,.52); }
.pp-drawer {
  position: absolute; right: 0; top: 0; bottom: 0; width: min(94vw, 720px); max-width: 100vw; overflow-y: auto; overflow-x: hidden;
  background: var(--bg, #f7f8fb); color: var(--text, #111); padding: 14px; box-shadow: var(--shell-shadow, -24px 0 70px rgba(15,23,42,.22));
}
.pp-drawer-head { position: sticky; top: 0; z-index: 2; display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; padding: 6px 0 12px; background: var(--bg, #f7f8fb); }
.pp-drawer-head p { margin: 0; color: var(--pp-primary); font-size: 11px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-drawer-head h2 { margin: 2px 0 0; color: var(--text, #111); font-size: 22px; font-weight: 1000; letter-spacing: -.05em; }
.pp-drawer-head span { margin-top: 3px; display: block; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-drawer-head button { width: 38px; height: 38px; flex: 0 0 auto; border: 1px solid var(--border, rgba(0,0,0,.10)); border-radius: 15px; background: var(--surface, #fff); color: var(--text, #111); font-weight: 1000; cursor: pointer; }
.pp-form-card { margin-top: 10px; padding: 12px; border-radius: 22px; background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); }
.pp-form-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 9px; }
.pp-form-grid label { min-width: 0; display: grid; gap: 6px; }
.pp-form-grid label span { color: var(--muted, #64748b); font-size: 11px; font-weight: 950; letter-spacing: .06em; text-transform: uppercase; }
.pp-form-grid .wide { grid-column: 1 / -1; }
.pp-drawer-actions { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px; margin-top: 12px; }
.pp-bar { height: 8px; margin-top: 12px; border-radius: 999px; background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); overflow: hidden; }
.pp-bar div { height: 100%; background: var(--pp-primary); border-radius: inherit; }
@media (min-width: 680px) {
  .pp-page { padding: calc(12px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-filter { grid-template-columns: minmax(0,1fr) 190px 150px; }
  .pp-mini-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-form-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (min-width: 1040px) {
  .pp-page { padding: calc(16px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(6, minmax(0,1fr)); }
  .pp-list, .pp-breakdown-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (max-width: 520px) {
  .pp-page { padding: calc(6px * var(--local-density-scale, 1)); }
  .pp-hero { flex-direction: column; border-radius: 22px; padding: 10px; }
  .pp-actions { display: grid; grid-template-columns: minmax(0,1fr); }
  .pp-btn, .pp-primary { width: 100%; }
  .pp-summary-grid { gap: 6px; }
  .pp-summary { padding: 10px; border-radius: 19px; }
  .pp-toolbar { align-items: stretch; flex-direction: column; border-radius: 20px; }
  .pp-tabs { width: 100%; }
  .pp-card, .pp-empty, .pp-breakdown { border-radius: 20px; padding: 11px; }
  .pp-avatar { width: 52px; height: 52px; flex-basis: 52px; }
  .pp-mini-grid { grid-template-columns: repeat(1, minmax(0,1fr)); }
  .pp-drawer-actions { grid-template-columns: minmax(0,1fr); }
  .pp-drawer { width: min(96vw, 720px); padding: 12px; }
}
`;async function b0(a,b,c){let[d,e,f,g,h]=await Promise.all([bV("parents"),bV("students"),bV("studentParents"),bV("userMemberships").then(async a=>a.length?a:bV("memberships")),bV("users").then(async a=>a.length?a:bV("accountUsers"))]),i=g.find(d=>"parent"===d.role&&bT(d,a,String(b),String(c))),j=h.find(a=>String(a?.id||a?.localId||"")===String(i?.userLocalId||i?.userId||i?.accountUserId||"")),k=d.find(d=>bT(d,a,String(b),String(c))&&(String(d.id)===String(i?.parentLocalId)||!!(j?.email&&d.email&&String(d.email).toLowerCase()===String(j.email).toLowerCase())))||null,l=new Set;f.forEach(a=>{k?.id&&Number(a.parentId||a.parentLocalId)===Number(k.id)&&l.add(Number(a.studentId||a.studentLocalId))}),i?.studentLocalId&&l.add(Number(i.studentLocalId));let m=e.filter(d=>bT(d,a,String(b),String(c))&&(l.has(Number(d.id))||!!(k?.email&&String(d.parentEmail||"").toLowerCase()===String(k.email).toLowerCase())||!!(k?.phone&&String(d.parentPhone||"")===String(k.phone))));return{parent:k,children:m,user:j}}function b1(a){let b=Number(a||0);return Number.isFinite(b)?b:0}function b2(){return Date.now()}function b3(a,b=""){return String(a||"").trim()||b}function b4(a){if(!a)return"Not set";let b="number"==typeof a?a:new Date(a).getTime();if(!Number.isFinite(b))return"Not set";try{return new Intl.DateTimeFormat(void 0,{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(b))}catch{return"Not set"}}function b5(a,b,c,d){return!!a&&!a.isDeleted&&(!a.accountId||a.accountId===b)&&Number(a.schoolId)===Number(c)&&Number(a.branchId)===Number(d)}function b6(a){return b3(a?.fullName||a?.name||a?.title||a?.label||a?.email,"Unnamed")}async function b7(a){let b=n.db[a];return b?.toArray?b.toArray():[]}function b8(a){return a?.id||a?.localId}function b9(a){return String(a?.userLocalId||a?.userId||a?.accountUserId||"")}function ca({children:a,tone:b="gray"}){return(0,d.jsx)("span",{className:`pp-chip ${b}`,children:a})}function cb({label:a,value:b,icon:c,positive:e,warning:f}){return(0,d.jsxs)("article",{className:`pp-summary ${e?"positive":""} ${f?"warning":""}`,children:[(0,d.jsx)("div",{children:c}),(0,d.jsxs)("section",{children:[(0,d.jsx)("strong",{children:b}),(0,d.jsx)("span",{children:a})]})]})}function cc({title:a="No records",text:b}){return(0,d.jsxs)("section",{className:"pp-empty",children:[(0,d.jsx)("div",{children:"\uD83D\uDCCC"}),(0,d.jsx)("h3",{children:a}),(0,d.jsx)("p",{children:b})]})}function cd({view:a,setView:b,count:c}){return(0,d.jsxs)("section",{className:"pp-toolbar",children:[(0,d.jsxs)("div",{className:"pp-tabs",children:[(0,d.jsx)("button",{type:"button",className:"cards"===a?"active":"",onClick:()=>b("cards"),children:"Cards"}),(0,d.jsx)("button",{type:"button",className:"table"===a?"active":"",onClick:()=>b("table"),children:"Table"}),(0,d.jsx)("button",{type:"button",className:"analytics"===a?"active":"",onClick:()=>b("analytics"),children:"Analytics"})]}),(0,d.jsxs)(ca,{children:[c," shown"]})]})}let ce=`
.pp-page {
  min-height: 100dvh;
  width: 100%;
  min-width: 0;
  padding: calc(8px * var(--local-density-scale, 1));
  padding-bottom: max(32px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--pp-primary) 10%, transparent), transparent 34rem),
    var(--bg, #f7f8fb);
  color: var(--text, #111);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--font-size, 14px);
  overflow-x: hidden;
}
.pp-page * { box-sizing: border-box; }
.pp-page button, .pp-page input, .pp-page select, .pp-page textarea { font: inherit; max-width: 100%; }
.pp-page input, .pp-page select, .pp-page textarea {
  width: 100%;
  min-height: 44px;
  border: 1px solid var(--input-border, var(--border, rgba(0,0,0,.10)));
  border-radius: 16px;
  padding: 0 12px;
  background: var(--input-bg, var(--surface, #fff));
  color: var(--input-text, var(--text, #111));
  outline: none;
  font-weight: 750;
}
.pp-page textarea { min-height: 120px; padding: 12px; resize: vertical; line-height: 1.55; }
.pp-state {
  min-height: min(420px, calc(100dvh - 32px));
  width: min(480px, 100%);
  margin: 0 auto;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  padding: 22px;
  border-radius: 28px;
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: var(--shell-shadow, 0 24px 60px rgba(15,23,42,.08));
  text-align: center;
}
.pp-state h2 { margin: 0; font-size: 22px; letter-spacing: -.04em; font-weight: 1000; }
.pp-state p { margin: 0; color: var(--muted, #64748b); line-height: 1.6; }
.pp-hero {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 10px;
  padding: 12px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 18% 8%, color-mix(in srgb, var(--pp-primary) 16%, transparent), transparent 20rem),
    linear-gradient(135deg, var(--card-bg, var(--surface, #fff)), color-mix(in srgb, var(--pp-primary) 7%, var(--card-bg, #fff)) 72%);
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 18px 46px rgba(15,23,42,.07);
  overflow: hidden;
}
.pp-hero-left { min-width: 0; display: flex; align-items: center; gap: 10px; flex: 1; }
.pp-icon {
  width: 48px; height: 48px; flex: 0 0 auto; display: grid; place-items: center;
  border-radius: 18px; background: var(--pp-primary); color: #fff; font-size: 22px;
  box-shadow: 0 12px 26px color-mix(in srgb, var(--pp-primary) 28%, transparent);
}
.pp-title { min-width: 0; }
.pp-title p, .pp-title h2, .pp-title span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-title p { margin: 0 0 2px; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-title h2 { margin: 0; color: var(--text, #111); font-size: clamp(20px, 5vw, 30px); font-weight: 1000; letter-spacing: -.06em; line-height: 1; }
.pp-title span { margin-top: 3px; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; }
.pp-btn, .pp-primary {
  min-height: 42px; border-radius: 999px; padding: 0 14px; font-weight: 950; cursor: pointer;
}
.pp-btn { border: 1px solid var(--border, rgba(0,0,0,.10)); background: var(--surface, #fff); color: var(--text, #111); }
.pp-primary { border: 0; background: var(--pp-primary); color: #fff; box-shadow: 0 14px 32px color-mix(in srgb, var(--pp-primary) 25%, transparent); }
.pp-summary-grid, .pp-list, .pp-mini-grid, .pp-breakdown-grid { display: grid; gap: 8px; }
.pp-summary-grid { margin-top: 10px; grid-template-columns: repeat(2, minmax(0,1fr)); }
.pp-summary, .pp-card, .pp-panel, .pp-toolbar, .pp-filter, .pp-empty, .pp-breakdown {
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 12px 28px rgba(15,23,42,.045);
}
.pp-summary { min-width: 0; display: flex; align-items: center; gap: 10px; padding: 12px; border-radius: 22px; overflow: hidden; }
.pp-summary.positive { background: linear-gradient(135deg, rgba(34,197,94,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary.warning { background: linear-gradient(135deg, rgba(245,158,11,.10), var(--card-bg, var(--surface, #fff))); }
.pp-summary > div:first-child {
  width: 36px; height: 36px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 15px;
  background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff));
}
.pp-summary section { min-width: 0; }
.pp-summary strong, .pp-summary span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-summary strong { font-size: 18px; font-weight: 1000; letter-spacing: -.05em; color: var(--text, #111); }
.pp-summary span { margin-top: 2px; color: var(--muted, #64748b); font-size: 11px; font-weight: 850; }
.pp-toolbar, .pp-filter, .pp-panel { margin-top: 10px; padding: 10px; border-radius: 24px; }
.pp-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.pp-tabs {
  display: inline-grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 4px; width: min(390px, 100%);
  padding: 4px; border-radius: 999px; background: var(--shell-section-bg, color-mix(in srgb, var(--pp-primary) 7%, var(--surface, #fff)));
  border: 1px solid var(--border, rgba(0,0,0,.08));
}
.pp-tabs button { min-width: 0; min-height: 35px; border: 0; border-radius: 999px; padding: 0 9px; background: transparent; color: var(--muted, #64748b); font-size: 12px; font-weight: 950; cursor: pointer; }
.pp-tabs button.active { background: var(--pp-primary); color: #fff; }
.pp-filter { display: grid; grid-template-columns: minmax(0,1fr); gap: 8px; }
.pp-section { margin-top: 16px; }
.pp-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 10px; }
.pp-head p { margin: 0; color: var(--pp-primary); font-size: 10px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-head h3 { margin: 2px 0 0; color: var(--text, #111); font-size: 19px; font-weight: 1000; letter-spacing: -.04em; }
.pp-list { margin-top: 10px; }
.pp-card, .pp-breakdown, .pp-empty { min-width: 0; border-radius: 24px; padding: 13px; overflow: hidden; }
.pp-card-top { display: flex; align-items: flex-start; gap: 10px; }
.pp-avatar {
  width: 56px; height: 56px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 19px;
  background: var(--pp-primary); color: #fff; font-size: 22px; box-shadow: 0 12px 24px rgba(15,23,42,.12);
}
.pp-card-main { min-width: 0; flex: 1; }
.pp-card-main h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; letter-spacing: -.04em; }
.pp-card-main p { margin: 4px 0 0; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; line-height: 1.4; }
.pp-chip-row { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; margin-top: 10px; }
.pp-chip {
  max-width: 100%; display: inline-flex; align-items: center; min-height: 25px; padding: 4px 9px; border-radius: 999px;
  font-size: 11px; font-weight: 950; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-transform: capitalize;
}
.pp-chip.green { background: rgba(34,197,94,.14); color: #22c55e; }
.pp-chip.red { background: rgba(239,68,68,.14); color: #ef4444; }
.pp-chip.blue { background: rgba(59,130,246,.15); color: #60a5fa; }
.pp-chip.gray { background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); color: var(--muted, #64748b); }
.pp-chip.orange { background: rgba(245,158,11,.16); color: #f59e0b; }
.pp-chip.purple { background: rgba(147,51,234,.15); color: #a855f7; }
.pp-mini-grid { grid-template-columns: repeat(2, minmax(0,1fr)); margin-top: 10px; }
.pp-mini {
  min-width: 0; padding: 9px; border-radius: 17px; background: color-mix(in srgb, var(--muted, #64748b) 9%, transparent);
  border: 1px solid var(--border, rgba(0,0,0,.08)); overflow: hidden;
}
.pp-mini strong, .pp-mini span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pp-mini strong { color: var(--text, #111); font-size: 13px; font-weight: 1000; }
.pp-mini span { margin-top: 2px; color: var(--muted, #64748b); font-size: 10px; font-weight: 850; }
.pp-table-wrap { width: 100%; overflow-x: auto; border-radius: 18px; border: 1px solid var(--border, rgba(0,0,0,.08)); }
.pp-table { width: 100%; min-width: 980px; border-collapse: collapse; background: var(--card-bg, var(--surface, #fff)); }
.pp-table th, .pp-table td { padding: 10px; border-bottom: 1px solid var(--border, rgba(0,0,0,.08)); text-align: left; vertical-align: top; color: var(--text, #111); font-size: 13px; }
.pp-table th { color: var(--muted, #64748b); font-size: 11px; font-weight: 1000; text-transform: uppercase; letter-spacing: .07em; background: color-mix(in srgb, var(--pp-primary) 6%, var(--card-bg, #fff)); }
.pp-empty { display: grid; place-items: center; align-content: center; gap: 8px; min-height: 190px; text-align: center; border-style: dashed; }
.pp-empty div { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 22px; background: color-mix(in srgb, var(--pp-primary) 12%, var(--surface, #fff)); font-size: 28px; }
.pp-empty h3 { margin: 0; color: var(--text, #111); font-size: 18px; font-weight: 1000; }
.pp-empty p { margin: 0; color: var(--muted, #64748b); font-size: 13px; line-height: 1.6; }
.pp-message { margin: 10px 0; padding: 12px; border-radius: 18px; background: rgba(245,158,11,.14); color: #f59e0b; font-size: 13px; font-weight: 900; }
.pp-drawer-layer { position: fixed; inset: 0; z-index: 80; }
.pp-drawer-overlay { position: absolute; inset: 0; border: 0; background: rgba(15,23,42,.52); }
.pp-drawer {
  position: absolute; right: 0; top: 0; bottom: 0; width: min(94vw, 720px); max-width: 100vw; overflow-y: auto; overflow-x: hidden;
  background: var(--bg, #f7f8fb); color: var(--text, #111); padding: 14px; box-shadow: var(--shell-shadow, -24px 0 70px rgba(15,23,42,.22));
}
.pp-drawer-head { position: sticky; top: 0; z-index: 2; display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; padding: 6px 0 12px; background: var(--bg, #f7f8fb); }
.pp-drawer-head p { margin: 0; color: var(--pp-primary); font-size: 11px; font-weight: 950; letter-spacing: .08em; text-transform: uppercase; }
.pp-drawer-head h2 { margin: 2px 0 0; color: var(--text, #111); font-size: 22px; font-weight: 1000; letter-spacing: -.05em; }
.pp-drawer-head span { margin-top: 3px; display: block; color: var(--muted, #64748b); font-size: 12px; font-weight: 750; }
.pp-drawer-head button { width: 38px; height: 38px; flex: 0 0 auto; border: 1px solid var(--border, rgba(0,0,0,.10)); border-radius: 15px; background: var(--surface, #fff); color: var(--text, #111); font-weight: 1000; cursor: pointer; }
.pp-form-card { margin-top: 10px; padding: 12px; border-radius: 22px; background: var(--card-bg, var(--surface, #fff)); border: 1px solid var(--border, rgba(0,0,0,.10)); }
.pp-form-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 9px; }
.pp-form-grid label { min-width: 0; display: grid; gap: 6px; }
.pp-form-grid label span { color: var(--muted, #64748b); font-size: 11px; font-weight: 950; letter-spacing: .06em; text-transform: uppercase; }
.pp-form-grid .wide { grid-column: 1 / -1; }
.pp-drawer-actions { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px; margin-top: 12px; }
.pp-bar { height: 8px; margin-top: 12px; border-radius: 999px; background: color-mix(in srgb, var(--muted, #64748b) 14%, transparent); overflow: hidden; }
.pp-bar div { height: 100%; background: var(--pp-primary); border-radius: inherit; }
@media (min-width: 680px) {
  .pp-page { padding: calc(12px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-filter { grid-template-columns: minmax(0,1fr) 190px 150px; }
  .pp-mini-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
  .pp-form-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (min-width: 1040px) {
  .pp-page { padding: calc(16px * var(--local-density-scale, 1)); }
  .pp-summary-grid { grid-template-columns: repeat(6, minmax(0,1fr)); }
  .pp-list, .pp-breakdown-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (max-width: 520px) {
  .pp-page { padding: calc(6px * var(--local-density-scale, 1)); }
  .pp-hero { flex-direction: column; border-radius: 22px; padding: 10px; }
  .pp-actions { display: grid; grid-template-columns: minmax(0,1fr); }
  .pp-btn, .pp-primary { width: 100%; }
  .pp-summary-grid { gap: 6px; }
  .pp-summary { padding: 10px; border-radius: 19px; }
  .pp-toolbar { align-items: stretch; flex-direction: column; border-radius: 20px; }
  .pp-tabs { width: 100%; }
  .pp-card, .pp-empty, .pp-breakdown { border-radius: 20px; padding: 11px; }
  .pp-avatar { width: 52px; height: 52px; flex-basis: 52px; }
  .pp-mini-grid { grid-template-columns: repeat(1, minmax(0,1fr)); }
  .pp-drawer-actions { grid-template-columns: minmax(0,1fr); }
  .pp-drawer { width: min(96vw, 720px); padding: 12px; }
}
`;async function cf(a,b,c){let[d,e,f,g,h]=await Promise.all([b7("parents"),b7("students"),b7("studentParents"),b7("userMemberships").then(async a=>a.length?a:b7("memberships")),b7("users").then(async a=>a.length?a:b7("accountUsers"))]),i=g.find(d=>"parent"===d.role&&b5(d,a,Number(b),Number(c))),j=h.find(a=>String(b8(a)||"")===b9(i)),k=d.find(d=>b5(d,a,Number(b),Number(c))&&(Number(d.id)===Number(i?.parentLocalId)||!!(j?.email&&d.email&&String(d.email).toLowerCase()===String(j.email).toLowerCase())))||null,l=new Set;f.forEach(a=>{k?.id&&Number(a.parentId||a.parentLocalId)===Number(k.id)&&l.add(Number(a.studentId||a.studentLocalId))}),i?.studentLocalId&&l.add(Number(i.studentLocalId));let m=e.filter(d=>b5(d,a,Number(b),Number(c))&&(l.has(Number(d.id))||!!(k?.email&&String(d.parentEmail||"").toLowerCase()===String(k.email).toLowerCase())||!!(k?.phone&&String(d.parentPhone||"")===String(k.phone))));return{parent:k,children:m,user:j}}let cg=ac.$S.PARENTS,ch={fullName:"",title:"",phone:"",email:"",occupation:"",emergencyContact:"",relationship:"guardian",address:"",addressLine1:"",addressLine2:"",locality:"",city:"",district:"",region:"",postalCode:"",country:"Ghana",locationLabel:"",formattedAddress:"",latitude:"",longitude:"",accuracyMeters:"",locationType:"home",locationSource:"manual",locationPrecision:"approximate",locationCapturedAt:void 0,mapVisible:!1,locationConsentGiven:!1,locationConsentAt:void 0,locationRestricted:!0,photo:"",photoMediaId:void 0,coverPhoto:"",coverPhotoMediaId:void 0},ci=a=>{let b=null==a?"":String(a).trim();return b&&"0"!==b?b:""},cj=(a,b)=>ci(a)===ci(b);function ck(...a){for(let b of a){let a=ci(b);if(a)return a}return""}function cl(a){let b=String(a||"").trim();if(!(!b||b.startsWith("blob:"))&&!b.startsWith("data:image/"))return b}function cm(a){let b=String(a||"").trim();if(!b.startsWith("#"))return"#ffffff";let c=b.slice(1);if(3===c.length&&(c=c.split("").map(a=>a+a).join("")),!/^[0-9a-fA-F]{6}$/.test(c))return"#ffffff";let d=Number.parseInt(c,16);return(299*(d>>16&255)+587*(d>>8&255)+114*(255&d))/1e3>155?"#111827":"#ffffff"}function cn({name:a,photo:b,primary:c}){return(0,d.jsx)("div",{className:"pp-avatar",style:{background:b?`url("${b}") center/cover`:c,color:b?"#ffffff":cm(c)},children:b?null:String(a||"P").slice(0,1).toUpperCase()})}function co({children:a,tone:b="gray"}){return(0,d.jsx)("span",{className:`pp-chip ${b}`,children:a})}function cp({label:a,value:b,wide:c=!1}){return(0,d.jsxs)("article",{className:`pp-detail ${c?"wide":""}`,children:[(0,d.jsx)("span",{children:a}),(0,d.jsx)("strong",{children:b})]})}function cq({label:a,children:b,required:c=!1,wide:e=!1}){return(0,d.jsxs)("label",{className:e?"wide":"",children:[(0,d.jsxs)("span",{children:[a,c?" *":""]}),b]})}function cr({label:a,text:b,checked:c,onChange:e}){return(0,d.jsxs)("label",{className:"pp-toggle",children:[(0,d.jsxs)("span",{children:[(0,d.jsx)("strong",{children:a}),(0,d.jsx)("small",{children:b})]}),(0,d.jsx)("input",{type:"checkbox",checked:c,onChange:a=>e(a.target.checked)}),(0,d.jsx)("i",{})]})}function cs({primary:a,title:b,text:c}){return(0,d.jsxs)("main",{className:"pp-page",style:{"--pp-primary":a,"--pp-primary-text":cm(a)},children:[(0,d.jsx)("style",{children:ct}),(0,d.jsxs)("section",{className:"pp-state",children:[(0,d.jsx)("div",{className:"pp-spinner"}),(0,d.jsx)("h2",{children:b}),(0,d.jsx)("p",{children:c})]})]})}let ct=`
@keyframes ppSpin{to{transform:rotate(360deg)}}
.pp-page{
  min-height:100dvh;
  width:100%;
  min-width:0;
  display:grid;
  align-content:start;
  gap:8px;
  padding:8px;
  padding-bottom:max(40px,env(safe-area-inset-bottom));
  background:var(--bg,#f7f8fb);
  color:var(--text,#111827);
  font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);
  font-size:var(--font-size,14px);
}
.pp-page *,.pp-page *::before,.pp-page *::after{box-sizing:border-box;min-width:0}
.pp-page button,.pp-page input,.pp-page select{font:inherit;max-width:100%}
.pp-toolbar,.pp-profile-card,.pp-detail,.pp-form-section,.pp-protected-note,.pp-state{
  background:var(--card-bg,var(--surface,#fff));
  border:1px solid var(--border,rgba(0,0,0,.10));
}
.pp-toolbar{
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto;
  align-items:center;
  gap:8px;
  padding:8px;
  border-radius:15px;
}
.pp-status-dot{
  width:9px;height:9px;border-radius:999px;
  box-shadow:0 0 0 3px color-mix(in srgb,currentColor 11%,transparent);
}
.pp-status-dot.green{background:#22c55e}
.pp-status-dot.orange{background:#f59e0b}
.pp-toolbar-copy{display:grid;gap:1px}
.pp-toolbar-copy strong{font-size:11px;font-weight:1000}
.pp-toolbar-copy small{color:var(--muted,#64748b);font-size:8.5px}
.pp-primary-button,.pp-secondary-button,.pp-icon-button{
  min-height:36px;
  border-radius:10px;
  padding:0 12px;
  font-size:9px;
  font-weight:950;
  cursor:pointer;
}
.pp-primary-button{
  border:1px solid var(--pp-primary);
  background:var(--pp-primary);
  color:var(--pp-primary-text);
}
.pp-secondary-button{
  border:1px solid var(--border,rgba(0,0,0,.10));
  background:var(--surface,#fff);
  color:var(--text,#111827);
}
.pp-icon-button{
  width:36px;padding:0;
  border:1px solid var(--border,rgba(0,0,0,.10));
  background:var(--surface,#fff);
  color:var(--text,#111827);
  font-size:17px;
}
.pp-profile-card{
  overflow:hidden;
  border-radius:17px;
}
.pp-cover{
  position:relative;
  min-height:130px;
}
.pp-cover-actions{
  position:absolute;
  right:8px;
  bottom:8px;
  display:flex;
  gap:5px;
}
.pp-cover-actions label,.pp-cover-actions button{
  min-height:31px;
  display:inline-flex;
  align-items:center;
  border:1px solid rgba(255,255,255,.34);
  border-radius:9px;
  padding:0 9px;
  background:rgba(15,23,42,.64);
  color:#fff;
  font-size:8px;
  font-weight:900;
  cursor:pointer;
  backdrop-filter:blur(8px);
}
.pp-cover-actions input,.pp-photo-actions input{display:none}
.pp-profile-main{
  display:flex;
  align-items:flex-end;
  gap:10px;
  padding:0 10px 11px;
}
.pp-photo-wrap{
  position:relative;
  flex:0 0 auto;
  margin-top:-31px;
}
.pp-avatar{
  width:68px;height:68px;
  display:grid;place-items:center;
  border:4px solid var(--card-bg,var(--surface,#fff));
  border-radius:20px;
  font-size:23px;font-weight:1000;
  overflow:hidden;
  box-shadow:0 10px 24px rgba(15,23,42,.15);
}
.pp-photo-actions{
  position:absolute;
  right:-5px;
  bottom:-5px;
  display:flex;
  gap:3px;
}
.pp-photo-actions label,.pp-photo-actions button{
  width:26px;height:26px;
  display:grid;place-items:center;
  border:2px solid var(--card-bg,var(--surface,#fff));
  border-radius:999px;
  background:var(--pp-primary);
  color:var(--pp-primary-text);
  font-size:11px;
  font-weight:1000;
  cursor:pointer;
}
.pp-profile-copy{padding-top:8px}
.pp-profile-copy h1{
  margin:0;
  font-size:17px;
  font-weight:1000;
  letter-spacing:-.04em;
}
.pp-profile-copy p{
  margin:3px 0 0;
  color:var(--muted,#64748b);
  font-size:9px;
}
.pp-chips{
  display:flex;
  flex-wrap:wrap;
  gap:5px;
  margin-top:6px;
}
.pp-chip{
  min-height:23px;
  display:inline-flex;
  align-items:center;
  padding:3px 7px;
  border-radius:999px;
  font-size:8px;
  font-weight:950;
}
.pp-chip.green{background:rgba(34,197,94,.12);color:#15803d}
.pp-chip.blue{background:rgba(59,130,246,.12);color:#1d4ed8}
.pp-chip.orange{background:rgba(245,158,11,.14);color:#b45309}
.pp-chip.gray{background:color-mix(in srgb,var(--muted,#64748b) 12%,transparent);color:var(--muted,#64748b)}
.pp-details-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:7px;
}
.pp-detail{
  display:grid;
  gap:4px;
  min-height:65px;
  align-content:center;
  padding:9px;
  border-radius:12px;
}
.pp-detail.wide{grid-column:1/-1}
.pp-detail span{
  color:var(--muted,#64748b);
  font-size:8px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.04em;
}
.pp-detail strong{
  overflow-wrap:anywhere;
  font-size:10px;
  line-height:1.45;
}
.pp-form{display:grid;gap:8px}
.pp-form-section{
  padding:10px;
  border-radius:14px;
}
.pp-section-head{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:8px;
  padding-bottom:9px;
  border-bottom:1px solid var(--border,rgba(0,0,0,.08));
}
.pp-section-head strong,.pp-section-head small{display:block}
.pp-section-head strong{font-size:11px;font-weight:1000}
.pp-section-head small{
  margin-top:2px;
  color:var(--muted,#64748b);
  font-size:8px;
  line-height:1.45;
}
.pp-form-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:8px;
  padding-top:9px;
}
.pp-form-grid label{
  display:grid;
  gap:4px;
}
.pp-form-grid label.wide{grid-column:1/-1}
.pp-form-grid label>span{
  color:var(--muted,#64748b);
  font-size:8px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.04em;
}
.pp-form-grid input,.pp-form-grid select{
  width:100%;
  min-height:39px;
  border:1px solid var(--input-border,var(--border,rgba(0,0,0,.10)));
  border-radius:10px;
  padding:0 10px;
  background:var(--input-bg,var(--surface,#fff));
  color:var(--input-text,var(--text,#111827));
  outline:none;
  font-size:9px;
  font-weight:760;
}
.pp-form-grid input:focus,.pp-form-grid select:focus{
  border-color:var(--pp-primary);
  box-shadow:0 0 0 3px color-mix(in srgb,var(--pp-primary) 10%,transparent);
}
.pp-toggle-list{
  display:grid;
  gap:6px;
  padding-top:9px;
}
.pp-toggle{
  display:grid;
  grid-template-columns:minmax(0,1fr) auto;
  align-items:center;
  gap:8px;
  padding:8px;
  border:1px solid var(--border,rgba(0,0,0,.08));
  border-radius:11px;
}
.pp-toggle strong,.pp-toggle small{display:block}
.pp-toggle strong{font-size:9px}
.pp-toggle small{
  margin-top:2px;
  color:var(--muted,#64748b);
  font-size:7.5px;
  line-height:1.4;
}
.pp-toggle input{position:absolute;opacity:0;pointer-events:none}
.pp-toggle i{
  position:relative;
  width:34px;height:20px;
  border-radius:999px;
  background:color-mix(in srgb,var(--muted,#64748b) 22%,transparent);
  transition:.18s ease;
}
.pp-toggle i::after{
  content:"";
  position:absolute;
  top:3px;left:3px;
  width:14px;height:14px;
  border-radius:999px;
  background:#fff;
  box-shadow:0 2px 5px rgba(15,23,42,.2);
  transition:.18s ease;
}
.pp-toggle input:checked+i{background:var(--pp-primary)}
.pp-toggle input:checked+i::after{transform:translateX(14px)}
.pp-protected-note{
  display:flex;
  align-items:flex-start;
  gap:8px;
  padding:9px;
  border-radius:12px;
  background:color-mix(in srgb,var(--pp-primary) 5%,var(--surface,#fff));
}
.pp-protected-note strong,.pp-protected-note p{display:block;margin:0}
.pp-protected-note strong{font-size:9px}
.pp-protected-note p{
  margin-top:2px;
  color:var(--muted,#64748b);
  font-size:7.5px;
  line-height:1.5;
}
.pp-form-actions{
  position:sticky;
  bottom:6px;
  display:flex;
  justify-content:flex-end;
  gap:6px;
  padding:8px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:12px;
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 94%,transparent);
  backdrop-filter:blur(12px);
}
.pp-toast{
  position:sticky;
  top:8px;
  z-index:60;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
  padding:8px 10px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:11px;
  background:var(--surface,#fff);
  font-size:9px;
  font-weight:850;
}
.pp-toast.success{border-color:rgba(34,197,94,.35)}
.pp-toast.error{border-color:rgba(239,68,68,.35)}
.pp-toast.info{border-color:rgba(59,130,246,.35)}
.pp-toast button{
  border:0;background:transparent;color:inherit;font-size:16px;cursor:pointer;
}
.pp-camera-layer{
  position:fixed;
  inset:0;
  z-index:100;
  display:grid;
  place-items:center;
  padding:10px;
  background:rgba(15,23,42,.62);
  backdrop-filter:blur(8px);
}
.pp-camera{
  width:min(580px,100%);
  overflow:hidden;
  border-radius:16px;
  background:var(--surface,#fff);
  color:var(--text,#111827);
}
.pp-camera-head{
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
  gap:8px;
  padding:10px;
}
.pp-camera-head strong,.pp-camera-head small{display:block}
.pp-camera-head strong{font-size:11px}
.pp-camera-head small{margin-top:2px;color:var(--muted,#64748b);font-size:8px}
.pp-camera-head button{
  width:31px;height:31px;
  border:1px solid var(--border,rgba(0,0,0,.10));
  border-radius:9px;
  background:transparent;
  color:inherit;
  font-size:18px;
}
.pp-camera-preview{
  position:relative;
  min-height:300px;
  background:#020617;
}
.pp-camera-preview video{
  display:block;
  width:100%;
  min-height:300px;
  object-fit:cover;
}
.pp-camera-loading{
  position:absolute;
  inset:0;
  display:grid;
  place-items:center;
  color:#fff;
  font-size:10px;
}
.pp-camera-actions{
  display:flex;
  justify-content:flex-end;
  gap:7px;
  padding:10px;
}
.pp-state{
  min-height:min(420px,calc(100dvh - 32px));
  width:min(520px,100%);
  margin:0 auto;
  display:grid;
  place-items:center;
  align-content:center;
  gap:8px;
  padding:22px;
  border-radius:18px;
  text-align:center;
}
.pp-spinner{
  width:34px;height:34px;
  border:4px solid color-mix(in srgb,var(--pp-primary) 18%,transparent);
  border-top-color:var(--pp-primary);
  border-radius:999px;
  animation:ppSpin .8s linear infinite;
}
.pp-state h2,.pp-state p{margin:0}
.pp-state h2{font-size:17px}
.pp-state p{color:var(--muted,#64748b);font-size:9px;line-height:1.55}
@media(min-width:720px){
  .pp-page{padding:12px;gap:10px}
  .pp-toolbar,.pp-profile-card,.pp-details-grid,.pp-form{width:min(920px,100%);margin-left:auto;margin-right:auto}
  .pp-cover{min-height:180px}
  .pp-avatar{width:78px;height:78px;border-radius:23px}
  .pp-details-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
  .pp-detail.wide{grid-column:span 2}
}
@media(max-width:560px){
  .pp-page{padding:7px}
  .pp-cover{min-height:110px}
  .pp-profile-main{align-items:center}
  .pp-avatar{width:62px;height:62px}
  .pp-profile-copy h1{font-size:15px}
  .pp-details-grid,.pp-form-grid{grid-template-columns:1fr}
  .pp-detail.wide,.pp-form-grid label.wide{grid-column:auto}
  .pp-section-head{display:grid}
  .pp-section-head .pp-secondary-button{justify-self:start}
  .pp-form-actions{display:grid;grid-template-columns:1fr 1fr}
}
`;function cu(...a){for(let b of a){let a=function(a){if(null==a||""===a)return null;let b=Number(a);return Number.isFinite(b)&&b>0?b:null}(b);if(a)return a}return null}let cv=[{title:"My Children",defaultOpen:!0,items:[{key:"parentDashboard",label:"Dashboard",icon:"\uD83C\uDFE0"},{key:"children",label:"Children",icon:"\uD83E\uDDD2"},{key:"childAttendance",label:"Attendance",icon:"\uD83D\uDCC5"},{key:"myChildReport",label:"Reports",icon:"\uD83D\uDCCA"},{key:"myChildCumulativeRecord",label:"Cumulative Records",icon:"\uD83D\uDCD1"}]},{title:"Fees & Payments",defaultOpen:!0,items:[{key:"childFees",label:"Fee Statements",icon:"\uD83D\uDCB3"}]},{title:"Communication",defaultOpen:!1,items:[{key:"announcements",label:"Announcements",icon:"\uD83D\uDCE3"},{key:"messages",label:"Messages",icon:"✉️"}]},{title:"Timetable",defaultOpen:!1,items:[{key:"calendar",label:"Calendar",icon:"\uD83D\uDCC6"},{key:"childTimetable",label:"My Child's Timetable",icon:"\uD83D\uDCDA"}]},{title:"Preferences",defaultOpen:!1,items:[{key:"localSettings",label:"Local Settings",icon:"⚙️"},{key:"parentProfile",label:"Profile",icon:"\uD83D\uDC64"}]}],cw={parentDashboard:function(a){return(0,d.jsx)(z,{...a,navSections:cv})},children:function(){(0,l.useRouter)(),(0,E.f)(["parents","studentParents","students","classes","organizations","studentEnrollments","mediaAssets","mediaBlobs"]);let{accountId:a,authenticated:b,loading:c}=(0,h.F)(),{settings:e,loading:f}=(0,i.t)(),{activeSchool:g,activeSchoolId:o,activeBranch:p,activeBranchId:q,loading:r}=(0,j.c)(),s=(0,m.A)(),t=s?.activeMembership,u=F(s?.activeParentId||t?.parentLocalId||t?.parentId),v=F(o||g?.id||e?.schoolId),w=F(q||p?.id||e?.branchId),x=e?.primaryColor||"var(--primary-color, #2563eb)",y=K(x),[z,A]=(0,k.useState)(!0),[B,C]=(0,k.useState)([]),[S,T]=(0,k.useState)([]),[U,V]=(0,k.useState)([]),[W,X]=(0,k.useState)([]),[Y,Z]=(0,k.useState)([]),[$,_]=(0,k.useState)([]),[aa,ab]=(0,k.useState)(""),[ac,ad]=(0,k.useState)("cards"),[ae,af]=(0,k.useState)("all"),[ag,ah]=(0,k.useState)("all"),[ai,aj]=(0,k.useState)("all"),[ak,al]=(0,k.useState)(!1),[am,an]=(0,k.useState)(!1),[ao,ap]=(0,k.useState)(null),[aq,ar]=(0,k.useState)(null),as=(0,D.D)({accountId:a,ownerTable:"students",rows:U,fields:[{fieldKey:"photo",mediaIdKey:"photoMediaId"}]}),at=(a,b)=>{ar({tone:a,message:b}),window.setTimeout(()=>ar(a=>a?.message===b?null:a),3800)},au=b=>(!b.accountId||G(b.accountId,a))&&(!b.schoolId||G(b.schoolId,v))&&(!b.branchId||G(b.branchId,w))&&!b.isDeleted,av=()=>{C([]),T([]),V([]),X([]),Z([]),_([])},aw=async()=>{if(!b||!a||!v||!w){av(),A(!1);return}try{A(!0);let[a,b,c,d,e,f]=await Promise.all([n.db.parents.toArray(),n.db.studentParents.toArray(),n.db.students.toArray(),n.db.classes.toArray(),n.db.organizations.toArray(),n.db.studentEnrollments.toArray()]),g=a.filter(a=>au(a)),h=b.filter(a=>au(a)),i=c.filter(a=>au(a)),j=new Set;u&&j.add(u);let k=H(t?.email||t?.user?.email||s?.activeUser?.email);k&&g.filter(a=>H(a.email)===k).forEach(a=>j.add(F(a.id)));let l=g.filter(a=>j.has(F(a.id))),m=j.size?h.filter(a=>j.has(F(a.parentId))):[],o=new Set(m.map(a=>F(a.studentId)).filter(Boolean)),p=i.filter(a=>o.has(F(a.id))).sort((a,b)=>String(a.fullName||"").localeCompare(String(b.fullName||"")));C(l),T(m),V(p),X(d.filter(a=>au(a)&&!1!==a.active&&!a.isDeleted).sort((a,b)=>a.name.localeCompare(b.name))),Z(e.filter(a=>au(a)&&!1!==a.active&&!a.isDeleted).sort((a,b)=>a.name.localeCompare(b.name))),_(f.filter(a=>au(a)&&o.has(F(a.studentId))))}catch(a){console.error("Failed to load linked children:",a),av(),at("error","Failed to load your linked children.")}finally{A(!1)}},ax=(0,k.useMemo)(()=>new Map(W.map(a=>[F(a.id),a])),[W]),ay=(0,k.useMemo)(()=>new Map(Y.map(a=>[F(a.id),a])),[Y]),az=(0,k.useMemo)(()=>{let a=new Map;return $.slice().sort((a,b)=>Number(b.updatedAt||0)-Number(a.updatedAt||0)).forEach(b=>{let c=F(b.studentId);!c||a.has(c)||"active"===b.status&&a.set(c,b)}),a},[$]),aA=(0,k.useMemo)(()=>{let a=new Map;return S.forEach(b=>{let c=F(b.studentId);c&&(!a.get(c)||b.isPrimary)&&a.set(c,b)}),a},[S]),aB=(0,k.useMemo)(()=>U.map(a=>{let b,c=F(a.id),d=az.get(c),e=F(d?.classId||a.currentClassId),f=ax.get(e),g=ay.get(F(a.organizationId)),h=aA.get(c),i=a.status||"active";return{id:c,student:a,photoUrl:as[c]?.photo||(a=>{let b=String(a||"").trim();if(!(!b||b.startsWith("blob:"))&&!b.startsWith("data:image/"))return b})(a.photo),className:f?.name||"No class assigned",organizationName:g?.name||"No organization",relationship:(b=String(h?.relationship||"guardian").replaceAll("_"," ")).charAt(0).toUpperCase()+b.slice(1),isPrimary:!!h?.isPrimary,enrollment:d,status:i,active:!a.isDeleted&&!1!==a.active&&!["withdrawn","deleted","archived","inactive"].includes(H(a.status))}}),[U,az,ax,ay,aA,as]),aC=(0,k.useMemo)(()=>{let a=aa.trim().toLowerCase();return aB.filter(b=>{let c=b.student;return("all"===ae||!!G(b.enrollment?.classId||c.currentClassId,ae))&&("all"===ag||b.status===ag)&&("all"===ai||H(b.relationship)===H(ai))&&(!a||`
          ${c.fullName||""}
          ${c.admissionNumber||""}
          ${c.gender||""}
          ${c.email||""}
          ${b.className}
          ${b.organizationName}
          ${b.relationship}
          ${b.status}
        `.toLowerCase().includes(a))}).sort((a,b)=>a.student.fullName.localeCompare(b.student.fullName))},[aB,aa,ae,ag,ai]),aD=(0,k.useMemo)(()=>[ae,ag,ai].filter(a=>"all"!==a).length,[ae,ag,ai]),aE=(0,k.useMemo)(()=>Array.from(new Set(aB.map(a=>a.relationship).filter(Boolean))).sort(),[aB]),aF=(0,k.useMemo)(()=>M(aB,a=>I(a.status)),[aB]),aG=(0,k.useMemo)(()=>M(aB,a=>a.className),[aB]),aH=(0,k.useMemo)(()=>M(aB,a=>a.relationship),[aB]),aI=a=>{ap(a)};return c||r||f||z?(0,d.jsxs)("main",{className:"pp-page",style:{"--pp-primary":x,"--pp-primary-text":y},children:[(0,d.jsx)("style",{children:R}),(0,d.jsxs)("section",{className:"pp-state-card",children:[(0,d.jsx)("div",{className:"pp-spinner"}),(0,d.jsx)("h2",{children:"Opening your children..."}),(0,d.jsx)("p",{children:"Checking your parent profile, linked students, classes, and photos."})]})]}):b&&a?v&&w?(0,d.jsxs)("main",{className:"pp-page",style:{"--pp-primary":x,"--pp-primary-text":y},children:[(0,d.jsx)("style",{children:R}),(0,d.jsxs)("section",{className:"pp-action-strip",children:[(0,d.jsxs)("label",{className:"pp-search-box",children:[(0,d.jsx)("span",{"aria-hidden":"true",children:"⌕"}),(0,d.jsx)("input",{value:aa,onChange:a=>ab(a.target.value),placeholder:"Search your children...","aria-label":"Search your children"}),aa&&(0,d.jsx)("button",{type:"button",className:"pp-search-clear",onClick:()=>ab(""),"aria-label":"Clear search",children:"\xd7"})]}),(0,d.jsxs)("button",{type:"button",className:`pp-filter-button ${aD>0?"active":""}`,onClick:()=>al(!0),"aria-label":"Open filters",title:"Filter",children:[(0,d.jsx)("span",{"aria-hidden":"true",children:"☷"}),aD>0&&(0,d.jsx)("b",{className:"pp-action-count",children:aD})]}),(0,d.jsx)("button",{type:"button",className:"pp-more-button",onClick:()=>an(!0),"aria-label":"More options",title:"More",children:"⋯"})]}),(aD>0||aa)&&(0,d.jsxs)("section",{className:"pp-active-filters",children:[aa&&(0,d.jsxs)("button",{type:"button",onClick:()=>ab(""),children:["Search: ",aa," ",(0,d.jsx)("span",{children:"\xd7"})]}),"all"!==ae&&(0,d.jsxs)("button",{type:"button",onClick:()=>af("all"),children:[ax.get(ae)?.name||"Class"," ",(0,d.jsx)("span",{children:"\xd7"})]}),"all"!==ag&&(0,d.jsxs)("button",{type:"button",onClick:()=>ah("all"),children:[I(ag)," ",(0,d.jsx)("span",{children:"\xd7"})]}),"all"!==ai&&(0,d.jsxs)("button",{type:"button",onClick:()=>aj("all"),children:[ai," ",(0,d.jsx)("span",{children:"\xd7"})]})]}),"cards"===ac&&(0,d.jsxs)("section",{className:"pp-content-section",children:[(0,d.jsx)("div",{className:"pp-card-grid",children:aC.map(a=>{let b=L(a.student);return(0,d.jsxs)("article",{className:"pp-child-card",onClick:()=>aI(a),children:[(0,d.jsxs)("div",{className:"pp-child-main",children:[(0,d.jsx)(N,{name:a.student.fullName,photo:a.photoUrl,primary:x}),(0,d.jsxs)("div",{className:"pp-child-copy",children:[(0,d.jsxs)("div",{className:"pp-name-line",children:[(0,d.jsx)("h3",{children:a.student.fullName}),(0,d.jsx)("span",{className:`pp-status-dot ${J(a.status)}`,title:I(a.status)})]}),(0,d.jsxs)("p",{children:[a.className,a.student.admissionNumber?` \xb7 ${a.student.admissionNumber}`:""]}),(0,d.jsxs)("div",{className:"pp-card-meta",children:[(0,d.jsx)("span",{children:a.relationship}),null!==b&&(0,d.jsxs)("span",{children:[b," years"]}),a.student.gender&&(0,d.jsx)("span",{children:a.student.gender})]})]}),(0,d.jsx)("button",{type:"button",className:"pp-row-more",onClick:b=>{b.stopPropagation(),aI(a)},"aria-label":`View ${a.student.fullName}`,children:"›"})]}),(0,d.jsxs)("div",{className:"pp-card-footer",children:[(0,d.jsx)("span",{children:a.organizationName}),(0,d.jsx)("strong",{children:I(a.status)})]})]},a.id)})}),!aC.length&&(0,d.jsx)(P,{icon:"\uD83E\uDDD2",title:aB.length?"No children match your filters":"No linked children found",text:aB.length?"Clear or adjust the current search and filters.":u||B.length?"The school has not linked a student to this parent profile yet.":"Your login is not connected to a permanent parent profile in this branch."})]}),"table"===ac&&(0,d.jsxs)("section",{className:"pp-table-card",children:[(0,d.jsxs)("div",{className:"pp-section-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Parent directory"}),(0,d.jsxs)("h3",{children:["Children (",aC.length,")"]})]}),(0,d.jsx)(O,{tone:"blue",children:"Read only"})]}),(0,d.jsx)("div",{className:"pp-table-scroll",children:(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Student"}),(0,d.jsx)("th",{children:"Class"}),(0,d.jsx)("th",{children:"Relationship"}),(0,d.jsx)("th",{children:"Gender"}),(0,d.jsx)("th",{children:"Age"}),(0,d.jsx)("th",{children:"Status"}),(0,d.jsx)("th",{"aria-label":"Action"})]})}),(0,d.jsxs)("tbody",{children:[aC.map(a=>{let b=L(a.student);return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsxs)("button",{type:"button",className:"pp-table-student",onClick:()=>aI(a),children:[(0,d.jsx)(N,{name:a.student.fullName,photo:a.photoUrl,primary:x}),(0,d.jsxs)("span",{children:[(0,d.jsx)("strong",{children:a.student.fullName}),(0,d.jsx)("small",{children:a.student.admissionNumber||"No admission number"})]})]})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("strong",{children:a.className}),(0,d.jsx)("small",{children:a.organizationName})]}),(0,d.jsx)("td",{children:a.relationship}),(0,d.jsx)("td",{children:a.student.gender||"Not set"}),(0,d.jsx)("td",{children:null===b?"Not set":b}),(0,d.jsx)("td",{children:(0,d.jsx)(O,{tone:J(a.status),children:I(a.status)})}),(0,d.jsx)("td",{children:(0,d.jsx)("button",{type:"button",className:"pp-table-action",onClick:()=>aI(a),children:"View"})})]},a.id)}),!aC.length&&(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:7,children:(0,d.jsx)(P,{icon:"\uD83E\uDDD2",title:"No children found",text:"No linked children match the current filters."})})})]})]})})]}),"summary"===ac&&(0,d.jsxs)("section",{className:"pp-summary-grid",children:[(0,d.jsx)(Q,{title:"Children by Class",subtitle:"Class distribution",items:aG}),(0,d.jsx)(Q,{title:"Relationship",subtitle:"Parent relationship",items:aH}),(0,d.jsx)(Q,{title:"Student Status",subtitle:"Current standing",items:aF})]}),ak&&(0,d.jsxs)("div",{className:"pp-layer",children:[(0,d.jsx)("button",{type:"button",className:"pp-overlay","aria-label":"Close filters",onClick:()=>al(!1)}),(0,d.jsxs)("section",{className:"pp-sheet",children:[(0,d.jsx)("div",{className:"pp-sheet-handle"}),(0,d.jsxs)("div",{className:"pp-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"My Children"}),(0,d.jsx)("h2",{children:"Filter children"})]}),(0,d.jsx)("button",{type:"button",onClick:()=>al(!1),"aria-label":"Close filters",children:"\xd7"})]}),(0,d.jsxs)("div",{className:"pp-form-grid",children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class"}),(0,d.jsxs)("select",{value:ae,onChange:a=>af(a.target.value),children:[(0,d.jsx)("option",{value:"all",children:"All classes"}),W.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Status"}),(0,d.jsxs)("select",{value:ag,onChange:a=>ah(a.target.value),children:[(0,d.jsx)("option",{value:"all",children:"All statuses"}),(0,d.jsx)("option",{value:"active",children:"Active"}),(0,d.jsx)("option",{value:"graduated",children:"Graduated"}),(0,d.jsx)("option",{value:"transferred",children:"Transferred"}),(0,d.jsx)("option",{value:"withdrawn",children:"Withdrawn"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Relationship"}),(0,d.jsxs)("select",{value:ai,onChange:a=>aj(a.target.value),children:[(0,d.jsx)("option",{value:"all",children:"All relationships"}),aE.map(a=>(0,d.jsx)("option",{value:a,children:a},a))]})]})]}),(0,d.jsxs)("div",{className:"pp-sheet-actions",children:[(0,d.jsx)("button",{type:"button",className:"secondary",onClick:()=>{af("all"),ah("all"),aj("all")},children:"Clear"}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:()=>al(!1),children:"Apply"})]})]})]}),am&&(0,d.jsxs)("div",{className:"pp-layer",children:[(0,d.jsx)("button",{type:"button",className:"pp-overlay","aria-label":"Close more options",onClick:()=>an(!1)}),(0,d.jsxs)("section",{className:"pp-sheet compact",children:[(0,d.jsx)("div",{className:"pp-sheet-handle"}),(0,d.jsxs)("div",{className:"pp-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"View options"}),(0,d.jsx)("h2",{children:"More"})]}),(0,d.jsx)("button",{type:"button",onClick:()=>an(!1),"aria-label":"Close more options",children:"\xd7"})]}),(0,d.jsxs)("div",{className:"pp-menu-list",children:[(0,d.jsxs)("button",{type:"button",className:"cards"===ac?"active":"",onClick:()=>{ad("cards"),an(!1)},children:[(0,d.jsx)("span",{children:"▦"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Cards"}),(0,d.jsx)("small",{children:"Compact mobile-friendly child list"})]}),(0,d.jsx)("b",{children:"›"})]}),(0,d.jsxs)("button",{type:"button",className:"table"===ac?"active":"",onClick:()=>{ad("table"),an(!1)},children:[(0,d.jsx)("span",{children:"☷"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Table"}),(0,d.jsx)("small",{children:"Detailed desktop and tablet view"})]}),(0,d.jsx)("b",{children:"›"})]}),(0,d.jsxs)("button",{type:"button",className:"summary"===ac?"active":"",onClick:()=>{ad("summary"),an(!1)},children:[(0,d.jsx)("span",{children:"◫"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Summary"}),(0,d.jsx)("small",{children:"Class, relationship, and status breakdowns"})]}),(0,d.jsx)("b",{children:"›"})]}),(0,d.jsxs)("button",{type:"button",onClick:async()=>{an(!1),await aw(),at("success","Children refreshed.")},children:[(0,d.jsx)("span",{children:"↻"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Refresh"}),(0,d.jsx)("small",{children:"Reload linked children and their details"})]}),(0,d.jsx)("b",{children:"›"})]})]})]})]}),ao&&(0,d.jsxs)("div",{className:"pp-drawer-layer",children:[(0,d.jsx)("button",{type:"button",className:"pp-drawer-overlay","aria-label":"Close child details",onClick:()=>ap(null)}),(0,d.jsxs)("aside",{className:"pp-drawer",children:[(0,d.jsxs)("div",{className:"pp-drawer-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"My Child"}),(0,d.jsx)("h2",{children:"Student details"})]}),(0,d.jsx)("button",{type:"button",onClick:()=>ap(null),"aria-label":"Close child details",children:"\xd7"})]}),(0,d.jsxs)("section",{className:"pp-profile-card",children:[(0,d.jsx)(N,{name:ao.student.fullName,photo:ao.photoUrl,primary:x,size:"large"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:ao.student.fullName}),(0,d.jsxs)("p",{children:[ao.className,ao.student.admissionNumber?` \xb7 ${ao.student.admissionNumber}`:""]}),(0,d.jsxs)("div",{className:"pp-chip-row",children:[(0,d.jsx)(O,{tone:J(ao.status),children:I(ao.status)}),(0,d.jsx)(O,{tone:"blue",children:ao.relationship}),ao.isPrimary&&(0,d.jsx)(O,{tone:"purple",children:"Primary link"})]})]})]}),(0,d.jsxs)("section",{className:"pp-detail-section",children:[(0,d.jsx)("div",{className:"pp-section-head",children:(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"School information"}),(0,d.jsx)("h3",{children:"Academic profile"})]})}),(0,d.jsxs)("div",{className:"pp-detail-grid",children:[(0,d.jsxs)("article",{children:[(0,d.jsx)("span",{children:"Class"}),(0,d.jsx)("strong",{children:ao.className})]}),(0,d.jsxs)("article",{children:[(0,d.jsx)("span",{children:"Organization"}),(0,d.jsx)("strong",{children:ao.organizationName})]}),(0,d.jsxs)("article",{children:[(0,d.jsx)("span",{children:"Admission number"}),(0,d.jsx)("strong",{children:ao.student.admissionNumber||"Not set"})]}),(0,d.jsxs)("article",{children:[(0,d.jsx)("span",{children:"Enrollment"}),(0,d.jsx)("strong",{children:ao.enrollment?I(ao.enrollment.status):"No active enrollment"})]})]})]}),(0,d.jsxs)("section",{className:"pp-detail-section",children:[(0,d.jsx)("div",{className:"pp-section-head",children:(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Personal information"}),(0,d.jsx)("h3",{children:"Student profile"})]})}),(0,d.jsxs)("div",{className:"pp-detail-list",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Gender"}),(0,d.jsx)("strong",{children:ao.student.gender||"Not set"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Age"}),(0,d.jsx)("strong",{children:L(ao.student)??"Not set"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Date of birth"}),(0,d.jsx)("strong",{children:(a=>{if(!a)return"Not set";let b=new Date(a);return Number.isFinite(b.getTime())?new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(b):a})(ao.student.dateOfBirth)})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Email"}),(0,d.jsx)("strong",{children:ao.student.email||"Not set"})]})]})]}),(0,d.jsxs)("section",{className:"pp-readonly-note",children:[(0,d.jsx)("span",{children:"\uD83D\uDD12"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"School-managed information"}),(0,d.jsx)("p",{children:"This page is read-only. Contact the school if any student detail needs to be corrected."})]})]})]})]}),aq&&(0,d.jsxs)("div",{className:`pp-toast ${aq.tone}`,children:[(0,d.jsx)("span",{children:"success"===aq.tone?"✓":"error"===aq.tone?"!":"i"}),(0,d.jsx)("p",{children:aq.message})]})]}):(0,d.jsxs)("main",{className:"pp-page",style:{"--pp-primary":x,"--pp-primary-text":y},children:[(0,d.jsx)("style",{children:R}),(0,d.jsxs)("section",{className:"pp-state-card",children:[(0,d.jsx)("h2",{children:"Assigned school branch required"}),(0,d.jsx)("p",{children:"Your parent membership must be connected to a school branch before linked children can be shown."})]})]}):(0,d.jsxs)("main",{className:"pp-page",style:{"--pp-primary":x,"--pp-primary-text":y},children:[(0,d.jsx)("style",{children:R}),(0,d.jsxs)("section",{className:"pp-state-card",children:[(0,d.jsx)("h2",{children:"Redirecting to login..."}),(0,d.jsx)("p",{children:"You must sign in before viewing your children."})]})]})},childAttendance:function(){(0,l.useRouter)(),(0,U.p)();let{loading:a,setLoading:b}=(0,V.J)(),{accountId:c,authenticated:e,loading:f}=(0,h.F)(),{settings:g,loading:n}=(0,i.t)(),{activeSchool:o,activeSchoolId:p,activeBranch:q,activeBranchId:r,loading:s}=(0,j.c)(),{activeMembership:t}=(0,m.A)(),u=(0,k.useMemo)(()=>null,[]),v=(0,k.useMemo)(()=>null,[]),w=u?.membership||t||v||{};Y(u?.schoolId,w.schoolId,w.school?.id,p,o?.id,g?.schoolId,null),Y(u?.branchId,w.branchId,w.schoolBranchId,w.branch?.id,r,q?.id,g?.branchId,null);let x=Y(w.parentId,w.parentLocalId,w.parent?.id,null),y=String(w.role||"").toLowerCase(),z=(0,k.useMemo)(()=>{let a=w.permissions;return Array.isArray(a)?a.map(String):a&&"object"==typeof a?Object.entries(a).filter(([,a])=>!!a).map(([a])=>a):[]},[w.permissions]),A="parent"===y||z.some(a=>["attendance.view","attendance.read","child_attendance.view","parent.attendance.view"].includes(a)),B=g?.primaryColor||"var(--primary-color, #2563eb)",[C,E]=(0,k.useState)([]),[F,G]=(0,k.useState)([]),[H,I]=(0,k.useState)([]),[J,K]=(0,k.useState)([]),[L,M]=(0,k.useState)([]),[N,O]=(0,k.useState)([]),[P,Q]=(0,k.useState)([]),[R,S]=(0,k.useState)([]),[ac,ad]=(0,k.useState)([]),[ae,af]=(0,k.useState)(""),[ag,ah]=(0,k.useState)(String(g?.currentAcademicStructureId||"")),[ai,aj]=(0,k.useState)(String(g?.currentAcademicPeriodId||"")),[ak,al]=(0,k.useState)("all"),[am,an]=(0,k.useState)(""),[ao,ap]=(0,k.useState)(""),[aq,ar]=(0,k.useState)(""),[as,at]=(0,k.useState)("cards"),[au,av]=(0,k.useState)(!1),[aw,ax]=(0,k.useState)(!1),[ay,az]=(0,k.useState)(!1),aA=(0,D.D)({accountId:c,ownerTable:"students",rows:F,fields:[{fieldKey:"photo",mediaIdKey:"photoMediaId"},{fieldKey:"coverPhoto",mediaIdKey:"coverPhotoMediaId"}]}),aB=(0,k.useMemo)(()=>new Map(J.map(a=>[W(a.id),a])),[J]),aC=(0,k.useMemo)(()=>new Map(L.map(a=>[W(a.id),a])),[L]),aD=(0,k.useMemo)(()=>new Map(N.map(a=>[W(a.id),a])),[N]),aE=(0,k.useMemo)(()=>{if(x)return x;let a=String(w.email||w.user?.email||"").toLowerCase(),b=String(w.phone||w.user?.phone||"").replace(/\s+/g,""),c=C.find(c=>{let d=String(c.email||"").toLowerCase(),e=String(c.phone||"").replace(/\s+/g,"");return a&&d===a||b&&e===b});return W(c?.id)},[x,w,C]),aF=(0,k.useMemo)(()=>{if(!aE)return[];let a=new Set(H.filter(a=>X(a.parentId,aE)).map(a=>W(a.studentId)));return F.filter(b=>a.has(W(b.id))).map(a=>{let b,c=W(a.id),d=P.find(a=>X(a.studentId,c)&&"active"===a.status),e=W(d?.classId)||W(a.currentClassId);return{student:a,id:c,name:a.fullName||"Unnamed child",admissionNumber:a.admissionNumber||"No admission number",className:aB.get(e)?.name||"Class not assigned",photo:aA[c]?.photo||(!(b=String(a.photo||""))||b.startsWith("blob:")?void 0:b)}}).sort((a,b)=>a.name.localeCompare(b.name))},[aE,H,F,P,aB,aA]),aG=(0,k.useMemo)(()=>ag?N.filter(a=>X(a.academicStructureId,ag)):N,[N,ag]),aH=aF.find(a=>a.id===ae),aI=aC.get(ag),aJ=aD.get(ai),aK=(0,k.useMemo)(()=>{if(!ae)return[];let a=am.trim().toLowerCase();return R.filter(b=>!b.isDeleted&&!!X(b.studentId,ae)&&(!ag||!!X(b.academicStructureId,ag))&&(!ai||!!X(b.academicPeriodId,ai))&&(!ao||!(b.date<ao))&&(!aq||!(b.date>aq))&&("all"===ak||b.status===ak)&&(!a||`${b.date} ${_(b.status)} ${b.note||""}`.toLowerCase().includes(a))).map(a=>({id:W(a.id),date:a.date,status:a.status,note:a.note,className:aB.get(W(a.classId))?.name||"Class",periodName:aD.get(W(a.academicPeriodId))?.name||"Period"})).sort((a,b)=>b.date.localeCompare(a.date))},[ae,R,ag,ai,ao,aq,ak,am,aB,aD]),aL=(0,k.useMemo)(()=>{let a=ac.filter(a=>!a.isDeleted&&X(a.studentId,ae)&&(!ag||X(a.academicStructureId,ag))&&(!ai||X(a.academicPeriodId,ai)));if(!a.length)return null;let b=a.reduce((a,b)=>a+Number(b.daysOpened||0),0),c=a.reduce((a,b)=>a+Number(b.daysPresent||0),0);return{opened:b,present:c,absent:a.reduce((a,b)=>a+Number(b.daysAbsent||0),0),late:a.reduce((a,b)=>a+Number(b.timesLate||0),0),percent:b?Math.round(c/b*100):0,note:a.find(a=>a.note)?.note}},[ac,ae,ag,ai]),aM=(0,k.useMemo)(()=>{let a=a=>aK.filter(b=>b.status===a).length,b=a("present"),c=a("absent"),d=a("late"),e=aK.filter(a=>["excused","medical","sports","trip"].includes(a.status)).length,f=b+d+a("remote"),g=aK.filter(a=>"holiday"!==a.status).length;return{total:aK.length,present:b,absent:c,late:d,excused:e,rate:g?Math.round(f/g*100):0}},[aK]),aN=(0,k.useMemo)(()=>{let a=new Map;return aK.forEach(b=>{let c=b.date.slice(0,7),d=a.get(c)||{month:c,total:0,attended:0,absent:0,late:0};"holiday"!==b.status&&(d.total+=1),["present","late","remote"].includes(b.status)&&(d.attended+=1),"absent"===b.status&&(d.absent+=1),"late"===b.status&&(d.late+=1),a.set(c,d)}),Array.from(a.values()).sort((a,b)=>b.month.localeCompare(a.month))},[aK]),aO=[ae,ag,ai,ao,aq,"all"!==ak?ak:""].filter(Boolean).length,aP=()=>{ah(String(g?.currentAcademicStructureId||"")),aj(String(g?.currentAcademicPeriodId||"")),al("all"),an("");let a=function(a){if(a?.startDate||a?.endDate)return{from:a.startDate||"",to:a.endDate||""};let b=new Date;return{from:new Date(b.getFullYear(),b.getMonth()-2,1).toISOString().slice(0,10),to:b.toISOString().slice(0,10)}}(aD.get(ai));ap(a.from),ar(a.to)};return f||n||s||a?(0,d.jsxs)("div",{className:`jsx-${ab.__hash} attendance-page loading-page`,children:[(0,d.jsx)("div",{className:`jsx-${ab.__hash} spinner`}),(0,d.jsx)("span",{className:`jsx-${ab.__hash}`,children:"Loading attendance…"}),(0,d.jsx)(T(),{id:ab.__hash,children:ab})]}):A?(0,d.jsxs)("div",{style:{"--primary":B},className:`jsx-${ab.__hash} attendance-page`,children:[(0,d.jsxs)("div",{className:`jsx-${ab.__hash} toolbar`,children:[(0,d.jsxs)("div",{className:`jsx-${ab.__hash} search-box`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash} search-icon`,children:"⌕"}),(0,d.jsx)("input",{value:am,onChange:a=>an(a.target.value),placeholder:"Search dates, status or notes…","aria-label":"Search attendance",className:`jsx-${ab.__hash}`}),am?(0,d.jsx)("button",{onClick:()=>an(""),"aria-label":"Clear search",className:`jsx-${ab.__hash} clear-search`,children:"\xd7"}):null]}),(0,d.jsxs)("button",{onClick:()=>av(!0),"aria-label":"Attendance filters",className:`jsx-${ab.__hash} icon-button ${au?"active":""}`,children:["☷",aO?(0,d.jsx)("span",{className:`jsx-${ab.__hash} button-badge`,children:aO}):null]}),(0,d.jsx)("button",{onClick:()=>ax(!0),"aria-label":"More options",className:`jsx-${ab.__hash} icon-button`,children:"⋯"})]}),aF.length>1?(0,d.jsx)("div",{"aria-label":"Choose child",className:`jsx-${ab.__hash} child-strip`,children:aF.map(a=>(0,d.jsxs)("button",{onClick:()=>af(a.id),className:`jsx-${ab.__hash} child-chip ${a.id===ae?"selected":""}`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash} mini-avatar`,children:a.photo?(0,d.jsx)("img",{src:a.photo,alt:"",className:`jsx-${ab.__hash}`}):a.name.charAt(0).toUpperCase()}),(0,d.jsxs)("span",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${ab.__hash}`,children:a.name}),(0,d.jsx)("small",{className:`jsx-${ab.__hash}`,children:a.className})]})]},a.id))}):null,aH?(0,d.jsxs)("section",{className:`jsx-${ab.__hash} child-header`,children:[(0,d.jsx)("div",{className:`jsx-${ab.__hash} child-avatar`,children:aH.photo?(0,d.jsx)("img",{src:aH.photo,alt:aH.name,className:`jsx-${ab.__hash}`}):aH.name.charAt(0).toUpperCase()}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash} child-copy`,children:[(0,d.jsxs)("div",{className:`jsx-${ab.__hash} child-name-row`,children:[(0,d.jsx)("h1",{className:`jsx-${ab.__hash}`,children:aH.name}),(0,d.jsx)("button",{onClick:()=>az(!0),"aria-label":"Data status",className:`jsx-${ab.__hash} sync-dot`})]}),(0,d.jsxs)("p",{className:`jsx-${ab.__hash}`,children:[aH.admissionNumber," \xb7 ",aH.className]}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash} context-line`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash}`,children:aI?.name||"Academic year"}),(0,d.jsx)("i",{className:`jsx-${ab.__hash}`,children:"•"}),(0,d.jsx)("span",{className:`jsx-${ab.__hash}`,children:aJ?.name||"All periods"})]})]}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash} rate-ring ${aM.rate>=75?"good":aM.rate>=50?"fair":"low"}`,children:[(0,d.jsxs)("strong",{className:`jsx-${ab.__hash}`,children:[aL?.percent??aM.rate,"%"]}),(0,d.jsx)("small",{className:`jsx-${ab.__hash}`,children:"attendance"})]})]}):null,aH?(0,d.jsxs)("div",{className:`jsx-${ab.__hash} summary-grid`,children:[(0,d.jsxs)("article",{className:`jsx-${ab.__hash} summary-card`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash} summary-mark positive`,children:"✓"}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${ab.__hash}`,children:aL?.present??aM.present}),(0,d.jsx)("small",{className:`jsx-${ab.__hash}`,children:"Present"})]})]}),(0,d.jsxs)("article",{className:`jsx-${ab.__hash} summary-card`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash} summary-mark negative`,children:"\xd7"}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${ab.__hash}`,children:aL?.absent??aM.absent}),(0,d.jsx)("small",{className:`jsx-${ab.__hash}`,children:"Absent"})]})]}),(0,d.jsxs)("article",{className:`jsx-${ab.__hash} summary-card`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash} summary-mark warning`,children:"◷"}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${ab.__hash}`,children:aL?.late??aM.late}),(0,d.jsx)("small",{className:`jsx-${ab.__hash}`,children:"Late"})]})]}),(0,d.jsxs)("article",{className:`jsx-${ab.__hash} summary-card`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash} summary-mark info`,children:"+"}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${ab.__hash}`,children:aM.excused}),(0,d.jsx)("small",{className:`jsx-${ab.__hash}`,children:"Excused"})]})]})]}):null,aE?aF.length?"analytics"===as?(0,d.jsxs)("section",{className:`jsx-${ab.__hash} analytics-view`,children:[(0,d.jsxs)("div",{className:`jsx-${ab.__hash} analytics-card overview-card`,children:[(0,d.jsxs)("div",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash}`,children:"Attendance rate"}),(0,d.jsxs)("strong",{className:`jsx-${ab.__hash}`,children:[aL?.percent??aM.rate,"%"]}),(0,d.jsxs)("small",{className:`jsx-${ab.__hash}`,children:[aL?.opened??aM.total," recorded school days"]})]}),(0,d.jsx)("div",{style:{"--value":`${aL?.percent??aM.rate}%`},className:`jsx-${ab.__hash} donut`,children:(0,d.jsxs)("span",{className:`jsx-${ab.__hash}`,children:[aL?.percent??aM.rate,"%"]})})]}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash} analytics-card`,children:[(0,d.jsx)("div",{className:`jsx-${ab.__hash} section-heading`,children:(0,d.jsxs)("div",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${ab.__hash}`,children:"Monthly pattern"}),(0,d.jsx)("small",{className:`jsx-${ab.__hash}`,children:"Based on the selected range"})]})}),aN.length?(0,d.jsx)("div",{className:`jsx-${ab.__hash} month-list`,children:aN.map(a=>{var b;let c,e=a.total?Math.round(a.attended/a.total*100):0;return(0,d.jsxs)("div",{className:`jsx-${ab.__hash} month-row`,children:[(0,d.jsxs)("div",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${ab.__hash}`,children:(b=a.month,(c=Z(`${b}-01`))?new Intl.DateTimeFormat("en",{month:"short",year:"numeric"}).format(c):b)}),(0,d.jsxs)("small",{className:`jsx-${ab.__hash}`,children:[a.absent," absent \xb7 ",a.late," late"]})]}),(0,d.jsx)("div",{className:`jsx-${ab.__hash} month-progress`,children:(0,d.jsx)("span",{style:{width:`${e}%`},className:`jsx-${ab.__hash}`})}),(0,d.jsxs)("b",{className:`jsx-${ab.__hash}`,children:[e,"%"]})]},a.month)})}):(0,d.jsx)("p",{className:`jsx-${ab.__hash} muted-empty`,children:"No monthly attendance records match the filters."})]}),aL?.note?(0,d.jsxs)("div",{className:`jsx-${ab.__hash} analytics-card note-card`,children:[(0,d.jsx)("strong",{className:`jsx-${ab.__hash}`,children:"School note"}),(0,d.jsx)("p",{className:`jsx-${ab.__hash}`,children:aL.note})]}):null]}):aK.length?"table"===as?(0,d.jsxs)("div",{className:`jsx-${ab.__hash} table-shell`,children:[(0,d.jsx)("div",{className:`jsx-${ab.__hash} table-title`,children:(0,d.jsxs)("strong",{className:`jsx-${ab.__hash}`,children:["Attendance history (",aK.length,")"]})}),(0,d.jsx)("div",{className:`jsx-${ab.__hash} table-scroll`,children:(0,d.jsxs)("table",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("thead",{className:`jsx-${ab.__hash}`,children:(0,d.jsxs)("tr",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("th",{className:`jsx-${ab.__hash}`,children:"Date"}),(0,d.jsx)("th",{className:`jsx-${ab.__hash}`,children:"Status"}),(0,d.jsx)("th",{className:`jsx-${ab.__hash}`,children:"Class"}),(0,d.jsx)("th",{className:`jsx-${ab.__hash}`,children:"Note"})]})}),(0,d.jsx)("tbody",{className:`jsx-${ab.__hash}`,children:aK.map(a=>(0,d.jsxs)("tr",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("td",{className:`jsx-${ab.__hash}`,children:$(a.date)}),(0,d.jsx)("td",{className:`jsx-${ab.__hash}`,children:(0,d.jsx)("span",{className:`jsx-${ab.__hash} status-pill ${aa(a.status)}`,children:_(a.status)})}),(0,d.jsx)("td",{className:`jsx-${ab.__hash}`,children:a.className}),(0,d.jsx)("td",{className:`jsx-${ab.__hash}`,children:a.note||"—"})]},a.id||`${a.date}-${a.status}`))})]})})]}):(0,d.jsx)("div",{className:`jsx-${ab.__hash} attendance-list`,children:aK.map(a=>{var b;return(0,d.jsxs)("article",{className:`jsx-${ab.__hash} attendance-card`,children:[(0,d.jsx)("div",{className:`jsx-${ab.__hash} status-symbol ${aa(a.status)}`,children:"present"===(b=a.status)?"✓":"late"===b?"◷":"absent"===b?"\xd7":["excused","medical"].includes(b)?"+":["trip","sports","remote"].includes(b)?"↗":"holiday"===b?"—":"•"}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash} attendance-main`,children:[(0,d.jsxs)("div",{className:`jsx-${ab.__hash} attendance-topline`,children:[(0,d.jsx)("strong",{className:`jsx-${ab.__hash}`,children:$(a.date,{weekday:"short",day:"2-digit",month:"short"})}),(0,d.jsx)("span",{className:`jsx-${ab.__hash} status-pill ${aa(a.status)}`,children:_(a.status)})]}),(0,d.jsxs)("p",{className:`jsx-${ab.__hash}`,children:[a.className," \xb7 ",a.periodName]}),a.note?(0,d.jsx)("small",{className:`jsx-${ab.__hash} attendance-note`,children:a.note}):null]})]},a.id||`${a.date}-${a.status}`)})}):aH?(0,d.jsxs)("div",{className:`jsx-${ab.__hash} empty-state compact-empty`,children:[(0,d.jsx)("div",{className:`jsx-${ab.__hash} empty-icon`,children:"○"}),(0,d.jsx)("h2",{className:`jsx-${ab.__hash}`,children:"No attendance records"}),(0,d.jsx)("p",{className:`jsx-${ab.__hash}`,children:"Try another period, date range or attendance status."}),(0,d.jsx)("button",{onClick:aP,className:`jsx-${ab.__hash} primary-button`,children:"Reset filters"})]}):null:(0,d.jsxs)("div",{className:`jsx-${ab.__hash} empty-state`,children:[(0,d.jsx)("div",{className:`jsx-${ab.__hash} empty-icon`,children:"♧"}),(0,d.jsx)("h2",{className:`jsx-${ab.__hash}`,children:"No linked children"}),(0,d.jsx)("p",{className:`jsx-${ab.__hash}`,children:"No active student-parent relationship was found for this parent profile."})]}):(0,d.jsxs)("div",{className:`jsx-${ab.__hash} empty-state`,children:[(0,d.jsx)("div",{className:`jsx-${ab.__hash} empty-icon`,children:"⌁"}),(0,d.jsx)("h2",{className:`jsx-${ab.__hash}`,children:"Parent profile not linked"}),(0,d.jsx)("p",{className:`jsx-${ab.__hash}`,children:"This login needs a parentId or parentLocalId on its active membership."})]}),au?(0,d.jsx)("div",{role:"presentation",onMouseDown:()=>av(!1),className:`jsx-${ab.__hash} sheet-layer`,children:(0,d.jsxs)("aside",{role:"dialog","aria-modal":"true",onMouseDown:a=>a.stopPropagation(),className:`jsx-${ab.__hash} sheet`,children:[(0,d.jsxs)("div",{className:`jsx-${ab.__hash} sheet-head`,children:[(0,d.jsxs)("div",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${ab.__hash}`,children:"Attendance filters"}),(0,d.jsx)("small",{className:`jsx-${ab.__hash}`,children:"Choose the child and reporting period"})]}),(0,d.jsx)("button",{onClick:()=>av(!1),className:`jsx-${ab.__hash}`,children:"\xd7"})]}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash} sheet-body`,children:[(0,d.jsxs)("label",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash}`,children:"Child"}),(0,d.jsx)("select",{value:ae,onChange:a=>af(a.target.value),className:`jsx-${ab.__hash}`,children:aF.map(a=>(0,d.jsx)("option",{value:a.id,className:`jsx-${ab.__hash}`,children:a.name},a.id))})]}),(0,d.jsxs)("label",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash}`,children:"Academic structure"}),(0,d.jsxs)("select",{value:ag,onChange:a=>{ah(a.target.value),aj("")},className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("option",{value:"",className:`jsx-${ab.__hash}`,children:"All structures"}),L.map(a=>(0,d.jsx)("option",{value:W(a.id),className:`jsx-${ab.__hash}`,children:a.name},W(a.id)))]})]}),(0,d.jsxs)("label",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash}`,children:"Academic period"}),(0,d.jsxs)("select",{value:ai,onChange:a=>aj(a.target.value),className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("option",{value:"",className:`jsx-${ab.__hash}`,children:"All periods"}),aG.map(a=>(0,d.jsx)("option",{value:W(a.id),className:`jsx-${ab.__hash}`,children:a.name},W(a.id)))]})]}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash} two-column`,children:[(0,d.jsxs)("label",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash}`,children:"From"}),(0,d.jsx)("input",{type:"date",value:ao,onChange:a=>ap(a.target.value),className:`jsx-${ab.__hash}`})]}),(0,d.jsxs)("label",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash}`,children:"To"}),(0,d.jsx)("input",{type:"date",value:aq,onChange:a=>ar(a.target.value),className:`jsx-${ab.__hash}`})]})]}),(0,d.jsxs)("label",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash}`,children:"Status"}),(0,d.jsxs)("select",{value:ak,onChange:a=>al(a.target.value),className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("option",{value:"all",className:`jsx-${ab.__hash}`,children:"All statuses"}),["present","absent","late","excused","medical","sports","trip","holiday","remote","suspended"].map(a=>(0,d.jsx)("option",{value:a,className:`jsx-${ab.__hash}`,children:_(a)},a))]})]})]}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash} sheet-actions`,children:[(0,d.jsx)("button",{onClick:aP,className:`jsx-${ab.__hash} secondary-button`,children:"Reset"}),(0,d.jsx)("button",{onClick:()=>av(!1),className:`jsx-${ab.__hash} primary-button`,children:"Apply"})]})]})}):null,aw?(0,d.jsx)("div",{role:"presentation",onMouseDown:()=>ax(!1),className:`jsx-${ab.__hash} sheet-layer`,children:(0,d.jsxs)("aside",{role:"dialog","aria-modal":"true",onMouseDown:a=>a.stopPropagation(),className:`jsx-${ab.__hash} sheet short-sheet`,children:[(0,d.jsxs)("div",{className:`jsx-${ab.__hash} sheet-head`,children:[(0,d.jsxs)("div",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${ab.__hash}`,children:"View options"}),(0,d.jsx)("small",{className:`jsx-${ab.__hash}`,children:"Change how attendance is displayed"})]}),(0,d.jsx)("button",{onClick:()=>ax(!1),className:`jsx-${ab.__hash}`,children:"\xd7"})]}),(0,d.jsx)("div",{className:`jsx-${ab.__hash} view-options`,children:["cards","table","analytics"].map(a=>(0,d.jsxs)("button",{onClick:()=>{at(a),ax(!1)},className:`jsx-${ab.__hash} `+((as===a?"selected":"")||""),children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash}`,children:"cards"===a?"▤":"table"===a?"▦":"⌁"}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${ab.__hash}`,children:a.charAt(0).toUpperCase()+a.slice(1)}),(0,d.jsx)("small",{className:`jsx-${ab.__hash}`,children:"cards"===a?"Mobile-friendly history":"table"===a?"Compact detailed rows":"Rates and monthly pattern"})]}),as===a?(0,d.jsx)("b",{className:`jsx-${ab.__hash}`,children:"✓"}):null]},a))})]})}):null,ay?(0,d.jsx)("div",{role:"presentation",onMouseDown:()=>az(!1),className:`jsx-${ab.__hash} sheet-layer`,children:(0,d.jsxs)("aside",{role:"dialog","aria-modal":"true",onMouseDown:a=>a.stopPropagation(),className:`jsx-${ab.__hash} sheet short-sheet`,children:[(0,d.jsxs)("div",{className:`jsx-${ab.__hash} sheet-head`,children:[(0,d.jsxs)("div",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${ab.__hash}`,children:"Attendance data"}),(0,d.jsx)("small",{className:`jsx-${ab.__hash}`,children:"Offline-first parent view"})]}),(0,d.jsx)("button",{onClick:()=>az(!1),className:`jsx-${ab.__hash}`,children:"\xd7"})]}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash} status-panel`,children:[(0,d.jsx)("span",{className:`jsx-${ab.__hash} large-dot`}),(0,d.jsxs)("div",{className:`jsx-${ab.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${ab.__hash}`,children:"Available on this device"}),(0,d.jsx)("p",{className:`jsx-${ab.__hash}`,children:"Attendance is read from the latest local school data. New records appear after synchronization."})]})]})]})}):null,(0,d.jsx)(T(),{id:ab.__hash,children:ab})]}):(0,d.jsxs)("div",{style:{"--primary":B},className:`jsx-${ab.__hash} attendance-page empty-page`,children:[(0,d.jsx)("div",{className:`jsx-${ab.__hash} empty-icon`,children:"!"}),(0,d.jsx)("h2",{className:`jsx-${ab.__hash}`,children:"Attendance unavailable"}),(0,d.jsx)("p",{className:`jsx-${ab.__hash}`,children:"Your parent account does not currently have access to attendance."}),(0,d.jsx)(T(),{id:ab.__hash,children:ab})]})},myChildReport:function(){var a,b;let c,e;(0,U.p)();let f=(0,l.useRouter)(),{accountId:g,loading:o,authenticated:p}=(0,h.F)(),{settings:q,loading:r}=(0,i.t)(),{activeSchool:s,activeSchoolId:t,activeBranch:u,activeBranchId:v,loading:w}=(0,j.c)(),{activeMembership:x}=(0,m.A)(),y=(0,k.useMemo)(()=>null,[]),z=(0,k.useMemo)(()=>y?.membership||x||{},[x,y?.membership]),A=as(z?.parentId,z?.parentLocalId,z?.parent?.id,y?.parentId,null),B="parent"===String(z?.role||y?.role||"").toLowerCase(),C=(a={openWorkspace:y,activeMembership:x,activeSchoolId:t,activeSchool:s,settings:q},c=a.openWorkspace?.membership||a.activeMembership||null,as(a.openWorkspace?.schoolId,c?.schoolId,c?.school?.id,a.activeSchoolId,a.activeSchool?.id,a.settings?.schoolId,null)),D=(b={openWorkspace:y,activeMembership:x,activeBranchId:v,activeBranch:u,settings:q},e=b.openWorkspace?.membership||b.activeMembership||null,as(b.openWorkspace?.branchId,e?.branchId,e?.schoolBranchId,e?.branch?.id,b.activeBranchId,b.activeBranch?.id,b.settings?.branchId,null)),E=q?.primaryColor||"var(--primary-color, #2563eb)",F=ar(q?.currentAcademicStructureId)||void 0,G=ar(q?.currentAcademicPeriodId)||void 0,{loading:H,setLoading:I}=(0,V.J)(),[J,K]=(0,k.useState)("student-report"),[L,M]=(0,k.useState)(""),[N,O]=(0,k.useState)(!1),[P,Q]=(0,k.useState)(!1),[R,S]=(0,k.useState)({branchId:D||void 0,academicStructureId:F,academicPeriodId:G,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"}),[T,W]=(0,k.useState)([]),[X,Y]=(0,k.useState)([]),[Z,$]=(0,k.useState)([]),[_,aa]=(0,k.useState)([]),[ab,ad]=(0,k.useState)([]),[aA,aB]=(0,k.useState)([]),[aC,aD]=(0,k.useState)([]),[aE,aF]=(0,k.useState)([]),[aG,aH]=(0,k.useState)([]),[aI,aJ]=(0,k.useState)([]),[aK,aL]=(0,k.useState)([]),[aM,aN]=(0,k.useState)([]),[aO,aP]=(0,k.useState)([]),[aQ,aR]=(0,k.useState)([]),[aS,aT]=(0,k.useState)([]),[aU,aV]=(0,k.useState)([]),[aW,aX]=(0,k.useState)([]),[aY,aZ]=(0,k.useState)([]),[a$,a_]=(0,k.useState)([]),[a0,a1]=(0,k.useState)([]),[a2,a3]=(0,k.useState)([]),[a4,a5]=(0,k.useState)([]),[a6,a7]=(0,k.useState)([]),[a8,a9]=(0,k.useState)([]),[ba,bb]=(0,k.useState)([]),[bc,bd]=(0,k.useState)([]),[be,bf]=(0,k.useState)([]),[bg,bh]=(0,k.useState)([]),[bi,bj]=(0,k.useState)([]),bk=()=>{bi.forEach(ac.hZ),bj([]),W([]),Y([]),$([]),aa([]),ad([]),aB([]),aD([]),aF([]),aH([]),aJ([]),aL([]),aN([]),aP([]),aR([]),aT([]),aV([]),aX([]),aZ([]),a_([]),a1([]),a3([]),a5([]),a7([]),a9([]),bb([]),bd([]),bf([]),bh([])},bl=async({ownerTable:a,ownerId:b,fieldKey:c,fallbackMediaId:d,nextUrls:e})=>{let f=ar(b);if(f){let b=await (0,ac.cg)({accountId:g||void 0,ownerTable:a,ownerId:f,fieldKey:c});if(b?.id&&!b.isDeleted&&!1!==b.active){let a=await (0,ac.fW)(String(b.id));if(a)return e.push(a),a}}let h=ar(d);if(!h)return"";let i=await n.db.mediaAssets?.get?.(h);if(!(i&&!i.isDeleted&&!1!==i.active&&(!g||i.accountId===g)&&i.ownerTable===a&&i.fieldKey===c&&(!f||String(i.ownerId||"")===String(f))))return"";let j=await (0,ac.fW)(h);return j&&e.push(j),j||""},bm=async()=>{if(!p||!g||!C||!D||!B){bk(),I(!1);return}try{I(!0);let[a,b,c,d,e,f,h,i,j,k,l,m,o,p,q,r,t,v,w,x,y,B,E,F,G,H,J,K]=await Promise.all([n.db.schools.toArray(),n.db.branches.toArray(),n.db.schoolBranchSettings.toArray(),n.db.academicStructures.toArray(),n.db.academicPeriods.toArray(),n.db.students.toArray(),n.db.parents.toArray(),n.db.teachers.toArray(),n.db.classes.toArray(),n.db.subjects.toArray(),n.db.classSubjects.toArray(),n.db.classTeachers.toArray(),n.db.studentEnrollments.toArray(),n.db.studentParents.toArray(),n.db.assessmentApplicabilities.toArray(),n.db.assessmentStructures.toArray(),n.db.assessmentStructureItems.toArray(),n.db.assessmentEntries.toArray(),n.db.gradingStructures.toArray(),n.db.gradeRules.toArray(),n.db.attendance.toArray(),n.db.studentAttendanceSummaries?.toArray?.()||[],n.db.computedResults.toArray(),n.db.reportCards.toArray(),n.db.reportCardItems.toArray(),n.db.reportCardTemplates?.toArray?.()||[],n.db.reportCardTemplateSettings?.toArray?.()||[],n.db.reportCardTemplateAssignments?.toArray?.()||[]]),L=a=>ar(a.accountId)===ar(g)&&ar(a.schoolId)===C&&ar(a.branchId)===D&&!a.isDeleted,M=a.find(a=>ar(a.accountId)===ar(g)&&ar(a.id)===C&&!a.isDeleted)||(ar(s?.accountId)===ar(g)&&ar(s?.id)===C?s:void 0),N=b.find(a=>ar(a.accountId)===ar(g)&&ar(a.schoolId)===C&&ar(a.id)===D&&!a.isDeleted)||(ar(u?.accountId)===ar(g)&&ar(u?.schoolId)===C&&ar(u?.id)===D?u:void 0),O=e.filter(L),P=F.filter(L),Q=c.filter(L);Q[0];let R=H.filter(a=>!a.isDeleted&&!1!==a.active&&!!ai(a)&&(!a.accountId||a.accountId===g)&&(!a.schoolId||String(a.schoolId??"")===String(C??""))&&(!a.branchId||String(a.branchId??"")===String(D??""))).sort((a,b)=>a.isDefault&&!b.isDefault?-1:!a.isDefault&&b.isDefault?1:String(a.name||"").localeCompare(String(b.name||""))),S=J.filter(a=>!a.isDeleted&&!1!==a.active&&!!ai(a)&&(!a.accountId||a.accountId===g)&&(!a.schoolId||String(a.schoolId??"")===String(C??""))&&(!a.branchId||String(a.branchId??"")===String(D??""))),T=K.filter(a=>!a.isDeleted&&!1!==a.active&&!!ai(a)&&(!a.accountId||a.accountId===g)&&(!a.schoolId||String(a.schoolId??"")===String(C??""))&&(!a.branchId||String(a.branchId??"")===String(D??""))),U=[],V=M?{...M,logo:await bl({ownerTable:al,ownerId:M.id,fieldKey:ap,fallbackMediaId:M.logoMediaId,nextUrls:U})||aq(M,"logo","logoMediaId")}:void 0,X=N?{...N,logo:await bl({ownerTable:am,ownerId:N.id,fieldKey:ap,fallbackMediaId:N.logoMediaId,nextUrls:U})||aq(N,"logo","logoMediaId")}:void 0,Z=await Promise.all(Q.map(async a=>({...a,logo:await bl({ownerTable:an,ownerId:a.id,fieldKey:ap,fallbackMediaId:a.logoMediaId,nextUrls:U})||aq(a,"logo","logoMediaId"),reportCardBackgroundImage:await bl({ownerTable:an,ownerId:a.id,fieldKey:"reportCardBackgroundImage",fallbackMediaId:a.reportCardBackgroundImageMediaId,nextUrls:U})||aq(a,"reportCardBackgroundImage","reportCardBackgroundImageMediaId"),reportCardWatermark:await bl({ownerTable:an,ownerId:a.id,fieldKey:"reportCardWatermark",fallbackMediaId:a.reportCardWatermarkMediaId,nextUrls:U})||aq(a,"reportCardWatermark","reportCardWatermarkMediaId"),reportCardSignatureImage:await bl({ownerTable:an,ownerId:a.id,fieldKey:"reportCardSignatureImage",fallbackMediaId:a.reportCardSignatureImageMediaId,nextUrls:U})||aq(a,"reportCardSignatureImage","reportCardSignatureImageMediaId")}))),_=await Promise.all(f.filter(L).map(async a=>({...a,photo:await bl({ownerTable:ak,ownerId:a.id,fieldKey:ao,fallbackMediaId:a.photoMediaId,nextUrls:U})||aq(a,"photo","photoMediaId")}))),ab=new Set(O.map(a=>ar(a.id)).filter(Boolean));bi.forEach(a=>{U.includes(a)||(0,ac.hZ)(a)}),bj(U);let ae=h.filter(L),af=p.filter(L),ag=String(z?.email||z?.user?.email||"").trim().toLowerCase(),ah=String(z?.phone||z?.user?.phone||"").replace(/\s+/g,""),aj=ae.find(a=>A&&ar(a.id)===A)||ae.find(a=>{let b=String(a.email||"").trim().toLowerCase(),c=String(a.phone||"").replace(/\s+/g,"");return ag&&b===ag||ah&&c===ah}),at=as(A,aj?.id),au=new Set(af.filter(a=>at&&ar(a.parentId)===at).map(a=>ar(a.studentId)).filter(Boolean)),av=new Set(P.filter(a=>au.has(ar(a.studentId))).map(a=>ar(a.id)).filter(Boolean)),aw=_.filter(a=>au.has(ar(a.id))),ax=a=>au.has(ar(a.studentId));W(V?[V]:[]),Y(X?[X]:[]),$(Z),aa(d.filter(L)),ad(O),aB(aw),aF(aj?[aj]:[]),aD(i.filter(L)),aJ(j.filter(a=>L(a)&&!1!==a.active)),aL(k.filter(a=>L(a)&&!1!==a.active)),aN(l.filter(a=>L(a)&&!1!==a.active)),aR(af.filter(a=>au.has(ar(a.studentId)))),aP(o.filter(a=>L(a)&&ax(a))),aH(m.filter(L)),aT(q.filter(a=>L(a)&&!1!==a.active)),aV(r.filter(a=>L(a)&&!1!==a.active)),aX(t.filter(a=>L(a)&&!1!==a.active)),aZ(v.filter(a=>L(a)&&ax(a))),a_(w.filter(a=>L(a)&&!1!==a.active)),a1(x.filter(a=>L(a)&&!1!==a.active)),a3(y.filter(a=>L(a)&&ax(a))),a5(B.filter(a=>L(a)&&ax(a))),a7(E.filter(a=>L(a)&&ax(a))),a9(P.filter(ax)),bb(G.filter(a=>!!L(a)&&(!a.reportCardId||!!av.has(ar(a.reportCardId)))&&(!a.academicPeriodId||!!ab.has(ar(a.academicPeriodId))))),bd(R),bf(S),bh(T)}catch(a){console.error("Failed to load report data:",a),bk()}finally{I(!1)}},bn=(0,k.useMemo)(()=>u&&ar(u.id)===D?[u]:X,[u,D,X]),bo=(0,k.useMemo)(()=>{let a=new Set;return(aO.forEach(b=>{"active"!==b.status||R.academicStructureId&&b.academicStructureId!==R.academicStructureId||R.academicPeriodId&&b.academicPeriodId!==R.academicPeriodId||a.add(ar(b.classId))}),aM.forEach(b=>{!1===b.active||R.academicStructureId&&b.academicStructureId!==R.academicStructureId||R.academicPeriodId&&b.academicPeriodId&&b.academicPeriodId!==R.academicPeriodId||a.add(ar(b.classId))}),R.academicStructureId||R.academicPeriodId)?aI.filter(b=>!!ar(b.id)&&a.has(ar(b.id))):aI},[aI,aO,aM,R.academicStructureId,R.academicPeriodId]),bp=(0,k.useMemo)(()=>aM.filter(a=>(!R.classId||a.classId===R.classId)&&(!R.academicStructureId||a.academicStructureId===R.academicStructureId)&&(!R.academicPeriodId||!a.academicPeriodId||a.academicPeriodId===R.academicPeriodId)),[aM,R.classId,R.academicStructureId,R.academicPeriodId]),bq=(0,k.useMemo)(()=>{if(!R.classId&&!R.academicPeriodId)return aA;let a=new Set(aO.filter(a=>"active"===a.status&&(!R.classId||a.classId===R.classId)&&(!R.academicStructureId||a.academicStructureId===R.academicStructureId)&&(!R.academicPeriodId||a.academicPeriodId===R.academicPeriodId)).map(a=>ar(a.studentId)).filter(Boolean));return aA.filter(b=>!!ar(b.id)&&a.has(ar(b.id)))},[aA,aO,R.classId,R.academicStructureId,R.academicPeriodId]),br=(0,k.useMemo)(()=>({schools:T,branches:bn,schoolBranchSettings:Z,academicStructures:_,academicPeriods:ab,students:aA,parents:aE,studentParents:aQ,teachers:aC,classes:aI,subjects:aK,classSubjects:aM,studentEnrollments:aO,classTeachers:aG,assessmentApplicabilities:aS,assessmentStructures:aU,assessmentStructureItems:aW,assessmentEntries:aY,gradingStructures:a$,gradeRules:a0,attendance:a2,studentAttendanceSummaries:a4,computedResults:a6,reportCards:a8,reportCardItems:ba}),[T,bn,Z,_,ab,aA,aE,aQ,aC,aI,aK,aM,aO,aG,aS,aU,aW,aY,a$,a0,a2,a4,a6,a8,ba]),bs=(0,k.useMemo)(()=>(0,af.EI)(br,R),[br,R]),bt=!!(_.length&&ab.length&&aI.length&&aA.length),bu=(0,k.useMemo)(()=>X.find(a=>ar(a.id)===D)||bn.find(a=>ar(a.id)===D)||u||X[0]||bn[0],[u,D,X,bn]);s?.name||T[0]?.name,bu?.name||u?.name||X[0]?.name;let bv=at(aI,R.classId),bw=at(ab,R.academicPeriodId),bx=at(_,R.academicStructureId),by=L.trim().toLowerCase(),bz=(0,k.useMemo)(()=>by?bq.filter(a=>`${a.fullName||a.name||""} ${a.admissionNumber||""} ${a.gender||""}`.toLowerCase().includes(by)):bq,[bq,by]),bA=(0,k.useMemo)(()=>by?bo.filter(a=>`${a.name||""} ${a.code||""}`.toLowerCase().includes(by)):bo,[bo,by]),bB=(0,k.useMemo)(()=>[R.academicStructureId,R.academicPeriodId,R.classId,R.classSubjectId,R.studentId,R.sortMode&&"position"!==R.sortMode?R.sortMode:void 0,"student-report"!==J?J:void 0].filter(Boolean).length,[R.academicStructureId,R.academicPeriodId,R.classId,R.classSubjectId,R.studentId,R.sortMode,J]),bC=at(aA,R.studentId);at(bp.map(a=>{var b;let c;return{id:a.id,name:(b=a,c=aK.find(a=>a.id===b.subjectId),b.name||c?.name||`Subject ${b.subjectId||""}`)}}),R.classSubjectId),"class-reports"===J?bs.classReports.length:bs.studentReport,bs.warnings.length;let bD=bt&&("class-reports"===J?bs.classReports.length>0:!!bs.studentReport),bE=()=>{bD&&(0,ae.f)({targetId:aj,mode:"class-reports"===J?"whole-class-reports":"single-student",orientation:"portrait",pageSize:"A4"})},bF=(0,k.useMemo)(()=>{let a=bg.filter(a=>!1!==a.active&&ai(a));return a.find(a=>!0===a.isDefault&&(!a.scopeType||"branch"===a.scopeType)&&(!a.scopeId||String(a.scopeId??"")===String(D??"")))||a.find(a=>(!a.scopeType||"branch"===a.scopeType)&&(!a.scopeId||String(a.scopeId??"")===String(D??"")))||a.find(a=>!0===a.isDefault)||a[0]||null},[bg,D]),bG=(0,k.useMemo)(()=>{let a=ar(bF?.templateId);return bc.find(b=>a&&ar(b.id)===a)||bc.find(a=>a.isDefault)||bc.find(a=>"classic_formal"===String(a.code||""))||bc[0]||(0,ag.ed)(null)},[bF,bc]),bH=(0,k.useMemo)(()=>{let a=ar(bF?.templateSettingsId),b=ar(bG?.id);return be.find(b=>a&&ar(b.id)===a)||be.find(a=>b&&ar(a.templateId)===b)||be.find(a=>!1!==a.active)||null},[bF,bG,be]),bI=(0,k.useMemo)(()=>(0,ag.tH)({...ag.gv,...bH||{}},bG||null,bF||null),[bG,bF,bH]);function bJ(a){let b=ar(a?.report?.studentId||a?.studentId);if(b)return aA.find(a=>ar(a.id)===b)}function bK(a,b){let c;if(!a)return a;let d=b?.name||b?.branchName||b?.campusName||a.branchName||a.branchLabel||a.branch?.name||"",e=bJ(a),f=(c=bJ(a),c?.resolvedStudentPhotoUrl||c?.photo||a?.report?.resolvedStudentPhotoUrl||a?.report?.studentPhoto||"");return{...a,student:e||a.student,branch:b,branchId:b?.id||a.branchId,branchName:d,branchLabel:d,template:bG,templateSettings:bI,reportCardTemplate:bG,reportCardTemplateSettings:bI,reportCardTemplateAssignment:bF,header:{...a.header,branch:b,branchId:b?.id||a.header?.branchId,branchName:d,branchLabel:d,template:bG,templateSettings:bI,reportCardTemplate:bG,reportCardTemplateSettings:bI,reportCardTemplateAssignment:bF,branding:{...a.header?.branding||{},primaryColor:(a.header?.branding||{}).primaryColor||"var(--ba-primary, var(--primary-color, #2563eb))",branchName:(a.header?.branding||{}).branchName||d,logo:(a.header?.branding||{}).logo||a.header?.schoolBranchSetting?.logo||a.header?.branch?.logo||a.header?.school?.logo,reportCardBackgroundImage:(a.header?.branding||{}).reportCardBackgroundImage||a.header?.schoolBranchSetting?.reportCardBackgroundImage,reportCardWatermark:(a.header?.branding||{}).reportCardWatermark||a.header?.schoolBranchSetting?.reportCardWatermark,reportCardSignatureImage:(a.header?.branding||{}).reportCardSignatureImage||a.header?.schoolBranchSetting?.reportCardSignatureImage}},report:{...a.report,studentPhoto:f||a.report?.studentPhoto,resolvedStudentPhotoUrl:f||a.report?.resolvedStudentPhotoUrl,branch:b,branchId:b?.id||a.report?.branchId,branchName:d,branchLabel:d,template:bG,templateSettings:bI,reportCardTemplate:bG,reportCardTemplateSettings:bI,reportCardTemplateAssignment:bF}}}return o||w||r||H?(0,d.jsx)(au,{primary:E,title:"Opening My Child Reports...",text:"Checking your linked children, academic records, report templates and attendance."}):p&&g?B?A||0!==aE.length||H?C&&D?(0,d.jsxs)("main",{className:"ba-page student-reports-page",style:{"--ba-primary":E,"--primary-color":E},children:[(0,d.jsx)("style",{children:az}),(0,d.jsxs)("section",{className:"ba-search-card report-no-print","aria-label":"Child report search and actions",children:[(0,d.jsxs)("label",{className:"ba-search",children:[(0,d.jsx)("span",{children:"⌕"}),(0,d.jsx)("input",{value:L,onChange:a=>M(a.target.value),placeholder:"Search child reports...","aria-label":"Search child reports"})]}),(0,d.jsx)("button",{type:"button",className:"ba-add-inline",onClick:bE,"aria-label":"Print report",title:"Print",disabled:!bD,children:"⎙"}),(0,d.jsxs)("button",{type:"button",className:`ba-filter-button ${bB?"active":""}`,onClick:()=>O(!0),"aria-label":"Open report filters",title:"Filters",children:[(0,d.jsx)(aw,{}),bB?(0,d.jsx)("b",{children:bB}):null]}),(0,d.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>Q(!0),"aria-label":"More options",children:"⋯"})]}),bB>0&&(0,d.jsxs)("section",{className:"ba-filter-chips report-no-print","aria-label":"Active report filters",children:[R.academicStructureId&&(0,d.jsxs)("button",{type:"button",onClick:()=>S(a=>({...a,academicStructureId:void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:["Structure: ",bx," \xd7"]}),R.academicPeriodId&&(0,d.jsxs)("button",{type:"button",onClick:()=>S(a=>({...a,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:["Period: ",bw," \xd7"]}),R.classId&&(0,d.jsxs)("button",{type:"button",onClick:()=>S(a=>({...a,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:["Class: ",bv," \xd7"]}),R.studentId&&(0,d.jsxs)("button",{type:"button",onClick:()=>S(a=>({...a,studentId:void 0})),children:["Student: ",bC," \xd7"]}),"student-report"!==J&&(0,d.jsx)("button",{type:"button",onClick:()=>K("student-report"),children:"Mode: All Children \xd7"})]}),(0,d.jsx)("section",{className:"ba-print-card",children:(0,d.jsx)("div",{id:aj,className:"ba-print-zone",children:bt?"class-reports"===J?bs.classReports.length?bs.classReports.map((a,b)=>(0,d.jsx)(ah,{dataset:bK(a,bu),template:bG,settings:bI,compact:!0,pageBreakAfter:b<bs.classReports.length-1},a.report?.studentId||b)):(0,d.jsx)(ah,{dataset:void 0,template:bG,settings:bI}):(0,d.jsx)(ah,{dataset:bK(bs.studentReport,bu),template:bG,settings:bI,pageBreakAfter:!1}):(0,d.jsx)(av,{icon:"\uD83D\uDCC4",title:"No child report is available yet",text:"Your school has not published enough academic data to build this child report yet."})})}),N&&(0,d.jsx)(ax,{mode:J,filters:R,academicStructures:_,academicPeriods:ab,filteredClasses:bA,filteredClassSubjects:bp,filteredStudents:bz,setMode:K,setFilters:S,onClose:()=>O(!1)}),P&&(0,d.jsx)(ay,{onRefresh:async()=>{Q(!1),await bm()},onPrint:()=>{Q(!1),bE()},onClose:()=>Q(!1)})]}):(0,d.jsxs)("main",{className:"ba-page",style:{"--ba-primary":E,"--primary-color":E},children:[(0,d.jsx)("style",{children:az}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("h2",{children:"Branch workspace required"}),(0,d.jsx)("p",{children:"Child reports are generated inside the selected branch-admin workspace. Use Select Role again if the wrong branch is active."}),(0,d.jsx)("button",{type:"button",className:"ba-state-button",onClick:()=>f.push("/select-role"),children:"Go to Select Role"})]})]}):(0,d.jsx)(au,{primary:E,title:"Parent profile not linked",text:"The active parent membership needs a parentId, parentLocalId, or matching parent contact."}):(0,d.jsx)(au,{primary:E,title:"Parent access required",text:"Open this page from an active parent-role workspace."}):(0,d.jsx)(au,{primary:E,title:"Redirecting to login...",text:"You must sign in before opening child reports."})},myChildCumulativeRecord:function(){var a,b;let c,e;(0,U.p)();let f=(0,l.useRouter)(),{accountId:g,authenticated:o,loading:p}=(0,h.F)(),{settings:q,loading:r}=(0,i.t)(),{activeSchool:s,activeSchoolId:t,activeBranch:u,activeBranchId:v,loading:w}=(0,j.c)(),{activeMembership:x}=(0,m.A)(),y=(0,k.useMemo)(()=>null,[]),z=(0,k.useMemo)(()=>y?.membership||x||{},[x,y?.membership]),A=aZ(z?.parentId,z?.parentLocalId,z?.parent?.id,y?.parentId,null),B="parent"===String(z?.role||y?.role||"").toLowerCase(),C=q?.primaryColor||"var(--primary-color, #2563eb)",D=aX(q?.currentAcademicStructureId)||void 0,E=(a={openWorkspace:y,activeMembership:x,activeSchoolId:t,activeSchool:s,settings:q},c=a.openWorkspace?.membership||a.activeMembership||null,aZ(a.openWorkspace?.schoolId,c?.schoolId,c?.school?.id,a.activeSchoolId,a.activeSchool?.id,a.settings?.schoolId,null)),F=(b={openWorkspace:y,activeMembership:x,activeBranchId:v,activeBranch:u,settings:q},e=b.openWorkspace?.membership||b.activeMembership||null,aZ(b.openWorkspace?.branchId,e?.branchId,e?.schoolBranchId,e?.branch?.id,b.activeBranchId,b.activeBranch?.id,b.settings?.branchId,null)),{loading:G,setLoading:H}=(0,V.J)(),[I,J]=(0,k.useState)(""),[K,L]=(0,k.useState)(!1),[M,N]=(0,k.useState)(!1),[O,P]=(0,k.useState)({branchId:F||"",academicStructureId:D,academicPeriodId:void 0,fromAcademicPeriodId:void 0,toAcademicPeriodId:void 0,classId:void 0,studentId:void 0,subjectId:void 0,snapshotType:"all",decision:"all",mode:"student-transcript",sortMode:"position",groupingMode:"academic-structure",subjectAggregationMode:"average",includePromotionRecords:!0,includeManualSnapshots:!0,includeTerminalSnapshots:!0,includeDeletedSnapshots:!1}),[Q,R]=(0,k.useState)([]),[S,T]=(0,k.useState)([]),[W,X]=(0,k.useState)([]),[Y,Z]=(0,k.useState)([]),[$,_]=(0,k.useState)([]),[aa,ab]=(0,k.useState)([]),[ad,ae]=(0,k.useState)([]),[af,ag]=(0,k.useState)([]),[ah,ai]=(0,k.useState)([]),[aj,ak]=(0,k.useState)([]),[al,am]=(0,k.useState)([]),[an,ao]=(0,k.useState)([]),[ap,aq]=(0,k.useState)([]),[ar,as]=(0,k.useState)([]),[at,au]=(0,k.useState)([]),[av,aw]=(0,k.useState)([]),[ax,ay]=(0,k.useState)([]),az=a=>a$(a.accountId,g)&&aY(a.schoolId,E)&&aY(a.branchId,F)&&!a.isDeleted,a0=a=>a$(a.accountId,g)&&(aY(a.schoolId,E)||aY(a.id,E))&&!a.isDeleted,a1=a=>a$(a.accountId,g)&&aY(a.schoolId,E)&&aY(a.id,F)&&!a.isDeleted,be=a=>a$(a.accountId,g)&&(!a.schoolId||aY(a.schoolId,E))&&(!a.branchId||aY(a.branchId,F))&&!a.isDeleted,bf=()=>{ax.forEach(ac.hZ),ay([]),R([]),T([]),X([]),Z([]),_([]),ab([]),ae([]),ag([]),ai([]),ak([]),am([]),ao([]),aq([]),as([]),au([]),aw([])},bg=async({ownerTable:a,ownerId:b,fieldKey:c,fallbackMediaId:d,nextUrls:e})=>{let f=aX(b);if(f){let b=await (0,ac.cg)({accountId:g||void 0,ownerTable:a,ownerId:f,fieldKey:c});if(b?.id&&!b.isDeleted&&!1!==b.active){let a=await (0,ac.fW)(String(b.id));if(a)return e.push(a),a}}let h=aX(d);if(!h)return"";let i=await n.db.mediaAssets?.get?.(h);if(!(i&&!i.isDeleted&&!1!==i.active&&(!g||i.accountId===g)&&i.ownerTable===a&&i.fieldKey===c&&(!f||String(i.ownerId||"")===String(f))))return"";let j=await (0,ac.fW)(h);return j&&e.push(j),j||""},bh=async()=>{if(!o||!g||!E||!F||!B){bf(),H(!1);return}try{H(!0);let[a,b,c,d,e,f,h,i,j,k,l,m,o,p,q,r]=await Promise.all([n.db.schools.toArray(),n.db.branches.toArray(),n.db.schoolBranchSettings.toArray(),n.db.academicStructures.toArray(),n.db.academicPeriods.toArray(),n.db.students.toArray(),n.db.parents.toArray(),n.db.studentParents.toArray(),n.db.teachers.toArray(),n.db.classes.toArray(),n.db.subjects.toArray(),n.db.studentReportSnapshots.toArray(),n.db.studentPromotions.toArray(),n.db.reportCardTemplates?.toArray?.()||Promise.resolve([]),n.db.reportCardTemplateSettings?.toArray?.()||Promise.resolve([]),n.db.reportCardTemplateAssignments?.toArray?.()||Promise.resolve([])]),s=a.filter(a0),t=b.filter(a1),u=c.filter(a=>az(a)||be(a)),v=[],w=await Promise.all(s.map(async a=>({...a,logo:await bg({ownerTable:aL,ownerId:a.id,fieldKey:aP,fallbackMediaId:a.logoMediaId,nextUrls:v})||aR(a,"logo","logoMediaId")}))),x=await Promise.all(t.map(async a=>({...a,logo:await bg({ownerTable:aM,ownerId:a.id,fieldKey:aP,fallbackMediaId:a.logoMediaId,nextUrls:v})||aR(a,"logo","logoMediaId")}))),y=await Promise.all(u.map(async a=>({...a,logo:await bg({ownerTable:aN,ownerId:a.id,fieldKey:aP,fallbackMediaId:a.logoMediaId,nextUrls:v})||aR(a,"logo","logoMediaId")})));ax.forEach(a=>{v.includes(a)||(0,ac.hZ)(a)}),ay(v);let B=await Promise.all(f.filter(a=>be(a)&&a_(a)).sort((a,b)=>a.fullName.localeCompare(b.fullName)).map(async a=>{let b=await bg({ownerTable:aO,ownerId:a.id,fieldKey:aQ,fallbackMediaId:a.photoMediaId,nextUrls:v})||aR(a,"photo","photoMediaId");return{...a,photo:b,studentPhoto:b,resolvedStudentPhotoUrl:b}})),C=h.filter(a=>az(a)||be(a)),D=i.filter(a=>az(a)||be(a)),G=String(z?.email||z?.user?.email||"").trim().toLowerCase(),I=String(z?.phone||z?.user?.phone||"").replace(/\s+/g,""),J=C.find(a=>A&&aY(a.id,A))||C.find(a=>{let b=String(a.email||"").trim().toLowerCase(),c=String(a.phone||"").replace(/\s+/g,"");return G&&b===G||I&&c===I}),K=aZ(A,J?.id),L=new Set(D.filter(a=>K&&aY(a.parentId,K)).map(a=>aX(a.studentId)).filter(Boolean)),M=B.filter(a=>L.has(aX(a.id))),N=D.filter(a=>L.has(aX(a.studentId))),Q=J?[J]:[];R(w),T(x),X(y),Z(d.filter(a=>be(a)&&a_(a)).sort((a,b)=>a.name.localeCompare(b.name))),_(e.filter(a=>be(a)&&a_(a)).sort((a,b)=>Number(a.order||0)-Number(b.order||0))),ab(M),ae(Q),ag(N),ai(j.filter(a=>az(a)||be(a))),ak(k.filter(a=>be(a)&&a_(a)).sort((a,b)=>a.name.localeCompare(b.name))),am(l.filter(a=>be(a)&&a_(a)).sort((a,b)=>a.name.localeCompare(b.name))),ao(m.filter(a=>!!L.has(aX(a.studentId))&&(!!O.includeDeletedSnapshots||!a.isDeleted)&&!!a$(a.accountId,g)&&!!aY(a.schoolId,E)&&!!aY(a.branchId,F))),aq(o.filter(a=>!!L.has(aX(a.studentId))&&!a.isDeleted&&!!a$(a.accountId,g)&&(!a.schoolId||!!aY(a.schoolId,E))&&(!a.branchId||!!aY(a.branchId,F)))),P(a=>{let b=!!a.studentId&&L.has(aX(a.studentId));return{...a,studentId:b?a.studentId:aX(M[0]?.id)||void 0}});let S=new Map;[...aC.yo.map((a,b)=>aJ(a,b,"student_report")),...aD.wW.map((a,b)=>aJ(a,b,"cumulative_transcript"))].forEach(a=>{let b=aK(a);b&&S.set(b,a)}),p.filter(a=>a3(a,g,E,F)&&a2(a)).forEach(a=>{let b={...a,reportType:a.reportType||"student_report",templateCode:a.templateCode||a.code||a.layoutKey,templateKey:a.templateKey||a.layoutKey||a.code},c=aK(b);c&&S.set(c,{...S.get(c)||{},...b})}),as(Array.from(S.values()).sort((a,b)=>a.reportType!==b.reportType?String(a.reportType||"").localeCompare(String(b.reportType||"")):a.isDefault&&!b.isDefault?-1:!a.isDefault&&b.isDefault?1:String(a.name||"").localeCompare(String(b.name||"")))),au(q.filter(a=>a3(a,g,E,F)&&a2(a))),aw(r.filter(a=>a3(a,g,E,F)&&a2(a)))}catch(a){console.error("Failed to load cumulative records:",a),bf(),alert("Failed to load cumulative records")}finally{H(!1)}},bi=(0,k.useMemo)(()=>{let a=S.find(a=>aY(a.id,F));return a?[a]:u?[u]:S},[u,S,F]);(0,k.useMemo)(()=>an.filter(a=>(!!O.includeDeletedSnapshots||!a.isDeleted)&&(!F||!!aY(a.branchId,F))&&(!E||!!aY(a.schoolId,E))&&(!g||a.accountId===g)),[an,F,E,g,O.includeDeletedSnapshots]);let bj=(0,k.useMemo)(()=>({schools:Q.length?Q:s?[s]:[],branches:bi,schoolBranchSettings:W,academicStructures:Y,academicPeriods:$,students:aa,parents:ad,studentParents:af,teachers:ah,classes:aj,subjects:al,studentReportSnapshots:an,studentPromotions:ap}),[Q,s,bi,W,Y,$,aa,ad,af,ah,aj,al,an,ap]),bk=(0,k.useMemo)(()=>(0,aI.DB)(bj,O),[bj,O]),bl=(0,k.useMemo)(()=>S.find(a=>aX(a.id)===aX(F))||bi.find(a=>aX(a.id)===aX(F))||(u&&aX(u.id)===aX(F)?u:void 0)||u||S[0]||bi[0]||bk.header.branch,[u,F,S,bi,bk.header.branch]),bm=(0,k.useMemo)(()=>(function(a,b){if(!a)return a;let c=a.header||{},d=c.branding||{},e=b?.name||b?.branchName||b?.campusName||c.branchName||c.branchLabel||c.branch?.name||d.branchName||"",f=b?.address||b?.branchAddress||c.branchAddress||d.branchAddress||"";return{...a,header:{...c,branch:b||c.branch,branchId:b?.id||c.branchId,branchName:e,branchLabel:e,campusName:e,branchAddress:f,branding:{...d,branchName:d.branchName||e,branchLabel:d.branchLabel||e,campusName:d.campusName||e,branchAddress:d.branchAddress||f,resolvedLogoUrl:d.resolvedLogoUrl||d.logo||c.schoolBranchSetting?.logo||c.branch?.logo||c.school?.logo||"",logo:d.logo||d.resolvedLogoUrl||c.schoolBranchSetting?.logo||c.branch?.logo||c.school?.logo||"",primaryColor:d.primaryColor||"var(--ba-primary, var(--primary-color, #2563eb))"}}}})(bk,bl),[bk,bl]),bn=(0,k.useMemo)(()=>aa.find(a=>aY(a.id,O.studentId)),[aa,O.studentId]),bo={width:"297mm",minHeight:"210mm",margin:"0 auto 20px",padding:"10mm",boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:bm.header.branding.fontFamily||"Arial, sans-serif",border:"1px solid #e5e5e5"},bp={width:"100%",borderCollapse:"collapse",fontSize:9},bq={border:"1px solid #222",padding:5,background:C,color:"#fff",textAlign:"center",fontWeight:800},br={border:"1px solid #222",padding:5,verticalAlign:"middle"},bs=(0,k.useMemo)(()=>{let a=a5(av,"cumulative_book",F),b=a5(av,"student_report",F);return a6(ar,a)||a6(ar,b)||a4(ar,"student_report")||{name:"Classic Formal",code:"classic_formal",layoutKey:"classic_formal",templateKey:"classic_formal",reportType:"student_report",paperSize:"A4",orientation:"portrait",density:"compact",active:!0,isDefault:!0}},[av,ar,F]),bt=(0,k.useMemo)(()=>{var a;let b=a5(av,"cumulative_book",F),c=a5(av,"student_report",F),d=a7(at,b,bs,"cumulative_book"),e=a7(at,c,bs,"student_report");return{...(a=d||e)||{},reportType:"cumulative_book",showBookFrontCover:a?.showBookFrontCover??!0,showBookStudentProfilePage:a?.showBookStudentProfilePage??!0,showBookAcademicJourneyPage:a?.showBookAcademicJourneyPage??!0,showBookSummaryPage:a?.showBookSummaryPage??!0,showBookBackCover:a?.showBookBackCover??!0,bookTitleLabel:a?.bookTitleLabel||"Cumulative Academic Report Book",bookSubtitleLabel:a?.bookSubtitleLabel||"Complete Academic Journey",showGeneratedDate:a?.showGeneratedDate??!0,generatedDateLabel:a?.generatedDateLabel||"Generated"}},[av,at,bs,F]),bu=(0,k.useMemo)(()=>a6(ar,a5(av,"cumulative_transcript",F))||a4(ar,"cumulative_transcript")||{name:"Cumulative Transcript Classic",code:"cumulative_transcript_classic",layoutKey:"cumulative_transcript_classic",templateKey:"cumulative_transcript_classic",reportType:"cumulative_transcript",paperSize:"A4",orientation:"portrait",density:"compact",active:!0,isDefault:!0},[av,ar,F]),bv=(0,k.useMemo)(()=>a7(at,a5(av,"cumulative_transcript",F),bu,"cumulative_transcript")||{templateCode:"cumulative_transcript_classic",layoutKey:"cumulative_transcript_classic",templateKey:"cumulative_transcript_classic",templateName:"Cumulative Transcript Classic",reportType:"cumulative_transcript",paperSize:"A4",orientation:"portrait",density:"compact",showAdmissionNumber:!0,showGender:!0,showClass:!0,showAcademicStructure:!0,showAcademicPeriod:!0,showBranch:!0,showTranscriptTermBreakdown:!0,showTranscriptYearAverage:!0,showTranscriptCumulativeAverage:!0,showTranscriptCumulativePosition:!0,showTranscriptGPAProgression:!0,showTranscriptFinalRecommendation:!0,showGeneratedDate:!0,studentNameLabel:"Student",admissionNumberLabel:"Student ID",classLabel:"Programme / Class",academicPeriodLabel:"Academic Period",subjectLabel:"Course / Subject",averageLabel:"Average",gradeLabel:"Grade",gpaLabel:"GPA",generatedDateLabel:"Date Generated",footerText:"Official cumulative academic transcript generated by Eleeveon Schools."},[av,at,bu,F]),bw=(0,k.useMemo)(()=>bm.studentTranscript?bm.studentTranscript:O.studentId?(0,aI.Wy)(bj,{...O,mode:"student-transcript"},O.studentId):void 0,[bj,O,bm.studentTranscript]),bx=(0,k.useMemo)(()=>{let a=bm.cumulativeTranscriptDataset;return a?.transcript&&a?.student?a:{...a||{},header:bm.header,transcript:bw,generatedAt:a?.generatedAt||new Date().toISOString(),student:bw?{studentId:bw.studentId,studentName:bw.studentName,admissionNumber:bw.admissionNumber,gender:bw.gender,currentClassName:bw.currentClassName,studentPhoto:bw.studentPhoto,parentName:bw.parentName,guardianName:bw.guardianName}:void 0,summary:bw?{totalPeriods:bw.totalPeriods,totalSubjects:bw.totalSubjects,cumulativeTotal:bw.cumulativeTotal,cumulativeAverage:bw.cumulativeAverage,cumulativeGPA:bw.cumulativeGPA,cumulativePosition:bw.latestPosition,highestAverage:bw.highestAverage,lowestAverage:bw.lowestAverage,latestAverage:bw.latestAverage,latestPosition:bw.latestPosition,latestDecision:bw.latestDecision,overallTrend:bw.overallTrend}:void 0}},[bm,bw]),by=(0,k.useMemo)(()=>{let a=an.filter(a=>(!!O.includeDeletedSnapshots||!a.isDeleted)&&(!E||!!aY(a.schoolId,E))&&(!F||!!aY(a.branchId,F))&&(!O.academicStructureId||!!aY(a.academicStructureId,O.academicStructureId))&&(!O.academicPeriodId||!!aY(a.academicPeriodId,O.academicPeriodId))&&(!O.classId||!!aY(a.classId,O.classId))&&(!O.studentId||!!aY(a.studentId,O.studentId))&&("all"===O.snapshotType||a.snapshotType===O.snapshotType)&&("manual"!==a.snapshotType||!1!==O.includeManualSnapshots)&&("terminal"!==a.snapshotType||!1!==O.includeTerminalSnapshots)&&("promotion"!==a.snapshotType||!1!==O.includePromotionRecords)&&!0).sort((a,b)=>{let c=String(a.academicYear||"").localeCompare(String(b.academicYear||""));return 0!==c?c:String(a.academicPeriodId||"").localeCompare(String(b.academicPeriodId||""))}).map(a=>{var b;let c,d,e,f,g,h,i,j,k,l,m,n,o=$.find(b=>aY(b.id,a.academicPeriodId)),p=aa.find(b=>aY(b.id,a.studentId)),q=(b=bm.header,d=(c=a.reportData||{}).dataset||c.reportCardDataset||c.studentReportDataset||c,e=d?.report||d||{},f=d?.header||{},g=b||{},h=f?.branding||{},j=aS((i=g?.branding||{}).logo,i.resolvedLogoUrl,g.schoolBranchSetting?.logo,g.branch?.logo,g.school?.logo,h.logo,h.resolvedLogoUrl,f.schoolBranchSetting?.logo,f.branch?.logo,f.school?.logo),k=aS(i.reportCardBackgroundImage,g.schoolBranchSetting?.reportCardBackgroundImage,h.reportCardBackgroundImage,f.schoolBranchSetting?.reportCardBackgroundImage),l=aS(i.reportCardWatermark,g.schoolBranchSetting?.reportCardWatermark,h.reportCardWatermark,f.schoolBranchSetting?.reportCardWatermark,j),m=aS(i.reportCardSignatureImage,g.schoolBranchSetting?.reportCardSignatureImage,h.reportCardSignatureImage,f.schoolBranchSetting?.reportCardSignatureImage),n=aS(p?.resolvedStudentPhotoUrl,p?.photo,p?.studentPhoto,d?.studentInfo?.studentPhoto,d?.studentInfo?.photo,d?.student?.resolvedStudentPhotoUrl,d?.student?.studentPhoto,d?.student?.photo,e?.resolvedStudentPhotoUrl,e?.studentPhoto),{...d,generatedAt:d?.generatedAt||a.createdAt||new Date().toISOString(),header:{...g,...f,school:g.school||f.school,branch:g.branch||f.branch,schoolBranchSetting:g.schoolBranchSetting||f.schoolBranchSetting,branding:{...h,...i,logo:j,resolvedLogoUrl:j,reportCardBackgroundImage:k,reportCardWatermark:l,reportCardSignatureImage:m}},branding:{...d?.branding||{},...i,logo:j,resolvedLogoUrl:j,reportCardBackgroundImage:k,reportCardWatermark:l,reportCardSignatureImage:m},report:{...e,studentId:e?.studentId||a.studentId,studentPhoto:n,resolvedStudentPhotoUrl:n},student:{...p||{},...d?.student||{},id:d?.student?.id||p?.id||a.studentId,name:d?.student?.name||d?.student?.fullName||p?.fullName||e?.studentName,fullName:d?.student?.fullName||d?.student?.name||p?.fullName||e?.studentName,admissionNumber:d?.student?.admissionNumber||p?.admissionNumber||e?.admissionNumber,gender:d?.student?.gender||p?.gender||e?.gender,photo:n,studentPhoto:n,resolvedStudentPhotoUrl:n},studentInfo:{...d?.studentInfo||{},studentPhoto:n,photo:n}}),r=q?.report||{};return{id:a.id,academicPeriodId:a.academicPeriodId,academicPeriodName:o?.name||a.term||q?.header?.academicPeriod?.name||"Academic Period",academicYear:a.academicYear,term:a.term,startDate:o?.startDate,endDate:o?.endDate,dataset:q,total:a.total??r.total,average:a.average??r.average,position:a.position??r.overallPosition??r.position,gpa:r.overallGPA??r.gpa,recommendation:a.recommendation}});return{generatedAt:new Date().toISOString(),title:bt.bookTitleLabel||"Cumulative Academic Report Book",subtitle:bt.bookSubtitleLabel||"Complete Academic Journey",header:bm.header,branding:bm.header.branding,student:{id:bw?.studentId||bn?.id,fullName:bw?.studentName||bn?.fullName,name:bw?.studentName||bn?.fullName,admissionNumber:bw?.admissionNumber||bn?.admissionNumber,gender:bw?.gender||bn?.gender,className:bw?.currentClassName,currentClassName:bw?.currentClassName,photo:bw?.studentPhoto||bn?.resolvedStudentPhotoUrl||bn?.photo||a[0]?.dataset?.studentInfo?.studentPhoto||a[0]?.dataset?.report?.studentPhoto,studentPhoto:bw?.studentPhoto||bn?.resolvedStudentPhotoUrl||bn?.photo||a[0]?.dataset?.studentInfo?.studentPhoto||a[0]?.dataset?.report?.studentPhoto,parentName:bw?.parentName||bn?.parentName,address:bn?.address,parentPhone:bn?.parentPhone,parentEmail:bn?.parentEmail},periods:a,summary:{totalPeriods:bw?.totalPeriods||a.length,cumulativeAverage:bw?.cumulativeAverage,cumulativeGPA:bw?.cumulativeGPA,bestAverage:bw?.highestAverage,latestAverage:bw?.latestAverage,latestPosition:bw?.latestPosition,finalRecommendation:bw?.latestDecision,trend:bw?.overallTrend},notes:bm.warnings}},[$,F,O,bm.header,bm.warnings,E,bn,bt,an,bw]),bz=a=>{"function"==typeof a?P(b=>({...a(b),branchId:F||""})):P({...a,branchId:F||""})},bA=(0,k.useMemo)(()=>[O.academicStructureId,O.academicPeriodId,O.fromAcademicPeriodId,O.toAcademicPeriodId,O.classId,O.studentId,O.subjectId,"all"!==O.snapshotType?O.snapshotType:void 0,"all"!==O.decision?O.decision:void 0,"student-transcript"!==String(O.mode)?O.mode:void 0,"position"!==O.sortMode?O.sortMode:void 0,"academic-structure"!==O.groupingMode?O.groupingMode:void 0,"average"!==O.subjectAggregationMode?O.subjectAggregationMode:void 0,!O.includePromotionRecords?"promotion-off":void 0,!O.includeManualSnapshots?"manual-off":void 0,!O.includeTerminalSnapshots?"terminal-off":void 0,O.includeDeletedSnapshots?"deleted-on":void 0].filter(Boolean).length,[O]),bB=I.trim().toLowerCase(),bC=(0,k.useMemo)(()=>bB?aa.filter(a=>`${a.fullName||""} ${a.admissionNumber||""}`.toLowerCase().includes(bB)):aa,[aa,bB]),bD=(0,k.useMemo)(()=>{let a=new Set(an.map(a=>aX(a.academicStructureId)).filter(Boolean)),b=Y.filter(b=>!b.isDeleted&&(!1!==b.active||a.has(aX(b.id))));return b.length?b:Array.from(a).map(a=>({id:a,name:`Academic Structure ${a}`,schoolId:E,branchId:F,accountId:g||void 0,active:!0}))},[Y,an,E,F,g]),bE=(0,k.useMemo)(()=>{let a=new Set(an.filter(a=>!O.academicStructureId||aY(a.academicStructureId,O.academicStructureId)).map(a=>aX(a.academicPeriodId)).filter(Boolean)),b=$.filter(b=>!b.isDeleted&&(!O.academicStructureId||!!aY(b.academicStructureId,O.academicStructureId))&&(!1!==b.active||a.has(aX(b.id)))).sort((a,b)=>Number(a.order||0)-Number(b.order||0));return b.length?b:Array.from(a).map((a,b)=>({id:a,name:`Academic Period ${a}`,schoolId:E,branchId:F,accountId:g||void 0,academicStructureId:O.academicStructureId||0,order:b+1,active:!0}))},[$,an,O.academicStructureId,E,F,g]),bF=(0,k.useMemo)(()=>{let a=new Set(an.filter(a=>(!O.academicStructureId||!!aY(a.academicStructureId,O.academicStructureId))&&(!O.academicPeriodId||!!aY(a.academicPeriodId,O.academicPeriodId))).map(a=>aX(a.classId)).filter(Boolean)),b=aj.filter(b=>!b.isDeleted&&(!1!==b.active||a.has(aX(b.id))));return b.length?b:Array.from(a).map(a=>({id:a,name:`Class ${a}`,schoolId:E,branchId:F,accountId:g||void 0,active:!0}))},[aj,an,O.academicStructureId,O.academicPeriodId,E,F,g]),bG=(0,k.useMemo)(()=>{let a=new Set(an.filter(a=>(!O.academicStructureId||!!aY(a.academicStructureId,O.academicStructureId))&&(!O.academicPeriodId||!!aY(a.academicPeriodId,O.academicPeriodId))&&(!O.classId||!!aY(a.classId,O.classId))).map(a=>aX(a.studentId)).filter(Boolean)),b=bC.filter(b=>!b.isDeleted&&("withdrawn"!==b.status||a.has(aX(b.id))));return b.length?b:Array.from(a).map(a=>({id:a,fullName:`Student ${a}`,schoolId:E,branchId:F,accountId:g||void 0,status:"active"}))},[bC,an,O.academicStructureId,O.academicPeriodId,O.classId,E,F,g]),bH=(0,k.useMemo)(()=>{if(al.length)return al;let a=new Map;return an.forEach(b=>{let c=b.reportData||{},d=c.report||c.studentReport||c.computedReport||c.computedStudentReport||c,e=d.subjectResults||d.subjects||d.reportItems||c.subjectResults||c.subjects||c.reportItems||[];Array.isArray(e)&&e.forEach(b=>{let c=aX(b.subjectId||b.id);!c||a.has(c)||a.set(c,{id:c,name:b.subjectName||b.name||b.title||b.shortName||`Subject ${c}`,code:b.subjectCode||b.code,schoolId:E,branchId:F,accountId:g||void 0,active:!0})})}),Array.from(a.values()).sort((a,b)=>a.name.localeCompare(b.name))},[al,an,E,F,g]),bI=aW(bD,O.academicStructureId),bJ=aW(bE,O.academicPeriodId),bK=aW(bG,O.studentId),bL=aW(bF,O.classId),bM=aW(bH,O.subjectId),bN=aV[O.mode]||O.mode.replaceAll("-"," "),bO=()=>{var a,b;let c,d,e;a="cumulative-report-print-zone",b="annual-broadsheet"===(c=O.mode)||"subject-history"===c||"promotion-summary"===c?"landscape":"portrait",(d=document.getElementById("cumulative-report-print-style"))&&d.remove(),(e=document.createElement("style")).id="cumulative-report-print-style",e.innerHTML=`
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
  `,document.head.appendChild(e),setTimeout(()=>window.print(),120)};return p||w||r||G?(0,d.jsx)(a8,{primary:C,title:"Opening My Child's Cumulative Record...",text:"Checking your linked children's historical reports, promotions and academic progression."}):o&&g?B?A||0!==ad.length?E&&F?(0,d.jsxs)("main",{className:"ba-page cumulative-page",style:{"--ba-primary":C},children:[(0,d.jsx)("style",{children:bd}),(0,d.jsxs)("section",{className:"ba-search-card report-no-print","aria-label":"My child's cumulative record search and actions",children:[(0,d.jsxs)("label",{className:"ba-search",children:[(0,d.jsx)("span",{children:"⌕"}),(0,d.jsx)("input",{value:I,onChange:a=>J(a.target.value),placeholder:"Search my child's cumulative record...","aria-label":"Search my child's cumulative record"})]}),(0,d.jsx)("button",{type:"button",className:"ba-add-inline",onClick:bO,"aria-label":"Print cumulative record",title:"Print",children:"⎙"}),(0,d.jsxs)("button",{type:"button",className:`ba-filter-button ${bA?"active":""}`,onClick:()=>L(!0),"aria-label":"Open cumulative filters",title:"Filters",children:[(0,d.jsx)(a9,{}),bA?(0,d.jsx)("b",{children:bA}):null]}),(0,d.jsx)("button",{type:"button",className:"ba-icon-button",onClick:()=>N(!0),"aria-label":"More options",children:"⋯"})]}),bA>0&&(0,d.jsxs)("section",{className:"ba-filter-chips report-no-print","aria-label":"Active cumulative filters",children:["student-transcript"!==String(O.mode)&&(0,d.jsxs)("button",{type:"button",onClick:()=>bz(a=>({...a,mode:"student-transcript"})),children:["Mode: ",bN," \xd7"]}),O.academicStructureId&&(0,d.jsxs)("button",{type:"button",onClick:()=>bz(a=>({...a,academicStructureId:void 0})),children:["Structure: ",bI," \xd7"]}),O.academicPeriodId&&(0,d.jsxs)("button",{type:"button",onClick:()=>bz(a=>({...a,academicPeriodId:void 0})),children:["Period: ",bJ," \xd7"]}),O.classId&&(0,d.jsxs)("button",{type:"button",onClick:()=>bz(a=>({...a,classId:void 0,studentId:void 0})),children:["Class: ",bL," \xd7"]}),O.studentId&&(0,d.jsxs)("button",{type:"button",onClick:()=>bz(a=>({...a,studentId:void 0})),children:["Student: ",bK," \xd7"]}),O.subjectId&&(0,d.jsxs)("button",{type:"button",onClick:()=>bz(a=>({...a,subjectId:void 0})),children:["Subject: ",bM," \xd7"]})]}),(0,d.jsxs)("section",{className:"ba-print-card",children:[(0,d.jsxs)("div",{className:"ba-print-head report-no-print",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:bN}),(0,d.jsxs)("p",{children:[bI," \xb7 ",bJ,O.studentId?` \xb7 ${bK}`:""]})]}),(0,d.jsxs)("div",{className:"ba-report-toolbar",children:[(0,d.jsxs)("div",{className:"ba-output-switch",role:"group","aria-label":"Choose cumulative record output",children:[(0,d.jsx)("button",{type:"button",className:"student-transcript"===O.mode?"active":"",onClick:()=>bz(a=>({...a,mode:"student-transcript"})),title:"View cumulative transcript",children:"Transcript"}),(0,d.jsx)("button",{type:"button",className:"cumulative-book"===String(O.mode)?"active":"",onClick:()=>bz(a=>({...a,mode:"cumulative-book"})),title:"View cumulative report book",children:"Book"})]}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:bO,children:"Print"})]})]}),(0,d.jsx)("div",{className:"report-screen-scroll ba-print-zone",children:(0,d.jsx)("div",{id:"cumulative-report-print-zone",children:(()=>{if("cumulative-book"===String(O.mode))return(0,d.jsx)(aA.A,{dataset:by,template:bs,settings:bt,compact:!0,pageBreakAfter:!1,mobilePreview:!0});if("student-transcript"===O.mode)return(0,d.jsx)(aB.A,{dataset:bx,template:bu,settings:bv,compact:!0,pageBreakAfter:!1,mobilePreview:!0});if("multi-period-report"===O.mode){let a;return a=bm.multiPeriodReport,(0,d.jsxs)("section",{className:"print-page report-page-break cumulative-multi-period-page",style:{width:"210mm",minHeight:"297mm",margin:"0 auto 20px",padding:"11mm",boxSizing:"border-box",background:"#fff",color:"#111",fontFamily:bm.header.branding.fontFamily||"Arial, sans-serif",border:"1px solid #e5e5e5"},children:[(0,d.jsx)(aH.A,{header:bm.header,title:"Multi-Period Academic Report",subtitle:a?`${a.studentName} • ${a.periods.length} Periods`:void 0,orientation:"portrait"}),a?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"cr-print-summary-grid",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Student:"})," ",a.studentName]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Class:"})," ",a.className||"-"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Average:"})," ",aT(a.average,1),"%"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"GPA:"})," ",null!=a.gpa?aT(a.gpa,2):"-"]})]}),(0,d.jsxs)("table",{style:bp,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:{...bq,textAlign:"left"},children:"Subject"}),a.periods.map(a=>(0,d.jsx)("th",{style:bq,children:a.academicPeriodName},a.academicPeriodId)),(0,d.jsx)("th",{style:bq,children:"Average"}),(0,d.jsx)("th",{style:bq,children:"Best"}),(0,d.jsx)("th",{style:bq,children:"Latest"}),(0,d.jsx)("th",{style:bq,children:"Trend"}),(0,d.jsx)("th",{style:bq,children:"Final Grade"})]})}),(0,d.jsxs)("tbody",{children:[a.subjects.map(b=>(0,d.jsxs)("tr",{children:[(0,d.jsxs)("td",{style:{...br,fontWeight:800},children:[b.subjectName,b.subjectCode&&(0,d.jsx)("div",{style:{fontSize:8,opacity:.7},children:b.subjectCode})]}),a.periods.map(a=>{let c=b.periodScores.find(b=>b.academicPeriodId===a.academicPeriodId);return(0,d.jsx)("td",{style:{...br,textAlign:"center"},children:c?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("strong",{children:[aT(c.percentage,1),"%"]}),(0,d.jsx)("div",{style:{fontSize:8,opacity:.7},children:c.grade||"-"})]}):"-"},`${b.subjectName}-${a.academicPeriodId}`)}),(0,d.jsxs)("td",{style:{...br,textAlign:"center",fontWeight:800},children:[aT(b.average,1),"%"]}),(0,d.jsxs)("td",{style:{...br,textAlign:"center"},children:[aT(b.bestScore,1),"%"]}),(0,d.jsxs)("td",{style:{...br,textAlign:"center"},children:[aT(b.latestScore,1),"%"]}),(0,d.jsx)("td",{style:{...br,textAlign:"center"},children:aU(b.trend)}),(0,d.jsx)("td",{style:{...br,textAlign:"center",fontWeight:800},children:b.finalGrade||"-"})]},b.subjectId||b.subjectName)),!a.subjects.length&&(0,d.jsx)("tr",{children:(0,d.jsx)("td",{style:{...br,textAlign:"center",padding:16},colSpan:a.periods.length+6,children:"No multi-period subject records found."})})]})]}),(0,d.jsx)(bc,{primary:C,schoolName:bm.header.branding.schoolName,label:"Official multi-period academic report"})]}):(0,d.jsx)("div",{className:"cr-print-empty",children:"Select a student with multiple historical snapshots to generate a multi-period report."})]})}if("annual-broadsheet"===O.mode)return(0,d.jsx)(aE.A,{header:bm.header,broadsheet:bm.annualBroadsheet,pageBreakAfter:!1});if("subject-history"===O.mode){let a;return a=bm.subjectHistory,(0,d.jsxs)("section",{className:"print-page report-page-break cumulative-subject-history-page",style:bo,children:[(0,d.jsx)(aH.A,{header:bm.header,title:"Subject Longitudinal Analytics",subtitle:a?`${a.subjectName} • ${a.totalStudents} Students • ${a.totalPeriods} Periods`:void 0,orientation:"landscape"}),a?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"cr-print-summary-grid six",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Subject:"})," ",a.subjectName]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Students:"})," ",a.totalStudents]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Periods:"})," ",a.totalPeriods]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Average:"})," ",aT(a.subjectAverage,1),"%"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Improving:"})," ",a.improvingCount]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Declining:"})," ",a.decliningCount]})]}),(0,d.jsxs)("table",{style:bp,children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{style:bq,children:"#"}),(0,d.jsx)("th",{style:{...bq,textAlign:"left",minWidth:180},children:"Student"}),(0,d.jsx)("th",{style:bq,children:"Class"}),(0,d.jsx)("th",{style:bq,children:"Periods"}),(0,d.jsx)("th",{style:bq,children:"Average"}),(0,d.jsx)("th",{style:bq,children:"Highest"}),(0,d.jsx)("th",{style:bq,children:"Lowest"}),(0,d.jsx)("th",{style:bq,children:"Latest"}),(0,d.jsx)("th",{style:bq,children:"Trend"})]})}),(0,d.jsxs)("tbody",{children:[a.students.map((a,b)=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{style:{...br,textAlign:"center"},children:b+1}),(0,d.jsxs)("td",{style:{...br,fontWeight:800},children:[a.studentName,a.admissionNumber&&(0,d.jsx)("div",{style:{fontSize:8,opacity:.7},children:a.admissionNumber})]}),(0,d.jsx)("td",{style:{...br,textAlign:"center"},children:a.className||"-"}),(0,d.jsx)("td",{style:{...br,textAlign:"center"},children:a.periods.length}),(0,d.jsxs)("td",{style:{...br,textAlign:"center",fontWeight:800},children:[aT(a.average,1),"%"]}),(0,d.jsxs)("td",{style:{...br,textAlign:"center"},children:[aT(a.highest,1),"%"]}),(0,d.jsxs)("td",{style:{...br,textAlign:"center"},children:[aT(a.lowest,1),"%"]}),(0,d.jsx)("td",{style:{...br,textAlign:"center"},children:null!=a.latest?`${aT(a.latest,1)}%`:"-"}),(0,d.jsx)("td",{style:{...br,textAlign:"center",fontWeight:800},children:aU(a.trend)})]},a.studentId)),!a.students.length&&(0,d.jsx)("tr",{children:(0,d.jsx)("td",{style:{...br,textAlign:"center",padding:16},colSpan:9,children:"No subject history records found."})})]})]}),(0,d.jsx)(bc,{primary:C,schoolName:bm.header.branding.schoolName,label:"Official subject history"})]}):(0,d.jsx)("div",{className:"cr-print-empty",children:"Select a subject to generate longitudinal subject analytics."})]})}return"promotion-summary"===O.mode?(0,d.jsx)(aF.A,{header:bm.header,summary:bm.promotionSummary,pageBreakAfter:!1}):(0,d.jsx)(aG.A,{header:bm.header,steps:bm.progressionTimeline,studentName:bn?.fullName||bm.studentTranscript?.studentName,pageBreakAfter:!1})})()})})]}),K&&(0,d.jsx)(ba,{filters:O,setBranchLockedFilters:bz,academicStructures:bD,academicPeriods:bE,classes:bF,students:bG,subjects:bH,onClose:()=>L(!1)}),M&&(0,d.jsx)(bb,{mode:O.mode,setMode:a=>{bz(b=>({...b,mode:a})),N(!1)},onRefresh:async()=>{N(!1),await bh()},onPrint:()=>{N(!1),bO()},onClose:()=>N(!1)})]}):(0,d.jsxs)("main",{className:"ba-page cumulative-page",style:{"--ba-primary":C},children:[(0,d.jsx)("style",{children:bd}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("h2",{children:"Parent workspace unavailable"}),(0,d.jsx)("p",{children:"Your child's cumulative record requires an active school and branch workspace."}),(0,d.jsx)("button",{type:"button",className:"ba-state-button",onClick:()=>f.push("/parent"),children:"Return to Parent Home"})]})]}):(0,d.jsx)(a8,{primary:C,title:"Parent profile not linked",text:"The active parent membership needs a parentId, parentLocalId, or matching parent contact."}):(0,d.jsx)(a8,{primary:C,title:"Parent access required",text:"Open this page from an active parent-role workspace."}):(0,d.jsx)(a8,{primary:C,title:"Redirecting to login...",text:"You must sign in before viewing your child's cumulative record."})},childFees:function(){(0,l.useRouter)(),(0,U.p)();let{loading:a,setLoading:b}=(0,V.J)(),{accountId:c,authenticated:e,loading:f}=(0,h.F)(),{settings:g,loading:n}=(0,i.t)(),{activeMembership:o}=(0,m.A)(),{activeSchool:p,activeSchoolId:q,activeBranch:r,activeBranchId:s}=(0,j.c)(),t=(0,k.useMemo)(()=>null,[]),u=(0,k.useMemo)(()=>null,[]),v=(0,k.useMemo)(()=>t?.membership||o||u||{},[o,t,u]),w=(0,k.useMemo)(()=>bj(c)||bj(v.accountId)||bj(g?.accountId),[v.accountId,c,g?.accountId]);(0,k.useMemo)(()=>bg(t?.schoolId,v.schoolId,v.school?.id,q,p?.id,g?.schoolId,null),[p?.id,q,v.school?.id,v.schoolId,t?.schoolId,g?.schoolId]),(0,k.useMemo)(()=>bg(t?.branchId,v.branchId,v.schoolBranchId,v.branch?.id,s,r?.id,g?.branchId,null),[r?.id,s,v.branch?.id,v.branchId,v.schoolBranchId,t?.branchId,g?.branchId]);let x=bg(v.parentId,v.parentLocalId,v.parent?.id,null),y=String(v.role||"").toLowerCase(),z=g?.primaryColor||"var(--primary-color,#2563eb)",[A,B]=(0,k.useState)([]),[C,E]=(0,k.useState)([]),[F,G]=(0,k.useState)([]),[H,I]=(0,k.useState)([]),[J,K]=(0,k.useState)([]),[L,M]=(0,k.useState)([]),[N,O]=(0,k.useState)([]),[P,Q]=(0,k.useState)([]),[R,S]=(0,k.useState)([]),[W,X]=(0,k.useState)([]),[Y,Z]=(0,k.useState)([]),[$,_]=(0,k.useState)([]),[aa,ab]=(0,k.useState)("invoices"),[ac,ad]=(0,k.useState)("cards"),[ae,af]=(0,k.useState)(""),[ag,ah]=(0,k.useState)(""),[ai,aj]=(0,k.useState)("all"),[ak,al]=(0,k.useState)(""),[am,an]=(0,k.useState)(""),[ao,ap]=(0,k.useState)(!1),[aq,ar]=(0,k.useState)(!1),[as,at]=(0,k.useState)(!1),[au,av]=(0,k.useState)(null),[aw,ax]=(0,k.useState)(""),ay=(0,D.D)({accountId:w,ownerTable:"students",rows:C,fields:[{fieldKey:"photo",mediaIdKey:"photoMediaId"}]}),az=(0,k.useMemo)(()=>{if(x)return x;let a=bj(v.email||v.user?.email).toLowerCase(),b=bj(v.phone||v.user?.phone).replace(/\s+/g,"");return bf(A.find(c=>{let d=bj(c.email).toLowerCase(),e=bj(c.phone).replace(/\s+/g,"");return a&&a===d||b&&b===e}))},[v,x,A]),aA=(0,k.useMemo)(()=>new Map(J.map(a=>[bf(a),bk(a)])),[J]),aB=(0,k.useMemo)(()=>new Map(L.map(a=>[bf(a),bk(a)])),[L]),aC=(0,k.useMemo)(()=>new Map(N.map(a=>[bf(a),bk(a)])),[N]),aD=(0,k.useMemo)(()=>new Map(C.map(a=>[bf(a),a])),[C]),aE=(0,k.useMemo)(()=>new Map(W.map(a=>[bf(a),a])),[W]),aF=(0,k.useMemo)(()=>{if(!az)return[];let a=new Set(F.filter(a=>bh(a.parentId,az)).map(a=>bf(a.studentId)));return C.filter(b=>a.has(bf(b))).map(a=>{let b=bf(a),c=H.find(a=>bh(a.studentId,b)&&["active","promoted"].includes(String(a.status||"").toLowerCase()))||H.find(a=>bh(a.studentId,b)&&"completed"===String(a.status||"").toLowerCase()),d=bg(c?.classId,a.currentClassId);return{id:b,name:bk(a),admissionNumber:bj(a.admissionNumber,"No admission number"),className:aA.get(d)||"Class not assigned",photo:ay[b]?.photo||(String(a.photo||"").startsWith("blob:")?void 0:a.photo)}})},[aA,H,ay,az,F,C]),aG=(0,k.useMemo)(()=>new Set(aF.map(a=>a.id)),[aF]),aH=(0,k.useMemo)(()=>{let a=P.find(a=>a.defaultForFees)||P.find(a=>!1!==a.active)||P[0];return{code:bj(a?.currencyCode||W[0]?.currencyCode,"GHS"),symbol:bj(a?.currencySymbol,"₵")}},[P,W]),aI=(0,k.useMemo)(()=>$.filter(a=>["paid","success","succeeded"].includes(String(a.status||"paid").toLowerCase())),[$]),aJ=(0,k.useMemo)(()=>{let a=ag.trim().toLowerCase();return W.filter(a=>aG.has(bf(a.studentId))).filter(a=>!ae||bh(a.studentId,ae)).filter(a=>!ak||bh(a.academicStructureId,ak)).filter(a=>!am||bh(a.academicPeriodId,am)).map(a=>{var b,c;let d=aI.filter(b=>bh(b.invoiceId,bf(a))).reduce((a,b)=>a+bi(b.amount),0),e=Math.max(bi(a.amountPaid),d),f=Math.max(0,bi(a.total)-e),g=(b=bi(a.total),c=a.dueDate,b>0&&e>=b?"paid":e>0?"part_paid":c&&new Date(c).getTime()<Date.now()?"overdue":"issued"),h=aD.get(bf(a.studentId));return{...a,amountPaidValue:e,balanceValue:f,statusValue:g,studentName:bk(h),className:aA.get(bf(a.classId))||"Class"}}).filter(a=>"all"===ai||a.statusValue===ai).filter(b=>!a||[b.invoiceNumber,b.studentName,b.className,b.statusValue,b.note,aB.get(bf(b.academicStructureId)),aC.get(bf(b.academicPeriodId))].join(" ").toLowerCase().includes(a)).sort((a,b)=>new Date(b.issueDate||b.createdAt||0).getTime()-new Date(a.issueDate||a.createdAt||0).getTime())},[ae,aG,aA,W,am,aC,ag,ai,ak,aB,aD,aI]),aK=(0,k.useMemo)(()=>{let a=ag.trim().toLowerCase();return $.filter(a=>aG.has(bf(a.studentId))).filter(a=>!ae||bh(a.studentId,ae)).filter(a=>{let b=aE.get(bf(a.invoiceId));return(!ak||!!bh(b?.academicStructureId,ak))&&(!am||!!bh(b?.academicPeriodId,am))}).filter(b=>{if(!a)return!0;let c=aE.get(bf(b.invoiceId));return[b.receiptNumber,b.referenceNumber,b.providerReference,b.method,b.status,b.payerName,bk(aD.get(bf(b.studentId))),c?.invoiceNumber].join(" ").toLowerCase().includes(a)}).sort((a,b)=>new Date(b.paidAt||b.date||b.createdAt||0).getTime()-new Date(a.paidAt||a.date||a.createdAt||0).getTime())},[ae,aG,aE,$,am,ag,ak,aD]),aL=(0,k.useMemo)(()=>{let a=aJ.reduce((a,b)=>a+bi(b.total),0);return{total:a,paid:aJ.reduce((a,b)=>a+b.amountPaidValue,0),balance:aJ.reduce((a,b)=>a+b.balanceValue,0),invoices:aJ.length,paidInvoices:aJ.filter(a=>"paid"===a.statusValue).length,overdue:aJ.filter(a=>"overdue"===a.statusValue).length,partPaid:aJ.filter(a=>"part_paid"===a.statusValue).length,payments:aK.length}},[aJ,aK.length]),aM=aF.find(a=>a.id===ae),aN=ak?N.filter(a=>bh(a.academicStructureId,ak)):N,aO=[ae,ak,am,"all"!==ai?ai:""].filter(Boolean).length,aP=a=>Y.filter(b=>bh(b.invoiceId,a)).sort((a,b)=>bi(a.order)-bi(b.order));return f||n||a?(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-page cf-loading`,children:[(0,d.jsx)("div",{className:`jsx-${bs.__hash} cf-spinner`}),(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Loading child fees…"}),(0,d.jsx)(T(),{id:bs.__hash,children:bs})]}):"parent"!==y?(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-page cf-state`,children:[(0,d.jsx)("div",{className:`jsx-${bs.__hash} cf-state-icon`,children:"!"}),(0,d.jsx)("h2",{className:`jsx-${bs.__hash}`,children:"Fees unavailable"}),(0,d.jsx)("p",{className:`jsx-${bs.__hash}`,children:"This page is available to an active parent membership."}),(0,d.jsx)(T(),{id:bs.__hash,children:bs})]}):(0,d.jsxs)("div",{style:{"--primary":z},className:`jsx-${bs.__hash} cf-page`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-toolbar`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-search`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"⌕"}),(0,d.jsx)("input",{value:ag,onChange:a=>ah(a.target.value),placeholder:"Search invoices or receipts…","aria-label":"Search child fees",className:`jsx-${bs.__hash}`}),ag?(0,d.jsx)("button",{onClick:()=>ah(""),"aria-label":"Clear search",className:`jsx-${bs.__hash}`,children:"\xd7"}):null]}),(0,d.jsxs)("button",{onClick:()=>ap(!0),"aria-label":"Fee filters",className:`jsx-${bs.__hash} cf-icon-btn ${ao?"active":""}`,children:[(0,d.jsx)(bq,{}),aO?(0,d.jsx)("span",{className:`jsx-${bs.__hash} cf-badge`,children:aO}):null]}),(0,d.jsx)("button",{onClick:()=>ar(!0),"aria-label":"More options",className:`jsx-${bs.__hash} cf-icon-btn`,children:"⋯"})]}),aF.length>1?(0,d.jsx)("div",{className:`jsx-${bs.__hash} cf-child-strip`,children:aF.map(a=>(0,d.jsxs)("button",{onClick:()=>af(a.id),className:`jsx-${bs.__hash} `+((a.id===ae?"selected":"")||""),children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash} cf-mini-avatar`,children:a.photo?(0,d.jsx)("img",{src:a.photo,alt:"",className:`jsx-${bs.__hash}`}):a.name.charAt(0).toUpperCase()}),(0,d.jsxs)("span",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:a.name}),(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:a.className})]})]},a.id))}):null,aM?(0,d.jsxs)("section",{className:`jsx-${bs.__hash} cf-child-card`,children:[(0,d.jsx)("div",{className:`jsx-${bs.__hash} cf-avatar`,children:aM.photo?(0,d.jsx)("img",{src:aM.photo,alt:aM.name,className:`jsx-${bs.__hash}`}):aM.name.charAt(0).toUpperCase()}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-child-copy`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("h1",{className:`jsx-${bs.__hash}`,children:aM.name}),(0,d.jsx)("button",{onClick:()=>at(!0),"aria-label":"Data status",className:`jsx-${bs.__hash} cf-sync-dot`})]}),(0,d.jsxs)("p",{className:`jsx-${bs.__hash}`,children:[aM.admissionNumber," \xb7 ",aM.className]})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-balance-block`,children:[(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Outstanding"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bl(aL.balance,aH.code)})]})]}):null,(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-summary-grid`,children:[(0,d.jsxs)("article",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash} blue`,children:"Σ"}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bl(aL.total,aH.code)}),(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Total billed"})]})]}),(0,d.jsxs)("article",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash} green`,children:"✓"}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bl(aL.paid,aH.code)}),(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Paid"})]})]}),(0,d.jsxs)("article",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash} red`,children:"!"}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bl(aL.balance,aH.code)}),(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Balance"})]})]}),(0,d.jsxs)("article",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash} orange`,children:"▤"}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:aL.invoices}),(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Invoices"})]})]})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-tabs`,children:[(0,d.jsxs)("button",{onClick:()=>ab("invoices"),className:`jsx-${bs.__hash} `+(("invoices"===aa?"active":"")||""),children:["Invoices ",(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:aJ.length})]}),(0,d.jsxs)("button",{onClick:()=>ab("payments"),className:`jsx-${bs.__hash} `+(("payments"===aa?"active":"")||""),children:["Payments ",(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:aK.length})]})]}),az?aF.length?"analytics"===ac?(0,d.jsxs)("section",{className:`jsx-${bs.__hash} cf-analytics`,children:[(0,d.jsxs)("article",{className:`jsx-${bs.__hash} cf-analytics-card cf-overview`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Payment progress"}),(0,d.jsxs)("strong",{className:`jsx-${bs.__hash}`,children:[aL.total?Math.round(aL.paid/aL.total*100):0,"%"]}),(0,d.jsxs)("small",{className:`jsx-${bs.__hash}`,children:[aL.paidInvoices," of ",aL.invoices," invoices fully paid"]})]}),(0,d.jsx)("div",{style:{"--value":`${aL.total?Math.round(aL.paid/aL.total*100):0}%`},className:`jsx-${bs.__hash} cf-donut`,children:(0,d.jsxs)("span",{className:`jsx-${bs.__hash}`,children:[aL.total?Math.round(aL.paid/aL.total*100):0,"%"]})})]}),(0,d.jsxs)("article",{className:`jsx-${bs.__hash} cf-analytics-card`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-analytics-title`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:"Invoice health"}),(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Current filtered child and period"})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-metric-list`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Paid"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:aL.paidInvoices})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Part paid"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:aL.partPaid})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Overdue"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:aL.overdue})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Payments"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:aL.payments})]})]})]})]}):"invoices"===aa?aJ.length?"table"===ac?(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-table-shell`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-table-title`,children:["Invoices (",aJ.length,")"]}),(0,d.jsx)("div",{className:`jsx-${bs.__hash} cf-table-scroll`,children:(0,d.jsxs)("table",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("thead",{className:`jsx-${bs.__hash}`,children:(0,d.jsxs)("tr",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("th",{className:`jsx-${bs.__hash}`,children:"Invoice"}),(0,d.jsx)("th",{className:`jsx-${bs.__hash}`,children:"Status"}),(0,d.jsx)("th",{className:`jsx-${bs.__hash}`,children:"Total"}),(0,d.jsx)("th",{className:`jsx-${bs.__hash}`,children:"Paid"}),(0,d.jsx)("th",{className:`jsx-${bs.__hash}`,children:"Balance"}),(0,d.jsx)("th",{className:`jsx-${bs.__hash}`,children:"Due"})]})}),(0,d.jsx)("tbody",{className:`jsx-${bs.__hash}`,children:aJ.map(a=>(0,d.jsxs)("tr",{onClick:()=>av({kind:"invoice",row:a}),className:`jsx-${bs.__hash}`,children:[(0,d.jsxs)("td",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bj(a.invoiceNumber,"Invoice")}),(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:a.className})]}),(0,d.jsx)("td",{className:`jsx-${bs.__hash}`,children:(0,d.jsx)(bp,{tone:bo(a.statusValue),children:bn(a.statusValue)})}),(0,d.jsx)("td",{className:`jsx-${bs.__hash}`,children:bl(a.total,a.currencyCode||aH.code)}),(0,d.jsx)("td",{className:`jsx-${bs.__hash}`,children:bl(a.amountPaidValue,a.currencyCode||aH.code)}),(0,d.jsx)("td",{className:`jsx-${bs.__hash}`,children:bl(a.balanceValue,a.currencyCode||aH.code)}),(0,d.jsx)("td",{className:`jsx-${bs.__hash}`,children:bm(a.dueDate)})]},bf(a)))})]})})]}):(0,d.jsx)("div",{className:`jsx-${bs.__hash} cf-card-grid`,children:aJ.map(a=>(0,d.jsxs)("article",{onClick:()=>av({kind:"invoice",row:a}),className:`jsx-${bs.__hash} cf-invoice-card`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-card-top`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bj(a.invoiceNumber,"Invoice")}),(0,d.jsxs)("small",{className:`jsx-${bs.__hash}`,children:[aB.get(bf(a.academicStructureId))||"Academic year"," ","\xb7"," ",aC.get(bf(a.academicPeriodId))||"Period"]})]}),(0,d.jsx)(bp,{tone:bo(a.statusValue),children:bn(a.statusValue)})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-money-row`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Total"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bl(a.total,a.currencyCode||aH.code)})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Paid"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bl(a.amountPaidValue,a.currencyCode||aH.code)})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Balance"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash} `+((a.balanceValue?"danger":"")||""),children:bl(a.balanceValue,a.currencyCode||aH.code)})]})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-card-foot`,children:[(0,d.jsxs)("span",{className:`jsx-${bs.__hash}`,children:["Issued ",bm(a.issueDate)]}),(0,d.jsxs)("span",{className:`jsx-${bs.__hash}`,children:["Due ",bm(a.dueDate)]})]})]},bf(a)))}):(0,d.jsx)(br,{title:"No invoices found",body:"Try another child, period or invoice status."}):aK.length?"table"===ac?(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-table-shell`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-table-title`,children:["Payments (",aK.length,")"]}),(0,d.jsx)("div",{className:`jsx-${bs.__hash} cf-table-scroll`,children:(0,d.jsxs)("table",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("thead",{className:`jsx-${bs.__hash}`,children:(0,d.jsxs)("tr",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("th",{className:`jsx-${bs.__hash}`,children:"Receipt"}),(0,d.jsx)("th",{className:`jsx-${bs.__hash}`,children:"Status"}),(0,d.jsx)("th",{className:`jsx-${bs.__hash}`,children:"Method"}),(0,d.jsx)("th",{className:`jsx-${bs.__hash}`,children:"Amount"}),(0,d.jsx)("th",{className:`jsx-${bs.__hash}`,children:"Date"})]})}),(0,d.jsx)("tbody",{className:`jsx-${bs.__hash}`,children:aK.map(a=>(0,d.jsxs)("tr",{onClick:()=>av({kind:"payment",row:a}),className:`jsx-${bs.__hash}`,children:[(0,d.jsxs)("td",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bj(a.receiptNumber,"No receipt")}),(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:bj(a.referenceNumber,"No reference")})]}),(0,d.jsx)("td",{className:`jsx-${bs.__hash}`,children:(0,d.jsx)(bp,{tone:bo(a.status),children:bn(a.status)})}),(0,d.jsx)("td",{className:`jsx-${bs.__hash}`,children:bn(a.method)}),(0,d.jsx)("td",{className:`jsx-${bs.__hash}`,children:bl(a.amount,a.currencyCode||aH.code)}),(0,d.jsx)("td",{className:`jsx-${bs.__hash}`,children:bm(a.paidAt||a.date)})]},bf(a)))})]})})]}):(0,d.jsx)("div",{className:`jsx-${bs.__hash} cf-card-grid`,children:aK.map(a=>{let b=aE.get(bf(a.invoiceId));return(0,d.jsxs)("article",{onClick:()=>av({kind:"payment",row:a}),className:`jsx-${bs.__hash} cf-payment-card`,children:[(0,d.jsx)("div",{className:`jsx-${bs.__hash} cf-payment-icon`,children:"✓"}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-payment-main`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bl(a.amount,a.currencyCode||aH.code)}),(0,d.jsx)(bp,{tone:bo(a.status),children:bn(a.status)})]}),(0,d.jsxs)("p",{className:`jsx-${bs.__hash}`,children:[bn(a.method)," \xb7"," ",bj(b?.invoiceNumber,"General payment")]}),(0,d.jsxs)("small",{className:`jsx-${bs.__hash}`,children:[bm(a.paidAt||a.date)," \xb7"," ",bj(a.receiptNumber,"No receipt number")]})]})]},bf(a))})}):(0,d.jsx)(br,{title:"No payment history",body:"Successful and pending payments will appear here."}):(0,d.jsx)(br,{title:"No linked children",body:"No active student-parent relationship was found for this parent."}):(0,d.jsx)(br,{title:"Parent profile not linked",body:"The active membership needs a parentId or parentLocalId."}),ao?(0,d.jsx)("div",{onMouseDown:()=>ap(!1),className:`jsx-${bs.__hash} cf-sheet-layer`,children:(0,d.jsxs)("aside",{onMouseDown:a=>a.stopPropagation(),className:`jsx-${bs.__hash} cf-sheet`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-sheet-head`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:"Fee filters"}),(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Choose a child, period and status"})]}),(0,d.jsx)("button",{onClick:()=>ap(!1),className:`jsx-${bs.__hash}`,children:"\xd7"})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-sheet-body`,children:[(0,d.jsxs)("label",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Child"}),(0,d.jsx)("select",{value:ae,onChange:a=>af(a.target.value),className:`jsx-${bs.__hash}`,children:aF.map(a=>(0,d.jsx)("option",{value:a.id,className:`jsx-${bs.__hash}`,children:a.name},a.id))})]}),(0,d.jsxs)("label",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Academic structure"}),(0,d.jsxs)("select",{value:ak,onChange:a=>{al(a.target.value),an("")},className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("option",{value:"",className:`jsx-${bs.__hash}`,children:"All structures"}),L.map(a=>(0,d.jsx)("option",{value:bf(a),className:`jsx-${bs.__hash}`,children:bk(a)},bf(a)))]})]}),(0,d.jsxs)("label",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Academic period"}),(0,d.jsxs)("select",{value:am,onChange:a=>an(a.target.value),className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("option",{value:"",className:`jsx-${bs.__hash}`,children:"All periods"}),aN.map(a=>(0,d.jsx)("option",{value:bf(a),className:`jsx-${bs.__hash}`,children:bk(a)},bf(a)))]})]}),(0,d.jsxs)("label",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Invoice status"}),(0,d.jsxs)("select",{value:ai,onChange:a=>aj(a.target.value),className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("option",{value:"all",className:`jsx-${bs.__hash}`,children:"All statuses"}),(0,d.jsx)("option",{value:"issued",className:`jsx-${bs.__hash}`,children:"Issued"}),(0,d.jsx)("option",{value:"part_paid",className:`jsx-${bs.__hash}`,children:"Part paid"}),(0,d.jsx)("option",{value:"paid",className:`jsx-${bs.__hash}`,children:"Paid"}),(0,d.jsx)("option",{value:"overdue",className:`jsx-${bs.__hash}`,children:"Overdue"}),(0,d.jsx)("option",{value:"cancelled",className:`jsx-${bs.__hash}`,children:"Cancelled"})]})]})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-sheet-actions`,children:[(0,d.jsx)("button",{onClick:()=>{aj("all"),al(""),an(""),ah("")},className:`jsx-${bs.__hash} secondary`,children:"Reset"}),(0,d.jsx)("button",{onClick:()=>ap(!1),className:`jsx-${bs.__hash} primary`,children:"Apply"})]})]})}):null,aq?(0,d.jsx)("div",{onMouseDown:()=>ar(!1),className:`jsx-${bs.__hash} cf-sheet-layer`,children:(0,d.jsxs)("aside",{onMouseDown:a=>a.stopPropagation(),className:`jsx-${bs.__hash} cf-sheet cf-short-sheet`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-sheet-head`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:"View options"}),(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Change how child fees are displayed"})]}),(0,d.jsx)("button",{onClick:()=>ar(!1),className:`jsx-${bs.__hash}`,children:"\xd7"})]}),(0,d.jsx)("div",{className:`jsx-${bs.__hash} cf-view-options`,children:["cards","table","analytics"].map(a=>(0,d.jsxs)("button",{onClick:()=>{ad(a),ar(!1)},className:`jsx-${bs.__hash} `+((ac===a?"selected":"")||""),children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"cards"===a?"▤":"table"===a?"▦":"⌁"}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:a.charAt(0).toUpperCase()+a.slice(1)}),(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"cards"===a?"Mobile-friendly finance cards":"table"===a?"Compact detailed rows":"Balances and payment progress"})]}),ac===a?(0,d.jsx)("b",{className:`jsx-${bs.__hash}`,children:"✓"}):null]},a))})]})}):null,au?(0,d.jsx)("div",{onMouseDown:()=>av(null),className:`jsx-${bs.__hash} cf-sheet-layer`,children:(0,d.jsxs)("aside",{onMouseDown:a=>a.stopPropagation(),className:`jsx-${bs.__hash} cf-sheet`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-sheet-head`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:"invoice"===au.kind?bj(au.row.invoiceNumber,"Invoice details"):bj(au.row.receiptNumber,"Payment details")}),(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"invoice"===au.kind?"Invoice items and balance":"Payment and receipt information"})]}),(0,d.jsx)("button",{onClick:()=>av(null),className:`jsx-${bs.__hash}`,children:"\xd7"})]}),"invoice"===au.kind?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-detail-summary`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Total"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bl(au.row.total,au.row.currencyCode||aH.code)})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Paid"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bl(au.row.amountPaidValue,au.row.currencyCode||aH.code)})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Balance"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bl(au.row.balanceValue,au.row.currencyCode||aH.code)})]})]}),(0,d.jsx)("div",{className:`jsx-${bs.__hash} cf-detail-list`,children:aP(bf(au.row)).length?aP(bf(au.row)).map(a=>(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsxs)("span",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bj(a.name,"Fee item")}),(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:bj(a.description)})]}),(0,d.jsx)("b",{className:`jsx-${bs.__hash}`,children:bl(a.amount,a.currencyCode||au.row.currencyCode||aH.code)})]},bf(a))):(0,d.jsx)("p",{className:`jsx-${bs.__hash} cf-muted`,children:"No separate invoice items were stored for this invoice."})}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-meta-list`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Status"}),(0,d.jsx)(bp,{tone:bo(au.row.statusValue),children:bn(au.row.statusValue)})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Issued"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bm(au.row.issueDate)})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Due"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bm(au.row.dueDate)})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Class"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:au.row.className})]})]}),au.row.balanceValue>0?(0,d.jsx)("div",{className:`jsx-${bs.__hash} cf-sheet-actions single`,children:(0,d.jsx)("button",{onClick:()=>{ax("Online checkout will open here after Paystack is connected."),window.setTimeout(()=>ax(""),3800)},className:`jsx-${bs.__hash} primary`,children:"Pay outstanding balance"})}):null]}):(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-meta-list cf-payment-detail`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Amount"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bl(au.row.amount,au.row.currencyCode||aH.code)})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Status"}),(0,d.jsx)(bp,{tone:bo(au.row.status),children:bn(au.row.status)})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Method"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bn(au.row.method)})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Date"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bm(au.row.paidAt||au.row.date)})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Receipt"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bj(au.row.receiptNumber,"Not issued")})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`,children:"Reference"}),(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:bj(au.row.providerReference||au.row.referenceNumber,"Not available")})]})]})]})}):null,as?(0,d.jsx)("div",{onMouseDown:()=>at(!1),className:`jsx-${bs.__hash} cf-sheet-layer`,children:(0,d.jsxs)("aside",{onMouseDown:a=>a.stopPropagation(),className:`jsx-${bs.__hash} cf-sheet cf-short-sheet`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-sheet-head`,children:[(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:"Fee data status"}),(0,d.jsx)("small",{className:`jsx-${bs.__hash}`,children:"Offline-first parent view"})]}),(0,d.jsx)("button",{onClick:()=>at(!1),className:`jsx-${bs.__hash}`,children:"\xd7"})]}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash} cf-status-panel`,children:[(0,d.jsx)("span",{className:`jsx-${bs.__hash}`}),(0,d.jsxs)("div",{className:`jsx-${bs.__hash}`,children:[(0,d.jsx)("strong",{className:`jsx-${bs.__hash}`,children:"Available on this device"}),(0,d.jsx)("p",{className:`jsx-${bs.__hash}`,children:"Invoices and payment history are read from the latest synchronized local school data."})]})]})]})}):null,aw?(0,d.jsx)("div",{className:`jsx-${bs.__hash} cf-toast`,children:aw}):null,(0,d.jsx)(T(),{id:bs.__hash,children:bs})]})},announcements:function(){var a;(0,l.useRouter)();let{accountId:b,authenticated:c,loading:e}=(0,h.F)(),{settings:f,loading:g}=(0,i.t)(),{activeSchool:m,activeSchoolId:o,activeBranch:p,activeBranchId:q,loading:r}=(0,j.c)(),s=o||m?.id||f?.schoolId,t=q||p?.id||f?.branchId,u=f?.primaryColor||"var(--primary-color, #2563eb)",[v,w]=(0,k.useState)(!0),[x,y]=(0,k.useState)(null),[z,A]=(0,k.useState)([]),[B,C]=(0,k.useState)("cards"),[D,E]=(0,k.useState)([]),[F,G]=(0,k.useState)([]),[H,I]=(0,k.useState)(""),[J,K]=(0,k.useState)("all"),L=async()=>{if(!b||!s||!t)return void w(!1);try{w(!0);let a=await bE(b,Number(s),Number(t));y(a.parent),A(a.children);let[c,d]=await Promise.all([by("announcements"),by("announcementRecipients")]),e=new Set(a.children.map(a=>Number(a.classId||a.currentClassId)).filter(Boolean)),f=c.filter(a=>{if(a.isDeleted||a.accountId&&a.accountId!==b||Number(a.schoolId)!==Number(s))return!1;let c=a.targetRoles||[],d=a.targetBranchIds||[],f=String(a.audience||a.targetRole||"").toLowerCase();return Number(a.branchId)===Number(t)||d.includes(Number(t))||f.includes("parent")||f.includes("guardian")||c.includes("parent")||"whole_branch"===f||e.has(Number(a.classId||a.scopeId))});E(f),G(d.filter(a=>bx(a,b,Number(s),Number(t))))}finally{w(!1)}},M=(0,k.useMemo)(()=>{let a=H.toLowerCase().trim();return D.filter(b=>("all"===J||String(b.status||"sent")===J)&&(!a||`${b.title} ${b.body} ${b.message} ${b.audience} ${b.priority}`.toLowerCase().includes(a))).sort((a,b)=>bt(b.sentAt||b.publishAt||b.createdAt)-bt(a.sentAt||a.publishAt||a.createdAt))},[D,H,J]),N=(0,k.useMemo)(()=>({total:D.length,unread:D.filter(a=>!F.some(b=>b.announcementId===a.id&&(b.readAt||b.acknowledgedAt))).length,urgent:D.filter(a=>"urgent"===a.priority||"high"===a.priority).length,sent:D.filter(a=>"sent"===String(a.status||"sent")).length,acknowledged:F.filter(a=>a.acknowledgedAt).length,children:z.length}),[D,F,z]),O=async a=>{let c=n.db.announcementRecipients;if(!c)return;let d=F.find(b=>b.announcementId===a.id&&("parent"===b.role||b.email===x?.email));d?.id?await c.update(d.id,{status:"acknowledged",readAt:d.readAt||bu(),acknowledgedAt:bu(),updatedAt:bu(),version:bt(d.version)+1,synced:"pending"}):await c.add({accountId:b,schoolId:Number(s),branchId:Number(t),announcementId:a.id,role:"parent",email:x?.email,phone:x?.phone,status:"acknowledged",deliveredAt:bu(),readAt:bu(),acknowledgedAt:bu(),isDeleted:!1,createdAt:bu(),updatedAt:bu(),version:1,synced:"pending"}),await L()};return v||e||g||r?(0,d.jsxs)("main",{className:"pp-page",style:{"--pp-primary":u},children:[(0,d.jsx)("style",{children:bD}),(0,d.jsxs)("section",{className:"pp-state",children:[(0,d.jsx)("h2",{children:"Opening announcements..."}),(0,d.jsx)("p",{children:"Loading parent notices."})]})]}):(0,d.jsxs)("main",{className:"pp-page",style:{"--pp-primary":u},children:[(0,d.jsx)("style",{children:bD}),(0,d.jsxs)("section",{className:"pp-hero",children:[(0,d.jsxs)("div",{className:"pp-hero-left",children:[(0,d.jsx)("div",{className:"pp-icon",children:"\uD83D\uDCE3"}),(0,d.jsxs)("div",{className:"pp-title",children:[(0,d.jsx)("p",{children:"Parent Communication"}),(0,d.jsx)("h2",{children:"Announcements"}),(0,d.jsxs)("span",{children:[(a=x||{},bv(a?.fullName||a?.name||a?.title||a?.label||a?.email,"Unnamed"))," \xb7 Receive only"]})]})]}),(0,d.jsx)("div",{className:"pp-actions",children:(0,d.jsx)("button",{className:"pp-btn",onClick:L,children:"Refresh"})})]}),(0,d.jsxs)("section",{className:"pp-summary-grid",children:[(0,d.jsx)(bA,{label:"Announcements",value:N.total,icon:"\uD83D\uDCE3"}),(0,d.jsx)(bA,{label:"Unread",value:N.unread,icon:"\uD83D\uDD34",warning:N.unread>0}),(0,d.jsx)(bA,{label:"Urgent/High",value:N.urgent,icon:"⚠️",warning:N.urgent>0}),(0,d.jsx)(bA,{label:"Sent",value:N.sent,icon:"✅",positive:!0}),(0,d.jsx)(bA,{label:"Acknowledged",value:N.acknowledged,icon:"\uD83D\uDC4D",positive:!0}),(0,d.jsx)(bA,{label:"Children",value:N.children,icon:"\uD83E\uDDD2"})]}),(0,d.jsx)(bC,{view:B,setView:C,count:M.length}),(0,d.jsxs)("section",{className:"pp-filter",children:[(0,d.jsx)("input",{value:H,onChange:a=>I(a.target.value),placeholder:"Search announcements..."}),(0,d.jsxs)("select",{value:J,onChange:a=>K(a.target.value),children:[(0,d.jsx)("option",{value:"all",children:"All"}),(0,d.jsx)("option",{value:"sent",children:"Sent"}),(0,d.jsx)("option",{value:"draft",children:"Draft"}),(0,d.jsx)("option",{value:"scheduled",children:"Scheduled"})]}),(0,d.jsx)("button",{className:"pp-btn",onClick:L,children:"Reload"})]}),"analytics"===B&&(0,d.jsx)("section",{className:"pp-section pp-breakdown-grid",children:["parents","whole_branch","all_guardians","students","teachers"].map(a=>{let b=D.filter(b=>String(b.audience||b.targetRole).includes(a)).length,c=D.length?Math.round(b/D.length*100):0;return(0,d.jsxs)("article",{className:"pp-breakdown",children:[(0,d.jsx)("strong",{children:a.replaceAll("_"," ")}),(0,d.jsx)("div",{className:"pp-bar",children:(0,d.jsx)("div",{style:{width:`${c}%`}})}),(0,d.jsxs)("div",{className:"pp-chip-row",children:[(0,d.jsx)(bz,{tone:"blue",children:b}),(0,d.jsxs)(bz,{children:[c,"%"]})]})]},a)})}),"table"===B&&(0,d.jsx)("section",{className:"pp-panel",children:(0,d.jsx)("div",{className:"pp-table-wrap",children:(0,d.jsxs)("table",{className:"pp-table",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Date"}),(0,d.jsx)("th",{children:"Title"}),(0,d.jsx)("th",{children:"Audience"}),(0,d.jsx)("th",{children:"Priority"}),(0,d.jsx)("th",{children:"Status"}),(0,d.jsx)("th",{children:"Action"})]})}),(0,d.jsxs)("tbody",{children:[M.map(a=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:bw(a.sentAt||a.publishAt||a.createdAt)}),(0,d.jsxs)("td",{children:[(0,d.jsx)("strong",{children:a.title}),(0,d.jsx)("br",{}),(0,d.jsx)("span",{children:bv(a.body||a.message).slice(0,80)})]}),(0,d.jsx)("td",{children:a.audience||a.targetRole||"branch"}),(0,d.jsx)("td",{children:(0,d.jsx)(bz,{tone:"urgent"===a.priority?"red":"high"===a.priority?"orange":"blue",children:a.priority||"normal"})}),(0,d.jsx)("td",{children:(0,d.jsx)(bz,{tone:"draft"===a.status?"gray":"green",children:a.status||"sent"})}),(0,d.jsx)("td",{children:(0,d.jsx)("button",{className:"pp-btn",onClick:()=>O(a),children:"Acknowledge"})})]},a.id)),!M.length&&(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:6,children:(0,d.jsx)(bB,{text:"No announcements found."})})})]})]})})}),"cards"===B&&(0,d.jsx)("section",{className:"pp-section",children:(0,d.jsxs)("div",{className:"pp-list",children:[M.map(a=>(0,d.jsxs)("article",{className:"pp-card",children:[(0,d.jsxs)("div",{className:"pp-card-top",children:[(0,d.jsx)("div",{className:"pp-avatar",children:"\uD83D\uDCE3"}),(0,d.jsxs)("div",{className:"pp-card-main",children:[(0,d.jsx)("h3",{children:a.title}),(0,d.jsxs)("p",{children:[bw(a.sentAt||a.publishAt||a.createdAt)," \xb7 ",a.audience||a.targetRole||"branch"]}),(0,d.jsxs)("div",{className:"pp-chip-row",children:[(0,d.jsx)(bz,{tone:"urgent"===a.priority?"red":"high"===a.priority?"orange":"blue",children:a.priority||"normal"}),(0,d.jsx)(bz,{tone:"draft"===a.status?"gray":"green",children:a.status||"sent"}),(0,d.jsx)("button",{className:"pp-btn",onClick:()=>O(a),children:"Acknowledge"})]})]})]}),(0,d.jsx)("p",{className:"pp-message",children:a.body||a.message})]},a.id)),!M.length&&(0,d.jsx)(bB,{text:"No announcements found."})]})})]})},messages:function(){(0,l.useRouter)();let{accountId:a,authenticated:b,loading:c}=(0,h.F)(),{settings:e,loading:f}=(0,i.t)(),{activeSchool:g,activeSchoolId:m,activeBranch:o,activeBranchId:p,loading:q}=(0,j.c)(),r=m||g?.id||e?.schoolId,s=p||o?.id||e?.branchId,t=e?.primaryColor||"var(--primary-color, #2563eb)",[u,v]=(0,k.useState)(!0),[w,x]=(0,k.useState)(null),[y,z]=(0,k.useState)("cards"),[A,B]=(0,k.useState)([]),[C,D]=(0,k.useState)([]),[E,F]=(0,k.useState)([]),[G,H]=(0,k.useState)([]),[I,J]=(0,k.useState)(""),[K,L]=(0,k.useState)("inbox"),[M,N]=(0,k.useState)(!1),[O,P]=(0,k.useState)(null),[Q,R]=(0,k.useState)(!1),[S,T]=(0,k.useState)(""),[U,V]=(0,k.useState)({subject:"",body:"",recipientUserId:""}),W=async()=>{if(!a||!r||!s)return void v(!1);try{v(!0);let b=await cf(a,Number(r),Number(s));x(b.parent);let[c,d,e,f]=await Promise.all([b7("messageThreads"),b7("messages"),b7("users").then(async a=>a.length?a:b7("accountUsers")),b7("userMemberships").then(async a=>a.length?a:b7("memberships"))]);B(c.filter(c=>b5(c,a,Number(r),Number(s))&&(String(c.participantRoles||"").includes("parent")||String(c.parentLocalId||"")===String(b.parent?.id||"")||"parent"===String(c.createdByRole||"")))),D(d.filter(b=>b5(b,a,Number(r),Number(s)))),F(e),H(f.filter(b=>b5(b,a,Number(r),Number(s))))}finally{v(!1)}},X=(0,k.useMemo)(()=>G.filter(a=>["branch_admin","teacher","accountant"].includes(String(a.role))).map(a=>{let b=E.find(b=>String(b8(b)||"")===b9(a)||!!(b.email&&a.email&&b.email.toLowerCase()===a.email.toLowerCase()));return{id:b8(b)||a.userId||a.userLocalId,name:b6(b||a),role:a.role,email:b?.email||a.email}}).filter(a=>a.id),[G,E]),Y=(0,k.useMemo)(()=>{let a=I.toLowerCase().trim();return A.filter(b=>("all"===K||String(b.folder||"inbox")===K)&&(!a||`${b.subject} ${b.lastMessage} ${b.status}`.toLowerCase().includes(a))).sort((a,b)=>b1(b.lastMessageAt||b.updatedAt||b.createdAt)-b1(a.lastMessageAt||a.updatedAt||a.createdAt))},[A,I,K]),Z=(0,k.useMemo)(()=>O?.id?C.filter(a=>Number(a.threadId)===Number(O.id)).sort((a,b)=>b1(a.createdAt)-b1(b.createdAt)):[],[C,O]),$=(0,k.useMemo)(()=>({threads:A.length,inbox:A.filter(a=>"inbox"===String(a.folder||"inbox")).length,sent:A.filter(a=>"sent"===a.folder).length,unread:C.filter(a=>!a.readAt&&"inbound"===a.direction).length,archived:A.filter(a=>"archived"===a.folder).length,contacts:X.length}),[A,C,X]),_=async()=>{let b=n.db.messageThreads,c=n.db.messages;if(!b||!c)return void alert("messageThreads/messages tables are missing in db.ts.");if(!U.subject.trim()||!U.body.trim()||!U.recipientUserId)return void alert("Subject, message and recipient are required.");R(!0);try{let d=X.find(a=>String(a.id)===String(U.recipientUserId)),e=await b.add({accountId:a,schoolId:Number(r),branchId:Number(s),subject:U.subject.trim(),participantUserIds:[U.recipientUserId],participantRoles:["parent",d?.role],parentLocalId:w?.id,folder:"sent",status:"open",lastMessage:U.body.trim(),lastMessageAt:b2(),createdByRole:"parent",isDeleted:!1,createdAt:b2(),updatedAt:b2(),version:1,synced:"pending"});await c.add({accountId:a,schoolId:Number(r),branchId:Number(s),threadId:Number(e),senderRole:"parent",parentLocalId:w?.id,recipientUserId:U.recipientUserId,recipientRole:d?.role,body:U.body.trim(),direction:"outbound",status:"sent",sentAt:b2(),isDeleted:!1,createdAt:b2(),updatedAt:b2(),version:1,synced:"pending"}),N(!1),V({subject:"",body:"",recipientUserId:""}),await W()}finally{R(!1)}},aa=async()=>{if(!O?.id||!S.trim())return;let b=n.db.messages;await b.add({accountId:a,schoolId:Number(r),branchId:Number(s),threadId:Number(O.id),senderRole:"parent",parentLocalId:w?.id,body:S.trim(),direction:"outbound",status:"sent",sentAt:b2(),isDeleted:!1,createdAt:b2(),updatedAt:b2(),version:1,synced:"pending"}),await n.db.messageThreads.update(O.id,{lastMessage:S.trim(),lastMessageAt:b2(),updatedAt:b2(),version:b1(O.version)+1,synced:"pending"}),T(""),await W()};return u||c||f||q?(0,d.jsxs)("main",{className:"pp-page",style:{"--pp-primary":t},children:[(0,d.jsx)("style",{children:ce}),(0,d.jsxs)("section",{className:"pp-state",children:[(0,d.jsx)("h2",{children:"Opening messages..."}),(0,d.jsx)("p",{children:"Loading parent conversations."})]})]}):(0,d.jsxs)("main",{className:"pp-page",style:{"--pp-primary":t},children:[(0,d.jsx)("style",{children:ce}),(0,d.jsxs)("section",{className:"pp-hero",children:[(0,d.jsxs)("div",{className:"pp-hero-left",children:[(0,d.jsx)("div",{className:"pp-icon",children:"\uD83D\uDCAC"}),(0,d.jsxs)("div",{className:"pp-title",children:[(0,d.jsx)("p",{children:"Parent Communication"}),(0,d.jsx)("h2",{children:"Messages"}),(0,d.jsxs)("span",{children:[b6(w||{})," \xb7 Teachers, admin and finance"]})]})]}),(0,d.jsxs)("div",{className:"pp-actions",children:[(0,d.jsx)("button",{className:"pp-btn",onClick:W,children:"Refresh"}),(0,d.jsx)("button",{className:"pp-primary",onClick:()=>N(!0),children:"Compose"})]})]}),(0,d.jsxs)("section",{className:"pp-summary-grid",children:[(0,d.jsx)(cb,{label:"Threads",value:$.threads,icon:"\uD83D\uDCAC"}),(0,d.jsx)(cb,{label:"Inbox",value:$.inbox,icon:"\uD83D\uDCE5"}),(0,d.jsx)(cb,{label:"Sent",value:$.sent,icon:"\uD83D\uDCE4",positive:!0}),(0,d.jsx)(cb,{label:"Unread",value:$.unread,icon:"\uD83D\uDD34",warning:$.unread>0}),(0,d.jsx)(cb,{label:"Archived",value:$.archived,icon:"\uD83D\uDDC4️"}),(0,d.jsx)(cb,{label:"Contacts",value:$.contacts,icon:"\uD83D\uDC65"})]}),(0,d.jsx)(cd,{view:y,setView:z,count:Y.length}),(0,d.jsxs)("section",{className:"pp-filter",children:[(0,d.jsx)("input",{value:I,onChange:a=>J(a.target.value),placeholder:"Search messages..."}),(0,d.jsxs)("select",{value:K,onChange:a=>L(a.target.value),children:[(0,d.jsx)("option",{value:"inbox",children:"Inbox"}),(0,d.jsx)("option",{value:"sent",children:"Sent"}),(0,d.jsx)("option",{value:"archived",children:"Archived"}),(0,d.jsx)("option",{value:"all",children:"All"})]}),(0,d.jsx)("button",{className:"pp-primary",onClick:()=>N(!0),children:"Compose"})]}),"analytics"===y&&(0,d.jsx)("section",{className:"pp-section pp-breakdown-grid",children:["inbox","sent","archived"].map(a=>{let b=A.filter(b=>String(b.folder||"inbox")===a).length,c=A.length?Math.round(b/A.length*100):0;return(0,d.jsxs)("article",{className:"pp-breakdown",children:[(0,d.jsx)("strong",{children:a}),(0,d.jsx)("div",{className:"pp-bar",children:(0,d.jsx)("div",{style:{width:`${c}%`}})}),(0,d.jsxs)("div",{className:"pp-chip-row",children:[(0,d.jsx)(ca,{tone:"blue",children:b}),(0,d.jsxs)(ca,{children:[c,"%"]})]})]},a)})}),"table"===y&&(0,d.jsx)("section",{className:"pp-panel",children:(0,d.jsx)("div",{className:"pp-table-wrap",children:(0,d.jsxs)("table",{className:"pp-table",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Updated"}),(0,d.jsx)("th",{children:"Subject"}),(0,d.jsx)("th",{children:"Folder"}),(0,d.jsx)("th",{children:"Status"}),(0,d.jsx)("th",{children:"Last Message"}),(0,d.jsx)("th",{children:"Action"})]})}),(0,d.jsxs)("tbody",{children:[Y.map(a=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:b4(a.lastMessageAt||a.updatedAt)}),(0,d.jsx)("td",{children:(0,d.jsx)("strong",{children:a.subject||"No subject"})}),(0,d.jsx)("td",{children:a.folder||"inbox"}),(0,d.jsx)("td",{children:(0,d.jsx)(ca,{children:a.status||"open"})}),(0,d.jsx)("td",{children:b3(a.lastMessage).slice(0,100)}),(0,d.jsx)("td",{children:(0,d.jsx)("button",{className:"pp-btn",onClick:()=>P(a),children:"Open"})})]},a.id)),!Y.length&&(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:6,children:(0,d.jsx)(cc,{text:"No message threads found."})})})]})]})})}),"cards"===y&&(0,d.jsx)("section",{className:"pp-section",children:(0,d.jsxs)("div",{className:"pp-list",children:[Y.map(a=>(0,d.jsxs)("article",{className:"pp-card",children:[(0,d.jsxs)("div",{className:"pp-card-top",children:[(0,d.jsx)("div",{className:"pp-avatar",children:"\uD83D\uDCAC"}),(0,d.jsxs)("div",{className:"pp-card-main",children:[(0,d.jsx)("h3",{children:a.subject||"No subject"}),(0,d.jsxs)("p",{children:[b4(a.lastMessageAt||a.updatedAt)," \xb7 ",a.folder||"inbox"]}),(0,d.jsxs)("div",{className:"pp-chip-row",children:[(0,d.jsx)(ca,{tone:"blue",children:a.status||"open"}),(0,d.jsx)(ca,{children:a.folder||"inbox"}),(0,d.jsx)("button",{className:"pp-btn",onClick:()=>P(a),children:"Open"})]})]})]}),(0,d.jsx)("p",{className:"pp-message",children:a.lastMessage||"No message preview."})]},a.id)),!Y.length&&(0,d.jsx)(cc,{text:"No message threads found."})]})}),O&&(0,d.jsxs)("div",{className:"pp-drawer-layer",children:[(0,d.jsx)("button",{className:"pp-drawer-overlay",onClick:()=>P(null)}),(0,d.jsxs)("aside",{className:"pp-drawer",children:[(0,d.jsxs)("div",{className:"pp-drawer-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Conversation"}),(0,d.jsx)("h2",{children:O.subject||"Message Thread"}),(0,d.jsxs)("span",{children:[Z.length," message(s)"]})]}),(0,d.jsx)("button",{onClick:()=>P(null),children:"✕"})]}),(0,d.jsxs)("section",{className:"pp-list",children:[Z.map(a=>(0,d.jsxs)("article",{className:"pp-card",children:[(0,d.jsxs)("div",{className:"pp-chip-row",children:[(0,d.jsx)(ca,{tone:"outbound"===a.direction?"green":"blue",children:a.direction||"message"}),(0,d.jsx)(ca,{children:b4(a.sentAt||a.createdAt)})]}),(0,d.jsx)("p",{className:"pp-message",children:a.body})]},a.id)),!Z.length&&(0,d.jsx)(cc,{text:"No messages in this thread."})]}),(0,d.jsxs)("section",{className:"pp-form-card",children:[(0,d.jsx)("textarea",{value:S,onChange:a=>T(a.target.value),placeholder:"Write a reply..."}),(0,d.jsxs)("div",{className:"pp-drawer-actions",children:[(0,d.jsx)("button",{className:"pp-btn",onClick:()=>P(null),children:"Close"}),(0,d.jsx)("button",{className:"pp-primary",onClick:aa,children:"Send Reply"})]})]})]})]}),M&&(0,d.jsxs)("div",{className:"pp-drawer-layer",children:[(0,d.jsx)("button",{className:"pp-drawer-overlay",onClick:()=>N(!1)}),(0,d.jsxs)("aside",{className:"pp-drawer",children:[(0,d.jsxs)("div",{className:"pp-drawer-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Compose"}),(0,d.jsx)("h2",{children:"New Message"}),(0,d.jsx)("span",{children:o?.name||"Assigned branch"})]}),(0,d.jsx)("button",{onClick:()=>N(!1),children:"✕"})]}),(0,d.jsx)("section",{className:"pp-form-card",children:(0,d.jsxs)("div",{className:"pp-form-grid",children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Recipient"}),(0,d.jsxs)("select",{value:U.recipientUserId,onChange:a=>V({...U,recipientUserId:a.target.value}),children:[(0,d.jsx)("option",{value:"",children:"Select recipient"}),X.map(a=>(0,d.jsxs)("option",{value:a.id,children:[a.name," \xb7 ",a.role]},`${a.role}-${a.id}`))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Subject"}),(0,d.jsx)("input",{value:U.subject,onChange:a=>V({...U,subject:a.target.value})})]}),(0,d.jsxs)("label",{className:"wide",children:[(0,d.jsx)("span",{children:"Message"}),(0,d.jsx)("textarea",{value:U.body,onChange:a=>V({...U,body:a.target.value})})]})]})}),(0,d.jsxs)("div",{className:"pp-drawer-actions",children:[(0,d.jsx)("button",{className:"pp-btn",onClick:()=>N(!1),children:"Cancel"}),(0,d.jsx)("button",{className:"pp-primary",disabled:Q,onClick:_,children:Q?"Sending...":"Send"})]})]})]})]})},calendar:function(){(0,l.useRouter)();let{accountId:a,authenticated:b,loading:c}=(0,h.F)(),{settings:e,loading:f}=(0,i.t)(),{activeSchool:g,activeSchoolId:m,activeBranch:n,activeBranchId:o,loading:p}=(0,j.c)(),q=m||g?.id||e?.schoolId,r=o||n?.id||e?.branchId,s=e?.primaryColor||"var(--primary-color, #2563eb)",[t,u]=(0,k.useState)(!0),[v,w]=(0,k.useState)(null),[x,y]=(0,k.useState)([]),[z,A]=(0,k.useState)([]),[B,C]=(0,k.useState)("cards"),[D,E]=(0,k.useState)(""),[F,G]=(0,k.useState)("all"),H=async()=>{if(!a||!q||!r)return void u(!1);try{u(!0);let b=await bQ(a,Number(q),Number(r));w(b.parent),y(b.children);let c=await (0,bF.ok)({accountId:a,schoolId:String(q),branchId:String(r)}),d=new Set(b.children.map(a=>Number(a.id)));A(c.filter(a=>!a.isDeleted&&"cancelled"!==a.status&&("branch"===a.visibility||"school"===a.visibility||"branch"===a.scopeType||"school"===a.scopeType||"fee_deadline"===a.eventType||"parent_teacher_meeting"===a.eventType||d.has(Number(a.studentLocalId))||d.has(Number(a.scopeId))||b.children.some(b=>Number(b.classId||b.currentClassId)===Number(a.classId)))))}finally{u(!1)}},I=(0,k.useMemo)(()=>{let a=D.toLowerCase().trim();return z.filter(b=>{if("all"!==F){let a=x.find(a=>String(a.id)===F);if(Number(b.studentLocalId)!==Number(a?.id)&&Number(b.classId)!==Number(a?.classId||a?.currentClassId)&&Number(b.scopeId)!==Number(a?.id))return!1}return!a||`${b.title} ${b.description} ${b.location} ${b.eventType}`.toLowerCase().includes(a)}).sort((a,b)=>bG(a.startAt)-bG(b.startAt))},[z,D,F,x]),J=(0,k.useMemo)(()=>{let a=new Date;a.setHours(0,0,0,0);let b=new Date;return b.setHours(23,59,59,999),{total:z.length,upcoming:z.filter(a=>bG(a.startAt)>=Date.now()).length,today:z.filter(c=>bG(c.startAt)>=a.getTime()&&bG(c.startAt)<=b.getTime()).length,meetings:z.filter(a=>"parent_teacher_meeting"===a.eventType||"meeting"===a.eventType).length,feeDeadlines:z.filter(a=>"fee_deadline"===a.eventType).length,children:x.length}},[z,x]);return t||c||f||p?(0,d.jsxs)("main",{className:"pp-page",style:{"--pp-primary":s},children:[(0,d.jsx)("style",{children:bP}),(0,d.jsxs)("section",{className:"pp-state",children:[(0,d.jsx)("h2",{children:"Opening calendar..."}),(0,d.jsx)("p",{children:"Loading child events, meetings and deadlines."})]})]}):(0,d.jsxs)("main",{className:"pp-page",style:{"--pp-primary":s},children:[(0,d.jsx)("style",{children:bP}),(0,d.jsxs)("section",{className:"pp-hero",children:[(0,d.jsxs)("div",{className:"pp-hero-left",children:[(0,d.jsx)("div",{className:"pp-icon",children:"\uD83D\uDCC5"}),(0,d.jsxs)("div",{className:"pp-title",children:[(0,d.jsx)("p",{children:"Parent Calendar"}),(0,d.jsx)("h2",{children:"Calendar"}),(0,d.jsxs)("span",{children:[bJ(v||{})," \xb7 ",n?.name||"Assigned branch"]})]})]}),(0,d.jsx)("div",{className:"pp-actions",children:(0,d.jsx)("button",{className:"pp-btn",onClick:H,children:"Refresh"})})]}),(0,d.jsxs)("section",{className:"pp-summary-grid",children:[(0,d.jsx)(bM,{label:"Events",value:J.total,icon:"\uD83D\uDCCC"}),(0,d.jsx)(bM,{label:"Upcoming",value:J.upcoming,icon:"⏭️",positive:!0}),(0,d.jsx)(bM,{label:"Today",value:J.today,icon:"\uD83D\uDCCD"}),(0,d.jsx)(bM,{label:"Meetings",value:J.meetings,icon:"\uD83E\uDD1D"}),(0,d.jsx)(bM,{label:"Fee Deadlines",value:J.feeDeadlines,icon:"\uD83D\uDCB3",warning:J.feeDeadlines>0}),(0,d.jsx)(bM,{label:"Children",value:J.children,icon:"\uD83E\uDDD2"})]}),(0,d.jsx)(bO,{view:B,setView:C,count:I.length}),(0,d.jsxs)("section",{className:"pp-filter",children:[(0,d.jsx)("input",{value:D,onChange:a=>E(a.target.value),placeholder:"Search events..."}),(0,d.jsxs)("select",{value:F,onChange:a=>G(a.target.value),children:[(0,d.jsx)("option",{value:"all",children:"All Children"}),x.map(a=>(0,d.jsx)("option",{value:a.id,children:bJ(a)},a.id))]}),(0,d.jsx)("button",{className:"pp-btn",onClick:H,children:"Reload"})]}),"analytics"===B&&(0,d.jsx)("section",{className:"pp-section pp-breakdown-grid",children:["meeting","parent_teacher_meeting","fee_deadline","exam","assessment","holiday"].map(a=>{let b=z.filter(b=>b.eventType===a).length,c=z.length?Math.round(b/z.length*100):0;return(0,d.jsxs)("article",{className:"pp-breakdown",children:[(0,d.jsx)("strong",{children:a.replaceAll("_"," ")}),(0,d.jsx)("div",{className:"pp-bar",children:(0,d.jsx)("div",{style:{width:`${c}%`}})}),(0,d.jsxs)("div",{className:"pp-chip-row",children:[(0,d.jsx)(bL,{tone:"blue",children:b}),(0,d.jsxs)(bL,{children:[c,"%"]})]})]},a)})}),"table"===B&&(0,d.jsx)("section",{className:"pp-panel",children:(0,d.jsx)("div",{className:"pp-table-wrap",children:(0,d.jsxs)("table",{className:"pp-table",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Event"}),(0,d.jsx)("th",{children:"Type"}),(0,d.jsx)("th",{children:"Starts"}),(0,d.jsx)("th",{children:"Ends"}),(0,d.jsx)("th",{children:"Location"}),(0,d.jsx)("th",{children:"Status"})]})}),(0,d.jsxs)("tbody",{children:[I.map(a=>(0,d.jsxs)("tr",{children:[(0,d.jsxs)("td",{children:[(0,d.jsx)("strong",{children:a.title}),(0,d.jsx)("br",{}),(0,d.jsx)("span",{children:a.description||"-"})]}),(0,d.jsx)("td",{children:a.eventType}),(0,d.jsx)("td",{children:bH(a.startAt)}),(0,d.jsx)("td",{children:bH(a.endAt)}),(0,d.jsx)("td",{children:a.location||"-"}),(0,d.jsx)("td",{children:(0,d.jsx)(bL,{tone:"green",children:a.status||"scheduled"})})]},a.id)),!I.length&&(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:6,children:(0,d.jsx)(bN,{text:"No calendar events found."})})})]})]})})}),"cards"===B&&(0,d.jsx)("section",{className:"pp-section",children:(0,d.jsxs)("div",{className:"pp-list",children:[I.map(a=>(0,d.jsxs)("article",{className:"pp-card",children:[(0,d.jsxs)("div",{className:"pp-card-top",children:[(0,d.jsx)("div",{className:"pp-avatar",children:"\uD83D\uDCC5"}),(0,d.jsxs)("div",{className:"pp-card-main",children:[(0,d.jsx)("h3",{children:a.title}),(0,d.jsxs)("p",{children:[bH(a.startAt)," \xb7 ",a.location||"No location"]}),(0,d.jsxs)("div",{className:"pp-chip-row",children:[(0,d.jsx)(bL,{tone:"blue",children:a.eventType}),(0,d.jsx)(bL,{tone:"urgent"===a.priority?"red":"high"===a.priority?"orange":"gray",children:a.priority||"normal"})]})]})]}),a.description&&(0,d.jsx)("p",{className:"pp-message",children:a.description})]},a.id)),!I.length&&(0,d.jsx)(bN,{text:"No calendar events found."})]})})]})},childTimetable:function(){(0,l.useRouter)();let{accountId:a,authenticated:b,loading:c}=(0,h.F)(),{settings:e,loading:f}=(0,i.t)(),{activeSchool:g,activeSchoolId:m,activeBranch:n,activeBranchId:o,loading:p}=(0,j.c)(),q=m||g?.id||e?.schoolId,r=o||n?.id||e?.branchId,s=e?.primaryColor||"var(--primary-color, #2563eb)",[t,u]=(0,k.useState)(!0),[v,w]=(0,k.useState)(null),[x,y]=(0,k.useState)([]),[z,A]=(0,k.useState)([]),[B,C]=(0,k.useState)([]),[D,E]=(0,k.useState)([]),[F,G]=(0,k.useState)([]),[H,I]=(0,k.useState)([]),[J,K]=(0,k.useState)("cards"),[L,M]=(0,k.useState)(""),[N,O]=(0,k.useState)("all"),P=async()=>{if(!a||!q||!r)return void u(!1);try{u(!0);let b=await b0(a,String(q),String(r));w(b.parent),y(b.children);let[c,d,e,f,g]=await Promise.all([(0,bR.th)({accountId:a,schoolId:String(q),branchId:String(r)}),bV("subjects"),bV("teachers"),(0,bR.py)({accountId:a,schoolId:String(q),branchId:String(r)}),(0,bR.vd)({accountId:a,schoolId:String(q),branchId:String(r)})]),h=new Set(b.children.map(a=>String(a.classId||a.currentClassId)).filter(Boolean));A(c.filter(a=>h.has(String(a.classId)))),C(d.filter(b=>!b.isDeleted&&(!b.accountId||b.accountId===a))),E(e.filter(b=>bT(b,a,String(q),String(r))||!b.branchId&&String(b.schoolId)===String(q))),G(f),I(g)}finally{u(!1)}},Q=(0,k.useMemo)(()=>{let a=z;if("all"!==N){let b=x.find(a=>String(a.id)===N);a=a.filter(a=>String(a.classId)===String(b?.classId||b?.currentClassId))}let b=L.toLowerCase().trim();return b&&(a=a.filter(a=>`${a.title} ${a.dayOfWeek} ${a.sessionType} ${a.roomName}`.toLowerCase().includes(b))),a.sort((a,b)=>String(a.dayOfWeek).localeCompare(String(b.dayOfWeek))||bS(a.startMinute)-bS(b.startMinute))},[z,N,x,L]),R=(0,k.useMemo)(()=>({sessions:Q.length,children:x.length,classes:new Set(Q.map(a=>a.classId).filter(Boolean)).size,subjects:new Set(Q.map(a=>a.subjectId).filter(Boolean)).size,teachers:new Set(Q.map(a=>a.teacherLocalId).filter(Boolean)).size,weeklyMinutes:Q.reduce((a,b)=>a+Math.max(0,bS(b.endMinute)-bS(b.startMinute)),0)}),[Q,x]);return t||c||f||p?(0,d.jsxs)("main",{className:"pp-page",style:{"--pp-primary":s},children:[(0,d.jsx)("style",{children:b_}),(0,d.jsxs)("section",{className:"pp-state",children:[(0,d.jsx)("h2",{children:"Opening child timetable..."}),(0,d.jsx)("p",{children:"Loading your child’s class timetable."})]})]}):(0,d.jsxs)("main",{className:"pp-page",style:{"--pp-primary":s},children:[(0,d.jsx)("style",{children:b_}),(0,d.jsxs)("section",{className:"pp-hero",children:[(0,d.jsxs)("div",{className:"pp-hero-left",children:[(0,d.jsx)("div",{className:"pp-icon",children:"\uD83D\uDCDA"}),(0,d.jsxs)("div",{className:"pp-title",children:[(0,d.jsx)("p",{children:"Parent Timetable"}),(0,d.jsx)("h2",{children:"Child Timetable"}),(0,d.jsxs)("span",{children:[bU(v||{})," \xb7 ",x.length," linked child(ren)"]})]})]}),(0,d.jsx)("div",{className:"pp-actions",children:(0,d.jsx)("button",{className:"pp-btn",onClick:P,children:"Refresh"})})]}),(0,d.jsxs)("section",{className:"pp-summary-grid",children:[(0,d.jsx)(bX,{label:"Sessions",value:R.sessions,icon:"\uD83D\uDCDA",positive:!0}),(0,d.jsx)(bX,{label:"Children",value:R.children,icon:"\uD83E\uDDD2"}),(0,d.jsx)(bX,{label:"Classes",value:R.classes,icon:"\uD83C\uDFEB"}),(0,d.jsx)(bX,{label:"Subjects",value:R.subjects,icon:"\uD83D\uDCD6"}),(0,d.jsx)(bX,{label:"Teachers",value:R.teachers,icon:"\uD83D\uDC68‍\uD83C\uDFEB"}),(0,d.jsx)(bX,{label:"Weekly Hours",value:`${Math.round(R.weeklyMinutes/60)}h`,icon:"⏱️"})]}),(0,d.jsx)(b$,{view:J,setView:K,count:Q.length}),(0,d.jsxs)("section",{className:"pp-filter",children:[(0,d.jsx)("input",{value:L,onChange:a=>M(a.target.value),placeholder:"Search timetable..."}),(0,d.jsxs)("select",{value:N,onChange:a=>O(a.target.value),children:[(0,d.jsx)("option",{value:"all",children:"All Children"}),x.map(a=>(0,d.jsx)("option",{value:a.id,children:bU(a)},a.id))]}),(0,d.jsx)("button",{className:"pp-btn",onClick:P,children:"Reload"})]}),"analytics"===J&&(0,d.jsx)("section",{className:"pp-section pp-breakdown-grid",children:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].map(a=>{let b=Q.filter(b=>b.dayOfWeek===a).length,c=Q.length?Math.round(b/Q.length*100):0;return(0,d.jsxs)("article",{className:"pp-breakdown",children:[(0,d.jsx)("strong",{children:a}),(0,d.jsx)("div",{className:"pp-bar",children:(0,d.jsx)("div",{style:{width:`${c}%`}})}),(0,d.jsxs)("div",{className:"pp-chip-row",children:[(0,d.jsx)(bW,{tone:"blue",children:b}),(0,d.jsxs)(bW,{children:[c,"%"]})]})]},a)})}),"table"===J&&(0,d.jsx)("section",{className:"pp-panel",children:(0,d.jsx)("div",{className:"pp-table-wrap",children:(0,d.jsxs)("table",{className:"pp-table",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Day"}),(0,d.jsx)("th",{children:"Time"}),(0,d.jsx)("th",{children:"Session"}),(0,d.jsx)("th",{children:"Subject"}),(0,d.jsx)("th",{children:"Teacher"}),(0,d.jsx)("th",{children:"Room"}),(0,d.jsx)("th",{children:"Timetable"})]})}),(0,d.jsxs)("tbody",{children:[Q.map(a=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:a.dayOfWeek}),(0,d.jsx)("td",{children:(0,bR.Zz)(bS(a.startMinute),bS(a.endMinute))}),(0,d.jsxs)("td",{children:[(0,d.jsx)("strong",{children:a.title||a.sessionType}),(0,d.jsx)("br",{}),(0,d.jsx)("span",{children:a.sessionType})]}),(0,d.jsx)("td",{children:B.find(b=>Number(b.id)===Number(a.subjectId))?.name||"-"}),(0,d.jsx)("td",{children:bU(D.find(b=>Number(b.id)===Number(a.teacherLocalId))||{})||"-"}),(0,d.jsx)("td",{children:F.find(b=>Number(b.id)===Number(a.resourceId))?.name||a.roomName||"-"}),(0,d.jsx)("td",{children:H.find(b=>Number(b.id)===Number(a.timetableId))?.name||"-"})]},a.id)),!Q.length&&(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:7,children:(0,d.jsx)(bZ,{text:"No timetable sessions found."})})})]})]})})}),"cards"===J&&(0,d.jsx)("section",{className:"pp-section",children:(0,d.jsxs)("div",{className:"pp-list",children:[Q.map(a=>(0,d.jsxs)("article",{className:"pp-card",children:[(0,d.jsxs)("div",{className:"pp-card-top",children:[(0,d.jsx)("div",{className:"pp-avatar",children:"\uD83D\uDCDA"}),(0,d.jsxs)("div",{className:"pp-card-main",children:[(0,d.jsx)("h3",{children:a.title||a.sessionType}),(0,d.jsxs)("p",{children:[a.dayOfWeek," \xb7 ",(0,bR.Zz)(bS(a.startMinute),bS(a.endMinute))]}),(0,d.jsxs)("div",{className:"pp-chip-row",children:[(0,d.jsx)(bW,{tone:"blue",children:a.sessionType}),(0,d.jsx)(bW,{tone:"purple",children:B.find(b=>Number(b.id)===Number(a.subjectId))?.name||"No subject"})]})]})]}),(0,d.jsxs)("div",{className:"pp-mini-grid",children:[(0,d.jsx)(bY,{label:"Teacher",value:bU(D.find(b=>Number(b.id)===Number(a.teacherLocalId))||{})||"-"}),(0,d.jsx)(bY,{label:"Room",value:F.find(b=>Number(b.id)===Number(a.resourceId))?.name||a.roomName||"-"}),(0,d.jsx)(bY,{label:"Duration",value:`${bS(a.endMinute)-bS(a.startMinute)} min`})]})]},a.id)),!Q.length&&(0,d.jsx)(bZ,{text:"No timetable sessions found for your linked child or children."})]})})]})},localSettings:function(){var a,b;let c,e,{accountId:f}=(0,h.F)(),{settings:k}=(0,i.t)(),{activeSchoolId:l,activeBranchId:m,activeSchool:n,activeBranch:o}=(0,j.c)();return(0,d.jsx)(g.Ay,{portalName:"Parent Portal",roleKey:"parent",accountId:f,schoolId:(a={activeSchoolId:l,activeSchool:n,settings:k},c=null,cu(void 0,c?.schoolId,c?.school?.id,a.activeSchoolId,a.activeSchool?.id,a.settings?.schoolId,null)),branchId:(b={activeBranchId:m,activeBranch:o,settings:k},e=null,cu(void 0,e?.branchId,e?.schoolBranchId,e?.branch?.id,b.activeBranchId,b.activeBranch?.id,b.settings?.branchId,null)),primaryColor:k?.primaryColor||"var(--primary-color, #2563eb)",inline:!0})},parentProfile:function(){var a;(0,l.useRouter)(),(0,E.f)(["parents","mediaAssets","mediaBlobs"]);let{loading:b,setLoading:c}=(0,V.J)(),{accountId:e,authenticated:f,loading:g}=(0,h.F)(),{settings:o,loading:p}=(0,i.t)(),{activeSchool:q,activeSchoolId:r,activeBranch:s,activeBranchId:t,loading:u}=(0,j.c)(),v=(0,m.A)(),w=v?.activeMembership,x=(0,k.useMemo)(()=>null,[]),y=(0,k.useMemo)(()=>null,[]),z=x?.membership||w||y||{},A=ck(x?.schoolId,z.schoolId,z.school?.id,r,q?.id,o?.schoolId,null),B=ck(x?.branchId,z.branchId,z.schoolBranchId,z.branch?.id,t,s?.id,o?.branchId,null),C=ck(x?.parentLocalId,x?.parentId,z.parentLocalId,z.localParentId,z.parentId,z.parent?.id,v?.activeParentId,null),D=o?.primaryColor||"var(--primary-color, #2563eb)",F=cm(D),[G,H]=(0,k.useState)(null),[I,J]=(0,k.useState)(ch),[K,L]=(0,k.useState)(!1),[M,N]=(0,k.useState)(!1),[O,P]=(0,k.useState)(),[Q,R]=(0,k.useState)(),[S,T]=(0,k.useState)(null),U=(0,k.useRef)((0,ac.It)(cg)),W=(0,k.useRef)({}),X=(0,k.useRef)(null),Y=(0,k.useRef)(null),[Z,$]=(0,k.useState)(!1),[_,aa]=(0,k.useState)("photo"),[ab,ad]=(0,k.useState)("user"),[ae,af]=(0,k.useState)(!1),[ag,ah]=(0,k.useState)(!1),ai=(a,b)=>{T({tone:a,message:b})},aj=a=>J(b=>({...b,...a})),ak=async a=>{if(!a||!e){P(void 0),R(void 0);return}let b=ci(a.id);if(!b)return;let[c,d]=await Promise.all([(0,ac.Rh)({accountId:e,ownerTable:cg,ownerId:b,fieldKey:ac.Vq.PHOTO,fallbackAssetId:a.photoMediaId}),(0,ac.Rh)({accountId:e,ownerTable:cg,ownerId:b,fieldKey:ac.Vq.COVER_PHOTO,fallbackAssetId:a.coverPhotoMediaId})]);P(c||cl(a.photo)),R(d||cl(a.coverPhoto))},al=async()=>{if(!f||!e||!A||!B){H(null),c(!1);return}try{c(!0);let a=(await n.db.parents.toArray()).filter(a=>(!a.accountId||a.accountId===e)&&(!a.schoolId||cj(a.schoolId,A))&&(!a.branchId||cj(a.branchId,B))&&!a.isDeleted),b=String(z.email||z.parentEmail||"").trim().toLowerCase(),d=a.find(a=>!!C&&cj(a.id,C))||a.find(a=>b&&String(a.email||"").trim().toLowerCase()===b)||null;H(d),await ak(d)}catch(a){console.error("Failed to load parent profile:",a),H(null),ai("error","Failed to load your parent profile.")}finally{c(!1)}},am=a=>{(0,ac.fP)()?(aa(a),ad("photo"===a?"user":"environment"),$(!0)):ai("error",(0,ac.f5)())},an=()=>{(0,ac.IK)(Y.current),Y.current=null,X.current&&(X.current.srcObject=null),$(!1),af(!1),ah(!1)},ao=async(a,b)=>{if(b&&e&&A&&B)try{let c=await (0,ac.fA)(b,{accountId:e,schoolId:A,branchId:B,ownerTable:cg,ownerId:void 0,ownerTempKey:U.current,fieldKey:"photo"===a?ac.Vq.PHOTO:ac.Vq.COVER_PHOTO,variant:"photo"===a?"avatar":"cover",replaceExisting:!0}),d=ci(c.assetId);if(!d)throw Error("No media asset ID was created.");W.current={...W.current,[a]:d},aj({[a]:c.previewUrl,[`${a}MediaId`]:d}),ai("success","photo"===a?"Profile photo optimized.":"Cover photo optimized.")}catch(a){console.error("Failed to process parent image:",a),ai("error",a?.message||"Failed to process image.")}},ap=async()=>{if(!X.current)return void ai("error","Camera preview is not ready.");try{ah(!0);let a=await (0,ac.ln)(X.current,{fileName:`${_}-${Date.now()}.jpg`,mimeType:"image/jpeg",quality:.88,maxWidth:"photo"===_?900:1440,maxHeight:900});await ao(_,a),an()}catch(a){console.error("Failed to capture parent image:",a),ai("error",a?.message||"Failed to capture photo.")}finally{ah(!1)}},aq=async a=>{a?.preventDefault();let b=I.fullName.trim()?I.phone.trim()||I.email.trim()?I.latitude.trim()&&!Number.isFinite(Number(I.latitude))?"Latitude must be a valid number.":I.longitude.trim()&&!Number.isFinite(Number(I.longitude))?"Longitude must be a valid number.":"":"Enter at least a phone number or email address.":"Enter your full name.";if(b)return void ai("error",b);if(!f||!e||!A||!B)return void ai("error","Your parent workspace is not ready.");try{var c,d;N(!0);let a={accountId:e,schoolId:A,branchId:B,fullName:I.fullName.trim(),title:I.title.trim(),phone:I.phone.trim(),email:I.email.trim()||void 0,occupation:I.occupation.trim()||void 0,emergencyContact:I.emergencyContact.trim()||void 0,relationship:I.relationship,address:I.address.trim()||void 0,addressLine1:I.addressLine1.trim()||void 0,addressLine2:I.addressLine2.trim()||void 0,locality:I.locality.trim()||void 0,city:I.city.trim()||void 0,district:I.district.trim()||void 0,region:I.region.trim()||void 0,postalCode:I.postalCode.trim()||void 0,country:I.country.trim()||void 0,locationLabel:I.locationLabel.trim()||void 0,formattedAddress:I.formattedAddress.trim()||void 0,latitude:""===I.latitude.trim()?void 0:Number(I.latitude),longitude:""===I.longitude.trim()?void 0:Number(I.longitude),accuracyMeters:""===I.accuracyMeters.trim()?void 0:Number(I.accuracyMeters),locationType:I.locationType,locationSource:I.locationSource,locationPrecision:I.locationPrecision,locationCapturedAt:I.latitude.trim()&&I.longitude.trim()?I.locationCapturedAt||Date.now():void 0,mapVisible:I.mapVisible,locationConsentGiven:I.locationConsentGiven,locationConsentAt:I.locationConsentGiven?I.locationConsentAt||Date.now():void 0,locationRestricted:I.locationRestricted,photo:cl(G?.photo),photoMediaId:I.photoMediaId||G?.photoMediaId||void 0,coverPhoto:cl(G?.coverPhoto),coverPhotoMediaId:I.coverPhotoMediaId||G?.coverPhotoMediaId||void 0,active:G?.active??!0,isDeleted:!1},b=(c=G?.id?await (0,be.Po)("parents",ci(G.id),a):await (0,be.oJ)("parents",a),d=G?.id||C,"string"==typeof c||"number"==typeof c?ci(c):c&&"object"==typeof c?ck(c.id,c.localId,c.parentId,d):ci(d));if(!b)throw Error("Profile saved, but its permanent parent ID was not resolved.");let f=await (0,ac.$e)({accountId:e,ownerTable:cg,ownerId:b,ownerTempKey:U.current,assets:[{assetId:ci(W.current.photo)||void 0,fieldKey:ac.Vq.PHOTO},{assetId:ci(W.current.coverPhoto)||void 0,fieldKey:ac.Vq.COVER_PHOTO}]}),g=f.find(a=>a.fieldKey===ac.Vq.PHOTO)?.assetId,h=f.find(a=>a.fieldKey===ac.Vq.COVER_PHOTO)?.assetId;(g||h)&&await (0,be.Po)("parents",b,{photoMediaId:g||I.photoMediaId||G?.photoMediaId||void 0,coverPhotoMediaId:h||I.coverPhotoMediaId||G?.coverPhotoMediaId||void 0,photo:cl(G?.photo),coverPhoto:cl(G?.coverPhoto)}),U.current=(0,ac.It)(cg),W.current={},L(!1),ai("success","Your profile was updated."),await al()}catch(a){console.error("Failed to save parent profile:",a),ai("error",a?.message||"Failed to update your profile.")}finally{N(!1)}},ar=()=>{G?J({id:ci(G.id),fullName:String(G.fullName||""),title:String(G.title||""),phone:String(G.phone||""),email:String(G.email||""),occupation:String(G.occupation||""),emergencyContact:String(G.emergencyContact||""),relationship:G.relationship||"guardian",address:String(G.address||""),addressLine1:String(G.addressLine1||""),addressLine2:String(G.addressLine2||""),locality:String(G.locality||""),city:String(G.city||""),district:String(G.district||""),region:String(G.region||""),postalCode:String(G.postalCode||""),country:String(G.country||"Ghana"),locationLabel:String(G.locationLabel||""),formattedAddress:String(G.formattedAddress||""),latitude:void 0===G.latitude||null===G.latitude?"":String(G.latitude),longitude:void 0===G.longitude||null===G.longitude?"":String(G.longitude),accuracyMeters:void 0===G.accuracyMeters||null===G.accuracyMeters?"":String(G.accuracyMeters),locationType:G.locationType||"home",locationSource:G.locationSource||"manual",locationPrecision:G.locationPrecision||"approximate",locationCapturedAt:G.locationCapturedAt,mapVisible:!!G.mapVisible,locationConsentGiven:!!G.locationConsentGiven,locationConsentAt:G.locationConsentAt,locationRestricted:void 0===G.locationRestricted||!!G.locationRestricted,photo:O||String(G.photo||""),photoMediaId:G.photoMediaId,coverPhoto:Q||String(G.coverPhoto||""),coverPhotoMediaId:G.coverPhotoMediaId}):J({...ch,fullName:String(z.fullName||x?.memberName||x?.fullName||x?.userName||"").trim(),email:String(z.email||z.parentEmail||"").trim(),phone:String(z.phone||z.parentPhone||"").trim()}),W.current={},U.current=(0,ac.It)(cg),L(!1)};if(g||u||p||b)return(0,d.jsx)(cs,{primary:D,title:"Opening Parent Profile...",text:"Loading your parent record and media."});if(!f||!e)return(0,d.jsx)(cs,{primary:D,title:"Redirecting to login...",text:"You must sign in before viewing your profile."});if(!A||!B)return(0,d.jsx)(cs,{primary:D,title:"No parent workspace selected",text:"Open your parent membership again and return to Profile."});let as=G?.fullName||I.fullName||x?.memberName||x?.fullName||"Parent",at=K&&I.photo?I.photo:O,au=K&&I.coverPhoto?I.coverPhoto:Q;return(0,d.jsxs)("main",{className:"pp-page",style:{"--pp-primary":D,"--pp-primary-text":F},children:[(0,d.jsx)("style",{children:ct}),S?(0,d.jsxs)("section",{className:`pp-toast ${S.tone}`,children:[(0,d.jsx)("span",{children:S.message}),(0,d.jsx)("button",{type:"button",onClick:()=>T(null),"aria-label":"Close notification",children:"\xd7"})]}):null,(0,d.jsxs)("section",{className:"pp-toolbar",children:[(0,d.jsx)("span",{className:`pp-status-dot ${G?"green":"orange"}`,title:G?"Profile connected":"Profile not yet created"}),(0,d.jsxs)("div",{className:"pp-toolbar-copy",children:[(0,d.jsx)("strong",{children:"Parent Profile"}),(0,d.jsx)("small",{children:G?"Your personal information":"Complete your parent profile"})]}),K?(0,d.jsx)("button",{type:"button",className:"pp-icon-button",onClick:ar,"aria-label":"Cancel editing",children:"\xd7"}):(0,d.jsx)("button",{type:"button",className:"pp-primary-button",onClick:()=>L(!0),children:"Edit"})]}),(0,d.jsxs)("section",{className:"pp-profile-card",children:[(0,d.jsx)("div",{className:"pp-cover",style:{background:au?`url("${au}") center/cover`:`linear-gradient(135deg, ${D}, color-mix(in srgb, ${D} 42%, #111827))`},children:K?(0,d.jsxs)("div",{className:"pp-cover-actions",children:[(0,d.jsxs)("label",{children:["Upload cover",(0,d.jsx)("input",{type:"file",accept:"image/*",onChange:a=>void ao("coverPhoto",a.target.files?.[0])})]}),(0,d.jsx)("button",{type:"button",onClick:()=>am("coverPhoto"),children:"Take photo"})]}):null}),(0,d.jsxs)("div",{className:"pp-profile-main",children:[(0,d.jsxs)("div",{className:"pp-photo-wrap",children:[(0,d.jsx)(cn,{name:as,photo:at,primary:D}),K?(0,d.jsxs)("div",{className:"pp-photo-actions",children:[(0,d.jsxs)("label",{title:"Upload profile photo",children:["+",(0,d.jsx)("input",{type:"file",accept:"image/*",onChange:a=>void ao("photo",a.target.files?.[0])})]}),(0,d.jsx)("button",{type:"button",onClick:()=>am("photo"),title:"Take profile photo",children:"◉"})]}):null]}),(0,d.jsxs)("div",{className:"pp-profile-copy",children:[(0,d.jsx)("h1",{children:as}),(0,d.jsxs)("p",{children:[G?.email||I.email||"No email",G?.phone||I.phone?` \xb7 ${G?.phone||I.phone}`:""]}),(0,d.jsxs)("div",{className:"pp-chips",children:[(0,d.jsx)(co,{tone:"blue",children:(a=G?.relationship||I.relationship)?a.charAt(0).toUpperCase()+a.slice(1):"Guardian"}),(0,d.jsx)(co,{tone:G?"green":"orange",children:G?"Connected profile":"Profile setup"})]})]})]})]}),K?(0,d.jsxs)("form",{className:"pp-form",onSubmit:aq,children:[(0,d.jsxs)("section",{className:"pp-form-section",children:[(0,d.jsx)("div",{className:"pp-section-head",children:(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Personal Information"}),(0,d.jsx)("small",{children:"Information used by the school to contact you."})]})}),(0,d.jsxs)("div",{className:"pp-form-grid",children:[(0,d.jsx)(cq,{label:"Full Name",required:!0,children:(0,d.jsx)("input",{value:I.fullName,onChange:a=>aj({fullName:a.target.value}),placeholder:"Your full name"})}),(0,d.jsx)(cq,{label:"Title",children:(0,d.jsxs)("select",{value:I.title,onChange:a=>aj({title:a.target.value}),children:[(0,d.jsx)("option",{value:"",children:"No title"}),(0,d.jsx)("option",{value:"Mr",children:"Mr"}),(0,d.jsx)("option",{value:"Mrs",children:"Mrs"}),(0,d.jsx)("option",{value:"Ms",children:"Ms"}),(0,d.jsx)("option",{value:"Dr",children:"Dr"}),(0,d.jsx)("option",{value:"Prof",children:"Prof"}),(0,d.jsx)("option",{value:"Rev",children:"Rev"})]})}),(0,d.jsx)(cq,{label:"Phone",children:(0,d.jsx)("input",{value:I.phone,onChange:a=>aj({phone:a.target.value}),placeholder:"+233...",inputMode:"tel"})}),(0,d.jsx)(cq,{label:"Email",children:(0,d.jsx)("input",{type:"email",value:I.email,onChange:a=>aj({email:a.target.value}),placeholder:"name@example.com"})}),(0,d.jsx)(cq,{label:"Occupation",children:(0,d.jsx)("input",{value:I.occupation,onChange:a=>aj({occupation:a.target.value}),placeholder:"Occupation"})}),(0,d.jsx)(cq,{label:"Emergency Contact",children:(0,d.jsx)("input",{value:I.emergencyContact,onChange:a=>aj({emergencyContact:a.target.value}),placeholder:"Emergency phone or contact"})}),(0,d.jsx)(cq,{label:"Relationship",children:(0,d.jsxs)("select",{value:I.relationship,onChange:a=>aj({relationship:a.target.value}),children:[(0,d.jsx)("option",{value:"father",children:"Father"}),(0,d.jsx)("option",{value:"mother",children:"Mother"}),(0,d.jsx)("option",{value:"guardian",children:"Guardian"})]})})]})]}),(0,d.jsxs)("section",{className:"pp-form-section",children:[(0,d.jsx)("div",{className:"pp-section-head",children:(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Address"}),(0,d.jsx)("small",{children:"Your residential or contact address."})]})}),(0,d.jsxs)("div",{className:"pp-form-grid",children:[(0,d.jsx)(cq,{label:"Address",wide:!0,children:(0,d.jsx)("input",{value:I.address,onChange:a=>aj({address:a.target.value}),placeholder:"Main address"})}),(0,d.jsx)(cq,{label:"Address Line 1",children:(0,d.jsx)("input",{value:I.addressLine1,onChange:a=>aj({addressLine1:a.target.value})})}),(0,d.jsx)(cq,{label:"Address Line 2",children:(0,d.jsx)("input",{value:I.addressLine2,onChange:a=>aj({addressLine2:a.target.value})})}),(0,d.jsx)(cq,{label:"Locality",children:(0,d.jsx)("input",{value:I.locality,onChange:a=>aj({locality:a.target.value})})}),(0,d.jsx)(cq,{label:"City",children:(0,d.jsx)("input",{value:I.city,onChange:a=>aj({city:a.target.value})})}),(0,d.jsx)(cq,{label:"District",children:(0,d.jsx)("input",{value:I.district,onChange:a=>aj({district:a.target.value})})}),(0,d.jsx)(cq,{label:"Region",children:(0,d.jsx)("input",{value:I.region,onChange:a=>aj({region:a.target.value})})}),(0,d.jsx)(cq,{label:"Postal Code",children:(0,d.jsx)("input",{value:I.postalCode,onChange:a=>aj({postalCode:a.target.value})})}),(0,d.jsx)(cq,{label:"Country",children:(0,d.jsx)("input",{value:I.country,onChange:a=>aj({country:a.target.value})})})]})]}),(0,d.jsxs)("section",{className:"pp-form-section",children:[(0,d.jsxs)("div",{className:"pp-section-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"Location & Privacy"}),(0,d.jsx)("small",{children:"Optional location information for authorized school use."})]}),(0,d.jsx)("button",{type:"button",className:"pp-secondary-button",onClick:()=>{"u"<typeof navigator||!navigator.geolocation?ai("error","Location is unavailable on this device."):navigator.geolocation.getCurrentPosition(a=>{aj({latitude:String(a.coords.latitude),longitude:String(a.coords.longitude),accuracyMeters:String(Math.round(a.coords.accuracy)),locationSource:"device_gps",locationCapturedAt:Date.now(),locationConsentGiven:!0,locationConsentAt:Date.now()}),ai("success","Current location added.")},a=>{ai("error",a.message||"Unable to get your location.")},{enableHighAccuracy:!0,timeout:12e3,maximumAge:3e4})},children:"Use current location"})]}),(0,d.jsxs)("div",{className:"pp-form-grid",children:[(0,d.jsx)(cq,{label:"Location Label",children:(0,d.jsx)("input",{value:I.locationLabel,onChange:a=>aj({locationLabel:a.target.value}),placeholder:"Home, workplace, pickup point"})}),(0,d.jsx)(cq,{label:"Formatted Address",children:(0,d.jsx)("input",{value:I.formattedAddress,onChange:a=>aj({formattedAddress:a.target.value})})}),(0,d.jsx)(cq,{label:"Latitude",children:(0,d.jsx)("input",{value:I.latitude,onChange:a=>aj({latitude:a.target.value}),inputMode:"decimal"})}),(0,d.jsx)(cq,{label:"Longitude",children:(0,d.jsx)("input",{value:I.longitude,onChange:a=>aj({longitude:a.target.value}),inputMode:"decimal"})}),(0,d.jsx)(cq,{label:"Location Type",children:(0,d.jsxs)("select",{value:I.locationType,onChange:a=>aj({locationType:a.target.value}),children:[(0,d.jsx)("option",{value:"home",children:"Home"}),(0,d.jsx)("option",{value:"workplace",children:"Workplace"}),(0,d.jsx)("option",{value:"pickup_point",children:"Pickup Point"}),(0,d.jsx)("option",{value:"dropoff_point",children:"Drop-off Point"}),(0,d.jsx)("option",{value:"other",children:"Other"})]})}),(0,d.jsx)(cq,{label:"Precision",children:(0,d.jsxs)("select",{value:I.locationPrecision,onChange:a=>aj({locationPrecision:a.target.value}),children:[(0,d.jsx)("option",{value:"exact",children:"Exact"}),(0,d.jsx)("option",{value:"approximate",children:"Approximate"}),(0,d.jsx)("option",{value:"area_only",children:"Area Only"})]})})]}),(0,d.jsxs)("div",{className:"pp-toggle-list",children:[(0,d.jsx)(cr,{label:"I consent to storing this location",text:"The location will only be available to authorized school users.",checked:I.locationConsentGiven,onChange:a=>aj({locationConsentGiven:a,locationConsentAt:a?I.locationConsentAt||Date.now():void 0})}),(0,d.jsx)(cr,{label:"Allow location on authorized school maps",text:"Turn this off to keep the location hidden from map views.",checked:I.mapVisible,onChange:a=>aj({mapVisible:a})}),(0,d.jsx)(cr,{label:"Restrict location access",text:"Recommended for personal residential addresses.",checked:I.locationRestricted,onChange:a=>aj({locationRestricted:a})})]})]}),(0,d.jsxs)("section",{className:"pp-protected-note",children:[(0,d.jsx)("span",{children:"\uD83D\uDD12"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"School-controlled information is protected"}),(0,d.jsx)("p",{children:"Your role, school, branch, account membership and linked children cannot be changed from this page."})]})]}),(0,d.jsxs)("div",{className:"pp-form-actions",children:[(0,d.jsx)("button",{type:"button",className:"pp-secondary-button",onClick:ar,disabled:M,children:"Cancel"}),(0,d.jsx)("button",{type:"submit",className:"pp-primary-button",disabled:M,children:M?"Saving...":"Save Profile"})]})]}):(0,d.jsxs)("section",{className:"pp-details-grid",children:[(0,d.jsx)(cp,{label:"Full Name",value:G?.fullName||"Not set"}),(0,d.jsx)(cp,{label:"Title",value:G?.title||"Not set"}),(0,d.jsx)(cp,{label:"Phone",value:G?.phone||"Not set"}),(0,d.jsx)(cp,{label:"Email",value:G?.email||"Not set"}),(0,d.jsx)(cp,{label:"Occupation",value:G?.occupation||"Not set"}),(0,d.jsx)(cp,{label:"Emergency Contact",value:G?.emergencyContact||"Not set"}),(0,d.jsx)(cp,{label:"Address",value:G?.formattedAddress||G?.address||"Not set",wide:!0}),(0,d.jsx)(cp,{label:"Location Privacy",value:G?.locationRestricted?"Restricted":G?.mapVisible?"Visible to authorized school staff":"Hidden"})]}),Z?(0,d.jsx)("div",{className:"pp-camera-layer",children:(0,d.jsxs)("section",{className:"pp-camera",children:[(0,d.jsxs)("div",{className:"pp-camera-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:"photo"===_?"Take Profile Photo":"Take Cover Photo"}),(0,d.jsx)("small",{children:"Use a clear, well-lit image."})]}),(0,d.jsx)("button",{type:"button",onClick:an,children:"\xd7"})]}),(0,d.jsxs)("div",{className:"pp-camera-preview",children:[(0,d.jsx)("video",{ref:X,autoPlay:!0,muted:!0,playsInline:!0}),ae?(0,d.jsx)("div",{className:"pp-camera-loading",children:"Starting camera..."}):null]}),(0,d.jsxs)("div",{className:"pp-camera-actions",children:[(0,d.jsx)("button",{type:"button",className:"pp-secondary-button",onClick:()=>ad(a=>"user"===a?"environment":"user"),disabled:ae||ag,children:"Flip Camera"}),(0,d.jsx)("button",{type:"button",className:"pp-primary-button",onClick:()=>void ap(),disabled:ae||ag,children:ag?"Capturing...":"Capture"})]})]})}):null]})}};function cx(){return(0,d.jsx)(e.A,{portalTitle:"Parent Portal",portalSubtitle:"Child monitoring and payments workspace",homeKey:"parentDashboard",allowedRoles:f.RV,navSections:cv,routes:cw,lockedContext:!0,requireSchool:!0,requireBranch:!0})}}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[3445,63,7488,7533,1537,8505,3080,728,8594,6606,2300,592,7359],()=>b(b.s=6393));module.exports=c})();
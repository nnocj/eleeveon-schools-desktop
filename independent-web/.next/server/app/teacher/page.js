(()=>{var a={};a.id=411,a.ids=[411],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},1932:a=>{"use strict";a.exports=require("url")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},4637:(a,b,c)=>{"use strict";c.r(b),c.d(b,{__next_app__:()=>M,handler:()=>O,routeModule:()=>N});var d=c(7553),e=c(84006),f=c(67798),g=c(34775),h=c(99373),i=c(73461),j=c(1020),k=c(26349),l=c(54365),m=c(16023),n=c(63747),o=c(24235),p=c(23938),q=c(261),r=c(66758),s=c(77243),t=c(26713),u=c(37527),v=c(22820),w=c(88216),x=c(47929),y=c(79551),z=c(71797),A=c(89125),B=c(86439),C=c(77068),D=c(27269),E=c(61287),F=c(81494),G=c(70722),H=c(70753),I=c(43954),J=c(17891),K={};for(let a in E)0>["default","__next_app__","routeModule","handler"].indexOf(a)&&(K[a]=()=>E[a]);c.d(b,K);let L={children:["",{children:["teacher",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,35370)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\teacher\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,60533)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\teacher\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}},[]]},{layout:[()=>Promise.resolve().then(c.bind(c,32056)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,55091,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,45270,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,28193,23)),"next/dist/client/components/builtin/unauthorized.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}},[]]}.children,M={require:c,loadChunk:()=>Promise.resolve()},N=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/teacher/page",pathname:"/teacher",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:L},distDir:".next",relativeProjectDir:""});async function O(a,b,d){var K,P,Q,R,S;d.requestMeta&&(0,h.setRequestMeta)(a,d.requestMeta),N.isDev&&(0,h.addRequestMeta)(a,"devRequestTimingInternalsEnd",process.hrtime.bigint());let T=!!(0,h.getRequestMeta)(a,"minimalMode"),U="/teacher/page";"/index"===U&&(U="/");let V=await N.prepare(a,b,{srcPage:U,multiZoneDraftMode:!1});if(!V)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:W,query:X,params:Y,pageIsDynamic:Z,buildManifest:$,nextFontManifest:_,reactLoadableManifest:aa,serverActionsManifest:ab,clientReferenceManifest:ac,subresourceIntegrityManifest:ad,prerenderManifest:ae,isDraftMode:af,resolvedPathname:ag,revalidateOnlyGenerated:ah,routerServerContext:ai,nextConfig:aj,parsedUrl:ak,interceptionRoutePatterns:al,deploymentId:am,clientAssetToken:an}=V,ao=(0,q.normalizeAppPath)(U),{isOnDemandRevalidate:ap}=V,aq=aj.experimental.ppr&&!aj.cacheComponents&&(0,I.isInterceptionRouteAppPath)(ag)?null:N.match(ag,ae),ar=(null==aq?void 0:aq.route)??null,as=!!ae.routes[ag],at=a.headers["user-agent"]||"",au=(0,t.getBotType)(at),av=(0,p.isHtmlBotRequest)(a),aw=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[s.NEXT_ROUTER_PREFETCH_HEADER],ax=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[s.RSC_HEADER],ay=(0,r.getIsPossibleServerAction)(a),az=(0,m.checkIsAppPPREnabled)(aj.experimental.ppr),aA=a.headers[x.NEXT_RESUME_STATE_LENGTH_HEADER];if(!(0,h.getRequestMeta)(a,"postponed")&&T&&az&&ay&&aA&&"string"==typeof aA){let e=parseInt(aA,10),{maxPostponedStateSize:f,maxPostponedStateSizeBytes:g}=(0,D.getMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize);if(!isNaN(e)&&e>0){if(e>g)return b.statusCode=413,b.end((0,D.getPostponedStateExceededErrorMessage)(f)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let i="1 MB",j=(null==(S=aj.experimental.serverActions)?void 0:S.bodySizeLimit)??i,k=e+(j!==i?c(95726).parse(j):1048576),l=await (0,D.readBodyWithSizeLimit)(a,k);if(null===l)return b.statusCode=413,b.end("Request body exceeded limit. To configure the body size limit for Server Actions, see: https://nextjs.org/docs/app/api-reference/next-config-js/serverActions#bodysizelimit"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;if(l.length>=e){let b=l.subarray(0,e).toString("utf8");(0,h.addRequestMeta)(a,"postponed",b);let c=l.subarray(e);(0,h.addRequestMeta)(a,"actionBody",c)}else throw Object.defineProperty(Error(`invariant: expected ${e} bytes of postponed state but only received ${l.length} bytes`),"__NEXT_ERROR_CODE",{value:"E979",enumerable:!1,configurable:!0})}}if(!(0,h.getRequestMeta)(a,"postponed")&&az&&"1"===a.headers[x.NEXT_RESUME_HEADER]&&"POST"===a.method){let{maxPostponedStateSize:c,maxPostponedStateSizeBytes:e}=(0,D.getMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize),f=await (0,D.readBodyWithSizeLimit)(a,e);if(null===f)return b.statusCode=413,b.end((0,D.getPostponedStateExceededErrorMessage)(c)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let g=f.toString("utf8");(0,h.addRequestMeta)(a,"postponed",g)}let aB=!0===N.isDev||!0===aj.experimental.exposeTestingApiInProductionBuild,aC=aB&&("1"===a.headers[s.NEXT_INSTANT_PREFETCH_HEADER]||void 0===a.headers[s.RSC_HEADER]&&"string"==typeof a.headers.cookie&&a.headers.cookie.includes(s.NEXT_INSTANT_TEST_COOKIE+"=")),aD=(az||aC)&&((null==(K=ae.routes[ao]??ae.dynamicRoutes[ao])?void 0:K.renderingMode)==="PARTIALLY_STATIC"||aC&&(aB||(null==ai?void 0:ai.experimentalTestProxy)===!0)),aE=aC&&aD,aF=aE&&!0===N.isDev,aG=!1,aH=aD?(0,h.getRequestMeta)(a,"postponed"):void 0,aI=null==(P=ae.routes[ag])?void 0:P.prefetchDataRoute,aJ=aD&&ax&&!aw&&!aI;T&&(aJ=aJ&&!!aH);let aK=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),aL=(!au||!aD)&&(!at||(0,p.shouldServeStreamingMetadata)(at,aj.htmlLimitedBots)),aM=!!((ar||as||ae.routes[ao])&&!(au&&aD)),aN=aD&&!0===aj.cacheComponents,aO=!0===N.isDev||!aM||"string"==typeof aH||(aN&&(0,h.getRequestMeta)(a,"onCacheEntryV2")?aJ&&!T:aJ),aP=!!au&&aD,aQ=(null==ar?void 0:ar.remainingPrerenderableParams)??[],aR=(null==ar?void 0:ar.fallback)===null&&((null==(Q=ar.fallbackRootParams)?void 0:Q.length)??0)>0,aS=null;if(!af&&aM&&!aO&&!ay&&!aH&&!aJ){let a=aq?"string"==typeof(null==ar?void 0:ar.fallback)?ar.fallback:aq.source:null;if(!0===aj.experimental.partialFallbacks&&a&&(null==ar?void 0:ar.fallbackRouteParams)&&!aR){if(aQ.length>0){let b,c=(b=new Map(aQ.map(a=>[a.paramName,a])),a.split("/").map(a=>{let c=(0,J.getSegmentParam)(a);if(!c)return a;let d=b.get(c.paramName);if(!d)return a;let e=null==Y?void 0:Y[d.paramName];if(!e)return a;let f=Array.isArray(e)?e.map(a=>encodeURIComponent(a)).join("/"):encodeURIComponent(e);return a.replace(function(a){let{repeat:b,optional:c}=(0,J.getParamProperties)(a.paramType);return c?`[[...${a.paramName}]]`:b?`[...${a.paramName}]`:`[${a.paramName}]`}(d),f)}).join("/")||"/");aS=c!==a?c:null}}else aS=ag}let aT=aS;!aT&&(N.isDev||aM&&Z&&(null==ar?void 0:ar.fallbackRouteParams)&&!ay)&&(aT=ag),N.isDev||af||!aM||!ax||aJ||(0,k.d)(a.headers);let aU={...E,tree:L,handler:O,routeModule:N,__next_app__:M};ab&&ac&&(0,o.setManifestsSingleton)({page:U,clientReferenceManifest:ac,serverActionsManifest:ab});let aV=a.method||"GET",aW=(0,g.getTracer)(),aX=aW.getActiveScopeSpan(),aY=!!(null==ai?void 0:ai.isWrappedByNextServer),aZ=!0===aj.experimental.partialFallbacks&&aQ.length>0?(null==ar||null==(R=ar.fallbackRouteParams)?void 0:R.filter(a=>!aQ.some(b=>b.paramName===a.paramName)))??[]:[],a$=async()=>((null==ai?void 0:ai.render404)?await ai.render404(a,b,ak,!1):b.end("This page could not be found"),null);try{let k,m=N.getVaryHeader(ag,al);b.setHeader("Vary",m);let o=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return N.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let a=aW.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let d=a.get("next.route");if(d){let a=`${aV} ${d}`;c.setAttributes({"next.route":d,"http.route":d,"next.span_name":a}),c.updateName(a),k&&k!==c&&(k.setAttribute("http.route",d),k.updateName(a))}else c.updateName(`${aV} ${U}`)})},p=(0,h.getRequestMeta)(a,"incrementalCache")||await N.getIncrementalCache(a,aj,ae,T);null==p||p.resetRequestCache(),globalThis.__incrementalCache=p;let q=async({span:e,postponed:f,fallbackRouteParams:g,forceStaticRender:i})=>{let k={query:X,params:Y,page:ao,sharedContext:{buildId:W,deploymentId:am,clientAssetToken:an},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aU,Component:(0,j.T)(aU),params:Y,routeModule:N,page:U,postponed:f,shouldWaitOnAllReady:aP,serveStreamingMetadata:aL,supportsDynamicResponse:"string"==typeof f||aO,buildManifest:$,nextFontManifest:_,reactLoadableManifest:aa,subresourceIntegrityManifest:ad,setCacheStatus:null==ai?void 0:ai.setCacheStatus,setIsrStatus:null==ai?void 0:ai.setIsrStatus,setReactDebugChannel:null==ai?void 0:ai.setReactDebugChannel,sendErrorsToBrowser:null==ai?void 0:ai.sendErrorsToBrowser,dir:c(33873).join(process.cwd(),N.relativeProjectDir),isDraftMode:af,botType:au,isOnDemandRevalidate:ap,isPossibleServerAction:ay,assetPrefix:aj.assetPrefix,nextConfigOutput:aj.output,crossOrigin:aj.crossOrigin,trailingSlash:aj.trailingSlash,images:aj.images,previewProps:ae.preview,enableTainting:aj.experimental.taint,htmlLimitedBots:aj.htmlLimitedBots,reactMaxHeadersLength:aj.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:p,cacheLifeProfiles:aj.cacheLife,basePath:aj.basePath,serverActions:aj.experimental.serverActions,logServerFunctions:"object"==typeof aj.logging&&!!aj.logging.serverFunctions,...aE||aF||aG?{isBuildTimePrerendering:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isDebugDynamicAccesses:aF}:{},cacheComponents:!!aj.cacheComponents,experimental:{isRoutePPREnabled:aD,expireTime:aj.expireTime,staleTimes:aj.experimental.staleTimes,dynamicOnHover:!!aj.experimental.dynamicOnHover,optimisticRouting:!!aj.experimental.optimisticRouting,inlineCss:!!aj.experimental.inlineCss,prefetchInlining:aj.experimental.prefetchInlining??!1,authInterrupts:!!aj.experimental.authInterrupts,cachedNavigations:!!aj.experimental.cachedNavigations,clientTraceMetadata:aj.experimental.clientTraceMetadata||[],clientParamParsingOrigins:aj.experimental.clientParamParsingOrigins,maxPostponedStateSizeBytes:(0,C.parseMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize)},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d,e)=>N.onRequestError(a,b,d,e,ai),err:(0,h.getRequestMeta)(a,"invokeError")}};i&&(k.renderOpts.supportsDynamicResponse=!1);let l=await o(e,k),{metadata:m}=l,{cacheControl:n,headers:q={},fetchTags:r,fetchMetrics:s}=m;if(r&&(q[x.NEXT_CACHE_TAGS_HEADER]=r),a.fetchMetrics=s,aM&&(null==n?void 0:n.revalidate)===0&&!N.isDev&&!aD){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${ag}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:u.CachedRouteKind.APP_PAGE,html:l,headers:q,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},r=async({hasResolved:c,previousCacheEntry:g,isRevalidating:i,span:j,forceStaticRender:k=!1})=>{let l=!1===N.isDev,m=c||b.writableEnded;try{let f;if(ap&&ah&&!g&&!T)return(null==ai?void 0:ai.render404)?await ai.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ar&&(f=(0,v.parseFallbackField)(ar.fallback)),!0===aj.experimental.partialFallbacks&&(null==ar?void 0:ar.fallback)===null&&!aR&&aQ.length>0&&(f=v.FallbackMode.PRERENDER),f===v.FallbackMode.PRERENDER&&(0,t.isBot)(at)&&(!aD||av)&&(f=v.FallbackMode.BLOCKING_STATIC_RENDER),(null==g?void 0:g.isStale)===-1&&(ap=!0),ap&&(f!==v.FallbackMode.NOT_FOUND||g)&&(f=v.FallbackMode.BLOCKING_STATIC_RENDER),!T&&f!==v.FallbackMode.BLOCKING_STATIC_RENDER&&aT&&!m&&!af&&Z&&(l||!as)){if((l||ar)&&f===v.FallbackMode.NOT_FOUND){if(aj.adapterPath)return await a$();throw new B.NoFallbackError}if(aD&&(aj.cacheComponents?!aJ:!ax)){let b=l&&"string"==typeof(null==ar?void 0:ar.fallback)?ar.fallback:ao,f=(l||aE)&&(null==ar?void 0:ar.fallbackRouteParams)?(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams):aG?(0,n.getFallbackRouteParams)(ao,N):null;aE&&f&&(0,h.addRequestMeta)(a,"fallbackParams",f);let g=await N.handleResponse({cacheKey:b,req:a,nextConfig:aj,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:ae,isRoutePPREnabled:aD,responseGenerator:async()=>q({span:j,postponed:void 0,fallbackRouteParams:f,forceStaticRender:!0}),waitUntil:d.waitUntil,isMinimalMode:T});if(null===g)return null;if(g)return T||!aD||!(aQ.length>0)||!0!==aj.experimental.partialFallbacks||!aS||!p||ap||aG||aB||aC||aw||(0,H.scheduleOnNextTick)(async()=>{let b=N.getResponseCache(a);try{await b.revalidate(aS,p,aD,!1,a=>q({span:a.span,postponed:void 0,fallbackRouteParams:aZ.length>0?(0,n.createOpaqueFallbackRouteParams)(aZ):null,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}),delete g.cacheControl,g}}let o=ap||i||!aH?void 0:aH;if(aN&&!T&&p&&(aJ||ay)&&!k){let b=await p.get(ag,{kind:u.IncrementalCacheKind.APP_PAGE,isRoutePPREnabled:!0,isFallback:!1});b&&b.value&&b.value.kind===u.CachedRouteKind.APP_PAGE&&(o=b.value.postponed,b&&(-1===b.isStale||!0===b.isStale)&&(0,H.scheduleOnNextTick)(async()=>{let b=N.getResponseCache(a);try{await b.revalidate(ag,p,aD,!1,a=>r({...a,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}))}if((aE||aF)&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:u.CachedRouteKind.PAGES,html:w.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let s=(l&&(0,h.getRequestMeta)(a,"renderFallbackShell")||aE&&!as)&&(null==ar?void 0:ar.fallbackRouteParams)?(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams):aG?(0,n.getFallbackRouteParams)(ao,N):null;if((l||aE)&&aj.cacheComponents&&!as&&(null==ar?void 0:ar.fallbackRouteParams)){let b=(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams);b&&(0,h.addRequestMeta)(a,"fallbackParams",b)}return q({span:j,postponed:o,fallbackRouteParams:s,forceStaticRender:k})}catch(b){throw(null==g?void 0:g.isStale)&&await N.onRequestError(a,b,{routerKind:"App Router",routePath:U,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aM,isOnDemandRevalidate:ap})},!1,ai),b}},D=async c=>{var f,g,i,j,k;let l,m=await N.handleResponse({cacheKey:aS,responseGenerator:a=>r({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ap,isRoutePPREnabled:aD,req:a,nextConfig:aj,prerenderManifest:ae,waitUntil:d.waitUntil,isMinimalMode:T});if(af&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),N.isDev&&b.setHeader("Cache-Control","no-cache, must-revalidate"),!m){if(aS)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=m.value)?void 0:f.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=m.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let n="string"==typeof m.value.postponed;ax&&!ay&&am&&b.setHeader(x.NEXT_NAV_DEPLOYMENT_ID_HEADER,am),aM&&!aJ&&(!n||aw)&&(T||b.setHeader("x-nextjs-cache",ap?"REVALIDATED":m.isMiss?"MISS":m.isStale?"STALE":"HIT"),b.setHeader(s.NEXT_IS_PRERENDER_HEADER,"1"));let{value:o}=m;if(aH)l={revalidate:0,expire:void 0};else if(aJ)l={revalidate:0,expire:void 0};else if(!N.isDev)if(af)l={revalidate:0,expire:void 0};else if(aM){if(m.cacheControl)if("number"==typeof m.cacheControl.revalidate){if(m.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${m.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:m.cacheControl.revalidate,expire:(null==(j=m.cacheControl)?void 0:j.expire)??aj.expireTime}}else l={revalidate:x.CACHE_ONE_YEAR_SECONDS,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(m.cacheControl=l,"string"==typeof aK&&(null==o?void 0:o.kind)===u.CachedRouteKind.APP_PAGE&&o.segmentData){b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=o.headers)?void 0:k[x.NEXT_CACHE_TAGS_HEADER];T&&aM&&c&&"string"==typeof c&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,c);let d=o.segmentData.get(aK);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.fromStatic(d,s.RSC_CONTENT_TYPE_HEADER),cacheControl:m.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.EMPTY,cacheControl:m.cacheControl}))}let p=aN?(0,h.getRequestMeta)(a,"onCacheEntryV2")??(0,h.getRequestMeta)(a,"onCacheEntry"):(0,h.getRequestMeta)(a,"onCacheEntry");if(p&&await p(m,{url:(0,h.getRequestMeta)(a,"initURL")??a.url}))return null;if(o.headers){let a={...o.headers};for(let[c,d]of(T&&aM||delete a[x.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let t=null==(g=o.headers)?void 0:g[x.NEXT_CACHE_TAGS_HEADER];if(T&&aM&&t&&"string"==typeof t&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,t),!o.status||ax&&aD||(b.statusCode=o.status),!T&&o.status&&F.RedirectStatusCode[o.status]&&ax&&(b.statusCode=200),n&&!aJ&&b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"1"),ax&&!af){if(void 0===o.rscData){if(o.html.contentType!==s.RSC_CONTENT_TYPE_HEADER)if(aj.cacheComponents)return b.statusCode=404,(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.EMPTY,cacheControl:m.cacheControl});else throw Object.defineProperty(new G.InvariantError(`Expected RSC response, got ${o.html.contentType}`),"__NEXT_ERROR_CODE",{value:"E789",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:o.html,cacheControl:m.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.fromStatic(o.rscData,s.RSC_CONTENT_TYPE_HEADER),cacheControl:m.cacheControl})}let v=o.html;if(aC&&aE){let c=!0===N.isDev?crypto.randomUUID():null;return v.pipeThrough((0,z.createInstantTestScriptInsertionTransformStream)(c)),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})}if(!n||T||ax)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:m.cacheControl});if(aE||aF)return v.push(new ReadableStream({start(a){a.enqueue(y.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}});let B=new TransformStream;return v.push(B.readable),q({span:c,postponed:o.postponed,fallbackRouteParams:null,forceStaticRender:!1}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(B.writable)}).catch(a=>{B.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})};if(!aY||!aX)return k=aW.getActiveScopeSpan(),await aW.withPropagatedContext(a.headers,()=>aW.trace(i.BaseServerSpan.handleRequest,{spanName:`${aV} ${U}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aV,"http.target":a.url}},D),void 0,!aY);await D(aX)}catch(b){throw b instanceof B.NoFallbackError||await N.onRequestError(a,b,{routerKind:"App Router",routePath:U,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aM,isOnDemandRevalidate:ap})},!1,ai),b}}},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12412:a=>{"use strict";a.exports=require("assert")},15715:(a,b,c)=>{"use strict";c.d(b,{Bk:()=>e});var d=c(48249);function e({permissions:a,require:b,mode:c="all",allowed:f,fallback:g=null,children:h}){let i=f??function(a,b,c="all"){if(!b)return!0;let d=new Set(a??[]);if("function"==typeof b)return b(d);let e="string"==typeof b?[b]:[...b];return 0===e.length||("any"===c?e.some(a=>d.has(a)):e.every(a=>d.has(a)))}(a,b,c);return(0,d.jsx)(d.Fragment,{children:i?h:g})}},17891:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/get-segment-param")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21820:a=>{"use strict";a.exports=require("os")},23167:(a,b,c)=>{"use strict";c.r(b),c.d(b,{NAV_SECTIONS:()=>cj,default:()=>cl});var d=c(48249),e=c(67484),f=c.n(e),g=c(30728),h=c(23553),i=c(8133),j=c(73929),k=c(47984);let l=a=>null==a?"":String(a).trim(),m=(a,b)=>!!l(a)&&l(a)===l(b);function n(a,b,c,d){return!(!a||!0===a.isDeleted||!1===a.active||["inactive","deleted","archived","suspended","revoked"].includes(l(a.status).toLowerCase()))&&m(a.accountId,b)&&m(a.schoolId,c)&&m(a.branchId,d)}let o=(a,b=!1,c)=>({key:a,ready:b,subjects:new Set,classes:new Set,teachingClasses:new Set,error:c});function p(){let a=(0,i.P)();(0,j.f)(["classSubjects","classTeachers"]);let{accountId:b,schoolId:c,branchId:d,authenticated:f,restoring:g,branchLoading:h,membership:k,role:m}=a,n=l(m||k?.role).toLowerCase().replace(/-/g,"_"),p=l(k?.teacherId||k?.teacherLocalId||k?.teacher?.id),q=l(b),r=l(c),s=l(d),t=[q,r,s,p,n].join("|"),u=!!(f&&!a.error&&k&&"teacher"===n&&p&&q&&r&&s),[v,w]=(0,e.useState)(()=>o("")),x=v.key===t?v:o(t),y=(0,e.useMemo)(()=>new Set([...x.classes,...x.teachingClasses]),[x.classes,x.teachingClasses]);return{accountId:q,schoolId:r,branchId:s,teacherId:p,permitted:u,ready:!g&&!h&&x.ready,error:a.error||x.error,classTeacherClassIds:x.classes,teachingClassIds:x.teachingClasses,allowedClassIds:y,subjectIds:x.subjects}}async function q(a,b){return!!b&&!!a.teacherId&&(await k.db.classSubjects.toArray()).some(c=>n(c,a.accountId,a.schoolId,a.branchId)&&m(c.teacherId,a.teacherId)&&m(c.id,b))}async function r(a,b){if(!b||!a.teacherId)return!1;let[c,d,e]=await Promise.all([k.db.studentEnrollments.toArray(),k.db.classSubjects.toArray(),k.db.classTeachers.toArray()]),f=new Set([...d.filter(b=>n(b,a.accountId,a.schoolId,a.branchId)&&m(b.teacherId,a.teacherId)).map(a=>l(a.classId)),...e.filter(b=>n(b,a.accountId,a.schoolId,a.branchId)&&m(b.teacherId,a.teacherId)).map(a=>l(a.classId))]);return c.some(c=>{let d;return n(c,a.accountId,a.schoolId,a.branchId)&&m(c.studentId,b)&&("active"===(d=l(c?.status).toLowerCase())||""===d&&c?.active!==!1)&&f.has(l(c.classId))})}async function s(a,b){return!!b&&!!a.teacherId&&(await k.db.classTeachers.toArray()).some(c=>n(c,a.accountId,a.schoolId,a.branchId)&&m(c.teacherId,a.teacherId)&&m(c.classId,b))}var t=c(74429),u=c(19099),v=c(4121),w=c(16453),x=c(18423),y=c(84884),z=c(96157);let A=`
.eleeveon-skeleton{--sk-base:var(--surface-muted,var(--hover-bg,rgba(127,141,163,.12)));--sk-edge:var(--border,rgba(127,141,163,.2)); color:var(--text,#1f2937);width:100%;min-width:0}
.eleeveon-skeleton *{box-sizing:border-box;min-width:0}
.eleeveon-skeleton .esk-header{margin-bottom:12px}
.eleeveon-skeleton .esk-heading{font-size:13px;font-weight:750;line-height:1.5}
.eleeveon-skeleton .esk-note{font-size:11px;color:var(--muted,#64748b);margin-top:2px}
.eleeveon-skeleton .esk-line{display:block;height:10px;background:var(--sk-base);border-radius:5px;max-width:100%;animation:eleeveon-sk-pulse 1.6s ease-in-out infinite alternate}
.eleeveon-skeleton .esk-line.sm{height:7px}.eleeveon-skeleton .esk-line.lg{height:16px}
.eleeveon-skeleton .esk-card{border:1px solid var(--sk-edge);background:var(--card-bg,var(--surface,#fff));border-radius:14px;padding:12px;display:flex;flex-direction:column;gap:11px;min-height:104px}
.eleeveon-skeleton .esk-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:10px}
.eleeveon-skeleton .esk-grid.esk-assessment-grid{grid-template-columns:minmax(0,1fr)}
.eleeveon-skeleton .esk-grid.esk-picker-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.eleeveon-skeleton .esk-assessment-card{min-height:180px;padding:11px;gap:8px}
.eleeveon-skeleton .esk-assessment-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}
.eleeveon-skeleton .esk-assessment-field{display:flex;flex-direction:column;gap:5px;padding:7px;border:1px solid var(--sk-edge);border-radius:9px}
.eleeveon-skeleton .esk-assessment-result{display:flex;gap:12px;border-top:1px solid var(--sk-edge);padding-top:9px}
.eleeveon-skeleton .esk-picker-card{min-height:130px;justify-content:center;padding:16px}
@media (min-width:760px){.eleeveon-skeleton .esk-grid.esk-picker-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.eleeveon-skeleton .esk-grid.esk-assessment-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (min-width:1024px){.eleeveon-skeleton .esk-grid.esk-assessment-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
.eleeveon-skeleton .esk-row{display:flex;align-items:center;gap:10px}.eleeveon-skeleton .esk-col{flex:1;display:flex;flex-direction:column;gap:8px}
.eleeveon-skeleton .esk-avatar{height:43px;width:43px;border-radius:11px;background:var(--sk-base);flex:0 0 auto;animation:eleeveon-sk-pulse 1.6s ease-in-out infinite alternate}
.eleeveon-skeleton .esk-avatar.round{border-radius:50%}
.eleeveon-skeleton .esk-divider{height:1px;background:var(--sk-edge)}
.eleeveon-skeleton .esk-field{flex:1;background:var(--sk-base);height:31px;border-radius:7px;animation:eleeveon-sk-pulse 1.6s ease-in-out infinite alternate}
.eleeveon-skeleton .esk-pill{background:var(--sk-base);width:50px;height:24px;border-radius:30px;animation:eleeveon-sk-pulse 1.6s ease-in-out infinite alternate}
.eleeveon-skeleton .esk-table-scroll{width:100%;overflow:hidden;border:1px solid var(--sk-edge);border-radius:12px;background:var(--card-bg,var(--surface,#fff))}
.eleeveon-skeleton .esk-table{width:100%;border-collapse:collapse;table-layout:fixed}.eleeveon-skeleton .esk-table td,.eleeveon-skeleton .esk-table th{padding:11px 9px;border-bottom:1px solid var(--sk-edge);text-align:left}.eleeveon-skeleton .esk-table th{background:var(--sk-base)}.eleeveon-skeleton .esk-table tr:last-child td{border-bottom:0}
.eleeveon-skeleton .esk-report{max-width:740px;width:100%;background:var(--card-bg,var(--surface,#fff));border:1px solid var(--sk-edge);padding:20px;border-radius:8px;display:flex;flex-direction:column;gap:15px}
.eleeveon-skeleton .esk-report .esk-avatar{height:55px;width:55px}
@keyframes eleeveon-sk-pulse{from{opacity:.65}to{opacity:1}}
@media(prefers-reduced-motion:reduce){.eleeveon-skeleton .esk-line,.eleeveon-skeleton .esk-avatar,.eleeveon-skeleton .esk-field,.eleeveon-skeleton .esk-pill{animation:none}}
@media(max-width:580px){.eleeveon-skeleton .esk-grid{gap:8px}.eleeveon-skeleton .esk-card{padding:9px;gap:9px}.eleeveon-skeleton .esk-avatar{width:34px;height:34px}.eleeveon-skeleton .esk-picker-card{padding:10px;min-height:120px}.eleeveon-skeleton .esk-report{padding:12px}.eleeveon-skeleton .esk-table td,.eleeveon-skeleton .esk-table th{padding:9px 5px}}
@media(max-width:380px){.eleeveon-skeleton .esk-grid.esk-picker-grid{grid-template-columns:minmax(0,1fr)}}
`;function B({width:a="70%",size:b=""}){return(0,d.jsx)("span",{"aria-hidden":"true",className:`esk-line ${b}`,style:{width:a}})}function C({kind:a}){return"assessment"===a?(0,d.jsxs)("div",{className:"esk-card esk-assessment-card","aria-hidden":"true",children:[(0,d.jsxs)("div",{className:"esk-row",children:[(0,d.jsx)("span",{className:"esk-avatar",style:{height:36,width:36}}),(0,d.jsxs)("div",{className:"esk-col",children:[(0,d.jsx)(B,{width:"75%"}),(0,d.jsx)(B,{size:"sm",width:"50%"})]}),(0,d.jsx)("span",{className:"esk-pill"})]}),(0,d.jsx)("div",{className:"esk-assessment-fields",children:Array.from({length:2},(a,b)=>(0,d.jsxs)("div",{className:"esk-assessment-field",children:[(0,d.jsx)(B,{size:"sm",width:"74%"}),(0,d.jsx)(B,{size:"sm",width:"30%"}),(0,d.jsx)("span",{className:"esk-field",style:{height:38,flex:"none"}})]},b))}),(0,d.jsxs)("div",{className:"esk-assessment-result",children:[(0,d.jsx)(B,{size:"sm",width:"22%"}),(0,d.jsx)(B,{size:"sm",width:"24%"}),(0,d.jsx)(B,{size:"sm",width:"32%"})]})]}):(0,d.jsxs)("div",{className:`esk-card ${"class"===a?"esk-picker-card":""}`,"aria-hidden":"true",children:[(0,d.jsxs)("div",{className:"esk-row",children:[(0,d.jsx)("span",{className:`esk-avatar ${"student"===a||"teacher"===a||"attendance"===a?"round":""}`}),(0,d.jsxs)("div",{className:"esk-col",children:[(0,d.jsx)(B,{width:"82%"}),(0,d.jsx)(B,{size:"sm",width:"58%"})]})]}),"class"!==a&&(0,d.jsx)("div",{className:"esk-divider"}),(0,d.jsx)(B,{size:"sm",width:"90%"}),(0,d.jsx)(B,{size:"sm",width:"62%"})]})}function D({rows:a,columns:b,broadsheet:c}){return(0,d.jsx)("div",{className:"esk-table-scroll","aria-hidden":"true",children:(0,d.jsxs)("table",{className:"esk-table",children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:Array.from({length:b},(a,b)=>(0,d.jsx)("th",{children:(0,d.jsx)(B,{width:0===b?"85%":"70%"})},b))})}),(0,d.jsx)("tbody",{children:Array.from({length:a},(a,e)=>(0,d.jsx)("tr",{children:Array.from({length:b},(a,b)=>(0,d.jsx)("td",{children:(0,d.jsx)(B,{size:"sm",width:0===b?"90%":c?"42%":"70%"})},b))},e))})]})})}function E(){return(0,d.jsxs)("div",{className:"esk-report","aria-hidden":"true",children:[(0,d.jsxs)("div",{className:"esk-row",children:[(0,d.jsx)("span",{className:"esk-avatar"}),(0,d.jsxs)("div",{className:"esk-col",children:[(0,d.jsx)(B,{size:"lg",width:"68%"}),(0,d.jsx)(B,{width:"48%"}),(0,d.jsx)(B,{size:"sm",width:"60%"})]}),(0,d.jsx)("span",{className:"esk-avatar round"})]}),(0,d.jsx)("div",{className:"esk-divider"}),(0,d.jsxs)("div",{className:"esk-row",children:[(0,d.jsxs)("div",{className:"esk-col",children:[(0,d.jsx)(B,{width:"87%"}),(0,d.jsx)(B,{size:"sm",width:"62%"})]}),(0,d.jsxs)("div",{className:"esk-col",children:[(0,d.jsx)(B,{width:"88%"}),(0,d.jsx)(B,{size:"sm",width:"68%"})]})]}),(0,d.jsx)(D,{rows:5,columns:4,broadsheet:!1}),(0,d.jsx)("div",{className:"esk-divider"}),(0,d.jsx)(B,{width:"55%"}),(0,d.jsx)(B,{size:"sm",width:"96%"}),(0,d.jsx)(B,{size:"sm",width:"81%"})]})}function F({kind:a,view:b="cards",count:c=4,title:e="Getting your records ready…",message:f,compact:g=!1}){let h=Math.max(2,Math.min(10,Math.floor(c))),i="broadsheet"===a||"table"===a||"table"===b,j="report-card"===a||"preview"===b;return(0,d.jsxs)("section",{className:"eleeveon-skeleton",role:"status","aria-busy":"true","aria-label":e,children:[(0,d.jsx)("style",{children:A}),(0,d.jsxs)("div",{className:"esk-header",children:[(0,d.jsx)("div",{className:"esk-heading",children:e}),f&&(0,d.jsx)("div",{className:"esk-note",children:f})]}),j?(0,d.jsx)(E,{}):i?(0,d.jsx)(D,{rows:h,columns:"broadsheet"===a?7:g?3:5,broadsheet:"broadsheet"===a}):(0,d.jsx)("div",{className:`esk-grid ${"assessment"===a?"esk-assessment-grid":"class"===a?"esk-picker-grid":""}`,children:Array.from({length:h},(b,c)=>(0,d.jsx)(C,{kind:a},c))})]})}var G=c(58859),H=c(97301),I=c(94452),J=c(49403),K=c(2352),L=c(3858),M=c(40605),N=c(96782),O=c(6789),P=c(78801),Q=c(69144),R=c(99181),S=c(12161),T=c(65058);function U(a,b){return("all"===b.classId||W(a.row.classId,b.classId))&&("all"===b.subjectId||W(a.row.subjectId,b.subjectId))&&("all"===b.periodId||W(a.row.academicPeriodId,b.periodId))&&("all"===b.readiness||("ready"===b.readiness?a.ready:!a.ready))}let V=a=>null==a?"":String(a).trim(),W=(a,b)=>String(a??"")===String(b??""),X=a=>String(a||"").toLowerCase().trim(),Y=a=>k.db[a],Z=(a,b)=>`${a||""}-${b||""}`,$=a=>!a?.isDeleted&&a?.active!==!1;function _({item:a,onOpen:b}){return(0,d.jsxs)("button",{type:"button",className:"student-row assessment-row",onClick:b,children:[(0,d.jsx)("span",{className:"app-icon",children:"\uD83C\uDFEB"}),(0,d.jsxs)("span",{className:"student-main",children:[(0,d.jsx)("strong",{children:a.name}),(0,d.jsxs)("small",{children:[a.subjectCount," class subject(s) \xb7 ",a.studentCount," active student(s)"]}),(0,d.jsx)("em",{children:a.missingCount?`${a.missingCount} missing setup`:"All class subjects ready"})]}),(0,d.jsxs)("span",{className:"student-side",children:[(0,d.jsx)("span",{className:`status-dot-mini ${a.missingCount?"orange":"green"}`}),(0,d.jsx)("i",{children:"›"})]})]})}function aa({item:a,onOpen:b}){let c=a.option.ready&&a.itemCount>0;return(0,d.jsxs)("button",{type:"button",className:"student-row assessment-row",onClick:b,children:[(0,d.jsx)("span",{className:"app-icon",children:"\uD83D\uDCDD"}),(0,d.jsxs)("span",{className:"student-main",children:[(0,d.jsx)("strong",{children:a.option.subjectName}),(0,d.jsxs)("small",{className:"ae-subject-teacher-name",children:[(0,d.jsx)("span",{"aria-hidden":"true",children:"\uD83D\uDC64"})," Teacher: ",a.option.teacherName]}),(0,d.jsx)("small",{className:"ae-subject-period-name",children:a.option.academicPeriodName}),(0,d.jsx)("em",{children:c?`${a.studentCount} students \xb7 ${a.itemCount} items \xb7 ${a.completion}% done`:"Needs applicability or assessment items"})]}),(0,d.jsxs)("span",{className:"student-side",children:[(0,d.jsx)("span",{className:`status-dot-mini ${c?a.completion>=100?"green":"orange":"red"}`}),(0,d.jsx)("i",{children:"›"})]})]})}function ab({primary:a,title:b,text:c}){return(0,d.jsxs)("main",{className:"ae-page",style:{"--ae-primary":a},children:[(0,d.jsx)("style",{children:an}),(0,d.jsxs)("section",{className:"ae-state",children:[(0,d.jsx)("div",{className:"ae-spinner"}),(0,d.jsx)("h2",{children:b}),(0,d.jsx)("p",{children:c})]})]})}function ac({icon:a,title:b,text:c}){return(0,d.jsxs)("section",{className:"ae-empty",children:[(0,d.jsx)("div",{className:"ae-empty-icon",children:a}),(0,d.jsx)("h3",{children:b}),(0,d.jsx)("p",{children:c})]})}function ad(a){let b=a.__entryPathLabels;return Array.isArray(b)?b.filter(a=>"string"==typeof a):[a.name]}function ae(a){return ad(a).slice(0,-1).join(" \xb7 ")}function af(a){return ad(a).join(" \xb7 ")}function ag({studentId:a,item:b,scores:c,updateScore:e}){let f=c[Z(a,V(b.id))];return(0,d.jsx)("input",{className:"ae-score-input",type:"number",inputMode:"decimal",min:0,max:Number(b.maxScore||100),step:"0.01",value:f??"",placeholder:`/${Number(b.maxScore||100)}`,onChange:c=>e(a,b,c.target.value)})}let ah=f().memo(function({name:a,photo:b}){return(0,d.jsx)("span",{className:"ae-portrait","aria-hidden":"true",children:b?(0,d.jsx)("img",{src:b,alt:"",loading:"lazy",decoding:"async"}):(0,d.jsx)("span",{children:String(a||"S").trim().slice(0,1).toUpperCase()})})});function ai({row:a,photo:b,items:c,scores:e,updateScore:f}){let g=a.student,h=V(g.id),i=a.rowExpected>0&&a.rowEntered>=a.rowExpected;return(0,d.jsxs)("article",{className:"ae-score-card",children:[(0,d.jsxs)("div",{className:"ae-score-head",children:[(0,d.jsx)(ah,{name:g.fullName,photo:b}),(0,d.jsxs)("div",{className:"ae-student-label",children:[(0,d.jsx)("strong",{children:g.fullName||"Unnamed student"}),(0,d.jsx)("span",{children:g.admissionNumber||"No admission number"})]}),(0,d.jsx)("i",{className:i?"done":a.rowEntered?"partial":"empty",children:i?"Done":a.rowEntered?"Partial":"Empty"})]}),(0,d.jsx)("div",{className:"ae-score-grid",children:c.map(a=>(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:af(a)}),(0,d.jsxs)("small",{children:["/",Number(a.maxScore||100)]}),(0,d.jsx)(ag,{studentId:h,item:a,scores:e,updateScore:f})]},String(a.id)))}),(0,d.jsxs)("div",{className:"ae-result-row",children:[(0,d.jsxs)("span",{children:["Total: ",(0,d.jsx)("b",{children:a.weightedTotal})]}),(0,d.jsxs)("span",{children:["Grade: ",(0,d.jsx)("b",{children:a.grade||"—"})]}),(0,d.jsx)("span",{children:a.remark||"No remark"})]})]})}function aj({rows:a,photoFor:b,items:c,scores:e,updateScore:f}){return(0,d.jsx)("section",{className:"ae-table-card",children:(0,d.jsxs)("div",{className:"ae-table-scroll",children:[(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsxs)("th",{children:["Students (",a.length,")"]}),c.map(a=>(0,d.jsxs)("th",{children:[ae(a)?(0,d.jsx)("small",{className:"ae-assessment-group",children:ae(a)}):null,a.name,(0,d.jsxs)("span",{children:["/",Number(a.maxScore||100)]})]},String(a.id))),(0,d.jsx)("th",{children:"Total"}),(0,d.jsx)("th",{children:"Grade"}),(0,d.jsx)("th",{children:"Remark"})]})}),(0,d.jsx)("tbody",{children:a.map(a=>{let g=a.student,h=V(g.id);return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsxs)("div",{className:"ae-table-student",children:[(0,d.jsx)(ah,{name:g.fullName,photo:b(a.student)}),(0,d.jsxs)("span",{className:"ae-student-label",children:[(0,d.jsx)("strong",{children:g.fullName||"Unnamed student"}),(0,d.jsx)("small",{children:g.admissionNumber||"—"})]})]})}),c.map(a=>(0,d.jsx)("td",{children:(0,d.jsx)(ag,{studentId:h,item:a,scores:e,updateScore:f})},String(a.id))),(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:a.weightedTotal})}),(0,d.jsx)("td",{children:a.grade||"—"}),(0,d.jsx)("td",{children:a.remark||"—"})]},String(h))})})]}),!a.length&&(0,d.jsx)("div",{className:"ae-empty-table",children:"No student matches your filters."})]})})}function ak({rows:a,completion:b,structureItems:c,classSubjectOptions:f}){let g=(0,e.useMemo)(()=>{let b=new Map;return a.forEach(a=>b.set(a.grade||"Ungraded",(b.get(a.grade||"Ungraded")||0)+1)),Array.from(b.entries()).sort((a,b)=>b[1]-a[1])},[a]);return(0,d.jsxs)("section",{className:"ae-analysis-grid",children:[(0,d.jsxs)("article",{className:"ae-analysis ae-current-filter",children:[(0,d.jsx)("span",{children:"Completion"}),(0,d.jsxs)("strong",{children:[b.completion,"%"]}),(0,d.jsxs)("p",{children:[b.entered," of ",b.expected," expected score cells entered."]})]}),(0,d.jsxs)("article",{className:"ae-analysis ae-current-filter",children:[(0,d.jsx)("span",{children:"Complete Students"}),(0,d.jsx)("strong",{children:b.completeStudents}),(0,d.jsx)("p",{children:"Students with every active assessment item entered."})]}),(0,d.jsxs)("article",{className:"ae-analysis ae-current-filter",children:[(0,d.jsx)("span",{children:"Assessment Items"}),(0,d.jsx)("strong",{children:c.length}),(0,d.jsx)("p",{children:"Active score components in the selected assessment structure."})]}),(0,d.jsxs)("article",{className:"ae-analysis ae-current-filter",children:[(0,d.jsx)("span",{children:"Class Subjects"}),(0,d.jsx)("strong",{children:f.length}),(0,d.jsx)("p",{children:"Class subjects currently matching your filters."})]}),(0,d.jsxs)("article",{className:"ae-analysis ae-wide",children:[(0,d.jsx)("span",{children:"Grade Distribution"}),g.map(([a,b])=>(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:a})," — ",b]},a))]})]})}function al({classes:a,subjects:b,periods:c,search:f,setSearch:g,filterClassId:h,filterSubjectId:i,filterPeriodId:j,filterReadiness:k,filterCompletion:l,filterGender:m,allOptions:n,activeClassSubjectId:o,onApply:p,onClose:q}){let[r,s]=(0,e.useState)(()=>({classId:h,subjectId:i,periodId:j,readiness:k,completion:l,gender:m,classSubjectId:"all"===o?"auto":o})),u=a=>{s(b=>({...b,...a}))},v=n.filter(a=>U(a,r)),w=new Set(v.map(a=>a.id)).has(r.classSubjectId)?r.classSubjectId:"auto";return"u"<typeof document?null:(0,t.createPortal)((0,d.jsx)("div",{className:"ae-sheet-backdrop",role:"presentation",onMouseDown:a=>{a.target===a.currentTarget&&q()},children:(0,d.jsxs)("section",{className:"ae-sheet",role:"dialog","aria-modal":"true","aria-label":"Assessment filters",onMouseDown:a=>a.stopPropagation(),children:[(0,d.jsxs)("div",{className:"ae-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Filters"}),(0,d.jsx)("p",{children:"Choose class, subject, gender and score completion."})]}),(0,d.jsx)("button",{type:"button",onClick:q,children:"✕"})]}),(0,d.jsxs)("label",{className:"ae-filter-search",children:[(0,d.jsx)("span",{children:"Search"}),(0,d.jsx)("input",{type:"search",value:f,onChange:a=>g(a.target.value),placeholder:"Find student or class..."})]}),(0,d.jsxs)("div",{className:"ae-form-grid",children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class"}),(0,d.jsxs)("select",{value:r.classId,onChange:a=>u({classId:a.target.value,classSubjectId:"auto"}),children:[(0,d.jsx)("option",{value:"all",children:"All classes"}),a.map(a=>(0,d.jsx)("option",{value:String(a.id),children:a.name},String(a.id)))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Subject"}),(0,d.jsxs)("select",{value:r.subjectId,onChange:a=>u({subjectId:a.target.value,classSubjectId:"auto"}),children:[(0,d.jsx)("option",{value:"all",children:"All subjects"}),b.map(a=>(0,d.jsx)("option",{value:String(a.id),children:a.name},String(a.id)))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Period"}),(0,d.jsxs)("select",{value:r.periodId,onChange:a=>u({periodId:a.target.value,classSubjectId:"auto"}),children:[(0,d.jsx)("option",{value:"all",children:"All periods"}),c.map(a=>(0,d.jsx)("option",{value:String(a.id),children:a.name},String(a.id)))]})]}),(0,d.jsxs)("label",{className:"ae-filter-exact-subject",children:[(0,d.jsxs)("span",{children:["Class subject to open (",v.length," matching)"]}),(0,d.jsxs)("select",{value:w,onChange:a=>u({classSubjectId:a.target.value}),children:[(0,d.jsx)("option",{value:"auto",children:"Automatically choose a ready match"}),v.map(a=>(0,d.jsxs)("option",{value:a.id,children:[a.display,a.ready?" \xb7 Ready":" \xb7 Needs setup"]},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Setup Status"}),(0,d.jsxs)("select",{value:r.readiness,onChange:a=>u({readiness:a.target.value,classSubjectId:"auto"}),children:[(0,d.jsx)("option",{value:"all",children:"All"}),(0,d.jsx)("option",{value:"ready",children:"Applicability ready"}),(0,d.jsx)("option",{value:"missing",children:"Missing applicability"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Student gender"}),(0,d.jsxs)("select",{value:r.gender,onChange:a=>u({gender:a.target.value}),children:[(0,d.jsx)("option",{value:"all",children:"All students"}),(0,d.jsx)("option",{value:"male",children:"Male students"}),(0,d.jsx)("option",{value:"female",children:"Female students"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Score Completion"}),(0,d.jsxs)("select",{value:r.completion,onChange:a=>u({completion:a.target.value}),children:[(0,d.jsx)("option",{value:"all",children:"All"}),(0,d.jsx)("option",{value:"empty",children:"Empty"}),(0,d.jsx)("option",{value:"partial",children:"Partial"}),(0,d.jsx)("option",{value:"complete",children:"Complete"})]})]})]}),(0,d.jsxs)("div",{className:"ae-sheet-actions",children:[(0,d.jsx)("button",{type:"button",onClick:()=>s({classId:"all",subjectId:"all",periodId:"all",readiness:"all",completion:"all",gender:"all",classSubjectId:"auto"}),children:"Clear"}),(0,d.jsx)("button",{type:"button",className:"ae-primary",onClick:()=>p({...r,classSubjectId:w}),children:"Apply \xb7 Open subject"})]})]})}),document.body)}function am({viewMode:a,setViewMode:b,onExcel:c,onRefresh:e,onClose:f}){return"u"<typeof document?null:(0,t.createPortal)((0,d.jsx)("div",{className:"ae-sheet-backdrop",role:"presentation",onMouseDown:a=>{a.target===a.currentTarget&&f()},children:(0,d.jsxs)("section",{className:"ae-sheet ae-more-sheet",role:"dialog","aria-modal":"true","aria-label":"More assessment options",onMouseDown:a=>a.stopPropagation(),children:[(0,d.jsxs)("div",{className:"ae-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"More"}),(0,d.jsx)("p",{children:"Change how you enter and review scores."})]}),(0,d.jsx)("button",{type:"button",onClick:f,children:"✕"})]}),(0,d.jsxs)("button",{type:"button",className:"cards"===a?"active":"",onClick:()=>b("cards"),children:["Card entry ",(0,d.jsx)("span",{children:"Best for phones"})]}),(0,d.jsxs)("button",{type:"button",className:"table"===a?"active":"",onClick:()=>b("table"),children:["Table entry ",(0,d.jsx)("span",{children:"Best for laptop/tablet"})]}),(0,d.jsxs)("button",{type:"button",className:"summary"===a?"active":"",onClick:()=>b("summary"),children:["Summary ",(0,d.jsx)("span",{children:"Completion and grade overview"})]}),(0,d.jsxs)("button",{type:"button",onClick:c,children:["Excel ",(0,d.jsx)("span",{children:"Import, template and score-sheet export"})]}),(0,d.jsxs)("button",{type:"button",onClick:e,children:["Refresh data ",(0,d.jsx)("span",{children:"Reload records from IndexedDB"})]})]})}),document.body)}let an=`
@keyframes ae-spin { to { transform: rotate(360deg); } }
.ae-page{--ae-bg:var(--bg,#f7f8fb);--ae-card:var(--card-bg,var(--surface,#fff));--ae-text:var(--text,#111827);--ae-muted:var(--muted,#6b7280);--ae-border:var(--border,rgba(15,23,42,.10));min-height:100dvh;width:100%;max-width:100%;padding:calc(8px * var(--local-density-scale,1));padding-bottom:max(40px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--ae-primary) 9%,transparent),transparent 30rem),var(--ae-bg);color:var(--ae-text);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);font-size:var(--font-size,14px);overflow-x:hidden}
.ae-page *,.ae-page *::before,.ae-page *::after{box-sizing:border-box;min-width:0}.ae-page button,.ae-page input,.ae-page select{font:inherit}.ae-page button{-webkit-tap-highlight-color:transparent;cursor:pointer}.ae-page input,.ae-page select{width:100%;min-height:42px;border:1px solid var(--input-border,var(--ae-border));border-radius:16px;padding:0 12px;background:var(--input-bg,var(--ae-card));color:var(--input-text,var(--ae-text));outline:none;font-weight:750}.ae-page input:focus,.ae-page select:focus{border-color:color-mix(in srgb,var(--ae-primary) 52%,var(--ae-border));box-shadow:0 0 0 4px color-mix(in srgb,var(--ae-primary) 12%,transparent)}
.ae-state,.ae-search-card,.student-row,.ae-table-card,.ae-score-card,.ae-empty,.ae-analysis,.ae-sheet,.ae-session-strip,.ae-compact-meta{background:var(--ae-card);border:1px solid var(--ae-border);box-shadow:0 18px 45px rgba(15,23,42,.07)}
.ae-search-card{position:sticky;top:0;z-index:10;display:grid;grid-template-columns:1fr auto auto;gap:7px;align-items:center;padding:8px;border-radius:22px;margin:0 auto 8px;backdrop-filter:blur(18px);max-width:1180px}.ae-search{display:flex;align-items:center;gap:8px;min-width:0;background:color-mix(in srgb,var(--ae-primary) 5%,var(--ae-card));border:1px solid var(--ae-border);border-radius:16px;padding:0 10px}.ae-search span{color:var(--ae-muted);font-weight:900}.ae-search input{height:40px;min-height:40px;border:0;background:transparent;box-shadow:none;padding:0}.ae-icon-button,.ae-filter-button{height:40px;width:40px;border:1px solid var(--ae-border);border-radius:15px;background:var(--ae-card);color:var(--ae-text);display:grid;place-items:center;position:relative;font-weight:950}.ae-filter-button.active{border-color:color-mix(in srgb,var(--ae-primary) 58%,var(--ae-border));color:var(--ae-primary);background:color-mix(in srgb,var(--ae-primary) 8%,var(--ae-card))}.ae-filter-button b{position:absolute;right:-4px;top:-4px;min-width:18px;height:18px;border-radius:99px;background:var(--ae-primary);color:#fff;font-size:11px;display:grid;place-items:center}.ae-slider-icon{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round}
.ae-filter-chips{display:flex;gap:7px;overflow:auto;padding:1px 0 8px;max-width:1180px;margin:0 auto}.ae-filter-chips button{white-space:nowrap;border:1px solid var(--ae-border);background:var(--ae-card);color:var(--ae-text);border-radius:999px;padding:7px 10px;font-size:12px;font-weight:850}.class-breadcrumb button:first-child{background:color-mix(in srgb,var(--ae-primary) 10%,var(--ae-card));color:var(--ae-primary);border-color:color-mix(in srgb,var(--ae-primary) 22%,var(--ae-border))}
.ae-list{display:grid;gap:8px;max-width:1180px;margin:0 auto}.student-row{width:100%;border-radius:18px;padding:9px 10px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;text-align:left;color:var(--ae-text)}.student-row:hover{border-color:color-mix(in srgb,var(--ae-primary) 35%,var(--ae-border));transform:translateY(-1px)}.app-icon{width:36px;height:36px;border-radius:14px;display:grid;place-items:center;background:linear-gradient(135deg,color-mix(in srgb,var(--ae-primary) 18%,transparent),color-mix(in srgb,var(--ae-primary) 5%,transparent));font-size:18px}.student-main{display:grid;gap:1px}.student-main strong{font-size:13.5px;line-height:1.2}.student-main small,.student-main em{font-size:11.5px;color:var(--ae-muted);font-style:normal;line-height:1.25}.student-side{display:grid;justify-items:end;gap:3px;color:var(--ae-muted);font-weight:950}.status-dot-mini,.ae-status-dot{width:9px;height:9px;border-radius:99px;background:var(--ae-muted);box-shadow:0 0 0 3px color-mix(in srgb,currentColor 12%,transparent)}.status-dot-mini.green,.ae-status-dot.green{background:#16a34a}.status-dot-mini.orange,.ae-status-dot.orange{background:#f97316}.status-dot-mini.red{background:#dc2626}.status-dot-mini.gray{background:#94a3b8}
.ae-session-strip{max-width:1180px;margin:0 auto 8px;border-radius:18px;padding:8px 9px;display:grid;grid-template-columns:auto 1fr auto auto;gap:8px;align-items:center}.ae-session-strip strong{display:block;font-size:13.5px}.ae-session-strip small{display:block;color:var(--ae-muted);font-size:11.5px;margin-top:1px}.ae-session-strip button{border:1px solid var(--ae-border);border-radius:14px;padding:8px 10px;background:var(--ae-card);color:var(--ae-text);font-weight:950}.ae-session-strip button.primary{border-color:transparent;background:var(--ae-primary);color:#fff}.ae-session-strip button:disabled{opacity:.55}.ae-compact-meta{max-width:1180px;margin:0 auto 8px;border-radius:18px;padding:7px;display:flex;gap:6px;overflow:auto}.ae-chip{white-space:nowrap;display:inline-flex;align-items:center;border-radius:999px;padding:5px 8px;font-size:11px;font-weight:950;border:1px solid var(--ae-border);background:color-mix(in srgb,var(--ae-card) 90%,transparent)}.ae-chip.green{background:rgba(34,197,94,.12);color:#15803d}.ae-chip.red{background:rgba(239,68,68,.12);color:#b91c1c}.ae-chip.blue{background:rgba(59,130,246,.12);color:#1d4ed8}.ae-chip.purple{background:rgba(147,51,234,.12);color:#7e22ce}.ae-chip.orange{background:rgba(249,115,22,.12);color:#c2410c}.ae-chip.gray{color:var(--ae-muted)}
.ae-score-card{border-radius:18px;padding:9px}.ae-score-head{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:8px}.ae-score-head strong{display:block;font-size:13.5px}.ae-score-head span{display:block;color:var(--ae-muted);font-size:11.5px;margin-top:1px}.ae-score-head i{font-style:normal;font-size:10.5px;font-weight:950;border-radius:999px;padding:4px 7px;background:rgba(148,163,184,.12)}.ae-score-head i.done{background:rgba(34,197,94,.12);color:#15803d}.ae-score-head i.partial{background:rgba(249,115,22,.12);color:#c2410c}.ae-score-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}.ae-score-grid label{display:grid;gap:3px;border:1px solid var(--ae-border);border-radius:15px;padding:7px;background:color-mix(in srgb,var(--ae-primary) 3%,var(--ae-card))}.ae-score-grid span{font-size:11.5px;font-weight:950}.ae-score-grid small{font-size:10px;color:var(--ae-muted)}.ae-score-input{width:100%;height:36px;min-height:36px;border:1px solid var(--ae-border);border-radius:12px;background:var(--ae-card);color:var(--ae-text);padding:0 8px;font:inherit;font-weight:950}.ae-result-row{display:flex;gap:8px;flex-wrap:wrap;color:var(--ae-muted);font-size:11.5px;border-top:1px solid var(--ae-border);margin-top:8px;padding-top:8px}.ae-result-row b{color:var(--ae-text)}
.ae-entry-projection-warning{max-width:1180px;margin:0 auto 10px;padding:11px 13px;border:1px solid #f59e0b;border-radius:14px;background:color-mix(in srgb,#f59e0b 10%,var(--ae-card));display:grid;gap:3px}.ae-entry-projection-warning span{font-size:12px;color:var(--ae-muted)}.ae-assessment-group{display:block!important;margin:0 0 2px!important;color:var(--ae-primary)!important;font-size:9px!important;letter-spacing:.02em;text-transform:none!important}.ae-table-card{max-width:1180px;margin:0 auto;border-radius:20px;overflow:hidden}.ae-table-scroll{overflow:auto;max-height:72dvh}table{width:100%;border-collapse:separate;border-spacing:0;min-width:760px}th,td{border-bottom:1px solid var(--ae-border);padding:8px 9px;text-align:left;vertical-align:middle;font-size:12.5px}th{position:sticky;top:0;background:var(--ae-card);z-index:1;color:var(--ae-muted);font-size:10.5px;text-transform:uppercase}th span,td span{display:block;color:var(--ae-muted);font-size:10.5px;margin-top:1px}td .ae-score-input{min-width:84px}.ae-empty-table{padding:18px;color:var(--ae-muted);text-align:center}
.ae-empty,.ae-state{max-width:720px;margin:10px auto;border-radius:22px;padding:22px;text-align:center}.ae-empty-icon{font-size:28px}.ae-empty h3,.ae-state h2{margin:7px 0 4px}.ae-empty p,.ae-state p{margin:0;color:var(--ae-muted);font-size:13px}.ae-spinner{width:30px;height:30px;border:3px solid rgba(148,163,184,.35);border-top-color:var(--ae-primary);border-radius:999px;margin:0 auto 10px;animation:ae-spin 1s linear infinite}.ae-state-button{margin-top:12px;border:1px solid transparent;border-radius:14px;padding:10px 12px;font-weight:950;background:var(--ae-primary);color:#fff}
.ae-analysis-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;max-width:1180px;margin:0 auto}.ae-analysis{border-radius:18px;padding:12px}.ae-analysis span{display:block;color:var(--ae-muted);font-size:11.5px;font-weight:950}.ae-analysis strong{font-size:26px}.ae-analysis p{margin:5px 0 0;color:var(--ae-muted);font-size:12.5px}.ae-analysis.ae-wide{grid-column:1/-1}.ae-analysis.ae-wide p{display:flex;justify-content:space-between;border-top:1px solid var(--ae-border);padding-top:7px}
.ae-sheet-backdrop{position:fixed;inset:0;z-index:50;background:rgba(15,23,42,.48);display:flex;align-items:flex-end;justify-content:center;padding:12px}.ae-sheet{width:min(680px,100%);max-height:88dvh;overflow:auto;border-radius:26px;padding:14px}.ae-sheet-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:12px}.ae-sheet-head h2{margin:0}.ae-sheet-head p{margin:2px 0 0;color:var(--ae-muted);font-size:13px}.ae-sheet-head button{border:1px solid var(--ae-border);background:var(--ae-card);border-radius:12px;width:36px;height:36px;color:var(--ae-text)}.ae-form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.ae-form-grid label{display:grid;gap:5px;font-size:12px;color:var(--ae-muted);font-weight:850}.ae-sheet-actions{display:flex;justify-content:flex-end;gap:8px;border-top:1px solid var(--ae-border);padding-top:12px;margin-top:12px}.ae-sheet-actions button{border:1px solid var(--ae-border);border-radius:14px;padding:10px 12px;background:var(--ae-card);color:var(--ae-text);font-weight:950}.ae-sheet-actions .ae-primary{background:var(--ae-primary);color:#fff;border-color:transparent}.ae-more-sheet{display:grid;gap:8px}.ae-more-sheet .ae-sheet-head{margin-bottom:4px}.ae-more-sheet>button{display:grid;grid-template-columns:auto 1fr;gap:2px 10px;text-align:left;border:1px solid var(--ae-border);background:var(--ae-card);color:var(--ae-text);border-radius:16px;padding:11px;font-weight:950}.ae-more-sheet>button span:first-child{grid-row:1/3;font-size:18px}.ae-more-sheet>button small{display:block;color:var(--ae-muted);font-size:11.5px;font-weight:700}.ae-more-sheet>button.active{border-color:var(--ae-primary);color:var(--ae-primary);background:color-mix(in srgb,var(--ae-primary) 7%,var(--ae-card))}
.ae-toast{position:fixed;z-index:80;left:12px;right:12px;bottom:12px;max-width:720px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:10px;border-radius:18px;padding:12px 14px;color:#fff;box-shadow:0 18px 40px rgba(15,23,42,.28);font-weight:850}.ae-toast.success{background:#16a34a}.ae-toast.error{background:#dc2626}.ae-toast.info{background:#2563eb}.ae-toast button{border:0;background:rgba(255,255,255,.18);color:#fff;border-radius:10px;width:30px;height:30px}
@media (min-width:760px){.ae-page{padding:14px}.ae-list{grid-template-columns:repeat(2,minmax(0,1fr))}.ae-score-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.ae-sheet-backdrop{align-items:center}.ae-analysis-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
@media (min-width:1120px){.ae-list.ae-entry-list{grid-template-columns:repeat(3,minmax(0,1fr))}.ae-list.ae-picker-list{grid-template-columns:repeat(2,minmax(0,1fr))}.ae-score-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:520px){.ae-page{padding:7px}.ae-search-card{border-radius:18px}.ae-session-strip{grid-template-columns:auto 1fr auto auto}.ae-session-strip button{padding:8px 9px}.ae-score-grid,.ae-form-grid{grid-template-columns:1fr}th,td{padding:7px}.ae-sheet{border-radius:22px}.ae-analysis-grid{grid-template-columns:1fr}}

@media (min-width:980px){
  .ae-sheet-backdrop{
    top:var(--eds-shell-top-offset,0px);
    right:0;
    bottom:0;
    left:var(--portal-content-left,0px);
    width:auto;
    max-width:calc(100vw - var(--portal-content-left,0px));
    min-width:0;
    overflow-x:hidden;
  }

  .ae-sheet{
    min-width:0;
    max-width:calc(100vw - var(--portal-content-left,0px) - 20px);
  }
}


.assessment-excel-footer-actions{display:flex;justify-content:flex-end;gap:8px;flex-wrap:wrap}.assessment-excel-footer-actions button{min-height:40px;border-radius:12px;padding:0 14px;border:1px solid var(--ae-border);font-weight:900}.assessment-excel-footer-actions button.secondary{background:var(--ae-card);color:var(--ae-text)}.assessment-excel-footer-actions button.primary{background:var(--ae-primary);border-color:var(--ae-primary);color:#fff}.assessment-excel-footer-actions button:disabled{opacity:.5;cursor:not-allowed}.assessment-excel-stage{display:grid;gap:14px}.assessment-excel-stage-head h3{margin:0;font-size:15px}.assessment-excel-stage-head p{margin:5px 0 0;color:var(--ae-muted);font-size:12px;line-height:1.5}.assessment-excel-context-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.assessment-excel-context-grid label{display:grid;gap:5px}.assessment-excel-context-grid label>span{font-size:11px;font-weight:900;color:var(--ae-muted)}.assessment-excel-context-card,.assessment-excel-column-note{display:grid;gap:3px;padding:12px;border:1px solid var(--ae-border);border-radius:14px;background:var(--ae-card)}.assessment-excel-context-card span,.assessment-excel-context-card small,.assessment-excel-column-note span{font-size:11px;color:var(--ae-muted);line-height:1.45}.assessment-excel-result{text-align:center;padding:10px 0}.assessment-excel-result-icon{width:56px;height:56px;margin:0 auto 10px;border-radius:50%;display:grid;place-items:center;background:rgba(34,197,94,.13);color:#15803d;font-size:28px;font-weight:950}.assessment-excel-result h3{margin:0;font-size:17px}.assessment-excel-result>p{margin:6px auto 16px;max-width:620px;color:var(--ae-muted);font-size:12px;line-height:1.5}.assessment-excel-result-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:8px}.assessment-excel-result-grid span{padding:11px 7px;border-radius:12px;background:var(--ae-card);border:1px solid var(--ae-border)}.assessment-excel-result-grid span.danger{background:#fff1f0}.assessment-excel-result-grid strong{display:block;font-size:18px}.assessment-excel-result-grid small{display:block;margin-top:2px;color:var(--ae-muted);font-size:10px}.assessment-excel-result-errors{margin-top:14px;display:grid;gap:6px;text-align:left}.assessment-excel-result-errors div{display:grid;gap:2px;padding:9px 10px;border-radius:11px;background:#fff7f6;border:1px solid #ffd3cf}.assessment-excel-result-errors strong{font-size:11px}.assessment-excel-result-errors span{font-size:10px;color:#b42318}@media(max-width:720px){.assessment-excel-context-grid{grid-template-columns:1fr}.assessment-excel-result-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.assessment-excel-footer-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));width:100%}.assessment-excel-footer-actions button:only-child{grid-column:1/-1}}

/* ============================================================
   PORTAL-SAFE CENTERED MODALS + RESPONSIVE ASSESSMENT CONTEXT
   ============================================================ */
.ae-sheet-backdrop,
[class*="excel"][class*="backdrop"] {
  top: calc(var(--eds-shell-top-offset, 0px) + var(--portal-header-height, 48px)) !important;
  right: 0 !important;
  bottom: calc(64px + env(safe-area-inset-bottom, 0px)) !important;
  left: 0 !important;
  width: auto !important;
  height: auto !important;
  min-height: 0 !important;
  box-sizing: border-box !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 10px !important;
  overflow: hidden !important;
  z-index: 58 !important;
}

.ae-sheet,
[class*="excel"][class*="sheet"]:not([class*="backdrop"]),
[class*="excel"][class*="modal"]:not([class*="backdrop"]) {
  margin: 0 auto !important;
  max-height: calc(100% - 4px) !important;
  max-width: calc(100% - 2px) !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scroll-padding-bottom: 84px;
}

.ae-sheet-actions {
  position: sticky;
  bottom: 0;
  z-index: 3;
  background: linear-gradient(to top, var(--ae-card) 78%, transparent);
}

/* Replace the single horizontally-scrolling metadata line with a true
   responsive grid so labels never sit on top of one another. */
.ae-compact-meta {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(112px, 1fr)) !important;
  gap: 7px !important;
  overflow: visible !important;
  align-items: stretch;
}

.ae-compact-meta .ae-chip {
  min-width: 0;
  width: 100%;
  min-height: 32px;
  justify-content: center;
  text-align: center;
  white-space: normal !important;
  overflow-wrap: anywhere;
  line-height: 1.2;
}

/* Let the subject/session strip breathe on phones instead of squeezing
   title + Start + Save into one narrow row. */
@media (max-width: 560px) {
  .ae-session-strip {
    grid-template-columns: auto minmax(0, 1fr) !important;
    align-items: center;
  }

  .ae-session-strip > div {
    min-width: 0;
  }

  .ae-session-strip > div strong,
  .ae-session-strip > div small {
    overflow-wrap: anywhere;
  }

  .ae-session-strip > button {
    width: 100%;
  }

  .ae-session-strip > button:nth-last-child(2) {
    grid-column: 1 / 2;
  }

  .ae-session-strip > button:last-child {
    grid-column: 2 / 3;
  }

  .ae-compact-meta {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}

@media (max-width: 360px) {
  .ae-compact-meta {
    grid-template-columns: 1fr !important;
  }
}

@media (min-width: 980px) {
  .ae-sheet-backdrop,
  [class*="excel"][class*="backdrop"] {
    top: calc(var(--eds-shell-top-offset, 0px) + var(--portal-header-height, 48px)) !important;
    right: 0 !important;
    bottom: 0 !important;
    left: var(--portal-content-left, 0px) !important;
    max-width: calc(100vw - var(--portal-content-left, 0px)) !important;
    padding: 18px !important;
    z-index: 80 !important;
  }

  .ae-compact-meta {
    grid-template-columns: repeat(auto-fit, minmax(130px, max-content)) !important;
    justify-content: start;
  }

  .ae-compact-meta .ae-chip {
    width: auto;
    padding-inline: 11px;
  }
}

/* ============================================================
   ASSESSMENT FILTER / MORE MODALS — TRUE FULL-SCREEN PORTALS
   ============================================================ */
.ae-sheet-backdrop {
  --ae-bg: var(--bg, #f7f8fb);
  --ae-card: var(--card-bg, var(--surface, #ffffff));
  --ae-text: var(--text, var(--foreground, #111827));
  --ae-muted: var(--muted, var(--muted-foreground, #64748b));
  --ae-border: var(--border, rgba(15, 23, 42, .12));
  --ae-primary: var(--primary-color, #2563eb);

  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100dvh !important;
  max-width: none !important;
  min-height: 100dvh !important;
  z-index: 2147482000 !important;

  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  box-sizing: border-box !important;
  padding:
    calc(var(--eds-shell-top-offset, 0px) + var(--portal-header-height, 48px) + 10px)
    10px
    calc(82px + env(safe-area-inset-bottom, 0px))
    10px !important;

  overflow: hidden !important;

  background:
    color-mix(
      in srgb,
      #020617 62%,
      transparent
    ) !important;

  -webkit-backdrop-filter: blur(10px) saturate(.92);
  backdrop-filter: blur(10px) saturate(.92);
}

.ae-sheet-backdrop .ae-sheet {
  width: min(680px, calc(100vw - 20px)) !important;
  max-width: 100% !important;
  max-height: calc(100% - 4px) !important;
  min-height: 0 !important;
  margin: 0 !important;

  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;

  border: 1px solid var(--ae-border) !important;
  border-radius: 22px !important;
  background: var(--ae-card) !important;
  color: var(--ae-text) !important;
  box-shadow: 0 26px 80px rgba(2, 6, 23, .28) !important;
}

.ae-sheet-backdrop .ae-sheet-head {
  position: sticky;
  top: -14px;
  z-index: 5;

  margin: -14px -14px 12px;
  padding: 14px;
  border-bottom: 1px solid var(--ae-border);

  background: var(--ae-card);
}

.ae-sheet-backdrop .ae-sheet-head h2 {
  color: var(--ae-text) !important;
}

.ae-sheet-backdrop .ae-sheet-head p {
  color: var(--ae-muted) !important;
}

.ae-sheet-backdrop .ae-sheet-head > button {
  position: relative;
  z-index: 6;

  width: 44px !important;
  min-width: 44px !important;
  height: 44px !important;
  min-height: 44px !important;

  display: grid;
  place-items: center;

  border: 1px solid var(--ae-border) !important;
  border-radius: 999px !important;

  background:
    color-mix(
      in srgb,
      var(--ae-text) 6%,
      var(--ae-card)
    ) !important;

  color: var(--ae-text) !important;
  box-shadow: none !important;

  font-size: 20px;
  font-weight: 900;

  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  pointer-events: auto;
}

.ae-sheet-backdrop .ae-sheet-head > button:hover {
  background:
    color-mix(
      in srgb,
      var(--ae-primary) 10%,
      var(--ae-card)
    ) !important;

  border-color:
    color-mix(
      in srgb,
      var(--ae-primary) 36%,
      var(--ae-border)
    ) !important;
}

.ae-sheet-backdrop .ae-form-grid label {
  color: var(--ae-muted);
}

.ae-sheet-backdrop input,
.ae-sheet-backdrop select,
.ae-sheet-backdrop textarea {
  background: var(--ae-card) !important;
  color: var(--ae-text) !important;
  border-color: var(--ae-border) !important;
}

.ae-sheet-backdrop select option {
  background: var(--ae-card);
  color: var(--ae-text);
}

.ae-sheet-backdrop .ae-sheet-actions {
  position: sticky;
  bottom: -14px;
  z-index: 4;

  margin: 12px -14px -14px;
  padding: 12px 14px 14px;

  border-top: 1px solid var(--ae-border);

  background:
    linear-gradient(
      to top,
      var(--ae-card) 86%,
      color-mix(in srgb, var(--ae-card) 94%, transparent)
    );
}

.ae-sheet-backdrop .ae-sheet-actions button,
.ae-sheet-backdrop .ae-more-sheet > button {
  min-height: 46px;

  border-color: var(--ae-border) !important;
  background:
    color-mix(
      in srgb,
      var(--ae-text) 4%,
      var(--ae-card)
    ) !important;
  color: var(--ae-text) !important;

  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  pointer-events: auto;
}

.ae-sheet-backdrop .ae-sheet-actions .ae-primary {
  background: var(--ae-primary) !important;
  border-color: var(--ae-primary) !important;
  color: #ffffff !important;
}

.ae-sheet-backdrop .ae-more-sheet > button.active {
  background:
    color-mix(
      in srgb,
      var(--ae-primary) 10%,
      var(--ae-card)
    ) !important;
  border-color: var(--ae-primary) !important;
  color: var(--ae-primary) !important;
}

@media (prefers-color-scheme: dark) {
  .ae-sheet-backdrop {
    background:
      color-mix(
        in srgb,
        #020617 78%,
        transparent
      ) !important;
  }

  .ae-sheet-backdrop .ae-sheet-head > button {
    background: rgba(255, 255, 255, .12) !important;
    color: #f8fafc !important;
    border-color: rgba(255, 255, 255, .22) !important;
    box-shadow:
      0 4px 16px rgba(0, 0, 0, .28),
      inset 0 0 0 1px rgba(255, 255, 255, .04) !important;
  }

  .ae-sheet-backdrop .ae-sheet-head > button:hover {
    background: rgba(255, 255, 255, .18) !important;
    border-color: rgba(255, 255, 255, .32) !important;
  }
}

@media (max-width: 520px) {
  .ae-sheet-backdrop {
    padding:
      calc(var(--eds-shell-top-offset, 0px) + var(--portal-header-height, 48px) + 8px)
      8px
      calc(82px + env(safe-area-inset-bottom, 0px))
      8px !important;
  }

  .ae-sheet-backdrop .ae-sheet {
    width: calc(100vw - 16px) !important;
    border-radius: 20px !important;
  }

  .ae-sheet-backdrop .ae-more-sheet > button {
    min-height: 52px;
  }

  .ae-sheet-backdrop .ae-sheet-actions button {
    min-height: 48px;
    flex: 1 1 120px;
  }
}


/* ============================================================
   MODAL VISIBILITY HARDENING — STRONG BACKDROP + CLOSE BUTTON
   Applies to assessment portals and shared Excel portals rendered
   directly under document.body.
   ============================================================ */
.ae-sheet-backdrop,
.excel-export-overlay,
.excel-import-overlay {
  background: rgba(2, 6, 23, .66) !important;
  -webkit-backdrop-filter: blur(12px) saturate(.9) !important;
  backdrop-filter: blur(12px) saturate(.9) !important;
}

/* Branch Admin assessment — lean, neutral, scroll-efficient */
.ae-page{min-height:0;background:transparent;padding:4px 5px 20px;overflow-x:clip}
.ae-page .ae-search-card{display:none}
.ae-page .student-row,.ae-page .ae-score-card,.ae-page .ae-table-card,.ae-page .ae-session-strip{box-shadow:none;background:var(--ae-card);border:1px solid var(--ae-border)}
.ae-page .ae-list{gap:10px;align-items:stretch;max-width:none}
.ae-page .ae-picker-list .student-row{min-height:128px;align-items:center;padding:18px 16px;border-radius:13px;transform:none;box-shadow:none}
.ae-page .ae-picker-list .student-row:focus-visible,.ae-page .ae-picker-list .student-row:hover{border-color:var(--ae-primary)}
.ae-page .app-icon{background:var(--ae-bg)!important;color:var(--ae-text)!important;box-shadow:none!important}
.ae-page .ae-session-strip{padding:6px 10px;margin:4px auto 8px;border-radius:12px;min-height:44px}
.ae-page .ae-active-context{flex:1;min-width:0;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.ae-page .ae-active-context strong{font-size:13px}
.ae-page .ae-active-context small{font-size:11px;color:var(--ae-muted);white-space:nowrap}
.ae-page .ae-score-card{border-radius:13px;padding:11px;min-width:0;content-visibility:auto;contain-intrinsic-size:auto 230px}
.ae-page .ae-score-grid label{background:transparent;border-radius:9px;padding:6px;gap:2px}
.ae-page .ae-score-grid small{font-size:10px}
.ae-page .ae-score-head{align-items:center;justify-content:flex-start;gap:9px}
.ae-page .ae-score-head i{margin-left:auto;background:var(--ae-bg);color:var(--ae-muted);font-weight:650}
.ae-page .ae-score-head i.done,.ae-page .ae-score-head i.partial{background:var(--ae-bg);color:var(--ae-text)}
.ae-page .ae-student-label{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.ae-page .ae-student-label strong{font-size:12.5px;line-height:1.25}
.ae-page .ae-student-label small{font-size:10.5px;color:var(--ae-muted)}
.ae-page .ae-portrait{width:36px;height:36px;flex:0 0 36px;border-radius:50%;border:1px solid var(--ae-border);overflow:hidden;display:grid;place-items:center;background:var(--ae-bg);color:var(--ae-muted);font-size:14px;font-weight:700}
.ae-page .ae-portrait img{width:100%;height:100%;object-fit:cover;display:block}
.ae-page .ae-table-student{display:flex;gap:8px;align-items:center;min-width:155px}
.ae-page .ae-table-card{max-width:none;border-radius:12px}
.ae-page .ae-table-scroll{max-height:none;overflow:auto;overscroll-behavior-x:contain;-webkit-overflow-scrolling:touch}
.ae-page .ae-table-card tr{content-visibility:auto;contain-intrinsic-size:auto 57px}
.ae-page .ae-score-grid span{font-size:10.5px;font-weight:700}
.ae-page .ae-result-row{font-size:10.5px}
.ae-page .ae-compact-meta{display:none}
.ae-page .ae-score-head .ae-student-label span{font-size:10.5px;color:var(--ae-muted)}
@media(min-width:1120px){.ae-page .ae-list.ae-entry-list{grid-template-columns:repeat(4,minmax(0,1fr))}}
@media(min-width:760px){.ae-page .ae-list.ae-picker-list{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:759px){.ae-page{padding:2px 0 12px}.ae-page .ae-list.ae-picker-list{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.ae-page .ae-picker-list .student-row{padding:13px 10px;min-height:112px}.ae-page .ae-list.ae-entry-list{grid-template-columns:1fr}.ae-page .ae-score-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ae-page .ae-score-card{content-visibility:visible}}
@media(max-width:380px){.ae-page .ae-list.ae-picker-list{grid-template-columns:1fr}.ae-page .ae-score-grid{grid-template-columns:1fr}}
/* Excel is portaled outside .ae-page, so the styling must be global. */
.excel-export-overlay,
.excel-import-overlay {
  isolation: isolate;
}

.excel-export-close,
.excel-import-close,
.ae-sheet-backdrop .ae-sheet-head > button,
.ae-sheet-backdrop .ae-modal-close {
  position: relative !important;
  z-index: 20 !important;
  width: 42px !important;
  min-width: 42px !important;
  height: 42px !important;
  min-height: 42px !important;
  padding: 0 !important;
  display: grid !important;
  place-items: center !important;
  border: 1px solid rgba(15, 23, 42, .20) !important;
  border-radius: 999px !important;
  background: #ffffff !important;
  color: #111827 !important;
  opacity: 1 !important;
  visibility: visible !important;
  box-shadow: 0 5px 16px rgba(15, 23, 42, .16) !important;
  font-size: 20px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  cursor: pointer !important;
  pointer-events: auto !important;
}

.excel-export-close:hover,
.excel-import-close:hover,
.ae-sheet-backdrop .ae-sheet-head > button:hover,
.ae-sheet-backdrop .ae-modal-close:hover {
  border-color: color-mix(in srgb, var(--ae-primary, #2563eb) 42%, rgba(15, 23, 42, .20)) !important;
  background: color-mix(in srgb, var(--ae-primary, #2563eb) 8%, #ffffff) !important;
  color: #111827 !important;
}

@media (prefers-color-scheme: dark) {
  .ae-sheet-backdrop,
  .excel-export-overlay,
  .excel-import-overlay {
    background: rgba(2, 6, 23, .78) !important;
  }

  .excel-export-close,
  .excel-import-close,
  .ae-sheet-backdrop .ae-sheet-head > button,
  .ae-sheet-backdrop .ae-modal-close {
    border-color: rgba(255, 255, 255, .22) !important;
    background: #1f2937 !important;
    color: #ffffff !important;
    box-shadow: 0 5px 18px rgba(0, 0, 0, .36) !important;
  }
}


/* V4: dense, neutral score-entry workspace — preserve theme and fast scrolling. */
.ae-page { --ae-panel:color-mix(in srgb,var(--ae-card) 76%,var(--ae-bg) 24%); background:transparent; }
.ae-page .ae-score-card, .ae-page .ae-table-card,
.ae-page .ae-picker-list .student-row, .ae-page .ae-analysis {
  background:var(--ae-panel); border-color:color-mix(in srgb,var(--ae-border) 85%,var(--ae-muted) 15%);
  box-shadow:none; transform:none; transition:border-color .12s ease;
}
.ae-page .ae-picker-list .student-row { min-height:132px; }
.ae-page .ae-score-grid label { background:color-mix(in srgb,var(--ae-panel) 84%,var(--ae-bg) 16%); }
.ae-page .ae-table-scroll th { background:color-mix(in srgb,var(--ae-panel) 88%,var(--ae-bg) 12%); }
.ae-page .ae-table-scroll tbody tr:nth-child(even) { background:color-mix(in srgb,var(--ae-panel) 79%,var(--ae-bg) 21%); }
.ae-page .ae-table-scroll tbody tr:nth-child(odd) { background:var(--ae-panel); }
.ae-page .ae-table-scroll tbody tr { content-visibility:visible; }
.ae-page .ae-table-scroll td { background:transparent; }
.ae-page .ae-entry-topbar {display:flex;align-items:center;gap:7px;min-height:37px;margin:0 0 7px;min-width:0;white-space:nowrap;}
.ae-page .ae-entry-topbar button { flex:0 0 auto;min-height:30px;padding:5px 9px;border:1px solid var(--ae-border);border-radius:8px;background:var(--ae-panel);color:var(--ae-text);font-size:11px;font-weight:700;line-height:1.15;}
.ae-page .ae-entry-back {max-width:130px;}
.ae-page .ae-entry-location { flex:1 1 0;min-width:0;overflow:hidden;text-overflow:ellipsis;font-size:12px;font-weight:650;color:var(--ae-text); }
.ae-page .ae-entry-count { flex:0 0 auto;color:var(--ae-muted);font-size:11px;font-variant-numeric:tabular-nums; }
.ae-page .ae-entry-topbar .ae-entry-save {background:var(--ae-primary);color:#fff;border-color:transparent;}
.ae-page .ae-entry-topbar button:disabled {opacity:.55;}
.ae-filter-search {display:grid;gap:5px;margin-bottom:12px;font-size:12px;font-weight:700;color:var(--ae-muted);}
.ae-filter-search input {min-height:40px;border:1px solid var(--ae-border);border-radius:10px;padding:0 11px;background:var(--ae-card);color:var(--ae-text);}
@media(max-width:759px){
 .ae-page .ae-entry-topbar{gap:4px;}
 .ae-page .ae-entry-back{padding:5px 7px;max-width:35px;}
 .ae-page .ae-entry-back span{display:none;}
 .ae-page .ae-entry-location{font-size:11px;}
 .ae-page .ae-entry-count{font-size:10px;}
 .ae-page .ae-entry-topbar button{padding:5px 7px;font-size:10px;}
 .ae-page .ae-picker-list .student-row{min-height:120px;}
}
@media(min-width:1120px){.ae-page .ae-list.ae-entry-list{grid-template-columns:repeat(4,minmax(0,1fr));}}
@media(prefers-reduced-motion:reduce){.ae-page *, .ae-page *::before,.ae-page *::after{scroll-behavior:auto!important;animation-duration:0.01ms!important;transition-duration:0.01ms!important;}}

/* V25: filter-driven subject navigation; the exact ClassSubject id is offered
   alongside class/subject/term selectors to avoid ambiguous term records. */
.ae-filter-exact-subject { grid-column: 1 / -1; }
.ae-filter-empty-action { display:flex;justify-content:center;margin:10px auto; }
.ae-filter-empty-action button { padding:9px 16px;border-radius:10px;border:1px solid var(--ae-border);background:var(--ae-card);color:var(--ae-text);font-weight:750; }

/* V6 — quiet neutral records presentation matching Students/Teachers/Classes V5 */

.ae-page {
  --ae-bg:var(--bg,var(--background,#f2f4f7));
  --ae-card:var(--card-bg,var(--surface,#fff));
  --ae-panel:color-mix(in srgb,var(--ae-card) 91%,var(--ae-text,#182235) 9%);
  --ae-border:color-mix(in srgb,var(--border,#d4dae3) 85%,var(--ae-text,#182235) 15%);
  background:var(--ae-bg); padding:5px; min-height:0;
}
.ae-page .ae-score-card,.ae-page .ae-table-card,.ae-page .ae-analysis,
.ae-page .ae-picker-list .student-row,.ae-page .ae-list:not(.ae-picker-list) .student-row {
  background:color-mix(in srgb,var(--ae-card) 93%,var(--ae-text) 7%);
  border:1px solid var(--ae-border); box-shadow:none; border-radius:13px;
}
.ae-page .ae-picker-list .student-row {min-height:130px;}
.ae-page .ae-table-card {padding:4px; margin-top:2px;}
.ae-page .ae-table-scroll {border-radius:10px;}
.ae-page .ae-table-scroll table {background:color-mix(in srgb,var(--ae-card) 95%,var(--ae-text) 5%);}
.ae-page .ae-table-scroll th {position:sticky;top:0;z-index:2;background:color-mix(in srgb,var(--ae-card) 85%,var(--ae-text) 15%);}
.ae-page .ae-table-scroll tbody tr:nth-child(even) {background:color-mix(in srgb,var(--ae-card) 89%,var(--ae-text) 11%);}
.ae-page .ae-table-scroll tbody tr:nth-child(odd) {background:color-mix(in srgb,var(--ae-card) 95%,var(--ae-text) 5%);}
.ae-page .ae-table-scroll td {background:transparent;}
.ae-page .ae-score-grid label {background:color-mix(in srgb,var(--ae-card) 89%,var(--ae-text) 11%);border-radius:9px;}
.ae-page .ae-portrait {box-shadow:none;border-radius:12px;}
.ae-page .ae-score-card {box-shadow:none;}
.ae-page .ae-entry-topbar {margin-bottom:5px;}
.ae-page .ae-entry-topbar button {background:var(--ae-panel);}
.ae-page .ae-entry-topbar .ae-entry-save {background:var(--ae-primary);color:#fff;}
.ae-page .ae-analysis {box-shadow:none;}
@media(min-width:1024px){.ae-page .ae-list.ae-entry-list {grid-template-columns:repeat(4,minmax(0,1fr));}}
@media(max-width:639px){.ae-page {padding:3px;}}
@media(prefers-reduced-motion:reduce){.ae-page .student-row,.ae-page .ae-score-card {transition:none;}}

/* V23 FINAL — Mobile: one STUDENT card per row, with TWO assessment
   item cells side by side INSIDE the card. No squeezed student cards. */
@media (max-width: 759px) {
  .ae-page .ae-list.ae-entry-list {
    display: grid;
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 8px;
    width: 100%;
    max-width: none;
    align-items: stretch;
  }

  .ae-page .ae-entry-list > .ae-score-card {
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 10px;
    border-radius: 12px;
    content-visibility: visible;
  }

  .ae-page .ae-entry-list .ae-score-head {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    min-width: 0;
    margin-bottom: 8px;
  }

  .ae-page .ae-entry-list .ae-portrait {
    width: 36px;
    height: 36px;
    flex: 0 0 36px;
  }

  .ae-page .ae-entry-list .ae-student-label {
    flex: 1 1 0;
    min-width: 0;
  }
  .ae-page .ae-entry-list .ae-student-label strong {
    font-size: 12px;
    line-height: 1.3;
    overflow-wrap: anywhere;
  }
  .ae-page .ae-entry-list .ae-student-label span {
    font-size: 10px;
    overflow-wrap: anywhere;
  }
  .ae-page .ae-entry-list .ae-score-head i {
    flex: 0 0 auto;
    margin-left: auto;
    font-size: 10px;
  }

  /* This is the requested 2-COLUMN arrangement: assessment ITEMS. */
  .ae-page .ae-entry-list .ae-score-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 7px;
    width: 100%;
    min-width: 0;
  }

  .ae-page .ae-entry-list .ae-score-grid label {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 3px 4px;
    align-content: start;
    min-width: 0;
    padding: 7px;
    border-radius: 9px;
  }

  .ae-page .ae-entry-list .ae-score-grid label > span {
    min-width: 0;
    font-size: 10.5px;
    line-height: 1.22;
    font-weight: 700;
    overflow-wrap: anywhere;
  }
  .ae-page .ae-entry-list .ae-score-grid label > small {
    align-self: start;
    justify-self: end;
    font-size: 9.5px;
    white-space: nowrap;
  }
  .ae-page .ae-entry-list .ae-score-grid .ae-score-input {
    grid-column: 1 / -1;
    width: 100%;
    min-width: 0;
    min-height: 38px;
    height: 38px;
    padding: 0 9px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 750;
    font-variant-numeric: tabular-nums;
  }

  .ae-page .ae-entry-list .ae-result-row {
    margin-top: 8px;
    padding-top: 7px;
    font-size: 10.5px;
    line-height: 1.3;
  }
}

/* Preserve two assessment-item columns even on narrow Android phones.
   The separate class/subject picker grids are not affected. */
@media (max-width: 380px) {
  .ae-page .ae-list.ae-entry-list {
    grid-template-columns: minmax(0, 1fr) !important;
  }
  .ae-page .ae-entry-list .ae-score-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 6px;
  }
  .ae-page .ae-entry-list .ae-score-grid label {
    padding: 5px;
    gap: 3px;
  }
  .ae-page .ae-entry-list .ae-score-grid label > span { font-size: 10px; }
  .ae-page .ae-entry-list .ae-score-grid label > small { font-size: 9px; }
}


/* Assigned teacher identity: visible on class-subject cards, in both themes. */
.ae-page .ae-picker-list .ae-subject-teacher-name {
  display:block; color:var(--ae-text); font-weight:700;
  font-size:11.5px; line-height:1.45; white-space:normal;
  overflow-wrap:anywhere;
}
.ae-page .ae-picker-list .ae-subject-period-name {
  display:block; color:var(--ae-muted); font-size:10.5px; line-height:1.3;
}
`;var ao=c(62653),ap=c(29927),aq=c(28505),ar=c(18169),as=c(99867),at=c(69417),au=c(71888);let av=ar.A;function aw(a){return a?.reportType==="student_report"||!a?.reportType}let ax="student-report-print-zone",ay=String(aq.$S.STUDENTS||"students"),az=String(aq.$S.SCHOOLS||"schools"),aA=String(aq.$S.BRANCHES||"branches"),aB=String(aq.$S.SCHOOL_BRANCH_SETTINGS||aq.$S.SCHOOL_BRANCHES_SETTINGS||"schoolBranchSettings"),aC=String(aq.Vq.PHOTO||"photo"),aD=String(aq.Vq.LOGO||"logo");function aE(a,b,c){let d;return!a||c&&a&&Object.prototype.hasOwnProperty.call(a,c)&&!aF(a[c])?"":!(d=String(a[b]||""))||d.startsWith("blob:")||d.startsWith("data:image/")?"":d}function aF(a){if(null==a)return"";let b=String(a).trim();return b&&"0"!==b&&"undefined"!==b&&"null"!==b?b:""}String(aq.Vq.BANNER||"bannerImage");function aG(a,b){let c=aF(b);return c?a.find(a=>aF(a.id)===c)?.name||"Not found":"Not selected"}function aH(){let a=(0,j.f)(["schools","branches","schoolBranchSettings","academicStructures","academicPeriods","students","parents","teachers","classes","subjects","classSubjects","classTeachers","studentEnrollments","studentParents","assessmentApplicabilities","assessmentStructures","assessmentStructureItems","assessmentEntries","gradingStructures","gradeRules","attendance","studentAttendanceSummaries","computedResults","reportCards","reportCardItems","reportCardTemplates","reportCardTemplateSettings","reportCardTemplateAssignments","mediaAssets","mediaBlobs"]),b=(0,u.useRouter)(),{settings:c,loading:f}=(0,w.t)(),{activeSchool:g,activeBranch:h}=(0,x.c)(),l=(0,i.P)(),m=p(),{accountId:n,schoolId:o,branchId:q,authenticated:r,restoring:s,branchLoading:t}=l,v=c?.primaryColor||"var(--primary-color, #2563eb)",y=aF(c?.currentAcademicStructureId)||void 0,A=aF(c?.currentAcademicPeriodId)||void 0,{loading:B,setLoading:C}=(0,z.J)(),D=(0,e.useRef)(""),[E,F]=(0,e.useState)(""),[G,I]=(0,e.useState)(""),[J,K]=(0,e.useState)(!1),L=m.teacherId,M=[n,o,q,L].join(":"),N=[M,String(a)].join("::"),[O,P]=(0,e.useState)("student-report"),[Q,R]=(0,e.useState)(""),[S,T]=(0,e.useState)(!1),[U,V]=(0,e.useState)(!1),[W,X]=(0,e.useState)({branchId:q||void 0,academicStructureId:y,academicPeriodId:A,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"}),[Y,Z]=(0,e.useState)([]),[$,_]=(0,e.useState)([]),[aa,ab]=(0,e.useState)([]),[ac,ad]=(0,e.useState)([]),[ae,af]=(0,e.useState)([]),[ag,ah]=(0,e.useState)([]),[ai,aj]=(0,e.useState)([]),[ak,al]=(0,e.useState)([]),[am,an]=(0,e.useState)([]),[ar,aH]=(0,e.useState)([]),[aN,aO]=(0,e.useState)([]),[aP,aQ]=(0,e.useState)([]),[aR,aS]=(0,e.useState)([]),[aT,aU]=(0,e.useState)([]),[aV,aW]=(0,e.useState)([]),[aX,aY]=(0,e.useState)([]),[aZ,a$]=(0,e.useState)([]),[a_,a0]=(0,e.useState)([]),[a1,a2]=(0,e.useState)([]),[a3,a4]=(0,e.useState)([]),[a5,a6]=(0,e.useState)([]),[a7,a8]=(0,e.useState)([]),[a9,ba]=(0,e.useState)([]),[bb,bc]=(0,e.useState)([]),[bd,be]=(0,e.useState)([]),[bf,bg]=(0,e.useState)([]),[bh,bi]=(0,e.useState)([]),[bj,bk]=(0,e.useState)([]),[bl,bm]=(0,e.useState)([]),bn=()=>{bl.forEach(aq.hZ),bm([]),Z([]),_([]),ab([]),ad([]),af([]),ah([]),aj([]),al([]),an([]),aH([]),aO([]),aQ([]),aS([]),aU([]),aW([]),aY([]),a$([]),a0([]),a2([]),a4([]),a6([]),a8([]),ba([]),bc([]),be([]),bg([]),bi([]),bk([])},bo=async({ownerTable:a,ownerId:b,fieldKey:c,fallbackMediaId:d,nextUrls:e})=>{let f=aF(b);if(f){let b=await (0,aq.cg)({accountId:n||void 0,ownerTable:a,ownerId:f,fieldKey:c});if(b?.id&&!b.isDeleted&&!1!==b.active){let a=await (0,aq.fW)(String(b.id));if(a)return e.push(a),a}}let g=aF(d);if(!g)return"";let h=await k.db.mediaAssets?.get?.(g);if(!(h&&!h.isDeleted&&!1!==h.active&&(!n||h.accountId===n)&&h.ownerTable===a&&h.fieldKey===c&&(!f||String(h.ownerId||"")===String(f))))return"";let i=await (0,aq.fW)(g);return i&&e.push(i),i||""},bp=async()=>{if(!r||!n||!o||!q||!m.ready||!m.permitted||!L){bn(),F(""),I(N),C(!1);return}try{C(!0);let[a,b,c,d,e,f,i,j,l,m,p,r,s,t,u,v,w,x,y,z,A,B,D,E,G,H,I,J]=await Promise.all([k.db.schools.toArray(),k.db.branches.toArray(),k.db.schoolBranchSettings.toArray(),k.db.academicStructures.toArray(),k.db.academicPeriods.toArray(),k.db.students.toArray(),k.db.parents.toArray(),k.db.teachers.toArray(),k.db.classes.toArray(),k.db.subjects.toArray(),k.db.classSubjects.toArray(),k.db.classTeachers.toArray(),k.db.studentEnrollments.toArray(),k.db.studentParents.toArray(),k.db.assessmentApplicabilities.toArray(),k.db.assessmentStructures.toArray(),k.db.assessmentStructureItems.toArray(),k.db.assessmentEntries.toArray(),k.db.gradingStructures.toArray(),k.db.gradeRules.toArray(),k.db.attendance.toArray(),k.db.studentAttendanceSummaries?.toArray?.()||[],k.db.computedResults.toArray(),k.db.reportCards.toArray(),k.db.reportCardItems.toArray(),k.db.reportCardTemplates?.toArray?.()||[],k.db.reportCardTemplateSettings?.toArray?.()||[],k.db.reportCardTemplateAssignments?.toArray?.()||[]]),N=a=>aF(a.accountId)===aF(n)&&aF(a.schoolId)===o&&aF(a.branchId)===q&&!a.isDeleted,O=a.find(a=>aF(a.accountId)===aF(n)&&aF(a.id)===o&&!a.isDeleted)||(aF(g?.accountId)===aF(n)&&aF(g?.id)===o?g:void 0),P=b.find(a=>aF(a.accountId)===aF(n)&&aF(a.schoolId)===o&&aF(a.id)===q&&!a.isDeleted)||(aF(h?.accountId)===aF(n)&&aF(h?.schoolId)===o&&aF(h?.id)===q?h:void 0),Q=e.filter(N),R=E.filter(N),S=c.filter(N);S[0];let T=r.filter(a=>N(a)&&!1!==a.active),U=p.filter(a=>N(a)&&!1!==a.active),V=new Set([...T.filter(a=>aF(a.teacherId)===L).map(a=>aF(a.classId)),...U.filter(a=>aF(a.teacherId)===L).map(a=>aF(a.classId))].filter(Boolean)),W=s.filter(a=>N(a)&&!a.isDeleted&&V.has(aF(a.classId))),X=new Set(W.filter(a=>"active"===a.status).map(a=>aF(a.studentId)).filter(Boolean)),Y=U.filter(a=>V.has(aF(a.classId))),$=new Set(Y.map(a=>aF(a.id)).filter(Boolean)),aa=R.filter(a=>!a.isDeleted&&V.has(aF(a.classId))),ac=H.filter(a=>!a.isDeleted&&!1!==a.active&&!!aw(a)&&(!a.accountId||a.accountId===n)&&(!a.schoolId||String(a.schoolId??"")===String(o??""))&&(!a.branchId||String(a.branchId??"")===String(q??""))).sort((a,b)=>a.isDefault&&!b.isDefault?-1:!a.isDefault&&b.isDefault?1:String(a.name||"").localeCompare(String(b.name||""))),ae=I.filter(a=>!a.isDeleted&&!1!==a.active&&!!aw(a)&&(!a.accountId||a.accountId===n)&&(!a.schoolId||String(a.schoolId??"")===String(o??""))&&(!a.branchId||String(a.branchId??"")===String(q??""))),ag=J.filter(a=>!a.isDeleted&&!1!==a.active&&!!aw(a)&&(!a.accountId||a.accountId===n)&&(!a.schoolId||String(a.schoolId??"")===String(o??""))&&(!a.branchId||String(a.branchId??"")===String(q??""))),ai=[],ak=O?{...O,logo:await bo({ownerTable:az,ownerId:O.id,fieldKey:aD,fallbackMediaId:O.logoMediaId,nextUrls:ai})||aE(O,"logo","logoMediaId")}:void 0,am=P?{...P,logo:await bo({ownerTable:aA,ownerId:P.id,fieldKey:aD,fallbackMediaId:P.logoMediaId,nextUrls:ai})||aE(P,"logo","logoMediaId")}:void 0,ao=await Promise.all(S.map(async a=>({...a,logo:await bo({ownerTable:aB,ownerId:a.id,fieldKey:aD,fallbackMediaId:a.logoMediaId,nextUrls:ai})||aE(a,"logo","logoMediaId"),reportCardBackgroundImage:await bo({ownerTable:aB,ownerId:a.id,fieldKey:"reportCardBackgroundImage",fallbackMediaId:a.reportCardBackgroundImageMediaId,nextUrls:ai})||aE(a,"reportCardBackgroundImage","reportCardBackgroundImageMediaId"),reportCardWatermark:await bo({ownerTable:aB,ownerId:a.id,fieldKey:"reportCardWatermark",fallbackMediaId:a.reportCardWatermarkMediaId,nextUrls:ai})||aE(a,"reportCardWatermark","reportCardWatermarkMediaId"),reportCardSignatureImage:await bo({ownerTable:aB,ownerId:a.id,fieldKey:"reportCardSignatureImage",fallbackMediaId:a.reportCardSignatureImageMediaId,nextUrls:ai})||aE(a,"reportCardSignatureImage","reportCardSignatureImageMediaId")}))),ap=await Promise.all(f.filter(a=>N(a)&&!a.isDeleted&&X.has(aF(a.id))&&"withdrawn"!==a.status).map(async a=>({...a,photo:await bo({ownerTable:ay,ownerId:a.id,fieldKey:aC,fallbackMediaId:a.photoMediaId,nextUrls:ai})||aE(a,"photo","photoMediaId")}))),ar=new Set(Q.map(a=>aF(a.id)).filter(Boolean)),as=new Set(aa.map(a=>aF(a.id)).filter(Boolean));bl.forEach(a=>{ai.includes(a)||(0,aq.hZ)(a)}),bm(ai),Z(ak?[ak]:[]),_(am?[am]:[]),ab(ao),ad(d.filter(N)),af(Q),ah(ap);let at=t.filter(a=>N(a)&&X.has(aF(a.studentId))),au=new Set(at.map(a=>aF(a.parentId)).filter(Boolean));al(i.filter(a=>N(a)&&au.has(aF(a.id)))),aj(j.filter(a=>N(a)&&!1!==a.active)),aH(l.filter(a=>N(a)&&!1!==a.active&&V.has(aF(a.id)))),aO(m.filter(a=>N(a)&&!1!==a.active)),aQ(Y),aU(at),aS(W),an(T.filter(a=>V.has(aF(a.classId)))),aW(u.filter(a=>N(a)&&!1!==a.active&&(!a.classId||V.has(aF(a.classId)))&&(!a.classSubjectId||$.has(aF(a.classSubjectId))))),aY(v.filter(a=>N(a)&&!1!==a.active)),a$(w.filter(a=>N(a)&&!1!==a.active)),a0(x.filter(a=>N(a)&&!a.isDeleted&&(!a.classSubjectId||$.has(aF(a.classSubjectId)))&&(!a.classId||V.has(aF(a.classId)))&&(!a.studentId||X.has(aF(a.studentId))))),a2(y.filter(a=>N(a)&&!1!==a.active)),a4(z.filter(a=>N(a)&&!1!==a.active)),a6(A.filter(a=>N(a)&&!a.isDeleted&&(!a.classId||V.has(aF(a.classId)))&&(!a.studentId||X.has(aF(a.studentId))))),a8(B.filter(a=>N(a)&&(!a.classId||V.has(aF(a.classId)))&&(!a.studentId||X.has(aF(a.studentId))))),ba(D.filter(a=>N(a)&&!a.isDeleted&&(!a.classSubjectId||$.has(aF(a.classSubjectId)))&&(!a.classId||V.has(aF(a.classId)))&&(!a.studentId||X.has(aF(a.studentId))))),bc(aa),be(G.filter(a=>!!N(a)&&(!a.reportCardId||!!as.has(aF(a.reportCardId)))&&(!a.academicPeriodId||!!ar.has(aF(a.academicPeriodId))))),bg(ac),bi(ae),bk(ag),F(M),K(!1)}catch(a){console.error("Failed to load report data:",a),bn(),F(""),K(!0)}finally{I(N),C(!1)}},bq=(0,e.useMemo)(()=>{let a=new Map,b=new Set(ac.map(a=>aF(a.id))),c=new Set(ar.map(a=>aF(a.id))),d=new Map(ae.map(a=>[aF(a.id),a])),e=(e,f,g)=>{let h=aF(e),i=aF(f),j=aF(g);if(!h||!i||!j||!b.has(h)||!c.has(j))return;let k=d.get(i);!k||k.academicStructureId&&aF(k.academicStructureId)!==h||a.set(`${h}:${i}:${j}`,{academicStructureId:h,academicPeriodId:i,classId:j})};return aR.forEach(a=>{a.isDeleted||"active"!==a.status||e(a.academicStructureId,a.academicPeriodId,a.classId)}),aP.forEach(a=>{a.isDeleted||!1===a.active||e(a.academicStructureId,a.academicPeriodId,a.classId)}),[...a.values()]},[ac,ae,ar,aR,aP]),br=G===N&&!B,bs=!!(m.permitted&&m.ready&&E===M&&W.academicStructureId&&W.academicPeriodId&&W.classId&&ac.some(a=>aF(a.id)===aF(W.academicStructureId))&&ar.some(a=>aF(a.id)===aF(W.classId))&&m.allowedClassIds.has(aF(W.classId))&&ae.some(a=>aF(a.id)===aF(W.academicPeriodId)&&(!a.academicStructureId||aF(a.academicStructureId)===aF(W.academicStructureId)))),bt=(0,e.useMemo)(()=>ae.filter(a=>!W.academicStructureId||!a.academicStructureId||aF(a.academicStructureId)===aF(W.academicStructureId)),[ae,W.academicStructureId]),bu=(0,e.useMemo)(()=>h&&aF(h.id)===q?[h]:$,[h,q,$]),bv=(0,e.useMemo)(()=>{let a=new Set;return(aR.forEach(b=>{"active"!==b.status||W.academicStructureId&&b.academicStructureId!==W.academicStructureId||W.academicPeriodId&&b.academicPeriodId!==W.academicPeriodId||a.add(aF(b.classId))}),aP.forEach(b=>{!1===b.active||W.academicStructureId&&b.academicStructureId!==W.academicStructureId||W.academicPeriodId&&b.academicPeriodId&&b.academicPeriodId!==W.academicPeriodId||a.add(aF(b.classId))}),W.academicStructureId||W.academicPeriodId)?ar.filter(b=>!!aF(b.id)&&a.has(aF(b.id))):ar},[ar,aR,aP,W.academicStructureId,W.academicPeriodId]),bw=(0,e.useMemo)(()=>aP.filter(a=>(!W.classId||a.classId===W.classId)&&(!W.academicStructureId||a.academicStructureId===W.academicStructureId)&&(!W.academicPeriodId||!a.academicPeriodId||a.academicPeriodId===W.academicPeriodId)),[aP,W.classId,W.academicStructureId,W.academicPeriodId]),bx=(0,e.useMemo)(()=>{if(!W.classId&&!W.academicPeriodId)return ag;let a=new Set(aR.filter(a=>"active"===a.status&&(!W.classId||a.classId===W.classId)&&(!W.academicStructureId||a.academicStructureId===W.academicStructureId)&&(!W.academicPeriodId||a.academicPeriodId===W.academicPeriodId)).map(a=>aF(a.studentId)).filter(Boolean));return ag.filter(b=>!!aF(b.id)&&a.has(aF(b.id)))},[ag,aR,W.classId,W.academicStructureId,W.academicPeriodId]),by=(0,e.useMemo)(()=>({schools:Y,branches:bu,schoolBranchSettings:aa,academicStructures:ac,academicPeriods:ae,students:ag,parents:ak,studentParents:aT,teachers:ai,classes:ar,subjects:aN,classSubjects:aP,studentEnrollments:aR,classTeachers:am,assessmentApplicabilities:aV,assessmentStructures:aX,assessmentStructureItems:aZ,assessmentEntries:a_,gradingStructures:a1,gradeRules:a3,attendance:a5,studentAttendanceSummaries:a7,computedResults:a9,reportCards:bb,reportCardItems:bd}),[Y,bu,aa,ac,ae,ag,ak,aT,ai,ar,aN,aP,aR,am,aV,aX,aZ,a_,a1,a3,a5,a7,a9,bb,bd]),bz=(0,e.useMemo)(()=>bs?(0,at.EI)(by,W):{classReports:[],studentReport:void 0,warnings:[]},[by,W,bs]),bA=!!(ac.length&&ae.length&&ar.length&&ag.length),bB=!!(br&&!J&&E===M&&bq.length&&!bs&&D.current!==M),bC="class-reports"===O?bz.classReports.length>0:!!bz.studentReport,bD=(0,e.useMemo)(()=>$.find(a=>aF(a.id)===q)||bu.find(a=>aF(a.id)===q)||h||$[0]||bu[0],[h,q,$,bu]);g?.name||Y[0]?.name,bD?.name||h?.name||$[0]?.name,aG(ar,W.classId),aG(ae,W.academicPeriodId),aG(ac,W.academicStructureId);let bE=Q.trim().toLowerCase(),bF=(0,e.useMemo)(()=>bE?bx.filter(a=>`${a.fullName||a.name||""} ${a.admissionNumber||""} ${a.gender||""}`.toLowerCase().includes(bE)):bx,[bx,bE]),bG=(0,e.useMemo)(()=>bE?bv.filter(a=>`${a.name||""} ${a.code||""}`.toLowerCase().includes(bE)):bv,[bv,bE]);(0,e.useMemo)(()=>[W.academicStructureId,W.academicPeriodId,W.classId,W.classSubjectId,W.studentId,W.sortMode&&"position"!==W.sortMode?W.sortMode:void 0,"student-report"!==O?O:void 0].filter(Boolean).length,[W.academicStructureId,W.academicPeriodId,W.classId,W.classSubjectId,W.studentId,W.sortMode,O]),aG(ag,W.studentId),aG(bw.map(a=>{var b;let c;return{id:a.id,name:(b=a,c=aN.find(a=>a.id===b.subjectId),b.name||c?.name||`Subject ${b.subjectId||""}`)}}),W.classSubjectId),"class-reports"===O?bz.classReports.length:bz.studentReport,bz.warnings.length;let bH=bs&&bA&&("class-reports"===O?bz.classReports.length>0:!!bz.studentReport),bI=()=>{bH&&(0,as.f)({targetId:ax,mode:"class-reports"===O?"whole-class-reports":"single-student",orientation:"portrait",pageSize:"A4"})},bJ=(0,e.useMemo)(()=>{let a=bj.filter(a=>!1!==a.active&&aw(a));return a.find(a=>!0===a.isDefault&&(!a.scopeType||"branch"===a.scopeType)&&(!a.scopeId||String(a.scopeId??"")===String(q??"")))||a.find(a=>(!a.scopeType||"branch"===a.scopeType)&&(!a.scopeId||String(a.scopeId??"")===String(q??"")))||a.find(a=>!0===a.isDefault)||a[0]||null},[bj,q]),bK=(0,e.useMemo)(()=>{let a=aF(bJ?.templateId);return bf.find(b=>a&&aF(b.id)===a)||bf.find(a=>a.isDefault)||bf.find(a=>"classic_formal"===String(a.code||""))||bf[0]||(0,au.ed)(null)},[bJ,bf]),bL=(0,e.useMemo)(()=>{let a=aF(bJ?.templateSettingsId),b=aF(bK?.id);return bh.find(b=>a&&aF(b.id)===a)||bh.find(a=>b&&aF(a.templateId)===b)||bh.find(a=>!1!==a.active)||null},[bJ,bK,bh]),bM=(0,e.useMemo)(()=>(0,au.tH)({...au.gv,...bL||{}},bK||null,bJ||null),[bK,bJ,bL]);function bN(a){let b=aF(a?.report?.studentId||a?.studentId);if(b)return ag.find(a=>aF(a.id)===b)}function bO(a,b){let c;if(!a)return a;let d=b?.name||b?.branchName||b?.campusName||a.branchName||a.branchLabel||a.branch?.name||"",e=bN(a),f=(c=bN(a),c?.resolvedStudentPhotoUrl||c?.photo||a?.report?.resolvedStudentPhotoUrl||a?.report?.studentPhoto||"");return{...a,student:e||a.student,branch:b,branchId:b?.id||a.branchId,branchName:d,branchLabel:d,template:bK,templateSettings:bM,reportCardTemplate:bK,reportCardTemplateSettings:bM,reportCardTemplateAssignment:bJ,header:{...a.header,branch:b,branchId:b?.id||a.header?.branchId,branchName:d,branchLabel:d,template:bK,templateSettings:bM,reportCardTemplate:bK,reportCardTemplateSettings:bM,reportCardTemplateAssignment:bJ,branding:{...a.header?.branding||{},primaryColor:(a.header?.branding||{}).primaryColor||"var(--ba-primary, var(--primary-color, #2563eb))",branchName:(a.header?.branding||{}).branchName||d,logo:(a.header?.branding||{}).logo||a.header?.schoolBranchSetting?.logo||a.header?.branch?.logo||a.header?.school?.logo,reportCardBackgroundImage:(a.header?.branding||{}).reportCardBackgroundImage||a.header?.schoolBranchSetting?.reportCardBackgroundImage,reportCardWatermark:(a.header?.branding||{}).reportCardWatermark||a.header?.schoolBranchSetting?.reportCardWatermark,reportCardSignatureImage:(a.header?.branding||{}).reportCardSignatureImage||a.header?.schoolBranchSetting?.reportCardSignatureImage}},report:{...a.report,studentPhoto:f||a.report?.studentPhoto,resolvedStudentPhotoUrl:f||a.report?.resolvedStudentPhotoUrl,branch:b,branchId:b?.id||a.report?.branchId,branchName:d,branchLabel:d,template:bK,templateSettings:bM,reportCardTemplate:bK,reportCardTemplateSettings:bM,reportCardTemplateAssignment:bJ}}}return((0,H.TV)("reportsWorkspace",{search:R,filter:()=>T(!0),print:()=>bI(),more:()=>V(!0)}),s||t||f||!m.ready||!br||bB)?(0,d.jsx)(aJ,{primary:v,title:"Opening Teacher Report Cards...",text:"Checking branch students, classes, reports, results, attendance and report templates."}):r&&n?m.permitted?J?(0,d.jsx)(aI,{primary:v,icon:"⚠",title:"Unable to load report cards",text:"The local report data could not be loaded. Check the device's data and synchronization, then reopen Reports."}):o&&q?(0,d.jsxs)("main",{className:"ba-page student-reports-page",style:{"--ba-primary":v,"--primary-color":v},children:[(0,d.jsx)("style",{children:aM}),ar.length?!bs&&(0,d.jsxs)("section",{className:"ba-v6-scope-picker teacher-report-picker report-no-print","aria-label":"Select reporting context",children:[(0,d.jsxs)("div",{className:"teacher-report-picker-intro",children:[(0,d.jsx)("strong",{children:"Select a reporting class and term"}),(0,d.jsx)("span",{children:"Choose an academic structure, term and an assigned class to open its report cards."})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic structure"}),(0,d.jsxs)("select",{value:W.academicStructureId||"",onChange:a=>X(b=>({...b,academicStructureId:a.target.value||void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Structure"}),ac.map(a=>(0,d.jsx)("option",{value:String(a.id),children:a.name},String(a.id)))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic period"}),(0,d.jsxs)("select",{value:W.academicPeriodId||"",onChange:a=>X(b=>({...b,academicPeriodId:a.target.value||void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Period"}),bt.map(a=>(0,d.jsx)("option",{value:String(a.id),children:a.name},String(a.id)))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class"}),(0,d.jsxs)("select",{value:W.classId||"",onChange:a=>X(b=>({...b,classId:a.target.value||void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Class"}),bv.map(a=>(0,d.jsx)("option",{value:String(a.id),children:a.name},String(a.id)))]})]})]}):(0,d.jsx)(aI,{primary:v,icon:"\uD83D\uDCDA",title:"No assigned classes",text:"No Report Cards are available for your teacher assignments in this branch. Ask a school administrator to assign a class or subject.",inline:!0}),bs&&(bA&&bC?(0,d.jsx)("section",{className:"ba-print-card",children:(0,d.jsx)(ap.Ay,{printZoneId:ax,naturalWidth:794,children:bs&&bA?"class-reports"===O?bz.classReports.length?bz.classReports.map((a,b)=>(0,d.jsx)(av,{dataset:bO(a,bD),template:bK,settings:bM,compact:!0,mobilePreview:!1,pageBreakAfter:b<bz.classReports.length-1},a.report?.studentId||b)):null:bz.studentReport?(0,d.jsx)(av,{dataset:bO(bz.studentReport,bD),template:bK,settings:bM,mobilePreview:!1,pageBreakAfter:!1}):null:null})}):(0,d.jsx)(aI,{primary:v,icon:"\uD83D\uDCC4",title:"No report cards for this selection",text:"This class and term have no report available yet. Use Filter to choose another assigned class or reporting period.",inline:!0})),S&&(0,d.jsx)(ao.A,{themeSourceClass:".student-reports-page",onEscape:()=>T(!1),children:(0,d.jsx)(aK,{mode:O,filters:W,academicStructures:ac,academicPeriods:bt,filteredClasses:bG,filteredClassSubjects:bw,filteredStudents:bF,setMode:P,setFilters:X,search:Q,setSearch:R,onClose:()=>T(!1)})}),U&&(0,d.jsx)(ao.A,{themeSourceClass:".student-reports-page",onEscape:()=>V(!1),children:(0,d.jsx)(aL,{onRefresh:async()=>{V(!1),await bp()},onPrint:()=>{V(!1),bI()},onClose:()=>V(!1)})})]}):(0,d.jsxs)("main",{className:"ba-page",style:{"--ba-primary":v,"--primary-color":v},children:[(0,d.jsx)("style",{children:aM}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("h2",{children:"Branch workspace required"}),(0,d.jsx)("p",{children:"Teacher report cards are limited to your selected school branch. Choose your teacher workspace if the wrong branch is active."}),(0,d.jsx)("button",{type:"button",className:"ba-state-button",onClick:()=>b.push("/select-role"),children:"Go to Select Role"})]})]}):(0,d.jsx)(aJ,{primary:v,title:"Teacher workspace required",text:"Open an assigned teacher membership to view report cards."}):(0,d.jsx)(aJ,{primary:v,title:"Redirecting to login...",text:"You must sign in before opening student reports."})}function aI({primary:a,icon:b,title:c,text:e,inline:f=!1}){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("style",{children:aM}),(0,d.jsxs)("section",{className:`teacher-report-notice ${f?"is-inline":""}`,style:{"--ba-primary":a},role:"status",children:[(0,d.jsx)("div",{className:"teacher-report-notice-icon","aria-hidden":"true",children:b}),(0,d.jsx)("h2",{children:c}),(0,d.jsx)("p",{children:e})]})]})}function aJ({primary:a,title:b,text:c}){return(0,d.jsxs)("main",{className:"ba-page",style:{"--ba-primary":a,"--primary-color":a},children:[(0,d.jsx)("style",{children:aM}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("div",{className:"ba-spinner"}),(0,d.jsx)("h2",{children:b}),(0,d.jsx)("p",{children:c})]})]})}function aK({mode:a,filters:b,academicStructures:c,academicPeriods:e,filteredClasses:f,filteredClassSubjects:g,filteredStudents:h,setMode:i,setFilters:j,search:k,setSearch:l,onClose:m}){return(0,d.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Filters"}),(0,d.jsx)("p",{children:"Select an assigned class and its academic period to generate report cards."})]}),(0,d.jsx)("button",{type:"button",onClick:m,"aria-label":"Close filters",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-form compact",children:[(0,d.jsxs)("label",{className:"ba-v4-find",children:[(0,d.jsx)("span",{children:"Search"}),(0,d.jsx)("input",{type:"search",value:k,onChange:a=>l(a.target.value),placeholder:"Find a student, subject or class"})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Report Mode"}),(0,d.jsxs)("select",{value:a,onChange:a=>i(a.target.value),children:[(0,d.jsx)("option",{value:"student-report",children:"Single Student Report"}),(0,d.jsx)("option",{value:"class-reports",children:"Class Batch Reports"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Structure"}),(0,d.jsxs)("select",{value:b.academicStructureId||"",onChange:a=>j(b=>({...b,academicStructureId:aF(a.target.value)||void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select structure"}),c.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Period"}),(0,d.jsxs)("select",{value:b.academicPeriodId||"",onChange:a=>j(b=>({...b,academicPeriodId:aF(a.target.value)||void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select period"}),e.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class"}),(0,d.jsxs)("select",{value:b.classId||"",onChange:a=>j(b=>({...b,classId:aF(a.target.value)||void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select assigned class"}),f.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class Subject"}),(0,d.jsxs)("select",{value:b.classSubjectId||"",onChange:a=>j(b=>({...b,classSubjectId:aF(a.target.value)||void 0})),children:[(0,d.jsx)("option",{value:"",children:"All subjects"}),g.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name||`Subject ${a.subjectId||""}`},a.id))]})]}),"student-report"===a&&(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Student"}),(0,d.jsxs)("select",{value:b.studentId||"",onChange:a=>j(b=>({...b,studentId:aF(a.target.value)||void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select student"}),h.map(a=>(0,d.jsx)("option",{value:a.id,children:a.fullName||a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Sort Mode"}),(0,d.jsxs)("select",{value:b.sortMode||"position",onChange:a=>j(b=>({...b,sortMode:a.target.value})),children:[(0,d.jsx)("option",{value:"position",children:"Position"}),(0,d.jsx)("option",{value:"name",children:"Name"}),(0,d.jsx)("option",{value:"score",children:"Score"})]})]})]}),(0,d.jsxs)("div",{className:"ba-sheet-actions",children:[(0,d.jsx)("button",{type:"button",onClick:()=>j(a=>({...a,academicStructureId:void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"})),children:"Clear"}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:m,children:"Apply"})]})]})})}function aL({onRefresh:a,onPrint:b,onClose:c}){return(0,d.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet small",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"More"}),(0,d.jsx)("p",{children:"Quick report actions only."})]}),(0,d.jsx)("button",{type:"button",onClick:c,"aria-label":"Close menu",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-menu-list",children:[(0,d.jsxs)("button",{type:"button",onClick:b,children:[(0,d.jsx)("span",{children:"⎙"}),(0,d.jsx)("b",{children:"Print report"}),(0,d.jsx)("small",{children:"Print the current preview output"})]}),(0,d.jsxs)("button",{type:"button",onClick:a,children:[(0,d.jsx)("span",{children:"↻"}),(0,d.jsx)("b",{children:"Refresh"}),(0,d.jsx)("small",{children:"Reload local branch report records"})]})]})]})})}let aM=`
/* Teacher Reports V32: stable, non-flashing empty/error presentation. */
.teacher-report-picker-intro {grid-column:1/-1; display:grid; gap:4px; padding:2px 2px 5px;}
.teacher-report-picker-intro strong {font-size:14px;font-weight:850;}
.teacher-report-picker-intro span {font-size:12px;line-height:1.5;color:var(--muted,#64748b);}
.teacher-report-picker {margin:10px 0;}
.teacher-report-notice { min-height:220px; width:min(560px,100%); margin:22px auto;
 display:grid; place-items:center; align-content:center; gap:11px; padding:28px 22px;
 border:1px solid var(--border,rgba(15,23,42,.12)); border-radius:22px;
 background:var(--card-bg,var(--surface,#fff)); color:var(--text,#172033);
 box-shadow:0 8px 24px rgba(15,23,42,.04); text-align:center; }
.teacher-report-notice.is-inline { width:min(680px,100%); }
.teacher-report-notice-icon { width:48px; height:48px; border-radius:16px;
 display:grid; place-items:center; font-size:22px;
 background:color-mix(in srgb,var(--ba-primary) 11%,var(--surface,#fff)); }
.teacher-report-notice h2 { margin:0; font-size:17px; line-height:1.3; font-weight:800; }
.teacher-report-notice p { margin:0; max-width:400px; font-size:13px; line-height:1.6;
 color:var(--muted,#64748b); }

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


/* V4 records workspace: neutral surface, efficient scroll, no duplicated toolbars. */
.ba-page.student-reports-page, .ba-page.report-remarks-page { min-height:0; padding:3px 4px 18px; background:transparent; overflow-x:clip; }
.ba-page.student-reports-page .ba-search-card, .ba-page.report-remarks-page .ba-search-card,
.ba-page.report-remarks-page .ba-summary-line { display:none; }
.ba-page.student-reports-page .ba-print-card,
.ba-page.report-remarks-page .ba-remark-card,
.ba-page.report-remarks-page .ba-student-row,
.ba-page.report-remarks-page .ba-list,
.ba-page.report-remarks-page .ba-sheet {
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 83%,var(--bg,#f3f5f8) 17%);
  border-color:var(--border,rgba(15,23,42,.13));
  box-shadow:none;
}
.ba-page.student-reports-page .ba-print-card { margin:0; padding:5px; border-radius:11px; box-shadow:none; }
.ba-page.student-reports-page .ba-print-zone { padding:3px; overflow-x:auto; overscroll-behavior-inline:contain; }
.ba-page.report-remarks-page .ba-remark-card { margin-top:0; box-shadow:none; border-radius:11px; }
.ba-page.report-remarks-page .ba-student-row { border-radius:9px; box-shadow:none; transform:none; }
.ba-page.report-remarks-page .ba-list { gap:6px; }
.ba-page.report-remarks-page .ba-student-row:hover { transform:none; }
.ba-page .ba-v4-find { display:grid; gap:5px; grid-column:1/-1; font-size:12px; font-weight:700; color:var(--muted,#64748b); }
.ba-page .ba-v4-find input { min-height:40px; padding:0 10px; border-radius:9px; background:var(--input-bg,var(--surface,#fff)); color:var(--text,#111827); }
@media(max-width:760px){
 .ba-page.student-reports-page,.ba-page.report-remarks-page{padding:0 1px 14px;}
 .ba-page.student-reports-page .ba-print-card{padding:3px;border-radius:9px;}
 .ba-page.report-remarks-page .ba-remark-card{padding:9px;}
}
@media print {
  .ba-page.student-reports-page,.ba-page.report-remarks-page,
  .ba-page.student-reports-page .ba-print-card,
  .ba-page.student-reports-page .ba-print-zone {
    background:#fff!important;box-shadow:none!important;border:0!important;
    margin:0!important;padding:0!important;overflow:visible!important;
  }
}

/* V6 — quiet neutral records presentation matching Students/Teachers/Classes V5 */

.student-reports-page {background:var(--bg,var(--background,#f2f4f7));padding:5px;min-height:0;}
.student-reports-page .ba-print-card {margin:0; padding:5px; border-radius:13px;
  border:1px solid color-mix(in srgb,var(--border,#d4dae3) 85%,var(--text,#182235) 15%);
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#182235) 7%);box-shadow:none;}
/* Printed report templates are intentionally NOT restyled; only the preview frame changes. */
.student-reports-page .ba-print-zone {border-radius:10px;}
.ba-v6-scope-picker {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px;align-items:end;
  padding:8px;border:1px solid var(--border,#d4dae3);border-radius:12px;
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#182235) 7%);}
.ba-v6-scope-picker label {min-width:0;display:grid;gap:4px;}
.ba-v6-scope-picker label span {font-size:10px;color:var(--muted,#64748b);font-weight:700;}
.ba-v6-scope-picker select {width:100%;min-width:0;min-height:38px;padding:0 8px;border-radius:9px;
  background:var(--input-bg,var(--surface,#fff));border:1px solid var(--border,#d4dae3);
  color:var(--text,#182235);font-size:12px;}
@media(max-width:639px){.student-reports-page {padding:3px;}.ba-v6-scope-picker {grid-template-columns:1fr;}}
@media print {.ba-v6-scope-picker{display:none!important;}}


/* V14: printable document uses the full available preview canvas, without a chrome/header card. */
.ba-page.student-reports-page { width:100%; max-width:none; padding:0; margin:0; overflow:visible; }
.ba-page.student-reports-page > .ba-print-card { width:100%; max-width:none; min-width:0;
  padding:0!important; margin:0!important; border:0!important; border-radius:0!important;
  background:transparent!important; box-shadow:none!important; overflow:visible!important; }
.ba-page.student-reports-page .ba-fit-viewport { width:100%; max-width:100%; }
.ba-page.student-reports-page .ba-print-head, .ba-page.student-reports-page .ba-report-toolbar { display:none!important; }
@media print { .ba-page.student-reports-page .ba-fit-viewport { max-height:none!important; overflow:visible!important; } }
`;var aN=c(71349),aO=c(89585),aP=c(41490),aQ=c(58632),aR=c(45284),aS=c(26277);let aT="broadsheet-print-zone",aU=String(aq.$S.SCHOOLS||"schools"),aV=String(aq.$S.BRANCHES||"branches"),aW=String(aq.$S.SCHOOL_BRANCH_SETTINGS||aq.$S.SCHOOL_BRANCHES_SETTINGS||"schoolBranchSettings"),aX=String(aq.Vq.LOGO||"logo"),aY=String(aq.Vq.PHOTO||"photo"),aZ=String(aq.$S.STUDENTS||"students");function a$(a,b,c){let d;return!a||c&&a&&Object.prototype.hasOwnProperty.call(a,c)&&!a_(a[c])?"":!(d=String(a[b]||""))||d.startsWith("blob:")||d.startsWith("data:image/")?"":d}function a_(a){if(null==a)return"";let b=String(a).trim();return b&&"0"!==b&&"undefined"!==b&&"null"!==b?b:""}function a0(a,b){let c=a_(b);return c?a.find(a=>a_(a.id)===c)?.name||"Not found":"Not selected"}function a1(a){return String(a?.code||a?.templateCode||a?.layoutKey||a?.templateKey||"").trim()}function a2(a,b){if(!a)return a;let c=b?.name||b?.branchName||b?.campusName||a.branchName||a.branchLabel||a.branch?.name||a.branding?.branchName||"";return{...a,branch:b,branchId:b?.id||a.branchId,branchName:c,branchLabel:c,campusName:c,branding:{...a.branding||{},branchName:(a.branding||{}).branchName||c,branchLabel:(a.branding||{}).branchLabel||c,campusName:(a.branding||{}).campusName||c,resolvedLogoUrl:(a.branding||{}).resolvedLogoUrl||a.schoolBranchSetting?.logo||a.branch?.logo||a.school?.logo||"",logo:(a.branding||{}).logo||a.schoolBranchSetting?.logo||a.branch?.logo||a.school?.logo||"",resolvedReportCardBackgroundImageUrl:(a.branding||{}).resolvedReportCardBackgroundImageUrl||a.schoolBranchSetting?.reportCardBackgroundImage||"",reportCardBackgroundImage:(a.branding||{}).reportCardBackgroundImage||a.schoolBranchSetting?.reportCardBackgroundImage||"",resolvedReportCardWatermarkUrl:(a.branding||{}).resolvedReportCardWatermarkUrl||a.schoolBranchSetting?.reportCardWatermark||"",reportCardWatermark:(a.branding||{}).reportCardWatermark||a.schoolBranchSetting?.reportCardWatermark||"",resolvedReportCardSignatureImageUrl:(a.branding||{}).resolvedReportCardSignatureImageUrl||a.schoolBranchSetting?.reportCardSignatureImage||"",reportCardSignatureImage:(a.branding||{}).reportCardSignatureImage||a.schoolBranchSetting?.reportCardSignatureImage||""}}}function a3(){let a=(0,j.f)(["schools","branches","schoolBranchSettings","academicStructures","academicPeriods","students","parents","teachers","classes","subjects","classSubjects","classTeachers","studentEnrollments","studentParents","assessmentApplicabilities","assessmentStructures","assessmentStructureItems","assessmentEntries","gradingStructures","gradeRules","attendance","studentAttendanceSummaries","computedResults","reportCards","reportCardItems","studentReportSnapshots","studentPromotions","reportCardTemplates","reportCardTemplateSettings","reportCardTemplateAssignments","mediaAssets","mediaBlobs"]),b=(0,u.useRouter)(),{settings:c,loading:g}=(0,w.t)(),{activeSchool:h,activeBranch:l}=(0,x.c)(),m=(0,i.P)(),n=p(),{accountId:o,schoolId:q,branchId:r,authenticated:s,restoring:t,branchLoading:v}=m,y=n.teacherId,A=c?.primaryColor||"var(--primary-color, #2563eb)",B=a_(c?.currentAcademicStructureId)||void 0,C=a_(c?.currentAcademicPeriodId)||void 0,{loading:D,setLoading:E}=(0,z.J)(),[F,G]=(0,e.useState)(""),[I,J]=(0,e.useState)(!1),[K,L]=(0,e.useState)(""),M=[o,q,r,n.teacherId,String(a)].join("::"),N=F===M&&!D,[O,P]=(0,e.useState)("subject-broadsheet"),[Q,R]=(0,e.useState)(""),[S,T]=(0,e.useState)(!1),[U,V]=(0,e.useState)(!1);f().useRef("");let W=f().useRef(!1),[X,Y]=(0,e.useState)({branchId:r||void 0,academicStructureId:B,academicPeriodId:C,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"}),[Z,$]=(0,e.useState)([]),[_,aa]=(0,e.useState)([]),[ab,ac]=(0,e.useState)([]),[ad,ae]=(0,e.useState)([]),[af,ag]=(0,e.useState)([]),[ah,ai]=(0,e.useState)([]),[aj,ak]=(0,e.useState)([]),[al,am]=(0,e.useState)([]),[an,ar]=(0,e.useState)([]),[au,av]=(0,e.useState)([]),[aw,ax]=(0,e.useState)([]),[ay,az]=(0,e.useState)([]),[aA,aB]=(0,e.useState)([]),[aC,aD]=(0,e.useState)([]),[aE,aF]=(0,e.useState)([]),[aG,aH]=(0,e.useState)([]),[aI,aJ]=(0,e.useState)([]),[aK,aL]=(0,e.useState)([]),[aM,a3]=(0,e.useState)([]),[ba,bb]=(0,e.useState)([]),[bc,bd]=(0,e.useState)([]),[be,bf]=(0,e.useState)([]),[bg,bh]=(0,e.useState)([]),[bi,bj]=(0,e.useState)([]),[bk,bl]=(0,e.useState)([]),[bm,bn]=(0,e.useState)([]),[bo,bp]=(0,e.useState)([]),[bq,br]=(0,e.useState)([]),[bs,bt]=(0,e.useState)([]),[bu,bv]=(0,e.useState)([]),[bw,bx]=(0,e.useState)([]),by=()=>{bw.forEach(aq.hZ),bx([]),$([]),aa([]),ac([]),ae([]),ag([]),ai([]),ak([]),am([]),ar([]),av([]),ax([]),az([]),aB([]),aD([]),aF([]),aH([]),aJ([]),aL([]),a3([]),bb([]),bd([]),bf([]),bh([]),bj([]),bl([]),bn([]),bp([]),br([]),bt([]),bv([])},bz=async({ownerTable:a,ownerId:b,fieldKey:c,fallbackMediaId:d,nextUrls:e})=>{let f=a_(b);if(f){let b=await (0,aq.cg)({accountId:o||void 0,ownerTable:a,ownerId:f,fieldKey:c});if(b?.id&&!b.isDeleted&&!1!==b.active){let a=await (0,aq.fW)(String(b.id));if(a)return e.push(a),a}}let g=a_(d);if(!g)return"";let h=await k.db.mediaAssets?.get?.(g);if(!(h&&!h.isDeleted&&!1!==h.active&&(!o||h.accountId===o)&&h.ownerTable===a&&h.fieldKey===c&&(!f||String(h.ownerId||"")===String(f))))return"";let i=await (0,aq.fW)(g);return i&&e.push(i),i||""},bA=async()=>{if(!s||!o||!q||!r||!n.ready||!n.permitted||!y){by(),G(M),E(!1);return}try{E(!0);let[a,b,c,d,e,f,g,i,j,m,n,p,s,t,u,v,w,x,z,A,B,C,D,F,G,H,I,K,L,M]=await Promise.all([k.db.schools.toArray(),k.db.branches.toArray(),k.db.schoolBranchSettings.toArray(),k.db.academicStructures.toArray(),k.db.academicPeriods.toArray(),k.db.students.toArray(),k.db.parents.toArray(),k.db.teachers.toArray(),k.db.classes.toArray(),k.db.subjects.toArray(),k.db.classSubjects.toArray(),k.db.classTeachers.toArray(),k.db.studentEnrollments.toArray(),k.db.studentParents.toArray(),k.db.assessmentApplicabilities.toArray(),k.db.assessmentStructures.toArray(),k.db.assessmentStructureItems.toArray(),k.db.assessmentEntries.toArray(),k.db.gradingStructures.toArray(),k.db.gradeRules.toArray(),k.db.attendance.toArray(),k.db.studentAttendanceSummaries.toArray(),k.db.computedResults.toArray(),k.db.reportCards.toArray(),k.db.reportCardItems.toArray(),k.db.studentReportSnapshots.toArray(),k.db.studentPromotions.toArray(),k.db.reportCardTemplates?.toArray?.()||[],k.db.reportCardTemplateSettings?.toArray?.()||[],k.db.reportCardTemplateAssignments?.toArray?.()||[]]),N=a=>a_(a.accountId)===a_(o)&&a_(a.schoolId)===q&&a_(a.branchId)===r&&!a.isDeleted,O=a.find(a=>a_(a.accountId)===a_(o)&&a_(a.id)===q&&!a.isDeleted)||(h?.accountId===o&&h?.id===q?h:void 0),P=b.find(a=>a_(a.accountId)===a_(o)&&a_(a.schoolId)===q&&a_(a.id)===r&&!a.isDeleted)||(l?.accountId===o&&l?.schoolId===q&&l?.id===r?l:void 0),Q=e.filter(N),R=c.filter(N),S=n.filter(a=>N(a)&&!1!==a.active&&a_(a.teacherId)===y),T=p.filter(a=>N(a)&&!1!==a.active&&a_(a.teacherId)===y),U=new Set(S.map(a=>a_(a.classId)).filter(Boolean)),V=new Set(T.map(a=>a_(a.classId)).filter(Boolean)),W=new Set([...U,...V]),X=s.filter(a=>N(a)&&!a.isDeleted&&W.has(a_(a.classId))),Y=new Set(X.map(a=>a_(a.studentId)).filter(Boolean)),Z=n.filter(a=>N(a)&&!1!==a.active&&W.has(a_(a.classId))),_=new Set(Z.map(a=>a_(a.id)).filter(Boolean)),ab=F.filter(a=>N(a)&&!a.isDeleted&&W.has(a_(a.classId))),ad=[],af=O?{...O,logo:await bz({ownerTable:aU,ownerId:O.id,fieldKey:aX,fallbackMediaId:O.logoMediaId,nextUrls:ad})||a$(O,"logo","logoMediaId")}:void 0,ah=P?{...P,logo:await bz({ownerTable:aV,ownerId:P.id,fieldKey:aX,fallbackMediaId:P.logoMediaId,nextUrls:ad})||a$(P,"logo","logoMediaId")}:void 0,aj=await Promise.all(R.map(async a=>({...a,logo:await bz({ownerTable:aW,ownerId:a.id,fieldKey:aX,fallbackMediaId:a.logoMediaId,nextUrls:ad})||a$(a,"logo","logoMediaId"),reportCardBackgroundImage:await bz({ownerTable:aW,ownerId:a.id,fieldKey:"reportCardBackgroundImage",fallbackMediaId:a.reportCardBackgroundImageMediaId,nextUrls:ad})||a$(a,"reportCardBackgroundImage","reportCardBackgroundImageMediaId"),reportCardWatermark:await bz({ownerTable:aW,ownerId:a.id,fieldKey:"reportCardWatermark",fallbackMediaId:a.reportCardWatermarkMediaId,nextUrls:ad})||a$(a,"reportCardWatermark","reportCardWatermarkMediaId"),reportCardSignatureImage:await bz({ownerTable:aW,ownerId:a.id,fieldKey:"reportCardSignatureImage",fallbackMediaId:a.reportCardSignatureImageMediaId,nextUrls:ad})||a$(a,"reportCardSignatureImage","reportCardSignatureImageMediaId")}))),al=await Promise.all(f.filter(a=>N(a)&&Y.has(a_(a.id))).map(async a=>{let b=await bz({ownerTable:aZ,ownerId:a.id,fieldKey:aY,fallbackMediaId:a.photoMediaId,nextUrls:ad})||a$(a,"photo","photoMediaId");return{...a,photo:b,studentPhoto:b,resolvedStudentPhotoUrl:b}})),an=new Set(Q.map(a=>a_(a.id)).filter(Boolean)),ao=new Set(ab.map(a=>a_(a.id)).filter(Boolean));bw.forEach(a=>{ad.includes(a)||(0,aq.hZ)(a)}),bx(ad),$(af?[af]:[]),aa(ah?[ah]:[]),ac(aj),ae(d.filter(N)),ag(Q),ai(al),am(g.filter(a=>N(a)&&t.some(b=>N(b)&&Y.has(a_(b.studentId))&&a_(b.parentId)===a_(a.id)))),ak(i.filter(a=>N(a)&&(a_(a.id)===y||Z.some(b=>a_(b.teacherId)===a_(a.id))||p.some(b=>N(b)&&W.has(a_(b.classId))&&a_(b.teacherId)===a_(a.id))))),av(j.filter(a=>N(a)&&!1!==a.active&&W.has(a_(a.id)))),ax(m.filter(a=>N(a)&&!1!==a.active&&Z.some(b=>a_(b.subjectId)===a_(a.id)))),az(Z),aD(t.filter(a=>N(a)&&Y.has(a_(a.studentId)))),aB(X),ar(p.filter(a=>N(a)&&!1!==a.active&&W.has(a_(a.classId)))),aF(u.filter(a=>N(a)&&!1!==a.active&&(!a.classId||W.has(a_(a.classId)))&&(!a.classSubjectId||_.has(a_(a.classSubjectId))))),aH(v.filter(a=>N(a)&&!1!==a.active)),aJ(w.filter(a=>N(a)&&!1!==a.active)),aL(x.filter(a=>N(a)&&!a.isDeleted&&(!a.classSubjectId||_.has(a_(a.classSubjectId)))&&(!a.studentId||Y.has(a_(a.studentId))))),a3(z.filter(a=>N(a)&&!1!==a.active)),bb(A.filter(a=>N(a)&&!1!==a.active)),bd(B.filter(a=>N(a)&&!a.isDeleted&&(!a.studentId||Y.has(a_(a.studentId))))),bf(C.filter(a=>N(a)&&(!a.studentId||Y.has(a_(a.studentId))))),bh(D.filter(a=>N(a)&&!a.isDeleted&&(!a.classSubjectId||_.has(a_(a.classSubjectId)))&&(!a.studentId||Y.has(a_(a.studentId))))),bj(ab),bl(G.filter(a=>!!N(a)&&(!a.reportCardId||!!ao.has(a_(a.reportCardId)))&&(!a.academicPeriodId||!!an.has(a_(a.academicPeriodId))))),bn(H.filter(a=>!a.isDeleted&&a.accountId===o&&a.schoolId===q&&a.branchId===r&&(!a.classId||!!V.has(a_(a.classId)))&&(!a.studentId||!!Y.has(a_(a.studentId))))),bp(I.filter(a=>!a.isDeleted&&(!a.accountId||a.accountId===o)&&(!a.schoolId||a.schoolId===q)&&(!a.branchId||a.branchId===r)&&(!a.studentId||!!Y.has(a_(a.studentId)))&&(!a.fromClassId||!!V.has(a_(a.fromClassId))||!a.toClassId||!!V.has(a_(a.toClassId)))&&!0)),br(K.filter(a=>!a.isDeleted&&!1!==a.active&&(!a.accountId||a.accountId===o)&&(!a.schoolId||String(a.schoolId??"")===String(q??""))&&(!a.branchId||String(a.branchId??"")===String(r??""))&&["subject_broadsheet","class_broadsheet","annual_broadsheet"].includes(String(a.reportType||"")))),bt(L.filter(a=>!a.isDeleted&&!1!==a.active&&(!a.accountId||a.accountId===o)&&(!a.schoolId||String(a.schoolId??"")===String(q??""))&&(!a.branchId||String(a.branchId??"")===String(r??""))&&["subject_broadsheet","class_broadsheet","annual_broadsheet"].includes(String(a.reportType||"")))),bv(M.filter(a=>!a.isDeleted&&!1!==a.active&&(!a.accountId||a.accountId===o)&&(!a.schoolId||String(a.schoolId??"")===String(q??""))&&(!a.branchId||String(a.branchId??"")===String(r??""))&&["subject_broadsheet","class_broadsheet","annual_broadsheet"].includes(String(a.reportType||"")))),J(!1)}catch(a){console.error("Failed to load report data:",a),by(),J(!0)}finally{G(M),E(!1)}},bB=(0,e.useMemo)(()=>l&&l.id===r?[l]:_,[l,r,_]),bC=(0,e.useMemo)(()=>new Set(ay.filter(a=>a_(a.teacherId)===y).map(a=>a_(a.id)).filter(Boolean)),[ay,y]),bD=(0,e.useMemo)(()=>new Set(ay.filter(a=>a_(a.teacherId)===y).map(a=>a_(a.classId)).filter(Boolean)),[ay,y]),bE=(0,e.useMemo)(()=>new Set(an.filter(a=>a_(a.teacherId)===y).map(a=>a_(a.classId)).filter(Boolean)),[an,y]),bF="subject-broadsheet"===O?bD:bE,bG=bD.size>0,bH=bE.size>0,bI=a=>{P(a),W.current=!0,Y(a=>({...a,classId:void 0,classSubjectId:void 0,studentId:void 0}))},bJ=(0,e.useMemo)(()=>{let a=new Set;aA.forEach(b=>{"active"!==b.status||X.academicStructureId&&b.academicStructureId!==X.academicStructureId||X.academicPeriodId&&b.academicPeriodId!==X.academicPeriodId||a.add(a_(b.classId))}),ay.forEach(b=>{!1===b.active||X.academicStructureId&&b.academicStructureId!==X.academicStructureId||X.academicPeriodId&&b.academicPeriodId&&b.academicPeriodId!==X.academicPeriodId||a.add(a_(b.classId))});let b=au.filter(a=>!!a_(a.id)&&bF.has(a_(a.id)));return X.academicStructureId||X.academicPeriodId?b.filter(b=>!!a_(b.id)&&a.has(a_(b.id))):b},[au,aA,ay,X.academicStructureId,X.academicPeriodId,bF]),bK=(0,e.useMemo)(()=>ay.filter(a=>("subject-broadsheet"!==O||!!bC.has(a_(a.id)))&&("subject-broadsheet"===O||!!bE.has(a_(a.classId)))&&(!X.classId||a.classId===X.classId)&&(!X.academicStructureId||a.academicStructureId===X.academicStructureId)&&(!X.academicPeriodId||!a.academicPeriodId||a.academicPeriodId===X.academicPeriodId)),[ay,X.classId,X.academicStructureId,X.academicPeriodId,O,bC,bE]);(0,e.useMemo)(()=>{if(!X.classId&&!X.academicPeriodId)return ah;let a=new Set(aA.filter(a=>"active"===a.status&&(!X.classId||a.classId===X.classId)&&(!X.academicStructureId||a.academicStructureId===X.academicStructureId)&&(!X.academicPeriodId||a.academicPeriodId===X.academicPeriodId)).map(a=>a_(a.studentId)).filter(Boolean));return ah.filter(b=>!!a_(b.id)&&a.has(a_(b.id)))},[ah,aA,X.classId,X.academicStructureId,X.academicPeriodId]);let bL=(0,e.useMemo)(()=>aA.filter(a=>bF.has(a_(a.classId))),[bF,aA]),bM=(0,e.useMemo)(()=>new Set(bL.map(a=>a_(a.studentId)).filter(Boolean)),[bL]),bN=(0,e.useMemo)(()=>au.filter(a=>bF.has(a_(a.id))),[au,bF]),bO=(0,e.useMemo)(()=>ay.filter(a=>"subject-broadsheet"===O?bC.has(a_(a.id)):bE.has(a_(a.classId))),[ay,O,bC,bE]),bP=(0,e.useMemo)(()=>new Set(bO.map(a=>a_(a.id)).filter(Boolean)),[bO]),bQ=(0,e.useMemo)(()=>({schools:Z,branches:bB,schoolBranchSettings:ab,academicStructures:ad,academicPeriods:af,students:ah.filter(a=>bM.has(a_(a.id))),parents:al,studentParents:aC.filter(a=>bM.has(a_(a.studentId))),teachers:aj,classes:bN,subjects:aw,classSubjects:bO,studentEnrollments:bL,classTeachers:an,assessmentApplicabilities:aE.filter(a=>bP.has(a_(a.classSubjectId))),assessmentStructures:aG,assessmentStructureItems:aI,assessmentEntries:aK.filter(a=>bP.has(a_(a.classSubjectId))),gradingStructures:aM,gradeRules:ba,attendance:bc.filter(a=>bM.has(a_(a.studentId))),studentAttendanceSummaries:be.filter(a=>bM.has(a_(a.studentId))),computedResults:bg.filter(a=>bP.has(a_(a.classSubjectId))),reportCards:bi.filter(a=>bF.has(a_(a.classId))),reportCardItems:bk}),[Z,bB,ab,ad,af,ah,al,aC,aj,au,aw,ay,aA,an,aE,aG,aI,aK,aM,ba,bc,be,bg,bi,bk,bM,bN,bO,bP,bF,bL]),bR=(0,e.useMemo)(()=>{if("subject-broadsheet"!==O)return;let a=bs.find(a=>"subject_broadsheet"===String(a.reportType||"")&&!1!==a.active)||null;return(0,aR.zI)(a)},[O,bs]),bS=(0,e.useMemo)(()=>(0,at.EI)(bQ,X,bR),[bQ,X,bR]),bT=(0,e.useMemo)(()=>({schools:Z,branches:bB,schoolBranchSettings:ab,academicStructures:ad,academicPeriods:af,students:ah.filter(a=>bM.has(a_(a.id))),parents:al,studentParents:aC,teachers:aj,classes:bN,subjects:aw,studentReportSnapshots:bm.filter(a=>bF.has(a_(a.classId))),studentPromotions:bo.filter(a=>!a.fromClassId||bF.has(a_(a.fromClassId))||!a.toClassId||bF.has(a_(a.toClassId)))}),[Z,bB,ab,ad,af,ah,al,aC,aj,au,aw,bm,bo,bF,bM,bL,bN,bO]),bU=(0,e.useMemo)(()=>(0,aS.DB)(bT,{branchId:X.branchId,academicStructureId:X.academicStructureId,academicPeriodId:X.academicPeriodId,fromAcademicPeriodId:void 0,toAcademicPeriodId:X.academicPeriodId,classId:X.classId,studentId:X.studentId,subjectId:void 0,snapshotType:"all",decision:"all",mode:"annual-broadsheet",sortMode:X.sortMode,groupingMode:"class",subjectAggregationMode:"average",includePromotionRecords:!0,includeManualSnapshots:!0,includeTerminalSnapshots:!0,includeDeletedSnapshots:!1}),[bT,X]),bV=!!(ad.length&&af.length&&au.length&&ah.length),bW=(0,e.useMemo)(()=>_.find(a=>a.id===r)||bB.find(a=>a.id===r)||l||_[0]||bB[0],[l,r,_,bB]),bX=(0,e.useMemo)(()=>a2(bS.header,bW),[bS.header,bW]),bY=(0,e.useMemo)(()=>a2(bU.header,bW),[bU.header,bW]);h?.name||Z[0]?.name,bW?.name||l?.name||_[0]?.name,a0(au,X.classId),a0(af,X.academicPeriodId),a0(ad,X.academicStructureId);let bZ=Q.trim().toLowerCase(),b$=(0,e.useMemo)(()=>bZ?bJ.filter(a=>`${a.name||""} ${a.code||""}`.toLowerCase().includes(bZ)):bJ,[bJ,bZ]),b_=(0,e.useMemo)(()=>bZ?bK.filter(a=>{let b=aw.find(b=>b.id===a.subjectId),c=au.find(b=>b.id===a.classId);return`${c?.name||""} ${b?.name||""} ${a.name||""}`.toLowerCase().includes(bZ)}):bK,[au,bK,bZ,aw]);(0,e.useMemo)(()=>{if(!X.classSubjectId)return"Not selected";let a=ay.find(a=>a.id===X.classSubjectId);if(!a)return"Not found";let b=aw.find(b=>b.id===a.subjectId),c=au.find(b=>b.id===a.classId);return`${c?.name||"Class"} \xb7 ${b?.name||a.name||"Subject"}`},[ay,au,X.classSubjectId,aw]),(0,e.useMemo)(()=>[X.academicStructureId,X.academicPeriodId,X.classId,X.classSubjectId,X.sortMode&&"position"!==X.sortMode?X.sortMode:void 0,"subject-broadsheet"!==O?O:void 0].filter(Boolean).length,[X.academicStructureId,X.academicPeriodId,X.classId,X.classSubjectId,X.sortMode,O]);let b0=bV&&("subject-broadsheet"===O?bG:bH)&&("subject-broadsheet"===O?!!bS.subjectBroadsheet:"class-broadsheet"===O?!!bS.classBroadsheet:!!bU.annualBroadsheet),b1="class-broadsheet"===O?"class":"annual-broadsheet"===O?"annual":"subject",b2="class-broadsheet"===O?"class_broadsheet":"annual-broadsheet"===O?"annual_broadsheet":"subject_broadsheet",b3=(0,e.useMemo)(()=>{let a=bu.filter(a=>{var b;let c,d;return String(a.reportType||"")===b2&&!1!==a.active&&(b=a.scopeId,c=a_(b),d=a_(r),!c||!!d&&c===d)&&(!a.scopeType||"branch"===a.scopeType)});return a.find(a=>!0===a.isDefault)||a[0]||null},[b2,r,bu]),b4=(0,e.useMemo)(()=>{let a=a_(b3?.templateId),b=a1(b3),c=bq.filter(a=>String(a.reportType||"")===b2&&!1!==a.active);return c.find(b=>!!a&&a_(b.id)===a)||c.find(a=>b&&a1(a)===b)||c.find(a=>!0===a.isDefault)||c[0]||(0,aQ.nE)("broadsheet_classic")},[b3,b2,bq]),b5=(0,e.useMemo)(()=>{let a=a_(b3?.templateSettingsId),b=a_(b4?.id),c=a1(b4),d=bs.filter(a=>String(a.reportType||"")===b2&&!1!==a.active);return d.find(b=>!!a&&a_(b.id)===a)||d.find(a=>!!b&&a_(a.templateId)===b)||d.find(a=>c&&a1(a)===c)||d[0]||null},[b3,b2,b4,bs]),b6=(0,e.useMemo)(()=>(0,aQ.J9)({kind:b1,template:b4,settings:b5}),[b1,b5,b4]),b7=(0,e.useMemo)(()=>{let a=new Map;return ah.forEach(b=>{let c=a_(b.id);if(!c)return;let d=b.resolvedStudentPhotoUrl||b.studentPhoto||b.photo||"";d&&a.set(c,d)}),a},[ah]);function b8(a){return a&&Array.isArray(a.students)?{...a,students:a.students.map(a=>{let b=a.resolvedStudentPhotoUrl||a.studentPhoto||a.photo||b7.get(a_(a.studentId))||"";return{...a,photo:b,studentPhoto:b,resolvedStudentPhotoUrl:b}})}:a}let b9=()=>{b0&&(0,as.f)({targetId:aT,mode:"current-view",orientation:"landscape",pageSize:"A4",title:"annual-broadsheet"===O?"Annual Broadsheet":"class-broadsheet"===O?"Class Broadsheet":"Subject Broadsheet"})};(0,H.TV)("reportsWorkspace",{search:R,filter:()=>T(!0),print:()=>b9(),more:()=>V(!0)});let ca="subject-broadsheet"===O?!!(bS.subjectBroadsheet&&Array.isArray(bS.subjectBroadsheet.students)&&bS.subjectBroadsheet.students.length):"class-broadsheet"===O?!!bS.classBroadsheet:!!bU.annualBroadsheet,cb=!!(N&&!I&&"subject-broadsheet"===O&&!W.current&&af.length&&ay.length&&aA.length&&!ca&&K!==[o,q,r,y].join(":"));return t||v||g||!n.ready||!N||cb?(0,d.jsx)(a5,{primary:A,title:"Opening Broadsheets...",text:"Checking account, assigned branch, academic result data and broadsheet records."}):s&&o?n.permitted&&y?I?(0,d.jsx)(a4,{primary:A,icon:"⚠",title:"Unable to load broadsheets",text:"The local academic data could not be loaded. Check synchronization or reopen Reports."}):q&&r?(0,d.jsxs)("main",{className:"ba-page student-reports-page",style:{"--ba-primary":A},children:[(0,d.jsx)("style",{children:a9}),bV&&ca?(0,d.jsx)("section",{className:"ba-print-card",children:(0,d.jsx)(ap.Ay,{printZoneId:aT,naturalWidth:1122,children:(()=>{if(!bV||!ca)return(0,d.jsx)(a6,{icon:"\uD83D\uDCCA",title:"No broadsheet for this selection",text:"No prepared broadsheet is available for the selected class, subject and term. Use Filter to choose another assignment or academic period."});let a={template:b4,settings:b6,showWatermark:b6.showBroadsheetWatermark,generatedAt:new Date,pageBreakAfter:!1,mobilePreview:!1};return"subject-broadsheet"===O?(0,d.jsx)(aN.A,{...a,header:bX,broadsheet:b8(bS.subjectBroadsheet)}):"annual-broadsheet"===O?(0,d.jsx)(aP.A,{...a,header:bY,broadsheet:b8(bU.annualBroadsheet)}):(0,d.jsx)(aO.A,{...a,header:bX,broadsheet:b8(bS.classBroadsheet)})})()})}):(0,d.jsx)(a4,{primary:A,icon:"\uD83D\uDCCA",title:"No broadsheet for this selection",text:"Choose another assigned class, subject or reporting period with available assessment results using Filter."}),S&&(0,d.jsx)(ao.A,{themeSourceClass:".student-reports-page",onEscape:()=>T(!1),children:(0,d.jsx)(a7,{mode:O,filters:X,academicStructures:ad,academicPeriods:af,filteredClasses:b$,filteredClassSubjects:b_,subjects:aw,classes:au,setMode:bI,allowSubject:bG,allowClass:bH,setFilters:a=>{W.current=!0,Y(a)},search:Q,setSearch:R,onClose:()=>T(!1)})}),U&&(0,d.jsx)(ao.A,{themeSourceClass:".student-reports-page",onEscape:()=>V(!1),children:(0,d.jsx)(a8,{mode:O,setMode:a=>{bI(a),V(!1)},allowSubject:bG,allowClass:bH,onRefresh:async()=>{V(!1),await bA()},onPrint:()=>{V(!1),b9()},onClose:()=>V(!1)})})]}):(0,d.jsxs)("main",{className:"ba-page",style:{"--ba-primary":A},children:[(0,d.jsx)("style",{children:a9}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("h2",{children:"Branch workspace required"}),(0,d.jsx)("p",{children:"Teacher Broadsheets use your selected school branch workspace. Use Select Role again if the wrong branch is active."}),(0,d.jsx)("button",{type:"button",className:"ba-state-button",onClick:()=>b.push("/select-role"),children:"Go to Select Role"})]})]}):(0,d.jsx)(a4,{primary:A,icon:"\uD83D\uDD12",title:"Teacher membership required",text:"Choose an active teacher membership to view assigned Broadsheets."}):(0,d.jsx)(a5,{primary:A,title:"Redirecting to login...",text:"You must sign in before opening broadsheets."})}function a4({primary:a,icon:b,title:c,text:e}){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("style",{children:a9}),(0,d.jsxs)("section",{className:"teacher-report-notice",style:{"--ba-primary":a},role:"status",children:[(0,d.jsx)("div",{className:"teacher-report-notice-icon","aria-hidden":"true",children:b}),(0,d.jsx)("h2",{children:c}),(0,d.jsx)("p",{children:e})]})]})}function a5({primary:a,title:b,text:c}){return(0,d.jsxs)("main",{className:"ba-page",style:{"--ba-primary":a},children:[(0,d.jsx)("style",{children:a9}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("div",{className:"ba-spinner"}),(0,d.jsx)("h2",{children:b}),(0,d.jsx)("p",{children:c})]})]})}function a6({icon:a,title:b,text:c}){return(0,d.jsxs)("section",{className:"ba-empty",children:[(0,d.jsx)("div",{className:"ba-empty-icon",children:a}),(0,d.jsx)("h3",{children:b}),(0,d.jsx)("p",{children:c})]})}function a7({mode:a,filters:b,academicStructures:c,academicPeriods:e,filteredClasses:f,filteredClassSubjects:g,subjects:h,classes:i,setMode:j,allowSubject:k,allowClass:l,setFilters:m,search:n,setSearch:o,onClose:p}){return(0,d.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Filters"}),(0,d.jsx)("p",{children:"Choose the broadsheet scope. Branch stays locked to the assigned branch."})]}),(0,d.jsx)("button",{type:"button",onClick:p,"aria-label":"Close filters",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-form compact",children:[(0,d.jsxs)("label",{className:"ba-v4-find",children:[(0,d.jsx)("span",{children:"Search"}),(0,d.jsx)("input",{type:"search",value:n,onChange:a=>o(a.target.value),placeholder:"Find a student, subject or class"})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Broadsheet Mode"}),(0,d.jsxs)("select",{value:a,onChange:a=>j(a.target.value),children:[k&&(0,d.jsx)("option",{value:"subject-broadsheet",children:"Subject Broadsheet"}),l&&(0,d.jsx)("option",{value:"class-broadsheet",children:"Class Broadsheet"}),l&&(0,d.jsx)("option",{value:"annual-broadsheet",children:"Annual Broadsheet"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Structure"}),(0,d.jsxs)("select",{value:b.academicStructureId||"",onChange:a=>m(b=>({...b,academicStructureId:a_(a.target.value)||void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select structure"}),c.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Period"}),(0,d.jsxs)("select",{value:b.academicPeriodId||"",onChange:a=>m(b=>({...b,academicPeriodId:a_(a.target.value)||void 0,classId:void 0,classSubjectId:void 0,studentId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select period"}),e.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class"}),(0,d.jsxs)("select",{value:b.classId||"",onChange:a=>m(b=>({...b,classId:a_(a.target.value)||void 0,classSubjectId:void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select class"}),f.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),"subject-broadsheet"===a&&(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class Subject"}),(0,d.jsxs)("select",{value:b.classSubjectId||"",onChange:a=>m(b=>({...b,classSubjectId:a_(a.target.value)||void 0})),children:[(0,d.jsx)("option",{value:"",children:"Select class subject"}),g.map(a=>{let b=h.find(b=>b.id===a.subjectId),c=i.find(b=>b.id===a.classId);return(0,d.jsxs)("option",{value:a.id,children:[c?.name||"Class"," \xb7"," ",b?.name||a.name||"Subject"]},a.id)})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Sort Mode"}),(0,d.jsxs)("select",{value:b.sortMode||"position",onChange:a=>m(b=>({...b,sortMode:a.target.value})),children:[(0,d.jsx)("option",{value:"position",children:"Position"}),(0,d.jsx)("option",{value:"name",children:"Name"}),(0,d.jsx)("option",{value:"score",children:"Score"})]})]})]}),(0,d.jsxs)("div",{className:"ba-sheet-actions",children:[(0,d.jsx)("button",{type:"button",onClick:()=>m(a=>({...a,academicStructureId:void 0,academicPeriodId:void 0,classId:void 0,classSubjectId:void 0,studentId:void 0,sortMode:"position"})),children:"Clear"}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:p,children:"Apply"})]})]})})}function a8({mode:a,setMode:b,allowSubject:c,allowClass:e,onRefresh:f,onPrint:g,onClose:h}){return(0,d.jsx)("div",{className:"ba-sheet-backdrop report-no-print",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet small",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"More"}),(0,d.jsx)("p",{children:"Quick broadsheet actions only."})]}),(0,d.jsx)("button",{type:"button",onClick:h,"aria-label":"Close menu",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-menu-list",children:[[{mode:"subject-broadsheet",icon:"☷",label:"Subject Broadsheet",note:"One subject across a class"},{mode:"class-broadsheet",icon:"▦",label:"Class Broadsheet",note:"All subjects for one class"},{mode:"annual-broadsheet",icon:"\uD83D\uDCCA",label:"Annual Broadsheet",note:"Cumulative annual class view"}].filter(a=>"subject-broadsheet"===a.mode?c:e).map(c=>(0,d.jsxs)("button",{type:"button",className:a===c.mode?"active":"",onClick:()=>b(c.mode),children:[(0,d.jsx)("span",{children:c.icon}),(0,d.jsx)("b",{children:c.label}),(0,d.jsx)("small",{children:c.note})]},c.mode)),(0,d.jsxs)("button",{type:"button",onClick:g,children:[(0,d.jsx)("span",{children:"⎙"}),(0,d.jsx)("b",{children:"Print broadsheet"}),(0,d.jsx)("small",{children:"Print the current preview output"})]}),(0,d.jsxs)("button",{type:"button",onClick:f,children:[(0,d.jsx)("span",{children:"↻"}),(0,d.jsx)("b",{children:"Refresh"}),(0,d.jsx)("small",{children:"Reload local branch broadsheet records"})]})]})]})})}let a9=`
/* Teacher Broadsheets V32: calm, legible empty and error states. */
.teacher-report-notice { min-height:220px; width:min(560px,100%); margin:22px auto;
 display:grid; place-items:center; align-content:center; gap:11px; padding:28px 22px;
 border:1px solid var(--border,rgba(15,23,42,.12)); border-radius:22px;
 background:var(--card-bg,var(--surface,#fff)); color:var(--text,#172033);
 box-shadow:0 8px 24px rgba(15,23,42,.04); text-align:center; }
.teacher-report-notice-icon { width:48px; height:48px; border-radius:16px;
 display:grid; place-items:center; font-size:22px;
 background:color-mix(in srgb,var(--ba-primary) 11%,var(--surface,#fff)); }
.teacher-report-notice h2 { margin:0; font-size:17px; line-height:1.3; font-weight:800; }
.teacher-report-notice p { margin:0; max-width:400px; font-size:13px; line-height:1.6;
 color:var(--muted,#64748b); }

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


.ba-add-inline:disabled,
.ba-report-toolbar button:disabled {
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

/* Broadsheets golden additions */

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



/* Broadsheets compact overrides */
.student-reports-page .ba-print-card{margin-top:8px;border-radius:22px}
.student-reports-page .ba-print-head{padding:8px 10px}
.student-reports-page .ba-print-head strong{font-size:14px}
.student-reports-page .ba-print-head p{font-size:11px;margin-top:2px}
.student-reports-page .ba-print-zone{padding:8px}

@media (min-width:980px){
  .student-reports-page .ba-modal-backdrop,
  .student-reports-page .ba-sheet-backdrop{
    top:var(--eds-shell-top-offset,0px);
    right:0;
    bottom:0;
    left:var(--portal-content-left,0px);
    width:auto;
    max-width:calc(100vw - var(--portal-content-left,0px));
    min-width:0;
    overflow-x:hidden;
  }

  .student-reports-page .ba-modal,
  .student-reports-page .ba-sheet{
    min-width:0;
    max-width:calc(100vw - var(--portal-content-left,0px) - 20px);
  }
}


/* V4 records workspace: neutral surface, efficient scroll, no duplicated toolbars. */
.ba-page.student-reports-page, .ba-page.report-remarks-page { min-height:0; padding:3px 4px 18px; background:transparent; overflow-x:clip; }
.ba-page.student-reports-page .ba-search-card, .ba-page.report-remarks-page .ba-search-card,
.ba-page.report-remarks-page .ba-summary-line { display:none; }
.ba-page.student-reports-page .ba-print-card,
.ba-page.report-remarks-page .ba-remark-card,
.ba-page.report-remarks-page .ba-student-row,
.ba-page.report-remarks-page .ba-list,
.ba-page.report-remarks-page .ba-sheet {
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 83%,var(--bg,#f3f5f8) 17%);
  border-color:var(--border,rgba(15,23,42,.13));
  box-shadow:none;
}
.ba-page.student-reports-page .ba-print-card { margin:0; padding:5px; border-radius:11px; box-shadow:none; }
.ba-page.student-reports-page .ba-print-zone { padding:3px; overflow-x:auto; overscroll-behavior-inline:contain; }
.ba-page.report-remarks-page .ba-remark-card { margin-top:0; box-shadow:none; border-radius:11px; }
.ba-page.report-remarks-page .ba-student-row { border-radius:9px; box-shadow:none; transform:none; }
.ba-page.report-remarks-page .ba-list { gap:6px; }
.ba-page.report-remarks-page .ba-student-row:hover { transform:none; }
.ba-page .ba-v4-find { display:grid; gap:5px; grid-column:1/-1; font-size:12px; font-weight:700; color:var(--muted,#64748b); }
.ba-page .ba-v4-find input { min-height:40px; padding:0 10px; border-radius:9px; background:var(--input-bg,var(--surface,#fff)); color:var(--text,#111827); }
@media(max-width:760px){
 .ba-page.student-reports-page,.ba-page.report-remarks-page{padding:0 1px 14px;}
 .ba-page.student-reports-page .ba-print-card{padding:3px;border-radius:9px;}
 .ba-page.report-remarks-page .ba-remark-card{padding:9px;}
}
@media print {
  .ba-page.student-reports-page,.ba-page.report-remarks-page,
  .ba-page.student-reports-page .ba-print-card,
  .ba-page.student-reports-page .ba-print-zone {
    background:#fff!important;box-shadow:none!important;border:0!important;
    margin:0!important;padding:0!important;overflow:visible!important;
  }
}

/* V6 — quiet neutral records presentation matching Students/Teachers/Classes V5 */

.student-reports-page {background:var(--bg,var(--background,#f2f4f7));padding:5px;min-height:0;}
.student-reports-page .ba-print-card {margin:0;padding:5px;border-radius:13px;
 border:1px solid color-mix(in srgb,var(--border,#d4dae3) 85%,var(--text,#182235) 15%);
 background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#182235) 7%);box-shadow:none;}
.student-reports-page .ba-print-zone {border-radius:10px;}
.student-reports-page .ba-sheet,.student-reports-page .ba-card,.student-reports-page .ba-analysis {
 background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#182235) 7%);
 box-shadow:none;border-radius:13px;}
@media(max-width:639px){.student-reports-page{padding:3px;}}


/* V14: printable document uses the full available preview canvas, without a chrome/header card. */
.ba-page.student-reports-page { width:100%; max-width:none; padding:0; margin:0; overflow:visible; }
.ba-page.student-reports-page > .ba-print-card { width:100%; max-width:none; min-width:0;
  padding:0!important; margin:0!important; border:0!important; border-radius:0!important;
  background:transparent!important; box-shadow:none!important; overflow:visible!important; }
.ba-page.student-reports-page .ba-fit-viewport { width:100%; max-width:100%; }
.ba-page.student-reports-page .ba-print-head, .ba-page.student-reports-page .ba-report-toolbar { display:none!important; }
@media print { .ba-page.student-reports-page .ba-fit-viewport { max-height:none!important; overflow:visible!important; } }
`;function ba(a,b){let c=be(a).toLowerCase();return"position"===b?c.includes("first")||c.includes("1st")||c.includes("top")?"Outstanding class position. Maintain this excellent standard.":c.includes("upper")||c.includes("strong")?"A strong class position. Continue working consistently.":c.includes("middle")||c.includes("average")?"A fair class position. More focused effort can produce stronger results.":"The class position can improve with greater effort and consistency.":"attendance"===b?c.includes("excellent")||c.includes("outstanding")?"Excellent attendance. Keep maintaining this level of punctuality and commitment.":c.includes("good")||c.includes("very good")?"Good attendance. Continue to attend school regularly and punctually.":c.includes("satisfactory")||c.includes("fair")?"Attendance is satisfactory but should become more consistent.":"Attendance needs improvement. Regular and punctual attendance is strongly encouraged.":c.includes("excellent")||c.includes("outstanding")||"a"===c||c.startsWith("a1")?"Excellent performance. Keep up the outstanding work.":c.includes("very good")||c.includes("credit")||c.startsWith("b")?"Very good performance. Continue working hard.":c.includes("good")||c.includes("satisfactory")||c.startsWith("c")?"Good performance. Greater consistency will produce even better results.":c.includes("pass")||c.includes("fair")||c.startsWith("d")?"A fair performance. More focused effort is encouraged.":"Performance needs improvement. Work harder and seek support where necessary."}function bb(a){return a.filter(a=>Number.isFinite(a.minimum)&&Number.isFinite(a.maximum)&&a.maximum>=a.minimum).sort((a,b)=>b.minimum-a.minimum||b.maximum-a.maximum)}let bc=[{id:"excellent",label:"Excellent",minimum:80,maximum:100,remark:"Excellent performance. Keep up the outstanding work."},{id:"very-good",label:"Very good",minimum:70,maximum:79.99,remark:"Very good performance. Continue working hard."},{id:"good",label:"Good",minimum:60,maximum:69.99,remark:"Good performance. Greater consistency will produce even better results."},{id:"satisfactory",label:"Satisfactory",minimum:50,maximum:59.99,remark:"Satisfactory performance. More focused effort is encouraged."},{id:"needs-improvement",label:"Needs improvement",minimum:0,maximum:49.99,remark:"Performance needs improvement. Work harder and seek support where necessary."}];function bd(a){return null==a?"":String(a).trim()}function be(a){return String(a||"").trim()}function bf(a,b){let c=bd(a),d=bd(b);return!!c&&!!d&&c===d}function bg(){return{classTeacherRemark:"",headTeacherRemark:"",published:!1}}function bh(a,b,c){let d=be(a);return(be(d)?be(d).split(/\s+/).length:0)>=4?d:ba(b,c)}function bi(a,b=0){let c=Number(a);return Number.isFinite(c)?c:b}function bj(a,b){let c=a.computedReport;if("position"===b){let a=c?.overallPosition;return Number.isFinite(Number(a))?Number(a):void 0}if("attendance"===b){let a=c?.attendance?.attendancePercent;return Number.isFinite(Number(a))?Number(a):void 0}let d="total"===b?c?.total:c?.average;if(Number.isFinite(Number(d)))return Number(d);let e="total"===b?a.reportCard?.total:a.reportCard?.average;return Number.isFinite(Number(e))?Number(e):void 0}function bk(a,b){if(void 0!==a)return b.find(b=>a>=b.minimum&&a<=b.maximum)}function bl(a,b,c,d){return`${a}:${b}:${c}:${d}`}async function bm(a){return await (0,y.uJ)(a)||[]}function bn(a,b){if(!b)return"Not selected";let c=a.find(a=>a.id===b);return c?.name||c?.fullName||"Not found"}function bo(){(0,j.f)(["students","classes","academicStructures","academicPeriods","studentEnrollments","classTeachers","reportCards","subjects","classSubjects","assessmentApplicabilities","assessmentStructures","assessmentStructureItems","assessmentEntries","gradingStructures","gradeRules","attendance","studentAttendanceSummaries","computedResults","reportCardItems","mediaAssets","mediaBlobs"]);let{settings:a,loading:b}=(0,w.t)(),{activeSchool:c,activeBranch:f}=(0,x.c)(),g=(0,i.P)(),h=p(),k=h.teacherId,l=h.classTeacherClassIds,m=[...l].sort().join("|"),{accountId:n,schoolId:o,branchId:q,authenticated:r,restoring:t,branchLoading:u}=g,v=be(a?.primaryColor)||"var(--primary-color, #2563eb)",{loading:A,setLoading:B}=(0,z.J)(),[C,D]=(0,e.useState)(""),[E,F]=(0,e.useState)(""),[I,J]=(0,e.useState)(""),K=[n,o,q,k,m].join(":"),[L,M]=(0,e.useState)(!1),[N,O]=(0,e.useState)([]),[P,Q]=(0,e.useState)([]),[R,S]=(0,e.useState)([]),[T,U]=(0,e.useState)([]),[V,W]=(0,e.useState)([]),[X,Y]=(0,e.useState)([]),[Z,$]=(0,e.useState)([]),[_,aa]=(0,e.useState)([]),[ab,ac]=(0,e.useState)([]),[ad,ae]=(0,e.useState)([]),[af,ag]=(0,e.useState)([]),[ah,ai]=(0,e.useState)([]),[aj,ak]=(0,e.useState)([]),[al,am]=(0,e.useState)([]),[an,ap]=(0,e.useState)([]),[aq,ar]=(0,e.useState)([]),[as,au]=(0,e.useState)([]),[av,aw]=(0,e.useState)([]),[ax,ay]=(0,e.useState)(bd(a?.currentAcademicStructureId)||void 0),[az,aA]=(0,e.useState)(bd(a?.currentAcademicPeriodId)||void 0),[aB,aC]=(0,e.useState)(),[aD,aE]=(0,e.useState)(),[aF,aG]=(0,e.useState)("cards"),[aH,aI]=(0,e.useState)("class"),[aJ,aK]=(0,e.useState)(!1),[aL,aM]=(0,e.useState)(!1),aN=(0,e.useRef)(""),[aO,aP]=(0,e.useState)("all"),[aQ,aR]=(0,e.useState)(""),[aS,aT]=(0,e.useState)(!1),[aU,aV]=(0,e.useState)(!1),[aW,aX]=(0,e.useState)({}),[aY,aZ]=(0,e.useState)(""),[a$,a_]=(0,e.useState)(!1),[a0,a1]=(0,e.useState)(!1),[a2,a3]=(0,e.useState)("average"),a4="classTeacherRemark",[a5,a6]=(0,e.useState)(!1),[a7,a8]=(0,e.useState)(bc),[a9,bo]=(0,e.useState)({title:"Default percentage bands",detail:"Select a class and basis to derive bands from the reporting system."}),bx=(0,e.useRef)("");(0,e.useMemo)(()=>["eleeveon_report_remarks_basis_v1",n||"account",o||"school",q||"branch",k||"teacher"].join(":"),[q,o,n,k]);let by=a=>{var b,c;return b=a.accountId,(!n||!b||String(b)===String(n))&&bf(a.schoolId,o)&&bf(a.branchId,q)&&!!(c=a)&&!0!==c.isDeleted&&!1!==c.active},bz=()=>{O([]),Q([]),S([]),U([]),W([]),Y([]),$([]),aa([]),ac([]),ae([]),ag([]),ai([]),ak([]),am([]),ap([]),ar([]),au([]),aw([])},bA=async()=>{if(!h.ready||!h.permitted||!r||!n||!o||!q||!k){bz(),D(""),B(!1);return}try{B(!0),F("");let a=await Promise.all([bm("students"),bm("classes"),bm("academicStructures"),bm("academicPeriods"),bm("studentEnrollments"),bm("reportCards"),bm("subjects"),bm("classSubjects"),bm("assessmentApplicabilities"),bm("assessmentStructures"),bm("assessmentStructureItems"),bm("assessmentEntries"),bm("gradingStructures"),bm("gradeRules"),bm("attendance"),bm("studentAttendanceSummaries"),bm("computedResults"),bm("reportCardItems")]),b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=f.filter(a=>by(a)&&l.has(bd(a.classId))&&"withdrawn"!==a.status&&!1!==a.active),i=new Set(h.map(a=>bd(a.studentId)));O(b.filter(a=>by(a)&&"withdrawn"!==a.status&&i.has(bd(a.id))).sort((a,b)=>be(a.fullName).localeCompare(be(b.fullName)))),Q(c.filter(a=>by(a)&&l.has(bd(a.id))).sort((a,b)=>be(a.name).localeCompare(be(b.name)))),S(d.filter(a=>by(a)).sort((a,b)=>be(a.name).localeCompare(be(b.name)))),U(e.filter(a=>by(a)).sort((a,b)=>Number(a.order||0)-Number(b.order||0))),W(h),Y(g.filter(a=>by(a)&&l.has(bd(a.classId)))),$(a[6].filter(a=>by(a))),aa(a[7].filter(a=>by(a))),ac(a[8].filter(a=>by(a))),ae(a[9].filter(a=>by(a))),ag(a[10].filter(a=>by(a))),ai(a[11].filter(a=>by(a))),ak(a[12].filter(a=>by(a))),am(a[13].filter(a=>by(a))),ap(a[14].filter(a=>by(a))),ar(a[15].filter(a=>by(a))),au(a[16].filter(a=>by(a))),aw(a[17].filter(a=>by(a))),D(K)}catch(a){console.error("Failed to load teacher report remarks:",a),bz(),D(K),F("Could not load report remarks. Use More → Refresh to try again.")}finally{B(!1)}},bB=(0,e.useMemo)(()=>new Map(N.map(a=>[a.id,a])),[N]),bC=(0,e.useMemo)(()=>new Map(P.map(a=>[a.id,a])),[P]),bD=(0,e.useMemo)(()=>ax?T.filter(a=>bf(a.academicStructureId,ax)):T,[T,ax]),bE=(0,e.useMemo)(()=>{let a=new Set;return V.forEach(b=>{"withdrawn"===b.status||!l.has(bd(b.classId))||ax&&!bf(b.academicStructureId,ax)||(!az||bf(b.academicPeriodId,az))&&b.classId&&a.add(b.classId)}),X.forEach(b=>{!l.has(bd(b.classId))||ax&&!bf(b.academicStructureId,ax)||(!az||bf(b.academicPeriodId,az))&&b.classId&&a.add(b.classId)}),a},[az,ax,V,X,l]),bF=(0,e.useMemo)(()=>ax||az?P.filter(a=>l.has(bd(a.id))&&bE.has(bd(a.id))):P.filter(a=>l.has(bd(a.id))),[az,ax,bE,P,l]),bG=(0,G.D)({accountId:n,ownerTable:"students",rows:N,fields:[{fieldKey:"photo",mediaIdKey:"photoMediaId"}]}),bH=(0,e.useMemo)(()=>{let a=new Map;return X.forEach(b=>{b.studentId&&b.classId&&b.academicStructureId&&b.academicPeriodId&&a.set(bl(b.studentId,b.classId,b.academicStructureId,b.academicPeriodId),b)}),a},[X]),bI=(0,e.useMemo)(()=>({schools:c?[c]:[],branches:f?[f]:[],schoolBranchSettings:a?[a]:[],academicStructures:R,academicPeriods:T,students:N,teachers:[],parents:[],studentParents:[],classes:P,subjects:Z,classSubjects:_,studentEnrollments:V,classTeachers:[],assessmentApplicabilities:ab,assessmentStructures:ad,assessmentStructureItems:af,assessmentEntries:ah,gradingStructures:aj,gradeRules:al,attendance:an,studentAttendanceSummaries:aq,computedResults:as,reportCards:X,reportCardItems:av}),[f,c,T,R,ab,ah,af,ad,an,_,P,as,V,al,aj,av,X,a,aq,N,Z]),bJ=(0,e.useMemo)(()=>{if(!q||!ax||!az)return[];let a="group"===aH?bF.map(a=>bd(a.id)).filter(Boolean):aB?[aB]:[],b=[];for(let c of a){let a={branchId:q,academicStructureId:ax,academicPeriodId:az,classId:c,sortMode:"position"};try{for(let d of(0,at.Eh)(bI,a))b.push(Object.assign({},d,{_remarksClassId:c}))}catch(a){console.warn("Could not compute remarks for class",c,a)}}return b},[q,ax,az,aB,aH,bF,bI]),bK=(0,e.useMemo)(()=>new Map(bJ.map(a=>[`${bd(a._remarksClassId)}:${bd(a.studentId)}`,a])),[bJ]),bL=(0,e.useMemo)(()=>{let b=bJ.map(a=>a.subjectResults.length).filter(a=>a>0),c=b.length?Math.max(...b):_.filter(a=>bf(a.classId,aB)&&!1!==a.active&&!0!==a.isDeleted).length,d=new Map;bJ.forEach(a=>{a.subjectResults.forEach(a=>{let b=bd(a.gradingStructureId);b&&d.set(b,(d.get(b)||0)+1)})});let e=[...d.entries()].sort((a,b)=>b[1]-a[1])[0]?.[0]||bd(aj.find(a=>!0===a.default&&!1!==a.active)?.id)||bd(aj.find(a=>!1!==a.active)?.id),f=aj.find(a=>bf(a.id,e)),g=al.filter(a=>bf(a.gradingStructureId,e)&&!1!==a.active&&!0!==a.isDeleted).sort((a,b)=>Number(b.minScore||0)-Number(a.minScore||0));if("average"===a2)return{rules:bb(g.length?g.map((a,b)=>{let c=be(a.grade)||be(a.remark)||`Band ${b+1}`;return{id:bd(a.id)||`average-${b}`,label:c,minimum:bi(a.minScore),maximum:bi(a.maxScore,100),remark:bh(a.remark,c,"average")}}):bc),source:{title:be(f?.name)||"Default percentage grading",detail:g.length?`${g.length} grade bands from the active class grading configuration.`:"No active grading rules were found, so standard percentage bands are being used."},signature:["average",e,g.map(a=>[a.id,a.minScore,a.maxScore,a.grade,a.remark].join(":")).join("|")].join("::")};if("total"===a2){let a=Math.max(1,c),b=bJ.map(a=>Number(a.total)).filter(a=>Number.isFinite(a)&&a>=0).reduce((a,b)=>Math.max(a,b),0),d=100*a,h=Math.max(d,b,100),i=h/100,j=g.length?g:bc.map(a=>({id:a.id,minScore:a.minimum,maxScore:a.maximum,grade:a.label,remark:a.remark}));return{rules:bb(j.map((a,b)=>{let c=be(a.grade)||be(a.label)||`Band ${b+1}`;return{id:`total-${bd(a.id)||b}`,label:c,minimum:Number((bi(a.minScore??a.minimum)*i).toFixed(2)),maximum:Number((bi(a.maxScore??a.maximum,100)*i).toFixed(2)),remark:bh(a.remark,c,"total")}})),source:{title:be(f?.name)||"Percentage grading scaled to total",detail:`${a} active subject${1===a?"":"s"} give a configured maximum total of ${d}. ${b?`Current report data reaches ${Number(b.toFixed(2))}.`:"No computed total is available yet, so the configured class subject load is used."}`},signature:["total",e,a,h,j.map(a=>[a.id,a.minScore??a.minimum,a.maxScore??a.maximum,a.grade??a.label].join(":")).join("|")].join("::")}}if("position"===a2){let a=V.filter(a=>"withdrawn"!==a.status&&bf(a.academicStructureId,ax)&&bf(a.academicPeriodId,az)&&bf(a.classId,aB)).length,b=Math.max(bJ.length,a);if(!b)return{rules:[{id:"position-first",label:"1st position",minimum:1,maximum:1,remark:ba("1st position","position")}],source:{title:"Class position bands",detail:"Select a class with computed reports to derive position ranges."},signature:"position::0"};let c=[],d=(a,d,e,f,g=d)=>{e>b||f<e||c.push({id:a,label:d,minimum:e,maximum:Math.min(f,b),remark:ba(g,"position")})};d("position-first","1st position",1,1,"first"),d("position-top-three",b>=3?"2nd–3rd position":"2nd position",2,Math.min(3,b),"top");let e=Math.max(4,Math.ceil(.25*b));d("position-upper","Upper quarter",4,e,"upper");let f=Math.max(e+1,Math.ceil(.6*b));return d("position-middle","Middle group",e+1,f,"middle"),d("position-lower","Needs stronger position",f+1,b,"lower"),{rules:c,source:{title:"Actual class position distribution",detail:`${b} student${1===b?"":"s"} with positions assigned by the report engine from computed averages.`},signature:`position::${b}`}}let h=[a?.minimumAttendancePercentage,a?.requiredAttendancePercentage,a?.attendanceTargetPercentage,a?.attendancePassPercentage].map(a=>Number(a)).find(a=>Number.isFinite(a)),i=Math.min(100,Math.max(1,h??75)),j=Math.max(i,90),k=Math.max(i,Math.min(j-1,80)),l=Math.min(k-1,i);return{rules:bb([{id:"attendance-excellent",label:"Excellent attendance",minimum:j,maximum:100,remark:ba("excellent","attendance")},{id:"attendance-good",label:"Good attendance",minimum:k,maximum:j-.01,remark:ba("good","attendance")},{id:"attendance-satisfactory",label:"Satisfactory attendance",minimum:l,maximum:k-.01,remark:ba("satisfactory","attendance")},{id:"attendance-poor",label:"Attendance needs improvement",minimum:0,maximum:l-.01,remark:ba("needs improvement","attendance")}]),source:{title:void 0!==h?"School attendance configuration":"Report attendance percentage",detail:void 0!==h?`The school attendance expectation is ${i}%. Bands were generated around this configured threshold.`:"No school attendance threshold was found, so the report engine’s percentage is grouped around a 75% minimum expectation."},signature:["attendance",i].join("::")}},[a2,aB,_,bJ,al,aj,a,az,ax,V]),bM=(0,e.useMemo)(()=>{if(!ax||!az||"class"===aH&&!aB)return[];let a=new Set;return V.filter(a=>"withdrawn"!==a.status&&l.has(bd(a.classId))&&bf(a.academicStructureId,ax)&&bf(a.academicPeriodId,az)&&("group"===aH||bf(a.classId,aB))).map(b=>{let c=bB.get(b.studentId);if(!c?.id)return;let d=bl(c.id,b.classId,b.academicStructureId,b.academicPeriodId),e=bH.get(d),f=bK.get(`${bd(b.classId)}:${bd(c.id)}`),g=bl(c.id,b.classId,b.academicStructureId,b.academicPeriodId);if(a.has(g))return;a.add(g);let h=aW[g]||{reportCardId:e?.id,classTeacherRemark:e?.classTeacherRemark||"",headTeacherRemark:e?.headTeacherRemark||"",published:!!e?.published};return{student:c,enrollment:b,reportCard:e,computedReport:f,draft:h,rowKey:g}}).filter(Boolean)},[az,ax,aB,aH,aW,bK,V,bH,bB,l]),bN=(0,e.useMemo)(()=>{let a=aQ.trim().toLowerCase();return bM.filter(b=>{let c=!!b.draft.classTeacherRemark.trim();return("missing"!==aO||!c)&&("complete"!==aO||!!c)&&("published"!==aO||!!b.draft.published)&&("unpublished"!==aO||!b.draft.published)&&(!a||`${b.student.fullName||""} ${b.student.admissionNumber||""}`.toLowerCase().includes(a))}).sort((a,b)=>be(a.student.fullName).localeCompare(be(b.student.fullName)))},[bM,aQ,aO]),bO=(0,e.useMemo)(()=>bM.find(a=>a.student.id===aD)||bN[0],[aD,bM,bN]),bP=(0,e.useMemo)(()=>{let a=bM.length,b=bM.filter(a=>!!a.draft.classTeacherRemark.trim()).length,c=bM.filter(a=>!!a.draft.headTeacherRemark.trim()).length,d=bM.filter(a=>!!a.draft.classTeacherRemark.trim()).length,e=bM.filter(a=>a.draft.published).length,f=Math.max(0,a-d),g=a?Math.round(d/a*100):0;return{total:a,classRemarked:b,headRemarked:c,complete:d,published:e,missing:f,completion:g}},[bM]);(0,e.useMemo)(()=>[ax,az,aB,"group"===aH?"group":void 0,"all"!==aO?aO:void 0].filter(Boolean).length,[az,ax,aB,aO,aH]),bn(R,ax);let bQ=bn(T,az),bR=bn(P,aB);bn(N,aD),c?.name,f?.name;let bS=(a,b)=>{aX(c=>({...c,[a]:{...c[a]||bg(),...b}}))},bT=a=>{let b="selected"===a?bO?[bO]:[]:bN;if(!b.length)return alert("selected"===a?"Select a student first.":"No students match the current filters.");let c={...aW},d=0,e=0,f=0,g=0;b.forEach(a=>{let b=a.rowKey;if(!b)return;let h=bj(a,a2);if(void 0===h){e+=1;return}let i=bk(h,a7);if(!i?.remark.trim()){f+=1;return}let j=c[b]||a.draft||bg();if(!a5&&be(j[a4])){g+=1;return}c[b]={...j,[a4]:i.remark.trim()},d+=1}),aX(c),alert([`${d} remark${1===d?"":"s"} applied.`,e?`${e} without a computed ${a2} value.`:"",f?`${f} without a matching completed band.`:"",g?`${g} kept because overwrite is off.`:""].filter(Boolean).join(" "))},bU=a=>be((aW[a.rowKey]||a.draft).classTeacherRemark)!==be(a.reportCard?.classTeacherRemark),bV=bM.filter(bU).length,bW=()=>{(!aJ||!bV||window.confirm("You have unsaved remarks. Discard these changes and change the report filters?"))&&(aK(!1),aT(!0))},bX=async a=>{if(!h.ready||!h.permitted||!k||!r||!n||!o||!q)return void J("An authorized teacher workspace is required.");if(!ax||!az)return void J("Select an academic year and term.");let b=a.filter(bU);if(!b.length)return void aK(!1);try{for(let a of(M(!0),b)){let b=bd(a.student.id),c=bd(a.enrollment.classId);if(!b||!c||!l.has(c))throw Error("The selected student is outside your assigned classes.");if(!await s({accountId:n,schoolId:o,branchId:q,teacherId:k},c))throw Error("Class-teacher assignment has changed. Reload Remarks.");if(!(await bm("studentEnrollments")).some(a=>by(a)&&bf(a.studentId,b)&&bf(a.classId,c)&&bf(a.academicStructureId,ax)&&bf(a.academicPeriodId,az)&&"withdrawn"!==a.status))throw Error("Student enrollment changed. Refresh before saving.");let d=be((aW[a.rowKey]||a.draft).classTeacherRemark),e=(await bm("reportCards")).find(a=>by(a)&&bf(a.studentId,b)&&bf(a.classId,c)&&bf(a.academicStructureId,ax)&&bf(a.academicPeriodId,az));e?.id?await (0,y.Po)("reportCards",String(e.id),{classTeacherRemark:d||void 0}):d&&await (0,y.oJ)("reportCards",{accountId:n,schoolId:o,branchId:q,studentId:b,classId:c,academicStructureId:ax,academicPeriodId:az,total:Number(a.computedReport?.total||0),average:Number(a.computedReport?.average||0),classTeacherRemark:d})}aK(!1),J(`Saved ${b.length} class-teacher remark${1===b.length?"":"s"}.`),await bA()}catch(a){console.error("Failed to save teacher report remarks:",a),J(a instanceof Error?a.message:"Could not save all remarks. Review and retry.")}finally{M(!1)}};(0,H.TV)("reportsWorkspace",{add:()=>{aK(!0),a1(!0)},search:aR,filter:bW,more:()=>aV(!0)});let bY=aN.current===K||!P.length||!T.length||!R.length;return t||u||b||!h.ready?(0,d.jsx)(bp,{primary:v,title:"Opening report remarks...",text:"Checking teacher membership and assigned classes."}):r&&n?o&&q&&h.permitted?A||C!==K||!bY?(0,d.jsx)(bp,{primary:v,title:"Opening report remarks...",text:"Loading assigned students, classes and report cards."}):E?(0,d.jsx)(bp,{primary:v,spin:!1,title:"Remarks unavailable",text:E}):l.size?(0,d.jsxs)("main",{className:`ba-page report-remarks-page ${"cards"===aF?"rr-force-cards":"table"===aF?"rr-force-table":""}`,style:{"--ba-primary":v,"--primary-color":v},children:[(0,d.jsx)("style",{children:bw}),I&&(0,d.jsxs)("div",{className:"rr-teacher-notice",role:"status",children:[I,(0,d.jsx)("button",{type:"button","aria-label":"Dismiss",onClick:()=>J(""),children:"\xd7"})]}),(0,d.jsxs)("header",{className:"rr-command-row report-no-print",children:[(0,d.jsxs)("button",{type:"button",className:"rr-context",onClick:bW,"aria-label":"Choose group, class and term",children:[(0,d.jsx)("strong",{children:"group"===aH?"All classes":bR}),(0,d.jsxs)("span",{children:[bQ," \xb7 ",bN.length," shown"]}),(0,d.jsx)("i",{"aria-hidden":"true",children:"⌄"})]}),(0,d.jsxs)("span",{className:"rr-count",title:"Completed remarks",children:[bP.complete,"/",bP.total]}),(0,d.jsx)("button",{type:"button",className:"rr-primary",onClick:aJ?()=>void bX(bM):()=>aK(!0),disabled:L||!aJ&&!bM.length,children:L?"Saving…":aJ?`Save${bV?` (${bV})`:""}`:"Start"}),aJ&&(0,d.jsx)("button",{type:"button",className:"rr-secondary",onClick:()=>{(!bV||window.confirm("Discard unsaved remark changes?"))&&(aX(Object.fromEntries(bM.map(a=>[a.rowKey,{reportCardId:a.reportCard?.id,classTeacherRemark:a.reportCard?.classTeacherRemark||"",headTeacherRemark:a.reportCard?.headTeacherRemark||"",published:!!a.reportCard?.published}]))),aK(!1))},children:"Cancel"})]}),"analytics"===aF?(0,d.jsx)("section",{className:"rr-analytics",children:[["Students",bP.total],["Class remarks",bP.classRemarked],["Complete",bP.complete],["Missing",bP.missing],["Published",bP.published],["Completion",`${bP.completion}%`]].map(([a,b])=>(0,d.jsxs)("article",{children:[(0,d.jsx)("small",{children:a}),(0,d.jsx)("strong",{children:b})]},a))}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"rr-table-wrap",children:(0,d.jsxs)("table",{className:"rr-table","aria-label":"Report remarks for students",children:[(0,d.jsxs)("colgroup",{children:[(0,d.jsx)("col",{className:"rr-col-student"}),(0,d.jsx)("col",{className:"rr-col-basis"}),(0,d.jsx)("col",{}),(0,d.jsx)("col",{}),(0,d.jsx)("col",{className:"rr-col-status"})]}),(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Student"}),(0,d.jsx)("th",{children:"Basis"}),(0,d.jsx)("th",{children:"Class teacher remark"}),(0,d.jsx)("th",{children:"Headteacher remark \xb7 view only"}),(0,d.jsx)("th",{children:"Status"})]})}),(0,d.jsx)("tbody",{children:bN.map(a=>{let b=a.rowKey,c=aW[b]||a.draft,e=bj(a,a2),f=bk(e,a7);return(0,d.jsxs)("tr",{className:aD===a.student.id?"rr-row-selected":"",children:[(0,d.jsx)("td",{children:(0,d.jsxs)("div",{className:"rr-person",children:[(0,d.jsx)(bq,{student:a.student,photo:bG[bd(a.student.id)]?.photo}),(0,d.jsxs)("div",{children:[(0,d.jsx)("button",{type:"button",className:"rr-select-student",title:"Select student for remarks basis",onClick:()=>aE(bd(a.student.id)),children:a.student.fullName||"Unnamed student"}),(0,d.jsxs)("small",{children:[a.student.admissionNumber||"No ID"," \xb7 ",bC.get(a.enrollment.classId)?.name||"Class"]})]})]})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("span",{className:"rr-basis-value",children:void 0===e?"—":`${Number(e.toFixed(1))}${"attendance"===a2?"%":""}`}),(0,d.jsx)("small",{children:f?.label||a2})]}),(0,d.jsx)("td",{children:(0,d.jsx)("textarea",{"aria-label":`Class teacher remark for ${a.student.fullName}`,rows:2,readOnly:!aJ,value:c.classTeacherRemark,onChange:a=>bS(b,{classTeacherRemark:a.target.value}),placeholder:aJ?"Enter class teacher remark":"—"})}),(0,d.jsx)("td",{children:(0,d.jsx)("p",{className:"rr-teacher-readonly","aria-label":`Headteacher remark for ${a.student.fullName}`,children:a.reportCard?.headTeacherRemark||"—"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("span",{className:"rr-teacher-publication",children:a.reportCard?.published?"Published":"Unpublished"}),(0,d.jsx)("span",{className:`rr-state ${c.classTeacherRemark.trim()?"ready":"missing"}`,children:c.classTeacherRemark.trim()?bU(a)?"Ready to save":"Remark saved":"Missing remark"})]})]},b)})})]})}),(0,d.jsx)("section",{className:"rr-mobile-cards","aria-label":"Student remarks cards",children:bN.map(a=>{let b=a.rowKey,c=aW[b]||a.draft,e=bj(a,a2),f=bk(e,a7);return(0,d.jsxs)("article",{className:`rr-card ${aD===a.student.id?"rr-row-selected":""}`,children:[(0,d.jsxs)("div",{className:"rr-card-head",children:[(0,d.jsx)(bq,{student:a.student,photo:bG[bd(a.student.id)]?.photo}),(0,d.jsxs)("div",{className:"rr-card-person",children:[(0,d.jsx)("button",{type:"button",className:"rr-select-student",title:"Select student for remarks basis",onClick:()=>aE(bd(a.student.id)),children:a.student.fullName||"Unnamed student"}),(0,d.jsxs)("small",{children:[a.student.admissionNumber||"No ID"," \xb7 ",bC.get(a.enrollment.classId)?.name||"Class"]})]}),(0,d.jsxs)("span",{className:"rr-card-basis",title:`Based on ${a2}`,children:[void 0===e?"—":Number(e.toFixed(1)),"attendance"===a2&&void 0!==e?"%":"",(0,d.jsx)("small",{children:f?.label||a2})]})]}),(0,d.jsxs)("div",{className:"rr-card-fields",children:[(0,d.jsxs)("label",{children:["Class teacher",(0,d.jsx)("textarea",{rows:2,readOnly:!aJ,value:c.classTeacherRemark,placeholder:aJ?"Write a remark…":"—",onChange:a=>bS(b,{classTeacherRemark:a.target.value})})]}),(0,d.jsxs)("label",{children:["Headteacher \xb7 view only ",(0,d.jsx)("p",{className:"rr-teacher-readonly",children:a.reportCard?.headTeacherRemark||"—"})]})]}),(0,d.jsxs)("div",{className:"rr-card-foot",children:[(0,d.jsx)("span",{className:`rr-state ${c.classTeacherRemark.trim()?"ready":"missing"}`,children:c.classTeacherRemark.trim()?bU(a)?"Ready to save":"Remark saved":"Missing remark"}),(0,d.jsx)("span",{className:"rr-teacher-publication",children:a.reportCard?.published?"Published":"Unpublished"})]})]},b)})})]}),!bM.length&&(0,d.jsx)(bv,{text:"There are no enrolled students for this class or term. Use Filter to choose another class/group."}),bM.length>0&&!bN.length&&(0,d.jsx)(bv,{text:"No students match the current search and status filters."}),aS&&(0,d.jsx)(ao.A,{themeSourceClass:".report-remarks-page",onEscape:()=>aT(!1),children:(0,d.jsx)(br,{viewMode:aF,setViewMode:aG,scopeMode:aH,setScopeMode:a=>{aI(a),aK(!1)},remarkFilter:aO,setRemarkFilter:aP,academicStructureId:ax,setAcademicStructureId:ay,academicPeriodId:az,setAcademicPeriodId:aA,classId:aB,setClassId:aC,studentId:aD,setStudentId:aE,academicStructures:R,academicPeriods:bD,classes:bF,students:bM.map(a=>a.student),search:aQ,setSearch:aR,onClose:()=>aT(!1)})}),a0&&(0,d.jsx)(ao.A,{themeSourceClass:".report-remarks-page",onEscape:()=>a1(!1),children:(0,d.jsx)(bs,{metric:a2,setMetric:a=>{bx.current="",a3(a),a8([]),bo({title:"Updating remarks basis…",detail:"Recalculating minimum and maximum bands from the selected class and reporting system."})},overwrite:a5,setOverwrite:a6,rules:a7,source:a9,updateRule:(a,b)=>{a8(c=>c.map(c=>c.id===a?{...c,...b}:c))},addRule:()=>{a8(a=>[...a,{id:`custom-${Date.now()}`,label:`Band ${a.length+1}`,minimum:0,maximum:100,remark:""}])},removeRule:a=>{a8(b=>b.length<=1?b:b.filter(b=>b.id!==a))},selectedRow:bO,shownCount:bN.length,applySelected:()=>{bT("selected"),aK(!0),a1(!1)},applyShown:()=>{bT("shown"),aK(!0),a1(!1)},resetRules:()=>{bx.current="",a8(bL.rules),bo(bL.source)},onClose:()=>a1(!1)})}),aL&&(0,d.jsx)(ao.A,{themeSourceClass:".report-remarks-page",onEscape:()=>aM(!1),children:(0,d.jsx)(bt,{classRemark:aY,setClassRemark:aZ,overwrite:a$,setOverwrite:a_,shownCount:bN.length,onApply:()=>{bN.length?aY.trim()?(aX(a=>{let b={...a};return bN.forEach(a=>{let c=b[a.rowKey]||a.draft||bg();b[a.rowKey]={...c,classTeacherRemark:a$||!c.classTeacherRemark.trim()?aY.trim():c.classTeacherRemark}}),b}),aK(!0),J("Class-teacher remarks applied. Select Save to keep your changes.")):J("Enter a class-teacher remark first."):J("No students match the current filters."),aK(!0),aM(!1)},onClose:()=>aM(!1)})}),aU&&(0,d.jsx)(ao.A,{themeSourceClass:".report-remarks-page",onEscape:()=>aV(!1),children:(0,d.jsx)(bu,{onRefresh:async()=>{aV(!1),await bA()},onCards:()=>{aG("cards"),aV(!1)},onTable:()=>{aG("table"),aV(!1)},onAnalytics:()=>{aG("analytics"),aV(!1)},onBulk:()=>{aV(!1),aM(!0)},onRemarksBasis:()=>{aV(!1),aK(!0),a1(!0)},onClose:()=>aV(!1)})})]}):(0,d.jsx)(bp,{primary:v,spin:!1,title:"No class-teacher assignment",text:"Only class teachers can enter report remarks. Ask a school administrator to assign your class."}):(0,d.jsx)(bp,{primary:v,spin:!1,title:"Teacher workspace required",text:"Open Reports through a linked teacher membership in the correct school branch."}):(0,d.jsx)(bp,{primary:v,spin:!1,title:"Sign in required",text:"Sign in before entering class-teacher remarks."})}function bp({primary:a,title:b,text:c,spin:e=!0}){return(0,d.jsxs)("main",{className:"ba-page",style:{"--ba-primary":a,"--primary-color":a},children:[(0,d.jsx)("style",{children:bw}),(0,d.jsxs)("section",{className:"ba-state",children:[e&&(0,d.jsx)("div",{className:"ba-spinner"}),(0,d.jsx)("h2",{children:b}),(0,d.jsx)("p",{children:c})]})]})}function bq({student:a,photo:b}){let c=be(a.fullName),f=be(a.photo),g=a=>a.startsWith("https://")||a.startsWith("http://")||a.startsWith("blob:")||a.startsWith("data:image/"),h=(b&&g(b)?b:"")||(g(f)?f:""),[i,j]=(0,e.useState)(!1);return(0,d.jsx)("span",{className:"rr-avatar","aria-label":`${c} photograph`,children:h&&!i?(0,d.jsx)("img",{src:h,alt:c,onError:()=>j(!0)}):(0,d.jsx)("b",{"aria-hidden":"true",children:c.slice(0,1).toUpperCase()||"S"})})}function br(a){return(0,d.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet",children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Filters"}),(0,d.jsx)("p",{children:"Choose the report remarks scope. School and branch stay locked."})]}),(0,d.jsx)("button",{type:"button",onClick:a.onClose,"aria-label":"Close filters",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-form",children:[(0,d.jsxs)("label",{className:"ba-v4-find",children:[(0,d.jsx)("span",{children:"Search students"}),(0,d.jsx)("input",{type:"search",value:a.search,onChange:b=>a.setSearch(b.target.value),placeholder:"Name or admission number"})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Students"}),(0,d.jsxs)("select",{value:a.scopeMode,onChange:b=>a.setScopeMode(b.target.value),children:[(0,d.jsx)("option",{value:"class",children:"One class"}),(0,d.jsx)("option",{value:"group",children:"Group \xb7 all classes in this term"})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Structure"}),(0,d.jsxs)("select",{value:a.academicStructureId||"",onChange:b=>{a.setAcademicStructureId(bd(b.target.value)||void 0),a.setAcademicPeriodId(void 0),a.setClassId(void 0),a.setStudentId(void 0)},children:[(0,d.jsx)("option",{value:"",children:"Select structure"}),a.academicStructures.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Academic Period"}),(0,d.jsxs)("select",{value:a.academicPeriodId||"",onChange:b=>{a.setAcademicPeriodId(bd(b.target.value)||void 0),a.setClassId(void 0),a.setStudentId(void 0)},children:[(0,d.jsx)("option",{value:"",children:"Select period"}),a.academicPeriods.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),"class"===a.scopeMode&&(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class"}),(0,d.jsxs)("select",{value:a.classId||"",onChange:b=>{a.setClassId(bd(b.target.value)||void 0),a.setStudentId(void 0)},children:[(0,d.jsx)("option",{value:"",children:"Select class"}),a.classes.map(a=>(0,d.jsx)("option",{value:a.id,children:a.name},a.id))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Remark Filter"}),(0,d.jsxs)("select",{value:a.remarkFilter,onChange:b=>a.setRemarkFilter(b.target.value),children:[(0,d.jsx)("option",{value:"all",children:"All remarks"}),(0,d.jsx)("option",{value:"missing",children:"Missing remarks"}),(0,d.jsx)("option",{value:"complete",children:"Complete remarks"}),(0,d.jsx)("option",{value:"published",children:"Published"}),(0,d.jsx)("option",{value:"unpublished",children:"Unpublished"})]})]})]}),(0,d.jsxs)("div",{className:"ba-sheet-actions",children:[(0,d.jsx)("button",{type:"button",onClick:()=>{a.setAcademicStructureId(void 0),a.setAcademicPeriodId(void 0),a.setClassId(void 0),a.setStudentId(void 0),a.setRemarkFilter("all")},children:"Clear"}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:a.onClose,children:"Apply"})]})]})})}function bs({metric:a,setMetric:b,overwrite:c,setOverwrite:e,rules:f,source:g,updateRule:h,addRule:i,removeRule:j,selectedRow:k,shownCount:l,applySelected:m,applyShown:n,resetRules:o,onClose:p}){return(0,d.jsx)("div",{className:"ba-sheet-backdrop ba-basis-backdrop portal-contained-modal",role:"dialog","aria-modal":"true","aria-label":"Remarks basis",children:(0,d.jsxs)("section",{className:"ba-sheet ba-basis-sheet rr-basis-modal",children:[(0,d.jsxs)("header",{className:"ba-sheet-head rr-modal-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Remarks basis"}),(0,d.jsxs)("p",{children:[g.title," \xb7 ",f.length," bands"]})]}),(0,d.jsx)("button",{type:"button","aria-label":"Close remarks basis",onClick:p,children:"✕"})]}),(0,d.jsxs)("div",{className:"rr-basis-config",children:[(0,d.jsxs)("label",{children:["Use scores from",(0,d.jsxs)("select",{value:a,onChange:a=>b(a.target.value),children:[(0,d.jsx)("option",{value:"average",children:"Average"}),(0,d.jsx)("option",{value:"total",children:"Total"}),(0,d.jsx)("option",{value:"position",children:"Class position"}),(0,d.jsx)("option",{value:"attendance",children:"Attendance"})]})]}),(0,d.jsxs)("div",{className:"rr-basis-locked",children:[(0,d.jsx)("strong",{children:"For"}),(0,d.jsx)("span",{children:"Class teacher remarks only"})]}),(0,d.jsxs)("label",{className:"rr-check",children:[(0,d.jsx)("input",{type:"checkbox",checked:c,onChange:a=>e(a.target.checked)}),"Overwrite existing"]})]}),(0,d.jsxs)("p",{className:"rr-source-note",children:[g.detail," ",k?`Selected: ${k.student.fullName}.`:""]}),(0,d.jsx)("section",{className:"rr-basis-list","aria-label":"Remark bands",children:f.map((a,b)=>(0,d.jsxs)("details",{className:"rr-band",children:[(0,d.jsxs)("summary",{children:[(0,d.jsx)("strong",{children:a.label||`Band ${b+1}`}),(0,d.jsxs)("small",{children:[a.minimum,"–",a.maximum," \xb7 ",a.remark||"No remark yet"]}),(0,d.jsx)("span",{"aria-hidden":"true",children:"⌄"})]}),(0,d.jsxs)("div",{className:"rr-band-body",children:[(0,d.jsxs)("label",{children:["Label",(0,d.jsx)("input",{value:a.label,onChange:b=>h(a.id,{label:b.target.value})})]}),(0,d.jsxs)("div",{className:"rr-band-numbers",children:[(0,d.jsxs)("label",{children:["Minimum",(0,d.jsx)("input",{type:"number",value:a.minimum,onChange:b=>h(a.id,{minimum:bi(b.target.value)})})]}),(0,d.jsxs)("label",{children:["Maximum",(0,d.jsx)("input",{type:"number",value:a.maximum,onChange:b=>h(a.id,{maximum:bi(b.target.value,100)})})]})]}),(0,d.jsxs)("label",{children:["Remark",(0,d.jsx)("textarea",{rows:2,value:a.remark,onChange:b=>h(a.id,{remark:b.target.value})})]}),(0,d.jsx)("button",{type:"button",className:"rr-link",disabled:f.length<=1,onClick:()=>j(a.id),children:"Remove band"})]})]},a.id))}),(0,d.jsxs)("div",{className:"rr-basis-utils",children:[(0,d.jsx)("button",{type:"button",onClick:i,children:"+ Add band"}),(0,d.jsx)("button",{type:"button",onClick:o,children:"Recalculate bands"})]}),(0,d.jsxs)("footer",{className:"rr-modal-actions",children:[(0,d.jsx)("button",{type:"button",onClick:p,children:"Close"}),(0,d.jsx)("button",{type:"button",onClick:m,disabled:!k,children:"Apply selected"}),(0,d.jsxs)("button",{type:"button",className:"primary",onClick:n,disabled:!l,children:["Apply to ",l," shown"]})]})]})})}function bt({classRemark:a,setClassRemark:b,overwrite:c,setOverwrite:e,shownCount:f,onApply:g,onClose:h}){return(0,d.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet small rr-bulk-modal",children:[(0,d.jsxs)("header",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Group remarks"}),(0,d.jsxs)("p",{children:["Apply class-teacher remarks to ",f," shown students."]})]}),(0,d.jsx)("button",{type:"button","aria-label":"Close group remarks",onClick:h,children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-form",children:[(0,d.jsxs)("label",{children:["Class teacher",(0,d.jsx)("textarea",{rows:3,value:a,onChange:a=>b(a.target.value)})]}),(0,d.jsxs)("label",{className:"rr-check",children:[(0,d.jsx)("input",{type:"checkbox",checked:c,onChange:a=>e(a.target.checked)}),"Overwrite existing text"]})]}),(0,d.jsxs)("footer",{className:"rr-modal-actions",children:[(0,d.jsx)("button",{type:"button",onClick:h,children:"Cancel"}),(0,d.jsx)("button",{type:"button",className:"primary",disabled:!f,onClick:g,children:"Apply to shown"})]})]})})}function bu({onRefresh:a,onCards:b,onTable:c,onAnalytics:e,onBulk:f,onRemarksBasis:g,onClose:h}){return(0,d.jsx)("div",{className:"ba-sheet-backdrop",role:"dialog","aria-modal":"true",children:(0,d.jsxs)("section",{className:"ba-sheet small",children:[(0,d.jsxs)("header",{className:"ba-sheet-head",children:[(0,d.jsx)("h2",{children:"More"}),(0,d.jsx)("button",{type:"button",onClick:h,"aria-label":"Close menu",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-menu-list",children:[(0,d.jsxs)("button",{type:"button",onClick:b,children:[(0,d.jsx)("span",{children:"▦"}),(0,d.jsx)("b",{children:"Cards"}),(0,d.jsx)("small",{children:"Compact mobile-friendly rows"})]}),(0,d.jsxs)("button",{type:"button",onClick:c,children:[(0,d.jsx)("span",{children:"▤"}),(0,d.jsx)("b",{children:"Table"}),(0,d.jsx)("small",{children:"Editable desktop-style list"})]}),(0,d.jsxs)("button",{type:"button",onClick:e,children:[(0,d.jsx)("span",{children:"◫"}),(0,d.jsx)("b",{children:"Analytics"}),(0,d.jsx)("small",{children:"Remarks completion statistics"})]}),(0,d.jsxs)("button",{type:"button",onClick:f,children:[(0,d.jsx)("span",{children:"\uD83D\uDC65"}),(0,d.jsx)("b",{children:"Group remark entry"}),(0,d.jsx)("small",{children:"Apply one remark to many students"})]}),(0,d.jsxs)("button",{type:"button",onClick:g,children:[(0,d.jsx)("span",{children:"∑"}),(0,d.jsx)("b",{children:"Remarks basis"}),(0,d.jsx)("small",{children:"Generate from grades or attendance"})]}),(0,d.jsxs)("button",{type:"button",onClick:a,children:[(0,d.jsx)("span",{children:"↻"}),(0,d.jsx)("b",{children:"Refresh"}),(0,d.jsx)("small",{children:"Reload saved local records"})]})]})]})})}function bv({text:a}){return(0,d.jsxs)("section",{className:"ba-empty",children:[(0,d.jsx)("div",{className:"ba-empty-icon",children:"\uD83D\uDCAC"}),(0,d.jsx)("h3",{children:"No remarks loaded"}),(0,d.jsx)("p",{children:a})]})}let bw=`
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

.ba-page textarea {
  min-height: 96px;
  padding: 12px;
  resize: vertical;
  line-height: 1.55;
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
.ba-empty,
.ba-sheet,
.ba-remark-card,
.ba-student-row {
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

.ba-state h2 { margin: 0; font-size: 22px; font-weight: 1000; letter-spacing: -.04em; }
.ba-state p { max-width: 34rem; margin: 0; color: var(--muted,#64748b); font-size: 13px; line-height: 1.6; }

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

.ba-search span { color: var(--muted,#64748b); font-size: 17px; font-weight: 1000; }
.ba-search input { min-height: 42px; border: 0; padding: 0; border-radius: 0; background: transparent; box-shadow: none; font-size: 14px; }

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
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
  font-size: 20px;
  box-shadow: 0 12px 28px color-mix(in srgb, var(--ba-primary) 22%, transparent);
}

.ba-add-inline:disabled { opacity: .65; cursor: not-allowed; }

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

.ba-filter-button.active { background: var(--ba-primary); color: #fff; border-color: var(--ba-primary); }

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

.ba-filter-chips {
  display: flex;
  gap: 7px;
  overflow-x: auto;
  padding: 8px 1px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.ba-filter-chips::-webkit-scrollbar { display: none; }
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

.ba-summary-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
  padding: 10px 12px;
  border-radius: 20px;
}
.ba-summary-line div { display: flex; align-items: baseline; gap: 6px; min-width: 0; }
.ba-summary-line strong { font-size: 21px; font-weight: 1000; letter-spacing: -.05em; }
.ba-summary-line span, .ba-summary-line p { color: var(--muted,#64748b); font-size: 12px; font-weight: 850; }
.ba-summary-line p { margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.ba-list { display: grid; gap: 7px; margin-top: 10px; }

.ba-student-row {
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
.ba-student-row:hover, .ba-student-row.active {
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
  background: var(--ba-primary);
  font-size: 17px;
  font-weight: 1000;
  box-shadow: 0 12px 24px rgba(15,23,42,.12);
}
.ba-student-main, .ba-student-main strong, .ba-student-main small, .ba-student-main em {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ba-student-main strong { color: var(--text,#111827); font-size: 14px; font-weight: 1000; letter-spacing: -.02em; }
.ba-student-main small { margin-top: 3px; color: var(--muted,#64748b); font-size: 12px; font-weight: 850; font-style: normal; }
.ba-student-main em { margin-top: 3px; color: color-mix(in srgb, var(--muted,#64748b) 86%, var(--text,#111827)); font-size: 11px; font-weight: 750; font-style: normal; }
.ba-student-side { display: grid; justify-items: end; gap: 6px; flex: 0 0 auto; }
.ba-student-side i { color: var(--muted,#64748b); font-style: normal; font-size: 18px; font-weight: 1000; line-height: 1; }

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

.ba-remark-card {
  display: grid;
  gap: 10px;
  margin-top: 10px;
  padding: 12px;
  border-radius: 24px;
}
.ba-remark-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; }
.ba-remark-head h3 { margin: 0; color: var(--text,#111827); font-size: 16px; font-weight: 1000; letter-spacing: -.04em; }
.ba-remark-head p { margin: 3px 0 0; color: var(--muted,#64748b); font-size: 12px; font-weight: 800; }
.ba-remark-grid { display: grid; grid-template-columns: minmax(0,1fr); gap: 9px; }
.ba-remark-field { display: grid; gap: 6px; }
.ba-remark-field span { display: flex; justify-content: space-between; gap: 8px; color: var(--muted,#64748b); font-size: 11px; font-weight: 950; text-transform: uppercase; letter-spacing: .06em; }
.ba-publish-line {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 38px;
  padding: 9px 11px;
  border-radius: 16px;
  background: color-mix(in srgb, var(--muted,#64748b) 8%, transparent);
  border: 1px solid var(--border,rgba(0,0,0,.08));
  color: var(--text,#111827);
  font-size: 12px;
  font-weight: 900;
}
.ba-publish-line input { width: 16px; min-height: 16px; }

.ba-empty {
  display: grid;
  place-items: center;
  align-content: center;
  gap: 8px;
  min-height: 210px;
  margin-top: 10px;
  padding: 22px;
  border-radius: 24px;
  border-style: dashed;
  text-align: center;
}
.ba-empty-icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: color-mix(in srgb, var(--ba-primary) 12%, var(--surface,#fff));
  font-size: 28px;
}
.ba-empty h3 { margin: 0; font-size: 18px; font-weight: 1000; }
.ba-empty p { margin: 0; color: var(--muted,#64748b); font-size: 13px; line-height: 1.6; }

.ba-sheet-backdrop {
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
.ba-sheet.small { width: min(520px, 100%); }
@keyframes sheetIn { from { transform: translateY(16px); opacity: .7; } to { transform: translateY(0); opacity: 1; } }
.ba-sheet-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding-bottom: 12px; }
.ba-sheet-head h2 { margin: 0; color: var(--text,#111827); font-size: 21px; font-weight: 1000; letter-spacing: -.05em; }
.ba-sheet-head p { margin: 5px 0 0; color: var(--muted,#64748b); font-size: 12px; line-height: 1.5; font-weight: 750; }
.ba-sheet-head button {
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
.ba-sheet-actions {
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
.ba-sheet-actions button {
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
.ba-sheet-actions button.primary {
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
  box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent);
}
.ba-form { display: grid; grid-template-columns: minmax(0, 1fr); gap: 9px; }
.ba-form label { display: grid; gap: 6px; min-width: 0; }
.ba-form span { color: var(--muted,#64748b); font-size: 11px; font-weight: 900; text-transform: uppercase; letter-spacing: .06em; }
.ba-menu-list { display: grid; gap: 8px; }
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
.ba-menu-list button small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.ba-menu-list button b { font-size: 13px; font-weight: 1000; }
.ba-menu-list button small { margin-top: 2px; color: var(--muted,#64748b); font-size: 11px; font-weight: 750; }

@media (min-width: 720px) {
  .ba-page { padding: 10px; }
  .ba-remark-grid.two { grid-template-columns: repeat(2, minmax(0,1fr)); }
  .ba-list { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (min-width: 1100px) {
  .ba-page { padding: 12px; }
  .ba-list { grid-template-columns: repeat(3, minmax(0,1fr)); }
}
@media (max-width: 520px) {
  .ba-search-card { grid-template-columns: minmax(0, 1fr) repeat(3, 40px); gap: 6px; padding: 6px; border-radius: 22px; }
  .ba-icon-button, .ba-filter-button, .ba-add-inline { width: 40px; height: 40px; }
  .ba-summary-line { display: grid; }
}


.ba-basis-preview {
  display: grid;
  grid-template-columns:
    minmax(0, 1fr)
    auto
    auto;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding: 9px 10px;
  border:
    1px solid
    color-mix(
      in srgb,
      var(--ba-primary) 18%,
      var(--border, rgba(0,0,0,.10))
    );
  border-radius: 16px;
  background:
    color-mix(
      in srgb,
      var(--ba-primary) 6%,
      var(--card-bg, var(--surface,#fff))
    );
}

.ba-basis-preview span {
  min-width: 0;
}

.ba-basis-preview b,
.ba-basis-preview small {
  display: block;
}

.ba-basis-preview b {
  color: var(--text,#111827);
  font-size: 11px;
  font-weight: 950;
}

.ba-basis-preview small {
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 9px;
  font-weight: 750;
}

.ba-basis-preview strong {
  color: var(--ba-primary);
  font-size: 16px;
  font-weight: 1000;
}

.ba-basis-preview em {
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 999px;
  padding: 5px 8px;
  background:
    color-mix(
      in srgb,
      var(--ba-primary) 11%,
      transparent
    );
  color: var(--ba-primary);
  font-size: 9px;
  font-style: normal;
  font-weight: 900;
}

.ba-basis-sheet {
  width: min(760px, 100%);
}

.ba-basis-controls {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.ba-basis-controls > label:not(.ba-basis-overwrite),
.ba-basis-rule label {
  display: grid;
  gap: 5px;
}

.ba-basis-controls label > span,
.ba-basis-rule label > span {
  color: var(--muted,#64748b);
  font-size: 10px;
  font-weight: 900;
}

.ba-basis-overwrite {
  grid-column: 1 / -1;
  min-height: 48px;
  display: grid;
  grid-template-columns:
    20px minmax(0, 1fr);
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border:
    1px solid
    var(--border, rgba(0,0,0,.10));
  border-radius: 15px;
  background:
    var(--card-bg, var(--surface,#fff));
}

.ba-basis-overwrite input {
  width: 18px;
  height: 18px;
  min-height: 0;
}

.ba-basis-overwrite b,
.ba-basis-overwrite small {
  display: block;
}

.ba-basis-overwrite b {
  font-size: 10px;
  font-weight: 950;
}

.ba-basis-overwrite small {
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 8px;
  font-weight: 700;
}

.ba-basis-rule-list {
  display: grid;
  gap: 8px;
  margin-top: 10px;
}

.ba-basis-rule {
  display: grid;
  gap: 8px;
  padding: 9px;
  border:
    1px solid
    var(--border, rgba(0,0,0,.10));
  border-radius: 18px;
  background:
    var(--card-bg, var(--surface,#fff));
}

.ba-basis-rule-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.ba-basis-rule-head strong {
  font-size: 10px;
  font-weight: 950;
}

.ba-basis-rule-head button {
  width: 28px;
  height: 28px;
  border:
    1px solid
    var(--border, rgba(0,0,0,.10));
  border-radius: 9px;
  background:
    var(--surface, #fff);
  color: var(--muted,#64748b);
  cursor: pointer;
}

.ba-basis-rule-head button:disabled {
  opacity: .4;
  cursor: not-allowed;
}

.ba-basis-rule-grid {
  display: grid;
  grid-template-columns:
    minmax(0, 1.4fr)
    minmax(90px, .6fr)
    minmax(90px, .6fr);
  gap: 7px;
}

.ba-basis-rule-grid input {
  min-height: 38px;
  border-radius: 12px;
}

.ba-basis-remark textarea {
  min-height: 74px;
  border-radius: 13px;
}

.ba-basis-secondary-actions,
.ba-basis-apply {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 10px;
}

.ba-basis-secondary-actions button,
.ba-basis-apply button {
  min-height: 40px;
  border:
    1px solid
    var(--border, rgba(0,0,0,.10));
  border-radius: 13px;
  padding: 7px 11px;
  background:
    var(--card-bg, var(--surface,#fff));
  color: var(--text,#111827);
  font-size: 10px;
  font-weight: 900;
  cursor: pointer;
}

.ba-basis-apply {
  display: grid;
  grid-template-columns:
    repeat(2, minmax(0, 1fr));
}

.ba-basis-apply button {
  display: grid;
  gap: 2px;
  text-align: left;
}

.ba-basis-apply button.primary {
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
}

.ba-basis-apply button:disabled {
  opacity: .5;
  cursor: not-allowed;
}

.ba-basis-apply small {
  color: inherit;
  opacity: .78;
  font-size: 8px;
  font-weight: 700;
}

@media (max-width: 620px) {
  .ba-basis-controls,
  .ba-basis-rule-grid,
  .ba-basis-apply {
    grid-template-columns: 1fr;
  }

  .ba-basis-preview {
    grid-template-columns:
      minmax(0, 1fr)
      auto;
  }

  .ba-basis-preview em {
    grid-column: 1 / -1;
    max-width: 100%;
    justify-self: start;
  }
}



.ba-basis-source {
  display: grid;
  grid-template-columns:
    34px minmax(0, 1fr);
  align-items: center;
  gap: 9px;
  margin-bottom: 10px;
  padding: 9px 10px;
  border:
    1px solid
    color-mix(
      in srgb,
      var(--ba-primary) 22%,
      var(--border, rgba(0,0,0,.10))
    );
  border-radius: 16px;
  background:
    color-mix(
      in srgb,
      var(--ba-primary) 7%,
      var(--card-bg, var(--surface,#fff))
    );
}

.ba-basis-source > span {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background:
    color-mix(
      in srgb,
      var(--ba-primary) 15%,
      transparent
    );
  color: var(--ba-primary);
  font-size: 16px;
  font-weight: 1000;
}

.ba-basis-source div {
  min-width: 0;
}

.ba-basis-source strong,
.ba-basis-source small {
  display: block;
}

.ba-basis-source strong {
  color: var(--text,#111827);
  font-size: 10px;
  font-weight: 950;
}

.ba-basis-source small {
  margin-top: 3px;
  color: var(--muted,#64748b);
  font-size: 8.5px;
  font-weight: 700;
  line-height: 1.4;
}

.ba-basis-field-note {
  display: block;
  margin-top: 1px;
  color: var(--muted,#64748b);
  font-size: 8px;
  font-weight: 650;
  line-height: 1.35;
}



/* Bounded, centred Remarks Basis dialog ------------------------------- */
.ba-basis-backdrop {
  position: fixed;
  inset:
    max(8px, env(safe-area-inset-top))
    max(8px, env(safe-area-inset-right))
    max(8px, env(safe-area-inset-bottom))
    max(8px, env(safe-area-inset-left));
  z-index: 12000;
  display: grid;
  place-items: center;
  padding: clamp(8px, 2vw, 18px);
  overflow: hidden;
  background: rgba(15, 23, 42, .54);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.ba-basis-backdrop .ba-basis-sheet {
  position: relative;
  inset: auto;
  width: min(680px, 100%);
  max-width: 680px;
  min-width: 0;
  height: auto;
  max-height: min(760px, calc(100dvh - 32px));
  margin: 0;
  border-radius: clamp(18px, 2vw, 24px);
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
  box-shadow: 0 28px 90px rgba(15, 23, 42, .30);
}

.ba-basis-backdrop .ba-sheet {
  bottom: auto;
  left: auto;
  right: auto;
  transform: none;
}

.ba-basis-backdrop .ba-sheet-head {
  position: sticky;
  top: 0;
  z-index: 4;
  margin: -1px -1px 8px;
  padding: 10px 10px 9px;
  border-bottom: 1px solid var(--border, rgba(0,0,0,.10));
  background: color-mix(in srgb, var(--card-bg, var(--surface,#fff)) 96%, transparent);
  backdrop-filter: blur(12px) saturate(1.05);
  -webkit-backdrop-filter: blur(12px) saturate(1.05);
}

@media (max-width: 720px) {
  .ba-basis-backdrop {
    inset:
      max(6px, env(safe-area-inset-top))
      max(6px, env(safe-area-inset-right))
      max(6px, env(safe-area-inset-bottom))
      max(6px, env(safe-area-inset-left));
    padding: 6px;
  }

  .ba-basis-backdrop .ba-basis-sheet {
    width: 100%;
    max-width: 100%;
    max-height: calc(100dvh - 20px);
    border-radius: 18px;
  }
}





/* Role-portal-contained sheets --------------------------------------- */
@media (min-width:980px){
  .ba-sheet-backdrop,
  .ba-basis-backdrop,
  .ba-basis-backdrop.portal-contained-modal{
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
  .ba-basis-sheet,
  .ba-basis-backdrop .ba-basis-sheet{
    min-width:0;
    max-width:calc(100vw - var(--portal-content-left,0px) - 20px);
  }

  .ba-basis-backdrop,
  .ba-basis-backdrop.portal-contained-modal{
    display:grid;
    place-items:center;
    padding:18px;
  }

  .ba-basis-backdrop .ba-basis-sheet{
    width:min(680px,100%);
    max-height:calc(100dvh - var(--eds-shell-top-offset,0px) - 36px);
    overflow-y:auto;
    overflow-x:hidden;
  }
}

@media (max-width:979px){
  .ba-basis-backdrop,
  .ba-basis-backdrop.portal-contained-modal{
    position:fixed;
    inset:0 !important;
    display:grid;
    place-items:end center;
    padding:10px;
  }

  .ba-basis-backdrop .ba-basis-sheet{
    width:min(680px,100%);
    max-width:100%;
    max-height:min(88dvh,760px);
  }
}


/* V4 records workspace: neutral surface, efficient scroll, no duplicated toolbars. */
.ba-page.student-reports-page, .ba-page.report-remarks-page { min-height:0; padding:3px 4px 18px; background:transparent; overflow-x:clip; }
.ba-page.student-reports-page .ba-search-card, .ba-page.report-remarks-page .ba-search-card,
.ba-page.student-reports-page .ba-filter-chips:not(.ba-remark-analytics),
.ba-page.report-remarks-page .ba-summary-line { display:none; }
.ba-page.student-reports-page .ba-print-card,
.ba-page.report-remarks-page .ba-remark-card,
.ba-page.report-remarks-page .ba-student-row,
.ba-page.report-remarks-page .ba-list,
.ba-page.report-remarks-page .ba-sheet {
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 83%,var(--bg,#f3f5f8) 17%);
  border-color:var(--border,rgba(15,23,42,.13));
  box-shadow:none;
}
.ba-page.student-reports-page .ba-print-card { margin:0; padding:5px; border-radius:11px; box-shadow:none; }
.ba-page.student-reports-page .ba-print-zone { padding:3px; overflow-x:auto; overscroll-behavior-inline:contain; }
.ba-page.report-remarks-page .ba-remark-card { margin-top:0; box-shadow:none; border-radius:11px; }
.ba-page.report-remarks-page .ba-student-row { border-radius:9px; box-shadow:none; transform:none; }
.ba-page.report-remarks-page .ba-list { gap:6px; }
.ba-page.report-remarks-page .ba-student-row:hover { transform:none; }
.ba-page .ba-v4-find { display:grid; gap:5px; grid-column:1/-1; font-size:12px; font-weight:700; color:var(--muted,#64748b); }
.ba-page .ba-v4-find input { min-height:40px; padding:0 10px; border-radius:9px; background:var(--input-bg,var(--surface,#fff)); color:var(--text,#111827); }
@media(max-width:760px){
 .ba-page.student-reports-page,.ba-page.report-remarks-page{padding:0 1px 14px;}
 .ba-page.student-reports-page .ba-print-card{padding:3px;border-radius:9px;}
 .ba-page.report-remarks-page .ba-remark-card{padding:9px;}
}
@media print {
  .ba-page.student-reports-page,.ba-page.report-remarks-page,
  .ba-page.student-reports-page .ba-print-card,
  .ba-page.student-reports-page .ba-print-zone {
    background:#fff!important;box-shadow:none!important;border:0!important;
    margin:0!important;padding:0!important;overflow:visible!important;
  }
}
.ba-page.report-remarks-page .ba-v4-remark-actions{display:flex;align-items:center;justify-content:flex-end;gap:6px;flex:0 0 auto;}
.ba-page.report-remarks-page .ba-v4-save-remark{padding:7px 11px;min-height:30px;width:auto;border-radius:8px;border:0;background:var(--ba-primary);color:#fff;font-size:12px;font-weight:750;cursor:pointer;}
.ba-page.report-remarks-page .ba-v4-save-remark:disabled{opacity:.55;cursor:default;}

/* V6 — quiet neutral records presentation matching Students/Teachers/Classes V5 */

.report-remarks-page {background:var(--bg,var(--background,#f2f4f7));padding:5px;min-height:0;}
.report-remarks-page .ba-student-row,.report-remarks-page .ba-remark-card,
.report-remarks-page .ba-analysis,.report-remarks-page .ba-basis-preview,
.report-remarks-page .ba-sheet:not(.ba-basis-sheet) {
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#182235) 7%);
  border:1px solid color-mix(in srgb,var(--border,#d4dae3) 85%,var(--text,#182235) 15%);
  border-radius:13px;box-shadow:none;}
.report-remarks-page .ba-student-row:hover {transform:none;box-shadow:none;}
.report-remarks-page .ba-student-row {min-height:64px;transition:border-color .12s ease;}
.report-remarks-page .ba-list {margin-top:2px;gap:9px;}
.report-remarks-page .ba-remark-card {margin-top:2px;padding:10px;}
.report-remarks-page .ba-basis-preview {padding:7px;margin:6px 0;}
.report-remarks-page .ba-remark-field textarea {background:var(--input-bg,var(--surface,#fff));border-radius:10px;}
@media(min-width:1024px){.report-remarks-page .ba-list{grid-template-columns:repeat(4,minmax(0,1fr));}}
@media(max-width:639px){.report-remarks-page{padding:3px;}}
@media(prefers-reduced-motion:reduce){.report-remarks-page .ba-student-row{transition:none;}}



/* V22 — Assessment-style responsive editable remarks records. */
.report-remarks-page { --rr-border:var(--border,rgba(15,23,42,.15)); background:transparent!important; overflow:visible!important; padding:2px 3px 22px!important; }
.report-remarks-page .rr-command-row{display:flex;align-items:center;gap:7px;padding:2px 0 8px;min-width:0;flex-wrap:wrap;}
.report-remarks-page .rr-context{display:flex;align-items:center;gap:7px;max-width:100%;min-width:0;min-height:35px;flex:1 1 180px;text-align:left;
 border:1px solid var(--rr-border);border-radius:9px;padding:5px 9px;background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#172235) 7%);color:var(--text,#111827);cursor:pointer;}
.rr-context strong{font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:40%;}
.rr-context span{font-size:11px;color:var(--muted,#64748b);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.rr-context i{margin-left:auto;font-style:normal;color:var(--ba-primary);font-size:13px;}
.rr-count{font-size:11px;font-weight:750;white-space:nowrap;color:var(--muted,#64748b)}
.report-remarks-page .rr-primary,.report-remarks-page .rr-secondary{border:1px solid var(--ba-primary);min-height:34px;padding:6px 13px;border-radius:8px;font-size:12px;font-weight:800;cursor:pointer;white-space:nowrap;}
.report-remarks-page .rr-primary{color:white;background:var(--ba-primary)}
.report-remarks-page .rr-secondary{color:var(--ba-primary);background:transparent}
.report-remarks-page .rr-primary:disabled{opacity:.55;cursor:not-allowed}
.rr-table-wrap{width:100%;min-width:0;overflow-x:auto;overscroll-behavior-x:contain;border:1px solid var(--rr-border);border-radius:10px;background:var(--card-bg,var(--surface,#fff));scrollbar-color:var(--ba-primary) color-mix(in srgb,var(--ba-primary) 12%,transparent);scrollbar-width:thin}
.rr-table{width:100%;border-collapse:separate;border-spacing:0;table-layout:fixed;font-size:12px;color:var(--text,#111827)}
.rr-col-student{width:22%}.rr-col-basis{width:10%}.rr-col-status{width:12%}
.rr-table thead th{padding:10px 9px;text-align:left;background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 88%,var(--ba-primary) 12%);border-bottom:1px solid var(--rr-border);font-size:11px;font-weight:800;white-space:nowrap;}
.rr-table tbody td{padding:7px 8px;vertical-align:middle;border-bottom:1px solid var(--rr-border);background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 96%,var(--text,#1b2235) 4%);}
.rr-table tbody tr:nth-child(even) td{background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 91%,var(--text,#1b2235) 9%)}
.rr-table tbody tr:last-child td{border-bottom:0}.rr-table tbody tr:hover td{background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 94%,var(--ba-primary) 6%)}
.rr-person,.rr-card-head{display:flex;align-items:center;gap:8px;min-width:0}.rr-person>div,.rr-card-person{min-width:0;flex:1}
.rr-person strong,.rr-card-person strong{display:block;font-weight:800;font-size:12px;white-space:normal;line-height:1.35;overflow-wrap:anywhere}
.rr-person small,.rr-card-person small{display:block;font-size:10px;color:var(--muted,#64748b);line-height:1.35;margin-top:3px;overflow-wrap:anywhere}
.rr-avatar{display:grid;place-items:center;flex:0 0 36px;width:36px;height:36px;border-radius:9px;overflow:hidden;background:color-mix(in srgb,var(--ba-primary) 18%,var(--card-bg,#fff));color:var(--ba-primary);font-size:14px;}
.rr-avatar img{width:100%;height:100%;object-fit:cover;display:block}
.rr-table td small{display:block;color:var(--muted,#64748b);font-size:10px;line-height:1.4;}
.rr-basis-value{font-weight:800;font-size:12px}
.report-remarks-page .rr-table textarea,.report-remarks-page .rr-card textarea{resize:vertical;min-height:48px;max-width:100%;width:100%;padding:7px 9px;border:1px solid var(--rr-border);border-radius:7px;background:var(--input-bg,var(--surface,#fff));color:var(--text,#111827);font-weight:500;font-size:11px;line-height:1.4;box-shadow:none;}
.report-remarks-page textarea[readonly]{resize:none;overflow:hidden;background:transparent;border-color:transparent;padding:5px 2px;cursor:default;}
.report-remarks-page textarea[readonly]:focus{box-shadow:none;border-color:transparent;}
.rr-published{display:inline-flex;align-items:center;gap:5px;color:var(--text,#111827);font-size:10px;font-weight:650;white-space:nowrap;}
.report-remarks-page .rr-published input{flex:0 0 15px;width:15px;height:15px;min-height:15px;accent-color:var(--ba-primary);}
.rr-state{display:inline-block;margin-top:6px;border-radius:5px;padding:3px 6px;font-size:9px;font-weight:750;white-space:nowrap;}
.rr-state.ready{color:#15803d;background:rgba(22,163,74,.12)}.rr-state.missing{color:#b45309;background:rgba(245,158,11,.12)}
.rr-mobile-cards{display:none;gap:7px;}.rr-card{padding:10px;border:1px solid var(--rr-border);border-radius:10px;background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 94%,var(--text,#182235) 6%);min-width:0;}
.rr-card-basis{margin-left:auto;flex:0 0 auto;display:grid;justify-items:end;gap:3px;font-weight:800;color:var(--ba-primary);font-size:13px;}
.rr-card-basis small{font-weight:550;color:var(--muted,#64748b);font-size:9px;max-width:82px;text-align:right;overflow:hidden;text-overflow:ellipsis;}
.rr-card-fields{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px;margin-top:9px;}
.rr-card-fields label{display:grid;gap:3px;color:var(--muted,#64748b);font-size:10px;font-weight:800;}
.rr-card-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:6px;}
.rr-card-foot .rr-state{margin:0}.rr-analytics{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px}
.rr-analytics article{padding:12px;border:1px solid var(--rr-border);border-radius:10px;background:var(--card-bg,var(--surface,#fff));display:grid;gap:7px;}
.rr-analytics small{font-size:10px;color:var(--muted,#64748b)}.rr-analytics strong{font-size:21px;color:var(--ba-primary)}
/* Compact modal, with short header and collapsible editable bands. */
.ba-basis-backdrop .rr-basis-modal{width:min(650px,100%);padding:10px;max-height:min(86dvh,760px);border-radius:13px;overflow-y:auto;background:var(--card-bg,var(--surface,#fff));}
.rr-basis-modal .rr-modal-head{position:sticky;top:-10px;z-index:3;margin:-10px -10px 6px;padding:9px 11px;border-bottom:1px solid var(--rr-border);background:var(--card-bg,var(--surface,#fff));}
.rr-basis-modal .rr-modal-head h2{font-size:15px;letter-spacing:normal}.rr-basis-modal .rr-modal-head p{font-size:10px;margin:2px 0 0;line-height:1.2}
.rr-basis-modal .rr-modal-head button{width:32px;height:32px;min-height:32px;background:var(--surface,#fff);color:var(--text,#111827);border:1px solid var(--rr-border);}
.rr-basis-config{display:grid;grid-template-columns:1fr 1fr auto;gap:7px;align-items:end}
.rr-basis-config>label{min-width:0;display:grid;gap:4px;color:var(--muted,#64748b);font-size:10px;font-weight:800;}
.rr-basis-config select{width:100%;min-height:34px;border-radius:7px;padding:3px 5px;font-size:11px;}
.rr-basis-config .rr-check{display:flex;align-items:center;gap:5px;min-height:34px;white-space:nowrap;color:var(--text,#111827)}
.rr-check input{width:16px;min-height:16px;height:16px;accent-color:var(--ba-primary);}
.rr-source-note{margin:7px 0;color:var(--muted,#64748b);font-size:10px;line-height:1.35;}
.rr-basis-list{display:grid;gap:5px;}
.rr-band{border:1px solid var(--rr-border);border-radius:8px;background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 94%,var(--text,#182235) 6%);overflow:hidden;}
.rr-band summary{display:grid;grid-template-columns:minmax(0,110px) minmax(0,1fr) auto;gap:7px;align-items:center;padding:8px;cursor:pointer;list-style:none;}
.rr-band summary::-webkit-details-marker{display:none}.rr-band summary strong{font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.rr-band summary small{font-size:10px;color:var(--muted,#64748b);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.rr-band[open] summary{border-bottom:1px solid var(--rr-border)}.rr-band-body{display:grid;gap:7px;padding:8px;}
.rr-band-body label{display:grid;gap:3px;font-size:10px;color:var(--muted,#64748b);font-weight:700}.rr-band-body input{min-height:33px;border-radius:7px;padding:5px 8px;}
.rr-band-body textarea{min-height:58px;border-radius:7px;padding:6px 8px;font-size:11px}.rr-band-numbers{display:grid;grid-template-columns:1fr 1fr;gap:7px;}
.rr-band-body .rr-link{border:0;background:none;color:var(--ba-primary);padding:3px 0;text-align:left;font-size:10px;cursor:pointer;}
.rr-basis-utils{display:flex;gap:7px;margin:8px 0}.rr-basis-utils button{padding:6px 9px;border:1px solid var(--rr-border);border-radius:7px;background:var(--card-bg,var(--surface,#fff));color:var(--text,#111827);font-size:10px;cursor:pointer;}
.rr-modal-actions{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:6px;position:sticky;bottom:-10px;background:var(--card-bg,var(--surface,#fff));padding:9px 0 0;border-top:1px solid var(--rr-border);margin-top:9px;}
.rr-modal-actions button{padding:7px 10px;min-height:34px;border:1px solid var(--rr-border);background:var(--surface,#fff);color:var(--text,#111827);border-radius:7px;font-size:11px;font-weight:750;cursor:pointer;}
.rr-modal-actions button.primary{background:var(--ba-primary);border-color:var(--ba-primary);color:#fff}.rr-modal-actions button:disabled{opacity:.45}
.rr-bulk-modal .ba-form label{display:grid;gap:4px;font-size:11px}.rr-bulk-modal .rr-check{display:flex;gap:8px;align-items:center}
@media(min-width:768px){.rr-mobile-cards{display:none!important}.rr-table-wrap{display:block!important}}
@media(max-width:767px){.rr-table-wrap{display:none!important}.rr-mobile-cards{display:grid!important}.report-remarks-page .rr-command-row{gap:5px;padding-bottom:6px}.report-remarks-page .rr-context{min-height:32px;flex-basis:160px}.rr-context strong{max-width:48%}.rr-card-fields{grid-template-columns:1fr 1fr;}.ba-basis-backdrop .rr-basis-modal{max-height:calc(100dvh - 25px);}.rr-basis-config{grid-template-columns:1fr 1fr}.rr-basis-config .rr-check{grid-column:1 / -1;min-height:23px;}}
@media(max-width:385px){.rr-card-fields{grid-template-columns:1fr}.rr-card-basis small{max-width:62px}.rr-band summary{grid-template-columns:minmax(0,85px) minmax(0,1fr) auto}}
/* Honor manually selected Cards or Table in More menu, regardless of display width. */
.report-remarks-page.rr-force-cards .rr-table-wrap{display:none!important}
.report-remarks-page.rr-force-cards .rr-mobile-cards{display:grid!important}
.report-remarks-page.rr-force-table .rr-table-wrap{display:block!important}
.report-remarks-page.rr-force-table .rr-mobile-cards{display:none!important}
@media print{.rr-command-row,.rr-mobile-cards,.rr-modal-actions{display:none!important}.rr-table-wrap{display:block!important;overflow:visible!important}.rr-table textarea{border:0!important;background:transparent!important;resize:none!important}.rr-table tbody td{break-inside:avoid}}

.rr-select-student{display:block;padding:0;border:0;background:transparent;color:var(--text,#111827);text-align:left;font-size:12px;line-height:1.35;font-weight:800;cursor:pointer;overflow-wrap:anywhere;}
.rr-select-student:focus-visible{outline:2px solid var(--ba-primary);outline-offset:2px;border-radius:2px}
.rr-row-selected td:first-child{box-shadow:inset 3px 0 0 var(--ba-primary)}
.rr-card.rr-row-selected{border-color:var(--ba-primary)!important;}
.rr-basis-modal input,.rr-basis-modal select,.rr-basis-modal textarea,.rr-bulk-modal input,.rr-bulk-modal textarea{font:inherit;max-width:100%;color:var(--input-text,var(--text,#111827));background:var(--input-bg,var(--surface,#fff));border:1px solid var(--input-border,var(--border,rgba(0,0,0,.15)));border-radius:7px;}
.rr-basis-modal input[type=checkbox],.rr-bulk-modal input[type=checkbox]{width:16px;min-height:16px;height:16px;accent-color:var(--ba-primary)}
.rr-basis-modal *,.rr-bulk-modal *{box-sizing:border-box;min-width:0}
.rr-basis-modal details summary:focus-visible{outline:2px solid var(--ba-primary);outline-offset:-2px}

/* Teacher-only read-only fields, matching the Branch Admin surfaces. */
.report-remarks-page .rr-teacher-readonly {
  margin:0; min-height:40px; padding:7px 9px; font-size:11px; line-height:1.45;
  white-space:pre-wrap; overflow-wrap:anywhere; color:var(--text,#111827);
  background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#182235) 7%);
  border:1px solid var(--rr-border); border-radius:7px;
}
.report-remarks-page .rr-teacher-publication {
  display:inline-block; margin:2px 0 3px; font-size:10px; font-weight:750;
  color:var(--muted,#64748b);
}
.report-remarks-page .rr-teacher-notice {
  display:flex; align-items:center; justify-content:space-between; gap:12px;
  margin:0 0 7px; padding:9px 11px;
  border:1px solid var(--border,rgba(15,23,42,.15)); border-radius:9px;
  background:var(--card-bg,var(--surface,#fff)); color:var(--text,#111827); font-size:12px;
}
.report-remarks-page .rr-teacher-notice button {
  border:0; background:none; color:inherit; cursor:pointer; font-size:20px;
}
.rr-basis-locked { min-height:34px; display:grid; gap:3px; align-content:center; font-size:10px; }
.rr-basis-locked strong { color:var(--muted,#64748b); }
.rr-basis-locked span { font-size:11px; font-weight:750; }
`;var bx=c(41259),by=c(47911),bz=c(15715),bA=c(77765),bB=c(94907),bC=c(33638),bD=c(92821),bE=c(51290),bF=c(86148),bG=c(92409),bH=c(7536);let bI=()=>new Date().toISOString().slice(0,10),bJ=a=>null==a?"":String(a).trim(),bK=(a,b)=>bJ(a)===bJ(b),bL=a=>k.db[a];function bM(...a){for(let b of a){let a=bJ(b);if(a&&"0"!==a)return a}return""}function bN(a){let b=String(a.status||"").toLowerCase();return!a.isDeleted&&!1!==a.active&&!["inactive","deleted","archived","suspended"].includes(b)}function bO(a){let b=Number(a);return Number.isFinite(b)?Math.max(0,Math.round(b)):0}function bP(a,b){return b?Math.max(0,Math.min(100,Math.round(a/b*100))):0}function bQ(a){let b=String(a||"");return!b||b.startsWith("blob:")||b.startsWith("data:image/")?void 0:b}function bR(a){let b=bO(a?.daysOpened),c=Math.min(b||Number.MAX_SAFE_INTEGER,bO(a?.daysPresent));return{daysOpened:b,daysPresent:c,daysAbsent:Math.max(0,b-c),timesLate:bO(a?.timesLate),attendancePercent:bP(c,b)}}function bS(a){return a?a.charAt(0).toUpperCase()+a.slice(1):"Unmarked"}function bT(){let a=(0,u.useRouter)();(0,by.p)();let{loading:b,setLoading:c}=(0,z.J)(),{accountId:f,authenticated:g,loading:h}=(0,v.F)(),{settings:i,loading:j}=(0,w.t)(),{activeSchool:k,activeSchoolId:l,activeBranch:m,activeBranchId:n,loading:o}=(0,x.c)(),{activeMembership:q}=(0,bx.A)(),r=(0,e.useMemo)(()=>null,[]),t=(0,e.useMemo)(()=>null,[]),A=r?.membership||q||t||{},B=bM(r?.schoolId,A.schoolId,A.school?.id,l,k?.id,i?.schoolId,null),C=bM(r?.branchId,A.branchId,A.schoolBranchId,A.branch?.id,n,m?.id,i?.branchId,null),D=i?.primaryColor||"var(--primary-color, #2563eb)",E=p(),F=E.teacherId,I=E.permitted&&bK(E.accountId,f)&&bK(E.schoolId,B)&&bK(E.branchId,C),[J,M]=(0,e.useState)([]),[Q,R]=(0,e.useState)([]),[S,T]=(0,e.useState)([]),U=[f||"",B,C,F].join("|"),[V,W]=(0,e.useState)(""),[X,Y]=(0,e.useState)([]),[Z,$]=(0,e.useState)([]),[_,aa]=(0,e.useState)([]),[ab,ac]=(0,e.useState)([]),[ad,ae]=(0,e.useState)([]),[af,ag]=(0,e.useState)("termTotals"),[ah,ai]=(0,e.useState)("cards"),[aj,ak]=(0,e.useState)(String(i?.currentAcademicStructureId||"")),[al,am]=(0,e.useState)(String(i?.currentAcademicPeriodId||"")),[an,ao]=(0,e.useState)(""),ap=(0,e.useRef)(""),aq=(0,e.useRef)(""),ar=[f||"",B,C,F].join("|");(0,e.useRef)(ar);let as=()=>{aq.current=ar},[at,au]=(0,e.useState)(bI()),[av,aw]=(0,e.useState)(""),[ax,ay]=(0,e.useState)("all"),[az,aA]=(0,e.useState)({}),[aB,aC]=(0,e.useState)({}),[aD,aE]=(0,e.useState)(""),[aF,aG]=(0,e.useState)("all"),[aH,aI]=(0,e.useState)(!1),[aJ,aK]=(0,e.useState)(!1),[aL,aM]=(0,e.useState)(!1),[aN,aO]=(0,e.useState)(!1),[aP,aQ]=(0,e.useState)(null),[aR,aS]=(0,e.useState)(!1),[aT,aU]=(0,e.useState)(!1),[aV,aW]=(0,e.useState)(null),[aX,aY]=(0,e.useState)(null),[aZ,a$]=(0,e.useState)(""),[a_,a0]=(0,e.useState)(0),[a1,a2]=(0,e.useState)([]),[a3,a4]=(0,e.useState)([]),[a5,a6]=(0,e.useState)("file"),[a7,a8]=(0,e.useState)(""),[a9,ba]=(0,e.useState)(!1),[bb,bc]=(0,e.useState)(null),[bd,be]=(0,e.useState)(null),[bf,bg]=(0,e.useState)(null),[bh,bi]=(0,e.useState)(null),[bj,bk]=(0,e.useState)(at),[bl,bm]=(0,e.useState)(at),bn=(0,G.D)({accountId:f,ownerTable:"students",rows:J,fields:[{fieldKey:"photo",mediaIdKey:"photoMediaId"},{fieldKey:"coverPhoto",mediaIdKey:"coverPhotoMediaId"}]}),bo=a=>(!a.accountId||a.accountId===f)&&(!a.schoolId||bK(a.schoolId,B))&&(!a.branchId||bK(a.branchId,C))&&!a.isDeleted,bp=(a,b)=>{aQ({tone:a,message:b})},bq=()=>{M([]),R([]),T([]),Y([]),$([]),aa([]),ac([]),ae([])},br=async()=>{if(!E.ready){bq(),W(""),c(!1);return}if(!g||!f||!B||!C||!I||!E.ready){bq(),W(U),c(!1);return}try{c(!0);let[a,b,d,e,g,h,j,k]=await Promise.all([bL("students")?.toArray?.()||[],bL("classes")?.toArray?.()||[],bL("classTeachers")?.toArray?.()||[],bL("academicStructures")?.toArray?.()||[],bL("academicPeriods")?.toArray?.()||[],bL("studentEnrollments")?.toArray?.()||[],bL("attendance")?.toArray?.()||[],bL("studentAttendanceSummaries")?.toArray?.()||[]]),l=d.filter(a=>bo(a)&&bN(a)&&bK(a.teacherId,F)&&E.classTeacherClassIds.has(bJ(a.classId))),m=new Set(l.map(a=>bJ(a.classId)).filter(Boolean)),n=b.filter(a=>bo(a)&&bN(a)&&m.has(bJ(a.id))).sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""))),o=h.filter(a=>bo(a)&&m.has(bJ(a.classId))),p=new Set(o.filter(a=>!0!==a.isDeleted&&"withdrawn"!==a.status).map(a=>bJ(a.studentId))),q=a.filter(a=>bo(a)&&!["withdrawn","graduated"].includes(String(a.status||"").toLowerCase())&&(p.has(bJ(a.id))||m.has(bJ(a.currentClassId)))).sort((a,b)=>String(a.fullName||"").localeCompare(String(b.fullName||""))),r=e.filter(a=>bo(a)&&bN(a)).sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""))),s=g.filter(a=>bo(a)&&bN(a)).sort((a,b)=>Number(a.order||0)-Number(b.order||0)),t=j.filter(a=>bo(a)&&m.has(bJ(a.classId))),u=k.filter(a=>bo(a)&&m.has(bJ(a.classId)));M(q),R(n),T(l),Y(r),$(s),aa(o),ac(t),ae(u);let v=[f||"",B,C].join("|");if(ap.current!==v&&aq.current!==v){let a=function(a){let{students:b,classes:c,structures:d,periods:e,enrollments:f,attendanceRows:g,summaryRows:h,preferredStructureId:i,preferredPeriodId:j}=a;if(!b.length||!c.length||!e.length)return null;let k=new Map(b.map(a=>[bJ(a.id),a])),l=new Set(d.map(a=>bJ(a.id))),m=new Map,n=new Map,o=(a,b,c)=>`${a}|${b}|${c}`;b.forEach(a=>{let b=bJ(a.id),c=bJ(a.currentClassId);if(!b||!c||!bN(a))return;let d=n.get(c)||new Set;d.add(b),n.set(c,d)}),f.forEach(a=>{if(a.isDeleted||"active"!==a.status)return;let b=bJ(a.studentId),c=bJ(a.classId),d=bJ(a.academicStructureId),e=bJ(a.academicPeriodId);if(!b||!c||!d||!e||!k.has(b))return;let f=o(d,e,c),g=m.get(f)||new Set;g.add(b),m.set(f,g)});let p=new Map;h.forEach(a=>{if(a.isDeleted)return;let b=o(bJ(a.academicStructureId),bJ(a.academicPeriodId),bJ(a.classId)),c=bJ(a.studentId);if(!c)return;let d=p.get(b)||new Set;d.add(c),p.set(b,d)});let q=new Map;g.forEach(a=>{if(a.isDeleted)return;let b=o(bJ(a.academicStructureId),bJ(a.academicPeriodId),bJ(a.classId)),c=bJ(a.studentId);if(!c)return;let d=q.get(b)||new Set;d.add(c),q.set(b,d)});let r=[];for(let a of e){let b=bJ(a.academicStructureId),d=bJ(a.id);if(b&&d&&l.has(b))for(let e of c){let c=bJ(e.id);if(!c)continue;let f=o(b,d,c),g=new Set(m.get(f)||[]);if(n.get(c)?.forEach(a=>g.add(a)),!g.size)continue;let h=0;p.get(f)?.forEach(a=>{g.has(a)&&(h+=1)});let k=0;q.get(f)?.forEach(a=>{g.has(a)&&(k+=1)}),r.push({structureId:b,periodId:d,classId:c,tier:h?3:k?2:1,preferred:2*(d===j)+ +(b===i),matched:h||k,rosterCount:g.size,periodOrder:Number(a.order||0),className:String(e.name||"")})}}r.sort((a,b)=>b.tier-a.tier||b.preferred-a.preferred||b.matched-a.matched||b.rosterCount-a.rosterCount||b.periodOrder-a.periodOrder||a.className.localeCompare(b.className));let s=r[0];return s?{structureId:s.structureId,periodId:s.periodId,classId:s.classId}:null}({students:q,classes:n,structures:r,periods:s,enrollments:o,attendanceRows:t,summaryRows:u,preferredStructureId:bJ(i?.currentAcademicStructureId),preferredPeriodId:bJ(i?.currentAcademicPeriodId)});a&&(ak(a.structureId),am(a.periodId),ao(a.classId),ap.current=v)}}catch(a){console.error("Failed to load student attendance:",a),bq(),bp("error","Failed to load student attendance.")}finally{W(U),c(!1)}},bs=(0,e.useMemo)(()=>new Set(S.map(a=>bJ(a.classId)).filter(Boolean)),[S]),bt=!!an&&bs.has(bJ(an)),bu=I&&E.ready&&bt,bv=(0,e.useMemo)(()=>new Map(J.map(a=>[bJ(a.id),a])),[J]),bw=(0,e.useMemo)(()=>new Map(Q.map(a=>[bJ(a.id),a])),[Q]),bT=(0,e.useMemo)(()=>new Map(X.map(a=>[bJ(a.id),a])),[X]),bX=(0,e.useMemo)(()=>new Map(Z.map(a=>[bJ(a.id),a])),[Z]),b1=(0,e.useMemo)(()=>aj?Z.filter(a=>bK(a.academicStructureId,aj)):Z,[Z,aj]),b2=(0,e.useMemo)(()=>{let a=new Map;return ab.forEach(b=>{!b.isDeleted&&bK(b.classId,an)&&bK(b.academicStructureId,aj)&&bK(b.academicPeriodId,al)&&b.date===at&&a.set(bJ(b.studentId),b)}),a},[ab,an,aj,al,at]),b3=(0,e.useMemo)(()=>{let a=new Map;return ad.forEach(b=>{!b.isDeleted&&bK(b.classId,an)&&bK(b.academicStructureId,aj)&&bK(b.academicPeriodId,al)&&a.set(bJ(b.studentId),b)}),a},[ad,an,aj,al]),b6=(0,e.useMemo)(()=>{if(!aj||!al||!an)return[];let a=new Set,b=[];return _.forEach(c=>{if(c.isDeleted||"active"!==c.status||!bK(c.classId,an)||!bK(c.academicStructureId,aj)||!bK(c.academicPeriodId,al))return;let d=bv.get(bJ(c.studentId));if(!d)return;let e=bJ(d.id);!e||a.has(e)||(a.add(e),b.push({student:d,id:e,name:d.fullName||"Unnamed student",admissionNumber:d.admissionNumber||"No admission number",photo:bn[e]?.photo||bQ(d.photo),existingAttendance:b2.get(e),existingSummary:b3.get(e)}))}),J.forEach(c=>{let d=bJ(c.id);!(!d||a.has(d))&&bK(c.currentClassId,an)&&bN(c)&&(a.add(d),b.push({student:c,id:d,name:c.fullName||"Unnamed student",admissionNumber:c.admissionNumber||"No admission number",photo:bn[d]?.photo||bQ(c.photo),existingAttendance:b2.get(d),existingSummary:b3.get(d)}))}),b.sort((a,b)=>a.name.localeCompare(b.name))},[aj,al,an,_,J,bv,bn,b2,b3]),b7=bw.get(an)?.name||(an?"Selected class":"Select a class"),b8=bT.get(aj)?.name||(aj?"Selected structure":""),b9=bX.get(al)?.name||(al?"Selected period":""),ca=(0,e.useMemo)(()=>{let a=av.trim().toLowerCase();return b6.filter(b=>{if("daily"===af){let a=az[b.id];if("unmarked"===ax&&a||["present","absent","late"].includes(ax)&&a!==ax)return!1}return!a||`${b.name} ${b.admissionNumber}`.toLowerCase().includes(a)})},[b6,av,af,az,ax]),cb=(0,e.useMemo)(()=>{let a=b6.length,b=b6.filter(a=>"present"===az[a.id]).length,c=b6.filter(a=>"absent"===az[a.id]).length,d=b6.filter(a=>"late"===az[a.id]).length,e=b+c+d;return{total:a,present:b,absent:c,late:d,marked:e,unmarked:Math.max(0,a-e),completion:a?Math.round(e/a*100):0,attendanceRate:a?Math.round(b/a*100):0}},[b6,az]),cc=(0,e.useMemo)(()=>{let a=b6.map(a=>aB[a.id]||bR()),b=a.filter(a=>a.daysOpened>0).length,c=a.reduce((a,b)=>a+b.daysOpened,0),d=a.reduce((a,b)=>a+b.daysPresent,0);return{total:a.length,completed:b,missing:Math.max(0,a.length-b),average:c?Math.round(d/c*100):0,opened:c,present:d,absent:a.reduce((a,b)=>a+b.daysAbsent,0),late:a.reduce((a,b)=>a+b.timesLate,0)}},[b6,aB]);[aj,al,an,"daily"===af?at:"","daily"===af&&"all"!==ax?ax:""].filter(Boolean).length;let cd=(a,b)=>{aA(c=>({...c,[a]:b}))},ce=a=>{aA(b=>{let c={...b};return delete c[a],c})},cf=(a,b,c)=>{aC(d=>{let e=d[a]||bR(),f=bR({...e,[b]:bO(c)});return{...d,[a]:f}})},cg=async()=>{for(let a of b6){let b=az[a.id],c=b2.get(a.id);if(!b){c?.id&&await (0,y.R8)("attendance",bJ(c.id));continue}if(c?.id&&c.status===b)continue;let d={accountId:f??void 0,schoolId:B,branchId:C,studentId:a.id,classId:an,academicStructureId:aj,academicPeriodId:al,date:at,status:b,isDeleted:!1};c?.id?await (0,y.Po)("attendance",bJ(c.id),d):await (0,y.oJ)("attendance",d)}},ch=async()=>{for(let a of b6){let b=aB[a.id]||bR(),c=b3.get(a.id);if(!b.daysOpened&&!b.daysPresent&&!b.timesLate){c?.id&&await (0,y.R8)("studentAttendanceSummaries",bJ(c.id));continue}if(b.daysPresent>b.daysOpened)throw Error(`${a.name} has more days present than days opened.`);let d={accountId:f??void 0,schoolId:B,branchId:C,studentId:a.id,classId:an,academicStructureId:aj,academicPeriodId:al,entryMode:"manual",daysOpened:b.daysOpened,daysPresent:b.daysPresent,daysAbsent:Math.max(0,b.daysOpened-b.daysPresent),timesLate:b.timesLate,attendancePercent:bP(b.daysPresent,b.daysOpened),active:!0,isDeleted:!1};c?.id?await (0,y.Po)("studentAttendanceSummaries",bJ(c.id),d):await (0,y.oJ)("studentAttendanceSummaries",d)}},ci=async()=>{if(!bu)return void bp("error","Only the assigned class teacher can edit attendance for this class.");if(!g||!f)return void bp("error","Sign in first.");if(!B||!C)return void bp("error","Select a school branch first.");if(!aj)return void bp("error","Select an academic structure.");if(!al)return void bp("error","Select an academic period.");if(!an)return void bp("error","Select a class.");if("daily"===af&&!at)return void bp("error","Select a date.");if(!await s({accountId:String(f),schoolId:B,branchId:C,teacherId:F},an))return void bp("error","This class is no longer assigned to you as class teacher.");try{aO(!0),"daily"===af?await cg():await ch(),await br(),bp("success","daily"===af?"Daily attendance saved successfully.":"Term attendance totals saved successfully.")}catch(a){console.error("Failed to save attendance:",a),bp("error",a instanceof Error?a.message:"Failed to save attendance.")}finally{aO(!1)}},cj=()=>{if(!f||!B||!C)throw Error("Select an account and branch first.");if(!aj||!al||!an)throw Error("Select an academic structure, academic period and class first.");if(!I||!bs.has(bJ(an)))throw Error("Class-teacher assignment required for this attendance register.");return{accountId:String(f),schoolId:B,branchId:C,classId:an,academicStructureId:aj,academicPeriodId:al,date:"daily"===af?at:void 0}},ck=()=>({...cj(),schoolName:String(k?.name||"")||void 0,branchName:String(m?.name||"")||void 0,className:b7,academicStructureName:b8||void 0,academicPeriodName:b9||void 0}),cl=()=>b6.map(a=>({id:a.id,admissionNumber:a.student?.admissionNumber||void 0,fullName:a.name})),cm=()=>{aW(null),aY(null),a$(""),a0(0),a2([]),a4([]),bc(null),be(null),bg(null),a6("file"),a8(""),ba(!1)},cn=()=>{a9||(aS(!1),cm())},co=()=>{try{cj()}catch(a){bp("error",a instanceof Error?a.message:"Choose the attendance context first."),aI(!0);return}aK(!1),bk(at||bI()),bm(at||bI()),aU(!0)},cp=async a=>{let b=await a.arrayBuffer(),c=bA.LF(b,{type:"array",cellDates:!0}),d=c.SheetNames.map((a,b)=>{let d=c.Sheets[a],e=bA.Wp.sheet_to_json(d,{header:1,raw:!0,defval:null}).map(a=>a.map(a=>null==a||"string"==typeof a||"number"==typeof a||"boolean"==typeof a||a instanceof Date?a:String(a))),f=e.reduce((a,b)=>Math.max(a,b.length),0);return{name:a,index:b,rows:e,rowCount:e.length,columnCount:f}});return{fileName:a.name,sheetNames:c.SheetNames,sheets:d}},cq=()=>aX&&(aX.sheets.find(a=>a.name===aZ)||aX.sheets[0])||null,cr=(a,b)=>{let c=b??(0,P.J)(a),d=(0,P.B)(a,{headerRowIndex:c,skipEmptyRows:!0,trimStrings:!0}),e=bD.n6;"daily"===af&&(e="grid"===(0,bD.kF)(d.columns)?bD.mw.filter(a=>"date"!==a.key&&"status"!==a.key):bD.mw);let f=(0,bC.WR)(d.columns,e);a0(c),a2(d.columns),a4(f)},cs=async a=>{if(aW(a),aY(null),a$(""),a2([]),a4([]),bc(null),be(null),bg(null),a8(""),!a)return void a6("file");try{ba(!0);let b=await cp(a);if(!b.sheets.length)throw Error("This workbook does not contain any worksheets.");let c=b.sheets.find(a=>!a.name.toLowerCase().startsWith("_eleeveon_"))||b.sheets[0];aY(b),a$(c.name),cr(c),a6("sheet")}catch(a){console.error("Failed to read attendance workbook:",a),bp("error",a instanceof Error?a.message:"Failed to read the Excel workbook."),aW(null)}finally{ba(!1)}},ct=async()=>{if(!bu||!an)return void bp("error","Select a class you are assigned to as class teacher.");let a=cq();if(!a)return void bp("error","Choose a worksheet first.");try{ba(!0);let b=cj(),c=await (0,bF.uk)(b);if("daily"===af){let d=(0,bD.H5)({sheet:a,headerRowIndex:a_,mappings:a3,defaultDate:at,ignoreBlankStatuses:!0}),e=(0,bE.Oz)({records:d.records,rowNumbers:d.rowNumbers,context:b,students:c.students,enrollments:c.enrollments});bc(e),be(null)}else{let d=(0,bD.s9)({sheet:a,headerRowIndex:a_,mappings:a3}),e=(0,bE.N7)({records:d.records,rowNumbers:d.rowNumbers,context:b,students:c.students,enrollments:c.enrollments});be(e),bc(null)}a8([b.accountId,b.schoolId,b.branchId,b.classId,b.academicStructureId,b.academicPeriodId,af].join("|")),a6("preview")}catch(a){console.error("Failed to preview attendance import:",a),bp("error",a instanceof Error?a.message:"Failed to validate the attendance workbook.")}finally{ba(!1)}},cu=async()=>{if(!bu||!an||!await s({accountId:String(f),schoolId:B,branchId:C,teacherId:F},an))return void bp("error","Only the currently assigned class teacher can import attendance.");try{let a;ba(!0);let b=cj(),c=[b.accountId,b.schoolId,b.branchId,b.classId,b.academicStructureId,b.academicPeriodId,af].join("|");if(!a7||c!==a7)throw Error("The selected class, period, or mode changed since Excel preview. Please preview again.");if("daily"===af){if(!bb)throw Error("Preview the daily attendance import first.");a=await (0,bF.MK)(bb,b)}else{if(!bd)throw Error("Preview the term attendance import first.");a=await (0,bF.B2)(bd,b)}bg(a),a6("result"),await br(),bp(a.failed?"info":"success",`Excel import finished: ${a.created} created, ${a.updated} updated, ${a.skipped} skipped${a.failed?`, ${a.failed} failed`:""}.`)}catch(a){console.error("Failed to import attendance workbook:",a),bp("error",a instanceof Error?a.message:"Failed to import attendance.")}finally{ba(!1)}},cv=async(a,b)=>{try{bi(a),await b()}catch(a){console.error("Attendance Excel export failed:",a),bp("error",a instanceof Error?a.message:"Failed to create the Excel workbook.")}finally{bi(null)}},cw=()=>{let a=ck(),b=(0,bH.z7)({context:a,students:cl(),date:at});b.sheets[0].rows=b6.map(a=>({studentId:a.id,admissionNumber:a.student?.admissionNumber||"",studentName:a.name,date:at,status:az[a.id]||""})),(0,bG.w)(b)},cx=()=>{let a=ck(),b=(0,bH.mY)({context:a,students:cl()});b.sheets[0].rows=b6.map(a=>{let b=aB[a.id]||bR();return{studentId:a.id,admissionNumber:a.student?.admissionNumber||"",studentName:a.name,daysOpened:b.daysOpened,daysPresent:b.daysPresent,timesLate:b.timesLate,daysAbsent:b.daysAbsent,attendancePercent:b.attendancePercent}}),(0,bG.w)(b)},cy=()=>{let a=ck();"daily"===af?(0,bG.w)((0,bH.z7)({context:a,students:cl(),date:at})):(0,bG.w)((0,bH.mY)({context:a,students:cl()}))},cz=()=>{if(!bj||!bl)throw Error("Choose a start and end date for the register.");(0,bG.w)((0,bH.VR)({context:ck(),students:cl(),startDate:bj,endDate:bl}))};return((0,H.TV)("reportsWorkspace",{add:()=>{aI(!0)},search:aw,filter:()=>aI(!0),print:()=>co(),more:()=>aK(!0)}),h||o||j||!E.ready||I&&V!==U||b)?(0,d.jsx)(b4,{primary:D,title:"Opening Teacher Attendance...",text:"Checking your class-teacher assignments, enrolled students and saved attendance."}):g&&f?B&&C?I&&!S.length?(0,d.jsx)(b4,{primary:D,title:"No class-teacher assignment",text:"Attendance is available only for classes where you are assigned as class teacher. Ask your school administrator to check the assignment."}):(0,d.jsx)(bz.Bk,{allowed:I,fallback:(0,d.jsx)(b4,{primary:D,title:"Attendance access restricted",text:"Open the Teacher Portal with a linked teacher membership to view attendance."}),children:(0,d.jsxs)("main",{className:"ba-page attendance-workspace",style:{"--ba-primary":D},children:[(0,d.jsx)("style",{children:b5}),aP?(0,d.jsxs)("section",{className:`ba-toast ${aP.tone}`,children:[(0,d.jsx)("span",{children:aP.message}),(0,d.jsx)("button",{type:"button",onClick:()=>aQ(null),children:"\xd7"})]}):null,(0,d.jsxs)("div",{className:"attendance-work-row","aria-label":"Attendance context and saving",children:[(0,d.jsxs)("button",{type:"button",className:"attendance-context",onClick:()=>aI(!0),"aria-label":"Select attendance structure, period, class and date",title:"Change class, term or date",children:[(0,d.jsx)("span",{className:"attendance-context-class",children:an?b7:"Select class"}),(0,d.jsx)("span",{className:"attendance-context-period",children:"daily"===af?at:"Term totals"}),(0,d.jsx)("span",{"aria-hidden":"true",children:"⌄"})]}),(0,d.jsx)("button",{type:"button",className:`attendance-progress status-dot-mini ${"daily"===af?cb.total&&100===cb.completion?"green":cb.marked?"orange":"gray":cc.total&&cc.completed===cc.total?"green":cc.completed?"orange":"gray"}`,onClick:()=>aM(!0),title:"Attendance progress","aria-label":"View attendance status",children:"daily"===af?`${cb.marked}/${cb.total}`:`${cc.completed}/${cc.total}`}),bu?(0,d.jsx)("button",{type:"button",className:"ba-save-inline",onClick:ci,disabled:aN||!aj||!al||!an,children:aN?"Saving…":"Save"}):null]}),"analytics"===ah?(0,d.jsx)(bW,{entryMode:af,daily:cb,term:cc}):"daily"===af?"table"===ah?(0,d.jsx)(bY,{rows:ca,drafts:az,setStatus:cd,clearStatus:ce,primary:D,editable:bu}):(0,d.jsx)("section",{className:"ba-list",children:ca.map(a=>{let b=az[a.id];return(0,d.jsxs)("article",{className:"attendance-row",children:[(0,d.jsx)(bU,{name:a.name,photo:a.photo,primary:D}),(0,d.jsxs)("span",{className:"attendance-main",children:[(0,d.jsx)("strong",{children:a.name}),(0,d.jsx)("small",{children:a.admissionNumber})]}),(0,d.jsxs)("span",{className:"attendance-status-actions",children:[["present","absent","late"].map(c=>(0,d.jsx)("button",{type:"button",className:`${c} ${b===c?"active":""}`,disabled:!bu,title:bS(c),onClick:()=>cd(a.id,c),children:c.slice(0,1).toUpperCase()},c)),(0,d.jsx)("button",{type:"button",className:"clear",disabled:!bu,title:"Clear",onClick:()=>ce(a.id),children:"\xd7"}),(0,d.jsx)("span",{className:`status-dot-mini ${"present"===b?"green":"absent"===b?"red":"late"===b?"orange":"gray"}`})]})]},a.id)})}):"table"===ah?(0,d.jsx)(bZ,{rows:ca,drafts:aB,updateDraft:cf,primary:D,editable:bu}):(0,d.jsx)("section",{className:"ba-list",children:ca.map(a=>{let b=aB[a.id]||bR();return(0,d.jsxs)("article",{className:"term-row",children:[(0,d.jsxs)("div",{className:"term-student",children:[(0,d.jsx)(bU,{name:a.name,photo:a.photo,primary:D}),(0,d.jsxs)("span",{children:[(0,d.jsx)("strong",{children:a.name}),(0,d.jsx)("small",{children:a.admissionNumber})]}),(0,d.jsxs)("b",{children:[b.attendancePercent,"%"]})]}),(0,d.jsxs)("div",{className:"term-input-grid",children:[(0,d.jsx)(bV,{label:"Opened",value:b.daysOpened,disabled:!bu,onChange:b=>cf(a.id,"daysOpened",b)}),(0,d.jsx)(bV,{label:"Present",value:b.daysPresent,disabled:!bu,onChange:b=>cf(a.id,"daysPresent",b)}),(0,d.jsx)(bV,{label:"Absent",value:b.daysAbsent,readOnly:!0}),(0,d.jsx)(bV,{label:"Late",value:b.timesLate,disabled:!bu,onChange:b=>cf(a.id,"timesLate",b)})]})]},a.id)})}),ca.length?null:(0,d.jsxs)("section",{className:"ba-empty",children:[(0,d.jsx)("div",{className:"ba-empty-icon",children:"\uD83D\uDCC5"}),(0,d.jsx)("h3",{children:an?"No students found":"Select a class"}),(0,d.jsx)("p",{children:an?"No students match the current search or filters.":"Open the slider filter and choose an academic structure, period and class."})]}),aH?(0,d.jsx)(b$,{search:av,onSearch:aw,entryMode:af,structureId:aj,periodId:al,classId:an,date:at,statusFilter:ax,structures:X,periods:b1,classes:Q,bulkDaysOpened:aD,bulkScope:aF,onEntryMode:a=>{ag(a),"termTotals"===a&&ay("all")},onStructure:a=>{as(),ak(a),am(""),ao("")},onPeriod:a=>{as(),am(a),ao("")},onClass:a=>{as(),ao(a)},onDate:au,onStatus:ay,onBulkDaysOpened:aE,onBulkScope:aG,onApplyBulkDaysOpened:()=>{let a=bO(aD);if(!an||!aj||!al)return void bp("error","Select an academic structure, period and class first.");if(!a)return void bp("error","Enter a valid number of days opened.");let b="shown"===aF?ca:b6;b.length?(aC(c=>{let d={...c};return b.forEach(b=>{let c=d[b.id]||bR();d[b.id]=bR({...c,daysOpened:a,daysPresent:Math.min(c.daysPresent,a)})}),d}),bp("success",`Days opened applied to ${b.length} ${1===b.length?"student":"students"}.`)):bp("info","There are no students to update.")},onClose:()=>aI(!1)}):null,aJ?(0,d.jsx)(b_,{entryMode:af,viewMode:ah,canEdit:bu,onViewMode:a=>{ai(a),aK(!1)},onMarkAll:a=>{aA(b=>{let c={...b};return ca.forEach(b=>{c[b.id]=a}),c}),aK(!1)},onClearShown:()=>{"daily"===af?aA(a=>{let b={...a};return ca.forEach(a=>{delete b[a.id]}),b}):aC(a=>{let b={...a};return ca.forEach(a=>{b[a.id]=bR()}),b}),aK(!1)},onOpenBulkDays:()=>{aK(!1),aI(!0)},onImportExcel:()=>{try{cj()}catch(a){bp("error",a instanceof Error?a.message:"Choose the attendance context first."),aI(!0);return}bu?(aK(!1),cm(),aS(!0)):bp("error","You do not have permission to import attendance.")},onExportExcel:co,onRefresh:async()=>{aK(!1),await br()},onClose:()=>aK(!1)}):null,aL?(0,d.jsx)(b0,{entryMode:af,daily:cb,term:cc,onClose:()=>aM(!1)}):null,(0,d.jsxs)(N.A,{open:aR,onClose:cn,title:"daily"===af?"Import Daily Attendance":"Import Term Attendance",subtitle:`${b7}${b9?` \xb7 ${b9}`:""}`,step:a5,busy:a9,width:860,footer:"file"===a5?(0,d.jsxs)("div",{className:"attendance-excel-footer",children:[(0,d.jsx)("button",{type:"button",className:"secondary",onClick:cn,disabled:a9,children:"Cancel"}),(0,d.jsx)("button",{type:"button",className:"primary",disabled:!aV||!aX||a9,onClick:()=>a6("sheet"),children:"Continue"})]}):"sheet"===a5?(0,d.jsxs)("div",{className:"attendance-excel-footer",children:[(0,d.jsx)("button",{type:"button",className:"secondary",onClick:()=>a6("file"),disabled:a9,children:"Back"}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:()=>{let a=cq();if(!a)return void bp("error","Choose a worksheet first.");try{cr(a,a_),a6("mapping")}catch(a){bp("error",a instanceof Error?a.message:"Could not prepare the worksheet columns.")}},disabled:!aZ||a9,children:"Match columns"})]}):"mapping"===a5?(0,d.jsxs)("div",{className:"attendance-excel-footer",children:[(0,d.jsx)("button",{type:"button",className:"secondary",onClick:()=>a6("sheet"),disabled:a9,children:"Back"}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:ct,disabled:a9,children:"Preview import"})]}):"preview"===a5?(0,d.jsxs)("div",{className:"attendance-excel-footer",children:[(0,d.jsx)("button",{type:"button",className:"secondary",onClick:()=>a6("mapping"),disabled:a9,children:"Back"}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:cu,disabled:a9||("daily"===af?!bb?.valid:!bd?.valid),children:"Import attendance"})]}):(0,d.jsx)("div",{className:"attendance-excel-footer",children:(0,d.jsx)("button",{type:"button",className:"primary",onClick:cn,disabled:a9,children:"Done"})}),children:["file"===a5?(0,d.jsxs)("div",{className:"attendance-excel-stack",children:[(0,d.jsxs)("div",{className:"attendance-excel-context",children:[(0,d.jsx)("strong",{children:"daily"===af?"Daily Register":"Term Totals"}),(0,d.jsx)("span",{children:b7}),(0,d.jsx)("span",{children:b9}),"daily"===af?(0,d.jsx)("span",{children:at}):null]}),(0,d.jsx)(K.A,{value:aV,onChange:cs,disabled:a9,label:"Choose attendance workbook",description:"daily"===af?"Use an Eleeveon workbook or an existing daily attendance sheet.":"Use an Eleeveon workbook or an existing term-attendance sheet."}),(0,d.jsxs)("div",{className:"attendance-excel-note",children:[(0,d.jsx)("strong",{children:"Safe import"}),(0,d.jsx)("span",{children:"Nothing is changed until the workbook passes validation and you confirm the import."})]})]}):null,"sheet"===a5?(0,d.jsxs)("div",{className:"attendance-excel-stack",children:[(0,d.jsxs)("label",{className:"attendance-excel-field",children:[(0,d.jsx)("span",{children:"Worksheet"}),(0,d.jsx)("select",{value:aZ,onChange:a=>{let b=a.target.value;a$(b);let c=aX?.sheets.find(a=>a.name===b);c&&cr(c)},children:(aX?.sheets||[]).map(a=>(0,d.jsxs)("option",{value:a.name,children:[a.name," \xb7 ",a.rowCount," rows"]},a.name))})]}),(0,d.jsxs)("label",{className:"attendance-excel-field",children:[(0,d.jsx)("span",{children:"Header row"}),(0,d.jsx)("input",{type:"number",min:1,max:Math.max(1,cq()?.rowCount||1),value:a_+1,onChange:a=>{let b=Math.max(0,Number(a.target.value||1)-1);a0(b);let c=cq();if(c)try{cr(c,b)}catch{}}}),(0,d.jsxs)("small",{children:["Eleeveon detected row ",a_+1,". Change it if your column headings are on another row."]})]}),(0,d.jsxs)("div",{className:"attendance-excel-note",children:[(0,d.jsx)("strong",{children:"daily"===af?"Daily spreadsheet":"Term totals spreadsheet"}),(0,d.jsx)("span",{children:"daily"===af?"Daily imports can use Student \xb7 Date \xb7 Status rows or a register with dates across the columns.":"Term totals use Days Opened, Days Present and Times Late. Eleeveon recalculates Days Absent and Attendance %."})]})]}):null,"mapping"===a5?(0,d.jsxs)("div",{className:"attendance-excel-stack",children:[(0,d.jsxs)("label",{className:"attendance-excel-field",children:[(0,d.jsx)("span",{children:"Header row"}),(0,d.jsx)("input",{type:"number",min:1,value:a_+1,onChange:a=>{let b=Math.max(0,Number(a.target.value||1)-1),c=cq();if(c)try{cr(c,b)}catch(a){bp("error",a instanceof Error?a.message:"Could not read that header row.")}}})]}),(0,d.jsx)(L.A,{columns:a1,fields:"daily"===af&&"grid"===(0,bD.kF)(a1)?bD.mw.filter(a=>"date"!==a.key&&"status"!==a.key):"daily"===af?bD.mw:bD.n6,mappings:a3,onChange:a4,disabled:a9,title:"Match attendance columns",description:"daily"===af&&"grid"===(0,bD.kF)(a1)?"The date columns were detected automatically. Match the student identity columns below.":"Confirm which spreadsheet columns correspond to the attendance fields."})]}):null,"preview"===a5&&bb?(0,d.jsx)(bB.A,{validation:bb,title:"Daily attendance preview",description:"Check student matches, dates and statuses before importing.",columns:[{key:"studentName",label:"Student"},{key:"admissionNumber",label:"Admission No."},{key:"date",label:"Date"},{key:"status",label:"Status"}]}):null,"preview"===a5&&bd?(0,d.jsx)(bB.A,{validation:bd,title:"Term attendance preview",description:"Days Absent and Attendance % are recalculated by Eleeveon.",columns:[{key:"studentName",label:"Student"},{key:"daysOpened",label:"Opened"},{key:"daysPresent",label:"Present"},{key:"daysAbsent",label:"Absent"},{key:"timesLate",label:"Late"},{key:"attendancePercent",label:"Attendance %",render:a=>`${a.attendancePercent}%`}]}):null,"result"===a5&&bf?(0,d.jsxs)("div",{className:"attendance-excel-result",children:[(0,d.jsx)("div",{className:"attendance-excel-result-icon",children:"✓"}),(0,d.jsx)("h3",{children:"Attendance import complete"}),(0,d.jsx)("p",{children:"The workbook has been applied through Eleeveon's local-first attendance records and will use the normal sync pipeline."}),(0,d.jsxs)("div",{className:"attendance-excel-result-grid",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:bf.created}),(0,d.jsx)("span",{children:"Created"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:bf.updated}),(0,d.jsx)("span",{children:"Updated"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:bf.skipped}),(0,d.jsx)("span",{children:"Skipped"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:bf.failed}),(0,d.jsx)("span",{children:"Failed"})]})]})]}):null]}),(0,d.jsx)(O.A,{open:aT,onClose:()=>{bh||aU(!1)},title:"daily"===af?"Daily Attendance Excel":"Term Attendance Excel",subtitle:`${b7}${b9?` \xb7 ${b9}`:""}`,busyKey:bh,headerContent:"daily"===af?(0,d.jsxs)("div",{className:"attendance-excel-register-range",children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Register start"}),(0,d.jsx)("input",{type:"date",value:bj,onChange:a=>bk(a.target.value)})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Register end"}),(0,d.jsx)("input",{type:"date",value:bl,onChange:a=>bm(a.target.value)})]})]}):null,actions:"daily"===af?[{key:"export-current",title:"Export current daily attendance",description:"Download the current date with the statuses already entered in Eleeveon.",badge:at,onClick:()=>cv("export-current",cw)},{key:"blank-template",title:"Download daily template",description:"Create a clean sheet for this class and date.",onClick:()=>cv("blank-template",cy)},{key:"register-template",title:"Download multi-day register",description:"Create a student register with one attendance column for each date in the selected range.",onClick:()=>cv("register-template",cz)}]:[{key:"export-current",title:"Export current term totals",description:"Download the current term totals already entered in Eleeveon.",onClick:()=>cv("export-current",cx)},{key:"blank-template",title:"Download term template",description:"Create a clean term-attendance sheet for this class.",onClick:()=>cv("blank-template",cy)}]})]})}):(0,d.jsx)(b4,{primary:D,title:"No branch workspace selected",text:"Select the correct branch workspace and reopen attendance.",action:(0,d.jsx)("button",{type:"button",className:"ba-state-button",onClick:()=>a.push("/account"),children:"Go to Account Setup"})}):(0,d.jsx)(b4,{primary:D,title:"Redirecting to login...",text:"You must sign in before recording attendance."})}function bU({name:a,photo:b,primary:c}){return(0,d.jsx)("div",{className:"ba-avatar",style:{background:b?`url(${b}) center/cover`:`linear-gradient(135deg, ${c}, rgba(15,23,42,.9))`},children:b?null:String(a||"S").slice(0,1).toUpperCase()})}function bV({label:a,value:b,onChange:c,readOnly:e,disabled:f}){return(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:a}),(0,d.jsx)("input",{type:"number",min:0,inputMode:"numeric",value:b,readOnly:e,disabled:f,onChange:a=>c?.(Number(a.target.value))})]})}function bW({entryMode:a,daily:b,term:c}){return(0,d.jsx)("section",{className:"ba-analysis-grid",children:"daily"===a?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(bX,{title:"Present",value:b.present}),(0,d.jsx)(bX,{title:"Absent",value:b.absent}),(0,d.jsx)(bX,{title:"Late",value:b.late}),(0,d.jsx)(bX,{title:"Completion",value:`${b.completion}%`}),(0,d.jsx)(bX,{title:"Attendance rate",value:`${b.attendanceRate}%`}),(0,d.jsx)(bX,{title:"Unmarked",value:b.unmarked})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(bX,{title:"Completed",value:c.completed}),(0,d.jsx)(bX,{title:"Missing",value:c.missing}),(0,d.jsx)(bX,{title:"Average attendance",value:`${c.average}%`}),(0,d.jsx)(bX,{title:"Days opened",value:c.opened}),(0,d.jsx)(bX,{title:"Present",value:c.present}),(0,d.jsx)(bX,{title:"Times late",value:c.late})]})})}function bX({title:a,value:b}){return(0,d.jsxs)("article",{className:"ba-analysis",children:[(0,d.jsx)("span",{children:a}),(0,d.jsx)("strong",{children:b})]})}function bY({rows:a,drafts:b,setStatus:c,clearStatus:e,primary:f,editable:g}){return(0,d.jsx)("section",{className:"ba-table-card",children:(0,d.jsx)("div",{className:"ba-table-scroll",children:(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsxs)("th",{children:["Students (",a.length,")"]}),(0,d.jsx)("th",{children:"Admission No."}),(0,d.jsx)("th",{children:"Status"}),(0,d.jsx)("th",{children:"Entry"})]})}),(0,d.jsx)("tbody",{children:a.map(a=>{let h=b[a.id];return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsxs)("div",{className:"table-student",children:[(0,d.jsx)(bU,{name:a.name,photo:a.photo,primary:f}),(0,d.jsx)("strong",{children:a.name})]})}),(0,d.jsx)("td",{children:a.admissionNumber}),(0,d.jsx)("td",{children:bS(h)}),(0,d.jsx)("td",{children:(0,d.jsxs)("div",{className:"table-actions",children:[["present","absent","late"].map(b=>(0,d.jsx)("button",{type:"button",disabled:!g,className:h===b?"active":"",onClick:()=>c(a.id,b),children:b.slice(0,1).toUpperCase()},b)),(0,d.jsx)("button",{type:"button",disabled:!g,onClick:()=>e(a.id),children:"\xd7"})]})})]},a.id)})})]})})})}function bZ({rows:a,drafts:b,updateDraft:c,primary:e,editable:f}){return(0,d.jsx)("section",{className:"ba-table-card",children:(0,d.jsx)("div",{className:"ba-table-scroll",children:(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsxs)("th",{children:["Students (",a.length,")"]}),(0,d.jsx)("th",{children:"Opened"}),(0,d.jsx)("th",{children:"Present"}),(0,d.jsx)("th",{children:"Absent"}),(0,d.jsx)("th",{children:"Late"}),(0,d.jsx)("th",{children:"Attendance"})]})}),(0,d.jsx)("tbody",{children:a.map(a=>{let g=b[a.id]||bR();return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsxs)("div",{className:"table-student",children:[(0,d.jsx)(bU,{name:a.name,photo:a.photo,primary:e}),(0,d.jsxs)("span",{children:[(0,d.jsx)("strong",{children:a.name}),(0,d.jsx)("small",{children:a.admissionNumber})]})]})}),(0,d.jsx)("td",{children:(0,d.jsx)("input",{className:"table-number",type:"number",min:0,value:g.daysOpened,disabled:!f,onChange:b=>c(a.id,"daysOpened",Number(b.target.value))})}),(0,d.jsx)("td",{children:(0,d.jsx)("input",{className:"table-number",type:"number",min:0,value:g.daysPresent,disabled:!f,onChange:b=>c(a.id,"daysPresent",Number(b.target.value))})}),(0,d.jsx)("td",{children:(0,d.jsx)("input",{className:"table-number",type:"number",value:g.daysAbsent,readOnly:!0})}),(0,d.jsx)("td",{children:(0,d.jsx)("input",{className:"table-number",type:"number",min:0,value:g.timesLate,disabled:!f,onChange:b=>c(a.id,"timesLate",Number(b.target.value))})}),(0,d.jsx)("td",{children:(0,d.jsxs)("strong",{children:[g.attendancePercent,"%"]})})]},a.id)})})]})})})}function b$(a){return(0,d.jsxs)(b2,{title:"Attendance Setup",text:"Choose the register type and working context.",onClose:a.onClose,children:[(0,d.jsxs)("div",{className:"attendance-search-in-filter",children:[(0,d.jsx)("label",{htmlFor:"attendance-student-search",children:"Search students"}),(0,d.jsx)("input",{id:"attendance-student-search",type:"search",value:a.search,onChange:b=>a.onSearch(b.target.value),placeholder:"Name or admission number"})]}),(0,d.jsxs)("div",{className:"filter-section",children:[(0,d.jsx)("span",{className:"filter-section-label",children:"Register Type"}),(0,d.jsxs)("section",{className:"mode-switch",children:[(0,d.jsxs)("button",{type:"button",className:"daily"===a.entryMode?"active":"",onClick:()=>a.onEntryMode("daily"),children:[(0,d.jsx)("strong",{children:"Daily Register"}),(0,d.jsx)("small",{children:"Present, absent and late by date"})]}),(0,d.jsxs)("button",{type:"button",className:"termTotals"===a.entryMode?"active":"",onClick:()=>a.onEntryMode("termTotals"),children:[(0,d.jsx)("strong",{children:"Term Totals"}),(0,d.jsx)("small",{children:"Opened, present, absent and late"})]})]})]}),(0,d.jsxs)("div",{className:"ba-form",children:[(0,d.jsx)(b3,{label:"Academic Structure",children:(0,d.jsxs)("select",{value:a.structureId,onChange:b=>a.onStructure(b.target.value),children:[(0,d.jsx)("option",{value:"",children:"Select structure"}),a.structures.map(a=>(0,d.jsx)("option",{value:bJ(a.id),children:a.name||"Unnamed"},bJ(a.id)))]})}),(0,d.jsx)(b3,{label:"Academic Period",children:(0,d.jsxs)("select",{value:a.periodId,onChange:b=>a.onPeriod(b.target.value),children:[(0,d.jsx)("option",{value:"",children:"Select period"}),a.periods.map(a=>(0,d.jsx)("option",{value:bJ(a.id),children:a.name||"Unnamed"},bJ(a.id)))]})}),(0,d.jsx)(b3,{label:"Class",children:(0,d.jsxs)("select",{value:a.classId,onChange:b=>a.onClass(b.target.value),children:[(0,d.jsx)("option",{value:"",children:"Select class"}),a.classes.map(a=>(0,d.jsx)("option",{value:bJ(a.id),children:a.name||"Unnamed"},bJ(a.id)))]})}),"daily"===a.entryMode?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(b3,{label:"Date",children:(0,d.jsx)("input",{type:"date",value:a.date,onChange:b=>a.onDate(b.target.value)})}),(0,d.jsx)(b3,{label:"Status",children:(0,d.jsxs)("select",{value:a.statusFilter,onChange:b=>a.onStatus(b.target.value),children:[(0,d.jsx)("option",{value:"all",children:"All students"}),(0,d.jsx)("option",{value:"present",children:"Present"}),(0,d.jsx)("option",{value:"absent",children:"Absent"}),(0,d.jsx)("option",{value:"late",children:"Late"}),(0,d.jsx)("option",{value:"unmarked",children:"Unmarked"})]})})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(b3,{label:"Days Opened",children:(0,d.jsx)("input",{type:"number",min:0,value:a.bulkDaysOpened,onChange:b=>a.onBulkDaysOpened(b.target.value),placeholder:"e.g. 65"})}),(0,d.jsx)(b3,{label:"Apply To",children:(0,d.jsxs)("select",{value:a.bulkScope,onChange:b=>a.onBulkScope(b.target.value),children:[(0,d.jsx)("option",{value:"all",children:"All students"}),(0,d.jsx)("option",{value:"shown",children:"Shown students"})]})}),(0,d.jsx)("button",{type:"button",className:"ba-sheet-action",onClick:a.onApplyBulkDaysOpened,children:"Apply Days Opened"})]})]}),(0,d.jsx)("div",{className:"ba-sheet-footer",children:(0,d.jsx)("button",{type:"button",className:"primary",onClick:a.onClose,children:"Apply"})})]})}function b_(a){return(0,d.jsxs)(b2,{title:"More",text:"Change views, use bulk actions or refresh.",onClose:a.onClose,children:[(0,d.jsxs)("section",{className:"more-section",children:[(0,d.jsx)("span",{children:"View"}),(0,d.jsx)("div",{className:"more-grid",children:[["cards","Cards"],["table","Table"],["analytics","Analytics"]].map(([b,c])=>(0,d.jsxs)("button",{type:"button",className:a.viewMode===b?"active":"",onClick:()=>a.onViewMode(b),children:[(0,d.jsx)("strong",{children:c}),(0,d.jsx)("small",{children:"cards"===b?"Compact mobile-first rows":"table"===b?"Dense desktop register":"Attendance summary"})]},b))})]}),"daily"===a.entryMode?(0,d.jsxs)("section",{className:"more-section",children:[(0,d.jsx)("span",{children:"Daily Actions"}),(0,d.jsxs)("div",{className:"more-actions",children:[(0,d.jsx)("button",{type:"button",disabled:!a.canEdit,onClick:()=>a.onMarkAll("present"),children:"Mark shown present"}),(0,d.jsx)("button",{type:"button",disabled:!a.canEdit,onClick:()=>a.onMarkAll("absent"),children:"Mark shown absent"}),(0,d.jsx)("button",{type:"button",disabled:!a.canEdit,onClick:()=>a.onMarkAll("late"),children:"Mark shown late"}),(0,d.jsx)("button",{type:"button",disabled:!a.canEdit,onClick:a.onClearShown,children:"Clear shown"})]})]}):(0,d.jsxs)("section",{className:"more-section",children:[(0,d.jsx)("span",{children:"Term Actions"}),(0,d.jsxs)("div",{className:"more-actions",children:[(0,d.jsx)("button",{type:"button",disabled:!a.canEdit,onClick:a.onOpenBulkDays,children:"Set days opened"}),(0,d.jsx)("button",{type:"button",disabled:!a.canEdit,onClick:a.onClearShown,children:"Clear shown totals"})]})]}),(0,d.jsxs)("section",{className:"more-section",children:[(0,d.jsx)("span",{children:"Excel"}),(0,d.jsxs)("div",{className:"more-actions",children:[(0,d.jsx)("button",{type:"button",disabled:!a.canEdit,onClick:a.onImportExcel,children:"Import attendance"}),(0,d.jsx)("button",{type:"button",onClick:a.onExportExcel,children:"Export / templates"})]})]}),(0,d.jsxs)("section",{className:"more-section",children:[(0,d.jsx)("span",{children:"System"}),(0,d.jsx)("div",{className:"more-actions",children:(0,d.jsx)("button",{type:"button",onClick:a.onRefresh,children:"Refresh attendance"})})]})]})}function b0({entryMode:a,daily:b,term:c,onClose:e}){return(0,d.jsx)(b2,{title:"Attendance Status",text:"daily"===a?"Current daily register progress.":"Current term totals progress.",onClose:e,children:(0,d.jsx)("div",{className:"status-list",children:"daily"===a?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(b1,{label:"Students",value:b.total}),(0,d.jsx)(b1,{label:"Marked",value:b.marked}),(0,d.jsx)(b1,{label:"Unmarked",value:b.unmarked}),(0,d.jsx)(b1,{label:"Present",value:b.present}),(0,d.jsx)(b1,{label:"Absent",value:b.absent}),(0,d.jsx)(b1,{label:"Late",value:b.late}),(0,d.jsx)(b1,{label:"Completion",value:`${b.completion}%`})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(b1,{label:"Students",value:c.total}),(0,d.jsx)(b1,{label:"Completed",value:c.completed}),(0,d.jsx)(b1,{label:"Missing",value:c.missing}),(0,d.jsx)(b1,{label:"Average attendance",value:`${c.average}%`}),(0,d.jsx)(b1,{label:"Times late",value:c.late})]})})})}function b1({label:a,value:b}){return(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:a}),(0,d.jsx)("strong",{children:b})]})}function b2({title:a,text:b,children:c,onClose:e}){return(0,d.jsx)(ao.A,{themeSourceClass:".attendance-workspace",onEscape:e,children:(0,d.jsx)("div",{className:"ba-sheet-backdrop",role:"presentation",onPointerDown:a=>{a.target===a.currentTarget&&e()},children:(0,d.jsxs)("section",{className:"ba-sheet",role:"dialog","aria-modal":"true",onPointerDown:a=>a.stopPropagation(),children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:a}),(0,d.jsx)("p",{children:b})]}),(0,d.jsx)("button",{type:"button",onClick:e,"aria-label":`Close ${a}`,children:"\xd7"})]}),c]})})})}function b3({label:a,children:b}){return(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:a}),b]})}function b4({primary:a,title:b,text:c,action:e}){return(0,d.jsxs)("main",{className:"ba-page",style:{"--ba-primary":a},children:[(0,d.jsx)("style",{children:b5}),(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("h2",{children:b}),(0,d.jsx)("p",{children:c}),e]})]})}let b5=`
.ba-page{
  --ba-page-bg:var(--bg,var(--background,#f7f8fb));
  --ba-surface:var(--surface,var(--card,var(--background,#fff)));
  --ba-surface-2:var(--surface-2,var(--muted-surface,color-mix(in srgb,var(--ba-surface) 92%,var(--ba-text) 8%)));
  --ba-text:var(--text,var(--foreground,#172033));
  --ba-muted:var(--muted,color-mix(in srgb,var(--ba-text) 62%,transparent));
  --ba-border:var(--border,color-mix(in srgb,var(--ba-text) 14%,transparent));
  --ba-soft:color-mix(in srgb,var(--ba-text) 6%,transparent);
  color:var(--ba-text);
  background:var(--ba-page-bg);
  color-scheme:light dark;
  display:grid;
  gap:10px;
  padding:clamp(8px,1.8vw,16px);
  min-width:0;
}
.ba-search-card{
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto auto auto;
  align-items:center;
  gap:6px;
  min-width:0;
}
.status-dot-mini{
  width:10px;
  height:10px;
  border:0;
  border-radius:999px;
  padding:0;
  flex:0 0 auto;
  background:#94a3b8;
  box-shadow:0 0 0 3px color-mix(in srgb,currentColor 12%,transparent);
}
button.status-dot-mini{cursor:pointer}
.status-dot-mini.green{background:#22c55e}
.status-dot-mini.orange{background:#f59e0b}
.status-dot-mini.red{background:#ef4444}
.status-dot-mini.gray{background:#94a3b8}
.ba-search{
  height:38px;
  min-width:0;
  display:flex;
  align-items:center;
  gap:7px;
  padding:0 10px;
  border:1px solid var(--ba-border);
  border-radius:12px;
  background:var(--ba-surface);
}
.ba-search>span{
  font-size:19px;
  line-height:1;
  opacity:.55;
  transform:translateY(-1px);
}
.ba-search input{
  width:100%;
  min-width:0;
  border:0;
  outline:0;
  background:transparent;
  color:inherit;
  font:inherit;
  font-size:12px;
}
.ba-save-inline,.ba-filter-button,.ba-icon-button{
  height:38px;
  border:1px solid var(--ba-border);
  border-radius:11px;
  background:var(--ba-surface);
  color:inherit;
  font:inherit;
  font-size:10px;
  font-weight:850;
  cursor:pointer;
}
.ba-save-inline{
  padding:0 12px;
  color:var(--ba-primary);
}
.ba-save-inline:disabled{opacity:.45;cursor:not-allowed}
.ba-filter-button,.ba-icon-button{
  width:38px;
  display:grid;
  place-items:center;
  position:relative;
}
.ba-filter-button.active{
  color:var(--ba-primary);
  border-color:color-mix(in srgb,var(--ba-primary) 34%,transparent);
}
.ba-filter-button b{
  position:absolute;
  top:-5px;
  right:-5px;
  min-width:16px;
  height:16px;
  display:grid;
  place-items:center;
  padding:0 3px;
  border-radius:999px;
  background:var(--ba-primary);
  color:#fff;
  font-size:8px;
}
.ba-slider-icon{
  width:17px;
  height:17px;
  fill:none;
  stroke:currentColor;
  stroke-width:1.8;
  stroke-linecap:round;
}
.ba-icon-button{font-size:18px;line-height:1}
.ba-filter-chips{
  display:flex;
  gap:5px;
  flex-wrap:wrap;
}
.ba-filter-chips span{
  border:1px solid var(--ba-border);
  border-radius:999px;
  background:var(--ba-surface);
  padding:4px 8px;
  font-size:8.5px;
  font-weight:750;
  color:var(--ba-muted);
}
.ba-list{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(min(100%,310px),1fr));
  gap:7px;
}
.attendance-row,.term-row{
  min-width:0;
  border:1px solid var(--ba-border);
  border-radius:13px;
  background:var(--ba-surface);
}
.attendance-row{
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto;
  align-items:center;
  gap:8px;
  padding:8px;
}
.ba-avatar{
  width:34px;
  height:34px;
  border-radius:10px;
  display:grid;
  place-items:center;
  color:#fff;
  font-size:12px;
  font-weight:900;
  flex:0 0 auto;
}
.attendance-main{
  min-width:0;
  display:grid;
  gap:1px;
}
.attendance-main strong,.term-student strong{
  min-width:0;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size:10.5px;
}
.attendance-main small,.term-student small{
  color:var(--ba-muted);
  font-size:8.5px;
}
.attendance-main em{
  color:var(--ba-muted);
  font-size:7.5px;
  font-style:normal;
}
.attendance-status-actions{
  display:flex;
  align-items:center;
  gap:4px;
}
.attendance-status-actions button{
  width:27px;
  height:27px;
  border:1px solid var(--ba-border);
  border-radius:8px;
  background:transparent;
  color:var(--ba-muted);
  font-size:9px;
  font-weight:900;
  cursor:pointer;
}
.attendance-status-actions button:disabled{opacity:.45;cursor:not-allowed}
.attendance-status-actions button.present.active{
  color:#15803d;
  border-color:color-mix(in srgb,#22c55e 45%,transparent);
  background:color-mix(in srgb,#22c55e 10%,transparent);
}
.attendance-status-actions button.absent.active{
  color:#b91c1c;
  border-color:color-mix(in srgb,#ef4444 45%,transparent);
  background:color-mix(in srgb,#ef4444 10%,transparent);
}
.attendance-status-actions button.late.active{
  color:#b45309;
  border-color:color-mix(in srgb,#f59e0b 45%,transparent);
  background:color-mix(in srgb,#f59e0b 10%,transparent);
}
.attendance-status-actions button.clear{font-size:13px}
.attendance-status-actions .status-dot-mini{
  width:7px;
  height:7px;
  margin-left:1px;
}
.term-row{padding:8px}
.term-student{
  display:grid;
  grid-template-columns:auto minmax(0,1fr) auto;
  align-items:center;
  gap:8px;
  margin-bottom:8px;
}
.term-student>span{
  min-width:0;
  display:grid;
}
.term-student>b{
  color:var(--ba-primary);
  font-size:12px;
}
.term-input-grid{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:6px;
}
.term-input-grid label{
  min-width:0;
  display:grid;
  gap:3px;
}
.term-input-grid label span{
  color:var(--ba-muted);
  font-size:7.5px;
  font-weight:800;
  text-transform:uppercase;
}
.term-input-grid input{
  width:100%;
  min-width:0;
  box-sizing:border-box;
  border:1px solid var(--ba-border);
  border-radius:8px;
  background:var(--ba-soft);
  color:inherit;
  padding:7px 5px;
  font:inherit;
  font-size:9px;
}
.ba-table-card{
  border:1px solid var(--ba-border);
  border-radius:13px;
  overflow:hidden;
  background:var(--ba-surface);
}
.ba-table-scroll{overflow:auto}
.ba-table-scroll table{
  width:100%;
  min-width:690px;
  border-collapse:collapse;
  font-size:9px;
}
.ba-table-scroll th,.ba-table-scroll td{
  text-align:left;
  padding:8px;
  border-bottom:1px solid var(--ba-border);
}
.ba-table-scroll th{
  color:var(--ba-muted);
  font-size:8px;
  text-transform:uppercase;
  letter-spacing:.03em;
}
.table-student{
  display:flex;
  align-items:center;
  gap:7px;
}
.table-student .ba-avatar{
  width:28px;
  height:28px;
  border-radius:8px;
}
.table-student>span{
  display:grid;
}
.table-student small{
  color:var(--ba-muted);
  font-size:7.5px;
}
.table-actions{
  display:flex;
  gap:4px;
}
.table-actions button{
  min-width:26px;
  height:26px;
  border:1px solid var(--ba-border);
  border-radius:7px;
  background:transparent;
  color:inherit;
  font-size:8px;
  font-weight:900;
}
.table-actions button.active{
  color:#fff;
  border-color:var(--ba-primary);
  background:var(--ba-primary);
}
.table-number{
  width:68px;
  border:1px solid var(--ba-border);
  border-radius:7px;
  background:var(--ba-soft);
  color:inherit;
  padding:6px;
  font:inherit;
  font-size:9px;
}
.ba-analysis-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(135px,1fr));
  gap:7px;
}
.ba-analysis{
  border:1px solid var(--ba-border);
  border-radius:12px;
  background:var(--ba-surface);
  padding:10px;
  display:grid;
  gap:4px;
}
.ba-analysis span{
  color:var(--ba-muted);
  font-size:8px;
  font-weight:800;
  text-transform:uppercase;
}
.ba-analysis strong{
  color:var(--ba-primary);
  font-size:17px;
}
.ba-empty,.ba-state{
  min-height:220px;
  display:grid;
  place-items:center;
  align-content:center;
  gap:6px;
  text-align:center;
  padding:24px;
  border:1px dashed var(--ba-border);
  border-radius:15px;
}
.ba-empty-icon{font-size:26px}
.ba-empty h3,.ba-state h2{
  margin:0;
  font-size:14px;
}
.ba-empty p,.ba-state p{
  max-width:440px;
  margin:0;
  color:var(--ba-muted);
  font-size:9.5px;
  line-height:1.6;
}
.ba-state-button{
  margin-top:8px;
  border:0;
  border-radius:10px;
  background:var(--ba-primary);
  color:#fff;
  padding:9px 12px;
  font-size:9px;
  font-weight:850;
}
.ba-toast{
  position:sticky;
  top:8px;
  z-index:60;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:10px;
  border:1px solid var(--ba-border);
  border-radius:11px;
  background:var(--ba-surface);
  padding:9px 11px;
  font-size:9px;
  font-weight:750;
}
.ba-toast.success{border-color:color-mix(in srgb,#22c55e 38%,transparent)}
.ba-toast.error{border-color:color-mix(in srgb,#ef4444 38%,transparent)}
.ba-toast.info{border-color:color-mix(in srgb,var(--ba-primary) 38%,transparent)}
.ba-toast button{
  border:0;
  background:transparent;
  color:inherit;
  font-size:16px;
}
.ba-sheet-backdrop{
  position:fixed;
  inset:0;
  z-index:100;
  display:grid;
  place-items:end center;
  padding:8px;
  background:rgba(15,23,42,.58);
}
.ba-sheet{
  width:min(580px,100%);
  max-height:92vh;
  overflow:auto;
  border:1px solid var(--ba-border);
  border-radius:20px 20px 12px 12px;
  background:var(--ba-surface);
  color:var(--ba-text);
  padding:12px;
  box-sizing:border-box;
}
.ba-sheet-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:10px;
  padding-bottom:10px;
  border-bottom:1px solid var(--ba-border);
}
.ba-sheet-head h2{
  margin:0;
  font-size:13px;
}
.ba-sheet-head p{
  margin:2px 0 0;
  color:var(--ba-muted);
  font-size:8.5px;
}
.ba-sheet-head>button{
  width:30px;
  height:30px;
  border:1px solid var(--ba-border);
  border-radius:9px;
  background:transparent;
  color:inherit;
  font-size:17px;
}
.filter-section,.more-section{
  display:grid;
  gap:7px;
  padding:11px 0;
}
.filter-section-label,.more-section>span{
  color:var(--ba-muted);
  font-size:8px;
  font-weight:900;
  text-transform:uppercase;
}
.mode-switch,.more-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:7px;
}
.mode-switch button,.more-grid button{
  min-width:0;
  display:grid;
  gap:2px;
  text-align:left;
  border:1px solid var(--ba-border);
  border-radius:11px;
  background:transparent;
  color:inherit;
  padding:9px;
}
.mode-switch button.active,.more-grid button.active{
  border-color:color-mix(in srgb,var(--ba-primary) 42%,transparent);
  background:color-mix(in srgb,var(--ba-primary) 8%,transparent);
}
.mode-switch strong,.more-grid strong{
  font-size:9.5px;
}
.mode-switch small,.more-grid small{
  color:var(--ba-muted);
  font-size:7.5px;
}
.ba-form{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:8px;
}
.ba-form label{
  min-width:0;
  display:grid;
  gap:4px;
}
.ba-form label>span{
  color:var(--ba-muted);
  font-size:8px;
  font-weight:850;
  text-transform:uppercase;
}
.ba-form select,.ba-form input{
  width:100%;
  box-sizing:border-box;
  border:1px solid var(--ba-border);
  border-radius:9px;
  background:var(--ba-surface);
  color:inherit;
  padding:9px;
  font:inherit;
  font-size:9px;
}
.ba-sheet-action{
  align-self:end;
  min-height:34px;
  border:1px solid color-mix(in srgb,var(--ba-primary) 38%,transparent);
  border-radius:9px;
  background:color-mix(in srgb,var(--ba-primary) 8%,transparent);
  color:var(--ba-primary);
  font-size:8.5px;
  font-weight:850;
}
.ba-sheet-footer{
  display:flex;
  justify-content:flex-end;
  padding-top:12px;
}
.ba-sheet-footer button{
  border:1px solid var(--ba-border);
  border-radius:9px;
  background:transparent;
  color:inherit;
  padding:9px 13px;
  font-size:8.5px;
  font-weight:850;
}
.ba-sheet-footer button.primary{
  border-color:var(--ba-primary);
  background:var(--ba-primary);
  color:#fff;
}
.more-actions{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:7px;
}
.more-actions button{
  min-height:36px;
  border:1px solid var(--ba-border);
  border-radius:9px;
  background:transparent;
  color:inherit;
  padding:8px;
  text-align:left;
  font-size:8.5px;
  font-weight:750;
}
.more-actions button:disabled{opacity:.45}
.status-list{
  display:grid;
  gap:0;
  padding-top:7px;
}
.status-list>div{
  display:flex;
  justify-content:space-between;
  gap:12px;
  padding:9px 1px;
  border-bottom:1px solid var(--ba-border);
  font-size:9px;
}
.status-list span{color:var(--ba-muted)}
.status-list strong{color:var(--ba-primary)}
@media(max-width:640px){
  .ba-page{padding:7px;gap:8px}
  .ba-search-card{gap:4px}
  .ba-search{height:36px;padding:0 8px}
  .ba-save-inline,.ba-filter-button,.ba-icon-button{height:36px}
  .ba-filter-button,.ba-icon-button{width:36px}
  .attendance-row{
    grid-template-columns:auto minmax(0,1fr);
  }
  .attendance-status-actions{
    grid-column:1/-1;
    justify-content:flex-end;
  }
  .term-input-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .ba-form,.mode-switch,.more-grid,.more-actions{
    grid-template-columns:1fr;
  }
}

/* ======================================================
   THEME / DARK-MODE ALIGNMENT
   Mirrors the semantic surface system used by Subjects.tsx.
   ====================================================== */
.ba-search,
.ba-save-inline,
.ba-filter-button,
.ba-icon-button,
.attendance-row,
.term-row,
.ba-table-card,
.ba-analysis,
.ba-sheet,
.ba-state,
.ba-toast{
  background:var(--ba-surface);
  color:var(--ba-text);
  border-color:var(--ba-border);
}

.ba-filter-chips span,
.ba-filter-chips button,
.filter-section,
.mode-switch,
.term-input-grid label,
.ba-form label,
.status-card,
.bulk-card{
  background:var(--ba-surface-2);
  color:var(--ba-text);
  border-color:var(--ba-border);
}

.ba-page input,
.ba-page select,
.ba-page textarea,
.table-number,
.term-input-grid input{
  background:var(--ba-surface);
  color:var(--ba-text);
  border-color:var(--ba-border);
}

.ba-page input::placeholder,
.ba-page textarea::placeholder{
  color:var(--ba-muted);
  opacity:1;
}

.ba-table-scroll th{
  background:var(--ba-surface-2);
  color:var(--ba-muted);
}

.ba-table-scroll td{
  background:var(--ba-surface);
  color:var(--ba-text);
}

.ba-table-scroll tbody tr:hover td{
  background:color-mix(in srgb,var(--ba-primary) 7%,var(--ba-surface));
}

.attendance-status-actions button,
.table-actions button,
.mode-switch button,
.ba-more-list button,
.ba-sheet-actions button{
  background:var(--ba-surface-2);
  color:var(--ba-text);
  border-color:var(--ba-border);
}

.attendance-status-actions button.clear{
  color:var(--ba-muted);
}

.attendance-main strong,
.term-student strong,
.table-student strong,
.ba-analysis strong,
.ba-sheet-head h3,
.ba-state h2,
.ba-empty h3{
  color:var(--ba-text);
}

.attendance-main small,
.attendance-main em,
.term-student small,
.table-student small,
.ba-analysis span,
.ba-sheet-head p,
.ba-empty p,
.ba-state p,
.filter-section-label,
.ba-form label>span{
  color:var(--ba-muted);
}

.ba-sheet-backdrop{
  background:color-mix(in srgb,#020617 68%,transparent);
}

.ba-page input:disabled,
.ba-page select:disabled,
.ba-page textarea:disabled,
.ba-page button:disabled{
  opacity:.58;
}

@media (prefers-color-scheme: dark){
  .ba-page{
    --ba-soft:color-mix(in srgb,var(--ba-text) 8%,transparent);
  }
}


/* -------------------------------------------------------
   Excel interoperability additions
-------------------------------------------------------- */
.attendance-excel-stack{
  display:grid;
  gap:14px;
  min-width:0;
}
.attendance-excel-context{
  display:flex;
  flex-wrap:wrap;
  gap:6px;
  align-items:center;
}
.attendance-excel-context strong,
.attendance-excel-context span{
  border:1px solid var(--ba-border);
  border-radius:999px;
  padding:5px 9px;
  background:var(--ba-surface);
  font-size:10px;
}
.attendance-excel-context strong{
  color:var(--ba-primary);
}
.attendance-excel-note{
  display:grid;
  gap:4px;
  padding:12px;
  border:1px solid var(--ba-border);
  border-radius:13px;
  background:var(--ba-surface);
}
.attendance-excel-note strong{
  font-size:11px;
}
.attendance-excel-note span{
  color:var(--ba-muted);
  font-size:10px;
  line-height:1.5;
}
.attendance-excel-field{
  display:grid;
  gap:5px;
}
.attendance-excel-field>span{
  font-size:9px;
  font-weight:850;
  color:var(--ba-muted);
}
.attendance-excel-field select,
.attendance-excel-field input,
.attendance-excel-register-range input{
  width:100%;
  min-height:40px;
  border:1px solid var(--ba-border);
  border-radius:11px;
  padding:0 10px;
  background:var(--ba-surface);
  color:inherit;
  font:inherit;
  font-size:11px;
  outline:0;
}
.attendance-excel-field small{
  color:var(--ba-muted);
  font-size:9px;
  line-height:1.4;
}
.attendance-excel-field select:focus,
.attendance-excel-field input:focus,
.attendance-excel-register-range input:focus{
  border-color:var(--ba-primary);
}
.attendance-excel-footer{
  display:flex;
  align-items:center;
  justify-content:flex-end;
  gap:8px;
}
.attendance-excel-footer button{
  min-height:38px;
  border:1px solid var(--ba-border);
  border-radius:11px;
  padding:0 14px;
  font:inherit;
  font-size:10px;
  font-weight:850;
  cursor:pointer;
}
.attendance-excel-footer button.secondary{
  background:var(--ba-surface);
  color:var(--ba-text);
}
.attendance-excel-footer button.primary{
  border-color:var(--ba-primary);
  background:var(--ba-primary);
  color:#fff;
}
.attendance-excel-footer button:disabled{
  opacity:.45;
  cursor:not-allowed;
}
.attendance-excel-result{
  display:grid;
  justify-items:center;
  gap:8px;
  padding:22px 10px;
  text-align:center;
}
.attendance-excel-result-icon{
  width:52px;
  height:52px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:color-mix(in srgb,#22c55e 14%,transparent);
  color:#15803d;
  font-size:24px;
  font-weight:900;
}
.attendance-excel-result h3{
  margin:4px 0 0;
  font-size:16px;
}
.attendance-excel-result p{
  max-width:560px;
  margin:0;
  color:var(--ba-muted);
  font-size:10px;
  line-height:1.55;
}
.attendance-excel-result-grid{
  width:min(100%,520px);
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:7px;
  margin-top:8px;
}
.attendance-excel-result-grid>div{
  padding:12px 8px;
  border:1px solid var(--ba-border);
  border-radius:12px;
  background:var(--ba-surface);
}
.attendance-excel-result-grid strong{
  display:block;
  font-size:18px;
}
.attendance-excel-result-grid span{
  display:block;
  margin-top:2px;
  color:var(--ba-muted);
  font-size:9px;
}
.attendance-excel-register-range{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:8px;
}
.attendance-excel-register-range label{
  display:grid;
  gap:4px;
}
.attendance-excel-register-range span{
  color:var(--ba-muted);
  font-size:9px;
  font-weight:800;
}
@media(max-width:560px){
  .attendance-excel-footer{
    width:100%;
  }
  .attendance-excel-footer button{
    flex:1;
  }
  .attendance-excel-result-grid{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }
  .attendance-excel-register-range{
    grid-template-columns:1fr;
  }
}


/* ============================================================
   PORTAL-SAFE CENTERED MODALS
   ============================================================ */
.ba-sheet-backdrop,
[class*="excel"][class*="backdrop"] {
  top: calc(var(--eds-shell-top-offset, 0px) + var(--portal-header-height, 48px)) !important;
  right: 0 !important;
  bottom: calc(64px + env(safe-area-inset-bottom, 0px)) !important;
  left: 0 !important;
  width: auto !important;
  height: auto !important;
  min-height: 0 !important;
  box-sizing: border-box !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 10px !important;
  overflow: hidden !important;
  z-index: 58 !important;
}

.ba-sheet,
[class*="excel"][class*="sheet"]:not([class*="backdrop"]),
[class*="excel"][class*="modal"]:not([class*="backdrop"]) {
  margin: 0 auto !important;
  max-height: calc(100% - 4px) !important;
  max-width: calc(100% - 2px) !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scroll-padding-bottom: 84px;
}

.ba-sheet-footer,
.ba-sheet-actions {
  position: sticky;
  bottom: 0;
  z-index: 3;
}

@media (min-width: 980px) {
  .ba-sheet-backdrop,
  [class*="excel"][class*="backdrop"] {
    top: calc(var(--eds-shell-top-offset, 0px) + var(--portal-header-height, 48px)) !important;
    right: 0 !important;
    bottom: 0 !important;
    left: var(--portal-content-left, 0px) !important;
    max-width: calc(100vw - var(--portal-content-left, 0px)) !important;
    padding: 18px !important;
    z-index: 80 !important;
  }
}
/* ============================================================
   EXCEL MODALS — MATCH BRANCH-ADMIN (BA) VISUAL LANGUAGE
   Light/dark-safe surfaces, readable controls and strong contrast.
   ============================================================ */
.ba-page {
  --excel-surface: var(--card-bg, var(--surface, #fff));
  --excel-surface-2: var(--surface-2, color-mix(in srgb, var(--excel-surface) 93%, var(--text, #111827) 7%));
  --excel-text: var(--text, #111827);
  --excel-muted: var(--muted, color-mix(in srgb, var(--excel-text) 62%, transparent));
  --excel-border: var(--border, color-mix(in srgb, var(--excel-text) 14%, transparent));
  --excel-soft: color-mix(in srgb, var(--excel-text) 5%, transparent);
}

.ba-page [class^="excel-"],
.ba-page [class*=" excel-"] {
  color: var(--excel-text);
}

.ba-page [class*="excel-"][class*="sheet"]:not([class*="backdrop"]),
.ba-page [class*="excel-"][class*="modal"]:not([class*="backdrop"]),
.ba-page [class*="excel-"][class*="panel"],
.ba-page [class*="excel-"][class*="card"] {
  background: var(--excel-surface) !important;
  color: var(--excel-text) !important;
  border-color: var(--excel-border) !important;
  box-shadow: 0 22px 58px color-mix(in srgb, #0f172a 16%, transparent) !important;
}

.ba-page [class*="excel-"][class*="backdrop"] {
  background: color-mix(in srgb, #0f172a 52%, transparent) !important;
  backdrop-filter: blur(7px);
}

.ba-page [class^="excel-"] h1,
.ba-page [class^="excel-"] h2,
.ba-page [class^="excel-"] h3,
.ba-page [class*=" excel-"] h1,
.ba-page [class*=" excel-"] h2,
.ba-page [class*=" excel-"] h3 {
  color: var(--excel-text) !important;
}

.ba-page [class^="excel-"] p,
.ba-page [class^="excel-"] small,
.ba-page [class^="excel-"] label > span,
.ba-page [class*=" excel-"] p,
.ba-page [class*=" excel-"] small,
.ba-page [class*=" excel-"] label > span {
  color: var(--excel-muted) !important;
}

.ba-page [class^="excel-"] input,
.ba-page [class^="excel-"] select,
.ba-page [class^="excel-"] textarea,
.ba-page [class*=" excel-"] input,
.ba-page [class*=" excel-"] select,
.ba-page [class*=" excel-"] textarea {
  background: var(--input-bg, var(--excel-surface)) !important;
  color: var(--input-text, var(--excel-text)) !important;
  border: 1px solid var(--input-border, var(--excel-border)) !important;
  box-shadow: none;
}

.ba-page [class^="excel-"] input:focus,
.ba-page [class^="excel-"] select:focus,
.ba-page [class^="excel-"] textarea:focus,
.ba-page [class*=" excel-"] input:focus,
.ba-page [class*=" excel-"] select:focus,
.ba-page [class*=" excel-"] textarea:focus {
  border-color: color-mix(in srgb, var(--ba-primary) 58%, var(--excel-border)) !important;
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--ba-primary) 13%, transparent) !important;
}

.ba-page [class^="excel-"] button,
.ba-page [class*=" excel-"] button {
  color: var(--excel-text);
  border-color: var(--excel-border);
}

.ba-page [class^="excel-"] button:not(.primary):not([class*="primary"]),
.ba-page [class*=" excel-"] button:not(.primary):not([class*="primary"]) {
  background: var(--excel-surface);
}

.ba-page [class^="excel-"] table,
.ba-page [class*=" excel-"] table {
  background: var(--excel-surface);
  color: var(--excel-text);
}

.ba-page [class^="excel-"] th,
.ba-page [class*=" excel-"] th {
  background: var(--excel-surface-2) !important;
  color: var(--excel-muted) !important;
  border-color: var(--excel-border) !important;
}

.ba-page [class^="excel-"] td,
.ba-page [class*=" excel-"] td {
  background: var(--excel-surface) !important;
  color: var(--excel-text) !important;
  border-color: var(--excel-border) !important;
}

/* Local Excel workflow blocks use the same BA surfaces. */
.attendance-excel-stage,
.attendance-excel-file-note,
.attendance-excel-result,
.attendance-excel-result-grid > span,
.attendance-excel-result-errors > div {
  color: var(--excel-text);
}

.attendance-excel-file-note,
.attendance-excel-result-grid > span {
  background: var(--excel-surface) !important;
  border-color: var(--excel-border) !important;
}

.attendance-excel-stage-head p,
.attendance-excel-file-note span,
.attendance-excel-result > p,
.attendance-excel-result-grid small {
  color: var(--excel-muted) !important;
}

.attendance-excel-context-grid select,
.attendance-excel-context-grid input {
  background: var(--input-bg, var(--excel-surface)) !important;
  color: var(--input-text, var(--excel-text)) !important;
  border-color: var(--input-border, var(--excel-border)) !important;
}

.attendance-excel-result-errors > div {
  background: color-mix(in srgb, #ef4444 8%, var(--excel-surface)) !important;
  border-color: color-mix(in srgb, #ef4444 28%, var(--excel-border)) !important;
}

.attendance-excel-result-errors > div span {
  color: color-mix(in srgb, #ef4444 82%, var(--excel-text)) !important;
}

/* File-picker / drop-zone styling, including dark mode. */
.ba-page [class*="excel-"][class*="drop"],
.ba-page [class*="excel-"][class*="picker"],
.ba-page [class*="excel-"][class*="upload"] {
  background: color-mix(in srgb, var(--ba-primary) 4%, var(--excel-surface)) !important;
  border-color: color-mix(in srgb, var(--ba-primary) 26%, var(--excel-border)) !important;
  color: var(--excel-text) !important;
}

.ba-page [class*="excel-"][class*="drop"]:hover,
.ba-page [class*="excel-"][class*="picker"]:hover,
.ba-page [class*="excel-"][class*="upload"]:hover {
  background: color-mix(in srgb, var(--ba-primary) 8%, var(--excel-surface)) !important;
  border-color: color-mix(in srgb, var(--ba-primary) 48%, var(--excel-border)) !important;
}

/* Mapping and preview rows/cards. */
.ba-page [class*="excel-"][class*="row"],
.ba-page [class*="excel-"][class*="item"],
.ba-page [class*="excel-"][class*="mapping"],
.ba-page [class*="excel-"][class*="preview"] {
  border-color: var(--excel-border);
}

@media (prefers-color-scheme: dark) {
  .ba-page [class*="excel-"][class*="backdrop"] {
    background: rgba(2, 6, 23, .72) !important;
  }
}

.attendance-excel-context,
.attendance-excel-note,
.attendance-excel-result,
.attendance-excel-result-grid > div,
.attendance-excel-register-range {
  color: var(--excel-text);
}

.attendance-excel-context,
.attendance-excel-note,
.attendance-excel-result-grid > div {
  background: var(--excel-surface) !important;
  border-color: var(--excel-border) !important;
}

.attendance-excel-context span,
.attendance-excel-note span,
.attendance-excel-result p,
.attendance-excel-result-grid span,
.attendance-excel-field > span,
.attendance-excel-field small,
.attendance-excel-register-range span {
  color: var(--excel-muted) !important;
}

.attendance-excel-field select,
.attendance-excel-field input,
.attendance-excel-register-range input {
  background: var(--input-bg, var(--excel-surface)) !important;
  color: var(--input-text, var(--excel-text)) !important;
  border-color: var(--input-border, var(--excel-border)) !important;
}


/* ============================================================
   V8.1 — compact attendance records, aligned with Students/Classes V5.
   No gradient, repeated filter chips, floating shadows or hover translations.
   ============================================================ */
.attendance-workspace {
  --ba-page-bg: var(--bg,var(--background,#f2f4f7));
  --ba-surface: color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 93%,var(--text,#182235) 7%);
  --ba-surface-2: color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 88%,var(--text,#182235) 12%);
  --ba-border: color-mix(in srgb,var(--border,#d4dae3) 85%,var(--text,#182235) 15%);
  display:block;
  min-height:0;
  padding:5px;
  background:var(--ba-page-bg);
}
.attendance-workspace .attendance-work-row {
  display:flex;
  align-items:center;
  justify-content:flex-end;
  gap:7px;
  min-width:0;
  margin:0 0 9px;
}
.attendance-workspace .attendance-context {
  flex:1 1 auto;
  min-width:0;
  display:flex;
  align-items:center;
  gap:6px;
  padding:5px 3px;
  border:0;
  background:transparent;
  color:var(--ba-text);
  font:inherit;
  font-size:12px;
  text-align:left;
  cursor:pointer;
}
.attendance-workspace .attendance-context-class {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size:12px;
  font-weight:800;
}
.attendance-workspace .attendance-context-period {
  color:var(--ba-muted);
  font-size:11px;
  white-space:nowrap;
}
.attendance-workspace .attendance-progress {
  flex:0 0 auto;
  width:auto;
  height:30px;
  min-width:43px;
  padding:0 8px;
  border:1px solid var(--ba-border);
  border-radius:8px;
  box-shadow:none;
  color:var(--ba-text);
  background:var(--ba-surface-2);
  font-size:11px;
  font-weight:750;
  cursor:pointer;
}
.attendance-workspace .ba-save-inline {
  flex:0 0 auto;
  height:31px;
  padding:0 13px;
  border-radius:8px;
  background:var(--ba-primary);
  border-color:var(--ba-primary);
  color:var(--ba-primary-text,#fff);
  font-size:11px;
  box-shadow:none;
}
.attendance-workspace .ba-list {
  grid-template-columns:repeat(1,minmax(0,1fr));
  gap:9px;
  margin:0;
}
.attendance-workspace .attendance-row,
.attendance-workspace .term-row,
.attendance-workspace .ba-table-card,
.attendance-workspace .ba-analysis {
  background:var(--ba-surface);
  border:1px solid var(--ba-border);
  border-radius:13px;
  box-shadow:none;
  transition:border-color .12s ease;
}
.attendance-workspace .attendance-row:hover,
.attendance-workspace .term-row:hover {
  transform:none;
  box-shadow:none;
}
.attendance-workspace .attendance-row { padding:10px;gap:9px; }
.attendance-workspace .attendance-main strong,
.attendance-workspace .term-student strong {
  font-size:12.5px;
  font-weight:800;
}
.attendance-workspace .attendance-main small,
.attendance-workspace .term-student small { font-size:10px; }
.attendance-workspace .ba-avatar { width:36px;height:36px;border-radius:11px;box-shadow:none; }
.attendance-workspace .attendance-status-actions button { height:30px;width:30px;border-radius:8px;font-size:11px; }
.attendance-workspace .term-row { padding:10px; }
.attendance-workspace .term-input-grid label span { font-size:10px;letter-spacing:0; }
.attendance-workspace .term-input-grid input { font-size:12px; }
.attendance-workspace .ba-table-card { padding:4px;overflow:hidden; }
.attendance-workspace .ba-table-scroll { border-radius:10px; }
.attendance-workspace .ba-table-scroll table { background:var(--ba-surface);font-size:11px; }
.attendance-workspace .ba-table-scroll th {
  position:sticky;top:0;z-index:2;
  background:var(--ba-surface-2);
  font-size:10px;
  letter-spacing:.025em;
}
.attendance-workspace .ba-table-scroll td { background:transparent; font-size:11px; }
.attendance-workspace .ba-table-scroll tbody tr:nth-child(even) { background:var(--ba-surface-2); }
.attendance-workspace .ba-table-scroll tbody tr:hover td { background:transparent; }
.attendance-workspace .ba-table-scroll td .ba-avatar { width:31px;height:31px; }
.attendance-workspace .ba-analysis strong { color:var(--ba-text); }
.attendance-search-in-filter { display:grid;gap:6px;margin:0 0 12px; }
.attendance-search-in-filter label { color:var(--ba-muted);font-size:12px;font-weight:750; }
.attendance-search-in-filter input {
  width:100%;min-height:38px;padding:7px 10px;
  border:1px solid var(--ba-border);border-radius:9px;
  background:var(--ba-surface);color:var(--ba-text);
  font-size:13px;outline:none;
}
/* Excel dialog stays on the shared Excel component's own theme layer. */
@media(min-width:680px){
  .attendance-workspace .ba-list { grid-template-columns:repeat(2,minmax(0,1fr)); }
}
@media(min-width:980px){
  .attendance-workspace .ba-list { grid-template-columns:repeat(3,minmax(0,1fr)); }
}
@media(min-width:1240px){
  .attendance-workspace .ba-list { grid-template-columns:repeat(4,minmax(0,1fr)); }
}
@media(max-width:640px){
  .attendance-workspace { padding:3px; }
  .attendance-workspace .attendance-row { grid-template-columns:auto minmax(0,1fr) auto; }
  .attendance-workspace .attendance-status-actions { grid-column:auto; }
  .attendance-workspace .attendance-status-actions button { width:27px;height:27px; }
  .attendance-workspace .attendance-context-period { font-size:10px; }
  .attendance-workspace .attendance-context-class { font-size:11px; }
  .attendance-workspace .term-input-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
}
@media(max-width:370px){
  .attendance-workspace .attendance-row {grid-template-columns:32px minmax(0,1fr);}
  .attendance-workspace .attendance-status-actions {grid-column:1/-1;justify-content:flex-end;}
}
@media(prefers-reduced-motion:reduce){
  .attendance-workspace * {transition:none !important;animation:none !important;}
}
`,b6={fullName:"",gender:"",dateOfBirth:"",age:"",parentName:"",parentPhone:"",parentEmail:"",address:""},b7=a=>null==a?"":String(a);function b8(a,b=new Date){let c=/^(\d{4})-(\d{2})-(\d{2})(?:$|T)/.exec(b7(a).trim());if(!c)return;let d=Number(c[1]),e=Number(c[2]),f=Number(c[3]),g=new Date(Date.UTC(d,e-1,f));if(g.getUTCFullYear()!==d||g.getUTCMonth()!==e-1||g.getUTCDate()!==f)return;let h=b.getFullYear()-d;return(b.getMonth()+1<e||b.getMonth()+1===e&&b.getDate()<f)&&h--,h>=0&&h<=130?h:void 0}function b9(a){let b=b8(a.dateOfBirth);return void 0===b?b7(a.age):String(b)}function ca(a){let b,c;return["m","male","boy","boys"].includes(c=(b=b7(a.gender||a.sex).trim()).toLowerCase())?"Male":["f","female","girl","girls"].includes(c)?"Female":["o","other","nonbinary","non-binary"].includes(c)?"Other":b}function cb(a){return b7(a.status||"active").toLowerCase()}function cc(a){let b=cb(a);return"graduated"===b?"blue":"transferred"===b?"orange":"withdrawn"===b?"red":"green"}function cd(a){let b=b7(a).trim().replace(/^#/,""),c=3===b.length?b.split("").map(a=>a+a).join(""):b;if(!/^[0-9a-f]{6}$/i.test(c))return"#ffffff";let d=parseInt(c,16);return((d>>16&255)*299+(d>>8&255)*587+(255&d)*114)/1e3>155?"#111827":"#ffffff"}function ce({name:a,photo:b,primary:c}){return(0,d.jsx)("div",{className:"ba-avatar",style:{background:b?`url(${b}) center/cover`:c,color:b?"#fff":cd(c),borderColor:b?"transparent":`color-mix(in srgb, ${c} 76%, transparent)`},children:!b&&b7(a||"S").slice(0,1).toUpperCase()})}function cf({row:a}){let b=cc(a);return(0,d.jsx)("span",{className:`status-dot-mini ${b}`,title:cb(a),"aria-label":cb(a)})}function cg({children:a,onClose:b,type:c="modal",primary:f}){let[g,h]=(0,e.useState)({});return((0,e.useRef)(b).current=b,"u"<typeof document)?null:(0,t.createPortal)((0,d.jsx)("div",{className:`teacher-students-overlay ${"modal"===c?"ba-modal-backdrop":"ba-sheet-backdrop"}`,style:g,onPointerDown:a=>{a.currentTarget===a.target&&b()},children:a}),document.body)}let ch=`
.teacher-students-overlay .teacher-camera-dialog{width:min(660px,100%)}
.teacher-students-overlay .ba-camera-preview{position:relative;background:#0b1220;border-radius:18px;overflow:hidden;min-height:210px;display:grid;place-items:center}
.teacher-students-overlay .ba-camera-preview video{display:block;width:100%;max-height:58dvh;object-fit:contain}
.teacher-students-overlay .ba-camera-loading{position:absolute;color:#fff;background:#101828c9;padding:9px 14px;border-radius:12px}
.teacher-students-overlay .ba-camera-actions{display:flex;justify-content:flex-end;flex-wrap:wrap;gap:9px;margin-top:12px}
.teacher-students-overlay .ba-camera-actions button{min-height:42px;border-radius:999px;padding:0 14px;font-weight:850;cursor:pointer}
.teacher-students-overlay .ba-camera-secondary{background:var(--surface,#fff);color:var(--text,#111827);border:1px solid var(--border,#ddd)}
.teacher-students-overlay .ba-camera-primary{background:var(--ba-primary);color:#fff;border:1px solid var(--ba-primary)}
.teacher-students-overlay .ba-camera-actions button:disabled{opacity:.5;cursor:not-allowed}
.teacher-students-overlay .teacher-camera-preview{display:block;width:100%;height:auto;max-height:58dvh;min-height:190px;object-fit:contain;background:#0b1220;border-radius:18px}
.teacher-students-overlay .teacher-camera-error{color:#dc2626;font-size:12px;margin:9px 0}
.teacher-students-overlay .ba-media-section{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.teacher-students-overlay .ba-media-section .ba-media-button{width:auto}
@media(max-width:520px){.teacher-students-overlay .ba-media-section .ba-media-button{flex:1 1 125px}}

@keyframes  spin { to { transform: rotate(360deg); } }
.teacher-students-page{
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
.teacher-students-page *,
.teacher-students-page *::before,
.teacher-students-page *::after{
  box-sizing: border-box;
  min-width: 0;
}
.teacher-students-page button,
.teacher-students-page input,
.teacher-students-page select,
.teacher-students-page textarea{
  font: inherit;
  max-width: 100%;
}
.teacher-students-page button{
  -webkit-tap-highlight-color: transparent;
}
.teacher-students-page input,
.teacher-students-page select,
.teacher-students-page textarea{
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
.teacher-students-page input:focus,
.teacher-students-page select:focus,
.teacher-students-page textarea:focus{
  border-color: color-mix(in srgb, var(--ba-primary) 52%, var(--border, rgba(0,0,0,.10)));
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--ba-primary) 12%, transparent);
}
:where(.teacher-students-page) .ba-state,
:where(.teacher-students-page) .ba-table-card,
:where(.teacher-students-page) .ba-empty,
.teacher-students-overlay .ba-sheet,
.teacher-students-overlay .ba-modal,
:where(.teacher-students-page) .student-row{
  background: var(--card-bg, var(--surface, #fff));
  border: 1px solid var(--border, rgba(0,0,0,.10));
  box-shadow: 0 12px 28px rgba(15,23,42,.045);
}
:where(.teacher-students-page) .ba-state{
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
:where(.teacher-students-page) .ba-spinner{
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--ba-primary) 18%, transparent);
  border-top-color: var(--ba-primary);
  animation: spin .8s linear infinite;
}
:where(.teacher-students-page) .ba-state h2{
  margin: 0;
  font-size: 22px;
  font-weight: 1000;
  letter-spacing: -.04em;
}
:where(.teacher-students-page) .ba-state p{
  max-width: 34rem;
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.6;
}
:where(.teacher-students-page) .ba-state-button{
  min-height: 42px;
  border: 0;
  border-radius: 999px;
  padding: 0 16px;
  background: var(--ba-primary);
  color: #fff;
  font-weight: 950;
  cursor: pointer;
}
:where(.teacher-students-page) .ba-toast{
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
:where(.teacher-students-page) .ba-toast.success{ background: rgba(34,197,94,.14); color: #166534; }
:where(.teacher-students-page) .ba-toast.error{ background: rgba(239,68,68,.12); color: #991b1b; }
:where(.teacher-students-page) .ba-toast.info{ background: rgba(59,130,246,.13); color: #1d4ed8; }
:where(.teacher-students-page) .ba-toast button{
  border: 0;
  background: transparent;
  color: currentColor;
  font-weight: 1000;
  cursor: pointer;
}
:where(.teacher-students-page) .ba-list{
  display: grid;
  gap: 7px;
  margin-top: 10px;
}
:where(.teacher-students-page) .student-row{
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
:where(.teacher-students-page) .student-row:hover{
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--ba-primary) 24%, var(--border, rgba(0,0,0,.10)));
  box-shadow: 0 16px 34px rgba(15,23,42,.07);
}
:where(.teacher-students-page) .ba-avatar{
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
:where(.teacher-students-page) .student-main,
:where(.teacher-students-page) .student-main strong,
:where(.teacher-students-page) .student-main small,
:where(.teacher-students-page) .student-main em{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
:where(.teacher-students-page) .student-main strong{
  color: var(--text,#111827);
  font-size: 14px;
  font-weight: 1000;
  letter-spacing: -.02em;
}
:where(.teacher-students-page) .student-main small{
  margin-top: 3px;
  color: var(--muted,#64748b);
  font-size: 12px;
  font-weight: 850;
  font-style: normal;
}
:where(.teacher-students-page) .student-main em{
  margin-top: 3px;
  color: color-mix(in srgb, var(--muted,#64748b) 86%, var(--text,#111827));
  font-size: 11px;
  font-weight: 750;
  font-style: normal;
}
:where(.teacher-students-page) .student-side{
  display: grid;
  justify-items: end;
  gap: 6px;
  flex: 0 0 auto;
}
:where(.teacher-students-page) .student-side i{
  color: var(--muted,#64748b);
  font-style: normal;
  font-size: 18px;
  font-weight: 1000;
  line-height: 1;
}
:where(.teacher-students-page) .ba-chip{
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
:where(.teacher-students-page) .ba-chip.green{ background: rgba(34,197,94,.12); color: #16a34a; }
:where(.teacher-students-page) .ba-chip.red{ background: rgba(239,68,68,.12); color: #dc2626; }
:where(.teacher-students-page) .ba-chip.blue{ background: rgba(59,130,246,.12); color: #2563eb; }
:where(.teacher-students-page) .ba-chip.gray{ background: color-mix(in srgb,var(--muted,#64748b) 14%,transparent); color: var(--muted,#64748b); }
:where(.teacher-students-page) .ba-chip.orange{ background: rgba(245,158,11,.14); color: #b45309; }
:where(.teacher-students-page) .ba-chip.purple{ background: rgba(147,51,234,.12); color: #7e22ce; }
:where(.teacher-students-page) .status-dot-mini{
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 999px;
  background: var(--muted,#64748b);
  box-shadow: 0 0 0 4px color-mix(in srgb, currentColor 10%, transparent);
}
:where(.teacher-students-page) .status-dot-mini.green{ background: #22c55e; }
:where(.teacher-students-page) .status-dot-mini.red{ background: #ef4444; }
:where(.teacher-students-page) .status-dot-mini.blue{ background: #3b82f6; }
:where(.teacher-students-page) .status-dot-mini.orange{ background: #f59e0b; }
:where(.teacher-students-page) .status-dot-mini.gray{ background: var(--muted,#64748b); }
.teacher-students-overlay.ba-sheet-backdrop,
.teacher-students-overlay.ba-modal-backdrop{
  position: fixed;
  inset: 0;
  z-index: 80;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15,23,42,.50);
  backdrop-filter: blur(12px);
}
.teacher-students-overlay .ba-sheet{
  width: min(760px, 100%);
  max-height: min(88dvh, 760px);
  overflow-y: auto;
  padding: 14px;
  border-radius: 28px 28px 22px 22px;
  box-shadow: 0 30px 90px rgba(15,23,42,.32);
  animation: sheetIn .18s var(--ease);
}
.teacher-students-overlay .ba-sheet.small{
  width: min(520px, 100%);
}
@keyframes  sheetIn {
  from { transform: translateY(16px); opacity: .7; }
  to { transform: translateY(0); opacity: 1; }
}
.teacher-students-overlay .ba-sheet-head,
.teacher-students-overlay .ba-sheet-profile{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 12px;
}
.teacher-students-overlay .ba-sheet-head h2,
.teacher-students-overlay .ba-sheet-profile h2,
.teacher-students-overlay .ba-modal-head h2{
  margin: 0;
  color: var(--text,#111827);
  font-size: 21px;
  font-weight: 1000;
  letter-spacing: -.05em;
}
.teacher-students-overlay .ba-sheet-head p,
.teacher-students-overlay .ba-sheet-profile p,
.teacher-students-overlay .ba-modal-head p{
  margin: 5px 0 0;
  color: var(--muted,#64748b);
  font-size: 12px;
  line-height: 1.5;
  font-weight: 750;
}
.teacher-students-overlay .ba-sheet-head button,
.teacher-students-overlay .ba-sheet-profile button,
.teacher-students-overlay .ba-modal-head button{
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
.teacher-students-overlay .ba-sheet-actions,
.teacher-students-overlay .ba-modal-actions{
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
.teacher-students-overlay .ba-sheet-actions button,
.teacher-students-overlay .ba-modal-actions button{
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
.teacher-students-overlay .ba-sheet-actions button.primary,
.teacher-students-overlay .ba-modal-actions button:last-child{
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff;
  box-shadow: 0 14px 32px color-mix(in srgb, var(--ba-primary) 25%, transparent);
}
.teacher-students-overlay .ba-modal-actions button:disabled{
  opacity: .65;
  cursor: not-allowed;
}
.teacher-students-overlay .ba-menu-list{
  display: grid;
  gap: 8px;
}
.teacher-students-overlay .ba-menu-list button{
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
.teacher-students-overlay .ba-menu-list button span{
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
.teacher-students-overlay .ba-menu-list button b,
.teacher-students-overlay .ba-menu-list button small{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.teacher-students-overlay .ba-menu-list button b{
  font-size: 13px;
  font-weight: 1000;
}
.teacher-students-overlay .ba-menu-list button small{
  margin-top: 2px;
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 750;
}
.teacher-students-overlay .ba-menu-list button.active{
  border-color: color-mix(in srgb, var(--ba-primary) 34%, var(--border,rgba(0,0,0,.10)));
  background: color-mix(in srgb, var(--ba-primary) 8%, var(--surface,#fff));
}
.teacher-students-overlay .ba-menu-list button.danger span{
  background: color-mix(in srgb, #dc2626 10%, transparent);
  color: #dc2626;
}
.teacher-students-overlay .ba-menu-list button.danger b{
  color: #991b1b;
}
.teacher-students-overlay .student-detail-strip{
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 7px;
  margin-bottom: 10px;
}
.teacher-students-overlay .student-detail-strip span{
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
.teacher-students-overlay .student-detail-strip b{
  display: block;
  margin-bottom: 3px;
  color: var(--text,#111827);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .05em;
}
.teacher-students-overlay .ba-form{
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 10px;
}
.teacher-students-overlay .ba-form.two{
  grid-template-columns: minmax(0,1fr);
}
.teacher-students-overlay .ba-form.compact{
  gap: 9px;
}
.teacher-students-overlay .ba-form label{
  display: grid;
  gap: 6px;
  min-width: 0;
}
.teacher-students-overlay .ba-form span{
  color: var(--muted,#64748b);
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .06em;
}
.teacher-students-overlay .ba-form .wide{
  grid-column: 1 / -1;
}
.teacher-students-overlay .ba-form-section{
  padding: 12px 0;
  border-top: 1px solid var(--border,rgba(0,0,0,.08));
}
.teacher-students-overlay .ba-form-section:first-of-type{
  border-top: 0;
  padding-top: 0;
}
.teacher-students-overlay .ba-form-section h3{
  margin: 0 0 10px;
  color: var(--text,#111827);
  font-size: 14px;
  font-weight: 1000;
  letter-spacing: -.03em;
}
.teacher-students-page input[type="file"]{
  padding: 10px;
  font-size: 12px;
}
.teacher-students-page textarea{
  min-height: 92px;
  padding: 12px;
  resize: vertical;
  line-height: 1.55;
}
.teacher-students-overlay .ba-media-button{
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
  transition: transform .18s var(--ease), background .18s var(--ease), border-color .18s var(--ease), box-shadow .18s var(--ease), filter .18s var(--ease);
}
.teacher-students-overlay .ba-media-button.secondary{
  background: var(--surface, #fff);
  color: var(--ba-primary) !important;
  box-shadow: none;
}
.teacher-students-overlay .ba-media-button input{
  display: none;
}
.teacher-students-overlay .ba-preview-photo{
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 22px;
  border: 1px solid var(--border,rgba(0,0,0,.10));
}
.teacher-students-overlay .ba-modal{
  width: min(980px, 100%);
  max-height: min(92dvh, 900px);
  overflow-y: auto;
  padding: 14px;
  border-radius: 28px;
  box-shadow: 0 30px 90px rgba(15,23,42,.35);
}
.teacher-students-overlay .ba-modal-head{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 4px 2px 14px;
}
:where(.teacher-students-page) .ba-table-card,
:where(.teacher-students-page) .ba-empty{
  padding: 13px;
  border-radius: 24px;
}
:where(.teacher-students-page) .ba-empty{
  display: grid;
  place-items: center;
  align-content: center;
  gap: 8px;
  min-height: 220px;
  text-align: center;
  border-style: dashed;
}
:where(.teacher-students-page) .ba-empty-icon{
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: color-mix(in srgb,var(--ba-primary) 12%,var(--surface,#fff));
  font-size: 28px;
}
:where(.teacher-students-page) .ba-empty h3{
  margin: 0;
  font-size: 18px;
  font-weight: 1000;
}
:where(.teacher-students-page) .ba-empty p{
  margin: 0;
  color: var(--muted,#64748b);
  font-size: 13px;
  line-height: 1.6;
}
:where(.teacher-students-page) .ba-table-card{
  margin-top: 10px;
}
:where(.teacher-students-page) .ba-table-scroll{
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  border-radius: 18px;
  border: 1px solid var(--border,rgba(0,0,0,.08));
}
:where(.teacher-students-page) .ba-table-scroll table{
  width: 100%;
  min-width: 1120px;
  border-collapse: collapse;
  background: var(--card-bg, var(--surface, var(--bg, transparent)));
}
:where(.teacher-students-page) .ba-table-scroll th,
:where(.teacher-students-page) .ba-table-scroll td{
  padding: 10px;
  border-bottom: 1px solid var(--border,rgba(0,0,0,.08));
  vertical-align: top;
  text-align: left;
  font-size: 13px;
}
:where(.teacher-students-page) .ba-table-scroll th{
  background: var(--table-header-bg, color-mix(in srgb, var(--ba-primary) 6%, var(--card-bg, var(--surface, var(--bg, transparent)))));
  color: var(--table-header-text, var(--muted, var(--text)));
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .07em;
}
:where(.teacher-students-page) .ba-table-scroll td strong,
:where(.teacher-students-page) .ba-table-scroll td span{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
:where(.teacher-students-page) .ba-table-scroll td span{
  margin-top: 3px;
  color: var(--muted,#64748b);
  font-size: 11px;
}
:where(.teacher-students-page) .ba-table-actions{
  display: flex;
  flex-wrap: nowrap;
  gap: 7px;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
:where(.teacher-students-page) .ba-table-actions::-webkit-scrollbar{
  display: none;
}
:where(.teacher-students-page) .ba-table-actions button{
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
:where(.teacher-students-page) .ba-table-actions button:first-child{
  background: var(--ba-primary);
  color: #fff;
  border-color: var(--ba-primary);
}
:where(.teacher-students-page) .ba-table-actions button.ba-delete{
  color: #991b1b;
  background: color-mix(in srgb,#dc2626 7%,var(--surface,#fff));
  border-color: color-mix(in srgb,#dc2626 24%,var(--border,rgba(0,0,0,.10)));
}
:where(.teacher-students-page) .ba-empty-table{
  padding: 22px;
  text-align: center;
  color: var(--muted,#64748b);
  font-weight: 850;
}
@media  (min-width: 680px) {
.teacher-students-page{
    padding: calc(12px * var(--local-density-scale,1));
    padding-bottom: 44px;
  }
:where(.teacher-students-page) .ba-list{
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
:where(.teacher-students-page) .student-row{
    border-radius: 24px;
    padding: 12px;
  }
.teacher-students-overlay .ba-form{
    grid-template-columns: repeat(2, minmax(0,1fr));
  }
.teacher-students-overlay .ba-form.two{
    grid-template-columns: repeat(2, minmax(0,1fr));
  }
.teacher-students-overlay.ba-modal-backdrop,
.teacher-students-overlay.ba-sheet-backdrop{
    place-items: center;
    padding: 18px;
  }
.teacher-students-overlay .ba-sheet{
    border-radius: 28px;
    padding: 18px;
  }
.teacher-students-overlay .ba-modal{
    padding: 18px;
  }
}
@media  (min-width: 1040px) {
.teacher-students-page{
    padding: calc(16px * var(--local-density-scale,1));
    padding-bottom: 48px;
  }
:where(.teacher-students-page) .ba-list,
:where(.teacher-students-page) .ba-table-card{
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
  }
:where(.teacher-students-page) .ba-list{
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
.teacher-students-overlay .ba-form{
    grid-template-columns: repeat(3, minmax(0,1fr));
  }
.teacher-students-overlay .ba-form.two{
    grid-template-columns: repeat(2, minmax(0,1fr));
  }
}
@media  (max-width: 520px) {
.teacher-students-page{
    padding: calc(7px * var(--local-density-scale,1));
    padding-bottom: max(38px, env(safe-area-inset-bottom));
  }
.teacher-students-overlay .student-detail-strip{
    grid-template-columns: minmax(0,1fr);
  }
.teacher-students-overlay .ba-sheet,
.teacher-students-overlay .ba-modal{
    border-radius: 24px 24px 18px 18px;
    padding: 12px;
  }
.teacher-students-overlay .ba-sheet-actions,
.teacher-students-overlay .ba-modal-actions{
    display: grid;
    grid-template-columns: minmax(0,1fr);
  }
.teacher-students-overlay .ba-sheet-actions button,
.teacher-students-overlay .ba-modal-actions button{
    width: 100%;
  }
}
.teacher-students-overlay .ba-media-button{
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
.teacher-students-overlay .ba-media-button.secondary{
  background: var(--surface, #fff);
  color: var(--ba-primary);
  box-shadow: none;
}
@media  (max-width: 520px) {
.teacher-students-overlay .ba-media-button{
    width: 100%;
  }
}
.teacher-students-page .settings-save-button{
  width: 42px;
  min-width: 42px;
  padding: 0;
  font-size: 25px;
  letter-spacing: 0;
}
.teacher-students-overlay .ba-modal-actions button:last-child,
.teacher-students-overlay .ba-sheet-actions .primary,
.teacher-students-page .ba-state-button,
.teacher-students-overlay .ba-media-button:not(.secondary){
  border-color: var(--ba-primary);
  background: var(--ba-primary);
  color: #fff !important;
  box-shadow: 0 12px 28px color-mix(in srgb, var(--ba-primary) 22%, transparent);
}
.teacher-students-overlay .ba-media-button.secondary{
  border-color: var(--ba-primary);
  background: var(--surface,#fff);
  color: var(--ba-primary) !important;
  box-shadow: none;
}
.teacher-students-page .ba-cancel-button,
.teacher-students-overlay .ba-modal-actions button:not(:last-child),
.teacher-students-overlay .ba-sheet-actions button:not(.primary){
  border-color: var(--border, rgba(0,0,0,.10));
  background: color-mix(in srgb, var(--muted,#64748b) 8%, var(--surface,#fff));
  color: var(--text,#111827) !important;
  box-shadow: none;
}
.teacher-students-overlay .ba-modal-actions button:last-child:hover,
.teacher-students-overlay .ba-sheet-actions .primary:hover,
.teacher-students-page .ba-state-button:hover,
.teacher-students-overlay .ba-media-button:not(.secondary):hover{
  filter: brightness(.96);
  transform: translateY(-1px);
}
.teacher-students-overlay .ba-media-button.secondary:hover{
  background: color-mix(in srgb, var(--ba-primary) 7%, var(--surface,#fff));
  transform: translateY(-1px);
}
.teacher-students-overlay .ba-media-button:focus-visible,
.teacher-students-overlay .ba-modal-actions button:focus-visible,
.teacher-students-overlay .ba-sheet-actions button:focus-visible{
  outline: 3px solid color-mix(in srgb, var(--ba-primary) 28%, transparent);
  outline-offset: 2px;
}
.teacher-students-page button:disabled,
.teacher-students-overlay .ba-media-button[aria-disabled="true"]{
  cursor: not-allowed;
  opacity: .58;
  transform: none !important;
  filter: none !important;
  box-shadow: none !important;
}
.teacher-students-page .ba-search:focus-within{
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--ba-primary) 12%, transparent);
}
.teacher-students-page .student-row{
  position: relative;
  overflow: hidden;
  border-color: color-mix(in srgb, var(--ba-primary) 15%, var(--border, rgba(0,0,0,.10)));
}
.teacher-students-page .student-row::before{
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 3px;
  background: var(--ba-primary);
  opacity: .78;
}
.teacher-students-page .student-row:hover,
.teacher-students-page .student-row:focus-within{
  border-color: color-mix(in srgb, var(--ba-primary) 46%, var(--border, rgba(0,0,0,.10)));
  background: color-mix(in srgb, var(--ba-primary) 5%, var(--card-bg, var(--surface, #fff)));
  box-shadow: 0 14px 30px color-mix(in srgb, var(--ba-primary) 10%, transparent);
}
.teacher-students-page .ba-avatar{
  border: 1px solid color-mix(in srgb, var(--ba-primary) 42%, transparent);
  box-shadow: 0 12px 24px color-mix(in srgb, var(--ba-primary) 18%, transparent);
}
.teacher-students-page .ba-chip.blue,
.teacher-students-page .ba-chip.purple{
  border-color: color-mix(in srgb, var(--ba-primary) 30%, transparent);
  background: color-mix(in srgb, var(--ba-primary) 10%, var(--card-bg, var(--surface, #fff)));
  color: var(--ba-primary);
}
.teacher-students-page .ba-table-scroll th{
  background: color-mix(in srgb, var(--ba-primary) 9%, var(--table-head, var(--card-bg, #fff)));
  color: var(--text, #111827);
}
@media  (max-width: 640px) {
.teacher-students-overlay .ba-section-heading-row .ba-media-button{
    width: 100%;
  }
}
.teacher-students-overlay .ba-field-hint{
  display: block;
  margin-top: 6px;
  color: var(--muted, #64748b);
  font-size: .74rem;
  line-height: 1.4;
  font-weight: 650;
}
.teacher-students-page select:disabled,
.teacher-students-page input:disabled{
  opacity: .68;
  cursor: not-allowed;
  background: color-mix(in srgb, var(--surface, #fff) 86%, var(--border, rgba(0,0,0,.10)));
}
.teacher-students-overlay .ba-inline-info{
  align-self: stretch;
  display: grid;
  gap: 4px;
  padding: 11px 12px;
  border-radius: 14px;
  border: 1px solid color-mix(in srgb, var(--ba-primary) 22%, var(--border, rgba(0,0,0,.10)));
  background: color-mix(in srgb, var(--ba-primary) 7%, var(--card-bg, var(--surface, #fff)));
}
.teacher-students-overlay .ba-inline-info b{
  font-size: .8rem;
  color: var(--text, #111827);
}
.teacher-students-overlay .ba-inline-info span{
  color: var(--muted, #64748b);
  font-size: .73rem;
  line-height: 1.45;
}
.teacher-students-overlay.ba-sheet-backdrop,
.teacher-students-overlay.ba-modal-backdrop{
  --ba-card: var(--card-bg, var(--surface, #ffffff));
  --ba-text: var(--text, var(--foreground, #111827));
  --ba-muted: var(--muted, var(--muted-foreground, #64748b));
  --ba-border: var(--border, rgba(15, 23, 42, .12));

  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100dvh !important;
  min-width: 100vw !important;
  min-height: 100dvh !important;
  max-width: none !important;
  max-height: none !important;
  z-index: 2147482000 !important;

  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  box-sizing: border-box !important;
  padding:
    max(10px, env(safe-area-inset-top, 0px))
    10px
    max(10px, env(safe-area-inset-bottom, 0px)) !important;
  overflow: hidden !important;

  background: rgba(2, 6, 23, .68) !important;
  -webkit-backdrop-filter: blur(11px) saturate(.9);
  backdrop-filter: blur(11px) saturate(.9);
}
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet{
  position: relative;
  width: min(760px, calc(100vw - 20px)) !important;
  max-width: calc(100vw - 20px) !important;
  max-height: calc(100dvh - 20px) !important;
  min-height: 0 !important;
  margin: 0 !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scroll-padding-bottom: 90px;
  border: 1px solid var(--ba-border) !important;
  border-radius: 24px !important;
  background: var(--ba-card) !important;
  color: var(--ba-text) !important;
  box-shadow: 0 28px 90px rgba(2, 6, 23, .34) !important;
}
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet.small{
  width: min(520px, calc(100vw - 20px)) !important;
}
.teacher-students-overlay.ba-modal-backdrop .ba-modal{
  position: relative;
  width: min(980px, calc(100vw - 20px)) !important;
  max-width: calc(100vw - 20px) !important;
  max-height: calc(100dvh - 20px) !important;
  min-height: 0 !important;
  margin: 0 !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scroll-padding-bottom: 96px;
  border: 1px solid var(--ba-border) !important;
  border-radius: 24px !important;
  background: var(--ba-card) !important;
  color: var(--ba-text) !important;
  box-shadow: 0 28px 90px rgba(2, 6, 23, .36) !important;
}
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-head,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-profile,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-head{
  position: sticky;
  top: -14px;
  z-index: 8;
  margin: -14px -14px 12px;
  padding: 14px;
  border-bottom: 1px solid var(--ba-border);
  background: var(--ba-card);
}
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-head h2,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-profile h2,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-head h2,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-head p,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-profile p,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-head p{
  color: inherit;
}
.teacher-students-overlay.ba-sheet-backdrop .ba-modal-close,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-close{
  position: relative;
  z-index: 10;
  flex: 0 0 auto;
  width: 44px !important;
  min-width: 44px !important;
  height: 44px !important;
  min-height: 44px !important;
  display: grid !important;
  place-items: center !important;
  padding: 0 !important;
  border: 1px solid var(--ba-border) !important;
  border-radius: 999px !important;
  background: color-mix(in srgb, var(--ba-text) 6%, var(--ba-card)) !important;
  color: var(--ba-text) !important;
  box-shadow: none !important;
  opacity: 1 !important;
  font-size: 20px !important;
  line-height: 1 !important;
  font-weight: 900 !important;
  cursor: pointer;
  pointer-events: auto !important;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}
.teacher-students-overlay.ba-sheet-backdrop .ba-modal-close:hover,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-close:hover{
  background: color-mix(in srgb, var(--ba-primary) 10%, var(--ba-card)) !important;
  border-color: color-mix(in srgb, var(--ba-primary) 38%, var(--ba-border)) !important;
}
.teacher-students-overlay.ba-sheet-backdrop input,
.teacher-students-overlay.ba-sheet-backdrop select,
.teacher-students-overlay.ba-sheet-backdrop textarea,
.teacher-students-overlay.ba-modal-backdrop input,
.teacher-students-overlay.ba-modal-backdrop select,
.teacher-students-overlay.ba-modal-backdrop textarea{
  background: var(--input-bg, var(--ba-card)) !important;
  color: var(--input-text, var(--ba-text)) !important;
  border-color: var(--input-border, var(--ba-border)) !important;
}
.teacher-students-overlay.ba-sheet-backdrop select option,
.teacher-students-overlay.ba-modal-backdrop select option{
  background: var(--ba-card);
  color: var(--ba-text);
}
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-actions,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-actions{
  position: sticky !important;
  bottom: -14px !important;
  z-index: 7;
  margin: 14px -14px -14px !important;
  padding: 12px 14px 14px !important;
  border-top: 1px solid var(--ba-border);
  background: var(--ba-card) !important;
}
@media  (prefers-color-scheme: dark) {
.teacher-students-overlay.ba-sheet-backdrop,
.teacher-students-overlay.ba-modal-backdrop{
    background: rgba(2, 6, 23, .80) !important;
  }
}
@media  (max-width: 520px) {
.teacher-students-overlay.ba-sheet-backdrop,
.teacher-students-overlay.ba-modal-backdrop{
    padding:
      max(8px, env(safe-area-inset-top, 0px))
      8px
      max(8px, env(safe-area-inset-bottom, 0px)) !important;
  }
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet,
.teacher-students-overlay.ba-modal-backdrop .ba-modal{
    width: calc(100vw - 16px) !important;
    max-width: calc(100vw - 16px) !important;
    max-height: calc(100dvh - 16px) !important;
    border-radius: 20px !important;
  }
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-head,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-profile,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-head{
    top: -12px;
    margin: -12px -12px 12px;
    padding: 12px;
  }
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-actions,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-actions{
    bottom: -12px !important;
    margin: 12px -12px -12px !important;
    padding: 10px 12px 12px !important;
  }
}
.teacher-students-page{
  --excel-surface: var(--card-bg, var(--surface, #fff));
  --excel-surface-2: var(--surface-2, color-mix(in srgb, var(--excel-surface) 93%, var(--text, #111827) 7%));
  --excel-text: var(--text, #111827);
  --excel-muted: var(--muted, color-mix(in srgb, var(--excel-text) 62%, transparent));
  --excel-border: var(--border, color-mix(in srgb, var(--excel-text) 14%, transparent));
  --excel-soft: color-mix(in srgb, var(--excel-text) 5%, transparent);
}
.teacher-students-overlay.ba-sheet-backdrop,
.teacher-students-overlay.ba-modal-backdrop{
  background: rgba(2, 6, 23, .66) !important;
  -webkit-backdrop-filter: blur(12px) saturate(.9) !important;
  backdrop-filter: blur(12px) saturate(.9) !important;
}
.teacher-students-overlay.ba-sheet-backdrop .ba-modal-close,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-close,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-head > button,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-profile > button,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-head > button{
  position: relative !important;
  z-index: 20 !important;
  width: 42px !important;
  min-width: 42px !important;
  height: 42px !important;
  min-height: 42px !important;
  padding: 0 !important;
  display: grid !important;
  place-items: center !important;
  border: 1px solid rgba(15, 23, 42, .20) !important;
  border-radius: 999px !important;
  background: #ffffff !important;
  color: #111827 !important;
  opacity: 1 !important;
  visibility: visible !important;
  box-shadow: 0 5px 16px rgba(15, 23, 42, .16) !important;
  font-size: 20px !important;
  font-weight: 900 !important;
  line-height: 1 !important;
  cursor: pointer !important;
  pointer-events: auto !important;
}
.teacher-students-overlay.ba-sheet-backdrop .ba-modal-close:hover,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-close:hover,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-head > button:hover,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-profile > button:hover,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-head > button:hover{
  border-color: color-mix(in srgb, var(--ba-primary, #2563eb) 42%, rgba(15, 23, 42, .20)) !important;
  background: color-mix(in srgb, var(--ba-primary, #2563eb) 8%, #ffffff) !important;
  color: #111827 !important;
}
@media  (prefers-color-scheme: dark) {
.teacher-students-overlay.ba-sheet-backdrop,
.teacher-students-overlay.ba-modal-backdrop{
    background: rgba(2, 6, 23, .78) !important;
  }
.teacher-students-overlay.ba-sheet-backdrop .ba-modal-close,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-close,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-head > button,
.teacher-students-overlay.ba-sheet-backdrop .ba-sheet-profile > button,
.teacher-students-overlay.ba-modal-backdrop .ba-modal-head > button{
    border-color: rgba(255, 255, 255, .22) !important;
    background: #1f2937 !important;
    color: #ffffff !important;
    box-shadow: 0 5px 18px rgba(0, 0, 0, .36) !important;
  }
}
:where(.teacher-students-page) .ba-table-person{ display:flex; align-items:center; gap:9px; min-width:160px; }
:where(.teacher-students-page) .ba-table-person .ba-avatar{ width:32px; height:32px; font-size:12px; flex:0 0 32px; }
.teacher-students-page{ background: var(--bg, var(--background, #f2f4f7)); padding: 5px; min-height: 0; }
:where(.teacher-students-page) .ba-list{ gap: 9px; margin-top: 2px; }
:where(.teacher-students-page) .student-row,
:where(.teacher-students-page) .ba-table-card{
  background: color-mix(in srgb, var(--card-bg, var(--surface, #fff)) 93%, var(--text, #182235) 7%);
  border: 1px solid color-mix(in srgb, var(--border, #d4dae3) 85%, var(--text, #182235) 15%);
  box-shadow: none; border-radius: 13px; transition: border-color .12s ease;
}
:where(.teacher-students-page) .student-row:hover{ transform: none; box-shadow: none; }
:where(.teacher-students-page) .ba-table-card{ padding: 4px; margin-top: 2px; }
:where(.teacher-students-page) .ba-table-scroll{ border-radius: 10px; }
:where(.teacher-students-page) .ba-table-scroll table{ background: color-mix(in srgb, var(--card-bg, var(--surface,#fff)) 95%, var(--text,#182235) 5%); }
:where(.teacher-students-page) .ba-table-scroll thead th{ position: sticky; top: 0; z-index: 2;
  background: color-mix(in srgb, var(--card-bg, var(--surface,#fff)) 85%, var(--text,#182235) 15%); }
:where(.teacher-students-page) .ba-table-scroll tbody tr:nth-child(even){ background: color-mix(in srgb, var(--card-bg, var(--surface,#fff)) 89%, var(--text,#182235) 11%); }
:where(.teacher-students-page) .ba-table-scroll td{ background: transparent; }
:where(.teacher-students-page) .ba-avatar{ box-shadow: none; border-radius: 12px; }
.teacher-students-page .student-row::before{ display: none; }
@media  (min-width: 1024px) {
:where(.teacher-students-page) .ba-list{ grid-template-columns: repeat(4,minmax(0,1fr)); }
}
@media  (max-width: 639px) {
.teacher-students-page{ padding: 3px; }
:where(.teacher-students-page) .student-row{ padding: 9px; }
}
@media  (prefers-reduced-motion: reduce) {
:where(.teacher-students-page) .student-row{ transition: none; }
}
.teacher-students-page{
  width: 100%;
  max-width: none;
  min-width: 0;
  min-height: 0;
  margin: 0;
  padding: 5px;
  padding-bottom: max(20px, env(safe-area-inset-bottom));
  overflow-x: clip;
}
.teacher-students-page .ba-list,
.teacher-students-page .ba-table-card{
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  max-width: none;
  margin-left: 0;
  margin-right: 0;
}
.teacher-students-page .ba-list{
  gap: 9px;
  margin-top: 2px;
  align-items: stretch;
}
.teacher-students-page .ba-list > .student-row{
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 9px 10px;
}
.teacher-students-page .ba-table-card{
  display: block;
  padding: 4px;
  margin-top: 2px;
  overflow: visible;
}
.teacher-students-page .ba-table-scroll{
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin: 0;
  overflow-x: auto;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  border-radius: 10px;
}
.teacher-students-page .ba-table-scroll table{
  width: 100%;
  margin: 0;
}
.teacher-students-page .ba-table-scroll th,
.teacher-students-page .ba-table-scroll td{
  padding: 9px 10px;
}
@media  (min-width: 680px) and (max-width: 1023px) {
.teacher-students-page .ba-list{ grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media  (min-width: 1024px) {
.teacher-students-page .ba-list{ grid-template-columns: repeat(4, minmax(0,1fr)); }
}
@media  (max-width: 679px) {
.teacher-students-page .ba-list{ grid-template-columns: minmax(0,1fr); }
}
@media  (max-width: 639px) {
.teacher-students-page{
    padding: 3px;
    padding-bottom: max(14px, env(safe-area-inset-bottom));
  }
.teacher-students-page .ba-list{ gap: 7px; }
.teacher-students-page .ba-list > .student-row{ padding: 9px; }
.teacher-students-page .ba-table-scroll th,
.teacher-students-page .ba-table-scroll td{ padding: 8px 9px; }
}

/* Teacher-specific actions: original Branch Admin cards and tables retain the same
   surface, texture, spacing, typography, and responsive layout. */
.teacher-students-page .student-row:focus-visible,
.teacher-students-page .ba-table-actions button:focus-visible{outline:2px solid var(--ba-primary);outline-offset:2px}
.teacher-students-page .ba-table-actions button{min-width:58px}
.teacher-students-page .ba-table-person{min-width:160px}
.teacher-students-page .ba-page{max-width:none}
/* Keep the original Branch Admin automatic card height. */
.teacher-students-overlay{--ease:cubic-bezier(.2,.8,.2,1);font-family:var(--font-family,system-ui);font-size:var(--font-size,14px)}
.teacher-students-overlay *,.teacher-students-overlay *::before,.teacher-students-overlay *::after{box-sizing:border-box;min-width:0}
.teacher-students-overlay .ba-modal,.teacher-students-overlay .ba-sheet{color:var(--text,#111827);background:var(--card-bg,var(--surface,#fff));border:1px solid var(--border,rgba(0,0,0,.1))}
.teacher-students-overlay .ba-modal-head,.teacher-students-overlay .ba-sheet-head{display:flex;justify-content:space-between;align-items:center;gap:12px}
.teacher-students-overlay .ba-modal-head h2,.teacher-students-overlay .ba-sheet-head h2{margin:0}
.teacher-students-overlay .ba-form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.teacher-students-overlay .ba-form label,.teacher-students-overlay .ba-filter-field{display:grid;gap:6px;font-size:12px;font-weight:900}
.teacher-students-overlay .ba-form label>span,.teacher-students-overlay .ba-filter-field>span{color:var(--text,#111827)}
.teacher-students-overlay .ba-form input,.teacher-students-overlay .ba-form select,.teacher-students-overlay .ba-form textarea,
.teacher-students-overlay .ba-filter-field input,.teacher-students-overlay .ba-filter-field select{width:100%;min-height:44px;border:1px solid var(--input-border,var(--border,rgba(0,0,0,.1)));border-radius:14px;padding:8px 12px;background:var(--input-bg,var(--surface,#fff));color:var(--input-text,var(--text,#111827));font:inherit;font-size:16px;outline:none}
.teacher-students-overlay .ba-form textarea{min-height:90px;resize:vertical}
.teacher-students-overlay .ba-form .wide{grid-column:1/-1}
.teacher-students-overlay .ba-media-section{display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:8px 0 2px}
.teacher-students-overlay .ba-media-section .ba-avatar{width:70px;height:70px;flex:0 0 70px}
.teacher-students-overlay .ba-media-button{width:auto;position:relative;min-height:42px;cursor:pointer}
.teacher-students-overlay .ba-media-button input{position:absolute;inset:0;opacity:0;width:100%;height:100%;cursor:pointer;display:block}
.teacher-students-overlay .ba-school-managed{background:color-mix(in srgb,var(--card-bg,var(--surface,#fff)) 91%,var(--text,#182235) 9%);border:1px solid var(--border,rgba(0,0,0,.1));border-radius:12px;padding:10px 12px;display:grid;gap:5px}
.teacher-students-overlay .ba-school-managed strong{font-size:12px}
.teacher-students-overlay .ba-school-managed p{font-size:12px;line-height:1.5;color:var(--muted,#64748b);margin:0}
.teacher-students-overlay .ba-modal-actions button:disabled,.teacher-students-overlay .ba-media-button:has(input:disabled){opacity:.55;pointer-events:none}
.teacher-students-overlay .ba-menu-list{margin-top:12px}
.teacher-students-overlay .ba-menu-list button.active{border-color:var(--ba-primary);background:color-mix(in srgb,var(--ba-primary) 8%,var(--card-bg,var(--surface,#fff)))}
.teacher-students-page .teacher-loading{padding:24px;text-align:center;color:var(--muted,#64748b)}
.teacher-students-page .ba-table-scroll{scrollbar-width:thin}
@media(max-width:580px){.teacher-students-overlay .ba-form{grid-template-columns:minmax(0,1fr)}.teacher-students-overlay .ba-modal,.teacher-students-overlay .ba-sheet{border-radius:16px!important}}
@media(prefers-reduced-motion:reduce){.teacher-students-page .student-row{transition:none}}

`,ci=`
/* V32: identical Reports subnavigation structure and style to Branch Admin. */
.role-shell.branch-workspace-layout .ba-v7-nav .ba-v7-tool[aria-label="Add in Reports"]{display:none!important}

.ba-workspace-wrapper, .ba-setup-page { min-width:0; width:100%; }
/* V14: report previews start immediately below the subtabs; full available width. */
.ba-reports-workspace { width:100%; max-width:none; min-width:0; margin:0; padding:0; }
.ba-reports-workspace .ba-report-subtabs {
  display:flex; align-items:center; gap:6px; flex-wrap:nowrap;
  min-width:0; width:100%; margin:0; padding:4px 0 5px;
  position:sticky; top:0; z-index:22;
  background:var(--eds-shell-bg,var(--bg,var(--surface,#fff)));
  border-bottom:1px solid var(--border,rgba(15,23,42,.10));
  backdrop-filter:blur(12px);
}
.ba-report-subtab-list { display:flex; flex:1 1 auto; min-width:0; gap:4px;
  overflow-x:auto; scrollbar-width:thin; overscroll-behavior-x:contain; white-space:nowrap; }
.ba-reports-workspace .ba-report-subtab-list button { flex:0 0 auto; min-height:31px;
  border-radius:7px; padding:4px 9px; font-size:11px; }
.ba-global-report-zoom { flex:0 0 auto; display:flex; align-items:center; gap:3px;
  margin-left:auto; white-space:nowrap; }
.ba-global-report-zoom button,.ba-global-report-zoom select {
  box-sizing:border-box; height:31px; min-height:31px; border:1px solid var(--border,rgba(0,0,0,.14));
  border-radius:7px; background:var(--surface,#fff); color:var(--text,#111827); font:inherit;
  font-size:12px; font-weight:650; padding:0 5px; cursor:pointer;
}
.ba-global-report-zoom button { width:29px; min-width:29px; font-size:19px; }
.ba-global-report-zoom select { width:103px; max-width:103px; }
.ba-reports-workspace > .student-reports-page,
.ba-reports-workspace > .ba-page { width:100%!important; max-width:none!important; min-width:0;
  padding:0!important; margin:0!important; background:transparent; }
.ba-reports-workspace .student-reports-page .ba-print-card { width:100%; max-width:none;
  margin:0!important; padding:0!important; border:0!important; border-radius:0!important;
  background:transparent!important; overflow:visible; box-shadow:none!important; }
.ba-reports-workspace .student-reports-page .ba-print-zone { width:100%; padding:0!important; }
.ba-reports-workspace .ba-print-head,
.ba-reports-workspace .ba-report-toolbar { display:none!important; }
/* V15 — mobile has dedicated full-width tab row, then a right-aligned zoom row. */
@media(max-width:640px) {
 .ba-reports-workspace .ba-report-subtabs {
   display:flex; flex-direction:column; align-items:stretch;
   gap:5px; width:100%; min-width:0; padding-bottom:5px;
 }
 .ba-reports-workspace .ba-report-subtab-list {
   display:flex; width:100%; min-width:0; flex:0 0 auto;
   overflow-x:auto; padding-bottom:1px;
 }
 .ba-reports-workspace .ba-report-subtab-list button {
   font-size:11px; padding:4px 9px;
 }
 .ba-reports-workspace .ba-global-report-zoom {
   display:flex; width:100%; flex:0 0 auto; justify-content:flex-end;
   margin:0; padding:0;
 }
 .ba-reports-workspace .ba-global-report-zoom button {
   height:32px; width:34px; min-width:34px;
 }
 .ba-reports-workspace .ba-global-report-zoom select {
   height:32px; width:100px; max-width:100px; font-size:12px;
 }
}

/* Match Branch Admin's final contextual-button cascade, including zoom buttons. */
.ba-contextual-actions button, .ba-setup-empty-section button { min-height:34px; padding:7px 11px; border-radius:9px; border:1px solid var(--border,rgba(0,0,0,.14)); background:var(--surface,#fff); color:var(--text,#111827); cursor:pointer; font:inherit; font-size:12px; font-weight:700; }
.ba-contextual-actions button.is-active { border-color:var(--primary-color,#2563eb); background:color-mix(in srgb,var(--primary-color,#2563eb) 10%,var(--surface,#fff)); }
.teacher-portal-report-loading {min-height:190px;display:grid;place-items:center;padding:22px;
  color:var(--muted,#64748b);font-size:13px;text-align:center;}
/* Keep Report Cards and Broadsheets on the same full-width preview canvas. */
@media print {.ba-reports-workspace .ba-report-subtabs{display:none!important}}
`,cj=[{title:"Teaching",defaultOpen:!0,items:[{key:"assessmentEntry",label:"Enter Scores",icon:"\uD83D\uDCDD"},{key:"reportsWorkspace",label:"Reports",icon:"\uD83D\uDCC4"},{key:"teacherStudents",label:"Students",icon:"\uD83D\uDC65"}]}],ck={assessmentEntry:function(){let a=(0,j.f)(["students","classes","subjects","teachers","academicStructures","academicPeriods","organizations","curriculums","curriculumPathways","curriculumSubjects","classSubjects","assessmentApplicabilities","assessmentStructures","assessmentStructureItems","assessmentEntries","gradingStructures","gradeRules","studentEnrollments"]),b=(0,u.useRouter)(),c=p(),{user:g}=(0,v.F)(),{settings:h,loading:k}=(0,w.t)(),{activeBranch:l}=(0,x.c)(),n=(0,i.P)(),{accountId:o,schoolId:r,branchId:s,authenticated:t,restoring:A,branchLoading:B}=n,C=h?.primaryColor||"var(--primary-color, #2563eb)",{loading:D,setLoading:E}=(0,z.J)(),ad=[o||"",r||"",s||""].join("|"),[ae,ag]=(0,e.useState)(null),[ah,ao]=(0,e.useState)(null),ap=f().useRef(0),[aq,ar]=(0,e.useState)(null),[as,at]=(0,e.useState)(!1),[au,av]=(0,e.useState)(!1),[aw,ax]=(0,e.useState)(null),[ay,az]=(0,e.useState)([]),[aA,aB]=(0,e.useState)([]),[aC,aD]=(0,e.useState)([]),[aE,aF]=(0,e.useState)([]),[aG,aH]=(0,e.useState)([]),[aI,aJ]=(0,e.useState)([]),[aK,aL]=(0,e.useState)([]),[aM,aN]=(0,e.useState)([]),[aO,aP]=(0,e.useState)([]),[aQ,aR]=(0,e.useState)([]),[aS,aT]=(0,e.useState)([]),[aU,aV]=(0,e.useState)([]),[aW,aX]=(0,e.useState)([]),[aY,aZ]=(0,e.useState)([]),[a$,a_]=(0,e.useState)([]),[a0,a1]=(0,e.useState)([]),[a2,a3]=(0,e.useState)([]),[a4,a5]=(0,e.useState)([]),a6=(0,G.D)({accountId:o,ownerTable:"students",rows:ay,fields:[{fieldKey:"photo",mediaIdKey:"photoMediaId"}]}),a7=a=>{let b=a6[V(a.id)]?.photo||a.photo;if(!("string"!=typeof b||!b.trim()||b.startsWith("blob:")))return b},[a8,a9]=(0,e.useState)("cards"),[ba,bb]=(0,e.useState)(""),[bc,bd]=(0,e.useState)("all"),[be,bf]=(0,e.useState)("");f().useRef({selectedClassId:be,classSubjectId:bc});let[bg,bh]=(0,e.useState)("all"),[bi,bj]=(0,e.useState)("all"),[bk,bl]=(0,e.useState)("all"),[bm,bn]=(0,e.useState)("all"),[bo,bp]=(0,e.useState)("all"),[bq,br]=(0,e.useState)("all"),[bs,bt]=(0,e.useState)(!1),[bu,bv]=(0,e.useState)(!1),[bw,bx]=(0,e.useState)({}),[by,bz]=(0,e.useState)(!1),[bA,bB]=(0,e.useState)(null),[bC,bD]=(0,e.useState)(!1),[bE,bF]=(0,e.useState)("file"),[bG,bH]=(0,e.useState)(null),[bI,bJ]=(0,e.useState)(null),[bK,bL]=(0,e.useState)(""),[bM,bN]=(0,e.useState)(0),[bO,bP]=(0,e.useState)([]),[bQ,bR]=(0,e.useState)(null),[bS,bT]=(0,e.useState)(null),[bU,bV]=(0,e.useState)(null),[bW,bX]=(0,e.useState)(!1),[bY,bZ]=(0,e.useState)(!1),b$=a=>(!a.accountId||a.accountId===o)&&(!a.schoolId||W(a.schoolId,r))&&(!a.branchId||W(a.branchId,s))&&!a.isDeleted,b_=(a,b)=>{ax({tone:a,message:b}),window.setTimeout(()=>ax(a=>a?.message===b?null:a),4200)},b0=()=>{az([]),aB([]),aD([]),aF([]),aH([]),aJ([]),aL([]),aN([]),aP([]),aR([]),aT([]),aV([]),aX([]),aZ([]),a_([]),a1([]),a3([]),a5([]),bx({}),av(!1)},b1=async()=>{let a=++ap.current;if(!t||!o||!r||!s||!c.permitted||!c.ready){b0(),ag(null),ao(null),ar(null),E(!1);return}let b={accountId:o,schoolId:r,branchId:s},d=new Set(c.allowedClassIds),e=new Set(c.subjectIds);try{E(!0);let[c,f,g,h,i,j,k]=await Promise.all([(0,y.uJ)("classes",b),(0,y.uJ)("subjects",b),(0,y.uJ)("classSubjects",b),Y("studentEnrollments")?.toArray?.()||[],(0,y.uJ)("assessmentApplicabilities",b),(0,y.uJ)("academicPeriods",b),(0,y.uJ)("teachers",b)]);if(a!==ap.current)return;aB(c.filter(a=>d.has(V(a.id))).sort((a,b)=>String(a.name||"").localeCompare(String(b.name||"")))),aD(f.sort((a,b)=>String(a.name||"").localeCompare(String(b.name||"")))),aT(g.filter(a=>$(a)&&e.has(V(a.id)))),a5(h.filter(a=>b$(a)&&!a.isDeleted)),aV(i.filter($)),aJ(j),aF(k.sort((a,b)=>String(a.fullName||"").localeCompare(String(b.fullName||"")))),ag(ad),ar(null),E(!1);let[l,m,n,o,p,q,r,s,t,u,v]=await Promise.all([Y("students")?.toArray?.()||[],(0,y.uJ)("academicStructures",b),(0,y.uJ)("organizations",b),(0,y.uJ)("curriculums",b),(0,y.uJ)("curriculumPathways",b),(0,y.uJ)("curriculumSubjects",b),(0,y.uJ)("assessmentStructures",b),(0,y.uJ)("assessmentStructureItems",b),Y("assessmentEntries")?.toArray?.()||[],(0,y.uJ)("gradingStructures",b),(0,y.uJ)("gradeRules",b)]);if(a!==ap.current)return;az(l.filter(a=>b$(a)).filter(a=>!["withdrawn","deleted","archived"].includes(X(a.status))).sort((a,b)=>String(a.fullName||"").localeCompare(String(b.fullName||"")))),aH(m),aL(n),aN(o),aP(p),aR(q),aX(r.filter($)),aZ(s.filter($)),a_(t.filter(a=>b$(a)&&!a.isDeleted)),a1(u.filter($)),a3(v.filter($)),ao(ad)}catch(b){if(a!==ap.current)return;console.error("Assessment Entries local read failed:",b),ae!==ad&&ar(ad),b_("error","Could not refresh assessment records. Try again.")}finally{a===ap.current&&E(!1)}};(0,e.useEffect)(()=>{if(!A&&!k&&!B&&c.ready){if(!c.permitted)return void b0();b1()}},[t,o,r,s,A,k,B,a,c.ready,c.permitted,c.teacherId,[...c.subjectIds].sort().join(","),[...c.allowedClassIds].sort().join(",")]);let b2=(0,e.useMemo)(()=>new Map(aA.map(a=>[V(a.id),a])),[aA]),b3=(0,e.useMemo)(()=>new Map(aC.map(a=>[V(a.id),a])),[aC]),b4=(0,e.useMemo)(()=>new Map(aE.map(a=>[V(a.id),a])),[aE]),b5=(0,e.useMemo)(()=>new Map(aG.map(a=>[V(a.id),a])),[aG]),b6=(0,e.useMemo)(()=>new Map(aI.map(a=>[V(a.id),a])),[aI]);(0,e.useMemo)(()=>new Map(aK.map(a=>[V(a.id),a])),[aK]);let b7=(0,e.useMemo)(()=>new Map(aQ.map(a=>[V(a.id),a])),[aQ]),b8=(0,e.useMemo)(()=>new Map(aM.map(a=>[V(a.id),a])),[aM]),b9=(0,e.useMemo)(()=>new Map(aO.map(a=>[V(a.id),a])),[aO]),ca=(0,e.useMemo)(()=>{let a=new Map;return aU.forEach(b=>{V(b.classSubjectId)&&!1!==b.active&&!b.isDeleted&&a.set(V(b.classSubjectId),b)}),a},[aU]),cb=(0,e.useMemo)(()=>aS.map(a=>{let b=V(a.id),d=b2.get(V(a.classId)),e=b3.get(V(a.subjectId)),f=a.teacherId?b4.get(V(a.teacherId)):void 0,h=m(a.teacherId,c.teacherId),i=h?String(n.membership?.teacher?.fullName||n.membership?.teacher?.name||g?.fullName||g?.name||"").trim():"",j=String(f?.fullName||f?.name||"").trim()||i||(h?"You":"No teacher assigned"),k=b5.get(V(a.academicStructureId)),l=a.academicPeriodId?b6.get(V(a.academicPeriodId)):void 0,o=b7.get(V(a.curriculumSubjectId)),p=o?b8.get(V(o.curriculumId)):void 0,q=o?.pathwayId?b9.get(V(o.pathwayId)):void 0,r=a.name||e?.name||"Unknown Subject",s=a.code||e?.code||"",t=d?.name||"Unknown Class",u=l?.name||"All Periods",v=!!ca.get(b);return{id:b,row:a,className:t,subjectName:r,subjectCode:s,teacherName:j,academicStructureName:k?.name||"Unknown structure",academicPeriodName:u,curriculumName:p?.name||"No curriculum",pathwayName:q?.name||"No pathway",organizationId:o?.organizationId,ready:v,display:`${t} • ${r}${s?` (${s})`:""} • ${u}`}}).filter(a=>!!a.id).sort((a,b)=>a.display.localeCompare(b.display)),[aS,b2,b3,b4,c.teacherId,n.membership,g?.fullName,b5,b6,b7,b8,b9,ca]),cc=(0,e.useMemo)(()=>cb.filter(a=>U(a,{classId:bg,subjectId:bi,periodId:bk,readiness:bm})),[cb,bg,bi,bk,bm]),cd=(0,e.useMemo)(()=>be?b2.get(V(be)):null,[b2,be]),ce=(0,e.useMemo)(()=>be?cc.filter(a=>W(a.row.classId,be)):[],[cc,be]),cf="all"!==bk?V(bk):V(h?.currentAcademicPeriodId),cg=aI.find(a=>W(a.id,cf)),ch=V(cg?.academicStructureId),ci=(0,e.useMemo)(()=>new Set(ay.filter(a=>$(a)&&!["graduated","transferred","inactive"].includes(X(a.status))).map(a=>V(a.id)).filter(Boolean)),[ay]),cj=(0,e.useMemo)(()=>(a,b,c)=>new Set(a4.filter(d=>W(d.classId,a)&&"active"===d.status&&!1!==d.active&&!d.isDeleted&&(!b||W(d.academicStructureId,b))&&(!c||W(d.academicPeriodId,c))&&ci.has(V(d.studentId))).map(a=>V(a.studentId)).filter(Boolean)),[a4,ci]),ck=(0,e.useMemo)(()=>ce.map(a=>{let b=ca.get(a.id),c=b?.assessmentStructureId?aY.filter(a=>W(a.assessmentStructureId,b.assessmentStructureId)&&$(a)):[],d=V(a.row.academicPeriodId)||cf,e=V(a.row.classId),f=d?cj(e,V(a.row.academicStructureId),d):new Set(ay.filter(a=>ci.has(V(a.id))&&W(a.currentClassId,e)).map(a=>V(a.id)).filter(Boolean)),g=f.size,h=new Set(c.map(a=>V(a.id)).filter(Boolean)),i=g*h.size,j=new Set(a$.filter(c=>W(c.classSubjectId,a.id)&&!!b&&W(c.assessmentStructureId,b.assessmentStructureId)&&f.has(V(c.studentId))&&h.has(V(c.assessmentStructureItemId))&&!c.isDeleted&&!1!==c.active&&void 0!==c.score&&null!==c.score&&""!==c.score).map(a=>Z(V(a.studentId),V(a.assessmentStructureItemId)))).size,k=i?Math.round(Math.min(j,i)/i*100):0;return{id:a.id,option:a,studentCount:g,itemCount:c.length,entered:j,expected:i,completion:k}}),[ce,ca,aY,a4,a$,ay,ci,cf,cj]),cl=(0,e.useMemo)(()=>{let a=ba.trim().toLowerCase();return aA.filter($).map(a=>{let b=V(a.id),c=cc.filter(a=>W(a.row.classId,b)),d=c.filter(a=>a.ready).length,e=cf?cj(b,ch,cf):new Set(ay.filter(a=>ci.has(V(a.id))&&W(a.currentClassId,b)).map(a=>V(a.id)).filter(Boolean));return{id:b,row:a,name:a.name||`Class ${b}`,code:a.code||"",subjectCount:c.length,readyCount:d,missingCount:Math.max(0,c.length-d),studentCount:e.size}}).filter(b=>!a||`${b.name} ${b.code} ${b.subjectCount} subjects`.toLowerCase().includes(a)).sort((a,b)=>a.name.localeCompare(b.name))},[aA,cc,a4,ay,ba,ci,cf,ch,cj]),cm=(0,e.useMemo)(()=>{let a=V(bc);return cb.find(b=>W(b.id,a))},[cb,bc]),cn=cm?.row,co=(0,e.useMemo)(()=>cm?ca.get(cm.id):void 0,[ca,cm]),cp=(0,e.useMemo)(()=>aW.find(a=>W(a.id,co?.assessmentStructureId)),[aW,co]),cq=(0,e.useMemo)(()=>a0.find(a=>W(a.id,co?.gradingStructureId)),[a0,co]),cr=(0,e.useMemo)(()=>co?.assessmentStructureId?aY.filter(a=>W(a.assessmentStructureId,co.assessmentStructureId)&&$(a)):[],[aY,co]),cs=(0,e.useMemo)(()=>co?.assessmentStructureId?(0,J.lj)({items:cr,structureId:V(co.assessmentStructureId),existingEntries:a$}):{structureId:"",columns:[],groups:[],hiddenCalculatedNodes:[],warnings:[]},[cr,co,a$]),ct=(0,e.useMemo)(()=>{let a=new Map(cr.map(a=>[V(a.id),a]));return cs.columns.map(b=>{let c=a.get(b.itemId);return c?{...c,__entryPathLabels:b.pathLabels,__entryDepth:b.depth,__entryGroupLabel:b.pathLabels.length>1?b.pathLabels.slice(0,-1).join(" \xb7 "):"",__entryCompactLabel:b.pathLabels.join(" \xb7 ")}:null}).filter(a=>!!a)},[cr,cs]),cu=(0,e.useMemo)(()=>cq?.id?a2.filter(a=>W(a.gradingStructureId,cq.id)&&$(a)).sort((a,b)=>Number(b.minScore||0)-Number(a.minScore||0)):[],[a2,cq]),cv=(0,e.useMemo)(()=>ct.map((a,b)=>({itemId:V(a.id),label:af(a)||a.name||`Assessment ${b+1}`,compactLabel:a.__entryCompactLabel||a.name||void 0,groupLabel:a.__entryGroupLabel||void 0,pathLabels:Array.isArray(a.__entryPathLabels)?a.__entryPathLabels:[a.name||`Assessment ${b+1}`],maxScore:Math.max(1,Number(a.maxScore||100)),weight:Number(a.weight||0),order:Number(a.order??b)})),[ct]),cw=(0,e.useMemo)(()=>cn&&cm&&co?{accountId:V(o),schoolId:V(r),branchId:V(s),classSubjectId:V(cn.id),classId:V(cn.classId),subjectId:V(cn.subjectId),academicStructureId:V(cn.academicStructureId),academicPeriodId:V(cn.academicPeriodId),assessmentStructureId:V(co.assessmentStructureId),gradingStructureId:V(co.gradingStructureId)||void 0,organizationId:V(co.organizationId||cm.organizationId)||void 0,branchName:l?.name||void 0,className:cm.className,subjectName:cm.subjectName,subjectCode:cm.subjectCode,academicStructureName:cm.academicStructureName,academicPeriodName:cm.academicPeriodName,assessmentStructureName:cp?.name||void 0}:null,[cn,cm,co,o,r,s,l,cp]),cx=(0,e.useMemo)(()=>{if(!cn||!co)return[];let a=V(cn.academicPeriodId);return a$.filter(b=>!!W(b.classSubjectId,cn.id)&&!!W(b.classId,cn.classId)&&!!W(b.subjectId,cn.subjectId)&&!!W(b.academicStructureId||"",cn.academicStructureId)&&!!W(b.academicPeriodId||"",a)&&!!W(b.assessmentStructureId||"",co.assessmentStructureId)&&(!co.gradingStructureId||!!W(b.gradingStructureId||"",co.gradingStructureId))&&!b.isDeleted)},[a$,cn,co]),cy=(0,e.useMemo)(()=>{if(!cn)return[];let a=V(cn.classId),b=V(cn.academicPeriodId)||cf,c=V(cn.academicStructureId);return ay.filter(a=>ci.has(V(a.id))).map(d=>{if(!b&&!W(d.currentClassId,a))return;let e=a4.find(e=>!!W(e.studentId,d.id)&&!!W(e.classId,a)&&(!c||!!W(e.academicStructureId,c))&&(!b||!!W(e.academicPeriodId,b))&&"active"===e.status&&!1!==e.active&&!e.isDeleted);return e?{student:d,enrollment:e}:void 0}).filter(Boolean)},[ay,a4,cn,cf,ci]),cz=(0,e.useMemo)(()=>{let a=new Map;return cx.forEach(b=>a.set(Z(V(b.studentId),V(b.assessmentStructureItemId)),b)),a},[cx]),cA=(0,e.useMemo)(()=>cy.map(({student:a,enrollment:b})=>{let c=0,d=0,e=0,f=0;for(let b of ct){let g=bw[Z(V(a.id),V(b.id))],h=""!==g&&null!=g,i=h?Number(g):0,j=Math.max(1,Number(b.maxScore||100)),k=Number(b.weight||0);h&&(f+=1),c+=i,e+=j,d+=i/j*k}let g=ct.length?Number(d.toFixed(2)):e?Number((c/e*100).toFixed(2)):0,h=cu.find(a=>g>=Number(a.minScore||0)&&g<=Number(a.maxScore||100));return{student:a,enrollment:b,rowEntered:f,rowExpected:ct.length,rawTotal:Number(c.toFixed(2)),weightedTotal:Number(d.toFixed(2)),percentage:g,grade:h?.grade,remark:h?.remark,gpa:h?.gpa}}),[cy,ct,bw,cu]),cB=(0,e.useMemo)(()=>{let a=ba.trim().toLowerCase();return cA.filter(b=>{var c;let d;if("all"!==bq&&(["male","m","boy","boys"].includes(d=String((c=b.student).sex??c.gender??"").trim().toLowerCase())?"male":["female","f","girl","girls"].includes(d)?"female":"unknown")!==bq)return!1;if("all"!==bo){let a=b.rowEntered,c=b.rowExpected;if("empty"===bo&&0!==a||"partial"===bo&&!(a>0&&a<c)||"complete"===bo&&!(c>0&&a>=c))return!1}if(!a)return!0;let e=b.student;return`${e.fullName||""} ${e.admissionNumber||""} ${b.grade||""} ${b.remark||""}`.toLowerCase().includes(a)})},[cA,ba,bo,bq]),cC=(0,e.useMemo)(()=>{let a=cA.length*ct.length,b=0;cA.forEach(a=>b+=a.rowEntered);let c=a?Math.round(b/a*100):0,d=cA.filter(a=>a.rowExpected>0&&a.rowEntered>=a.rowExpected).length;return{expected:a,entered:b,completion:c,completeStudents:d}},[cA,ct]);(0,e.useMemo)(()=>[bg,bi,bk,bm,bo,bq].filter(a=>"all"!==a).length,[bg,bi,bk,bm,bo,bq]),cm?(cm.className,cm.academicStructureName,cm.academicPeriodName):l?.name;let cD=(a,b,c)=>{let d=Z(a,V(b.id));if(""===c)return void bx(a=>({...a,[d]:""}));let e=Number(c);if(Number.isNaN(e))return;let f=Math.max(0,Math.min(e,Number(b.maxScore||100)));bx(a=>({...a,[d]:f}))},cE=()=>t&&o&&r&&s?cn&&c.subjectIds.has(V(cn.id))?co?ct.length?cA.length?void(av(!0),b_("success","Score entry session started.")):b_("error","No active student enrollment was found for this class subject."):b_("error","The selected assessment structure has no active items."):b_("error","No assessment applicability is configured for this class subject."):b_("error","Select a subject assigned to your teacher profile."):b_("error","Sign in and select a school branch first."),cF=async()=>{if(!au)return b_("error","Start the score entry session first.");if(!t||!o||!r||!s)return b_("error","Sign in and select a school branch first.");if(!cn||!co)return b_("error","Select a valid class subject with assessment applicability.");try{if(!c.permitted||!c.subjectIds.has(V(cn.id))||!await q(c,V(cn.id)))return void b_("error","This class subject is not currently assigned to you.");at(!0);let a=V(cn.academicPeriodId),b=0,d=0,e=0;for(let c of cA){let f=V(c.student.id);if(f)for(let g of ct){let h=V(g.id),i=Z(f,h),j=bw[i],k=cz.get(i);if(k?.locked){e+=1;continue}if(""===j||null==j){k?.id&&(await (0,y.R8)("assessmentEntries",V(k.id)),d+=1);continue}let l={accountId:o,schoolId:r,branchId:s,classSubjectId:V(cn.id),organizationId:co.organizationId||cm?.organizationId,academicStructureId:V(cn.academicStructureId),academicPeriodId:a,gradingStructureId:co.gradingStructureId,assessmentStructureId:co.assessmentStructureId,assessmentStructureItemId:h,studentId:f,classId:V(cn.classId),subjectId:V(cn.subjectId),score:Number(j),grade:c.grade,remark:c.remark,published:!1,locked:!1,active:!0,isDeleted:!1};k?.id?await (0,y.Po)("assessmentEntries",V(k.id),l):await (0,y.oJ)("assessmentEntries",l),b+=1}}await b1(),av(!1),b_("success",`Saved ${b} score${1===b?"":"s"}${d?` \xb7 cleared ${d}`:""}${e?` \xb7 skipped ${e} locked`:""}.`)}catch(a){console.error(a),b_("error","Failed to save assessment scores.")}finally{at(!1)}},cG=()=>cy.map(({student:a})=>({id:V(a.id),fullName:a.fullName||"Unnamed student",admissionNumber:a.admissionNumber||void 0,active:a.active,isDeleted:a.isDeleted})),cH=()=>cx.map(a=>({id:V(a.id),accountId:V(a.accountId)||void 0,schoolId:V(a.schoolId)||void 0,branchId:V(a.branchId)||void 0,classSubjectId:V(a.classSubjectId)||void 0,organizationId:V(a.organizationId)||void 0,academicStructureId:V(a.academicStructureId)||void 0,academicPeriodId:V(a.academicPeriodId)||void 0,gradingStructureId:V(a.gradingStructureId)||void 0,assessmentStructureId:V(a.assessmentStructureId)||void 0,assessmentStructureItemId:V(a.assessmentStructureItemId)||void 0,studentId:V(a.studentId)||void 0,classId:V(a.classId)||void 0,subjectId:V(a.subjectId)||void 0,score:void 0===a.score||null===a.score?void 0:Number(a.score),grade:a.grade,remark:a.remark,published:a.published,locked:a.locked,active:a.active,isDeleted:a.isDeleted})),cI=()=>cw&&cm&&co?cv.length?cy.length?cw:(b_("error","No active students are enrolled in this assessment context."),null):(b_("error","This assessment structure has no directly enterable score columns."),null):(b_("error","Select a ready class subject before using Excel."),null),cJ=async()=>{let a=cI();if(a)try{bB("template"),await Promise.resolve((0,T.s)({context:a,students:cG(),projectedColumns:cv})),b_("success","Assessment template downloaded.")}catch(a){console.error("Failed to download assessment template:",a),b_("error",a?.message||"Failed to download assessment template.")}finally{bB(null)}},cK=async()=>{let a=cI();if(a)try{let b;bB("export"),await Promise.resolve((0,T.s)({context:a,students:cG(),projectedColumns:cv,scores:(b={},cy.forEach(({student:a})=>{let c=V(a.id);c&&(b[c]={},cv.forEach(a=>{let d=bw[Z(c,a.itemId)];b[c][a.itemId]=""===d||null==d?void 0:Number(d)}))}),b),fileName:`Eleeveon Assessment - ${cm?.className||"Class"} - ${cm?.subjectName||"Subject"}.xlsx`})),b_("success","Current assessment sheet exported.")}catch(a){console.error("Failed to export assessment sheet:",a),b_("error",a?.message||"Failed to export assessment sheet.")}finally{bB(null)}},cL=()=>{bH(null),bJ(null),bL(""),bN(0),bP([]),bR(null),bT(null),bV(null),bZ(!1),bF("file")},cM=()=>{bW||(bD(!1),cL())},cN=(a,b)=>{bL(b);let c=(0,P.TJ)(a,b);bN(c?(0,P.J)(c):0),bP([]),bR(null),bT(null)},cO=async a=>{if(bH(a),bJ(null),bL(""),bP([]),bR(null),bT(null),bV(null),!a)return void bF("file");try{bX(!0);let b=await (0,P.zJ)(a),c=(0,Q.TI)(b).metadata,d=c?.sheetName,e=(d?(0,P.TJ)(b,d):void 0)||b.sheets.find(a=>"_Eleeveon_Metadata"!==a.name);if(!e)throw Error("The workbook does not contain a usable assessment worksheet.");bJ(b),cN(b,e.name),bF("sheet")}catch(a){console.error("Failed to open assessment workbook:",a),b_("error",a?.message||"Failed to open Excel workbook."),bH(null)}finally{bX(!1)}},cP=a=>{if(!cw)throw Error("The assessment context is no longer available.");let b=(0,R.r3)({parsed:a,context:cw,projectedColumns:cv,students:cG(),enrollments:a4.map(a=>({id:V(a.id),studentId:V(a.studentId),classId:V(a.classId),academicStructureId:V(a.academicStructureId),academicPeriodId:V(a.academicPeriodId)||void 0,status:a.status,isDeleted:a.isDeleted})),existingEntries:cH(),options:{lockedEntrySeverity:"error",allowNameMatch:!0}});bZ(!1),bR(a),bT(b),bF("preview")},cQ=async()=>{let a=cI();if(!a||!bS||!bQ)return;if(!c.permitted||!cn||!c.subjectIds.has(V(cn.id))||!await q(c,V(cn.id)))return void b_("error","This subject is no longer assigned to you.");let b=(0,M.gG)(bS,"eleeveon-assessment"===bQ.kind);if(b.fatal.length)return void b_("error","This workbook has a blocking context or structure error.");if(b.clear>0&&!bY)return void b_("error","Review and approve clearing existing scores first.");if(!b.totalChanges)return void b_("info","No score changes are required.");try{bX(!0);let b=await (0,S.PF)(bS,a,{updateExisting:!0,clearExistingWhenBlank:"eleeveon-assessment"===bQ.kind&&bY,lockedEntrySeverity:"error",allowNameMatch:!0},{projectedColumns:cv,gradeRules:cu.map((a,b)=>({id:V(a.id)||void 0,minScore:Number(a.minScore||0),maxScore:Number(a.maxScore||100),grade:a.grade||"",remark:a.remark||void 0,gpa:void 0===a.gpa||null===a.gpa?void 0:Number(a.gpa),order:Number(a.order??b)})),existingEntries:cH()});bV(b),bF("result"),av(!1),await b1(),b_(b.failed?"info":"success",`Assessment import finished: ${b.created} created, ${b.updated} updated${b.deleted?`, ${b.deleted} cleared`:""}.`)}catch(a){console.error("Failed to import assessment workbook:",a),b_("error",a?.message||"Failed to import assessment workbook.")}finally{bX(!1)}};(0,H.TV)("assessmentEntry",{add:()=>{"all"===bc?bt(!0):au?bz(!0):cE()},filter:()=>bt(!0),more:()=>bv(!0),search:bb,print:()=>{"all"!==bc&&cm&&co&&ct.length?(0,I.Ej)({title:"Assessment Scores",subtitle:`${cm.className} \xb7 ${cm.subjectName} \xb7 ${cm.academicStructureName} \xb7 ${cm.academicPeriodName}`,columns:[{key:"student",label:"Students"},...ct.map(a=>({key:`item_${V(a.id)}`,label:`${af(a)||a.name} /${Number(a.maxScore||100)}`})),{key:"total",label:"Total"},{key:"grade",label:"Grade"},{key:"remark",label:"Remark"}],rows:cB.map(a=>{let b=a.student,c=V(b.id),d={student:{text:b.fullName||"Unnamed student",detail:b.admissionNumber||void 0,image:a7(a.student)},total:a.weightedTotal,grade:a.grade||"—",remark:a.remark||"—"};return ct.forEach(a=>{let b=bw[Z(c,V(a.id))];d[`item_${V(a.id)}`]=""===b||null==b?"—":b}),d})}):b_("info","Select a class subject with a scoring structure before printing.")}});let cR=ae===ad,cS=aq===ad&&!cR;if(A||B||k||!c.ready||!cR&&!cS&&t&&c.permitted&&o&&r&&s){let a="all"!==bc;return(0,d.jsxs)("main",{className:"ae-page",style:{"--ae-primary":C},children:[(0,d.jsx)("style",{children:an}),(0,d.jsx)(F,{kind:a?"assessment":"class",view:a&&"table"===a8?"table":"cards",count:a?5:6,title:"Getting assessment records ready…",message:"Checking your saved classes, subjects and scores."})]})}return cS&&t&&c.permitted&&o&&r&&s?(0,d.jsxs)("main",{className:"ae-page",style:{"--ae-primary":C},children:[(0,d.jsx)("style",{children:an}),(0,d.jsxs)("section",{className:"ae-state",role:"alert",children:[(0,d.jsx)("h2",{children:"Assessment records couldn't be opened"}),(0,d.jsx)("p",{children:"Your saved scores were not changed. Try loading this workspace again."}),(0,d.jsx)("button",{type:"button",className:"ae-state-button",onClick:()=>void b1(),children:"Try again"})]})]}):t&&o?c.permitted?r&&s?(0,d.jsxs)("main",{className:"ae-page",style:{"--ae-primary":C},children:[(0,d.jsx)("style",{children:an}),aw&&(0,d.jsxs)("section",{className:`ae-toast ${aw.tone}`,children:[aw.message,(0,d.jsx)("button",{type:"button",onClick:()=>ax(null),"aria-label":"Close notification",children:"✕"})]}),0===cc.length&&("all"!==bg||"all"!==bi||"all"!==bk||"all"!==bm)?(0,d.jsxs)("section",{children:[(0,d.jsx)(ac,{icon:"\uD83D\uDD0E",title:"No matching class subjects",text:"No class subject matches these filters. Choose a different class, subject or term; existing assessment setup has not been removed."}),(0,d.jsx)("div",{className:"ae-filter-empty-action",children:(0,d.jsx)("button",{type:"button",onClick:()=>bt(!0),children:"Change filters"})})]}):be?"all"===bc?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("section",{className:"ae-filter-chips class-breadcrumb","aria-label":"Selected class",children:[(0,d.jsx)("button",{type:"button",onClick:()=>{bf(""),bh("all"),bd("all"),bb("")},children:"← Classes"}),(0,d.jsxs)("button",{type:"button",onClick:()=>bt(!0),children:[cd?.name||"Selected class"," \xb7"," ",ce.length," class subject(s)"]})]}),(0,d.jsxs)("section",{className:"ae-list ae-picker-list",children:[ck.map(a=>(0,d.jsx)(aa,{item:a,onOpen:()=>{bd(String(a.id)),av(!1),bb("")}},String(a.id))),!ck.length&&(0,d.jsx)(ac,{icon:"\uD83D\uDCDD",title:"No subjects available",text:"No class subjects in this class match the current filters."})]})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("section",{className:"ae-entry-topbar","aria-label":"Selected class and scoring actions",children:[(0,d.jsxs)("button",{type:"button",className:"ae-entry-back",onClick:()=>{bd("all"),av(!1),bb("")},"aria-label":"Back to class subjects",title:"Class subjects",children:["← ",(0,d.jsx)("span",{children:"Class subjects"})]}),(0,d.jsxs)("span",{className:"ae-entry-location",title:`${cm?.className||"Class"} \xb7 ${cm?.subjectName||"Subject"}`,children:[cm?.className||"Class"," \xb7 ",cm?.subjectName||"Subject"]}),(0,d.jsxs)("span",{className:"ae-entry-count",title:"Entered score cells","aria-live":"polite",children:[cC.entered,"/",cC.expected]}),(0,d.jsx)("button",{type:"button",className:"ae-entry-start",onClick:cE,disabled:au,children:au?"Active":"Start"}),(0,d.jsx)("button",{type:"button",className:"ae-entry-save",onClick:cF,disabled:!au||as,children:as?"Saving":"Save"})]}),ah!==ad&&(0,d.jsx)(F,{kind:"assessment",view:"table"===a8?"table":"cards",count:4,title:"Preparing score entry…",message:"Loading students and assessment items saved on this device."}),ah===ad&&(0,d.jsxs)(d.Fragment,{children:["all"!==bc&&!cm&&(0,d.jsx)(ac,{icon:"\uD83D\uDD0E",title:"Class subject unavailable",text:"The selected class subject could not be found in this branch. Choose another one through Filters."}),cm&&!co&&(0,d.jsx)(ac,{icon:"⚠️",title:"No assessment applicability",text:"This specific class subject does not yet have an active applicability. Choose a ready class subject in Filters or configure its assessment structure."}),co&&!ct.length&&(0,d.jsx)(ac,{icon:"\uD83E\uDDE9",title:"No directly enterable assessment items",text:"This structure contains no active leaf or explicitly direct-entry item. Calculated parents are intentionally hidden from score entry."}),co&&cs.warnings.length>0&&(0,d.jsxs)("section",{className:"ae-entry-projection-warning",children:[(0,d.jsx)("strong",{children:"Assessment hierarchy needs review"}),(0,d.jsxs)("span",{children:[cs.warnings.length," hierarchy warning",1===cs.warnings.length?"":"s",". Score entry is showing only safe, directly enterable items."]})]}),cm&&co&&!!ct.length&&!cA.length&&(0,d.jsx)(ac,{icon:"\uD83C\uDF93",title:"No enrolled students",text:"No active student enrollment was found for this class subject, class, academic structure, and period."}),cm&&co&&!!ct.length&&!!cA.length&&"summary"===a8&&(0,d.jsx)(ak,{rows:cA,completion:cC,structureItems:ct,classSubjectOptions:cc}),cm&&co&&!!ct.length&&!!cA.length&&"table"===a8&&(0,d.jsx)(aj,{rows:cB,photoFor:a7,items:ct,scores:bw,updateScore:cD}),cm&&co&&!!ct.length&&!!cA.length&&"cards"===a8&&(0,d.jsxs)("section",{className:"ae-list ae-entry-list",children:[cB.map(a=>(0,d.jsx)(ai,{row:a,photo:a7(a.student),items:ct,scores:bw,updateScore:cD},String(a.student.id))),!cB.length&&(0,d.jsx)(ac,{icon:"\uD83D\uDD0E",title:"No student matches",text:"Change your search or completion filter to see students."})]})]})]}):(0,d.jsxs)("section",{className:"ae-list ae-picker-list",children:[cl.map(a=>(0,d.jsx)(_,{item:a,onOpen:()=>{bf(String(a.id)),bh(String(a.id)),bd("all"),bb("")}},String(a.id))),!cl.length&&(0,d.jsx)(ac,{icon:"\uD83C\uDFEB",title:"No classes available",text:"No active class subjects are available in the selected branch."})]}),bs&&(0,d.jsx)(al,{classes:aA,subjects:aC,periods:aI,search:ba,setSearch:bb,filterClassId:bg,filterSubjectId:bi,filterPeriodId:bk,filterReadiness:bm,filterCompletion:bo,filterGender:bq,allOptions:cb,activeClassSubjectId:bc,onApply:a=>{let b=cb.filter(b=>U(b,a)),c="auto"!==a.classSubjectId?b.find(b=>W(b.id,a.classSubjectId)):void 0,d=b.find(a=>W(a.id,bc)),e=V(h?.currentAcademicPeriodId),f=V(h?.currentAcademicStructureId),g=[...b].sort((b,c)=>{let d=b=>{let c=b.row,d=ca.get(b.id),g=V(d?.assessmentStructureId),h=!!g&&aY.some(a=>$(a)&&W(a.assessmentStructureId,g)),i=V(c.academicPeriodId)||("all"!==a.periodId?V(a.periodId):e),j=i?cj(V(c.classId),V(c.academicStructureId),i).size>0:ay.some(a=>ci.has(V(a.id))&&W(a.currentClassId,c.classId)),k=a$.some(a=>!a.isDeleted&&W(a.classSubjectId,b.id)&&null!==a.score&&void 0!==a.score&&""!==a.score);return 1e5*!!b.ready+5e4*!!h+2e4*!!j+(e&&W(c.academicPeriodId,e)?2e3:0)+(f&&W(c.academicStructureId,f)?1e3:0)+100*!!k};return d(c)-d(b)||b.display.localeCompare(c.display)}),i=a.classId===bg&&a.subjectId===bi&&a.periodId===bk&&a.readiness===bm,j=c||(i?d:void 0)||g[0],k=j?.id||"all";k!==bc&&au&&cA.some(a=>ct.some(b=>{let c=Z(V(a.student.id),V(b.id)),d=cz.get(c),e=bw[c],f=d?.score;return""===e||void 0===e?null!=f&&""!==f:Number(e)!==Number(f)}))&&!window.confirm("You have unsaved assessment scores. Change class subject and discard those edits?")||(bh(a.classId),bj(a.subjectId),bl(a.periodId),bn(a.readiness),bp(a.completion),br(a.gender),bf(j?V(j.row.classId):""),bd(k),k!==bc&&(av(!1),bb("")),bt(!1))},onClose:()=>bt(!1)}),bu&&(0,d.jsx)(am,{viewMode:a8,setViewMode:a=>{a9(a),bv(!1)},onExcel:()=>{bv(!1),bz(!0)},onRefresh:async()=>{bv(!1),await b1()},onClose:()=>bv(!1)}),by&&(0,d.jsx)(O.A,{open:by,onClose:()=>{bA||bz(!1)},title:"Assessment Excel",subtitle:cm?`${cm.className} \xb7 ${cm.subjectName}`:"Choose a ready class subject first.",busyKey:bA,actions:[{key:"import",title:"Import assessment scores",description:"Bring back an Eleeveon score sheet or import a compatible school workbook.",badge:"Import",disabled:!cw,onClick:async()=>void(cI()&&(bv(!1),bz(!1),cL(),bD(!0)))},{key:"template",title:"Download blank score sheet",description:"Create the controlled workbook for this class, subject and assessment structure.",badge:`${cA.length} students`,disabled:!cw,onClick:cJ},{key:"export",title:"Export current scores",description:"Download the same controlled workbook prefilled with the scores currently in Eleeveon.",badge:`${cC.entered} scores`,disabled:!cw,onClick:cK}]}),(0,d.jsxs)(N.A,{open:bC,onClose:cM,title:"Import assessment scores",subtitle:"Validate the workbook against the active class, subject, period and assessment structure before any score is changed.",step:bE,busy:bW,width:980,footer:(0,d.jsxs)("div",{className:"assessment-excel-footer-actions",children:["file"===bE&&(0,d.jsx)("button",{type:"button",className:"secondary",onClick:cM,children:"Cancel"}),"sheet"===bE&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{type:"button",className:"secondary",onClick:()=>bF("file"),children:"Back"}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:()=>{if(!bI||!bK)return void b_("error","Choose an assessment worksheet first.");if(cI())try{if((0,Q.TI)(bI).metadata){let a=(0,Q.ac)({workbook:bI,sheetName:bK,headerRowIndex:bM});cP(a);return}let a=(0,P.TJ)(bI,bK);if(!a)throw Error("The selected worksheet could not be found.");let b=(0,Q.k3)({sheet:a,projectedColumns:cv,headerRowIndex:bM});if(!b.metadataColumns.length)throw Error("No assessment score columns could be matched. Use an Eleeveon assessment template or keep assessment headings aligned with the current assessment structure.");bR(b),bP(b.mappings),bT(null),bF("mapping")}catch(a){console.error("Failed to prepare assessment workbook:",a),b_("error",a?.message||"Failed to prepare assessment workbook.")}},children:"Continue"})]}),"mapping"===bE&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{type:"button",className:"secondary",onClick:()=>bF("sheet"),children:"Back"}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:()=>{if(!bI||!bK)return;let a=(0,P.TJ)(bI,bK);if(!a)return void b_("error","The selected worksheet could not be found.");try{let b=(0,Q.k3)({sheet:a,projectedColumns:cv,headerRowIndex:bM,identityMappings:bO});if(!b.metadataColumns.length)throw Error("No assessment score columns are mapped to the current structure.");cP(b)}catch(a){console.error("Failed to review external assessment workbook:",a),b_("error",a?.message||"Failed to review assessment workbook.")}},children:"Review scores"})]}),"preview"===bE&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{type:"button",className:"secondary",onClick:()=>bF(bQ?.kind==="external-assessment"?"mapping":"sheet"),children:"Back"}),(0,d.jsx)("button",{type:"button",className:"primary",disabled:!bS||!!(0,M.gG)(bS,bQ?.kind==="eleeveon-assessment").fatal.length||!(0,M.gG)(bS,bQ?.kind==="eleeveon-assessment").totalChanges||(0,M.gG)(bS,bQ?.kind==="eleeveon-assessment").clear>0&&!bY,onClick:cQ,children:"Apply reviewed changes"})]}),"result"===bE&&(0,d.jsx)("button",{type:"button",className:"primary",onClick:cM,children:"Done"})]}),children:["file"===bE&&(0,d.jsx)(K.A,{value:bG,onChange:cO,disabled:bW,label:"Choose assessment workbook",description:"Use an Eleeveon assessment sheet or a compatible school score workbook."}),"sheet"===bE&&bI&&(0,d.jsxs)("section",{className:"assessment-excel-stage",children:[(0,d.jsxs)("div",{className:"assessment-excel-stage-head",children:[(0,d.jsx)("h3",{children:"Choose score worksheet"}),(0,d.jsx)("p",{children:"Eleeveon-controlled workbooks carry hidden context metadata. External workbooks are matched to the assessment columns currently shown on this page."})]}),(0,d.jsxs)("div",{className:"assessment-excel-context-grid",children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Worksheet"}),(0,d.jsx)("select",{value:bK,onChange:a=>cN(bI,a.target.value),children:bI.sheets.filter(a=>"_Eleeveon_Metadata"!==a.name).map(a=>(0,d.jsx)("option",{value:a.name,children:a.name},a.name))})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Header row"}),(0,d.jsx)("input",{type:"number",min:1,value:bM+1,onChange:a=>bN(Math.max(0,Number(a.target.value||1)-1))})]})]}),(0,d.jsxs)("div",{className:"assessment-excel-context-card",children:[(0,d.jsx)("strong",{children:bG?.name}),(0,d.jsx)("span",{children:(0,Q.TI)(bI).metadata?"Controlled Eleeveon assessment workbook":"External assessment workbook"}),(0,d.jsxs)("small",{children:["Active context: ",cm?.className||"Class"," \xb7 ",cm?.subjectName||"Subject"," \xb7 ",cm?.academicPeriodName||"Period"]})]})]}),"mapping"===bE&&bI&&(0,d.jsxs)("section",{className:"assessment-excel-stage",children:[(0,d.jsxs)("div",{className:"assessment-excel-stage-head",children:[(0,d.jsx)("h3",{children:"Match student identity columns"}),(0,d.jsx)("p",{children:"Assessment score columns are matched against the current projected assessment structure. Confirm how this external sheet identifies each student."})]}),(()=>{let a=(0,P.TJ)(bI,bK);if(!a)return null;let b=(0,P.B)(a,{headerRowIndex:bM,skipEmptyRows:!0,trimStrings:!0});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(L.A,{columns:b.columns,fields:Q.tq,mappings:bO,onChange:a=>{bP(a),bT(null)},disabled:bW,title:"Match student columns",description:"Student ID is strongest, followed by Admission Number. Exact Student Name is used only when unambiguous."}),(0,d.jsxs)("div",{className:"assessment-excel-column-note",children:[(0,d.jsxs)("strong",{children:[bQ?.metadataColumns.length||0," score column",1===(bQ?.metadataColumns.length||0)?"":"s"," recognized"]}),(0,d.jsx)("span",{children:bQ?.metadataColumns.map(a=>a.label).filter(Boolean).join(" \xb7 ")||"No score columns recognized yet."})]})]})})()]}),"preview"===bE&&bS&&(0,d.jsxs)("section",{style:{display:"grid",gap:14},children:[(0,d.jsx)(M.Ay,{validation:bS,controlledWorkbook:bQ?.kind==="eleeveon-assessment"}),(0,M.gG)(bS,bQ?.kind==="eleeveon-assessment").clear>0&&(0,d.jsxs)("label",{style:{display:"flex",alignItems:"flex-start",gap:10,padding:12,border:"1px solid #d97706",borderRadius:9},children:[(0,d.jsx)("input",{type:"checkbox",checked:bY,onChange:a=>bZ(a.target.checked),disabled:bW}),(0,d.jsx)("span",{children:"I have reviewed the blank cells and explicitly approve clearing the indicated existing assessment scores."})]})]}),"result"===bE&&bU&&(0,d.jsxs)("section",{className:"assessment-excel-result",children:[(0,d.jsx)("div",{className:"assessment-excel-result-icon",children:"✓"}),(0,d.jsx)("h3",{children:"Assessment import completed"}),(0,d.jsx)("p",{children:"Scores were written through the same offline-first assessmentEntries flow used by manual score entry."}),(0,d.jsxs)("div",{className:"assessment-excel-result-grid",children:[(0,d.jsxs)("span",{children:[(0,d.jsx)("strong",{children:bU.created}),(0,d.jsx)("small",{children:"Created"})]}),(0,d.jsxs)("span",{children:[(0,d.jsx)("strong",{children:bU.updated}),(0,d.jsx)("small",{children:"Updated"})]}),(0,d.jsxs)("span",{children:[(0,d.jsx)("strong",{children:bU.deleted}),(0,d.jsx)("small",{children:"Cleared"})]}),(0,d.jsxs)("span",{children:[(0,d.jsx)("strong",{children:bU.skipped}),(0,d.jsx)("small",{children:"Skipped"})]}),(0,d.jsxs)("span",{className:bU.failed?"danger":"",children:[(0,d.jsx)("strong",{children:bU.failed}),(0,d.jsx)("small",{children:"Failed"})]}),(0,d.jsxs)("span",{children:[(0,d.jsx)("strong",{children:bU.studentsProcessed}),(0,d.jsx)("small",{children:"Students"})]})]}),bU.failed>0&&(0,d.jsx)("div",{className:"assessment-excel-result-errors",children:bU.rows.filter(a=>"failed"===a.action).slice(0,12).map((a,b)=>(0,d.jsxs)("div",{children:[(0,d.jsxs)("strong",{children:["Row ",a.rowNumber]}),(0,d.jsx)("span",{children:a.error||"Score import failed."})]},`${a.rowNumber}-${a.columnIndex||0}-${b}`))})]})]})]}):(0,d.jsxs)("main",{className:"ae-page",style:{"--ae-primary":C},children:[(0,d.jsx)("style",{children:an}),(0,d.jsxs)("section",{className:"ae-state",children:[(0,d.jsx)("h2",{children:"No branch workspace selected"}),(0,d.jsx)("p",{children:"Assessment entries belong to your selected teacher workspace. Use Select Role again if the wrong school or branch is active."}),(0,d.jsx)("button",{type:"button",className:"ae-state-button",onClick:()=>b.push("/account"),children:"Go to Account Setup"})]})]}):(0,d.jsx)(ab,{primary:C,title:"Teacher assignment required",text:"Select your teacher role with an assigned teacher profile to enter scores."}):(0,d.jsx)(ab,{primary:C,title:"Redirecting to login...",text:"You must sign in before entering assessment scores."})},reportsWorkspace:function(a){let[b,c]=(0,e.useState)("reports"),f=p(),g=[{key:"reports",label:"Report Cards",Component:aH},{key:"broadsheets",label:"Broadsheets",Component:a3},...f.classTeacherClassIds.size>0?[{key:"remarks",label:"Remarks",Component:bo},{key:"attendance",label:"Attendance",Component:bT}]:[]],h=g.find(a=>a.key===b)||g[0],i=h.Component;return(0,d.jsx)(ap.NA,{children:(0,d.jsxs)("div",{className:"ba-workspace-wrapper ba-reports-workspace teacher-reports-workspace",children:[(0,d.jsx)("style",{children:ci}),(0,d.jsxs)("div",{className:"ba-contextual-actions ba-report-subtabs report-no-print","aria-label":"Report views",children:[(0,d.jsx)("div",{className:"ba-report-subtab-list",role:"group","aria-label":"Select report view",children:g.map(a=>(0,d.jsx)("button",{type:"button",className:h.key===a.key?"is-active":"","aria-pressed":h.key===a.key,onClick:()=>{c(a.key);let b=document.querySelector(".role-shell.workspace-locked-scroll .app-content");b&&(b.scrollTop=0)},children:a.label},a.key))}),("reports"===h.key||"broadsheets"===h.key)&&(0,d.jsx)(ap.Gx,{})]}),f.ready?f.permitted?(0,d.jsx)(i,{...a}):(0,d.jsx)("div",{className:"teacher-portal-report-loading",role:"status",children:"An active teacher membership is required."}):(0,d.jsx)("div",{className:"teacher-portal-report-loading",role:"status",children:"Loading teacher assignments…"})]})})},teacherStudents:function(){let a=p(),{settings:b}=(0,w.t)(),c=b?.primaryColor||"var(--primary-color,#2563eb)";(0,j.f)(["students","studentEnrollments","classes","organizations"]);let[f,g]=(0,e.useState)([]),[h,i]=(0,e.useState)(!1),[n,o]=(0,e.useState)(!1),[q,s]=(0,e.useState)(""),[t,u]=(0,e.useState)("all"),[v,x]=(0,e.useState)("all"),[z,A]=(0,e.useState)("cards"),[B,C]=(0,e.useState)(!1),[D,E]=(0,e.useState)(!1),[F,I]=(0,e.useState)(null),[J,K]=(0,e.useState)(b6),[L,M]=(0,e.useState)(null),[N,O]=(0,e.useState)(!1),[P,Q]=(0,e.useState)(""),[R,S]=(0,e.useState)(!1),[T,U]=(0,e.useState)(!1),[V,W]=(0,e.useState)("environment"),X=(0,e.useRef)(null),Y=(0,e.useRef)(null),Z=(0,e.useRef)(null),[$,_]=(0,e.useState)(""),aa=(0,e.useRef)(""),ab=[a.accountId,a.schoolId,a.branchId,a.teacherId].join("|"),ac=(0,e.useRef)(ab);ac.current=ab;let ad=(0,e.useRef)(0),[ae,af]=(0,e.useState)(""),ag=[...a.allowedClassIds].sort().join("|"),ah=(0,e.useMemo)(()=>new Set(ag.split("|").filter(Boolean)),[ag]),ai=(0,e.useMemo)(()=>a.permitted&&ae===ab?f.filter(a=>ah.has(a.classId)):[],[a.permitted,ae,ab,f,ah]),aj=(0,e.useMemo)(()=>ai.map(a=>a.row),[ai]),ak=(0,G.D)({accountId:a.accountId,ownerTable:"students",rows:aj,fields:[{fieldKey:"photo",mediaIdKey:"photoMediaId"}]}),al=(0,e.useCallback)(async()=>{let b=++ad.current;if(a.permitted&&a.ready){i(!0);try{let c=k.db.organizations,d=[k.db.students,k.db.studentEnrollments,k.db.classes];c&&d.push(c);let[e,f,h,i]=await k.db.transaction("r",d,async()=>Promise.all([k.db.students.toArray(),k.db.studentEnrollments.toArray(),k.db.classes.toArray(),c?c.toArray():Promise.resolve([])]));if(b!==ad.current||ac.current!==ab)return;let j=b=>b?.isDeleted!==!0&&b?.active!==!1&&m(b.accountId,a.accountId)&&m(b.schoolId,a.schoolId)&&m(b.branchId,a.branchId),n=new Map(h.filter(j).map(a=>[l(a.id),b7(a.name)])),o=new Map(i.filter(j).map(a=>[l(a.id),b7(a.name)])),p=f.filter(a=>j(a)&&ah.has(l(a.classId))),q=p.filter(a=>{let b=b7(a.status).trim().toLowerCase();return"active"===b||!b&&!1!==a.active}),r=new Map;q.forEach(a=>{let b=l(a.studentId),c=l(a.classId);b&&!r.has(b)&&r.set(b,{classId:c,className:n.get(c)||"Class"})});let s=new Map;p.forEach(a=>{let b=l(a.studentId);s.set(b,(s.get(b)||0)+1)});let t=e.filter(a=>j(a)&&r.has(l(a.id))&&!["withdrawn","graduated","deleted"].includes(cb(a))).map(a=>({row:a,...r.get(l(a.id)),organizationName:o.get(l(a.organizationId))||"—",enrollmentCount:s.get(l(a.id))||0})).sort((a,b)=>b7(a.row.fullName).localeCompare(b7(b.row.fullName)));g(t),af(ab)}catch(a){b===ad.current&&ac.current===ab&&(console.error("Teacher Students load:",a),_("Student refresh could not complete. Your existing list is retained; try Refresh."))}finally{b===ad.current&&ac.current===ab&&i(!1)}}},[ab,a.permitted,a.ready,a.accountId,a.schoolId,a.branchId,ah]),am=a=>ak[l(a.id)]?.photo||b7(a.photo)||void 0,an=(0,e.useMemo)(()=>[...new Map(ai.map(a=>[a.classId,a.className])).entries()].sort((a,b)=>a[1].localeCompare(b[1])),[ai]),ao=(0,e.useMemo)(()=>ai.filter(a=>{if("all"!==t&&a.classId!==t||"all"!==v&&ca(a.row)!==v)return!1;let b=q.toLowerCase().trim();return!b||`${a.row.fullName||""} ${a.row.admissionNumber||""} ${a.className} ${a.row.parentPhone||""}`.toLowerCase().includes(b)}),[ai,t,v,q]);(0,H.TV)("teacherStudents",{search:s,filter:()=>C(!0),more:()=>E(!0)});let ap=a=>{let b=a.row;I(a),_(""),M(null),aa.current=(0,aq.It)(aq.$S.STUDENTS),K({fullName:b7(b.fullName),gender:ca(a.row),dateOfBirth:b7(b.dateOfBirth).slice(0,10),age:b9(a.row),parentName:b7(b.parentName),parentPhone:b7(b.parentPhone),parentEmail:b7(b.parentEmail),address:b7(b.address)})},ar=()=>{(0,aq.IK)(Y.current),Y.current=null,X.current&&(X.current.srcObject=null),O(!1),Q(""),U(!1)},as=async()=>{if(!X.current)return void Q("Camera preview is not ready.");U(!0),Q("");try{let a=await (0,aq.ln)(X.current,{fileName:`student-photo-${Date.now()}.jpg`,mimeType:"image/jpeg",quality:.88,maxWidth:900,maxHeight:900});await au(a),ar()}catch(a){Q(a instanceof Error?a.message:"Could not capture student photo.")}finally{U(!1)}},at=()=>{n||(ar(),I(null),M(null))},au=async b=>{if(b&&F){if(!b.type.startsWith("image/"))return void _("Choose an image file.");try{let c=await (0,aq.fA)(b,{accountId:a.accountId,schoolId:a.schoolId,branchId:a.branchId,ownerTable:aq.$S.STUDENTS,ownerId:void 0,ownerTempKey:aa.current,fieldKey:aq.Vq.PHOTO,variant:"avatar",replaceExisting:!0});if(!c.assetId)throw Error("Photo could not be staged.");M({assetId:l(c.assetId),previewUrl:c.previewUrl})}catch(a){_(a instanceof Error?a.message:"Photo upload failed.")}}},av=async b=>{if(b?.preventDefault(),!F||!a.permitted||n)return;let c=J.fullName.trim();if(!c)return void _("Student name is required.");let d=J.dateOfBirth?b8(J.dateOfBirth):""===J.age.trim()?void 0:Number(J.age);if(J.dateOfBirth&&void 0===d)return void _("Enter a valid date of birth that is not in the future.");if(void 0!==d&&(!Number.isFinite(d)||d<0||d>130))return void _("Enter a valid age.");let e=l(F.row.id);o(!0);try{if(!await r(a,e))throw Error("This student is no longer assigned to one of your classes.");let b=await k.db.students.get(e);if(!b||!m(b.accountId,a.accountId)||!m(b.schoolId,a.schoolId)||!m(b.branchId,a.branchId)||b.isDeleted)throw Error("Student record is no longer available.");let f=J.gender!==ca(b),h={fullName:c,dateOfBirth:J.dateOfBirth||void 0,age:d,parentName:J.parentName.trim()||void 0,parentPhone:J.parentPhone.trim()||void 0,parentEmail:J.parentEmail.trim()||void 0,address:J.address.trim()||void 0,...f?{gender:J.gender||void 0}:{}};await (0,y.Po)("students",e,h);let i=await k.db.students.get(e);i&&ac.current===ab&&g(a=>a.map(a=>l(a.row.id)===e?{...a,row:i}:a));let j="";if(L?.assetId)try{let b=await (0,aq.$e)({accountId:a.accountId,ownerTable:aq.$S.STUDENTS,ownerId:e,ownerTempKey:aa.current,assets:[{assetId:L.assetId,fieldKey:aq.Vq.PHOTO}]}),c=b.find(a=>a.fieldKey===aq.Vq.PHOTO)?.assetId;if(!c)throw Error("The photo could not be attached to this student.");await (0,y.Po)("students",e,{photoMediaId:c});let d=await k.db.students.get(e);d&&ac.current===ab&&g(a=>a.map(a=>l(a.row.id)===e?{...a,row:d}:a))}catch(a){console.error("Teacher Student photo attachment:",a),j=a instanceof Error?a.message:"Unable to attach the photo."}j?_(`Student details saved locally, but the photo needs attention: ${j}`):(I(null),M(null),_("Student details saved locally. Cloud sync may still be pending.")),al()}catch(a){console.error("Teacher Student save:",a),_(a instanceof Error?a.message:"Could not save student.")}finally{o(!1)}};return(0,d.jsxs)("main",{className:"ba-page students-page teacher-students-page",style:{"--ba-primary":c,"--ba-primary-text":cd(c)},children:[(0,d.jsx)("style",{children:ch}),$&&(0,d.jsxs)("section",{className:"ba-toast info",role:"status",children:[$,(0,d.jsx)("button",{type:"button",onClick:()=>_(""),"aria-label":"Dismiss message",children:"✕"})]}),a.ready?a.permitted?h&&!ai.length&&ae!==ab?(0,d.jsx)("div",{className:"teacher-loading",children:"Loading assigned students…"}):(0,d.jsxs)(d.Fragment,{children:["cards"===z&&(0,d.jsx)("section",{className:"ba-list",children:ao.map(a=>(0,d.jsxs)("button",{type:"button",className:"student-row",onClick:()=>ap(a),"aria-label":`Edit ${b7(a.row.fullName)}`,children:[(0,d.jsx)(ce,{name:b7(a.row.fullName),photo:am(a.row),primary:c}),(0,d.jsxs)("span",{className:"student-main",children:[(0,d.jsx)("strong",{children:a.row.fullName||"Unnamed student"}),(0,d.jsxs)("small",{children:[a.className,a.row.admissionNumber?` \xb7 ${a.row.admissionNumber}`:""]}),(0,d.jsx)("em",{children:a.row.parentPhone?`Parent: ${a.row.parentPhone}`:a.row.parentName?`Parent: ${a.row.parentName}`:a.organizationName})]}),(0,d.jsxs)("span",{className:"student-side",children:[(0,d.jsx)(cf,{row:a.row}),(0,d.jsx)("i",{"aria-hidden":"true",children:"✎"})]})]},l(a.row.id)))}),"table"===z&&(0,d.jsx)("section",{className:"ba-table-card",children:(0,d.jsxs)("div",{className:"ba-table-scroll eds-workspace-table-scroll","data-workspace-hscroll":"true",role:"region","aria-label":"Teacher students table",tabIndex:0,children:[(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsxs)("th",{children:["Students (",ao.length,")"]}),(0,d.jsx)("th",{children:"Admission No."}),(0,d.jsx)("th",{children:"Class"}),(0,d.jsx)("th",{children:"Organization"}),(0,d.jsx)("th",{children:"Gender"}),(0,d.jsx)("th",{children:"Age"}),(0,d.jsx)("th",{children:"Parent"}),(0,d.jsx)("th",{children:"Phone"}),(0,d.jsx)("th",{children:"Enrollments"}),(0,d.jsx)("th",{children:"Status"}),(0,d.jsx)("th",{children:"Updated"}),(0,d.jsx)("th",{children:"Actions"})]})}),(0,d.jsx)("tbody",{children:ao.map(a=>(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsxs)("div",{className:"ba-table-person",children:[(0,d.jsx)(ce,{name:b7(a.row.fullName),photo:am(a.row),primary:"var(--ba-primary,#64748b)"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("strong",{children:a.row.fullName}),(0,d.jsx)("span",{children:a.row.address||""})]})]})}),(0,d.jsx)("td",{children:a.row.admissionNumber||"—"}),(0,d.jsx)("td",{children:a.className}),(0,d.jsx)("td",{children:a.organizationName}),(0,d.jsx)("td",{children:ca(a.row)||"—"}),(0,d.jsx)("td",{children:b9(a.row)||"—"}),(0,d.jsx)("td",{children:a.row.parentName||"—"}),(0,d.jsx)("td",{children:a.row.parentPhone||"—"}),(0,d.jsx)("td",{children:a.enrollmentCount}),(0,d.jsx)("td",{children:(0,d.jsx)("span",{className:`ba-chip ${cc(a.row)}`,children:cb(a.row)})}),(0,d.jsx)("td",{children:function(a){if(!a)return"—";let b=new Date(a);return Number.isFinite(b.getTime())?b.toLocaleDateString("en-GH",{day:"2-digit",month:"short",year:"numeric"}):"—"}(a.row.updatedAt||a.row.createdAt)}),(0,d.jsx)("td",{children:(0,d.jsx)("div",{className:"ba-table-actions",children:(0,d.jsx)("button",{type:"button",onClick:()=>ap(a),children:"Edit"})})})]},l(a.row.id)))})]}),!ao.length&&(0,d.jsx)("div",{className:"ba-empty-table",children:"No student matches your filters."})]})}),!ao.length&&"cards"===z&&(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("h2",{children:"No students found"}),(0,d.jsx)("p",{children:ah.size?"No assigned students match your current filters, or their enrollment records are not yet available on this device.":"No class assignment is available on this device. Check the selected teacher workspace and synchronization."})]})]}):(0,d.jsxs)("section",{className:"ba-state",children:[(0,d.jsx)("h2",{children:"Teacher workspace required"}),(0,d.jsx)("p",{children:"Select your teacher role to view assigned students."})]}):(0,d.jsx)("div",{className:"teacher-loading",children:"Loading assigned students…"}),B&&(0,d.jsx)(cg,{type:"sheet",primary:c,onClose:()=>C(!1),children:(0,d.jsxs)("section",{className:"ba-sheet small",role:"dialog","aria-modal":"true","aria-label":"Student filters",onPointerDown:a=>a.stopPropagation(),children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Filters"}),(0,d.jsx)("p",{children:"Find students in your assigned classes."})]}),(0,d.jsx)("button",{className:"ba-modal-close",type:"button",onClick:()=>C(!1),"aria-label":"Close filters",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-form two",children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Search"}),(0,d.jsx)("input",{value:q,onChange:a=>s(a.target.value),placeholder:"Name or admission number"})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Class"}),(0,d.jsxs)("select",{value:t,onChange:a=>u(a.target.value),children:[(0,d.jsx)("option",{value:"all",children:"All assigned classes"}),an.map(([a,b])=>(0,d.jsx)("option",{value:a,children:b},a))]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Gender"}),(0,d.jsxs)("select",{value:v,onChange:a=>x(a.target.value),children:[(0,d.jsx)("option",{value:"all",children:"All genders"}),(0,d.jsx)("option",{value:"Male",children:"Male"}),(0,d.jsx)("option",{value:"Female",children:"Female"}),(0,d.jsx)("option",{value:"Other",children:"Other"})]})]})]}),(0,d.jsxs)("div",{className:"ba-sheet-actions",children:[(0,d.jsx)("button",{type:"button",onClick:()=>{u("all"),x("all"),s("")},children:"Clear"}),(0,d.jsx)("button",{type:"button",className:"primary",onClick:()=>C(!1),children:"Apply"})]})]})}),D&&(0,d.jsx)(cg,{type:"sheet",primary:c,onClose:()=>E(!1),children:(0,d.jsxs)("section",{className:"ba-sheet small",role:"dialog","aria-modal":"true","aria-label":"Student display",onPointerDown:a=>a.stopPropagation(),children:[(0,d.jsxs)("div",{className:"ba-sheet-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"More"}),(0,d.jsx)("p",{children:"Choose a student display."})]}),(0,d.jsx)("button",{className:"ba-modal-close",type:"button","aria-label":"Close More",onClick:()=>E(!1),children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-menu-list",children:[(0,d.jsxs)("button",{type:"button",className:"cards"===z?"active":"",onClick:()=>{A("cards"),E(!1)},children:[(0,d.jsx)("span",{children:"☰"}),(0,d.jsx)("b",{children:"List view"}),(0,d.jsx)("small",{children:"Compact student cards"})]}),(0,d.jsxs)("button",{type:"button",className:"table"===z?"active":"",onClick:()=>{A("table"),E(!1)},children:[(0,d.jsx)("span",{children:"☷"}),(0,d.jsx)("b",{children:"Table view"}),(0,d.jsx)("small",{children:"Dense records for laptop work"})]}),(0,d.jsxs)("button",{type:"button",onClick:()=>{E(!1),al()},children:[(0,d.jsx)("span",{children:"↻"}),(0,d.jsx)("b",{children:"Refresh"}),(0,d.jsx)("small",{children:"Reload assigned students"})]})]})]})}),F&&(0,d.jsx)(cg,{primary:c,onClose:at,children:(0,d.jsxs)("form",{className:"ba-modal",role:"dialog","aria-modal":"true","aria-label":"Edit student",onSubmit:av,onPointerDown:a=>a.stopPropagation(),children:[(0,d.jsxs)("div",{className:"ba-modal-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Edit Student"}),(0,d.jsxs)("p",{children:[F.row.admissionNumber||"No admission number"," \xb7 ",F.className]})]}),(0,d.jsx)("button",{type:"button",className:"ba-modal-close",disabled:n,onClick:at,"aria-label":"Close student editor",children:"✕"})]}),(0,d.jsxs)("section",{className:"ba-form-section",children:[(0,d.jsx)("h3",{children:"Student"}),(0,d.jsxs)("div",{className:"ba-form",children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Full Name"}),(0,d.jsx)("input",{autoFocus:!0,value:J.fullName,onChange:a=>K(b=>({...b,fullName:a.target.value})),required:!0})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Gender"}),(0,d.jsxs)("select",{value:J.gender,onChange:a=>K(b=>({...b,gender:a.target.value})),children:[(0,d.jsx)("option",{value:"",children:"Select gender"}),(0,d.jsx)("option",{value:"Male",children:"Male"}),(0,d.jsx)("option",{value:"Female",children:"Female"}),(0,d.jsx)("option",{value:"Other",children:"Other"}),J.gender&&!["Male","Female","Other"].includes(J.gender)&&(0,d.jsxs)("option",{value:J.gender,children:[J.gender," (existing)"]})]})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Date of Birth"}),(0,d.jsx)("input",{type:"date",value:J.dateOfBirth,onChange:a=>K(b=>({...b,dateOfBirth:a.target.value,age:a.target.value?String(b8(a.target.value)??""):""}))})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Age (calculated)"}),(0,d.jsx)("input",{type:"number",min:"0",max:"130",value:J.dateOfBirth?b8(J.dateOfBirth)??"":J.age,readOnly:!0,title:"Age is automatically calculated from Date of Birth"})]})]})]}),(0,d.jsxs)("section",{className:"ba-form-section",children:[(0,d.jsx)("h3",{children:"Parent / Guardian"}),(0,d.jsxs)("div",{className:"ba-form",children:[(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Parent / Guardian Name"}),(0,d.jsx)("input",{value:J.parentName,onChange:a=>K(b=>({...b,parentName:a.target.value}))})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Parent Phone"}),(0,d.jsx)("input",{value:J.parentPhone,onChange:a=>K(b=>({...b,parentPhone:a.target.value}))})]}),(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{children:"Parent Email"}),(0,d.jsx)("input",{type:"email",value:J.parentEmail,onChange:a=>K(b=>({...b,parentEmail:a.target.value}))})]}),(0,d.jsxs)("label",{className:"wide",children:[(0,d.jsx)("span",{children:"Address"}),(0,d.jsx)("textarea",{value:J.address,onChange:a=>K(b=>({...b,address:a.target.value}))})]})]})]}),(0,d.jsxs)("section",{className:"ba-form-section",children:[(0,d.jsx)("h3",{children:"Media"}),(0,d.jsxs)("div",{className:"ba-media-section",children:[(0,d.jsx)(ce,{name:J.fullName,photo:L?.previewUrl||am(F.row),primary:c}),(0,d.jsxs)("label",{className:"ba-media-button secondary",children:["Upload photo",(0,d.jsx)("input",{type:"file",accept:"image/*",disabled:n,onChange:a=>{au(a.target.files?.[0]),a.target.value=""}})]}),(0,d.jsx)("button",{type:"button",className:"ba-media-button",disabled:n,onClick:()=>{(0,aq.fP)()?(W("environment"),Q(""),O(!0)):_((0,aq.f5)())},children:"\uD83D\uDCF7 Take Photo"}),(0,d.jsx)("input",{ref:Z,type:"file",accept:"image/*",capture:"environment","aria-label":"Use device camera",style:{display:"none"},onChange:a=>{au(a.target.files?.[0]),a.target.value=""}})]})]}),(0,d.jsx)("section",{className:"ba-form-section",children:(0,d.jsxs)("div",{className:"ba-school-managed",children:[(0,d.jsx)("strong",{children:"School-managed fields"}),(0,d.jsxs)("p",{children:["Admission number: ",F.row.admissionNumber||"—"," \xb7 Class: ",F.className,". Enrollment, class assignment, organization, and student status cannot be edited by teachers."]})]})}),(0,d.jsxs)("div",{className:"ba-modal-actions",children:[(0,d.jsx)("button",{type:"button",disabled:n,onClick:at,children:"Cancel"}),(0,d.jsx)("button",{type:"submit",disabled:n,children:n?"Saving…":"Save changes"})]})]})}),F&&N&&(0,d.jsx)(cg,{primary:c,onClose:ar,children:(0,d.jsxs)("section",{className:"ba-modal teacher-camera-dialog ba-camera-modal",role:"dialog","aria-modal":"true","aria-label":"Take student photo",onPointerDown:a=>a.stopPropagation(),children:[(0,d.jsxs)("div",{className:"ba-modal-head",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Take Student Photo"}),(0,d.jsx)("p",{children:"Use the live camera preview, then capture. The photo is compressed and staged until Save."})]}),(0,d.jsx)("button",{type:"button",className:"ba-modal-close",onClick:ar,"aria-label":"Close camera",children:"✕"})]}),(0,d.jsxs)("div",{className:"ba-camera-preview",children:[(0,d.jsx)("video",{ref:X,autoPlay:!0,muted:!0,playsInline:!0}),R&&(0,d.jsx)("span",{className:"ba-camera-loading",children:"Opening camera…"})]}),P&&(0,d.jsx)("p",{role:"alert",className:"teacher-camera-error",children:P}),(0,d.jsxs)("div",{className:"ba-camera-actions",children:[(0,d.jsx)("button",{type:"button",className:"ba-camera-secondary",disabled:R||T,onClick:()=>W(a=>"environment"===a?"user":"environment"),children:"Switch Camera"}),(0,d.jsx)("button",{type:"button",className:"ba-camera-secondary",disabled:T,onClick:ar,children:"Cancel"}),(0,d.jsx)("button",{type:"button",className:"ba-camera-primary",disabled:R||T||!!P,onClick:()=>void as(),children:T?"Capturing…":"Capture Photo"})]})]})})]})}};function cl(){return(0,d.jsx)(g.A,{portalTitle:"Teacher Portal",portalSubtitle:"Enter scores, reports and students",homeKey:"assessmentEntry",allowedRoles:h.dF,navSections:cj,navigationMode:"branch-workspace",routes:ck,lockedContext:!0,requireSchool:!0,requireBranch:!0})}},24386:(a,b,c)=>{Promise.resolve().then(c.bind(c,23167))},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},27910:a=>{"use strict";a.exports=require("stream")},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},34631:a=>{"use strict";a.exports=require("tls")},35370:(a,b,c)=>{"use strict";c.r(b),c.d(b,{NAV_SECTIONS:()=>e,default:()=>f});var d=c(77943);let e=(0,d.registerClientReference)(function(){throw Error("Attempted to call NAV_SECTIONS() from the server but NAV_SECTIONS is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\teacher\\page.tsx","NAV_SECTIONS"),f=(0,d.registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\AGNES\\\\github\\\\eleeveon-schools-frontend\\\\app\\\\teacher\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\teacher\\page.tsx","default")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},41204:a=>{"use strict";a.exports=require("string_decoder")},43954:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/interception-routes")},49485:a=>{"use strict";a.exports=require("rimraf")},55511:a=>{"use strict";a.exports=require("crypto")},55591:a=>{"use strict";a.exports=require("https")},60533:(a,b,c)=>{"use strict";function d({children:a}){return a}c.r(b),c.d(b,{default:()=>d})},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},70722:a=>{"use strict";a.exports=require("next/dist/shared/lib/invariant-error")},74075:a=>{"use strict";a.exports=require("zlib")},77068:a=>{"use strict";a.exports=require("next/dist/shared/lib/size-limit")},79428:a=>{"use strict";a.exports=require("buffer")},79646:a=>{"use strict";a.exports=require("child_process")},81115:a=>{"use strict";a.exports=require("constants")},81630:a=>{"use strict";a.exports=require("http")},83997:a=>{"use strict";a.exports=require("tty")},84218:(a,b,c)=>{Promise.resolve().then(c.bind(c,35370))},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},91645:a=>{"use strict";a.exports=require("net")},94735:a=>{"use strict";a.exports=require("events")}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[3445,63,7488,7533,7252,1537,8505,3080,728,8594,4498,1752],()=>b(b.s=4637));module.exports=c})();
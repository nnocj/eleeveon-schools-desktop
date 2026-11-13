(()=>{var a={};a.id=5379,a.ids=[5379],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},1866:(a,b,c)=>{"use strict";c.r(b),c.d(b,{NAV_SECTIONS:()=>B5,default:()=>B7});var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K={};c.r(K),c.d(K,{scaleBand:()=>go,scaleDiverging:()=>function a(){var b=hC(jT()(hk));return b.copy=function(){return jQ(b,a())},gi.apply(b,arguments)},scaleDivergingLog:()=>function a(){var b=hK(jT()).domain([.1,1,10]);return b.copy=function(){return jQ(b,a()).base(b.base())},gi.apply(b,arguments)},scaleDivergingPow:()=>jU,scaleDivergingSqrt:()=>jV,scaleDivergingSymlog:()=>function a(){var b=hN(jT());return b.copy=function(){return jQ(b,a()).constant(b.constant())},gi.apply(b,arguments)},scaleIdentity:()=>function a(b){var c;function d(a){return null==a||isNaN(a*=1)?c:a}return d.invert=d,d.domain=d.range=function(a){return arguments.length?(b=Array.from(a,hi),d):b.slice()},d.unknown=function(a){return arguments.length?(c=a,d):c},d.copy=function(){return a(b).unknown(c)},b=arguments.length?Array.from(b,hi):[0,1],hC(d)},scaleImplicit:()=>gm,scaleLinear:()=>function a(){var b=hq();return b.copy=function(){return ho(b,a())},gh.apply(b,arguments),hC(b)},scaleLog:()=>function a(){let b=hK(hp()).domain([1,10]);return b.copy=()=>ho(b,a()).base(b.base()),gh.apply(b,arguments),b},scaleOrdinal:()=>gn,scalePoint:()=>gp,scalePow:()=>hS,scaleQuantile:()=>function a(){var b,c=[],d=[],e=[];function f(){var a=0,b=Math.max(1,d.length);for(e=Array(b-1);++a<b;)e[a-1]=function(a,b,c=gB){if(!(!(d=a.length)||isNaN(b*=1))){if(b<=0||d<2)return+c(a[0],0,a);if(b>=1)return+c(a[d-1],d-1,a);var d,e=(d-1)*b,f=Math.floor(e),g=+c(a[f],f,a);return g+(c(a[f+1],f+1,a)-g)*(e-f)}}(c,a/b);return g}function g(a){return null==a||isNaN(a*=1)?b:d[gD(e,a)]}return g.invertExtent=function(a){var b=d.indexOf(a);return b<0?[NaN,NaN]:[b>0?e[b-1]:c[0],b<e.length?e[b]:c[c.length-1]]},g.domain=function(a){if(!arguments.length)return c.slice();for(let b of(c=[],a))null==b||isNaN(b*=1)||c.push(b);return c.sort(gx),f()},g.range=function(a){return arguments.length?(d=Array.from(a),f()):d.slice()},g.unknown=function(a){return arguments.length?(b=a,g):b},g.quantiles=function(){return e.slice()},g.copy=function(){return a().domain(c).range(d).unknown(b)},gh.apply(g,arguments)},scaleQuantize:()=>function a(){var b,c=0,d=1,e=1,f=[.5],g=[0,1];function h(a){return null!=a&&a<=a?g[gD(f,a,0,e)]:b}function i(){var a=-1;for(f=Array(e);++a<e;)f[a]=((a+1)*d-(a-e)*c)/(e+1);return h}return h.domain=function(a){return arguments.length?([c,d]=a,c*=1,d*=1,i()):[c,d]},h.range=function(a){return arguments.length?(e=(g=Array.from(a)).length-1,i()):g.slice()},h.invertExtent=function(a){var b=g.indexOf(a);return b<0?[NaN,NaN]:b<1?[c,f[0]]:b>=e?[f[e-1],d]:[f[b-1],f[b]]},h.unknown=function(a){return arguments.length&&(b=a),h},h.thresholds=function(){return f.slice()},h.copy=function(){return a().domain([c,d]).range(g).unknown(b)},gh.apply(hC(h),arguments)},scaleRadial:()=>function a(){var b,c=hq(),d=[0,1],e=!1;function f(a){var d,f=Math.sign(d=c(a))*Math.sqrt(Math.abs(d));return isNaN(f)?b:e?Math.round(f):f}return f.invert=function(a){return c.invert(hU(a))},f.domain=function(a){return arguments.length?(c.domain(a),f):c.domain()},f.range=function(a){return arguments.length?(c.range((d=Array.from(a,hi)).map(hU)),f):d.slice()},f.rangeRound=function(a){return f.range(a).round(!0)},f.round=function(a){return arguments.length?(e=!!a,f):e},f.clamp=function(a){return arguments.length?(c.clamp(a),f):c.clamp()},f.unknown=function(a){return arguments.length?(b=a,f):b},f.copy=function(){return a(c.domain(),d).round(e).clamp(c.clamp()).unknown(b)},gh.apply(f,arguments),hC(f)},scaleSequential:()=>function a(){var b=hC(jP()(hk));return b.copy=function(){return jQ(b,a())},gi.apply(b,arguments)},scaleSequentialLog:()=>function a(){var b=hK(jP()).domain([1,10]);return b.copy=function(){return jQ(b,a()).base(b.base())},gi.apply(b,arguments)},scaleSequentialPow:()=>jR,scaleSequentialQuantile:()=>function a(){var b=[],c=hk;function d(a){if(null!=a&&!isNaN(a*=1))return c((gD(b,a,1)-1)/(b.length-1))}return d.domain=function(a){if(!arguments.length)return b.slice();for(let c of(b=[],a))null==c||isNaN(c*=1)||b.push(c);return b.sort(gx),d},d.interpolator=function(a){return arguments.length?(c=a,d):c},d.range=function(){return b.map((a,d)=>c(d/(b.length-1)))},d.quantiles=function(a){return Array.from({length:a+1},(c,d)=>(function(a,b){if(!(!(c=(a=Float64Array.from(function*(a,b){if(void 0===b)for(let b of a)null!=b&&(b*=1)>=b&&(yield b);else{let c=-1;for(let d of a)null!=(d=b(d,++c,a))&&(d*=1)>=d&&(yield d)}}(a,void 0))).length)||isNaN(b*=1))){if(b<=0||c<2)return hW(a);if(b>=1)return hV(a);var c,d=(c-1)*b,e=Math.floor(d),f=hV((function a(b,c,d=0,e=1/0,f){if(c=Math.floor(c),d=Math.floor(Math.max(0,d)),e=Math.floor(Math.min(b.length-1,e)),!(d<=c&&c<=e))return b;for(f=void 0===f?hX:function(a=gx){if(a===gx)return hX;if("function"!=typeof a)throw TypeError("compare is not a function");return(b,c)=>{let d=a(b,c);return d||0===d?d:(0===a(c,c))-(0===a(b,b))}}(f);e>d;){if(e-d>600){let g=e-d+1,h=c-d+1,i=Math.log(g),j=.5*Math.exp(2*i/3),k=.5*Math.sqrt(i*j*(g-j)/g)*(h-g/2<0?-1:1),l=Math.max(d,Math.floor(c-h*j/g+k)),m=Math.min(e,Math.floor(c+(g-h)*j/g+k));a(b,c,l,m,f)}let g=b[c],h=d,i=e;for(hY(b,d,c),f(b[e],g)>0&&hY(b,d,e);h<i;){for(hY(b,h,i),++h,--i;0>f(b[h],g);)++h;for(;f(b[i],g)>0;)--i}0===f(b[d],g)?hY(b,d,i):hY(b,++i,e),i<=c&&(d=i+1),c<=i&&(e=i-1)}return b})(a,e).subarray(0,e+1));return f+(hW(a.subarray(e+1))-f)*(d-e)}})(b,d/a))},d.copy=function(){return a(c).domain(b)},gi.apply(d,arguments)},scaleSequentialSqrt:()=>jS,scaleSequentialSymlog:()=>function a(){var b=hN(jP());return b.copy=function(){return jQ(b,a()).constant(b.constant())},gi.apply(b,arguments)},scaleSqrt:()=>hT,scaleSymlog:()=>function a(){var b=hN(hp());return b.copy=function(){return ho(b,a()).constant(b.constant())},gh.apply(b,arguments)},scaleThreshold:()=>function a(){var b,c=[.5],d=[0,1],e=1;function f(a){return null!=a&&a<=a?d[gD(c,a,0,e)]:b}return f.domain=function(a){return arguments.length?(e=Math.min((c=Array.from(a)).length,d.length-1),f):c.slice()},f.range=function(a){return arguments.length?(d=Array.from(a),e=Math.min(c.length,d.length-1),f):d.slice()},f.invertExtent=function(a){var b=d.indexOf(a);return[c[b-1],c[b]]},f.unknown=function(a){return arguments.length?(b=a,f):b},f.copy=function(){return a().domain(c).range(d).unknown(b)},gh.apply(f,arguments)},scaleTime:()=>jN,scaleUtc:()=>jO,tickFormat:()=>hB});var L=c(48249),M=c(67484),N=c.n(M),O=c(30728);function P(){for(var a,b,c=0,d="",e=arguments.length;c<e;c++)(a=arguments[c])&&(b=function a(b){var c,d,e="";if("string"==typeof b||"number"==typeof b)e+=b;else if("object"==typeof b)if(Array.isArray(b)){var f=b.length;for(c=0;c<f;c++)b[c]&&(d=a(b[c]))&&(e&&(e+=" "),e+=d)}else for(d in b)b[d]&&(e&&(e+=" "),e+=d);return e}(a))&&(d&&(d+=" "),d+=b);return d}var Q=c(41788),R=c.n(Q),S=c(58238),T=c.n(S);function U(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,c=10**b,d=Math.round(a*c)/c;return Object.is(d,-0)?0:d}function V(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return a.reduce((a,b,d)=>{var e=c[d-1];return"string"==typeof e?a+e+b:void 0!==e?a+U(e)+b:a+b},"")}var W=a=>0===a?0:a>0?1:-1,X=a=>"number"==typeof a&&a!=+a,Y=a=>"string"==typeof a&&a.indexOf("%")===a.length-1,Z=a=>("number"==typeof a||a instanceof Number)&&!X(a),$=a=>Z(a)||"string"==typeof a,_=0,aa=a=>{var b=++_;return"".concat(a||"").concat(b)},ab=function(a,b){var c,d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!Z(a)&&"string"!=typeof a)return d;if(Y(a)){if(null==b)return d;var f=a.indexOf("%");c=b*parseFloat(a.slice(0,f))/100}else c=+a;return X(c)&&(c=d),e&&null!=b&&c>b&&(c=b),c},ac=a=>{if(!Array.isArray(a))return!1;for(var b=a.length,c={},d=0;d<b;d++)if(c[String(a[d])])return!0;else c[String(a[d])]=!0;return!1};function ad(a,b,c){return Z(a)&&Z(b)?U(a+c*(b-a)):b}function ae(a,b,c){if(a&&a.length)return a.find(a=>a&&("function"==typeof b?b(a):T()(a,b))===c)}var af=a=>null==a?a:"".concat(a.charAt(0).toUpperCase()).concat(a.slice(1));function ag(a){return null!=a}function ah(){}var ai=function(a,b){for(var c=arguments.length,d=Array(c>2?c-2:0),e=2;e<c;e++)d[e-2]=arguments[e];if("u">typeof console&&console.warn&&(void 0===b&&console.warn("LogUtils requires an error message argument"),!a))if(void 0===b)console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=0;console.warn(b.replace(/%s/g,()=>d[f++]))}},aj="100%",ak="100%",al={width:-1,height:-1},am=(a,b,c)=>{var{width:d=aj,height:e=ak,aspect:f,maxHeight:g}=c,h=Y(d)?a:Number(d),i=Y(e)?b:Number(e);return f&&f>0&&(h?i=h/f:i&&(h=i*f),g&&null!=i&&i>g&&(i=g)),{calculatedWidth:h,calculatedHeight:i}},an={width:0,height:0,overflow:"visible"},ao={width:0,overflowX:"visible"},ap={height:0,overflowY:"visible"},aq={};function ar(a){return Number.isFinite(a)}function as(a){return"number"==typeof a&&a>0&&Number.isFinite(a)}function at(){return(at=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function au(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function av(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?au(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):au(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var aw=(0,M.createContext)(al);function ax(a){var{children:b,width:c,height:d}=a,e=(0,M.useMemo)(()=>({width:c,height:d}),[c,d]);return as(e.width)&&as(e.height)?M.createElement(aw.Provider,{value:e},b):null}var ay=()=>(0,M.useContext)(aw),az=(0,M.forwardRef)((a,b)=>{var{aspect:c,initialDimension:d=al,width:e,height:f,minWidth:g=0,minHeight:h,maxHeight:i,children:j,debounce:k=0,id:l,className:m,onResize:n,style:o={}}=a,p=(0,M.useRef)(null),q=(0,M.useRef)();q.current=n,(0,M.useImperativeHandle)(b,()=>p.current);var[r,s]=(0,M.useState)({containerWidth:d.width,containerHeight:d.height}),t=(0,M.useCallback)((a,b)=>{s(c=>{var d=Math.round(a),e=Math.round(b);return c.containerWidth===d&&c.containerHeight===e?c:{containerWidth:d,containerHeight:e}})},[]);(0,M.useEffect)(()=>{if(null==p.current||"u"<typeof ResizeObserver)return ah;var a=a=>{var b,c=a[0];if(null!=c){var{width:d,height:e}=c.contentRect;t(d,e),null==(b=q.current)||b.call(q,d,e)}};k>0&&(a=R()(a,k,{trailing:!0,leading:!1}));var b=new ResizeObserver(a),{width:c,height:d}=p.current.getBoundingClientRect();return t(c,d),b.observe(p.current),()=>{b.disconnect()}},[t,k]);var{containerWidth:u,containerHeight:v}=r;ai(!c||c>0,"The aspect(%s) must be greater than zero.",c);var{calculatedWidth:w,calculatedHeight:x}=am(u,v,{width:e,height:f,aspect:c,maxHeight:i});return ai(null!=w&&w>0||null!=x&&x>0,"The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",w,x,e,f,g,h,c),M.createElement("div",{id:l?"".concat(l):void 0,className:P("recharts-responsive-container",m),style:av(av({},o),{},{width:e,height:f,minWidth:g,minHeight:h,maxHeight:i}),ref:p},M.createElement("div",{style:(a=>{var{width:b,height:c}=a,d=Y(b),e=Y(c);return d&&e?an:d?ao:e?ap:aq})({width:e,height:f})},M.createElement(ax,{width:w,height:x},j)))}),aA=(0,M.forwardRef)((a,b)=>{var c=ay();if(as(c.width)&&as(c.height))return a.children;var{width:d,height:e}=function(a){var{width:b,height:c,aspect:d}=a,e=b,f=c;return void 0===e&&void 0===f?(e=aj,f=ak):void 0===e?e=d&&d>0?void 0:aj:void 0===f&&(f=d&&d>0?void 0:ak),{width:e,height:f}}({width:a.width,height:a.height,aspect:a.aspect}),{calculatedWidth:f,calculatedHeight:g}=am(void 0,void 0,{width:d,height:e,aspect:a.aspect,maxHeight:a.maxHeight});return Z(f)&&Z(g)?M.createElement(ax,{width:f,height:g},a.children):M.createElement(az,at({},a,{width:d,height:e,ref:b}))}),aB=Symbol.for("immer-nothing"),aC=Symbol.for("immer-draftable"),aD=Symbol.for("immer-state");function aE(a){throw Error(`[Immer] minified error nr: ${a}. Full error at: https://bit.ly/3cXEKWf`)}var aF=Object,aG=aF.getPrototypeOf,aH="constructor",aI="prototype",aJ="configurable",aK="enumerable",aL="writable",aM="value",aN=a=>!!a&&!!a[aD];function aO(a){return!!a&&(aR(a)||aX(a)||!!a[aC]||!!a[aH]?.[aC]||aY(a)||aZ(a))}var aP=aF[aI][aH].toString(),aQ=new WeakMap;function aR(a){if(!a||!a$(a))return!1;let b=aG(a);if(null===b||b===aF[aI])return!0;let c=aF.hasOwnProperty.call(b,aH)&&b[aH];if(c===Object)return!0;if(!a_(c))return!1;let d=aQ.get(c);return void 0===d&&(d=Function.toString.call(c),aQ.set(c,d)),d===aP}function aS(a,b,c=!0){0===aT(a)?(c?Reflect.ownKeys(a):aF.keys(a)).forEach(c=>{b(c,a[c],a)}):a.forEach((c,d)=>b(d,c,a))}function aT(a){let b=a[aD];return b?b.type_:aX(a)?1:aY(a)?2:3*!!aZ(a)}var aU=(a,b,c=aT(a))=>2===c?a.has(b):aF[aI].hasOwnProperty.call(a,b),aV=(a,b,c=aT(a))=>2===c?a.get(b):a[b],aW=(a,b,c,d=aT(a))=>{2===d?a.set(b,c):3===d?a.add(c):a[b]=c},aX=Array.isArray,aY=a=>a instanceof Map,aZ=a=>a instanceof Set,a$=a=>"object"==typeof a,a_=a=>"function"==typeof a,a0=a=>a.modified_?a.copy_:a.base_;function a1(a,b){if(aY(a))return new Map(a);if(aZ(a))return new Set(a);if(aX(a))return Array[aI].slice.call(a);let c=aR(a);if(!0!==b&&("class_only"!==b||c)){let b=aG(a);if(null!==b&&c)return{...a};let d=aF.create(b);return aF.assign(d,a)}{let b=aF.getOwnPropertyDescriptors(a);delete b[aD];let c=Reflect.ownKeys(b);for(let d=0;d<c.length;d++){let e=c[d],f=b[e];!1===f[aL]&&(f[aL]=!0,f[aJ]=!0),(f.get||f.set)&&(b[e]={[aJ]:!0,[aL]:!0,[aK]:f[aK],[aM]:a[e]})}return aF.create(aG(a),b)}}function a2(a,b=!1){return a4(a)||aN(a)||!aO(a)||(aT(a)>1&&aF.defineProperties(a,{set:a3,add:a3,clear:a3,delete:a3}),aF.freeze(a),b&&aS(a,(a,b)=>{a2(b,!0)},!1)),a}var a3={[aM]:function(){aE(2)}};function a4(a){return!(null!==a&&a$(a))||aF.isFrozen(a)}var a5="MapSet",a6="Patches",a7="ArrayMethods",a8={};function a9(a){let b=a8[a];return b||aE(0,a),b}var ba=a=>!!a8[a];function bb(a,b){b&&(a.patchPlugin_=a9(a6),a.patches_=[],a.inversePatches_=[],a.patchListener_=b)}function bc(a){bd(a),a.drafts_.forEach(bf),a.drafts_=null}function bd(a){a===e2&&(e2=a.parent_)}var be=a=>e2={drafts_:[],parent_:e2,immer_:a,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:ba(a5)?a9(a5):void 0,arrayMethodsPlugin_:ba(a7)?a9(a7):void 0};function bf(a){let b=a[aD];0===b.type_||1===b.type_?b.revoke_():b.revoked_=!0}function bg(a,b){b.unfinalizedDrafts_=b.drafts_.length;let c=b.drafts_[0];if(void 0!==a&&a!==c){c[aD].modified_&&(bc(b),aE(4)),aO(a)&&(a=bh(b,a));let{patchPlugin_:d}=b;d&&d.generateReplacementPatches_(c[aD].base_,a,b)}else a=bh(b,c);return function(a,b,c=!1){!a.parent_&&a.immer_.autoFreeze_&&a.canAutoFreeze_&&a2(b,c)}(b,a,!0),bc(b),b.patches_&&b.patchListener_(b.patches_,b.inversePatches_),a!==aB?a:void 0}function bh(a,b){if(a4(b))return b;let c=b[aD];if(!c)return bn(b,a.handledSet_,a);if(!bj(c,a))return b;if(!c.modified_)return c.base_;if(!c.finalized_){let{callbacks_:b}=c;if(b)for(;b.length>0;)b.pop()(a);bm(c,a)}return c.copy_}function bi(a){a.finalized_=!0,a.scope_.unfinalizedDrafts_--}var bj=(a,b)=>a.scope_===b,bk=[];function bl(a,b,c,d){let e=a.copy_||a.base_,f=a.type_;if(void 0!==d&&aV(e,d,f)===b)return void aW(e,d,c,f);if(!a.draftLocations_){let b=a.draftLocations_=new Map;aS(e,(a,c)=>{if(aN(c)){let d=b.get(c)||[];d.push(a),b.set(c,d)}})}for(let d of a.draftLocations_.get(b)??bk)aW(e,d,c,f)}function bm(a,b){if(a.modified_&&!a.finalized_&&(3===a.type_||1===a.type_&&a.allIndicesReassigned_||(a.assigned_?.size??0)>0)){let{patchPlugin_:c}=b;if(c){let d=c.getPath(a);d&&c.generatePatches_(a,d,b)}bi(a)}}function bn(a,b,c){return!c.immer_.autoFreeze_&&c.unfinalizedDrafts_<1||aN(a)||b.has(a)||!aO(a)||a4(a)||(b.add(a),aS(a,(d,e)=>{if(aN(e)){let b=e[aD];bj(b,c)&&(aW(a,d,a0(b),a.type_),bi(b))}else aO(e)&&bn(e,b,c)})),a}var bo={get(a,b){let c;if(b===aD)return a;let d=a.scope_.arrayMethodsPlugin_,e=1===a.type_&&"string"==typeof b;if(e&&d?.isArrayOperationMethod(b))return d.createMethodInterceptor(a,b);let f=a.copy_||a.base_;if(!aU(f,b,a.type_)){var g;let c;return g=a,(c=br(f,b))?aM in c?c[aM]:c.get?.call(g.draft_):void 0}let h=f[b];if(a.finalized_||!aO(h)||e&&a.operationMethod&&d?.isMutatingArrayMethod(a.operationMethod)&&Number.isInteger(c=+b)&&String(c)===b)return h;if(h===bq(a.base_,b)){bt(a);let c=1===a.type_?+b:b,d=bu(a.scope_,h,a,c);return a.copy_[c]=d}return h},has:(a,b)=>b in(a.copy_||a.base_),ownKeys:a=>Reflect.ownKeys(a.copy_||a.base_),set(a,b,c){let d=br(a.copy_||a.base_,b);if(d?.set)return d.set.call(a.draft_,c),!0;if(!a.modified_){let d=bq(a.copy_||a.base_,b),e=d?.[aD];if(e&&e.base_===c)return a.copy_[b]=c,a.assigned_.set(b,!1),!0;if((c===d?0!==c||1/c==1/d:c!=c&&d!=d)&&(void 0!==c||aU(a.base_,b,a.type_)))return!0;bt(a),bs(a)}return!!(a.copy_[b]===c&&(void 0!==c||b in a.copy_)||Number.isNaN(c)&&Number.isNaN(a.copy_[b]))||(a.copy_[b]=c,a.assigned_.set(b,!0),!function(a,b,c){let{scope_:d}=a;if(aN(c)){let e=c[aD];bj(e,d)&&e.callbacks_.push(function(){bt(a),bl(a,c,a0(e),b)})}else aO(c)&&a.callbacks_.push(function(){let e=a.copy_||a.base_;3===a.type_?e.has(c)&&bn(c,d.handledSet_,d):aV(e,b,a.type_)===c&&d.drafts_.length>1&&(a.assigned_.get(b)??!1)===!0&&a.copy_&&bn(aV(a.copy_,b,a.type_),d.handledSet_,d)})}(a,b,c),!0)},deleteProperty:(a,b)=>(bt(a),void 0!==bq(a.base_,b)||b in a.base_?(a.assigned_.set(b,!1),bs(a)):a.assigned_.delete(b),a.copy_&&delete a.copy_[b],!0),getOwnPropertyDescriptor(a,b){let c=a.copy_||a.base_,d=Reflect.getOwnPropertyDescriptor(c,b);return d?{[aL]:!0,[aJ]:1!==a.type_||"length"!==b,[aK]:d[aK],[aM]:c[b]}:d},defineProperty(){aE(11)},getPrototypeOf:a=>aG(a.base_),setPrototypeOf(){aE(12)}},bp={};for(let a in bo){let b=bo[a];bp[a]=function(){let a=arguments;return a[0]=a[0][0],b.apply(this,a)}}function bq(a,b){let c=a[aD];return(c?c.copy_||c.base_:a)[b]}function br(a,b){if(!(b in a))return;let c=aG(a);for(;c;){let a=Object.getOwnPropertyDescriptor(c,b);if(a)return a;c=aG(c)}}function bs(a){!a.modified_&&(a.modified_=!0,a.parent_&&bs(a.parent_))}function bt(a){a.copy_||(a.assigned_=new Map,a.copy_=a1(a.base_,a.scope_.immer_.useStrictShallowCopy_))}function bu(a,b,c,d){let[e,f]=aY(b)?a9(a5).proxyMap_(b,c):aZ(b)?a9(a5).proxySet_(b,c):function(a,b){let c=aX(a),d={type_:+!!c,scope_:b?b.scope_:e2,modified_:!1,finalized_:!1,assigned_:void 0,parent_:b,base_:a,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0},e=d,f=bo;c&&(e=[d],f=bp);let{revoke:g,proxy:h}=Proxy.revocable(e,f);return d.draft_=h,d.revoke_=g,[h,d]}(b,c);if((c?.scope_??e2).drafts_.push(e),f.callbacks_=c?.callbacks_??[],f.key_=d,c&&void 0!==d)c.callbacks_.push(function(a){if(!f||!bj(f,a))return;a.mapSetPlugin_?.fixSetContents(f);let b=a0(f);bl(c,f.draft_??f,b,d),bm(f,a)});else f.callbacks_.push(function(a){a.mapSetPlugin_?.fixSetContents(f);let{patchPlugin_:b}=a;f.modified_&&b&&b.generatePatches_(f,[],a)});return e}function bv(a){return aN(a)||aE(10,a),function a(b){let c;if(!aO(b)||a4(b))return b;let d=b[aD],e=!0;if(d){if(!d.modified_)return d.base_;d.finalized_=!0,c=a1(b,d.scope_.immer_.useStrictShallowCopy_),e=d.scope_.immer_.shouldUseStrictIteration()}else c=a1(b,!0);return aS(c,(b,d)=>{aW(c,b,a(d))},e),d&&(d.finalized_=!1),c}(a)}bp.deleteProperty=function(a,b){return bp.set.call(this,a,b,void 0)},bp.set=function(a,b,c){return bo.set.call(this,a[0],b,c,a[0])};var bw=new class{constructor(a){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(a,b,c)=>{let d;if(a_(a)&&!a_(b)){let c=b;b=a;let d=this;return function(a=c,...e){return d.produce(a,a=>b.call(this,a,...e))}}if(a_(b)||aE(6),void 0===c||a_(c)||aE(7),aO(a)){let e=be(this),f=bu(e,a,void 0),g=!0;try{d=b(f),g=!1}finally{g?bc(e):bd(e)}return bb(e,c),bg(d,e)}if(a&&a$(a))aE(1,a);else{if(void 0===(d=b(a))&&(d=a),d===aB&&(d=void 0),this.autoFreeze_&&a2(d,!0),c){let b=[],e=[];a9(a6).generateReplacementPatches_(a,d,{patches_:b,inversePatches_:e}),c(b,e)}return d}},this.produceWithPatches=(a,b)=>{let c,d;return a_(a)?(b,...c)=>this.produceWithPatches(b,b=>a(b,...c)):[this.produce(a,b,(a,b)=>{c=a,d=b}),c,d]},(a=>"boolean"==typeof a)(a?.autoFreeze)&&this.setAutoFreeze(a.autoFreeze),(a=>"boolean"==typeof a)(a?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(a.useStrictShallowCopy),(a=>"boolean"==typeof a)(a?.useStrictIteration)&&this.setUseStrictIteration(a.useStrictIteration)}createDraft(a){aO(a)||aE(8),aN(a)&&(a=bv(a));let b=be(this),c=bu(b,a,void 0);return c[aD].isManual_=!0,bd(b),c}finishDraft(a,b){let c=a&&a[aD];c&&c.isManual_||aE(9);let{scope_:d}=c;return bb(d,b),bg(void 0,d)}setAutoFreeze(a){this.autoFreeze_=a}setUseStrictShallowCopy(a){this.useStrictShallowCopy_=a}setUseStrictIteration(a){this.useStrictIteration_=a}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(a,b){let c;for(c=b.length-1;c>=0;c--){let d=b[c];if(0===d.path.length&&"replace"===d.op){a=d.value;break}}c>-1&&(b=b.slice(c+1));let d=a9(a6).applyPatches_;return aN(a)?d(a,b):this.produce(a,a=>d(a,b))}}().produce;function bx(a){return`Minified Redux error #${a}; visit https://redux.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `}var by="function"==typeof Symbol&&Symbol.observable||"@@observable",bz=()=>Math.random().toString(36).substring(7).split("").join("."),bA={INIT:`@@redux/INIT${bz()}`,REPLACE:`@@redux/REPLACE${bz()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${bz()}`};function bB(a){if("object"!=typeof a||null===a)return!1;let b=a;for(;null!==Object.getPrototypeOf(b);)b=Object.getPrototypeOf(b);return Object.getPrototypeOf(a)===b||null===Object.getPrototypeOf(a)}function bC(a){let b,c=Object.keys(a),d={};for(let b=0;b<c.length;b++){let e=c[b];"function"==typeof a[e]&&(d[e]=a[e])}let e=Object.keys(d);try{Object.keys(d).forEach(a=>{let b=d[a];if(void 0===b(void 0,{type:bA.INIT}))throw Error(bx(12));if(void 0===b(void 0,{type:bA.PROBE_UNKNOWN_ACTION()}))throw Error(bx(13))})}catch(a){b=a}return function(a={},c){if(b)throw b;let f=!1,g={};for(let b=0;b<e.length;b++){let h=e[b],i=d[h],j=a[h],k=i(j,c);if(void 0===k)throw c&&c.type,Error(bx(14));g[h]=k,f=f||k!==j}return(f=f||e.length!==Object.keys(a).length)?g:a}}function bD(...a){return 0===a.length?a=>a:1===a.length?a[0]:a.reduce((a,b)=>(...c)=>a(b(...c)))}function bE(a){return bB(a)&&"type"in a&&"string"==typeof a.type}function bF(a){return({dispatch:b,getState:c})=>d=>e=>"function"==typeof e?e(b,c,a):d(e)}var bG=bF(),bH="u">typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?bD:bD.apply(null,arguments)};function bI(a,b){function c(...d){if(b){let c=b(...d);if(!c)throw Error(cn(0));return{type:a,payload:c.payload,..."meta"in c&&{meta:c.meta},..."error"in c&&{error:c.error}}}return{type:a,payload:d[0]}}return c.toString=()=>`${a}`,c.type=a,c.match=b=>bE(b)&&b.type===a,c}"u">typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var bJ=class a extends Array{constructor(...b){super(...b),Object.setPrototypeOf(this,a.prototype)}static get[Symbol.species](){return a}concat(...a){return super.concat.apply(this,a)}prepend(...b){return 1===b.length&&Array.isArray(b[0])?new a(...b[0].concat(this)):new a(...b.concat(this))}};function bK(a){return aO(a)?bw(a,()=>{}):a}function bL(a,b,c){return a.has(b)?a.get(b):a.set(b,c(b)).get(b)}var bM="RTK_autoBatch",bN=()=>a=>({payload:a,meta:{[bM]:!0}}),bO=a=>b=>{setTimeout(b,a)},bP=(a={type:"raf"})=>b=>(...c)=>{let d,e=b(...c),f=!0,g=!1,h=!1,i=new Set,j="tick"===a.type?queueMicrotask:"raf"===a.type?"u">typeof window&&window.requestAnimationFrame?(d=window.requestAnimationFrame,a=>{let b=!1,c=()=>{b||(b=!0,cancelAnimationFrame(e),clearTimeout(f),a())},e=d(c),f=setTimeout(c,100)}):bO(10):"callback"===a.type?a.queueNotification:bO(a.timeout),k=()=>{h=!1,g&&(g=!1,i.forEach(a=>a()))};return Object.assign({},e,{subscribe(a){let b=e.subscribe(()=>f&&a());return i.add(a),()=>{b(),i.delete(a)}},dispatch(a){try{return(g=!(f=!a?.meta?.[bM]))&&!h&&(h=!0,j(k)),e.dispatch(a)}finally{f=!0}}})};function bQ(a){let b,c={},d=[],e={addCase(a,b){let d="string"==typeof a?a:a.type;if(!d)throw Error(cn(28));if(d in c)throw Error(cn(29));return c[d]=b,e},addAsyncThunk:(a,b)=>(b.pending&&(c[a.pending.type]=b.pending),b.rejected&&(c[a.rejected.type]=b.rejected),b.fulfilled&&(c[a.fulfilled.type]=b.fulfilled),b.settled&&d.push({matcher:a.settled,reducer:b.settled}),e),addMatcher:(a,b)=>(d.push({matcher:a,reducer:b}),e),addDefaultCase:a=>(b=a,e)};return a(e),[c,d,b]}var bR=Symbol.for("rtk-slice-createasyncthunk"),bS=((e1=bS||{}).reducer="reducer",e1.reducerWithPrepare="reducerWithPrepare",e1.asyncThunk="asyncThunk",e1),bT=function({creators:a}={}){let b=a?.asyncThunk?.[bR];return function(a){let c,{name:d,reducerPath:e=d}=a;if(!d)throw Error(cn(11));let f=("function"==typeof a.reducers?a.reducers(function(){function a(a,b){return{_reducerDefinitionType:"asyncThunk",payloadCreator:a,...b}}return a.withTypes=()=>a,{reducer:a=>Object.assign({[a.name]:(...b)=>a(...b)}[a.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(a,b)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:a,reducer:b}),asyncThunk:a}}()):a.reducers)||{},g=Object.keys(f),h={},i={},j={},k=[],l={addCase(a,b){let c="string"==typeof a?a:a.type;if(!c)throw Error(cn(12));if(c in i)throw Error(cn(13));return i[c]=b,l},addMatcher:(a,b)=>(k.push({matcher:a,reducer:b}),l),exposeAction:(a,b)=>(j[a]=b,l),exposeCaseReducer:(a,b)=>(h[a]=b,l)};function m(){let[b={},c=[],d]="function"==typeof a.extraReducers?bQ(a.extraReducers):[a.extraReducers],e={...b,...i};return function(a,b){let c,[d,e,f]=bQ(b);if("function"==typeof a)c=()=>bK(a());else{let b=bK(a);c=()=>b}function g(a=c(),b){let h=[d[b.type],...e.filter(({matcher:a})=>a(b)).map(({reducer:a})=>a)];return 0===h.filter(a=>!!a).length&&(h=[f]),h.reduce((a,c)=>{if(c)if(aN(a)){let d=c(a,b);return void 0===d?a:d}else{if(aO(a))return bw(a,a=>c(a,b));let d=c(a,b);if(void 0===d){if(null===a)return a;throw Error("A case reducer on a non-draftable value must not return undefined")}return d}return a},a)}return g.getInitialState=c,g}(a.initialState,a=>{for(let b in e)a.addCase(b,e[b]);for(let b of k)a.addMatcher(b.matcher,b.reducer);for(let b of c)a.addMatcher(b.matcher,b.reducer);d&&a.addDefaultCase(d)})}g.forEach(c=>{let e=f[c],g={reducerName:c,type:`${d}/${c}`,createNotation:"function"==typeof a.reducers};"asyncThunk"===e._reducerDefinitionType?function({type:a,reducerName:b},c,d,e){if(!e)throw Error(cn(18));let{payloadCreator:f,fulfilled:g,pending:h,rejected:i,settled:j,options:k}=c,l=e(a,f,k);d.exposeAction(b,l),g&&d.addCase(l.fulfilled,g),h&&d.addCase(l.pending,h),i&&d.addCase(l.rejected,i),j&&d.addMatcher(l.settled,j),d.exposeCaseReducer(b,{fulfilled:g||bU,pending:h||bU,rejected:i||bU,settled:j||bU})}(g,e,l,b):function({type:a,reducerName:b,createNotation:c},d,e){let f,g;if("reducer"in d){if(c&&"reducerWithPrepare"!==d._reducerDefinitionType)throw Error(cn(17));f=d.reducer,g=d.prepare}else f=d;e.addCase(a,f).exposeCaseReducer(b,f).exposeAction(b,g?bI(a,g):bI(a))}(g,e,l)});let n=a=>a,o=new Map,p=new WeakMap;function q(a,b){return c||(c=m()),c(a,b)}function r(){return c||(c=m()),c.getInitialState()}function s(b,c=!1){function d(a){let e=a[b];return void 0===e&&c&&(e=bL(p,d,r)),e}function e(b=n){let d=bL(o,c,()=>new WeakMap);return bL(d,b,()=>{let d={};for(let[e,f]of Object.entries(a.selectors??{}))d[e]=function(a,b,c,d){function e(f,...g){let h=b(f);return void 0===h&&d&&(h=c()),a(h,...g)}return e.unwrapped=a,e}(f,b,()=>bL(p,b,r),c);return d})}return{reducerPath:b,getSelectors:e,get selectors(){return e(d)},selectSlice:d}}let t={name:d,reducer:q,actions:j,caseReducers:h,getInitialState:r,...s(e),injectInto(a,{reducerPath:b,...c}={}){let d=b??e;return a.inject({reducerPath:d,reducer:q},c),{...t,...s(d,!0)}}};return t}}();function bU(){}var bV="listener",bW="completed",bX="cancelled",bY=`task-${bX}`,bZ=`task-${bW}`,b$=`${bV}-${bX}`,b_=`${bV}-${bW}`,b0=class{constructor(a){this.code=a,this.message=`task ${bX} (reason: ${a})`}code;name="TaskAbortError";message},b1=(a,b)=>{if("function"!=typeof a)throw TypeError(cn(32))},b2=()=>{},b3=(a,b=b2)=>(a.catch(b),a),b4=(a,b)=>(a.addEventListener("abort",b,{once:!0}),()=>a.removeEventListener("abort",b)),b5=a=>{if(a.aborted)throw new b0(a.reason)};function b6(a,b){let c=b2;return new Promise((d,e)=>{let f=()=>e(new b0(a.reason));a.aborted?f():(c=b4(a,f),b.finally(()=>c()).then(d,e))}).finally(()=>{c=b2})}var b7=async(a,b)=>{try{await Promise.resolve();let b=await a();return{status:"ok",value:b}}catch(a){return{status:a instanceof b0?"cancelled":"rejected",error:a}}finally{b?.()}},b8=a=>b=>b3(b6(a,b).then(b=>(b5(a),b))),b9=a=>{let b=b8(a);return a=>b(new Promise(b=>setTimeout(b,a)))},{assign:ca}=Object,cb={},cc="listenerMiddleware",cd=a=>{let{type:b,actionCreator:c,matcher:d,predicate:e,effect:f}=a;if(b)e=bI(b).match;else if(c)b=c.type,e=c.match;else if(d)e=d;else if(e);else throw Error(cn(21));return b1(f,"options.listener"),{predicate:e,type:b,effect:f}},ce=ca(a=>{let{type:b,predicate:c,effect:d}=cd(a);return{id:((a=21)=>{let b="",c=a;for(;c--;)b+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return b})(),effect:d,type:b,predicate:c,pending:new Set,unsubscribe:()=>{throw Error(cn(22))}}},{withTypes:()=>ce}),cf=(a,b)=>{let{type:c,effect:d,predicate:e}=cd(b);return Array.from(a.values()).find(a=>("string"==typeof c?a.type===c:a.predicate===e)&&a.effect===d)},cg=a=>{a.pending.forEach(a=>{a.abort(b$)})},ch=(a,b,c)=>{try{a(b,c)}catch(a){setTimeout(()=>{throw a},0)}},ci=ca(bI(`${cc}/add`),{withTypes:()=>ci}),cj=bI(`${cc}/removeAll`),ck=ca(bI(`${cc}/remove`),{withTypes:()=>ck}),cl=(...a)=>{console.error(`${cc}/error`,...a)},cm=(a={})=>{let b=new Map,c=new Map,{extra:d,onError:e=cl}=a;b1(e,"onError");let f=a=>{var c;return(c=cf(b,a)??ce(a)).unsubscribe=()=>b.delete(c.id),b.set(c.id,c),a=>{c.unsubscribe(),a?.cancelActive&&cg(c)}};ca(f,{withTypes:()=>f});let g=a=>{let c=cf(b,a);return c&&(c.unsubscribe(),a.cancelActive&&cg(c)),!!c};ca(g,{withTypes:()=>g});let h=async(a,g,h,i)=>{var j,k;let l,m=new AbortController,n=(j=m.signal,l=async(a,b)=>{b5(j);let c=()=>{},d=[new Promise((b,d)=>{let e=f({predicate:a,effect:(a,c)=>{c.unsubscribe(),b([a,c.getState(),c.getOriginalState()])}});c=()=>{e(),d()}})];null!=b&&d.push(new Promise(a=>setTimeout(a,b,null)));try{let a=await b6(j,Promise.race(d));return b5(j),a}finally{c()}},(a,b)=>b3(l(a,b))),o=[];try{let e;a.pending.add(m),e=c.get(a)??0,c.set(a,e+1),await Promise.resolve(a.effect(g,ca({},h,{getOriginalState:i,condition:(a,b)=>n(a,b).then(Boolean),take:n,delay:b9(m.signal),pause:b8(m.signal),extra:d,signal:m.signal,fork:(k=m.signal,(a,b)=>{b1(a,"taskExecutor");let c=new AbortController;b4(k,()=>c.abort(k.reason));let d=b7(async()=>{b5(k),b5(c.signal);let b=await a({pause:b8(c.signal),delay:b9(c.signal),signal:c.signal});return b5(c.signal),b},()=>c.abort(bZ));return b?.autoJoin&&o.push(d.catch(b2)),{result:b8(k)(d),cancel(){c.abort(bY)}}}),unsubscribe:a.unsubscribe,subscribe:()=>{b.set(a.id,a)},cancelActiveListeners:()=>{a.pending.forEach((a,b,c)=>{a!==m&&(a.abort(b$),c.delete(a))})},cancel:()=>{m.abort(b$),a.pending.delete(m)},throwIfCancelled:()=>{b5(m.signal)}})))}catch(a){a instanceof b0||ch(e,a,{raisedBy:"effect"})}finally{let b;await Promise.all(o),m.abort(b_),1===(b=c.get(a)??1)?c.delete(a):c.set(a,b-1),a.pending.delete(m)}},i=()=>{for(let a of c.keys())cg(a);b.clear()};return{middleware:a=>c=>d=>{let j;if(!bE(d))return c(d);if(ci.match(d))return f(d.payload);if(cj.match(d))return void i();if(ck.match(d))return g(d.payload);let k=a.getState(),l=()=>{if(k===cb)throw Error(cn(23));return k};try{if(j=c(d),b.size>0){let c=a.getState();for(let f of Array.from(b.values())){let b=!1;try{b=f.predicate(d,c,k)}catch(a){b=!1,ch(e,a,{raisedBy:"predicate"})}b&&h(f,d,a,l)}}}finally{k=cb}return j},startListening:f,stopListening:g,clearListeners:i}};function cn(a){return`Minified Redux Toolkit error #${a}; visit https://redux-toolkit.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `}var co=(a,b)=>{if(b&&Array.isArray(a)){var c=Number.parseInt(b,10);if(!X(c))return a[c]}},cp=bT({name:"options",initialState:{chartName:"",tooltipPayloadSearcher:()=>void 0,eventEmitter:void 0,defaultTooltipEventType:"axis"},reducers:{createEventEmitter:a=>{null==a.eventEmitter&&(a.eventEmitter=Symbol("rechartsEventEmitter"))}}}),cq=cp.reducer,{createEventEmitter:cr}=cp.actions;c(34733);var cs={notify(){},get:()=>[]},ct="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement,cu="u">typeof navigator&&"ReactNative"===navigator.product,cv=ct||cu?M.useLayoutEffect:M.useEffect;function cw(a,b){return a===b?0!==a||0!==b||1/a==1/b:a!=a&&b!=b}var cx=Symbol.for("react-redux-context"),cy="u">typeof globalThis?globalThis:{},cz=function(){if(!M.createContext)return{};let a=cy[cx]??=new Map,b=a.get(M.createContext);return b||(b=M.createContext(null),a.set(M.createContext,b)),b}(),cA=function(a){let{children:b,context:c,serverState:d,store:e}=a,f=M.useMemo(()=>{let a=function(a){let b,c=cs,d=0,e=!1;function f(){i.onStateChange&&i.onStateChange()}function g(){if(d++,!b){let d,e;b=a.subscribe(f),d=null,e=null,c={clear(){d=null,e=null},notify(){let a=d;for(;a;)a.callback(),a=a.next},get(){let a=[],b=d;for(;b;)a.push(b),b=b.next;return a},subscribe(a){let b=!0,c=e={callback:a,next:null,prev:e};return c.prev?c.prev.next=c:d=c,function(){b&&null!==d&&(b=!1,c.next?c.next.prev=c.prev:e=c.prev,c.prev?c.prev.next=c.next:d=c.next)}}}}}function h(){d--,b&&0===d&&(b(),b=void 0,c.clear(),c=cs)}let i={addNestedSub:function(a){g();let b=c.subscribe(a),d=!1;return()=>{d||(d=!0,b(),h())}},notifyNestedSubs:function(){c.notify()},handleChangeWrapper:f,isSubscribed:function(){return e},trySubscribe:function(){e||(e=!0,g())},tryUnsubscribe:function(){e&&(e=!1,h())},getListeners:()=>c};return i}(e);return{store:e,subscription:a,getServerState:d?()=>d:void 0}},[e,d]),g=M.useMemo(()=>e.getState(),[e]);return cv(()=>{let{subscription:a}=f;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),g!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[f,g]),M.createElement((c||cz).Provider,{value:f},b)},cB=Symbol.for("immer-nothing"),cC=Symbol.for("immer-draftable"),cD=Symbol.for("immer-state");function cE(a){throw Error(`[Immer] minified error nr: ${a}. Full error at: https://bit.ly/3cXEKWf`)}var cF=Object.getPrototypeOf;function cG(a){return!!a&&!!a[cD]}function cH(a){return!!a&&(cK(a)||Array.isArray(a)||!!a[cC]||!!a.constructor?.[cC]||cP(a)||cQ(a))}var cI=Object.prototype.constructor.toString(),cJ=new WeakMap;function cK(a){if(!a||"object"!=typeof a)return!1;let b=Object.getPrototypeOf(a);if(null===b||b===Object.prototype)return!0;let c=Object.hasOwnProperty.call(b,"constructor")&&b.constructor;if(c===Object)return!0;if("function"!=typeof c)return!1;let d=cJ.get(c);return void 0===d&&(d=Function.toString.call(c),cJ.set(c,d)),d===cI}function cL(a,b,c=!0){0===cM(a)?(c?Reflect.ownKeys(a):Object.keys(a)).forEach(c=>{b(c,a[c],a)}):a.forEach((c,d)=>b(d,c,a))}function cM(a){let b=a[cD];return b?b.type_:Array.isArray(a)?1:cP(a)?2:3*!!cQ(a)}function cN(a,b){return 2===cM(a)?a.has(b):Object.prototype.hasOwnProperty.call(a,b)}function cO(a,b,c){let d=cM(a);2===d?a.set(b,c):3===d?a.add(c):a[b]=c}function cP(a){return a instanceof Map}function cQ(a){return a instanceof Set}function cR(a){return a.copy_||a.base_}function cS(a,b){if(cP(a))return new Map(a);if(cQ(a))return new Set(a);if(Array.isArray(a))return Array.prototype.slice.call(a);let c=cK(a);if(!0!==b&&("class_only"!==b||c)){let b=cF(a);return null!==b&&c?{...a}:Object.assign(Object.create(b),a)}{let b=Object.getOwnPropertyDescriptors(a);delete b[cD];let c=Reflect.ownKeys(b);for(let d=0;d<c.length;d++){let e=c[d],f=b[e];!1===f.writable&&(f.writable=!0,f.configurable=!0),(f.get||f.set)&&(b[e]={configurable:!0,writable:!0,enumerable:f.enumerable,value:a[e]})}return Object.create(cF(a),b)}}function cT(a,b=!1){return cV(a)||cG(a)||!cH(a)||(cM(a)>1&&Object.defineProperties(a,{set:cU,add:cU,clear:cU,delete:cU}),Object.freeze(a),b&&Object.values(a).forEach(a=>cT(a,!0))),a}var cU={value:function(){cE(2)}};function cV(a){return null===a||"object"!=typeof a||Object.isFrozen(a)}var cW={};function cX(a){let b=cW[a];return b||cE(0,a),b}function cY(a,b){b&&(cX("Patches"),a.patches_=[],a.inversePatches_=[],a.patchListener_=b)}function cZ(a){c$(a),a.drafts_.forEach(c0),a.drafts_=null}function c$(a){a===e3&&(e3=a.parent_)}function c_(a){return e3={drafts_:[],parent_:e3,immer_:a,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function c0(a){let b=a[cD];0===b.type_||1===b.type_?b.revoke_():b.revoked_=!0}function c1(a,b){b.unfinalizedDrafts_=b.drafts_.length;let c=b.drafts_[0];return void 0!==a&&a!==c?(c[cD].modified_&&(cZ(b),cE(4)),cH(a)&&(a=c2(b,a),b.parent_||c4(b,a)),b.patches_&&cX("Patches").generateReplacementPatches_(c[cD].base_,a,b.patches_,b.inversePatches_)):a=c2(b,c,[]),cZ(b),b.patches_&&b.patchListener_(b.patches_,b.inversePatches_),a!==cB?a:void 0}function c2(a,b,c){if(cV(b))return b;let d=a.immer_.shouldUseStrictIteration(),e=b[cD];if(!e)return cL(b,(d,f)=>c3(a,e,b,d,f,c),d),b;if(e.scope_!==a)return b;if(!e.modified_)return c4(a,e.base_,!0),e.base_;if(!e.finalized_){e.finalized_=!0,e.scope_.unfinalizedDrafts_--;let b=e.copy_,f=b,g=!1;3===e.type_&&(f=new Set(b),b.clear(),g=!0),cL(f,(d,f)=>c3(a,e,b,d,f,c,g),d),c4(a,b,!1),c&&a.patches_&&cX("Patches").generatePatches_(e,c,a.patches_,a.inversePatches_)}return e.copy_}function c3(a,b,c,d,e,f,g){if(null==e||"object"!=typeof e&&!g)return;let h=cV(e);if(!h||g){if(cG(e)){let g=c2(a,e,f&&b&&3!==b.type_&&!cN(b.assigned_,d)?f.concat(d):void 0);if(cO(c,d,g),!cG(g))return;a.canAutoFreeze_=!1}else g&&c.add(e);if(cH(e)&&!h){if(!a.immer_.autoFreeze_&&a.unfinalizedDrafts_<1||b&&b.base_&&b.base_[d]===e&&h)return;c2(a,e),(!b||!b.scope_.parent_)&&"symbol"!=typeof d&&(cP(c)?c.has(d):Object.prototype.propertyIsEnumerable.call(c,d))&&c4(a,e)}}}function c4(a,b,c=!1){!a.parent_&&a.immer_.autoFreeze_&&a.canAutoFreeze_&&cT(b,c)}var c5={get(a,b){if(b===cD)return a;let c=cR(a);if(!cN(c,b)){var d;let e;return d=a,(e=c8(c,b))?"value"in e?e.value:e.get?.call(d.draft_):void 0}let e=c[b];return a.finalized_||!cH(e)?e:e===c7(a.base_,b)?(da(a),a.copy_[b]=dc(e,a)):e},has:(a,b)=>b in cR(a),ownKeys:a=>Reflect.ownKeys(cR(a)),set(a,b,c){let d=c8(cR(a),b);if(d?.set)return d.set.call(a.draft_,c),!0;if(!a.modified_){let d=c7(cR(a),b),e=d?.[cD];if(e&&e.base_===c)return a.copy_[b]=c,a.assigned_[b]=!1,!0;if((c===d?0!==c||1/c==1/d:c!=c&&d!=d)&&(void 0!==c||cN(a.base_,b)))return!0;da(a),c9(a)}return!!(a.copy_[b]===c&&(void 0!==c||b in a.copy_)||Number.isNaN(c)&&Number.isNaN(a.copy_[b]))||(a.copy_[b]=c,a.assigned_[b]=!0,!0)},deleteProperty:(a,b)=>(void 0!==c7(a.base_,b)||b in a.base_?(a.assigned_[b]=!1,da(a),c9(a)):delete a.assigned_[b],a.copy_&&delete a.copy_[b],!0),getOwnPropertyDescriptor(a,b){let c=cR(a),d=Reflect.getOwnPropertyDescriptor(c,b);return d?{writable:!0,configurable:1!==a.type_||"length"!==b,enumerable:d.enumerable,value:c[b]}:d},defineProperty(){cE(11)},getPrototypeOf:a=>cF(a.base_),setPrototypeOf(){cE(12)}},c6={};function c7(a,b){let c=a[cD];return(c?cR(c):a)[b]}function c8(a,b){if(!(b in a))return;let c=cF(a);for(;c;){let a=Object.getOwnPropertyDescriptor(c,b);if(a)return a;c=cF(c)}}function c9(a){!a.modified_&&(a.modified_=!0,a.parent_&&c9(a.parent_))}function da(a){a.copy_||(a.copy_=cS(a.base_,a.scope_.immer_.useStrictShallowCopy_))}cL(c5,(a,b)=>{c6[a]=function(){return arguments[0]=arguments[0][0],b.apply(this,arguments)}}),c6.deleteProperty=function(a,b){return c6.set.call(this,a,b,void 0)},c6.set=function(a,b,c){return c5.set.call(this,a[0],b,c,a[0])};var db=class{constructor(a){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!0,this.produce=(a,b,c)=>{let d;if("function"==typeof a&&"function"!=typeof b){let c=b;b=a;let d=this;return function(a=c,...e){return d.produce(a,a=>b.call(this,a,...e))}}if("function"!=typeof b&&cE(6),void 0!==c&&"function"!=typeof c&&cE(7),cH(a)){let e=c_(this),f=dc(a,void 0),g=!0;try{d=b(f),g=!1}finally{g?cZ(e):c$(e)}return cY(e,c),c1(d,e)}if(a&&"object"==typeof a)cE(1,a);else{if(void 0===(d=b(a))&&(d=a),d===cB&&(d=void 0),this.autoFreeze_&&cT(d,!0),c){let b=[],e=[];cX("Patches").generateReplacementPatches_(a,d,b,e),c(b,e)}return d}},this.produceWithPatches=(a,b)=>{let c,d;return"function"==typeof a?(b,...c)=>this.produceWithPatches(b,b=>a(b,...c)):[this.produce(a,b,(a,b)=>{c=a,d=b}),c,d]},"boolean"==typeof a?.autoFreeze&&this.setAutoFreeze(a.autoFreeze),"boolean"==typeof a?.useStrictShallowCopy&&this.setUseStrictShallowCopy(a.useStrictShallowCopy),"boolean"==typeof a?.useStrictIteration&&this.setUseStrictIteration(a.useStrictIteration)}createDraft(a){var b;cH(a)||cE(8),cG(a)&&(cG(b=a)||cE(10,b),a=function a(b){let c;if(!cH(b)||cV(b))return b;let d=b[cD],e=!0;if(d){if(!d.modified_)return d.base_;d.finalized_=!0,c=cS(b,d.scope_.immer_.useStrictShallowCopy_),e=d.scope_.immer_.shouldUseStrictIteration()}else c=cS(b,!0);return cL(c,(b,d)=>{cO(c,b,a(d))},e),d&&(d.finalized_=!1),c}(b));let c=c_(this),d=dc(a,void 0);return d[cD].isManual_=!0,c$(c),d}finishDraft(a,b){let c=a&&a[cD];c&&c.isManual_||cE(9);let{scope_:d}=c;return cY(d,b),c1(void 0,d)}setAutoFreeze(a){this.autoFreeze_=a}setUseStrictShallowCopy(a){this.useStrictShallowCopy_=a}setUseStrictIteration(a){this.useStrictIteration_=a}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(a,b){let c;for(c=b.length-1;c>=0;c--){let d=b[c];if(0===d.path.length&&"replace"===d.op){a=d.value;break}}c>-1&&(b=b.slice(c+1));let d=cX("Patches").applyPatches_;return cG(a)?d(a,b):this.produce(a,a=>d(a,b))}};function dc(a,b){let c=cP(a)?cX("MapSet").proxyMap_(a,b):cQ(a)?cX("MapSet").proxySet_(a,b):function(a,b){let c=Array.isArray(a),d={type_:+!!c,scope_:b?b.scope_:e3,modified_:!1,finalized_:!1,assigned_:{},parent_:b,base_:a,draft_:null,copy_:null,revoke_:null,isManual_:!1},e=d,f=c5;c&&(e=[d],f=c6);let{revoke:g,proxy:h}=Proxy.revocable(e,f);return d.draft_=h,d.revoke_=g,h}(a,b);return(b?b.scope_:e3).drafts_.push(c),c}new db().produce;var dd={active:!1,index:null,dataKey:void 0,graphicalItemId:void 0,coordinate:void 0},de=bT({name:"tooltip",initialState:{itemInteraction:{click:dd,hover:dd},axisInteraction:{click:dd,hover:dd},keyboardInteraction:dd,syncInteraction:{active:!1,index:null,dataKey:void 0,label:void 0,coordinate:void 0,sourceViewBox:void 0,graphicalItemId:void 0},tooltipItemPayloads:[],settings:{shared:void 0,trigger:"hover",axisId:0,active:!1,defaultIndex:void 0}},reducers:{addTooltipEntrySettings:{reducer(a,b){a.tooltipItemPayloads.push(b.payload)},prepare:bN()},replaceTooltipEntrySettings:{reducer(a,b){var{prev:c,next:d}=b.payload,e=bv(a).tooltipItemPayloads.indexOf(c);e>-1&&(a.tooltipItemPayloads[e]=d)},prepare:bN()},removeTooltipEntrySettings:{reducer(a,b){var c=bv(a).tooltipItemPayloads.indexOf(b.payload);c>-1&&a.tooltipItemPayloads.splice(c,1)},prepare:bN()},setTooltipSettingsState(a,b){a.settings=b.payload},setActiveMouseOverItemIndex(a,b){a.syncInteraction.active=!1,a.syncInteraction.sourceViewBox=void 0,a.keyboardInteraction.active=!1,a.itemInteraction.hover.active=!0,a.itemInteraction.hover.index=b.payload.activeIndex,a.itemInteraction.hover.dataKey=b.payload.activeDataKey,a.itemInteraction.hover.graphicalItemId=b.payload.activeGraphicalItemId,a.itemInteraction.hover.coordinate=b.payload.activeCoordinate},mouseLeaveChart(a){a.itemInteraction.hover.active=!1,a.axisInteraction.hover.active=!1},mouseLeaveItem(a){a.itemInteraction.hover.active=!1},setActiveClickItemIndex(a,b){a.syncInteraction.active=!1,a.syncInteraction.sourceViewBox=void 0,a.itemInteraction.click.active=!0,a.keyboardInteraction.active=!1,a.itemInteraction.click.index=b.payload.activeIndex,a.itemInteraction.click.dataKey=b.payload.activeDataKey,a.itemInteraction.click.graphicalItemId=b.payload.activeGraphicalItemId,a.itemInteraction.click.coordinate=b.payload.activeCoordinate},setMouseOverAxisIndex(a,b){a.syncInteraction.active=!1,a.syncInteraction.sourceViewBox=void 0,a.axisInteraction.hover.active=!0,a.keyboardInteraction.active=!1,a.axisInteraction.hover.index=b.payload.activeIndex,a.axisInteraction.hover.dataKey=b.payload.activeDataKey,a.axisInteraction.hover.coordinate=b.payload.activeCoordinate},setMouseClickAxisIndex(a,b){a.syncInteraction.active=!1,a.syncInteraction.sourceViewBox=void 0,a.keyboardInteraction.active=!1,a.axisInteraction.click.active=!0,a.axisInteraction.click.index=b.payload.activeIndex,a.axisInteraction.click.dataKey=b.payload.activeDataKey,a.axisInteraction.click.coordinate=b.payload.activeCoordinate},setSyncInteraction(a,b){a.syncInteraction=b.payload},setKeyboardInteraction(a,b){a.keyboardInteraction.active=b.payload.active,a.keyboardInteraction.index=b.payload.activeIndex,a.keyboardInteraction.coordinate=b.payload.activeCoordinate}}}),{addTooltipEntrySettings:df,replaceTooltipEntrySettings:dg,removeTooltipEntrySettings:dh,setTooltipSettingsState:di,setActiveMouseOverItemIndex:dj,mouseLeaveItem:dk,mouseLeaveChart:dl,setActiveClickItemIndex:dm,setMouseOverAxisIndex:dn,setMouseClickAxisIndex:dp,setSyncInteraction:dq,setKeyboardInteraction:dr}=de.actions,ds=de.reducer,dt=bT({name:"chartData",initialState:{chartData:void 0,computedData:void 0,dataStartIndex:0,dataEndIndex:0},reducers:{setChartData(a,b){if(a.chartData=b.payload,null==b.payload){a.dataStartIndex=0,a.dataEndIndex=0;return}b.payload.length>0&&a.dataEndIndex!==b.payload.length-1&&(a.dataEndIndex=b.payload.length-1)},setComputedData(a,b){a.computedData=b.payload},setDataStartEndIndexes(a,b){var{startIndex:c,endIndex:d}=b.payload;null!=c&&(a.dataStartIndex=c),null!=d&&(a.dataEndIndex=d)}}}),{setChartData:du,setDataStartEndIndexes:dv,setComputedData:dw}=dt.actions,dx=dt.reducer,dy=bT({name:"chartLayout",initialState:{layoutType:"horizontal",width:0,height:0,margin:{top:5,right:5,bottom:5,left:5},scale:1},reducers:{setLayout(a,b){a.layoutType=b.payload},setChartSize(a,b){a.width=b.payload.width,a.height=b.payload.height},setMargin(a,b){var c,d,e,f;a.margin.top=null!=(c=b.payload.top)?c:0,a.margin.right=null!=(d=b.payload.right)?d:0,a.margin.bottom=null!=(e=b.payload.bottom)?e:0,a.margin.left=null!=(f=b.payload.left)?f:0},setScale(a,b){a.scale=b.payload}}}),{setMargin:dz,setLayout:dA,setChartSize:dB,setScale:dC}=dy.actions,dD=dy.reducer,dE=a=>Array.isArray(a)?a:[a],dF=0,dG=class{revision=dF;_value;_lastValue;_isEqual=dH;constructor(a,b=dH){this._value=this._lastValue=a,this._isEqual=b}get value(){return this._value}set value(a){this.value!==a&&(this._value=a,this.revision=++dF)}};function dH(a,b){return a===b}function dI(a){return a instanceof dG||console.warn("Not a valid cell! ",a),a.value}var dJ=(a,b)=>!1;function dK(){return function(a=dH){return new dG(null,a)}(dJ)}var dL=a=>{let b=a.collectionTag;null===b&&(b=a.collectionTag=dK()),dI(b)};Symbol();var dM=0,dN=Object.getPrototypeOf({}),dO=class{constructor(a){this.value=a,this.value=a,this.tag.value=a}proxy=new Proxy(this,dP);tag=dK();tags={};children={};collectionTag=null;id=dM++},dP={get:(a,b)=>(function(){let{value:c}=a,d=Reflect.get(c,b);if("symbol"==typeof b||b in dN)return d;if("object"==typeof d&&null!==d){var e;let c=a.children[b];return void 0===c&&(c=a.children[b]=Array.isArray(e=d)?new dQ(e):new dO(e)),c.tag&&dI(c.tag),c.proxy}{let c=a.tags[b];return void 0===c&&((c=a.tags[b]=dK()).value=d),dI(c),d}})(),ownKeys:a=>(dL(a),Reflect.ownKeys(a.value)),getOwnPropertyDescriptor:(a,b)=>Reflect.getOwnPropertyDescriptor(a.value,b),has:(a,b)=>Reflect.has(a.value,b)},dQ=class{constructor(a){this.value=a,this.value=a,this.tag.value=a}proxy=new Proxy([this],dR);tag=dK();tags={};children={};collectionTag=null;id=dM++},dR={get:([a],b)=>("length"===b&&dL(a),dP.get(a,b)),ownKeys:([a])=>dP.ownKeys(a),getOwnPropertyDescriptor:([a],b)=>dP.getOwnPropertyDescriptor(a,b),has:([a],b)=>dP.has(a,b)},dS="u">typeof WeakRef?WeakRef:class{constructor(a){this.value=a}deref(){return this.value}};function dT(){return{s:0,v:void 0,o:null,p:null}}function dU(a,b={}){let c,d=dT(),{resultEqualityCheck:e}=b,f=0;function g(){let b,g=d,{length:h}=arguments;for(let a=0;a<h;a++){let b=arguments[a];if("function"==typeof b||"object"==typeof b&&null!==b){let a=g.o;null===a&&(g.o=a=new WeakMap);let c=a.get(b);void 0===c?(g=dT(),a.set(b,g)):g=c}else{let a=g.p;null===a&&(g.p=a=new Map);let c=a.get(b);void 0===c?(g=dT(),a.set(b,g)):g=c}}let i=g;if(1===g.s)b=g.v;else if(b=a.apply(null,arguments),f++,e){let a=c?.deref?.()??c;null!=a&&e(a,b)&&(b=a,0!==f&&f--),c="object"==typeof b&&null!==b||"function"==typeof b?new dS(b):b}return i.s=1,i.v=b,b}return g.clearCache=()=>{d=dT(),g.resetResultsCount()},g.resultsCount=()=>f,g.resetResultsCount=()=>{f=0},g}var dV=function(a,...b){let c="function"==typeof a?{memoize:a,memoizeOptions:b}:a,d=(...a)=>{let b,d,e=0,f=0,g={},h=a.pop();"object"==typeof h&&(g=h,h=a.pop()),function(a,b=`expected a function, instead received ${typeof a}`){if("function"!=typeof a)throw TypeError(b)}(h,`createSelector expects an output function after the inputs, but received: [${typeof h}]`);let{memoize:i,memoizeOptions:j=[],argsMemoize:k=dU,argsMemoizeOptions:l=[],devModeChecks:m={}}={...c,...g},n=dE(j),o=dE(l),p=(!function(a,b="expected all items to be functions, instead received the following types: "){if(!a.every(a=>"function"==typeof a)){let c=a.map(a=>"function"==typeof a?`function ${a.name||"unnamed"}()`:typeof a).join(", ");throw TypeError(`${b}[${c}]`)}}(b=Array.isArray(a[0])?a[0]:a,"createSelector expects all input-selectors to be functions, but received the following types: "),b),q=i(function(){return e++,h.apply(null,arguments)},...n);return Object.assign(k(function(){f++;let a=function(a,b){let c=[],{length:d}=a;for(let e=0;e<d;e++)c.push(a[e].apply(null,b));return c}(p,arguments);return d=q.apply(null,a)},...o),{resultFunc:h,memoizedResultFunc:q,dependencies:p,dependencyRecomputations:()=>f,resetDependencyRecomputations:()=>{f=0},lastResult:()=>d,recomputations:()=>e,resetRecomputations:()=>{e=0},memoize:i,argsMemoize:k})};return Object.assign(d,{withTypes:()=>d}),d}(dU),dW=Object.assign((a,b=dV)=>{!function(a,b=`expected an object, instead received ${typeof a}`){if("object"!=typeof a)throw TypeError(b)}(a,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof a}`);let c=Object.keys(a);return b(c.map(b=>a[b]),(...a)=>a.reduce((a,b,d)=>(a[c[d]]=b,a),{}))},{withTypes:()=>dW}),dX=c(20999),dY=(0,M.createContext)(null),dZ=a=>a,d$=()=>{var a=(0,M.useContext)(dY);return a?a.store.dispatch:dZ},d_=()=>{},d0=()=>d_,d1=(a,b)=>a===b;function d2(a){var b=(0,M.useContext)(dY),c=(0,M.useMemo)(()=>b?b=>{if(null!=b)return a(b)}:d_,[b,a]);return(0,dX.useSyncExternalStoreWithSelector)(b?b.subscription.addNestedSub:d0,b?b.store.getState:d_,b?b.store.getState:d_,c,d1)}var d3=c(26613),d4=c.n(d3),d5=a=>a.legend.settings;function d6(a,b){if((e=a.length)>1)for(var c,d,e,f=1,g=a[b[0]],h=g.length;f<e;++f)for(d=g,g=a[b[f]],c=0;c<h;++c)g[c][1]+=g[c][0]=isNaN(d[c][1])?d[c][0]:d[c][1]}function d7(a){return"object"==typeof a&&"length"in a?a:Array.from(a)}function d8(a){return function(){return a}}function d9(a){for(var b=a.length,c=Array(b);--b>=0;)c[b]=b;return c}function ea(a,b){return a[b]}function eb(a){let b=[];return b.key=a,b}function ec(a,b,c){return Array.isArray(a)&&a&&b+c!==0?a.slice(b,c+1):a}function ed(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function ee(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?ed(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):ed(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function ef(a,b,c){return null==a||null==b?c:$(b)?T()(a,b,c):"function"==typeof b?b(a):c}dV([a=>a.legend.payload,d5],(a,b)=>{var{itemSorter:c}=b,d=a.flat(1);return c?d4()(d,c):d}),Array.prototype.slice;var eg=(a,b)=>"horizontal"===a&&"xAxis"===b||"vertical"===a&&"yAxis"===b||"centric"===a&&"angleAxis"===b||"radial"===a&&"radiusAxis"===b,eh=(a,b,c,d)=>{if(d)return a.map(a=>a.coordinate);var e,f,g=a.map(a=>(a.coordinate===b&&(e=!0),a.coordinate===c&&(f=!0),a.coordinate));return e||g.push(b),f||g.push(c),g},ei=(a,b,c)=>{if(!a)return null;var{duplicateDomain:d,type:e,range:f,scale:g,realScaleType:h,isCategorical:i,categoricalDomain:j,tickCount:k,ticks:l,niceTicks:m,axisType:n}=a;if(!g)return null;var o="scaleBand"===h&&g.bandwidth?g.bandwidth()/2:2,p=(b||c)&&"category"===e&&g.bandwidth?g.bandwidth()/o:0;return(p="angleAxis"===n&&f&&f.length>=2?2*W(f[0]-f[1])*p:p,b&&(l||m))?(l||m||[]).map((a,b)=>{var c=d?d.indexOf(a):a,e=g.map(c);return ar(e)?{coordinate:e+p,value:a,offset:p,index:b}:null}).filter(ag):i&&j?j.map((a,b)=>{var c=g.map(a);return ar(c)?{coordinate:c+p,value:a,index:b,offset:p}:null}).filter(ag):g.ticks&&!c&&null!=k?g.ticks(k).map((a,b)=>{var c=g.map(a);return ar(c)?{coordinate:c+p,value:a,index:b,offset:p}:null}).filter(ag):g.domain().map((a,b)=>{var c=g.map(a);return ar(c)?{coordinate:c+p,value:d?d[a]:a,index:b,offset:p}:null}).filter(ag)},ej={sign:a=>{var b,c=a.length;if(!(c<=0)){var d=null==(b=a[0])?void 0:b.length;if(null!=d&&!(d<=0))for(var e=0;e<d;++e)for(var f=0,g=0,h=0;h<c;++h){var i=a[h],j=null==i?void 0:i[e];if(null!=j){var k=j[1],l=j[0],m=X(k)?l:k;m>=0?(j[0]=f,f+=m,j[1]=f):(j[0]=g,g+=m,j[1]=g)}}}},expand:function(a,b){if((d=a.length)>0){for(var c,d,e,f=0,g=a[0].length;f<g;++f){for(e=c=0;c<d;++c)e+=a[c][f][1]||0;if(e)for(c=0;c<d;++c)a[c][f][1]/=e}d6(a,b)}},none:d6,silhouette:function(a,b){if((c=a.length)>0){for(var c,d=0,e=a[b[0]],f=e.length;d<f;++d){for(var g=0,h=0;g<c;++g)h+=a[g][d][1]||0;e[d][1]+=e[d][0]=-h/2}d6(a,b)}},wiggle:function(a,b){if((e=a.length)>0&&(d=(c=a[b[0]]).length)>0){for(var c,d,e,f=0,g=1;g<d;++g){for(var h=0,i=0,j=0;h<e;++h){for(var k=a[b[h]],l=k[g][1]||0,m=(l-(k[g-1][1]||0))/2,n=0;n<h;++n){var o=a[b[n]];m+=(o[g][1]||0)-(o[g-1][1]||0)}i+=l,j+=m*l}c[g-1][1]+=c[g-1][0]=f,i&&(f-=j/i)}c[g-1][1]+=c[g-1][0]=f,d6(a,b)}},positive:a=>{var b,c=a.length;if(!(c<=0)){var d=null==(b=a[0])?void 0:b.length;if(null!=d&&!(d<=0))for(var e=0;e<d;++e)for(var f=0,g=0;g<c;++g){var h=a[g],i=null==h?void 0:h[e];if(null!=i){var j=X(i[1])?i[0]:i[1];j>=0?(i[0]=f,f+=j,i[1]=f):(i[0]=0,i[1]=0)}}}}};function ek(a){return null==a?void 0:String(a)}function el(a){var{axis:b,ticks:c,bandSize:d,entry:e,index:f,dataKey:g}=a;if("category"===b.type){if(!b.allowDuplicatedCategory&&b.dataKey&&null!=e[b.dataKey]){var h=ae(c,"value",e[b.dataKey]);if(h)return h.coordinate+d/2}return null!=c&&c[f]?c[f].coordinate+d/2:null}var i=ef(e,null==g?b.dataKey:g),j=b.scale.map(i);return Z(j)?j:null}var em=a=>{var{axis:b,ticks:c,offset:d,bandSize:e,entry:f,index:g}=a;if("category"===b.type)return c[g]?c[g].coordinate+d:null;var h=ef(f,b.dataKey,b.scale.domain()[g]);if(null==h)return null;var i=b.scale.map(h);return Z(i)?i-e/2+d:null},en=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,eo=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,ep=(a,b,c)=>{if(a&&a.scale&&a.scale.bandwidth){var d=a.scale.bandwidth();if(!c||d>0)return d}if(a&&b&&b.length>=2){for(var e=d4()(b,a=>a.coordinate),f=1/0,g=1,h=e.length;g<h;g++){var i=e[g],j=e[g-1];f=Math.min(((null==i?void 0:i.coordinate)||0)-((null==j?void 0:j.coordinate)||0),f)}return f===1/0?0:f}return c?void 0:0};function eq(a){var{tooltipEntrySettings:b,dataKey:c,payload:d,value:e,name:f}=a;return ee(ee({},b),{},{dataKey:c,payload:d,value:e,name:f})}function er(a,b){return a?String(a):"string"==typeof b?b:void 0}var es=a=>a.layout.width,et=a=>a.layout.height,eu=a=>a.layout.scale,ev=a=>a.layout.margin,ew=dV(a=>a.cartesianAxis.xAxis,a=>Object.values(a)),ex=dV(a=>a.cartesianAxis.yAxis,a=>Object.values(a)),ey="data-recharts-item-index",ez="data-recharts-item-id";function eA(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function eB(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?eA(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):eA(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var eC=dV([es,et,ev,a=>a.brush.height,function(a){return ex(a).reduce((a,b)=>"left"!==b.orientation||b.mirror||b.hide?a:a+("number"==typeof b.width?b.width:60),0)},function(a){return ex(a).reduce((a,b)=>"right"!==b.orientation||b.mirror||b.hide?a:a+("number"==typeof b.width?b.width:60),0)},function(a){return ew(a).reduce((a,b)=>"top"!==b.orientation||b.mirror||b.hide?a:a+b.height,0)},function(a){return ew(a).reduce((a,b)=>"bottom"!==b.orientation||b.mirror||b.hide?a:a+b.height,0)},d5,a=>a.legend.size],(a,b,c,d,e,f,g,h,i,j)=>{var k={left:(c.left||0)+e,right:(c.right||0)+f},l=eB(eB({},{top:(c.top||0)+g,bottom:(c.bottom||0)+h}),k),m=l.bottom;l.bottom+=d;var n=a-(l=((a,b,c)=>{if(b&&c){var{width:d,height:e}=c,{align:f,verticalAlign:g,layout:h}=b;if(("vertical"===h||"horizontal"===h&&"middle"===g)&&"center"!==f&&Z(a[f]))return ee(ee({},a),{},{[f]:a[f]+(d||0)});if(("horizontal"===h||"vertical"===h&&"center"===f)&&"middle"!==g&&Z(a[g]))return ee(ee({},a),{},{[g]:a[g]+(e||0)})}return a})(l,i,j)).left-l.right,o=b-l.top-l.bottom;return eB(eB({brushBottom:m},l),{},{width:Math.max(n,0),height:Math.max(o,0)})}),eD=dV(eC,a=>({x:a.left,y:a.top,width:a.width,height:a.height})),eE=dV(es,et,(a,b)=>({x:0,y:0,width:a,height:b})),eF=(0,M.createContext)(null),eG=()=>null!=(0,M.useContext)(eF),eH=a=>a.brush,eI=dV([eH,eC,ev],(a,b,c)=>({height:a.height,x:Z(a.x)?a.x:b.left,y:Z(a.y)?a.y:b.top+b.height+b.brushBottom-((null==c?void 0:c.bottom)||0),width:Z(a.width)?a.width:b.width}));function eJ(a){if(a)return{x:a.x,y:a.y,upperWidth:"upperWidth"in a?a.upperWidth:a.width,lowerWidth:"lowerWidth"in a?a.lowerWidth:a.width,width:a.width,height:a.height}}var eK=()=>{var a,b=eG(),c=d2(eD),d=d2(eI),e=null==(a=d2(eH))?void 0:a.padding;return b&&d&&e?{width:d.width-e.left-e.right,height:d.height-e.top-e.bottom,x:e.left,y:e.top}:c},eL={top:0,bottom:0,left:0,right:0,width:0,height:0,brushBottom:0},eM=()=>{var a;return null!=(a=d2(eC))?a:eL},eN=a=>a.layout.layoutType,eO=()=>{var a=d2(eN);if("horizontal"===a||"vertical"===a)return a},eP=a=>{var b=a.layout.layoutType;if("centric"===b||"radial"===b)return b},eQ=a=>{var b=d$(),c=eG(),{width:d,height:e}=a,f=ay(),g=d,h=e;return f&&(g=f.width>0?f.width:d,h=f.height>0?f.height:e),(0,M.useEffect)(()=>{!c&&as(g)&&as(h)&&b(dB({width:g,height:h}))},[b,c,g,h]),null},eR=c(58623),eS=c.n(eR),eT=a=>a.chartData,eU=dV([eT],a=>{var b=null!=a.chartData?a.chartData.length-1:0;return{chartData:a.chartData,computedData:a.computedData,dataEndIndex:b,dataStartIndex:0}}),eV=(a,b,c,d)=>d?eU(a):eT(a),eW=(a,b,c)=>c?eU(a):eT(a),eX=dV([eV],a=>{var{chartData:b,dataStartIndex:c,dataEndIndex:d}=a;return null!=b?b.slice(c,d+1):[]}),eY=dV([eU],a=>{var{chartData:b,dataStartIndex:c,dataEndIndex:d}=a;return null!=b?b.slice(c,d+1):[]}),eZ=dV([eT],a=>{var{chartData:b,dataStartIndex:c,dataEndIndex:d}=a;return null!=b?b.slice(c,d+1):[]});function e$(a){if(Array.isArray(a)&&2===a.length){var[b,c]=a;if(ar(b)&&ar(c))return!0}return!1}function e_(a,b,c){return c?a:[Math.min(a[0],b[0]),Math.max(a[1],b[1])]}function e0(a,b){if(b&&"function"!=typeof a&&Array.isArray(a)&&2===a.length){var c,d,[e,f]=a;if(ar(e))c=e;else if("function"==typeof e)return;if(ar(f))d=f;else if("function"==typeof f)return;var g=[c,d];if(e$(g))return g}}var e1,e2,e3,e4,e5,e6=!0,e7="[DecimalError] ",e8=e7+"Invalid argument: ",e9=e7+"Exponent out of range: ",fa=Math.floor,fb=Math.pow,fc=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,fd=fa(1286742750677284.5),fe={};function ff(a,b){var c,d,e,f,g,h,i,j,k=a.constructor,l=k.precision;if(!a.s||!b.s)return b.s||(b=new k(a)),e6?fp(b,l):b;if(i=a.d,j=b.d,g=a.e,e=b.e,i=i.slice(),f=g-e){for(f<0?(d=i,f=-f,h=j.length):(d=j,e=g,h=i.length),f>(h=(g=Math.ceil(l/7))>h?g+1:h+1)&&(f=h,d.length=1),d.reverse();f--;)d.push(0);d.reverse()}for((h=i.length)-(f=j.length)<0&&(f=h,d=j,j=i,i=d),c=0;f;)c=(i[--f]=i[f]+j[f]+c)/1e7|0,i[f]%=1e7;for(c&&(i.unshift(c),++e),h=i.length;0==i[--h];)i.pop();return b.d=i,b.e=e,e6?fp(b,l):b}function fg(a,b,c){if(a!==~~a||a<b||a>c)throw Error(e8+a)}function fh(a){var b,c,d,e=a.length-1,f="",g=a[0];if(e>0){for(f+=g,b=1;b<e;b++)(c=7-(d=a[b]+"").length)&&(f+=fm(c)),f+=d;(c=7-(d=(g=a[b])+"").length)&&(f+=fm(c))}else if(0===g)return"0";for(;g%10==0;)g/=10;return f+g}fe.absoluteValue=fe.abs=function(){var a=new this.constructor(this);return a.s&&(a.s=1),a},fe.comparedTo=fe.cmp=function(a){var b,c,d,e;if(a=new this.constructor(a),this.s!==a.s)return this.s||-a.s;if(this.e!==a.e)return this.e>a.e^this.s<0?1:-1;for(b=0,c=(d=this.d.length)<(e=a.d.length)?d:e;b<c;++b)if(this.d[b]!==a.d[b])return this.d[b]>a.d[b]^this.s<0?1:-1;return d===e?0:d>e^this.s<0?1:-1},fe.decimalPlaces=fe.dp=function(){var a=this.d.length-1,b=(a-this.e)*7;if(a=this.d[a])for(;a%10==0;a/=10)b--;return b<0?0:b},fe.dividedBy=fe.div=function(a){return fi(this,new this.constructor(a))},fe.dividedToIntegerBy=fe.idiv=function(a){var b=this.constructor;return fp(fi(this,new b(a),0,1),b.precision)},fe.equals=fe.eq=function(a){return!this.cmp(a)},fe.exponent=function(){return fk(this)},fe.greaterThan=fe.gt=function(a){return this.cmp(a)>0},fe.greaterThanOrEqualTo=fe.gte=function(a){return this.cmp(a)>=0},fe.isInteger=fe.isint=function(){return this.e>this.d.length-2},fe.isNegative=fe.isneg=function(){return this.s<0},fe.isPositive=fe.ispos=function(){return this.s>0},fe.isZero=function(){return 0===this.s},fe.lessThan=fe.lt=function(a){return 0>this.cmp(a)},fe.lessThanOrEqualTo=fe.lte=function(a){return 1>this.cmp(a)},fe.logarithm=fe.log=function(a){var b,c=this.constructor,d=c.precision,e=d+5;if(void 0===a)a=new c(10);else if((a=new c(a)).s<1||a.eq(e5))throw Error(e7+"NaN");if(this.s<1)throw Error(e7+(this.s?"NaN":"-Infinity"));return this.eq(e5)?new c(0):(e6=!1,b=fi(fn(this,e),fn(a,e),e),e6=!0,fp(b,d))},fe.minus=fe.sub=function(a){return a=new this.constructor(a),this.s==a.s?fq(this,a):ff(this,(a.s=-a.s,a))},fe.modulo=fe.mod=function(a){var b,c=this.constructor,d=c.precision;if(!(a=new c(a)).s)throw Error(e7+"NaN");return this.s?(e6=!1,b=fi(this,a,0,1).times(a),e6=!0,this.minus(b)):fp(new c(this),d)},fe.naturalExponential=fe.exp=function(){return fj(this)},fe.naturalLogarithm=fe.ln=function(){return fn(this)},fe.negated=fe.neg=function(){var a=new this.constructor(this);return a.s=-a.s||0,a},fe.plus=fe.add=function(a){return a=new this.constructor(a),this.s==a.s?ff(this,a):fq(this,(a.s=-a.s,a))},fe.precision=fe.sd=function(a){var b,c,d;if(void 0!==a&&!!a!==a&&1!==a&&0!==a)throw Error(e8+a);if(b=fk(this)+1,c=7*(d=this.d.length-1)+1,d=this.d[d]){for(;d%10==0;d/=10)c--;for(d=this.d[0];d>=10;d/=10)c++}return a&&b>c?b:c},fe.squareRoot=fe.sqrt=function(){var a,b,c,d,e,f,g,h=this.constructor;if(this.s<1){if(!this.s)return new h(0);throw Error(e7+"NaN")}for(a=fk(this),e6=!1,0==(e=Math.sqrt(+this))||e==1/0?(((b=fh(this.d)).length+a)%2==0&&(b+="0"),e=Math.sqrt(b),a=fa((a+1)/2)-(a<0||a%2),d=new h(b=e==1/0?"5e"+a:(b=e.toExponential()).slice(0,b.indexOf("e")+1)+a)):d=new h(e.toString()),e=g=(c=h.precision)+3;;)if(d=(f=d).plus(fi(this,f,g+2)).times(.5),fh(f.d).slice(0,g)===(b=fh(d.d)).slice(0,g)){if(b=b.slice(g-3,g+1),e==g&&"4999"==b){if(fp(f,c+1,0),f.times(f).eq(this)){d=f;break}}else if("9999"!=b)break;g+=4}return e6=!0,fp(d,c)},fe.times=fe.mul=function(a){var b,c,d,e,f,g,h,i,j,k=this.constructor,l=this.d,m=(a=new k(a)).d;if(!this.s||!a.s)return new k(0);for(a.s*=this.s,c=this.e+a.e,(i=l.length)<(j=m.length)&&(f=l,l=m,m=f,g=i,i=j,j=g),f=[],d=g=i+j;d--;)f.push(0);for(d=j;--d>=0;){for(b=0,e=i+d;e>d;)h=f[e]+m[d]*l[e-d-1]+b,f[e--]=h%1e7|0,b=h/1e7|0;f[e]=(f[e]+b)%1e7|0}for(;!f[--g];)f.pop();return b?++c:f.shift(),a.d=f,a.e=c,e6?fp(a,k.precision):a},fe.toDecimalPlaces=fe.todp=function(a,b){var c=this,d=c.constructor;return(c=new d(c),void 0===a)?c:(fg(a,0,1e9),void 0===b?b=d.rounding:fg(b,0,8),fp(c,a+fk(c)+1,b))},fe.toExponential=function(a,b){var c,d=this,e=d.constructor;return void 0===a?c=fr(d,!0):(fg(a,0,1e9),void 0===b?b=e.rounding:fg(b,0,8),c=fr(d=fp(new e(d),a+1,b),!0,a+1)),c},fe.toFixed=function(a,b){var c,d,e=this.constructor;return void 0===a?fr(this):(fg(a,0,1e9),void 0===b?b=e.rounding:fg(b,0,8),c=fr((d=fp(new e(this),a+fk(this)+1,b)).abs(),!1,a+fk(d)+1),this.isneg()&&!this.isZero()?"-"+c:c)},fe.toInteger=fe.toint=function(){var a=this.constructor;return fp(new a(this),fk(this)+1,a.rounding)},fe.toNumber=function(){return+this},fe.toPower=fe.pow=function(a){var b,c,d,e,f,g,h=this,i=h.constructor,j=+(a=new i(a));if(!a.s)return new i(e5);if(!(h=new i(h)).s){if(a.s<1)throw Error(e7+"Infinity");return h}if(h.eq(e5))return h;if(d=i.precision,a.eq(e5))return fp(h,d);if(g=(b=a.e)>=(c=a.d.length-1),f=h.s,g){if((c=j<0?-j:j)<=0x1fffffffffffff){for(e=new i(e5),b=Math.ceil(d/7+4),e6=!1;c%2&&fs((e=e.times(h)).d,b),0!==(c=fa(c/2));)fs((h=h.times(h)).d,b);return e6=!0,a.s<0?new i(e5).div(e):fp(e,d)}}else if(f<0)throw Error(e7+"NaN");return f=f<0&&1&a.d[Math.max(b,c)]?-1:1,h.s=1,e6=!1,e=a.times(fn(h,d+12)),e6=!0,(e=fj(e)).s=f,e},fe.toPrecision=function(a,b){var c,d,e=this,f=e.constructor;return void 0===a?(c=fk(e),d=fr(e,c<=f.toExpNeg||c>=f.toExpPos)):(fg(a,1,1e9),void 0===b?b=f.rounding:fg(b,0,8),c=fk(e=fp(new f(e),a,b)),d=fr(e,a<=c||c<=f.toExpNeg,a)),d},fe.toSignificantDigits=fe.tosd=function(a,b){var c=this.constructor;return void 0===a?(a=c.precision,b=c.rounding):(fg(a,1,1e9),void 0===b?b=c.rounding:fg(b,0,8)),fp(new c(this),a,b)},fe.toString=fe.valueOf=fe.val=fe.toJSON=fe[Symbol.for("nodejs.util.inspect.custom")]=function(){var a=fk(this),b=this.constructor;return fr(this,a<=b.toExpNeg||a>=b.toExpPos)};var fi=function(){function a(a,b){var c,d=0,e=a.length;for(a=a.slice();e--;)c=a[e]*b+d,a[e]=c%1e7|0,d=c/1e7|0;return d&&a.unshift(d),a}function b(a,b,c,d){var e,f;if(c!=d)f=c>d?1:-1;else for(e=f=0;e<c;e++)if(a[e]!=b[e]){f=a[e]>b[e]?1:-1;break}return f}function c(a,b,c){for(var d=0;c--;)a[c]-=d,d=+(a[c]<b[c]),a[c]=1e7*d+a[c]-b[c];for(;!a[0]&&a.length>1;)a.shift()}return function(d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z=d.constructor,A=d.s==e.s?1:-1,B=d.d,C=e.d;if(!d.s)return new z(d);if(!e.s)throw Error(e7+"Division by zero");for(j=0,i=d.e-e.e,x=C.length,v=B.length,o=(n=new z(A)).d=[];C[j]==(B[j]||0);)++j;if(C[j]>(B[j]||0)&&--i,(s=null==f?f=z.precision:g?f+(fk(d)-fk(e))+1:f)<0)return new z(0);if(s=s/7+2|0,j=0,1==x)for(k=0,C=C[0],s++;(j<v||k)&&s--;j++)t=1e7*k+(B[j]||0),o[j]=t/C|0,k=t%C|0;else{for((k=1e7/(C[0]+1)|0)>1&&(C=a(C,k),B=a(B,k),x=C.length,v=B.length),u=x,q=(p=B.slice(0,x)).length;q<x;)p[q++]=0;(y=C.slice()).unshift(0),w=C[0],C[1]>=1e7/2&&++w;do k=0,(h=b(C,p,x,q))<0?(r=p[0],x!=q&&(r=1e7*r+(p[1]||0)),(k=r/w|0)>1?(k>=1e7&&(k=1e7-1),m=(l=a(C,k)).length,q=p.length,1==(h=b(l,p,m,q))&&(k--,c(l,x<m?y:C,m))):(0==k&&(h=k=1),l=C.slice()),(m=l.length)<q&&l.unshift(0),c(p,l,q),-1==h&&(q=p.length,(h=b(C,p,x,q))<1&&(k++,c(p,x<q?y:C,q))),q=p.length):0===h&&(k++,p=[0]),o[j++]=k,h&&p[0]?p[q++]=B[u]||0:(p=[B[u]],q=1);while((u++<v||void 0!==p[0])&&s--)}return o[0]||o.shift(),n.e=i,fp(n,g?f+fk(n)+1:f)}}();function fj(a,b){var c,d,e,f,g,h=0,i=0,j=a.constructor,k=j.precision;if(fk(a)>16)throw Error(e9+fk(a));if(!a.s)return new j(e5);for(null==b?(e6=!1,g=k):g=b,f=new j(.03125);a.abs().gte(.1);)a=a.times(f),i+=5;for(g+=Math.log(fb(2,i))/Math.LN10*2+5|0,c=d=e=new j(e5),j.precision=g;;){if(d=fp(d.times(a),g),c=c.times(++h),fh((f=e.plus(fi(d,c,g))).d).slice(0,g)===fh(e.d).slice(0,g)){for(;i--;)e=fp(e.times(e),g);return j.precision=k,null==b?(e6=!0,fp(e,k)):e}e=f}}function fk(a){for(var b=7*a.e,c=a.d[0];c>=10;c/=10)b++;return b}function fl(a,b,c){if(b>a.LN10.sd())throw e6=!0,c&&(a.precision=c),Error(e7+"LN10 precision limit exceeded");return fp(new a(a.LN10),b)}function fm(a){for(var b="";a--;)b+="0";return b}function fn(a,b){var c,d,e,f,g,h,i,j,k,l=1,m=a,n=m.d,o=m.constructor,p=o.precision;if(m.s<1)throw Error(e7+(m.s?"NaN":"-Infinity"));if(m.eq(e5))return new o(0);if(null==b?(e6=!1,j=p):j=b,m.eq(10))return null==b&&(e6=!0),fl(o,j);if(o.precision=j+=10,d=(c=fh(n)).charAt(0),!(15e14>Math.abs(f=fk(m))))return i=fl(o,j+2,p).times(f+""),m=fn(new o(d+"."+c.slice(1)),j-10).plus(i),o.precision=p,null==b?(e6=!0,fp(m,p)):m;for(;d<7&&1!=d||1==d&&c.charAt(1)>3;)d=(c=fh((m=m.times(a)).d)).charAt(0),l++;for(f=fk(m),d>1?(m=new o("0."+c),f++):m=new o(d+"."+c.slice(1)),h=g=m=fi(m.minus(e5),m.plus(e5),j),k=fp(m.times(m),j),e=3;;){if(g=fp(g.times(k),j),fh((i=h.plus(fi(g,new o(e),j))).d).slice(0,j)===fh(h.d).slice(0,j))return h=h.times(2),0!==f&&(h=h.plus(fl(o,j+2,p).times(f+""))),h=fi(h,new o(l),j),o.precision=p,null==b?(e6=!0,fp(h,p)):h;h=i,e+=2}}function fo(a,b){var c,d,e;for((c=b.indexOf("."))>-1&&(b=b.replace(".","")),(d=b.search(/e/i))>0?(c<0&&(c=d),c+=+b.slice(d+1),b=b.substring(0,d)):c<0&&(c=b.length),d=0;48===b.charCodeAt(d);)++d;for(e=b.length;48===b.charCodeAt(e-1);)--e;if(b=b.slice(d,e)){if(e-=d,a.e=fa((c=c-d-1)/7),a.d=[],d=(c+1)%7,c<0&&(d+=7),d<e){for(d&&a.d.push(+b.slice(0,d)),e-=7;d<e;)a.d.push(+b.slice(d,d+=7));d=7-(b=b.slice(d)).length}else d-=e;for(;d--;)b+="0";if(a.d.push(+b),e6&&(a.e>fd||a.e<-fd))throw Error(e9+c)}else a.s=0,a.e=0,a.d=[0];return a}function fp(a,b,c){var d,e,f,g,h,i,j,k,l=a.d;for(g=1,f=l[0];f>=10;f/=10)g++;if((d=b-g)<0)d+=7,e=b,j=l[k=0];else{if((k=Math.ceil((d+1)/7))>=(f=l.length))return a;for(g=1,j=f=l[k];f>=10;f/=10)g++;d%=7,e=d-7+g}if(void 0!==c&&(h=j/(f=fb(10,g-e-1))%10|0,i=b<0||void 0!==l[k+1]||j%f,i=c<4?(h||i)&&(0==c||c==(a.s<0?3:2)):h>5||5==h&&(4==c||i||6==c&&(d>0?e>0?j/fb(10,g-e):0:l[k-1])%10&1||c==(a.s<0?8:7))),b<1||!l[0])return i?(f=fk(a),l.length=1,b=b-f-1,l[0]=fb(10,(7-b%7)%7),a.e=fa(-b/7)||0):(l.length=1,l[0]=a.e=a.s=0),a;if(0==d?(l.length=k,f=1,k--):(l.length=k+1,f=fb(10,7-d),l[k]=e>0?(j/fb(10,g-e)%fb(10,e)|0)*f:0),i)for(;;)if(0==k){1e7==(l[0]+=f)&&(l[0]=1,++a.e);break}else{if(l[k]+=f,1e7!=l[k])break;l[k--]=0,f=1}for(d=l.length;0===l[--d];)l.pop();if(e6&&(a.e>fd||a.e<-fd))throw Error(e9+fk(a));return a}function fq(a,b){var c,d,e,f,g,h,i,j,k,l,m=a.constructor,n=m.precision;if(!a.s||!b.s)return b.s?b.s=-b.s:b=new m(a),e6?fp(b,n):b;if(i=a.d,l=b.d,d=b.e,j=a.e,i=i.slice(),g=j-d){for((k=g<0)?(c=i,g=-g,h=l.length):(c=l,d=j,h=i.length),g>(e=Math.max(Math.ceil(n/7),h)+2)&&(g=e,c.length=1),c.reverse(),e=g;e--;)c.push(0);c.reverse()}else{for((k=(e=i.length)<(h=l.length))&&(h=e),e=0;e<h;e++)if(i[e]!=l[e]){k=i[e]<l[e];break}g=0}for(k&&(c=i,i=l,l=c,b.s=-b.s),h=i.length,e=l.length-h;e>0;--e)i[h++]=0;for(e=l.length;e>g;){if(i[--e]<l[e]){for(f=e;f&&0===i[--f];)i[f]=1e7-1;--i[f],i[e]+=1e7}i[e]-=l[e]}for(;0===i[--h];)i.pop();for(;0===i[0];i.shift())--d;return i[0]?(b.d=i,b.e=d,e6?fp(b,n):b):new m(0)}function fr(a,b,c){var d,e=fk(a),f=fh(a.d),g=f.length;return b?(c&&(d=c-g)>0?f=f.charAt(0)+"."+f.slice(1)+fm(d):g>1&&(f=f.charAt(0)+"."+f.slice(1)),f=f+(e<0?"e":"e+")+e):e<0?(f="0."+fm(-e-1)+f,c&&(d=c-g)>0&&(f+=fm(d))):e>=g?(f+=fm(e+1-g),c&&(d=c-e-1)>0&&(f=f+"."+fm(d))):((d=e+1)<g&&(f=f.slice(0,d)+"."+f.slice(d)),c&&(d=c-g)>0&&(e+1===g&&(f+="."),f+=fm(d))),a.s<0?"-"+f:f}function fs(a,b){if(a.length>b)return a.length=b,!0}function ft(a){if(!a||"object"!=typeof a)throw Error(e7+"Object expected");var b,c,d,e=["precision",1,1e9,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(b=0;b<e.length;b+=3)if(void 0!==(d=a[c=e[b]]))if(fa(d)===d&&d>=e[b+1]&&d<=e[b+2])this[c]=d;else throw Error(e8+c+": "+d);if(void 0!==(d=a[c="LN10"]))if(d==Math.LN10)this[c]=new this(d);else throw Error(e8+c+": "+d);return this}var e4=function a(b){var c,d,e;function f(a){if(!(this instanceof f))return new f(a);if(this.constructor=f,a instanceof f){this.s=a.s,this.e=a.e,this.d=(a=a.d)?a.slice():a;return}if("number"==typeof a){if(0*a!=0)throw Error(e8+a);if(a>0)this.s=1;else if(a<0)a=-a,this.s=-1;else{this.s=0,this.e=0,this.d=[0];return}if(a===~~a&&a<1e7){this.e=0,this.d=[a];return}return fo(this,a.toString())}if("string"!=typeof a)throw Error(e8+a);if(45===a.charCodeAt(0)?(a=a.slice(1),this.s=-1):this.s=1,fc.test(a))fo(this,a);else throw Error(e8+a)}if(f.prototype=fe,f.ROUND_UP=0,f.ROUND_DOWN=1,f.ROUND_CEIL=2,f.ROUND_FLOOR=3,f.ROUND_HALF_UP=4,f.ROUND_HALF_DOWN=5,f.ROUND_HALF_EVEN=6,f.ROUND_HALF_CEIL=7,f.ROUND_HALF_FLOOR=8,f.clone=a,f.config=f.set=ft,void 0===b&&(b={}),b)for(c=0,e=["precision","rounding","toExpNeg","toExpPos","LN10"];c<e.length;)b.hasOwnProperty(d=e[c++])||(b[d]=this[d]);return f.config(b),f}({precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"});e5=new e4(1);let fu=e4;function fv(a){return 0===a?1:Math.floor(new fu(a).abs().log(10).toNumber())+1}function fw(a,b,c){for(var d=new fu(a),e=0,f=[];d.lt(b)&&e<1e5;)f.push(d.toNumber()),d=d.add(c),e++;return f}var fx=a=>{var[b,c]=a,[d,e]=[b,c];return b>c&&([d,e]=[c,b]),[d,e]},fy=(a,b,c)=>{if(a.lte(0))return new fu(0);var d=fv(a.toNumber()),e=new fu(10).pow(d),f=a.div(e),g=1!==d?.05:.1,h=new fu(Math.ceil(f.div(g).toNumber())).add(c).mul(g).mul(e);return new fu(b?h.toNumber():Math.ceil(h.toNumber()))},fz=(a,b,c)=>{if(a.lte(0))return new fu(0);var d,e=[1,2,2.5,5],f=Math.floor(new fu(a.toNumber()).abs().log(10).toNumber()),g=new fu(10).pow(f),h=a.div(g).toNumber(),i=e.findIndex(a=>a>=h-1e-10);if(-1===i&&(g=g.mul(10),i=0),(i+=c)>=e.length){var j=Math.floor(i/e.length);i%=e.length,g=g.mul(new fu(10).pow(j))}var k=new fu(null!=(d=e[i])?d:1).mul(g);return b?k:new fu(Math.ceil(k.toNumber()))},fA=function(a,b,c,d){var e,f=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,g=arguments.length>5&&void 0!==arguments[5]?arguments[5]:fy;if(!Number.isFinite((b-a)/(c-1)))return{step:new fu(0),tickMin:new fu(0),tickMax:new fu(0)};var h=g(new fu(b).sub(a).div(c-1),d,f),i=Math.ceil((e=a<=0&&b>=0?new fu(0):(e=new fu(a).add(b).div(2)).sub(new fu(e).mod(h))).sub(a).div(h).toNumber()),j=Math.ceil(new fu(b).sub(e).div(h).toNumber()),k=i+j+1;return k>c?fA(a,b,c,d,f+1,g):(k<c&&(j=b>0?j+(c-k):j,i=b>0?i:i+(c-k)),{step:h,tickMin:e.sub(new fu(i).mul(h)),tickMax:e.add(new fu(j).mul(h))})},fB=function(a){var[b,c]=a,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,e=!(arguments.length>2)||void 0===arguments[2]||arguments[2],f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"auto",g=Math.max(d,2),[h,i]=fx([b,c]);if(h===-1/0||i===1/0){var j=i===1/0?[h,...Array(d-1).fill(1/0)]:[...Array(d-1).fill(-1/0),i];return b>c?j.reverse():j}if(h===i)return((a,b,c)=>{var d=new fu(1),e=new fu(a);if(!e.isint()&&c){var f=Math.abs(a);f<1?(d=new fu(10).pow(fv(a)-1),e=new fu(Math.floor(e.div(d).toNumber())).mul(d)):f>1&&(e=new fu(Math.floor(a)))}else 0===a?e=new fu(Math.floor((b-1)/2)):c||(e=new fu(Math.floor(a)));for(var g=Math.floor((b-1)/2),h=[],i=0;i<b;i++)h.push(e.add(new fu(i-g).mul(d)).toNumber());return h})(h,d,e);var{step:k,tickMin:l,tickMax:m}=fA(h,i,g,e,0,"snap125"===f?fz:fy),n=fw(l,m.add(new fu(.1).mul(k)),k);return b>c?n.reverse():n},fC=function(a,b){var[c,d]=a,e=!(arguments.length>2)||void 0===arguments[2]||arguments[2],f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"auto",[g,h]=fx([c,d]);if(g===-1/0||h===1/0)return[c,d];if(g===h)return[g];var i=Math.max(b,2),j=("snap125"===f?fz:fy)(new fu(h).sub(g).div(i-1),e,0),k=[...fw(new fu(g),new fu(h),j),h];return!1===e&&(k=k.map(a=>Math.round(a))),c>d?k.reverse():k},fD=a=>a.rootProps.maxBarSize,fE=a=>a.rootProps.barCategoryGap,fF=a=>a.rootProps.stackOffset,fG=a=>a.rootProps.reverseStackOrder,fH=a=>a.options.chartName,fI=a=>a.rootProps.syncId,fJ=a=>a.rootProps.syncMethod,fK=a=>a.options.eventEmitter;function fL(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function fM(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?fL(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):fL(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var fN=Math.PI/180,fO=(a,b,c,d)=>({x:a+Math.cos(-fN*d)*c,y:b+Math.sin(-fN*d)*c}),fP=function(a,b){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{top:0,right:0,bottom:0,left:0,width:0,height:0,brushBottom:0};return Math.min(Math.abs(a-(c.left||0)-(c.right||0)),Math.abs(b-(c.top||0)-(c.bottom||0)))/2},fQ={grid:-100,barBackground:-50,area:100,cursorRectangle:200,bar:300,line:400,axis:500,scatter:600,activeBar:1e3,cursorLine:1100,activeDot:1200,label:2e3},fR={allowDecimals:!1,allowDuplicatedCategory:!0,allowDataOverflow:!1,angle:0,angleAxisId:0,axisLine:!0,axisLineType:"polygon",cx:0,cy:0,hide:!1,includeHidden:!1,label:!1,niceTicks:"auto",orientation:"outer",reversed:!1,scale:"auto",tick:!0,tickLine:!0,tickSize:8,type:"auto",zIndex:fQ.axis},fS={allowDataOverflow:!1,allowDecimals:!1,allowDuplicatedCategory:!0,angle:0,axisLine:!0,includeHidden:!1,hide:!1,niceTicks:"auto",label:!1,orientation:"right",radiusAxisId:0,reversed:!1,scale:"auto",stroke:"#ccc",tick:!0,tickCount:5,tickLine:!0,type:"auto",zIndex:fQ.axis},fT=(a,b)=>{if(a&&b)return null!=a&&a.reversed?[b[1],b[0]]:b};function fU(a,b,c){return"auto"!==c?c:null!=a?eg(a,b)?"category":"number":void 0}function fV(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function fW(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?fV(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):fV(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var fX={allowDataOverflow:fR.allowDataOverflow,allowDecimals:fR.allowDecimals,allowDuplicatedCategory:!1,dataKey:void 0,domain:void 0,id:fR.angleAxisId,includeHidden:!1,name:void 0,reversed:fR.reversed,scale:fR.scale,tick:fR.tick,tickCount:void 0,ticks:void 0,type:fR.type,unit:void 0,niceTicks:"auto"},fY={allowDataOverflow:fS.allowDataOverflow,allowDecimals:fS.allowDecimals,allowDuplicatedCategory:fS.allowDuplicatedCategory,dataKey:void 0,domain:void 0,id:fS.radiusAxisId,includeHidden:fS.includeHidden,name:void 0,reversed:fS.reversed,scale:fS.scale,tick:fS.tick,tickCount:fS.tickCount,ticks:void 0,type:fS.type,unit:void 0,niceTicks:"auto"},fZ=dV([(a,b)=>{if(null!=b)return a.polarAxis.angleAxis[b]},eP],(a,b)=>{if(null!=a)return a;var c,d=null!=(c=fU(b,"angleAxis",fX.type))?c:"category";return fW(fW({},fX),{},{type:d})}),f$=dV([(a,b)=>a.polarAxis.radiusAxis[b],eP],(a,b)=>{if(null!=a)return a;var c,d=null!=(c=fU(b,"radiusAxis",fY.type))?c:"category";return fW(fW({},fY),{},{type:d})}),f_=a=>a.polarOptions,f0=dV([es,et,eC],fP),f1=dV([f_,f0],(a,b)=>{if(null!=a)return ab(a.innerRadius,b,0)}),f2=dV([f_,f0],(a,b)=>{if(null!=a)return ab(a.outerRadius,b,.8*b)}),f3=dV([f_],a=>{if(null==a)return[0,0];var{startAngle:b,endAngle:c}=a;return[b,c]});dV([fZ,f3],fT);var f4=dV([f0,f1,f2],(a,b,c)=>{if(null!=a&&null!=b&&null!=c)return[b,c]});dV([f$,f4],fT);var f5=dV([eN,f_,f1,f2,es,et],(a,b,c,d,e,f)=>{if(("centric"===a||"radial"===a)&&null!=b&&null!=c&&null!=d){var{cx:g,cy:h,startAngle:i,endAngle:j}=b;return{cx:ab(g,e,e/2),cy:ab(h,f,f/2),innerRadius:c,outerRadius:d,startAngle:i,endAngle:j,clockWise:!1}}}),f6=(a,b)=>b,f7=(a,b,c)=>c;function f8(a){return null==a?void 0:a.id}function f9(a,b,c){var{chartData:d=[]}=b,{allowDuplicatedCategory:e,dataKey:f}=c,g=new Map;return a.forEach(a=>{var b,c=null!=(b=a.data)?b:d;if(null!=c&&0!==c.length){var h=f8(a);c.forEach((b,c)=>{var d,i=null==f||e?c:String(ef(b,f,null)),j=ef(b,a.dataKey,0);Object.assign(d=g.has(i)?g.get(i):{},{[h]:j}),g.set(i,d)})}}),Array.from(g.values())}function ga(a){return"stackId"in a&&null!=a.stackId&&null!=a.dataKey}var gb=(a,b)=>a===b||null!=a&&null!=b&&a[0]===b[0]&&a[1]===b[1];function gc(a,b){return!!(Array.isArray(a)&&Array.isArray(b))&&0===a.length&&0===b.length||a===b}var gd=a=>{var b=eN(a);return"horizontal"===b?"xAxis":"vertical"===b?"yAxis":"centric"===b?"angleAxis":"radiusAxis"},ge=a=>a.tooltip.settings.axisId;function gf(a){if(null!=a){var b=a.ticks,c=a.bandwidth,d=a.range(),e=[Math.min(...d),Math.max(...d)];return{domain:()=>a.domain(),range:function(a){function b(){return a.apply(this,arguments)}return b.toString=function(){return a.toString()},b}(()=>e),rangeMin:()=>e[0],rangeMax:()=>e[1],isInRange(a){var b=e[0],c=e[1];return b<=c?a>=b&&a<=c:a>=c&&a<=b},bandwidth:c?()=>c.call(a):void 0,ticks:b?c=>b.call(a,c):void 0,map:(b,c)=>{var d=a(b);if(null!=d){if(a.bandwidth&&null!=c&&c.position){var e=a.bandwidth();switch(c.position){case"middle":d+=e/2;break;case"end":d+=e}}return d}}}}}var gg=(a,b)=>{if(null!=b)if("linear"!==a)return b;else{if(!e$(b)){for(var c,d,e=0;e<b.length;e++){var f=b[e];ar(f)&&((void 0===c||f<c)&&(c=f),(void 0===d||f>d)&&(d=f))}return void 0!==c&&void 0!==d?[c,d]:void 0}return b}};function gh(a,b){switch(arguments.length){case 0:break;case 1:this.range(a);break;default:this.range(b).domain(a)}return this}function gi(a,b){switch(arguments.length){case 0:break;case 1:"function"==typeof a?this.interpolator(a):this.range(a);break;default:this.domain(a),"function"==typeof b?this.interpolator(b):this.range(b)}return this}class gj extends Map{constructor(a,b=gl){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:b}}),null!=a)for(const[b,c]of a)this.set(b,c)}get(a){return super.get(gk(this,a))}has(a){return super.has(gk(this,a))}set(a,b){return super.set(function({_intern:a,_key:b},c){let d=b(c);return a.has(d)?a.get(d):(a.set(d,c),c)}(this,a),b)}delete(a){return super.delete(function({_intern:a,_key:b},c){let d=b(c);return a.has(d)&&(c=a.get(d),a.delete(d)),c}(this,a))}}function gk({_intern:a,_key:b},c){let d=b(c);return a.has(d)?a.get(d):c}function gl(a){return null!==a&&"object"==typeof a?a.valueOf():a}let gm=Symbol("implicit");function gn(){var a=new gj,b=[],c=[],d=gm;function e(e){let f=a.get(e);if(void 0===f){if(d!==gm)return d;a.set(e,f=b.push(e)-1)}return c[f%c.length]}return e.domain=function(c){if(!arguments.length)return b.slice();for(let d of(b=[],a=new gj,c))a.has(d)||a.set(d,b.push(d)-1);return e},e.range=function(a){return arguments.length?(c=Array.from(a),e):c.slice()},e.unknown=function(a){return arguments.length?(d=a,e):d},e.copy=function(){return gn(b,c).unknown(d)},gh.apply(e,arguments),e}function go(){var a,b,c=gn().unknown(void 0),d=c.domain,e=c.range,f=0,g=1,h=!1,i=0,j=0,k=.5;function l(){var c=d().length,l=g<f,m=l?g:f,n=l?f:g;a=(n-m)/Math.max(1,c-i+2*j),h&&(a=Math.floor(a)),m+=(n-m-a*(c-i))*k,b=a*(1-i),h&&(m=Math.round(m),b=Math.round(b));var o=(function(a,b,c){a*=1,b*=1,c=(e=arguments.length)<2?(b=a,a=0,1):e<3?1:+c;for(var d=-1,e=0|Math.max(0,Math.ceil((b-a)/c)),f=Array(e);++d<e;)f[d]=a+d*c;return f})(c).map(function(b){return m+a*b});return e(l?o.reverse():o)}return delete c.unknown,c.domain=function(a){return arguments.length?(d(a),l()):d()},c.range=function(a){return arguments.length?([f,g]=a,f*=1,g*=1,l()):[f,g]},c.rangeRound=function(a){return[f,g]=a,f*=1,g*=1,h=!0,l()},c.bandwidth=function(){return b},c.step=function(){return a},c.round=function(a){return arguments.length?(h=!!a,l()):h},c.padding=function(a){return arguments.length?(i=Math.min(1,j=+a),l()):i},c.paddingInner=function(a){return arguments.length?(i=Math.min(1,a),l()):i},c.paddingOuter=function(a){return arguments.length?(j=+a,l()):j},c.align=function(a){return arguments.length?(k=Math.max(0,Math.min(1,a)),l()):k},c.copy=function(){return go(d(),[f,g]).round(h).paddingInner(i).paddingOuter(j).align(k)},gh.apply(l(),arguments)}function gp(){return function a(b){var c=b.copy;return b.padding=b.paddingOuter,delete b.paddingInner,delete b.paddingOuter,b.copy=function(){return a(c())},b}(go.apply(null,arguments).paddingInner(1))}let gq=Math.sqrt(50),gr=Math.sqrt(10),gs=Math.sqrt(2);function gt(a,b,c){let d,e,f,g=(b-a)/Math.max(0,c),h=Math.floor(Math.log10(g)),i=g/Math.pow(10,h),j=i>=gq?10:i>=gr?5:i>=gs?2:1;return(h<0?(d=Math.round(a*(f=Math.pow(10,-h)/j)),e=Math.round(b*f),d/f<a&&++d,e/f>b&&--e,f=-f):(d=Math.round(a/(f=Math.pow(10,h)*j)),e=Math.round(b/f),d*f<a&&++d,e*f>b&&--e),e<d&&.5<=c&&c<2)?gt(a,b,2*c):[d,e,f]}function gu(a,b,c){if(b*=1,a*=1,!((c*=1)>0))return[];if(a===b)return[a];let d=b<a,[e,f,g]=d?gt(b,a,c):gt(a,b,c);if(!(f>=e))return[];let h=f-e+1,i=Array(h);if(d)if(g<0)for(let a=0;a<h;++a)i[a]=-((f-a)/g);else for(let a=0;a<h;++a)i[a]=(f-a)*g;else if(g<0)for(let a=0;a<h;++a)i[a]=-((e+a)/g);else for(let a=0;a<h;++a)i[a]=(e+a)*g;return i}function gv(a,b,c){return gt(a*=1,b*=1,c*=1)[2]}function gw(a,b,c){b*=1,a*=1,c*=1;let d=b<a,e=d?gv(b,a,c):gv(a,b,c);return(d?-1:1)*(e<0?-(1/e):e)}function gx(a,b){return null==a||null==b?NaN:a<b?-1:a>b?1:a>=b?0:NaN}function gy(a,b){return null==a||null==b?NaN:b<a?-1:b>a?1:b>=a?0:NaN}function gz(a){let b,c,d;function e(a,d,f=0,g=a.length){if(f<g){if(0!==b(d,d))return g;do{let b=f+g>>>1;0>c(a[b],d)?f=b+1:g=b}while(f<g)}return f}return 2!==a.length?(b=gx,c=(b,c)=>gx(a(b),c),d=(b,c)=>a(b)-c):(b=a===gx||a===gy?a:gA,c=a,d=a),{left:e,center:function(a,b,c=0,f=a.length){let g=e(a,b,c,f-1);return g>c&&d(a[g-1],b)>-d(a[g],b)?g-1:g},right:function(a,d,e=0,f=a.length){if(e<f){if(0!==b(d,d))return f;do{let b=e+f>>>1;0>=c(a[b],d)?e=b+1:f=b}while(e<f)}return e}}}function gA(){return 0}function gB(a){return null===a?NaN:+a}let gC=gz(gx),gD=gC.right;function gE(a,b,c){a.prototype=b.prototype=c,c.constructor=a}function gF(a,b){var c=Object.create(a.prototype);for(var d in b)c[d]=b[d];return c}function gG(){}gC.left,gz(gB).center;var gH="\\s*([+-]?\\d+)\\s*",gI="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",gJ="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",gK=/^#([0-9a-f]{3,8})$/,gL=RegExp(`^rgb\\(${gH},${gH},${gH}\\)$`),gM=RegExp(`^rgb\\(${gJ},${gJ},${gJ}\\)$`),gN=RegExp(`^rgba\\(${gH},${gH},${gH},${gI}\\)$`),gO=RegExp(`^rgba\\(${gJ},${gJ},${gJ},${gI}\\)$`),gP=RegExp(`^hsl\\(${gI},${gJ},${gJ}\\)$`),gQ=RegExp(`^hsla\\(${gI},${gJ},${gJ},${gI}\\)$`),gR={aliceblue:0xf0f8ff,antiquewhite:0xfaebd7,aqua:65535,aquamarine:8388564,azure:0xf0ffff,beige:0xf5f5dc,bisque:0xffe4c4,black:0,blanchedalmond:0xffebcd,blue:255,blueviolet:9055202,brown:0xa52a2a,burlywood:0xdeb887,cadetblue:6266528,chartreuse:8388352,chocolate:0xd2691e,coral:0xff7f50,cornflowerblue:6591981,cornsilk:0xfff8dc,crimson:0xdc143c,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:0xb8860b,darkgray:0xa9a9a9,darkgreen:25600,darkgrey:0xa9a9a9,darkkhaki:0xbdb76b,darkmagenta:9109643,darkolivegreen:5597999,darkorange:0xff8c00,darkorchid:0x9932cc,darkred:9109504,darksalmon:0xe9967a,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:0xff1493,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:0xb22222,floralwhite:0xfffaf0,forestgreen:2263842,fuchsia:0xff00ff,gainsboro:0xdcdcdc,ghostwhite:0xf8f8ff,gold:0xffd700,goldenrod:0xdaa520,gray:8421504,green:32768,greenyellow:0xadff2f,grey:8421504,honeydew:0xf0fff0,hotpink:0xff69b4,indianred:0xcd5c5c,indigo:4915330,ivory:0xfffff0,khaki:0xf0e68c,lavender:0xe6e6fa,lavenderblush:0xfff0f5,lawngreen:8190976,lemonchiffon:0xfffacd,lightblue:0xadd8e6,lightcoral:0xf08080,lightcyan:0xe0ffff,lightgoldenrodyellow:0xfafad2,lightgray:0xd3d3d3,lightgreen:9498256,lightgrey:0xd3d3d3,lightpink:0xffb6c1,lightsalmon:0xffa07a,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:0xb0c4de,lightyellow:0xffffe0,lime:65280,limegreen:3329330,linen:0xfaf0e6,magenta:0xff00ff,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:0xba55d3,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:0xc71585,midnightblue:1644912,mintcream:0xf5fffa,mistyrose:0xffe4e1,moccasin:0xffe4b5,navajowhite:0xffdead,navy:128,oldlace:0xfdf5e6,olive:8421376,olivedrab:7048739,orange:0xffa500,orangered:0xff4500,orchid:0xda70d6,palegoldenrod:0xeee8aa,palegreen:0x98fb98,paleturquoise:0xafeeee,palevioletred:0xdb7093,papayawhip:0xffefd5,peachpuff:0xffdab9,peru:0xcd853f,pink:0xffc0cb,plum:0xdda0dd,powderblue:0xb0e0e6,purple:8388736,rebeccapurple:6697881,red:0xff0000,rosybrown:0xbc8f8f,royalblue:4286945,saddlebrown:9127187,salmon:0xfa8072,sandybrown:0xf4a460,seagreen:3050327,seashell:0xfff5ee,sienna:0xa0522d,silver:0xc0c0c0,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:0xfffafa,springgreen:65407,steelblue:4620980,tan:0xd2b48c,teal:32896,thistle:0xd8bfd8,tomato:0xff6347,turquoise:4251856,violet:0xee82ee,wheat:0xf5deb3,white:0xffffff,whitesmoke:0xf5f5f5,yellow:0xffff00,yellowgreen:0x9acd32};function gS(){return this.rgb().formatHex()}function gT(){return this.rgb().formatRgb()}function gU(a){var b,c;return a=(a+"").trim().toLowerCase(),(b=gK.exec(a))?(c=b[1].length,b=parseInt(b[1],16),6===c?gV(b):3===c?new gY(b>>8&15|b>>4&240,b>>4&15|240&b,(15&b)<<4|15&b,1):8===c?gW(b>>24&255,b>>16&255,b>>8&255,(255&b)/255):4===c?gW(b>>12&15|b>>8&240,b>>8&15|b>>4&240,b>>4&15|240&b,((15&b)<<4|15&b)/255):null):(b=gL.exec(a))?new gY(b[1],b[2],b[3],1):(b=gM.exec(a))?new gY(255*b[1]/100,255*b[2]/100,255*b[3]/100,1):(b=gN.exec(a))?gW(b[1],b[2],b[3],b[4]):(b=gO.exec(a))?gW(255*b[1]/100,255*b[2]/100,255*b[3]/100,b[4]):(b=gP.exec(a))?g2(b[1],b[2]/100,b[3]/100,1):(b=gQ.exec(a))?g2(b[1],b[2]/100,b[3]/100,b[4]):gR.hasOwnProperty(a)?gV(gR[a]):"transparent"===a?new gY(NaN,NaN,NaN,0):null}function gV(a){return new gY(a>>16&255,a>>8&255,255&a,1)}function gW(a,b,c,d){return d<=0&&(a=b=c=NaN),new gY(a,b,c,d)}function gX(a,b,c,d){var e;return 1==arguments.length?((e=a)instanceof gG||(e=gU(e)),e)?new gY((e=e.rgb()).r,e.g,e.b,e.opacity):new gY:new gY(a,b,c,null==d?1:d)}function gY(a,b,c,d){this.r=+a,this.g=+b,this.b=+c,this.opacity=+d}function gZ(){return`#${g1(this.r)}${g1(this.g)}${g1(this.b)}`}function g$(){let a=g_(this.opacity);return`${1===a?"rgb(":"rgba("}${g0(this.r)}, ${g0(this.g)}, ${g0(this.b)}${1===a?")":`, ${a})`}`}function g_(a){return isNaN(a)?1:Math.max(0,Math.min(1,a))}function g0(a){return Math.max(0,Math.min(255,Math.round(a)||0))}function g1(a){return((a=g0(a))<16?"0":"")+a.toString(16)}function g2(a,b,c,d){return d<=0?a=b=c=NaN:c<=0||c>=1?a=b=NaN:b<=0&&(a=NaN),new g4(a,b,c,d)}function g3(a){if(a instanceof g4)return new g4(a.h,a.s,a.l,a.opacity);if(a instanceof gG||(a=gU(a)),!a)return new g4;if(a instanceof g4)return a;var b=(a=a.rgb()).r/255,c=a.g/255,d=a.b/255,e=Math.min(b,c,d),f=Math.max(b,c,d),g=NaN,h=f-e,i=(f+e)/2;return h?(g=b===f?(c-d)/h+(c<d)*6:c===f?(d-b)/h+2:(b-c)/h+4,h/=i<.5?f+e:2-f-e,g*=60):h=i>0&&i<1?0:g,new g4(g,h,i,a.opacity)}function g4(a,b,c,d){this.h=+a,this.s=+b,this.l=+c,this.opacity=+d}function g5(a){return(a=(a||0)%360)<0?a+360:a}function g6(a){return Math.max(0,Math.min(1,a||0))}function g7(a,b,c){return(a<60?b+(c-b)*a/60:a<180?c:a<240?b+(c-b)*(240-a)/60:b)*255}function g8(a,b,c,d,e){var f=a*a,g=f*a;return((1-3*a+3*f-g)*b+(4-6*f+3*g)*c+(1+3*a+3*f-3*g)*d+g*e)/6}gE(gG,gU,{copy(a){return Object.assign(new this.constructor,this,a)},displayable(){return this.rgb().displayable()},hex:gS,formatHex:gS,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return g3(this).formatHsl()},formatRgb:gT,toString:gT}),gE(gY,gX,gF(gG,{brighter(a){return a=null==a?1.4285714285714286:Math.pow(1.4285714285714286,a),new gY(this.r*a,this.g*a,this.b*a,this.opacity)},darker(a){return a=null==a?.7:Math.pow(.7,a),new gY(this.r*a,this.g*a,this.b*a,this.opacity)},rgb(){return this},clamp(){return new gY(g0(this.r),g0(this.g),g0(this.b),g_(this.opacity))},displayable(){return -.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:gZ,formatHex:gZ,formatHex8:function(){return`#${g1(this.r)}${g1(this.g)}${g1(this.b)}${g1((isNaN(this.opacity)?1:this.opacity)*255)}`},formatRgb:g$,toString:g$})),gE(g4,function(a,b,c,d){return 1==arguments.length?g3(a):new g4(a,b,c,null==d?1:d)},gF(gG,{brighter(a){return a=null==a?1.4285714285714286:Math.pow(1.4285714285714286,a),new g4(this.h,this.s,this.l*a,this.opacity)},darker(a){return a=null==a?.7:Math.pow(.7,a),new g4(this.h,this.s,this.l*a,this.opacity)},rgb(){var a=this.h%360+(this.h<0)*360,b=isNaN(a)||isNaN(this.s)?0:this.s,c=this.l,d=c+(c<.5?c:1-c)*b,e=2*c-d;return new gY(g7(a>=240?a-240:a+120,e,d),g7(a,e,d),g7(a<120?a+240:a-120,e,d),this.opacity)},clamp(){return new g4(g5(this.h),g6(this.s),g6(this.l),g_(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let a=g_(this.opacity);return`${1===a?"hsl(":"hsla("}${g5(this.h)}, ${100*g6(this.s)}%, ${100*g6(this.l)}%${1===a?")":`, ${a})`}`}}));let g9=a=>()=>a;function ha(a,b){var c=b-a;return c?function(b){return a+b*c}:g9(isNaN(a)?b:a)}let hb=function a(b){var c,d=1==(c=+b)?ha:function(a,b){var d,e,f;return b-a?(d=a,e=b,d=Math.pow(d,f=c),e=Math.pow(e,f)-d,f=1/f,function(a){return Math.pow(d+a*e,f)}):g9(isNaN(a)?b:a)};function e(a,b){var c=d((a=gX(a)).r,(b=gX(b)).r),e=d(a.g,b.g),f=d(a.b,b.b),g=ha(a.opacity,b.opacity);return function(b){return a.r=c(b),a.g=e(b),a.b=f(b),a.opacity=g(b),a+""}}return e.gamma=a,e}(1);function hc(a){return function(b){var c,d,e=b.length,f=Array(e),g=Array(e),h=Array(e);for(c=0;c<e;++c)d=gX(b[c]),f[c]=d.r||0,g[c]=d.g||0,h[c]=d.b||0;return f=a(f),g=a(g),h=a(h),d.opacity=1,function(a){return d.r=f(a),d.g=g(a),d.b=h(a),d+""}}}function hd(a,b){return a*=1,b*=1,function(c){return a*(1-c)+b*c}}hc(function(a){var b=a.length-1;return function(c){var d=c<=0?c=0:c>=1?(c=1,b-1):Math.floor(c*b),e=a[d],f=a[d+1],g=d>0?a[d-1]:2*e-f,h=d<b-1?a[d+2]:2*f-e;return g8((c-d/b)*b,g,e,f,h)}}),hc(function(a){var b=a.length;return function(c){var d=Math.floor(((c%=1)<0?++c:c)*b),e=a[(d+b-1)%b],f=a[d%b],g=a[(d+1)%b],h=a[(d+2)%b];return g8((c-d/b)*b,e,f,g,h)}});var he=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,hf=RegExp(he.source,"g");function hg(a,b){var c,d,e=typeof b;return null==b||"boolean"===e?g9(b):("number"===e?hd:"string"===e?(d=gU(b))?(b=d,hb):function(a,b){var c,d,e,f,g,h=he.lastIndex=hf.lastIndex=0,i=-1,j=[],k=[];for(a+="",b+="";(e=he.exec(a))&&(f=hf.exec(b));)(g=f.index)>h&&(g=b.slice(h,g),j[i]?j[i]+=g:j[++i]=g),(e=e[0])===(f=f[0])?j[i]?j[i]+=f:j[++i]=f:(j[++i]=null,k.push({i:i,x:hd(e,f)})),h=hf.lastIndex;return h<b.length&&(g=b.slice(h),j[i]?j[i]+=g:j[++i]=g),j.length<2?k[0]?(c=k[0].x,function(a){return c(a)+""}):(d=b,function(){return d}):(b=k.length,function(a){for(var c,d=0;d<b;++d)j[(c=k[d]).i]=c.x(a);return j.join("")})}:b instanceof gU?hb:b instanceof Date?function(a,b){var c=new Date;return a*=1,b*=1,function(d){return c.setTime(a*(1-d)+b*d),c}}:!ArrayBuffer.isView(c=b)||c instanceof DataView?Array.isArray(b)?function(a,b){var c,d=b?b.length:0,e=a?Math.min(d,a.length):0,f=Array(e),g=Array(d);for(c=0;c<e;++c)f[c]=hg(a[c],b[c]);for(;c<d;++c)g[c]=b[c];return function(a){for(c=0;c<e;++c)g[c]=f[c](a);return g}}:"function"!=typeof b.valueOf&&"function"!=typeof b.toString||isNaN(b)?function(a,b){var c,d={},e={};for(c in(null===a||"object"!=typeof a)&&(a={}),(null===b||"object"!=typeof b)&&(b={}),b)c in a?d[c]=hg(a[c],b[c]):e[c]=b[c];return function(a){for(c in d)e[c]=d[c](a);return e}}:hd:function(a,b){b||(b=[]);var c,d=a?Math.min(b.length,a.length):0,e=b.slice();return function(f){for(c=0;c<d;++c)e[c]=a[c]*(1-f)+b[c]*f;return e}})(a,b)}function hh(a,b){return a*=1,b*=1,function(c){return Math.round(a*(1-c)+b*c)}}function hi(a){return+a}var hj=[0,1];function hk(a){return a}function hl(a,b){var c;return(b-=a*=1)?function(c){return(c-a)/b}:(c=isNaN(b)?NaN:.5,function(){return c})}function hm(a,b,c){var d=a[0],e=a[1],f=b[0],g=b[1];return e<d?(d=hl(e,d),f=c(g,f)):(d=hl(d,e),f=c(f,g)),function(a){return f(d(a))}}function hn(a,b,c){var d=Math.min(a.length,b.length)-1,e=Array(d),f=Array(d),g=-1;for(a[d]<a[0]&&(a=a.slice().reverse(),b=b.slice().reverse());++g<d;)e[g]=hl(a[g],a[g+1]),f[g]=c(b[g],b[g+1]);return function(b){var c=gD(a,b,1,d)-1;return f[c](e[c](b))}}function ho(a,b){return b.domain(a.domain()).range(a.range()).interpolate(a.interpolate()).clamp(a.clamp()).unknown(a.unknown())}function hp(){var a,b,c,d,e,f,g=hj,h=hj,i=hg,j=hk;function k(){var a,b,c,i=Math.min(g.length,h.length);return j!==hk&&(a=g[0],b=g[i-1],a>b&&(c=a,a=b,b=c),j=function(c){return Math.max(a,Math.min(b,c))}),d=i>2?hn:hm,e=f=null,l}function l(b){return null==b||isNaN(b*=1)?c:(e||(e=d(g.map(a),h,i)))(a(j(b)))}return l.invert=function(c){return j(b((f||(f=d(h,g.map(a),hd)))(c)))},l.domain=function(a){return arguments.length?(g=Array.from(a,hi),k()):g.slice()},l.range=function(a){return arguments.length?(h=Array.from(a),k()):h.slice()},l.rangeRound=function(a){return h=Array.from(a),i=hh,k()},l.clamp=function(a){return arguments.length?(j=!!a||hk,k()):j!==hk},l.interpolate=function(a){return arguments.length?(i=a,k()):i},l.unknown=function(a){return arguments.length?(c=a,l):c},function(c,d){return a=c,b=d,k()}}function hq(){return hp()(hk,hk)}var hr=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function hs(a){var b;if(!(b=hr.exec(a)))throw Error("invalid format: "+a);return new ht({fill:b[1],align:b[2],sign:b[3],symbol:b[4],zero:b[5],width:b[6],comma:b[7],precision:b[8]&&b[8].slice(1),trim:b[9],type:b[10]})}function ht(a){this.fill=void 0===a.fill?" ":a.fill+"",this.align=void 0===a.align?">":a.align+"",this.sign=void 0===a.sign?"-":a.sign+"",this.symbol=void 0===a.symbol?"":a.symbol+"",this.zero=!!a.zero,this.width=void 0===a.width?void 0:+a.width,this.comma=!!a.comma,this.precision=void 0===a.precision?void 0:+a.precision,this.trim=!!a.trim,this.type=void 0===a.type?"":a.type+""}function hu(a,b){if(!isFinite(a)||0===a)return null;var c=(a=b?a.toExponential(b-1):a.toExponential()).indexOf("e"),d=a.slice(0,c);return[d.length>1?d[0]+d.slice(2):d,+a.slice(c+1)]}function hv(a){return(a=hu(Math.abs(a)))?a[1]:NaN}function hw(a,b){var c=hu(a,b);if(!c)return a+"";var d=c[0],e=c[1];return e<0?"0."+Array(-e).join("0")+d:d.length>e+1?d.slice(0,e+1)+"."+d.slice(e+1):d+Array(e-d.length+2).join("0")}hs.prototype=ht.prototype,ht.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};let hx={"%":(a,b)=>(100*a).toFixed(b),b:a=>Math.round(a).toString(2),c:a=>a+"",d:function(a){return Math.abs(a=Math.round(a))>=1e21?a.toLocaleString("en").replace(/,/g,""):a.toString(10)},e:(a,b)=>a.toExponential(b),f:(a,b)=>a.toFixed(b),g:(a,b)=>a.toPrecision(b),o:a=>Math.round(a).toString(8),p:(a,b)=>hw(100*a,b),r:hw,s:function(a,b){var c=hu(a,b);if(!c)return g=void 0,a.toPrecision(b);var d=c[0],e=c[1],f=e-(g=3*Math.max(-8,Math.min(8,Math.floor(e/3))))+1,h=d.length;return f===h?d:f>h?d+Array(f-h+1).join("0"):f>0?d.slice(0,f)+"."+d.slice(f):"0."+Array(1-f).join("0")+hu(a,Math.max(0,b+f-1))[0]},X:a=>Math.round(a).toString(16).toUpperCase(),x:a=>Math.round(a).toString(16)};function hy(a){return a}var hz=Array.prototype.map,hA=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"];function hB(a,b,c,d){var e,f,g=gw(a,b,c);switch((d=hs(null==d?",f":d)).type){case"s":var h=Math.max(Math.abs(a),Math.abs(b));return null!=d.precision||isNaN(f=Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(hv(h)/3)))-hv(Math.abs(g))))||(d.precision=f),j(d,h);case"":case"e":case"g":case"p":case"r":null!=d.precision||isNaN(f=Math.max(0,hv(Math.abs(Math.max(Math.abs(a),Math.abs(b)))-(e=Math.abs(e=g)))-hv(e))+1)||(d.precision=f-("e"===d.type));break;case"f":case"%":null!=d.precision||isNaN(f=Math.max(0,-hv(Math.abs(g))))||(d.precision=f-("%"===d.type)*2)}return i(d)}function hC(a){var b=a.domain;return a.ticks=function(a){var c=b();return gu(c[0],c[c.length-1],null==a?10:a)},a.tickFormat=function(a,c){var d=b();return hB(d[0],d[d.length-1],null==a?10:a,c)},a.nice=function(c){null==c&&(c=10);var d,e,f=b(),g=0,h=f.length-1,i=f[g],j=f[h],k=10;for(j<i&&(e=i,i=j,j=e,e=g,g=h,h=e);k-- >0;){if((e=gv(i,j,c))===d)return f[g]=i,f[h]=j,b(f);if(e>0)i=Math.floor(i/e)*e,j=Math.ceil(j/e)*e;else if(e<0)i=Math.ceil(i*e)/e,j=Math.floor(j*e)/e;else break;d=e}return a},a}function hD(a,b){a=a.slice();var c,d=0,e=a.length-1,f=a[d],g=a[e];return g<f&&(c=d,d=e,e=c,c=f,f=g,g=c),a[d]=b.floor(f),a[e]=b.ceil(g),a}function hE(a){return Math.log(a)}function hF(a){return Math.exp(a)}function hG(a){return-Math.log(-a)}function hH(a){return-Math.exp(-a)}function hI(a){return isFinite(a)?+("1e"+a):a<0?0:a}function hJ(a){return(b,c)=>-a(-b,c)}function hK(a){let b,c,d=a(hE,hF),e=d.domain,f=10;function g(){var g,h;return b=(g=f)===Math.E?Math.log:10===g&&Math.log10||2===g&&Math.log2||(g=Math.log(g),a=>Math.log(a)/g),c=10===(h=f)?hI:h===Math.E?Math.exp:a=>Math.pow(h,a),e()[0]<0?(b=hJ(b),c=hJ(c),a(hG,hH)):a(hE,hF),d}return d.base=function(a){return arguments.length?(f=+a,g()):f},d.domain=function(a){return arguments.length?(e(a),g()):e()},d.ticks=a=>{let d,g,h=e(),i=h[0],j=h[h.length-1],k=j<i;k&&([i,j]=[j,i]);let l=b(i),m=b(j),n=null==a?10:+a,o=[];if(!(f%1)&&m-l<n){if(l=Math.floor(l),m=Math.ceil(m),i>0){for(;l<=m;++l)for(d=1;d<f;++d)if(!((g=l<0?d/c(-l):d*c(l))<i)){if(g>j)break;o.push(g)}}else for(;l<=m;++l)for(d=f-1;d>=1;--d)if(!((g=l>0?d/c(-l):d*c(l))<i)){if(g>j)break;o.push(g)}2*o.length<n&&(o=gu(i,j,n))}else o=gu(l,m,Math.min(m-l,n)).map(c);return k?o.reverse():o},d.tickFormat=(a,e)=>{if(null==a&&(a=10),null==e&&(e=10===f?"s":","),"function"!=typeof e&&(f%1||null!=(e=hs(e)).precision||(e.trim=!0),e=i(e)),a===1/0)return e;let g=Math.max(1,f*a/d.ticks().length);return a=>{let d=a/c(Math.round(b(a)));return d*f<f-.5&&(d*=f),d<=g?e(a):""}},d.nice=()=>e(hD(e(),{floor:a=>c(Math.floor(b(a))),ceil:a=>c(Math.ceil(b(a)))})),d}function hL(a){return function(b){return Math.sign(b)*Math.log1p(Math.abs(b/a))}}function hM(a){return function(b){return Math.sign(b)*Math.expm1(Math.abs(b))*a}}function hN(a){var b=1,c=a(hL(1),hM(b));return c.constant=function(c){return arguments.length?a(hL(b=+c),hM(b)):b},hC(c)}function hO(a){return function(b){return b<0?-Math.pow(-b,a):Math.pow(b,a)}}function hP(a){return a<0?-Math.sqrt(-a):Math.sqrt(a)}function hQ(a){return a<0?-a*a:a*a}function hR(a){var b=a(hk,hk),c=1;return b.exponent=function(b){return arguments.length?1==(c=+b)?a(hk,hk):.5===c?a(hP,hQ):a(hO(c),hO(1/c)):c},hC(b)}function hS(){var a=hR(hp());return a.copy=function(){return ho(a,hS()).exponent(a.exponent())},gh.apply(a,arguments),a}function hT(){return hS.apply(null,arguments).exponent(.5)}function hU(a){return Math.sign(a)*a*a}function hV(a,b){let c;if(void 0===b)for(let b of a)null!=b&&(c<b||void 0===c&&b>=b)&&(c=b);else{let d=-1;for(let e of a)null!=(e=b(e,++d,a))&&(c<e||void 0===c&&e>=e)&&(c=e)}return c}function hW(a,b){let c;if(void 0===b)for(let b of a)null!=b&&(c>b||void 0===c&&b>=b)&&(c=b);else{let d=-1;for(let e of a)null!=(e=b(e,++d,a))&&(c>e||void 0===c&&e>=e)&&(c=e)}return c}function hX(a,b){return(null==a||!(a>=a))-(null==b||!(b>=b))||(a<b?-1:+(a>b))}function hY(a,b,c){let d=a[b];a[b]=a[c],a[c]=d}i=(h=function(a){var b,c,d,e=void 0===a.grouping||void 0===a.thousands?hy:(b=hz.call(a.grouping,Number),c=a.thousands+"",function(a,d){for(var e=a.length,f=[],g=0,h=b[0],i=0;e>0&&h>0&&(i+h+1>d&&(h=Math.max(1,d-i)),f.push(a.substring(e-=h,e+h)),!((i+=h+1)>d));)h=b[g=(g+1)%b.length];return f.reverse().join(c)}),f=void 0===a.currency?"":a.currency[0]+"",h=void 0===a.currency?"":a.currency[1]+"",i=void 0===a.decimal?".":a.decimal+"",j=void 0===a.numerals?hy:(d=hz.call(a.numerals,String),function(a){return a.replace(/[0-9]/g,function(a){return d[+a]})}),k=void 0===a.percent?"%":a.percent+"",l=void 0===a.minus?"−":a.minus+"",m=void 0===a.nan?"NaN":a.nan+"";function n(a,b){var c=(a=hs(a)).fill,d=a.align,n=a.sign,o=a.symbol,p=a.zero,q=a.width,r=a.comma,s=a.precision,t=a.trim,u=a.type;"n"===u?(r=!0,u="g"):hx[u]||(void 0===s&&(s=12),t=!0,u="g"),(p||"0"===c&&"="===d)&&(p=!0,c="0",d="=");var v=(b&&void 0!==b.prefix?b.prefix:"")+("$"===o?f:"#"===o&&/[boxX]/.test(u)?"0"+u.toLowerCase():""),w=("$"===o?h:/[%p]/.test(u)?k:"")+(b&&void 0!==b.suffix?b.suffix:""),x=hx[u],y=/[defgprs%]/.test(u);function z(a){var b,f,h,k=v,o=w;if("c"===u)o=x(a)+o,a="";else{var z=(a*=1)<0||1/a<0;if(a=isNaN(a)?m:x(Math.abs(a),s),t&&(a=function(a){a:for(var b,c=a.length,d=1,e=-1;d<c;++d)switch(a[d]){case".":e=b=d;break;case"0":0===e&&(e=d),b=d;break;default:if(!+a[d])break a;e>0&&(e=0)}return e>0?a.slice(0,e)+a.slice(b+1):a}(a)),z&&0==+a&&"+"!==n&&(z=!1),k=(z?"("===n?n:l:"-"===n||"("===n?"":n)+k,o=("s"!==u||isNaN(a)||void 0===g?"":hA[8+g/3])+o+(z&&"("===n?")":""),y){for(b=-1,f=a.length;++b<f;)if(48>(h=a.charCodeAt(b))||h>57){o=(46===h?i+a.slice(b+1):a.slice(b))+o,a=a.slice(0,b);break}}}r&&!p&&(a=e(a,1/0));var A=k.length+a.length+o.length,B=A<q?Array(q-A+1).join(c):"";switch(r&&p&&(a=e(B+a,B.length?q-o.length:1/0),B=""),d){case"<":a=k+a+o+B;break;case"=":a=k+B+a+o;break;case"^":a=B.slice(0,A=B.length>>1)+k+a+o+B.slice(A);break;default:a=B+k+a+o}return j(a)}return s=void 0===s?6:/[gprs]/.test(u)?Math.max(1,Math.min(21,s)):Math.max(0,Math.min(20,s)),z.toString=function(){return a+""},z}return{format:n,formatPrefix:function(a,b){var c=3*Math.max(-8,Math.min(8,Math.floor(hv(b)/3))),d=Math.pow(10,-c),e=n(((a=hs(a)).type="f",a),{suffix:hA[8+c/3]});return function(a){return e(d*a)}}}}({thousands:",",grouping:[3],currency:["$",""]})).format,j=h.formatPrefix;let hZ=new Date,h$=new Date;function h_(a,b,c,d){function e(b){return a(b=0==arguments.length?new Date:new Date(+b)),b}return e.floor=b=>(a(b=new Date(+b)),b),e.ceil=c=>(a(c=new Date(c-1)),b(c,1),a(c),c),e.round=a=>{let b=e(a),c=e.ceil(a);return a-b<c-a?b:c},e.offset=(a,c)=>(b(a=new Date(+a),null==c?1:Math.floor(c)),a),e.range=(c,d,f)=>{let g,h=[];if(c=e.ceil(c),f=null==f?1:Math.floor(f),!(c<d)||!(f>0))return h;do h.push(g=new Date(+c)),b(c,f),a(c);while(g<c&&c<d);return h},e.filter=c=>h_(b=>{if(b>=b)for(;a(b),!c(b);)b.setTime(b-1)},(a,d)=>{if(a>=a)if(d<0)for(;++d<=0;)for(;b(a,-1),!c(a););else for(;--d>=0;)for(;b(a,1),!c(a););}),c&&(e.count=(b,d)=>(hZ.setTime(+b),h$.setTime(+d),a(hZ),a(h$),Math.floor(c(hZ,h$))),e.every=a=>isFinite(a=Math.floor(a))&&a>0?a>1?e.filter(d?b=>d(b)%a==0:b=>e.count(0,b)%a==0):e:null),e}let h0=h_(()=>{},(a,b)=>{a.setTime(+a+b)},(a,b)=>b-a);h0.every=a=>isFinite(a=Math.floor(a))&&a>0?a>1?h_(b=>{b.setTime(Math.floor(b/a)*a)},(b,c)=>{b.setTime(+b+c*a)},(b,c)=>(c-b)/a):h0:null,h0.range;let h1=h_(a=>{a.setTime(a-a.getMilliseconds())},(a,b)=>{a.setTime(+a+1e3*b)},(a,b)=>(b-a)/1e3,a=>a.getUTCSeconds());h1.range;let h2=h_(a=>{a.setTime(a-a.getMilliseconds()-1e3*a.getSeconds())},(a,b)=>{a.setTime(+a+6e4*b)},(a,b)=>(b-a)/6e4,a=>a.getMinutes());h2.range;let h3=h_(a=>{a.setUTCSeconds(0,0)},(a,b)=>{a.setTime(+a+6e4*b)},(a,b)=>(b-a)/6e4,a=>a.getUTCMinutes());h3.range;let h4=h_(a=>{a.setTime(a-a.getMilliseconds()-1e3*a.getSeconds()-6e4*a.getMinutes())},(a,b)=>{a.setTime(+a+36e5*b)},(a,b)=>(b-a)/36e5,a=>a.getHours());h4.range;let h5=h_(a=>{a.setUTCMinutes(0,0,0)},(a,b)=>{a.setTime(+a+36e5*b)},(a,b)=>(b-a)/36e5,a=>a.getUTCHours());h5.range;let h6=h_(a=>a.setHours(0,0,0,0),(a,b)=>a.setDate(a.getDate()+b),(a,b)=>(b-a-(b.getTimezoneOffset()-a.getTimezoneOffset())*6e4)/864e5,a=>a.getDate()-1);h6.range;let h7=h_(a=>{a.setUTCHours(0,0,0,0)},(a,b)=>{a.setUTCDate(a.getUTCDate()+b)},(a,b)=>(b-a)/864e5,a=>a.getUTCDate()-1);h7.range;let h8=h_(a=>{a.setUTCHours(0,0,0,0)},(a,b)=>{a.setUTCDate(a.getUTCDate()+b)},(a,b)=>(b-a)/864e5,a=>Math.floor(a/864e5));function h9(a){return h_(b=>{b.setDate(b.getDate()-(b.getDay()+7-a)%7),b.setHours(0,0,0,0)},(a,b)=>{a.setDate(a.getDate()+7*b)},(a,b)=>(b-a-(b.getTimezoneOffset()-a.getTimezoneOffset())*6e4)/6048e5)}h8.range;let ia=h9(0),ib=h9(1),ic=h9(2),id=h9(3),ie=h9(4),ig=h9(5),ih=h9(6);function ii(a){return h_(b=>{b.setUTCDate(b.getUTCDate()-(b.getUTCDay()+7-a)%7),b.setUTCHours(0,0,0,0)},(a,b)=>{a.setUTCDate(a.getUTCDate()+7*b)},(a,b)=>(b-a)/6048e5)}ia.range,ib.range,ic.range,id.range,ie.range,ig.range,ih.range;let ij=ii(0),ik=ii(1),il=ii(2),im=ii(3),io=ii(4),ip=ii(5),iq=ii(6);ij.range,ik.range,il.range,im.range,io.range,ip.range,iq.range;let ir=h_(a=>{a.setDate(1),a.setHours(0,0,0,0)},(a,b)=>{a.setMonth(a.getMonth()+b)},(a,b)=>b.getMonth()-a.getMonth()+(b.getFullYear()-a.getFullYear())*12,a=>a.getMonth());ir.range;let is=h_(a=>{a.setUTCDate(1),a.setUTCHours(0,0,0,0)},(a,b)=>{a.setUTCMonth(a.getUTCMonth()+b)},(a,b)=>b.getUTCMonth()-a.getUTCMonth()+(b.getUTCFullYear()-a.getUTCFullYear())*12,a=>a.getUTCMonth());is.range;let it=h_(a=>{a.setMonth(0,1),a.setHours(0,0,0,0)},(a,b)=>{a.setFullYear(a.getFullYear()+b)},(a,b)=>b.getFullYear()-a.getFullYear(),a=>a.getFullYear());it.every=a=>isFinite(a=Math.floor(a))&&a>0?h_(b=>{b.setFullYear(Math.floor(b.getFullYear()/a)*a),b.setMonth(0,1),b.setHours(0,0,0,0)},(b,c)=>{b.setFullYear(b.getFullYear()+c*a)}):null,it.range;let iu=h_(a=>{a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0)},(a,b)=>{a.setUTCFullYear(a.getUTCFullYear()+b)},(a,b)=>b.getUTCFullYear()-a.getUTCFullYear(),a=>a.getUTCFullYear());function iv(a,b,c,d,e,f){let g=[[h1,1,1e3],[h1,5,5e3],[h1,15,15e3],[h1,30,3e4],[f,1,6e4],[f,5,3e5],[f,15,9e5],[f,30,18e5],[e,1,36e5],[e,3,108e5],[e,6,216e5],[e,12,432e5],[d,1,864e5],[d,2,1728e5],[c,1,6048e5],[b,1,2592e6],[b,3,7776e6],[a,1,31536e6]];function h(b,c,d){let e=Math.abs(c-b)/d,f=gz(([,,a])=>a).right(g,e);if(f===g.length)return a.every(gw(b/31536e6,c/31536e6,d));if(0===f)return h0.every(Math.max(gw(b,c,d),1));let[h,i]=g[e/g[f-1][2]<g[f][2]/e?f-1:f];return h.every(i)}return[function(a,b,c){let d=b<a;d&&([a,b]=[b,a]);let e=c&&"function"==typeof c.range?c:h(a,b,c),f=e?e.range(a,+b+1):[];return d?f.reverse():f},h]}iu.every=a=>isFinite(a=Math.floor(a))&&a>0?h_(b=>{b.setUTCFullYear(Math.floor(b.getUTCFullYear()/a)*a),b.setUTCMonth(0,1),b.setUTCHours(0,0,0,0)},(b,c)=>{b.setUTCFullYear(b.getUTCFullYear()+c*a)}):null,iu.range;let[iw,ix]=iv(iu,is,ij,h8,h5,h3),[iy,iz]=iv(it,ir,ia,h6,h4,h2);function iA(a){if(0<=a.y&&a.y<100){var b=new Date(-1,a.m,a.d,a.H,a.M,a.S,a.L);return b.setFullYear(a.y),b}return new Date(a.y,a.m,a.d,a.H,a.M,a.S,a.L)}function iB(a){if(0<=a.y&&a.y<100){var b=new Date(Date.UTC(-1,a.m,a.d,a.H,a.M,a.S,a.L));return b.setUTCFullYear(a.y),b}return new Date(Date.UTC(a.y,a.m,a.d,a.H,a.M,a.S,a.L))}function iC(a,b,c){return{y:a,m:b,d:c,H:0,M:0,S:0,L:0}}var iD={"-":"",_:" ",0:"0"},iE=/^\s*\d+/,iF=/^%/,iG=/[\\^$*+?|[\]().{}]/g;function iH(a,b,c){var d=a<0?"-":"",e=(d?-a:a)+"",f=e.length;return d+(f<c?Array(c-f+1).join(b)+e:e)}function iI(a){return a.replace(iG,"\\$&")}function iJ(a){return RegExp("^(?:"+a.map(iI).join("|")+")","i")}function iK(a){return new Map(a.map((a,b)=>[a.toLowerCase(),b]))}function iL(a,b,c){var d=iE.exec(b.slice(c,c+1));return d?(a.w=+d[0],c+d[0].length):-1}function iM(a,b,c){var d=iE.exec(b.slice(c,c+1));return d?(a.u=+d[0],c+d[0].length):-1}function iN(a,b,c){var d=iE.exec(b.slice(c,c+2));return d?(a.U=+d[0],c+d[0].length):-1}function iO(a,b,c){var d=iE.exec(b.slice(c,c+2));return d?(a.V=+d[0],c+d[0].length):-1}function iP(a,b,c){var d=iE.exec(b.slice(c,c+2));return d?(a.W=+d[0],c+d[0].length):-1}function iQ(a,b,c){var d=iE.exec(b.slice(c,c+4));return d?(a.y=+d[0],c+d[0].length):-1}function iR(a,b,c){var d=iE.exec(b.slice(c,c+2));return d?(a.y=+d[0]+(+d[0]>68?1900:2e3),c+d[0].length):-1}function iS(a,b,c){var d=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(b.slice(c,c+6));return d?(a.Z=d[1]?0:-(d[2]+(d[3]||"00")),c+d[0].length):-1}function iT(a,b,c){var d=iE.exec(b.slice(c,c+1));return d?(a.q=3*d[0]-3,c+d[0].length):-1}function iU(a,b,c){var d=iE.exec(b.slice(c,c+2));return d?(a.m=d[0]-1,c+d[0].length):-1}function iV(a,b,c){var d=iE.exec(b.slice(c,c+2));return d?(a.d=+d[0],c+d[0].length):-1}function iW(a,b,c){var d=iE.exec(b.slice(c,c+3));return d?(a.m=0,a.d=+d[0],c+d[0].length):-1}function iX(a,b,c){var d=iE.exec(b.slice(c,c+2));return d?(a.H=+d[0],c+d[0].length):-1}function iY(a,b,c){var d=iE.exec(b.slice(c,c+2));return d?(a.M=+d[0],c+d[0].length):-1}function iZ(a,b,c){var d=iE.exec(b.slice(c,c+2));return d?(a.S=+d[0],c+d[0].length):-1}function i$(a,b,c){var d=iE.exec(b.slice(c,c+3));return d?(a.L=+d[0],c+d[0].length):-1}function i_(a,b,c){var d=iE.exec(b.slice(c,c+6));return d?(a.L=Math.floor(d[0]/1e3),c+d[0].length):-1}function i0(a,b,c){var d=iF.exec(b.slice(c,c+1));return d?c+d[0].length:-1}function i1(a,b,c){var d=iE.exec(b.slice(c));return d?(a.Q=+d[0],c+d[0].length):-1}function i2(a,b,c){var d=iE.exec(b.slice(c));return d?(a.s=+d[0],c+d[0].length):-1}function i3(a,b){return iH(a.getDate(),b,2)}function i4(a,b){return iH(a.getHours(),b,2)}function i5(a,b){return iH(a.getHours()%12||12,b,2)}function i6(a,b){return iH(1+h6.count(it(a),a),b,3)}function i7(a,b){return iH(a.getMilliseconds(),b,3)}function i8(a,b){return i7(a,b)+"000"}function i9(a,b){return iH(a.getMonth()+1,b,2)}function ja(a,b){return iH(a.getMinutes(),b,2)}function jb(a,b){return iH(a.getSeconds(),b,2)}function jc(a){var b=a.getDay();return 0===b?7:b}function jd(a,b){return iH(ia.count(it(a)-1,a),b,2)}function je(a){var b=a.getDay();return b>=4||0===b?ie(a):ie.ceil(a)}function jf(a,b){return a=je(a),iH(ie.count(it(a),a)+(4===it(a).getDay()),b,2)}function jg(a){return a.getDay()}function jh(a,b){return iH(ib.count(it(a)-1,a),b,2)}function ji(a,b){return iH(a.getFullYear()%100,b,2)}function jj(a,b){return iH((a=je(a)).getFullYear()%100,b,2)}function jk(a,b){return iH(a.getFullYear()%1e4,b,4)}function jl(a,b){var c=a.getDay();return iH((a=c>=4||0===c?ie(a):ie.ceil(a)).getFullYear()%1e4,b,4)}function jm(a){var b=a.getTimezoneOffset();return(b>0?"-":(b*=-1,"+"))+iH(b/60|0,"0",2)+iH(b%60,"0",2)}function jn(a,b){return iH(a.getUTCDate(),b,2)}function jo(a,b){return iH(a.getUTCHours(),b,2)}function jp(a,b){return iH(a.getUTCHours()%12||12,b,2)}function jq(a,b){return iH(1+h7.count(iu(a),a),b,3)}function jr(a,b){return iH(a.getUTCMilliseconds(),b,3)}function js(a,b){return jr(a,b)+"000"}function jt(a,b){return iH(a.getUTCMonth()+1,b,2)}function ju(a,b){return iH(a.getUTCMinutes(),b,2)}function jv(a,b){return iH(a.getUTCSeconds(),b,2)}function jw(a){var b=a.getUTCDay();return 0===b?7:b}function jx(a,b){return iH(ij.count(iu(a)-1,a),b,2)}function jy(a){var b=a.getUTCDay();return b>=4||0===b?io(a):io.ceil(a)}function jz(a,b){return a=jy(a),iH(io.count(iu(a),a)+(4===iu(a).getUTCDay()),b,2)}function jA(a){return a.getUTCDay()}function jB(a,b){return iH(ik.count(iu(a)-1,a),b,2)}function jC(a,b){return iH(a.getUTCFullYear()%100,b,2)}function jD(a,b){return iH((a=jy(a)).getUTCFullYear()%100,b,2)}function jE(a,b){return iH(a.getUTCFullYear()%1e4,b,4)}function jF(a,b){var c=a.getUTCDay();return iH((a=c>=4||0===c?io(a):io.ceil(a)).getUTCFullYear()%1e4,b,4)}function jG(){return"+0000"}function jH(){return"%"}function jI(a){return+a}function jJ(a){return Math.floor(a/1e3)}function jK(a){return new Date(a)}function jL(a){return a instanceof Date?+a:+new Date(+a)}function jM(a,b,c,d,e,f,g,h,i,j){var k=hq(),l=k.invert,m=k.domain,n=j(".%L"),o=j(":%S"),p=j("%I:%M"),q=j("%I %p"),r=j("%a %d"),s=j("%b %d"),t=j("%B"),u=j("%Y");function v(a){return(i(a)<a?n:h(a)<a?o:g(a)<a?p:f(a)<a?q:d(a)<a?e(a)<a?r:s:c(a)<a?t:u)(a)}return k.invert=function(a){return new Date(l(a))},k.domain=function(a){return arguments.length?m(Array.from(a,jL)):m().map(jK)},k.ticks=function(b){var c=m();return a(c[0],c[c.length-1],null==b?10:b)},k.tickFormat=function(a,b){return null==b?v:j(b)},k.nice=function(a){var c=m();return a&&"function"==typeof a.range||(a=b(c[0],c[c.length-1],null==a?10:a)),a?m(hD(c,a)):k},k.copy=function(){return ho(k,jM(a,b,c,d,e,f,g,h,i,j))},k}function jN(){return gh.apply(jM(iy,iz,it,ir,ia,h6,h4,h2,h1,l).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function jO(){return gh.apply(jM(iw,ix,iu,is,ij,h7,h5,h3,h1,m).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function jP(){var a,b,c,d,e,f=0,g=1,h=hk,i=!1;function j(b){return null==b||isNaN(b*=1)?e:h(0===c?.5:(b=(d(b)-a)*c,i?Math.max(0,Math.min(1,b)):b))}function k(a){return function(b){var c,d;return arguments.length?([c,d]=b,h=a(c,d),j):[h(0),h(1)]}}return j.domain=function(e){return arguments.length?([f,g]=e,a=d(f*=1),b=d(g*=1),c=a===b?0:1/(b-a),j):[f,g]},j.clamp=function(a){return arguments.length?(i=!!a,j):i},j.interpolator=function(a){return arguments.length?(h=a,j):h},j.range=k(hg),j.rangeRound=k(hh),j.unknown=function(a){return arguments.length?(e=a,j):e},function(e){return d=e,a=e(f),b=e(g),c=a===b?0:1/(b-a),j}}function jQ(a,b){return b.domain(a.domain()).interpolator(a.interpolator()).clamp(a.clamp()).unknown(a.unknown())}function jR(){var a=hR(jP());return a.copy=function(){return jQ(a,jR()).exponent(a.exponent())},gi.apply(a,arguments)}function jS(){return jR.apply(null,arguments).exponent(.5)}function jT(){var a,b,c,d,e,f,g,h=0,i=.5,j=1,k=1,l=hk,m=!1;function n(a){return isNaN(a*=1)?g:(a=.5+((a=+f(a))-b)*(k*a<k*b?d:e),l(m?Math.max(0,Math.min(1,a)):a))}function o(a){return function(b){var c,d,e;return arguments.length?([c,d,e]=b,l=function(a,b){void 0===b&&(b=a,a=hg);for(var c=0,d=b.length-1,e=b[0],f=Array(d<0?0:d);c<d;)f[c]=a(e,e=b[++c]);return function(a){var b=Math.max(0,Math.min(d-1,Math.floor(a*=d)));return f[b](a-b)}}(a,[c,d,e]),n):[l(0),l(.5),l(1)]}}return n.domain=function(g){return arguments.length?([h,i,j]=g,a=f(h*=1),b=f(i*=1),c=f(j*=1),d=a===b?0:.5/(b-a),e=b===c?0:.5/(c-b),k=b<a?-1:1,n):[h,i,j]},n.clamp=function(a){return arguments.length?(m=!!a,n):m},n.interpolator=function(a){return arguments.length?(l=a,n):l},n.range=o(hg),n.rangeRound=o(hh),n.unknown=function(a){return arguments.length?(g=a,n):g},function(g){return f=g,a=g(h),b=g(i),c=g(j),d=a===b?0:.5/(b-a),e=b===c?0:.5/(c-b),k=b<a?-1:1,n}}function jU(){var a=hR(jT());return a.copy=function(){return jQ(a,jU()).exponent(a.exponent())},gi.apply(a,arguments)}function jV(){return jU.apply(null,arguments).exponent(.5)}function jW(a,b,c){if("function"==typeof a)return a.copy().domain(b).range(c);if(null!=a){var d=function(a){if(a in K&&"function"==typeof K[a])return K[a]();var b="scale".concat(af(a));if(b in K&&"function"==typeof K[b])return K[b]()}(a);if(null!=d)return d.domain(b).range(c),d}}function jX(a,b,c,d){if(null!=c&&null!=d)return"function"==typeof a.scale?jW(a.scale,c,d):jW(b,c,d)}l=(k=function(a){var b=a.dateTime,c=a.date,d=a.time,e=a.periods,f=a.days,g=a.shortDays,h=a.months,i=a.shortMonths,j=iJ(e),k=iK(e),l=iJ(f),m=iK(f),n=iJ(g),o=iK(g),p=iJ(h),q=iK(h),r=iJ(i),s=iK(i),t={a:function(a){return g[a.getDay()]},A:function(a){return f[a.getDay()]},b:function(a){return i[a.getMonth()]},B:function(a){return h[a.getMonth()]},c:null,d:i3,e:i3,f:i8,g:jj,G:jl,H:i4,I:i5,j:i6,L:i7,m:i9,M:ja,p:function(a){return e[+(a.getHours()>=12)]},q:function(a){return 1+~~(a.getMonth()/3)},Q:jI,s:jJ,S:jb,u:jc,U:jd,V:jf,w:jg,W:jh,x:null,X:null,y:ji,Y:jk,Z:jm,"%":jH},u={a:function(a){return g[a.getUTCDay()]},A:function(a){return f[a.getUTCDay()]},b:function(a){return i[a.getUTCMonth()]},B:function(a){return h[a.getUTCMonth()]},c:null,d:jn,e:jn,f:js,g:jD,G:jF,H:jo,I:jp,j:jq,L:jr,m:jt,M:ju,p:function(a){return e[+(a.getUTCHours()>=12)]},q:function(a){return 1+~~(a.getUTCMonth()/3)},Q:jI,s:jJ,S:jv,u:jw,U:jx,V:jz,w:jA,W:jB,x:null,X:null,y:jC,Y:jE,Z:jG,"%":jH},v={a:function(a,b,c){var d=n.exec(b.slice(c));return d?(a.w=o.get(d[0].toLowerCase()),c+d[0].length):-1},A:function(a,b,c){var d=l.exec(b.slice(c));return d?(a.w=m.get(d[0].toLowerCase()),c+d[0].length):-1},b:function(a,b,c){var d=r.exec(b.slice(c));return d?(a.m=s.get(d[0].toLowerCase()),c+d[0].length):-1},B:function(a,b,c){var d=p.exec(b.slice(c));return d?(a.m=q.get(d[0].toLowerCase()),c+d[0].length):-1},c:function(a,c,d){return y(a,b,c,d)},d:iV,e:iV,f:i_,g:iR,G:iQ,H:iX,I:iX,j:iW,L:i$,m:iU,M:iY,p:function(a,b,c){var d=j.exec(b.slice(c));return d?(a.p=k.get(d[0].toLowerCase()),c+d[0].length):-1},q:iT,Q:i1,s:i2,S:iZ,u:iM,U:iN,V:iO,w:iL,W:iP,x:function(a,b,d){return y(a,c,b,d)},X:function(a,b,c){return y(a,d,b,c)},y:iR,Y:iQ,Z:iS,"%":i0};function w(a,b){return function(c){var d,e,f,g=[],h=-1,i=0,j=a.length;for(c instanceof Date||(c=new Date(+c));++h<j;)37===a.charCodeAt(h)&&(g.push(a.slice(i,h)),null!=(e=iD[d=a.charAt(++h)])?d=a.charAt(++h):e="e"===d?" ":"0",(f=b[d])&&(d=f(c,e)),g.push(d),i=h+1);return g.push(a.slice(i,h)),g.join("")}}function x(a,b){return function(c){var d,e,f=iC(1900,void 0,1);if(y(f,a,c+="",0)!=c.length)return null;if("Q"in f)return new Date(f.Q);if("s"in f)return new Date(1e3*f.s+("L"in f?f.L:0));if(!b||"Z"in f||(f.Z=0),"p"in f&&(f.H=f.H%12+12*f.p),void 0===f.m&&(f.m="q"in f?f.q:0),"V"in f){if(f.V<1||f.V>53)return null;"w"in f||(f.w=1),"Z"in f?(d=(e=(d=iB(iC(f.y,0,1))).getUTCDay())>4||0===e?ik.ceil(d):ik(d),d=h7.offset(d,(f.V-1)*7),f.y=d.getUTCFullYear(),f.m=d.getUTCMonth(),f.d=d.getUTCDate()+(f.w+6)%7):(d=(e=(d=iA(iC(f.y,0,1))).getDay())>4||0===e?ib.ceil(d):ib(d),d=h6.offset(d,(f.V-1)*7),f.y=d.getFullYear(),f.m=d.getMonth(),f.d=d.getDate()+(f.w+6)%7)}else("W"in f||"U"in f)&&("w"in f||(f.w="u"in f?f.u%7:+("W"in f)),e="Z"in f?iB(iC(f.y,0,1)).getUTCDay():iA(iC(f.y,0,1)).getDay(),f.m=0,f.d="W"in f?(f.w+6)%7+7*f.W-(e+5)%7:f.w+7*f.U-(e+6)%7);return"Z"in f?(f.H+=f.Z/100|0,f.M+=f.Z%100,iB(f)):iA(f)}}function y(a,b,c,d){for(var e,f,g=0,h=b.length,i=c.length;g<h;){if(d>=i)return -1;if(37===(e=b.charCodeAt(g++))){if(!(f=v[(e=b.charAt(g++))in iD?b.charAt(g++):e])||(d=f(a,c,d))<0)return -1}else if(e!=c.charCodeAt(d++))return -1}return d}return t.x=w(c,t),t.X=w(d,t),t.c=w(b,t),u.x=w(c,u),u.X=w(d,u),u.c=w(b,u),{format:function(a){var b=w(a+="",t);return b.toString=function(){return a},b},parse:function(a){var b=x(a+="",!1);return b.toString=function(){return a},b},utcFormat:function(a){var b=w(a+="",u);return b.toString=function(){return a},b},utcParse:function(a){var b=x(a+="",!0);return b.toString=function(){return a},b}}}({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]})).format,k.parse,m=k.utcFormat,k.utcParse;var jY=(a,b,c)=>{if(null!=a){var{scale:d,type:e}=a;if("auto"===d)return"category"===e&&c&&(c.indexOf("LineChart")>=0||c.indexOf("AreaChart")>=0||c.indexOf("ComposedChart")>=0&&!b)?"point":"category"===e?"band":"linear";if("string"==typeof d)return"scale".concat(af(d))in K?d:"point"}};function jZ(a,b){if(a){var c=null!=b?b:a.domain(),d=c.map(b=>{var c;return null!=(c=a(b))?c:0}),e=a.range();if(0!==c.length&&!(e.length<2))return a=>{var b,e,f=function(a,b){for(var c=0,d=a.length,e=a[0]<a[a.length-1];c<d;){var f=Math.floor((c+d)/2);(e?a[f]<b:a[f]>b)?c=f+1:d=f}return c}(d,a);return f<=0?c[0]:f>=c.length?c[c.length-1]:Math.abs(a-(null!=(b=d[f-1])?b:0))<=Math.abs(a-(null!=(e=d[f])?e:0))?c[f-1]:c[f]}}}function j$(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function j_(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?j$(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):j$(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var j0=[0,"auto"],j1={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:void 0,height:30,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"bottom",padding:{left:0,right:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"category",unit:void 0,niceTicks:"auto"},j2=(a,b)=>a.cartesianAxis.xAxis[b],j3=(a,b)=>{var c=j2(a,b);return null==c?j1:c},j4={allowDataOverflow:!1,allowDecimals:!0,allowDuplicatedCategory:!0,angle:0,dataKey:void 0,domain:j0,hide:!0,id:0,includeHidden:!1,interval:"preserveEnd",minTickGap:5,mirror:!1,name:void 0,orientation:"left",padding:{top:0,bottom:0},reversed:!1,scale:"auto",tick:!0,tickCount:5,tickFormatter:void 0,ticks:void 0,type:"number",unit:void 0,niceTicks:"auto",width:60},j5=(a,b)=>a.cartesianAxis.yAxis[b],j6=(a,b)=>{var c=j5(a,b);return null==c?j4:c},j7={domain:[0,"auto"],includeHidden:!1,reversed:!1,allowDataOverflow:!1,allowDuplicatedCategory:!1,dataKey:void 0,id:0,name:"",range:[64,64],scale:"auto",type:"number",unit:""},j8=(a,b)=>{var c=a.cartesianAxis.zAxis[b];return null==c?j7:c},j9=(a,b,c)=>{switch(b){case"xAxis":return j3(a,c);case"yAxis":return j6(a,c);case"zAxis":return j8(a,c);case"angleAxis":return fZ(a,c);case"radiusAxis":return f$(a,c);default:throw Error("Unexpected axis type: ".concat(b))}},ka=(a,b,c)=>{switch(b){case"xAxis":return j3(a,c);case"yAxis":return j6(a,c);case"angleAxis":return fZ(a,c);case"radiusAxis":return f$(a,c);default:throw Error("Unexpected axis type: ".concat(b))}},kb=a=>a.graphicalItems.cartesianItems.some(a=>"bar"===a.type)||a.graphicalItems.polarItems.some(a=>"radialBar"===a.type);function kc(a,b){return c=>{switch(a){case"xAxis":return"xAxisId"in c&&c.xAxisId===b;case"yAxis":return"yAxisId"in c&&c.yAxisId===b;case"zAxis":return"zAxisId"in c&&c.zAxisId===b;case"angleAxis":return"angleAxisId"in c&&c.angleAxisId===b;case"radiusAxis":return"radiusAxisId"in c&&c.radiusAxisId===b;default:return!1}}}var kd=a=>a.graphicalItems.cartesianItems,ke=dV([f6,f7],kc),kf=(a,b,c)=>a.filter(c).filter(a=>(null==b?void 0:b.includeHidden)===!0||!a.hide),kg=dV([kd,j9,ke],kf,{memoizeOptions:{resultEqualityCheck:gc}}),kh=dV([kg],a=>a.filter(a=>"area"===a.type||"bar"===a.type).filter(ga)),ki=a=>a.filter(a=>!("stackId"in a)||void 0===a.stackId),kj=dV([kg],ki),kk=a=>a.map(a=>a.data).filter(Boolean).flat(1),kl=dV([kg],a=>a.some(a=>!a.data)),km=dV([kg],kk,{memoizeOptions:{resultEqualityCheck:gc}}),kn=(a,b)=>{var{chartData:c=[],dataStartIndex:d,dataEndIndex:e}=b;return a.length>0?a:c.slice(d,e+1)},ko=dV([km,eV],kn),kp=(a,b,c)=>(null==b?void 0:b.dataKey)!=null?a.map(a=>({value:ef(a,b.dataKey)})):c.length>0?c.map(a=>a.dataKey).flatMap(b=>a.map(a=>({value:ef(a,b)}))):a.map(a=>({value:a})),kq=(a,b,c,d,e,f)=>{var{chartData:g=[],dataStartIndex:h,dataEndIndex:i}=d,j=kp(a,b,c);return e&&(null==b?void 0:b.dataKey)!=null&&f.length>0?[...g.slice(h,i+1).map(a=>({value:ef(a,b.dataKey)})).filter(a=>null!=a.value),...j]:j},kr=dV([ko,j9,kg,eV,kl,km],kq);function ks(a){if($(a)||a instanceof Date){var b=Number(a);if(ar(b))return b}}function kt(a){if(Array.isArray(a)){var b=[ks(a[0]),ks(a[1])];return e$(b)?b:void 0}var c=ks(a);if(null!=c)return[c,c]}function ku(a){return a.map(ks).filter(ag)}function kv(a,b){var c=ks(a),d=ks(b);return null==c&&null==d?0:null==c?-1:null==d?1:c-d}var kw=dV([kr],a=>null==a?void 0:a.map(a=>a.value).sort(kv));function kx(a,b){switch(a){case"xAxis":return"x"===b.direction;case"yAxis":return"y"===b.direction;default:return!1}}var ky=a=>{var b=gd(a),c=ge(a);return ka(a,b,c)},kz=dV([ky],a=>null==a?void 0:a.dataKey),kA=dV([kh,eV,ky],f9),kB=(a,b,c,d)=>Object.fromEntries(Object.entries(b.reduce((a,b)=>{if(null==b.stackId)return a;var c=a[b.stackId];return null==c&&(c=[]),c.push(b),a[b.stackId]=c,a},{})).map(b=>{var e,f,g,[h,i]=b,j=d?[...i].reverse():i,k=j.map(f8);return[h,{stackedData:(f=null!=(e=ej[c])?e:d6,(g=(function(){var a=d8([]),b=d9,c=d6,d=ea;function e(e){var f,g,h=Array.from(a.apply(this,arguments),eb),i=h.length,j=-1;for(let a of e)for(f=0,++j;f<i;++f)(h[f][j]=[0,+d(a,h[f].key,j,e)]).data=a;for(f=0,g=d7(b(h));f<i;++f)h[g[f]].index=f;return c(h,g),h}return e.keys=function(b){return arguments.length?(a="function"==typeof b?b:d8(Array.from(b)),e):a},e.value=function(a){return arguments.length?(d="function"==typeof a?a:d8(+a),e):d},e.order=function(a){return arguments.length?(b=null==a?d9:"function"==typeof a?a:d8(Array.from(a)),e):b},e.offset=function(a){return arguments.length?(c=null==a?d6:a,e):c},e})().keys(k).value((a,b)=>Number(ef(a,b,0))).order(d9).offset(f)(a)).forEach((b,c)=>{b.forEach((b,d)=>{var e=ef(a[d],k[c],0);Array.isArray(e)&&2===e.length&&Z(e[0])&&Z(e[1])&&(b[0]=e[0],b[1]=e[1])})}),g),graphicalItems:j}]})),kC=dV([kA,kh,fF,fG],kB),kD=(a,b,c,d)=>{var{dataStartIndex:e,dataEndIndex:f}=b;if(null==d&&"zAxis"!==c){var g=((a,b,c)=>{if(null!=a){let d;return[(d=Object.keys(a).reduce((d,e)=>{var f=a[e];if(!f)return d;var{stackedData:g}=f,h=g.reduce((a,d)=>{var e,f=[Math.min(...e=ec(d,b,c).flat(2).filter(Z)),Math.max(...e)];return ar(f[0])&&ar(f[1])?[Math.min(a[0],f[0]),Math.max(a[1],f[1])]:a},[1/0,-1/0]);return[Math.min(h[0],d[0]),Math.max(h[1],d[1])]},[1/0,-1/0]))[0]===1/0?0:d[0],d[1]===-1/0?0:d[1]]}})(a,e,f);if(null==g||0!==g[0]||0!==g[1])return g}},kE=dV([j9],a=>a.allowDataOverflow),kF=a=>{var b;if(null==a||!("domain"in a))return j0;if(null!=a.domain)return a.domain;if("ticks"in a&&null!=a.ticks){if("number"===a.type){var c=ku(a.ticks);return[Math.min(...c),Math.max(...c)]}if("category"===a.type)return a.ticks.map(String)}return null!=(b=null==a?void 0:a.domain)?b:j0},kG=dV([j9],kF),kH=dV([kG,kE],e0),kI=dV([kC,eT,f6,kH],kD,{memoizeOptions:{resultEqualityCheck:gb}}),kJ=a=>a.errorBars,kK=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];var d=b.filter(Boolean);if(0!==d.length){var e=d.flat();return[Math.min(...e),Math.max(...e)]}},kL=function(a,b,c,d,e){var f,g,h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];if(c.length>0&&c.forEach(a=>{var c,i=null!=a.data?[...a.data]:h,j=null==(c=d[a.id])?void 0:c.filter(a=>kx(e,a));i.forEach(c=>{var d,e=ef(c,null!=(d=b.dataKey)?d:a.dataKey),h=function(a,b,c){if(!c||!c.length)return[];if("number"!=typeof b||X(b)){if(Array.isArray(b)){var d,e=ku(b);e.length>0&&(d=Math.max(...e))}}else d=b;return null==d?[]:ku(c.flatMap(b=>{var c,e,f=ef(a,b.dataKey);if(Array.isArray(f)?[c,e]=f:c=e=f,ar(c)&&ar(e))return[d-c,d+e]}))}(c,e,j);if(h.length>=2){var i=Math.min(...h),k=Math.max(...h);(null==f||i<f)&&(f=i),(null==g||k>g)&&(g=k)}var l=kt(e);null!=l&&(f=null==f?l[0]:Math.min(f,l[0]),g=null==g?l[1]:Math.max(g,l[1]))})}),(null==b?void 0:b.dataKey)!=null&&0===c.length&&a.forEach(a=>{var c=kt(ef(a,b.dataKey));null!=c&&(f=null==f?c[0]:Math.min(f,c[0]),g=null==g?c[1]:Math.max(g,c[1]))}),ar(f)&&ar(g))return[f,g]},kM=dV([ko,j9,kj,kJ,f6,eX],kL,{memoizeOptions:{resultEqualityCheck:gb}});function kN(a){var{value:b}=a;if($(b)||b instanceof Date)return b}var kO=a=>a.referenceElements.dots,kP=(a,b,c)=>a.filter(a=>"extendDomain"===a.ifOverflow).filter(a=>"xAxis"===b?a.xAxisId===c:a.yAxisId===c),kQ=dV([kO,f6,f7],kP),kR=a=>a.referenceElements.areas,kS=dV([kR,f6,f7],kP),kT=a=>a.referenceElements.lines,kU=dV([kT,f6,f7],kP),kV=(a,b)=>{if(null!=a){var c=ku(a.map(a=>"xAxis"===b?a.x:a.y));if(0!==c.length)return[Math.min(...c),Math.max(...c)]}},kW=dV(kQ,f6,kV),kX=(a,b)=>{if(null!=a){var c=ku(a.flatMap(a=>["xAxis"===b?a.x1:a.y1,"xAxis"===b?a.x2:a.y2]));if(0!==c.length)return[Math.min(...c),Math.max(...c)]}},kY=dV([kS,f6],kX),kZ=(a,b)=>{if(null!=a){var c=a.flatMap(a=>"xAxis"===b?function(a){if(null!=a.x)return ku([a.x]);var b,c=null==(b=a.segment)?void 0:b.map(a=>a.x);return null==c||0===c.length?[]:ku(c)}(a):function(a){if(null!=a.y)return ku([a.y]);var b,c=null==(b=a.segment)?void 0:b.map(a=>a.y);return null==c||0===c.length?[]:ku(c)}(a));if(0!==c.length)return[Math.min(...c),Math.max(...c)]}},k$=dV([kU,f6],kZ),k_=dV(kW,k$,kY,(a,b,c)=>kK(a,c,b)),k0=(a,b,c,d,e,f,g,h)=>null!=c?c:function(a,b,c){if(c||null!=b){if("function"==typeof a&&null!=b)try{var d=a(b,c);if(e$(d))return e_(d,b,c)}catch(a){}if(Array.isArray(a)&&2===a.length){var e,f,[g,h]=a;if("auto"===g)null!=b&&(e=Math.min(...b));else if(Z(g))e=g;else if("function"==typeof g)try{null!=b&&(e=g(null==b?void 0:b[0]))}catch(a){}else if("string"==typeof g&&en.test(g)){var i=en.exec(g);if(null==i||null==i[1]||null==b)e=void 0;else{var j=+i[1];e=b[0]-j}}else e=null==b?void 0:b[0];if("auto"===h)null!=b&&(f=Math.max(...b));else if(Z(h))f=h;else if("function"==typeof h)try{null!=b&&(f=h(null==b?void 0:b[1]))}catch(a){}else if("string"==typeof h&&eo.test(h)){var k=eo.exec(h);if(null==k||null==k[1]||null==b)f=void 0;else{var l=+k[1];f=b[1]+l}}else f=null==b?void 0:b[1];var m=[e,f];if(e$(m))return null==b?m:e_(m,b,c)}}}(b,"vertical"===g&&"xAxis"===h||"horizontal"===g&&"yAxis"===h?kK(d,f,e):kK(f,e),a.allowDataOverflow),k1=dV([j9,kG,kH,kI,kM,k_,eN,f6],k0,{memoizeOptions:{resultEqualityCheck:gb}}),k2=[0,1],k3=(a,b,c,d,e,f,g)=>{if(null!=a&&null!=c&&0!==c.length||void 0!==g){var h,i,{dataKey:j,type:k}=a,l=eg(b,f);return l&&null==j?eS()(0,null!=(i=null==c?void 0:c.length)?i:0):"category"===k?(h=d.map(kN).filter(a=>null!=a),l&&(null==a.dataKey||a.allowDuplicatedCategory&&ac(h))?eS()(0,d.length):a.allowDuplicatedCategory?h:Array.from(new Set(h))):"expand"!==e||l?g:k2}},k4=dV([j9,eN,ko,kr,fF,f6,k1],k3),k5=dV([j9,kb,fH],jY),k6=(a,b,c)=>{var{niceTicks:d}=b;if("none"!==d){var e=kF(b),f=Array.isArray(e)&&("auto"===e[0]||"auto"===e[1]);if(("snap125"===d||"adaptive"===d)&&null!=b&&b.tickCount&&e$(a)){if(f)return fB(a,b.tickCount,b.allowDecimals,d);if("number"===b.type)return fC(a,b.tickCount,b.allowDecimals,d)}if("auto"===d&&"linear"===c&&null!=b&&b.tickCount){if(f&&e$(a))return fB(a,b.tickCount,b.allowDecimals,"adaptive");if("number"===b.type&&e$(a))return fC(a,b.tickCount,b.allowDecimals,"adaptive")}}},k7=dV([k4,ka,k5],k6),k8=(a,b,c,d)=>{if("angleAxis"!==d&&(null==a?void 0:a.type)==="number"&&e$(b)&&Array.isArray(c)&&c.length>0){var e,f;return[Math.min(b[0],null!=(e=c[0])?e:0),Math.max(b[1],null!=(f=c[c.length-1])?f:0)]}return b},k9=dV([j9,k4,k7,f6],k8),la=dV(kr,j9,(a,b)=>{if(b&&"number"===b.type){var c=1/0,d=Array.from(ku(a.map(a=>a.value))).sort((a,b)=>a-b),e=d[0],f=d[d.length-1];if(null==e||null==f)return 1/0;var g=f-e;if(0===g)return 1/0;for(var h=0;h<d.length-1;h++){var i=d[h],j=d[h+1];null!=i&&null!=j&&(c=Math.min(c,j-i))}return c/g}}),lb=dV(la,eN,fE,eC,(a,b,c,d,e)=>e,(a,b,c,d,e)=>{if(!ar(a))return 0;var f="vertical"===b?d.height:d.width;if("gap"===e)return a*f/2;if("no-gap"===e){var g=ab(c,a*f),h=a*f/2;return h-g-(h-g)/f*g}return 0}),lc=dV(j3,(a,b,c)=>{var d=j3(a,b);return null==d||"string"!=typeof d.padding?0:lb(a,"xAxis",b,c,d.padding)},(a,b)=>{if(null==a)return{left:0,right:0};var c,d,{padding:e}=a;return"string"==typeof e?{left:b,right:b}:{left:(null!=(c=e.left)?c:0)+b,right:(null!=(d=e.right)?d:0)+b}}),ld=dV(j6,(a,b,c)=>{var d=j6(a,b);return null==d||"string"!=typeof d.padding?0:lb(a,"yAxis",b,c,d.padding)},(a,b)=>{if(null==a)return{top:0,bottom:0};var c,d,{padding:e}=a;return"string"==typeof e?{top:b,bottom:b}:{top:(null!=(c=e.top)?c:0)+b,bottom:(null!=(d=e.bottom)?d:0)+b}}),le=dV([eC,lc,eI,eH,(a,b,c)=>c],(a,b,c,d,e)=>{var{padding:f}=d;return e?[f.left,c.width-f.right]:[a.left+b.left,a.left+a.width-b.right]}),lf=dV([eC,eN,ld,eI,eH,(a,b,c)=>c],(a,b,c,d,e,f)=>{var{padding:g}=e;return f?[d.height-g.bottom,g.top]:"horizontal"===b?[a.top+a.height-c.bottom,a.top+c.top]:[a.top+c.top,a.top+a.height-c.bottom]}),lg=(a,b,c,d)=>{var e;switch(b){case"xAxis":return le(a,c,d);case"yAxis":return lf(a,c,d);case"zAxis":return null==(e=j8(a,c))?void 0:e.range;case"angleAxis":return f3(a);case"radiusAxis":return f4(a,c);default:return}},lh=dV([j9,lg],fT),li=dV([k5,k9],gg),lj=dV([j9,k5,li,lh],jX),lk=(a,b,c,d)=>{if(null!=c&&null!=c.dataKey){var{type:e,scale:f}=c;if(eg(a,d)&&("number"===e||"auto"!==f))return b.map(a=>a.value)}},ll=dV([eN,kr,ka,f6],lk),lm=dV([lj],gf);function ln(a,b){return a.id<b.id?-1:+(a.id>b.id)}dV([lj],function(a){if(null!=a)return"invert"in a&&"function"==typeof a.invert?a.invert.bind(a):jZ(a,void 0)}),dV([lj,kw],jZ),dV([kg,kJ,f6],(a,b,c)=>a.flatMap(a=>b[a.id]).filter(Boolean).filter(a=>kx(c,a)));var lo=(a,b)=>b,lp=(a,b,c)=>c,lq=dV(ew,lo,lp,(a,b,c)=>a.filter(a=>a.orientation===b).filter(a=>a.mirror===c).sort(ln)),lr=dV(ex,lo,lp,(a,b,c)=>a.filter(a=>a.orientation===b).filter(a=>a.mirror===c).sort(ln)),ls=(a,b)=>({width:a.width,height:b.height}),lt=dV(eC,j3,ls),lu=dV(et,eC,lq,lo,lp,(a,b,c,d,e)=>{var f,g={};return c.forEach(c=>{var h=ls(b,c);null==f&&(f=((a,b,c)=>{switch(b){case"top":return a.top;case"bottom":return c-a.bottom;default:return 0}})(b,d,a));var i="top"===d&&!e||"bottom"===d&&e;g[c.id]=f-Number(i)*h.height,f+=(i?-1:1)*h.height}),g}),lv=dV(es,eC,lr,lo,lp,(a,b,c,d,e)=>{var f,g={};return c.forEach(c=>{var h={width:"number"==typeof c.width?c.width:60,height:b.height};null==f&&(f=((a,b,c)=>{switch(b){case"left":return a.left;case"right":return c-a.right;default:return 0}})(b,d,a));var i="left"===d&&!e||"right"===d&&e;g[c.id]=f-Number(i)*h.width,f+=(i?-1:1)*h.width}),g}),lw=dV([eC,j3,(a,b)=>{var c=j3(a,b);if(null!=c)return lu(a,c.orientation,c.mirror)},(a,b)=>b],(a,b,c,d)=>{if(null!=b){var e=null==c?void 0:c[d];return null==e?{x:a.left,y:0}:{x:a.left,y:e}}}),lx=dV([eC,j6,(a,b)=>{var c=j6(a,b);if(null!=c)return lv(a,c.orientation,c.mirror)},(a,b)=>b],(a,b,c,d)=>{if(null!=b){var e=null==c?void 0:c[d];return null==e?{x:0,y:a.top}:{x:e,y:a.top}}}),ly=dV(eC,j6,(a,b)=>({width:"number"==typeof b.width?b.width:60,height:a.height})),lz=(a,b,c)=>{switch(b){case"xAxis":return lt(a,c).width;case"yAxis":return ly(a,c).height;default:return}},lA=(a,b,c,d)=>{if(null!=c){var{allowDuplicatedCategory:e,type:f,dataKey:g}=c,h=eg(a,d),i=b.map(a=>a.value),j=i.filter(a=>null!=a);if(g&&h&&"category"===f&&e&&ac(j))return i}},lB=dV([eN,kr,j9,f6],lA),lC=dV([eN,(a,b,c)=>{switch(b){case"xAxis":return j3(a,c);case"yAxis":return j6(a,c);default:throw Error("Unexpected axis type: ".concat(b))}},k5,lm,lB,ll,lg,k7,f6],(a,b,c,d,e,f,g,h,i)=>{if(null!=b){var j=eg(a,i);return{angle:b.angle,interval:b.interval,minTickGap:b.minTickGap,orientation:b.orientation,tick:b.tick,tickCount:b.tickCount,tickFormatter:b.tickFormatter,ticks:b.ticks,type:b.type,unit:b.unit,axisType:i,categoricalDomain:f,duplicateDomain:e,isCategorical:j,niceTicks:h,range:g,realScaleType:c,scale:d}}}),lD=dV([eN,ka,k5,lm,k7,lg,lB,ll,f6],(a,b,c,d,e,f,g,h,i)=>{if(null!=b&&null!=d){var j=eg(a,i),{type:k,ticks:l,tickCount:m}=b,n="scaleBand"===c&&"function"==typeof d.bandwidth?d.bandwidth()/2:2,o="category"===k&&d.bandwidth?d.bandwidth()/n:0;o="angleAxis"===i&&null!=f&&f.length>=2?2*W(f[0]-f[1])*o:o;var p=l||e;return p?p.map((a,b)=>{var c=g?g.indexOf(a):a,e=d.map(c);return ar(e)?{index:b,coordinate:e+o,value:a,offset:o}:null}).filter(ag):j&&h?h.map((a,b)=>{var c=d.map(a);return ar(c)?{coordinate:c+o,value:a,index:b,offset:o}:null}).filter(ag):d.ticks?d.ticks(m).map((a,b)=>{var c=d.map(a);return ar(c)?{coordinate:c+o,value:a,index:b,offset:o}:null}).filter(ag):d.domain().map((a,b)=>{var c=d.map(a);return ar(c)?{coordinate:c+o,value:g?g[a]:a,index:b,offset:o}:null}).filter(ag)}}),lE=dV([eN,ka,lm,lg,lB,ll,f6],(a,b,c,d,e,f,g)=>{if(null!=b&&null!=c&&null!=d&&d[0]!==d[1]){var h=eg(a,g),{tickCount:i}=b,j=0;return(j="angleAxis"===g&&(null==d?void 0:d.length)>=2?2*W(d[0]-d[1])*j:j,h&&f)?f.map((a,b)=>{var d=c.map(a);return ar(d)?{coordinate:d+j,value:a,index:b,offset:j}:null}).filter(ag):c.ticks?c.ticks(i).map((a,b)=>{var d=c.map(a);return ar(d)?{coordinate:d+j,value:a,index:b,offset:j}:null}).filter(ag):c.domain().map((a,b)=>{var d=c.map(a);return ar(d)?{coordinate:d+j,value:e?e[a]:a,index:b,offset:j}:null}).filter(ag)}}),lF=dV(j9,lm,(a,b)=>{if(null!=a&&null!=b)return j_(j_({},a),{},{scale:b})}),lG=dV([j9,k5,k4,lh],jX),lH=dV([lG],gf);dV((a,b,c)=>j8(a,c),lH,(a,b)=>{if(null!=a&&null!=b)return j_(j_({},a),{},{scale:b})});var lI=dV([eN,ew,ex],(a,b,c)=>{switch(a){case"horizontal":return b.some(a=>a.reversed)?"right-to-left":"left-to-right";case"vertical":return c.some(a=>a.reversed)?"bottom-to-top":"top-to-bottom";case"centric":case"radial":return"left-to-right";default:return}});dV([(a,b,c)=>{var d;return null==(d=a.renderedTicks[b])?void 0:d[c]}],a=>{if(a&&0!==a.length)return b=>{var c,d=1/0,e=a[0];for(var f of a){var g=Math.abs(f.coordinate-b);g<d&&(d=g,e=f)}return null==(c=e)?void 0:c.value}});var lJ=a=>a.options.defaultTooltipEventType,lK=a=>a.options.validateTooltipEventTypes;function lL(a,b,c){if(null==a)return b;var d=a?"axis":"item";return null==c?b:c.includes(d)?d:b}function lM(a,b){return lL(b,lJ(a),lK(a))}var lN=(a,b)=>{var c,d=Number(b);if(!X(d)&&null!=b)return d>=0?null==a||null==(c=a[d])?void 0:c.value:void 0};function lO(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function lP(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?lO(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):lO(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var lQ=(a,b,c,d)=>{if(null==b)return dd;var e,f,g,h=(e=a,f=b,g=c,"axis"===f?"click"===g?e.axisInteraction.click:e.axisInteraction.hover:"click"===g?e.itemInteraction.click:e.itemInteraction.hover);if(null==h)return dd;if(h.active)return h;if(a.keyboardInteraction.active)return a.keyboardInteraction;if(a.syncInteraction.active&&null!=a.syncInteraction.index)return a.syncInteraction;var i=!0===a.settings.active;if(null!=h.index){if(i)return lP(lP({},h),{},{active:!0})}else if(null!=d)return{active:!0,coordinate:void 0,dataKey:void 0,index:d,graphicalItemId:void 0};return lP(lP({},dd),{},{coordinate:h.coordinate})},lR=(a,b,c,d)=>{var e=null==a?void 0:a.index;if(null==e)return null;var f=Number(e);if(!ar(f))return e;var g=Infinity;b.length>0&&(g=b.length-1);var h=Math.max(0,Math.min(f,g)),i=b[h];return null==i?String(h):!function(a,b,c){if(null==c||null==b)return!0;var d=ef(a,b);return!(null!=d&&e$(c))||function(a,b){var c=function(a){if("number"==typeof a)return Number.isFinite(a)?a:void 0;if(a instanceof Date){var b=a.valueOf();return Number.isFinite(b)?b:void 0}var c=Number(a);return Number.isFinite(c)?c:void 0}(a),d=b[0],e=b[1];if(void 0===c)return!1;var f=Math.min(d,e),g=Math.max(d,e);return c>=f&&c<=g}(d,c)}(i,c,d)?null:String(h)},lS=(a,b,c,d,e,f,g)=>{if(null!=f){var h=g[0],i=null==h?void 0:h.getPosition(f);if(null!=i)return i;var j=null==e?void 0:e[Number(f)];if(j)if("horizontal"===c)return{x:j.coordinate,y:(d.top+b)/2};else return{x:(d.left+a)/2,y:j.coordinate}}},lT=(a,b,c,d)=>{if("axis"===b)return a.tooltipItemPayloads;if(0===a.tooltipItemPayloads.length)return[];if(e="hover"===c?a.itemInteraction.hover.graphicalItemId:a.itemInteraction.click.graphicalItemId,a.syncInteraction.active&&null==e)return a.tooltipItemPayloads;if(null==e&&(null!=d||a.keyboardInteraction.active)){var e,f=a.tooltipItemPayloads[0];return null!=f?[f]:[]}return a.tooltipItemPayloads.filter(a=>{var b;return(null==(b=a.settings)?void 0:b.graphicalItemId)===e})},lU=a=>a.options.tooltipPayloadSearcher,lV=a=>a.tooltip;function lW(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function lX(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?lW(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):lW(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function lY(a){if("string"==typeof a)return a}var lZ=(a,b,c,d,e,f,g)=>{if(null!=b&&null!=f){var{chartData:h,computedData:i,dataStartIndex:j,dataEndIndex:k}=c;return a.reduce((a,c)=>{var l,m,n,{dataDefinedOnItem:o,settings:p}=c,q=null!=o?o:h,r=Array.isArray(q)?ec(q,j,k):q,s=null!=(l=null==p?void 0:p.dataKey)?l:d,t=null==p?void 0:p.nameKey;return Array.isArray(m=d&&Array.isArray(r)&&!Array.isArray(r[0])&&"axis"===g?ae(r,d,e):f(r,b,i,t))?m.forEach(b=>{var c,d,e=function(a){if(null!=a&&"object"==typeof a){var b,c="name"in a?function(a){if("string"==typeof a||"number"==typeof a)return a}(a.name):void 0,d="unit"in a?function(a){if("string"==typeof a||"number"==typeof a||"boolean"==typeof a)return a}(a.unit):void 0,e="dataKey"in a?"string"==typeof(b=a.dataKey)||"number"==typeof b?b:"function"==typeof b?a=>b(a):void 0:void 0,f="payload"in a?a.payload:void 0;return{name:c,unit:d,dataKey:e,payload:f,color:"color"in a?lY(a.color):void 0,fill:"fill"in a?lY(a.fill):void 0}}}(b),f=null==e?void 0:e.name,g=null==e?void 0:e.dataKey,h=null==e?void 0:e.payload,i=lX(lX({},p),{},{name:f,unit:null==e?void 0:e.unit,color:null!=(c=null==e?void 0:e.color)?c:null==p?void 0:p.color,fill:null!=(d=null==e?void 0:e.fill)?d:null==p?void 0:p.fill});a.push(eq({tooltipEntrySettings:i,dataKey:g,payload:h,value:ef(h,g),name:null==f?void 0:String(f)}))}):a.push(eq({tooltipEntrySettings:p,dataKey:s,payload:m,value:ef(m,s),name:null!=(n=ef(m,t))?n:null==p?void 0:p.name})),a},[])}},l$=dV([ky,kb,fH],jY),l_=dV([a=>a.graphicalItems.cartesianItems,a=>a.graphicalItems.polarItems],(a,b)=>[...a,...b]),l0=dV([gd,ge],kc),l1=dV([l_,ky,l0],kf,{memoizeOptions:{resultEqualityCheck:gc}}),l2=dV([l1],a=>a.filter(ga)),l3=dV([l1],kk,{memoizeOptions:{resultEqualityCheck:gc}}),l4=dV([l1],a=>a.some(a=>!a.data)),l5=dV([l3,eT],kn),l6=dV([l2,eT,ky],f9),l7=dV([l5,ky,l1,eT,l4,l3],kq),l8=dV([ky],kF),l9=dV([ky],a=>a.allowDataOverflow),ma=dV([l8,l9],e0),mb=dV([l1],a=>a.filter(ga)),mc=dV([l6,mb,fF,fG],kB),md=dV([mc,eT,gd,ma],kD),me=dV([l1],ki),mf=dV([l5,ky,me,kJ,gd,eZ],kL,{memoizeOptions:{resultEqualityCheck:gb}}),mg=dV([kO,gd,ge],kP),mh=dV([mg,gd],kV),mi=dV([kR,gd,ge],kP),mj=dV([mi,gd],kX),mk=dV([kT,gd,ge],kP),ml=dV([mk,gd],kZ),mm=dV([mh,ml,mj],kK),mn=dV([ky,l8,ma,md,mf,mm,eN,gd],k0),mo=dV([ky,eN,l5,l7,fF,gd,mn],k3),mp=dV([mo,ky,l$],k6),mq=dV([ky,mo,mp,gd],k8),mr=a=>{var b=gd(a),c=ge(a);return lg(a,b,c,!1)},ms=dV([ky,mr],fT),mt=dV([ky,l$,mq,ms],jX),mu=dV([mt],gf),mv=dV([eN,l7,ky,gd],lA),mw=dV([eN,l7,ky,gd],lk),mx=dV([eN,ky,l$,mu,mr,mv,mw,gd],(a,b,c,d,e,f,g,h)=>{if(b){var{type:i}=b,j=eg(a,h);if(d){var k="scaleBand"===c&&d.bandwidth?d.bandwidth()/2:2,l="category"===i&&d.bandwidth?d.bandwidth()/k:0;return(l="angleAxis"===h&&null!=e&&(null==e?void 0:e.length)>=2?2*W(e[0]-e[1])*l:l,j&&g)?g.map((a,b)=>{var c=d.map(a);return ar(c)?{coordinate:c+l,value:a,index:b,offset:l}:null}).filter(ag):d.domain().map((a,b)=>{var c=d.map(a);return ar(c)?{coordinate:c+l,value:f?f[a]:a,index:b,offset:l}:null}).filter(ag)}}}),my=dV([lJ,lK,a=>a.tooltip.settings],(a,b,c)=>lL(c.shared,a,b)),mz=a=>a.tooltip.settings.trigger,mA=a=>a.tooltip.settings.defaultIndex,mB=dV([lV,my,mz,mA],lQ),mC=dV([mB,l5,kz,mo],lR),mD=dV([mx,mC],lN),mE=dV([mB],a=>{if(a)return a.dataKey}),mF=dV([mB],a=>{if(a)return a.graphicalItemId}),mG=dV([lV,my,mz,mA],lT),mH=dV([es,et,eN,eC,mx,mA,mG],lS),mI=dV([mB,mH],(a,b)=>null!=a&&a.coordinate?a.coordinate:b),mJ=dV([mB],a=>{var b;return null!=(b=null==a?void 0:a.active)&&b}),mK=dV([mG,mC,eT,kz,mD,lU,my],lZ),mL=dV([mK],a=>{if(null!=a)return Array.from(new Set(a.map(a=>a.payload).filter(a=>null!=a)))});function mM(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function mN(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?mM(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):mM(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var mO=(a,b,c,d,e)=>{var f=null!=(l=null==b?void 0:b.length)?l:0;if(f<=1||null==a)return 0;if("angleAxis"===d&&null!=e&&1e-6>=Math.abs(Math.abs(e[1]-e[0])-360))for(var g=0;g<f;g++){var h=g>0?null==(m=c[g-1])?void 0:m.coordinate:null==(n=c[f-1])?void 0:n.coordinate,i=null==(o=c[g])?void 0:o.coordinate,j=g>=f-1?null==(p=c[0])?void 0:p.coordinate:null==(q=c[g+1])?void 0:q.coordinate,k=void 0;if(null!=h&&null!=i&&null!=j)if(W(i-h)!==W(j-i)){var l,m,n,o,p,q,r,s=[];if(W(j-i)===W(e[1]-e[0])){k=j;var t=i+e[1]-e[0];s[0]=Math.min(t,(t+h)/2),s[1]=Math.max(t,(t+h)/2)}else{k=h;var u=j+e[1]-e[0];s[0]=Math.min(i,(u+i)/2),s[1]=Math.max(i,(u+i)/2)}var v=[Math.min(i,(k+i)/2),Math.max(i,(k+i)/2)];if(a>v[0]&&a<=v[1]||a>=s[0]&&a<=s[1])return null==(r=c[g])?void 0:r.index}else{var w,x=Math.min(h,j),y=Math.max(h,j);if(a>(x+i)/2&&a<=(y+i)/2)return null==(w=c[g])?void 0:w.index}}else if(b)for(var z=0;z<f;z++){var A=b[z];if(null!=A){var B=b[z+1],C=b[z-1];if(0===z&&null!=B&&a<=(A.coordinate+B.coordinate)/2||z===f-1&&null!=C&&a>(A.coordinate+C.coordinate)/2||z>0&&z<f-1&&null!=C&&null!=B&&a>(A.coordinate+C.coordinate)/2&&a<=(A.coordinate+B.coordinate)/2)return A.index}}return -1},mP=(a,b)=>b,mQ=(a,b,c)=>c,mR=(a,b,c,d)=>d,mS=dV(mx,a=>d4()(a,a=>a.coordinate)),mT=dV([lV,mP,mQ,mR],lQ),mU=dV([mT,l5,kz,mo],lR),mV=dV([lV,mP,mQ,mR],lT),mW=dV([es,et,eN,eC,mx,mR,mV],lS),mX=dV([mT,mW],(a,b)=>{var c;return null!=(c=a.coordinate)?c:b}),mY=dV([mx,mU],lN),mZ=dV([mV,mU,eT,kz,mY,lU,mP],lZ),m$=dV([mT,mU],(a,b)=>({isActive:a.active&&null!=b,activeIndex:b})),m_=dV([(a,b)=>b,eN,f5,gd,ms,mx,mS,eC],(a,b,c,d,e,f,g,h)=>{if(a&&b&&d&&e&&f){if("horizontal"===b||"vertical"===b){if(!a||!d||!e||!f)return;if(function(a,b){var{relativeX:c,relativeY:d}=a;return c>=b.left&&c<=b.left+b.width&&d>=b.top&&d<=b.top+b.height}(a,h)){var i=mO("horizontal"===b?a.relativeX:"vertical"===b?a.relativeY:void 0,g,f,d,e),j=((a,b,c,d)=>{var e=b.find(a=>a&&a.index===c);if(e){if("horizontal"===a)return{x:e.coordinate,y:d.relativeY};if("vertical"===a)return{x:d.relativeX,y:e.coordinate}}return{x:0,y:0}})(b,f,i,a);return{activeIndex:String(i),activeCoordinate:j}}return}if(a&&d&&e&&f&&c){var k=((a,b)=>{var c,{relativeX:d,relativeY:e}=a,{radius:f,angle:g}=((a,b)=>{var{x:c,y:d}=a,{cx:e,cy:f}=b,g=((a,b)=>{var{x:c,y:d}=a,{x:e,y:f}=b;return Math.sqrt((c-e)**2+(d-f)**2)})({x:c,y:d},{x:e,y:f});if(g<=0)return{radius:g,angle:0};var h=Math.acos((c-e)/g);return d>f&&(h=2*Math.PI-h),{radius:g,angle:180*h/Math.PI,angleInRadian:h}})({x:d,y:e},b),{innerRadius:h,outerRadius:i}=b;if(f<h||f>i||0===f)return null;var{startAngle:j,endAngle:k}=(a=>{var{startAngle:b,endAngle:c}=a,d=Math.min(Math.floor(b/360),Math.floor(c/360));return{startAngle:b-360*d,endAngle:c-360*d}})(b),l=g;if(j<=k){for(;l>k;)l-=360;for(;l<j;)l+=360;c=l>=j&&l<=k}else{for(;l>j;)l-=360;for(;l<k;)l+=360;c=l>=k&&l<=j}return c?fM(fM({},b),{},{radius:f,angle:((a,b)=>{var{startAngle:c,endAngle:d}=b;return a+360*Math.min(Math.floor(c/360),Math.floor(d/360))})(l,b)}):null})(a,c);if(k){var l=mO("centric"===b?k.angle:k.radius,g,f,d,e),m=((a,b,c,d)=>{var e=b.find(a=>a&&a.index===c);if(e){if("centric"===a){var f=e.coordinate,{radius:g}=d;return mN(mN(mN({},d),fO(d.cx,d.cy,g,f)),{},{angle:f,radius:g})}var h=e.coordinate,{angle:i}=d;return mN(mN(mN({},d),fO(d.cx,d.cy,h,i)),{},{angle:i,radius:h})}return{angle:0,clockWise:!1,cx:0,cy:0,endAngle:0,innerRadius:0,outerRadius:0,radius:0,startAngle:0,x:0,y:0}})(b,f,l,k);return{activeIndex:String(l),activeCoordinate:m}}return}}});function m0(a){var b,c,d=a.currentTarget.getBoundingClientRect();if("getBBox"in a.currentTarget&&"function"==typeof a.currentTarget.getBBox){var e=a.currentTarget.getBBox();b=e.width>0?d.width/e.width:1,c=e.height>0?d.height/e.height:1}else{var f=a.currentTarget;b=f.offsetWidth>0?d.width/f.offsetWidth:1,c=f.offsetHeight>0?d.height/f.offsetHeight:1}var g=(a,e)=>({relativeX:Math.round((a-d.left)/b),relativeY:Math.round((e-d.top)/c)});return"touches"in a?Array.from(a.touches).map(a=>g(a.clientX,a.clientY)):g(a.clientX,a.clientY)}var m1=bI("mouseClick"),m2=cm();m2.startListening({actionCreator:m1,effect:(a,b)=>{var c=a.payload,d=m_(b.getState(),m0(c));(null==d?void 0:d.activeIndex)!=null&&b.dispatch(dp({activeIndex:d.activeIndex,activeDataKey:void 0,activeCoordinate:d.activeCoordinate}))}});var m3=bI("mouseMove"),m4=cm(),m5=null,m6=null,m7=null;function m8(a,b){return b instanceof HTMLElement?"HTMLElement <".concat(b.tagName,' class="').concat(b.className,'">'):b===window?"global.window":"children"===a&&"object"==typeof b&&null!==b?"<<CHILDREN>>":b}function m9(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function na(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?m9(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):m9(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}m4.startListening({actionCreator:m3,effect:(a,b)=>{var c=a.payload,{throttleDelay:d,throttledEvents:e}=b.getState().eventSettings,f="all"===e||(null==e?void 0:e.includes("mousemove"));null!==m5&&(cancelAnimationFrame(m5),m5=null),null===m6||"number"==typeof d&&f||(clearTimeout(m6),m6=null),m7=m0(c);var g=()=>{var a=b.getState(),c=lM(a,a.tooltip.settings.shared);if(!m7){m5=null,m6=null;return}if("axis"===c){var d=m_(a,m7);(null==d?void 0:d.activeIndex)!=null?b.dispatch(dn({activeIndex:d.activeIndex,activeDataKey:void 0,activeCoordinate:d.activeCoordinate})):b.dispatch(dl())}m5=null,m6=null};f?"raf"===d?m5=requestAnimationFrame(g):"number"==typeof d&&null===m6&&(m6=setTimeout(g,d)):g()}});var nb=bT({name:"cartesianAxis",initialState:{xAxis:{},yAxis:{},zAxis:{}},reducers:{addXAxis:{reducer(a,b){a.xAxis[b.payload.id]=b.payload},prepare:bN()},replaceXAxis:{reducer(a,b){var{prev:c,next:d}=b.payload;void 0!==a.xAxis[c.id]&&(c.id!==d.id&&delete a.xAxis[c.id],a.xAxis[d.id]=d)},prepare:bN()},removeXAxis:{reducer(a,b){delete a.xAxis[b.payload.id]},prepare:bN()},addYAxis:{reducer(a,b){a.yAxis[b.payload.id]=b.payload},prepare:bN()},replaceYAxis:{reducer(a,b){var{prev:c,next:d}=b.payload;void 0!==a.yAxis[c.id]&&(c.id!==d.id&&delete a.yAxis[c.id],a.yAxis[d.id]=d)},prepare:bN()},removeYAxis:{reducer(a,b){delete a.yAxis[b.payload.id]},prepare:bN()},addZAxis:{reducer(a,b){a.zAxis[b.payload.id]=b.payload},prepare:bN()},replaceZAxis:{reducer(a,b){var{prev:c,next:d}=b.payload;void 0!==a.zAxis[c.id]&&(c.id!==d.id&&delete a.zAxis[c.id],a.zAxis[d.id]=d)},prepare:bN()},removeZAxis:{reducer(a,b){delete a.zAxis[b.payload.id]},prepare:bN()},updateYAxisWidth(a,b){var{id:c,width:d}=b.payload,e=a.yAxis[c];if(e){var f,g=e.widthHistory||[];if(3===g.length&&g[0]===g[2]&&d===g[1]&&d!==e.width&&1>=Math.abs(d-(null!=(f=g[0])?f:0)))return;var h=[...g,d].slice(-3);a.yAxis[c]=na(na({},e),{},{width:d,widthHistory:h})}}}}),{addXAxis:nc,replaceXAxis:nd,removeXAxis:ne,addYAxis:nf,replaceYAxis:ng,removeYAxis:nh,addZAxis:ni,replaceZAxis:nj,removeZAxis:nk,updateYAxisWidth:nl}=nb.actions,nm=nb.reducer,nn=bT({name:"graphicalItems",initialState:{cartesianItems:[],polarItems:[]},reducers:{addCartesianGraphicalItem:{reducer(a,b){a.cartesianItems.push(b.payload)},prepare:bN()},replaceCartesianGraphicalItem:{reducer(a,b){var{prev:c,next:d}=b.payload,e=bv(a).cartesianItems.indexOf(c);e>-1&&(a.cartesianItems[e]=d)},prepare:bN()},removeCartesianGraphicalItem:{reducer(a,b){var c=bv(a).cartesianItems.indexOf(b.payload);c>-1&&a.cartesianItems.splice(c,1)},prepare:bN()},addPolarGraphicalItem:{reducer(a,b){a.polarItems.push(b.payload)},prepare:bN()},removePolarGraphicalItem:{reducer(a,b){var c=bv(a).polarItems.indexOf(b.payload);c>-1&&a.polarItems.splice(c,1)},prepare:bN()},replacePolarGraphicalItem:{reducer(a,b){var{prev:c,next:d}=b.payload,e=bv(a).polarItems.indexOf(c);e>-1&&(a.polarItems[e]=d)},prepare:bN()}}}),{addCartesianGraphicalItem:no,replaceCartesianGraphicalItem:np,removeCartesianGraphicalItem:nq,addPolarGraphicalItem:nr,removePolarGraphicalItem:ns,replacePolarGraphicalItem:nt}=nn.actions,nu=nn.reducer,nv=bT({name:"referenceElements",initialState:{dots:[],areas:[],lines:[]},reducers:{addDot:(a,b)=>{a.dots.push(b.payload)},removeDot:(a,b)=>{var c=bv(a).dots.findIndex(a=>a===b.payload);-1!==c&&a.dots.splice(c,1)},addArea:(a,b)=>{a.areas.push(b.payload)},removeArea:(a,b)=>{var c=bv(a).areas.findIndex(a=>a===b.payload);-1!==c&&a.areas.splice(c,1)},addLine:(a,b)=>{a.lines.push(b.payload)},removeLine:(a,b)=>{var c=bv(a).lines.findIndex(a=>a===b.payload);-1!==c&&a.lines.splice(c,1)}}}),{addDot:nw,removeDot:nx,addArea:ny,removeArea:nz,addLine:nA,removeLine:nB}=nv.actions,nC=nv.reducer,nD={x:0,y:0,width:0,height:0,padding:{top:0,right:0,bottom:0,left:0}},nE=bT({name:"brush",initialState:nD,reducers:{setBrushSettings:(a,b)=>null==b.payload?nD:b.payload}}),{setBrushSettings:nF}=nE.actions,nG=nE.reducer,nH=bT({name:"legend",initialState:{settings:{layout:"horizontal",align:"center",verticalAlign:"middle",itemSorter:"value"},size:{width:0,height:0},payload:[]},reducers:{setLegendSize(a,b){a.size.width=b.payload.width,a.size.height=b.payload.height},setLegendSettings(a,b){a.settings.align=b.payload.align,a.settings.layout=b.payload.layout,a.settings.verticalAlign=b.payload.verticalAlign,a.settings.itemSorter=b.payload.itemSorter},addLegendPayload:{reducer(a,b){a.payload.push(b.payload)},prepare:bN()},replaceLegendPayload:{reducer(a,b){var{prev:c,next:d}=b.payload,e=bv(a).payload.indexOf(c);e>-1&&(a.payload[e]=d)},prepare:bN()},removeLegendPayload:{reducer(a,b){var c=bv(a).payload.indexOf(b.payload);c>-1&&a.payload.splice(c,1)},prepare:bN()}}}),{setLegendSize:nI,setLegendSettings:nJ,addLegendPayload:nK,replaceLegendPayload:nL,removeLegendPayload:nM}=nH.actions,nN=nH.reducer,nO={accessibilityLayer:!0,barCategoryGap:"10%",barGap:4,barSize:void 0,className:void 0,maxBarSize:void 0,stackOffset:"none",syncId:void 0,syncMethod:"index",baseValue:void 0,reverseStackOrder:!1},nP=bT({name:"rootProps",initialState:nO,reducers:{updateOptions:(a,b)=>{var c;a.accessibilityLayer=b.payload.accessibilityLayer,a.barCategoryGap=b.payload.barCategoryGap,a.barGap=null!=(c=b.payload.barGap)?c:nO.barGap,a.barSize=b.payload.barSize,a.maxBarSize=b.payload.maxBarSize,a.stackOffset=b.payload.stackOffset,a.syncId=b.payload.syncId,a.syncMethod=b.payload.syncMethod,a.className=b.payload.className,a.baseValue=b.payload.baseValue,a.reverseStackOrder=b.payload.reverseStackOrder}}}),nQ=nP.reducer,{updateOptions:nR}=nP.actions,nS=bT({name:"polarAxis",initialState:{radiusAxis:{},angleAxis:{}},reducers:{addRadiusAxis(a,b){a.radiusAxis[b.payload.id]=b.payload},removeRadiusAxis(a,b){delete a.radiusAxis[b.payload.id]},addAngleAxis(a,b){a.angleAxis[b.payload.id]=b.payload},removeAngleAxis(a,b){delete a.angleAxis[b.payload.id]}}}),{addRadiusAxis:nT,removeRadiusAxis:nU,addAngleAxis:nV,removeAngleAxis:nW}=nS.actions,nX=nS.reducer,nY=bT({name:"polarOptions",initialState:null,reducers:{updatePolarOptions:(a,b)=>null===a?b.payload:(a.startAngle=b.payload.startAngle,a.endAngle=b.payload.endAngle,a.cx=b.payload.cx,a.cy=b.payload.cy,a.innerRadius=b.payload.innerRadius,a.outerRadius=b.payload.outerRadius,a)}}),{updatePolarOptions:nZ}=nY.actions,n$=nY.reducer,n_=bI("keyDown"),n0=bI("focus"),n1=bI("blur"),n2=cm(),n3=null,n4=null,n5=null;function n6(a){a.persist();var{currentTarget:b}=a;return new Proxy(a,{get:(a,c)=>{if("currentTarget"===c)return b;var d=Reflect.get(a,c);return"function"==typeof d?d.bind(a):d}})}n2.startListening({actionCreator:n_,effect:(a,b)=>{n5=a.payload,null!==n3&&(cancelAnimationFrame(n3),n3=null);var{throttleDelay:c,throttledEvents:d}=b.getState().eventSettings,e="all"===d||d.includes("keydown");null===n4||"number"==typeof c&&e||(clearTimeout(n4),n4=null);var f=()=>{try{var a,c=b.getState();if(!1===c.rootProps.accessibilityLayer)return;var{keyboardInteraction:d}=c.tooltip,e=n5;if("ArrowRight"!==e&&"ArrowLeft"!==e&&"Enter"!==e)return;var f=lR(d,l5(c),kz(c),mo(c)),g=null==f?-1:Number(f),h=!Number.isFinite(g)||g<0,i=mx(c),j=l5(c),k=lM(c,c.tooltip.settings.shared);if("Enter"===e){if(h)return;var l=mW(c,k,"hover",String(d.index));b.dispatch(dr({active:!d.active,activeIndex:d.index,activeCoordinate:l}));return}var m=lI(c),n="left-to-right"===m?1:-1,o="ArrowRight"===e?1:-1;if(h){var p=kz(c),q=mo(c),r=a=>({active:!1,index:String(a),dataKey:void 0,graphicalItemId:void 0,coordinate:void 0});if(a=-1,o*n>0){for(var s=0;s<j.length;s++)if(null!=lR(r(s),j,p,q)){a=s;break}}else for(var t=j.length-1;t>=0;t--)if(null!=lR(r(t),j,p,q)){a=t;break}if(a<0)return}else{a=g+o*n;var u=(null==i?void 0:i.length)||j.length;if(0===u||a>=u||a<0)return}var v=mW(c,k,"hover",String(a));b.dispatch(dr({active:!0,activeIndex:a.toString(),activeCoordinate:v}))}finally{n3=null,n4=null}};e?"raf"===c?n3=requestAnimationFrame(f):"number"==typeof c&&null===n4&&(f(),n5=null,n4=setTimeout(()=>{n5?f():(n4=null,n3=null)},c)):f()}}),n2.startListening({actionCreator:n0,effect:(a,b)=>{var c=b.getState();if(!1!==c.rootProps.accessibilityLayer){var{keyboardInteraction:d}=c.tooltip;if(!d.active&&null==d.index){var e=lM(c,c.tooltip.settings.shared),f=mW(c,e,"hover",String("0"));b.dispatch(dr({active:!0,activeIndex:"0",activeCoordinate:f}))}}}}),n2.startListening({actionCreator:n1,effect:(a,b)=>{var c=b.getState();if(!1!==c.rootProps.accessibilityLayer){var{keyboardInteraction:d}=c.tooltip;d.active&&b.dispatch(dr({active:!1,activeIndex:d.index,activeCoordinate:d.coordinate}))}}});var n7=bI("externalEvent"),n8=cm(),n9=new Map,oa=new Map,ob=new Map;n8.startListening({actionCreator:n7,effect:(a,b)=>{var{handler:c,reactEvent:d}=a.payload;if(null!=c){var e=d.type,f=n6(d);ob.set(e,{handler:c,reactEvent:f});var g=n9.get(e);void 0!==g&&(cancelAnimationFrame(g),n9.delete(e));var{throttleDelay:h,throttledEvents:i}=b.getState().eventSettings,j="all"===i||(null==i?void 0:i.includes(e)),k=oa.get(e);void 0===k||"number"==typeof h&&j||(clearTimeout(k),oa.delete(e));var l=()=>{var a=ob.get(e);try{if(!a)return;var{handler:c,reactEvent:d}=a,f=b.getState(),g={activeCoordinate:mI(f),activeDataKey:mE(f),activeIndex:mC(f),activeLabel:mD(f),activeTooltipIndex:mC(f),isTooltipActive:mJ(f)};c&&c(g,d)}finally{n9.delete(e),oa.delete(e),ob.delete(e)}};if(!j)return void l();if("raf"===h){var m=requestAnimationFrame(l);n9.set(e,m)}else if("number"==typeof h){if(!oa.has(e)){l();var n=setTimeout(l,h);oa.set(e,n)}}else l()}}});var oc=dV([lV],a=>a.tooltipItemPayloads),od=dV([oc,(a,b)=>b,(a,b,c)=>c],(a,b,c)=>{if(null!=b){var d=a.find(a=>a.settings.graphicalItemId===c);if(null!=d){var{getPosition:e}=d;if(null!=e)return e(b)}}}),oe=bI("touchMove"),of=cm(),og=null,oh=null,oi=null,oj=null;of.startListening({actionCreator:oe,effect:(a,b)=>{var c=a.payload;if(null!=c.touches&&0!==c.touches.length){oj=n6(c);var{throttleDelay:d,throttledEvents:e}=b.getState().eventSettings,f="all"===e||e.includes("touchmove");null!==og&&(cancelAnimationFrame(og),og=null),null===oh||"number"==typeof d&&f||(clearTimeout(oh),oh=null),oi=Array.from(c.touches).map(a=>m0({clientX:a.clientX,clientY:a.clientY,currentTarget:c.currentTarget}));var g=()=>{if(null!=oj){var a=b.getState(),c=lM(a,a.tooltip.settings.shared);if("axis"===c){var d,e=null==(d=oi)?void 0:d[0];if(null==e){og=null,oh=null;return}var f=m_(a,e);(null==f?void 0:f.activeIndex)!=null&&b.dispatch(dn({activeIndex:f.activeIndex,activeDataKey:void 0,activeCoordinate:f.activeCoordinate}))}else if("item"===c){var g,h=oj.touches[0];if(null==document.elementFromPoint||null==h)return;var i=document.elementFromPoint(h.clientX,h.clientY);if(!i||!i.getAttribute)return;var j=i.getAttribute(ey),k=null!=(g=i.getAttribute(ez))?g:void 0,l=l1(a).find(a=>a.id===k);if(null==j||null==l||null==k)return;var{dataKey:m}=l,n=od(a,j,k);b.dispatch(dj({activeDataKey:m,activeIndex:j,activeCoordinate:n,activeGraphicalItemId:k}))}og=null,oh=null}};if(!f)return void g();"raf"===d?og=requestAnimationFrame(g):"number"==typeof d&&null===oh&&(g(),oj=null,oh=setTimeout(()=>{oj?g():(oh=null,og=null)},d))}}});var ok=bT({name:"errorBars",initialState:{},reducers:{addErrorBar:(a,b)=>{var{itemId:c,errorBar:d}=b.payload;a[c]||(a[c]=[]),a[c].push(d)},replaceErrorBar:(a,b)=>{var{itemId:c,prev:d,next:e}=b.payload;a[c]&&(a[c]=a[c].map(a=>a.dataKey===d.dataKey&&a.direction===d.direction?e:a))},removeErrorBar:(a,b)=>{var{itemId:c,errorBar:d}=b.payload;a[c]&&(a[c]=a[c].filter(a=>a.dataKey!==d.dataKey||a.direction!==d.direction))}}}),{addErrorBar:ol,replaceErrorBar:om,removeErrorBar:on}=ok.actions,oo=ok.reducer,op=!0,oq=!0;function or(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function os(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?or(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):or(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var ot={zIndexMap:Object.values(fQ).reduce((a,b)=>os(os({},a),{},{[b]:{element:void 0,panoramaElement:void 0,consumers:0}}),{})},ou=new Set(Object.values(fQ)),ov=bT({name:"zIndex",initialState:ot,reducers:{registerZIndexPortal:{reducer:(a,b)=>{var{zIndex:c}=b.payload;a.zIndexMap[c]?a.zIndexMap[c].consumers+=1:a.zIndexMap[c]={consumers:1,element:void 0,panoramaElement:void 0}},prepare:bN()},unregisterZIndexPortal:{reducer:(a,b)=>{var{zIndex:c}=b.payload;a.zIndexMap[c]&&(a.zIndexMap[c].consumers-=1,a.zIndexMap[c].consumers<=0&&!ou.has(c)&&delete a.zIndexMap[c])},prepare:bN()},registerZIndexPortalElement:{reducer:(a,b)=>{var{zIndex:c,element:d,isPanorama:e}=b.payload;a.zIndexMap[c]?e?a.zIndexMap[c].panoramaElement=d:a.zIndexMap[c].element=d:a.zIndexMap[c]={consumers:0,element:e?void 0:d,panoramaElement:e?d:void 0}},prepare:bN()},unregisterZIndexPortalElement:{reducer:(a,b)=>{var{zIndex:c}=b.payload;a.zIndexMap[c]&&(b.payload.isPanorama?a.zIndexMap[c].panoramaElement=void 0:a.zIndexMap[c].element=void 0)},prepare:bN()}}}),{registerZIndexPortal:ow,unregisterZIndexPortal:ox,registerZIndexPortalElement:oy,unregisterZIndexPortalElement:oz}=ov.actions,oA=ov.reducer,oB={throttleDelay:"raf",throttledEvents:["mousemove","touchmove","pointermove","scroll","wheel"]},oC=bT({name:"eventSettings",initialState:oB,reducers:{setEventSettings:(a,b)=>{null!=b.payload.throttleDelay&&(a.throttleDelay=b.payload.throttleDelay),null!=b.payload.throttledEvents&&(a.throttledEvents=b.payload.throttledEvents)}}}),{setEventSettings:oD}=oC.actions,oE=oC.reducer,oF=bT({name:"renderedTicks",initialState:{xAxis:{},yAxis:{}},reducers:{setRenderedTicks:(a,b)=>{var{axisType:c,axisId:d,ticks:e}=b.payload;a[c][d]=e},removeRenderedTicks:(a,b)=>{var{axisType:c,axisId:d}=b.payload;delete a[c][d]}}}),{setRenderedTicks:oG,removeRenderedTicks:oH}=oF.actions,oI=bC({brush:nG,cartesianAxis:nm,chartData:dx,errorBars:oo,eventSettings:oE,graphicalItems:nu,layout:dD,legend:nN,options:cq,polarAxis:nX,polarOptions:n$,referenceElements:nC,renderedTicks:oF.reducer,rootProps:nQ,tooltip:ds,zIndex:oA}),oJ=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Chart";return function(a){let b,c,d,e=function(a){let{thunk:b=!0,immutableCheck:c=!0,serializableCheck:d=!0,actionCreatorCheck:e=!0}=a??{},f=new bJ;return b&&("boolean"==typeof b?f.push(bG):f.push(bF(b.extraArgument))),f},{reducer:f,middleware:g,devTools:h=!0,duplicateMiddlewareCheck:i=!0,preloadedState:j,enhancers:k}=a||{};if("function"==typeof f)b=f;else if(bB(f))b=bC(f);else throw Error(cn(1));c="function"==typeof g?g(e):e();let l=bD;h&&(l=bH({trace:!1,..."object"==typeof h&&h}));let m=(d=function(...a){return b=>(c,d)=>{let e=b(c,d),f=()=>{throw Error(bx(15))},g={getState:e.getState,dispatch:(a,...b)=>f(a,...b)};return f=bD(...a.map(a=>a(g)))(e.dispatch),{...e,dispatch:f}}}(...c),function(a){let{autoBatch:b=!0}=a??{},c=new bJ(d);return b&&c.push(bP("object"==typeof b?b:void 0)),c});return function a(b,c,d){if("function"!=typeof b)throw Error(bx(2));if("function"==typeof c&&"function"==typeof d||"function"==typeof d&&"function"==typeof arguments[3])throw Error(bx(0));if("function"==typeof c&&void 0===d&&(d=c,c=void 0),void 0!==d){if("function"!=typeof d)throw Error(bx(1));return d(a)(b,c)}let e=b,f=c,g=new Map,h=g,i=0,j=!1;function k(){h===g&&(h=new Map,g.forEach((a,b)=>{h.set(b,a)}))}function l(){if(j)throw Error(bx(3));return f}function m(a){if("function"!=typeof a)throw Error(bx(4));if(j)throw Error(bx(5));let b=!0;k();let c=i++;return h.set(c,a),function(){if(b){if(j)throw Error(bx(6));b=!1,k(),h.delete(c),g=null}}}function n(a){if(!bB(a))throw Error(bx(7));if(void 0===a.type)throw Error(bx(8));if("string"!=typeof a.type)throw Error(bx(17));if(j)throw Error(bx(9));try{j=!0,f=e(f,a)}finally{j=!1}return(g=h).forEach(a=>{a()}),a}return n({type:bA.INIT}),{dispatch:n,subscribe:m,getState:l,replaceReducer:function(a){if("function"!=typeof a)throw Error(bx(10));e=a,n({type:bA.REPLACE})},[by]:function(){return{subscribe(a){if("object"!=typeof a||null===a)throw Error(bx(11));function b(){a.next&&a.next(l())}return b(),{unsubscribe:m(b)}},[by](){return this}}}}}(b,j,l(..."function"==typeof k?k(m):m()))}({reducer:oI,preloadedState:a,middleware:a=>a({serializableCheck:!1,immutableCheck:!["commonjs","es6","production"].includes("es6")}).concat([m2.middleware,m4.middleware,n2.middleware,n8.middleware,of.middleware]),enhancers:a=>{var b=a;return"function"==typeof a&&(b=a()),b.concat(bP({type:"raf"}))},devTools:op&&{serialize:{replacer:m8},name:"recharts-".concat(b)}})};function oK(a){var{preloadedState:b,children:c,reduxStoreName:d}=a,e=eG(),f=(0,M.useRef)(null);return e?c:(null==f.current&&(f.current=oJ(b,d)),M.createElement(cA,{context:dY,store:f.current},c))}var oL=a=>{var{chartData:b}=a,c=d$(),d=eG();return(0,M.useEffect)(()=>d?()=>{}:(c(du(b)),()=>{c(du(void 0))}),[b,c,d]),null},oM=new Set(["axisLine","tickLine","activeBar","activeDot","activeLabel","activeShape","allowEscapeViewBox","background","cursor","dot","label","line","margin","padding","position","shape","style","tick","wrapperStyle","radius","throttledEvents"]);function oN(a,b){for(var c of new Set([...Object.keys(a),...Object.keys(b)]))if(oM.has(c)){if(null==a[c]&&null==b[c])continue;if(!function(a,b){if(cw(a,b))return!0;if("object"!=typeof a||null===a||"object"!=typeof b||null===b)return!1;let c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(let d=0;d<c.length;d++)if(!Object.prototype.hasOwnProperty.call(b,c[d])||!cw(a[c[d]],b[c[d]]))return!1;return!0}(a[c],b[c]))return!1}else{var d,e;if(d=a[c],e=b[c],(null!=d||null!=e)&&("number"==typeof d&&"number"==typeof e?d!==e&&(d==d||e==e):d!==e))return!1}return!0}var oO=(0,M.memo)(function(a){var{layout:b,margin:c}=a;return d$(),eG(),null},oN);function oP(a){return d$(),null}var oQ=(0,M.memo)(a=>{var b=d$();return(0,M.useEffect)(()=>{b(oD(a))},[b,a]),null},oN),oR=()=>{var a;return null==(a=d2(a=>a.rootProps.accessibilityLayer))||a},oS=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"];function oT(a){return"string"==typeof a&&oS.includes(a)}var oU=new Set(["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"]);function oV(a){return"string"==typeof a&&oU.has(a)}function oW(a){return"string"==typeof a&&a.startsWith("data-")}function oX(a){if("object"!=typeof a||null===a)return{};var b={};for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(oV(c)||oW(c))&&(b[c]=a[c]);return b}function oY(a){return null==a?null:(0,M.isValidElement)(a)&&"object"==typeof a.props&&null!==a.props?oX(a.props):"object"!=typeof a||Array.isArray(a)?null:oX(a)}function oZ(a){var b={};for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(oV(c)||oW(c)||oT(c))&&(b[c]=a[c]);return b}var o$=["children","width","height","viewBox","className","style","title","desc"];function o_(){return(o_=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}var o0=(0,M.forwardRef)((a,b)=>{var{children:c,width:d,height:e,viewBox:f,className:g,style:h,title:i,desc:j}=a,k=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,o$),l=f||{width:d,height:e,x:0,y:0},m=P("recharts-surface",g);return M.createElement("svg",o_({},oZ(k),{className:m,width:d,height:e,style:h,viewBox:"".concat(l.x," ").concat(l.y," ").concat(l.width," ").concat(l.height),ref:b}),M.createElement("title",null,i),M.createElement("desc",null,j),c)}),o1=dV(a=>a.zIndex.zIndexMap,(a,b)=>b,(a,b,c)=>c,(a,b,c)=>{if(null!=b){var d=a[b];if(null!=d)return c?d.panoramaElement:d.element}}),o2=dV(a=>a.zIndex.zIndexMap,a=>Array.from(new Set(Object.keys(a).map(a=>parseInt(a,10)).concat(Object.values(fQ)))).sort((a,b)=>a-b),{memoizeOptions:{resultEqualityCheck:function(a,b){if(a.length===b.length){for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0}return!1}}});function o3(a){var{zIndex:b,isPanorama:c}=a,d=(0,M.useRef)(null);return d$(),M.createElement("g",{tabIndex:-1,ref:d,className:"recharts-zIndex-layer_".concat(b)})}function o4(a){var{children:b,isPanorama:c}=a,d=d2(o2);if(!d||0===d.length)return b;var e=d.filter(a=>a<0),f=d.filter(a=>a>0);return M.createElement(M.Fragment,null,e.map(a=>M.createElement(o3,{key:a,zIndex:a,isPanorama:c})),b,f.map(a=>M.createElement(o3,{key:a,zIndex:a,isPanorama:c})))}var o5=["children"];function o6(){return(o6=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}var o7={width:"100%",height:"100%",display:"block"},o8=(0,M.forwardRef)((a,b)=>{var c,d,e=d2(es),f=d2(et),g=oR();if(!as(e)||!as(f))return null;var{children:h,otherAttributes:i,title:j,desc:k}=a;return null!=i&&(c="number"==typeof i.tabIndex?i.tabIndex:g?0:void 0,d="string"==typeof i.role?i.role:g?"application":void 0),M.createElement(o0,o6({},i,{title:j,desc:k,role:d,tabIndex:c,width:e,height:f,style:o7,ref:b}),h)}),o9=a=>{var{children:b}=a,c=d2(eI);if(!c)return null;var{width:d,height:e,y:f,x:g}=c;return M.createElement(o0,{width:d,height:e,x:g,y:f},b)},pa=(0,M.forwardRef)((a,b)=>{var{children:c}=a,d=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,o5);return eG()?M.createElement(o9,null,M.createElement(o4,{isPanorama:!0},c)):M.createElement(o8,o6({ref:b},d),M.createElement(o4,{isPanorama:!1},c))});function pb(a){return a.tooltip.syncInteraction}new(c(80639));var pc=(0,M.createContext)(null),pd=(0,M.createContext)(null);function pe(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function pf(){return(pf=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}var pg=()=>(d$(),d2(fI),d2(fK),d$(),d2(fJ),d2(mx),d2(eN),eK(),d2(a=>a.rootProps.className),d2(fI),d2(fK),d$(),null);function ph(a){if("number"==typeof a)return a;if("string"==typeof a){var b=parseFloat(a);if(!Number.isNaN(b))return b}return 0}var pi=(0,M.forwardRef)((a,b)=>{var c,d,e=(0,M.useRef)(null),[f,g]=(0,M.useState)({containerWidth:ph(null==(c=a.style)?void 0:c.width),containerHeight:ph(null==(d=a.style)?void 0:d.height)}),h=(0,M.useCallback)((a,b)=>{g(c=>{var d=Math.round(a),e=Math.round(b);return c.containerWidth===d&&c.containerHeight===e?c:{containerWidth:d,containerHeight:e}})},[]),i=(0,M.useCallback)(a=>{if("function"==typeof b&&b(a),null!=e.current&&(e.current.disconnect(),e.current=null),null!=a&&"u">typeof ResizeObserver){var{width:c,height:d}=a.getBoundingClientRect();h(c,d);var f=new ResizeObserver(a=>{var b=a[0];if(null!=b){var{width:c,height:d}=b.contentRect;h(c,d)}});f.observe(a),e.current=f}},[b,h]);return(0,M.useEffect)(()=>()=>{var a=e.current;null!=a&&a.disconnect()},[h]),M.createElement(M.Fragment,null,M.createElement(eQ,{width:f.containerWidth,height:f.containerHeight}),M.createElement("div",pf({ref:i},a)))}),pj=(0,M.forwardRef)((a,b)=>{var{width:c,height:d}=a,[e,f]=(0,M.useState)({containerWidth:ph(c),containerHeight:ph(d)}),g=(0,M.useCallback)((a,b)=>{f(c=>{var d=Math.round(a),e=Math.round(b);return c.containerWidth===d&&c.containerHeight===e?c:{containerWidth:d,containerHeight:e}})},[]),h=(0,M.useCallback)(a=>{if("function"==typeof b&&b(a),null!=a){var{width:c,height:d}=a.getBoundingClientRect();g(c,d)}},[b,g]);return M.createElement(M.Fragment,null,M.createElement(eQ,{width:e.containerWidth,height:e.containerHeight}),M.createElement("div",pf({ref:h},a)))}),pk=(0,M.forwardRef)((a,b)=>{var{width:c,height:d}=a;return M.createElement(M.Fragment,null,M.createElement(eQ,{width:c,height:d}),M.createElement("div",pf({ref:b},a)))}),pl=(0,M.forwardRef)((a,b)=>{var{width:c,height:d}=a;return"string"==typeof c||"string"==typeof d?M.createElement(pj,pf({},a,{ref:b})):"number"==typeof c&&"number"==typeof d?M.createElement(pk,pf({},a,{width:c,height:d,ref:b})):M.createElement(M.Fragment,null,M.createElement(eQ,{width:c,height:d}),M.createElement("div",pf({ref:b},a)))}),pm=(0,M.forwardRef)((a,b)=>{var{children:c,className:d,height:e,onClick:f,onContextMenu:g,onDoubleClick:h,onMouseDown:i,onMouseEnter:j,onMouseLeave:k,onMouseMove:l,onMouseUp:m,onTouchEnd:n,onTouchMove:o,onTouchStart:p,style:q,width:r,responsive:s,dispatchTouchEvents:t=!0}=a,u=(0,M.useRef)(null),v=d$(),[w,x]=(0,M.useState)(null),[y,z]=(0,M.useState)(null),A=function(){d$();var[a,b]=(0,M.useState)(null);return d2(eu),b}(),B=ay(),C=(null==B?void 0:B.width)>0?B.width:r,D=(null==B?void 0:B.height)>0?B.height:e,E=(0,M.useCallback)(a=>{A(a),"function"==typeof b&&b(a),x(a),z(a),null!=a&&(u.current=a)},[A,b,x,z]),F=(0,M.useCallback)(a=>{v(m1(a)),v(n7({handler:f,reactEvent:a}))},[v,f]),G=(0,M.useCallback)(a=>{v(m3(a)),v(n7({handler:j,reactEvent:a}))},[v,j]),H=(0,M.useCallback)(a=>{v(dl()),v(n7({handler:k,reactEvent:a}))},[v,k]),I=(0,M.useCallback)(a=>{v(m3(a)),v(n7({handler:l,reactEvent:a}))},[v,l]),J=(0,M.useCallback)(()=>{v(n0())},[v]),K=(0,M.useCallback)(()=>{v(n1())},[v]),L=(0,M.useCallback)(a=>{v(n_(a.key))},[v]),N=(0,M.useCallback)(a=>{v(n7({handler:g,reactEvent:a}))},[v,g]),O=(0,M.useCallback)(a=>{v(n7({handler:h,reactEvent:a}))},[v,h]),Q=(0,M.useCallback)(a=>{v(n7({handler:i,reactEvent:a}))},[v,i]),R=(0,M.useCallback)(a=>{v(n7({handler:m,reactEvent:a}))},[v,m]),S=(0,M.useCallback)(a=>{v(n7({handler:p,reactEvent:a}))},[v,p]),T=(0,M.useCallback)(a=>{t&&v(oe(a)),v(n7({handler:o,reactEvent:a}))},[v,t,o]),U=(0,M.useCallback)(a=>{v(n7({handler:n,reactEvent:a}))},[v,n]);return M.createElement(pc.Provider,{value:w},M.createElement(pd.Provider,{value:y},M.createElement(s?pi:pl,{width:null!=C?C:null==q?void 0:q.width,height:null!=D?D:null==q?void 0:q.height,className:P("recharts-wrapper",d),style:function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?pe(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):pe(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({position:"relative",cursor:"default",width:C,height:D},q),onClick:F,onContextMenu:N,onDoubleClick:O,onFocus:J,onBlur:K,onKeyDown:L,onMouseDown:Q,onMouseEnter:G,onMouseLeave:H,onMouseMove:I,onMouseUp:R,onTouchEnd:U,onTouchMove:T,onTouchStart:S,ref:E},M.createElement(pg,null),c)))}),pn=dV([eC],a=>({top:a.top,bottom:a.bottom,left:a.left,right:a.right})),po=dV([pn,es,et],(a,b,c)=>{if(a&&null!=b&&null!=c)return{x:a.left,y:a.top,width:Math.max(0,b-a.left-a.right),height:Math.max(0,c-a.top-a.bottom)}}),pp=(0,M.createContext)(void 0),pq=a=>{var{children:b}=a,[c]=(0,M.useState)("".concat(aa("recharts"),"-clip")),d=d2(po);if(null==d)return null;var{x:e,y:f,width:g,height:h}=d;return M.createElement(pp.Provider,{value:c},M.createElement("defs",null,M.createElement("clipPath",{id:c},M.createElement("rect",{x:e,y:f,height:h,width:g}))),b)},pr=["width","height","responsive","children","className","style","compact","title","desc"],ps=(0,M.forwardRef)((a,b)=>{var{width:c,height:d,responsive:e,children:f,className:g,style:h,compact:i,title:j,desc:k}=a,l=oX(function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,pr));return i?M.createElement(M.Fragment,null,M.createElement(eQ,{width:c,height:d}),M.createElement(pa,{otherAttributes:l,title:j,desc:k},f)):M.createElement(pm,{className:g,style:h,width:c,height:d,responsive:null!=e&&e,onClick:a.onClick,onMouseLeave:a.onMouseLeave,onMouseEnter:a.onMouseEnter,onMouseMove:a.onMouseMove,onMouseDown:a.onMouseDown,onMouseUp:a.onMouseUp,onContextMenu:a.onContextMenu,onDoubleClick:a.onDoubleClick,onTouchStart:a.onTouchStart,onTouchMove:a.onTouchMove,onTouchEnd:a.onTouchEnd},M.createElement(pa,{otherAttributes:l,title:j,desc:k,ref:b},M.createElement(pq,null,f)))});function pt(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function pu(a,b){var c=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?pt(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):pt(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({},a);return Object.keys(b).reduce((a,c)=>(void 0===a[c]&&void 0!==b[c]&&(a[c]=b[c]),a),c)}function pv(){return(pv=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function pw(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}var px=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?pw(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):pw(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({accessibilityLayer:!0,barCategoryGap:"10%",barGap:4,layout:"horizontal",margin:{top:5,right:5,bottom:5,left:5},responsive:!1,reverseStackOrder:!1,stackOffset:"none",syncMethod:"index"},oB),py=(0,M.forwardRef)(function(a,b){var c,d=pu(a.categoricalChartProps,px),{chartName:e,defaultTooltipEventType:f,validateTooltipEventTypes:g,tooltipPayloadSearcher:h,categoricalChartProps:i}=a;return M.createElement(oK,{preloadedState:{options:{chartName:e,defaultTooltipEventType:f,validateTooltipEventTypes:g,tooltipPayloadSearcher:h,eventEmitter:void 0}},reduxStoreName:null!=(c=i.id)?c:e},M.createElement(oL,{chartData:i.data}),M.createElement(oO,{layout:d.layout,margin:d.margin}),M.createElement(oQ,{throttleDelay:d.throttleDelay,throttledEvents:d.throttledEvents}),M.createElement(oP,{baseValue:d.baseValue,accessibilityLayer:d.accessibilityLayer,barCategoryGap:d.barCategoryGap,maxBarSize:d.maxBarSize,stackOffset:d.stackOffset,barGap:d.barGap,barSize:d.barSize,syncId:d.syncId,syncMethod:d.syncMethod,className:d.className,reverseStackOrder:d.reverseStackOrder}),M.createElement(ps,pv({},d,{ref:b})))}),pz=["axis","item"],pA=(0,M.forwardRef)((a,b)=>M.createElement(py,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:pz,tooltipPayloadSearcher:co,categoricalChartProps:a,ref:b}));class pB{constructor(a){!function(a,b,c){var d;(b="symbol"==typeof(d=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(b,"string"))?d:d+"")in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c}(this,"cache",new Map),this.maxSize=a}get(a){var b=this.cache.get(a);return void 0!==b&&(this.cache.delete(a),this.cache.set(a,b)),b}set(a,b){if(this.cache.has(a))this.cache.delete(a);else if(this.cache.size>=this.maxSize){var c=this.cache.keys().next().value;null!=c&&this.cache.delete(c)}this.cache.set(a,b)}clear(){this.cache.clear()}size(){return this.cache.size}}function pC(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}var pD=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?pC(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):pC(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({},{cacheSize:2e3,enableCache:!0}),pE=new pB(pD.cacheSize),pF={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},pG="recharts_measurement_span",pH=(a,b)=>{try{var c=document.getElementById(pG);c||((c=document.createElement("span")).setAttribute("id",pG),c.setAttribute("aria-hidden","true"),document.body.appendChild(c)),Object.assign(c.style,pF,b),c.textContent="".concat(a);var d=c.getBoundingClientRect();return{width:d.width,height:d.height}}catch(a){return{width:0,height:0}}},pI=function(a){var b,c,d,e,f,g,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==a||oq)return{width:0,height:0};if(!pD.enableCache)return pH(a,h);var i=(b=h.fontSize||"",c=h.fontFamily||"",d=h.fontWeight||"",e=h.fontStyle||"",f=h.letterSpacing||"",g=h.textTransform||"","".concat(a,"|").concat(b,"|").concat(c,"|").concat(d,"|").concat(e,"|").concat(f,"|").concat(g)),j=pE.get(i);if(j)return j;var k=pH(a,h);return pE.set(i,k),k},pJ=function(a){var{width:b,height:c}=a,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(d%180+180)%180*Math.PI/180,f=Math.atan(c/b);return Math.abs(e>f&&e<Math.PI-f?c/Math.sin(e):b/Math.cos(e))};function pK(a,b){if(b<1)return[];if(1===b)return a;for(var c=[],d=0;d<a.length;d+=b){var e=a[d];void 0!==e&&c.push(e)}return c}function pL(a,b,c,d,e){if(a*b<a*d||a*b>a*e)return!1;var f=c();return a*(b-a*f/2-d)>=0&&a*(b+a*f/2-e)<=0}function pM(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function pN(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?pM(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):pM(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function pO(a,b,c){var d,{tick:e,ticks:f,viewBox:g,minTickGap:h,orientation:i,interval:j,tickFormatter:k,unit:l,angle:m}=a;if(!f||!f.length||!e)return[];if(Z(j)||oq)return null!=(d=pK(f,(Z(j)?j:0)+1))?d:[];var n="top"===i||"bottom"===i?"width":"height",o=l&&"width"===n?pI(l,{fontSize:b,letterSpacing:c}):{width:0,height:0},p=(a,d)=>{var e,f="function"==typeof k?k(a.value,d):a.value;return"width"===n?(e=pI(f,{fontSize:b,letterSpacing:c}),pJ({width:e.width+o.width,height:e.height+o.height},m)):pI(f,{fontSize:b,letterSpacing:c})[n]},q=f[0],r=f[1],s=f.length>=2&&null!=q&&null!=r?W(r.coordinate-q.coordinate):1,t=function(a,b,c){var d="width"===c,{x:e,y:f,width:g,height:h}=a;return 1===b?{start:d?e:f,end:d?e+g:f+h}:{start:d?e+g:f+h,end:d?e:f}}(g,s,n);return"equidistantPreserveStart"===j?function(a,b,c,d,e){for(var f,g=(d||[]).slice(),{start:h,end:i}=b,j=0,k=1,l=h;k<=g.length;)if(f=function(){var b,f=null==d?void 0:d[j];if(void 0===f)return{v:pK(d,k)};var g=j,m=()=>(void 0===b&&(b=c(f,g)),b),n=f.coordinate,o=0===j||pL(a,n,m,l,i);o||(j=0,l=h,k+=1),o&&(l=n+a*(m()/2+e),j+=k)}())return f.v;return[]}(s,t,p,f,h):"equidistantPreserveEnd"===j?function(a,b,c,d,e){var f=(d||[]).slice().length;if(0===f)return[];for(var{start:g,end:h}=b,i=1;i<=f;i++){for(var j,k=(f-1)%i,l=g,m=!0,n=k;n<f&&(0===(j=function(){var b,f=d[n];if(null==f)return 0;var g=n,i=()=>(void 0===b&&(b=c(f,g)),b),j=f.coordinate,o=n===k||pL(a,j,i,l,h);if(!o)return m=!1,1;o&&(l=j+a*(i()/2+e))}())||1!==j);n+=i);if(m){for(var o=[],p=k;p<f;p+=i){var q=d[p];null!=q&&o.push(q)}return o}}return[]}(s,t,p,f,h):("preserveStart"===j||"preserveStartEnd"===j?function(a,b,c,d,e,f){var g=(d||[]).slice(),h=g.length,{start:i,end:j}=b;if(f){var k=d[h-1];if(null!=k){var l=c(k,h-1),m=a*(k.coordinate+a*l/2-j);g[h-1]=k=pN(pN({},k),{},{tickCoord:m>0?k.coordinate-m*a:k.coordinate}),null!=k.tickCoord&&pL(a,k.tickCoord,()=>l,i,j)&&(j=k.tickCoord-a*(l/2+e),g[h-1]=pN(pN({},k),{},{isShow:!0}))}}for(var n=f?h-1:h,o=function(b){var d,f=g[b];if(null==f)return 1;var h=f,k=()=>(void 0===d&&(d=c(f,b)),d);if(0===b){var l=a*(h.coordinate-a*k()/2-i);g[b]=h=pN(pN({},h),{},{tickCoord:l<0?h.coordinate-l*a:h.coordinate})}else g[b]=h=pN(pN({},h),{},{tickCoord:h.coordinate});null!=h.tickCoord&&pL(a,h.tickCoord,k,i,j)&&(i=h.tickCoord+a*(k()/2+e),g[b]=pN(pN({},h),{},{isShow:!0}))},p=0;p<n;p++)if(o(p))continue;return g}(s,t,p,f,h,"preserveStartEnd"===j):function(a,b,c,d,e){for(var f=(d||[]).slice(),g=f.length,{start:h}=b,{end:i}=b,j=function(b){var d,j=f[b];if(null==j)return 1;var k=j,l=()=>(void 0===d&&(d=c(j,b)),d);if(b===g-1){var m=a*(k.coordinate+a*l()/2-i);f[b]=k=pN(pN({},k),{},{tickCoord:m>0?k.coordinate-m*a:k.coordinate})}else f[b]=k=pN(pN({},k),{},{tickCoord:k.coordinate});null!=k.tickCoord&&pL(a,k.tickCoord,l,h,i)&&(i=k.tickCoord-a*(l()/2+e),f[b]=pN(pN({},k),{},{isShow:!0}))},k=g-1;k>=0;k--)if(j(k))continue;return f}(s,t,p,f,h)).filter(a=>a.isShow)}var pP=["children","className"];function pQ(){return(pQ=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}var pR=M.forwardRef((a,b)=>{var{children:c,className:d}=a,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,pP),f=P("recharts-layer",d);return M.createElement("g",pQ({className:f},oZ(e),{ref:b}),c)}),pS=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,pT=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,pU=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,pV=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,pW={cm:96/2.54,mm:96/25.4,pt:96/72,pc:16,in:96,Q:96/101.6,px:1},pX=["cm","mm","pt","pc","in","Q","px"];class pY{static parse(a){var b,[,c,d]=null!=(b=pV.exec(a))?b:[];return null==c?pY.NaN:new pY(parseFloat(c),null!=d?d:"")}constructor(a,b){this.num=a,this.unit=b,this.num=a,this.unit=b,X(a)&&(this.unit=""),""===b||pU.test(b)||(this.num=NaN,this.unit=""),function(a){return pX.includes(a)}(b)&&(this.num=function(a,b){return a*pW[b]}(a,b),this.unit="px")}add(a){return this.unit!==a.unit?new pY(NaN,""):new pY(this.num+a.num,this.unit)}subtract(a){return this.unit!==a.unit?new pY(NaN,""):new pY(this.num-a.num,this.unit)}multiply(a){return""!==this.unit&&""!==a.unit&&this.unit!==a.unit?new pY(NaN,""):new pY(this.num*a.num,this.unit||a.unit)}divide(a){return""!==this.unit&&""!==a.unit&&this.unit!==a.unit?new pY(NaN,""):new pY(this.num/a.num,this.unit||a.unit)}toString(){return"".concat(this.num).concat(this.unit)}isNaN(){return X(this.num)}}function pZ(a){if(null==a||a.includes("NaN"))return"NaN";for(var b=a;b.includes("*")||b.includes("/");){var c,[,d,e,f]=null!=(c=pS.exec(b))?c:[],g=pY.parse(null!=d?d:""),h=pY.parse(null!=f?f:""),i="*"===e?g.multiply(h):g.divide(h);if(i.isNaN())return"NaN";b=b.replace(pS,i.toString())}for(;b.includes("+")||/.-\d+(?:\.\d+)?/.test(b);){var j,[,k,l,m]=null!=(j=pT.exec(b))?j:[],n=pY.parse(null!=k?k:""),o=pY.parse(null!=m?m:""),p="+"===l?n.add(o):n.subtract(o);if(p.isNaN())return"NaN";b=b.replace(pT,p.toString())}return b}e="NaN",f=new pY(NaN,""),(e="symbol"==typeof(d=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(e,"string"))?d:d+"")in pY?Object.defineProperty(pY,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):pY[e]=f;var p$=/\(([^()]*)\)/;function p_(a){var b=function(a){try{var b;return b=a.replace(/\s+/g,""),b=function(a){for(var b,c=a;null!=(b=p$.exec(c));){var[,d]=b;c=c.replace(p$,pZ(d))}return c}(b),b=pZ(b)}catch(a){return"NaN"}}(a.slice(5,-1));return"NaN"===b?"":b}var p0=["x","y","lineHeight","capHeight","fill","scaleToFit","textAnchor","verticalAnchor"],p1=["dx","dy","angle","className","breakAll"];function p2(){return(p2=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function p3(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}var p4=/[ \f\n\r\t\v\u2028\u2029]+/,p5=a=>{var{children:b,breakAll:c,style:d}=a;try{var e=[];null!=b&&(e=c?b.toString().split(""):b.toString().split(p4));var f=e.map(a=>({word:a,width:pI(a,d).width})),g=c?0:pI("\xa0",d).width;return{wordsWithComputedWidth:f,spaceWidth:g}}catch(a){return null}};function p6(a){return"start"===a||"middle"===a||"end"===a||"inherit"===a}var p7=(a,b,c,d)=>a.reduce((a,e)=>{var{word:f,width:g}=e,h=a[a.length-1];return h&&null!=g&&(null==b||d||h.width+g+c<Number(b))?(h.words.push(f),h.width+=g+c):a.push({words:[f],width:g}),a},[]),p8=a=>a.reduce((a,b)=>a.width>b.width?a:b),p9=(a,b,c,d,e,f,g,h)=>{var i=p5({breakAll:c,style:d,children:a.slice(0,b)+"…"});if(!i)return[!1,[]];var j=p7(i.wordsWithComputedWidth,f,g,h);return[j.length>e||p8(j).width>Number(f),j]},qa=a=>[{words:null==a?[]:a.toString().split(p4),width:void 0}],qb="#808080",qc={angle:0,breakAll:!1,capHeight:"0.71em",fill:qb,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},qd=(0,M.forwardRef)((a,b)=>{var c,d=pu(a,qc),{x:e,y:f,lineHeight:g,capHeight:h,fill:i,scaleToFit:j,textAnchor:k,verticalAnchor:l}=d,m=p3(d,p0),n=(0,M.useMemo)(()=>(a=>{var{width:b,scaleToFit:c,children:d,style:e,breakAll:f,maxLines:g}=a;if((b||c)&&!oq){var h=p5({breakAll:f,children:d,style:e});if(!h)return qa(d);var{wordsWithComputedWidth:i,spaceWidth:j}=h;return((a,b,c,d,e)=>{var f,{maxLines:g,children:h,style:i,breakAll:j}=a,k=Z(g),l=String(h),m=p7(b,d,c,e);if(!k||e||!(m.length>g||p8(m).width>Number(d)))return m;for(var n=0,o=l.length-1,p=0;n<=o&&p<=l.length-1;){var q=Math.floor((n+o)/2),[r,s]=p9(l,q-1,j,i,g,d,c,e),[t]=p9(l,q,j,i,g,d,c,e);if(r||t||(n=q+1),r&&t&&(o=q-1),!r&&t){f=s;break}p++}return f||m})({breakAll:f,children:d,maxLines:g,style:e},i,j,b,!!c)}return qa(d)})({breakAll:m.breakAll,children:m.children,maxLines:m.maxLines,scaleToFit:j,style:m.style,width:m.width}),[m.breakAll,m.children,m.maxLines,j,m.style,m.width]),{dx:o,dy:p,angle:q,className:r,breakAll:s}=m,t=p3(m,p1);if(!$(e)||!$(f)||0===n.length)return null;var u=Number(e)+(Z(o)?o:0),v=Number(f)+(Z(p)?p:0);if(!ar(u)||!ar(v))return null;switch(l){case"start":c=p_("calc(".concat(h,")"));break;case"middle":c=p_("calc(".concat((n.length-1)/2," * -").concat(g," + (").concat(h," / 2))"));break;default:c=p_("calc(".concat(n.length-1," * -").concat(g,")"))}var w=[],x=n[0];if(j&&null!=x){var y=x.width,{width:z}=m;w.push("scale(".concat(Z(z)&&Z(y)?z/y:1,")"))}return q&&w.push("rotate(".concat(q,", ").concat(u,", ").concat(v,")")),w.length&&(t.transform=w.join(" ")),M.createElement("text",p2({},oZ(t),{ref:b,x:u,y:v,className:P("recharts-text",r),textAnchor:k,fill:i.includes("url")?qb:i}),n.map((a,b)=>{var d=a.words.join(s?"":" ");return M.createElement("tspan",{x:u,dy:0===b?c:g,key:"".concat(d,"-").concat(b)},d)}))});qd.displayName="Text";var qe=c(74429);function qf(a){var{zIndex:b,children:c}=a,d=void 0!==d2(eN)&&void 0!==b&&0!==b,e=eG(),f=(0,M.useRef)(void 0);(0,M.useRef)(new Set),d$();var g=d2(a=>o1(a,b,e));if(!d)return c;var h=null!=g?g:f.current;return h?(0,qe.createPortal)(c,h):null}function qg(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function qh(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?qg(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):qg(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var qi=["labelRef"],qj=["content"];function qk(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function ql(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function qm(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?ql(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):ql(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function qn(){return(qn=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}var qo=(0,M.createContext)(null),qp=a=>{var{x:b,y:c,upperWidth:d,lowerWidth:e,width:f,height:g,children:h}=a,i=(0,M.useMemo)(()=>({x:b,y:c,upperWidth:d,lowerWidth:e,width:f,height:g}),[b,c,d,e,f,g]);return M.createElement(qo.Provider,{value:i},h)},qq=()=>{var a=(0,M.useContext)(qo),b=eK();return a||(b?eJ(b):void 0)},qr=(0,M.createContext)(null),qs=a=>null!=a&&"function"==typeof a,qt=a=>null!=a&&"cx"in a&&Z(a.cx),qu={angle:0,offset:5,zIndex:fQ.label,position:"middle",textBreakAll:!1};function qv(a){var b,c,d,e,f,g=pu(a,qu),{viewBox:h,parentViewBox:i,position:j,value:k,children:l,content:m,className:n="",textBreakAll:o,labelRef:p}=g,q=(b=(0,M.useContext)(qr),c=d2(f5),b||c),r=qq(),s=function(a){if(!qt(a))return a;var{cx:b,cy:c,outerRadius:d}=a,e=2*d;return{x:b-d,y:c-d,width:e,upperWidth:e,lowerWidth:e,height:e}}(d=null==h?"center"===j?r:null!=q?q:r:qt(h)?h:eJ(h));if(!d||null==k&&null==l&&!(0,M.isValidElement)(m)&&"function"!=typeof m)return null;var t=qm(qm({},g),{},{viewBox:d});if((0,M.isValidElement)(m)){var{labelRef:u}=t,v=qk(t,qi);return(0,M.cloneElement)(m,v)}if("function"==typeof m){var{content:w}=t,x=qk(t,qj);if(e=(0,M.createElement)(m,x),(0,M.isValidElement)(e))return e}else e=(a=>{var{value:b,formatter:c}=a,d=null==a.children?b:a.children;return"function"==typeof c?c(d):d})(g);var y=oZ(g);if(qt(d)){if("insideStart"===j||"insideEnd"===j||"end"===j)return((a,b,c,d,e)=>{var f,g,{offset:h,className:i}=a,{cx:j,cy:k,innerRadius:l,outerRadius:m,startAngle:n,endAngle:o,clockWise:p}=e,q=(l+m)/2,r=W(o-n)*Math.min(Math.abs(o-n),360),s=r>=0?1:-1;switch(b){case"insideStart":f=n+s*h,g=p;break;case"insideEnd":f=o-s*h,g=!p;break;case"end":f=o+s*h,g=p;break;default:throw Error("Unsupported position ".concat(b))}g=r<=0?g:!g;var t=fO(j,k,q,f),u=fO(j,k,q,f+(g?1:-1)*359),v="M".concat(t.x,",").concat(t.y,"\n    A").concat(q,",").concat(q,",0,1,").concat(+!g,",\n    ").concat(u.x,",").concat(u.y),w=null==a.id?aa("recharts-radial-line-"):a.id;return M.createElement("text",qn({},d,{dominantBaseline:"central",className:P("recharts-radial-bar-label",i)}),M.createElement("defs",null,M.createElement("path",{id:w,d:v})),M.createElement("textPath",{xlinkHref:"#".concat(w)},c))})(g,j,e,y,d);f=((a,b,c)=>{var{cx:d,cy:e,innerRadius:f,outerRadius:g,startAngle:h,endAngle:i}=a,j=(h+i)/2;if("outside"===c){var{x:k,y:l}=fO(d,e,g+b,j);return{x:k,y:l,textAnchor:k>=d?"start":"end",verticalAnchor:"middle"}}if("center"===c)return{x:d,y:e,textAnchor:"middle",verticalAnchor:"middle"};if("centerTop"===c)return{x:d,y:e,textAnchor:"middle",verticalAnchor:"start"};if("centerBottom"===c)return{x:d,y:e,textAnchor:"middle",verticalAnchor:"end"};var{x:m,y:n}=fO(d,e,(f+g)/2,j);return{x:m,y:n,textAnchor:"middle",verticalAnchor:"middle"}})(d,g.offset,g.position)}else{if(!s)return null;var z=(a=>{var{viewBox:b,position:c,offset:d=0,parentViewBox:e,clamp:f}=a,{x:g,y:h,height:i,upperWidth:j,lowerWidth:k}=eJ(b),l=g+(j-k)/2,m=(g+l)/2,n=(j+k)/2,o=i>=0?1:-1,p=o*d,q=o>0?"end":"start",r=o>0?"start":"end",s=j>=0?1:-1,t=s*d,u=s>0?"end":"start",v=s>0?"start":"end";if("top"===c){var w={x:g+j/2,y:h-p,horizontalAnchor:"middle",verticalAnchor:q};return f&&e&&(w.height=Math.max(h-e.y,0),w.width=j),w}if("bottom"===c){var x={x:l+k/2,y:h+i+p,horizontalAnchor:"middle",verticalAnchor:r};return f&&e&&(x.height=Math.max(e.y+e.height-(h+i),0),x.width=k),x}if("left"===c){var y={x:m-t,y:h+i/2,horizontalAnchor:u,verticalAnchor:"middle"};return f&&e&&(y.width=Math.max(y.x-e.x,0),y.height=i),y}if("right"===c){var z={x:m+n+t,y:h+i/2,horizontalAnchor:v,verticalAnchor:"middle"};return f&&e&&(z.width=Math.max(e.x+e.width-z.x,0),z.height=i),z}var A=f&&e?{width:n,height:i}:{};return"insideLeft"===c?qh({x:m+t,y:h+i/2,horizontalAnchor:v,verticalAnchor:"middle"},A):"insideRight"===c?qh({x:m+n-t,y:h+i/2,horizontalAnchor:u,verticalAnchor:"middle"},A):"insideTop"===c?qh({x:g+j/2,y:h+p,horizontalAnchor:"middle",verticalAnchor:r},A):"insideBottom"===c?qh({x:l+k/2,y:h+i-p,horizontalAnchor:"middle",verticalAnchor:q},A):"insideTopLeft"===c?qh({x:g+t,y:h+p,horizontalAnchor:v,verticalAnchor:r},A):"insideTopRight"===c?qh({x:g+j-t,y:h+p,horizontalAnchor:u,verticalAnchor:r},A):"insideBottomLeft"===c?qh({x:l+t,y:h+i-p,horizontalAnchor:v,verticalAnchor:q},A):"insideBottomRight"===c?qh({x:l+k-t,y:h+i-p,horizontalAnchor:u,verticalAnchor:q},A):c&&"object"==typeof c&&(Z(c.x)||Y(c.x))&&(Z(c.y)||Y(c.y))?qh({x:g+ab(c.x,n),y:h+ab(c.y,i),horizontalAnchor:"end",verticalAnchor:"end"},A):qh({x:g+j/2,y:h+i/2,horizontalAnchor:"middle",verticalAnchor:"middle"},A)})({viewBox:s,position:j,offset:g.offset,parentViewBox:qt(i)?void 0:i,clamp:!0});f=qm(qm({x:z.x,y:z.y,textAnchor:z.horizontalAnchor,verticalAnchor:z.verticalAnchor},void 0!==z.width?{width:z.width}:{}),void 0!==z.height?{height:z.height}:{})}return M.createElement(qf,{zIndex:g.zIndex},M.createElement(qd,qn({ref:p,className:P("recharts-label",n)},y,f,{textAnchor:p6(y.textAnchor)?y.textAnchor:f.textAnchor,breakAll:o}),e))}function qw(a){var{label:b,labelRef:c}=a;return((a,b,c)=>{if(!a)return null;var d={viewBox:b,labelRef:c};return!0===a?M.createElement(qv,qn({key:"label-implicit"},d)):$(a)?M.createElement(qv,qn({key:"label-implicit",value:a},d)):(0,M.isValidElement)(a)?a.type===qv?(0,M.cloneElement)(a,qm({key:"label-implicit"},d)):M.createElement(qv,qn({key:"label-implicit",content:a},d)):qs(a)?M.createElement(qv,qn({key:"label-implicit",content:a},d)):a&&"object"==typeof a?M.createElement(qv,qn({},a,{key:"label-implicit"},d)):null})(b,qq(),c)||null}qv.displayName="Label";var qx=a=>"radius"in a&&"startAngle"in a&&"endAngle"in a,qy=(a,b)=>{if(!a||"function"==typeof a||"boolean"==typeof a)return null;var c=a;if((0,M.isValidElement)(a)&&(c=a.props),"object"!=typeof c&&"function"!=typeof c)return null;var d={};return Object.keys(c).forEach(a=>{oT(a)&&"function"==typeof c[a]&&(d[a]=b||(b=>c[a](c,b)))}),d},qz=(a,b,c)=>{if(null===a||"object"!=typeof a&&"function"!=typeof a)return null;var d=null;return Object.keys(a).forEach(e=>{var f=a[e];oT(e)&&"function"==typeof f&&(d||(d={}),d[e]=a=>(f(b,c,a),null))}),d};function qA(a){return a&&"object"==typeof a&&"className"in a&&"string"==typeof a.className?a.className:""}var qB=["axisLine","width","height","className","hide","ticks","axisType","axisId"];function qC(){return(qC=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function qD(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function qE(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?qD(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):qD(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var qF={x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd",zIndex:fQ.axis};function qG(a){var{x:b,y:c,width:d,height:e,orientation:f,mirror:g,axisLine:h,otherSvgProps:i}=a;if(!h)return null;var j=qE(qE(qE({},i),oX(h)),{},{fill:"none"});if("top"===f||"bottom"===f){var k=+("top"===f&&!g||"bottom"===f&&g);j=qE(qE({},j),{},{x1:b,y1:c+k*e,x2:b+d,y2:c+k*e})}else{var l=+("left"===f&&!g||"right"===f&&g);j=qE(qE({},j),{},{x1:b+l*d,y1:c,x2:b+l*d,y2:c+e})}return M.createElement("line",qC({},j,{className:P("recharts-cartesian-axis-line",T()(h,"className"))}))}function qH(a){var b,{option:c,tickProps:d,value:e}=a,f=P(d.className,"recharts-cartesian-axis-tick-value");if(M.isValidElement(c))b=M.cloneElement(c,qE(qE({},d),{},{className:f}));else if("function"==typeof c)b=c(qE(qE({},d),{},{className:f}));else{var g="recharts-cartesian-axis-tick-value";"boolean"!=typeof c&&(g=P(g,qA(c))),b=M.createElement(qd,qC({},d,{className:g}),e)}return b}function qI(a){var{ticks:b,axisType:c,axisId:d}=a;return d$(),null}var qJ=(0,M.forwardRef)((a,b)=>{var{ticks:c=[],tick:d,tickLine:e,stroke:f,tickFormatter:g,unit:h,padding:i,tickTextProps:j,orientation:k,mirror:l,x:m,y:n,width:o,height:p,tickSize:q,tickMargin:r,fontSize:s,letterSpacing:t,getTicksConfig:u,events:v,axisType:w,axisId:x}=a,y=pO(qE(qE({},u),{},{ticks:c}),s,t),z=oX(u),A=oY(d),B=p6(z.textAnchor)?z.textAnchor:function(a,b){switch(a){case"left":return b?"start":"end";case"right":return b?"end":"start";default:return"middle"}}(k,l),C=function(a,b){switch(a){case"left":case"right":return"middle";case"top":return b?"start":"end";default:return b?"end":"start"}}(k,l),D={};"object"==typeof e&&(D=e);var E=qE(qE({},z),{},{fill:"none"},D),F=y.map(a=>qE({entry:a},function(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p=h?-1:1,q=a.tickSize||g,r=Z(a.tickCoord)?a.tickCoord:a.coordinate;switch(f){case"top":j=k=a.coordinate,o=(l=(m=c+!h*e)-p*q)-p*i,n=r;break;case"left":l=m=a.coordinate,n=(j=(k=b+!h*d)-p*q)-p*i,o=r;break;case"right":l=m=a.coordinate,n=(j=(k=b+h*d)+p*q)+p*i,o=r;break;default:j=k=a.coordinate,o=(l=(m=c+h*e)+p*q)+p*i,n=r}return{line:{x1:j,y1:l,x2:k,y2:m},tick:{x:n,y:o}}}(a,m,n,o,p,k,q,l,r))),G=F.map(a=>{var{entry:b,line:c}=a;return M.createElement(pR,{className:"recharts-cartesian-axis-tick",key:"tick-".concat(b.value,"-").concat(b.coordinate,"-").concat(b.tickCoord)},e&&M.createElement("line",qC({},E,c,{className:P("recharts-cartesian-axis-tick-line",T()(e,"className"))})))}),H=F.map((a,b)=>{var c,e,{entry:k,tick:l}=a,m=qE(qE(qE(qE({verticalAnchor:C},z),{},{textAnchor:B,stroke:"none",fill:f},l),{},{index:b,payload:k,visibleTicksCount:y.length,tickFormatter:g,padding:i},j),{},{angle:null!=(c=null!=(e=null==j?void 0:j.angle)?e:z.angle)?c:0}),n=qE(qE({},m),A);return M.createElement(pR,qC({className:"recharts-cartesian-axis-tick-label",key:"tick-label-".concat(k.value,"-").concat(k.coordinate,"-").concat(k.tickCoord)},qz(v,k,b)),d&&M.createElement(qH,{option:d,tickProps:n,value:"".concat("function"==typeof g?g(k.value,b):k.value).concat(h||"")}))});return M.createElement("g",{className:"recharts-cartesian-axis-ticks recharts-".concat(w,"-ticks")},M.createElement(qI,{ticks:y,axisId:x,axisType:w}),H.length>0&&M.createElement(qf,{zIndex:fQ.label},M.createElement("g",{className:"recharts-cartesian-axis-tick-labels recharts-".concat(w,"-tick-labels"),ref:b},H)),G.length>0&&M.createElement("g",{className:"recharts-cartesian-axis-tick-lines recharts-".concat(w,"-tick-lines")},G))}),qK=(0,M.forwardRef)((a,b)=>{var{axisLine:c,width:d,height:e,className:f,hide:g,ticks:h,axisType:i,axisId:j}=a,k=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,qB),[l,m]=(0,M.useState)(""),[n,o]=(0,M.useState)(""),p=(0,M.useRef)(null);(0,M.useImperativeHandle)(b,()=>({getCalculatedWidth:()=>{var b;return(a=>{var{ticks:b,label:c,labelGapWithTick:d=5,tickSize:e=0,tickMargin:f=0}=a,g=0;if(b){Array.from(b).forEach(a=>{if(a){var b=a.getBoundingClientRect();b.width>g&&(g=b.width)}});var h=c?c.getBoundingClientRect().width:0;return Math.round(g+(e+f)+h+(c?d:0))}return 0})({ticks:p.current,label:null==(b=a.labelRef)?void 0:b.current,labelGapWithTick:5,tickSize:a.tickSize,tickMargin:a.tickMargin})}}));var q=(0,M.useCallback)(a=>{if(a){var b=a.getElementsByClassName("recharts-cartesian-axis-tick-value");p.current=b;var c=b[0];if(c){var d=window.getComputedStyle(c),e=d.fontSize,f=d.letterSpacing;(e!==l||f!==n)&&(m(e),o(f))}}},[l,n]);return g||null!=d&&d<=0||null!=e&&e<=0?null:M.createElement(qf,{zIndex:a.zIndex},M.createElement(pR,{className:P("recharts-cartesian-axis",f)},M.createElement(qG,{x:a.x,y:a.y,width:d,height:e,orientation:a.orientation,mirror:a.mirror,axisLine:c,otherSvgProps:oX(a)}),M.createElement(qJ,{ref:q,axisType:i,events:k,fontSize:l,getTicksConfig:a,height:a.height,letterSpacing:n,mirror:a.mirror,orientation:a.orientation,padding:a.padding,stroke:a.stroke,tick:a.tick,tickFormatter:a.tickFormatter,tickLine:a.tickLine,tickMargin:a.tickMargin,tickSize:a.tickSize,tickTextProps:a.tickTextProps,ticks:h,unit:a.unit,width:a.width,x:a.x,y:a.y,axisId:j}),M.createElement(qp,{x:a.x,y:a.y,width:a.width,height:a.height,lowerWidth:a.width,upperWidth:a.width},M.createElement(qw,{label:a.label,labelRef:a.labelRef}),a.children)))}),qL=M.forwardRef((a,b)=>{var c=pu(a,qF);return M.createElement(qK,qC({},c,{ref:b}))});qL.displayName="CartesianAxis";var qM=["x1","y1","x2","y2","key"],qN=["offset"],qO=["xAxisId","yAxisId"],qP=["xAxisId","yAxisId"];function qQ(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function qR(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?qQ(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):qQ(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function qS(){return(qS=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function qT(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}var qU=a=>{var{fill:b}=a;if(!b||"none"===b)return null;var{fillOpacity:c,x:d,y:e,width:f,height:g,ry:h}=a;return M.createElement("rect",{x:d,y:e,ry:h,width:f,height:g,stroke:"none",fill:b,fillOpacity:c,className:"recharts-cartesian-grid-bg"})};function qV(a){var{option:b,lineItemProps:c}=a;if(M.isValidElement(b))d=M.cloneElement(b,c);else if("function"==typeof b)d=b(c);else{var d,e,{x1:f,y1:g,x2:h,y2:i,key:j}=c,k=null!=(e=oX(qT(c,qM)))?e:{},{offset:l}=k,m=qT(k,qN);d=M.createElement("line",qS({},m,{x1:f,y1:g,x2:h,y2:i,fill:"none",key:j}))}return d}function qW(a){var{x:b,width:c,horizontal:d=!0,horizontalPoints:e}=a;if(!d||!e||!e.length)return null;var{xAxisId:f,yAxisId:g}=a,h=qT(a,qO),i=e.map((a,e)=>{var f=qR(qR({},h),{},{x1:b,y1:a,x2:b+c,y2:a,key:"line-".concat(e),index:e});return M.createElement(qV,{key:"line-".concat(e),option:d,lineItemProps:f})});return M.createElement("g",{className:"recharts-cartesian-grid-horizontal"},i)}function qX(a){var{y:b,height:c,vertical:d=!0,verticalPoints:e}=a;if(!d||!e||!e.length)return null;var{xAxisId:f,yAxisId:g}=a,h=qT(a,qP),i=e.map((a,e)=>{var f=qR(qR({},h),{},{x1:a,y1:b,x2:a,y2:b+c,key:"line-".concat(e),index:e});return M.createElement(qV,{option:d,lineItemProps:f,key:"line-".concat(e)})});return M.createElement("g",{className:"recharts-cartesian-grid-vertical"},i)}function qY(a){var{horizontalFill:b,fillOpacity:c,x:d,y:e,width:f,height:g,horizontalPoints:h,horizontal:i=!0}=a;if(!i||!b||!b.length||null==h)return null;var j=h.map(a=>Math.round(a+e-e)).sort((a,b)=>a-b);e!==j[0]&&j.unshift(0);var k=j.map((a,h)=>{var i=j[h+1],k=null==i?e+g-a:i-a;if(k<=0)return null;var l=h%b.length;return M.createElement("rect",{key:"react-".concat(h),y:a,x:d,height:k,width:f,stroke:"none",fill:b[l],fillOpacity:c,className:"recharts-cartesian-grid-bg"})});return M.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},k)}function qZ(a){var{vertical:b=!0,verticalFill:c,fillOpacity:d,x:e,y:f,width:g,height:h,verticalPoints:i}=a;if(!b||!c||!c.length)return null;var j=i.map(a=>Math.round(a+e-e)).sort((a,b)=>a-b);e!==j[0]&&j.unshift(0);var k=j.map((a,b)=>{var i=j[b+1],k=null==i?e+g-a:i-a;if(k<=0)return null;var l=b%c.length;return M.createElement("rect",{key:"react-".concat(b),x:a,y:f,width:k,height:h,stroke:"none",fill:c[l],fillOpacity:d,className:"recharts-cartesian-grid-bg"})});return M.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},k)}var q$=(a,b)=>{var{xAxis:c,width:d,height:e,offset:f}=a;return eh(pO(qR(qR(qR({},qF),c),{},{ticks:ei(c,!0),viewBox:{x:0,y:0,width:d,height:e}})),f.left,f.left+f.width,b)},q_=(a,b)=>{var{yAxis:c,width:d,height:e,offset:f}=a;return eh(pO(qR(qR(qR({},qF),c),{},{ticks:ei(c,!0),viewBox:{x:0,y:0,width:d,height:e}})),f.top,f.top+f.height,b)},q0={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[],xAxisId:0,yAxisId:0,syncWithTicks:!1,zIndex:fQ.grid};function q1(a){var b=d2(es),c=d2(et),d=eM(),e=qR(qR({},pu(a,q0)),{},{x:Z(a.x)?a.x:d.left,y:Z(a.y)?a.y:d.top,width:Z(a.width)?a.width:d.width,height:Z(a.height)?a.height:d.height}),{xAxisId:f,yAxisId:g,x:h,y:i,width:j,height:k,syncWithTicks:l,horizontalValues:m,verticalValues:n}=e,o=eG(),p=d2(a=>lC(a,"xAxis",f,o)),q=d2(a=>lC(a,"yAxis",g,o));if(!as(j)||!as(k)||!Z(h)||!Z(i))return null;var r=e.verticalCoordinatesGenerator||q$,s=e.horizontalCoordinatesGenerator||q_,{horizontalPoints:t,verticalPoints:u}=e;if((!t||!t.length)&&"function"==typeof s){var v=m&&m.length,w=s({yAxis:q?qR(qR({},q),{},{ticks:v?m:q.ticks}):void 0,width:null!=b?b:j,height:null!=c?c:k,offset:d},!!v||l);ai(Array.isArray(w),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof w,"]")),Array.isArray(w)&&(t=w)}if((!u||!u.length)&&"function"==typeof r){var x=n&&n.length,y=r({xAxis:p?qR(qR({},p),{},{ticks:x?n:p.ticks}):void 0,width:null!=b?b:j,height:null!=c?c:k,offset:d},!!x||l);ai(Array.isArray(y),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof y,"]")),Array.isArray(y)&&(u=y)}return M.createElement(qf,{zIndex:e.zIndex},M.createElement("g",{className:"recharts-cartesian-grid"},M.createElement(qU,{fill:e.fill,fillOpacity:e.fillOpacity,x:e.x,y:e.y,width:e.width,height:e.height,ry:e.ry}),M.createElement(qY,qS({},e,{horizontalPoints:t})),M.createElement(qZ,qS({},e,{verticalPoints:u})),M.createElement(qW,qS({},e,{offset:d,horizontalPoints:t,xAxis:p,yAxis:q})),M.createElement(qX,qS({},e,{offset:d,verticalPoints:u,xAxis:p,yAxis:q}))))}q1.displayName="CartesianGrid";var q2=["domain","range"],q3=["domain","range"];function q4(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function q5(a,b){return a===b||!!(Array.isArray(a)&&2===a.length&&Array.isArray(b))&&2===b.length&&a[0]===b[0]&&a[1]===b[1]}function q6(a,b){if(a===b)return!0;var{domain:c,range:d}=a,e=q4(a,q2),{domain:f,range:g}=b,h=q4(b,q3);return!!q5(c,f)&&!!q5(d,g)&&oN(e,h)}var q7=["type"],q8=["dangerouslySetInnerHTML","ticks","scale"],q9=["id","scale"];function ra(){return(ra=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function rb(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function rc(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?rb(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):rb(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function rd(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function re(a){d$(),(0,M.useRef)(null);var b=eO(),{type:c}=a,d=rd(a,q7),e=fU(b,"xAxis",c);return(0,M.useMemo)(()=>{if(null!=e)return rc(rc({},d),{},{type:e})},[d,e]),null}var rf=a=>{var{xAxisId:b,className:c}=a,d=d2(eE),e=eG(),f="xAxis",g=d2(a=>lD(a,f,b,e)),h=d2(a=>lt(a,b)),i=d2(a=>lw(a,b)),j=d2(a=>j2(a,b));if(null==h||null==i||null==j)return null;var{dangerouslySetInnerHTML:k,ticks:l,scale:m}=a,n=rd(a,q8),{id:o,scale:p}=j,q=rd(j,q9);return M.createElement(qL,ra({},n,q,{x:i.x,y:i.y,width:h.width,height:h.height,className:P("recharts-".concat(f," ").concat(f),c),viewBox:d,ticks:g,axisType:f,axisId:b}))},rg={allowDataOverflow:j1.allowDataOverflow,allowDecimals:j1.allowDecimals,allowDuplicatedCategory:j1.allowDuplicatedCategory,angle:j1.angle,axisLine:qF.axisLine,height:j1.height,hide:!1,includeHidden:j1.includeHidden,interval:j1.interval,label:!1,minTickGap:j1.minTickGap,mirror:j1.mirror,orientation:j1.orientation,padding:j1.padding,reversed:j1.reversed,scale:j1.scale,tick:j1.tick,tickCount:j1.tickCount,tickLine:qF.tickLine,tickSize:qF.tickSize,type:j1.type,niceTicks:j1.niceTicks,xAxisId:0},rh=M.memo(a=>{var b=pu(a,rg);return M.createElement(M.Fragment,null,M.createElement(re,{allowDataOverflow:b.allowDataOverflow,allowDecimals:b.allowDecimals,allowDuplicatedCategory:b.allowDuplicatedCategory,angle:b.angle,dataKey:b.dataKey,domain:b.domain,height:b.height,hide:b.hide,id:b.xAxisId,includeHidden:b.includeHidden,interval:b.interval,minTickGap:b.minTickGap,mirror:b.mirror,name:b.name,orientation:b.orientation,padding:b.padding,reversed:b.reversed,scale:b.scale,tick:b.tick,tickCount:b.tickCount,tickFormatter:b.tickFormatter,ticks:b.ticks,type:b.type,unit:b.unit,niceTicks:b.niceTicks}),M.createElement(rf,b))},q6);rh.displayName="XAxis";var ri=["type"],rj=["dangerouslySetInnerHTML","ticks","scale"],rk=["id","scale"];function rl(){return(rl=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function rm(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function rn(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?rm(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):rm(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function ro(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function rp(a){d$(),(0,M.useRef)(null);var b=eO(),{type:c}=a,d=ro(a,ri),e=fU(b,"yAxis",c);return(0,M.useMemo)(()=>{if(null!=e)return rn(rn({},d),{},{type:e})},[e,d]),null}function rq(a){var{yAxisId:b,className:c,width:d,label:e}=a,f=(0,M.useRef)(null),g=(0,M.useRef)(null),h=d2(eE),i=eG();d$();var j="yAxis",k=d2(a=>ly(a,b)),l=d2(a=>lx(a,b)),m=d2(a=>lD(a,j,b,i)),n=d2(a=>j5(a,b));if(null==k||null==l||null==n)return null;var{dangerouslySetInnerHTML:o,ticks:p,scale:q}=a,r=ro(a,rj),{id:s,scale:t}=n,u=ro(n,rk);return M.createElement(qL,rl({},r,u,{ref:f,labelRef:g,x:l.x,y:l.y,tickTextProps:"auto"===d?{width:void 0}:{width:d},width:k.width,height:k.height,className:P("recharts-".concat(j," ").concat(j),c),viewBox:h,ticks:m,axisType:j,axisId:b}))}var rr={allowDataOverflow:j4.allowDataOverflow,allowDecimals:j4.allowDecimals,allowDuplicatedCategory:j4.allowDuplicatedCategory,angle:j4.angle,axisLine:qF.axisLine,hide:!1,includeHidden:j4.includeHidden,interval:j4.interval,label:!1,minTickGap:j4.minTickGap,mirror:j4.mirror,orientation:j4.orientation,padding:j4.padding,reversed:j4.reversed,scale:j4.scale,tick:j4.tick,tickCount:j4.tickCount,tickLine:qF.tickLine,tickSize:qF.tickSize,type:j4.type,niceTicks:j4.niceTicks,width:j4.width,yAxisId:0},rs=M.memo(a=>{var b=pu(a,rr);return M.createElement(M.Fragment,null,M.createElement(rp,{interval:b.interval,id:b.yAxisId,scale:b.scale,type:b.type,domain:b.domain,allowDataOverflow:b.allowDataOverflow,dataKey:b.dataKey,allowDuplicatedCategory:b.allowDuplicatedCategory,allowDecimals:b.allowDecimals,tickCount:b.tickCount,padding:b.padding,includeHidden:b.includeHidden,reversed:b.reversed,ticks:b.ticks,width:b.width,orientation:b.orientation,mirror:b.mirror,hide:b.hide,unit:b.unit,name:b.name,angle:b.angle,minTickGap:b.minTickGap,tick:b.tick,tickFormatter:b.tickFormatter,niceTicks:b.niceTicks}),M.createElement(rq,b))},q6);function rt(){return(rt=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function ru(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function rv(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?ru(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):ru(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function rw(a){return Array.isArray(a)&&$(a[0])&&$(a[1])?a.join(" ~ "):a}rs.displayName="YAxis";var rx={margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},ry={display:"block",paddingTop:4,paddingBottom:4,color:"#000"},rz={},rA=a=>{var{separator:b=" : ",contentStyle:c,itemStyle:d,labelStyle:e=rz,payload:f,formatter:g,itemSorter:h,wrapperClassName:i,labelClassName:j,label:k,labelFormatter:l,accessibilityLayer:m=!1}=a,n=rv(rv({},rx),c),o=rv({margin:0},e),p=null!=k,q=p?k:"",r=P("recharts-default-tooltip",i),s=P("recharts-tooltip-label",j);return p&&l&&null!=f&&(q=l(k,f)),M.createElement("div",rt({className:r,style:n},m?{role:"status","aria-live":"assertive"}:{}),M.createElement("p",{className:s,style:o},M.isValidElement(q)?q:"".concat(q)),(()=>{if(f&&f.length){var a=(null==h?f:d4()(f,h)).map((a,c)=>{if(!a||"none"===a.type)return null;var e=a.formatter||g||rw,{value:h,name:i}=a,j=h,k=i;if(e){var l=e(h,i,a,c,f);if(Array.isArray(l))[j,k]=l;else{if(null==l)return null;j=l}}var m=rv(rv({},ry),{},{color:a.color||ry.color},d);return M.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(c),style:m},$(k)?M.createElement("span",{className:"recharts-tooltip-item-name"},k):null,$(k)?M.createElement("span",{className:"recharts-tooltip-item-separator"},b):null,M.createElement("span",{className:"recharts-tooltip-item-value"},j),M.createElement("span",{className:"recharts-tooltip-item-unit"},a.unit||""))});return M.createElement("ul",{className:"recharts-tooltip-item-list",style:{padding:0,margin:0}},a)}return null})())},rB="recharts-tooltip-wrapper",rC={visibility:"hidden"};function rD(a){var{allowEscapeViewBox:b,coordinate:c,key:d,offset:e,position:f,reverseDirection:g,tooltipDimension:h,viewBox:i,viewBoxDimension:j}=a;if(f&&Z(f[d]))return f[d];var k=c[d]-h-(e>0?e:0),l=c[d]+e;if(b[d])return g[d]?k:l;var m=i[d];return null==m?0:g[d]?k<m?Math.max(l,m):Math.max(k,m):null==j?0:l+h>m+j?Math.max(k,m):Math.max(l,m)}function rE(){var[a,b]=(0,M.useState)(()=>!oq&&!!window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);return a}function rF(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function rG(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?rF(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):rF(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var rH=M.memo(function(a){var b,c,d,e,f,g,h=rE(),[i,j]=M.useState(()=>({dismissed:!1,dismissedAtCoordinate:{x:0,y:0}}));M.useEffect(()=>{var b=b=>{if("Escape"===b.key){var c,d,e,f;j({dismissed:!0,dismissedAtCoordinate:{x:null!=(c=null==(d=a.coordinate)?void 0:d.x)?c:0,y:null!=(e=null==(f=a.coordinate)?void 0:f.y)?e:0}})}};return document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)}},[null==(b=a.coordinate)?void 0:b.x,null==(c=a.coordinate)?void 0:c.y]),i.dismissed&&((null!=(d=null==(e=a.coordinate)?void 0:e.x)?d:0)!==i.dismissedAtCoordinate.x||(null!=(f=null==(g=a.coordinate)?void 0:g.y)?f:0)!==i.dismissedAtCoordinate.y)&&j(rG(rG({},i),{},{dismissed:!1}));var{cssClasses:k,cssProperties:l}=function(a){var b,c,d,{allowEscapeViewBox:e,coordinate:f,offsetTop:g,offsetLeft:h,position:i,reverseDirection:j,tooltipBox:k,useTranslate3d:l,viewBox:m}=a;return{cssProperties:b=k.height>0&&k.width>0&&f?function(a){var{translateX:b,translateY:c,useTranslate3d:d}=a;return{transform:d?"translate3d(".concat(b,"px, ").concat(c,"px, 0)"):"translate(".concat(b,"px, ").concat(c,"px)")}}({translateX:c=rD({allowEscapeViewBox:e,coordinate:f,key:"x",offset:h,position:i,reverseDirection:j,tooltipDimension:k.width,viewBox:m,viewBoxDimension:m.width}),translateY:d=rD({allowEscapeViewBox:e,coordinate:f,key:"y",offset:g,position:i,reverseDirection:j,tooltipDimension:k.height,viewBox:m,viewBoxDimension:m.height}),useTranslate3d:l}):rC,cssClasses:function(a){var{coordinate:b,translateX:c,translateY:d}=a;return P(rB,{["".concat(rB,"-right")]:Z(c)&&b&&Z(b.x)&&c>=b.x,["".concat(rB,"-left")]:Z(c)&&b&&Z(b.x)&&c<b.x,["".concat(rB,"-bottom")]:Z(d)&&b&&Z(b.y)&&d>=b.y,["".concat(rB,"-top")]:Z(d)&&b&&Z(b.y)&&d<b.y})}({translateX:c,translateY:d,coordinate:f})}}({allowEscapeViewBox:a.allowEscapeViewBox,coordinate:a.coordinate,offsetLeft:"number"==typeof a.offset?a.offset:a.offset.x,offsetTop:"number"==typeof a.offset?a.offset:a.offset.y,position:a.position,reverseDirection:a.reverseDirection,tooltipBox:{height:a.lastBoundingBox.height,width:a.lastBoundingBox.width},useTranslate3d:a.useTranslate3d,viewBox:a.viewBox}),m=a.hasPortalFromProps?{}:rG(rG({transition:function(a){if((!a.prefersReducedMotion||"auto"!==a.isAnimationActive)&&a.isAnimationActive&&a.active)return"transform ".concat(a.animationDuration,"ms ").concat(a.animationEasing)}({prefersReducedMotion:h,isAnimationActive:a.isAnimationActive,active:a.active,animationDuration:a.animationDuration,animationEasing:a.animationEasing})},l),{},{pointerEvents:"none",position:"absolute",top:0,left:0}),n=rG(rG({},m),{},{visibility:!i.dismissed&&a.active&&a.hasPayload?"visible":"hidden"},a.wrapperStyle);return M.createElement("div",{xmlns:"http://www.w3.org/1999/xhtml",tabIndex:-1,className:k,style:n,ref:a.innerRef},a.children)}),rI=c(37228),rJ=c.n(rI);function rK(){}function rL(a,b,c){a._context.bezierCurveTo((2*a._x0+a._x1)/3,(2*a._y0+a._y1)/3,(a._x0+2*a._x1)/3,(a._y0+2*a._y1)/3,(a._x0+4*a._x1+b)/6,(a._y0+4*a._y1+c)/6)}function rM(a){this._context=a}function rN(a){this._context=a}function rO(a){this._context=a}rM.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:rL(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(a,b){switch(a*=1,b*=1,this._point){case 0:this._point=1,this._line?this._context.lineTo(a,b):this._context.moveTo(a,b);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:rL(this,a,b)}this._x0=this._x1,this._x1=a,this._y0=this._y1,this._y1=b}},rN.prototype={areaStart:rK,areaEnd:rK,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(a,b){switch(a*=1,b*=1,this._point){case 0:this._point=1,this._x2=a,this._y2=b;break;case 1:this._point=2,this._x3=a,this._y3=b;break;case 2:this._point=3,this._x4=a,this._y4=b,this._context.moveTo((this._x0+4*this._x1+a)/6,(this._y0+4*this._y1+b)/6);break;default:rL(this,a,b)}this._x0=this._x1,this._x1=a,this._y0=this._y1,this._y1=b}},rO.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(a,b){switch(a*=1,b*=1,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var c=(this._x0+4*this._x1+a)/6,d=(this._y0+4*this._y1+b)/6;this._line?this._context.lineTo(c,d):this._context.moveTo(c,d);break;case 3:this._point=4;default:rL(this,a,b)}this._x0=this._x1,this._x1=a,this._y0=this._y1,this._y1=b}};class rP{constructor(a,b){this._context=a,this._x=b}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line}point(a,b){switch(a*=1,b*=1,this._point){case 0:this._point=1,this._line?this._context.lineTo(a,b):this._context.moveTo(a,b);break;case 1:this._point=2;default:this._x?this._context.bezierCurveTo(this._x0=(this._x0+a)/2,this._y0,this._x0,b,a,b):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+b)/2,a,this._y0,a,b)}this._x0=a,this._y0=b}}function rQ(a){this._context=a}function rR(a){this._context=a}function rS(a){return new rR(a)}rQ.prototype={areaStart:rK,areaEnd:rK,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(a,b){a*=1,b*=1,this._point?this._context.lineTo(a,b):(this._point=1,this._context.moveTo(a,b))}};function rT(a,b,c){var d=a._x1-a._x0,e=b-a._x1,f=(a._y1-a._y0)/(d||e<0&&-0),g=(c-a._y1)/(e||d<0&&-0);return((f<0?-1:1)+(g<0?-1:1))*Math.min(Math.abs(f),Math.abs(g),.5*Math.abs((f*e+g*d)/(d+e)))||0}function rU(a,b){var c=a._x1-a._x0;return c?(3*(a._y1-a._y0)/c-b)/2:b}function rV(a,b,c){var d=a._x0,e=a._y0,f=a._x1,g=a._y1,h=(f-d)/3;a._context.bezierCurveTo(d+h,e+h*b,f-h,g-h*c,f,g)}function rW(a){this._context=a}function rX(a){this._context=new rY(a)}function rY(a){this._context=a}function rZ(a){this._context=a}function r$(a){var b,c,d=a.length-1,e=Array(d),f=Array(d),g=Array(d);for(e[0]=0,f[0]=2,g[0]=a[0]+2*a[1],b=1;b<d-1;++b)e[b]=1,f[b]=4,g[b]=4*a[b]+2*a[b+1];for(e[d-1]=2,f[d-1]=7,g[d-1]=8*a[d-1]+a[d],b=1;b<d;++b)c=e[b]/f[b-1],f[b]-=c,g[b]-=c*g[b-1];for(e[d-1]=g[d-1]/f[d-1],b=d-2;b>=0;--b)e[b]=(g[b]-e[b+1])/f[b];for(b=0,f[d-1]=(a[d]+e[d-1])/2;b<d-1;++b)f[b]=2*a[b+1]-e[b+1];return[e,f]}function r_(a,b){this._context=a,this._t=b}rR.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(a,b){switch(a*=1,b*=1,this._point){case 0:this._point=1,this._line?this._context.lineTo(a,b):this._context.moveTo(a,b);break;case 1:this._point=2;default:this._context.lineTo(a,b)}}},rW.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:rV(this,this._t0,rU(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(a,b){var c=NaN;if(b*=1,(a*=1)!==this._x1||b!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(a,b):this._context.moveTo(a,b);break;case 1:this._point=2;break;case 2:this._point=3,rV(this,rU(this,c=rT(this,a,b)),c);break;default:rV(this,this._t0,c=rT(this,a,b))}this._x0=this._x1,this._x1=a,this._y0=this._y1,this._y1=b,this._t0=c}}},(rX.prototype=Object.create(rW.prototype)).point=function(a,b){rW.prototype.point.call(this,b,a)},rY.prototype={moveTo:function(a,b){this._context.moveTo(b,a)},closePath:function(){this._context.closePath()},lineTo:function(a,b){this._context.lineTo(b,a)},bezierCurveTo:function(a,b,c,d,e,f){this._context.bezierCurveTo(b,a,d,c,f,e)}},rZ.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var a=this._x,b=this._y,c=a.length;if(c)if(this._line?this._context.lineTo(a[0],b[0]):this._context.moveTo(a[0],b[0]),2===c)this._context.lineTo(a[1],b[1]);else for(var d=r$(a),e=r$(b),f=0,g=1;g<c;++f,++g)this._context.bezierCurveTo(d[0][f],e[0][f],d[1][f],e[1][f],a[g],b[g]);(this._line||0!==this._line&&1===c)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(a,b){this._x.push(+a),this._y.push(+b)}},r_.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(a,b){switch(a*=1,b*=1,this._point){case 0:this._point=1,this._line?this._context.lineTo(a,b):this._context.moveTo(a,b);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,b),this._context.lineTo(a,b);else{var c=this._x*(1-this._t)+a*this._t;this._context.lineTo(c,this._y),this._context.lineTo(c,b)}}this._x=a,this._y=b}};let r0=Math.PI,r1=2*r0,r2=r1-1e-6;function r3(a){this._+=a[0];for(let b=1,c=a.length;b<c;++b)this._+=arguments[b]+a[b]}class r4{constructor(a){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==a?r3:function(a){let b=Math.floor(a);if(!(b>=0))throw Error(`invalid digits: ${a}`);if(b>15)return r3;let c=10**b;return function(a){this._+=a[0];for(let b=1,d=a.length;b<d;++b)this._+=Math.round(arguments[b]*c)/c+a[b]}}(a)}moveTo(a,b){this._append`M${this._x0=this._x1=+a},${this._y0=this._y1=+b}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(a,b){this._append`L${this._x1=+a},${this._y1=+b}`}quadraticCurveTo(a,b,c,d){this._append`Q${+a},${+b},${this._x1=+c},${this._y1=+d}`}bezierCurveTo(a,b,c,d,e,f){this._append`C${+a},${+b},${+c},${+d},${this._x1=+e},${this._y1=+f}`}arcTo(a,b,c,d,e){if(a*=1,b*=1,c*=1,d*=1,(e*=1)<0)throw Error(`negative radius: ${e}`);let f=this._x1,g=this._y1,h=c-a,i=d-b,j=f-a,k=g-b,l=j*j+k*k;if(null===this._x1)this._append`M${this._x1=a},${this._y1=b}`;else if(l>1e-6)if(Math.abs(k*h-i*j)>1e-6&&e){let m=c-f,n=d-g,o=h*h+i*i,p=Math.sqrt(o),q=Math.sqrt(l),r=e*Math.tan((r0-Math.acos((o+l-(m*m+n*n))/(2*p*q)))/2),s=r/q,t=r/p;Math.abs(s-1)>1e-6&&this._append`L${a+s*j},${b+s*k}`,this._append`A${e},${e},0,0,${+(k*m>j*n)},${this._x1=a+t*h},${this._y1=b+t*i}`}else this._append`L${this._x1=a},${this._y1=b}`}arc(a,b,c,d,e,f){if(a*=1,b*=1,c*=1,f=!!f,c<0)throw Error(`negative radius: ${c}`);let g=c*Math.cos(d),h=c*Math.sin(d),i=a+g,j=b+h,k=1^f,l=f?d-e:e-d;null===this._x1?this._append`M${i},${j}`:(Math.abs(this._x1-i)>1e-6||Math.abs(this._y1-j)>1e-6)&&this._append`L${i},${j}`,c&&(l<0&&(l=l%r1+r1),l>r2?this._append`A${c},${c},0,1,${k},${a-g},${b-h}A${c},${c},0,1,${k},${this._x1=i},${this._y1=j}`:l>1e-6&&this._append`A${c},${c},0,${+(l>=r0)},${k},${this._x1=a+c*Math.cos(e)},${this._y1=b+c*Math.sin(e)}`)}rect(a,b,c,d){this._append`M${this._x0=this._x1=+a},${this._y0=this._y1=+b}h${c*=1}v${+d}h${-c}Z`}toString(){return this._}}function r5(a){let b=3;return a.digits=function(c){if(!arguments.length)return b;if(null==c)b=null;else{let a=Math.floor(c);if(!(a>=0))throw RangeError(`invalid digits: ${c}`);b=a}return a},()=>new r4(b)}function r6(a){return a[0]}function r7(a){return a[1]}function r8(a,b){var c=d8(!0),d=null,e=rS,f=null,g=r5(h);function h(h){var i,j,k,l=(h=d7(h)).length,m=!1;for(null==d&&(f=e(k=g())),i=0;i<=l;++i)!(i<l&&c(j=h[i],i,h))===m&&((m=!m)?f.lineStart():f.lineEnd()),m&&f.point(+a(j,i,h),+b(j,i,h));if(k)return f=null,k+""||null}return a="function"==typeof a?a:void 0===a?r6:d8(a),b="function"==typeof b?b:void 0===b?r7:d8(b),h.x=function(b){return arguments.length?(a="function"==typeof b?b:d8(+b),h):a},h.y=function(a){return arguments.length?(b="function"==typeof a?a:d8(+a),h):b},h.defined=function(a){return arguments.length?(c="function"==typeof a?a:d8(!!a),h):c},h.curve=function(a){return arguments.length?(e=a,null!=d&&(f=e(d)),h):e},h.context=function(a){return arguments.length?(null==a?d=f=null:f=e(d=a),h):d},h}function r9(a,b,c){var d=null,e=d8(!0),f=null,g=rS,h=null,i=r5(j);function j(j){var k,l,m,n,o,p=(j=d7(j)).length,q=!1,r=Array(p),s=Array(p);for(null==f&&(h=g(o=i())),k=0;k<=p;++k){if(!(k<p&&e(n=j[k],k,j))===q)if(q=!q)l=k,h.areaStart(),h.lineStart();else{for(h.lineEnd(),h.lineStart(),m=k-1;m>=l;--m)h.point(r[m],s[m]);h.lineEnd(),h.areaEnd()}q&&(r[k]=+a(n,k,j),s[k]=+b(n,k,j),h.point(d?+d(n,k,j):r[k],c?+c(n,k,j):s[k]))}if(o)return h=null,o+""||null}function k(){return r8().defined(e).curve(g).context(f)}return a="function"==typeof a?a:void 0===a?r6:d8(+a),b="function"==typeof b?b:void 0===b?d8(0):d8(+b),c="function"==typeof c?c:void 0===c?r7:d8(+c),j.x=function(b){return arguments.length?(a="function"==typeof b?b:d8(+b),d=null,j):a},j.x0=function(b){return arguments.length?(a="function"==typeof b?b:d8(+b),j):a},j.x1=function(a){return arguments.length?(d=null==a?null:"function"==typeof a?a:d8(+a),j):d},j.y=function(a){return arguments.length?(b="function"==typeof a?a:d8(+a),c=null,j):b},j.y0=function(a){return arguments.length?(b="function"==typeof a?a:d8(+a),j):b},j.y1=function(a){return arguments.length?(c=null==a?null:"function"==typeof a?a:d8(+a),j):c},j.lineX0=j.lineY0=function(){return k().x(a).y(b)},j.lineY1=function(){return k().x(a).y(c)},j.lineX1=function(){return k().x(d).y(b)},j.defined=function(a){return arguments.length?(e="function"==typeof a?a:d8(!!a),j):e},j.curve=function(a){return arguments.length?(g=a,null!=f&&(h=g(f)),j):g},j.context=function(a){return arguments.length?(null==a?f=h=null:h=g(f=a),j):f},j}function sa(){return(sa=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function sb(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function sc(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?sb(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):sb(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}r4.prototype;var sd={curveBasisClosed:function(a){return new rN(a)},curveBasisOpen:function(a){return new rO(a)},curveBasis:function(a){return new rM(a)},curveBumpX:function(a){return new rP(a,!0)},curveBumpY:function(a){return new rP(a,!1)},curveLinearClosed:function(a){return new rQ(a)},curveLinear:rS,curveMonotoneX:function(a){return new rW(a)},curveMonotoneY:function(a){return new rX(a)},curveNatural:function(a){return new rZ(a)},curveStep:function(a){return new r_(a,.5)},curveStepAfter:function(a){return new r_(a,1)},curveStepBefore:function(a){return new r_(a,0)}},se=a=>ar(a.x)&&ar(a.y),sf=a=>null!=a.base&&se(a.base)&&se(a),sg=a=>a.x,sh=a=>a.y,si=a=>{var{className:b,points:c,path:d,pathRef:e}=a,f=d2(eN);if((!c||!c.length)&&!d)return null;var g={type:a.type,points:a.points,baseLine:a.baseLine,layout:a.layout||f,connectNulls:a.connectNulls},h=c&&c.length?(a=>{var{type:b="linear",points:c=[],baseLine:d,layout:e,connectNulls:f=!1}=a,g=((a,b)=>{if("function"==typeof a)return a;var c="curve".concat(af(a));if(("curveMonotone"===c||"curveBump"===c)&&b){var d=sd["".concat(c).concat("vertical"===b?"Y":"X")];if(d)return d}return sd[c]||rS})(b,e),h=f?c.filter(se):c;if(Array.isArray(d)){var i=c.map((a,b)=>sc(sc({},a),{},{base:d[b]}));return("vertical"===e?r9().y(sh).x1(sg).x0(a=>a.base.x):r9().x(sg).y1(sh).y0(a=>a.base.y)).defined(sf).curve(g)(f?i.filter(sf):i)}return("vertical"===e&&Z(d)?r9().y(sh).x1(sg).x0(d):Z(d)?r9().x(sg).y1(sh).y0(d):r8().x(sg).y(sh)).defined(se).curve(g)(h)})(g):d;return M.createElement("path",sa({},oX(a),qy(a),{className:P("recharts-curve",b),d:null===h?void 0:h,ref:e}))},sj=["x","y","top","left","width","height","className"];function sk(){return(sk=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function sl(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}var sm=a=>{var{x:b=0,y:c=0,top:d=0,left:e=0,width:f=0,height:g=0,className:h}=a,i=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?sl(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):sl(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({x:b,y:c,top:d,left:e,width:f,height:g},function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,sj));return Z(b)&&Z(c)&&Z(f)&&Z(g)&&Z(d)&&Z(e)?M.createElement("path",sk({},oZ(i),{className:P("recharts-cross",h),d:"M".concat(b,",").concat(d,"v").concat(g,"M").concat(e,",").concat(c,"h").concat(f)})):null},sn=(a,b,c)=>a.map(a=>"".concat(a.replace(/([A-Z])/g,a=>"-".concat(a.toLowerCase()))," ").concat(b,"ms ").concat(c)).join(",");class so{setTimeout(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=performance.now(),d=null,e=f=>{f-c>=b?a(f):"function"==typeof requestAnimationFrame&&(d=requestAnimationFrame(e))};return d=requestAnimationFrame(e),()=>{null!=d&&cancelAnimationFrame(d)}}}var sp=(0,M.createContext)(function(){var a,b,c,d,e;return a=new so,b=()=>null,c=!1,d=null,e=f=>{if(!c){if(Array.isArray(f)){if(!f.length)return;var[g,...h]=f;if("number"==typeof g){d=a.setTimeout(e.bind(null,h),g);return}e(g),d=a.setTimeout(e.bind(null,h));return}"string"==typeof f&&b(f),"object"==typeof f&&b(f),"function"==typeof f&&f()}},{stop:()=>{c=!0},start:a=>{c=!1,d&&(d(),d=null),e(a)},subscribe:a=>(b=a,()=>{b=()=>null}),getTimeoutController:()=>a}}),sq={begin:0,duration:1e3,easing:"ease",isActive:!0,canBegin:!0,onAnimationEnd:()=>{},onAnimationStart:()=>{}},sr={t:0},ss={t:1};function st(a){var b,c,d,e=pu(a,sq),{isActive:f,canBegin:g,duration:h,easing:i,begin:j,onAnimationEnd:k,onAnimationStart:l,children:m}=e,n=rE();b=e.animationId,c=e.animationManager,d=(0,M.useContext)(sp),(0,M.useMemo)(()=>null!=c?c:d(b),[b,c,d]);var[o,p]=(0,M.useState)(("auto"===f?oq||n:!f)?ss:sr);return(0,M.useRef)(null),m(o.t)}function su(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"animation-",c=(0,M.useRef)(aa(b)),d=(0,M.useRef)(a);return d.current!==a&&(c.current=aa(b),d.current=a),c.current}var sv=["radius"],sw=["radius"];function sx(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function sy(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?sx(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):sx(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function sz(){return(sz=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function sA(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function sB(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var sC=(a,b,c,d,e)=>{var f=U(c),g=U(d),h=Math.min(Math.abs(f)/2,Math.abs(g)/2),i=g>=0?1:-1,j=f>=0?1:-1,k=+(g>=0&&f>=0||g<0&&f<0);if(h>0&&Array.isArray(e)){for(var l=[0,0,0,0],m=0;m<4;m++){var x,y,z=null!=(y=e[m])?y:0;l[m]=z>h?h:z}x=V(n||(n=sB(["M",",",""])),a,b+i*l[0]),l[0]>0&&(x+=V(o||(o=sB(["A ",",",",0,0,",",",",",""])),l[0],l[0],k,a+j*l[0],b)),x+=V(p||(p=sB(["L ",",",""])),a+c-j*l[1],b),l[1]>0&&(x+=V(q||(q=sB(["A ",",",",0,0,",",\n        ",",",""])),l[1],l[1],k,a+c,b+i*l[1])),x+=V(r||(r=sB(["L ",",",""])),a+c,b+d-i*l[2]),l[2]>0&&(x+=V(s||(s=sB(["A ",",",",0,0,",",\n        ",",",""])),l[2],l[2],k,a+c-j*l[2],b+d)),x+=V(t||(t=sB(["L ",",",""])),a+j*l[3],b+d),l[3]>0&&(x+=V(u||(u=sB(["A ",",",",0,0,",",\n        ",",",""])),l[3],l[3],k,a,b+d-i*l[3])),x+="Z"}else if(h>0&&e===+e&&e>0){var A=Math.min(h,e);x=V(v||(v=sB(["M ",",","\n            A ",",",",0,0,",",",",","\n            L ",",","\n            A ",",",",0,0,",",",",","\n            L ",",","\n            A ",",",",0,0,",",",",","\n            L ",",","\n            A ",",",",0,0,",",",","," Z"])),a,b+i*A,A,A,k,a+j*A,b,a+c-j*A,b,A,A,k,a+c,b+i*A,a+c,b+d-i*A,A,A,k,a+c-j*A,b+d,a+j*A,b+d,A,A,k,a,b+d-i*A)}else x=V(w||(w=sB(["M ",","," h "," v "," h "," Z"])),a,b,c,d,-c);return x},sD={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},sE=a=>{var b=pu(a,sD),c=(0,M.useRef)(null),[d,e]=(0,M.useState)(-1);(0,M.useEffect)(()=>{if(c.current&&c.current.getTotalLength)try{var a=c.current.getTotalLength();a&&e(a)}catch(a){}},[]);var{x:f,y:g,width:h,height:i,radius:j,className:k}=b,{animationEasing:l,animationDuration:m,animationBegin:n,isAnimationActive:o,isUpdateAnimationActive:p}=b,q=(0,M.useRef)(h),r=(0,M.useRef)(i),s=(0,M.useRef)(f),t=(0,M.useRef)(g),u=su((0,M.useMemo)(()=>({x:f,y:g,width:h,height:i,radius:j}),[f,g,h,i,j]),"rectangle-");if(f!==+f||g!==+g||h!==+h||i!==+i||0===h||0===i)return null;var v=P("recharts-rectangle",k);if(!p){var w=oZ(b),{radius:x}=w,y=sA(w,sv);return M.createElement("path",sz({},y,{x:U(f),y:U(g),width:U(h),height:U(i),radius:"number"==typeof j?j:void 0,className:v,d:sC(f,g,h,i,j)}))}var z=q.current,A=r.current,B=s.current,C=t.current,D="0px ".concat(-1===d?1:d,"px"),E="".concat(d,"px ").concat(d,"px"),F=sn(["strokeDasharray"],m,"string"==typeof l?l:sD.animationEasing);return M.createElement(st,{animationId:u,key:u,canBegin:d>0,duration:m,easing:l,isActive:p,begin:n},a=>{var d,e=ad(z,h,a),k=ad(A,i,a),l=ad(B,f,a),m=ad(C,g,a);c.current&&(q.current=e,r.current=k,s.current=l,t.current=m),d=o?a>0?{transition:F,strokeDasharray:E}:{strokeDasharray:D}:{strokeDasharray:E};var n=oZ(b),{radius:p}=n,u=sA(n,sw);return M.createElement("path",sz({},u,{radius:"number"==typeof j?j:void 0,className:v,d:sC(l,m,e,k,j),ref:c,style:sy(sy({},d),b.style)}))})};function sF(a){var{cx:b,cy:c,radius:d,startAngle:e,endAngle:f}=a;return{points:[fO(b,c,d,e),fO(b,c,d,f)],cx:b,cy:c,radius:d,startAngle:e,endAngle:f}}function sG(){return(sG=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function sH(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var sI=a=>{var{cx:b,cy:c,radius:d,angle:e,sign:f,isExternal:g,cornerRadius:h,cornerIsExternal:i}=a,j=h*(g?1:-1)+d,k=Math.asin(h/j)/fN,l=i?e:e+f*k,m=fO(b,c,j,l);return{center:m,circleTangency:fO(b,c,d,l),lineTangency:fO(b,c,j*Math.cos(k*fN),i?e-f*k:e),theta:k}},sJ=a=>{var{cx:b,cy:c,innerRadius:d,outerRadius:e,startAngle:f,endAngle:g}=a,h=W(g-f)*Math.min(Math.abs(g-f),359.999),i=f+h,j=fO(b,c,e,f),k=fO(b,c,e,i),l=V(x||(x=sH(["M ",",","\n    A ",",",",0,\n    ",",",",\n    ",",","\n  "])),j.x,j.y,e,e,+(Math.abs(h)>180),+(f>i),k.x,k.y);if(d>0){var m=fO(b,c,d,f),n=fO(b,c,d,i);l+=V(y||(y=sH(["L ",",","\n            A ",",",",0,\n            ",",",",\n            ",","," Z"])),n.x,n.y,d,d,+(Math.abs(h)>180),+(f<=i),m.x,m.y)}else l+=V(z||(z=sH(["L ",","," Z"])),b,c);return l},sK={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},sL=a=>{var b,c=pu(a,sK),{cx:d,cy:e,innerRadius:f,outerRadius:g,cornerRadius:h,forceCornerRadius:i,cornerIsExternal:j,startAngle:k,endAngle:l,className:m}=c;if(g<f||k===l)return null;var n=P("recharts-sector",m),o=g-f,p=ab(h,o,0,!0);return b=p>0&&360>Math.abs(k-l)?(a=>{var{cx:b,cy:c,innerRadius:d,outerRadius:e,cornerRadius:f,forceCornerRadius:g,cornerIsExternal:h,startAngle:i,endAngle:j}=a,k=W(j-i),{circleTangency:l,lineTangency:m,theta:n}=sI({cx:b,cy:c,radius:e,angle:i,sign:k,cornerRadius:f,cornerIsExternal:h}),{circleTangency:o,lineTangency:p,theta:q}=sI({cx:b,cy:c,radius:e,angle:j,sign:-k,cornerRadius:f,cornerIsExternal:h}),r=h?Math.abs(i-j):Math.abs(i-j)-n-q;if(r<0)return g?V(A||(A=sH(["M ",",","\n        a",",",",0,0,1,",",0\n        a",",",",0,0,1,",",0\n      "])),m.x,m.y,f,f,2*f,f,f,-(2*f)):sJ({cx:b,cy:c,innerRadius:d,outerRadius:e,startAngle:i,endAngle:j});var s=V(B||(B=sH(["M ",",","\n    A",",",",0,0,",",",",","\n    A",",",",0,",",",",",",","\n    A",",",",0,0,",",",",","\n  "])),m.x,m.y,f,f,+(k<0),l.x,l.y,e,e,+(r>180),+(k<0),o.x,o.y,f,f,+(k<0),p.x,p.y);if(d>0){var{circleTangency:t,lineTangency:u,theta:v}=sI({cx:b,cy:c,radius:d,angle:i,sign:k,isExternal:!0,cornerRadius:f,cornerIsExternal:h}),{circleTangency:w,lineTangency:x,theta:y}=sI({cx:b,cy:c,radius:d,angle:j,sign:-k,isExternal:!0,cornerRadius:f,cornerIsExternal:h}),z=h?Math.abs(i-j):Math.abs(i-j)-v-y;if(z<0&&0===f)return"".concat(s,"L").concat(b,",").concat(c,"Z");s+=V(C||(C=sH(["L",",","\n      A",",",",0,0,",",",",","\n      A",",",",0,",",",",",",","\n      A",",",",0,0,",",",",","Z"])),x.x,x.y,f,f,+(k<0),w.x,w.y,d,d,+(z>180),+(k>0),t.x,t.y,f,f,+(k<0),u.x,u.y)}else s+=V(D||(D=sH(["L",",","Z"])),b,c);return s})({cx:d,cy:e,innerRadius:f,outerRadius:g,cornerRadius:Math.min(p,o/2),forceCornerRadius:i,cornerIsExternal:j,startAngle:k,endAngle:l}):sJ({cx:d,cy:e,innerRadius:f,outerRadius:g,startAngle:k,endAngle:l}),M.createElement("path",sG({},oZ(c),{className:n,d:b}))};function sM(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function sN(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?sM(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):sM(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function sO(){return(sO=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function sP(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function sQ(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?sP(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):sP(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function sR(a){var{cursor:b,cursorComp:c,cursorProps:d}=a;return(0,M.isValidElement)(b)?(0,M.cloneElement)(b,d):(0,M.createElement)(c,d)}function sS(a){var b,c,d,e,f,{coordinate:g,payload:h,index:i,offset:j,tooltipAxisBandSize:k,layout:l,cursor:m,tooltipEventType:n,chartName:o}=a;if(!m||!g||"ScatterChart"!==o&&"axis"!==n)return null;if("ScatterChart"===o)d=g,e=sm,f=fQ.cursorLine;else if("BarChart"===o)b=k/2,d={stroke:"none",fill:"#ccc",x:"horizontal"===l?g.x-b:j.left+.5,y:"horizontal"===l?j.top+.5:g.y-b,width:"horizontal"===l?k:j.width-1,height:"horizontal"===l?j.height-1:k},e=sE,f=fQ.cursorRectangle;else if("radial"===l&&qx(g)){var{cx:p,cy:q,radius:r,startAngle:s,endAngle:t}=sF(g);d={cx:p,cy:q,startAngle:s,endAngle:t,innerRadius:r,outerRadius:r},e=sL,f=fQ.cursorLine}else d={points:function(a,b,c){if("horizontal"===a)return[{x:b.x,y:c.top},{x:b.x,y:c.top+c.height}];if("vertical"===a)return[{x:c.left,y:b.y},{x:c.left+c.width,y:b.y}];if(qx(b)){if("centric"===a){var{cx:d,cy:e,innerRadius:f,outerRadius:g,angle:h}=b,i=fO(d,e,f,h),j=fO(d,e,g,h);return[{x:i.x,y:i.y},{x:j.x,y:j.y}]}return sF(b)}}(l,g,j)},e=si,f=fQ.cursorLine;var u="object"==typeof m&&"className"in m?m.className:void 0,v=sQ(sQ(sQ(sQ({stroke:"#ccc",pointerEvents:"none"},j),d),oY(m)),{},{payload:h,payloadIndex:i,className:P("recharts-tooltip-cursor",u)});return M.createElement(qf,{zIndex:null!=(c=a.zIndex)?c:f},M.createElement(sR,{cursor:m,cursorComp:e,cursorProps:v}))}function sT(a){var b,c,d,e=(b=d2(ky),c=d2(mx),d=d2(mu),b&&d?ep(sN(sN({},b),{},{scale:d}),c):ep(void 0,c)),f=eM(),g=d2(eN),h=d2(fH);return null==e||null==f||null==g||null==h?null:M.createElement(sS,sO({},a,{offset:f,layout:g,tooltipAxisBandSize:e,chartName:h}))}function sU(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function sV(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?sU(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):sU(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function sW(a){return a.dataKey}var sX=[],sY={allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",axisId:0,contentStyle:{},cursor:!0,filterNull:!0,includeHidden:!1,isAnimationActive:"auto",itemSorter:"name",itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,wrapperStyle:{}};function sZ(a){var b,c,d,e,f=pu(a,sY),{active:g,allowEscapeViewBox:h,animationDuration:i,animationEasing:j,content:k,filterNull:l,isAnimationActive:m,offset:n,payloadUniqBy:o,position:p,reverseDirection:q,useTranslate3d:r,wrapperStyle:s,cursor:t,shared:u,trigger:v,defaultIndex:w,portal:x,axisId:y}=f;d$();var z="number"==typeof w?String(w):w,A=eK(),B=oR(),C=d2(a=>lM(a,u)),{activeIndex:D,isActive:E}=null!=(d=d2(a=>m$(a,C,v,z)))?d:{},F=d2(a=>mZ(a,C,v,z)),G=d2(a=>mY(a,C,v,z)),H=d2(a=>mX(a,C,v,z)),I=(0,M.useContext)(pc),J=null!=(e=null!=g?g:E)&&e,[K,L]=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],[b,c]=(0,M.useState)({height:0,left:0,top:0,width:0}),d=(0,M.useCallback)(a=>{if(null!=a){var d=a.getBoundingClientRect(),e={height:d.height,left:d.left,top:d.top,width:d.width};(Math.abs(e.height-b.height)>1||Math.abs(e.left-b.left)>1||Math.abs(e.top-b.top)>1||Math.abs(e.width-b.width)>1)&&c({height:e.height,left:e.left,top:e.top,width:e.width})}},[b.width,b.height,b.top,b.left,...a]);return[b,d]}([F,J]),N="axis"===C?G:void 0;d2(a=>((a,b,c)=>{if(null!=b){var d=lV(a);return"axis"===b?"hover"===c?d.axisInteraction.hover.dataKey:d.axisInteraction.click.dataKey:"hover"===c?d.itemInteraction.hover.dataKey:d.itemInteraction.click.dataKey}})(a,C,v)),d2(mF),d2(fK),d2(fI),d2(fJ),null==(b=d2(pb))||b.sourceViewBox,eK();var O=null!=x?x:I;if(null==O||null==A||null==C)return null;var P=null!=F?F:sX;J||(P=sX),l&&P.length&&(c=P.filter(a=>null!=a.value&&(!0!==a.hide||f.includeHidden)),P=!0===o?rJ()(c,sW):"function"==typeof o?rJ()(c,o):c);var Q=P.length>0,R=sV(sV({},f),{},{payload:P,label:N,active:J,activeIndex:D,coordinate:H,accessibilityLayer:B}),S=M.createElement(rH,{allowEscapeViewBox:h,animationDuration:i,animationEasing:j,isAnimationActive:m,active:J,coordinate:H,hasPayload:Q,offset:n,position:p,reverseDirection:q,useTranslate3d:r,viewBox:A,wrapperStyle:s,lastBoundingBox:K,innerRef:L,hasPortalFromProps:!!x},M.isValidElement(k)?M.cloneElement(k,R):"function"==typeof k?M.createElement(k,R):M.createElement(rA,R));return M.createElement(M.Fragment,null,(0,qe.createPortal)(S,O),J&&M.createElement(sT,{cursor:t,tooltipEventType:C,coordinate:H,payload:P,index:D}))}var s$=a=>null;s$.displayName="Cell";var s_=["valueAccessor"],s0=["dataKey","clockWise","id","textBreakAll","zIndex"];function s1(){return(s1=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function s2(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}var s3=a=>{var b=Array.isArray(a.value)?a.value[a.value.length-1]:a.value;if(null==b||"string"==typeof b||"number"==typeof b||"boolean"==typeof b)return b},s4=(0,M.createContext)(void 0),s5=s4.Provider,s6=(0,M.createContext)(void 0),s7=s6.Provider;function s8(a){var{valueAccessor:b=s3}=a,c=s2(a,s_),{dataKey:d,clockWise:e,id:f,textBreakAll:g,zIndex:h}=c,i=s2(c,s0),j=(0,M.useContext)(s4),k=(0,M.useContext)(s6),l=j||k;return l&&l.length?M.createElement(qf,{zIndex:null!=h?h:fQ.label},M.createElement(pR,{className:"recharts-label-list"},l.map((a,e)=>{var h,j=null==d?b(a,e):ef(a.payload,d),k=null==f?{}:{id:"".concat(f,"-").concat(e)};return M.createElement(qv,s1({key:"label-".concat(e)},oZ(a),i,k,{fill:null!=(h=c.fill)?h:a.fill,parentViewBox:a.parentViewBox,value:j,textBreakAll:g,viewBox:a.viewBox,index:e,zIndex:0}))}))):null}function s9(a){var{label:b}=a;return b?!0===b?M.createElement(s8,{key:"labelList-implicit"}):M.isValidElement(b)||qs(b)?M.createElement(s8,{key:"labelList-implicit",content:b}):"object"==typeof b?M.createElement(s8,s1({key:"labelList-implicit"},b,{type:String(b.type)})):null:null}s8.displayName="LabelList";var ta=c(20274),tb=a=>"string"==typeof a?a:a?a.displayName||a.name||"Component":"",tc=null,td=null,te=a=>{if(a===tc&&Array.isArray(td))return td;var b=[];return M.Children.forEach(a,a=>{null!=a&&((0,ta.isFragment)(a)?b=b.concat(te(a.props.children)):b.push(a))}),td=b,tc=a,b};function tf(a,b){var c=[],d=[];return d=Array.isArray(b)?b.map(a=>tb(a)):[tb(b)],te(a).forEach(a=>{var b=T()(a,"type.displayName")||T()(a,"type.name");b&&-1!==d.indexOf(b)&&c.push(a)}),c}var tg=a=>!a||"object"!=typeof a||!("clipDot"in a)||!!a.clipDot,th=c(7725),ti=c.n(th);function tj(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function tk(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?tj(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):tj(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function tl(){return(tl=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function tm(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}var tn=(a,b,c,d,e)=>{var f=c-d;return V(E||(E=tm(["M ",",",""])),a,b)+V(F||(F=tm(["L ",",",""])),a+c,b)+V(G||(G=tm(["L ",",",""])),a+c-f/2,b+e)+V(H||(H=tm(["L ",",",""])),a+c-f/2-d,b+e)+V(I||(I=tm(["L ",","," Z"])),a,b)},to={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},tp=a=>{var b=pu(a,to),{x:c,y:d,upperWidth:e,lowerWidth:f,height:g,className:h}=b,{animationEasing:i,animationDuration:j,animationBegin:k,isUpdateAnimationActive:l}=b,m=(0,M.useRef)(null),[n,o]=(0,M.useState)(-1),p=(0,M.useRef)(e),q=(0,M.useRef)(f),r=(0,M.useRef)(g),s=(0,M.useRef)(c),t=(0,M.useRef)(d),u=su(a,"trapezoid-");if((0,M.useEffect)(()=>{if(m.current&&m.current.getTotalLength)try{var a=m.current.getTotalLength();a&&o(a)}catch(a){}},[]),c!==+c||d!==+d||e!==+e||f!==+f||g!==+g||0===e&&0===f||0===g)return null;var v=P("recharts-trapezoid",h);if(!l)return M.createElement("g",null,M.createElement("path",tl({},oZ(b),{className:v,d:tn(c,d,e,f,g)})));var w=p.current,x=q.current,y=r.current,z=s.current,A=t.current,B="0px ".concat(-1===n?1:n,"px"),C="".concat(n,"px ").concat(n,"px"),D=sn(["strokeDasharray"],j,i);return M.createElement(st,{animationId:u,key:u,canBegin:n>0,duration:j,easing:i,isActive:l,begin:k},a=>{var h=ad(w,e,a),i=ad(x,f,a),j=ad(y,g,a),k=ad(z,c,a),l=ad(A,d,a);m.current&&(p.current=h,q.current=i,r.current=j,s.current=k,t.current=l);var n=a>0?{transition:D,strokeDasharray:C}:{strokeDasharray:B};return M.createElement("path",tl({},oZ(b),{className:v,d:tn(k,l,h,i,j),ref:m,style:tk(tk({},n),b.style)}))})};let tq=Math.cos,tr=Math.sin,ts=Math.sqrt,tt=Math.PI,tu=2*tt,tv={draw(a,b){let c=ts(b/tt);a.moveTo(c,0),a.arc(0,0,c,0,tu)}},tw=ts(1/3),tx=2*tw,ty=tr(tt/10)/tr(7*tt/10),tz=tr(tu/10)*ty,tA=-tq(tu/10)*ty,tB=ts(3),tC=ts(3)/2,tD=1/ts(12),tE=(tD/2+1)*3;ts(3),ts(3);var tF=["type","size","sizeType"];function tG(){return(tG=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function tH(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function tI(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?tH(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):tH(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var tJ={symbolCircle:tv,symbolCross:{draw(a,b){let c=ts(b/5)/2;a.moveTo(-3*c,-c),a.lineTo(-c,-c),a.lineTo(-c,-3*c),a.lineTo(c,-3*c),a.lineTo(c,-c),a.lineTo(3*c,-c),a.lineTo(3*c,c),a.lineTo(c,c),a.lineTo(c,3*c),a.lineTo(-c,3*c),a.lineTo(-c,c),a.lineTo(-3*c,c),a.closePath()}},symbolDiamond:{draw(a,b){let c=ts(b/tx),d=c*tw;a.moveTo(0,-c),a.lineTo(d,0),a.lineTo(0,c),a.lineTo(-d,0),a.closePath()}},symbolSquare:{draw(a,b){let c=ts(b),d=-c/2;a.rect(d,d,c,c)}},symbolStar:{draw(a,b){let c=ts(.8908130915292852*b),d=tz*c,e=tA*c;a.moveTo(0,-c),a.lineTo(d,e);for(let b=1;b<5;++b){let f=tu*b/5,g=tq(f),h=tr(f);a.lineTo(h*c,-g*c),a.lineTo(g*d-h*e,h*d+g*e)}a.closePath()}},symbolTriangle:{draw(a,b){let c=-ts(b/(3*tB));a.moveTo(0,2*c),a.lineTo(-tB*c,-c),a.lineTo(tB*c,-c),a.closePath()}},symbolWye:{draw(a,b){let c=ts(b/tE),d=c/2,e=c*tD,f=c*tD+c,g=-d;a.moveTo(d,e),a.lineTo(d,f),a.lineTo(g,f),a.lineTo(-.5*d-tC*e,tC*d+-.5*e),a.lineTo(-.5*d-tC*f,tC*d+-.5*f),a.lineTo(-.5*g-tC*f,tC*g+-.5*f),a.lineTo(-.5*d+tC*e,-.5*e-tC*d),a.lineTo(-.5*d+tC*f,-.5*f-tC*d),a.lineTo(-.5*g+tC*f,-.5*f-tC*g),a.closePath()}}},tK=Math.PI/180,tL=a=>{var{type:b="circle",size:c=64,sizeType:d="area"}=a,e=tI(tI({},function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,tF)),{},{type:b,size:c,sizeType:d}),f="circle";"string"==typeof b&&(f=b);var{className:g,cx:h,cy:i}=e,j=oZ(e);return Z(h)&&Z(i)&&Z(c)?M.createElement("path",tG({},j,{className:P("recharts-symbols",g),transform:"translate(".concat(h,", ").concat(i,")"),d:(()=>{var a,b=(a=f,tJ["symbol".concat(af(a))]||tv),e=(function(a,b){let c=null,d=r5(e);function e(){let e;if(c||(c=e=d()),a.apply(this,arguments).draw(c,+b.apply(this,arguments)),e)return c=null,e+""||null}return a="function"==typeof a?a:d8(a||tv),b="function"==typeof b?b:d8(void 0===b?64:+b),e.type=function(b){return arguments.length?(a="function"==typeof b?b:d8(b),e):a},e.size=function(a){return arguments.length?(b="function"==typeof a?a:d8(+a),e):b},e.context=function(a){return arguments.length?(c=null==a?null:a,e):c},e})().type(b).size(((a,b,c)=>{if("area"===b)return a;switch(c){case"cross":return 5*a*a/9;case"diamond":return .5*a*a/Math.sqrt(3);case"square":return a*a;case"star":var d=18*tK;return 1.25*a*a*(Math.tan(d)-Math.tan(2*d)*Math.tan(d)**2);case"triangle":return Math.sqrt(3)*a*a/4;case"wye":return(21-10*Math.sqrt(3))*a*a/8;default:return Math.PI*a*a/4}})(c,d,f))();if(null!==e)return e})()})):null};tL.registerSymbol=(a,b)=>{tJ["symbol".concat(af(a))]=b};var tM=["option","shapeType","activeClassName","inActiveClassName"];function tN(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function tO(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?tN(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):tN(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function tP(a){var{shapeType:b,elementProps:c}=a;switch(b){case"rectangle":return M.createElement(sE,c);case"trapezoid":return M.createElement(tp,c);case"sector":return M.createElement(sL,c);case"symbols":if("symbols"===b)return M.createElement(tL,c);break;case"curve":return M.createElement(si,c);default:return null}}function tQ(a){var b,{option:c,shapeType:d,activeClassName:e="recharts-active-shape",inActiveClassName:f="recharts-shape"}=a,g=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,tM);if((0,M.isValidElement)(c))b=(0,M.cloneElement)(c,tO(tO({},g),(0,M.isValidElement)(c)?c.props:c));else if("function"==typeof c)b=c(g,g.index);else if(ti()(c)&&"boolean"!=typeof c){var h=tO(tO({},g),c);b=M.createElement(tP,{shapeType:d,elementProps:h})}else b=M.createElement(tP,{shapeType:d,elementProps:g});return g.isActive?M.createElement(pR,{className:e},b):M.createElement(pR,{className:f},b)}function tR(){return(tR=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function tS(a){return M.createElement(tQ,tR({shapeType:"rectangle",activeClassName:"recharts-active-bar",inActiveClassName:"recharts-inactive-bar"},a))}var tT=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(c,d)=>{if(Z(a))return a;var e=Z(c)||null==c;return e?a(c,d):(e||function(a,b){if(!a)throw Error("Invariant failed")}(!1,"minPointSize callback function received a value with type of ".concat(typeof c,". Currently only numbers or null/undefined are supported.")),b)}},tU=(a,b,c)=>{var d=d$();return(e,f)=>g=>{null==a||a(e,f,g),d(dj({activeIndex:String(f),activeDataKey:b,activeCoordinate:e.tooltipPosition,activeGraphicalItemId:c}))}},tV=a=>{var b=d$();return(c,d)=>e=>{null==a||a(c,d,e),b(dk())}},tW=(a,b,c)=>{var d=d$();return(e,f)=>g=>{null==a||a(e,f,g),d(dm({activeIndex:String(f),activeDataKey:b,activeCoordinate:e.tooltipPosition,activeGraphicalItemId:c}))}};function tX(a){var{tooltipEntrySettings:b}=a;return d$(),eG(),(0,M.useRef)(null),null}var tY=["children"],tZ=(0,M.createContext)({data:[],xAxisId:"xAxis-0",yAxisId:"yAxis-0",dataPointFormatter:()=>({x:0,y:0,value:0}),errorBarOffset:0});function t$(a){var{children:b}=a,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,tY);return M.createElement(tZ.Provider,{value:c},b)}function t_(a,b){var c,d,e=d2(b=>j3(b,a)),f=d2(a=>j6(a,b)),g=null!=(c=null==e?void 0:e.allowDataOverflow)?c:j1.allowDataOverflow,h=null!=(d=null==f?void 0:f.allowDataOverflow)?d:j4.allowDataOverflow;return{needClip:g||h,needClipX:g,needClipY:h}}function t0(a){var{xAxisId:b,yAxisId:c,clipPathId:d}=a,e=d2(po),{needClipX:f,needClipY:g,needClip:h}=t_(b,c);if(!h||!e)return null;var{x:i,y:j,width:k,height:l}=e;return M.createElement("clipPath",{id:"clipPath-".concat(d)},M.createElement("rect",{x:f?i:i-k/2,y:g?j:j-l/2,width:f?k:2*k,height:g?l:2*l}))}var t1=(a,b,c)=>{var d=null!=c?c:a;if(null!=d)return ab(d,b,0)};function t2(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function t3(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?t2(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):t2(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function t4(a,b){var c,d;return null!=(c=null==(d=a.graphicalItems.cartesianItems.find(a=>a.id===b))?void 0:d.xAxisId)?c:0}function t5(a,b){var c,d;return null!=(c=null==(d=a.graphicalItems.cartesianItems.find(a=>a.id===b))?void 0:d.yAxisId)?c:0}var t6=dV([kd,(a,b)=>b],(a,b)=>a.filter(a=>"bar"===a.type).find(a=>a.id===b)),t7=dV([t6],a=>null==a?void 0:a.maxBarSize),t8=dV([eN,kd,t4,t5,(a,b,c)=>c],(a,b,c,d,e)=>b.filter(b=>"horizontal"===a?b.xAxisId===c:b.yAxisId===d).filter(a=>a.isPanorama===e).filter(a=>!1===a.hide).filter(a=>"bar"===a.type)),t9=dV([t8,a=>a.rootProps.barSize,(a,b)=>{var c=eN(a),d=t4(a,b),e=t5(a,b);if(null!=d&&null!=e)return"horizontal"===c?lz(a,"xAxis",d):lz(a,"yAxis",e)}],(a,b,c)=>{var d=a.filter(ga),e=a.filter(a=>null==a.stackId);return[...Object.entries(d.reduce((a,b)=>{var c=a[b.stackId];return null==c&&(c=[]),c.push(b),a[b.stackId]=c,a},{})).map(a=>{var d,[e,f]=a;return{stackId:e,dataKeys:f.map(a=>a.dataKey),barSize:t1(b,c,null==(d=f[0])?void 0:d.barSize)}}),...e.map(a=>({stackId:void 0,dataKeys:[a.dataKey].filter(a=>null!=a),barSize:t1(b,c,a.barSize)}))]}),ua=(a,b,c)=>{var d,e,f=eN(a),g=t4(a,b),h=t5(a,b);if(null!=g&&null!=h)return"horizontal"===f?(d=lF(a,"xAxis",g,c),e=lE(a,"xAxis",g,c)):(d=lF(a,"yAxis",h,c),e=lE(a,"yAxis",h,c)),ep(d,e)},ub=dV([t9,fD,a=>a.rootProps.barGap,fE,(a,b,c)=>{var d,e,f,g,h=t6(a,b);if(null==h)return 0;var i=t4(a,b),j=t5(a,b);if(null==i||null==j)return 0;var k=eN(a),l=fD(a),{maxBarSize:m}=h;return"horizontal"===k?(f=lF(a,"xAxis",i,c),g=lE(a,"xAxis",i,c)):(f=lF(a,"yAxis",j,c),g=lE(a,"yAxis",j,c)),null!=(d=null!=(e=ep(f,g,!0))?e:null==m?l:m)?d:0},ua,t7],(a,b,c,d,e,f,g)=>{var h=function(a,b,c,d,e){var f,g,h=d.length;if(!(h<1)){var i=ab(a,c,0,!0),j=[];if(ar(null==(f=d[0])?void 0:f.barSize)){var k=!1,l=c/h,m=d.reduce((a,b)=>a+(b.barSize||0),0);(m+=(h-1)*i)>=c&&(m-=(h-1)*i,i=0),m>=c&&l>0&&(k=!0,l*=.9,m=h*l);var n={offset:((c-m)/2|0)-i,size:0};g=d.reduce((a,b)=>{var c,d={stackId:b.stackId,dataKeys:b.dataKeys,position:{offset:n.offset+n.size+i,size:k?l:null!=(c=b.barSize)?c:0}},e=[...a,d];return n=d.position,e},j)}else{var o=ab(b,c,0,!0);c-2*o-(h-1)*i<=0&&(i=0);var p=(c-2*o-(h-1)*i)/h;p>1&&(p>>=0);var q=ar(e)?Math.min(p,e):p;g=d.reduce((a,b,c)=>[...a,{stackId:b.stackId,dataKeys:b.dataKeys,position:{offset:o+(p+i)*c+(p-q)/2,size:q}}],j)}return g}}(c,d,e!==f?e:f,a,null==g?b:g);return e!==f&&null!=h&&(h=h.map(a=>t3(t3({},a),{},{position:t3(t3({},a.position),{},{offset:a.position.offset-e/2})}))),h}),uc=dV([ub,t6],(a,b)=>{if(null!=a&&null!=b){var c=a.find(a=>a.stackId===b.stackId&&null!=b.dataKey&&a.dataKeys.includes(b.dataKey));if(null!=c)return c.position}}),ud=dV([(a,b,c)=>{var d=eN(a),e=t4(a,b),f=t5(a,b);if(null!=e&&null!=f)return"horizontal"===d?kC(a,"yAxis",f,c):kC(a,"xAxis",e,c)},t6],(a,b)=>{var c=f8(b);if(!a||null==c||null==b)return;var{stackId:d}=b;if(null!=d){var e=a[d];if(e){var{stackedData:f}=e;if(f)return f.find(a=>a.key===c)}}}),ue=dV([eC,eE,(a,b,c)=>{var d=t4(a,b);if(null!=d)return lF(a,"xAxis",d,c)},(a,b,c)=>{var d=t5(a,b);if(null!=d)return lF(a,"yAxis",d,c)},(a,b,c)=>{var d=t4(a,b);if(null!=d)return lE(a,"xAxis",d,c)},(a,b,c)=>{var d=t5(a,b);if(null!=d)return lE(a,"yAxis",d,c)},uc,eN,eW,ua,ud,t6,(a,b,c,d)=>d],(a,b,c,d,e,f,g,h,i,j,k,l,m)=>{var n,{chartData:o,dataStartIndex:p,dataEndIndex:q}=i;if(null!=l&&null!=g&&null!=b&&("horizontal"===h||"vertical"===h)&&null!=c&&null!=d&&null!=e&&null!=f&&null!=j){var{data:r}=l;if(null!=(n=null!=r&&r.length>0?r:null==o?void 0:o.slice(p,q+1)))return function(a){var{layout:b,barSettings:{dataKey:c,minPointSize:d,hasCustomShape:e},pos:f,bandSize:g,xAxis:h,yAxis:i,xAxisTicks:j,yAxisTicks:k,stackedData:l,displayedData:m,offset:n,cells:o,parentViewBox:p,dataStartIndex:q}=a,r="horizontal"===b?i:h,s=l?r.scale.domain():null,t=(a=>{var{numericAxis:b}=a,c=b.scale.domain();if("number"===b.type){var d=Math.min(c[0],c[1]),e=Math.max(c[0],c[1]);return d<=0&&e>=0?0:e<0?e:d}return c[0]})({numericAxis:r}),u=r.scale.map(t);return m.map((a,m)=>{if(l){var r=l[m+q];if(null==r)return null;w=((a,b)=>{if(!b||2!==b.length||!Z(b[0])||!Z(b[1]))return a;var c=Math.min(b[0],b[1]),d=Math.max(b[0],b[1]),e=[a[0],a[1]];return(!Z(a[0])||a[0]<c)&&(e[0]=c),(!Z(a[1])||a[1]>d)&&(e[1]=d),e[0]>d&&(e[0]=d),e[1]<c&&(e[1]=c),e})(r,s)}else Array.isArray(w=ef(a,c))||(w=[t,w]);var v=tT(d,0)(w[1],m);if("horizontal"===b){var w,x,y,z,A,B,C,D=i.scale.map(w[0]),E=i.scale.map(w[1]);if(null==D||null==E)return null;x=em({axis:h,ticks:j,bandSize:g,offset:f.offset,entry:a,index:m}),y=null!=(C=null!=E?E:D)?C:void 0,z=f.size;var F=D-E;if(A=X(F)?0:F,B={x,y:n.top,width:z,height:n.height},Math.abs(v)>0&&Math.abs(A)<Math.abs(v)){var G=W(A||v)*(Math.abs(v)-Math.abs(A));y-=G,A+=G}}else{var H=h.scale.map(w[0]),I=h.scale.map(w[1]);if(null==H||null==I)return null;if(x=H,y=em({axis:i,ticks:k,bandSize:g,offset:f.offset,entry:a,index:m}),z=I-H,A=f.size,B={x:n.left,y,width:n.width,height:A},Math.abs(v)>0&&Math.abs(z)<Math.abs(v)){var J=W(z||v)*(Math.abs(v)-Math.abs(z));z+=J}}return null!=x&&null!=y&&null!=z&&null!=A&&(e||0!==z&&0!==A)?uw(uw({},a),{},{stackedBarStart:u,x,y,width:z,height:A,value:l?w:w[1],payload:a,background:B,tooltipPosition:{x:x+z/2,y:y+A/2},parentViewBox:p,originalDataIndex:m},o&&o[m]&&o[m].props):null}).filter(Boolean)}({layout:h,barSettings:l,pos:g,parentViewBox:b,bandSize:j,xAxis:c,yAxis:d,xAxisTicks:e,yAxisTicks:f,stackedData:k,displayedData:n,offset:a,cells:m,dataStartIndex:p})}});function uf(a){var{legendPayload:b}=a;return d$(),eG(),(0,M.useRef)(null),null}function ug(a){var{legendPayload:b}=a;return d$(),d2(eN),(0,M.useRef)(null),null}var uh=null!=(J=M["useId".toString()])?J:()=>{var[a]=M.useState(()=>aa("uid-"));return a},ui=(0,M.createContext)(void 0),uj=a=>{var b,c,{id:d,type:e,children:f}=a,g=(b="recharts-".concat(e),c=uh(),d||(b?"".concat(b,"-").concat(c):c));return M.createElement(ui.Provider,{value:g},f(g))},uk=(0,M.memo)(a=>{var b=d$(),c=(0,M.useRef)(null);return(0,M.useLayoutEffect)(()=>{null===c.current?b(no(a)):c.current!==a&&b(np({prev:c.current,next:a})),c.current=a},[b,a]),(0,M.useLayoutEffect)(()=>()=>{c.current&&(b(nq(c.current)),c.current=null)},[b]),null}),ul=(0,M.memo)(a=>{var b=d$(),c=(0,M.useRef)(null);return(0,M.useLayoutEffect)(()=>{null===c.current?b(nr(a)):c.current!==a&&b(nt({prev:c.current,next:a})),c.current=a},[b,a]),(0,M.useLayoutEffect)(()=>()=>{c.current&&(b(ns(c.current)),c.current=null)},[b]),null}),um=["index"];function un(){return(un=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}var uo=(0,M.createContext)(void 0),up=a=>{var{index:b}=a,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,um),d=(a=>{var b=(0,M.useContext)(uo);if(null!=b){var{stackId:c}=b;return"url(#".concat("recharts-bar-stack-clip-path-".concat(c,"-").concat(a),")")}})(b);return M.createElement(pR,un({className:"recharts-bar-stack-layer",clipPath:d},c))},uq=["onMouseEnter","onMouseLeave","onClick"],ur=["value","background","tooltipPosition"],us=["id"],ut=["onMouseEnter","onClick","onMouseLeave"];function uu(){return(uu=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function uv(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function uw(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?uv(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):uv(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function ux(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}var uy=M.memo(a=>{var{dataKey:b,stroke:c,strokeWidth:d,fill:e,name:f,hide:g,unit:h,tooltipType:i,id:j}=a,k={dataDefinedOnItem:void 0,getPosition:ah,settings:{stroke:c,strokeWidth:d,fill:e,dataKey:b,nameKey:void 0,name:er(f,b),hide:g,type:i,color:e,unit:h,graphicalItemId:j}};return M.createElement(tX,{tooltipEntrySettings:k})});function uz(a){var b,c=d2(mC),{data:d,dataKey:e,background:f,allOtherBarProps:g}=a,{onMouseEnter:h,onMouseLeave:i,onClick:j}=g,k=ux(g,uq),l=tU(h,e,g.id),m=tV(i),n=tW(j,e,g.id);if(!f||null==d)return null;var o=oY(f);return M.createElement(qf,{zIndex:(b=fQ.barBackground,f&&"object"==typeof f&&"zIndex"in f&&"number"==typeof f.zIndex&&ar(f.zIndex)?f.zIndex:b)},d.map((a,b)=>{var{value:d,background:g,tooltipPosition:h}=a,i=ux(a,ur);if(!g)return null;var j=l(a,b),p=m(a,b),q=n(a,b),r=uw(uw(uw(uw(uw({option:f,isActive:String(b)===c},i),{},{fill:"#eee"},g),o),qz(k,a,b)),{},{onMouseEnter:j,onMouseLeave:p,onClick:q,dataKey:e,index:b,className:"recharts-bar-background-rectangle"});return M.createElement(tS,uu({key:"background-bar-".concat(b)},r))}))}function uA(a){var{showLabels:b,children:c,rects:d}=a,e=null==d?void 0:d.map(a=>{var b={x:a.x,y:a.y,width:a.width,lowerWidth:a.width,upperWidth:a.width,height:a.height};return uw(uw({},b),{},{value:a.value,payload:a.payload,parentViewBox:a.parentViewBox,viewBox:b,fill:a.fill})});return M.createElement(s5,{value:b?e:void 0},c)}function uB(a){var b,{shape:c,activeBar:d,baseProps:e,entry:f,index:g,dataKey:h}=a,i=d2(mC),j=d2(mE),k=d&&String(f.originalDataIndex)===i&&(null==j||h===j),[l,m]=(0,M.useState)(!1),[n,o]=(0,M.useState)(!1),p=(0,M.useCallback)(()=>{k||m(!1)},[k]),q=k&&n,r=k||l;b=k?!0===d?c:d:c;var s=M.createElement(tS,uu({},e,{name:String(e.name)},f,{isActive:q,option:b,index:g,dataKey:h,onTransitionEnd:p}));return r?M.createElement(qf,{zIndex:fQ.activeBar},M.createElement(up,{index:f.originalDataIndex},s)):s}function uC(a){var{shape:b,baseProps:c,entry:d,index:e,dataKey:f}=a;return M.createElement(tS,uu({},c,{name:String(c.name)},d,{isActive:!1,option:b,index:e,dataKey:f}))}function uD(a){var b,{data:c,props:d}=a,e=null!=(b=oX(d))?b:{},{id:f}=e,g=ux(e,us),{shape:h,dataKey:i,activeBar:j}=d,{onMouseEnter:k,onClick:l,onMouseLeave:m}=d,n=ux(d,ut),o=tU(k,i,f),p=tV(m),q=tW(l,i,f);return c?M.createElement(M.Fragment,null,c.map((a,b)=>M.createElement(up,uu({index:a.originalDataIndex,key:"rectangle-".concat(null==a?void 0:a.x,"-").concat(null==a?void 0:a.y,"-").concat(null==a?void 0:a.value,"-").concat(b),className:"recharts-bar-rectangle"},qz(n,a,b),{onMouseEnter:o(a,b),onMouseLeave:p(a,b),onClick:q(a,b)}),j?M.createElement(uB,{shape:h,activeBar:j,baseProps:g,entry:a,index:b,dataKey:i}):M.createElement(uC,{shape:h,baseProps:g,entry:a,index:b,dataKey:i})))):null}function uE(a){var{props:b,previousRectanglesRef:c}=a,{data:d,layout:e,isAnimationActive:f,animationBegin:g,animationDuration:h,animationEasing:i,onAnimationEnd:j,onAnimationStart:k}=b,l=c.current,m=su(b,"recharts-bar-"),[n,o]=(0,M.useState)(!1),p=(0,M.useCallback)(()=>{"function"==typeof j&&j(),o(!1)},[j]),q=(0,M.useCallback)(()=>{"function"==typeof k&&k(),o(!0)},[k]);return M.createElement(uA,{showLabels:!n,rects:d},M.createElement(st,{animationId:m,begin:g,duration:h,isActive:f,easing:i,onAnimationEnd:p,onAnimationStart:q,key:m},a=>{var f=1===a?d:null==d?void 0:d.map((b,c)=>{var d=l&&l[c];if(d)return uw(uw({},b),{},{x:ad(d.x,b.x,a),y:ad(d.y,b.y,a),width:ad(d.width,b.width,a),height:ad(d.height,b.height,a)});if("horizontal"===e){var f=ad(0,b.height,a),g=ad(b.stackedBarStart,b.y,a);return uw(uw({},b),{},{y:g,height:f})}var h=ad(0,b.width,a),i=ad(b.stackedBarStart,b.x,a);return uw(uw({},b),{},{width:h,x:i})});return(a>0&&(c.current=null!=f?f:null),null==f)?null:M.createElement(pR,null,M.createElement(uD,{props:b,data:f}))}),M.createElement(s9,{label:b.label}),b.children)}function uF(a){var b=(0,M.useRef)(null);return M.createElement(uE,{previousRectanglesRef:b,props:a})}var uG=(a,b)=>{var c=Array.isArray(a.value)?a.value[1]:a.value;return{x:a.x,y:a.y,value:c,errorVal:ef(a,b)}};class uH extends M.PureComponent{render(){var{hide:a,data:b,dataKey:c,className:d,xAxisId:e,yAxisId:f,needClip:g,background:h,id:i}=this.props;if(a||null==b)return null;var j=P("recharts-bar",d);return M.createElement(pR,{className:j,id:i},g&&M.createElement("defs",null,M.createElement(t0,{clipPathId:i,xAxisId:e,yAxisId:f})),M.createElement(pR,{className:"recharts-bar-rectangles",clipPath:g?"url(#clipPath-".concat(i,")"):void 0},M.createElement(uz,{data:b,dataKey:c,background:h,allOtherBarProps:this.props}),M.createElement(uF,this.props)))}}var uI={activeBar:!1,animationBegin:0,animationDuration:400,animationEasing:"ease",background:!1,hide:!1,isAnimationActive:"auto",label:!1,legendType:"rect",minPointSize:0,xAxisId:0,yAxisId:0,zIndex:fQ.bar};function uJ(a){var b,{xAxisId:c,yAxisId:d,hide:e,legendType:f,minPointSize:g,activeBar:h,animationBegin:i,animationDuration:j,animationEasing:k,isAnimationActive:l}=a,{needClip:m}=t_(c,d),n=d2(eN),o=eG(),p=tf(a.children,s$),q=d2(b=>ue(b,a.id,o,p));if("vertical"!==n&&"horizontal"!==n)return null;var r=null==q?void 0:q[0];return b=null==r||null==r.height||null==r.width?0:"vertical"===n?r.height/2:r.width/2,M.createElement(t$,{xAxisId:c,yAxisId:d,data:q,dataPointFormatter:uG,errorBarOffset:b},M.createElement(uH,uu({},a,{layout:n,needClip:m,data:q,xAxisId:c,yAxisId:d,hide:e,legendType:f,minPointSize:g,activeBar:h,animationBegin:i,animationDuration:j,animationEasing:k,isAnimationActive:l})))}var uK=M.memo(function(a){var b,c,d=pu(a,uI),e=(b=d.stackId,null!=(c=(0,M.useContext)(uo))?c.stackId:null!=b?ek(b):void 0),f=eG();return M.createElement(uj,{id:d.id,type:"bar"},a=>M.createElement(M.Fragment,null,M.createElement(uf,{legendPayload:(a=>{var{dataKey:b,name:c,fill:d,legendType:e,hide:f}=a;return[{inactive:f,dataKey:b,type:e,color:d,value:er(c,b),payload:a}]})(d)}),M.createElement(uy,{dataKey:d.dataKey,stroke:d.stroke,strokeWidth:d.strokeWidth,fill:d.fill,name:d.name,hide:d.hide,unit:d.unit,tooltipType:d.tooltipType,id:a}),M.createElement(uk,{type:"bar",id:a,data:void 0,xAxisId:d.xAxisId,yAxisId:d.yAxisId,zAxisId:0,dataKey:d.dataKey,stackId:e,hide:d.hide,barSize:d.barSize,minPointSize:d.minPointSize,maxBarSize:d.maxBarSize,isPanorama:f,hasCustomShape:null!=d.shape}),M.createElement(qf,{zIndex:d.zIndex},M.createElement(uJ,uu({},d,{id:a})))))},oN);uK.displayName="Bar";var uL=c(85506),uM=c(4121),uN=c(16453);let uO=[{value:"trial",title:"Public free trial",description:"Temporary, limited evaluation access"},{value:"self_service",title:"Self-service purchase",description:"Public checkout for eligible customers"},{value:"private_offer",title:"Private offer",description:"Individually negotiated package or quote"},{value:"complimentary",title:"Complimentary / pilot",description:"Platform-controlled special access (not automatically granted)"},{value:"outright",title:"Outright purchase",description:"One-time purchase, subject to issued licence"},{value:"installments",title:"Flex installments",description:"Purchase agreement with scheduled payments"}],uP=[{value:"eleeveon_cloud",title:"Eleeveon Cloud"},{value:"independent_essentials",title:"Independent Essentials"},{value:"independent_multi_device",title:"Independent Multi-device"},{value:"private_hosted",title:"Private / school hosted (future)"}],uQ=[{key:"offlineSync",label:"Offline-first sync",description:"Local-first records with protected synchronization.",icon:"↻",group:"Core",legacyTopLevel:!0},{key:"cloudBackup",label:"Cloud backup",description:"Cloud recovery, restore and backup tools.",icon:"☁",group:"Core",legacyTopLevel:!0},{key:"reports",label:"Assessments & reports",description:"Assessment entry, report cards, broadsheets and templates.",icon:"▦",group:"Core",legacyTopLevel:!0},{key:"finance",label:"Finance",description:"Fees, payments, income, expenses and payroll.",icon:"₵",group:"Core",legacyTopLevel:!0},{key:"attendance",label:"Attendance",description:"Student and staff attendance workflows.",icon:"✓",group:"Operations"},{key:"identityCards",label:"ID cards & passes",description:"Student, staff, parent and visitor identity cards.",icon:"▣",group:"Operations"},{key:"identitySafety",label:"Identity & safety",description:"Pickup, visitors, access points and emergency roll calls.",icon:"◇",group:"Operations"},{key:"transport",label:"School transport",description:"Vehicles, routes, stops, assignments and journeys.",icon:"▰",group:"Operations"},{key:"schoolWebsites",label:"School websites",description:"Template-based public websites and custom domains.",icon:"↗",group:"Growth"},{key:"communications",label:"Communication",description:"Announcements, messaging and delivery logs.",icon:"✉",group:"Growth"},{key:"calendarScheduling",label:"Calendar & scheduling",description:"Events, timetables, resources and conflict checks.",icon:"□",group:"Growth"},{key:"parentPortal",label:"Parent portal",description:"Children, reports, fees and communication.",icon:"P",group:"People",legacyTopLevel:!0},{key:"studentPortal",label:"Student portal",description:"Results, reports, attendance and learning records.",icon:"S",group:"People",legacyTopLevel:!0},{key:"teacherPortal",label:"Teacher portal",description:"Classes, attendance, assessment and timetable tools.",icon:"T",group:"People",legacyTopLevel:!0},{key:"advancedAnalytics",label:"Advanced analytics",description:"Charts, trends, insights and performance views.",icon:"⌁",group:"Growth",legacyTopLevel:!0},{key:"apiAccess",label:"API access",description:"External integrations and developer APIs.",icon:"{ }",group:"Growth",legacyTopLevel:!0}],uR={offlineSync:!0,cloudBackup:!1,reports:!0,finance:!1,attendance:!1,identityCards:!1,identitySafety:!1,transport:!1,schoolWebsites:!1,communications:!1,calendarScheduling:!1,parentPortal:!1,studentPortal:!1,teacherPortal:!0,advancedAnalytics:!1,apiAccess:!1},uS={name:"",code:"",description:"",currency:"GHS",priceMonthly:"0",priceTermly:"0",priceYearly:"0",priceOneTime:"",deploymentMode:"eleeveon_cloud",licenseModel:"subscription",syncPolicy:"full",updatePolicy:"continuous",deviceLimit:"",activationLimit:"",offlineGraceDays:"",validationIntervalDays:"",requiresPeriodicValidation:!1,trialDays:"14",pricingMode:"fixed",pricingPeriod:"termly",perStudentRate:"3",pricingMinimum:"0",pricingTiers:[{upTo:"100",unitPrice:"3"},{upTo:"",unitPrice:"2"}],publicVisible:!0,acquisitionModes:["self_service"],originalMetadata:{},maxSchools:"",maxBranches:"",maxUsers:"",maxStudents:"",maxTeachers:"",maxStorageMb:"",features:{...uR},active:!0},uT=(a,b=[])=>{if(Array.isArray(a))return a;if(!a||"object"!=typeof a)return[];for(let c of b)if(Array.isArray(a[c]))return a[c];return Array.isArray(a.data)?a.data:Array.isArray(a.items)?a.items:Array.isArray(a.results)?a.results:Array.isArray(a.records)?a.records:Array.isArray(a.rows)?a.rows:[]},uU=a=>String(a??"").trim(),uV=a=>{if(!a.trim())return null;let b=Number(a);return Number.isFinite(b)?Math.max(0,Math.round(b)):null},uW=(a,b="GHS")=>new Intl.NumberFormat("en-GH",{style:"currency",currency:b,maximumFractionDigits:0}).format(Number(a||0)),uX=a=>Array.isArray(a.features)?a.features.map(a=>uU(a)).filter(Boolean):[],uY=(a,b)=>{let c=a[b];if("boolean"==typeof c)return c;let d=a.metadata&&"object"==typeof a.metadata&&a.metadata.featureFlags&&"object"==typeof a.metadata.featureFlags?a.metadata.featureFlags:{};return"boolean"==typeof d[b]?d[b]:uX(a).includes(b)},uZ=a=>{let b=a?.plan||a?.data||a;if(!b||"object"!=typeof b)return null;let c=uU(b.id||b.localId);return c?{...b,id:c,name:uU(b.name),code:uU(b.code),currency:uU(b.currency)||"GHS",priceMonthly:Number(b.priceMonthly||0),priceTermly:Number(b.priceTermly||0),priceYearly:Number(b.priceYearly||0),active:!1!==b.active,features:Array.isArray(b.features)?b.features:[],metadata:b.metadata&&"object"==typeof b.metadata?b.metadata:{}}:null};function u$({title:a,description:b}){return(0,L.jsxs)("section",{className:"dp-empty",children:[(0,L.jsx)("div",{className:"dp-empty-icon",children:"◇"}),(0,L.jsx)("h3",{children:a}),(0,L.jsx)("p",{children:b})]})}function u_({tone:a,children:b,onClose:c}){return(0,L.jsxs)("div",{className:`dp-toast ${a}`,children:[(0,L.jsx)("span",{children:b}),(0,L.jsx)("button",{type:"button",onClick:c,"aria-label":"Close message",children:"\xd7"})]})}function u0({navigate:a}){let{accountId:b,authenticated:c,loading:d}=(0,uM.F)(),{settings:e}=(0,uN.t)(),f=e?.primaryColor||"var(--primary-color, #2563eb)",g=function(a){let b=uU(a);if(!b.startsWith("#"))return"#fff";let c=b.slice(1);if(3===c.length&&(c=c.split("").map(a=>a+a).join("")),!/^[0-9a-fA-F]{6}$/.test(c))return"#fff";let d=Number.parseInt(c,16);return(299*(d>>16&255)+587*(d>>8&255)+114*(255&d))/1e3>155?"#111827":"#ffffff"}(f),[h,i]=(0,M.useState)([]),[j,k]=(0,M.useState)([]),[l,m]=(0,M.useState)(!0),[n,o]=(0,M.useState)(!1),[p,q]=(0,M.useState)(!1),[r,s]=(0,M.useState)(""),[t,u]=(0,M.useState)(null),[v,w]=(0,M.useState)(""),[x,y]=(0,M.useState)("all"),[z,A]=(0,M.useState)("all"),[B,C]=(0,M.useState)("all"),[D,E]=(0,M.useState)("cards"),[F,G]=(0,M.useState)("monthly"),[H,I]=(0,M.useState)(!1),[J,K]=(0,M.useState)(!1),[N,O]=(0,M.useState)(!1),[P,Q]=(0,M.useState)({...uS,features:{...uS.features}}),R=async(a=!1)=>{try{a?o(!0):m(!0);let[b,c]=await Promise.all([(0,uL.uE)("/billing/plans/manage?includeInactive=true"),(0,uL.uE)("/billing/subscriptions").catch(()=>[])]),d=uT(b,["plans","subscriptionPlans"]).map(uZ).filter(Boolean);i(d),k(uT(c,["subscriptions","accountSubscriptions"]))}catch(a){u({tone:"error",text:a?.message||"Could not load subscription plans."})}finally{m(!1),o(!1)}},S=(0,M.useMemo)(()=>Array.from(new Set(h.map(a=>a.currency||"GHS").filter(Boolean))).sort(),[h]),T=(0,M.useMemo)(()=>{let a=v.trim().toLowerCase();return h.filter(b=>{let c=[b.name,b.code,b.description,...uX(b)].join(" ").toLowerCase(),d="all"===x||"active"===x&&!1!==b.active||"inactive"===x&&!1===b.active,e="all"===z||uY(b,z),f="all"===B||(b.currency||"GHS")===B;return d&&e&&f&&(!a||c.includes(a))}).sort((a,b)=>!1!==a.active!=(!1!==b.active)?!1!==a.active?-1:1:Number(a.priceMonthly||0)-Number(b.priceMonthly||0))},[h,v,x,z,B]),U=(0,M.useMemo)(()=>h.filter(a=>!1!==a.active),[h]),V=(0,M.useMemo)(()=>h.filter(a=>Number(a.priceMonthly||0)>0||Number(a.priceTermly||0)>0||Number(a.priceYearly||0)>0||Number(a.priceOneTime||0)>0),[h]),W=(0,M.useMemo)(()=>V.length?Math.round(V.reduce((a,b)=>a+Number(b.priceMonthly||0),0)/V.length):0,[V]),X=(0,M.useMemo)(()=>j.filter(a=>["active"].includes(uU(a.status).toLowerCase())).reduce((a,b)=>{let c=b.plan||h.find(a=>a.id===b.planId);return a+Number(c?.priceMonthly||0)},0),[h,j]),Y=["all"!==x,"all"!==z,"all"!==B].filter(Boolean).length,Z=(0,M.useMemo)(()=>uQ.map(a=>({label:a.label,value:h.filter(b=>uY(b,a.key)).length})).sort((a,b)=>b.value-a.value),[h]),$=(0,M.useMemo)(()=>T.map(a=>({label:a.name||a.code,monthly:Number(a.priceMonthly||0),termly:Number(a.priceTermly||0),yearly:Number(a.priceYearly||0)})),[T]),_=a=>{u(null),Q({id:a.id,name:a.name||"",code:a.code||"",description:a.description||"",currency:a.currency||"GHS",priceMonthly:String(a.priceMonthly??0),priceTermly:String(a.priceTermly??0),priceYearly:String(a.priceYearly??0),priceOneTime:null==a.priceOneTime?"":String(a.priceOneTime),deploymentMode:a.deploymentMode||"eleeveon_cloud",licenseModel:a.licenseModel||"subscription",syncPolicy:a.syncPolicy||"full",updatePolicy:a.updatePolicy||"continuous",deviceLimit:null==a.deviceLimit?"":String(a.deviceLimit),activationLimit:null==a.activationLimit?"":String(a.activationLimit),offlineGraceDays:null==a.offlineGraceDays?"":String(a.offlineGraceDays),validationIntervalDays:null==a.validationIntervalDays?"":String(a.validationIntervalDays),requiresPeriodicValidation:!0===a.requiresPeriodicValidation,trialDays:String(a.metadata?.trialDays??14),pricingMode:["fixed","per_student","tiered"].includes(a.metadata?.pricing?.mode)?a.metadata.pricing.mode:"fixed",pricingPeriod:["monthly","termly","yearly"].includes(a.metadata?.pricing?.billingPeriod)?a.metadata.pricing.billingPeriod:"termly",perStudentRate:String(a.metadata?.pricing?.perStudentRate??3),pricingMinimum:String(a.metadata?.pricing?.minimumAmount??0),pricingTiers:Array.isArray(a.metadata?.pricing?.tiers)?a.metadata.pricing.tiers.map(a=>({upTo:null==a.upTo?"":String(a.upTo),unitPrice:String(a.unitPrice)})):[{upTo:"100",unitPrice:"3"},{upTo:"",unitPrice:"2"}],publicVisible:a.metadata?.publicVisible!==!1&&a.metadata?.visibility!=="private",acquisitionModes:Array.isArray(a.availableAcquisitionModes)?a.availableAcquisitionModes.filter(a=>uO.some(b=>b.value===a)):"trial"===a.licenseModel?["trial"]:"complimentary"===a.licenseModel?["complimentary"]:["self_service"],originalMetadata:{...a.metadata||{}},maxSchools:null==a.maxSchools?"":String(a.maxSchools),maxBranches:null==a.maxBranches?"":String(a.maxBranches),maxUsers:null==a.maxUsers?"":String(a.maxUsers),maxStudents:null==a.maxStudents?"":String(a.maxStudents),maxTeachers:null==a.maxTeachers?"":String(a.maxTeachers),maxStorageMb:null==a.maxStorageMb?"":String(a.maxStorageMb),features:uQ.reduce((b,c)=>(b[c.key]=uY(a,c.key),b),{...uR}),active:!1!==a.active}),O(!0)},aa=()=>{p||O(!1)},ab=async a=>{let b,c;a.preventDefault();let d=(b=uQ.filter(a=>P.features[a.key]).map(a=>a.key),c=uQ.reduce((a,b)=>(a[b.key]=P.features[b.key],a),{}),{name:uU(P.name),code:uU(P.code).toLowerCase().replace(/[^a-z0-9]+/g,"_"),description:uU(P.description)||null,currency:uU(P.currency)||"GHS",priceMonthly:uV(P.priceMonthly)??0,priceTermly:uV(P.priceTermly)??0,priceYearly:uV(P.priceYearly)??0,priceOneTime:uV(P.priceOneTime),deploymentMode:P.deploymentMode,licenseModel:P.licenseModel,syncPolicy:P.syncPolicy,updatePolicy:P.updatePolicy,deviceLimit:uV(P.deviceLimit),activationLimit:uV(P.activationLimit),offlineGraceDays:uV(P.offlineGraceDays),validationIntervalDays:uV(P.validationIntervalDays),requiresPeriodicValidation:P.requiresPeriodicValidation,availableAcquisitionModes:P.acquisitionModes,maxSchools:uV(P.maxSchools),maxBranches:uV(P.maxBranches),maxUsers:uV(P.maxUsers),maxStudents:uV(P.maxStudents),maxTeachers:uV(P.maxTeachers),maxStorageMb:uV(P.maxStorageMb),...c,features:b,metadata:{...P.originalMetadata,trialDays:uV(P.trialDays)??14,publicVisible:P.publicVisible,visibility:P.publicVisible?"public":"private",pricing:"fixed"===P.pricingMode?{mode:"fixed"}:{mode:P.pricingMode,billingPeriod:P.pricingPeriod,minimumAmount:Number(P.pricingMinimum||0),..."per_student"===P.pricingMode?{perStudentRate:Number(P.perStudentRate||0)}:{tiers:P.pricingTiers.map(a=>({upTo:a.upTo.trim()?Number(a.upTo):null,unitPrice:Number(a.unitPrice||0)}))}},featureFlags:{...P.features},featureSchemaVersion:2,featureKeys:b},active:P.active});if(0===P.acquisitionModes.length)return void u({tone:"error",text:"Select at least one acquisition option."});if(P.acquisitionModes.includes("trial")&&(!Number.isInteger(Number(P.trialDays))||1>Number(P.trialDays)||Number(P.trialDays)>365))return void u({tone:"error",text:"Trial duration must be between 1 and 365 days."});if("perpetual"===P.licenseModel&&""===P.priceOneTime.trim())return void u({tone:"error",text:"Set the one-time price for perpetual packages (0 is permitted)."});if(!d.name||!d.code)return void u({tone:"error",text:"Plan name and code are required."});if("fixed"!==P.pricingMode){if("subscription"!==P.licenseModel)return void u({tone:"error",text:"Student pricing is available for subscriptions. Use a fixed price for trial, complimentary and perpetual packages."});if("tiered"===P.pricingMode){let a=P.pricingTiers,b=0;for(let c=0;c<a.length;c++){let d=a[c],e=Number(d.upTo);if(!Number.isFinite(Number(d.unitPrice))||0>Number(d.unitPrice)||d.upTo.trim()&&(!Number.isSafeInteger(e)||e<=b)||!d.upTo.trim()&&c!==a.length-1)return void u({tone:"error",text:"Tier thresholds must increase, with an empty final threshold meaning unlimited."});d.upTo.trim()&&(b=e)}if(!a.length||a[a.length-1].upTo.trim())return void u({tone:"error",text:"The final tier must have an empty upper limit (unlimited)."})}}try{q(!0),u(null);let a=P.id?await (0,uL.uE)(`/billing/plans/${P.id}`,{method:"PATCH",body:d}):await (0,uL.uE)("/billing/plans",{method:"POST",body:d}),b=uZ(a);if(P.id&&b&&b.id!==P.id)throw Error("The server returned a different plan after update.");P.id||b?.id,await R(!0),O(!1),u({tone:"success",text:P.id?"Subscription plan updated successfully.":"Subscription plan created successfully."})}catch(a){u({tone:"error",text:a?.message||"Could not save the subscription plan."})}finally{q(!1)}},ac=async a=>{let b=!1===a.active;try{s(a.id),u(null),await (0,uL.uE)(`/billing/plans/${a.id}`,{method:"PATCH",body:{active:b}}),await R(!0),u({tone:"success",text:b?"Plan activated.":"Plan deactivated."})}catch(a){u({tone:"error",text:a?.message||"Could not update plan status."})}finally{s("")}};return l||d?(0,L.jsxs)("main",{className:"dp-page",style:{"--dp-primary":f,"--dp-primary-text":g},children:[(0,L.jsx)("style",{children:u1}),(0,L.jsxs)("section",{className:"dp-loading",children:[(0,L.jsx)("span",{className:"dp-spinner"}),(0,L.jsx)("h2",{children:"Loading subscription plans"}),(0,L.jsx)("p",{children:"Preparing prices, limits and platform capabilities."})]})]}):c&&b?(0,L.jsxs)("main",{className:"dp-page",style:{"--dp-primary":f,"--dp-primary-text":g},children:[(0,L.jsx)("style",{children:u1}),t?(0,L.jsx)(u_,{tone:t.tone,onClose:()=>u(null),children:t.text}):null,(0,L.jsxs)("section",{className:"dp-toolbar",children:[(0,L.jsxs)("label",{className:"dp-search",children:[(0,L.jsx)("span",{children:"⌕"}),(0,L.jsx)("input",{value:v,onChange:a=>w(a.target.value),placeholder:"Search plans..."})]}),(0,L.jsx)("button",{type:"button",className:"dp-primary-action",onClick:()=>{u(null),Q({...uS,features:{...uS.features},acquisitionModes:[...uS.acquisitionModes],originalMetadata:{}}),O(!0)},"aria-label":"Add subscription plan",children:"+"}),(0,L.jsxs)("button",{type:"button",className:`dp-icon-action ${Y?"active":""}`,onClick:()=>I(!0),"aria-label":"Filter plans",children:[(0,L.jsx)("span",{children:"≡"}),Y?(0,L.jsx)("b",{children:Y}):null]}),(0,L.jsx)("button",{type:"button",className:"dp-icon-action",onClick:()=>K(!0),"aria-label":"More plan options",children:"⋯"})]}),(0,L.jsxs)("section",{className:"dp-summary-grid",children:[(0,L.jsxs)("article",{children:[(0,L.jsx)("span",{children:"Plans"}),(0,L.jsx)("strong",{children:h.length}),(0,L.jsxs)("small",{children:[U.length," active"]})]}),(0,L.jsxs)("article",{children:[(0,L.jsx)("span",{children:"Paid plans"}),(0,L.jsx)("strong",{children:V.length}),(0,L.jsxs)("small",{children:[h.length-V.length," free or trial"]})]}),(0,L.jsxs)("article",{children:[(0,L.jsx)("span",{children:"Average monthly"}),(0,L.jsx)("strong",{children:uW(W)}),(0,L.jsx)("small",{children:"Across paid plans"})]}),(0,L.jsxs)("article",{children:[(0,L.jsx)("span",{children:"Potential MRR"}),(0,L.jsx)("strong",{children:uW(X)}),(0,L.jsx)("small",{children:"Active subscriptions (list-price estimate)"})]})]}),"cards"===D?T.length?(0,L.jsx)("section",{className:"dp-card-grid",children:T.map(a=>{let b=uQ.filter(b=>uY(a,b.key)),c="one_time"===F?Number(a.priceOneTime||0):"monthly"===F?Number(a.priceMonthly||0):"termly"===F?Number(a.priceTermly||0):Number(a.priceYearly||0);return(0,L.jsxs)("article",{className:`dp-plan-card ${!1===a.active?"inactive":""}`,children:[(0,L.jsxs)("header",{children:[(0,L.jsx)("div",{className:"dp-plan-mark",children:String(a.name||"P").slice(0,1).toUpperCase()}),(0,L.jsxs)("div",{className:"dp-plan-heading",children:[(0,L.jsxs)("div",{className:"dp-plan-title-row",children:[(0,L.jsx)("h3",{children:a.name||"Untitled plan"}),(0,L.jsx)("span",{className:`dp-status-dot ${!1===a.active?"inactive":""}`,title:!1===a.active?"Inactive":"Active"})]}),(0,L.jsx)("p",{children:a.code||"no_code"})]}),(0,L.jsx)("button",{type:"button",className:"dp-card-more",onClick:()=>_(a),"aria-label":`Edit ${a.name}`,children:"⋯"})]}),(0,L.jsxs)("div",{className:"dp-price-row",children:[(0,L.jsx)("strong",{children:uW(c,a.currency||"GHS")}),(0,L.jsx)("span",{children:"one_time"===F?"one-time":"monthly"===F?"month":"termly"===F?"4 months":"year"})]}),(0,L.jsx)("p",{className:"dp-description",children:a.description||"No plan description has been added."}),(0,L.jsxs)("div",{className:"dp-limit-row",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:a.maxStudents??"∞"}),"students"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:a.maxBranches??"∞"}),"branches"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:a.maxStorageMb??"∞"}),"MB"]})]}),(0,L.jsxs)("div",{className:"dp-feature-summary",children:[(0,L.jsx)("span",{children:b.slice(0,5).map(a=>(0,L.jsx)("i",{title:a.label,children:a.icon},a.key))}),(0,L.jsxs)("small",{children:[b.length,"/",uQ.length," capabilities"]})]}),(0,L.jsxs)("footer",{children:[(0,L.jsxs)("span",{children:[a.deploymentMode||"eleeveon_cloud"," \xb7 ",(a=>{if(!a)return"Not set";let b=new Date(a);return Number.isNaN(b.getTime())?"Not set":new Intl.DateTimeFormat("en-GH",{day:"2-digit",month:"short",year:"numeric"}).format(b)})(a.updatedAt)]}),(0,L.jsxs)("div",{children:[(0,L.jsx)("button",{type:"button",className:"dp-secondary-button",onClick:()=>_(a),children:"Edit"}),(0,L.jsx)("button",{type:"button",className:"dp-secondary-button",disabled:r===a.id,onClick:()=>void ac(a),children:r===a.id?"Saving...":!1===a.active?"Activate":"Deactivate"})]})]})]},a.id)})}):(0,L.jsx)(u$,{title:"No plans found",description:"Adjust the search or filters, or create a new subscription plan."}):null,"table"===D?(0,L.jsxs)("section",{className:"dp-table-card",children:[(0,L.jsxs)("div",{className:"dp-table-title",children:["Plans (",T.length,")"]}),(0,L.jsx)("div",{className:"dp-table-scroll",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Plan"}),(0,L.jsx)("th",{children:"Monthly"}),(0,L.jsx)("th",{children:"Termly"}),(0,L.jsx)("th",{children:"Yearly"}),(0,L.jsx)("th",{children:"Students"}),(0,L.jsx)("th",{children:"Capabilities"}),(0,L.jsx)("th",{children:"Status"}),(0,L.jsx)("th",{})]})}),(0,L.jsx)("tbody",{children:T.map(a=>(0,L.jsxs)("tr",{children:[(0,L.jsxs)("td",{children:[(0,L.jsx)("strong",{children:a.name}),(0,L.jsx)("small",{children:a.code})]}),(0,L.jsx)("td",{children:uW(Number(a.priceMonthly||0),a.currency)}),(0,L.jsx)("td",{children:uW(Number(a.priceTermly||0),a.currency)}),(0,L.jsx)("td",{children:uW(Number(a.priceYearly||0),a.currency)}),(0,L.jsx)("td",{children:a.maxStudents??"Unlimited"}),(0,L.jsxs)("td",{children:[uQ.filter(b=>uY(a,b.key)).length,"/",uQ.length]}),(0,L.jsx)("td",{children:(0,L.jsxs)("span",{className:"dp-inline-status",children:[(0,L.jsx)("i",{className:!1===a.active?"inactive":"active"}),!1===a.active?"Inactive":"Active"]})}),(0,L.jsx)("td",{children:(0,L.jsx)("button",{type:"button",className:"dp-table-action",onClick:()=>_(a),children:"Edit"})})]},a.id))})]})})]}):null,"analytics"===D?(0,L.jsxs)("section",{className:"dp-analytics-grid",children:[(0,L.jsxs)("article",{className:"dp-chart-card",children:[(0,L.jsx)("header",{children:(0,L.jsxs)("div",{children:[(0,L.jsx)("h3",{children:"Plan pricing"}),(0,L.jsx)("p",{children:"Monthly and yearly price comparison."})]})}),(0,L.jsx)("div",{className:"dp-chart",children:(0,L.jsx)(aA,{width:"100%",height:"100%",children:(0,L.jsxs)(pA,{data:$,children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1,opacity:.2}),(0,L.jsx)(rh,{dataKey:"label",tick:{fontSize:11},interval:0,angle:-18,height:58}),(0,L.jsx)(rs,{tick:{fontSize:11}}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"monthly",fill:"var(--dp-primary)",radius:[5,5,0,0]}),(0,L.jsx)(uK,{dataKey:"termly",fill:"#0f766e",radius:[5,5,0,0]}),(0,L.jsx)(uK,{dataKey:"yearly",fill:"#64748b",radius:[5,5,0,0]})]})})})]}),(0,L.jsxs)("article",{className:"dp-chart-card",children:[(0,L.jsx)("header",{children:(0,L.jsxs)("div",{children:[(0,L.jsx)("h3",{children:"Capability coverage"}),(0,L.jsx)("p",{children:"How many plans include each platform capability."})]})}),(0,L.jsx)("div",{className:"dp-coverage-list",children:Z.map(a=>(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{children:a.label}),(0,L.jsx)("div",{children:(0,L.jsx)("i",{style:{width:`${h.length?Math.max(4,a.value/h.length*100):0}%`}})}),(0,L.jsx)("b",{children:a.value})]},a.label))})]})]}):null,H?(0,L.jsx)("div",{className:"dp-overlay",role:"presentation",onMouseDown:a=>{a.target===a.currentTarget&&I(!1)},children:(0,L.jsxs)("section",{className:"dp-sheet dp-small-sheet",children:[(0,L.jsxs)("header",{className:"dp-sheet-header",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:"Filter plans"}),(0,L.jsx)("p",{children:"Narrow the list without changing saved data."})]}),(0,L.jsx)("button",{type:"button",onClick:()=>I(!1),children:"\xd7"})]}),(0,L.jsxs)("div",{className:"dp-sheet-body",children:[(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Status"}),(0,L.jsxs)("select",{value:x,onChange:a=>y(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All statuses"}),(0,L.jsx)("option",{value:"active",children:"Active"}),(0,L.jsx)("option",{value:"inactive",children:"Inactive"})]})]}),(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Capability"}),(0,L.jsxs)("select",{value:z,onChange:a=>A(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All capabilities"}),uQ.map(a=>(0,L.jsx)("option",{value:a.key,children:a.label},a.key))]})]}),(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Currency"}),(0,L.jsxs)("select",{value:B,onChange:a=>C(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All currencies"}),S.map(a=>(0,L.jsx)("option",{value:a,children:a},a))]})]})]}),(0,L.jsxs)("footer",{className:"dp-sheet-footer",children:[(0,L.jsx)("button",{type:"button",className:"dp-secondary-button",onClick:()=>{y("all"),A("all"),C("all")},children:"Reset"}),(0,L.jsx)("button",{type:"button",className:"dp-primary-button",onClick:()=>I(!1),children:"Apply"})]})]})}):null,J?(0,L.jsx)("div",{className:"dp-overlay",role:"presentation",onMouseDown:a=>{a.target===a.currentTarget&&K(!1)},children:(0,L.jsxs)("section",{className:"dp-sheet dp-small-sheet",children:[(0,L.jsxs)("header",{className:"dp-sheet-header",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:"Plan options"}),(0,L.jsx)("p",{children:"Change view or refresh server data."})]}),(0,L.jsx)("button",{type:"button",onClick:()=>K(!1),children:"\xd7"})]}),(0,L.jsxs)("div",{className:"dp-option-list",children:[["cards","table","analytics"].map(a=>(0,L.jsxs)("button",{type:"button",className:D===a?"active":"",onClick:()=>{E(a),K(!1)},children:[(0,L.jsx)("span",{children:"cards"===a?"▦":"table"===a?"☷":"⌁"}),(0,L.jsxs)("div",{children:[(0,L.jsx)("strong",{children:"cards"===a?"Cards":"table"===a?"Table":"Analytics"}),(0,L.jsx)("small",{children:"cards"===a?"Compact plan cards":"table"===a?"Dense comparison table":"Pricing and coverage insights"})]}),(0,L.jsx)("i",{children:D===a?"✓":""})]},a)),(0,L.jsxs)("button",{type:"button",onClick:()=>{G(a=>"monthly"===a?"termly":"termly"===a?"yearly":"yearly"===a?"one_time":"monthly"),K(!1)},children:[(0,L.jsx)("span",{children:"₵"}),(0,L.jsxs)("div",{children:[(0,L.jsxs)("strong",{children:["Show"," ","one_time"===F?"monthly":"yearly"===F?"one-time":"monthly"===F?"termly":"termly"===F?"yearly":"monthly"," prices"]}),(0,L.jsx)("small",{children:"Changes only the card price preview."})]}),(0,L.jsx)("i",{})]}),(0,L.jsxs)("button",{type:"button",disabled:n,onClick:()=>{R(!0),K(!1)},children:[(0,L.jsx)("span",{children:"↻"}),(0,L.jsxs)("div",{children:[(0,L.jsx)("strong",{children:n?"Refreshing...":"Refresh data"}),(0,L.jsx)("small",{children:"Reload plans and subscriptions from the server."})]}),(0,L.jsx)("i",{})]})]})]})}):null,N?(0,L.jsx)("div",{className:"dp-overlay",role:"presentation",onMouseDown:a=>{a.target===a.currentTarget&&aa()},children:(0,L.jsxs)("form",{className:"dp-sheet dp-editor-sheet",onSubmit:ab,children:[(0,L.jsxs)("header",{className:"dp-sheet-header",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:P.id?"Edit plan":"Create plan"}),(0,L.jsx)("p",{children:"Pricing, limits and the complete Eleeveon capability package."})]}),(0,L.jsx)("button",{type:"button",onClick:aa,disabled:p,children:"\xd7"})]}),(0,L.jsxs)("div",{className:"dp-sheet-body dp-editor-body",children:[(0,L.jsxs)("section",{className:"dp-form-section",children:[(0,L.jsxs)("div",{className:"dp-section-title",children:[(0,L.jsx)("h3",{children:"Plan identity"}),(0,L.jsx)("p",{children:"Public name, internal code and description."})]}),(0,L.jsxs)("div",{className:"dp-field-grid",children:[(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Plan name *"}),(0,L.jsx)("input",{value:P.name,onChange:a=>Q(b=>({...b,name:a.target.value})),placeholder:"Complete",required:!0})]}),(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Plan code *"}),(0,L.jsx)("input",{value:P.code,onChange:a=>Q(b=>({...b,code:a.target.value})),placeholder:"complete",required:!0})]}),(0,L.jsxs)("label",{className:"dp-field dp-field-wide",children:[(0,L.jsx)("span",{children:"Description"}),(0,L.jsx)("textarea",{value:P.description,onChange:a=>Q(b=>({...b,description:a.target.value})),placeholder:"Describe who this plan is for.",rows:3})]})]})]}),(0,L.jsxs)("section",{className:"dp-form-section",children:[(0,L.jsxs)("div",{className:"dp-section-title",children:[(0,L.jsx)("h3",{children:"Pricing"}),(0,L.jsx)("p",{children:"Monthly, four-month termly and yearly prices shown to customers."})]}),(0,L.jsxs)("div",{className:"dp-field-grid dp-three-columns",children:[(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Currency"}),(0,L.jsx)("input",{value:P.currency,onChange:a=>Q(b=>({...b,currency:a.target.value.toUpperCase()})),placeholder:"GHS"})]}),(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Monthly price"}),(0,L.jsx)("input",{type:"number",min:"0",value:P.priceMonthly,onChange:a=>Q(b=>({...b,priceMonthly:a.target.value}))})]}),(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Termly price (4 months)"}),(0,L.jsx)("input",{type:"number",min:"0",value:P.priceTermly,onChange:a=>Q(b=>({...b,priceTermly:a.target.value}))})]}),(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Yearly price"}),(0,L.jsx)("input",{type:"number",min:"0",value:P.priceYearly,onChange:a=>Q(b=>({...b,priceYearly:a.target.value}))})]})]})]}),(0,L.jsxs)("section",{className:"dp-form-section",children:[(0,L.jsxs)("div",{className:"dp-section-title",children:[(0,L.jsx)("h3",{children:"Deployment & ownership"}),(0,L.jsx)("p",{children:"Decide where the application runs and how the school owns access. This is separate from the acquisition route."})]}),(0,L.jsxs)("div",{className:"dp-field-grid dp-three-columns",children:[(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Deployment"}),(0,L.jsx)("select",{value:P.deploymentMode,onChange:a=>Q(b=>({...b,deploymentMode:a.target.value})),children:uP.map(a=>(0,L.jsx)("option",{value:a.value,children:a.title},a.value))})]}),(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Licence model"}),(0,L.jsxs)("select",{value:P.licenseModel,onChange:a=>Q(b=>({...b,licenseModel:a.target.value})),children:[(0,L.jsx)("option",{value:"subscription",children:"Subscription"}),(0,L.jsx)("option",{value:"trial",children:"Trial"}),(0,L.jsx)("option",{value:"complimentary",children:"Complimentary / pilot"}),(0,L.jsx)("option",{value:"perpetual",children:"Perpetual purchase"})]})]}),(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Sync policy"}),(0,L.jsxs)("select",{value:P.syncPolicy,onChange:a=>Q(b=>({...b,syncPolicy:a.target.value})),children:[(0,L.jsx)("option",{value:"full",children:"Full cloud sync"}),(0,L.jsx)("option",{value:"platform_only",children:"Platform only"}),(0,L.jsx)("option",{value:"disabled",children:"No cloud sync"})]})]}),(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Update policy"}),(0,L.jsxs)("select",{value:P.updatePolicy,onChange:a=>Q(b=>({...b,updatePolicy:a.target.value})),children:[(0,L.jsx)("option",{value:"continuous",children:"Continuous"}),(0,L.jsx)("option",{value:"security_only",children:"Security only"}),(0,L.jsx)("option",{value:"version_locked",children:"Version-locked"})]})]}),(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"One-time price (GHS)"}),(0,L.jsx)("input",{type:"number",min:"0",value:P.priceOneTime,onChange:a=>Q(b=>({...b,priceOneTime:a.target.value})),placeholder:"Not applicable"})]}),[["deviceLimit","Device limit"],["activationLimit","Activations"],["offlineGraceDays","Offline grace days"],["validationIntervalDays","Validation interval days"]].map(([a,b])=>(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:b}),(0,L.jsx)("input",{type:"number",min:"0",value:P[a],onChange:b=>Q(c=>({...c,[a]:b.target.value})),placeholder:"Not configured"})]},a)),(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Periodic licence validation"}),(0,L.jsxs)("select",{value:P.requiresPeriodicValidation?"yes":"no",onChange:a=>Q(b=>({...b,requiresPeriodicValidation:"yes"===a.target.value})),children:[(0,L.jsx)("option",{value:"no",children:"Not required"}),(0,L.jsx)("option",{value:"yes",children:"Required"})]})]})]})]}),(0,L.jsxs)("section",{className:"dp-form-section",children:[(0,L.jsxs)("div",{className:"dp-section-title",children:[(0,L.jsx)("h3",{children:"How schools can acquire this package"}),(0,L.jsx)("p",{children:"These are catalogue options. Activating a pilot, taking payments, or issuing a licence requires separately authorized backend workflows."})]}),(0,L.jsx)("div",{className:"dp-feature-grid",children:uO.map(a=>(0,L.jsxs)("button",{type:"button",className:`dp-feature-option ${P.acquisitionModes.includes(a.value)?"enabled":""}`,onClick:()=>Q(b=>({...b,acquisitionModes:b.acquisitionModes.includes(a.value)?b.acquisitionModes.filter(b=>b!==a.value):[...b.acquisitionModes,a.value]})),children:[(0,L.jsxs)("span",{className:"dp-feature-copy",children:[(0,L.jsx)("strong",{children:a.title}),(0,L.jsx)("small",{children:a.description})]}),(0,L.jsx)("span",{className:`dp-toggle ${P.acquisitionModes.includes(a.value)?"enabled":""}`,children:(0,L.jsx)("i",{})})]},a.value))}),P.acquisitionModes.includes("trial")&&(0,L.jsx)("div",{className:"dp-field-grid",children:(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Trial duration (days)"}),(0,L.jsx)("input",{type:"number",min:"1",max:"365",value:P.trialDays,onChange:a=>Q(b=>({...b,trialDays:a.target.value}))})]})}),(0,L.jsx)("p",{style:{fontSize:12,opacity:.75,marginTop:10},children:"Trial duration is saved in package metadata. Registration will use it only after the trial bootstrap integration is deployed. Complimentary access must be assigned explicitly to school account IDs."})]}),(0,L.jsxs)("section",{className:"dp-form-section",children:[(0,L.jsxs)("div",{className:"dp-section-title",children:[(0,L.jsx)("h3",{children:"Subscription price calculation"}),(0,L.jsx)("p",{children:"Keep the billing period separate from the amount calculation. Progressive tiers charge only additional students at the next rate."})]}),(0,L.jsxs)("div",{className:"dp-field-grid dp-three-columns",children:[(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Pricing model"}),(0,L.jsxs)("select",{value:P.pricingMode,onChange:a=>Q(b=>({...b,pricingMode:a.target.value})),children:[(0,L.jsx)("option",{value:"fixed",children:"Fixed package price"}),(0,L.jsx)("option",{value:"per_student",children:"Flat rate per student"}),(0,L.jsx)("option",{value:"tiered",children:"Progressive student tiers"})]})]}),"fixed"!==P.pricingMode&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Rate applies per"}),(0,L.jsxs)("select",{value:P.pricingPeriod,onChange:a=>Q(b=>({...b,pricingPeriod:a.target.value})),children:[(0,L.jsx)("option",{value:"termly",children:"Term"}),(0,L.jsx)("option",{value:"monthly",children:"Month"}),(0,L.jsx)("option",{value:"yearly",children:"Year"})]})]}),(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Minimum charge (GHS)"}),(0,L.jsx)("input",{type:"number",min:"0",step:"0.01",value:P.pricingMinimum,onChange:a=>Q(b=>({...b,pricingMinimum:a.target.value}))})]})]}),"per_student"===P.pricingMode&&(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Rate per student (GHS)"}),(0,L.jsx)("input",{type:"number",min:"0",step:"0.01",value:P.perStudentRate,onChange:a=>Q(b=>({...b,perStudentRate:a.target.value}))})]})]}),"tiered"===P.pricingMode&&(0,L.jsxs)("div",{style:{display:"grid",gap:10,marginTop:12},children:[P.pricingTiers.map((a,b)=>(0,L.jsxs)("div",{className:"dp-field-grid dp-three-columns",children:[(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Through student # (blank = unlimited)"}),(0,L.jsx)("input",{type:"number",min:"1",value:a.upTo,onChange:a=>Q(c=>({...c,pricingTiers:c.pricingTiers.map((c,d)=>d===b?{...c,upTo:a.target.value}:c)}))})]}),(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:"Rate per student (GHS)"}),(0,L.jsx)("input",{type:"number",min:"0",step:"0.01",value:a.unitPrice,onChange:a=>Q(c=>({...c,pricingTiers:c.pricingTiers.map((c,d)=>d===b?{...c,unitPrice:a.target.value}:c)}))})]}),(0,L.jsx)("button",{type:"button",className:"dp-secondary-button",disabled:P.pricingTiers.length<=1,onClick:()=>Q(a=>({...a,pricingTiers:a.pricingTiers.filter((a,c)=>c!==b)})),children:"Remove tier"})]},b)),(0,L.jsx)("button",{type:"button",className:"dp-secondary-button",onClick:()=>Q(a=>({...a,pricingTiers:[...a.pricingTiers,{upTo:"",unitPrice:"0"}]})),children:"+ Add tier"})]}),(0,L.jsxs)("label",{className:"dp-field",style:{marginTop:12},children:[(0,L.jsx)("span",{children:"Public catalogue visibility"}),(0,L.jsxs)("select",{value:P.publicVisible?"public":"private",onChange:a=>Q(b=>({...b,publicVisible:"public"===a.target.value})),children:[(0,L.jsx)("option",{value:"public",children:"Publish for public visitors"}),(0,L.jsx)("option",{value:"private",children:"Private — developer only"})]})]}),(0,L.jsx)("p",{style:{opacity:.7,fontSize:12,marginTop:8},children:"Complimentary/pilot and private-hosted plans are never listed publicly. Student-priced checkout remains disabled until verified enrollment billing is connected."})]}),(0,L.jsxs)("section",{className:"dp-form-section",children:[(0,L.jsxs)("div",{className:"dp-section-title",children:[(0,L.jsx)("h3",{children:"Usage limits"}),(0,L.jsx)("p",{children:"Leave a field blank for no configured limit."})]}),(0,L.jsx)("div",{className:"dp-field-grid dp-three-columns",children:[["maxSchools","Schools"],["maxBranches","Branches"],["maxUsers","Users"],["maxStudents","Students"],["maxTeachers","Teachers"],["maxStorageMb","Storage (MB)"]].map(([a,b])=>(0,L.jsxs)("label",{className:"dp-field",children:[(0,L.jsx)("span",{children:b}),(0,L.jsx)("input",{type:"number",min:"0",value:P[a],onChange:b=>Q(c=>({...c,[a]:b.target.value})),placeholder:"Unlimited"})]},a))})]}),(0,L.jsxs)("section",{className:"dp-form-section",children:[(0,L.jsxs)("div",{className:"dp-section-title dp-feature-heading",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h3",{children:"Platform capabilities"}),(0,L.jsx)("p",{children:"Includes websites, ID cards, attendance, safety and the wider system."})]}),(0,L.jsxs)("span",{children:[uQ.filter(a=>P.features[a.key]).length,"/",uQ.length]})]}),["Core","People","Operations","Growth"].map(a=>(0,L.jsxs)("div",{className:"dp-feature-group",children:[(0,L.jsx)("h4",{children:a}),(0,L.jsx)("div",{className:"dp-feature-grid",children:uQ.filter(b=>b.group===a).map(a=>{let b=P.features[a.key];return(0,L.jsxs)("button",{type:"button",className:`dp-feature-option ${b?"enabled":""}`,onClick:()=>{var c,d;return c=a.key,d=!b,void Q(a=>({...a,features:{...a.features,[c]:d}}))},children:[(0,L.jsx)("span",{className:"dp-feature-icon",children:a.icon}),(0,L.jsxs)("span",{className:"dp-feature-copy",children:[(0,L.jsx)("strong",{children:a.label}),(0,L.jsx)("small",{children:a.description})]}),(0,L.jsx)("span",{className:`dp-toggle ${b?"enabled":""}`,children:(0,L.jsx)("i",{})})]},a.key)})})]},a))]}),(0,L.jsxs)("section",{className:"dp-form-section dp-status-section",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h3",{children:"Plan availability"}),(0,L.jsx)("p",{children:"Inactive plans remain available for history but cannot be newly selected."})]}),(0,L.jsx)("button",{type:"button",className:`dp-toggle dp-large-toggle ${P.active?"enabled":""}`,onClick:()=>Q(a=>({...a,active:!a.active})),"aria-label":P.active?"Deactivate plan":"Activate plan",children:(0,L.jsx)("i",{})})]})]}),(0,L.jsxs)("footer",{className:"dp-sheet-footer",children:[(0,L.jsx)("button",{type:"button",className:"dp-secondary-button",onClick:aa,disabled:p,children:"Cancel"}),(0,L.jsx)("button",{type:"submit",className:"dp-primary-button",disabled:p,children:p?"Saving...":P.id?"Save changes":"Create plan"})]})]})}):null]}):(0,L.jsxs)("main",{className:"dp-page",children:[(0,L.jsx)("style",{children:u1}),(0,L.jsx)(u$,{title:"Developer access required",description:"Sign in with a developer workspace to manage platform plans."})]})}let u1=String.raw`
  .dp-page {
    --dp-bg: var(--bg, #f6f7fb);
    --dp-card: var(--card, #ffffff);
    --dp-surface: var(--surface, #ffffff);
    --dp-text: var(--text, #111827);
    --dp-muted: var(--muted, #6b7280);
    --dp-border: var(--border, #e5e7eb);
    --dp-soft: color-mix(in srgb, var(--dp-primary) 8%, var(--dp-card));
    --dp-muted-dot: color-mix(in srgb, var(--dp-muted) 28%, transparent);
    min-height: 100%;
    color: var(--dp-text);
  }

  * { box-sizing: border-box; }

  button, input, select, textarea { font: inherit; }

  button { color: inherit; }

  .dp-toolbar {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 42px 42px 42px;
    gap: 8px;
    align-items: center;
    margin-bottom: 12px;
  }

  .dp-search {
    min-width: 0;
    height: 42px;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0 13px;
    border: 1px solid var(--dp-border);
    border-radius: 13px;
    background: var(--dp-card);
    box-shadow: 0 1px 2px rgba(15, 23, 42, .04);
  }

  .dp-search span {
    color: var(--dp-muted);
    font-size: 19px;
    line-height: 1;
  }

  .dp-search input {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: var(--dp-text);
  }

  .dp-search input::placeholder { color: var(--dp-muted); }

  .dp-primary-action,
  .dp-icon-action {
    width: 42px;
    height: 42px;
    border-radius: 13px;
    display: grid;
    place-items: center;
    border: 1px solid var(--dp-border);
    cursor: pointer;
    position: relative;
    transition: .18s ease;
  }

  .dp-primary-action {
    background: var(--dp-primary);
    border-color: var(--dp-primary);
    color: var(--dp-primary-text);
    font-size: 24px;
    box-shadow: 0 7px 18px color-mix(in srgb, var(--dp-primary) 24%, transparent);
  }

  .dp-icon-action {
    background: var(--dp-card);
    color: var(--dp-text);
    font-size: 20px;
  }

  .dp-icon-action.active {
    color: var(--dp-primary-text);
    background: var(--dp-primary);
    border-color: var(--dp-primary);
  }

  .dp-icon-action b {
    position: absolute;
    top: -5px;
    right: -4px;
    min-width: 17px;
    height: 17px;
    padding: 0 4px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: #ef4444;
    color: #fff;
    font-size: 10px;
    border: 2px solid var(--dp-bg);
  }

  .dp-summary-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 9px;
    margin-bottom: 12px;
  }

  .dp-summary-grid article {
    min-width: 0;
    padding: 13px 14px;
    border: 1px solid var(--dp-border);
    border-radius: 14px;
    background: var(--dp-card);
  }

  .dp-summary-grid span,
  .dp-summary-grid small {
    display: block;
    color: var(--dp-muted);
    font-size: 11px;
  }

  .dp-summary-grid strong {
    display: block;
    margin: 4px 0 3px;
    font-size: clamp(16px, 2vw, 21px);
    line-height: 1.1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dp-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 10px;
  }

  .dp-plan-card {
    min-width: 0;
    padding: 15px;
    border: 1px solid var(--dp-border);
    border-radius: 17px;
    background: var(--dp-card);
    box-shadow: 0 4px 16px rgba(15, 23, 42, .035);
  }

  .dp-plan-card.inactive { opacity: .7; }

  .dp-plan-card > header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .dp-plan-mark {
    width: 38px;
    height: 38px;
    flex: 0 0 auto;
    display: grid;
    place-items: center;
    border-radius: 12px;
    color: var(--dp-primary-text);
    background: var(--dp-primary);
    font-weight: 800;
  }

  .dp-plan-heading { min-width: 0; flex: 1; }

  .dp-plan-title-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .dp-plan-title-row h3 {
    min-width: 0;
    margin: 0;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dp-plan-heading p {
    margin: 3px 0 0;
    color: var(--dp-muted);
    font-size: 11px;
  }

  .dp-status-dot {
    width: 8px;
    height: 8px;
    flex: 0 0 auto;
    border-radius: 999px;
    background: #16a34a;
  }

  .dp-status-dot.inactive { background: #94a3b8; }

  .dp-card-more {
    width: 34px;
    height: 34px;
    border: 0;
    border-radius: 10px;
    background: transparent;
    color: var(--dp-muted);
    cursor: pointer;
    font-size: 20px;
  }

  .dp-card-more:hover { background: var(--dp-soft); }

  .dp-price-row {
    display: flex;
    align-items: baseline;
    gap: 5px;
    margin-top: 15px;
  }

  .dp-price-row strong { font-size: 24px; letter-spacing: -.03em; }

  .dp-price-row span {
    color: var(--dp-muted);
    font-size: 12px;
  }

  .dp-description {
    min-height: 38px;
    margin: 8px 0 13px;
    color: var(--dp-muted);
    font-size: 12px;
    line-height: 1.55;
  }

  .dp-limit-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 7px;
  }

  .dp-limit-row span {
    min-width: 0;
    padding: 8px;
    border-radius: 10px;
    background: var(--dp-soft);
    color: var(--dp-muted);
    font-size: 10px;
    text-align: center;
  }

  .dp-limit-row b {
    display: block;
    color: var(--dp-text);
    font-size: 12px;
    margin-bottom: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dp-feature-summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 13px;
  }

  .dp-feature-summary > span {
    display: flex;
    align-items: center;
  }

  .dp-feature-summary i {
    width: 25px;
    height: 25px;
    margin-left: -4px;
    display: grid;
    place-items: center;
    border: 2px solid var(--dp-card);
    border-radius: 999px;
    background: var(--dp-soft);
    color: var(--dp-primary);
    font-size: 10px;
    font-style: normal;
    font-weight: 800;
  }

  .dp-feature-summary i:first-child { margin-left: 0; }

  .dp-feature-summary small { color: var(--dp-muted); font-size: 10px; }

  .dp-plan-card > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 14px;
    padding-top: 12px;
    border-top: 1px solid var(--dp-border);
  }

  .dp-plan-card > footer > span {
    color: var(--dp-muted);
    font-size: 10px;
  }

  .dp-plan-card > footer > div { display: flex; gap: 6px; }

  .dp-secondary-button,
  .dp-primary-button {
    min-height: 36px;
    padding: 0 13px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;
    transition: .18s ease;
  }

  .dp-secondary-button {
    border: 1px solid var(--dp-border);
    background: var(--dp-card);
    color: var(--dp-text);
  }

  .dp-primary-button {
    border: 1px solid var(--dp-primary);
    background: var(--dp-primary);
    color: var(--dp-primary-text);
    box-shadow: 0 6px 16px color-mix(in srgb, var(--dp-primary) 20%, transparent);
  }

  button:disabled {
    cursor: not-allowed;
    opacity: .58;
  }

  .dp-table-card,
  .dp-chart-card {
    border: 1px solid var(--dp-border);
    border-radius: 17px;
    background: var(--dp-card);
    overflow: hidden;
  }

  .dp-table-title {
    padding: 13px 15px;
    border-bottom: 1px solid var(--dp-border);
    font-size: 13px;
    font-weight: 800;
  }

  .dp-table-scroll { overflow: auto; }

  .dp-table-scroll table {
    width: 100%;
    min-width: 830px;
    border-collapse: collapse;
  }

  .dp-table-scroll th,
  .dp-table-scroll td {
    padding: 11px 13px;
    border-bottom: 1px solid var(--dp-border);
    text-align: left;
    font-size: 12px;
  }

  .dp-table-scroll th {
    color: var(--dp-muted);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: .07em;
  }

  .dp-table-scroll td strong,
  .dp-table-scroll td small {
    display: block;
  }

  .dp-table-scroll td small {
    margin-top: 3px;
    color: var(--dp-muted);
    font-size: 10px;
  }

  .dp-inline-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .dp-inline-status i {
    width: 7px;
    height: 7px;
    border-radius: 999px;
  }

  .dp-inline-status i.active { background: #16a34a; }
  .dp-inline-status i.inactive { background: #94a3b8; }

  .dp-table-action {
    border: 0;
    background: transparent;
    color: var(--dp-primary);
    cursor: pointer;
    font-weight: 800;
  }

  .dp-analytics-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(300px, .9fr);
    gap: 10px;
  }

  .dp-chart-card { padding: 15px; }

  .dp-chart-card header h3 {
    margin: 0;
    font-size: 14px;
  }

  .dp-chart-card header p {
    margin: 4px 0 0;
    color: var(--dp-muted);
    font-size: 11px;
  }

  .dp-chart { height: 340px; margin-top: 12px; }

  .dp-coverage-list {
    margin-top: 15px;
    display: grid;
    gap: 10px;
  }

  .dp-coverage-list > div {
    display: grid;
    grid-template-columns: minmax(120px, 1fr) minmax(90px, 1.4fr) 24px;
    align-items: center;
    gap: 8px;
    font-size: 11px;
  }

  .dp-coverage-list > div > div {
    height: 7px;
    overflow: hidden;
    border-radius: 999px;
    background: var(--dp-soft);
  }

  .dp-coverage-list i {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: var(--dp-primary);
  }

  .dp-coverage-list b { text-align: right; }

  .dp-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    justify-content: flex-end;
    background: rgba(15, 23, 42, .36);
    backdrop-filter: blur(3px);
  }

  .dp-sheet {
    width: min(760px, 100%);
    height: 100%;
    display: flex;
    flex-direction: column;
    border-left: 1px solid var(--dp-border);
    background: var(--dp-bg);
    box-shadow: -18px 0 45px rgba(15, 23, 42, .18);
  }

  .dp-small-sheet { width: min(390px, 100%); }

  .dp-sheet-header,
  .dp-sheet-footer {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 14px 16px;
    background: var(--dp-card);
  }

  .dp-sheet-header { border-bottom: 1px solid var(--dp-border); }
  .dp-sheet-footer { border-top: 1px solid var(--dp-border); justify-content: flex-end; }

  .dp-sheet-header h2 {
    margin: 0;
    font-size: 16px;
  }

  .dp-sheet-header p {
    margin: 3px 0 0;
    color: var(--dp-muted);
    font-size: 11px;
  }

  .dp-sheet-header > button {
    width: 36px;
    height: 36px;
    border: 1px solid var(--dp-border);
    border-radius: 11px;
    background: var(--dp-card);
    cursor: pointer;
    font-size: 20px;
  }

  .dp-sheet-body {
    flex: 1;
    min-height: 0;
    overflow: auto;
    padding: 15px;
  }

  .dp-editor-body { display: grid; gap: 10px; }

  .dp-form-section {
    padding: 15px;
    border: 1px solid var(--dp-border);
    border-radius: 16px;
    background: var(--dp-card);
  }

  .dp-section-title h3,
  .dp-status-section h3 {
    margin: 0;
    font-size: 14px;
  }

  .dp-section-title p,
  .dp-status-section p {
    margin: 4px 0 0;
    color: var(--dp-muted);
    font-size: 11px;
    line-height: 1.5;
  }

  .dp-field-grid {
    margin-top: 13px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .dp-three-columns { grid-template-columns: repeat(3, minmax(0, 1fr)); }

  .dp-field-wide { grid-column: 1 / -1; }

  .dp-field {
    display: grid;
    gap: 6px;
  }

  .dp-field > span {
    color: var(--dp-muted);
    font-size: 10px;
    font-weight: 800;
  }

  .dp-field input,
  .dp-field select,
  .dp-field textarea {
    width: 100%;
    min-height: 40px;
    border: 1px solid var(--dp-border);
    border-radius: 11px;
    outline: 0;
    padding: 9px 11px;
    background: var(--dp-surface);
    color: var(--dp-text);
    font-size: 12px;
  }

  .dp-field textarea { resize: vertical; }

  .dp-field input:focus,
  .dp-field select:focus,
  .dp-field textarea:focus {
    border-color: var(--dp-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--dp-primary) 12%, transparent);
  }

  .dp-feature-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
  }

  .dp-feature-heading > span {
    flex: 0 0 auto;
    padding: 5px 9px;
    border-radius: 999px;
    background: var(--dp-soft);
    color: var(--dp-primary);
    font-size: 10px;
    font-weight: 800;
  }

  .dp-feature-group { margin-top: 15px; }

  .dp-feature-group h4 {
    margin: 0 0 8px;
    color: var(--dp-muted);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: .08em;
  }

  .dp-feature-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  .dp-feature-option {
    min-width: 0;
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr) auto;
    align-items: center;
    gap: 9px;
    padding: 10px;
    border: 1px solid var(--dp-border);
    border-radius: 13px;
    background: var(--dp-surface);
    text-align: left;
    cursor: pointer;
  }

  .dp-feature-option.enabled {
    border-color: color-mix(in srgb, var(--dp-primary) 38%, var(--dp-border));
    background: var(--dp-soft);
  }

  .dp-feature-icon {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    background: var(--dp-card);
    color: var(--dp-primary);
    font-weight: 800;
    font-size: 12px;
  }

  .dp-feature-copy { min-width: 0; }

  .dp-feature-copy strong,
  .dp-feature-copy small {
    display: block;
  }

  .dp-feature-copy strong { font-size: 11px; }

  .dp-feature-copy small {
    margin-top: 3px;
    color: var(--dp-muted);
    font-size: 9px;
    line-height: 1.35;
  }

  .dp-toggle {
    width: 36px;
    height: 21px;
    flex: 0 0 auto;
    padding: 2px;
    border: 0;
    border-radius: 999px;
    background: color-mix(in srgb, var(--dp-muted) 28%, transparent);
    transition: .18s ease;
  }

  .dp-toggle i {
    display: block;
    width: 17px;
    height: 17px;
    border-radius: 999px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(15, 23, 42, .18);
    transition: .18s ease;
  }

  .dp-toggle.enabled { background: var(--dp-primary); }

  .dp-toggle.enabled i { transform: translateX(15px); }

  .dp-large-toggle {
    width: 44px;
    height: 25px;
    cursor: pointer;
  }

  .dp-large-toggle i {
    width: 21px;
    height: 21px;
  }

  .dp-large-toggle.enabled i { transform: translateX(19px); }

  .dp-status-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
  }

  .dp-option-list {
    flex: 1;
    overflow: auto;
    padding: 12px;
  }

  .dp-option-list > button {
    width: 100%;
    display: grid;
    grid-template-columns: 36px minmax(0, 1fr) 24px;
    align-items: center;
    gap: 10px;
    padding: 11px;
    border: 0;
    border-radius: 13px;
    background: transparent;
    text-align: left;
    cursor: pointer;
  }

  .dp-option-list > button:hover,
  .dp-option-list > button.active {
    background: var(--dp-soft);
  }

  .dp-option-list > button > span {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 11px;
    background: var(--dp-card);
    color: var(--dp-primary);
    font-weight: 800;
  }

  .dp-option-list strong,
  .dp-option-list small {
    display: block;
  }

  .dp-option-list strong { font-size: 12px; }

  .dp-option-list small {
    margin-top: 3px;
    color: var(--dp-muted);
    font-size: 10px;
  }

  .dp-option-list > button > i {
    color: var(--dp-primary);
    font-style: normal;
    font-weight: 900;
  }

  .dp-toast {
    position: fixed;
    z-index: 1200;
    top: 18px;
    right: 18px;
    max-width: min(390px, calc(100vw - 36px));
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 11px 13px;
    border-radius: 13px;
    color: #fff;
    box-shadow: 0 14px 35px rgba(15, 23, 42, .2);
    font-size: 12px;
  }

  .dp-toast.success { background: #15803d; }
  .dp-toast.error { background: #b91c1c; }
  .dp-toast.info { background: #1d4ed8; }

  .dp-toast button {
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-size: 18px;
  }

  .dp-empty,
  .dp-loading {
    min-height: 330px;
    display: grid;
    place-items: center;
    align-content: center;
    padding: 30px;
    text-align: center;
    border: 1px dashed var(--dp-border);
    border-radius: 17px;
    background: var(--dp-card);
  }

  .dp-empty-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: var(--dp-soft);
    color: var(--dp-primary);
    font-size: 20px;
  }

  .dp-empty h3,
  .dp-loading h2 {
    margin: 13px 0 0;
    font-size: 15px;
  }

  .dp-empty p,
  .dp-loading p {
    max-width: 420px;
    margin: 6px 0 0;
    color: var(--dp-muted);
    font-size: 12px;
    line-height: 1.55;
  }

  .dp-spinner {
    width: 29px;
    height: 29px;
    border: 3px solid var(--dp-border);
    border-top-color: var(--dp-primary);
    border-radius: 999px;
    animation: dp-spin .75s linear infinite;
  }

  @keyframes dp-spin { to { transform: rotate(360deg); } }

  @media (max-width: 860px) {
    .dp-summary-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .dp-analytics-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 640px) {
    .dp-toolbar {
      grid-template-columns: minmax(0, 1fr) 40px 40px 40px;
    }

    .dp-primary-action,
    .dp-icon-action {
      width: 40px;
      height: 40px;
    }

    .dp-summary-grid { gap: 7px; }

    .dp-summary-grid article { padding: 11px; }

    .dp-card-grid { grid-template-columns: 1fr; }

    .dp-overlay {
      align-items: flex-end;
    }

    .dp-sheet,
    .dp-small-sheet {
      width: 100%;
      height: min(92dvh, 820px);
      border-left: 0;
      border-top: 1px solid var(--dp-border);
      border-radius: 20px 20px 0 0;
    }

    .dp-field-grid,
    .dp-three-columns,
    .dp-feature-grid {
      grid-template-columns: 1fr;
    }

    .dp-feature-option {
      grid-template-columns: 34px minmax(0, 1fr) auto;
    }

    .dp-sheet-footer {
      padding-bottom: max(14px, env(safe-area-inset-bottom));
    }
  }

  @media (max-width: 430px) {
    .dp-summary-grid { grid-template-columns: 1fr 1fr; }

    .dp-summary-grid article:nth-child(3),
    .dp-summary-grid article:nth-child(4) {
      display: none;
    }

    .dp-plan-card > footer {
      align-items: flex-end;
    }

    .dp-plan-card > footer > div {
      flex-direction: column;
    }
  }
`;function u2(a){return d$(),null}var u3=["layout"];function u4(){return(u4=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function u5(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}var u6=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?u5(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):u5(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({accessibilityLayer:!0,stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index",layout:"radial",responsive:!1,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"},oB),u7=(0,M.forwardRef)(function(a,b){var c,d=pu(a.categoricalChartProps,u6),{layout:e}=d,f=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(d,u3),{chartName:g,defaultTooltipEventType:h,validateTooltipEventTypes:i,tooltipPayloadSearcher:j}=a;return M.createElement(oK,{preloadedState:{options:{chartName:g,defaultTooltipEventType:h,validateTooltipEventTypes:i,tooltipPayloadSearcher:j,eventEmitter:void 0}},reduxStoreName:null!=(c=d.id)?c:g},M.createElement(oL,{chartData:d.data}),M.createElement(oO,{layout:e,margin:d.margin}),M.createElement(oQ,{throttleDelay:d.throttleDelay,throttledEvents:d.throttledEvents}),M.createElement(oP,{baseValue:void 0,accessibilityLayer:d.accessibilityLayer,barCategoryGap:d.barCategoryGap,maxBarSize:d.maxBarSize,stackOffset:d.stackOffset,barGap:d.barGap,barSize:d.barSize,syncId:d.syncId,syncMethod:d.syncMethod,className:d.className,reverseStackOrder:d.reverseStackOrder}),M.createElement(u2,{cx:d.cx,cy:d.cy,startAngle:d.startAngle,endAngle:d.endAngle,innerRadius:d.innerRadius,outerRadius:d.outerRadius}),M.createElement(ps,u4({},f,{ref:b})))});function u8(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function u9(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?u8(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):u8(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var va=["item"],vb=u9(u9({},u6),{},{layout:"centric",startAngle:0,endAngle:360}),vc=(0,M.forwardRef)((a,b)=>{var c=pu(a,vb);return M.createElement(u7,{chartName:"PieChart",defaultTooltipEventType:"item",validateTooltipEventTypes:va,tooltipPayloadSearcher:co,categoricalChartProps:c,ref:b})}),vd=a=>a.graphicalItems.polarItems,ve=dV([f6,f7],kc),vf=dV([vd,j9,ve],kf),vg=dV([vf],kk),vh=dV([vg,eU],kn),vi=dV([vh,j9,vf],kp);dV([vh,j9,vf],(a,b,c)=>c.length>0?a.flatMap(a=>c.flatMap(c=>{var d;return{value:ef(a,null!=(d=b.dataKey)?d:c.dataKey),errorDomain:[]}})).filter(Boolean):(null==b?void 0:b.dataKey)!=null?a.map(a=>({value:ef(a,b.dataKey),errorDomain:[]})):a.map(a=>({value:a,errorDomain:[]})));var vj=()=>void 0,vk=dV([vh,j9,vf,kJ,f6,eY],kL),vl=dV([j9,kG,kH,vj,vk,vj,eN,f6],k0),vm=dV([j9,eN,vh,vi,fF,f6,vl],k3),vn=dV([vm,ka,k5],k6),vo=dV([j9,vm,vn,f6],k8);function vp(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function vq(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?vp(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):vp(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}dV([k5,vo],gg);var vr=dV([vd,(a,b)=>b],(a,b)=>a.filter(a=>"pie"===a.type).find(a=>a.id===b)),vs=[],vt=(a,b,c)=>(null==c?void 0:c.length)===0?vs:c,vu=dV([eU,vr,vt],(a,b,c)=>{var d,{chartData:e}=a;if(null!=b&&((d=(null==b?void 0:b.data)!=null&&b.data.length>0?b.data:e)&&d.length||null==c||(d=c.map(a=>vq(vq({},b.presentationProps),a.props))),null!=d))return d}),vv=dV([vu,vr,vt],(a,b,c)=>{if(null!=a&&null!=b)return a.map((a,d)=>{var e,f,g=ef(a,b.nameKey,b.name);return f=null!=c&&null!=(e=c[d])&&null!=(e=e.props)&&e.fill?c[d].props.fill:"object"==typeof a&&null!=a&&"fill"in a?a.fill:b.fill,{value:er(g,b.dataKey),color:f,payload:a,type:b.legendType}})}),vw=dV([vu,vr,vt,eC],(a,b,c,d)=>{if(null!=b&&null!=a)return function(a){var b,c,d,{pieSettings:e,displayedData:f,cells:g,offset:h}=a,{cornerRadius:i,startAngle:j,endAngle:k,dataKey:l,nameKey:m,tooltipType:n}=e,o=Math.abs(e.minAngle),p=W(k-j)*Math.min(Math.abs(k-j),360),q=Math.abs(p),r=f.length<=1?0:null!=(b=e.paddingAngle)?b:0,s=f.filter(a=>0!==ef(a,l,0)).length,t=f.reduce((a,b)=>{var c=ef(b,l,0);return a+(Z(c)?c:0)},0),u=o>0&&t>0&&f.some(a=>{var b=ef(a,l,0),c=(Z(b)?b:0)/t;return 0!==b&&c*q<o})?o:0,v=q-s*u-(q>=360?s:s-1)*r;return t>0&&(c=f.map((a,b)=>{var c,f=ef(a,l,0),k=ef(a,m,b),o=((a,b,c)=>{var d,{top:e,left:f,width:g,height:h}=b,i=fP(g,h),j=f+ab(a.cx,g,g/2),k=e+ab(a.cy,h,h/2),l=ab(a.innerRadius,i,0);return{cx:j,cy:k,innerRadius:l,outerRadius:(d=a.outerRadius,"function"==typeof d?ab(d(c),i,.8*i):ab(d,i,.8*i)),maxRadius:a.maxRadius||Math.sqrt(g*g+h*h)/2}})(e,h,a),q=(Z(f)?f:0)/t,s=vE(vE({},a),g&&g[b]&&g[b].props),w=null!=s&&"fill"in s&&"string"==typeof s.fill?s.fill:e.fill,x=(c=b?d.endAngle+W(p)*r*(0!==f):j)+W(p)*((0!==f?u:0)+q*v),y=(c+x)/2,z=(o.innerRadius+o.outerRadius)/2,A=[{name:k,value:f,payload:s,dataKey:l,type:n,color:w,fill:w,graphicalItemId:e.id}],B=fO(o.cx,o.cy,z,y);return d=vE(vE(vE(vE({},e.presentationProps),{},{percent:q,cornerRadius:"string"==typeof i?parseFloat(i):i,name:k,tooltipPayload:A,midAngle:y,middleRadius:z,tooltipPosition:B},s),o),{},{value:f,dataKey:l,startAngle:c,endAngle:x,payload:s,paddingAngle:0!==f?W(p)*r:0})})),c}({offset:d,pieSettings:b,displayedData:a,cells:c})}),vx=["key"],vy=["onMouseEnter","onClick","onMouseLeave"],vz=["id"],vA=["id"];function vB(){return(vB=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function vC(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function vD(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function vE(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?vD(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):vD(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function vF(a){var b=(0,M.useMemo)(()=>tf(a.children,s$),[a.children]),c=d2(c=>vv(c,a.id,b));return null==c?null:M.createElement(ug,{legendPayload:c})}var vG=M.memo(a=>{var{dataKey:b,nameKey:c,sectors:d,stroke:e,strokeWidth:f,fill:g,name:h,hide:i,tooltipType:j,id:k,activeShape:l}=a,m=function(a){if(null!=a&&"boolean"!=typeof a&&"function"!=typeof a){if(M.isValidElement(a)){var b,c=null==(b=a.props)?void 0:b.fill;return"string"==typeof c?c:void 0}var{fill:d}=a;return"string"==typeof d?d:void 0}}(l),n={dataDefinedOnItem:d.map(a=>{var b=a.tooltipPayload;return null==m||null==b?b:b.map(a=>vE(vE({},a),{},{color:m,fill:m}))}),getPosition:a=>{var b;return null==(b=d[Number(a)])?void 0:b.tooltipPosition},settings:{stroke:e,strokeWidth:f,fill:g,dataKey:b,nameKey:c,name:er(h,b),hide:i,type:j,color:g,unit:"",graphicalItemId:k}};return M.createElement(tX,{tooltipEntrySettings:n})});function vH(a){var{sectors:b,props:c,showLabels:d}=a,{label:e,labelLine:f,dataKey:g}=c;if(!d||!e||!b)return null;var h=oX(c),i=oY(e),j=oY(f),k="object"==typeof e&&"offsetRadius"in e&&"number"==typeof e.offsetRadius&&e.offsetRadius||20,l=b.map((a,b)=>{var c,d,l=(a.startAngle+a.endAngle)/2,m=fO(a.cx,a.cy,a.outerRadius+k,l),n=vE(vE(vE(vE({},h),a),{},{stroke:"none"},i),{},{index:b,textAnchor:(c=m.x)>(d=a.cx)?"start":c<d?"end":"middle"},m),o=vE(vE(vE(vE({},h),a),{},{fill:"none",stroke:a.fill},j),{},{index:b,points:[fO(a.cx,a.cy,a.outerRadius,l),m],key:"line"});return M.createElement(qf,{zIndex:fQ.label,key:"label-".concat(a.startAngle,"-").concat(a.endAngle,"-").concat(a.midAngle,"-").concat(b)},M.createElement(pR,null,f&&((a,b)=>{if(M.isValidElement(a))return M.cloneElement(a,b);if("function"==typeof a)return a(b);var c=P("recharts-pie-label-line","boolean"!=typeof a?a.className:""),{key:d}=b,e=vC(b,vx);return M.createElement(si,vB({},e,{type:"linear",className:c}))})(f,o),((a,b,c)=>{if(M.isValidElement(a))return M.cloneElement(a,b);var d=c;if("function"==typeof a&&(d=a(b),M.isValidElement(d)))return d;var e=P("recharts-pie-label-text",qA(a));return M.createElement(qd,vB({},b,{alignmentBaseline:"middle",className:e}),d)})(e,n,ef(a,g))))});return M.createElement(pR,{className:"recharts-pie-labels"},l)}function vI(a){var{sectors:b,props:c,showLabels:d}=a,{label:e}=c;return"object"==typeof e&&null!=e&&"position"in e?M.createElement(s9,{label:e}):M.createElement(vH,{sectors:b,props:c,showLabels:d})}function vJ(a){var{sectors:b,activeShape:c,inactiveShape:d,allOtherPieProps:e,shape:f,id:g}=a,h=d2(mC),i=d2(mE),j=d2(mF),{onMouseEnter:k,onClick:l,onMouseLeave:m}=e,n=vC(e,vy),o=tU(k,e.dataKey,g),p=tV(m),q=tW(l,e.dataKey,g);return null==b||0===b.length?null:M.createElement(M.Fragment,null,b.map((a,k)=>{if((null==a?void 0:a.startAngle)===0&&(null==a?void 0:a.endAngle)===0&&1!==b.length)return null;var l=null==j||j===g,m=String(k)===h&&(null==i||e.dataKey===i)&&l,r=c&&m?c:h?d:null,s=vE(vE({},a),{},{stroke:a.stroke,tabIndex:-1,[ey]:k,[ez]:g});return M.createElement(pR,vB({key:"sector-".concat(null==a?void 0:a.startAngle,"-").concat(null==a?void 0:a.endAngle,"-").concat(a.midAngle,"-").concat(k),tabIndex:-1,className:"recharts-pie-sector"},qz(n,a,k),{onMouseEnter:o(a,k),onMouseLeave:p(a,k),onClick:q(a,k)}),M.createElement(tQ,vB({option:null!=f?f:r,index:k,shapeType:"sector",isActive:m},s)))}))}function vK(a){var{showLabels:b,sectors:c,children:d}=a,e=(0,M.useMemo)(()=>b&&c?c.map(a=>({value:a.value,payload:a.payload,clockWise:!1,parentViewBox:void 0,viewBox:{cx:a.cx,cy:a.cy,innerRadius:a.innerRadius,outerRadius:a.outerRadius,startAngle:a.startAngle,endAngle:a.endAngle,clockWise:!1},fill:a.fill})):[],[c,b]);return M.createElement(s7,{value:b?e:void 0},d)}function vL(a){var{props:b,previousSectorsRef:c,id:d}=a,{sectors:e,isAnimationActive:f,animationBegin:g,animationDuration:h,animationEasing:i,activeShape:j,inactiveShape:k,onAnimationStart:l,onAnimationEnd:m}=b,n=su(b,"recharts-pie-"),o=c.current,[p,q]=(0,M.useState)(!1),r=(0,M.useCallback)(()=>{"function"==typeof m&&m(),q(!1)},[m]),s=(0,M.useCallback)(()=>{"function"==typeof l&&l(),q(!0)},[l]);return M.createElement(vK,{showLabels:!p,sectors:e},M.createElement(st,{animationId:n,begin:g,duration:h,isActive:f,easing:i,onAnimationStart:s,onAnimationEnd:r,key:n},a=>{var f,g=[],h=e&&e[0],i=null!=(f=null==h?void 0:h.startAngle)?f:0;return null==e||e.forEach((b,c)=>{var d=o&&o[c],e=c>0?T()(b,"paddingAngle",0):0;if(d){var f=ad(d.endAngle-d.startAngle,b.endAngle-b.startAngle,a),h=vE(vE({},b),{},{startAngle:i+e,endAngle:i+f+e});g.push(h),i=h.endAngle}else{var{endAngle:j,startAngle:k}=b,l=ad(0,j-k,a),m=vE(vE({},b),{},{startAngle:i+e,endAngle:i+l+e});g.push(m),i=m.endAngle}}),c.current=g,M.createElement(pR,null,M.createElement(vJ,{sectors:g,activeShape:j,inactiveShape:k,allOtherPieProps:b,shape:b.shape,id:d}))}),M.createElement(vI,{showLabels:!p,sectors:e,props:b}),b.children)}var vM={animationBegin:400,animationDuration:1500,animationEasing:"ease",cx:"50%",cy:"50%",dataKey:"value",endAngle:360,fill:"#808080",hide:!1,innerRadius:0,isAnimationActive:"auto",label:!1,labelLine:!0,legendType:"rect",minAngle:0,nameKey:"name",outerRadius:"80%",paddingAngle:0,rootTabIndex:0,startAngle:0,stroke:"#fff",zIndex:fQ.area};function vN(a){var{id:b}=a,c=vC(a,vz),{hide:d,className:e,rootTabIndex:f}=a,g=(0,M.useMemo)(()=>tf(a.children,s$),[a.children]),h=d2(a=>vw(a,b,g)),i=(0,M.useRef)(null),j=P("recharts-pie",e);return d||null==h?(i.current=null,M.createElement(pR,{tabIndex:f,className:j})):M.createElement(qf,{zIndex:a.zIndex},M.createElement(vG,{dataKey:a.dataKey,nameKey:a.nameKey,sectors:h,stroke:a.stroke,strokeWidth:a.strokeWidth,fill:a.fill,name:a.name,hide:a.hide,tooltipType:a.tooltipType,id:b,activeShape:a.activeShape}),M.createElement(pR,{tabIndex:f,className:j},M.createElement(vL,{props:vE(vE({},c),{},{sectors:h}),previousSectorsRef:i,id:b})))}var vO=function(a){var b=pu(a,vM),{id:c}=b,d=vC(b,vA),e=oX(d);return M.createElement(uj,{id:c,type:"pie"},a=>M.createElement(M.Fragment,null,M.createElement(ul,{type:"pie",id:a,data:d.data,dataKey:d.dataKey,hide:d.hide,angleAxisId:0,radiusAxisId:0,name:d.name,nameKey:d.nameKey,tooltipType:d.tooltipType,legendType:d.legendType,fill:d.fill,cx:d.cx,cy:d.cy,startAngle:d.startAngle,endAngle:d.endAngle,paddingAngle:d.paddingAngle,minAngle:d.minAngle,innerRadius:d.innerRadius,outerRadius:d.outerRadius,cornerRadius:d.cornerRadius,presentationProps:e,maxRadius:b.maxRadius}),M.createElement(vF,vB({},d,{id:a})),M.createElement(vN,vB({},d,{id:a}))))};vO.displayName="Pie";let vP=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2"],vQ=(a,b="GHS")=>new Intl.NumberFormat("en-GH",{style:"currency",currency:b,maximumFractionDigits:0}).format(Number(a||0)),vR=a=>{if(!a)return"Not set";let b=new Date(a);return Number.isNaN(b.getTime())?"Not set":new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(b)},vS=a=>{if(!a)return 0;let b=new Date(a).getTime();return Number.isFinite(b)?b:0},vT=a=>{let b=String(a||"").toLowerCase();return["active","trial"].includes(b)?"green":["past_due","expired"].includes(b)?"orange":["cancelled","suspended"].includes(b)?"red":"gray"},vU=(a,b)=>{let c=new Map;return a.forEach(a=>{let d=String(b(a)||"Unknown").trim()||"Unknown";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)};function vV({navigate:a}){let{accountId:b,authenticated:c,loading:d}=(0,uM.F)(),{settings:e}=(0,uN.t)(),f=e?.primaryColor||"var(--primary-color, #2563eb)",[g,h]=(0,M.useState)([]),[i,j]=(0,M.useState)([]),[k,l]=(0,M.useState)(!0),[m,n]=(0,M.useState)(!1),[o,p]=(0,M.useState)(""),[q,r]=(0,M.useState)("cards"),[s,t]=(0,M.useState)(""),[u,v]=(0,M.useState)("all"),[w,x]=(0,M.useState)("all"),[y,z]=(0,M.useState)("all"),[A,B]=(0,M.useState)(!1),C=async(a=!1)=>{try{a?n(!0):l(!0),p("");let[b,c]=await Promise.all([(0,uL.uE)("/billing/subscriptions").catch(()=>[]),(0,uL.uE)("/billing/plans?includeInactive=true").catch(()=>[])]);h(Array.isArray(b)?b:[]),j(Array.isArray(c)?c:[])}catch(a){p(a?.message||"Could not load subscriptions.")}finally{l(!1),n(!1)}},D=(0,M.useMemo)(()=>new Map(i.map(a=>[a.id,a.name||a.code])),[i]),E=(0,M.useMemo)(()=>{let a=s.trim().toLowerCase(),b=Date.now(),c=b+2592e6;return g.filter(d=>{let e=d.account?.name||d.accountId||"",f=d.plan?.name||(d.planId?D.get(d.planId):"")||"",g=`${e} ${f} ${d.status} ${d.billingCycle}`.toLowerCase(),h="all"===u||String(d.status||"").toLowerCase()===u,i="all"===w||String(d.billingCycle||"").toLowerCase()===w,j="all"===y||d.planId===y||d.plan?.id===y,k=!a||g.includes(a),l=vS(d.currentPeriodEnd||d.trialEndsAt||d.nextBillingDate),m=!A||!!l&&l>=b&&l<=c;return h&&i&&j&&k&&m}).sort((a,b)=>vS(b.updatedAt||b.createdAt||b.currentPeriodEnd)-vS(a.updatedAt||a.createdAt||a.currentPeriodEnd))},[g,s,u,w,y,A,D]),F=g.filter(a=>["active","trial"].includes(String(a.status||"").toLowerCase())).length,G=g.filter(a=>["past_due","expired","suspended"].includes(String(a.status||"").toLowerCase())).length,H=g.filter(a=>"cancelled"===String(a.status||"").toLowerCase()).length,I=(0,M.useMemo)(()=>vU(g,a=>a.status),[g]),J=(0,M.useMemo)(()=>vU(g,a=>a.billingCycle||"monthly"),[g]),K=(0,M.useMemo)(()=>vU(g,a=>a.plan?.name||(a.planId?D.get(a.planId):void 0)||"No plan"),[g,D]),N=(0,M.useMemo)(()=>{let a=((a=6)=>{let b=new Date;return Array.from({length:a},(c,d)=>{let e=new Date(b.getFullYear(),b.getMonth()-(a-1-d),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(e)})})(6),b=new Map(a.map(a=>[a,0]));return g.forEach(a=>{let c,d=(c=vS(a.createdAt||a.updatedAt||a.currentPeriodStart))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(c)):"Unknown";b.has(d)&&b.set(d,(b.get(d)||0)+1)}),a.map(a=>({label:a,subscriptions:b.get(a)||0}))},[g]),O=(0,M.useMemo)(()=>g.filter(a=>["active","trial"].includes(String(a.status||"").toLowerCase())).reduce((a,b)=>{let c=b.plan||i.find(a=>a.id===b.planId);return c?"yearly"===String(b.billingCycle||"monthly").toLowerCase()?a+Number(c.priceYearly||0)/12:a+Number(c.priceMonthly||0):a},0),[g,i]);return k||d?(0,L.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:v1}),(0,L.jsx)(vX,{title:"Loading subscriptions...",text:"Preparing subscription status, renewals and analytics."})]}):c&&b?(0,L.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:v1}),(0,L.jsx)(vW,{eyebrow:"SaaS control",title:"Subscriptions",description:"Track trials, active subscriptions, renewals, billing cycles and subscription risk.",viewMode:q,onViewMode:r,onRefresh:()=>C(!0),refreshing:m,actions:(0,L.jsx)("button",{className:"devmod-primary-btn",onClick:()=>a?.("plans"),type:"button",children:"Manage Plans"})}),o&&(0,L.jsx)("div",{className:"devmod-error",children:o}),(0,L.jsxs)("section",{className:"devmod-stat-grid",children:[(0,L.jsx)(vY,{label:"Total",value:g.length,detail:`${E.length} after filters`,icon:"\uD83D\uDD01"}),(0,L.jsx)(vY,{label:"Active/Trial",value:F,detail:"Currently enabled",icon:"✅"}),(0,L.jsx)(vY,{label:"Risky",value:G,detail:"Past due / expired / suspended",icon:"⚠️"}),(0,L.jsx)(vY,{label:"MRR Estimate",value:vQ(O),detail:`${H} cancelled`,icon:"\uD83D\uDCC8"})]}),(0,L.jsxs)("section",{className:"devmod-filters",children:[(0,L.jsx)("input",{value:s,onChange:a=>t(a.target.value),placeholder:"Search account, plan, status..."}),(0,L.jsxs)("select",{value:u,onChange:a=>v(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All statuses"}),(0,L.jsx)("option",{value:"trial",children:"Trial"}),(0,L.jsx)("option",{value:"active",children:"Active"}),(0,L.jsx)("option",{value:"past_due",children:"Past due"}),(0,L.jsx)("option",{value:"expired",children:"Expired"}),(0,L.jsx)("option",{value:"cancelled",children:"Cancelled"}),(0,L.jsx)("option",{value:"suspended",children:"Suspended"})]}),(0,L.jsxs)("select",{value:w,onChange:a=>x(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All cycles"}),(0,L.jsx)("option",{value:"monthly",children:"Monthly"}),(0,L.jsx)("option",{value:"yearly",children:"Yearly"}),(0,L.jsx)("option",{value:"manual",children:"Manual"})]}),(0,L.jsxs)("select",{value:y,onChange:a=>z(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All plans"}),i.map(a=>(0,L.jsx)("option",{value:a.id,children:a.name},a.id))]}),(0,L.jsxs)("label",{className:"devmod-check",children:[(0,L.jsx)("input",{type:"checkbox",checked:A,onChange:a=>B(a.target.checked)})," Ending in 30 days"]}),(0,L.jsx)("button",{type:"button",onClick:()=>{t(""),v("all"),x("all"),z("all"),B(!1)},children:"Reset"})]}),"analytics"===q?(0,L.jsxs)("section",{className:"devmod-chart-grid",children:[(0,L.jsx)(v_,{title:"Subscription starts",description:"Subscriptions created or updated in the last six months.",children:(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(pA,{data:N,children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,allowDecimals:!1,fontSize:11}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"subscriptions",fill:"var(--dev-primary)",radius:[12,12,0,0]})]})})}),(0,L.jsxs)(v_,{title:"Status breakdown",description:"Subscription health by current status.",children:[(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:I,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:I.map((a,b)=>(0,L.jsx)(s$,{fill:vP[b%vP.length]},b))})]})}),(0,L.jsx)(v0,{rows:I})]}),(0,L.jsx)(v_,{title:"Plan adoption",description:"Which packages clients are subscribed to.",children:(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(pA,{data:K,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",allowDecimals:!1,tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{type:"category",dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11,width:95}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--dev-primary)",radius:[0,12,12,0]})]})})}),(0,L.jsxs)(v_,{title:"Billing cycles",description:"Monthly, yearly and manual subscription mix.",children:[(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:J,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:J.map((a,b)=>(0,L.jsx)(s$,{fill:vP[b%vP.length]},b))})]})}),(0,L.jsx)(v0,{rows:J})]})]}):"table"===q?(0,L.jsxs)("section",{className:"devmod-table-card",children:[(0,L.jsx)("div",{className:"devmod-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Account"}),(0,L.jsx)("th",{children:"Plan"}),(0,L.jsx)("th",{children:"Status"}),(0,L.jsx)("th",{children:"Cycle"}),(0,L.jsx)("th",{children:"Period End"}),(0,L.jsx)("th",{children:"Next Billing"})]})}),(0,L.jsx)("tbody",{children:E.map(a=>(0,L.jsxs)("tr",{children:[(0,L.jsx)("td",{children:(0,L.jsx)("strong",{children:a.account?.name||a.accountId})}),(0,L.jsx)("td",{children:a.plan?.name||(a.planId?D.get(a.planId):"No plan")||"No plan"}),(0,L.jsx)("td",{children:(0,L.jsx)(vZ,{tone:vT(a.status),children:a.status})}),(0,L.jsx)("td",{children:a.billingCycle||"monthly"}),(0,L.jsx)("td",{children:vR(a.currentPeriodEnd||a.trialEndsAt)}),(0,L.jsx)("td",{children:vR(a.nextBillingDate)})]},a.id))})]})}),!E.length&&(0,L.jsx)(v$,{text:"No subscriptions match your filters."})]}):(0,L.jsxs)("section",{className:"devmod-card-grid",children:[E.map(b=>{let c=b.plan||i.find(a=>a.id===b.planId);return(0,L.jsxs)("article",{className:"devmod-record-card",children:[(0,L.jsxs)("div",{className:"devmod-record-top",children:[(0,L.jsx)("span",{className:"devmod-avatar",children:"\uD83D\uDD01"}),(0,L.jsx)(vZ,{tone:vT(b.status),children:b.status})]}),(0,L.jsx)("h3",{children:b.account?.name||"Client account"}),(0,L.jsxs)("p",{children:[c?.name||"No plan linked"," \xb7 ",b.billingCycle||"monthly"]}),(0,L.jsxs)("div",{className:"devmod-meta-grid",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Period end"}),vR(b.currentPeriodEnd||b.trialEndsAt)]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Next billing"}),vR(b.nextBillingDate)]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Estimate"}),vQ("yearly"===String(b.billingCycle).toLowerCase()?Number(c?.priceYearly||0):Number(c?.priceMonthly||0),c?.currency||"GHS")]})]}),b.cancelReason&&(0,L.jsx)("p",{className:"devmod-note",children:b.cancelReason}),(0,L.jsx)("button",{type:"button",onClick:()=>a?.("invoices"),children:"View billing records"})]},b.id)}),!E.length&&(0,L.jsx)(v$,{text:"No subscriptions match your filters."})]})]}):(0,L.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:v1}),(0,L.jsx)(vX,{title:"Developer access required",text:"Sign in with a developer account to manage subscriptions."})]})}function vW({eyebrow:a,title:b,description:c,viewMode:d,onViewMode:e,onRefresh:f,refreshing:g,actions:h}){return(0,L.jsxs)("section",{className:"devmod-header",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{children:a}),(0,L.jsx)("h1",{children:b}),(0,L.jsx)("p",{children:c})]}),(0,L.jsxs)("div",{className:"devmod-header-actions",children:[(0,L.jsxs)("div",{className:"devmod-switch",children:[(0,L.jsx)("button",{className:"cards"===d?"active":"",onClick:()=>e("cards"),type:"button",children:"Cards"}),(0,L.jsx)("button",{className:"table"===d?"active":"",onClick:()=>e("table"),type:"button",children:"Table"}),(0,L.jsx)("button",{className:"analytics"===d?"active":"",onClick:()=>e("analytics"),type:"button",children:"Charts"})]}),h,(0,L.jsx)("button",{className:"devmod-soft-btn",type:"button",onClick:f,disabled:g,children:g?"Refreshing...":"Refresh"})]})]})}function vX({title:a,text:b}){return(0,L.jsxs)("section",{className:"devmod-state",children:[(0,L.jsx)("div",{className:"devmod-spinner"}),(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b})]})}function vY({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"devmod-stat",children:[(0,L.jsxs)("span",{children:[a,(0,L.jsx)("b",{children:d})]}),(0,L.jsx)("strong",{children:b}),(0,L.jsx)("small",{children:c})]})}function vZ({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`devmod-chip ${b}`,children:a})}function v$({text:a}){return(0,L.jsx)("div",{className:"devmod-empty",children:a})}function v_({title:a,description:b,children:c}){return(0,L.jsxs)("section",{className:"devmod-chart-card",children:[(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function v0({rows:a}){return(0,L.jsx)("div",{className:"devmod-legend",children:a.map((a,b)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("i",{style:{background:vP[b%vP.length]}}),a.label,": ",a.value]},a.label))})}let v1=`
@keyframes devmodSpin{to{transform:rotate(360deg)}}.devmod-page{min-height:100dvh;width:100%;max-width:100%;padding:8px;padding-bottom:max(28px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--dev-primary) 10%,transparent),transparent 34rem),var(--bg,#f8fafc);color:var(--text,#0f172a);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);overflow-x:hidden}.devmod-page *{box-sizing:border-box}.devmod-page button,.devmod-page input,.devmod-page select{font:inherit;max-width:100%}.devmod-state{min-height:min(420px,calc(100dvh - 32px));display:grid;place-items:center;align-content:center;gap:10px;width:min(520px,100%);margin:0 auto;padding:22px;border-radius:28px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 24px 70px rgba(15,23,42,.08);text-align:center}.devmod-state h2{margin:0;font-size:clamp(18px,5vw,24px);font-weight:1000;letter-spacing:-.04em}.devmod-state p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.devmod-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--dev-primary) 18%,transparent);border-top-color:var(--dev-primary);animation:devmodSpin .8s linear infinite}.devmod-header{display:grid;gap:16px;border-radius:30px;padding:18px;color:#fff;background:radial-gradient(circle at 20% 10%,rgba(255,255,255,.18),transparent 20rem),linear-gradient(135deg,var(--dev-primary),#0f172a 72%);box-shadow:0 24px 70px rgba(15,23,42,.18);overflow:hidden}.devmod-header span{font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.14em;opacity:.82}.devmod-header h1{margin:8px 0 0;font-size:clamp(28px,8vw,44px);line-height:1.02;font-weight:1000;letter-spacing:-.07em}.devmod-header p{max-width:760px;margin:10px 0 0;font-size:13px;line-height:1.6;opacity:.9}.devmod-header-actions{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.devmod-switch{display:inline-flex;gap:5px;padding:5px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(14px)}.devmod-switch button{min-height:34px;border:0;border-radius:999px;padding:0 11px;background:transparent;color:rgba(255,255,255,.75);font-size:12px;font-weight:1000;cursor:pointer}.devmod-switch button.active{background:#fff;color:#0f172a;box-shadow:0 10px 24px rgba(15,23,42,.16)}.devmod-primary-btn,.devmod-soft-btn{min-height:40px;border:0;border-radius:999px;padding:0 13px;font-size:12px;font-weight:950;cursor:pointer}.devmod-primary-btn{background:#fff;color:#0f172a}.devmod-soft-btn{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);color:#fff}.devmod-error{margin-top:10px;padding:12px 14px;border-radius:20px;background:#fee2e2;color:#991b1b;font-size:13px;font-weight:850}.devmod-stat-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-stat{border:1px solid rgba(148,163,184,.22);border-radius:24px;padding:16px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-stat span{display:flex;justify-content:space-between;gap:10px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devmod-stat strong{display:block;margin-top:8px;font-size:clamp(24px,8vw,34px);line-height:1;font-weight:1000;letter-spacing:-.06em}.devmod-stat small{display:block;margin-top:8px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devmod-filters{display:grid;grid-template-columns:1fr;gap:8px;margin-top:10px;padding:10px;border-radius:24px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 18px 45px rgba(15,23,42,.05)}.devmod-filters input,.devmod-filters select{min-height:42px;width:100%;border:1px solid rgba(148,163,184,.3);border-radius:16px;padding:0 12px;background:#fff;color:#0f172a;font-size:13px;font-weight:800}.devmod-filters button{min-height:42px;border:0;border-radius:16px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:13px;font-weight:1000;cursor:pointer}.devmod-check{display:flex;align-items:center;gap:8px;min-height:42px;padding:0 12px;border-radius:16px;background:#f8fafc;color:#475569;font-size:12px;font-weight:900}.devmod-card-grid,.devmod-chart-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-record-card,.devmod-chart-card,.devmod-table-card{min-width:0;border:1px solid rgba(148,163,184,.22);border-radius:26px;padding:14px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-record-top{display:flex;align-items:center;justify-content:space-between;gap:10px}.devmod-avatar{width:42px;height:42px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:#fff;font-weight:1000}.devmod-record-card h3{margin:14px 0 0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-record-card p{margin:5px 0 0;color:var(--muted,#64748b);font-size:13px;line-height:1.45}.devmod-note{padding:10px;border-radius:16px;background:#fff7ed;color:#9a3412!important}.devmod-meta-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.devmod-meta-grid span{padding:10px;border-radius:16px;background:#f8fafc;color:#0f172a;font-size:12px;font-weight:850}.devmod-meta-grid b{display:block;color:var(--muted,#64748b);font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px}.devmod-record-card button{width:100%;min-height:40px;margin-top:14px;border:0;border-radius:999px;background:var(--dev-primary);color:#fff;font-size:12px;font-weight:1000;cursor:pointer}.devmod-chip{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border-radius:999px;font-size:11px;font-weight:1000;white-space:nowrap}.devmod-chip.green{background:#dcfce7;color:#166534}.devmod-chip.blue{background:#dbeafe;color:#1d4ed8}.devmod-chip.orange{background:#ffedd5;color:#c2410c}.devmod-chip.red{background:#fee2e2;color:#b91c1c}.devmod-chip.gray{background:#f1f5f9;color:#475569}.devmod-table-wrap{width:100%;overflow-x:auto}.devmod-table-wrap table{width:100%;min-width:850px;border-collapse:collapse}.devmod-table-wrap th{text-align:left;color:var(--muted,#64748b);font-size:11px;text-transform:uppercase;letter-spacing:.08em;padding:10px;border-bottom:1px solid rgba(148,163,184,.22)}.devmod-table-wrap td{padding:12px 10px;border-bottom:1px solid rgba(148,163,184,.16);font-size:13px}.devmod-table-wrap strong{font-weight:1000}.devmod-chart-card h2{margin:0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-chart-card p{margin:5px 0 10px;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.devmod-legend{display:flex;flex-wrap:wrap;gap:8px;padding-top:8px}.devmod-legend span{display:inline-flex;align-items:center;gap:6px;min-height:28px;border-radius:999px;padding:0 9px;background:#f8fafc;border:1px solid rgba(148,163,184,.18);color:#475569;font-size:11px;font-weight:900}.devmod-legend i{width:9px;height:9px;border-radius:999px}.devmod-empty{grid-column:1/-1;margin:0;padding:18px;border-radius:20px;background:#f8fafc;color:var(--muted,#64748b);font-size:13px;text-align:center;border:1px dashed rgba(148,163,184,.35)}@media(min-width:520px){.devmod-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-meta-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.devmod-filters{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(min-width:820px){.devmod-page{padding:14px}.devmod-header{padding:24px;grid-template-columns:1fr auto;align-items:end}.devmod-card-grid,.devmod-chart-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-filters{grid-template-columns:2fr repeat(4,1fr) auto}.devmod-stat-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
`,v2=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2"],v3=a=>{if(!a)return"Not set";let b=new Date(a);return Number.isNaN(b.getTime())?"Not set":new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(b)},v4=a=>{if(!a)return 0;let b=new Date(a).getTime();return Number.isFinite(b)?b:0},v5=(a,b)=>{let c=new Map;return a.forEach(a=>{let d=String(b(a)||"Unknown").trim()||"Unknown";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)},v6=a=>{let b=String(a||"").toLowerCase();return"active"===b?"green":"suspended"===b?"orange":"closed"===b?"red":"gray"};function v7({navigate:a}){let{accountId:b,authenticated:c,loading:d}=(0,uM.F)(),{settings:e}=(0,uN.t)(),f=e?.primaryColor||"var(--primary-color, #2563eb)",[g,h]=(0,M.useState)([]),[i,j]=(0,M.useState)(!0),[k,l]=(0,M.useState)(!1),[m,n]=(0,M.useState)(""),[o,p]=(0,M.useState)("cards"),[q,r]=(0,M.useState)(""),[s,t]=(0,M.useState)("all"),[u,v]=(0,M.useState)("all"),[w,x]=(0,M.useState)(""),[y,z]=(0,M.useState)(""),A=async(a=!1)=>{try{a?l(!0):j(!0),n("");let b=await (0,uL.uE)("/accounts").catch(()=>[]);h(Array.isArray(b)?b:[])}catch(a){n(a?.message||"Could not load client accounts.")}finally{j(!1),l(!1)}},B=(0,M.useMemo)(()=>Array.from(new Set(g.map(a=>a.country).filter(Boolean))).sort(),[g]),C=(0,M.useMemo)(()=>{let a=q.trim().toLowerCase(),b=w?new Date(w).getTime():0,c=y?new Date(y).setHours(23,59,59,999):0;return g.filter(d=>{let e=`${d.name||""} ${d.email||""} ${d.phone||""} ${d.country||""}`.toLowerCase(),f=v4(d.createdAt||d.updatedAt),g="all"===s||String(d.status||"active").toLowerCase()===s,h="all"===u||d.country===u,i=!a||e.includes(a);return g&&h&&i&&(!b||f>=b)&&(!c||f<=c)}).sort((a,b)=>v4(b.createdAt||b.updatedAt)-v4(a.createdAt||a.updatedAt))},[g,q,s,u,w,y]),D=g.filter(a=>"active"===String(a.status||"active").toLowerCase()).length,E=g.filter(a=>"suspended"===String(a.status||"").toLowerCase()).length,F=g.filter(a=>"closed"===String(a.status||"").toLowerCase()).length,G=(0,M.useMemo)(()=>v5(g,a=>a.status||"active"),[g]),H=(0,M.useMemo)(()=>v5(g,a=>a.country||"Unknown").slice(0,8),[g]),I=(0,M.useMemo)(()=>{let a=((a=6)=>{let b=new Date;return Array.from({length:a},(c,d)=>{let e=new Date(b.getFullYear(),b.getMonth()-(a-1-d),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(e)})})(6),b=new Map(a.map(a=>[a,0]));return g.forEach(a=>{let c,d=(c=v4(a.createdAt||a.updatedAt))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(c)):"Unknown";b.has(d)&&b.set(d,(b.get(d)||0)+1)}),a.map(a=>({label:a,accounts:b.get(a)||0}))},[g]);return i||d?(0,L.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:wg}),(0,L.jsx)(v9,{title:"Loading client accounts...",text:"Checking SaaS account records and preparing filters."})]}):c&&b?(0,L.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:wg}),(0,L.jsx)(v8,{eyebrow:"SaaS control",title:"Client Accounts",description:"Manage schools, owners and organizations using the platform. Switch between card, table and chart views.",viewMode:o,onViewMode:p,onRefresh:()=>A(!0),refreshing:k,actions:(0,L.jsx)("button",{className:"devmod-primary-btn",type:"button",onClick:()=>a?.("subscriptions"),children:"View Subscriptions"})}),m&&(0,L.jsx)("div",{className:"devmod-error",children:m}),(0,L.jsxs)("section",{className:"devmod-stat-grid",children:[(0,L.jsx)(wb,{label:"Total Accounts",value:g.length,detail:`${C.length} after filters`,icon:"\uD83C\uDFEB"}),(0,L.jsx)(wb,{label:"Active",value:D,detail:"Currently allowed",icon:"✅"}),(0,L.jsx)(wb,{label:"Suspended",value:E,detail:"Needs attention",icon:"⏸️"}),(0,L.jsx)(wb,{label:"Closed",value:F,detail:"Inactive clients",icon:"\uD83D\uDEAB"})]}),(0,L.jsxs)(wa,{children:[(0,L.jsx)("input",{value:q,onChange:a=>r(a.target.value),placeholder:"Search name, email, phone..."}),(0,L.jsxs)("select",{value:s,onChange:a=>t(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All statuses"}),(0,L.jsx)("option",{value:"active",children:"Active"}),(0,L.jsx)("option",{value:"suspended",children:"Suspended"}),(0,L.jsx)("option",{value:"closed",children:"Closed"})]}),(0,L.jsxs)("select",{value:u,onChange:a=>v(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All countries"}),B.map(a=>(0,L.jsx)("option",{value:a||"",children:a},a||""))]}),(0,L.jsx)("input",{type:"date",value:w,onChange:a=>x(a.target.value)}),(0,L.jsx)("input",{type:"date",value:y,onChange:a=>z(a.target.value)}),(0,L.jsx)("button",{type:"button",onClick:()=>{r(""),t("all"),v("all"),x(""),z("")},children:"Reset"})]}),"analytics"===o?(0,L.jsxs)("section",{className:"devmod-chart-grid",children:[(0,L.jsx)(we,{title:"Account growth",description:"New or updated client accounts over the last six months.",children:(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(pA,{data:I,children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"accounts",name:"Accounts",radius:[12,12,0,0],fill:"var(--dev-primary)"})]})})}),(0,L.jsxs)(we,{title:"Account status",description:"Breakdown of account status across the platform.",children:[(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:G,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:G.map((a,b)=>(0,L.jsx)(s$,{fill:v2[b%v2.length]},b))})]})}),(0,L.jsx)(wf,{rows:G})]}),(0,L.jsx)(we,{title:"Countries",description:"Client account distribution by country.",children:(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(pA,{data:H,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(rs,{type:"category",dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11,width:82}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",name:"Accounts",radius:[0,12,12,0],fill:"var(--dev-primary)"})]})})})]}):"table"===o?(0,L.jsxs)("section",{className:"devmod-table-card",children:[(0,L.jsx)("div",{className:"devmod-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Account"}),(0,L.jsx)("th",{children:"Contact"}),(0,L.jsx)("th",{children:"Country"}),(0,L.jsx)("th",{children:"Status"}),(0,L.jsx)("th",{children:"Created"})]})}),(0,L.jsx)("tbody",{children:C.map(a=>(0,L.jsxs)("tr",{children:[(0,L.jsx)("td",{children:(0,L.jsx)("strong",{children:a.name||"Unnamed account"})}),(0,L.jsx)("td",{children:a.email||a.phone||"—"}),(0,L.jsx)("td",{children:a.country||"—"}),(0,L.jsx)("td",{children:(0,L.jsx)(wc,{tone:v6(a.status),children:a.status||"active"})}),(0,L.jsx)("td",{children:v3(a.createdAt||a.updatedAt)})]},a.id))})]})}),!C.length&&(0,L.jsx)(wd,{text:"No accounts match your filters."})]}):(0,L.jsxs)("section",{className:"devmod-card-grid",children:[C.map(b=>(0,L.jsxs)("article",{className:"devmod-record-card",children:[(0,L.jsxs)("div",{className:"devmod-record-top",children:[(0,L.jsx)("span",{className:"devmod-avatar",children:String(b.name||"A").slice(0,1).toUpperCase()}),(0,L.jsx)(wc,{tone:v6(b.status),children:b.status||"active"})]}),(0,L.jsx)("h3",{children:b.name||"Unnamed account"}),(0,L.jsx)("p",{children:b.email||b.phone||"No contact saved"}),(0,L.jsxs)("div",{className:"devmod-meta-grid",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Country"}),b.country||"—"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Currency"}),b.currency||"GHS"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Created"}),v3(b.createdAt||b.updatedAt)]})]}),(0,L.jsx)("button",{type:"button",onClick:()=>a?.("subscriptions"),children:"Open subscription view"})]},b.id)),!C.length&&(0,L.jsx)(wd,{text:"No accounts match your filters."})]})]}):(0,L.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:wg}),(0,L.jsx)(v9,{title:"Developer access required",text:"Sign in with a developer account to manage client accounts."})]})}function v8({eyebrow:a,title:b,description:c,viewMode:d,onViewMode:e,onRefresh:f,refreshing:g,actions:h}){return(0,L.jsxs)("section",{className:"devmod-header",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{children:a}),(0,L.jsx)("h1",{children:b}),(0,L.jsx)("p",{children:c})]}),(0,L.jsxs)("div",{className:"devmod-header-actions",children:[(0,L.jsxs)("div",{className:"devmod-switch",children:[(0,L.jsx)("button",{className:"cards"===d?"active":"",onClick:()=>e("cards"),type:"button",children:"Cards"}),(0,L.jsx)("button",{className:"table"===d?"active":"",onClick:()=>e("table"),type:"button",children:"Table"}),(0,L.jsx)("button",{className:"analytics"===d?"active":"",onClick:()=>e("analytics"),type:"button",children:"Charts"})]}),h,(0,L.jsx)("button",{className:"devmod-soft-btn",type:"button",onClick:f,disabled:g,children:g?"Refreshing...":"Refresh"})]})]})}function v9({title:a,text:b}){return(0,L.jsxs)("section",{className:"devmod-state",children:[(0,L.jsx)("div",{className:"devmod-spinner"}),(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b})]})}function wa({children:a}){return(0,L.jsx)("section",{className:"devmod-filters",children:a})}function wb({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"devmod-stat",children:[(0,L.jsxs)("span",{children:[a,(0,L.jsx)("b",{children:d})]}),(0,L.jsx)("strong",{children:b}),(0,L.jsx)("small",{children:c})]})}function wc({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`devmod-chip ${b}`,children:a})}function wd({text:a}){return(0,L.jsx)("div",{className:"devmod-empty",children:a})}function we({title:a,description:b,children:c}){return(0,L.jsxs)("section",{className:"devmod-chart-card",children:[(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function wf({rows:a}){return(0,L.jsx)("div",{className:"devmod-legend",children:a.map((a,b)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("i",{style:{background:v2[b%v2.length]}}),a.label,": ",a.value]},a.label))})}let wg=`
@keyframes devmodSpin { to { transform: rotate(360deg); } }
.devmod-page{min-height:100dvh;width:100%;max-width:100%;padding:8px;padding-bottom:max(28px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--dev-primary) 10%,transparent),transparent 34rem),var(--bg,#f8fafc);color:var(--text,#0f172a);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);overflow-x:hidden}
.devmod-page *{box-sizing:border-box}.devmod-page button,.devmod-page input,.devmod-page select{font:inherit;max-width:100%}.devmod-page button{-webkit-tap-highlight-color:transparent}
.devmod-state{min-height:min(420px,calc(100dvh - 32px));display:grid;place-items:center;align-content:center;gap:10px;width:min(520px,100%);margin:0 auto;padding:22px;border-radius:28px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 24px 70px rgba(15,23,42,.08);text-align:center}.devmod-state h2{margin:0;font-size:clamp(18px,5vw,24px);font-weight:1000;letter-spacing:-.04em}.devmod-state p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.devmod-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--dev-primary) 18%,transparent);border-top-color:var(--dev-primary);animation:devmodSpin .8s linear infinite}
.devmod-header{display:grid;gap:16px;border-radius:30px;padding:18px;color:#fff;background:radial-gradient(circle at 20% 10%,rgba(255,255,255,.18),transparent 20rem),linear-gradient(135deg,var(--dev-primary),#0f172a 72%);box-shadow:0 24px 70px rgba(15,23,42,.18);overflow:hidden}.devmod-header span{font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.14em;opacity:.82}.devmod-header h1{margin:8px 0 0;font-size:clamp(28px,8vw,44px);line-height:1.02;font-weight:1000;letter-spacing:-.07em}.devmod-header p{max-width:760px;margin:10px 0 0;font-size:13px;line-height:1.6;opacity:.9}.devmod-header-actions{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.devmod-switch{display:inline-flex;gap:5px;padding:5px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(14px)}.devmod-switch button{min-height:34px;border:0;border-radius:999px;padding:0 11px;background:transparent;color:rgba(255,255,255,.75);font-size:12px;font-weight:1000;cursor:pointer}.devmod-switch button.active{background:#fff;color:#0f172a;box-shadow:0 10px 24px rgba(15,23,42,.16)}
.devmod-primary-btn,.devmod-soft-btn{min-height:40px;border:0;border-radius:999px;padding:0 13px;font-size:12px;font-weight:950;cursor:pointer}.devmod-primary-btn{background:#fff;color:#0f172a}.devmod-soft-btn{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);color:#fff}
.devmod-error{margin-top:10px;padding:12px 14px;border-radius:20px;background:#fee2e2;color:#991b1b;font-size:13px;font-weight:850}
.devmod-stat-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-stat{border:1px solid rgba(148,163,184,.22);border-radius:24px;padding:16px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-stat span{display:flex;justify-content:space-between;gap:10px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devmod-stat strong{display:block;margin-top:8px;font-size:clamp(24px,8vw,34px);line-height:1;font-weight:1000;letter-spacing:-.06em}.devmod-stat small{display:block;margin-top:8px;color:var(--muted,#64748b);font-size:12px;font-weight:850}
.devmod-filters{display:grid;grid-template-columns:1fr;gap:8px;margin-top:10px;padding:10px;border-radius:24px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 18px 45px rgba(15,23,42,.05)}.devmod-filters input,.devmod-filters select{min-height:42px;width:100%;border:1px solid rgba(148,163,184,.3);border-radius:16px;padding:0 12px;background:#fff;color:#0f172a;font-size:13px;font-weight:800}.devmod-filters button{min-height:42px;border:0;border-radius:16px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:13px;font-weight:1000;cursor:pointer}
.devmod-card-grid,.devmod-chart-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-record-card,.devmod-chart-card,.devmod-table-card{min-width:0;border:1px solid rgba(148,163,184,.22);border-radius:26px;padding:14px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-record-top{display:flex;align-items:center;justify-content:space-between;gap:10px}.devmod-avatar{width:42px;height:42px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:#fff;font-weight:1000}.devmod-record-card h3{margin:14px 0 0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-record-card p{margin:5px 0 0;color:var(--muted,#64748b);font-size:13px;line-height:1.45}.devmod-meta-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.devmod-meta-grid span{padding:10px;border-radius:16px;background:#f8fafc;color:#0f172a;font-size:12px;font-weight:850}.devmod-meta-grid b{display:block;color:var(--muted,#64748b);font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px}.devmod-record-card button{width:100%;min-height:40px;margin-top:14px;border:0;border-radius:999px;background:var(--dev-primary);color:#fff;font-size:12px;font-weight:1000;cursor:pointer}
.devmod-chip{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border-radius:999px;font-size:11px;font-weight:1000;white-space:nowrap}.devmod-chip.green{background:#dcfce7;color:#166534}.devmod-chip.blue{background:#dbeafe;color:#1d4ed8}.devmod-chip.orange{background:#ffedd5;color:#c2410c}.devmod-chip.red{background:#fee2e2;color:#b91c1c}.devmod-chip.gray{background:#f1f5f9;color:#475569}
.devmod-table-wrap{width:100%;overflow-x:auto}.devmod-table-wrap table{width:100%;min-width:760px;border-collapse:collapse}.devmod-table-wrap th{text-align:left;color:var(--muted,#64748b);font-size:11px;text-transform:uppercase;letter-spacing:.08em;padding:10px;border-bottom:1px solid rgba(148,163,184,.22)}.devmod-table-wrap td{padding:12px 10px;border-bottom:1px solid rgba(148,163,184,.16);font-size:13px}.devmod-table-wrap strong{font-weight:1000}
.devmod-chart-card h2{margin:0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-chart-card p{margin:5px 0 10px;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.devmod-legend{display:flex;flex-wrap:wrap;gap:8px;padding-top:8px}.devmod-legend span{display:inline-flex;align-items:center;gap:6px;min-height:28px;border-radius:999px;padding:0 9px;background:#f8fafc;border:1px solid rgba(148,163,184,.18);color:#475569;font-size:11px;font-weight:900}.devmod-legend i{width:9px;height:9px;border-radius:999px}
.devmod-empty{grid-column:1/-1;margin:0;padding:18px;border-radius:20px;background:#f8fafc;color:var(--muted,#64748b);font-size:13px;text-align:center;border:1px dashed rgba(148,163,184,.35)}
@media (min-width:520px){.devmod-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-meta-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.devmod-filters{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (min-width:820px){.devmod-page{padding:14px}.devmod-header{padding:24px;grid-template-columns:1fr auto;align-items:end}.devmod-card-grid,.devmod-chart-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-filters{grid-template-columns:2fr repeat(4,1fr) auto}.devmod-stat-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
`,wh=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2"],wi=(a,b="GHS")=>new Intl.NumberFormat("en-GH",{style:"currency",currency:b,maximumFractionDigits:0}).format(Number(a||0)),wj=a=>{if(!a)return 0;let b=new Date(a).getTime();return Number.isFinite(b)?b:0},wk=a=>{if(!a)return"Not set";let b=new Date(a);return Number.isNaN(b.getTime())?"Not set":new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(b)},wl=a=>{let b=String(a||"").toLowerCase();return"paid"===b?"green":["issued","draft"].includes(b)?"blue":"overdue"===b?"orange":"void"===b?"red":"gray"};function wm({navigate:a}){let{accountId:b,authenticated:c,loading:d}=(0,uM.F)(),{settings:e}=(0,uN.t)(),f=e?.primaryColor||"var(--primary-color, #2563eb)",[g,h]=(0,M.useState)([]),[i,j]=(0,M.useState)(!0),[k,l]=(0,M.useState)(!1),[m,n]=(0,M.useState)(""),[o,p]=(0,M.useState)("cards"),[q,r]=(0,M.useState)(""),[s,t]=(0,M.useState)("all"),[u,v]=(0,M.useState)("created"),[w,x]=(0,M.useState)(""),[y,z]=(0,M.useState)(""),A=async(a=!1)=>{try{a?l(!0):j(!0),n("");let b=await (0,uL.uE)("/billing/invoices").catch(()=>[]);h(Array.isArray(b)?b:[])}catch(a){n(a?.message||"Could not load invoices.")}finally{j(!1),l(!1)}},B=(0,M.useMemo)(()=>{let a=q.trim().toLowerCase(),b=w?new Date(w).getTime():0,c=y?new Date(y).setHours(23,59,59,999):0;return g.filter(d=>{let e=`${d.invoiceNumber||""} ${d.account?.name||""} ${d.status||""} ${d.note||""}`.toLowerCase(),f="all"===s||String(d.status||"").toLowerCase()===s,g=!a||e.includes(a),h=wj("due"===u?d.dueDate:"paid"===u?d.paidAt:d.createdAt||d.updatedAt);return f&&g&&(!b||h>=b)&&(!c||h<=c)}).sort((a,b)=>wj(b.createdAt||b.updatedAt)-wj(a.createdAt||a.updatedAt))},[g,q,s,u,w,y]),C=g.reduce((a,b)=>a+Number(b.total||0),0),D=g.filter(a=>"paid"===String(a.status).toLowerCase()).reduce((a,b)=>a+Number(b.total||0),0),E=g.filter(a=>["issued","draft","overdue"].includes(String(a.status).toLowerCase())).reduce((a,b)=>a+Number(b.total||0),0),F=g.filter(a=>"overdue"===String(a.status).toLowerCase()).length,G=(0,M.useMemo)(()=>{var a;let b;return a=a=>a.status,b=new Map,g.forEach(c=>{let d=String(a(c)||"Unknown").trim()||"Unknown";b.set(d,(b.get(d)||0)+1)}),Array.from(b.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)},[g]),H=(0,M.useMemo)(()=>{let a=new Map;return g.forEach(b=>{let c=String(b.status||"Unknown");a.set(c,(a.get(c)||0)+Number(b.total||0))}),Array.from(a.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)},[g]),I=(0,M.useMemo)(()=>{let a=((a=6)=>{let b=new Date;return Array.from({length:a},(c,d)=>{let e=new Date(b.getFullYear(),b.getMonth()-(a-1-d),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(e)})})(6),b=new Map(a.map(a=>[a,0]));return g.forEach(a=>{let c,d=(c=wj(a.createdAt||a.updatedAt))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(c)):"Unknown";b.has(d)&&b.set(d,(b.get(d)||0)+Number(a.total||0))}),a.map(a=>({label:a,total:b.get(a)||0}))},[g]);return i||d?(0,L.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:wu}),(0,L.jsx)(wo,{title:"Loading invoices...",text:"Preparing invoice records, dates and charts."})]}):c&&b?(0,L.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:wu}),(0,L.jsx)(wn,{eyebrow:"Platform billing",title:"Invoices",description:"Review invoices by status, date, value and client account. Switch between card, table and chart views.",viewMode:o,onViewMode:p,onRefresh:()=>A(!0),refreshing:k,actions:(0,L.jsx)("button",{className:"devmod-primary-btn",type:"button",onClick:()=>a?.("payments"),children:"View Payments"})}),m&&(0,L.jsx)("div",{className:"devmod-error",children:m}),(0,L.jsxs)("section",{className:"devmod-stat-grid",children:[(0,L.jsx)(wp,{label:"Invoices",value:g.length,detail:`${B.length} after filters`,icon:"\uD83E\uDDFE"}),(0,L.jsx)(wp,{label:"Total Value",value:wi(C),detail:"All invoice records",icon:"\uD83D\uDCCA"}),(0,L.jsx)(wp,{label:"Paid Value",value:wi(D),detail:"Collected invoices",icon:"✅"}),(0,L.jsx)(wp,{label:"Open / Overdue",value:wi(E),detail:`${F} overdue`,icon:"⚠️"})]}),(0,L.jsxs)("section",{className:"devmod-filters",children:[(0,L.jsx)("input",{value:q,onChange:a=>r(a.target.value),placeholder:"Search invoice, account, note..."}),(0,L.jsxs)("select",{value:s,onChange:a=>t(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All statuses"}),(0,L.jsx)("option",{value:"draft",children:"Draft"}),(0,L.jsx)("option",{value:"issued",children:"Issued"}),(0,L.jsx)("option",{value:"paid",children:"Paid"}),(0,L.jsx)("option",{value:"overdue",children:"Overdue"}),(0,L.jsx)("option",{value:"void",children:"Void"})]}),(0,L.jsxs)("select",{value:u,onChange:a=>v(a.target.value),children:[(0,L.jsx)("option",{value:"created",children:"Created date"}),(0,L.jsx)("option",{value:"due",children:"Due date"}),(0,L.jsx)("option",{value:"paid",children:"Paid date"})]}),(0,L.jsx)("input",{type:"date",value:w,onChange:a=>x(a.target.value)}),(0,L.jsx)("input",{type:"date",value:y,onChange:a=>z(a.target.value)}),(0,L.jsx)("button",{type:"button",onClick:()=>{r(""),t("all"),v("created"),x(""),z("")},children:"Reset"})]}),"analytics"===o?(0,L.jsxs)("section",{className:"devmod-chart-grid",children:[(0,L.jsx)(ws,{title:"Invoice value over time",description:"Total invoice value created during the last six months.",children:(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(pA,{data:I,children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,fontSize:11,tickFormatter:a=>Intl.NumberFormat("en-GH",{notation:"compact"}).format(Number(a))}),(0,L.jsx)(sZ,{formatter:a=>wi(Number(a))}),(0,L.jsx)(uK,{dataKey:"total",fill:"var(--dev-primary)",radius:[12,12,0,0]})]})})}),(0,L.jsxs)(ws,{title:"Invoice status count",description:"How many invoices are draft, issued, paid, overdue or void.",children:[(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:G,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:G.map((a,b)=>(0,L.jsx)(s$,{fill:wh[b%wh.length]},b))})]})}),(0,L.jsx)(wt,{rows:G})]}),(0,L.jsx)(ws,{title:"Value by status",description:"Amount locked in each invoice status.",children:(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(pA,{data:H,children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,fontSize:11,tickFormatter:a=>Intl.NumberFormat("en-GH",{notation:"compact"}).format(Number(a))}),(0,L.jsx)(sZ,{formatter:a=>wi(Number(a))}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--dev-primary)",radius:[12,12,0,0]})]})})})]}):"table"===o?(0,L.jsxs)("section",{className:"devmod-table-card",children:[(0,L.jsx)("div",{className:"devmod-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Invoice"}),(0,L.jsx)("th",{children:"Account"}),(0,L.jsx)("th",{children:"Total"}),(0,L.jsx)("th",{children:"Status"}),(0,L.jsx)("th",{children:"Due"}),(0,L.jsx)("th",{children:"Paid"})]})}),(0,L.jsx)("tbody",{children:B.map(a=>(0,L.jsxs)("tr",{children:[(0,L.jsx)("td",{children:(0,L.jsx)("strong",{children:a.invoiceNumber||a.id.slice(0,8)})}),(0,L.jsx)("td",{children:a.account?.name||a.accountId}),(0,L.jsx)("td",{children:wi(a.total,a.currency||"GHS")}),(0,L.jsx)("td",{children:(0,L.jsx)(wq,{tone:wl(a.status),children:a.status})}),(0,L.jsx)("td",{children:wk(a.dueDate)}),(0,L.jsx)("td",{children:wk(a.paidAt)})]},a.id))})]})}),!B.length&&(0,L.jsx)(wr,{text:"No invoices match your filters."})]}):(0,L.jsxs)("section",{className:"devmod-card-grid",children:[B.map(b=>(0,L.jsxs)("article",{className:"devmod-record-card",children:[(0,L.jsxs)("div",{className:"devmod-record-top",children:[(0,L.jsx)("span",{className:"devmod-avatar",children:"\uD83E\uDDFE"}),(0,L.jsx)(wq,{tone:wl(b.status),children:b.status})]}),(0,L.jsx)("h3",{children:b.invoiceNumber||"Invoice"}),(0,L.jsx)("p",{children:b.account?.name||b.accountId}),(0,L.jsxs)("div",{className:"devmod-meta-grid",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Total"}),wi(b.total,b.currency||"GHS")]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Due"}),wk(b.dueDate)]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Paid"}),wk(b.paidAt)]})]}),b.note&&(0,L.jsx)("p",{className:"devmod-note",children:b.note}),(0,L.jsx)("button",{type:"button",onClick:()=>a?.("payments"),children:"View related payments"})]},b.id)),!B.length&&(0,L.jsx)(wr,{text:"No invoices match your filters."})]})]}):(0,L.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:wu}),(0,L.jsx)(wo,{title:"Developer access required",text:"Sign in with a developer account to manage invoices."})]})}function wn({eyebrow:a,title:b,description:c,viewMode:d,onViewMode:e,onRefresh:f,refreshing:g,actions:h}){return(0,L.jsxs)("section",{className:"devmod-header",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{children:a}),(0,L.jsx)("h1",{children:b}),(0,L.jsx)("p",{children:c})]}),(0,L.jsxs)("div",{className:"devmod-header-actions",children:[(0,L.jsxs)("div",{className:"devmod-switch",children:[(0,L.jsx)("button",{className:"cards"===d?"active":"",onClick:()=>e("cards"),type:"button",children:"Cards"}),(0,L.jsx)("button",{className:"table"===d?"active":"",onClick:()=>e("table"),type:"button",children:"Table"}),(0,L.jsx)("button",{className:"analytics"===d?"active":"",onClick:()=>e("analytics"),type:"button",children:"Charts"})]}),h,(0,L.jsx)("button",{className:"devmod-soft-btn",type:"button",onClick:f,disabled:g,children:g?"Refreshing...":"Refresh"})]})]})}function wo({title:a,text:b}){return(0,L.jsxs)("section",{className:"devmod-state",children:[(0,L.jsx)("div",{className:"devmod-spinner"}),(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b})]})}function wp({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"devmod-stat",children:[(0,L.jsxs)("span",{children:[a,(0,L.jsx)("b",{children:d})]}),(0,L.jsx)("strong",{children:b}),(0,L.jsx)("small",{children:c})]})}function wq({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`devmod-chip ${b}`,children:a})}function wr({text:a}){return(0,L.jsx)("div",{className:"devmod-empty",children:a})}function ws({title:a,description:b,children:c}){return(0,L.jsxs)("section",{className:"devmod-chart-card",children:[(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function wt({rows:a}){return(0,L.jsx)("div",{className:"devmod-legend",children:a.map((a,b)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("i",{style:{background:wh[b%wh.length]}}),a.label,": ",a.value]},a.label))})}let wu=`
@keyframes devmodSpin{to{transform:rotate(360deg)}}.devmod-page{min-height:100dvh;width:100%;max-width:100%;padding:8px;padding-bottom:max(28px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--dev-primary) 10%,transparent),transparent 34rem),var(--bg,#f8fafc);color:var(--text,#0f172a);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);overflow-x:hidden}.devmod-page *{box-sizing:border-box}.devmod-page button,.devmod-page input,.devmod-page select{font:inherit;max-width:100%}.devmod-state{min-height:min(420px,calc(100dvh - 32px));display:grid;place-items:center;align-content:center;gap:10px;width:min(520px,100%);margin:0 auto;padding:22px;border-radius:28px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 24px 70px rgba(15,23,42,.08);text-align:center}.devmod-state h2{margin:0;font-size:clamp(18px,5vw,24px);font-weight:1000;letter-spacing:-.04em}.devmod-state p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.devmod-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--dev-primary) 18%,transparent);border-top-color:var(--dev-primary);animation:devmodSpin .8s linear infinite}.devmod-header{display:grid;gap:16px;border-radius:30px;padding:18px;color:#fff;background:radial-gradient(circle at 20% 10%,rgba(255,255,255,.18),transparent 20rem),linear-gradient(135deg,var(--dev-primary),#0f172a 72%);box-shadow:0 24px 70px rgba(15,23,42,.18);overflow:hidden}.devmod-header span{font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.14em;opacity:.82}.devmod-header h1{margin:8px 0 0;font-size:clamp(28px,8vw,44px);line-height:1.02;font-weight:1000;letter-spacing:-.07em}.devmod-header p{max-width:760px;margin:10px 0 0;font-size:13px;line-height:1.6;opacity:.9}.devmod-header-actions{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.devmod-switch{display:inline-flex;gap:5px;padding:5px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(14px)}.devmod-switch button{min-height:34px;border:0;border-radius:999px;padding:0 11px;background:transparent;color:rgba(255,255,255,.75);font-size:12px;font-weight:1000;cursor:pointer}.devmod-switch button.active{background:#fff;color:#0f172a;box-shadow:0 10px 24px rgba(15,23,42,.16)}.devmod-primary-btn,.devmod-soft-btn{min-height:40px;border:0;border-radius:999px;padding:0 13px;font-size:12px;font-weight:950;cursor:pointer}.devmod-primary-btn{background:#fff;color:#0f172a}.devmod-soft-btn{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);color:#fff}.devmod-error{margin-top:10px;padding:12px 14px;border-radius:20px;background:#fee2e2;color:#991b1b;font-size:13px;font-weight:850}.devmod-stat-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-stat{border:1px solid rgba(148,163,184,.22);border-radius:24px;padding:16px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-stat span{display:flex;justify-content:space-between;gap:10px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devmod-stat strong{display:block;margin-top:8px;font-size:clamp(24px,8vw,34px);line-height:1;font-weight:1000;letter-spacing:-.06em}.devmod-stat small{display:block;margin-top:8px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devmod-filters{display:grid;grid-template-columns:1fr;gap:8px;margin-top:10px;padding:10px;border-radius:24px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 18px 45px rgba(15,23,42,.05)}.devmod-filters input,.devmod-filters select{min-height:42px;width:100%;border:1px solid rgba(148,163,184,.3);border-radius:16px;padding:0 12px;background:#fff;color:#0f172a;font-size:13px;font-weight:800}.devmod-filters button{min-height:42px;border:0;border-radius:16px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:13px;font-weight:1000;cursor:pointer}.devmod-card-grid,.devmod-chart-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-record-card,.devmod-chart-card,.devmod-table-card{min-width:0;border:1px solid rgba(148,163,184,.22);border-radius:26px;padding:14px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-record-top{display:flex;align-items:center;justify-content:space-between;gap:10px}.devmod-avatar{width:42px;height:42px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:#fff;font-weight:1000}.devmod-record-card h3{margin:14px 0 0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-record-card p{margin:5px 0 0;color:var(--muted,#64748b);font-size:13px;line-height:1.45}.devmod-note{padding:10px;border-radius:16px;background:#f8fafc;color:#475569!important}.devmod-meta-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.devmod-meta-grid span{padding:10px;border-radius:16px;background:#f8fafc;color:#0f172a;font-size:12px;font-weight:850}.devmod-meta-grid b{display:block;color:var(--muted,#64748b);font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px}.devmod-record-card button{width:100%;min-height:40px;margin-top:14px;border:0;border-radius:999px;background:var(--dev-primary);color:#fff;font-size:12px;font-weight:1000;cursor:pointer}.devmod-chip{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border-radius:999px;font-size:11px;font-weight:1000;white-space:nowrap}.devmod-chip.green{background:#dcfce7;color:#166534}.devmod-chip.blue{background:#dbeafe;color:#1d4ed8}.devmod-chip.orange{background:#ffedd5;color:#c2410c}.devmod-chip.red{background:#fee2e2;color:#b91c1c}.devmod-chip.gray{background:#f1f5f9;color:#475569}.devmod-table-wrap{width:100%;overflow-x:auto}.devmod-table-wrap table{width:100%;min-width:850px;border-collapse:collapse}.devmod-table-wrap th{text-align:left;color:var(--muted,#64748b);font-size:11px;text-transform:uppercase;letter-spacing:.08em;padding:10px;border-bottom:1px solid rgba(148,163,184,.22)}.devmod-table-wrap td{padding:12px 10px;border-bottom:1px solid rgba(148,163,184,.16);font-size:13px}.devmod-table-wrap strong{font-weight:1000}.devmod-chart-card h2{margin:0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-chart-card p{margin:5px 0 10px;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.devmod-legend{display:flex;flex-wrap:wrap;gap:8px;padding-top:8px}.devmod-legend span{display:inline-flex;align-items:center;gap:6px;min-height:28px;border-radius:999px;padding:0 9px;background:#f8fafc;border:1px solid rgba(148,163,184,.18);color:#475569;font-size:11px;font-weight:900}.devmod-legend i{width:9px;height:9px;border-radius:999px}.devmod-empty{grid-column:1/-1;margin:0;padding:18px;border-radius:20px;background:#f8fafc;color:var(--muted,#64748b);font-size:13px;text-align:center;border:1px dashed rgba(148,163,184,.35)}@media(min-width:520px){.devmod-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-meta-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.devmod-filters{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(min-width:820px){.devmod-page{padding:14px}.devmod-header{padding:24px;grid-template-columns:1fr auto;align-items:end}.devmod-card-grid,.devmod-chart-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-filters{grid-template-columns:2fr repeat(4,1fr) auto}.devmod-stat-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
`;var wv=["axis"],ww=(0,M.forwardRef)((a,b)=>M.createElement(py,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:wv,tooltipPayloadSearcher:co,categoricalChartProps:a,ref:b}));function wx(){return(wx=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}var wy=a=>{var{cx:b,cy:c,r:d,className:e}=a,f=P("recharts-dot",e);return Z(b)&&Z(c)&&Z(d)?M.createElement("circle",wx({},oX(a),qy(a),{className:f,cx:b,cy:c,r:d})):null},wz=["points"];function wA(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function wB(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?wA(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):wA(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function wC(){return(wC=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function wD(a){var{option:b,dotProps:c,className:d}=a;if((0,M.isValidElement)(b))return(0,M.cloneElement)(b,c);if("function"==typeof b)return b(c);var e=P(d,"boolean"!=typeof b?b.className:""),f=null!=c?c:{},{points:g}=f,h=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(f,wz);return M.createElement(wy,wC({},h,{className:e}))}function wE(a){var{points:b,dot:c,className:d,dotClassName:e,dataKey:f,baseProps:g,needClip:h,clipPathId:i,zIndex:j=fQ.scatter}=a;if(null==b||!c&&1!==b.length)return null;var k=tg(c),l=null==c?null:(0,M.isValidElement)(c)?oZ(c.props):"object"!=typeof c||Array.isArray(c)?null:oZ(c),m=b.map((a,d)=>{var h,i,j=wB(wB(wB({r:3},g),l),{},{index:d,cx:null!=(h=a.x)?h:void 0,cy:null!=(i=a.y)?i:void 0,dataKey:f,value:a.value,payload:a.payload,points:b});return M.createElement(wD,{key:"dot-".concat(d),option:c,dotProps:j,className:e})}),n={};return h&&null!=i&&(n.clipPath="url(#clipPath-".concat(k?"":"dots-").concat(i,")")),M.createElement(qf,{zIndex:j},M.createElement(pR,wC({className:d},n),m))}function wF(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function wG(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?wF(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):wF(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var wH=a=>{var b,{point:c,childIndex:d,mainColor:e,activeDot:f,dataKey:g,clipPath:h}=a;if(!1===f||null==c.x||null==c.y)return null;var i=wG(wG(wG({},{index:d,dataKey:g,cx:c.x,cy:c.y,r:4,fill:null!=e?e:"none",strokeWidth:2,stroke:"#fff",payload:c.payload,value:c.value}),oY(f)),qy(f));return b=(0,M.isValidElement)(f)?(0,M.cloneElement)(f,i):"function"==typeof f?f(i):M.createElement(wy,i),M.createElement(pR,{className:"recharts-active-dot",clipPath:h},b)};function wI(a){var{points:b,mainColor:c,activeDot:d,itemDataKey:e,clipPath:f,zIndex:g=fQ.activeDot}=a,h=d2(mC),i=d2(mL);if(null==b||null==i)return null;var j=b.find(a=>i.includes(a.payload));return null==j?null:M.createElement(qf,{zIndex:g},M.createElement(wH,{point:j,childIndex:Number(h),mainColor:c,dataKey:e,activeDot:d,clipPath:f}))}var wJ=(a,b,c)=>lF(a,"xAxis",t4(a,b),c),wK=(a,b,c)=>lE(a,"xAxis",t4(a,b),c),wL=(a,b,c)=>lF(a,"yAxis",t5(a,b),c),wM=(a,b,c)=>lE(a,"yAxis",t5(a,b),c),wN=dV([eN,wJ,wL,wK,wM],(a,b,c,d,e)=>eg(a,"xAxis")?ep(b,d,!1):ep(c,e,!1)),wO=dV([kd,(a,b)=>b],(a,b)=>a.filter(a=>"area"===a.type).find(a=>a.id===b)),wP=a=>eg(eN(a),"xAxis")?"yAxis":"xAxis",wQ=dV([wO,(a,b,c)=>kC(a,wP(a),"yAxis"===wP(a)?t5(a,b):t4(a,b),c)],(a,b)=>{if(null!=a&&null!=b){var c,{stackId:d}=a,e=f8(a);if(null!=d&&null!=e){var f=null==(c=b[d])?void 0:c.stackedData,g=null==f?void 0:f.find(a=>a.key===e);if(null!=g)return g.map(a=>[a[0],a[1]])}}}),wR=dV([eN,wJ,wL,wK,wM,wQ,eW,wN,wO,a=>a.rootProps.baseValue],(a,b,c,d,e,f,g,h,i,j)=>{var k,{chartData:l,dataStartIndex:m,dataEndIndex:n}=g;if(null!=i&&("horizontal"===a||"vertical"===a)&&null!=b&&null!=c&&null!=d&&null!=e&&0!==d.length&&0!==e.length&&null!=h){var{data:o}=i;if(null!=(k=o&&o.length>0?o:null==l?void 0:l.slice(m,n+1)))return function(a){var b,{areaSettings:{connectNulls:c,baseValue:d,dataKey:e},stackedData:f,layout:g,chartBaseValue:h,xAxis:i,yAxis:j,displayedData:k,dataStartIndex:l,xAxisTicks:m,yAxisTicks:n,bandSize:o}=a,p=f&&f.length,q=((a,b,c,d,e)=>{var f=null!=c?c:b;if(Z(f))return f;var g="horizontal"===a?e:d,h=g.scale.domain();if("number"===g.type){var i=Math.max(h[0],h[1]),j=Math.min(h[0],h[1]);return"dataMin"===f?j:"dataMax"===f||i<0?i:Math.max(Math.min(h[0],h[1]),0)}return"dataMin"===f?h[0]:"dataMax"===f?h[1]:h[0]})(g,h,d,i,j),r="horizontal"===g,s=!1,t=k.map((a,b)=>{if(p)k=f[l+b];else{var d,g,h,k,t,u=ef(a,e);Array.isArray(u)?(k=u,s=!0):k=[q,u]}var v=null!=(d=null==(g=k)?void 0:g[1])?d:null,w=null==v||p&&!c&&null==ef(a,e);return r?{x:el({axis:i,ticks:m,bandSize:o,entry:a,index:b}),y:w?null:null!=(t=j.scale.map(v))?t:null,value:k,payload:a}:{x:w?null:null!=(h=i.scale.map(v))?h:null,y:el({axis:j,ticks:n,bandSize:o,entry:a,index:b}),value:k,payload:a}});return b=p||s?t.map(a=>{var b,c,d=Array.isArray(a.value)?a.value[0]:null;return r?{x:a.x,y:null!=d&&null!=a.y&&null!=(c=j.scale.map(d))?c:null,payload:a.payload}:{x:null!=d&&null!=(b=i.scale.map(d))?b:null,y:a.y,payload:a.payload}}):r?j.scale.map(q):i.scale.map(q),{points:t,baseLine:null!=b?b:0,isRange:s}}({layout:a,xAxis:b,yAxis:c,xAxisTicks:d,yAxisTicks:e,dataStartIndex:m,areaSettings:i,stackedData:f,displayedData:k,chartBaseValue:j,bandSize:h})}}),wS=["id"],wT=["activeDot","animationBegin","animationDuration","animationEasing","connectNulls","dot","fill","fillOpacity","hide","isAnimationActive","legendType","stroke","xAxisId","yAxisId"];function wU(){return(wU=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)({}).hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(null,arguments)}function wV(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c={};for(var d in a)if(({}).hasOwnProperty.call(a,d)){if(-1!==b.indexOf(d))continue;c[d]=a[d]}return c}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],-1===b.indexOf(c)&&({}).propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function wW(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function wX(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?wW(Object(c),!0).forEach(function(b){var d,e,f;d=a,e=b,f=c[b],(e=function(a){var b=function(a,b){if("object"!=typeof a||!a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}(a,"string");return"symbol"==typeof b?b:b+""}(e))in d?Object.defineProperty(d,e,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[e]=f}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):wW(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function wY(a,b){return a&&"none"!==a?a:b}var wZ=M.memo(a=>{var{dataKey:b,data:c,stroke:d,strokeWidth:e,fill:f,name:g,hide:h,unit:i,tooltipType:j,id:k}=a,l={dataDefinedOnItem:c,getPosition:ah,settings:{stroke:d,strokeWidth:e,fill:f,dataKey:b,nameKey:void 0,name:er(g,b),hide:h,type:j,color:wY(d,f),unit:i,graphicalItemId:k}};return M.createElement(tX,{tooltipEntrySettings:l})});function w$(a){var{clipPathId:b,points:c,props:d}=a,{needClip:e,dot:f,dataKey:g}=d,h=oX(d);return M.createElement(wE,{points:c,dot:f,className:"recharts-area-dots",dotClassName:"recharts-area-dot",dataKey:g,baseProps:h,needClip:e,clipPathId:b})}function w_(a){var{showLabels:b,children:c,points:d}=a,e=d.map(a=>{var b,c,d={x:null!=(b=a.x)?b:0,y:null!=(c=a.y)?c:0,width:0,lowerWidth:0,upperWidth:0,height:0};return wX(wX({},d),{},{value:a.value,payload:a.payload,parentViewBox:void 0,viewBox:d,fill:void 0})});return M.createElement(s5,{value:b?e:void 0},c)}function w0(a){var{points:b,baseLine:c,needClip:d,clipPathId:e,props:f}=a,{layout:g,type:h,stroke:i,connectNulls:j,isRange:k}=f,{id:l}=f,m=wV(f,wS),n=oX(m),o=oZ(m);return M.createElement(M.Fragment,null,(null==b?void 0:b.length)>1&&M.createElement(pR,{clipPath:d?"url(#clipPath-".concat(e,")"):void 0},M.createElement(si,wU({},o,{id:l,points:b,connectNulls:j,type:h,baseLine:c,layout:g,stroke:"none",className:"recharts-area-area"})),"none"!==i&&M.createElement(si,wU({},n,{className:"recharts-area-curve",layout:g,type:h,connectNulls:j,fill:"none",points:b})),"none"!==i&&k&&Array.isArray(c)&&M.createElement(si,wU({},n,{className:"recharts-area-curve",layout:g,type:h,connectNulls:j,fill:"none",points:c}))),M.createElement(w$,{points:b,props:m,clipPathId:e}))}function w1(a){var b,c,{alpha:d,baseLine:e,points:f,strokeWidth:g}=a,h=null==(b=f[0])?void 0:b.y,i=null==(c=f[f.length-1])?void 0:c.y;if(!ar(h)||!ar(i))return null;var j=d*Math.abs(h-i),k=Math.max(...f.map(a=>a.x||0));return(Z(e)?k=Math.max(e,k):e&&Array.isArray(e)&&e.length&&(k=Math.max(...e.map(a=>a.x||0),k)),Z(k))?M.createElement("rect",{x:0,y:h<i?h:h-j,width:k+(g?parseInt("".concat(g),10):1),height:Math.floor(j)}):null}function w2(a){var b,c,{alpha:d,baseLine:e,points:f,strokeWidth:g}=a,h=null==(b=f[0])?void 0:b.x,i=null==(c=f[f.length-1])?void 0:c.x;if(!ar(h)||!ar(i))return null;var j=d*Math.abs(h-i),k=Math.max(...f.map(a=>a.y||0));return(Z(e)?k=Math.max(e,k):e&&Array.isArray(e)&&e.length&&(k=Math.max(...e.map(a=>a.y||0),k)),Z(k))?M.createElement("rect",{x:h<i?h:h-j,y:0,width:j,height:Math.floor(k+(g?parseInt("".concat(g),10):1))}):null}function w3(a){var{alpha:b,layout:c,points:d,baseLine:e,strokeWidth:f}=a;return"vertical"===c?M.createElement(w1,{alpha:b,points:d,baseLine:e,strokeWidth:f}):M.createElement(w2,{alpha:b,points:d,baseLine:e,strokeWidth:f})}function w4(a){var{needClip:b,clipPathId:c,props:d,previousPointsRef:e,previousBaselineRef:f}=a,{points:g,baseLine:h,isAnimationActive:i,animationBegin:j,animationDuration:k,animationEasing:l,onAnimationStart:m,onAnimationEnd:n}=d,o=su((0,M.useMemo)(()=>({points:g,baseLine:h}),[g,h]),"recharts-area-"),p=eO(),[q,r]=(0,M.useState)(!1),s=(0,M.useCallback)(()=>{"function"==typeof n&&n(),r(!1)},[n]),t=(0,M.useCallback)(()=>{"function"==typeof m&&m(),r(!0)},[m]);if(null==p)return null;var u=e.current,v=f.current;return M.createElement(w_,{showLabels:!q,points:g},d.children,M.createElement(st,{animationId:o,begin:j,duration:k,isActive:i,easing:l,onAnimationEnd:s,onAnimationStart:t,key:o},a=>{if(u){var j,k=u.length/g.length,l=1===a?g:g.map((b,c)=>{var d=Math.floor(c*k);if(u[d]){var e=u[d];return wX(wX({},b),{},{x:ad(e.x,b.x,a),y:ad(e.y,b.y,a)})}return b});if(Z(h))j=ad(v,h,a);else j=null==h||X(h)?ad(v,0,a):h.map((b,c)=>{var d=Math.floor(c*k);if(Array.isArray(v)&&v[d]){var e=v[d];return wX(wX({},b),{},{x:ad(e.x,b.x,a),y:ad(e.y,b.y,a)})}return b});return a>0&&(e.current=l,f.current=j),M.createElement(w0,{points:l,baseLine:j,needClip:b,clipPathId:c,props:d})}return a>0&&(e.current=g,f.current=h),M.createElement(pR,null,i&&M.createElement("defs",null,M.createElement("clipPath",{id:"animationClipPath-".concat(c)},M.createElement(w3,{alpha:a,points:g,baseLine:h,layout:p,strokeWidth:d.strokeWidth}))),M.createElement(pR,{clipPath:"url(#animationClipPath-".concat(c,")")},M.createElement(w0,{points:g,baseLine:h,needClip:b,clipPathId:c,props:d})))}),M.createElement(s9,{label:d.label}))}function w5(a){var{needClip:b,clipPathId:c,props:d}=a,e=(0,M.useRef)(null),f=(0,M.useRef)();return M.createElement(w4,{needClip:b,clipPathId:c,props:d,previousPointsRef:e,previousBaselineRef:f})}class w6 extends M.PureComponent{render(){var{hide:a,dot:b,points:c,className:d,top:e,left:f,needClip:g,xAxisId:h,yAxisId:i,width:j,height:k,id:l,baseLine:m,zIndex:n}=this.props;if(a)return null;var o=P("recharts-area",d),{r:p,strokeWidth:q}=function(a){var b=oY(a);if(null!=b){var{r:c,strokeWidth:d}=b,e=Number(c),f=Number(d);return(Number.isNaN(e)||e<0)&&(e=3),(Number.isNaN(f)||f<0)&&(f=2),{r:e,strokeWidth:f}}return{r:3,strokeWidth:2}}(b),r=tg(b),s=2*p+q,t=g?"url(#clipPath-".concat(r?"":"dots-").concat(l,")"):void 0;return M.createElement(qf,{zIndex:n},M.createElement(pR,{className:o},g&&M.createElement("defs",null,M.createElement(t0,{clipPathId:l,xAxisId:h,yAxisId:i}),!r&&M.createElement("clipPath",{id:"clipPath-dots-".concat(l)},M.createElement("rect",{x:f-s/2,y:e-s/2,width:j+s,height:k+s}))),M.createElement(w5,{needClip:g,clipPathId:l,props:this.props})),M.createElement(wI,{points:c,mainColor:wY(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:t}),this.props.isRange&&Array.isArray(m)&&M.createElement(wI,{points:m,mainColor:wY(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:t}))}}var w7={activeDot:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",connectNulls:!1,dot:!1,fill:"#3182bd",fillOpacity:.6,hide:!1,isAnimationActive:"auto",legendType:"line",stroke:"#3182bd",strokeWidth:1,type:"linear",label:!1,xAxisId:0,yAxisId:0,zIndex:fQ.area};function w8(a){var b,{activeDot:c,animationBegin:d,animationDuration:e,animationEasing:f,connectNulls:g,dot:h,fill:i,fillOpacity:j,hide:k,isAnimationActive:l,legendType:m,stroke:n,xAxisId:o,yAxisId:p}=a,q=wV(a,wT),r=d2(eN),s=d2(fH),{needClip:t}=t_(o,p),u=eG(),{points:v,isRange:w,baseLine:x}=null!=(b=d2(b=>wR(b,a.id,u)))?b:{},y=d2(po);if("horizontal"!==r&&"vertical"!==r||null==y||"AreaChart"!==s&&"ComposedChart"!==s)return null;var{height:z,width:A,x:B,y:C}=y;return v&&v.length?M.createElement(w6,wU({},q,{activeDot:c,animationBegin:d,animationDuration:e,animationEasing:f,baseLine:x,connectNulls:g,dot:h,fill:i,fillOpacity:j,height:z,hide:k,layout:r,isAnimationActive:l,isRange:w,legendType:m,needClip:t,points:v,stroke:n,width:A,left:B,top:C,xAxisId:o,yAxisId:p})):null}var w9=M.memo(function(a){var b=pu(a,w7),c=eG();return M.createElement(uj,{id:b.id,type:"area"},a=>M.createElement(M.Fragment,null,M.createElement(uf,{legendPayload:(a=>{var{dataKey:b,name:c,stroke:d,fill:e,legendType:f,hide:g}=a;return[{inactive:g,dataKey:b,type:f,color:wY(d,e),value:er(c,b),payload:a}]})(b)}),M.createElement(wZ,{dataKey:b.dataKey,data:b.data,stroke:b.stroke,strokeWidth:b.strokeWidth,fill:b.fill,name:b.name,hide:b.hide,unit:b.unit,tooltipType:b.tooltipType,id:a}),M.createElement(uk,{type:"area",id:a,data:b.data,dataKey:b.dataKey,xAxisId:b.xAxisId,yAxisId:b.yAxisId,zAxisId:0,stackId:ek(b.stackId),hide:b.hide,barSize:void 0,baseValue:b.baseValue,isPanorama:c,connectNulls:b.connectNulls}),M.createElement(w8,wU({},b,{id:a}))))},oN);w9.displayName="Area";let xa=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2"],xb=(a,b="GHS")=>new Intl.NumberFormat("en-GH",{style:"currency",currency:b,maximumFractionDigits:0}).format(Number(a||0)),xc=a=>{if(!a)return 0;let b=new Date(a).getTime();return Number.isFinite(b)?b:0},xd=a=>{if(!a)return"Not set";let b=new Date(a);return Number.isNaN(b.getTime())?"Not set":new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(b)},xe=a=>{let b=String(a||"").toLowerCase();return["paid","success"].includes(b)?"green":"pending"===b?"blue":["refunded","cancelled"].includes(b)?"orange":"failed"===b?"red":"gray"},xf=(a,b)=>{let c=new Map;return a.forEach(a=>{let d=String(b(a)||"Unknown").trim()||"Unknown";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)};function xg({navigate:a}){let{accountId:b,authenticated:c,loading:d}=(0,uM.F)(),{settings:e}=(0,uN.t)(),f=e?.primaryColor||"var(--primary-color, #2563eb)",[g,h]=(0,M.useState)([]),[i,j]=(0,M.useState)(!0),[k,l]=(0,M.useState)(!1),[m,n]=(0,M.useState)(""),[o,p]=(0,M.useState)("cards"),[q,r]=(0,M.useState)(""),[s,t]=(0,M.useState)("all"),[u,v]=(0,M.useState)("all"),[w,x]=(0,M.useState)("all"),[y,z]=(0,M.useState)(""),[A,B]=(0,M.useState)(""),C=async(a=!1)=>{try{a?l(!0):j(!0),n("");let b=await (0,uL.uE)("/billing/payments").catch(()=>[]);h(Array.isArray(b)?b:[])}catch(a){n(a?.message||"Could not load payments.")}finally{j(!1),l(!1)}},D=(0,M.useMemo)(()=>Array.from(new Set(g.map(a=>a.method).filter(Boolean))).sort(),[g]),E=(0,M.useMemo)(()=>Array.from(new Set(g.map(a=>a.provider).filter(Boolean))).sort(),[g]),F=(0,M.useMemo)(()=>{let a=q.trim().toLowerCase(),b=y?new Date(y).getTime():0,c=A?new Date(A).setHours(23,59,59,999):0;return g.filter(d=>{let e=`${d.account?.name||""} ${d.payerName||""} ${d.payerPhone||""} ${d.payerEmail||""} ${d.receiptNumber||""} ${d.providerReference||""} ${d.status||""}`.toLowerCase(),f=xc(d.paidAt||d.createdAt||d.updatedAt),g="all"===s||String(d.status||"").toLowerCase()===s,h="all"===u||d.method===u,i="all"===w||d.provider===w,j=!a||e.includes(a);return g&&h&&i&&j&&(!b||f>=b)&&(!c||f<=c)}).sort((a,b)=>xc(b.paidAt||b.createdAt)-xc(a.paidAt||a.createdAt))},[g,q,s,u,w,y,A]),G=g.filter(a=>["paid","success"].includes(String(a.status).toLowerCase())),H=g.filter(a=>"pending"===String(a.status).toLowerCase()),I=g.filter(a=>"failed"===String(a.status).toLowerCase()),J=G.reduce((a,b)=>a+Number(b.amount||0),0),K=H.reduce((a,b)=>a+Number(b.amount||0),0),N=(0,M.useMemo)(()=>xf(g,a=>a.method||a.provider||"manual"),[g]),O=(0,M.useMemo)(()=>xf(g,a=>a.status),[g]),P=(0,M.useMemo)(()=>xf(g,a=>a.provider||"manual"),[g]),Q=(0,M.useMemo)(()=>{let a=((a=6)=>{let b=new Date;return Array.from({length:a},(c,d)=>{let e=new Date(b.getFullYear(),b.getMonth()-(a-1-d),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(e)})})(6),b=new Map(a.map(a=>[a,0]));return G.forEach(a=>{let c,d=(c=xc(a.paidAt||a.createdAt))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(c)):"Unknown";b.has(d)&&b.set(d,(b.get(d)||0)+Number(a.amount||0))}),a.map(a=>({label:a,revenue:b.get(a)||0}))},[G]);return i||d?(0,L.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:xo}),(0,L.jsx)(xi,{title:"Loading payments...",text:"Preparing payment records, filters and revenue charts."})]}):c&&b?(0,L.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:xo}),(0,L.jsx)(xh,{eyebrow:"Platform billing",title:"Payments",description:"Track Paystack/manual payments, pending payments, failed payments, receipts and revenue trends.",viewMode:o,onViewMode:p,onRefresh:()=>C(!0),refreshing:k,actions:(0,L.jsx)("button",{className:"devmod-primary-btn",type:"button",onClick:()=>a?.("invoices"),children:"View Invoices"})}),m&&(0,L.jsx)("div",{className:"devmod-error",children:m}),(0,L.jsxs)("section",{className:"devmod-stat-grid",children:[(0,L.jsx)(xj,{label:"Payments",value:g.length,detail:`${F.length} after filters`,icon:"\uD83D\uDCB0"}),(0,L.jsx)(xj,{label:"Paid Revenue",value:xb(J),detail:`${G.length} successful`,icon:"✅"}),(0,L.jsx)(xj,{label:"Pending",value:xb(K),detail:`${H.length} pending`,icon:"⏳"}),(0,L.jsx)(xj,{label:"Failed",value:I.length,detail:"Needs review",icon:"⚠️"})]}),(0,L.jsxs)("section",{className:"devmod-filters",children:[(0,L.jsx)("input",{value:q,onChange:a=>r(a.target.value),placeholder:"Search payer, receipt, reference..."}),(0,L.jsxs)("select",{value:s,onChange:a=>t(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All statuses"}),(0,L.jsx)("option",{value:"pending",children:"Pending"}),(0,L.jsx)("option",{value:"paid",children:"Paid"}),(0,L.jsx)("option",{value:"failed",children:"Failed"}),(0,L.jsx)("option",{value:"refunded",children:"Refunded"}),(0,L.jsx)("option",{value:"cancelled",children:"Cancelled"})]}),(0,L.jsxs)("select",{value:u,onChange:a=>v(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All methods"}),D.map(a=>(0,L.jsx)("option",{value:a||"",children:a},a||""))]}),(0,L.jsxs)("select",{value:w,onChange:a=>x(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All providers"}),E.map(a=>(0,L.jsx)("option",{value:a||"",children:a},a||""))]}),(0,L.jsx)("input",{type:"date",value:y,onChange:a=>z(a.target.value)}),(0,L.jsx)("input",{type:"date",value:A,onChange:a=>B(a.target.value)}),(0,L.jsx)("button",{type:"button",onClick:()=>{r(""),t("all"),v("all"),x("all"),z(""),B("")},children:"Reset"})]}),"analytics"===o?(0,L.jsxs)("section",{className:"devmod-chart-grid",children:[(0,L.jsx)(xm,{title:"Revenue over time",description:"Successful paid payment value over the last six months.",children:(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(ww,{data:Q,children:[(0,L.jsx)("defs",{children:(0,L.jsxs)("linearGradient",{id:"payRevenue",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,L.jsx)("stop",{offset:"8%",stopColor:"var(--dev-primary)",stopOpacity:.28}),(0,L.jsx)("stop",{offset:"95%",stopColor:"var(--dev-primary)",stopOpacity:.02})]})}),(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,fontSize:11,tickFormatter:a=>Intl.NumberFormat("en-GH",{notation:"compact"}).format(Number(a))}),(0,L.jsx)(sZ,{formatter:a=>xb(Number(a))}),(0,L.jsx)(w9,{type:"monotone",dataKey:"revenue",stroke:"var(--dev-primary)",fill:"url(#payRevenue)",strokeWidth:3})]})})}),(0,L.jsxs)(xm,{title:"Payment status",description:"Successful, pending, failed, refunded and cancelled payments.",children:[(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:O,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:O.map((a,b)=>(0,L.jsx)(s$,{fill:xa[b%xa.length]},b))})]})}),(0,L.jsx)(xn,{rows:O})]}),(0,L.jsx)(xm,{title:"Payment method",description:"Cash, mobile money, card, bank and manual payment mix.",children:(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(pA,{data:N,children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--dev-primary)",radius:[12,12,0,0]})]})})}),(0,L.jsxs)(xm,{title:"Providers",description:"Payment provider distribution such as Paystack or manual.",children:[(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:P,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:P.map((a,b)=>(0,L.jsx)(s$,{fill:xa[b%xa.length]},b))})]})}),(0,L.jsx)(xn,{rows:P})]})]}):"table"===o?(0,L.jsxs)("section",{className:"devmod-table-card",children:[(0,L.jsx)("div",{className:"devmod-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Payer / Account"}),(0,L.jsx)("th",{children:"Amount"}),(0,L.jsx)("th",{children:"Status"}),(0,L.jsx)("th",{children:"Method"}),(0,L.jsx)("th",{children:"Provider"}),(0,L.jsx)("th",{children:"Receipt"}),(0,L.jsx)("th",{children:"Date"})]})}),(0,L.jsx)("tbody",{children:F.map(a=>(0,L.jsxs)("tr",{children:[(0,L.jsx)("td",{children:(0,L.jsx)("strong",{children:a.payerName||a.account?.name||a.accountId})}),(0,L.jsx)("td",{children:xb(a.amount,a.currency||"GHS")}),(0,L.jsx)("td",{children:(0,L.jsx)(xk,{tone:xe(a.status),children:a.status})}),(0,L.jsx)("td",{children:a.method||"—"}),(0,L.jsx)("td",{children:a.provider||"manual"}),(0,L.jsx)("td",{children:a.receiptNumber||a.providerReference||"—"}),(0,L.jsx)("td",{children:xd(a.paidAt||a.createdAt)})]},a.id))})]})}),!F.length&&(0,L.jsx)(xl,{text:"No payments match your filters."})]}):(0,L.jsxs)("section",{className:"devmod-card-grid",children:[F.map(b=>(0,L.jsxs)("article",{className:"devmod-record-card",children:[(0,L.jsxs)("div",{className:"devmod-record-top",children:[(0,L.jsx)("span",{className:"devmod-avatar",children:"\uD83D\uDCB0"}),(0,L.jsx)(xk,{tone:xe(b.status),children:b.status})]}),(0,L.jsx)("h3",{children:xb(b.amount,b.currency||"GHS")}),(0,L.jsx)("p",{children:b.payerName||b.account?.name||b.payerEmail||b.accountId}),(0,L.jsxs)("div",{className:"devmod-meta-grid",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Method"}),b.method||"—"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Provider"}),b.provider||"manual"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Date"}),xd(b.paidAt||b.createdAt)]})]}),(b.receiptNumber||b.providerReference||b.note)&&(0,L.jsx)("p",{className:"devmod-note",children:b.receiptNumber||b.providerReference||b.note}),(0,L.jsx)("button",{type:"button",onClick:()=>a?.("invoices"),children:"Open invoices"})]},b.id)),!F.length&&(0,L.jsx)(xl,{text:"No payments match your filters."})]})]}):(0,L.jsxs)("main",{className:"devmod-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:xo}),(0,L.jsx)(xi,{title:"Developer access required",text:"Sign in with a developer account to manage payments."})]})}function xh({eyebrow:a,title:b,description:c,viewMode:d,onViewMode:e,onRefresh:f,refreshing:g,actions:h}){return(0,L.jsxs)("section",{className:"devmod-header",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{children:a}),(0,L.jsx)("h1",{children:b}),(0,L.jsx)("p",{children:c})]}),(0,L.jsxs)("div",{className:"devmod-header-actions",children:[(0,L.jsxs)("div",{className:"devmod-switch",children:[(0,L.jsx)("button",{className:"cards"===d?"active":"",onClick:()=>e("cards"),type:"button",children:"Cards"}),(0,L.jsx)("button",{className:"table"===d?"active":"",onClick:()=>e("table"),type:"button",children:"Table"}),(0,L.jsx)("button",{className:"analytics"===d?"active":"",onClick:()=>e("analytics"),type:"button",children:"Charts"})]}),h,(0,L.jsx)("button",{className:"devmod-soft-btn",type:"button",onClick:f,disabled:g,children:g?"Refreshing...":"Refresh"})]})]})}function xi({title:a,text:b}){return(0,L.jsxs)("section",{className:"devmod-state",children:[(0,L.jsx)("div",{className:"devmod-spinner"}),(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b})]})}function xj({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"devmod-stat",children:[(0,L.jsxs)("span",{children:[a,(0,L.jsx)("b",{children:d})]}),(0,L.jsx)("strong",{children:b}),(0,L.jsx)("small",{children:c})]})}function xk({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`devmod-chip ${b}`,children:a})}function xl({text:a}){return(0,L.jsx)("div",{className:"devmod-empty",children:a})}function xm({title:a,description:b,children:c}){return(0,L.jsxs)("section",{className:"devmod-chart-card",children:[(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function xn({rows:a}){return(0,L.jsx)("div",{className:"devmod-legend",children:a.map((a,b)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("i",{style:{background:xa[b%xa.length]}}),a.label,": ",a.value]},a.label))})}let xo=`
@keyframes devmodSpin{to{transform:rotate(360deg)}}.devmod-page{min-height:100dvh;width:100%;max-width:100%;padding:8px;padding-bottom:max(28px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--dev-primary) 10%,transparent),transparent 34rem),var(--bg,#f8fafc);color:var(--text,#0f172a);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);overflow-x:hidden}.devmod-page *{box-sizing:border-box}.devmod-page button,.devmod-page input,.devmod-page select{font:inherit;max-width:100%}.devmod-state{min-height:min(420px,calc(100dvh - 32px));display:grid;place-items:center;align-content:center;gap:10px;width:min(520px,100%);margin:0 auto;padding:22px;border-radius:28px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 24px 70px rgba(15,23,42,.08);text-align:center}.devmod-state h2{margin:0;font-size:clamp(18px,5vw,24px);font-weight:1000;letter-spacing:-.04em}.devmod-state p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.devmod-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--dev-primary) 18%,transparent);border-top-color:var(--dev-primary);animation:devmodSpin .8s linear infinite}.devmod-header{display:grid;gap:16px;border-radius:30px;padding:18px;color:#fff;background:radial-gradient(circle at 20% 10%,rgba(255,255,255,.18),transparent 20rem),linear-gradient(135deg,var(--dev-primary),#0f172a 72%);box-shadow:0 24px 70px rgba(15,23,42,.18);overflow:hidden}.devmod-header span{font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.14em;opacity:.82}.devmod-header h1{margin:8px 0 0;font-size:clamp(28px,8vw,44px);line-height:1.02;font-weight:1000;letter-spacing:-.07em}.devmod-header p{max-width:760px;margin:10px 0 0;font-size:13px;line-height:1.6;opacity:.9}.devmod-header-actions{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.devmod-switch{display:inline-flex;gap:5px;padding:5px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(14px)}.devmod-switch button{min-height:34px;border:0;border-radius:999px;padding:0 11px;background:transparent;color:rgba(255,255,255,.75);font-size:12px;font-weight:1000;cursor:pointer}.devmod-switch button.active{background:#fff;color:#0f172a;box-shadow:0 10px 24px rgba(15,23,42,.16)}.devmod-primary-btn,.devmod-soft-btn{min-height:40px;border:0;border-radius:999px;padding:0 13px;font-size:12px;font-weight:950;cursor:pointer}.devmod-primary-btn{background:#fff;color:#0f172a}.devmod-soft-btn{background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);color:#fff}.devmod-error{margin-top:10px;padding:12px 14px;border-radius:20px;background:#fee2e2;color:#991b1b;font-size:13px;font-weight:850}.devmod-stat-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-stat{border:1px solid rgba(148,163,184,.22);border-radius:24px;padding:16px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-stat span{display:flex;justify-content:space-between;gap:10px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devmod-stat strong{display:block;margin-top:8px;font-size:clamp(24px,8vw,34px);line-height:1;font-weight:1000;letter-spacing:-.06em}.devmod-stat small{display:block;margin-top:8px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devmod-filters{display:grid;grid-template-columns:1fr;gap:8px;margin-top:10px;padding:10px;border-radius:24px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 18px 45px rgba(15,23,42,.05)}.devmod-filters input,.devmod-filters select{min-height:42px;width:100%;border:1px solid rgba(148,163,184,.3);border-radius:16px;padding:0 12px;background:#fff;color:#0f172a;font-size:13px;font-weight:800}.devmod-filters button{min-height:42px;border:0;border-radius:16px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:13px;font-weight:1000;cursor:pointer}.devmod-card-grid,.devmod-chart-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devmod-record-card,.devmod-chart-card,.devmod-table-card{min-width:0;border:1px solid rgba(148,163,184,.22);border-radius:26px;padding:14px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devmod-record-top{display:flex;align-items:center;justify-content:space-between;gap:10px}.devmod-avatar{width:42px;height:42px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:#fff;font-weight:1000}.devmod-record-card h3{margin:14px 0 0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-record-card p{margin:5px 0 0;color:var(--muted,#64748b);font-size:13px;line-height:1.45}.devmod-note{padding:10px;border-radius:16px;background:#f8fafc;color:#475569!important}.devmod-meta-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.devmod-meta-grid span{padding:10px;border-radius:16px;background:#f8fafc;color:#0f172a;font-size:12px;font-weight:850}.devmod-meta-grid b{display:block;color:var(--muted,#64748b);font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px}.devmod-record-card button{width:100%;min-height:40px;margin-top:14px;border:0;border-radius:999px;background:var(--dev-primary);color:#fff;font-size:12px;font-weight:1000;cursor:pointer}.devmod-chip{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border-radius:999px;font-size:11px;font-weight:1000;white-space:nowrap}.devmod-chip.green{background:#dcfce7;color:#166534}.devmod-chip.blue{background:#dbeafe;color:#1d4ed8}.devmod-chip.orange{background:#ffedd5;color:#c2410c}.devmod-chip.red{background:#fee2e2;color:#b91c1c}.devmod-chip.gray{background:#f1f5f9;color:#475569}.devmod-table-wrap{width:100%;overflow-x:auto}.devmod-table-wrap table{width:100%;min-width:900px;border-collapse:collapse}.devmod-table-wrap th{text-align:left;color:var(--muted,#64748b);font-size:11px;text-transform:uppercase;letter-spacing:.08em;padding:10px;border-bottom:1px solid rgba(148,163,184,.22)}.devmod-table-wrap td{padding:12px 10px;border-bottom:1px solid rgba(148,163,184,.16);font-size:13px}.devmod-table-wrap strong{font-weight:1000}.devmod-chart-card h2{margin:0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devmod-chart-card p{margin:5px 0 10px;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.devmod-legend{display:flex;flex-wrap:wrap;gap:8px;padding-top:8px}.devmod-legend span{display:inline-flex;align-items:center;gap:6px;min-height:28px;border-radius:999px;padding:0 9px;background:#f8fafc;border:1px solid rgba(148,163,184,.18);color:#475569;font-size:11px;font-weight:900}.devmod-legend i{width:9px;height:9px;border-radius:999px}.devmod-empty{grid-column:1/-1;margin:0;padding:18px;border-radius:20px;background:#f8fafc;color:var(--muted,#64748b);font-size:13px;text-align:center;border:1px dashed rgba(148,163,184,.35)}@media(min-width:520px){.devmod-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-meta-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.devmod-filters{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(min-width:820px){.devmod-page{padding:14px}.devmod-header{padding:24px;grid-template-columns:1fr auto;align-items:end}.devmod-card-grid,.devmod-chart-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devmod-filters{grid-template-columns:2fr repeat(5,1fr) auto}.devmod-stat-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}
`,xp=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"];function xq(a){if(!a)return 0;let b="number"==typeof a?a:new Date(a).getTime();return Number.isFinite(b)?b:0}function xr(a){let b=xq(a);return b?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(b)):"Not set"}function xs(a){let b=String(a||"").toLowerCase();return["ok","healthy","active","resolved","success","completed","synced","enabled","open","paid"].includes(b)?"green":["pending","info","queued","processing","draft"].includes(b)?"blue":["warning","degraded","slow","retrying","medium","overdue"].includes(b)?"orange":["error","failed","critical","down","disabled","blocked","urgent","high","suspended"].includes(b)?"red":"gray"}function xt({eyebrow:a,title:b,description:c,viewMode:d,onViewMode:e,onRefresh:f,refreshing:g,actions:h}){return(0,L.jsxs)("section",{className:"devx-hero",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{className:"devx-eyebrow",children:a}),(0,L.jsx)("h1",{children:b}),(0,L.jsx)("p",{children:c})]}),(0,L.jsxs)("div",{className:"devx-hero-actions",children:[(0,L.jsxs)("div",{className:"devx-switch",children:[(0,L.jsx)("button",{className:"cards"===d?"active":"",onClick:()=>e("cards"),type:"button",children:"Cards"}),(0,L.jsx)("button",{className:"table"===d?"active":"",onClick:()=>e("table"),type:"button",children:"Table"}),(0,L.jsx)("button",{className:"analytics"===d?"active":"",onClick:()=>e("analytics"),type:"button",children:"Charts"})]}),h,(0,L.jsx)("button",{className:"devx-glass-btn",onClick:f,disabled:g,type:"button",children:g?"Refreshing...":"Refresh"})]})]})}function xu({title:a,text:b}){return(0,L.jsxs)("section",{className:"devx-state",children:[(0,L.jsx)("div",{className:"devx-spinner"}),(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b})]})}function xv({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"devx-stat",children:[(0,L.jsxs)("span",{children:[a,(0,L.jsx)("b",{children:d})]}),(0,L.jsx)("strong",{children:b}),(0,L.jsx)("small",{children:c})]})}function xw({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`devx-chip ${b}`,children:a})}function xx({text:a}){return(0,L.jsx)("div",{className:"devx-empty",children:a})}function xy({title:a,description:b,children:c}){return(0,L.jsxs)("section",{className:"devx-chart-card",children:[(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function xz({rows:a}){return(0,L.jsx)("div",{className:"devx-legend",children:a.map((a,b)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("i",{style:{background:xp[b%xp.length]}}),a.label,": ",a.value]},`${a.label}-${b}`))})}function xA(){let{accountId:a,authenticated:b,loading:c}=(0,uM.F)(),{settings:d}=(0,uN.t)(),e=d?.primaryColor||"var(--primary-color, #2563eb)",[f,g]=(0,M.useState)("cards"),[h,i]=(0,M.useState)([]),[j,k]=(0,M.useState)(!0),[l,m]=(0,M.useState)(!1),[n,o]=(0,M.useState)(""),[p,q]=(0,M.useState)(""),[r,s]=(0,M.useState)("all"),t=async(a=!1)=>{try{a?m(!0):k(!0),o("");let b=await (0,uL.uE)("/health").catch(async()=>(0,uL.uE)("/developer/system-health").catch(()=>[]));i((function(a,b=[]){if(Array.isArray(a))return a;if(!a||"object"!=typeof a)return[];for(let c of b)if(Array.isArray(a[c]))return a[c];return Array.isArray(a.data)?a.data:Array.isArray(a.items)?a.items:Array.isArray(a.results)?a.results:Array.isArray(a.records)?a.records:Array.isArray(a.rows)?a.rows:[]})(b,["services","checks","health","items"]).map((a,b)=>({...a,id:a.id||String(b)})))}catch(a){o(a?.message||"Could not load system health.")}finally{k(!1),m(!1)}},u=(0,M.useMemo)(()=>{let a=p.trim().toLowerCase();return h.filter(b=>{let c=JSON.stringify(b).toLowerCase(),d=String(b.status||b.severity||"open").toLowerCase();return(!a||c.includes(a))&&("all"===r||d===r)}).sort((a,b)=>xq(b.updatedAt||b.createdAt||b.checkedAt)-xq(a.updatedAt||a.createdAt||a.checkedAt))},[h,p,r]),v=h.filter(a=>"green"===xs(a.status)).length,w=h.filter(a=>"orange"===xs(a.status)).length,x=h.filter(a=>"red"===xs(a.status)).length,y=(0,M.useMemo)(()=>{var a;let b;return a=a=>String(a.status||a.status||"unknown"),b=new Map,h.forEach(c=>{let d=String(a(c)||"Unknown").trim()||"Unknown";b.set(d,(b.get(d)||0)+1)}),Array.from(b.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)},[h]),z=(0,M.useMemo)(()=>{let a=function(a=6){let b=new Date;return Array.from({length:a},(c,d)=>{let e=new Date(b.getFullYear(),b.getMonth()-(a-1-d),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(e)})}(6),b=new Map(a.map(a=>[a,0]));return h.forEach(a=>{let c,d=(c=xq(a.createdAt||a.updatedAt||a.checkedAt))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(c)):"Unknown";b.has(d)&&b.set(d,(b.get(d)||0)+1)}),a.map(a=>({label:a,value:b.get(a)||0}))},[h]);return j||c?(0,L.jsxs)("main",{className:"devx-page",style:{"--dev-primary":e},children:[(0,L.jsx)("style",{children:xB}),(0,L.jsx)(xu,{title:"Loading system health...",text:"Preparing records, filters and analytics."})]}):b&&a?(0,L.jsxs)("main",{className:"devx-page",style:{"--dev-primary":e},children:[(0,L.jsx)("style",{children:xB}),(0,L.jsx)(xt,{eyebrow:"Technical support",title:"System Health",description:"Monitor backend APIs, frontend PWA, network, sync, billing and service status.",viewMode:f,onViewMode:g,onRefresh:()=>t(!0),refreshing:l}),n&&(0,L.jsx)("section",{className:"devx-alert error",children:n}),(0,L.jsxs)("section",{className:"devx-stat-grid",children:[(0,L.jsx)(xv,{label:"Total",value:h.length,detail:`${u.length} after filters`,icon:"\uD83E\uDE7A"}),(0,L.jsx)(xv,{label:"Active / Open",value:v,detail:"Healthy or open records",icon:"✅"}),(0,L.jsx)(xv,{label:"Warnings",value:w,detail:"Needs attention",icon:"⚠️"}),(0,L.jsx)(xv,{label:"Critical",value:x,detail:"Failed or blocked records",icon:"\uD83D\uDEA8"})]}),(0,L.jsxs)("section",{className:"devx-toolbar",children:[(0,L.jsx)("input",{value:p,onChange:a=>q(a.target.value),placeholder:"Search records..."}),(0,L.jsxs)("select",{value:r,onChange:a=>s(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All statuses"}),(0,L.jsx)("option",{value:"open",children:"Open"}),(0,L.jsx)("option",{value:"pending",children:"Pending"}),(0,L.jsx)("option",{value:"resolved",children:"Resolved"}),(0,L.jsx)("option",{value:"healthy",children:"Healthy"}),(0,L.jsx)("option",{value:"failed",children:"Failed"}),(0,L.jsx)("option",{value:"critical",children:"Critical"}),(0,L.jsx)("option",{value:"info",children:"Info"})]}),(0,L.jsx)("button",{type:"button",onClick:()=>{q(""),s("all")},children:"Reset"})]}),"analytics"===f?(0,L.jsxs)("section",{className:"devx-chart-grid",children:[(0,L.jsx)(xy,{title:"Trend over time",description:"Records created or updated in the last six months.",children:(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(ww,{data:z,children:[(0,L.jsx)("defs",{children:(0,L.jsxs)("linearGradient",{id:"DeveloperSystemHealthTrend",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,L.jsx)("stop",{offset:"8%",stopColor:"var(--dev-primary)",stopOpacity:.28}),(0,L.jsx)("stop",{offset:"95%",stopColor:"var(--dev-primary)",stopOpacity:.02})]})}),(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(sZ,{}),(0,L.jsx)(w9,{dataKey:"value",stroke:"var(--dev-primary)",fill:"url(#DeveloperSystemHealthTrend)",strokeWidth:3})]})})}),(0,L.jsxs)(xy,{title:"Status breakdown",description:"Current record distribution by status.",children:[(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:y,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:y.map((a,b)=>(0,L.jsx)(s$,{fill:xp[b%xp.length]},b))})]})}),(0,L.jsx)(xz,{rows:y})]})]}):"table"===f?(0,L.jsxs)("section",{className:"devx-table-card",children:[(0,L.jsx)("div",{className:"devx-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Service"}),(0,L.jsx)("th",{children:"Area"}),(0,L.jsx)("th",{children:"Status"}),(0,L.jsx)("th",{children:"Latency"}),(0,L.jsx)("th",{children:"Uptime"}),(0,L.jsx)("th",{children:"Message"}),(0,L.jsx)("th",{children:"Checked"})]})}),(0,L.jsx)("tbody",{children:u.map(a=>(0,L.jsxs)("tr",{children:[(0,L.jsx)("td",{children:(0,L.jsx)("strong",{children:a.name})}),(0,L.jsx)("td",{children:a.service||"platform"}),(0,L.jsx)("td",{children:(0,L.jsx)(xw,{tone:xs(a.status),children:a.status})}),(0,L.jsxs)("td",{children:[a.latencyMs??0,"ms"]}),(0,L.jsxs)("td",{children:[a.uptimePercent??0,"%"]}),(0,L.jsx)("td",{children:a.message||"—"}),(0,L.jsx)("td",{children:xr(a.checkedAt)})]},a.id))})]})}),!u.length&&(0,L.jsx)(xx,{text:"No records match your filters."})]}):(0,L.jsxs)("section",{className:"devx-card-grid",children:[u.map(a=>(0,L.jsxs)("article",{className:"devx-card",children:[(0,L.jsxs)("div",{className:"devx-record-top",children:[(0,L.jsx)("span",{className:"devx-avatar",children:"\uD83E\uDE7A"}),(0,L.jsx)(xw,{tone:xs(a.status||a.severity),children:a.status||a.severity||"open"})]}),(0,L.jsx)("h3",{children:a.name||"Service"}),(0,L.jsx)("p",{children:a.message||"No service message."}),(0,L.jsxs)("div",{className:"devx-meta-grid",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Area"}),a.service||"platform"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Latency"}),a.latencyMs??0,"ms"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Checked"}),xr(a.checkedAt)]})]})]},a.id)),!u.length&&(0,L.jsx)(xx,{text:"No records match your filters."})]})]}):(0,L.jsxs)("main",{className:"devx-page",style:{"--dev-primary":e},children:[(0,L.jsx)("style",{children:xB}),(0,L.jsx)(xu,{title:"Developer access required",text:"Sign in to view system health."})]})}let xB=`
@keyframes devSpin{to{transform:rotate(360deg)}}.devx-page{min-height:100dvh;width:100%;max-width:100%;padding:8px;padding-bottom:max(28px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--dev-primary) 10%,transparent),transparent 34rem),var(--bg,#f8fafc);color:var(--text,#0f172a);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);overflow-x:hidden}.devx-page *{box-sizing:border-box}.devx-page button,.devx-page input,.devx-page select,.devx-page textarea{font:inherit;max-width:100%}.devx-page button{-webkit-tap-highlight-color:transparent}.devx-state{min-height:min(420px,calc(100dvh - 32px));display:grid;place-items:center;align-content:center;gap:10px;width:min(520px,100%);margin:0 auto;padding:22px;border-radius:28px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 24px 70px rgba(15,23,42,.08);text-align:center}.devx-state h2{margin:0;font-size:clamp(18px,5vw,24px);font-weight:1000;letter-spacing:-.04em}.devx-state p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.devx-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--dev-primary) 18%,transparent);border-top-color:var(--dev-primary);animation:devSpin .8s linear infinite}.devx-hero{display:grid;gap:16px;border-radius:30px;padding:18px;color:#fff;background:radial-gradient(circle at 20% 10%,rgba(255,255,255,.18),transparent 20rem),linear-gradient(135deg,var(--dev-primary),#0f172a 72%);box-shadow:0 24px 70px rgba(15,23,42,.18);overflow:hidden}.devx-eyebrow{display:inline-flex;font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.14em;opacity:.82}.devx-hero h1{margin:8px 0 0;font-size:clamp(28px,8vw,44px);line-height:1.02;font-weight:1000;letter-spacing:-.07em}.devx-hero p{max-width:760px;margin:10px 0 0;font-size:13px;line-height:1.6;opacity:.9}.devx-hero-actions{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.devx-switch{display:inline-flex;gap:5px;padding:5px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(14px)}.devx-switch button{min-height:34px;border:0;border-radius:999px;padding:0 11px;background:transparent;color:rgba(255,255,255,.75);font-size:12px;font-weight:1000;cursor:pointer}.devx-switch button.active{background:#fff;color:#0f172a;box-shadow:0 10px 24px rgba(15,23,42,.16)}.devx-white-btn,.devx-glass-btn,.devx-solid-btn,.devx-soft-btn{min-height:40px;border-radius:999px;padding:0 13px;font-size:12px;font-weight:950;cursor:pointer}.devx-white-btn{border:0;background:#fff;color:#0f172a}.devx-glass-btn{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.14);color:#fff}.devx-solid-btn{border:0;background:var(--dev-primary);color:#fff}.devx-soft-btn{border:0;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary)}.devx-alert{margin-top:10px;padding:12px 14px;border-radius:20px;font-size:13px;font-weight:850}.devx-alert.error{background:#fee2e2;color:#991b1b}.devx-alert.success{background:#dcfce7;color:#166534}.devx-stat-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devx-stat{border:1px solid rgba(148,163,184,.22);border-radius:24px;padding:16px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devx-stat span{display:flex;justify-content:space-between;gap:10px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devx-stat strong{display:block;margin-top:8px;font-size:clamp(24px,8vw,34px);line-height:1;font-weight:1000;letter-spacing:-.06em;overflow-wrap:anywhere}.devx-stat small{display:block;margin-top:8px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devx-toolbar{display:grid;grid-template-columns:1fr;gap:8px;margin-top:10px;padding:10px;border-radius:24px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 18px 45px rgba(15,23,42,.05)}.devx-toolbar input,.devx-toolbar select,.devx-toolbar textarea{min-height:42px;width:100%;border:1px solid rgba(148,163,184,.3);border-radius:16px;padding:0 12px;background:#fff;color:#0f172a;font-size:13px;font-weight:800}.devx-toolbar button{min-height:42px;border:0;border-radius:16px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:13px;font-weight:1000;cursor:pointer}.devx-card-grid,.devx-chart-grid,.devx-main-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devx-card,.devx-chart-card,.devx-table-card{min-width:0;border:1px solid rgba(148,163,184,.22);border-radius:26px;padding:14px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devx-record-top{display:flex;align-items:center;justify-content:space-between;gap:10px}.devx-avatar{width:42px;height:42px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:#fff;font-weight:1000}.devx-card h3{margin:14px 0 0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devx-card p,.devx-chart-card p{margin:5px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.devx-chart-card h2{margin:0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devx-meta-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.devx-meta-grid span{padding:10px;border-radius:16px;background:#f8fafc;color:#0f172a;font-size:12px;font-weight:850}.devx-meta-grid b{display:block;color:var(--muted,#64748b);font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px}.devx-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}.devx-actions button,.devx-actions input{min-height:38px;border:0;border-radius:999px;padding:0 12px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:12px;font-weight:1000}.devx-actions button{cursor:pointer}.devx-actions button.primary{background:var(--dev-primary);color:#fff}.devx-chip{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border-radius:999px;font-size:11px;font-weight:1000;white-space:nowrap}.devx-chip.green{background:#dcfce7;color:#166534}.devx-chip.blue{background:#dbeafe;color:#1d4ed8}.devx-chip.orange{background:#ffedd5;color:#c2410c}.devx-chip.red{background:#fee2e2;color:#b91c1c}.devx-chip.gray{background:#f1f5f9;color:#475569}.devx-table-wrap{width:100%;overflow-x:auto}.devx-table-wrap table{width:100%;min-width:900px;border-collapse:collapse}.devx-table-wrap th{text-align:left;color:var(--muted,#64748b);font-size:11px;text-transform:uppercase;letter-spacing:.08em;padding:10px;border-bottom:1px solid rgba(148,163,184,.22)}.devx-table-wrap td{padding:12px 10px;border-bottom:1px solid rgba(148,163,184,.16);font-size:13px;vertical-align:top}.devx-table-wrap strong{font-weight:1000}.devx-empty{grid-column:1/-1;margin:0;padding:18px;border-radius:20px;background:#f8fafc;color:var(--muted,#64748b);font-size:13px;text-align:center;border:1px dashed rgba(148,163,184,.35)}.devx-legend{display:flex;flex-wrap:wrap;gap:8px;padding-top:8px}.devx-legend span{display:inline-flex;align-items:center;gap:6px;min-height:28px;border-radius:999px;padding:0 9px;background:#f8fafc;border:1px solid rgba(148,163,184,.18);color:#475569;font-size:11px;font-weight:900}.devx-legend i{width:9px;height:9px;border-radius:999px}@media(min-width:520px){.devx-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devx-toolbar{grid-template-columns:repeat(2,minmax(0,1fr))}.devx-meta-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:760px){.devx-card-grid,.devx-chart-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(min-width:920px){.devx-page{padding:14px}.devx-hero{grid-template-columns:1fr auto;align-items:end;padding:24px}.devx-stat-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.devx-toolbar{grid-template-columns:2fr repeat(4,minmax(130px,1fr)) auto}.devx-main-grid{grid-template-columns:1.3fr .7fr}}@media(min-width:1180px){.devx-card-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
`,xC=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"];function xD(a){let b=function(a){if(!a)return 0;let b="number"==typeof a?a:new Date(a).getTime();return Number.isFinite(b)?b:0}(a);return b?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(b)):"Not set"}function xE(a,b){let c=new Map;return a.forEach(a=>{let d=String(b(a)||"Unknown").trim()||"Unknown";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)}function xF({eyebrow:a,title:b,description:c,viewMode:d,onViewMode:e,onRefresh:f,refreshing:g,actions:h}){return(0,L.jsxs)("section",{className:"devx-hero",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{className:"devx-eyebrow",children:a}),(0,L.jsx)("h1",{children:b}),(0,L.jsx)("p",{children:c})]}),(0,L.jsxs)("div",{className:"devx-hero-actions",children:[(0,L.jsxs)("div",{className:"devx-switch",children:[(0,L.jsx)("button",{className:"cards"===d?"active":"",onClick:()=>e("cards"),type:"button",children:"Cards"}),(0,L.jsx)("button",{className:"table"===d?"active":"",onClick:()=>e("table"),type:"button",children:"Table"}),(0,L.jsx)("button",{className:"analytics"===d?"active":"",onClick:()=>e("analytics"),type:"button",children:"Charts"})]}),h,(0,L.jsx)("button",{className:"devx-glass-btn",onClick:f,disabled:g,type:"button",children:g?"Refreshing...":"Refresh"})]})]})}function xG({title:a,text:b}){return(0,L.jsxs)("section",{className:"devx-state",children:[(0,L.jsx)("div",{className:"devx-spinner"}),(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b})]})}function xH({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"devx-stat",children:[(0,L.jsxs)("span",{children:[a,(0,L.jsx)("b",{children:d})]}),(0,L.jsx)("strong",{children:b}),(0,L.jsx)("small",{children:c})]})}function xI({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`devx-chip ${b}`,children:a})}function xJ({text:a}){return(0,L.jsx)("div",{className:"devx-empty",children:a})}function xK({title:a,description:b,children:c}){return(0,L.jsxs)("section",{className:"devx-chart-card",children:[(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function xL({rows:a}){return(0,L.jsx)("div",{className:"devx-legend",children:a.map((a,b)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("i",{style:{background:xC[b%xC.length]}}),a.label,": ",a.value]},`${a.label}-${b}`))})}let xM=[{key:"platformName",label:"Platform Name",value:"Eleeveon",category:"Branding",description:"Name shown across developer tools.",type:"text"},{key:"defaultCurrency",label:"Default Currency",value:"GHS",category:"Billing",description:"Default billing currency.",type:"text"},{key:"trialDays",label:"Default Trial Days",value:14,category:"Billing",description:"Trial length for new accounts.",type:"number"},{key:"maintenanceMode",label:"Maintenance Mode",value:!1,category:"System",description:"Temporarily restrict platform access.",type:"boolean"},{key:"allowNewSignups",label:"Allow New Signups",value:!0,category:"Access",description:"Permit new SaaS client registration.",type:"boolean"},{key:"enableAdvancedAnalytics",label:"Advanced Analytics",value:!0,category:"Features",description:"Enable platform-wide charts and insights.",type:"boolean"},{key:"enableApiAccess",label:"API Access",value:!1,category:"Integrations",description:"Allow external API keys and integrations.",type:"boolean"}],xN=`
@keyframes devSpin{to{transform:rotate(360deg)}}.devx-page{min-height:100dvh;width:100%;max-width:100%;padding:8px;padding-bottom:max(28px,env(safe-area-inset-bottom));background:radial-gradient(circle at top left,color-mix(in srgb,var(--dev-primary) 10%,transparent),transparent 34rem),var(--bg,#f8fafc);color:var(--text,#0f172a);font-family:var(--font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);overflow-x:hidden}.devx-page *{box-sizing:border-box}.devx-page button,.devx-page input,.devx-page select,.devx-page textarea{font:inherit;max-width:100%}.devx-page button{-webkit-tap-highlight-color:transparent}.devx-state{min-height:min(420px,calc(100dvh - 32px));display:grid;place-items:center;align-content:center;gap:10px;width:min(520px,100%);margin:0 auto;padding:22px;border-radius:28px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 24px 70px rgba(15,23,42,.08);text-align:center}.devx-state h2{margin:0;font-size:clamp(18px,5vw,24px);font-weight:1000;letter-spacing:-.04em}.devx-state p{margin:0;color:var(--muted,#64748b);font-size:13px;line-height:1.6}.devx-spinner{width:38px;height:38px;border-radius:999px;border:4px solid color-mix(in srgb,var(--dev-primary) 18%,transparent);border-top-color:var(--dev-primary);animation:devSpin .8s linear infinite}.devx-hero{display:grid;gap:16px;border-radius:30px;padding:18px;color:#fff;background:radial-gradient(circle at 20% 10%,rgba(255,255,255,.18),transparent 20rem),linear-gradient(135deg,var(--dev-primary),#0f172a 72%);box-shadow:0 24px 70px rgba(15,23,42,.18);overflow:hidden}.devx-eyebrow{display:inline-flex;font-size:11px;font-weight:1000;text-transform:uppercase;letter-spacing:.14em;opacity:.82}.devx-hero h1{margin:8px 0 0;font-size:clamp(28px,8vw,44px);line-height:1.02;font-weight:1000;letter-spacing:-.07em}.devx-hero p{max-width:760px;margin:10px 0 0;font-size:13px;line-height:1.6;opacity:.9}.devx-hero-actions{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.devx-switch{display:inline-flex;gap:5px;padding:5px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(14px)}.devx-switch button{min-height:34px;border:0;border-radius:999px;padding:0 11px;background:transparent;color:rgba(255,255,255,.75);font-size:12px;font-weight:1000;cursor:pointer}.devx-switch button.active{background:#fff;color:#0f172a;box-shadow:0 10px 24px rgba(15,23,42,.16)}.devx-white-btn,.devx-glass-btn,.devx-solid-btn,.devx-soft-btn{min-height:40px;border-radius:999px;padding:0 13px;font-size:12px;font-weight:950;cursor:pointer}.devx-white-btn{border:0;background:#fff;color:#0f172a}.devx-glass-btn{border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.14);color:#fff}.devx-solid-btn{border:0;background:var(--dev-primary);color:#fff}.devx-soft-btn{border:0;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary)}.devx-alert{margin-top:10px;padding:12px 14px;border-radius:20px;font-size:13px;font-weight:850}.devx-alert.error{background:#fee2e2;color:#991b1b}.devx-alert.success{background:#dcfce7;color:#166534}.devx-stat-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devx-stat{border:1px solid rgba(148,163,184,.22);border-radius:24px;padding:16px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devx-stat span{display:flex;justify-content:space-between;gap:10px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devx-stat strong{display:block;margin-top:8px;font-size:clamp(24px,8vw,34px);line-height:1;font-weight:1000;letter-spacing:-.06em;overflow-wrap:anywhere}.devx-stat small{display:block;margin-top:8px;color:var(--muted,#64748b);font-size:12px;font-weight:850}.devx-toolbar{display:grid;grid-template-columns:1fr;gap:8px;margin-top:10px;padding:10px;border-radius:24px;background:var(--surface,#fff);border:1px solid rgba(148,163,184,.22);box-shadow:0 18px 45px rgba(15,23,42,.05)}.devx-toolbar input,.devx-toolbar select,.devx-toolbar textarea{min-height:42px;width:100%;border:1px solid rgba(148,163,184,.3);border-radius:16px;padding:0 12px;background:#fff;color:#0f172a;font-size:13px;font-weight:800}.devx-toolbar button{min-height:42px;border:0;border-radius:16px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:13px;font-weight:1000;cursor:pointer}.devx-card-grid,.devx-chart-grid,.devx-main-grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px}.devx-card,.devx-chart-card,.devx-table-card{min-width:0;border:1px solid rgba(148,163,184,.22);border-radius:26px;padding:14px;background:var(--surface,#fff);box-shadow:0 18px 45px rgba(15,23,42,.06)}.devx-record-top{display:flex;align-items:center;justify-content:space-between;gap:10px}.devx-avatar{width:42px;height:42px;border-radius:18px;display:grid;place-items:center;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:#fff;font-weight:1000}.devx-card h3{margin:14px 0 0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devx-card p,.devx-chart-card p{margin:5px 0 0;color:var(--muted,#64748b);font-size:12px;line-height:1.5}.devx-chart-card h2{margin:0;font-size:17px;font-weight:1000;letter-spacing:-.04em}.devx-meta-grid{display:grid;grid-template-columns:1fr;gap:8px;margin-top:14px}.devx-meta-grid span{padding:10px;border-radius:16px;background:#f8fafc;color:#0f172a;font-size:12px;font-weight:850}.devx-meta-grid b{display:block;color:var(--muted,#64748b);font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px}.devx-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}.devx-actions button,.devx-actions input{min-height:38px;border:0;border-radius:999px;padding:0 12px;background:color-mix(in srgb,var(--dev-primary) 10%,white);color:var(--dev-primary);font-size:12px;font-weight:1000}.devx-actions button{cursor:pointer}.devx-actions button.primary{background:var(--dev-primary);color:#fff}.devx-chip{display:inline-flex;align-items:center;justify-content:center;min-height:28px;padding:0 10px;border-radius:999px;font-size:11px;font-weight:1000;white-space:nowrap}.devx-chip.green{background:#dcfce7;color:#166534}.devx-chip.blue{background:#dbeafe;color:#1d4ed8}.devx-chip.orange{background:#ffedd5;color:#c2410c}.devx-chip.red{background:#fee2e2;color:#b91c1c}.devx-chip.gray{background:#f1f5f9;color:#475569}.devx-table-wrap{width:100%;overflow-x:auto}.devx-table-wrap table{width:100%;min-width:900px;border-collapse:collapse}.devx-table-wrap th{text-align:left;color:var(--muted,#64748b);font-size:11px;text-transform:uppercase;letter-spacing:.08em;padding:10px;border-bottom:1px solid rgba(148,163,184,.22)}.devx-table-wrap td{padding:12px 10px;border-bottom:1px solid rgba(148,163,184,.16);font-size:13px;vertical-align:top}.devx-table-wrap strong{font-weight:1000}.devx-empty{grid-column:1/-1;margin:0;padding:18px;border-radius:20px;background:#f8fafc;color:var(--muted,#64748b);font-size:13px;text-align:center;border:1px dashed rgba(148,163,184,.35)}.devx-legend{display:flex;flex-wrap:wrap;gap:8px;padding-top:8px}.devx-legend span{display:inline-flex;align-items:center;gap:6px;min-height:28px;border-radius:999px;padding:0 9px;background:#f8fafc;border:1px solid rgba(148,163,184,.18);color:#475569;font-size:11px;font-weight:900}.devx-legend i{width:9px;height:9px;border-radius:999px}@media(min-width:520px){.devx-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devx-toolbar{grid-template-columns:repeat(2,minmax(0,1fr))}.devx-meta-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(min-width:760px){.devx-card-grid,.devx-chart-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(min-width:920px){.devx-page{padding:14px}.devx-hero{grid-template-columns:1fr auto;align-items:end;padding:24px}.devx-stat-grid{grid-template-columns:repeat(4,minmax(0,1fr))}.devx-toolbar{grid-template-columns:2fr repeat(4,minmax(130px,1fr)) auto}.devx-main-grid{grid-template-columns:1.3fr .7fr}}@media(min-width:1180px){.devx-card-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
`;var xO=c(47984);let xP=[{value:"developer",label:"Developer",backendRole:"developer",description:"Core engineering access. Use carefully."},{value:"platform_admin",label:"Platform Admin",backendRole:"platform_team",description:"Leads platform operations without raw database power."},{value:"support_agent",label:"Support Agent",backendRole:"platform_team",description:"Handles tickets, onboarding support and client issues."},{value:"billing_officer",label:"Billing Officer",backendRole:"platform_team",description:"Handles subscriptions, invoices and payment follow-up."},{value:"qa_tester",label:"QA Tester",backendRole:"platform_team",description:"Tests releases, features, bugs and platform quality."},{value:"sync_technician",label:"Sync Technician",backendRole:"platform_team",description:"Supports offline-first sync and diagnostics."}],xQ=["Engineering","Support","Billing","QA","Operations","Management"],xR=[{key:"canViewAccounts",label:"View Accounts",description:"Can view SaaS client accounts."},{key:"canManageAccounts",label:"Manage Accounts",description:"Can edit onboarding and safe account details."},{key:"canManageSubscriptions",label:"Manage Subscriptions",description:"Can help with plan and subscription support."},{key:"canViewPayments",label:"View Payments",description:"Can inspect billing and payment records."},{key:"canManagePayments",label:"Manage Payments",description:"Can verify or reconcile payment records."},{key:"canResolveSupport",label:"Resolve Support",description:"Can handle and close support tickets."},{key:"canViewDiagnostics",label:"View Diagnostics",description:"Can inspect sync and system health tools."},{key:"canViewAuditLogs",label:"View Audit Logs",description:"Can inspect security and activity logs.",danger:!0},{key:"canManageReleases",label:"Manage Releases",description:"Can prepare releases, rollbacks and changelogs.",danger:!0},{key:"canManageBackups",label:"Manage Backups",description:"Can run backup and recovery operations.",danger:!0},{key:"canManageSettings",label:"Manage Settings",description:"Can change platform-team settings.",danger:!0}],xS={canViewAccounts:!1,canManageAccounts:!1,canManageSubscriptions:!1,canViewPayments:!1,canManagePayments:!1,canResolveSupport:!1,canViewDiagnostics:!1,canViewAuditLogs:!1,canManageReleases:!1,canManageBackups:!1,canManageSettings:!1},xT={developer:Object.fromEntries(Object.keys(xS).map(a=>[a,!0])),platform_admin:{...xS,canViewAccounts:!0,canManageAccounts:!0,canManageSubscriptions:!0,canViewPayments:!0,canResolveSupport:!0,canViewDiagnostics:!0,canViewAuditLogs:!0,canManageReleases:!0},support_agent:{...xS,canViewAccounts:!0,canResolveSupport:!0,canViewDiagnostics:!0},billing_officer:{...xS,canViewAccounts:!0,canManageSubscriptions:!0,canViewPayments:!0,canManagePayments:!0},qa_tester:{...xS,canViewDiagnostics:!0,canManageReleases:!0},sync_technician:{...xS,canViewAccounts:!0,canResolveSupport:!0,canViewDiagnostics:!0}},xU={fullName:"",email:"",phone:"",role:"support_agent",department:"Support",title:"",status:"active",permissions:{...xT.support_agent},temporaryPassword:"",mustChangePassword:!0},xV=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],xW=a=>{if(!a)return 0;let b="number"==typeof a?a:new Date(a).getTime();return Number.isFinite(b)?b:0};function xX(a){let b=String(a||"auth").replace(/[^a-zA-Z0-9_-]/g,""),c="u">typeof crypto&&"function"==typeof crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`;return`${b}_${c}`}function xY(a){let b=a?.schema?.primKey;return b?.keyPath==="id"&&b?.auto===!1}function xZ(a){return xY(a)?new Date().toISOString():Date.now()}function x$(...a){let b=xO.db;for(let c of a)if(b[c])return b[c];return null}async function x_(...a){let b=x$(...a);return b?.toArray?b.toArray():[]}function x0(a){return String(a??"").trim().toLowerCase()}function x1(a){return String(a??"").trim().replace(/\s+/g," ")}function x2(a){let b=x0(a).split("@")[0].replace(/[^a-zA-Z0-9._-]/g,""),c=Math.random().toString(36).slice(2,6).toUpperCase();return`${b||"team"}@${new Date().getFullYear()}${c}`}function x3(a){return a?.id??a?.localId}let x4=a=>xP.find(b=>b.value===a),x5=a=>x4(a)?.label||String(a||"Team Member"),x6=a=>x4(a)?.backendRole||"platform_team",x7=a=>"active"===a?"green":"suspended"===a?"red":"gray",x8=a=>a?Object.values(a).filter(Boolean).length:0;async function x9(a,b){try{return await (0,uL.uE)(a,{method:b.method,body:b.body})}catch(d){let c=String(d?.message||d||"Request failed");throw Error(`${b.method} ${a} failed: ${c}`)}}async function ya(a){let b=null;for(let c of a)try{return await x9(c.endpoint,{method:c.method,body:c.body})}catch(a){if(b=a,!function(a){let b=String(a?.message||a?.statusText||a||"").toLowerCase();return a?.status===404||a?.statusCode===404||b.includes("404")||b.includes("not found")||b.includes("cannot ")||b.includes("no route")}(a))break}throw b||Error("No auth endpoint accepted the request.")}function yb(a){return Array.isArray(a)?a:Array.isArray(a?.data)?a.data:Array.isArray(a?.items)?a.items:Array.isArray(a?.rows)?a.rows:Array.isArray(a?.results)?a.results:Array.isArray(a?.users)?a.users:Array.isArray(a?.members)?a.members:[]}function yc(a){}function yd(a,b,c){let d=x0(a?.email||b?.email),e=String(x3(a)||b?.userId||""),f=String(b?.id||b?.localId||"");return c.find(a=>a.userId&&e&&String(a.userId)===e||a.membershipId&&f&&String(a.membershipId)===f||a.email&&d&&x0(a.email)===d)}function ye(a,b){let c=a.platformRole||a.role||"support_agent",d=xP.some(a=>a.value===c)?c:"developer"===a.role?"developer":"support_agent",e=a.backendRole||x6(d);return{id:String(a.id||a.localId||a.userId||a.email||`team-${b}-${Date.now()}`),userId:a.userId||a.id,membershipId:a.membershipId,fullName:a.fullName||a.name||a.displayName||"Unnamed Team Member",email:x0(a.email),phone:a.phone||"",role:d,backendRole:e,department:a.department||"Support",title:a.title||a.jobTitle||x5(d),status:a.status||(!1===a.active?"inactive":"active"),permissions:{...xS,...xT[d],...a.permissions||{}},temporaryPassword:a.temporaryPassword,mustChangePassword:!!a.mustChangePassword,lastActiveAt:a.lastActiveAt||a.lastLoginAt||a.updatedAt||null,createdAt:a.createdAt||Date.now(),updatedAt:a.updatedAt||Date.now()}}function yf(a,b,c){let d=b.filter(a=>{let b=String(a.role||"").toLowerCase();return!a.isDeleted&&("developer"===b||"platform_team"===b||"platform_admin"===b)}).map((b,d)=>{let e=a.find(a=>String(x3(a)||"")===String(b?.userId??b?.userLocalId??b?.accountUserId??""))||a.find(a=>x0(a.email)===x0(b.email)),f=yd(e,b,c),g="developer"===String(b.role||e?.role||"platform_team")?"developer":"platform_team",h=f?.platformRole||("developer"===g?"developer":"support_agent");return ye({id:x3(e)||b.userId||b.id,userId:x3(e)||b.userId,membershipId:b.id||b.localId,fullName:e?.fullName||e?.name||b.fullName||e?.email||b.email,email:e?.email||b.email,phone:e?.phone,role:h,backendRole:g,department:f?.department,title:f?.title,permissions:f?.permissions,status:!1===b.active||e?.active===!1||"inactive"===b.status||e?.status==="inactive"?"inactive":"suspended"===b.status||e?.status==="suspended"?"suspended":"active",temporaryPassword:f?.temporaryPassword||e?.temporaryPassword,mustChangePassword:f?.mustChangePassword??b.mustChangePassword??e?.mustChangePassword,lastActiveAt:e?.lastLoginAt||e?.updatedAt,createdAt:b.createdAt||e?.createdAt,updatedAt:b.updatedAt||e?.updatedAt||f?.updatedAt},d)}),e=new Set(d.map(a=>x0(a.email)).filter(Boolean));return[...d,...a.filter(a=>{let b=String(a.role||"").toLowerCase(),c=x0(a.email);return!a.isDeleted&&!e.has(c)&&("developer"===b||"platform_team"===b)}).map((a,b)=>{let d=yd(a,void 0,c),e="developer"===a.role?"developer":"platform_team",f=d?.platformRole||("developer"===e?"developer":"support_agent");return ye({id:x3(a),userId:x3(a),fullName:a.fullName||a.name||a.email,email:a.email,phone:a.phone,role:f,backendRole:e,department:d?.department,title:d?.title,permissions:d?.permissions,status:!1===a.active||"inactive"===a.status?"inactive":"suspended"===a.status?"suspended":"active",temporaryPassword:d?.temporaryPassword||a.temporaryPassword,mustChangePassword:d?.mustChangePassword??a.mustChangePassword,lastActiveAt:a.lastLoginAt||a.updatedAt,createdAt:a.createdAt,updatedAt:a.updatedAt||d?.updatedAt},b)})].sort((a,b)=>("active"===a.status?-1:1)-("active"===b.status?-1:1)||xW(b.updatedAt||b.createdAt)-xW(a.updatedAt||a.createdAt))}function yg(a){return{fullName:a.fullName,email:a.email,phone:a.phone||void 0,password:a.password,role:a.role,mustChangePassword:a.mustChangePassword,platformRole:a.platformRole,department:a.department,title:a.title,permissions:a.permissions,active:a.active}}function yh(a){return{fullName:a.fullName,phone:a.phone||void 0,role:a.role,platformRole:a.platformRole,department:a.department,title:a.title,permissions:a.permissions,active:a.active}}function yi(a,b){return a?.user||a?.appUser||a?.accountUser||a?.data?.user||a?.data?.appUser||a?.data?.accountUser||a?.data||a||b}async function yj(){let a=await ya([{endpoint:"/accounts/me/users?role=platform_team",method:"GET"},{endpoint:"/accounts/me/users?role=developer",method:"GET"},{endpoint:"/accounts/me/users",method:"GET"}]);if(Array.isArray(a))return a;let b=await x9("/accounts/me/users?role=developer",{method:"GET"}).catch(()=>null),c=yb(a),d=yb(b),e=new Map;return[...c,...d].forEach(a=>e.set(x0(a.email||a.id),a)),Array.from(e.values())}async function yk(a){if(a.userId){let b=await ya([{endpoint:`/accounts/users/${encodeURIComponent(a.userId)}`,method:"PATCH",body:yh(a)},{endpoint:`/developer/team/${encodeURIComponent(a.userId)}`,method:"PATCH",body:yh(a)},{endpoint:`/platform-team/${encodeURIComponent(a.userId)}`,method:"PATCH",body:yh(a)}]),c=null;try{c=await x9(`/accounts/users/${encodeURIComponent(a.userId)}/status`,{method:"PATCH",body:{active:a.active}})}catch(a){console.warn("Failed to update platform team user status:",a)}return{user:{...b||{},...c||{},id:a.userId,accountId:a.accountId,email:a.email,fullName:a.fullName,phone:a.phone,role:a.role,active:a.active},membership:{id:a.membershipId,accountId:a.accountId,userId:a.userId,email:a.email,fullName:a.fullName,role:a.role,schoolId:null,branchId:null,teacherLocalId:null,studentLocalId:null,parentLocalId:null,active:a.active,status:a.status}}}let b=await ya([{endpoint:"/accounts/me/users",method:"POST",body:yg(a)},{endpoint:"/developer/team",method:"POST",body:yg(a)},{endpoint:"/platform-team",method:"POST",body:yg(a)}]),c=b?.memberships?.find?.(b=>String(b.role)===a.role)||b?.memberships?.[0]||{accountId:a.accountId,userId:x3(b),email:a.email,fullName:a.fullName,role:a.role,schoolId:null,branchId:null,teacherLocalId:null,studentLocalId:null,parentLocalId:null,active:a.active,status:a.status};return{user:b,membership:c}}async function yl(a){let b=x$("users","accountUsers","appUsers");if(!b)return;let c=xZ(b),d=x3(a.user)||xX("user"),e={...a.user,id:d,accountId:a.payload.accountId,fullName:a.payload.fullName,name:a.payload.name,email:a.payload.email,phone:a.payload.phone,role:a.payload.role,active:a.payload.active,status:a.payload.status,temporaryPassword:a.payload.temporaryPassword,mustChangePassword:a.payload.mustChangePassword,isDeleted:!1,updatedAt:c},f=await b.get(d).catch(()=>void 0)||await b.where?.("email")?.equals?.(a.payload.email)?.first?.().catch(()=>void 0);f?.id?await b.update(f.id,{...e,version:Number(f.version||0)+1}):await b.add({...xY(b)?{id:d}:{},...e,createdAt:c,version:1})}async function ym(a){let b=x$("userMemberships","memberships");if(!b)return;let c=xZ(b),d=String(x3(a.user)||a.payload.userId||""),e=a.membership.id||a.payload.membershipId||xX("membership"),f={...a.membership,id:e,accountId:a.payload.accountId,userId:d,userLocalId:null,accountUserId:null,fullName:a.payload.fullName,email:a.payload.email,role:a.payload.role,schoolId:null,branchId:null,teacherLocalId:null,studentLocalId:null,parentLocalId:null,active:a.payload.active,status:a.payload.status,mustChangePassword:a.payload.mustChangePassword,isDeleted:!1,updatedAt:c},g=await b.get(e).catch(()=>void 0)||await b.where?.("userId")?.equals?.(d)?.first?.().catch(()=>void 0);g?.id?await b.update(g.id,{...f,version:Number(g.version||0)+1}):await b.add({...xY(b)?{id:e}:{},...f,createdAt:c,version:1})}async function yn(a){let b=x$("userMemberships","memberships"),c=x$("users","accountUsers","appUsers");if(b&&a.membershipId)try{await b.delete(a.membershipId)}catch(a){console.warn("Failed to remove local platform team membership cache:",a)}if(c&&a.userId)try{await c.delete(a.userId)}catch(a){console.warn("Failed to remove local platform team user cache:",a)}}let yo=(a,b)=>{let c=new Map;return a.forEach(a=>{let d=String(b(a)||"Unknown").trim()||"Unknown";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)};function yp(a,b){let c=a.role,d=x6(c),e=x0(a.email),f=a.temporaryPassword.trim()||x2(e);return{accountId:b,fullName:a.fullName.trim(),name:a.fullName.trim(),email:e,phone:x1(a.phone)||void 0,password:f,temporaryPassword:f,role:d,platformRole:c,department:a.department,title:a.title.trim()||x5(c),permissions:a.permissions,mustChangePassword:a.mustChangePassword,active:"active"===a.status,status:a.status,userId:a.userId,membershipId:a.membershipId}}function yq({members:a,onEdit:b,onStatus:c,onDelete:d,navigate:e}){return(0,L.jsxs)("section",{className:"devteam-card-grid",children:[a.map(a=>{let f,g;return(0,L.jsxs)("article",{className:`devteam-member-card ${a.status}`,children:[(0,L.jsxs)("div",{className:"devteam-member-top",children:[(0,L.jsx)("span",{className:"devteam-avatar",children:String(a.fullName||"Team").split(/\s+/).filter(Boolean).slice(0,2).map(a=>a[0]?.toUpperCase()).join("")||"TM"}),(0,L.jsx)(yw,{tone:x7(a.status),children:a.status})]}),(0,L.jsx)("h2",{children:a.fullName}),(0,L.jsx)("p",{children:a.title||x5(a.role)}),(0,L.jsxs)("div",{className:"devteam-mini-grid",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Email"}),a.email||"—"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Login Role"}),a.backendRole]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Team Role"}),x5(a.role)]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Department"}),a.department]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Permissions"}),x8(a.permissions),"/",xR.length]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Temp Password"}),a.temporaryPassword||"Hidden/changed"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Last Active"}),(f=xW(a.lastActiveAt))?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(f)):"Not set"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Updated"}),(g=xW(a.updatedAt))?new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(g)):"Not set"]})]}),(0,L.jsxs)("div",{className:"devteam-permission-pills",children:[xR.filter(b=>a.permissions[b.key]).slice(0,5).map(a=>(0,L.jsx)("span",{children:a.label},a.key)),x8(a.permissions)>5&&(0,L.jsxs)("span",{children:["+",x8(a.permissions)-5," more"]}),!x8(a.permissions)&&(0,L.jsx)("span",{children:"No permissions"})]}),(0,L.jsxs)("div",{className:"devteam-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Edit"}),"active"===a.status?(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"inactive"),children:"Deactivate"}):(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"active"),children:"Reactivate"}),"suspended"!==a.status&&(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"suspended"),children:"Suspend"}),(0,L.jsx)("button",{type:"button",onClick:()=>e?.("auditLogs"),children:"Audit"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>d(a),children:"Remove"})]})]},a.id)}),!a.length&&(0,L.jsx)(yx,{text:"No platform team members match your filters."})]})}function yr({members:a,onEdit:b,onStatus:c,onDelete:d}){return(0,L.jsxs)("section",{className:"devteam-table-card",children:[(0,L.jsx)("div",{className:"devteam-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Member"}),(0,L.jsx)("th",{children:"Login Role"}),(0,L.jsx)("th",{children:"Team Role"}),(0,L.jsx)("th",{children:"Department"}),(0,L.jsx)("th",{children:"Status"}),(0,L.jsx)("th",{children:"Permissions"}),(0,L.jsx)("th",{children:"Temporary Password"}),(0,L.jsx)("th",{children:"Actions"})]})}),(0,L.jsx)("tbody",{children:a.map(a=>{let e;return(0,L.jsxs)("tr",{children:[(0,L.jsxs)("td",{children:[(0,L.jsx)("strong",{children:a.fullName}),(0,L.jsx)("small",{children:a.email})]}),(0,L.jsx)("td",{children:(0,L.jsx)(yw,{tone:"developer"===a.backendRole?"purple":"blue",children:a.backendRole})}),(0,L.jsx)("td",{children:(0,L.jsx)(yw,{tone:"developer"===(e=a.role)?"purple":"platform_admin"===e?"blue":"billing_officer"===e?"green":"support_agent"===e?"orange":"gray",children:x5(a.role)})}),(0,L.jsx)("td",{children:a.department}),(0,L.jsx)("td",{children:(0,L.jsx)(yw,{tone:x7(a.status),children:a.status})}),(0,L.jsxs)("td",{children:[x8(a.permissions),"/",xR.length]}),(0,L.jsx)("td",{children:a.temporaryPassword||"Hidden/changed"}),(0,L.jsx)("td",{children:(0,L.jsxs)("div",{className:"devteam-table-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Edit"}),"active"===a.status?(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"inactive"),children:"Deactivate"}):(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"active"),children:"Reactivate"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>d(a),children:"Remove"})]})})]},a.id)})})]})}),!a.length&&(0,L.jsx)(yx,{text:"No platform team members match your filters."})]})}function ys({roleChart:a,departmentChart:b,statusChart:c,growthChart:d}){return(0,L.jsxs)("section",{className:"devteam-analytics",children:[(0,L.jsx)(yv,{title:"Team Roles",children:(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(vO,{data:a,dataKey:"value",nameKey:"label",innerRadius:52,outerRadius:88,children:a.map((a,b)=>(0,L.jsx)(s$,{fill:xV[b%xV.length]},b))}),(0,L.jsx)(sZ,{})]})})}),(0,L.jsx)(yv,{title:"Departments",children:(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(pA,{data:b,children:[(0,L.jsx)(q1,{strokeDasharray:"3 3"}),(0,L.jsx)(rh,{dataKey:"label"}),(0,L.jsx)(rs,{allowDecimals:!1}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--dev-primary)",radius:[8,8,0,0]})]})})}),(0,L.jsx)(yv,{title:"Status",children:(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(vO,{data:c,dataKey:"value",nameKey:"label",outerRadius:88,children:c.map((a,b)=>(0,L.jsx)(s$,{fill:xV[(b+2)%xV.length]},b))}),(0,L.jsx)(sZ,{})]})})}),(0,L.jsx)(yv,{title:"Added Over Time",children:(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(pA,{data:d,children:[(0,L.jsx)(q1,{strokeDasharray:"3 3"}),(0,L.jsx)(rh,{dataKey:"label"}),(0,L.jsx)(rs,{allowDecimals:!1}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--dev-primary)",radius:[8,8,0,0]})]})})})]})}function yt({form:a,updateForm:b,setForm:c,saving:d,onClose:e,onSubmit:f}){return(0,L.jsx)("div",{className:"devteam-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,L.jsxs)("form",{className:"devteam-modal",onSubmit:f,children:[(0,L.jsxs)("div",{className:"devteam-modal-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:a.id?"Edit Platform Team Login":"Add Platform Team Login"}),(0,L.jsx)("p",{children:a.id?"Update backend login profile and local team metadata.":"Creates AppUser + UserMembership first so the person can sign in."})]}),(0,L.jsx)("button",{type:"button",onClick:e,children:"\xd7"})]}),(0,L.jsxs)("div",{className:"devteam-form-grid",children:[(0,L.jsxs)("label",{children:["Full Name",(0,L.jsx)("input",{value:a.fullName,onChange:a=>b("fullName",a.target.value),placeholder:"e.g. Ama Mensah"})]}),(0,L.jsxs)("label",{children:["Email / Login",(0,L.jsx)("input",{value:a.email,onChange:a=>b("email",a.target.value),placeholder:"name@example.com"})]}),(0,L.jsxs)("label",{children:["Phone",(0,L.jsx)("input",{value:a.phone,onChange:a=>b("phone",a.target.value),placeholder:"024..."})]}),(0,L.jsxs)("label",{children:["Title",(0,L.jsx)("input",{value:a.title,onChange:a=>b("title",a.target.value),placeholder:"Support Lead"})]}),(0,L.jsxs)("label",{children:["Team Role",(0,L.jsx)("select",{value:a.role,onChange:a=>b("role",a.target.value),children:xP.map(a=>(0,L.jsxs)("option",{value:a.value,children:[a.label," → login as ",a.backendRole]},a.value))})]}),(0,L.jsxs)("label",{children:["Department",(0,L.jsx)("select",{value:a.department,onChange:a=>b("department",a.target.value),children:xQ.map(a=>(0,L.jsx)("option",{value:a,children:a},a))})]}),(0,L.jsxs)("label",{children:["Status",(0,L.jsxs)("select",{value:a.status,onChange:a=>b("status",a.target.value),children:[(0,L.jsx)("option",{value:"active",children:"Active"}),(0,L.jsx)("option",{value:"inactive",children:"Inactive"}),(0,L.jsx)("option",{value:"suspended",children:"Suspended"})]})]}),(0,L.jsxs)("label",{children:["Temporary Password",(0,L.jsxs)("div",{className:"password-row",children:[(0,L.jsx)("input",{value:a.temporaryPassword,onChange:a=>b("temporaryPassword",a.target.value),placeholder:"Required for first login"}),(0,L.jsx)("button",{type:"button",onClick:()=>b("temporaryPassword",x2(a.email)),children:"Generate"})]})]})]}),(0,L.jsxs)("label",{className:"devteam-check",children:[(0,L.jsx)("input",{type:"checkbox",checked:a.mustChangePassword,onChange:a=>b("mustChangePassword",a.target.checked)})," Force password change after first login"]}),(0,L.jsxs)("section",{className:"devteam-permissions",children:[(0,L.jsx)("h3",{children:"Permissions"}),(0,L.jsx)("p",{children:"These control what the team member should see in the platform-team working area. Backend role remains developer/platform_team."}),xR.map(b=>(0,L.jsxs)("label",{className:b.danger?"danger":"",children:[(0,L.jsx)("input",{type:"checkbox",checked:!!a.permissions[b.key],onChange:a=>c(c=>({...c,permissions:{...c.permissions,[b.key]:a.target.checked}}))}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:b.label}),(0,L.jsx)("small",{children:b.description})]})]},b.key))]}),(0,L.jsxs)("div",{className:"devteam-modal-actions",children:[(0,L.jsx)("button",{type:"button",onClick:e,disabled:d,children:"Cancel"}),(0,L.jsx)("button",{type:"submit",disabled:d,children:d?"Saving...":a.id?"Save Changes":"Create Login Account"})]})]})})}function yu({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"devteam-stat-card",children:[(0,L.jsx)("span",{children:d}),(0,L.jsxs)("div",{children:[(0,L.jsx)("p",{children:a}),(0,L.jsx)("h2",{children:b}),(0,L.jsx)("small",{children:c})]})]})}function yv({title:a,children:b}){return(0,L.jsxs)("article",{className:"devteam-chart-card",children:[(0,L.jsx)("h2",{children:a}),b]})}function yw({tone:a,children:b}){return(0,L.jsx)("span",{className:`devteam-chip ${a}`,children:b})}function yx({text:a}){return(0,L.jsxs)("section",{className:"devteam-empty",children:[(0,L.jsx)("h2",{children:"No records found"}),(0,L.jsx)("p",{children:a})]})}let yy=`
.devteam-page{--dev-primary:#2563eb;min-height:100vh;padding:16px;background:linear-gradient(180deg,#eef4ff 0%,#f8fafc 34%,#ffffff 100%);color:#0f172a}.devteam-hero{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;padding:24px;border-radius:28px;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:white;box-shadow:0 24px 60px rgba(15,23,42,.18)}.devteam-eyebrow{text-transform:uppercase;letter-spacing:.14em;font-size:.72rem;font-weight:900;opacity:.8}.devteam-hero h1{font-size:clamp(1.8rem,4vw,3.1rem);line-height:1;margin:8px 0}.devteam-hero p{max-width:760px;margin:0;color:rgba(255,255,255,.88)}.devteam-hero-actions{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}.devteam-switch{display:flex;gap:4px;padding:4px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.24);border-radius:999px}.devteam-switch button,.devteam-glass-btn,.devteam-white-btn{border:0;border-radius:999px;padding:10px 14px;font-weight:900;cursor:pointer}.devteam-switch button{background:transparent;color:white}.devteam-switch button.active,.devteam-white-btn{background:white;color:#0f172a}.devteam-glass-btn{background:rgba(255,255,255,.16);color:white;border:1px solid rgba(255,255,255,.28)}.devteam-alert{margin:14px 0;padding:14px 16px;border-radius:18px;font-weight:800}.devteam-alert.error{background:#fef2f2;color:#991b1b;border:1px solid #fecaca}.devteam-alert.success{background:#ecfdf5;color:#065f46;border:1px solid #bbf7d0}.devteam-stat-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;margin:16px 0}.devteam-stat-card{display:flex;gap:12px;align-items:center;background:white;border:1px solid #e2e8f0;border-radius:22px;padding:16px;box-shadow:0 14px 36px rgba(15,23,42,.06)}.devteam-stat-card>span{display:grid;place-items:center;width:42px;height:42px;border-radius:16px;background:#eff6ff}.devteam-stat-card p,.devteam-stat-card h2{margin:0}.devteam-stat-card p{font-size:.8rem;color:#64748b;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.devteam-stat-card h2{font-size:1.8rem}.devteam-stat-card small{color:#64748b}.devteam-toolbar{display:grid;grid-template-columns:2fr 1fr 1fr 1fr auto;gap:10px;margin:16px 0}.devteam-toolbar input,.devteam-toolbar select,.devteam-toolbar button,.devteam-modal input,.devteam-modal select{width:100%;border:1px solid #dbe3ef;border-radius:16px;padding:12px 14px;background:white;color:#0f172a;outline:none}.devteam-toolbar button{font-weight:900;cursor:pointer}.devteam-card-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.devteam-member-card{background:white;border:1px solid #e2e8f0;border-radius:24px;padding:18px;box-shadow:0 18px 46px rgba(15,23,42,.07)}.devteam-member-card.suspended{border-color:#fecaca}.devteam-member-top{display:flex;justify-content:space-between;align-items:center}.devteam-avatar{display:grid;place-items:center;width:54px;height:54px;border-radius:20px;background:linear-gradient(135deg,var(--dev-primary),#0f172a);color:white;font-weight:950}.devteam-member-card h2{margin:14px 0 4px}.devteam-member-card p{margin:0 0 12px;color:#64748b}.devteam-mini-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.devteam-mini-grid span{background:#f8fafc;border:1px solid #edf2f7;border-radius:16px;padding:10px;min-width:0;word-break:break-word}.devteam-mini-grid b{display:block;color:#64748b;font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px}.devteam-permission-pills{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.devteam-permission-pills span{background:#eff6ff;color:#1d4ed8;border-radius:999px;padding:6px 9px;font-size:.75rem;font-weight:900}.devteam-actions,.devteam-table-actions,.devteam-modal-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}.devteam-actions button,.devteam-table-actions button,.devteam-modal-actions button{border:0;border-radius:999px;padding:9px 12px;font-weight:900;cursor:pointer;background:#eef2ff;color:#1e3a8a}.devteam-actions .danger,.devteam-table-actions .danger{background:#fef2f2;color:#991b1b}.devteam-chip{display:inline-flex;align-items:center;border-radius:999px;padding:6px 10px;font-size:.76rem;font-weight:950;text-transform:capitalize}.devteam-chip.green{background:#dcfce7;color:#166534}.devteam-chip.blue{background:#dbeafe;color:#1d4ed8}.devteam-chip.purple{background:#ede9fe;color:#6d28d9}.devteam-chip.orange{background:#ffedd5;color:#c2410c}.devteam-chip.red{background:#fee2e2;color:#b91c1c}.devteam-chip.gray{background:#f1f5f9;color:#475569}.devteam-table-card,.devteam-chart-card{background:white;border:1px solid #e2e8f0;border-radius:24px;padding:16px;box-shadow:0 18px 46px rgba(15,23,42,.07)}.devteam-table-wrap{overflow:auto}table{width:100%;border-collapse:collapse;min-width:920px}th,td{text-align:left;border-bottom:1px solid #edf2f7;padding:12px}th{font-size:.75rem;text-transform:uppercase;letter-spacing:.08em;color:#64748b}td small{display:block;color:#64748b;margin-top:3px}.devteam-analytics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.devteam-chart-card h2{margin:0 0 10px}.devteam-empty,.devteam-state{grid-column:1/-1;text-align:center;background:white;border:1px dashed #cbd5e1;border-radius:24px;padding:40px 18px}.devteam-spinner{width:42px;height:42px;border-radius:999px;border:4px solid #dbeafe;border-top-color:var(--dev-primary);animation:spin 1s linear infinite;margin:0 auto 12px}@keyframes spin{to{transform:rotate(360deg)}}.devteam-modal-backdrop{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:80;display:grid;place-items:center;padding:14px}.devteam-modal{width:min(940px,100%);max-height:92vh;overflow:auto;background:white;border-radius:28px;padding:18px;box-shadow:0 40px 90px rgba(15,23,42,.28)}.devteam-modal-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;margin-bottom:14px}.devteam-modal-head h2{margin:0}.devteam-modal-head p{margin:4px 0 0;color:#64748b}.devteam-modal-head button{border:0;background:#f1f5f9;width:40px;height:40px;border-radius:999px;font-size:1.5rem;cursor:pointer}.devteam-form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.devteam-modal label{font-weight:900;color:#334155}.devteam-modal label input,.devteam-modal label select{margin-top:6px}.password-row{display:flex;gap:8px}.password-row button{margin-top:6px;border:0;border-radius:14px;background:#0f172a;color:white;font-weight:900;padding:0 12px;cursor:pointer}.devteam-check{display:flex;align-items:center;gap:10px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:18px;padding:12px;margin:12px 0}.devteam-check input{width:auto!important;margin:0!important}.devteam-permissions{margin-top:10px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:22px;padding:14px}.devteam-permissions h3{margin:0}.devteam-permissions p{margin:4px 0 12px;color:#64748b}.devteam-permissions label{display:flex;gap:10px;align-items:flex-start;background:white;border:1px solid #e2e8f0;border-radius:16px;padding:10px;margin-bottom:8px}.devteam-permissions label.danger{border-color:#fed7aa}.devteam-permissions input{width:auto!important;margin-top:3px!important}.devteam-permissions small{display:block;color:#64748b;font-weight:500}.devteam-modal-actions{justify-content:flex-end}.devteam-modal-actions button[type=submit]{background:var(--dev-primary);color:white}.devteam-modal-actions button[type=button]{background:#f1f5f9;color:#0f172a}@media(max-width:1100px){.devteam-stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devteam-card-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.devteam-toolbar{grid-template-columns:1fr 1fr}.devteam-analytics{grid-template-columns:1fr}}@media(max-width:720px){.devteam-page{padding:10px}.devteam-hero{border-radius:22px;flex-direction:column}.devteam-hero-actions,.devteam-switch{width:100%}.devteam-switch button{flex:1}.devteam-white-btn,.devteam-glass-btn{width:100%}.devteam-stat-grid,.devteam-card-grid,.devteam-toolbar,.devteam-form-grid{grid-template-columns:1fr}.devteam-mini-grid{grid-template-columns:1fr}.devteam-modal{border-radius:20px;padding:14px}.password-row{flex-direction:column}.password-row button{padding:12px}}`,yz=["core","billing","reports","sync","portal","analytics","experimental"],yA=["development","staging","production"],yB=["owner","school_admin","branch_admin","teacher","accountant","parent","student","developer"],yC=["free","starter","growth","professional","enterprise"],yD={key:"",name:"",description:"",category:"experimental",status:"disabled",rolloutPercent:"0",environments:["development"],targetRoles:[],targetPlans:[],owner:"",riskLevel:"low"},yE=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],yF=a=>{if(!a)return 0;let b="number"==typeof a?a:new Date(a).getTime();return Number.isFinite(b)?b:0},yG=a=>{let b=yF(a);return b?new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(b)):"Not set"},yH=a=>a.trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,""),yI=a=>{let b=Number(a);return Number.isFinite(b)?Math.min(100,Math.max(0,Math.round(b))):0},yJ=a=>"enabled"===a?"green":"disabled"===a?"gray":"archived"===a?"orange":"gray",yK=a=>"low"===a?"green":"medium"===a?"orange":"high"===a?"red":"gray",yL=(a,b)=>{let c=new Map;return a.forEach(a=>{let d=String(b(a)||"Unknown").trim()||"Unknown";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)},yM=(a,b)=>{let c=a.name||a.title||"Unnamed Feature",d=yH(a.key||a.code||c||`feature_${b+1}`);return{id:String(a.id||a.localId||d||`flag-${b}-${Date.now()}`),key:d,name:c,description:a.description||a.message||"",category:a.category||"experimental",status:a.status||(a.enabled?"enabled":"disabled"),rolloutPercent:yI(a.rolloutPercent??a.rollout??100*!!a.enabled),environments:Array.isArray(a.environments)?a.environments:a.environment?[a.environment]:["development"],targetRoles:Array.isArray(a.targetRoles)?a.targetRoles:[],targetPlans:Array.isArray(a.targetPlans)?a.targetPlans:[],owner:a.owner||a.ownerEmail||"",riskLevel:a.riskLevel||a.risk||"low",createdAt:a.createdAt||Date.now(),updatedAt:a.updatedAt||Date.now()}},yN=()=>[],yO=a=>{},yP=(a,b)=>a.includes(b)?a.filter(a=>a!==b):[...a,b];function yQ({navigate:a}){let{accountId:b,authenticated:c,loading:d}=(0,uM.F)(),{settings:e}=(0,uN.t)(),f=e?.primaryColor||"var(--primary-color, #2563eb)",[g,h]=(0,M.useState)("cards"),[i,j]=(0,M.useState)([]),[k,l]=(0,M.useState)(!0),[m,n]=(0,M.useState)(!1),[o,p]=(0,M.useState)(!1),[q,r]=(0,M.useState)(""),[s,t]=(0,M.useState)(""),[u,v]=(0,M.useState)(""),[w,x]=(0,M.useState)("all"),[y,z]=(0,M.useState)("all"),[A,B]=(0,M.useState)("all"),[C,D]=(0,M.useState)("all"),[E,F]=(0,M.useState)(!1),[G,H]=(0,M.useState)(yD),I=async(a=!1)=>{try{a?n(!0):l(!0),r(""),t("");let b=await (0,uL.uE)("/developer/feature-flags").catch(async()=>(0,uL.uE)("/feature-flags").catch(()=>null)),c=((a,b=[])=>{if(Array.isArray(a))return a;if(!a||"object"!=typeof a)return[];for(let c of b)if(Array.isArray(a[c]))return a[c];return Array.isArray(a.data)?a.data:Array.isArray(a.items)?a.items:Array.isArray(a.results)?a.results:Array.isArray(a.records)?a.records:Array.isArray(a.rows)?a.rows:[]})(b,["flags","featureFlags"]).map(yM);c.length?(j(c),yO(c)):j(yN())}catch(a){r(a?.message||"Could not load feature flags from the server. Showing local saved flags."),j(yN())}finally{l(!1),n(!1)}},J=(0,M.useMemo)(()=>{let a=u.trim().toLowerCase();return i.filter(b=>{let c=`${b.name} ${b.key} ${b.description||""} ${b.owner||""} ${b.category} ${b.status}`.toLowerCase(),d=!a||c.includes(a),e="all"===w||b.status===w,f="all"===y||b.category===y,g="all"===A||b.environments.includes(A),h="all"===C||b.riskLevel===C;return d&&e&&f&&g&&h}).sort((a,b)=>{if(a.status!==b.status){if("enabled"===a.status)return -1;if("enabled"===b.status)return 1}return yF(b.updatedAt||b.createdAt)-yF(a.updatedAt||a.createdAt)})},[i,u,w,y,A,C]),K=i.filter(a=>"enabled"===a.status).length,N=i.filter(a=>"disabled"===a.status).length,O=i.filter(a=>"archived"===a.status).length,P=i.filter(a=>"high"===a.riskLevel).length,Q=i.filter(a=>a.environments.includes("production")).length,R=i.length?Math.round(i.reduce((a,b)=>a+Number(b.rolloutPercent||0),0)/i.length):0,S=(0,M.useMemo)(()=>yL(i,a=>a.status),[i]),T=(0,M.useMemo)(()=>yL(i,a=>a.category),[i]),U=(0,M.useMemo)(()=>yL(i,a=>a.riskLevel),[i]),V=(0,M.useMemo)(()=>[{label:"0%",min:0,max:0},{label:"1-24%",min:1,max:24},{label:"25-49%",min:25,max:49},{label:"50-74%",min:50,max:74},{label:"75-99%",min:75,max:99},{label:"100%",min:100,max:100}].map(a=>({label:a.label,value:i.filter(b=>b.rolloutPercent>=a.min&&b.rolloutPercent<=a.max).length})),[i]),W=a=>{r(""),t(""),H({id:a.id,key:a.key,name:a.name,description:a.description||"",category:a.category,status:a.status,rolloutPercent:String(a.rolloutPercent),environments:a.environments,targetRoles:a.targetRoles,targetPlans:a.targetPlans,owner:a.owner||"",riskLevel:a.riskLevel}),F(!0)},X=()=>{o||(F(!1),H(yD))},Y=async a=>{if(a.preventDefault(),!G.name.trim())return void r("Feature name is required.");let b={id:G.id||`flag-${Date.now()}`,key:yH(G.key||G.name),name:G.name.trim(),description:G.description.trim(),category:G.category,status:G.status,rolloutPercent:yI(G.rolloutPercent),environments:G.environments,targetRoles:G.targetRoles,targetPlans:G.targetPlans,owner:G.owner.trim(),riskLevel:G.riskLevel,createdAt:Date.now(),updatedAt:Date.now()};if(!b.key)return void r("Feature key is required.");try{if(p(!0),r(""),t(""),G.id){let a=await (0,uL.uE)(`/developer/feature-flags/${G.id}`,{method:"PATCH",body:JSON.stringify(b)}).catch(async()=>(0,uL.uE)(`/feature-flags/${G.id}`,{method:"PATCH",body:JSON.stringify(b)}).catch(()=>null)),c=yM(a?.flag||a?.data||a||b,0);j(a=>{let b=a.map(a=>a.id===G.id?{...a,...c,id:G.id,createdAt:a.createdAt,updatedAt:Date.now()}:a);return yO(b),b}),t("Feature flag updated.")}else{let a=await (0,uL.uE)("/developer/feature-flags",{method:"POST",body:JSON.stringify(b)}).catch(async()=>(0,uL.uE)("/feature-flags",{method:"POST",body:JSON.stringify(b)}).catch(()=>null)),c=yM(a?.flag||a?.data||a||b,0);j(a=>{let b=a.some(a=>a.key===c.key)?a.map(a=>a.key===c.key?{...a,...c}:a):[c,...a];return yO(b),b}),t("Feature flag created.")}X()}catch(a){r(a?.message||"Could not save feature flag.")}finally{p(!1)}},Z=async(a,b)=>{try{r(""),t("");let c={...a,status:b,rolloutPercent:"enabled"===b&&0===a.rolloutPercent?100:a.rolloutPercent,updatedAt:Date.now()};await (0,uL.uE)(`/developer/feature-flags/${a.id}`,{method:"PATCH",body:JSON.stringify({status:c.status,rolloutPercent:c.rolloutPercent})}).catch(async()=>(0,uL.uE)(`/feature-flags/${a.id}`,{method:"PATCH",body:JSON.stringify({status:c.status,rolloutPercent:c.rolloutPercent})}).catch(()=>null)),j(b=>{let d=b.map(b=>b.id===a.id?c:b);return yO(d),d}),t(`Feature flag ${b}.`)}catch(a){r(a?.message||"Could not update feature flag.")}},$=async(a,b)=>{try{r(""),t("");let c={...a,rolloutPercent:yI(b),updatedAt:Date.now()};await (0,uL.uE)(`/developer/feature-flags/${a.id}`,{method:"PATCH",body:JSON.stringify({rolloutPercent:c.rolloutPercent})}).catch(async()=>(0,uL.uE)(`/feature-flags/${a.id}`,{method:"PATCH",body:JSON.stringify({rolloutPercent:c.rolloutPercent})}).catch(()=>null)),j(b=>{let d=b.map(b=>b.id===a.id?c:b);return yO(d),d}),t("Rollout updated.")}catch(a){r(a?.message||"Could not update rollout.")}},_=a=>{j(b=>{let c=b.filter(b=>b.id!==a.id);return yO(c),c}),t("Feature flag removed locally.")};return k||d?(0,L.jsxs)("main",{className:"devflags-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:y_}),(0,L.jsxs)("section",{className:"devflags-state",children:[(0,L.jsx)("div",{className:"devflags-spinner"}),(0,L.jsx)("h2",{children:"Loading feature flags..."}),(0,L.jsx)("p",{children:"Preparing rollout controls, environments, targeting and analytics."})]})]}):c&&b?(0,L.jsxs)("main",{className:"devflags-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:y_}),(0,L.jsxs)("section",{className:"devflags-hero",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{className:"devflags-eyebrow",children:"Feature control"}),(0,L.jsx)("h1",{children:"Feature Flags"}),(0,L.jsx)("p",{children:"Roll out beta features safely, target specific roles or plans, control production exposure, and disable risky changes without redeploying the whole platform."})]}),(0,L.jsxs)("div",{className:"devflags-hero-actions",children:[(0,L.jsxs)("div",{className:"devflags-switch",role:"tablist","aria-label":"Feature flag views",children:[(0,L.jsx)("button",{type:"button",className:"cards"===g?"active":"",onClick:()=>h("cards"),children:"Cards"}),(0,L.jsx)("button",{type:"button",className:"table"===g?"active":"",onClick:()=>h("table"),children:"Table"}),(0,L.jsx)("button",{type:"button",className:"analytics"===g?"active":"",onClick:()=>h("analytics"),children:"Charts"})]}),(0,L.jsx)("button",{type:"button",className:"devflags-white-btn",onClick:()=>{r(""),t(""),H(yD),F(!0)},children:"New Flag"}),(0,L.jsx)("button",{type:"button",className:"devflags-glass-btn",onClick:()=>I(!0),disabled:m,children:m?"Refreshing...":"Refresh"})]})]}),(q||s)&&(0,L.jsx)("section",{className:`devflags-alert ${q?"error":"success"}`,children:q||s}),(0,L.jsxs)("section",{className:"devflags-stat-grid",children:[(0,L.jsx)(yW,{label:"Flags",value:i.length,detail:`${J.length} shown`,icon:"\uD83D\uDEA9"}),(0,L.jsx)(yW,{label:"Enabled",value:K,detail:`${N} disabled`,icon:"✅"}),(0,L.jsx)(yW,{label:"Production",value:Q,detail:`${O} archived`,icon:"\uD83D\uDE80"}),(0,L.jsx)(yW,{label:"Avg Rollout",value:`${R}%`,detail:`${P} high-risk flags`,icon:"\uD83D\uDCCA"})]}),(0,L.jsxs)("section",{className:"devflags-toolbar",children:[(0,L.jsx)("input",{value:u,onChange:a=>v(a.target.value),placeholder:"Search name, key, owner, description..."}),(0,L.jsxs)("select",{value:w,onChange:a=>x(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All statuses"}),(0,L.jsx)("option",{value:"enabled",children:"Enabled"}),(0,L.jsx)("option",{value:"disabled",children:"Disabled"}),(0,L.jsx)("option",{value:"archived",children:"Archived"})]}),(0,L.jsxs)("select",{value:y,onChange:a=>z(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All categories"}),yz.map(a=>(0,L.jsx)("option",{value:a,children:a},a))]}),(0,L.jsxs)("select",{value:A,onChange:a=>B(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All environments"}),yA.map(a=>(0,L.jsx)("option",{value:a,children:a},a))]}),(0,L.jsxs)("select",{value:C,onChange:a=>D(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All risk levels"}),(0,L.jsx)("option",{value:"low",children:"Low risk"}),(0,L.jsx)("option",{value:"medium",children:"Medium risk"}),(0,L.jsx)("option",{value:"high",children:"High risk"})]}),(0,L.jsx)("button",{type:"button",onClick:()=>{v(""),x("all"),z("all"),B("all"),D("all")},children:"Reset"})]}),"analytics"===g?(0,L.jsx)(yT,{statusChart:S,categoryChart:T,riskChart:U,rolloutChart:V}):"table"===g?(0,L.jsx)(yS,{flags:J,onEdit:W,onStatus:Z,onRollout:$,onDelete:_}):(0,L.jsx)(yR,{flags:J,onEdit:W,onStatus:Z,onRollout:$,onDelete:_,navigate:a}),E&&(0,L.jsx)(yU,{form:G,setForm:H,saving:o,onClose:X,onSubmit:Y})]}):(0,L.jsxs)("main",{className:"devflags-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:y_}),(0,L.jsxs)("section",{className:"devflags-state",children:[(0,L.jsx)("h2",{children:"Developer access required"}),(0,L.jsx)("p",{children:"Sign in with a developer account to manage platform feature flags."})]})]})}function yR({flags:a,onEdit:b,onStatus:c,onRollout:d,onDelete:e,navigate:f}){return(0,L.jsxs)("section",{className:"devflags-card-grid",children:[a.map(a=>(0,L.jsxs)("article",{className:`devflags-flag-card ${a.status}`,children:[(0,L.jsxs)("div",{className:"devflags-flag-top",children:[(0,L.jsx)("span",{className:"devflags-flag-icon",children:"\uD83D\uDEA9"}),(0,L.jsxs)("div",{className:"devflags-chip-row",children:[(0,L.jsx)(yX,{tone:yJ(a.status),children:a.status}),(0,L.jsxs)(yX,{tone:yK(a.riskLevel),children:[a.riskLevel," risk"]})]})]}),(0,L.jsx)("h2",{children:a.name}),(0,L.jsx)("p",{children:a.description||"No description added."}),(0,L.jsx)("div",{className:"devflags-key",children:a.key}),(0,L.jsxs)("div",{className:"devflags-rollout",children:[(0,L.jsxs)("div",{children:[(0,L.jsxs)("strong",{children:[a.rolloutPercent,"%"]}),(0,L.jsx)("span",{children:"rollout"})]}),(0,L.jsx)("input",{type:"range",min:0,max:100,value:a.rolloutPercent,onChange:b=>d(a,Number(b.target.value))})]}),(0,L.jsxs)("div",{className:"devflags-mini-grid",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Category"}),a.category]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Environments"}),a.environments.join(", ")||"None"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Roles"}),a.targetRoles.length?a.targetRoles.join(", "):"All roles"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Plans"}),a.targetPlans.length?a.targetPlans.join(", "):"All plans"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Owner"}),a.owner||"Unassigned"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Updated"}),yG(a.updatedAt)]})]}),(0,L.jsxs)("div",{className:"devflags-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Edit"}),"enabled"===a.status?(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"disabled"),children:"Disable"}):(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"enabled"),children:"Enable"}),"archived"!==a.status&&(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"archived"),children:"Archive"}),(0,L.jsx)("button",{type:"button",onClick:()=>f?.("auditLogs"),children:"Audit"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>e(a),children:"Remove"})]})]},a.id)),!a.length&&(0,L.jsx)(yY,{text:"No feature flags match your filters."})]})}function yS({flags:a,onEdit:b,onStatus:c,onRollout:d,onDelete:e}){return(0,L.jsxs)("section",{className:"devflags-table-card",children:[(0,L.jsx)("div",{className:"devflags-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Feature"}),(0,L.jsx)("th",{children:"Status"}),(0,L.jsx)("th",{children:"Risk"}),(0,L.jsx)("th",{children:"Rollout"}),(0,L.jsx)("th",{children:"Category"}),(0,L.jsx)("th",{children:"Environments"}),(0,L.jsx)("th",{children:"Targets"}),(0,L.jsx)("th",{children:"Updated"}),(0,L.jsx)("th",{children:"Actions"})]})}),(0,L.jsx)("tbody",{children:a.map(a=>(0,L.jsxs)("tr",{children:[(0,L.jsxs)("td",{children:[(0,L.jsx)("strong",{children:a.name}),(0,L.jsx)("small",{children:a.key})]}),(0,L.jsx)("td",{children:(0,L.jsx)(yX,{tone:yJ(a.status),children:a.status})}),(0,L.jsx)("td",{children:(0,L.jsx)(yX,{tone:yK(a.riskLevel),children:a.riskLevel})}),(0,L.jsx)("td",{children:(0,L.jsxs)("div",{className:"devflags-table-rollout",children:[(0,L.jsxs)("span",{children:[a.rolloutPercent,"%"]}),(0,L.jsx)("input",{type:"range",min:0,max:100,value:a.rolloutPercent,onChange:b=>d(a,Number(b.target.value))})]})}),(0,L.jsx)("td",{children:a.category}),(0,L.jsx)("td",{children:a.environments.join(", ")}),(0,L.jsxs)("td",{children:[a.targetRoles.length?a.targetRoles.join(", "):"All roles"," \xb7 ",a.targetPlans.length?a.targetPlans.join(", "):"All plans"]}),(0,L.jsx)("td",{children:yG(a.updatedAt)}),(0,L.jsx)("td",{children:(0,L.jsxs)("div",{className:"devflags-table-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Edit"}),"enabled"===a.status?(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"disabled"),children:"Disable"}):(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"enabled"),children:"Enable"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>e(a),children:"Remove"})]})})]},a.id))})]})}),!a.length&&(0,L.jsx)(yY,{text:"No feature flags match your filters."})]})}function yT({statusChart:a,categoryChart:b,riskChart:c,rolloutChart:d}){return(0,L.jsxs)("section",{className:"devflags-chart-grid",children:[(0,L.jsxs)(yZ,{title:"Flag Status",description:"Enabled, disabled and archived feature flags.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:a,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:a.map((a,b)=>(0,L.jsx)(s$,{fill:yE[b%yE.length]},b))})]})}),(0,L.jsx)(y$,{rows:a})]}),(0,L.jsx)(yZ,{title:"Categories",description:"Flags grouped by product area.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:b,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(rs,{type:"category",dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11,width:110}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--dev-primary)",radius:[0,12,12,0]})]})})}),(0,L.jsxs)(yZ,{title:"Risk Levels",description:"Low, medium and high-risk release controls.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:c,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:c.map((a,b)=>(0,L.jsx)(s$,{fill:yE[b%yE.length]},b))})]})}),(0,L.jsx)(y$,{rows:c})]}),(0,L.jsx)(yZ,{title:"Rollout Distribution",description:"How widely features are exposed.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:d,children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--dev-primary)",radius:[12,12,0,0]})]})})})]})}function yU({form:a,setForm:b,saving:c,onClose:d,onSubmit:e}){let f=(a,c)=>{b(b=>({...b,[a]:c,..."name"===a&&!b.key?{key:yH(String(c))}:{}}))};return(0,L.jsx)("div",{className:"devflags-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,L.jsxs)("form",{className:"devflags-modal",onSubmit:e,children:[(0,L.jsxs)("div",{className:"devflags-modal-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:a.id?"Edit Feature Flag":"Create Feature Flag"}),(0,L.jsx)("p",{children:"Control rollout, environments and target users for this feature."})]}),(0,L.jsx)("button",{type:"button",onClick:d,disabled:c,"aria-label":"Close",children:"✕"})]}),(0,L.jsxs)("div",{className:"devflags-form-grid",children:[(0,L.jsxs)("label",{children:["Feature name",(0,L.jsx)("input",{value:a.name,onChange:a=>f("name",a.target.value),placeholder:"New report analytics",required:!0})]}),(0,L.jsxs)("label",{children:["Feature key",(0,L.jsx)("input",{value:a.key,onChange:a=>f("key",yH(a.target.value)),placeholder:"new_report_analytics",required:!0})]}),(0,L.jsxs)("label",{children:["Owner",(0,L.jsx)("input",{value:a.owner,onChange:a=>f("owner",a.target.value),placeholder:"developer@example.com"})]}),(0,L.jsxs)("label",{children:["Category",(0,L.jsx)("select",{value:a.category,onChange:a=>f("category",a.target.value),children:yz.map(a=>(0,L.jsx)("option",{value:a,children:a},a))})]}),(0,L.jsxs)("label",{children:["Status",(0,L.jsxs)("select",{value:a.status,onChange:a=>f("status",a.target.value),children:[(0,L.jsx)("option",{value:"enabled",children:"Enabled"}),(0,L.jsx)("option",{value:"disabled",children:"Disabled"}),(0,L.jsx)("option",{value:"archived",children:"Archived"})]})]}),(0,L.jsxs)("label",{children:["Risk level",(0,L.jsxs)("select",{value:a.riskLevel,onChange:a=>f("riskLevel",a.target.value),children:[(0,L.jsx)("option",{value:"low",children:"Low risk"}),(0,L.jsx)("option",{value:"medium",children:"Medium risk"}),(0,L.jsx)("option",{value:"high",children:"High risk"})]})]}),(0,L.jsxs)("label",{children:["Rollout percentage",(0,L.jsx)("input",{type:"number",min:"0",max:"100",value:a.rolloutPercent,onChange:a=>f("rolloutPercent",a.target.value)})]}),(0,L.jsxs)("label",{className:"wide",children:["Description",(0,L.jsx)("textarea",{value:a.description,onChange:a=>f("description",a.target.value),placeholder:"Describe what this feature unlocks and when it should be enabled.",rows:3})]})]}),(0,L.jsxs)("section",{className:"devflags-target-editor",children:[(0,L.jsx)(yV,{title:"Environments",description:"Where this feature may run.",children:yA.map(b=>(0,L.jsxs)("label",{className:"devflags-toggle",children:[(0,L.jsx)("input",{type:"checkbox",checked:a.environments.includes(b),onChange:()=>f("environments",yP(a.environments,b))}),(0,L.jsx)("span",{children:b})]},b))}),(0,L.jsx)(yV,{title:"Target roles",description:"Leave empty to target all roles.",children:yB.map(b=>(0,L.jsxs)("label",{className:"devflags-toggle",children:[(0,L.jsx)("input",{type:"checkbox",checked:a.targetRoles.includes(b),onChange:()=>f("targetRoles",yP(a.targetRoles,b))}),(0,L.jsx)("span",{children:b})]},b))}),(0,L.jsx)(yV,{title:"Target plans",description:"Leave empty to target all subscription plans.",children:yC.map(b=>(0,L.jsxs)("label",{className:"devflags-toggle",children:[(0,L.jsx)("input",{type:"checkbox",checked:a.targetPlans.includes(b),onChange:()=>f("targetPlans",yP(a.targetPlans,b))}),(0,L.jsx)("span",{children:b})]},b))})]}),(0,L.jsxs)("div",{className:"devflags-modal-actions",children:[(0,L.jsx)("button",{type:"button",onClick:d,disabled:c,children:"Cancel"}),(0,L.jsx)("button",{type:"submit",disabled:c,children:c?"Saving...":a.id?"Save Changes":"Create Flag"})]})]})})}function yV({title:a,description:b,children:c}){return(0,L.jsxs)("article",{className:"devflags-editor-group",children:[(0,L.jsx)("h3",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function yW({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"devflags-stat",children:[(0,L.jsxs)("span",{children:[a,(0,L.jsx)("b",{children:d})]}),(0,L.jsx)("strong",{children:b}),(0,L.jsx)("small",{children:c})]})}function yX({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`devflags-chip ${b}`,children:a})}function yY({text:a}){return(0,L.jsx)("div",{className:"devflags-empty",children:a})}function yZ({title:a,description:b,children:c}){return(0,L.jsxs)("section",{className:"devflags-chart-card",children:[(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function y$({rows:a}){return(0,L.jsx)("div",{className:"devflags-legend",children:a.map((a,b)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("i",{style:{background:yE[b%yE.length]}}),a.label,": ",a.value]},`${a.label}-${b}`))})}let y_=`
@keyframes devflagsSpin { to { transform: rotate(360deg); } }

.devflags-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 8px;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--dev-primary) 10%, transparent), transparent 34rem),
    var(--bg, #f8fafc);
  color: var(--text, #0f172a);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  overflow-x: hidden;
}

.devflags-page *,
.devflags-page *::before,
.devflags-page *::after {
  box-sizing: border-box;
}

.devflags-page button,
.devflags-page input,
.devflags-page select,
.devflags-page textarea {
  font: inherit;
  max-width: 100%;
}

.devflags-page button {
  -webkit-tap-highlight-color: transparent;
}

.devflags-state {
  min-height: min(420px, calc(100dvh - 32px));
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 28px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .08);
  text-align: center;
}

.devflags-state h2 {
  margin: 0;
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 1000;
  letter-spacing: -.04em;
}

.devflags-state p {
  max-width: 34rem;
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.6;
}

.devflags-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--dev-primary) 18%, transparent);
  border-top-color: var(--dev-primary);
  animation: devflagsSpin .8s linear infinite;
}

.devflags-hero {
  display: grid;
  gap: 16px;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, .18), transparent 20rem),
    linear-gradient(135deg, var(--dev-primary), #0f172a 72%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .18);
  overflow: hidden;
}

.devflags-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .14em;
  opacity: .82;
}

.devflags-hero h1 {
  margin: 8px 0 0;
  font-size: clamp(28px, 8vw, 44px);
  line-height: 1.02;
  font-weight: 1000;
  letter-spacing: -.07em;
}

.devflags-hero p {
  max-width: 780px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: .9;
}

.devflags-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.devflags-switch {
  display: inline-flex;
  gap: 5px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(14px);
}

.devflags-switch button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.devflags-switch button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .16);
}

.devflags-white-btn,
.devflags-glass-btn {
  min-height: 40px;
  border-radius: 999px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.devflags-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.devflags-glass-btn {
  border: 1px solid rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .14);
  color: #fff;
}

.devflags-glass-btn:disabled {
  opacity: .7;
  cursor: not-allowed;
}

.devflags-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 850;
}

.devflags-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.devflags-alert.success {
  background: #dcfce7;
  color: #166534;
}

.devflags-stat-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.devflags-stat {
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 24px;
  padding: 16px;
  background: var(--surface, #fff);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.devflags-stat span {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 850;
}

.devflags-stat strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(24px, 8vw, 34px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
  overflow-wrap: anywhere;
}

.devflags-stat small {
  display: block;
  margin-top: 8px;
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 850;
}

.devflags-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 24px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
}

.devflags-toolbar input,
.devflags-toolbar select {
  min-height: 42px;
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .3);
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
}

.devflags-toolbar button {
  min-height: 42px;
  border: 0;
  border-radius: 16px;
  background: color-mix(in srgb, var(--dev-primary) 10%, white);
  color: var(--dev-primary);
  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.devflags-card-grid,
.devflags-chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.devflags-flag-card,
.devflags-chart-card,
.devflags-table-card {
  min-width: 0;
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 26px;
  padding: 14px;
  background: var(--surface, #fff);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.devflags-flag-card.disabled {
  opacity: .78;
}

.devflags-flag-card.archived {
  background: linear-gradient(180deg, #fff, #f8fafc);
}

.devflags-flag-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.devflags-flag-icon {
  width: 46px;
  height: 46px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--dev-primary), #0f172a);
  color: #fff;
  font-size: 18px;
  font-weight: 1000;
}

.devflags-chip-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.devflags-flag-card h2 {
  margin: 14px 0 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.devflags-flag-card p {
  margin: 5px 0 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.45;
}

.devflags-key {
  display: inline-flex;
  max-width: 100%;
  margin-top: 10px;
  padding: 7px 10px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #334155;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 11px;
  font-weight: 900;
  overflow-wrap: anywhere;
}

.devflags-rollout {
  display: grid;
  gap: 8px;
  margin-top: 14px;
  padding: 12px;
  border-radius: 20px;
  background: color-mix(in srgb, var(--dev-primary) 7%, white);
}

.devflags-rollout div {
  display: flex;
  align-items: flex-end;
  gap: 6px;
}

.devflags-rollout strong {
  font-size: 28px;
  line-height: .9;
  font-weight: 1000;
  letter-spacing: -.06em;
}

.devflags-rollout span {
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 900;
}

.devflags-rollout input,
.devflags-table-rollout input {
  width: 100%;
  accent-color: var(--dev-primary);
}

.devflags-mini-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 14px;
}

.devflags-mini-grid span {
  padding: 10px;
  border-radius: 16px;
  background: #f8fafc;
  color: #0f172a;
  font-size: 12px;
  font-weight: 850;
  overflow: hidden;
  text-overflow: ellipsis;
}

.devflags-mini-grid b {
  display: block;
  color: var(--muted, #64748b);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 3px;
}

.devflags-actions,
.devflags-table-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.devflags-actions {
  margin-top: 14px;
}

.devflags-actions button,
.devflags-table-actions button {
  min-height: 38px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: color-mix(in srgb, var(--dev-primary) 10%, white);
  color: var(--dev-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.devflags-actions button:first-child,
.devflags-table-actions button:first-child {
  background: var(--dev-primary);
  color: #fff;
}

.devflags-actions button.danger,
.devflags-table-actions button.danger {
  background: #fee2e2;
  color: #b91c1c;
}

.devflags-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
  white-space: nowrap;
}

.devflags-chip.green { background: #dcfce7; color: #166534; }
.devflags-chip.blue { background: #dbeafe; color: #1d4ed8; }
.devflags-chip.purple { background: #f3e8ff; color: #7e22ce; }
.devflags-chip.orange { background: #ffedd5; color: #c2410c; }
.devflags-chip.red { background: #fee2e2; color: #b91c1c; }
.devflags-chip.gray { background: #f1f5f9; color: #475569; }

.devflags-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.devflags-table-wrap table {
  width: 100%;
  min-width: 1120px;
  border-collapse: collapse;
}

.devflags-table-wrap th {
  text-align: left;
  color: var(--muted, #64748b);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.devflags-table-wrap td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .16);
  font-size: 13px;
  vertical-align: top;
}

.devflags-table-wrap strong {
  display: block;
  font-weight: 1000;
}

.devflags-table-wrap small {
  display: block;
  margin-top: 3px;
  color: var(--muted, #64748b);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 11px;
}

.devflags-table-rollout {
  display: grid;
  gap: 6px;
  width: 160px;
}

.devflags-table-rollout span {
  font-weight: 1000;
}

.devflags-chart-card h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.devflags-chart-card p {
  margin: 5px 0 10px;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.5;
}

.devflags-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

.devflags-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 9px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.devflags-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

.devflags-empty {
  grid-column: 1 / -1;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
  color: var(--muted, #64748b);
  font-size: 13px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, .35);
}

.devflags-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15, 23, 42, .58);
  backdrop-filter: blur(12px);
}

.devflags-modal {
  width: min(980px, 100%);
  max-height: min(92dvh, 920px);
  overflow-y: auto;
  border-radius: 28px;
  background: var(--surface, #fff);
  box-shadow: 0 30px 100px rgba(15, 23, 42, .35);
  border: 1px solid rgba(255, 255, 255, .24);
  padding: 14px;
}

.devflags-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 4px 14px;
}

.devflags-modal-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.devflags-modal-head p {
  margin: 5px 0 0;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.5;
}

.devflags-modal-head button {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: #f1f5f9;
  color: #0f172a;
  font-weight: 1000;
  cursor: pointer;
}

.devflags-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.devflags-form-grid label,
.devflags-target-editor {
  display: grid;
  gap: 6px;
  color: #334155;
  font-size: 12px;
  font-weight: 950;
}

.devflags-form-grid input,
.devflags-form-grid select,
.devflags-form-grid textarea {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .32);
  border-radius: 16px;
  background: #fff;
  color: #0f172a;
  padding: 11px 12px;
  font-size: 13px;
  font-weight: 800;
}

.devflags-form-grid input,
.devflags-form-grid select {
  min-height: 42px;
}

.devflags-form-grid textarea {
  resize: vertical;
}

.devflags-target-editor {
  margin-top: 12px;
  padding: 12px;
  border-radius: 22px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
}

.devflags-editor-group {
  padding: 12px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .18);
}

.devflags-editor-group + .devflags-editor-group {
  margin-top: 10px;
}

.devflags-editor-group h3 {
  margin: 0;
  font-size: 15px;
  font-weight: 1000;
  letter-spacing: -.03em;
}

.devflags-editor-group p {
  margin: 4px 0 10px;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.45;
}

.devflags-editor-group > div {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.devflags-toggle {
  display: inline-flex !important;
  align-items: center;
  gap: 8px !important;
  min-height: 36px;
  padding: 0 10px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
}

.devflags-toggle input {
  width: 16px;
  height: 16px;
  accent-color: var(--dev-primary);
}

.devflags-modal-actions {
  position: sticky;
  bottom: -14px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 14px;
  padding: 12px 0 2px;
  background: linear-gradient(to top, var(--surface, #fff) 70%, transparent);
}

.devflags-modal-actions button {
  min-height: 42px;
  border: 0;
  border-radius: 999px;
  padding: 0 14px;
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.devflags-modal-actions button:first-child {
  background: #f1f5f9;
  color: #0f172a;
}

.devflags-modal-actions button:last-child {
  background: var(--dev-primary);
  color: #fff;
}

.devflags-modal-actions button:disabled {
  opacity: .65;
  cursor: not-allowed;
}

@media (min-width: 520px) {
  .devflags-stat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .devflags-toolbar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .devflags-mini-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 760px) {
  .devflags-card-grid,
  .devflags-chart-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .devflags-form-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .devflags-form-grid .wide {
    grid-column: 1 / -1;
  }

  .devflags-modal-backdrop {
    place-items: center;
    padding: 18px;
  }

  .devflags-modal {
    padding: 18px;
  }
}

@media (min-width: 920px) {
  .devflags-page {
    padding: 14px;
  }

  .devflags-hero {
    grid-template-columns: 1fr auto;
    align-items: end;
    padding: 24px;
  }

  .devflags-stat-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .devflags-toolbar {
    grid-template-columns: minmax(240px, 2fr) repeat(4, minmax(130px, 1fr)) auto;
  }

  .devflags-mini-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1180px) {
  .devflags-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`,y0=["full_platform","accounts","billing","school_data","sync_data","audit_logs","settings"],y1=["scheduled","running","completed","failed","verified","restore_requested","restored"],y2=["local","cloud","external_drive","server_snapshot"],y3=["manual","hourly","daily","weekly","monthly"],y4={name:"",description:"",status:"scheduled",scope:"full_platform",storage:"cloud",frequency:"manual",sizeMb:"0",encrypted:!0,compressed:!0,retentionDays:"30",location:"",checksum:"",initiatedBy:""},y5={enabled:!0,frequency:"daily",retentionDays:"30",storage:"cloud",encrypted:!0,compressed:!0,notifyEmail:""},y6=["var(--backup-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],y7=a=>{if(!a)return 0;let b="number"==typeof a?a:new Date(a).getTime();return Number.isFinite(b)?b:0},y8=a=>{let b=y7(a);return b?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(b)):"Not set"},y9=a=>new Intl.NumberFormat("en-GH",{notation:"compact",maximumFractionDigits:1}).format(Number(a||0)),za=(a,b=0)=>{let c=Number(a);return Number.isFinite(c)?Math.max(b,c):b},zb=a=>{let b=String(a||"").toLowerCase();return"completed"===b||"verified"===b||"restored"===b?"green":"running"===b||"scheduled"===b?"blue":"restore_requested"===b?"orange":"failed"===b?"red":"gray"},zc=a=>a.replace(/_/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,a=>a.toUpperCase()),zd=(a,b)=>{let c=new Map;return a.forEach(a=>{let d=String(b(a)||"Unknown").trim()||"Unknown";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)},ze=(a=6)=>{let b=new Date;return Array.from({length:a},(c,d)=>{let e=new Date(b.getFullYear(),b.getMonth()-(a-1-d),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(e)})},zf=a=>{let b=y7(a);return b?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(b)):"Unknown"},zg=(a,b)=>{let c=Date.now(),d=a.status||a.state||(!1===a.ok?"failed":"completed");return{id:String(a.id||a.localId||a.backupId||`backup-${b}-${c}`),name:a.name||a.title||`Backup ${b+1}`,description:a.description||a.note||"",status:y1.includes(d)?d:"completed",scope:y0.includes(a.scope)?a.scope:"full_platform",storage:y2.includes(a.storage)?a.storage:a.locationType||"cloud",frequency:y3.includes(a.frequency)?a.frequency:"manual",sizeMb:Number(a.sizeMb||a.sizeMB||a.size||0),encrypted:!!(a.encrypted??!0),compressed:!!(a.compressed??!0),retentionDays:Number(a.retentionDays||a.retention||30),checksum:a.checksum||null,location:a.location||a.path||null,initiatedBy:a.initiatedBy||a.createdBy||null,verifiedAt:a.verifiedAt||null,restoredAt:a.restoredAt||null,restoreNote:a.restoreNote||null,createdAt:a.createdAt||c,updatedAt:a.updatedAt||a.createdAt||c}},zh=()=>[],zi=a=>{};function zj({navigate:a}){let{accountId:b,authenticated:c,loading:d}=(0,uM.F)(),{settings:e}=(0,uN.t)(),f=e?.primaryColor||"#2563eb",[g,h]=(0,M.useState)("cards"),[i,j]=(0,M.useState)([]),[k,l]=(0,M.useState)(y5),[m,n]=(0,M.useState)(!0),[o,p]=(0,M.useState)(!1),[q,r]=(0,M.useState)(!1),[s,t]=(0,M.useState)(""),[u,v]=(0,M.useState)(""),[w,x]=(0,M.useState)(""),[y,z]=(0,M.useState)("all"),[A,B]=(0,M.useState)("all"),[C,D]=(0,M.useState)("all"),[E,F]=(0,M.useState)(""),[G,H]=(0,M.useState)(""),[I,J]=(0,M.useState)(!1),[K,N]=(0,M.useState)(!1),[O,P]=(0,M.useState)(null),[Q,R]=(0,M.useState)(""),[S,T]=(0,M.useState)(y4),U=async(a=!1)=>{try{a?p(!0):n(!0),t(""),v(""),l(y5);let b=await (0,uL.uE)("/developer/backups").catch(async()=>(0,uL.uE)("/backups").catch(()=>null)),c=((a,b=[])=>{if(Array.isArray(a))return a;if(!a||"object"!=typeof a)return[];for(let c of b)if(Array.isArray(a[c]))return a[c];return Array.isArray(a.data)?a.data:Array.isArray(a.items)?a.items:Array.isArray(a.results)?a.results:Array.isArray(a.records)?a.records:Array.isArray(a.rows)?a.rows:[]})(b,["backups","snapshots","backupJobs"]).map(zg);c.length?(j(c),zi(c)):j(zh())}catch(a){t(a?.message||"Could not load backup records from the server. Showing local saved records."),j(zh()),l(y5)}finally{n(!1),p(!1)}},V=(0,M.useMemo)(()=>{let a=w.trim().toLowerCase(),b=E?new Date(E).getTime():0,c=G?new Date(G).setHours(23,59,59,999):0;return i.filter(d=>{let e=`${d.name} ${d.description||""} ${d.scope} ${d.status} ${d.storage} ${d.location||""} ${d.checksum||""}`.toLowerCase(),f=y7(d.createdAt||d.updatedAt),g=!a||e.includes(a),h="all"===y||d.status===y,i="all"===A||d.scope===A,j="all"===C||d.storage===C;return g&&h&&i&&j&&(!b||f>=b)&&(!c||f<=c)}).sort((a,b)=>y7(b.updatedAt||b.createdAt)-y7(a.updatedAt||a.createdAt))},[i,w,y,A,C,E,G]),W=i.filter(a=>"completed"===a.status).length,X=i.filter(a=>"verified"===a.status).length,Y=i.filter(a=>"failed"===a.status).length,Z=i.filter(a=>["restore_requested","restored"].includes(a.status)).length,$=i.reduce((a,b)=>a+Number(b.sizeMb||0),0),_=i.filter(a=>a.encrypted).length,aa=(0,M.useMemo)(()=>zd(i,a=>zc(a.status)),[i]),ab=(0,M.useMemo)(()=>zd(i,a=>zc(a.scope)),[i]),ac=(0,M.useMemo)(()=>zd(i,a=>zc(a.storage)),[i]),ad=(0,M.useMemo)(()=>{let a=ze(6),b=new Map(a.map(a=>[a,0]));return i.forEach(a=>{let c=zf(a.createdAt);b.has(c)&&b.set(c,(b.get(c)||0)+1)}),a.map(a=>({label:a,value:b.get(a)||0}))},[i]),ae=(0,M.useMemo)(()=>{let a=ze(6),b=new Map(a.map(a=>[a,0]));return i.forEach(a=>{let c=zf(a.createdAt);b.has(c)&&b.set(c,(b.get(c)||0)+Number(a.sizeMb||0))}),a.map(a=>({label:a,value:Math.round(b.get(a)||0)}))},[i]),af=a=>{t(""),v(""),T({id:a.id,name:a.name,description:a.description||"",status:a.status,scope:a.scope,storage:a.storage,frequency:a.frequency,sizeMb:String(a.sizeMb),encrypted:a.encrypted,compressed:a.compressed,retentionDays:String(a.retentionDays),location:a.location||"",checksum:a.checksum||"",initiatedBy:a.initiatedBy||""}),J(!0)},ag=()=>{q||(J(!1),T(y4))},ah=async a=>{if(a.preventDefault(),!S.name.trim())return void t("Backup name is required.");try{let a;r(!0),t(""),v("");let b=(a=Date.now(),{id:S.id||`backup-${a}`,name:S.name.trim(),description:S.description.trim(),status:S.status,scope:S.scope,storage:S.storage,frequency:S.frequency,sizeMb:za(S.sizeMb),encrypted:S.encrypted,compressed:S.compressed,retentionDays:za(S.retentionDays,1),checksum:S.checksum.trim()||null,location:S.location.trim()||null,initiatedBy:S.initiatedBy.trim()||"developer",verifiedAt:null,restoredAt:null,restoreNote:null,createdAt:a,updatedAt:a});if(S.id){let a=await (0,uL.uE)(`/developer/backups/${S.id}`,{method:"PATCH",body:JSON.stringify(b)}).catch(async()=>(0,uL.uE)(`/backups/${S.id}`,{method:"PATCH",body:JSON.stringify(b)}).catch(()=>null)),c=zg(a?.backup||a?.data||a||b,0);j(a=>{let b=a.map(a=>a.id===S.id?{...a,...c,id:S.id,createdAt:a.createdAt,updatedAt:Date.now()}:a);return zi(b),b}),v("Backup record updated.")}else{let a=await (0,uL.uE)("/developer/backups",{method:"POST",body:JSON.stringify(b)}).catch(async()=>(0,uL.uE)("/backups",{method:"POST",body:JSON.stringify(b)}).catch(()=>null)),c=zg(a?.backup||a?.data||a||b,0);j(a=>{let b=[c,...a];return zi(b),b}),v("Backup record created.")}ag()}catch(a){t(a?.message||"Could not save backup record.")}finally{r(!1)}},ai=async()=>{try{t(""),v("");let a={id:`backup-${Date.now()}`,name:`Manual Backup ${new Date().toLocaleString("en-GH")}`,description:"Manual backup started from developer portal.",status:"running",scope:"full_platform",storage:k.storage,frequency:"manual",sizeMb:0,encrypted:k.encrypted,compressed:k.compressed,retentionDays:za(k.retentionDays,1),checksum:null,location:null,initiatedBy:"developer",verifiedAt:null,restoredAt:null,restoreNote:null,createdAt:Date.now(),updatedAt:Date.now()},b=await (0,uL.uE)("/developer/backups",{method:"POST",body:JSON.stringify(a)}).catch(async()=>(0,uL.uE)("/backups",{method:"POST",body:JSON.stringify(a)}).catch(()=>null)),c=zg(b?.backup||b?.data||b||a,0);j(a=>{let b=[c,...a];return zi(b),b}),v("Backup job created.")}catch(a){t(a?.message||"Could not create backup job.")}},aj=async(a,b,c)=>{try{t(""),v("");let d={...a,...b,updatedAt:Date.now()};await (0,uL.uE)(`/developer/backups/${a.id}`,{method:"PATCH",body:JSON.stringify(b)}).catch(async()=>(0,uL.uE)(`/backups/${a.id}`,{method:"PATCH",body:JSON.stringify(b)}).catch(()=>null)),j(b=>{let c=b.map(b=>b.id===a.id?d:b);return zi(c),c}),v(c)}catch(a){t(a?.message||"Could not update backup.")}},ak=async a=>{try{await (0,uL.uE)(`/developer/backups/${a.id}/verify`,{method:"POST"}).catch(async()=>(0,uL.uE)(`/backups/${a.id}/verify`,{method:"POST"}).catch(()=>null)),await aj(a,{status:"verified",checksum:a.checksum||`sha256:${Array.from({length:16},()=>Math.floor(16*Math.random()).toString(16)).join("")}`,verifiedAt:Date.now()},"Backup verified.")}catch(a){t(a?.message||"Could not verify backup.")}},al=async a=>{if(a.preventDefault(),O)try{t(""),v(""),await (0,uL.uE)(`/developer/backups/${O.id}/restore`,{method:"POST",body:JSON.stringify({restoreNote:Q})}).catch(async()=>(0,uL.uE)(`/backups/${O.id}/restore`,{method:"POST",body:JSON.stringify({restoreNote:Q})}).catch(()=>null)),await aj(O,{status:"restore_requested",restoreNote:Q.trim()},"Restore request recorded."),P(null),R("")}catch(a){t(a?.message||"Could not request restore.")}},am=async a=>{await aj(a,{status:"restored",restoredAt:Date.now()},"Backup marked as restored.")},an=a=>{j(b=>{let c=b.filter(b=>b.id!==a.id);return zi(c),c}),v("Backup record removed locally.")};return m||d?(0,L.jsxs)("main",{className:"backup-page",style:{"--backup-primary":f},children:[(0,L.jsx)("style",{children:zw}),(0,L.jsxs)("section",{className:"backup-state",children:[(0,L.jsx)("div",{className:"backup-spinner"}),(0,L.jsx)("h2",{children:"Loading backups..."}),(0,L.jsx)("p",{children:"Preparing backup jobs, recovery policy and disaster recovery analytics."})]})]}):c&&b?(0,L.jsxs)("main",{className:"backup-page",style:{"--backup-primary":f},children:[(0,L.jsx)("style",{children:zw}),(0,L.jsxs)("section",{className:"backup-hero",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{className:"backup-eyebrow",children:"Disaster recovery"}),(0,L.jsx)("h1",{children:"Backups & Recovery"}),(0,L.jsx)("p",{children:"Create backup jobs, verify snapshot integrity, track restore requests and keep your SaaS platform safer from data loss. This module is operational now with local fallback, and becomes server-powered when your backend endpoints are added."})]}),(0,L.jsxs)("div",{className:"backup-hero-actions",children:[(0,L.jsxs)("div",{className:"backup-switch",children:[(0,L.jsx)("button",{type:"button",className:"cards"===g?"active":"",onClick:()=>h("cards"),children:"Cards"}),(0,L.jsx)("button",{type:"button",className:"table"===g?"active":"",onClick:()=>h("table"),children:"Table"}),(0,L.jsx)("button",{type:"button",className:"analytics"===g?"active":"",onClick:()=>h("analytics"),children:"Charts"})]}),(0,L.jsx)("button",{type:"button",className:"backup-white-btn",onClick:ai,children:"Run Backup"}),(0,L.jsx)("button",{type:"button",className:"backup-glass-btn",onClick:()=>{t(""),v(""),T({...y4,retentionDays:k.retentionDays,storage:k.storage,frequency:k.frequency,encrypted:k.encrypted,compressed:k.compressed}),J(!0)},children:"New Record"}),(0,L.jsx)("button",{type:"button",className:"backup-glass-btn",onClick:()=>U(!0),disabled:o,children:o?"Refreshing...":"Refresh"})]})]}),(s||u)&&(0,L.jsx)("section",{className:`backup-alert ${s?"error":"success"}`,children:s||u}),(0,L.jsxs)("section",{className:"backup-stat-grid",children:[(0,L.jsx)(zq,{label:"Backups",value:i.length,detail:`${V.length} shown`,icon:"\uD83D\uDCBE"}),(0,L.jsx)(zq,{label:"Verified",value:X,detail:`${W} completed`,icon:"✅"}),(0,L.jsx)(zq,{label:"Failures",value:Y,detail:`${Z} restore actions`,icon:"⚠️"}),(0,L.jsx)(zq,{label:"Storage",value:`${y9($)} MB`,detail:`${_} encrypted`,icon:"\uD83D\uDCE6"})]}),(0,L.jsxs)("section",{className:"backup-policy-card",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:"Backup Policy"}),(0,L.jsxs)("p",{children:[k.enabled?"Enabled":"Disabled"," \xb7 ",k.frequency," \xb7 ",k.retentionDays," days retention \xb7 ",k.storage]})]}),(0,L.jsxs)("div",{children:[(0,L.jsx)("button",{type:"button",onClick:()=>N(!0),children:"Configure Policy"}),(0,L.jsx)("button",{type:"button",onClick:()=>{new Date().toISOString(),v("Backup records exported.")},children:"Export Records"}),(0,L.jsx)("button",{type:"button",onClick:()=>a?.("auditLogs"),children:"Audit Logs"})]})]}),(0,L.jsxs)("section",{className:"backup-toolbar",children:[(0,L.jsx)("input",{value:w,onChange:a=>x(a.target.value),placeholder:"Search name, checksum, location, description..."}),(0,L.jsxs)("select",{value:y,onChange:a=>z(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All statuses"}),y1.map(a=>(0,L.jsx)("option",{value:a,children:zc(a)},a))]}),(0,L.jsxs)("select",{value:A,onChange:a=>B(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All scopes"}),y0.map(a=>(0,L.jsx)("option",{value:a,children:zc(a)},a))]}),(0,L.jsxs)("select",{value:C,onChange:a=>D(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All storage"}),y2.map(a=>(0,L.jsx)("option",{value:a,children:zc(a)},a))]}),(0,L.jsx)("input",{type:"date",value:E,onChange:a=>F(a.target.value)}),(0,L.jsx)("input",{type:"date",value:G,onChange:a=>H(a.target.value)}),(0,L.jsx)("button",{type:"button",onClick:()=>{x(""),z("all"),B("all"),D("all"),F(""),H("")},children:"Reset"})]}),"analytics"===g?(0,L.jsx)(zm,{statusChart:aa,scopeChart:ab,storageChart:ac,trendChart:ad,sizeTrendChart:ae}):"table"===g?(0,L.jsx)(zl,{backups:V,onEdit:af,onVerify:ak,onRestore:a=>{P(a),R(a.restoreNote||"")},onMarkRestored:am,onDelete:an}):(0,L.jsx)(zk,{backups:V,onEdit:af,onVerify:ak,onRestore:a=>{P(a),R(a.restoreNote||"")},onMarkRestored:am,onDelete:an,navigate:a}),I&&(0,L.jsx)(zn,{form:S,setForm:T,saving:q,onClose:ag,onSubmit:ah}),K&&(0,L.jsx)(zo,{policy:k,setPolicy:l,onClose:()=>N(!1),onSubmit:a=>{a.preventDefault(),N(!1),v("Backup policy saved locally.")}}),O&&(0,L.jsx)(zp,{backup:O,note:Q,setNote:R,onClose:()=>P(null),onSubmit:al})]}):(0,L.jsxs)("main",{className:"backup-page",style:{"--backup-primary":f},children:[(0,L.jsx)("style",{children:zw}),(0,L.jsxs)("section",{className:"backup-state",children:[(0,L.jsx)("h2",{children:"Developer access required"}),(0,L.jsx)("p",{children:"Sign in with a developer account to manage backups and recovery operations."})]})]})}function zk({backups:a,onEdit:b,onVerify:c,onRestore:d,onMarkRestored:e,onDelete:f,navigate:g}){return(0,L.jsxs)("section",{className:"backup-card-grid",children:[a.map(a=>{var h;return(0,L.jsxs)("article",{className:`backup-card ${a.status}`,children:[(0,L.jsxs)("div",{className:"backup-card-top",children:[(0,L.jsx)("span",{className:"backup-avatar",children:"\uD83D\uDCBE"}),(0,L.jsxs)("div",{className:"backup-chip-row",children:[(0,L.jsx)(zr,{tone:zb(a.status),children:zc(a.status)}),(0,L.jsx)(zr,{tone:"cloud"===(h=a.storage)?"blue":"server_snapshot"===h?"purple":"external_drive"===h?"orange":"gray",children:zc(a.storage)})]})]}),(0,L.jsx)("h2",{children:a.name}),(0,L.jsx)("p",{children:a.description||"No description added."}),(0,L.jsxs)("div",{className:"backup-mini-grid",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Scope"}),zc(a.scope)]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Size"}),y9(a.sizeMb)," MB"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Frequency"}),zc(a.frequency)]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Retention"}),a.retentionDays," days"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Verified"}),y8(a.verifiedAt)]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Updated"}),y8(a.updatedAt)]})]}),(0,L.jsxs)("div",{className:"backup-pills",children:[a.encrypted&&(0,L.jsx)("span",{children:"Encrypted"}),a.compressed&&(0,L.jsx)("span",{children:"Compressed"}),a.checksum&&(0,L.jsx)("span",{children:a.checksum}),a.location&&(0,L.jsx)("span",{children:a.location}),!a.encrypted&&(0,L.jsx)("span",{children:"Not encrypted"})]}),(0,L.jsxs)("div",{className:"backup-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Edit"}),(0,L.jsx)("button",{type:"button",onClick:()=>c(a),children:"Verify"}),(0,L.jsx)("button",{type:"button",onClick:()=>d(a),children:"Request Restore"}),"restore_requested"===a.status&&(0,L.jsx)("button",{type:"button",onClick:()=>e(a),children:"Mark Restored"}),(0,L.jsx)("button",{type:"button",onClick:()=>g?.("auditLogs"),children:"Audit"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>f(a),children:"Remove"})]})]},a.id)}),!a.length&&(0,L.jsx)(zs,{text:"No backup records match your filters."})]})}function zl({backups:a,onEdit:b,onVerify:c,onRestore:d,onMarkRestored:e,onDelete:f}){return(0,L.jsxs)("section",{className:"backup-table-card",children:[(0,L.jsx)("div",{className:"backup-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Backup"}),(0,L.jsx)("th",{children:"Status"}),(0,L.jsx)("th",{children:"Scope"}),(0,L.jsx)("th",{children:"Storage"}),(0,L.jsx)("th",{children:"Size"}),(0,L.jsx)("th",{children:"Retention"}),(0,L.jsx)("th",{children:"Security"}),(0,L.jsx)("th",{children:"Verified"}),(0,L.jsx)("th",{children:"Updated"}),(0,L.jsx)("th",{children:"Actions"})]})}),(0,L.jsx)("tbody",{children:a.map(a=>(0,L.jsxs)("tr",{children:[(0,L.jsxs)("td",{children:[(0,L.jsx)("strong",{children:a.name}),(0,L.jsx)("small",{children:a.checksum||a.location||a.description||"—"})]}),(0,L.jsx)("td",{children:(0,L.jsx)(zr,{tone:zb(a.status),children:zc(a.status)})}),(0,L.jsx)("td",{children:zc(a.scope)}),(0,L.jsx)("td",{children:zc(a.storage)}),(0,L.jsxs)("td",{children:[y9(a.sizeMb)," MB"]}),(0,L.jsxs)("td",{children:[a.retentionDays," days"]}),(0,L.jsxs)("td",{children:[a.encrypted?"Encrypted":"Not encrypted",a.compressed?" \xb7 compressed":""]}),(0,L.jsx)("td",{children:y8(a.verifiedAt)}),(0,L.jsx)("td",{children:y8(a.updatedAt)}),(0,L.jsx)("td",{children:(0,L.jsxs)("div",{className:"backup-table-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Edit"}),(0,L.jsx)("button",{type:"button",onClick:()=>c(a),children:"Verify"}),(0,L.jsx)("button",{type:"button",onClick:()=>d(a),children:"Restore"}),"restore_requested"===a.status&&(0,L.jsx)("button",{type:"button",onClick:()=>e(a),children:"Restored"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>f(a),children:"Remove"})]})})]},a.id))})]})}),!a.length&&(0,L.jsx)(zs,{text:"No backup records match your filters."})]})}function zm({statusChart:a,scopeChart:b,storageChart:c,trendChart:d,sizeTrendChart:e}){return(0,L.jsxs)("section",{className:"backup-chart-grid",children:[(0,L.jsx)(zt,{title:"Backup Trend",description:"Backup jobs created over the last six months.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(ww,{data:d,children:[(0,L.jsx)("defs",{children:(0,L.jsxs)("linearGradient",{id:"backupTrend",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,L.jsx)("stop",{offset:"8%",stopColor:"var(--backup-primary)",stopOpacity:.28}),(0,L.jsx)("stop",{offset:"95%",stopColor:"var(--backup-primary)",stopOpacity:.02})]})}),(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(sZ,{}),(0,L.jsx)(w9,{type:"monotone",dataKey:"value",stroke:"var(--backup-primary)",fill:"url(#backupTrend)",strokeWidth:3})]})})}),(0,L.jsx)(zt,{title:"Backup Size Trend",description:"Total backup size created by month.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:e,children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--backup-primary)",radius:[12,12,0,0]})]})})}),(0,L.jsxs)(zt,{title:"Status Overview",description:"Completed, verified, failed and restore states.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:a,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:a.map((a,b)=>(0,L.jsx)(s$,{fill:y6[b%y6.length]},b))})]})}),(0,L.jsx)(zu,{rows:a})]}),(0,L.jsx)(zt,{title:"Backup Scope",description:"What areas of the platform are being backed up.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:b,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(rs,{type:"category",dataKey:"label",width:120,tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--backup-primary)",radius:[0,12,12,0]})]})})}),(0,L.jsxs)(zt,{title:"Storage Types",description:"Where backup snapshots are stored.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:c,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:c.map((a,b)=>(0,L.jsx)(s$,{fill:y6[b%y6.length]},b))})]})}),(0,L.jsx)(zu,{rows:c})]})]})}function zn({form:a,setForm:b,saving:c,onClose:d,onSubmit:e}){let f=(a,c)=>{b(b=>({...b,[a]:c}))};return(0,L.jsx)("div",{className:"backup-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,L.jsxs)("form",{className:"backup-modal",onSubmit:e,children:[(0,L.jsxs)("div",{className:"backup-modal-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:a.id?"Edit Backup":"New Backup Record"}),(0,L.jsx)("p",{children:"Create or update a backup/recovery record."})]}),(0,L.jsx)("button",{type:"button",onClick:d,disabled:c,"aria-label":"Close",children:"✕"})]}),(0,L.jsxs)("div",{className:"backup-form-grid",children:[(0,L.jsxs)("label",{children:["Backup name",(0,L.jsx)("input",{value:a.name,onChange:a=>f("name",a.target.value),placeholder:"Daily Full Platform Backup",required:!0})]}),(0,L.jsxs)("label",{children:["Status",(0,L.jsx)("select",{value:a.status,onChange:a=>f("status",a.target.value),children:y1.map(a=>(0,L.jsx)("option",{value:a,children:zc(a)},a))})]}),(0,L.jsxs)("label",{children:["Scope",(0,L.jsx)("select",{value:a.scope,onChange:a=>f("scope",a.target.value),children:y0.map(a=>(0,L.jsx)("option",{value:a,children:zc(a)},a))})]}),(0,L.jsxs)("label",{children:["Storage",(0,L.jsx)("select",{value:a.storage,onChange:a=>f("storage",a.target.value),children:y2.map(a=>(0,L.jsx)("option",{value:a,children:zc(a)},a))})]}),(0,L.jsxs)("label",{children:["Frequency",(0,L.jsx)("select",{value:a.frequency,onChange:a=>f("frequency",a.target.value),children:y3.map(a=>(0,L.jsx)("option",{value:a,children:zc(a)},a))})]}),(0,L.jsxs)("label",{children:["Size MB",(0,L.jsx)("input",{type:"number",min:"0",value:a.sizeMb,onChange:a=>f("sizeMb",a.target.value)})]}),(0,L.jsxs)("label",{children:["Retention days",(0,L.jsx)("input",{type:"number",min:"1",value:a.retentionDays,onChange:a=>f("retentionDays",a.target.value)})]}),(0,L.jsxs)("label",{children:["Checksum",(0,L.jsx)("input",{value:a.checksum,onChange:a=>f("checksum",a.target.value),placeholder:"sha256:..."})]}),(0,L.jsxs)("label",{children:["Storage location",(0,L.jsx)("input",{value:a.location,onChange:a=>f("location",a.target.value),placeholder:"s3://bucket/path or server snapshot id"})]}),(0,L.jsxs)("label",{children:["Initiated by",(0,L.jsx)("input",{value:a.initiatedBy,onChange:a=>f("initiatedBy",a.target.value),placeholder:"developer@example.com"})]}),(0,L.jsxs)("label",{className:"wide",children:["Description",(0,L.jsx)("textarea",{value:a.description,onChange:a=>f("description",a.target.value),placeholder:"Describe the backup purpose, contents or recovery notes.",rows:3})]})]}),(0,L.jsxs)("section",{className:"backup-option-grid",children:[(0,L.jsx)(zv,{label:"Encrypted",checked:a.encrypted,onChange:a=>f("encrypted",a)}),(0,L.jsx)(zv,{label:"Compressed",checked:a.compressed,onChange:a=>f("compressed",a)})]}),(0,L.jsxs)("div",{className:"backup-modal-actions",children:[(0,L.jsx)("button",{type:"button",onClick:d,disabled:c,children:"Cancel"}),(0,L.jsx)("button",{type:"submit",disabled:c,children:c?"Saving...":a.id?"Save Changes":"Create Record"})]})]})})}function zo({policy:a,setPolicy:b,onClose:c,onSubmit:d}){let e=(a,c)=>{b(b=>({...b,[a]:c}))};return(0,L.jsx)("div",{className:"backup-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,L.jsxs)("form",{className:"backup-modal small",onSubmit:d,children:[(0,L.jsxs)("div",{className:"backup-modal-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:"Backup Policy"}),(0,L.jsx)("p",{children:"Configure your default backup schedule and retention plan."})]}),(0,L.jsx)("button",{type:"button",onClick:c,"aria-label":"Close",children:"✕"})]}),(0,L.jsxs)("section",{className:"backup-option-grid",children:[(0,L.jsx)(zv,{label:"Enable Scheduled Backups",checked:a.enabled,onChange:a=>e("enabled",a)}),(0,L.jsx)(zv,{label:"Encrypt Backups",checked:a.encrypted,onChange:a=>e("encrypted",a)}),(0,L.jsx)(zv,{label:"Compress Backups",checked:a.compressed,onChange:a=>e("compressed",a)})]}),(0,L.jsxs)("div",{className:"backup-form-grid",children:[(0,L.jsxs)("label",{children:["Frequency",(0,L.jsx)("select",{value:a.frequency,onChange:a=>e("frequency",a.target.value),children:y3.map(a=>(0,L.jsx)("option",{value:a,children:zc(a)},a))})]}),(0,L.jsxs)("label",{children:["Retention days",(0,L.jsx)("input",{type:"number",min:"1",value:a.retentionDays,onChange:a=>e("retentionDays",a.target.value)})]}),(0,L.jsxs)("label",{children:["Storage",(0,L.jsx)("select",{value:a.storage,onChange:a=>e("storage",a.target.value),children:y2.map(a=>(0,L.jsx)("option",{value:a,children:zc(a)},a))})]}),(0,L.jsxs)("label",{children:["Notify email",(0,L.jsx)("input",{type:"email",value:a.notifyEmail,onChange:a=>e("notifyEmail",a.target.value),placeholder:"developer@example.com"})]})]}),(0,L.jsxs)("div",{className:"backup-modal-actions",children:[(0,L.jsx)("button",{type:"button",onClick:c,children:"Cancel"}),(0,L.jsx)("button",{type:"submit",children:"Save Policy"})]})]})})}function zp({backup:a,note:b,setNote:c,onClose:d,onSubmit:e}){return(0,L.jsx)("div",{className:"backup-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,L.jsxs)("form",{className:"backup-modal small",onSubmit:e,children:[(0,L.jsxs)("div",{className:"backup-modal-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:"Request Restore"}),(0,L.jsx)("p",{children:a.name})]}),(0,L.jsx)("button",{type:"button",onClick:d,"aria-label":"Close",children:"✕"})]}),(0,L.jsxs)("section",{className:"backup-warning",children:[(0,L.jsx)("strong",{children:"Restore safety"}),(0,L.jsx)("p",{children:"A real restore should be performed on the backend with audit logs, backup verification, transaction safety and a rollback plan."})]}),(0,L.jsxs)("label",{className:"backup-restore-label",children:["Restore note",(0,L.jsx)("textarea",{value:b,onChange:a=>c(a.target.value),rows:5,placeholder:"Explain why this restore is needed and what scope should be restored."})]}),(0,L.jsxs)("div",{className:"backup-modal-actions",children:[(0,L.jsx)("button",{type:"button",onClick:d,children:"Cancel"}),(0,L.jsx)("button",{type:"submit",children:"Request Restore"})]})]})})}function zq({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"backup-stat",children:[(0,L.jsxs)("span",{children:[a,(0,L.jsx)("b",{children:d})]}),(0,L.jsx)("strong",{children:b}),(0,L.jsx)("small",{children:c})]})}function zr({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`backup-chip ${b}`,children:a})}function zs({text:a}){return(0,L.jsx)("div",{className:"backup-empty",children:a})}function zt({title:a,description:b,children:c}){return(0,L.jsxs)("section",{className:"backup-chart-card",children:[(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function zu({rows:a}){return(0,L.jsx)("div",{className:"backup-legend",children:a.map((a,b)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("i",{style:{background:y6[b%y6.length]}}),a.label,": ",a.value]},`${a.label}-${b}`))})}function zv({label:a,checked:b,onChange:c}){return(0,L.jsxs)("label",{className:"backup-toggle",children:[(0,L.jsx)("input",{type:"checkbox",checked:b,onChange:a=>c(a.target.checked)}),(0,L.jsx)("span",{children:a})]})}let zw=`
@keyframes backupSpin { to { transform: rotate(360deg); } }

.backup-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  padding: 8px;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--backup-primary) 10%, transparent), transparent 34rem),
    #f8fafc;
  color: #0f172a;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}

.backup-page *,
.backup-page *::before,
.backup-page *::after {
  box-sizing: border-box;
}

.backup-page button,
.backup-page input,
.backup-page select,
.backup-page textarea {
  font: inherit;
  max-width: 100%;
}

.backup-state {
  min-height: min(420px, calc(100dvh - 32px));
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .08);
  text-align: center;
}

.backup-state h2 {
  margin: 0;
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 1000;
  letter-spacing: -.04em;
}

.backup-state p {
  max-width: 34rem;
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.6;
}

.backup-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--backup-primary) 18%, transparent);
  border-top-color: var(--backup-primary);
  animation: backupSpin .8s linear infinite;
}

.backup-hero {
  display: grid;
  gap: 16px;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, .18), transparent 20rem),
    linear-gradient(135deg, var(--backup-primary), #0f172a 72%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .18);
  overflow: hidden;
}

.backup-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .14em;
  opacity: .82;
}

.backup-hero h1 {
  margin: 8px 0 0;
  font-size: clamp(28px, 8vw, 44px);
  line-height: 1.02;
  font-weight: 1000;
  letter-spacing: -.07em;
}

.backup-hero p {
  max-width: 850px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: .9;
}

.backup-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.backup-switch {
  display: inline-flex;
  gap: 5px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(14px);
}

.backup-switch button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.backup-switch button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .16);
}

.backup-white-btn,
.backup-glass-btn {
  min-height: 40px;
  border-radius: 999px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.backup-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.backup-glass-btn {
  border: 1px solid rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .14);
  color: #fff;
}

.backup-glass-btn:disabled {
  opacity: .7;
  cursor: not-allowed;
}

.backup-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 850;
}

.backup-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.backup-alert.success {
  background: #dcfce7;
  color: #166534;
}

.backup-stat-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.backup-stat,
.backup-policy-card,
.backup-card,
.backup-chart-card,
.backup-table-card {
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.backup-stat {
  padding: 16px;
}

.backup-stat span {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.backup-stat strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(24px, 8vw, 34px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
}

.backup-stat small {
  display: block;
  margin-top: 8px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.backup-policy-card {
  display: grid;
  gap: 12px;
  margin-top: 10px;
  padding: 14px;
}

.backup-policy-card h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 1000;
}

.backup-policy-card p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.backup-policy-card > div:last-child,
.backup-actions,
.backup-table-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.backup-policy-card button,
.backup-actions button,
.backup-table-actions button,
.backup-modal-actions button {
  min-height: 38px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: color-mix(in srgb, var(--backup-primary) 10%, white);
  color: var(--backup-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.backup-actions button:first-child,
.backup-table-actions button:first-child,
.backup-modal-actions button:last-child {
  background: var(--backup-primary);
  color: #fff;
}

.backup-actions button.danger,
.backup-table-actions button.danger {
  background: #fee2e2;
  color: #b91c1c;
}

.backup-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
}

.backup-toolbar input,
.backup-toolbar select {
  min-height: 42px;
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .3);
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
}

.backup-toolbar button {
  min-height: 42px;
  border: 0;
  border-radius: 16px;
  background: color-mix(in srgb, var(--backup-primary) 10%, white);
  color: var(--backup-primary);
  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.backup-card-grid,
.backup-chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.backup-card,
.backup-chart-card,
.backup-table-card {
  min-width: 0;
  padding: 14px;
}

.backup-card.failed {
  border-color: rgba(220, 38, 38, .24);
  background: linear-gradient(180deg, #fff, #fff7f7);
}

.backup-card.restore_requested {
  border-color: rgba(249, 115, 22, .24);
}

.backup-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.backup-avatar {
  width: 46px;
  height: 46px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--backup-primary), #0f172a);
  color: #fff;
  font-size: 18px;
  font-weight: 1000;
}

.backup-chip-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.backup-card h2 {
  margin: 14px 0 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.backup-card p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.45;
}

.backup-mini-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 14px;
}

.backup-mini-grid span {
  padding: 10px;
  border-radius: 16px;
  background: #f8fafc;
  color: #0f172a;
  font-size: 12px;
  font-weight: 850;
}

.backup-mini-grid b {
  display: block;
  color: #64748b;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 3px;
}

.backup-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.backup-pills span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 9px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
  max-width: 100%;
  overflow-wrap: anywhere;
}

.backup-actions {
  margin-top: 14px;
}

.backup-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
  white-space: nowrap;
}

.backup-chip.green { background: #dcfce7; color: #166534; }
.backup-chip.blue { background: #dbeafe; color: #1d4ed8; }
.backup-chip.purple { background: #f3e8ff; color: #7e22ce; }
.backup-chip.orange { background: #ffedd5; color: #c2410c; }
.backup-chip.red { background: #fee2e2; color: #b91c1c; }
.backup-chip.gray { background: #f1f5f9; color: #475569; }

.backup-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.backup-table-wrap table {
  width: 100%;
  min-width: 1180px;
  border-collapse: collapse;
}

.backup-table-wrap th {
  text-align: left;
  color: #64748b;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.backup-table-wrap td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .16);
  font-size: 13px;
  vertical-align: top;
}

.backup-table-wrap strong {
  display: block;
  font-weight: 1000;
}

.backup-table-wrap small {
  display: block;
  margin-top: 3px;
  color: #64748b;
  font-size: 11px;
  line-height: 1.35;
}

.backup-chart-card h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.backup-chart-card p {
  margin: 5px 0 10px;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.backup-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

.backup-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 9px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.backup-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

.backup-empty {
  grid-column: 1 / -1;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
  color: #64748b;
  font-size: 13px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, .35);
}

.backup-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15, 23, 42, .58);
  backdrop-filter: blur(12px);
}

.backup-modal {
  width: min(980px, 100%);
  max-height: min(92dvh, 920px);
  overflow-y: auto;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 30px 100px rgba(15, 23, 42, .35);
  border: 1px solid rgba(255, 255, 255, .24);
  padding: 14px;
}

.backup-modal.small {
  width: min(680px, 100%);
}

.backup-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 4px 14px;
}

.backup-modal-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.backup-modal-head p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.backup-modal-head button {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: #f1f5f9;
  color: #0f172a;
  font-weight: 1000;
  cursor: pointer;
}

.backup-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.backup-form-grid label,
.backup-restore-label {
  display: grid;
  gap: 6px;
  color: #334155;
  font-size: 12px;
  font-weight: 950;
}

.backup-form-grid input,
.backup-form-grid select,
.backup-form-grid textarea,
.backup-restore-label textarea {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .32);
  border-radius: 16px;
  background: #fff;
  color: #0f172a;
  padding: 11px 12px;
  font-size: 13px;
  font-weight: 800;
}

.backup-form-grid input,
.backup-form-grid select {
  min-height: 42px;
}

.backup-form-grid textarea,
.backup-restore-label textarea {
  resize: vertical;
}

.backup-option-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 12px;
  padding: 12px;
  border-radius: 22px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
}

.backup-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 36px;
  padding: 0 10px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .18);
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
}

.backup-toggle input {
  width: 16px;
  height: 16px;
  accent-color: var(--backup-primary);
}

.backup-warning {
  padding: 12px;
  border-radius: 20px;
  background: #fff7ed;
  border: 1px solid rgba(249, 115, 22, .24);
  margin-bottom: 12px;
}

.backup-warning strong {
  display: block;
  color: #9a3412;
  font-size: 13px;
  font-weight: 1000;
}

.backup-warning p {
  margin: 5px 0 0;
  color: #c2410c;
  font-size: 12px;
  line-height: 1.5;
}

.backup-modal-actions {
  position: sticky;
  bottom: -14px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 14px;
  padding: 12px 0 2px;
  background: linear-gradient(to top, #fff 70%, transparent);
}

.backup-modal-actions button:first-child {
  background: #f1f5f9;
  color: #0f172a;
}

.backup-modal-actions button:disabled {
  opacity: .65;
  cursor: not-allowed;
}

@media (min-width: 520px) {
  .backup-stat-grid,
  .backup-option-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .backup-toolbar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .backup-mini-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 760px) {
  .backup-card-grid,
  .backup-chart-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .backup-form-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .backup-form-grid .wide {
    grid-column: 1 / -1;
  }

  .backup-policy-card {
    grid-template-columns: 1fr auto;
    align-items: center;
  }

  .backup-modal-backdrop {
    place-items: center;
    padding: 18px;
  }

  .backup-modal {
    padding: 18px;
  }
}

@media (min-width: 920px) {
  .backup-page {
    padding: 14px;
  }

  .backup-hero {
    grid-template-columns: 1fr auto;
    align-items: end;
    padding: 24px;
  }

  .backup-stat-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .backup-toolbar {
    grid-template-columns: minmax(240px, 2fr) repeat(5, minmax(120px, 1fr)) auto;
  }

  .backup-mini-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1180px) {
  .backup-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`,zx=["payment","email","sms","webhook","storage","analytics","identity","ai","external_api","other"],zy=["active","inactive","pending","failed","testing","deprecated"],zz=["production","sandbox","development"],zA=["var(--integration-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],zB={name:"",provider:"",type:"external_api",status:"pending",environment:"sandbox",endpoint:"",publicKey:"",secretConfigured:!1,webhookUrl:"",requestsToday:"0",failuresToday:"0",notes:""},zC=[{id:"integration-paystack",name:"Paystack Payments",provider:"Paystack",type:"payment",status:"pending",environment:"sandbox",endpoint:"https://api.paystack.co",publicKey:"",secretConfigured:!1,webhookUrl:"",lastTestStatus:"never",lastTestMessage:"Not tested yet.",lastTestAt:null,lastSyncAt:null,requestsToday:0,failuresToday:0,notes:"Use for subscription payments, school invoices and checkout.",createdAt:Date.now()-6912e5,updatedAt:Date.now()-1728e5},{id:"integration-email",name:"Email Delivery",provider:"SMTP / Email Provider",type:"email",status:"inactive",environment:"production",endpoint:"",publicKey:"",secretConfigured:!1,webhookUrl:"",lastTestStatus:"never",lastTestMessage:"No provider configured.",lastTestAt:null,lastSyncAt:null,requestsToday:0,failuresToday:0,notes:"Use for password reset, invitations and notifications.",createdAt:Date.now()-432e6,updatedAt:Date.now()-864e5},{id:"integration-webhooks",name:"Platform Webhooks",provider:"Eleeveon Webhooks",type:"webhook",status:"active",environment:"development",endpoint:"/webhooks/platform",publicKey:"",secretConfigured:!0,webhookUrl:"/webhooks/platform",lastTestStatus:"success",lastTestMessage:"Webhook endpoint reachable.",lastTestAt:Date.now()-216e5,lastSyncAt:Date.now()-216e5,requestsToday:12,failuresToday:1,notes:"Receives internal platform events.",createdAt:Date.now()-10368e5,updatedAt:Date.now()-216e5}],zD=a=>{if(!a)return 0;let b="number"==typeof a?a:new Date(a).getTime();return Number.isFinite(b)?b:0},zE=a=>{let b=zD(a);return b?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(b)):"Not set"},zF=a=>new Intl.NumberFormat("en-GH",{notation:"compact",maximumFractionDigits:1}).format(Number(a||0)),zG=a=>a.replace(/_/g," ").replace(/\b\w/g,a=>a.toUpperCase()),zH=(a,b=0)=>Math.max(b,Number.isFinite(Number(a))?Number(a):b),zI=a=>"active"===a?"green":"pending"===a||"testing"===a?"orange":"failed"===a?"red":"gray",zJ=a=>{if("failed"===a.status)return 0;if(["inactive","deprecated"].includes(a.status))return 30;let b=Number(a.requestsToday||0),c=Number(a.failuresToday||0);return b||"active"!==a.status?b?Math.round(Math.max(0,100-c/b*100)):50:80};function zK(a,b){let c=new Map;return a.forEach(a=>{let d=String(b(a)||"Unknown");c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)}function zL(a,b){let c=Date.now();return{id:String(a.id||a.localId||a.integrationId||`integration-${b}-${c}`),name:a.name||a.title||`Integration ${b+1}`,provider:a.provider||a.vendor||a.service||"Unknown Provider",type:zx.includes(a.type)?a.type:"external_api",status:zy.includes(a.status)?a.status:a.enabled?"active":"inactive",environment:zz.includes(a.environment)?a.environment:"development",endpoint:a.endpoint||a.baseUrl||a.url||null,publicKey:a.publicKey||a.public_key||null,secretConfigured:!!(a.secretConfigured??a.hasSecret??a.secretKeyConfigured),webhookUrl:a.webhookUrl||a.webhook_url||null,lastTestStatus:a.lastTestStatus||a.testStatus||"never",lastTestMessage:a.lastTestMessage||a.testMessage||null,lastTestAt:a.lastTestAt||null,lastSyncAt:a.lastSyncAt||a.syncedAt||null,requestsToday:Number(a.requestsToday||a.requests||0),failuresToday:Number(a.failuresToday||a.failures||0),notes:a.notes||a.description||null,createdAt:a.createdAt||c,updatedAt:a.updatedAt||a.createdAt||c}}let zM=a=>{};function zN({navigate:a}){let{accountId:b,authenticated:c,loading:d}=(0,uM.F)(),{settings:e}=(0,uN.t)(),f=e?.primaryColor||"#2563eb",[g,h]=(0,M.useState)("cards"),[i,j]=(0,M.useState)([]),[k,l]=(0,M.useState)(!0),[m,n]=(0,M.useState)(!1),[o,p]=(0,M.useState)(!1),[q,r]=(0,M.useState)(""),[s,t]=(0,M.useState)("all"),[u,v]=(0,M.useState)("all"),[w,x]=(0,M.useState)("all"),[y,z]=(0,M.useState)(""),[A,B]=(0,M.useState)(""),[C,D]=(0,M.useState)(!1),[E,F]=(0,M.useState)(zB),G=async(a=!1)=>{try{a?n(!0):l(!0),z("");let b=await (0,uL.uE)("/developer/integrations").catch(async()=>(0,uL.uE)("/integrations").catch(()=>null)),c=(function(a,b=[]){if(Array.isArray(a))return a;if(!a||"object"!=typeof a)return[];for(let c of b)if(Array.isArray(a[c]))return a[c];return Array.isArray(a.data)?a.data:Array.isArray(a.items)?a.items:Array.isArray(a.results)?a.results:Array.isArray(a.records)?a.records:[]})(b,["integrations","items","data"]).map(zL);c.length?(j(c),zM(c)):j(zC)}catch(a){z(a?.message||"Could not load integrations. Showing local saved records."),j(zC)}finally{l(!1),n(!1)}},H=(0,M.useMemo)(()=>{let a=q.trim().toLowerCase();return i.filter(b=>{let c=`${b.name} ${b.provider} ${b.type} ${b.status} ${b.environment} ${b.endpoint||""} ${b.webhookUrl||""} ${b.notes||""}`.toLowerCase();return(!a||c.includes(a))&&("all"===s||b.type===s)&&("all"===u||b.status===u)&&("all"===w||b.environment===w)}).sort((a,b)=>zD(b.updatedAt)-zD(a.updatedAt))},[i,q,s,u,w]),I=i.filter(a=>"active"===a.status).length,J=i.filter(a=>"failed"===a.status).length,K=i.filter(a=>"pending"===a.status||"testing"===a.status).length,N=i.reduce((a,b)=>a+Number(b.requestsToday||0),0),O=i.reduce((a,b)=>a+Number(b.failuresToday||0),0),P=i.length?Math.round(i.reduce((a,b)=>a+zJ(b),0)/i.length):0,Q=(0,M.useMemo)(()=>zK(i,a=>zG(a.status)),[i]),R=(0,M.useMemo)(()=>zK(i,a=>zG(a.type)),[i]),S=(0,M.useMemo)(()=>zK(i,a=>zG(a.environment)),[i]),T=(0,M.useMemo)(()=>[...i].sort((a,b)=>b.requestsToday-a.requestsToday).slice(0,8).map(a=>({label:a.name.length>15?`${a.name.slice(0,15)}…`:a.name,value:a.requestsToday})),[i]),U=(0,M.useMemo)(()=>[...i].sort((a,b)=>b.failuresToday-a.failuresToday).slice(0,8).map(a=>({label:a.name.length>15?`${a.name.slice(0,15)}…`:a.name,value:a.failuresToday})),[i]),V=(0,M.useMemo)(()=>["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((a,b)=>({label:a,value:Math.round(N*[.12,.18,.15,.2,.22,.08,.05][b])})),[N]),W=a=>{z(""),B(""),F({id:a.id,name:a.name,provider:a.provider,type:a.type,status:a.status,environment:a.environment,endpoint:a.endpoint||"",publicKey:a.publicKey||"",secretConfigured:a.secretConfigured,webhookUrl:a.webhookUrl||"",requestsToday:String(a.requestsToday||0),failuresToday:String(a.failuresToday||0),notes:a.notes||""}),D(!0)},X=()=>{o||(D(!1),F(zB))},Y=async a=>{if(a.preventDefault(),!E.name.trim())return z("Integration name is required.");if(!E.provider.trim())return z("Provider is required.");try{let a;p(!0),z(""),B("");let b=(a=Date.now(),{id:E.id||`integration-${a}`,name:E.name.trim(),provider:E.provider.trim(),type:E.type,status:E.status,environment:E.environment,endpoint:E.endpoint.trim()||null,publicKey:E.publicKey.trim()||null,secretConfigured:E.secretConfigured,webhookUrl:E.webhookUrl.trim()||null,lastTestStatus:"never",lastTestMessage:"Not tested yet.",lastTestAt:null,lastSyncAt:null,requestsToday:zH(E.requestsToday),failuresToday:zH(E.failuresToday),notes:E.notes.trim()||null,createdAt:a,updatedAt:a});if(E.id){let a=await (0,uL.uE)(`/developer/integrations/${E.id}`,{method:"PATCH",body:b}).catch(async()=>(0,uL.uE)(`/integrations/${E.id}`,{method:"PATCH",body:b}).catch(()=>null)),c=zL(a?.integration||a?.data||a||b,0);j(a=>{let b=a.map(a=>a.id===E.id?{...a,...c,id:E.id,createdAt:a.createdAt,updatedAt:Date.now()}:a);return zM(b),b}),B("Integration updated.")}else{let a=await (0,uL.uE)("/developer/integrations",{method:"POST",body:b}).catch(async()=>(0,uL.uE)("/integrations",{method:"POST",body:b}).catch(()=>null)),c=zL(a?.integration||a?.data||a||b,0);j(a=>{let b=[c,...a];return zM(b),b}),B("Integration created.")}X()}catch(a){z(a?.message||"Could not save integration.")}finally{p(!1)}},Z=async(a,b,c)=>{try{z(""),B(""),await (0,uL.uE)(`/developer/integrations/${a.id}`,{method:"PATCH",body:b}).catch(async()=>(0,uL.uE)(`/integrations/${a.id}`,{method:"PATCH",body:b}).catch(()=>null)),j(c=>{let d=c.map(c=>c.id===a.id?{...c,...b,updatedAt:Date.now()}:c);return zM(d),d}),B(c)}catch(a){z(a?.message||"Could not update integration.")}},$=a=>Z(a,{status:"active"===a.status?"inactive":"active"},"active"===a.status?"Integration disabled.":"Integration enabled."),_=async a=>{try{await Z(a,{status:"testing",lastTestStatus:"never",lastTestMessage:"Testing integration..."},"Testing integration...");let b=await (0,uL.uE)(`/developer/integrations/${a.id}/test`,{method:"POST",body:{id:a.id,type:a.type,provider:a.provider,endpoint:a.endpoint,webhookUrl:a.webhookUrl,environment:a.environment}}).catch(async()=>(0,uL.uE)(`/integrations/${a.id}/test`,{method:"POST",body:{id:a.id}}).catch(()=>null)),c=b?.ok!==!1;await Z(a,{status:c?"active":"failed",lastTestStatus:c?"success":"failed",lastTestMessage:b?.message||(c?"Integration test completed successfully.":"Integration test failed."),lastTestAt:Date.now(),lastSyncAt:c?Date.now():a.lastSyncAt},c?"Integration test completed successfully.":"Integration test failed.")}catch(b){await Z(a,{status:"failed",lastTestStatus:"failed",lastTestMessage:b?.message||"Integration test failed.",lastTestAt:Date.now()},"Integration test failed.")}},aa=async a=>{try{await (0,uL.uE)(`/developer/integrations/${a.id}`,{method:"DELETE"}).catch(async()=>(0,uL.uE)(`/integrations/${a.id}`,{method:"DELETE"}).catch(()=>null)),j(b=>{let c=b.filter(b=>b.id!==a.id);return zM(c),c}),B("Integration deleted.")}catch(a){z(a?.message||"Could not delete integration.")}};return k||d?(0,L.jsxs)("main",{className:"integration-page",style:{"--integration-primary":f},children:[(0,L.jsx)("style",{children:zY}),(0,L.jsxs)("section",{className:"integration-state",children:[(0,L.jsx)("div",{className:"integration-spinner"}),(0,L.jsx)("h2",{children:"Loading integrations..."}),(0,L.jsx)("p",{children:"Preparing platform APIs, webhooks and service health."})]})]}):c&&b?(0,L.jsxs)("main",{className:"integration-page",style:{"--integration-primary":f},children:[(0,L.jsx)("style",{children:zY}),(0,L.jsxs)("section",{className:"integration-hero",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{className:"integration-eyebrow",children:"External services"}),(0,L.jsx)("h1",{children:"Platform Integrations"}),(0,L.jsx)("p",{children:"Manage payment gateways, webhooks, email/SMS providers, storage, analytics and external APIs powering Eleeveon."})]}),(0,L.jsxs)("div",{className:"integration-hero-actions",children:[(0,L.jsxs)("div",{className:"integration-switch",children:[(0,L.jsx)("button",{type:"button",className:"cards"===g?"active":"",onClick:()=>h("cards"),children:"Cards"}),(0,L.jsx)("button",{type:"button",className:"table"===g?"active":"",onClick:()=>h("table"),children:"Table"}),(0,L.jsx)("button",{type:"button",className:"analytics"===g?"active":"",onClick:()=>h("analytics"),children:"Charts"})]}),(0,L.jsx)("button",{type:"button",className:"integration-white-btn",onClick:()=>{z(""),B(""),F(zB),D(!0)},children:"New Integration"}),(0,L.jsx)("button",{type:"button",className:"integration-glass-btn",onClick:()=>{new Date().toISOString(),B("Integrations exported.")},children:"Export"}),(0,L.jsx)("button",{type:"button",className:"integration-glass-btn",onClick:()=>G(!0),disabled:m,children:m?"Refreshing...":"Refresh"})]})]}),(y||A)&&(0,L.jsx)("section",{className:`integration-alert ${y?"error":"success"}`,children:y||A}),(0,L.jsxs)("section",{className:"integration-stat-grid",children:[(0,L.jsx)(zS,{label:"Integrations",value:i.length,detail:`${H.length} shown`,icon:"\uD83D\uDD0C"}),(0,L.jsx)(zS,{label:"Active",value:I,detail:`${K} pending/testing`,icon:"✅"}),(0,L.jsx)(zS,{label:"Failures",value:J,detail:`${O} failures today`,icon:"⚠️"}),(0,L.jsx)(zS,{label:"Health",value:`${P}%`,detail:`${zF(N)} requests today`,icon:"\uD83D\uDCC8"})]}),(0,L.jsxs)("section",{className:"integration-toolbar",children:[(0,L.jsx)("input",{value:q,onChange:a=>r(a.target.value),placeholder:"Search name, provider, endpoint, notes..."}),(0,L.jsxs)("select",{value:s,onChange:a=>t(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All types"}),zx.map(a=>(0,L.jsx)("option",{value:a,children:zG(a)},a))]}),(0,L.jsxs)("select",{value:u,onChange:a=>v(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All statuses"}),zy.map(a=>(0,L.jsx)("option",{value:a,children:zG(a)},a))]}),(0,L.jsxs)("select",{value:w,onChange:a=>x(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All environments"}),zz.map(a=>(0,L.jsx)("option",{value:a,children:zG(a)},a))]}),(0,L.jsx)("button",{type:"button",onClick:()=>{r(""),t("all"),v("all"),x("all")},children:"Reset"})]}),"analytics"===g?(0,L.jsx)(zQ,{statusData:Q,typeData:R,environmentData:S,usageData:T,failureData:U,trendData:V}):"table"===g?(0,L.jsx)(zP,{rows:H,onEdit:W,onToggle:$,onTest:_,onDelete:aa}):(0,L.jsx)(zO,{rows:H,onEdit:W,onToggle:$,onTest:_,onDelete:aa,navigate:a}),C&&(0,L.jsx)(zR,{form:E,setForm:F,saving:o,onClose:X,onSubmit:Y})]}):(0,L.jsxs)("main",{className:"integration-page",style:{"--integration-primary":f},children:[(0,L.jsx)("style",{children:zY}),(0,L.jsxs)("section",{className:"integration-state",children:[(0,L.jsx)("h2",{children:"Developer access required"}),(0,L.jsx)("p",{children:"Sign in with a developer account to manage integrations."})]})]})}function zO({rows:a,onEdit:b,onToggle:c,onTest:d,onDelete:e,navigate:f}){return(0,L.jsxs)("section",{className:"integration-card-grid",children:[a.map(a=>{var g,h;return(0,L.jsxs)("article",{className:`integration-card ${a.status}`,children:[(0,L.jsxs)("div",{className:"integration-card-top",children:[(0,L.jsx)("span",{className:"integration-avatar",children:"payment"===(g=a.type)?"\uD83D\uDCB3":"email"===g?"\uD83D\uDCE7":"sms"===g?"\uD83D\uDCAC":"webhook"===g?"\uD83E\uDE9D":"storage"===g?"\uD83D\uDDC4️":"analytics"===g?"\uD83D\uDCCA":"identity"===g?"\uD83D\uDD10":"ai"===g?"\uD83E\uDD16":"external_api"===g?"\uD83D\uDD0C":"⚙️"}),(0,L.jsxs)("div",{className:"integration-chip-row",children:[(0,L.jsx)(zT,{tone:zI(a.status),children:zG(a.status)}),(0,L.jsx)(zT,{tone:"payment"===(h=a.type)?"green":"webhook"===h||"external_api"===h?"blue":"ai"===h||"analytics"===h?"purple":"email"===h||"sms"===h?"orange":"gray",children:zG(a.type)})]})]}),(0,L.jsx)("h2",{children:a.name}),(0,L.jsxs)("p",{children:[a.provider," \xb7 ",zG(a.environment)]}),(0,L.jsx)("div",{className:"integration-health",children:(0,L.jsx)("span",{style:{width:`${zJ(a)}%`}})}),(0,L.jsxs)("div",{className:"integration-mini-grid",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Health"}),zJ(a),"%"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Requests"}),zF(a.requestsToday)]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Failures"}),a.failuresToday]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Secret"}),a.secretConfigured?"Configured":"Missing"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Last Test"}),zE(a.lastTestAt)]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Last Sync"}),zE(a.lastSyncAt)]})]}),(0,L.jsxs)("div",{className:"integration-pills",children:[a.endpoint&&(0,L.jsx)("span",{children:a.endpoint}),a.webhookUrl&&(0,L.jsx)("span",{children:a.webhookUrl}),a.lastTestStatus&&(0,L.jsx)("span",{children:a.lastTestStatus}),a.notes&&(0,L.jsx)("span",{children:a.notes})]}),(0,L.jsxs)("div",{className:"integration-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Edit"}),(0,L.jsx)("button",{type:"button",onClick:()=>d(a),children:"Test"}),(0,L.jsx)("button",{type:"button",onClick:()=>c(a),children:"active"===a.status?"Disable":"Enable"}),(0,L.jsx)("button",{type:"button",onClick:()=>f?.("auditLogs"),children:"Audit"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>e(a),children:"Delete"})]})]},a.id)}),!a.length&&(0,L.jsx)(zU,{text:"No integrations match your filters."})]})}function zP({rows:a,onEdit:b,onToggle:c,onTest:d,onDelete:e}){return(0,L.jsxs)("section",{className:"integration-table-card",children:[(0,L.jsx)("div",{className:"integration-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Integration"}),(0,L.jsx)("th",{children:"Type"}),(0,L.jsx)("th",{children:"Status"}),(0,L.jsx)("th",{children:"Environment"}),(0,L.jsx)("th",{children:"Health"}),(0,L.jsx)("th",{children:"Requests"}),(0,L.jsx)("th",{children:"Failures"}),(0,L.jsx)("th",{children:"Secret"}),(0,L.jsx)("th",{children:"Last Test"}),(0,L.jsx)("th",{children:"Endpoint"}),(0,L.jsx)("th",{children:"Actions"})]})}),(0,L.jsx)("tbody",{children:a.map(a=>(0,L.jsxs)("tr",{children:[(0,L.jsxs)("td",{children:[(0,L.jsx)("strong",{children:a.name}),(0,L.jsx)("small",{children:a.provider})]}),(0,L.jsx)("td",{children:zG(a.type)}),(0,L.jsx)("td",{children:(0,L.jsx)(zT,{tone:zI(a.status),children:zG(a.status)})}),(0,L.jsx)("td",{children:zG(a.environment)}),(0,L.jsxs)("td",{children:[zJ(a),"%"]}),(0,L.jsx)("td",{children:zF(a.requestsToday)}),(0,L.jsx)("td",{children:a.failuresToday}),(0,L.jsx)("td",{children:a.secretConfigured?"Configured":"Missing"}),(0,L.jsx)("td",{children:zE(a.lastTestAt)}),(0,L.jsx)("td",{children:(0,L.jsx)("small",{children:a.endpoint||a.webhookUrl||"—"})}),(0,L.jsx)("td",{children:(0,L.jsxs)("div",{className:"integration-table-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Edit"}),(0,L.jsx)("button",{type:"button",onClick:()=>d(a),children:"Test"}),(0,L.jsx)("button",{type:"button",onClick:()=>c(a),children:"active"===a.status?"Disable":"Enable"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>e(a),children:"Delete"})]})})]},a.id))})]})}),!a.length&&(0,L.jsx)(zU,{text:"No integrations match your filters."})]})}function zQ({statusData:a,typeData:b,environmentData:c,usageData:d,failureData:e,trendData:f}){return(0,L.jsxs)("section",{className:"integration-chart-grid",children:[(0,L.jsx)(zV,{title:"Usage Trend",description:"Estimated request traffic trend across integrations.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(ww,{data:f,children:[(0,L.jsx)("defs",{children:(0,L.jsxs)("linearGradient",{id:"integrationTrend",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,L.jsx)("stop",{offset:"8%",stopColor:"var(--integration-primary)",stopOpacity:.28}),(0,L.jsx)("stop",{offset:"95%",stopColor:"var(--integration-primary)",stopOpacity:.02})]})}),(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(sZ,{}),(0,L.jsx)(w9,{type:"monotone",dataKey:"value",stroke:"var(--integration-primary)",fill:"url(#integrationTrend)",strokeWidth:3})]})})}),(0,L.jsxs)(zV,{title:"Status Overview",description:"Active, inactive, pending and failed services.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:a,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:a.map((a,b)=>(0,L.jsx)(s$,{fill:zA[b%zA.length]},b))})]})}),(0,L.jsx)(zW,{rows:a})]}),(0,L.jsx)(zV,{title:"Integration Types",description:"Categories of connected services.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:b,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(rs,{type:"category",dataKey:"label",width:115,tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--integration-primary)",radius:[0,12,12,0]})]})})}),(0,L.jsxs)(zV,{title:"Environment Split",description:"Production, sandbox and development services.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:c,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:c.map((a,b)=>(0,L.jsx)(s$,{fill:zA[b%zA.length]},b))})]})}),(0,L.jsx)(zW,{rows:c})]}),(0,L.jsx)(zV,{title:"Requests Today",description:"Top integrations by request volume.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:d,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{type:"category",dataKey:"label",width:115,tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--integration-primary)",radius:[0,12,12,0]})]})})}),(0,L.jsx)(zV,{title:"Failures Today",description:"Integrations needing attention by failure count.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:e,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(rs,{type:"category",dataKey:"label",width:115,tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--integration-primary)",radius:[0,12,12,0]})]})})})]})}function zR({form:a,setForm:b,saving:c,onClose:d,onSubmit:e}){let f=(a,c)=>b(b=>({...b,[a]:c}));return(0,L.jsx)("div",{className:"integration-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,L.jsxs)("form",{className:"integration-modal",onSubmit:e,children:[(0,L.jsxs)("div",{className:"integration-modal-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:a.id?"Edit Integration":"New Integration"}),(0,L.jsx)("p",{children:"Configure an external service connection."})]}),(0,L.jsx)("button",{type:"button",onClick:d,disabled:c,"aria-label":"Close",children:"✕"})]}),(0,L.jsxs)("div",{className:"integration-form-grid",children:[(0,L.jsxs)("label",{children:["Integration name",(0,L.jsx)("input",{value:a.name,onChange:a=>f("name",a.target.value),placeholder:"Paystack Payments",required:!0})]}),(0,L.jsxs)("label",{children:["Provider",(0,L.jsx)("input",{value:a.provider,onChange:a=>f("provider",a.target.value),placeholder:"Paystack, SendGrid, Twilio...",required:!0})]}),(0,L.jsxs)("label",{children:["Type",(0,L.jsx)("select",{value:a.type,onChange:a=>f("type",a.target.value),children:zx.map(a=>(0,L.jsx)("option",{value:a,children:zG(a)},a))})]}),(0,L.jsxs)("label",{children:["Status",(0,L.jsx)("select",{value:a.status,onChange:a=>f("status",a.target.value),children:zy.map(a=>(0,L.jsx)("option",{value:a,children:zG(a)},a))})]}),(0,L.jsxs)("label",{children:["Environment",(0,L.jsx)("select",{value:a.environment,onChange:a=>f("environment",a.target.value),children:zz.map(a=>(0,L.jsx)("option",{value:a,children:zG(a)},a))})]}),(0,L.jsxs)("label",{children:["Endpoint / Base URL",(0,L.jsx)("input",{value:a.endpoint,onChange:a=>f("endpoint",a.target.value),placeholder:"https://api.example.com"})]}),(0,L.jsxs)("label",{children:["Public key",(0,L.jsx)("input",{value:a.publicKey,onChange:a=>f("publicKey",a.target.value),placeholder:"pk_test_..."})]}),(0,L.jsxs)("label",{children:["Webhook URL",(0,L.jsx)("input",{value:a.webhookUrl,onChange:a=>f("webhookUrl",a.target.value),placeholder:"/webhooks/paystack"})]}),(0,L.jsxs)("label",{children:["Requests today",(0,L.jsx)("input",{type:"number",min:"0",value:a.requestsToday,onChange:a=>f("requestsToday",a.target.value)})]}),(0,L.jsxs)("label",{children:["Failures today",(0,L.jsx)("input",{type:"number",min:"0",value:a.failuresToday,onChange:a=>f("failuresToday",a.target.value)})]}),(0,L.jsxs)("label",{className:"wide",children:["Notes",(0,L.jsx)("textarea",{value:a.notes,onChange:a=>f("notes",a.target.value),placeholder:"What is this integration used for?",rows:3})]})]}),(0,L.jsx)("section",{className:"integration-option-grid",children:(0,L.jsx)(zX,{label:"Secret configured securely on backend",checked:a.secretConfigured,onChange:a=>f("secretConfigured",a)})}),(0,L.jsxs)("div",{className:"integration-modal-actions",children:[(0,L.jsx)("button",{type:"button",onClick:d,disabled:c,children:"Cancel"}),(0,L.jsx)("button",{type:"submit",disabled:c,children:c?"Saving...":a.id?"Save Changes":"Create Integration"})]})]})})}function zS({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"integration-stat",children:[(0,L.jsxs)("span",{children:[a,(0,L.jsx)("b",{children:d})]}),(0,L.jsx)("strong",{children:b}),(0,L.jsx)("small",{children:c})]})}function zT({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`integration-chip ${b}`,children:a})}function zU({text:a}){return(0,L.jsx)("div",{className:"integration-empty",children:a})}function zV({title:a,description:b,children:c}){return(0,L.jsxs)("section",{className:"integration-chart-card",children:[(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function zW({rows:a}){return(0,L.jsx)("div",{className:"integration-legend",children:a.map((a,b)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("i",{style:{background:zA[b%zA.length]}}),a.label,": ",a.value]},`${a.label}-${b}`))})}function zX({label:a,checked:b,onChange:c}){return(0,L.jsxs)("label",{className:"integration-toggle",children:[(0,L.jsx)("input",{type:"checkbox",checked:b,onChange:a=>c(a.target.checked)}),(0,L.jsx)("span",{children:a})]})}let zY=`
@keyframes integrationSpin { to { transform: rotate(360deg); } }
.integration-page { min-height:100dvh; width:100%; max-width:100%; padding:8px; padding-bottom:max(28px, env(safe-area-inset-bottom)); background:radial-gradient(circle at top left, color-mix(in srgb, var(--integration-primary) 10%, transparent), transparent 34rem), #f8fafc; color:#0f172a; font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; overflow-x:hidden; }
.integration-page *, .integration-page *::before, .integration-page *::after { box-sizing:border-box; }
.integration-page button, .integration-page input, .integration-page select, .integration-page textarea { font:inherit; max-width:100%; }
.integration-state { min-height:min(420px, calc(100dvh - 32px)); display:grid; place-items:center; align-content:center; gap:10px; width:min(520px, 100%); margin:0 auto; padding:22px; border-radius:28px; background:#fff; border:1px solid rgba(148,163,184,.22); box-shadow:0 24px 70px rgba(15,23,42,.08); text-align:center; }
.integration-state h2 { margin:0; font-size:clamp(18px,5vw,24px); font-weight:1000; letter-spacing:-.04em; }
.integration-state p { max-width:34rem; margin:0; color:#64748b; font-size:13px; line-height:1.6; }
.integration-spinner { width:38px; height:38px; border-radius:999px; border:4px solid color-mix(in srgb, var(--integration-primary) 18%, transparent); border-top-color:var(--integration-primary); animation:integrationSpin .8s linear infinite; }
.integration-hero { display:grid; gap:16px; border-radius:30px; padding:18px; color:#fff; background:radial-gradient(circle at 20% 10%, rgba(255,255,255,.18), transparent 20rem), linear-gradient(135deg,var(--integration-primary),#0f172a 72%); box-shadow:0 24px 70px rgba(15,23,42,.18); overflow:hidden; }
.integration-eyebrow { display:inline-flex; font-size:11px; font-weight:1000; text-transform:uppercase; letter-spacing:.14em; opacity:.82; }
.integration-hero h1 { margin:8px 0 0; font-size:clamp(28px,8vw,44px); line-height:1.02; font-weight:1000; letter-spacing:-.07em; }
.integration-hero p { max-width:850px; margin:10px 0 0; font-size:13px; line-height:1.6; opacity:.9; }
.integration-hero-actions { display:flex; flex-wrap:wrap; gap:8px; align-items:center; }
.integration-switch { display:inline-flex; gap:5px; padding:5px; border-radius:999px; background:rgba(255,255,255,.14); border:1px solid rgba(255,255,255,.2); backdrop-filter:blur(14px); }
.integration-switch button { min-height:34px; border:0; border-radius:999px; padding:0 11px; background:transparent; color:rgba(255,255,255,.75); font-size:12px; font-weight:1000; cursor:pointer; }
.integration-switch button.active { background:#fff; color:#0f172a; box-shadow:0 10px 24px rgba(15,23,42,.16); }
.integration-white-btn,.integration-glass-btn { min-height:40px; border-radius:999px; padding:0 13px; font-size:12px; font-weight:950; cursor:pointer; }
.integration-white-btn { border:0; background:#fff; color:#0f172a; }
.integration-glass-btn { border:1px solid rgba(255,255,255,.28); background:rgba(255,255,255,.14); color:#fff; }
.integration-glass-btn:disabled { opacity:.7; cursor:not-allowed; }
.integration-alert { margin-top:10px; padding:12px 14px; border-radius:20px; font-size:13px; font-weight:850; }
.integration-alert.error { background:#fee2e2; color:#991b1b; }
.integration-alert.success { background:#dcfce7; color:#166534; }
.integration-stat-grid { display:grid; grid-template-columns:1fr; gap:10px; margin-top:10px; }
.integration-stat,.integration-card,.integration-chart-card,.integration-table-card { border:1px solid rgba(148,163,184,.22); border-radius:24px; background:#fff; box-shadow:0 18px 45px rgba(15,23,42,.06); }
.integration-stat { padding:16px; }
.integration-stat span { display:flex; justify-content:space-between; gap:10px; color:#64748b; font-size:12px; font-weight:850; }
.integration-stat strong { display:block; margin-top:8px; font-size:clamp(24px,8vw,34px); line-height:1; font-weight:1000; letter-spacing:-.06em; }
.integration-stat small { display:block; margin-top:8px; color:#64748b; font-size:12px; font-weight:850; }
.integration-toolbar { display:grid; grid-template-columns:1fr; gap:8px; margin-top:10px; padding:10px; border-radius:24px; background:#fff; border:1px solid rgba(148,163,184,.22); box-shadow:0 18px 45px rgba(15,23,42,.05); }
.integration-toolbar input,.integration-toolbar select { min-height:42px; width:100%; border:1px solid rgba(148,163,184,.3); border-radius:16px; padding:0 12px; background:#fff; color:#0f172a; font-size:13px; font-weight:800; }
.integration-toolbar button { min-height:42px; border:0; border-radius:16px; background:color-mix(in srgb, var(--integration-primary) 10%, white); color:var(--integration-primary); font-size:13px; font-weight:1000; cursor:pointer; }
.integration-card-grid,.integration-chart-grid { display:grid; grid-template-columns:1fr; gap:10px; margin-top:10px; }
.integration-card,.integration-chart-card,.integration-table-card { min-width:0; padding:14px; }
.integration-card.failed { border-color:rgba(220,38,38,.24); background:linear-gradient(180deg,#fff,#fff7f7); }
.integration-card.pending,.integration-card.testing { border-color:rgba(249,115,22,.24); }
.integration-card-top { display:flex; align-items:center; justify-content:space-between; gap:8px; }
.integration-avatar { width:46px; height:46px; border-radius:18px; display:grid; place-items:center; background:linear-gradient(135deg,var(--integration-primary),#0f172a); color:#fff; font-size:18px; font-weight:1000; }
.integration-chip-row { display:flex; flex-wrap:wrap; justify-content:flex-end; gap:6px; }
.integration-card h2 { margin:14px 0 0; font-size:20px; font-weight:1000; letter-spacing:-.05em; }
.integration-card p { margin:5px 0 0; color:#64748b; font-size:13px; line-height:1.45; }
.integration-health { height:9px; margin-top:12px; border-radius:999px; background:#e2e8f0; overflow:hidden; }
.integration-health span { display:block; height:100%; min-width:4px; background:linear-gradient(90deg,var(--integration-primary),#16a34a); }
.integration-mini-grid { display:grid; grid-template-columns:1fr; gap:8px; margin-top:14px; }
.integration-mini-grid span { padding:10px; border-radius:16px; background:#f8fafc; color:#0f172a; font-size:12px; font-weight:850; }
.integration-mini-grid b { display:block; color:#64748b; font-size:10px; text-transform:uppercase; letter-spacing:.08em; margin-bottom:3px; }
.integration-pills { display:flex; flex-wrap:wrap; gap:6px; margin-top:14px; }
.integration-pills span { display:inline-flex; align-items:center; min-height:28px; padding:0 9px; border-radius:999px; background:#f8fafc; border:1px solid rgba(148,163,184,.18); color:#475569; font-size:11px; font-weight:900; max-width:100%; overflow-wrap:anywhere; }
.integration-actions,.integration-table-actions,.integration-modal-actions { display:flex; flex-wrap:wrap; gap:8px; }
.integration-actions { margin-top:14px; }
.integration-actions button,.integration-table-actions button,.integration-modal-actions button { min-height:38px; border:0; border-radius:999px; padding:0 12px; background:color-mix(in srgb, var(--integration-primary) 10%, white); color:var(--integration-primary); font-size:12px; font-weight:1000; cursor:pointer; }
.integration-actions button:first-child,.integration-table-actions button:first-child,.integration-modal-actions button:last-child { background:var(--integration-primary); color:#fff; }
.integration-actions button.danger,.integration-table-actions button.danger { background:#fee2e2; color:#b91c1c; }
.integration-chip { display:inline-flex; align-items:center; justify-content:center; min-height:28px; padding:0 10px; border-radius:999px; font-size:11px; font-weight:1000; white-space:nowrap; }
.integration-chip.green { background:#dcfce7; color:#166534; }.integration-chip.blue { background:#dbeafe; color:#1d4ed8; }.integration-chip.purple { background:#f3e8ff; color:#7e22ce; }.integration-chip.orange { background:#ffedd5; color:#c2410c; }.integration-chip.red { background:#fee2e2; color:#b91c1c; }.integration-chip.gray { background:#f1f5f9; color:#475569; }
.integration-table-wrap { width:100%; overflow-x:auto; }
.integration-table-wrap table { width:100%; min-width:1180px; border-collapse:collapse; }
.integration-table-wrap th { text-align:left; color:#64748b; font-size:11px; text-transform:uppercase; letter-spacing:.08em; padding:10px; border-bottom:1px solid rgba(148,163,184,.22); }
.integration-table-wrap td { padding:12px 10px; border-bottom:1px solid rgba(148,163,184,.16); font-size:13px; vertical-align:top; }
.integration-table-wrap strong { display:block; font-weight:1000; }.integration-table-wrap small { display:block; margin-top:3px; color:#64748b; font-size:11px; line-height:1.35; }
.integration-chart-card h2 { margin:0; font-size:17px; font-weight:1000; letter-spacing:-.04em; }.integration-chart-card p { margin:5px 0 10px; color:#64748b; font-size:12px; line-height:1.5; }
.integration-legend { display:flex; flex-wrap:wrap; gap:8px; padding-top:8px; }.integration-legend span { display:inline-flex; align-items:center; gap:6px; min-height:28px; border-radius:999px; padding:0 9px; background:#f8fafc; border:1px solid rgba(148,163,184,.18); color:#475569; font-size:11px; font-weight:900; }.integration-legend i { width:9px; height:9px; border-radius:999px; }
.integration-empty { grid-column:1 / -1; margin:0; padding:18px; border-radius:20px; background:#f8fafc; color:#64748b; font-size:13px; text-align:center; border:1px dashed rgba(148,163,184,.35); }
.integration-modal-backdrop { position:fixed; inset:0; z-index:90; display:grid; place-items:end center; padding:10px; background:rgba(15,23,42,.58); backdrop-filter:blur(12px); }
.integration-modal { width:min(980px,100%); max-height:min(92dvh,920px); overflow-y:auto; border-radius:28px; background:#fff; box-shadow:0 30px 100px rgba(15,23,42,.35); border:1px solid rgba(255,255,255,.24); padding:14px; }
.integration-modal-head { display:flex; align-items:flex-start; justify-content:space-between; gap:12px; padding:6px 4px 14px; }.integration-modal-head h2 { margin:0; font-size:20px; font-weight:1000; letter-spacing:-.05em; }.integration-modal-head p { margin:5px 0 0; color:#64748b; font-size:12px; line-height:1.5; }.integration-modal-head button { width:38px; height:38px; border:0; border-radius:999px; background:#f1f5f9; color:#0f172a; font-weight:1000; cursor:pointer; }
.integration-form-grid { display:grid; grid-template-columns:1fr; gap:10px; }.integration-form-grid label { display:grid; gap:6px; color:#334155; font-size:12px; font-weight:950; }.integration-form-grid input,.integration-form-grid select,.integration-form-grid textarea { width:100%; border:1px solid rgba(148,163,184,.32); border-radius:16px; background:#fff; color:#0f172a; padding:11px 12px; font-size:13px; font-weight:800; }.integration-form-grid input,.integration-form-grid select { min-height:42px; }.integration-form-grid textarea { resize:vertical; }
.integration-option-grid { display:grid; grid-template-columns:1fr; gap:8px; margin-top:12px; padding:12px; border-radius:22px; background:#f8fafc; border:1px solid rgba(148,163,184,.18); }
.integration-toggle { display:inline-flex; align-items:center; gap:8px; min-height:36px; padding:0 10px; border-radius:999px; background:#fff; border:1px solid rgba(148,163,184,.18); font-size:12px; font-weight:900; cursor:pointer; }.integration-toggle input { width:16px; height:16px; accent-color:var(--integration-primary); }
.integration-modal-actions { position:sticky; bottom:-14px; justify-content:flex-end; margin-top:14px; padding:12px 0 2px; background:linear-gradient(to top,#fff 70%,transparent); }.integration-modal-actions button:first-child { background:#f1f5f9; color:#0f172a; }.integration-modal-actions button:disabled { opacity:.65; cursor:not-allowed; }
@media (min-width:520px){ .integration-stat-grid,.integration-toolbar,.integration-option-grid{grid-template-columns:repeat(2,minmax(0,1fr));}.integration-mini-grid{grid-template-columns:repeat(2,minmax(0,1fr));} }
@media (min-width:760px){ .integration-card-grid,.integration-chart-grid{grid-template-columns:repeat(2,minmax(0,1fr));}.integration-form-grid{grid-template-columns:repeat(3,minmax(0,1fr));}.integration-form-grid .wide{grid-column:1 / -1;}.integration-modal-backdrop{place-items:center;padding:18px;}.integration-modal{padding:18px;} }
@media (min-width:920px){ .integration-page{padding:14px;}.integration-hero{grid-template-columns:1fr auto;align-items:end;padding:24px;}.integration-stat-grid{grid-template-columns:repeat(4,minmax(0,1fr));}.integration-toolbar{grid-template-columns:minmax(240px,2fr) repeat(3,minmax(130px,1fr)) auto;}.integration-mini-grid{grid-template-columns:repeat(3,minmax(0,1fr));} }
@media (min-width:1180px){ .integration-card-grid{grid-template-columns:repeat(3,minmax(0,1fr));} }
`,zZ=["frontend","backend","sync","database","billing","pwa","unknown"],z$=["critical","high","medium","low","info"],z_=["open","investigating","resolved","ignored"],z0=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],z1=a=>{if(!a)return 0;let b="number"==typeof a?a:new Date(a).getTime();return Number.isFinite(b)?b:0},z2=a=>{let b=z1(a);return b?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(b)):"Not set"},z3=a=>{let b=String(a||"").toLowerCase();return"critical"===b||"high"===b?"red":"medium"===b?"orange":"low"===b?"blue":"gray"},z4=a=>{let b=String(a||"").toLowerCase();return"resolved"===b?"green":"investigating"===b?"blue":"ignored"===b?"gray":"open"===b?"orange":"gray"},z5=(a,b)=>{let c=new Map;return a.forEach(a=>{let d=String(b(a)||"Unknown").trim()||"Unknown";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)},z6=(a,b)=>{let c=a.title||a.name||a.errorName||a.exception||a.message?.split("\n")?.[0]||`Error Report ${b+1}`,d=a.source||a.area||a.module||"unknown",e=a.severity||a.level||a.priority||"medium",f=a.status||(a.resolved?"resolved":"open");return{id:String(a.id||a.localId||a.fingerprint||`error-${b}-${Date.now()}`),title:c,message:a.message||a.errorMessage||a.description||"No error message recorded.",stack:a.stack||a.stackTrace||null,source:zZ.includes(d)?d:"unknown",severity:z$.includes(e)?e:"medium",status:z_.includes(f)?f:"open",route:a.route||a.path||a.url||null,accountId:a.accountId||null,accountName:a.accountName||a.schoolName||null,userEmail:a.userEmail||a.email||null,browser:a.browser||a.userAgent||null,deviceId:a.deviceId||null,appVersion:a.appVersion||a.version||null,environment:a.environment||a.env||"production",occurrences:Number(a.occurrences||a.count||1),assignedTo:a.assignedTo||null,resolutionNote:a.resolutionNote||a.note||null,firstSeenAt:a.firstSeenAt||a.createdAt||Date.now(),lastSeenAt:a.lastSeenAt||a.updatedAt||a.createdAt||Date.now(),createdAt:a.createdAt||Date.now(),updatedAt:a.updatedAt||a.lastSeenAt||Date.now()}},z7=()=>[],z8=a=>{};function z9({navigate:a}){let{accountId:b,authenticated:c,loading:d}=(0,uM.F)(),{settings:e}=(0,uN.t)(),f=e?.primaryColor||"var(--primary-color, #2563eb)",[g,h]=(0,M.useState)("cards"),[i,j]=(0,M.useState)([]),[k,l]=(0,M.useState)(!0),[m,n]=(0,M.useState)(!1),[o,p]=(0,M.useState)(""),[q,r]=(0,M.useState)(""),[s,t]=(0,M.useState)(""),[u,v]=(0,M.useState)("all"),[w,x]=(0,M.useState)("all"),[y,z]=(0,M.useState)("all"),[A,B]=(0,M.useState)("all"),[C,D]=(0,M.useState)(""),[E,F]=(0,M.useState)(""),[G,H]=(0,M.useState)(null),[I,J]=(0,M.useState)({assignedTo:"",resolutionNote:""}),K=async(a=!1)=>{try{a?n(!0):l(!0),p(""),r("");let b=await (0,uL.uE)("/developer/error-reports").catch(async()=>(0,uL.uE)("/error-reports").catch(()=>null)),c=((a,b=[])=>{if(Array.isArray(a))return a;if(!a||"object"!=typeof a)return[];for(let c of b)if(Array.isArray(a[c]))return a[c];return Array.isArray(a.data)?a.data:Array.isArray(a.items)?a.items:Array.isArray(a.results)?a.results:Array.isArray(a.records)?a.records:Array.isArray(a.rows)?a.rows:[]})(b,["errors","reports","errorReports"]).map(z6);c.length?(j(c),z8(c)):j(z7())}catch(a){p(a?.message||"Could not load server error reports. Showing local saved reports."),j(z7())}finally{l(!1),n(!1)}},N=(0,M.useMemo)(()=>Array.from(new Set(i.map(a=>a.environment||"unknown"))).sort(),[i]),O=(0,M.useMemo)(()=>{let a=s.trim().toLowerCase(),b=C?new Date(C).getTime():0,c=E?new Date(E).setHours(23,59,59,999):0;return i.filter(d=>{let e=`${d.title} ${d.message} ${d.stack||""} ${d.route||""} ${d.accountName||""} ${d.userEmail||""} ${d.assignedTo||""}`.toLowerCase(),f=z1(d.lastSeenAt||d.updatedAt||d.createdAt),g=!a||e.includes(a),h="all"===u||d.status===u,i="all"===w||d.severity===w,j="all"===y||d.source===y,k="all"===A||d.environment===A;return g&&h&&i&&j&&k&&(!b||f>=b)&&(!c||f<=c)}).sort((a,b)=>{let c={critical:5,high:4,medium:3,low:2,info:1},d=a=>"open"===a.status?2:+("investigating"===a.status),e=d(b)-d(a);if(e)return e;let f=c[b.severity]-c[a.severity];return f||z1(b.lastSeenAt||b.updatedAt)-z1(a.lastSeenAt||a.updatedAt)})},[i,s,u,w,y,A,C,E]),P=i.filter(a=>"open"===a.status).length,Q=i.filter(a=>"investigating"===a.status).length,R=i.filter(a=>"resolved"===a.status).length,S=i.filter(a=>"critical"===a.severity).length,T=i.filter(a=>["critical","high"].includes(a.severity)).length,U=i.reduce((a,b)=>a+Number(b.occurrences||0),0),V=(0,M.useMemo)(()=>z5(i,a=>a.status),[i]),W=(0,M.useMemo)(()=>z5(i,a=>a.severity),[i]),X=(0,M.useMemo)(()=>z5(i,a=>a.source),[i]),Y=(0,M.useMemo)(()=>i.map(a=>({label:a.title.length>22?`${a.title.slice(0,22)}…`:a.title,value:Number(a.occurrences||0)})).sort((a,b)=>b.value-a.value).slice(0,8),[i]),Z=(0,M.useMemo)(()=>{let a=((a=6)=>{let b=new Date;return Array.from({length:a},(c,d)=>{let e=new Date(b.getFullYear(),b.getMonth()-(a-1-d),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(e)})})(6),b=new Map(a.map(a=>[a,0]));return i.forEach(a=>{let c,d=(c=z1(a.firstSeenAt||a.createdAt))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(c)):"Unknown";b.has(d)&&b.set(d,(b.get(d)||0)+1)}),a.map(a=>({label:a,value:b.get(a)||0}))},[i]),$=async(a,b)=>{let c={...b,updatedAt:Date.now()};await (0,uL.uE)(`/developer/error-reports/${a.id}`,{method:"PATCH",body:JSON.stringify(c)}).catch(async()=>(0,uL.uE)(`/error-reports/${a.id}`,{method:"PATCH",body:JSON.stringify(c)}).catch(()=>null)),j(b=>{let d=b.map(b=>b.id===a.id?{...b,...c}:b);return z8(d),d})},_=async(a,b)=>{try{p(""),r(""),await $(a,{status:b,resolutionNote:"resolved"===b?a.resolutionNote||"Marked as resolved from developer portal.":a.resolutionNote}),r(`Error report ${b}.`)}catch(a){p(a?.message||"Could not update error report.")}},aa=a=>{H(a),J({assignedTo:a.assignedTo||"",resolutionNote:a.resolutionNote||""})},ab=async a=>{if(a.preventDefault(),G)try{p(""),r(""),await $(G,{assignedTo:I.assignedTo.trim(),resolutionNote:I.resolutionNote.trim(),status:I.resolutionNote.trim()?"resolved":G.status}),H(null),r("Error report action saved.")}catch(a){p(a?.message||"Could not save report action.")}},ac=a=>{j(b=>{let c=b.filter(b=>b.id!==a.id);return z8(c),c}),r("Error report removed locally.")};return k||d?(0,L.jsxs)("main",{className:"deverrors-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:Aj}),(0,L.jsxs)("section",{className:"deverrors-state",children:[(0,L.jsx)("div",{className:"deverrors-spinner"}),(0,L.jsx)("h2",{children:"Loading error reports..."}),(0,L.jsx)("p",{children:"Preparing diagnostics, stack traces, sources and incident analytics."})]})]}):c&&b?(0,L.jsxs)("main",{className:"deverrors-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:Aj}),(0,L.jsxs)("section",{className:"deverrors-hero",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{className:"deverrors-eyebrow",children:"Diagnostics"}),(0,L.jsx)("h1",{children:"Error Reports"}),(0,L.jsx)("p",{children:"Monitor frontend, backend, sync, billing and database failures. Prioritize critical incidents, assign fixes, resolve reports and understand failure patterns over time."})]}),(0,L.jsxs)("div",{className:"deverrors-hero-actions",children:[(0,L.jsxs)("div",{className:"deverrors-switch",role:"tablist","aria-label":"Error report views",children:[(0,L.jsx)("button",{type:"button",className:"cards"===g?"active":"",onClick:()=>h("cards"),children:"Cards"}),(0,L.jsx)("button",{type:"button",className:"table"===g?"active":"",onClick:()=>h("table"),children:"Table"}),(0,L.jsx)("button",{type:"button",className:"analytics"===g?"active":"",onClick:()=>h("analytics"),children:"Charts"})]}),(0,L.jsx)("button",{type:"button",className:"deverrors-white-btn",onClick:()=>{},children:"Capture Client Diagnostic"}),(0,L.jsx)("button",{type:"button",className:"deverrors-glass-btn",onClick:()=>K(!0),disabled:m,children:m?"Refreshing...":"Refresh"})]})]}),(o||q)&&(0,L.jsx)("section",{className:`deverrors-alert ${o?"error":"success"}`,children:o||q}),(0,L.jsxs)("section",{className:"deverrors-stat-grid",children:[(0,L.jsx)(Ae,{label:"Reports",value:i.length,detail:`${O.length} shown`,icon:"\uD83D\uDC1E"}),(0,L.jsx)(Ae,{label:"Open",value:P,detail:`${Q} investigating`,icon:"\uD83D\uDCEC"}),(0,L.jsx)(Ae,{label:"High Risk",value:T,detail:`${S} critical`,icon:"\uD83D\uDEA8"}),(0,L.jsx)(Ae,{label:"Occurrences",value:new Intl.NumberFormat("en-GH",{notation:"compact",maximumFractionDigits:1}).format(Number(U||0)),detail:`${R} resolved`,icon:"\uD83D\uDCC8"})]}),(0,L.jsxs)("section",{className:"deverrors-toolbar",children:[(0,L.jsx)("input",{value:s,onChange:a=>t(a.target.value),placeholder:"Search title, message, stack, route, account..."}),(0,L.jsxs)("select",{value:u,onChange:a=>v(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All statuses"}),z_.map(a=>(0,L.jsx)("option",{value:a,children:a},a))]}),(0,L.jsxs)("select",{value:w,onChange:a=>x(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All severity"}),z$.map(a=>(0,L.jsx)("option",{value:a,children:a},a))]}),(0,L.jsxs)("select",{value:y,onChange:a=>z(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All sources"}),zZ.map(a=>(0,L.jsx)("option",{value:a,children:a},a))]}),(0,L.jsxs)("select",{value:A,onChange:a=>B(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All environments"}),N.map(a=>(0,L.jsx)("option",{value:a,children:a},a))]}),(0,L.jsx)("input",{type:"date",value:C,onChange:a=>D(a.target.value)}),(0,L.jsx)("input",{type:"date",value:E,onChange:a=>F(a.target.value)}),(0,L.jsx)("button",{type:"button",onClick:()=>{t(""),v("all"),x("all"),z("all"),B("all"),D(""),F("")},children:"Reset"})]}),"analytics"===g?(0,L.jsx)(Ac,{statusChart:V,severityChart:W,sourceChart:X,occurrenceChart:Y,trendChart:Z}):"table"===g?(0,L.jsx)(Ab,{reports:O,onOpenAction:aa,onStatus:_,onDelete:ac}):(0,L.jsx)(Aa,{reports:O,onOpenAction:aa,onStatus:_,onDelete:ac,navigate:a}),G&&(0,L.jsx)(Ad,{report:G,form:I,setForm:J,onClose:()=>H(null),onSubmit:ab})]}):(0,L.jsxs)("main",{className:"deverrors-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:Aj}),(0,L.jsxs)("section",{className:"deverrors-state",children:[(0,L.jsx)("h2",{children:"Developer access required"}),(0,L.jsx)("p",{children:"Sign in with a developer account to inspect platform error reports."})]})]})}function Aa({reports:a,onOpenAction:b,onStatus:c,onDelete:d,navigate:e}){return(0,L.jsxs)("section",{className:"deverrors-card-grid",children:[a.map(a=>(0,L.jsxs)("article",{className:`deverrors-report-card ${a.severity}`,children:[(0,L.jsxs)("div",{className:"deverrors-report-top",children:[(0,L.jsx)("span",{className:"deverrors-report-icon",children:(a=>{switch(a){case"frontend":return"\uD83D\uDDA5️";case"backend":return"\uD83E\uDDE0";case"sync":return"\uD83D\uDD04";case"database":return"\uD83D\uDDC4️";case"billing":return"\uD83D\uDCB3";case"pwa":return"\uD83D\uDCF1";default:return"⚠️"}})(a.source)}),(0,L.jsxs)("div",{className:"deverrors-chip-row",children:[(0,L.jsx)(Af,{tone:z3(a.severity),children:a.severity}),(0,L.jsx)(Af,{tone:z4(a.status),children:a.status})]})]}),(0,L.jsx)("h2",{children:a.title}),(0,L.jsx)("p",{children:a.message}),(0,L.jsx)("div",{className:"deverrors-route",children:a.route||a.source}),(0,L.jsxs)("div",{className:"deverrors-mini-grid",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Source"}),a.source]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Occurrences"}),a.occurrences]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Account"}),a.accountName||a.accountId||"—"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"User"}),a.userEmail||"—"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Assigned"}),a.assignedTo||"Unassigned"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Last Seen"}),z2(a.lastSeenAt||a.updatedAt)]})]}),a.stack&&(0,L.jsxs)("details",{className:"deverrors-stack",children:[(0,L.jsx)("summary",{children:"Stack trace"}),(0,L.jsx)("pre",{children:a.stack})]}),(0,L.jsxs)("div",{className:"deverrors-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Assign / Resolve"}),"investigating"!==a.status&&"resolved"!==a.status&&(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"investigating"),children:"Investigate"}),"resolved"!==a.status?(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"resolved"),children:"Resolve"}):(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"open"),children:"Reopen"}),(0,L.jsx)("button",{type:"button",onClick:()=>e?.("auditLogs"),children:"Audit"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>d(a),children:"Remove"})]})]},a.id)),!a.length&&(0,L.jsx)(Ag,{text:"No error reports match your filters."})]})}function Ab({reports:a,onOpenAction:b,onStatus:c,onDelete:d}){return(0,L.jsxs)("section",{className:"deverrors-table-card",children:[(0,L.jsx)("div",{className:"deverrors-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Error"}),(0,L.jsx)("th",{children:"Severity"}),(0,L.jsx)("th",{children:"Status"}),(0,L.jsx)("th",{children:"Source"}),(0,L.jsx)("th",{children:"Occurrences"}),(0,L.jsx)("th",{children:"Route"}),(0,L.jsx)("th",{children:"Account/User"}),(0,L.jsx)("th",{children:"Assigned"}),(0,L.jsx)("th",{children:"Last Seen"}),(0,L.jsx)("th",{children:"Actions"})]})}),(0,L.jsx)("tbody",{children:a.map(a=>(0,L.jsxs)("tr",{children:[(0,L.jsxs)("td",{children:[(0,L.jsx)("strong",{children:a.title}),(0,L.jsx)("small",{children:a.message})]}),(0,L.jsx)("td",{children:(0,L.jsx)(Af,{tone:z3(a.severity),children:a.severity})}),(0,L.jsx)("td",{children:(0,L.jsx)(Af,{tone:z4(a.status),children:a.status})}),(0,L.jsx)("td",{children:a.source}),(0,L.jsx)("td",{children:a.occurrences}),(0,L.jsx)("td",{children:a.route||"—"}),(0,L.jsxs)("td",{children:[a.accountName||a.accountId||"—",(0,L.jsx)("br",{}),(0,L.jsx)("small",{children:a.userEmail||"—"})]}),(0,L.jsx)("td",{children:a.assignedTo||"Unassigned"}),(0,L.jsx)("td",{children:z2(a.lastSeenAt||a.updatedAt)}),(0,L.jsx)("td",{children:(0,L.jsxs)("div",{className:"deverrors-table-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Action"}),"resolved"!==a.status?(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"resolved"),children:"Resolve"}):(0,L.jsx)("button",{type:"button",onClick:()=>c(a,"open"),children:"Reopen"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>d(a),children:"Remove"})]})})]},a.id))})]})}),!a.length&&(0,L.jsx)(Ag,{text:"No error reports match your filters."})]})}function Ac({statusChart:a,severityChart:b,sourceChart:c,occurrenceChart:d,trendChart:e}){return(0,L.jsxs)("section",{className:"deverrors-chart-grid",children:[(0,L.jsx)(Ah,{title:"Error Trend",description:"New reports captured over the last six months.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(ww,{data:e,children:[(0,L.jsx)("defs",{children:(0,L.jsxs)("linearGradient",{id:"errorTrend",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,L.jsx)("stop",{offset:"8%",stopColor:"var(--dev-primary)",stopOpacity:.28}),(0,L.jsx)("stop",{offset:"95%",stopColor:"var(--dev-primary)",stopOpacity:.02})]})}),(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(sZ,{}),(0,L.jsx)(w9,{type:"monotone",dataKey:"value",stroke:"var(--dev-primary)",fill:"url(#errorTrend)",strokeWidth:3})]})})}),(0,L.jsxs)(Ah,{title:"Severity",description:"Risk level distribution.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:b,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:b.map((a,b)=>(0,L.jsx)(s$,{fill:z0[b%z0.length]},b))})]})}),(0,L.jsx)(Ai,{rows:b})]}),(0,L.jsxs)(Ah,{title:"Status",description:"Open, investigating, resolved and ignored reports.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:a,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:a.map((a,b)=>(0,L.jsx)(s$,{fill:z0[b%z0.length]},b))})]})}),(0,L.jsx)(Ai,{rows:a})]}),(0,L.jsx)(Ah,{title:"Sources",description:"Where failures are coming from.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:c,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(rs,{type:"category",dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11,width:100}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--dev-primary)",radius:[0,12,12,0]})]})})}),(0,L.jsx)(Ah,{title:"Top Occurrences",description:"Most repeated errors by occurrence count.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:d,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(rs,{type:"category",dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11,width:130}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--dev-primary)",radius:[0,12,12,0]})]})})})]})}function Ad({report:a,form:b,setForm:c,onClose:d,onSubmit:e}){return(0,L.jsx)("div",{className:"deverrors-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,L.jsxs)("form",{className:"deverrors-modal",onSubmit:e,children:[(0,L.jsxs)("div",{className:"deverrors-modal-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:"Assign / Resolve Report"}),(0,L.jsx)("p",{children:a.title})]}),(0,L.jsx)("button",{type:"button",onClick:d,"aria-label":"Close",children:"✕"})]}),(0,L.jsxs)("section",{className:"deverrors-modal-summary",children:[(0,L.jsx)(Af,{tone:z3(a.severity),children:a.severity}),(0,L.jsx)(Af,{tone:z4(a.status),children:a.status}),(0,L.jsx)("span",{children:a.source}),(0,L.jsxs)("span",{children:[a.occurrences," occurrence(s)"]})]}),(0,L.jsxs)("div",{className:"deverrors-form-grid",children:[(0,L.jsxs)("label",{children:["Assign to",(0,L.jsx)("input",{value:b.assignedTo,onChange:a=>c(b=>({...b,assignedTo:a.target.value})),placeholder:"developer@example.com"})]}),(0,L.jsxs)("label",{className:"wide",children:["Resolution / investigation note",(0,L.jsx)("textarea",{value:b.resolutionNote,onChange:a=>c(b=>({...b,resolutionNote:a.target.value})),rows:5,placeholder:"Describe what was fixed, ignored, or assigned for investigation."})]})]}),a.stack&&(0,L.jsxs)("details",{className:"deverrors-stack modal-stack",children:[(0,L.jsx)("summary",{children:"Stack trace"}),(0,L.jsx)("pre",{children:a.stack})]}),(0,L.jsxs)("div",{className:"deverrors-modal-actions",children:[(0,L.jsx)("button",{type:"button",onClick:d,children:"Cancel"}),(0,L.jsx)("button",{type:"submit",children:"Save Action"})]})]})})}function Ae({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"deverrors-stat",children:[(0,L.jsxs)("span",{children:[a,(0,L.jsx)("b",{children:d})]}),(0,L.jsx)("strong",{children:b}),(0,L.jsx)("small",{children:c})]})}function Af({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`deverrors-chip ${b}`,children:a})}function Ag({text:a}){return(0,L.jsx)("div",{className:"deverrors-empty",children:a})}function Ah({title:a,description:b,children:c}){return(0,L.jsxs)("section",{className:"deverrors-chart-card",children:[(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function Ai({rows:a}){return(0,L.jsx)("div",{className:"deverrors-legend",children:a.map((a,b)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("i",{style:{background:z0[b%z0.length]}}),a.label,": ",a.value]},`${a.label}-${b}`))})}let Aj=`
@keyframes deverrorsSpin { to { transform: rotate(360deg); } }

.deverrors-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 8px;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--dev-primary) 10%, transparent), transparent 34rem),
    var(--bg, #f8fafc);
  color: var(--text, #0f172a);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  overflow-x: hidden;
}

.deverrors-page *,
.deverrors-page *::before,
.deverrors-page *::after {
  box-sizing: border-box;
}

.deverrors-page button,
.deverrors-page input,
.deverrors-page select,
.deverrors-page textarea {
  font: inherit;
  max-width: 100%;
}

.deverrors-page button {
  -webkit-tap-highlight-color: transparent;
}

.deverrors-state {
  min-height: min(420px, calc(100dvh - 32px));
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 28px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .08);
  text-align: center;
}

.deverrors-state h2 {
  margin: 0;
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 1000;
  letter-spacing: -.04em;
}

.deverrors-state p {
  max-width: 34rem;
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.6;
}

.deverrors-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--dev-primary) 18%, transparent);
  border-top-color: var(--dev-primary);
  animation: deverrorsSpin .8s linear infinite;
}

.deverrors-hero {
  display: grid;
  gap: 16px;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, .18), transparent 20rem),
    linear-gradient(135deg, var(--dev-primary), #0f172a 72%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .18);
  overflow: hidden;
}

.deverrors-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .14em;
  opacity: .82;
}

.deverrors-hero h1 {
  margin: 8px 0 0;
  font-size: clamp(28px, 8vw, 44px);
  line-height: 1.02;
  font-weight: 1000;
  letter-spacing: -.07em;
}

.deverrors-hero p {
  max-width: 820px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: .9;
}

.deverrors-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.deverrors-switch {
  display: inline-flex;
  gap: 5px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(14px);
}

.deverrors-switch button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.deverrors-switch button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .16);
}

.deverrors-white-btn,
.deverrors-glass-btn {
  min-height: 40px;
  border-radius: 999px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.deverrors-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.deverrors-glass-btn {
  border: 1px solid rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .14);
  color: #fff;
}

.deverrors-glass-btn:disabled {
  opacity: .7;
  cursor: not-allowed;
}

.deverrors-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 850;
}

.deverrors-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.deverrors-alert.success {
  background: #dcfce7;
  color: #166534;
}

.deverrors-stat-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.deverrors-stat {
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 24px;
  padding: 16px;
  background: var(--surface, #fff);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.deverrors-stat span {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 850;
}

.deverrors-stat strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(24px, 8vw, 34px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
  overflow-wrap: anywhere;
}

.deverrors-stat small {
  display: block;
  margin-top: 8px;
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 850;
}

.deverrors-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 24px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
}

.deverrors-toolbar input,
.deverrors-toolbar select {
  min-height: 42px;
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .3);
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
}

.deverrors-toolbar button {
  min-height: 42px;
  border: 0;
  border-radius: 16px;
  background: color-mix(in srgb, var(--dev-primary) 10%, white);
  color: var(--dev-primary);
  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.deverrors-card-grid,
.deverrors-chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.deverrors-report-card,
.deverrors-chart-card,
.deverrors-table-card {
  min-width: 0;
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 26px;
  padding: 14px;
  background: var(--surface, #fff);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.deverrors-report-card.critical,
.deverrors-report-card.high {
  border-color: rgba(220, 38, 38, .24);
  background: linear-gradient(180deg, #fff, #fff7f7);
}

.deverrors-report-card.medium {
  border-color: rgba(249, 115, 22, .2);
}

.deverrors-report-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.deverrors-report-icon {
  width: 46px;
  height: 46px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--dev-primary), #0f172a);
  color: #fff;
  font-size: 18px;
  font-weight: 1000;
}

.deverrors-chip-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.deverrors-report-card h2 {
  margin: 14px 0 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.deverrors-report-card p {
  margin: 5px 0 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.45;
}

.deverrors-route {
  display: inline-flex;
  max-width: 100%;
  margin-top: 10px;
  padding: 7px 10px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #334155;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
  font-size: 11px;
  font-weight: 900;
  overflow-wrap: anywhere;
}

.deverrors-mini-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 14px;
}

.deverrors-mini-grid span {
  padding: 10px;
  border-radius: 16px;
  background: #f8fafc;
  color: #0f172a;
  font-size: 12px;
  font-weight: 850;
  overflow: hidden;
  text-overflow: ellipsis;
}

.deverrors-mini-grid b {
  display: block;
  color: var(--muted, #64748b);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 3px;
}

.deverrors-stack {
  margin-top: 12px;
  border-radius: 18px;
  background: #0f172a;
  color: #e5e7eb;
  overflow: hidden;
}

.deverrors-stack summary {
  cursor: pointer;
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 1000;
}

.deverrors-stack pre {
  max-height: 240px;
  overflow: auto;
  margin: 0;
  padding: 0 12px 12px;
  font-size: 11px;
  line-height: 1.55;
  white-space: pre-wrap;
}

.deverrors-actions,
.deverrors-table-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.deverrors-actions {
  margin-top: 14px;
}

.deverrors-actions button,
.deverrors-table-actions button {
  min-height: 38px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: color-mix(in srgb, var(--dev-primary) 10%, white);
  color: var(--dev-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.deverrors-actions button:first-child,
.deverrors-table-actions button:first-child {
  background: var(--dev-primary);
  color: #fff;
}

.deverrors-actions button.danger,
.deverrors-table-actions button.danger {
  background: #fee2e2;
  color: #b91c1c;
}

.deverrors-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
  white-space: nowrap;
}

.deverrors-chip.green { background: #dcfce7; color: #166534; }
.deverrors-chip.blue { background: #dbeafe; color: #1d4ed8; }
.deverrors-chip.purple { background: #f3e8ff; color: #7e22ce; }
.deverrors-chip.orange { background: #ffedd5; color: #c2410c; }
.deverrors-chip.red { background: #fee2e2; color: #b91c1c; }
.deverrors-chip.gray { background: #f1f5f9; color: #475569; }

.deverrors-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.deverrors-table-wrap table {
  width: 100%;
  min-width: 1180px;
  border-collapse: collapse;
}

.deverrors-table-wrap th {
  text-align: left;
  color: var(--muted, #64748b);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.deverrors-table-wrap td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .16);
  font-size: 13px;
  vertical-align: top;
}

.deverrors-table-wrap strong {
  display: block;
  font-weight: 1000;
}

.deverrors-table-wrap small {
  display: block;
  margin-top: 3px;
  color: var(--muted, #64748b);
  font-size: 11px;
  line-height: 1.35;
}

.deverrors-chart-card h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.deverrors-chart-card p {
  margin: 5px 0 10px;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.5;
}

.deverrors-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

.deverrors-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 9px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.deverrors-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

.deverrors-empty {
  grid-column: 1 / -1;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
  color: var(--muted, #64748b);
  font-size: 13px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, .35);
}

.deverrors-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15, 23, 42, .58);
  backdrop-filter: blur(12px);
}

.deverrors-modal {
  width: min(860px, 100%);
  max-height: min(92dvh, 920px);
  overflow-y: auto;
  border-radius: 28px;
  background: var(--surface, #fff);
  box-shadow: 0 30px 100px rgba(15, 23, 42, .35);
  border: 1px solid rgba(255, 255, 255, .24);
  padding: 14px;
}

.deverrors-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 4px 14px;
}

.deverrors-modal-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.deverrors-modal-head p {
  margin: 5px 0 0;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.5;
}

.deverrors-modal-head button {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: #f1f5f9;
  color: #0f172a;
  font-weight: 1000;
  cursor: pointer;
}

.deverrors-modal-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px;
  border-radius: 18px;
  background: #f8fafc;
  margin-bottom: 12px;
}

.deverrors-modal-summary span:not(.deverrors-chip) {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .18);
  font-size: 11px;
  font-weight: 900;
  color: #475569;
}

.deverrors-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.deverrors-form-grid label {
  display: grid;
  gap: 6px;
  color: #334155;
  font-size: 12px;
  font-weight: 950;
}

.deverrors-form-grid input,
.deverrors-form-grid textarea {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .32);
  border-radius: 16px;
  background: #fff;
  color: #0f172a;
  padding: 11px 12px;
  font-size: 13px;
  font-weight: 800;
}

.deverrors-form-grid input {
  min-height: 42px;
}

.deverrors-form-grid textarea {
  resize: vertical;
}

.deverrors-modal-actions {
  position: sticky;
  bottom: -14px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 14px;
  padding: 12px 0 2px;
  background: linear-gradient(to top, var(--surface, #fff) 70%, transparent);
}

.deverrors-modal-actions button {
  min-height: 42px;
  border: 0;
  border-radius: 999px;
  padding: 0 14px;
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.deverrors-modal-actions button:first-child {
  background: #f1f5f9;
  color: #0f172a;
}

.deverrors-modal-actions button:last-child {
  background: var(--dev-primary);
  color: #fff;
}

.modal-stack {
  margin-top: 12px;
}

@media (min-width: 520px) {
  .deverrors-stat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .deverrors-toolbar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .deverrors-mini-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 760px) {
  .deverrors-card-grid,
  .deverrors-chart-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .deverrors-form-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .deverrors-form-grid .wide {
    grid-column: 1 / -1;
  }

  .deverrors-modal-backdrop {
    place-items: center;
    padding: 18px;
  }

  .deverrors-modal {
    padding: 18px;
  }
}

@media (min-width: 920px) {
  .deverrors-page {
    padding: 14px;
  }

  .deverrors-hero {
    grid-template-columns: 1fr auto;
    align-items: end;
    padding: 24px;
  }

  .deverrors-stat-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .deverrors-toolbar {
    grid-template-columns: minmax(240px, 2fr) repeat(6, minmax(120px, 1fr)) auto;
  }

  .deverrors-mini-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1180px) {
  .deverrors-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`,Ak=["draft","scheduled","in_review","approved","deploying","deployed","failed","rollback_requested","rolled_back"],Al=["major","minor","patch","hotfix","security"],Am=["development","staging","production"],An=["low","medium","high","critical"],Ao={version:"",title:"",type:"patch",status:"draft",environment:"staging",risk:"low",branchName:"",commitSha:"",changelog:"",releaseNotes:"",approvedBy:"",deployedBy:"",rolloutPercent:"0",testsPassed:"0",testsFailed:"0",bugsFixed:"0",featuresAdded:"0",breakingChanges:"0",scheduledAt:""},Ap=[{id:"release-1",version:"1.0.0",title:"Developer Portal Foundation",type:"major",status:"deployed",environment:"production",risk:"medium",branchName:"main",commitSha:"a1b2c3d",changelog:"Initial developer portal with dashboard, database tools, backups, integrations and system diagnostics.",releaseNotes:"First stable developer portal release.",approvedBy:"developer",deployedBy:"developer",rollbackReason:null,rolloutPercent:100,testsPassed:38,testsFailed:0,bugsFixed:12,featuresAdded:9,breakingChanges:0,scheduledAt:Date.now()-7776e5,approvedAt:Date.now()-6912e5,deployedAt:Date.now()-6912e5,rolledBackAt:null,createdAt:Date.now()-10368e5,updatedAt:Date.now()-6912e5},{id:"release-2",version:"1.1.0",title:"SQL Console Backend",type:"minor",status:"approved",environment:"staging",risk:"high",branchName:"feature/developer-sql",commitSha:"d4e5f6a",changelog:"Adds protected SQL console backend endpoints with read-only mode, query history and audit IDs.",releaseNotes:"Requires backend module import before use.",approvedBy:"developer",deployedBy:"",rollbackReason:null,rolloutPercent:0,testsPassed:24,testsFailed:1,bugsFixed:4,featuresAdded:3,breakingChanges:0,scheduledAt:Date.now()+864e5,approvedAt:Date.now()-216e5,deployedAt:null,rolledBackAt:null,createdAt:Date.now()-2592e5,updatedAt:Date.now()-216e5},{id:"release-3",version:"1.1.1",title:"Payment Checkout Polish",type:"patch",status:"scheduled",environment:"staging",risk:"low",branchName:"fix/payment-checkout",commitSha:"b7c8d9e",changelog:"Improves checkout modal scrolling, close behavior, mobile UX and accessibility.",releaseNotes:"Safe UI-only release.",approvedBy:"",deployedBy:"",rollbackReason:null,rolloutPercent:0,testsPassed:17,testsFailed:0,bugsFixed:5,featuresAdded:1,breakingChanges:0,scheduledAt:Date.now()+1728e5,approvedAt:null,deployedAt:null,rolledBackAt:null,createdAt:Date.now()-864e5,updatedAt:Date.now()-108e5}],Aq=["var(--release-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],Ar=a=>{if(!a)return 0;let b="number"==typeof a?a:new Date(a).getTime();return Number.isFinite(b)?b:0},As=a=>{let b=Ar(a);return b?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(b)):"Not set"},At=(a,b=0,c=Number.MAX_SAFE_INTEGER)=>{let d=Number(a);return Number.isFinite(d)?Math.min(c,Math.max(b,d)):b},Au=a=>a.replace(/_/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,a=>a.toUpperCase()),Av=a=>{let b=String(a||"").toLowerCase();return"deployed"===b||"approved"===b?"green":"deploying"===b||"scheduled"===b||"in_review"===b?"blue":"rollback_requested"===b?"orange":"failed"===b||"rolled_back"===b?"red":"gray"},Aw=a=>"low"===a?"green":"medium"===a?"blue":"high"===a?"orange":"critical"===a?"red":"gray",Ax=a=>{let b=a.testsPassed+a.testsFailed;return Math.max(0,Math.min(100,(b?Math.round(a.testsPassed/b*100):70)-("critical"===a.risk?30:"high"===a.risk?18:8*("medium"===a.risk))-8*a.breakingChanges-("failed"===a.status?45:"rollback_requested"===a.status?35:50*("rolled_back"===a.status))))},Ay=(a,b)=>{let c=new Map;return a.forEach(a=>{let d=String(b(a)||"Unknown").trim()||"Unknown";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)},Az=(a,b)=>{let c=Date.now();return{id:String(a.id||a.localId||a.releaseId||`release-${b}-${c}`),version:a.version||a.tag||`0.0.${b+1}`,title:a.title||a.name||`Release ${b+1}`,type:Al.includes(a.type)?a.type:"patch",status:Ak.includes(a.status)?a.status:"draft",environment:Am.includes(a.environment)?a.environment:"staging",risk:An.includes(a.risk)?a.risk:"low",branchName:a.branchName||a.branch||null,commitSha:a.commitSha||a.commit||null,changelog:a.changelog||a.description||"",releaseNotes:a.releaseNotes||a.notes||null,approvedBy:a.approvedBy||null,deployedBy:a.deployedBy||null,rollbackReason:a.rollbackReason||null,rolloutPercent:Number(a.rolloutPercent||a.rollout||0),testsPassed:Number(a.testsPassed||a.passedTests||0),testsFailed:Number(a.testsFailed||a.failedTests||0),bugsFixed:Number(a.bugsFixed||0),featuresAdded:Number(a.featuresAdded||a.features||0),breakingChanges:Number(a.breakingChanges||0),scheduledAt:a.scheduledAt||null,approvedAt:a.approvedAt||null,deployedAt:a.deployedAt||null,rolledBackAt:a.rolledBackAt||null,createdAt:a.createdAt||c,updatedAt:a.updatedAt||a.createdAt||c}},AA=a=>{};function AB({navigate:a}){let{accountId:b,authenticated:c,loading:d}=(0,uM.F)(),{settings:e}=(0,uN.t)(),f=e?.primaryColor||"#2563eb",[g,h]=(0,M.useState)("cards"),[i,j]=(0,M.useState)([]),[k,l]=(0,M.useState)(!0),[m,n]=(0,M.useState)(!1),[o,p]=(0,M.useState)(!1),[q,r]=(0,M.useState)(""),[s,t]=(0,M.useState)("all"),[u,v]=(0,M.useState)("all"),[w,x]=(0,M.useState)("all"),[y,z]=(0,M.useState)("all"),[A,B]=(0,M.useState)(""),[C,D]=(0,M.useState)(""),[E,F]=(0,M.useState)(!1),[G,H]=(0,M.useState)(null),[I,J]=(0,M.useState)(""),[K,N]=(0,M.useState)(Ao),O=async(a=!1)=>{try{a?n(!0):l(!0),B(""),D("");let b=await (0,uL.uE)("/developer/releases").catch(async()=>(0,uL.uE)("/releases").catch(()=>null)),c=((a,b=[])=>{if(Array.isArray(a))return a;if(!a||"object"!=typeof a)return[];for(let c of b)if(Array.isArray(a[c]))return a[c];return Array.isArray(a.data)?a.data:Array.isArray(a.items)?a.items:Array.isArray(a.results)?a.results:Array.isArray(a.records)?a.records:Array.isArray(a.rows)?a.rows:[]})(b,["releases","items","data"]).map(Az);c.length?(j(c),AA(c)):j(Ap)}catch(a){B(a?.message||"Could not load releases. Showing local saved records."),j(Ap)}finally{l(!1),n(!1)}},P=(0,M.useMemo)(()=>{let a=q.trim().toLowerCase();return i.filter(b=>{let c=`${b.version} ${b.title} ${b.type} ${b.status} ${b.environment} ${b.risk} ${b.branchName||""} ${b.commitSha||""} ${b.changelog} ${b.releaseNotes||""}`.toLowerCase(),d=!a||c.includes(a),e="all"===s||b.status===s,f="all"===u||b.type===u,g="all"===w||b.environment===w,h="all"===y||b.risk===y;return d&&e&&f&&g&&h}).sort((a,b)=>Ar(b.updatedAt)-Ar(a.updatedAt))},[i,q,s,u,w,y]),Q=i.filter(a=>"deployed"===a.status).length,R=i.filter(a=>"failed"===a.status).length,S=i.filter(a=>["rollback_requested","rolled_back"].includes(a.status)).length,T=i.filter(a=>["scheduled","approved","deploying"].includes(a.status)).length,U=i.reduce((a,b)=>a+b.featuresAdded,0),V=i.reduce((a,b)=>a+b.bugsFixed,0),W=i.length?Math.round(i.reduce((a,b)=>a+Ax(b),0)/i.length):0,X=(0,M.useMemo)(()=>Ay(i,a=>Au(a.status)),[i]),Y=(0,M.useMemo)(()=>Ay(i,a=>Au(a.type)),[i]),Z=(0,M.useMemo)(()=>Ay(i,a=>Au(a.environment)),[i]),$=(0,M.useMemo)(()=>Ay(i,a=>Au(a.risk)),[i]),_=(0,M.useMemo)(()=>{let a=((a=6)=>{let b=new Date;return Array.from({length:a},(c,d)=>{let e=new Date(b.getFullYear(),b.getMonth()-(a-1-d),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(e)})})(6),b=new Map(a.map(a=>[a,0]));return i.forEach(a=>{let c,d=(c=Ar(a.deployedAt||a.createdAt))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(c)):"Unknown";b.has(d)&&b.set(d,(b.get(d)||0)+1)}),a.map(a=>({label:a,value:b.get(a)||0}))},[i]),aa=(0,M.useMemo)(()=>[{label:"Features",value:U},{label:"Bug Fixes",value:V},{label:"Breaking",value:i.reduce((a,b)=>a+b.breakingChanges,0)},{label:"Failed Tests",value:i.reduce((a,b)=>a+b.testsFailed,0)}],[i,U,V]),ab=a=>{var b;let c;B(""),D(""),N({id:(b=a).id,version:b.version,title:b.title,type:b.type,status:b.status,environment:b.environment,risk:b.risk,branchName:b.branchName||"",commitSha:b.commitSha||"",changelog:b.changelog,releaseNotes:b.releaseNotes||"",approvedBy:b.approvedBy||"",deployedBy:b.deployedBy||"",rolloutPercent:String(b.rolloutPercent||0),testsPassed:String(b.testsPassed||0),testsFailed:String(b.testsFailed||0),bugsFixed:String(b.bugsFixed||0),featuresAdded:String(b.featuresAdded||0),breakingChanges:String(b.breakingChanges||0),scheduledAt:(c=Ar(b.scheduledAt))?new Date(c).toISOString().slice(0,16):""}),F(!0)},ac=()=>{o||(F(!1),N(Ao))},ad=async a=>{if(a.preventDefault(),!K.version.trim())return void B("Version is required.");if(!K.title.trim())return void B("Release title is required.");try{let a;p(!0),B(""),D("");let b=(a=Date.now(),{id:K.id||`release-${a}`,version:K.version.trim(),title:K.title.trim(),type:K.type,status:K.status,environment:K.environment,risk:K.risk,branchName:K.branchName.trim()||null,commitSha:K.commitSha.trim()||null,changelog:K.changelog.trim(),releaseNotes:K.releaseNotes.trim()||null,approvedBy:K.approvedBy.trim()||null,deployedBy:K.deployedBy.trim()||null,rollbackReason:null,rolloutPercent:At(K.rolloutPercent,0,100),testsPassed:At(K.testsPassed),testsFailed:At(K.testsFailed),bugsFixed:At(K.bugsFixed),featuresAdded:At(K.featuresAdded),breakingChanges:At(K.breakingChanges),scheduledAt:K.scheduledAt?new Date(K.scheduledAt).getTime():null,approvedAt:"approved"===K.status?a:null,deployedAt:"deployed"===K.status?a:null,rolledBackAt:null,createdAt:a,updatedAt:a});if(K.id){let a=await (0,uL.uE)(`/developer/releases/${K.id}`,{method:"PATCH",body:b}).catch(async()=>(0,uL.uE)(`/releases/${K.id}`,{method:"PATCH",body:b}).catch(()=>null)),c=Az(a?.release||a?.data||a||b,0);j(a=>{let b=a.map(a=>a.id===K.id?{...a,...c,id:K.id,createdAt:a.createdAt,updatedAt:Date.now()}:a);return AA(b),b}),D("Release updated.")}else{let a=await (0,uL.uE)("/developer/releases",{method:"POST",body:b}).catch(async()=>(0,uL.uE)("/releases",{method:"POST",body:b}).catch(()=>null)),c=Az(a?.release||a?.data||a||b,0);j(a=>{let b=[c,...a];return AA(b),b}),D("Release created.")}ac()}catch(a){B(a?.message||"Could not save release.")}finally{p(!1)}},ae=async(a,b,c)=>{try{B(""),D("");let d={...a,...b,updatedAt:Date.now()};await (0,uL.uE)(`/developer/releases/${a.id}`,{method:"PATCH",body:b}).catch(async()=>(0,uL.uE)(`/releases/${a.id}`,{method:"PATCH",body:b}).catch(()=>null)),j(b=>{let c=b.map(b=>b.id===a.id?d:b);return AA(c),c}),D(c)}catch(a){B(a?.message||"Could not update release.")}},af=a=>{ae(a,{status:"approved",approvedAt:Date.now(),approvedBy:a.approvedBy||"developer"},"Release approved.")},ag=async a=>{try{B(""),D(""),await ae(a,{status:"deploying",rolloutPercent:Math.max(10,a.rolloutPercent)},"Deployment started."),await (0,uL.uE)(`/developer/releases/${a.id}/deploy`,{method:"POST",body:{id:a.id,version:a.version,environment:a.environment}}).catch(async()=>(0,uL.uE)(`/releases/${a.id}/deploy`,{method:"POST",body:{id:a.id,version:a.version,environment:a.environment}}).catch(()=>null)),await ae(a,{status:"deployed",rolloutPercent:100,deployedAt:Date.now(),deployedBy:a.deployedBy||"developer"},"Release deployed.")}catch(b){await ae(a,{status:"failed"},b?.message||"Deployment failed.")}},ah=async a=>{if(a.preventDefault(),G)try{B(""),D(""),await (0,uL.uE)(`/developer/releases/${G.id}/rollback`,{method:"POST",body:{reason:I}}).catch(async()=>(0,uL.uE)(`/releases/${G.id}/rollback`,{method:"POST",body:{reason:I}}).catch(()=>null)),await ae(G,{status:"rollback_requested",rollbackReason:I.trim()||"Rollback requested from developer portal."},"Rollback requested."),H(null),J("")}catch(a){B(a?.message||"Could not request rollback.")}},ai=a=>{ae(a,{status:"rolled_back",rolloutPercent:0,rolledBackAt:Date.now()},"Release marked as rolled back.")},aj=async a=>{try{B(""),D(""),await (0,uL.uE)(`/developer/releases/${a.id}`,{method:"DELETE"}).catch(async()=>(0,uL.uE)(`/releases/${a.id}`,{method:"DELETE"}).catch(()=>null)),j(b=>{let c=b.filter(b=>b.id!==a.id);return AA(c),c}),D("Release deleted.")}catch(a){B(a?.message||"Could not delete release.")}};return k||d?(0,L.jsxs)("main",{className:"release-page",style:{"--release-primary":f},children:[(0,L.jsx)("style",{children:AM}),(0,L.jsxs)("section",{className:"release-state",children:[(0,L.jsx)("div",{className:"release-spinner"}),(0,L.jsx)("h2",{children:"Loading releases..."}),(0,L.jsx)("p",{children:"Preparing deployment pipeline, changelogs and rollback history."})]})]}):c&&b?(0,L.jsxs)("main",{className:"release-page",style:{"--release-primary":f},children:[(0,L.jsx)("style",{children:AM}),(0,L.jsxs)("section",{className:"release-hero",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{className:"release-eyebrow",children:"Deployment pipeline"}),(0,L.jsx)("h1",{children:"Release Management"}),(0,L.jsx)("p",{children:"Track versions, changelogs, approvals, deployments, rollout progress and rollback operations across the Eleeveon platform."})]}),(0,L.jsxs)("div",{className:"release-hero-actions",children:[(0,L.jsxs)("div",{className:"release-switch",children:[(0,L.jsx)("button",{type:"button",className:"cards"===g?"active":"",onClick:()=>h("cards"),children:"Cards"}),(0,L.jsx)("button",{type:"button",className:"table"===g?"active":"",onClick:()=>h("table"),children:"Table"}),(0,L.jsx)("button",{type:"button",className:"analytics"===g?"active":"",onClick:()=>h("analytics"),children:"Charts"})]}),(0,L.jsx)("button",{type:"button",className:"release-white-btn",onClick:()=>{B(""),D(""),N(Ao),F(!0)},children:"New Release"}),(0,L.jsx)("button",{type:"button",className:"release-glass-btn",onClick:()=>{new Date().toISOString(),D("Releases exported.")},children:"Export"}),(0,L.jsx)("button",{type:"button",className:"release-glass-btn",onClick:()=>O(!0),disabled:m,children:m?"Refreshing...":"Refresh"})]})]}),(A||C)&&(0,L.jsx)("section",{className:`release-alert ${A?"error":"success"}`,children:A||C}),(0,L.jsxs)("section",{className:"release-stat-grid",children:[(0,L.jsx)(AH,{label:"Releases",value:i.length,detail:`${P.length} shown`,icon:"\uD83D\uDE80"}),(0,L.jsx)(AH,{label:"Deployed",value:Q,detail:`${T} in pipeline`,icon:"✅"}),(0,L.jsx)(AH,{label:"Issues",value:R+S,detail:`${S} rollback states`,icon:"⚠️"}),(0,L.jsx)(AH,{label:"Health",value:`${W}%`,detail:`${U} features \xb7 ${V} fixes`,icon:"\uD83D\uDCC8"})]}),(0,L.jsxs)("section",{className:"release-toolbar",children:[(0,L.jsx)("input",{value:q,onChange:a=>r(a.target.value),placeholder:"Search version, title, branch, commit, changelog..."}),(0,L.jsxs)("select",{value:s,onChange:a=>t(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All statuses"}),Ak.map(a=>(0,L.jsx)("option",{value:a,children:Au(a)},a))]}),(0,L.jsxs)("select",{value:u,onChange:a=>v(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All types"}),Al.map(a=>(0,L.jsx)("option",{value:a,children:Au(a)},a))]}),(0,L.jsxs)("select",{value:w,onChange:a=>x(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All environments"}),Am.map(a=>(0,L.jsx)("option",{value:a,children:Au(a)},a))]}),(0,L.jsxs)("select",{value:y,onChange:a=>z(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All risks"}),An.map(a=>(0,L.jsx)("option",{value:a,children:Au(a)},a))]}),(0,L.jsx)("button",{type:"button",onClick:()=>{r(""),t("all"),v("all"),x("all"),z("all")},children:"Reset"})]}),"analytics"===g?(0,L.jsx)(AE,{statusData:X,typeData:Y,envData:Z,riskData:$,trendData:_,impactData:aa}):"table"===g?(0,L.jsx)(AD,{rows:P,onEdit:ab,onApprove:af,onDeploy:ag,onRollback:a=>{H(a),J(a.rollbackReason||"")},onRolledBack:ai,onDelete:aj}):(0,L.jsx)(AC,{rows:P,onEdit:ab,onApprove:af,onDeploy:ag,onRollback:a=>{H(a),J(a.rollbackReason||"")},onRolledBack:ai,onDelete:aj,navigate:a}),E&&(0,L.jsx)(AF,{form:K,setForm:N,saving:o,onClose:ac,onSubmit:ad}),G&&(0,L.jsx)(AG,{release:G,reason:I,setReason:J,onClose:()=>H(null),onSubmit:ah})]}):(0,L.jsxs)("main",{className:"release-page",style:{"--release-primary":f},children:[(0,L.jsx)("style",{children:AM}),(0,L.jsxs)("section",{className:"release-state",children:[(0,L.jsx)("h2",{children:"Developer access required"}),(0,L.jsx)("p",{children:"Sign in with a developer account to manage platform releases."})]})]})}function AC({rows:a,onEdit:b,onApprove:c,onDeploy:d,onRollback:e,onRolledBack:f,onDelete:g,navigate:h}){return(0,L.jsxs)("section",{className:"release-card-grid",children:[a.map(a=>{var i;return(0,L.jsxs)("article",{className:`release-card ${a.status}`,children:[(0,L.jsxs)("div",{className:"release-card-top",children:[(0,L.jsx)("span",{className:"release-avatar",children:"major"===(i=a.type)?"\uD83C\uDF0D":"minor"===i?"✨":"patch"===i?"\uD83E\uDDE9":"hotfix"===i?"\uD83D\uDD25":"security"===i?"\uD83D\uDD10":"\uD83D\uDE80"}),(0,L.jsxs)("div",{className:"release-chip-row",children:[(0,L.jsx)(AI,{tone:Av(a.status),children:Au(a.status)}),(0,L.jsx)(AI,{tone:Aw(a.risk),children:Au(a.risk)})]})]}),(0,L.jsx)("h2",{children:a.version}),(0,L.jsx)("p",{children:a.title}),(0,L.jsx)("div",{className:"release-progress",children:(0,L.jsx)("span",{style:{width:`${a.rolloutPercent}%`}})}),(0,L.jsxs)("div",{className:"release-mini-grid",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Type"}),Au(a.type)]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Environment"}),Au(a.environment)]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Rollout"}),a.rolloutPercent,"%"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Health"}),Ax(a),"%"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Tests"}),a.testsPassed," passed \xb7 ",a.testsFailed," failed"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Updated"}),As(a.updatedAt)]})]}),(0,L.jsxs)("div",{className:"release-pills",children:[a.branchName&&(0,L.jsx)("span",{children:a.branchName}),a.commitSha&&(0,L.jsx)("span",{children:a.commitSha}),a.featuresAdded>0&&(0,L.jsxs)("span",{children:[a.featuresAdded," features"]}),a.bugsFixed>0&&(0,L.jsxs)("span",{children:[a.bugsFixed," fixes"]}),a.breakingChanges>0&&(0,L.jsxs)("span",{children:[a.breakingChanges," breaking"]})]}),(0,L.jsx)("p",{className:"release-changelog",children:a.changelog||"No changelog added."}),(0,L.jsxs)("div",{className:"release-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Edit"}),"approved"!==a.status&&"deployed"!==a.status&&(0,L.jsx)("button",{type:"button",onClick:()=>c(a),children:"Approve"}),"deployed"!==a.status&&"rolled_back"!==a.status&&(0,L.jsx)("button",{type:"button",onClick:()=>d(a),children:"Deploy"}),["deployed","failed"].includes(a.status)&&(0,L.jsx)("button",{type:"button",onClick:()=>e(a),children:"Rollback"}),"rollback_requested"===a.status&&(0,L.jsx)("button",{type:"button",onClick:()=>f(a),children:"Mark Rolled Back"}),(0,L.jsx)("button",{type:"button",onClick:()=>h?.("auditLogs"),children:"Audit"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>g(a),children:"Delete"})]})]},a.id)}),!a.length&&(0,L.jsx)(AJ,{text:"No releases match your filters."})]})}function AD({rows:a,onEdit:b,onApprove:c,onDeploy:d,onRollback:e,onRolledBack:f,onDelete:g}){return(0,L.jsxs)("section",{className:"release-table-card",children:[(0,L.jsx)("div",{className:"release-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Release"}),(0,L.jsx)("th",{children:"Status"}),(0,L.jsx)("th",{children:"Type"}),(0,L.jsx)("th",{children:"Environment"}),(0,L.jsx)("th",{children:"Risk"}),(0,L.jsx)("th",{children:"Rollout"}),(0,L.jsx)("th",{children:"Tests"}),(0,L.jsx)("th",{children:"Impact"}),(0,L.jsx)("th",{children:"Deployed"}),(0,L.jsx)("th",{children:"Branch / Commit"}),(0,L.jsx)("th",{children:"Actions"})]})}),(0,L.jsx)("tbody",{children:a.map(a=>(0,L.jsxs)("tr",{children:[(0,L.jsxs)("td",{children:[(0,L.jsx)("strong",{children:a.version}),(0,L.jsx)("small",{children:a.title})]}),(0,L.jsx)("td",{children:(0,L.jsx)(AI,{tone:Av(a.status),children:Au(a.status)})}),(0,L.jsx)("td",{children:Au(a.type)}),(0,L.jsx)("td",{children:Au(a.environment)}),(0,L.jsx)("td",{children:(0,L.jsx)(AI,{tone:Aw(a.risk),children:Au(a.risk)})}),(0,L.jsxs)("td",{children:[a.rolloutPercent,"%"]}),(0,L.jsxs)("td",{children:[a.testsPassed," / ",a.testsFailed]}),(0,L.jsxs)("td",{children:[a.featuresAdded," features \xb7 ",a.bugsFixed," fixes"]}),(0,L.jsx)("td",{children:As(a.deployedAt)}),(0,L.jsx)("td",{children:(0,L.jsxs)("small",{children:[a.branchName||"—"," ",a.commitSha?`\xb7 ${a.commitSha}`:""]})}),(0,L.jsx)("td",{children:(0,L.jsxs)("div",{className:"release-table-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Edit"}),"approved"!==a.status&&"deployed"!==a.status&&(0,L.jsx)("button",{type:"button",onClick:()=>c(a),children:"Approve"}),"deployed"!==a.status&&"rolled_back"!==a.status&&(0,L.jsx)("button",{type:"button",onClick:()=>d(a),children:"Deploy"}),["deployed","failed"].includes(a.status)&&(0,L.jsx)("button",{type:"button",onClick:()=>e(a),children:"Rollback"}),"rollback_requested"===a.status&&(0,L.jsx)("button",{type:"button",onClick:()=>f(a),children:"Rolled Back"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>g(a),children:"Delete"})]})})]},a.id))})]})}),!a.length&&(0,L.jsx)(AJ,{text:"No releases match your filters."})]})}function AE({statusData:a,typeData:b,envData:c,riskData:d,trendData:e,impactData:f}){return(0,L.jsxs)("section",{className:"release-chart-grid",children:[(0,L.jsx)(AK,{title:"Release Trend",description:"Release activity over the last six months.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(ww,{data:e,children:[(0,L.jsx)("defs",{children:(0,L.jsxs)("linearGradient",{id:"releaseTrend",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,L.jsx)("stop",{offset:"8%",stopColor:"var(--release-primary)",stopOpacity:.28}),(0,L.jsx)("stop",{offset:"95%",stopColor:"var(--release-primary)",stopOpacity:.02})]})}),(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(sZ,{}),(0,L.jsx)(w9,{type:"monotone",dataKey:"value",stroke:"var(--release-primary)",fill:"url(#releaseTrend)",strokeWidth:3})]})})}),(0,L.jsxs)(AK,{title:"Status Overview",description:"Pipeline state across all releases.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:a,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:a.map((a,b)=>(0,L.jsx)(s$,{fill:Aq[b%Aq.length]},b))})]})}),(0,L.jsx)(AL,{rows:a})]}),(0,L.jsx)(AK,{title:"Release Types",description:"Major, minor, patch, hotfix and security releases.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:b,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(rs,{type:"category",dataKey:"label",width:115,tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--release-primary)",radius:[0,12,12,0]})]})})}),(0,L.jsxs)(AK,{title:"Environment Split",description:"Where releases are being prepared or deployed.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:c,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:c.map((a,b)=>(0,L.jsx)(s$,{fill:Aq[b%Aq.length]},b))})]})}),(0,L.jsx)(AL,{rows:c})]}),(0,L.jsxs)(AK,{title:"Risk Profile",description:"Release risk distribution.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:d,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:d.map((a,b)=>(0,L.jsx)(s$,{fill:Aq[b%Aq.length]},b))})]})}),(0,L.jsx)(AL,{rows:d})]}),(0,L.jsx)(AK,{title:"Release Impact",description:"Features, bug fixes, breaking changes and failed tests.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:f,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{type:"category",dataKey:"label",width:115,tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--release-primary)",radius:[0,12,12,0]})]})})})]})}function AF({form:a,setForm:b,saving:c,onClose:d,onSubmit:e}){let f=(a,c)=>{b(b=>({...b,[a]:c}))};return(0,L.jsx)("div",{className:"release-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,L.jsxs)("form",{className:"release-modal",onSubmit:e,children:[(0,L.jsxs)("div",{className:"release-modal-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:a.id?"Edit Release":"New Release"}),(0,L.jsx)("p",{children:"Record version, changelog, tests, risk and rollout details."})]}),(0,L.jsx)("button",{type:"button",onClick:d,disabled:c,"aria-label":"Close",children:"✕"})]}),(0,L.jsxs)("div",{className:"release-form-grid",children:[(0,L.jsxs)("label",{children:["Version",(0,L.jsx)("input",{value:a.version,onChange:a=>f("version",a.target.value),placeholder:"1.2.0",required:!0})]}),(0,L.jsxs)("label",{children:["Title",(0,L.jsx)("input",{value:a.title,onChange:a=>f("title",a.target.value),placeholder:"Payment checkout redesign",required:!0})]}),(0,L.jsxs)("label",{children:["Type",(0,L.jsx)("select",{value:a.type,onChange:a=>f("type",a.target.value),children:Al.map(a=>(0,L.jsx)("option",{value:a,children:Au(a)},a))})]}),(0,L.jsxs)("label",{children:["Status",(0,L.jsx)("select",{value:a.status,onChange:a=>f("status",a.target.value),children:Ak.map(a=>(0,L.jsx)("option",{value:a,children:Au(a)},a))})]}),(0,L.jsxs)("label",{children:["Environment",(0,L.jsx)("select",{value:a.environment,onChange:a=>f("environment",a.target.value),children:Am.map(a=>(0,L.jsx)("option",{value:a,children:Au(a)},a))})]}),(0,L.jsxs)("label",{children:["Risk",(0,L.jsx)("select",{value:a.risk,onChange:a=>f("risk",a.target.value),children:An.map(a=>(0,L.jsx)("option",{value:a,children:Au(a)},a))})]}),(0,L.jsxs)("label",{children:["Branch",(0,L.jsx)("input",{value:a.branchName,onChange:a=>f("branchName",a.target.value),placeholder:"feature/my-release"})]}),(0,L.jsxs)("label",{children:["Commit SHA",(0,L.jsx)("input",{value:a.commitSha,onChange:a=>f("commitSha",a.target.value),placeholder:"abc123"})]}),(0,L.jsxs)("label",{children:["Scheduled date",(0,L.jsx)("input",{type:"datetime-local",value:a.scheduledAt,onChange:a=>f("scheduledAt",a.target.value)})]}),(0,L.jsxs)("label",{children:["Rollout %",(0,L.jsx)("input",{type:"number",min:"0",max:"100",value:a.rolloutPercent,onChange:a=>f("rolloutPercent",a.target.value)})]}),(0,L.jsxs)("label",{children:["Tests passed",(0,L.jsx)("input",{type:"number",min:"0",value:a.testsPassed,onChange:a=>f("testsPassed",a.target.value)})]}),(0,L.jsxs)("label",{children:["Tests failed",(0,L.jsx)("input",{type:"number",min:"0",value:a.testsFailed,onChange:a=>f("testsFailed",a.target.value)})]}),(0,L.jsxs)("label",{children:["Features added",(0,L.jsx)("input",{type:"number",min:"0",value:a.featuresAdded,onChange:a=>f("featuresAdded",a.target.value)})]}),(0,L.jsxs)("label",{children:["Bugs fixed",(0,L.jsx)("input",{type:"number",min:"0",value:a.bugsFixed,onChange:a=>f("bugsFixed",a.target.value)})]}),(0,L.jsxs)("label",{children:["Breaking changes",(0,L.jsx)("input",{type:"number",min:"0",value:a.breakingChanges,onChange:a=>f("breakingChanges",a.target.value)})]}),(0,L.jsxs)("label",{children:["Approved by",(0,L.jsx)("input",{value:a.approvedBy,onChange:a=>f("approvedBy",a.target.value),placeholder:"developer"})]}),(0,L.jsxs)("label",{children:["Deployed by",(0,L.jsx)("input",{value:a.deployedBy,onChange:a=>f("deployedBy",a.target.value),placeholder:"developer"})]}),(0,L.jsxs)("label",{className:"wide",children:["Changelog",(0,L.jsx)("textarea",{value:a.changelog,onChange:a=>f("changelog",a.target.value),placeholder:"What changed in this release?",rows:4})]}),(0,L.jsxs)("label",{className:"wide",children:["Release notes",(0,L.jsx)("textarea",{value:a.releaseNotes,onChange:a=>f("releaseNotes",a.target.value),placeholder:"Internal notes, migration steps, QA notes, etc.",rows:3})]})]}),(0,L.jsxs)("div",{className:"release-modal-actions",children:[(0,L.jsx)("button",{type:"button",onClick:d,disabled:c,children:"Cancel"}),(0,L.jsx)("button",{type:"submit",disabled:c,children:c?"Saving...":a.id?"Save Changes":"Create Release"})]})]})})}function AG({release:a,reason:b,setReason:c,onClose:d,onSubmit:e}){return(0,L.jsx)("div",{className:"release-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,L.jsxs)("form",{className:"release-modal small",onSubmit:e,children:[(0,L.jsxs)("div",{className:"release-modal-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:"Request Rollback"}),(0,L.jsxs)("p",{children:[a.version," \xb7 ",a.title]})]}),(0,L.jsx)("button",{type:"button",onClick:d,"aria-label":"Close",children:"✕"})]}),(0,L.jsxs)("section",{className:"release-warning",children:[(0,L.jsx)("strong",{children:"Rollback safety"}),(0,L.jsx)("p",{children:"A real rollback should be performed through your backend/deployment pipeline with audit logs, backup verification and a clear recovery plan."})]}),(0,L.jsxs)("label",{className:"release-rollback-label",children:["Rollback reason",(0,L.jsx)("textarea",{value:b,onChange:a=>c(a.target.value),rows:5,placeholder:"Explain why this release needs to be rolled back."})]}),(0,L.jsxs)("div",{className:"release-modal-actions",children:[(0,L.jsx)("button",{type:"button",onClick:d,children:"Cancel"}),(0,L.jsx)("button",{type:"submit",children:"Request Rollback"})]})]})})}function AH({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"release-stat",children:[(0,L.jsxs)("span",{children:[a,(0,L.jsx)("b",{children:d})]}),(0,L.jsx)("strong",{children:b}),(0,L.jsx)("small",{children:c})]})}function AI({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`release-chip ${b}`,children:a})}function AJ({text:a}){return(0,L.jsx)("div",{className:"release-empty",children:a})}function AK({title:a,description:b,children:c}){return(0,L.jsxs)("section",{className:"release-chart-card",children:[(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function AL({rows:a}){return(0,L.jsx)("div",{className:"release-legend",children:a.map((a,b)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("i",{style:{background:Aq[b%Aq.length]}}),a.label,": ",a.value]},`${a.label}-${b}`))})}let AM=`
@keyframes releaseSpin { to { transform: rotate(360deg); } }

.release-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  padding: 8px;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--release-primary) 10%, transparent), transparent 34rem),
    #f8fafc;
  color: #0f172a;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}

.release-page *,
.release-page *::before,
.release-page *::after {
  box-sizing: border-box;
}

.release-page button,
.release-page input,
.release-page select,
.release-page textarea {
  font: inherit;
  max-width: 100%;
}

.release-state {
  min-height: min(420px, calc(100dvh - 32px));
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .08);
  text-align: center;
}

.release-state h2 {
  margin: 0;
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 1000;
  letter-spacing: -.04em;
}

.release-state p {
  max-width: 34rem;
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.6;
}

.release-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--release-primary) 18%, transparent);
  border-top-color: var(--release-primary);
  animation: releaseSpin .8s linear infinite;
}

.release-hero {
  display: grid;
  gap: 16px;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, .18), transparent 20rem),
    linear-gradient(135deg, var(--release-primary), #0f172a 72%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .18);
  overflow: hidden;
}

.release-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .14em;
  opacity: .82;
}

.release-hero h1 {
  margin: 8px 0 0;
  font-size: clamp(28px, 8vw, 44px);
  line-height: 1.02;
  font-weight: 1000;
  letter-spacing: -.07em;
}

.release-hero p {
  max-width: 850px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: .9;
}

.release-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.release-switch {
  display: inline-flex;
  gap: 5px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(14px);
}

.release-switch button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.release-switch button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .16);
}

.release-white-btn,
.release-glass-btn {
  min-height: 40px;
  border-radius: 999px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.release-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.release-glass-btn {
  border: 1px solid rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .14);
  color: #fff;
}

.release-glass-btn:disabled {
  opacity: .7;
  cursor: not-allowed;
}

.release-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 850;
}

.release-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.release-alert.success {
  background: #dcfce7;
  color: #166534;
}

.release-stat-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.release-stat,
.release-card,
.release-chart-card,
.release-table-card {
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.release-stat {
  padding: 16px;
}

.release-stat span {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.release-stat strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(24px, 8vw, 34px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
}

.release-stat small {
  display: block;
  margin-top: 8px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.release-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
}

.release-toolbar input,
.release-toolbar select {
  min-height: 42px;
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .3);
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
}

.release-toolbar button {
  min-height: 42px;
  border: 0;
  border-radius: 16px;
  background: color-mix(in srgb, var(--release-primary) 10%, white);
  color: var(--release-primary);
  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.release-card-grid,
.release-chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.release-card,
.release-chart-card,
.release-table-card {
  min-width: 0;
  padding: 14px;
}

.release-card.failed,
.release-card.rolled_back {
  border-color: rgba(220, 38, 38, .24);
  background: linear-gradient(180deg, #fff, #fff7f7);
}

.release-card.rollback_requested {
  border-color: rgba(249, 115, 22, .24);
}

.release-card.deploying {
  border-color: rgba(37, 99, 235, .24);
}

.release-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.release-avatar {
  width: 46px;
  height: 46px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--release-primary), #0f172a);
  color: #fff;
  font-size: 18px;
  font-weight: 1000;
}

.release-chip-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.release-card h2 {
  margin: 14px 0 0;
  font-size: 25px;
  font-weight: 1000;
  letter-spacing: -.06em;
}

.release-card p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.45;
}

.release-changelog {
  padding: 10px;
  border-radius: 16px;
  background: #f8fafc;
}

.release-progress {
  height: 9px;
  margin-top: 12px;
  border-radius: 999px;
  background: #e2e8f0;
  overflow: hidden;
}

.release-progress span {
  display: block;
  height: 100%;
  min-width: 4px;
  background: linear-gradient(90deg, var(--release-primary), #16a34a);
}

.release-mini-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 14px;
}

.release-mini-grid span {
  padding: 10px;
  border-radius: 16px;
  background: #f8fafc;
  color: #0f172a;
  font-size: 12px;
  font-weight: 850;
}

.release-mini-grid b {
  display: block;
  color: #64748b;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 3px;
}

.release-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.release-pills span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 9px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
  max-width: 100%;
  overflow-wrap: anywhere;
}

.release-actions,
.release-table-actions,
.release-modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.release-actions {
  margin-top: 14px;
}

.release-actions button,
.release-table-actions button,
.release-modal-actions button {
  min-height: 38px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: color-mix(in srgb, var(--release-primary) 10%, white);
  color: var(--release-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.release-actions button:first-child,
.release-table-actions button:first-child,
.release-modal-actions button:last-child {
  background: var(--release-primary);
  color: #fff;
}

.release-actions button.danger,
.release-table-actions button.danger {
  background: #fee2e2;
  color: #b91c1c;
}

.release-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
  white-space: nowrap;
}

.release-chip.green { background: #dcfce7; color: #166534; }
.release-chip.blue { background: #dbeafe; color: #1d4ed8; }
.release-chip.purple { background: #f3e8ff; color: #7e22ce; }
.release-chip.orange { background: #ffedd5; color: #c2410c; }
.release-chip.red { background: #fee2e2; color: #b91c1c; }
.release-chip.gray { background: #f1f5f9; color: #475569; }

.release-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.release-table-wrap table {
  width: 100%;
  min-width: 1280px;
  border-collapse: collapse;
}

.release-table-wrap th {
  text-align: left;
  color: #64748b;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.release-table-wrap td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .16);
  font-size: 13px;
  vertical-align: top;
}

.release-table-wrap strong {
  display: block;
  font-weight: 1000;
}

.release-table-wrap small {
  display: block;
  margin-top: 3px;
  color: #64748b;
  font-size: 11px;
  line-height: 1.35;
}

.release-chart-card h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.release-chart-card p {
  margin: 5px 0 10px;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.release-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

.release-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 9px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.release-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

.release-empty {
  grid-column: 1 / -1;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
  color: #64748b;
  font-size: 13px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, .35);
}

.release-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15, 23, 42, .58);
  backdrop-filter: blur(12px);
}

.release-modal {
  width: min(1040px, 100%);
  max-height: min(92dvh, 920px);
  overflow-y: auto;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 30px 100px rgba(15, 23, 42, .35);
  border: 1px solid rgba(255, 255, 255, .24);
  padding: 14px;
}

.release-modal.small {
  width: min(680px, 100%);
}

.release-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 4px 14px;
}

.release-modal-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.release-modal-head p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.release-modal-head button {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: #f1f5f9;
  color: #0f172a;
  font-weight: 1000;
  cursor: pointer;
}

.release-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.release-form-grid label,
.release-rollback-label {
  display: grid;
  gap: 6px;
  color: #334155;
  font-size: 12px;
  font-weight: 950;
}

.release-form-grid input,
.release-form-grid select,
.release-form-grid textarea,
.release-rollback-label textarea {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .32);
  border-radius: 16px;
  background: #fff;
  color: #0f172a;
  padding: 11px 12px;
  font-size: 13px;
  font-weight: 800;
}

.release-form-grid input,
.release-form-grid select {
  min-height: 42px;
}

.release-form-grid textarea,
.release-rollback-label textarea {
  resize: vertical;
}

.release-warning {
  padding: 12px;
  border-radius: 20px;
  background: #fff7ed;
  border: 1px solid rgba(249, 115, 22, .24);
  margin-bottom: 12px;
}

.release-warning strong {
  display: block;
  color: #9a3412;
  font-size: 13px;
  font-weight: 1000;
}

.release-warning p {
  margin: 5px 0 0;
  color: #c2410c;
  font-size: 12px;
  line-height: 1.5;
}

.release-modal-actions {
  position: sticky;
  bottom: -14px;
  justify-content: flex-end;
  margin-top: 14px;
  padding: 12px 0 2px;
  background: linear-gradient(to top, #fff 70%, transparent);
}

.release-modal-actions button:first-child {
  background: #f1f5f9;
  color: #0f172a;
}

.release-modal-actions button:disabled {
  opacity: .65;
  cursor: not-allowed;
}

@media (min-width: 520px) {
  .release-stat-grid,
  .release-toolbar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .release-mini-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 760px) {
  .release-card-grid,
  .release-chart-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .release-form-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .release-form-grid .wide {
    grid-column: 1 / -1;
  }

  .release-modal-backdrop {
    place-items: center;
    padding: 18px;
  }

  .release-modal {
    padding: 18px;
  }
}

@media (min-width: 920px) {
  .release-page {
    padding: 14px;
  }

  .release-hero {
    grid-template-columns: 1fr auto;
    align-items: end;
    padding: 24px;
  }

  .release-stat-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .release-toolbar {
    grid-template-columns: minmax(240px, 2fr) repeat(4, minmax(130px, 1fr)) auto;
  }

  .release-mini-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1180px) {
  .release-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`,AN=["var(--dev-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],AO=a=>{if(!a)return 0;let b="number"==typeof a?a:new Date(a).getTime();return Number.isFinite(b)?b:0},AP=a=>{let b=AO(a);return b?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(b)):"Not set"},AQ=a=>new Intl.NumberFormat("en-GH",{notation:"compact",maximumFractionDigits:1}).format(Number(a||0)),AR=a=>{try{return Math.round(new Blob([JSON.stringify(a)]).size/1024)}catch{try{return Math.round(JSON.stringify(a).length/1024)}catch{return 0}}},AS=a=>"healthy"===a?"green":"empty"===a?"gray":"warning"===a?"orange":"error"===a?"red":"gray",AT=({count:a,pendingSync:b,failedRecords:c,error:d})=>d||c>0?"error":b>0?"warning":0===a?"empty":"healthy",AU=a=>{let b=0;return a.forEach(a=>{let c=AO(a?.updatedAt||a?.createdAt||a?.lastModifiedAt);c>b&&(b=c)}),b||null},AV=a=>{try{return JSON.stringify(a,null,2)}catch{return String(a)}},AW=(a,b)=>{let c=new Map;return a.forEach(a=>{let d=String(b(a)||"Unknown").trim()||"Unknown";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)},AX=(a,b)=>{let c=Number(a.count||a.records||a.rows||0),d=Number(a.pendingSync||a.pending||a.unsynced||0),e=Number(a.deletedRecords||a.deleted||0),f=Number(a.failedRecords||a.failed||a.errors||0),g=a.error||null;return{id:String(a.id||a.name||a.tableName||`server-table-${b}`),name:a.name||a.tableName||`Server Table ${b+1}`,source:"server",count:c,pendingSync:d,deletedRecords:e,failedRecords:f,estimatedSizeKb:Number(a.estimatedSizeKb||a.sizeKb||0),primaryKey:a.primaryKey||null,indexes:Array.isArray(a.indexes)?a.indexes:[],health:a.health||AT({count:c,pendingSync:d,failedRecords:f,error:g}),sample:Array.isArray(a.sample)?a.sample:Array.isArray(a.recordsSample)?a.recordsSample:[],lastUpdatedAt:a.lastUpdatedAt||a.updatedAt||null,error:g}},AY=async()=>{let a=Array.isArray(xO.db.tables)?xO.db.tables:Object.values(xO.db._allTables||{}),b=[];for(let c of a){let a=c?.name||c?.schema?.name||"unknown";try{let d=await c.count(),e=await c.limit(25).toArray(),f=e.filter(a=>{let b=String(a?.synced||a?.syncStatus||"").toLowerCase();return["pending","local","unsynced","failed"].includes(b)||a?.synced===!1}).length,g=e.filter(a=>{let b=String(a?.synced||a?.syncStatus||"").toLowerCase();return"failed"===b||"error"===b||!!(a?.syncError||a?.error)}).length,h=e.filter(a=>!!a?.isDeleted).length,i=Array.isArray(c?.schema?.indexes)?c.schema.indexes.map(a=>a?.name||a?.keyPath||String(a)):[],j=c?.schema?.primKey?.name||c?.schema?.primKey?.keyPath||"id";b.push({id:a,name:a,source:"local",count:d,pendingSync:f,deletedRecords:h,failedRecords:g,estimatedSizeKb:AR(e),primaryKey:String(j||"id"),indexes:i.map(String).filter(Boolean),health:AT({count:d,pendingSync:f,failedRecords:g}),sample:e,lastUpdatedAt:AU(e),error:null})}catch(c){b.push({id:a,name:a,source:"local",count:0,pendingSync:0,deletedRecords:0,failedRecords:0,estimatedSizeKb:0,primaryKey:null,indexes:[],health:"error",sample:[],lastUpdatedAt:null,error:c?.message||"Could not inspect table."})}}return b.sort((a,b)=>b.count-a.count)},AZ=(a,b)=>{};function A$({navigate:a}){let{accountId:b,authenticated:c,loading:d}=(0,uM.F)(),{settings:e}=(0,uN.t)(),f=e?.primaryColor||"var(--primary-color, #2563eb)",[g,h]=(0,M.useState)("cards"),[i,j]=(0,M.useState)([]),[k,l]=(0,M.useState)(!0),[m,n]=(0,M.useState)(!1),[o,p]=(0,M.useState)(""),[q,r]=(0,M.useState)(""),[s,t]=(0,M.useState)(""),[u,v]=(0,M.useState)("all"),[w,x]=(0,M.useState)("all"),[y,z]=(0,M.useState)(null),[A,B]=(0,M.useState)(""),C=async(a=!1)=>{try{a?n(!0):l(!0),p(""),r("");let[b,c]=await Promise.all([AY(),(0,uL.uE)("/developer/database-tools").catch(async()=>(0,uL.uE)("/database/tools").catch(()=>null))]),d=((a,b=[])=>{if(Array.isArray(a))return a;if(!a||"object"!=typeof a)return[];for(let c of b)if(Array.isArray(a[c]))return a[c];return Array.isArray(a.data)?a.data:Array.isArray(a.items)?a.items:Array.isArray(a.results)?a.results:Array.isArray(a.records)?a.records:Array.isArray(a.rows)?a.rows:[]})(c,["tables","databaseTables","diagnostics"]).map(AX);j([...b,...d])}catch(a){p(a?.message||"Could not inspect database tables."),j(await AY())}finally{l(!1),n(!1)}},D=(0,M.useMemo)(()=>{let a=s.trim().toLowerCase();return i.filter(b=>{let c=`${b.name} ${b.primaryKey||""} ${b.indexes.join(" ")} ${b.error||""}`.toLowerCase(),d=!a||c.includes(a),e="all"===u||b.health===u,f="all"===w||b.source===w;return d&&e&&f}).sort((a,b)=>{if(a.health!==b.health){if("error"===a.health)return -1;if("error"===b.health)return 1;if("warning"===a.health)return -1;if("warning"===b.health)return 1}return b.count-a.count})},[i,s,u,w]),E=(0,M.useMemo)(()=>{if(!y)return[];let a=A.trim().toLowerCase();return a?y.sample.filter(b=>AV(b).toLowerCase().includes(a)):y.sample},[y,A]),F=i.reduce((a,b)=>a+Number(b.count||0),0),G=i.reduce((a,b)=>a+Number(b.pendingSync||0),0),H=i.reduce((a,b)=>a+Number(b.deletedRecords||0),0),I=i.reduce((a,b)=>a+Number(b.failedRecords||0),0),J=i.reduce((a,b)=>a+Number(b.estimatedSizeKb||0),0),K=(0,M.useMemo)(()=>AW(i,a=>a.health),[i]),N=(0,M.useMemo)(()=>AW(i,a=>a.source),[i]),O=(0,M.useMemo)(()=>[...i].sort((a,b)=>b.count-a.count).slice(0,10).map(a=>({label:a.name.length>16?`${a.name.slice(0,16)}…`:a.name,value:a.count})),[i]),P=(0,M.useMemo)(()=>[...i].sort((a,b)=>b.pendingSync-a.pendingSync).slice(0,10).map(a=>({label:a.name.length>16?`${a.name.slice(0,16)}…`:a.name,value:a.pendingSync})),[i]),Q=async a=>{try{if(p(""),r(""),"local"===a.source){let b=xO.db.table(a.name),c=await b.toArray();AZ(`${a.name}-export.json`,c),r(`${a.name} exported.`)}else AZ(`${a.name}-diagnostic.json`,a),r(`${a.name} diagnostic exported.`)}catch(a){p(a?.message||"Could not export table.")}},R=async a=>{if("local"!==a.source)return void p("Only local PWA tables can be cleared from this tool.");try{p(""),r(""),await xO.db.table(a.name).clear(),z(null),await C(!0),r(`${a.name} cleared locally.`)}catch(a){p(a?.message||"Could not clear local table.")}},S=a=>{z(a),B("")};return k||d?(0,L.jsxs)("main",{className:"devdb-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:A8}),(0,L.jsxs)("section",{className:"devdb-state",children:[(0,L.jsx)("div",{className:"devdb-spinner"}),(0,L.jsx)("h2",{children:"Inspecting database..."}),(0,L.jsx)("p",{children:"Reading local PWA tables, sync flags, sample records and backend diagnostics."})]})]}):c&&b?(0,L.jsxs)("main",{className:"devdb-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:A8}),(0,L.jsxs)("section",{className:"devdb-hero",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{className:"devdb-eyebrow",children:"Data operations"}),(0,L.jsx)("h1",{children:"Database Tools"}),(0,L.jsx)("p",{children:"Inspect local PWA tables, sample records, sync health, deleted records and backend database diagnostics. Use dangerous actions carefully because local table clearing affects this device."})]}),(0,L.jsxs)("div",{className:"devdb-hero-actions",children:[(0,L.jsxs)("div",{className:"devdb-switch",role:"tablist","aria-label":"Database tool views",children:[(0,L.jsx)("button",{type:"button",className:"cards"===g?"active":"",onClick:()=>h("cards"),children:"Cards"}),(0,L.jsx)("button",{type:"button",className:"table"===g?"active":"",onClick:()=>h("table"),children:"Table"}),(0,L.jsx)("button",{type:"button",className:"analytics"===g?"active":"",onClick:()=>h("analytics"),children:"Charts"})]}),(0,L.jsx)("button",{type:"button",className:"devdb-white-btn",onClick:()=>{AZ("eleeveon-database-diagnostics.json",{exportedAt:new Date().toISOString(),tables:i}),r("Database diagnostics exported.")},children:"Export Diagnostics"}),(0,L.jsx)("button",{type:"button",className:"devdb-glass-btn",onClick:()=>C(!0),disabled:m,children:m?"Refreshing...":"Refresh"})]})]}),(o||q)&&(0,L.jsx)("section",{className:`devdb-alert ${o?"error":"success"}`,children:o||q}),(0,L.jsxs)("section",{className:"devdb-stat-grid",children:[(0,L.jsx)(A3,{label:"Tables",value:i.length,detail:`${D.length} shown`,icon:"\uD83D\uDDC4️"}),(0,L.jsx)(A3,{label:"Records",value:AQ(F),detail:`${AQ(J)} KB sampled`,icon:"\uD83D\uDCE6"}),(0,L.jsx)(A3,{label:"Pending Sync",value:G,detail:`${H} deleted sampled`,icon:"\uD83D\uDD04"}),(0,L.jsx)(A3,{label:"Failed Records",value:I,detail:"Sampled sync failures",icon:"⚠️"})]}),(0,L.jsxs)("section",{className:"devdb-toolbar",children:[(0,L.jsx)("input",{value:s,onChange:a=>t(a.target.value),placeholder:"Search table, primary key, indexes..."}),(0,L.jsxs)("select",{value:u,onChange:a=>v(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All health"}),(0,L.jsx)("option",{value:"healthy",children:"Healthy"}),(0,L.jsx)("option",{value:"empty",children:"Empty"}),(0,L.jsx)("option",{value:"warning",children:"Warning"}),(0,L.jsx)("option",{value:"error",children:"Error"})]}),(0,L.jsxs)("select",{value:w,onChange:a=>x(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All sources"}),(0,L.jsx)("option",{value:"local",children:"Local PWA"}),(0,L.jsx)("option",{value:"server",children:"Server"})]}),(0,L.jsx)("button",{type:"button",onClick:()=>{t(""),v("all"),x("all")},children:"Reset"})]}),"analytics"===g?(0,L.jsx)(A1,{healthChart:K,sourceChart:N,recordChart:O,syncChart:P}):"table"===g?(0,L.jsx)(A0,{tables:D,onOpen:S,onExport:Q,onClear:R}):(0,L.jsx)(A_,{tables:D,onOpen:S,onExport:Q,onClear:R,navigate:a}),y&&(0,L.jsx)(A2,{table:y,records:E,recordQuery:A,setRecordQuery:B,onClose:()=>z(null),onExport:Q,onClear:R})]}):(0,L.jsxs)("main",{className:"devdb-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:A8}),(0,L.jsxs)("section",{className:"devdb-state",children:[(0,L.jsx)("h2",{children:"Developer access required"}),(0,L.jsx)("p",{children:"Sign in with a developer account to inspect database tools."})]})]})}function A_({tables:a,onOpen:b,onExport:c,onClear:d,navigate:e}){return(0,L.jsxs)("section",{className:"devdb-card-grid",children:[a.map(a=>(0,L.jsxs)("article",{className:`devdb-table-card ${a.health}`,children:[(0,L.jsxs)("div",{className:"devdb-table-top",children:[(0,L.jsx)("span",{className:"devdb-table-icon",children:"\uD83D\uDDC4️"}),(0,L.jsxs)("div",{className:"devdb-chip-row",children:[(0,L.jsx)(A4,{tone:AS(a.health),children:a.health}),(0,L.jsx)(A4,{tone:"local"===a.source?"blue":"purple",children:a.source})]})]}),(0,L.jsx)("h2",{children:a.name}),(0,L.jsx)("p",{children:a.error||`${AQ(a.count)} records \xb7 ${a.indexes.length} index(es) \xb7 ${a.estimatedSizeKb} KB sampled`}),(0,L.jsxs)("div",{className:"devdb-mini-grid",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Records"}),AQ(a.count)]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Pending Sync"}),a.pendingSync]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Deleted"}),a.deletedRecords]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Failed"}),a.failedRecords]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Primary Key"}),a.primaryKey||"—"]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Last Update"}),AP(a.lastUpdatedAt)]})]}),(0,L.jsxs)("div",{className:"devdb-index-pills",children:[a.indexes.slice(0,6).map(a=>(0,L.jsx)("span",{children:a},a)),a.indexes.length>6&&(0,L.jsxs)("span",{children:["+",a.indexes.length-6," more"]}),!a.indexes.length&&(0,L.jsx)("span",{children:"No secondary indexes"})]}),(0,L.jsxs)("div",{className:"devdb-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Inspect"}),(0,L.jsx)("button",{type:"button",onClick:()=>c(a),children:"Export"}),(0,L.jsx)("button",{type:"button",onClick:()=>e?.("syncDiagnostics"),children:"Sync"}),"local"===a.source&&(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>d(a),children:"Clear Local"})]})]},`${a.source}-${a.name}`)),!a.length&&(0,L.jsx)(A5,{text:"No database tables match your filters."})]})}function A0({tables:a,onOpen:b,onExport:c,onClear:d}){return(0,L.jsxs)("section",{className:"devdb-table-list-card",children:[(0,L.jsx)("div",{className:"devdb-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Table"}),(0,L.jsx)("th",{children:"Source"}),(0,L.jsx)("th",{children:"Health"}),(0,L.jsx)("th",{children:"Records"}),(0,L.jsx)("th",{children:"Pending"}),(0,L.jsx)("th",{children:"Deleted"}),(0,L.jsx)("th",{children:"Failed"}),(0,L.jsx)("th",{children:"Primary Key"}),(0,L.jsx)("th",{children:"Indexes"}),(0,L.jsx)("th",{children:"Sample Size"}),(0,L.jsx)("th",{children:"Updated"}),(0,L.jsx)("th",{children:"Actions"})]})}),(0,L.jsx)("tbody",{children:a.map(a=>(0,L.jsxs)("tr",{children:[(0,L.jsxs)("td",{children:[(0,L.jsx)("strong",{children:a.name}),a.error&&(0,L.jsx)("small",{children:a.error})]}),(0,L.jsx)("td",{children:a.source}),(0,L.jsx)("td",{children:(0,L.jsx)(A4,{tone:AS(a.health),children:a.health})}),(0,L.jsx)("td",{children:AQ(a.count)}),(0,L.jsx)("td",{children:a.pendingSync}),(0,L.jsx)("td",{children:a.deletedRecords}),(0,L.jsx)("td",{children:a.failedRecords}),(0,L.jsx)("td",{children:a.primaryKey||"—"}),(0,L.jsx)("td",{children:a.indexes.length}),(0,L.jsxs)("td",{children:[a.estimatedSizeKb," KB"]}),(0,L.jsx)("td",{children:AP(a.lastUpdatedAt)}),(0,L.jsx)("td",{children:(0,L.jsxs)("div",{className:"devdb-table-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Inspect"}),(0,L.jsx)("button",{type:"button",onClick:()=>c(a),children:"Export"}),"local"===a.source&&(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>d(a),children:"Clear"})]})})]},`${a.source}-${a.name}`))})]})}),!a.length&&(0,L.jsx)(A5,{text:"No database tables match your filters."})]})}function A1({healthChart:a,sourceChart:b,recordChart:c,syncChart:d}){return(0,L.jsxs)("section",{className:"devdb-chart-grid",children:[(0,L.jsxs)(A6,{title:"Table Health",description:"Healthy, warning, empty and error table states.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:a,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:a.map((a,b)=>(0,L.jsx)(s$,{fill:AN[b%AN.length]},b))})]})}),(0,L.jsx)(A7,{rows:a})]}),(0,L.jsxs)(A6,{title:"Source Mix",description:"Local PWA versus server diagnostics.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:b,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:b.map((a,b)=>(0,L.jsx)(s$,{fill:AN[b%AN.length]},b))})]})}),(0,L.jsx)(A7,{rows:b})]}),(0,L.jsx)(A6,{title:"Largest Tables",description:"Top tables by record count.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:c,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{type:"category",dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11,width:120}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--dev-primary)",radius:[0,12,12,0]})]})})}),(0,L.jsx)(A6,{title:"Pending Sync by Table",description:"Tables with sampled unsynced records.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:d,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",tickLine:!1,axisLine:!1,fontSize:11,allowDecimals:!1}),(0,L.jsx)(rs,{type:"category",dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11,width:120}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--dev-primary)",radius:[0,12,12,0]})]})})})]})}function A2({table:a,records:b,recordQuery:c,setRecordQuery:d,onClose:e,onExport:f,onClear:g}){return(0,L.jsx)("div",{className:"devdb-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,L.jsxs)("section",{className:"devdb-modal",children:[(0,L.jsxs)("div",{className:"devdb-modal-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:a.name}),(0,L.jsxs)("p",{children:[a.source," table \xb7 ",AQ(a.count)," records \xb7 ",a.sample.length," sampled"]})]}),(0,L.jsx)("button",{type:"button",onClick:e,"aria-label":"Close",children:"✕"})]}),(0,L.jsxs)("section",{className:"devdb-modal-summary",children:[(0,L.jsx)(A4,{tone:AS(a.health),children:a.health}),(0,L.jsx)(A4,{tone:"local"===a.source?"blue":"purple",children:a.source}),(0,L.jsx)("span",{children:a.primaryKey||"no primary key"}),(0,L.jsxs)("span",{children:[a.indexes.length," index(es)"]}),(0,L.jsxs)("span",{children:[a.estimatedSizeKb," KB sampled"]})]}),a.error&&(0,L.jsx)("section",{className:"devdb-alert error",children:a.error}),(0,L.jsxs)("div",{className:"devdb-inspector-actions",children:[(0,L.jsx)("input",{value:c,onChange:a=>d(a.target.value),placeholder:"Search sampled records..."}),(0,L.jsx)("button",{type:"button",onClick:()=>f(a),children:"Export"}),"local"===a.source&&(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>g(a),children:"Clear Local Table"})]}),(0,L.jsxs)("section",{className:"devdb-record-list",children:[b.map((a,b)=>(0,L.jsxs)("details",{className:"devdb-record",children:[(0,L.jsxs)("summary",{children:["Record ",b+1,a?.id?` \xb7 ID: ${a.id}`:"",a?.cloudId?` \xb7 Cloud: ${a.cloudId}`:""]}),(0,L.jsx)("pre",{children:AV(a)})]},b)),!b.length&&(0,L.jsx)(A5,{text:"No sampled records match your search."})]})]})})}function A3({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"devdb-stat",children:[(0,L.jsxs)("span",{children:[a,(0,L.jsx)("b",{children:d})]}),(0,L.jsx)("strong",{children:b}),(0,L.jsx)("small",{children:c})]})}function A4({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`devdb-chip ${b}`,children:a})}function A5({text:a}){return(0,L.jsx)("div",{className:"devdb-empty",children:a})}function A6({title:a,description:b,children:c}){return(0,L.jsxs)("section",{className:"devdb-chart-card",children:[(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function A7({rows:a}){return(0,L.jsx)("div",{className:"devdb-legend",children:a.map((a,b)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("i",{style:{background:AN[b%AN.length]}}),a.label,": ",a.value]},`${a.label}-${b}`))})}let A8=`
@keyframes devdbSpin { to { transform: rotate(360deg); } }

.devdb-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 8px;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--dev-primary) 10%, transparent), transparent 34rem),
    var(--bg, #f8fafc);
  color: var(--text, #0f172a);
  font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  overflow-x: hidden;
}

.devdb-page *,
.devdb-page *::before,
.devdb-page *::after {
  box-sizing: border-box;
}

.devdb-page button,
.devdb-page input,
.devdb-page select,
.devdb-page textarea {
  font: inherit;
  max-width: 100%;
}

.devdb-page button {
  -webkit-tap-highlight-color: transparent;
}

.devdb-state {
  min-height: min(420px, calc(100dvh - 32px));
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 28px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .08);
  text-align: center;
}

.devdb-state h2 {
  margin: 0;
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 1000;
  letter-spacing: -.04em;
}

.devdb-state p {
  max-width: 34rem;
  margin: 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.6;
}

.devdb-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--dev-primary) 18%, transparent);
  border-top-color: var(--dev-primary);
  animation: devdbSpin .8s linear infinite;
}

.devdb-hero {
  display: grid;
  gap: 16px;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, .18), transparent 20rem),
    linear-gradient(135deg, var(--dev-primary), #0f172a 72%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .18);
  overflow: hidden;
}

.devdb-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .14em;
  opacity: .82;
}

.devdb-hero h1 {
  margin: 8px 0 0;
  font-size: clamp(28px, 8vw, 44px);
  line-height: 1.02;
  font-weight: 1000;
  letter-spacing: -.07em;
}

.devdb-hero p {
  max-width: 850px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: .9;
}

.devdb-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.devdb-switch {
  display: inline-flex;
  gap: 5px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(14px);
}

.devdb-switch button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.devdb-switch button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .16);
}

.devdb-white-btn,
.devdb-glass-btn {
  min-height: 40px;
  border-radius: 999px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.devdb-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.devdb-glass-btn {
  border: 1px solid rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .14);
  color: #fff;
}

.devdb-glass-btn:disabled {
  opacity: .7;
  cursor: not-allowed;
}

.devdb-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 850;
}

.devdb-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.devdb-alert.success {
  background: #dcfce7;
  color: #166534;
}

.devdb-stat-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.devdb-stat {
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 24px;
  padding: 16px;
  background: var(--surface, #fff);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.devdb-stat span {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 850;
}

.devdb-stat strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(24px, 8vw, 34px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
  overflow-wrap: anywhere;
}

.devdb-stat small {
  display: block;
  margin-top: 8px;
  color: var(--muted, #64748b);
  font-size: 12px;
  font-weight: 850;
}

.devdb-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 24px;
  background: var(--surface, #fff);
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
}

.devdb-toolbar input,
.devdb-toolbar select {
  min-height: 42px;
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .3);
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
}

.devdb-toolbar button {
  min-height: 42px;
  border: 0;
  border-radius: 16px;
  background: color-mix(in srgb, var(--dev-primary) 10%, white);
  color: var(--dev-primary);
  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.devdb-card-grid,
.devdb-chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.devdb-table-card,
.devdb-chart-card,
.devdb-table-list-card {
  min-width: 0;
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 26px;
  padding: 14px;
  background: var(--surface, #fff);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.devdb-table-card.error {
  border-color: rgba(220, 38, 38, .24);
  background: linear-gradient(180deg, #fff, #fff7f7);
}

.devdb-table-card.warning {
  border-color: rgba(249, 115, 22, .24);
}

.devdb-table-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.devdb-table-icon {
  width: 46px;
  height: 46px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--dev-primary), #0f172a);
  color: #fff;
  font-size: 18px;
  font-weight: 1000;
}

.devdb-chip-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.devdb-table-card h2 {
  margin: 14px 0 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.devdb-table-card p {
  margin: 5px 0 0;
  color: var(--muted, #64748b);
  font-size: 13px;
  line-height: 1.45;
}

.devdb-mini-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 14px;
}

.devdb-mini-grid span {
  padding: 10px;
  border-radius: 16px;
  background: #f8fafc;
  color: #0f172a;
  font-size: 12px;
  font-weight: 850;
  overflow: hidden;
  text-overflow: ellipsis;
}

.devdb-mini-grid b {
  display: block;
  color: var(--muted, #64748b);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 3px;
}

.devdb-index-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.devdb-index-pills span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 9px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.devdb-actions,
.devdb-table-actions,
.devdb-inspector-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.devdb-actions {
  margin-top: 14px;
}

.devdb-actions button,
.devdb-table-actions button,
.devdb-inspector-actions button {
  min-height: 38px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: color-mix(in srgb, var(--dev-primary) 10%, white);
  color: var(--dev-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.devdb-actions button:first-child,
.devdb-table-actions button:first-child,
.devdb-inspector-actions button:first-of-type {
  background: var(--dev-primary);
  color: #fff;
}

.devdb-actions button.danger,
.devdb-table-actions button.danger,
.devdb-inspector-actions button.danger {
  background: #fee2e2;
  color: #b91c1c;
}

.devdb-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
  white-space: nowrap;
}

.devdb-chip.green { background: #dcfce7; color: #166534; }
.devdb-chip.blue { background: #dbeafe; color: #1d4ed8; }
.devdb-chip.purple { background: #f3e8ff; color: #7e22ce; }
.devdb-chip.orange { background: #ffedd5; color: #c2410c; }
.devdb-chip.red { background: #fee2e2; color: #b91c1c; }
.devdb-chip.gray { background: #f1f5f9; color: #475569; }

.devdb-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.devdb-table-wrap table {
  width: 100%;
  min-width: 1180px;
  border-collapse: collapse;
}

.devdb-table-wrap th {
  text-align: left;
  color: var(--muted, #64748b);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.devdb-table-wrap td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .16);
  font-size: 13px;
  vertical-align: top;
}

.devdb-table-wrap strong {
  display: block;
  font-weight: 1000;
}

.devdb-table-wrap small {
  display: block;
  margin-top: 3px;
  color: var(--muted, #64748b);
  font-size: 11px;
  line-height: 1.35;
}

.devdb-chart-card h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.devdb-chart-card p {
  margin: 5px 0 10px;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.5;
}

.devdb-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

.devdb-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 9px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.devdb-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

.devdb-empty {
  grid-column: 1 / -1;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
  color: var(--muted, #64748b);
  font-size: 13px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, .35);
}

.devdb-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15, 23, 42, .58);
  backdrop-filter: blur(12px);
}

.devdb-modal {
  width: min(980px, 100%);
  max-height: min(92dvh, 920px);
  overflow-y: auto;
  border-radius: 28px;
  background: var(--surface, #fff);
  box-shadow: 0 30px 100px rgba(15, 23, 42, .35);
  border: 1px solid rgba(255, 255, 255, .24);
  padding: 14px;
}

.devdb-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 4px 14px;
}

.devdb-modal-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.devdb-modal-head p {
  margin: 5px 0 0;
  color: var(--muted, #64748b);
  font-size: 12px;
  line-height: 1.5;
}

.devdb-modal-head button {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: #f1f5f9;
  color: #0f172a;
  font-weight: 1000;
  cursor: pointer;
}

.devdb-modal-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px;
  border-radius: 18px;
  background: #f8fafc;
  margin-bottom: 12px;
}

.devdb-modal-summary span:not(.devdb-chip) {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .18);
  font-size: 11px;
  font-weight: 900;
  color: #475569;
}

.devdb-inspector-actions {
  margin-bottom: 12px;
}

.devdb-inspector-actions input {
  min-height: 38px;
  flex: 1 1 240px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, .32);
  padding: 0 12px;
  font-size: 12px;
  font-weight: 850;
}

.devdb-record-list {
  display: grid;
  gap: 8px;
}

.devdb-record {
  border-radius: 18px;
  background: #0f172a;
  color: #e5e7eb;
  overflow: hidden;
}

.devdb-record summary {
  cursor: pointer;
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 1000;
}

.devdb-record pre {
  max-height: 320px;
  overflow: auto;
  margin: 0;
  padding: 0 12px 12px;
  font-size: 11px;
  line-height: 1.55;
  white-space: pre-wrap;
}

@media (min-width: 520px) {
  .devdb-stat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .devdb-toolbar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .devdb-mini-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 760px) {
  .devdb-card-grid,
  .devdb-chart-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .devdb-modal-backdrop {
    place-items: center;
    padding: 18px;
  }

  .devdb-modal {
    padding: 18px;
  }
}

@media (min-width: 920px) {
  .devdb-page {
    padding: 14px;
  }

  .devdb-hero {
    grid-template-columns: 1fr auto;
    align-items: end;
    padding: 24px;
  }

  .devdb-stat-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .devdb-toolbar {
    grid-template-columns: minmax(240px, 2fr) repeat(2, minmax(130px, 1fr)) auto;
  }

  .devdb-mini-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1180px) {
  .devdb-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`,A9=a=>{try{return JSON.stringify(a,null,2)}catch{return String(a)}},Ba=async a=>JSON.parse(await a.text());function Bb({navigate:a}){let{settings:b}=(0,uN.t)(),{authenticated:c,accountId:d,loading:e}=(0,uM.F)(),f=b?.primaryColor||"#2563eb",[g,h]=(0,M.useState)(!0),[i,j]=(0,M.useState)([]),[k,l]=(0,M.useState)(null),[m,n]=(0,M.useState)([]),[o,p]=(0,M.useState)([]),[q,r]=(0,M.useState)(""),[s,t]=(0,M.useState)("cards"),[u,v]=(0,M.useState)(1),[w,x]=(0,M.useState)([]),[y,z]=(0,M.useState)(null),[A,B]=(0,M.useState)(""),[C,D]=(0,M.useState)(!1),[E,F]=(0,M.useState)(""),[G,H]=(0,M.useState)(""),I=async()=>{try{h(!0);let a=Array.isArray(xO.db.tables)?xO.db.tables:Object.values(xO.db._allTables||{}),b=[];for(let c of a){let a=await c.count();b.push({name:c.name,count:a,primaryKey:c?.schema?.primKey?.name||c?.schema?.primKey?.keyPath||"id",indexes:Array.isArray(c?.schema?.indexes)?c.schema.indexes.map(a=>a?.name||a?.keyPath||String(a)):[]})}b.sort((a,b)=>b.count-a.count),j(b),b.length&&!k&&await J(b[0])}catch(a){F(a?.message||"Could not load database studio.")}finally{h(!1)}},J=async a=>{try{l(a),v(1),x([]);let b=xO.db.table(a.name),c=await b.toArray();n(c),p(c)}catch(a){F(a?.message||"Could not open table.")}},K=Math.max(1,Math.ceil(o.length/20)),N=(0,M.useMemo)(()=>{let a=(u-1)*20;return o.slice(a,a+20)},[o,u]),O=a=>{z(a),B(A9(a)),D(!0)},P=async()=>{if(k)try{F("");let a=JSON.parse(A),b=xO.db.table(k.name);if(y){let c=y[k.primaryKey]??y.id;await b.put({...y,...a},c),H("Record updated.")}else await b.add(a),H("Record created.");D(!1),await J(k),await I()}catch(a){F(a?.message||"Could not save record.")}},Q=async a=>{if(k)try{let b=xO.db.table(k.name),c=a[k.primaryKey]??a.id;await b.delete(c),H("Record deleted."),await J(k),await I()}catch(a){F(a?.message||"Could not delete record.")}},R=async()=>{if(k&&w.length)try{let a=xO.db.table(k.name);await a.bulkDelete(w),x([]),H(`${w.length} records deleted.`),await J(k),await I()}catch(a){F(a?.message||"Bulk delete failed.")}},S=async()=>{if(!k)return;let a=xO.db.table(k.name);await a.toArray(),k.name},T=async a=>{if(!k)return;let b=a.target.files?.[0];if(b)try{let a=await Ba(b);if(!Array.isArray(a))throw Error("JSON file must contain an array.");let c=xO.db.table(k.name);await c.bulkAdd(a),H(`${a.length} records imported.`),await J(k),await I()}catch(a){F(a?.message||"Import failed.")}},U=i.slice(0,10).map(a=>({label:a.name.length>16?`${a.name.slice(0,16)}…`:a.name,value:a.count}));return g||e?(0,L.jsxs)("main",{className:"studio-page",style:{"--studio-primary":f},children:[(0,L.jsx)("style",{children:Bd}),(0,L.jsxs)("section",{className:"studio-loading",children:[(0,L.jsx)("div",{className:"studio-spinner"}),(0,L.jsx)("h2",{children:"Loading Database Studio..."})]})]}):c&&d?(0,L.jsxs)("main",{className:"studio-page",style:{"--studio-primary":f},children:[(0,L.jsx)("style",{children:Bd}),(0,L.jsxs)("section",{className:"studio-hero",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{className:"studio-eyebrow",children:"CRUD DATABASE MANAGER"}),(0,L.jsx)("h1",{children:"Database Studio"}),(0,L.jsx)("p",{children:"Add, edit, delete, inspect, import and export local PWA database records with a mobile-first developer interface."})]}),(0,L.jsxs)("div",{className:"studio-hero-actions",children:[(0,L.jsx)("button",{type:"button",className:"studio-white-btn",onClick:()=>{z(null),B("{\n  \n}"),D(!0)},children:"+ New Record"}),(0,L.jsx)("button",{type:"button",className:"studio-glass-btn",onClick:()=>a?.("databaseTools"),children:"Back To Tools"}),(0,L.jsx)("button",{type:"button",className:"studio-glass-btn",onClick:()=>a?.("sqlConsole"),children:"SQL Console"})]})]}),(E||G)&&(0,L.jsx)("section",{className:`studio-alert ${E?"error":"success"}`,children:E||G}),(0,L.jsxs)("section",{className:"studio-grid",children:[(0,L.jsxs)("aside",{className:"studio-sidebar",children:[(0,L.jsxs)("div",{className:"studio-side-head",children:[(0,L.jsx)("h2",{children:"Tables"}),(0,L.jsx)("span",{children:i.length})]}),(0,L.jsx)("div",{className:"studio-table-list",children:i.map(a=>{var b;let c;return(0,L.jsxs)("button",{type:"button",className:`studio-table-item ${k?.name===a.name?"active":""}`,onClick:()=>J(a),children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("strong",{children:a.name}),(0,L.jsxs)("small",{children:[(c=a.count,new Intl.NumberFormat("en-GH",{notation:"compact",maximumFractionDigits:1}).format(Number(c||0)))," records"]})]}),(0,L.jsx)(Bc,{tone:(b=a.count)>5e3?"red":b>1e3?"orange":b>100?"purple":b>20?"blue":"green",children:a.count})]},a.name)})})]}),(0,L.jsxs)("section",{className:"studio-main",children:[(0,L.jsxs)("section",{className:"studio-toolbar",children:[(0,L.jsx)("input",{value:q,onChange:a=>r(a.target.value),placeholder:"Search records..."}),(0,L.jsxs)("div",{className:"studio-switch",children:[(0,L.jsx)("button",{type:"button",className:"cards"===s?"active":"",onClick:()=>t("cards"),children:"Cards"}),(0,L.jsx)("button",{type:"button",className:"table"===s?"active":"",onClick:()=>t("table"),children:"Table"})]}),(0,L.jsx)("button",{type:"button",onClick:S,children:"Export"}),(0,L.jsxs)("label",{className:"studio-import",children:["Import JSON",(0,L.jsx)("input",{type:"file",accept:".json",onChange:T})]}),!!w.length&&(0,L.jsx)("button",{type:"button",className:"danger",onClick:R,children:"Delete Selected"})]}),(0,L.jsxs)("section",{className:"studio-chart-card",children:[(0,L.jsx)("h2",{children:"Largest Tables"}),(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(pA,{data:U,children:[(0,L.jsx)(q1,{strokeDasharray:"3 3"}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--studio-primary)",radius:[12,12,0,0]})]})})]}),k&&(0,L.jsxs)("section",{className:"studio-schema-card",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:k.name}),(0,L.jsxs)("p",{children:["Primary Key:"," ",k.primaryKey]})]}),(0,L.jsx)("div",{className:"studio-indexes",children:k.indexes.map(a=>(0,L.jsx)("span",{children:a},a))})]}),"cards"===s?(0,L.jsx)("section",{className:"studio-card-grid",children:N.map((a,b)=>{let c=a?.[k?.primaryKey||"id"]??a.id??b,d=w.includes(c);return(0,L.jsxs)("article",{className:"studio-record-card",children:[(0,L.jsxs)("div",{className:"studio-record-head",children:[(0,L.jsx)("label",{children:(0,L.jsx)("input",{type:"checkbox",checked:d,onChange:a=>{a.target.checked?x(a=>[...a,c]):x(a=>a.filter(a=>a!==c))}})}),(0,L.jsxs)("div",{className:"studio-record-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>O(a),children:"Edit"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>Q(a),children:"Delete"})]})]}),(0,L.jsx)("pre",{children:A9(a)})]},c)})}):(0,L.jsx)("section",{className:"studio-table-card",children:(0,L.jsx)("div",{className:"studio-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Select"}),(0,L.jsx)("th",{children:"Record"}),(0,L.jsx)("th",{children:"Actions"})]})}),(0,L.jsx)("tbody",{children:N.map((a,b)=>{let c=a?.[k?.primaryKey||"id"]??a.id??b,d=w.includes(c);return(0,L.jsxs)("tr",{children:[(0,L.jsx)("td",{children:(0,L.jsx)("input",{type:"checkbox",checked:d,onChange:a=>{a.target.checked?x(a=>[...a,c]):x(a=>a.filter(a=>a!==c))}})}),(0,L.jsx)("td",{children:(0,L.jsx)("pre",{children:A9(a)})}),(0,L.jsx)("td",{children:(0,L.jsxs)("div",{className:"studio-table-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>O(a),children:"Edit"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>Q(a),children:"Delete"})]})})]},c)})})]})})}),(0,L.jsxs)("section",{className:"studio-pagination",children:[(0,L.jsx)("button",{type:"button",disabled:u<=1,onClick:()=>v(a=>a-1),children:"Previous"}),(0,L.jsxs)("span",{children:["Page ",u," of ",K]}),(0,L.jsx)("button",{type:"button",disabled:u>=K,onClick:()=>v(a=>a+1),children:"Next"})]})]})]}),C&&(0,L.jsx)("div",{className:"studio-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,L.jsxs)("section",{className:"studio-modal",children:[(0,L.jsxs)("div",{className:"studio-modal-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:y?"Edit Record":"New Record"}),(0,L.jsx)("p",{children:"Modify JSON directly and save to the selected table."})]}),(0,L.jsx)("button",{type:"button",onClick:()=>D(!1),children:"✕"})]}),(0,L.jsx)("textarea",{value:A,onChange:a=>B(a.target.value)}),(0,L.jsxs)("div",{className:"studio-modal-actions",children:[(0,L.jsx)("button",{type:"button",onClick:P,children:"Save Record"}),(0,L.jsx)("button",{type:"button",onClick:()=>D(!1),children:"Cancel"})]})]})})]}):(0,L.jsxs)("main",{className:"studio-page",style:{"--studio-primary":f},children:[(0,L.jsx)("style",{children:Bd}),(0,L.jsx)("section",{className:"studio-loading",children:(0,L.jsx)("h2",{children:"Developer authentication required."})})]})}function Bc({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`studio-chip ${b}`,children:a})}let Bd=`
@keyframes studioSpin {
  to {
    transform: rotate(360deg);
  }
}

.studio-page {
  min-height: 100dvh;
  padding: 10px;
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--studio-primary) 10%, transparent), transparent 32rem),
    #f8fafc;
  color: #0f172a;
  overflow-x: hidden;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

.studio-page *,
.studio-page *::before,
.studio-page *::after {
  box-sizing: border-box;
}

.studio-loading {
  min-height: 60dvh;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 12px;
}

.studio-spinner {
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 4px solid rgba(148,163,184,.2);
  border-top-color: var(--studio-primary);
  animation: studioSpin .7s linear infinite;
}

.studio-hero {
  display: grid;
  gap: 14px;
  border-radius: 30px;
  padding: 20px;
  color: #fff;
  background:
    radial-gradient(circle at top left, rgba(255,255,255,.15), transparent 20rem),
    linear-gradient(135deg, var(--studio-primary), #0f172a 70%);
  box-shadow: 0 24px 70px rgba(15,23,42,.18);
}

.studio-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  letter-spacing: .14em;
  opacity: .8;
}

.studio-hero h1 {
  margin: 10px 0 0;
  font-size: clamp(30px, 8vw, 48px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.08em;
}

.studio-hero p {
  margin: 10px 0 0;
  max-width: 800px;
  font-size: 13px;
  line-height: 1.6;
  opacity: .92;
}

.studio-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.studio-white-btn,
.studio-glass-btn {
  min-height: 42px;
  border-radius: 999px;
  padding: 0 14px;
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.studio-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.studio-glass-btn {
  border: 1px solid rgba(255,255,255,.25);
  background: rgba(255,255,255,.12);
  color: #fff;
}

.studio-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 18px;
  font-size: 13px;
  font-weight: 900;
}

.studio-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.studio-alert.success {
  background: #dcfce7;
  color: #166534;
}

.studio-grid {
  display: grid;
  gap: 10px;
  margin-top: 10px;
}

.studio-sidebar,
.studio-main {
  min-width: 0;
}

.studio-sidebar {
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(148,163,184,.2);
  box-shadow: 0 18px 45px rgba(15,23,42,.05);
  overflow: hidden;
}

.studio-side-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid rgba(148,163,184,.14);
}

.studio-side-head h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 1000;
}

.studio-side-head span {
  display: inline-flex;
  min-height: 28px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #eff6ff;
  color: var(--studio-primary);
  font-size: 11px;
  font-weight: 1000;
}

.studio-table-list {
  display: grid;
}

.studio-table-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border: 0;
  border-bottom: 1px solid rgba(148,163,184,.12);
  background: transparent;
  padding: 14px 16px;
  text-align: left;
  cursor: pointer;
}

.studio-table-item.active {
  background: color-mix(in srgb, var(--studio-primary) 8%, white);
}

.studio-table-item strong {
  display: block;
  font-size: 13px;
  font-weight: 1000;
}

.studio-table-item small {
  display: block;
  margin-top: 3px;
  color: #64748b;
  font-size: 11px;
  font-weight: 800;
}

.studio-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
}

.studio-chip.green {
  background: #dcfce7;
  color: #166534;
}

.studio-chip.blue {
  background: #dbeafe;
  color: #1d4ed8;
}

.studio-chip.purple {
  background: #f3e8ff;
  color: #7e22ce;
}

.studio-chip.orange {
  background: #ffedd5;
  color: #c2410c;
}

.studio-chip.red {
  background: #fee2e2;
  color: #b91c1c;
}

.studio-chip.gray {
  background: #f1f5f9;
  color: #475569;
}

.studio-main {
  display: grid;
  gap: 10px;
}

.studio-toolbar,
.studio-chart-card,
.studio-schema-card,
.studio-table-card {
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(148,163,184,.2);
  box-shadow: 0 18px 45px rgba(15,23,42,.05);
}

.studio-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px;
}

.studio-toolbar input {
  flex: 1 1 240px;
  min-height: 42px;
  border-radius: 16px;
  border: 1px solid rgba(148,163,184,.28);
  padding: 0 12px;
  font-size: 13px;
  font-weight: 800;
}

.studio-toolbar button,
.studio-import {
  min-height: 42px;
  border-radius: 16px;
  border: 0;
  padding: 0 14px;
  background: color-mix(in srgb, var(--studio-primary) 10%, white);
  color: var(--studio-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}

.studio-toolbar .danger {
  background: #fee2e2;
  color: #b91c1c;
}

.studio-import input {
  display: none;
}

.studio-switch {
  display: inline-flex;
  gap: 4px;
  padding: 4px;
  border-radius: 999px;
  background: #f1f5f9;
}

.studio-switch button {
  background: transparent;
}

.studio-switch button.active {
  background: #fff;
  box-shadow: 0 8px 20px rgba(15,23,42,.08);
}

.studio-chart-card,
.studio-schema-card {
  padding: 16px;
}

.studio-chart-card h2,
.studio-schema-card h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 1000;
}

.studio-schema-card p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 13px;
  font-weight: 800;
}

.studio-indexes {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

.studio-indexes span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148,163,184,.18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.studio-card-grid {
  display: grid;
  gap: 10px;
}

.studio-record-card {
  border-radius: 26px;
  background: #fff;
  border: 1px solid rgba(148,163,184,.2);
  box-shadow: 0 18px 45px rgba(15,23,42,.05);
  overflow: hidden;
}

.studio-record-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px;
  border-bottom: 1px solid rgba(148,163,184,.14);
}

.studio-record-actions,
.studio-table-actions,
.studio-modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.studio-record-actions button,
.studio-table-actions button,
.studio-modal-actions button {
  min-height: 34px;
  border-radius: 999px;
  border: 0;
  padding: 0 12px;
  background: color-mix(in srgb, var(--studio-primary) 10%, white);
  color: var(--studio-primary);
  font-size: 11px;
  font-weight: 1000;
  cursor: pointer;
}

.studio-record-actions .danger,
.studio-table-actions .danger {
  background: #fee2e2;
  color: #b91c1c;
}

.studio-record-card pre,
.studio-table-wrap pre {
  margin: 0;
  padding: 12px;
  overflow: auto;
  font-size: 11px;
  line-height: 1.5;
  white-space: pre-wrap;
  background: #0f172a;
  color: #e5e7eb;
}

.studio-table-card {
  overflow: hidden;
}

.studio-table-wrap {
  overflow-x: auto;
}

.studio-table-wrap table {
  width: 100%;
  min-width: 880px;
  border-collapse: collapse;
}

.studio-table-wrap th {
  text-align: left;
  padding: 12px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: #64748b;
  border-bottom: 1px solid rgba(148,163,184,.14);
}

.studio-table-wrap td {
  padding: 12px;
  vertical-align: top;
  border-bottom: 1px solid rgba(148,163,184,.12);
}

.studio-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px;
}

.studio-pagination button {
  min-height: 40px;
  border-radius: 999px;
  border: 0;
  padding: 0 14px;
  background: var(--studio-primary);
  color: #fff;
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.studio-pagination button:disabled {
  opacity: .45;
  cursor: not-allowed;
}

.studio-pagination span {
  font-size: 12px;
  font-weight: 900;
  color: #475569;
}

.studio-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: center;
  padding: 12px;
  background: rgba(15,23,42,.6);
  backdrop-filter: blur(12px);
}

.studio-modal {
  width: min(980px, 100%);
  max-height: 92dvh;
  overflow: auto;
  border-radius: 30px;
  background: #fff;
  padding: 18px;
  box-shadow: 0 30px 100px rgba(15,23,42,.35);
}

.studio-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.studio-modal-head h2 {
  margin: 0;
  font-size: 22px;
  font-weight: 1000;
}

.studio-modal-head p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 12px;
}

.studio-modal-head button {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 0;
  background: #f1f5f9;
  cursor: pointer;
}

.studio-modal textarea {
  width: 100%;
  min-height: 420px;
  margin-top: 16px;
  border-radius: 24px;
  border: 1px solid rgba(148,163,184,.22);
  padding: 14px;
  resize: vertical;
  font-size: 12px;
  line-height: 1.6;
  font-family:
    ui-monospace,
    SFMono-Regular,
    Menlo,
    Monaco,
    Consolas,
    monospace;
}

.studio-modal-actions {
  margin-top: 14px;
}

@media (min-width: 920px) {
  .studio-grid {
    grid-template-columns: 320px 1fr;
    align-items: start;
  }

  .studio-card-grid {
    grid-template-columns: repeat(2, minmax(0,1fr));
  }
}

@media (min-width: 1280px) {
  .studio-card-grid {
    grid-template-columns: repeat(3, minmax(0,1fr));
  }
}
`,Be=["string","number","boolean","date","timestamp","json","array","email","phone","currency","enum"],Bf={tableName:"",displayName:"",description:"",status:"draft",primaryKey:"++id",autoIncrement:!0,syncEnabled:!0,softDelete:!0,timestamps:!0,accountScoped:!0,schoolScoped:!1,branchScoped:!1,fields:[{id:"field-name",name:"name",type:"string",required:!0,indexed:!0,unique:!1,defaultValue:"",enumValues:"",description:"Human readable name."}]},Bg=["var(--designer-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],Bh=a=>{if(!a)return 0;let b="number"==typeof a?a:new Date(a).getTime();return Number.isFinite(b)?b:0},Bi=a=>{let b=Bh(a);return b?new Intl.DateTimeFormat("en-GH",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(b)):"Not set"},Bj=a=>a.trim().replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase().replace(/[^a-z0-9_]+/g,"_").replace(/^_+|_+$/g,""),Bk=a=>a.replace(/_/g," ").replace(/\s+/g," ").trim().replace(/\b\w/g,a=>a.toUpperCase()),Bl=a=>a.trim().replace(/[^a-zA-Z0-9_]+/g,"_").replace(/^_+|_+$/g,""),Bm=(a,b)=>{let c=new Map;return a.forEach(a=>{let d=String(b(a)||"Unknown").trim()||"Unknown";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)},Bn=a=>"applied"===a?"green":"ready"===a?"blue":"draft"===a?"orange":"gray",Bo=a=>{},Bp=(a,b)=>{},Bq=async a=>{if("u"<typeof navigator||!navigator.clipboard)return!1;try{return await navigator.clipboard.writeText(a),!0}catch{return!1}},Br=a=>{let b=Date.now();return{id:a.id||`table-design-${b}`,tableName:Bj(a.tableName),displayName:a.displayName.trim()||Bk(a.tableName),description:a.description.trim(),status:a.status,primaryKey:a.primaryKey.trim()||"++id",autoIncrement:a.autoIncrement,syncEnabled:a.syncEnabled,softDelete:a.softDelete,timestamps:a.timestamps,accountScoped:a.accountScoped,schoolScoped:a.schoolScoped,branchScoped:a.branchScoped,fields:a.fields.map(a=>({...a,name:Bl(a.name)})),createdAt:b,updatedAt:b}},Bs=a=>{let b=[];return a.accountScoped&&b.push("accountId"),a.schoolScoped&&b.push("schoolId"),a.branchScoped&&b.push("branchId"),a.timestamps&&b.push("createdAt","updatedAt"),a.syncEnabled&&b.push("cloudId","version","synced","deviceId"),a.softDelete&&b.push("isDeleted"),b},Bt=a=>{let b=a.primaryKey||"++id",c=a.fields.filter(a=>a.indexed||a.unique).map(a=>`${a.unique?"&":""}${a.name}`),d=Array.from(new Set([b,...Bs(a).filter(a=>["accountId","schoolId","branchId","cloudId","updatedAt","synced","isDeleted"].includes(a)),...c])).filter(Boolean);return`${a.tableName}: "${d.join(", ")}"`},Bu=a=>{let b=Bt(a);return`/**
 * Add this table to app/lib/db.ts inside a NEW db.version(n).stores({ ... }) block.
 * Do not edit an already-shipped Dexie version in production.
 */

db.version(NEXT_VERSION_NUMBER).stores({
  ${b},
});

/**
 * Suggested TypeScript type
 */
export type ${Bk(a.tableName).replace(/\s/g,"")} = {
  id?: number;
${Bs(a).map(a=>`  ${a}?: ${a.endsWith("Id")||"cloudId"===a||"deviceId"===a?"string | number":"isDeleted"===a?"boolean":"number | string"};`).join("\n")}
${a.fields.map(a=>{let b=a.required?"":"?",c="number"===a.type||"currency"===a.type?"number":"boolean"===a.type?"boolean":"json"===a.type?"Record<string, any>":"array"===a.type?"any[]":"timestamp"===a.type?"number":"string";return`  ${a.name}${b}: ${c};`}).join("\n")}
};`};function Bv({navigate:a}){let{accountId:b,authenticated:c,loading:d}=(0,uM.F)(),{settings:e}=(0,uN.t)(),f=e?.primaryColor||"#2563eb",[g,h]=(0,M.useState)(!0),[i,j]=(0,M.useState)("cards"),[k,l]=(0,M.useState)([]),[m,n]=(0,M.useState)(""),[o,p]=(0,M.useState)("all"),[q,r]=(0,M.useState)(!1),[s,t]=(0,M.useState)(null),[u,v]=(0,M.useState)(Bf),[w,x]=(0,M.useState)(""),[y,z]=(0,M.useState)(""),A=(0,M.useMemo)(()=>{let a=m.trim().toLowerCase();return k.filter(b=>{let c=`${b.tableName} ${b.displayName} ${b.description} ${b.fields.map(a=>a.name).join(" ")}`.toLowerCase(),d=!a||c.includes(a),e="all"===o||b.status===o;return d&&e}).sort((a,b)=>Bh(b.updatedAt)-Bh(a.updatedAt))},[k,m,o]),B=k.filter(a=>"ready"===a.status).length,C=k.filter(a=>"applied"===a.status).length,D=k.filter(a=>a.syncEnabled).length,E=k.reduce((a,b)=>a+b.fields.length,0),F=(0,M.useMemo)(()=>Bm(k,a=>a.status),[k]),G=(0,M.useMemo)(()=>[{label:"Account Scoped",value:k.filter(a=>a.accountScoped).length},{label:"School Scoped",value:k.filter(a=>a.schoolScoped).length},{label:"Branch Scoped",value:k.filter(a=>a.branchScoped).length},{label:"Sync Enabled",value:k.filter(a=>a.syncEnabled).length}],[k]),H=(0,M.useMemo)(()=>Bm(k.flatMap(a=>a.fields),a=>a.type),[k]),I=(0,M.useMemo)(()=>k.map(a=>({label:a.tableName.length>16?`${a.tableName.slice(0,16)}…`:a.tableName,value:a.fields.length})),[k]),J=a=>{x(""),z(""),v({id:a.id,tableName:a.tableName,displayName:a.displayName,description:a.description,status:a.status,primaryKey:a.primaryKey,autoIncrement:a.autoIncrement,syncEnabled:a.syncEnabled,softDelete:a.softDelete,timestamps:a.timestamps,accountScoped:a.accountScoped,schoolScoped:a.schoolScoped,branchScoped:a.branchScoped,fields:a.fields}),r(!0)},K=async a=>{let b,c,d;a.preventDefault();let e=(b=[],Bj(u.tableName)||b.push("Table name is required."),u.primaryKey.trim()||b.push("Primary key is required."),(d=(c=u.fields.map(a=>Bl(a.name)).filter(Boolean)).filter((a,b)=>c.indexOf(a)!==b)).length&&b.push(`Duplicate field name(s): ${Array.from(new Set(d)).join(", ")}`),u.fields.forEach((a,c)=>{Bl(a.name)||b.push(`Field ${c+1} needs a valid name.`),"enum"!==a.type||a.enumValues?.trim()||b.push(`Enum field "${a.name||c+1}" needs values.`)}),b);if(e.length)return void x(e.join(" "));try{x(""),z("");let a=Br(u);u.id?(await (0,uL.uE)(`/developer/database-designs/${u.id}`,{method:"PATCH",body:JSON.stringify(a)}).catch(()=>null),l(b=>{let c=b.map(b=>b.id===u.id?{...a,id:u.id,createdAt:b.createdAt,updatedAt:Date.now()}:b);return Bo(c),c}),z("Table design updated.")):(await (0,uL.uE)("/developer/database-designs",{method:"POST",body:JSON.stringify(a)}).catch(()=>null),l(b=>{let c=[a,...b];return Bo(c),c}),z("Table design saved.")),r(!1)}catch(a){x(a?.message||"Could not save table design.")}},N=async(a,b)=>{let c={...a,status:b,updatedAt:Date.now()};await (0,uL.uE)(`/developer/database-designs/${a.id}`,{method:"PATCH",body:JSON.stringify({status:b})}).catch(()=>null),l(b=>{let d=b.map(b=>b.id===a.id?c:b);return Bo(d),d}),z(`Design marked as ${b}.`)},O=a=>{l(b=>{let c=b.filter(b=>b.id!==a.id);return Bo(c),c}),z("Table design deleted locally.")},P=a=>{Bp(`${a.tableName}-table-design.json`,a),z("Table design exported.")},Q=async a=>{z(await Bq(Bu(a))?"Generated Dexie code copied.":"Could not copy code in this browser.")};return g||d?(0,L.jsxs)("main",{className:"designer-page",style:{"--designer-primary":f},children:[(0,L.jsx)("style",{children:BH}),(0,L.jsxs)("section",{className:"designer-state",children:[(0,L.jsx)("div",{className:"designer-spinner"}),(0,L.jsx)("h2",{children:"Loading Database Designer..."}),(0,L.jsx)("p",{children:"Preparing table blueprints, fields and schema generation."})]})]}):c&&b?(0,L.jsxs)("main",{className:"designer-page",style:{"--designer-primary":f},children:[(0,L.jsx)("style",{children:BH}),(0,L.jsxs)("section",{className:"designer-hero",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{className:"designer-eyebrow",children:"Schema designer"}),(0,L.jsx)("h1",{children:"Database Designer"}),(0,L.jsx)("p",{children:"Create safe table blueprints, define fields and indexes, then generate Dexie migration code. This avoids dangerous runtime schema changes while still giving you a professional low-code database design workflow."})]}),(0,L.jsxs)("div",{className:"designer-hero-actions",children:[(0,L.jsxs)("div",{className:"designer-switch",children:[(0,L.jsx)("button",{type:"button",className:"cards"===i?"active":"",onClick:()=>j("cards"),children:"Cards"}),(0,L.jsx)("button",{type:"button",className:"table"===i?"active":"",onClick:()=>j("table"),children:"Table"}),(0,L.jsx)("button",{type:"button",className:"analytics"===i?"active":"",onClick:()=>j("analytics"),children:"Charts"})]}),(0,L.jsx)("button",{type:"button",className:"designer-white-btn",onClick:()=>{x(""),z(""),v({...Bf,fields:Bf.fields.map(a=>({...a,id:`field-${Date.now()}`}))}),r(!0)},children:"New Table Design"}),(0,L.jsx)("button",{type:"button",className:"designer-glass-btn",onClick:()=>{Bp("eleeveon-database-designs.json",{exportedAt:new Date().toISOString(),designs:k}),z("All database designs exported.")},children:"Export All"})]})]}),(w||y)&&(0,L.jsx)("section",{className:`designer-alert ${w?"error":"success"}`,children:w||y}),(0,L.jsxs)("section",{className:"designer-stat-grid",children:[(0,L.jsx)(BB,{label:"Designs",value:k.length,detail:`${A.length} shown`,icon:"\uD83E\uDDF1"}),(0,L.jsx)(BB,{label:"Ready",value:B,detail:`${C} applied`,icon:"✅"}),(0,L.jsx)(BB,{label:"Syncable",value:D,detail:"Offline-first tables",icon:"\uD83D\uDD04"}),(0,L.jsx)(BB,{label:"Fields",value:E,detail:"Designed data fields",icon:"\uD83E\uDDE9"})]}),(0,L.jsxs)("section",{className:"designer-tool-links",children:[(0,L.jsxs)("button",{type:"button",onClick:()=>a?.("databaseTools"),children:["\uD83D\uDDC4️ Database Tools",(0,L.jsx)("span",{children:"Inspect existing local and server tables."})]}),(0,L.jsxs)("button",{type:"button",onClick:()=>a?.("databaseStudio"),children:["\uD83E\uDDFE Database Studio",(0,L.jsx)("span",{children:"Manage records in existing tables."})]}),(0,L.jsxs)("button",{type:"button",onClick:()=>a?.("sqlConsole"),children:["\uD83E\uDDEA SQL Console",(0,L.jsx)("span",{children:"Protected server-side SQL actions."})]})]}),(0,L.jsxs)("section",{className:"designer-toolbar",children:[(0,L.jsx)("input",{value:m,onChange:a=>n(a.target.value),placeholder:"Search table name, display name, fields..."}),(0,L.jsxs)("select",{value:o,onChange:a=>p(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All statuses"}),(0,L.jsx)("option",{value:"draft",children:"Draft"}),(0,L.jsx)("option",{value:"ready",children:"Ready"}),(0,L.jsx)("option",{value:"applied",children:"Applied"}),(0,L.jsx)("option",{value:"archived",children:"Archived"})]}),(0,L.jsx)("button",{type:"button",onClick:()=>{n(""),p("all")},children:"Reset"})]}),"analytics"===i?(0,L.jsx)(By,{statusChart:F,scopeChart:G,fieldTypeChart:H,tableSizeChart:I}):"table"===i?(0,L.jsx)(Bx,{designs:A,onEdit:J,onPreview:t,onCopy:Q,onExport:P,onDelete:O,onStatus:N}):(0,L.jsx)(Bw,{designs:A,onEdit:J,onPreview:t,onCopy:Q,onExport:P,onDelete:O,onStatus:N}),q&&(0,L.jsx)(Bz,{form:u,updateForm:(a,b)=>{v(c=>({...c,[a]:b,..."tableName"===a&&!c.displayName?{displayName:Bk(String(b))}:{}}))},updateField:(a,b,c)=>{v(d=>({...d,fields:d.fields.map(d=>d.id===a?{...d,[b]:"name"===b?Bl(String(c)):c}:d)}))},addField:()=>{v(a=>({...a,fields:[...a.fields,{id:`field-${Date.now()}-${Math.random().toString(36).slice(2)}`,name:"",type:"string",required:!1,indexed:!1,unique:!1,defaultValue:"",enumValues:"",description:""}]}))},removeField:a=>{v(b=>({...b,fields:b.fields.filter(b=>b.id!==a)}))},onClose:()=>r(!1),onSubmit:K}),s&&(0,L.jsx)(BA,{design:s,onClose:()=>t(null),onCopy:Q,onExport:P})]}):(0,L.jsxs)("main",{className:"designer-page",style:{"--designer-primary":f},children:[(0,L.jsx)("style",{children:BH}),(0,L.jsxs)("section",{className:"designer-state",children:[(0,L.jsx)("h2",{children:"Developer access required"}),(0,L.jsx)("p",{children:"Sign in with a developer account to design database tables."})]})]})}function Bw({designs:a,onEdit:b,onPreview:c,onCopy:d,onExport:e,onDelete:f,onStatus:g}){return(0,L.jsxs)("section",{className:"designer-card-grid",children:[a.map(a=>(0,L.jsxs)("article",{className:"designer-card",children:[(0,L.jsxs)("div",{className:"designer-card-top",children:[(0,L.jsx)("span",{className:"designer-avatar",children:"\uD83E\uDDF1"}),(0,L.jsxs)("div",{className:"designer-chip-row",children:[(0,L.jsx)(BC,{tone:Bn(a.status),children:a.status}),a.syncEnabled&&(0,L.jsx)(BC,{tone:"blue",children:"sync"})]})]}),(0,L.jsx)("h2",{children:a.displayName||a.tableName}),(0,L.jsx)("p",{children:a.description||"No description added."}),(0,L.jsx)("code",{className:"designer-code",children:Bt(a)}),(0,L.jsxs)("div",{className:"designer-mini-grid",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Table"}),a.tableName]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Primary Key"}),a.primaryKey]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Fields"}),a.fields.length]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"System Fields"}),Bs(a).length]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Indexes"}),a.fields.filter(a=>a.indexed||a.unique).length]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Updated"}),Bi(a.updatedAt)]})]}),(0,L.jsxs)("div",{className:"designer-field-pills",children:[a.fields.slice(0,6).map(a=>(0,L.jsxs)("span",{children:[a.name,": ",a.type]},a.id)),a.fields.length>6&&(0,L.jsxs)("span",{children:["+",a.fields.length-6," fields"]})]}),(0,L.jsxs)("div",{className:"designer-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Edit"}),(0,L.jsx)("button",{type:"button",onClick:()=>c(a),children:"Preview"}),(0,L.jsx)("button",{type:"button",onClick:()=>d(a),children:"Copy Code"}),(0,L.jsx)("button",{type:"button",onClick:()=>e(a),children:"Export"}),"ready"!==a.status&&(0,L.jsx)("button",{type:"button",onClick:()=>g(a,"ready"),children:"Mark Ready"}),"applied"!==a.status&&(0,L.jsx)("button",{type:"button",onClick:()=>g(a,"applied"),children:"Mark Applied"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>f(a),children:"Delete"})]})]},a.id)),!a.length&&(0,L.jsx)(BD,{text:"No table designs match your filters."})]})}function Bx({designs:a,onEdit:b,onPreview:c,onCopy:d,onExport:e,onDelete:f,onStatus:g}){return(0,L.jsxs)("section",{className:"designer-table-card",children:[(0,L.jsx)("div",{className:"designer-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Table"}),(0,L.jsx)("th",{children:"Status"}),(0,L.jsx)("th",{children:"Primary Key"}),(0,L.jsx)("th",{children:"Fields"}),(0,L.jsx)("th",{children:"Scopes"}),(0,L.jsx)("th",{children:"Sync"}),(0,L.jsx)("th",{children:"Schema"}),(0,L.jsx)("th",{children:"Updated"}),(0,L.jsx)("th",{children:"Actions"})]})}),(0,L.jsx)("tbody",{children:a.map(a=>(0,L.jsxs)("tr",{children:[(0,L.jsxs)("td",{children:[(0,L.jsx)("strong",{children:a.displayName}),(0,L.jsx)("small",{children:a.tableName})]}),(0,L.jsx)("td",{children:(0,L.jsx)(BC,{tone:Bn(a.status),children:a.status})}),(0,L.jsx)("td",{children:a.primaryKey}),(0,L.jsx)("td",{children:a.fields.length}),(0,L.jsx)("td",{children:[a.accountScoped?"account":"",a.schoolScoped?"school":"",a.branchScoped?"branch":""].filter(Boolean).join(", ")||"global"}),(0,L.jsx)("td",{children:a.syncEnabled?"Yes":"No"}),(0,L.jsx)("td",{children:(0,L.jsx)("code",{children:Bt(a)})}),(0,L.jsx)("td",{children:Bi(a.updatedAt)}),(0,L.jsx)("td",{children:(0,L.jsxs)("div",{className:"designer-table-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>b(a),children:"Edit"}),(0,L.jsx)("button",{type:"button",onClick:()=>c(a),children:"Preview"}),(0,L.jsx)("button",{type:"button",onClick:()=>d(a),children:"Copy"}),(0,L.jsx)("button",{type:"button",onClick:()=>e(a),children:"Export"}),"ready"!==a.status&&(0,L.jsx)("button",{type:"button",onClick:()=>g(a,"ready"),children:"Ready"}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>f(a),children:"Delete"})]})})]},a.id))})]})}),!a.length&&(0,L.jsx)(BD,{text:"No table designs match your filters."})]})}function By({statusChart:a,scopeChart:b,fieldTypeChart:c,tableSizeChart:d}){return(0,L.jsxs)("section",{className:"designer-chart-grid",children:[(0,L.jsxs)(BE,{title:"Design Status",description:"Draft, ready, applied and archived table designs.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:a,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:a.map((a,b)=>(0,L.jsx)(s$,{fill:Bg[b%Bg.length]},b))})]})}),(0,L.jsx)(BF,{rows:a})]}),(0,L.jsx)(BE,{title:"Scopes & Sync",description:"How new tables are designed for tenancy and offline sync.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:b,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{type:"category",dataKey:"label",width:120,tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--designer-primary)",radius:[0,12,12,0]})]})})}),(0,L.jsxs)(BE,{title:"Field Types",description:"Field type distribution across all designs.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:c,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:c.map((a,b)=>(0,L.jsx)(s$,{fill:Bg[b%Bg.length]},b))})]})}),(0,L.jsx)(BF,{rows:c})]}),(0,L.jsx)(BE,{title:"Fields Per Table",description:"Table complexity by number of custom fields.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:d,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{type:"category",dataKey:"label",width:120,tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--designer-primary)",radius:[0,12,12,0]})]})})})]})}function Bz({form:a,updateForm:b,updateField:c,addField:d,removeField:e,onClose:f,onSubmit:g}){let h=Br({...a,tableName:a.tableName||"new_table"});return(0,L.jsx)("div",{className:"designer-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,L.jsxs)("form",{className:"designer-modal",onSubmit:g,children:[(0,L.jsxs)("div",{className:"designer-modal-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:a.id?"Edit Table Design":"Create Table Design"}),(0,L.jsx)("p",{children:"Define the table blueprint and generate safe Dexie migration code."})]}),(0,L.jsx)("button",{type:"button",onClick:f,"aria-label":"Close",children:"✕"})]}),(0,L.jsxs)("section",{className:"designer-form-grid",children:[(0,L.jsxs)("label",{children:["Table name",(0,L.jsx)("input",{value:a.tableName,onChange:a=>b("tableName",Bj(a.target.value)),placeholder:"student_notes",required:!0})]}),(0,L.jsxs)("label",{children:["Display name",(0,L.jsx)("input",{value:a.displayName,onChange:a=>b("displayName",a.target.value),placeholder:"Student Notes"})]}),(0,L.jsxs)("label",{children:["Primary key",(0,L.jsx)("input",{value:a.primaryKey,onChange:a=>b("primaryKey",a.target.value),placeholder:"++id",required:!0})]}),(0,L.jsxs)("label",{children:["Status",(0,L.jsxs)("select",{value:a.status,onChange:a=>b("status",a.target.value),children:[(0,L.jsx)("option",{value:"draft",children:"Draft"}),(0,L.jsx)("option",{value:"ready",children:"Ready"}),(0,L.jsx)("option",{value:"applied",children:"Applied"}),(0,L.jsx)("option",{value:"archived",children:"Archived"})]})]}),(0,L.jsxs)("label",{className:"wide",children:["Description",(0,L.jsx)("textarea",{value:a.description,onChange:a=>b("description",a.target.value),rows:3,placeholder:"What will this table store?"})]})]}),(0,L.jsxs)("section",{className:"designer-option-grid",children:[(0,L.jsx)(BG,{label:"Auto Increment",checked:a.autoIncrement,onChange:a=>b("autoIncrement",a)}),(0,L.jsx)(BG,{label:"Sync Enabled",checked:a.syncEnabled,onChange:a=>b("syncEnabled",a)}),(0,L.jsx)(BG,{label:"Soft Delete",checked:a.softDelete,onChange:a=>b("softDelete",a)}),(0,L.jsx)(BG,{label:"Timestamps",checked:a.timestamps,onChange:a=>b("timestamps",a)}),(0,L.jsx)(BG,{label:"Account Scoped",checked:a.accountScoped,onChange:a=>b("accountScoped",a)}),(0,L.jsx)(BG,{label:"School Scoped",checked:a.schoolScoped,onChange:a=>b("schoolScoped",a)}),(0,L.jsx)(BG,{label:"Branch Scoped",checked:a.branchScoped,onChange:a=>b("branchScoped",a)})]}),(0,L.jsxs)("section",{className:"designer-fields-section",children:[(0,L.jsxs)("div",{className:"designer-section-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h3",{children:"Fields"}),(0,L.jsxs)("p",{children:[a.fields.length," custom field(s). System fields are generated automatically."]})]}),(0,L.jsx)("button",{type:"button",onClick:d,children:"Add Field"})]}),(0,L.jsx)("div",{className:"designer-field-list",children:a.fields.map((a,b)=>{var d;return(0,L.jsxs)("article",{className:"designer-field-card",children:[(0,L.jsxs)("div",{className:"designer-field-head",children:[(0,L.jsxs)("span",{children:["Field ",b+1]}),(0,L.jsx)(BC,{tone:["email","phone","string","enum"].includes(d=a.type)?"blue":["number","currency"].includes(d)?"green":["date","timestamp"].includes(d)?"purple":["json","array"].includes(d)?"orange":"gray",children:a.type})]}),(0,L.jsxs)("div",{className:"designer-field-grid",children:[(0,L.jsxs)("label",{children:["Name",(0,L.jsx)("input",{value:a.name,onChange:b=>c(a.id,"name",b.target.value),placeholder:"studentId",required:!0})]}),(0,L.jsxs)("label",{children:["Type",(0,L.jsx)("select",{value:a.type,onChange:b=>c(a.id,"type",b.target.value),children:Be.map(a=>(0,L.jsx)("option",{value:a,children:a},a))})]}),(0,L.jsxs)("label",{children:["Default value",(0,L.jsx)("input",{value:a.defaultValue||"",onChange:b=>c(a.id,"defaultValue",b.target.value),placeholder:"optional"})]}),"enum"===a.type&&(0,L.jsxs)("label",{children:["Enum values",(0,L.jsx)("input",{value:a.enumValues||"",onChange:b=>c(a.id,"enumValues",b.target.value),placeholder:"draft,active,archived"})]}),(0,L.jsxs)("label",{className:"wide",children:["Description",(0,L.jsx)("input",{value:a.description||"",onChange:b=>c(a.id,"description",b.target.value),placeholder:"What does this field store?"})]})]}),(0,L.jsxs)("div",{className:"designer-field-options",children:[(0,L.jsx)(BG,{label:"Required",checked:a.required,onChange:b=>c(a.id,"required",b)}),(0,L.jsx)(BG,{label:"Indexed",checked:a.indexed,onChange:b=>c(a.id,"indexed",b)}),(0,L.jsx)(BG,{label:"Unique",checked:a.unique,onChange:b=>c(a.id,"unique",b)}),(0,L.jsx)("button",{type:"button",className:"danger",onClick:()=>e(a.id),children:"Remove"})]})]},a.id)})})]}),(0,L.jsxs)("section",{className:"designer-preview-card",children:[(0,L.jsx)("h3",{children:"Generated Dexie Schema"}),(0,L.jsx)("code",{children:Bt(h)}),(0,L.jsx)("p",{children:"This is preview code. Apply it through a proper db.ts version upgrade."})]}),(0,L.jsxs)("div",{className:"designer-modal-actions",children:[(0,L.jsx)("button",{type:"submit",children:"Save Design"}),(0,L.jsx)("button",{type:"button",onClick:f,children:"Cancel"})]})]})})}function BA({design:a,onClose:b,onCopy:c,onExport:d}){return(0,L.jsx)("div",{className:"designer-modal-backdrop",role:"dialog","aria-modal":"true",children:(0,L.jsxs)("section",{className:"designer-modal",children:[(0,L.jsxs)("div",{className:"designer-modal-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:a.displayName}),(0,L.jsxs)("p",{children:[a.tableName," migration preview"]})]}),(0,L.jsx)("button",{type:"button",onClick:b,"aria-label":"Close",children:"✕"})]}),(0,L.jsxs)("section",{className:"designer-warning",children:[(0,L.jsx)("strong",{children:"Safe schema rule"}),(0,L.jsx)("p",{children:"Do not create production Dexie tables by directly mutating IndexedDB at runtime. Add this schema through a new Dexie version block in db.ts, then test migration carefully."})]}),(0,L.jsx)("pre",{className:"designer-code-block",children:Bu(a)}),(0,L.jsxs)("div",{className:"designer-modal-actions",children:[(0,L.jsx)("button",{type:"button",onClick:()=>c(a),children:"Copy Code"}),(0,L.jsx)("button",{type:"button",onClick:()=>d(a),children:"Export JSON"}),(0,L.jsx)("button",{type:"button",onClick:b,children:"Close"})]})]})})}function BB({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"designer-stat",children:[(0,L.jsxs)("span",{children:[a,(0,L.jsx)("b",{children:d})]}),(0,L.jsx)("strong",{children:b}),(0,L.jsx)("small",{children:c})]})}function BC({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`designer-chip ${b}`,children:a})}function BD({text:a}){return(0,L.jsx)("div",{className:"designer-empty",children:a})}function BE({title:a,description:b,children:c}){return(0,L.jsxs)("section",{className:"designer-chart-card",children:[(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function BF({rows:a}){return(0,L.jsx)("div",{className:"designer-legend",children:a.map((a,b)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("i",{style:{background:Bg[b%Bg.length]}}),a.label,": ",a.value]},`${a.label}-${b}`))})}function BG({label:a,checked:b,onChange:c}){return(0,L.jsxs)("label",{className:"designer-toggle",children:[(0,L.jsx)("input",{type:"checkbox",checked:b,onChange:a=>c(a.target.checked)}),(0,L.jsx)("span",{children:a})]})}let BH=`
@keyframes designerSpin { to { transform: rotate(360deg); } }

.designer-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  padding: 8px;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--designer-primary) 10%, transparent), transparent 34rem),
    #f8fafc;
  color: #0f172a;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}

.designer-page *,
.designer-page *::before,
.designer-page *::after {
  box-sizing: border-box;
}

.designer-page button,
.designer-page input,
.designer-page select,
.designer-page textarea {
  font: inherit;
  max-width: 100%;
}

.designer-state {
  min-height: min(420px, calc(100dvh - 32px));
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .08);
  text-align: center;
}

.designer-state h2 {
  margin: 0;
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 1000;
  letter-spacing: -.04em;
}

.designer-state p {
  max-width: 34rem;
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.6;
}

.designer-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--designer-primary) 18%, transparent);
  border-top-color: var(--designer-primary);
  animation: designerSpin .8s linear infinite;
}

.designer-hero {
  display: grid;
  gap: 16px;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, .18), transparent 20rem),
    linear-gradient(135deg, var(--designer-primary), #0f172a 72%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .18);
  overflow: hidden;
}

.designer-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .14em;
  opacity: .82;
}

.designer-hero h1 {
  margin: 8px 0 0;
  font-size: clamp(28px, 8vw, 44px);
  line-height: 1.02;
  font-weight: 1000;
  letter-spacing: -.07em;
}

.designer-hero p {
  max-width: 850px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: .9;
}

.designer-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.designer-switch {
  display: inline-flex;
  gap: 5px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(14px);
}

.designer-switch button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.designer-switch button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .16);
}

.designer-white-btn,
.designer-glass-btn {
  min-height: 40px;
  border-radius: 999px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.designer-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.designer-glass-btn {
  border: 1px solid rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .14);
  color: #fff;
}

.designer-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 850;
}

.designer-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.designer-alert.success {
  background: #dcfce7;
  color: #166534;
}

.designer-stat-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.designer-stat {
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 24px;
  padding: 16px;
  background: #fff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.designer-stat span {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.designer-stat strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(24px, 8vw, 34px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
}

.designer-stat small {
  display: block;
  margin-top: 8px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.designer-tool-links {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 10px;
}

.designer-tool-links button {
  display: grid;
  gap: 3px;
  text-align: left;
  min-height: 62px;
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 22px;
  padding: 12px 14px;
  background: #fff;
  color: #0f172a;
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.designer-tool-links span {
  color: #64748b;
  font-size: 11px;
  font-weight: 800;
  line-height: 1.35;
}

.designer-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
}

.designer-toolbar input,
.designer-toolbar select {
  min-height: 42px;
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .3);
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
}

.designer-toolbar button {
  min-height: 42px;
  border: 0;
  border-radius: 16px;
  background: color-mix(in srgb, var(--designer-primary) 10%, white);
  color: var(--designer-primary);
  font-size: 13px;
  font-weight: 1000;
  cursor: pointer;
}

.designer-card-grid,
.designer-chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.designer-card,
.designer-chart-card,
.designer-table-card {
  min-width: 0;
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 26px;
  padding: 14px;
  background: #fff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.designer-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.designer-avatar {
  width: 46px;
  height: 46px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--designer-primary), #0f172a);
  color: #fff;
  font-size: 18px;
  font-weight: 1000;
}

.designer-chip-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
}

.designer-card h2 {
  margin: 14px 0 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.designer-card p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.45;
}

.designer-code {
  display: block;
  margin-top: 10px;
  padding: 10px;
  border-radius: 16px;
  background: #0f172a;
  color: #e5e7eb;
  font-size: 11px;
  line-height: 1.5;
  overflow-x: auto;
}

.designer-mini-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 14px;
}

.designer-mini-grid span {
  padding: 10px;
  border-radius: 16px;
  background: #f8fafc;
  color: #0f172a;
  font-size: 12px;
  font-weight: 850;
}

.designer-mini-grid b {
  display: block;
  color: #64748b;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .08em;
  margin-bottom: 3px;
}

.designer-field-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
}

.designer-field-pills span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 9px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.designer-actions,
.designer-table-actions,
.designer-modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.designer-actions {
  margin-top: 14px;
}

.designer-actions button,
.designer-table-actions button,
.designer-modal-actions button,
.designer-section-head button,
.designer-field-options button {
  min-height: 38px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: color-mix(in srgb, var(--designer-primary) 10%, white);
  color: var(--designer-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.designer-actions button:first-child,
.designer-modal-actions button:first-child {
  background: var(--designer-primary);
  color: #fff;
}

.designer-actions button.danger,
.designer-table-actions button.danger,
.designer-field-options button.danger {
  background: #fee2e2;
  color: #b91c1c;
}

.designer-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
  white-space: nowrap;
}

.designer-chip.green { background: #dcfce7; color: #166534; }
.designer-chip.blue { background: #dbeafe; color: #1d4ed8; }
.designer-chip.purple { background: #f3e8ff; color: #7e22ce; }
.designer-chip.orange { background: #ffedd5; color: #c2410c; }
.designer-chip.red { background: #fee2e2; color: #b91c1c; }
.designer-chip.gray { background: #f1f5f9; color: #475569; }

.designer-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.designer-table-wrap table {
  width: 100%;
  min-width: 1180px;
  border-collapse: collapse;
}

.designer-table-wrap th {
  text-align: left;
  color: #64748b;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.designer-table-wrap td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .16);
  font-size: 13px;
  vertical-align: top;
}

.designer-table-wrap strong {
  display: block;
  font-weight: 1000;
}

.designer-table-wrap small {
  display: block;
  margin-top: 3px;
  color: #64748b;
  font-size: 11px;
}

.designer-table-wrap code {
  display: block;
  max-width: 340px;
  overflow-x: auto;
  padding: 8px;
  border-radius: 12px;
  background: #0f172a;
  color: #e5e7eb;
  font-size: 11px;
}

.designer-chart-card h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.designer-chart-card p {
  margin: 5px 0 10px;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.designer-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

.designer-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 9px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.designer-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

.designer-empty {
  grid-column: 1 / -1;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
  color: #64748b;
  font-size: 13px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, .35);
}

.designer-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: end center;
  padding: 10px;
  background: rgba(15, 23, 42, .58);
  backdrop-filter: blur(12px);
}

.designer-modal {
  width: min(1080px, 100%);
  max-height: min(92dvh, 920px);
  overflow-y: auto;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 30px 100px rgba(15, 23, 42, .35);
  border: 1px solid rgba(255, 255, 255, .24);
  padding: 14px;
}

.designer-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 4px 14px;
}

.designer-modal-head h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 1000;
  letter-spacing: -.05em;
}

.designer-modal-head p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.designer-modal-head button {
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 999px;
  background: #f1f5f9;
  color: #0f172a;
  font-weight: 1000;
  cursor: pointer;
}

.designer-form-grid,
.designer-field-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.designer-form-grid label,
.designer-field-grid label {
  display: grid;
  gap: 6px;
  color: #334155;
  font-size: 12px;
  font-weight: 950;
}

.designer-form-grid input,
.designer-form-grid select,
.designer-form-grid textarea,
.designer-field-grid input,
.designer-field-grid select {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, .32);
  border-radius: 16px;
  background: #fff;
  color: #0f172a;
  padding: 11px 12px;
  font-size: 13px;
  font-weight: 800;
}

.designer-form-grid input,
.designer-form-grid select,
.designer-field-grid input,
.designer-field-grid select {
  min-height: 42px;
}

.designer-form-grid textarea {
  resize: vertical;
}

.designer-option-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin-top: 12px;
  padding: 12px;
  border-radius: 22px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
}

.designer-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 36px;
  padding: 0 10px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .18);
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
}

.designer-toggle input {
  width: 16px;
  height: 16px;
  accent-color: var(--designer-primary);
}

.designer-fields-section {
  margin-top: 12px;
  padding: 12px;
  border-radius: 22px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
}

.designer-section-head,
.designer-field-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.designer-section-head h3,
.designer-preview-card h3 {
  margin: 0;
  font-size: 15px;
  font-weight: 1000;
}

.designer-section-head p,
.designer-preview-card p {
  margin: 4px 0 0;
  color: #64748b;
  font-size: 12px;
}

.designer-field-list {
  display: grid;
  gap: 10px;
  margin-top: 10px;
}

.designer-field-card {
  padding: 12px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .18);
}

.designer-field-head span {
  color: #64748b;
  font-size: 12px;
  font-weight: 1000;
}

.designer-field-grid {
  margin-top: 10px;
}

.designer-field-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.designer-preview-card,
.designer-warning {
  margin-top: 12px;
  padding: 12px;
  border-radius: 22px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
}

.designer-preview-card code {
  display: block;
  margin-top: 10px;
  padding: 10px;
  border-radius: 16px;
  background: #0f172a;
  color: #e5e7eb;
  font-size: 11px;
  overflow-x: auto;
}

.designer-warning {
  background: #fff7ed;
  border-color: rgba(249, 115, 22, .24);
}

.designer-warning strong {
  display: block;
  color: #9a3412;
  font-size: 13px;
  font-weight: 1000;
}

.designer-warning p {
  margin: 5px 0 0;
  color: #c2410c;
  font-size: 12px;
  line-height: 1.5;
}

.designer-code-block {
  margin: 12px 0 0;
  max-height: 520px;
  overflow: auto;
  padding: 14px;
  border-radius: 22px;
  background: #0f172a;
  color: #e5e7eb;
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
}

.designer-modal-actions {
  position: sticky;
  bottom: -14px;
  justify-content: flex-end;
  margin-top: 14px;
  padding: 12px 0 2px;
  background: linear-gradient(to top, #fff 70%, transparent);
}

@media (min-width: 520px) {
  .designer-stat-grid,
  .designer-tool-links,
  .designer-toolbar,
  .designer-option-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .designer-mini-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 760px) {
  .designer-card-grid,
  .designer-chart-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .designer-form-grid,
  .designer-field-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .designer-form-grid .wide,
  .designer-field-grid .wide {
    grid-column: 1 / -1;
  }

  .designer-modal-backdrop {
    place-items: center;
    padding: 18px;
  }

  .designer-modal {
    padding: 18px;
  }
}

@media (min-width: 920px) {
  .designer-page {
    padding: 14px;
  }

  .designer-hero {
    grid-template-columns: 1fr auto;
    align-items: end;
    padding: 24px;
  }

  .designer-stat-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .designer-tool-links {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .designer-toolbar {
    grid-template-columns: minmax(240px, 2fr) minmax(160px, 1fr) auto;
  }

  .designer-mini-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .designer-option-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (min-width: 1180px) {
  .designer-card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
`,BI="I UNDERSTAND",BJ=`-- Real PostgreSQL database query
-- Run one statement at a time.
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
ORDER BY table_name
LIMIT 50;
`,BK=[{id:"list-tables",title:"List Tables",description:"Shows all public database tables.",sql:"SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name LIMIT 100;"},{id:"table-columns",title:"Table Columns",description:"Shows columns, types and nullability for public tables.",sql:"SELECT table_name, column_name, data_type, is_nullable FROM information_schema.columns WHERE table_schema = 'public' ORDER BY table_name, ordinal_position LIMIT 300;"},{id:"accounts-safe",title:"Accounts",description:"Reads account records if the table exists.",sql:"SELECT * FROM accounts LIMIT 20;"},{id:"users-safe",title:"Users",description:"Reads user records if the table exists.",sql:"SELECT * FROM users LIMIT 20;"},{id:"schools-safe",title:"Schools",description:"Reads school records if the table exists.",sql:"SELECT * FROM schools LIMIT 20;"},{id:"branches-safe",title:"Branches",description:"Reads branch records if the table exists.",sql:"SELECT * FROM branches LIMIT 20;"},{id:"subscriptions-safe",title:"Subscriptions",description:"Reads subscription records if the table exists.",sql:"SELECT * FROM subscriptions LIMIT 20;"},{id:"payments-safe",title:"Payments",description:"Reads payment records if the table exists.",sql:"SELECT * FROM payments LIMIT 20;"}],BL=["var(--sql-primary)","#0f172a","#16a34a","#f97316","#7c3aed","#dc2626","#0891b2","#64748b"],BM=(a,b=[])=>{if(Array.isArray(a))return a;if(!a||"object"!=typeof a)return[];for(let c of b)if(Array.isArray(a[c]))return a[c];return Array.isArray(a.data)?a.data:Array.isArray(a.items)?a.items:Array.isArray(a.results)?a.results:Array.isArray(a.records)?a.records:Array.isArray(a.rows)?a.rows:[]},BN=a=>a.replace(/--.*$/gm,"").replace(/\/\*[\s\S]*?\*\//g,"").trim(),BO=a=>"safe"===a?"green":"write"===a?"orange":"destructive"===a||"schema"===a?"red":"gray",BP=a=>{let b=a?.response?.data?.message||a?.response?.message||a?.data?.message||a?.message||"SQL request failed.";return Array.isArray(b)?b.join(" "):"object"==typeof b?JSON.stringify(b):String(b)},BQ=async a=>(0,uL.uE)(a),BR=async(a,b)=>(0,uL.uE)(a,{method:"POST",body:b}),BS=()=>[],BT=a=>{},BU=(a,b)=>{let c=new Map;return a.forEach(a=>{let d=String(b(a)||"Unknown").trim()||"Unknown";c.set(d,(c.get(d)||0)+1)}),Array.from(c.entries()).map(([a,b])=>({label:a,value:b})).sort((a,b)=>b.value-a.value)};function BV({navigate:a}){let{accountId:b,authenticated:c,loading:d}=(0,uM.F)(),{settings:e}=(0,uN.t)(),f=e?.primaryColor||"#2563eb",[g,h]=(0,M.useState)("results"),[i,j]=(0,M.useState)("table"),[k,l]=(0,M.useState)(BJ),[m,n]=(0,M.useState)(!0),[o,p]=(0,M.useState)(""),[q,r]=(0,M.useState)(null),[s,t]=(0,M.useState)([]),[u,v]=(0,M.useState)(null),[w,x]=(0,M.useState)(""),[y,z]=(0,M.useState)("all"),[A,B]=(0,M.useState)(!1),[C,D]=(0,M.useState)(!0),[E,F]=(0,M.useState)(""),[G,H]=(0,M.useState)(""),I=async()=>{try{let a=await BQ("/developer/sql/status");v(a)}catch(a){v({ok:!1,error:BP(a)})}},J=async()=>{try{D(!0),await I();let a=await BQ("/developer/sql/history").catch(()=>null),b=BM(a,["history","queries","items"]);b.length?(t(b),BT(b)):t(BS())}catch{t(BS())}finally{D(!1)}},K=(0,M.useMemo)(()=>{let a;return(a=BN(k).toUpperCase())?/^\s*(SELECT|WITH|SHOW|EXPLAIN|DESCRIBE)\b/.test(a)?"safe":/\b(DROP|TRUNCATE|ALTER|CREATE|REINDEX|VACUUM)\b/.test(a)?"schema":/\b(DELETE|UPDATE)\b/.test(a)?"destructive":/\b(INSERT|UPSERT|MERGE|REPLACE)\b/.test(a)?"write":"unknown":"unknown"},[k]),N=(0,M.useMemo)(()=>{let a;return a=BN(k),a.split(/\s+/)[0]?.toUpperCase()||""},[k]),O="safe"!==K,P=!!BN(k)&&(!m||"safe"===K)&&(!O||o.trim()===BI),Q=(0,M.useMemo)(()=>{let a=w.trim().toLowerCase();return s.filter(b=>{let c=!a||`${b.sql} ${b.error||""} ${b.auditId||""}`.toLowerCase().includes(a),d="all"===y||b.risk===y;return c&&d}).sort((a,b)=>b.createdAt-a.createdAt)},[s,w,y]),R=s.filter(a=>a.ok).length,S=s.filter(a=>!a.ok).length,T=s.filter(a=>"safe"!==a.risk).length,U=s.length?Math.round(s.reduce((a,b)=>a+Number(b.executionMs||0),0)/s.length):0,V=(0,M.useMemo)(()=>BU(s,a=>a.risk),[s]),W=(0,M.useMemo)(()=>BU(s,a=>a.mode),[s]),X=(0,M.useMemo)(()=>[{label:"Success",value:R},{label:"Failed",value:S}],[R,S]),Y=(0,M.useMemo)(()=>s.slice(0,10).map((a,b)=>({label:`Q${s.length-b}`,value:Number(a.executionMs||0)})).reverse(),[s]),Z=a=>{t(b=>{let c=[a,...b].slice(0,100);return BT(c),c})},$=async()=>{if(!P)return m&&"safe"!==K?void F("Read-only mode is enabled. Disable it before running write/schema queries."):O?void F(`Type "${BI}" to confirm this risky query.`):void F("SQL query is empty.");let a=performance.now();try{var b;let c,d;B(!0),F(""),H("");let e=(b=await BR("/developer/sql/execute",{sql:BN(k),rawSql:k,readOnly:m,risk:K,confirmText:O?o:void 0,source:"developer_portal"}),c=(a=>{if("string"!=typeof a)return a;let b=a.trim();if(!b)return{};try{let a=JSON.parse(b);if("string"==typeof a)try{return JSON.parse(a)}catch{return{message:a}}return a}catch{return{message:b}}})(b),d=BM(c,["rows","data","records","results"]),{columns:Array.isArray(c?.columns)?c.columns.map(String):d.length?Array.from(new Set(d.flatMap(a=>Object.keys(a||{})))):[],rows:d,rowCount:Number(c?.rowCount??c?.count??d.length),executionMs:Number(c?.executionMs??c?.durationMs??0),auditId:c?.auditId||c?.auditLogId||null}),f=e.executionMs||Math.round(performance.now()-a),g={...e,executionMs:f};r(g);let i={id:`query-${Date.now()}`,sql:k,risk:K,mode:m?"read_only":"write_enabled",ok:!0,rowCount:g.rowCount,executionMs:f,auditId:g.auditId,error:null,createdAt:Date.now()};Z(i),await BR("/developer/sql/history",i).catch(()=>null),H(`Query completed. ${g.rowCount} row(s) returned/affected.`),h("results"),p(""),await I()}catch(d){let b=Math.round(performance.now()-a),c=BP(d);Z({id:`query-${Date.now()}`,sql:k,risk:K,mode:m?"read_only":"write_enabled",ok:!1,rowCount:0,executionMs:b,auditId:null,error:c,createdAt:Date.now()}),F(c),await I()}finally{B(!1)}};return C||d?(0,L.jsxs)("main",{className:"sql-page",style:{"--sql-primary":f},children:[(0,L.jsx)("style",{children:B2}),(0,L.jsxs)("section",{className:"sql-state",children:[(0,L.jsx)("div",{className:"sql-spinner"}),(0,L.jsx)("h2",{children:"Loading SQL Console..."}),(0,L.jsx)("p",{children:"Connecting to backend SQL service and loading query history."})]})]}):c&&b?(0,L.jsxs)("main",{className:"sql-page",style:{"--sql-primary":f},children:[(0,L.jsx)("style",{children:B2}),(0,L.jsxs)("section",{className:"sql-hero",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{className:"sql-eyebrow",children:"Real PostgreSQL Database"}),(0,L.jsx)("h1",{children:"SQL Console"}),(0,L.jsx)("p",{children:"This console queries your actual PostgreSQL database through the NestJS backend using Prisma and the backend DATABASE_URL. The database URL is never placed in browser code."})]}),(0,L.jsxs)("div",{className:"sql-hero-actions",children:[(0,L.jsxs)("div",{className:"sql-switch",children:[(0,L.jsx)("button",{type:"button",className:"results"===g?"active":"",onClick:()=>h("results"),children:"Results"}),(0,L.jsx)("button",{type:"button",className:"history"===g?"active":"",onClick:()=>h("history"),children:"History"}),(0,L.jsx)("button",{type:"button",className:"analytics"===g?"active":"",onClick:()=>h("analytics"),children:"Charts"})]}),(0,L.jsx)("button",{type:"button",className:"sql-white-btn",onClick:()=>J(),children:"Refresh"}),(0,L.jsx)("button",{type:"button",className:"sql-glass-btn",onClick:()=>a?.("databaseTools"),children:"Database Tools"}),(0,L.jsx)("button",{type:"button",className:"sql-glass-btn",onClick:()=>a?.("databaseStudio"),children:"Database Studio"})]})]}),(E||G)&&(0,L.jsx)("section",{className:`sql-alert ${E?"error":"success"}`,children:E||G}),(0,L.jsxs)("section",{className:`sql-backend-card ${u?.ok?"ok":"bad"}`,children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:u?.ok?"Backend SQL service connected":"Backend SQL service not ready"}),(0,L.jsx)("p",{children:u?.ok?`${u.service||"Developer SQL Service"} \xb7 ${u.provider||"PostgreSQL"} \xb7 writes ${u.writesEnabled?"enabled":"blocked"}`:u?.error||"Add the backend developer-sql module and restart NestJS."})]}),(0,L.jsx)(B$,{tone:u?.ok?"green":"red",children:u?.ok?"connected":"not connected"})]}),(0,L.jsxs)("section",{className:"sql-stat-grid",children:[(0,L.jsx)(BZ,{label:"Queries",value:s.length,detail:`${R} successful`,icon:"\uD83E\uDDEA"}),(0,L.jsx)(BZ,{label:"Failures",value:S,detail:"Backend/query errors",icon:"⚠️"}),(0,L.jsx)(BZ,{label:"Write/Schema",value:T,detail:"Risky query history",icon:"\uD83D\uDD10"}),(0,L.jsx)(BZ,{label:"Avg Time",value:`${U}ms`,detail:"Local/backend history",icon:"⏱️"})]}),(0,L.jsxs)("section",{className:"sql-console-grid",children:[(0,L.jsxs)("section",{className:"sql-editor-card",children:[(0,L.jsxs)("div",{className:"sql-editor-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:"Query Editor"}),(0,L.jsxs)("p",{children:["Current command: ",N||"None"]})]}),(0,L.jsx)(B$,{tone:BO(K),children:K})]}),(0,L.jsx)("textarea",{value:k,onChange:a=>{l(a.target.value),p("")},spellCheck:!1}),(0,L.jsxs)("div",{className:"sql-editor-controls",children:[(0,L.jsxs)("label",{className:"sql-toggle",children:[(0,L.jsx)("input",{type:"checkbox",checked:m,onChange:a=>{n(a.target.checked),p("")}}),(0,L.jsx)("span",{children:"Read-only mode"})]}),!m&&(0,L.jsx)(B$,{tone:"orange",children:"write mode requested"}),O&&(0,L.jsxs)("label",{className:"sql-confirm",children:["Confirmation",(0,L.jsx)("input",{value:o,onChange:a=>p(a.target.value),placeholder:BI})]})]}),(0,L.jsxs)("div",{className:"sql-actions",children:[(0,L.jsx)("button",{type:"button",onClick:$,disabled:A||!P||u?.ok===!1,children:A?"Running...":"Run Query"}),(0,L.jsx)("button",{type:"button",onClick:()=>{l(""),p(""),r(null)},children:"Clear"}),q&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("button",{type:"button",onClick:()=>{if(q);},children:"Export JSON"}),(0,L.jsx)("button",{type:"button",onClick:()=>{q&&(q.rows,q.columns)},children:"Export CSV"})]})]}),(0,L.jsxs)("details",{className:"sql-payload-preview",children:[(0,L.jsx)("summary",{children:"Backend request preview"}),(0,L.jsx)("pre",{children:JSON.stringify({url:"/developer/sql/execute",sql:BN(k),readOnly:m,risk:K,confirmText:O?o:void 0,source:"developer_portal"},null,2)})]}),"safe"!==K&&(0,L.jsxs)("section",{className:"sql-warning",children:[(0,L.jsx)("strong",{children:"Risk warning"}),(0,L.jsx)("p",{children:"The backend blocks write/schema SQL by default. To enable it, set DEVELOPER_SQL_ALLOW_WRITES=true in the backend .env and type the confirmation text."})]})]}),(0,L.jsxs)("section",{className:"sql-snippets-card",children:[(0,L.jsx)("h2",{children:"Real DB Snippets"}),(0,L.jsx)("p",{children:"These are safe queries to inspect your actual PostgreSQL schema and records."}),(0,L.jsx)("div",{className:"sql-snippet-list",children:BK.map(a=>(0,L.jsxs)("button",{type:"button",onClick:()=>{l(a.sql),p(""),h("results")},children:[(0,L.jsx)("strong",{children:a.title}),(0,L.jsx)("span",{children:a.description})]},a.id))})]})]}),"results"===g?(0,L.jsx)(BW,{result:q,resultMode:i,setResultMode:j}):"history"===g?(0,L.jsx)(BX,{history:Q,search:w,setSearch:x,riskFilter:y,setRiskFilter:z,onUse:a=>{l(a.sql),p(""),h("results")},onClear:()=>{t([]),BT([]),H("Local query history cleared.")}}):(0,L.jsx)(BY,{riskChart:V,modeChart:W,successChart:X,durationChart:Y})]}):(0,L.jsxs)("main",{className:"sql-page",style:{"--sql-primary":f},children:[(0,L.jsx)("style",{children:B2}),(0,L.jsxs)("section",{className:"sql-state",children:[(0,L.jsx)("h2",{children:"Developer access required"}),(0,L.jsx)("p",{children:"Sign in with a developer account to use the SQL console."})]})]})}function BW({result:a,resultMode:b,setResultMode:c}){return a?(0,L.jsxs)("section",{className:"sql-results-card",children:[(0,L.jsxs)("div",{className:"sql-results-head",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("h2",{children:"Query Results"}),(0,L.jsxs)("p",{children:[a.rowCount," row(s) \xb7 ",a.executionMs,"ms",a.auditId?` \xb7 Audit: ${a.auditId}`:""]})]}),(0,L.jsxs)("div",{className:"sql-mode-switch",children:[(0,L.jsx)("button",{type:"button",className:"table"===b?"active":"",onClick:()=>c("table"),children:"Table"}),(0,L.jsx)("button",{type:"button",className:"cards"===b?"active":"",onClick:()=>c("cards"),children:"Cards"})]})]}),"table"===b?(0,L.jsx)("div",{className:"sql-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsx)("tr",{children:a.columns.map(a=>(0,L.jsx)("th",{children:a},a))})}),(0,L.jsx)("tbody",{children:a.rows.map((b,c)=>(0,L.jsx)("tr",{children:a.columns.map(a=>{var c;return(0,L.jsx)("td",{children:null==(c=b[a])?"—":"bigint"==typeof c?c.toString():c instanceof Date?c.toISOString():"object"==typeof c?JSON.stringify(c):String(c)},a)})},c))})]})}):(0,L.jsx)("section",{className:"sql-result-card-grid",children:a.rows.map((a,b)=>(0,L.jsxs)("article",{className:"sql-result-card",children:[(0,L.jsxs)("h3",{children:["Row ",b+1]}),(0,L.jsx)("pre",{children:JSON.stringify(a,null,2)})]},b))}),!a.rows.length&&(0,L.jsx)(B_,{text:"Query returned no rows."})]}):(0,L.jsxs)("section",{className:"sql-empty-card",children:[(0,L.jsx)("h2",{children:"No query result yet"}),(0,L.jsx)("p",{children:"Run a query to see rows, columns, execution time and audit ID here."})]})}function BX({history:a,search:b,setSearch:c,riskFilter:d,setRiskFilter:e,onUse:f,onClear:g}){return(0,L.jsxs)("section",{className:"sql-history-card",children:[(0,L.jsxs)("div",{className:"sql-history-toolbar",children:[(0,L.jsx)("input",{value:b,onChange:a=>c(a.target.value),placeholder:"Search SQL history..."}),(0,L.jsxs)("select",{value:d,onChange:a=>e(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All risks"}),(0,L.jsx)("option",{value:"safe",children:"Safe"}),(0,L.jsx)("option",{value:"write",children:"Write"}),(0,L.jsx)("option",{value:"destructive",children:"Destructive"}),(0,L.jsx)("option",{value:"schema",children:"Schema"}),(0,L.jsx)("option",{value:"unknown",children:"Unknown"})]}),(0,L.jsx)("button",{type:"button",onClick:g,children:"Clear Local History"})]}),(0,L.jsxs)("div",{className:"sql-history-list",children:[a.map(a=>{let b;return(0,L.jsxs)("article",{className:`sql-history-item ${a.ok?"ok":"failed"}`,children:[(0,L.jsxs)("div",{className:"sql-history-top",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)(B$,{tone:BO(a.risk),children:a.risk}),(0,L.jsx)(B$,{tone:a.ok?"green":"red",children:a.ok?"success":"failed"})]}),(0,L.jsx)("span",{children:(b=(a=>{if(!a)return 0;let b="number"==typeof a?a:new Date(a).getTime();return Number.isFinite(b)?b:0})(a.createdAt))?new Intl.DateTimeFormat("en-GH",{month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(b)):"Not set"})]}),(0,L.jsx)("pre",{children:a.sql}),(0,L.jsxs)("div",{className:"sql-history-meta",children:[(0,L.jsx)("span",{children:a.mode}),(0,L.jsxs)("span",{children:[a.rowCount," row(s)"]}),(0,L.jsxs)("span",{children:[a.executionMs,"ms"]}),a.auditId&&(0,L.jsxs)("span",{children:["Audit: ",a.auditId]})]}),a.error&&(0,L.jsx)("p",{children:a.error}),(0,L.jsx)("button",{type:"button",onClick:()=>f(a),children:"Use Query"})]},a.id)}),!a.length&&(0,L.jsx)(B_,{text:"No query history matches your filters."})]})]})}function BY({riskChart:a,modeChart:b,successChart:c,durationChart:d}){return(0,L.jsxs)("section",{className:"sql-chart-grid",children:[(0,L.jsxs)(B0,{title:"Risk Distribution",description:"Safe, write, destructive and schema queries.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:a,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:a.map((a,b)=>(0,L.jsx)(s$,{fill:BL[b%BL.length]},b))})]})}),(0,L.jsx)(B1,{rows:a})]}),(0,L.jsxs)(B0,{title:"Execution Status",description:"Successful versus failed queries.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:c,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:c.map((a,b)=>(0,L.jsx)(s$,{fill:BL[b%BL.length]},b))})]})}),(0,L.jsx)(B1,{rows:c})]}),(0,L.jsxs)(B0,{title:"Mode Usage",description:"Read-only versus write-enabled query runs.",children:[(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:b,dataKey:"value",nameKey:"label",innerRadius:62,outerRadius:96,paddingAngle:3,children:b.map((a,b)=>(0,L.jsx)(s$,{fill:BL[b%BL.length]},b))})]})}),(0,L.jsx)(B1,{rows:b})]}),(0,L.jsx)(B0,{title:"Recent Durations",description:"Execution time of recent queries.",children:(0,L.jsx)(aA,{width:"100%",height:280,children:(0,L.jsxs)(pA,{data:d,children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",vertical:!1}),(0,L.jsx)(rh,{dataKey:"label",tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--sql-primary)",radius:[12,12,0,0]})]})})})]})}function BZ({label:a,value:b,detail:c,icon:d}){return(0,L.jsxs)("article",{className:"sql-stat",children:[(0,L.jsxs)("span",{children:[a,(0,L.jsx)("b",{children:d})]}),(0,L.jsx)("strong",{children:b}),(0,L.jsx)("small",{children:c})]})}function B$({children:a,tone:b="gray"}){return(0,L.jsx)("span",{className:`sql-chip ${b}`,children:a})}function B_({text:a}){return(0,L.jsx)("div",{className:"sql-empty",children:a})}function B0({title:a,description:b,children:c}){return(0,L.jsxs)("section",{className:"sql-chart-card",children:[(0,L.jsx)("h2",{children:a}),(0,L.jsx)("p",{children:b}),(0,L.jsx)("div",{children:c})]})}function B1({rows:a}){return(0,L.jsx)("div",{className:"sql-legend",children:a.map((a,b)=>(0,L.jsxs)("span",{children:[(0,L.jsx)("i",{style:{background:BL[b%BL.length]}}),a.label,": ",a.value]},`${a.label}-${b}`))})}let B2=`
@keyframes sqlSpin { to { transform: rotate(360deg); } }

.sql-page {
  min-height: 100dvh;
  width: 100%;
  max-width: 100%;
  padding: 8px;
  padding-bottom: max(28px, env(safe-area-inset-bottom));
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--sql-primary) 10%, transparent), transparent 34rem),
    #f8fafc;
  color: #0f172a;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}

.sql-page *,
.sql-page *::before,
.sql-page *::after {
  box-sizing: border-box;
}

.sql-page button,
.sql-page input,
.sql-page select,
.sql-page textarea {
  font: inherit;
  max-width: 100%;
}

.sql-state {
  min-height: min(420px, calc(100dvh - 32px));
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  width: min(520px, 100%);
  margin: 0 auto;
  padding: 22px;
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .08);
  text-align: center;
}

.sql-state h2 {
  margin: 0;
  font-size: clamp(18px, 5vw, 24px);
  font-weight: 1000;
  letter-spacing: -.04em;
}

.sql-state p {
  max-width: 34rem;
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.6;
}

.sql-spinner {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  border: 4px solid color-mix(in srgb, var(--sql-primary) 18%, transparent);
  border-top-color: var(--sql-primary);
  animation: sqlSpin .8s linear infinite;
}

.sql-hero {
  display: grid;
  gap: 16px;
  border-radius: 30px;
  padding: 18px;
  color: #fff;
  background:
    radial-gradient(circle at 20% 10%, rgba(255, 255, 255, .18), transparent 20rem),
    linear-gradient(135deg, var(--sql-primary), #0f172a 72%);
  box-shadow: 0 24px 70px rgba(15, 23, 42, .18);
  overflow: hidden;
}

.sql-eyebrow {
  display: inline-flex;
  font-size: 11px;
  font-weight: 1000;
  text-transform: uppercase;
  letter-spacing: .14em;
  opacity: .82;
}

.sql-hero h1 {
  margin: 8px 0 0;
  font-size: clamp(28px, 8vw, 44px);
  line-height: 1.02;
  font-weight: 1000;
  letter-spacing: -.07em;
}

.sql-hero p {
  max-width: 850px;
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.6;
  opacity: .9;
}

.sql-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.sql-switch,
.sql-mode-switch {
  display: inline-flex;
  gap: 5px;
  padding: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  border: 1px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(14px);
}

.sql-mode-switch {
  background: #f1f5f9;
  border-color: rgba(148, 163, 184, .18);
}

.sql-switch button,
.sql-mode-switch button {
  min-height: 34px;
  border: 0;
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: rgba(255, 255, 255, .75);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.sql-mode-switch button {
  color: #475569;
}

.sql-switch button.active,
.sql-mode-switch button.active {
  background: #fff;
  color: #0f172a;
  box-shadow: 0 10px 24px rgba(15, 23, 42, .16);
}

.sql-white-btn,
.sql-glass-btn {
  min-height: 40px;
  border-radius: 999px;
  padding: 0 13px;
  font-size: 12px;
  font-weight: 950;
  cursor: pointer;
}

.sql-white-btn {
  border: 0;
  background: #fff;
  color: #0f172a;
}

.sql-glass-btn {
  border: 1px solid rgba(255, 255, 255, .28);
  background: rgba(255, 255, 255, .14);
  color: #fff;
}

.sql-alert {
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 850;
}

.sql-alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.sql-alert.success {
  background: #dcfce7;
  color: #166534;
}

.sql-backend-card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-top: 10px;
  padding: 14px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid rgba(148, 163, 184, .22);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .05);
}

.sql-backend-card.ok {
  border-color: rgba(22, 163, 74, .24);
}

.sql-backend-card.bad {
  border-color: rgba(220, 38, 38, .24);
}

.sql-backend-card h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 1000;
  letter-spacing: -.03em;
}

.sql-backend-card p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.sql-stat-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.sql-stat {
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 24px;
  padding: 16px;
  background: #fff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.sql-stat span {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.sql-stat strong {
  display: block;
  margin-top: 8px;
  font-size: clamp(24px, 8vw, 34px);
  line-height: 1;
  font-weight: 1000;
  letter-spacing: -.06em;
}

.sql-stat small {
  display: block;
  margin-top: 8px;
  color: #64748b;
  font-size: 12px;
  font-weight: 850;
}

.sql-console-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 10px;
}

.sql-editor-card,
.sql-snippets-card,
.sql-results-card,
.sql-history-card,
.sql-chart-card,
.sql-empty-card {
  min-width: 0;
  border: 1px solid rgba(148, 163, 184, .22);
  border-radius: 26px;
  padding: 14px;
  background: #fff;
  box-shadow: 0 18px 45px rgba(15, 23, 42, .06);
}

.sql-editor-head,
.sql-results-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.sql-editor-head h2,
.sql-snippets-card h2,
.sql-results-head h2,
.sql-chart-card h2,
.sql-empty-card h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.sql-editor-head p,
.sql-snippets-card p,
.sql-results-head p,
.sql-chart-card p,
.sql-empty-card p {
  margin: 5px 0 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.sql-editor-card textarea {
  width: 100%;
  min-height: 320px;
  border: 1px solid rgba(148, 163, 184, .24);
  border-radius: 22px;
  padding: 14px;
  background: #0f172a;
  color: #e5e7eb;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  line-height: 1.6;
  resize: vertical;
}

.sql-editor-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-top: 10px;
}

.sql-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 36px;
  padding: 0 10px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  font-size: 12px;
  font-weight: 900;
  cursor: pointer;
}

.sql-toggle input {
  width: 16px;
  height: 16px;
  accent-color: var(--sql-primary);
}

.sql-confirm {
  display: inline-grid;
  gap: 4px;
  color: #991b1b;
  font-size: 11px;
  font-weight: 1000;
}

.sql-confirm input {
  min-height: 36px;
  border-radius: 999px;
  border: 1px solid rgba(220, 38, 38, .28);
  padding: 0 12px;
  color: #991b1b;
  font-size: 12px;
  font-weight: 900;
}

.sql-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.sql-actions button,
.sql-history-toolbar button,
.sql-history-item button {
  min-height: 38px;
  border: 0;
  border-radius: 999px;
  padding: 0 12px;
  background: color-mix(in srgb, var(--sql-primary) 10%, white);
  color: var(--sql-primary);
  font-size: 12px;
  font-weight: 1000;
  cursor: pointer;
}

.sql-actions button:first-child {
  background: var(--sql-primary);
  color: #fff;
}

.sql-actions button:disabled {
  opacity: .45;
  cursor: not-allowed;
}

.sql-payload-preview {
  margin-top: 12px;
  border-radius: 18px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  overflow: hidden;
}

.sql-payload-preview summary {
  cursor: pointer;
  padding: 10px 12px;
  color: #334155;
  font-size: 12px;
  font-weight: 1000;
}

.sql-payload-preview pre {
  margin: 0;
  padding: 0 12px 12px;
  overflow-x: auto;
  white-space: pre-wrap;
  color: #475569;
  font-size: 11px;
  line-height: 1.5;
}

.sql-warning {
  margin-top: 12px;
  padding: 12px;
  border-radius: 20px;
  background: #fff7ed;
  border: 1px solid rgba(249, 115, 22, .24);
}

.sql-warning strong {
  display: block;
  color: #9a3412;
  font-size: 13px;
  font-weight: 1000;
}

.sql-warning p {
  margin: 5px 0 0;
  color: #c2410c;
  font-size: 12px;
  line-height: 1.5;
}

.sql-snippet-list {
  display: grid;
  gap: 8px;
  margin-top: 12px;
}

.sql-snippet-list button {
  display: grid;
  gap: 4px;
  text-align: left;
  border: 1px solid rgba(148, 163, 184, .18);
  border-radius: 18px;
  padding: 12px;
  background: #f8fafc;
  cursor: pointer;
}

.sql-snippet-list strong {
  color: #0f172a;
  font-size: 13px;
  font-weight: 1000;
}

.sql-snippet-list span {
  color: #64748b;
  font-size: 11px;
  line-height: 1.4;
  font-weight: 800;
}

.sql-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 1000;
  white-space: nowrap;
}

.sql-chip.green { background: #dcfce7; color: #166534; }
.sql-chip.blue { background: #dbeafe; color: #1d4ed8; }
.sql-chip.purple { background: #f3e8ff; color: #7e22ce; }
.sql-chip.orange { background: #ffedd5; color: #c2410c; }
.sql-chip.red { background: #fee2e2; color: #b91c1c; }
.sql-chip.gray { background: #f1f5f9; color: #475569; }

.sql-results-card,
.sql-history-card,
.sql-empty-card,
.sql-chart-grid {
  margin-top: 10px;
}

.sql-table-wrap {
  width: 100%;
  overflow-x: auto;
}

.sql-table-wrap table {
  width: 100%;
  min-width: 900px;
  border-collapse: collapse;
}

.sql-table-wrap th {
  text-align: left;
  color: #64748b;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .08em;
  padding: 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.sql-table-wrap td {
  padding: 12px 10px;
  border-bottom: 1px solid rgba(148, 163, 184, .16);
  font-size: 13px;
  vertical-align: top;
  max-width: 320px;
  overflow-wrap: anywhere;
}

.sql-result-card-grid,
.sql-chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.sql-result-card {
  border-radius: 20px;
  background: #0f172a;
  color: #e5e7eb;
  overflow: hidden;
}

.sql-result-card h3 {
  margin: 0;
  padding: 10px 12px;
  font-size: 13px;
  font-weight: 1000;
  border-bottom: 1px solid rgba(255,255,255,.1);
}

.sql-result-card pre,
.sql-history-item pre {
  margin: 0;
  padding: 12px;
  overflow-x: auto;
  white-space: pre-wrap;
  font-size: 11px;
  line-height: 1.5;
}

.sql-history-toolbar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.sql-history-toolbar input,
.sql-history-toolbar select {
  min-height: 42px;
  border: 1px solid rgba(148, 163, 184, .3);
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  color: #0f172a;
  font-size: 13px;
  font-weight: 800;
}

.sql-history-list {
  display: grid;
  gap: 10px;
  margin-top: 10px;
}

.sql-history-item {
  border: 1px solid rgba(148, 163, 184, .18);
  border-radius: 22px;
  padding: 12px;
  background: #fff;
}

.sql-history-item.failed {
  border-color: rgba(220, 38, 38, .22);
  background: #fff7f7;
}

.sql-history-top {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.sql-history-top > div {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.sql-history-top > span {
  color: #64748b;
  font-size: 11px;
  font-weight: 900;
}

.sql-history-item pre {
  margin-top: 10px;
  border-radius: 16px;
  background: #0f172a;
  color: #e5e7eb;
}

.sql-history-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}

.sql-history-meta span {
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0 8px;
  border-radius: 999px;
  background: #f8fafc;
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.sql-history-item p {
  margin: 10px 0 0;
  color: #b91c1c;
  font-size: 12px;
  font-weight: 850;
}

.sql-history-item button {
  margin-top: 10px;
}

.sql-chart-card h2 {
  margin: 0;
  font-size: 17px;
  font-weight: 1000;
  letter-spacing: -.04em;
}

.sql-chart-card p {
  margin: 5px 0 10px;
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
}

.sql-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 8px;
}

.sql-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 28px;
  border-radius: 999px;
  padding: 0 9px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, .18);
  color: #475569;
  font-size: 11px;
  font-weight: 900;
}

.sql-legend i {
  width: 9px;
  height: 9px;
  border-radius: 999px;
}

.sql-empty {
  grid-column: 1 / -1;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  background: #f8fafc;
  color: #64748b;
  font-size: 13px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, .35);
}

@media (min-width: 520px) {
  .sql-stat-grid,
  .sql-history-toolbar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sql-result-card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 760px) {
  .sql-chart-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 920px) {
  .sql-page {
    padding: 14px;
  }

  .sql-hero {
    grid-template-columns: 1fr auto;
    align-items: end;
    padding: 24px;
  }

  .sql-stat-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .sql-console-grid {
    grid-template-columns: 1.5fr .7fr;
    align-items: start;
  }

  .sql-history-toolbar {
    grid-template-columns: minmax(240px, 1fr) 180px auto;
  }
}
`;function B3({label:a,value:b,onChange:c,tabs:d}){return(0,L.jsxs)("div",{className:"ba-workspace-wrapper ba-finance-workspace ed-dev-subtabs",children:[(0,L.jsx)("style",{children:B4}),(0,L.jsx)("div",{className:"ba-contextual-actions ba-finance-subtabs","aria-label":a,children:(0,L.jsx)("div",{className:"ba-finance-subtab-list",role:"group","aria-label":a,children:d.map(a=>(0,L.jsx)("button",{type:"button","aria-pressed":a.key===b,className:a.key===b?"is-active":"",onClick:()=>{if(a.key===b)return;c(a.key);let d=document.querySelector(".role-shell.workspace-locked-scroll .app-content");d&&(d.scrollTop=0)},children:a.label},a.key))})})]})}let B4=`
.ed-dev-subtabs { width:100%;max-width:none;min-width:0;margin:0;padding:0; }
.ed-dev-subtabs .ba-finance-subtabs {
 display:flex;align-items:center;width:100%;min-width:0;margin:0 0 8px;
 padding:4px 0 5px;position:sticky;top:0;z-index:22;
 background:var(--eds-shell-bg,var(--bg,var(--surface,#fff)));
 border-bottom:1px solid var(--border,rgba(15,23,42,.10));
 backdrop-filter:blur(12px);
}
.ed-dev-subtabs .ba-finance-subtab-list {
 display:flex;align-items:center;gap:4px;min-width:0;width:100%;
 overflow-x:auto;white-space:nowrap;scrollbar-width:thin;
}
.ed-dev-subtabs .ba-finance-subtab-list button {
 flex:0 0 auto;min-height:31px;border:1px solid transparent;
 border-radius:7px;padding:4px 11px;background:transparent;
 color:var(--text,#172033);font:inherit;font-size:11px;font-weight:700;
 cursor:pointer;
}
.ed-dev-subtabs .ba-finance-subtab-list button.is-active {
 background:color-mix(in srgb,var(--primary-color,#2563eb) 10%,var(--surface,#fff));
 border-color:color-mix(in srgb,var(--primary-color,#2563eb) 25%,var(--border,#d4dae3));
}
.ed-dev-subtabs button:focus-visible {
 outline:2px solid var(--primary-color,#2563eb);outline-offset:2px;
}
@media print {.ed-dev-subtabs .ba-finance-subtabs {display:none!important;}}
`,B5=[{title:"Workspaces",defaultOpen:!0,items:[{key:"saasWorkspace",label:"SaaS Control",icon:"\uD83D\uDCE6"},{key:"developerTeam",label:"Platform Team",icon:"\uD83D\uDC65"},{key:"billingWorkspace",label:"Billing",icon:"\uD83D\uDCB3"},{key:"healthWorkspace",label:"Diagnostics",icon:"\uD83E\uDE7A"},{key:"developerToolsWorkspace",label:"Developer Tools",icon:"\uD83D\uDEE0️"},{key:"settings",label:"Settings",icon:"⚙️"}]}],B6={saasWorkspace:function(a){let[b,c]=N().useState("plans");return(0,L.jsxs)("div",{className:"eds-platform-workspace",children:[(0,L.jsx)(B3,{value:b,onChange:c,label:"SaaS control",tabs:[{key:"plans",label:"Plans & Packages"},{key:"subscriptions",label:"Active Subscriptions"},{key:"accounts",label:"Customer Accounts"},{key:"featureFlags",label:"Feature Flags"}]}),(0,L.jsx)("subscriptions"===b?vV:"accounts"===b?v7:"featureFlags"===b?yQ:u0,{...a})]})},developerTeam:function({navigate:a}){let{accountId:b,authenticated:c,loading:d}=(0,uM.F)(),{settings:e}=(0,uN.t)(),f=e?.primaryColor||"var(--primary-color, #2563eb)",[g,h]=(0,M.useState)("cards"),[i,j]=(0,M.useState)([]),[k,l]=(0,M.useState)(!0),[m,n]=(0,M.useState)(!1),[o,p]=(0,M.useState)(!1),[q,r]=(0,M.useState)(""),[s,t]=(0,M.useState)(""),[u,v]=(0,M.useState)(""),[w,x]=(0,M.useState)("all"),[y,z]=(0,M.useState)("all"),[A,B]=(0,M.useState)("all"),[C,D]=(0,M.useState)(!1),[E,F]=(0,M.useState)({...xU}),G=async(a=!1)=>{try{var c;let d,e,f,g;a?n(!0):l(!0),r(""),t("");let{users:h,memberships:i}=(c=await yj(),d=[c?.users,c?.appUsers,c?.accountUsers,c?.platformTeam,c?.members,c?.team,c?.data?.users,c?.data?.appUsers,c?.data?.accountUsers,c?.data?.platformTeam,c?.data?.members,c?.data,c?.items,c?.rows,c?.results,c].flatMap(yb).filter(Boolean),e=[c?.memberships,c?.userMemberships,c?.data?.memberships,c?.data?.userMemberships].flatMap(yb).filter(Boolean),f=d.flatMap(a=>[a?.memberships,a?.userMemberships,a?.membership?[a.membership]:[],a?.userMembership?[a.userMembership]:[]].flatMap(yb).map(b=>({...b,userId:b?.userId||x3(a),fullName:b?.fullName||a?.fullName||a?.name,email:b?.email||a?.email,accountId:b?.accountId||a?.accountId,active:b?.active??a?.active,status:b?.status||a?.status,mustChangePassword:b?.mustChangePassword??a?.mustChangePassword}))),g=d.filter(a=>{let b=String(a?.role||"").toLowerCase(),c=f.some(b=>String(b.userId||"")===String(x3(a)||""));return("developer"===b||"platform_team"===b||"platform_admin"===b)&&!c}).map(a=>({id:a?.membershipId||a?.userMembershipId||`membership_${x3(a)||a.email||Math.random()}`,accountId:a?.accountId,userId:x3(a),fullName:a?.fullName||a?.name,email:a?.email,role:a?.role==="developer"?"developer":"platform_team",schoolId:null,branchId:null,active:a?.active!==!1&&a?.status!=="inactive",status:a?.active===!1||a?.status==="inactive"?"inactive":"active",mustChangePassword:!!a?.mustChangePassword,isDeleted:!!a?.isDeleted})),{users:d,memberships:[...e,...f,...g]}),k=[],m=yf(h,i,k);if(m.length)for(let a of(j(m),yc(m),h)){let c=i.find(b=>String(b.userId||"")===String(x3(a)||"")||x0(b.email)===x0(a.email));if(!c)continue;let d=String(c.role||a.role||"").toLowerCase();if("developer"!==d&&"platform_team"!==d&&"platform_admin"!==d)continue;let e=yd(a,c,k),f=e?.platformRole||("developer"===d?"developer":"support_agent"),g=yp({id:String(x3(a)||""),userId:String(x3(a)||""),membershipId:String(c.id||""),fullName:a.fullName||a.name||c.fullName||a.email||"Platform Team Member",email:x0(a.email||c.email),phone:x1(a.phone),role:f,department:e?.department||"Support",title:e?.title||x5(f),status:!1===a.active||!1===c.active?"inactive":"active",permissions:e?.permissions||xT[f],temporaryPassword:e?.temporaryPassword||a.temporaryPassword||"",mustChangePassword:e?.mustChangePassword??a.mustChangePassword??c.mustChangePassword??!0},b||String(a.accountId||""));await yl({user:a,payload:g}),await ym({membership:c,user:a,payload:g})}else{let a=await x_("users","accountUsers","appUsers"),b=await x_("userMemberships","memberships"),c=yf(a,b,k);j(c.length?c:[])}}catch(b){r(b?.message||"Could not load platform team from the server. Showing local saved team records.");let a=yf(await x_("users","accountUsers","appUsers"),await x_("userMemberships","memberships"),[]);j(a.length?a:[])}finally{l(!1),n(!1)}},H=(0,M.useMemo)(()=>{let a=u.trim().toLowerCase();return i.filter(b=>{let c=`${b.fullName} ${b.email} ${b.phone||""} ${b.title||""} ${b.role} ${b.department} ${b.backendRole}`.toLowerCase();return(!a||c.includes(a))&&("all"===w||b.role===w)&&("all"===y||b.department===y)&&("all"===A||b.status===A)}).sort((a,b)=>("active"===a.status?-1:1)-("active"===b.status?-1:1)||xW(b.updatedAt||b.createdAt)-xW(a.updatedAt||a.createdAt))},[i,u,w,y,A]),I=i.filter(a=>"active"===a.status).length,J=i.filter(a=>"suspended"===a.status).length,K=i.filter(a=>"inactive"===a.status).length,N=i.filter(a=>a.mustChangePassword||a.temporaryPassword).length,O=i.filter(a=>a.permissions.canManageBackups||a.permissions.canManageReleases||a.permissions.canManageSettings||a.permissions.canViewAuditLogs).length,P=(0,M.useMemo)(()=>yo(i,a=>x5(a.role)),[i]),Q=(0,M.useMemo)(()=>yo(i,a=>a.department),[i]),R=(0,M.useMemo)(()=>yo(i,a=>a.status),[i]),S=(0,M.useMemo)(()=>{let a=((a=6)=>{let b=new Date;return Array.from({length:a},(c,d)=>{let e=new Date(b.getFullYear(),b.getMonth()-(a-1-d),1);return new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(e)})})(6),b=new Map(a.map(a=>[a,0]));return i.forEach(a=>{let c,d=(c=xW(a.createdAt))?new Intl.DateTimeFormat("en-GH",{month:"short",year:"2-digit"}).format(new Date(c)):"Unknown";b.has(d)&&b.set(d,(b.get(d)||0)+1)}),a.map(a=>({label:a,value:b.get(a)||0}))},[i]),T=a=>{r(""),t(""),F({id:a.id,userId:a.userId,membershipId:a.membershipId,fullName:a.fullName,email:a.email,phone:a.phone||"",role:a.role,department:a.department,title:a.title||"",status:a.status,permissions:{...xS,...a.permissions},temporaryPassword:a.temporaryPassword||"",mustChangePassword:a.mustChangePassword??!0}),D(!0)},U=()=>{o||(D(!1),F({...xU,permissions:{...xU.permissions}}))},V=async a=>{a.preventDefault();let c=b?E.fullName.trim()?E.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(E.email.trim())?E.id||E.temporaryPassword.trim()?"":"Temporary password is required for the first login.":"Please enter a valid email address.":"Team member email is required because the person signs in with email and password.":"Team member name is required.":"Account session is missing. Please log out and sign in again.";if(c)return r(c);try{var d,e;let a;p(!0),r(""),t("");let c=yp(E,b),f=await yk(c),g=yi(f,{id:c.userId,accountId:c.accountId,fullName:c.fullName,email:c.email,phone:c.phone,role:c.role,active:c.active}),h=(d={id:c.membershipId,accountId:c.accountId,userId:x3(g),email:c.email,fullName:c.fullName,role:c.role,active:c.active,schoolId:null,branchId:null},f?.membership||f?.userMembership||f?.data?.membership||f?.data?.userMembership||yi(f,{})?.memberships?.[0]||d),i={...c,userId:String(x3(g)||c.userId||""),membershipId:String(h.id||c.membershipId||"")};await yl({user:g,payload:i}),await ym({membership:h,user:g,payload:i}),e={id:String(x3(g)||c.email),userId:String(x3(g)||""),membershipId:String(h.id||""),email:c.email,platformRole:c.platformRole,backendRole:c.role,department:c.department,title:c.title,permissions:c.permissions,temporaryPassword:c.temporaryPassword,mustChangePassword:c.mustChangePassword,updatedAt:Date.now()},a=[],a.some(a=>e.userId&&a.userId===e.userId||x0(a.email)===x0(e.email))?a.map(a=>e.userId&&a.userId===e.userId||x0(a.email)===x0(e.email)?{...a,...e,updatedAt:Date.now()}:a):[(Date.now(),e.createdAt||Date.now()),...a];let k=ye({id:x3(g)||c.email,userId:x3(g),membershipId:h.id,fullName:c.fullName,email:c.email,phone:c.phone,role:c.platformRole,backendRole:c.role,department:c.department,title:c.title,permissions:c.permissions,status:c.status,temporaryPassword:c.temporaryPassword,mustChangePassword:c.mustChangePassword,createdAt:g?.createdAt||Date.now(),updatedAt:Date.now()},0);j(a=>{let b=a.some(a=>a.userId===k.userId||x0(a.email)===x0(k.email))?a.map(a=>a.userId===k.userId||x0(a.email)===x0(k.email)?{...a,...k,createdAt:a.createdAt||k.createdAt}:a):[k,...a];return yc(b),b}),t(E.id?"Team member updated. Their login account remains active in AppUser/UserMembership.":`Team member added. Temporary password: ${c.temporaryPassword}`),U()}catch(a){r(a?.message||"Could not save platform team member.")}finally{p(!1)}},W=async(a,b)=>{try{r(""),t("");let c=String(a.userId||"").trim();if(c){let a=encodeURIComponent(c);await x9(`/accounts/users/${a}/status`,{method:"PATCH",body:{active:"active"===b}}).catch(async()=>x9(`/accounts/users/${a}`,{method:"PATCH",body:{active:"active"===b,status:b}}))}j(c=>{let d=c.map(c=>c.id===a.id?{...c,status:b,updatedAt:Date.now()}:c);return yc(d),d}),[].map(b=>b.userId===a.userId||x0(b.email)===x0(a.email)?{...b,updatedAt:Date.now()}:b),t(`Team member ${"active"===b?"reactivated":b}.`)}catch(a){r(a?.message||"Could not update team member status.")}},X=async a=>{try{r(""),t("");let b=String(a.membershipId||"").trim(),c=String(a.userId||"").trim();b&&!b.startsWith("membership_")?await x9(`/memberships/${encodeURIComponent(b)}`,{method:"DELETE"}).catch(()=>null):c&&await x9(`/accounts/users/${encodeURIComponent(c)}/status`,{method:"PATCH",body:{active:!1}}).catch(()=>null),await yn(a),[].filter(b=>b.userId!==a.userId&&b.membershipId!==a.membershipId&&x0(b.email)!==x0(a.email)),j(b=>{let c=b.filter(b=>b.id!==a.id);return yc(c),c}),t("Team member removed from the local list and backend access was disabled/removed where possible.")}catch(a){r(a?.message||"Could not remove platform team member.")}};return k||d?(0,L.jsxs)("main",{className:"devteam-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:yy}),(0,L.jsxs)("section",{className:"devteam-state",children:[(0,L.jsx)("div",{className:"devteam-spinner"}),(0,L.jsx)("h2",{children:"Loading platform team..."}),(0,L.jsx)("p",{children:"Preparing staff login accounts, memberships, permissions and departments."})]})]}):c&&b?(0,L.jsxs)("main",{className:"devteam-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:yy}),(0,L.jsxs)("section",{className:"devteam-hero",children:[(0,L.jsxs)("div",{children:[(0,L.jsx)("span",{className:"devteam-eyebrow",children:"Auth-first platform workforce"}),(0,L.jsx)("h1",{children:"Developer Team"}),(0,L.jsx)("p",{children:"Add people who can actually log into Eleeveon. This creates backend AppUser and UserMembership records with no school or branch assignment, then stores department and permission metadata for team operations."})]}),(0,L.jsxs)("div",{className:"devteam-hero-actions",children:[(0,L.jsxs)("div",{className:"devteam-switch",children:[(0,L.jsx)("button",{type:"button",className:"cards"===g?"active":"",onClick:()=>h("cards"),children:"Cards"}),(0,L.jsx)("button",{type:"button",className:"table"===g?"active":"",onClick:()=>h("table"),children:"Table"}),(0,L.jsx)("button",{type:"button",className:"analytics"===g?"active":"",onClick:()=>h("analytics"),children:"Charts"})]}),(0,L.jsx)("button",{type:"button",className:"devteam-white-btn",onClick:()=>{r(""),t(""),F({...xU,permissions:{...xU.permissions},temporaryPassword:""}),D(!0)},children:"Add Login Member"}),(0,L.jsx)("button",{type:"button",className:"devteam-glass-btn",onClick:()=>G(!0),disabled:m,children:m?"Refreshing...":"Refresh"})]})]}),(q||s)&&(0,L.jsx)("section",{className:`devteam-alert ${q?"error":"success"}`,children:q||s}),(0,L.jsxs)("section",{className:"devteam-stat-grid",children:[(0,L.jsx)(yu,{label:"Team Members",value:i.length,detail:`${H.length} shown`,icon:"\uD83D\uDC65"}),(0,L.jsx)(yu,{label:"Active Logins",value:I,detail:`${K} inactive`,icon:"✅"}),(0,L.jsx)(yu,{label:"Suspended",value:J,detail:"Blocked access",icon:"⛔"}),(0,L.jsx)(yu,{label:"Temporary Passwords",value:N,detail:"Initial login access",icon:"\uD83D\uDD11"}),(0,L.jsx)(yu,{label:"Sensitive Access",value:O,detail:"Audit/release/backup/settings",icon:"\uD83D\uDD10"})]}),(0,L.jsxs)("section",{className:"devteam-toolbar",children:[(0,L.jsx)("input",{value:u,onChange:a=>v(a.target.value),placeholder:"Search name, email, phone, title..."}),(0,L.jsxs)("select",{value:w,onChange:a=>x(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All roles"}),xP.map(a=>(0,L.jsx)("option",{value:a.value,children:a.label},a.value))]}),(0,L.jsxs)("select",{value:y,onChange:a=>z(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All departments"}),xQ.map(a=>(0,L.jsx)("option",{value:a,children:a},a))]}),(0,L.jsxs)("select",{value:A,onChange:a=>B(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All statuses"}),(0,L.jsx)("option",{value:"active",children:"Active"}),(0,L.jsx)("option",{value:"inactive",children:"Inactive"}),(0,L.jsx)("option",{value:"suspended",children:"Suspended"})]}),(0,L.jsx)("button",{type:"button",onClick:()=>{v(""),x("all"),z("all"),B("all")},children:"Reset"})]}),"analytics"===g?(0,L.jsx)(ys,{roleChart:P,departmentChart:Q,statusChart:R,growthChart:S}):"table"===g?(0,L.jsx)(yr,{members:H,onEdit:T,onStatus:W,onDelete:X}):(0,L.jsx)(yq,{members:H,onEdit:T,onStatus:W,onDelete:X,navigate:a}),C&&(0,L.jsx)(yt,{form:E,updateForm:(a,b)=>{F(c=>{let d={...c,[a]:b};if("role"===a&&(d.permissions={...xT[b]},d.title=c.title||x5(b)),"email"===a){let a=x0(String(b));d.email=a,c.temporaryPassword&&c.temporaryPassword!==x2(c.email).slice(0,c.temporaryPassword.length)||(d.temporaryPassword=x2(a))}return d})},setForm:F,saving:o,onClose:U,onSubmit:V})]}):(0,L.jsxs)("main",{className:"devteam-page",style:{"--dev-primary":f},children:[(0,L.jsx)("style",{children:yy}),(0,L.jsxs)("section",{className:"devteam-state",children:[(0,L.jsx)("h2",{children:"Developer access required"}),(0,L.jsx)("p",{children:"Sign in with a developer account to manage platform team members."})]})]})},billingWorkspace:function(a){let[b,c]=N().useState("invoices");return(0,L.jsxs)("div",{className:"eds-platform-workspace",children:[(0,L.jsx)(B3,{value:b,onChange:c,label:"Platform billing",tabs:[{key:"invoices",label:"Invoices"},{key:"payments",label:"Payments"}]}),(0,L.jsx)("payments"===b?xg:wm,{...a})]})},healthWorkspace:function(a){let[b,c]=N().useState("systemHealth");return(0,L.jsxs)("div",{className:"eds-platform-workspace",children:[(0,L.jsx)(B3,{value:b,onChange:c,label:"Platform diagnostics",tabs:[{key:"systemHealth",label:"System Health"},{key:"errorReports",label:"Error Reports"},{key:"databaseTools",label:"Database Health"}]}),(0,L.jsx)("errorReports"===b?z9:"databaseTools"===b?A$:xA,{...a})]})},developerToolsWorkspace:function(a){let[b,c]=N().useState("databaseStudio"),d="databaseDesigner"===b?Bv:"sqlConsole"===b?BV:"backups"===b?zj:"integrations"===b?zN:"releases"===b?AB:Bb;return(0,L.jsxs)("div",{className:"eds-platform-workspace",children:[(0,L.jsx)(B3,{value:b,onChange:c,label:"Developer tools",tabs:[{key:"databaseStudio",label:"Database Studio"},{key:"databaseDesigner",label:"Database Designer"},{key:"sqlConsole",label:"Safe SQL Console"},{key:"backups",label:"Backup & Restore"},{key:"integrations",label:"API & Integrations"},{key:"releases",label:"Release Manager"}]}),(0,L.jsx)(d,{...a})]})},settings:function(){let{accountId:a,authenticated:b,loading:c}=(0,uM.F)(),{settings:d}=(0,uN.t)(),e=d?.primaryColor||"var(--primary-color, #2563eb)",[f,g]=(0,M.useState)("cards"),[h,i]=(0,M.useState)(xM),[j,k]=(0,M.useState)(!0),[l,m]=(0,M.useState)(!1),[n,o]=(0,M.useState)(!1),[p,q]=(0,M.useState)(""),[r,s]=(0,M.useState)(""),[t,u]=(0,M.useState)(""),[v,w]=(0,M.useState)("all"),x=async(a=!1)=>{try{a?m(!0):k(!0),q("");let b=await (0,uL.uE)("/developer/settings").catch(async()=>(0,uL.uE)("/settings/developer").catch(()=>null)),c=function(a,b=[]){if(Array.isArray(a))return a;if(!a||"object"!=typeof a)return[];for(let c of b)if(Array.isArray(a[c]))return a[c];return Array.isArray(a.data)?a.data:Array.isArray(a.items)?a.items:Array.isArray(a.results)?a.results:Array.isArray(a.records)?a.records:Array.isArray(a.rows)?a.rows:[]}(b,["settings","items","records"]);i(c.length?c:xM)}catch(a){q(a?.message||"Could not load developer settings."),i(xM)}finally{k(!1),m(!1)}},y=(0,M.useMemo)(()=>Array.from(new Set(h.map(a=>a.category))).sort(),[h]),z=(0,M.useMemo)(()=>{let a=t.trim().toLowerCase();return h.filter(b=>{let c=`${b.key} ${b.label} ${b.category} ${b.description||""}`.toLowerCase();return(!a||c.includes(a))&&("all"===v||b.category===v)})},[h,t,v]),A=h.filter(a=>"boolean"===a.type&&!!a.value).length,B=h.filter(a=>a.sensitive).length,C=(0,M.useMemo)(()=>xE(h,a=>a.category),[h]),D=(0,M.useMemo)(()=>xE(h,a=>a.type||typeof a.value),[h]),E=(a,b)=>{i(c=>c.map(c=>c.key===a?{...c,value:b,updatedAt:Date.now()}:c))},F=async()=>{try{o(!0),q(""),s(""),await (0,uL.uE)("/developer/settings",{method:"PUT",body:JSON.stringify({settings:h})}).catch(async()=>(0,uL.uE)("/settings/developer",{method:"PUT",body:JSON.stringify({settings:h})})),s("Developer settings saved.")}catch(a){q(a?.message||"Could not save settings.")}finally{o(!1)}};return j||c?(0,L.jsxs)("main",{className:"devx-page",style:{"--dev-primary":e},children:[(0,L.jsx)("style",{children:xN}),(0,L.jsx)(xG,{title:"Loading developer settings...",text:"Preparing platform configuration and controls."})]}):b&&a?(0,L.jsxs)("main",{className:"devx-page",style:{"--dev-primary":e},children:[(0,L.jsx)("style",{children:xN}),(0,L.jsx)(xF,{eyebrow:"System",title:"Developer Settings",description:"Control platform defaults, feature switches, billing preferences and operational settings.",viewMode:f,onViewMode:g,onRefresh:()=>x(!0),refreshing:l,actions:(0,L.jsx)("button",{className:"devx-white-btn",type:"button",onClick:F,disabled:n,children:n?"Saving...":"Save Settings"})}),(p||r)&&(0,L.jsx)("section",{className:`devx-alert ${p?"error":"success"}`,children:p||r}),(0,L.jsxs)("section",{className:"devx-stat-grid",children:[(0,L.jsx)(xH,{label:"Settings",value:h.length,detail:`${z.length} shown`,icon:"⚙️"}),(0,L.jsx)(xH,{label:"Categories",value:y.length,detail:"Configuration groups",icon:"\uD83E\uDDE9"}),(0,L.jsx)(xH,{label:"Enabled Flags",value:A,detail:"Boolean switches on",icon:"✅"}),(0,L.jsx)(xH,{label:"Sensitive",value:B,detail:"Protected values",icon:"\uD83D\uDD10"})]}),(0,L.jsxs)("section",{className:"devx-toolbar",children:[(0,L.jsx)("input",{value:t,onChange:a=>u(a.target.value),placeholder:"Search setting, key, description..."}),(0,L.jsxs)("select",{value:v,onChange:a=>w(a.target.value),children:[(0,L.jsx)("option",{value:"all",children:"All categories"}),y.map(a=>(0,L.jsx)("option",{value:a,children:a},a))]}),(0,L.jsx)("button",{type:"button",onClick:()=>{u(""),w("all")},children:"Reset"})]}),"analytics"===f?(0,L.jsxs)("section",{className:"devx-chart-grid",children:[(0,L.jsx)(xK,{title:"Settings by category",description:"Configuration spread across system areas.",children:(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(pA,{data:C,layout:"vertical",children:[(0,L.jsx)(q1,{strokeDasharray:"3 3",horizontal:!1}),(0,L.jsx)(rh,{type:"number",allowDecimals:!1,tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(rs,{type:"category",dataKey:"label",width:110,tickLine:!1,axisLine:!1,fontSize:11}),(0,L.jsx)(sZ,{}),(0,L.jsx)(uK,{dataKey:"value",fill:"var(--dev-primary)",radius:[0,12,12,0]})]})})}),(0,L.jsxs)(xK,{title:"Setting types",description:"Text, number and boolean setting mix.",children:[(0,L.jsx)(aA,{width:"100%",height:260,children:(0,L.jsxs)(vc,{children:[(0,L.jsx)(sZ,{}),(0,L.jsx)(vO,{data:D,dataKey:"value",nameKey:"label",innerRadius:58,outerRadius:92,paddingAngle:3,children:D.map((a,b)=>(0,L.jsx)(s$,{fill:xC[b%xC.length]},b))})]})}),(0,L.jsx)(xL,{rows:D})]})]}):"table"===f?(0,L.jsx)("section",{className:"devx-table-card",children:(0,L.jsx)("div",{className:"devx-table-wrap",children:(0,L.jsxs)("table",{children:[(0,L.jsx)("thead",{children:(0,L.jsxs)("tr",{children:[(0,L.jsx)("th",{children:"Setting"}),(0,L.jsx)("th",{children:"Key"}),(0,L.jsx)("th",{children:"Category"}),(0,L.jsx)("th",{children:"Value"}),(0,L.jsx)("th",{children:"Type"}),(0,L.jsx)("th",{children:"Updated"})]})}),(0,L.jsx)("tbody",{children:z.map(a=>(0,L.jsxs)("tr",{children:[(0,L.jsxs)("td",{children:[(0,L.jsx)("strong",{children:a.label}),(0,L.jsx)("br",{}),(0,L.jsx)("small",{children:a.description||""})]}),(0,L.jsx)("td",{children:a.key}),(0,L.jsx)("td",{children:a.category}),(0,L.jsx)("td",{children:a.sensitive?"••••••":String(a.value)}),(0,L.jsx)("td",{children:a.type||typeof a.value}),(0,L.jsx)("td",{children:xD(a.updatedAt)})]},a.key))})]})})}):(0,L.jsxs)("section",{className:"devx-card-grid",children:[z.map(a=>(0,L.jsxs)("article",{className:"devx-card",children:[(0,L.jsxs)("div",{className:"devx-record-top",children:[(0,L.jsx)("span",{className:"devx-avatar",children:"⚙️"}),(0,L.jsx)(xI,{tone:"boolean"===a.type?a.value?"green":"gray":"blue",children:a.category})]}),(0,L.jsx)("h3",{children:a.label}),(0,L.jsx)("p",{children:a.description||a.key}),(0,L.jsxs)("div",{className:"devx-meta-grid",children:[(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Key"}),a.key]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Type"}),a.type||typeof a.value]}),(0,L.jsxs)("span",{children:[(0,L.jsx)("b",{children:"Updated"}),xD(a.updatedAt)]})]}),(0,L.jsx)("div",{className:"devx-actions",children:"boolean"===a.type?(0,L.jsx)("button",{className:"primary",type:"button",onClick:()=>E(a.key,!a.value),children:a.value?"Disable":"Enable"}):"number"===a.type?(0,L.jsx)("input",{type:"number",value:Number(a.value||0),onChange:b=>E(a.key,Number(b.target.value))}):(0,L.jsx)("input",{value:String(a.value??""),onChange:b=>E(a.key,b.target.value)})})]},a.key)),!z.length&&(0,L.jsx)(xJ,{text:"No settings match your filters."})]})]}):(0,L.jsxs)("main",{className:"devx-page",style:{"--dev-primary":e},children:[(0,L.jsx)("style",{children:xN}),(0,L.jsx)(xG,{title:"Developer access required",text:"Sign in to manage developer settings."})]})},plans:u0,subscriptions:vV,accounts:v7,featureFlags:yQ,invoices:wm,payments:xg,systemHealth:xA,errorReports:z9,databaseTools:A$,databaseStudio:Bb,databaseDesigner:Bv,sqlConsole:BV,backups:zj,integrations:zN,releases:AB};function B7(){return(0,L.jsx)(O.A,{portalTitle:"Developer Portal",portalSubtitle:"Platform operations, customers, billing and technical tools",homeKey:"saasWorkspace",allowedRoles:["developer","platform_team"],navSections:B5,navigationMode:"branch-workspace",routes:B6,lockedContext:!1,requireSchool:!1,requireBranch:!1})}},1932:a=>{"use strict";a.exports=require("url")},2420:(a,b,c)=>{let d=c(54260),e=c(98165),f=c(13711);b.orderBy=function(a,b,c,g){if(null==a)return[];c=g?void 0:c,Array.isArray(a)||(a=Object.values(a)),Array.isArray(b)||(b=null==b?[null]:[b]),0===b.length&&(b=[null]),Array.isArray(c)||(c=null==c?[]:[c]),c=c.map(a=>String(a));let h=(a,b)=>{let c=a;for(let a=0;a<b.length&&null!=c;++a)c=c[b[a]];return c},i=b.map(a=>(Array.isArray(a)&&1===a.length&&(a=a[0]),null==a||"function"==typeof a||Array.isArray(a)||f.isKey(a))?a:{key:a,path:d.toPath(a)});return a.map(a=>({original:a,criteria:i.map(b=>{var c,d;return c=b,null==(d=a)||null==c?d:"object"==typeof c&&"key"in c?Object.hasOwn(d,c.key)?d[c.key]:h(d,c.path):"function"==typeof c?c(d):Array.isArray(c)?h(d,c):"object"==typeof d?d[c]:d})})).slice().sort((a,b)=>{for(let d=0;d<i.length;d++){let f=e.compareValues(a.criteria[d],b.criteria[d],c[d]);if(0!==f)return f}return 0}).map(a=>a.original)}},2729:(a,b,c)=>{"use strict";function d({children:a}){return a}c.r(b),c.d(b,{default:()=>d}),c(91986)},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3761:(a,b)=>{b.isObjectLike=function(a){return"object"==typeof a&&null!==a}},4317:(a,b)=>{b.isEqualsSameValueZero=function(a,b){return a===b||Number.isNaN(a)&&Number.isNaN(b)}},5569:(a,b,c)=>{let d=c(64226);b.isArguments=function(a){return null!==a&&"object"==typeof a&&"[object Arguments]"===d.getTag(a)}},5793:(a,b,c)=>{let d=c(94671),e=c(70837),f=c(58071),g=c(64226),h=c(55587),i=c(17394);function j(a,b,c,f=new Map,l){let m=l?.(a,b,c,f);if(void 0!==m)return m;if(d.isPrimitive(a))return a;if(f.has(a))return f.get(a);if(Array.isArray(a)){let b=Array(a.length);f.set(a,b);for(let d=0;d<a.length;d++)b[d]=j(a[d],d,c,f,l);return Object.hasOwn(a,"index")&&(b.index=a.index),Object.hasOwn(a,"input")&&(b.input=a.input),b}if(a instanceof Date)return new Date(a.getTime());if(a instanceof RegExp){let b=new RegExp(a.source,a.flags);return b.lastIndex=a.lastIndex,b}if(a instanceof Map){let b=new Map;for(let[d,e]of(f.set(a,b),a))b.set(d,j(e,d,c,f,l));return b}if(a instanceof Set){let b=new Set;for(let d of(f.set(a,b),a))b.add(j(d,void 0,c,f,l));return b}if(i.isBuffer(a))return a.subarray();if(e.isTypedArray(a)){let b=new(Object.getPrototypeOf(a)).constructor(a.length);f.set(a,b);for(let d=0;d<a.length;d++)b[d]=j(a[d],d,c,f,l);return b}if(a instanceof ArrayBuffer||"u">typeof SharedArrayBuffer&&a instanceof SharedArrayBuffer)return a.slice(0);if(a instanceof DataView){let b=new DataView(a.buffer.slice(0),a.byteOffset,a.byteLength);return f.set(a,b),k(b,a,c,f,l),b}if("u">typeof File&&a instanceof File){let b=new File([a],a.name,{type:a.type});return f.set(a,b),k(b,a,c,f,l),b}if("u">typeof Blob&&a instanceof Blob){let b=new Blob([a],{type:a.type});return f.set(a,b),k(b,a,c,f,l),b}if(a instanceof Error){let b=structuredClone(a);return f.set(a,b),b.message=a.message,b.name=a.name,b.stack=a.stack,b.cause=a.cause,b.constructor=a.constructor,k(b,a,c,f,l),b}if(a instanceof Boolean){let b=new Boolean(a.valueOf());return f.set(a,b),k(b,a,c,f,l),b}if(a instanceof Number){let b=new Number(a.valueOf());return f.set(a,b),k(b,a,c,f,l),b}if(a instanceof String){let b=new String(a.valueOf());return f.set(a,b),k(b,a,c,f,l),b}if("object"==typeof a&&function(a){switch(g.getTag(a)){case h.argumentsTag:case h.arrayTag:case h.arrayBufferTag:case h.dataViewTag:case h.booleanTag:case h.dateTag:case h.float32ArrayTag:case h.float64ArrayTag:case h.int8ArrayTag:case h.int16ArrayTag:case h.int32ArrayTag:case h.mapTag:case h.numberTag:case h.objectTag:case h.regexpTag:case h.setTag:case h.stringTag:case h.symbolTag:case h.uint8ArrayTag:case h.uint8ClampedArrayTag:case h.uint16ArrayTag:case h.uint32ArrayTag:return!0;default:return!1}}(a)){let b=Object.create(Object.getPrototypeOf(a));return f.set(a,b),k(b,a,c,f,l),b}return a}function k(a,b,c=a,d,e){let g=[...Object.keys(b),...f.getSymbols(b)];for(let f=0;f<g.length;f++){let h=g[f],i=Object.getOwnPropertyDescriptor(a,h);(null==i||i.writable)&&(a[h]=j(b[h],h,c,d,e))}}b.cloneDeepWith=function(a,b){return j(a,void 0,a,new Map,b)},b.cloneDeepWithImpl=j,b.copyProperties=k},6692:(a,b,c)=>{let d=c(94671),e=c(4317);c(29188);let f=c(18642);function g(a,b,c,i){if(b===a)return!0;switch(typeof b){case"object":return function(a,b,c,e){if(null==b)return!0;if(Array.isArray(b))return h(a,b,c,e);if(b instanceof Map){var f,g,i,j,k=a,l=b,m=c,n=e;if(0===l.size)return!0;if(!(k instanceof Map))return!1;for(let[a,b]of l.entries())if(!1===m(k.get(a),b,a,k,l,n))return!1;return!0}if(b instanceof Set){return f=a,g=b,i=c,j=e,0===g.size||f instanceof Set&&h([...f],[...g],i,j)}let o=Object.keys(b);if(null==a||d.isPrimitive(a))return 0===o.length;if(0===o.length)return!0;if(e?.has(b))return e.get(b)===a;e?.set(b,a);try{for(let f=0;f<o.length;f++){let g=o[f];if(!d.isPrimitive(a)&&!(g in a)||void 0===b[g]&&void 0!==a[g]||null===b[g]&&null!==a[g]||!c(a[g],b[g],g,a,b,e))return!1}return!0}finally{e?.delete(b)}}(a,b,c,i);case"function":if(Object.keys(b).length>0)return g(a,{...b},c,i);return e.isEqualsSameValueZero(a,b);default:if(!f.isObject(a))return e.isEqualsSameValueZero(a,b);if("string"==typeof b)return""===b;return!0}}function h(a,b,c,d){if(0===b.length)return!0;if(!Array.isArray(a))return!1;let e=new Set;for(let f=0;f<b.length;f++){let g=b[f],h=!1;for(let i=0;i<a.length;i++){if(e.has(i))continue;let j=a[i],k=!1;if(c(j,g,f,a,b,d)&&(k=!0),k){e.add(i),h=!0;break}}if(!h)return!1}return!0}b.isMatchWith=function a(b,c,d){return"function"!=typeof d?a(b,c,()=>void 0):g(b,c,function a(b,c,e,f,h,i){let j=d(b,c,e,f,h,i);return void 0!==j?!!j:g(b,c,a,i)},new Map)}},7257:(a,b)=>{b.isSymbol=function(a){return"symbol"==typeof a||a instanceof Symbol}},7725:(a,b,c)=>{a.exports=c(94542).isPlainObject},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12346:(a,b)=>{b.debounce=function(a,b,{signal:c,edges:d}={}){let e,f=null,g=null!=d&&d.includes("leading"),h=null==d||d.includes("trailing"),i=()=>{null!==f&&(a.apply(e,f),e=void 0,f=null)},j=null,k=()=>{null!=j&&clearTimeout(j),j=setTimeout(()=>{j=null,h&&i(),l()},b)},l=()=>{null!==j&&(clearTimeout(j),j=null),e=void 0,f=null},m=function(...a){if(c?.aborted)return;e=this,f=a;let b=null==j;k(),g&&b&&i()};return m.schedule=k,m.cancel=l,m.flush=()=>{i()},c?.addEventListener("abort",l,{once:!0}),m}},13711:(a,b,c)=>{let d=c(7257),e=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,f=/^\w*$/;b.isKey=function(a,b){return!Array.isArray(a)&&(!!("number"==typeof a||"boolean"==typeof a||null==a||d.isSymbol(a))||"string"==typeof a&&(f.test(a)||!e.test(a))||null!=b&&Object.hasOwn(b,a))}},15637:(a,b,c)=>{let d=c(12346);b.debounce=function(a,b=0,c={}){let e;"object"!=typeof c&&(c={});let{leading:f=!1,trailing:g=!0,maxWait:h}=c,i=[,,];f&&(i[0]="leading"),g&&(i[1]="trailing");let j=null,k=d.debounce(function(...b){e=a.apply(this,b),j=null},b,{edges:i}),l=function(...b){return null!=h&&(null===j&&(j=Date.now()),Date.now()-j>=h)?(e=a.apply(this,b),j=Date.now(),k.cancel(),k.schedule(),e):(k.apply(this,b),e)};return l.cancel=k.cancel,l.flush=()=>(k.flush(),e),l}},15724:(a,b,c)=>{let d=c(46248),e=c(61259),f=c(2420);b.sortBy=function(a,...b){let c=b.length;return c>1&&e.isIterateeCall(a,b[0],b[1])?b=[]:c>2&&e.isIterateeCall(b[0],b[1],b[2])&&(b=[b[0]]),f.orderBy(a,d.flatten(b),["asc"])}},17394:(a,b,c)=>{let d=c(99968);b.isBuffer=function(a){return void 0!==d.globalThis_.Buffer&&d.globalThis_.Buffer.isBuffer(a)}},17560:(a,b)=>{let c=/^(?:0|[1-9]\d*)$/;b.isIndex=function(a,b=Number.MAX_SAFE_INTEGER){switch(typeof a){case"number":return Number.isInteger(a)&&a>=0&&a<b;case"symbol":return!1;case"string":return c.test(a)}}},17891:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/get-segment-param")},18156:(a,b,c)=>{let d=c(64612);b.cloneDeep=function(a){return d.cloneDeepWith(a)}},18642:(a,b)=>{b.isObject=function(a){return null!==a&&("object"==typeof a||"function"==typeof a)}},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},19865:(a,b)=>{b.isDeepKey=function(a){switch(typeof a){case"number":case"symbol":return!1;case"string":return a.includes(".")||a.includes("[")||a.includes("]")}}},20215:(a,b,c)=>{let d=c(32547),e=c(56022),f=c(43416),g=c(89861);b.iteratee=function(a){if(null==a)return d.identity;switch(typeof a){case"function":return a;case"object":if(Array.isArray(a)&&2===a.length)return g.matchesProperty(a[0],a[1]);return f.matches(a);case"string":case"symbol":case"number":return e.property(a)}}},20274:(a,b,c)=>{"use strict";a.exports=c(81486)},20999:(a,b,c)=>{"use strict";a.exports=c(41421)},21820:a=>{"use strict";a.exports=require("os")},26613:(a,b,c)=>{a.exports=c(15724).sortBy},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},27910:a=>{"use strict";a.exports=require("stream")},28354:a=>{"use strict";a.exports=require("util")},29021:a=>{"use strict";a.exports=require("fs")},29188:(a,b,c)=>{c(4317)},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},32528:(a,b)=>{b.toKey=function(a){return"string"==typeof a||"symbol"==typeof a?a:Object.is(a?.valueOf?.(),-0)?"-0":String(a)}},32547:(a,b)=>{b.identity=function(a){return a}},33873:a=>{"use strict";a.exports=require("path")},34631:a=>{"use strict";a.exports=require("tls")},34733:(a,b,c)=>{"use strict";c(38149)},35214:(a,b,c)=>{Promise.resolve().then(c.bind(c,52830))},36853:(a,b,c)=>{let d=c(5793);b.cloneDeep=function(a){return d.cloneDeepWithImpl(a,void 0,a,new Map,void 0)}},37228:(a,b,c)=>{a.exports=c(44085).uniqBy},38149:(a,b,c)=>{"use strict";var d=c(67484);d.useSyncExternalStore,d.useRef,d.useEffect,d.useMemo,d.useDebugValue},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},41421:(a,b,c)=>{"use strict";var d=c(67484),e=c(42237),f="function"==typeof Object.is?Object.is:function(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},g=e.useSyncExternalStore,h=d.useRef,i=d.useEffect,j=d.useMemo,k=d.useDebugValue;b.useSyncExternalStoreWithSelector=function(a,b,c,d,e){var l=h(null);if(null===l.current){var m={hasValue:!1,value:null};l.current=m}else m=l.current;var n=g(a,(l=j(function(){function a(a){if(!i){if(i=!0,g=a,a=d(a),void 0!==e&&m.hasValue){var b=m.value;if(e(b,a))return h=b}return h=a}if(b=h,f(g,a))return b;var c=d(a);return void 0!==e&&e(b,c)?(g=a,b):(g=a,h=c)}var g,h,i=!1,j=void 0===c?null:c;return[function(){return a(b())},null===j?void 0:function(){return a(j())}]},[b,c,d,e]))[0],l[1]);return i(function(){m.hasValue=!0,m.value=n},[n]),k(n),n}},41788:(a,b,c)=>{a.exports=c(86290).throttle},42237:(a,b,c)=>{"use strict";a.exports=c(96862)},43416:(a,b,c)=>{let d=c(36853),e=c(60428);b.matches=function(a){return a=d.cloneDeep(a),b=>e.isMatch(b,a)}},43954:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/interception-routes")},44085:(a,b,c)=>{let d=c(70200),e=c(92963),f=c(32547),g=c(20215),h=c(83456);b.uniqBy=function(a,b=f.identity){return h.isArrayLikeObject(a)?d.uniqBy(Array.from(a),e.ary(g.iteratee(b),1)):[]}},44150:(a,b,c)=>{let d=c(7257);b.toNumber=function(a){return d.isSymbol(a)?NaN:Number(a)}},46248:(a,b)=>{b.flatten=function(a,b=1){let c=[],d=Math.floor(b),e=(a,b)=>{for(let f=0;f<a.length;f++){let g=a[f];Array.isArray(g)&&b<d?e(g,b+1):c.push(g)}};return e(a,0),c}},46404:(a,b)=>{b.isLength=function(a){return Number.isSafeInteger(a)&&a>=0}},52830:(a,b,c)=>{"use strict";c.r(b),c.d(b,{NAV_SECTIONS:()=>e,default:()=>f});var d=c(77943);let e=(0,d.registerClientReference)(function(){throw Error("Attempted to call NAV_SECTIONS() from the server but NAV_SECTIONS is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\developer\\page.tsx","NAV_SECTIONS"),f=(0,d.registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\AGNES\\\\github\\\\eleeveon-schools-frontend\\\\app\\\\developer\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\developer\\page.tsx","default")},53235:(a,b,c)=>{let d=c(88972),e=c(61259);b.range=function(a,b,c){c&&"number"!=typeof c&&e.isIterateeCall(a,b,c)&&(b=c=void 0),a=d.toFinite(a),void 0===b?(b=a,a=0):b=d.toFinite(b),c=void 0===c?a<b?1:-1:d.toFinite(c);let f=Math.max(Math.ceil((b-a)/(c||1)),0),g=Array(f);for(let b=0;b<f;b++)g[b]=a,a+=c;return g}},54260:(a,b,c)=>{let d=c(32528),e=c(65574);b.toPath=function(a){if(Array.isArray(a))return a.map(d.toKey);if("symbol"==typeof a)return[a];a=e.toString(a);let b=[],c=a.length;if(0===c)return b;let f=0,g="",h="",i=!1;for(46===a.charCodeAt(0)&&(b.push(""),f++);f<c;){let d=a[f];h?"\\"===d&&f+1<c?g+=a[++f]:d===h?h="":g+=d:i?'"'===d||"'"===d?h=d:"]"===d?(i=!1,b.push(g),g=""):g+=d:"["===d?(i=!0,g&&(b.push(g),g="")):"."===d?g&&(b.push(g),g=""):g+=d,f++}return g&&b.push(g),b}},55511:a=>{"use strict";a.exports=require("crypto")},55587:(a,b)=>{b.argumentsTag="[object Arguments]",b.arrayBufferTag="[object ArrayBuffer]",b.arrayTag="[object Array]",b.bigInt64ArrayTag="[object BigInt64Array]",b.bigUint64ArrayTag="[object BigUint64Array]",b.booleanTag="[object Boolean]",b.dataViewTag="[object DataView]",b.dateTag="[object Date]",b.errorTag="[object Error]",b.float32ArrayTag="[object Float32Array]",b.float64ArrayTag="[object Float64Array]",b.functionTag="[object Function]",b.int16ArrayTag="[object Int16Array]",b.int32ArrayTag="[object Int32Array]",b.int8ArrayTag="[object Int8Array]",b.mapTag="[object Map]",b.numberTag="[object Number]",b.objectTag="[object Object]",b.regexpTag="[object RegExp]",b.setTag="[object Set]",b.stringTag="[object String]",b.symbolTag="[object Symbol]",b.uint16ArrayTag="[object Uint16Array]",b.uint32ArrayTag="[object Uint32Array]",b.uint8ArrayTag="[object Uint8Array]",b.uint8ClampedArrayTag="[object Uint8ClampedArray]"},55591:a=>{"use strict";a.exports=require("https")},56022:(a,b,c)=>{let d=c(88919);b.property=function(a){return function(b){return d.get(b,a)}}},58071:(a,b)=>{b.getSymbols=function(a){return Object.getOwnPropertySymbols(a).filter(b=>Object.prototype.propertyIsEnumerable.call(a,b))}},58091:(a,b,c)=>{let d=c(19865),e=c(54260),f=c(17560),g=c(5569);b.has=function(a,b){let c;if(0===(c=Array.isArray(b)?b:"string"==typeof b&&d.isDeepKey(b)&&a?.[b]==null?e.toPath(b):[b]).length)return!1;let h=a;for(let a=0;a<c.length;a++){let b=c[a];if((null==h||!Object.hasOwn(h,b))&&!((Array.isArray(h)||g.isArguments(h))&&f.isIndex(b)&&b<h.length))return!1;h=h[b]}return!0}},58238:(a,b,c)=>{a.exports=c(88919).get},58623:(a,b,c)=>{a.exports=c(53235).range},60428:(a,b,c)=>{let d=c(6692);b.isMatch=function(a,b){return d.isMatchWith(a,b,()=>void 0)}},61259:(a,b,c)=>{let d=c(4317);c(29188);let e=c(66735),f=c(18642),g=c(17560);b.isIterateeCall=function(a,b,c){return!!f.isObject(c)&&(!!("number"==typeof b&&e.isArrayLike(c)&&g.isIndex(b))&&b<c.length||"string"==typeof b&&b in c)&&d.isEqualsSameValueZero(c[b],a)}},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64226:(a,b)=>{b.getTag=function(a){return null==a?void 0===a?"[object Undefined]":"[object Null]":Object.prototype.toString.call(a)}},64612:(a,b,c)=>{let d=c(64226),e=c(55587),f=c(5793);b.cloneDeepWith=function(a,b){return f.cloneDeepWith(a,(c,g,h,i)=>{let j=b?.(c,g,h,i);if(void 0!==j)return j;if("object"==typeof a){if("[object Object]"===d.getTag(a)&&"function"!=typeof a.constructor){let b={};return i.set(a,b),f.copyProperties(b,a,h,i),b}switch(Object.prototype.toString.call(a)){case e.numberTag:case e.stringTag:case e.booleanTag:{let b=new a.constructor(a?.valueOf());return f.copyProperties(b,a),b}case e.argumentsTag:{let b={};return f.copyProperties(b,a),b.length=a.length,b[Symbol.iterator]=a[Symbol.iterator],b}default:return}}})}},65574:(a,b)=>{b.toString=function a(b){if(null==b)return"";if("string"==typeof b)return b;if(Array.isArray(b))return b.map(a).join(",");let c=String(b);return"0"===c&&Object.is(Number(b),-0)?"-0":c}},66735:(a,b,c)=>{let d=c(46404);b.isArrayLike=function(a){return null!=a&&"function"!=typeof a&&d.isLength(a.length)}},70200:(a,b)=>{b.uniqBy=function(a,b){let c=new Map;for(let d=0;d<a.length;d++){let e=a[d],f=b(e,d,a);c.has(f)||c.set(f,e)}return Array.from(c.values())}},70722:a=>{"use strict";a.exports=require("next/dist/shared/lib/invariant-error")},70837:(a,b)=>{b.isTypedArray=function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}},74075:a=>{"use strict";a.exports=require("zlib")},77068:a=>{"use strict";a.exports=require("next/dist/shared/lib/size-limit")},79428:a=>{"use strict";a.exports=require("buffer")},79646:a=>{"use strict";a.exports=require("child_process")},80639:a=>{"use strict";var b=Object.prototype.hasOwnProperty,c="~";function d(){}function e(a,b,c){this.fn=a,this.context=b,this.once=c||!1}function f(a,b,d,f,g){if("function"!=typeof d)throw TypeError("The listener must be a function");var h=new e(d,f||a,g),i=c?c+b:b;return a._events[i]?a._events[i].fn?a._events[i]=[a._events[i],h]:a._events[i].push(h):(a._events[i]=h,a._eventsCount++),a}function g(a,b){0==--a._eventsCount?a._events=new d:delete a._events[b]}function h(){this._events=new d,this._eventsCount=0}Object.create&&(d.prototype=Object.create(null),new d().__proto__||(c=!1)),h.prototype.eventNames=function(){var a,d,e=[];if(0===this._eventsCount)return e;for(d in a=this._events)b.call(a,d)&&e.push(c?d.slice(1):d);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(a)):e},h.prototype.listeners=function(a){var b=c?c+a:a,d=this._events[b];if(!d)return[];if(d.fn)return[d.fn];for(var e=0,f=d.length,g=Array(f);e<f;e++)g[e]=d[e].fn;return g},h.prototype.listenerCount=function(a){var b=c?c+a:a,d=this._events[b];return d?d.fn?1:d.length:0},h.prototype.emit=function(a,b,d,e,f,g){var h=c?c+a:a;if(!this._events[h])return!1;var i,j,k=this._events[h],l=arguments.length;if(k.fn){switch(k.once&&this.removeListener(a,k.fn,void 0,!0),l){case 1:return k.fn.call(k.context),!0;case 2:return k.fn.call(k.context,b),!0;case 3:return k.fn.call(k.context,b,d),!0;case 4:return k.fn.call(k.context,b,d,e),!0;case 5:return k.fn.call(k.context,b,d,e,f),!0;case 6:return k.fn.call(k.context,b,d,e,f,g),!0}for(j=1,i=Array(l-1);j<l;j++)i[j-1]=arguments[j];k.fn.apply(k.context,i)}else{var m,n=k.length;for(j=0;j<n;j++)switch(k[j].once&&this.removeListener(a,k[j].fn,void 0,!0),l){case 1:k[j].fn.call(k[j].context);break;case 2:k[j].fn.call(k[j].context,b);break;case 3:k[j].fn.call(k[j].context,b,d);break;case 4:k[j].fn.call(k[j].context,b,d,e);break;default:if(!i)for(m=1,i=Array(l-1);m<l;m++)i[m-1]=arguments[m];k[j].fn.apply(k[j].context,i)}}return!0},h.prototype.on=function(a,b,c){return f(this,a,b,c,!1)},h.prototype.once=function(a,b,c){return f(this,a,b,c,!0)},h.prototype.removeListener=function(a,b,d,e){var f=c?c+a:a;if(!this._events[f])return this;if(!b)return g(this,f),this;var h=this._events[f];if(h.fn)h.fn!==b||e&&!h.once||d&&h.context!==d||g(this,f);else{for(var i=0,j=[],k=h.length;i<k;i++)(h[i].fn!==b||e&&!h[i].once||d&&h[i].context!==d)&&j.push(h[i]);j.length?this._events[f]=1===j.length?j[0]:j:g(this,f)}return this},h.prototype.removeAllListeners=function(a){var b;return a?(b=c?c+a:a,this._events[b]&&g(this,b)):(this._events=new d,this._eventsCount=0),this},h.prototype.off=h.prototype.removeListener,h.prototype.addListener=h.prototype.on,h.prefixed=c,h.EventEmitter=h,a.exports=h},81486:(a,b)=>{"use strict";var c="function"==typeof Symbol&&Symbol.for,d=c?Symbol.for("react.element"):60103,e=c?Symbol.for("react.portal"):60106,f=c?Symbol.for("react.fragment"):60107,g=c?Symbol.for("react.strict_mode"):60108,h=c?Symbol.for("react.profiler"):60114,i=c?Symbol.for("react.provider"):60109,j=c?Symbol.for("react.context"):60110,k=c?Symbol.for("react.async_mode"):60111,l=c?Symbol.for("react.concurrent_mode"):60111,m=c?Symbol.for("react.forward_ref"):60112,n=c?Symbol.for("react.suspense"):60113,o=(c&&Symbol.for("react.suspense_list"),c?Symbol.for("react.memo"):60115),p=c?Symbol.for("react.lazy"):60116;function q(a){if("object"==typeof a&&null!==a){var b=a.$$typeof;switch(b){case d:switch(a=a.type){case k:case l:case f:case h:case g:case n:return a;default:switch(a=a&&a.$$typeof){case j:case m:case p:case o:case i:return a;default:return b}}case e:return b}}}c&&Symbol.for("react.block"),c&&Symbol.for("react.fundamental"),c&&Symbol.for("react.responder"),c&&Symbol.for("react.scope");b.isFragment=function(a){return q(a)===f}},81630:a=>{"use strict";a.exports=require("http")},83456:(a,b,c)=>{let d=c(66735),e=c(3761);b.isArrayLikeObject=function(a){return e.isObjectLike(a)&&d.isArrayLike(a)}},83997:a=>{"use strict";a.exports=require("tty")},86290:(a,b,c)=>{let d=c(15637);b.throttle=function(a,b=0,c={}){let{leading:e=!0,trailing:f=!0}=c;return d.debounce(a,b,{leading:e,maxWait:b,trailing:f})}},86316:(a,b)=>{b.isUnsafeProperty=function(a){return"__proto__"===a}},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},88919:(a,b,c)=>{let d=c(86316),e=c(19865),f=c(32528),g=c(54260);b.get=function a(b,c,h){if(null==b)return h;switch(typeof c){case"string":{if(d.isUnsafeProperty(c))return h;let f=b[c];if(void 0===f)if(e.isDeepKey(c))return a(b,g.toPath(c),h);else return h;return f}case"number":case"symbol":{"number"==typeof c&&(c=f.toKey(c));let a=b[c];if(void 0===a)return h;return a}default:{if(Array.isArray(c)){var i=b,j=c,k=h;if(0===j.length)return k;let a=i;for(let b=0;b<j.length;b++){if(null==a||d.isUnsafeProperty(j[b]))return k;a=a[j[b]]}return void 0===a?k:a}if(c=Object.is(c?.valueOf(),-0)?"-0":String(c),d.isUnsafeProperty(c))return h;let a=b[c];if(void 0===a)return h;return a}}}},88972:(a,b,c)=>{let d=c(44150);b.toFinite=function(a){return a?(a=d.toNumber(a))===1/0||a===-1/0?(a<0?-1:1)*Number.MAX_VALUE:a==a?a:0:0===a?a:0}},89861:(a,b,c)=>{let d=c(32528),e=c(88919),f=c(60428),g=c(18156),h=c(58091);b.matchesProperty=function(a,b){switch(typeof a){case"object":Object.is(a?.valueOf(),-0)&&(a="-0");break;case"number":a=d.toKey(a)}return b=g.cloneDeep(b),function(c){let d=e.get(c,a);return void 0===d?h.has(c,a):void 0===b?void 0===d:f.isMatch(d,b)}}},91645:a=>{"use strict";a.exports=require("net")},92509:(a,b,c)=>{"use strict";c.r(b),c.d(b,{__next_app__:()=>M,handler:()=>O,routeModule:()=>N});var d=c(7553),e=c(84006),f=c(67798),g=c(34775),h=c(99373),i=c(73461),j=c(1020),k=c(26349),l=c(54365),m=c(16023),n=c(63747),o=c(24235),p=c(23938),q=c(261),r=c(66758),s=c(77243),t=c(26713),u=c(37527),v=c(22820),w=c(88216),x=c(47929),y=c(79551),z=c(71797),A=c(89125),B=c(86439),C=c(77068),D=c(27269),E=c(61287),F=c(81494),G=c(70722),H=c(70753),I=c(43954),J=c(17891),K={};for(let a in E)0>["default","__next_app__","routeModule","handler"].indexOf(a)&&(K[a]=()=>E[a]);c.d(b,K);let L={children:["",{children:["developer",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,52830)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\developer\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(c.bind(c,2729)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\developer\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}},[]]},{layout:[()=>Promise.resolve().then(c.bind(c,32056)),"C:\\Users\\AGNES\\github\\eleeveon-schools-frontend\\app\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,55091,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,45270,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,28193,23)),"next/dist/client/components/builtin/unauthorized.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,46055))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}},[]]}.children,M={require:c,loadChunk:()=>Promise.resolve()},N=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/developer/page",pathname:"/developer",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:L},distDir:".next",relativeProjectDir:""});async function O(a,b,d){var K,P,Q,R,S;d.requestMeta&&(0,h.setRequestMeta)(a,d.requestMeta),N.isDev&&(0,h.addRequestMeta)(a,"devRequestTimingInternalsEnd",process.hrtime.bigint());let T=!!(0,h.getRequestMeta)(a,"minimalMode"),U="/developer/page";"/index"===U&&(U="/");let V=await N.prepare(a,b,{srcPage:U,multiZoneDraftMode:!1});if(!V)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:W,query:X,params:Y,pageIsDynamic:Z,buildManifest:$,nextFontManifest:_,reactLoadableManifest:aa,serverActionsManifest:ab,clientReferenceManifest:ac,subresourceIntegrityManifest:ad,prerenderManifest:ae,isDraftMode:af,resolvedPathname:ag,revalidateOnlyGenerated:ah,routerServerContext:ai,nextConfig:aj,parsedUrl:ak,interceptionRoutePatterns:al,deploymentId:am,clientAssetToken:an}=V,ao=(0,q.normalizeAppPath)(U),{isOnDemandRevalidate:ap}=V,aq=aj.experimental.ppr&&!aj.cacheComponents&&(0,I.isInterceptionRouteAppPath)(ag)?null:N.match(ag,ae),ar=(null==aq?void 0:aq.route)??null,as=!!ae.routes[ag],at=a.headers["user-agent"]||"",au=(0,t.getBotType)(at),av=(0,p.isHtmlBotRequest)(a),aw=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[s.NEXT_ROUTER_PREFETCH_HEADER],ax=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[s.RSC_HEADER],ay=(0,r.getIsPossibleServerAction)(a),az=(0,m.checkIsAppPPREnabled)(aj.experimental.ppr),aA=a.headers[x.NEXT_RESUME_STATE_LENGTH_HEADER];if(!(0,h.getRequestMeta)(a,"postponed")&&T&&az&&ay&&aA&&"string"==typeof aA){let e=parseInt(aA,10),{maxPostponedStateSize:f,maxPostponedStateSizeBytes:g}=(0,D.getMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize);if(!isNaN(e)&&e>0){if(e>g)return b.statusCode=413,b.end((0,D.getPostponedStateExceededErrorMessage)(f)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let i="1 MB",j=(null==(S=aj.experimental.serverActions)?void 0:S.bodySizeLimit)??i,k=e+(j!==i?c(95726).parse(j):1048576),l=await (0,D.readBodyWithSizeLimit)(a,k);if(null===l)return b.statusCode=413,b.end("Request body exceeded limit. To configure the body size limit for Server Actions, see: https://nextjs.org/docs/app/api-reference/next-config-js/serverActions#bodysizelimit"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;if(l.length>=e){let b=l.subarray(0,e).toString("utf8");(0,h.addRequestMeta)(a,"postponed",b);let c=l.subarray(e);(0,h.addRequestMeta)(a,"actionBody",c)}else throw Object.defineProperty(Error(`invariant: expected ${e} bytes of postponed state but only received ${l.length} bytes`),"__NEXT_ERROR_CODE",{value:"E979",enumerable:!1,configurable:!0})}}if(!(0,h.getRequestMeta)(a,"postponed")&&az&&"1"===a.headers[x.NEXT_RESUME_HEADER]&&"POST"===a.method){let{maxPostponedStateSize:c,maxPostponedStateSizeBytes:e}=(0,D.getMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize),f=await (0,D.readBodyWithSizeLimit)(a,e);if(null===f)return b.statusCode=413,b.end((0,D.getPostponedStateExceededErrorMessage)(c)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let g=f.toString("utf8");(0,h.addRequestMeta)(a,"postponed",g)}let aB=!0===N.isDev||!0===aj.experimental.exposeTestingApiInProductionBuild,aC=aB&&("1"===a.headers[s.NEXT_INSTANT_PREFETCH_HEADER]||void 0===a.headers[s.RSC_HEADER]&&"string"==typeof a.headers.cookie&&a.headers.cookie.includes(s.NEXT_INSTANT_TEST_COOKIE+"=")),aD=(az||aC)&&((null==(K=ae.routes[ao]??ae.dynamicRoutes[ao])?void 0:K.renderingMode)==="PARTIALLY_STATIC"||aC&&(aB||(null==ai?void 0:ai.experimentalTestProxy)===!0)),aE=aC&&aD,aF=aE&&!0===N.isDev,aG=!1,aH=aD?(0,h.getRequestMeta)(a,"postponed"):void 0,aI=null==(P=ae.routes[ag])?void 0:P.prefetchDataRoute,aJ=aD&&ax&&!aw&&!aI;T&&(aJ=aJ&&!!aH);let aK=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),aL=(!au||!aD)&&(!at||(0,p.shouldServeStreamingMetadata)(at,aj.htmlLimitedBots)),aM=!!((ar||as||ae.routes[ao])&&!(au&&aD)),aN=aD&&!0===aj.cacheComponents,aO=!0===N.isDev||!aM||"string"==typeof aH||(aN&&(0,h.getRequestMeta)(a,"onCacheEntryV2")?aJ&&!T:aJ),aP=!!au&&aD,aQ=(null==ar?void 0:ar.remainingPrerenderableParams)??[],aR=(null==ar?void 0:ar.fallback)===null&&((null==(Q=ar.fallbackRootParams)?void 0:Q.length)??0)>0,aS=null;if(!af&&aM&&!aO&&!ay&&!aH&&!aJ){let a=aq?"string"==typeof(null==ar?void 0:ar.fallback)?ar.fallback:aq.source:null;if(!0===aj.experimental.partialFallbacks&&a&&(null==ar?void 0:ar.fallbackRouteParams)&&!aR){if(aQ.length>0){let b,c=(b=new Map(aQ.map(a=>[a.paramName,a])),a.split("/").map(a=>{let c=(0,J.getSegmentParam)(a);if(!c)return a;let d=b.get(c.paramName);if(!d)return a;let e=null==Y?void 0:Y[d.paramName];if(!e)return a;let f=Array.isArray(e)?e.map(a=>encodeURIComponent(a)).join("/"):encodeURIComponent(e);return a.replace(function(a){let{repeat:b,optional:c}=(0,J.getParamProperties)(a.paramType);return c?`[[...${a.paramName}]]`:b?`[...${a.paramName}]`:`[${a.paramName}]`}(d),f)}).join("/")||"/");aS=c!==a?c:null}}else aS=ag}let aT=aS;!aT&&(N.isDev||aM&&Z&&(null==ar?void 0:ar.fallbackRouteParams)&&!ay)&&(aT=ag),N.isDev||af||!aM||!ax||aJ||(0,k.d)(a.headers);let aU={...E,tree:L,handler:O,routeModule:N,__next_app__:M};ab&&ac&&(0,o.setManifestsSingleton)({page:U,clientReferenceManifest:ac,serverActionsManifest:ab});let aV=a.method||"GET",aW=(0,g.getTracer)(),aX=aW.getActiveScopeSpan(),aY=!!(null==ai?void 0:ai.isWrappedByNextServer),aZ=!0===aj.experimental.partialFallbacks&&aQ.length>0?(null==ar||null==(R=ar.fallbackRouteParams)?void 0:R.filter(a=>!aQ.some(b=>b.paramName===a.paramName)))??[]:[],a$=async()=>((null==ai?void 0:ai.render404)?await ai.render404(a,b,ak,!1):b.end("This page could not be found"),null);try{let k,m=N.getVaryHeader(ag,al);b.setHeader("Vary",m);let o=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return N.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let a=aW.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let d=a.get("next.route");if(d){let a=`${aV} ${d}`;c.setAttributes({"next.route":d,"http.route":d,"next.span_name":a}),c.updateName(a),k&&k!==c&&(k.setAttribute("http.route",d),k.updateName(a))}else c.updateName(`${aV} ${U}`)})},p=(0,h.getRequestMeta)(a,"incrementalCache")||await N.getIncrementalCache(a,aj,ae,T);null==p||p.resetRequestCache(),globalThis.__incrementalCache=p;let q=async({span:e,postponed:f,fallbackRouteParams:g,forceStaticRender:i})=>{let k={query:X,params:Y,page:ao,sharedContext:{buildId:W,deploymentId:am,clientAssetToken:an},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aU,Component:(0,j.T)(aU),params:Y,routeModule:N,page:U,postponed:f,shouldWaitOnAllReady:aP,serveStreamingMetadata:aL,supportsDynamicResponse:"string"==typeof f||aO,buildManifest:$,nextFontManifest:_,reactLoadableManifest:aa,subresourceIntegrityManifest:ad,setCacheStatus:null==ai?void 0:ai.setCacheStatus,setIsrStatus:null==ai?void 0:ai.setIsrStatus,setReactDebugChannel:null==ai?void 0:ai.setReactDebugChannel,sendErrorsToBrowser:null==ai?void 0:ai.sendErrorsToBrowser,dir:c(33873).join(process.cwd(),N.relativeProjectDir),isDraftMode:af,botType:au,isOnDemandRevalidate:ap,isPossibleServerAction:ay,assetPrefix:aj.assetPrefix,nextConfigOutput:aj.output,crossOrigin:aj.crossOrigin,trailingSlash:aj.trailingSlash,images:aj.images,previewProps:ae.preview,enableTainting:aj.experimental.taint,htmlLimitedBots:aj.htmlLimitedBots,reactMaxHeadersLength:aj.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:p,cacheLifeProfiles:aj.cacheLife,basePath:aj.basePath,serverActions:aj.experimental.serverActions,logServerFunctions:"object"==typeof aj.logging&&!!aj.logging.serverFunctions,...aE||aF||aG?{isBuildTimePrerendering:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isDebugDynamicAccesses:aF}:{},cacheComponents:!!aj.cacheComponents,experimental:{isRoutePPREnabled:aD,expireTime:aj.expireTime,staleTimes:aj.experimental.staleTimes,dynamicOnHover:!!aj.experimental.dynamicOnHover,optimisticRouting:!!aj.experimental.optimisticRouting,inlineCss:!!aj.experimental.inlineCss,prefetchInlining:aj.experimental.prefetchInlining??!1,authInterrupts:!!aj.experimental.authInterrupts,cachedNavigations:!!aj.experimental.cachedNavigations,clientTraceMetadata:aj.experimental.clientTraceMetadata||[],clientParamParsingOrigins:aj.experimental.clientParamParsingOrigins,maxPostponedStateSizeBytes:(0,C.parseMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize)},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d,e)=>N.onRequestError(a,b,d,e,ai),err:(0,h.getRequestMeta)(a,"invokeError")}};i&&(k.renderOpts.supportsDynamicResponse=!1);let l=await o(e,k),{metadata:m}=l,{cacheControl:n,headers:q={},fetchTags:r,fetchMetrics:s}=m;if(r&&(q[x.NEXT_CACHE_TAGS_HEADER]=r),a.fetchMetrics=s,aM&&(null==n?void 0:n.revalidate)===0&&!N.isDev&&!aD){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${ag}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:u.CachedRouteKind.APP_PAGE,html:l,headers:q,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},r=async({hasResolved:c,previousCacheEntry:g,isRevalidating:i,span:j,forceStaticRender:k=!1})=>{let l=!1===N.isDev,m=c||b.writableEnded;try{let f;if(ap&&ah&&!g&&!T)return(null==ai?void 0:ai.render404)?await ai.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ar&&(f=(0,v.parseFallbackField)(ar.fallback)),!0===aj.experimental.partialFallbacks&&(null==ar?void 0:ar.fallback)===null&&!aR&&aQ.length>0&&(f=v.FallbackMode.PRERENDER),f===v.FallbackMode.PRERENDER&&(0,t.isBot)(at)&&(!aD||av)&&(f=v.FallbackMode.BLOCKING_STATIC_RENDER),(null==g?void 0:g.isStale)===-1&&(ap=!0),ap&&(f!==v.FallbackMode.NOT_FOUND||g)&&(f=v.FallbackMode.BLOCKING_STATIC_RENDER),!T&&f!==v.FallbackMode.BLOCKING_STATIC_RENDER&&aT&&!m&&!af&&Z&&(l||!as)){if((l||ar)&&f===v.FallbackMode.NOT_FOUND){if(aj.adapterPath)return await a$();throw new B.NoFallbackError}if(aD&&(aj.cacheComponents?!aJ:!ax)){let b=l&&"string"==typeof(null==ar?void 0:ar.fallback)?ar.fallback:ao,f=(l||aE)&&(null==ar?void 0:ar.fallbackRouteParams)?(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams):aG?(0,n.getFallbackRouteParams)(ao,N):null;aE&&f&&(0,h.addRequestMeta)(a,"fallbackParams",f);let g=await N.handleResponse({cacheKey:b,req:a,nextConfig:aj,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:ae,isRoutePPREnabled:aD,responseGenerator:async()=>q({span:j,postponed:void 0,fallbackRouteParams:f,forceStaticRender:!0}),waitUntil:d.waitUntil,isMinimalMode:T});if(null===g)return null;if(g)return T||!aD||!(aQ.length>0)||!0!==aj.experimental.partialFallbacks||!aS||!p||ap||aG||aB||aC||aw||(0,H.scheduleOnNextTick)(async()=>{let b=N.getResponseCache(a);try{await b.revalidate(aS,p,aD,!1,a=>q({span:a.span,postponed:void 0,fallbackRouteParams:aZ.length>0?(0,n.createOpaqueFallbackRouteParams)(aZ):null,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}),delete g.cacheControl,g}}let o=ap||i||!aH?void 0:aH;if(aN&&!T&&p&&(aJ||ay)&&!k){let b=await p.get(ag,{kind:u.IncrementalCacheKind.APP_PAGE,isRoutePPREnabled:!0,isFallback:!1});b&&b.value&&b.value.kind===u.CachedRouteKind.APP_PAGE&&(o=b.value.postponed,b&&(-1===b.isStale||!0===b.isStale)&&(0,H.scheduleOnNextTick)(async()=>{let b=N.getResponseCache(a);try{await b.revalidate(ag,p,aD,!1,a=>r({...a,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}))}if((aE||aF)&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:u.CachedRouteKind.PAGES,html:w.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let s=(l&&(0,h.getRequestMeta)(a,"renderFallbackShell")||aE&&!as)&&(null==ar?void 0:ar.fallbackRouteParams)?(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams):aG?(0,n.getFallbackRouteParams)(ao,N):null;if((l||aE)&&aj.cacheComponents&&!as&&(null==ar?void 0:ar.fallbackRouteParams)){let b=(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams);b&&(0,h.addRequestMeta)(a,"fallbackParams",b)}return q({span:j,postponed:o,fallbackRouteParams:s,forceStaticRender:k})}catch(b){throw(null==g?void 0:g.isStale)&&await N.onRequestError(a,b,{routerKind:"App Router",routePath:U,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aM,isOnDemandRevalidate:ap})},!1,ai),b}},D=async c=>{var f,g,i,j,k;let l,m=await N.handleResponse({cacheKey:aS,responseGenerator:a=>r({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ap,isRoutePPREnabled:aD,req:a,nextConfig:aj,prerenderManifest:ae,waitUntil:d.waitUntil,isMinimalMode:T});if(af&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),N.isDev&&b.setHeader("Cache-Control","no-cache, must-revalidate"),!m){if(aS)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=m.value)?void 0:f.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=m.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let n="string"==typeof m.value.postponed;ax&&!ay&&am&&b.setHeader(x.NEXT_NAV_DEPLOYMENT_ID_HEADER,am),aM&&!aJ&&(!n||aw)&&(T||b.setHeader("x-nextjs-cache",ap?"REVALIDATED":m.isMiss?"MISS":m.isStale?"STALE":"HIT"),b.setHeader(s.NEXT_IS_PRERENDER_HEADER,"1"));let{value:o}=m;if(aH)l={revalidate:0,expire:void 0};else if(aJ)l={revalidate:0,expire:void 0};else if(!N.isDev)if(af)l={revalidate:0,expire:void 0};else if(aM){if(m.cacheControl)if("number"==typeof m.cacheControl.revalidate){if(m.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${m.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:m.cacheControl.revalidate,expire:(null==(j=m.cacheControl)?void 0:j.expire)??aj.expireTime}}else l={revalidate:x.CACHE_ONE_YEAR_SECONDS,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(m.cacheControl=l,"string"==typeof aK&&(null==o?void 0:o.kind)===u.CachedRouteKind.APP_PAGE&&o.segmentData){b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=o.headers)?void 0:k[x.NEXT_CACHE_TAGS_HEADER];T&&aM&&c&&"string"==typeof c&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,c);let d=o.segmentData.get(aK);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.fromStatic(d,s.RSC_CONTENT_TYPE_HEADER),cacheControl:m.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.EMPTY,cacheControl:m.cacheControl}))}let p=aN?(0,h.getRequestMeta)(a,"onCacheEntryV2")??(0,h.getRequestMeta)(a,"onCacheEntry"):(0,h.getRequestMeta)(a,"onCacheEntry");if(p&&await p(m,{url:(0,h.getRequestMeta)(a,"initURL")??a.url}))return null;if(o.headers){let a={...o.headers};for(let[c,d]of(T&&aM||delete a[x.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let t=null==(g=o.headers)?void 0:g[x.NEXT_CACHE_TAGS_HEADER];if(T&&aM&&t&&"string"==typeof t&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,t),!o.status||ax&&aD||(b.statusCode=o.status),!T&&o.status&&F.RedirectStatusCode[o.status]&&ax&&(b.statusCode=200),n&&!aJ&&b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"1"),ax&&!af){if(void 0===o.rscData){if(o.html.contentType!==s.RSC_CONTENT_TYPE_HEADER)if(aj.cacheComponents)return b.statusCode=404,(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.EMPTY,cacheControl:m.cacheControl});else throw Object.defineProperty(new G.InvariantError(`Expected RSC response, got ${o.html.contentType}`),"__NEXT_ERROR_CODE",{value:"E789",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:o.html,cacheControl:m.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.fromStatic(o.rscData,s.RSC_CONTENT_TYPE_HEADER),cacheControl:m.cacheControl})}let v=o.html;if(aC&&aE){let c=!0===N.isDev?crypto.randomUUID():null;return v.pipeThrough((0,z.createInstantTestScriptInsertionTransformStream)(c)),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})}if(!n||T||ax)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:m.cacheControl});if(aE||aF)return v.push(new ReadableStream({start(a){a.enqueue(y.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}});let B=new TransformStream;return v.push(B.readable),q({span:c,postponed:o.postponed,fallbackRouteParams:null,forceStaticRender:!1}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(B.writable)}).catch(a=>{B.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})};if(!aY||!aX)return k=aW.getActiveScopeSpan(),await aW.withPropagatedContext(a.headers,()=>aW.trace(i.BaseServerSpan.handleRequest,{spanName:`${aV} ${U}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aV,"http.target":a.url}},D),void 0,!aY);await D(aX)}catch(b){throw b instanceof B.NoFallbackError||await N.onRequestError(a,b,{routerKind:"App Router",routePath:U,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aM,isOnDemandRevalidate:ap})},!1,ai),b}}},92963:(a,b)=>{b.ary=function(a,b){return function(...c){return a.apply(this,c.slice(0,b))}}},94542:(a,b)=>{b.isPlainObject=function(a){if("object"!=typeof a||null==a)return!1;if(null===Object.getPrototypeOf(a))return!0;if("[object Object]"!==Object.prototype.toString.call(a)){let b=a[Symbol.toStringTag];return null!=b&&!!Object.getOwnPropertyDescriptor(a,Symbol.toStringTag)?.writable&&a.toString()===`[object ${b}]`}let b=a;for(;null!==Object.getPrototypeOf(b);)b=Object.getPrototypeOf(b);return Object.getPrototypeOf(a)===b}},94671:(a,b)=>{b.isPrimitive=function(a){return null==a||"object"!=typeof a&&"function"!=typeof a}},94735:a=>{"use strict";a.exports=require("events")},96862:(a,b,c)=>{"use strict";var d=c(67484),e="function"==typeof Object.is?Object.is:function(a,b){return a===b&&(0!==a||1/a==1/b)||a!=a&&b!=b},f=d.useState,g=d.useEffect,h=d.useLayoutEffect,i=d.useDebugValue;function j(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!e(a,c)}catch(a){return!0}}var k="u"<typeof window||void 0===window.document||void 0===window.document.createElement?function(a,b){return b()}:function(a,b){var c=b(),d=f({inst:{value:c,getSnapshot:b}}),e=d[0].inst,k=d[1];return h(function(){e.value=c,e.getSnapshot=b,j(e)&&k({inst:e})},[a,c,b]),g(function(){return j(e)&&k({inst:e}),a(function(){j(e)&&k({inst:e})})},[a]),i(c),c};b.useSyncExternalStore=void 0!==d.useSyncExternalStore?d.useSyncExternalStore:k},98165:(a,b)=>{function c(a){return"symbol"==typeof a?1:null===a?2:void 0===a?3:4*(a!=a)}b.compareValues=(a,b,d)=>{if(a!==b){let e=c(a),f=c(b);if(e===f&&0===e){if(a<b)return"desc"===d?1:-1;if(a>b)return"desc"===d?-1:1}return"desc"===d?f-e:e-f}return 0}},98262:(a,b,c)=>{Promise.resolve().then(c.bind(c,1866))},99968:(a,b)=>{b.globalThis_="object"==typeof globalThis&&globalThis||"object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||function(){return this}()||Function("return this")()}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[3445,63,7488,7533,1537,8505,3080,728],()=>b(b.s=92509));module.exports=c})();
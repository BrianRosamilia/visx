_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[62],{"+wNj":function(e,n,r){"use strict";function t(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(n,"a",(function(){return t}))},"/B0Q":function(e,n,r){"use strict";r.d(n,"b",(function(){return a})),r.d(n,"a",(function(){return o}));var t=r("W1cA");const a=Symbol("implicit");function o(){var e=new Map,n=[],r=[],u=a;function i(t){var o=t+"",i=e.get(o);if(!i){if(u!==a)return u;e.set(o,i=n.push(t))}return r[(i-1)%r.length]}return i.domain=function(r){if(!arguments.length)return n.slice();n=[],e=new Map;for(const t of r){const r=t+"";e.has(r)||e.set(r,n.push(t))}return i},i.range=function(e){return arguments.length?(r=Array.from(e),i):r.slice()},i.unknown=function(e){return arguments.length?(u=e,i):u},i.copy=function(){return o(n,r).unknown(u)},t.b.apply(i,arguments),i}},"1Wmu":function(e,n,r){"use strict";function t(e,n){e(n)}r.d(n,"a",(function(){return t}))},"9kyG":function(e,n,r){"use strict";r.d(n,"a",(function(){return c}));var t=r("ERkP"),a=r.n(t),o=r("O94r"),u=r.n(o),i=r("dGDr");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function c(e){var n=e.className,r=e.data,t=e.innerRadius,o=e.outerRadius,c=e.cornerRadius,l=e.startAngle,d=e.endAngle,f=e.padAngle,p=e.padRadius,h=e.children,g=e.innerRef,m=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["className","data","innerRadius","outerRadius","cornerRadius","startAngle","endAngle","padAngle","padRadius","children","innerRef"]),b=Object(i.a)({innerRadius:t,outerRadius:o,cornerRadius:c,startAngle:l,endAngle:d,padAngle:f,padRadius:p});return h?a.a.createElement(a.a.Fragment,null,h({path:b})):r?a.a.createElement("path",s({ref:g,className:u()("visx-arc",n),d:b(r)||""},m)):null}},"Cf/J":function(e,n,r){"use strict";r.d(n,"a",(function(){return s}));var t=r("aWzz"),a=r.n(t),o=r("ERkP"),u=r.n(o);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function s(e){var n=e.children,r=e.id,t=e.from,a=e.to,o=e.x1,s=e.y1,c=e.x2,l=e.y2,d=e.fromOffset,f=void 0===d?"0%":d,p=e.fromOpacity,h=void 0===p?1:p,g=e.toOffset,m=void 0===g?"100%":g,b=e.toOpacity,y=void 0===b?1:b,v=e.rotate,O=e.transform,j=e.vertical,x=void 0===j||j,A=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),w=o,R=c,C=s,S=l;return!x||w||R||C||S||(w="0",R="0",C="0",S="1"),u.a.createElement("defs",null,u.a.createElement("linearGradient",i({id:r,x1:w,y1:C,x2:R,y2:S,gradientTransform:v?"rotate("+v+")":O},A),!!n&&n,!n&&u.a.createElement("stop",{offset:f,stopColor:t,stopOpacity:h}),!n&&u.a.createElement("stop",{offset:m,stopColor:a,stopOpacity:y})))}s.propTypes={id:a.a.string.isRequired,from:a.a.string,to:a.a.string,x1:a.a.oneOfType([a.a.string,a.a.number]),x2:a.a.oneOfType([a.a.string,a.a.number]),y1:a.a.oneOfType([a.a.string,a.a.number]),y2:a.a.oneOfType([a.a.string,a.a.number]),fromOffset:a.a.oneOfType([a.a.string,a.a.number]),fromOpacity:a.a.oneOfType([a.a.string,a.a.number]),toOffset:a.a.oneOfType([a.a.string,a.a.number]),toOpacity:a.a.oneOfType([a.a.string,a.a.number]),rotate:a.a.oneOfType([a.a.string,a.a.number]),transform:a.a.string,children:a.a.node,vertical:a.a.bool}},"D+es":function(e,n,r){"use strict";r.d(n,"a",(function(){return u}));var t=r("/B0Q"),a=r("xx0A"),o=Object(a.b)("domain","range","reverse","unknown");function u(e){return o(Object(t.a)(),e)}},Feyk:function(e,n,r){"use strict";r.r(n);var t=r("ERkP"),a=r.n(t),o=r("AqdV"),u=a.a.createElement;function i(e){var n=e.matrix,r=e.padAngle,t=e.sortGroups,i=e.sortSubgroups,s=e.sortChords,c=e.children,l=Object(o.a)();r&&l.padAngle(r),t&&l.sortGroups(t),i&&l.sortSubgroups(i),s&&l.sortChords(s);var d=l(n);return c?u(a.a.Fragment,null,c({chords:d})):u("g",null)}try{i.displayName="Chord",i.__docgenInfo={description:"",displayName:"Chord",props:{matrix:{defaultValue:null,description:"Square data matrix of size n\xd7n, where the matrix represents the directed flow amongst a network (a complete digraph) of `n` nodes. The given matrix must be an array of length `n`, where each element `matrix[i]` is an array of `n` numbers, where each `matrix[i][j]` represents the flow from the `ith` node in the network to the `jth` node. Each number `matrix[i][j]` must be nonnegative, though it can be zero if there is no flow from node `i` to node `j`.",name:"matrix",required:!0,type:{name:"number[][]"}},padAngle:{defaultValue:null,description:"Sets the pad angle between adjacent groups to the specified number in radians.",name:"padAngle",required:!1,type:{name:"number | undefined"}},sortGroups:{defaultValue:null,description:"Comparator used to sort the groups by their total outflow.",name:"sortGroups",required:!1,type:{name:"DefaultSortComporator | null | undefined"}},sortSubgroups:{defaultValue:null,description:"Comparator used to sort the subgroups corresponding to `matrix[i][0 \u2026 n - 1]` for a given group i by their total outflow.",name:"sortSubgroups",required:!1,type:{name:"DefaultSortComporator | null | undefined"}},sortChords:{defaultValue:null,description:"Comparator used to sort the chords by their combined flow; this only affects the `z-order` of the chords.",name:"sortChords",required:!1,type:{name:"DefaultSortComporator | null | undefined"}},children:{defaultValue:null,description:"Child render function, passed the configured chords.",name:"children",required:!0,type:{name:"(chords: { chords: Chords; }) => ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-chord/src/Chord.tsx#Chord"]={docgenInfo:i.__docgenInfo,name:"Chord",path:"../visx-chord/src/Chord.tsx#Chord"})}catch(O){}var s=r("QnPE"),c=r("cxan"),l=r("HbGN"),d=r("O94r"),f=r.n(d),p=a.a.createElement;function h(e,n){e(n)}function g(e){var n=e.chord,r=e.source,t=e.target,u=e.radius,i=e.startAngle,s=e.endAngle,d=e.children,g=e.className,m=Object(l.a)(e,["chord","source","target","radius","startAngle","endAngle","children","className"]),b=Object(o.b)();r&&b.source(r),t&&b.target(t),u&&h(b.radius,u),i&&h(b.startAngle,i),s&&h(b.endAngle,s);var y=b(n);return d?p(a.a.Fragment,null,d({path:y})):p("path",Object(c.a)({className:f()("visx-ribbon",g),d:y||""},m))}try{g.displayName="Ribbon",g.__docgenInfo={description:"",displayName:"Ribbon",props:{chord:{defaultValue:null,description:"Chord for which to render a ribbon.",name:"chord",required:!0,type:{name:"Chord"}},source:{defaultValue:null,description:"Sets the source accessor (defaults to chord.source).",name:"source",required:!1,type:{name:"((d: Chord) => ChordSubgroup) | undefined"}},target:{defaultValue:null,description:"Sets the target accessor (defaults to chord.source).",name:"target",required:!1,type:{name:"((d: Chord) => ChordSubgroup) | undefined"}},radius:{defaultValue:null,description:"Sets the radius or radius accessor for the ribbon generator.",name:"radius",required:!1,type:{name:"number | NumAccessor | undefined"}},startAngle:{defaultValue:null,description:"Sets the start angle or start angle accessor for the ribbon generator.",name:"startAngle",required:!1,type:{name:"number | NumAccessor | undefined"}},endAngle:{defaultValue:null,description:"Sets the end angle or end angle accessor for the ribbon generator.",name:"endAngle",required:!1,type:{name:"number | NumAccessor | undefined"}},children:{defaultValue:null,description:"Override the default rendering of a chord `<path />`.",name:"children",required:!1,type:{name:"(({ path }: { path: string | null; }) => string | undefined) | undefined"}},className:{defaultValue:null,description:"Classname to apply to the rendered `<path />`.",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-chord/src/Ribbon.tsx#Ribbon"]={docgenInfo:g.__docgenInfo,name:"Ribbon",path:"../visx-chord/src/Ribbon.tsx#Ribbon"})}catch(O){}var m=r("0uiS"),b=a.a.createElement,y=[i,g],v=[m.default];n.default=function(){return b(s.a,{components:y,examples:v,readme:'# @visx/chord\n\n<a title="@visx/chord npm downloads" href="https://www.npmjs.com/package/@visx/chord">\n  <img src="https://img.shields.io/npm/dm/@visx/chord.svg?style=flat-square" />\n</a>\n\nChord diagrams show directed relationships among a group of entities in a radial layout.\n\n## Installation\n\n```\nnpm install --save @visx/chord\n```\n',visxPackage:"chord"})}},HbGN:function(e,n,r){"use strict";r.d(n,"a",(function(){return a}));var t=r("+wNj");function a(e,n){if(null==e)return{};var r,a,o=Object(t.a)(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)r=u[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},JmwF:function(e,n,r){"use strict";r.d(n,"a",(function(){return l}));var t=r("aWzz"),a=r.n(t),o=r("ERkP"),u=r.n(o),i=r("O94r"),s=r.n(i);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function l(e){var n=e.top,r=void 0===n?0:n,t=e.left,a=void 0===t?0:t,o=e.transform,i=e.className,l=e.children,d=e.innerRef,f=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["top","left","transform","className","children","innerRef"]);return u.a.createElement("g",c({ref:d,className:s()("visx-group",i),transform:o||"translate("+a+", "+r+")"},f),l)}l.propTypes={top:a.a.number,left:a.a.number,transform:a.a.string,className:a.a.string,children:a.a.node,innerRef:a.a.oneOfType([a.a.string,a.a.func,a.a.object])}},Vi0D:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return c})),r.d(n,"c",(function(){return l}));var t=r("+Y26"),a=r("M3gT"),o=r("Ddjo"),u=r("Xyxy"),i=r("Q4nK"),s={expand:t.a,diverging:a.a,none:o.a,silhouette:u.a,wiggle:i.a},c=Object.keys(s);function l(e){return e&&s[e]||s.none}},cxan:function(e,n,r){"use strict";function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}r.d(n,"a",(function(){return t}))},dGDr:function(e,n,r){"use strict";r.d(n,"a",(function(){return f})),r.d(n,"b",(function(){return p})),r.d(n,"c",(function(){return h})),r.d(n,"d",(function(){return g})),r.d(n,"e",(function(){return m})),r.d(n,"f",(function(){return b}));var t=r("mBAT"),a=r("KdQ8"),o=r("+pY8"),u=r("lg8u"),i=r("FVKn"),s=r("uvDt"),c=r("1Wmu"),l=r("oWfS"),d=r("Vi0D");function f(e){var n=void 0===e?{}:e,r=n.innerRadius,a=n.outerRadius,o=n.cornerRadius,u=n.startAngle,i=n.endAngle,s=n.padAngle,l=n.padRadius,d=Object(t.a)();return null!=r&&Object(c.a)(d.innerRadius,r),null!=a&&Object(c.a)(d.outerRadius,a),null!=o&&Object(c.a)(d.cornerRadius,o),null!=u&&Object(c.a)(d.startAngle,u),null!=i&&Object(c.a)(d.endAngle,i),null!=s&&Object(c.a)(d.padAngle,s),null!=l&&Object(c.a)(d.padRadius,l),d}function p(e){var n=void 0===e?{}:e,r=n.x,t=n.x0,o=n.x1,u=n.y,i=n.y0,s=n.y1,l=n.defined,d=n.curve,f=Object(a.a)();return r&&Object(c.a)(f.x,r),t&&Object(c.a)(f.x0,t),o&&Object(c.a)(f.x1,o),u&&Object(c.a)(f.y,u),i&&Object(c.a)(f.y0,i),s&&Object(c.a)(f.y1,s),l&&f.defined(l),d&&f.curve(d),f}function h(e){var n=void 0===e?{}:e,r=n.x,t=n.y,a=n.defined,u=n.curve,i=Object(o.a)();return r&&Object(c.a)(i.x,r),t&&Object(c.a)(i.y,t),a&&i.defined(a),u&&i.curve(u),i}function g(e){var n=void 0===e?{}:e,r=n.startAngle,t=n.endAngle,a=n.padAngle,o=n.value,i=n.sort,s=n.sortValues,l=Object(u.a)();return(null===i||null!=i)&&l.sort(i),(null===s||null!=s)&&l.sortValues(s),null!=o&&l.value(o),null!=a&&Object(c.a)(l.padAngle,a),null!=r&&Object(c.a)(l.startAngle,r),null!=t&&Object(c.a)(l.endAngle,t),l}function m(e){var n=void 0===e?{}:e,r=n.angle,t=n.radius,a=n.defined,o=n.curve,u=Object(i.a)();return r&&Object(c.a)(u.angle,r),t&&Object(c.a)(u.radius,t),a&&u.defined(a),o&&u.curve(o),u}function b(e){var n=e.keys,r=e.value,t=e.order,a=e.offset,o=Object(s.a)();return n&&o.keys(n),r&&Object(c.a)(o.value,r),t&&o.order(Object(l.c)(t)),a&&o.offset(Object(d.c)(a)),o}},db8e:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/chord",function(){return r("Feyk")}])},oWfS:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return c})),r.d(n,"c",(function(){return l}));var t=r("Zx3a"),a=r("c6zU"),o=r("yU24"),u=r("V+6I"),i=r("NKRu"),s={ascending:t.a,descending:a.a,insideout:o.a,none:u.a,reverse:i.a},c=Object.keys(s);function l(e){return e&&s[e]||s.none}},ue4z:function(e,n,r){"use strict";r.d(n,"a",(function(){return a})),r.d(n,"b",(function(){return u})),r.d(n,"c",(function(){return c})),r.d(n,"d",(function(){return l})),r.d(n,"e",(function(){return s})),r.d(n,"f",(function(){return d}));var t=function(e,n){return e<n?-1:e>n?1:e>=n?0:NaN},a=function(e){var n;return 1===e.length&&(n=e,e=function(e,r){return t(n(e),r)}),{left:function(n,r,t,a){for(null==t&&(t=0),null==a&&(a=n.length);t<a;){var o=t+a>>>1;e(n[o],r)<0?t=o+1:a=o}return t},right:function(n,r,t,a){for(null==t&&(t=0),null==a&&(a=n.length);t<a;){var o=t+a>>>1;e(n[o],r)>0?a=o:t=o+1}return t}}};var o=a(t);o.right,o.left;var u=function(e,n){var r,t,a,o=e.length,u=-1;if(null==n){for(;++u<o;)if(null!=(r=e[u])&&r>=r)for(t=a=r;++u<o;)null!=(r=e[u])&&(t>r&&(t=r),a<r&&(a=r))}else for(;++u<o;)if(null!=(r=n(e[u],u,e))&&r>=r)for(t=a=r;++u<o;)null!=(r=n(e[u],u,e))&&(t>r&&(t=r),a<r&&(a=r));return[t,a]},i=Array.prototype,s=(i.slice,i.map,function(e,n,r){e=+e,n=+n,r=(a=arguments.length)<2?(n=e,e=0,1):a<3?1:+r;for(var t=-1,a=0|Math.max(0,Math.ceil((n-e)/r)),o=new Array(a);++t<a;)o[t]=e+t*r;return o});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var c=function(e,n){var r,t,a=e.length,o=-1;if(null==n){for(;++o<a;)if(null!=(r=e[o])&&r>=r)for(t=r;++o<a;)null!=(r=e[o])&&r>t&&(t=r)}else for(;++o<a;)if(null!=(r=n(e[o],o,e))&&r>=r)for(t=r;++o<a;)null!=(r=n(e[o],o,e))&&r>t&&(t=r);return t},l=function(e){for(var n,r,t,a=e.length,o=-1,u=0;++o<a;)u+=e[o].length;for(r=new Array(u);--a>=0;)for(n=(t=e[a]).length;--n>=0;)r[--u]=t[n];return r},d=function(e){if(!(a=e.length))return[];for(var n=-1,r=function(e,n){var r,t,a=e.length,o=-1;if(null==n){for(;++o<a;)if(null!=(r=e[o])&&r>=r)for(t=r;++o<a;)null!=(r=e[o])&&t>r&&(t=r)}else for(;++o<a;)if(null!=(r=n(e[o],o,e))&&r>=r)for(t=r;++o<a;)null!=(r=n(e[o],o,e))&&t>r&&(t=r);return t}(e,f),t=new Array(r);++n<r;)for(var a,o=-1,u=t[n]=new Array(a);++o<a;)u[o]=e[o][n];return t};function f(e){return e.length}},zjfJ:function(e,n,r){"use strict";function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}r.d(n,"a",(function(){return t}))}},[["db8e",0,2,1,3,4,7,8,10,9,30]]]);
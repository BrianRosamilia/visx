_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[86],{"/bzO":function(e,n,t){"use strict";n.a=function(e,n){var t,r=0,a=(e=e.slice()).length-1,i=e[r],u=e[a];return u<i&&(t=r,r=a,a=t,t=i,i=u,u=t),e[r]=n.floor(i),e[a]=n.ceil(u),e}},"1Wmu":function(e,n,t){"use strict";function r(e,n){e(n)}t.d(n,"a",(function(){return r}))},RauZ:function(e,n,t){"use strict";t.r(n);var r=t("ERkP"),a=t.n(r),i=t("cxan"),u=t("O94r"),o=t.n(u),c=t("wO8m"),s=t("hNR5"),l=a.a.createElement;function d(e){var n=e.className,t=e.curve,r=e.clipAboveTo,a=e.clipBelowTo,u=e.data,d=e.defined,f=e.x,h=e.y0,p=e.y1,v=e.aboveAreaProps,b=e.belowAreaProps,m=e.id,y=void 0===m?"":m;return l("g",{className:o()("visx-threshold",n)},l(c.a,{curve:t,data:u,x:f,y1:p,defined:d},(function(e){var n=e.path,t=null,i=null;return t=n.y0(a)(u),i=n.y0(r)(u),l("g",null,l(s.a,{id:"threshold-clip-below-".concat(y)},l("path",{d:t||""})),l(s.a,{id:"threshold-clip-above-".concat(y)},l("path",{d:i||""})))})),l(c.a,Object(i.a)({curve:t,data:u,defined:d,x:f,y0:h,y1:p,strokeWidth:0,clipPath:"url(#threshold-clip-below-".concat(y,")")},b)),l(c.a,Object(i.a)({curve:t,data:u,defined:d,x:f,y0:h,y1:p,strokeWidth:0,clipPath:"url(#threshold-clip-above-".concat(y,")")},v)))}try{d.displayName="Threshold",d.__docgenInfo={description:"",displayName:"Threshold",props:{className:{defaultValue:null,description:"className applied to container g element.",name:"className",required:!1,type:{name:"string | undefined"}},curve:{defaultValue:null,description:"Sets the curve factory (from @visx/curve or d3-curve) for the area generator. Defaults to curveLinear.",name:"curve",required:!1,type:{name:"CurveFactory | undefined"}},clipAboveTo:{defaultValue:null,description:"Specifies a constant value, or an accessor called per datum, above which the *upper area* is clipped.",name:"clipAboveTo",required:!0,type:{name:"number | NumberAccessor<Datum>"}},clipBelowTo:{defaultValue:null,description:"Specifies a constant value, or an accessor called per datum, below which the *lower area* is clipped.",name:"clipBelowTo",required:!0,type:{name:"number | NumberAccessor<Datum>"}},id:{defaultValue:{value:""},description:"id for this threshold. If not set, multiple Threshold's on a page may conflict and interfere with each other.",name:"id",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Array of data for which to generate a threshold area shape.",name:"data",required:!0,type:{name:"Datum[]"}},defined:{defaultValue:null,description:"The defined accessor for the shape. The final area shape includes all points for which this\nfunction returns true. By default all points are defined.",name:"defined",required:!1,type:{name:"((datum: Datum, index: number, data: Datum[]) => boolean) | undefined"}},x:{defaultValue:null,description:"For the Area shape, specifies the x accessor function for a datum, which defaults to `d => d[0]`.\nAlternatively this may be a constant x value.",name:"x",required:!0,type:{name:"number | NumberAccessor<Datum>"}},y0:{defaultValue:null,description:'For the Area shape, specifies the accessor function (or constant value) which generates\nthe "lower" area bound to which "belowAreaProps" and "clipBelow" props apply. Defaults to `d => 0`.',name:"y0",required:!0,type:{name:"number | NumberAccessor<Datum>"}},y1:{defaultValue:null,description:'For the Area shape, specifies the accessor function (or constant value) which generates\nthe "upper" area bound to which "aboveAreaProps" and "clipAbove" props apply. Defaults to `d => d[1]`.',name:"y1",required:!0,type:{name:"number | NumberAccessor<Datum>"}},aboveAreaProps:{defaultValue:null,description:'Additional props passed to the "above" Area shape.',name:"aboveAreaProps",required:!1,type:{name:"AreaProps<Datum> | undefined"}},belowAreaProps:{defaultValue:null,description:'Additional props passed to the "below" Area shape.',name:"belowAreaProps",required:!1,type:{name:"AreaProps<Datum> | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-threshold/src/Threshold.tsx#Threshold"]={docgenInfo:d.__docgenInfo,name:"Threshold",path:"../visx-threshold/src/Threshold.tsx#Threshold"})}catch(m){}var f=t("QnPE"),h=t("JjBE"),p=a.a.createElement,v=[d],b=[h.default];n.default=function(){return p(f.a,{components:v,examples:b,readme:'# @visx/threshold\n\n<a title="@visx/threshold npm downloads" href="https://www.npmjs.com/package/@visx/threshold">\n  <img src="https://img.shields.io/npm/dm/@visx/threshold.svg?style=flat-square" />\n</a>\n\n`@visx/threshold` allows for creation of Difference Charts in `react`, which highlight the delta\nbetween two line series.\n\n## Installation\n\n```\nnpm install --save @visx/threshold\n```\n',visxPackage:"threshold"})}},Vi0D:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return l}));var r=t("+Y26"),a=t("M3gT"),i=t("Ddjo"),u=t("Xyxy"),o=t("Q4nK"),c={expand:r.a,diverging:a.a,none:i.a,silhouette:u.a,wiggle:o.a},s=Object.keys(c);function l(e){return e&&c[e]||c.none}},cjvV:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("vvkn"),a=t("xx0A"),i=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round");function u(e){return i(Object(r.b)(),e)}},cxan:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},dGDr:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return h})),t.d(n,"c",(function(){return p})),t.d(n,"d",(function(){return v})),t.d(n,"e",(function(){return b})),t.d(n,"f",(function(){return m}));var r=t("mBAT"),a=t("KdQ8"),i=t("+pY8"),u=t("lg8u"),o=t("FVKn"),c=t("uvDt"),s=t("1Wmu"),l=t("oWfS"),d=t("Vi0D");function f(e){var n=void 0===e?{}:e,t=n.innerRadius,a=n.outerRadius,i=n.cornerRadius,u=n.startAngle,o=n.endAngle,c=n.padAngle,l=n.padRadius,d=Object(r.a)();return null!=t&&Object(s.a)(d.innerRadius,t),null!=a&&Object(s.a)(d.outerRadius,a),null!=i&&Object(s.a)(d.cornerRadius,i),null!=u&&Object(s.a)(d.startAngle,u),null!=o&&Object(s.a)(d.endAngle,o),null!=c&&Object(s.a)(d.padAngle,c),null!=l&&Object(s.a)(d.padRadius,l),d}function h(e){var n=void 0===e?{}:e,t=n.x,r=n.x0,i=n.x1,u=n.y,o=n.y0,c=n.y1,l=n.defined,d=n.curve,f=Object(a.a)();return t&&Object(s.a)(f.x,t),r&&Object(s.a)(f.x0,r),i&&Object(s.a)(f.x1,i),u&&Object(s.a)(f.y,u),o&&Object(s.a)(f.y0,o),c&&Object(s.a)(f.y1,c),l&&f.defined(l),d&&f.curve(d),f}function p(e){var n=void 0===e?{}:e,t=n.x,r=n.y,a=n.defined,u=n.curve,o=Object(i.a)();return t&&Object(s.a)(o.x,t),r&&Object(s.a)(o.y,r),a&&o.defined(a),u&&o.curve(u),o}function v(e){var n=void 0===e?{}:e,t=n.startAngle,r=n.endAngle,a=n.padAngle,i=n.value,o=n.sort,c=n.sortValues,l=Object(u.a)();return(null===o||null!=o)&&l.sort(o),(null===c||null!=c)&&l.sortValues(c),null!=i&&l.value(i),null!=a&&Object(s.a)(l.padAngle,a),null!=t&&Object(s.a)(l.startAngle,t),null!=r&&Object(s.a)(l.endAngle,r),l}function b(e){var n=void 0===e?{}:e,t=n.angle,r=n.radius,a=n.defined,i=n.curve,u=Object(o.a)();return t&&Object(s.a)(u.angle,t),r&&Object(s.a)(u.radius,r),a&&u.defined(a),i&&u.curve(i),u}function m(e){var n=e.keys,t=e.value,r=e.order,a=e.offset,i=Object(c.a)();return n&&i.keys(n),t&&Object(s.a)(i.value,t),r&&i.order(Object(l.c)(r)),a&&i.offset(Object(d.c)(a)),i}},geX1:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("ERkP"),a=t.n(r),i=t("O94r"),u=t.n(i),o=t("dGDr");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(e){var n=e.children,t=e.data,r=void 0===t?[]:t,i=e.x,s=e.y,l=e.fill,d=void 0===l?"transparent":l,f=e.className,h=e.curve,p=e.innerRef,v=e.defined,b=void 0===v?function(){return!0}:v,m=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["children","data","x","y","fill","className","curve","innerRef","defined"]),y=Object(o.c)({x:i,y:s,defined:b,curve:h});return n?a.a.createElement(a.a.Fragment,null,n({path:y})):a.a.createElement("path",c({ref:p,className:u()("visx-linepath",f),d:y(r)||"",fill:d},m))}},"hsl+":function(e,n,t){"use strict";n.__esModule=!0,n.default=function(e){var n=e.from,t=void 0===n?{x:0,y:0}:n,i=e.to,o=void 0===i?{x:1,y:1}:i,c=e.fill,s=void 0===c?"transparent":c,l=e.className,d=e.innerRef,f=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["from","to","fill","className","innerRef"]);return r.default.createElement("line",u({ref:d,className:(0,a.default)("visx-line",l),x1:t.x,y1:t.y,x2:o.x,y2:o.y,fill:s},f))};var r=i(t("ERkP")),a=i(t("O94r"));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}},"m+Ft":function(e,n,t){"use strict";function r(e,n,t){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+n)/6,(e._y0+4*e._y1+t)/6)}function a(e){this._context=e}t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return a})),a.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:r(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(e,n){switch(e=+e,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,n):this._context.moveTo(e,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:r(this,e,n)}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=n}},n.b=function(e){return new a(e)}},mnQP:function(e,n,t){"use strict";t.d(n,"b",(function(){return i}));var r=t("V5T8"),a=Object(r.a)((function(){}),(function(e,n){e.setTime(+e+n)}),(function(e,n){return n-e}));a.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?Object(r.a)((function(n){n.setTime(Math.floor(n/e)*e)}),(function(n,t){n.setTime(+n+t*e)}),(function(n,t){return(t-n)/e})):a:null},n.a=a;var i=a.range},oWfS:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return l}));var r=t("Zx3a"),a=t("c6zU"),i=t("yU24"),u=t("V+6I"),o=t("NKRu"),c={ascending:r.a,descending:a.a,insideout:i.a,none:u.a,reverse:o.a},s=Object.keys(c);function l(e){return e&&c[e]||c.none}},uUzn:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/threshold",function(){return t("RauZ")}])},vvkn:function(e,n,t){"use strict";t.d(n,"a",(function(){return x}));var r=t("rnNc"),a=t("PB0s"),i=t("VJwe"),u=t("PE29"),o=t("8eBc"),c=t("NeEQ"),s=t("y1Yx"),l=t("ye78"),d=t("KvvH"),f=t("mnQP"),h=t("mHfT"),p=t("2+fR"),v=t("W1cA"),b=t("/bzO");function m(e){return new Date(e)}function y(e){return e instanceof Date?+e:+new Date(+e)}function x(e,n,t,i,u,o,c,s,l){var d=Object(p.b)(),f=d.invert,h=d.domain,v=l(".%L"),O=l(":%S"),_=l("%I:%M"),g=l("%I %p"),j=l("%a %d"),w=l("%b %d"),A=l("%B"),N=l("%Y"),T=[[c,1,1e3],[c,5,5e3],[c,15,15e3],[c,30,3e4],[o,1,6e4],[o,5,3e5],[o,15,9e5],[o,30,18e5],[u,1,36e5],[u,3,108e5],[u,6,216e5],[u,12,432e5],[i,1,864e5],[i,2,1728e5],[t,1,6048e5],[n,1,2592e6],[n,3,7776e6],[e,1,31536e6]];function P(r){return(c(r)<r?v:o(r)<r?O:u(r)<r?_:i(r)<r?g:n(r)<r?t(r)<r?j:w:e(r)<r?A:N)(r)}function D(n,t,i){if(null==n&&(n=10),"number"===typeof n){var u,o=Math.abs(i-t)/n,c=Object(r.a)((function(e){return e[2]})).right(T,o);return c===T.length?(u=Object(a.c)(t/31536e6,i/31536e6,n),n=e):c?(u=(c=T[o/T[c-1][2]<T[c][2]/o?c-1:c])[1],n=c[0]):(u=Math.max(Object(a.c)(t,i,n),1),n=s),n.every(u)}return n}return d.invert=function(e){return new Date(f(e))},d.domain=function(e){return arguments.length?h(Array.from(e,y)):h().map(m)},d.ticks=function(e){var n,t=h(),r=t[0],a=t[t.length-1],i=a<r;return i&&(n=r,r=a,a=n),n=(n=D(e,r,a))?n.range(r,a+1):[],i?n.reverse():n},d.tickFormat=function(e,n){return null==n?P:l(n)},d.nice=function(e){var n=h();return(e=D(e,n[0],n[n.length-1]))?h(Object(b.a)(n,e)):d},d.copy=function(){return Object(p.a)(d,x(e,n,t,i,u,o,c,s,l))},d}n.b=function(){return v.b.apply(x(i.a,u.a,o.g,c.b,s.a,l.a,d.a,f.a,h.a).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}},wO8m:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("ERkP"),a=t.n(r),i=t("O94r"),u=t.n(i),o=t("dGDr");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(e){var n=e.children,t=e.x,r=e.x0,i=e.x1,s=e.y,l=e.y0,d=e.y1,f=e.data,h=void 0===f?[]:f,p=e.defined,v=void 0===p?function(){return!0}:p,b=e.className,m=e.curve,y=e.innerRef,x=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["children","x","x0","x1","y","y0","y1","data","defined","className","curve","innerRef"]),O=Object(o.b)({x:t,x0:r,x1:i,y:s,y0:l,y1:d,defined:v,curve:m});return n?a.a.createElement(a.a.Fragment,null,n({path:O})):a.a.createElement("path",c({ref:y,className:u()("visx-area",b),d:O(h)||""},x))}},zjfJ:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))}},[["uUzn",0,2,1,3,4,5,7,8,10,9,11,12,15,16,29]]]);
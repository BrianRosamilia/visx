_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[50],{"/B0Q":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i}));var r=t("W1cA");const a=Symbol("implicit");function i(){var e=new Map,n=[],t=[],o=a;function c(r){var i=r+"",c=e.get(i);if(!c){if(o!==a)return o;e.set(i,c=n.push(r))}return t[(c-1)%t.length]}return c.domain=function(t){if(!arguments.length)return n.slice();n=[],e=new Map;for(const r of t){const t=r+"";e.has(t)||e.set(t,n.push(r))}return c},c.range=function(e){return arguments.length?(t=Array.from(e),c):t.slice()},c.unknown=function(e){return arguments.length?(o=e,c):o},c.copy=function(){return i(n,t).unknown(o)},r.b.apply(c,arguments),c}},"67po":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("uKU/"),a=t("xx0A"),i=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function o(e){return i(Object(r.a)(),e)}},"71qD":function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t("fGyu"),a=t("ERkP"),i=t.n(a),o=t("g2fB"),c=t("JmwF"),u=t("fHeC"),s=t("ykvB"),f=t.n(s),l=t("cc+0"),d=t("67po"),p=i.a.createElement,m=f.a.slice(5),h=function(e){return e.letter},y=function(e){return 100*Number(e.frequency)};function b(e){var n=e.width,t=e.height,i=e.events,s=void 0!==i&&i,f=n,b=t-120,g=Object(a.useMemo)((function(){return Object(l.a)({range:[0,f],round:!0,domain:m.map(h),padding:.4})}),[f]),v=Object(a.useMemo)((function(){return Object(d.a)({range:[b,0],round:!0,domain:[0,Math.max.apply(Math,Object(r.a)(m.map(y)))]})}),[b]);return n<10?null:p("svg",{width:n,height:t},p(u.a,{id:"teal"}),p("rect",{width:n,height:t,fill:"url(#teal)",rx:14}),p(c.a,{top:60},m.map((function(e){var n=h(e),t=g.bandwidth(),r=b-v(y(e)),a=g(n),i=b-r;return p(o.a,{key:"bar-".concat(n),x:a,y:i,width:t,height:r,fill:"rgba(23, 233, 217, .5)",onClick:function(){s&&alert("clicked: ".concat(JSON.stringify(Object.values(e))))}})}))))}try{b.displayName="Example",b.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},events:{defaultValue:{value:!1},description:"",name:"events",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-bars/Example.tsx#Example"]={docgenInfo:b.__docgenInfo,name:"Example",path:"src/sandboxes/visx-bars/Example.tsx#Example"})}catch(g){}},"Cf/J":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("aWzz"),a=t.n(r),i=t("ERkP"),o=t.n(i);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e){var n=e.children,t=e.id,r=e.from,a=e.to,i=e.x1,u=e.y1,s=e.x2,f=e.y2,l=e.fromOffset,d=void 0===l?"0%":l,p=e.fromOpacity,m=void 0===p?1:p,h=e.toOffset,y=void 0===h?"100%":h,b=e.toOpacity,g=void 0===b?1:b,v=e.rotate,O=e.transform,x=e.vertical,M=void 0===x||x,j=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"]),w=i,q=s,E=u,k=f;return!M||w||q||E||k||(w="0",q="0",E="0",k="1"),o.a.createElement("defs",null,o.a.createElement("linearGradient",c({id:t,x1:w,y1:E,x2:q,y2:k,gradientTransform:v?"rotate("+v+")":O},j),!!n&&n,!n&&o.a.createElement("stop",{offset:d,stopColor:r,stopOpacity:m}),!n&&o.a.createElement("stop",{offset:y,stopColor:a,stopOpacity:g})))}u.propTypes={id:a.a.string.isRequired,from:a.a.string,to:a.a.string,x1:a.a.oneOfType([a.a.string,a.a.number]),x2:a.a.oneOfType([a.a.string,a.a.number]),y1:a.a.oneOfType([a.a.string,a.a.number]),y2:a.a.oneOfType([a.a.string,a.a.number]),fromOffset:a.a.oneOfType([a.a.string,a.a.number]),fromOpacity:a.a.oneOfType([a.a.string,a.a.number]),toOffset:a.a.oneOfType([a.a.string,a.a.number]),toOpacity:a.a.oneOfType([a.a.string,a.a.number]),rotate:a.a.oneOfType([a.a.string,a.a.number]),transform:a.a.string,children:a.a.node,vertical:a.a.bool}},Gf0i:function(e,n,t){"use strict";t.r(n);var r=t("ERkP"),a=t.n(r),i=t("6wy5"),o=t("71qD"),c=t("NDN2"),u=a.a.createElement;n.default=function(){return u(i.a,{events:!0,component:o.a,title:"Bars",codeSandboxDirectoryName:"visx-bars",packageJson:c},"import React, { useMemo } from 'react';\nimport { Bar } from '@visx/shape';\nimport { Group } from '@visx/group';\nimport { GradientTealBlue } from '@visx/gradient';\nimport letterFrequency, { LetterFrequency } from '@visx/mock-data/lib/mocks/letterFrequency';\nimport { scaleBand, scaleLinear } from '@visx/scale';\n\nconst data = letterFrequency.slice(5);\nconst verticalMargin = 120;\n\n// accessors\nconst getLetter = (d: LetterFrequency) => d.letter;\nconst getLetterFrequency = (d: LetterFrequency) => Number(d.frequency) * 100;\n\nexport type BarsProps = {\n  width: number;\n  height: number;\n  events?: boolean;\n};\n\nexport default function Example({ width, height, events = false }: BarsProps) {\n  // bounds\n  const xMax = width;\n  const yMax = height - verticalMargin;\n\n  // scales, memoize for performance\n  const xScale = useMemo(\n    () =>\n      scaleBand<string>({\n        range: [0, xMax],\n        round: true,\n        domain: data.map(getLetter),\n        padding: 0.4,\n      }),\n    [xMax],\n  );\n  const yScale = useMemo(\n    () =>\n      scaleLinear<number>({\n        range: [yMax, 0],\n        round: true,\n        domain: [0, Math.max(...data.map(getLetterFrequency))],\n      }),\n    [yMax],\n  );\n\n  return width < 10 ? null : (\n    <svg width={width} height={height}>\n      <GradientTealBlue id=\"teal\" />\n      <rect width={width} height={height} fill=\"url(#teal)\" rx={14} />\n      <Group top={verticalMargin / 2}>\n        {data.map(d => {\n          const letter = getLetter(d);\n          const barWidth = xScale.bandwidth();\n          const barHeight = yMax - yScale(getLetterFrequency(d));\n          const barX = xScale(letter);\n          const barY = yMax - barHeight;\n          return (\n            <Bar\n              key={`bar-${letter}`}\n              x={barX}\n              y={barY}\n              width={barWidth}\n              height={barHeight}\n              fill=\"rgba(23, 233, 217, .5)\"\n              onClick={() => {\n                if (events) alert(`clicked: ${JSON.stringify(Object.values(d))}`);\n              }}\n            />\n          );\n        })}\n      </Group>\n    </svg>\n  );\n}\n")}},HO86:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("lEbO");function a(e,n){if(e){if("string"===typeof e)return Object(r.a)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(r.a)(e,n):void 0}}},JbVg:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bars",function(){return t("Gf0i")}])},JmwF:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t("aWzz"),a=t.n(r),i=t("ERkP"),o=t.n(i),c=t("O94r"),u=t.n(c);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e){var n=e.top,t=void 0===n?0:n,r=e.left,a=void 0===r?0:r,i=e.transform,c=e.className,f=e.children,l=e.innerRef,d=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["top","left","transform","className","children","innerRef"]);return o.a.createElement("g",s({ref:l,className:u()("visx-group",c),transform:i||"translate("+a+", "+t+")"},d),f)}f.propTypes={top:a.a.number,left:a.a.number,transform:a.a.string,className:a.a.string,children:a.a.node,innerRef:a.a.oneOfType([a.a.string,a.a.func,a.a.object])}},NDN2:function(e){e.exports=JSON.parse('{"name":"@visx/demo-bars","description":"Standalone visx bars demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/gradient":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","react":"^16.8","react-dom":"^16.8","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","bar"]}')},YaE3:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return u}));var r=function(e,n,t){e=+e,n=+n,t=(a=arguments.length)<2?(n=e,e=0,1):a<3?1:+t;for(var r=-1,a=0|Math.max(0,Math.ceil((n-e)/t)),i=new Array(a);++r<a;)i[r]=e+r*t;return i},a=t("W1cA"),i=t("/B0Q");function o(){var e,n,t=Object(i.a)().unknown(void 0),c=t.domain,u=t.range,s=0,f=1,l=!1,d=0,p=0,m=.5;function h(){var t=c().length,a=f<s,i=a?f:s,o=a?s:f;e=(o-i)/Math.max(1,t-d+2*p),l&&(e=Math.floor(e)),i+=(o-i-e*(t-d))*m,n=e*(1-d),l&&(i=Math.round(i),n=Math.round(n));var h=r(t).map((function(n){return i+e*n}));return u(a?h.reverse():h)}return delete t.unknown,t.domain=function(e){return arguments.length?(c(e),h()):c()},t.range=function(e){return arguments.length?([s,f]=e,s=+s,f=+f,h()):[s,f]},t.rangeRound=function(e){return[s,f]=e,s=+s,f=+f,l=!0,h()},t.bandwidth=function(){return n},t.step=function(){return e},t.round=function(e){return arguments.length?(l=!!e,h()):l},t.padding=function(e){return arguments.length?(d=Math.min(1,p=+e),h()):d},t.paddingInner=function(e){return arguments.length?(d=Math.min(1,e),h()):d},t.paddingOuter=function(e){return arguments.length?(p=+e,h()):p},t.align=function(e){return arguments.length?(m=Math.max(0,Math.min(1,e)),h()):m},t.copy=function(){return o(c(),[s,f]).round(l).paddingInner(d).paddingOuter(p).align(m)},a.b.apply(h(),arguments)}function c(e){var n=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return c(n())},e}function u(){return c(o.apply(null,arguments).paddingInner(1))}},Zbhd:function(e,n,t){"use strict";var r=t("PB0s"),a=t("XYeE"),i=t("jLnZ"),o=t("KLrH");n.a=function(e,n,t,c){var u,s=Object(r.c)(e,n,t);switch((c=Object(a.a)(null==c?",f":c)).type){case"s":var f=Math.max(Math.abs(e),Math.abs(n));return null!=c.precision||isNaN(u=function(e,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(n)/3)))-Object(i.a)(Math.abs(e)))}(s,f))||(c.precision=u),Object(o.b)(c,f);case"":case"e":case"g":case"p":case"r":null!=c.precision||isNaN(u=function(e,n){return e=Math.abs(e),n=Math.abs(n)-e,Math.max(0,Object(i.a)(n)-Object(i.a)(e))+1}(s,Math.max(Math.abs(e),Math.abs(n))))||(c.precision=u-("e"===c.type));break;case"f":case"%":null!=c.precision||isNaN(u=function(e){return Math.max(0,-Object(i.a)(Math.abs(e)))}(s))||(c.precision=u-2*("%"===c.type))}return Object(o.a)(c)}},"cc+0":function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("YaE3"),a=t("xx0A"),i=Object(a.b)("domain","range","reverse","align","padding","round");function o(e){return i(Object(r.a)(),e)}},fGyu:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("lEbO");var a=t("HO86");function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},fHeC:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("ERkP"),a=t.n(r),i=t("Cf/J");function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e){var n=e.from,t=void 0===n?"#17EAD9":n,r=e.to,c=void 0===r?"#6078EA":r,u=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["from","to"]);return a.a.createElement(i.a,o({from:t,to:c},u))}},g2fB:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("ERkP"),a=t.n(r),i=t("O94r"),o=t.n(i);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e){var n=e.className,t=e.innerRef,r=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["className","innerRef"]);return a.a.createElement("rect",c({ref:t,className:o()("visx-bar",n)},r))}},lEbO:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,"a",(function(){return r}))},"uKU/":function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return u}));var r=t("PB0s"),a=t("2+fR"),i=t("W1cA"),o=t("Zbhd");function c(e){var n=e.domain;return e.ticks=function(e){var t=n();return Object(r.a)(t[0],t[t.length-1],null==e?10:e)},e.tickFormat=function(e,t){var r=n();return Object(o.a)(r[0],r[r.length-1],null==e?10:e,t)},e.nice=function(t){null==t&&(t=10);var a,i=n(),o=0,c=i.length-1,u=i[o],s=i[c];return s<u&&(a=u,u=s,s=a,a=o,o=c,c=a),(a=Object(r.b)(u,s,t))>0?(u=Math.floor(u/a)*a,s=Math.ceil(s/a)*a,a=Object(r.b)(u,s,t)):a<0&&(u=Math.ceil(u*a)/a,s=Math.floor(s*a)/a,a=Object(r.b)(u,s,t)),a>0?(i[o]=Math.floor(u/a)*a,i[c]=Math.ceil(s/a)*a,n(i)):a<0&&(i[o]=Math.ceil(u*a)/a,i[c]=Math.floor(s*a)/a,n(i)),e},e}function u(){var e=Object(a.b)();return e.copy=function(){return Object(a.a)(e,u())},i.b.apply(e,arguments),c(e)}},ykvB:function(e,n,t){"use strict";n.__esModule=!0,n.default=void 0;var r=[{letter:"A",frequency:.08167},{letter:"B",frequency:.01492},{letter:"C",frequency:.02782},{letter:"D",frequency:.04253},{letter:"E",frequency:.12702},{letter:"F",frequency:.02288},{letter:"G",frequency:.02015},{letter:"H",frequency:.06094},{letter:"I",frequency:.06966},{letter:"J",frequency:.00153},{letter:"K",frequency:.00772},{letter:"L",frequency:.04025},{letter:"M",frequency:.02406},{letter:"N",frequency:.06749},{letter:"O",frequency:.07507},{letter:"P",frequency:.01929},{letter:"Q",frequency:95e-5},{letter:"R",frequency:.05987},{letter:"S",frequency:.06327},{letter:"T",frequency:.09056},{letter:"U",frequency:.02758},{letter:"V",frequency:.00978},{letter:"W",frequency:.0236},{letter:"X",frequency:.0015},{letter:"Y",frequency:.01974},{letter:"Z",frequency:74e-5}];n.default=r}},[["JbVg",0,2,1,3,4,5,6]]]);
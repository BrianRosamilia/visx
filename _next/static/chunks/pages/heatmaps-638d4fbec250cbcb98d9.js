_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[99],{"+1NP":function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t,e,a){return new Array(n).fill(1).reduce((function(n,i,c){return n.concat([{bin:c,bins:(0,r.default)(t,e,a)}])}),[])};var a,r=(a=e("mNV6"))&&a.__esModule?a:{default:a}},"67po":function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var a=e("uKU/"),r=e("xx0A"),i=Object(r.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function c(n){return i(Object(a.a)(),n)}},GKGl:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/heatmaps",function(){return e("yRVi")}])},HO86:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var a=e("lEbO");function r(n,t){if(n){if("string"===typeof n)return Object(a.a)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(a.a)(n,t):void 0}}},IkWl:function(n){n.exports=JSON.parse('{"name":"@visx/demo-heatmap","description":"Standalone visx heatmap demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^16","@types/react-dom":"^16","@visx/group":"latest","@visx/heatmap":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/scale":"latest","react":"^16","react-dom":"^16","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","heatmap"]}')},JmwF:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var a=e("aWzz"),r=e.n(a),i=e("ERkP"),c=e.n(i),o=e("O94r"),l=e.n(o);function u(){return(u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}function s(n){var t=n.top,e=void 0===t?0:t,a=n.left,r=void 0===a?0:a,i=n.transform,o=n.className,s=n.children,m=n.innerRef,p=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,["top","left","transform","className","children","innerRef"]);return c.a.createElement("g",u({ref:m,className:l()("visx-group",o),transform:i||"translate("+r+", "+e+")"},p),s)}s.propTypes={top:r.a.number,left:r.a.number,transform:r.a.string,className:r.a.string,children:r.a.node,innerRef:r.a.oneOfType([r.a.string,r.a.func,r.a.object])}},Zbhd:function(n,t,e){"use strict";var a=e("PB0s"),r=e("XYeE"),i=e("jLnZ"),c=e("KLrH");t.a=function(n,t,e,o){var l,u=Object(a.c)(n,t,e);switch((o=Object(r.a)(null==o?",f":o)).type){case"s":var s=Math.max(Math.abs(n),Math.abs(t));return null!=o.precision||isNaN(l=function(n,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(i.a)(t)/3)))-Object(i.a)(Math.abs(n)))}(u,s))||(o.precision=l),Object(c.b)(o,s);case"":case"e":case"g":case"p":case"r":null!=o.precision||isNaN(l=function(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,Object(i.a)(t)-Object(i.a)(n))+1}(u,Math.max(Math.abs(n),Math.abs(t))))||(o.precision=l-("e"===o.type));break;case"f":case"%":null!=o.precision||isNaN(l=function(n){return Math.max(0,-Object(i.a)(Math.abs(n)))}(u))||(o.precision=l-2*("%"===o.type))}return Object(c.a)(o)}},Zydf:function(n,t,e){"use strict";e.d(t,"a",(function(){return x}));var a=e("fGyu"),r=e("ERkP"),i=e.n(r),c=e("JmwF"),o=e("+1NP"),l=e.n(o),u=e("67po"),s=e("aWzz"),m=e.n(s),p=e("O94r"),f=e.n(p);function d(){return(d=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}function b(n){var t=n.className,e=n.top,a=n.left,r=n.data,o=void 0===r?[]:r,l=n.gap,u=void 0===l?1:l,s=n.radius,m=void 0===s?6:s,p=n.xScale,b=n.yScale,h=n.colorScale,g=void 0===h?function(){}:h,y=n.opacityScale,x=void 0===y?function(){return 1}:y,v=n.bins,S=void 0===v?function(n){return n&&n.bins}:v,O=n.count,w=void 0===O?function(n){return n&&n.count}:O,M=n.children,j=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,["className","top","left","data","gap","radius","xScale","yScale","colorScale","opacityScale","bins","count","children"]),N=m-u,E=o.map((function(n,t){var e=p(t);return S(n).map((function(a,r){var i=w(a);return{bin:a,row:r,column:t,datum:n,radius:m,gap:u,count:i,cx:m+e,cy:b(r)+u+m,r:N,opacity:x(i),color:g(i)}}))}));return M?i.a.createElement(i.a.Fragment,null,M(E)):i.a.createElement(c.a,{className:"visx-heatmap-circles",top:e,left:a},E.map((function(n){return n.map((function(n){return i.a.createElement("circle",d({key:"heatmap-tile-circle-"+n.row+"-"+n.column,className:f()("visx-heatmap-circle",t),r:n.r,cx:n.cx,cy:n.cy,fill:n.color,fillOpacity:n.opacity},j))}))})))}function h(){return(h=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}function g(n){var t=n.className,e=n.top,a=n.left,r=n.data,o=void 0===r?[]:r,l=n.binWidth,u=void 0===l?6:l,s=n.binHeight,m=void 0===s?6:s,p=n.x0,d=void 0===p?0:p,b=n.gap,g=void 0===b?1:b,y=n.xScale,x=n.yScale,v=n.colorScale,S=void 0===v?function(){}:v,O=n.opacityScale,w=void 0===O?function(){return 1}:O,M=n.bins,j=void 0===M?function(n){return n&&n.bins}:M,N=n.count,E=void 0===N?function(n){return n&&n.count}:N,k=n.children,_=function(n,t){if(null==n)return{};var e,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)e=i[a],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,["className","top","left","data","binWidth","binHeight","x0","gap","xScale","yScale","colorScale","opacityScale","bins","count","children"]),R=u-g,H=m-g,C=o.map((function(n,t){var e=y(t);return j(n).map((function(a,r){var i=E(a);return{bin:a,row:r,column:t,datum:n,width:R,height:H,gap:g,count:i,x:e+d,y:x(r)+g,color:S(i),opacity:w(i)}}))}));return k?i.a.createElement(i.a.Fragment,null,k(C)):i.a.createElement(c.a,{className:"visx-heatmap-rects",top:e,left:a},C.map((function(n){return n.map((function(n){return i.a.createElement("rect",h({key:"heatmap-tile-rect-"+n.row+"-"+n.column,className:f()("visx-heatmap-rect",t),width:n.width,height:n.height,x:n.x,y:n.y,fill:n.color,fillOpacity:n.opacity},_))}))})))}b.propTypes={data:m.a.array,left:m.a.number,top:m.a.number,gap:m.a.number,radius:m.a.number,xScale:m.a.func.isRequired,yScale:m.a.func.isRequired,bins:m.a.func,count:m.a.func,className:m.a.string,children:m.a.func},g.propTypes={data:m.a.array,left:m.a.number,top:m.a.number,binWidth:m.a.number,binHeight:m.a.number,x0:m.a.number,gap:m.a.number,xScale:m.a.func.isRequired,yScale:m.a.func.isRequired,bins:m.a.func,count:m.a.func,className:m.a.string,children:m.a.func};var y=i.a.createElement,x="#28272c",v=l()(16,16);function S(n,t){return Math.max.apply(Math,Object(a.a)(n.map(t)))}var O=function(n){return n.bins},w=function(n){return n.count},M=S(v,(function(n){return S(O(n),w)})),j=S(v,(function(n){return O(n).length})),N=Object(u.a)({domain:[0,v.length]}),E=Object(u.a)({domain:[0,j]}),k=Object(u.a)({range:["#77312f","#f33d15"],domain:[0,M]}),_=Object(u.a)({range:["#122549","#b4fbde"],domain:[0,M]}),R=Object(u.a)({range:[.1,1],domain:[0,M]}),H={top:10,left:20,right:20,bottom:110};t.b=function(n){var t,e,r=n.width,i=n.height,o=n.events,l=void 0!==o&&o,u=n.margin,s=void 0===u?H:u,m=n.separation,p=void 0===m?20:m,f=(r>s.left+s.right?r-s.left-s.right-p:r)/2,d=i-s.bottom-s.top,h=f/v.length,S=(t=[h,d/j],e=function(n){return n},Math.min.apply(Math,Object(a.a)(t.map(e)))/2);return N.range([0,f]),E.range([d,0]),r<10?null:y("svg",{width:r,height:i},y("rect",{x:0,y:0,width:r,height:i,rx:14,fill:x}),y(c.a,{top:s.top,left:s.left},y(b,{data:v,xScale:N,yScale:E,colorScale:k,opacityScale:R,radius:S,gap:2},(function(n){return n.map((function(n){return n.map((function(n){return y("circle",{key:"heatmap-circle-".concat(n.row,"-").concat(n.column),className:"visx-heatmap-circle",cx:n.cx,cy:n.cy,r:n.r,fill:n.color,fillOpacity:n.opacity,onClick:function(){if(l){var t=n.row,e=n.column;alert(JSON.stringify({row:t,column:e,bin:n.bin}))}}})}))}))}))),y(c.a,{top:s.top,left:f+s.left+p},y(g,{data:v,xScale:N,yScale:E,colorScale:_,opacityScale:R,binWidth:h,binHeight:h,gap:2},(function(n){return n.map((function(n){return n.map((function(n){return y("rect",{key:"heatmap-rect-".concat(n.row,"-").concat(n.column),className:"visx-heatmap-rect",width:n.width,height:n.height,x:n.x,y:n.y,fill:n.color,fillOpacity:n.opacity,onClick:function(){if(l){var t=n.row,e=n.column;alert(JSON.stringify({row:t,column:e,bin:n.bin}))}}})}))}))}))))};try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},separation:{defaultValue:null,description:"",name:"separation",required:!1,type:{name:"number | undefined"}},events:{defaultValue:null,description:"",name:"events",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-heatmap/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-heatmap/Example.tsx#Example"})}catch(C){}},fGyu:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var a=e("lEbO");var r=e("HO86");function i(n){return function(n){if(Array.isArray(n))return Object(a.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(r.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},lEbO:function(n,t,e){"use strict";function a(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}e.d(t,"a",(function(){return a}))},mNV6:function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t,e){void 0===t&&(t=r);void 0===e&&(e=a);return new Array(n).fill(1).reduce((function(a,r,i){return a.concat([{bin:t(i,n),count:e(i,n)}])}),[])};var a=function(n,t){return Math.random()*(25*(t-n))},r=function(n,t){return 150*n}},"uKU/":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return l}));var a=e("PB0s"),r=e("2+fR"),i=e("W1cA"),c=e("Zbhd");function o(n){var t=n.domain;return n.ticks=function(n){var e=t();return Object(a.a)(e[0],e[e.length-1],null==n?10:n)},n.tickFormat=function(n,e){var a=t();return Object(c.a)(a[0],a[a.length-1],null==n?10:n,e)},n.nice=function(e){null==e&&(e=10);var r,i=t(),c=0,o=i.length-1,l=i[c],u=i[o];return u<l&&(r=l,l=u,u=r,r=c,c=o,o=r),(r=Object(a.b)(l,u,e))>0?(l=Math.floor(l/r)*r,u=Math.ceil(u/r)*r,r=Object(a.b)(l,u,e)):r<0&&(l=Math.ceil(l*r)/r,u=Math.floor(u*r)/r,r=Object(a.b)(l,u,e)),r>0?(i[c]=Math.floor(l/r)*r,i[o]=Math.ceil(u/r)*r,t(i)):r<0&&(i[c]=Math.ceil(l*r)/r,i[o]=Math.floor(u*r)/r,t(i)),n},n}function l(){var n=Object(r.b)();return n.copy=function(){return Object(r.a)(n,l())},i.b.apply(n,arguments),o(n)}},yRVi:function(n,t,e){"use strict";e.r(t);var a=e("ERkP"),r=e.n(a),i=e("6wy5"),c=e("Zydf"),o=e("IkWl"),l=r.a.createElement;t.default=function(){return l(i.a,{events:!0,margin:{top:10,left:40,right:30,bottom:80},component:c.b,title:"Heatmaps",codeSandboxDirectoryName:"visx-heatmap",packageJson:o},"import React from 'react';\nimport { Group } from '@visx/group';\nimport genBins, { Bin, Bins } from '@visx/mock-data/lib/generators/genBins';\nimport { scaleLinear } from '@visx/scale';\nimport { HeatmapCircle, HeatmapRect } from '@visx/heatmap';\n\nconst hot1 = '#77312f';\nconst hot2 = '#f33d15';\nconst cool1 = '#122549';\nconst cool2 = '#b4fbde';\nexport const background = '#28272c';\n\nconst binData = genBins(/* length = */ 16, /* height = */ 16);\n\nfunction max<Datum>(data: Datum[], value: (d: Datum) => number): number {\n  return Math.max(...data.map(value));\n}\n\nfunction min<Datum>(data: Datum[], value: (d: Datum) => number): number {\n  return Math.min(...data.map(value));\n}\n\n// accessors\nconst bins = (d: Bins) => d.bins;\nconst count = (d: Bin) => d.count;\n\nconst colorMax = max(binData, d => max(bins(d), count));\nconst bucketSizeMax = max(binData, d => bins(d).length);\n\n// scales\nconst xScale = scaleLinear<number>({\n  domain: [0, binData.length],\n});\nconst yScale = scaleLinear<number>({\n  domain: [0, bucketSizeMax],\n});\nconst circleColorScale = scaleLinear<string>({\n  range: [hot1, hot2],\n  domain: [0, colorMax],\n});\nconst rectColorScale = scaleLinear<string>({\n  range: [cool1, cool2],\n  domain: [0, colorMax],\n});\nconst opacityScale = scaleLinear<number>({\n  range: [0.1, 1],\n  domain: [0, colorMax],\n});\n\nexport type HeatmapProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n  separation?: number;\n  events?: boolean;\n};\n\nconst defaultMargin = { top: 10, left: 20, right: 20, bottom: 110 };\n\nexport default ({\n  width,\n  height,\n  events = false,\n  margin = defaultMargin,\n  separation = 20,\n}: HeatmapProps) => {\n  // bounds\n  const size =\n    width > margin.left + margin.right ? width - margin.left - margin.right - separation : width;\n  const xMax = size / 2;\n  const yMax = height - margin.bottom - margin.top;\n\n  const binWidth = xMax / binData.length;\n  const binHeight = yMax / bucketSizeMax;\n  const radius = min([binWidth, binHeight], d => d) / 2;\n\n  xScale.range([0, xMax]);\n  yScale.range([yMax, 0]);\n\n  return width < 10 ? null : (\n    <svg width={width} height={height}>\n      <rect x={0} y={0} width={width} height={height} rx={14} fill={background} />\n      <Group top={margin.top} left={margin.left}>\n        <HeatmapCircle\n          data={binData}\n          xScale={xScale}\n          yScale={yScale}\n          colorScale={circleColorScale}\n          opacityScale={opacityScale}\n          radius={radius}\n          gap={2}\n        >\n          {heatmap =>\n            heatmap.map(heatmapBins =>\n              heatmapBins.map(bin => (\n                <circle\n                  key={`heatmap-circle-${bin.row}-${bin.column}`}\n                  className=\"visx-heatmap-circle\"\n                  cx={bin.cx}\n                  cy={bin.cy}\n                  r={bin.r}\n                  fill={bin.color}\n                  fillOpacity={bin.opacity}\n                  onClick={() => {\n                    if (!events) return;\n                    const { row, column } = bin;\n                    alert(JSON.stringify({ row, column, bin: bin.bin }));\n                  }}\n                />\n              )),\n            )\n          }\n        </HeatmapCircle>\n      </Group>\n      <Group top={margin.top} left={xMax + margin.left + separation}>\n        <HeatmapRect\n          data={binData}\n          xScale={xScale}\n          yScale={yScale}\n          colorScale={rectColorScale}\n          opacityScale={opacityScale}\n          binWidth={binWidth}\n          binHeight={binWidth}\n          gap={2}\n        >\n          {heatmap =>\n            heatmap.map(heatmapBins =>\n              heatmapBins.map(bin => (\n                <rect\n                  key={`heatmap-rect-${bin.row}-${bin.column}`}\n                  className=\"visx-heatmap-rect\"\n                  width={bin.width}\n                  height={bin.height}\n                  x={bin.x}\n                  y={bin.y}\n                  fill={bin.color}\n                  fillOpacity={bin.opacity}\n                  onClick={() => {\n                    if (!events) return;\n                    const { row, column } = bin;\n                    alert(JSON.stringify({ row, column, bin: bin.bin }));\n                  }}\n                />\n              )),\n            )\n          }\n        </HeatmapRect>\n      </Group>\n    </svg>\n  );\n};\n")}}},[["GKGl",0,2,1,3,4,5,6]]]);
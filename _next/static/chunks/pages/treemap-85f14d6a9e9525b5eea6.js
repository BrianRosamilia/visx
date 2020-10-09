_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[119],{"/Mxz":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/treemap",function(){return t("64y0")}])},"64y0":function(e,n,t){"use strict";t.r(n);var r=t("ERkP"),a=t.n(r),o=t("6wy5"),i=t("GtZW"),c=t("a41g"),s=a.a.createElement;n.default=function(){return s(o.a,{component:i.c,title:"Treemap",codeSandboxDirectoryName:"visx-treemap",packageJson:c},"import React, { useState } from 'react';\nimport { Group } from '@visx/group';\nimport {\n  Treemap,\n  hierarchy,\n  stratify,\n  treemapSquarify,\n  treemapBinary,\n  treemapDice,\n  treemapResquarify,\n  treemapSlice,\n  treemapSliceDice,\n} from '@visx/hierarchy';\nimport { TileMethod } from '@visx/hierarchy/lib/types';\nimport shakespeare, { Shakespeare } from '@visx/mock-data/lib/mocks/shakespeare';\n\nimport { scaleLinear } from '@visx/scale';\n\nexport const color1 = '#f3e9d2';\nconst color2 = '#4281a4';\nexport const background = '#114b5f';\n\nconst colorScale = scaleLinear<string>({\n  domain: [0, Math.max(...shakespeare.map(d => d.size || 0))],\n  range: [color2, color1],\n});\n\nconst data = stratify<Shakespeare>()\n  .id(d => d.id)\n  .parentId(d => d.parent)(shakespeare)\n  .sum(d => d.size || 0);\n\nconst tileMethods: { [tile: string]: TileMethod<typeof data> } = {\n  treemapSquarify,\n  treemapBinary,\n  treemapDice,\n  treemapResquarify,\n  treemapSlice,\n  treemapSliceDice,\n};\n\nconst defaultMargin = { top: 10, left: 10, right: 10, bottom: 10 };\n\nexport type TreemapProps = {\n  width: number;\n  height: number;\n  margin?: { top: number; right: number; bottom: number; left: number };\n};\n\nexport default function TreemapDemo({ width, height, margin = defaultMargin }: TreemapProps) {\n  const [tileMethod, setTileMethod] = useState<string>('treemapSquarify');\n  const xMax = width - margin.left - margin.right;\n  const yMax = height - margin.top - margin.bottom;\n  const root = hierarchy(data).sort((a, b) => (b.value || 0) - (a.value || 0));\n\n  return width < 10 ? null : (\n    <div>\n      <label>tile method</label>{' '}\n      <select\n        onClick={e => e.stopPropagation()}\n        onChange={e => setTileMethod(e.target.value)}\n        value={tileMethod}\n      >\n        {Object.keys(tileMethods).map(tile => (\n          <option key={tile} value={tile}>\n            {tile}\n          </option>\n        ))}\n      </select>\n      <div>\n        <svg width={width} height={height}>\n          <rect width={width} height={height} rx={14} fill={background} />\n          <Treemap<typeof data>\n            top={margin.top}\n            root={root}\n            size={[xMax, yMax]}\n            tile={tileMethods[tileMethod]}\n            round\n          >\n            {treemap => (\n              <Group>\n                {treemap\n                  .descendants()\n                  .reverse()\n                  .map((node, i) => {\n                    const nodeWidth = node.x1 - node.x0;\n                    const nodeHeight = node.y1 - node.y0;\n                    return (\n                      <Group\n                        key={`node-${i}`}\n                        top={node.y0 + margin.top}\n                        left={node.x0 + margin.left}\n                      >\n                        {node.depth === 1 && (\n                          <rect\n                            width={nodeWidth}\n                            height={nodeHeight}\n                            stroke={background}\n                            strokeWidth={4}\n                            fill=\"transparent\"\n                          />\n                        )}\n                        {node.depth > 2 && (\n                          <rect\n                            width={nodeWidth}\n                            height={nodeHeight}\n                            stroke={background}\n                            fill={colorScale(node.value || 0)}\n                          />\n                        )}\n                      </Group>\n                    );\n                  })}\n              </Group>\n            )}\n          </Treemap>\n        </svg>\n      </div>\n    </div>\n  );\n}\n")}},"67po":function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("uKU/"),a=t("xx0A"),o=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function i(e){return o(Object(r.a)(),e)}},HO86:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("lEbO");function a(e,n){if(e){if("string"===typeof e)return Object(r.a)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(r.a)(e,n):void 0}}},JmwF:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("aWzz"),a=t.n(r),o=t("ERkP"),i=t.n(o),c=t("O94r"),s=t.n(c);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e){var n=e.top,t=void 0===n?0:n,r=e.left,a=void 0===r?0:r,o=e.transform,c=e.className,l=e.children,p=e.innerRef,h=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["top","left","transform","className","children","innerRef"]);return i.a.createElement("g",u({ref:p,className:s()("visx-group",c),transform:o||"translate("+a+", "+t+")"},h),l)}l.propTypes={top:a.a.number,left:a.a.number,transform:a.a.string,className:a.a.string,children:a.a.node,innerRef:a.a.oneOfType([a.a.string,a.a.func,a.a.object])}},Zbhd:function(e,n,t){"use strict";var r=t("PB0s"),a=t("XYeE"),o=t("jLnZ"),i=t("KLrH");n.a=function(e,n,t,c){var s,u=Object(r.c)(e,n,t);switch((c=Object(a.a)(null==c?",f":c)).type){case"s":var l=Math.max(Math.abs(e),Math.abs(n));return null!=c.precision||isNaN(s=function(e,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(o.a)(n)/3)))-Object(o.a)(Math.abs(e)))}(u,l))||(c.precision=s),Object(i.b)(c,l);case"":case"e":case"g":case"p":case"r":null!=c.precision||isNaN(s=function(e,n){return e=Math.abs(e),n=Math.abs(n)-e,Math.max(0,Object(o.a)(n)-Object(o.a)(e))+1}(u,Math.max(Math.abs(e),Math.abs(n))))||(c.precision=s-("e"===c.type));break;case"f":case"%":null!=c.precision||isNaN(s=function(e){return Math.max(0,-Object(o.a)(Math.abs(e)))}(u))||(c.precision=s-2*("%"===c.type))}return Object(i.a)(c)}},fGyu:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("lEbO");var a=t("HO86");function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},lEbO:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,"a",(function(){return r}))},"uKU/":function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return s}));var r=t("PB0s"),a=t("2+fR"),o=t("W1cA"),i=t("Zbhd");function c(e){var n=e.domain;return e.ticks=function(e){var t=n();return Object(r.a)(t[0],t[t.length-1],null==e?10:e)},e.tickFormat=function(e,t){var r=n();return Object(i.a)(r[0],r[r.length-1],null==e?10:e,t)},e.nice=function(t){null==t&&(t=10);var a,o=n(),i=0,c=o.length-1,s=o[i],u=o[c];return u<s&&(a=s,s=u,u=a,a=i,i=c,c=a),(a=Object(r.b)(s,u,t))>0?(s=Math.floor(s/a)*a,u=Math.ceil(u/a)*a,a=Object(r.b)(s,u,t)):a<0&&(s=Math.ceil(s*a)/a,u=Math.floor(u*a)/a,a=Object(r.b)(s,u,t)),a>0?(o[i]=Math.floor(s/a)*a,o[c]=Math.ceil(u/a)*a,n(o)):a<0&&(o[i]=Math.ceil(s*a)/a,o[c]=Math.floor(u*a)/a,n(o)),e},e}function s(){var e=Object(a.b)();return e.copy=function(){return Object(a.a)(e,s())},o.b.apply(e,arguments),c(e)}}},[["/Mxz",0,2,1,3,4,5,6,25]]]);
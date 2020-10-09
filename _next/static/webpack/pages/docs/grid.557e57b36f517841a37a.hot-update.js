webpackHotUpdate_N_E("pages/docs/grid",{

/***/ "./src/components/DocPage.tsx":
/*!************************************!*\
  !*** ./src/components/DocPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DocPage; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"../../node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown/with-html */ \"../../node_modules/react-markdown/with-html.js\");\n/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ApiTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApiTable */ \"./src/components/ApiTable.tsx\");\n/* harmony import */ var _PackageList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PackageList */ \"./src/components/PackageList.tsx\");\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Page */ \"./src/components/Page.tsx\");\nvar _jsxFileName = \"/Users/harry/dev/visx/packages/visx-demo/src/components/DocPage.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/* eslint-disable no-underscore-dangle */\n\n\n\n\n\nfunction DocPage(_ref) {\n  var _this = this;\n\n  var components = _ref.components,\n      examples = _ref.examples,\n      visxPackage = _ref.visxPackage,\n      readme = _ref.readme;\n  return __jsx(_Page__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    wrapper: false,\n    title: \"@visx/\".concat(visxPackage, \" documentation\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1191959484\" + \" \" + \"doc-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1191959484\" + \" \" + \"doc-nav\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(_PackageList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    compact: true,\n    grid: false,\n    emphasizePackage: visxPackage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"jsx-1191959484\" + \" \" + \"doc-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1191959484\" + \" \" + \"doc-readme\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, __jsx(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    escapeHtml: false,\n    source: readme,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  })), examples && examples.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h2\", {\n    className: \"jsx-1191959484\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 15\n    }\n  }, \"Examples\"), __jsx(\"div\", {\n    className: \"jsx-1191959484\" + \" \" + \"examples\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }, examples.map(function (example, i) {\n    return __jsx(\"div\", {\n      key: i,\n      className: \"jsx-1191959484\" + \" \" + \"example\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 19\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(example));\n  }))), components && components.length > 0 && __jsx(\"div\", {\n    className: \"jsx-1191959484\" + \" \" + \"component-docs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1191959484\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-1191959484\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, \"Exports\"), __jsx(\"ul\", {\n    className: \"jsx-1191959484\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }, components.map(function (component) {\n    // @ts-ignore TS doesn't know about docgenInfo\n    var docgenInfo = component === null || component === void 0 ? void 0 : component.__docgenInfo;\n\n    var _ref2 = docgenInfo || {},\n        _ref2$displayName = _ref2.displayName,\n        displayName = _ref2$displayName === void 0 ? '' : _ref2$displayName;\n\n    var isComponent = displayName && displayName[0].toLowerCase() !== displayName[0];\n    return docgenInfo ? __jsx(\"li\", {\n      key: displayName,\n      className: \"jsx-1191959484\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 23\n      }\n    }, __jsx(\"a\", {\n      href: \"#\".concat(displayName),\n      className: \"jsx-1191959484\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 25\n      }\n    }, __jsx(\"code\", {\n      className: \"jsx-1191959484\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 27\n      }\n    }, isComponent && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, \"<\"), \"\".concat(displayName).concat(isComponent ? '' : '()'), isComponent && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, \"\\xA0/>\")))) : null;\n  }))), __jsx(\"div\", {\n    className: \"jsx-1191959484\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-1191959484\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }, \"APIs\"), components.map(function (component) {\n    // @ts-ignore TS doesn't know about docgenInfo\n    var docgenInfo = component.__docgenInfo;\n    return docgenInfo ? __jsx(_ApiTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: docgenInfo.displayName,\n      docgenInfo: docgenInfo,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 21\n      }\n    }) : null;\n  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1191959484\",\n    __self: this\n  }, \".doc-container.jsx-1191959484{margin-top:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.doc-content.jsx-1191959484{width:100%;}.doc-content.jsx-1191959484 h1{margin-bottom:1.2em;line-height:0;font-size:2em;}.doc-content.jsx-1191959484 img{max-width:50vw;max-height:50vh;}.doc-content.jsx-1191959484 th,.doc-content.jsx-1191959484 td{border:1px solid;padding:5px 10px 5px 5px;}.doc-nav.jsx-1191959484{margin-right:5em;width:140px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.doc-content.jsx-1191959484 code{font-family:'Menlo',monospace;font-weight:bold;padding:0.2rem 0.3rem;background-color:#efefef;line-height:1.8em;font-size:0.8em;}.doc-content.jsx-1191959484 code[class*='language-']{background-color:transparent;font-weight:300;color:#222;box-shadow:none;}.doc-readme.jsx-1191959484 pre{background-color:#efefef;display:inline-block;padding:0.5em;min-width:33vw;border-radius:3px;}.doc-content.jsx-1191959484 table{border-collapse:collapse;font-size:12px;font-family:monospace;line-height:1em;border-color:#efefef;margin-top:0.25rem;}.examples.jsx-1191959484{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.example.jsx-1191959484{min-width:400px;max-width:33%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.component-docs.jsx-1191959484{display:grid;grid-template-columns:1fr 180px;}@media (max-width:800px){.doc-container.jsx-1191959484{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;min-width:90vw;max-width:90vw;margin:0;}.example.jsx-1191959484{max-width:100%;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJyeS9kZXYvdmlzeC9wYWNrYWdlcy92aXN4LWRlbW8vc3JjL2NvbXBvbmVudHMvRG9jUGFnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVrQixBQUcyQixBQUtMLEFBR1MsQUFLTCxBQUtFLEFBSUEsQUFLYyxBQVFGLEFBTUosQUFPQSxBQVFaLEFBSUcsQUFLSCxBQUttQixBQU1mLFdBdEVuQixFQTREa0MsRUFwRGhCLEFBK0RoQixDQTVFYSxBQTREQyxDQTFDVyxBQUliLEdBZEUsS0FpQ08sQUFPTixJQXpCRCxBQVlFLENBUkMsQUFrQ0wsQ0EvQ2QsR0FMZ0IsTUF3Q1EsRUE5QnhCLEdBaUJhLEFBOEJiLENBeEJnQixDQWRRLENBbEJ4QixRQTJCa0IsSUFNRCxFQU9DLE9BckJTLEdBUzNCLEVBa0JpQixDQVpHLEdBT0csT0EzQnZCLEtBdkJxQixHQTRDckIsQ0Fmb0IsS0FzQkMsRUFVckIsQ0FRbUIsVUF2Q0QsS0F3Q0MsQ0FsQm5CLFVBckJBLEdBeUJBLENBZWEsU0FDWCxrQkF2RUYiLCJmaWxlIjoiL1VzZXJzL2hhcnJ5L2Rldi92aXN4L3BhY2thZ2VzL3Zpc3gtZGVtby9zcmMvY29tcG9uZW50cy9Eb2NQYWdlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duL3dpdGgtaHRtbCc7XG5cbmltcG9ydCBBcGlUYWJsZSBmcm9tICcuL0FwaVRhYmxlJztcbmltcG9ydCBQYWNrYWdlTGlzdCBmcm9tICcuL1BhY2thZ2VMaXN0JztcbmltcG9ydCBQYWdlIGZyb20gJy4vUGFnZSc7XG5pbXBvcnQgeyBEb2NHZW5JbmZvLCBWaXN4UGFja2FnZSB9IGZyb20gJy4uL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY29tcG9uZW50cz86IHVua25vd25bXTtcbiAgZXhhbXBsZXM/OiAoUmVhY3QuQ29tcG9uZW50Q2xhc3MgfCBSZWFjdC5GQylbXTtcbiAgdmlzeFBhY2thZ2U6IFZpc3hQYWNrYWdlO1xuICByZWFkbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY1BhZ2UoeyBjb21wb25lbnRzLCBleGFtcGxlcywgdmlzeFBhY2thZ2UsIHJlYWRtZSB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQYWdlIHdyYXBwZXI9e2ZhbHNlfSB0aXRsZT17YEB2aXN4LyR7dmlzeFBhY2thZ2V9IGRvY3VtZW50YXRpb25gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1uYXZcIj5cbiAgICAgICAgICA8UGFja2FnZUxpc3QgY29tcGFjdCBncmlkPXtmYWxzZX0gZW1waGFzaXplUGFja2FnZT17dmlzeFBhY2thZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2MtcmVhZG1lXCI+XG4gICAgICAgICAgICA8TWFya2Rvd24gZXNjYXBlSHRtbD17ZmFsc2V9IHNvdXJjZT17cmVhZG1lfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtleGFtcGxlcyAmJiBleGFtcGxlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxoMj5FeGFtcGxlczwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZXNcIj5cbiAgICAgICAgICAgICAgICB7ZXhhbXBsZXMubWFwKChleGFtcGxlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZXhhbXBsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChleGFtcGxlKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2NvbXBvbmVudHMgJiYgY29tcG9uZW50cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWRvY3NcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+RXhwb3J0czwvaDI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge2NvbXBvbmVudHMubWFwKGNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVFMgZG9lc24ndCBrbm93IGFib3V0IGRvY2dlbkluZm9cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jZ2VuSW5mbyA9IGNvbXBvbmVudD8uX19kb2NnZW5JbmZvIGFzIERvY0dlbkluZm8gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGlzcGxheU5hbWUgPSAnJyB9ID0gZG9jZ2VuSW5mbyB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lICYmIGRpc3BsYXlOYW1lWzBdLnRvTG93ZXJDYXNlKCkgIT09IGRpc3BsYXlOYW1lWzBdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jZ2VuSW5mbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtkaXNwbGF5TmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgIyR7ZGlzcGxheU5hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0NvbXBvbmVudCAmJiA8PiZsdDs8Lz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2Rpc3BsYXlOYW1lfSR7aXNDb21wb25lbnQgPyAnJyA6ICcoKSd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNDb21wb25lbnQgJiYgPD4mbmJzcDsvJmd0OzwvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkFQSXM8L2gyPlxuICAgICAgICAgICAgICAgIHtjb21wb25lbnRzLm1hcChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUUyBkb2Vzbid0IGtub3cgYWJvdXQgZG9jZ2VuSW5mb1xuICAgICAgICAgICAgICAgICAgY29uc3QgZG9jZ2VuSW5mbyA9IGNvbXBvbmVudC5fX2RvY2dlbkluZm8gYXMgRG9jR2VuSW5mbyB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkb2NnZW5JbmZvID8gKFxuICAgICAgICAgICAgICAgICAgICA8QXBpVGFibGUga2V5PXtkb2NnZW5JbmZvLmRpc3BsYXlOYW1lfSBkb2NnZW5JbmZvPXtkb2NnZW5JbmZvfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmRvYy1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1jb250ZW50IDpnbG9iYWwoaDEpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbChpbWcpIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwdnc7XG4gICAgICAgICAgbWF4LWhlaWdodDogNTB2aDtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbCh0aCksXG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKHRkKSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLW5hdiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1ZW07XG4gICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKGNvZGUpIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01lbmxvJywgbW9ub3NwYWNlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjNyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbChjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10pIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1yZWFkbWUgOmdsb2JhbChwcmUpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICBtaW4td2lkdGg6IDMzdnc7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKHRhYmxlKSB7XG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5leGFtcGxlcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cbiAgICAgICAgLmV4YW1wbGUge1xuICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMyU7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5jb21wb25lbnQtZG9jcyB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxODBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAuZG9jLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDkwdnc7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5leGFtcGxlIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG50cnkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBEb2NQYWdlLmRpc3BsYXlOYW1lID0gXCJEb2NQYWdlXCI7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIERvY1BhZ2UuX19kb2NnZW5JbmZvID0geyBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwiZGlzcGxheU5hbWVcIjogXCJEb2NQYWdlXCIsIFwicHJvcHNcIjogeyBcImNvbXBvbmVudHNcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcImNvbXBvbmVudHNcIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwidW5rbm93bltdIHwgdW5kZWZpbmVkXCIgfSB9LCBcImV4YW1wbGVzXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJleGFtcGxlc1wiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCIoQ29tcG9uZW50Q2xhc3M8e30sIGFueT4gfCBGQzx7fT4pW10gfCB1bmRlZmluZWRcIiB9IH0sIFwidmlzeFBhY2thZ2VcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcInZpc3hQYWNrYWdlXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwiVmlzeFBhY2thZ2VcIiB9IH0sIFwicmVhZG1lXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJyZWFkbWVcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCJzdHJpbmdcIiB9IH0gfSB9O1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAodHlwZW9mIFNUT1JZQk9PS19SRUFDVF9DTEFTU0VTICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIFNUT1JZQk9PS19SRUFDVF9DTEFTU0VTW1wic3JjL2NvbXBvbmVudHMvRG9jUGFnZS50c3gjRG9jUGFnZVwiXSA9IHsgZG9jZ2VuSW5mbzogRG9jUGFnZS5fX2RvY2dlbkluZm8sIG5hbWU6IFwiRG9jUGFnZVwiLCBwYXRoOiBcInNyYy9jb21wb25lbnRzL0RvY1BhZ2UudHN4I0RvY1BhZ2VcIiB9O1xufVxuY2F0Y2ggKF9fcmVhY3RfZG9jZ2VuX3R5cGVzY3JpcHRfbG9hZGVyX2Vycm9yKSB7IH0iXX0= */\\n/*@ sourceURL=/Users/harry/dev/visx/packages/visx-demo/src/components/DocPage.tsx */\"));\n}\n_c = DocPage;\n\ntry {\n  // @ts-ignore\n  DocPage.displayName = \"DocPage\"; // @ts-ignore\n\n  DocPage.__docgenInfo = {\n    \"description\": \"\",\n    \"displayName\": \"DocPage\",\n    \"props\": {\n      \"components\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"components\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"unknown[] | undefined\"\n        }\n      },\n      \"examples\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"examples\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"(ComponentClass<{}, any> | FC<{}>)[] | undefined\"\n        }\n      },\n      \"visxPackage\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"visxPackage\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"VisxPackage\"\n        }\n      },\n      \"readme\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"readme\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"string\"\n        }\n      }\n    }\n  }; // @ts-ignore\n\n  if (typeof STORYBOOK_REACT_CLASSES !== \"undefined\") // @ts-ignore\n    STORYBOOK_REACT_CLASSES[\"src/components/DocPage.tsx#DocPage\"] = {\n      docgenInfo: DocPage.__docgenInfo,\n      name: \"DocPage\",\n      path: \"src/components/DocPage.tsx#DocPage\"\n    };\n} catch (__react_docgen_typescript_loader_error) {}\n\nvar _c;\n\n$RefreshReg$(_c, \"DocPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jUGFnZS50c3g/NDI3MyJdLCJuYW1lcyI6WyJEb2NQYWdlIiwiY29tcG9uZW50cyIsImV4YW1wbGVzIiwidmlzeFBhY2thZ2UiLCJyZWFkbWUiLCJsZW5ndGgiLCJtYXAiLCJleGFtcGxlIiwiaSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNvbXBvbmVudCIsImRvY2dlbkluZm8iLCJfX2RvY2dlbkluZm8iLCJkaXNwbGF5TmFtZSIsImlzQ29tcG9uZW50IiwidG9Mb3dlckNhc2UiLCJTVE9SWUJPT0tfUkVBQ1RfQ0xBU1NFUyIsIm5hbWUiLCJwYXRoIiwiX19yZWFjdF9kb2NnZW5fdHlwZXNjcmlwdF9sb2FkZXJfZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVVlLFNBQVNBLE9BQVQsT0FBdUU7QUFBQTs7QUFBQSxNQUFwREMsVUFBb0QsUUFBcERBLFVBQW9EO0FBQUEsTUFBeENDLFFBQXdDLFFBQXhDQSxRQUF3QztBQUFBLE1BQTlCQyxXQUE4QixRQUE5QkEsV0FBOEI7QUFBQSxNQUFqQkMsTUFBaUIsUUFBakJBLE1BQWlCO0FBQ3BGLFNBQ0UsTUFBQyw2Q0FBRDtBQUFNLFdBQU8sRUFBRSxLQUFmO0FBQXNCLFNBQUssa0JBQVdELFdBQVgsbUJBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFhLFdBQU8sTUFBcEI7QUFBcUIsUUFBSSxFQUFFLEtBQTNCO0FBQWtDLG9CQUFnQixFQUFFQSxXQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QStDLENBQUciLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Eb2NQYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duL3dpdGgtaHRtbCc7XG5cbmltcG9ydCBBcGlUYWJsZSBmcm9tICcuL0FwaVRhYmxlJztcbmltcG9ydCBQYWNrYWdlTGlzdCBmcm9tICcuL1BhY2thZ2VMaXN0JztcbmltcG9ydCBQYWdlIGZyb20gJy4vUGFnZSc7XG5pbXBvcnQgeyBEb2NHZW5JbmZvLCBWaXN4UGFja2FnZSB9IGZyb20gJy4uL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY29tcG9uZW50cz86IHVua25vd25bXTtcbiAgZXhhbXBsZXM/OiAoUmVhY3QuQ29tcG9uZW50Q2xhc3MgfCBSZWFjdC5GQylbXTtcbiAgdmlzeFBhY2thZ2U6IFZpc3hQYWNrYWdlO1xuICByZWFkbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY1BhZ2UoeyBjb21wb25lbnRzLCBleGFtcGxlcywgdmlzeFBhY2thZ2UsIHJlYWRtZSB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQYWdlIHdyYXBwZXI9e2ZhbHNlfSB0aXRsZT17YEB2aXN4LyR7dmlzeFBhY2thZ2V9IGRvY3VtZW50YXRpb25gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1uYXZcIj5cbiAgICAgICAgICA8UGFja2FnZUxpc3QgY29tcGFjdCBncmlkPXtmYWxzZX0gZW1waGFzaXplUGFja2FnZT17dmlzeFBhY2thZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2MtcmVhZG1lXCI+XG4gICAgICAgICAgICA8TWFya2Rvd24gZXNjYXBlSHRtbD17ZmFsc2V9IHNvdXJjZT17cmVhZG1lfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtleGFtcGxlcyAmJiBleGFtcGxlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxoMj5FeGFtcGxlczwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZXNcIj5cbiAgICAgICAgICAgICAgICB7ZXhhbXBsZXMubWFwKChleGFtcGxlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZXhhbXBsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChleGFtcGxlKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2NvbXBvbmVudHMgJiYgY29tcG9uZW50cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWRvY3NcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+RXhwb3J0czwvaDI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge2NvbXBvbmVudHMubWFwKGNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVFMgZG9lc24ndCBrbm93IGFib3V0IGRvY2dlbkluZm9cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jZ2VuSW5mbyA9IGNvbXBvbmVudD8uX19kb2NnZW5JbmZvIGFzIERvY0dlbkluZm8gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGlzcGxheU5hbWUgPSAnJyB9ID0gZG9jZ2VuSW5mbyB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lICYmIGRpc3BsYXlOYW1lWzBdLnRvTG93ZXJDYXNlKCkgIT09IGRpc3BsYXlOYW1lWzBdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jZ2VuSW5mbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtkaXNwbGF5TmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgIyR7ZGlzcGxheU5hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0NvbXBvbmVudCAmJiA8PiZsdDs8Lz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2Rpc3BsYXlOYW1lfSR7aXNDb21wb25lbnQgPyAnJyA6ICcoKSd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNDb21wb25lbnQgJiYgPD4mbmJzcDsvJmd0OzwvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkFQSXM8L2gyPlxuICAgICAgICAgICAgICAgIHtjb21wb25lbnRzLm1hcChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUUyBkb2Vzbid0IGtub3cgYWJvdXQgZG9jZ2VuSW5mb1xuICAgICAgICAgICAgICAgICAgY29uc3QgZG9jZ2VuSW5mbyA9IGNvbXBvbmVudC5fX2RvY2dlbkluZm8gYXMgRG9jR2VuSW5mbyB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkb2NnZW5JbmZvID8gKFxuICAgICAgICAgICAgICAgICAgICA8QXBpVGFibGUga2V5PXtkb2NnZW5JbmZvLmRpc3BsYXlOYW1lfSBkb2NnZW5JbmZvPXtkb2NnZW5JbmZvfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmRvYy1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1jb250ZW50IDpnbG9iYWwoaDEpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbChpbWcpIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwdnc7XG4gICAgICAgICAgbWF4LWhlaWdodDogNTB2aDtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbCh0aCksXG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKHRkKSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLW5hdiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1ZW07XG4gICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKGNvZGUpIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01lbmxvJywgbW9ub3NwYWNlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjNyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbChjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10pIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1yZWFkbWUgOmdsb2JhbChwcmUpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICBtaW4td2lkdGg6IDMzdnc7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKHRhYmxlKSB7XG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5leGFtcGxlcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cbiAgICAgICAgLmV4YW1wbGUge1xuICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMyU7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5jb21wb25lbnQtZG9jcyB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxODBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAuZG9jLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDkwdnc7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5leGFtcGxlIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG50cnkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBEb2NQYWdlLmRpc3BsYXlOYW1lID0gXCJEb2NQYWdlXCI7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIERvY1BhZ2UuX19kb2NnZW5JbmZvID0geyBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwiZGlzcGxheU5hbWVcIjogXCJEb2NQYWdlXCIsIFwicHJvcHNcIjogeyBcImNvbXBvbmVudHNcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcImNvbXBvbmVudHNcIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwidW5rbm93bltdIHwgdW5kZWZpbmVkXCIgfSB9LCBcImV4YW1wbGVzXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJleGFtcGxlc1wiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCIoQ29tcG9uZW50Q2xhc3M8e30sIGFueT4gfCBGQzx7fT4pW10gfCB1bmRlZmluZWRcIiB9IH0sIFwidmlzeFBhY2thZ2VcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcInZpc3hQYWNrYWdlXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwiVmlzeFBhY2thZ2VcIiB9IH0sIFwicmVhZG1lXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJyZWFkbWVcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCJzdHJpbmdcIiB9IH0gfSB9O1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAodHlwZW9mIFNUT1JZQk9PS19SRUFDVF9DTEFTU0VTICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIFNUT1JZQk9PS19SRUFDVF9DTEFTU0VTW1wic3JjL2NvbXBvbmVudHMvRG9jUGFnZS50c3gjRG9jUGFnZVwiXSA9IHsgZG9jZ2VuSW5mbzogRG9jUGFnZS5fX2RvY2dlbkluZm8sIG5hbWU6IFwiRG9jUGFnZVwiLCBwYXRoOiBcInNyYy9jb21wb25lbnRzL0RvY1BhZ2UudHN4I0RvY1BhZ2VcIiB9O1xufVxuY2F0Y2ggKF9fcmVhY3RfZG9jZ2VuX3R5cGVzY3JpcHRfbG9hZGVyX2Vycm9yKSB7IH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DocPage.tsx\n");

/***/ })

})
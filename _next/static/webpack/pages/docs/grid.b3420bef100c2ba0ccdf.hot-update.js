webpackHotUpdate_N_E("pages/docs/grid",{

/***/ "./src/components/DocPage.tsx":
/*!************************************!*\
  !*** ./src/components/DocPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DocPage; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"../../node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown/with-html */ \"../../node_modules/react-markdown/with-html.js\");\n/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ApiTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApiTable */ \"./src/components/ApiTable.tsx\");\n/* harmony import */ var _PackageList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PackageList */ \"./src/components/PackageList.tsx\");\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Page */ \"./src/components/Page.tsx\");\n/* harmony import */ var _util_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/format */ \"./src/components/util/format.ts\");\nvar _jsxFileName = \"/Users/harry/dev/visx/packages/visx-demo/src/components/DocPage.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/* eslint-disable no-underscore-dangle */\n\n\n\n\n\n\nfunction DocPage(_ref) {\n  var _this = this;\n\n  var components = _ref.components,\n      examples = _ref.examples,\n      visxPackage = _ref.visxPackage,\n      readme = _ref.readme;\n  return __jsx(_Page__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    wrapper: false,\n    title: \"@visx/\".concat(visxPackage, \" documentation\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1077744830\" + \" \" + \"doc-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1077744830\" + \" \" + \"doc-nav\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(_PackageList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    compact: true,\n    grid: false,\n    emphasizePackage: visxPackage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"jsx-1077744830\" + \" \" + \"doc-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1077744830\" + \" \" + \"doc-readme\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, __jsx(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    escapeHtml: false,\n    source: readme,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  })), examples && examples.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h2\", {\n    className: \"jsx-1077744830\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }, \"Examples\"), __jsx(\"div\", {\n    className: \"jsx-1077744830\" + \" \" + \"examples\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, examples.map(function (example, i) {\n    return __jsx(\"div\", {\n      key: i,\n      className: \"jsx-1077744830\" + \" \" + \"example\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 19\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(example));\n  }))), components && components.length > 0 && __jsx(\"div\", {\n    className: \"jsx-1077744830\" + \" \" + \"component-docs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-1077744830\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 15\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-1077744830\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  }, \"APIs\"), components.map(function (component) {\n    // @ts-ignore TS doesn't know about docgenInfo\n    var docgenInfo = component.__docgenInfo;\n    return docgenInfo ? __jsx(_ApiTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: docgenInfo.displayName,\n      docgenInfo: docgenInfo,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 21\n      }\n    }) : null;\n  })), __jsx(\"div\", {\n    className: \"jsx-1077744830\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 15\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-1077744830\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, \"Exports\"), __jsx(\"ul\", {\n    className: \"jsx-1077744830\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, components.map(function (component) {\n    // @ts-ignore TS doesn't know about docgenInfo\n    var docgenInfo = component === null || component === void 0 ? void 0 : component.__docgenInfo;\n\n    var _ref2 = docgenInfo || {},\n        _ref2$displayName = _ref2.displayName,\n        displayName = _ref2$displayName === void 0 ? '' : _ref2$displayName;\n\n    return docgenInfo ? __jsx(\"li\", {\n      key: displayName,\n      className: \"jsx-1077744830\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 23\n      }\n    }, __jsx(\"a\", {\n      href: \"#\".concat(displayName),\n      className: \"jsx-1077744830\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 25\n      }\n    }, __jsx(\"code\", {\n      className: \"jsx-1077744830\" + \" \" + \"no-background\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 27\n      }\n    }, Object(_util_format__WEBPACK_IMPORTED_MODULE_6__[\"toExportName\"])(displayName)))) : null;\n  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1077744830\",\n    __self: this\n  }, \".doc-container.jsx-1077744830{margin-top:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.doc-content.jsx-1077744830{width:100%;}.doc-content.jsx-1077744830 h1{margin-bottom:1.2em;line-height:0;font-size:2em;}.doc-content.jsx-1077744830 img{max-width:50vw;max-height:50vh;}.doc-content.jsx-1077744830 th,.doc-content.jsx-1077744830 td{border:1px solid;padding:5px 10px 5px 5px;}.doc-nav.jsx-1077744830{margin-right:5em;width:140px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.doc-content.jsx-1077744830 code{font-family:'Menlo',monospace;padding:0.2rem 0.3rem;background-color:#efefef;line-height:1.8em;font-size:0.8em;font-weight:normal;}.doc-content.jsx-1077744830 code[class*='language-']{background-color:transparent;font-weight:300;color:#222;box-shadow:none;}.doc-readme.jsx-1077744830 pre{background-color:#efefef;display:inline-block;padding:0.5em;min-width:33vw;border-radius:3px;font-weight:normal;}.doc-content.jsx-1077744830 table{border-collapse:collapse;font-size:12px;font-family:monospace;line-height:1em;border-color:#efefef;margin-top:0.25rem;}.examples.jsx-1077744830{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.example.jsx-1077744830{min-width:400px;max-width:33%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.component-docs.jsx-1077744830{display:grid;grid-gap:2rem;grid-template-columns:1fr 320px;}.doc-content.jsx-1077744830 code.no-background{background-color:transparent;font-size:14px;line-height:1em;padding:0;}@media (max-width:800px){.doc-container.jsx-1077744830{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;min-width:90vw;max-width:90vw;margin:0;}.example.jsx-1077744830{max-width:100%;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJyeS9kZXYvdmlzeC9wYWNrYWdlcy92aXN4LWRlbW8vc3JjL2NvbXBvbmVudHMvRG9jUGFnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVrQixBQUcyQixBQUtMLEFBR1MsQUFLTCxBQUtFLEFBSUEsQUFLYyxBQVFGLEFBTUosQUFRQSxBQVFaLEFBSUcsQUFLSCxBQUtnQixBQU9HLEFBTWYsV0E5RW5CLEVBNkRnQixFQXJERSxBQXVFaEIsQ0FwRmEsQUE2REMsQ0EzQ1csQUFJYixHQWRFLEtBaUNPLEFBUU4sRUFrQmlCLEVBNUNsQixBQVlFLEFBb0NELENBNUNPLEFBbUNWLENBaERkLEdBTGdCLE1BeUNRLEVBL0J4QixFQXFEa0IsQ0FwQ0wsQ0FNRyxFQWhDaEIsSUFrQjJCLElBU1QsR0ErQmxCLENBekJpQixBQThCTCxFQXRCTSxRQXVCbEIsRUFwQ0EsRUFtQmlCLENBYkcsRUFmQSxDQXVCRyxPQTVCdkIsS0F2QnFCLEdBNENBLEVBZkgsSUF1QkcsRUFVckIsQ0FlbUIsU0EvQ0UsQ0FlckIsS0FpQ21CLENBekJuQixZQXRCQSxDQTBCQSxDQXNCYSxTQUNYLGtCQS9FRiIsImZpbGUiOiIvVXNlcnMvaGFycnkvZGV2L3Zpc3gvcGFja2FnZXMvdmlzeC1kZW1vL3NyYy9jb21wb25lbnRzL0RvY1BhZ2UudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24vd2l0aC1odG1sJztcblxuaW1wb3J0IEFwaVRhYmxlIGZyb20gJy4vQXBpVGFibGUnO1xuaW1wb3J0IFBhY2thZ2VMaXN0IGZyb20gJy4vUGFja2FnZUxpc3QnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9QYWdlJztcbmltcG9ydCB7IERvY0dlbkluZm8sIFZpc3hQYWNrYWdlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgdG9FeHBvcnROYW1lIH0gZnJvbSAnLi91dGlsL2Zvcm1hdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbXBvbmVudHM/OiB1bmtub3duW107XG4gIGV4YW1wbGVzPzogKFJlYWN0LkNvbXBvbmVudENsYXNzIHwgUmVhY3QuRkMpW107XG4gIHZpc3hQYWNrYWdlOiBWaXN4UGFja2FnZTtcbiAgcmVhZG1lOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2NQYWdlKHsgY29tcG9uZW50cywgZXhhbXBsZXMsIHZpc3hQYWNrYWdlLCByZWFkbWUgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UGFnZSB3cmFwcGVyPXtmYWxzZX0gdGl0bGU9e2BAdmlzeC8ke3Zpc3hQYWNrYWdlfSBkb2N1bWVudGF0aW9uYH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2MtbmF2XCI+XG4gICAgICAgICAgPFBhY2thZ2VMaXN0IGNvbXBhY3QgZ3JpZD17ZmFsc2V9IGVtcGhhc2l6ZVBhY2thZ2U9e3Zpc3hQYWNrYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2MtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLXJlYWRtZVwiPlxuICAgICAgICAgICAgPE1hcmtkb3duIGVzY2FwZUh0bWw9e2ZhbHNlfSBzb3VyY2U9e3JlYWRtZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ZXhhbXBsZXMgJiYgZXhhbXBsZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8aDI+RXhhbXBsZXM8L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVzXCI+XG4gICAgICAgICAgICAgICAge2V4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoZXhhbXBsZSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjb21wb25lbnRzICYmIGNvbXBvbmVudHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1kb2NzXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkFQSXM8L2gyPlxuICAgICAgICAgICAgICAgIHtjb21wb25lbnRzLm1hcChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUUyBkb2Vzbid0IGtub3cgYWJvdXQgZG9jZ2VuSW5mb1xuICAgICAgICAgICAgICAgICAgY29uc3QgZG9jZ2VuSW5mbyA9IGNvbXBvbmVudC5fX2RvY2dlbkluZm8gYXMgRG9jR2VuSW5mbyB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkb2NnZW5JbmZvID8gKFxuICAgICAgICAgICAgICAgICAgICA8QXBpVGFibGUga2V5PXtkb2NnZW5JbmZvLmRpc3BsYXlOYW1lfSBkb2NnZW5JbmZvPXtkb2NnZW5JbmZvfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5FeHBvcnRzPC9oMj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7Y29tcG9uZW50cy5tYXAoY29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUUyBkb2Vzbid0IGtub3cgYWJvdXQgZG9jZ2VuSW5mb1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2NnZW5JbmZvID0gY29tcG9uZW50Py5fX2RvY2dlbkluZm8gYXMgRG9jR2VuSW5mbyB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkaXNwbGF5TmFtZSA9ICcnIH0gPSBkb2NnZW5JbmZvIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jZ2VuSW5mbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtkaXNwbGF5TmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgIyR7ZGlzcGxheU5hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cIm5vLWJhY2tncm91bmRcIj57dG9FeHBvcnROYW1lKGRpc3BsYXlOYW1lKX08L2NvZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5kb2MtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKGgxKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1jb250ZW50IDpnbG9iYWwoaW1nKSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MHZ3O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwdmg7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1jb250ZW50IDpnbG9iYWwodGgpLFxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbCh0ZCkge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1uYXYge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNWVtO1xuICAgICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbChjb2RlKSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNZW5sbycsIG1vbm9zcGFjZTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMC4zcmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbChjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10pIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1yZWFkbWUgOmdsb2JhbChwcmUpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICBtaW4td2lkdGg6IDMzdnc7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1jb250ZW50IDpnbG9iYWwodGFibGUpIHtcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWZlZmVmO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmV4YW1wbGVzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuICAgICAgICAuZXhhbXBsZSB7XG4gICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMzJTtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbXBvbmVudC1kb2NzIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDMyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKGNvZGUubm8tYmFja2dyb3VuZCkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgLmRvYy1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiA5MHZ3O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZXhhbXBsZSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9QYWdlPlxuICApO1xufVxudHJ5IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgRG9jUGFnZS5kaXNwbGF5TmFtZSA9IFwiRG9jUGFnZVwiO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBEb2NQYWdlLl9fZG9jZ2VuSW5mbyA9IHsgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcImRpc3BsYXlOYW1lXCI6IFwiRG9jUGFnZVwiLCBcInByb3BzXCI6IHsgXCJjb21wb25lbnRzXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJjb21wb25lbnRzXCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwidHlwZVwiOiB7IFwibmFtZVwiOiBcInVua25vd25bXSB8IHVuZGVmaW5lZFwiIH0gfSwgXCJleGFtcGxlc1wiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IG51bGwsIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwiZXhhbXBsZXNcIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwiKENvbXBvbmVudENsYXNzPHt9LCBhbnk+IHwgRkM8e30+KVtdIHwgdW5kZWZpbmVkXCIgfSB9LCBcInZpc3hQYWNrYWdlXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJ2aXN4UGFja2FnZVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwidHlwZVwiOiB7IFwibmFtZVwiOiBcIlZpc3hQYWNrYWdlXCIgfSB9LCBcInJlYWRtZVwiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IG51bGwsIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwicmVhZG1lXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwic3RyaW5nXCIgfSB9IH0gfTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHR5cGVvZiBTVE9SWUJPT0tfUkVBQ1RfQ0xBU1NFUyAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBTVE9SWUJPT0tfUkVBQ1RfQ0xBU1NFU1tcInNyYy9jb21wb25lbnRzL0RvY1BhZ2UudHN4I0RvY1BhZ2VcIl0gPSB7IGRvY2dlbkluZm86IERvY1BhZ2UuX19kb2NnZW5JbmZvLCBuYW1lOiBcIkRvY1BhZ2VcIiwgcGF0aDogXCJzcmMvY29tcG9uZW50cy9Eb2NQYWdlLnRzeCNEb2NQYWdlXCIgfTtcbn1cbmNhdGNoIChfX3JlYWN0X2RvY2dlbl90eXBlc2NyaXB0X2xvYWRlcl9lcnJvcikgeyB9Il19 */\\n/*@ sourceURL=/Users/harry/dev/visx/packages/visx-demo/src/components/DocPage.tsx */\"));\n}\n_c = DocPage;\n\ntry {\n  // @ts-ignore\n  DocPage.displayName = \"DocPage\"; // @ts-ignore\n\n  DocPage.__docgenInfo = {\n    \"description\": \"\",\n    \"displayName\": \"DocPage\",\n    \"props\": {\n      \"components\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"components\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"unknown[] | undefined\"\n        }\n      },\n      \"examples\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"examples\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"(ComponentClass<{}, any> | FC<{}>)[] | undefined\"\n        }\n      },\n      \"visxPackage\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"visxPackage\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"VisxPackage\"\n        }\n      },\n      \"readme\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"readme\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"string\"\n        }\n      }\n    }\n  }; // @ts-ignore\n\n  if (typeof STORYBOOK_REACT_CLASSES !== \"undefined\") // @ts-ignore\n    STORYBOOK_REACT_CLASSES[\"src/components/DocPage.tsx#DocPage\"] = {\n      docgenInfo: DocPage.__docgenInfo,\n      name: \"DocPage\",\n      path: \"src/components/DocPage.tsx#DocPage\"\n    };\n} catch (__react_docgen_typescript_loader_error) {}\n\nvar _c;\n\n$RefreshReg$(_c, \"DocPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jUGFnZS50c3g/NDI3MyJdLCJuYW1lcyI6WyJEb2NQYWdlIiwiY29tcG9uZW50cyIsImV4YW1wbGVzIiwidmlzeFBhY2thZ2UiLCJyZWFkbWUiLCJsZW5ndGgiLCJtYXAiLCJleGFtcGxlIiwiaSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNvbXBvbmVudCIsImRvY2dlbkluZm8iLCJfX2RvY2dlbkluZm8iLCJkaXNwbGF5TmFtZSIsInRvRXhwb3J0TmFtZSIsIlNUT1JZQk9PS19SRUFDVF9DTEFTU0VTIiwibmFtZSIsInBhdGgiLCJfX3JlYWN0X2RvY2dlbl90eXBlc2NyaXB0X2xvYWRlcl9lcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBU2UsU0FBU0EsT0FBVCxPQUF1RTtBQUFBOztBQUFBLE1BQXBEQyxVQUFvRCxRQUFwREEsVUFBb0Q7QUFBQSxNQUF4Q0MsUUFBd0MsUUFBeENBLFFBQXdDO0FBQUEsTUFBOUJDLFdBQThCLFFBQTlCQSxXQUE4QjtBQUFBLE1BQWpCQyxNQUFpQixRQUFqQkEsTUFBaUI7QUFDcEYsU0FDRSxNQUFDLDZDQUFEO0FBQU0sV0FBTyxFQUFFLEtBQWY7QUFBc0IsU0FBSyxrQkFBV0QsV0FBWCxtQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQWEsV0FBTyxNQUFwQjtBQUFxQixRQUFJLEVBQUUsS0FBM0I7QUFBa0Msb0JBQWdCLEVBQUVBLFdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixD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LG1CQUFlLEVBQWpCO0FBQXFCLG1CQUFlLFNBQXBDO0FBQStDLGFBQVM7QUFBRSxvQkFBYztBQUFFLHdCQUFnQixJQUFsQjtBQUF3Qix1QkFBZSxFQUF2QztBQUEyQyxnQkFBUSxZQUFuRDtBQUFpRSxvQkFBWSxLQUE3RTtBQUFvRixnQkFBUTtBQUFFLGtCQUFRO0FBQVY7QUFBNUYsT0FBaEI7QUFBbUosa0JBQVk7QUFBRSx3QkFBZ0IsSUFBbEI7QUFBd0IsdUJBQWUsRUFBdkM7QUFBMkMsZ0JBQVEsVUFBbkQ7QUFBK0Qsb0JBQVksS0FBM0U7QUFBa0YsZ0JBQVE7QUFBRSxrQkFBUTtBQUFWO0FBQTFGLE9BQS9KO0FBQTJULHFCQUFlO0FBQUUsd0JBQWdCLElBQWxCO0FBQXdCLHVCQUFlLEVBQXZDO0FBQTJDLGdCQUFRLGFBQW5EO0FBQWtFLG9CQUFZLElBQTlFO0FBQW9GLGdCQUFRO0FBQUUsa0JBQVE7QUFBVjtBQUE1RixPQUExVTtBQUFtYyxnQkFBVTtBQUFFLHdCQUFnQixJQUFsQjtBQUF3Qix1QkFBZSxFQUF2QztBQUEyQyxnQkFBUSxRQUFuRDtBQUE2RCxvQkFBWSxJQUF6RTtBQUErRSxnQkFBUTtBQUFFLGtCQUFRO0FBQVY7QUFBdkY7QUFBN2M7QUFBeEQsR0FBdkIsQ0FKQSxDQUtBOztBQUNBLE1BQUksT0FBT0csdUJBQVAsS0FBbUMsV0FBdkMsRUFDSTtBQUNBQSwyQkFBdUIsQ0FBQyxvQ0FBRCxDQUF2QixHQUFnRTtBQUFFSixnQkFBVSxFQUFFWixPQUFPLENBQUNhLFlBQXRCO0FBQW9DSSxVQUFJLEVBQUUsU0FBMUM7QUFBcURDLFVBQUksRUFBRTtBQUEzRCxLQUFoRTtBQUNQLENBVEQsQ0FVQSxPQUFPQyxzQ0FBUCxFQUErQyxDQUFHIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRG9jUGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bi93aXRoLWh0bWwnO1xuXG5pbXBvcnQgQXBpVGFibGUgZnJvbSAnLi9BcGlUYWJsZSc7XG5pbXBvcnQgUGFja2FnZUxpc3QgZnJvbSAnLi9QYWNrYWdlTGlzdCc7XG5pbXBvcnQgUGFnZSBmcm9tICcuL1BhZ2UnO1xuaW1wb3J0IHsgRG9jR2VuSW5mbywgVmlzeFBhY2thZ2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyB0b0V4cG9ydE5hbWUgfSBmcm9tICcuL3V0aWwvZm9ybWF0JztcblxudHlwZSBQcm9wcyA9IHtcbiAgY29tcG9uZW50cz86IHVua25vd25bXTtcbiAgZXhhbXBsZXM/OiAoUmVhY3QuQ29tcG9uZW50Q2xhc3MgfCBSZWFjdC5GQylbXTtcbiAgdmlzeFBhY2thZ2U6IFZpc3hQYWNrYWdlO1xuICByZWFkbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY1BhZ2UoeyBjb21wb25lbnRzLCBleGFtcGxlcywgdmlzeFBhY2thZ2UsIHJlYWRtZSB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQYWdlIHdyYXBwZXI9e2ZhbHNlfSB0aXRsZT17YEB2aXN4LyR7dmlzeFBhY2thZ2V9IGRvY3VtZW50YXRpb25gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1uYXZcIj5cbiAgICAgICAgICA8UGFja2FnZUxpc3QgY29tcGFjdCBncmlkPXtmYWxzZX0gZW1waGFzaXplUGFja2FnZT17dmlzeFBhY2thZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2MtcmVhZG1lXCI+XG4gICAgICAgICAgICA8TWFya2Rvd24gZXNjYXBlSHRtbD17ZmFsc2V9IHNvdXJjZT17cmVhZG1lfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtleGFtcGxlcyAmJiBleGFtcGxlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxoMj5FeGFtcGxlczwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZXNcIj5cbiAgICAgICAgICAgICAgICB7ZXhhbXBsZXMubWFwKChleGFtcGxlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZXhhbXBsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChleGFtcGxlKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2NvbXBvbmVudHMgJiYgY29tcG9uZW50cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWRvY3NcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+QVBJczwvaDI+XG4gICAgICAgICAgICAgICAge2NvbXBvbmVudHMubWFwKGNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRTIGRvZXNuJ3Qga25vdyBhYm91dCBkb2NnZW5JbmZvXG4gICAgICAgICAgICAgICAgICBjb25zdCBkb2NnZW5JbmZvID0gY29tcG9uZW50Ll9fZG9jZ2VuSW5mbyBhcyBEb2NHZW5JbmZvIHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY2dlbkluZm8gPyAoXG4gICAgICAgICAgICAgICAgICAgIDxBcGlUYWJsZSBrZXk9e2RvY2dlbkluZm8uZGlzcGxheU5hbWV9IGRvY2dlbkluZm89e2RvY2dlbkluZm99IC8+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkV4cG9ydHM8L2gyPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIHtjb21wb25lbnRzLm1hcChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRTIGRvZXNuJ3Qga25vdyBhYm91dCBkb2NnZW5JbmZvXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvY2dlbkluZm8gPSBjb21wb25lbnQ/Ll9fZG9jZ2VuSW5mbyBhcyBEb2NHZW5JbmZvIHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGRpc3BsYXlOYW1lID0gJycgfSA9IGRvY2dlbkluZm8gfHwge307XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2NnZW5JbmZvID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Rpc3BsYXlOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtkaXNwbGF5TmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwibm8tYmFja2dyb3VuZFwiPnt0b0V4cG9ydE5hbWUoZGlzcGxheU5hbWUpfTwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmRvYy1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1jb250ZW50IDpnbG9iYWwoaDEpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbChpbWcpIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwdnc7XG4gICAgICAgICAgbWF4LWhlaWdodDogNTB2aDtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbCh0aCksXG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKHRkKSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLW5hdiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1ZW07XG4gICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKGNvZGUpIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ01lbmxvJywgbW9ub3NwYWNlO1xuICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjNyZW07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKGNvZGVbY2xhc3MqPSdsYW5ndWFnZS0nXSkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLXJlYWRtZSA6Z2xvYmFsKHByZSkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICAgIG1pbi13aWR0aDogMzN2dztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbCh0YWJsZSkge1xuICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNlZmVmZWY7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZXhhbXBsZXMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG4gICAgICAgIC5leGFtcGxlIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogMzMlO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgICAgICAuY29tcG9uZW50LWRvY3Mge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC1nYXA6IDJyZW07XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1jb250ZW50IDpnbG9iYWwoY29kZS5uby1iYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAuZG9jLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDkwdnc7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5leGFtcGxlIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG50cnkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBEb2NQYWdlLmRpc3BsYXlOYW1lID0gXCJEb2NQYWdlXCI7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIERvY1BhZ2UuX19kb2NnZW5JbmZvID0geyBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwiZGlzcGxheU5hbWVcIjogXCJEb2NQYWdlXCIsIFwicHJvcHNcIjogeyBcImNvbXBvbmVudHNcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcImNvbXBvbmVudHNcIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwidW5rbm93bltdIHwgdW5kZWZpbmVkXCIgfSB9LCBcImV4YW1wbGVzXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJleGFtcGxlc1wiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCIoQ29tcG9uZW50Q2xhc3M8e30sIGFueT4gfCBGQzx7fT4pW10gfCB1bmRlZmluZWRcIiB9IH0sIFwidmlzeFBhY2thZ2VcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcInZpc3hQYWNrYWdlXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwiVmlzeFBhY2thZ2VcIiB9IH0sIFwicmVhZG1lXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJyZWFkbWVcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCJzdHJpbmdcIiB9IH0gfSB9O1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAodHlwZW9mIFNUT1JZQk9PS19SRUFDVF9DTEFTU0VTICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIFNUT1JZQk9PS19SRUFDVF9DTEFTU0VTW1wic3JjL2NvbXBvbmVudHMvRG9jUGFnZS50c3gjRG9jUGFnZVwiXSA9IHsgZG9jZ2VuSW5mbzogRG9jUGFnZS5fX2RvY2dlbkluZm8sIG5hbWU6IFwiRG9jUGFnZVwiLCBwYXRoOiBcInNyYy9jb21wb25lbnRzL0RvY1BhZ2UudHN4I0RvY1BhZ2VcIiB9O1xufVxuY2F0Y2ggKF9fcmVhY3RfZG9jZ2VuX3R5cGVzY3JpcHRfbG9hZGVyX2Vycm9yKSB7IH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DocPage.tsx\n");

/***/ })

})
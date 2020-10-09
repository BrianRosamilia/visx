webpackHotUpdate_N_E("pages/docs/shape",{

/***/ "./src/components/DocPage.tsx":
/*!************************************!*\
  !*** ./src/components/DocPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DocPage; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"../../node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown/with-html */ \"../../node_modules/react-markdown/with-html.js\");\n/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ApiTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApiTable */ \"./src/components/ApiTable.tsx\");\n/* harmony import */ var _PackageList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PackageList */ \"./src/components/PackageList.tsx\");\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Page */ \"./src/components/Page.tsx\");\nvar _jsxFileName = \"/Users/harry/dev/visx/packages/visx-demo/src/components/DocPage.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/* eslint-disable no-underscore-dangle */\n\n\n\n\n\nfunction DocPage(_ref) {\n  var _this = this;\n\n  var components = _ref.components,\n      examples = _ref.examples,\n      visxPackage = _ref.visxPackage,\n      readme = _ref.readme;\n  return __jsx(_Page__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    wrapper: false,\n    title: \"@visx/\".concat(visxPackage, \" documentation\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-2101738920\" + \" \" + \"doc-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-2101738920\" + \" \" + \"doc-nav\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(_PackageList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    compact: true,\n    grid: false,\n    emphasizePackage: visxPackage,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"jsx-2101738920\" + \" \" + \"doc-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-2101738920\" + \" \" + \"doc-readme\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, __jsx(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    escapeHtml: false,\n    source: readme,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  })), examples && examples.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"h2\", {\n    className: \"jsx-2101738920\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 15\n    }\n  }, \"Examples\"), __jsx(\"div\", {\n    className: \"jsx-2101738920\" + \" \" + \"examples\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  }, examples.map(function (example, i) {\n    return __jsx(\"div\", {\n      key: i,\n      className: \"jsx-2101738920\" + \" \" + \"example\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 19\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(example));\n  }))), components && components.length > 0 && __jsx(\"div\", {\n    className: \"jsx-2101738920\" + \" \" + \"component-docs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-2101738920\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-2101738920\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, \"APIs\"), components.map(function (component) {\n    // @ts-ignore TS doesn't know about docgenInfo\n    var docgenInfo = component.__docgenInfo;\n    return docgenInfo ? __jsx(_ApiTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: docgenInfo.displayName,\n      docgenInfo: docgenInfo,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 21\n      }\n    }) : null;\n  })), __jsx(\"div\", {\n    className: \"jsx-2101738920\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 15\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-2101738920\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }\n  }, \"Exports\"), __jsx(\"ul\", {\n    className: \"jsx-2101738920\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, components.map(function (component) {\n    // @ts-ignore TS doesn't know about docgenInfo\n    var docgenInfo = component === null || component === void 0 ? void 0 : component.__docgenInfo;\n\n    var _ref2 = docgenInfo || {},\n        _ref2$displayName = _ref2.displayName,\n        displayName = _ref2$displayName === void 0 ? '' : _ref2$displayName;\n\n    var isComponent = displayName && displayName[0].toLowerCase() !== displayName[0];\n    return docgenInfo ? __jsx(\"li\", {\n      key: displayName,\n      className: \"jsx-2101738920\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 23\n      }\n    }, __jsx(\"a\", {\n      href: \"#\".concat(displayName),\n      className: \"jsx-2101738920\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 25\n      }\n    }, __jsx(\"code\", {\n      className: \"jsx-2101738920\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 27\n      }\n    }, isComponent && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, \"<\"), \"\".concat(displayName).concat(isComponent ? '' : '()'), isComponent && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, \"\\xA0/>\")))) : null;\n  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2101738920\",\n    __self: this\n  }, \".doc-container.jsx-2101738920{margin-top:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.doc-content.jsx-2101738920{width:100%;}.doc-content.jsx-2101738920 h1{margin-bottom:1.2em;line-height:0;font-size:2em;}.doc-content.jsx-2101738920 img{max-width:50vw;max-height:50vh;}.doc-content.jsx-2101738920 th,.doc-content.jsx-2101738920 td{border:1px solid;padding:5px 10px 5px 5px;}.doc-nav.jsx-2101738920{margin-right:5em;width:140px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.doc-content.jsx-2101738920 code{font-family:'Menlo',monospace;font-weight:bold;padding:0.2rem 0.3rem;background-color:#efefef;line-height:1.8em;font-size:0.8em;font-weight:normal;}.doc-content.jsx-2101738920 code[class*='language-']{background-color:transparent;font-weight:300;color:#222;box-shadow:none;}.doc-readme.jsx-2101738920 pre{background-color:#efefef;display:inline-block;padding:0.5em;min-width:33vw;border-radius:3px;font-weight:normal;}.doc-content.jsx-2101738920 table{border-collapse:collapse;font-size:12px;font-family:monospace;line-height:1em;border-color:#efefef;margin-top:0.25rem;}.examples.jsx-2101738920{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.example.jsx-2101738920{min-width:400px;max-width:33%;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.component-docs.jsx-2101738920{display:grid;grid-template-columns:1fr 180px;}@media (max-width:800px){.doc-container.jsx-2101738920{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;min-width:90vw;max-width:90vw;margin:0;}.example.jsx-2101738920{max-width:100%;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJyeS9kZXYvdmlzeC9wYWNrYWdlcy92aXN4LWRlbW8vc3JjL2NvbXBvbmVudHMvRG9jUGFnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVrQixBQUcyQixBQUtMLEFBR1MsQUFLTCxBQUtFLEFBSUEsQUFLYyxBQVNGLEFBTUosQUFRQSxBQVFaLEFBSUcsQUFLSCxBQUttQixBQU1mLFdBeEVuQixFQThEa0MsRUF0RGhCLEFBaUVoQixDQTlFYSxBQThEQyxDQTVDVyxBQUliLEdBZEUsS0FrQ08sQUFRTixJQTNCRCxBQWFFLENBVEMsQUFvQ0wsQ0FqRGQsR0FMZ0IsTUEwQ1EsRUFoQ3hCLEdBa0JhLEFBK0JiLENBekJnQixDQWZRLENBbEJ4QixRQTRCa0IsSUFNRCxFQVFDLE9BdkJTLEdBVTNCLEVBbUJpQixDQWJHLEdBUUcsT0E3QnZCLEtBdkJxQixHQTZDQSxDQWhCRCxLQXdCQyxFQVVyQixDQVFtQixVQXpDRCxBQWdCbEIsS0EwQm1CLENBbEJuQixVQXZCcUIsR0EyQnJCLENBZWEsU0FDWCxNQTFDRixZQS9CQSIsImZpbGUiOiIvVXNlcnMvaGFycnkvZGV2L3Zpc3gvcGFja2FnZXMvdmlzeC1kZW1vL3NyYy9jb21wb25lbnRzL0RvY1BhZ2UudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24vd2l0aC1odG1sJztcblxuaW1wb3J0IEFwaVRhYmxlIGZyb20gJy4vQXBpVGFibGUnO1xuaW1wb3J0IFBhY2thZ2VMaXN0IGZyb20gJy4vUGFja2FnZUxpc3QnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9QYWdlJztcbmltcG9ydCB7IERvY0dlbkluZm8sIFZpc3hQYWNrYWdlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBjb21wb25lbnRzPzogdW5rbm93bltdO1xuICBleGFtcGxlcz86IChSZWFjdC5Db21wb25lbnRDbGFzcyB8IFJlYWN0LkZDKVtdO1xuICB2aXN4UGFja2FnZTogVmlzeFBhY2thZ2U7XG4gIHJlYWRtZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jUGFnZSh7IGNvbXBvbmVudHMsIGV4YW1wbGVzLCB2aXN4UGFja2FnZSwgcmVhZG1lIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2Ugd3JhcHBlcj17ZmFsc2V9IHRpdGxlPXtgQHZpc3gvJHt2aXN4UGFja2FnZX0gZG9jdW1lbnRhdGlvbmB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2MtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLW5hdlwiPlxuICAgICAgICAgIDxQYWNrYWdlTGlzdCBjb21wYWN0IGdyaWQ9e2ZhbHNlfSBlbXBoYXNpemVQYWNrYWdlPXt2aXN4UGFja2FnZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1yZWFkbWVcIj5cbiAgICAgICAgICAgIDxNYXJrZG93biBlc2NhcGVIdG1sPXtmYWxzZX0gc291cmNlPXtyZWFkbWV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2V4YW1wbGVzICYmIGV4YW1wbGVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGgyPkV4YW1wbGVzPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlc1wiPlxuICAgICAgICAgICAgICAgIHtleGFtcGxlcy5tYXAoKGV4YW1wbGUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJleGFtcGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGV4YW1wbGUpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y29tcG9uZW50cyAmJiBjb21wb25lbnRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtZG9jc1wiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5BUElzPC9oMj5cbiAgICAgICAgICAgICAgICB7Y29tcG9uZW50cy5tYXAoY29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVFMgZG9lc24ndCBrbm93IGFib3V0IGRvY2dlbkluZm9cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRvY2dlbkluZm8gPSBjb21wb25lbnQuX19kb2NnZW5JbmZvIGFzIERvY0dlbkluZm8gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZG9jZ2VuSW5mbyA/IChcbiAgICAgICAgICAgICAgICAgICAgPEFwaVRhYmxlIGtleT17ZG9jZ2VuSW5mby5kaXNwbGF5TmFtZX0gZG9jZ2VuSW5mbz17ZG9jZ2VuSW5mb30gLz5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+RXhwb3J0czwvaDI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge2NvbXBvbmVudHMubWFwKGNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVFMgZG9lc24ndCBrbm93IGFib3V0IGRvY2dlbkluZm9cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jZ2VuSW5mbyA9IGNvbXBvbmVudD8uX19kb2NnZW5JbmZvIGFzIERvY0dlbkluZm8gfCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGlzcGxheU5hbWUgPSAnJyB9ID0gZG9jZ2VuSW5mbyB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lICYmIGRpc3BsYXlOYW1lWzBdLnRvTG93ZXJDYXNlKCkgIT09IGRpc3BsYXlOYW1lWzBdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jZ2VuSW5mbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtkaXNwbGF5TmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgIyR7ZGlzcGxheU5hbWV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0NvbXBvbmVudCAmJiA8PiZsdDs8Lz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2Rpc3BsYXlOYW1lfSR7aXNDb21wb25lbnQgPyAnJyA6ICcoKSd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNDb21wb25lbnQgJiYgPD4mbmJzcDsvJmd0OzwvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZG9jLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1jb250ZW50IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbChoMSkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKGltZykge1xuICAgICAgICAgIG1heC13aWR0aDogNTB2dztcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKHRoKSxcbiAgICAgICAgLmRvYy1jb250ZW50IDpnbG9iYWwodGQpIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtbmF2IHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVlbTtcbiAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1jb250ZW50IDpnbG9iYWwoY29kZSkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTWVubG8nLCBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuM3JlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1jb250ZW50IDpnbG9iYWwoY29kZVtjbGFzcyo9J2xhbmd1YWdlLSddKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtcmVhZG1lIDpnbG9iYWwocHJlKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgICAgbWluLXdpZHRoOiAzM3Z3O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKHRhYmxlKSB7XG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5leGFtcGxlcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cbiAgICAgICAgLmV4YW1wbGUge1xuICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMyU7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICAgIC5jb21wb25lbnQtZG9jcyB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxODBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAuZG9jLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDkwdnc7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5leGFtcGxlIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG50cnkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBEb2NQYWdlLmRpc3BsYXlOYW1lID0gXCJEb2NQYWdlXCI7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIERvY1BhZ2UuX19kb2NnZW5JbmZvID0geyBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwiZGlzcGxheU5hbWVcIjogXCJEb2NQYWdlXCIsIFwicHJvcHNcIjogeyBcImNvbXBvbmVudHNcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcImNvbXBvbmVudHNcIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwidW5rbm93bltdIHwgdW5kZWZpbmVkXCIgfSB9LCBcImV4YW1wbGVzXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJleGFtcGxlc1wiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCIoQ29tcG9uZW50Q2xhc3M8e30sIGFueT4gfCBGQzx7fT4pW10gfCB1bmRlZmluZWRcIiB9IH0sIFwidmlzeFBhY2thZ2VcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcInZpc3hQYWNrYWdlXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwiVmlzeFBhY2thZ2VcIiB9IH0sIFwicmVhZG1lXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJyZWFkbWVcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCJzdHJpbmdcIiB9IH0gfSB9O1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAodHlwZW9mIFNUT1JZQk9PS19SRUFDVF9DTEFTU0VTICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIFNUT1JZQk9PS19SRUFDVF9DTEFTU0VTW1wic3JjL2NvbXBvbmVudHMvRG9jUGFnZS50c3gjRG9jUGFnZVwiXSA9IHsgZG9jZ2VuSW5mbzogRG9jUGFnZS5fX2RvY2dlbkluZm8sIG5hbWU6IFwiRG9jUGFnZVwiLCBwYXRoOiBcInNyYy9jb21wb25lbnRzL0RvY1BhZ2UudHN4I0RvY1BhZ2VcIiB9O1xufVxuY2F0Y2ggKF9fcmVhY3RfZG9jZ2VuX3R5cGVzY3JpcHRfbG9hZGVyX2Vycm9yKSB7IH0iXX0= */\\n/*@ sourceURL=/Users/harry/dev/visx/packages/visx-demo/src/components/DocPage.tsx */\"));\n}\n_c = DocPage;\n\ntry {\n  // @ts-ignore\n  DocPage.displayName = \"DocPage\"; // @ts-ignore\n\n  DocPage.__docgenInfo = {\n    \"description\": \"\",\n    \"displayName\": \"DocPage\",\n    \"props\": {\n      \"components\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"components\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"unknown[] | undefined\"\n        }\n      },\n      \"examples\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"examples\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"(ComponentClass<{}, any> | FC<{}>)[] | undefined\"\n        }\n      },\n      \"visxPackage\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"visxPackage\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"VisxPackage\"\n        }\n      },\n      \"readme\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"readme\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"string\"\n        }\n      }\n    }\n  }; // @ts-ignore\n\n  if (typeof STORYBOOK_REACT_CLASSES !== \"undefined\") // @ts-ignore\n    STORYBOOK_REACT_CLASSES[\"src/components/DocPage.tsx#DocPage\"] = {\n      docgenInfo: DocPage.__docgenInfo,\n      name: \"DocPage\",\n      path: \"src/components/DocPage.tsx#DocPage\"\n    };\n} catch (__react_docgen_typescript_loader_error) {}\n\nvar _c;\n\n$RefreshReg$(_c, \"DocPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRG9jUGFnZS50c3g/NDI3MyJdLCJuYW1lcyI6WyJEb2NQYWdlIiwiY29tcG9uZW50cyIsImV4YW1wbGVzIiwidmlzeFBhY2thZ2UiLCJyZWFkbWUiLCJsZW5ndGgiLCJtYXAiLCJleGFtcGxlIiwiaSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNvbXBvbmVudCIsImRvY2dlbkluZm8iLCJfX2RvY2dlbkluZm8iLCJkaXNwbGF5TmFtZSIsImlzQ29tcG9uZW50IiwidG9Mb3dlckNhc2UiLCJTVE9SWUJPT0tfUkVBQ1RfQ0xBU1NFUyIsIm5hbWUiLCJwYXRoIiwiX19yZWFjdF9kb2NnZW5fdHlwZXNjcmlwdF9sb2FkZXJfZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVVlLFNBQVNBLE9BQVQsT0FBdUU7QUFBQTs7QUFBQSxNQUFwREMsVUFBb0QsUUFBcERBLFVBQW9EO0FBQUEsTUFBeENDLFFBQXdDLFFBQXhDQSxRQUF3QztBQUFBLE1BQTlCQyxXQUE4QixRQUE5QkEsV0FBOEI7QUFBQSxNQUFqQkMsTUFBaUIsUUFBakJBLE1BQWlCO0FBQ3BGLFNBQ0UsTUFBQyw2Q0FBRDtBQUFNLFdBQU8sRUFBRSxLQUFmO0FBQXNCLFNBQUssa0JBQVdELFdBQVgsbUJBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFhLFdBQU8sTUFBcEI7QUFBcUIsUUFBSSxFQUFFLEtBQTNCO0FBQWtDLG9CQUFnQixFQUFFQSxXQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUEsd0NBQWUsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBZSxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQVUsY0FBVSxFQUFFLEtBQXRCO0FBQTZCLFVBQU0sRUFBRUMsTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJR0YsUUFBUSxJQUFJQSxRQUFRLENBQUNHLE1BQVQsR0FBa0IsQ0FBOUIsSUFDQyxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFBLHdDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxRQUFRLENBQUNJLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVVDLENBQVY7QUFBQSxXQUNaO0FBQUssU0FBRyxFQUFFQSxDQUFWO0FBQUEsMENBQXVCLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ0dDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0JILE9BQXBCLENBREgsQ0FEWTtBQUFBLEdBQWIsQ0FESCxDQUZGLENBTEosRUFnQkdOLFVBQVUsSUFBSUEsVUFBVSxDQUFDSSxNQUFYLEdBQW9CLENBQWxDLElBQ0M7QUFBQSx3Q0FBZSxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR0osVUFBVSxDQUFDSyxHQUFYLENBQWUsVUFBQUssU0FBUyxFQUFJO0FBQzNCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHRCxTQUFTLENBQUNFLFlBQTdCO0FBQ0EsV0FBT0QsVUFBVSxHQUNmLE1BQUMsaURBQUQ7QUFBVSxTQUFHLEVBQUVBLFVBQVUsQ0FBQ0UsV0FBMUI7QUFBdUMsZ0JBQVUsRUFBRUYsVUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURlLEdBRWIsSUFGSjtBQUdELEdBTkEsQ0FGSCxDQURGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1gsVUFBVSxDQUFDSyxHQUFYLENBQWUsVUFBQUssU0FBUyxFQUFJO0FBQzNCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHRCxTQUFILGFBQUdBLFNBQUgsdUJBQUdBLFNBQVMsQ0FBRUUsWUFBOUI7O0FBRjJCLGdCQUdFRCxVQUFVLElBQUksRUFIaEI7QUFBQSxrQ0FHbkJFLFdBSG1CO0FBQUEsUUFHbkJBLFdBSG1CLGtDQUdMLEVBSEs7O0FBSTNCLFFBQU1DLFdBQVcsR0FDZkQsV0FBVyxJQUFJQSxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVFLFdBQWYsT0FBaUNGLFdBQVcsQ0FBQyxDQUFELENBRDdEO0FBRUEsV0FBT0YsVUFBVSxHQUNmO0FBQUksU0FBRyxFQUFFRSxXQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxhQUFNQSxXQUFOLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dDLFdBQVcsSUFBSSx1RUFEbEIsWUFFTUQsV0FGTixTQUVvQkMsV0FBVyxHQUFHLEVBQUgsR0FBUSxJQUZ2QyxHQUdHQSxXQUFXLElBQUksNEVBSGxCLENBREYsQ0FERixDQURlLEdBVWIsSUFWSjtBQVdELEdBakJBLENBREgsQ0FGRixDQVhGLENBakJKLENBSkYsQ0FERjtBQUFBO0FBQUE7QUFBQSx1bldBREY7QUFtSkQ7S0FwSnVCZixPOztBQXFKeEIsSUFBSTtBQUNBO0FBQ0FBLFNBQU8sQ0FBQ2MsV0FBUixHQUFzQixTQUF0QixDQUZBLENBR0E7O0FBQ0FkLFNBQU8sQ0FBQ2EsWUFBUixHQUF1QjtBQUFFLG1CQUFlLEVBQWpCO0FBQXFCLG1CQUFlLFNBQXBDO0FBQStDLGFBQVM7QUFBRSxvQkFBYztBQUFFLHdCQUFnQixJQUFsQjtBQUF3Qix1QkFBZSxFQUF2QztBQUEyQyxnQkFBUSxZQUFuRDtBQUFpRSxvQkFBWSxLQUE3RTtBQUFvRixnQkFBUTtBQUFFLGtCQUFRO0FBQVY7QUFBNUYsT0FBaEI7QUFBbUosa0JBQVk7QUFBRSx3QkFBZ0IsSUFBbEI7QUFBd0IsdUJBQWUsRUFBdkM7QUFBMkMsZ0JBQVEsVUFBbkQ7QUFBK0Qsb0JBQVksS0FBM0U7QUFBa0YsZ0JBQVE7QUFBRSxrQkFBUTtBQUFWO0FBQTFGLE9BQS9KO0FBQTJULHFCQUFlO0FBQUUsd0JBQWdCLElBQWxCO0FBQXdCLHVCQUFlLEVBQXZDO0FBQTJDLGdCQUFRLGFBQW5EO0FBQWtFLG9CQUFZLElBQTlFO0FBQW9GLGdCQUFRO0FBQUUsa0JBQVE7QUFBVjtBQUE1RixPQUExVTtBQUFtYyxnQkFBVTtBQUFFLHdCQUFnQixJQUFsQjtBQUF3Qix1QkFBZSxFQUF2QztBQUEyQyxnQkFBUSxRQUFuRDtBQUE2RCxvQkFBWSxJQUF6RTtBQUErRSxnQkFBUTtBQUFFLGtCQUFRO0FBQVY7QUFBdkY7QUFBN2M7QUFBeEQsR0FBdkIsQ0FKQSxDQUtBOztBQUNBLE1BQUksT0FBT0ksdUJBQVAsS0FBbUMsV0FBdkMsRUFDSTtBQUNBQSwyQkFBdUIsQ0FBQyxvQ0FBRCxDQUF2QixHQUFnRTtBQUFFTCxnQkFBVSxFQUFFWixPQUFPLENBQUNhLFlBQXRCO0FBQW9DSyxVQUFJLEVBQUUsU0FBMUM7QUFBcURDLFVBQUksRUFBRTtBQUEzRCxLQUFoRTtBQUNQLENBVEQsQ0FVQSxPQUFPQyxzQ0FBUCxFQUErQyxDQUFHIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRG9jUGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bi93aXRoLWh0bWwnO1xuXG5pbXBvcnQgQXBpVGFibGUgZnJvbSAnLi9BcGlUYWJsZSc7XG5pbXBvcnQgUGFja2FnZUxpc3QgZnJvbSAnLi9QYWNrYWdlTGlzdCc7XG5pbXBvcnQgUGFnZSBmcm9tICcuL1BhZ2UnO1xuaW1wb3J0IHsgRG9jR2VuSW5mbywgVmlzeFBhY2thZ2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbXBvbmVudHM/OiB1bmtub3duW107XG4gIGV4YW1wbGVzPzogKFJlYWN0LkNvbXBvbmVudENsYXNzIHwgUmVhY3QuRkMpW107XG4gIHZpc3hQYWNrYWdlOiBWaXN4UGFja2FnZTtcbiAgcmVhZG1lOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2NQYWdlKHsgY29tcG9uZW50cywgZXhhbXBsZXMsIHZpc3hQYWNrYWdlLCByZWFkbWUgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UGFnZSB3cmFwcGVyPXtmYWxzZX0gdGl0bGU9e2BAdmlzeC8ke3Zpc3hQYWNrYWdlfSBkb2N1bWVudGF0aW9uYH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2MtbmF2XCI+XG4gICAgICAgICAgPFBhY2thZ2VMaXN0IGNvbXBhY3QgZ3JpZD17ZmFsc2V9IGVtcGhhc2l6ZVBhY2thZ2U9e3Zpc3hQYWNrYWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2MtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLXJlYWRtZVwiPlxuICAgICAgICAgICAgPE1hcmtkb3duIGVzY2FwZUh0bWw9e2ZhbHNlfSBzb3VyY2U9e3JlYWRtZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ZXhhbXBsZXMgJiYgZXhhbXBsZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8aDI+RXhhbXBsZXM8L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVzXCI+XG4gICAgICAgICAgICAgICAge2V4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQoZXhhbXBsZSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjb21wb25lbnRzICYmIGNvbXBvbmVudHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1kb2NzXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgyPkFQSXM8L2gyPlxuICAgICAgICAgICAgICAgIHtjb21wb25lbnRzLm1hcChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUUyBkb2Vzbid0IGtub3cgYWJvdXQgZG9jZ2VuSW5mb1xuICAgICAgICAgICAgICAgICAgY29uc3QgZG9jZ2VuSW5mbyA9IGNvbXBvbmVudC5fX2RvY2dlbkluZm8gYXMgRG9jR2VuSW5mbyB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkb2NnZW5JbmZvID8gKFxuICAgICAgICAgICAgICAgICAgICA8QXBpVGFibGUga2V5PXtkb2NnZW5JbmZvLmRpc3BsYXlOYW1lfSBkb2NnZW5JbmZvPXtkb2NnZW5JbmZvfSAvPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5FeHBvcnRzPC9oMj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICB7Y29tcG9uZW50cy5tYXAoY29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUUyBkb2Vzbid0IGtub3cgYWJvdXQgZG9jZ2VuSW5mb1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2NnZW5JbmZvID0gY29tcG9uZW50Py5fX2RvY2dlbkluZm8gYXMgRG9jR2VuSW5mbyB8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkaXNwbGF5TmFtZSA9ICcnIH0gPSBkb2NnZW5JbmZvIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0NvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWUgJiYgZGlzcGxheU5hbWVbMF0udG9Mb3dlckNhc2UoKSAhPT0gZGlzcGxheU5hbWVbMF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2NnZW5JbmZvID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Rpc3BsYXlOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtkaXNwbGF5TmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQ29tcG9uZW50ICYmIDw+Jmx0OzwvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7ZGlzcGxheU5hbWV9JHtpc0NvbXBvbmVudCA/ICcnIDogJygpJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0NvbXBvbmVudCAmJiA8PiZuYnNwOy8mZ3Q7PC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5kb2MtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5kb2MtY29udGVudCA6Z2xvYmFsKGgxKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1jb250ZW50IDpnbG9iYWwoaW1nKSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MHZ3O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwdmg7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1jb250ZW50IDpnbG9iYWwodGgpLFxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbCh0ZCkge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1uYXYge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNWVtO1xuICAgICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbChjb2RlKSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNZW5sbycsIG1vbm9zcGFjZTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBwYWRkaW5nOiAwLjJyZW0gMC4zcmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICAuZG9jLWNvbnRlbnQgOmdsb2JhbChjb2RlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10pIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1yZWFkbWUgOmdsb2JhbChwcmUpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICBtaW4td2lkdGg6IDMzdnc7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgLmRvYy1jb250ZW50IDpnbG9iYWwodGFibGUpIHtcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWZlZmVmO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmV4YW1wbGVzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuICAgICAgICAuZXhhbXBsZSB7XG4gICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMzJTtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbXBvbmVudC1kb2NzIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE4MHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgIC5kb2MtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogOTB2dztcbiAgICAgICAgICAgIG1heC13aWR0aDogOTB2dztcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmV4YW1wbGUge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cbnRyeSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIERvY1BhZ2UuZGlzcGxheU5hbWUgPSBcIkRvY1BhZ2VcIjtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgRG9jUGFnZS5fX2RvY2dlbkluZm8gPSB7IFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJkaXNwbGF5TmFtZVwiOiBcIkRvY1BhZ2VcIiwgXCJwcm9wc1wiOiB7IFwiY29tcG9uZW50c1wiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IG51bGwsIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwiY29tcG9uZW50c1wiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCJ1bmtub3duW10gfCB1bmRlZmluZWRcIiB9IH0sIFwiZXhhbXBsZXNcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcImV4YW1wbGVzXCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwidHlwZVwiOiB7IFwibmFtZVwiOiBcIihDb21wb25lbnRDbGFzczx7fSwgYW55PiB8IEZDPHt9PilbXSB8IHVuZGVmaW5lZFwiIH0gfSwgXCJ2aXN4UGFja2FnZVwiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IG51bGwsIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwidmlzeFBhY2thZ2VcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCJWaXN4UGFja2FnZVwiIH0gfSwgXCJyZWFkbWVcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcInJlYWRtZVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwidHlwZVwiOiB7IFwibmFtZVwiOiBcInN0cmluZ1wiIH0gfSB9IH07XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh0eXBlb2YgU1RPUllCT09LX1JFQUNUX0NMQVNTRVMgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgU1RPUllCT09LX1JFQUNUX0NMQVNTRVNbXCJzcmMvY29tcG9uZW50cy9Eb2NQYWdlLnRzeCNEb2NQYWdlXCJdID0geyBkb2NnZW5JbmZvOiBEb2NQYWdlLl9fZG9jZ2VuSW5mbywgbmFtZTogXCJEb2NQYWdlXCIsIHBhdGg6IFwic3JjL2NvbXBvbmVudHMvRG9jUGFnZS50c3gjRG9jUGFnZVwiIH07XG59XG5jYXRjaCAoX19yZWFjdF9kb2NnZW5fdHlwZXNjcmlwdF9sb2FkZXJfZXJyb3IpIHsgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DocPage.tsx\n");

/***/ })

})
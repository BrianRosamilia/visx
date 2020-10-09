webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/components/GalleryTile.tsx":
/*!****************************************!*\
  !*** ./src/components/GalleryTile.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GalleryTile; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"../../node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"../../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _visx_responsive_lib_components_ParentSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @visx/responsive/lib/components/ParentSize */ \"../visx-responsive/lib/components/ParentSize.js\");\n/* harmony import */ var _visx_responsive_lib_components_ParentSize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_visx_responsive_lib_components_ParentSize__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/harry/dev/visx/packages/visx-demo/src/components/GalleryTile.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar renderLinkWrapper = function renderLinkWrapper(url, node) {\n  return url ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, node) : node;\n};\n\nfunction GalleryTile(_ref) {\n  var description = _ref.description,\n      _ref$detailsHeight = _ref.detailsHeight,\n      detailsHeight = _ref$detailsHeight === void 0 ? 76 : _ref$detailsHeight,\n      detailsStyles = _ref.detailsStyles,\n      exampleProps = _ref.exampleProps,\n      exampleRenderer = _ref.exampleRenderer,\n      exampleUrl = _ref.exampleUrl,\n      tileStyles = _ref.tileStyles,\n      title = _ref.title;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, renderLinkWrapper(exampleUrl, __jsx(\"div\", {\n    style: tileStyles,\n    className: \"jsx-713312509\" + \" \" + \"gallery-tile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-713312509\" + \" \" + \"image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(_visx_responsive_lib_components_ParentSize__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, function (_ref2) {\n    var width = _ref2.width,\n        height = _ref2.height;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(exampleRenderer, _objectSpread({\n      width: width,\n      height: height\n    }, exampleProps));\n  })), (title || description) && __jsx(\"div\", {\n    style: detailsStyles,\n    className: \"jsx-713312509\" + \" \" + \"details\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, title && __jsx(\"div\", {\n    className: \"jsx-713312509\" + \" \" + \"title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 25\n    }\n  }, title), description && __jsx(\"div\", {\n    className: \"jsx-713312509\" + \" \" + \"description\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(\"pre\", {\n    className: \"jsx-713312509\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 19\n    }\n  }, description))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"713312509\",\n    __self: this\n  }, \"h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}.gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}.image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}.details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}.title.jsx-713312509{font-weight:900;line-height:0.9rem;}.description.jsx-713312509{font-weight:300;font-size:14px;}pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJyeS9kZXYvdmlzeC9wYWNrYWdlcy92aXN4LWRlbW8vc3JjL2NvbXBvbmVudHMvR2FsbGVyeVRpbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEa0IsQUFHd0IsQUFLVSxBQVdoQixBQUtXLEFBS0YsQUFJQSxBQUlQLEFBTU8sQUFLQyxTQVZZLElBbENaLENBd0NqQixDQUtBLENBbkJtQixBQUlKLEVBVEcsS0FoQlAsT0FKSyxDQThCbEIsRUFmZSxDQVZBLENBcUJmLENBTGdCLEVBYUUsUUFqQ2xCLElBcUJBLElBYUEscURBbkJrQixDQVZILGFBQ04sRUFVVCwrQkFUa0IsZ0JBQ00sOEVBQ0gsbUJBQ0osZUFDakIiLCJmaWxlIjoiL1VzZXJzL2hhcnJ5L2Rldi92aXN4L3BhY2thZ2VzL3Zpc3gtZGVtby9zcmMvY29tcG9uZW50cy9HYWxsZXJ5VGlsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBQYXJlbnRTaXplIGZyb20gJ0B2aXN4L3Jlc3BvbnNpdmUvbGliL2NvbXBvbmVudHMvUGFyZW50U2l6ZSc7XG5pbXBvcnQgeyBXaWR0aEFuZEhlaWdodCB9IGZyb20gJy4uL3R5cGVzJztcblxudHlwZSBQcm9wczxFeGFtcGxlUHJvcHMgZXh0ZW5kcyBXaWR0aEFuZEhlaWdodD4gPSB7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkZXRhaWxzSGVpZ2h0PzogbnVtYmVyO1xuICBkZXRhaWxzU3R5bGVzPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbiAgZXhhbXBsZVJlbmRlcmVyOiBSZWFjdC5Db21wb25lbnRDbGFzczxFeGFtcGxlUHJvcHM+IHwgUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8RXhhbXBsZVByb3BzPjtcbiAgZXhhbXBsZVByb3BzPzogT21pdDxFeGFtcGxlUHJvcHMsICd3aWR0aCcgfCAnaGVpZ2h0Jz4gJlxuICAgIFBhcnRpYWw8UGljazxFeGFtcGxlUHJvcHMsICd3aWR0aCcgfCAnaGVpZ2h0Jz4+O1xuICBleGFtcGxlVXJsPzogc3RyaW5nO1xuICB0aWxlU3R5bGVzPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbiAgdGl0bGU/OiBzdHJpbmc7XG59O1xuXG5jb25zdCByZW5kZXJMaW5rV3JhcHBlciA9ICh1cmw6IHN0cmluZyB8IHVuZGVmaW5lZCwgbm9kZTogUmVhY3QuUmVhY3ROb2RlKSA9PlxuICB1cmwgPyA8TGluayBocmVmPXt1cmx9Pntub2RlfTwvTGluaz4gOiBub2RlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5VGlsZTxFeGFtcGxlUHJvcHMgZXh0ZW5kcyBXaWR0aEFuZEhlaWdodD4oe1xuICBkZXNjcmlwdGlvbixcbiAgZGV0YWlsc0hlaWdodCA9IDc2LFxuICBkZXRhaWxzU3R5bGVzLFxuICBleGFtcGxlUHJvcHMsXG4gIGV4YW1wbGVSZW5kZXJlcixcbiAgZXhhbXBsZVVybCxcbiAgdGlsZVN0eWxlcyxcbiAgdGl0bGUsXG59OiBQcm9wczxFeGFtcGxlUHJvcHM+KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZW5kZXJMaW5rV3JhcHBlcihcbiAgICAgICAgZXhhbXBsZVVybCxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5LXRpbGVcIiBzdHlsZT17dGlsZVN0eWxlc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgPFBhcmVudFNpemU+XG4gICAgICAgICAgICAgIHsoeyB3aWR0aCwgaGVpZ2h0IH0pID0+XG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChleGFtcGxlUmVuZGVyZXIsIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICAuLi5leGFtcGxlUHJvcHMsXG4gICAgICAgICAgICAgICAgfSBhcyBFeGFtcGxlUHJvcHMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvUGFyZW50U2l6ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7KHRpdGxlIHx8IGRlc2NyaXB0aW9uKSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIiBzdHlsZT17ZGV0YWlsc1N0eWxlc30+XG4gICAgICAgICAgICAgIHt0aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvZGl2Pn1cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8cHJlPntkZXNjcmlwdGlvbn08L3ByZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PixcbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmdhbGxlcnktdGlsZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBoZWlnaHQ6IDM5MHB4O1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjlyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgICBwcmUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgICAgICAgIC5nYWxsZXJ5LXRpbGUge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0NSU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5nYWxsZXJ5LXRpbGUge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxudHJ5IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgR2FsbGVyeVRpbGUuZGlzcGxheU5hbWUgPSBcIkdhbGxlcnlUaWxlXCI7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEdhbGxlcnlUaWxlLl9fZG9jZ2VuSW5mbyA9IHsgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcImRpc3BsYXlOYW1lXCI6IFwiR2FsbGVyeVRpbGVcIiwgXCJwcm9wc1wiOiB7IFwiZGVzY3JpcHRpb25cIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwidHlwZVwiOiB7IFwibmFtZVwiOiBcInN0cmluZyB8IHVuZGVmaW5lZFwiIH0gfSwgXCJkZXRhaWxzSGVpZ2h0XCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogeyB2YWx1ZTogNzYgfSwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJkZXRhaWxzSGVpZ2h0XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwidHlwZVwiOiB7IFwibmFtZVwiOiBcIm51bWJlciB8IHVuZGVmaW5lZFwiIH0gfSwgXCJkZXRhaWxzU3R5bGVzXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJkZXRhaWxzU3R5bGVzXCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwidHlwZVwiOiB7IFwibmFtZVwiOiBcIkNTU1Byb3BlcnRpZXMgfCB1bmRlZmluZWRcIiB9IH0sIFwiZXhhbXBsZVJlbmRlcmVyXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJleGFtcGxlUmVuZGVyZXJcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCJDb21wb25lbnRDbGFzczxFeGFtcGxlUHJvcHMsIGFueT4gfCBGdW5jdGlvbkNvbXBvbmVudDxFeGFtcGxlUHJvcHM+XCIgfSB9LCBcImV4YW1wbGVQcm9wc1wiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IG51bGwsIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwiZXhhbXBsZVByb3BzXCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwidHlwZVwiOiB7IFwibmFtZVwiOiBcIihQaWNrPEV4YW1wbGVQcm9wcywgRXhjbHVkZTxrZXlvZiBFeGFtcGxlUHJvcHMsIFxcXCJ3aWR0aFxcXCIgfCBcXFwiaGVpZ2h0XFxcIj4+ICYgUGFydGlhbDxQaWNrPEV4YW1wbGVQcm9wcywgXFxcIndpZHRoXFxcIiB8IFxcXCJoZWlnaHRcXFwiPj4pIHwgdW5kZWZpbmVkXCIgfSB9LCBcImV4YW1wbGVVcmxcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcImV4YW1wbGVVcmxcIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwic3RyaW5nIHwgdW5kZWZpbmVkXCIgfSB9LCBcInRpbGVTdHlsZXNcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcInRpbGVTdHlsZXNcIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwiQ1NTUHJvcGVydGllcyB8IHVuZGVmaW5lZFwiIH0gfSwgXCJ0aXRsZVwiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IG51bGwsIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwidGl0bGVcIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwic3RyaW5nIHwgdW5kZWZpbmVkXCIgfSB9IH0gfTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHR5cGVvZiBTVE9SWUJPT0tfUkVBQ1RfQ0xBU1NFUyAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBTVE9SWUJPT0tfUkVBQ1RfQ0xBU1NFU1tcInNyYy9jb21wb25lbnRzL0dhbGxlcnlUaWxlLnRzeCNHYWxsZXJ5VGlsZVwiXSA9IHsgZG9jZ2VuSW5mbzogR2FsbGVyeVRpbGUuX19kb2NnZW5JbmZvLCBuYW1lOiBcIkdhbGxlcnlUaWxlXCIsIHBhdGg6IFwic3JjL2NvbXBvbmVudHMvR2FsbGVyeVRpbGUudHN4I0dhbGxlcnlUaWxlXCIgfTtcbn1cbmNhdGNoIChfX3JlYWN0X2RvY2dlbl90eXBlc2NyaXB0X2xvYWRlcl9lcnJvcikgeyB9Il19 */\\n/*@ sourceURL=/Users/harry/dev/visx/packages/visx-demo/src/components/GalleryTile.tsx */\"));\n}\n_c = GalleryTile;\n\ntry {\n  // @ts-ignore\n  GalleryTile.displayName = \"GalleryTile\"; // @ts-ignore\n\n  GalleryTile.__docgenInfo = {\n    \"description\": \"\",\n    \"displayName\": \"GalleryTile\",\n    \"props\": {\n      \"description\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"description\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"string | undefined\"\n        }\n      },\n      \"detailsHeight\": {\n        \"defaultValue\": {\n          value: 76\n        },\n        \"description\": \"\",\n        \"name\": \"detailsHeight\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"number | undefined\"\n        }\n      },\n      \"detailsStyles\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"detailsStyles\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"CSSProperties | undefined\"\n        }\n      },\n      \"exampleRenderer\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"exampleRenderer\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>\"\n        }\n      },\n      \"exampleProps\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"exampleProps\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"(Pick<ExampleProps, Exclude<keyof ExampleProps, \\\"width\\\" | \\\"height\\\">> & Partial<Pick<ExampleProps, \\\"width\\\" | \\\"height\\\">>) | undefined\"\n        }\n      },\n      \"exampleUrl\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"exampleUrl\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"string | undefined\"\n        }\n      },\n      \"tileStyles\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"tileStyles\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"CSSProperties | undefined\"\n        }\n      },\n      \"title\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"title\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"string | undefined\"\n        }\n      }\n    }\n  }; // @ts-ignore\n\n  if (typeof STORYBOOK_REACT_CLASSES !== \"undefined\") // @ts-ignore\n    STORYBOOK_REACT_CLASSES[\"src/components/GalleryTile.tsx#GalleryTile\"] = {\n      docgenInfo: GalleryTile.__docgenInfo,\n      name: \"GalleryTile\",\n      path: \"src/components/GalleryTile.tsx#GalleryTile\"\n    };\n} catch (__react_docgen_typescript_loader_error) {}\n\nvar _c;\n\n$RefreshReg$(_c, \"GalleryTile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeVRpbGUudHN4PzhiZDkiXSwibmFtZXMiOlsicmVuZGVyTGlua1dyYXBwZXIiLCJ1cmwiLCJub2RlIiwiR2FsbGVyeVRpbGUiLCJkZXNjcmlwdGlvbiIsImRldGFpbHNIZWlnaHQiLCJkZXRhaWxzU3R5bGVzIiwiZXhhbXBsZVByb3BzIiwiZXhhbXBsZVJlbmRlcmVyIiwiZXhhbXBsZVVybCIsInRpbGVTdHlsZXMiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiZGlzcGxheU5hbWUiLCJfX2RvY2dlbkluZm8iLCJ2YWx1ZSIsIlNUT1JZQk9PS19SRUFDVF9DTEFTU0VTIiwiZG9jZ2VuSW5mbyIsIm5hbWUiLCJwYXRoIiwiX19yZWFjdF9kb2NnZW5fdHlwZXNjcmlwdF9sb2FkZXJfZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQWVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsR0FBRCxFQUEwQkMsSUFBMUI7QUFBQSxTQUN4QkQsR0FBRyxHQUFHLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVBLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQkMsSUFBbEIsQ0FBSCxHQUFvQ0EsSUFEZjtBQUFBLENBQTFCOztBQUdlLFNBQVNDLFdBQVQsT0FTUztBQUFBLE1BUnRCQyxXQVFzQixRQVJ0QkEsV0FRc0I7QUFBQSxnQ0FQdEJDLGFBT3NCO0FBQUEsTUFQdEJBLGFBT3NCLG1DQVBOLEVBT007QUFBQSxNQU50QkMsYUFNc0IsUUFOdEJBLGFBTXNCO0FBQUEsTUFMdEJDLFlBS3NCLFFBTHRCQSxZQUtzQjtBQUFBLE1BSnRCQyxlQUlzQixRQUp0QkEsZUFJc0I7QUFBQSxNQUh0QkMsVUFHc0IsUUFIdEJBLFVBR3NCO0FBQUEsTUFGdEJD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LGdCQUFRLFlBQW5EO0FBQWlFLG9CQUFZLEtBQTdFO0FBQW9GLGdCQUFRO0FBQUUsa0JBQVE7QUFBVjtBQUE1RixPQUF6akM7QUFBZ3NDLGVBQVM7QUFBRSx3QkFBZ0IsSUFBbEI7QUFBd0IsdUJBQWUsRUFBdkM7QUFBMkMsZ0JBQVEsT0FBbkQ7QUFBNEQsb0JBQVksS0FBeEU7QUFBK0UsZ0JBQVE7QUFBRSxrQkFBUTtBQUFWO0FBQXZGO0FBQXpzQztBQUE1RCxHQUEzQixDQUpBLENBS0E7O0FBQ0EsTUFBSSxPQUFPQyx1QkFBUCxLQUFtQyxXQUF2QyxFQUNJO0FBQ0FBLDJCQUF1QixDQUFDLDRDQUFELENBQXZCLEdBQXdFO0FBQUVDLGdCQUFVLEVBQUVqQixXQUFXLENBQUNjLFlBQTFCO0FBQXdDSSxVQUFJLEVBQUUsYUFBOUM7QUFBNkRDLFVBQUksRUFBRTtBQUFuRSxLQUF4RTtBQUNQLENBVEQsQ0FVQSxPQUFPQyxzQ0FBUCxFQUErQyxDQUFHIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeVRpbGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUGFyZW50U2l6ZSBmcm9tICdAdmlzeC9yZXNwb25zaXZlL2xpYi9jb21wb25lbnRzL1BhcmVudFNpemUnO1xuaW1wb3J0IHsgV2lkdGhBbmRIZWlnaHQgfSBmcm9tICcuLi90eXBlcyc7XG5cbnR5cGUgUHJvcHM8RXhhbXBsZVByb3BzIGV4dGVuZHMgV2lkdGhBbmRIZWlnaHQ+ID0ge1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgZGV0YWlsc0hlaWdodD86IG51bWJlcjtcbiAgZGV0YWlsc1N0eWxlcz86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG4gIGV4YW1wbGVSZW5kZXJlcjogUmVhY3QuQ29tcG9uZW50Q2xhc3M8RXhhbXBsZVByb3BzPiB8IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PEV4YW1wbGVQcm9wcz47XG4gIGV4YW1wbGVQcm9wcz86IE9taXQ8RXhhbXBsZVByb3BzLCAnd2lkdGgnIHwgJ2hlaWdodCc+ICZcbiAgICBQYXJ0aWFsPFBpY2s8RXhhbXBsZVByb3BzLCAnd2lkdGgnIHwgJ2hlaWdodCc+PjtcbiAgZXhhbXBsZVVybD86IHN0cmluZztcbiAgdGlsZVN0eWxlcz86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG4gIHRpdGxlPzogc3RyaW5nO1xufTtcblxuY29uc3QgcmVuZGVyTGlua1dyYXBwZXIgPSAodXJsOiBzdHJpbmcgfCB1bmRlZmluZWQsIG5vZGU6IFJlYWN0LlJlYWN0Tm9kZSkgPT5cbiAgdXJsID8gPExpbmsgaHJlZj17dXJsfT57bm9kZX08L0xpbms+IDogbm9kZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeVRpbGU8RXhhbXBsZVByb3BzIGV4dGVuZHMgV2lkdGhBbmRIZWlnaHQ+KHtcbiAgZGVzY3JpcHRpb24sXG4gIGRldGFpbHNIZWlnaHQgPSA3NixcbiAgZGV0YWlsc1N0eWxlcyxcbiAgZXhhbXBsZVByb3BzLFxuICBleGFtcGxlUmVuZGVyZXIsXG4gIGV4YW1wbGVVcmwsXG4gIHRpbGVTdHlsZXMsXG4gIHRpdGxlLFxufTogUHJvcHM8RXhhbXBsZVByb3BzPikge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVuZGVyTGlua1dyYXBwZXIoXG4gICAgICAgIGV4YW1wbGVVcmwsXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeS10aWxlXCIgc3R5bGU9e3RpbGVTdHlsZXN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgIDxQYXJlbnRTaXplPlxuICAgICAgICAgICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoZXhhbXBsZVJlbmRlcmVyLCB7XG4gICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgLi4uZXhhbXBsZVByb3BzLFxuICAgICAgICAgICAgICAgIH0gYXMgRXhhbXBsZVByb3BzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1BhcmVudFNpemU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgeyh0aXRsZSB8fCBkZXNjcmlwdGlvbikgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCIgc3R5bGU9e2RldGFpbHNTdHlsZXN9PlxuICAgICAgICAgICAgICB7dGl0bGUgJiYgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2Rpdj59XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPHByZT57ZGVzY3JpcHRpb259PC9wcmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj4sXG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5nYWxsZXJ5LXRpbGUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiAzOTBweDtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMC45cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgcHJlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICAgICAgICAuZ2FsbGVyeS10aWxlIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDUlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuZ2FsbGVyeS10aWxlIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbnRyeSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEdhbGxlcnlUaWxlLmRpc3BsYXlOYW1lID0gXCJHYWxsZXJ5VGlsZVwiO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBHYWxsZXJ5VGlsZS5fX2RvY2dlbkluZm8gPSB7IFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJkaXNwbGF5TmFtZVwiOiBcIkdhbGxlcnlUaWxlXCIsIFwicHJvcHNcIjogeyBcImRlc2NyaXB0aW9uXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJkZXNjcmlwdGlvblwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCJzdHJpbmcgfCB1bmRlZmluZWRcIiB9IH0sIFwiZGV0YWlsc0hlaWdodFwiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IHsgdmFsdWU6IDc2IH0sIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwiZGV0YWlsc0hlaWdodFwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCJudW1iZXIgfCB1bmRlZmluZWRcIiB9IH0sIFwiZGV0YWlsc1N0eWxlc1wiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IG51bGwsIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwiZGV0YWlsc1N0eWxlc1wiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCJDU1NQcm9wZXJ0aWVzIHwgdW5kZWZpbmVkXCIgfSB9LCBcImV4YW1wbGVSZW5kZXJlclwiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IG51bGwsIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwiZXhhbXBsZVJlbmRlcmVyXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwiQ29tcG9uZW50Q2xhc3M8RXhhbXBsZVByb3BzLCBhbnk+IHwgRnVuY3Rpb25Db21wb25lbnQ8RXhhbXBsZVByb3BzPlwiIH0gfSwgXCJleGFtcGxlUHJvcHNcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcImV4YW1wbGVQcm9wc1wiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCIoUGljazxFeGFtcGxlUHJvcHMsIEV4Y2x1ZGU8a2V5b2YgRXhhbXBsZVByb3BzLCBcXFwid2lkdGhcXFwiIHwgXFxcImhlaWdodFxcXCI+PiAmIFBhcnRpYWw8UGljazxFeGFtcGxlUHJvcHMsIFxcXCJ3aWR0aFxcXCIgfCBcXFwiaGVpZ2h0XFxcIj4+KSB8IHVuZGVmaW5lZFwiIH0gfSwgXCJleGFtcGxlVXJsXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJleGFtcGxlVXJsXCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwidHlwZVwiOiB7IFwibmFtZVwiOiBcInN0cmluZyB8IHVuZGVmaW5lZFwiIH0gfSwgXCJ0aWxlU3R5bGVzXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJ0aWxlU3R5bGVzXCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwidHlwZVwiOiB7IFwibmFtZVwiOiBcIkNTU1Byb3BlcnRpZXMgfCB1bmRlZmluZWRcIiB9IH0sIFwidGl0bGVcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcInRpdGxlXCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwidHlwZVwiOiB7IFwibmFtZVwiOiBcInN0cmluZyB8IHVuZGVmaW5lZFwiIH0gfSB9IH07XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh0eXBlb2YgU1RPUllCT09LX1JFQUNUX0NMQVNTRVMgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgU1RPUllCT09LX1JFQUNUX0NMQVNTRVNbXCJzcmMvY29tcG9uZW50cy9HYWxsZXJ5VGlsZS50c3gjR2FsbGVyeVRpbGVcIl0gPSB7IGRvY2dlbkluZm86IEdhbGxlcnlUaWxlLl9fZG9jZ2VuSW5mbywgbmFtZTogXCJHYWxsZXJ5VGlsZVwiLCBwYXRoOiBcInNyYy9jb21wb25lbnRzL0dhbGxlcnlUaWxlLnRzeCNHYWxsZXJ5VGlsZVwiIH07XG59XG5jYXRjaCAoX19yZWFjdF9kb2NnZW5fdHlwZXNjcmlwdF9sb2FkZXJfZXJyb3IpIHsgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GalleryTile.tsx\n");

/***/ })

})
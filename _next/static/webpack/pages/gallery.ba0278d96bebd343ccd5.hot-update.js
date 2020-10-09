webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/sandboxes/visx-curve/Example.tsx":
/*!**********************************************!*\
  !*** ./src/sandboxes/visx-curve/Example.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Example; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"../../node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ \"../../node_modules/d3-array/src/index.js\");\n/* harmony import */ var _visx_curve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @visx/curve */ \"../visx-curve/esm/index.js\");\n/* harmony import */ var _visx_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @visx/group */ \"../visx-group/esm/index.js\");\n/* harmony import */ var _visx_shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @visx/shape */ \"../visx-shape/esm/index.js\");\n/* harmony import */ var _visx_scale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visx/scale */ \"../visx-scale/esm/index.js\");\n/* harmony import */ var _visx_marker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visx/marker */ \"../visx-marker/esm/index.js\");\n/* harmony import */ var _visx_mock_data_lib_generators_genDateValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @visx/mock-data/lib/generators/genDateValue */ \"../visx-mock-data/lib/generators/genDateValue.js\");\n/* harmony import */ var _visx_mock_data_lib_generators_genDateValue__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_visx_mock_data_lib_generators_genDateValue__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/Users/harry/dev/visx/packages/visx-demo/src/sandboxes/visx-curve/Example.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar curveTypes = Object.keys(_visx_curve__WEBPACK_IMPORTED_MODULE_3__);\nvar lineCount = 5;\nvar series = new Array(lineCount).fill(null).map(function (_) {\n  return _visx_mock_data_lib_generators_genDateValue__WEBPACK_IMPORTED_MODULE_8___default()(25).sort(function (a, b) {\n    return a.date.getTime() - b.date.getTime();\n  });\n});\nvar allData = series.reduce(function (rec, d) {\n  return rec.concat(d);\n}, []); // data accessors\n\nvar getX = function getX(d) {\n  return d.date;\n};\n\nvar getY = function getY(d) {\n  return d.value;\n}; // scales\n\n\nvar xScale = Object(_visx_scale__WEBPACK_IMPORTED_MODULE_6__[\"scaleTime\"])({\n  domain: Object(d3_array__WEBPACK_IMPORTED_MODULE_2__[\"extent\"])(allData, getX)\n});\nvar yScale = Object(_visx_scale__WEBPACK_IMPORTED_MODULE_6__[\"scaleLinear\"])({\n  domain: [0, Object(d3_array__WEBPACK_IMPORTED_MODULE_2__[\"max\"])(allData, getY)]\n});\nfunction Example(_ref) {\n  _s();\n\n  var _this = this;\n\n  var width = _ref.width,\n      height = _ref.height,\n      _ref$showControls = _ref.showControls,\n      showControls = _ref$showControls === void 0 ? true : _ref$showControls;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('curveNatural'),\n      curveType = _useState[0],\n      setCurveType = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      showPoints = _useState2[0],\n      setShowPoints = _useState2[1];\n\n  var svgHeight = showControls ? height - 40 : height;\n  var lineHeight = svgHeight / lineCount; // update scale output ranges\n\n  xScale.range([0, width - 50]);\n  yScale.range([lineHeight - 2, 0]);\n  return __jsx(\"div\", {\n    className: \"jsx-1571817224\" + \" \" + \"visx-curves-demo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, showControls && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"label\", {\n    className: \"jsx-1571817224\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, \"Curve type \\xA0\", __jsx(\"select\", {\n    onChange: function onChange(e) {\n      return setCurveType(e.target.value);\n    },\n    value: curveType,\n    className: \"jsx-1571817224\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, curveTypes.map(function (curve) {\n    return __jsx(\"option\", {\n      key: curve,\n      value: curve,\n      className: \"jsx-1571817224\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }\n    }, curve);\n  }))), \"\\xA0\", __jsx(\"label\", {\n    className: \"jsx-1571817224\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, \"Show points\\xA0\", __jsx(\"input\", {\n    type: \"checkbox\",\n    checked: showPoints,\n    onChange: function onChange() {\n      return setShowPoints(!showPoints);\n    },\n    className: \"jsx-1571817224\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  })), __jsx(\"br\", {\n    className: \"jsx-1571817224\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  })), __jsx(\"svg\", {\n    width: width,\n    height: svgHeight,\n    className: \"jsx-1571817224\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, __jsx(_visx_marker__WEBPACK_IMPORTED_MODULE_7__[\"MarkerX\"], {\n    id: \"marker-x\",\n    stroke: \"#333\",\n    size: 22,\n    strokeWidth: 4,\n    markerUnits: \"userSpaceOnUse\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }), __jsx(_visx_marker__WEBPACK_IMPORTED_MODULE_7__[\"MarkerCross\"], {\n    id: \"marker-cross\",\n    stroke: \"#333\",\n    size: 22,\n    strokeWidth: 4,\n    strokeOpacity: 0.6,\n    markerUnits: \"userSpaceOnUse\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }), __jsx(_visx_marker__WEBPACK_IMPORTED_MODULE_7__[\"MarkerCircle\"], {\n    id: \"marker-circle\",\n    fill: \"#333\",\n    size: 2,\n    refX: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }), __jsx(_visx_marker__WEBPACK_IMPORTED_MODULE_7__[\"MarkerArrow\"], {\n    id: \"marker-arrow-odd\",\n    stroke: \"#333\",\n    size: 8,\n    strokeWidth: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }), __jsx(_visx_marker__WEBPACK_IMPORTED_MODULE_7__[\"MarkerLine\"], {\n    id: \"marker-line\",\n    fill: \"#333\",\n    size: 16,\n    strokeWidth: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }), __jsx(_visx_marker__WEBPACK_IMPORTED_MODULE_7__[\"MarkerArrow\"], {\n    id: \"marker-arrow\",\n    fill: \"#333\",\n    refX: 2,\n    size: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 9\n    }\n  }), __jsx(\"rect\", {\n    width: width,\n    height: svgHeight,\n    fill: \"#222\",\n    rx: 14,\n    ry: 14,\n    className: \"jsx-1571817224\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }), width > 8 && series.map(function (lineData, i) {\n    var even = i % 2 === 0;\n    var markerStart = even ? 'url(#marker-cross)' : 'url(#marker-x)';\n    if (i === 1) markerStart = 'url(#marker-line)';\n    var markerEnd = even ? 'url(#marker-arrow)' : 'url(#marker-arrow-odd)';\n    return __jsx(_visx_group__WEBPACK_IMPORTED_MODULE_4__[\"Group\"], {\n      key: \"lines-\".concat(i),\n      top: i * lineHeight,\n      left: 13,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 15\n      }\n    }, showPoints && lineData.map(function (d, j) {\n      return __jsx(\"circle\", {\n        key: i + j,\n        r: 3,\n        cx: xScale(getX(d)),\n        cy: yScale(getY(d)),\n        stroke: \"#fff\",\n        fill: \"transparent\",\n        className: \"jsx-1571817224\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 21\n        }\n      });\n    }), __jsx(_visx_shape__WEBPACK_IMPORTED_MODULE_5__[\"LinePath\"], {\n      curve: _visx_curve__WEBPACK_IMPORTED_MODULE_3__[curveType],\n      data: lineData,\n      x: function x(d) {\n        return xScale(getX(d));\n      },\n      y: function y(d) {\n        return yScale(getY(d));\n      },\n      stroke: \"#333\",\n      strokeWidth: even ? 2 : 1,\n      strokeOpacity: even ? 0.6 : 1,\n      shapeRendering: \"geometricPrecision\",\n      markerMid: \"url(#marker-circle)\",\n      markerStart: markerStart,\n      markerEnd: markerEnd,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 17\n      }\n    }));\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1571817224\",\n    __self: this\n  }, \".visx-curves-demo.jsx-1571817224 label.jsx-1571817224{font-size:12px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJyeS9kZXYvdmlzeC9wYWNrYWdlcy92aXN4LWRlbW8vc3JjL3NhbmRib3hlcy92aXN4LWN1cnZlL0V4YW1wbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ja0IsQUFHMEIsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2hhcnJ5L2Rldi92aXN4L3BhY2thZ2VzL3Zpc3gtZGVtby9zcmMvc2FuZGJveGVzL3Zpc3gtY3VydmUvRXhhbXBsZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBleHRlbnQsIG1heCB9IGZyb20gJ2QzLWFycmF5JztcbmltcG9ydCAqIGFzIGFsbEN1cnZlcyBmcm9tICdAdmlzeC9jdXJ2ZSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJ0B2aXN4L2dyb3VwJztcbmltcG9ydCB7IExpbmVQYXRoIH0gZnJvbSAnQHZpc3gvc2hhcGUnO1xuaW1wb3J0IHsgc2NhbGVUaW1lLCBzY2FsZUxpbmVhciB9IGZyb20gJ0B2aXN4L3NjYWxlJztcbmltcG9ydCB7IE1hcmtlckFycm93LCBNYXJrZXJDcm9zcywgTWFya2VyWCwgTWFya2VyQ2lyY2xlLCBNYXJrZXJMaW5lIH0gZnJvbSAnQHZpc3gvbWFya2VyJztcbmltcG9ydCBnZW5lcmF0ZURhdGVWYWx1ZSwgeyBEYXRlVmFsdWUgfSBmcm9tICdAdmlzeC9tb2NrLWRhdGEvbGliL2dlbmVyYXRvcnMvZ2VuRGF0ZVZhbHVlJztcblxudHlwZSBDdXJ2ZVR5cGUgPSBrZXlvZiB0eXBlb2YgYWxsQ3VydmVzO1xuXG5jb25zdCBjdXJ2ZVR5cGVzID0gT2JqZWN0LmtleXMoYWxsQ3VydmVzKTtcbmNvbnN0IGxpbmVDb3VudCA9IDU7XG5jb25zdCBzZXJpZXMgPSBuZXcgQXJyYXkobGluZUNvdW50KVxuICAuZmlsbChudWxsKVxuICAubWFwKF8gPT5cbiAgICBnZW5lcmF0ZURhdGVWYWx1ZSgyNSkuc29ydCgoYTogRGF0ZVZhbHVlLCBiOiBEYXRlVmFsdWUpID0+IGEuZGF0ZS5nZXRUaW1lKCkgLSBiLmRhdGUuZ2V0VGltZSgpKSxcbiAgKTtcbmNvbnN0IGFsbERhdGEgPSBzZXJpZXMucmVkdWNlKChyZWMsIGQpID0+IHJlYy5jb25jYXQoZCksIFtdKTtcblxuLy8gZGF0YSBhY2Nlc3NvcnNcbmNvbnN0IGdldFggPSAoZDogRGF0ZVZhbHVlKSA9PiBkLmRhdGU7XG5jb25zdCBnZXRZID0gKGQ6IERhdGVWYWx1ZSkgPT4gZC52YWx1ZTtcblxuLy8gc2NhbGVzXG5jb25zdCB4U2NhbGUgPSBzY2FsZVRpbWU8bnVtYmVyPih7XG4gIGRvbWFpbjogZXh0ZW50KGFsbERhdGEsIGdldFgpIGFzIFtEYXRlLCBEYXRlXSxcbn0pO1xuY29uc3QgeVNjYWxlID0gc2NhbGVMaW5lYXI8bnVtYmVyPih7XG4gIGRvbWFpbjogWzAsIG1heChhbGxEYXRhLCBnZXRZKSBhcyBudW1iZXJdLFxufSk7XG5cbmV4cG9ydCB0eXBlIEN1cnZlUHJvcHMgPSB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBzaG93Q29udHJvbHM/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZSh7IHdpZHRoLCBoZWlnaHQsIHNob3dDb250cm9scyA9IHRydWUgfTogQ3VydmVQcm9wcykge1xuICBjb25zdCBbY3VydmVUeXBlLCBzZXRDdXJ2ZVR5cGVdID0gdXNlU3RhdGU8Q3VydmVUeXBlPignY3VydmVOYXR1cmFsJyk7XG4gIGNvbnN0IFtzaG93UG9pbnRzLCBzZXRTaG93UG9pbnRzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBzdmdIZWlnaHQgPSBzaG93Q29udHJvbHMgPyBoZWlnaHQgLSA0MCA6IGhlaWdodDtcbiAgY29uc3QgbGluZUhlaWdodCA9IHN2Z0hlaWdodCAvIGxpbmVDb3VudDtcblxuICAvLyB1cGRhdGUgc2NhbGUgb3V0cHV0IHJhbmdlc1xuICB4U2NhbGUucmFuZ2UoWzAsIHdpZHRoIC0gNTBdKTtcbiAgeVNjYWxlLnJhbmdlKFtsaW5lSGVpZ2h0IC0gMiwgMF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2aXN4LWN1cnZlcy1kZW1vXCI+XG4gICAgICB7c2hvd0NvbnRyb2xzICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBDdXJ2ZSB0eXBlICZuYnNwO1xuICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17ZSA9PiBzZXRDdXJ2ZVR5cGUoZS50YXJnZXQudmFsdWUgYXMgQ3VydmVUeXBlKX0gdmFsdWU9e2N1cnZlVHlwZX0+XG4gICAgICAgICAgICAgIHtjdXJ2ZVR5cGVzLm1hcChjdXJ2ZSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2N1cnZlfSB2YWx1ZT17Y3VydmV9PlxuICAgICAgICAgICAgICAgICAge2N1cnZlfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgU2hvdyBwb2ludHMmbmJzcDtcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtzaG93UG9pbnRzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0U2hvd1BvaW50cyghc2hvd1BvaW50cyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e3N2Z0hlaWdodH0+XG4gICAgICAgIDxNYXJrZXJYXG4gICAgICAgICAgaWQ9XCJtYXJrZXIteFwiXG4gICAgICAgICAgc3Ryb2tlPVwiIzMzM1wiXG4gICAgICAgICAgc2l6ZT17MjJ9XG4gICAgICAgICAgc3Ryb2tlV2lkdGg9ezR9XG4gICAgICAgICAgbWFya2VyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxNYXJrZXJDcm9zc1xuICAgICAgICAgIGlkPVwibWFya2VyLWNyb3NzXCJcbiAgICAgICAgICBzdHJva2U9XCIjMzMzXCJcbiAgICAgICAgICBzaXplPXsyMn1cbiAgICAgICAgICBzdHJva2VXaWR0aD17NH1cbiAgICAgICAgICBzdHJva2VPcGFjaXR5PXswLjZ9XG4gICAgICAgICAgbWFya2VyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxNYXJrZXJDaXJjbGUgaWQ9XCJtYXJrZXItY2lyY2xlXCIgZmlsbD1cIiMzMzNcIiBzaXplPXsyfSByZWZYPXsyfSAvPlxuICAgICAgICA8TWFya2VyQXJyb3cgaWQ9XCJtYXJrZXItYXJyb3ctb2RkXCIgc3Ryb2tlPVwiIzMzM1wiIHNpemU9ezh9IHN0cm9rZVdpZHRoPXsxfSAvPlxuICAgICAgICA8TWFya2VyTGluZSBpZD1cIm1hcmtlci1saW5lXCIgZmlsbD1cIiMzMzNcIiBzaXplPXsxNn0gc3Ryb2tlV2lkdGg9ezF9IC8+XG4gICAgICAgIDxNYXJrZXJBcnJvdyBpZD1cIm1hcmtlci1hcnJvd1wiIGZpbGw9XCIjMzMzXCIgcmVmWD17Mn0gc2l6ZT17Nn0gLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e3N2Z0hlaWdodH0gZmlsbD1cIiMyMjJcIiByeD17MTR9IHJ5PXsxNH0gLz5cbiAgICAgICAge3dpZHRoID4gOCAmJlxuICAgICAgICAgIHNlcmllcy5tYXAoKGxpbmVEYXRhLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBldmVuID0gaSAlIDIgPT09IDA7XG4gICAgICAgICAgICBsZXQgbWFya2VyU3RhcnQgPSBldmVuID8gJ3VybCgjbWFya2VyLWNyb3NzKScgOiAndXJsKCNtYXJrZXIteCknO1xuICAgICAgICAgICAgaWYgKGkgPT09IDEpIG1hcmtlclN0YXJ0ID0gJ3VybCgjbWFya2VyLWxpbmUpJztcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlckVuZCA9IGV2ZW4gPyAndXJsKCNtYXJrZXItYXJyb3cpJyA6ICd1cmwoI21hcmtlci1hcnJvdy1vZGQpJztcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxHcm91cCBrZXk9e2BsaW5lcy0ke2l9YH0gdG9wPXtpICogbGluZUhlaWdodH0gbGVmdD17MTN9PlxuICAgICAgICAgICAgICAgIHtzaG93UG9pbnRzICYmXG4gICAgICAgICAgICAgICAgICBsaW5lRGF0YS5tYXAoKGQsIGopID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aSArIGp9XG4gICAgICAgICAgICAgICAgICAgICAgcj17M31cbiAgICAgICAgICAgICAgICAgICAgICBjeD17eFNjYWxlKGdldFgoZCkpfVxuICAgICAgICAgICAgICAgICAgICAgIGN5PXt5U2NhbGUoZ2V0WShkKSl9XG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxMaW5lUGF0aDxEYXRlVmFsdWU+XG4gICAgICAgICAgICAgICAgICBjdXJ2ZT17YWxsQ3VydmVzW2N1cnZlVHlwZV19XG4gICAgICAgICAgICAgICAgICBkYXRhPXtsaW5lRGF0YX1cbiAgICAgICAgICAgICAgICAgIHg9e2QgPT4geFNjYWxlKGdldFgoZCkpfVxuICAgICAgICAgICAgICAgICAgeT17ZCA9PiB5U2NhbGUoZ2V0WShkKSl9XG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCIjMzMzXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtldmVuID8gMiA6IDF9XG4gICAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5PXtldmVuID8gMC42IDogMX1cbiAgICAgICAgICAgICAgICAgIHNoYXBlUmVuZGVyaW5nPVwiZ2VvbWV0cmljUHJlY2lzaW9uXCJcbiAgICAgICAgICAgICAgICAgIG1hcmtlck1pZD1cInVybCgjbWFya2VyLWNpcmNsZSlcIlxuICAgICAgICAgICAgICAgICAgbWFya2VyU3RhcnQ9e21hcmtlclN0YXJ0fVxuICAgICAgICAgICAgICAgICAgbWFya2VyRW5kPXttYXJrZXJFbmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L3N2Zz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnZpc3gtY3VydmVzLWRlbW8gbGFiZWwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxudHJ5IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgRXhhbXBsZS5kaXNwbGF5TmFtZSA9IFwiRXhhbXBsZVwiO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBFeGFtcGxlLl9fZG9jZ2VuSW5mbyA9IHsgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcImRpc3BsYXlOYW1lXCI6IFwiRXhhbXBsZVwiLCBcInByb3BzXCI6IHsgXCJ3aWR0aFwiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IG51bGwsIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwid2lkdGhcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCJudW1iZXJcIiB9IH0sIFwiaGVpZ2h0XCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogbnVsbCwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJoZWlnaHRcIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCJudW1iZXJcIiB9IH0sIFwic2hvd0NvbnRyb2xzXCI6IHsgXCJkZWZhdWx0VmFsdWVcIjogeyB2YWx1ZTogdHJ1ZSB9LCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcInNob3dDb250cm9sc1wiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcInR5cGVcIjogeyBcIm5hbWVcIjogXCJib29sZWFuIHwgdW5kZWZpbmVkXCIgfSB9IH0gfTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHR5cGVvZiBTVE9SWUJPT0tfUkVBQ1RfQ0xBU1NFUyAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBTVE9SWUJPT0tfUkVBQ1RfQ0xBU1NFU1tcInNyYy9zYW5kYm94ZXMvdmlzeC1jdXJ2ZS9FeGFtcGxlLnRzeCNFeGFtcGxlXCJdID0geyBkb2NnZW5JbmZvOiBFeGFtcGxlLl9fZG9jZ2VuSW5mbywgbmFtZTogXCJFeGFtcGxlXCIsIHBhdGg6IFwic3JjL3NhbmRib3hlcy92aXN4LWN1cnZlL0V4YW1wbGUudHN4I0V4YW1wbGVcIiB9O1xufVxuY2F0Y2ggKF9fcmVhY3RfZG9jZ2VuX3R5cGVzY3JpcHRfbG9hZGVyX2Vycm9yKSB7IH0iXX0= */\\n/*@ sourceURL=/Users/harry/dev/visx/packages/visx-demo/src/sandboxes/visx-curve/Example.tsx */\"));\n}\n\n_s(Example, \"jhkBRAO4tyU6vq4Zpe0ipJm0v84=\");\n\n_c = Example;\n\ntry {\n  // @ts-ignore\n  Example.displayName = \"Example\"; // @ts-ignore\n\n  Example.__docgenInfo = {\n    \"description\": \"\",\n    \"displayName\": \"Example\",\n    \"props\": {\n      \"width\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"width\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"number\"\n        }\n      },\n      \"height\": {\n        \"defaultValue\": null,\n        \"description\": \"\",\n        \"name\": \"height\",\n        \"required\": true,\n        \"type\": {\n          \"name\": \"number\"\n        }\n      },\n      \"showControls\": {\n        \"defaultValue\": {\n          value: true\n        },\n        \"description\": \"\",\n        \"name\": \"showControls\",\n        \"required\": false,\n        \"type\": {\n          \"name\": \"boolean | undefined\"\n        }\n      }\n    }\n  }; // @ts-ignore\n\n  if (typeof STORYBOOK_REACT_CLASSES !== \"undefined\") // @ts-ignore\n    STORYBOOK_REACT_CLASSES[\"src/sandboxes/visx-curve/Example.tsx#Example\"] = {\n      docgenInfo: Example.__docgenInfo,\n      name: \"Example\",\n      path: \"src/sandboxes/visx-curve/Example.tsx#Example\"\n    };\n} catch (__react_docgen_typescript_loader_error) {}\n\nvar _c;\n\n$RefreshReg$(_c, \"Example\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhbmRib3hlcy92aXN4LWN1cnZlL0V4YW1wbGUudHN4PzdhMjMiXSwibmFtZXMiOlsiY3VydmVUeXBlcyIsIk9iamVjdCIsImtleXMiLCJhbGxDdXJ2ZXMiLCJsaW5lQ291bnQiLCJzZXJpZXMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiZ2VuZXJhdGVEYXRlVmFsdWUiLCJzb3J0IiwiYSIsImIiLCJkYXRlIiwiZ2V0VGltZSIsImFsbERhdGEiLCJyZWR1Y2UiLCJyZWMiLCJkIiwiY29uY2F0IiwiZ2V0WCIsImdldFkiLCJ2YWx1ZSIsInhTY2FsZSIsInNjYWxlVGltZSIsImRvbWFpbiIsImV4dGVudCIsInlTY2FsZSIsInNjYWxlTGluZWFyIiwibWF4IiwiRXhhbXBsZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2hvd0NvbnRyb2xzIiwidXNlU3RhdGUiLCJjdXJ2ZVR5cGUiLCJzZXRDdXJ2ZVR5cGUiLCJzaG93UG9pbnRzIiwic2V0U2hvd1BvaW50cyIsInN2Z0hlaWdodCIsImxpbmVIZWlnaHQiLCJyYW5nZSIsImUiLCJ0YXJnZXQiLCJjdXJ2ZSIsImxpbmVEYXRhIiwiaSIsImV2ZW4iLCJtYXJrZXJTdGFydCIsIm1hcmtlckVuZCIsImoiLCJkaXNwbGF5TmFtZSIsIl9fZG9jZ2VuSW5mbyIsIlNUT1JZQk9PS19SRUFDVF9DTEFTU0VTIiwiZG9jZ2VuSW5mbyIsIm5hbWUiLCJwYXRoIiwiX19yZWFjdF9kb2NnZW5fdHlwZXNjcmlwdF9sb2FkZXJfZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBTUEsVUFBVSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUMsd0NBQVosQ0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsQ0FBbEI7QUFDQSxJQUFNQyxNQUFNLEdBQUcsSUFBSUMsS0FBSixDQUFVRixTQUFWLEVB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QUFxR3hCLElBQUk7QUFDQTtBQUNBQSxTQUFPLENBQUNxQixXQUFSLEdBQXNCLFNBQXRCLENBRkEsQ0FHQTs7QUFDQXJCLFNBQU8sQ0FBQ3NCLFlBQVIsR0FBdUI7QUFBRSxtQkFBZSxFQUFqQjtBQUFxQixtQkFBZSxTQUFwQztBQUErQyxhQUFTO0FBQUUsZUFBUztBQUFFLHdCQUFnQixJQUFsQjtBQUF3Qix1QkFBZSxFQUF2QztBQUEyQyxnQkFBUSxPQUFuRDtBQUE0RCxvQkFBWSxJQUF4RTtBQUE4RSxnQkFBUTtBQUFFLGtCQUFRO0FBQVY7QUFBdEYsT0FBWDtBQUF5SCxnQkFBVTtBQUFFLHdCQUFnQixJQUFsQjtBQUF3Qix1QkFBZSxFQUF2QztBQUEyQyxnQkFBUSxRQUFuRDtBQUE2RCxvQkFBWSxJQUF6RTtBQUErRSxnQkFBUTtBQUFFLGtCQUFRO0FBQVY7QUFBdkYsT0FBbkk7QUFBa1Asc0JBQWdCO0FBQUUsd0JBQWdCO0FBQUU5QixlQUFLLEVBQUU7QUFBVCxTQUFsQjtBQUFtQyx1QkFBZSxFQUFsRDtBQUFzRCxnQkFBUSxjQUE5RDtBQUE4RSxvQkFBWSxLQUExRjtBQUFpRyxnQkFBUTtBQUFFLGtCQUFRO0FBQVY7QUFBekc7QUFBbFE7QUFBeEQsR0FBdkIsQ0FKQSxDQUtBOztBQUNBLE1BQUksT0FBTytCLHVCQUFQLEtBQW1DLFdBQXZDLEVBQ0k7QUFDQUEsMkJBQXVCLENBQUMsOENBQUQsQ0FBdkIsR0FBMEU7QUFBRUMsZ0JBQVUsRUFBRXhCLE9BQU8sQ0FBQ3NCLFlBQXRCO0FBQW9DRyxVQUFJLEVBQUUsU0FBMUM7QUFBcURDLFVBQUksRUFBRTtBQUEzRCxLQUExRTtBQUNQLENBVEQsQ0FVQSxPQUFPQyxzQ0FBUCxFQUErQyxDQUFHIiwiZmlsZSI6Ii4vc3JjL3NhbmRib3hlcy92aXN4LWN1cnZlL0V4YW1wbGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZXh0ZW50LCBtYXggfSBmcm9tICdkMy1hcnJheSc7XG5pbXBvcnQgKiBhcyBhbGxDdXJ2ZXMgZnJvbSAnQHZpc3gvY3VydmUnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICdAdmlzeC9ncm91cCc7XG5pbXBvcnQgeyBMaW5lUGF0aCB9IGZyb20gJ0B2aXN4L3NoYXBlJztcbmltcG9ydCB7IHNjYWxlVGltZSwgc2NhbGVMaW5lYXIgfSBmcm9tICdAdmlzeC9zY2FsZSc7XG5pbXBvcnQgeyBNYXJrZXJBcnJvdywgTWFya2VyQ3Jvc3MsIE1hcmtlclgsIE1hcmtlckNpcmNsZSwgTWFya2VyTGluZSB9IGZyb20gJ0B2aXN4L21hcmtlcic7XG5pbXBvcnQgZ2VuZXJhdGVEYXRlVmFsdWUsIHsgRGF0ZVZhbHVlIH0gZnJvbSAnQHZpc3gvbW9jay1kYXRhL2xpYi9nZW5lcmF0b3JzL2dlbkRhdGVWYWx1ZSc7XG5cbnR5cGUgQ3VydmVUeXBlID0ga2V5b2YgdHlwZW9mIGFsbEN1cnZlcztcblxuY29uc3QgY3VydmVUeXBlcyA9IE9iamVjdC5rZXlzKGFsbEN1cnZlcyk7XG5jb25zdCBsaW5lQ291bnQgPSA1O1xuY29uc3Qgc2VyaWVzID0gbmV3IEFycmF5KGxpbmVDb3VudClcbiAgLmZpbGwobnVsbClcbiAgLm1hcChfID0+XG4gICAgZ2VuZXJhdGVEYXRlVmFsdWUoMjUpLnNvcnQoKGE6IERhdGVWYWx1ZSwgYjogRGF0ZVZhbHVlKSA9PiBhLmRhdGUuZ2V0VGltZSgpIC0gYi5kYXRlLmdldFRpbWUoKSksXG4gICk7XG5jb25zdCBhbGxEYXRhID0gc2VyaWVzLnJlZHVjZSgocmVjLCBkKSA9PiByZWMuY29uY2F0KGQpLCBbXSk7XG5cbi8vIGRhdGEgYWNjZXNzb3JzXG5jb25zdCBnZXRYID0gKGQ6IERhdGVWYWx1ZSkgPT4gZC5kYXRlO1xuY29uc3QgZ2V0WSA9IChkOiBEYXRlVmFsdWUpID0+IGQudmFsdWU7XG5cbi8vIHNjYWxlc1xuY29uc3QgeFNjYWxlID0gc2NhbGVUaW1lPG51bWJlcj4oe1xuICBkb21haW46IGV4dGVudChhbGxEYXRhLCBnZXRYKSBhcyBbRGF0ZSwgRGF0ZV0sXG59KTtcbmNvbnN0IHlTY2FsZSA9IHNjYWxlTGluZWFyPG51bWJlcj4oe1xuICBkb21haW46IFswLCBtYXgoYWxsRGF0YSwgZ2V0WSkgYXMgbnVtYmVyXSxcbn0pO1xuXG5leHBvcnQgdHlwZSBDdXJ2ZVByb3BzID0ge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgc2hvd0NvbnRyb2xzPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4YW1wbGUoeyB3aWR0aCwgaGVpZ2h0LCBzaG93Q29udHJvbHMgPSB0cnVlIH06IEN1cnZlUHJvcHMpIHtcbiAgY29uc3QgW2N1cnZlVHlwZSwgc2V0Q3VydmVUeXBlXSA9IHVzZVN0YXRlPEN1cnZlVHlwZT4oJ2N1cnZlTmF0dXJhbCcpO1xuICBjb25zdCBbc2hvd1BvaW50cywgc2V0U2hvd1BvaW50c10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgY29uc3Qgc3ZnSGVpZ2h0ID0gc2hvd0NvbnRyb2xzID8gaGVpZ2h0IC0gNDAgOiBoZWlnaHQ7XG4gIGNvbnN0IGxpbmVIZWlnaHQgPSBzdmdIZWlnaHQgLyBsaW5lQ291bnQ7XG5cbiAgLy8gdXBkYXRlIHNjYWxlIG91dHB1dCByYW5nZXNcbiAgeFNjYWxlLnJhbmdlKFswLCB3aWR0aCAtIDUwXSk7XG4gIHlTY2FsZS5yYW5nZShbbGluZUhlaWdodCAtIDIsIDBdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlzeC1jdXJ2ZXMtZGVtb1wiPlxuICAgICAge3Nob3dDb250cm9scyAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQ3VydmUgdHlwZSAmbmJzcDtcbiAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2UgPT4gc2V0Q3VydmVUeXBlKGUudGFyZ2V0LnZhbHVlIGFzIEN1cnZlVHlwZSl9IHZhbHVlPXtjdXJ2ZVR5cGV9PlxuICAgICAgICAgICAgICB7Y3VydmVUeXBlcy5tYXAoY3VydmUgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjdXJ2ZX0gdmFsdWU9e2N1cnZlfT5cbiAgICAgICAgICAgICAgICAgIHtjdXJ2ZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICZuYnNwO1xuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFNob3cgcG9pbnRzJm5ic3A7XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17c2hvd1BvaW50c31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHNldFNob3dQb2ludHMoIXNob3dQb2ludHMpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtzdmdIZWlnaHR9PlxuICAgICAgICA8TWFya2VyWFxuICAgICAgICAgIGlkPVwibWFya2VyLXhcIlxuICAgICAgICAgIHN0cm9rZT1cIiMzMzNcIlxuICAgICAgICAgIHNpemU9ezIyfVxuICAgICAgICAgIHN0cm9rZVdpZHRoPXs0fVxuICAgICAgICAgIG1hcmtlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAvPlxuICAgICAgICA8TWFya2VyQ3Jvc3NcbiAgICAgICAgICBpZD1cIm1hcmtlci1jcm9zc1wiXG4gICAgICAgICAgc3Ryb2tlPVwiIzMzM1wiXG4gICAgICAgICAgc2l6ZT17MjJ9XG4gICAgICAgICAgc3Ryb2tlV2lkdGg9ezR9XG4gICAgICAgICAgc3Ryb2tlT3BhY2l0eT17MC42fVxuICAgICAgICAgIG1hcmtlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAvPlxuICAgICAgICA8TWFya2VyQ2lyY2xlIGlkPVwibWFya2VyLWNpcmNsZVwiIGZpbGw9XCIjMzMzXCIgc2l6ZT17Mn0gcmVmWD17Mn0gLz5cbiAgICAgICAgPE1hcmtlckFycm93IGlkPVwibWFya2VyLWFycm93LW9kZFwiIHN0cm9rZT1cIiMzMzNcIiBzaXplPXs4fSBzdHJva2VXaWR0aD17MX0gLz5cbiAgICAgICAgPE1hcmtlckxpbmUgaWQ9XCJtYXJrZXItbGluZVwiIGZpbGw9XCIjMzMzXCIgc2l6ZT17MTZ9IHN0cm9rZVdpZHRoPXsxfSAvPlxuICAgICAgICA8TWFya2VyQXJyb3cgaWQ9XCJtYXJrZXItYXJyb3dcIiBmaWxsPVwiIzMzM1wiIHJlZlg9ezJ9IHNpemU9ezZ9IC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtzdmdIZWlnaHR9IGZpbGw9XCIjMjIyXCIgcng9ezE0fSByeT17MTR9IC8+XG4gICAgICAgIHt3aWR0aCA+IDggJiZcbiAgICAgICAgICBzZXJpZXMubWFwKChsaW5lRGF0YSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXZlbiA9IGkgJSAyID09PSAwO1xuICAgICAgICAgICAgbGV0IG1hcmtlclN0YXJ0ID0gZXZlbiA/ICd1cmwoI21hcmtlci1jcm9zcyknIDogJ3VybCgjbWFya2VyLXgpJztcbiAgICAgICAgICAgIGlmIChpID09PSAxKSBtYXJrZXJTdGFydCA9ICd1cmwoI21hcmtlci1saW5lKSc7XG4gICAgICAgICAgICBjb25zdCBtYXJrZXJFbmQgPSBldmVuID8gJ3VybCgjbWFya2VyLWFycm93KScgOiAndXJsKCNtYXJrZXItYXJyb3ctb2RkKSc7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8R3JvdXAga2V5PXtgbGluZXMtJHtpfWB9IHRvcD17aSAqIGxpbmVIZWlnaHR9IGxlZnQ9ezEzfT5cbiAgICAgICAgICAgICAgICB7c2hvd1BvaW50cyAmJlxuICAgICAgICAgICAgICAgICAgbGluZURhdGEubWFwKChkLCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2kgKyBqfVxuICAgICAgICAgICAgICAgICAgICAgIHI9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgY3g9e3hTY2FsZShnZXRYKGQpKX1cbiAgICAgICAgICAgICAgICAgICAgICBjeT17eVNjYWxlKGdldFkoZCkpfVxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8TGluZVBhdGg8RGF0ZVZhbHVlPlxuICAgICAgICAgICAgICAgICAgY3VydmU9e2FsbEN1cnZlc1tjdXJ2ZVR5cGVdfVxuICAgICAgICAgICAgICAgICAgZGF0YT17bGluZURhdGF9XG4gICAgICAgICAgICAgICAgICB4PXtkID0+IHhTY2FsZShnZXRYKGQpKX1cbiAgICAgICAgICAgICAgICAgIHk9e2QgPT4geVNjYWxlKGdldFkoZCkpfVxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiIzMzM1wiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17ZXZlbiA/IDIgOiAxfVxuICAgICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eT17ZXZlbiA/IDAuNiA6IDF9XG4gICAgICAgICAgICAgICAgICBzaGFwZVJlbmRlcmluZz1cImdlb21ldHJpY1ByZWNpc2lvblwiXG4gICAgICAgICAgICAgICAgICBtYXJrZXJNaWQ9XCJ1cmwoI21hcmtlci1jaXJjbGUpXCJcbiAgICAgICAgICAgICAgICAgIG1hcmtlclN0YXJ0PXttYXJrZXJTdGFydH1cbiAgICAgICAgICAgICAgICAgIG1hcmtlckVuZD17bWFya2VyRW5kfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JvdXA+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgPC9zdmc+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC52aXN4LWN1cnZlcy1kZW1vIGxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbnRyeSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEV4YW1wbGUuZGlzcGxheU5hbWUgPSBcIkV4YW1wbGVcIjtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgRXhhbXBsZS5fX2RvY2dlbkluZm8gPSB7IFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJkaXNwbGF5TmFtZVwiOiBcIkV4YW1wbGVcIiwgXCJwcm9wc1wiOiB7IFwid2lkdGhcIjogeyBcImRlZmF1bHRWYWx1ZVwiOiBudWxsLCBcImRlc2NyaXB0aW9uXCI6IFwiXCIsIFwibmFtZVwiOiBcIndpZHRoXCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwibnVtYmVyXCIgfSB9LCBcImhlaWdodFwiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IG51bGwsIFwiZGVzY3JpcHRpb25cIjogXCJcIiwgXCJuYW1lXCI6IFwiaGVpZ2h0XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwibnVtYmVyXCIgfSB9LCBcInNob3dDb250cm9sc1wiOiB7IFwiZGVmYXVsdFZhbHVlXCI6IHsgdmFsdWU6IHRydWUgfSwgXCJkZXNjcmlwdGlvblwiOiBcIlwiLCBcIm5hbWVcIjogXCJzaG93Q29udHJvbHNcIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJ0eXBlXCI6IHsgXCJuYW1lXCI6IFwiYm9vbGVhbiB8IHVuZGVmaW5lZFwiIH0gfSB9IH07XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh0eXBlb2YgU1RPUllCT09LX1JFQUNUX0NMQVNTRVMgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgU1RPUllCT09LX1JFQUNUX0NMQVNTRVNbXCJzcmMvc2FuZGJveGVzL3Zpc3gtY3VydmUvRXhhbXBsZS50c3gjRXhhbXBsZVwiXSA9IHsgZG9jZ2VuSW5mbzogRXhhbXBsZS5fX2RvY2dlbkluZm8sIG5hbWU6IFwiRXhhbXBsZVwiLCBwYXRoOiBcInNyYy9zYW5kYm94ZXMvdmlzeC1jdXJ2ZS9FeGFtcGxlLnRzeCNFeGFtcGxlXCIgfTtcbn1cbmNhdGNoIChfX3JlYWN0X2RvY2dlbl90eXBlc2NyaXB0X2xvYWRlcl9lcnJvcikgeyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sandboxes/visx-curve/Example.tsx\n");

/***/ })

})
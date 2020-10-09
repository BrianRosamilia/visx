webpackHotUpdate_N_E("pages/gallery",{

/***/ "./src/components/Gallery/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Gallery/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gallery; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"../../node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"../../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tilt */ \"../../node_modules/react-tilt/dist/tilt.js\");\n/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tilt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"../../node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"../../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _AreaTile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AreaTile */ \"./src/components/Gallery/AreaTile.tsx\");\n/* harmony import */ var _AxisTile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AxisTile */ \"./src/components/Gallery/AxisTile.tsx\");\n/* harmony import */ var _BarGroupHorizontalTile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BarGroupHorizontalTile */ \"./src/components/Gallery/BarGroupHorizontalTile.tsx\");\n/* harmony import */ var _BarGroupTile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BarGroupTile */ \"./src/components/Gallery/BarGroupTile.tsx\");\n/* harmony import */ var _BarStackHorizontalTile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BarStackHorizontalTile */ \"./src/components/Gallery/BarStackHorizontalTile.tsx\");\n/* harmony import */ var _BarStackTile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BarStackTile */ \"./src/components/Gallery/BarStackTile.tsx\");\n/* harmony import */ var _BarsTile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BarsTile */ \"./src/components/Gallery/BarsTile.tsx\");\n/* harmony import */ var _BrushTile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BrushTile */ \"./src/components/Gallery/BrushTile.tsx\");\n/* harmony import */ var _ChordTile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ChordTile */ \"./src/components/Gallery/ChordTile.tsx\");\n/* harmony import */ var _CurvesTile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CurvesTile */ \"./src/components/Gallery/CurvesTile.tsx\");\n/* harmony import */ var _DendrogramsTile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DendrogramsTile */ \"./src/components/Gallery/DendrogramsTile.tsx\");\n/* harmony import */ var _DotsTile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./DotsTile */ \"./src/components/Gallery/DotsTile.tsx\");\n/* harmony import */ var _DragIITile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DragIITile */ \"./src/components/Gallery/DragIITile.tsx\");\n/* harmony import */ var _DragITile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./DragITile */ \"./src/components/Gallery/DragITile.tsx\");\n/* harmony import */ var _GeoCustomTile__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./GeoCustomTile */ \"./src/components/Gallery/GeoCustomTile.tsx\");\n/* harmony import */ var _GeoMercatorTile__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./GeoMercatorTile */ \"./src/components/Gallery/GeoMercatorTile.tsx\");\n/* harmony import */ var _GlyphsTile__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./GlyphsTile */ \"./src/components/Gallery/GlyphsTile.tsx\");\n/* harmony import */ var _GradientsTile__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./GradientsTile */ \"./src/components/Gallery/GradientsTile.tsx\");\n/* harmony import */ var _HeatmapsTile__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./HeatmapsTile */ \"./src/components/Gallery/HeatmapsTile.tsx\");\n/* harmony import */ var _LegendsTile__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./LegendsTile */ \"./src/components/Gallery/LegendsTile.tsx\");\n/* harmony import */ var _LineRadialTile__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./LineRadialTile */ \"./src/components/Gallery/LineRadialTile.tsx\");\n/* harmony import */ var _LinkTypesTile__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./LinkTypesTile */ \"./src/components/Gallery/LinkTypesTile.tsx\");\n/* harmony import */ var _NetworkTile__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./NetworkTile */ \"./src/components/Gallery/NetworkTile.tsx\");\n/* harmony import */ var _PackTile__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./PackTile */ \"./src/components/Gallery/PackTile.tsx\");\n/* harmony import */ var _PatternsTile__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./PatternsTile */ \"./src/components/Gallery/PatternsTile.tsx\");\n/* harmony import */ var _PiesTile__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./PiesTile */ \"./src/components/Gallery/PiesTile.tsx\");\n/* harmony import */ var _PolygonsTile__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./PolygonsTile */ \"./src/components/Gallery/PolygonsTile.tsx\");\n/* harmony import */ var _RadarTile__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./RadarTile */ \"./src/components/Gallery/RadarTile.tsx\");\n/* harmony import */ var _ResponsiveTile__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ResponsiveTile */ \"./src/components/Gallery/ResponsiveTile.tsx\");\n/* harmony import */ var _SplitLinePathTile__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./SplitLinePathTile */ \"./src/components/Gallery/SplitLinePathTile.tsx\");\n/* harmony import */ var _StackedAreasTile__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./StackedAreasTile */ \"./src/components/Gallery/StackedAreasTile.tsx\");\n/* harmony import */ var _StatsPlotTile__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./StatsPlotTile */ \"./src/components/Gallery/StatsPlotTile.tsx\");\n/* harmony import */ var _StreamGraphTile__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./StreamGraphTile */ \"./src/components/Gallery/StreamGraphTile.tsx\");\n/* harmony import */ var _TextTile__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./TextTile */ \"./src/components/Gallery/TextTile.tsx\");\n/* harmony import */ var _ThresholdTile__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ThresholdTile */ \"./src/components/Gallery/ThresholdTile.tsx\");\n/* harmony import */ var _TooltipTile__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./TooltipTile */ \"./src/components/Gallery/TooltipTile.tsx\");\n/* harmony import */ var _TreemapTile__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./TreemapTile */ \"./src/components/Gallery/TreemapTile.tsx\");\n/* harmony import */ var _TreesTile__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./TreesTile */ \"./src/components/Gallery/TreesTile.tsx\");\n/* harmony import */ var _VoronoiTile__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./VoronoiTile */ \"./src/components/Gallery/VoronoiTile.tsx\");\n/* harmony import */ var _ZoomITile__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ZoomITile */ \"./src/components/Gallery/ZoomITile.tsx\");\n/* harmony import */ var _sandboxes_exampleToVisxDependencyLookup__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../sandboxes/exampleToVisxDependencyLookup */ \"./src/sandboxes/exampleToVisxDependencyLookup.ts\");\nvar _jsxFileName = \"/Users/harry/dev/visx/packages/visx-demo/src/components/Gallery/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar tiltOptions = {\n  max: 8,\n  scale: 1\n};\nvar tiles = [_CurvesTile__WEBPACK_IMPORTED_MODULE_15__, _BarsTile__WEBPACK_IMPORTED_MODULE_12__, _DotsTile__WEBPACK_IMPORTED_MODULE_17__, _PatternsTile__WEBPACK_IMPORTED_MODULE_30__, _AreaTile__WEBPACK_IMPORTED_MODULE_6__, _StackedAreasTile__WEBPACK_IMPORTED_MODULE_36__, _AxisTile__WEBPACK_IMPORTED_MODULE_7__, _ChordTile__WEBPACK_IMPORTED_MODULE_14__, _PiesTile__WEBPACK_IMPORTED_MODULE_31__, _LegendsTile__WEBPACK_IMPORTED_MODULE_25__, _ThresholdTile__WEBPACK_IMPORTED_MODULE_40__, _TreemapTile__WEBPACK_IMPORTED_MODULE_42__, _BarGroupTile__WEBPACK_IMPORTED_MODULE_9__, _BarGroupHorizontalTile__WEBPACK_IMPORTED_MODULE_8__, _BarStackTile__WEBPACK_IMPORTED_MODULE_11__, _BarStackHorizontalTile__WEBPACK_IMPORTED_MODULE_10__, _BrushTile__WEBPACK_IMPORTED_MODULE_13__, _DendrogramsTile__WEBPACK_IMPORTED_MODULE_16__, _DragITile__WEBPACK_IMPORTED_MODULE_19__, _DragIITile__WEBPACK_IMPORTED_MODULE_18__, _GeoCustomTile__WEBPACK_IMPORTED_MODULE_20__, _GeoMercatorTile__WEBPACK_IMPORTED_MODULE_21__, _GlyphsTile__WEBPACK_IMPORTED_MODULE_22__, _GradientsTile__WEBPACK_IMPORTED_MODULE_23__, _HeatmapsTile__WEBPACK_IMPORTED_MODULE_24__, _LineRadialTile__WEBPACK_IMPORTED_MODULE_26__, _LinkTypesTile__WEBPACK_IMPORTED_MODULE_27__, _NetworkTile__WEBPACK_IMPORTED_MODULE_28__, _PackTile__WEBPACK_IMPORTED_MODULE_29__, _PolygonsTile__WEBPACK_IMPORTED_MODULE_32__, _RadarTile__WEBPACK_IMPORTED_MODULE_33__, _ResponsiveTile__WEBPACK_IMPORTED_MODULE_34__, _SplitLinePathTile__WEBPACK_IMPORTED_MODULE_35__, _StatsPlotTile__WEBPACK_IMPORTED_MODULE_37__, _StreamGraphTile__WEBPACK_IMPORTED_MODULE_38__, _TextTile__WEBPACK_IMPORTED_MODULE_39__, _TooltipTile__WEBPACK_IMPORTED_MODULE_41__, _TreesTile__WEBPACK_IMPORTED_MODULE_43__, _VoronoiTile__WEBPACK_IMPORTED_MODULE_44__, _ZoomITile__WEBPACK_IMPORTED_MODULE_45__];\nfunction Gallery() {\n  _s();\n\n  var _this = this;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  var routePackage = router.query.pkg;\n  var filteredTiles = routePackage ? tiles.filter(function (Tile) {\n    var _exampleToVisxDepende;\n\n    return (_exampleToVisxDepende = _sandboxes_exampleToVisxDependencyLookup__WEBPACK_IMPORTED_MODULE_46__[\"default\"][Tile.packageJson.name]) === null || _exampleToVisxDepende === void 0 ? void 0 : _exampleToVisxDepende.has(routePackage);\n  }) : tiles;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-247609575\" + \" \" + \"gallery\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"jsx-247609575\" + \" \" + \"filters\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    style: {\n      fontSize: 16,\n      fontWeight: 500\n    },\n    className: \"jsx-247609575\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 11\n    }\n  }, \"Filter\"), _sandboxes_exampleToVisxDependencyLookup__WEBPACK_IMPORTED_MODULE_46__[\"visxPackages\"].map(function (visxPackage) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      key: visxPackage,\n      href: {\n        pathname: '/gallery',\n        query: routePackage === visxPackage ? undefined : {\n          pkg: visxPackage\n        }\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      className: \"jsx-247609575\" + \" \" + (classnames__WEBPACK_IMPORTED_MODULE_2___default()('filter-button', {\n        emphasize: routePackage === visxPackage\n      }) || \"\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 15\n      }\n    }, \"\".concat(visxPackage)));\n  })), __jsx(\"div\", {\n    className: \"jsx-247609575\" + \" \" + \"grid\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  }, filteredTiles.map(function (Tile, i) {\n    return __jsx(react_tilt__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      key: \"tile-\".concat(i),\n      className: \"tilt\",\n      options: tiltOptions,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 13\n      }\n    }, __jsx(Tile[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 15\n      }\n    }));\n  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"247609575\",\n    __self: this\n  }, \".gallery.jsx-247609575{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.grid.jsx-247609575{width:100%;display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));overflow-x:hidden;padding-bottom:40px;}.filters.jsx-247609575{margin-right:24px;width:150px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}h6.jsx-247609575{margin:0 4px 0 0;}.filter-button.jsx-247609575{display:block;cursor:pointer;border:none;outline:none;background:transparent;padding:0;margin:4px 4px 12px 0;font-size:16px;line-height:1em;}.emphasize.jsx-247609575{font-weight:bold;}@media (min-width:800px){.emphasize.jsx-247609575::before{content:'';padding-left:4px;border-left:2px solid #fc2e1c;}}@media (max-width:800px){.gallery.jsx-247609575{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-width:90vw;max-width:90vw;margin:0;}.filters.jsx-247609575{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJyeS9kZXYvdmlzeC9wYWNrYWdlcy92aXN4LWRlbW8vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0lrQixBQUd3QixBQUlGLEFBT08sQUFLRCxBQUdILEFBV0csQUFJSixBQU9XLEFBTVQsV0ExQ0YsQUE4Qk0sR0FmSixHQUhqQixBQWNBLENBbkJjLE1BTitDLElBOEIzQixDQWZwQixDQVJFLFdBU0QsYUFDVSxJQWN2QixnQkFwQ21CLEFBK0NGLEdBeEJQLENBa0JPLEdBbkNDLEtBT3BCLENBV3dCLE1Ba0JMLE1BbkNHLFNBb0NULENBbEJJLFFBbUJmLEVBcENGLEtBa0JrQixPQXNCSCxTQXJCZixFQXNCMkIsQ0FoRDNCLGtHQWlERSIsImZpbGUiOiIvVXNlcnMvaGFycnkvZGV2L3Zpc3gvcGFja2FnZXMvdmlzeC1kZW1vL3NyYy9jb21wb25lbnRzL0dhbGxlcnkvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBUaWx0IGZyb20gJ3JlYWN0LXRpbHQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0ICogYXMgQXJlYVRpbGUgZnJvbSAnLi9BcmVhVGlsZSc7XG5pbXBvcnQgKiBhcyBBeGlzVGlsZSBmcm9tICcuL0F4aXNUaWxlJztcbmltcG9ydCAqIGFzIEJhckdyb3VwSG9yaXpvbnRhbFRpbGUgZnJvbSAnLi9CYXJHcm91cEhvcml6b250YWxUaWxlJztcbmltcG9ydCAqIGFzIEJhckdyb3VwVGlsZSBmcm9tICcuL0Jhckdyb3VwVGlsZSc7XG5pbXBvcnQgKiBhcyBCYXJTdGFja0hvcml6b250YWxUaWxlIGZyb20gJy4vQmFyU3RhY2tIb3Jpem9udGFsVGlsZSc7XG5pbXBvcnQgKiBhcyBCYXJTdGFja1RpbGUgZnJvbSAnLi9CYXJTdGFja1RpbGUnO1xuaW1wb3J0ICogYXMgQmFyc1RpbGUgZnJvbSAnLi9CYXJzVGlsZSc7XG5pbXBvcnQgKiBhcyBCcnVzaFRpbGUgZnJvbSAnLi9CcnVzaFRpbGUnO1xuaW1wb3J0ICogYXMgQ2hvcmRUaWxlIGZyb20gJy4vQ2hvcmRUaWxlJztcbmltcG9ydCAqIGFzIEN1cnZlc1RpbGUgZnJvbSAnLi9DdXJ2ZXNUaWxlJztcbmltcG9ydCAqIGFzIERlbmRyb2dyYW1zVGlsZSBmcm9tICcuL0RlbmRyb2dyYW1zVGlsZSc7XG5pbXBvcnQgKiBhcyBEb3RzVGlsZSBmcm9tICcuL0RvdHNUaWxlJztcbmltcG9ydCAqIGFzIERyYWdJSVRpbGUgZnJvbSAnLi9EcmFnSUlUaWxlJztcbmltcG9ydCAqIGFzIERyYWdJVGlsZSBmcm9tICcuL0RyYWdJVGlsZSc7XG5pbXBvcnQgKiBhcyBHZW9DdXN0b21UaWxlIGZyb20gJy4vR2VvQ3VzdG9tVGlsZSc7XG5pbXBvcnQgKiBhcyBHZW9NZXJjYXRvclRpbGUgZnJvbSAnLi9HZW9NZXJjYXRvclRpbGUnO1xuaW1wb3J0ICogYXMgR2x5cGhzVGlsZSBmcm9tICcuL0dseXBoc1RpbGUnO1xuaW1wb3J0ICogYXMgR3JhZGllbnRzVGlsZSBmcm9tICcuL0dyYWRpZW50c1RpbGUnO1xuaW1wb3J0ICogYXMgSGVhdG1hcHNUaWxlIGZyb20gJy4vSGVhdG1hcHNUaWxlJztcbmltcG9ydCAqIGFzIExlZ2VuZHNUaWxlIGZyb20gJy4vTGVnZW5kc1RpbGUnO1xuaW1wb3J0ICogYXMgTGluZVJhZGlhbFRpbGUgZnJvbSAnLi9MaW5lUmFkaWFsVGlsZSc7XG5pbXBvcnQgKiBhcyBMaW5rVHlwZXNUaWxlIGZyb20gJy4vTGlua1R5cGVzVGlsZSc7XG5pbXBvcnQgKiBhcyBOZXR3b3JrVGlsZSBmcm9tICcuL05ldHdvcmtUaWxlJztcbmltcG9ydCAqIGFzIFBhY2tUaWxlIGZyb20gJy4vUGFja1RpbGUnO1xuaW1wb3J0ICogYXMgUGF0dGVybnNUaWxlIGZyb20gJy4vUGF0dGVybnNUaWxlJztcbmltcG9ydCAqIGFzIFBpZXNUaWxlIGZyb20gJy4vUGllc1RpbGUnO1xuaW1wb3J0ICogYXMgUG9seWdvbnNUaWxlIGZyb20gJy4vUG9seWdvbnNUaWxlJztcbmltcG9ydCAqIGFzIFJhZGFyVGlsZSBmcm9tICcuL1JhZGFyVGlsZSc7XG5pbXBvcnQgKiBhcyBSZXNwb25zaXZlVGlsZSBmcm9tICcuL1Jlc3BvbnNpdmVUaWxlJztcbmltcG9ydCAqIGFzIFNwbGl0TGluZVBhdGhUaWxlIGZyb20gJy4vU3BsaXRMaW5lUGF0aFRpbGUnO1xuaW1wb3J0ICogYXMgU3RhY2tlZEFyZWFzVGlsZSBmcm9tICcuL1N0YWNrZWRBcmVhc1RpbGUnO1xuaW1wb3J0ICogYXMgU3RhdHNQbG90VGlsZSBmcm9tICcuL1N0YXRzUGxvdFRpbGUnO1xuaW1wb3J0ICogYXMgU3RyZWFtR3JhcGhUaWxlIGZyb20gJy4vU3RyZWFtR3JhcGhUaWxlJztcbmltcG9ydCAqIGFzIFRleHRUaWxlIGZyb20gJy4vVGV4dFRpbGUnO1xuaW1wb3J0ICogYXMgVGhyZXNob2xkVGlsZSBmcm9tICcuL1RocmVzaG9sZFRpbGUnO1xuaW1wb3J0ICogYXMgVG9vbHRpcFRpbGUgZnJvbSAnLi9Ub29sdGlwVGlsZSc7XG5pbXBvcnQgKiBhcyBUcmVlbWFwVGlsZSBmcm9tICcuL1RyZWVtYXBUaWxlJztcbmltcG9ydCAqIGFzIFRyZWVzVGlsZSBmcm9tICcuL1RyZWVzVGlsZSc7XG5pbXBvcnQgKiBhcyBWb3Jvbm9pVGlsZSBmcm9tICcuL1Zvcm9ub2lUaWxlJztcbmltcG9ydCAqIGFzIFpvb21JVGlsZSBmcm9tICcuL1pvb21JVGlsZSc7XG5pbXBvcnQgeyBWaXN4UGFja2FnZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCBleGFtcGxlVG9WaXN4RGVwZW5kZW5jeUxvb2t1cCwge1xuICB2aXN4UGFja2FnZXMsXG59IGZyb20gJy4uLy4uL3NhbmRib3hlcy9leGFtcGxlVG9WaXN4RGVwZW5kZW5jeUxvb2t1cCc7XG5cbmNvbnN0IHRpbHRPcHRpb25zID0geyBtYXg6IDgsIHNjYWxlOiAxIH07XG5cbmNvbnN0IHRpbGVzID0gW1xuICBDdXJ2ZXNUaWxlLFxuICBCYXJzVGlsZSxcbiAgRG90c1RpbGUsXG4gIFBhdHRlcm5zVGlsZSxcbiAgQXJlYVRpbGUsXG4gIFN0YWNrZWRBcmVhc1RpbGUsXG4gIEF4aXNUaWxlLFxuICBDaG9yZFRpbGUsXG4gIFBpZXNUaWxlLFxuICBMZWdlbmRzVGlsZSxcbiAgVGhyZXNob2xkVGlsZSxcbiAgVHJlZW1hcFRpbGUsXG4gIEJhckdyb3VwVGlsZSxcbiAgQmFyR3JvdXBIb3Jpem9udGFsVGlsZSxcbiAgQmFyU3RhY2tUaWxlLFxuICBCYXJTdGFja0hvcml6b250YWxUaWxlLFxuICBCcnVzaFRpbGUsXG4gIERlbmRyb2dyYW1zVGlsZSxcbiAgRHJhZ0lUaWxlLFxuICBEcmFnSUlUaWxlLFxuICBHZW9DdXN0b21UaWxlLFxuICBHZW9NZXJjYXRvclRpbGUsXG4gIEdseXBoc1RpbGUsXG4gIEdyYWRpZW50c1RpbGUsXG4gIEhlYXRtYXBzVGlsZSxcbiAgTGluZVJhZGlhbFRpbGUsXG4gIExpbmtUeXBlc1RpbGUsXG4gIE5ldHdvcmtUaWxlLFxuICBQYWNrVGlsZSxcbiAgUG9seWdvbnNUaWxlLFxuICBSYWRhclRpbGUsXG4gIFJlc3BvbnNpdmVUaWxlLFxuICBTcGxpdExpbmVQYXRoVGlsZSxcbiAgU3RhdHNQbG90VGlsZSxcbiAgU3RyZWFtR3JhcGhUaWxlLFxuICBUZXh0VGlsZSxcbiAgVG9vbHRpcFRpbGUsXG4gIFRyZWVzVGlsZSxcbiAgVm9yb25vaVRpbGUsXG4gIFpvb21JVGlsZSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnkoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHBrZzogcm91dGVQYWNrYWdlIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgZmlsdGVyZWRUaWxlcyA9IHJvdXRlUGFja2FnZVxuICAgID8gdGlsZXMuZmlsdGVyKFRpbGUgPT5cbiAgICAgICAgZXhhbXBsZVRvVmlzeERlcGVuZGVuY3lMb29rdXBbVGlsZS5wYWNrYWdlSnNvbi5uYW1lXT8uaGFzKHJvdXRlUGFja2FnZSBhcyBWaXN4UGFja2FnZSksXG4gICAgICApXG4gICAgOiB0aWxlcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXJzXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDUwMCB9fT5GaWx0ZXI8L2Rpdj5cbiAgICAgICAgICB7dmlzeFBhY2thZ2VzLm1hcCh2aXN4UGFja2FnZSA9PiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBrZXk9e3Zpc3hQYWNrYWdlfVxuICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvZ2FsbGVyeScsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHJvdXRlUGFja2FnZSA9PT0gdmlzeFBhY2thZ2UgPyB1bmRlZmluZWQgOiB7IHBrZzogdmlzeFBhY2thZ2UgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdmaWx0ZXItYnV0dG9uJywge1xuICAgICAgICAgICAgICAgICAgZW1waGFzaXplOiByb3V0ZVBhY2thZ2UgPT09IHZpc3hQYWNrYWdlLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+e2Ake3Zpc3hQYWNrYWdlfWB9PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgICAge2ZpbHRlcmVkVGlsZXMubWFwKChUaWxlLCBpKSA9PiAoXG4gICAgICAgICAgICA8VGlsdCBrZXk9e2B0aWxlLSR7aX1gfSBjbGFzc05hbWU9XCJ0aWx0XCIgb3B0aW9ucz17dGlsdE9wdGlvbnN9PlxuICAgICAgICAgICAgICB7LyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXBhc2NhbC1jYXNlICovfVxuICAgICAgICAgICAgICA8VGlsZS5kZWZhdWx0IC8+XG4gICAgICAgICAgICA8L1RpbHQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5nYWxsZXJ5IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIH1cbiAgICAgICAgLmdyaWQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5maWx0ZXJzIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB9XG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW46IDAgNHB4IDAgMDtcbiAgICAgICAgfVxuICAgICAgICAuZmlsdGVyLWJ1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiA0cHggNHB4IDEycHggMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICAuZW1waGFzaXplIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAuZW1waGFzaXplOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZjMmUxYztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgLmdhbGxlcnkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIG1pbi13aWR0aDogOTB2dztcbiAgICAgICAgICAgIG1heC13aWR0aDogOTB2dztcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpbHRlcnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/harry/dev/visx/packages/visx-demo/src/components/Gallery/index.tsx */\"));\n}\n\n_s(Gallery, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Gallery;\n\nvar _c;\n\n$RefreshReg$(_c, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FsbGVyeS9pbmRleC50c3g/ZDUzOCJdLCJuYW1lcyI6WyJ0aWx0T3B0aW9ucyIsIm1heCIsInNjYWxlIiwidGlsZXMiLCJDdXJ2ZXNUaWxlIiwiQmFyc1RpbGUiLCJEb3RzVGlsZSIsIlBhdHRlcm5zVGlsZSIsIkFyZWFUaWxlIiwiU3RhY2tlZEFyZWFzVGlsZSIsIkF4aXNUaWxlIiwiQ2hvcmRUaWxlIiwiUGllc1RpbGUiLCJMZWdlbmRzVGlsZSIsIlRocmVzaG9sZFRpbGUiLCJUcmVlbWFwVGlsZSIsIkJhckdyb3VwVGlsZSIsIkJhckdyb3VwSG9yaXpvbnRhbFRpbGUiLCJCYXJTdGFja1RpbGUiLCJCYXJTdGFja0hvcml6b250YWxUaWxlIiwiQnJ1c2hUaWxlIiwiRGVuZHJvZ3JhbXNUaWxlIiwiRHJhZ0lUaWxlIiwiRHJhZ0lJVGlsZSIsIkdlb0N1c3RvbVRpbGUiLCJHZW9NZXJjYXRvclRpbGUiLCJHbHlwaHNUaWxlIiwiR3JhZGllbnRzVGlsZSIsIkhlYXRtYXBzVGlsZSIsIkxpbmVSYWRpYWxUaWxlIiwiTGlua1R5cGVzVGlsZSIsIk5ldHdvcmtUaWxlIiwiUGFja1RpbGUiLCJQb2x5Z29uc1RpbGUiLCJSYWRhclRpbGUiLCJSZXNwb25zaXZlVGlsZSIsIlNwbGl0TGluZVBhdGhUaWxlIiwiU3RhdHNQbG90VGlsZSIsIlN0cmVhbUdyYXBoVGlsZSIsIlRleHRUaWxlIiwiVG9vbHRpcFRpbGUiLCJUcmVlc1RpbGUiLCJWb3Jvbm9pVGlsZSIsIlpvb21JVGlsZSIsIkdhbGxlcnkiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyb3V0ZVBhY2thZ2UiLCJxdWVyeSIsInBrZyIsImZpbHRlcmVkVGlsZXMiLCJmaWx0ZXIiLCJUaWxlIiwiZXhhbXBsZVRvVmlzeERlcGVuZGVuY3lMb29rdXAiLCJwYWNrYWdlSnNvbiIsIm5hbWUiLCJoYXMiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ2aXN4UGFja2FnZXMiLCJtYXAiLCJ2aXN4UGFja2FnZSIsInBhdGhuYW1lIiwidW5kZWZpbmVkIiwiY3giLCJlbXBoYXNpemUiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBLElBQU1BLFdBQVcsR0FBRztBQUFFQyxLQUFHLEVBQUUsQ0FBUDtBQUFVQyxPQUFLLEVBQUU7QUFBakIsQ0FBcEI7QUFFQSxJQUFNQyxLQUFLLEdBQUcsQ0FDWkMseUNBRFksRUFFWkMsdUNBRlksRUFHWkMsdUNBSFksRUFJWkMsMkNBSlksRUFLWkMsc0NBTFksRUFNWkMsK0NBTlksRUFPWkMsc0NBUFksRUFRWkMsd0NBUlksRUFTWkMsdUNBVFksRUFVWkMsMENBVlksRUFXWkMsNENBWFksRUFZWkMsMENBWlksRUFhWkMsMENBYlksRUFjWkMsb0RBZFksRUFlWkMsMkNBZlksRUFnQlpDLHFEQWhCWSxFQWlCWkMsd0NBakJZLEVBa0JaQyw4Q0FsQlksRUFtQlpDLHdDQW5CWSxFQW9CWkMseUNBcEJZLEVBcUJaQyw0Q0FyQlksRUFzQlpDLDhDQXRCWSxFQXVCWkMseUNBdkJZLEVBd0JaQyw0Q0F4QlksRUF5QlpDLDJDQXpCWSxFQTBCWkMsNkNBMUJZLEVBMkJaQyw0Q0EzQlksRUE0QlpDLDBDQTVCWSxFQTZCWkMsdUNBN0JZLEVBOEJaQywyQ0E5QlksRUErQlpDLHdDQS9CWSxFQWdDWkMsNkNBaENZLEVBaUNaQyxnREFqQ1ksRUFrQ1pDLDRDQWxDWSxFQW1DWkMsOENBbkNZLEVBb0NaQyx1Q0FwQ1ksRUFxQ1pDLDBDQXJDWSxFQXNDWkMsd0NBdENZLEVBdUNaQywwQ0F2Q1ksRUF3Q1pDLHdDQXhDWSxDQUFkO0FBMkNlLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFDaEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURnQyxNQUVuQkMsWUFGbUIsR0FFRkYsTUFBTSxDQUFDRyxLQUZMLENBRXhCQyxHQUZ3QjtBQUloQyxNQUFNQyxhQUFhLEdBQUdILFlBQVksR0FDOUI1QyxLQUFLLENBQUNnRCxNQUFOLENBQWEsVUFBQUMsSUFBSTtBQUFBOztBQUFBLG9DQUNmQyxpRkFBNkIsQ0FBQ0QsSUFBSSxDQUFDRSxXQUFMLENBQWlCQyxJQUFsQixDQURkLDBEQUNmLHNCQUFzREMsR0FBdEQsQ0FBMERULFlBQTFELENBRGU7QUFBQSxHQUFqQixDQUQ4QixHQUk5QjVDLEtBSko7QUFNQSxTQUNFLG1FQUNFO0FBQUEsdUNBQWUsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx1Q0FBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFc0QsY0FBUSxFQUFFLEVBQVo7QUFBZ0JDLGdCQUFVLEVBQUU7QUFBNUIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHQyxzRkFBWSxDQUFDQyxHQUFiLENBQWlCLFVBQUFDLFdBQVc7QUFBQSxXQUMzQixNQUFDLGdEQUFEO0FBQ0UsU0FBRyxFQUFFQSxXQURQO0FBRUUsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUUsVUFETjtBQUVKZCxhQUFLLEVBQUVELFlBQVksS0FBS2MsV0FBakIsR0FBK0JFLFNBQS9CLEdBQTJDO0FBQUVkLGFBQUcsRUFBRVk7QUFBUDtBQUY5QyxPQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPRTtBQUFBLDBDQUNhRyxpREFBRSxDQUFDLGVBQUQsRUFBa0I7QUFDN0JDLGlCQUFTLEVBQUVsQixZQUFZLEtBQUtjO0FBREMsT0FBbEIsQ0FEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUlLQSxXQUpMLEVBUEYsQ0FEMkI7QUFBQSxHQUE1QixDQUZILENBREYsRUFtQkU7QUFBQSx1Q0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1gsYUFBYSxDQUFDVSxHQUFkLENBQWtCLFVBQUNSLElBQUQsRUFBT2MsQ0FBUDtBQUFBLFdBQ2pCLE1BQUMsaURBQUQ7QUFBTSxTQUFHLGlCQUFVQSxDQUFWLENBQVQ7QUFBd0IsZUFBUyxFQUFDLE1BQWxDO0FBQXlDLGFBQU8sRUFBRWxFLFdBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBRGlCO0FBQUEsR0FBbEIsQ0FESCxDQW5CRixDQURGO0FBQUE7QUFBQTtBQUFBLDY5U0FERjtBQXdGRDs7R0FsR3VCNEMsTztVQUNQRSxxRDs7O0tBRE9GLE8iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYWxsZXJ5L2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgVGlsdCBmcm9tICdyZWFjdC10aWx0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCAqIGFzIEFyZWFUaWxlIGZyb20gJy4vQXJlYVRpbGUnO1xuaW1wb3J0ICogYXMgQXhpc1RpbGUgZnJvbSAnLi9BeGlzVGlsZSc7XG5pbXBvcnQgKiBhcyBCYXJHcm91cEhvcml6b250YWxUaWxlIGZyb20gJy4vQmFyR3JvdXBIb3Jpem9udGFsVGlsZSc7XG5pbXBvcnQgKiBhcyBCYXJHcm91cFRpbGUgZnJvbSAnLi9CYXJHcm91cFRpbGUnO1xuaW1wb3J0ICogYXMgQmFyU3RhY2tIb3Jpem9udGFsVGlsZSBmcm9tICcuL0JhclN0YWNrSG9yaXpvbnRhbFRpbGUnO1xuaW1wb3J0ICogYXMgQmFyU3RhY2tUaWxlIGZyb20gJy4vQmFyU3RhY2tUaWxlJztcbmltcG9ydCAqIGFzIEJhcnNUaWxlIGZyb20gJy4vQmFyc1RpbGUnO1xuaW1wb3J0ICogYXMgQnJ1c2hUaWxlIGZyb20gJy4vQnJ1c2hUaWxlJztcbmltcG9ydCAqIGFzIENob3JkVGlsZSBmcm9tICcuL0Nob3JkVGlsZSc7XG5pbXBvcnQgKiBhcyBDdXJ2ZXNUaWxlIGZyb20gJy4vQ3VydmVzVGlsZSc7XG5pbXBvcnQgKiBhcyBEZW5kcm9ncmFtc1RpbGUgZnJvbSAnLi9EZW5kcm9ncmFtc1RpbGUnO1xuaW1wb3J0ICogYXMgRG90c1RpbGUgZnJvbSAnLi9Eb3RzVGlsZSc7XG5pbXBvcnQgKiBhcyBEcmFnSUlUaWxlIGZyb20gJy4vRHJhZ0lJVGlsZSc7XG5pbXBvcnQgKiBhcyBEcmFnSVRpbGUgZnJvbSAnLi9EcmFnSVRpbGUnO1xuaW1wb3J0ICogYXMgR2VvQ3VzdG9tVGlsZSBmcm9tICcuL0dlb0N1c3RvbVRpbGUnO1xuaW1wb3J0ICogYXMgR2VvTWVyY2F0b3JUaWxlIGZyb20gJy4vR2VvTWVyY2F0b3JUaWxlJztcbmltcG9ydCAqIGFzIEdseXBoc1RpbGUgZnJvbSAnLi9HbHlwaHNUaWxlJztcbmltcG9ydCAqIGFzIEdyYWRpZW50c1RpbGUgZnJvbSAnLi9HcmFkaWVudHNUaWxlJztcbmltcG9ydCAqIGFzIEhlYXRtYXBzVGlsZSBmcm9tICcuL0hlYXRtYXBzVGlsZSc7XG5pbXBvcnQgKiBhcyBMZWdlbmRzVGlsZSBmcm9tICcuL0xlZ2VuZHNUaWxlJztcbmltcG9ydCAqIGFzIExpbmVSYWRpYWxUaWxlIGZyb20gJy4vTGluZVJhZGlhbFRpbGUnO1xuaW1wb3J0ICogYXMgTGlua1R5cGVzVGlsZSBmcm9tICcuL0xpbmtUeXBlc1RpbGUnO1xuaW1wb3J0ICogYXMgTmV0d29ya1RpbGUgZnJvbSAnLi9OZXR3b3JrVGlsZSc7XG5pbXBvcnQgKiBhcyBQYWNrVGlsZSBmcm9tICcuL1BhY2tUaWxlJztcbmltcG9ydCAqIGFzIFBhdHRlcm5zVGlsZSBmcm9tICcuL1BhdHRlcm5zVGlsZSc7XG5pbXBvcnQgKiBhcyBQaWVzVGlsZSBmcm9tICcuL1BpZXNUaWxlJztcbmltcG9ydCAqIGFzIFBvbHlnb25zVGlsZSBmcm9tICcuL1BvbHlnb25zVGlsZSc7XG5pbXBvcnQgKiBhcyBSYWRhclRpbGUgZnJvbSAnLi9SYWRhclRpbGUnO1xuaW1wb3J0ICogYXMgUmVzcG9uc2l2ZVRpbGUgZnJvbSAnLi9SZXNwb25zaXZlVGlsZSc7XG5pbXBvcnQgKiBhcyBTcGxpdExpbmVQYXRoVGlsZSBmcm9tICcuL1NwbGl0TGluZVBhdGhUaWxlJztcbmltcG9ydCAqIGFzIFN0YWNrZWRBcmVhc1RpbGUgZnJvbSAnLi9TdGFja2VkQXJlYXNUaWxlJztcbmltcG9ydCAqIGFzIFN0YXRzUGxvdFRpbGUgZnJvbSAnLi9TdGF0c1Bsb3RUaWxlJztcbmltcG9ydCAqIGFzIFN0cmVhbUdyYXBoVGlsZSBmcm9tICcuL1N0cmVhbUdyYXBoVGlsZSc7XG5pbXBvcnQgKiBhcyBUZXh0VGlsZSBmcm9tICcuL1RleHRUaWxlJztcbmltcG9ydCAqIGFzIFRocmVzaG9sZFRpbGUgZnJvbSAnLi9UaHJlc2hvbGRUaWxlJztcbmltcG9ydCAqIGFzIFRvb2x0aXBUaWxlIGZyb20gJy4vVG9vbHRpcFRpbGUnO1xuaW1wb3J0ICogYXMgVHJlZW1hcFRpbGUgZnJvbSAnLi9UcmVlbWFwVGlsZSc7XG5pbXBvcnQgKiBhcyBUcmVlc1RpbGUgZnJvbSAnLi9UcmVlc1RpbGUnO1xuaW1wb3J0ICogYXMgVm9yb25vaVRpbGUgZnJvbSAnLi9Wb3Jvbm9pVGlsZSc7XG5pbXBvcnQgKiBhcyBab29tSVRpbGUgZnJvbSAnLi9ab29tSVRpbGUnO1xuaW1wb3J0IHsgVmlzeFBhY2thZ2UgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgZXhhbXBsZVRvVmlzeERlcGVuZGVuY3lMb29rdXAsIHtcbiAgdmlzeFBhY2thZ2VzLFxufSBmcm9tICcuLi8uLi9zYW5kYm94ZXMvZXhhbXBsZVRvVmlzeERlcGVuZGVuY3lMb29rdXAnO1xuXG5jb25zdCB0aWx0T3B0aW9ucyA9IHsgbWF4OiA4LCBzY2FsZTogMSB9O1xuXG5jb25zdCB0aWxlcyA9IFtcbiAgQ3VydmVzVGlsZSxcbiAgQmFyc1RpbGUsXG4gIERvdHNUaWxlLFxuICBQYXR0ZXJuc1RpbGUsXG4gIEFyZWFUaWxlLFxuICBTdGFja2VkQXJlYXNUaWxlLFxuICBBeGlzVGlsZSxcbiAgQ2hvcmRUaWxlLFxuICBQaWVzVGlsZSxcbiAgTGVnZW5kc1RpbGUsXG4gIFRocmVzaG9sZFRpbGUsXG4gIFRyZWVtYXBUaWxlLFxuICBCYXJHcm91cFRpbGUsXG4gIEJhckdyb3VwSG9yaXpvbnRhbFRpbGUsXG4gIEJhclN0YWNrVGlsZSxcbiAgQmFyU3RhY2tIb3Jpem9udGFsVGlsZSxcbiAgQnJ1c2hUaWxlLFxuICBEZW5kcm9ncmFtc1RpbGUsXG4gIERyYWdJVGlsZSxcbiAgRHJhZ0lJVGlsZSxcbiAgR2VvQ3VzdG9tVGlsZSxcbiAgR2VvTWVyY2F0b3JUaWxlLFxuICBHbHlwaHNUaWxlLFxuICBHcmFkaWVudHNUaWxlLFxuICBIZWF0bWFwc1RpbGUsXG4gIExpbmVSYWRpYWxUaWxlLFxuICBMaW5rVHlwZXNUaWxlLFxuICBOZXR3b3JrVGlsZSxcbiAgUGFja1RpbGUsXG4gIFBvbHlnb25zVGlsZSxcbiAgUmFkYXJUaWxlLFxuICBSZXNwb25zaXZlVGlsZSxcbiAgU3BsaXRMaW5lUGF0aFRpbGUsXG4gIFN0YXRzUGxvdFRpbGUsXG4gIFN0cmVhbUdyYXBoVGlsZSxcbiAgVGV4dFRpbGUsXG4gIFRvb2x0aXBUaWxlLFxuICBUcmVlc1RpbGUsXG4gIFZvcm9ub2lUaWxlLFxuICBab29tSVRpbGUsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBwa2c6IHJvdXRlUGFja2FnZSB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IGZpbHRlcmVkVGlsZXMgPSByb3V0ZVBhY2thZ2VcbiAgICA/IHRpbGVzLmZpbHRlcihUaWxlID0+XG4gICAgICAgIGV4YW1wbGVUb1Zpc3hEZXBlbmRlbmN5TG9va3VwW1RpbGUucGFja2FnZUpzb24ubmFtZV0/Lmhhcyhyb3V0ZVBhY2thZ2UgYXMgVmlzeFBhY2thZ2UpLFxuICAgICAgKVxuICAgIDogdGlsZXM7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyc1wiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE2LCBmb250V2VpZ2h0OiA1MDAgfX0+RmlsdGVyPC9kaXY+XG4gICAgICAgICAge3Zpc3hQYWNrYWdlcy5tYXAodmlzeFBhY2thZ2UgPT4gKFxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAga2V5PXt2aXN4UGFja2FnZX1cbiAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2dhbGxlcnknLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiByb3V0ZVBhY2thZ2UgPT09IHZpc3hQYWNrYWdlID8gdW5kZWZpbmVkIDogeyBwa2c6IHZpc3hQYWNrYWdlIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeCgnZmlsdGVyLWJ1dHRvbicsIHtcbiAgICAgICAgICAgICAgICAgIGVtcGhhc2l6ZTogcm91dGVQYWNrYWdlID09PSB2aXN4UGFja2FnZSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPntgJHt2aXN4UGFja2FnZX1gfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICAgIHtmaWx0ZXJlZFRpbGVzLm1hcCgoVGlsZSwgaSkgPT4gKFxuICAgICAgICAgICAgPFRpbHQga2V5PXtgdGlsZS0ke2l9YH0gY2xhc3NOYW1lPVwidGlsdFwiIG9wdGlvbnM9e3RpbHRPcHRpb25zfT5cbiAgICAgICAgICAgICAgey8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wYXNjYWwtY2FzZSAqL31cbiAgICAgICAgICAgICAgPFRpbGUuZGVmYXVsdCAvPlxuICAgICAgICAgICAgPC9UaWx0PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZ2FsbGVyeSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDAwcHgsIDFmcikpO1xuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgfVxuICAgICAgICAuZmlsdGVycyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgfVxuICAgICAgICBoNiB7XG4gICAgICAgICAgbWFyZ2luOiAwIDRweCAwIDA7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbHRlci1idXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogNHB4IDRweCAxMnB4IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgLmVtcGhhc2l6ZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgLmVtcGhhc2l6ZTo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmYzJlMWM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgIC5nYWxsZXJ5IHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtaW4td2lkdGg6IDkwdnc7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWx0ZXJzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Gallery/index.tsx\n");

/***/ })

})
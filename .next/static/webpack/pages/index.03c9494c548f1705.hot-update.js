"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.jsx\");\n/* harmony import */ var _components_HeroBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HeroBanner */ \"./components/HeroBanner.jsx\");\n/* harmony import */ var _components_ContentNormal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ContentNormal */ \"./components/ContentNormal.jsx\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isDapp = ref[0], setIsDapp = ref[1];\n    var changeContent = function() {\n        if (isDapp === false) {\n            setIsDapp(true);\n        } else {\n            setIsDapp(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeroBanner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, this),\n            !isDapp ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentNormal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 17\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF1QztBQUVFO0FBQ0E7QUFDUTtBQUNNOztBQUd4QyxTQUFTTSxJQUFJLEdBQUc7O0lBRTdCLElBQTRCTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBVjdDLE1BVWUsR0FBZUEsR0FBZSxHQUE5QixFQVZmLFNBVTBCLEdBQUlBLEdBQWUsR0FBbkI7SUFFeEIsSUFBTVEsYUFBYSxHQUFHLFdBQU07UUFDMUIsSUFBR0YsTUFBTSxLQUFLLEtBQUssRUFBRTtZQUNuQkMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pCLE1BQU07WUFDTEEsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xCO0tBQ0Y7SUFFRCxxQkFDQzs7MEJBQ0MsOERBQUNOLDBEQUFNOzs7O29CQUFHOzBCQUNWLDhEQUFDRSw4REFBVTs7OztvQkFBRztZQUNiLENBQUNHLE1BQU0saUJBQUksOERBQUNGLGlFQUFhOzs7O29CQUFHLEdBQUcsSUFBSTswQkFDcEMsOERBQUNGLDBEQUFNOzs7O29CQUFHOztvQkFDUixDQUNIO0NBQ0Y7R0FwQnVCRyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcbmltcG9ydCBIZXJvQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVyb0Jhbm5lcidcbmltcG9ydCBDb250ZW50Tm9ybWFsIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGVudE5vcm1hbCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtpc0RhcHAsIHNldElzRGFwcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY2hhbmdlQ29udGVudCA9ICgpID0+IHtcbiAgICBpZihpc0RhcHAgPT09IGZhbHNlKSB7XG4gICAgICBzZXRJc0RhcHAodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzRGFwcChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgIDw+XG4gICAgPE5hdmJhciAvPlxuICAgIDxIZXJvQmFubmVyIC8+XG4gICAgeyFpc0RhcHAgPyAoPENvbnRlbnROb3JtYWwgLz4pOiBudWxsfVxuICAgIDxGb290ZXIgLz5cbiAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5hdmJhciIsIkZvb3RlciIsIkhlcm9CYW5uZXIiLCJDb250ZW50Tm9ybWFsIiwiSG9tZSIsImlzRGFwcCIsInNldElzRGFwcCIsImNoYW5nZUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});
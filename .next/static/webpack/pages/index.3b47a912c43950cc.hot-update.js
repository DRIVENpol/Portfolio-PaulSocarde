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

/***/ "./components/dapps/ConnectSection.jsx":
/*!*********************************************!*\
  !*** ./components/dapps/ConnectSection.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar ConnectSection = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"about\",\n            className: \"text-center bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-white px-5 py-20\",\n            children: props.acc ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl font-poppins mt-5 font-semibold\",\n                        children: \"Step 1: Connect your wallet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/ConnectSection.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: props.cw,\n                        type: \"button\",\n                        className: \"relative inline-flex items-center px-8 py-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 ml-3 my-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Connect your wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/ConnectSection.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/ConnectSection.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true)\n        }, void 0, false, {\n            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/ConnectSection.jsx\",\n            lineNumber: 6,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_c = ConnectSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConnectSection);\nvar _c;\n$RefreshReg$(_c, \"ConnectSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2RhcHBzL0Nvbm5lY3RTZWN0aW9uLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUF5QjtBQUV6QixJQUFNQyxjQUFjLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO0lBQ2hDLHFCQUNFO2tCQUNJLDRFQUFDQyxLQUFHO1lBQUNDLEVBQUUsRUFBQyxPQUFPO1lBQUNDLFNBQVMsRUFBQyxzRkFFWTtzQkFDekNILEtBQUssQ0FBQ0ksR0FBRyxpQkFDTiw2SUFFRyxpQkFDSjs7a0NBQ0MsOERBQUNDLEdBQUM7d0JBQUNGLFNBQVMsRUFBQywwQ0FBMEM7a0NBQUMsNkJBQTJCOzs7Ozs2QkFBSTtrQ0FDM0YsOERBQUNHLFFBQU07d0JBQVNDLE9BQU8sRUFBRVAsS0FBSyxDQUFDUSxFQUFFO3dCQUNqQkMsSUFBSSxFQUFDLFFBQVE7d0JBQ2JOLFNBQVMsRUFBQyxpVEFHQztrQ0FFWCw0RUFBQ08sTUFBSTtzQ0FBQyxxQkFBbUI7Ozs7O2lDQUFPOzs7Ozs2QkFDekI7OzRCQUNwQjs7Ozs7aUJBRUc7cUJBQ0gsQ0FDSjtDQUNGO0FBMUJLWCxLQUFBQSxjQUFjO0FBNEJwQiwrREFBZUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RhcHBzL0Nvbm5lY3RTZWN0aW9uLmpzeD9lNTMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgQ29ubmVjdFNlY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8ZGl2IGlkPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclxuICAgIGJnLXNsYXRlLTMwMCBkYXJrOmJnLXNsYXRlLTYwMFxuICAgIHRleHQtc2xhdGUtNjAwIGRhcms6dGV4dC13aGl0ZSBweC01IHB5LTIwXCI+XG4gICAge3Byb3BzLmFjYyA/IChcbiAgICAgICAgPD5cblxuICAgICAgICA8Lz5cbiAgICApOig8PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXBvcHBpbnMgbXQtNSBmb250LXNlbWlib2xkXCI+U3RlcCAxOiBDb25uZWN0IHlvdXIgd2FsbGV0PC9wPlxuICAgIDxidXR0b24gICAgICAgICBvbkNsaWNrPXtwcm9wcy5jd31cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC04IHB5LTQgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBzaGFkb3ctc20gdGV4dC1zbSBmb250LW1lZGl1bSBcbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZC1tZCB0ZXh0LXdoaXRlICBiZy1ncmFkaWVudC10by1iciBmcm9tLXB1cnBsZS02MDAgdG8tYmx1ZS01MDAgaG92ZXI6YmctZ3JhZGllbnQtdG8tYmxcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMFxuICAgICAgICAgICAgICAgICAgICBtbC0zIG15LTEwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q29ubmVjdCB5b3VyIHdhbGxldDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgIDwvPil9XG4gICBcbiAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0U2VjdGlvbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbm5lY3RTZWN0aW9uIiwicHJvcHMiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImFjYyIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiY3ciLCJ0eXBlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/dapps/ConnectSection.jsx\n");

/***/ })

});
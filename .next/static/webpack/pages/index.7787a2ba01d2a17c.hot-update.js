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

/***/ "./components/dapps/CreateERC20.jsx":
/*!******************************************!*\
  !*** ./components/dapps/CreateERC20.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar CreateERC20 = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), tokenName = ref[0], setTokenName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), tokenSymbol = ref1[0], setTokenSymbol = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), tokenSupply = ref2[0], setTokenSupply = ref2[1];\n    var nameChangeHandler = function(event) {\n        setTokenName(event.target.value);\n    };\n    var symbolChangeHandler = function(event) {\n        setTokenSymbol(event.target.value);\n    };\n    var supplyChangeHandler = function(event) {\n        setTokenSupply(event.target.value);\n    };\n    props.pd(tokenName, tokenSymbol, tokenSupply);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-slate-400 dark:bg-slate-700 px-20 py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid gap-6 lg:grid-cols-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-3xl text-white font-poppins pt-5 font-semibold\",\n                                children: \"Create a simple ERC20 Token\"\n                            }, void 0, false, {\n                                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"first_name\",\n                                    className: \"block mb-2 text-sm font-medium text-white\",\n                                    children: \"Token Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"first_name\",\n                                    className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                    placeholder: \"Shiba Inu\",\n                                    required: true,\n                                    onChange: nameChangeHandler\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"last_name\",\n                                    className: \"block mb-2 text-sm font-medium text-white\",\n                                    children: \"Token Symbol\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"last_name\",\n                                    className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                    placeholder: \"$SINU\",\n                                    required: true,\n                                    onChange: symbolChangeHandler\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"first_name\",\n                                    className: \"block mb-2 text-sm font-medium text-white\",\n                                    children: \"Initial Supply\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"first_name\",\n                                    className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                    placeholder: \"1000\",\n                                    required: true,\n                                    onChange: supplyChangeHandler\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 1\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: props.ac ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"relative inline-flex items-center px-8 py-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 \",\n                                onClick: props.c,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Deploy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 22\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                disabled: true,\n                                type: \"button\",\n                                className: \"relative inline-flex items-center px-8 py-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        role: \"status\",\n                                        className: \"inline w-4 h-4 mr-3 text-white animate-spin\",\n                                        viewBox: \"0 0 100 101\",\n                                        fill: \"none\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\",\n                                                fill: \"#E5E7EB\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 5\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\",\n                                                fill: \"currentColor\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 5\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 5\n                                    }, _this),\n                                    \"Please connect your wallet...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 19\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 5\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n            lineNumber: 24,\n            columnNumber: 6\n        }, _this)\n    }, void 0, false);\n};\n_s(CreateERC20, \"NuCEwhTNaXoxiPZsp8OE2o91vug=\");\n_c = CreateERC20;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateERC20);\nvar _c;\n$RefreshReg$(_c, \"CreateERC20\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVE7b0NBQzVGQyxRQUFRLEVBQUViLG1CQUFtQjs7Ozs7eUNBQy9COzs7Ozs7aUNBQ0E7c0NBRWQsOERBQUNFLEtBQUc7Ozs7aUNBQU87c0NBQ1AsOERBQUNBLEtBQUc7c0NBQ0FkLEtBQUssQ0FBQzBCLEVBQUUsaUJBQUssOERBQUNDLFFBQU07Z0NBQ1JOLElBQUksRUFBQyxRQUFRO2dDQUNiTixTQUFTLEVBQUMsdVNBSVQ7Z0NBQ0RhLE9BQU8sRUFBRTVCLEtBQUssQ0FBQzZCLENBQUM7MENBRXBCLDRFQUFDQyxNQUFJOzhDQUFDLFFBQU07Ozs7O3lDQUFPOzs7OztxQ0FFdEIsaUJBQUssOERBQUNILFFBQU07Z0NBQUNJLFFBQVE7Z0NBQUVWLElBQUksRUFBQyxRQUFRO2dDQUM3Qk4sU0FBUyxFQUFDLHNTQUcyRDs7a0RBQ3JGLDhEQUFDaUIsS0FBRzt3Q0FBQ0MsSUFBSSxFQUFDLFFBQVE7d0NBQUNsQixTQUFTLEVBQUMsNkNBQTZDO3dDQUFDbUIsT0FBTyxFQUFDLGFBQWE7d0NBQUNDLElBQUksRUFBQyxNQUFNO3dDQUFDQyxLQUFLLEVBQUMsNEJBQTRCOzswREFDL0ksOERBQUNDLE1BQUk7Z0RBQUNDLENBQUMsRUFBQyw4V0FBOFc7Z0RBQUNILElBQUksRUFBQyxTQUFTOzs7OztxREFBRTswREFDdlksOERBQUNFLE1BQUk7Z0RBQUNDLENBQUMsRUFBQywra0JBQStrQjtnREFBQ0gsSUFBSSxFQUFDLGNBQWM7Ozs7O3FEQUFFOzs7Ozs7NkNBQ3ZtQjtvQ0FBQSwrQkFFVjs7Ozs7O3FDQUFTOzs7OztpQ0FBUTs7Ozs7O3lCQUVIOzs7OztxQkFDQzs7Ozs7aUJBRVQ7cUJBQ0EsQ0FDSDtDQUNGO0dBM0ZLcEMsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBNkZqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RhcHBzL0NyZWF0ZUVSQzIwLmpzeD80OGQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDcmVhdGVFUkMyMCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFt0b2tlbk5hbWUsIHNldFRva2VuTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Rva2VuU3ltYm9sLCBzZXRUb2tlblN5bWJvbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Rva2VuU3VwcGx5LCBzZXRUb2tlblN1cHBseV0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgbmFtZUNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0VG9rZW5OYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ltYm9sQ2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRUb2tlblN5bWJvbChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1cHBseUNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0VG9rZW5TdXBwbHkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBwcm9wcy5wZCh0b2tlbk5hbWUsIHRva2VuU3ltYm9sLCB0b2tlblN1cHBseSk7XG5cblxuICByZXR1cm4gKFxuICAgPD48ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTQwMCBkYXJrOmJnLXNsYXRlLTcwMCBweC0yMCBweS0yMFwiPlxuXG4gICAgPGZvcm0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC02IGxnOmdyaWQtY29scy0yXCI+XG4gICAgIDxkaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIHRleHQtd2hpdGUgZm9udC1wb3BwaW5zIHB0LTUgZm9udC1zZW1pYm9sZFwiPkNyZWF0ZSBhIHNpbXBsZSBFUkMyMCBUb2tlbjwvcD5cbiAgICAgPC9kaXY+XG4gICAgIFxuICAgICA8ZGl2PjwvZGl2PlxuICAgICBcbiAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3RfbmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+VG9rZW4gTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZpcnN0X25hbWVcIiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgXG4gICAgICAgICAgICB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayBcbiAgICAgICAgICAgIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgXG4gICAgICAgICAgICBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCIgcGxhY2Vob2xkZXI9XCJTaGliYSBJbnVcIiByZXF1aXJlZCBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtuYW1lQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0X25hbWVcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlRva2VuIFN5bWJvbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxhc3RfbmFtZVwiIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBcbiAgICAgICAgICAgIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIFxuICAgICAgICAgICAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBcbiAgICAgICAgICAgIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIiBwbGFjZWhvbGRlcj1cIiRTSU5VXCIgcmVxdWlyZWQgXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3N5bWJvbENoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdF9uYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5Jbml0aWFsIFN1cHBseTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZpcnN0X25hbWVcIiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgXG4gICAgICAgICAgICB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayBcbiAgICAgICAgICAgIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgXG4gICAgICAgICAgICBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCIgcGxhY2Vob2xkZXI9XCIxMDAwXCIgcmVxdWlyZWQgXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3N1cHBseUNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuPGRpdj48L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgIHtwcm9wcy5hYyA/ICggPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIFxuICAgICAgICAgICAgICAgICAgICBweC04IHB5LTMgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBzaGFkb3ctc20gdGV4dC1zbSBcbiAgICAgICAgICAgICAgICAgICAgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHVycGxlLTYwMCB0by1ibHVlLTUwMCBob3ZlcjpiZy1ncmFkaWVudC10by1ibCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIFxuICAgICAgICAgICAgICAgICAgICBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5jfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPkRlcGxveTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICBcbiAgICA8L2J1dHRvbj4pIDogKDxidXR0b24gZGlzYWJsZWQgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgXG4gICAgICAgICAgICAgICAgICAgIHB4LTggcHktMyBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHNoYWRvdy1zbSB0ZXh0LXNtIFxuICAgICAgICAgICAgICAgICAgICBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtd2hpdGUgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1wdXJwbGUtNjAwIHRvLWJsdWUtNTAwIGhvdmVyOmJnLWdyYWRpZW50LXRvLWJsIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1vZmZzZXQtZ3JheS04MDAgZm9jdXM6cmluZy1pbmRpZ28tNTAwXCI+XG4gICAgPHN2ZyByb2xlPVwic3RhdHVzXCIgY2xhc3NOYW1lPVwiaW5saW5lIHctNCBoLTQgbXItMyB0ZXh0LXdoaXRlIGFuaW1hdGUtc3BpblwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTAwIDUwLjU5MDhDMTAwIDc4LjIwNTEgNzcuNjE0MiAxMDAuNTkxIDUwIDEwMC41OTFDMjIuMzg1OCAxMDAuNTkxIDAgNzguMjA1MSAwIDUwLjU5MDhDMCAyMi45NzY2IDIyLjM4NTggMC41OTA4MiA1MCAwLjU5MDgyQzc3LjYxNDIgMC41OTA4MiAxMDAgMjIuOTc2NiAxMDAgNTAuNTkwOFpNOS4wODE0NCA1MC41OTA4QzkuMDgxNDQgNzMuMTg5NSAyNy40MDEzIDkxLjUwOTQgNTAgOTEuNTA5NEM3Mi41OTg3IDkxLjUwOTQgOTAuOTE4NiA3My4xODk1IDkwLjkxODYgNTAuNTkwOEM5MC45MTg2IDI3Ljk5MjEgNzIuNTk4NyA5LjY3MjI2IDUwIDkuNjcyMjZDMjcuNDAxMyA5LjY3MjI2IDkuMDgxNDQgMjcuOTkyMSA5LjA4MTQ0IDUwLjU5MDhaXCIgZmlsbD1cIiNFNUU3RUJcIi8+XG4gICAgPHBhdGggZD1cIk05My45Njc2IDM5LjA0MDlDOTYuMzkzIDM4LjQwMzggOTcuODYyNCAzNS45MTE2IDk3LjAwNzkgMzMuNTUzOUM5NS4yOTMyIDI4LjgyMjcgOTIuODcxIDI0LjM2OTIgODkuODE2NyAyMC4zNDhDODUuODQ1MiAxNS4xMTkyIDgwLjg4MjYgMTAuNzIzOCA3NS4yMTI0IDcuNDEyODlDNjkuNTQyMiA0LjEwMTk0IDYzLjI3NTQgMS45NDAyNSA1Ni43Njk4IDEuMDUxMjRDNTEuNzY2NiAwLjM2NzU0MSA0Ni42OTc2IDAuNDQ2ODQzIDQxLjczNDUgMS4yNzg3M0MzOS4yNjEzIDEuNjkzMjggMzcuODEzIDQuMTk3NzggMzguNDUwMSA2LjYyMzI2QzM5LjA4NzMgOS4wNDg3NCA0MS41Njk0IDEwLjQ3MTcgNDQuMDUwNSAxMC4xMDcxQzQ3Ljg1MTEgOS41NDg1NSA1MS43MTkxIDkuNTI2ODkgNTUuNTQwMiAxMC4wNDkxQzYwLjg2NDIgMTAuNzc2NiA2NS45OTI4IDEyLjU0NTcgNzAuNjMzMSAxNS4yNTUyQzc1LjI3MzUgMTcuOTY0OCA3OS4zMzQ3IDIxLjU2MTkgODIuNTg0OSAyNS44NDFDODQuOTE3NSAyOC45MTIxIDg2Ljc5OTcgMzIuMjkxMyA4OC4xODExIDM1Ljg3NThDODkuMDgzIDM4LjIxNTggOTEuNTQyMSAzOS42NzgxIDkzLjk2NzYgMzkuMDQwOVpcIiBmaWxsPVwiY3VycmVudENvbG9yXCIvPlxuICAgIDwvc3ZnPlxuICAgIFBsZWFzZSBjb25uZWN0IHlvdXIgd2FsbGV0Li4uXG48L2J1dHRvbj4pfTwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG5cbjwvZGl2PlxuICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlRVJDMjAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNyZWF0ZUVSQzIwIiwicHJvcHMiLCJ0b2tlbk5hbWUiLCJzZXRUb2tlbk5hbWUiLCJ0b2tlblN5bWJvbCIsInNldFRva2VuU3ltYm9sIiwidG9rZW5TdXBwbHkiLCJzZXRUb2tlblN1cHBseSIsIm5hbWVDaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN5bWJvbENoYW5nZUhhbmRsZXIiLCJzdXBwbHlDaGFuZ2VIYW5kbGVyIiwicGQiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwicCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwiYWMiLCJidXR0b24iLCJvbkNsaWNrIiwiYyIsInNwYW4iLCJkaXNhYmxlZCIsInN2ZyIsInJvbGUiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/dapps/CreateERC20.jsx\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar CreateERC20 = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), tokenName = ref[0], setTokenName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), tokenSymbol = ref1[0], setTokenSymbol = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), tokenSupply = ref2[0], setTokenSupply = ref2[1];\n    var nameChangeHandler = function(event) {\n        setTokenName(event.target.value);\n    };\n    var symbolChangeHandler = function(event) {\n        setTokenSymbol(event.target.value);\n    };\n    var supplyChangeHandler = function(event) {\n        setTokenSupply(event.target.value);\n    };\n    console.log(\"Name: \" + tokenName);\n    console.log(\"Symbol: \" + tokenSymbol);\n    console.log(\"Supply: \" + tokenSupply);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-slate-400 dark:bg-slate-700 px-20 py-20\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid gap-6 lg:grid-cols-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-3xl text-white font-poppins pt-5 font-semibold\",\n                                children: \"Create a simple ERC20 Token\"\n                            }, void 0, false, {\n                                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"first_name\",\n                                    className: \"block mb-2 text-sm font-medium text-white\",\n                                    children: \"Token Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"first_name\",\n                                    className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                    placeholder: \"Shiba Inu\",\n                                    required: true,\n                                    onChange: nameChangeHandler\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 6\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"last_name\",\n                                    className: \"block mb-2 text-sm font-medium text-white\",\n                                    children: \"Token Symbol\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"last_name\",\n                                    className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                    placeholder: \"$SINU\",\n                                    required: true,\n                                    onChange: symbolChangeHandler\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"first_name\",\n                                    className: \"block mb-2 text-sm font-medium text-white\",\n                                    children: \"Initial Supply\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"first_name\",\n                                    className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                    placeholder: \"1000\",\n                                    required: true,\n                                    onChange: supplyChangeHandler\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: props.acc ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"relative inline-flex items-center px-8 py-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Deploy\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 23\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                disabled: true,\n                                type: \"button\",\n                                className: \"relative inline-flex items-center px-8 py-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        role: \"status\",\n                                        className: \"inline w-4 h-4 mr-3 text-white animate-spin\",\n                                        viewBox: \"0 0 100 101\",\n                                        fill: \"none\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\",\n                                                fill: \"#E5E7EB\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 5\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                d: \"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\",\n                                                fill: \"currentColor\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 5\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 5\n                                    }, _this),\n                                    \"Please connect your wallet...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 19\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 5\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/dapps/CreateERC20.jsx\",\n            lineNumber: 26,\n            columnNumber: 6\n        }, _this)\n    }, void 0, false);\n};\n_s(CreateERC20, \"NuCEwhTNaXoxiPZsp8OE2o91vug=\");\n_c = CreateERC20;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateERC20);\nvar _c;\n$RefreshReg$(_c, \"CreateERC20\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQUNDLElBQUksRUFBQyxNQUFNO29DQUFDQyxFQUFFLEVBQUMsWUFBWTtvQ0FBQ1AsU0FBUyxFQUFDLHFRQUd1QjtvQ0FBQ1EsV0FBVyxFQUFDLE1BQU07b0NBQUNDLFFBQVE7b0NBQzVGQyxRQUFRLEVBQUVkLG1CQUFtQjs7Ozs7eUNBQy9COzs7Ozs7aUNBQ0E7c0NBR1YsOERBQUNHLEtBQUc7c0NBQ0FmLEtBQUssQ0FBQzJCLEdBQUcsaUJBQUssOERBQUNDLFFBQU07Z0NBQ1ROLElBQUksRUFBQyxRQUFRO2dDQUNiTixTQUFTLEVBQUMsdVNBSVQ7MENBRUwsNEVBQUNhLE1BQUk7OENBQUMsUUFBTTs7Ozs7eUNBQU87Ozs7O3FDQUV0QixpQkFBSyw4REFBQ0QsUUFBTTtnQ0FBQ0UsUUFBUTtnQ0FBRVIsSUFBSSxFQUFDLFFBQVE7Z0NBQzdCTixTQUFTLEVBQUMsc1NBRzJEOztrREFDckYsOERBQUNlLEtBQUc7d0NBQUNDLElBQUksRUFBQyxRQUFRO3dDQUFDaEIsU0FBUyxFQUFDLDZDQUE2Qzt3Q0FBQ2lCLE9BQU8sRUFBQyxhQUFhO3dDQUFDQyxJQUFJLEVBQUMsTUFBTTt3Q0FBQ0MsS0FBSyxFQUFDLDRCQUE0Qjs7MERBQy9JLDhEQUFDQyxNQUFJO2dEQUFDQyxDQUFDLEVBQUMsOFdBQThXO2dEQUFDSCxJQUFJLEVBQUMsU0FBUzs7Ozs7cURBQUU7MERBQ3ZZLDhEQUFDRSxNQUFJO2dEQUFDQyxDQUFDLEVBQUMsK2tCQUEra0I7Z0RBQUNILElBQUksRUFBQyxjQUFjOzs7OztxREFBRTs7Ozs7OzZDQUN2bUI7b0NBQUEsK0JBRVY7Ozs7OztxQ0FBUzs7Ozs7aUNBQVE7Ozs7Ozt5QkFFSDs7Ozs7cUJBQ0M7Ozs7O2lCQUNUO3FCQUNBLENBQ0g7Q0FDRjtHQTNGS25DLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQTZGakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXBwcy9DcmVhdGVFUkMyMC5qc3g/NDhkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgQ3JlYXRlRVJDMjAgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IFt0b2tlbk5hbWUsIHNldFRva2VuTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Rva2VuU3ltYm9sLCBzZXRUb2tlblN5bWJvbF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Rva2VuU3VwcGx5LCBzZXRUb2tlblN1cHBseV0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgY29uc3QgbmFtZUNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0VG9rZW5OYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ltYm9sQ2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRUb2tlblN5bWJvbChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1cHBseUNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0VG9rZW5TdXBwbHkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIk5hbWU6IFwiICsgdG9rZW5OYW1lKTtcbiAgICBjb25zb2xlLmxvZyhcIlN5bWJvbDogXCIgKyB0b2tlblN5bWJvbCk7XG4gICAgY29uc29sZS5sb2coXCJTdXBwbHk6IFwiICsgdG9rZW5TdXBwbHkpO1xuXG4gIHJldHVybiAoXG4gICA8PjxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtNDAwIGRhcms6Ymctc2xhdGUtNzAwIHB4LTIwIHB5LTIwXCI+XG5cbiAgICA8Zm9ybT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTYgbGc6Z3JpZC1jb2xzLTJcIj5cbiAgICAgPGRpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC13aGl0ZSBmb250LXBvcHBpbnMgcHQtNSBmb250LXNlbWlib2xkXCI+Q3JlYXRlIGEgc2ltcGxlIEVSQzIwIFRva2VuPC9wPlxuICAgICA8L2Rpdj5cbiAgICAgXG4gICAgIDxkaXY+PC9kaXY+XG4gICAgIFxuICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdF9uYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5Ub2tlbiBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3RfbmFtZVwiIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBcbiAgICAgICAgICAgIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIFxuICAgICAgICAgICAgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBcbiAgICAgICAgICAgIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIiBwbGFjZWhvbGRlcj1cIlNoaWJhIEludVwiIHJlcXVpcmVkIFxuICAgICAgICAgICAgb25DaGFuZ2U9e25hbWVDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3RfbmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+VG9rZW4gU3ltYm9sPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGFzdF9uYW1lXCIgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIFxuICAgICAgICAgICAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgXG4gICAgICAgICAgICBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIFxuICAgICAgICAgICAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMFwiIHBsYWNlaG9sZGVyPVwiJFNJTlVcIiByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c3ltYm9sQ2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0X25hbWVcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPkluaXRpYWwgU3VwcGx5PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3RfbmFtZVwiIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBcbiAgICAgICAgICAgIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIFxuICAgICAgICAgICAgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBcbiAgICAgICAgICAgIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIiBwbGFjZWhvbGRlcj1cIjEwMDBcIiByZXF1aXJlZCBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c3VwcGx5Q2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2PlxuICAgICAgIHtwcm9wcy5hY2MgPyAoIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBcbiAgICAgICAgICAgICAgICAgICAgcHgtOCBweS0zIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgc2hhZG93LXNtIHRleHQtc20gXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1ncmFkaWVudC10by1iciBmcm9tLXB1cnBsZS02MDAgdG8tYmx1ZS01MDAgaG92ZXI6YmctZ3JhZGllbnQtdG8tYmwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLW9mZnNldC1ncmF5LTgwMCBmb2N1czpyaW5nLWluZGlnby01MDBcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3Bhbj5EZXBsb3k8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgPC9idXR0b24+KSA6ICg8YnV0dG9uIGRpc2FibGVkICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIFxuICAgICAgICAgICAgICAgICAgICBweC04IHB5LTMgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBzaGFkb3ctc20gdGV4dC1zbSBcbiAgICAgICAgICAgICAgICAgICAgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHVycGxlLTYwMCB0by1ibHVlLTUwMCBob3ZlcjpiZy1ncmFkaWVudC10by1ibCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIFxuICAgICAgICAgICAgICAgICAgICBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctaW5kaWdvLTUwMFwiPlxuICAgIDxzdmcgcm9sZT1cInN0YXR1c1wiIGNsYXNzTmFtZT1cImlubGluZSB3LTQgaC00IG1yLTMgdGV4dC13aGl0ZSBhbmltYXRlLXNwaW5cIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDFcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8cGF0aCBkPVwiTTEwMCA1MC41OTA4QzEwMCA3OC4yMDUxIDc3LjYxNDIgMTAwLjU5MSA1MCAxMDAuNTkxQzIyLjM4NTggMTAwLjU5MSAwIDc4LjIwNTEgMCA1MC41OTA4QzAgMjIuOTc2NiAyMi4zODU4IDAuNTkwODIgNTAgMC41OTA4MkM3Ny42MTQyIDAuNTkwODIgMTAwIDIyLjk3NjYgMTAwIDUwLjU5MDhaTTkuMDgxNDQgNTAuNTkwOEM5LjA4MTQ0IDczLjE4OTUgMjcuNDAxMyA5MS41MDk0IDUwIDkxLjUwOTRDNzIuNTk4NyA5MS41MDk0IDkwLjkxODYgNzMuMTg5NSA5MC45MTg2IDUwLjU5MDhDOTAuOTE4NiAyNy45OTIxIDcyLjU5ODcgOS42NzIyNiA1MCA5LjY3MjI2QzI3LjQwMTMgOS42NzIyNiA5LjA4MTQ0IDI3Ljk5MjEgOS4wODE0NCA1MC41OTA4WlwiIGZpbGw9XCIjRTVFN0VCXCIvPlxuICAgIDxwYXRoIGQ9XCJNOTMuOTY3NiAzOS4wNDA5Qzk2LjM5MyAzOC40MDM4IDk3Ljg2MjQgMzUuOTExNiA5Ny4wMDc5IDMzLjU1MzlDOTUuMjkzMiAyOC44MjI3IDkyLjg3MSAyNC4zNjkyIDg5LjgxNjcgMjAuMzQ4Qzg1Ljg0NTIgMTUuMTE5MiA4MC44ODI2IDEwLjcyMzggNzUuMjEyNCA3LjQxMjg5QzY5LjU0MjIgNC4xMDE5NCA2My4yNzU0IDEuOTQwMjUgNTYuNzY5OCAxLjA1MTI0QzUxLjc2NjYgMC4zNjc1NDEgNDYuNjk3NiAwLjQ0Njg0MyA0MS43MzQ1IDEuMjc4NzNDMzkuMjYxMyAxLjY5MzI4IDM3LjgxMyA0LjE5Nzc4IDM4LjQ1MDEgNi42MjMyNkMzOS4wODczIDkuMDQ4NzQgNDEuNTY5NCAxMC40NzE3IDQ0LjA1MDUgMTAuMTA3MUM0Ny44NTExIDkuNTQ4NTUgNTEuNzE5MSA5LjUyNjg5IDU1LjU0MDIgMTAuMDQ5MUM2MC44NjQyIDEwLjc3NjYgNjUuOTkyOCAxMi41NDU3IDcwLjYzMzEgMTUuMjU1MkM3NS4yNzM1IDE3Ljk2NDggNzkuMzM0NyAyMS41NjE5IDgyLjU4NDkgMjUuODQxQzg0LjkxNzUgMjguOTEyMSA4Ni43OTk3IDMyLjI5MTMgODguMTgxMSAzNS44NzU4Qzg5LjA4MyAzOC4yMTU4IDkxLjU0MjEgMzkuNjc4MSA5My45Njc2IDM5LjA0MDlaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiLz5cbiAgICA8L3N2Zz5cbiAgICBQbGVhc2UgY29ubmVjdCB5b3VyIHdhbGxldC4uLlxuPC9idXR0b24+KX08L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuPC9kaXY+XG4gICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVFUkMyMCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ3JlYXRlRVJDMjAiLCJwcm9wcyIsInRva2VuTmFtZSIsInNldFRva2VuTmFtZSIsInRva2VuU3ltYm9sIiwic2V0VG9rZW5TeW1ib2wiLCJ0b2tlblN1cHBseSIsInNldFRva2VuU3VwcGx5IiwibmFtZUNoYW5nZUhhbmRsZXIiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic3ltYm9sQ2hhbmdlSGFuZGxlciIsInN1cHBseUNoYW5nZUhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImFjYyIsImJ1dHRvbiIsInNwYW4iLCJkaXNhYmxlZCIsInN2ZyIsInJvbGUiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwicGF0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/dapps/CreateERC20.jsx\n");

/***/ })

});
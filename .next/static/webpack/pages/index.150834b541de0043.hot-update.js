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

/***/ "./components/Articles.jsx":
/*!*********************************!*\
  !*** ./components/Articles.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Articles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Article */ \"./components/Article.jsx\");\n\n\n\nfunction Articles() {\n    var _this = this;\n    var articles = [\n        {\n            title: \"Aaa\",\n            description: \"Bbb\",\n            link: \"#\",\n            image: \"https://miro.medium.com/max/700/1*sTeZBu9d18R-ad6Qupl1Rw.png\"\n        },\n        {\n            title: \"Aaa\",\n            description: \"Bbb\",\n            link: \"#\",\n            image: \"https://miro.medium.com/max/700/1*sTeZBu9d18R-ad6Qupl1Rw.png\"\n        },\n        {\n            title: \"Aaa\",\n            description: \"Bbb\",\n            link: \"#\",\n            image: \"https://miro.medium.com/max/700/1*sTeZBu9d18R-ad6Qupl1Rw.png\"\n        },\n        {\n            title: \"Aaa\",\n            description: \"Bbb\",\n            link: \"#\",\n            image: \"https://miro.medium.com/max/700/1*sTeZBu9d18R-ad6Qupl1Rw.png\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"about\",\n        className: \"text-center bg-slate-300 dark:bg-slate-600 text-slate-600 dark:text-white px-5 py-20\",\n        children: articles.map(function(article, i) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Article__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: i,\n                t: article.title,\n                d: article.description,\n                l: article.link,\n                i: article.image\n            }, void 0, false, {\n                fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/Articles.jsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/paulsocarde/Desktop/Portfolio-PaulSocarde/components/Articles.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n};\n_c = Articles;\nvar _c;\n$RefreshReg$(_c, \"Articles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGVzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNNO0FBRWhCLFNBQVNFLFFBQVEsR0FBRzs7SUFDL0IsSUFBTUMsUUFBUSxHQUFHO1FBQ2I7WUFBRUMsS0FBSyxFQUFFLEtBQUs7WUFBRUMsV0FBVyxFQUFFLEtBQUs7WUFBRUMsSUFBSSxFQUFDLEdBQUc7WUFBRUMsS0FBSyxFQUFDLDhEQUE4RDtTQUFDO1FBQ25IO1lBQUVILEtBQUssRUFBRSxLQUFLO1lBQUVDLFdBQVcsRUFBRSxLQUFLO1lBQUVDLElBQUksRUFBQyxHQUFHO1lBQUVDLEtBQUssRUFBQyw4REFBOEQ7U0FBQztRQUNuSDtZQUFFSCxLQUFLLEVBQUUsS0FBSztZQUFFQyxXQUFXLEVBQUUsS0FBSztZQUFFQyxJQUFJLEVBQUMsR0FBRztZQUFFQyxLQUFLLEVBQUMsOERBQThEO1NBQUM7UUFDbkg7WUFBRUgsS0FBSyxFQUFFLEtBQUs7WUFBRUMsV0FBVyxFQUFFLEtBQUs7WUFBRUMsSUFBSSxFQUFDLEdBQUc7WUFBRUMsS0FBSyxFQUFDLDhEQUE4RDtTQUFDO0tBQ3BIO0lBRUgscUJBQ0EsOERBQUNDLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLE9BQU87UUFBQ0MsU0FBUyxFQUFDLHNGQUVnQjtrQkFDekNQLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsQ0FBQztpQ0FDckIsOERBQUNaLGdEQUFPO2dCQUFDUSxFQUFFLEVBQUVJLENBQUM7Z0JBQUVDLENBQUMsRUFBRUYsT0FBTyxDQUFDUixLQUFLO2dCQUFFVyxDQUFDLEVBQUVILE9BQU8sQ0FBQ1AsV0FBVztnQkFBRVcsQ0FBQyxFQUFFSixPQUFPLENBQUNOLElBQUk7Z0JBQUVPLENBQUMsRUFBRUQsT0FBTyxDQUFDTCxLQUFLOzs7OztxQkFBSTtTQUNsRyxDQUFDOzs7OztZQUVJLENBQ0w7Q0FDRjtBQWxCcUJMLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlcy5qc3g/YWIzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBBcnRpY2xlIGZyb20gXCIuL0FydGljbGVcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcnRpY2xlcygpIHtcbiAgICBjb25zdCBhcnRpY2xlcyA9IFtcbiAgICAgICAgeyB0aXRsZTogJ0FhYScsIGRlc2NyaXB0aW9uOiAnQmJiJywgbGluazonIycsIGltYWdlOidodHRwczovL21pcm8ubWVkaXVtLmNvbS9tYXgvNzAwLzEqc1RlWkJ1OWQxOFItYWQ2UXVwbDFSdy5wbmcnfSxcbiAgICAgICAgeyB0aXRsZTogJ0FhYScsIGRlc2NyaXB0aW9uOiAnQmJiJywgbGluazonIycsIGltYWdlOidodHRwczovL21pcm8ubWVkaXVtLmNvbS9tYXgvNzAwLzEqc1RlWkJ1OWQxOFItYWQ2UXVwbDFSdy5wbmcnfSxcbiAgICAgICAgeyB0aXRsZTogJ0FhYScsIGRlc2NyaXB0aW9uOiAnQmJiJywgbGluazonIycsIGltYWdlOidodHRwczovL21pcm8ubWVkaXVtLmNvbS9tYXgvNzAwLzEqc1RlWkJ1OWQxOFItYWQ2UXVwbDFSdy5wbmcnfSxcbiAgICAgICAgeyB0aXRsZTogJ0FhYScsIGRlc2NyaXB0aW9uOiAnQmJiJywgbGluazonIycsIGltYWdlOidodHRwczovL21pcm8ubWVkaXVtLmNvbS9tYXgvNzAwLzEqc1RlWkJ1OWQxOFItYWQ2UXVwbDFSdy5wbmcnfVxuICAgICAgXTtcblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImFib3V0XCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcbiAgICBiZy1zbGF0ZS0zMDAgZGFyazpiZy1zbGF0ZS02MDBcbiAgICB0ZXh0LXNsYXRlLTYwMCBkYXJrOnRleHQtd2hpdGUgcHgtNSBweS0yMFwiPlxuICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUsIGkpID0+IChcbiAgICAgICAgPEFydGljbGUgaWQ9e2l9IHQ9e2FydGljbGUudGl0bGV9IGQ9e2FydGljbGUuZGVzY3JpcHRpb259IGw9e2FydGljbGUubGlua30gaT17YXJ0aWNsZS5pbWFnZX0gLz5cbiAgICApKX1cbiAgIFxuICAgIDwvZGl2PlxuICAgIClcbiAgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIkFydGljbGUiLCJBcnRpY2xlcyIsImFydGljbGVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxpbmsiLCJpbWFnZSIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwibWFwIiwiYXJ0aWNsZSIsImkiLCJ0IiwiZCIsImwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Articles.jsx\n");

/***/ })

});
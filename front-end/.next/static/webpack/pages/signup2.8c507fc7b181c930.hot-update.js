"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup2",{

/***/ "./pages/signup2.js":
/*!**************************!*\
  !*** ./pages/signup2.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./pages/api.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* enallaktiki an den theloume na kanoume search kai apo edw\r\nan protimame na min exei search*/ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleLogin = async ()=>{\n        try {\n            // Send the credentials to the server for validation\n            const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.fetchData)(\"http://localhost:3000/signup\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/x-www-form-urlencoded\"\n                },\n                body: JSON.stringify({\n                    username,\n                    password\n                })\n            });\n            if (response.ok) {\n                // Handle successful signup (e.g., redirect to login page)\n                router.push(\"/login\");\n                console.log(\"Signup successful\");\n            } else if (response.status === 409) {\n                // Server returns a 409 status (Conflict), indicating duplicate username\n                setErrorMessage(\"Username already exists. Please choose a different username.\");\n            } else {\n                // Handle other error statuses\n                console.error(\"Signup failed with status:\", response.status);\n            }\n        } catch (error) {\n            // Handle network or other errors\n            console.error(\"Error during signup:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"home-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"title\",\n                    children: \"Ntuaflix\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"main-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-7aa4d68431cc71d8\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"login-form\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                className: \"jsx-7aa4d68431cc71d8\",\n                                children: \"Username:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"username\",\n                                value: username,\n                                onChange: (e)=>setUsername(e.target.value),\n                                className: \"jsx-7aa4d68431cc71d8\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: \"jsx-7aa4d68431cc71d8\",\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value),\n                                className: \"jsx-7aa4d68431cc71d8\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"button-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleLogin,\n                                    className: \"jsx-7aa4d68431cc71d8\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"signup-text\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-7aa4d68431cc71d8\",\n                                    children: [\n                                        \"Don't have an account? \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"http://localhost:3000/signup2\",\n                                            children: \"Sign Up\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 39\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"7aa4d68431cc71d8\",\n                children: '.auth-buttons.jsx-7aa4d68431cc71d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.auth-buttons.jsx-7aa4d68431cc71d8 .login-button.jsx-7aa4d68431cc71d8{margin-right:10px}.home-container.jsx-7aa4d68431cc71d8{max-width:1200px;margin:0 auto;padding:20px}.header.jsx-7aa4d68431cc71d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:20px;padding:20px 0;background-color:#e0dfdf;font-family:\"Roboto\",sans-serif}.title.jsx-7aa4d68431cc71d8{font-size:2.5em;color:#333;margin:0 auto}.search-bar.jsx-7aa4d68431cc71d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:0px}input.jsx-7aa4d68431cc71d8{padding:12px;width:320px;border:2px solid#61006d;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;margin-right:10px;font-size:14px}.main-content.jsx-7aa4d68431cc71d8{text-align:center;background-color:#fff;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}button.jsx-7aa4d68431cc71d8{padding:12px 20px;cursor:pointer;background-color:#000;color:#fff;border:none;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;font-size:14px;-webkit-transition:background-color.3s ease;-moz-transition:background-color.3s ease;-o-transition:background-color.3s ease;transition:background-color.3s ease}button.jsx-7aa4d68431cc71d8:hover{background-color:#0056b3}.login-button.jsx-7aa4d68431cc71d8{padding:12px 20px;cursor:pointer;background-color:#0f4c49;color:#fff;border:none;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;text-decoration:none;-webkit-transition:background-color.3s ease;-moz-transition:background-color.3s ease;-o-transition:background-color.3s ease;transition:background-color.3s ease}.login-button.jsx-7aa4d68431cc71d8:hover{background-color:#0056b3}input.jsx-7aa4d68431cc71d8{padding:10px;width:320px;border:1px solid#ccc;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;margin-right:10px}.login-form.jsx-7aa4d68431cc71d8{text-align:center;margin-top:20px}.button-container.jsx-7aa4d68431cc71d8{margin-top:10px}label.jsx-7aa4d68431cc71d8{display:block;margin-bottom:5px}input.jsx-7aa4d68431cc71d8{padding:10px;width:300px;margin-bottom:10px}'\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"wuQOK7xaXdVz4RMrZQhWbI751Oc=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOytCQUMrQjs7O0FBQ0U7QUFDSTtBQUNSO0FBRTdCLE1BQU1HLFFBQVE7O0lBQ1osTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNUSxjQUFjO1FBQ2xCLElBQUk7WUFDRixvREFBb0Q7WUFDcEQsTUFBTUMsV0FBVyxNQUFNUixrREFBU0EsQ0FBQyxnQ0FBZ0M7Z0JBQy9EUyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVY7b0JBQVVFO2dCQUFTO1lBUzVDO1lBRUEsSUFBSUcsU0FBU00sRUFBRSxFQUFFO2dCQUNmLDBEQUEwRDtnQkFDMURDLE9BQU9DLElBQUksQ0FBQztnQkFDWkMsUUFBUUMsR0FBRyxDQUFDO1lBQ2QsT0FBTyxJQUFJVixTQUFTVyxNQUFNLEtBQUssS0FBSztnQkFDbEMsd0VBQXdFO2dCQUN4RUMsZ0JBQWdCO1lBQ2xCLE9BQU87Z0JBQ0wsOEJBQThCO2dCQUM5QkgsUUFBUUksS0FBSyxDQUFDLDhCQUE4QmIsU0FBU1csTUFBTTtZQUM3RDtRQUNGLEVBQUUsT0FBT0UsT0FBTztZQUNkLGlDQUFpQztZQUNqQ0osUUFBUUksS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUdBLHFCQUNFLDhEQUFDQztrREFBYzs7MEJBQ2IsOERBQUNBOzBEQUFjOzBCQUNiLDRFQUFDQzs4REFBYTs4QkFBUTs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDRDswREFBYzs7a0NBQ2IsOERBQUNDOztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDRDtrRUFBYzs7MENBQ2IsOERBQUNFO2dDQUFNQyxTQUFROzswQ0FBVzs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE9BQU8xQjtnQ0FDUDJCLFVBQVUsQ0FBQ0MsSUFBTTNCLFlBQVkyQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7MENBRzdDLDhEQUFDTDtnQ0FBTUMsU0FBUTs7MENBQVc7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxPQUFPeEI7Z0NBQ1B5QixVQUFVLENBQUNDLElBQU16QixZQUFZeUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7OzBDQUc3Qyw4REFBQ1A7MEVBQWM7MENBQ2IsNEVBQUNXO29DQUFPQyxTQUFTM0I7OzhDQUFhOzs7Ozs7Ozs7OzswQ0FFaEMsOERBQUNlOzBFQUFjOzBDQUNiLDRFQUFDYTs7O3dDQUFFO3NEQUF1Qiw4REFBQ2xDLGtEQUFJQTs0Q0FBQ21DLE1BQUs7c0RBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1SGpGO0dBNUxNbEM7S0FBQUE7QUE4TE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwMi5qcz9lODI2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVuYWxsYWt0aWtpIGFuIGRlbiB0aGVsb3VtZSBuYSBrYW5vdW1lIHNlYXJjaCBrYWkgYXBvIGVkd1xyXG5hbiBwcm90aW1hbWUgbmEgbWluIGV4ZWkgc2VhcmNoKi9cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4vYXBpLmpzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFNlbmQgdGhlIGNyZWRlbnRpYWxzIHRvIHRoZSBzZXJ2ZXIgZm9yIHZhbGlkYXRpb25cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaERhdGEoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zaWdudXAnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgICAgICAgLypcclxuICAgICAgICBcIlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBcImhhaGZzZHVnYWhzXCIsXHJcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogXCJzZGhmc3VkZmdzXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgXCJcclxuICAgICAgICAqL1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3NmdWwgc2lnbnVwIChlLmcuLCByZWRpcmVjdCB0byBsb2dpbiBwYWdlKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2lnbnVwIHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwOSkge1xyXG4gICAgICAgIC8vIFNlcnZlciByZXR1cm5zIGEgNDA5IHN0YXR1cyAoQ29uZmxpY3QpLCBpbmRpY2F0aW5nIGR1cGxpY2F0ZSB1c2VybmFtZVxyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZSgnVXNlcm5hbWUgYWxyZWFkeSBleGlzdHMuIFBsZWFzZSBjaG9vc2UgYSBkaWZmZXJlbnQgdXNlcm5hbWUuJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIG90aGVyIGVycm9yIHN0YXR1c2VzXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignU2lnbnVwIGZhaWxlZCB3aXRoIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBIYW5kbGUgbmV0d29yayBvciBvdGhlciBlcnJvcnNcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNpZ251cDonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5OdHVhZmxpeDwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9naW59PkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwLXRleHRcIj5cclxuICAgICAgICAgICAgPHA+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8TGluayBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NpZ251cDJcIj5TaWduIFVwPC9MaW5rPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmF1dGgtYnV0dG9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5hdXRoLWJ1dHRvbnMgLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAgIC5ob21lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBERkRGO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlYXJjaC1iYXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzYxMDA2RDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiBTZXQgYmFja2dyb3VuZCBjb2xvciB0byB3aGl0ZSBmb3IgdGhlIG1haW4gY29udGVudCAqL1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDsgLyogQWRkIHBhZGRpbmcgdG8gdGhlIG1haW4gY29udGVudCAqL1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyAvKiBBZGQgYm9yZGVyLXJhZGl1cyBmb3IgYSBjbGVhbiBsb29rICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi1idXR0b24ge1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBGNEM0OTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9naW4tYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJmZXRjaERhdGEiLCJMaW5rIiwiTG9naW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZUxvZ2luIiwicmVzcG9uc2UiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInJvdXRlciIsInB1c2giLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2V0RXJyb3JNZXNzYWdlIiwiZXJyb3IiLCJkaXYiLCJoMSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signup2.js\n"));

/***/ })

});
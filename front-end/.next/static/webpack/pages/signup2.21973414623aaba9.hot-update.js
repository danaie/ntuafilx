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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./pages/api.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_globalstyles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globalstyles.css */ \"./styles/globalstyles.css\");\n/* harmony import */ var _styles_globalstyles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globalstyles_css__WEBPACK_IMPORTED_MODULE_5__);\n/* an thelw na min exei search bar to sign up */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Signup = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleSignup = async ()=>{\n        try {\n            // Send the signup data to the server\n            const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.fetchData)(\"http://localhost:3000/signup\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/x-www-form-urlencoded\"\n                },\n                body: JSON.stringify({\n                    username,\n                    password\n                })\n            });\n            if (response.ok) {\n                // Handle successful signup (e.g., redirect to login page)\n                router.push(\"/login\");\n                console.log(\"Signup successful\");\n            } else if (response.status === 409) {\n                // Server returns a 409 status (Conflict), indicating duplicate username\n                setErrorMessage(\"Username already exists. Please choose a different username.\");\n            } else {\n                // Handle other error statuses\n                console.error(\"Signup failed with status:\", response.status);\n            }\n        } catch (error) {\n            // Handle network or other errors\n            console.error(\"Error during signup:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-2fcc236a369e9aaf\" + \" \" + \"home-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-2fcc236a369e9aaf\" + \" \" + \"header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"jsx-2fcc236a369e9aaf\" + \" \" + \"title\",\n                    children: \"Ntuaflix\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                lineNumber: 41,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-2fcc236a369e9aaf\" + \" \" + \"main-content\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-2fcc236a369e9aaf\" + \" \" + \"login-form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"jsx-2fcc236a369e9aaf\",\n                            children: \"Sign Up\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"username\",\n                            className: \"jsx-2fcc236a369e9aaf\",\n                            children: \"Username:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"username\",\n                            value: username,\n                            onChange: (e)=>setUsername(e.target.value),\n                            className: \"jsx-2fcc236a369e9aaf\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            className: \"jsx-2fcc236a369e9aaf\",\n                            children: \"Password:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            id: \"password\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value),\n                            className: \"jsx-2fcc236a369e9aaf\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-2fcc236a369e9aaf\" + \" \" + \"button-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSignup,\n                                className: \"jsx-2fcc236a369e9aaf\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-2fcc236a369e9aaf\" + \" \" + \"login-text\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-2fcc236a369e9aaf\",\n                                children: [\n                                    \"Already have an account? \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"http://localhost:3000/login2\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 41\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"2fcc236a369e9aaf\",\n                children: \"input.jsx-2fcc236a369e9aaf{padding:10px;width:320px;border:1px solid#ccc;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;margin-right:10px}.login-form.jsx-2fcc236a369e9aaf{text-align:center;margin-top:20px}.button-container.jsx-2fcc236a369e9aaf{margin-top:10px}label.jsx-2fcc236a369e9aaf{display:block;margin-bottom:5px}input.jsx-2fcc236a369e9aaf{padding:10px;width:300px;margin-bottom:10px}.signup-form.jsx-2fcc236a369e9aaf{text-align:center;margin-top:20px}.login-text.jsx-2fcc236a369e9aaf{margin-top:10px}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Signup, \"wuQOK7xaXdVz4RMrZQhWbI751Oc=\");\n_c = Signup;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\nvar _c;\n$RefreshReg$(_c, \"Signup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsOENBQThDOzs7QUFDYjtBQUNJO0FBQ1I7QUFDTztBQUVwQyxNQUFNRyxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFFekMsTUFBTVEsZUFBZTtRQUNuQixJQUFJO1lBQ0YscUNBQXFDO1lBQ3JDLE1BQU1DLFdBQVcsTUFBTVIsa0RBQVNBLENBQUMsZ0NBQWdDO2dCQUMvRFMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVWO29CQUFVRTtnQkFBUztZQUM1QztZQUVBLElBQUlHLFNBQVNNLEVBQUUsRUFBRTtnQkFDZiwwREFBMEQ7Z0JBQzFEQyxPQUFPQyxJQUFJLENBQUM7Z0JBQ1pDLFFBQVFDLEdBQUcsQ0FBQztZQUNkLE9BQU8sSUFBSVYsU0FBU1csTUFBTSxLQUFLLEtBQUs7Z0JBQ2xDLHdFQUF3RTtnQkFDeEVDLGdCQUFnQjtZQUNsQixPQUFPO2dCQUNMLDhCQUE4QjtnQkFDOUJILFFBQVFJLEtBQUssQ0FBQyw4QkFBOEJiLFNBQVNXLE1BQU07WUFDN0Q7UUFDRixFQUFFLE9BQU9FLE9BQU87WUFDZCxpQ0FBaUM7WUFDakNKLFFBQVFJLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7a0RBQWM7OzBCQUNmLDhEQUFDQTswREFBYzswQkFDYiw0RUFBQ0M7OERBQWE7OEJBQVE7Ozs7Ozs7Ozs7OzBCQUV0Qiw4REFBQ0Q7MERBQWM7MEJBQ2IsNEVBQUNBOzhEQUFjOztzQ0FDYiw4REFBQ0U7O3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOzRCQUFNQyxTQUFROztzQ0FBVzs7Ozs7O3NDQUMxQiw4REFBQ0M7NEJBQ0NDLE1BQUs7NEJBQ0xDLElBQUc7NEJBQ0hDLE9BQU8zQjs0QkFDUDRCLFVBQVUsQ0FBQ0MsSUFBTTVCLFlBQVk0QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7c0NBRzdDLDhEQUFDTDs0QkFBTUMsU0FBUTs7c0NBQVc7Ozs7OztzQ0FDMUIsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxPQUFPekI7NEJBQ1AwQixVQUFVLENBQUNDLElBQU0xQixZQUFZMEIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7O3NDQUc3Qyw4REFBQ1I7c0VBQWM7c0NBQ2IsNEVBQUNZO2dDQUFPQyxTQUFTNUI7OzBDQUFjOzs7Ozs7Ozs7OztzQ0FFakMsOERBQUNlO3NFQUFjO3NDQUNiLDRFQUFDYzs7O29DQUFFO2tEQUF5Qiw4REFBQ25DLGtEQUFJQTt3Q0FBQ29DLE1BQUs7a0RBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDbEY7R0F4R01uQztLQUFBQTtBQTBHTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWdudXAyLmpzP2U4MjYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogYW4gdGhlbHcgbmEgbWluIGV4ZWkgc2VhcmNoIGJhciB0byBzaWduIHVwICovXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuL2FwaS5qcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHN0eWxlcy5jc3MnO1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaWdudXAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBTZW5kIHRoZSBzaWdudXAgZGF0YSB0byB0aGUgc2VydmVyXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hEYXRhKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvc2lnbnVwJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIC8vIEhhbmRsZSBzdWNjZXNzZnVsIHNpZ251cCAoZS5nLiwgcmVkaXJlY3QgdG8gbG9naW4gcGFnZSlcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NpZ251cCBzdWNjZXNzZnVsJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDkpIHtcclxuICAgICAgICAvLyBTZXJ2ZXIgcmV0dXJucyBhIDQwOSBzdGF0dXMgKENvbmZsaWN0KSwgaW5kaWNhdGluZyBkdXBsaWNhdGUgdXNlcm5hbWVcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ1VzZXJuYW1lIGFscmVhZHkgZXhpc3RzLiBQbGVhc2UgY2hvb3NlIGEgZGlmZmVyZW50IHVzZXJuYW1lLicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvciBzdGF0dXNlc1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NpZ251cCBmYWlsZWQgd2l0aCBzdGF0dXM6JywgcmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gSGFuZGxlIG5ldHdvcmsgb3Igb3RoZXIgZXJyb3JzXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzaWdudXA6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5OdHVhZmxpeDwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgIDxoMj5TaWduIFVwPC9oMj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTaWdudXB9PlNpZ24gVXA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi10ZXh0XCI+XHJcbiAgICAgICAgICAgIDxwPkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyA8TGluayBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luMlwiPkxvZ2luPC9MaW5rPjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2lnbnVwLWZvcm0ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi10ZXh0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJmZXRjaERhdGEiLCJMaW5rIiwiU2lnbnVwIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTaWdudXAiLCJyZXNwb25zZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwicm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzZXRFcnJvck1lc3NhZ2UiLCJlcnJvciIsImRpdiIsImgxIiwiaDIiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInAiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signup2.js\n"));

/***/ })

});
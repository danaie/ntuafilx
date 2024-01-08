"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login2",{

/***/ "./pages/login2.js":
/*!*************************!*\
  !*** ./pages/login2.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./pages/api.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* enallaktiki an den theloume na kanoume search kai apo edw\r\nan protimame na min exei search*/ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleLogin = async ()=>{\n        try {\n            // Send the credentials to the server for validation\n            const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.fetchData)(\"http://localhost:3000/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/x-www-form-urlencoded\"\n                },\n                body: JSON.stringify({\n                    username,\n                    password\n                })\n            });\n            if (response.ok) {\n                // Server returns OK status (e.g., 200)\n                const responseData = await response.json();\n                const { token, role } = responseData;\n                // Store the access token provided by the backend response\n                setAccessToken(token);\n                if (role === \"user\") {\n                    router.push(\"/user-home\");\n                    console.log(\"Login successful for user\");\n                } else if (role === \"admin\") {\n                    router.push(\"/admin-home\");\n                    console.log(\"Login successful for admin\");\n                } else {\n                    console.error(\"Unknown role. Login failed\");\n                }\n            } else if (response.status === 401) {\n                // Server returns a 401 status (Unauthorized)\n                setErrorMessage(\"Invalid credentials. Please try again.\");\n            } else if (response.status === 404) {\n                // Server returns a 404 status (Not Found), indicating incorrect username\n                setErrorMessage(\"Username not found. Please sign up or create an account.\");\n            } else {\n                // Handle other error statuses\n                console.error(\"Login failed with status:\", response.status);\n            }\n        } catch (error) {\n            // Handle network or other errors\n            console.error(\"Error during login:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"home-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/searchresults\",\n                        style: {\n                            textDecoration: \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"title\",\n                            children: \"Ntuaflix\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, undefined),\n                    \"      \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"main-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-7aa4d68431cc71d8\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"login-form\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                className: \"jsx-7aa4d68431cc71d8\",\n                                children: \"Username:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"username\",\n                                value: username,\n                                onChange: (e)=>setUsername(e.target.value),\n                                className: \"jsx-7aa4d68431cc71d8\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: \"jsx-7aa4d68431cc71d8\",\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value),\n                                className: \"jsx-7aa4d68431cc71d8\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"button-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleLogin,\n                                    className: \"jsx-7aa4d68431cc71d8\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"signup-text\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-7aa4d68431cc71d8\",\n                                    children: [\n                                        \"Don't have an account? \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"http://localhost:3000/signup\",\n                                            children: \"Sign Up\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 39\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"7aa4d68431cc71d8\",\n                children: '.auth-buttons.jsx-7aa4d68431cc71d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.auth-buttons.jsx-7aa4d68431cc71d8 .login-button.jsx-7aa4d68431cc71d8{margin-right:10px}.home-container.jsx-7aa4d68431cc71d8{max-width:1200px;margin:0 auto;padding:20px}.header.jsx-7aa4d68431cc71d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:20px;padding:20px 0;background-color:#e0dfdf;font-family:\"Roboto\",sans-serif}.title.jsx-7aa4d68431cc71d8{font-size:2.5em;color:#333;margin:0 auto}.search-bar.jsx-7aa4d68431cc71d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:0px}input.jsx-7aa4d68431cc71d8{padding:12px;width:320px;border:2px solid#61006d;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;margin-right:10px;font-size:14px}.main-content.jsx-7aa4d68431cc71d8{text-align:center;background-color:#fff;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}button.jsx-7aa4d68431cc71d8{padding:12px 20px;cursor:pointer;background-color:#000;color:#fff;border:none;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;font-size:14px;-webkit-transition:background-color.3s ease;-moz-transition:background-color.3s ease;-o-transition:background-color.3s ease;transition:background-color.3s ease}button.jsx-7aa4d68431cc71d8:hover{background-color:#0056b3}.login-button.jsx-7aa4d68431cc71d8{padding:12px 20px;cursor:pointer;background-color:#0f4c49;color:#fff;border:none;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;text-decoration:none;-webkit-transition:background-color.3s ease;-moz-transition:background-color.3s ease;-o-transition:background-color.3s ease;transition:background-color.3s ease}.login-button.jsx-7aa4d68431cc71d8:hover{background-color:#0056b3}input.jsx-7aa4d68431cc71d8{padding:10px;width:320px;border:1px solid#ccc;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;margin-right:10px}.login-form.jsx-7aa4d68431cc71d8{text-align:center;margin-top:20px}.button-container.jsx-7aa4d68431cc71d8{margin-top:10px}label.jsx-7aa4d68431cc71d8{display:block;margin-bottom:5px}input.jsx-7aa4d68431cc71d8{padding:10px;width:300px;margin-bottom:10px}'\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\login2.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"wuQOK7xaXdVz4RMrZQhWbI751Oc=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzP2JjNmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZW5hbGxha3Rpa2kgYW4gZGVuIHRoZWxvdW1lIG5hIGthbm91bWUgc2VhcmNoIGthaSBhcG8gZWR3XHJcbmFuIHByb3RpbWFtZSBuYSBtaW4gZXhlaSBzZWFyY2gqL1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi9hcGkuanMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gU2VuZCB0aGUgY3JlZGVudGlhbHMgdG8gdGhlIHNlcnZlciBmb3IgdmFsaWRhdGlvblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoRGF0YSgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxyXG4gICAgICAgIC8qIFwiXHJcbiAgICAgICAgeyAgIFwidXNlcm5hbWVcIjogXCJoYWhmc2R1Z2Foc1wiLFxyXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IFwic2RoZnN1ZGZnc1wiXHJcbiAgICAgICAgfVwiICAqL1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgLy8gU2VydmVyIHJldHVybnMgT0sgc3RhdHVzIChlLmcuLCAyMDApXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IHsgdG9rZW4sIHJvbGUgfSA9IHJlc3BvbnNlRGF0YTtcclxuICBcclxuICAgICAgICAvLyBTdG9yZSB0aGUgYWNjZXNzIHRva2VuIHByb3ZpZGVkIGJ5IHRoZSBiYWNrZW5kIHJlc3BvbnNlXHJcbiAgICAgICAgc2V0QWNjZXNzVG9rZW4odG9rZW4pO1xyXG4gIFxyXG4gICAgICAgIGlmIChyb2xlID09PSAndXNlcicpIHtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvdXNlci1ob21lJyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gc3VjY2Vzc2Z1bCBmb3IgdXNlcicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm9sZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9hZG1pbi1ob21lJyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gc3VjY2Vzc2Z1bCBmb3IgYWRtaW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5rbm93biByb2xlLiBMb2dpbiBmYWlsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAvLyBTZXJ2ZXIgcmV0dXJucyBhIDQwMSBzdGF0dXMgKFVuYXV0aG9yaXplZClcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ0ludmFsaWQgY3JlZGVudGlhbHMuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgICAvLyBTZXJ2ZXIgcmV0dXJucyBhIDQwNCBzdGF0dXMgKE5vdCBGb3VuZCksIGluZGljYXRpbmcgaW5jb3JyZWN0IHVzZXJuYW1lXHJcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdVc2VybmFtZSBub3QgZm91bmQuIFBsZWFzZSBzaWduIHVwIG9yIGNyZWF0ZSBhbiBhY2NvdW50LicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvciBzdGF0dXNlc1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGZhaWxlZCB3aXRoIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBIYW5kbGUgbmV0d29yayBvciBvdGhlciBlcnJvcnNcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGxvZ2luOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICA8TGluayBocmVmPVwiL3NlYXJjaHJlc3VsdHNcIiAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5OdHVhZmxpeDwvaDE+XHJcbiAgICAgICAgPC9MaW5rPiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxyXG4gICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9naW59PkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwLXRleHRcIj5cclxuICAgICAgICAgICAgPHA+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8TGluayBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NpZ251cFwiPlNpZ24gVXA8L0xpbms+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuYXV0aC1idXR0b25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmF1dGgtYnV0dG9ucyAubG9naW4tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgLmhvbWUtY29udGFpbmVyIHtcclxuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMERGREY7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VhcmNoLWJhciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNjEwMDZEO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IC8qIFNldCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHdoaXRlIGZvciB0aGUgbWFpbiBjb250ZW50ICovXHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4OyAvKiBBZGQgcGFkZGluZyB0byB0aGUgbWFpbiBjb250ZW50ICovXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIEFkZCBib3JkZXItcmFkaXVzIGZvciBhIGNsZWFuIGxvb2sgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEY0QzQ5O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi1idXR0b246aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmxvZ2luLWZvcm0ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImZldGNoRGF0YSIsIkxpbmsiLCJMb2dpbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlTG9naW4iLCJyZXNwb25zZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwicmVzcG9uc2VEYXRhIiwianNvbiIsInRva2VuIiwicm9sZSIsInNldEFjY2Vzc1Rva2VuIiwicm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN0YXR1cyIsInNldEVycm9yTWVzc2FnZSIsImRpdiIsImhyZWYiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwiaDEiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login2.js\n"));

/***/ })

});
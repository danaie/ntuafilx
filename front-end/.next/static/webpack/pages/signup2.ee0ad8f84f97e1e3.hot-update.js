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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./pages/api.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* enallaktiki an den theloume na kanoume search kai apo edw\r\nan protimame na min exei search*/ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleLogin = async ()=>{\n        try {\n            // Send the credentials to the server for validation\n            const response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.fetchData)(\"http://localhost:3000/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/x-www-form-urlencoded\"\n                },\n                body: JSON.stringify({\n                    username,\n                    password\n                })\n            });\n            if (response.ok) {\n                // Server returns OK status (e.g., 200)\n                const responseData = await response.json();\n                const { token, role } = responseData;\n                // Store the access token provided by the backend response\n                setAccessToken(token);\n                if (role === \"user\") {\n                    router.push(\"/user-home\");\n                    console.log(\"Login successful for user\");\n                } else if (role === \"admin\") {\n                    router.push(\"/admin-home\");\n                    console.log(\"Login successful for admin\");\n                } else {\n                    console.error(\"Unknown role. Login failed\");\n                }\n            } else if (response.status === 401) {\n                // Server returns a 401 status (Unauthorized)\n                setErrorMessage(\"Invalid credentials. Please try again.\");\n            } else if (response.status === 404) {\n                // Server returns a 404 status (Not Found), indicating incorrect username\n                setErrorMessage(\"Username not found. Please sign up or create an account.\");\n            } else {\n                // Handle other error statuses\n                console.error(\"Login failed with status:\", response.status);\n            }\n        } catch (error) {\n            // Handle network or other errors\n            console.error(\"Error during login:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"home-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"title\",\n                    children: \"Ntuaflix\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"main-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-7aa4d68431cc71d8\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"login-form\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                className: \"jsx-7aa4d68431cc71d8\",\n                                children: \"Username:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"username\",\n                                value: username,\n                                onChange: (e)=>setUsername(e.target.value),\n                                className: \"jsx-7aa4d68431cc71d8\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: \"jsx-7aa4d68431cc71d8\",\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value),\n                                className: \"jsx-7aa4d68431cc71d8\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"button-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleLogin,\n                                    className: \"jsx-7aa4d68431cc71d8\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-7aa4d68431cc71d8\" + \" \" + \"signup-text\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-7aa4d68431cc71d8\",\n                                    children: [\n                                        \"Don't have an account? \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"http://localhost:3000/signup2\",\n                                            children: \"Sign Up\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 39\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"7aa4d68431cc71d8\",\n                children: '.auth-buttons.jsx-7aa4d68431cc71d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.auth-buttons.jsx-7aa4d68431cc71d8 .login-button.jsx-7aa4d68431cc71d8{margin-right:10px}.home-container.jsx-7aa4d68431cc71d8{max-width:1200px;margin:0 auto;padding:20px}.header.jsx-7aa4d68431cc71d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:20px;padding:20px 0;background-color:#e0dfdf;font-family:\"Roboto\",sans-serif}.title.jsx-7aa4d68431cc71d8{font-size:2.5em;color:#333;margin:0 auto}.search-bar.jsx-7aa4d68431cc71d8{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:0px}input.jsx-7aa4d68431cc71d8{padding:12px;width:320px;border:2px solid#61006d;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;margin-right:10px;font-size:14px}.main-content.jsx-7aa4d68431cc71d8{text-align:center;background-color:#fff;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}button.jsx-7aa4d68431cc71d8{padding:12px 20px;cursor:pointer;background-color:#000;color:#fff;border:none;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;font-size:14px;-webkit-transition:background-color.3s ease;-moz-transition:background-color.3s ease;-o-transition:background-color.3s ease;transition:background-color.3s ease}button.jsx-7aa4d68431cc71d8:hover{background-color:#0056b3}.login-button.jsx-7aa4d68431cc71d8{padding:12px 20px;cursor:pointer;background-color:#0f4c49;color:#fff;border:none;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;text-decoration:none;-webkit-transition:background-color.3s ease;-moz-transition:background-color.3s ease;-o-transition:background-color.3s ease;transition:background-color.3s ease}.login-button.jsx-7aa4d68431cc71d8:hover{background-color:#0056b3}input.jsx-7aa4d68431cc71d8{padding:10px;width:320px;border:1px solid#ccc;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;margin-right:10px}.login-form.jsx-7aa4d68431cc71d8{text-align:center;margin-top:20px}.button-container.jsx-7aa4d68431cc71d8{margin-top:10px}label.jsx-7aa4d68431cc71d8{display:block;margin-bottom:5px}input.jsx-7aa4d68431cc71d8{padding:10px;width:300px;margin-bottom:10px}'\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\30698\\\\my-movie-app2\\\\pages\\\\signup2.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"wuQOK7xaXdVz4RMrZQhWbI751Oc=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOytCQUMrQjs7O0FBQ0U7QUFDSTtBQUNSO0FBRTdCLE1BQU1HLFFBQVE7O0lBQ1osTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNUSxjQUFjO1FBQ2xCLElBQUk7WUFDRixvREFBb0Q7WUFDcEQsTUFBTUMsV0FBVyxNQUFNUixrREFBU0EsQ0FBQywrQkFBK0I7Z0JBQzlEUyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVY7b0JBQVVFO2dCQUFTO1lBUzVDO1lBRUEsSUFBSUcsU0FBU00sRUFBRSxFQUFFO2dCQUNmLHVDQUF1QztnQkFDdkMsTUFBTUMsZUFBZSxNQUFNUCxTQUFTUSxJQUFJO2dCQUN4QyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFLEdBQUdIO2dCQUV4QiwwREFBMEQ7Z0JBQzFESSxlQUFlRjtnQkFFZixJQUFJQyxTQUFTLFFBQVE7b0JBQ25CRSxPQUFPQyxJQUFJLENBQUM7b0JBQ1pDLFFBQVFDLEdBQUcsQ0FBQztnQkFDZCxPQUFPLElBQUlMLFNBQVMsU0FBUztvQkFDM0JFLE9BQU9DLElBQUksQ0FBQztvQkFDWkMsUUFBUUMsR0FBRyxDQUFDO2dCQUNkLE9BQU87b0JBQ0xELFFBQVFFLEtBQUssQ0FBQztnQkFDaEI7WUFDRixPQUFPLElBQUloQixTQUFTaUIsTUFBTSxLQUFLLEtBQUs7Z0JBQ2xDLDZDQUE2QztnQkFDN0NDLGdCQUFnQjtZQUNsQixPQUFPLElBQUlsQixTQUFTaUIsTUFBTSxLQUFLLEtBQUs7Z0JBQ2xDLHlFQUF5RTtnQkFDekVDLGdCQUFnQjtZQUNsQixPQUFPO2dCQUNMLDhCQUE4QjtnQkFDOUJKLFFBQVFFLEtBQUssQ0FBQyw2QkFBNkJoQixTQUFTaUIsTUFBTTtZQUM1RDtRQUNGLEVBQUUsT0FBT0QsT0FBTztZQUNkLGlDQUFpQztZQUNqQ0YsUUFBUUUsS0FBSyxDQUFDLHVCQUF1QkE7UUFDdkM7SUFDRjtJQUdBLHFCQUNFLDhEQUFDRztrREFBYzs7MEJBQ2IsOERBQUNBOzBEQUFjOzBCQUNiLDRFQUFDQzs4REFBYTs4QkFBUTs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDRDswREFBYzs7a0NBQ2IsOERBQUNDOztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDRDtrRUFBYzs7MENBQ2IsOERBQUNFO2dDQUFNQyxTQUFROzswQ0FBVzs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE9BQU8vQjtnQ0FDUGdDLFVBQVUsQ0FBQ0MsSUFBTWhDLFlBQVlnQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7MENBRzdDLDhEQUFDTDtnQ0FBTUMsU0FBUTs7MENBQVc7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxPQUFPN0I7Z0NBQ1A4QixVQUFVLENBQUNDLElBQU05QixZQUFZOEIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7OzBDQUc3Qyw4REFBQ1A7MEVBQWM7MENBQ2IsNEVBQUNXO29DQUFPQyxTQUFTaEM7OzhDQUFhOzs7Ozs7Ozs7OzswQ0FFaEMsOERBQUNvQjswRUFBYzswQ0FDYiw0RUFBQ2E7Ozt3Q0FBRTtzREFBdUIsOERBQUN2QyxrREFBSUE7NENBQUN3QyxNQUFLO3NEQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUhqRjtHQTVNTXZDO0tBQUFBO0FBOE1OLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ251cDIuanM/ZTgyNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlbmFsbGFrdGlraSBhbiBkZW4gdGhlbG91bWUgbmEga2Fub3VtZSBzZWFyY2gga2FpIGFwbyBlZHdcclxuYW4gcHJvdGltYW1lIG5hIG1pbiBleGVpIHNlYXJjaCovXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuL2FwaS5qcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBTZW5kIHRoZSBjcmVkZW50aWFscyB0byB0aGUgc2VydmVyIGZvciB2YWxpZGF0aW9uXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hEYXRhKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgICAgICAgLypcclxuICAgICAgICBcIlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBcImhhaGZzZHVnYWhzXCIsXHJcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogXCJzZGhmc3VkZmdzXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgXCJcclxuICAgICAgICAqL1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgLy8gU2VydmVyIHJldHVybnMgT0sgc3RhdHVzIChlLmcuLCAyMDApXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IHsgdG9rZW4sIHJvbGUgfSA9IHJlc3BvbnNlRGF0YTtcclxuICBcclxuICAgICAgICAvLyBTdG9yZSB0aGUgYWNjZXNzIHRva2VuIHByb3ZpZGVkIGJ5IHRoZSBiYWNrZW5kIHJlc3BvbnNlXHJcbiAgICAgICAgc2V0QWNjZXNzVG9rZW4odG9rZW4pO1xyXG4gIFxyXG4gICAgICAgIGlmIChyb2xlID09PSAndXNlcicpIHtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvdXNlci1ob21lJyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gc3VjY2Vzc2Z1bCBmb3IgdXNlcicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm9sZSA9PT0gJ2FkbWluJykge1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9hZG1pbi1ob21lJyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTG9naW4gc3VjY2Vzc2Z1bCBmb3IgYWRtaW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5rbm93biByb2xlLiBMb2dpbiBmYWlsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAvLyBTZXJ2ZXIgcmV0dXJucyBhIDQwMSBzdGF0dXMgKFVuYXV0aG9yaXplZClcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJ0ludmFsaWQgY3JlZGVudGlhbHMuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgICAvLyBTZXJ2ZXIgcmV0dXJucyBhIDQwNCBzdGF0dXMgKE5vdCBGb3VuZCksIGluZGljYXRpbmcgaW5jb3JyZWN0IHVzZXJuYW1lXHJcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdVc2VybmFtZSBub3QgZm91bmQuIFBsZWFzZSBzaWduIHVwIG9yIGNyZWF0ZSBhbiBhY2NvdW50LicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvciBzdGF0dXNlc1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGZhaWxlZCB3aXRoIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBIYW5kbGUgbmV0d29yayBvciBvdGhlciBlcnJvcnNcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGxvZ2luOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPk50dWFmbGl4PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtdGV4dFwiPlxyXG4gICAgICAgICAgICA8cD5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IDxMaW5rIGhyZWY9XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2lnbnVwMlwiPlNpZ24gVXA8L0xpbms+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuYXV0aC1idXR0b25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmF1dGgtYnV0dG9ucyAubG9naW4tYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgLmhvbWUtY29udGFpbmVyIHtcclxuICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMERGREY7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VhcmNoLWJhciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNjEwMDZEO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IC8qIFNldCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHdoaXRlIGZvciB0aGUgbWFpbiBjb250ZW50ICovXHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4OyAvKiBBZGQgcGFkZGluZyB0byB0aGUgbWFpbiBjb250ZW50ICovXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIEFkZCBib3JkZXItcmFkaXVzIGZvciBhIGNsZWFuIGxvb2sgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ2luLWJ1dHRvbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEY0QzQ5O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dpbi1idXR0b246aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmxvZ2luLWZvcm0ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImZldGNoRGF0YSIsIkxpbmsiLCJMb2dpbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlTG9naW4iLCJyZXNwb25zZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwicmVzcG9uc2VEYXRhIiwianNvbiIsInRva2VuIiwicm9sZSIsInNldEFjY2Vzc1Rva2VuIiwicm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInN0YXR1cyIsInNldEVycm9yTWVzc2FnZSIsImRpdiIsImgxIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup2.js\n"));

/***/ })

});
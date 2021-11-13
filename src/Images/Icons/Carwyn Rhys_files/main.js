(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/App.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Stylesheets/App.css ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  /* background-color: #282c34; */\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n/* All content on the webpages have a constant margin */\n.content {\n  margin-left: 18vw;\n  margin-right: 18vw;\n  width: auto;\n}", "",{"version":3,"sources":["webpack://src/Stylesheets/App.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE;IACE,4CAA4C;EAC9C;AACF;;AAEA;EACE,+BAA+B;EAC/B,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA,uDAAuD;AACvD;EACE,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;AACb","sourcesContent":[".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  /* background-color: #282c34; */\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n/* All content on the webpages have a constant margin */\n.content {\n  margin-left: 18vw;\n  margin-right: 18vw;\n  width: auto;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/Header.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Stylesheets/Header.css ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* The header bar (makes up socials and navigation) at the top */\n#header{\n    position: fixed;\n    min-height: 120px;\n    min-width: 100vw;\n    background-color: rgba(0,0,0,0.8);\n}\n\n/* SOCIAL MEDIA LINKS: Includes email, phone number. This is the top half of the header */\n\n#socials {\n    position: absolute;\n    width: 64vw;\n    border-bottom: white 1px solid;\n}\n\n#phoneNumberHeader{\n    margin-right: 0px;\n}\n  \n#emailHeader {\n    margin-left: 10px;\n    color: white;\n    text-decoration: none;\n}\n\n#socialIconList {\n    list-style-type: none;\n}\n\n.socialsText {\n    margin-top: 8px;\n    margin-bottom: 12px;\n    font-size: 14px;\n    float: left;\n}\n\n.socialsIcon {\n    margin-top: 8px;\n    margin-bottom: 12px;\n    font-size: 14px;\n    float: right;\n}\n\n.socialsIconListItem {\n    margin: 0px;\n    padding-left: 10px;\n    padding-right: 2px;\n    font-size: 14px;\n    float: right;\n}\n\n/* ICON STYLING */\n\n.icon {\n    margin-top: 3px;\n    padding: 0px;\n    width: 15px;\n    height: 15px;\n}\n\n#giticon {\n    margin-top: 3px;\n    width: 30px;\n    height: 15px;\n}\n\n/* NAVIGATION BAR */\n\n#navBar {\n    position: absolute;\n    margin-top: 40px;\n    width: 64vw;\n}\n\n#nameHeader {\n    margin: 6px;\n    float: left;\n    font-weight: bold;\n}\n\n#navList {\n    margin-top: 12px;\n    list-style-type: none;\n}\n\n.navListItem {\n    float: left;\n    padding-left: 5px;\n    padding-right: 2px;\n\n    /* Remove underline and color from links */\n    color: inherit;\n    text-decoration: inherit;\n}\n\n.navListItem:hover {\n    color: gray;\n}", "",{"version":3,"sources":["webpack://src/Stylesheets/Header.css"],"names":[],"mappings":"AAAA,gEAAgE;AAChE;IACI,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA,yFAAyF;;AAEzF;IACI,kBAAkB;IAClB,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,YAAY;AAChB;;AAEA,iBAAiB;;AAEjB;IACI,eAAe;IACf,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,YAAY;AAChB;;AAEA,mBAAmB;;AAEnB;IACI,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,kBAAkB;;IAElB,0CAA0C;IAC1C,cAAc;IACd,wBAAwB;AAC5B;;AAEA;IACI,WAAW;AACf","sourcesContent":["/* The header bar (makes up socials and navigation) at the top */\n#header{\n    position: fixed;\n    min-height: 120px;\n    min-width: 100vw;\n    background-color: rgba(0,0,0,0.8);\n}\n\n/* SOCIAL MEDIA LINKS: Includes email, phone number. This is the top half of the header */\n\n#socials {\n    position: absolute;\n    width: 64vw;\n    border-bottom: white 1px solid;\n}\n\n#phoneNumberHeader{\n    margin-right: 0px;\n}\n  \n#emailHeader {\n    margin-left: 10px;\n    color: white;\n    text-decoration: none;\n}\n\n#socialIconList {\n    list-style-type: none;\n}\n\n.socialsText {\n    margin-top: 8px;\n    margin-bottom: 12px;\n    font-size: 14px;\n    float: left;\n}\n\n.socialsIcon {\n    margin-top: 8px;\n    margin-bottom: 12px;\n    font-size: 14px;\n    float: right;\n}\n\n.socialsIconListItem {\n    margin: 0px;\n    padding-left: 10px;\n    padding-right: 2px;\n    font-size: 14px;\n    float: right;\n}\n\n/* ICON STYLING */\n\n.icon {\n    margin-top: 3px;\n    padding: 0px;\n    width: 15px;\n    height: 15px;\n}\n\n#giticon {\n    margin-top: 3px;\n    width: 30px;\n    height: 15px;\n}\n\n/* NAVIGATION BAR */\n\n#navBar {\n    position: absolute;\n    margin-top: 40px;\n    width: 64vw;\n}\n\n#nameHeader {\n    margin: 6px;\n    float: left;\n    font-weight: bold;\n}\n\n#navList {\n    margin-top: 12px;\n    list-style-type: none;\n}\n\n.navListItem {\n    float: left;\n    padding-left: 5px;\n    padding-right: 2px;\n\n    /* Remove underline and color from links */\n    color: inherit;\n    text-decoration: inherit;\n}\n\n.navListItem:hover {\n    color: gray;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/Homepage.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Stylesheets/Homepage.css ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#backgroundpic {\n    /* max-height: 100vw;\n    width: 100%; */\n    flex-shrink: 0;\n    min-width: 100%;\n    min-height: 100%\n}\n\n.background-wrapper {\n    max-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden\n}\n\n#firstScreen {\n    height: 200px;\n    position: absolute;\n    color: black\n}\n\n#getStarted {\n    position: absolute;\n    justify-content: center;\n    align-items: center;\n    color: black;\n    background-color: transparent;\n    border: black solid 1px;\n    margin-top: 28%;\n}\n\n#getStarted:hover {\n    background-color: lightblue;\n}\n\n#buttonLink {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}", "",{"version":3,"sources":["webpack://src/Stylesheets/Homepage.css"],"names":[],"mappings":"AAAA;IACI;kBACc;IACd,cAAc;IACd,eAAe;IACf;AACJ;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB;AACJ;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB;AACJ;;AAEA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,6BAA6B;IAC7B,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB","sourcesContent":["#backgroundpic {\n    /* max-height: 100vw;\n    width: 100%; */\n    flex-shrink: 0;\n    min-width: 100%;\n    min-height: 100%\n}\n\n.background-wrapper {\n    max-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden\n}\n\n#firstScreen {\n    height: 200px;\n    position: absolute;\n    color: black\n}\n\n#getStarted {\n    position: absolute;\n    justify-content: center;\n    align-items: center;\n    color: black;\n    background-color: transparent;\n    border: black solid 1px;\n    margin-top: 28%;\n}\n\n#getStarted:hover {\n    background-color: lightblue;\n}\n\n#buttonLink {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/index.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Stylesheets/index.css ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", "",{"version":3,"sources":["webpack://src/Stylesheets/index.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _Stylesheets_App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stylesheets/App.css */ "./src/Stylesheets/App.css");
/* harmony import */ var _Stylesheets_App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Stylesheets_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Homepage.js */ "./src/Components/Homepage.js");
/* harmony import */ var _Components_HeaderBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/HeaderBar */ "./src/Components/HeaderBar.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/carwyn/development/portfolio_website/my-app/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();









function App() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    document.title = "Carwyn Rhys";
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "App App-header",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Components_HeaderBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Routes"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
          path: "/",
          element: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Components_Homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 36
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_s(App, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/HeaderBar.js":
/*!*************************************!*\
  !*** ./src/Components/HeaderBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Stylesheets_Header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Stylesheets/Header.css */ "./src/Stylesheets/Header.css");
/* harmony import */ var _Stylesheets_Header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Stylesheets_Header_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Images_Icons_fb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/Icons/fb.png */ "./src/Images/Icons/fb.png");
/* harmony import */ var _Images_Icons_linkedin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/Icons/linkedin.png */ "./src/Images/Icons/linkedin.png");
/* harmony import */ var _Images_Icons_git_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Images/Icons/git.png */ "./src/Images/Icons/git.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/carwyn/development/portfolio_website/my-app/src/Components/HeaderBar.js";







class HeaderBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      id: "header",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        id: "socials",
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          id: "phoneNumberHeader",
          className: "socialsText",
          children: "+1 585 298 9794"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          id: "emailHeader",
          className: "socialsText",
          href: "mailto:carwyncollinsworth@gmail.com",
          children: "carwyncollinsworth@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
          id: "socialIconList",
          className: "socialsIcon",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            className: "socialsIconListItem",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              href: "https://www.facebook.com/carwyn.collinsworth.71/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                className: "icon",
                alt: "facebook",
                src: _Images_Icons_fb_png__WEBPACK_IMPORTED_MODULE_2__["default"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 120
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 61
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            className: "socialsIconListItem",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              href: "https://github.com/carwyn987",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                id: "giticon",
                alt: "github",
                src: _Images_Icons_git_png__WEBPACK_IMPORTED_MODULE_4__["default"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 100
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 61
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            className: "socialsIconListItem",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              href: "https://www.linkedin.com/in/carwyn-c-439b29109/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                className: "icon",
                alt: "linkedin",
                src: _Images_Icons_linkedin_png__WEBPACK_IMPORTED_MODULE_3__["default"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 119
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 61
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        id: "navBar",
        className: "content",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
          id: "nameHeader",
          children: "Carwyn Collinsworth"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
          id: "navList",
          className: "socialsIcon",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            className: "navListItem",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              className: "navListItem",
              href: "/",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 53
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            className: "navListItem",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              className: "navListItem",
              href: "/Resume",
              children: "Resume"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 53
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            className: "navListItem",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              className: "navListItem",
              href: "/Projects",
              children: "Projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 53
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            className: "navListItem",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              className: "navListItem",
              href: "/Notes",
              children: "University Assignments and Notes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 53
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
            className: "navListItem",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              className: "navListItem",
              href: "/Contact",
              children: "Contact"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 53
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HeaderBar);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Components/Homepage.js":
/*!************************************!*\
  !*** ./src/Components/Homepage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Images_Nelson2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/Nelson2.jpg */ "./src/Images/Nelson2.jpg");
/* harmony import */ var _Stylesheets_Homepage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Stylesheets/Homepage.css */ "./src/Stylesheets/Homepage.css");
/* harmony import */ var _Stylesheets_Homepage_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Stylesheets_Homepage_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/carwyn/development/portfolio_website/my-app/src/Components/Homepage.js";






class Homepage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "background-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
          id: "backgroundpic",
          src: _Images_Nelson2_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
          alt: "papi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
          id: "buttonLink",
          href: "#starterPage",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            id: "getStarted",
            variant: "outlined",
            children: "Get Started!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        id: "firstScreen",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
          id: "starterPage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
          children: "hi"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Images/Icons/fb.png":
/*!*********************************!*\
  !*** ./src/Images/Icons/fb.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/Images/Icons/git.png":
/*!**********************************!*\
  !*** ./src/Images/Icons/git.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/Images/Icons/linkedin.png":
/*!***************************************!*\
  !*** ./src/Images/Icons/linkedin.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABKNAAASjQEphQ1dAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAvFQTFRF////AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3dPNe8AAAAPp0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMU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");

/***/ }),

/***/ "./src/Images/Nelson2.jpg":
/*!********************************!*\
  !*** ./src/Images/Nelson2.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Nelson2.c4359589.jpg");

/***/ }),

/***/ "./src/Stylesheets/App.css":
/*!*********************************!*\
  !*** ./src/Stylesheets/App.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/App.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Stylesheets/Header.css":
/*!************************************!*\
  !*** ./src/Stylesheets/Header.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/Header.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/Header.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/Header.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Stylesheets/Homepage.css":
/*!**************************************!*\
  !*** ./src/Stylesheets/Homepage.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Homepage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/Homepage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Homepage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/Homepage.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Homepage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/Homepage.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/Stylesheets/index.css":
/*!***********************************!*\
  !*** ./src/Stylesheets/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/index.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Stylesheets/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Stylesheets_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stylesheets/index.css */ "./src/Stylesheets/index.css");
/* harmony import */ var _Stylesheets_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Stylesheets_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/carwyn/development/portfolio_website/my-app/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(_ref => {
      let {
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB
      } = _ref;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/carwyn/development/portfolio_website/my-app/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/carwyn/development/portfolio_website/my-app/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /home/carwyn/development/portfolio_website/my-app/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/carwyn/development/portfolio_website/my-app/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map
webpackJsonp([19],{

/***/ 1271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EXPAND_MENU; });
/*
 *
 * NavigationContainer constants
 *
 */

var EXPAND_MENU = 'app/NavigationContainer/EXPAND_MENU';

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_initialState__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(1271);
/*
 *
 * NavigationContainer reducer
 *
 */





function navigationContainerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])(__WEBPACK_IMPORTED_MODULE_1__shared_initialState__["a" /* default */].sidemenu);
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* EXPAND_MENU */]:
      return state.set('expanded', action.open);
    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (navigationContainerReducer);

/***/ })

});
//# sourceMappingURL=19.js.map
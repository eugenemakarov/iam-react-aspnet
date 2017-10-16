webpackJsonp([50],{

/***/ 1101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REQUEST_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REQUEST_USER_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REQUEST_USER_FAILED; });
/*
 *
 * HeaderContainer constants
 *
 */

var REQUEST_USER = 'app/HeaderContainer/REQUEST_USER';
var REQUEST_USER_SUCCEEDED = 'app/HeaderContainer/REQUEST_USER_SUCCEEDED';
var REQUEST_USER_FAILED = 'app/HeaderContainer/REQUEST_USER_FAILED';

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_initialState__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(1101);
/*
 *
 * HeaderContainer reducer
 *
 */






function headerContainerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])(__WEBPACK_IMPORTED_MODULE_1__shared_initialState__["a" /* default */].header);
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* REQUEST_USER_SUCCEEDED */]:
      return state.set('currentUser', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])(action.user));
    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (headerContainerReducer);

/***/ })

});
//# sourceMappingURL=50.js.map
webpackJsonp([44],{

/***/ 1553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(1554);
/*
 *
 * ProfileContainer reducer
 *
 */




var initialState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({});

function profileContainerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* DEFAULT_ACTION */]:
      return state;
    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (profileContainerReducer);

/***/ }),

/***/ 1554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_ACTION; });
/*
 *
 * ProfileContainer constants
 *
 */

var DEFAULT_ACTION = 'app/ProfileContainer/DEFAULT_ACTION';

/***/ })

});
//# sourceMappingURL=44.js.map
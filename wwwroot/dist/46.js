webpackJsonp([46],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_initialState__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(857);
/*
 *
 * UserDetailsContainer reducer
 *
 */






function userDetailsContainerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])(__WEBPACK_IMPORTED_MODULE_1__shared_initialState__["a" /* default */].userDetails);
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* REQUEST_USER_SUCCEEDED */]:
      return state.set('userDetails', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])(action.details));
    case __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* REQUEST_APPLICATION_SUCCEEDED */]:
      return state.set('applicationDetails', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])(action.details)).updateIn(['userDetails', 'applications'], function (arr) {
        return arr.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({
          applicationId: action.details.id,
          clientId: action.details.clientId,
          displayName: action.details.displayName,
          applicationIsActive: action.details.isActive,
          userApplicationIsActive: true //default once added
        }));
      });
    case __WEBPACK_IMPORTED_MODULE_2__constants__["i" /* REMOVE_APPLICATION */]:
      return state.updateIn(['userDetails', 'applications'], function (arr) {
        return arr.filter(function (el) {
          return el.get('applicationId') !== action.id;
        });
      });
    case __WEBPACK_IMPORTED_MODULE_2__constants__["n" /* REQUEST_UPLOAD_PICTURE_SUCCEEDED */]:
      return state.setIn(['userDetails', 'profilePictureUrl'], action.image);
    case __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* RESET_USER */]:
      return state.set('userDetails', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({ 'applications': [] }));
    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (userDetailsContainerReducer);

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REQUEST_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REQUEST_USER_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REQUEST_USER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REQUEST_APPLICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REQUEST_APPLICATION_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REQUEST_APPLICATION_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ADD_APPLICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REMOVE_APPLICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return REQUEST_CHANGE_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return REQUEST_CHANGE_PASSWORD_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return REQUEST_CHANGE_PASSWORD_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return REQUEST_UPLOAD_PICTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return REQUEST_UPLOAD_PICTURE_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return REQUEST_UPLOAD_PICTURE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return REQUEST_SAVE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return REQUEST_SAVE_USER_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return REQUEST_SAVE_USER_FAILED; });
/*
 *
 * UserDetailsContainer constants
 *
 */

var REQUEST_USER = 'app/UserDetailsContainer/REQUEST_USER';
var REQUEST_USER_SUCCEEDED = 'app/UserDetailsContainer/REQUEST_USER_SUCCEEDED';
var REQUEST_USER_FAILED = 'app/UserDetailsContainer/REQUEST_USER_FAILED';
var RESET_USER = 'app/UserDetailsContainer/RESET_USER';

var REQUEST_APPLICATION = 'app/UserDetailsContainer/REQUEST_APPLICATION';
var REQUEST_APPLICATION_SUCCEEDED = 'app/UserDetailsContainer/REQUEST_APPLICATION_SUCCEEDED';
var REQUEST_APPLICATION_FAILED = 'app/UserDetailsContainer/REQUEST_APPLICATION_FAILED';

var ADD_APPLICATION = 'app/UserDetailsContainer/ADD_APPLICATION';
var REMOVE_APPLICATION = 'app/UserDetailsContainer/REMOVE_APPLICATION';

var REQUEST_CHANGE_PASSWORD = 'app/UserDetailsContainer/REQUEST_CHANGE_PASSWORD';
var REQUEST_CHANGE_PASSWORD_SUCCEEDED = 'app/UserDetailsContainer/REQUEST_CHANGE_PASSWORD_SUCCEEDED';
var REQUEST_CHANGE_PASSWORD_FAILED = 'app/UserDetailsContainer/REQUEST_CHANGE_PASSWORD_FAILED';

var REQUEST_UPLOAD_PICTURE = 'app/UserDetailsContainer/REQUEST_UPLOAD_PICTURE';
var REQUEST_UPLOAD_PICTURE_SUCCEEDED = 'app/UserDetailsContainer/REQUEST_UPLOAD_PICTURE_SUCCEEDED';
var REQUEST_UPLOAD_PICTURE_FAILED = 'app/UserDetailsContainer/REQUEST_UPLOAD_PICTURE_FAILED';

var REQUEST_SAVE_USER = 'app/UserDetailsContainer/REQUEST_SAVE_USER';
var REQUEST_SAVE_USER_SUCCEEDED = 'app/UserDetailsContainer/REQUEST_SAVE_USER_SUCCEEDED';
var REQUEST_SAVE_USER_FAILED = 'app/UserDetailsContainer/REQUEST_SAVE_USER_FAILED';

/***/ })

});
//# sourceMappingURL=46.js.map
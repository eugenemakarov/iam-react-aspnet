webpackJsonp([20],{

/***/ 1102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REQUEST_APP_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REQUEST_APP_INFO_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REQUEST_APP_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOGIN_REQUEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOGIN_REQUEST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REQUEST_USER_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return USER_IMAGE_SUCCESS; });
/*
 *
 * LoginContainer constants
 *
 */

var REQUEST_APP_INFO = 'app/LoginContainer/REQUEST_APP_INFO';
var REQUEST_APP_INFO_SUCCEEDED = 'app/LoginContainer/REQUEST_APP_INFO_SUCCEEDED';
var REQUEST_APP_INFO_FAILURE = 'app/LoginContainer/REQUEST_APP_INFO_FAILURE';

var LOGIN_REQUEST = 'app/LoginContainer/LOGIN_REQUEST';
var LOGIN_REQUEST_SUCCESS = 'app/LoginContainer/LOGIN_REQUEST_SUCCESS';
var LOGIN_REQUEST_FAILURE = 'app/LoginContainer/LOGIN_REQUEST_FAILURE';

var REQUEST_USER_IMAGE = 'app/LoginContainer/REQUEST_USER_IMAGE';
var USER_IMAGE_SUCCESS = 'app/LoginContainer/USER_IMAGE_SUCCESS';

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_initialState__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_cookie_provider__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(1102);
/*
 *
 * LoginContainer reducer
 *
 */







function loginContainerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])(__WEBPACK_IMPORTED_MODULE_1__shared_initialState__["a" /* default */].loginContainer);
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* REQUEST_APP_INFO_SUCCEEDED */]:
      return state.update('appInfo', function (appInfo) {
        return appInfo = action.appInfo;
      });
    case __WEBPACK_IMPORTED_MODULE_3__constants__["e" /* LOGIN_REQUEST_SUCCESS */]:
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_services_cookie_provider__["c" /* createCookie */])("tk", action.tokenInfo.tokenId, 1);
      action.userInfo.rememberMe == true ? localStorage.setItem('userEmail', JSON.stringify({ userEmail: action.userInfo.userEmail })) : localStorage.removeItem('userEmail');
      var redirectPath = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_services_cookie_provider__["a" /* getCookie */])("redirectPath");
      window.location.href = redirectPath ? redirectPath : "/dashboard";
      return state.update('isFailed', function (isFailed) {
        return isFailed = false;
      });
    case __WEBPACK_IMPORTED_MODULE_3__constants__["f" /* LOGIN_REQUEST_FAILURE */]:
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_services_cookie_provider__["a" /* getCookie */])("tk")) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_services_cookie_provider__["b" /* eraseCookie */])("tk");
      localStorage.getItem('userEmail') != undefined ? localStorage.removeItem('userEmail') : '';
      return state.update('isFailed', function (isFailed) {
        return isFailed = true;
      });
    case __WEBPACK_IMPORTED_MODULE_3__constants__["h" /* USER_IMAGE_SUCCESS */]:
      return state.update('userImgURL', function (imgURL) {
        return imgURL = action.imageUrl;
      });
    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (loginContainerReducer);

/***/ })

});
//# sourceMappingURL=20.js.map
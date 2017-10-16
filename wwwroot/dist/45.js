webpackJsonp([45],{

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REQUEST_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REQUEST_USERS_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REQUEST_USERS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REQUEST_DELETE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REQUEST_DELETE_USER_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REQUEST_DELETE_USER_FAILED; });
/*
 *
 * UsersListContainer constants
 *
 */

var REQUEST_USERS = 'app/Users/UsersListContainer/REQUEST_USERS';
var REQUEST_USERS_SUCCEEDED = 'app/Users/UsersListContainer/REQUEST_USERS_SUCCEEDED';
var REQUEST_USERS_FAILED = 'app/Users/UsersListContainer/REQUEST_USERS_FAILED';
var FETCH_USERS = 'app/UsersListContainer/FETCH_USERS';

var REQUEST_DELETE_USER = 'app/Users/UsersListContainer/REQUEST_DELETE_USER';
var REQUEST_DELETE_USER_SUCCEEDED = 'app/Users/UsersListContainer/REQUEST_DELETE_USER_SUCCEEDED';
var REQUEST_DELETE_USER_FAILED = 'app/Users/UsersListContainer/REQUEST_DELETE_USER_FAILED';

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_initialState__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(1036);
/*
 *
 * UsersListContainer reducer
 *
 */



var findIndex = __webpack_require__(280);



function usersListContainerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])(__WEBPACK_IMPORTED_MODULE_1__shared_initialState__["a" /* default */].usersList);
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* REQUEST_USERS_SUCCEEDED */]:
      return state.set('list', action.users).update('totalUsers', function (totalUsers) {
        return action.totalUsers;
      });
    case __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* REQUEST_DELETE_USER_SUCCEEDED */]:
      var index = state.get('list').findIndex(function (item) {
        return item.id === action.id;
      });
      return state.set('list', state.get('list').filter(function (_, item) {
        return item !== index;
      })); // '_' is used for current item in array.
    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (usersListContainerReducer);

/***/ })

});
//# sourceMappingURL=45.js.map
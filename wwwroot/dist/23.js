webpackJsonp([23],{

/***/ 1034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REQUEST_APPLICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REQUEST_APPLICATIONS_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REQUEST_APPLICATIONS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_APPLICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REQUEST_DELETE_APPLICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REQUEST_DELETE_APPLICATION_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REQUEST_DELETE_APPLICATION_FAILED; });
/*
 *
 * ApplicationsListContainer constants
 *
 */

var REQUEST_APPLICATIONS = 'app/ApplicationsListContainer/REQUEST_APPLICATIONS';
var REQUEST_APPLICATIONS_SUCCEEDED = 'app/ApplicationsListContainer/REQUEST_APPLICATIONS_SUCCEEDED';
var REQUEST_APPLICATIONS_FAILED = 'app/ApplicationsListContainer/REQUEST_APPLICATIONS_FAILED';
var FETCH_APPLICATIONS = 'app/ApplicationsListContainer/FETCH_APPLICATIONS';

var REQUEST_DELETE_APPLICATION = 'app/ApplicationsListContainer/REQUEST_DELETE_APPLICATION';
var REQUEST_DELETE_APPLICATION_SUCCEEDED = 'app/ApplicationsListContainer/REQUEST_DELETE_APPLICATION_SUCCEEDED';
var REQUEST_DELETE_APPLICATION_FAILED = 'app/ApplicationsListContainer/REQUEST_DELETE_APPLICATION_FAILED';

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_initialState__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(1034);
/*
 *
 * ApplicationsListContainer reducer
 *
 */






function applicationsListContainerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])(__WEBPACK_IMPORTED_MODULE_1__shared_initialState__["a" /* default */].applicationsList);
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* REQUEST_APPLICATIONS_SUCCEEDED */]:
      return state.set('list', action.applications).update('totalApplications', function (totalApplications) {
        return action.totalApplications;
      });
    case __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* REQUEST_DELETE_APPLICATION_SUCCEEDED */]:
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

/* harmony default export */ __webpack_exports__["default"] = (applicationsListContainerReducer);

/***/ })

});
//# sourceMappingURL=23.js.map
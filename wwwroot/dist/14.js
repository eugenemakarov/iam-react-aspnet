webpackJsonp([14],{

/***/ 1104:
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

/***/ 1251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["requestUser"] = requestUser;
/* harmony export (immutable) */ __webpack_exports__["requestUserSucceeded"] = requestUserSucceeded;
/* harmony export (immutable) */ __webpack_exports__["requestUserFailed"] = requestUserFailed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1104);
/*
 *
 * HeaderContainer actions
 *
 */



function requestUser() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* REQUEST_USER */]
  };
}

function requestUserSucceeded(user) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* REQUEST_USER_SUCCEEDED */],
    user: user
  };
}

function requestUserFailed(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* REQUEST_USER_FAILED */],
    message: message
  };
}

/***/ }),

/***/ 1364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchUserSaga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(1251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__ = __webpack_require__(786);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchUser),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(fetchUserSaga);








// Individual exports for testing
function fetchUserFromServer() {
  return fetch(__WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'users/currentuser').then(function (res) {
    return res.json();
  });
}

function fetchUser() {
  var user;
  return regeneratorRuntime.wrap(function fetchUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* call */])(fetchUserFromServer);

        case 3:
          user = _context.sent;

          if (!user) {
            _context.next = 9;
            break;
          }

          _context.next = 7;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestUserSucceeded"])(user));

        case 7:
          _context.next = 10;
          break;

        case 9:
          window.location.href = "/#/signin";

        case 10:
          _context.next = 17;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context['catch'](0);
          _context.next = 16;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestUserFailed"])(_context.t0.message));

        case 16:
          window.location.href = "/#/signin";

        case 17:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 12]]);
}

// Individual exports for testing
function fetchUserSaga() {
  return regeneratorRuntime.wrap(function fetchUserSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.delegateYield(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* REQUEST_USER */], fetchUser), 't0', 1);

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

/* harmony default export */ __webpack_exports__["a"] = (fetchUserSaga);

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetchUserSaga__ = __webpack_require__(1364);


// All sagas to be loaded
/* harmony default export */ __webpack_exports__["default"] = ([__WEBPACK_IMPORTED_MODULE_0__fetchUserSaga__["a" /* default */]]);

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiSettings; });
var ApiSettings = { "searchPrefix": "http://emanage-dev-iam-api.azurewebsites.net/api/", "listPrefix": "http://emanage-dev-iam-api.azurewebsites.net/api/lists/", "filesPrefix": "http://emanage-dev-iam-api.azurewebsites.net/api/files/", "suffix": "iam-admin-test" };

/***/ })

});
//# sourceMappingURL=14.js.map
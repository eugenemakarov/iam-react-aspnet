webpackJsonp([12],{

/***/ 1105:
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

/***/ 1252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["requestAppInfo"] = requestAppInfo;
/* harmony export (immutable) */ __webpack_exports__["requestAppInfoSucceeded"] = requestAppInfoSucceeded;
/* harmony export (immutable) */ __webpack_exports__["requestAppInfoFailed"] = requestAppInfoFailed;
/* harmony export (immutable) */ __webpack_exports__["loginRequest"] = loginRequest;
/* harmony export (immutable) */ __webpack_exports__["loginSuccess"] = loginSuccess;
/* harmony export (immutable) */ __webpack_exports__["loginFailure"] = loginFailure;
/* harmony export (immutable) */ __webpack_exports__["requestUserImage"] = requestUserImage;
/* harmony export (immutable) */ __webpack_exports__["userImageSuccess"] = userImageSuccess;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1105);
/*
 *
 * LoginContainer actions
 *
 */



function requestAppInfo() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* REQUEST_APP_INFO */]
  };
}

function requestAppInfoSucceeded(appInfo) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* REQUEST_APP_INFO_SUCCEEDED */],
    appInfo: appInfo
  };
}

function requestAppInfoFailed(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* REQUEST_APP_INFO_FAILURE */],
    message: message
  };
}

function loginRequest(payload) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* LOGIN_REQUEST */],
    payload: payload
  };
}

function loginSuccess(tokenInfo, userInfo) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* LOGIN_REQUEST_SUCCESS */],
    tokenInfo: tokenInfo,
    userInfo: userInfo
  };
}

function loginFailure(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* LOGIN_REQUEST_FAILURE */],
    message: message
  };
}

function requestUserImage(userEmail) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* REQUEST_USER_IMAGE */],
    userEmail: userEmail
  };
}

function userImageSuccess(imageUrl) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* USER_IMAGE_SUCCESS */],
    imageUrl: imageUrl
  };
}

/***/ }),

/***/ 1366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (immutable) */ __webpack_exports__["a"] = fetchAppInfoSaga;
/* harmony export (immutable) */ __webpack_exports__["b"] = loginSaga;
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchUserImageURLSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(1252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__ = __webpack_require__(786);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchAppInfo),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(fetchAppInfoSaga),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(loginUser),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(loginSaga),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(userImage),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(fetchUserImageURLSaga);

//import { take, call, put, select } from 'redux-saga/effects';







// Individual exports for testing
function fetchAppInfoFromServer() {
  return fetch(__WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'applications/' + __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].suffix).then(function (res) {
    return res.json();
  });
}

function fetchAppInfo() {
  var appInfo;
  return regeneratorRuntime.wrap(function fetchAppInfo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* call */])(fetchAppInfoFromServer);

        case 3:
          appInfo = _context.sent;
          _context.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestAppInfoSucceeded"])(appInfo));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestAppInfoFailed"])(_context.t0.message));

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

// Individual exports for testing
function fetchAppInfoSaga() {
  return regeneratorRuntime.wrap(function fetchAppInfoSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.delegateYield(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* REQUEST_APP_INFO */], fetchAppInfo), 't0', 1);

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function loginInfoToServer(hash) {
  return fetch(__WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'auth/login/' + __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].suffix, {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + hash
    }
  }).then(function (response) {
    return response.json();
  });
}

function loginUser(userInfo) {
  var hash, tokenInfo;
  return regeneratorRuntime.wrap(function loginUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          hash = new Buffer(userInfo.payload.username + ':' + userInfo.payload.password).toString('base64');
          _context3.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* call */])(loginInfoToServer, hash);

        case 4:
          tokenInfo = _context3.sent;
          _context3.next = 7;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["loginSuccess"])(tokenInfo, { rememberMe: userInfo.payload.rememberMe, userEmail: userInfo.payload.username }));

        case 7:
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3['catch'](0);
          _context3.next = 13;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["loginFailure"])(_context3.t0.message));

        case 13:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[0, 9]]);
}

function loginSaga() {
  return regeneratorRuntime.wrap(function loginSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.delegateYield(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["b" /* takeEvery */])(__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* LOGIN_REQUEST */], loginUser), 't0', 1);

        case 1:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

function fetchUserImageFromServer(info) {
  console.log(info.userEmail);
  return fetch(__WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'users/profile?email=' + info.userEmail).then(function (res) {
    return res.json();
  });
}

function userImage(info) {
  var imageURL;
  return regeneratorRuntime.wrap(function userImage$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* call */])(fetchUserImageFromServer, info);

        case 3:
          imageURL = _context5.sent;
          _context5.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["userImageSuccess"])(imageURL));

        case 6:
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5['catch'](0);

          console.log(_context5.t0.message);

        case 11:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this, [[0, 8]]);
}

function fetchUserImageURLSaga() {
  return regeneratorRuntime.wrap(function fetchUserImageURLSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.delegateYield(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_0__constants__["g" /* REQUEST_USER_IMAGE */], userImage), 't0', 1);

        case 1:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1555).Buffer))

/***/ }),

/***/ 1555:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(22);

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_sagas__ = __webpack_require__(1366);
//import { take, call, put, select } from 'redux-saga/effects';


// All sagas to be loaded
/* harmony default export */ __webpack_exports__["default"] = ([__WEBPACK_IMPORTED_MODULE_0__login_sagas__["a" /* fetchAppInfoSaga */], __WEBPACK_IMPORTED_MODULE_0__login_sagas__["b" /* loginSaga */], __WEBPACK_IMPORTED_MODULE_0__login_sagas__["c" /* fetchUserImageURLSaga */]]);

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiSettings; });
var ApiSettings = { "searchPrefix": "http://emanage-dev-iam-api.azurewebsites.net/api/", "listPrefix": "http://emanage-dev-iam-api.azurewebsites.net/api/lists/", "filesPrefix": "http://emanage-dev-iam-api.azurewebsites.net/api/files/", "suffix": "iam-admin-test" };

/***/ })

});
//# sourceMappingURL=12.js.map
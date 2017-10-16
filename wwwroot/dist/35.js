webpackJsonp([35],{

/***/ 1035:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["requestUser"] = requestUser;
/* harmony export (immutable) */ __webpack_exports__["requestUserSucceeded"] = requestUserSucceeded;
/* harmony export (immutable) */ __webpack_exports__["requestUserFailed"] = requestUserFailed;
/* harmony export (immutable) */ __webpack_exports__["resetUser"] = resetUser;
/* harmony export (immutable) */ __webpack_exports__["requestApplication"] = requestApplication;
/* harmony export (immutable) */ __webpack_exports__["requestApplicationSucceeded"] = requestApplicationSucceeded;
/* harmony export (immutable) */ __webpack_exports__["requestApplicationFailed"] = requestApplicationFailed;
/* harmony export (immutable) */ __webpack_exports__["addApplication"] = addApplication;
/* harmony export (immutable) */ __webpack_exports__["removeApplication"] = removeApplication;
/* harmony export (immutable) */ __webpack_exports__["requestChangePassword"] = requestChangePassword;
/* harmony export (immutable) */ __webpack_exports__["requestChangePasswordSucceeded"] = requestChangePasswordSucceeded;
/* harmony export (immutable) */ __webpack_exports__["requestChangePasswordFailed"] = requestChangePasswordFailed;
/* harmony export (immutable) */ __webpack_exports__["requestUploadPicture"] = requestUploadPicture;
/* harmony export (immutable) */ __webpack_exports__["requestUploadPictureSucceeded"] = requestUploadPictureSucceeded;
/* harmony export (immutable) */ __webpack_exports__["requestUploadPictureFailed"] = requestUploadPictureFailed;
/* harmony export (immutable) */ __webpack_exports__["requestSaveUser"] = requestSaveUser;
/* harmony export (immutable) */ __webpack_exports__["requestSaveUserSucceeded"] = requestSaveUserSucceeded;
/* harmony export (immutable) */ __webpack_exports__["requestSaveUserFailed"] = requestSaveUserFailed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(857);
/*
 *
 * UserDetailsContainer actions
 *
 */



function requestUser(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* REQUEST_USER */],
    id: id
  };
}

function requestUserSucceeded(details) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* REQUEST_USER_SUCCEEDED */],
    details: details
  };
}

function requestUserFailed(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* REQUEST_USER_FAILED */],
    message: message
  };
}

function resetUser() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* RESET_USER */]
  };
}

function requestApplication(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* REQUEST_APPLICATION */],
    id: id
  };
}

function requestApplicationSucceeded(details) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* REQUEST_APPLICATION_SUCCEEDED */],
    details: details
  };
}

function requestApplicationFailed(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* REQUEST_APPLICATION_FAILED */],
    message: message
  };
}

function addApplication(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* ADD_APPLICATION */],
    id: id
  };
}

function removeApplication(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* REMOVE_APPLICATION */],
    id: id
  };
}

function requestChangePassword(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["j" /* REQUEST_CHANGE_PASSWORD */],
    data: data
  };
}

function requestChangePasswordSucceeded(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["k" /* REQUEST_CHANGE_PASSWORD_SUCCEEDED */],
    message: message
  };
}

function requestChangePasswordFailed(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["l" /* REQUEST_CHANGE_PASSWORD_FAILED */],
    message: message
  };
}

function requestUploadPicture(id, data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["m" /* REQUEST_UPLOAD_PICTURE */],
    id: id,
    data: data
  };
}

function requestUploadPictureSucceeded(image) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["n" /* REQUEST_UPLOAD_PICTURE_SUCCEEDED */],
    image: image
  };
}

function requestUploadPictureFailed(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* REQUEST_UPLOAD_PICTURE_FAILED */],
    message: message
  };
}

function requestSaveUser(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["p" /* REQUEST_SAVE_USER */],
    data: data
  };
}

function requestSaveUserSucceeded(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["q" /* REQUEST_SAVE_USER_SUCCEEDED */],
    message: message
  };
}

function requestSaveUserFailed(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["r" /* REQUEST_SAVE_USER_FAILED */],
    message: message
  };
}

/***/ }),

/***/ 1370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addApplicationSaga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_toastr__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchApplication),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(addApplicationSaga);








function fetchApplicationFromServer(id) {
  return fetch(__WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'admin/applications/' + id).then(function (response) {
    return response.json();
  });
}

function fetchApplication(action) {
  var id, details;
  return regeneratorRuntime.wrap(function fetchApplication$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = action.id;
          _context.prev = 1;
          _context.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["a" /* call */])(fetchApplicationFromServer, id);

        case 4:
          details = _context.sent;
          _context.next = 7;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestApplicationSucceeded"])(details));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context['catch'](1);
          _context.next = 13;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestApplicationFailed"])(_context.t0));

        case 13:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[1, 9]]);
}

function addApplicationSaga() {
  return regeneratorRuntime.wrap(function addApplicationSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.delegateYield(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_2__constants__["h" /* ADD_APPLICATION */], fetchApplication), 't0', 1);

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

// All sagas to be loaded
/* harmony default export */ __webpack_exports__["a"] = (addApplicationSaga);

/***/ }),

/***/ 1371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export changePasswordSaga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_toastr__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(changePassword),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(changePasswordSaga);








function changePasswordOnServer(data) {
  return fetch(__WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'admin/users/changepassword/' + data.id, {
    method: 'PUT',
    body: '"' + data.pswd + '"',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }).then(function (res) {
    return res;
  });
}

function changePassword(action) {
  var data, sMsg, eMsg, res;
  return regeneratorRuntime.wrap(function changePassword$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = action.data;
          sMsg = 'Password changed successfully.', eMsg = 'Couldn\t update password. Please try again later...';
          _context.prev = 2;
          _context.next = 5;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["a" /* call */])(changePasswordOnServer, data);

        case 5:
          res = _context.sent;

          if (!(res && res.statusText === 'OK')) {
            _context.next = 12;
            break;
          }

          _context.next = 9;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestChangePasswordSucceeded"])());

        case 9:
          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.success(sMsg, 'Success');
          _context.next = 15;
          break;

        case 12:
          _context.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestChangePasswordFailed"])());

        case 14:
          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.error(eMsg, 'Error');

        case 15:
          _context.next = 22;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context['catch'](2);
          _context.next = 21;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestChangePasswordFailed"])(_context.t0));

        case 21:
          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.error(eMsg, 'Error');

        case 22:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[2, 17]]);
}

function changePasswordSaga() {
  return regeneratorRuntime.wrap(function changePasswordSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.delegateYield(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_2__constants__["j" /* REQUEST_CHANGE_PASSWORD */], changePassword), 't0', 1);

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

// All sagas to be loaded
/* harmony default export */ __webpack_exports__["a"] = (changePasswordSaga);

/***/ }),

/***/ 1372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchDetailsSaga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_actions__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_redux__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_config_environment__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_toastr__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_toastr__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchDetails),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(fetchList),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(fetchAll),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(fetchDetailsSaga);










function fetchDetailsFromServer(id) {
  return fetch(__WEBPACK_IMPORTED_MODULE_6__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'admin/users/' + id).then(function (response) {
    return response.json();
  });
}

function fetchListFromServer(name) {
  return fetch('http://localhost:3000/api/lists/' + name).then(function (response) {
    return response.json();
  });
}

function fetchDetails(id) {
  var details;
  return regeneratorRuntime.wrap(function fetchDetails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["a" /* call */])(fetchDetailsFromServer, id);

        case 3:
          details = _context.sent;
          _context.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestUserSucceeded"])(details));

        case 6:
          _context.next = 14;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_router_redux__["push"])('/404'));

        case 12:
          _context.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestUserFailed"])(_context.t0));

        case 14:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

function fetchList(name) {
  var list;
  return regeneratorRuntime.wrap(function fetchList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["a" /* call */])(fetchListFromServer, name);

        case 3:
          list = _context2.sent;
          _context2.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__shared_actions__["b" /* requestListSucceeded */])(name, list));

        case 6:
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2['catch'](0);

          console.log(_context2.t0);

        case 11:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 8]]);
}

function fetchAll(action) {
  var id;
  return regeneratorRuntime.wrap(function fetchAll$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = action.id;

          if (!(id && id !== 'new')) {
            _context3.next = 6;
            break;
          }

          _context3.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["d" /* fork */])(fetchDetails, id);

        case 4:
          _context3.next = 8;
          break;

        case 6:
          _context3.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["resetUser"])());

        case 8:
          _context3.next = 10;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["d" /* fork */])(fetchList, 'applications');

        case 10:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function fetchDetailsSaga() {
  return regeneratorRuntime.wrap(function fetchDetailsSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.delegateYield(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* REQUEST_USER */], fetchAll), 't0', 1);

        case 1:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this);
}

// All sagas to be loaded
/* harmony default export */ __webpack_exports__["a"] = (fetchDetailsSaga);

/***/ }),

/***/ 1373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export saveDetailsSaga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_redux__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_redux__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(saveDetails),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(saveDetailsSaga);









function saveDetailsToServer(data) {
  var url = data.id ? __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'admin/users/' + data.id : __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'admin/users';
  var method = data.id ? 'PUT' : 'POST';

  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (response) {
    return response.json();
  });
}

function saveDetails(action) {
  var data, sMsg, eMsg, res;
  return regeneratorRuntime.wrap(function saveDetails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          data = action.data;
          sMsg = 'New user created.', eMsg = 'Couldn\'t create new user.';


          if (data.id) {
            sMsg = 'The user successfully updated.';
            eMsg = 'Couldn\'t update the user';
          }

          _context.prev = 3;
          _context.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["a" /* call */])(saveDetailsToServer, data);

        case 6:
          res = _context.sent;

          if (!(res && res.id)) {
            _context.next = 17;
            break;
          }

          _context.next = 10;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_router_redux__["replace"])('/users/' + res.id));

        case 10:
          _context.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestSaveUserSucceeded"])());

        case 12:
          _context.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestUser"])(res.id));

        case 14:
          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.success(sMsg, 'Success');
          _context.next = 21;
          break;

        case 17:
          _context.next = 19;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestSaveUserFailed"])());

        case 19:
          eMsg = res.message || eMsg;
          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.error(eMsg, 'Error');

        case 21:
          _context.next = 28;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context['catch'](3);
          _context.next = 27;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestSaveUserFailed"])(_context.t0));

        case 27:
          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.error(eMsg, 'Error');

        case 28:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[3, 23]]);
}

function saveDetailsSaga() {
  return regeneratorRuntime.wrap(function saveDetailsSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.delegateYield(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_2__constants__["p" /* REQUEST_SAVE_USER */], saveDetails), 't0', 1);

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

// All sagas to be loaded
/* harmony default export */ __webpack_exports__["a"] = (saveDetailsSaga);

/***/ }),

/***/ 1374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export uploadPictureSaga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_toastr__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(uploadPicture),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(uploadPictureSaga);








function uploadPictureToServer(payload) {
  return fetch(__WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'blob/images', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }).then(function (response) {
    return response.json();
  });
}

function uploadPicture(action) {
  var id, data, imgName, croppedBytes, payload, res;
  return regeneratorRuntime.wrap(function uploadPicture$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = action.id, data = action.data;
          imgName = 'imgUserId' + id + '.png';
          croppedBytes = data.replace("data:image/png;base64,", "");
          payload = {
            "files": [{
              "name": imgName,
              "value": {
                "fileName": imgName,
                "mediaType": 'png',
                "buffer": croppedBytes
              }
            }]
          };
          _context.prev = 4;
          _context.next = 7;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["a" /* call */])(uploadPictureToServer, payload);

        case 7:
          res = _context.sent;

          if (!(res && res.ok === false)) {
            _context.next = 14;
            break;
          }

          _context.next = 11;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestUploadPictureFailed"])());

        case 11:
          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.error(e.message, 'Error');
          _context.next = 17;
          break;

        case 14:
          _context.next = 16;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestUploadPictureSucceeded"])(res));

        case 16:
          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.info('Please save the profile to update the picture.', 'Success');

        case 17:
          _context.next = 24;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context['catch'](4);
          _context.next = 23;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestUploadPictureFailed"])(_context.t0));

        case 23:
          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.error(_context.t0.message, 'Error');

        case 24:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[4, 19]]);
}

function uploadPictureSaga() {
  return regeneratorRuntime.wrap(function uploadPictureSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.delegateYield(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_2__constants__["m" /* REQUEST_UPLOAD_PICTURE */], uploadPicture), 't0', 1);

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

// All sagas to be loaded
/* harmony default export */ __webpack_exports__["a"] = (uploadPictureSaga);

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetchDetailsSaga__ = __webpack_require__(1372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addApplicationSaga__ = __webpack_require__(1370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changePasswordSaga__ = __webpack_require__(1371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__uploadPictureSaga__ = __webpack_require__(1374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__saveDetailsSaga__ = __webpack_require__(1373);






/* harmony default export */ __webpack_exports__["default"] = ([__WEBPACK_IMPORTED_MODULE_0__fetchDetailsSaga__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__addApplicationSaga__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__changePasswordSaga__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__uploadPictureSaga__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__saveDetailsSaga__["a" /* default */]]);

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiSettings; });
var ApiSettings = { "searchPrefix": "http://emanage-dev-iam-api.azurewebsites.net/api/", "listPrefix": "http://emanage-dev-iam-api.azurewebsites.net/api/lists/", "filesPrefix": "http://emanage-dev-iam-api.azurewebsites.net/api/files/", "suffix": "iam-admin-test" };

/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Toastr
 * Copyright 2012-2015
 * Authors: John Papa, Hans Fjällemark, and Tim Ferrell.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */
/* global define */
; (function (define) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(868)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
        return (function () {
            var $container;
            var listener;
            var toastId = 0;
            var toastType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning'
            };

            var toastr = {
                clear: clear,
                remove: remove,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {},
                subscribe: subscribe,
                success: success,
                version: '2.1.2',
                warning: warning
            };

            var previousToast;

            return toastr;

            ////////////////

            function error(message, title, optionsOverride) {
                return notify({
                    type: toastType.error,
                    iconClass: getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function getContainer(options, create) {
                if (!options) { options = getOptions(); }
                $container = $('#' + options.containerId);
                if ($container.length) {
                    return $container;
                }
                if (create) {
                    $container = createContainer(options);
                }
                return $container;
            }

            function info(message, title, optionsOverride) {
                return notify({
                    type: toastType.info,
                    iconClass: getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function subscribe(callback) {
                listener = callback;
            }

            function success(message, title, optionsOverride) {
                return notify({
                    type: toastType.success,
                    iconClass: getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function warning(message, title, optionsOverride) {
                return notify({
                    type: toastType.warning,
                    iconClass: getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function clear($toastElement, clearOptions) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if (!clearToast($toastElement, options, clearOptions)) {
                    clearContainer(options);
                }
            }

            function remove($toastElement) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    removeToast($toastElement);
                    return;
                }
                if ($container.children().length) {
                    $container.remove();
                }
            }

            // internal functions

            function clearContainer (options) {
                var toastsToClear = $container.children();
                for (var i = toastsToClear.length - 1; i >= 0; i--) {
                    clearToast($(toastsToClear[i]), options);
                }
            }

            function clearToast ($toastElement, options, clearOptions) {
                var force = clearOptions && clearOptions.force ? clearOptions.force : false;
                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                    $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () { removeToast($toastElement); }
                    });
                    return true;
                }
                return false;
            }

            function createContainer(options) {
                $container = $('<div/>')
                    .attr('id', options.containerId)
                    .addClass(options.positionClass)
                    .attr('aria-live', 'polite')
                    .attr('role', 'alert');

                $container.appendTo($(options.target));
                return $container;
            }

            function getDefaults() {
                return {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,

                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
                    showDuration: 300,
                    showEasing: 'swing', //swing and linear are built into jQuery
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 1000,
                    hideEasing: 'swing',
                    onHidden: undefined,
                    closeMethod: false,
                    closeDuration: false,
                    closeEasing: false,

                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    escapeHtml: false,
                    target: 'body',
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: true,
                    preventDuplicates: false,
                    progressBar: false
                };
            }

            function publish(args) {
                if (!listener) { return; }
                listener(args);
            }

            function notify(map) {
                var options = getOptions();
                var iconClass = map.iconClass || options.iconClass;

                if (typeof (map.optionsOverride) !== 'undefined') {
                    options = $.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
                }

                if (shouldExit(options, map)) { return; }

                toastId++;

                $container = getContainer(options, true);

                var intervalId = null;
                var $toastElement = $('<div/>');
                var $titleElement = $('<div/>');
                var $messageElement = $('<div/>');
                var $progressElement = $('<div/>');
                var $closeElement = $(options.closeHtml);
                var progressBar = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                };
                var response = {
                    toastId: toastId,
                    state: 'visible',
                    startTime: new Date(),
                    options: options,
                    map: map
                };

                personalizeToast();

                displayToast();

                handleEvents();

                publish(response);

                if (options.debug && console) {
                    console.log(response);
                }

                return $toastElement;

                function escapeHtml(source) {
                    if (source == null)
                        source = "";

                    return new String(source)
                        .replace(/&/g, '&amp;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;');
                }

                function personalizeToast() {
                    setIcon();
                    setTitle();
                    setMessage();
                    setCloseButton();
                    setProgressBar();
                    setSequence();
                }

                function handleEvents() {
                    $toastElement.hover(stickAround, delayedHideToast);
                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(hideToast);
                    }

                    if (options.closeButton && $closeElement) {
                        $closeElement.click(function (event) {
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                event.cancelBubble = true;
                            }
                            hideToast(true);
                        });
                    }

                    if (options.onclick) {
                        $toastElement.click(function (event) {
                            options.onclick(event);
                            hideToast();
                        });
                    }
                }

                function displayToast() {
                    $toastElement.hide();

                    $toastElement[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing, complete: options.onShown}
                    );

                    if (options.timeOut > 0) {
                        intervalId = setTimeout(hideToast, options.timeOut);
                        progressBar.maxHideTime = parseFloat(options.timeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                        if (options.progressBar) {
                            progressBar.intervalId = setInterval(updateProgress, 10);
                        }
                    }
                }

                function setIcon() {
                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }
                }

                function setSequence() {
                    if (options.newestOnTop) {
                        $container.prepend($toastElement);
                    } else {
                        $container.append($toastElement);
                    }
                }

                function setTitle() {
                    if (map.title) {
                        $titleElement.append(!options.escapeHtml ? map.title : escapeHtml(map.title)).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }
                }

                function setMessage() {
                    if (map.message) {
                        $messageElement.append(!options.escapeHtml ? map.message : escapeHtml(map.message)).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }
                }

                function setCloseButton() {
                    if (options.closeButton) {
                        $closeElement.addClass('toast-close-button').attr('role', 'button');
                        $toastElement.prepend($closeElement);
                    }
                }

                function setProgressBar() {
                    if (options.progressBar) {
                        $progressElement.addClass('toast-progress');
                        $toastElement.prepend($progressElement);
                    }
                }

                function shouldExit(options, map) {
                    if (options.preventDuplicates) {
                        if (map.message === previousToast) {
                            return true;
                        } else {
                            previousToast = map.message;
                        }
                    }
                    return false;
                }

                function hideToast(override) {
                    var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
                    var duration = override && options.closeDuration !== false ?
                        options.closeDuration : options.hideDuration;
                    var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
                    if ($(':focus', $toastElement).length && !override) {
                        return;
                    }
                    clearTimeout(progressBar.intervalId);
                    return $toastElement[method]({
                        duration: duration,
                        easing: easing,
                        complete: function () {
                            removeToast($toastElement);
                            if (options.onHidden && response.state !== 'hidden') {
                                options.onHidden();
                            }
                            response.state = 'hidden';
                            response.endTime = new Date();
                            publish(response);
                        }
                    });
                }

                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    }
                }

                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    $toastElement.stop(true, true)[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing}
                    );
                }

                function updateProgress() {
                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
                    $progressElement.width(percentage + '%');
                }
            }

            function getOptions() {
                return $.extend({}, getDefaults(), toastr.options);
            }

            function removeToast($toastElement) {
                if (!$container) { $container = getContainer(); }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                    previousToast = undefined;
                }
            }

        })();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}(__webpack_require__(807)));


/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


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

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = requestListSucceeded;
/* unused harmony export requestListFailed */
/* harmony export (immutable) */ __webpack_exports__["a"] = showLoading;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(166);
/*
 *
 * Shared actions
 *
 */



function requestListSucceeded(name, list) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* REQUEST_LIST_SUCCEEDED */],
        name: name,
        list: list
    };
}

function requestListFailed(name, message) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* REQUEST_LIST_FAILED */],
        name: name,
        message: message
    };
}

function showLoading(isLoading) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* TOGGLE_SPINNER */],
        isLoading: isLoading
    };
}

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(6);

/***/ })

});
//# sourceMappingURL=35.js.map
webpackJsonp([37],{

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

/***/ 1232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["requestUsers"] = requestUsers;
/* harmony export (immutable) */ __webpack_exports__["fetchUsers"] = fetchUsers;
/* harmony export (immutable) */ __webpack_exports__["requestUsersSucceeded"] = requestUsersSucceeded;
/* harmony export (immutable) */ __webpack_exports__["requestUsersFailed"] = requestUsersFailed;
/* harmony export (immutable) */ __webpack_exports__["deleteUser"] = deleteUser;
/* harmony export (immutable) */ __webpack_exports__["deleteUserSucceeded"] = deleteUserSucceeded;
/* harmony export (immutable) */ __webpack_exports__["deleteUserFailed"] = deleteUserFailed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1036);
/*
 *
 * UsersListContainer actions
 *
 */



function requestUsers(options) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* REQUEST_USERS */],
    options: options
  };
}

function fetchUsers(options) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* FETCH_USERS */],
    options: options
  };
}

function requestUsersSucceeded(users, totalUsers) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* REQUEST_USERS_SUCCEEDED */],
    users: users,
    totalUsers: totalUsers
  };
}

function requestUsersFailed(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* REQUEST_USERS_FAILED */],
    message: message
  };
}

function deleteUser(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* REQUEST_DELETE_USER */],
    id: id
  };
}

function deleteUserSucceeded(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* REQUEST_DELETE_USER_SUCCEEDED */],
    id: id
  };
}

function deleteUserFailed(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* REQUEST_DELETE_USER_FAILED */],
    message: message
  };
}

/***/ }),

/***/ 1376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export deleteUserSaga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(1232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_toastr__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(deleteUser),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(deleteUserSaga);

// import { take, call, put, select } from 'redux-saga/effects';







// Individual exports for testing
function deleteUserFromServer(id) {
  return fetch(__WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'admin/users/' + id, {
    method: 'DELETE'
  });
}

function deleteUser(action) {
  return regeneratorRuntime.wrap(function deleteUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["a" /* call */])(deleteUserFromServer, action.id);

        case 3:
          _context.next = 5;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["deleteUserSucceeded"])(action.id));

        case 5:
          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.success('User was deleted successfully.', 'Success');
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["deleteUserFailed"])(_context.t0.message));

        case 12:
          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.error('Something went wrong. Please try again later.', 'Error');

        case 13:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

function deleteUserSaga() {
  return regeneratorRuntime.wrap(function deleteUserSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.delegateYield(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* REQUEST_DELETE_USER */], deleteUser), 't0', 1);

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

// All sagas to be loaded
/* harmony default export */ __webpack_exports__["a"] = (deleteUserSaga);

/***/ }),

/***/ 1377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchUsersSaga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(1232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_config_environment__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_constants__ = __webpack_require__(166);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchUsers),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(fetchUsersSaga);

// import { take, call, put, select } from 'redux-saga/effects';






// Individual exports for testing
function fetchUsersFromServer(options) {
  var page = options.page,
      size = options.size,
      filter = options.filter;

  return fetch(__WEBPACK_IMPORTED_MODULE_3__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'admin/users/' + page + '/' + size + '/' + filter).then(function (res) {
    return res.json();
  });
}

function fetchUsers(action) {
  var result;
  return regeneratorRuntime.wrap(function fetchUsers$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["a" /* call */])(fetchUsersFromServer, action.options);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions__["requestUsersSucceeded"])(result.user, result.paging.count));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions__["requestUsersFailed"])(_context.t0.message));

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 8]]);
}

function fetchUsersSaga() {
  return regeneratorRuntime.wrap(function fetchUsersSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["c" /* throttle */])(__WEBPACK_IMPORTED_MODULE_4__shared_constants__["f" /* FILTER_DELAY */], [__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* FETCH_USERS */], __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* REQUEST_USERS */]], fetchUsers);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

// All sagas to be loaded
/* harmony default export */ __webpack_exports__["a"] = (fetchUsersSaga);

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetchUsersSaga__ = __webpack_require__(1377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deleteUserSaga__ = __webpack_require__(1376);



/* harmony default export */ __webpack_exports__["default"] = ([__WEBPACK_IMPORTED_MODULE_0__fetchUsersSaga__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__deleteUserSaga__["a" /* default */]]);

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

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(6);

/***/ })

});
//# sourceMappingURL=37.js.map
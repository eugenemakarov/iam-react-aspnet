webpackJsonp([11],{

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REQUEST_APPLICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REQUEST_APPLICATION_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REQUEST_APPLICATION_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REQUEST_SAVE_APPLICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REQUEST_SAVE_APPLICATION_SUCCEEDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return REQUEST_SAVE_APPLICATION_FAILED; });
/*
 *
 * ApplicationDetailsContainer constants
 *
 */

var REQUEST_APPLICATION = 'app/ApplicationDetailsContainer/REQUEST_APPLICATION';
var REQUEST_APPLICATION_SUCCEEDED = 'app/ApplicationDetailsContainer/REQUEST_APPLICATION_SUCCEEDED';
var REQUEST_APPLICATION_FAILED = 'app/ApplicationDetailsContainer/REQUEST_APPLICATION_FAILED';

var REQUEST_SAVE_APPLICATION = 'app/ApplicationDetailsContainer/REQUEST_SAVE_APPLICATION';
var REQUEST_SAVE_APPLICATION_SUCCEEDED = 'app/ApplicationDetailsContainer/REQUEST_SAVE_APPLICATION_SUCCEEDED';
var REQUEST_SAVE_APPLICATION_FAILED = 'app/ApplicationDetailsContainer/REQUEST_SAVE_APPLICATION_FAILED';

/***/ }),

/***/ 1230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["requestApplication"] = requestApplication;
/* harmony export (immutable) */ __webpack_exports__["requestApplicationSucceeded"] = requestApplicationSucceeded;
/* harmony export (immutable) */ __webpack_exports__["requestApplicationFailed"] = requestApplicationFailed;
/* harmony export (immutable) */ __webpack_exports__["saveApplication"] = saveApplication;
/* harmony export (immutable) */ __webpack_exports__["saveApplicationSucceeded"] = saveApplicationSucceeded;
/* harmony export (immutable) */ __webpack_exports__["saveApplicationFailed"] = saveApplicationFailed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1033);
/*
 *
 * ApplicationDetailsContainer actions
 *
 */



function requestApplication(id) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* REQUEST_APPLICATION */],
    id: id
  };
}

function requestApplicationSucceeded(details) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* REQUEST_APPLICATION_SUCCEEDED */],
    details: details
  };
}

function requestApplicationFailed(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* REQUEST_APPLICATION_FAILED */],
    message: message
  };
}

function saveApplication(data) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* REQUEST_SAVE_APPLICATION */],
    data: data
  };
}

function saveApplicationSucceeded(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* REQUEST_SAVE_APPLICATION_SUCCEEDED */],
    message: message
  };
}

function saveApplicationFailed(message) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* REQUEST_SAVE_APPLICATION_FAILED */],
    message: message
  };
}

/***/ }),

/***/ 1352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchDetailsSaga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(1033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(1230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_toastr__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(fetchDetails),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(fetchDetailsSaga);








function fetchDetailsFromServer(id) {
  return fetch(__WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'admin/applications/' + id).then(function (response) {
    return response.json();
  });
}

function fetchDetails(action) {
  var id, details;
  return regeneratorRuntime.wrap(function fetchDetails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = action.id;
          _context.prev = 1;
          _context.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["a" /* call */])(fetchDetailsFromServer, id);

        case 4:
          details = _context.sent;
          _context.next = 7;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestApplicationSucceeded"])(details));

        case 7:
          _context.next = 14;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context['catch'](1);

          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.error('Something went wrong. Please try again later...', 'Error');
          _context.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestApplicationFailed"])(_context.t0));

        case 14:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[1, 9]]);
}

function fetchDetailsSaga() {
  return regeneratorRuntime.wrap(function fetchDetailsSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.delegateYield(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* REQUEST_APPLICATION */], fetchDetails), 't0', 1);

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

// All sagas to be loaded
/* harmony default export */ __webpack_exports__["a"] = (fetchDetailsSaga);

/***/ }),

/***/ 1353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export saveDetailsSaga */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(1033);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(1230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_redux__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_redux__);
var _marked = /*#__PURE__*/regeneratorRuntime.mark(saveDetails),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(saveDetailsSaga);









function saveDetailsFromServer(data) {
  var url = data.id ? __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'admin/applications/' + data.id : __WEBPACK_IMPORTED_MODULE_4__shared_config_environment__["a" /* ApiSettings */].searchPrefix + 'admin/applications';
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
          sMsg = 'New application created.', eMsg = 'Couldn\'t create new application.';


          if (data.id) {
            sMsg = 'The application successfully updated.';
            eMsg = 'Couldn\'t update the application';
          }

          _context.prev = 3;
          _context.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["a" /* call */])(saveDetailsFromServer, data);

        case 6:
          res = _context.sent;

          console.log('res', res);

          if (!(res && res.id)) {
            _context.next = 18;
            break;
          }

          _context.next = 11;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_router_redux__["replace"])('/applications/' + res.id));

        case 11:
          _context.next = 13;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["saveApplicationSucceeded"])());

        case 13:
          _context.next = 15;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["requestApplication"])(res.id));

        case 15:
          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.success(sMsg, 'Success');
          _context.next = 22;
          break;

        case 18:
          _context.next = 20;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["saveApplicationFailed"])());

        case 20:
          eMsg = res.message || eMsg;
          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.error(eMsg, 'Error');

        case 22:
          _context.next = 30;
          break;

        case 24:
          _context.prev = 24;
          _context.t0 = _context['catch'](3);
          _context.next = 28;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["b" /* put */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions__["saveApplicationFailed"])(_context.t0));

        case 28:
          eMsg = _context.t0.message || eMsg;
          __WEBPACK_IMPORTED_MODULE_5_toastr___default.a.error(eMsg, 'Error');

        case 30:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[3, 24]]);
}

function saveDetailsSaga() {
  return regeneratorRuntime.wrap(function saveDetailsSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.delegateYield(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga__["a" /* takeLatest */])(__WEBPACK_IMPORTED_MODULE_2__constants__["d" /* REQUEST_SAVE_APPLICATION */], saveDetails), 't0', 1);

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

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetchDetailsSaga__ = __webpack_require__(1352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__saveDetailsSaga__ = __webpack_require__(1353);



/* harmony default export */ __webpack_exports__["default"] = ([__WEBPACK_IMPORTED_MODULE_0__fetchDetailsSaga__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__saveDetailsSaga__["a" /* default */]]);

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiSettings; });
var ApiSettings = { "searchPrefix": "https://iamapi.tryemanage.com/api/", "listPrefix": "https://iamapi.tryemanage.com/api/lists/", "filesPrefix": "https://iamapi.tryemanage.com/api/files/", "suffix": "iam" };

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
//# sourceMappingURL=11.js.map
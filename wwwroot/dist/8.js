webpackJsonp([8],{

/***/ 1083:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(true);
// imports


// module
exports.push([module.i, ".logoImage__wwwroot-app-components-LogoImage-styles__1nzTe { /* stylelint-disable */\r\n    \r\n}\r\n", "", {"version":3,"sources":["c:/VSO/ReactDotnet/wwwroot/app/components/LogoImage/styles.css"],"names":[],"mappings":"AAAA,6DAAa,uBAAuB;;CAEnC","file":"styles.css","sourcesContent":[".logoImage { /* stylelint-disable */\r\n    \r\n}\r\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"logoImage": "logoImage__wwwroot-app-components-LogoImage-styles__1nzTe"
};

/***/ }),

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

/***/ 1249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(1291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/**
*
* LogoImage
*
*/





function LogoImage(elem) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { height: elem.height, className: elem.class, style: elem.style, src: elem.url });
}

/* harmony default export */ __webpack_exports__["a"] = (LogoImage);

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

/***/ 1263:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(true);
// imports


// module
exports.push([module.i, "body{\r\n    background-color: #EFEFEF;\r\n}\r\n\r\n.Login__wwwroot-app-components-Login-styles__1FUnJ { /* stylelint-disable */\r\n    \r\n}\r\n\r\n.login_page_h4__wwwroot-app-components-Login-styles__2on0Y{\r\n    font-family: open sans,Helvetica Neue,Helvetica,Arial,sans-serif;\r\n    font-weight: 500;\r\n    line-height: 1.1;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.login_input__wwwroot-app-components-Login-styles__1rGjW{\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n}\r\n\r\n.error_text__wwwroot-app-components-Login-styles__2b3A7{\r\n    color: #b94a48;\r\n    font-weight: 500;\r\n    margin-top: 10px;\r\n}\r\n\r\n.check_box__wwwroot-app-components-Login-styles__bpnbF{\r\n    float: left;\r\n    margin-bottom: 15px !important;\r\n}\r\n\r\n.cardContainer__wwwroot-app-components-Login-styles__2Vx5E {\r\n    max-width: 350px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n.card__wwwroot-app-components-Login-styles__2LBKv {\r\n    background-color: #fafafa;\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 30px;\r\n    border-radius: 2px;\r\n    box-shadow: 0 3px 2px rgba(0,0,0,.3);\r\n    text-align: center;\r\n}\r\n\r\n.profileImage__wwwroot-app-components-Login-styles__-D3AD{\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 20px auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}\r\n\r\n.btn_signin__wwwroot-app-components-Login-styles__DcKrP{\r\n    font-weight: 800;\r\n}", "", {"version":3,"sources":["c:/VSO/ReactDotnet/wwwroot/app/components/Login/styles.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;CAC7B;;AAED,qDAAS,uBAAuB;;CAE/B;;AAED;IACI,iEAAiE;IACjE,iBAAiB;IACjB,iBAAiB;IACjB,oBAAoB;CACvB;;AAED;IACI,eAAe;IACf,aAAa;IACb,gBAAgB;CACnB;;AAED;IACI,eAAe;IACf,iBAAiB;IACjB,iBAAiB;CACpB;;AAED;IACI,YAAY;IACZ,+BAA+B;CAClC;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,mBAAmB;CACtB;;AAED;IACI,0BAA0B;IAC1B,wBAAwB;IACxB,oBAAoB;IACpB,iBAAiB;IACjB,mBAAmB;IACnB,qCAAqC;IACrC,mBAAmB;CACtB;;AAED;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,mBAAmB;CACtB;;AAED;IACI,iBAAiB;CACpB","file":"styles.css","sourcesContent":["body{\r\n    background-color: #EFEFEF;\r\n}\r\n\r\n.Login { /* stylelint-disable */\r\n    \r\n}\r\n\r\n.login_page_h4{\r\n    font-family: open sans,Helvetica Neue,Helvetica,Arial,sans-serif;\r\n    font-weight: 500;\r\n    line-height: 1.1;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.login_input{\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n}\r\n\r\n.error_text{\r\n    color: #b94a48;\r\n    font-weight: 500;\r\n    margin-top: 10px;\r\n}\r\n\r\n.check_box{\r\n    float: left;\r\n    margin-bottom: 15px !important;\r\n}\r\n\r\n.cardContainer {\r\n    max-width: 350px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n.card {\r\n    background-color: #fafafa;\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 30px;\r\n    border-radius: 2px;\r\n    box-shadow: 0 3px 2px rgba(0,0,0,.3);\r\n    text-align: center;\r\n}\r\n\r\n.profileImage{\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 20px auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n}\r\n\r\n.btn_signin{\r\n    font-weight: 800;\r\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"Login": "Login__wwwroot-app-components-Login-styles__1FUnJ",
	"login_page_h4": "login_page_h4__wwwroot-app-components-Login-styles__2on0Y",
	"login_input": "login_input__wwwroot-app-components-Login-styles__1rGjW",
	"error_text": "error_text__wwwroot-app-components-Login-styles__2b3A7",
	"check_box": "check_box__wwwroot-app-components-Login-styles__bpnbF",
	"cardContainer": "cardContainer__wwwroot-app-components-Login-styles__2Vx5E",
	"card": "card__wwwroot-app-components-Login-styles__2LBKv",
	"profileImage": "profileImage__wwwroot-app-components-Login-styles__-D3AD",
	"btn_signin": "btn_signin__wwwroot-app-components-Login-styles__DcKrP"
};

/***/ }),

/***/ 1291:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1083);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(36)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1083, function() {
			var newContent = __webpack_require__(1083);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_responsive__ = __webpack_require__(1513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(1537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LogoImage__ = __webpack_require__(1249);
/**
*
* Login
*
*/







function Login(_ref) {
  var appInfo = _ref.appInfo,
      handleSubmit = _ref.handleSubmit,
      handleChange = _ref.handleChange,
      username = _ref.username,
      password = _ref.password,
      rememberMe = _ref.rememberMe,
      error = _ref.error,
      userImageURL = _ref.userImageURL;

  var login_input = __WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.login_input + ' form-control mt-m';
  var error_styles = {
    display: error == false ? 'none' : 'block'
  };
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: [__WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.Login] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'text-center' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__LogoImage__["a" /* default */], { height: '50', 'class': 'mt-m', url: '' + appInfo.logoUrl })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'text-center mt-m' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h4',
        { className: __WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.login_page_h4 },
        'Sign in to continue to ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: '' },
          '' + appInfo.displayName
        ),
        ' '
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h4',
        { className: __WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.error_text, style: error_styles },
        'Invalid user and/or password. Please, try again.'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.cardContainer },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.card },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: __WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.profileImage, src: '' + userImageURL }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'mt-m mb-l' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'form',
            { onSubmit: handleSubmit },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'email', onChange: handleChange, className: login_input, value: username, required: true, id: 'username', name: 'username', placeholder: 'Email address' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', onChange: handleChange, className: login_input, value: password, required: true, id: 'password', name: 'password', placeholder: 'Password' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'checkbox' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'label',
                { className: __WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.check_box },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'checkbox', onChange: handleChange, name: 'rememberMe', checked: rememberMe }),
                ' Remember me'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { className: __WEBPACK_IMPORTED_MODULE_2__styles_css___default.a.btn_signin + ' btn btn-primary form-control' },
              'Sign in'
            )
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'text-center mt-m' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { href: 'mailto:' + appInfo.emailContact, target: '_blank' },
        'support: ',
        '' + appInfo.emailContact
      )
    )
  );
}
/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),

/***/ 1367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export selectLoginContainerDomain */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(172);


/**
 * Direct selector to the loginContainer state domain
 */
var selectLoginContainerDomain = function selectLoginContainerDomain() {
  return function (state) {
    return state.get('loginContainer');
  };
};

/**
 * Other specific selectors
 */
var selectRequestsDomain = function selectRequestsDomain() {
  return function (state) {
    return state.get('requests');
  };
};

/**
 * Default selector used by LoginContainer
 */

var selectLoginContainer = function selectLoginContainer() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["a" /* createSelector */])(selectLoginContainerDomain(), selectRequestsDomain(), function (substate, requestsSubstate) {
    return Object.assign(substate.toJS(), requestsSubstate.toJS());
  });
};

/* harmony default export */ __webpack_exports__["a"] = (selectLoginContainer);


/***/ }),

/***/ 1513:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(7));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["MediaQuery"] = factory(require("react"));
	else
		root["MediaQuery"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_15__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _matchmediaquery = __webpack_require__(11);
	
	var _matchmediaquery2 = _interopRequireDefault(_matchmediaquery);
	
	var _hyphenateStyleName = __webpack_require__(7);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _mediaQuery = __webpack_require__(5);
	
	var _mediaQuery2 = _interopRequireDefault(_mediaQuery);
	
	var _toQuery = __webpack_require__(9);
	
	var _toQuery2 = _interopRequireDefault(_toQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var defaultTypes = {
	  component: _propTypes2.default.node,
	  query: _propTypes2.default.string,
	  values: _propTypes2.default.shape(_mediaQuery2.default.matchers),
	  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
	  onChange: _propTypes2.default.func,
	  onBeforeChange: _propTypes2.default.func
	};
	var mediaKeys = Object.keys(_mediaQuery2.default.all);
	var excludedQueryKeys = Object.keys(defaultTypes);
	var excludedPropKeys = excludedQueryKeys.concat(mediaKeys);
	
	function omit(object, keys) {
	  var newObject = _extends({}, object);
	  keys.forEach(function (key) {
	    return delete newObject[key];
	  });
	  return newObject;
	}
	
	var MediaQuery = function (_React$Component) {
	  _inherits(MediaQuery, _React$Component);
	
	  function MediaQuery() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, MediaQuery);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MediaQuery.__proto__ || Object.getPrototypeOf(MediaQuery)).call.apply(_ref, [this].concat(args))), _this), _this.state = { matches: false }, _this.updateMatches = function () {
	      if (_this._mql.matches === _this.state.matches) {
	        return;
	      }
	      _this.setState({
	        matches: _this._mql.matches
	      });
	    }, _this.removeMql = function () {
	      if (_this._mql) {
	        _this._mql.removeListener(_this.updateMatches);
	        _this._mql.dispose();
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(MediaQuery, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.updateQuery(this.props);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.updateQuery(nextProps);
	    }
	  }, {
	    key: 'updateQuery',
	    value: function updateQuery(props) {
	      var values = void 0;
	      if (props.query) {
	        this.query = props.query;
	      } else {
	        this.query = (0, _toQuery2.default)(omit(props, excludedQueryKeys));
	      }
	
	      if (!this.query) {
	        throw new Error('Invalid or missing MediaQuery!');
	      }
	
	      if (props.values) {
	        values = Object.keys(props.values).reduce(function (result, key) {
	          result[(0, _hyphenateStyleName2.default)(key)] = props.values[key];
	          return result;
	        }, {});
	      }
	
	      this.removeMql();
	
	      this._mql = (0, _matchmediaquery2.default)(this.query, values);
	      this._mql.addListener(this.updateMatches);
	      this.updateMatches();
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(_, nextState) {
	      if (this.props.onBeforeChange && this.state.matches !== nextState.matches) {
	        this.props.onBeforeChange(this.state.matches);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(_, prevState) {
	      if (this.props.onChange && prevState.matches !== this.state.matches) {
	        this.props.onChange(this.state.matches);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeMql();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (typeof this.props.children === 'function') {
	        return this.props.children(this.state.matches);
	      }
	
	      if (this.state.matches === false) {
	        return null;
	      }
	      var props = omit(this.props, excludedPropKeys);
	      var hasMergeProps = Object.keys(props).length > 0;
	      var childrenCount = _react2.default.Children.count(this.props.children);
	      var wrapChildren = this.props.component || childrenCount > 1 || typeof this.props.children === 'string' || Array.isArray(this.props.children) && childrenCount == 1 || this.props.children === undefined;
	      if (wrapChildren) {
	        return _react2.default.createElement(this.props.component || 'div', props, this.props.children);
	      } else if (hasMergeProps) {
	        return _react2.default.cloneElement(this.props.children, props);
	      } else if (childrenCount) {
	        return this.props.children;
	      } else {
	        return null;
	      }
	    }
	  }]);
	
	  return MediaQuery;
	}(_react2.default.Component);
	
	MediaQuery.displayName = 'MediaQuery';
	MediaQuery.defaultProps = {
	  values: {}
	};
	exports.default = MediaQuery;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _propTypes = __webpack_require__(8);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var stringOrNumber = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]);
	
	// properties that match media queries
	var matchers = {
	  orientation: _propTypes2.default.oneOf(['portrait', 'landscape']),
	
	  scan: _propTypes2.default.oneOf(['progressive', 'interlace']),
	
	  aspectRatio: _propTypes2.default.string,
	  deviceAspectRatio: _propTypes2.default.string,
	
	  height: stringOrNumber,
	  deviceHeight: stringOrNumber,
	
	  width: stringOrNumber,
	  deviceWidth: stringOrNumber,
	
	  color: _propTypes2.default.bool,
	
	  colorIndex: _propTypes2.default.bool,
	
	  monochrome: _propTypes2.default.bool,
	  resolution: stringOrNumber
	
	  // media features
	};var features = _extends({
	  minAspectRatio: _propTypes2.default.string,
	  maxAspectRatio: _propTypes2.default.string,
	  minDeviceAspectRatio: _propTypes2.default.string,
	  maxDeviceAspectRatio: _propTypes2.default.string,
	
	  minHeight: stringOrNumber,
	  maxHeight: stringOrNumber,
	  minDeviceHeight: stringOrNumber,
	  maxDeviceHeight: stringOrNumber,
	
	  minWidth: stringOrNumber,
	  maxWidth: stringOrNumber,
	  minDeviceWidth: stringOrNumber,
	  maxDeviceWidth: stringOrNumber,
	
	  minColor: _propTypes2.default.number,
	  maxColor: _propTypes2.default.number,
	
	  minColorIndex: _propTypes2.default.number,
	  maxColorIndex: _propTypes2.default.number,
	
	  minMonochrome: _propTypes2.default.number,
	  maxMonochrome: _propTypes2.default.number,
	
	  minResolution: stringOrNumber,
	  maxResolution: stringOrNumber
	
	}, matchers);
	
	// media types
	var types = {
	  all: _propTypes2.default.bool,
	  grid: _propTypes2.default.bool,
	  aural: _propTypes2.default.bool,
	  braille: _propTypes2.default.bool,
	  handheld: _propTypes2.default.bool,
	  print: _propTypes2.default.bool,
	  projection: _propTypes2.default.bool,
	  screen: _propTypes2.default.bool,
	  tty: _propTypes2.default.bool,
	  tv: _propTypes2.default.bool,
	  embossed: _propTypes2.default.bool
	};
	
	var all = _extends({}, types, features);
	
	// add the type property
	matchers.type = Object.keys(types);
	
	exports.default = {
	  all: all,
	  types: types,
	  matchers: matchers,
	  features: features
	};
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(2);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };
	
	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }
	
	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }
	
	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';
	
	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	var cache = {};
	
	function hyphenateStyleName(string) {
	    return string in cache
	    ? cache[string]
	    : cache[string] = string
	      .replace(uppercasePattern, '-$&')
	      .toLowerCase()
	      .replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(14)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(13)();
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (obj) {
	  var rules = [];
	  Object.keys(_mediaQuery2.default.all).forEach(function (k) {
	    var v = obj[k];
	    if (v != null) {
	      rules.push(keyVal(k, v));
	    }
	  });
	  return join(rules);
	};
	
	var _hyphenateStyleName = __webpack_require__(7);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _mediaQuery = __webpack_require__(5);
	
	var _mediaQuery2 = _interopRequireDefault(_mediaQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var negate = function negate(cond) {
	  return 'not ' + cond;
	};
	
	function keyVal(k, v) {
	  var realKey = (0, _hyphenateStyleName2.default)(k);
	
	  // px shorthand
	  if (typeof v === 'number') {
	    v = v + 'px';
	  }
	  if (v === true) {
	    return k;
	  }
	  if (v === false) {
	    return negate(k);
	  }
	  return '(' + realKey + ': ' + v + ')';
	}
	
	function join(conds) {
	  return conds.join(' and ');
	}
	
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	'use strict';
	
	exports.match = matchQuery;
	exports.parse = parseQuery;
	
	// -----------------------------------------------------------------------------
	
	var RE_MEDIA_QUERY     = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
	    RE_MQ_EXPRESSION   = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
	    RE_MQ_FEATURE      = /^(?:(min|max)-)?(.+)/,
	    RE_LENGTH_UNIT     = /(em|rem|px|cm|mm|in|pt|pc)?$/,
	    RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
	
	function matchQuery(mediaQuery, values) {
	    return parseQuery(mediaQuery).some(function (query) {
	        var inverse = query.inverse;
	
	        // Either the parsed or specified `type` is "all", or the types must be
	        // equal for a match.
	        var typeMatch = query.type === 'all' || values.type === query.type;
	
	        // Quit early when `type` doesn't match, but take "not" into account.
	        if ((typeMatch && inverse) || !(typeMatch || inverse)) {
	            return false;
	        }
	
	        var expressionsMatch = query.expressions.every(function (expression) {
	            var feature  = expression.feature,
	                modifier = expression.modifier,
	                expValue = expression.value,
	                value    = values[feature];
	
	            // Missing or falsy values don't match.
	            if (!value) { return false; }
	
	            switch (feature) {
	                case 'orientation':
	                case 'scan':
	                    return value.toLowerCase() === expValue.toLowerCase();
	
	                case 'width':
	                case 'height':
	                case 'device-width':
	                case 'device-height':
	                    expValue = toPx(expValue);
	                    value    = toPx(value);
	                    break;
	
	                case 'resolution':
	                    expValue = toDpi(expValue);
	                    value    = toDpi(value);
	                    break;
	
	                case 'aspect-ratio':
	                case 'device-aspect-ratio':
	                case /* Deprecated */ 'device-pixel-ratio':
	                    expValue = toDecimal(expValue);
	                    value    = toDecimal(value);
	                    break;
	
	                case 'grid':
	                case 'color':
	                case 'color-index':
	                case 'monochrome':
	                    expValue = parseInt(expValue, 10) || 1;
	                    value    = parseInt(value, 10) || 0;
	                    break;
	            }
	
	            switch (modifier) {
	                case 'min': return value >= expValue;
	                case 'max': return value <= expValue;
	                default   : return value === expValue;
	            }
	        });
	
	        return (expressionsMatch && !inverse) || (!expressionsMatch && inverse);
	    });
	}
	
	function parseQuery(mediaQuery) {
	    return mediaQuery.split(',').map(function (query) {
	        query = query.trim();
	
	        var captures    = query.match(RE_MEDIA_QUERY),
	            modifier    = captures[1],
	            type        = captures[2],
	            expressions = captures[3] || '',
	            parsed      = {};
	
	        parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';
	        parsed.type    = type ? type.toLowerCase() : 'all';
	
	        // Split expressions into a list.
	        expressions = expressions.match(/\([^\)]+\)/g) || [];
	
	        parsed.expressions = expressions.map(function (expression) {
	            var captures = expression.match(RE_MQ_EXPRESSION),
	                feature  = captures[1].toLowerCase().match(RE_MQ_FEATURE);
	
	            return {
	                modifier: feature[1],
	                feature : feature[2],
	                value   : captures[2]
	            };
	        });
	
	        return parsed;
	    });
	}
	
	// -- Utilities ----------------------------------------------------------------
	
	function toDecimal(ratio) {
	    var decimal = Number(ratio),
	        numbers;
	
	    if (!decimal) {
	        numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
	        decimal = numbers[1] / numbers[2];
	    }
	
	    return decimal;
	}
	
	function toDpi(resolution) {
	    var value = parseFloat(resolution),
	        units = String(resolution).match(RE_RESOLUTION_UNIT)[1];
	
	    switch (units) {
	        case 'dpcm': return value / 2.54;
	        case 'dppx': return value * 96;
	        default    : return value;
	    }
	}
	
	function toPx(length) {
	    var value = parseFloat(length),
	        units = String(length).match(RE_LENGTH_UNIT)[1];
	
	    switch (units) {
	        case 'em' : return value * 16;
	        case 'rem': return value * 16;
	        case 'cm' : return value * 96 / 2.54;
	        case 'mm' : return value * 96 / 2.54 / 10;
	        case 'in' : return value * 96;
	        case 'pt' : return value * 72;
	        case 'pc' : return value * 72 / 12;
	        default   : return value;
	    }
	}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var staticMatch = __webpack_require__(10).match;
	var dynamicMatch = typeof window !== 'undefined' ? window.matchMedia : null;
	
	// our fake MediaQueryList
	function Mql(query, values){
	  var self = this;
	  if(dynamicMatch){
	    var mql = dynamicMatch.call(window, query);
	    this.matches = mql.matches;
	    this.media = mql.media;
	    // TODO: is there a time it makes sense to remove this listener?
	    mql.addListener(update);
	  } else {
	    this.matches = staticMatch(query, values);
	    this.media = query;
	  }
	
	  this.addListener = addListener;
	  this.removeListener = removeListener;
	  this.dispose = dispose;
	
	  function addListener(listener){
	    if(mql){
	      mql.addListener(listener);
	    }
	  }
	
	  function removeListener(listener){
	    if(mql){
	      mql.removeListener(listener);
	    }
	  }
	
	  // update ourselves!
	  function update(evt){
	    self.matches = evt.matches;
	    self.media = evt.media;
	  }
	
	  function dispose(){
	    if(mql){
	      mql.removeListener(update);
	    }
	  }
	}
	
	function matchMedia(query, values){
	  return new Mql(query, values);
	}
	
	module.exports = matchMedia;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(3);
	  var warning = __webpack_require__(6);
	  var ReactPropTypesSecret = __webpack_require__(4);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(2);
	var invariant = __webpack_require__(3);
	var ReactPropTypesSecret = __webpack_require__(4);
	
	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };
	
	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(2);
	var invariant = __webpack_require__(3);
	var warning = __webpack_require__(6);
	
	var ReactPropTypesSecret = __webpack_require__(4);
	var checkPropTypes = __webpack_require__(12);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=react-responsive.js.map

/***/ }),

/***/ 1537:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1263);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(36)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1263, function() {
			var newContent = __webpack_require__(1263);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginContainer", function() { return LoginContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_c_VSO_ReactDotnet_node_modules_redbox_react_lib_index_js__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_c_VSO_ReactDotnet_node_modules_redbox_react_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_c_VSO_ReactDotnet_node_modules_redbox_react_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_c_VSO_ReactDotnet_node_modules_react_transform_catch_errors_lib_index_js__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_c_VSO_ReactDotnet_node_modules_react_transform_catch_errors_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_c_VSO_ReactDotnet_node_modules_react_transform_catch_errors_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c_VSO_ReactDotnet_node_modules_react_transform_hmr_lib_index_js__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_c_VSO_ReactDotnet_node_modules_react_transform_hmr_lib_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_c_VSO_ReactDotnet_node_modules_react_transform_hmr_lib_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectors__ = __webpack_require__(1367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__(1252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_redux__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Login__ = __webpack_require__(1342);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  LoginContainer: {
    displayName: 'LoginContainer'
  }
};

var _cVSOReactDotnetNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3_c_VSO_ReactDotnet_node_modules_react_transform_hmr_lib_index_js___default()({
  filename: 'c:/VSO/ReactDotnet/wwwroot/app/containers/LoginContainer/index.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _cVSOReactDotnetNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1_c_VSO_ReactDotnet_node_modules_react_transform_catch_errors_lib_index_js___default()({
  filename: 'c:/VSO/ReactDotnet/wwwroot/app/containers/LoginContainer/index.js',
  components: _components,
  locals: [],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a, __WEBPACK_IMPORTED_MODULE_0_c_VSO_ReactDotnet_node_modules_redbox_react_lib_index_js___default.a]
});

function _wrapComponent(id) {
  return function (Component) {
    return _cVSOReactDotnetNode_modulesReactTransformHmrLibIndexJs2(_cVSOReactDotnetNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

/*
 *
 * LoginContainer
 *
 */










var LoginContainer = _wrapComponent('LoginContainer')(function (_React$Component) {
  _inherits(LoginContainer, _React$Component);

  function LoginContainer(props) {
    _classCallCheck(this, LoginContainer);

    var _this = _possibleConstructorReturn(this, (LoginContainer.__proto__ || Object.getPrototypeOf(LoginContainer)).call(this, props));

    _this.error = false;

    _this.state = {
      username: localStorage.getItem('userEmail') ? JSON.parse(localStorage.getItem('userEmail')).userEmail : '', password: '', rememberMe: localStorage.getItem('userEmail') ? true : false
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);

    return _this;
  } // eslint-disable-line react/prefer-stateless-function

  _createClass(LoginContainer, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      this.props.actions.loginRequest(this.state);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var target = event.target;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.actions.requestAppInfo();
      localStorage.getItem('userEmail') ? this.props.actions.requestUserImage(this.state.username) : '';
      this.userImageURL = this.props.userImgURL;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.error = props.isFailed;
      this.userImageURL = props.userImgURL;
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Login__["a" /* default */], { appInfo: this.props.appInfo, handleSubmit: this.handleSubmit, handleChange: this.handleChange, username: this.state.username, password: this.state.password, rememberMe: this.state.rememberMe, error: this.error, userImageURL: this.userImageURL });
    }
  }]);

  return LoginContainer;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component));

var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["a" /* default */])();

function mapDispatchToProps(dispatch) {
  return {
    actions: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_redux__["bindActionCreators"])(Object.assign({}, __WEBPACK_IMPORTED_MODULE_6__actions__, { push: __WEBPACK_IMPORTED_MODULE_8_react_router_redux__["push"] }), dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(LoginContainer));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(170)(module)))

/***/ })

});
//# sourceMappingURL=8.js.map
webpackJsonp([6],{

/***/ 1270:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(true);
// imports


// module
exports.push([module.i, ".upcoming__wwwroot-app-components-Upcoming-styles__1Xa0x { /* stylelint-disable */\r\n\r\n}\r\n\r\n.body__wwwroot-app-components-Upcoming-styles__3op_A{\r\n    margin: 10px 0px 0px 5px;\r\n}\r\n", "", {"version":3,"sources":["c:/VSO/ReactDotnet/wwwroot/app/components/Upcoming/styles.css"],"names":[],"mappings":"AAAA,2DAAY,uBAAuB;;CAElC;;AAED;IACI,yBAAyB;CAC5B","file":"styles.css","sourcesContent":[".upcoming { /* stylelint-disable */\r\n\r\n}\r\n\r\n.body{\r\n    margin: 10px 0px 0px 5px;\r\n}\r\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"upcoming": "upcoming__wwwroot-app-components-Upcoming-styles__1Xa0x",
	"body": "body__wwwroot-app-components-Upcoming-styles__3op_A"
};

/***/ }),

/***/ 1349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__(1350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PageHeader__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_css__ = __webpack_require__(1544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_css__);
/**
*
* Upcoming
*
*/









function Upcoming(_ref) {
  var breadcrumbs = _ref.breadcrumbs,
      navigateTo = _ref.navigateTo;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_4__styles_css___default.a.upcoming },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PageHeader__["a" /* default */], { breadcrumbs: breadcrumbs, navigateTo: navigateTo, loading: false }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'mt-s' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* default */].header)
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (Upcoming);

/***/ }),

/***/ 1350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl__ = __webpack_require__(173);
/*
 * Upcoming Messages
 *
 * This contains all the text for the Upcoming component.
 */


/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_intl__["d" /* defineMessages */])({
  header: {
    id: 'app.components.Upcoming.header',
    defaultMessage: 'Coming Soon...'
  }
}));

/***/ }),

/***/ 1544:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1270);
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
		module.hot.accept(1270, function() {
			var newContent = __webpack_require__(1270);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingContainer", function() { return UpcomingContainer; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Upcoming__ = __webpack_require__(1349);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  UpcomingContainer: {
    displayName: 'UpcomingContainer'
  }
};

var _cVSOReactDotnetNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3_c_VSO_ReactDotnet_node_modules_react_transform_hmr_lib_index_js___default()({
  filename: 'c:/VSO/ReactDotnet/wwwroot/app/containers/UpcomingContainer/index.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _cVSOReactDotnetNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1_c_VSO_ReactDotnet_node_modules_react_transform_catch_errors_lib_index_js___default()({
  filename: 'c:/VSO/ReactDotnet/wwwroot/app/containers/UpcomingContainer/index.js',
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
 * UpcomingContainer
 *
 */





var UpcomingContainer = _wrapComponent('UpcomingContainer')(function (_React$Component) {
  _inherits(UpcomingContainer, _React$Component);

  function UpcomingContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UpcomingContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UpcomingContainer.__proto__ || Object.getPrototypeOf(UpcomingContainer)).call.apply(_ref, [this].concat(args))), _this), _this.name = 'Apps', _this.sectionName = function () {
      if (location.pathname == '/apps/upcoming') {
        this.name = 'Apps';
      };
      if (location.pathname == '/policies/upcoming') {
        this.name = 'Policies';
      };
      if (location.pathname == '/logs/upcoming') {
        this.name = 'Logs';
      };
      if (location.pathname == '/help/upcoming') {
        this.name = 'Help';
      };
    }, _this.breadcrumbs = [{ url: '/dashboard', name: 'Home' }, { url: '', name: _this.name }], _this.navigateTo = function () {}, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function

  _createClass(UpcomingContainer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.sectionName();
      this.breadcrumbs = [{ url: '/dashboard', name: 'Home' }, { url: '', name: this.name }];
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Upcoming__["a" /* default */], { breadcrumbs: this.breadcrumbs, navigateTo: this.navigateTo });
    }
  }]);

  return UpcomingContainer;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component));

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapDispatchToProps)(UpcomingContainer));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(170)(module)))

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(true);
// imports


// module
exports.push([module.i, ".a__wwwroot-app-components-A-styles__t8O4W { /* stylelint-disable */\r\n    color: #337ab7;\r\n}\r\n\r\n.a__wwwroot-app-components-A-styles__t8O4W:focus, .a__wwwroot-app-components-A-styles__t8O4W:hover {\r\n    color: #23527c;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}", "", {"version":3,"sources":["c:/VSO/ReactDotnet/wwwroot/app/components/A/styles.css"],"names":[],"mappings":"AAAA,6CAAK,uBAAuB;IACxB,eAAe;CAClB;;AAED;IACI,eAAe;IACf,2BAA2B;IAC3B,gBAAgB;CACnB","file":"styles.css","sourcesContent":[".a { /* stylelint-disable */\r\n    color: #337ab7;\r\n}\r\n\r\n.a:focus, .a:hover {\r\n    color: #23527c;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"a": "a__wwwroot-app-components-A-styles__t8O4W"
};

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(true);
// imports


// module
exports.push([module.i, ".pageHeader__wwwroot-app-components-PageHeader-styles__2d7mG { /* stylelint-disable */\r\n    border-bottom: 1px solid #e7eaec!important;    \r\n}\r\n\r\n.pageHeader__wwwroot-app-components-PageHeader-styles__2d7mG strong {\r\n    color: #777;\r\n    font-weight: 700;\r\n}\r\n", "", {"version":3,"sources":["c:/VSO/ReactDotnet/wwwroot/app/components/PageHeader/styles.css"],"names":[],"mappings":"AAAA,+DAAc,uBAAuB;IACjC,2CAA2C;CAC9C;;AAED;IACI,YAAY;IACZ,iBAAiB;CACpB","file":"styles.css","sourcesContent":[".pageHeader { /* stylelint-disable */\r\n    border-bottom: 1px solid #e7eaec!important;    \r\n}\r\n\r\n.pageHeader strong {\r\n    color: #777;\r\n    font-weight: 700;\r\n}\r\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"pageHeader": "pageHeader__wwwroot-app-components-PageHeader-styles__2d7mG"
};

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(265);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _screenReaderStyles = __webpack_require__(821);

var _screenReaderStyles2 = _interopRequireDefault(_screenReaderStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A React component for the font-awesome icon library.
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {String} name Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another
 * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'
 * @module FontAwesome
 * @type {ReactClass}
 */
var FontAwesome = function (_React$Component) {
  _inherits(FontAwesome, _React$Component);

  function FontAwesome() {
    _classCallCheck(this, FontAwesome);

    var _this = _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));

    _this.displayName = 'FontAwesome';
    return _this;
  }

  _createClass(FontAwesome, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          border = _props.border,
          cssModule = _props.cssModule,
          className = _props.className,
          fixedWidth = _props.fixedWidth,
          flip = _props.flip,
          inverse = _props.inverse,
          name = _props.name,
          pulse = _props.pulse,
          rotate = _props.rotate,
          size = _props.size,
          spin = _props.spin,
          stack = _props.stack,
          _props$tag = _props.tag,
          tag = _props$tag === undefined ? 'span' : _props$tag,
          ariaLabel = _props.ariaLabel,
          props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);

      var classNames = [];

      if (cssModule) {
        classNames.push(cssModule['fa']);
        classNames.push(cssModule['fa-' + name]);
        size && classNames.push(cssModule['fa-' + size]);
        spin && classNames.push(cssModule['fa-spin']);
        pulse && classNames.push(cssModule['fa-pulse']);
        border && classNames.push(cssModule['fa-border']);
        fixedWidth && classNames.push(cssModule['fa-fw']);
        inverse && classNames.push(cssModule['fa-inverse']);
        flip && classNames.push(cssModule['fa-flip-' + flip]);
        rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
        stack && classNames.push(cssModule['fa-stack-' + stack]);
      } else {
        classNames.push('fa');
        classNames.push('fa-' + name);
        size && classNames.push('fa-' + size);
        spin && classNames.push('fa-spin');
        pulse && classNames.push('fa-pulse');
        border && classNames.push('fa-border');
        fixedWidth && classNames.push('fa-fw');
        inverse && classNames.push('fa-inverse');
        flip && classNames.push('fa-flip-' + flip);
        rotate && classNames.push('fa-rotate-' + rotate);
        stack && classNames.push('fa-stack-' + stack);
      }

      // Add any custom class names at the end.
      className && classNames.push(className);
      return _react2.default.createElement(tag, _extends({}, props, { 'aria-hidden': true, className: classNames.join(' ') }), ariaLabel ? _react2.default.createElement('span', { style: _screenReaderStyles2.default }, ariaLabel) : null);
    }
  }]);

  return FontAwesome;
}(_react2.default.Component);

FontAwesome.propTypes = {
  ariaLabel: _propTypes2.default.string,
  border: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  fixedWidth: _propTypes2.default.bool,
  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  inverse: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  pulse: _propTypes2.default.bool,
  rotate: _propTypes2.default.oneOf([90, 180, 270]),
  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
  spin: _propTypes2.default.bool,
  stack: _propTypes2.default.oneOf(['1x', '2x']),
  tag: _propTypes2.default.string
};

exports.default = FontAwesome;
module.exports = exports['default'];

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/**
*
* A
*
*/




function A(_ref) {
  var link = _ref.link,
      navigateTo = _ref.navigateTo;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    { onClick: function onClick() {
        return navigateTo(link.url);
      }, className: __WEBPACK_IMPORTED_MODULE_1__styles_css___default.a.a },
    link.name
  );
}

A.propTypes = {
  navigateTo: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired,
  link: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.shape({
    name: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired,
    url: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired
  })
};

/* harmony default export */ __webpack_exports__["a"] = (A);

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0px, 0px, 0px, 0px)',
  border: '0px'
};
module.exports = exports['default'];

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_fontawesome__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__A__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_css__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_css__);
/**
*
* PageHeader
*
*/







function PageHeader(_ref) {
  var breadcrumbs = _ref.breadcrumbs,
      loading = _ref.loading,
      navigateTo = _ref.navigateTo;

  var breadcrumbsElements = breadcrumbs.map(function (breadcrumb, i) {
    if (breadcrumb.url) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: i },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__A__["a" /* default */], { navigateTo: navigateTo, link: breadcrumb })
      );
    } else {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: i },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'strong',
          null,
          breadcrumb.name
        )
      );
    }
  });

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_3__styles_css___default.a.pageHeader + ' row wrapper breadcrumb-title-border white-bg page-heading' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'col-lg-12' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        { style: { marginTop: '14px !important' } },
        breadcrumbs[breadcrumbs.length - 1].name,
        ' ',
        loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_fontawesome___default.a, { name: 'spinner', spin: true }),
        ' '
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ol',
        { className: 'breadcrumb' },
        breadcrumbsElements
      )
    )
  );
}

PageHeader.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool.isRequired,
  breadcrumbs: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (PageHeader);

/***/ }),

/***/ 858:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(776);
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
		module.hot.accept(776, function() {
			var newContent = __webpack_require__(776);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(777);
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
		module.hot.accept(777, function() {
			var newContent = __webpack_require__(777);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=6.js.map
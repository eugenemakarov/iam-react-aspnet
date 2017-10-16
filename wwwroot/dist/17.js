webpackJsonp([17],{

/***/ 1384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export selectProfileContainerDomain */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(172);


/**
 * Direct selector to the profileContainer state domain
 */
var selectProfileContainerDomain = function selectProfileContainerDomain() {
  return function (state) {
    return state.get('profile');
  };
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProfileContainer
 */

var selectProfileContainer = function selectProfileContainer() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["a" /* createSelector */])(selectProfileContainerDomain(), function (substate) {
    return substate.toJS();
  });
};

/* harmony default export */ __webpack_exports__["a"] = (selectProfileContainer);


/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileContainer", function() { return ProfileContainer; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectors__ = __webpack_require__(1384);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ProfileContainer: {
    displayName: 'ProfileContainer'
  }
};

var _cVSOReactDotnetNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3_c_VSO_ReactDotnet_node_modules_react_transform_hmr_lib_index_js___default()({
  filename: 'c:/VSO/ReactDotnet/wwwroot/app/containers/profileContainer/index.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _cVSOReactDotnetNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1_c_VSO_ReactDotnet_node_modules_react_transform_catch_errors_lib_index_js___default()({
  filename: 'c:/VSO/ReactDotnet/wwwroot/app/containers/profileContainer/index.js',
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
 * ProfileContainer
 *
 */





var ProfileContainer = _wrapComponent('ProfileContainer')(function (_React$Component) {
  _inherits(ProfileContainer, _React$Component);

  function ProfileContainer() {
    _classCallCheck(this, ProfileContainer);

    return _possibleConstructorReturn(this, (ProfileContainer.__proto__ || Object.getPrototypeOf(ProfileContainer)).apply(this, arguments));
  }

  _createClass(ProfileContainer, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        null,
        'this is profile page'
      );
    }
  }]);

  return ProfileContainer;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component));

var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__selectors__["a" /* default */])();

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ProfileContainer));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(170)(module)))

/***/ })

});
//# sourceMappingURL=17.js.map
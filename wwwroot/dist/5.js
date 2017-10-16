webpackJsonp([5],{

/***/ 1236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(true);
// imports


// module
exports.push([module.i, ".home__wwwroot-app-components-Home-styles__1jYWE { /* stylelint-disable */\r\n\r\n}\r\n", "", {"version":3,"sources":["c:/VSO/ReactDotnet/wwwroot/app/components/Home/styles.css"],"names":[],"mappings":"AAAA,mDAAQ,uBAAuB;;CAE9B","file":"styles.css","sourcesContent":[".home { /* stylelint-disable */\r\n\r\n}\r\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"home": "home__wwwroot-app-components-Home-styles__1jYWE"
};

/***/ }),

/***/ 1332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__(1333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PageHeader__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_css__ = __webpack_require__(1525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_css__);
/**
*
* Home
*
*/









function Home(_ref) {
  var breadcrumbs = _ref.breadcrumbs,
      navigateTo = _ref.navigateTo;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_4__styles_css___default.a.home },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PageHeader__["a" /* default */], { loading: false, breadcrumbs: breadcrumbs, navigateTo: navigateTo }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h4',
      { style: { fontWeight: 100 } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* default */].body)
    )
  );
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 1333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl__ = __webpack_require__(173);
/*
 * Home Messages
 *
 * This contains all the text for the Home component.
 */


/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_intl__["d" /* defineMessages */])({
  header: {
    id: 'app.components.Home.header',
    defaultMessage: 'IAM ADMIN HOME.'
  },
  body: {
    id: 'app.components.Home.body',
    defaultMessage: 'Welcome to IAM Admin for Emanage CRM.'
  }
}));

/***/ }),

/***/ 1359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export selectDashboardContainerDomain */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(172);


/**
 * Direct selector to the dashboardContainer state domain
 */
var selectDashboardContainerDomain = function selectDashboardContainerDomain() {
  return function (state) {
    return state.get('dashboardContainer');
  };
};

/**
 * Other specific selectors
 */

/**
 * Default selector used by DashboardContainer
 */

var selectDashboardContainer = function selectDashboardContainer() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["a" /* createSelector */])(selectDashboardContainerDomain(), function (substate) {
    return Object.assign(substate.toJS());
  });
};

/* harmony default export */ __webpack_exports__["a"] = (selectDashboardContainer);


/***/ }),

/***/ 1496:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactSideEffect = __webpack_require__(1517);

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _deepEqual = __webpack_require__(175);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _objectAssign = __webpack_require__(269);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstantsJs = __webpack_require__(1497);

var _PlainComponent = __webpack_require__(1498);

var _PlainComponent2 = _interopRequireDefault(_PlainComponent);

var HELMET_ATTRIBUTE = "data-react-helmet";

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    var reversedPropsList = [].concat(propsList).reverse();

    for (var i = 0; i < reversedPropsList.length; i++) {
        var props = reversedPropsList[i];

        if (props[property]) {
            return props[property];
        }
    }

    return null;
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, "title");
    var innermostTemplate = getInnermostProperty(propsList, "titleTemplate");

    if (innermostTemplate && innermostTitle) {
        return innermostTemplate.replace(/\%s/g, innermostTitle);
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, "defaultTitle");

    return innermostTitle || innermostDefaultTitle || "";
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, "onChangeClientState") || function () {};
};

var getHtmlAttributesFromPropsList = function getHtmlAttributesFromPropsList(propsList) {
    return propsList.filter(function (props) {
        return typeof props[_HelmetConstantsJs.TAG_NAMES.HTML] !== "undefined";
    }).map(function (props) {
        return props[_HelmetConstantsJs.TAG_NAMES.HTML];
    }).reduce(function (html, current) {
        return _extends({}, html, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[_HelmetConstantsJs.TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[_HelmetConstantsJs.TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    var tagList = propsList.filter(function (props) {
        return typeof props[tagName] !== "undefined";
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = undefined;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstantsJs.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstantsJs.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstantsJs.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstantsJs.TAG_PROPERTIES.CSS_TEXT)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = (0, _objectAssign2["default"])({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();

    return tagList;
};

var updateTitle = function updateTitle(title) {
    document.title = title || document.title;
};

var updateHtmlAttributes = function updateHtmlAttributes(attributes) {
    var htmlTag = document.getElementsByTagName("html")[0];
    var helmetAttributeString = htmlTag.getAttribute(HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";
        htmlTag.setAttribute(attribute, value);

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var i = attributesToRemove.length - 1; i >= 0; i--) {
        htmlTag.removeAttribute(attributesToRemove[i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        htmlTag.removeAttribute(HELMET_ATTRIBUTE);
    } else {
        htmlTag.setAttribute(HELMET_ATTRIBUTE, helmetAttributes.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector("head");
    var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = undefined;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === "innerHTML") {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === "cssText") {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateHtmlAttributesAsString = function generateHtmlAttributesAsString(attributes) {
    var keys = Object.keys(attributes);
    var attributeString = "";

    for (var i = 0; i < keys.length; i++) {
        var attribute = keys[i];
        var attr = typeof attributes[attribute] !== "undefined" ? attribute + "=\"" + attributes[attribute] + "\"" : "" + attribute;
        attributeString += attr + " ";
    }

    return attributeString.trim();
};

var generateTitleAsString = function generateTitleAsString(type, title) {
    var stringifiedMarkup = "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(title) + "</" + type + ">";

    return stringifiedMarkup;
};

var generateTagsAsString = function generateTagsAsString(type, tags) {
    var stringifiedMarkup = tags.map(function (tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === "innerHTML" || attribute === "cssText");
        }).map(function (attribute) {
            if (typeof tag[attribute] === "undefined") {
                return attribute;
            }

            var encodedValue = encodeSpecialCharacters(tag[attribute]);
            return attribute + "=\"" + encodedValue + "\"";
        }).join(" ").trim();

        var tagContent = tag.innerHTML || tag.cssText || "";

        return "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (type === _HelmetConstantsJs.TAG_NAMES.SCRIPT || type === _HelmetConstantsJs.TAG_NAMES.STYLE ? ">" + tagContent + "</" + type + ">" : "/>");
    }).join("");

    return stringifiedMarkup;
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title) {
    // assigning into an array to define toString function on it
    var component = [_react2["default"].createElement(_HelmetConstantsJs.TAG_NAMES.TITLE, _defineProperty({
        key: title
    }, HELMET_ATTRIBUTE, true), title)];

    return component;
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    /* eslint-disable react/display-name */
    var component = tags.map(function (tag, i) {
        var mappedTag = _defineProperty({
            key: i
        }, HELMET_ATTRIBUTE, true);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = _HelmetConstantsJs.REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return _react2["default"].createElement(type, mappedTag);
    });

    return component;
    /* eslint-enable react/display-name */
};

var getMethodsForTag = function getMethodsForTag(type, tags) {
    switch (type) {
        case _HelmetConstantsJs.TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags);
                }
            };
        case _HelmetConstantsJs.TAG_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return tags;
                },
                toString: function toString() {
                    return generateHtmlAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var htmlAttributes = _ref.htmlAttributes;
    var title = _ref.title;
    var baseTag = _ref.baseTag;
    var metaTags = _ref.metaTags;
    var linkTags = _ref.linkTags;
    var scriptTags = _ref.scriptTags;
    var styleTags = _ref.styleTags;
    return {
        htmlAttributes: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.HTML, htmlAttributes),
        title: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.TITLE, title),
        base: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.BASE, baseTag),
        meta: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.META, metaTags),
        link: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.LINK, linkTags),
        script: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.SCRIPT, scriptTags),
        style: getMethodsForTag(_HelmetConstantsJs.TAG_NAMES.STYLE, styleTags)
    };
};

var Helmet = function Helmet(Component) {
    /* eslint-disable react/no-multi-comp */

    var HelmetWrapper = (function (_React$Component) {
        _inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            _classCallCheck(this, HelmetWrapper);

            _get(Object.getPrototypeOf(HelmetWrapper.prototype), "constructor", this).apply(this, arguments);
        }

        /* eslint-enable react/no-multi-comp */

        _createClass(HelmetWrapper, [{
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
                return !(0, _deepEqual2["default"])(this.props, nextProps);
            }

            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.
        }, {
            key: "render",
            value: function render() {
                return _react2["default"].createElement(Component, this.props);
            }
        }], [{
            key: "propTypes",

            /**
             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
             * @param {String} title: "Title"
             * @param {String} defaultTitle: "Default Title"
             * @param {String} titleTemplate: "MySite.com - %s"
             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
             * @param {Array} style: [{"type": "text/css", "cssText": "div{ display: block; color: blue; }"}]
             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
             */
            value: {
                htmlAttributes: _react2["default"].PropTypes.object,
                title: _react2["default"].PropTypes.string,
                defaultTitle: _react2["default"].PropTypes.string,
                titleTemplate: _react2["default"].PropTypes.string,
                base: _react2["default"].PropTypes.object,
                meta: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.object),
                link: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.object),
                script: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.object),
                style: _react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.object),
                onChangeClientState: _react2["default"].PropTypes.func
            },
            enumerable: true
        }, {
            key: "peek",
            value: Component.peek,
            enumerable: true
        }, {
            key: "rewind",
            value: function value() {
                var mappedState = Component.rewind();
                if (!mappedState) {
                    // provide fallback if mappedState is undefined
                    mappedState = mapStateOnServer({
                        htmlAttributes: [],
                        title: "",
                        baseTag: [],
                        metaTags: [],
                        linkTags: [],
                        scriptTags: [],
                        styleTags: []
                    });
                }

                return mappedState;
            },
            enumerable: true
        }, {
            key: "canUseDOM",
            set: function set(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);

        return HelmetWrapper;
    })(_react2["default"].Component);

    return HelmetWrapper;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        htmlAttributes: getHtmlAttributesFromPropsList(propsList),
        title: getTitleFromPropsList(propsList),
        baseTag: getBaseTagFromPropsList([_HelmetConstantsJs.TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(_HelmetConstantsJs.TAG_NAMES.META, [_HelmetConstantsJs.TAG_PROPERTIES.NAME, _HelmetConstantsJs.TAG_PROPERTIES.CHARSET, _HelmetConstantsJs.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstantsJs.TAG_PROPERTIES.PROPERTY], propsList),
        linkTags: getTagsFromPropsList(_HelmetConstantsJs.TAG_NAMES.LINK, [_HelmetConstantsJs.TAG_PROPERTIES.REL, _HelmetConstantsJs.TAG_PROPERTIES.HREF], propsList),
        scriptTags: getTagsFromPropsList(_HelmetConstantsJs.TAG_NAMES.SCRIPT, [_HelmetConstantsJs.TAG_PROPERTIES.SRC, _HelmetConstantsJs.TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(_HelmetConstantsJs.TAG_NAMES.STYLE, [_HelmetConstantsJs.TAG_PROPERTIES.CSS_TEXT], propsList),
        onChangeClientState: getOnChangeClientState(propsList)
    };
};

var handleClientStateChange = function handleClientStateChange(newState) {
    var htmlAttributes = newState.htmlAttributes;
    var title = newState.title;
    var baseTag = newState.baseTag;
    var metaTags = newState.metaTags;
    var linkTags = newState.linkTags;
    var scriptTags = newState.scriptTags;
    var styleTags = newState.styleTags;
    var onChangeClientState = newState.onChangeClientState;

    updateHtmlAttributes(htmlAttributes);

    updateTitle(title);

    var tagUpdates = {
        baseTag: updateTags(_HelmetConstantsJs.TAG_NAMES.BASE, baseTag),
        metaTags: updateTags(_HelmetConstantsJs.TAG_NAMES.META, metaTags),
        linkTags: updateTags(_HelmetConstantsJs.TAG_NAMES.LINK, linkTags),
        scriptTags: updateTags(_HelmetConstantsJs.TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(_HelmetConstantsJs.TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType];
        var newTags = _tagUpdates$tagType.newTags;
        var oldTags = _tagUpdates$tagType.oldTags;

        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    onChangeClientState(newState, addedTags, removedTags);
};

var SideEffect = (0, _reactSideEffect2["default"])(reducePropsToState, handleClientStateChange, mapStateOnServer);

// PlainComponent is used to be a blank component decorated by react-side-effect
exports["default"] = Helmet(SideEffect(_PlainComponent2["default"]));
module.exports = exports["default"];

/***/ }),

/***/ 1497:
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var TAG_NAMES = {
    HTML: "htmlAttributes",
    TITLE: "title",
    BASE: "base",
    META: "meta",
    LINK: "link",
    SCRIPT: "script",
    STYLE: "style"
};

exports.TAG_NAMES = TAG_NAMES;
var TAG_PROPERTIES = {
    NAME: "name",
    CHARSET: "charset",
    HTTPEQUIV: "http-equiv",
    REL: "rel",
    HREF: "href",
    PROPERTY: "property",
    SRC: "src",
    INNER_HTML: "innerHTML",
    CSS_TEXT: "cssText"
};

exports.TAG_PROPERTIES = TAG_PROPERTIES;
var REACT_TAG_MAP = {
    "charset": "charSet",
    "http-equiv": "httpEquiv"
};
exports.REACT_TAG_MAP = REACT_TAG_MAP;

/***/ }),

/***/ 1498:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var PlainComponent = (function (_React$Component) {
    _inherits(PlainComponent, _React$Component);

    function PlainComponent() {
        _classCallCheck(this, PlainComponent);

        _get(Object.getPrototypeOf(PlainComponent.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(PlainComponent, [{
        key: "render",
        value: function render() {
            return null;
        }
    }]);

    return PlainComponent;
})(_react2["default"].Component);

exports["default"] = PlainComponent;
module.exports = exports["default"];

/***/ }),

/***/ 1517:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _fbjsLibExecutionEnvironment = __webpack_require__(1518);

var _fbjsLibExecutionEnvironment2 = _interopRequireDefault(_fbjsLibExecutionEnvironment);

var _fbjsLibShallowEqual = __webpack_require__(1519);

var _fbjsLibShallowEqual2 = _interopRequireDefault(_fbjsLibShallowEqual);

module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }
  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }
  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state = undefined;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = (function (_Component) {
      _inherits(SideEffect, _Component);

      function SideEffect() {
        _classCallCheck(this, SideEffect);

        _Component.apply(this, arguments);
      }

      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may ony call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !_fbjsLibShallowEqual2['default'](nextProps, this.props);
      };

      SideEffect.prototype.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      SideEffect.prototype.render = function render() {
        return _react2['default'].createElement(WrappedComponent, this.props);
      };

      _createClass(SideEffect, null, [{
        key: 'displayName',

        // Try to use displayName of wrapped component
        value: 'SideEffect(' + getDisplayName(WrappedComponent) + ')',

        // Expose canUseDOM so tests can monkeypatch it
        enumerable: true
      }, {
        key: 'canUseDOM',
        value: _fbjsLibExecutionEnvironment2['default'].canUseDOM,
        enumerable: true
      }]);

      return SideEffect;
    })(_react.Component);

    return SideEffect;
  };
};

/***/ }),

/***/ 1518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),

/***/ 1519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shallowEqual
 * @typechecks
 * 
 */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),

/***/ 1525:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1236);
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
		module.hot.accept(12361236, function() {
			var newContent = __webpack_require__(1236);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardContainer", function() { return DashboardContainer; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet__ = __webpack_require__(1496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors__ = __webpack_require__(1359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Home__ = __webpack_require__(1332);





var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  DashboardContainer: {
    displayName: 'DashboardContainer'
  }
};

var _cVSOReactDotnetNode_modulesReactTransformHmrLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_3_c_VSO_ReactDotnet_node_modules_react_transform_hmr_lib_index_js___default()({
  filename: 'c:/VSO/ReactDotnet/wwwroot/app/containers/DashboardContainer/index.js',
  components: _components,
  locals: [module],
  imports: [__WEBPACK_IMPORTED_MODULE_2_react___default.a]
});

var _cVSOReactDotnetNode_modulesReactTransformCatchErrorsLibIndexJs2 = __WEBPACK_IMPORTED_MODULE_1_c_VSO_ReactDotnet_node_modules_react_transform_catch_errors_lib_index_js___default()({
  filename: 'c:/VSO/ReactDotnet/wwwroot/app/containers/DashboardContainer/index.js',
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
 * DashboardContainer
 *
 */







var DashboardContainer = _wrapComponent('DashboardContainer')(function (_React$Component) {
  _inherits(DashboardContainer, _React$Component);

  function DashboardContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DashboardContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DashboardContainer.__proto__ || Object.getPrototypeOf(DashboardContainer)).call.apply(_ref, [this].concat(args))), _this), _this.navigateTo = function (menuItem) {
      _this.props.actions.push(menuItem);
    }, _this.breadcrumbs = [{ url: '', name: 'Home' }], _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function


  _createClass(DashboardContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Home__["a" /* default */], { breadcrumbs: this.breadcrumbs, navigateTo: this.navigateTo });
    }
  }]);

  return DashboardContainer;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component));

var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__selectors__["a" /* default */])();

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(DashboardContainer));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(170)(module)))

/***/ }),

/***/ 760:
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

/***/ 761:
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

/***/ 776:
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

var _screenReaderStyles = __webpack_require__(823);

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

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(855);
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

/***/ 823:
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

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_fontawesome__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__A__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_css__ = __webpack_require__(856);
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

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(760);
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
		module.hot.accept(760760, function() {
			var newContent = __webpack_require__(760);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(761);
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
		module.hot.accept(761761, function() {
			var newContent = __webpack_require__(761);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=5.js.map
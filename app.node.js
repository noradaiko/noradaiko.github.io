module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(32);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(7);

  var _coreLocation = __webpack_require__(6);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(8);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(10);
    }, '/500': function _() {
      return __webpack_require__(11);
    }, '/about': function about() {
      return __webpack_require__(12);
    }, '/blog/': function blog() {
      return __webpack_require__(13);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(14);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(15);
    }, '/': function _() {
      return __webpack_require__(16);
    }, '/works/amembo': function worksAmembo() {
      return __webpack_require__(17);
    }, '/works/freedbtagger': function worksFreedbtagger() {
      return __webpack_require__(18);
    }, '/works/': function works() {
      return __webpack_require__(19);
    }, '/works/menkiki': function worksMenkiki() {
      return __webpack_require__(20);
    }, '/works/pichu2': function worksPichu2() {
      return __webpack_require__(21);
    }, '/works/the-four-painters': function worksTheFourPainters() {
      return __webpack_require__(22);
    }, '/works/walknote': function worksWalknote() {
      return __webpack_require__(23);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview', location.pathname);
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(25);

  var _coreLocation = __webpack_require__(6);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({}, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(5)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.works-list img.image-eyecatch, .works-list img.image-screenshot, .work-detail img.image-eyecatch, .work-detail img.image-screenshot {\n\n    width: 100%;\n\n    border-radius: 4px;\n\n    //border: 8px solid white;\n\n    -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n\n            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n.works-list img.image-screenshot, .work-detail img.image-screenshot {\n\n    margin-bottom: 1em;\n}\n\n.works-list a > h3, .work-detail a > h3 {\n\n    color: #525252;\n}\n\n.works-list h3, .work-detail h3 {\n\n    text-align: center;\n\n    font-size: 1.4em;\n\n    font-weight: lighter;\n}\n\n.works-list h4, .work-detail h4 {\n\n    font-size: 1.0em;\n}\n\n.works-list .work-description, .work-detail .work-description {\n\n    margin-bottom: 1em;\n}\n\n.works-list .work-description p, .work-detail .work-description p {\n\n    margin: 0.4em 0;\n}\n\n.works-list .work-description dd, .work-detail .work-description dd {\n\n    margin: 0.3em 0.0em 0.6em 0.3em;\n\n    font-weight: lighter;\n}\n\n.works-list .work-long-description, .work-detail .work-long-description {\n\n    font-weight: lighter;\n}\n\n.works-list .breadcrumb-chevron, .work-detail .breadcrumb-chevron {\n\n    color: rgba(0,0,0,0.2);\n\n    margin: 0 0.3em;\n}\n\n.works-list img.image-appstore, .work-detail img.image-appstore {\n\n    display: block;\n\n    width: 200px;\n\n    margin: 1em auto;\n}\n", ""]);

  // exports


/***/ },
/* 5 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(7);

  var _historyLibCreateBrowserHistory = __webpack_require__(29);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(30);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(31);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(24);

  var _Navigation = __webpack_require__(9);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  var _Link = __webpack_require__(2);

  var _Link2 = _interopRequireDefault(_Link);

  var _reactBootstrap = __webpack_require__(3);

  function Layout(_ref) {
    var children = _ref.children;

    return _react2['default'].createElement(
      _reactBootstrap.Grid,
      { className: 'Layout' },
      _react2['default'].createElement(
        _reactBootstrap.Row,
        null,
        _react2['default'].createElement(
          _reactBootstrap.Col,
          { sm: 3, className: 'header-left-side' },
          _react2['default'].createElement(
            'a',
            { href: '/', onClick: _Link2['default'].handleClick },
            _react2['default'].createElement('img', { src: '/dog-icon.png', width: '120px' })
          ),
          _react2['default'].createElement(
            'h1',
            { className: 'title' },
            'ODORUINU.NET'
          ),
          _react2['default'].createElement(_Navigation2['default'], null)
        ),
        _react2['default'].createElement(
          _reactBootstrap.Col,
          { sm: 9 },
          children
        )
      )
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(26);

  var _Link = __webpack_require__(2);

  var _Link2 = _interopRequireDefault(_Link);

  function Navigation() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'ul',
        { className: 'Navigation', role: 'menu' },
        _react2['default'].createElement(
          'li',
          { className: 'Navigation-item' },
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/about', onClick: _Link2['default'].handleClick },
            'About'
          )
        ),
        _react2['default'].createElement(
          'li',
          { className: 'Navigation-item' },
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: '/works/', onClick: _Link2['default'].handleClick },
            'Works'
          )
        ),
        _react2['default'].createElement(
          'li',
          { className: 'Navigation-item' },
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: 'http://illust.odoruinu.net/' },
            'Illustrations'
          )
        ),
        _react2['default'].createElement(
          'li',
          { className: 'Navigation-item' },
          _react2['default'].createElement(
            'a',
            { className: 'Navigation-link', href: 'http://blog.odoruinu.net/' },
            'Blog'
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'Navigation-icon-group' },
        _react2['default'].createElement(
          'a',
          { className: 'Navigation-link Navigation-icon', href: 'https://www.instagram.com/noradaiko/' },
          _react2['default'].createElement('i', { className: 'fa fa-instagram' })
        ),
        _react2['default'].createElement(
          'a',
          { className: 'Navigation-link Navigation-icon', href: 'https://github.com/noradaiko' },
          _react2['default'].createElement('i', { className: 'fa fa-github' })
        ),
        _react2['default'].createElement(
          'a',
          { className: 'Navigation-link Navigation-icon', href: 'https://twitter.com/noradaiko' },
          _react2['default'].createElement('i', { className: 'fa fa-twitter' })
        )
      )
    );
  }

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(27);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'about' },
          _react2['default'].createElement(
            'h2',
            null,
            'Takuya Matsuyama'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Digital Craftsman ( Artist / Developer / Designer )'
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement('img', { className: 'top-image', src: 'https://farm6.staticflickr.com/5688/22863546315_12dd51f402_h.jpg', width: '100%', alt: 'L1011534' })
          ),
          _react2['default'].createElement(
            'div',
            { className: 'section' },
            _react2['default'].createElement(
              'strong',
              null,
              'Bio: '
            ),
            _react2['default'].createElement(
              'div',
              null,
              '1984 大阪生まれ / Born in Osaka, Japan.'
            ),
            _react2['default'].createElement(
              'div',
              null,
              '2010 奈良先端科学技術大学院大学情報科学研究科修士課程修了 / Completed the Master\'s Program in the Graduate School of Information Science at Nara Institute of Science and Technology'
            ),
            _react2['default'].createElement(
              'div',
              null,
              '2010 ヤフー株式会社入社 / Works at Yahoo! Japan'
            ),
            _react2['default'].createElement(
              'div',
              null,
              '2012 独立 / Currently working as a freelancer'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'section' },
            _react2['default'].createElement(
              'strong',
              null,
              'Work: '
            ),
            _react2['default'].createElement(
              'div',
              null,
              'デジタル領域を中心に、自身の欲しいと思ったサービスを制作。 企画からデザイン・開発・運用まで全て一人で行う。 iOSなどのスマホアプリからウェブアプリまで、技術やプラットフォームを限定せず幅広く活動。 その傍ら、フリーランスとして様々なプロジェクトに参加。 枠に囚われずオーダーメイドで柔軟にモノを作る「クラフトマンシップ」を得意とする。'
            ),
            _react2['default'].createElement(
              'div',
              null,
              'He creates digital services/stuffs which he wants itself. He is a \'Digital Craftsman\', that is, he does plan, design, code and operate through all his products. His interests and skills are not limited to a certain platform and a technology but including iOS app, web app, machine learning, etc. He participates many projects as a freelancer who creates new stuff fully customized from scratch.'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'section' },
            _react2['default'].createElement(
              'strong',
              null,
              'I ♥: '
            ),
            _react2['default'].createElement(
              'div',
              null,
              'Art, Music, Drawing, Playing Drums, Photography, Leica, Machine Learning'
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'section' },
            _react2['default'].createElement(
              'strong',
              null,
              'Contact me: '
            ),
            _react2['default'].createElement(
              'ul',
              null,
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: 'https://twitter.com/noradaiko' },
                  'Twitter @noradaiko'
                )
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: 'https://github.com/noradaiko' },
                  'GitHub'
                )
              ),
              _react2['default'].createElement(
                'li',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: 'mailto:nora@odoruinu.net' },
                  'E-mail'
                )
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  __webpack_require__(28);

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  // import { Grid, Col, Row } from 'react-bootstrap';

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement('img', { className: 'top-image', src: 'http://41.media.tumblr.com/250f26d9da2b15641b9ed84d3a1f2845/tumblr_o0h0lr04GB1v49knto1_1280.jpg', width: '100%' })
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsLink = __webpack_require__(2);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _reactBootstrap = __webpack_require__(3);

  __webpack_require__(4);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'work-detail' },
          _react2['default'].createElement(
            'h2',
            null,
            _react2['default'].createElement(
              'a',
              { href: '/works/', onClick: _componentsLink2['default'].handleClick },
              'Works'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'breadcrumb-chevron' },
              '>'
            ),
            'amembo'
          ),
          _react2['default'].createElement(
            _reactBootstrap.Row,
            null,
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement('img', { src: '/works/amembo_eyecatch.png', className: 'image-eyecatch' }),
              _react2['default'].createElement(
                'h3',
                null,
                _react2['default'].createElement('img', { src: '/works/amembo_icon.png' })
              ),
              _react2['default'].createElement(
                'h3',
                null,
                'amembo'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'div',
                  null,
                  '「MSN Messenger」と連係して特定ユーザーとP2Pフォルダ共有できる「Amembo」'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'P2P private file sharing tool supporting MSN Messenger'
                )
              ),
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                  'ul',
                  null,
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://odoruinu.net.s3.amazonaws.com/software/amembo/amembo0515123.zip' },
                      'ダウンロード'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://www23.atwiki.jp/amembo/' },
                      '使い方wiki'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    'バージョン: 0.5.15.123'
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    '最終更新日: 2008/03/23'
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    '対応OS: Windows 2000/XP'
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-long-description' },
                _react2['default'].createElement(
                  'ul',
                  null,
                  _react2['default'].createElement(
                    'li',
                    null,
                    'ファイル転送がサイズ制限無く高速に出来ます。'
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    '複数のコンピュータ間で同時に通信が出来ます。'
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    '簡単接続機能により、面倒な接続作業を自動で行います。'
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    '一つのポート開放だけで、様々な通信が出来る強力なプロトコル。'
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    'IM機能を装備しています。会話中に写真を表示したりもできます。'
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    'ファイル共有機能で、設定した公開フォルダを相手に見せることが出来ます。'
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    'MSN/Windowsメッセンジャーからの招待で接続できます。'
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    '画面転送機能で、相手に自分のデスクトップを見せることが出来ます。'
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement(
                'a',
                { href: '/works/amembo_01.gif', target: '_blank' },
                _react2['default'].createElement('img', { src: '/works/amembo_01.gif', className: 'image-screenshot' })
              ),
              _react2['default'].createElement(
                'a',
                { href: '/works/amembo_02.gif', target: '_blank' },
                _react2['default'].createElement('img', { src: '/works/amembo_02.gif', className: 'image-screenshot' })
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '掲載実績'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'ul',
                  null,
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://www.forest.impress.co.jp/article/2006/01/18/amembo.html', target: '_blank' },
                      '窓の杜ニュース'
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsLink = __webpack_require__(2);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _reactBootstrap = __webpack_require__(3);

  __webpack_require__(4);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'work-detail' },
          _react2['default'].createElement(
            'h2',
            null,
            _react2['default'].createElement(
              'a',
              { href: '/works/', onClick: _componentsLink2['default'].handleClick },
              'Works'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'breadcrumb-chevron' },
              '>'
            ),
            'freeDBTagger'
          ),
          _react2['default'].createElement(
            _reactBootstrap.Row,
            null,
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement('img', { src: '/works/freedbtagger_eyecatch.png', className: 'image-eyecatch' }),
              _react2['default'].createElement(
                'h3',
                null,
                _react2['default'].createElement('img', { src: '/works/freedbtagger_icon.gif' })
              ),
              _react2['default'].createElement(
                'h3',
                null,
                'freeDBTagger'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'div',
                  null,
                  '楽曲長の組み合わせでアルバムを特定して楽曲情報を自動入力'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'Automatic Audio File Tagger using FreeDB'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    'ul',
                    null,
                    _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                        'a',
                        { className: 'link-appstore', href: 'http://odoruinu.net.s3.amazonaws.com/software/freedbtagger/fdbt105.zip' },
                        'ダウンロード'
                      )
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      'バージョン: 1.0.5'
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      '最終更新日: 2009/02/16'
                    ),
                    _react2['default'].createElement(
                      'li',
                      null,
                      '対応OS: Windows 2000/XP'
                    )
                  )
                ),
                _react2['default'].createElement(
                  'p',
                  null,
                  'アルバム内楽曲の再生時間の組み合わせで、CDDBサーバー“freeDB.org”を検索してアルバムを特定、楽曲情報を取得できるID3タグ一括編集ソフト。本ソフトを起動し、読み込んだアルバム1枚分の音楽ファイルの曲順を整えて［アルバム検索］を実行すれば、あとは本ソフトが、オープンソースで運営されているCDDBサーバー“freeDB.org”で再生時間の組み合わせからアルバムを特定して、アルバム名や曲名、アーチスト名などの情報を取得してくれる。MP3/WMA/Ogg Vorbis/AAC/Monkey\'s Audio/MPEGplus/FLAC/Twin VQ/WavPackファイルの楽曲情報を取得・編集できるほか、CDAファイルの楽曲情報を表示可能。MP3ファイルのタグに登録する場合のタグ形式は、ID3v1・ID3v2に対応しており、設定画面で選択可能。タグ項目内の文字数が30文字以上の場合のみ、ID3v2に登録する機能も備えている。'
                )
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement(
                'a',
                { href: '/works/freedbtagger_01.jpg', target: '_blank' },
                _react2['default'].createElement('img', { src: '/works/freedbtagger_01.jpg', className: 'image-screenshot' })
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '掲載実績'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'ul',
                  null,
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://www.forest.impress.co.jp/library/software/freedbtagger/', target: '_blank' },
                      '窓の杜ライブラリ'
                    )
                  )
                )
              ),
              _react2['default'].createElement(
                'h3',
                null,
                'ユーザさんの声'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'dl',
                  null,
                  _react2['default'].createElement(
                    'dt',
                    null,
                    'FLACにも対応 - よーすけさん'
                  ),
                  _react2['default'].createElement(
                    'dd',
                    null,
                    '音質にこだわってFLACを使用している場合、 なかなかタグを自動で付けられるソフトはありませんが、 これはCDDBから曲情報をDLまでしてくれるので、 とてもお手軽簡単です。'
                  ),
                  _react2['default'].createElement(
                    'dt',
                    null,
                    'CDDB対応のタグエディタ - noname_24さん'
                  ),
                  _react2['default'].createElement(
                    'dd',
                    null,
                    '純粋なタグ打ちソフトとしての能力はSuperTagEditorの方が優秀ですがこのソフトはCDDBに対応しているのが最大の利点です CDからだけではなくmp3など圧縮後の状態からでも取得できるのですでに作成済みの曲整理が楽になりました'
                  ),
                  _react2['default'].createElement(
                    'dt',
                    null,
                    '昔の曲にタグを入れるに最適 - るるさん'
                  ),
                  _react2['default'].createElement(
                    'dd',
                    null,
                    '最近のリッピングソフトであれば自動で曲名を持ってきてくれますが以前リッピングしたままでタグが付いてない曲にタグを付けるのには最適です。 参照しているCDDBについてもかなりマイナーなものまで曲名を拾ってくれるのでびっくりします。'
                  ),
                  _react2['default'].createElement(
                    'dt',
                    null,
                    '2 in 1 - マルちゃんさん'
                  ),
                  _react2['default'].createElement(
                    'dd',
                    null,
                    'タグ編集はいろいろなソフトが出ていますが、DBから情報を拾ってくれる機能付では、このソフトが最高です。 操作も簡単で、手放せません。'
                  ),
                  _react2['default'].createElement(
                    'dt',
                    null,
                    '便利 - Masaki4さん'
                  ),
                  _react2['default'].createElement(
                    'dd',
                    null,
                    '普通CDDBというとCDを入れた状態でデータベースから読み込んでいきますが、このソフトはMP3などのファイルになっていても使えます。（もちろん、CDの通りに曲を並べなければいけませんが・・・） ただ、ほんのちょっと不安定さを感じたので４つ...'
                  )
                ),
                _react2['default'].createElement(
                  'a',
                  { href: 'http://www.vector.co.jp/soft/cmt/win95/art/se350576.html', target: '_blank' },
                  'Vectorより'
                )
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsLink = __webpack_require__(2);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _reactBootstrap = __webpack_require__(3);

  __webpack_require__(4);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'works-list' },
          _react2['default'].createElement(
            'h2',
            null,
            'Works'
          ),
          _react2['default'].createElement(
            _reactBootstrap.Row,
            null,
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement(
                'a',
                { href: '/works/walknote', onClick: _componentsLink2['default'].handleClick },
                _react2['default'].createElement('img', { src: '/works/walknote_eyecatch.png', className: 'image-eyecatch' }),
                _react2['default'].createElement(
                  'h3',
                  null,
                  'walknote'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'div',
                  null,
                  '好みを理解して推薦する無料で聴き放題な音楽プレーヤー'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'Free music discovery player'
                )
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement(
                'a',
                { href: '/works/the-four-painters', onClick: _componentsLink2['default'].handleClick },
                _react2['default'].createElement('img', { src: '/works/the-four-painters_eyecatch.jpg', className: 'image-eyecatch' }),
                _react2['default'].createElement(
                  'h3',
                  null,
                  'the four painters'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'div',
                  null,
                  '実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した映像作品'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'The four painters: A Video Work Created with Deep Learning'
                )
              )
            )
          ),
          _react2['default'].createElement(
            _reactBootstrap.Row,
            null,
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement(
                'a',
                { href: '/works/menkiki', onClick: _componentsLink2['default'].handleClick },
                _react2['default'].createElement('img', { src: '/works/menkiki_eyecatch.png', className: 'image-eyecatch' }),
                _react2['default'].createElement(
                  'h3',
                  null,
                  '麺利き'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'div',
                  null,
                  'らーめん写真に基づいてお店を提示する、らーめん屋推薦アプリ'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'The app which can show ramen shops based on a photo of ramen you want to eat'
                )
              )
            )
          ),
          _react2['default'].createElement('hr', null),
          _react2['default'].createElement(
            'h2',
            null,
            'Old works'
          ),
          _react2['default'].createElement(
            _reactBootstrap.Row,
            null,
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement(
                'a',
                { href: '/works/pichu2', onClick: _componentsLink2['default'].handleClick },
                _react2['default'].createElement('img', { src: '/works/pichu2_eyecatch.png', className: 'image-eyecatch' }),
                _react2['default'].createElement(
                  'h3',
                  null,
                  'pichu*pichu'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'div',
                  null,
                  'iPhone Safari用Twitterクライアント'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'Twitter client app for iPhone Safari'
                )
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement(
                'a',
                { href: '/works/freedbtagger', onClick: _componentsLink2['default'].handleClick },
                _react2['default'].createElement('img', { src: '/works/freedbtagger_eyecatch.png', className: 'image-eyecatch' }),
                _react2['default'].createElement(
                  'h3',
                  null,
                  'freeDBTagger'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'div',
                  null,
                  '楽曲長の組み合わせでアルバムを特定して楽曲情報を自動入力'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'Automatic Audio File Tagger using FreeDB'
                )
              )
            )
          ),
          _react2['default'].createElement(
            _reactBootstrap.Row,
            null,
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement(
                'a',
                { href: '/works/amembo', onClick: _componentsLink2['default'].handleClick },
                _react2['default'].createElement('img', { src: '/works/amembo_eyecatch.png', className: 'image-eyecatch' }),
                _react2['default'].createElement(
                  'h3',
                  null,
                  'amembo'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'div',
                  null,
                  '「MSN Messenger」と連係して特定ユーザーとP2Pフォルダ共有できる「Amembo」'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'P2P private file sharing tool supporting MSN Messenger'
                )
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement('hr', null),
            '随時更新'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsLink = __webpack_require__(2);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _reactBootstrap = __webpack_require__(3);

  __webpack_require__(4);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'work-detail' },
          _react2['default'].createElement(
            'h2',
            null,
            _react2['default'].createElement(
              'a',
              { href: '/works/', onClick: _componentsLink2['default'].handleClick },
              'Works'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'breadcrumb-chevron' },
              '>'
            ),
            '麺利き'
          ),
          _react2['default'].createElement(
            _reactBootstrap.Row,
            null,
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement('img', { src: '/works/menkiki_eyecatch.png', className: 'image-eyecatch' }),
              _react2['default'].createElement(
                'h3',
                null,
                '麺利き'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'div',
                  null,
                  'らーめん写真に基づいてお店を提示する、らーめん屋推薦アプリ'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'The app which can show ramen shops based on a photo of ramen you want to eat'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { className: 'link-appstore', href: 'https://itunes.apple.com/app/麺利き/id1035645520?mt=8' },
                    _react2['default'].createElement('img', { src: '/works/appstore.png', className: 'image-appstore' })
                  )
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-long-description' },
                _react2['default'].createElement(
                  'h4',
                  null,
                  '写真で「こんな感じ！」が伝えられる新しい探し方'
                ),
                _react2['default'].createElement(
                  'p',
                  null,
                  '食べておいしかったらーめん、ありますよね。 その写真をアプリに入力してください。 すると、アプリが似た雰囲気のらーめんを出すラーメン屋を探します。'
                ),
                _react2['default'].createElement(
                  'h4',
                  null,
                  '開発には30万枚のらーめん画像を使用'
                ),
                _react2['default'].createElement(
                  'p',
                  null,
                  '開発には、最近何かと話題のディープラーニングという機械学習アルゴリズムの一つを使用しました。 推薦アルゴリズムのために、30万枚のらーめん画像を集めて学習させました。 つまり、このアプリは「らーめんとは何か」を理解しているのです！（どーん）'
                )
              ),
              _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: 'http://sssslide.com/speakerdeck.com/noradaiko/caffedeoshou-qing-ben-ge-deipuraninguiosapuri', target: '_blank' },
                  '技術的な解説'
                )
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement('img', { src: '/works/menkiki_01.png', className: 'image-screenshot' })
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsLink = __webpack_require__(2);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _reactBootstrap = __webpack_require__(3);

  __webpack_require__(4);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'work-detail' },
          _react2['default'].createElement(
            'h2',
            null,
            _react2['default'].createElement(
              'a',
              { href: '/works/', onClick: _componentsLink2['default'].handleClick },
              'Works'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'breadcrumb-chevron' },
              '>'
            ),
            'pichu*pichu'
          ),
          _react2['default'].createElement(
            _reactBootstrap.Row,
            null,
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement('img', { src: '/works/pichu2_eyecatch.png', className: 'image-eyecatch' }),
              _react2['default'].createElement(
                'h3',
                null,
                'pichu*pichu'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'div',
                  null,
                  'iPhone Safari用Twitterクライアント'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'Twitter client app for iPhone Safari'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  '制作時期: 2010年頃'
                )
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-long-description' },
                _react2['default'].createElement(
                  'p',
                  null,
                  'Twitter黎明期、iPhone 3GS時代の当時としては珍しいWeb版クライアント。 大学院での研究目的で制作。 ソーシャルメディアを通じた利用行動を分析した。'
                )
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement('img', { src: '/works/pichu2_01.png', className: 'image-screenshot' }),
              _react2['default'].createElement(
                'h3',
                null,
                '掲載実績'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'ul',
                  null,
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://www.donpy.net/standard-entry/app-reiview/4303.html', target: '_blank' },
                      'Webアプリ版twitterクライアントの「pichu*pichu」が凄い。 | 覚醒する @CDiP'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://labs.laurahouse.net/articles/iphone/1115.html', target: '_blank' },
                      'LauraHouse Labs » Blog Archive » 知っておきたいWebアプリ版Twitterクライアント活用法'
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsLink = __webpack_require__(2);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _reactBootstrap = __webpack_require__(3);

  __webpack_require__(4);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'work-detail' },
          _react2['default'].createElement(
            'h2',
            null,
            _react2['default'].createElement(
              'a',
              { href: '/works/', onClick: _componentsLink2['default'].handleClick },
              'Works'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'breadcrumb-chevron' },
              '>'
            ),
            'the four painters'
          ),
          _react2['default'].createElement(
            _reactBootstrap.Row,
            null,
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement('img', { src: '/works/the-four-painters_eyecatch.jpg', className: 'image-eyecatch' }),
              _react2['default'].createElement(
                'h3',
                null,
                'the four painters'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'div',
                  null,
                  '実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した映像作品'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'The four painters: A Video Work Created with Deep Learning'
                ),
                _react2['default'].createElement(
                  'ul',
                  null,
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://blog.odoruinu.net/2015/12/19/created-movie-with-deep-learning/', target: '_blank' },
                      '解説記事'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://blog.odoruinu.net/2015/12/23/the-four-painters-a-video-work-created-with-deep-learning/', target: '_blank' },
                      'How it created'
                    )
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement('iframe', { src: 'https://player.vimeo.com/video/146373709', width: '100%', height: '200', frameBorder: '0', webkitallowfullscreen: true, mozallowfullscreen: true, allowFullScreen: true }),
              _react2['default'].createElement(
                'p',
                null,
                _react2['default'].createElement(
                  'a',
                  { href: 'https://vimeo.com/146373709' },
                  'the four painters'
                ),
                ' from ',
                _react2['default'].createElement(
                  'a',
                  { href: 'https://vimeo.com/noradaiko' },
                  'takuya'
                ),
                ' on ',
                _react2['default'].createElement(
                  'a',
                  { href: 'https://vimeo.com' },
                  'Vimeo'
                ),
                '.'
              ),
              _react2['default'].createElement(
                'h3',
                null,
                '掲載実績'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'ul',
                  null,
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://gigazine.net/news/20151224-deep-learning-four-painters/', target: '_blank' },
                      '実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した「the four painters」 - Gigazine様'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'https://news.ycombinator.com/item?id=10782289', target: '_blank' },
                      'The Four Painters: A Video Work Created with Deep Learning - Hacker News'
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _componentsLink = __webpack_require__(2);

  var _componentsLink2 = _interopRequireDefault(_componentsLink);

  var _reactBootstrap = __webpack_require__(3);

  __webpack_require__(4);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'work-detail' },
          _react2['default'].createElement(
            'h2',
            null,
            _react2['default'].createElement(
              'a',
              { href: '/works/', onClick: _componentsLink2['default'].handleClick },
              'Works'
            ),
            _react2['default'].createElement(
              'span',
              { className: 'breadcrumb-chevron' },
              '>'
            ),
            'walknote'
          ),
          _react2['default'].createElement(
            _reactBootstrap.Row,
            null,
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement('img', { src: '/works/walknote_eyecatch.png', className: 'image-eyecatch' }),
              _react2['default'].createElement(
                'h3',
                null,
                'walknote'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'div',
                  null,
                  '好みを理解して推薦する無料で聴き放題な音楽プレーヤー'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  'Free music discovery player'
                ),
                _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                    'a',
                    { className: 'link-appstore', href: 'https://itunes.apple.com/app/walknote-haomiwo-li-jieshite/id465898375?mt=8' },
                    _react2['default'].createElement('img', { src: '/works/appstore.png', className: 'image-appstore' })
                  )
                )
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.Col,
              { sm: 6 },
              _react2['default'].createElement('img', { src: '/works/walknote_01.png', className: 'image-screenshot' }),
              _react2['default'].createElement(
                'h3',
                null,
                '掲載実績'
              ),
              _react2['default'].createElement(
                'div',
                { className: 'work-description' },
                _react2['default'].createElement(
                  'ul',
                  null,
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://renewal49.hateblo.jp/entry/20120710/1341925681', target: '_blank' },
                      '強力すぎて紹介しそびれていた音楽好きのための神アプリ『walknote』 - リニューアル式様'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://www.appbank.net/2011/10/15/iphone-application/309349.php', target: '_blank' },
                      'walknote: CD屋の試聴機が、自分向けになって手元に到着。そんな曲探しアプリ。無料。 - appbank様'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html', target: '_blank' },
                      'おすすめの音楽をレコメンド！ストリーミング再生してくれるiPhoneアプリ「walknote」が素敵。 - 男子ハック様'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    _react2['default'].createElement(
                      'a',
                      { href: 'http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html', target: '_blank' },
                      '「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『walknote』 - タブロイド様'
                    )
                  ),
                  _react2['default'].createElement(
                    'li',
                    null,
                    'その他、多数'
                  )
                )
              )
            )
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(5)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: rgb(253, 250, 247);\n  color: #525252;\n  font-family: 'Roboto','Helvetica',sans-serif;\n}\n\nbody {\n  padding: 12vmin 0;\n}\n\n.container {\n  max-width: 900px;\n}\n\n.Layout {\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  .Layout {\n    width: calc(768px - 18px);\n  }\n}\n\n@media (min-width: 992px) {\n  .Layout {\n    width: calc(992px - 22px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .Layout {\n    width: calc(1200px - 30px);\n  }\n}\n\n.Layout {\n  font-family: Lato, Noto Sans Japanese, sans-serif;\n  color: rgb(143, 143, 143);\n}\n\n.Layout h1.title {\n  font-weight: normal;\n  font-size: 1.3em;\n  font-family: Noto Sans Japanese;\n  color: #525252;\n}\n\n.Layout h2 {\n  font-weight: lighter;\n  margin-top: 0;\n}\n\n.Layout p {\n  font-weight: lighter;\n}\n\n.Layout .header-left-side {\n  text-align: center;\n}\n", ""]);

  // exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(5)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(5)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\n.Navigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 2em 0 0 0;\n  padding: 0;\n  padding-top: 0.3em;\n  list-style: none;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: left;\n  border-top: 1px solid rgba(0,0,0,0.1);\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}\n\n.Navigation-item {\n  padding: 0.5em 0;\n  font-size: 1.25em;\n  font-weight: lighter;\n}\n\n.Navigation-icon-group .Navigation-icon {\n  border-bottom: 3px solid transparent;\n}\n\n.Navigation-link {\n  padding: 0.5em 0.5em;\n  color: rgb(143, 143, 143);\n  text-decoration: none;\n  cursor: pointer\n}\n\n.Navigation-link.Navigation-icon {\n  display: inline-block;\n  font-size: 1.4em;\n  padding-bottom: 0.2em;\n  margin: 0 0.3em 0.3em 0.3em;\n}\n\n.Navigation-link:active, .Navigation-link:focus {\n  text-decoration: none;\n}\n\n.Navigation-link:hover {\n  text-decoration: none;\n  border-bottom: 3px solid #21ce99;\n  color: #525252;\n}\n\n@media (min-width: 768px) {\n  .Navigation {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-bottom: 0.4em;\n    padding: 0;\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    text-align: left;\n    border: none;\n  }\n  .Navigation-icon-group {\n    text-align: left;\n  }\n  .Navigation-icon-group .Navigation-icon {\n    margin: 0 0 0.3em 0;\n  }\n}\n\n", ""]);

  // exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(5)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nimg.top-image {\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n@media (min-width: 768px) {\n  img.top-image {\n    border-width: 16px;\n  }\n}\n\n.about .section {\n  margin: 0.8em 0;\n}\n\n.about .section strong {\n  color: #525252;\n}\n", ""]);

  // exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(5)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n\nimg.top-image {\n  border: 8px solid white;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n          box-shadow: 0 2px 2px 0px rgba(0,0,0,0.2);\n}\n\n@media (min-width: 768px) {\n  img.top-image {\n    border-width: 16px;\n  }\n}\n\n", ""]);

  // exports


/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 30 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);
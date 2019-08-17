module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/AboutPage.js":
/*!*******************************************!*\
  !*** ./src/forum/components/AboutPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);





var AboutPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AboutPage, _Page);

  function AboutPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = AboutPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);
  };

  _proto.view = function view() {
    app.history.push('about', 'About');
    app.setTitle('About');
    return m("div", {
      className: "Pages"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m("div", {
      className: "Pages-container container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "AboutPage-nav IndexPage-nav sideNav",
      config: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.affixSidebar
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.sidebarItems().toArray()))), m("article", {
      className: "Pages-content IndexPage-results sideNavOffset"
    }, m("h1", null, "About"), m("img", {
      src: "https://shadowlack.com/images/bunglebearz-cayson.png",
      alt: "Cayson",
      width: "250",
      style: "float:right;margin: 0 0 16px 16px"
    }), m("p", null, "Shadowlack is a free dice-less ", m("b", null, "Play-by-Post"), " game as well an ongoing ", m("b", null, "World-Building Project"), ". When you join, you become an author in our collaborative story. You get to make up your own characters, select their race, trades, and write up descriptions for them. Then you start writing and other authors will join in, adding their own characters and help in developing the plot. Eventually you have a small piece of a story. Shadowlack is a collection of many story pieces written by many authors who have made up many characters. In short, Shadowlack is simply an continuous collaborative story."), m("h2", null, "Genre"), m("p", null, "Shadowlack is wedged tightly between two genres: low Science Fiction and Fantasy, making it a ", m("b", null, "Science Fantasy"), " game. Science Fiction because it takes place after the destruction of what we know of as Earth, and on a completely different planet called Ramath-lehi. Humans no longer exist and the inhabitants of Ramath-lehi are capable of faster-than-light space travel. The Fantasy element is present in the underlying form of magic, which draws itself from what Ramathians refer to as Fronima (the Spirit World)."), m("h2", null, "What is Play-by-Post Roleplaying?"), m("p", null, "Play-by-Post (PbP) roleplaying is just one of many methods of online roleplaying. Play-by-Post roleplaying is traditionally done using a forum or a bulletin board as the main medium of game-play. Players will create threads with their character, and then other players will reply to that thread with responses from the perspectives of their characters. In essence, it is a collaborative story writing endeavour."), m("h2", null, "The Planet Ramath-lehi"), m("p", null, "Shadowlack is an original fictional world setting (geofiction) that revolves around the planet Ramath-lehi. Through the regular course of game-play, players are encouraged to help build and expand upon the world alongside developing their original characters."), m("p", null, "Ramath-lehi is a magical and fantastical world. It runs directly alongside an invisible spirit world called Fronima. Fronima is the primary source of all magic on Ramath-lehi. Nearly all of Ramath-lehi's advanced technology uses Fronima (known as \"magicka\" when being used as a power source) to some extent. Fronima is also where the souls of Ramathians go when they die, as well as the place that some inhabitants visit during their dreams when the barrier between the two dimensions is at its thinnest."), m("p", null, "The most dominant beings on the planet Ramath-lehi are a race called the ", m("a", {
      href: "/wiki/Pendragon"
    }, "Pendragons"), ". While the Ramathians are capable of faster-than-light travel, they prefer sticking to their own solar system where the link to Fronima is the strongest. As a result, trade between neighboring alien races and travel is limited."), m("h2", null, "LGBTQ+ Inclusive Safer Space"), m("p", null, "Shadowlack has a proven track record of being a safer space for LGBTQ+ individuals. This is one of our core values. We also have an ", m("a", {
      href: "/anti-harassment-policy/"
    }, "Anti-Harassment Policy"), " that we strictly follow and enforce."), m("h2", null, "Interested in Joining?"), m("p", null, "Has Shadowlack piqued your interest? If not, that\u2019s okay. Text-based games aren\u2019t everyone\u2019s cup of tea, and it is a bit of a niche market. If you are interested in joining however, I\u2019d like to direct your attention to our ", m("a", {
      href: "/wiki/New_Player_Guide"
    }, "New Player Guide"), ". They have been constructed to assist newcomers make their transition into our world. If you have any questions, please do not hesitate to ask them at the ", m("a", {
      href: "/t/hatchlings"
    }, "Hatchling Central"), " board. Just be sure to check the ", m("a", {
      href: "/faq/"
    }, "FAQ Database"), " to see if your question has already been answered."), m("h2", null, "We Welcome Lurkers"), m("p", null, "Perhaps you don\u2019t have time to roleplay. Perhaps you simply like to read. Or perhaps you just wish to learn more about Shadowlack and its inhabitants before you go ahead and create a character to throw into the fray. Whatever your reasoning, Shadowlack has a designated ", m("em", null, "Lurker"), " member group. Those in the Lurker member group are granted the privilege to post in all of the Out of Character sections on our forums. You can then contribute to Out of Character discussions and matters that relate to game development\u2026 or just lurk.")))));
  };

  return AboutPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/HeaderPrimary */ "flarum/components/HeaderPrimary");
/* harmony import */ var flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AboutPage */ "./src/forum/components/AboutPage.js");



Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'items', function (items) {
  items.add('about', m("a", {
    href: "/about",
    "class": "Button Button--link"
  }, "About"));
  items.add('wiki', m("a", {
    href: "https://shadowlack.com/wiki",
    "class": "Button Button--link"
  }, "Wiki"));
});
app.initializers.add('shriker/shadowlack-guts', function () {
  app.routes.about = {
    path: '/about',
    component: _components_AboutPage__WEBPACK_IMPORTED_MODULE_2__["default"].component()
  };
});

/***/ }),

/***/ "flarum/components/HeaderPrimary":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/HeaderPrimary']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/HeaderPrimary'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map
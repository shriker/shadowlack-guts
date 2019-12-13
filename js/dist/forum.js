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
    $('meta[name=description]').attr('content', 'This section of the site is dedicated to getting you acquainted with the realm of Shadowlack.');
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
      height: "203",
      style: "float:right;margin: 0 0 16px 16px"
    }), m("p", null, "Shadowlack is a free dice-less ", m("b", null, "Play-by-Post"), " game as well an ongoing ", m("b", null, "World-Building Project"), ". When you join, you become an author in our collaborative story. You get to make up your own characters, select their race, trades, and write up descriptions for them. Then you start writing and other authors will join in, adding their own characters and help in developing the plot. Eventually you have a small piece of a story. Shadowlack is a collection of many story pieces written by many authors who have made up many characters. In short, Shadowlack is simply an continuous collaborative story."), m("h2", null, "Genre"), m("p", null, "Shadowlack is wedged tightly between two genres: low Science Fiction and Fantasy, making it a ", m("b", null, "Science Fantasy"), " game. Science Fiction because it takes place after the destruction of what we know of as Earth, and on a completely different planet called Ramath-lehi. Humans no longer exist and the inhabitants of Ramath-lehi are capable of faster-than-light space travel. The Fantasy element is present in the underlying form of magic, which draws itself from what Ramathians refer to as Fronima (the Spirit World)."), m("h2", null, "What is Play-by-Post Roleplaying?"), m("p", null, "Play-by-Post (PbP) roleplaying is just one of many methods of online roleplaying. Play-by-Post roleplaying is traditionally done using a forum or a bulletin board as the main medium of game-play. Players will create threads with their character, and then other players will reply to that thread with responses from the perspectives of their characters. In essence, it is a collaborative story writing endeavour."), m("h2", null, "The Planet Ramath-lehi"), m("p", null, "Shadowlack is an original fictional world setting (geofiction) that revolves around the planet Ramath-lehi. Through the regular course of game-play, players are encouraged to help build and expand upon the world alongside developing their original characters."), m("p", null, "Ramath-lehi is a magical and fantastical world. It runs directly alongside an invisible spirit world called Fronima. Fronima is the primary source of all magic on Ramath-lehi. Nearly all of Ramath-lehi's advanced technology uses Fronima (known as \"magicka\" when being used as a power source) to some extent. Fronima is also where the souls of Ramathians go when they die, as well as the place that some inhabitants visit during their dreams when the barrier between the two dimensions is at its thinnest."), m("p", null, "The most dominant beings on the planet Ramath-lehi are a race called the ", m("a", {
      href: "/wiki/Pendragon"
    }, "Pendragons"), ". While the Ramathians are capable of faster-than-light travel, they prefer sticking to their own solar system where the link to Fronima is the strongest. As a result, trade between neighboring alien races and travel is limited."), m("h2", null, "LGBTQ+ Inclusive Safer Space"), m("p", null, "Shadowlack has a proven track record of being a safer space for LGBTQ+ individuals. This is one of our core values. We also have an ", m("a", {
      href: "/anti-harassment-policy"
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

/***/ "./src/forum/components/AntiHPage.js":
/*!*******************************************!*\
  !*** ./src/forum/components/AntiHPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AntiHPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);





var AntiHPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AntiHPage, _Page);

  function AntiHPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = AntiHPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);
  };

  _proto.view = function view() {
    app.history.push('anti-harassment-policy', 'Anti-Harassment Policy');
    app.setTitle('Anti-Harassment Policy');
    $('meta[name=description]').attr('content', 'Shadowlack is dedicated to having a harassment-free roleplaying experience for everyone.');
    return m("div", {
      className: "Pages"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m("div", {
      className: "Pages-container container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav",
      config: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.affixSidebar
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.sidebarItems().toArray()))), m("article", {
      className: "Pages-content IndexPage-results sideNavOffset"
    }, m("h1", null, "Anti-Harassment Policy"), m("h2", null, "Player Policy"), m("p", null, "Shadowlack is dedicated to providing a harassment-free roleplaying experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, or religion."), m("p", null, "Harassment includes offensive comments related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, religion, deliberate intimidation, stalking, following, inappropriate contact, and unwelcome sexual attention. Players asked to stop any harassing behaviour are expected to comply immediately."), m("p", null, "If a player engages in harassing behaviour, staff members may take any action they deem appropriate, including warning the offender, or banning from the game."), m("p", null, "If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of staff immediately."), m("p", null, "We value your continued membership."), m("h2", null, "Staff Policy"), m("h3", null, "Issuing Warnings"), m("p", null, "Any member of staff can issue a warning to a player that their behaviour violates the game's Anti-Harassment Policy."), m("p", null, "Warnings should be reported to ", m("a", {
      href: "mailto:graders@shadowlack.com"
    }, "graders@shadowlack.com"), " as soon as practical. The report should include:"), m("ol", null, m("li", null, "Identifying information (character/username) of the warned player"), m("li", null, "The time you issued the warning"), m("li", null, "The behaviour that was in violation"), m("li", null, "The approximate time of the behaviour (if different than the time of warning)"), m("li", null, "The circumstances surrounding the incident"), m("li", null, "Your identity"), m("li", null, "Other people involved in the incident")), m("h3", null, "Taking Reports"), m("p", null, "When taking a report from someone experiencing harassment you should record what they say and reassure them they are being taken seriously, but avoid making specific promises about what actions the game will take. Ask for any other information if the reporter has not volunteered it (such as time, place) but do not pressure them to provide it if they are reluctant. Even if the report lacks important details such as the identity of the person taking the harassing actions, it should still be recorded and passed along to the appropriate staff member(s)."), m("p", null, "If the reporter desires it, contact local law enforcement. Do not pressure the reporter to take any action if they do not want to do it. Respect the reporter's privacy by not sharing unnecessary details with others, especially individuals who were not involved with the situation or non-staff members."), m("h3", null, "Banning"), m("p", null, "A player may be banned by the decision of any of the above listed entities for whatever reasons they deem sufficient. However, here are some general guidelines for when a player should be banned from the game:"), m("ul", null, m("li", null, "Continuing to harass after any \"No\" or \"Stop\" instruction"), m("li", null, "A pattern of harassing behaviour, with or without warnings"), m("li", null, "A single serious offence"), m("li", null, "A single obviously intentional offence")), m("p", null, "Local authorities should be contacted when appropriate."), m("h3", null, "Issuing Public Statements"), m("p", null, "As a general rule, staff members should not make any public statements about the behaviour of individuals at the game. In general, consult with other staff members when possible, but always act when necessary."), m("hr", {
      "class": "soften"
    }), m("p", null, "Did you find this Anti-Harassment Policy useful and want to use it on your own site or game? ", m("a", {
      href: "https://www.rpgfix.com/resources/free-anti-harassment-policy-template.22/"
    }, "Learn more about how to do so here"), ".")))));
  };

  return AntiHPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/CodexGenName.js":
/*!**********************************************!*\
  !*** ./src/forum/components/CodexGenName.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodexGenName; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/SelectDropdown */ "flarum/common/components/SelectDropdown");
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);







var CodexGenName =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CodexGenName, _Page);

  function CodexGenName() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = CodexGenName.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);
  };

  _proto.view = function view() {
    app.history.push('codex/random-name-generator', 'Random Name Generator');
    app.setTitle('Random Name Generator');
    $('meta[name=description]').attr('content', 'Feel like leaving your character\'s first or last name up to a bit of chance?');
    var nameList = this.generateNames(15);
    return m("div", {
      className: "Pages"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m("div", {
      className: "Pages-container container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav",
      config: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.affixSidebar
    }), m("article", {
      className: "IndexPage-results sideNavOffset"
    }, m("h1", null, "Random Name Generator"), m("p", null, "Create a new set of randomly generated names that are suitable for Shadowlack."), m("ol", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(nameList))))));
  }
  /**
   * Generate a Shadowlack-appropriate random name
   *
   * @param {number} [numNames=10]
   * @returns
   * @memberof CodexGenName
   */
  ;

  _proto.generateNames = function generateNames(numNames) {
    if (numNames === void 0) {
      numNames = 10;
    }

    console.log('hi');
    var prefixArray = ['Aana', 'Aes', 'And', 'Ara', 'Ari', 'Aro', 'Ata', 'Ate', 'Ati', 'Ae', 'Ai', 'Ay', 'Ao', 'Au', 'Ban', 'Be', 'Bea', 'Bel', 'Beo', 'Bre', 'Bri', 'Bo', 'Be', 'Ba', 'By', 'Bi', 'Bu', 'Cas', 'Cal', 'Ces', 'Ce', 'Cin', 'Ces', 'Ci', 'Cre', 'Cro', 'Cay', 'Cim', 'Cyt', 'Cal', 'Can', 'Cano', 'Caul', 'Ca', 'Ci', 'Cy', 'Co', 'Cu', 'Dun', 'Der', 'Dar', 'Dal', 'Deo', 'Dae', 'De', 'Did', 'Dyo', 'Dur', 'Da', 'Di', 'De', 'Do', 'Du', 'Dzy', 'Et', 'Ele', 'Eme', 'Ef', 'Ebo', 'Eki', 'Ela', 'Eas', 'Ea', 'Ei', 'Ey', 'Eu', 'Far', 'Fra', 'Fe', 'Fea', 'Fal', 'Fan', 'Fen', 'Fry', 'Fly', 'For', 'Fo', 'Fym', 'Fi', 'Fo', 'Fu', 'Fa', 'Gi', 'Gir', 'Gal', 'Gen', 'Gri', 'Gra', 'Gur', 'Gon', 'Gyg', 'Gem', 'Gim', 'Ge', 'Ga', 'Gy', 'Go', 'Gu', 'Hi', 'Hyt', 'Ho', 'Hel', 'Hyl', 'Hen', 'Hyr', 'Hom', 'Hay', 'Hur', 'He', 'Ha', 'Hy', 'Hu', 'Isy', 'Ina', 'Ira', 'Imp', 'Ila', 'Ita', 'Iso', 'Ir', 'Ia', 'Ie', 'Iy', 'Io', 'Iu', 'Ii', 'Jal', 'Jes', 'Joc', 'Ja', 'Jot', 'Jen', 'Jur', 'Jyl', 'Ji', 'Je', 'Jo', 'Jy', 'Kal', 'Kar', 'Kyl', 'Kry', 'Kim', 'Ky', 'Ki', 'Kan', 'Kor', 'Ken', 'Kyr', 'Ke', 'Ka', 'Ko', 'Lan', 'Li', 'Lis', 'Lia', 'Lam', 'Lan', 'Lor', 'Lic', 'Lin', 'Lar', 'Le', 'Ly', 'Li', 'Lo', 'Lu', 'Me', 'Ma', 'Mo', 'Mi', 'My', 'Mar', 'Meth', 'Mel', 'Mal', 'Mars', 'Myc', 'Mir', 'Mua', 'Mech', 'Ne', 'Ni', 'Na', 'Ny', 'No', 'Nor', 'Neo', 'Naru', 'Nay', 'Nel', 'Nem', 'Nu', 'Nat', 'Oa', 'Ou', 'Ol', 'Ome', 'Orl', 'Oro', 'Oth', 'Om', 'Os', 'Oja', 'Oni', 'Per', 'Pal', 'Pa', 'Pe', 'Pi', 'Po', 'Pu', 'Py', 'Pip', 'Pan', 'Pyr', 'Ple', 'Que', 'Qua', 'Qui', 'Quo', 'Qu', 'Re', 'Ra', 'Ri', 'Ro', 'RuRy', 'Ral', 'Ryth', 'Ram', 'Rez', 'Reg', 'Ragn', 'Ryn', 'Rya', 'Rel', 'Rim', 'Sa', 'Se', 'Si', 'So', 'Su', 'Sy', 'Sest', 'Sal', 'Sh', 'Shim', 'Shin', 'Sek', 'Sty', 'Sta', 'Sz', 'Sor', 'Sol', 'Sam', 'Scy', 'Sw', 'Sv', 'Sm', 'Ta', 'Te', 'Ti', 'To', 'Tu', 'Ter', 'Tre', 'Th', 'Than', 'Tyr', 'Til', 'Tel', 'Tek', 'Tus', 'Ts', 'Tri', 'Tys', 'Ten', 'Teg', 'Uva', 'Uri', 'Ual', 'Ula', 'Uo', 'Ua', 'Ue', 'Uy', 'Uly', 'Ura', 'Utu', 'Ur', 'Um', 'Un', 'Val', 'Va', 'Ve', 'Vo', 'Vy', 'Vi', 'Vit', 'Vr', 'Vor', 'Vla', 'Ves', 'Vir', 'We', 'Wo', 'Wy', 'Wys', 'Wis', 'War', 'Way', 'Wen', 'We', 'Wi', 'Wa', 'Xa', 'Xe', 'Xi', 'Xo', 'Xy', 'Xu', 'Xan', 'Xit', 'Ye', 'Ya', 'Yi', 'Yo', 'Yu', 'Yur', 'Yd', 'Ysa', 'Yel', 'Yan', 'Yygr', 'Ze', 'Za', 'Zi', 'Zo', 'Zu', 'Zy', 'Zan', 'Zor', 'Zag', 'Zai', 'Zro'];
    var suffixArray = ['rok', 'al', 'e', 'ii', 'ia', 'uin', 'ar', 'or', 'ir', 'ly', 'end', 'am', 'yam', 'arn', 'r', 's', 't', 'fel', 'rs', 'm', 'em', 'am', 'om', 'ard', 'lis', 'tine', 'dine', 'oa', 'um', 'ar', 'en', 'ord', 'orm', 'fin', 'red', 'kel', 'in', 'im', 'is', 'mis', 'al', 'gal', 'gol', 'gen', 'gim', 'or', 'ln', 'lm', 'elm', 'del', 'dal', 'thor', 'tor', 'lor', 'gor', 'ulie', 'ol', 'zin', 'zyn', 'lop'];
    var nameList = [];

    for (var i = 0; i < numNames; i++) {
      var randPrefix = prefixArray[Math.floor(Math.random() * prefixArray.length)];
      var randSuffix = suffixArray[Math.floor(Math.random() * suffixArray.length)];
      nameList.push(randPrefix + randSuffix);
    }

    return nameList;
  };

  return CodexGenName;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/CodexGenScenario.js":
/*!**************************************************!*\
  !*** ./src/forum/components/CodexGenScenario.js ***!
  \**************************************************/
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
    app.history.push('codex/scenario', 'Plot Scenario Generator');
    app.setTitle('Plot Scenario Generator');
    $('meta[name=description]').attr('content', 'Want to write but don\'t know where to start?');
    return m("div", {
      className: "Pages"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m("div", {
      className: "Pages-container container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav",
      config: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.affixSidebar
    }), m("article", {
      className: "Pages-content IndexPage-results sideNavOffset"
    }, m("h1", null, "Plot Scenario Generator"), m("p", null, "The Scenario Generator will generate Shadowlack-themed plot scenarios for your use and reading pleasure. It exists to act as a writing prompt for starting new threads (and to make you laugh or cry). Simply refresh the page in order to get a new scenario.")))));
  };

  return AboutPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/LegalPage.js":
/*!*******************************************!*\
  !*** ./src/forum/components/LegalPage.js ***!
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
    app.history.push('legal', 'Terms and Conditions');
    app.setTitle('Terms and Conditions');
    return m("div", {
      className: "Pages"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m("div", {
      className: "Pages-container container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav",
      config: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.affixSidebar
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.sidebarItems().toArray()))), m("article", {
      className: "Pages-content IndexPage-results sideNavOffset"
    }, m("h1", null, "Terms and Conditions"), m("p", null, "This web site is owned and operated by Shadowlack (the \u201CSite,\u201D \u201COur,\u201D \u201CWe,\u201D or \u201CUs\u201D). By using this site you (\u201DMember,\u201D \u201CUser,\u201D or \u201CYour\u201D) signify your acceptance to our Terms and Conditions (the \u201CAgreement\u201D) and any modifications, revisions, and changes made to it hereafter. If you do not agree to this Agreement, please do not use this Site."), m("h2", null, "Site Content"), m("p", null, "Shadowlack does contain mature content that may offend some viewers. Shadowlack is not a game created with a general or \u201Cchild/kid\u201D audience in mind, so viewer discretion is advised. Nudity, graphic violence, illegal acts, course language, drug usage, sexual acts, and other mature content may, on occasion, be found in role play posts. However, this content is purely fictional and occurs in Shadowlack\u2019s In Character forums only. Shadowlack expects its members to exercise maturity regarding these matters. Those found abusing the privilege to write about these mature acts, or using them in what may be considered \u201Cbad taste,\u201D or \u201Cnot in a writing art form\u201D by a Shadowlack Staff Member will have their post deleted and either be issued a written warning or have their account terminated. By viewing or participating in these role play threads, you agree that you are either of the legal age in your country to view and create such content, or that you have your parent or legal guardian\u2019s permission."), m("p", null, "Please remember that we are not responsible for any messages or user content posted. We do not vouch for or warrant the accuracy, completeness or usefulness of any message, and are not responsible for the contents of any message. The messages express the views of the author of the message, not necessarily the views of Shadowlack. Any user who feels that a posted message, character, or other site content, is objectionable, is encouraged to contact a Staff Member immediately by Personal Message (\u201DPM\u201D), electronic mail, or the contact form. We have the ability to remove objectionable messages and site content and we will make every effort to do so, within a reasonable time frame, if we determine that removal is necessary."), m("h2", null, "User Conduct"), m("p", null, "You agree, through your use of this Service, that you will not post, submit, distribute or send through the Site (Forums, PM, chat room, or otherwise) anything that relates to / or is:"), m("ul", null, m("li", null, "Information that is inaccurate, knowingly false, or defamatory."), m("li", null, "Personal attacks on other Members, Ramathian Staff or otherwise."), m("li", null, "Profanity (swearing), vulgar, drugs, drug usage, obscenities, harassment, hateful, threatening, and / or sexual content (expressed or implied, this *does not* include inappropriate acts that your Character may succumb to or act out in \u201Crole play\u201D)."), m("li", null, "Information that is invasive of a person\u2019s privacy (full names, addresses, telephone numbers, electronic mail addresses, etc.)."), m("li", null, "Solicitation of member passwords."), m("li", null, "Any content that is deemed unlawful (This includes, but is not limited to, posting of illegal MP3s, pornography, viruses, phreaking, software cracks, or hacks)."), m("li", null, "Promotional links and / or advertisements to third party commercial web sites or games."), m("li", null, "Spam (Short pointless annoying messages, or multiple messages in a row, junk mail, chain letters, etc.)."), m("li", null, "Violates or infringes upon the copyright or proprietary rights of others (This includes, but is not limited to, artwork, photographs, music, copyrighted software, text, or videos)."), m("li", null, "Any other information that Shadowlack deems as inappropriate for this site.")), m("p", null, "WARNING: You account may be terminated if you are found or reported to be doing any of the above at Shadowlack."), m("h2", null, "User Submitted Materials"), m("p", null, "By submitting, uploading, contributing, or sending/electronic mailing Shadowlack any materials, you (and your parents if you are under the age of 18), grant us a royalty free, world-wide, irrevocable and non-exclusive license to modify, use, create derivative works from, reproduce, edit, adapt, translate, publish these materials, incorporate, or distribute them through any form of medium, or technology for the purposes of displaying these materials on the Site or for the promotion, betterment and marketing of Shadowlack throughout the universe. Shadowlack will not convey these rights to any third parties."), m("h2", null, "Modification and Termination of Service"), m("p", null, "Shadowlack reserves the right to modify, or discontinue (temporary or permanent) its Service (your access and usage of any part of the Site) with or without prior notice or explanation. You agree that Shadowlack has the right to terminate Your account (or any part of it), as well as remove or discard any content that You may have posted. You further agree that Shadowlack shall not be liable to you or any third-party for the termination or ability to access this Site."), m("h2", null, "Other Web Sites"), m("p", null, "Shadowlack does not control, check the availability, investigate or monitor links to or the content on other web sites. If there is a third party link on our Site, it does not imply Shadowlack\u2019s (its subsidiaries or affiliates) endorsement or approval of said third party. Shadowlack will not be held accountable for anything that happens on any other web site. If you access any third party web site and leave Shadowlack, you are doing so at your own risk."), m("h2", null, "Copyright and Copyright Infringement"), m("p", null, "You should assume that anything you see or read on this Site (HTML, CSS, PHP, JavaScript, graphics, characters, stories, posts, text, etc.) is copyright and is protected by international copyright laws and may not be used on any other site without prior written permission from Shadowlack\u2019s administrator. Those found breaking our copyright will be issued a written warning message in order to give the person a chance to remove the infringing content. If no contact means can be found, the infringing site\u2019s host will be contacted with a formal complaint and legal action will be taken."), m("p", null, "If you believe that someone on our Site has done something that constitutes copyright infringement, please contact us with the following information:"), m("ol", null, m("li", null, "An electronic or physical signature of the original copyright owner or the person acting upon the owner\u2019s behalf."), m("li", null, "A description of the work that you believe to be infringing."), m("li", null, "A description of (or link to) where this infringing material can be found on our Site."), m("li", null, "You address, telephone number, and electronic mail address."), m("li", null, "A statement by you that in good faith, believe that what you\u2019re describing is in fact copyright infringement and its use has not been authorized by the original copyright owner, its agent, or the law."), m("li", null, "A statement by you, made under penalty of perjury, that the above information is correct and that you are the copyright owner or are authorized to act upon the owner\u2019s behalf.")), m("p", null, "You may send this information to our administration by using the contact form."), m("h2", null, "Changes to the Terms and Conditions"), m("p", null, "We reserve the right to amend, add, modify and make changes to this Agreement. All changes will be posted on Shadowlack at ", m("a", {
      href: "/legal"
    }, "/legal"), ". All amendments to this Agreement will automatically come into effect immediately after they have been posted on the Site. So please be sure to read the Agreement periodically. This Agreement may not be modified by anyone except for the Shadowlack Administrator."), m("p", null, "This Agreement was last revised August 19th, 2019.")))));
  };

  return AboutPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/ParentsPage.js":
/*!*********************************************!*\
  !*** ./src/forum/components/ParentsPage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParentsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);





var ParentsPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ParentsPage, _Page);

  function ParentsPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = ParentsPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);
  };

  _proto.view = function view() {
    app.history.push('parents', 'For Parents');
    app.setTitle('For Parents');
    $('meta[name=description]').attr('content', 'A Message for Parents, Guardians, and Teachers.');
    return m("div", {
      className: "Pages"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m("div", {
      className: "Pages-container container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav",
      config: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.affixSidebar
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.sidebarItems().toArray()))), m("article", {
      className: "Pages-content IndexPage-results sideNavOffset"
    }, m("h1", null, "For Parents"), m("p", null, "So you\u2019ve caught your child or student on Shadowlack? Don\u2019t panic! Hear us out first."), m("p", null, "Shadowlack is a non-commercial site dedicated to the following core principles:"), m("h2", null, "Literary Improvement"), m("p", null, "Shadowlack is a creative writing game. Our primary means of \u201Cgame-play\u201D is through the written word. As a result, many of our players experience significant improvement in regards to their writing skills and typing abilities while actively participating on the site."), m("h2", null, "Creativity"), m("p", null, "Running alongside the writing aspect of the site is a full-fledged World Building project. Players are not only encouraged to create well-thought-out characters, they are also invited to help contribute and build our ever-expanding fantasy universe. This collaborative environment encourages player\u2019s to work together and create a place that is uniquely for themselves."), m("h2", null, "Community"), m("p", null, "To many people, Shadowlack is an \u201Cinternet home.\u201D Players have formed significant bonds throughout the years during the course of regular game-play. It has been a safe-haven for players worldwide for over a decade (since 2002!). Shadowlack strives to maintain this uniquely open and friendly atmosphere."), m("h2", null, "Internationalism"), m("p", null, "While Shadowlack is an English writing site, we welcome players from all over the world. We have players from France, Canada, India, United States, United Kingdom, Australia, and Germany, to name a small handful. A textual based game is a great way to learn, practise and improve upon English as a second language."), m("p", null, "Shadowlack is recommended for individuals who are thirteen years of age and older. Shadowlack often contains mature themes, discussions, and language. We cannot be held accountable for language or another player\u2019s actions that some younger players may find offensive. As the child\u2019s legal guardian, it is up to you to determine whether or not this site is suitable for your child."), m("p", null, "If you find your child (who is under-age) has become a member without your permission, please feel free to contact ", m("a", {
      href: "mailto:graders@shadowlack.com"
    }, "graders@shadowlack.com"), " with your child's account details and the account may be frozen upon request."), m("h2", null, "Privacy"), m("p", null, "While Shadowlack will not transmit any of your child\u2019s personal data to third parties, as per our ", m("a", {
      href: "/privacy"
    }, "Privacy Policy"), ", it is up to you to educate your child in regards to internet safety. Make sure that they know to not give out any personal information such as their mailing address, phone number, school, or even their real names to strangers. It is a very common and highly recommended practise on Shadowlack to have an alias (screen name) or nickname to be used instead of the player\u2019s real name."), m("p", null, "If you have any other questions or concerns please feel free to contact us at ", m("a", {
      href: "mailto:graders@shadowlack.com"
    }, "graders@shadowlack.com"), " and we\u2019ll try to get back to you in a timely manner!")))));
  };

  return ParentsPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/PrivacyPage.js":
/*!*********************************************!*\
  !*** ./src/forum/components/PrivacyPage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivacyPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);





var PrivacyPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivacyPage, _Page);

  function PrivacyPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = PrivacyPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);
  };

  _proto.view = function view() {
    app.history.push('privacy', 'Privacy Policy');
    app.setTitle('Privacy Policy');
    return m("div", {
      className: "Pages"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m("div", {
      className: "Pages-container container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav",
      config: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.affixSidebar
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.sidebarItems().toArray()))), m("article", {
      className: "Pages-content IndexPage-results sideNavOffset"
    }, m("h1", null, "Privacy Policy"), m("p", null, "Shadowlack is a free, non-commercial, web site committed to providing an entertaining atmosphere recommended for persons aged thirteen and above."), m("h2", null, "The Information We Collect"), m("ul", null, m("li", null, "Username"), m("li", null, "Email Address"), m("li", null, "Birth Date")), m("p", null, "When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device."), m("ul", null, m("li", null, "Internet Protocol (IP) address"), m("li", null, "Geographical location"), m("li", null, "Browser type and version"), m("li", null, "Operating system"), m("li", null, "Referral source"), m("li", null, "Length of visit, page views, website navigation and any other related browsing activity")), m("p", null, "We collect Device Information using the following technologies:"), m("ul", null, m("li", null, m("b", null, "Cookies"), " are data files that are placed on your device or computer and often include an anonymous unique identifier."), m("li", null, m("b", null, "Log files"), " track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps."), m("li", null, m("b", null, "Web beacons"), ", \u201Ctags,\u201D and \u201Cpixels\u201D are electronic files used to record information about how you browse the Site.")), m("h2", null, "Information Usage"), m("p", null, "Shadowlack uses the information we collect for the following reasons:"), m("ul", null, m("li", null, "To honour our contractual commitments to you"), m("li", null, "To log you into Shadowlack"), m("li", null, "Providing a safe and enjoyable user experience"), m("li", null, "Know the screen names (giving out of your \u201Cfull real name\u201D is discouraged) of our members to create a friendly atmosphere."), m("li", null, "Confirmation of email address for account validity, security alerts, and relevant user-specified communications"), m("li", null, "Customer service"), m("li", null, "Improving and optimizing Shadowlack's design, user experience, and placement of features"), m("li", null, "Legal compliance")), m("h3", null, "Data Processing"), m("p", null, "We are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States. The majority of your data is processed and kept in Canada. \uD83C\uDF41"), m("h2", null, "Minors"), m("p", null, "Shadowlack is intended for users age 13 and over. We do not knowingly collect personal information from children under the age of 13. We are compliant with the ", m("a", {
      href: "http://www.coppa.org/comply.htm",
      rel: "nofollow"
    }, "Children's Online Privacy Protection Act"), " and the ", m("a", {
      href: "http://www.the-cma.org/?WCE=C=47|K=225849#11",
      rel: "nofollow"
    }, "Canadian Marketing Agency"), ". If we learn that we are engaged in that processing with such users, we will halt such processing and will take reasonable measures to promptly remove applicable information from our records."), m("h2", null, "Links to Other Sites"), m("p", null, "Shadowlack is not responsible for the content of external internet sites and privacy of any information which you provide whilst visiting such sites. You are advised to read the privacy policy of external sites before disclosing any personal information."), m("h2", null, "Your Data Rights and Choices"), m("p", null, "When using the Shadowlack site, you may choose to limit public viewing of applicable personal information through the settings located in the Privacy section of your account."), m("p", null, "Shadowlack will not sell, distribute or lease your personal information to third parties unless we have your explicit permission or are required by law to do so."), m("p", null, "You have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below."), m("h3", null, "Data Retention and Your Right to be Forgotten"), m("p", null, "We generally retain personal data for so long as it may be relevant to the purposes identified herein, or until you ask us to delete this information. To dispose of personal data, we may anonymize it, delete it or take other appropriate steps. Data may persist in copies made for backup and business continuity purposes for additional time."), m("h2", null, "Our cookie usage \uD83C\uDF6A"), m("p", null, "This site uses cookies for numerous things, including:"), m("ul", null, m("li", null, "Registration and maintaining your preferences. This includes ensuring that you can stay logged in and keeping the site in the language or appearance that you requested."), m("li", null, "Analytics. This allows us to determine how people are using the site and improve it."), m("li", null, "Advertising cookies (possibly third-party). If this site displays advertising, cookies may be set by the advertisers to determine who has viewed an ad or similar things. These cookies may be set by third parties, in which case this site has no ability to read or write these cookies.")), m("h3", null, "Standard cookies we set"), m("p", null, "These are the main cookies we set during normal operation of the Site:"), m("ul", null, m("li", null, m("strong", null, "flarum_session"), m("ul", null, m("li", null, "Stores the current ID of your session.")))), m("h2", null, "Security"), m("p", null, "While we do our best and take reasonable steps to protect your personal information, we cannot guarantee the security of any information that you transmit to us and you are solely responsible for maintaining the secrecy of any passwords or other account information."), m("h2", null, "Changes to this Privacy Policy"), m("p", null, "We reserve the right to update or modify this Privacy Policy at any time and from time to time without prior notice. Please review this policy periodically, and especially before you provide any information."), m("h3", null, "Contact"), m("p", null, "If you have any site questions, please feel free to contact us."), m("p", null, m("b", null, "The Graders, Shadowlack Administration"), m("br", null), m("a", {
      href: "mailto:graders@shadowlack.com"
    }, "graders@shadowlack.com")), m("p", null, "Please read our ", m("a", {
      href: "/legal"
    }, "Terms and Conditions"), " for more information regarding the use of this Site.")))));
  };

  return PrivacyPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/RatingPage.js":
/*!********************************************!*\
  !*** ./src/forum/components/RatingPage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RatingPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);





var RatingPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RatingPage, _Page);

  function RatingPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = RatingPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);
  };

  _proto.view = function view() {
    app.history.push('rating', 'Universal RPG Rating');
    app.setTitle('Universal RPG Rating');
    return m("div", {
      className: "Pages"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m("div", {
      className: "Pages-container container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav",
      config: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.affixSidebar
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.sidebarItems().toArray()))), m("article", {
      className: "Pages-content IndexPage-results sideNavOffset"
    }, m("h1", null, "Universal RPG Rating"), m("h2", null, "What is the Universal RPG Rating System?"), m("p", null, "The ", m("a", {
      href: "http://rpgrating.com/",
      rel: "nofollow"
    }, "Universal RPG Rating"), " system is a way of classifying and categorizing the content in online roleplaying games. It is an opt-in rating, meaning that every game owner who adds it is the one who rates their own content."), m("h2", null, "Shadowlack's Rating"), m("p", null, m("img", {
      src: "https://shadowlack.com/images/l3_s2_v2.gif",
      alt: "Universal RPG Rating",
      width: "88",
      height: "31"
    })), m("p", null, m("b", null, "Language 3:"), " Objectionable and mature language is permitted."), m("p", null, m("b", null, "Sexual Content 2:"), " Sexual content is permitted. References and writing about genitalia and sex acts are permitted, but explicit detail is not. Fade to black, or mature tagging are recommended."), m("p", null, m("b", null, "Violence 2:"), " Graphic violence is permitted. Explicit description or in-game narration violence is allowed."), m("h2", null, "Our Interpretation"), m("p", null, "Shadowlack is a very non-restrictive game. Our players tend to be very mature, regardless of their actual age. As a result, our 3:2:2 rating is to be thought of as a ", m("u", null, "guideline"), " only. Players are allowed to create plots that are more explicit than the guideline \u2014 provided that they mark their threads as being \"Mature.\"")))));
  };

  return RatingPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/RulesPage.js":
/*!*******************************************!*\
  !*** ./src/forum/components/RulesPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RulesPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);





var RulesPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RulesPage, _Page);

  function RulesPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = RulesPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);
  };

  _proto.view = function view() {
    app.history.push('rules', 'Rules & Regulations');
    app.setTitle('Rules & Regulations');
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
    }, m("h1", null, "Rules & Regulations"), m("h2", null, "Age"), m("p", null, "It is ", m("em", null, "highly recommended"), " that you are thirteen years old or older to join this site, or have your parent's consent. Are you under thirteen and still wish to join? Please have your parents read our ", m("a", {
      href: "/parents"
    }, "Message for Parents and Teachers"), " and see what they have to say."), m("h2", null, "Behaviour"), m("p", null, "Any kind of disrespect or harassment in general is unwelcome here. Whether it be directed toward one of your peers or the game administration, through the ", m("em", null, "Forum"), ", ", m("em", null, "Chat Room"), " or through ", m("em", null, "PM"), " (Private Messages on the site). Out of character fights and quarrels will not be permitted on the boards. So if you have a problem with someone, please contact them outside of Shadowlack. Please read our ", m("a", {
      href: "/anti-harassment-policy"
    }, "Anti-Harassment Policy"), " for more information."), m("h2", null, "Violence & Language"), m("p", null, "Swearing is allowed to a certain extent in order to emphasize points within roleplaying. There are many other intelligent ways to express anger and surprise that do not involve spouting off obscenities. Posts that include extreme violence, gore or language must be marked with an appropriate Thread Rating. Please see the ", m("a", {
      href: "/rating"
    }, "Universal RPG Rating"), " page for more details."), m("h2", null, "Accounts Per Person"), m("p", null, "You are allowed to have one account per person. However, you may create multiple characters on that account."), m("h2", null, "Character Naming Policy"), m("p", null, "Types of names that are not acceptable and will result in your character being deleted:"), m("ul", null, m("li", null, "Names that are not properly capitalized, contain netspeak, chatspeak, strange symbols, or phrases. (bess, 1337 Dr4gon, Haywood Jablome, etc.)"), m("li", null, "Names that contain profanity, something religious, or may otherwise offend or insult other members."), m("li", null, "Copyright or Trademarked names of products, services, characters, etc. (McDonalds, Crest, Harry Potter, Inu-Yasha, etc.)"), m("li", null, "Names of celebrities, or famous people, past or present."), m("li", null, "Any other name that is deemed inappropriate by Shadowlack's Staff.")), m("h2", null, "Powerplaying & Invincibility"), m("p", null, "Also known as, God-Moding, Auto-Hitting, Emoding, & Twinking. We'll have none of it! Your character can be killed, hurt, or even maimed badly for life. No character may be perfect or invincible. Try to roleplay as realistically as possible. You do not control the fate of other people's characters. Only you \u2013 and the game administration when it comes to extremes \u2013 can say what happens to your character. Meta-playing/Omniscience (your character having knowledge about another character that you as a roleplayer gained OOCly) is also not allowed."), m("h2", null, "Robots & Cyborgs"), m("p", null, "You may not play or create a character that is a robot. This means that you may not play as a robotic character that is fully sentient, whether this be via artificial intelligence, or a machine that has been infused with a soul."), m("p", null, "Cyborg characters, eg, characters with mechanical limbs, prosthetics, and the like, are allowed to some extent. However, if it is felt that your character is too extreme or twinkish (invincible; flawless; cannot be taken out by a single shotgun blast to the chest), armed with projectile weapons, or more weaponry than you can shake a stick at, your character will be rejected. Cyborgs that are allegedly created by the Ramathian military, other militant organization or cyborgs whose sole purpose in life is to ", m("em", null, "destroy things"), " are not allowed."), m("h2", null, "Magic"), m("p", null, "Hell yes. Shadowlack is based upon a futuristic fantasy society, so of course magic is allowed. If you're not sure if your certain type of magic is acceptable, contact the game owner. The source of all magic on Shadowlack is Fronima. It has a very mysterious nature but can be tamed and channeled through determination. To learn more about the nature of magic on Shadowlack, please read the ", m("a", {
      href: "/wiki/Laws_of_Magic"
    }, "Laws of Magic"), " page."), m("h2", null, "Time Traveling"), m("p", null, "Characters cannot time travel. There are no time machines, devices, etc."), m("h2", null, "Post Length"), m("p", null, "There is no posting minimum or maximum in regards to what length of your posts should be."), m("h2", null, "Post Format & Timestamping"), m("p", null, "Please include the character's name(s) that you are roleplaying either in the subject of the post or at the very beginning of the body. All threads should include a ", m("a", {
      href: "/wiki/New_Player_Guide"
    }, "Timestamp"), " as well. Timestamping tells when your post takes place during the Ramathian timeline."), m("p", null, "All posts should be written in ", m("em", null, "Third Person, Past Tense"), " (She jump", m("em", null, "ed"), ").", m("br", null), m("small", null, "Writing in first person is also allowed, but is not recommended.")), m("table", {
      border: "0",
      "class": "striped"
    }, m("thead", null, m("tr", null, m("th", {
      style: "width: 180px; text-align: center;"
    }, "Type"), m("th", {
      style: "text-align: center;"
    }, "Indicators"))), m("tbody", null, m("tr", null, m("td", {
      style: "text-align: center;"
    }, m("strong", null, "Spoken Speech")), m("td", null, m("p", null, "Spoken speech should be distinguishable from action text. To indicate spoken speech, you may:"), m("ul", null, m("li", null, "\u201CPut it into quotation marks.\u201D"), m("li", null, m("strong", null, "Bold it.")), m("li", null, "Highlight it with a ", m("span", {
      "class": "highlight"
    }, m("strong", null, "different colour.")))))), m("tr", null, m("td", {
      style: "text-align: center;"
    }, m("strong", null, "Personal Thoughts")), m("td", null, m("p", null, m("em", null, "All thoughts should be written in italics.")))), m("tr", null, m("td", {
      style: "text-align: center;"
    }, m("strong", null, "Telepathy (Thoughtspeech)")), m("td", null, m("p", null, "You may use just about any indicator in order to designate text as telepathy. Telepathy may also be expressed in italics as long as it is accompanied by opening and closing indicators."), m("ul", null, m("li", null, "~ Fusce tempor, turpis at accumsan. ~"), m("li", null, "\u2039 Fusce tempor, turpis at accumsan. \u203A"), m("li", null, "\xAB Fusce tempor, turpis at accumsan. \xBB")))), m("tr", null, m("td", {
      style: "text-align: center;"
    }, m("strong", null, "Actions")), m("td", null, m("p", null, "All character actions should be written without the use of asterisks (*) or any other action indicators."))))), m("p", null, "Please refer to our ", m("a", {
      href: "/wiki/Roleplaying_Etiquette"
    }, "Roleplaying Etiquette"), " for more information about posting In Character."), m("h2", null, "Copyright"), m("p", null, "If you really like one of the ideas or something else that you see here and wish to use it, please contact us. We would like to keep Shadowlack and all of it's related characters, ideas, and indicia to just this site. Those found breaking this rule will be dealt with."), m("hr", null), m("p", null, "Failure to comply to these rules and regulations may result in ", m("strong", null, "a)"), " a warning, ", m("strong", null, "b)"), " temporary account freezing or ", m("strong", null, "c)"), " permanent banishment from the game.")))));
  };

  return RulesPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/StaffHandbookPage.js":
/*!***************************************************!*\
  !*** ./src/forum/components/StaffHandbookPage.js ***!
  \***************************************************/
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
    app.history.push('staff-handbook', 'Staff Handbook');
    app.setTitle('Staff Handbook');
    $('meta[name=description]').attr('content', 'A simple reference on how Shadowlack\'s staff should act when faced with conflicts.');
    return m("div", {
      className: "Pages"
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.hero(), m("div", {
      className: "Pages-container container"
    }, m("div", {
      className: "sideNavContainer"
    }, m("nav", {
      className: "IndexPage-nav sideNav",
      config: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.affixSidebar
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.sidebarItems().toArray()))), m("article", {
      className: "Pages-content IndexPage-results sideNavOffset"
    }, m("h1", null, "Staff Handbook"), m("p", null, "Salutations, and welcome to the Staff Handbook. This guide is intended to aid Shadowlack's (the \"Site\") staff in learning more about their position and duties while acting on the Site's behalf. It is available as a public document all our players to maintain transparency."), m("p", null, "Since our environment is ever-changing, it would be foolish to think that everything written within this Handbook should be set in stone. Therefore, while this advice and guidelines are applicable now, they will be subject to revisions."), m("p", null, "This Site operates on various rules and guidelines. It is these guidelines that help prevent the Site spiralling down toward chaos. As a staff member, we assume you are intimately familiar with all of our rules and that you adhere to them fully."), m("h2", null, "I. Staff Member Conduct"), m("p", null, "As a staff member of this Site, you are expected to remember the following:"), m("ol", null, m("li", null, m("b", null, "Representative"), m("br", null), "You are considered a representative of our Site. You must also note that as a representative this Site, that your actions, or lack of actions on other web sites may reflect your reputation here as well as our Site's image."), m("li", null, m("b", null, "Professionalism"), m("br", null), "Staff members are expected to act in a professional manner. You must be courteous towards other players and your fellow staff members. If you do not respect them, they will not respect you. All staff members are expected to act with maturity."), m("li", null, m("b", null, "Site Rules"), m("br", null), "Being a staff member is a privilege, not a right. Even though you are a staff member, that does not mean that you are above the Site\u2019s regular rules. All staff members must abide by as well as enforce the Site\u2019s rules."), m("li", null, m("b", null, "Favouritism"), m("br", null), "As a staff member, you should not show favouritism towards other players. This means granting individual players special privileges or rights. This does not mean that you cannot make friends with players. In fact, you\u2019re encouraged to make friends. Try your best to treat everyone equally."), m("li", null, m("b", null, "Spreading Gossip and/or Negativity"), m("br", null), "We do not permit staff members to talk negatively about ", m("u", null, "any"), " player at our Site on our public-facing or private staff boards. Problematic players should be brought to the attention of an Administrator and handled privately. We will not facilitate the airing of anyone's \"dirty laundry.\"")), m("h2", null, "II. Conflict Resolutions"), m("p", null, "All sites have their conflicts and we are no exception. It is how we deal with conflict that builds a safe and welcoming environment for everyone. All staff members are responsible for maintaining the peace and enforcing the rules. Following this are a list of possible player infractions and then the consequences for each. Please note that this is not a complete list and that some situations may be handled differently. When in doubt, please contact an Administrator."), m("p", null, "Private Messages and the chat room are not exempt from the Rules and Regulations laid down by the Site."), m("h3", null, "A. Minor Infractions"), m("ol", null, m("li", null, m("b", null, "Acting as a \"Mini-Moderator\"."), " When a player see another player breaking the rules, it is only natural for them to try and correct the rule-breaker's behaviour. However, that is not their job and can breed unwanted resentment if done incorrectly. If you see someone calling another person out for rule-breaking who is not an assigned staff member, please remind them that that is a staff member's duty. If they're keen on helping out (as people tend to be), let them know that they may contact you privately about rule infractions that they find."), m("li", null, m("b", null, "Multiple posts caused by accidentally double posting."), "The board should take care of most of these automagically by itself, but in the event that they do not: merge the posts and gently remind the player that they should be editing their original post."), m("li", null, m("b", null, "Advertisements to other Play-by-Post games (not listed in our affiliates)."), " Warn player and edit the post to remove the game name and link."), m("li", null, m("b", null, "Spamming."), " Warn player. Lock spammy threads and/or posts."), m("li", null, m("b", null, "Threads posted in the wrong areas."), " Move the thread to the appropriate area. Only warn the player if they are a repeat offender. Mistakes happen!"), m("li", null, m("b", null, "Signature is too large."), " Ask them to please change their signature. You may edit the player's signature if you see fit.")), m("h3", null, "B. Major Infractions"), m("p", null, "AKA, the things that will likely get you banned from our Site."), m("ol", null, m("li", null, m("b", null, "Harassment/racial slurs/gender discrimination/etc."), " Immediate ban unless you believe the user is being unknowingly ignorant or insensitive. Our Site has a large LGBT+ audience and not all \"muggles\" know when they are being insensitive. Try to educate them nicely if you believe this is the case! Posts should be locked for documentation and players banned depending upon the severity."), m("li", null, m("b", null, "Illegal content in posts (ripped MP3s, hacks, cracks, etc.)"), " Warn player. Posts should be closed and links removed. Only repeat offenders should be banned."), m("li", null, m("b", null, "Excessive swearing and/or swearing directed at another player."), " Swearing in general is allowed on the Site, so long as it is not maliciously directed toward other players. If it appears to be malicious, warn the player and lock the post. Repeat offenders should be banned."), m("li", null, m("b", null, "Abuse of the Private Messenger system (PMs)."), " Report the incident immediately to an Administrator. Administrators can check the PM logs and deal with the situation as they see fit."), m("li", null, m("b", null, "Signature or avatar contains disagreeable or distasteful content."), " Warn player. Delete their avatar or signature if you feel that it is necessary. Repeat offenders will be banned."), m("li", null, m("b", null, "Purposely flooding/spamming the boards."), " Ban player. Delete posts/threads."), m("li", null, m("b", null, "Pornography or links to pornography in posts."), " Ban player. Delete posts/threads.")), m("h3", null, "How to Issue a Warning"), m("p", null, "When giving a player a warning it is best to be as clear and concise as you possibly can. Clearly state which rule(s) the player is breaking and remind them that what they are doing isn't acceptable at our Site. If they are a new player, extra lenience should be given. ", m("u", null, "Do not"), " yell at the player, or be sarcastic. Your job is to maintain the peace and the rules, not start up petty fights or create an unwelcoming and/or hostile environment. If the player talks back or otherwise defies your authority, please bring the issue to an Administrator's attention."), m("h3", null, "How to Deal With Repeat Offenders"), m("p", null, "There will always be a few problematic players at any given Site. If a player has had multiple minor infractions, or several major infractions, despite giving them multiple warnings, a temporary or permanent ban may be needed. It is best to discuss the problematic player with an Administrator before proceeding with a plan of action."), m("h3", null, "Disagreements With Fellow Staff Members"), m("p", null, "Yes, us staff are all different people with different faces from different places. There may come a time when you disagree with a particular course of action that a staff member has taken. Whatever you do, do not outright confront the staff member on the public-facing boards. (Public dissension among the ranks? Yuck.) If you have a problem, either discuss it with your fellow staff member privately, discuss it in the non-public staff board, or bring it to the attention of an Administrator. You must, under all circumstances, treat fellow staff members with respect, just as you would a player."), m("h2", null, "III. Removal of Staff Members"), m("p", null, "There are several ways that you as a staff member may lose your position:"), m("ul", null, m("li", null, m("b", null, "Consistent breaking of rules or defying authority."), " You broke multiple rules and despite warnings, it has been mutually felt that having you on our staff team would no longer be beneficial to us."), m("li", null, m("b", null, "Missing in action (MIA)."), " You took an unexplained prolonged absence. Staff members who have been inactive for over a month may be removed from their position."), m("li", null, m("b", null, "Multiple haitus periods."), " It was felt that you took too much time off away from our Site. Although your time periods away were explained (life happens!), we believe that someone more active and with more time to spare would do better having your position."), m("li", null, m("b", null, "Not performing to the Site's standards."), " We have reviewed your progress, informally or formally, and have felt that you just are not performing to the high expectations that we have for our staff members.")), m("hr", {
      "class": "soften"
    }), m("p", null, "Did you find this Staff Handbook useful and want to use it on your own site or game? ", m("a", {
      href: "https://www.rpgfix.com/resources/free-staff-handbook-template.5/"
    }, "Learn more about how to do so here"), ".")))));
  };

  return AboutPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/extShadowIndexPage.js":
/*!****************************************************!*\
  !*** ./src/forum/components/extShadowIndexPage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/SignUpModal */ "flarum/components/SignUpModal");
/* harmony import */ var flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_4__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'sidebarItems', function (items) {
    // Add sidebar guest register button
    if (typeof flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user === 'undefined') {
      items.add('shadowLogin', flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
        children: flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('core.forum.sign_up.submit_button'),
        className: 'Button Button--primary',
        onclick: function onclick() {
          flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.modal.show(new flarum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_3___default.a());
        }
      }), 110); // Remove new discussion button because it's confusing to guests

      items.remove('newDiscussion');
    }
  });
});

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/components/HeaderPrimary */ "flarum/components/HeaderPrimary");
/* harmony import */ var flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AboutPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AboutPage */ "./src/forum/components/AboutPage.js");
/* harmony import */ var _components_AntiHPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AntiHPage */ "./src/forum/components/AntiHPage.js");
/* harmony import */ var _components_CodexGenName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CodexGenName */ "./src/forum/components/CodexGenName.js");
/* harmony import */ var _components_CodexGenScenario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CodexGenScenario */ "./src/forum/components/CodexGenScenario.js");
/* harmony import */ var _components_extShadowIndexPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/extShadowIndexPage */ "./src/forum/components/extShadowIndexPage.js");
/* harmony import */ var _components_LegalPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/LegalPage */ "./src/forum/components/LegalPage.js");
/* harmony import */ var _components_ParentsPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ParentsPage */ "./src/forum/components/ParentsPage.js");
/* harmony import */ var _components_PrivacyPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/PrivacyPage */ "./src/forum/components/PrivacyPage.js");
/* harmony import */ var _components_RatingPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/RatingPage */ "./src/forum/components/RatingPage.js");
/* harmony import */ var _components_RulesPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/RulesPage */ "./src/forum/components/RulesPage.js");
/* harmony import */ var _components_StaffHandbookPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/StaffHandbookPage */ "./src/forum/components/StaffHandbookPage.js");















/**
 * Extend top primary navigation
 */

Object(flarum_extend__WEBPACK_IMPORTED_MODULE_3__["extend"])(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_0___default.a.prototype, 'items', function (items) {
  items.add('about', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
    children: 'About',
    href: app.route('about')
  }));
  items.add('wiki', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
    children: 'Wiki',
    href: 'https://shadowlack.com/wiki'
  }));
});
/**
 * Extend sidebar navigation
 */

Object(flarum_extend__WEBPACK_IMPORTED_MODULE_3__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'navItems', function (items) {
  items.add('about', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
    icon: 'fas fa-info',
    children: 'About',
    href: app.route('about')
  })); // if (items.items.about.content.props.active === true) {

  items.add('rules', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
    parent: 'about',
    children: 'Rules & Regulations',
    href: app.route('rules')
  }));
  items.add('anti-harassment-policy', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
    parent: 'about',
    children: 'Anti-Harassment Policy',
    href: app.route('antih')
  }));
  items.add('parents', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
    parent: 'about',
    children: 'For Parents',
    href: app.route('parents')
  }));
  items.add('staff-handbook', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
    parent: 'about',
    children: 'Staff Handbook',
    href: app.route('staff')
  })); // }
});
/**
 * Initialize custom pages with their routes
 */

app.initializers.add('shriker/shadowlack-guts', function () {
  Object(_components_extShadowIndexPage__WEBPACK_IMPORTED_MODULE_8__["default"])();
  app.routes.about = {
    path: '/about',
    component: _components_AboutPage__WEBPACK_IMPORTED_MODULE_4__["default"].component()
  };
  app.routes.rules = {
    path: '/rules',
    component: _components_RulesPage__WEBPACK_IMPORTED_MODULE_13__["default"].component()
  };
  app.routes.antih = {
    path: '/anti-harassment-policy',
    component: _components_AntiHPage__WEBPACK_IMPORTED_MODULE_5__["default"].component()
  };
  app.routes.parents = {
    path: '/parents',
    component: _components_ParentsPage__WEBPACK_IMPORTED_MODULE_10__["default"].component()
  };
  app.routes.rating = {
    path: '/rating',
    component: _components_RatingPage__WEBPACK_IMPORTED_MODULE_12__["default"].component()
  };
  app.routes.staff = {
    path: '/staff-handbook',
    component: _components_StaffHandbookPage__WEBPACK_IMPORTED_MODULE_14__["default"].component()
  };
  app.routes.privacy = {
    path: '/privacy',
    component: _components_PrivacyPage__WEBPACK_IMPORTED_MODULE_11__["default"].component()
  };
  app.routes.legal = {
    path: '/legal',
    component: _components_LegalPage__WEBPACK_IMPORTED_MODULE_9__["default"].component()
  };
  app.routes.codexscenario = {
    path: '/codex/scenario',
    component: _components_CodexGenScenario__WEBPACK_IMPORTED_MODULE_7__["default"].component()
  };
  app.routes.codexname = {
    path: '/codex/random-name-generator',
    component: _components_CodexGenName__WEBPACK_IMPORTED_MODULE_6__["default"].component()
  };
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/SelectDropdown":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['common/components/SelectDropdown']" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/SelectDropdown'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

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

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/SignUpModal":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/SignUpModal']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SignUpModal'];

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
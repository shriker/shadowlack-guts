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
    app.setTitle('Rules & Regulation');
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
    }, m("h1", null, "Rules & Regulation"), m("h2", null, "Age"), m("p", null, "It is ", m("em", null, "highly recommended"), " that you are thirteen years old or older to join this site, or have your parent's consent. Are you under thirteen and still wish to join? Please have your parents read our ", m("a", {
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
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/HeaderPrimary */ "flarum/components/HeaderPrimary");
/* harmony import */ var flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Separator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Separator */ "flarum/components/Separator");
/* harmony import */ var flarum_components_Separator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Separator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AntiHPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AntiHPage */ "./src/forum/components/AntiHPage.js");
/* harmony import */ var _components_AboutPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/AboutPage */ "./src/forum/components/AboutPage.js");
/* harmony import */ var _components_RulesPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/RulesPage */ "./src/forum/components/RulesPage.js");
/* harmony import */ var _components_ParentsPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ParentsPage */ "./src/forum/components/ParentsPage.js");









/**
 * Extend top primary navigation
 */

Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'items', function (items) {
  items.add('about', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default.a.component({
    children: 'About',
    href: app.route('about')
  }));
  items.add('wiki', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default.a.component({
    children: 'Wiki',
    href: 'https://shadowlack.com/wiki'
  }));
});
/**
 * Extend sidebar navigation
 */

Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'navItems', function (items) {
  items.add('about', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default.a.component({
    icon: 'fas fa-info',
    children: 'About',
    href: app.route('about')
  })); // if (items.items.about.content.props.active === true) {

  items.add('rules', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default.a.component({
    parent: 'about',
    children: 'Rules & Regulations',
    href: app.route('rules')
  }));
  items.add('anti-harassment-policy', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default.a.component({
    parent: 'about',
    children: 'Anti-Harassment Policy',
    href: app.route('antih')
  }));
  items.add('parents', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default.a.component({
    parent: 'about',
    children: 'For Parents',
    href: app.route('parents')
  })); // }

  console.log(items);
});
/**
 * Initialize custom pages with their routes
 */

app.initializers.add('shriker/shadowlack-guts', function () {
  app.routes.about = {
    path: '/about',
    component: _components_AboutPage__WEBPACK_IMPORTED_MODULE_6__["default"].component()
  };
  app.routes.rules = {
    path: '/rules',
    component: _components_RulesPage__WEBPACK_IMPORTED_MODULE_7__["default"].component()
  };
  app.routes.antih = {
    path: '/anti-harassment-policy',
    component: _components_AntiHPage__WEBPACK_IMPORTED_MODULE_5__["default"].component()
  };
  app.routes.parents = {
    path: '/parents',
    component: _components_ParentsPage__WEBPACK_IMPORTED_MODULE_8__["default"].component()
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

/***/ "flarum/components/Separator":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/Separator']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Separator'];

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
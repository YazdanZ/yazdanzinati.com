/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/greetings.js":
/*!*****************************!*\
  !*** ./src/js/greetings.js ***!
  \*****************************/
/***/ (() => {

/**
 * Greets the visitor with a random hello.
 */
function greet(firstVisit) {
  var greetingText = document.getElementById("greeting-text");
  var greetings = ["Hello", "Hi", "Howdy", "Bonjour", "Hiya", "Greetings", "Howdy-do", "Cheers", "Hey", "Heyyy", "Ahoy", "Ciao", "G’day", "Heya"];
  var greeting;

  if (firstVisit) {
    greeting = greetings[Math.floor(Math.random() * greetings.length)];
  } else {
    greeting = "Hey, you again";
  }

  greetingText.innerHTML = greeting;
}
/**
 * Waves the hand emoji.
 */


function wave() {
  var greetingWave = document.getElementById("greeting-wave");
  greetingWave.classList.add("wave"); // add animation class to element
}
/**
 * On page load, greet with a message depending on if
 * this is the first visit with a wave animation.
 */


if (document.cookie == "HasVisited=true") {
  greet(false);
} else {
  document.cookie = "HasVisited=true";
  greet(true);
}

wave();

/***/ }),

/***/ "./src/js/switch_theme.js":
/*!********************************!*\
  !*** ./src/js/switch_theme.js ***!
  \********************************/
/***/ (() => {

var themeButton = document.getElementById("theme-button");
var darkTheme = "dark-theme";
var iconTheme = "uil-sun"; // Previously selected topic (if user selected)

var selectedTheme = localStorage.getItem("selected-theme");
var selectedIcon = localStorage.getItem("selected-icon"); // We obtain the current theme that the interface has by validating the dark-theme class

var getCurrentTheme = function getCurrentTheme() {
  return document.body.classList.contains(darkTheme) ? "dark" : "light";
};

var getCurrentIcon = function getCurrentIcon() {
  return themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
}; // We validate if the user previously chose a topic


if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
} // Activate/deactivate the theme manually with the button


themeButton.addEventListener("click", function () {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme); // We save the theme and the current icon that the user chose

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tooltip {\n  position: relative;\n  --tooltip-bg-color: var(--def-ter-color);\n  --tooltip-fg-color: white;\n  --arrow-size: 10px; }\n\n.tooltip:before,\n.tooltip:after {\n  position: absolute;\n  bottom: -10px;\n  transform: translateX(-50%) translateY(var(--translate-y, 0));\n  left: 50%;\n  font-size: 0.6em;\n  display: none; }\n\n.tooltip:before {\n  --translate-y: 100%;\n  content: attr(data-tooltip);\n  white-space: pre;\n  color: var(--tooltip-fg-color);\n  text-align: center;\n  background-color: var(--tooltip-bg-color);\n  padding: 0.5rem;\n  width: max-content;\n  border-radius: 0.7rem; }\n\n.tooltip:after {\n  content: \"\";\n  width: 2px;\n  height: 10px;\n  border: var(--arrow-size) solid transparent;\n  border-bottom-color: var(--tooltip-bg-color); }\n\n.tooltip:hover::before,\n.tooltip:hover::after {\n  display: inline; }\n\n#greeting-wave {\n  height: calc(0.85 * var(--huge-font-size));\n  display: inline-block; }\n\n.wave {\n  animation-name: wave-animation;\n  /* Refers to the name of your @keyframes element below */\n  animation-duration: 2.5s;\n  /* Change to speed up or slow down */\n  transform-origin: 110% 70%;\n  /* Pivot around the bottom-left palm */\n  animation-delay: 0.2s; }\n\n.wave:hover {\n  animation-play-state: running;\n  animation-iteration-count: infinite; }\n\n@keyframes wave-animation {\n  0% {\n    transform: rotate(0deg); }\n  10% {\n    transform: rotate(14deg); }\n  /* The following five values can be played with to make the waving more or less extreme */\n  20% {\n    transform: rotate(-8deg); }\n  30% {\n    transform: rotate(14deg); }\n  40% {\n    transform: rotate(-4deg); }\n  50% {\n    transform: rotate(10deg); }\n  60% {\n    transform: rotate(0deg); }\n  /* Reset for the last half to pause */\n  100% {\n    transform: rotate(0deg); } }\n\n/* hide email through css */\n/*************************/\nmy-email::after {\n  content: attr(data-domain); }\n\nmy-email::before {\n  content: attr(data-user) \"@\"; }\n\n:root {\n  /* define nord colors */\n  --nord0: #2e3440;\n  --nord1: #3b4252;\n  --nord2: #434c5e;\n  --nord3: #4c566a;\n  --nord4: #d8dee9;\n  --nord5: #e5e9f0;\n  --nord6: #eceff4;\n  --nord7: #8fbcbb;\n  --nord8: #88c0d0;\n  --nord9: #81a1c1;\n  --nord10: #5e81ac;\n  --nord11: #bf616a;\n  --nord12: #d08770;\n  --nord13: #ebcb8b;\n  --nord14: #a3be8c;\n  --nord15: #b48ead; }\n\n:root {\n  /* Font family */\n  --def-font: \"Quicksand\";\n  /* Font sizes */\n  --huge-font-size: 3rem;\n  --big-font-size: 1.5rem;\n  --normal-font-size: 1.2rem;\n  --icon-font-size: 1.3em;\n  --huge-font-weight: 700;\n  --big-font-weight: 500;\n  /* light mode colors */\n  --def-bg-color: white;\n  --def-fg-color: var(--nord3);\n  --def-sec-color: var(--nord10);\n  --def-ter-color: var(--nord9); }\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin-top: 0; }\n\nhtml,\nbody {\n  height: 100%; }\n\nbody {\n  background-color: var(--def-bg-color);\n  font-family: var(--def-font), sans-serif;\n  transition: all 0.3s;\n  margin-top: 0;\n  margin-bottom: 0;\n  color: var(--def-fg-color); }\n\nheader {\n  width: 100%;\n  display: block;\n  height: 30px;\n  margin-bottom: 2rem; }\n\nmain {\n  height: 75%;\n  margin: auto;\n  display: table; }\n\nfooter {\n  margin-bottom: 2rem; }\n\n.container {\n  max-width: 1200px;\n  margin-left: 1.5rem;\n  margin-right: 1.5rem; }\n\n.home {\n  display: table-cell;\n  vertical-align: middle;\n  border: 1.5rem solid transparent; }\n\ni {\n  font-size: var(--icon-font-size); }\n\nh1 {\n  font-size: var(--huge-font-size);\n  font-weight: var(--huge-font-weight); }\n\nh2 {\n  font-size: var(--big-font-size);\n  font-weight: var(--big-font-weight); }\n\np,\nul {\n  font-size: var(--normal-font-size);\n  font-weight: var(--big-font-weight); }\n\nil {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block; }\n\nspan,\na {\n  color: var(--def-sec-color); }\n\na {\n  white-space: nowrap; }\n\ni:hover,\na:hover,\na:active,\na:focus {\n  color: var(--def-ter-color); }\n\n/* Selection colors */\n/*******************/\n::-moz-selection {\n  color: var(--selection-fg-color);\n  background: var(--selection-bg-color); }\n\n::selection {\n  color: var(--def-bg-color);\n  background: var(--def-fg-color); }\n\n/**\n* Make images unselectable.\n*/\nimg {\n  -khtml-user-select: none;\n  -o-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none; }\n\n/* Media queries */\n/****************/\n@media screen and (min-width: 768px) {\n  .container {\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 1.5rem;\n    padding-right: 1.5rem; }\n  .home.container {\n    border: 0rem solid transparent; } }\n\n@media screen and (max-width: 400px) {\n  .container {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem; }\n  .home.container {\n    border: 0.5rem solid transparent; } }\n\n/* Font size for large devices */\n@media screen and (min-width: 568px) {\n  :root {\n    --huge-font-size: 5rem;\n    --big-font-size: 2.5rem;\n    --normal-font-size: 2rem; } }\n\n/* Theme switching */\n/******************/\n#theme-button {\n  font-size: 1.5rem;\n  float: right;\n  margin-top: 0.5rem; }\n\nbody.dark-theme {\n  --def-bg-color: var(--nord0);\n  --def-fg-color: var(--nord6);\n  --def-sec-color: var(--nord8);\n  --def-ter-color: var(--nord7); }\n\n#greeting-text {\n  color: var(--def-fg-color); }\n\n.social-icon {\n  text-decoration: none; }\n", "",{"version":3,"sources":["webpack://./src/css/tooltip.scss","webpack://./src/css/wave.scss","webpack://./src/css/hideemail.scss","webpack://./src/css/nord.scss","webpack://./src/css/coreconf.scss","webpack://./src/css/style.scss"],"names":[],"mappings":"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","sourcesContent":[".tooltip {\n  position: relative;\n  --tooltip-bg-color: var(--def-ter-color);\n  --tooltip-fg-color: white;\n  --arrow-size: 10px;\n}\n\n.tooltip:before,\n.tooltip:after {\n  position: absolute;\n  bottom: -10px;\n  transform: translateX(-50%) translateY(var(--translate-y, 0));\n  left: 50%;\n  font-size: 0.6em;\n  display: none;\n}\n\n.tooltip:before {\n  --translate-y: 100%;\n  content: attr(data-tooltip);\n  white-space: pre;\n  color: var(--tooltip-fg-color);\n  text-align: center;\n  background-color: var(--tooltip-bg-color);\n  padding: 0.5rem;\n  width: max-content;\n  border-radius: 0.7rem;\n}\n\n.tooltip:after {\n  content: \"\";\n  width: 2px;\n  height: 10px;\n  border: var(--arrow-size) solid transparent;\n  border-bottom-color: var(--tooltip-bg-color);\n}\n\n.tooltip:hover::before,\n.tooltip:hover::after {\n  display: inline;\n}\n","#greeting-wave {\n  height: calc(0.85 * var(--huge-font-size));\n  display: inline-block;\n}\n\n.wave {\n  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */\n  animation-duration: 2.5s; /* Change to speed up or slow down */\n  transform-origin: 110% 70%; /* Pivot around the bottom-left palm */\n  animation-delay: 0.2s;\n}\n\n.wave:hover {\n  animation-play-state: running;\n  animation-iteration-count: infinite;\n}\n\n@keyframes wave-animation {\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(14deg);\n  } /* The following five values can be played with to make the waving more or less extreme */\n  20% {\n    transform: rotate(-8deg);\n  }\n  30% {\n    transform: rotate(14deg);\n  }\n  40% {\n    transform: rotate(-4deg);\n  }\n  50% {\n    transform: rotate(10deg);\n  }\n  60% {\n    transform: rotate(0deg);\n  } /* Reset for the last half to pause */\n  100% {\n    transform: rotate(0deg);\n  }\n}\n","/* hide email through css */\n/*************************/\nmy-email::after {\n  content: attr(data-domain);\n}\nmy-email::before {\n  content: attr(data-user) \"\\0040\";\n}\n",":root {\n  /* define nord colors */\n  --nord0: #2e3440;\n  --nord1: #3b4252;\n  --nord2: #434c5e;\n  --nord3: #4c566a;\n  --nord4: #d8dee9;\n  --nord5: #e5e9f0;\n  --nord6: #eceff4;\n  --nord7: #8fbcbb;\n  --nord8: #88c0d0;\n  --nord9: #81a1c1;\n  --nord10: #5e81ac;\n  --nord11: #bf616a;\n  --nord12: #d08770;\n  --nord13: #ebcb8b;\n  --nord14: #a3be8c;\n  --nord15: #b48ead;\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap\");\n@import \"nord\";\n\n:root {\n  /* Font family */\n  --def-font: \"Quicksand\";\n\n  /* Font sizes */\n  --huge-font-size: 3rem;\n  --big-font-size: 1.5rem;\n  --normal-font-size: 1.2rem;\n\n  --icon-font-size: 1.3em;\n\n  --huge-font-weight: 700;\n  --big-font-weight: 500;\n\n  /* light mode colors */\n  --def-bg-color: white;\n  --def-fg-color: var(--nord3);\n  --def-sec-color: var(--nord10);\n  --def-ter-color: var(--nord9);\n}\n","@import \"tooltip\";\n@import \"wave\";\n@import \"hideemail\";\n@import \"coreconf\";\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin-top: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  background-color: var(--def-bg-color);\n  font-family: var(--def-font), sans-serif;\n  transition: all 0.3s;\n  margin-top: 0;\n  margin-bottom: 0;\n  color: var(--def-fg-color);\n}\n\nheader {\n  width: 100%;\n  display: block;\n  height: 30px;\n  margin-bottom: 2rem;\n}\n\nmain {\n  height: 75%;\n  margin: auto;\n  display: table;\n}\n\nfooter {\n  margin-bottom: 2rem;\n}\n\n.container {\n  max-width: 1200px;\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n\n.home {\n  display: table-cell;\n  vertical-align: middle;\n  border: 1.5rem solid transparent;\n}\n\ni {\n  font-size: var(--icon-font-size);\n}\n\nh1 {\n  font-size: var(--huge-font-size);\n  font-weight: var(--huge-font-weight);\n}\n\nh2 {\n  font-size: var(--big-font-size);\n  font-weight: var(--big-font-weight);\n}\n\np,\nul {\n  font-size: var(--normal-font-size);\n  font-weight: var(--big-font-weight);\n}\n\nil {\n  white-space: nowrap;\n  margin-right: 20px;\n  display: inline-block;\n}\n\nspan,\na {\n  color: var(--def-sec-color);\n}\n\na {\n  white-space: nowrap;\n}\n\ni:hover,\na:hover,\na:active,\na:focus {\n  color: var(--def-ter-color);\n}\n\n/* Selection colors */\n/*******************/\n::-moz-selection {\n  color: var(--selection-fg-color);\n  background: var(--selection-bg-color);\n}\n\n::selection {\n  color: var(--def-bg-color);\n  background: var(--def-fg-color);\n}\n\n/**\n* Make images unselectable.\n*/\nimg {\n  -khtml-user-select: none;\n  -o-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n/* Media queries */\n/****************/\n@media screen and (min-width: 768px) {\n  .container {\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n  .home.container {\n    border: 0rem solid transparent;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  .container {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n  .home.container {\n    border: 0.5rem solid transparent;\n  }\n}\n\n/* Font size for large devices */\n@media screen and (min-width: 568px) {\n  :root {\n    --huge-font-size: 5rem;\n    --big-font-size: 2.5rem;\n    --normal-font-size: 2rem;\n  }\n}\n\n/* Theme switching */\n/******************/\n#theme-button {\n  font-size: 1.5rem;\n  float: right;\n  margin-top: 0.5rem;\n}\n\nbody.dark-theme {\n  --def-bg-color: var(--nord0);\n  --def-fg-color: var(--nord6);\n  --def-sec-color: var(--nord8);\n  --def-ter-color: var(--nord7);\n}\n\n#greeting-text {\n  color: var(--def-fg-color);\n}\n\n.social-icon {\n  text-decoration: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _greetings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greetings */ "./src/js/greetings.js");
/* harmony import */ var _greetings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_greetings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _switch_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch_theme */ "./src/js/switch_theme.js");
/* harmony import */ var _switch_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_switch_theme__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
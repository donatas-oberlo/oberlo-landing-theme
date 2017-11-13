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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_js_header__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_js_footer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_js_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_js_footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_sass_styles_sass__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_sass_styles_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_sass_styles_sass__);





/* On page load */
document.addEventListener('DOMContentLoaded', function () {
  Object(__WEBPACK_IMPORTED_MODULE_0__src_js_header__["a" /* default */])();
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function initNavbarBurger() {
  const $navbarBurgers = document.querySelectorAll('.navbar-burger');

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach(($el) => {
      $el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = $el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
}

function initNavbarDropdown() {
  const $navbarDropdown = document.querySelectorAll('.navbar-item.has-dropdown');

  if ($navbarDropdown.length > 0) {

    $navbarDropdown.forEach(($el) => {
      $el.addEventListener('click', () => {
        $el.classList.toggle('show-dropdown');
      });
    });
  }
}

function initShowAllArticles() {
  const $navbarDropdown = document.querySelector('#show-all-articles');
  const $allArticles = document.querySelector('#all-articles');

  if ($navbarDropdown && $allArticles) {
    $navbarDropdown.addEventListener('click', () => {
      $allArticles.classList.toggle('is-hidden-touch');
    });
  }
}

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

function initShrinkHeader() {
  const shrinkHeader = 94;
  const $header = document.querySelector('.navbar-primary');

  if ($header) {
    window.addEventListener('scroll', function(e) {
      const scroll = getCurrentScroll();

      $header.classList.toggle('expanded', scroll < shrinkHeader);
    });
  }
}

function initSearchNavbarSecondary() {
  const $btn = document.querySelector('.nav-search-button');
  const $navbar = document.querySelector('.navbar-secondary .navbar');

  if ($btn && $navbar) {
    $btn.addEventListener('click', () => {
      $navbar.classList.toggle('search');
    });
  }
}

function initHeader() {
  initNavbarBurger();
  initNavbarDropdown();
  initShowAllArticles();
  initShrinkHeader();
  initSearchNavbarSecondary();
}

/* harmony default export */ __webpack_exports__["a"] = (initHeader);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

window.onload = function() {
  const menuTitles = document.querySelectorAll('a.footer-menu-title');

  menuTitles.forEach(title => title.addEventListener('click', (event) => {
    event.preventDefault();
    title.parentElement.classList.toggle('is-active');
  }));
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
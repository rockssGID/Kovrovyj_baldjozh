/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/js/modules/menu.js\");\n\r\n\r\n\r\n\r\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_0__.initMenu)();\n\n//# sourceURL=webpack://web-project/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initMenu: () => (/* binding */ initMenu)\n/* harmony export */ });\nfunction initMenu() {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    const buttonCatalog = document.querySelector('#minClass-button-catalog');\r\n    const buttonBurgerMenu = document.querySelector('#minClass-button-burger-menu');\r\n    const containerCatalog = document.querySelector('#minClass-container-catalog');\r\n    const containerMenu = document.querySelector('#minClass-container-bassic-menu');   \r\n    \r\n    //console.log(buttonCatalog);\r\n    let clicked = false;\r\n    let clicked2 = false;\r\n\r\n    function buttonMenu(input) {\r\n      if (input === \"clickCatalogButton\") {\r\n        if (!clicked) {\r\n          containerCatalog.classList.add('minClass-list-bassic-menu__catalog--active');\r\n          containerMenu.classList.remove('minClass-list-bassic-menu--active');\r\n        } else {\r\n          containerCatalog.classList.remove('minClass-list-bassic-menu__catalog--active');\r\n          containerMenu.classList.remove('minClass-list-bassic-menu--active');\r\n          buttonBurgerMenu.classList.remove('minClass-list-dop-menu__link--active')\r\n          clicked2 = !clicked2;\r\n        }\r\n        clicked = !clicked;\r\n      } else if (input === \"clickBurgerButton\") {\r\n        if (!clicked2) {\r\n          containerCatalog.classList.remove('minClass-list-bassic-menu__catalog--active');\r\n          containerMenu.classList.add('minClass-list-bassic-menu--active');\r\n          buttonBurgerMenu.classList.add('minClass-list-dop-menu__link--active');\r\n        } else {\r\n          containerCatalog.classList.remove('minClass-list-bassic-menu__catalog--active');\r\n          containerMenu.classList.remove('minClass-list-bassic-menu--active');\r\n          buttonBurgerMenu.classList.remove('minClass-list-dop-menu__link--active');\r\n        }\r\n        clicked2 = !clicked2;\r\n      } else if (input === \"missClick\") {\r\n        containerCatalog.classList.remove('minClass-list-bassic-menu__catalog--active');\r\n        containerMenu.classList.remove('minClass-list-bassic-menu--active');\r\n        buttonBurgerMenu.classList.remove('minClass-list-dop-menu__link--active');\r\n\r\n        clicked = false;\r\n        clicked2 = false;\r\n      }\r\n      \r\n    }\r\n\r\n    buttonBurgerMenu.addEventListener('click', () => {\r\n      buttonMenu('clickBurgerButton');\r\n    });\r\n\r\n    buttonCatalog.addEventListener('click', () => {\r\n      buttonMenu('clickCatalogButton');\r\n      //console.log('Кнопка каталог');\r\n    });\r\n    \r\n    document.addEventListener('click', (event) => {\r\n      const isClickInsideCatalog = event.target.closest('#minClass-button-catalog');\r\n      const isClickInsideBurger = event.target.closest('#minClass-button-burger-menu');\r\n    \r\n      if (!isClickInsideCatalog && !isClickInsideBurger) {\r\n        buttonMenu('missClick');\r\n        console.log('Miss');\r\n      }\r\n    });\r\n  })\r\n}\n\n//# sourceURL=webpack://web-project/./src/js/modules/menu.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;
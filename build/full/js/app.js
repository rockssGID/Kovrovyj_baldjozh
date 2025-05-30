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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/js/modules/menu.js\");\n/* harmony import */ var _modules_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/footer.js */ \"./src/js/modules/footer.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_0__.initMenu)();\r\n(0,_modules_footer_js__WEBPACK_IMPORTED_MODULE_1__.initFooter)();\n\n//# sourceURL=webpack://web-project/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/footer.js":
/*!**********************************!*\
  !*** ./src/js/modules/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initFooter: () => (/* binding */ initFooter)\n/* harmony export */ });\nfunction initFooter () {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    const containerCatalogFooter = document.querySelector('.minClass-list-catalog-footer');\r\n    const catalogItems = containerCatalogFooter.querySelectorAll('.minClass-list-catalog-footer__item');\r\n\r\n    const containerStockFooter = document.querySelector('.minClass-list-stock-footer');\r\n    const stockItems = containerStockFooter.querySelectorAll('.minClass-list-stock-footer__item');\r\n\r\n    const containerInfoFooter = document.querySelector('.minClass-list-info-footer');\r\n    const infoItems = containerInfoFooter.querySelectorAll('.minClass-list-info-footer__item');\r\n\r\n    if (catalogItems.length > 3) {\r\n      containerCatalogFooter.classList.add('minClass-list-common-footer--grid');\r\n    };\r\n\r\n    if (stockItems.length > 3) {\r\n      containerStockFooter.classList.add('minClass-list-common-footer--grid');\r\n    };\r\n\r\n    if (infoItems.length > 3) {\r\n      containerInfoFooter.classList.add('minClass-list-common-footer--grid');\r\n    };\r\n  });\r\n};\n\n//# sourceURL=webpack://web-project/./src/js/modules/footer.js?");

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initMenu: () => (/* binding */ initMenu)\n/* harmony export */ });\nfunction initMenu() {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    const btnBurger = document.querySelector('#minId-button-burger-menu');\r\n    const btnCatalog = document.querySelector('#minId-button-catalog-menu');\r\n    const containerBtnCatalog = document.querySelector('#minId-container-botton-catalog-menu');\r\n    const containerDopMenu = document.querySelector('#minId-container-dop-menu');\r\n    const containerBassicMenu = document.querySelector('#minId-container-bassic-menu');\r\n    const containerCatalogMenu = document.querySelector('#minId-container-catalog-menu');\r\n\r\n    const useBurgerSvg = btnBurger.querySelector('use');\r\n\r\n    const isDesktop = window.matchMedia('(min-width: 768px)');\r\n\r\n    function isLandscapeMobileDevice() {\r\n      const width = window.innerWidth;\r\n      const height = window.innerHeight;\r\n      const ratio = width / height;\r\n\r\n      return width <= 1024 && ratio >= 1.5;\r\n    }\r\n\r\n    function positionCatalogPC() {\r\n      const classActiveCatalog = document.querySelector('.minClass-list-catalog-menu--active')\r\n      const containerBtnCatalogRect = containerBtnCatalog.getBoundingClientRect();\r\n\r\n      if (isLandscapeMobileDevice()) {\r\n        containerCatalogMenu.style.top = '';\r\n        containerCatalogMenu.style.left = '';\r\n      } else if (isDesktop.matches && classActiveCatalog) {\r\n        containerCatalogMenu.style.top = `${containerBtnCatalogRect.bottom}px`;\r\n        containerCatalogMenu.style.left = `${containerBtnCatalogRect.left}px`;\r\n      } else if (isDesktop.matches && !classActiveCatalog) {\r\n        containerCatalogMenu.style.top = `${containerBtnCatalogRect.bottom - 30}px`;\r\n        containerCatalogMenu.style.left = `${containerBtnCatalogRect.left}px`;\r\n      } else {\r\n        containerCatalogMenu.style.top = '';\r\n        containerCatalogMenu.style.left = '';\r\n      }\r\n    };\r\n\r\n    let clickCatalog = false;\r\n    let clickBurger = false;\r\n\r\n    function btnClick(input) {\r\n      if (input === 'catalog') {\r\n        if (!clickCatalog) {\r\n          containerCatalogMenu.classList.add('minClass-list-catalog-menu--active');\r\n          containerBassicMenu.classList.remove('minClass-list-bassic-menu--active');\r\n          console.log('Каталогу присвоен класс PC-Mobile версия');\r\n        } else {\r\n          containerBassicMenu.classList.remove('minClass-list-bassic-menu--active');\r\n          containerCatalogMenu.classList.remove('minClass-list-catalog-menu--active');\r\n          console.log('Каталогу удалили класс PC-Mobile версия');\r\n        }\r\n        clickCatalog = !clickCatalog;\r\n      } else if (input === 'burger') {\r\n        if (!clickBurger) {\r\n          containerBassicMenu.classList.add('minClass-list-bassic-menu--active');\r\n          containerCatalogMenu.classList.remove('minClass-list-catalog-menu--active');\r\n          useBurgerSvg.setAttribute('href', './img/svg/sprite.svg#burger-menu-active');\r\n          console.log('Меню присвоин класс Mobile версия');\r\n        } else {\r\n          containerCatalogMenu.classList.remove('minClass-list-catalog-menu--active');\r\n          containerBassicMenu.classList.remove('minClass-list-bassic-menu--active');\r\n          useBurgerSvg.setAttribute('href', './img/svg/sprite.svg#burger-menu');\r\n          console.log('Повторное нажатие на бургер, все классы удалины Mobile версия');\r\n        }\r\n        clickCatalog = false;\r\n        clickBurger = !clickBurger;\r\n      } else {\r\n        containerCatalogMenu.classList.remove('minClass-list-catalog-menu--active');\r\n        containerBassicMenu.classList.remove('minClass-list-bassic-menu--active');\r\n        useBurgerSvg.setAttribute('href', './img/svg/sprite.svg#burger-menu');\r\n        console.log('Было на жатие в не поле кнопак, все классы удалены');\r\n        clickBurger = false;\r\n        clickCatalog = false;\r\n      }\r\n      positionCatalogPC();\r\n    };\r\n\r\n    btnCatalog.addEventListener('click', () => {\r\n      btnClick('catalog');\r\n      console.log('Кнопка каталог была нажата');\r\n    });\r\n    \r\n    btnBurger.addEventListener('click', () => {\r\n      btnClick('burger');\r\n      console.log('Кнопка бургер была нажата');\r\n    });\r\n\r\n    document.addEventListener('click', (event) => {\r\n      const isClickInsideCatalog = event.target.closest('#minId-button-catalog-menu');\r\n      const isClickInsideBurger = event.target.closest('#minId-button-burger-menu');\r\n\r\n      if (!isClickInsideCatalog && !isClickInsideBurger) {\r\n        clickCatalog = false;\r\n        clickBurger = false;\r\n        btnClick();\r\n        console.log('Miss PC');\r\n      }\r\n    });\r\n\r\n    window.addEventListener('load', positionCatalogPC);\r\n    window.addEventListener('resize', positionCatalogPC);\r\n  });\r\n}\n\n//# sourceURL=webpack://web-project/./src/js/modules/menu.js?");

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
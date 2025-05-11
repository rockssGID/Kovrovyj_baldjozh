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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initMenu: () => (/* binding */ initMenu)\n/* harmony export */ });\nfunction initMenu() {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    const btnBurger = document.querySelector('#minId-button-burger-menu');\r\n    const btnCatalog = document.querySelector('#minId-button-catalog-menu');\r\n    const containerBtnCatalog = document.querySelector('#minId-container-botton-catalog-menu');\r\n    const containerDopMenu = document.querySelector('#minId-container-dop-menu');\r\n    const containerBassicMenu = document.querySelector('#minId-container-bassic-menu');\r\n    const containerCatalogMenu = document.querySelector('#minId-container-catalog-menu');\r\n\r\n    const useBurgerSvg = btnBurger.querySelector('use');\r\n\r\n    const mediaQuery = window.matchMedia('(min-width: 768px)');\r\n\r\n    function positionCatalogPC() {\r\n      if (mediaQuery.matches) {\r\n        const containerBtnCatalogRect = containerBtnCatalog.getBoundingClientRect();\r\n        containerCatalogMenu.style.top = `${containerBtnCatalogRect.bottom}px`;\r\n        containerCatalogMenu.style.left = `${containerBtnCatalogRect.left}px`;\r\n      }\r\n    };\r\n\r\n    let clickCatalog = false;\r\n    let clickBurger = false;\r\n\r\n    function btnClick(input) {\r\n      if (input === 'catalog') {\r\n        if (!clickCatalog) {\r\n          containerCatalogMenu.classList.add('minClass-list-catalog-menu--active');\r\n          containerBassicMenu.classList.remove('minClass-list-bassic-menu--active');\r\n          console.log('Каталогу присвоен класс PC-Mobile версия');\r\n        } else {\r\n          containerCatalogMenu.classList.remove('minClass-list-catalog-menu--active');\r\n          containerBassicMenu.classList.remove('minClass-list-bassic-menu--active');\r\n          console.log('Каталогу удалили класс PC-Mobile версия');\r\n        }\r\n        clickCatalog = !clickCatalog;\r\n      } else if (input === 'burger') {\r\n        if (!clickBurger) {\r\n          containerBassicMenu.classList.add('minClass-list-bassic-menu--active');\r\n          useBurgerSvg.setAttribute('href', './img/svg/sprite.svg#burger-menu-active');\r\n          console.log('Меню присвоин класс Mobile версия');\r\n        } else {\r\n          containerBassicMenu.classList.remove('minClass-list-bassic-menu--active');\r\n          containerCatalogMenu.classList.remove('minClass-list-catalog-menu--active');\r\n          useBurgerSvg.setAttribute('href', './img/svg/sprite.svg#burger-menu');\r\n          console.log('Повторное нажатие на бургер, все классы удалины Mobile версия');\r\n        }\r\n        clickBurger = !clickBurger;\r\n      } else {\r\n        containerBassicMenu.classList.remove('minClass-list-bassic-menu--active');\r\n        containerCatalogMenu.classList.remove('minClass-list-catalog-menu--active');\r\n        useBurgerSvg.setAttribute('href', './img/svg/sprite.svg#burger-menu');\r\n        console.log('Было на жатие в не поле кнопак, все классы удалены');\r\n      }\r\n    };\r\n\r\n    btnCatalog.addEventListener('click', () => {\r\n      btnClick('catalog');\r\n      console.log('Кнопка каталог была нажата');\r\n    });\r\n    \r\n    btnBurger.addEventListener('click', () => {\r\n      btnClick('burger');\r\n      console.log('Кнопка бургер была нажата');\r\n    });\r\n\r\n    document.addEventListener('click', (event) => {\r\n      const isClickInsideCatalog = event.target.closest('#minId-button-catalog-menu');\r\n      const isClickInsideBurger = event.target.closest('#minId-button-burger-menu');\r\n\r\n      if (!isClickInsideCatalog && !isClickInsideBurger) {\r\n        clickCatalog = false;\r\n        clickBurger = false;\r\n        btnClick();\r\n        console.log('Miss PC');\r\n      }\r\n    });\r\n\r\n    function sizeWindow() {\r\n      if (mediaQuery.matches) {\r\n        console.log('Экран больше 768px, пк версия');\r\n      } else {\r\n        console.log('Экран меньше 768px, мобильная версия')\r\n      }\r\n    };\r\n\r\n\r\n    window.addEventListener('load', positionCatalogPC);\r\n    window.addEventListener('resize', positionCatalogPC);\r\n\r\n\r\n    \r\n    //let clicked = false;\r\n    //let clicked2 = false;\r\n    //let catalogTopPosition = false;\r\n\r\n\r\n\r\n    //window.addEventListener('load', eventClickBotton);\r\n    //window.addEventListener('resize', eventClickBotton);\r\n\r\n\r\n\r\n\r\n    //function buttonMenu(input) {\r\n    //  if (input === \"clickCatalogButton\") {\r\n    //    if (!clicked) {\r\n    //      containerCatalog.classList.add('minClass-list-catalog-menu--active');\r\n    //      containerMenu.classList.remove('minClass-list-bassic-menu--active');\r\n    //      catalogTopPosition = !catalogTopPosition;\r\n    //      //positionCatalog();\r\n    //    } else {\r\n    //      containerCatalog.classList.remove('minClass-list-catalog-menu--active');\r\n    //      containerMenu.classList.remove('minClass-list-bassic-menu--active');\r\n    //      buttonBurgerMenu.classList.remove('minClass-list-dop-menu__link--burger-menu--active');\r\n    //      catalogTopPosition = !catalogTopPosition;\r\n    //      clicked2 = !clicked2;\r\n    //      //positionCatalog();\r\n    //    }\r\n    //    clicked = !clicked;\r\n    //  } else if (input === \"clickBurgerButton\") {\r\n    //    if (!clicked2) {\r\n    //      containerCatalog.classList.remove('minClass-list-catalog-menu--active');\r\n    //      containerMenu.classList.add('minClass-list-bassic-menu--active');\r\n    //      buttonBurgerMenu.classList.add('minClass-list-dop-menu__link--burger-menu--active');\r\n    //    } else {\r\n    //      containerCatalog.classList.remove('minClass-list-catalog-menu--active');\r\n    //      containerMenu.classList.remove('minClass-list-bassic-menu--active');\r\n    //      buttonBurgerMenu.classList.remove('minClass-list-dop-menu__link--burger-menu--active');\r\n    //    }\r\n    //    clicked2 = !clicked2;\r\n    //  } else if (input === \"missClick\") {\r\n    //    containerCatalog.classList.remove('minClass-list-catalog-menu--active');\r\n    //    containerMenu.classList.remove('minClass-list-bassic-menu--active');\r\n    //    buttonBurgerMenu.classList.remove('minClass-list-dop-menu__link--burger-menu--active');\r\n    //    catalogTopPosition = false;\r\n    //    //positionCatalog();\r\n    //    clicked = false;\r\n    //    clicked2 = false;\r\n    //  }\r\n      \r\n    //}\r\n\r\n    //buttonBurgerMenu.addEventListener('click', () => {\r\n    //  buttonMenu('clickBurgerButton');\r\n    //  console.log('Кнопка Бургер');\r\n    //});\r\n\r\n    //buttonCatalog.addEventListener('click', () => {\r\n    //  buttonMenu('clickCatalogButton');\r\n    //  console.log('Кнопка каталог');\r\n    //});\r\n    \r\n    //document.addEventListener('click', (event) => {\r\n    //  const isClickInsideCatalog = event.target.closest('#minClass-button-catalog');\r\n    //  const isClickInsideBurger = event.target.closest('#minClass-button-burger-menu');\r\n    \r\n    //  if (!isClickInsideCatalog && !isClickInsideBurger) {\r\n    //    buttonMenu('missClick');\r\n    //    console.log('Miss');\r\n    //  }\r\n    //});\r\n\r\n  });\r\n}\n\n//# sourceURL=webpack://web-project/./src/js/modules/menu.js?");

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
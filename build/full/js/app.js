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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/js/modules/menu.js\");\n/* harmony import */ var _modules_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/footer.js */ \"./src/js/modules/footer.js\");\n/* harmony import */ var _modules_bg_color_logo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/bg-color-logo.js */ \"./src/js/modules/bg-color-logo.js\");\n/* harmony import */ var _modules_swiper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/swiper.js */ \"./src/js/modules/swiper.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_swiper_js__WEBPACK_IMPORTED_MODULE_3__.swiper)();\r\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_0__.initMenu)();\r\n(0,_modules_footer_js__WEBPACK_IMPORTED_MODULE_1__.initFooter)();\r\n(0,_modules_bg_color_logo_js__WEBPACK_IMPORTED_MODULE_2__.initBgColor)();\n\n//# sourceURL=webpack://web-project/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/bg-color-logo.js":
/*!*****************************************!*\
  !*** ./src/js/modules/bg-color-logo.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initBgColor: () => (/* binding */ initBgColor)\n/* harmony export */ });\nfunction initBgColor() {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    const container = document.querySelector('#minId-container-rect');\r\n    const colorBg = document.querySelector('#minId-color-bg');\r\n    const colorBg2 = document.querySelector('#minId-color-bg-2');\r\n\r\n    function containerColorRect() {\r\n      const containerRect = container.getBoundingClientRect();\r\n\r\n      colorBg.style.height = `${containerRect.height}px`;\r\n      colorBg.style.width = `${containerRect.width}px`;\r\n      colorBg2.style.height = `${containerRect.height}px`;\r\n      colorBg2.style.width = `${containerRect.width}px`;\r\n    }\r\n\r\n    let opacity = false;\r\n    function switchColorBg() {\r\n      if (!opacity) {\r\n        colorBg.style.opacity = 0;\r\n      } else {\r\n        colorBg.style.opacity = 1;\r\n      }\r\n\r\n      opacity = !opacity;\r\n    };\r\n\r\n    //setInterval(switchColorBg, 3000);\r\n\r\n    window.addEventListener('load', containerColorRect);\r\n    window.addEventListener('resize', containerColorRect);\r\n  })\r\n\r\n}\r\n\r\n// containerCatalogMenu.style.top = `${containerBtnCatalogRect.bottom}px`;\n\n//# sourceURL=webpack://web-project/./src/js/modules/bg-color-logo.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initMenu: () => (/* binding */ initMenu)\n/* harmony export */ });\nfunction initMenu() {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    const btnBurger = document.querySelector('#minId-button-burger-menu');\r\n    const btnCatalog = document.querySelector('#minId-button-catalog-menu');\r\n    const containerBtnCatalog = document.querySelector('#minId-container-botton-catalog-menu');\r\n    const containerDopMenu = document.querySelector('#minId-container-dop-menu');\r\n    const containerBassicMenu = document.querySelector('#minId-container-bassic-menu');\r\n    const containerCatalogMenu = document.querySelector('#minId-container-catalog-menu');\r\n\r\n    const useBurgerSvg = btnBurger.querySelector('use');\r\n\r\n    const isDesktop = window.matchMedia('(min-width: 768px)');\r\n\r\n    function isLandscapeMobileDevice() {\r\n      const width = window.innerWidth;\r\n      const height = window.innerHeight;\r\n      const ratio = width / height;\r\n\r\n      return width <= 1024 && ratio >= 1.5;\r\n    }\r\n\r\n    function positionCatalogPC() {\r\n      const classActiveCatalog = document.querySelector('.minClass-list-catalog-menu--active')\r\n      const containerBtnCatalogRect = containerBtnCatalog.getBoundingClientRect();\r\n\r\n      if (isLandscapeMobileDevice()) {\r\n        containerCatalogMenu.style.top = '';\r\n        containerCatalogMenu.style.left = '';\r\n      } else if (isDesktop.matches && classActiveCatalog) {\r\n        containerCatalogMenu.style.top = `${containerBtnCatalogRect.bottom}px`;\r\n        containerCatalogMenu.style.left = `${containerBtnCatalogRect.left}px`;\r\n      } else if (isDesktop.matches && !classActiveCatalog) {\r\n        containerCatalogMenu.style.top = `${containerBtnCatalogRect.bottom - 30}px`;\r\n        containerCatalogMenu.style.left = `${containerBtnCatalogRect.left}px`;\r\n      } else {\r\n        containerCatalogMenu.style.top = '';\r\n        containerCatalogMenu.style.left = '';\r\n      }\r\n    };\r\n\r\n    let clickCatalog = false;\r\n    let clickBurger = false;\r\n\r\n    function btnClick(input) {\r\n      if (input === 'catalog') {\r\n        if (!clickCatalog) {\r\n          containerCatalogMenu.classList.add('minClass-list-catalog-menu--active');\r\n          containerBassicMenu.classList.remove('minClass-list-bassic-menu--active');\r\n          console.log('Каталогу присвоен класс PC-Mobile версия');\r\n        } else {\r\n          containerBassicMenu.classList.remove('minClass-list-bassic-menu--active');\r\n          containerCatalogMenu.classList.remove('minClass-list-catalog-menu--active');\r\n          console.log('Каталогу удалили класс PC-Mobile версия');\r\n        }\r\n        clickCatalog = !clickCatalog;\r\n      } else if (input === 'burger') {\r\n        if (!clickBurger) {\r\n          containerBassicMenu.classList.add('minClass-list-bassic-menu--active');\r\n          containerCatalogMenu.classList.remove('minClass-list-catalog-menu--active');\r\n          useBurgerSvg.setAttribute('href', './img/svg/sprite.svg#burger-menu-active');\r\n          console.log('Меню присвоин класс Mobile версия');\r\n        } else {\r\n          containerCatalogMenu.classList.remove('minClass-list-catalog-menu--active');\r\n          containerBassicMenu.classList.remove('minClass-list-bassic-menu--active');\r\n          useBurgerSvg.setAttribute('href', './img/svg/sprite.svg#burger-menu');\r\n          console.log('Повторное нажатие на бургер, все классы удалины Mobile версия');\r\n        }\r\n        clickCatalog = false;\r\n        clickBurger = !clickBurger;\r\n      } else {\r\n        containerCatalogMenu.classList.remove('minClass-list-catalog-menu--active');\r\n        containerBassicMenu.classList.remove('minClass-list-bassic-menu--active');\r\n        useBurgerSvg.setAttribute('href', './img/svg/sprite.svg#burger-menu');\r\n        clickBurger = false;\r\n        clickCatalog = false;\r\n      }\r\n      positionCatalogPC();\r\n    };\r\n\r\n    btnCatalog.addEventListener('click', () => {\r\n      btnClick('catalog');\r\n    });\r\n    \r\n    btnBurger.addEventListener('click', () => {\r\n      btnClick('burger');\r\n    });\r\n\r\n    document.addEventListener('click', (event) => {\r\n      const isClickInsideCatalog = event.target.closest('#minId-button-catalog-menu');\r\n      const isClickInsideBurger = event.target.closest('#minId-button-burger-menu');\r\n\r\n      if (!isClickInsideCatalog && !isClickInsideBurger) {\r\n        clickCatalog = false;\r\n        clickBurger = false;\r\n        btnClick();\r\n      }\r\n    });\r\n\r\n    window.addEventListener('load', positionCatalogPC);\r\n    window.addEventListener('resize', positionCatalogPC);\r\n  });\r\n}\n\n//# sourceURL=webpack://web-project/./src/js/modules/menu.js?");

/***/ }),

/***/ "./src/js/modules/swiper.js":
/*!**********************************!*\
  !*** ./src/js/modules/swiper.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   swiper: () => (/* binding */ swiper)\n/* harmony export */ });\nfunction swiper() {\r\n  document.addEventListener(\"DOMContentLoaded\", () => {\r\n    const swiperSelectors = document.querySelectorAll(\".minClass-swiper\");\r\n\r\n    const swiperData = Array.from(swiperSelectors).map((container) => {\r\n      const slides = Array.from(\r\n        container.querySelectorAll(\".minClass-swiper__slide\")\r\n      );\r\n      const nextBtn = container.querySelector(\".minClass-swiper__button--next\");\r\n      const prevBtn = container.querySelector(\".minClass-swiper__button--prev\");\r\n      const swiperViewport = container.querySelector(\r\n        \".minClass-swiper__viewport\"\r\n      );\r\n\r\n      return {\r\n        container,\r\n        slides,\r\n        nextBtn,\r\n        prevBtn,\r\n        swiperViewport,\r\n      };\r\n    });\r\n\r\n\r\n\r\n    swiperData.forEach((swiper, i) => {\r\n      let currentIndex = 1;\r\n      const total = swiper.slides.length;\r\n      const slidesIndex = swiper.slides;\r\n      const swiperViewport = swiper.swiperViewport;\r\n      let slidesScreen = 1;\r\n      const isDesktop = window.matchMedia('(min-width: 768px)');\r\n      function desktopAndMobile() {\r\n        if (!isDesktop.matches) {\r\n          slidesScreen = 1;\r\n          currentIndex = 0;\r\n          console.log(\"телефон или планшет\");\r\n        } else {\r\n          slidesScreen = 3;\r\n          currentIndex = 1;\r\n          console.log(\"пк\");\r\n        }\r\n      }\r\n\r\n\r\n      let { prevIndex, nextIndex, prevGroupIndices, nextGroupIndices } =\r\n        slidesPoint(currentIndex, total);\r\n      updateSlides(\r\n        prevIndex,\r\n        nextIndex,\r\n        currentIndex,\r\n        prevGroupIndices,\r\n        nextGroupIndices,\r\n        slidesIndex,\r\n        swiperViewport,\r\n        slidesScreen\r\n      );\r\n\r\n      swiper.nextBtn.addEventListener(\"click\", toGoNext);\r\n      swiper.prevBtn.addEventListener(\"click\", toGoPrev);\r\n\r\n      function toGoNext() {\r\n        currentIndex = (currentIndex + 1) % total;\r\n        let { prevIndex, nextIndex, prevGroupIndices, nextGroupIndices } =\r\n          slidesPoint(currentIndex, total);\r\n        updateSlides(\r\n          prevIndex,\r\n          nextIndex,\r\n          currentIndex,\r\n          prevGroupIndices,\r\n          nextGroupIndices,\r\n          slidesIndex,\r\n          swiperViewport,\r\n          slidesScreen\r\n        );\r\n      }\r\n\r\n      function toGoPrev() {\r\n        currentIndex = (currentIndex - 1 + total) % total;\r\n        let { prevIndex, nextIndex, prevGroupIndices, nextGroupIndices } =\r\n          slidesPoint(currentIndex, total);\r\n        updateSlides(\r\n          prevIndex,\r\n          nextIndex,\r\n          currentIndex,\r\n          prevGroupIndices,\r\n          nextGroupIndices,\r\n          slidesIndex,\r\n          swiperViewport,\r\n          slidesScreen\r\n        );\r\n      }\r\n\r\n      function handleSwiper(diff) {\r\n        if (diff > 50) {\r\n          toGoNext();\r\n        } else if (diff < -50) {\r\n          toGoPrev();\r\n        }\r\n      }\r\n\r\n      let startX = 0;\r\n      let endX = 0;\r\n\r\n      swiperViewport.addEventListener(\"touchstart\", function (event) {\r\n        startX = event.touches[0].clientX;\r\n      });\r\n\r\n      swiperViewport.addEventListener(\"touchend\", function (event) {\r\n        if (event.changedTouches.length === 0) return;\r\n\r\n        endX = event.changedTouches[0].clientX;\r\n\r\n        const diff = startX - endX;\r\n\r\n        handleSwiper(diff);\r\n\r\n        console.log(\"Сдвиг свайпа на:\", diff);\r\n      });\r\n\r\n      swiperViewport.addEventListener(\"mousedown\", (event) => {\r\n        startX = event.clientX;\r\n      });\r\n\r\n      swiperViewport.addEventListener(\"mouseup\", (event) => {\r\n        endX = event.clientX;\r\n\r\n        const diff = startX - endX;\r\n        console.log(\"Сдвиг свайпа на:\", diff);\r\n\r\n        handleSwiper(diff);\r\n      });\r\n      \r\n      window.addEventListener(\"load\", () => {\r\n        desktopAndMobile();\r\n        let { prevIndex, nextIndex, prevGroupIndices, nextGroupIndices } =\r\n          slidesPoint(currentIndex, total);\r\n        updateSlides(\r\n          prevIndex,\r\n          nextIndex,\r\n          currentIndex,\r\n          prevGroupIndices,\r\n          nextGroupIndices,\r\n          slidesIndex,\r\n          swiperViewport,\r\n          slidesScreen\r\n        );\r\n      });\r\n      window.addEventListener(\"resize\", () => {\r\n        desktopAndMobile();\r\n        let { prevIndex, nextIndex, prevGroupIndices, nextGroupIndices } =\r\n          slidesPoint(currentIndex, total);\r\n        updateSlides(\r\n          prevIndex,\r\n          nextIndex,\r\n          currentIndex,\r\n          prevGroupIndices,\r\n          nextGroupIndices,\r\n          slidesIndex,\r\n          swiperViewport,\r\n          slidesScreen\r\n        );\r\n      });\r\n    });\r\n\r\n    function slidesPoint(currentIndex, total) {\r\n      const prevIndex = (currentIndex - 1 + total) % total;\r\n      const nextIndex = (currentIndex + 1) % total;\r\n      const midIndex = Math.floor(total / 2);\r\n\r\n      let count = 1;\r\n      let prevGroupIndices = [];\r\n      let nextGroupIndices = [];\r\n\r\n      while (count < midIndex) {\r\n        const prevGroupIndex = (prevIndex - count + total) % total;\r\n        const nextGroupIndex = (nextIndex + count) % total;\r\n\r\n        prevGroupIndices.push(prevGroupIndex);\r\n        nextGroupIndices.push(nextGroupIndex);\r\n\r\n        count++;\r\n      }\r\n\r\n      return {\r\n        prevIndex,\r\n        nextIndex,\r\n        prevGroupIndices,\r\n        nextGroupIndices,\r\n      };\r\n    }\r\n\r\n    function updateSlides(\r\n      prevIndex,\r\n      nextIndex,\r\n      currentIndex,\r\n      prevGroupIndices,\r\n      nextGroupIndices,\r\n      slidesIndex,\r\n      swiperViewport,\r\n      slidesScreen\r\n    ) {\r\n      slidesIndex.forEach((slide) => {\r\n        slide.classList.remove(\r\n          \"minClass-swiper__slide--prev\",\r\n          \"minClass-swiper__slide--active\",\r\n          \"minClass-swiper__slide--next\"\r\n        );\r\n      });\r\n\r\n      const swiperViewportRect = swiperViewport.getBoundingClientRect();\r\n      const positionSlidesThree = swiperViewportRect.width / 3;\r\n\r\n      if (slidesScreen === 3) {\r\n        slidesIndex[prevIndex].classList.add(\"minClass-swiper__slide--prev\");\r\n        slidesIndex[prevIndex].style.transform = `translateX(${-positionSlidesThree}px) scale(0.8)`;\r\n        slidesIndex[currentIndex].classList.add(\"minClass-swiper__slide--active\");\r\n        slidesIndex[currentIndex].style.transform = `translateX(0) scale(0.9)`;\r\n        slidesIndex[nextIndex].classList.add(\"minClass-swiper__slide--next\");\r\n        slidesIndex[nextIndex].style.transform = `translateX(${positionSlidesThree}px) scale(0.8)`;\r\n      } else if (slidesScreen === 1) {\r\n        slidesIndex[prevIndex].classList.add(\"minClass-swiper__slide--prev\");\r\n        slidesIndex[prevIndex].style.transform = `translate3d(-100%, 0, 2px) rotate(-5deg) scale(0.7)`;\r\n        slidesIndex[currentIndex].classList.add(\"minClass-swiper__slide--active\");\r\n        slidesIndex[currentIndex].style.transform = `translate3d(0, 0, 3px) rotate(0deg) scale(0.9)`;\r\n        slidesIndex[nextIndex].classList.add(\"minClass-swiper__slide--next\");\r\n        slidesIndex[nextIndex].style.transform = `translate3d(100%, 0, 2px) rotate(5deg) scale(0.7)`;\r\n      }\r\n      prevGroupIndices.forEach((index) => {\r\n        slidesIndex[index].style.transform = \"translateX(-200%) scale(0)\";\r\n      });\r\n      nextGroupIndices.forEach((index) => {\r\n        slidesIndex[index].style.transform = \"translateX(200%) scale(0)\";\r\n      });\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://web-project/./src/js/modules/swiper.js?");

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
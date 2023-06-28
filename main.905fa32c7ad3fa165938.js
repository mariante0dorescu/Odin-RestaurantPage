/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/header_plate_top.jpg */ "./src/assets/header_plate_top.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/header_plate.jpg */ "./src/assets/header_plate.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/line.svg */ "./src/assets/line.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@200;300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Italianno&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #111111;
  --accent-color: #9b7f69;
  --text-color: #fff;
  --color-grey-light: #dee2e5;
  --color-grey-dark: #777;
  --shadow-dark: 0 2rem 6rem rgba(black, 0.3);
  --shadow-light: 0 2rem 5rem rgba(0,0,0, 0.06);
  --line: 1px solid var(--color-grey-light);
}

body {
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 300;
  line-height: 1.6;
  min-height: 100vh;
}

.btn {
  cursor: pointer;
  font-family: inherit;
  padding: 2rem 3rem;
  background: none;
  outline: none;
  color: var(--text-color);
  border: 1px solid var(--text-color);
  outline: none;
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
}

.btn:hover,
.btn:active {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.2);
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

.container {
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  transition: all 3ms ease-in-out;
}
@media only screen and (max-width: 75em) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.header {
  position: relative;
  background-color: var(--primary-color);
  background-repeat: no-repeat;
  color: var(--text-color);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: top;
}
.header__title {
  margin-bottom: max(2rem, 3vh);
}
.header__title--name {
  font-size: 5rem;
  font-weight: 700;
}
@media only screen and (max-width: 75em) {
  .header__title {
    margin-bottom: 10rem;
  }
}
@media only screen and (max-width: 37.5em) {
  .header__title {
    margin-bottom: max(2rem, 3vh);
  }
}
.header__tagline {
  margin-bottom: max(2rem, 3vh);
}
.header__tagline--text {
  font-weight: 200;
  font-size: 5rem;
  line-height: 1;
}
.header__info {
  margin-bottom: max(2rem, 3vh);
}
.header__info--text {
  font-size: 1.5rem;
}
@media only screen and (max-width: 37.5em) {
  .header {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    background-position: top;
    padding: 20rem 0 5rem 0;
  }
}
@media only screen and (max-width: 75em) {
  .header {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: contain;
    background-position: top right;
    text-align: left;
    padding: 3rem 60vh 15rem 0;
  }
}
@media only screen and (min-width: 75em) {
  .header {
    padding: 20rem 0;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  }
}

.header__navbar {
  position: absolute;
  top: 5rem;
  right: 5rem;
}
.header__navbar ul {
  display: flex;
  gap: 2rem;
}
.header__navbar li {
  font-size: 1.6rem;
  line-height: 2;
}
.header__navbar li:hover {
  border-bottom: 2px solid var(--accent-color);
}
.header__navbar .navbar__btn {
  font-family: inherit;
  color: var(--text-color);
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  padding: 1rem 2rem;
}
.header__navbar .active {
  border-bottom: 2px solid var(--text-color);
}

.main {
  position: relative;
  min-height: 50vh;
}

.section__top {
  transform: translateY(-7vh);
}
.section__top::after {
  position: absolute;
  top: 30%;
  left: 0;
  content: "";
  width: 80%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0 50px 0 0;
  z-index: -100;
}

.section__bottom {
  transform: translateY(7vh);
}
.section__bottom::after {
  position: absolute;
  top: 30%;
  right: 0;
  content: "";
  width: 80%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50px 0 0 0;
  z-index: -100;
}

.section__top,
.section__bottom {
  max-height: 60rem;
  display: flex;
  align-items: center;
  gap: 10rem;
}
.section__top .test,
.section__bottom .test {
  display: inline-block;
  width: 100px;
  height: 30px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-repeat: no-repeat;
  margin-bottom: 2rem;
}
.section__top--text,
.section__bottom--text {
  flex: 0 1 50%;
}
.section__top--text h1,
.section__bottom--text h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 2rem;
}
.section__top--text p,
.section__bottom--text p {
  font-size: 1.6rem;
  font-weight: 400;
}
.section__top--image > img,
.section__bottom--image > img {
  height: 60rem;
  width: 60rem;
  object-fit: cover;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
}

.container > .section__title {
  text-align: center;
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
  font-family: "Italianno", cursive;
  font-size: 8rem;
  padding: 3rem 0;
}
.container .section__subtitle {
  text-align: center;
  width: 100%;
  text-align: center;
  font-family: "Italianno", cursive;
  font-size: 5rem;
  padding: 1rem 1rem;
}
.container .section__hours {
  text-align: center;
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
  font-family: "Italianno", cursive;
  font-size: 3.25rem;
  padding: 1rem 1rem;
}
.container .section__map {
  margin-bottom: 5rem;
}

.food__section {
  text-align: center;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}
.food__section--title {
  flex: 0 1 100%;
  font-family: "Italianno", cursive;
  font-size: 6rem;
}
.food__section--card {
  flex: 0 1 30%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.food__section--card > * {
  margin-bottom: 2rem;
}
.food__section--card .food-image {
  height: 150px;
  min-height: 30%;
  width: 100%;
  border: 1px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-size: contain;
  overflow: hidden;
}
.food__section--card .food-image > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.food__section--card .food-name {
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.1;
}
.food__section--card .food-description {
  font-size: 1.6rem;
}
.food__section--card .food-price {
  position: relative;
  font-style: italic;
  font-size: 1.2rem;
  font-weight: 400;
}
.food__section--card .food-price::before {
  content: "";
  position: absolute;
  top: -10px;
  width: 50px;
  height: 1px;
  background-color: var(--color-grey-light);
}

.contact__section {
  width: 600px;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.contact__section--form {
  display: flex;
  flex-direction: column;
}
.contact__section--form > input, .contact__section--form > textarea {
  font-family: inherit;
  padding: 1rem;
  outline: none;
  border: 1px solid var(--color-grey-light);
  margin-bottom: 3rem;
}
.contact__section .submitBtn {
  align-self: center;
  cursor: pointer;
  font-family: inherit;
  padding: 2rem 3rem;
  outline: none;
  background: var(--accent-color);
  color: var(--text-color);
  border: 1px solid var(--text-color);
  outline: none;
  font-size: 1.2rem;
  font-weight: 300;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  margin-bottom: 3rem;
}
.contact__section .submitBtn:hover,
.contact__section .submitBtn:active {
  transform: translateY(-5px);
  background: var(--primary-color);
}

.footer {
  background: var(--primary-color);
  color: var(--text-color);
  font-size: 1.2rem;
  text-align: center;
  padding: 10rem 5rem 5rem 5rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/_colors.scss","webpack://./src/styles/main.scss","webpack://./src/styles/_base.scss","webpack://./src/styles/_reset.scss","webpack://./src/styles/_layout.scss","webpack://./src/styles/_abstracts.scss"],"names":[],"mappings":"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","sourcesContent":["// @forward \"colors\";\n// colors\n:root{\n    --primary-color: #111111;\n    --accent-color: #9b7f69;\n    --text-color: #fff;\n    --color-grey-light: #dee2e5;\n    --color-grey-dark: #777;\n    \n\n    --shadow-dark:  0 2rem 6rem rgba(black, 0.3);\n    --shadow-light: 0 2rem 5rem rgba(0,0,0, 0.06);\n    --line: 1px solid var(--color-grey-light);\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@200;300;400;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Italianno&display=swap\");\n:root {\n  --primary-color: #111111;\n  --accent-color: #9b7f69;\n  --text-color: #fff;\n  --color-grey-light: #dee2e5;\n  --color-grey-dark: #777;\n  --shadow-dark: 0 2rem 6rem rgba(black, 0.3);\n  --shadow-light: 0 2rem 5rem rgba(0,0,0, 0.06);\n  --line: 1px solid var(--color-grey-light);\n}\n\nbody {\n  font-family: \"Kumbh Sans\", sans-serif;\n  font-weight: 300;\n  line-height: 1.6;\n  min-height: 100vh;\n}\n\n.btn {\n  cursor: pointer;\n  font-family: inherit;\n  padding: 2rem 3rem;\n  background: none;\n  outline: none;\n  color: var(--text-color);\n  border: 1px solid var(--text-color);\n  outline: none;\n  font-size: 1.2rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  transition: all 0.3s ease-in-out;\n}\n\n.btn:hover,\n.btn:active {\n  transform: translateY(-5px);\n  background: rgba(255, 255, 255, 0.2);\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n.container {\n  width: 80%;\n  max-width: 1000px;\n  margin: 0 auto;\n  transition: all 3ms ease-in-out;\n}\n@media only screen and (max-width: 75em) {\n  .container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n}\n\n.header {\n  position: relative;\n  background-color: var(--primary-color);\n  background-repeat: no-repeat;\n  color: var(--text-color);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  background-image: url(../assets/header_plate_top.jpg);\n  background-size: cover;\n  background-position: top;\n}\n.header__title {\n  margin-bottom: max(2rem, 3vh);\n}\n.header__title--name {\n  font-size: 5rem;\n  font-weight: 700;\n}\n@media only screen and (max-width: 75em) {\n  .header__title {\n    margin-bottom: 10rem;\n  }\n}\n@media only screen and (max-width: 37.5em) {\n  .header__title {\n    margin-bottom: max(2rem, 3vh);\n  }\n}\n.header__tagline {\n  margin-bottom: max(2rem, 3vh);\n}\n.header__tagline--text {\n  font-weight: 200;\n  font-size: 5rem;\n  line-height: 1;\n}\n.header__info {\n  margin-bottom: max(2rem, 3vh);\n}\n.header__info--text {\n  font-size: 1.5rem;\n}\n@media only screen and (max-width: 37.5em) {\n  .header {\n    background-image: url(../assets/header_plate_top.jpg);\n    background-size: cover;\n    background-position: top;\n    padding: 20rem 0 5rem 0;\n  }\n}\n@media only screen and (max-width: 75em) {\n  .header {\n    background-image: url(../assets/header_plate.jpg);\n    background-size: contain;\n    background-position: top right;\n    text-align: left;\n    padding: 3rem 60vh 15rem 0;\n  }\n}\n@media only screen and (min-width: 75em) {\n  .header {\n    padding: 20rem 0;\n    background-image: url(../assets/header_plate.jpg);\n  }\n}\n\n.header__navbar {\n  position: absolute;\n  top: 5rem;\n  right: 5rem;\n}\n.header__navbar ul {\n  display: flex;\n  gap: 2rem;\n}\n.header__navbar li {\n  font-size: 1.6rem;\n  line-height: 2;\n}\n.header__navbar li:hover {\n  border-bottom: 2px solid var(--accent-color);\n}\n.header__navbar .navbar__btn {\n  font-family: inherit;\n  color: var(--text-color);\n  font-weight: 700;\n  text-transform: uppercase;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background: none;\n  padding: 1rem 2rem;\n}\n.header__navbar .active {\n  border-bottom: 2px solid var(--text-color);\n}\n\n.main {\n  position: relative;\n  min-height: 50vh;\n}\n\n.section__top {\n  transform: translateY(-7vh);\n}\n.section__top::after {\n  position: absolute;\n  top: 30%;\n  left: 0;\n  content: \"\";\n  width: 80%;\n  height: 50%;\n  background-color: rgba(0, 0, 0, 0.05);\n  border-radius: 0 50px 0 0;\n  z-index: -100;\n}\n\n.section__bottom {\n  transform: translateY(7vh);\n}\n.section__bottom::after {\n  position: absolute;\n  top: 30%;\n  right: 0;\n  content: \"\";\n  width: 80%;\n  height: 50%;\n  background-color: rgba(0, 0, 0, 0.05);\n  border-radius: 50px 0 0 0;\n  z-index: -100;\n}\n\n.section__top,\n.section__bottom {\n  max-height: 60rem;\n  display: flex;\n  align-items: center;\n  gap: 10rem;\n}\n.section__top .test,\n.section__bottom .test {\n  display: inline-block;\n  width: 100px;\n  height: 30px;\n  background-image: url(../assets/line.svg);\n  background-repeat: no-repeat;\n  margin-bottom: 2rem;\n}\n.section__top--text,\n.section__bottom--text {\n  flex: 0 1 50%;\n}\n.section__top--text h1,\n.section__bottom--text h1 {\n  font-size: 4rem;\n  font-weight: 700;\n  line-height: 1.2;\n  margin-bottom: 2rem;\n}\n.section__top--text p,\n.section__bottom--text p {\n  font-size: 1.6rem;\n  font-weight: 400;\n}\n.section__top--image > img,\n.section__bottom--image > img {\n  height: 60rem;\n  width: 60rem;\n  object-fit: cover;\n  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);\n}\n\n.container > .section__title {\n  text-align: center;\n  width: 100%;\n  text-align: center;\n  margin-bottom: 3rem;\n  font-family: \"Italianno\", cursive;\n  font-size: 8rem;\n  padding: 3rem 0;\n}\n.container .section__subtitle {\n  text-align: center;\n  width: 100%;\n  text-align: center;\n  font-family: \"Italianno\", cursive;\n  font-size: 5rem;\n  padding: 1rem 1rem;\n}\n.container .section__hours {\n  text-align: center;\n  width: 100%;\n  text-align: center;\n  margin-bottom: 3rem;\n  font-family: \"Italianno\", cursive;\n  font-size: 3.25rem;\n  padding: 1rem 1rem;\n}\n.container .section__map {\n  margin-bottom: 5rem;\n}\n\n.food__section {\n  text-align: center;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3rem;\n}\n.food__section--title {\n  flex: 0 1 100%;\n  font-family: \"Italianno\", cursive;\n  font-size: 6rem;\n}\n.food__section--card {\n  flex: 0 1 30%;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.food__section--card > * {\n  margin-bottom: 2rem;\n}\n.food__section--card .food-image {\n  height: 150px;\n  min-height: 30%;\n  width: 100%;\n  border: 1px solid white;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  background-size: contain;\n  overflow: hidden;\n}\n.food__section--card .food-image > img {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.food__section--card .food-name {\n  font-size: 2rem;\n  font-weight: 400;\n  line-height: 1.1;\n}\n.food__section--card .food-description {\n  font-size: 1.6rem;\n}\n.food__section--card .food-price {\n  position: relative;\n  font-style: italic;\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n.food__section--card .food-price::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  width: 50px;\n  height: 1px;\n  background-color: var(--color-grey-light);\n}\n\n.contact__section {\n  width: 600px;\n  max-width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n.contact__section--form {\n  display: flex;\n  flex-direction: column;\n}\n.contact__section--form > input, .contact__section--form > textarea {\n  font-family: inherit;\n  padding: 1rem;\n  outline: none;\n  border: 1px solid var(--color-grey-light);\n  margin-bottom: 3rem;\n}\n.contact__section .submitBtn {\n  align-self: center;\n  cursor: pointer;\n  font-family: inherit;\n  padding: 2rem 3rem;\n  outline: none;\n  background: var(--accent-color);\n  color: var(--text-color);\n  border: 1px solid var(--text-color);\n  outline: none;\n  font-size: 1.2rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  transition: all 0.3s ease-in-out;\n  margin-bottom: 3rem;\n}\n.contact__section .submitBtn:hover,\n.contact__section .submitBtn:active {\n  transform: translateY(-5px);\n  background: var(--primary-color);\n}\n\n.footer {\n  background: var(--primary-color);\n  color: var(--text-color);\n  font-size: 1.2rem;\n  text-align: center;\n  padding: 10rem 5rem 5rem 5rem;\n}","@use \"colors\" as *;\n@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@200;300;400;700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');\n\nbody{\n    //font-family: 'Playfair Display', serif;\n    font-family: 'Kumbh Sans', sans-serif;\n    font-weight: 300;\n    //font-size: 1.2rem;\n    line-height: 1.6;\n    min-height: 100vh;\n}\n\n.btn{\n    cursor: pointer;\n    font-family: inherit;\n    padding: 2rem 3rem;\n    background: none;\n    outline: none;\n    color: var(--text-color);\n    border: 1px solid var(--text-color);\n    outline: none;\n    font-size: 1.2rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    transition: all .3s ease-in-out;\n}\n\n.btn:hover,\n.btn:active{\n    transform: translateY(-5px);\n    background: rgba(#fff, 0.2);\n}\n\n$bp-large: 75rem; // 1200px\n$bp-medium: 56.25rem; // 1100px\n$bp-small: 37.5em; // 600px\n","// @forward \"reset\";\n@use \"_base\" as *;\n\n\nhtml {\n    box-sizing: border-box;\n    font-size: 62.5%; // 1rem = 10px\n\n    // @media only screen and (max-width: $bp-large){\n    //   font-size: 57.5%;\n    // }\n  }\n  \n\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  \n  body, h1, h2, h3, h4, h5, h6, p, ol, ul {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n  }\n  \n  ol, ul {\n    list-style: none;\n  }\n  \n  img {\n    max-width: 100%;\n    height: auto;\n  }\n ","@use \"_colors\" as *;\n@use \"_abstracts\" as *;\n\n.container{\n  width: 80%;\n  max-width: 1000px;\n  margin: 0 auto;\n  transition: all 3ms ease-in-out;\n\n  @include respond(tab-land) {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n}\n\n.header{\n  position: relative;\n  background-color: var(--primary-color);\n  background-repeat: no-repeat;  \n  color: var(--text-color);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  background-image: url(../assets/header_plate_top.jpg) ;\n  background-size: cover;\n  background-position: top;\n  \n\n\n  &__title{\n    margin-bottom: max(2rem, 3vh);\n    \n    &--name{\n      font-size: 5rem;\n      font-weight: 700;\n    }\n\n    @include respond(tab-land) {\n      margin-bottom: 10rem;\n    }\n    @include respond(phone){\n      margin-bottom: max(2rem, 3vh);\n    }\n  }\n\n  &__tagline{\n    margin-bottom: max(2rem, 3vh);\n    &--text{\n      font-weight: 200;\n      font-size: 5rem;\n      line-height: 1;\n    }\n  }\n\n  &__info{\n    margin-bottom: max(2rem, 3vh);\n    &--text{\n      font-size: 1.5rem;\n    }\n  }\n  @include respond(phone){\n    background-image: url(../assets/header_plate_top.jpg) ;\n    background-size: cover;\n    background-position: top;\n    padding: $padding-header-mobile;\n  }\n\n  @include respond(tab-land) {\n    background-image: url(../assets/header_plate.jpg) ;\n    background-size: contain;\n    background-position: top right;\n    text-align: left;\n    padding: $padding-header-tablet;\n    \n  }\n\n \n\n  @include respond(big-desktop){\n    padding: 20rem 0;\n    background-image: url(../assets/header_plate.jpg) ;\n  }\n}\n\n.header__navbar{\n  // width: 50vw;\n  position: absolute;\n  top: 5rem;\n  right: 5rem;\n  ul{\n    display: flex;\n    gap: 2rem;\n  }\n  li{\n    font-size: 1.6rem;\n    line-height: 2;\n  }\n  li:hover{\n    border-bottom: 2px solid var(--accent-color);\n  }\n\n  .navbar__btn{\n    font-family: inherit;\n    color: var(--text-color);\n    font-weight: 700;\n    text-transform: uppercase;\n    cursor: pointer;\n    border: none;\n    outline: none;\n    background: none;\n    padding: 1rem 2rem;\n  }\n\n  .active{\n    border-bottom: 2px solid var(--text-color);\n  }  \n}\n\n\n.main{\n  position: relative;\n  min-height: 50vh;\n}\n\n\n.section__top {\n  transform: translateY(-7vh);\n\n  &::after{\n    position: absolute;\n    top: 30%;\n    left: 0;\n    content: \"\";\n    width: 80%;\n    height: 50%;\n    background-color: rgba(0,0,0,0.05);\n    border-radius: 0 50px 0 0;\n    z-index: -100;\n  }\n}\n\n.section__bottom {\n  transform: translateY(7vh);\n\n  &::after{\n    position: absolute;\n    top: 30%;\n    right: 0;\n    content: \"\";\n    width: 80%;\n    height: 50%;\n    background-color: rgba(0,0,0,0.05);\n    border-radius: 50px 0 0 0;\n    z-index: -100;\n  }\n}\n\n.section__top,\n.section__bottom {\n\n  max-height: 60rem;\n  display: flex;\n  align-items: center;\n  gap: 10rem;\n\n  & .test{\n    display: inline-block;\n    width: 100px;\n    height: 30px;\n    background-image: url(../assets/line.svg);\n    background-repeat: no-repeat;\n    margin-bottom: 2rem;\n  }\n  \n  &--text{\n    \n    flex: 0 1 50%;\n\n    h1 {\n      font-size: 4rem;\n      font-weight: 700;\n      line-height: 1.2;\n      margin-bottom: 2rem;\n    }\n\n    p {\n      font-size: 1.6rem;\n      font-weight: 400;\n    }\n  }\n\n  &--image > img{\n    height: 60rem;\n    width: 60rem;\n    object-fit: cover;\n    box-shadow: 20px 20px 50px rgba(0,0,0,0.2);\n  }\n}\n\n.container{\n  \n  \n  & > .section__title{\n    text-align: center;\n    width: 100%;\n    text-align: center;\n    margin-bottom: 3rem;\n    font-family: 'Italianno', cursive;\n    font-size: 8rem;\n    padding: 3rem 0;\n  }\n\n  &  .section__subtitle{\n    text-align: center;\n    width: 100%;\n    text-align: center;\n    font-family: 'Italianno', cursive;\n    font-size: 5rem;\n    padding: 1rem 1rem;\n  }\n\n  & .section__hours{\n    text-align: center;\n    width: 100%;\n    text-align: center;\n    margin-bottom: 3rem;\n    font-family: 'Italianno', cursive;\n    font-size: 3.25rem;\n    padding: 1rem 1rem;\n  }\n\n  & .section__map{\n    margin-bottom: 5rem;\n  }\n}\n\n.food__section{\n  text-align: center;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3rem;\n\n  &--title{\n    flex: 0 1 100%;\n    font-family: 'Italianno', cursive;\n    font-size: 6rem;\n  }\n\n  &--card{\n    flex: 0 1 30%;\n    //height: 250px;\n    // box-shadow: 0 0 10px rgba(0,0,0,0.2);\n    // border-radius: 10px;\n    padding: 2rem;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n\n    & > * {\n      margin-bottom: 2rem;\n    }\n\n\n\n    .food-image {\n      height:150px;\n      min-height: 30%;\n      width: 100%;\n      border: 1px solid white;\n      box-shadow: 0 0 10px rgba(0,0,0,0.2);\n      background-size: contain;\n      overflow: hidden;\n\n\n      & > img{\n        height:100%;\n        width:100%;\n        object-fit: cover;\n\n      }\n      \n    }\n\n    .food-name{\n      font-size: 2rem;\n      font-weight: 400;\n      line-height: 1.1;\n    }\n\n    .food-description{\n      font-size: 1.6rem;\n    }\n\n    .food-price{\n      position: relative;\n      font-style: italic;\n      font-size: 1.2rem;\n      font-weight: 400;\n\n      &::before{\n        content: \"\";\n        position: absolute;\n        top: -10px;\n        width: 50px;\n        height: 1px;\n        background-color:var(--color-grey-light);\n      }\n    }\n  }\n}\n\n.contact__section{\n  width: 600px;\n  max-width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n\n  &--form{\n    display: flex;\n    flex-direction: column;\n\n  & > input,\n  & > textarea{\n    font-family: inherit;\n    padding: 1rem;\n    outline: none;\n    border: 1px solid var(--color-grey-light);\n    margin-bottom: 3rem;\n    }\n  }\n\n  .submitBtn{\n    align-self: center;\n    cursor: pointer;\n    font-family: inherit;\n    padding: 2rem 3rem;\n    outline: none;\n    background: var(--accent-color);\n    color: var(--text-color);\n    border: 1px solid var(--text-color);\n    outline: none;\n    font-size: 1.2rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    transition: all .3s ease-in-out;\n    margin-bottom: 3rem;\n  }\n\n  .submitBtn:hover,\n  .submitBtn:active{\n    transform: translateY(-5px);\n    background: var(--primary-color);\n}\n}\n\n.footer{\n  background: var(--primary-color);\n  color: var(--text-color);\n  font-size: 1.2rem;\n  text-align: center;\n  padding: 10rem 5rem 5rem 5rem;\n}\n\n","$padding-header-mobile: 20rem 0 5rem 0;\n$padding-header-tablet: 3rem 60vh 15rem 0;\n\n\n@mixin respond($breakpoint) {\n  @if $breakpoint == phone {\n      @media only screen and (max-width: 37.5em) { @content };    //600px\n  }\n  @if $breakpoint == tab-port {\n      @media only screen and (max-width: 56.25em) { @content };     //900px\n  }\n  @if $breakpoint == tab-land {\n      @media only screen and (max-width: 75em){ @content };    //1200px\n  }\n  @if $breakpoint == big-desktop {\n      @media only screen and (min-width: 75em) { @content };    //1800\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ }),

/***/ "./src/aboutUs.js":
/*!************************!*\
  !*** ./src/aboutUs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutUs)
/* harmony export */ });
/* harmony import */ var _assets_farm_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/farm.jpg */ "./src/assets/farm.jpg");
/* harmony import */ var _assets_food_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/food.jpg */ "./src/assets/food.jpg");



function aboutUs () {

  const main = document.querySelector('.main').querySelector('.container');
  main.innerHTML = "";


  const sectionTop = document.createElement('section');
  sectionTop.classList.add('section__top');

  const sectionBottom = document.createElement('section');
  sectionBottom.classList.add('section__bottom');


  sectionTop.appendChild(createSectionImg('section__top--image', _assets_farm_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Our Farm'));  
  sectionTop.appendChild(createSectionText('section__top', 'Enjoyable place for all the family', 'Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.'));
  
  sectionBottom.appendChild(createSectionText('section__top', 'The most locally sourced food', 'All our ingredients come directly from our farm or local fishery. So you can be sure that you\'re eating the freshest, most suitable food '));
  sectionBottom.appendChild(createSectionImg('section__bottom--image', _assets_food_jpg__WEBPACK_IMPORTED_MODULE_1__, 'One of our best dishes'));  


  main.appendChild(sectionTop);
  main.appendChild(sectionBottom);

  return main
}


function createSectionImg(style, img, alt){
  const imageContainer = document.createElement('div');
  imageContainer.classList.add(style);
  const sectionImg =  new Image();
  sectionImg.src = img;
  sectionImg.alt = alt;
  imageContainer.appendChild(sectionImg);
  return imageContainer;
}

function createSectionText(style, title, text){
  const textContainer = document.createElement('div')
  textContainer.classList.add(`${style}--text`);

  const graphic = document.createElement('span')
  graphic.classList.add('test');

  const headerText = document.createElement('h1');
  headerText.classList.add('section__title');
  headerText.innerText = title;

  const headerPara = document.createElement('p');
  headerPara.classList.add('section-text');
  headerPara.innerText = text;

  textContainer.appendChild(graphic);
  textContainer.appendChild(headerText);
  textContainer.appendChild(headerPara);

  return textContainer
}

/***/ }),

/***/ "./src/contactForm.js":
/*!****************************!*\
  !*** ./src/contactForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactForm)
/* harmony export */ });
function contactForm () {

  const main = document.querySelector('.main').querySelector('.container');
  main.innerHTML = "";

  // section title
  const sectionTitle = document.createElement('h1');
  sectionTitle.classList.add('section__title')
  sectionTitle.innerText = 'Contact us';


  // contact form
  const formContainer = document.createElement('div');
  formContainer.classList.add('contact__section')

  const form = document.createElement('form');
  form.classList.add("contact__section--form");
  form.id = "contactForm";
  form.method = "";
  form.action = "#";

  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.name = 'name'
  inputName.placeholder = "Your Name"
  inputName.required = true;


  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.name = 'email'
  inputEmail.placeholder = "Your email"
  inputEmail.required = true;

  const inputMessage = document.createElement('textarea');
  inputMessage.name = 'message'
  inputMessage.placeholder = "Your message"
  inputMessage.required = true;

  const inputBtn = document.createElement('button');
  inputBtn.type = 'submit';
  inputBtn.classList.add('submitBtn');
  inputBtn.innerText = "Send";

  form.appendChild(createSectionTitle('Send us a message', "section__subtitle"))
  form.appendChild(inputName)
  form.appendChild(inputEmail)
  form.appendChild(inputMessage)
  form.appendChild(inputBtn)

    // business hours
    const isOpenContainer = document.createElement('div');
    isOpenContainer.classList.add('section__hours')
    isOpenContainer.innerText = hours();


  // map
  const mapContainer = document.createElement('div');
  mapContainer.classList.add('section__map')
  mapContainer.appendChild(createSectionTitle('Visit us:', "section__subtitle"))
  mapContainer.appendChild(isOpenContainer);
  mapContainer.innerHTML += `
   <div style="overflow:hidden;width="90%" max-width: 600px;position: relative;"><iframe width="600" height="400" src="https://maps.google.com/maps?hl=en&amp;q=palatul parlamentului+(Location)&amp;ie=UTF8&amp;t=k&amp;z=13&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;"><div style="overflow: auto; position: absolute; height: 0pt; width: 0pt;">Powered by <a href="https://www.embedista.com/googlemapsembed">Google Map Embed</a> Code Generator</div><script type="text/javascript" src="https://www.embedista.com/j/map.js"></script></div><style>.nvs{position:relative;text-align:right;height:325px;width:643px;} #gmap_canvas img{max-width:none!important;background:none!important}</style></div>`



  formContainer.appendChild(form);  
  formContainer.appendChild(mapContainer);

  main.appendChild(sectionTitle)
  main.appendChild(formContainer)
  
  return main

}

function createSectionTitle(title, style) {
  const section = document.createElement('h2');
  section.classList.add(`${style}`)
  section.innerText = title;
  return section;
}


function hours(){
    let openTime  = ["","12:00","12:00","12:00","12:00","12:00","12:00"];
    let closeTime = ["","21:30","21:30","21:30","23:30","23:30","21:30"];
    // script does not cater for Sunday opening

  let today = new Date;
  let day = today.getDay();

  // all in minutes from midnight:
  let now = today.getHours() * 60 + today.getMinutes();   
  let opens  = parseInt(openTime[day].substring(0,2)) * 60 + parseInt(openTime[day].substring(3,5));
  let closes = parseInt(closeTime[day].substring(0,2)) * 60 + parseInt(closeTime[day].substring(3,5));
  
  let str;

  if ( day > 0 && now < opens ) str = "Sorry, we are closed " + openTime[day];  
  else if ( day == 6 && now > closes || day == 0 ) str = "Sorry we are closed. We open Monday at " + openTime[1];  
  else if ( now > closes) str = "Sorry we are closed. We open tommorow at " + openTime[day + 1];  
  else str = "We are open until " + closeTime[day]; 

  return str;
}


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © ${new Date().getFullYear()} mariante0dorescu`;

  footer.appendChild(copyright);

  return footer;
}


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/nav.js");


function createHeader(){
  
  const header = document.createElement('div');
  header.classList.add('header');

  const container = document.createElement('div');
  container.classList.add('container');
  
  const title = document.createElement('div');
  title.classList.add('header__title');
  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("header__title--name");
  restaurantName.textContent = "dine";
  title.appendChild(restaurantName);


  const tagline = document.createElement('div');
  tagline.classList.add('header__tagline');
  const taglineText = document.createElement('h2');
  taglineText.classList.add('header__tagline--text');
  taglineText.innerText = "Exquisite dining since 1989";
  tagline.appendChild(taglineText);

  const info = document.createElement('div');
  info.classList.add("header__info");
  const infoText = document.createElement('p');
  infoText.classList.add('header__info--text');
  infoText.innerText = "Experience our seasonal menu in beutiful country surroundings. Eat the products made in the comfort of out farmhouse";
  info.appendChild(infoText);
  


  const bookBtn = document.createElement('button');
  bookBtn.classList.add('btn');
  bookBtn.innerText = "book a table";


  header.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_0__["default"])())
  container.appendChild(title);
  container.appendChild(tagline);
  container.appendChild(info);
  container.appendChild(bookBtn);
  header.appendChild(container);

  return header;
}



/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNav)
/* harmony export */ });
function createNav(){
  const navItems = ['About Us', 'Our Specialities', 'Contact'];
  const navbar = document.createElement('nav');
  navbar.classList.add('header__navbar')

  const list = document.createElement('ul');

  for( const navItem of navItems){
    let li = document.createElement('li');
    li.innerHTML = `<button class="navbar__btn" id="${navItem.split(" ").join("").toLowerCase()}">${navItem}</button>`;
    list.appendChild(li);
  }

  navbar.appendChild(list);  

  return navbar;
}

// function setActiveButton(button) {
//   const buttons = document.querySelectorAll(".navbar__btn");

//   buttons.forEach((button) => {
//     if (button !== this) {
//       button.classList.remove("active");
//     }
//   });

//   button.classList.add("active");
// }

/***/ }),

/***/ "./src/ourSpecialities.js":
/*!********************************!*\
  !*** ./src/ourSpecialities.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ourSpecialities)
/* harmony export */ });
/* harmony import */ var _assets_antipasto_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/antipasto.jpg */ "./src/assets/antipasto.jpg");
/* harmony import */ var _assets_formaggi_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/formaggi.jpg */ "./src/assets/formaggi.jpg");
/* harmony import */ var _assets_gamberoni_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/gamberoni.jpg */ "./src/assets/gamberoni.jpg");
/* harmony import */ var _assets_diavola_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/diavola.jpg */ "./src/assets/diavola.jpg");
/* harmony import */ var _assets_capriciosa_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/capriciosa.jpg */ "./src/assets/capriciosa.jpg");
/* harmony import */ var _assets_messicana_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/messicana.jpg */ "./src/assets/messicana.jpg");
/* harmony import */ var _assets_dolce_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/dolce.jpg */ "./src/assets/dolce.jpg");
/* harmony import */ var _assets_gelato_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/gelato.jpg */ "./src/assets/gelato.jpg");
/* harmony import */ var _assets_tortino_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/tortino.jpg */ "./src/assets/tortino.jpg");










const menu = {
  starters: [
    {
      name: "antipasto di mare",
      imageName: _assets_antipasto_jpg__WEBPACK_IMPORTED_MODULE_0__,
      price: 100,
      ingredients: 'shrimps, octopus, baby calamary, salad mix, bread',
      },
      {
        name: "formaggi misti",
        imageName: _assets_formaggi_jpg__WEBPACK_IMPORTED_MODULE_1__,
        price: 200,
        ingredients: 'italian chees selection',
      },
      {
        name: "gamberoni al burro e caperi",
        imageName: _assets_gamberoni_jpg__WEBPACK_IMPORTED_MODULE_2__,
        price: 150,
        ingredients: 'italian chees selection',
      },
  ],
  pizza:[
    {
      name: 'diavola',
      imageName: _assets_diavola_jpg__WEBPACK_IMPORTED_MODULE_3__,
      price: 100,
      ingredients: 'shrimps, octopus, baby calamary, salad mix, bread',
      },
      {
       name: 'capriciosa',
        imageName: _assets_capriciosa_jpg__WEBPACK_IMPORTED_MODULE_4__,
        price: 200,
        ingredients: 'italian chees selection',
      },
     {
       name: "messicana",
        imageName: _assets_messicana_jpg__WEBPACK_IMPORTED_MODULE_5__,
        price: 150,
        ingredients: 'italian chees selection',
      },
  ],
  desert:[
    {
      name: 'dolce italiano',
      imageName: _assets_dolce_jpg__WEBPACK_IMPORTED_MODULE_6__,
      price: 100,
      ingredients: 'cannoli siciliani, panna cotta al cafe',
      },
      {
       name: 'gelato fatto in casa',
        imageName: _assets_gelato_jpg__WEBPACK_IMPORTED_MODULE_7__,
        price: 200,
        ingredients: 'fresh homemade icecream selection',
      },
     {
       name: "tortino caldo al duetto di ciocolato",
        imageName: _assets_tortino_jpg__WEBPACK_IMPORTED_MODULE_8__,
        price: 150,
        ingredients: 'white and black chocolate warm cake, ice cream',
      },
  ]
}

function ourSpecialities () {

  const main = document.querySelector('.main').querySelector('.container');
  main.innerHTML = "";

  const sectionTitle = document.createElement('h1');
  sectionTitle.classList.add('section__title')
  sectionTitle.innerText = 'our specialities';

  main.appendChild(sectionTitle);

  for(const section of Object.keys(menu) ){
    const foodsection = createSections(section);
    
    for(const plate of Object.keys(menu[section])){
      const foodCard = createfoodCard(menu[section][plate]);
      foodsection.appendChild(foodCard)
    }

    main.appendChild(foodsection);
  }
  return main
}

function createSections(category) {
  const section = document.createElement('section');
  section.classList.add('food__section');
  const sectionName = document.createElement('h2');
  sectionName.classList.add('food__section--title')
  sectionName.innerText = category;
  section.appendChild(sectionName);
  return section;
}

function createfoodCard(object) {
  const card = document.createElement('div');
  card.classList.add('food__section--card');

  const foodImage = document.createElement('div');
  foodImage.classList.add('food-image');

  const foodImageSrc = new Image();  
  foodImageSrc.src = object.imageName;
  foodImage.appendChild(foodImageSrc)
  card.appendChild(foodImage);
  
  const foodName = document.createElement('h3');
  foodName.classList.add('food-name');
  foodName.innerText = object.name;
  card.appendChild(foodName);

  const foodIngredients = document.createElement('p');
  foodIngredients.classList.add("food-description");
  foodIngredients.innerText = object.ingredients;
  card.appendChild(foodIngredients);

  const foodPrice = document.createElement('h4');
  foodPrice.classList.add('food-price');
  foodPrice.innerText = object.price + " euro";
  card.appendChild(foodPrice);

  return card;
}

/***/ }),

/***/ "./src/assets/antipasto.jpg":
/*!**********************************!*\
  !*** ./src/assets/antipasto.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/26246bf4d814dc6a66e4.jpg";

/***/ }),

/***/ "./src/assets/capriciosa.jpg":
/*!***********************************!*\
  !*** ./src/assets/capriciosa.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/db5248b1de3b386e4110.jpg";

/***/ }),

/***/ "./src/assets/diavola.jpg":
/*!********************************!*\
  !*** ./src/assets/diavola.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c424983ea6d69223b86d.jpg";

/***/ }),

/***/ "./src/assets/dolce.jpg":
/*!******************************!*\
  !*** ./src/assets/dolce.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/18b7d359e52d90dfdcfa.jpg";

/***/ }),

/***/ "./src/assets/farm.jpg":
/*!*****************************!*\
  !*** ./src/assets/farm.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2bd60eef0c91dbdc0a39.jpg";

/***/ }),

/***/ "./src/assets/food.jpg":
/*!*****************************!*\
  !*** ./src/assets/food.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/b6720fab5520b162dd6e.jpg";

/***/ }),

/***/ "./src/assets/formaggi.jpg":
/*!*********************************!*\
  !*** ./src/assets/formaggi.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/9becd920357aae82de03.jpg";

/***/ }),

/***/ "./src/assets/gamberoni.jpg":
/*!**********************************!*\
  !*** ./src/assets/gamberoni.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6e4cfaf7f82e704fd284.jpg";

/***/ }),

/***/ "./src/assets/gelato.jpg":
/*!*******************************!*\
  !*** ./src/assets/gelato.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/49fe0612ca13b9a03d73.jpg";

/***/ }),

/***/ "./src/assets/header_plate.jpg":
/*!*************************************!*\
  !*** ./src/assets/header_plate.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/d0479af56fa2d9cdb751.jpg";

/***/ }),

/***/ "./src/assets/header_plate_top.jpg":
/*!*****************************************!*\
  !*** ./src/assets/header_plate_top.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3a072a6f26974f67c5b3.jpg";

/***/ }),

/***/ "./src/assets/line.svg":
/*!*****************************!*\
  !*** ./src/assets/line.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/bdd47af76ffa81cc4817.svg";

/***/ }),

/***/ "./src/assets/messicana.jpg":
/*!**********************************!*\
  !*** ./src/assets/messicana.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c424983ea6d69223b86d.jpg";

/***/ }),

/***/ "./src/assets/tortino.jpg":
/*!********************************!*\
  !*** ./src/assets/tortino.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2157649f4832c9aaddfb.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutUs */ "./src/aboutUs.js");
/* harmony import */ var _ourSpecialities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ourSpecialities */ "./src/ourSpecialities.js");
/* harmony import */ var _contactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactForm */ "./src/contactForm.js");







function website(){

  const  createMain = () => {
    const main = document.createElement("main");
    main.classList.add("main");
  
    const container = document.createElement('div');
    container.classList.add('container');
    
    main.appendChild(container);
  
    return main;
  }

  const documentBody = document.querySelector('body');
  documentBody.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])())
  documentBody.appendChild(createMain())
  documentBody.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])())

  const navBar = document.getElementsByClassName('navbar__btn');
    
  for(const button of navBar) {
    button.addEventListener('click', (e) => {
      const calledFunc = e.target.id;
      const customFunc = {
        aboutus: _aboutUs__WEBPACK_IMPORTED_MODULE_3__["default"],
        ourspecialities: _ourSpecialities__WEBPACK_IMPORTED_MODULE_4__["default"],
        contact: _contactForm__WEBPACK_IMPORTED_MODULE_5__["default"],
      }
      return customFunc[calledFunc]();    
    })
  }
  (0,_aboutUs__WEBPACK_IMPORTED_MODULE_3__["default"])()
}

website();



})();

/******/ })()
;
//# sourceMappingURL=main.905fa32c7ad3fa165938.js.map
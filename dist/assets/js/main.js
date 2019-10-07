var MainModule =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Tutorial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Tutorial */ \"./src/modules/Tutorial.js\");\n// require('./css/tutorial.css')\n// import './css/index.css'\n_modules_Tutorial__WEBPACK_IMPORTED_MODULE_0__[\"Tutorial\"].create();if(document.body.classList.contains('run-steps')){window.onresize=function(){_modules_Tutorial__WEBPACK_IMPORTED_MODULE_0__[\"Tutorial\"].updatePosition();};}document.getElementById(\"init\").addEventListener(\"click\",function(){_modules_Tutorial__WEBPACK_IMPORTED_MODULE_0__[\"Tutorial\"].init();});\n\n//# sourceURL=webpack://MainModule/./src/index.js?");

/***/ }),

/***/ "./src/modules/Tutorial.js":
/*!*********************************!*\
  !*** ./src/modules/Tutorial.js ***!
  \*********************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\nfunction _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)===\"[object Arguments]\")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}var Tutorial=function(d){var _start=function _start(){d.body.classList.add(\"run-steps\");};var _setCookie=function _setCookie(name,value,days){var d=new Date();d.setTime(d.getTime()+days*24*60*60*1000);var expires=\"expires=\"+d.toUTCString();document.cookie=name+\"=\"+value+\";\"+expires+\";path=/\";};var _getCookie=function _getCookie(name){var name=name+\"=\";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}return\"\";};var _stop=function _stop(){d.body.classList.remove(\"run-steps\");_resetLayer();};var _getActiveElement=function _getActiveElement(el){var obj=el.getBoundingClientRect(),layer={x:obj.x,y:obj.y,width:obj.width,height:obj.height};return layer;};var _getPositionTooltip=function _getPositionTooltip(el){var e=document.body,i=document.documentElement,n=window.pageYOffset||i.scrollTop||e.scrollTop,o=window.pageXOffset||i.scrollLeft||e.scrollLeft,s=el.getBoundingClientRect();var _position={top:Math.abs(s.x!=0?s.top+n+s.height:s.top+n-s.height*3),width:Math.abs(s.width),height:Math.abs(s.height),left:Math.abs(s.left+o)};console.log(_position);console.log(s);return _position;// const _el = el.getBoundingClientRect(),\n//   _position = {\n//     x: _el.left,\n//     y: _el.top + _el.height + 10\n//   };\n// return _position;\n};var _setCurrentStep=function _setCurrentStep(currentStep){document.documentElement.style.setProperty(\"--step\",\"'\".concat(currentStep,\"'\"));};var _setPositionLayer=function _setPositionLayer(el){var pos=_getActiveElement(el);var layer=d.getElementsByClassName(\"is-step-layer\");layer[0].style.top=\"\".concat(Math.abs(pos.y),\"px\");layer[0].style.left=\"\".concat(Math.abs(pos.x),\"px\");layer[0].style.width=\"\".concat(Math.abs(pos.width),\"px\");layer[0].style.height=\"\".concat(Math.abs(pos.height),\"px\");};var _resetLayer=function _resetLayer(){var layer=d.getElementsByClassName(\"is-step-layer\");layer[0].style.top=\"0\";layer[0].style.left=\"0\";layer[0].style.width=\"0\";layer[0].style.height=\"0\";};var _scrollIn=function _scrollIn(id,d,del){var TIMER_SCROLL;function scroll(id,d,del){// Scroll the element.\nid.scrollLeft+=d;// Perform a delay before recursing this function again.\nTIMER_SCROLL=setTimeout(\"scroll('\"+id+\"',\"+d+\", \"+del+\");\",del);}};var _setPositionTooltip=function _setPositionTooltip(el){var pos=_getPositionTooltip(el);var tooltip=d.getElementsByClassName(\"is-step-tooltip\")[0];tooltip.style.top=\"\".concat(pos.top,\"px\");tooltip.style.left=\"\".concat(pos.left,\"px\");tooltip.style.marginTop=\"20px\";};var _setMessageTooltip=function _setMessageTooltip(currentStep){var message=_getMessageElement(currentStep),title=_getTitleElement(currentStep);document.querySelectorAll(\"#is-step-message .title\")[0].innerHTML=title;document.querySelectorAll(\"#is-step-message .message\")[0].innerHTML=message;};var _getStepLength=function _getStepLength(){var query=d.querySelectorAll(\".is-step\");var forRemoves=_toConsumableArray(query);return forRemoves.length;};var _removeAllClass=function _removeAllClass(){var query=d.querySelectorAll(\".is-step-active\");var forRemoves=_toConsumableArray(query);forRemoves.map(function(removeIn){removeIn.classList.remove(\"is-step-active\");});};var _getElementStep=function _getElementStep(currentStep){return d.getElementById(\"step-\".concat(currentStep));};var _getMessageElement=function _getMessageElement(currentStep){return d.getElementById(\"step-\".concat(currentStep)).getAttribute(\"data-message\");};var _getTitleElement=function _getTitleElement(currentStep){return d.getElementById(\"step-\".concat(currentStep)).getAttribute(\"data-title\");};var _addClass=function _addClass(currentStep){document.getElementById(\"step-\".concat(currentStep)).classList.add(\"is-step-active\");};var _showPrevButton=function _showPrevButton(isActive){if(!isActive){d.getElementById(\"prev\").style.display=\"none\";}else{d.getElementById(\"prev\").style.display=\"inline-block\";}};var _createTooltip=function _createTooltip(currentStep){window.scroll(0,0);var el=_getElementStep(currentStep);_setMessageTooltip(currentStep);_setPositionTooltip(el);_setPositionLayer(el);_addClass(currentStep);_setCurrentStep(currentStep);};var currentStep=0;var stepLength=0;var isShowPrev=false;var _nextStep=function _nextStep(){_removeAllClass();currentStep++;if(currentStep>stepLength){window.scroll(0,0);_stop();}else{_showPrevButton(true);_createTooltip(currentStep);var moveTo=document.getElementById('step-'+currentStep).getBoundingClientRect();window.scroll(moveTo.x,moveTo.y);}};var _prevStep=function _prevStep(){_removeAllClass();console.log(currentStep-1);if(currentStep-1>0){currentStep--;_showPrevButton(currentStep-1);_createTooltip(currentStep);}};var updatePosition=function updatePosition(){var el=_getElementStep(currentStep);_setPositionTooltip(el);_setPositionLayer(el);};var create=function create(){console.log(\"tutorial is init\");var parent=d.body;var mask=d.createElement(\"div\");var layer=d.createElement(\"div\");var tooltip=d.createElement(\"div\");var message=d.createElement(\"div\");var controls=d.createElement(\"div\");var btnPrev=d.createElement(\"BUTTON\");var btnNext=d.createElement(\"BUTTON\");var tPrev=document.createTextNode(\"prev\");var tNext=document.createTextNode(\"next\");mask.classList.add(\"is-step-mask\");layer.classList.add(\"is-step-layer\");tooltip.classList.add(\"is-step-tooltip\");message.id=\"is-step-message\";controls.classList.add(\"controls\");btnPrev.id=\"prev\";btnNext.id=\"next\";btnPrev.appendChild(tPrev);btnNext.appendChild(tNext);btnNext.addEventListener(\"click\",function(){_nextStep();});btnPrev.addEventListener(\"click\",function(){_prevStep();});var messageHTML=document.createElement(\"SPAN\"),titleHTML=document.createElement(\"SPAN\");titleHTML.setAttribute(\"class\",\"title\");messageHTML.setAttribute(\"class\",\"message\");message.appendChild(titleHTML);message.appendChild(messageHTML);controls.appendChild(btnPrev);controls.appendChild(btnNext);tooltip.appendChild(message);tooltip.appendChild(controls);parent.appendChild(layer);parent.appendChild(mask);parent.appendChild(tooltip);};var init=function init(){currentStep=1;stepLength=_getStepLength();_start();_createTooltip(currentStep);_showPrevButton(false);};var changeStateTutorial=function changeStateTutorial(state){if(state){_setCookie('tutorial',true,10);}else{_setCookie('tutorial',false,10);}};var checkTutorial=function checkTutorial(){return _getCookie('tutorial');};var omitTutorial=function omitTutorial(){changeStateTutorial(false);};return{init:init,create:create,updatePosition:updatePosition,changeStateTutorial:changeStateTutorial,checkTutorial:checkTutorial,omitTutorial:omitTutorial};}(document);\n\n//# sourceURL=webpack://MainModule/./src/modules/Tutorial.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://MainModule/./src/scss/styles.scss?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/index.js ./src/scss/styles.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/styles.scss */\"./src/scss/styles.scss\");\n\n\n//# sourceURL=webpack://MainModule/multi_./src/index.js_./src/scss/styles.scss?");

/***/ })

/******/ });
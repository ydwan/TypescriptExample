/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	ReactDOM.render(React.createElement("h1", null, "Hello world!"), document.getElementById('example'));
	var names = ['Alice', 'Emily', 'Kate'];
	ReactDOM.render(React.createElement("div", null, names.map(function (name, index) { return React.createElement("div", {key: index}, 
	    " Hello, ", 
	    name, 
	    "!"); })), document.getElementById('names'));
	var domArray = [React.createElement("h1", {key: 'domArray1'}, "Hello World!"), React.createElement("h2", {key: 'domArray2'}, "React is awesome")];
	ReactDOM.render(React.createElement("div", null, domArray), document.getElementById('domArray'));
	var Greeting = (function (_super) {
	    __extends(Greeting, _super);
	    function Greeting() {
	        _super.apply(this, arguments);
	    }
	    Greeting.prototype.render = function () {
	        return React.createElement("h1", null, 
	            "Hello ", 
	            this.props.message);
	    };
	    return Greeting;
	}(React.Component));
	ReactDOM.render(React.createElement(Greeting, {message: "John"}), document.getElementById('example'));


/***/ }
/******/ ]);
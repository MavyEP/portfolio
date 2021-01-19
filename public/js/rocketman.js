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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/rocketman.js":
/*!***********************************!*\
  !*** ./resources/js/rocketman.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var jetBubbles = document.getElementsByClassName('jetBubble');
var rocketManSVG = document.querySelector('.rocketManSVG');
var shakeGroup = document.querySelector('.shakeGroup');
var star = document.querySelector('.star');
var satellite = document.querySelector('.satellite');
var astronaut = document.querySelector('.astronaut');
var starContainer = document.querySelector('.starContainer');
var badgeLink = document.querySelector('#badgeLink');
TweenMax.to(astronaut, 0.05, {
  y: '+=4',
  repeat: -1,
  yoyo: true
});
var mainTimeline = new TimelineMax({
  repeat: -1
});
var mainSpeedLinesTimeline = new TimelineMax({
  repeat: -1,
  paused: false
});
mainTimeline.timeScale(6).seek(100);

function createJets() {
  TweenMax.set(jetBubbles, {
    attr: {
      r: '-=5'
    }
  }); //jet bubbles

  for (var i = 0; i < jetBubbles.length; i++) {
    var jb = jetBubbles[i];
    var tl = new TimelineMax({
      repeat: -1
    });
    tl.to(jb, 1, {
      attr: {
        r: '+=15'
      },
      ease: Linear.easeNone
    }).to(jb, 1, {
      attr: {
        r: '-=15'
      },
      ease: Linear.easeNone
    });
    mainTimeline.add(tl, i / 4);
  } //speed lines


  for (var i = 0; i < 7; i++) {
    var sl = document.querySelector('#speedLine' + i);
    var stl = new TimelineMax({
      repeat: -1,
      repeatDelay: Math.random()
    });
    stl.set(sl, {
      drawSVG: false
    }).to(sl, 0.05, {
      drawSVG: '0% 30%',
      ease: Linear.easeNone
    }).to(sl, 0.2, {
      drawSVG: '70% 100%',
      ease: Linear.easeNone
    }).to(sl, 0.05, {
      drawSVG: '100% 100%',
      ease: Linear.easeNone
    }).set(sl, {
      drawSVG: '-1% -1%'
    });
    mainSpeedLinesTimeline.add(stl, i / 23);
  } //stars


  for (var i = 0; i < 7; i++) {
    var sc = star.cloneNode(true);
    starContainer.appendChild(sc);
    var calc = (i + 1) / 2;
    TweenMax.fromTo(sc, calc, {
      x: Math.random() * 600,
      y: -30,
      scale: 3 - calc
    }, {
      y: Math.random() * 100 + 600,
      repeat: -1,
      repeatDelay: 1,
      ease: Linear.easeNone
    });
  }

  rocketManSVG.removeChild(star);
}

var satTimeline = new TimelineMax({
  repeat: -1
});
satTimeline.to(satellite, 46, {
  rotation: 360,
  transformOrigin: '50% 50%',
  ease: Linear.easeNone
});
TweenMax.staggerTo('.pulse', 0.8, {
  alpha: 0,
  repeat: -1,
  ease: Power2.easeInOut,
  yoyo: false
}, 0.1);
TweenMax.staggerTo('.satellitePulse', 0.8, {
  alpha: 0,
  repeat: -1,
  ease: Power2.easeInOut,
  yoyo: false
}, 0.1);
createJets();

/***/ }),

/***/ 2:
/*!*****************************************!*\
  !*** multi ./resources/js/rocketman.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\MAMP\htdocs\portfolio\resources\js\rocketman.js */"./resources/js/rocketman.js");


/***/ })

/******/ });
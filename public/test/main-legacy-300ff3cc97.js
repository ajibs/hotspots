webpackJsonp(["main-legacy"],{

/***/ "./public/css/style.css":
/***/ (function(module, exports) {

throw new Error("Module parse failed: C:\\Users\\AJIBS\\Desktop\\Apps\\FCC Projects\\Back-End\\hotspots\\public\\css\\style.css Unexpected token (2:5)\nYou may need an appropriate loader to handle this file type.\n| /* setting comments */\r\n| body {\r\n|   background-color: yellow;\r\n|   font-size: 25px;\r");

/***/ }),

/***/ "./public/js/hotspots.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_style_css__ = __webpack_require__("./public/css/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_style_css__);
var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



document.write('hello world');

// example of an arrow function
var test = function test() {
  console.log('ES6');
};

// async await functions
var baz = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var a;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            a = 2;
            _context.t0 = Math;
            _context.next = 4;
            return a;

          case 4:
            _context.t1 = _context.sent;

            _context.t0.pow.call(_context.t0, _context.t1, 4);

            console.log(Math.pow(a, a));

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function baz() {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

},["./public/js/hotspots.js"]);
//# sourceMappingURL=main-legacy-300ff3cc97.js.map
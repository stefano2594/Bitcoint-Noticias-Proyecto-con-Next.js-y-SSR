webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./componentes/Eventos.js":
/*!********************************!*\
  !*** ./componentes/Eventos.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _componentes_Evento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componentes/Evento */ "./componentes/Evento.js");
var _jsxFileName = "C:\\Users\\stefa\\Desktop\\AprediendoReact\\bitcoinapp\\componentes\\Eventos.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Eventos = function Eventos(props) {
  var eventosId = O.keys(props.eventos); //console.log(props.eventos);

  return __jsx("div", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, eventosId.map(function (key) {
    return __jsx(_componentes_Evento__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: key,
      info: props.eventos[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Eventos);

/***/ })

})
//# sourceMappingURL=index.js.beba9eacd0da6c1636bf.hot-update.js.map
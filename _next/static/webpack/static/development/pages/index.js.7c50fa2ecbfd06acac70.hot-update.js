webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _componentes_Master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes/Master */ "./componentes/Master.js");
/* harmony import */ var _componentes_Precio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/Precio */ "./componentes/Precio.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _componentes_Eventos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/Eventos */ "./componentes/Eventos.js");
/* harmony import */ var _componentes_Noticias__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentes/Noticias */ "./componentes/Noticias.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\stefa\\Desktop\\AprediendoReact\\bitcoinapp\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Index = function Index(props) {
  return __jsx(_componentes_Master__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Precio del Bitcoin"), __jsx(_componentes_Precio__WEBPACK_IMPORTED_MODULE_4__["default"], {
    precio: props.precioBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h2", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Noticias sobre el Bitcoin"), __jsx(_componentes_Noticias__WEBPACK_IMPORTED_MODULE_7__["default"], {
    noticias: props.noticias,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("div", {
    className: "col-m-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h2", {
    className: "my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Pr\xF3ximos Eventos Bitcoin"), console.log(props.eventos))));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var precio, noticias, token, eventos, resPrecio, resNoticias, resEventos;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://api.coinmarketcap.com/v2/ticker/1/');

        case 2:
          precio = _context.sent;
          _context.next = 5;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=3084f0a6cb6f4026b27f8ecd1ee1a247&languaje=es');

        case 5:
          noticias = _context.sent;
          token = '6AFMGZNVPKE5QG6XGJ'; //const eventos= await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&token=${token}&location.address=Mexico`);

          eventos = "https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&token=".concat(token, "&location.address=Mexico");
          _context.next = 10;
          return precio.json();

        case 10:
          resPrecio = _context.sent;
          _context.next = 13;
          return noticias.json();

        case 13:
          resNoticias = _context.sent;
          resEventos = axios__WEBPACK_IMPORTED_MODULE_8___default.a.url();
          return _context.abrupt("return", {
            precioBitcoin: resPrecio.data.quotes.USD,
            noticias: resNoticias.articles,
            eventos: resEventos.events
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.7c50fa2ecbfd06acac70.hot-update.js.map
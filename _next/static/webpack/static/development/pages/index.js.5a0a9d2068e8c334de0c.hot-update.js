webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/atomic/pages/Home/Home.js":
/*!**********************************************!*\
  !*** ./components/atomic/pages/Home/Home.js ***!
  \**********************************************/
/*! exports provided: Home, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _organism_FlowsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../organism/FlowsTable */ "./components/atomic/organism/FlowsTable/index.js");
/* harmony import */ var _constants_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../constants/filters */ "./constants/filters.js");
/* harmony import */ var _organism_TokenSnapshotWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../organism/TokenSnapshotWidget */ "./components/atomic/organism/TokenSnapshotWidget/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks */ "./hooks/index.js");
/* harmony import */ var _atoms_LoadSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/LoadSpinner */ "./components/atomic/atoms/LoadSpinner/index.js");
/* harmony import */ var _organism_FlowsTable_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../organism/FlowsTable/helpers */ "./components/atomic/organism/FlowsTable/helpers/index.js");
/* harmony import */ var _constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../constants/styles/common-styled-jsx */ "./constants/styles/common-styled-jsx.js");
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Products */ "./components/atomic/pages/Home/Products.js");
/* harmony import */ var _molecules_ButtonMarketing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../molecules/ButtonMarketing */ "./components/atomic/molecules/ButtonMarketing/index.js");
/* harmony import */ var _utils_emitProductEvent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/emitProductEvent */ "./components/atomic/pages/Home/utils/emitProductEvent.js");
/* harmony import */ var _Featured__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Featured */ "./components/atomic/pages/Home/Featured.js");
var _this = undefined,
    _jsxFileName = "/Users/nuqu/Repositories/website/components/atomic/pages/Home/Home.js";



/* eslint-disable react/jsx-curly-newline */













var Home = function Home() {
  var dataWindow = _constants_filters__WEBPACK_IMPORTED_MODULE_4__["DATA_WINDOWS"][0];
  var ioTableData = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useApi"])('/api/exchange-io');
  var units = _constants_filters__WEBPACK_IMPORTED_MODULE_4__["UNITS"][0];
  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      key: "title",
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, "TokenAnalyst - Blockchain Market Intelligence")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "under-sub-nav",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "home-top-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "top-container-slogan",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "slogan",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }, "Blockchain Market Intelligence"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }, "Enterprise-grade data and tools to understand and access blockchains."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "top-buttons",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "top-button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_ButtonMarketing__WEBPACK_IMPORTED_MODULE_11__["ButtonMarketing"], {
      url: "/dashboard",
      isExternal: false,
      text: "View Demo",
      isActive: false,
      onClick: function onClick() {
        return Object(_utils_emitProductEvent__WEBPACK_IMPORTED_MODULE_12__["emitProductEvent"])('Top Dashboard Button', 'home-top-button-dashboard');
      },
      isLoading: false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "top-button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_ButtonMarketing__WEBPACK_IMPORTED_MODULE_11__["ButtonMarketing"], {
      url: "/pricing",
      isExternal: false,
      text: "Subscribe now",
      isActive: true,
      isLoading: true,
      onClick: function onClick() {
        return Object(_utils_emitProductEvent__WEBPACK_IMPORTED_MODULE_12__["emitProductEvent"])('Top Subscribe Button', 'home-top-button-subscribe');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "top-container-charts",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "token-snapshot",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_organism_TokenSnapshotWidget__WEBPACK_IMPORTED_MODULE_5__["TokenSnapshotWidget"], {
      dataWindow: _constants_filters__WEBPACK_IMPORTED_MODULE_4__["DATA_WINDOWS"][0],
      units: units,
      maxItems: 2,
      itemsDirection: "row",
      disabled: true,
      isHome: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "table",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, ioTableData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_organism_FlowsTable__WEBPACK_IMPORTED_MODULE_3__["FlowsTable"], {
      data: Object(_organism_FlowsTable_helpers__WEBPACK_IMPORTED_MODULE_8__["filterTable"])(ioTableData),
      dataWindow: dataWindow,
      units: units,
      pageSize: 5,
      showPagination: false,
      showPageSizeOptions: false,
      compactLayout: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_LoadSpinner__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinner"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 19
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "home-products-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "products-description",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "products-description-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }
    }, "Blockchain Data products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "products-description-text",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 15
      }
    }, "Transparent and actionable tools and data for Bitcoin, Ethereum and Stablecoins."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 15
      }
    }, "We provide data analysis tools for the Bitcoin and Ethereum blockchains. Institutional and professional traders get access to real-time and historical data on transactions, exchange flows and miners actvities."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "products",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Products__WEBPACK_IMPORTED_MODULE_10__["Products"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "home-featured-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2866662764 " + "jsx-".concat(_constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash) + " " + "featured",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Featured__WEBPACK_IMPORTED_MODULE_13__["Featured"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: _constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"].__hash,
      __self: _this
    }, _constants_styles_common_styled_jsx__WEBPACK_IMPORTED_MODULE_9__["pricingButton"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2866662764",
      __self: _this
    }, ".home-top-container.jsx-2866662764{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;margin-top:50px;max-width:1400px;margin-right:auto;margin-left:auto;padding-left:20px;padding-right:20px;padding-bottom:75px;}.top-container-slogan.jsx-2866662764{width:55%;}.top-container-charts.jsx-2866662764{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:50%;min-height:600px;margin-top:30px;}.home-products-container.jsx-2866662764{margin-top:50px;height:100%;margin-right:auto;margin-left:auto;background-color:#f2f2f2;}.products.jsx-2866662764{max-width:1400px;margin-right:auto;margin-left:auto;}.featured.jsx-2866662764{max-width:1400px;margin-right:auto;margin-left:auto;}.title.jsx-2866662764{font-family:Space Grotesk;font-size:54px;font-weight:bold;font-style:normal;font-stretch:normal;line-height:1.11;-webkit-letter-spacing:-0.31px;-moz-letter-spacing:-0.31px;-ms-letter-spacing:-0.31px;letter-spacing:-0.31px;color:#000000;max-width:300px;}.description.jsx-2866662764{font-family:Cardo;font-size:30px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:normal;-webkit-letter-spacing:0.26px;-moz-letter-spacing:0.26px;-ms-letter-spacing:0.26px;letter-spacing:0.26px;color:#000000;margin-bottom:125px;max-width:320px;}.table.jsx-2866662764{margin-top:50px;height:250px;}.token-snapshot.jsx-2866662764{height:310px;}.top-buttons.jsx-2866662764{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.top-button.jsx-2866662764{margin-right:20px;}.products-description.jsx-2866662764{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:1440px;margin:auto;padding-left:20px;padding-right:20px;}.products-description-title.jsx-2866662764{font-family:Space Grotesk;font-weight:700;font-size:30px;font-style:normal;font-stretch:normal;line-height:normal;-webkit-letter-spacing:0.26px;-moz-letter-spacing:0.26px;-ms-letter-spacing:0.26px;-webkit-letter-spacing:0.26px;-moz-letter-spacing:0.26px;-ms-letter-spacing:0.26px;letter-spacing:0.26px;color:#000000;margin-bottom:20px;margin-top:50px;}.products-description-text.jsx-2866662764 p.jsx-2866662764{font-size:20px;font-family:Open Sans;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;-webkit-letter-spacing:0.13px;-moz-letter-spacing:0.13px;-ms-letter-spacing:0.13px;-webkit-letter-spacing:0.13px;-moz-letter-spacing:0.13px;-ms-letter-spacing:0.13px;letter-spacing:0.13px;}@media only screen and (max-width:1360px){.table.jsx-2866662764{display:none;}}@media only screen and (max-width:768px){.products-description.jsx-2866662764{width:100%;padding-left:0px;padding-right:0px;padding-bottom:20px;}.products-description-title.jsx-2866662764{margin-top:0px;font-size:20px;}.products-description-text.jsx-2866662764 p.jsx-2866662764{font-size:16px;}.home-top-container.jsx-2866662764{padding-bottom:75px;margin-top:25px;width:100%;}.title.jsx-2866662764{font-size:40px;}.description.jsx-2866662764{margin-bottom:50px;font-size:26px;}.token-snapshot.jsx-2866662764{display:none;}.home-products-container.jsx-2866662764{margin-top:0px;background-color:transparent;}.top-container-charts.jsx-2866662764{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9udXF1L1JlcG9zaXRvcmllcy93ZWJzaXRlL2NvbXBvbmVudHMvYXRvbWljL3BhZ2VzL0hvbWUvSG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSVMsQUFHMEIsQUFZSCxBQUdHLEFBT0csQUFPQyxBQUtBLEFBS1MsQUFXUixBQVlGLEFBSUgsQUFHQSxBQUdLLEFBR0wsQUFRYSxBQWVYLEFBY0EsQUFLRixBQU1JLEFBSUEsQUFHSyxBQUtMLEFBR0ksQUFJTixBQUdFLEFBSUYsVUF4SWpCLENBeUdxQixFQW5EckIsQUE4Q0UsQUE4QkEsQUFPQSxFQW5Ec0IsQUF5QkwsQUFJakIsQUFRQSxBQVUrQixDQTNIbkIsQUF3Q0MsQ0FqQ0ssQUFLQSxDQWdCSCxBQXNCakIsQ0FrRW1CLENBUkMsTUEzRkgsQUE0Q0MsRUE1REUsQUErRkUsQ0F2RHRCLENBNkRFLEdBekVtQixDQXdGbkIsQ0E3R2lCLEFBS0EsQ0FnR0osQ0FoQ0csSUEzREMsQ0E0Q0YsRUE4RGYsRUExSGlCLEFBK0ZLLENBYXRCLEtBckdGLEFBS0EsQUFnQm9CLENBZ0RBLElBZkEsQ0E1Q0EsS0FoQk8sR0ErRnpCLElBbkVvQixDQWdEQSxHQXJHRCxBQWVHLEFBc0R4QixBQU13QixDQVdGLENBNUNBLFlBaEJ0QixFQTRCcUIsQ0FnREEsSUFmQSxDQTVDRixhQVlLLENBZ0RRLEdBM0RQLENBNENPLDBCQWdCSCxHQXZHaEIsQ0F3RmdCLFFBekVqQixBQTRERyxFQTFFRyxRQWVDLEdBNERMLEVBNEJjLEdBdEdULENBdUZTLE1BWlIsRUE1REYsUUFkRSxNQXNHSSxFQXZGeEIsQUE0RHFCLEVBWUcsUUF0RkwsU0FtREgsQUF3QmhCLFFBMUVvQixBQXVDSixNQVlNLFFBWEosSUF2Q0csUUFtREgsSUFYbEIsT0F2Q3NCLEtBbUR0QixlQWxEQSxtQkFrR0EsSUFmZ0IsY0FDSyxtQkFDSCxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL251cXUvUmVwb3NpdG9yaWVzL3dlYnNpdGUvY29tcG9uZW50cy9hdG9taWMvcGFnZXMvSG9tZS9Ib21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWN1cmx5LW5ld2xpbmUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCB7IEZsb3dzVGFibGUgfSBmcm9tICcuLi8uLi9vcmdhbmlzbS9GbG93c1RhYmxlJztcbmltcG9ydCB7IERBVEFfV0lORE9XUywgVU5JVFMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMvZmlsdGVycyc7XG5pbXBvcnQgeyBUb2tlblNuYXBzaG90V2lkZ2V0IH0gZnJvbSAnLi4vLi4vb3JnYW5pc20vVG9rZW5TbmFwc2hvdFdpZGdldCc7XG5pbXBvcnQgeyB1c2VBcGkgfSBmcm9tICcuLi8uLi8uLi8uLi9ob29rcyc7XG5pbXBvcnQgeyBMb2FkaW5nU3Bpbm5lciB9IGZyb20gJy4uLy4uL2F0b21zL0xvYWRTcGlubmVyJztcbmltcG9ydCB7IGZpbHRlclRhYmxlIH0gZnJvbSAnLi4vLi4vb3JnYW5pc20vRmxvd3NUYWJsZS9oZWxwZXJzJztcbmltcG9ydCB7IHByaWNpbmdCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudHMvc3R5bGVzL2NvbW1vbi1zdHlsZWQtanN4JztcbmltcG9ydCB7IFByb2R1Y3RzIH0gZnJvbSAnLi9Qcm9kdWN0cyc7XG5pbXBvcnQgeyBCdXR0b25NYXJrZXRpbmcgfSBmcm9tICcuLi8uLi9tb2xlY3VsZXMvQnV0dG9uTWFya2V0aW5nJztcbmltcG9ydCB7IGVtaXRQcm9kdWN0RXZlbnQgfSBmcm9tICcuL3V0aWxzL2VtaXRQcm9kdWN0RXZlbnQnO1xuaW1wb3J0IHsgRmVhdHVyZWQgfSBmcm9tICcuL0ZlYXR1cmVkJztcblxuZXhwb3J0IGNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGFXaW5kb3cgPSBEQVRBX1dJTkRPV1NbMF07XG4gIGNvbnN0IGlvVGFibGVEYXRhID0gdXNlQXBpKCcvYXBpL2V4Y2hhbmdlLWlvJyk7XG4gIGNvbnN0IHVuaXRzID0gVU5JVFNbMF07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZSBrZXk9XCJ0aXRsZVwiPlRva2VuQW5hbHlzdCAtIEJsb2NrY2hhaW4gTWFya2V0IEludGVsbGlnZW5jZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVyLXN1Yi1uYXZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXRvcC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1jb250YWluZXItc2xvZ2FuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsb2dhblwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5CbG9ja2NoYWluIE1hcmtldCBJbnRlbGxpZ2VuY2U8L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIEVudGVycHJpc2UtZ3JhZGUgZGF0YSBhbmQgdG9vbHMgdG8gdW5kZXJzdGFuZCBhbmQgYWNjZXNzXG4gICAgICAgICAgICAgICAgYmxvY2tjaGFpbnMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbk1hcmtldGluZ1xuICAgICAgICAgICAgICAgICAgICB1cmw9XCIvZGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgaXNFeHRlcm5hbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJWaWV3IERlbW9cIlxuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgZW1pdFByb2R1Y3RFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdUb3AgRGFzaGJvYXJkIEJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaG9tZS10b3AtYnV0dG9uLWRhc2hib2FyZCdcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uTWFya2V0aW5nXG4gICAgICAgICAgICAgICAgICAgIHVybD1cIi9wcmljaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgaXNFeHRlcm5hbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJTdWJzY3JpYmUgbm93XCJcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgZW1pdFByb2R1Y3RFdmVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdUb3AgU3Vic2NyaWJlIEJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnaG9tZS10b3AtYnV0dG9uLXN1YnNjcmliZSdcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtY29udGFpbmVyLWNoYXJ0c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2tlbi1zbmFwc2hvdFwiPlxuICAgICAgICAgICAgICA8VG9rZW5TbmFwc2hvdFdpZGdldFxuICAgICAgICAgICAgICAgIGRhdGFXaW5kb3c9e0RBVEFfV0lORE9XU1swXX1cbiAgICAgICAgICAgICAgICB1bml0cz17dW5pdHN9XG4gICAgICAgICAgICAgICAgbWF4SXRlbXM9ezJ9XG4gICAgICAgICAgICAgICAgaXRlbXNEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgaXNIb21lXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAge2lvVGFibGVEYXRhID8gKFxuICAgICAgICAgICAgICAgIDxGbG93c1RhYmxlXG4gICAgICAgICAgICAgICAgICBkYXRhPXtmaWx0ZXJUYWJsZShpb1RhYmxlRGF0YSl9XG4gICAgICAgICAgICAgICAgICBkYXRhV2luZG93PXtkYXRhV2luZG93fVxuICAgICAgICAgICAgICAgICAgdW5pdHM9e3VuaXRzfVxuICAgICAgICAgICAgICAgICAgcGFnZVNpemU9ezV9XG4gICAgICAgICAgICAgICAgICBzaG93UGFnaW5hdGlvbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICBzaG93UGFnZVNpemVPcHRpb25zPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGNvbXBhY3RMYXlvdXRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8TG9hZGluZ1NwaW5uZXIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXByb2R1Y3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtZGVzY3JpcHRpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgQmxvY2tjaGFpbiBEYXRhIHByb2R1Y3RzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtZGVzY3JpcHRpb24tdGV4dFwiPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBUcmFuc3BhcmVudCBhbmQgYWN0aW9uYWJsZSB0b29scyBhbmQgZGF0YSBmb3IgQml0Y29pbiwgRXRoZXJldW1cbiAgICAgICAgICAgICAgICBhbmQgU3RhYmxlY29pbnMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgV2UgcHJvdmlkZSBkYXRhIGFuYWx5c2lzIHRvb2xzIGZvciB0aGUgQml0Y29pbiBhbmQgRXRoZXJldW1cbiAgICAgICAgICAgICAgICBibG9ja2NoYWlucy4gSW5zdGl0dXRpb25hbCBhbmQgcHJvZmVzc2lvbmFsIHRyYWRlcnMgZ2V0IGFjY2Vzc1xuICAgICAgICAgICAgICAgIHRvIHJlYWwtdGltZSBhbmQgaGlzdG9yaWNhbCBkYXRhIG9uIHRyYW5zYWN0aW9ucywgZXhjaGFuZ2UgZmxvd3NcbiAgICAgICAgICAgICAgICBhbmQgbWluZXJzIGFjdHZpdGllcy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxuICAgICAgICAgICAgPFByb2R1Y3RzIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtZmVhdHVyZWQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlZFwiPlxuICAgICAgICAgICAgPEZlYXR1cmVkIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntwcmljaW5nQnV0dG9ufTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5ob21lLXRvcC1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9wLWNvbnRhaW5lci1zbG9nYW4ge1xuICAgICAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvcC1jb250YWluZXItY2hhcnRzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhvbWUtcHJvZHVjdHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0cyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmVhdHVyZWQge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTcGFjZSBHcm90ZXNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiA1NHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjExO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjMxcHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogQ2FyZG87XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTI1cHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGFibGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2tlbi1zbmFwc2hvdCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9wLWJ1dHRvbnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvcC1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdHMtZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB3aWR0aDogMTQ0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3RzLWRlc2NyaXB0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTcGFjZSBHcm90ZXNrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIC13ZWJraXQtbGV0dGVyLXNwYWNpbmc6IDAuMjZweDtcbiAgICAgICAgICAgIC1tb3otbGV0dGVyLXNwYWNpbmc6IDAuMjZweDtcbiAgICAgICAgICAgIC1tcy1sZXR0ZXItc3BhY2luZzogMC4yNnB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjZweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0cy1kZXNjcmlwdGlvbi10ZXh0IHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAtd2Via2l0LWxldHRlci1zcGFjaW5nOiAwLjEzcHg7XG4gICAgICAgICAgICAtbW96LWxldHRlci1zcGFjaW5nOiAwLjEzcHg7XG4gICAgICAgICAgICAtbXMtbGV0dGVyLXNwYWNpbmc6IDAuMTNweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjEzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzYwcHgpIHtcbiAgICAgICAgICAgIC50YWJsZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIC5wcm9kdWN0cy1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9kdWN0cy1kZXNjcmlwdGlvbi10aXRsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2R1Y3RzLWRlc2NyaXB0aW9uLXRleHQgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ob21lLXRvcC1jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNzVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG9rZW4tc25hcHNob3Qge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhvbWUtcHJvZHVjdHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b3AtY29udGFpbmVyLWNoYXJ0cyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/nuqu/Repositories/website/components/atomic/pages/Home/Home.js */"))
  );
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.5a0a9d2068e8c334de0c.hot-update.js.map
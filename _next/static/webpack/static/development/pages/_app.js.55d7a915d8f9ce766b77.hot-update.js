webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _atomic_molecules_MetricsNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./atomic/molecules/MetricsNav */ "./components/atomic/molecules/MetricsNav/index.js");
/* harmony import */ var _atomic_molecules_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./atomic/molecules/Nav */ "./components/atomic/molecules/Nav/index.js");
/* harmony import */ var _atomic_organism_Newsletter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./atomic/organism/Newsletter */ "./components/atomic/organism/Newsletter/index.js");
/* harmony import */ var _atomic_organism_CookieBanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./atomic/organism/CookieBanner */ "./components/atomic/organism/CookieBanner/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _constants_cookies__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants/cookies */ "./constants/cookies.js");
/* harmony import */ var _node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../node_modules/normalize.css/normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _node_modules_blueprintjs_core_lib_css_blueprint_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../node_modules/@blueprintjs/core/lib/css/blueprint.css */ "./node_modules/@blueprintjs/core/lib/css/blueprint.css");
/* harmony import */ var _node_modules_blueprintjs_core_lib_css_blueprint_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_node_modules_blueprintjs_core_lib_css_blueprint_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _node_modules_blueprintjs_select_lib_css_blueprint_select_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../node_modules/@blueprintjs/select/lib/css/blueprint-select.css */ "./node_modules/@blueprintjs/select/lib/css/blueprint-select.css");
/* harmony import */ var _node_modules_blueprintjs_select_lib_css_blueprint_select_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_node_modules_blueprintjs_select_lib_css_blueprint_select_css__WEBPACK_IMPORTED_MODULE_15__);


var _this = undefined,
    _jsxFileName = "/Users/nuqu/Repositories/website/components/Layout.js";



/* eslint-disable no-restricted-imports */














var tierParamString = "tier=".concat(js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get(_constants_cookies__WEBPACK_IMPORTED_MODULE_12__["COOKIES"].tier));
var metricsTierParamString = "tier_metrics=".concat(js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get(_constants_cookies__WEBPACK_IMPORTED_MODULE_12__["COOKIES"].tier));

var STRUCTURED_DATA = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'TokenAnalyst',
  logo: 'https://www.tokenanalyst.io/static/png/logo_desktop.png',
  url: 'https://www.tokenanalyst.io'
});

var WITHOUT_FOOTER = ['/exchange/[token]/[exchange]', '/miner/[token]/[miner]', '/insights'];
var WITH_DASHBOARD_TABS = ['/dashboard', '/exchange/[token]/[exchange]', '/miner/[token]/[miner]', '/insights', '/analytics'];
var tabs = [{
  text: 'Dashboard',
  route: '/dashboard',
  link: '/dashboard'
}, {
  text: 'Exchange Flows',
  route: '/exchange/[token]/[exchange]',
  link: "/exchange/BTC/Binance?".concat(tierParamString)
}, {
  text: 'Miner Stats',
  route: '/miner/[token]/[miner]',
  link: "/miner/BTC/antpool?".concat(tierParamString)
}, {
  text: 'Network Stats',
  route: '/insights',
  link: "/insights?".concat(metricsTierParamString)
}, {
  text: ' ',
  route: '/analytics',
  link: '/analytics'
}];
var Layout = function Layout(_ref) {
  var children = _ref.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var route = router.route;
  var isWithFooter = !WITHOUT_FOOTER.includes(route);
  var isWithDashboardTabs = WITH_DASHBOARD_TABS.includes(route);
  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]) + " " + "layout",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
      key: "title",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    }, "TokenAnalyst"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
      rel: "shortcut icon",
      href: "/static/favicon.ico",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
      href: "/static/fonts/fonts.css",
      rel: "stylesheet",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("script", {
      src: "https://js.stripe.com/v3/",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("script", {
      src: "/static/js/hotjar.js",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("script", {
      type: "application/ld+json",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }
    }, STRUCTURED_DATA), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("script", {
      type: "text/javascript",
      src: "/static/charting_library/charting_library.min.js",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      key: "description",
      name: "description",
      content: "Access comprehensive real-time and historical blockchain data including exchange flows, volumes, and other key trading metrics.",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      name: "keywords",
      content: "blockchain, bitcoin, ethereum, data, on-chain, streaming, trading, inflow, outflow, exchange flows",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:title",
      content: "TokenAnalyst",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:type",
      content: "website",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:url",
      content: "https://www.tokenanalyst.io/",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:description",
      content: "TokenAnalyst is the leading provider of real-time and historical blockchain data.",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:image",
      content: "https://www.tokenanalyst.io/static/png/logo-open-graph.png",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:image:secure_url",
      content: "https://www.tokenanalyst.io/static/png/logo-open-graph.png",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:image:type",
      content: "image/png",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:image:width",
      content: "600",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:image:height",
      content: "315",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:image:alt",
      content: "TokenAnalyst is the leading provider of real-time and historical blockchain data.",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      name: "google-site-verification",
      content: "8zKrdD_6inTAzST2ucgyNW3NMZfGfkAKBz8Qky16lko",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]) + " " + "not-active-banner",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]) + " " + "marker",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 42
      }
    }, "Attention:"), " The data on this site does not refresh anymore"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atomic_molecules_Nav__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atomic_organism_Newsletter__WEBPACK_IMPORTED_MODULE_9__["Newsletter"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atomic_organism_CookieBanner__WEBPACK_IMPORTED_MODULE_10__["CookieBanner"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]) + " " + "page",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 7
      }
    }, isWithDashboardTabs && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]) + " " + "metrics-nav",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atomic_molecules_MetricsNav__WEBPACK_IMPORTED_MODULE_7__["MetricsNav"], {
      tabs: tabs,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4205158304", [isWithDashboardTabs ? '40px' : '0px']]]) + " " + "main-content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }
    }, children)), isWithFooter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_11__["Footer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 24
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "4205158304",
      dynamic: [isWithDashboardTabs ? '40px' : '0px'],
      __self: _this
    }, ".not-active-banner.__jsx-style-dynamic-selector{text-align:center;font-weight:bold;height:50px;width:100%;padding-top:15px;paddding-bottom:15px;background-color:white;position:fixed;z-index:2;}.marker.__jsx-style-dynamic-selector{padding:5;background-color:black;color:white;}.page.__jsx-style-dynamic-selector{margin-left:10px;margin-right:10px;padding-top:110px;min-height:700px;}.metrics-nav.__jsx-style-dynamic-selector{position:fixed;background-color:white;z-index:1;width:100%;}.main-content.__jsx-style-dynamic-selector{padding-top:".concat(isWithDashboardTabs ? '40px' : '0px', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9udXF1L1JlcG9zaXRvcmllcy93ZWJzaXRlL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1KUyxBQUc2QixBQVlSLEFBS1MsQUFNRixBQU0wQixVQWhCcEIsS0FXRSxFQU5MLENBakJILGVBYUwsRUFaQSxBQWlCUSxHQU1SLEdBS1osSUFmRixFQVphLENBdUJFLEtBTk0sS0FoQkYsQ0F1QmpCLFdBTkEsS0FoQnFCLHFCQUNFLHVCQUNSLGVBQ0wsVUFFWiIsImZpbGUiOiIvVXNlcnMvbnVxdS9SZXBvc2l0b3JpZXMvd2Vic2l0ZS9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtaW1wb3J0cyAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuaW1wb3J0IHsgTWV0cmljc05hdiB9IGZyb20gJy4vYXRvbWljL21vbGVjdWxlcy9NZXRyaWNzTmF2JztcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4vYXRvbWljL21vbGVjdWxlcy9OYXYnO1xuaW1wb3J0IHsgTmV3c2xldHRlciB9IGZyb20gJy4vYXRvbWljL29yZ2FuaXNtL05ld3NsZXR0ZXInO1xuaW1wb3J0IHsgQ29va2llQmFubmVyIH0gZnJvbSAnLi9hdG9taWMvb3JnYW5pc20vQ29va2llQmFubmVyJztcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCB7IENPT0tJRVMgfSBmcm9tICcuLi9jb25zdGFudHMvY29va2llcyc7XG5cbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9AYmx1ZXByaW50anMvY29yZS9saWIvY3NzL2JsdWVwcmludC5jc3MnO1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvQGJsdWVwcmludGpzL3NlbGVjdC9saWIvY3NzL2JsdWVwcmludC1zZWxlY3QuY3NzJztcblxuY29uc3QgdGllclBhcmFtU3RyaW5nID0gYHRpZXI9JHtDb29raWVzLmdldChDT09LSUVTLnRpZXIpfWA7XG5jb25zdCBtZXRyaWNzVGllclBhcmFtU3RyaW5nID0gYHRpZXJfbWV0cmljcz0ke0Nvb2tpZXMuZ2V0KENPT0tJRVMudGllcil9YDtcblxuY29uc3QgU1RSVUNUVVJFRF9EQVRBID0gSlNPTi5zdHJpbmdpZnkoe1xuICAnQGNvbnRleHQnOiAnaHR0cDovL3NjaGVtYS5vcmcnLFxuICAnQHR5cGUnOiAnT3JnYW5pemF0aW9uJyxcbiAgbmFtZTogJ1Rva2VuQW5hbHlzdCcsXG4gIGxvZ286ICdodHRwczovL3d3dy50b2tlbmFuYWx5c3QuaW8vc3RhdGljL3BuZy9sb2dvX2Rlc2t0b3AucG5nJyxcbiAgdXJsOiAnaHR0cHM6Ly93d3cudG9rZW5hbmFseXN0LmlvJyxcbn0pO1xuXG5jb25zdCBXSVRIT1VUX0ZPT1RFUiA9IFtcbiAgJy9leGNoYW5nZS9bdG9rZW5dL1tleGNoYW5nZV0nLFxuICAnL21pbmVyL1t0b2tlbl0vW21pbmVyXScsXG4gICcvaW5zaWdodHMnLFxuXTtcblxuY29uc3QgV0lUSF9EQVNIQk9BUkRfVEFCUyA9IFtcbiAgJy9kYXNoYm9hcmQnLFxuICAnL2V4Y2hhbmdlL1t0b2tlbl0vW2V4Y2hhbmdlXScsXG4gICcvbWluZXIvW3Rva2VuXS9bbWluZXJdJyxcbiAgJy9pbnNpZ2h0cycsXG4gICcvYW5hbHl0aWNzJyxcbl07XG5cbmNvbnN0IHRhYnMgPSBbXG4gIHtcbiAgICB0ZXh0OiAnRGFzaGJvYXJkJyxcbiAgICByb3V0ZTogJy9kYXNoYm9hcmQnLFxuICAgIGxpbms6ICcvZGFzaGJvYXJkJyxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdFeGNoYW5nZSBGbG93cycsXG4gICAgcm91dGU6ICcvZXhjaGFuZ2UvW3Rva2VuXS9bZXhjaGFuZ2VdJyxcbiAgICBsaW5rOiBgL2V4Y2hhbmdlL0JUQy9CaW5hbmNlPyR7dGllclBhcmFtU3RyaW5nfWAsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnTWluZXIgU3RhdHMnLFxuICAgIHJvdXRlOiAnL21pbmVyL1t0b2tlbl0vW21pbmVyXScsXG4gICAgbGluazogYC9taW5lci9CVEMvYW50cG9vbD8ke3RpZXJQYXJhbVN0cmluZ31gLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ05ldHdvcmsgU3RhdHMnLFxuICAgIHJvdXRlOiAnL2luc2lnaHRzJyxcbiAgICBsaW5rOiBgL2luc2lnaHRzPyR7bWV0cmljc1RpZXJQYXJhbVN0cmluZ31gLFxuICB9LFxuICB7XG4gICAgdGV4dDogJyAnLFxuICAgIHJvdXRlOiAnL2FuYWx5dGljcycsXG4gICAgbGluazogJy9hbmFseXRpY3MnLFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyByb3V0ZSB9ID0gcm91dGVyO1xuXG4gIGNvbnN0IGlzV2l0aEZvb3RlciA9ICFXSVRIT1VUX0ZPT1RFUi5pbmNsdWRlcyhyb3V0ZSk7XG5cbiAgY29uc3QgaXNXaXRoRGFzaGJvYXJkVGFicyA9IFdJVEhfREFTSEJPQVJEX1RBQlMuaW5jbHVkZXMocm91dGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGUga2V5PVwidGl0bGVcIj5Ub2tlbkFuYWx5c3Q8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9mb250cy9mb250cy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2pzLnN0cmlwZS5jb20vdjMvXCIgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIvc3RhdGljL2pzL2hvdGphci5qc1wiIC8+XG5cbiAgICAgICAgPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiPntTVFJVQ1RVUkVEX0RBVEF9PC9zY3JpcHQ+XG5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIHNyYz1cIi9zdGF0aWMvY2hhcnRpbmdfbGlicmFyeS9jaGFydGluZ19saWJyYXJ5Lm1pbi5qc1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBrZXk9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQWNjZXNzIGNvbXByZWhlbnNpdmUgcmVhbC10aW1lIGFuZCBoaXN0b3JpY2FsIGJsb2NrY2hhaW4gZGF0YSBpbmNsdWRpbmcgZXhjaGFuZ2UgZmxvd3MsIHZvbHVtZXMsIGFuZCBvdGhlciBrZXkgdHJhZGluZyBtZXRyaWNzLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcbiAgICAgICAgICBjb250ZW50PVwiYmxvY2tjaGFpbiwgYml0Y29pbiwgZXRoZXJldW0sIGRhdGEsIG9uLWNoYWluLCBzdHJlYW1pbmcsIHRyYWRpbmcsIGluZmxvdywgb3V0ZmxvdywgZXhjaGFuZ2UgZmxvd3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlRva2VuQW5hbHlzdFwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly93d3cudG9rZW5hbmFseXN0LmlvL1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIlRva2VuQW5hbHlzdCBpcyB0aGUgbGVhZGluZyBwcm92aWRlciBvZiByZWFsLXRpbWUgYW5kIGhpc3RvcmljYWwgYmxvY2tjaGFpbiBkYXRhLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vd3d3LnRva2VuYW5hbHlzdC5pby9zdGF0aWMvcG5nL2xvZ28tb3Blbi1ncmFwaC5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vd3d3LnRva2VuYW5hbHlzdC5pby9zdGF0aWMvcG5nL2xvZ28tb3Blbi1ncmFwaC5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOnR5cGVcIiBjb250ZW50PVwiaW1hZ2UvcG5nXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCI2MDBcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCIzMTVcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2U6YWx0XCJcbiAgICAgICAgICBjb250ZW50PVwiVG9rZW5BbmFseXN0IGlzIHRoZSBsZWFkaW5nIHByb3ZpZGVyIG9mIHJlYWwtdGltZSBhbmQgaGlzdG9yaWNhbCBibG9ja2NoYWluIGRhdGEuXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCI4ektyZERfNmluVEF6U1QydWNneU5XM05NWmZHZmtBS0J6OFFreTE2bGtvXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90LWFjdGl2ZS1iYW5uZXJcIj48c3BhbiBjbGFzc05hbWU9XCJtYXJrZXJcIj5BdHRlbnRpb246PC9zcGFuPiBUaGUgZGF0YSBvbiB0aGlzIHNpdGUgZG9lcyBub3QgcmVmcmVzaCBhbnltb3JlPC9kaXY+XG4gICAgICA8TmF2IC8+XG4gICAgICA8TmV3c2xldHRlciAvPlxuICAgICAgPENvb2tpZUJhbm5lciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgIHtpc1dpdGhEYXNoYm9hcmRUYWJzICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldHJpY3MtbmF2XCI+XG4gICAgICAgICAgICA8TWV0cmljc05hdiB0YWJzPXt0YWJzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNXaXRoRm9vdGVyICYmIDxGb290ZXIgLz59XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAubm90LWFjdGl2ZS1iYW5uZXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgcGFkZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLm1hcmtlciB7IFxuICAgICAgICAgIHBhZGRpbmc6IDU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTEwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm1ldHJpY3MtbmF2IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFpbi1jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAke2lzV2l0aERhc2hib2FyZFRhYnMgPyAnNDBweCcgOiAnMHB4J307XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcbiJdfQ== */\n/*@ sourceURL=/Users/nuqu/Repositories/website/components/Layout.js */")))
  );
};
Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};

/***/ })

})
//# sourceMappingURL=_app.js.55d7a915d8f9ce766b77.hot-update.js.map
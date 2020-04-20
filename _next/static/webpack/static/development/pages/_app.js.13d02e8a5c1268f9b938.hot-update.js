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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]) + " " + "layout",
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    }, "TokenAnalyst"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
      rel: "shortcut icon",
      href: "/static/favicon.ico",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
      href: "/static/fonts/fonts.css",
      rel: "stylesheet",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("script", {
      src: "https://js.stripe.com/v3/",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("script", {
      src: "/static/js/hotjar.js",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("script", {
      type: "application/ld+json",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }
    }, STRUCTURED_DATA), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("script", {
      type: "text/javascript",
      src: "/static/charting_library/charting_library.min.js",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      name: "keywords",
      content: "blockchain, bitcoin, ethereum, data, on-chain, streaming, trading, inflow, outflow, exchange flows",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:title",
      content: "TokenAnalyst",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:type",
      content: "website",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:url",
      content: "https://www.tokenanalyst.io/",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:description",
      content: "TokenAnalyst is the leading provider of real-time and historical blockchain data.",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:image",
      content: "https://www.tokenanalyst.io/static/png/logo-open-graph.png",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:image:secure_url",
      content: "https://www.tokenanalyst.io/static/png/logo-open-graph.png",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:image:type",
      content: "image/png",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:image:width",
      content: "600",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:image:height",
      content: "315",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      property: "og:image:alt",
      content: "TokenAnalyst is the leading provider of real-time and historical blockchain data.",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
      name: "google-site-verification",
      content: "8zKrdD_6inTAzST2ucgyNW3NMZfGfkAKBz8Qky16lko",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]) + " " + "not-active-banner",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 7
      }
    }, "This website is not active anymore. We will inform you about our circumstances soon."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atomic_molecules_Nav__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]) + " " + "page",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 7
      }
    }, isWithDashboardTabs && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]) + " " + "metrics-nav",
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2409033678", [isWithDashboardTabs ? '40px' : '0px']]]) + " " + "main-content",
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
      id: "2409033678",
      dynamic: [isWithDashboardTabs ? '40px' : '0px'],
      __self: _this
    }, ".not-active-banner.__jsx-style-dynamic-selector{text-align:center;font-weight:bold;height:50px;width:100%;padding-top:15px;paddding-bottom:15px;background-color:white;position:fixed;z-index:2;}.page.__jsx-style-dynamic-selector{margin-left:10px;margin-right:10px;padding-top:120px;min-height:700px;}.metrics-nav.__jsx-style-dynamic-selector{position:fixed;background-color:white;z-index:1;width:100%;}.main-content.__jsx-style-dynamic-selector{padding-top:".concat(isWithDashboardTabs ? '40px' : '0px', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9udXF1L1JlcG9zaXRvcmllcy93ZWJzaXRlL2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1KUyxBQUc2QixBQVlDLEFBTUYsQUFNMEIsZUFMbEIsRUFOTCxDQVpILGlCQUNMLEFBWVEsR0FNUixHQUtaLE1BdEJXLENBa0JFLEtBTk0sS0FYRixDQWtCakIsV0FOQSxLQVhxQixxQkFDRSx1QkFDUixlQUNMLFVBRVoiLCJmaWxlIjoiL1VzZXJzL251cXUvUmVwb3NpdG9yaWVzL3dlYnNpdGUvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWltcG9ydHMgKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmltcG9ydCB7IE1ldHJpY3NOYXYgfSBmcm9tICcuL2F0b21pYy9tb2xlY3VsZXMvTWV0cmljc05hdic7XG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuL2F0b21pYy9tb2xlY3VsZXMvTmF2JztcbmltcG9ydCB7IE5ld3NsZXR0ZXIgfSBmcm9tICcuL2F0b21pYy9vcmdhbmlzbS9OZXdzbGV0dGVyJztcbmltcG9ydCB7IENvb2tpZUJhbm5lciB9IGZyb20gJy4vYXRvbWljL29yZ2FuaXNtL0Nvb2tpZUJhbm5lcic7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuL0Zvb3Rlcic7XG5pbXBvcnQgeyBDT09LSUVTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2Nvb2tpZXMnO1xuXG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvQGJsdWVwcmludGpzL2NvcmUvbGliL2Nzcy9ibHVlcHJpbnQuY3NzJztcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL0BibHVlcHJpbnRqcy9zZWxlY3QvbGliL2Nzcy9ibHVlcHJpbnQtc2VsZWN0LmNzcyc7XG5cbmNvbnN0IHRpZXJQYXJhbVN0cmluZyA9IGB0aWVyPSR7Q29va2llcy5nZXQoQ09PS0lFUy50aWVyKX1gO1xuY29uc3QgbWV0cmljc1RpZXJQYXJhbVN0cmluZyA9IGB0aWVyX21ldHJpY3M9JHtDb29raWVzLmdldChDT09LSUVTLnRpZXIpfWA7XG5cbmNvbnN0IFNUUlVDVFVSRURfREFUQSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgJ0Bjb250ZXh0JzogJ2h0dHA6Ly9zY2hlbWEub3JnJyxcbiAgJ0B0eXBlJzogJ09yZ2FuaXphdGlvbicsXG4gIG5hbWU6ICdUb2tlbkFuYWx5c3QnLFxuICBsb2dvOiAnaHR0cHM6Ly93d3cudG9rZW5hbmFseXN0LmlvL3N0YXRpYy9wbmcvbG9nb19kZXNrdG9wLnBuZycsXG4gIHVybDogJ2h0dHBzOi8vd3d3LnRva2VuYW5hbHlzdC5pbycsXG59KTtcblxuY29uc3QgV0lUSE9VVF9GT09URVIgPSBbXG4gICcvZXhjaGFuZ2UvW3Rva2VuXS9bZXhjaGFuZ2VdJyxcbiAgJy9taW5lci9bdG9rZW5dL1ttaW5lcl0nLFxuICAnL2luc2lnaHRzJyxcbl07XG5cbmNvbnN0IFdJVEhfREFTSEJPQVJEX1RBQlMgPSBbXG4gICcvZGFzaGJvYXJkJyxcbiAgJy9leGNoYW5nZS9bdG9rZW5dL1tleGNoYW5nZV0nLFxuICAnL21pbmVyL1t0b2tlbl0vW21pbmVyXScsXG4gICcvaW5zaWdodHMnLFxuICAnL2FuYWx5dGljcycsXG5dO1xuXG5jb25zdCB0YWJzID0gW1xuICB7XG4gICAgdGV4dDogJ0Rhc2hib2FyZCcsXG4gICAgcm91dGU6ICcvZGFzaGJvYXJkJyxcbiAgICBsaW5rOiAnL2Rhc2hib2FyZCcsXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnRXhjaGFuZ2UgRmxvd3MnLFxuICAgIHJvdXRlOiAnL2V4Y2hhbmdlL1t0b2tlbl0vW2V4Y2hhbmdlXScsXG4gICAgbGluazogYC9leGNoYW5nZS9CVEMvQmluYW5jZT8ke3RpZXJQYXJhbVN0cmluZ31gLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ01pbmVyIFN0YXRzJyxcbiAgICByb3V0ZTogJy9taW5lci9bdG9rZW5dL1ttaW5lcl0nLFxuICAgIGxpbms6IGAvbWluZXIvQlRDL2FudHBvb2w/JHt0aWVyUGFyYW1TdHJpbmd9YCxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdOZXR3b3JrIFN0YXRzJyxcbiAgICByb3V0ZTogJy9pbnNpZ2h0cycsXG4gICAgbGluazogYC9pbnNpZ2h0cz8ke21ldHJpY3NUaWVyUGFyYW1TdHJpbmd9YCxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICcgJyxcbiAgICByb3V0ZTogJy9hbmFseXRpY3MnLFxuICAgIGxpbms6ICcvYW5hbHl0aWNzJyxcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcm91dGUgfSA9IHJvdXRlcjtcblxuICBjb25zdCBpc1dpdGhGb290ZXIgPSAhV0lUSE9VVF9GT09URVIuaW5jbHVkZXMocm91dGUpO1xuXG4gIGNvbnN0IGlzV2l0aERhc2hib2FyZFRhYnMgPSBXSVRIX0RBU0hCT0FSRF9UQUJTLmluY2x1ZGVzKHJvdXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlIGtleT1cInRpdGxlXCI+VG9rZW5BbmFseXN0PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvZm9udHMvZm9udHMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9qcy5zdHJpcGUuY29tL3YzL1wiIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiL3N0YXRpYy9qcy9ob3RqYXIuanNcIiAvPlxuXG4gICAgICAgIDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIj57U1RSVUNUVVJFRF9EQVRBfTwvc2NyaXB0PlxuXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgICBzcmM9XCIvc3RhdGljL2NoYXJ0aW5nX2xpYnJhcnkvY2hhcnRpbmdfbGlicmFyeS5taW4uanNcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxtZXRhXG4gICAgICAgICAga2V5PVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkFjY2VzcyBjb21wcmVoZW5zaXZlIHJlYWwtdGltZSBhbmQgaGlzdG9yaWNhbCBibG9ja2NoYWluIGRhdGEgaW5jbHVkaW5nIGV4Y2hhbmdlIGZsb3dzLCB2b2x1bWVzLCBhbmQgb3RoZXIga2V5IHRyYWRpbmcgbWV0cmljcy5cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJrZXl3b3Jkc1wiXG4gICAgICAgICAgY29udGVudD1cImJsb2NrY2hhaW4sIGJpdGNvaW4sIGV0aGVyZXVtLCBkYXRhLCBvbi1jaGFpbiwgc3RyZWFtaW5nLCB0cmFkaW5nLCBpbmZsb3csIG91dGZsb3csIGV4Y2hhbmdlIGZsb3dzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJUb2tlbkFuYWx5c3RcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vd3d3LnRva2VuYW5hbHlzdC5pby9cIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJUb2tlbkFuYWx5c3QgaXMgdGhlIGxlYWRpbmcgcHJvdmlkZXIgb2YgcmVhbC10aW1lIGFuZCBoaXN0b3JpY2FsIGJsb2NrY2hhaW4gZGF0YS5cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3d3dy50b2tlbmFuYWx5c3QuaW8vc3RhdGljL3BuZy9sb2dvLW9wZW4tZ3JhcGgucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlOnNlY3VyZV91cmxcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3d3dy50b2tlbmFuYWx5c3QuaW8vc3RhdGljL3BuZy9sb2dvLW9wZW4tZ3JhcGgucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgY29udGVudD1cImltYWdlL3BuZ1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiNjAwXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiMzE1XCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlOmFsdFwiXG4gICAgICAgICAgY29udGVudD1cIlRva2VuQW5hbHlzdCBpcyB0aGUgbGVhZGluZyBwcm92aWRlciBvZiByZWFsLXRpbWUgYW5kIGhpc3RvcmljYWwgYmxvY2tjaGFpbiBkYXRhLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZ29vZ2xlLXNpdGUtdmVyaWZpY2F0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiOHpLcmREXzZpblRBelNUMnVjZ3lOVzNOTVpmR2ZrQUtCejhRa3kxNmxrb1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdC1hY3RpdmUtYmFubmVyXCI+VGhpcyB3ZWJzaXRlIGlzIG5vdCBhY3RpdmUgYW55bW9yZS4gV2Ugd2lsbCBpbmZvcm0geW91IGFib3V0IG91ciBjaXJjdW1zdGFuY2VzIHNvb24uPC9kaXY+XG4gICAgICA8TmF2IC8+XG4gICAgICA8TmV3c2xldHRlciAvPlxuICAgICAgPENvb2tpZUJhbm5lciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgIHtpc1dpdGhEYXNoYm9hcmRUYWJzICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldHJpY3MtbmF2XCI+XG4gICAgICAgICAgICA8TWV0cmljc05hdiB0YWJzPXt0YWJzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNXaXRoRm9vdGVyICYmIDxGb290ZXIgLz59XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAubm90LWFjdGl2ZS1iYW5uZXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgcGFkZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgICAucGFnZSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjBweDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWV0cmljcy1uYXYge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6ICR7aXNXaXRoRGFzaGJvYXJkVGFicyA/ICc0MHB4JyA6ICcwcHgnfTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuIl19 */\n/*@ sourceURL=/Users/nuqu/Repositories/website/components/Layout.js */")))
  );
};
Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};

/***/ })

})
//# sourceMappingURL=_app.js.13d02e8a5c1268f9b938.hot-update.js.map
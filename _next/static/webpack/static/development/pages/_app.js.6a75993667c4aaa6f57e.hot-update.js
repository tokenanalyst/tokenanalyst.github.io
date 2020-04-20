webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/atomic/molecules/MetricsNav/MetricsNav.js":
/*!**************************************************************!*\
  !*** ./components/atomic/molecules/MetricsNav/MetricsNav.js ***!
  \**************************************************************/
/*! exports provided: MetricsNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsNav", function() { return MetricsNav; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _atoms_TabDesktop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/TabDesktop */ "./components/atomic/atoms/TabDesktop/index.js");
/* harmony import */ var _atoms_TabMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/TabMobile */ "./components/atomic/atoms/TabMobile/index.js");


var _this = undefined,
    _jsxFileName = "/Users/nuqu/Repositories/website/components/atomic/molecules/MetricsNav/MetricsNav.js";









var MetricsNav = function MetricsNav(_ref) {
  var tabs = _ref.tabs;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var route = router.route;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var activeTab = lodash_find__WEBPACK_IMPORTED_MODULE_6___default()(tabs, function (o) {
    return o.route === route;
  });
  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-2710589739" + " " + "tabs",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-2710589739" + " " + "container-desktop",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, tabs.map(function (tab) {
      var isSelected = tab.route.includes(route);
      var text = tab.text,
          route = tab.route,
          link = tab.link;
      return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms_TabDesktop__WEBPACK_IMPORTED_MODULE_7__["TabDesktop"], {
          key: text,
          text: text,
          route: route,
          link: link,
          selected: isSelected,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }
        })
      );
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-2710589739" + " " + "container-mobile",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Popover"], {
      isOpen: isMenuOpen,
      minimal: true,
      position: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Position"].BOTTOM,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      onClick: function onClick() {
        return setIsMenuOpen(function (status) {
          return !status;
        });
      },
      onKeyDown: function onKeyDown() {
        return setIsMenuOpen(function (status) {
          return !status;
        });
      },
      role: "button",
      tabIndex: 0,
      className: "jsx-2710589739" + " " + "mobile-selected-metric",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-2710589739" + " " + "mobile-selected-metric-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      icon: isMenuOpen ? 'chevron-up' : 'chevron-down',
      iconSize: 20,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-2710589739",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms_TabMobile__WEBPACK_IMPORTED_MODULE_8__["TabMobile"], {
      key: activeTab.text,
      text: activeTab.text,
      link: activeTab.link,
      selected: true,
      disabled: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-2710589739" + " " + "mobile-menu-list",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, tabs.map(function (tab) {
      var text = tab.text,
          link = tab.link;
      return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          key: text,
          className: "jsx-2710589739" + " " + "mobile-menu-item",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 19
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_atoms_TabMobile__WEBPACK_IMPORTED_MODULE_8__["TabMobile"], {
          key: text,
          text: text,
          link: link,
          selected: text !== activeTab.text,
          onClick: function onClick() {
            return setIsMenuOpen(function (status) {
              return !status;
            });
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }
        }))
      );
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2710589739",
      __self: _this
    }, ".tabs.jsx-2710589739{margin-top:10px;margin-right:-10px;margin-left:-10px;padding-bottom:10px;border-bottom:1px solid rgba(151,151,151,0.15);}.container-desktop.jsx-2710589739{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:20px;margin-left:20px;}.container-mobile.jsx-2710589739{display:none;margin-right:10px;margin-left:10px;}.mobile-selected-metric.jsx-2710589739{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.mobile-selected-metric-icon.jsx-2710589739{padding-right:5px;}.mobile-menu-list.jsx-2710589739{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding-top:20px;padding-bottom:10px;padding-left:20px;padding-right:20px;background-color:white;}.mobile-menu-item.jsx-2710589739{padding-bottom:5px;}@media only screen and (max-width:769px){.container-desktop.jsx-2710589739{display:none;}.container-mobile.jsx-2710589739{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9udXF1L1JlcG9zaXRvcmllcy93ZWJzaXRlL2NvbXBvbmVudHMvYXRvbWljL21vbGVjdWxlcy9NZXRyaWNzTmF2L01ldHJpY3NOYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZTLEFBRzZCLEFBT0gsQUFLQSxBQUtBLEFBR0ssQUFHTCxBQVNNLEFBSUosQUFHQSxhQTFCRyxBQXdCbEIsR0FwQ21CLEVBb0JyQixDQVlBLFlBbkJtQixJQVpDLGFBYXBCLEtBWnNCLG9CQUM4QixDQUloQyxBQVVwQixBQU13QixBQWdCdEIsa0JBL0JpQixpQkFDbkIsV0FMQSxnQ0FvQm1CLGlCQUNHLG9CQUNGLGtCQUNDLG1CQUNJLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvbnVxdS9SZXBvc2l0b3JpZXMvd2Vic2l0ZS9jb21wb25lbnRzL2F0b21pYy9tb2xlY3VsZXMvTWV0cmljc05hdi9NZXRyaWNzTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFBvcG92ZXIsIFBvc2l0aW9uLCBJY29uIH0gZnJvbSAnQGJsdWVwcmludGpzL2NvcmUnO1xuaW1wb3J0IGZpbmQgZnJvbSAnbG9kYXNoL2ZpbmQnO1xuXG5pbXBvcnQgeyBUYWJEZXNrdG9wIH0gZnJvbSAnLi4vLi4vYXRvbXMvVGFiRGVza3RvcCc7XG5pbXBvcnQgeyBUYWJNb2JpbGUgfSBmcm9tICcuLi8uLi9hdG9tcy9UYWJNb2JpbGUnO1xuXG5leHBvcnQgY29uc3QgTWV0cmljc05hdiA9ICh7IHRhYnMgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyByb3V0ZSB9ID0gcm91dGVyO1xuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGFjdGl2ZVRhYiA9IGZpbmQodGFicywgbyA9PiBvLnJvdXRlID09PSByb3V0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWRlc2t0b3BcIj5cbiAgICAgICAgICB7dGFicy5tYXAodGFiID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB0YWIucm91dGUuaW5jbHVkZXMocm91dGUpO1xuICAgICAgICAgICAgY29uc3QgeyB0ZXh0LCByb3V0ZSwgbGluayB9ID0gdGFiO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VGFiRGVza3RvcFxuICAgICAgICAgICAgICAgIGtleT17dGV4dH1cbiAgICAgICAgICAgICAgICB0ZXh0PXt0ZXh0fVxuICAgICAgICAgICAgICAgIHJvdXRlPXtyb3V0ZX1cbiAgICAgICAgICAgICAgICBsaW5rPXtsaW5rfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLW1vYmlsZVwiPlxuICAgICAgICAgIDxQb3BvdmVyIGlzT3Blbj17aXNNZW51T3Blbn0gbWluaW1hbCBwb3NpdGlvbj17UG9zaXRpb24uQk9UVE9NfT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9iaWxlLXNlbGVjdGVkLW1ldHJpY1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWVudU9wZW4oc3RhdHVzID0+ICFzdGF0dXMpfVxuICAgICAgICAgICAgICBvbktleURvd249eygpID0+IHNldElzTWVudU9wZW4oc3RhdHVzID0+ICFzdGF0dXMpfVxuICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXNlbGVjdGVkLW1ldHJpYy1pY29uXCI+XG4gICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgIGljb249e2lzTWVudU9wZW4gPyAnY2hldnJvbi11cCcgOiAnY2hldnJvbi1kb3duJ31cbiAgICAgICAgICAgICAgICAgIGljb25TaXplPXsyMH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8VGFiTW9iaWxlXG4gICAgICAgICAgICAgICAgICBrZXk9e2FjdGl2ZVRhYi50ZXh0fVxuICAgICAgICAgICAgICAgICAgdGV4dD17YWN0aXZlVGFiLnRleHR9XG4gICAgICAgICAgICAgICAgICBsaW5rPXthY3RpdmVUYWIubGlua31cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtbGlzdFwiPlxuICAgICAgICAgICAgICB7dGFicy5tYXAodGFiID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRleHQsIGxpbmsgfSA9IHRhYjtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWl0ZW1cIiBrZXk9e3RleHR9PlxuICAgICAgICAgICAgICAgICAgICA8VGFiTW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGV4dCAhPT0gYWN0aXZlVGFiLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNZW51T3BlbihzdGF0dXMgPT4gIXN0YXR1cyl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnRhYnMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE1MSwgMTUxLCAxNTEsIDAuMTUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyLWRlc2t0b3Age1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyLW1vYmlsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtc2VsZWN0ZWQtbWV0cmljIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtc2VsZWN0ZWQtbWV0cmljLWljb24ge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9iaWxlLW1lbnUtbGlzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2JpbGUtbWVudS1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXItZGVza3RvcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyLW1vYmlsZSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbk1ldHJpY3NOYXYucHJvcFR5cGVzID0ge1xuICB0YWJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxufTtcblxuTWV0cmljc05hdi5kZWZhdWx0UHJvcHMgPSB7fTtcbiJdfQ== */\n/*@ sourceURL=/Users/nuqu/Repositories/website/components/atomic/molecules/MetricsNav/MetricsNav.js */"))
  );
};
MetricsNav.propTypes = {
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired
};
MetricsNav.defaultProps = {};

/***/ })

})
//# sourceMappingURL=_app.js.6a75993667c4aaa6f57e.hot-update.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/atomic/organism/ProChart/ProChart.js":
/*!*********************************************************!*\
  !*** ./components/atomic/organism/ProChart/ProChart.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/nuqu/Repositories/website/components/atomic/organism/ProChart/ProChart.js";





var tvWidget = null;

var ProChart = function ProChart(_ref) {
  var kaikoService = _ref.kaikoService,
      tradingViewOptions = _ref.tradingViewOptions,
      onChartRenderCb = _ref.onChartRenderCb;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    tvWidget = new TradingView.widget(tradingViewOptions);
    tvWidget.onChartReady(function () {
      var chart = tvWidget.chart();
      chart.setVisibleRange({
        from: 1583020800,
        to: 1585699200
      });
      onChartRenderCb(tvWidget); // Fired when the intervall is changed. We then set the time range shown on screen,
      // so for example, the last 2 hours

      chart.onIntervalChanged().subscribe(null, function (interval, obj) {
        var now = moment__WEBPACK_IMPORTED_MODULE_3___default()();

        switch (obj.timeframe) {
          case '2h':
            {
              var twoHoursBefore = now.subtract(2, 'hours').valueOf();
              chart.setVisibleRange({
                from: 1583020800,
                to: 1585699200
              });
              break;
            }

          case '6h':
            {
              var sixHoursBefore = now.subtract(6, 'hours').valueOf();
              chart.setVisibleRange({
                from: 1583020800,
                to: 1585699200
              });
              break;
            }

          case '1d':
            {
              var oneDayBefore = now.subtract(1, 'days').valueOf();
              chart.setVisibleRange({
                from: 1583020800,
                to: 1585699200
              });
              break;
            }

          default:
        }
      });
    });
    return function () {
      if (tvWidget !== null) {
        tvWidget.remove();
        tvWidget = null;
      }
    };
  }, [tradingViewOptions, kaikoService, onChartRenderCb]);
  return (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: tradingViewOptions.container_id,
      className: "jsx-760164936" + " " + "tvCharContainer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "760164936",
      __self: _this
    }, ".tvCharContainer.jsx-760164936{height:calc(100vh - 130px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9udXF1L1JlcG9zaXRvcmllcy93ZWJzaXRlL2NvbXBvbmVudHMvYXRvbWljL29yZ2FuaXNtL1Byb0NoYXJ0L1Byb0NoYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdFVyxBQUcwQywyQkFDN0IiLCJmaWxlIjoiL1VzZXJzL251cXUvUmVwb3NpdG9yaWVzL3dlYnNpdGUvY29tcG9uZW50cy9hdG9taWMvb3JnYW5pc20vUHJvQ2hhcnQvUHJvQ2hhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxubGV0IHR2V2lkZ2V0ID0gbnVsbDtcblxuY29uc3QgUHJvQ2hhcnQgPSAoeyBrYWlrb1NlcnZpY2UsIHRyYWRpbmdWaWV3T3B0aW9ucywgb25DaGFydFJlbmRlckNiIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0dldpZGdldCA9IG5ldyBUcmFkaW5nVmlldy53aWRnZXQodHJhZGluZ1ZpZXdPcHRpb25zKTtcblxuICAgIHR2V2lkZ2V0Lm9uQ2hhcnRSZWFkeSgoKSA9PiB7XG4gICAgICBjb25zdCBjaGFydCA9IHR2V2lkZ2V0LmNoYXJ0KCk7XG4gICAgICBjaGFydC5zZXRWaXNpYmxlUmFuZ2Uoe1xuICAgICAgICBmcm9tOiAxNTgzMDIwODAwLFxuICAgICAgICB0bzogMTU4NTY5OTIwMCxcbiAgICAgIH0pO1xuICAgICAgb25DaGFydFJlbmRlckNiKHR2V2lkZ2V0KTtcblxuICAgICAgLy8gRmlyZWQgd2hlbiB0aGUgaW50ZXJ2YWxsIGlzIGNoYW5nZWQuIFdlIHRoZW4gc2V0IHRoZSB0aW1lIHJhbmdlIHNob3duIG9uIHNjcmVlbixcbiAgICAgIC8vIHNvIGZvciBleGFtcGxlLCB0aGUgbGFzdCAyIGhvdXJzXG5cbiAgICAgIGNoYXJ0Lm9uSW50ZXJ2YWxDaGFuZ2VkKCkuc3Vic2NyaWJlKG51bGwsIChpbnRlcnZhbCwgb2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xuICAgICAgICBzd2l0Y2ggKG9iai50aW1lZnJhbWUpIHtcbiAgICAgICAgICBjYXNlICcyaCc6IHtcbiAgICAgICAgICAgIGNvbnN0IHR3b0hvdXJzQmVmb3JlID0gbm93LnN1YnRyYWN0KDIsICdob3VycycpLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIGNoYXJ0LnNldFZpc2libGVSYW5nZSh7XG4gICAgICAgICAgICAgIGZyb206IDE1ODMwMjA4MDAsXG4gICAgICAgICAgICAgIHRvOiAxNTg1Njk5MjAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAnNmgnOiB7XG4gICAgICAgICAgICBjb25zdCBzaXhIb3Vyc0JlZm9yZSA9IG5vdy5zdWJ0cmFjdCg2LCAnaG91cnMnKS52YWx1ZU9mKCk7XG4gICAgICAgICAgICBjaGFydC5zZXRWaXNpYmxlUmFuZ2Uoe1xuICAgICAgICAgICAgICBmcm9tOiAxNTgzMDIwODAwLFxuICAgICAgICAgICAgICB0bzogMTU4NTY5OTIwMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJzFkJzoge1xuICAgICAgICAgICAgY29uc3Qgb25lRGF5QmVmb3JlID0gbm93LnN1YnRyYWN0KDEsICdkYXlzJykudmFsdWVPZigpO1xuICAgICAgICAgICAgY2hhcnQuc2V0VmlzaWJsZVJhbmdlKHtcbiAgICAgICAgIGZyb206IDE1ODMwMjA4MDAsXG4gICAgICAgIHRvOiAxNTg1Njk5MjAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICh0dldpZGdldCAhPT0gbnVsbCkge1xuICAgICAgICB0dldpZGdldC5yZW1vdmUoKTtcbiAgICAgICAgdHZXaWRnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFt0cmFkaW5nVmlld09wdGlvbnMsIGthaWtvU2VydmljZSwgb25DaGFydFJlbmRlckNiXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBpZD17dHJhZGluZ1ZpZXdPcHRpb25zLmNvbnRhaW5lcl9pZH0gY2xhc3NOYW1lPVwidHZDaGFyQ29udGFpbmVyXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC50dkNoYXJDb250YWluZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUHJvQ2hhcnQucHJvcFR5cGVzID0ge1xuICBrYWlrb1NlcnZpY2U6IFByb3BUeXBlcy5vYmplY3RPZihcbiAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pXG4gICkuaXNSZXF1aXJlZCxcbiAgb25DaGFydFJlbmRlckNiOiBQcm9wVHlwZXMuZnVuYyxcbiAgdHJhZGluZ1ZpZXdPcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0T2YoXG4gICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmFycmF5LFxuICAgIF0pXG4gICkuaXNSZXF1aXJlZCxcbn07XG5cblByb0NoYXJ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DaGFydFJlbmRlckNiOiAoKSA9PiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvQ2hhcnQ7XG4iXX0= */\n/*@ sourceURL=/Users/nuqu/Repositories/website/components/atomic/organism/ProChart/ProChart.js */")))
  );
};

ProChart.propTypes = {
  kaikoService: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object])).isRequired,
  onChartRenderCb: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tradingViewOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array])).isRequired
};
ProChart.defaultProps = {
  onChartRenderCb: function onChartRenderCb() {
    return null;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProChart);

/***/ }),

/***/ "./components/atomic/organism/ProChart/index.js":
/*!******************************************************!*\
  !*** ./components/atomic/organism/ProChart/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProChart */ "./components/atomic/organism/ProChart/ProChart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ProChart__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

}]);
//# sourceMappingURL=1.js.map
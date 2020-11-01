webpackHotUpdate_N_E("pages/contact",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");









var _jsxFileName = "C:\\React\\app_react\\react-next-js\\pages\\contact.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Contact = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact, _Component);

  var _super = _createSuper(Contact);

  function Contact() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      name: '',
      email: '',
      subject: '',
      message: '',
      formSuccess: false,
      msg: ''
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onChangeInput", function (field, ev) {
      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, ev.target.value));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "sendMsg", function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          name = _this$state.name,
          email = _this$state.email,
          subject = _this$state.subject,
          message = _this$state.message; // console.log(name + '' + email)
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Jumbotron"], {
          fluid: true,
          className: "head-contact",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("style", {
            children: "\n                .head-contact{\n                padding-top:80px;\n                padding-bottom:80px;\n                background-color:#000;\n                color:#fff;\n                margin-bottom:0rem !important;\n                }\n                "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
              className: "display-4 text-center",
              children: "Contato"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Jumbotron"], {
          fluid: true,
          className: "contact",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("style", {
            children: "\n                .contact{\n                padding-top:80px;\n                padding-bottom:80px;\n                background-color:#fff;\n                margin-bottom:0rem !important;\n                }\n                "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
              onSubmit: this.sendMsg,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                  "for": "name",
                  children: "Nome: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
                  type: "text",
                  name: "name",
                  id: "name",
                  placeholder: "Nome completo",
                  onChange: function onChange(ev) {
                    return _this2.onChangeInput('name', ev);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                  "for": "email",
                  children: "E-mail: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
                  type: "email",
                  name: "email",
                  id: "email",
                  placeholder: "Seu melhor e-mail",
                  onChange: function onChange(ev) {
                    return _this2.onChangeInput('email', ev);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                  "for": "subject",
                  children: "Assunto: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
                  type: "text",
                  name: "subject",
                  id: "subject",
                  placeholder: "Informe o assunto",
                  onChange: function onChange(ev) {
                    return _this2.onChangeInput('subject', ev);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                  "for": "message",
                  children: "Mensagem: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 33
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Input"], {
                  type: "textarea",
                  name: "message",
                  id: "message",
                  placeholder: "Deixe uma mensagem",
                  onChange: function onChange(ev) {
                    return _this2.onChangeInput('message', ev);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
                type: "submit",
                color: "success",
                children: "Enviar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, this)]
      }, void 0, true);
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcyJdLCJuYW1lcyI6WyJDb250YWN0IiwibmFtZSIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJmb3JtU3VjY2VzcyIsIm1zZyIsImZpZWxkIiwiZXYiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwic2VuZE1zZyIsIm9uQ2hhbmdlSW5wdXQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7SUFFTUEsTzs7Ozs7Ozs7Ozs7Ozs7OztnTkFFTTtBQUNKQyxVQUFJLEVBQUUsRUFERjtBQUVKQyxXQUFLLEVBQUUsRUFGSDtBQUdKQyxhQUFPLEVBQUUsRUFITDtBQUlKQyxhQUFPLEVBQUUsRUFKTDtBQUtKQyxpQkFBVyxFQUFFLEtBTFQ7QUFNSkMsU0FBRyxFQUFFO0FBTkQsSzs7d05BU1EsVUFBQ0MsS0FBRCxFQUFRQyxFQUFSLEVBQWU7QUFDM0IsWUFBS0MsUUFBTCwrRkFBZ0JGLEtBQWhCLEVBQXdCQyxFQUFFLENBQUNFLE1BQUgsQ0FBVUMsS0FBbEM7QUFDSCxLOztrTkFDUyxVQUFBQyxLQUFLLEVBQUk7QUFDZkEsV0FBSyxDQUFDQyxjQUFOO0FBRGUsd0JBRXlCLE1BQUtDLEtBRjlCO0FBQUEsVUFFUmIsSUFGUSxlQUVSQSxJQUZRO0FBQUEsVUFFRkMsS0FGRSxlQUVGQSxLQUZFO0FBQUEsVUFFS0MsT0FGTCxlQUVLQSxPQUZMO0FBQUEsVUFFY0MsT0FGZCxlQUVjQSxPQUZkLEVBR2hCO0FBQ0YsSzs7Ozs7Ozs2QkFFUTtBQUFBOztBQUNMLDBCQUNJO0FBQUEsZ0NBQ0kscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLHFFQUFDLHFEQUFEO0FBQVcsZUFBSyxNQUFoQjtBQUFpQixtQkFBUyxFQUFDLGNB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QUFEO0FBQVEsb0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFLLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCSjtBQUFBLHNCQURKO0FBb0RIOzs7O0VBekVpQlMsK0M7O0FBNEVQakIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC4wMzE3ZmU3MGJkYzQyZWJhNTZiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcclxuXHJcbmltcG9ydCB7IEp1bWJvdHJvbiwgQ29udGFpbmVyLCBGb3JtLCBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgc3ViamVjdDogJycsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgZm9ybVN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIG1zZzogJydcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZUlucHV0ID0gKGZpZWxkLCBldikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tmaWVsZF06IGV2LnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBzZW5kTXNnID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIGVtYWlsLCBzdWJqZWN0LCBtZXNzYWdlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lICsgJycgKyBlbWFpbClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImhlYWQtY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZT57YFxyXG4gICAgICAgICAgICAgICAgLmhlYWQtY29udGFjdHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjgwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo4MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgdGV4dC1jZW50ZXJcIj5Db250YXRvPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPSdjb250YWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+e2BcclxuICAgICAgICAgICAgICAgIC5jb250YWN0e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6ODBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjgwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjByZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5zZW5kTXNnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIm5hbWVcIj5Ob21lOiA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOb21lIGNvbXBsZXRvXCIgb25DaGFuZ2U9eyhldik9PiB0aGlzLm9uQ2hhbmdlSW5wdXQoJ25hbWUnLGV2KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwiZW1haWxcIj5FLW1haWw6IDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIlNldSBtZWxob3IgZS1tYWlsXCIgb25DaGFuZ2U9eyhldik9PiB0aGlzLm9uQ2hhbmdlSW5wdXQoJ2VtYWlsJyxldil9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwic3ViamVjdFwiPkFzc3VudG86IDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN1YmplY3RcIiBpZD1cInN1YmplY3RcIiBwbGFjZWhvbGRlcj1cIkluZm9ybWUgbyBhc3N1bnRvXCIgb25DaGFuZ2U9eyhldik9PiB0aGlzLm9uQ2hhbmdlSW5wdXQoJ3N1YmplY3QnLGV2KX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJtZXNzYWdlXCI+TWVuc2FnZW06IDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIG5hbWU9XCJtZXNzYWdlXCIgaWQ9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJEZWl4ZSB1bWEgbWVuc2FnZW1cIiBvbkNoYW5nZT17KGV2KT0+IHRoaXMub25DaGFuZ2VJbnB1dCgnbWVzc2FnZScsZXYpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cInN1Y2Nlc3NcIj5FbnZpYXI8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdCJdLCJzb3VyY2VSb290IjoiIn0=
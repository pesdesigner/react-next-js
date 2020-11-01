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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);









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

      axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('http://localhost:8080/contact', {
        name: name,
        email: email,
        subject: subject,
        message: message
      }).then(function (res) {
        // console.log(res)
        _this.setState({
          formSuccess: true
        });

        _this.setState({
          msg: res.data.message
        });
      });
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
          lineNumber: 35,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Jumbotron"], {
          fluid: true,
          className: "head-contact",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("style", {
            children: "\n                .head-contact{\n                padding-top:80px;\n                padding-bottom:80px;\n                background-color:#000;\n                color:#fff;\n                margin-bottom:0rem !important;\n                }\n                "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
              className: "display-4 text-center",
              children: "Contato"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Jumbotron"], {
          fluid: true,
          className: "contact",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("style", {
            children: "\n                .contact{\n                padding-top:80px;\n                padding-bottom:80px;\n                background-color:#fff;\n                margin-bottom:0rem !important;\n                }\n                "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
            children: [formSuccess, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
              onSubmit: this.sendMsg,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                  "for": "name",
                  children: "Nome: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
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
                  lineNumber: 65,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                  "for": "email",
                  children: "E-mail: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
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
                  lineNumber: 69,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                  "for": "subject",
                  children: "Assunto: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
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
                  lineNumber: 73,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                  "for": "message",
                  children: "Mensagem: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
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
                  lineNumber: 77,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
                type: "submit",
                color: "success",
                children: "Enviar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcyJdLCJuYW1lcyI6WyJDb250YWN0IiwibmFtZSIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJmb3JtU3VjY2VzcyIsIm1zZyIsImZpZWxkIiwiZXYiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwiQXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzZW5kTXNnIiwib25DaGFuZ2VJbnB1dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7SUFFTUEsTzs7Ozs7Ozs7Ozs7Ozs7OztnTkFFTTtBQUNKQyxVQUFJLEVBQUUsRUFERjtBQUVKQyxXQUFLLEVBQUUsRUFGSDtBQUdKQyxhQUFPLEVBQUUsRUFITDtBQUlKQyxhQUFPLEVBQUUsRUFKTDtBQUtKQyxpQkFBVyxFQUFFLEtBTFQ7QUFNSkMsU0FBRyxFQUFFO0FBTkQsSzs7d05BU1EsVUFBQ0MsS0FBRCxFQUFRQyxFQUFSLEVBQWU7QUFDM0IsWUFBS0MsUUFBTCwrRkFBZ0JGLEtBQWhCLEVBQXdCQyxFQUFFLENBQUNFLE1BQUgsQ0FBVUMsS0FBbEM7QUFDSCxLOztrTkFDUyxVQUFBQyxLQUFLLEVBQUk7QUFDZkEsV0FBSyxDQUFDQyxjQUFOO0FBRGUsd0JBRXlCLE1BQUtDLEtBRjlCO0FBQUEsVUFFUmIsSUFGUSxlQUVSQSxJQUZRO0FBQUEsVUFFRkMsS0FGRSxlQUVGQSxLQUZFO0FBQUEsVUFFS0MsT0FGTCxlQUVLQSxPQUZMO0FBQUEsVUFFY0MsT0FGZCxlQUVjQSxPQUZkLEVBR2hCOztBQUNBVyxtREFBSyxDQUFDQyxJQUFOLENBQVcsK0JBQVgsRUFBMkM7QUFBQ2YsWUFBSSxFQUFKQSxJQUFEO0FBQU9DLGFBQUssRUFBTEEsS0FBUDtBQUFjQyxlQUFP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QUMscURBQUQ7QUFBQSx3Q0FDSSxxRUFBQyxpREFBRDtBQUFPLHlCQUFJLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSSxxRUFBQyxpREFBRDtBQUFPLHNCQUFJLEVBQUMsVUFBWjtBQUF1QixzQkFBSSxFQUFDLFNBQTVCO0FBQXNDLG9CQUFFLEVBQUMsU0FBekM7QUFBbUQsNkJBQVcsRUFBQyxvQkFBL0Q7QUFBb0YsMEJBQVEsRUFBRSxrQkFBQ0EsRUFBRDtBQUFBLDJCQUFPLE1BQUksQ0FBQ2EsYUFBTCxDQUFtQixTQUFuQixFQUE2QmIsRUFBN0IsQ0FBUDtBQUFBO0FBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWJKLGVBa0JJLHFFQUFDLGtEQUFEO0FBQVEsb0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFLLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCSjtBQUFBLHNCQURKO0FBcURIOzs7O0VBL0VpQmMsK0M7O0FBa0ZQdEIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC45ZTUwNjE2ODdiMjQyNTk1YTA2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcclxuXHJcbmltcG9ydCB7IEp1bWJvdHJvbiwgQ29udGFpbmVyLCBGb3JtLCBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgc3ViamVjdDogJycsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgZm9ybVN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICAgIG1zZzogJydcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZUlucHV0ID0gKGZpZWxkLCBldikgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tmaWVsZF06IGV2LnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBzZW5kTXNnID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qge25hbWUsIGVtYWlsLCBzdWJqZWN0LCBtZXNzYWdlfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lICsgJycgKyBlbWFpbClcclxuICAgICAgIEF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jb250YWN0Jyx7bmFtZSwgZW1haWwsIHN1YmplY3QsIG1lc3NhZ2V9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtU3VjY2VzczogdHJ1ZX0pXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHttc2c6IHJlcy5kYXRhLm1lc3NhZ2V9KVxyXG4gICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImhlYWQtY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZT57YFxyXG4gICAgICAgICAgICAgICAgLmhlYWQtY29udGFjdHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjgwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo4MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgdGV4dC1jZW50ZXJcIj5Db250YXRvPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPSdjb250YWN0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+e2BcclxuICAgICAgICAgICAgICAgIC5jb250YWN0e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6ODBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjgwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjByZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybVN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLnNlbmRNc2d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwibmFtZVwiPk5vbWU6IDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5vbWUgY29tcGxldG9cIiBvbkNoYW5nZT17KGV2KT0+IHRoaXMub25DaGFuZ2VJbnB1dCgnbmFtZScsZXYpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJlbWFpbFwiPkUtbWFpbDogPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiU2V1IG1lbGhvciBlLW1haWxcIiBvbkNoYW5nZT17KGV2KT0+IHRoaXMub25DaGFuZ2VJbnB1dCgnZW1haWwnLGV2KX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJzdWJqZWN0XCI+QXNzdW50bzogPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3ViamVjdFwiIGlkPVwic3ViamVjdFwiIHBsYWNlaG9sZGVyPVwiSW5mb3JtZSBvIGFzc3VudG9cIiBvbkNoYW5nZT17KGV2KT0+IHRoaXMub25DaGFuZ2VJbnB1dCgnc3ViamVjdCcsZXYpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cIm1lc3NhZ2VcIj5NZW5zYWdlbTogPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCIgbmFtZT1cIm1lc3NhZ2VcIiBpZD1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIkRlaXhlIHVtYSBtZW5zYWdlbVwiIG9uQ2hhbmdlPXsoZXYpPT4gdGhpcy5vbkNoYW5nZUlucHV0KCdtZXNzYWdlJyxldil9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwic3VjY2Vzc1wiPkVudmlhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Il0sInNvdXJjZVJvb3QiOiIifQ==
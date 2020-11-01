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

      var _this$set = this.set,
          formSuccess = _this$set.formSuccess,
          msg = _this$set.msg;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Jumbotron"], {
          fluid: true,
          className: "head-contact",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("style", {
            children: "\n                .head-contact{\n                padding-top:80px;\n                padding-bottom:80px;\n                background-color:#000;\n                color:#fff;\n                margin-bottom:0rem !important;\n                }\n                "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
              className: "display-4 text-center",
              children: "Contato"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Jumbotron"], {
          fluid: true,
          className: "contact",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("style", {
            children: "\n                .contact{\n                padding-top:80px;\n                padding-bottom:80px;\n                background-color:#fff;\n                margin-bottom:0rem !important;\n                }\n                "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
            children: [formSuccess ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "alert alert-success",
              children: msg
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 40
            }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
              onSubmit: this.sendMsg,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                  "for": "name",
                  children: "Nome: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
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
                  lineNumber: 66,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                  "for": "email",
                  children: "E-mail: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
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
                  lineNumber: 70,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                  "for": "subject",
                  children: "Assunto: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
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
                  lineNumber: 74,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["FormGroup"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Label"], {
                  "for": "message",
                  children: "Mensagem: "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
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
                  lineNumber: 78,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
                type: "submit",
                color: "success",
                children: "Enviar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcyJdLCJuYW1lcyI6WyJDb250YWN0IiwibmFtZSIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJmb3JtU3VjY2VzcyIsIm1zZyIsImZpZWxkIiwiZXYiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwiQXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzZXQiLCJzZW5kTXNnIiwib25DaGFuZ2VJbnB1dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7SUFFTUEsTzs7Ozs7Ozs7Ozs7Ozs7OztnTkFFTTtBQUNKQyxVQUFJLEVBQUUsRUFERjtBQUVKQyxXQUFLLEVBQUUsRUFGSDtBQUdKQyxhQUFPLEVBQUUsRUFITDtBQUlKQyxhQUFPLEVBQUUsRUFKTDtBQUtKQyxpQkFBVyxFQUFFLEtBTFQ7QUFNSkMsU0FBRyxFQUFFO0FBTkQsSzs7d05BU1EsVUFBQ0MsS0FBRCxFQUFRQyxFQUFSLEVBQWU7QUFDM0IsWUFBS0MsUUFBTCwrRkFBZ0JGLEtBQWhCLEVBQXdCQyxFQUFFLENBQUNFLE1BQUgsQ0FBVUMsS0FBbEM7QUFDSCxLOztrTkFDUyxVQUFBQyxLQUFLLEVBQUk7QUFDZkEsV0FBSyxDQUFDQyxjQUFOO0FBRGUsd0JBRXlCLE1BQUtDLEtBRjlCO0FBQUEsVUFFUmIsSUFGUSxlQUVSQSxJQUZRO0FBQUEsVUFFRkMsS0FGRSxlQUVGQSxLQUZFO0FBQUEsVUFFS0MsT0FGTCxlQUVLQSxPQUZMO0FBQUEsVUFFY0MsT0FGZCxlQUVjQSxPQUZkLEVBR2hCOztBQUNBVyxtREFBSyxDQUFDQyxJQUFOLENBQVcsK0JBQVgsRUFBMkM7QUFBQ2YsWUFBSSxFQUFKQSxJQUFEO0FBQU9DLGFBQUssRUFBTEEsS0FBUDtBQUFj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LG1CQUEzRDtBQUErRSwwQkFBUSxFQUFFLGtCQUFDQSxFQUFEO0FBQUEsMkJBQU8sTUFBSSxDQUFDYyxhQUFMLENBQW1CLFNBQW5CLEVBQTZCZCxFQUE3QixDQUFQO0FBQUE7QUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVEosZUFhSSxxRUFBQyxxREFBRDtBQUFBLHdDQUNJLHFFQUFDLGlEQUFEO0FBQU8seUJBQUksU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUVJLHFFQUFDLGlEQUFEO0FBQU8sc0JBQUksRUFBQyxVQUFaO0FBQXVCLHNCQUFJLEVBQUMsU0FBNUI7QUFBc0Msb0JBQUUsRUFBQyxTQUF6QztBQUFtRCw2QkFBVyxFQUFDLG9CQUEvRDtBQUFvRiwwQkFBUSxFQUFFLGtCQUFDQSxFQUFEO0FBQUEsMkJBQU8sTUFBSSxDQUFDYyxhQUFMLENBQW1CLFNBQW5CLEVBQTZCZCxFQUE3QixDQUFQO0FBQUE7QUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBYkosZUFrQkkscUVBQUMsa0RBQUQ7QUFBUSxvQkFBSSxFQUFDLFFBQWI7QUFBc0IscUJBQUssRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJKO0FBQUEsc0JBREo7QUFxREg7Ozs7RUFoRmlCZSwrQzs7QUFtRlB2QixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0LmY3MjhhN2I2NzE0NDIyMGFhODYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xyXG5cclxuaW1wb3J0IHsgSnVtYm90cm9uLCBDb250YWluZXIsIEZvcm0sIEZvcm1Hcm91cCwgTGFiZWwsIElucHV0LCBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBzdWJqZWN0OiAnJyxcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICBmb3JtU3VjY2VzczogZmFsc2UsXHJcbiAgICAgICAgbXNnOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlSW5wdXQgPSAoZmllbGQsIGV2KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W2ZpZWxkXTogZXYudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuICAgIHNlbmRNc2cgPSBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7bmFtZSwgZW1haWwsIHN1YmplY3QsIG1lc3NhZ2V9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWUgKyAnJyArIGVtYWlsKVxyXG4gICAgICAgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NvbnRhY3QnLHtuYW1lLCBlbWFpbCwgc3ViamVjdCwgbWVzc2FnZX0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zvcm1TdWNjZXNzOiB0cnVlfSlcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21zZzogcmVzLmRhdGEubWVzc2FnZX0pXHJcbiAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7Zm9ybVN1Y2Nlc3MsIG1zZ30gPSB0aGlzLnNldFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgICAgICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJoZWFkLWNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkLWNvbnRhY3R7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo4MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ODBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjByZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00IHRleHQtY2VudGVyXCI+Q29udGF0bzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT0nY29udGFjdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlPntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjgwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo4MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1TdWNjZXNzID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+e21zZ308L2Rpdj4gOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuc2VuZE1zZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJuYW1lXCI+Tm9tZTogPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTm9tZSBjb21wbGV0b1wiIG9uQ2hhbmdlPXsoZXYpPT4gdGhpcy5vbkNoYW5nZUlucHV0KCduYW1lJyxldil9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cImVtYWlsXCI+RS1tYWlsOiA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJTZXUgbWVsaG9yIGUtbWFpbFwiIG9uQ2hhbmdlPXsoZXYpPT4gdGhpcy5vbkNoYW5nZUlucHV0KCdlbWFpbCcsZXYpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGZvcj1cInN1YmplY3RcIj5Bc3N1bnRvOiA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdWJqZWN0XCIgaWQ9XCJzdWJqZWN0XCIgcGxhY2Vob2xkZXI9XCJJbmZvcm1lIG8gYXNzdW50b1wiIG9uQ2hhbmdlPXsoZXYpPT4gdGhpcy5vbkNoYW5nZUlucHV0KCdzdWJqZWN0Jyxldil9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwibWVzc2FnZVwiPk1lbnNhZ2VtOiA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBuYW1lPVwibWVzc2FnZVwiIGlkPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiRGVpeGUgdW1hIG1lbnNhZ2VtXCIgb25DaGFuZ2U9eyhldik9PiB0aGlzLm9uQ2hhbmdlSW5wdXQoJ21lc3NhZ2UnLGV2KX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJzdWNjZXNzXCI+RW52aWFyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3QiXSwic291cmNlUm9vdCI6IiJ9
(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\forbi\Documents\fontes\frontend\clientes-app\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0QXA":
    /*!*******************************************************!*\
      !*** ./src/app/template/sidebar/sidebar.component.ts ***!
      \*******************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function QXA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent() {
          _classCallCheck(this, SidebarComponent);
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.??fac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)();
      };

      SidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 70,
        vars: 0,
        consts: [["id", "layoutSidenav_nav"], ["id", "sidenavAccordion", 1, "sb-sidenav", "accordion", "sb-sidenav-dark"], [1, "sb-sidenav-menu"], [1, "nav"], [1, "sb-sidenav-menu-heading"], ["href", "index.html", 1, "nav-link"], [1, "sb-nav-link-icon"], [1, "fas", "fa-tachometer-alt"], ["href", "#", "data-toggle", "collapse", "data-target", "#collapseLayouts", "aria-expanded", "false", "aria-controls", "collapseLayouts", 1, "nav-link", "collapsed"], [1, "fas", "fa-columns"], [1, "sb-sidenav-collapse-arrow"], [1, "fas", "fa-angle-down"], ["id", "collapseLayouts", "aria-labelledby", "headingOne", "data-parent", "#sidenavAccordion", 1, "collapse"], [1, "sb-sidenav-menu-nested", "nav"], ["href", "layout-static.html", 1, "nav-link"], ["href", "layout-sidenav-light.html", 1, "nav-link"], ["href", "#", "data-toggle", "collapse", "data-target", "#collapsePages", "aria-expanded", "false", "aria-controls", "collapsePages", 1, "nav-link", "collapsed"], [1, "fas", "fa-book-open"], ["id", "collapsePages", "aria-labelledby", "headingTwo", "data-parent", "#sidenavAccordion", 1, "collapse"], ["id", "sidenavAccordionPages", 1, "sb-sidenav-menu-nested", "nav", "accordion"], ["href", "#", "data-toggle", "collapse", "data-target", "#pagesCollapseAuth", "aria-expanded", "false", "aria-controls", "pagesCollapseAuth", 1, "nav-link", "collapsed"], ["id", "pagesCollapseAuth", "aria-labelledby", "headingOne", "data-parent", "#sidenavAccordionPages", 1, "collapse"], ["href", "login.html", 1, "nav-link"], ["href", "register.html", 1, "nav-link"], ["href", "password.html", 1, "nav-link"], ["href", "#", "data-toggle", "collapse", "data-target", "#pagesCollapseError", "aria-expanded", "false", "aria-controls", "pagesCollapseError", 1, "nav-link", "collapsed"], ["id", "pagesCollapseError", "aria-labelledby", "headingOne", "data-parent", "#sidenavAccordionPages", 1, "collapse"], ["href", "401.html", 1, "nav-link"], ["href", "404.html", 1, "nav-link"], ["href", "500.html", 1, "nav-link"], ["href", "charts.html", 1, "nav-link"], [1, "fas", "fa-chart-area"], ["href", "tables.html", 1, "nav-link"], [1, "fas", "fa-table"], [1, "sb-sidenav-footer"], [1, "small"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Core");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Interface");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Layouts ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "nav", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Static Navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Light Sidenav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Pages ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "nav", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Authentication ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "nav", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Forgot Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Error ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "nav", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "401 Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "404 Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "500 Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Addons");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " Charts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " Tables");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Logged in as:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Start Bootstrap ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "3HbQ":
    /*!*********************************************!*\
      !*** ./src/app/clientes/clientes.module.ts ***!
      \*********************************************/

    /*! exports provided: ClientesModule */

    /***/
    function HbQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientesModule", function () {
        return ClientesModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./clientes-routing.module */
      "A1Qv");
      /* harmony import */


      var _clientes_form_clientes_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./clientes-form/clientes-form.component */
      "MPBQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ClientesModule = function ClientesModule() {
        _classCallCheck(this, ClientesModule);
      };

      ClientesModule.??fac = function ClientesModule_Factory(t) {
        return new (t || ClientesModule)();
      };

      ClientesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: ClientesModule
      });
      ClientesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _clientes_routing_module__WEBPACK_IMPORTED_MODULE_1__["ClientesRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](ClientesModule, {
          declarations: [_clientes_form_clientes_form_component__WEBPACK_IMPORTED_MODULE_2__["ClientesFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _clientes_routing_module__WEBPACK_IMPORTED_MODULE_1__["ClientesRoutingModule"]],
          exports: [_clientes_form_clientes_form_component__WEBPACK_IMPORTED_MODULE_2__["ClientesFormComponent"]]
        });
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.??fac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 5,
        vars: 0,
        consts: [[1, "mt-4"], [1, "breadcrumb", "mb-4"], [1, "breadcrumb-item", "active"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ol", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Bem vindo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "A1Qv":
    /*!*****************************************************!*\
      !*** ./src/app/clientes/clientes-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ClientesRoutingModule */

    /***/
    function A1Qv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientesRoutingModule", function () {
        return ClientesRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _clientes_form_clientes_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./clientes-form/clientes-form.component */
      "MPBQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'clientes-form',
        component: _clientes_form_clientes_form_component__WEBPACK_IMPORTED_MODULE_1__["ClientesFormComponent"]
      }];

      var ClientesRoutingModule = function ClientesRoutingModule() {
        _classCallCheck(this, ClientesRoutingModule);
      };

      ClientesRoutingModule.??fac = function ClientesRoutingModule_Factory(t) {
        return new (t || ClientesRoutingModule)();
      };

      ClientesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: ClientesRoutingModule
      });
      ClientesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](ClientesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "MPBQ":
    /*!*******************************************************************!*\
      !*** ./src/app/clientes/clientes-form/clientes-form.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ClientesFormComponent */

    /***/
    function MPBQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientesFormComponent", function () {
        return ClientesFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ClientesFormComponent = /*#__PURE__*/function () {
        function ClientesFormComponent() {
          _classCallCheck(this, ClientesFormComponent);
        }

        _createClass(ClientesFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ClientesFormComponent;
      }();

      ClientesFormComponent.??fac = function ClientesFormComponent_Factory(t) {
        return new (t || ClientesFormComponent)();
      };

      ClientesFormComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ClientesFormComponent,
        selectors: [["app-clientes-form"]],
        decls: 2,
        vars: 0,
        template: function ClientesFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "clientes-form works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlcy1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jquery */
      "EVdn");
      /* harmony import */


      var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _template_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./template/navbar/navbar.component */
      "WUj2");
      /* harmony import */


      var _template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./template/sidebar/sidebar.component */
      "0QXA");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'clientes-app';
        }

        _createClass(AppComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            (function ($) {
              "use strict"; // Add active state to sidbar nav links

              var path = window.location.href; // because the 'href' property of the DOM element is the absolute path

              $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
                if (this.href === path) {
                  $(this).addClass("active");
                }
              }); // Toggle the side navigation

              $("#sidebarToggle").on("click", function (e) {
                e.preventDefault();
                $("body").toggleClass("sb-sidenav-toggled");
              });
            })(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 18,
        vars: 0,
        consts: [["id", "layoutSidenav"], ["id", "layoutSidenav_content"], [1, "container-fluid"], [1, "py-4", "bg-light", "mt-auto"], [1, "d-flex", "align-items-center", "justify-content-between", "small"], [1, "text-muted"], ["href", "#"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "app-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "footer", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Copyright \xA9 Meus Clientes 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, " \xB7 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "Terms & Conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }
        },
        directives: [_template_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "WUj2":
    /*!*****************************************************!*\
      !*** ./src/app/template/navbar/navbar.component.ts ***!
      \*****************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function WUj2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent() {
          _classCallCheck(this, NavbarComponent);
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.??fac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)();
      };

      NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 5,
        vars: 0,
        consts: [[1, "sb-topnav", "navbar", "navbar-expand", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["id", "sidebarToggle", "href", "#", 1, "btn", "btn-link", "btn-sm", "order-1", "order-lg-0"], [1, "fas", "fa-bars"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Meus Clientes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _template_template_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./template/template.module */
      "fo52");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _clientes_clientes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./clientes/clientes.module */
      "3HbQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??fac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _template_template_module__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"], _clientes_clientes_module__WEBPACK_IMPORTED_MODULE_5__["ClientesModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _template_template_module__WEBPACK_IMPORTED_MODULE_3__["TemplateModule"], _clientes_clientes_module__WEBPACK_IMPORTED_MODULE_5__["ClientesModule"]]
        });
      })();
      /***/

    },

    /***/
    "fo52":
    /*!*********************************************!*\
      !*** ./src/app/template/template.module.ts ***!
      \*********************************************/

    /*! exports provided: TemplateModule */

    /***/
    function fo52(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateModule", function () {
        return TemplateModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "WUj2");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "0QXA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TemplateModule = function TemplateModule() {
        _classCallCheck(this, TemplateModule);
      };

      TemplateModule.??fac = function TemplateModule_Factory(t) {
        return new (t || TemplateModule)();
      };

      TemplateModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: TemplateModule
      });
      TemplateModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](TemplateModule, {
          declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??fac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
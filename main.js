(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/sobre/sobre.component.ts");
/* harmony import */ var _historia_historia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./historia/historia.component */ "./src/app/historia/historia.component.ts");
/* harmony import */ var _time_time_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time/time.component */ "./src/app/time/time.component.ts");
/* harmony import */ var _contato_contato_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contato/contato.component */ "./src/app/contato/contato.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'sobre',
        component: _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_3__["SobreComponent"]
    },
    {
        path: 'historia',
        component: _historia_historia_component__WEBPACK_IMPORTED_MODULE_4__["HistoriaComponent"]
    },
    {
        path: 'time',
        component: _time_time_component__WEBPACK_IMPORTED_MODULE_5__["TimeComponent"]
    },
    {
        path: 'contato',
        component: _contato_contato_component__WEBPACK_IMPORTED_MODULE_6__["ContatoComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\n    <a routerLink=\"home\" class=\"logo\" (click)=\"hideMenu()\"><img name=\"logo\" src=\"./assets/img/buttonB.png\" height=\"30px\"/></a>\n\n    <nav [ngClass]=\"{'show-menu' : menuActive}\">\n        <ul>\n            <li><a routerLink=\"home\" [routerLinkActive]=\"['active']\" (click)=\"hideMenu()\">Home</a></li>\n            <li><a routerLink=\"sobre\" [routerLinkActive]=\"['active']\" (click)=\"hideMenu()\">Sobre Nós</a></li>\n            <li><a routerLink=\"historia\" [routerLinkActive]=\"['active']\" (click)=\"hideMenu()\">História</a></li>\n            <li><a routerLink=\"time\" [routerLinkActive]=\"['active']\" (click)=\"hideMenu()\">Time</a></li>\n            <li><a routerLink=\"contato\" [routerLinkActive]=\"['active']\" (click)=\"hideMenu()\">Contato</a></li>\n        </ul>\n    </nav>\n    <div class=\"menu-trigger\" (click)=\"onMenuTrigger()\">\n        <span class=\"mt1\"></span>\n        <span class=\"mt2\"></span>\n        <span class=\"mt3\"></span>\n        <span class=\"mt4\"></span>\n    </div>\n</header>\n\n<router-outlet></router-outlet>\n\n<footer>\n\n    <a href=\"https://www.facebook.com/carrosselcaipirabauru/?ref=bookmarks\" target=\"_blank\" class=\"socialAnchor\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" name=\"facebook\" class=\"links\"><path d=\"M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z\"/></svg>\n        \n    </a>\n\n    <a href=\"#\" target=\"_blank\" class=\"socialAnchor\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" name=\"youtube\" class=\"links\"><path d=\"M508.6 148.8c0-45-33.1-81.2-74-81.2C379.2 65 322.7 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.6-.1 220.2 0 255.8c-.1 35.6 1 71.2 3.4 106.9 0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8 60.8.2 120.3-1 178.6-3.8 40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107 .2-35.6-.9-71.2-3.3-106.9zM207 353.9V157.4l145 98.2-145 98.3z\"/></svg>\n    </a>\n\n    <a href=\"https://github.com/CarrosselCaipira\" target=\"_blank\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" name=\"github\" class=\"links\"><path d=\"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z\"/></svg>\n    </a>\n\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: #16324D;\n  font-family: 'Montserrat', sans-serif;\n  width: 100%;\n  height: 55px;\n  list-style-type: none;\n  margin: 0;\n  padding: 0; }\n\nheader > *, nav li {\n  display: inline-block;\n  vertical-align: middle; }\n\nheader a {\n  position: relative;\n  text-decoration: none;\n  color: #bbb;\n  padding: 10px 15px;\n  font-size: 18px;\n  font-weight: lighter;\n  transition: .25s ease-out; }\n\nheader nav a {\n  padding: 16px 15px; }\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  height: 60;\n  width: 100%;\n  text-align: center;\n  background: #16324D;\n  padding: 30px 0; }\n\n.links {\n  width: 40px;\n  height: 40px;\n  padding: 0px;\n  margin: 10px;\n  display: inline-block;\n  transition: .3s ease-out;\n  border-radius: 1px;\n  fill: #577694; }\n\nsvg[name=\"youtube\"]:hover {\n  fill: #fff !important; }\n\nsvg[name=\"facebook\"]:hover {\n  fill: #fff !important; }\n\nsvg[name=\"github\"]:hover {\n  fill: #fff !important; }\n\n@media only screen and (min-width: 801px) {\n  header nav a:hover {\n    color: #fff;\n    background: #1D4367; }\n  .logo:hover {\n    -webkit-filter: brightness(68.75%);\n            filter: brightness(68.75%); }\n  header nav a::after {\n    content: '';\n    position: absolute;\n    border-bottom: 2px solid #fff;\n    left: 50%;\n    width: 0;\n    bottom: 0;\n    -webkit-transform: translate(-50%, -10px);\n            transform: translate(-50%, -10px);\n    transition: .2s; }\n  header nav a:hover::after {\n    width: 80%; }\n  .active {\n    color: #fff !important; }\n  .active::after {\n    width: 80% !important;\n    border-bottom: 2px solid #fff !important; } }\n\n@media only screen and (max-width: 800px) {\n  .menu-trigger {\n    height: 30px;\n    width: 30px;\n    position: absolute;\n    right: 20px;\n    top: 10px;\n    cursor: pointer; }\n  .menu-trigger * {\n    position: absolute;\n    left: 5px;\n    display: block;\n    width: 20px;\n    height: .1em;\n    background: #fff;\n    transition: .4s ease; }\n  .menu-trigger .mt1 {\n    top: 8px; }\n  .menu-trigger .mt2, .menu-trigger .mt4 {\n    top: 15px; }\n  .menu-trigger .mt3 {\n    top: 22px; }\n  nav {\n    position: absolute;\n    background: #16324D;\n    left: 0;\n    top: 55px;\n    height: 0;\n    overflow: hidden;\n    transition: .4s ease-out;\n    z-index: 1;\n    width: 100%; }\n  nav li {\n    width: 100%; }\n  nav li a {\n    display: block;\n    color: #fff; }\n  .active {\n    background: #1D4367; }\n  .show-menu {\n    height: 275px; }\n  .show-menu + .menu-trigger .mt2 {\n    -webkit-transform: rotate(45deg) !important;\n            transform: rotate(45deg) !important; }\n  .show-menu + .menu-trigger .mt4 {\n    -webkit-transform: rotate(-45deg) !important;\n            transform: rotate(-45deg) !important; }\n  .show-menu + .menu-trigger .mt1, .show-menu + .menu-trigger .mt3 {\n    opacity: 0;\n    visibility: hidden; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.menuActive = false;
    }
    AppComponent.prototype.onMenuTrigger = function () {
        this.menuActive = !this.menuActive;
    };
    AppComponent.prototype.hideMenu = function () {
        this.menuActive = false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sobre/sobre.component */ "./src/app/sobre/sobre.component.ts");
/* harmony import */ var _historia_historia_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./historia/historia.component */ "./src/app/historia/historia.component.ts");
/* harmony import */ var _time_time_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./time/time.component */ "./src/app/time/time.component.ts");
/* harmony import */ var _contato_contato_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contato/contato.component */ "./src/app/contato/contato.component.ts");
/* harmony import */ var _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./eventos/eventos.component */ "./src/app/eventos/eventos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _sobre_sobre_component__WEBPACK_IMPORTED_MODULE_5__["SobreComponent"],
                _historia_historia_component__WEBPACK_IMPORTED_MODULE_6__["HistoriaComponent"],
                _time_time_component__WEBPACK_IMPORTED_MODULE_7__["TimeComponent"],
                _contato_contato_component__WEBPACK_IMPORTED_MODULE_8__["ContatoComponent"],
                _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_9__["EventosComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contato/contato.component.html":
/*!************************************************!*\
  !*** ./src/app/contato/contato.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Contato</h1>\n<p>Deixe-nos uma mensagem!</p>\n\n<form>\n    <label>Nome:</label>\n    <input type=\"text\"/>\n    \n    <label>E-mail</label>\n    <input type=\"text\"/>\n    \n    <label>Mensagem</label>\n    <textarea rows=\"14\"></textarea>\n    \n    <button>Enviar</button>\n\n</form>\n\n\n<!--\n<form id=\"gform\" method=\"POST\" class=\"pure-form pure-form-stacked\"\naction=\"https://script.google.com/macros/s/AKfycbzefo6PU7haMWe3wUiaEmW_SjM6x9q9MpUx3p2N6tFXMEXjww2r/exec\">\n\n<div class=\"form-group\">\n<label for=\"name\">Nome: </label>\n<input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Seu nome\" />\n</div>\n<div class=\"form-group\">\n<label for=\"message\">Mensagem: </label>\n<textarea class=\"form-control\" id=\"message\" name=\"message\" rows=\"8\"\nplaceholder=\"Deixe a sua mensagem\"></textarea>\n</div>\n<div class=\"form-group\">\n<label for=\"email\">Seu endereço de Email:</label>\n<input class=\"form-control\" id=\"email\" name=\"email\" type=\"email\" value=\"\"\nrequired placeholder=\"your.name@email.com\"/>\n<span id=\"email-invalid\" style=\"visibility:hidden\">\nMust be a valid email address</span>\n</div>\n<div class=\"form-group\">\n<button class=\"btn btn-primary\">\n<i class=\"\"></i>&nbsp;Send</button>\n</div>\n</form>\n<div style=\"display:none;\" id=\"thankyou_message\">\n<h2><em>Obrigado</em> pelo contato!\nEntraremos em contato com você em breve!</h2>\n</div>-->\n"

/***/ }),

/***/ "./src/app/contato/contato.component.scss":
/*!************************************************!*\
  !*** ./src/app/contato/contato.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin: 30px 160px; }\n\nform * {\n  display: block; }\n\nlabel {\n  font-size: 18px; }\n\ninput {\n  width: 40%; }\n\ntextarea {\n  resize: none;\n  width: 70%; }\n\ninput, textarea {\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  outline: none;\n  margin-bottom: 12px; }\n\nbutton {\n  position: relative;\n  padding: 12px 16px;\n  margin-left: calc(70% + 12px);\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  background: #fff;\n  border: 3px solid #16324D;\n  color: #16324D;\n  font-family: 'Abel', sans-serif;\n  font-size: 18px;\n  letter-spacing: 2px;\n  transition: .3s ease-in;\n  overflow: hidden;\n  cursor: pointer; }\n\nbutton::before {\n  content: '';\n  position: absolute;\n  top: -25%;\n  left: -200%;\n  background: #16324D;\n  width: 150%;\n  height: 150%;\n  -webkit-transform: skewX(-15deg);\n          transform: skewX(-15deg);\n  transition: .3s ease-in;\n  z-index: -1; }\n\nbutton:hover {\n  color: #fff; }\n\nbutton:hover::before {\n  left: -20%; }\n\n@media only screen and (max-width: 800px) {\n  form {\n    margin: 10px; }\n  input, textarea {\n    width: calc(100% - 10px) !important; }\n  button {\n    margin-left: calc(100% - 10px);\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); } }\n"

/***/ }),

/***/ "./src/app/contato/contato.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contato/contato.component.ts ***!
  \**********************************************/
/*! exports provided: ContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoComponent", function() { return ContatoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContatoComponent = /** @class */ (function () {
    function ContatoComponent() {
    }
    ContatoComponent.prototype.ngOnInit = function () {
    };
    ContatoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contato',
            template: __webpack_require__(/*! ./contato.component.html */ "./src/app/contato/contato.component.html"),
            styles: [__webpack_require__(/*! ./contato.component.scss */ "./src/app/contato/contato.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContatoComponent);
    return ContatoComponent;
}());



/***/ }),

/***/ "./src/app/eventos/eventos.component.html":
/*!************************************************!*\
  !*** ./src/app/eventos/eventos.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  eventos works!\n</p>\n"

/***/ }),

/***/ "./src/app/eventos/eventos.component.scss":
/*!************************************************!*\
  !*** ./src/app/eventos/eventos.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/eventos/eventos.component.ts":
/*!**********************************************!*\
  !*** ./src/app/eventos/eventos.component.ts ***!
  \**********************************************/
/*! exports provided: EventosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosComponent", function() { return EventosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventosComponent = /** @class */ (function () {
    function EventosComponent() {
    }
    EventosComponent.prototype.ngOnInit = function () {
    };
    EventosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eventos',
            template: __webpack_require__(/*! ./eventos.component.html */ "./src/app/eventos/eventos.component.html"),
            styles: [__webpack_require__(/*! ./eventos.component.scss */ "./src/app/eventos/eventos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventosComponent);
    return EventosComponent;
}());



/***/ }),

/***/ "./src/app/historia/historia.component.html":
/*!**************************************************!*\
  !*** ./src/app/historia/historia.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>História</h1>\n\n<p>O Futebol de Robôs foi criado em 1996 pelo professor Jong–Hwan Kim, do Departamento de Engenharia Elétrica do KAIST (Korean Advanced Institute of Science and Technology), da República da Coréia (Coréia do Sul).</p>\n\n<p>No Brasil, o desenvolvimento de times de futebol de robôs começou com a iniciativa do primeiro Campeonato Brasileiro de Futebol de Robôs (1º CBFR) no final de 1997. A iniciativa foi concebida pelo professor Dr. Alberto Elfes através do Instituto de Automação do Centro de Tecnologia Informática (IA/CTI) em Campinas, atualmente, Centro de Pesquisa Renato Acher (CenPRA). A tarefa de disseminar a ideia, regras e o desenvolvimento dos primeiros robôs brasileiros para este fim coube a pesquisadores do CTI, liderados por Dr. Roberto Tavares. Nesta missão, foram agregadas várias instituições: a UNESP de Bauru, através dos professores Renê Pegoraro e Humberto Ferasoli Filho, do departamento de Computação da Faculdade de Ciências e pelo professor Marcelo Nicoletti Franchin, do departamento de Elétrica da Faculdade de Engenharia, a USP através da professora Dra. Anna Reali do departamento de Engenharia Elétrica da Escola Politécnica, a UFRJ através do professor Dr. Vitor Romano do departamento de engenharia Mecânica, a UFMG através do professor Dr. Mario Campos do departamento de Computação, a UFSC através do professor Dr. Edson Roberto DiPieri de Engenharia Elétrica.</p>\n\n<p>O CTI e a UNESP partiram para um desenvolvimento conjunto do primeiro robô brasileiro para futebol de robôs. A Poli e a UFMG partiram para soluções individuais. Algumas reuniões ocorreram para a discussão de funcionamento da arquitetura de controle, regras e organização de um evento nacional.</p>\n\n<p>O primeiro Campeonato Brasileiro de Futebol de Robôs ocorreu no período de 28 a 30 de abril de 1998, nas no anfiteatro da Poli-USP, em São Paulo. Esta primeira edição contou com 5 times de futebol de robôs: o time do CTI, chamado Bravo, da Unesp, chamado durante a competição de Carrossel Caipira, da Poli, chamado FutePOLI e dois da UFMG, chamados UAI e Samba.</p>\n\n<p>Participaram deste evento o Prof. Dr. Alberto Elfes (FIRA - IA/CTI), Prof. Dr. Jacques Waldmann – ITA, Prof. Dr. Mario Campos – UFMG, Prof. Dr. Hans-Jorg Schneebeli – UFES, Prof. Dr. Edson Roberto de Pieri – UFSC, Prof. Dr. Vítor Romano - Coppe/UFRJ. O time vencedor do primeiro Campeonato Brasileiro de Futebol de Robôs, com méritos, foi o time Bravo do IA/CTI de Campinas, ficando em segundo o time da UNESP de Bauru e em terceiro, o time da Poli. Cabe salientar que os times da UFMG foram desenvolvidos por alunos de graduação com a orientação do professor Mário Campos. O mesmo ocorreu com a Poli, com alunos de pós-graduação e pelo Engenheiro Guido Stolfi, enquanto o time do CTI pelos pesquisadores do Instituto de Automação e da UNESP por professores.</p>\n\n<p>Todos os times participantes deste campeonato ganharam a chance de disputar o campeonato mundial na França. A UNESP de Bauru e a POLI-USP, somaram esforços e formaram um time híbrido formado por robôs desenvolvidos pela POLI-USP e o software de visão, estratégia e controle desenvolvidos pelo Departamento de Computação da UNESP. O time híbrido foi batizado de Guaraná. O Guaraná tornou-se vice-campeão mundial na França em junho de 1998. Após esta experiência internacional, o time da UNESP de Bauru seguiu separado da POLI-USP com novos robôs. Desde as primeiras partidas, a estratégia adotada pelo time da UNESP para o jogo foi bem sucedida e os movimentos dos robôs em jogo lembram os movimentos de um carrossel, com alguma semelhança à estratégia do time de futebol da Holanda na copa do mundo de 1974 e 1978 o que definiu o nome “Carrossel Caipira” para este time.</p>"

/***/ }),

/***/ "./src/app/historia/historia.component.scss":
/*!**************************************************!*\
  !*** ./src/app/historia/historia.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/historia/historia.component.ts":
/*!************************************************!*\
  !*** ./src/app/historia/historia.component.ts ***!
  \************************************************/
/*! exports provided: HistoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaComponent", function() { return HistoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoriaComponent = /** @class */ (function () {
    function HistoriaComponent() {
    }
    HistoriaComponent.prototype.ngOnInit = function () {
    };
    HistoriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-historia',
            template: __webpack_require__(/*! ./historia.component.html */ "./src/app/historia/historia.component.html"),
            styles: [__webpack_require__(/*! ./historia.component.scss */ "./src/app/historia/historia.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HistoriaComponent);
    return HistoriaComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/sobre/sobre.component.html":
/*!********************************************!*\
  !*** ./src/app/sobre/sobre.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Sobre Nós</h1>\n<img align=\"center\" src=\"./assets/img/logo2.png\" alt=\"\" width=\"300px\"/>\n<p class=\"text-justify\">\nA UNESP, campus de Bauru, participa de competições de futebol de robôs, na modalidade Very Small Size (atualmente IEEE Very Small), desde 1998, com a realização do 1º Campeonato Brasileiro de Futebol de Robôs – CBFR 98. A pesquisa e o desenvolvimento em futebol de robôs, atualmente pelo Grupo de Integração de Sistemas e Dispositivos Inteligentes (GISDI), mantém o objetivo de incentivar o uso de inovações tecnológicas, no campo da robótica, de baixo custo e com componentes encontrados no mercado nacional. Apesar de diversos períodos de ausência, o time de futebol da UNESP de Bauru é conhecido, desde a primeira edição desta competição no Brasil, como Carrossel Caipira devido sua estratégia de jogo. O projeto atual é a quinta versão, de robôs desenvolvidos para futebol de robôs, com aprimoramentos em relação ao time de 2015.\n</p>\n<p class=\"text-justify\">\nNo ambiente do futebol de robôs, nesta categoria,, os robôs e a bola são identificados através de uma câmera utilizada como visão global, posicionada a 2m sobre o campo e alinhada ao seu centro, que captura imagens da arena. Estas imagens são processadas digitalmente obtendo as coordenadas dos robôs e da bola. A partir dessas coordenadas, uma estratégia é escolhida e transformada em comandos que são enviados aos robôs por rádio. Os robôs recebem estes comandos e realizam as ações correspondentes, modificando a posição dos elementos presentes no ambiente real, que será capturado novamente pela câmera. A Fig. 1 apresenta uma ilustração do ambiente do futebol de robôs.\n</p>\n<br>\n<figure id=\"familia-pelho\">\n<a href=\"https://mecatronicaatual.com.br/secoes/leitura/950\" target=\"_blank\">\n<img src=\"./assets/img/exemplo.png\" alt=\"\" />\n</a>\n<figcaption align=\"center\"><em>Figura 1. Ambiente para futebol de robôs</em></figcaption>\n</figure>\n<br><br>\n<p class=\"text-justify\">\nO futebol robótico abrange diversas áreas do conhecimento. Na construção do robô são aplicados conceitos de mecânica, eletrônica e sistemas embarcados. Do ponto de vista do software, executado no computador pessoal, estão envolvidos elementos de processamento de imagens, inteligência artificial e teoria de controle. Essa abrangência faz desta modalidade de futebol uma ferramenta pedagógica com possíveis aplicações no ensino.\n</p>\n<p class=\"text-justify\">\nEsse projeto busca incentivar e facilitar o desenvolvimento da robótica, para isso o artigo faz uma apresentação das tarefas realizadas, enfatizando a melhoria aplicada recentemente no simulador do ambiente para divulgar a eficiência obtida após essa modificação.\n</p>"

/***/ }),

/***/ "./src/app/sobre/sobre.component.scss":
/*!********************************************!*\
  !*** ./src/app/sobre/sobre.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  margin: 0 160px; }\n\nfigure img {\n  position: relative;\n  margin: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n@media only screen and (max-width: 800px) {\n  figure {\n    margin: 0;\n    padding: 0; }\n  img {\n    position: relative;\n    margin: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); } }\n"

/***/ }),

/***/ "./src/app/sobre/sobre.component.ts":
/*!******************************************!*\
  !*** ./src/app/sobre/sobre.component.ts ***!
  \******************************************/
/*! exports provided: SobreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobreComponent", function() { return SobreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SobreComponent = /** @class */ (function () {
    function SobreComponent() {
    }
    SobreComponent.prototype.ngOnInit = function () {
    };
    SobreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sobre',
            template: __webpack_require__(/*! ./sobre.component.html */ "./src/app/sobre/sobre.component.html"),
            styles: [__webpack_require__(/*! ./sobre.component.scss */ "./src/app/sobre/sobre.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SobreComponent);
    return SobreComponent;
}());



/***/ }),

/***/ "./src/app/time/time.component.html":
/*!******************************************!*\
  !*** ./src/app/time/time.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>A equipe</h1>\n<p>\nA equipe de robótica Carrossel Caipira da UNESP-Bauru tem um importante papel na categoria VSS (Very Small Size) de futebol de robôs devido aos títulos conquistados, como o vice-campeonato da primeira competição da categoria em 1998, garantindo a vaga para disputar o campeonato mundial do mesmo ano na França. A partir de uma parceria entre POLI-USP e Carrossel Caipira, o time conhecido como Guaraná sagrou-se vice-campeão dessa edição. Nos anos seguintes, a equipe foi campeã no VI SBAI (Simpósio Brasileiro de Automação Inteligente) em 2003 e no VII SBAI em 2005.\n</p>\n\n<div class=\"listaMembros\">\n    <span class=\"btnL\" (click)=\"scrollBackward()\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M320 128L192 256l128 128z\"/></svg></span>\n    <div class=\"displayTime\">\n        <a *ngFor=\"let membro of membros; let i = index\" (click)=\"onMemberClick(i)\" id=\"membro{{ i }}\" [ngClass]=\"{'selected': i === currentIndex}\">\n            <div class=\"borda\">\n                <img src=\"./assets/img/equipe/{{ membro[0] }}\" class=\"foto\">\n            </div>\n        </a>\n    </div>\n    <span class=\"btnR\" (click)=\"scrollForward()\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M192 128l128 128-128 128z\"/></svg></span>\n</div>\n<div class=\"info\">\n    <img src=\"./assets/img/equipe/{{ pessoa[0] }}\" class=\"perfil\"/>\n    <div class=\"bio\">\n        <h1 [innerHTML]=\"pessoa[1]\"></h1>\n        <h3 [innerHTML]=\"pessoa[2]\"></h3>\n        <p [innerHTML]=\"pessoa[3]\"></p>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/time/time.component.scss":
/*!******************************************!*\
  !*** ./src/app/time/time.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".displayTime span {\n  margin-top: 20px;\n  font-size: 18px;\n  color: #fff;\n  text-align: center;\n  white-space: pre-wrap;\n  word-spacing: 110px; }\n\n.btnL {\n  position: relative;\n  box-shadow: 0 0 0 0, 0 0 0 0, 17px 0 15px -4px #16324D, 0 0 0 0;\n  z-index: 1; }\n\n.btnR {\n  position: relative;\n  box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, -17px 0 15px -4px #16324D;\n  z-index: 1; }\n\nspan svg {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 50px;\n  fill: #fff; }\n\n.displayTime {\n  position: relative;\n  overflow-x: hidden;\n  background: #16324D;\n  white-space: nowrap;\n  padding: 0 50px;\n  width: calc(100% - 100px); }\n\n.displayTime a {\n  display: inline-block;\n  margin: 25px;\n  cursor: pointer;\n  max-width: 110px; }\n\n.displayTime a * {\n  display: block; }\n\n.listaMembros {\n  display: flex;\n  margin: 30px 160px;\n  margin-bottom: 0; }\n\n.listaMembros *::-moz-selection {\n  background: none; }\n\n.listaMembros *::selection {\n  background: none; }\n\n.listaMembros > * {\n  float: left; }\n\n.listaMembros > span {\n  background: #16324D;\n  width: 50px;\n  cursor: pointer; }\n\n.borda {\n  height: 110px;\n  width: 110px;\n  border-radius: 50%;\n  background: #fff;\n  transition: .3s;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%; }\n\n.foto {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  padding: 5px;\n  transition: .3s;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%; }\n\n.selected .borda {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  background: #749EC7; }\n\n.selected span {\n  font-weight: bolder; }\n\n.perfil {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  grid-area: perfil;\n  width: 300px;\n  height: 300px;\n  padding: 30px; }\n\n.bio {\n  -ms-grid-row: 1;\n  -ms-grid-column: 2;\n  grid-area: bio;\n  padding: 30px; }\n\n@media only screen and (max-width: 1100px) {\n  .perfil {\n    -ms-grid-row: 1;\n    -ms-grid-column: 1; }\n  .bio {\n    -ms-grid-row: 2;\n    -ms-grid-column: 1; } }\n\n.bio h1 {\n  padding: 0 !important;\n  margin: 0 !important; }\n\n.bio p {\n  padding: 0 !important;\n  margin: 0 !important;\n  white-space: pre-line; }\n\n.info {\n  display: -ms-grid;\n  display: grid;\n  width: calc(100% - 320px);\n      grid-template-areas: 'perfil bio ';\n  margin: 30px 160px;\n  border: 7px solid #16324D;\n  margin-top: 0;\n  padding: 30px;\n  background: rgba(255, 255, 255, 0.8);\n  box-sizing: border-box; }\n\n@media only screen and (max-width: 1100px) {\n  .displayTime a {\n    max-width: 80px; }\n  .borda {\n    height: 80px;\n    width: 80px; }\n  .foto {\n    width: 70px;\n    height: 70px; }\n  .perfil {\n    width: 200px !important;\n    height: 200px !important; }\n  .listaMembros {\n    margin: 30px 10px;\n    margin-bottom: 0; }\n  .info {\n    width: calc(100% - 20px);\n    margin: 30px 10px;\n    margin-top: 0;\n        grid-template-areas: 'perfil'\r 'bio' !important; } }\n"

/***/ }),

/***/ "./src/app/time/time.component.ts":
/*!****************************************!*\
  !*** ./src/app/time/time.component.ts ***!
  \****************************************/
/*! exports provided: TimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeComponent", function() { return TimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeComponent = /** @class */ (function () {
    function TimeComponent() {
        this.membros = [
            ['andreneves.jpg', 'André Neves', 'Hardware', 'Estudante de engenhara elétrica, 4º ano, membro da equipe de Hardware.'],
            ['daniloweber.jpg', 'Danilo Weber', 'Software e Gestão', 'Danilo é aluno do quarto ano de Ciência da Computação, está a 3 anos no time e é levemente perturbado por documentação de código. Atualmente atuando como Coordenador Geral da equipe e como Co-Coordenador da área de Software do Carrossel Caipira, tem como objetivos no Carrossel tornar o time uma referência na modalidade VSSS (Very Small Size Soccer) assim como aumentar a visibilidade e participação da equipe no ambiente universitário.'],
            ['izabelepizzo.jpg', 'Izabele Pizzo', 'Pesquisa', 'Estudante do terceiro ano de Arquitetura e Urbanismo pela Unesp de Bauru, participante da equipe de pesquisa e atuante nas áreas de projetos de design, modelagem e movelaria. '],
            ['jorgevicente.png', 'Jorge Vicente', 'Pesquisa', 'Estudante de Licenciatura em Matemática, preocupado com a qualidade no ensino e aprendizagem dos alunos nas áreas de matemática, física, eletrônica, informática, mecânica e correlatas.\nHobbista e entusiasta por tecnologias físicas, virtuais, analógicas e digitais.\nParticipante na área de pesquisa, em constante empenho pelo crescimento do time seja pela imagem e divulgação do mesmo, seja pela qualidade e variedade dos projetos pesquisados e desenvolvidos por todos.\nCriador e produtor de conteúdo para os canais <a href="https://www.youtube.com/user/mamatetemamatica" target="_blank" class="profileReference">Matemática Descomplicada</a> e <a href="https://www.youtube.com/meunomeejorgevicente" target="_blank" class="profileReference">Canal JV</a> na plataforma de vídeos youtube.com.'],
            ['marcelohideaki.jpg', 'Marcelo Hideaki', 'Pesquisa', 'Marcelo está no terceiro ano do curso de Ciência da Computação e participa na equipe de pesquisa.'],
            ['marcelonunez.jpg', 'Marcelo Nuñez', 'Software', 'Estudante do curso de Bacharelado em Ciências da Computação, está atualmente no 3° ano do curso. Como membro da área de software, procura ajudar com o que sabe o desenvolvimento do software, e está sempre disposto a aprender coisas novas para o time.'],
            ['matheusviana.jpg', 'Matheus Viana', 'Hardware', 'Estudante do 4º de engenharia elétrica, membro da equipe de hardware.'],
            ['paulomaia.jpeg', 'Paulo Maia', 'Pesquisa', 'Estudante de ciência da computação, integra a equipe de pesquisa do Carrossel, trabalhando especificamente na programação de microcontroladores.'],
            ['rafaeltakagi.jpg', 'Rafael Takagi', 'Software', 'Estudante do terceiro ano do curso de Ciência da Computação, procura sempre poder aprender e passar conhecimentos ao atuar no time de Software. Atualmente está trabalhando na produção de estratégias de jogo para os robôs.'],
            ['rodrigobueno.jpeg', 'Rodrigo Bueno', 'Software', 'Rodrigo Bueno Rodrigues é aluno do Curso de Ciências da Computação na Unesp/Bauru. Atualmente coordenando a área de software, busca levar a equipe a um novo patamar com o uso de novos métodos e técnicas para adquirir o título nacional na categoria Very Small Size de futebol de robôs.'],
            ['thiagomochetti.jpg', 'Thiago Mochetti', 'Hardware', 'Thiago é técnico em eletrônica pelo CTI e cursa Engenharia Elétrica na UNESP. Apaixonado pelo mundo acadêmico, dá aulas desde pequeno e é ele mesmo aluno do tempo. É o integrante mais jovem do time, e faz uso disso para motivar a galera.']
        ];
        this.n = this.membros.length;
        this.currentIndex = 0;
        this.pessoa = this.membros[0];
    }
    TimeComponent.prototype.ngOnInit = function () {
    };
    TimeComponent.prototype.onMemberClick = function (i) {
        document.getElementById('membro' + i).scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.currentIndex = i;
        this.pessoa = this.membros[i];
    };
    TimeComponent.prototype.scrollBackward = function () {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            document.getElementById('membro' + this.currentIndex).scrollIntoView({ behavior: 'smooth', block: 'start' });
            this.pessoa = this.membros[this.currentIndex];
        }
    };
    TimeComponent.prototype.scrollForward = function () {
        if (this.currentIndex < this.n - 1) {
            this.currentIndex++;
            document.getElementById('membro' + this.currentIndex).scrollIntoView({ behavior: 'smooth', block: 'start' });
            this.pessoa = this.membros[this.currentIndex];
        }
    };
    TimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-time',
            template: __webpack_require__(/*! ./time.component.html */ "./src/app/time/time.component.html"),
            styles: [__webpack_require__(/*! ./time.component.scss */ "./src/app/time/time.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimeComponent);
    return TimeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Important stuff\UNESP\SiteTesteCarrossel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
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
		var e = new Error("Cannot find module '" + req + "'");
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
/*! exports provided: appRouting, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouting", function() { return appRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_emails_emails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/emails/emails.component */ "./src/app/components/emails/emails.component.ts");
/* harmony import */ var _components_add_email_add_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-email/add-email.component */ "./src/app/components/add-email/add-email.component.ts");
/* harmony import */ var _components_email_detail_email_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/email-detail/email-detail.component */ "./src/app/components/email-detail/email-detail.component.ts");










var routes = [
    { path: '', redirectTo: '/LIST', pathMatch: 'full' },
    { path: 'LIST', component: _components_emails_emails_component__WEBPACK_IMPORTED_MODULE_6__["EmailsComponent"] },
    { path: 'details/:id', component: _components_email_detail_email_detail_component__WEBPACK_IMPORTED_MODULE_8__["EmailDetailComponent"] },
    { path: 'CREATE', component: _components_add_email_add_email_component__WEBPACK_IMPORTED_MODULE_7__["AddEmailComponent"] },
];
var appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    color: #369;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 250%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBjb2xvcjogIzM2OTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI1MCU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\n    <a mat-tab-link\n    *ngFor=\"let link of navLinks\"\n    [routerLink]=\"link.link\"\n    routerLinkActive #rla=\"routerLinkActive\"\n    [active]=\"rla.isActive\">  \n    {{link.label}}  \n    </a>\n</nav>\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'angular-material-tab-router';
        this.activeLinkIndex = -1;
        this.navLinks = [
            {
                label: 'LIST',
                link: './LIST',
                index: 0
            }, {
                label: 'CREATE',
                link: './CREATE',
                index: 1
            },
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (res) {
            _this.activeLinkIndex = _this.navLinks.indexOf(_this.navLinks.find(function (tab) { return tab.link === '.' + _this.router.url; }));
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_emails_emails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/emails/emails.component */ "./src/app/components/emails/emails.component.ts");
/* harmony import */ var _components_email_item_email_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/email-item/email-item.component */ "./src/app/components/email-item/email-item.component.ts");
/* harmony import */ var _components_add_email_add_email_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-email/add-email.component */ "./src/app/components/add-email/add-email.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _components_email_detail_email_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/email-detail/email-detail.component */ "./src/app/components/email-detail/email-detail.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_emails_emails_component__WEBPACK_IMPORTED_MODULE_9__["EmailsComponent"],
                _components_email_item_email_item_component__WEBPACK_IMPORTED_MODULE_10__["EmailItemComponent"],
                _components_add_email_add_email_component__WEBPACK_IMPORTED_MODULE_11__["AddEmailComponent"],
                _components_email_detail_email_detail_component__WEBPACK_IMPORTED_MODULE_14__["EmailDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-email/add-email.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/add-email/add-email.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n    background-color:#7986CB;\n    padding: 12px 18px;\n    font-size: 16px;\n    color: black;\n    text-align: center;\n}\n.input{\n    width: 400px;\n    height: 21px;\n}\n.textarea{\n    width: 500px;\n    height: 150px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtZW1haWwvYWRkLWVtYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1lbWFpbC9hZGQtZW1haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6Izc5ODZDQjtcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5wdXR7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMjFweDtcbn1cblxuLnRleHRhcmVhe1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/add-email/add-email.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/add-email/add-email.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"email-form\">\n<p>To:\n    <input class= \"input\" id = \"to\" type=\"email\">\n</p>\n<p>Subject:\n    <input class= \"input\" id = \"subject\" type=\"text\">\n</p>\n  <p>\n  \n    <textarea class = \"textarea\" matInput placeholder=\"Textarea\" placeholder=\"Type your message here\"></textarea>\n\n  </p>\n  <button class=\"button\" type=\"submit\" md-raised-button>Send</button>\n  </form>"

/***/ }),

/***/ "./src/app/components/add-email/add-email.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add-email/add-email.component.ts ***!
  \*************************************************************/
/*! exports provided: AddEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmailComponent", function() { return AddEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddEmailComponent = /** @class */ (function () {
    function AddEmailComponent() {
    }
    AddEmailComponent.prototype.ngOnInit = function () {
    };
    AddEmailComponent.prototype.onSubmit = function () {
        var email = {};
    };
    AddEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-email',
            template: __webpack_require__(/*! ./add-email.component.html */ "./src/app/components/add-email/add-email.component.html"),
            styles: [__webpack_require__(/*! ./add-email.component.css */ "./src/app/components/add-email/add-email.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddEmailComponent);
    return AddEmailComponent;
}());



/***/ }),

/***/ "./src/app/components/email-detail/email-detail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/email-detail/email-detail.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    padding:8px;\n    border-bottom:1px solid black;   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbWFpbC1kZXRhaWwvZW1haWwtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbWFpbC1kZXRhaWwvZW1haWwtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBwYWRkaW5nOjhweDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBibGFjazsgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/email-detail/email-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/email-detail/email-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"email\">\n     <p>To: {{ email.to }}</p>\n     <p>Subject: {{ email.subject }}</p><br />\n     {{ email.text }}\n</div> "

/***/ }),

/***/ "./src/app/components/email-detail/email-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/email-detail/email-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmailDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailDetailComponent", function() { return EmailDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Email */ "./src/app/models/Email.ts");
/* harmony import */ var src_app_services_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/email.service */ "./src/app/services/email.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var EmailDetailComponent = /** @class */ (function () {
    function EmailDetailComponent(emailService, route) {
        this.emailService = emailService;
        this.route = route;
        this.email = new src_app_models_Email__WEBPACK_IMPORTED_MODULE_2__["Email"]();
    }
    EmailDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params["id"];
        this.emailService.getEmail(id).subscribe(function (email) {
            _this.email = email;
        });
        this.email.read = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_Email__WEBPACK_IMPORTED_MODULE_2__["Email"])
    ], EmailDetailComponent.prototype, "email", void 0);
    EmailDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-detail',
            template: __webpack_require__(/*! ./email-detail.component.html */ "./src/app/components/email-detail/email-detail.component.html"),
            styles: [__webpack_require__(/*! ./email-detail.component.css */ "./src/app/components/email-detail/email-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EmailDetailComponent);
    return EmailDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/email-item/email-item.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/email-item/email-item.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".email {\n  background-color: #FFFFFF;\n  padding:8px;\n  border-bottom:1px solid black;\n  font-weight:bold; \n}\n\n.is-read {\n    font-weight:normal; \n    background-color: #EEEEEE;\n}\n\na { \n  text-decoration:none;\n  color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbWFpbC1pdGVtL2VtYWlsLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lbWFpbC1pdGVtL2VtYWlsLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbWFpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIHBhZGRpbmc6OHB4O1xuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBibGFjaztcbiAgZm9udC13ZWlnaHQ6Ym9sZDsgXG59XG5cbi5pcy1yZWFkIHtcbiAgICBmb250LXdlaWdodDpub3JtYWw7IFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XG59XG5hIHsgXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICBjb2xvcjogIzAwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/email-item/email-item.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/email-item/email-item.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"setClasses()\"> \n\n<table>\n  <tr> \n    <td>\n    <input type=\"checkbox\" />\n    </td> \n    <a [routerLink]=\"['/details', email.id]\" class=\"router-link\"> \n    <td width=\"20%\">\n     {{ email.to }} \n    </td>\n    <td width=\"80%\">\n     {{ email.subject }}\n    </td>\n  </a>\n  </tr>   \n</table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/email-item/email-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/email-item/email-item.component.ts ***!
  \***************************************************************/
/*! exports provided: EmailItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailItemComponent", function() { return EmailItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/Email */ "./src/app/models/Email.ts");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/email.service */ "./src/app/services/email.service.ts");




var EmailItemComponent = /** @class */ (function () {
    function EmailItemComponent(emailService) {
    }
    EmailItemComponent.prototype.ngOnInit = function () {
    };
    // set dynamic classes
    EmailItemComponent.prototype.setClasses = function () {
        var classes = {
            email: true,
            'is-read': this.email.read
        };
        return classes;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_Email__WEBPACK_IMPORTED_MODULE_2__["Email"])
    ], EmailItemComponent.prototype, "email", void 0);
    EmailItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-item',
            template: __webpack_require__(/*! ./email-item.component.html */ "./src/app/components/email-item/email-item.component.html"),
            styles: [__webpack_require__(/*! ./email-item.component.css */ "./src/app/components/email-item/email-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"]])
    ], EmailItemComponent);
    return EmailItemComponent;
}());



/***/ }),

/***/ "./src/app/components/emails/emails.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/emails/emails.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n    background-color:#D50000;\n    padding: 12px 18px;\n    font-size: 16px;\n    color: white;\n    text-align: center;\n    float:right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbWFpbHMvZW1haWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1haWxzL2VtYWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRDUwMDAwO1xuICAgIHBhZGRpbmc6IDEycHggMThweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbG9hdDpyaWdodDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/emails/emails.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/emails/emails.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-email-item class = \"emails\" *ngFor =\"let email of emails\" \n[email]=\"email\" \n[class.selected]=\"email === selectedEmail\"\n(click)=\"onSelectEmail(email)\">\n\n</app-email-item>\n<button class=\"button\" type=\"submit\" md-raised-button>Delete</button>\n<!--<app-email-detail [email]=\"selectedEmail\"></app-email-detail>-->"

/***/ }),

/***/ "./src/app/components/emails/emails.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/emails/emails.component.ts ***!
  \*******************************************************/
/*! exports provided: EmailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsComponent", function() { return EmailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/email.service */ "./src/app/services/email.service.ts");



var EmailsComponent = /** @class */ (function () {
    function EmailsComponent(emailService) {
        this.emailService = emailService;
    }
    EmailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emailService.getEmails().subscribe(function (emails) {
            _this.emails = emails;
        });
    };
    EmailsComponent.prototype.onSelectEmail = function (email) {
        this.selectedEmail = email;
    };
    EmailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emails',
            template: __webpack_require__(/*! ./emails.component.html */ "./src/app/components/emails/emails.component.html"),
            styles: [__webpack_require__(/*! ./emails.component.css */ "./src/app/components/emails/emails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"]])
    ], EmailsComponent);
    return EmailsComponent;
}());



/***/ }),

/***/ "./src/app/models/Email.ts":
/*!*********************************!*\
  !*** ./src/app/models/Email.ts ***!
  \*********************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
var Email = /** @class */ (function () {
    function Email() {
    }
    return Email;
}());



/***/ }),

/***/ "./src/app/services/email.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/email.service.ts ***!
  \*******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
        this.emailsUrl = 'http://5c5a21f9af3ff700140de477.mockapi.io/api/email';
    }
    EmailService.prototype.getEmails = function () {
        return this.http.get(this.emailsUrl);
    };
    EmailService.prototype.getEmail = function (id) {
        return this.http.get(this.emailsUrl + "/" + id);
    };
    EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmailService);
    return EmailService;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Jia/Documents/project-front/my-email/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
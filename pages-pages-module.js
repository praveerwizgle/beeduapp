(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "04Th":
/*!************************************************************!*\
  !*** ./src/app/pages/notification/notification.service.ts ***!
  \************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/@core/http/http-dispatcher.service */ "S8Xg");




const routes = {
    api: {
        getAll: () => `/api/Mobile/notifications`,
    },
};
class NotificationService {
    constructor(httpDispatcher) {
        this.httpDispatcher = httpDispatcher;
    }
    getAll() {
        return this.httpDispatcher.get(routes.api.getAll());
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__["HttpDispatcherService"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__["HttpDispatcherService"] }]; }, null); })();


/***/ }),

/***/ "0JyM":
/*!****************************************************!*\
  !*** ./src/app/pages/support/support.component.ts ***!
  \****************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SupportComponent {
    constructor() { }
    ngOnInit() { }
}
SupportComponent.ɵfac = function SupportComponent_Factory(t) { return new (t || SupportComponent)(); };
SupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportComponent, selectors: [["app-support"]], decls: 130, vars: 0, consts: [[1, "cus-container", "pb-0"], ["data-menu-load", "menu-footer.html"], [1, "card", "card-style"], [1, "text-center", "color-theme", "font-600", "pt-3", "mt-3"], [1, "boxed-text-l", "mb-4", "font-13"], [1, "text-center", "mb-4"], ["href", "#", 1, "icon", "icon-xs", "rounded-sm", "shadow-l", "mr-1", "bg-mail"], [1, "fa", "fa-envelope-open"], ["href", "https://wa.me/", "target", "_blank", 1, "icon", "icon-xs", "rounded-sm", "shadow-l", "mr-1", "bg-whatsapp"], [1, "fab", "fa-whatsapp"], ["href", "#", 1, "icon", "icon-xs", "rounded-sm", "shadow-l", "mr-1", "bg-twitter"], [1, "fa", "fa-phone"], ["href", "sms:+19657802958", "data-menu", "menu-share", 1, "icon", "icon-xs", "rounded-sm", "mr-1", "shadow-l", "bg-red-dark"], [1, "fa", "fa-envelope"], [1, "divider", "mb-3"], [1, "row", "text-center", "mb-3", "pl-3", "pr-3"], ["href", "#", 1, "font-11", "col-6"], [1, "card", "card-style", "mt-4"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15085.069458344718!2d73.0748026!3d19.0519789!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46dc00c9bce0d570!2sBEEDU%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1621086935299!5m2!1sen!2sin", "width", "100%", "height", "250", "allowfullscreen", "", "loading", "lazy", 2, "border", "0"], [1, "p-4"], [1, "color-theme", "font-600"], [1, "pb-0", "mb-0", "font-12"], [1, "page-content", "pb-0"], [1, "card", "card-full", "rounded-m", "pb-0", "mb-0"], [1, "content"], [1, "font-18"], [1, "font-13"], [1, "card", "contact-form"], ["action", "php/contact.php", "method", "post", "id", "contactForm", 1, "contactForm"], [1, "form-field", "form-name"], ["for", "contactNameField", 1, "contactNameField", "color-theme", "font-13"], ["type", "text", "name", "contactNameField", "value", "", "id", "contactNameField", 1, "round-small"], [1, "form-field", "form-email"], ["for", "contactEmailField", 1, "contactEmailField", "color-theme", "font-13"], ["type", "text", "name", "contactEmailField", "value", "", "id", "contactEmailField", 1, "round-small"], [1, "form-field", "form-text"], ["for", "contactMessageTextarea", 1, "contactMessageTextarea", "color-theme", "font-13"], ["name", "contactMessageTextarea", "id", "contactMessageTextarea", 1, "round-small"], [1, "form-button"], ["type", "submit", "value", "Send Message", "data-formid", "contactForm", 1, "btn", "bg-highlight", "font-900", "btn-m", "shadow-xl", "contactSubmitButton"]], template: function SupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "How Can We Assist You ?\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n                Built to match the design trends and give your page the awesome facelift it deserves.\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "iframe", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h6", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Postal Address\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n                    Beedu Services Private Limited\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n                    Kesar Gardens - Orchid,\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n                    Sector 20, Kharghar, Navi Mumbai,\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n                    Maharashtra 410210\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h1", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n                    Please send us a brief message if you are queries. We are always there to guide you.\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\n\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "form", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "(required)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "(required)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Message:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "(required)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "textarea", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\n                                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\n                            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\n\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\n\n\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-support',
                templateUrl: './support.component.html',
                styleUrls: ['./support.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9wAs":
/*!**************************************************************!*\
  !*** ./src/app/pages/communication/communication.service.ts ***!
  \**************************************************************/
/*! exports provided: CommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/@core/http/http-dispatcher.service */ "S8Xg");




const routes = {
    alerts: {
        // getAll: (filters?: Map<string, string>) => (filters ? `/users?${filters.toSanitizedURLFilters()}` : `/users`),
        getAllCommunication: () => `/api/Mobile/dailydiary`,
    },
};
class CommunicationService {
    constructor(httpDispatcher) {
        this.httpDispatcher = httpDispatcher;
    }
    getAllCommunication(rollNo, date) {
        return this.httpDispatcher.get(routes.alerts.getAllCommunication() + `?rollno=${rollNo}&date=${date}&action=`);
    }
}
CommunicationService.ɵfac = function CommunicationService_Factory(t) { return new (t || CommunicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__["HttpDispatcherService"])); };
CommunicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommunicationService, factory: CommunicationService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommunicationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__["HttpDispatcherService"] }]; }, null); })();


/***/ }),

/***/ "9zFR":
/*!**********************************************************!*\
  !*** ./src/app/pages/attendence/attendence.component.ts ***!
  \**********************************************************/
/*! exports provided: AttendenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendenceComponent", function() { return AttendenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _attendence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendence.service */ "Z7gR");




class AttendenceComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getAll(this.year).subscribe((response) => {
            console.log(response);
        });
    }
}
AttendenceComponent.ɵfac = function AttendenceComponent_Factory(t) { return new (t || AttendenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_attendence_service__WEBPACK_IMPORTED_MODULE_1__["AttendenceService"])); };
AttendenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttendenceComponent, selectors: [["app-attendence"]], decls: 5, vars: 0, template: function AttendenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "attendence works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRlbmRlbmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttendenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attendence',
                templateUrl: './attendence.component.html',
                styleUrls: ['./attendence.component.scss'],
            }]
    }], function () { return [{ type: _attendence_service__WEBPACK_IMPORTED_MODULE_1__["AttendenceService"] }]; }, null); })();


/***/ }),

/***/ "CC80":
/*!************************************************!*\
  !*** ./src/app/pages/alerts/alerts.service.ts ***!
  \************************************************/
/*! exports provided: AlertsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsService", function() { return AlertsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/@core/http/http-dispatcher.service */ "S8Xg");




const routes = {
    alerts: {
        // getAll: (filters?: Map<string, string>) => (filters ? `/users?${filters.toSanitizedURLFilters()}` : `/users`),
        getAllAlerts: () => `/api/Mobile/alerts`,
    },
};
class AlertsService {
    constructor(httpDispatcher) {
        this.httpDispatcher = httpDispatcher;
    }
    // Update profile
    getAllAlerts() {
        return this.httpDispatcher.get(routes.alerts.getAllAlerts());
    }
}
AlertsService.ɵfac = function AlertsService_Factory(t) { return new (t || AlertsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__["HttpDispatcherService"])); };
AlertsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertsService, factory: AlertsService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__["HttpDispatcherService"] }]; }, null); })();


/***/ }),

/***/ "D1Kj":
/*!************************************************************!*\
  !*** ./src/app/pages/examination/examination.component.ts ***!
  \************************************************************/
/*! exports provided: ExaminationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationComponent", function() { return ExaminationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _examination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examination.service */ "dQnq");




class ExaminationComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getAll().subscribe((response) => {
            console.log(response);
            this.list = response;
        });
    }
}
ExaminationComponent.ɵfac = function ExaminationComponent_Factory(t) { return new (t || ExaminationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_examination_service__WEBPACK_IMPORTED_MODULE_1__["ExaminationService"])); };
ExaminationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExaminationComponent, selectors: [["app-examination"]], decls: 3, vars: 0, template: function ExaminationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "examination works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtaW5hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExaminationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-examination',
                templateUrl: './examination.component.html',
                styleUrls: ['./examination.component.scss'],
            }]
    }], function () { return [{ type: _examination_service__WEBPACK_IMPORTED_MODULE_1__["ExaminationService"] }]; }, null); })();


/***/ }),

/***/ "DgZg":
/*!********************************************************!*\
  !*** ./src/app/pages/timetable/timetable.component.ts ***!
  \********************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _timetable_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timetable.service */ "xuj4");




class TimetableComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getAll().subscribe((response) => {
            console.log(response);
        });
    }
}
TimetableComponent.ɵfac = function TimetableComponent_Factory(t) { return new (t || TimetableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_timetable_service__WEBPACK_IMPORTED_MODULE_1__["TimetableService"])); };
TimetableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimetableComponent, selectors: [["app-timetable"]], decls: 3, vars: 0, template: function TimetableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "timetable works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1ldGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimetableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timetable',
                templateUrl: './timetable.component.html',
                styleUrls: ['./timetable.component.scss'],
            }]
    }], function () { return [{ type: _timetable_service__WEBPACK_IMPORTED_MODULE_1__["TimetableService"] }]; }, null); })();


/***/ }),

/***/ "HdI/":
/*!********************************************************************!*\
  !*** ./src/app/pages/online-learning/online-learning.component.ts ***!
  \********************************************************************/
/*! exports provided: OnlineLearningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineLearningComponent", function() { return OnlineLearningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OnlineLearningComponent {
    constructor() {
        this.isValid = true;
    }
    ngOnInit() { }
}
OnlineLearningComponent.ɵfac = function OnlineLearningComponent_Factory(t) { return new (t || OnlineLearningComponent)(); };
OnlineLearningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OnlineLearningComponent, selectors: [["app-online-learning"]], decls: 50, vars: 0, consts: [[1, "cus-container"], [1, "card", "card-style"], [1, "content", "mb-0", "pt-0"], [1, "mb-2"], [1, "list-group", "list-custom-small"], ["href", "#", "data-menu", "menu-cookie-bottom"], [1, "font-13", "mb-3", "text-muted"], ["href", "#", "data-menu", "menu-cookie-modal"], ["data-card-height", "150", 1, "card", "mb-0", 2, "height", "150px"], ["src", "https://www.youtube.com/embed/hrzV7olfDWU?playlist=hrzV7olfDWU&loop=1", "frameborder", "0", "allowfullscreen", ""], [1, "content", "mt-3", "mb-5", "pt-0"], [1, "font-14", "font-weight-bold"], [1, "mb-3", "font-12"]], template: function OnlineLearningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Science & Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Unit 1 - Introduction to metals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n            A metal is a material that, when freshly prepared, polished, or fractured, shows a lustrous appearance...\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Unit 2 - Metals types and properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n            The iron imparts magnetic properties to the material and also makes them prone to corrosion...\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "iframe", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Unit 1 - Introduction to metals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n        In physics, a metal is generally regarded as any substance capable of conducting electricity at a temperature of\n        absolute zero. Many elements and compounds that are not normally classified as metals become metallic under high\n        pressures.\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmxpbmUtbGVhcm5pbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlineLearningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-online-learning',
                templateUrl: './online-learning.component.html',
                styleUrls: ['./online-learning.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "U5Cf":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DashboardComponent {
    constructor() { }
    ngOnInit() { }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 5, vars: 0, consts: [[1, "cus-container"], ["src", "https://www.google.com/webhp?igu=1"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
    } }, styles: ["iframe[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlmcmFtZSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Z7gR":
/*!********************************************************!*\
  !*** ./src/app/pages/attendence/attendence.service.ts ***!
  \********************************************************/
/*! exports provided: AttendenceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendenceService", function() { return AttendenceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/@core/http/http-dispatcher.service */ "S8Xg");




const routes = {
    api: {
        getAll: () => `/api/mobile/attendancenew`,
    },
};
class AttendenceService {
    constructor(httpDispatcher) {
        this.httpDispatcher = httpDispatcher;
    }
    getAll(year) {
        return this.httpDispatcher.get(routes.api.getAll() + `?year=${year}&month=0`);
    }
}
AttendenceService.ɵfac = function AttendenceService_Factory(t) { return new (t || AttendenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__["HttpDispatcherService"])); };
AttendenceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AttendenceService, factory: AttendenceService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttendenceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__["HttpDispatcherService"] }]; }, null); })();


/***/ }),

/***/ "dQnq":
/*!**********************************************************!*\
  !*** ./src/app/pages/examination/examination.service.ts ***!
  \**********************************************************/
/*! exports provided: ExaminationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationService", function() { return ExaminationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/@core/http/http-dispatcher.service */ "S8Xg");




const routes = {
    api: {
        getAll: () => `/api/Mobile/examlist`,
    },
};
class ExaminationService {
    constructor(httpDispatcher) {
        this.httpDispatcher = httpDispatcher;
    }
    getAll() {
        return this.httpDispatcher.get(routes.api.getAll());
    }
}
ExaminationService.ɵfac = function ExaminationService_Factory(t) { return new (t || ExaminationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__["HttpDispatcherService"])); };
ExaminationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExaminationService, factory: ExaminationService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExaminationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__["HttpDispatcherService"] }]; }, null); })();


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "viRw");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support/support.component */ "0JyM");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _online_learning_online_learning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./online-learning/online-learning.component */ "HdI/");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/@shared */ "9urI");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alerts/alerts.component */ "lmVQ");
/* harmony import */ var _communication_communication_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./communication/communication.component */ "socE");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notification/notification.component */ "rc6o");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timetable/timetable.component */ "DgZg");
/* harmony import */ var _examination_examination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examination/examination.component */ "D1Kj");
/* harmony import */ var _attendence_attendence_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./attendence/attendence.component */ "9zFR");
/* harmony import */ var _fees_fees_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fees/fees.component */ "y19P");















class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"], _app_shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_support_support_component__WEBPACK_IMPORTED_MODULE_3__["SupportComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        _online_learning_online_learning_component__WEBPACK_IMPORTED_MODULE_5__["OnlineLearningComponent"],
        _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__["AlertsComponent"],
        _communication_communication_component__WEBPACK_IMPORTED_MODULE_8__["CommunicationComponent"],
        _notification_notification_component__WEBPACK_IMPORTED_MODULE_9__["NotificationComponent"],
        _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_10__["TimetableComponent"],
        _examination_examination_component__WEBPACK_IMPORTED_MODULE_11__["ExaminationComponent"],
        _attendence_attendence_component__WEBPACK_IMPORTED_MODULE_12__["AttendenceComponent"],
        _fees_fees_component__WEBPACK_IMPORTED_MODULE_13__["FeesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"], _app_shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _support_support_component__WEBPACK_IMPORTED_MODULE_3__["SupportComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                    _online_learning_online_learning_component__WEBPACK_IMPORTED_MODULE_5__["OnlineLearningComponent"],
                    _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__["AlertsComponent"],
                    _communication_communication_component__WEBPACK_IMPORTED_MODULE_8__["CommunicationComponent"],
                    _notification_notification_component__WEBPACK_IMPORTED_MODULE_9__["NotificationComponent"],
                    _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_10__["TimetableComponent"],
                    _examination_examination_component__WEBPACK_IMPORTED_MODULE_11__["ExaminationComponent"],
                    _attendence_attendence_component__WEBPACK_IMPORTED_MODULE_12__["AttendenceComponent"],
                    _fees_fees_component__WEBPACK_IMPORTED_MODULE_13__["FeesComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"], _app_shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "jgaM":
/*!********************************************!*\
  !*** ./src/app/pages/fees/fees.service.ts ***!
  \********************************************/
/*! exports provided: FeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesService", function() { return FeesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/@core/http/http-dispatcher.service */ "S8Xg");




const routes = {
    api: {
        getPayment: () => `/api/Mobile/feespayment`,
        getAdvanceInstallments: () => `/api/Mobile/feesAdvanceinstallment`,
        getFine: () => `/api/Mobile/fine`,
        getFeesStructure: () => `/api/Mobile/feesstructure`,
    },
};
class FeesService {
    constructor(httpDispatcher) {
        this.httpDispatcher = httpDispatcher;
    }
    getPayment() {
        return this.httpDispatcher.get(routes.api.getPayment());
    }
    getAdvanceInstallments() {
        return this.httpDispatcher.get(routes.api.getAdvanceInstallments());
    }
    getFine(rollno) {
        return this.httpDispatcher.get(routes.api.getFine() + `?rollno=${rollno}`);
    }
    getFeesStructure() {
        return this.httpDispatcher.get(routes.api.getFeesStructure());
    }
}
FeesService.ɵfac = function FeesService_Factory(t) { return new (t || FeesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__["HttpDispatcherService"])); };
FeesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FeesService, factory: FeesService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__["HttpDispatcherService"] }]; }, null); })();


/***/ }),

/***/ "lmVQ":
/*!**************************************************!*\
  !*** ./src/app/pages/alerts/alerts.component.ts ***!
  \**************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _alerts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts.service */ "CC80");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AlertsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.senderImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.senderName, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n                        ", item_r1.date, "\n                    ");
} }
class AlertsComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getAllAlerts().subscribe((response) => {
            console.log(response);
            this.list = response;
        });
    }
}
AlertsComponent.ɵfac = function AlertsComponent_Factory(t) { return new (t || AlertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alerts_service__WEBPACK_IMPORTED_MODULE_1__["AlertsService"])); };
AlertsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertsComponent, selectors: [["app-alerts"]], decls: 4, vars: 1, consts: [[1, "cus-container"], ["class", "card card-style\n    ", 4, "ngFor", "ngForOf"], [1, "card", "card-style"], [1, "content", "mb-0", "mt-0", "pt-3"], [1, "list-group", "list-custom-large", "list-icon-0", "check-visited"], [1, "show-offline"], [1, "font-11"], [3, "src"], [1, "message", "font-13", 3, "innerHtml"], [1, "font-8", "text-right"]], template: function AlertsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlertsComponent_div_2_Template, 21, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".show-offline[_ngcontent-%COMP%] {\n  color: #1f1f1f;\n}\n.show-offline[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbGVydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0FBRVIiLCJmaWxlIjoiYWxlcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3ctb2ZmbGluZSB7XHJcbiAgICBjb2xvcjogIzFmMWYxZjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG59Il19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alerts',
                templateUrl: './alerts.component.html',
                styleUrls: ['./alerts.component.scss'],
            }]
    }], function () { return [{ type: _alerts_service__WEBPACK_IMPORTED_MODULE_1__["AlertsService"] }]; }, null); })();


/***/ }),

/***/ "rc6o":
/*!**************************************************************!*\
  !*** ./src/app/pages/notification/notification.component.ts ***!
  \**************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.service */ "04Th");




class NotificationComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getAll().subscribe((response) => {
            console.log(response);
        });
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"])); };
NotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 3, vars: 0, template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notification works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification',
                templateUrl: './notification.component.html',
                styleUrls: ['./notification.component.scss'],
            }]
    }], function () { return [{ type: _notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "socE":
/*!****************************************************************!*\
  !*** ./src/app/pages/communication/communication.component.ts ***!
  \****************************************************************/
/*! exports provided: CommunicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationComponent", function() { return CommunicationComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/@core/services/user.service */ "vEZ/");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./communication.service */ "9wAs");







class CommunicationComponent {
    constructor(userService, service) {
        this.userService = userService;
        this.service = service;
    }
    ngOnInit() {
        this.userService.whoAmI().subscribe((response) => {
            this.whoAmI = response[0];
            this.currentDate = new Date();
            this.getCommunication();
        });
    }
    getCommunication() {
        this.txtDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(this.currentDate, 'yyyy-MM-dd', 'en-US');
        this.service
            .getAllCommunication(this.whoAmI.UserId, Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(this.currentDate, 'yyyy-MM-dd', 'en-US'))
            .subscribe((response) => {
            console.log(response);
        });
    }
    setNextDay() {
        this.currentDate.setDate(this.currentDate.getDate() + 1);
        this.getCommunication();
    }
    setPrevioutDay() {
        this.currentDate.setDate(this.currentDate.getDate() - 1);
        this.getCommunication();
    }
}
CommunicationComponent.ɵfac = function CommunicationComponent_Factory(t) { return new (t || CommunicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"])); };
CommunicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CommunicationComponent, selectors: [["app-communication"]], decls: 12, vars: 1, consts: [[3, "click"]], template: function CommunicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "communication works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\nDate:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommunicationComponent_Template_a_click_6_listener() { return ctx.setNextDay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommunicationComponent_Template_a_click_9_listener() { return ctx.setPrevioutDay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.txtDate);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tdW5pY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommunicationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-communication',
                templateUrl: './communication.component.html',
                styleUrls: ['./communication.component.scss'],
            }]
    }], function () { return [{ type: _app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"] }]; }, null); })();


/***/ }),

/***/ "viRw":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alerts/alerts.component */ "lmVQ");
/* harmony import */ var _attendence_attendence_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attendence/attendence.component */ "9zFR");
/* harmony import */ var _communication_communication_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./communication/communication.component */ "socE");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _examination_examination_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examination/examination.component */ "D1Kj");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notification/notification.component */ "rc6o");
/* harmony import */ var _online_learning_online_learning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./online-learning/online-learning.component */ "HdI/");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./support/support.component */ "0JyM");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timetable/timetable.component */ "DgZg");













const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
    },
    {
        path: 'support',
        component: _support_support_component__WEBPACK_IMPORTED_MODULE_9__["SupportComponent"],
        data: { title: 'Support' },
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        data: { title: 'Dashboard' },
    },
    {
        path: 'online-learning',
        component: _online_learning_online_learning_component__WEBPACK_IMPORTED_MODULE_8__["OnlineLearningComponent"],
        data: { title: 'Online Learning' },
    },
    {
        path: 'alerts',
        component: _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_2__["AlertsComponent"],
        data: { title: 'Alerts' },
    },
    {
        path: 'communication',
        component: _communication_communication_component__WEBPACK_IMPORTED_MODULE_4__["CommunicationComponent"],
        data: { title: 'Communication' },
    },
    {
        path: 'notification',
        component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_7__["NotificationComponent"],
        data: { title: 'Notification' },
    },
    {
        path: 'examination',
        component: _examination_examination_component__WEBPACK_IMPORTED_MODULE_6__["ExaminationComponent"],
        data: { title: 'Examination' },
    },
    {
        path: 'timetable',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_10__["TimetableComponent"],
        data: { title: 'Timetable' },
    },
    {
        path: 'attendence',
        component: _attendence_attendence_component__WEBPACK_IMPORTED_MODULE_3__["AttendenceComponent"],
        data: { title: 'Attendence' },
    },
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); };
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "xuj4":
/*!******************************************************!*\
  !*** ./src/app/pages/timetable/timetable.service.ts ***!
  \******************************************************/
/*! exports provided: TimetableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableService", function() { return TimetableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/@core/http/http-dispatcher.service */ "S8Xg");




const routes = {
    api: {
        getAll: () => `/api/Mobile/notifications`,
    },
};
class TimetableService {
    constructor(httpDispatcher) {
        this.httpDispatcher = httpDispatcher;
    }
    getAll() {
        return this.httpDispatcher.get(routes.api.getAll());
    }
}
TimetableService.ɵfac = function TimetableService_Factory(t) { return new (t || TimetableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__["HttpDispatcherService"])); };
TimetableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimetableService, factory: TimetableService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimetableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _app_core_http_http_dispatcher_service__WEBPACK_IMPORTED_MODULE_1__["HttpDispatcherService"] }]; }, null); })();


/***/ }),

/***/ "y19P":
/*!**********************************************!*\
  !*** ./src/app/pages/fees/fees.component.ts ***!
  \**********************************************/
/*! exports provided: FeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesComponent", function() { return FeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fees.service */ "jgaM");




class FeesComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() { }
}
FeesComponent.ɵfac = function FeesComponent_Factory(t) { return new (t || FeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fees_service__WEBPACK_IMPORTED_MODULE_1__["FeesService"])); };
FeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeesComponent, selectors: [["app-fees"]], decls: 3, vars: 0, template: function FeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fees works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fees',
                templateUrl: './fees.component.html',
                styleUrls: ['./fees.component.scss'],
            }]
    }], function () { return [{ type: _fees_service__WEBPACK_IMPORTED_MODULE_1__["FeesService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map
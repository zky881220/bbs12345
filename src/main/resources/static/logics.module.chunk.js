webpackJsonp(["logics.module"],{

/***/ "../../../../../src/app/routes/logics/acl/acl.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n    <h1>\r\n        ACL 访问控制 <small>注意观察左边的菜单；ACLService提供一个完整的基于角色的访问控制的服务，若需要支持路由守卫，请配合ACLService与Route Guard配合简便实现。</small>\r\n    </h1>\r\n</div>\r\n<div nz-row [nzGutter]=\"8\">\r\n    <div nz-col [nzSpan]=\"8\">\r\n        <nz-card>\r\n            <ng-template #title>全量</ng-template>\r\n            <ng-template #body>\r\n                <button nz-button (click)=\"toggleFull()\">\r\n                    <span>{{ full ? '离开' : '设置'}}权限</span>\r\n                </button>\r\n                <p class=\"pt-md\">全量类指系统管理员角色，无任何受限。</p>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzSpan]=\"8\">\r\n        <nz-card>\r\n            <ng-template #title>角色[role-a]</ng-template>\r\n            <ng-template #body>\r\n                <button nz-button (click)=\"toggleRoleA()\">\r\n                    <span>{{ roleA.length > 0 ? '离开' : '设置'}}权限</span>\r\n                </button>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzSpan]=\"8\">\r\n        <nz-card>\r\n            <ng-template #title>角色[role-b]</ng-template>\r\n            <ng-template #body>\r\n                <button nz-button (click)=\"toggleRoleB()\">\r\n                    <span>{{ roleB.length > 0 ? '离开' : '设置'}}权限</span>\r\n                </button>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/logics/acl/acl.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACLComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_menu_service__ = __webpack_require__("../../../../../src/app/core/services/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_acl_acl_service__ = __webpack_require__("../../../../../src/app/core/acl/acl.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ACLComponent = /** @class */ (function () {
    function ACLComponent(aclService, menuSrv) {
        this.aclService = aclService;
        this.menuSrv = menuSrv;
        this.full = true;
        this.roleA = '';
        this.roleB = '';
    }
    ACLComponent.prototype.toggleFull = function () {
        this.full = !this.full;
        this.aclService.setFull(this.full);
        this.menuSrv.resume();
    };
    ACLComponent.prototype.toggleRoleA = function () {
        this.full = false;
        this.roleA = this.roleA.length > 0 ? '' : 'role-a';
        this.aclService.setFull(this.full);
        this.aclService.setRole([this.roleA]);
        this.menuSrv.resume();
    };
    ACLComponent.prototype.toggleRoleB = function () {
        this.full = false;
        this.roleB = this.roleB.length > 0 ? '' : 'role-b';
        this.aclService.setFull(this.full);
        this.aclService.setRole([this.roleB]);
        this.menuSrv.resume();
    };
    ACLComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-acl',
            template: __webpack_require__("../../../../../src/app/routes/logics/acl/acl.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_acl_acl_service__["a" /* ACLService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_acl_acl_service__["a" /* ACLService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_menu_service__["a" /* MenuService */]) === "function" && _b || Object])
    ], ACLComponent);
    return ACLComponent;
    var _a, _b;
}());

//# sourceMappingURL=acl.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/logics/downfile/downfile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\n    <h1>Download a file</h1>\n</div>\n<nz-card>\n    <ng-template #title>DEMO</ng-template>\n    <ng-template #body>\n        <button nz-button *ngFor=\"let i of fileTypes\" class=\"mr-sm\"\n            down-file [http-data]=\"data\" http-url=\"assets/demo{{i}}\" file-name=\"demo中文\">{{i}}</button>\n    </ng-template>\n</nz-card>"

/***/ }),

/***/ "../../../../../src/app/routes/logics/downfile/downfile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DownFileComponent = /** @class */ (function () {
    function DownFileComponent() {
        this.fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];
        this.data = {
            otherdata: 1,
            time: new Date()
        };
    }
    DownFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-down-file',
            template: __webpack_require__("../../../../../src/app/routes/logics/downfile/downfile.component.html")
        })
    ], DownFileComponent);
    return DownFileComponent;
}());

//# sourceMappingURL=downfile.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/logics/guard/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GuardAdminComponent = /** @class */ (function () {
    function GuardAdminComponent() {
    }
    GuardAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-guard-admin',
            template: "\n    <p>\u8FD9\u662F\u4E00\u4E2A\u7BA1\u7406\u5458\u9875\u9762</p>\n    "
        })
    ], GuardAdminComponent);
    return GuardAdminComponent;
}());

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/logics/guard/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardAuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GuardAuthComponent = /** @class */ (function () {
    function GuardAuthComponent() {
    }
    GuardAuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-guard-auth',
            template: "\n    <p>\u8FD9\u662F\u4E00\u4E2A\u9700\u8981\u767B\u5F55\u4EE5\u540E\u9875\u9762</p>\n    "
        })
    ], GuardAuthComponent);
    return GuardAuthComponent;
}());

//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/logics/guard/can-admin.provide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanAdminProvide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__ = __webpack_require__("../../../../_ng-zorro-antd@0.5.4@ng-zorro-antd/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/routes/logics/guard/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CanAdminProvide = /** @class */ (function () {
    function CanAdminProvide(userSrv, msg) {
        this.userSrv = userSrv;
        this.msg = msg;
    }
    CanAdminProvide.prototype.canActivate = function (route, state) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            if (_this.userSrv.hasRole('admin')) {
                observer.next(true);
                observer.complete();
                return;
            }
            _this.msg.error('授权不足');
            observer.next(false);
            observer.complete();
        });
    };
    CanAdminProvide = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__["b" /* NzMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__["b" /* NzMessageService */]) === "function" && _b || Object])
    ], CanAdminProvide);
    return CanAdminProvide;
    var _a, _b;
}());

//# sourceMappingURL=can-admin.provide.js.map

/***/ }),

/***/ "../../../../../src/app/routes/logics/guard/can-auth.provide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanAuthProvide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/routes/logics/guard/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__ = __webpack_require__("../../../../_ng-zorro-antd@0.5.4@ng-zorro-antd/esm5/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CanAuthProvide = /** @class */ (function () {
    function CanAuthProvide(userSrv, msg) {
        this.userSrv = userSrv;
        this.msg = msg;
    }
    CanAuthProvide.prototype.canActivate = function (route, state) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            if (_this.userSrv.isLogin) {
                observer.next(true);
                observer.complete();
                return;
            }
            _this.msg.error('请先登录');
            observer.next(false);
            observer.complete();
        });
    };
    CanAuthProvide = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__["b" /* NzMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__["b" /* NzMessageService */]) === "function" && _b || Object])
    ], CanAuthProvide);
    return CanAuthProvide;
    var _a, _b;
}());

//# sourceMappingURL=can-auth.provide.js.map

/***/ }),

/***/ "../../../../../src/app/routes/logics/guard/can-leave.provide.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanLeaveProvide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__("../../../../_ng-zorro-antd@0.5.4@ng-zorro-antd/esm5/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanLeaveProvide = /** @class */ (function () {
    function CanLeaveProvide(confirmSrv) {
        this.confirmSrv = confirmSrv;
    }
    CanLeaveProvide.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.confirmSrv.confirm({
                title: '确认要离开吗？',
                content: '你已经填写了部分表单离开会放弃已经填写的内容。',
                okText: '离开',
                cancelText: '取消',
                onOk: function () {
                    observer.next(true);
                    observer.complete();
                },
                onCancel: function () {
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    };
    CanLeaveProvide = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["c" /* NzModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["c" /* NzModalService */]) === "function" && _a || Object])
    ], CanLeaveProvide);
    return CanLeaveProvide;
    var _a;
}());

//# sourceMappingURL=can-leave.provide.js.map

/***/ }),

/***/ "../../../../../src/app/routes/logics/guard/guard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n    <h1>\r\n        路由守卫\r\n    </h1>\r\n</div>\r\n<nz-button-group>\r\n    <button nz-button [routerLink]=\"['/logics/guard/leave']\">\r\n        <span>离开确认页</span>\r\n    </button>\r\n    <button nz-button [routerLink]=\"['/logics/guard/auth']\">\r\n        <span>需要授权页</span>\r\n    </button>\r\n    <button nz-button [routerLink]=\"['/logics/guard/admin']\">\r\n        <span>需要管理角色页</span>\r\n    </button>\r\n</nz-button-group>\r\n<nz-button-group>\r\n    <button nz-button (click)=\"toggleLogin()\">\r\n        <span>设置【{{ userSrv.isLogin ? '未' : '已' }}登录】</span>\r\n    </button>\r\n    <button nz-button (click)=\"toggleRule()\">\r\n        <span>设置【{{ !userSrv.hasRole('admin') ? '管理员' : '员工' }}】</span>\r\n    </button>\r\n</nz-button-group>\r\n<p class=\"mb-lg\">\r\n    登录状态：{{ userSrv.isLogin ? '已' : '未' }}登录<br>\r\n    角色：{{ userSrv.hasRole('admin') ? '管理员' : '员工' }}\r\n</p>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/logics/guard/guard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../../_@angular_router@4.4.5@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/routes/logics/guard/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuardComponent = /** @class */ (function () {
    function GuardComponent(userSrv, router) {
        this.userSrv = userSrv;
        this.router = router;
    }
    GuardComponent.prototype.toggleLogin = function () {
        if (this.userSrv.isLogin) {
            this.userSrv.logout();
        }
        else {
            this.userSrv.login('admin');
        }
        this.router.navigate(['/logics/guard']);
    };
    GuardComponent.prototype.toggleRule = function () {
        if (this.userSrv.hasRole('admin')) {
            this.userSrv.login('employee');
        }
        else {
            this.userSrv.login('admin');
        }
        this.router.navigate(['/logics/guard']);
    };
    GuardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-guard',
            template: __webpack_require__("../../../../../src/app/routes/logics/guard/guard.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* Router */]) === "function" && _b || Object])
    ], GuardComponent);
    return GuardComponent;
    var _a, _b;
}());

//# sourceMappingURL=guard.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/logics/guard/leave.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuardLeaveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GuardLeaveComponent = /** @class */ (function () {
    function GuardLeaveComponent() {
    }
    GuardLeaveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-guard-leave',
            template: "\n    <p>\u79BB\u5F00\u65F6\u9700\u8981\u786E\u8BA4</p>\n    <button nz-button [nzType]=\"'primary'\" [routerLink]=\"['/logics/guard']\">\n        <span>\u6211\u8981\u79BB\u5F00</span>\n    </button>\n    "
        })
    ], GuardLeaveComponent);
    return GuardLeaveComponent;
}());

//# sourceMappingURL=leave.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/logics/guard/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserService = /** @class */ (function () {
    function UserService() {
        this._isLogin = false;
        this._user = '';
        this._role = [];
        this._token = '';
    }
    Object.defineProperty(UserService.prototype, "isLogin", {
        get: function () {
            return this._isLogin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "token", {
        get: function () {
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.hasRole = function (name) {
        return this._role.includes(name);
    };
    UserService.prototype.login = function (user) {
        this._user = user;
        // mock
        if (user === 'admin') {
            this._role = ['admin'];
        }
        else {
            this._role = ['employee'];
        }
        this._isLogin = true;
        this._token = '' + Math.random();
        console.log(user, this._isLogin, this._role);
    };
    UserService.prototype.logout = function () {
        this._user = '';
        this._isLogin = false;
        this._token = '';
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/routes/logics/logics.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicsModule", function() { return LogicsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.4.5@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guard_guard_component__ = __webpack_require__("../../../../../src/app/routes/logics/guard/guard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guard_can_leave_provide__ = __webpack_require__("../../../../../src/app/routes/logics/guard/can-leave.provide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guard_user_service__ = __webpack_require__("../../../../../src/app/routes/logics/guard/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guard_can_auth_provide__ = __webpack_require__("../../../../../src/app/routes/logics/guard/can-auth.provide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guard_can_admin_provide__ = __webpack_require__("../../../../../src/app/routes/logics/guard/can-admin.provide.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guard_admin_component__ = __webpack_require__("../../../../../src/app/routes/logics/guard/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guard_auth_component__ = __webpack_require__("../../../../../src/app/routes/logics/guard/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guard_leave_component__ = __webpack_require__("../../../../../src/app/routes/logics/guard/leave.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__acl_acl_component__ = __webpack_require__("../../../../../src/app/routes/logics/acl/acl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_routes_logics_downfile_downfile_component__ = __webpack_require__("../../../../../src/app/routes/logics/downfile/downfile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: 'guard',
        component: __WEBPACK_IMPORTED_MODULE_3__guard_guard_component__["a" /* GuardComponent */],
        children: [
            { path: 'leave', component: __WEBPACK_IMPORTED_MODULE_10__guard_leave_component__["a" /* GuardLeaveComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_4__guard_can_leave_provide__["a" /* CanLeaveProvide */]] },
            { path: 'auth', component: __WEBPACK_IMPORTED_MODULE_9__guard_auth_component__["a" /* GuardAuthComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guard_can_auth_provide__["a" /* CanAuthProvide */]] },
            { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_8__guard_admin_component__["a" /* GuardAdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guard_can_admin_provide__["a" /* CanAdminProvide */]] }
        ]
    },
    { path: 'acl', component: __WEBPACK_IMPORTED_MODULE_11__acl_acl_component__["a" /* ACLComponent */] },
    { path: 'downfile', component: __WEBPACK_IMPORTED_MODULE_12_app_routes_logics_downfile_downfile_component__["a" /* DownFileComponent */] }
];
var LogicsModule = /** @class */ (function () {
    function LogicsModule() {
    }
    LogicsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__guard_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__guard_can_leave_provide__["a" /* CanLeaveProvide */], __WEBPACK_IMPORTED_MODULE_6__guard_can_auth_provide__["a" /* CanAuthProvide */], __WEBPACK_IMPORTED_MODULE_7__guard_can_admin_provide__["a" /* CanAdminProvide */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__guard_guard_component__["a" /* GuardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__guard_leave_component__["a" /* GuardLeaveComponent */],
                __WEBPACK_IMPORTED_MODULE_8__guard_admin_component__["a" /* GuardAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_9__guard_auth_component__["a" /* GuardAuthComponent */],
                __WEBPACK_IMPORTED_MODULE_11__acl_acl_component__["a" /* ACLComponent */],
                __WEBPACK_IMPORTED_MODULE_12_app_routes_logics_downfile_downfile_component__["a" /* DownFileComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
            ]
        })
    ], LogicsModule);
    return LogicsModule;
}());

//# sourceMappingURL=logics.module.js.map

/***/ })

});
//# sourceMappingURL=logics.module.chunk.js.map
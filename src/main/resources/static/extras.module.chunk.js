webpackJsonp(["extras.module"],{

/***/ "../../../../../src/app/routes/extras/extras.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasModule", function() { return ExtrasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.4.5@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpcenter_helpcenter_component__ = __webpack_require__("../../../../../src/app/routes/extras/helpcenter/helpcenter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__ = __webpack_require__("../../../../../src/app/routes/extras/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__poi_poi_component__ = __webpack_require__("../../../../../src/app/routes/extras/poi/poi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__poi_edit_edit_component__ = __webpack_require__("../../../../../src/app/routes/extras/poi/edit/edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'helpcenter', component: __WEBPACK_IMPORTED_MODULE_3__helpcenter_helpcenter_component__["a" /* HelpCenterComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__["a" /* ExtrasSettingsComponent */] },
    { path: 'poi', component: __WEBPACK_IMPORTED_MODULE_5__poi_poi_component__["a" /* ExtrasPoiComponent */] }
];
var COMPONENTS_NOROUNT = [__WEBPACK_IMPORTED_MODULE_6__poi_edit_edit_component__["a" /* ExtrasPoiEditComponent */]];
var ExtrasModule = /** @class */ (function () {
    function ExtrasModule() {
    }
    ExtrasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__helpcenter_helpcenter_component__["a" /* HelpCenterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__settings_settings_component__["a" /* ExtrasSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__poi_poi_component__["a" /* ExtrasPoiComponent */]
            ].concat(COMPONENTS_NOROUNT),
            entryComponents: COMPONENTS_NOROUNT
        })
    ], ExtrasModule);
    return ExtrasModule;
}());

//# sourceMappingURL=extras.module.js.map

/***/ }),

/***/ "../../../../../src/app/routes/extras/helpcenter/helpcenter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center pb-lg\">\r\n    <h1 class=\"py-md mt-sm\">帮助中心</h1>\r\n    <p>帮助用户快速找到问题答案</p>\r\n</div>\r\n<div class=\"text-center\">\r\n    <nz-input-group [nzCompact]=\"true\">\r\n        <input [(ngModel)]=\"q\" placeholder=\"请用关键词进行搜索，例如“服务器密码重置”\" style=\"width: 50%;\" nz-input [nzSize]=\"'large'\">\r\n        <nz-select [(ngModel)]=\"type\" [nzSize]=\"'large'\" style=\"width:20%;\">\r\n            <nz-option [nzLabel]=\"'不限'\" [nzValue]=\"''\"></nz-option>\r\n            <nz-option [nzLabel]=\"'弹性计算'\" [nzValue]=\"'弹性计算'\"></nz-option>\r\n            <nz-option [nzLabel]=\"'存储与CDN'\" [nzValue]=\"'存储与CDN'\"></nz-option>\r\n            <nz-option [nzLabel]=\"'会员服务'\" [nzValue]=\"'会员服务'\"></nz-option>\r\n            <nz-option [nzLabel]=\"'数据库'\" [nzValue]=\"'数据库'\"></nz-option>\r\n        </nz-select>\r\n        <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" (click)=\"search()\">\r\n            <span>搜索</span>\r\n        </button>\r\n    </nz-input-group>\r\n    <p class=\"py-sm text-grey-dark\">\r\n        搜索热词：\r\n        <a (click)=\"quick('远程连接服务器')\">远程连接服务器</a>\r\n        <a (click)=\"quick('挂载数据盘')\">挂载数据盘</a>\r\n        <a (click)=\"quick('域名解析')\">域名解析</a>\r\n        <a (click)=\"quick('域名实名认证')\">域名实名认证</a>\r\n        <a (click)=\"quick('账号实名认证')\">账号实名认证</a>\r\n        <a (click)=\"quick('忘记密码')\">忘记密码</a>\r\n    </p>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\" class=\"py-lg\">\r\n    <div nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n        <nz-card>\r\n            <ng-template #body>\r\n                <a (click)=\"msg.info('弹性计算')\" class=\"d-block text-center text-primary\">\r\n                    <i class=\"fa fa-5x fa-television mb-lg\"></i>\r\n                    <h2>弹性计算</h2>\r\n                </a>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n        <nz-card>\r\n            <ng-template #body>\r\n                <a (click)=\"msg.info('存储与CDN')\" class=\"d-block text-center text-red\">\r\n                    <i class=\"fa fa-5x fa-coffee mb-lg\"></i>\r\n                    <h2>存储与CDN</h2>\r\n                </a>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n        <nz-card>\r\n            <ng-template #body>\r\n                <a (click)=\"msg.info('会员服务')\" class=\"d-block text-center text-orange\">\r\n                    <i class=\"anticon anticon-user fa-5x mb-lg\"></i>\r\n                    <h2>会员服务</h2>\r\n                </a>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n        <nz-card>\r\n            <ng-template #body>\r\n                <a (click)=\"msg.info('数据库')\" class=\"d-block text-center text-purple\">\r\n                    <i class=\"fa fa-5x fa-database mb-lg\"></i>\r\n                    <h2>数据库</h2>\r\n                </a>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n        <nz-card>\r\n            <ng-template #body>\r\n                <a (click)=\"msg.info('域名与网站')\" class=\"d-block text-center text-cyan\">\r\n                    <i class=\"fa fa-5x fa-sitemap mb-lg\"></i>\r\n                    <h2>域名与网站</h2>\r\n                </a>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n        <nz-card>\r\n            <ng-template #body>\r\n                <a (click)=\"msg.info('网络')\" class=\"d-block text-center text-teal\">\r\n                    <i class=\"fa fa-5x fa-eraser mb-lg\"></i>\r\n                    <h2>网络</h2>\r\n                </a>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n        <nz-card>\r\n            <ng-template #body>\r\n                <a (click)=\"msg.info('应用服务')\" class=\"d-block text-center text-pink\">\r\n                    <i class=\"anticon fa-5x anticon-appstore-o mb-lg\"></i>\r\n                    <h2>应用服务</h2>\r\n                </a>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n        <nz-card>\r\n            <ng-template #body>\r\n                <a (click)=\"msg.info('开发者工具')\" class=\"d-block text-center text-success\">\r\n                    <i class=\"anticon fa-5x anticon-tool mb-lg\"></i>\r\n                    <h2>开发者工具</h2>\r\n                </a>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/extras/helpcenter/helpcenter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpCenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__ = __webpack_require__("../../../../_ng-zorro-antd@0.5.4@ng-zorro-antd/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpCenterComponent = /** @class */ (function () {
    function HelpCenterComponent(msg) {
        this.msg = msg;
        this.type = '';
        this.q = '';
    }
    HelpCenterComponent.prototype.quick = function (key) {
        this.q = key;
        this.search();
    };
    HelpCenterComponent.prototype.search = function () {
        this.msg.success("\u641C\u7D22\uFF1A" + this.q);
    };
    HelpCenterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-helpcenter',
            template: __webpack_require__("../../../../../src/app/routes/extras/helpcenter/helpcenter.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__["b" /* NzMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__["b" /* NzMessageService */]) === "function" && _a || Object])
    ], HelpCenterComponent);
    return HelpCenterComponent;
    var _a;
}());

//# sourceMappingURL=helpcenter.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/extras/poi/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <div class=\"modal-title\">{{i.id > 0 ? '编辑' : '添加'}}-门店（基于HTML模板表单写法）</div>\r\n</div>\r\n<form #f=\"ngForm\" (ngSubmit)=\"save()\" nz-form [nzType]=\"'horizontal'\">\r\n    <div nz-form-item nz-row class=\"mb-sm\">\r\n        <div nz-form-label nz-col [nzSpan]=\"4\"><label>所属分销商</label></div>\r\n        <div nz-form-control nz-col [nzSpan]=\"8\">\r\n            {{i.user_id}}\r\n            <a (click)=\"msgSrv.info('find')\">查找用户</a>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row class=\"mb-sm\">\r\n        <div nz-form-label nz-col [nzSpan]=\"4\"><label>门店名称</label></div>\r\n        <div nz-form-control nz-col [nzSpan]=\"8\">\r\n            <input nz-input [(ngModel)]=\"i.name\" name=\"name\" maxlength=\"30\" required />\r\n            <p nz-form-explain>如：国美、麦当劳，不应包含地区、地址、分店名等信息，错误示例：北京国美</p>\r\n        </div>\r\n        <div nz-form-label nz-col [nzSpan]=\"4\"><label>分店名称</label></div>\r\n        <div nz-form-control nz-col [nzSpan]=\"8\">\r\n            <input nz-input [(ngModel)]=\"i.branch_name\" name=\"branch_name\" maxlength=\"20\" required />\r\n            <p nz-form-explain>不应包含地区信息，不应与门店名有重复，错误示例：北京王府井店</p>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row class=\"mb-sm\">\r\n        <div nz-form-label nz-col [nzSpan]=\"4\"><label>所在地</label></div>\r\n        <div nz-form-control nz-col [nzSpan]=\"8\">\r\n            <input nz-input [(ngModel)]=\"i.geo\" name=\"geo\" maxlength=\"50\" required />\r\n        </div>\r\n        <div nz-form-label nz-col [nzSpan]=\"4\"><label>街道地址</label></div>\r\n        <div nz-form-control nz-col [nzSpan]=\"8\">\r\n            <input nz-input [(ngModel)]=\"i.address\" name=\"address\" maxlength=\"50\" required />\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row class=\"mb-sm\">\r\n        <div nz-form-label nz-col [nzSpan]=\"4\"><label>纬度</label></div>\r\n        <div nz-form-control nz-col [nzSpan]=\"8\">\r\n            <input nz-input [(ngModel)]=\"i.lat\" name=\"lat\" required />\r\n        </div>\r\n        <div nz-form-label nz-col [nzSpan]=\"4\"><label>经度</label></div>\r\n        <div nz-form-control nz-col [nzSpan]=\"8\">\r\n            <input nz-input [(ngModel)]=\"i.lng\" name=\"lng\" required />\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row class=\"mb-sm\">\r\n        <div nz-form-label nz-col [nzSpan]=\"4\"><label>电话</label></div>\r\n        <div nz-form-control nz-col [nzSpan]=\"8\">\r\n            <input nz-input [(ngModel)]=\"i.tel\" name=\"tel\" maxlength=\"30\" required />\r\n        </div>\r\n        <div nz-form-label nz-col [nzSpan]=\"4\"><label>门店类型</label></div>\r\n        <div nz-form-control nz-col [nzSpan]=\"8\">\r\n            <nz-select [(ngModel)]=\"i.categories\" name=\"categories\" required [nzAllowClear]=\"false\">\r\n                <nz-option\r\n                    *ngFor=\"let i of cat\"\r\n                    [nzLabel]=\"i\"\r\n                    [nzValue]=\"i\">\r\n                </nz-option>\r\n            </nz-select>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row class=\"mb-sm\">\r\n        <div nz-form-label nz-col [nzSpan]=\"4\"><label>推荐品</label></div>\r\n        <div nz-form-control nz-col [nzSpan]=\"8\">\r\n            <input nz-input [(ngModel)]=\"i.recommend\" name=\"recommend\" maxlength=\"200\" placeholder=\"200字以内\" />\r\n        </div>\r\n        <div nz-form-label nz-col [nzSpan]=\"4\"><label>特色服务</label></div>\r\n        <div nz-form-control nz-col [nzSpan]=\"8\">\r\n            <input nz-input [(ngModel)]=\"i.special\" name=\"special\" maxlength=\"50\" placeholder=\"50字以内\" />\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row class=\"mb-sm\">\r\n        <div nz-form-label nz-col [nzSpan]=\"4\"><label>商户简介</label></div>\r\n        <div nz-form-control nz-col [nzSpan]=\"8\">\r\n            <input nz-input [(ngModel)]=\"i.introduction\" name=\"introduction\" maxlength=\"300\" placeholder=\"300字以内\" />\r\n        </div>\r\n        <div nz-form-label nz-col [nzSpan]=\"4\"><label>营业时间</label></div>\r\n        <div nz-form-control nz-col [nzSpan]=\"8\">\r\n            <input nz-input [(ngModel)]=\"i.open_time\" name=\"open_time\" maxlength=\"30\" placeholder=\"30字以内\" />\r\n        </div>\r\n    </div>\r\n    <div nz-form-item nz-row class=\"mb-sm\">\r\n        <div nz-form-label nz-col [nzSpan]=\"4\"><label>人均价格</label></div>\r\n        <div nz-form-control nz-col [nzSpan]=\"8\">\r\n            <nz-input-number [(ngModel)]=\"i.avg_price\" name=\"avg_price\" [nzMin]=\"0\" [nzStep]=\"10\"></nz-input-number>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button nz-button type=\"button\" (click)=\"close()\">关闭</button>\r\n        <button nz-button [disabled]=\"!f.form.valid || !f.form.dirty\" [nzLoading]=\"http.loading\" [nzType]=\"'primary'\">保存</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/extras/poi/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtrasPoiEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__ = __webpack_require__("../../../../_ng-zorro-antd@0.5.4@ng-zorro-antd/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_http_client__ = __webpack_require__("../../../../../src/app/core/services/http.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_helper_modal_helper__ = __webpack_require__("../../../../../src/app/shared/helper/modal.helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExtrasPoiEditComponent = /** @class */ (function () {
    function ExtrasPoiEditComponent(modalHelper, subject, msgSrv, http) {
        this.modalHelper = modalHelper;
        this.subject = subject;
        this.msgSrv = msgSrv;
        this.http = http;
        this.cat = ['美食', '美食,粤菜', '美食,粤菜,湛江菜'];
    }
    ExtrasPoiEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.i.id > 0) {
            this.http.get('./assets/pois.json').subscribe(function (res) { return _this.i = res.data[0]; });
        }
    };
    ExtrasPoiEditComponent.prototype.save = function () {
        var _this = this;
        this.http.get('./assets/pois.json').subscribe(function () {
            _this.msgSrv.success('保存成功，只是模拟，实际未变更');
            _this.subject.next(true);
            _this.close();
        });
    };
    ExtrasPoiEditComponent.prototype.close = function () {
        this.subject.destroy();
    };
    ExtrasPoiEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-extras-poi-edit',
            template: __webpack_require__("../../../../../src/app/routes/extras/poi/edit/edit.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_helper_modal_helper__["a" /* ModalHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_helper_modal_helper__["a" /* ModalHelper */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__["d" /* NzModalSubject */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__["d" /* NzModalSubject */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__["b" /* NzMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__["b" /* NzMessageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_http_client__["a" /* _HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_http_client__["a" /* _HttpClient */]) === "function" && _d || Object])
    ], ExtrasPoiEditComponent);
    return ExtrasPoiEditComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/extras/poi/poi.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n    <h1>门店<small>使用 <code>.simple-table</code> 风格的一个实际项目示例。</small></h1>\r\n    <button nz-button (click)=\"edit({id:0})\" [nzType]=\"'primary'\">添加</button>\r\n</div>\r\n<form nz-form [nzLayout]=\"'inline'\" class=\"search-form\">\r\n    <div nz-form-item>\r\n        <div nz-form-control>\r\n            <nz-select [(ngModel)]=\"s.s\" name=\"s\" [nzAllowClear]=\"false\">\r\n                <nz-option nzValue=\"\" nzLabel=\"状态不限\"></nz-option>\r\n                <nz-option nzValue=\"1\" nzLabel=\"正常\"></nz-option>\r\n                <nz-option nzValue=\"2\" nzLabel=\"已取消\"></nz-option>\r\n                <nz-option nzValue=\"3\" nzLabel=\"已删除\"></nz-option>\r\n                <nz-option nzValue=\"10\" nzLabel=\"待提交\"></nz-option>\r\n                <nz-option nzValue=\"11\" nzLabel=\"待审核\"></nz-option>\r\n            </nz-select>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item>\r\n        <div nz-form-control>\r\n            <nz-input [(ngModel)]=\"s.user_id\" name=\"user_id\" nzPlaceHolder=\"用户编号\"></nz-input>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item>\r\n        <div nz-form-control>\r\n            <nz-input [(ngModel)]=\"s.q\" name=\"q\" nzPlaceHolder=\"门店、分店名称\"></nz-input>\r\n        </div>\r\n    </div>\r\n    <div nz-form-item>\r\n        <div nz-form-control>\r\n            <button nz-button (click)=\"load(true)\">搜索</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n<nz-table #nzTable class=\"simple-table\"\r\n    [nzAjaxData]=\"list\"\r\n    [nzLoading]=\"http.loading\"\r\n    [nzTotal]=\"total\"\r\n    [(nzPageIndex)]=\"s.pi\"\r\n    [(nzPageSize)]=\"s.ps\"\r\n    (nzPageIndexChange)=\"load()\"\r\n    [nzBordered]=\"true\"\r\n    [nzSize]=\"'middle'\">\r\n    <thead nz-thead>\r\n        <tr>\r\n            <th nz-th [nzWidth]=\"'100px'\">编号</th>\r\n            <th nz-th>门店名称</th>\r\n            <th nz-th>分店名</th>\r\n            <th nz-th [nzWidth]=\"'100px'\">状态</th>\r\n            <th nz-th [nzWidth]=\"'150px'\"></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody nz-tbody>\r\n        <tr nz-tbody-tr *ngFor=\"let i of nzTable.data\">\r\n            <td>{{i.id}}</td>\r\n            <td>{{i.name}}</td>\r\n            <td>{{i.branch_name}}</td>\r\n            <td>{{i.status_str}}</td>\r\n            <td>\r\n                <a (click)=\"edit(i)\">编辑</a>\r\n                <span nz-table-divider></span>\r\n                <a (click)=\"photo(i)\">图片</a>\r\n                <span nz-table-divider></span>\r\n                <a (click)=\"sku(i)\">经营SKU</a>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</nz-table>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/extras/poi/poi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtrasPoiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("../../../../_ng-zorro-antd@0.5.4@ng-zorro-antd/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_helper_modal_helper__ = __webpack_require__("../../../../../src/app/shared/helper/modal.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_http_client__ = __webpack_require__("../../../../../src/app/core/services/http.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_edit_component__ = __webpack_require__("../../../../../src/app/routes/extras/poi/edit/edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExtrasPoiComponent = /** @class */ (function () {
    function ExtrasPoiComponent(http, msgSrv, modalHelper) {
        this.http = http;
        this.msgSrv = msgSrv;
        this.modalHelper = modalHelper;
        this.list = [];
        this.s = {
            pi: 1,
            ps: 10,
            s: ''
        };
        this.total = 0;
    }
    ExtrasPoiComponent.prototype.ngOnInit = function () {
        this.load();
    };
    ExtrasPoiComponent.prototype.load = function (reload) {
        var _this = this;
        if (reload === void 0) { reload = false; }
        if (reload) {
            this.s.pi = 1;
        }
        this.http.get('./assets/pois.json', this.s).subscribe(function (res) {
            _this.list = res.data;
            _this.total = res.total;
        });
    };
    ExtrasPoiComponent.prototype.edit = function (i) {
        var _this = this;
        this.modalHelper.static(__WEBPACK_IMPORTED_MODULE_4__edit_edit_component__["a" /* ExtrasPoiEditComponent */], { i: i }).subscribe(function () {
            _this.load();
            _this.msgSrv.info('回调，重新发起列表刷新');
        });
    };
    ExtrasPoiComponent.prototype.photo = function (i) {
        this.msgSrv.success('click photo');
    };
    ExtrasPoiComponent.prototype.sku = function (i) {
        this.msgSrv.success('click sku');
    };
    ExtrasPoiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-extras-poi',
            template: __webpack_require__("../../../../../src/app/routes/extras/poi/poi.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_services_http_client__["a" /* _HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_services_http_client__["a" /* _HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["b" /* NzMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["b" /* NzMessageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_helper_modal_helper__["a" /* ModalHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_helper_modal_helper__["a" /* ModalHelper */]) === "function" && _c || Object])
    ], ExtrasPoiComponent);
    return ExtrasPoiComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=poi.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/extras/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div nz-row [nzGutter]=\"24\" class=\"py-lg\">\r\n    <div nz-col [nzSpan]=\"6\">\r\n        <nz-card [nzNoHovering]=\"true\" class=\"ant-card__body-nopadding\">\r\n            <ng-template #title>Personal settings</ng-template>\r\n            <ng-template #body>\r\n                <a (click)=\"active=1\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===1}\">Profile</a>\r\n                <a (click)=\"active=2\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===2}\">Account</a>\r\n                <a (click)=\"active=3\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===3}\">Emails</a>\r\n                <a (click)=\"active=4\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===4}\">Notifications</a>\r\n            </ng-template>\r\n        </nz-card>\r\n        <nz-card [nzNoHovering]=\"true\" class=\"ant-card__body-nopadding\">\r\n            <ng-template #title>Developer settings</ng-template>\r\n            <ng-template #body>\r\n                <a (click)=\"active=5\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===5}\">OAuth applications</a>\r\n                <a (click)=\"active=6\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===6}\">Personal access tokens</a>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzSpan]=\"18\">\r\n        <nz-card [nzNoHovering]=\"true\" *ngIf=\"active===1\">\r\n            <ng-template #title>Public profile</ng-template>\r\n            <ng-template #body>\r\n                <div nz-row [nzGutter]=\"64\">\r\n                    <div nz-col [nzSpan]=\"16\">\r\n                        <form nz-form [formGroup]=\"profileForm\" (ngSubmit)=\"profileSave($event, profileForm.value)\" [nzLayout]=\"'vertical'\">\r\n                            <div nz-form-item nz-row>\r\n                                <div nz-form-label nz-col>\r\n                                    <label for=\"name\" nz-form-item-required>name</label>\r\n                                </div>\r\n                                <div nz-form-control nz-col [nzHasFeedback]=\"'true'\" [nzValidateStatus]=\"name\">\r\n                                    <nz-input formControlName=\"name\" [nzId]=\"'name'\"></nz-input>\r\n                                    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\">\r\n                                        <div nz-form-explain *ngIf=\"name.errors.required\">required</div>\r\n                                        <div nz-form-explain *ngIf=\"name.errors.pattern\">must match pattern [-_a-zA-Z0-9]</div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div nz-form-item nz-row>\r\n                                <div nz-form-label nz-col>\r\n                                    <label for=\"email\">email</label>\r\n                                </div>\r\n                                <div nz-form-control nz-col>\r\n                                    <nz-select formControlName=\"email\">\r\n                                        <nz-option [nzLabel]=\"'Select a verified email to display'\" [nzValue]=\"''\"></nz-option>\r\n                                        <nz-option [nzLabel]=\"'cipchk@qq.com'\" [nzValue]=\"'cipchk@qq.com'\"></nz-option>\r\n                                    </nz-select>\r\n                                    <div nz-form-explain>You can manage verified email addresses in your <a (click)=\"active=3\">email settings</a>.</div>\r\n                                </div>\r\n                            </div>\r\n                            <div nz-form-item nz-row>\r\n                                <div nz-form-label nz-col>\r\n                                    <label for=\"bio\">Bio</label>\r\n                                </div>\r\n                                <div nz-form-control nz-col>\r\n                                    <nz-input formControlName=\"bio\" [nzId]=\"'bio'\" [nzType]=\"'textarea'\" [nzRows]=\"'4'\" [nzPlaceHolder]=\"'Tell us a little bit about yourself'\"></nz-input>\r\n                                    <div nz-form-explain>You can <strong>@mention</strong> other users and organizations to link to them.</div>\r\n                                </div>\r\n                            </div>\r\n                            <div nz-form-item nz-row>\r\n                                <div nz-form-label nz-col>\r\n                                    <label for=\"url\">URL</label>\r\n                                </div>\r\n                                <div nz-form-control nz-col>\r\n                                    <nz-input formControlName=\"url\" [nzId]=\"'url'\"></nz-input>\r\n                                </div>\r\n                            </div>\r\n                            <div nz-form-item nz-row>\r\n                                <div nz-form-label nz-col>\r\n                                    <label for=\"company\">Company</label>\r\n                                </div>\r\n                                <div nz-form-control nz-col>\r\n                                    <nz-input formControlName=\"company\" [nzId]=\"'company'\"></nz-input>\r\n                                    <div nz-form-explain>You can <strong>@mention</strong> your company's GitHub organization to link it.</div>\r\n                                </div>\r\n                            </div>\r\n                            <div nz-form-item nz-row class=\"border-top-1 mt-md pt-md\">\r\n                                <div nz-form-label nz-col>\r\n                                    <label for=\"location\">Location</label>\r\n                                </div>\r\n                                <div nz-form-control nz-col>\r\n                                    <nz-input formControlName=\"location\" [nzId]=\"'location'\"></nz-input>\r\n                                </div>\r\n                            </div>\r\n                            <div nz-row>\r\n                                <button nz-button [nzType]=\"'primary'\" [disabled]=\"profileForm.invalid\">Update profile</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <div nz-col [nzSpan]=\"8\">\r\n                        <h4>Profile picture</h4>\r\n                        <img src=\"./assets/img/avatar.jpg\" style=\"width: 100%;\">\r\n                        <button nz-button class=\"ant-btn__block\">\r\n                            <span>Upload new picture</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n        <nz-card [nzNoHovering]=\"true\" *ngIf=\"active===2\">\r\n            <ng-template #title>Change password</ng-template>\r\n            <ng-template #body>\r\n                <div nz-row [nzGutter]=\"64\">\r\n                    <div nz-col [nzSpan]=\"16\">\r\n                        <form nz-form [nzLayout]=\"'vertical'\">\r\n                            <div nz-form-item nz-row>\r\n                                <div nz-form-label nz-col>\r\n                                    <label for=\"old_password\" nz-form-item-required>Old password</label>\r\n                                </div>\r\n                                <div nz-form-control nz-col>\r\n                                    <nz-input [(ngModel)]=\"pwd.old_password\" name=\"old_password\" [nzId]=\"'old_password'\" [nzType]=\"'password'\" required></nz-input>\r\n                                </div>\r\n                            </div>\r\n                            <div nz-form-item nz-row>\r\n                                <div nz-form-label nz-col>\r\n                                    <label for=\"new_password\" nz-form-item-required>New password</label>\r\n                                </div>\r\n                                <div nz-form-control nz-col>\r\n                                    <nz-input [(ngModel)]=\"pwd.new_password\" name=\"new_password\" [nzId]=\"'new_password'\" [nzType]=\"'password'\" required></nz-input>\r\n                                </div>\r\n                            </div>\r\n                            <div nz-form-item nz-row>\r\n                                <div nz-form-label nz-col>\r\n                                    <label for=\"confirm_new_password\" nz-form-item-required>Confirm new password</label>\r\n                                </div>\r\n                                <div nz-form-control nz-col>\r\n                                    <nz-input [(ngModel)]=\"pwd.confirm_new_password\" name=\"confirm_new_password\" [nzId]=\"'confirm_new_password'\" [nzType]=\"'password'\" required></nz-input>\r\n                                </div>\r\n                            </div>\r\n                            <div nz-row>\r\n                                <button nz-button (click)=\"pwdSave()\" [nzType]=\"'primary'\">Update profile</button>\r\n                                <a class=\"pl-sm\" [routerLink]=\"['/forget']\">I forgot my password</a>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <h2 class=\"py-md mt-lg border-bottom-1\">Change username</h2>\r\n                <p class=\"py-sm\">Changing your username can have unintended side effects.</p>\r\n                <button nz-button (click)=\"msg.info('to change username page')\" [nzSize]=\"'large'\">\r\n                    <span>Change username</span>\r\n                </button>\r\n\r\n            </ng-template>\r\n        </nz-card>\r\n        <nz-card [nzNoHovering]=\"true\" *ngIf=\"active===3\">\r\n            <ng-template #title>Email</ng-template>\r\n            <ng-template #body>\r\n                <div class=\"list-group\">\r\n                    <div nz-row class=\"list-group-item py-md\" [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\r\n                        <div nz-col [nzSpan]=\"12\">\r\n                            cipchk@qq.com\r\n                            <nz-tooltip [nzTitle]=\"'This email will be used for account-related notifications (e.g. account changes, password resets, billing receipts) as well as any web-based GitHub operations (e.g. edits and merges).'\">\r\n                                <span nz-tooltip><nz-tag [nzColor]=\"'#28a745'\">Primary</nz-tag></span>\r\n                            </nz-tooltip>\r\n                            <nz-tooltip [nzTitle]=\"'This email will be used as the \\'from\\' address for web-based GitHub operations.'\">\r\n                                <span nz-tooltip><nz-tag [nzColor]=\"'#959da5'\">Public</nz-tag></span>\r\n                            </nz-tooltip>\r\n                        </div>\r\n                        <div nz-col [nzSpan]=\"12\" class=\"text-right\">\r\n                            <i class=\"anticon anticon-delete text-lg\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <h4 class=\"pt-md mb-sm\">Add email address</h4>\r\n                <nz-input [nzSize]=\"'large'\" style=\"width: 200px\"></nz-input>\r\n                <button nz-button (click)=\"msg.info('add')\" [nzSize]=\"'large'\">\r\n                    <span>Add</span>\r\n                </button>\r\n                <h4 class=\"border-top-1 py-md mt-md\">Primary email address</h4>\r\n                <p class=\"mb-md\">cipchk@qq.com will be used for account-related notifications and for web-based GitHub operations (e.g. edits and merges).</p>\r\n                <nz-select [nzSize]=\"'large'\" [(ngModel)]=\"primary_email\">\r\n                    <nz-option [nzLabel]=\"'cipchk@qq.com'\" [nzValue]=\"'cipchk@qq.com'\"></nz-option>\r\n                </nz-select>\r\n                <button nz-button (click)=\"msg.info('save')\" [nzSize]=\"'large'\">\r\n                    <span>Save</span>\r\n                </button>\r\n            </ng-template>\r\n        </nz-card>\r\n        <nz-card [nzNoHovering]=\"true\" *ngIf=\"active===4\">\r\n            <ng-template #title>Notifications</ng-template>\r\n            <ng-template #body>\r\n                <p class=\"pb-md\">Choose how you receive notifications. These notification settings apply to the repositories you’re watching.</p>\r\n                <div class=\"list-group\">\r\n                    <div class=\"list-group-item\">\r\n                        <h4>Automatically watch repositories</h4>\r\n                        <p class=\"py-sm\">When you’re given push access to a repository, automatically receive notifications for it.</p>\r\n                        <label nz-checkbox [ngModel]=\"true\">\r\n                            <span>Automatically watch</span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"list-group-item\">\r\n                        <h4>Participating</h4>\r\n                        <p class=\"py-sm\">Notifications for the conversations you are participating in, or if someone cites you with an @mention.</p>\r\n                        <label nz-checkbox [ngModel]=\"true\">\r\n                            <span>Email</span>\r\n                        </label>\r\n                        <label nz-checkbox [ngModel]=\"true\">\r\n                            <span>Web</span>\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"list-group-item\">\r\n                        <h4>Watching</h4>\r\n                        <p class=\"py-sm\">Notifications for all repositories or conversations you’re watching.</p>\r\n                        <label nz-checkbox [ngModel]=\"true\">\r\n                            <span>Email</span>\r\n                        </label>\r\n                        <label nz-checkbox [ngModel]=\"true\">\r\n                            <span>Web</span>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n        <nz-card [nzNoHovering]=\"true\" *ngIf=\"active===5\" class=\"ant-card__body-nopadding\" [nzBordered]=\"false\">\r\n            <ng-template #body>\r\n                <div class=\"border rounded-md text-center p-lg bg-grey-lighter\">\r\n                    <h3>No OAuth applications</h3>\r\n                    <p class=\"py-md\">OAuth applications are used to access the GitHub API. Read the docs to find out more.</p>\r\n                    <button nz-button (click)=\"msg.inof('Register a new application')\" [nzType]=\"'primary'\" [nzSize]=\"'large'\">\r\n                        <span>Register a new application</span>\r\n                    </button>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n        <nz-card [nzNoHovering]=\"true\" *ngIf=\"active===6\">\r\n            <ng-template #title>Personal access tokens</ng-template>\r\n            <ng-template #extra>\r\n                <button nz-button (click)=\"msg.info('Generate new token')\" [nzSize]=\"'small'\">\r\n                    <span>Generate new token</span>\r\n                </button>\r\n                <button nz-button (click)=\"msg.info('Revoke all')\" [nzSize]=\"'small'\" [nzType]=\"'danger'\">\r\n                    <span>Revoke all</span>\r\n                </button>\r\n            </ng-template>\r\n            <ng-template #body>\r\n                <p>Tokens you have generated that can be used to access the GitHub API.</p>\r\n                <div class=\"list-group mt-sm\">\r\n                    <div nz-row class=\"list-group-item\" [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\r\n                        <div nz-col [nzSpan]=\"12\">\r\n                            <strong>octotree</strong> — repo\r\n                        </div>\r\n                        <div nz-col [nzSpan]=\"12\" class=\"text-right\">\r\n                            Last used within the last day\r\n                            <nz-button-group>\r\n                                <button nz-button>Edit</button>\r\n                                <button nz-button [nzType]=\"'danger'\">Delete</button>\r\n                            </nz-button-group>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/extras/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtrasSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__ = __webpack_require__("../../../../_ng-zorro-antd@0.5.4@ng-zorro-antd/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../../_@angular_forms@4.4.5@@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExtrasSettingsComponent = /** @class */ (function () {
    function ExtrasSettingsComponent(fb, msg) {
        this.msg = msg;
        this.active = 1;
        this.pwd = {
            old_password: '',
            new_password: '',
            confirm_new_password: ''
        };
        // Email
        this.primary_email = 'cipchk@qq.com';
        this.profileForm = fb.group({
            name: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^[-_a-zA-Z0-9]{4,20}$")])],
            email: '',
            bio: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(160)],
            url: '',
            company: '',
            location: ''
        });
    }
    Object.defineProperty(ExtrasSettingsComponent.prototype, "name", {
        get: function () { return this.profileForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    ExtrasSettingsComponent.prototype.profileSave = function (event, value) {
        console.log('profile value', value);
    };
    ExtrasSettingsComponent.prototype.pwdSave = function () {
        if (!this.pwd.old_password) {
            return this.msg.error('invalid old password');
        }
        if (!this.pwd.new_password) {
            return this.msg.error('invalid new password');
        }
        if (!this.pwd.confirm_new_password) {
            return this.msg.error('invalid confirm new password');
        }
        console.log('pwd value', this.pwd);
    };
    ExtrasSettingsComponent.prototype.ngOnInit = function () {
        this.profileForm.patchValue({
            name: 'cipchk',
            email: 'cipchk@qq.com'
        });
    };
    ExtrasSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-extras-settings',
            template: __webpack_require__("../../../../../src/app/routes/extras/settings/settings.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__["b" /* NzMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ng_zorro_antd__["b" /* NzMessageService */]) === "function" && _b || Object])
    ], ExtrasSettingsComponent);
    return ExtrasSettingsComponent;
    var _a, _b;
}());

//# sourceMappingURL=settings.component.js.map

/***/ })

});
//# sourceMappingURL=extras.module.chunk.js.map
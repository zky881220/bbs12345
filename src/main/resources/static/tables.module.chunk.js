webpackJsonp(["tables.module"],{

/***/ "../../../../../src/app/routes/tables/full/full.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n    <h1>\r\n        A Full Demo Tables\r\n    </h1>\r\n</div>\r\n<nz-card>\r\n    <ng-template #body>\r\n        <form nz-form>\r\n            <div nz-row nz-form-item [nzGutter]=\"16\">\r\n                <div nz-form-label nz-col [nzSm]=\"2\">\r\n                    <label for=\"name\">Name</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"5\">\r\n                    <nz-input [(ngModel)]=\"args.name\" name=\"name\" [nzId]=\"'name'\"></nz-input>\r\n                </div>\r\n                <div nz-form-label nz-col [nzSm]=\"2\">\r\n                    <label>Created</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"8\">\r\n                    <div nz-row>\r\n                        <div nz-form-control nz-col [nzSpan]=\"11\">\r\n                            <nz-datepicker [(ngModel)]=\"args.created_begin\" name=\"created_begin\" [nzPlaceHolder]=\"'begin'\"></nz-datepicker>\r\n                        </div>\r\n                        <div nz-col [nzSpan]=\"1\">\r\n                            <p nz-form-split>-</p>\r\n                        </div>\r\n                        <div nz-form-control nz-col [nzSpan]=\"11\">\r\n                            <nz-datepicker [(ngModel)]=\"args.created_end\" name=\"created_end\" [nzPlaceHolder]=\"'end'\"></nz-datepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div nz-form-label nz-col [nzSm]=\"2\">\r\n                    <label>Gender</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"5\">\r\n                    <nz-dropdown>\r\n                        <a class=\"ant-dropdown-link\" nz-dropdown>\r\n                            {{args.gender ? args.gender : 'unlimit'}} <i class=\"anticon anticon-down\"></i>\r\n                        </a>\r\n                        <ul nz-menu>\r\n                            <li nz-menu-item (click)=\"args.gender=''\">unlimit</li>\r\n                            <li nz-menu-item (click)=\"args.gender='male'\">male</li>\r\n                            <li nz-menu-item (click)=\"args.gender='female'\">female</li>\r\n                        </ul>\r\n                    </nz-dropdown>\r\n                    <span class=\"text-grey-light\">(only valid)</span>\r\n                </div>\r\n            </div>\r\n            <div nz-row nz-form-item [nzGutter]=\"16\" class=\"mb0\">\r\n                <div nz-form-label nz-col [nzSm]=\"2\">\r\n                    <label for=\"userid\">User ID</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"5\">\r\n                    <nz-input [(ngModel)]=\"args.userid\" name=\"userid\" [nzId]=\"'userid'\" [nzPlaceHolder]=\"'placeholder'\"></nz-input>\r\n                </div>\r\n                <div nz-form-label nz-col [nzSm]=\"2\">\r\n                    <label>Modified</label>\r\n                </div>\r\n                <div nz-form-control nz-col [nzSm]=\"8\">\r\n                    <div nz-row>\r\n                        <div nz-form-control nz-col [nzSpan]=\"11\">\r\n                            <nz-datepicker [(ngModel)]=\"args.modified_begin\" name=\"modified_begin\" [nzPlaceHolder]=\"'begin'\"></nz-datepicker>\r\n                        </div>\r\n                        <div nz-col [nzSpan]=\"1\">\r\n                            <p nz-form-split>-</p>\r\n                        </div>\r\n                        <div nz-form-control nz-col [nzSpan]=\"11\">\r\n                            <nz-datepicker [(ngModel)]=\"args.modified_end\" name=\"modified_end\" [nzPlaceHolder]=\"'end'\"></nz-datepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div nz-col [nzSm]=\"5\" [nzOffset]=\"2\">\r\n                    <button nz-button [nzType]=\"'primary'\" (click)=\"load(1)\" [nzLoading]=\"loading\">Search</button>\r\n                    <button nz-button (click)=\"clear()\" [disabled]=\"loading\">Clear</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </ng-template>\r\n</nz-card>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"24\">\r\n        <nz-card>\r\n            <ng-template #body>\r\n                <div class=\"mb-sm text-right\">\r\n                    <nz-dropdown>\r\n                        <button nz-button nz-dropdown [disabled]=\"!_allChecked && !_indeterminate\">\r\n                            <span>Export</span> <i class=\"anticon anticon-down\"></i>\r\n                        </button>\r\n                        <ul nz-menu>\r\n                            <li nz-menu-item>Excel</li>\r\n                            <li nz-menu-item>JSON</li>\r\n                            <li nz-menu-item>PNG</li>\r\n                        </ul>\r\n                    </nz-dropdown>\r\n                </div>\r\n                <nz-table #nzTable\r\n                    [nzAjaxData]=\"list\"\r\n                    [nzShowSizeChanger]=\"true\"\r\n                    [nzLoading]=\"loading\"\r\n                    [nzTotal]=\"total\"\r\n                    [(nzPageIndex)]=\"pi\"\r\n                    (nzPageIndexChange)=\"load()\"\r\n                    [(nzPageSize)]=\"ps\"\r\n                    (nzPageSizeChange)=\"load()\">\r\n                    <thead nz-thead>\r\n                        <tr>\r\n                            <th nz-th [nzCheckbox]=\"true\">\r\n                                <label nz-checkbox\r\n                                    [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\"\r\n                                    (ngModelChange)=\"_checkAll()\">\r\n                                </label>\r\n                            </th>\r\n                            <th nz-th><span>Avatar</span></th>\r\n                            <th nz-th><span>Name</span></th>\r\n                            <th nz-th><span>Age</span></th>\r\n                            <th nz-th><span>Email</span></th>\r\n                            <th nz-th><span>Event</span></th>\r\n                            <th nz-th><span>Price</span></th>\r\n                            <th nz-th><span>Registered</span></th>\r\n                            <th nz-th><span>Actions</span></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody nz-tbody>\r\n                        <tr nz-tbody-tr *ngFor=\"let data of nzTable.data\">\r\n                            <td nz-td [nzCheckbox]=\"true\">\r\n                                <label nz-checkbox [(ngModel)]=\"data.checked\"\r\n                                    (ngModelChange)=\"refChecked()\">\r\n                                </label>\r\n                            </td>\r\n                            <td nz-td>\r\n                                <nz-avatar [nzSrc]=\"data.picture.thumbnail\" [nzSize]=\"'large'\"></nz-avatar>\r\n                            </td>\r\n                            <td nz-td>{{data.name.first}} {{data.name.last}}</td>\r\n                            <td nz-td>\r\n                                <nz-tag *ngIf=\"data.gender=='female'\" [nzColor]=\"'pink'\">female</nz-tag>\r\n                                <nz-tag *ngIf=\"data.gender=='male'\" [nzColor]=\"'green'\">male</nz-tag>\r\n                            </td>\r\n                            <td nz-td>{{data.email}}</td>\r\n                            <td nz-td>\r\n                                <div sparkline data-bar-color=\"#cfdbe2\"\r\n                                    data-height=\"20\" data-bar-width=\"2\" data-bar-spacing=\"2\"\r\n                                    values=\"1,0,4,6,5,7,8,3,5,7,8\"></div>\r\n                            </td>\r\n                            <td nz-td>{{data.price | _currency}}</td>\r\n                            <td nz-td>{{data.registered | _date: 'YYYY年MM月DD日'}}</td>\r\n                            <td nz-td>\r\n                                <a (click)=\"showMsg('Edit')\">Edit</a>\r\n                                <span nz-table-divider></span>\r\n                                <nz-popconfirm [nzTitle]=\"'Are you sure？'\" [nzOkText]=\"'ok'\" [nzCancelText]=\"'cancel'\" (nzOnConfirm)=\"showMsg('has deleted')\" (nzOnCancel)=\"showMsg('cancel delete')\">\r\n                                    <a nz-popconfirm>Delete</a>\r\n                                </nz-popconfirm>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/tables/full/full.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableFullComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__randomUser_service__ = __webpack_require__("../../../../../src/app/routes/tables/randomUser.service.ts");
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



var TableFullComponent = /** @class */ (function () {
    function TableFullComponent(_randomUser, message) {
        this._randomUser = _randomUser;
        this.message = message;
        this.pi = 1;
        this.ps = 10;
        this.total = 200; // mock total
        this.list = [];
        this.loading = false;
        this.args = {};
        this._indeterminate = false;
        this._allChecked = false;
    }
    TableFullComponent.prototype.load = function (pi) {
        var _this = this;
        if (typeof pi !== 'undefined') {
            this.pi = pi || 1;
        }
        this.loading = true;
        this._allChecked = false;
        this._indeterminate = false;
        this._randomUser.getUsers(this.pi, this.ps, this.args)
            .map(function (data) {
            data.results.forEach(function (item) {
                item.checked = false;
                item.price = +((Math.random() * (10000000 - 100)) + 100).toFixed(2);
            });
            return data;
        })
            .subscribe(function (data) {
            _this.loading = false;
            _this.list = data.results;
        });
    };
    TableFullComponent.prototype.clear = function () {
        this.args = {};
        this.load(1);
    };
    TableFullComponent.prototype._checkAll = function () {
        var _this = this;
        this.list.forEach(function (item) { return item.checked = _this._allChecked; });
        this.refChecked();
    };
    TableFullComponent.prototype.refChecked = function () {
        var checkedCount = this.list.filter(function (w) { return w.checked; }).length;
        this._allChecked = checkedCount === this.list.length;
        this._indeterminate = this._allChecked ? false : checkedCount > 0;
    };
    TableFullComponent.prototype.ngOnInit = function () {
        this.load();
    };
    TableFullComponent.prototype.showMsg = function (msg) {
        this.message.info(msg);
    };
    TableFullComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-full',
            template: __webpack_require__("../../../../../src/app/routes/tables/full/full.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__randomUser_service__["a" /* RandomUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__randomUser_service__["a" /* RandomUserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["b" /* NzMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["b" /* NzMessageService */]) === "function" && _b || Object])
    ], TableFullComponent);
    return TableFullComponent;
    var _a, _b;
}());

//# sourceMappingURL=full.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/tables/randomUser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../../_@angular_common@4.4.5@@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RandomUserService = /** @class */ (function () {
    function RandomUserService(http) {
        this.http = http;
        this.randomUserUrl = 'https://api.randomuser.me/';
    }
    RandomUserService.prototype.getUsers = function (PageIndex, pageSize, args) {
        if (PageIndex === void 0) { PageIndex = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // fix laster version
        var param = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('results', '' + pageSize).set('page', '' + PageIndex);
        if (args) {
            Object.keys(args).forEach(function (key) {
                param = param.append(key, args[key]);
            });
        }
        return this.http.get(this.randomUserUrl + '?' + param.toString())
            .catch(this.handleError);
    };
    RandomUserService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RandomUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], RandomUserService);
    return RandomUserService;
    var _a;
}());

//# sourceMappingURL=randomUser.service.js.map

/***/ }),

/***/ "../../../../../src/app/routes/tables/standard/standard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n    <h1>\r\n        Tables\r\n        <small>Native support</small>\r\n    </h1>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Basic</ng-template>\r\n            <ng-template #body>\r\n                <nz-table #nzTable [nzDataSource]=\"data\" [nzPageSize]=\"10\">\r\n                    <thead nz-thead>\r\n                        <tr>\r\n                            <th nz-th><span>Name</span></th>\r\n                            <th nz-th><span>Age</span></th>\r\n                            <th nz-th><span>Address</span></th>\r\n                            <th nz-th><span>Action</span></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody nz-tbody>\r\n                        <tr nz-tbody-tr *ngFor=\"let data of nzTable.data\">\r\n                            <td nz-td>{{data.name}}</td>\r\n                            <td nz-td>{{data.age}}</td>\r\n                            <td nz-td>{{data.address}}</td>\r\n                            <td nz-td>\r\n                                <span>\r\n                                    <a>Action</a>\r\n                                    <span nz-table-divider></span>\r\n                                    <a>Delete</a>\r\n                                    <span nz-table-divider></span>\r\n                                    <nz-dropdown>\r\n                                        <a class=\"ant-dropdown-link\" nz-dropdown>\r\n                                            More<i class=\"anticon anticon-down\"></i>\r\n                                        </a>\r\n                                        <ul nz-menu>\r\n                                            <li nz-menu-item>1st menu item</li>\r\n                                            <li nz-menu-item>2st menu item</li>\r\n                                            <li nz-menu-item>3st menu item</li>\r\n                                        </ul>\r\n                                    </nz-dropdown>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Sort</ng-template>\r\n            <ng-template #body>\r\n                <nz-table #nzTable [nzDataSource]=\"data\" [nzPageSize]=\"10\">\r\n                    <thead nz-thead>\r\n                        <tr>\r\n                            <th nz-th><span>Name</span></th>\r\n                            <th nz-th><span>Age<nz-table-sort [(nzValue)]=\"ageSort\" (nzValueChange)=\"ageSortChange($event)\"></nz-table-sort></span></th>\r\n                            <th nz-th><span>Address</span></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody nz-tbody>\r\n                        <tr nz-tbody-tr *ngFor=\"let data of nzTable.data\">\r\n                            <td nz-td>{{data.name}}</td>\r\n                            <td nz-td>{{data.age}}</td>\r\n                            <td nz-td>{{data.address}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Selection</ng-template>\r\n            <ng-template #body>\r\n                <nz-table #nzTable [nzDataSource]=\"data\" [nzPageSize]=\"10\" (nzDataChange)=\"_displayDataChange($event)\" (nzPageIndexChange)=\"_refreshStatus()\" (nzPageSizeChange)=\"_refreshStatus()\">\r\n                    <thead nz-thead>\r\n                        <tr>\r\n                            <th nz-th [nzCheckbox]=\"true\">\r\n                                <label nz-checkbox [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll($event)\">\r\n                                </label>\r\n                            </th>\r\n                            <th nz-th><span>Name</span></th>\r\n                            <th nz-th><span>Age</span></th>\r\n                            <th nz-th><span>Address</span></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody nz-tbody>\r\n                        <tr nz-tbody-tr *ngFor=\"let data of nzTable.data\">\r\n                            <td nz-td [nzCheckbox]=\"true\">\r\n                                <label nz-checkbox [(ngModel)]=\"data.checked\" (ngModelChange)=\"_refreshStatus($event)\">\r\n                                </label>\r\n                            </td>\r\n                            <td nz-td>{{data.name}}</td>\r\n                            <td nz-td>{{data.age}}</td>\r\n                            <td nz-td>{{data.address}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Ajax</ng-template>\r\n            <ng-template #body>\r\n                <nz-table #nzTable\r\n                    [nzAjaxData]=\"_ajaxDataSet\"\r\n                    [nzShowSizeChanger]=\"true\"\r\n                    [nzLoading]=\"_ajaxLoading\"\r\n                    [nzTotal]=\"_total\"\r\n                    [(nzPageIndex)]=\"_current\"\r\n                    (nzPageIndexChange)=\"_ajaxRefreshData()\"\r\n                    [(nzPageSize)]=\"_pageSize\"\r\n                    (nzPageSizeChange)=\"_ajaxRefreshData()\">\r\n                    <thead nz-thead>\r\n                    <tr>\r\n                        <th nz-th><span>Name</span></th>\r\n                        <th nz-th><span>Age</span></th>\r\n                        <th nz-th><span>Email</span></th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody nz-tbody>\r\n                    <tr nz-tbody-tr *ngFor=\"let data of nzTable.data\">\r\n                        <td nz-td>\r\n                        <a>{{data.name.first}} {{data.name.last}}</a>\r\n                        </td>\r\n                        <td nz-td>{{data.gender}}</td>\r\n                        <td nz-td>{{data.email}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                </nz-table>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"24\">\r\n        <nz-card>\r\n            <ng-template #title>Dynamic Settings</ng-template>\r\n            <ng-template #body>\r\n                <form nz-form [nzLayout]=\"'inline'\" class=\"mb-sm\">\r\n                    <div nz-row nz-form-item>\r\n                        <div nz-form-label>\r\n                            <label>Bordered</label>\r\n                        </div>\r\n                        <div nz-form-control>\r\n                            <nz-switch [(ngModel)]=\"_bordered\" [ngModelOptions]=\"{standalone: true}\"></nz-switch>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-row nz-form-item>\r\n                        <div nz-form-label>\r\n                            <label>Loading</label>\r\n                        </div>\r\n                        <div nz-form-control>\r\n                            <nz-switch [(ngModel)]=\"_loading\" [ngModelOptions]=\"{standalone: true}\"></nz-switch>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-row nz-form-item>\r\n                        <div nz-form-label>\r\n                            <label>Pagination</label>\r\n                        </div>\r\n                        <div nz-form-control>\r\n                            <nz-switch [(ngModel)]=\"_pagination\" [ngModelOptions]=\"{standalone: true}\"></nz-switch>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-row nz-form-item>\r\n                        <div nz-form-label>\r\n                            <label>Title</label>\r\n                        </div>\r\n                        <div nz-form-control>\r\n                            <nz-switch [(ngModel)]=\"_title\" [ngModelOptions]=\"{standalone: true}\"></nz-switch>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-row nz-form-item>\r\n                        <div nz-form-label>\r\n                            <label>Column Header</label>\r\n                        </div>\r\n                        <div nz-form-control>\r\n                            <nz-switch [(ngModel)]=\"_header\" [ngModelOptions]=\"{standalone: true}\"></nz-switch>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-row nz-form-item>\r\n                        <div nz-form-label>\r\n                            <label>Footer</label>\r\n                        </div>\r\n                        <div nz-form-control>\r\n                            <nz-switch [(ngModel)]=\"_footer\" [ngModelOptions]=\"{standalone: true}\"></nz-switch>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-row nz-form-item>\r\n                        <div nz-form-label>\r\n                            <label>Size</label>\r\n                        </div>\r\n                        <div nz-form-control>\r\n                            <nz-radio-group [(ngModel)]=\"_size\" [ngModelOptions]=\"{standalone: true}\">\r\n                                <label nz-radio-button [nzValue]=\"'default'\">\r\n                                    <span>Default</span>\r\n                                </label>\r\n                                <label nz-radio-button [nzValue]=\"'middle'\">\r\n                                    <span>Middle</span>\r\n                                </label>\r\n                                <label nz-radio-button [nzValue]=\"'small'\">\r\n                                    <span>Small</span>\r\n                                </label>\r\n                            </nz-radio-group>\r\n                        </div>\r\n                    </div>\r\n                    <div nz-row nz-form-item>\r\n                        <div nz-form-label>\r\n                            <label>No Result</label>\r\n                        </div>\r\n                        <div nz-form-control>\r\n                            <nz-switch [(ngModel)]=\"_noresult\" (ngModelChange)=\"_toggleData()\" [ngModelOptions]=\"{standalone: true}\"></nz-switch>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <nz-table\r\n                    #nzTable\r\n                    [nzDataSource]=\"_dataSet\"\r\n                    [nzPageSize]=\"10\"\r\n                    [nzBordered]=\"_bordered\"\r\n                    [nzLoading]=\"_loading\"\r\n                    [nzIsPagination]=\"_pagination\"\r\n                    [nzShowFooter]=\"_footer\"\r\n                    [nzShowTitle]=\"_title\"\r\n                    [nzSize]=\"_size\">\r\n                    <span nz-table-title>Here is Title</span>\r\n                    <thead nz-thead *ngIf=\"_header\">\r\n                        <tr>\r\n                            <th nz-th><span>Name</span></th>\r\n                            <th nz-th><span>Age</span></th>\r\n                            <th nz-th><span>Address</span></th>\r\n                            <th nz-th><span>Action</span></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody nz-tbody>\r\n                        <tr nz-tbody-tr *ngFor=\"let data of nzTable.data\">\r\n                            <td nz-td>{{data.name}}</td>\r\n                            <td nz-td>{{data.age}}</td>\r\n                            <td nz-td>{{data.address}}</td>\r\n                            <td nz-td>\r\n                                <span>\r\n                                    <a>Action 一 {{data.name}}</a>\r\n                                    <span nz-table-divider></span>\r\n                                    <nz-popconfirm [nzTitle]=\"'Are you sure？'\" [nzOkText]=\"'ok'\" [nzCancelText]=\"'cancel'\" (nzOnConfirm)=\"confirm()\" (nzOnCancel)=\"cancel()\">\r\n                                      <a nz-popconfirm>Delete</a>\r\n                                    </nz-popconfirm>\r\n                                    <span nz-table-divider></span>\r\n                                    <nz-dropdown>\r\n                                        <a class=\"ant-dropdown-link\" nz-dropdown>\r\n                                            More actions <i class=\"anticon anticon-down\"></i>\r\n                                        </a>\r\n                                        <ul nz-menu>\r\n                                            <li nz-menu-item>1st menu item</li>\r\n                                            <li nz-menu-item>2st menu item</li>\r\n                                            <li nz-menu-item>3st menu item</li>\r\n                                        </ul>\r\n                                    </nz-dropdown>\r\n                                </span>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <span nz-table-footer>Here is footer</span>\r\n                </nz-table>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/tables/standard/standard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableStandardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__randomUser_service__ = __webpack_require__("../../../../../src/app/routes/tables/randomUser.service.ts");
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
// tslint:disable:member-ordering



var TableStandardComponent = /** @class */ (function () {
    function TableStandardComponent(_randomUser, message) {
        var _this = this;
        this._randomUser = _randomUser;
        this.message = message;
        this.data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
            }, {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            }
        ];
        this.ageSort = '';
        this._allChecked = false;
        this._indeterminate = false;
        this._displayData = [];
        // ajax
        this._current = 1;
        this._pageSize = 3;
        this._total = 1;
        this._ajaxDataSet = [];
        this._ajaxLoading = true;
        this._ajaxRefreshData = function () {
            _this._ajaxLoading = true;
            _this._randomUser.getUsers(_this._current, _this._pageSize).subscribe(function (data) {
                _this._ajaxLoading = false;
                _this._total = 200;
                _this._ajaxDataSet = data.results;
            });
        };
        // dynamic
        this._dataSet = [];
        this._bordered = false;
        this._loading = false;
        this._pagination = true;
        this._header = true;
        this._title = true;
        this._footer = true;
        this._size = 'small';
        this._noresult = false;
        this.cancel = function () {
            this.message.info('click cancel');
        };
        this.confirm = function () {
            _this.message.success('click confirm');
        };
    }
    TableStandardComponent.prototype.ageSortChange = function ($event) {
        if ($event === 'ascend') {
            this.data = this.data.sort(function (a, b) {
                return a.age - b.age;
            }).slice();
        }
        else if ($event === 'descend') {
            this.data = this.data.sort(function (a, b) {
                return b.age - a.age;
            }).slice();
        }
    };
    TableStandardComponent.prototype._displayDataChange = function ($event) {
        this._displayData = $event;
        this._refreshStatus();
    };
    TableStandardComponent.prototype._refreshStatus = function () {
        var allChecked = this._displayData.every(function (value) { return value.checked === true; });
        var allUnChecked = this._displayData.every(function (value) { return !value.checked; });
        this._allChecked = allChecked;
        this._indeterminate = (!allChecked) && (!allUnChecked);
    };
    TableStandardComponent.prototype._checkAll = function (value) {
        if (value) {
            this._displayData.forEach(function (data) {
                data.checked = true;
            });
        }
        else {
            this._displayData.forEach(function (data) {
                data.checked = false;
            });
        }
        this._refreshStatus();
    };
    TableStandardComponent.prototype.ngOnInit = function () {
        this._ajaxRefreshData();
        this._genData();
    };
    TableStandardComponent.prototype._toggleData = function () {
        if (this._noresult) {
            this._dataSet = [];
        }
        else {
            this._genData();
        }
    };
    TableStandardComponent.prototype._genData = function () {
        this._dataSet = [];
        for (var i = 1; i <= 10; i++) {
            this._dataSet.push({
                key: i,
                name: 'John Brown',
                age: i + "2",
                address: "New York No. " + i + " Lake Park",
                description: "My name is John Brown, I am " + i + "2 years old, living in New York No. " + i + " Lake Park.",
            });
        }
    };
    TableStandardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-standard',
            template: __webpack_require__("../../../../../src/app/routes/tables/standard/standard.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__randomUser_service__["a" /* RandomUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__randomUser_service__["a" /* RandomUserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["b" /* NzMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["b" /* NzMessageService */]) === "function" && _b || Object])
    ], TableStandardComponent);
    return TableStandardComponent;
    var _a, _b;
}());

//# sourceMappingURL=standard.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/tables/tables.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.4.5@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__ = __webpack_require__("../../../../_@swimlane_ngx-charts@6.1.0@@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__standard_standard_component__ = __webpack_require__("../../../../../src/app/routes/tables/standard/standard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__randomUser_service__ = __webpack_require__("../../../../../src/app/routes/tables/randomUser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__full_full_component__ = __webpack_require__("../../../../../src/app/routes/tables/full/full.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'standard', component: __WEBPACK_IMPORTED_MODULE_4__standard_standard_component__["a" /* TableStandardComponent */] },
    { path: 'full', component: __WEBPACK_IMPORTED_MODULE_6__full_full_component__["a" /* TableFullComponent */] }
];
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__["NgxChartsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__randomUser_service__["a" /* RandomUserService */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__standard_standard_component__["a" /* TableStandardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__full_full_component__["a" /* TableFullComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
            ],
            entryComponents: []
        })
    ], TablesModule);
    return TablesModule;
}());

//# sourceMappingURL=tables.module.js.map

/***/ })

});
//# sourceMappingURL=tables.module.chunk.js.map
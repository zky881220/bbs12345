webpackJsonp(["maps.module"],{

/***/ "../../../../../src/app/routes/maps/baidu/baidu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n    <h1>\r\n        Baidu Maps\r\n    </h1>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"24\">\r\n        <nz-card>\r\n            <ng-template #title>Basic Map</ng-template>\r\n            <ng-template #extra>\r\n                <nz-button-group [nzSize]=\"'small'\">\r\n                    <button nz-button (click)=\"panTo()\">\r\n                        <span>Change Center</span>\r\n                    </button>\r\n                    <button nz-button (click)=\"zoom()\">\r\n                        <span>Change Zoom</span>\r\n                    </button>\r\n                </nz-button-group>\r\n                <button nz-button (click)=\"infoWindow()\" [nzSize]=\"'small'\">\r\n                    <span>new infomation window</span>\r\n                </button>\r\n            </ng-template>\r\n            <ng-template #body>\r\n                <abm-map #map [options]=\"options\" (ready)=\"onReady($event)\" style=\"height:500px;\"></abm-map>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/maps/baidu/baidu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsBaiduComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_baidu_maps__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapsBaiduComponent = /** @class */ (function () {
    function MapsBaiduComponent(el, zone) {
        this.el = el;
        this.zone = zone;
        this.options = {};
        this.status = '';
    }
    MapsBaiduComponent.prototype.onReady = function (map) {
        var _this = this;
        this._map = map;
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity('北京');
        map.enableScrollWheelZoom(true);
        this.status = '加载完成';
        // 添加监听事件
        map.addEventListener('tilesloaded', function () {
            _this.status = '地图加载完毕';
        });
        map.addEventListener('click', this._click.bind(this));
    };
    MapsBaiduComponent.prototype._click = function (e) {
        this.status = e.point.lng + ", " + e.point.lat + ", " + +new Date;
    };
    MapsBaiduComponent.prototype.panTo = function () {
        this._map.panTo(new BMap.Point(116.404, 39.715));
    };
    MapsBaiduComponent.prototype.zoom = function () {
        this._map.setZoom((this._map.getZoom() + 1) % 17);
    };
    MapsBaiduComponent.prototype.infoWindow = function () {
        var infoWin = new BMap.InfoWindow('地址：北京市东城区王府井大街88号乐天银泰百货八层', {
            width: 200,
            height: 100,
            title: '海底捞王府井店',
            enableMessage: true,
            message: '亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~'
        });
        this._map.openInfoWindow(infoWin, this._map.getCenter());
    };
    // 卫星
    MapsBaiduComponent.prototype.onReadySatellite = function (map) {
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        map.setMapType(BMAP_SATELLITE_MAP);
        this.mapSatellite = map;
    };
    MapsBaiduComponent.prototype.ngOnDestroy = function () {
        this._map.removeEventListener('click', this._click.bind(this));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_baidu_maps__["a" /* AbmComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_baidu_maps__["a" /* AbmComponent */]) === "function" && _a || Object)
    ], MapsBaiduComponent.prototype, "mapComp", void 0);
    MapsBaiduComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maps-baidu',
            template: __webpack_require__("../../../../../src/app/routes/maps/baidu/baidu.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object])
    ], MapsBaiduComponent);
    return MapsBaiduComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=baidu.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/maps/maps.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.4.5@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_baidu_maps__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_qq_maps__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__qq_qq_component__ = __webpack_require__("../../../../../src/app/routes/maps/qq/qq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__baidu_baidu_component__ = __webpack_require__("../../../../../src/app/routes/maps/baidu/baidu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'qq', component: __WEBPACK_IMPORTED_MODULE_5__qq_qq_component__["a" /* MapsQQComponent */] },
    { path: 'baidu', component: __WEBPACK_IMPORTED_MODULE_6__baidu_baidu_component__["a" /* MapsBaiduComponent */] }
];
var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2_angular_baidu_maps__["b" /* AbmModule */].forRoot({
                    apiKey: 'p3HIQIqLqKVQOXao1IiLp5O0eTFakjEP' // app key为必选项
                }),
                __WEBPACK_IMPORTED_MODULE_3_angular_qq_maps__["b" /* AqmModule */].forRoot({
                    apiKey: 'I3TBZ-QTN3J-MWPFI-FERMS-IBOCQ-LBBWY' // app key为必选项
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__qq_qq_component__["a" /* MapsQQComponent */],
                __WEBPACK_IMPORTED_MODULE_6__baidu_baidu_component__["a" /* MapsBaiduComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
            ],
            entryComponents: []
        })
    ], MapsModule);
    return MapsModule;
}());

//# sourceMappingURL=maps.module.js.map

/***/ }),

/***/ "../../../../../src/app/routes/maps/qq/qq.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n    <h1>\r\n        QQ Maps\r\n    </h1>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"24\">\r\n        <nz-card>\r\n            <ng-template #title>Basic Map</ng-template>\r\n            <ng-template #extra>\r\n                <nz-button-group [nzSize]=\"'small'\">\r\n                    <button nz-button (click)=\"panTo()\">\r\n                        <span>Change Center</span>\r\n                    </button>\r\n                    <button nz-button (click)=\"zoom()\">\r\n                        <span>Change Zoom</span>\r\n                    </button>\r\n                </nz-button-group>\r\n                <button nz-button (click)=\"infoWindow()\" [nzSize]=\"'small'\">\r\n                    <span>new infomation window</span>\r\n                </button>\r\n            </ng-template>\r\n            <ng-template #body>\r\n                <aqm-map #map [options]=\"options\" (ready)=\"onReady($event)\" style=\"height:500px;\"></aqm-map>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/maps/qq/qq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsQQComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_qq_maps__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapsQQComponent = /** @class */ (function () {
    function MapsQQComponent(el, zone) {
        this.el = el;
        this.zone = zone;
        this.options = {};
        this.status = '';
    }
    MapsQQComponent.prototype.onReady = function (mapNative) {
        var _this = this;
        mapNative.setOptions({
            zoom: 12,
            center: new qq.maps.LatLng(39.916527, 116.397128)
        });
        this.map = mapNative;
        this.status = '加载完成';
        // 添加监听事件
        qq.maps.event.addListener(this.map, 'click', function (event) {
            // tslint:disable-next-line:no-unused-expression
            new qq.maps.Marker({
                position: event.latLng,
                map: _this.map
            });
            _this.zone.run(function () {
                _this.status = "click " + +new Date;
            });
        });
    };
    MapsQQComponent.prototype.panTo = function () {
        this.map.panTo(new qq.maps.LatLng(39.9, 116.4));
    };
    MapsQQComponent.prototype.zoom = function () {
        this.map.zoomTo((this.map.getZoom() + 1) % 17);
    };
    MapsQQComponent.prototype.infoWindow = function () {
        var infoWin = new qq.maps.InfoWindow({
            map: this.map
        });
        infoWin.open();
        infoWin.setContent('Hello world');
        infoWin.setPosition(this.map.getCenter());
    };
    // 卫星
    MapsQQComponent.prototype.onReadySatellite = function (mapNative) {
        mapNative.setOptions({
            zoom: 14,
            center: new qq.maps.LatLng(39.916527, 116.397128),
            mapTypeId: qq.maps.MapTypeId.SATELLITE
        });
        this.mapSatellite = mapNative;
    };
    MapsQQComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        ['click'].forEach(function (eventName) {
            qq.maps.event.clearListeners(_this.map, eventName);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_qq_maps__["a" /* AqmComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_qq_maps__["a" /* AqmComponent */]) === "function" && _a || Object)
    ], MapsQQComponent.prototype, "mapComp", void 0);
    MapsQQComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maps-qq',
            template: __webpack_require__("../../../../../src/app/routes/maps/qq/qq.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _c || Object])
    ], MapsQQComponent);
    return MapsQQComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=qq.component.js.map

/***/ }),

/***/ "../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/abm-panorama.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbmPanoramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/loader.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abm_config__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/abm.config.js");



var AbmPanoramaComponent = (function () {
    function AbmPanoramaComponent(el, COG, loader, zone) {
        this.el = el;
        this.COG = COG;
        this.loader = loader;
        this.zone = zone;
        this.options = {};
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.map = null;
    }
    AbmPanoramaComponent.prototype.ngOnInit = function () {
        this._initMap();
    };
    AbmPanoramaComponent.prototype.ngOnChanges = function (changes) {
        if ('options' in changes)
            this._updateOptions();
    };
    AbmPanoramaComponent.prototype._initMap = function () {
        var _this = this;
        if (this.map)
            return;
        this.loader.load().then(function () {
            _this.zone.runOutsideAngular(function () {
                try {
                    _this.map = new BMap.Panorama(_this.el.nativeElement, _this.options);
                }
                catch (ex) {
                    console.warn('全景初始化失败', ex);
                }
            });
            _this.ready.emit(_this.map);
        }).catch(function (error) {
            console.warn('js加载失败', error);
        });
    };
    AbmPanoramaComponent.prototype._updateOptions = function () {
        this.options = Object.assign({}, this.COG.panoramaOptions, this.options);
        if (this.map) {
            this.map.setOptions(this.options);
        }
    };
    AbmPanoramaComponent.prototype.destroy = function () {
    };
    AbmPanoramaComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    return AbmPanoramaComponent;
}());

AbmPanoramaComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'abm-panorama',
                template: "",
                styles: ["\n        .angular-baidu-maps-container { display:block; width:100%; height:100%; }\n    "],
                host: {
                    '[class.angular-baidu-maps-container]': 'true'
                },
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
AbmPanoramaComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__abm_config__["a" /* AbmConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
AbmPanoramaComponent.propDecorators = {
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ready': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=abm-panorama.component.js.map

/***/ }),

/***/ "../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/abm.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/loader.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abm_config__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/abm.config.js");



var AbmComponent = (function () {
    function AbmComponent(el, COG, loader, zone) {
        this.el = el;
        this.COG = COG;
        this.loader = loader;
        this.zone = zone;
        this.options = {};
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.map = null;
    }
    AbmComponent.prototype.ngOnInit = function () {
        this._initMap();
    };
    AbmComponent.prototype.ngOnChanges = function (changes) {
        if ('options' in changes)
            this._updateOptions();
    };
    AbmComponent.prototype._initMap = function () {
        var _this = this;
        if (this.map)
            return;
        this.loader.load().then(function () {
            _this.zone.runOutsideAngular(function () {
                try {
                    _this.map = new BMap.Map(_this.el.nativeElement, _this.options);
                }
                catch (ex) {
                    console.warn('地图初始化失败', ex);
                }
            });
            _this.ready.emit(_this.map);
        }).catch(function (error) {
            console.warn('js加载失败', error);
        });
    };
    AbmComponent.prototype._updateOptions = function () {
        this.options = Object.assign({}, this.COG.mapOptions, this.options);
        if (this.map) {
            this.map.setOptions(this.options);
        }
    };
    AbmComponent.prototype.destroy = function () {
        if (this.map) {
            this.map.clearOverlays();
            this.map.clearHotspots();
        }
    };
    AbmComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    return AbmComponent;
}());

AbmComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'abm-map',
                template: "",
                styles: ["\n        .angular-baidu-maps-container { display:block; width:100%; height:100%; }\n    "],
                host: {
                    '[class.angular-baidu-maps-container]': 'true'
                },
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
AbmComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__abm_config__["a" /* AbmConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
AbmComponent.propDecorators = {
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ready': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=abm.component.js.map

/***/ }),

/***/ "../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/abm.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbmConfig; });
var AbmConfig = (function () {
    function AbmConfig() {
    }
    return AbmConfig;
}());

//# sourceMappingURL=abm.config.js.map

/***/ }),

/***/ "../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/abm.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbmModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../../_@angular_common@4.4.5@@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abm_component__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/abm.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abm_panorama_component__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/abm-panorama.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abm_config__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/abm.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_service__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/loader.service.js");






var AbmModule = (function () {
    function AbmModule() {
    }
    AbmModule.forRoot = function (config) {
        return {
            ngModule: AbmModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__abm_config__["a" /* AbmConfig */], useValue: config }
            ]
        };
    };
    return AbmModule;
}());

AbmModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                providers: [__WEBPACK_IMPORTED_MODULE_5__loader_service__["a" /* LoaderService */]],
                declarations: [__WEBPACK_IMPORTED_MODULE_2__abm_component__["a" /* AbmComponent */], __WEBPACK_IMPORTED_MODULE_3__abm_panorama_component__["a" /* AbmPanoramaComponent */]],
                exports: [__WEBPACK_IMPORTED_MODULE_2__abm_component__["a" /* AbmComponent */], __WEBPACK_IMPORTED_MODULE_3__abm_panorama_component__["a" /* AbmPanoramaComponent */]]
            },] },
];
/** @nocollapse */
AbmModule.ctorParameters = function () { return []; };
//# sourceMappingURL=abm.module.js.map

/***/ }),

/***/ "../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/loader.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abm_config__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/abm.config.js");


var LoaderService = (function () {
    function LoaderService(cog) {
        this._cog = Object.assign({
            apiProtocol: 'auto',
            apiVersion: '2.0',
            apiCallback: 'angularBaiduMapsLoader',
            apiHostAndPath: 'api.map.baidu.com/api'
        }, cog);
    }
    LoaderService.prototype.load = function () {
        var _this = this;
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = this._getSrc();
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            window[_this._cog.apiCallback] = function () { resolve(); };
            script.onerror = function (error) { reject(error); };
        });
        document.body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LoaderService.prototype._getSrc = function () {
        var protocol;
        switch (this._cog.apiProtocol) {
            case 'http':
                protocol = 'http:';
                break;
            case 'https':
                protocol = 'https:';
                break;
            default:
                protocol = '';
                break;
        }
        var queryParams = {
            v: this._cog.apiVersion,
            ak: this._cog.apiKey,
            callback: this._cog.apiCallback
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            return !Array.isArray(queryParams[k]) || (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            var i = queryParams[k];
            if (Array.isArray(i))
                return { key: k, value: i.join(',') };
            return { key: k, value: i };
        })
            .map(function (entry) { return entry.key + "=" + entry.value; })
            .join('&');
        return protocol + "//" + this._cog.apiHostAndPath + "?" + params;
    };
    return LoaderService;
}());

LoaderService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
LoaderService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__abm_config__["a" /* AbmConfig */], },
]; };
//# sourceMappingURL=loader.service.js.map

/***/ }),

/***/ "../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_abm_config__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/abm.config.js");
/* unused harmony reexport AbmConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_abm_component__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/abm.component.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__core_abm_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_abm_panorama_component__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/abm-panorama.component.js");
/* unused harmony reexport AbmPanoramaComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_abm_module__ = __webpack_require__("../../../../_angular-baidu-maps@1.0.0@angular-baidu-maps/core/abm.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__core_abm_module__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/aqm-panorama.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AqmPanoramaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/loader.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aqm_config__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/aqm.config.js");



var AqmPanoramaComponent = (function () {
    function AqmPanoramaComponent(el, COG, loader, zone) {
        this.el = el;
        this.COG = COG;
        this.loader = loader;
        this.zone = zone;
        this.options = {};
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.map = null;
    }
    AqmPanoramaComponent.prototype.ngOnInit = function () {
        this._initMap();
    };
    AqmPanoramaComponent.prototype.ngOnChanges = function (changes) {
        if ('options' in changes)
            this._updateOptions();
    };
    AqmPanoramaComponent.prototype._initMap = function () {
        var _this = this;
        if (this.map)
            return;
        this.loader.load().then(function () {
            _this.zone.runOutsideAngular(function () {
                try {
                    _this.map = new qq.maps.Panorama(_this.el.nativeElement, _this.options);
                }
                catch (ex) {
                    console.warn('街景初始化失败', ex);
                }
            });
            _this.ready.emit(_this.map);
        }).catch(function (error) {
            console.warn('js加载失败', error);
        });
    };
    AqmPanoramaComponent.prototype._updateOptions = function () {
        this.options = Object.assign({}, this.COG.panoramaOptions, this.options);
        if (this.map) {
            this.map.setOptions(this.options);
        }
    };
    AqmPanoramaComponent.prototype.destroy = function () {
    };
    AqmPanoramaComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    return AqmPanoramaComponent;
}());

AqmPanoramaComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'aqm-panorama',
                template: "",
                styles: ["\n        .angular-qq-maps-container { display:block; width:100%; height:100%; }\n    "],
                host: {
                    '[class.angular-qq-maps-container]': 'true'
                },
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
AqmPanoramaComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__aqm_config__["a" /* AqmConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
AqmPanoramaComponent.propDecorators = {
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ready': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=aqm-panorama.component.js.map

/***/ }),

/***/ "../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/aqm.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AqmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/loader.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aqm_config__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/aqm.config.js");



var AqmComponent = (function () {
    function AqmComponent(el, COG, loader, zone) {
        this.el = el;
        this.COG = COG;
        this.loader = loader;
        this.zone = zone;
        this.options = {};
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.map = null;
    }
    AqmComponent.prototype.ngOnInit = function () {
        this._initMap();
    };
    AqmComponent.prototype.ngOnChanges = function (changes) {
        if ('options' in changes)
            this._updateOptions();
    };
    AqmComponent.prototype._initMap = function () {
        var _this = this;
        if (this.map)
            return;
        this.loader.load().then(function () {
            _this.zone.runOutsideAngular(function () {
                try {
                    _this.map = new qq.maps.Map(_this.el.nativeElement, _this.options);
                }
                catch (ex) {
                    console.warn('地图初始化失败', ex);
                }
            });
            _this.ready.emit(_this.map);
        }).catch(function (error) {
            console.warn('js加载失败', error);
        });
    };
    AqmComponent.prototype._updateOptions = function () {
        this.options = Object.assign({}, this.COG.mapOptions, this.options);
        if (this.map) {
            this.map.setOptions(this.options);
        }
    };
    AqmComponent.prototype.destroy = function () {
    };
    AqmComponent.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    return AqmComponent;
}());

AqmComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'aqm-map',
                template: "",
                styles: ["\n        .angular-qq-maps-container { display:block; width:100%; height:100%; }\n    "],
                host: {
                    '[class.angular-qq-maps-container]': 'true'
                },
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
            },] },
];
/** @nocollapse */
AqmComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__aqm_config__["a" /* AqmConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
AqmComponent.propDecorators = {
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ready': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=aqm.component.js.map

/***/ }),

/***/ "../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/aqm.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AqmConfig; });
var AqmConfig = (function () {
    function AqmConfig() {
    }
    return AqmConfig;
}());

//# sourceMappingURL=aqm.config.js.map

/***/ }),

/***/ "../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/aqm.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AqmModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../../_@angular_common@4.4.5@@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aqm_component__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/aqm.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aqm_panorama_component__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/aqm-panorama.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aqm_config__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/aqm.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_service__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/loader.service.js");






var AqmModule = (function () {
    function AqmModule() {
    }
    AqmModule.forRoot = function (config) {
        return {
            ngModule: AqmModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__aqm_config__["a" /* AqmConfig */], useValue: config }
            ]
        };
    };
    return AqmModule;
}());

AqmModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                providers: [__WEBPACK_IMPORTED_MODULE_5__loader_service__["a" /* LoaderService */]],
                declarations: [__WEBPACK_IMPORTED_MODULE_2__aqm_component__["a" /* AqmComponent */], __WEBPACK_IMPORTED_MODULE_3__aqm_panorama_component__["a" /* AqmPanoramaComponent */]],
                exports: [__WEBPACK_IMPORTED_MODULE_2__aqm_component__["a" /* AqmComponent */], __WEBPACK_IMPORTED_MODULE_3__aqm_panorama_component__["a" /* AqmPanoramaComponent */]]
            },] },
];
/** @nocollapse */
AqmModule.ctorParameters = function () { return []; };
//# sourceMappingURL=aqm.module.js.map

/***/ }),

/***/ "../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/loader.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aqm_config__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/aqm.config.js");


var LoaderService = (function () {
    function LoaderService(cog) {
        this._cog = Object.assign({
            apiProtocol: 'auto',
            apiVersion: '2.exp',
            apiCallback: 'angularQQMapsLoader',
            apiHostAndPath: 'map.qq.com/api/js'
        }, cog);
    }
    LoaderService.prototype.load = function () {
        var _this = this;
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = this._getSrc();
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            window[_this._cog.apiCallback] = function () { resolve(); };
            script.onerror = function (error) { reject(error); };
        });
        document.body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LoaderService.prototype._getSrc = function () {
        var protocol;
        switch (this._cog.apiProtocol) {
            case 'http':
                protocol = 'http:';
                break;
            case 'https':
                protocol = 'https:';
                break;
            default:
                protocol = '';
                break;
        }
        var queryParams = {
            v: this._cog.apiVersion,
            key: this._cog.apiKey,
            libraries: this._cog.apiLibraries,
            callback: this._cog.apiCallback
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            return !Array.isArray(queryParams[k]) || (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            var i = queryParams[k];
            if (Array.isArray(i))
                return { key: k, value: i.join(',') };
            return { key: k, value: i };
        })
            .map(function (entry) { return entry.key + "=" + entry.value; })
            .join('&');
        return protocol + "//" + this._cog.apiHostAndPath + "?" + params;
    };
    return LoaderService;
}());

LoaderService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
LoaderService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__aqm_config__["a" /* AqmConfig */], },
]; };
//# sourceMappingURL=loader.service.js.map

/***/ }),

/***/ "../../../../_angular-qq-maps@1.0.0@angular-qq-maps/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_aqm_config__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/aqm.config.js");
/* unused harmony reexport AqmConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_aqm_component__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/aqm.component.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__core_aqm_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_aqm_panorama_component__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/aqm-panorama.component.js");
/* unused harmony reexport AqmPanoramaComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_aqm_module__ = __webpack_require__("../../../../_angular-qq-maps@1.0.0@angular-qq-maps/core/aqm.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__core_aqm_module__["a"]; });




//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=maps.module.chunk.js.map
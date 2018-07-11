webpackJsonp(["charts.module"],{

/***/ "../../../../../src/app/routes/charts/chartjs/chartjs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n    <h1>Chart JS</h1>\r\n    <div>\r\n        <div sparkline data-bar-color=\"#cfdbe2\"\r\n            data-height=\"20\" data-bar-width=\"3\" data-bar-spacing=\"2\"\r\n            values=\"1,0,4,6,5,7,8,3,5,7,8\"></div>\r\n    </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Line</ng-template>\r\n            <ng-template #body>\r\n                <div style=\"height:250px;\">\r\n                    <canvas baseChart\r\n                        [datasets]=\"lineChartData\"\r\n                        [labels]=\"lineChartLabels\"\r\n                        [options]=\"{responsive: true}\"\r\n                        [colors]=\"lineChartColors\"\r\n                        [legend]=\"true\"\r\n                        [chartType]=\"'line'\"></canvas>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Bar</ng-template>\r\n            <ng-template #body>\r\n                <div style=\"height:250px;\">\r\n                    <canvas baseChart\r\n                        [datasets]=\"barChartData\"\r\n                        [labels]=\"barChartLabels\"\r\n                        [options]=\"{responsive: true, scaleShowVerticalLines: false}\"\r\n                        [legend]=\"true\"\r\n                        [chartType]=\"'bar'\"></canvas>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Doughnut</ng-template>\r\n            <ng-template #body>\r\n                <canvas baseChart\r\n                    [data]=\"doughnutChartData\"\r\n                    [labels]=\"doughnutChartLabels\"\r\n                    [options]=\"{responsive: true}\"\r\n                    [chartType]=\"'doughnut'\"></canvas>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Radar</ng-template>\r\n            <ng-template #body>\r\n                <canvas baseChart\r\n                    [datasets]=\"radarChartData\"\r\n                    [labels]=\"radarChartLabels\"\r\n                    [options]=\"{responsive: true}\"\r\n                    [chartType]=\"'radar'\"></canvas>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Pie</ng-template>\r\n            <ng-template #body>\r\n                <canvas baseChart\r\n                    [data]=\"pieChartData\"\r\n                    [labels]=\"pieChartLabels\"\r\n                    [options]=\"{responsive: true}\"\r\n                    [chartType]=\"'pie'\"></canvas>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Polar Area</ng-template>\r\n            <ng-template #body>\r\n                <canvas baseChart\r\n                    [data]=\"polarAreaChartData\"\r\n                    [labels]=\"polarAreaChartLabels\"\r\n                    [legend]=\"true\"\r\n                    [chartType]=\"'polarArea'\"></canvas>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/charts/chartjs/chartjs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartJsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartJsComponent = /** @class */ (function () {
    function ChartJsComponent() {
        // LINE
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        // BAR
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        // polar
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
    }
    ChartJsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chartjs',
            template: __webpack_require__("../../../../../src/app/routes/charts/chartjs/chartjs.component.html")
        })
    ], ChartJsComponent);
    return ChartJsComponent;
}());

//# sourceMappingURL=chartjs.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/charts/charts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.4.5@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__ = __webpack_require__("../../../../_@swimlane_ngx-charts@6.1.0@@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_g2_angular__ = __webpack_require__("../../../../_g2-angular@1.0.0@g2-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngxcharts_ngxcharts_component__ = __webpack_require__("../../../../../src/app/routes/charts/ngxcharts/ngxcharts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chartjs_chartjs_component__ = __webpack_require__("../../../../../src/app/routes/charts/chartjs/chartjs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__g2_g2_component__ = __webpack_require__("../../../../../src/app/routes/charts/g2/g2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'ngxcharts', component: __WEBPACK_IMPORTED_MODULE_5__ngxcharts_ngxcharts_component__["a" /* NgxChartsComponent */] },
    { path: 'chartjs', component: __WEBPACK_IMPORTED_MODULE_6__chartjs_chartjs_component__["a" /* ChartJsComponent */] },
    { path: 'g2', component: __WEBPACK_IMPORTED_MODULE_7__g2_g2_component__["a" /* G2Component */] }
];
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_3_g2_angular__["a" /* G2ChartModule */].forRoot({
                    js: 'https://a.alipayobjects.com/g/datavis/g2/2.3.9/index.js'
                })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__ngxcharts_ngxcharts_component__["a" /* NgxChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__chartjs_chartjs_component__["a" /* ChartJsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__g2_g2_component__["a" /* G2Component */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]
            ],
            entryComponents: []
        })
    ], ChartsModule);
    return ChartsModule;
}());

//# sourceMappingURL=charts.module.js.map

/***/ }),

/***/ "../../../../../src/app/routes/charts/g2/g2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n    <h1>\r\n        G2\r\n        <small>use <a href=\"//github.com/cipchk/g2-angular\" target=\"_blank\">g2-angular</a> library.</small>\r\n    </h1>\r\n    <div>\r\n        <div sparkline data-bar-color=\"#cfdbe2\"\r\n            data-height=\"20\" data-bar-width=\"3\" data-bar-spacing=\"2\"\r\n            values=\"1,0,4,6,5,7,8,3,5,7,8\"></div>\r\n    </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Line</ng-template>\r\n            <ng-template #body>\r\n                <g2-chart [options]=\"lineOptions\"\r\n                  (ready)=\"lineReady($event)\"></g2-chart>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Area</ng-template>\r\n            <ng-template #body>\r\n                <g2-chart [options]=\"areaOptions\"\r\n                  (ready)=\"areaReady($event)\"></g2-chart>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/charts/g2/g2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return G2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// tslint:disable:member-ordering

var G2Component = /** @class */ (function () {
    function G2Component() {
        // line
        this.lineData = [
            { month: 'Jan', temperature: 7.0 },
            { month: 'Feb', temperature: 6.9 },
            { month: 'Mar', temperature: 9.5 },
            { month: 'Apr', temperature: 14.5 },
            { month: 'May', temperature: 18.2 },
            { month: 'Jun', temperature: 21.5 },
            { month: 'Jul', temperature: 25.2 },
            { month: 'Aug', temperature: 26.5 },
            { month: 'Sep', temperature: 23.3 },
            { month: 'Oct', temperature: 18.3 },
            { month: 'Nov', temperature: 13.9 },
            { month: 'Dec', temperature: 9.6 }
        ];
        this.lineOptions = {
            height: 350,
            forceFit: true
        };
        // area
        this.areaData = [
            { year: '1986', ACME: 162, Compitor: 42 },
            { year: '1987', ACME: 134, Compitor: 54 },
            { year: '1988', ACME: 116, Compitor: 26 },
            { year: '1989', ACME: 122, Compitor: 32 },
            { year: '1990', ACME: 178, Compitor: 68 },
            { year: '1991', ACME: 144, Compitor: 54 },
            { year: '1992', ACME: 125, Compitor: 35 },
            { year: '1993', ACME: 176, Compitor: 66 },
            { year: '1994', ACME: 156 },
            { year: '1995', ACME: 195 },
            { year: '1996', ACME: 215 },
            { year: '1997', ACME: 176, Compitor: 36 },
            { year: '1998', ACME: 167, Compitor: 47 },
            { year: '1999', ACME: 142 },
            { year: '2000', ACME: 117 },
            { year: '2001', ACME: 113, Compitor: 23 },
            { year: '2002', ACME: 132 },
            { year: '2003', ACME: 146, Compitor: 46 },
            { year: '2004', ACME: 169, Compitor: 59 },
            { year: '2005', ACME: 184, Compitor: 44 }
        ];
        this.areaOptions = {
            height: 350,
            forceFit: true
        };
    }
    G2Component.prototype.lineReady = function (chart) {
        chart.source(this.lineData, {
            month: {
                alias: '月份',
                range: [0, 1]
            },
            temperature: {
                alias: '平均温度(°C)'
            }
        });
        chart.line().position('month*temperature').size(2);
        chart.render();
    };
    G2Component.prototype.areaReady = function (chart) {
        var Stat = G2.Stat;
        var Frame = G2.Frame;
        var frame = new Frame(this.areaData);
        frame = Frame.combinColumns(frame, ['ACME', 'Compitor'], 'value', 'type', 'year');
        chart.source(frame, {
            'value': {
                alias: 'The Share Price in Dollars',
                formatter: function (val) {
                    return '$' + val;
                }
            },
            year: {
                range: [0, 1]
            }
        });
        chart.tooltip({
            crosshairs: true
        });
        chart.area().position('year*value').color('type').shape('smooth');
        chart.line().position('year*value').color('type').size(2).shape('smooth');
        chart.render();
    };
    G2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-g2',
            template: __webpack_require__("../../../../../src/app/routes/charts/g2/g2.component.html")
        })
    ], G2Component);
    return G2Component;
}());

//# sourceMappingURL=g2.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/charts/ngxcharts/ngxcharts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content__title\">\r\n    <h1>Flot charts<small>ANGULAR2 D3 CHART FRAMEWORK</small></h1>\r\n    <div>\r\n        <div sparkline data-bar-color=\"#cfdbe2\"\r\n            data-height=\"20\" data-bar-width=\"3\" data-bar-spacing=\"2\"\r\n            values=\"1,0,4,6,5,7,8,3,5,7,8\"></div>\r\n    </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Bar</ng-template>\r\n            <ng-template #body>\r\n                <div style=\"height:250px;\">\r\n                    <ngx-charts-bar-vertical\r\n                        [results]=\"single\"\r\n                        [scheme]=\"colorScheme\"\r\n                        [gradient]=\"true\"\r\n                        [xAxis]=\"true\"\r\n                        [yAxis]=\"true\"\r\n                        [legend]=\"true\"\r\n                        [showXAxisLabel]=\"true\"\r\n                        [showYAxisLabel]=\"true\"\r\n                        [xAxisLabel]=\"'Country'\"\r\n                        [yAxisLabel]=\"'Population'\">\r\n                    </ngx-charts-bar-vertical>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Stacked Bar</ng-template>\r\n            <ng-template #body>\r\n                <div style=\"height:250px;\">\r\n                    <ngx-charts-bar-vertical-stacked\r\n                        [results]=\"multi\"\r\n                        [scheme]=\"colorScheme\"\r\n                        [gradient]=\"true\"\r\n                        [xAxis]=\"true\"\r\n                        [yAxis]=\"true\"\r\n                        [legend]=\"true\"\r\n                        [showXAxisLabel]=\"true\"\r\n                        [showYAxisLabel]=\"true\"\r\n                        [xAxisLabel]=\"'Country'\"\r\n                        [yAxisLabel]=\"'Population'\">\r\n                    </ngx-charts-bar-vertical-stacked>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Pie</ng-template>\r\n            <ng-template #body>\r\n                <div style=\"height:250px;\">\r\n                    <ngx-charts-pie-chart\r\n                        [results]=\"single\"\r\n                        [scheme]=\"colorScheme\"\r\n                        [gradient]=\"true\"\r\n                        [labels]=\"true\"\r\n                        [legend]=\"true\"\r\n                        [doughnut]=\"false\">\r\n                    </ngx-charts-pie-chart>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Pie Grid</ng-template>\r\n            <ng-template #body>\r\n                <div style=\"height:250px;\">\r\n                    <ngx-charts-pie-grid\r\n                        [results]=\"single\"\r\n                        [scheme]=\"colorScheme\">\r\n                    </ngx-charts-pie-grid>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"24\">\r\n        <nz-card>\r\n            <ng-template #title>Advanced Pie</ng-template>\r\n            <ng-template #body>\r\n                <div style=\"height:250px;\">\r\n                    <ngx-charts-advanced-pie-chart\r\n                        [results]=\"single\"\r\n                        [scheme]=\"colorScheme\"\r\n                        [gradient]=\"true\">\r\n                    </ngx-charts-advanced-pie-chart>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Line</ng-template>\r\n            <ng-template #body>\r\n                <div style=\"height:250px;\">\r\n                    <ngx-charts-line-chart\r\n                        [results]=\"multi\"\r\n                        [scheme]=\"colorScheme\"\r\n                        [gradient]=\"true\"\r\n                        [xAxis]=\"true\"\r\n                        [yAxis]=\"true\"\r\n                        [legend]=\"true\"\r\n                        [showXAxisLabel]=\"true\"\r\n                        [showYAxisLabel]=\"true\"\r\n                        [xAxisLabel]=\"'Country'\"\r\n                        [yAxisLabel]=\"'Population'\"\r\n                        [autoScale]=\"true\">\r\n                    </ngx-charts-line-chart>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Area</ng-template>\r\n            <ng-template #body>\r\n                <div style=\"height:250px;\">\r\n                    <ngx-charts-area-chart\r\n                        [results]=\"multi\"\r\n                        [scheme]=\"colorScheme\"\r\n                        [gradient]=\"true\"\r\n                        [xAxis]=\"true\"\r\n                        [yAxis]=\"true\"\r\n                        [legend]=\"true\"\r\n                        [showXAxisLabel]=\"true\"\r\n                        [showYAxisLabel]=\"true\"\r\n                        [xAxisLabel]=\"'Country'\"\r\n                        [yAxisLabel]=\"'Population'\"\r\n                        [autoScale]=\"true\">\r\n                    </ngx-charts-area-chart>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Tree Map</ng-template>\r\n            <ng-template #body>\r\n                <div style=\"height:250px;\">\r\n                    <ngx-charts-tree-map\r\n                        [results]=\"single\"\r\n                        [scheme]=\"colorScheme\">\r\n                    </ngx-charts-tree-map>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Number Card</ng-template>\r\n            <ng-template #body>\r\n                <div style=\"height:250px;\">\r\n                    <ngx-charts-number-card\r\n                        [results]=\"single\"\r\n                        [scheme]=\"colorScheme\">\r\n                    </ngx-charts-number-card>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"16\">\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Gauge</ng-template>\r\n            <ng-template #body>\r\n                <div style=\"height:250px;\">\r\n                    <ngx-charts-gauge\r\n                        [results]=\"single\"\r\n                        [scheme]=\"colorScheme\"\r\n                        [min]=\"0\"\r\n                        [max]=\"100\"\r\n                        [angleSpan]=\"240\"\r\n                        [startAngle]=\"-120\"\r\n                        [units]=\"'alerts'\"\r\n                        [bigSegments]=\"10\"\r\n                        [smallSegments]=\"5\">\r\n                    </ngx-charts-gauge>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n    <div nz-col [nzMd]=\"12\">\r\n        <nz-card>\r\n            <ng-template #title>Linear Gauge</ng-template>\r\n            <ng-template #body>\r\n                <div style=\"height:250px;\">\r\n                    <ngx-charts-linear-gauge\r\n                        [scheme]=\"colorScheme\"\r\n                        [value]=\"60\"\r\n                        [previousValue]=\"80\"\r\n                        [min]=\"0\"\r\n                        [max]=\"100\"\r\n                        [units]=\"'alerts'\">\r\n                    </ngx-charts-linear-gauge>\r\n                </div>\r\n            </ng-template>\r\n        </nz-card>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/routes/charts/ngxcharts/ngxcharts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgxChartsComponent = /** @class */ (function () {
    function NgxChartsComponent() {
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.single = [
            {
                'name': 'China',
                'value': 12940000
            },
            {
                'name': 'Germany',
                'value': 8940000
            },
            {
                'name': 'USA',
                'value': 5000000
            },
            {
                'name': 'France',
                'value': 7200000
            }
        ];
        this.multi = [
            {
                'name': 'China',
                'series': [
                    {
                        'name': '2010',
                        'value': 9300000
                    },
                    {
                        'name': '2011',
                        'value': 12940000
                    }
                ]
            },
            {
                'name': 'Germany',
                'series': [
                    {
                        'name': '2010',
                        'value': 7300000
                    },
                    {
                        'name': '2011',
                        'value': 8940000
                    }
                ]
            },
            {
                'name': 'USA',
                'series': [
                    {
                        'name': '2010',
                        'value': 7870000
                    },
                    {
                        'name': '2011',
                        'value': 8270000
                    }
                ]
            },
            {
                'name': 'France',
                'series': [
                    {
                        'name': '2010',
                        'value': 5000002
                    },
                    {
                        'name': '2011',
                        'value': 5800000
                    }
                ]
            }
        ];
    }
    NgxChartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ngxcharts',
            template: __webpack_require__("../../../../../src/app/routes/charts/ngxcharts/ngxcharts.component.html")
        })
    ], NgxChartsComponent);
    return NgxChartsComponent;
}());

//# sourceMappingURL=ngxcharts.component.js.map

/***/ }),

/***/ "../../../../_g2-angular@1.0.0@g2-angular/core/component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return G2ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("../../../../_g2-angular@1.0.0@g2-angular/core/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__script_service__ = __webpack_require__("../../../../_g2-angular@1.0.0@g2-angular/core/script.service.js");



var G2ChartComponent = (function () {
    function G2ChartComponent(el, config, ss) {
        this.el = el;
        this.config = config;
        this.ss = ss;
        this.initFlag = false;
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.destroy = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    G2ChartComponent.prototype.ngOnChanges = function (changes) {
        if ('options' in changes)
            this.init();
    };
    G2ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 构建一个虚拟id
        this.id = 'angular-g2-' + new Date().getTime();
        this.el.nativeElement.id = this.id;
        this.initFlag = true;
        // 已经存在对象无须进入懒加载模式
        if (window.G2) {
            this.init();
            return;
        }
        this.ss.load(this.config.js).getChangeEmitter().subscribe(function (res) {
            _this.init();
        });
    };
    G2ChartComponent.prototype.init = function (options) {
        if (!this.initFlag)
            return;
        if (this.instance) {
            this._destroy(false);
        }
        // 强制设置container为null，并使用 `id` 初始化
        this.instance = new window.G2.Chart(Object.assign({}, this.options, {
            id: this.id,
            container: null
        }));
        this.ready.emit(this.instance);
    };
    G2ChartComponent.prototype._destroy = function (needNotify) {
        if (needNotify === void 0) { needNotify = false; }
        if (this.instance) {
            this.instance.destroy();
            this.instance = null;
        }
        if (needNotify)
            this.destroy.emit();
    };
    Object.defineProperty(G2ChartComponent.prototype, "Instance", {
        /**
         * 获取Chart实例
         *
         * @readonly
         */
        get: function () {
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    G2ChartComponent.prototype.ngOnDestroy = function () {
        this._destroy(true);
    };
    return G2ChartComponent;
}());

G2ChartComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'g2-chart',
                template: ""
            },] },
];
/** @nocollapse */
G2ChartComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__config__["a" /* G2ChartConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__script_service__["a" /* ScriptService */], },
]; };
G2ChartComponent.propDecorators = {
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'ready': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'destroy': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../../../_g2-angular@1.0.0@g2-angular/core/config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return G2ChartConfig; });
var G2ChartConfig = (function () {
    function G2ChartConfig() {
    }
    return G2ChartConfig;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../_g2-angular@1.0.0@g2-angular/core/module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return G2ChartModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../../_@angular_common@4.4.5@@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component__ = __webpack_require__("../../../../_g2-angular@1.0.0@g2-angular/core/component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__script_service__ = __webpack_require__("../../../../_g2-angular@1.0.0@g2-angular/core/script.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("../../../../_g2-angular@1.0.0@g2-angular/core/config.js");





var G2ChartModule = (function () {
    function G2ChartModule() {
    }
    G2ChartModule.forRoot = function (config) {
        return {
            ngModule: G2ChartModule,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__config__["a" /* G2ChartConfig */], useValue: config }
            ]
        };
    };
    return G2ChartModule;
}());

G2ChartModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                providers: [__WEBPACK_IMPORTED_MODULE_3__script_service__["a" /* ScriptService */]],
                declarations: [__WEBPACK_IMPORTED_MODULE_2__component__["a" /* G2ChartComponent */]],
                exports: [__WEBPACK_IMPORTED_MODULE_2__component__["a" /* G2ChartComponent */]]
            },] },
];
/** @nocollapse */
G2ChartModule.ctorParameters = function () { return []; };
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "../../../../_g2-angular@1.0.0@g2-angular/core/script.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.5@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);


var ScriptService = (function () {
    function ScriptService() {
        this.loaded = false;
        this.list = {};
        this.emitter = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    ScriptService.prototype.getChangeEmitter = function () {
        return this.emitter;
    };
    ScriptService.prototype.load = function (path) {
        var _this = this;
        if (this.loaded)
            return this;
        this.loaded = true;
        this.loadScript(path).then(function (res) {
            _this.emitter.next(true);
        });
        return this;
    };
    ScriptService.prototype.loadScript = function (path) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.list[path] === true) {
                resolve({
                    path: path,
                    loaded: true,
                    status: 'Loaded'
                });
                return;
            }
            _this.list[path] = true;
            var node = document.createElement('script');
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if (node.readyState) {
                node.onreadystatechange = function () {
                    if (node.readyState === "loaded" || node.readyState === "complete") {
                        node.onreadystatechange = null;
                        resolve({
                            path: path,
                            loaded: true,
                            status: 'Loaded'
                        });
                    }
                };
            }
            else {
                node.onload = function () {
                    resolve({
                        path: path,
                        loaded: true,
                        status: 'Loaded'
                    });
                };
            }
            node.onerror = function (error) { return resolve({
                path: path,
                loaded: false,
                status: 'Loaded'
            }); };
            document.getElementsByTagName('head')[0].appendChild(node);
        });
    };
    return ScriptService;
}());

ScriptService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ScriptService.ctorParameters = function () { return []; };
//# sourceMappingURL=script.service.js.map

/***/ }),

/***/ "../../../../_g2-angular@1.0.0@g2-angular/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_config__ = __webpack_require__("../../../../_g2-angular@1.0.0@g2-angular/core/config.js");
/* unused harmony reexport G2ChartConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_component__ = __webpack_require__("../../../../_g2-angular@1.0.0@g2-angular/core/component.js");
/* unused harmony reexport G2ChartComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_module__ = __webpack_require__("../../../../_g2-angular@1.0.0@g2-angular/core/module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__core_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=charts.module.chunk.js.map
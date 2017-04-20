var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var TopbarComponent = (function () {
    function TopbarComponent() {
        this.user = localStorage.getItem("user");
        this.class = localStorage.getItem("class");
        this.isCollapsed = true;
        this.fullImagePath = './assets/face.png';
    }
    TopbarComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TopbarComponent.prototype, "menuIcon", {
        get: function () {
            return this.isCollapsed ? '☰' : '✖';
        },
        enumerable: true,
        configurable: true
    });
    TopbarComponent = __decorate([
        Component({
            selector: 'app-topbar',
            templateUrl: './topbar.component.html',
            styleUrls: ['./topbar.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TopbarComponent);
    return TopbarComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/topbar/topbar.component.js.map
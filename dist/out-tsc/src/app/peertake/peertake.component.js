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
import { Http } from "@angular/http";
export var PeertakeComponent = (function () {
    function PeertakeComponent(http) {
        this.http = http;
        this.class = localStorage.getItem("class");
    }
    PeertakeComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    PeertakeComponent.prototype.getData = function () {
        var _this = this;
        this.http.post('http://localhost/untitledfolder/enterVal.php', JSON.stringify(localStorage.getItem("class")))
            .subscribe(function (res) { return _this.data = res.json(); });
    };
    PeertakeComponent = __decorate([
        Component({
            selector: 'app-peertake',
            templateUrl: './peertake.component.html',
            styleUrls: ['./peertake.component.css']
        }), 
        __metadata('design:paramtypes', [Http])
    ], PeertakeComponent);
    return PeertakeComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/peertake/peertake.component.js.map
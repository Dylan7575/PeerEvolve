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
import { Http, Headers, RequestOptions } from "@angular/http";
export var HomeComponent = (function () {
    function HomeComponent(http) {
        this.http = http;
        this.data = "dcl75";
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.http.post('http://localhost/untitledfolder/admin.php', JSON.stringify(this.data))
            .subscribe(function (res) { return _this.data = res.json(); });
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }), 
        __metadata('design:paramtypes', [Http])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/app/home/home.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";
export var HomeComponent = (function () {
    function HomeComponent(http, router, ref) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.ref = ref;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
        setInterval(function () {
            _this.ref.detectChanges();
            _this.getData();
        }, 1000);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    HomeComponent.prototype.change = function (event) {
        this.showing = event;
    };
    HomeComponent.prototype.getData = function () {
        var _this = this;
        // this.http.get("http://localhost/untitledfolder/getUserName.php").subscribe(res=>this.us=res.json());
        this.http.post('http://localhost/untitledfolder/GetClasses.php', JSON.stringify(localStorage.getItem("user"))).
            subscribe(function (res) { return _this.data = res.json(); });
        //   console.log(this.data);
        // this.http.post('http://localhost/untitledfolder/classStats.php',JSON.stringify(localStorage.getItem("class"))).
        // subscribe(res=>this.activeNum=res.json());
    };
    HomeComponent.prototype.setClass = function (toClass) {
        localStorage.setItem("class", toClass);
        this.router.navigateByUrl("students");
    };
    HomeComponent.prototype.show = function () {
        this.showing = true;
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }), 
        __metadata('design:paramtypes', [Http, Router, ChangeDetectorRef])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/home/home.component.js.map
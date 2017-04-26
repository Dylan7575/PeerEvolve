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
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
export var EvalstatsComponent = (function () {
    function EvalstatsComponent(http) {
        this.http = http;
        this.sender = [];
        this.scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.evalid = localStorage.getItem("evalID");
        this.currentClass = localStorage.getItem("class");
    }
    EvalstatsComponent.prototype.ngOnInit = function () {
        this.sender.push(this.evalid);
        this.sender.push(this.currentClass);
        console.log(this.sender);
        this.getData();
    };
    EvalstatsComponent.prototype.getData = function () {
        var _this = this;
        this.http.post('http://localhost/untitledfolder/getScores.php', JSON.stringify(this.sender))
            .subscribe(function (res) { return _this.data = res.json(); });
    };
    EvalstatsComponent.prototype.downloadFile = function () {
        var blob = new Angular2Csv(this.data, "MyReport");
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    EvalstatsComponent.prototype.getStuff = function (users) {
        return Object.keys(users).map(function (key) { return users[key]; });
    };
    EvalstatsComponent = __decorate([
        Component({
            selector: 'app-evalstats',
            templateUrl: './evalstats.component.html',
            styleUrls: ['./evalstats.component.css']
        }), 
        __metadata('design:paramtypes', [Http])
    ], EvalstatsComponent);
    return EvalstatsComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/evalstats/evalstats.component.js.map
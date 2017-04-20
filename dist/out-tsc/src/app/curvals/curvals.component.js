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
export var CurvalsComponent = (function () {
    function CurvalsComponent(http) {
        this.http = http;
        this.currentClass = JSON.stringify(localStorage.getItem("class"));
    }
    CurvalsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    CurvalsComponent.prototype.getData = function () {
        var _this = this;
        this.http.post('http://localhost/untitledfolder/GetVals.php', this.currentClass)
            .subscribe(function (res) { return _this.data = res.json(); });
        console.log(JSON.stringify(this.data));
    };
    CurvalsComponent.prototype.saveID = function (toStore) {
        localStorage.setItem("evalID", toStore);
    };
    CurvalsComponent = __decorate([
        Component({
            selector: 'app-curvals',
            templateUrl: './curvals.component.html',
            styleUrls: ['./curvals.component.css']
        }), 
        __metadata('design:paramtypes', [Http])
    ], CurvalsComponent);
    return CurvalsComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/curvals/curvals.component.js.map
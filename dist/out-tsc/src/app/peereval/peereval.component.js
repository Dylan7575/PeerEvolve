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
import { Validators, FormBuilder } from "@angular/forms";
export var PeerevalComponent = (function () {
    function PeerevalComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.temp = true;
        this.peerEnter = this.fb.group({
            CD: ["", Validators.compose([Validators.required, Validators.pattern('2{1}[0-9][0-9][0-9]\-(0[1-9]|1[012])\-(0[1-9]|1[1-9]|2[1-9]|3[0-1])')])],
            OD: ["", Validators.compose([Validators.required, Validators.pattern('2{1}[0-9][0-9][0-9]\-(0[1-9]|1[012])\-(0[1-9]|1[1-9]|2[1-9]|3[0-1])')])],
            DD: ["", Validators.compose([Validators.required, Validators.pattern('2{1}[0-9][0-9][0-9]\-(0[1-9]|1[012])\-(0[1-9]|1[1-9]|2[1-9]|3[0-1])')])]
        });
    }
    PeerevalComponent.prototype.ngOnInit = function () {
    };
    PeerevalComponent.prototype.doLogin = function (event) {
        var _this = this;
        this.temp = false;
        console.log(this.peerEnter.value);
        var b = this.peerEnter.value;
        var cd = b['CD'];
        var od = b['OD'];
        var dd = b['DD'];
        var list = [od, dd, cd, localStorage.getItem("")];
        this.http.post('http://localhost/untitledfolder/IP.php', JSON.stringify(list))
            .subscribe(function (res) { return _this.data = res.json(); });
        //console.log(JSON.stringify(list));
        console.log(this.data);
        this.peerEnter.reset();
    };
    PeerevalComponent = __decorate([
        Component({
            selector: 'app-peereval',
            templateUrl: './peereval.component.html',
            styleUrls: ['./peereval.component.css']
        }), 
        __metadata('design:paramtypes', [Http, FormBuilder])
    ], PeerevalComponent);
    return PeerevalComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/peereval/peereval.component.js.map
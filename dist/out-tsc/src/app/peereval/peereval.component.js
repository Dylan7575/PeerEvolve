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
import { DatePickerOptions } from 'ng2-datepicker';
import { Router } from "@angular/router";
export var PeerevalComponent = (function () {
    function PeerevalComponent(http, fb, router) {
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.temp = true;
        this.peerEnter = this.fb.group({
            CD: ["", Validators.compose([Validators.required])],
            OD: ["", Validators.compose([Validators.required])],
            DD: ["", Validators.compose([Validators.required])]
        });
        this.options = new DatePickerOptions();
    }
    PeerevalComponent.prototype.ngOnInit = function () {
    };
    PeerevalComponent.prototype.doLogin = function (event) {
        var _this = this;
        this.temp = false;
        var cd = this.date1.formatted;
        var od = this.date.formatted;
        var dd = this.date2.formatted;
        var list = [od, dd, cd, localStorage.getItem("user"), localStorage.getItem("class")];
        this.http.post('http://localhost/untitledfolder/IP.php', JSON.stringify(list))
            .subscribe(function (res) { return _this.data = res.json(); });
        //console.log(JSON.stringify(list));
        //console.log(this.data);
        this.peerEnter.reset();
        alert("Evaluation successfully created");
        this.router.navigateByUrl("curvals");
    };
    PeerevalComponent = __decorate([
        Component({
            selector: 'app-peereval',
            templateUrl: './peereval.component.html',
            styleUrls: ['./peereval.component.css']
        }), 
        __metadata('design:paramtypes', [Http, FormBuilder, Router])
    ], PeerevalComponent);
    return PeerevalComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/peereval/peereval.component.js.map
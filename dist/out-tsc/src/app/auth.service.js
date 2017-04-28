var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
export var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.canActivate = function (route, State) {
        localStorage.setItem("user", "dcl75");
        var user = localStorage.getItem("user");
        // this.http.post('http://localhost/',JSON.stringify(user))
        //   .subscribe(res=>this.data=res.json());
        //if (this.data != "auth"){
        //  return false;
        //}
        return true;
    };
    AuthService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/auth.service.js.map
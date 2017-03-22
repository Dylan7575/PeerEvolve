var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
export var AdminGuard = (function () {
    function AdminGuard(http) {
        this.http = http;
    }
    AdminGuard.prototype.canActivate = function () {
        var _this = this;
        var user = localStorage.getItem("user");
        this.http.post('http://localhost/untitledfolder/admin.php', JSON.stringify(this.data))
            .subscribe(function (res) { return _this.data = res.json(); });
        if (this.data === "admin") {
            localStorage.setItem("admin", "true");
            return true;
        }
    };
    AdminGuard = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], AdminGuard);
    return AdminGuard;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/app/admin.guard.js.map
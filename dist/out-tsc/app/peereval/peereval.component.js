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
export var PeerevalComponent = (function () {
    function PeerevalComponent(http) {
        this.http = http;
    }
    PeerevalComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    PeerevalComponent.prototype.getData = function () {
        var _this = this;
        this.http.post('http://localhost/untitledfolder/createPeer.php', JSON.stringify(this.data))
            .subscribe(function (res) { return _this.data = res.json(); });
    };
    PeerevalComponent = __decorate([
        Component({
            selector: 'app-peereval',
            templateUrl: './peereval.component.html',
            styleUrls: ['./peereval.component.css']
        }), 
        __metadata('design:paramtypes', [Http])
    ], PeerevalComponent);
    return PeerevalComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/app/peereval/peereval.component.js.map
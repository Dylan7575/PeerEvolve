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
export var DoerBarComponent = (function () {
    function DoerBarComponent(ref) {
        var _this = this;
        this.ref = ref;
        this.currentClass = this.currentClass;
        setInterval(function () {
            _this.ref.detectChanges();
            _this.currentClass = localStorage.getItem("class");
        }, 500);
    }
    DoerBarComponent.prototype.ngOnInit = function () {
    };
    DoerBarComponent = __decorate([
        Component({
            selector: 'app-doer-bar',
            templateUrl: './doer-bar.component.html',
            styleUrls: ['./doer-bar.component.css']
        }), 
        __metadata('design:paramtypes', [ChangeDetectorRef])
    ], DoerBarComponent);
    return DoerBarComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/doer-bar/doer-bar.component.js.map
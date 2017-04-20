var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
export var DynamicFormComponent = (function () {
    function DynamicFormComponent() {
        this.questions = [];
        this.payLoad = '';
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], DynamicFormComponent.prototype, "questions", void 0);
    DynamicFormComponent = __decorate([
        Component({
            selector: 'app-dynamic-form',
            templateUrl: './dynamic-form.component.html',
            styleUrls: ['./dynamic-form.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/dynamic-form/dynamic-form.component.js.map
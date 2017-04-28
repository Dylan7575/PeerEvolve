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
import { FormBuilder, Validators } from "@angular/forms";
import { Http } from "@angular/http";
export var MakeGroupsComponent = (function () {
    function MakeGroupsComponent(fb, http) {
        this.fb = fb;
        this.http = http;
        this.groupEnter = this.fb.group({
            Group: ["", Validators.compose([Validators.required])],
        });
    }
    MakeGroupsComponent.prototype.ngOnInit = function () {
    };
    MakeGroupsComponent.prototype.doLogin = function () {
        var _this = this;
        var b = this.groupEnter.value;
        var Group = b['Group'];
        var list = [Group, localStorage.getItem("class")];
        this.http.post('http://localhost/untitledfolder/InsertGroup.php', JSON.stringify(list))
            .subscribe(function (res) { return _this.data = res.json(); });
        alert("Group successfully created");
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MakeGroupsComponent.prototype, "currClass", void 0);
    MakeGroupsComponent = __decorate([
        Component({
            selector: 'app-make-groups',
            templateUrl: './make-groups.component.html',
            styleUrls: ['./make-groups.component.css']
        }), 
        __metadata('design:paramtypes', [FormBuilder, Http])
    ], MakeGroupsComponent);
    return MakeGroupsComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/make-groups/make-groups.component.js.map
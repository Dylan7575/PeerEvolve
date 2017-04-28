var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, Input } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";
import { Http } from "@angular/http";
import { EventEmitter } from "@angular/common/src/facade/async";
export var SingleStudentComponent = (function () {
    function SingleStudentComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.fail = localStorage.getItem("class");
        this.bool = false;
        this.test = new EventEmitter();
        this.studentEnter = this.fb.group({
            StudentID: ["", Validators.compose([Validators.required])],
            Group: ["", Validators.compose([Validators.required])],
            Group2: ["", Validators.compose([Validators.required])]
        });
    }
    SingleStudentComponent.prototype.ngOnInit = function () {
    };
    SingleStudentComponent.prototype.doLogin = function ($event) {
        var _this = this;
        var b = this.studentEnter.value;
        var cd = b['StudentID'];
        var od = b['Group'];
        var dd = localStorage.getItem("class");
        var list = [cd, od, dd];
        this.http.post('http://localhost/untitledfolder/singleStudent.php', JSON.stringify(list))
            .subscribe(function (res) { return _this.data = res.json(); });
        this.studentEnter.reset();
        this.test.emit(false);
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], SingleStudentComponent.prototype, "test", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], SingleStudentComponent.prototype, "currClass", void 0);
    SingleStudentComponent = __decorate([
        Component({
            selector: 'app-single-student',
            templateUrl: './single-student.component.html',
            styleUrls: ['./single-student.component.css']
        }), 
        __metadata('design:paramtypes', [Http, FormBuilder])
    ], SingleStudentComponent);
    return SingleStudentComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/single-student/single-student.component.js.map
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
import { FormBuilder, Validators } from "@angular/forms";
import { Http } from "@angular/http";
export var NewclassComponent = (function () {
    function NewclassComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.temp = true;
        this.classEnter = this.fb.group({
            Semester: ["", Validators.compose([Validators.required, Validators.minLength(1)])],
            CourseID: ["", Validators.compose([Validators.required, Validators.minLength(1)])],
        });
    }
    NewclassComponent.prototype.ngOnInit = function () {
    };
    NewclassComponent.prototype.doLogin = function (event) {
        var _this = this;
        this.temp = false;
        console.log(this.classEnter.value);
        var b = this.classEnter.value;
        var Semester = b['Semester'];
        var CourseID = b['CourseID'];
        var list = [Semester, CourseID];
        this.http.post('http://localhost/untitledfolder/InsertCourse.php', JSON.stringify(list))
            .subscribe(function (res) { return _this.data = res.json(); });
        //console.log(JSON.stringify(list));
    };
    NewclassComponent = __decorate([
        Component({
            selector: 'app-newclass',
            templateUrl: './newclass.component.html',
            styleUrls: ['./newclass.component.css']
        }), 
        __metadata('design:paramtypes', [Http, FormBuilder])
    ], NewclassComponent);
    return NewclassComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/newclass/newclass.component.js.map
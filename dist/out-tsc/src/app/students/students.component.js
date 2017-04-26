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
import { Http } from "@angular/http";
export var StudentsComponent = (function () {
    function StudentsComponent(ref, http) {
        var _this = this;
        this.ref = ref;
        this.http = http;
        this.classID = localStorage.getItem("class");
        this.showing = false;
        setInterval(function () {
            _this.ref.detectChanges();
            _this.getData();
        }, 1000);
    }
    StudentsComponent.prototype.ngOnChanges = function () {
        this.getData();
    };
    StudentsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    StudentsComponent.prototype.getData = function () {
        var _this = this;
        this.http.post('http://localhost/untitledfolder/GetStudents.php', JSON.stringify(this.classID))
            .subscribe(function (res) { return _this.data = res.json(); });
    };
    StudentsComponent.prototype.show = function () {
        this.showing = true;
    };
    StudentsComponent.prototype.change = function (event) {
        this.showing = event;
    };
    StudentsComponent.prototype.saveID = function (studentID, GroupID) {
        localStorage.setItem("student", studentID);
        localStorage.setItem("group", GroupID);
    };
    StudentsComponent = __decorate([
        Component({
            selector: 'app-students',
            templateUrl: './students.component.html',
            styleUrls: ['./students.component.css']
        }), 
        __metadata('design:paramtypes', [ChangeDetectorRef, Http])
    ], StudentsComponent);
    return StudentsComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/students/students.component.js.map
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
import { Router } from "@angular/router";
export var EditStudentComponent = (function () {
    function EditStudentComponent(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.student = localStorage.getItem("student");
        this.group = localStorage.getItem("group");
        this.course = localStorage.getItem("class");
        this.studedit = this.fb.group({
            Stud: ["", Validators.compose([Validators.required])],
            Group: ["", Validators.compose([Validators.required])],
        });
    }
    EditStudentComponent.prototype.ngOnInit = function () {
        var yes = document.getElementsByTagName("option");
        console.log(yes);
        for (var i = 0; i < yes.length; i++) {
            var test = document.getElementsByTagName("option")[i];
            console.log(test.value);
            if (test.value == this.group) {
                console.log("te");
                test.selected = true;
            }
        }
    };
    EditStudentComponent.prototype.changeStatus = function () {
        var yes = document.getElementsByTagName("option")[0].value;
        console.log(yes);
        if (yes == 'yees') {
            document.getElementsByTagName("option")[0].disabled = true;
        }
    };
    EditStudentComponent.prototype.update = function () {
        var _this = this;
        var stud = this.studedit.value['Stud'];
        var group = this.studedit.value['Group'];
        var list = [stud, group, this.student, this.group, this.course];
        console.log(JSON.stringify(list));
        this.http.post('http://localhost/untitledfolder/studentEdit.php', JSON.stringify(list))
            .subscribe(function (res) { return _this.data = res.json(); });
        alert("User Successfully Changed");
        this.router.navigateByUrl("/students");
    };
    EditStudentComponent.prototype.deleter = function () {
        var _this = this;
        var list = [this.student, this.group, this.course];
        console.log(list);
        this.http.post('http://localhost/untitledfolder/deleteUser.php', JSON.stringify(list))
            .subscribe(function (res) { return _this.data = res.json(); });
        alert("User Successfully Deleted");
        this.router.navigateByUrl("/students");
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], EditStudentComponent.prototype, "currClass", void 0);
    EditStudentComponent = __decorate([
        Component({
            selector: 'app-edit-student',
            templateUrl: './edit-student.component.html',
            styleUrls: ['./edit-student.component.css']
        }), 
        __metadata('design:paramtypes', [FormBuilder, Http, Router])
    ], EditStudentComponent);
    return EditStudentComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/edit-student/edit-student.component.js.map
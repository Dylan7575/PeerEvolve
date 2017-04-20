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
import { Http } from "@angular/http";
export var PeertakeComponent = (function () {
    function PeertakeComponent(http) {
        this.http = http;
        this.classs = localStorage.getItem("class");
        this.sender = [];
        this.errorMessage = [];
        this.payLoad = [];
    }
    PeertakeComponent.prototype.ngOnInit = function () {
        this.form = this.model.toGroup();
    };
    PeertakeComponent.prototype.getData = function () {
        var _this = this;
        this.http.post('http://localhost/untitledfolder/enterVal.php', JSON.stringify(localStorage.getItem("class")))
            .subscribe(function (res) { return _this.data = res.json(); });
        this.http.post('http://localhost/untitledfolder/questions.php', JSON.stringify(this.classs))
            .subscribe(function (res) { return _this.questions = res.json(); });
    };
    PeertakeComponent.prototype.onSubmit = function () {
        if (this.zeroSum()) {
            this.payLoad = JSON.stringify(this.form.value);
            this.hope();
            this.errorMessage.pop();
            return true;
        }
        else {
            this.errorMessage.push("Sum does not equal 100x the number of group members");
            this.payLoad = "no";
            return false;
        }
    };
    PeertakeComponent.prototype.zeroSum = function () {
        var array = document.getElementsByName("zerosum");
        var tot = 0;
        for (var i = 0; i < array.length; i++) {
            if (parseInt(array[i].value)) {
                tot += parseInt(array[i].value);
            }
        }
        return tot === array.length * 100;
    };
    PeertakeComponent.prototype.hope = function () {
        var _this = this;
        var i = 0;
        while (document.getElementById(this.users[0] + i) != null) {
            i++;
        }
        for (var k = 0; k < this.users.length; k++) {
            var user = this.users[k];
            for (var j = 0; j < i; j++) {
                var array = JSON.stringify(document.getElementById(user + j).value);
                //console.log(JSON.parse(array));
                this.sender.push(JSON.parse(array));
            }
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            var tempDate = yyyy + '/' + mm + '/' + dd;
            this.sender.push(tempDate);
            this.sender.push(user);
            this.sender.push(localStorage.getItem("user"));
            this.sender.push(localStorage.getItem("evalID"));
            this.sender.push(localStorage.getItem("class"));
            this.sender.push(this.group);
            var test = 0;
            //while (this.sender[test]!=null){
            //   console.log(this.sender[test]);
            //   test++;
            //  }
            console.log(JSON.stringify(this.sender));
            this.http.post('http://localhost/untitledfolder/PeerEnter.php', JSON.stringify(this.sender))
                .subscribe(function (res) { return _this.data = res.json(); });
            console.log(this.data);
            while (this.sender[0] != null) {
                this.sender.pop();
            }
        }
        while (this.sender[0] != null) {
            this.sender.pop();
        }
        alert("Peer Evaluation successfully submitted");
        this.form.reset();
        document.location.href = "/userhome";
    };
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], PeertakeComponent.prototype, "model", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], PeertakeComponent.prototype, "users", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], PeertakeComponent.prototype, "group", void 0);
    PeertakeComponent = __decorate([
        Component({
            selector: 'app-peertake',
            templateUrl: './peertake.component.html',
            styleUrls: ['./peertake.component.css']
        }), 
        __metadata('design:paramtypes', [Http])
    ], PeertakeComponent);
    return PeertakeComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/peertake/peertake.component.js.map
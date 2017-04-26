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
import { ZeroSum } from "../../QuestionTextbox";
import { QuestionModel } from "../QuestionModel";
import { Http } from "@angular/http";
export var SurveyDemoComponent = (function () {
    function SurveyDemoComponent(http) {
        var _this = this;
        this.http = http;
        this.questionModel = new QuestionModel();
        this.currClass = localStorage.getItem("class");
        this.group = localStorage.getItem("group");
        this.list = [this.group, this.currClass];
        this.http.post('http://localhost/untitledfolder/getGroups.php', JSON.stringify(this.list))
            .subscribe(function (res) { return _this.users = res.json(); });
        console.log(this.users);
        var question;
        question = new ZeroSum;
        question.key = 'zerosum';
        question.text = 'Divide Points between Team Members according to contribution but the total must equal 100 X the number of members in your team';
        question.type = 'textbox';
        question.order = 3;
        this.questionModel.questions.push(question);
        /*
         let ddQuestion = new DropDownQuestion();
         ddQuestion.key = 'country';
         ddQuestion.text = 'Country';
         ddQuestion.options.push({key:'usa',value:'USA'});
         ddQuestion.options.push({key:'germany',value:'Germany'});
         ddQuestion.options.push({key:'canada',value:'Canada'});
         ddQuestion.options.push({key:'australia',value:'Australia'});
         ddQuestion.order = 4;
         this.questionModel.questions.push(ddQuestion);
        
            question.key = 'lastName';
            question.text = 'Last name';
            question.required = true;
            question.order = 2;
            this.questionModel.questions.push(question);
        
            question = new TextboxQuestion();
            question.key = 'firstName';
            question.text = 'First name';
            question.required = true;
            question.order = 1;
            this.questionModel.questions.push(question);
        
            question = new TextboxQuestion();
            question.key = 'emailAddress';
            question.text = 'Email';
            question.required = false;
            question.type = 'email';
            question.order = 3;
            this.questionModel.questions.push(question);
        
            let ddQuestion = new DropDownQuestion();
            ddQuestion.key = 'country';
            ddQuestion.text = 'Country';
            ddQuestion.options.push({key:'usa',value:'USA'});
            ddQuestion.options.push({key:'germany',value:'Germany'});
            ddQuestion.options.push({key:'canada',value:'Canada'});
            ddQuestion.options.push({key:'australia',value:'Australia'});
            ddQuestion.order = 4;
            this.questionModel.questions.push(ddQuestion);
        */
        this.questionModel.questions.sort(function (a, b) { return a.order - b.order; });
    }
    SurveyDemoComponent = __decorate([
        Component({
            selector: 'app-survey-demo',
            templateUrl: './survey-demo.component.html',
            styleUrls: ['./survey-demo.component.css']
        }), 
        __metadata('design:paramtypes', [Http])
    ], SurveyDemoComponent);
    return SurveyDemoComponent;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/survey-demo/survey-demo.component.js.map
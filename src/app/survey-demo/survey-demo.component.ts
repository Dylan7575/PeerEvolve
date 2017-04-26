import { Component, OnInit } from '@angular/core';
import {DropDownQuestion, TextboxQuestion, ZeroSum} from "../../QuestionTextbox";
import {QuestionModel} from "../QuestionModel";
import {Http} from "@angular/http";

@Component({
  selector: 'app-survey-demo',
  templateUrl: './survey-demo.component.html',
  styleUrls: ['./survey-demo.component.css']
})
export class SurveyDemoComponent  {
  questionModel = new QuestionModel();
  currClass=localStorage.getItem("class");
  group=localStorage.getItem("group");
  list:string[]=[this.group,this.currClass];
  data;
  private users;//=['lwr22','dcl75'];
  constructor(private http:Http){
    this.http.post('http://localhost/untitledfolder/getGroups.php',JSON.stringify(this.list))
        .subscribe(res=>this.users=res.json());
    console.log(this.users);
    let question;

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
    this.questionModel.questions.sort((a,b) => a.order - b.order);
  }

}
import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {QuestionService} from "../question-service.service";

@Component({
  selector: 'app-peertake',
  templateUrl: './peertake.component.html',
  styleUrls: ['./peertake.component.css']
})
export class PeertakeComponent implements OnInit {
  private classs = localStorage.getItem("class");
  private data;
  private questions;

  constructor(public http:Http) {}

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.http.post('http://localhost/untitledfolder/enterVal.php',JSON.stringify(localStorage.getItem("class")))
        .subscribe(res=>this.data=res.json());
    this.http.post('http://localhost/untitledfolder/questions.php',JSON.stringify(this.classs))
        .subscribe(res=>this.questions=res.json());
  }

}

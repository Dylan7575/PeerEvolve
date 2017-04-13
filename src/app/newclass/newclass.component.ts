import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Http} from "@angular/http";

@Component({
  selector: 'app-newclass',
  templateUrl: './newclass.component.html',
  styleUrls: ['./newclass.component.css']
})
export class NewclassComponent implements OnInit {
  private data;
  private temp=true;
  constructor(private http:Http, public fb: FormBuilder) { }

  ngOnInit() {
  }

  public classEnter = this.fb.group({
    Semester : ["", Validators.compose([Validators.required,Validators.minLength(1)])],
    CourseID : ["", Validators.compose([Validators.required,Validators.minLength(1)])],
  });

  doLogin(event){
    this.temp = false;
    console.log(this.classEnter.value);
    let b=this.classEnter.value;
    let Semester = b['Semester'];
    let CourseID = b['CourseID'];
    let list: string[] = [Semester,CourseID];


    this.http.post('http://localhost/untitledfolder/InsertCourse.php',JSON.stringify(list))
        .subscribe(res=>this.data=res.json());
    //console.log(JSON.stringify(list));


  }


}

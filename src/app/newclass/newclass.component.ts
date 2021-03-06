import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {EventEmitter} from "@angular/common/src/facade/async";

@Component({
  selector: 'app-newclass',
  templateUrl: './newclass.component.html',
  styleUrls: ['./newclass.component.css']
})
export class NewclassComponent implements OnInit {
  private data;
  private temp=true;
  constructor(private http:Http, public fb: FormBuilder,public router:Router) { }
  @Output() test = new EventEmitter();

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
    let list: string[] = [Semester,CourseID,localStorage.getItem("user")];


    this.http.post('http://localhost/untitledfolder/InsertCourse.php',JSON.stringify(list))
        .subscribe(res=>this.data=res.json());
    //console.log(JSON.stringify(list));
    this.test.emit(false);


  }


}

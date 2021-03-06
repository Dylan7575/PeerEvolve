import {Component, OnInit, Output, Input} from '@angular/core';
import {Validators, FormBuilder} from "@angular/forms";
import {Http} from "@angular/http";
import {EventEmitter} from "@angular/common/src/facade/async";
import {SelectModule} from 'ng2-select'
import {errorHandler} from "@angular/platform-browser/src/browser";
import {ifError} from "assert";


@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.css']
})
export class SingleStudentComponent implements OnInit {
  private data;
  private classID= localStorage.getItem("class");
  private options;
  private fail = localStorage.getItem("class");
  private bool = false;
  @Output() test = new EventEmitter();
  @Input() currClass:any;
  public studentEnter = this.fb.group({
    StudentID : ["", Validators.compose([Validators.required])],
    Group : ["", Validators.compose([Validators.required])],
  });
  constructor(private http:Http, public fb: FormBuilder) {

  }

  ngOnInit() {
    this.http.post('http://localhost/untitledfolder/getCourseGroups.php',JSON.stringify(this.classID))
        .subscribe(res=>this.options=res.json());

  }
  changeStatus(event){
    document.getElementsByTagName("option")[0].disabled=true;


  }
  doLogin($event){
    let b=this.studentEnter.value;
    let cd = b['StudentID'];
    let od = b['Group2'];
    let dd= localStorage.getItem("class");
    let list: string[] = [cd,od,dd];

    this.http.post('http://localhost/untitledfolder/singleStudent.php',JSON.stringify(list))
        .subscribe(res=>this.data=res.json());
    this.studentEnter.reset();
    this.test.emit(false);


  }

}

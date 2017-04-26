import {Component, OnInit, Output, OnChanges, ChangeDetectorRef} from '@angular/core';
import {Http} from "@angular/http";
import {FileUploader} from "ng2-file-upload";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit,OnChanges {
  private data;
  private classID =localStorage.getItem("class");
  private showing = false;

  constructor(private ref: ChangeDetectorRef,public http:Http) {

    setInterval(() => {
      this.ref.detectChanges();
      this.getData();
    }, 1000);
  }
  ngOnChanges(){
    this.getData();
  }
  ngOnInit() {
    this.getData();
  }
  getData(){
    this.http.post('http://localhost/untitledfolder/GetStudents.php',JSON.stringify(this.classID))
        .subscribe(res=>this.data=res.json());
  }
  show(){
    this.showing=true;
  }
  change(event){
    this.showing=event;
  }
  saveID(studentID,GroupID){
    localStorage.setItem("student",studentID);
    localStorage.setItem("group",GroupID);
  }


}

import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  private data;
  private classID =localStorage.getItem("class");
  constructor(public http:Http) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.http.post('http://localhost/untitledfolder/GetStudents.php',JSON.stringify(this.classID))
        .subscribe(res=>this.data=res.json());
  }
}

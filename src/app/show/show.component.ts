import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  private data;
  private classID = localStorage.getItem("class");
  private showing = false;

  constructor(private ref: ChangeDetectorRef, public http: Http) {

    setInterval(() => {
      this.ref.detectChanges();
      this.getData();
    }, 1000);
  }

  ngOnChanges() {
    this.getData();
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.post('http://localhost/untitledfolder/getCourseGroups.php', JSON.stringify(this.classID))
        .subscribe(res => this.data = res.json());
  }

  show() {
    this.showing = true;
  }

  change(event) {
    this.showing = event;
  }

  saveID(studentID, GroupID) {
    localStorage.setItem("student", studentID);
    localStorage.setItem("group", GroupID);
  }
}

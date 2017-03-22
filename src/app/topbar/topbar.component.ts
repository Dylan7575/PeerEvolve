import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  fullImagePath: String;
  private user = localStorage.getItem("user");
  constructor() {
    this.fullImagePath='./assets/face.png'
  }

  ngOnInit() {
  }

}

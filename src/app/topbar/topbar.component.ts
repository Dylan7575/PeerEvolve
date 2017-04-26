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
  private class= localStorage.getItem("class");

  isCollapsed = true;
  constructor() {
    this.fullImagePath='./assets/face.png'
  }

  ngOnInit() {
  }
  public get menuIcon():string{
    return this.isCollapsed ? '☰' : '✖';
  }
}

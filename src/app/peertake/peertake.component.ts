import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-peertake',
  templateUrl: './peertake.component.html',
  styleUrls: ['./peertake.component.css']
})
export class PeertakeComponent implements OnInit {
  private class = localStorage.getItem("class");
  private data;
  constructor(public http:Http) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.http.post('http://localhost/untitledfolder/enterVal.php',JSON.stringify(localStorage.getItem("class")))
        .subscribe(res=>this.data=res.json());
  }

}

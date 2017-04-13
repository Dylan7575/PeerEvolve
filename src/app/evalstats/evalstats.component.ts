import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import{Angular2Csv} from 'angular2-csv/Angular2-csv'


@Component({
  selector: 'app-evalstats',
  templateUrl: './evalstats.component.html',
  styleUrls: ['./evalstats.component.css']
})
export class EvalstatsComponent implements OnInit {
  private data;
  private evalid=localStorage.getItem("evalID");
  constructor(public http:Http) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.http.post('http://localhost/untitledfolder/EvalStats.php',JSON.stringify(localStorage.getItem("class")))
        .subscribe(res=>this.data=res.json());


  }
  downloadFile(){
    let blob= new Angular2Csv(this.data,"MyReport");
    let url = window.URL.createObjectURL(blob);
    window.open(url);
  }

}

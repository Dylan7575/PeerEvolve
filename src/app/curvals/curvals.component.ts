import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-curvals',
  templateUrl: './curvals.component.html',
  styleUrls: ['./curvals.component.css']
})
export class CurvalsComponent implements OnInit {
  public data;
  public users =[{openDate:"2015-11-23",closeDate:"2015-11-25"},
    {openDate:"2015-11-21"}];
  constructor(public http:Http) { }

  ngOnInit() {
    this.http.post('http://localhost/untitledfolder/GetVals.php',JSON.stringify(localStorage.getItem('class')))
        .subscribe(res=>this.data=res.json());
    console.log(this.data);
  }

}

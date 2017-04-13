import {Component, OnInit, OnChanges, DoCheck, AfterContentInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-curvals',
  templateUrl: './curvals.component.html',
  styleUrls: ['./curvals.component.css']
})
export class CurvalsComponent implements OnInit {
  public data;

  constructor(public http:Http) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.http.post('http://localhost/untitledfolder/GetVals.php',JSON.stringify(localStorage.getItem("class")))
        .subscribe(res=>this.data=res.json());
    console.log(JSON.stringify(this.data));
  }
  public  saveID(toStore){
    localStorage.setItem("evalID",toStore);
  }

}

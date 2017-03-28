import { Component, OnInit } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {ajaxGet} from "rxjs/observable/dom/AjaxObservable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private data;
  headers =new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });
  constructor(private http:Http) {}
  ngOnInit() {
    this.getData();

  }
  getData(){
    this.http.post('http://localhost/untitledfolder/GetClasses.php',JSON.stringify("dcl75")).
        subscribe(res=>this.data=res.json());
        console.log(this.data);
  }
  /*
  getData(){
    this.http.post('http://localhost/untitledfolder/admin.php',JSON.stringify(this.data))
        .subscribe(res=>this.data=res.json());

  }*/

}

import {Component, OnInit} from '@angular/core';
import {Response, Http} from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private data;
  constructor(private http:Http){}

  title = 'app works!';

  ngOnInit(){
    this.getData();
  }
  getData(){
    this.data=localStorage.getItem('class');

  }
}

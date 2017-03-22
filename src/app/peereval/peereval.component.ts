import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-peereval',
  templateUrl: './peereval.component.html',
  styleUrls: ['./peereval.component.css']
})
export class PeerevalComponent implements OnInit {

  constructor(private http:Http) { }
  private data;
  ngOnInit() {
    this.getData();
  }
  getData(){
    this.http.post('http://localhost/untitledfolder/createPeer.php',JSON.stringify(this.data))
        .subscribe(res=>this.data=res.json());
  }

}

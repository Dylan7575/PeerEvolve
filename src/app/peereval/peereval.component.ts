import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Validators, FormBuilder,FormControl,FormGroup} from "@angular/forms";
import {isBoolean} from "util";

@Component({
  selector: 'app-peereval',
  templateUrl: './peereval.component.html',
  styleUrls: ['./peereval.component.css']
})
export class PeerevalComponent implements OnInit {
  private data;
  private temp=true;
  constructor(private http:Http, public fb: FormBuilder) { }

  ngOnInit() {
  }

  public peerEnter = this.fb.group({
    CD : ["", Validators.compose([Validators.required,Validators.pattern('2{1}[0-9][0-9][0-9]\-(0[1-9]|1[012])\-(0[1-9]|1[1-9]|2[1-9]|3[0-1])')])],
    OD : ["", Validators.compose([Validators.required,Validators.pattern('2{1}[0-9][0-9][0-9]\-(0[1-9]|1[012])\-(0[1-9]|1[1-9]|2[1-9]|3[0-1])')])],
    DD : ["", Validators.compose([Validators.required,Validators.pattern('2{1}[0-9][0-9][0-9]\-(0[1-9]|1[012])\-(0[1-9]|1[1-9]|2[1-9]|3[0-1])')])]
  });

  doLogin(event){

    this.temp = false;
    console.log(this.peerEnter.value);
    let b=this.peerEnter.value;
    let cd = b['CD'];
    let od = b['OD'];
    let dd= b['DD'];
    let list: string[] = [od,dd,cd,localStorage.getItem("user"),localStorage.getItem("class")];


      this.http.post('http://localhost/untitledfolder/IP.php',JSON.stringify(list))
          .subscribe(res=>this.data=res.json());
      //console.log(JSON.stringify(list));
      console.log(this.data);
      this.peerEnter.reset();


  }


}

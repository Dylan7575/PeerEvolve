import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Validators, FormBuilder,FormControl,FormGroup} from "@angular/forms";
import {isBoolean} from "util";
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {DatePickerModule, DateModel, DatePickerOptions} from 'ng2-datepicker'
import {Router} from "@angular/router";
@Component({
  selector: 'app-peereval',
  templateUrl: './peereval.component.html',
  styleUrls: ['./peereval.component.css']
})
export class PeerevalComponent implements OnInit {
  date:DateModel;
  date1:DateModel;
  date2:DateModel;
  options: DatePickerOptions;
  private model;
  private data;
  private temp=true;
  constructor(private http:Http, public fb: FormBuilder,public router:Router) {
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
  }

  public peerEnter = this.fb.group({
    CD : ["", Validators.compose([Validators.required])],
    OD : ["", Validators.compose([Validators.required])],
    DD : ["", Validators.compose([Validators.required])]
  });

  doLogin(event){
    this.temp = false;

    let cd = this.date1.formatted;
    let od=this.date.formatted;
    let dd= this.date2.formatted;
    let list: string[] = [od,dd,cd,localStorage.getItem("user"),localStorage.getItem("class")];


      this.http.post('http://localhost/untitledfolder/IP.php',JSON.stringify(list))
          .subscribe(res=>this.data=res.json());
      //console.log(JSON.stringify(list));
      //console.log(this.data);
      this.peerEnter.reset();
      alert("Evaluation successfully created");
      this.router.navigateByUrl("curvals");


  }


}

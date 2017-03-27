import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Validators, FormBuilder,FormControl,FormGroup} from "@angular/forms";

@Component({
  selector: 'app-peereval',
  templateUrl: './peereval.component.html',
  styleUrls: ['./peereval.component.css']
})
export class PeerevalComponent implements OnInit {
  private data;
  private error= true;
  constructor(private http:Http, public fb: FormBuilder) { }
  ngOnInit() {
  }
  public loginForm = this.fb.group({
    CD : [" ", this.magic],
    OD : [" ", this.magic],
    DD : [" ", this.magic]
  });

  doLogin(event){


    console.log(this.loginForm.value);
    let b=this.loginForm.value;
    let cd = b['CD'];
    let od = b['OD'];
    let dd= b['DD'];
    let list: string[] = [od,dd,cd];


      this.http.post('http://localhost/untitledfolder/IP.php',JSON.stringify(list))
          .subscribe(res=>this.data=res.json());
      //console.log(JSON.stringify(list));
      console.log(this.data);

    
  }


  magic(c:FormControl) {
    let regexp = new RegExp('2{1}[0-9][0-9][0-9]\-(0[1-9]|1[012])\-(0[1-9]|1[1-9]|2[1-9]|3[0-1])');
    if(regexp.test(c.value)){
      this.error=false;
      console.log("valid");
    }
    else
      this.error=c.value;
      console.log("not valid");

  }
}

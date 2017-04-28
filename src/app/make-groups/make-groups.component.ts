import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Http} from "@angular/http";

@Component({
  selector: 'app-make-groups',
  templateUrl: './make-groups.component.html',
  styleUrls: ['./make-groups.component.css']
})
export class MakeGroupsComponent implements OnInit {
  private data;
  constructor(public fb: FormBuilder,public http:Http) { }
  @Input() currClass:any;
  private yes = "fdsaf";
  ngOnInit() {
  }
  public groupEnter = this.fb.group({
    Group : ["", Validators.compose([Validators.required])],
  });
  doLogin(){
    let b=this.groupEnter.value;
    let Group = b['Group'];
    let list: string[] = [Group,localStorage.getItem("class")];
    this.http.post('http://localhost/untitledfolder/InsertGroup.php',JSON.stringify(list))
        .subscribe(res=>this.data=res.json());
    alert("Group successfully created");
  }

}

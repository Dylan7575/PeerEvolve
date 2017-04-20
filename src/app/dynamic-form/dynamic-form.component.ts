import {Component, OnInit, Input} from '@angular/core';
import {QuestionBase} from "../QuestionBase";

import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  constructor() {  }
  ngOnInit() {

  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
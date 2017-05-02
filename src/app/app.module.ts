import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule, NgSelectOption} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import { PeerevalComponent } from './peereval/peereval.component';


import {AuthService} from "./auth.service";
import { TopbarComponent } from './topbar/topbar.component';
import{NgbModule, NgbDropdown} from '@ng-bootstrap/ng-bootstrap';
import { StudentsComponent } from './students/students.component'
import {AdminGuard} from "./admin.guard";
import { UserhomeComponent } from './userhome/userhome.component';
import { CurvalsComponent } from './curvals/curvals.component';
import { EvalstatsComponent } from './evalstats/evalstats.component';
import { NewclassComponent } from './newclass/newclass.component';
import { UploadcsvComponent } from './uploadcsv/uploadcsv.component';
import {AlertModule, DatePickerComponent} from "ng2-bootstrap";
import { UploadComponent } from './upload/upload.component';
import {Ng2UploaderModule} from 'ng2-uploader';
import { PeertakeComponent } from './peertake/peertake.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { SurveyDemoComponent } from './survey-demo/survey-demo.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import {DatePickerModule} from "ng2-datepicker";
import { DoerBarComponent } from './doer-bar/doer-bar.component';
import { MakeGroupsComponent } from './make-groups/make-groups.component';
import { ShowComponent } from './show/show.component';
import {SelectModule} from "ng2-select";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeerevalComponent,
    TopbarComponent,
    StudentsComponent,
    UserhomeComponent,
    CurvalsComponent,
    EvalstatsComponent,
    NewclassComponent,
    UploadcsvComponent,
    UploadComponent,
    PeertakeComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    SurveyDemoComponent,
    SingleStudentComponent,
    EditStudentComponent,
    DoerBarComponent,
    MakeGroupsComponent,
    ShowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AlertModule.forRoot(),
    Ng2UploaderModule,
    SelectModule,
    JsonpModule,
    DatePickerModule,
    RouterModule.forRoot([
      {path: '',redirectTo: 'home',pathMatch:'full' ,canActivate: [AdminGuard]},
      {path: 'curvals/peereval', component:PeerevalComponent, canActivate: [AdminGuard]},
      {path: 'home', component:HomeComponent,canActivate:[AdminGuard]},
      {path: 'students', component:StudentsComponent,canActivate:[AdminGuard]},
      {path: 'curvals', component:CurvalsComponent,canActivate:[AdminGuard]},
      {path: 'curvals/evalstats', component:EvalstatsComponent,canActivate:[AdminGuard]},
      {path: 'home/newclass',component:NewclassComponent,canActivate:[AdminGuard]},
      {path: 'students/uploadcsv',component:UploadcsvComponent,canActivate:[AdminGuard]},
      {path: 'userhome',component:UserhomeComponent,canActivate:[AuthService]},
      {path: 'userhome/survey',component:SurveyDemoComponent,canActivate:[AuthService]},
      {path: 'students/editstudents',component:EditStudentComponent,canActivate:[AuthService]},
      {path: 'groups',component:ShowComponent,canActivate:[AdminGuard]}



      ])
  ],
  providers: [AuthService,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

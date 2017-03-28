import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import { PeerevalComponent } from './peereval/peereval.component';


import {AuthService} from "./auth.service";
import { TopbarComponent } from './topbar/topbar.component';
import{ NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentsComponent } from './students/students.component'
import {AdminGuard} from "./admin.guard";
import { UserhomeComponent } from './userhome/userhome.component';
import { CurvalsComponent } from './curvals/curvals.component';
import { EvalstatsComponent } from './evalstats/evalstats.component';
import { NewclassComponent } from './newclass/newclass.component';


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

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component:HomeComponent, canActivate:[AdminGuard]},
      {path: 'peereval', component:PeerevalComponent, canActivate: [AdminGuard]},
      {path: 'home', component:HomeComponent,canActivate:[AdminGuard]},
      {path: 'students', component:StudentsComponent,canActivate:[AdminGuard]},
      {path: 'curvals', component:CurvalsComponent,canActivate:[AdminGuard]},
      {path: 'evalstats', component:EvalstatsComponent},
      {path: 'newclass',component:NewclassComponent}
      ])
  ],
  providers: [AuthService,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import { PeerevalComponent } from './peereval/peereval.component';

import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";
import { TopbarComponent } from './topbar/topbar.component';
import{ NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentsComponent } from './students/students.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeerevalComponent,
    TopbarComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path: 'peereval', component:PeerevalComponent, canActivate: [AuthService]},
      {path: 'home', component:HomeComponent},
      {path: 'students', component:StudentsComponent},
      ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

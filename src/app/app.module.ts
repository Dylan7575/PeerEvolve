import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeerevalComponent,
    TopbarComponent,
    StudentsComponent,
    UserhomeComponent,
    CurvalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component:UserhomeComponent},
      {path:'', component:HomeComponent, canActivate:[AdminGuard]},
      {path: 'peereval', component:PeerevalComponent, canActivate: [AdminGuard]},
      {path: 'home', component:HomeComponent,canActivate:[AdminGuard]},
      {path: 'students', component:StudentsComponent,canActivate:[AdminGuard]},
      {path: 'curvals', component:CurvalsComponent,canActivate:[AdminGuard]},
      ])
  ],
  providers: [AuthService,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

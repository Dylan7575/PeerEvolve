import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import { PeerevalComponent } from './peereval/peereval.component';
import { ClassesComponent } from './classes/classes.component';
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeerevalComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path: 'classes', component: ClassesComponent},
      {path: 'peereval', component:PeerevalComponent, canActivate: [AuthService]}
      ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

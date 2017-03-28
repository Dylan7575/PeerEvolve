var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from "@angular/router";
import { PeerevalComponent } from './peereval/peereval.component';
import { AuthService } from "./auth.service";
import { TopbarComponent } from './topbar/topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentsComponent } from './students/students.component';
import { AdminGuard } from "./admin.guard";
import { UserhomeComponent } from './userhome/userhome.component';
import { CurvalsComponent } from './curvals/curvals.component';
import { EvalstatsComponent } from './evalstats/evalstats.component';
import { NewclassComponent } from './newclass/newclass.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                    { path: '', component: HomeComponent, canActivate: [AdminGuard] },
                    { path: 'peereval', component: PeerevalComponent, canActivate: [AdminGuard] },
                    { path: 'home', component: HomeComponent, canActivate: [AdminGuard] },
                    { path: 'students', component: StudentsComponent, canActivate: [AdminGuard] },
                    { path: 'curvals', component: CurvalsComponent, canActivate: [AdminGuard] },
                    { path: 'evalstats', component: EvalstatsComponent },
                    { path: 'newclass', component: NewclassComponent }
                ])
            ],
            providers: [AuthService, AdminGuard],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/app/app.module.js.map
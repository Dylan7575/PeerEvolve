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
import { UploadcsvComponent } from './uploadcsv/uploadcsv.component';
import { AlertModule } from "ng2-bootstrap";
import { UploadComponent } from './upload/upload.component';
import { Ng2UploaderModule } from 'ng2-uploader';
import { PeertakeComponent } from './peertake/peertake.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { SurveyDemoComponent } from './survey-demo/survey-demo.component';
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
                UploadcsvComponent,
                UploadComponent,
                PeertakeComponent,
                DynamicFormComponent,
                DynamicFormQuestionComponent,
                SurveyDemoComponent,
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                ReactiveFormsModule,
                NgbModule.forRoot(),
                AlertModule.forRoot(),
                Ng2UploaderModule,
                RouterModule.forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'curvals/peereval', component: PeerevalComponent, canActivate: [AdminGuard] },
                    { path: 'home', component: HomeComponent, canActivate: [AdminGuard] },
                    { path: 'students', component: StudentsComponent, canActivate: [AdminGuard] },
                    { path: 'curvals', component: CurvalsComponent, canActivate: [AdminGuard] },
                    { path: 'curvals/evalstats', component: EvalstatsComponent },
                    { path: 'home/newclass', component: NewclassComponent },
                    { path: 'students/uploadcsv', component: UploadcsvComponent },
                    { path: 'userhome', component: UserhomeComponent },
                    { path: 'userhome/peertake', component: PeertakeComponent },
                    { path: 'survey', component: SurveyDemoComponent }
                ])
            ],
            providers: [AuthService, AdminGuard],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/dylanlafrenz/Documents/PeerEvolve/src/src/app/app.module.js.map
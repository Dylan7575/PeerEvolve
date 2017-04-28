/**
 * Created by dylanlafrenz on 3/5/17.
 */
import { Injectable } from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import { Observable } from "rxjs/Rx";
import {Http} from "@angular/http";


@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private http:Http,private router : Router ){}
    private data;

    canActivate() {
        this.http.post('http://localhost/untitledfolder/getUserName.php',JSON.stringify(this.data))
            .subscribe(res=>this.data=res.json());
        localStorage.setItem("user","dcl75");
        if(localStorage.getItem("user")==null){
           // window.location.href="http://localhost/untitledfolder/index.html";
            //return false;
        }
        let user = localStorage.getItem("user");
        this.http.post('http://localhost/untitledfolder/admin.php',JSON.stringify(this.data))
            .subscribe(res=>this.data=res.json());
        if (this.data === "admin"){
            localStorage.setItem("admin","true");
            return true;
        }
        return true;
    }
}

/**
 * Created by dylanlafrenz on 3/5/17.
 */
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";
import {Http} from "@angular/http";


@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private http:Http){}
    private data;
    canActivate() {
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

/**
 * Created by dylanlafrenz on 3/5/17.
 */
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";


@Injectable()
export class AuthGuard implements CanActivate {
    canActivate() {
        return true;
    }
}

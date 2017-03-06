import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot,State:RouterStateSnapshot):boolean {

    return true;
  }

}

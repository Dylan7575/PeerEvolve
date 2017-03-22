import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
@Injectable()
export class AuthService implements CanActivate {
  constructor(private http:Http){}
  private data;
  canActivate(route: ActivatedRouteSnapshot,State:RouterStateSnapshot):boolean {
    let user = localStorage.getItem("user");
    this.http.post('http://localhost/',JSON.stringify(user))
        .subscribe(res=>this.data=res.json());
    if (this.data != "auth"){
      return true;
    }
  }

}

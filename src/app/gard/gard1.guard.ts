import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TimepaseService } from '../service/timepase.service';

@Injectable({
  providedIn: 'root'
})
export class Gard1Guard implements CanActivate {
  constructor(private ser:TimepaseService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
let f = this.ser.isLogin()
if(!f){
  this.router.navigate(['/home'])
}
    return f;
  }
  
}

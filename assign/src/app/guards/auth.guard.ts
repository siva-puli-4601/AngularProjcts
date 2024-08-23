import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements Resolve<any> {
  constructor(private ser:DataService){}
  resolve (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.ser.resData();
  }
  
}

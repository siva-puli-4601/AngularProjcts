import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private route:Router) {}
   value=false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.value;
  }
   login(username: string,password: string)
   {
     if(username==="siva" && password==="siva")
     {
      this.value=true;
     }
     else
     {
       this.route.navigate(['/']);
     }
   }
}

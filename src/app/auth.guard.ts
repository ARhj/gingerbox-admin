import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApisService } from './apis.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private _authService : ApisService , private _router : Router){}

  canActivate() :  boolean {
    if(this._authService.loggedIn()){
      return true;
    }else{
      this._router.navigate(['/']);
      return false;
    }
  }
  
}

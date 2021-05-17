import { Injectable  , Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ApisService } from './apis.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector : Injector) { }

  intercept(req : any,next : any){
   let http = this.injector.get(ApisService);
   let tokenizedReq = req.clone({
     setHeaders : {
       Authorization :  `Bearer ${http.getToken()}`
     }
   })
   return next.handle(tokenizedReq)
  }
}

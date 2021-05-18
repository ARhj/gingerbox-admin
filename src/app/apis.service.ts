import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageService } from './services/storage.service';
import { Observable,Subject, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

constructor(private http : HttpClient ,private storage : StorageService,private router : Router) { }

private updateToken(response : any): void{

}

private updateRequestOptionsArgs(hasBody : boolean, isMethodOverride : boolean, options: any = {}):{observe : 'response'} {
  let _options = options || {};
  _options.observe= 'response';

  if(!_options.headers)
    _options.headers = new HttpHeaders();

  if(hasBody && !_options.headers.get('Content-Type')){
    _options.headers = _options.headers.set('Content-Type','application/json');
  }

  //Forced browsers to not cache GET  response
  if(!hasBody){
    _options.headers.set('Cache-Control','no-cache');
    _options.headers.set('Pragma','no-cache');
  }

  _options.headers = _options.headers.set('X-Requested-With','XMLHttpRequest');

  if(isMethodOverride)
    _options.headers = _options.headers.set('X-HTTP-Method-Override','GET');

  return _options;
}

public getEndPoint<T>(url: string,options : any = {}): Observable<HttpResponse<T>>{
  return this.http.get<T>(url,this.updateRequestOptionsArgs(true,false,options)).pipe(
    tap(response => { 
        this.updateToken(response);
      }),
    catchError(response => {
          return throwError(response);
        })
    ); 
}

public postEndPoint<T>(url: string,body: any,options : any = {}): Observable<HttpResponse<T>>{
  return this.http.post<T>(url,body,this.updateRequestOptionsArgs(true,false,options)).pipe(
    tap(response => { 
        this.updateToken(response);
      }),
    catchError(response => {
          return throwError(response);
        })
    ); 
}

public putEndPoint<T>(url: string,body: any,options : any = {}): Observable<HttpResponse<T>>{
  return this.http.put<T>(url,body,this.updateRequestOptionsArgs(true,false,options)).pipe(
    tap(response => { 
        this.updateToken(response);
      }),
    catchError(response => {
          return throwError(response);
        })
    ); 
}

public patchEndPoint<T>(url: string,body: any,options : any = {}): Observable<HttpResponse<T>>{
  return this.http.patch<T>(url,body,this.updateRequestOptionsArgs(true,false,options)).pipe(
    tap(response => { 
        this.updateToken(response);
      }),
    catchError(response => {
          return throwError(response);
        })
    ); 
}

public deleteEndPoint<T>(url: string,options : any = {}): Observable<HttpResponse<T>>{
  return this.http.delete<T>(url,this.updateRequestOptionsArgs(true,false,options)).pipe(
    tap(response => { 
        this.updateToken(response);
      }),
    catchError(response => {
          return throwError(response);
        })
    ); 
}
  // ===========================auth serveice checking ==================================
loggedIn(){
  return !!localStorage.getItem('token');
}
// =================================tokenINPECTOR=================================
  getToken(){
    return localStorage.getItem('token')
  }

  // ================================login Api =====================================
  

  // ===============================logout localstroge logic =======================
  logoutuser(){

    localStorage.removeItem('token');
    localStorage.removeItem('userdetails');
    localStorage.removeItem('refreshtoken');
    this.router.navigate(['/']);
  }

// ===========================Profile api ==============================================
profileupdate(profiledata :any){
  console.log(profiledata)
  let url = environment.svc + "/en/v1/organization/3/profile";
  return this.http.post(url,profiledata);

}

profilesend(id : any){
   let url = environment.svc + "/en/v1/organization/3/profile/"+id+"/send";
   return this.http.post(url,null);
}

// ============================add client api==========================================

addclient(data : any){
  let url = environment.svc + "/en/v1/organization";
  return this.http.post(url,data);
}

// ============================ Organization api =====================================
selectclient(){
  let url = environment.svc + "/en/v1/organization";
  return this.http.get(url);
}

}
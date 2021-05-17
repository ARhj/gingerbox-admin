import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http : HttpClient , private router : Router) { }
  // ===========================auth serveice checking ==================================
loggedIn(){
  return !!localStorage.getItem('token');
}
// =================================tokenINPECTOR=================================
  getToken(){
    return localStorage.getItem('token')
  }

  // ================================login Api =====================================
  userlogin(loginvalue : any){

    let url = "https://kswd.gingerbox.in/api/en/v1/auth";

    let logindetail = {
      userEmail : loginvalue.username,
      password : btoa(loginvalue.password),
    }
  
    return this.http.post(url,logindetail);
               
  }

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
  let url = "https://kswd.gingerbox.in/api/en/v1/organization/3/profile";
  return this.http.post(url,profiledata);

}

profilesend(id : any){
   let url = "https://kswd.gingerbox.in/api/en/v1/organization/3/profile/"+id+"/send";
   return this.http.post(url,null);
}

// ============================add client api==========================================

addclient(data : any){
  let url = "https://kswd.gingerbox.in/api/en/v1/organization";
  return this.http.post(url,data);
}

// ============================ Organization api =====================================
selectclient(){
  let url = "https://kswd.gingerbox.in/api/en/v1/organization";
  return this.http.get(url);
}

}

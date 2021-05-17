import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ApisService } from '../../apis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // inputs fields of loginpage
  logindetails =new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  constructor(private router : Router , private url : ApisService) { }

  ngOnInit(): void {
  }
  // variavle decleration
   emptyspace : any = false;
   loginstatus : any = false;
   logindata : any = {};

  //validation declartion function
  get username(){ return this.logindetails.get('username')}
  get password(){ return this.logindetails.get('password')}

  // logical function declartion
  checklogin(){
    if(this.logindetails.value.username == "" || this.logindetails.value.password == ""){
       this.emptyspace = true;
    }
    else {
     
      this.url.userlogin(this.logindetails.value).subscribe(data=>{
      //  console.log(data,"data")
       localStorage.setItem('userdetails',JSON.stringify(data));
       var logiedinuserdata = JSON.parse(localStorage.getItem('userdetails') || '{}');
      //  console.log(logiedinuserdata.data.id); particular value access
      localStorage.setItem('token',logiedinuserdata.data.token);
      localStorage.setItem('refreshtoken',logiedinuserdata.data.refreshToken);
      this.router.navigate(['/dashbord']);
      },error=>{
        this.loginstatus = true;
        // console.log(error,"error console");
      });  
      //  console.log(btoa("Admin@123"),"QWer mein de raha h");
      // console.log(atob("QWRtaW5AMTIz"),"admin@123") 
     
    }
    
  }

}

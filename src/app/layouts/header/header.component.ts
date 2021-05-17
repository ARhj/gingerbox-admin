import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http : ApisService , private router : Router) {
    
    var alreadylogin = JSON.parse(localStorage.getItem('userdetails') || '{}');
    if(alreadylogin !== null){

      this.loginuserdata = alreadylogin.data;

      if(alreadylogin.data.roleID == 2){
      this.http.selectclient().subscribe(data=>{
        this.clientmasterdata = data;
      },error=>{console.log(error,'api error');});
      }else{console.log("roleid fail");}
      
    }else{
      this.router.navigate(['/']);
    }

  }

  ngOnInit(): void {
  }


// variable declartion
loginuserdata :any = {};
clientmasterdata :any;

// function declaration
  logout(){
    this.http.logoutuser();
  }

}

import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../apis.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  constructor(private http : ApisService , private router : Router) {

    var alreadylogin = JSON.parse(localStorage.getItem('userdetails') || '{}');
    if(alreadylogin !== null){
      this.username = alreadylogin.data.userName ;
    }else{
      this.router.navigate(['/']);
    }

   }

  ngOnInit(): void {
  }

  // variable declartion
username :any ;

}

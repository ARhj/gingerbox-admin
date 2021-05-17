import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ApisService } from '../../apis.service';


@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  // inputs fields of loginpage
addclientdata =new FormGroup({
  code : new FormControl('',Validators.required),
  name : new FormControl('',Validators.required),
  address :  new FormControl('',Validators.required),
  division :  new FormControl('',Validators.required),
  location :  new FormControl('',Validators.required),
  logo :  new FormControl('',Validators.required),
    empId : new FormControl('',Validators.required),
    userName : new FormControl('',Validators.required),
    designation : new FormControl('',Validators.required),
    userEmail : new FormControl('',Validators.required),
    userMobileNo : new FormControl('',Validators.required),
    managerId : new FormControl('0',Validators.required),
    password : new FormControl('',Validators.required),
  
});

//variable declaration
selectedfile : any = null;

  constructor(private router : Router , private url : ApisService) { }

  ngOnInit(): void {
  }

  // form validation
  get name(){ return this.addclientdata.get('name')}
  get address(){ return this.addclientdata.get('address')}
  get code(){ return this.addclientdata.get('code')}
  get division(){ return this.addclientdata.get('division')}
  get location(){ return this.addclientdata.get('location')}
  get logo(){ return this.addclientdata.get('logo')}
  get empId(){ return this.addclientdata.get('empId')}
  get userName(){ return this.addclientdata.get('userName')}
  get designation(){ return this.addclientdata.get('designation')}
  get userEmail(){ return this.addclientdata.get('userEmail')}
  get userMobileNo(){ return this.addclientdata.get('userMobileNo')}
  get password(){ return this.addclientdata.get('location')}


  // fileupload function
  onfileselected(event :any){
   this.selectedfile = <File>event.target.files[0];
   console.log(event);
  }

  //addclient details fucntion
  addclientdetails(){
    if(this.addclientdata.get('name')?.value == "" || this.addclientdata.get('address')?.value == "" ||
       this.addclientdata.get('code')?.value == "" || this.addclientdata.get('division')?.value == "" ||
       this.addclientdata.get('location')?.value == "" ||
       this.addclientdata.get('empId')?.value == "" || this.addclientdata.get('userName')?.value == "" ||
       this.addclientdata.get('designation')?.value == "" || this.addclientdata.get('userEmail')?.value == "" ||
       this.addclientdata.get('userMobileNo')?.value == "" || this.addclientdata.get('location')?.value == ""){

       alert("no empty space allowed");
       this.addclientdata.get('logo')?.setValue(this.selectedfile);
       console.log(this.addclientdata.value);

    }else{
      this.addclientdata.get('logo')?.setValue(this.selectedfile);//object of image
     this.url.addclient(this.addclientdata.value).subscribe(data=>{
      
      console.log(this.addclientdata.value);
      
       console.log(data,'addclient sucess')
     },error=>{
      console.log(this.addclientdata.value);
       console.log(error,'addclient error')
     });

    }
  }

}

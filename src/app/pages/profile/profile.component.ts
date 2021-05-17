import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ApisService } from '../../apis.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

// inputs fields of loginpage
profileinputs =new FormGroup({
  formStructureId : new FormControl('1',Validators.required),
  referenceNo : new FormControl('8',Validators.required),
  name :  new FormControl('u',Validators.required),
  dateOfBirth :  new FormControl('2021-05-11T09:06:42.397Z',Validators.required),
  mobileNo :  new FormControl('9874564654',Validators.required),
  emailID :  new FormControl('user@example.com',Validators.required),
  relativeName :  new FormControl('m',Validators.required),
  relation :  new FormControl('Father',Validators.required),
  address :  new FormControl('b',Validators.required),
  productName :  new FormControl('y',Validators.required),
  loanAmount :  new FormControl('u',Validators.required),
  profileTypeId :  new FormControl('1',Validators.required),
});

  constructor(private router : Router , private url : ApisService) { }

  ngOnInit(): void {
  }

    //validation declartion function
    get formStructureId(){ return this.profileinputs.get('formStructureId')}
    get referenceNo(){ return this.profileinputs.get('referenceNo')}
    get name(){ return this.profileinputs.get('name')}
    get dateOfBirth(){ return this.profileinputs.get('dateOfBirth')}
    get mobileNo(){ return this.profileinputs.get('mobileNo')}
    get emailID(){ return this.profileinputs.get('emailID')}
    get relativeName(){ return this.profileinputs.get('relativeName')}
    get relation(){ return this.profileinputs.get('relation')}
    get address(){ return this.profileinputs.get('address')}
    get productName(){ return this.profileinputs.get('productName')}
    get loanAmount(){ return this.profileinputs.get('loanAmount')}
    get profileTypeId(){ return this.profileinputs.get('profileTypeId')}

  //variable declaration
  profiledata : any ={};

  
  //onclick save profile function
  save(){

    if(this.profileinputs.get('formStructureId')?.value == "" || this.profileinputs.get('referenceNo')?.value == "" 
    || this.profileinputs.get('name')?.value == "" || this.profileinputs.get('dateOfBirth')?.value == "" || this.profileinputs.get('mobileNo')?.value == ""
     || this.profileinputs.get('emailID')?.value == "" || this.profileinputs.get('relativeName')?.value == "" ||
    this.profileinputs.get('relation')?.value == "" || this.profileinputs.get('address')?.value == "" ||
    this.profileinputs.get('productName')?.value == "" || this.profileinputs.get('loanAmount')?.value == "" ||
    this.profileinputs.get('profileTypeId')?.value == ""){
      alert('working validation');
    }else{
      // console.log(this.profileinputs.value);
      this.url.profileupdate(this.profileinputs.value).subscribe(data=>{
        this.profiledata = data;
       this.url.profilesend(this.profiledata.referenceNo).subscribe(data=>{
         console.log(data,'send api data')
       },error=>{
         console.log(error,"send api error")
       }); 
      console.log(this.profiledata.referenceNo,'refno');
      },error=>{
      console.log(error,'errorprofile');
      });
    }
  }

}

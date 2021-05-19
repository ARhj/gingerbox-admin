import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../userManagement.model';
import { userManagementService } from '../userManagement.service';

@Component({
  selector: 'app-add-user-component',
  templateUrl: './add-user-component.component.html',
  styleUrls: ['./add-user-component.component.css']
})
export class AddUserComponent implements OnInit {
  userDetail : UserDetails= new UserDetails();
  isEmployeeIdValid : boolean = true;
  isUserNameValid : boolean = true;
  isMobileNumValid : boolean = true;
  isEmailValid : boolean = true;
  isRoleValid : boolean = true;
  isPasswordValid : boolean = true;
  
  constructor(private userMgmntService : userManagementService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.isEmployeeIdValid= true;
    this.isUserNameValid = true;
    this.isMobileNumValid = true;
    this.isEmailValid = true;
    this.isRoleValid = true;
    this.isPasswordValid = true;
  }

  saveUser() {
    if(this.validateData()){
      this.userMgmntService.postUser(this.userDetail).subscribe(
        (response)=>{
           this.userDetail = new UserDetails();
            alert("User Created Successfully");
        },
        (error) => {
          alert(error?.error?.Message);
        }
      );
    }    
  }
  
  validateData(): boolean{
    this.initialize();
    var isValid = true;
    if(this.userDetail.empId == undefined || this.userDetail.empId == null ||
      this.userDetail.empId == ""){
      this.isEmployeeIdValid = false;
      isValid = false;
    }
    if(this.userDetail.userName == undefined || this.userDetail.userName == null ||
      this.userDetail.userName == ""){
      this.isUserNameValid = false;
      isValid = false;
    }
    if(this.userDetail.password == undefined || this.userDetail.password == null ||
      this.userDetail.password == ""){
      this.isPasswordValid = false;
      isValid = false;
    }
    if(!this.userDetail.roleID){
      this.isRoleValid = false;
      isValid = false;
    }
    if(this.userDetail.userMobileNo == undefined || this.userDetail.userMobileNo == null ||
      this.userDetail.userMobileNo == ""){
      this.isMobileNumValid = false;
      isValid = false;
    }
    if(this.userDetail.userEmail == undefined || this.userDetail.userEmail == null ||
      this.userDetail.userEmail == ""){
      this.isEmailValid = false;
      isValid = false;
    }
    return isValid;
  }
}

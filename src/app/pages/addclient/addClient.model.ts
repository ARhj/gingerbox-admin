export class client{
    public code : string | undefined;
    public name : string | undefined;
    public address : string | undefined;
    public division : string | undefined;
    public location : string | undefined;
    public logo : string | undefined;
    public adminDetails : adminDetail | undefined;
}

export class adminDetail{
    public empId : string | undefined;
    public userName : string | undefined;
    public designation : string | undefined;
    public userEmail : string | undefined;
    public userMobileNo : string | undefined;
    public password : string | undefined;
} 
import { HttpClient, HttpRequest, HttpResponse } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApisService} from "src/app/apis.service";
import {environment} from "src/environments/environment"; 
import { UserDetails } from "./userManagement.model";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class userManagementService
{
    constructor(private apiService: ApisService){

    }
    
    public postUser(user : UserDetails):Observable<HttpResponse<any>>{
    user.password = btoa(user.password);
    user.organizationID=4;
    let url = `${environment.svc}/${environment.culture}/${environment.version}/organization/${user.organizationID}/user`;
    
    return this.apiService.postEndPoint(url,user);
    }
}
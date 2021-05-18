import { HttpClient, HttpRequest, HttpResponse } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApisService} from "src/app/apis.service";
import {environment} from "src/environments/environment";
import {login} from "./login.model";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class loginService
{
    constructor(private apiService: ApisService){

    }

    public userlogin(login : login): Observable<HttpResponse<any>>{
        let url = environment.svc +"/en/v1/auth";
        login.password = btoa(login.password); 
        
        return this.apiService.postEndPoint(url,login);                   
    }
}
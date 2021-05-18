import { HttpClient, HttpRequest, HttpResponse } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApisService} from "src/app/apis.service";
import {environment} from "src/environments/environment";
import {client} from "./addclient/addClient.model";
 
@Injectable(
    {
        providedIn: 'root'
    }
)
export class clientService
{
    constructor(private apiService: ApisService){

    }
    
    public postClient(data : client):Observable<HttpResponse<any>>{
    let url = environment.svc + "/en/v1/organization";
    
    return this.apiService.postEndPoint(url,data);
    }
}
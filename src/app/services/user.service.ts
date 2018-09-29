import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class UserService {
    constructor(private httpClient:HttpClient) {
    }

    getProfiles(){
        return this.httpClient.get('http://localhost:4000/api/getprofile');
    }
    registerUser(payload){
        return this.httpClient.post('http://localhost:4000/api/register',payload)
    }
    loginUser(payload){
        return this.httpClient.post('http://localhost:4000/api/login',payload)
    }
}


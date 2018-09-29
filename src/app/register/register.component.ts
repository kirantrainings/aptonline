import { Component } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { LookupService } from '../services/lookup.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'apt-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    model: NgbDateStruct;
    date: {year: number, month: number};
      userDetails = {
        firstName: "",
        mobileNumber:"",
        lastName: "",
        age: "",
        gender: "",
        email: "",
        country: 'IN',
        state:'',
        userName:'',
        password:'',
        agree: false
    };
    countries=[];   
    statesByCountry =[];

 constructor(private calendar: NgbCalendar,
    private userSvc:UserService,
    private lookupSvc:LookupService){
     this.lookupSvc.getCountriesFromApi()
     .subscribe((successResult:any)=>{
        console.log(successResult);
        this.countries = successResult;
     },
    (errorResult)=>{
        console.log(errorResult);
    });

     this.getStateByCountry();
 }
    registerUser() {
        console.log(this.userDetails);
        this.userSvc.registerUser(this.userDetails)
        .subscribe((successResult:any)=>{
            console.log(successResult);
            localStorage.setItem('userName',successResult.data.userName);
            localStorage.setItem('authToken',successResult.data.token)
        },
    (err)=>{
        console.log(err);
    })
    }
    getStateByCountry(){
        this.statesByCountry = this.lookupSvc.getStatesByCountry(this.userDetails.country);
    }
    dateSelected(data){
        console.info('parent',data);
        this.userDetails.password=data;
    }
}
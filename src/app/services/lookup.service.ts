import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class LookupService {
    private countries: Array<any>;
    private states:Array<any>;

    constructor(private httpClient:HttpClient) {
        this.countries = [{
            name: 'India',
            value: 'IN'
        },
        {
            name: 'United States',
            value: 'USA'
        }];
        this.states =[{
            countryCode:"IN",
            stateName:"Telangana",
            stateCode:"TS"
        },
        {
            countryCode:"IN",
            stateName:"Andhra Pradesh",
            stateCode:"AP"
        },
        {
            countryCode:"USA",
            stateName:"New York",
            stateCode:"NY"
        },
        
        {
            countryCode:"USA",
            stateName:"New Jersey",
            stateCode:"NJ"
        },
        
        {
            countryCode:"USA",
            stateName:"Chicago",
            stateCode:"CG"
        }
    ];
    }


    getCountries() {
        return this.countries;
    }

    getCountriesFromApi(){
        return this.httpClient.get('https://restcountries.eu/rest/v2/all');
    }

    getStatesByCountry(countryCode){
        return this.states.filter(x=>x.countryCode==countryCode)
    }
}
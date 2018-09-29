import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails: any
  constructor(private userSvc: UserService) {
    this.userDetails = {
      userName: "",
      password: ""
    }
  }

  ngOnInit() {
  }

  login() {
    this.userSvc.loginUser(this.userDetails)
      .subscribe((successResult: any) => {
        console.log(successResult);
        localStorage.setItem('userName', successResult.data.userName);
        localStorage.setItem('authToken', successResult.token)
      },
        (err) => {
          console.log(err);
        })
  }
}

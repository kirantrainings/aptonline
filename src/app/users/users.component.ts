import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  profiles:Array<any>;
  err:any;
  result:boolean
  pager:any;

  constructor(private userSvc:UserService) {
    this.profiles=[];
    this.err='';
    this.result=false;
    this.pager={
      itemsPerPage:10,
      currentPage:1
    }
   }

  ngOnInit() {  
    this.result=true;
    this.userSvc.getProfiles()
    .subscribe((successResult:any)=>{
      console.log(successResult)
      this.profiles = successResult;
      this.result=false;
    },
  (err)=>{
    console.log(err);
    this.err = err;
    this.result=false;
  })
  }
  pageChanged(pageNumber){
    this.pager.currentPage = pageNumber;
  }
  
  
}

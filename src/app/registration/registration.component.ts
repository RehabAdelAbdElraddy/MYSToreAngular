import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { runInThisContext } from 'node:vm';
import { Users } from '../_models/users';
import { UsersService } from '../_service/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
readonly:boolean=false;
MembershipList:string[]=['normal','platinum','Gold'];
usermemberShipe:string=this.MembershipList[Math.floor(Math.random() * ((this.MembershipList.length-1) - 0 + 1)) - 0];
user:Users=new Users("","",this.usermemberShipe);
constructor(private servic:UsersService,public ar:Router) { }
  register(){
    this.servic.signup(this.user).subscribe(a=>{
      console.log(a);
      if(a)
      {
    this.ar.navigateByUrl("/Home")
      }

    })
   
  }
  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../_models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 currentuser:Users;
 discount:number=0
  signup(users:Users){
   // console.log("send",users);
   this.currentuser=users
    
   if(this.currentuser.membership=='platinum')
   {  console.log("platinum");
   
     this.discount=10
   }
   else if(this.currentuser.membership=='Gold')
   { console.log("Gold");
     this.discount=15
   }
    return this.http.post("http://localhost:63947/api/Users",users);
  }
  constructor(private http:HttpClient) { }
}

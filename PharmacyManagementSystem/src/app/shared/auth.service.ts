import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string="https://localhost:44395/api/Users/";
  private userPayload:any;
  constructor(private http:HttpClient,private route:Router) {
    this.userPayload=this.decodedToken();
   }


signUp(userObj:any){
return this.http.post<any>(`${this.baseUrl}SignUp`,userObj)
}

login(loginObj:any){
  return this.http.post<any>(`${this.baseUrl}login`,loginObj)
}
signout(){
  localStorage.clear();
  this.route.navigate(['login'])
}

storeToken(tokenValue:string){
localStorage.setItem('token',tokenValue)
}

getToken(){
  return localStorage.getItem('token')
}
isLoggedIn(): boolean {
  return !!localStorage.getItem('token');
}
decodedToken(){
  const jwtHelper=new JwtHelperService();
  const token=this.getToken()!;
  console.log(jwtHelper.decodeToken(token));
  return jwtHelper.decodeToken(token)
}
getFullNameFromToken(){
 if(this.userPayload)
 return this.userPayload.unique_name;
}
getRoleFromToken(){
if(this.userPayload)
return this.userPayload.role;
}
getEmailFromToken(){
  if(this.userPayload)
  return this.userPayload.email;
}
}
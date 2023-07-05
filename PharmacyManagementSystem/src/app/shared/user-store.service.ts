import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private fullName$=new BehaviorSubject<string>("");
  private role$=new BehaviorSubject<string>("");
  private email$=new BehaviorSubject<string>("");


  constructor() { }
  public getRoleFromStore(){
    return this.role$.asObservable();
  }
  public setRoleForStore(role:string){
     this.role$.next(role);
  }
  getFullNameFromStore(){
    return this.fullName$.asObservable();
  }
  setFullNameForStore(fullname:string){
    this.fullName$.next(fullname);
  }
  public getEmailFromStore(){
    return this.email$.asObservable();
  }
  public setEmailForStore(email:string){
    this.email$.next(email);
}
}

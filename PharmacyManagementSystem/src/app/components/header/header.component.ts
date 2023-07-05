import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/shared/auth.service';
import { UserStoreService } from 'src/app/shared/user-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  isloggedIn=false; 
  public fullName:string="";
  public role:string="";
  public email:string="";
  constructor(public auth:AuthService,public userStore:UserStoreService,private toast:NgToastService){}
  ngOnInit() {
  

    this.isloggedIn = !! this.auth.getToken();
    
    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      let fullNameFromToken=this.auth.getFullNameFromToken();
      this.fullName=val|| fullNameFromToken
    })

    this.userStore.getRoleFromStore()
    .subscribe(val=>{
      let roleFromToken=this.auth.getRoleFromToken();
      this.role=val|| roleFromToken;
    })

    
    
  }
  logout(){
    this.auth.signout();
    this.toast.success({detail:"success",summary:'Logout Successful',duration:5000});
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { AuthService } from 'src/app/shared/auth.service';
import { UserStoreService } from 'src/app/shared/user-store.service';

@Component({
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css']
})
export class DashboardadminComponent implements OnInit {

  public users:any =[];
  public fullName:string="";
  constructor(private api:ApiService,private auth:AuthService,private userStore:UserStoreService){}
  ngOnInit() {
  
    this.api.getUsers()
    .subscribe(res=>{
      console.log('dashboard admin');
      this.users=res;
    })
    this.userStore.getFullNameFromStore()
    .subscribe(val=>{
      let getFullNameFromToken=this.auth.getFullNameFromToken();
      this.fullName=val|| getFullNameFromToken
    
    })
    console.log('dashboard');
  }

}

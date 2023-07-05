import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/shared/auth.service';
import { UserStoreService } from 'src/app/shared/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router,private toast:NgToastService,private userStore:UserStoreService){}

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]]
    });
  }
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          this.auth.storeToken(res.token);
        const tokenPayload=this.auth.decodedToken();
        this.userStore.setFullNameForStore(tokenPayload.unique_name);
       this.userStore.setRoleForStore(tokenPayload.role);
       

          this.toast.success({detail:"success",summary:res.message,duration:5000});
          this.auth.storeToken(res.token);
          if(tokenPayload.role=="Doctor"){
            this.router.navigate(['drugdisplay'])
            
            console.log(tokenPayload.role);
      
          }
          else{
            this.router.navigate(['dashboard']);
          }
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    }
    else{
      this.validateAllFormFileds(this.loginForm);
      alert("Your Form is Invalid!")

    }
    
    
    }
    

    private validateAllFormFileds(formGroup: FormGroup) {
      Object.keys(formGroup.controls) .forEach( field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
      control?.markAsDirty({onlySelf:true});
      } else if (control instanceof FormGroup) {
      this.validateAllFormFileds(control)
  }
})
}
  }

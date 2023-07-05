import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder,private auth:AuthService,private router:Router,private toast:NgToastService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]]
    });
  }

  get name() { return this.signupForm.get('name'); }
  get contact() { return this.signupForm.get('contact'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }

  onSignup() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      console.log("hi");
      
      this.auth.signUp(this.signupForm.value)
      .subscribe({
        next:(res)=>{
     
          this.toast.success({detail:"success",summary:res.message,duration:5000});
          this.signupForm.reset();
          this.router.navigate(['login'])
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })

      
    } else {
      this.validateAllFormFields(this.signupForm);
      alert("Your form is invalid!");
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    })
  }

}
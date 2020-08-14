import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  
  uname = "Shruthi";
  pword = "123456";
  isSubmitted = false;

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
  })

  get formControls() { return this.loginForm.controls; }

  onSubmit(){
    this.isSubmitted = true;
    if(this.loginForm.value['username']==this.uname && this.loginForm.value['password']==this.pword)
    this.router.navigateByUrl('/homepage');
  }

}

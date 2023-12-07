import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  hide = true;
  loginForm!: FormGroup

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      username : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
  }

  onSubmit(){
    console.log(this.loginForm.value);
  }

  get username(){
    return this.loginForm.get('username')!
  }

  get password(){
    return this.loginForm.get('password')!
  }
}

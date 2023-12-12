import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/My-Services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  hide = true;
  loginForm!: FormGroup

  constructor(private fb: FormBuilder, private apiService: ApiService, private route: Router){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      username : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.apiService.loginEmployee(this.loginForm.value).subscribe( 
    { 
      next:(response) => {
        console.log("User Logged in",response)
        this.route.navigate(['employeeList']);

      },
      error:(error) => {
        console.log("Invalid User");
      }
    }
    )
  }

  get username(){
    return this.loginForm.get('username')!
  }

  get password(){
    return this.loginForm.get('password')!
  }
}

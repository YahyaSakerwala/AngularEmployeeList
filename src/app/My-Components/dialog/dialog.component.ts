import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { correctFormDateFormat } from 'src/app/My-Functions/correctFormDateFormat';
import { ApiService } from 'src/app/My-Services/api.service';
import { numvarValidator } from 'src/app/My-Validators/numvarValidator';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{

  employeeForm !: FormGroup;

  constructor(private fb : FormBuilder, private apiService: ApiService){}

  ngOnInit(){
    this.employeeForm = this.fb.group({
      name : ['',[Validators.required,Validators.maxLength(128),numvarValidator()]],
      dateOfJoining : ['',[Validators.required]],
      age : ['',[Validators.required,Validators.max(100)]],
      emailId : ['',[Validators.required,Validators.email]]
    })
  }

  onSubmit(){
    if(this.employeeForm.valid){

      var formvalue_wrongDateFormat_Object = this.employeeForm.value 
      var formvalue=correctFormDateFormat(formvalue_wrongDateFormat_Object)
      console.log(formvalue)

      this.apiService.postNewEmployee(formvalue).subscribe(
      { 
        next:(response) => {
          console.log("received data from backend",response)
          window.location.reload();
        },
        error:() => {

        }
      }  
      )
    }
    else{
      console.log("Form invalid")
      console.log(this.employeeForm)
    }
  }


  get name(){
    return this.employeeForm.get('name')!
  }

  get dateOfJoining(){
    return this.employeeForm.get('dateOfJoining')!
  }

  get age(){
    return this.employeeForm.get('age')!
  }

  get emailId(){
    return this.employeeForm.get('emailId')!
  }

}

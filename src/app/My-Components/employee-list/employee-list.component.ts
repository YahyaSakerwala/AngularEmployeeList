import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from 'src/app/My-Services/api.service';
import { extractHeaders } from 'src/app/My-Functions/extractHeaders';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  displayedColumns: string[] = [];
  getAllApiReponse: any[] = [];
  constructor(private dialog : MatDialog, private apiService: ApiService){}

  

  ngOnInit(): void {
    this.getEmployeeList();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      width:'40%'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    

  }
  // dialogRef.afterClosed().subscribe(result => {
  //   console.log(`Dialog result: ${result}`);
  // });


  getEmployeeList(){

    this.apiService.getEmployeeList().subscribe(
    {
      next:(response)=>{
        console.log(response)
        this.getAllApiReponse=response
        this.displayedColumns=extractHeaders(this.getAllApiReponse);
      },
      error:()=>{

      }
    }
    )

  }

  deleteEmployee(id:number){
    this.apiService.deleteEmployeeList(id).subscribe( () => {
      console.log("Item deleted with id"+id);
    });
  }


}

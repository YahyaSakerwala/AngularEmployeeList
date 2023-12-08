import { MatSnackBar } from "@angular/material/snack-bar";

export class Snackbars {
    constructor(private _snackBar: MatSnackBar){}

    employeeCreated(message:string,action:string){
        this._snackBar.open(message,action,{
            duration:3500,
        });
    }

    employeeEdited(){

    }

    employeeDeleted(){

    }
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './My-Components/employee-list/employee-list.component';
import { LoginComponent } from './My-Components/login/login.component';

const routes: Routes = [
  {path:'', redirectTo: 'employeeList', pathMatch: 'full'},
  { path: 'employeeList', component:EmployeeListComponent},
  { path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  private apiUrl = 'http://192.168.1.66:5000/EmployeeApplication-0.0.1-SNAPSHOT';

  getEmployeeList(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/employees')
  }

  deleteEmployeeList(id:number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/employees/${id}`);
  }

  postNewEmployee(employeeData:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/employees`,employeeData);
  }

  editOldEmployee(editedEmployeeData:any , id:number){
    return this.http.put<any>(`${this.apiUrl}/employees/${id}`,editedEmployeeData)
  }

  loginEmployee(loginForm:any){
    return this.http.post(this.apiUrl+'/login',loginForm)
  }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  private apiUrl = 'http://localhost:5001/EmployeeApplication-0.0.1-SNAPSHOT';

  getEmployeeList(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/employees')
  }

  deleteEmployeeList(id:number): Observable<any> {
    return this.http.delete<any>(`http://localhost:5001/EmployeeApplication-0.0.1-SNAPSHOT/employees/${id}`);
  }

  postNewEmployee(employeeData:any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/employees`,employeeData);
  }

}
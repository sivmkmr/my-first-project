import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:8080/employee/get-all-employees'
  constructor(private httpClient:HttpClient) { }
  getEmployeeList() : Observable<Employee[]> {
    return this.httpClient.get<Employee[]> (`${this.url}`);
  }


  createUrl = 'http://localhost:8080/employee/add-employee'
  createEmployee(employee:Employee) : Observable<Object> {
    return this.httpClient.post(`${this.createUrl}`,employee);
  }



  updateUrl = 'http://localhost:8080/employee/update-employee'
  updateEmployee(id: number, employee:Employee) : Observable<Object> {
    return this.httpClient.post(`${this.updateUrl}/${id}`,employee);
  }


  getEmpByIdUrl = 'http://localhost:8080/employee/get-employee-by-id'
  getEmployeeById(id:number) : Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.getEmpByIdUrl}/${id}`);
  }
  deletEmpUrl = 'http://localhost:8080/employee/delete-employee'
  deleteEmployee(employee:Employee) : Observable<Object> {
    return this.httpClient.post(`${this.deletEmpUrl}`,employee);
  }


}

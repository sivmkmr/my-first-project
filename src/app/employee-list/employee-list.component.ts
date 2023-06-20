import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{



employeeList: Employee[] = [];

constructor(private employeeService:EmployeeService, private router:Router){

}
  ngOnInit(): void {
    this.getEmployeeList();
  }

getEmployeeList(){
this.employeeService.getEmployeeList().subscribe(response=>{
  this.employeeList=response;
});

}


  updateEmployee(id: number) {
    console.log("testing");
    this.router.navigate(['updateEmployee',id]);

  }



  viewEmployee(arg0: number) {
    
    }


    deleteEmployee(arg0: number) {
 
    }
}



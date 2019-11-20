import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
  <h2>Employees Details</h2>
  {{errorMessage}}
  <ul *ngFor= "let emp of employees">
    <li>Id : {{emp.id}},  Name : {{emp.name}}, Age : {{emp.age}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];

  public errorMessage;

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                  error => this.errorMessage = error);
  }

}

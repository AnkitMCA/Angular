import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
  <h2>Employees List</h2>
  {{errorMessage}}
  <ul *ngFor= "let emp of employees">
    <li>{{emp.name}}</li>
  </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

  public errorMessage;

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                  error => this.errorMessage = error);
  }

}

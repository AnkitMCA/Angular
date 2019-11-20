import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute, ParamMap} from '@angular/router'

@Component({
  selector: 'app-department-list',
  template: `
  <h3> Departments List </h3>
  <ul class="items">
      <li *ngFor = "let department of departments" [class.selected] = "isSelected(department)" (click)="onSelect(department)">
          <span>{{department.id}} </span> {{department.name}}
      </li>
  </ul>

  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  private selectedId;

  public departments = [
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
  ]

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department){
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route})
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}

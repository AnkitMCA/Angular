import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>==================String Pipe====================</h2>
  <h2>{{name}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | uppercase}}</h2>
  <h2>{{message | titlecase}}</h2>
  <h2>{{name | slice:1:5}}</h2>
  <h2>{{person | json}}</h2>

  <h2>==================Number Pipe====================</h2>
  <h2>{{7.381 | number:'1.2-3'}}</h2>
  <h2>{{7.381 | number:'3.4-5'}}</h2>
  <h2>{{7.381 | number:'4.1-2'}}</h2>

  <h2>==================Percent Pipe====================</h2>
  <h2>{{0.72 | percent}}</h2>

  <h2>==================Currency Pipe====================</h2>
  <h2>{{123 | currency}}</h2>
  <h2>{{123 | currency : 'INR'}}</h2>
  <h2>{{123 | currency : 'INR' : 'code'}}</h2>

  <h2>==================Date Pipe====================</h2>
  <h2>{{date}}</h2>
  <h2>==================ShortDate Pipe====================</h2>
  <h2>{{date | date:'short'}}</h2>
  <h2>{{date | date:'shortDate'}}</h2>
  <h2>{{date | date:'shortTime'}}</h2>

  <h2>==================MediumDate Pipe====================</h2>
  <h2>{{date | date:'medium'}}</h2>
  <h2>{{date | date:'mediumDate'}}</h2>
  <h2>{{date | date:'mediumTime'}}</h2>

  <h2>==================LongDate Pipe====================</h2>
  <h2>{{date | date:'long'}}</h2>
  <h2>{{date | date:'longDate'}}</h2>
  <h2>{{date | date:'longTime'}}</h2>


  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Sumit";

  public message = "welcome to angular";

  public person = {
    "firstName" : "Sumit",
    "lastName" : "Thakur"
  }

  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}

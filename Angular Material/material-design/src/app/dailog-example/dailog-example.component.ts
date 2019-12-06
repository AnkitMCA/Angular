import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dailog-example',
  templateUrl: './dailog-example.component.html',
  styleUrls: ['./dailog-example.component.css']
})
export class DailogExampleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

// // This is for ngIf 

// @Component({
//   selector: 'app-test',
//   template: `
//   <h2 *ngIf="true">Sumit</h2>
  
//   <h2 *ngIf="displayName; else elsePart">Ankit</h2>
//   <ng-template #elsePart>
//     <h2>Name is Hidden</h2>
//   </ng-template>

//   <h2 *ngIf= "displayName; then thenBlock; else elseBlock"></h2>
//   <ng-template #thenBlock>
//     <h2>Display</h2>
//   </ng-template>
//   <ng-template #elseBlock>
//     <h2>Hidden</h2>
//   </ng-template>
//   `,
//   styles: []
// })
// export class TestComponent implements OnInit {

//   public displayName = false;

//   constructor() { }

//   ngOnInit() {
//   }

// }


// // This is for ngSwitch

// @Component({
//   selector: 'app-test',
//   template: `
//     <div [ngSwitch]="color">
//       <div *ngSwitchCase="'red'">You Picked Red Color</div> 
//       <div *ngSwitchCase="'blue'">You Picked Blue Color</div> 
//       <div *ngSwitchCase="'green'">You Picked Green Color</div>
//       <div *ngSwitchDefault>Please Picked Again</div>
//     </div>  

//   `,
//   styles: []
// })
// export class TestComponent implements OnInit {

//   public color = "blue";

//   constructor() { }

//   ngOnInit() {
//   }

// }


// This is for ngFor

@Component({
  selector: 'app-test',
  template: `
    <span>=======================================<span>
    <div *ngFor="let color of colors">
      <h2>{{color}}</h2>
    </div>
    <span>=======================================<span>
    <div *ngFor="let color of colors; index as i">
      <h2>{{i}} {{color}}</h2>
    </div>
    <span>=======================================<span>
    <div *ngFor="let color of colors; first as f">
      <h2>{{f}} {{color}}</h2>
    </div>
    <span>=======================================<span>
    <div *ngFor="let color of colors; last as l">
      <h2>{{l}} {{color}}</h2>
    </div>
    <span>=======================================<span>
    <div *ngFor="let color of colors; odd as o">
      <h2>{{o}} {{color}}</h2>
    </div>
    <span>=======================================<span>
    <div *ngFor="let color of colors; even as e">
      <h2>{{e}} {{color}}</h2>
    </div>
    <span>=======================================<span>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public colors = ["red", "blue", "green", "yellow"];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

// This @Component is used for interpolation// Data Binding  

// @Component({
//   selector: 'app-test',
//   // <h2>{{window.location.href}}<h2>  // THis will throw an error
//   // But we can use it by assigning its in a variable in class and use it here.
//   template: `
//   <h2>
//   Hello {{name}}
//   </h2>
//   <h2>{{2*3}}</h2>
//   <h2>{{"Welcome " + name}}</h2>
//   <h2>{{name.length}}</h2>
//   <h2>{{name.toUpperCase()}}</h2>
//   <h2>{{testMethod()}}</h2>

//   <h2>{{siteUrl}}<h2>
//   `,
//   styles: []
// })

// // This @Component is used for property binding.
// @Component({
//   selector: 'app-test',
//   // First input tag is using property binding.
//   // Second input tag is using interpolation.
//   template: `
//   <h2>
//   Hello {{name}}
//   </h2>
//   <input [id]="myId" type="text" value="Sumit">

//   <input id="{{myId}}" type="text" value="Sumit">

//   <br>
//   <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Disabled = false; property binding.">

//   <br>
//   <input disabled="false" id="{{myId}}" type="text" value="Disabled = false; interpolation.">

//   <br>
//   <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Disabled = false; property binding.">

//   `,
//   styles: []
// })

// // This @Component is used for class binding.
// @Component({
//   selector: 'app-test',
//   template: `
//   <h2>Hello {{name}}</h2>
//   <h2 class="text-special">Another Message</h2>
//   <h2 [class]="classSuccess">Another Message</h2>  
//   <h2 [class.text-danger]="hasError">Alert Message</h2>
//   <h2 [ngClass]="messageClasses">The New Message</h2>
  
//   `,
//   styles: [`
//     .text-success{
//       color:green;
//     }
//     .text-danger{
//       color:red;
//     }
//     .text-special{
//       font-style:italic;
//     }

//   `]
// })

// // This @Component is used for class binding.
// @Component({
//   selector: 'app-test',
//   template: `
//   <h2>Hello {{name}}</h2>
//   <h2 [style.color] = "'orange'">Another Message</h2>
//   <h2 [style.font-style] = "'italic'">Font Style</h2>
//   <h2 [style.color] = "hasError ? 'yellow' : 'blue'">Conditional Operator</h2>
//   <h2 [style.color] = "highlightColor">Color From Variable</h2>
//   <h2 [ngStyle] = "titleStyles">Multiple Styles in single tag.</h2>

//   `,
//   styles: []
// })

// // This @Component is used for event binding.
// @Component({
//   selector: 'app-test',
//   template: `
//   <h2>Hello {{name}}</h2>
//   <button (click)="onClick($event)">Show Message</button>
//   <br><br>
//   {{message}}
//   <button (click)="message='Hello Sumit.'">Show Message</button>


//   `,
//   styles: []
// })


// // This @Component is used for template reference variables.
// @Component({
//   selector: 'app-test',
//   template: `
//   <h2>Hello {{name}}</h2>

//   <input #myInput type="text">
//   <button (click)="logMessage(myInput.value)">Show Log</button>
//   <br><br>
//   {{log}}

//   `,
//   styles: []
// })

// This @Component is used for Two way binding.
@Component({
  selector: 'app-test',
  template: `
  <input [(ngModel)]="name" type="text">
  {{name}}

  `,
  styles: []
})



// This class is used for interpolation
// export class TestComponent implements OnInit {

//   public name = "Sumit";
//   public siteUrl = window.location.href;

//   constructor() { }

//   ngOnInit() {
//   }\\

//   testMethod(){
//     return "Test method created by : " + this.name; 
//   }
// }

// This class is used for property binding.
// export class TestComponent implements OnInit {

//   public name = "Sumit";
  
//   public myId = "testId";

//   public isDisabled = false;

//   constructor() { }

//   ngOnInit() {
//   }

// }


// // This class is used for class binding.
// export class TestComponent implements OnInit {

//   public name = "Sumit";

//   public classSuccess = "text-success";

//   public hasError = true;

//   public isSpecial = true;

//   public messageClasses = {
//     "text-success" : !this.hasError,
//     "text-danger" : this.hasError,
//     "text-special" : this.isSpecial
//   }
  
//   constructor() { }

//   ngOnInit() {
//   }

// }

// // This class is used for style binding.
// export class TestComponent implements OnInit {

//   public name = "Sumit";
 
//   public hasError = false;

//   public highlightColor = "purple"
  
//   public titleStyles = {
//     color : "blue",
//     fontStyle : "italic"  
//   }

//   constructor() { }

//   ngOnInit() {
//   }

// }

// // This class is used for event binding.
// export class TestComponent implements OnInit {

//   public name = "Sumit";

//   public message = "";
 
//   onClick(event){
//     console.log("Welcome to Angular.");
//     this.message = "Welcome to Angular." + " Event Type : "+event.type;
//     console.log(event);
//   }

//   constructor() { }

//   ngOnInit() {
//   }

// }

// // This class is used for template reference variables.
// export class TestComponent implements OnInit {

//   public name = "Sumit";

//   public log = "";

//   logMessage(value){
//     console.log(value);
//     this.log = value;
//   }

//   constructor() { }

//   ngOnInit() {
//   }

// }

// This class is used for two way binding.
export class TestComponent implements OnInit {

  public name = "";

  constructor() { }

  ngOnInit() {
  }

}
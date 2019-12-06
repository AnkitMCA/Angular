import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { MatSnackBar, MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DailogExampleComponent } from './dailog-example/dailog-example.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'material-design';
  notifications = 0;
  
  showSpinner = false;
  
loadData() {
  this.showSpinner = true;
  setTimeout(() => {
    this.showSpinner = false;
  }, 5000);
}

opened = false;
log(state) {
  console.log(state);  
}

logChange(index){
  console.log(index);
}

selectedValue:string;

options : string[] = ['One', 'Two', 'Three'];

objectOptions = [
  {name :'First'},
  {name :'Second'},
  {name :'Third'},
];

displayFunction(opt){
  return opt ? opt.name : undefined;
}

myControl = new FormControl();
filteredOptions : Observable<string[]>;

ngOnInit() {
  this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
  );

  this.dataSourceArray.sort = this.sort;
  this.dataSourceArray.paginator = this.paginator;
}
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(
      option => option.toLowerCase().includes(filterValue)
    );
  }

minDate = new Date();
maxDate = new Date(2019, 11, 15);

constructor(private snackBar : MatSnackBar, private dialog : MatDialog){
  for(let i = 0; i < 1000; i++){
    this.numbers.push(i);
  }
}

openSnackBar(message, action){
  let snackBarRef = this.snackBar.open(message, action, {duration : 2000});
  snackBarRef.afterDismissed().subscribe(() => {
    console.log('SnackBar was dismissed');
  });
  snackBarRef.onAction().subscribe(() => {
    console.log('SnackBar action was triggered.');
  });
}

openDialog(){
  let dialogRef = this.dialog.open(DailogExampleComponent, {data : {name : "Ankit"}});
  dialogRef.afterClosed().subscribe(
    result => {
      console.log(`Dialog Result : ${result}`);
    });

}

displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSourceArray = new MatTableDataSource(ELEMENT_DATA);

logRowData(row) {
  console.log(row);
}

applyFilter(filterValue : string) {
  this.dataSourceArray.filter = filterValue.trim().toLowerCase();
}

@ViewChild(MatSort, {static : true}) 
sort : MatSort;

@ViewChild(MatPaginator, {static : true}) 
paginator : MatPaginator;

numbers = [];

}
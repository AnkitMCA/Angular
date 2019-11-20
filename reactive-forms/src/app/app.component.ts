import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators, FormGroup, FormArray } from "@angular/forms";
import { forbiddenNameValidator } from "./shared/user-name.validator";
import { PasswordValidator } from "./shared/password.validator";
import { RegistrationService } from "./registration.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  registrationForm : FormGroup;

  // getter
  get userName(){
    return this.registrationForm.get('userName');
  }

  // getter
  get email(){
    return this.registrationForm.get('email');
  }

  get alternativeEmails(){
    return this.registrationForm.get('alternativeEmails') as FormArray;
  }

  addAlternativeEmail(){
    this.alternativeEmails.push(this.fb.control(''))
  }

  constructor(private fb : FormBuilder, private _registrationService : RegistrationService){}

  ngOnInit(){
    this.registrationForm = this.fb.group({
      userName : ['Sumit', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/admin/)]],
      email : [''],
      subscribe : [false],
      password : [''],
      confirmPassword : [''],
      address : this.fb.group({
        city : [''],
        state : [''],
        postalCode : ['']
      }),
      alternativeEmails : this.fb.array([])
    }, {validator : PasswordValidator});

    this.registrationForm.get('subscribe').valueChanges
      .subscribe( checkedValue => {
        const email = this.registrationForm.get('email');
        if(checkedValue){
          email.setValidators(Validators.required);
        } else{
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });
  }

  
  // registrationForm = new FormGroup({
  //   userName : new FormControl('Sumit'),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  //   address : new FormGroup({
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     postalCode : new FormControl('')
  //   })
  // });

  // setValue() => method set all the values otherwise throw error.
  // loadAPIData(){
  //   this.registrationForm.setValue({
  //     userName : 'Sumit',
  //     password : 'test',
  //     confirmPassword : 'test',
  //     address : {
  //       city : 'City',
  //       state : 'State',
  //       postalCode : '123456'
  //     }
  //   })
  // }

  // patchValue() => method can set few or all fields values.
  loadAPIData(){
    this.registrationForm.patchValue({
      userName : 'Sumit',
      password : 'test',
      confirmPassword : 'test',
    })
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
        .subscribe(
          response => console.log('Success! ', response),
          error => console.error('Error! ',error)
        );
  }
}

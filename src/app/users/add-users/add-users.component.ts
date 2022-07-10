import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css'],
})
export class AddUsersComponent implements OnInit {
  // form: FormControl;

  constructor() {
    // this.form = new FormControl();
  }

  // ngOnInit(): void {}
  // email = new FormControl('', [Validators.required, Validators.email]);
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
}

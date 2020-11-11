import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  emailid: String = '';
  password: String = '';
  submitted: boolean = false;

  constructor() { } 

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'emailid': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]),
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }
}

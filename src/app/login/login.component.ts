import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

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

  // constructor(private messageService: MessageService) { }
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'emailid': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required]),
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('this.loginForm', this.loginForm)
    // stop here if form is invalid
    if (!this.loginForm.invalid) {
      // api call
      // toast
      // this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
      //change route
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
    }
  }
}

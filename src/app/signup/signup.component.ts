import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: String = '';
  password: String = '';
  name: String = '';
  gender: String = '';
  address: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}

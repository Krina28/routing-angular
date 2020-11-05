import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String = '';
  password: String = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}

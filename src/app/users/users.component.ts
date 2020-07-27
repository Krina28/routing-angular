import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  allUsers: any = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getAllUsers()
      .subscribe((data) => {
        console.log('data', data)
        this.allUsers = data;
      });

    console.log('all users list', this.allUsers)
  }

}

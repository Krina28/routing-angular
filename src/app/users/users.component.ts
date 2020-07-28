import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  allUsers: any = [];

  constructor(private appService: AppService) { }

  async ngOnInit() {
    const data = await this.appService.getAllUsers().pipe(take(1)).toPromise();

    console.log('data', data)
    this.allUsers = data;

    //This had issue of async await - please explain
    // await this.appService.getAllUsers()
    //   .subscribe((data) => {
    //     console.log('data', data)
    //     this.allUsers = data;
    //   });
    console.log('all users list', this.allUsers)
  }

}

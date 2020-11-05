import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  router: Router;
  allUsers: any = [];

  constructor(private appService: AppService) { }

  //table view, sorting, pagination, searching
  async ngOnInit() {
    //const data = await this.appService.getAllUsers().pipe(take(1)).toPromise();

    //console.log('data', data)
    //this.allUsers = data;

    //This had issue of async await - please explain
    await this.appService.getAllUsers()
      .subscribe((data) => {
        console.log('data', data)
        this.allUsers = data;
      });
    console.log('all users list', this.allUsers)
  }

  public goToUser(id: String) {
    console.log('>>>>user id', id)
    this.router.navigate(['/users/' + id]);
  }

}

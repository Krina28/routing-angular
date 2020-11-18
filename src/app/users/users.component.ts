import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SortEvent, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  router: Router;
  allUsers: any = [];
  title: string = "User List";
  loading: boolean = true;

  constructor(private appService: AppService, private confirmationService: ConfirmationService) { }

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
        this.loading = false;
      });
    console.log('all users list', this.allUsers)
  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order * result);
    });
  }

  public goToUser(id: String) {
    console.log('>>>>user id', id)
    this.router.navigate(['/users/' + id]);
  }

  public deleteUser(user: Object) {
    console.log('delete', user);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        console.log('selected yes')
        //Actual logic to perform a confirmation
      }
    });
  }

}

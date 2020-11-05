import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: Object = {};

  constructor(private appService: AppService) { }

  async ngOnInit() {
    //pass dynamic id, get id from routing
    const data = await this.appService.getUserDetail('1').pipe(take(1)).toPromise();

    console.log('data', data)
    this.userDetails = data;

    console.log('user details', this.userDetails)
  }

}

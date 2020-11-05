import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {
    private url: string = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient) { }

    getAllUsers() {
        return this.http.get(this.url + '/users');
    }

    getAllProducts() {
        return this.http.get(this.url + '/photos');
    }

    getUserDetail(id: String) {
        return this.http.get(this.url + '/users/' + id);
    }
    // handleError(error: any) {
    //     console.error(error);
    //     return Observable.throw(error.json().error || 'Server error');
    // }    
}

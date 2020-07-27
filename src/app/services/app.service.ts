import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {
    
    private url: string = 'https://jsonplaceholder.typicode.com/users';
    
    constructor(private http: HttpClient) { }
    
    getAllUsers()  {
        return this.http.get(this.url);
    }
    
    // handleError(error: any) {
    //     console.error(error);
    //     return Observable.throw(error.json().error || 'Server error');
    // }    
}

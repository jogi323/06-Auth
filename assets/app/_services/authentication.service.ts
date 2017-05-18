import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { User }   from '../Main/models/user.model';
import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }
    loginUrl  ="http://localhost:3000/user/signin";
    // signin(user: User) {
    //     const body = JSON.stringify(user);
    //     const headers = new Headers({'Content-Type': 'application/json'});
    //     return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
    //         .map((response: Response) => response.json())
    //         .catch((error: Response) => Observable.throw(error.json()));
    // }
    login(user: User) {
        console.log(user);
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.loginUrl, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
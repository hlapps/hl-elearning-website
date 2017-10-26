import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../models/user'
import { environment } from '../../environments/environment';

@Injectable()
export class UsersService {
    constructor(private _http: Http) { }

    postUser(user: User) {
        return this._http.post(
            `${environment.accountsManager.serviceUrl}/users`,
            { origin: 'elearning-website', user })
            .map((res) => res.json());
    }

    authUser(user: User) {
        return this._http.post(
            `${environment.accountsManager.serviceUrl}/users/auth`,
            { username: user.username, password: user.password })
            .map((res) => res.json());
    }
}
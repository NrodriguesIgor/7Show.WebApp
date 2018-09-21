import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../model/user.model';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<User[]> {
        return this.http
                    .get<User[]>(`${environment.api}/api/user`);
    }

    get(id) : Observable<User> {
        const params: HttpParams = new HttpParams()
            .set('id', id);

        return this.http
                    .get<User>(`${environment.api}/api/user/`, { params: params });
    }

    update(presenter: User): Observable<any> {
        let params: HttpParams = new HttpParams().set('id', presenter.userId);

        return this.http
                    .put<any>(`${environment.api}/api/user`, presenter, { params: params });
    }

    delete(id) : Observable<void> {
        const params: HttpParams = new HttpParams()
            .set('id', id);

        return this.http
                    .delete<void>(`${environment.api}/api/user/delete`, { params: params });
    }

}
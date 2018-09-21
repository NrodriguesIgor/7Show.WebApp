import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Presenter } from '../model/presenter.model';

@Injectable()
export class PresenterService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<Presenter[]> {
        return this.http
                    .get<Presenter[]>(`${environment.api}/api/presenter`);
    }

    get(id) : Observable<Presenter> {
        const params: HttpParams = new HttpParams()
            .set('id', id);

        return this.http
                    .get<Presenter>(`${environment.api}/api/presenter/`, { params: params });
    }

    update(presenter: Presenter): Observable<any> {
        let params: HttpParams = new HttpParams().set('id', presenter.presenterId);

        return this.http
                    .put<any>(`${environment.api}/api/presenter`, presenter, { params: params });
    }

    delete(id) : Observable<void> {
        const params: HttpParams = new HttpParams()
            .set('id', id);

        return this.http
                    .delete<void>(`${environment.api}/api/presenter/delete`, { params: params });
    }

}
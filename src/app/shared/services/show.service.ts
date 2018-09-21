import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Show } from '../model/show.model';

@Injectable()
export class ShowService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<Show[]> {
        return this.http
                    .get<Show[]>(`${environment.api}/api/show`);
    }

    get(id) : Observable<Show> {
        const params: HttpParams = new HttpParams()
            .set('id', id);

        return this.http
                    .get<Show>(`${environment.api}/api/show/`, { params: params });
    }

    update(presenter: Show): Observable<any> {
        let params: HttpParams = new HttpParams().set('id', presenter.showId);

        return this.http
                    .put<any>(`${environment.api}/api/show`, presenter, { params: params });
    }

    delete(id) : Observable<void> {
        const params: HttpParams = new HttpParams()
            .set('id', id);

        return this.http
                    .delete<void>(`${environment.api}/api/show/delete`, { params: params });
    }

}
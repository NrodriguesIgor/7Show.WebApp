import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { UserQuestion } from '../model/user-question.model';

@Injectable()
export class UserQuestionService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<UserQuestion[]> {
        return this.http
                    .get<UserQuestion[]>(`${environment.api}/api/userquestion`);
    }

    get(id) : Observable<UserQuestion> {
        const params: HttpParams = new HttpParams()
            .set('id', id);

        return this.http
                    .get<UserQuestion>(`${environment.api}/api/userquestion/`, { params: params });
    }

    update(presenter: UserQuestion): Observable<any> {
        let params: HttpParams = new HttpParams().set('id', presenter.userQuestionId);

        return this.http
                    .put<any>(`${environment.api}/api/userquestion`, presenter, { params: params });
    }

    delete(id) : Observable<void> {
        const params: HttpParams = new HttpParams()
            .set('id', id);

        return this.http
                    .delete<void>(`${environment.api}/api/userquestion/delete`, { params: params });
    }

}
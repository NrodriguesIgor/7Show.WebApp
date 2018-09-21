import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ShowQuestionItemUser } from '../model/show-question-item-user.model';

@Injectable()
export class ShowQuestionItemUserService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<ShowQuestionItemUser[]> {
        return this.http
                    .get<ShowQuestionItemUser[]>(`${environment.api}/api/showquestionitemuser`);
    }

    get(id) : Observable<ShowQuestionItemUser> {
        const params: HttpParams = new HttpParams()
            .set('id', id);

        return this.http
                    .get<ShowQuestionItemUser>(`${environment.api}/api/showquestionitemuser/`, { params: params });
    }

    update(presenter: ShowQuestionItemUser): Observable<any> {
        let params: HttpParams = new HttpParams().set('id', presenter.showQuestionItemUserId);

        return this.http
                    .put<any>(`${environment.api}/api/showquestionitemuser`, presenter, { params: params });
    }

    delete(id) : Observable<void> {
        const params: HttpParams = new HttpParams()
            .set('id', id);

        return this.http
                    .delete<void>(`${environment.api}/api/showquestionitemuser/delete`, { params: params });
    }

}
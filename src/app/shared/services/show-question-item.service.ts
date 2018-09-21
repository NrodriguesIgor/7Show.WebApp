import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ShowQuestionItem } from '../model/show-question-item';

@Injectable()
export class ShowQuestionItemService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<ShowQuestionItem[]> {
        return this.http
                    .get<ShowQuestionItem[]>(`${environment.api}/api/showquestionitem`);
    }

    get(id) : Observable<ShowQuestionItem> {
        const params: HttpParams = new HttpParams()
            .set('id', id);

        return this.http
                    .get<ShowQuestionItem>(`${environment.api}/api/showquestionitem/`, { params: params });
    }

    update(presenter: ShowQuestionItem): Observable<any> {
        let params: HttpParams = new HttpParams().set('id', presenter.showQuestionItemId);

        return this.http
                    .put<any>(`${environment.api}/api/showquestionitem`, presenter, { params: params });
    }

    delete(id) : Observable<void> {
        const params: HttpParams = new HttpParams()
            .set('id', id);

        return this.http
                    .delete<void>(`${environment.api}/api/showquestionitem/delete`, { params: params });
    }

}
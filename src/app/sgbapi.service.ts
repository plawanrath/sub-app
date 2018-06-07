import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import { catchError, map, tap } from 'rxjs/operators';

import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SgbapiService {

  constructor(private http: HttpClient) { }

  sendEmail(category: string, message: string): Observable<Object> {
    const url = 'https://api.emailjs.com/api/v1.0/email/send';
    const data = {
      service_id: 'outlook',
      template_id: 'sgbqa',
      user_id: 'user_Y7yvlXOu5MibTRgDg9Ce6',
      template_params: {
        'category': category,
        'message': message
      }
    };
    return this.http.post<Object>(url, JSON.stringify(data), httpOptions)
      .pipe(catchError(this.handleError('sendEmail')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return(error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

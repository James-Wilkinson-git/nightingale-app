import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(endpoint: string): Observable<any[]> {
    return this.http
      .get<any[]>(
        `https://us-central1.gcp.data.mongodb-api.com/app/application-0-zmzbr/endpoint/${endpoint}`
      )
      .pipe(
        map((response: any) => {
          const data = JSON.parse(response);
          return data.map((item: any) => {
            delete item['_id'];
            return item;
          });
        }),
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

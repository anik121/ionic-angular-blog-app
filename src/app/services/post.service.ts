import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private _http: HttpClient) {}

  postData(): Observable<any> {
    return this._http.get(
      'https://jsonplaceholder.typicode.com/posts?userId=1'
    );
  }
  postSingleData(id: number): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }
}

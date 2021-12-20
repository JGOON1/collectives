import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CollectiveService {

  constructor(private http:HttpClient) { 
  }

  newData():Observable<any> {
    let url="http://localhost:8082/api/books/";
    return this.http.get(url)
  }
}

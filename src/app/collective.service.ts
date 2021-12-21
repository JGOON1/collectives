import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const baseURL = "http://localhost:8082/api/books/";

@Injectable({
  providedIn: 'root'
})
export class CollectiveService {

  constructor(private http:HttpClient) { 
  }

  // create(data): Observable<any> {
  //   return this.http.post(baseURL, data);
  // }


  newData():Observable<any> {
    let url="http://localhost:8082/api/books/";
    return this.http.get(url)
  }

  onDelete(id: number) {
    return this.http.delete(`${baseURL}${id}`)

  }
}

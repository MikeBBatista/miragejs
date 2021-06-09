import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { catchError } from 'rxjs/operators'

@Injectable()
export class AppService {
  private httpClient: HttpClient;
  private url = '/api/users';

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  protected head = new HttpHeaders({
    'Content-Type': 'application/json;odata.metadata=minimal',
    Accept: 'application/json',
  });
  
  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  insertUser(user: User): Observable<any>{
    return this.httpClient.post<User>(this.url, user, {headers: this.head}).pipe(catchError(async (res) => console.log(res)));
  }
}